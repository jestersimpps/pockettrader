import '@ionic/core';
import { Component, Prop, State } from '@stencil/core';
import { Store, Action } from '@stencil/redux';
import { configureStore } from '../../store';
import { DefaultExchanges } from '../../services/exchange.service';
import { appSetExchanges, appSetBaseCurrency, appSetCurrencies, appSetTickers, appSetTotalBalances, appSetWallets } from '../../actions/app';
import { CURRENCYSERVICE, BALANCESERVICE, EXCHANGESERVICE, TICKERSERVICE, WALLETSERVICE } from '../../services/globals';

declare const Fingerprint2;
@Component({
  tag: 'my-app',
  styleUrl: 'my-app.css',
})
export class MyApp {
  @Prop({ context: 'store' })
  store: Store;
  @State() loading = 1;

  appSetExchanges: Action;
  appSetBaseCurrency: Action;
  appSetCurrencies: Action;
  appSetTickers: Action;
  appSetTotalBalances: Action;
  appSetWallets: Action;

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
    });
    // Load in app state from storage
    EXCHANGESERVICE.getExchanges()
      .then((exchanges) => {
        exchanges ? this.appSetExchanges(exchanges) : this.appSetExchanges(DefaultExchanges);
        this.loading = 2;
        return CURRENCYSERVICE.getBaseCurrency();
      })
      .then((baseCurrency) => {
        baseCurrency ? this.appSetBaseCurrency(baseCurrency) : this.appSetBaseCurrency(CURRENCYSERVICE.currencies[0]);
        this.loading = 3;
        return WALLETSERVICE.getWalletsFromStorage();
      })
      .then((wallets) => {
        wallets ? this.appSetWallets(wallets) : this.appSetWallets([]);
        this.loading = 4;
        return CURRENCYSERVICE.getConversionRates();
      })
      .then((currencies) => {
        this.appSetCurrencies(currencies);
        this.loading = 5;
        return TICKERSERVICE.getTickersFromStore();
      })
      .then((tickers) => {
        tickers ? this.appSetTickers(tickers) : this.appSetTickers([]);
        this.loading = 6;
        return BALANCESERVICE.getTotalBalances();
      })
      .then((totalBalances) => {
        totalBalances ? this.appSetTotalBalances(totalBalances) : this.appSetTotalBalances([]);
        this.loading = 0;
      });

    new Fingerprint2().get(function(result, components) {
      console.log(result); // a hash, representing your device fingerprint
      console.log(components); // an array of FP components
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
        </ion-router>
        <ion-nav />
      </ion-app>
    ) : (
      [
        <div class="progress" text-center>
          Loading
          {this.loading == 1 && ' exchanges...'}
          {this.loading == 2 && ' basecurrency...'}
          {this.loading == 3 && ' wallets...'}
          {this.loading == 4 && ' conversionrates...'}
          {this.loading == 5 && ' tickers...'}
          {this.loading == 6 && ' balances...'}
        </div>,
      ]
    );
  }
}
