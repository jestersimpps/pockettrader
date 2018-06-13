import { Component, State, Prop } from '@stencil/core';
import { CURRENCYSERVICE, BALANCESERVICE, EXCHANGESERVICE, TICKERSERVICE } from '../../services/globals';
import highcharts from '../../global/highcharts';
import numeral from 'numeral';
import { Currency, BtcPrice } from '../../services/currency.service';
import { Balance } from '../../services/balance.service';
import { Exchanges, Exchange, ExchangeId } from '../../services/exchange.service';
import { appSetExchanges, appSetBaseCurrency, appSetConversionRates, appSetTickers, appSetTotalBalances } from '../../actions/app';
import { Store, Action } from '@stencil/redux';
import { Ticker } from '../../services/ticker.service';

@Component({
  tag: 'app-exchanges',
  styleUrl: 'app-exchanges.css',
})
export class AppExchanges {
  @Prop({ context: 'store' })
  store: Store;

  @State() exchanges: Exchange[] = [];
  @State() isLoading = true;
  @State() baseCurrency: Currency;
  @State() conversionRates: BtcPrice;
  @State() totalBalance: number;
  @State() tickers: any[];
  @State() segment = '1';

  chart;

  appSetExchanges: Action;
  appSetBaseCurrency: Action;
  appSetConversionRates: Action;
  appSetTickers: Action;
  appSetTotalBalances: Action;

  componentWillLoad() {
    this.store.mapStateToProps(this, (state) => {
      const {
        app: { exchanges, baseCurrency, conversionRates, tickers },
      } = state;
      return {
        exchanges,
        baseCurrency,
        conversionRates,
        tickers,
      };
    });
    this.store.mapDispatchToProps(this, {
      appSetExchanges,
      appSetBaseCurrency,
      appSetConversionRates,
      appSetTickers,
      appSetTotalBalances,
    });
  }

  componentDidUpdate() {
    this.updateTotalBalance();
  }

  componentDidLoad() {
    EXCHANGESERVICE.getExchanges()
      .then((exchanges) => {
        if (!exchanges) {
          this.appSetExchanges(Exchanges);
        } else {
          this.appSetExchanges(exchanges);
        }
        return CURRENCYSERVICE.getBaseCurrency();
      })
      .then((baseCurrency) => {
        if (!baseCurrency) {
          this.appSetBaseCurrency(Currency.mbtc);
        } else {
          this.appSetBaseCurrency(baseCurrency);
        }
        return CURRENCYSERVICE.getConversionRates();
      })
      .then((conversionRates) => {
        this.appSetConversionRates(conversionRates);
        return TICKERSERVICE.getTickersFromStore();
      })
      .then((tickers) => {
        tickers ? this.appSetTickers(tickers) : this.appSetTickers([]);
        return BALANCESERVICE.getTotalBalances();
      })
      .then((totalBalances) => {
        if (!totalBalances) {
          totalBalances = [];
          this.totalBalance = 0;
          BALANCESERVICE.setTotalBalances([]);
        } else {
          this.updateTotalBalance();
        }
        // this.drawChart(totalBalances);
        this.isLoading = false;
      });
  }

  updateTotalBalance() {
    BALANCESERVICE.getTotalBalances().then((totalBalances) => {
      this.totalBalance = CURRENCYSERVICE.convertToBase(BALANCESERVICE.getLatestTotal(totalBalances), this.conversionRates, this.baseCurrency);
    });
  }

  drawChart(totalBalances) {
    this.chart = highcharts.chart('spline', {
      chart: {
        type: 'spline',
      },

      title: {
        text: '',
      },
      xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
          // don't display the dummy year
          month: '%e. %b',
          year: '%b',
        },
        title: {
          text: 'Date',
        },
      },
      yAxis: {
        title: {
          text: `Balance (BTC)`,
        },
      },
      tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '<b>Time:</b> {point.x:%e %b %Y, %H:%M}<br><b>Balance:</b> {point.y:.8f} BTC',
      },

