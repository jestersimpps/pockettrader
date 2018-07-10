import { Component, Prop, State } from '@stencil/core';
import { Store, Action } from '@stencil/redux';
import { Order, OrderStatus } from '../../services/trade.service';
import numeral from 'numeral';
import { appSetOrders } from '../../actions/app';
import { TRADESERVICE, TICKERSERVICE } from '../../services/globals';
import { Exchange } from '../../services/exchange.service';
import { CURRENCYSERVICE } from '../../services/globals';
import { Currency } from '../../services/currency.service';
import { Ticker } from '../../services/ticker.service';

@Component({
  tag: 'app-order',
  styleUrl: 'app-order.css',
})
export class AppOrder {
  @Prop({ context: 'store' })
  store: Store;
  @Prop() orderId: string;
  @State() order: Order;
  @State() orders: Order[];
  @State() tickers: Ticker[];
  @State() exchanges: Exchange[];
  @State() isLoading: boolean;
  @State() baseCurrency: Currency;

  appSetOrders: Action;

  componentWillLoad() {
    this.store.mapStateToProps(this, (state) => {
      const {
        app: { orders, tickers, exchanges, baseCurrency },
      } = state;
      return {
        orders,
        tickers,
        exchanges,
        baseCurrency,
      };
    });
    this.store.mapDispatchToProps(this, {
      appSetOrders,
    });
    this.order = this.orders.find((o) => o.orderId === this.orderId);
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="dark">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/orders" />
          </ion-buttons>
          <ion-title text-center>{this.order.pair}</ion-title>
          <ion-buttons slot="end">
            <ion-button icon-only disabled={this.isLoading} onClick={() => this.reloadOrder()} padding>
              <ion-icon name="refresh" class={this.isLoading ? 'spin' : ''} />
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
        <ion-list>
          <app-ohlc exchangeId={this.order.exchangeId} symbol={this.order.pair} altPrice={this.order.openPrice} curPrice={this.order.last} />
          {this.order.status === OrderStatus.filled && (
            <ion-item lines="none">
              <ion-label>Profit/Loss</ion-label>
              <ion-label text-right slot="end">
                <b style={{ color: (this.order.last * 100) / this.order.openPrice - 100 > 0 ? '#10dc60' : '#f53d3d' }}>
                  {(this.order.last * 100) / this.order.openPrice - 100 > 0
                    ? '+' + numeral((this.order.last * 100) / this.order.openPrice - 100).format('0,0.00') + ' %'
                    : numeral((this.order.last * 100) / this.order.openPrice - 100).format('0,0.00') + ' %'}
                </b>
              </ion-label>
            </ion-item>
          )}
          {this.order.status === OrderStatus.open && (
            <ion-item lines="none">
              <ion-label>Last/Open Price</ion-label>
              <ion-label text-right slot="end">
                <b style={{ color: (this.order.last * 100) / this.order.openPrice - 100 > 0 ? '#10dc60' : '#f53d3d' }}>
                  {(this.order.last * 100) / this.order.openPrice - 100 > 0
                    ? '+' + numeral((this.order.last * 100) / this.order.openPrice - 100).format('0,0.00') + ' %'
                    : numeral((this.order.last * 100) / this.order.openPrice - 100).format('0,0.00') + ' %'}
                </b>
              </ion-label>
            </ion-item>
          )}
          <ion-item lines="none">
            <ion-label>Type</ion-label>
            <ion-label text-right slot="end">
              {this.order.type}
            </ion-label>
          </ion-item>
          <ion-item lines="none">
            <ion-label>Exchange</ion-label>
            <ion-label text-right slot="end">
              {this.order.exchangeId}
            </ion-label>
          </ion-item>
          <ion-item lines="none">
            <ion-label>Pair</ion-label>
            <ion-label text-right slot="end">
              {this.order.pair}
            </ion-label>
          </ion-item>
          <ion-item lines="full">
            <ion-label>Status</ion-label>
            <ion-badge color="dark" text-right slot="end">
              {this.order.status}
            </ion-badge>
          </ion-item>
          <ion-item lines="none">
            <ion-label>Open Price</ion-label>
            <ion-label text-right slot="end">
              {this.order.openPrice ? numeral(this.order.openPrice).format('0,0.00000000') : '-'}
            </ion-label>
          </ion-item>
          <ion-item lines="none">
            <ion-label>Last Price</ion-label>
            <ion-label text-right slot="end">
              {this.order.last ? numeral(this.order.last).format('0,0.00000000') : '-'}
            </ion-label>
          </ion-item>
          <ion-item lines="none">
            <ion-label>Close Price</ion-label>
            <ion-label text-right slot="end">
              {this.order.closePrice ? numeral(this.order.closePrice).format('0,0.00000000') : '-'}
            </ion-label>
          </ion-item>
          <ion-item lines="none">
            <ion-label>Amount</ion-label>
            <ion-label text-right slot="end">
              {this.order.amount} {this.order.base}
            </ion-label>
          </ion-item>
          <ion-item lines="full">
            <ion-label>Fee</ion-label>
            <ion-label text-right slot="end">
              {this.order.fee ? numeral(this.order.fee).format('0,0.00000000') : '-'}
            </ion-label>
          </ion-item>
          <ion-item lines="none">
            <ion-label>Open Total</ion-label>
            <ion-label text-right slot="end">
              {numeral(this.order.openPrice * this.order.amount - this.order.fee).format('0,0.00000000')} {this.order.quote}
            </ion-label>
          </ion-item>
          <ion-item lines="none">
            <ion-label>Last Total</ion-label>
            <ion-label text-right slot="end">
              {numeral(this.order.last * this.order.amount - this.order.fee).format('0,0.00000000')} {this.order.quote}
            </ion-label>
          </ion-item>
          <ion-item lines="none">
            <ion-label>Close Total</ion-label>
            <ion-label text-right slot="end">
              {this.order.closePrice
                ? numeral(this.order.closePrice * this.order.amount - this.order.fee).format('0,0.00000000') + ` ${this.order.quote}`
                : '-'}
            </ion-label>
          </ion-item>
          <ion-item lines="none">
            <ion-label>Profit/Loss total</ion-label>
            <ion-label text-right slot="end">
              {this.order.closePrice ? (
                <app-baseprice
                  btcPrice={CURRENCYSERVICE.convertToBase(
                    this.order.closePrice * this.order.amount - this.order.openPrice * this.order.amount - 2 * this.order.fee,
                    this.baseCurrency,
                  )}
                  baseCurrency={this.baseCurrency}
                />
              ) : (
                '-'
              )}
            </ion-label>
          </ion-item>

          {this.order.status === OrderStatus.open && (
            <ion-button color="danger" expand="full" disabled={this.isLoading} onClick={() => this.cancelOrder()}>
              {this.isLoading && <ion-icon name="refresh" class="spin" margin-right />}
              Cancel Order
            </ion-button>
          )}
          {this.order.status === OrderStatus.filled ||
            (this.order.status === OrderStatus.cancelled && (
              <ion-nav-pop>
                <ion-button color="danger" expand="full" disabled={this.isLoading} onClick={() => this.deleteOrder()}>
                  {this.isLoading && <ion-icon name="refresh" class="spin" margin-right />}
                  Delete Order
                </ion-button>
              </ion-nav-pop>
            ))}
        </ion-list>
      </ion-content>,
    ];
  }

  cancelOrder() {
    if (window.confirm('Are you sure you want to cancel this order?')) {
      this.isLoading = true;
      let exchange = this.exchanges.find((e) => e.id === this.order.exchangeId);
      TRADESERVICE.cancelOrder(exchange, this.order.orderId, this.order.pair)
        .then(() => {
          window.alert(`Order cancelled`);
          this.order.status = OrderStatus.cancelled;
          this.order.updatedAt = new Date().getTime() / 1000;
          this.appSetOrders(this.orders);
          this.isLoading = false;
        })
        .catch((error) => {
          this.isLoading = false;
          window.alert(`Something went wrong while canceling the order: ${error.message}`);
        });
    }
  }

  deleteOrder() {
    this.isLoading = true;
    let newOrders = this.orders.filter((o) => o.orderId !== this.orderId);
    this.appSetOrders(newOrders);
    this.isLoading = false;
  }

  reloadOrder() {
    this.isLoading = true;
    let exchange = this.exchanges.find((e) => e.id === this.order.exchangeId);
    let tickerData = [];
    TICKERSERVICE.getTickers(this.order.exchangeId)
      .then((response) => {
        tickerData = response.data;
        return TRADESERVICE.getOrder(exchange, this.order.orderId, this.order.pair)
          .then((response) => {
            let orderData = response.data;
            let currentOrder = this.orders.find((o) => o.orderId === orderData.id);
            let ticker = tickerData.find((t) => t.symbol === currentOrder.pair);
            currentOrder.filled = orderData.filled;
            currentOrder.remaining = orderData.remaining;
            currentOrder.base = ticker.base;
            currentOrder.last = ticker.last;
            currentOrder.quote = ticker.quote;
            if (+orderData.remaining === 0) {
              currentOrder.status = OrderStatus.filled;
            }
            currentOrder.updatedAt = new Date().getTime() / 1000;
            this.isLoading = false;
            this.appSetOrders(this.orders);
          })
          .catch((error) => {
            window.alert(`Something went wrong while fetching the orderbook: ${error.message}`);
            this.isLoading = false;
          });
      })
      .catch((error) => {
        window.alert(`Error fetching ticker data: ${error.message}`);
        this.isLoading = false;
      });
  }
}
