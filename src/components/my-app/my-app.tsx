import '@ionic/core';
import { Component, Prop } from '@stencil/core';
import { Store, Action } from '@stencil/redux';
import { configureStore } from '../../store';
import { DefaultExchanges } from '../../services/exchange.service';
import { appSetExchanges, appSetBaseCurrency, appSetCurrencies, appSetTickers, appSetTotalBalances, appSetWallets } from '../../actions/app';
import { CURRENCYSERVICE, BALANCESERVICE, EXCHANGESERVICE, TICKERSERVICE, WALLETSERVICE } from '../../services/globals';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.css',
})
export class MyApp {
  @Prop({ context: 'store' })
  store: Store;

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
        if (!exchanges) {
          this.appSetExchanges(DefaultExchanges);
        } else {
          this.appSetExchanges(exchanges);
        }
        return CURRENCYSERVICE.getBaseCurrency();
      })
      .then((baseCurrency) => {
        if (!baseCurrency) {
          this.appSetBaseCurrency(CURRENCYSERVICE.currencies[0]);
        } else {
          this.appSetBaseCurrency(baseCurrency);
        }
        return WALLETSERVICE.getWalletsFromStorage();
      })
      .then((wallets) => {
        if (!wallets) {
          this.appSetWallets([]);
        } else {
          this.appSetWallets(wallets);
        }
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
        if (!totalBalances) {
          totalBalances = [];
          BALANCESERVICE.setTotalBalances([]);
        } else {
          BALANCESERVICE.setTotalBalances(totalBalances);
        }
      });
  }

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-exchanges" />
          <ion-route url="/exchanges/:exchangeId" component="app-exchangedetail" />
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
    );
  }
}
