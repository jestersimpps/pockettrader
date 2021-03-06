import { Component, State, Prop } from '@stencil/core';
import { BALANCESERVICE, CURRENCYSERVICE } from '../../services/globals';
import { Currency } from '../../services/currency.service';
import { Exchange } from '../../services/exchange.service';
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
  tag: 'app-overview',
  styleUrl: 'app-overview.css',
})
export class AppOverview {
  @Prop({ context: 'store' })
  store: Store;

  @State() exchanges: Exchange[] = [];
  @State() isLoading = false;
  @State() baseCurrency: Currency;
  @State() balances: Balances;
  @State() tickers: any[];
  @State() wallets: Wallet[];
  @State() orders: Order[];
  @State() dust: number;
  @State() showTutorial: boolean;

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
    let scopedWallets: Wallet[] = this.wallets.filter((w) => w.balance > 0);
    let scopedExchanges: Exchange[] = this.exchanges.filter((e) => e.key && e.secret);
    this.showTutorial = scopedWallets.length + scopedExchanges.length === 0;
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

  getBtcStats(balance: any, tickerData): { price: number; balance: number; change: number } {
    let stats = { price: 0, balance: 0, change: 0 };
    const innerTicker = tickerData.find((t) => t.symbol === `${balance.currency}/BTC`);
    if (balance.symbol === 'BTC') {
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
              <app-baseprice btcPrice={CURRENCYSERVICE.convertToBase(this.balances.overview, this.baseCurrency)} baseCurrency={this.baseCurrency} />
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
        {!this.isLoading ? (
          this.showTutorial ? (
            [
              <div>
                <p>Welcome to Pocket Trader!</p>
                <ion-button expand="block" color="light" href="/settings/tutorial">
                  View tutorial
                </ion-button>
              </div>,
            ]
          ) : (
            <ion-list>
              <ion-list-header color="light">Distribution & 24h Change</ion-list-header>
              <app-sunburst
                exchanges={this.exchanges}
                wallets={this.wallets}
                totalBalance={this.balances.overview}
                baseCurrency={this.baseCurrency}
              />
              <ion-list-header color="light">Total Balance ({this.baseCurrency.id})</ion-list-header>
              <app-splinechart />
            </ion-list>
          )
        ) : (
          <div class="progress" text-center>
            <ion-icon name="sync" class="spin" />
          </div>
        )}
      </ion-content>,
    ];
  }
}
