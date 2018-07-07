import { Component, Prop, State } from '@stencil/core';
import { Store, Action } from '@stencil/redux';
import { Order } from '../../services/trade.service';
import numeral from 'numeral';
import { appSetOrders } from '../../actions/app';
import { TRADESERVICE } from '../../services/globals';
import { Exchange } from '../../services/exchange.service';
import { OrderStatus } from '../../exchangewrappers/enums/orderstatus.enum';

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
  @State() exchanges: Exchange[];
  @State() isLoading: boolean;

  appSetOrders: Action;

  componentWillLoad() {
    this.store.mapStateToProps(this, (state) => {
      const {
        app: { orders, exchanges },
      } = state;
      return {
        orders,
        exchanges,
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
          <ion-title text-center>{this.order.base} Order</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
        <ion-list>
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
            <ion-label>Amount</ion-label>
            <ion-label text-right slot="end">
              {this.order.amount} {this.order.base}
            </ion-label>
          </ion-item>
          <ion-item lines="none">
            <ion-label>Fee</ion-label>
            <ion-label text-right slot="end">
              {this.order.fee ? numeral(this.order.fee).format('0,0.00000000') : '-'}
            </ion-label>
          </ion-item>
          <ion-item lines="full">
            <ion-label>Total</ion-label>
            <ion-label text-right slot="end">
              {numeral(this.order.openPrice * this.order.amount - this.order.fee).format('0,0.00000000')} {this.order.quote}
            </ion-label>
          </ion-item>
          <ion-item lines="none">
            <ion-label>last Price</ion-label>
            <ion-label text-right slot="end">
              {this.order.last ? numeral(this.order.last).format('0,0.00000000') : '-'}
            </ion-label>
          </ion-item>
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
          <ion-item lines="none">
            <ion-label>Close Price</ion-label>
            <ion-label text-right slot="end">
              {this.order.closePrice ? numeral(this.order.closePrice).format('0,0.00000000') : '-'}
            </ion-label>
          </ion-item>
          <ion-item lines="none">
            <ion-label>Total Profit/Loss</ion-label>
            <ion-label text-right slot="end">
              {this.order.closePrice
                ? numeral(this.order.closePrice * this.order.amount - this.order.openPrice * this.order.amount - 2 * this.order.fee).format(
                    '0,0.00000000',
                  )
                : '-'}
            </ion-label>
          </ion-item>

          {this.order.status === OrderStatus.open && (
            <ion-button color="danger" expand="block" disabled={this.isLoading} onClick={() => this.cancelOrder()}>
              {this.isLoading && <ion-icon name="refresh" class="spin" margin-right />}
              Cancel Order
            </ion-button>
          )}
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
          this.appSetOrders(this.orders);
          this.isLoading = false;
        })
        .catch((error) => {
          this.isLoading = false;
          window.alert(`Something went wrong while cancelling the order: ${error.message}`);
        });
    }
  }
}
