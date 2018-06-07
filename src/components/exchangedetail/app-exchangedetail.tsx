import { Component, Prop, State } from '@stencil/core';
import highcharts from '../../global/highcharts';
import { Balance } from './balance.model';
import { Exchange } from '../exchanges/exchanges';
import { STORE } from '../../services/store';

declare const axios;

@Component({
  tag: 'app-exchangedetail',
  styleUrl: 'app-exchangedetail.css',
})
export class AppExchangeDetail {
  @Prop() exchangeId: string;
  @State() log: string;
  @State() exchanges: Exchange[] = [];
  @State() exchange: Exchange = new Exchange();
  tickers;
  balances: Balance[] = [];
  storage = STORE;

  componentWillLoad() {
    this.storage.get(`exchanges`).then((exchanges) => {
      this.exchanges = exchanges;
      this.exchange = this.exchanges.find((e) => e.id === this.exchangeId);
    });
  }

  componentDidLoad() {
    console.log(this.storage);
    let balanceData;
    this.log = `Getting tickers...`;
    axios
      .get(`http://lightningassets.com/exchangeapi/${this.exchange.id}/tickers`)
      .then((response) => {
        this.tickers = response.data;
        this.log = `Getting balances...`;
        return axios.post(`http://lightningassets.com/exchangeapi/${this.exchange.id}/balances/get`, {
          key: this.exchange.key,
          secret: this.exchange.secret,
        });
      })
      .then((response) => {
        balanceData = response.data;
        this.log = `Getting latest prices...`;
        return axios.get(`https://api.coindesk.com/v1/bpi/currentprice.json`);
      })
      .then((priceData) => {
        this.log = `Balances:`;
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
          <br>{point.amount:.8f}  <b>{point.currency}</b>
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
              data: balanceData.filter((b) => b.balance > 0).map((balance) => {
                const btcbalance = this.getBtcValue(balance);
                return {
                  name: balance.currency,
                  y: btcbalance,
                  usd: btcbalance * +priceData.data.bpi.USD.rate_float,
                  eur: btcbalance * +priceData.data.bpi.EUR.rate_float,
                  gbp: btcbalance * +priceData.data.bpi.GBP.rate_float,
                  amount: balance.balance,
                  currency: balance.currency,
                };
              }),
            },
          ],
        });
      })
      .catch((error) => {
        this.log = error.message;
        console.error(error);
      });
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" />
          </ion-buttons>
          <ion-title>{this.exchange.id}</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content padding>
        <h5>{this.log}</h5>
        <div id="pie" />
      </ion-content>,
    ];
  }

  getBtcValue(balance: Balance) {
    const innerTicker = this.tickers.find((t) => t.symbol === `${balance.currency}/BTC`);
    if (balance.currency === 'BTC') {
      return balance.balance;
    }
    if (innerTicker) {
      return balance.balance * innerTicker.last;
    } else {
      return 0;
    }
  }
}
