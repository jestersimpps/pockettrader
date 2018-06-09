import { Component, State, Prop } from '@stencil/core';
import { CURRENCYSERVICE, BALANCESERVICE, EXCHANGESERVICE, TICKERSERVICE } from '../../services/globals';
import highcharts from '../../global/highcharts';
import numeral from 'numeral';
import { Currency, BtcPrice } from '../../services/currency.service';
import { Balance } from '../../services/balance.service';
import { Exchanges, Exchange } from '../../services/exchange.service';
import { appSetExchanges, appSetBaseCurrency, appSetConversionRates } from '../../actions/app';
import { Store, Action } from '@stencil/redux';

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

  chart;

  appSetExchanges: Action;
  appSetBaseCurrency: Action;
  appSetConversionRates: Action;

  componentWillLoad() {
    this.store.mapStateToProps(this, (state) => {
      const {
        app: { exchanges, baseCurrency, conversionRates },
      } = state;
      return {
        exchanges,
        baseCurrency,
        conversionRates,
      };
    });
    this.store.mapDispatchToProps(this, {
      appSetExchanges,
      appSetBaseCurrency,
      appSetConversionRates,
    });
  }

  componentDidUpdate() {
    BALANCESERVICE.getTotalBalances().then((totalBalances) => {
      this.totalBalance = CURRENCYSERVICE.convertToBase(BALANCESERVICE.getLatestTotal(totalBalances), this.conversionRates, this.baseCurrency);
    });
  }

  componentDidLoad() {
    EXCHANGESERVICE.getExchanges()
      .then((exchanges) => {
        this.isLoading = false;
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
        return BALANCESERVICE.getTotalBalances();
      })
      .then((totalBalances) => {
        if (!totalBalances) {
          totalBalances = [];
          this.totalBalance = 0;
          BALANCESERVICE.setTotalBalances([]);
        } else {
          this.totalBalance = CURRENCYSERVICE.convertToBase(BALANCESERVICE.getLatestTotal(totalBalances), this.conversionRates, this.baseCurrency);
        }
        this.drawChart(totalBalances);
        this.isLoading = false;
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

  getBtcTotal(exchange) {
    let sum = 0;
    exchange.balances.forEach((balance: Balance) => {
      sum += balance.btc;
    });
    return CURRENCYSERVICE.convertToBase(sum, this.conversionRates, this.baseCurrency);
  }

  getBtcValue(balance: Balance, tickerData) {
    const innerTicker = tickerData.find((t) => t.symbol === `${balance.currency}/BTC`);
    if (balance.currency === 'BTC') {
      return balance.balance;
    }
    if (innerTicker) {
      return balance.balance * innerTicker.last;
    } else {
      return 0;
    }
  }

  refreshBalances() {
    this.isLoading = true;
    let tickerPromises = [];
    let balancePromises = [];
    this.exchanges.filter((e) => e.key && e.secret).forEach((exchange) => {
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
                for (let index = 0; index < tickerData.length; index++) {
                  const currentExchange = this.exchanges.filter((e) => e.key && e.secret)[index];
                  currentExchange.balances = balanceData[index].data.filter((b) => b.balance > 0).map((balance) => {
                    const btcbalance = this.getBtcValue(balance, tickerData[index].data);
                    tempTotalBtcBalance += btcbalance;
                    return {
                      name: balance.currency,
                      y: CURRENCYSERVICE.convertToBase(btcbalance, this.conversionRates, this.baseCurrency),
                      btc: btcbalance,
                      mbtc: btcbalance * priceData.mBTC,
                      usd: btcbalance * priceData.USD,
                      eur: btcbalance * priceData.EUR,
                      gbp: btcbalance * priceData.GBP,
                      balance: balance.balance,
                      currency: balance.currency,
                    };
                  });
                }
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
        this.chart.series[0].addPoint([now, totalBtcBalance]);
      }
    });
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="dark">
          <ion-title>Exchanges</ion-title>
          <ion-buttons slot="end">
            <ion-button icon-only href="/settings">
              <ion-icon name="md-settings" padding />
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
        {/* <ion-refresher slot="fixed" onIonRefresh={() => this.refreshBalances()}>
          <ion-refresher-content
            pullingIcon="arrow-dropdown"
            pullingText="Pull to refresh"
            refreshingSpinner="circles"
            refreshingText="Refreshing..."
          />
        </ion-refresher> */}
        <ion-list>
          {!this.isLoading &&
            this.exchanges.filter((e) => e.key && e.secret).map((exchange) => (
              <ion-item lines="full" href={`/exchanges/${exchange.id}`}>
                <ion-avatar item-start>
                  <img src={exchange.icon} />
                </ion-avatar>
                <ion-label>{exchange.id}</ion-label>
                {!this.isLoading && (
                  <ion-badge color="light" item-end>
                    {`${numeral(this.getBtcTotal(exchange)).format(this.baseCurrency === Currency.btc ? '0,0.0000' : '0,0.00')} ${this.baseCurrency}`}
                  </ion-badge>
                )}
              </ion-item>
            ))}
        </ion-list>
      </ion-content>,
      <ion-footer>
        <ion-toolbar>
          <ion-item lines="none">
            <ion-label>Total</ion-label>
            <ion-badge color="light" item-end>
              {!this.isLoading &&
                `${numeral(this.totalBalance).format(this.baseCurrency === Currency.btc ? '0,0.0000' : '0,0.00')} ${this.baseCurrency}`}
            </ion-badge>
          </ion-item>
          <div id="spline" class="chart" />
          <ion-button icon-left color="dark" class="full" disabled={this.isLoading} onClick={() => this.refreshBalances()}>
            {this.isLoading ? <ion-spinner name="lines-small" /> : `Refresh`}
          </ion-button>
        </ion-toolbar>
      </ion-footer>,
    ];
  }
}
