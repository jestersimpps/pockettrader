import { Component, Prop, State } from '@stencil/core';
import { Store, Action } from '@stencil/redux';
import { Exchange } from '../../services/exchange.service';
import { Currency } from '../../services/currency.service';
import { Wallet } from '../../services/wallets.service';
import { CURRENCYSERVICE, BALANCESERVICE } from '../../services/globals';
import numeral from 'numeral';
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
import { Balances } from '../../services/balance.service';
import { Order } from '../../services/trade.service';

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
  @State() balances: Balances;
  @State() orders: Order[];
  @State() dust: number;

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
              <app-baseprice btcPrice={CURRENCYSERVICE.convertToBase(this.balances.exchanges, this.baseCurrency)} baseCurrency={this.baseCurrency} />
            </ion-badge>
          </ion-list-header>
          <ion-item lines="full">
            <ion-grid>
              <ion-row>
                <ion-col col-6 class="lineText">
                  Current Value
                </ion-col>
                <ion-col col-6 text-right class="lineText">
                  {numeral(CURRENCYSERVICE.convertToBase(this.balances.exchanges, this.baseCurrency)).format('0,0.00000000')}
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
                      <app-cryptoicon class="cicon" symbol={b.currency} />
                      <b style={{ position: 'absolute', top: '10px', left: '50px' }}>{b.currency}</b>
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
}
