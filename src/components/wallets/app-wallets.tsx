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
} from '../../actions/app';
import { Store, Action } from '@stencil/redux';
import { Wallet } from '../../services/wallets.service';
import { Balances } from '../../services/balance.service';

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

  appSetCurrencies: Action;
  appSetExchanges: Action;
  appSetBaseCurrency: Action;
  appSetConversionRates: Action;
  appSetTickers: Action;
  appSetTotalBalances: Action;
  appSetWallets: Action;
  appSetBalances: Action;

  componentWillLoad() {
    this.store.mapStateToProps(this, (state) => {
      const {
        app: { exchanges, baseCurrency, currencies, tickers, wallets, balances },
      } = state;
      return {
        exchanges,
        baseCurrency,
        currencies,
        tickers,
        wallets,
        balances,
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
    BALANCESERVICE.refreshBalances(this.wallets, this.exchanges).then((response) => {
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
        <ion-refresher slot="fixed" onIonRefresh={() => this.refreshBalances()}>
          <ion-refresher-content />
        </ion-refresher>
        <ion-list>
          {this.wallets
            .filter((w) => w.balance > 0)
            .sort((a, b) => {
              return b.btcAmount - a.btcAmount;
            })
            .map((wallet) => <app-balanceitem exchangeId={null} baseCurrency={this.baseCurrency} cryptodata={wallet} />)}
        </ion-list>
      </ion-content>,
    ];
  }
}
