import { Component, State, Prop } from '@stencil/core';
import { CURRENCYSERVICE, BALANCESERVICE } from '../../services/globals';
import { Currency } from '../../services/currency.service';
import { Exchange } from '../../services/exchange.service';
import { appSetExchanges, appSetBaseCurrency, appSetCurrencies, appSetTickers, appSetTotalBalances, appSetWallets } from '../../actions/app';
import { Store, Action } from '@stencil/redux';
import { Wallet } from '../../services/wallets.service';

@Component({
  tag: 'app-exchanges',
  styleUrl: 'app-exchanges.css',
})
export class AppExchanges {
  @Prop({ context: 'store' })
  store: Store;

  @State() exchanges: Exchange[] = [];
  @State() isLoading = false;
  @State() baseCurrency: Currency;
  @State() totalBalance: number = 0;
  @State() tickers: any[];
  @State() wallets: Wallet[];

  appSetExchanges: Action;
  appSetCurrencies: Action;
  appSetBaseCurrency: Action;
  appSetConversionRates: Action;
  appSetTickers: Action;
  appSetTotalBalances: Action;
  appSetWallets: Action;

  componentWillLoad() {
    this.store.mapStateToProps(this, (state) => {
      const {
        app: { exchanges, baseCurrency, currencies, tickers, wallets },
      } = state;
      return {
        exchanges,
        baseCurrency,
        currencies,
        tickers,
        wallets,
      };
    });
    this.store.mapDispatchToProps(this, {
      appSetExchanges,
      appSetBaseCurrency,
      appSetCurrencies,
      appSetTickers,
      appSetTotalBalances,
      appSetWallets,
    });
  }

  componentDidLoad() {
    this.updateTotalBalance();
  }

  updateTotalBalance() {
    BALANCESERVICE.getTotalBalances().then((totalBalances) => {
      this.totalBalance = +CURRENCYSERVICE.convertToBase(BALANCESERVICE.getLatestTotal(totalBalances), this.baseCurrency);
    });
  }

  addTotalBalance(totalBtcBalance: number) {
    this.totalBalance = CURRENCYSERVICE.convertToBase(totalBtcBalance, this.baseCurrency) || 0;
    BALANCESERVICE.getTotalBalances().then((totalBalances) => {
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
    BALANCESERVICE.refreshBalances(this.wallets, this.exchanges).then((response) => {
      if (response) {
        this.appSetCurrencies(response.conversionrates);
        this.appSetTickers(response.tickers);
        this.appSetWallets(response.wallets);
        this.appSetExchanges(response.exchanges);
        this.addTotalBalance(response.exchangeTotal + response.walletTotal);
        this.totalBalance = response.exchangeTotal + response.walletTotal;
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
              <app-baseprice
                btcPrice={this.totalBalance - CURRENCYSERVICE.convertToBase(this.wallets.reduce((a, b) => a + b.btcAmount, 0), this.baseCurrency)}
                baseCurrency={this.baseCurrency}
              />
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
          {this.exchanges.filter((e) => e.key && e.secret).map((exchange) => [
            <ion-list-header color="light">
              {exchange.id}
              <ion-badge color="light" margin-right>
                <app-baseprice btcPrice={CURRENCYSERVICE.getBaseTotal(exchange.balances, this.baseCurrency)} baseCurrency={this.baseCurrency} />
              </ion-badge>
            </ion-list-header>,
            exchange.balances.map((b) => <app-balanceitem exchangeId={exchange.id} baseCurrency={this.baseCurrency} cryptodata={b} />),
          ])}
        </ion-list>
      </ion-content>,
    ];
  }
}
