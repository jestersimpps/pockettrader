import { Component, Prop, State } from '@stencil/core';
// import highcharts from '../../global/highcharts';
// import numeral from 'numeral';
import { Balance } from '../../services/balance.service';
import { Exchange, ExchangeId } from '../../services/exchange.service';
// import { CURRENCYSERVICE } from '../../services/globals';
import { Store, Action } from '@stencil/redux';
import { appSetExchanges, appSetBaseCurrency, appSetConversionRates } from '../../actions/app';
import { Currency, BtcPrice } from '../../services/currency.service';
import { Ticker } from '../../services/ticker.service';

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
  @State() tickers: Ticker[] = [];
  @State() baseCurrency: Currency;
  @State() conversionRates: BtcPrice;

  appSetExchanges: Action;
  appSetBaseCurrency: Action;
  appSetConversionRates: Action;

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
    });
  }

  componentDidLoad() {
    this.exchange = this.exchanges.find((e) => e.id === this.exchangeId);
    // highcharts.chart('pie', {
    //   chart: {
    //     plotBackgroundColor: '#fff',
    //     plotBorderWidth: null,
    //     plotShadow: false,
    //     type: 'pie',
    //   },
    //   title: {
    //     text: ``,
    //   },
    //   tooltip: {
    //     pointFormat: `{series.name}: <b>{point.percentage:.1f} %</b>
    //       <br>{point.balance:.8f}  <b>{point.currency}</b>
    //       <br>{point.usd:.8f}  <b>USD</b>
    //       <br>{point.eur:.8f}  <b>EUR</b>
    //       <br>{point.gbp:.8f}  <b>GBP</b>
    //       `,
    //   },
    //   plotOptions: {
    //     pie: {
    //       allowPointSelect: true,
    //       cursor: 'pointer',
    //       dataLabels: {
    //         enabled: true,
    //         format: `<b>{point.name}</b><br>{point.percentage:.1f} % `,
    //         distance: 0,
    //       },
    //     },
    //   },
    //   series: [
    //     {
    //       name: 'Balances',
    //       data: this.exchange.balances.map((balance) => {
    //         return {
    //           name: balance.currency,
    //           y: balance.btc,
    //           btc: balance.btc,
    //           usd: balance.usd,
    //           eur: balance.eur,
    //           gbp: balance.gbp,
    //           balance: balance.balance,
    //           currency: balance.currency,
    //         };
    //       }),
    //     },
    //   ],
    // });
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
    const ticker = this.tickers.find((e) => e.exchangeId === this.exchangeId).tickers.find((t) => {
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
        {/* <ion-item-divider color="light">Total Balance</ion-item-divider>
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
        <div id="pie" /> */}
        {/* <ion-item-divider color="light">Individual Balances</ion-item-divider> */}
        <app-exchangebalances exchangeId={this.exchangeId} />
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
