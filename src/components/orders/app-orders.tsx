import { Component, State, Prop } from '@stencil/core';
import { Store, Action } from '@stencil/redux';
import { Exchange, ExchangeId } from '../../services/exchange.service';
import { Ticker } from '../../services/ticker.service';
import { Order } from '../../services/trade.service';
import { TRADESERVICE } from '../../services/globals';
import { appSetOrders } from '../../actions/app';
import numeral from 'numeral';

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
  @State() isLoading = true;
  @State() status = 0;

  appSetOrders: Action;

  componentWillLoad() {
    this.store.mapStateToProps(this, (state) => {
      const {
        app: { exchanges, tickers, orders },
      } = state;
      return {
        exchanges,
        tickers,
        orders,
      };
    });
    this.store.mapDispatchToProps(this, {
      appSetOrders,
    });
    this.reloadOrders();
  }

  reloadOrders() {
    this.isLoading = true;
    let openOrderPromises = [];
    this.orders.forEach((order) => {
      let exchange = this.exchanges.find((e) => e.id === order.exchangeId);
      openOrderPromises.push(TRADESERVICE.getOrder(exchange, order.orderId, order.pair));
    });
    Promise.all(openOrderPromises).then((openOrderData) => {
      openOrderData.map((od) => od.data).forEach((order) => {
        let currentOrder = this.orders.find((o) => o.orderId === order.id);
        let tickerData = this.tickers.find((t) => t.exchangeId === currentOrder.exchangeId).tickers;
        let ticker = tickerData.find((t) => t.symbol === currentOrder.pair);
        currentOrder.filled = order.filled;
        currentOrder.remaining = order.remaining;
        currentOrder.base = ticker.base;
        currentOrder.last = ticker.last;
        currentOrder.updatedAt = new Date().getTime();
      });
      this.isLoading = false;
      this.appSetOrders(this.orders);
    });
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="dark">
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
            Closed
          </ion-segment-button>
        </ion-segment>
      </ion-header>,
      <ion-content>
        {this.status === 0 && [
          this.orders.map((order) => [
            <ion-item lines="full" href={`/orders/${order.orderId}`}>
              <ion-grid>
                <ion-row>
                  <ion-col col-4 class="lineText">
                    {order.type}
                  </ion-col>
                  <ion-col col-4 text-center class="lineText">
                    {numeral(order.amount).format('0,0.000000')}
                  </ion-col>
                  <ion-col col-4 text-right class="lineText">
                    <small>open:</small>
                    {numeral(order.openPrice).format('0,0.000000')}
                  </ion-col>
                </ion-row>
                <ion-row>
                  <ion-col col-4 text-left class="lineText">
                    <b>{order.pair}</b>
                  </ion-col>
                  <ion-col col-4 text-center class="lineText">
                    {order.exchangeId}
                  </ion-col>
                  <ion-col col-4 text-right class="lineText">
                    <small>last:</small>
                    {numeral(order.last).format('0,0.000000')}
                  </ion-col>
                </ion-row>
              </ion-grid>
            </ion-item>,
          ]),
        ]}
      </ion-content>,
    ];
  }
}
