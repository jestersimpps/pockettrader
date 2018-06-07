import { Component, State } from '@stencil/core';
import { Exchanges, Exchange } from './exchanges';
import { STORE } from '../../services/store';
import { Balance } from '../exchangedetail/balance.model';
declare const axios;

@Component({
  tag: 'app-exchanges',
  styleUrl: 'app-exchanges.css',
})
export class AppExchanges {
  @State() exchanges: Exchange[] = [];
  @State() isLoading = true;
  storage = STORE;
  balances: Balance[] = [];

  componentWillLoad() {
    this.storage.get(`exchanges`).then((exchanges) => {
      this.isLoading = false;
      if (exchanges) {
        this.exchanges = exchanges;
      } else {
        this.exchanges = Exchanges;
        this.storage.set(`exchanges`, this.exchanges);
      }
    });
  }

  getBalanceTotal(exchange) {
    let sum = 0;
    exchange.balances.forEach((balance: Balance) => {
      sum += balance.eur;
    });
    return Math.round(sum * 100) / 100;
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
      tickerPromises.push(axios.get(`http://lightningassets.com/exchangeapi/${exchange.id}/tickers`));
      balancePromises.push(
        axios.post(`http://lightningassets.com/exchangeapi/${exchange.id}/balances/get`, {
          key: exchange.key,
          secret: exchange.secret,
        }),
      );
    });

    axios.get(`https://api.coindesk.com/v1/bpi/currentprice.json`).then((priceData) => {
      Promise.all(tickerPromises).then((tickerData) => {
        Promise.all(balancePromises).then((balanceData) => {
          for (let index = 0; index < tickerData.length; index++) {
            const currentExchange = this.exchanges.filter((e) => e.key && e.secret)[index];
            currentExchange.balances = balanceData[index].data.filter((b) => b.balance > 0).map((balance) => {
              const btcbalance = this.getBtcValue(balance, tickerData[index].data);
              return {
                name: balance.currency,
                y: btcbalance,
                usd: btcbalance * +priceData.data.bpi.USD.rate_float,
                eur: btcbalance * +priceData.data.bpi.EUR.rate_float,
                gbp: btcbalance * +priceData.data.bpi.GBP.rate_float,
                balance: balance.balance,
                currency: balance.currency,
              };
            });
          }
          this.storage.set(`exchanges`, this.exchanges);
          this.isLoading = false;
        });
      });
    });
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Exchanges</ion-title>
          <ion-buttons slot="end">
            <ion-button icon-only disabled={this.isLoading} onClick={() => this.refreshBalances()}>
              <ion-icon name="refresh" />
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,
      <ion-content padding>
        <ion-list>
          {this.exchanges.filter((e) => e.key && e.secret).map((exchange) => (
            <ion-item href={`/exchanges/${exchange.id}`}>
              <ion-avatar item-start>
                <img src={exchange.icon} />
              </ion-avatar>
              <ion-label>{exchange.id}</ion-label>
              {exchange.balances ? (
                <ion-badge color="dark" item-end>
                  {this.getBalanceTotal(exchange)} EUR
                </ion-badge>
              ) : (
                ''
              )}
            </ion-item>
          ))}
        </ion-list>
      </ion-content>,
      <ion-footer>
        <ion-toolbar>
          <ion-button color="dark" class="full" href="/settings">
            Settings
          </ion-button>
        </ion-toolbar>
      </ion-footer>,
    ];
  }
}
