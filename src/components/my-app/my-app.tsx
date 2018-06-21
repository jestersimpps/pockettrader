import '@ionic/core';
import { Component, Prop, State } from '@stencil/core';
import { Store, Action } from '@stencil/redux';
import { configureStore } from '../../store';
import { DefaultExchanges } from '../../services/exchange.service';
import {
  appSetExchanges,
  appSetBaseCurrency,
  appSetCurrencies,
  appSetTickers,
  appSetTotalBalances,
  appSetWallets,
  appSetToken,
} from '../../actions/app';
import { CURRENCYSERVICE, BALANCESERVICE, EXCHANGESERVICE, TICKERSERVICE, WALLETSERVICE, TOKENSERVICE } from '../../services/globals';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.css',
})
export class MyApp {
  @Prop({ context: 'store' })
  store: Store;
  @State() loading = true;

  appSetExchanges: Action;
  appSetBaseCurrency: Action;
  appSetCurrencies: Action;
  appSetTickers: Action;
  appSetTotalBalances: Action;
  appSetWallets: Action;
  appSetToken: Action;

  componentWillLoad() {
    // Only do this once, in the root component
    this.store.setStore(configureStore({}));
    this.store.mapDispatchToProps(this, {
      appSetExchanges,
      appSetBaseCurrency,
      appSetCurrencies,
      appSetTickers,
      appSetTotalBalances,
      appSetWallets,
      appSetToken,
    });
    // Load in app state from storage
    EXCHANGESERVICE.getExchanges()
      .then((exchanges) => {
        exchanges ? this.appSetExchanges(exchanges) : this.appSetExchanges(DefaultExchanges);
        return CURRENCYSERVICE.getBaseCurrency();
      })
      .then((baseCurrency) => {
        baseCurrency ? this.appSetBaseCurrency(baseCurrency) : this.appSetBaseCurrency(CURRENCYSERVICE.currencies[0]);
        return WALLETSERVICE.getWalletsFromStorage();
      })
      .then((wallets) => {
        wallets ? this.appSetWallets(wallets) : this.appSetWallets([]);
        return CURRENCYSERVICE.getConversionRates();
      })
      .then((currencies) => {
        this.appSetCurrencies(currencies);
        return TICKERSERVICE.getTickersFromStore();
      })
      .then((tickers) => {
        tickers ? this.appSetTickers(tickers) : this.appSetTickers([]);
        return BALANCESERVICE.getTotalBalances();
      })
      .then((totalBalances) => {
        totalBalances ? this.appSetTotalBalances(totalBalances) : this.appSetTotalBalances([]);
        return TOKENSERVICE.getTokenFromStore();
      })
      .then((token) => {
        token ? this.appSetToken(token) : this.appSetToken(TOKENSERVICE.generateNewToken());
        this.loading = false;
      });
  }

  render() {
    return !this.loading ? (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-exchanges" />
          <ion-route url="/pair/:exchangeId/:pair" component="app-pair" />
          <ion-route url="/settings/" component="app-settings" />
          <ion-route url="/settings/keys" component="app-keys" />
          <ion-route url="/settings/keys/:exchangeId" component="app-exchangekeys" />
          <ion-route url="/settings/basecurrency" component="app-basecurrency" />
          <ion-route url="/settings/wallets" component="app-wallets" />
          <ion-route url="/settings/wallets/:walletId" component="app-editwallet" />
          <ion-route url="/settings/premium" component="app-premium" />
        </ion-router>
        <ion-nav />
      </ion-app>
    ) : (
      [
        <div class="progress" text-center>
          <ion-icon name="sync" class="spin" />
        </div>,
      ]
    );
  }
}
