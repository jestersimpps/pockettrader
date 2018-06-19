import { Component, State, Prop } from '@stencil/core';
import { CURRENCYSERVICE, BALANCESERVICE, TICKERSERVICE } from '../../services/globals';
import { Currency } from '../../services/currency.service';
import { Exchange, ExchangeId } from '../../services/exchange.service';
import { appSetExchanges, appSetBaseCurrency, appSetCurrencies, appSetTickers, appSetTotalBalances, appSetWallets } from '../../actions/app';
import { Store, Action } from '@stencil/redux';
import { Ticker } from '../../services/ticker.service';
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
  @State() segment = '1';

  appSetExchanges: Action;
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
      this.totalBalance += +CURRENCYSERVICE.convertToBase(BALANCESERVICE.getLatestTotal(totalBalances), this.baseCurrency);
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
    let exchangeIds: ExchangeId[] = [];
    let tickerPromises = [];
    let balancePromises = [];
    let walletPromises = [];
    let scopedTickers: Ticker[] = [];
    let scopedWallets: Wallet[] = this.wallets.filter((w) => w.balance > 0);
    let scopedExchanges: Exchange[] = this.exchanges.filter((e) => e.key && e.secret);

    scopedExchanges.forEach((exchange) => {
      exchangeIds.push(exchange.id);
      tickerPromises.push(TICKERSERVICE.getTickers(exchange.id));
      balancePromises.push(BALANCESERVICE.getBalances(exchange));
    });
    scopedWallets.forEach((wallet) => walletPromises.push(TICKERSERVICE.getCoinmarketcapTicker(wallet.id)));

    CURRENCYSERVICE.getConversionRates()
      .then((priceData) => {
        appSetCurrencies(priceData);
        Promise.all(tickerPromises)
          .then((tickerData) => {
            Promise.all(walletPromises)
              .then((walletData) => {
                Promise.all(balancePromises)
                  .then((balanceData) => {
                    let tempTotalBtcBalance = 0;
                    for (let index = 0; index < exchangeIds.length; index++) {
                      // refresh tickers
                      scopedTickers[index] = {
                        exchangeId: exchangeIds[index],
                        tickers: tickerData[index].data,
                      };
                      // refresh exchange balances
                      scopedExchanges[index].balances = balanceData[index].data
                        .map((balance) => {
                          const btc = this.getBtcStats(balance, tickerData[index].data);
                          tempTotalBtcBalance += btc.balance;
                          return {
                            btcAmount: balance.balance * btc.price,
                            balance: balance.balance,
                            pending: balance.pending,
                            available: balance.available,
                            symbol: balance.currency,
                            btcPrice: btc.price,
                            change: btc.change,
                          };
                        })
                        .filter((b) => {
                          return +b.btcAmount > 0.000002; // leave out dust balances
                        });
                    }
                    // refresh wallets
                    for (let index = 0; index < scopedWallets.length; index++) {
                      scopedWallets[index].btcPrice = +walletData[index].data.data.quotes.BTC.price;
                      scopedWallets[index].btcAmount = +scopedWallets[index].balance * +walletData[index].data.data.quotes.BTC.price;
                      scopedWallets[index].change = +walletData[index].data.data.quotes.BTC.percent_change_24h;
                      tempTotalBtcBalance += +scopedWallets[index].balance * +walletData[index].data.data.quotes.BTC.price;
                    }
                    this.appSetTickers(scopedTickers);
                    this.appSetWallets(scopedWallets);
                    this.appSetExchanges(
                      this.exchanges.map((e) => {
                        let newData = scopedExchanges.find((s) => s.id === e.id);
                        if (newData) {
                          return newData;
                        }
                        return e;
                      }),
                    );
                    this.addTotalBalance(tempTotalBtcBalance);
                    this.isLoading = false;
                  })
                  .catch((error) => {
                    window.alert(error.message);
                    this.isLoading = false;
                  });
              })
              .catch((error) => {
                window.alert(error.message);
                this.isLoading = false;
              });
          })
          .catch((error) => {
            window.alert(error.message);
            this.isLoading = false;
          });
      })
      .catch((error) => {
        window.alert(error.message);
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
              <app-baseprice btcPrice={this.totalBalance} baseCurrency={this.baseCurrency} />
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
        {this.segment === '1' &&
          !this.isLoading && [
            <ion-list-header color="dark">Distribution</ion-list-header>,
            <app-sunburst exchanges={this.exchanges} wallets={this.wallets} />,
            <ion-list-header color="dark">Total Balance ({this.baseCurrency.id})</ion-list-header>,
            <app-splinechart />,
          ]}
        <ion-list>
          {this.segment === '2' && [
            <ion-list-header color="dark">Exchanges</ion-list-header>,
            this.exchanges
              .filter((e) => e.key && e.secret)
              .map((exchange) => <app-exchangeitem exchange={exchange} baseCurrency={this.baseCurrency} />),
            <ion-list-header color="dark">Wallets</ion-list-header>,
            this.wallets
              .filter((w) => w.balance > 0)
              .map((wallet) => <app-balanceitem exchangeId={null} baseCurrency={this.baseCurrency} cryptodata={wallet} />),
          ]}
        </ion-list>
      </ion-content>,
      <ion-footer class="footerHeight">
        <ion-tabs color="dark">
          <ion-tab icon="pie" label="Overview" onIonSelect={() => (this.segment = '1')} active={this.segment == '1'} />
          <ion-tab icon="list-box" label="Balances" onIonSelect={() => (this.segment = '2')} active={this.segment == '2'} />
        </ion-tabs>
      </ion-footer>,
    ];
  }
}
