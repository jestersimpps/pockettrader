import { Component, State, Prop } from '@stencil/core';
import { Store, Action } from '@stencil/redux';
import { Exchange, ExchangeId } from '../../services/exchange.service';
import { Ticker } from '../../services/ticker.service';
import { Order, OrderType, OrderStatus } from '../../services/trade.service';
import { TRADESERVICE, BALANCESERVICE } from '../../services/globals';
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
import { Wallet } from '../../services/wallets.service';
import { moment } from '../../global/moment';

@Component({
  tag: 'app-orders',
  styleUrl: 'app-orders.css',
})
export class AppOrders {
  @Prop({ context: 'store' })
  store: Store;
  @State() exchanges: Exchange[];
  @State() tickers: Ticker[];
  @State() pairs: any[] = [];
  @State() exchangeId: ExchangeId;
  @State() ticker: any;
  @State() orders: Order[];
  @State() wallets: Wallet[];
  @State() isLoading = false;
  @State() status = 0;
  @State() dust: number;

  appSetOrders: Action;
  appSetExchanges: Action;
  appSetCurrencies: Action;
  appSetBaseCurrency: Action;
  appSetConversionRates: Action;
  appSetTickers: Action;
  appSetTotalBalances: Action;
  appSetWallets: Action;
  appSetBalances: Action;

  componentWillLoad() {
    this.store.mapStateToProps(this, (state) => {
      const {
        app: { exchanges, wallets, tickers, orders, dust },
      } = state;
      return {
        exchanges,
        tickers,
        wallets,
        orders,
        dust,
      };
    });
    this.store.mapDispatchToProps(this, {
      appSetOrders,
      appSetExchanges,
      appSetBaseCurrency,
      appSetCurrencies,
      appSetTickers,
      appSetTotalBalances,
      appSetWallets,
      appSetBalances,
    });
  }

