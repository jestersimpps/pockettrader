/*! Built with http://stenciljs.com */
const { h } = window.App;

import { a as numeral } from './chunk-374e99fd.js';
import { h as appSetOrders } from './chunk-43b312d9.js';
import { e as TRADESERVICE } from './chunk-6b468cd6.js';
import { a as OrderStatus } from './chunk-da5de7ce.js';
import './chunk-a7525511.js';
import './chunk-8b6e0876.js';

class AppOrder {
    componentWillLoad() {
        this.store.mapStateToProps(this, (state) => {
            const { app: { orders, exchanges }, } = state;
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
            h("ion-header", null,
                h("ion-toolbar", { color: "dark" },
                    h("ion-buttons", { slot: "start" },
                        h("ion-back-button", { defaultHref: "/orders" })),
                    h("ion-title", { "text-center": true },
                        "Open ",
                        this.order.base,
                        " Order"))),
            h("ion-content", null,
                h("ion-list", null,
                    h("ion-item", { lines: "none" },
                        h("ion-label", null, "Exchange"),
                        h("ion-label", { "text-right": true, slot: "end" }, this.order.exchangeId)),
                    h("ion-item", { lines: "none" },
                        h("ion-label", null, "Pair"),
                        h("ion-label", { "text-right": true, slot: "end" }, this.order.pair)),
                    h("ion-item", { lines: "none" },
                        h("ion-label", null, "Type"),
                        h("ion-label", { "text-right": true, slot: "end" }, this.order.type)),
                    h("ion-item", { lines: "none" },
                        h("ion-label", null, "Amount"),
                        h("ion-label", { "text-right": true, slot: "end" },
                            this.order.amount,
                            " ",
                            this.order.base)),
                    h("ion-item", { lines: "none" },
                        h("ion-label", null, "Open Price"),
                        h("ion-label", { "text-right": true, slot: "end" }, this.order.openPrice)),
                    h("ion-item", { lines: "none" },
                        h("ion-label", null, "last Price"),
                        h("ion-label", { "text-right": true, slot: "end" }, this.order.last)),
                    h("ion-item", { lines: "none" },
                        h("ion-label", null, "Filled"),
                        h("ion-label", { "text-right": true, slot: "end" },
                            numeral(this.order.filled / this.order.amount).format('0,0.00'),
                            " %")),
                    this.order.status === OrderStatus.open && (h("ion-button", { color: "danger", expand: "block", disabled: this.isLoading, onClick: () => this.cancelOrder() },
                        this.isLoading && h("ion-icon", { name: "refresh", class: "spin", "margin-right": true }),
                        "Cancel Order")))),
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
    static get is() { return "app-order"; }
    static get properties() { return {
        "exchanges": {
            "state": true
        },
        "isLoading": {
            "state": true
        },
        "order": {
            "state": true
        },
        "orderId": {
            "type": String,
            "attr": "order-id"
        },
        "orders": {
            "state": true
        },
        "store": {
            "context": "store"
        }
    }; }
    static get style() { return ""; }
}

export { AppOrder };
