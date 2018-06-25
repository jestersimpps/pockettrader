import { Component, Prop, State } from '@stencil/core';
import { Store, Action } from '@stencil/redux';
import { Exchange, ExchangeId } from '../../services/exchange.service';
import { Currency } from '../../services/currency.service';
import { Wallet } from '../../services/wallets.service';
import { CURRENCYSERVICE, BALANCESERVICE, TICKERSERVICE } from '../../services/globals';
import numeral from 'numeral';
import { appSetExchanges, appSetBaseCurrency, appSetCurrencies, appSetTickers, appSetTotalBalances, appSetWallets } from '../../actions/app';
import { Ticker } from '../../services/ticker.service';

@Component({
  tag: 'app-panic',
  styleUrl: 'app-panic.css',
})
export class AppPanic {
  @Prop({ context: 'store' })
  store: Store;
  @State() sellType: 'market' | 'limit' = 'market';
  appSetToken: Action;
  @State() exchanges: Exchange[] = [];
  @State() baseCurrency: Currency;
  @State() tickers: any[];
  @State() wallets: Wallet[];
  @State() isLoading = false;
  @State() totalBalance: number = 0;

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

  appSetSell(type) {
    this.sellType = type;
  }
  render() {
    return [
      <ion-header>
        <ion-toolbar color="dark">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/trade" />
          </ion-buttons>
          <ion-title>All to BTC</ion-title>
          <ion-buttons slot="end">
            <ion-button icon-only disabled={this.isLoading} onClick={() => this.refreshBalances()} padding>
              <ion-icon name="refresh" class={this.isLoading ? 'spin' : ''} />
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
        <ion-list>
          <ion-list-header color="light">Sell Type</ion-list-header>
          <ion-item lines="full">
            <ion-label>Market Sell</ion-label>
            <ion-radio checked={this.sellType == 'market'} value={'market'} onClick={() => this.appSetSell('market')} />
          </ion-item>
          <ion-item lines="full">
            <ion-label>Limit Sell</ion-label>
            <ion-radio checked={this.sellType == 'limit'} value={'limit'} onClick={() => this.appSetSell('limit')} />
          </ion-item>
          <ion-button expand="full" color="danger">
            Convert selected to BTC
          </ion-button>
          <ion-list-header color="light">
            Balance overview
            <ion-badge color="light" margin-right>
              <app-baseprice
                btcPrice={this.totalBalance - CURRENCYSERVICE.convertToBase(this.wallets.reduce((a, b) => a + b.btcAmount, 0), this.baseCurrency)}
                baseCurrency={this.baseCurrency}
              />
            </ion-badge>
          </ion-list-header>
          <ion-item lines="full">
            <ion-grid>
              <ion-row>
                <ion-col col-6 class="lineText">
                  Current Value
                </ion-col>
                <ion-col col-6 text-right class="lineText">
                  {numeral(
                    this.totalBalance - CURRENCYSERVICE.convertToBase(this.wallets.reduce((a, b) => a + b.btcAmount, 0), this.baseCurrency),
                  ).format('0,0.00000000')}
                </ion-col>
              </ion-row>
              <ion-row>
                <ion-col col-6 class="lineText">
                  Sell Value
                </ion-col>
                <ion-col col-6 text-right class="lineText">
                  0
                </ion-col>
              </ion-row>
              <ion-row>
                <ion-col col-6 class="lineText">
                  Change
                </ion-col>
                <ion-col col-6 text-right class="lineText">
                  {numeral(0).format('0,0.00')}
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-item>
          {this.exchanges.filter((e) => e.key && e.secret).map((exchange) => [
            <ion-list-header color="light">
              {exchange.id}
              <ion-badge color="light" margin-right>
                <app-baseprice btcPrice={CURRENCYSERVICE.getBaseTotal(exchange.balances, this.baseCurrency)} baseCurrency={this.baseCurrency} />
              </ion-badge>
            </ion-list-header>,
            exchange.balances.map((b) => (
              <ion-item lines="full">
                <ion-grid>
                  <ion-row>
                    <ion-col col-6 class="lineText">
                      <app-cryptoicon class="cicon" symbol={b.symbol} />
                      <b style={{ position: 'absolute', top: '10px', left: '50px' }}>{b.symbol}</b>
                    </ion-col>
                    <ion-col col-6 text-right class="lineText">
                      <ion-toggle checked={true} />
                    </ion-col>
                  </ion-row>
                  <ion-row>
                    <ion-col col-6 class="lineText">
                      Status
                    </ion-col>
                    <ion-col col-6 text-right class="lineText">
                      open
                    </ion-col>
                  </ion-row>
                  <ion-row>
                    <ion-col col-6 class="lineText">
                      Current Price
                    </ion-col>
                    <ion-col col-6 text-right class="lineText">
                      {numeral(b.btcPrice).format('0,0.00000000')}
                    </ion-col>
                  </ion-row>
                  <ion-row>
                    <ion-col col-6 class="lineText">
                      Sell Price
                    </ion-col>
                    <ion-col col-6 text-right class="lineText">
                      {numeral(b.btcPrice).format('0,0.00000000')}
                    </ion-col>
                  </ion-row>
                  <ion-row>
                    <ion-col col-6 class="lineText">
                      Current Value
                    </ion-col>
                    <ion-col col-6 text-right class="lineText">
                      {numeral(b.btcAmount).format('0,0.00000000')}
                    </ion-col>
                  </ion-row>

                  <ion-row>
                    <ion-col col-6 class="lineText">
                      Sell Value
                    </ion-col>
                    <ion-col col-6 text-right class="lineText">
                      {numeral(b.btcAmount).format('0,0.00000000')}
                    </ion-col>
                  </ion-row>
                  <ion-row>
                    <ion-col col-6 class="lineText">
                      Change
                    </ion-col>
                    <ion-col col-6 text-right class="lineText">
                      {numeral(b.btcAmount).format('0,0.00')}
                    </ion-col>
                  </ion-row>
                  <ion-row>
                    <ion-col col-6 class="lineText" padding-bottom>
                      <ion-button size="small" color="danger" expand="block">
                        Cancel
                      </ion-button>
                    </ion-col>
                  </ion-row>
                </ion-grid>
              </ion-item>
            )),
          ])}
        </ion-list>
      </ion-content>,
    ];
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
}