      plotOptions: {
        spline: {
          marker: {
            enabled: true,
            radius: 2,
            // fillColor: '#488aff',
          },
        },
      },
      colors: ['#000'],
      series: [
        {
          name: 'Total BTC Balance over time',
          data: totalBalances,
        },
      ],
    });
  }

  getBtcStats(balance: Balance, tickerData): { price: number; balance: number; change: number } {
    let stats = { price: 0, balance: 0, change: 0 };
    const innerTicker = tickerData.find((t) => t.symbol === `${balance.currency}/BTC`);
    if (balance.currency === 'BTC') {
      stats.balance = balance.balance;
      stats.price = 1;
    }
    // TODO fiat
    if (innerTicker) {
      stats.balance = balance.balance * innerTicker.last;
      stats.price = innerTicker.last;
      stats.change = innerTicker.percentage;
    }
    return stats;
  }

  refreshBalances() {
    this.isLoading = true;
    let exchangeIds: ExchangeId[] = [];
    let tickerPromises = [];
    let balancePromises = [];
    let tickers: Ticker[] = [];

    this.exchanges.filter((e) => e.key && e.secret).forEach((exchange) => {
      exchangeIds.push(exchange.id);
      tickerPromises.push(TICKERSERVICE.getTickers(exchange.id));
      balancePromises.push(BALANCESERVICE.getBalances(exchange));
    });

    CURRENCYSERVICE.getConversionRates()
      .then((priceData) => {
        Promise.all(tickerPromises)
          .then((tickerData) => {
            Promise.all(balancePromises)
              .then((balanceData) => {
                let tempTotalBtcBalance = 0;
                for (let index = 0; index < exchangeIds.length; index++) {
                  tickers.push({
                    exchangeId: exchangeIds[index],
                    tickers: tickerData[index].data,
                  });
                  const currentExchange = this.exchanges.filter((e) => e.key && e.secret)[index];
                  currentExchange.balances = balanceData[index].data

                    .map((balance: Balance) => {
                      const btc = this.getBtcStats(balance, tickerData[index].data);
                      tempTotalBtcBalance += btc.balance;
                      return {
                        name: balance.currency,
                        y: CURRENCYSERVICE.convertToBase(btc.balance, this.conversionRates, this.baseCurrency),
                        btc: btc.balance,
                        mbtc: btc.balance * priceData.mBTC,
                        usd: btc.balance * priceData.USD,
                        eur: btc.balance * priceData.EUR,
                        gbp: btc.balance * priceData.GBP,
                        balance: balance.balance,
                        currency: balance.currency,
                        btcprice: btc.price,
                        change: btc.change,
                      };
                    })
                    .filter((b) => {
                      return +b.usd > 0.01; // leave out dust balances
                    });
                }
                this.appSetTickers(tickers);
                this.setNewTotalBalance(tempTotalBtcBalance);
                EXCHANGESERVICE.setExchanges(this.exchanges);
                this.isLoading = false;
              })
              .catch((error) => {
                console.error(error.message);
                this.isLoading = false;
              });
          })
          .catch((error) => {
            console.error(error.message);
            this.isLoading = false;
          });
      })
      .catch((error) => {
        console.error(error.message);
        this.isLoading = false;
      });
  }

  setNewTotalBalance(totalBtcBalance: number) {
    this.totalBalance = CURRENCYSERVICE.convertToBase(totalBtcBalance, this.conversionRates, this.baseCurrency) || 0;
    BALANCESERVICE.getTotalBalances().then((totalBalances) => {
      if (totalBtcBalance && totalBtcBalance > 0) {
        let now = new Date().getTime();
        BALANCESERVICE.setTotalBalances([...totalBalances, [now, totalBtcBalance]]);
        this.appSetTotalBalances([...totalBalances, [now, totalBtcBalance]]);

        // this.chart.series[0].addPoint([now, totalBtcBalance]);
      }
    });
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="dark">
          <ion-buttons slot="start">
            <ion-button icon-only disabled={this.isLoading} onClick={() => this.refreshBalances()}>
              <ion-icon name="md-refresh" padding />
            </ion-button>
          </ion-buttons>

          <ion-title text-center>
            <ion-badge color="light">
              {`${numeral(this.totalBalance).format(this.baseCurrency === Currency.btc ? '0,0.0000' : '0,0.00')} ${this.baseCurrency}`}
            </ion-badge>
          </ion-title>
          <ion-buttons slot="end">
            <ion-button icon-only href="/settings">
              <ion-icon name="md-menu" padding />
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
        <ion-segment color="light" padding value={this.segment}>
          <ion-segment-button value="1" onClick={() => (this.segment = '1')}>
            Overview
          </ion-segment-button>
          <ion-segment-button value="2" onClick={() => (this.segment = '2')}>
            Balances
          </ion-segment-button>
          <ion-segment-button value="3" onClick={() => (this.segment = '3')}>
            Markets
          </ion-segment-button>
        </ion-segment>
        {!this.isLoading && this.segment === '1' && <app-sunburst exchanges={this.exchanges} />}
        <ion-list>
          {!this.isLoading &&
            this.segment === '2' &&
            this.exchanges.filter((e) => e.key && e.secret).map((exchange) => (
              <ion-item lines="full" href={`/exchanges/${exchange.id}`}>
                <ion-thumbnail item-start margin-right>
                  <img src={exchange.icon} />
                </ion-thumbnail>
                <ion-label>{exchange.id}</ion-label>
                {!this.isLoading && (
                  <ion-badge color="light" item-end>
                    {`${numeral(CURRENCYSERVICE.getBtcTotal(exchange, this.conversionRates, this.baseCurrency)).format(
                      this.baseCurrency === Currency.btc ? '0,0.0000' : '0,0.00',
                    )} ${this.baseCurrency}`}
                  </ion-badge>
                )}
              </ion-item>
            ))}
        </ion-list>
      </ion-content>,
      // <ion-footer>
      //   <ion-toolbar>
      //     <ion-item lines="none">
      //       <ion-label>Total</ion-label>
      //       <ion-badge color="light" item-end>
      //         {!this.isLoading &&
      //           `${numeral(this.totalBalance).format(this.baseCurrency === Currency.btc ? '0,0.0000' : '0,0.00')} ${this.baseCurrency}`}
      //       </ion-badge>
      //     </ion-item>

      //     <div id="spline" class="chart" />
      //     <ion-button icon-left color="dark" class="full" disabled={this.isLoading} onClick={() => this.refreshBalances()}>
      //       {this.isLoading ? <ion-spinner name="lines-small" /> : `Refresh`}
      //     </ion-button>
      //   </ion-toolbar>
      // </ion-footer>,
    ];
  }
}
