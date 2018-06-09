import { Component, Prop, State } from '@stencil/core';
import highcharts from '../../global/highcharts';
import numeral from 'numeral';
import { Balance } from '../../services/balance.service';
import { Exchange, ExchangeId } from '../../services/exchange.service';
import { TICKERSERVICE, CURRENCYSERVICE } from '../../services/globals';
import { Store, Action } from '@stencil/redux';
import { appSetExchanges, appSetBaseCurrency, appSetConversionRates } from '../../actions/app';
import { Currency, BtcPrice } from '../../services/currency.service';

@Component({
  tag: 'app-exchangedetail',
  styleUrl: 'app-exchangedetail.css',
})
export class AppExchangeDetail {
  @Prop({ context: 'store' })
  store: Store;
  @Prop() exchangeId: ExchangeId;

  @State() exchanges: Exchange[] = [];
  @State() exchange: Exchange = new Exchange();
  @State() tickers = [];
  @State() baseCurrency: Currency;
  @State() conversionRates: BtcPrice;

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
    TICKERSERVICE.getTickers(this.exchangeId).then((response) => {
      this.tickers = response.data;
    });
  }

  componentDidLoad() {
    this.exchange = this.exchanges.find((e) => e.id === this.exchangeId);
    highcharts.chart('pie', {
      chart: {
        plotBackgroundColor: '#fff',
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
      },
      title: {
        text: ``,
      },
      tooltip: {
        pointFormat: `{series.name}: <b>{point.percentage:.1f} %</b>
          <br>{point.balance:.8f}  <b>{point.currency}</b>
          <br>{point.usd:.8f}  <b>USD</b>
          <br>{point.eur:.8f}  <b>EUR</b>
          <br>{point.gbp:.8f}  <b>GBP</b>
          `,
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: `<b>{point.name}</b><br>{point.percentage:.1f} % `,
            distance: 0,
          },
        },
      },
      series: [
        {
          name: 'Balances',
          data: this.exchange.balances.map((balance) => {
            return {
              name: balance.currency,
              y: balance.btc,
              btc: balance.btc,
              usd: balance.usd,
              eur: balance.eur,
              gbp: balance.gbp,
              balance: balance.balance,
              currency: balance.currency,
            };
          }),
        },
      ],
    });
  }

  getTotal(cur = 'btc') {
    let sum = 0;
    if (this.exchange && this.exchange.balances) {
      this.exchange.balances.map((balance: Balance) => {
        sum += balance[cur];
      });
    }
    // in millibits
    return sum;
  }

  getPercentage(currency) {
    const ticker = this.tickers.find((t) => {
      return t.base === currency;
    });
    if (ticker) {
      return ticker.percentage;
    }
    return '?';
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="dark">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" />
          </ion-buttons>
          <ion-title>{this.exchange.id}</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <ion-item-divider color="light">Total Balance</ion-item-divider>
        <ion-grid>
          <ion-row>
            <ion-col col-g>
              <b>mBTC: </b>
              {numeral(this.getTotal('btc') * 1000).format('0,0.0000')}
            </ion-col>
            <ion-col col-g>
              <b>EUR: </b>
              {numeral(this.getTotal('eur')).format('0,0.00')}
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col col-g>
              <b>USD: </b>
              {numeral(this.getTotal('usd')).format('0,0.00')}
            </ion-col>
            <ion-col col-g>
              <b>GBP: </b>
              {numeral(this.getTotal('gbp')).format('0,0.00')}
            </ion-col>
          </ion-row>
        </ion-grid>
        <ion-item-divider color="light">Balance distribution</ion-item-divider>
        <div id="pie" />
        <ion-item-divider color="light">Individual Balances</ion-item-divider>
        <ion-list>
          {this.exchange &&
            this.exchange.balances &&
            this.tickers.length &&
            this.exchange.balances.map((balance) => (
              <ion-item lines="full" href={`/pair/${this.exchange.id}/${balance.currency}`}>
                <ion-grid>
                  <ion-row>
                    <ion-col col-g>
                      <b>{balance.currency}</b>
                    </ion-col>
                    <ion-col col-g text-right>
                      <ion-badge color={this.getPercentage(balance.currency) > 0 ? 'success' : 'danger'}>
                        {numeral(this.getPercentage(balance.currency)).format('0,0.00')} %
                      </ion-badge>
                    </ion-col>
                  </ion-row>
                  <ion-row>
                    <ion-col col-g>
                      <span>{numeral(balance.balance).format('0,0.00')}</span>
                    </ion-col>
                    <ion-col col-g text-right>
                      <span slot="end">
                        {`${numeral(CURRENCYSERVICE.convertToBase(balance.btc, this.conversionRates, this.baseCurrency)).format(
                          this.baseCurrency === Currency.btc ? '0,0.0000' : '0,0.00',
                        )} ${this.baseCurrency}`}
                      </span>
                    </ion-col>
                  </ion-row>
                </ion-grid>
              </ion-item>
            ))}
        </ion-list>
      </ion-content>,
      <ion-footer>
        <ion-toolbar>
          <ion-button icon-left color="dark" class="full" disabled>
            Trade
          </ion-button>
        </ion-toolbar>
      </ion-footer>,
    ];
  }
}
