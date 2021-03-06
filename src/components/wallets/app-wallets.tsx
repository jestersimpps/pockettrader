import { Component, State, Prop } from '@stencil/core';
import { BALANCESERVICE, CURRENCYSERVICE } from '../../services/globals';
import { Currency } from '../../services/currency.service';
import { Exchange, ExchangeId } from '../../services/exchange.service';
import {
  appSetExchanges,
  appSetBaseCurrency,
  appSetCurrencies,
  appSetTickers,
  appSetTotalBalances,
  appSetWallets,
  appSetBalances,
  appSetOrders,
} from '../../actions/app';
import { Store, Action } from '@stencil/redux';
import { Wallet } from '../../services/wallets.service';
import { Balances } from '../../services/balance.service';
import { Order } from '../../services/trade.service';

@Component({
  tag: 'app-wallets',
  styleUrl: 'app-wallets.css',
})
export class AppWallets {
  @Prop({ context: 'store' })
  store: Store;

  @State() exchanges: Exchange[] = [];
  @State() isLoading = false;
  @State() baseCurrency: Currency;
  @State() balances: Balances;
  @State() tickers: any[];
  @State() wallets: Wallet[];
  @State() segment = '1';
  @State() dust: number;
  @State() orders: Order[];

  appSetCurrencies: Action;
  appSetExchanges: Action;
  appSetBaseCurrency: Action;
  appSetConversionRates: Action;
  appSetTickers: Action;
  appSetTotalBalances: Action;
  appSetWallets: Action;
  appSetBalances: Action;
  appSetOrders: Action;

  componentWillLoad() {
    this.store.mapStateToProps(this, (state) => {
      const {
        app: { exchanges, baseCurrency, currencies, tickers, wallets, balances, orders, dust },
      } = state;
      return {
        exchanges,
        baseCurrency,
        currencies,
        tickers,
        wallets,
        balances,
        orders,
        dust,
      };
    });
    this.store.mapDispatchToProps(this, {
      appSetExchanges,
      appSetBaseCurrency,
      appSetCurrencies,
      appSetTickers,
      appSetTotalBalances,
      appSetWallets,
      appSetBalances,
      appSetOrders,
    });
  }

  addTotalBalance(totalBtcBalance: number) {
    BALANCESERVICE.getTotalBalancesFromStorage().then((totalBalances) => {
      if (totalBtcBalance && totalBtcBalance > 0) {
        let now = Math.round(new Date().getTime());
        BALANCESERVICE.setTotalBalances([...totalBalances, [now, totalBtcBalance]]);
        this.appSetTotalBalances([...totalBalances, [now, totalBtcBalance]]);
      }
    });
  }

  refreshBalances() {
    this.isLoading = true;
    BALANCESERVICE.refreshBalances(this.wallets, this.exchanges, this.orders, this.dust).then((response) => {
      if (response) {
        this.appSetCurrencies(response.conversionrates);
        this.appSetTickers(response.tickers);
        this.appSetWallets(response.wallets);
        this.appSetExchanges(response.exchanges);
        this.addTotalBalance(response.exchangeTotal + response.walletTotal);
        this.appSetBalances({
          overview: response.exchangeTotal + response.walletTotal,
          exchanges: response.exchangeTotal,
          wallets: response.walletTotal,
        });
        this.appSetOrders(response.orders);
      }
      this.isLoading = false;
    });
  }

  getExchange(balance: any): ExchangeId {
    let exchangeId = null;
    this.exchanges.forEach((exchange) => {
      let tickerData = this.tickers.find((t) => t.exchangeId === exchange.id);
      if (tickerData) {
        let tickers = tickerData.tickers;
        let symbol = BALANCESERVICE.getBtcStats(balance, tickers).symbol;
        if (symbol) {
          exchangeId = exchange.id;
        }
      }
    });
    return exchangeId;
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="dark">
          <ion-buttons slot="start">
            <ion-button icon-only href="/settings" padding>
              <ion-icon name="options" />
            </ion-button>
          </ion-buttons>
          <ion-title text-center>
            <ion-badge color="light">
              <app-baseprice btcPrice={CURRENCYSERVICE.convertToBase(this.balances.wallets, this.baseCurrency)} baseCurrency={this.baseCurrency} />
            </ion-badge>
          </ion-title>
          <ion-buttons slot="end">
            <ion-button icon-only disabled={this.isLoading} onClick={() => this.refreshBalances()} padding>
              <ion-icon name="refresh" class={this.isLoading ? 'spin' : ''} />
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
        {/* <ion-refresher slot="fixed" onIonRefresh={() => this.refreshBalances()}>
          <ion-refresher-content />
        </ion-refresher> */}
        <ion-list>
          {this.wallets
            .filter((w) => w.balance > 0)
            .sort((a, b) => {
              return b.btcAmount - a.btcAmount;
            })
            .map((wallet) => {
              return <app-balanceitem exchangeId={this.getExchange(wallet)} baseCurrency={this.baseCurrency} cryptodata={wallet} />;
            })}
        </ion-list>
      </ion-content>,
    ];
  }
}
