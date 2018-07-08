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
  appSetBalances,
  appSetOrders,
  appSetDust,
} from '../../actions/app';
import { CURRENCYSERVICE, BALANCESERVICE, EXCHANGESERVICE, TICKERSERVICE, WALLETSERVICE, TOKENSERVICE, TRADESERVICE } from '../../services/globals';

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
  appSetBalances: Action;
  appSetToken: Action;
  appSetOrders: Action;
  appSetDust: Action;

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
      appSetBalances,
      appSetOrders,
      appSetDust,
    });
    // Load in app state from storage
    EXCHANGESERVICE.getExchangesFromStorage()
      .then((exchanges) => {
        exchanges ? this.appSetExchanges(exchanges) : this.appSetExchanges(DefaultExchanges);
        return CURRENCYSERVICE.getBaseCurrencyFromStorage();
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
        return TICKERSERVICE.getTickersFromStorage();
      })
      .then((tickers) => {
        tickers ? this.appSetTickers(tickers) : this.appSetTickers([]);
        return BALANCESERVICE.getTotalBalancesFromStorage();
      })
      .then((totalBalances) => {
        totalBalances ? this.appSetTotalBalances(totalBalances) : this.appSetTotalBalances([]);
        return BALANCESERVICE.getBalancesFromStorage();
      })
      .then((balances) => {
        balances ? this.appSetBalances(balances) : this.appSetBalances({ overview: 0, exchnges: 0, wallets: 0 });
        return TRADESERVICE.getOrdersFromStorage();
      })
      .then((orders) => {
        orders ? this.appSetOrders(orders) : this.appSetOrders([]);
        return EXCHANGESERVICE.getDustFromStorage();
      })
      .then((dust) => {
        dust ? this.appSetDust(dust) : this.appSetDust( 0.000002);
        return TOKENSERVICE.getTokenFromStorage();
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
          <ion-route url="/" component="app-overview" />
          <ion-route url="/pair/:exchangeId/:pair" component="app-pair" />
          <ion-route url="/exchanges" component="app-exchanges" />
          <ion-route url="/wallets" component="app-wallets" />
          <ion-route url="/trade" component="app-trade" />
          <ion-route url="/orders" component="app-orders" />
          <ion-route url="/orders/:orderId" component="app-order" />
          <ion-route url="/settings" component="app-settings" />
          <ion-route url="/settings/keys" component="app-keys" />
          <ion-route url="/settings/keys/:exchangeId" component="app-exchangekeys" />
          <ion-route url="/settings/basecurrency" component="app-basecurrency" />
          <ion-route url="/settings/holdings" component="app-holdings" />
          <ion-route url="/settings/holdings/:walletId" component="app-editwallet" />
          <ion-route url="/settings/premium" component="app-premium" />
          <ion-route url="/settings/dust" component="app-dust" />
          <ion-route url="/panic" component="app-panic" />
        </ion-router>
        <ion-nav animated={true} margin-bottom />,
        <ion-footer class="footerHeight">
          <ion-tabs color="light" tabbarHighlight={true} useRouter={true}>
            <ion-tab icon="swap" label="Trade" href="/trade" />
            <ion-tab icon="time" label="Orders" href="/orders" />
            <ion-tab icon="pie" label="Overview" href="/" />
            <ion-tab icon="list-box" label="Exchanges" href="/exchanges" />
            <ion-tab icon="wallet" label="Wallets" href="/wallets" />
          </ion-tabs>
        </ion-footer>,
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