  reloadOrders() {
    this.isLoading = true;
    let openOrderPromises = [];
    this.orders.filter((o) => o.status === OrderStatus.open).forEach((order) => {
      let exchange = this.exchanges.find((e) => e.id === order.exchangeId);
      openOrderPromises.push(TRADESERVICE.getOrder(exchange, order.orderId, order.pair));
    });
    Promise.all(openOrderPromises)
      .then((openOrderData) => {
        openOrderData.map((od) => od.data).forEach((order) => {
          let currentOrder = this.orders.find((o) => o.orderId === order.id);
          let tickerData = this.tickers.find((t) => t.exchangeId === currentOrder.exchangeId).tickers;
          let ticker = tickerData.find((t) => t.symbol === currentOrder.pair);
          currentOrder.filled = order.filled;
          currentOrder.remaining = order.remaining;
          currentOrder.base = ticker.base;
          currentOrder.last = ticker.last;
          currentOrder.quote = ticker.quote;
          if (+order.remaining === 0) {
            currentOrder.status = OrderStatus.filled;
          }
          currentOrder.updatedAt = new Date().getTime() / 1000;
        });
        this.isLoading = false;
        this.refreshBalances();
      })
      .catch((error) => {
        window.alert(`Something went wrong while fetching the orderbook: ${error.message}`);
        this.isLoading = false;
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
          <ion-title text-center>Orders</ion-title>
          <ion-buttons slot="end">
            <ion-button icon-only disabled={this.isLoading} onClick={() => this.reloadOrders()} padding>
              <ion-icon name="refresh" class={this.isLoading ? 'spin' : ''} />
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
        <ion-segment color="dark" onIonChange={(e) => (this.status = +e.detail.value)}>
          <ion-segment-button value="0" checked={this.status === 0}>
            Open
          </ion-segment-button>
          <ion-segment-button value="1" checked={this.status === 1}>
            Bought
          </ion-segment-button>
          <ion-segment-button value="2" checked={this.status === 2}>
            Sold
          </ion-segment-button>
          <ion-segment-button value="3" checked={this.status === 3}>
            Cancelled
          </ion-segment-button>
        </ion-segment>
      </ion-header>,
      <ion-item lines="full" color="light">
        <ion-grid>
          <ion-row>
            <ion-col col-4 class="lineText">
              <b>Pair</b>
            </ion-col>
            <ion-col col-4 text-center class="lineText">
              <b>Type</b>
            </ion-col>
            <ion-col col-4 text-right class="lineText">
              <b>Exchange</b>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col col-4 class="lineText">
              <b>Amount</b>
            </ion-col>
            <ion-col col-4 text-center class="lineText">
              {this.status === 0 && <b>Open price</b>}
              {this.status === 1 && <b>Fill price</b>}
              {this.status === 2 && <b>Fill price</b>}
              {this.status === 3 && <b>Open price</b>}
            </ion-col>
            <ion-col col-4 text-right class="lineText">
              <b>Total</b>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col col-4 class="lineText">
              {this.status === 0 && <b>Opened</b>}
              {this.status === 1 && <b>Bought</b>}
              {this.status === 2 && <b>Sold</b>}
              {this.status === 3 && <b>Cancelled</b>}
            </ion-col>
            <ion-col col-4 text-center class="lineText">
              {this.status === 3 ? <b>-</b> : <b>Last price</b>}
            </ion-col>
            <ion-col col-4 text-right class="lineText">
              {this.status === 0 && <b>Last/Open</b>}
              {this.status === 1 && <b>Last/Fill</b>}
              {this.status === 2 && <b>Last/Fill</b>}
              {this.status === 3 && <b>-</b>}
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-item>,
      <ion-content>
        <ion-list>
          {this.status === 0 && [
            this.orders
              .sort((a, b) => {
                return b.updatedAt - a.updatedAt;
              })
              .filter((o) => o.status === OrderStatus.open)
              .map((order) => [
                <ion-item lines="full" href={`/orders/${order.orderId}`}>
                  <ion-grid>
                    <ion-row>
                      <ion-col col-4 text-left class="lineText">
                        <b>{order.pair}</b>
                      </ion-col>
                      <ion-col col-4 text-center class="lineText">
                        {order.type}
                      </ion-col>
                      <ion-col col-4 text-right class="lineText">
                        {order.exchangeId}
                      </ion-col>
                    </ion-row>
                    <ion-row>
                      <ion-col col-4 text-left class="lineText">
                        {numeral(order.amount).format('0,0.00000')}
                      </ion-col>
                      <ion-col col-4 text-center class="lineText">
                        {numeral(order.openPrice).format('0,0.00000000')}
                      </ion-col>
                      <ion-col col-4 text-right class="lineText">
                        {numeral(order.openPrice * order.amount).format('0,0.00000000')}
                      </ion-col>
                    </ion-row>
                    <ion-row>
                      <ion-col col-4 text-left class="lineText">
                        <small>{moment.unix(order.createdAt).fromNow()}</small>
                      </ion-col>
                      <ion-col col-4 text-center class="lineText">
                        {numeral(order.last).format('0,0.00000000')}
                      </ion-col>
                      <ion-col col-4 text-right class="lineText">
                        <b style={{ color: (order.last * 100) / order.openPrice - 100 > 0 ? '#10dc60' : '#f53d3d' }}>
                          {(order.last * 100) / order.openPrice - 100 > 0
                            ? '+' + numeral((order.last * 100) / order.openPrice - 100).format('0,0.00') + ' %'
                            : numeral((order.last * 100) / order.openPrice - 100).format('0,0.00') + ' %'}
                        </b>
                      </ion-col>
                    </ion-row>
                  </ion-grid>
                </ion-item>,
              ]),
          ]}
          {this.status === 1 && [
            this.orders
              .sort((a, b) => {
                return b.updatedAt - a.updatedAt;
              })
              .filter((o) => o.type === OrderType.LIMITBUY || o.type === OrderType.MARKETBUY)
              .filter((o) => o.status === OrderStatus.closed || o.status === OrderStatus.filled)
              .map((order) => [
                <ion-item lines="full" href={`/orders/${order.orderId}`}>
                  <ion-grid>
                    <ion-row>
                      <ion-col col-4 text-left class="lineText">
                        <b>{order.pair}</b>
                      </ion-col>
                      <ion-col col-4 text-center class="lineText">
                        {order.type}
                      </ion-col>
                      <ion-col col-4 text-right class="lineText">
                        {order.exchangeId}
                      </ion-col>
                    </ion-row>
                    <ion-row>
                      <ion-col col-4 text-left class="lineText">
                        {numeral(order.amount).format('0,0.00000')}
                      </ion-col>
                      <ion-col col-4 text-center class="lineText">
                        {numeral(order.openPrice).format('0,0.00000000')}
                      </ion-col>
                      <ion-col col-4 text-right class="lineText">
                        {numeral(order.openPrice * order.amount).format('0,0.00000000')}
                      </ion-col>
                    </ion-row>
                    <ion-row>
                      <ion-col col-4 text-left class="lineText">
                        <small>{moment.unix(order.updatedAt).fromNow()}</small>
                      </ion-col>
                      <ion-col col-4 text-center class="lineText">
                        {numeral(order.openPrice).format('0,0.00000000')}
                      </ion-col>
                      <ion-col col-4 text-right class="lineText">
                        <b style={{ color: (order.last * 100) / order.openPrice - 100 > 0 ? '#10dc60' : '#f53d3d' }}>
                          {(order.last * 100) / order.openPrice - 100 > 0
                            ? '+' + numeral((order.last * 100) / order.openPrice - 100).format('0,0.00') + ' %'
                            : numeral((order.last * 100) / order.openPrice - 100).format('0,0.00') + ' %'}
                        </b>
                      </ion-col>
                    </ion-row>
                  </ion-grid>
                </ion-item>,
              ]),
          ]}
          {this.status === 2 && [
            this.orders
              .sort((a, b) => {
                return b.updatedAt - a.updatedAt;
              })
              .filter((o) => o.type === OrderType.LIMITSELL || o.type === OrderType.MARKETSELL)
              .filter((o) => o.status === OrderStatus.closed || o.status === OrderStatus.filled)
              .map((order) => [
                <ion-item lines="full" href={`/orders/${order.orderId}`}>
                  <ion-grid>
                    <ion-row>
                      <ion-col col-4 text-left class="lineText">
                        <b>{order.pair}</b>
                      </ion-col>
                      <ion-col col-4 text-center class="lineText">
                        {order.type}
                      </ion-col>
                      <ion-col col-4 text-right class="lineText">
                        {order.exchangeId}
                      </ion-col>
                    </ion-row>
                    <ion-row>
                      <ion-col col-4 text-left class="lineText">
                        {numeral(order.amount).format('0,0.00000')}
                      </ion-col>
                      <ion-col col-4 text-center class="lineText">
                        {numeral(order.openPrice).format('0,0.00000000')}
                      </ion-col>
                      <ion-col col-4 text-right class="lineText">
                        {numeral(order.openPrice * order.amount).format('0,0.00000000')}
                      </ion-col>
                    </ion-row>
                    <ion-row>
                      <ion-col col-4 text-left class="lineText">
                        <small>{moment.unix(order.updatedAt).fromNow()}</small>
                      </ion-col>
                      <ion-col col-4 text-center class="lineText">
                        {order.closePrice ? numeral(order.closePrice).format('0,0.00000000') : numeral(order.last).format('0,0.00000000')}
                      </ion-col>
                      <ion-col col-4 text-right class="lineText">
                        {order.closePrice ? (
                          <b style={{ color: (order.closePrice * 100) / order.openPrice - 100 > 0 ? '#10dc60' : '#f53d3d' }}>
                            {(order.closePrice * 100) / order.openPrice - 100 > 0
                              ? '+' + numeral((order.closePrice * 100) / order.openPrice - 100).format('0,0.00') + ' %'
                              : numeral((order.closePrice * 100) / order.openPrice - 100).format('0,0.00') + ' %'}
                          </b>
                        ) : (
                          <b style={{ color: (order.last * 100) / order.openPrice - 100 > 0 ? '#10dc60' : '#f53d3d' }}>
                            {(order.last * 100) / order.openPrice - 100 > 0
                              ? '+' + numeral((order.last * 100) / order.openPrice - 100).format('0,0.00') + ' %'
                              : numeral((order.last * 100) / order.openPrice - 100).format('0,0.00') + ' %'}
                          </b>
                        )}
                      </ion-col>
                    </ion-row>
                  </ion-grid>
                </ion-item>,
              ]),
          ]}

          {this.status === 3 && [
            this.orders
              .sort((a, b) => {
                return b.updatedAt - a.updatedAt;
              })
              .filter((o) => o.status === OrderStatus.cancelled)
              .map((order) => [
                <ion-item lines="full" href={`/orders/${order.orderId}`}>
                  <ion-grid>
                    <ion-row>
                      <ion-col col-4 text-left class="lineText">
                        <b>{order.pair}</b>
                      </ion-col>
                      <ion-col col-4 text-center class="lineText">
                        {order.type}
                      </ion-col>
                      <ion-col col-4 text-right class="lineText">
                        {order.exchangeId}
                      </ion-col>
                    </ion-row>
                    <ion-row>
                      <ion-col col-4 text-left class="lineText">
                        {numeral(order.amount).format('0,0.00000')}
                      </ion-col>
                      <ion-col col-4 text-center class="lineText">
                        {numeral(order.openPrice).format('0,0.00000000')}
                      </ion-col>
                      <ion-col col-4 text-right class="lineText">
                        {numeral(order.openPrice * order.amount).format('0,0.00000000')}
                      </ion-col>
                    </ion-row>
                    <ion-row>
                      <ion-col col-4 text-left class="lineText">
                        <small>{moment.unix(order.updatedAt).fromNow()}</small>
                      </ion-col>
                      <ion-col col-4 text-center class="lineText">
                        -
                      </ion-col>
                      <ion-col col-4 text-right class="lineText">
                        -
                      </ion-col>
                    </ion-row>
                  </ion-grid>
                </ion-item>,
              ]),
          ]}
        </ion-list>
      </ion-content>,
    ];
  }
}
