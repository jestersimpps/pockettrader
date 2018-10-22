/*! Built with http://stenciljs.com */
const { h } = window.App;

import { d as OrderStatus, e as TRADESERVICE, b as TICKERSERVICE } from './chunk-811498d8.js';
import { a as numeral } from './chunk-60e5018c.js';
import { i as appSetOrders } from './chunk-917ac8f0.js';
import './chunk-7affb05f.js';

class AppOrder {
    componentWillLoad() {
        this.store.mapStateToProps(this, (state) => {
            const { app: { orders, tickers, exchanges, baseCurrency }, } = state;
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
            h("ion-header", null,
                h("ion-toolbar", { color: "dark" },
                    h("ion-buttons", { slot: "start" },
                        h("ion-back-button", { defaultHref: "/orders" })),
                    h("ion-title", { "text-center": true }, this.order.pair),
                    h("ion-buttons", { slot: "end" },
                        h("ion-button", { "icon-only": true, disabled: this.isLoading, onClick: () => this.reloadOrder(), padding: true },
                            h("ion-icon", { name: "refresh", class: this.isLoading ? 'spin' : '' }))))),
            h("ion-content", null,
                h("ion-list", null,
                    h("app-ohlc", { exchangeId: this.order.exchangeId, symbol: this.order.pair, altPrice: this.order.openPrice, curPrice: this.order.last }),
                    h("ion-item", { lines: "none" },
                        h("ion-label", null, "Last/Open Price"),
                        h("ion-label", { "text-right": true, slot: "end" },
                            h("b", { style: { color: (this.order.last * 100) / this.order.openPrice - 100 > 0 ? '#10dc60' : '#f53d3d' } }, (this.order.last * 100) / this.order.openPrice - 100 > 0
                                ? '+' + numeral((this.order.last * 100) / this.order.openPrice - 100).format('0,0.00') + ' %'
                                : numeral((this.order.last * 100) / this.order.openPrice - 100).format('0,0.00') + ' %'))),
                    h("ion-item", { lines: "none" },
                        h("ion-label", null, "Type"),
                        h("ion-label", { "text-right": true, slot: "end" }, this.order.type)),
                    h("ion-item", { lines: "none" },
                        h("ion-label", null, "Exchange"),
                        h("ion-label", { "text-right": true, slot: "end" }, this.order.exchangeId)),
                    h("ion-item", { lines: "none" },
                        h("ion-label", null, "Pair"),
                        h("ion-label", { "text-right": true, slot: "end" }, this.order.pair)),
                    h("ion-item", { lines: "full" },
                        h("ion-label", null, "Status"),
                        h("ion-badge", { color: "dark", "text-right": true, slot: "end" }, this.order.status)),
                    h("ion-item", { lines: "none" },
                        h("ion-label", null, "Open Price"),
                        h("ion-label", { "text-right": true, slot: "end" }, this.order.openPrice ? numeral(this.order.openPrice).format('0,0.00000000') : '-')),
                    h("ion-item", { lines: "none" },
                        h("ion-label", null, "Last Price"),
                        h("ion-label", { "text-right": true, slot: "end" }, this.order.last ? numeral(this.order.last).format('0,0.00000000') : '-')),
                    h("ion-item", { lines: "none" },
                        h("ion-label", null, "Amount"),
                        h("ion-label", { "text-right": true, slot: "end" },
                            this.order.amount,
                            " ",
                            this.order.base)),
                    h("ion-item", { lines: "full" },
                        h("ion-label", null, "Fee"),
                        h("ion-label", { "text-right": true, slot: "end" }, this.order.fee ? numeral(this.order.fee).format('0,0.00000000') : '-')),
                    h("ion-item", { lines: "none" },
                        h("ion-label", null, "Open Total"),
                        h("ion-label", { "text-right": true, slot: "end" }, this.order.openPrice ? numeral(this.order.openPrice * this.order.amount - this.order.fee).format('0,0.00000000') : '-')),
                    h("ion-item", { lines: "none" },
                        h("ion-label", null, "Last Total"),
                        h("ion-label", { "text-right": true, slot: "end" }, this.order.last ? numeral(this.order.last * this.order.amount - this.order.fee).format('0,0.00000000') : '-')),
                    h("ion-item", { lines: "none" },
                        h("ion-label", null,
                            this.order.status === OrderStatus.open && 'Last - Open total',
                            this.order.status === OrderStatus.filled && 'Last - Fill total',
                            this.order.status === OrderStatus.closed && 'Last - Fill total',
                            this.order.status === OrderStatus.cancelled && 'Last/Open total'),
                        h("ion-label", { "text-right": true, slot: "end" }, this.order.last
                            ? numeral(this.order.last * this.order.amount - this.order.openPrice * this.order.amount - 2 * this.order.fee).format('0,0.00000000')
                            : '-')),
                    this.order.status === OrderStatus.open && (h("ion-button", { color: "danger", expand: "full", disabled: this.isLoading, onClick: () => this.cancelOrder() },
                        this.isLoading && h("ion-icon", { name: "refresh", class: "spin", "margin-right": true }),
                        "Cancel Order")),
                    h("ion-nav-pop", null,
                        h("ion-button", { color: "danger", expand: "full", disabled: this.isLoading, onClick: () => this.deleteOrder() },
                            this.isLoading && h("ion-icon", { name: "refresh", class: "spin", "margin-right": true }),
                            "Delete Order")))),
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
                currentOrder.last = ticker.last;
                if (+orderData.remaining === 0) {
                    currentOrder.status = OrderStatus.filled;
                }
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
    static get is() { return "app-order"; }
    static get properties() { return {
        "baseCurrency": {
            "state": true
        },
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
        },
        "tickers": {
            "state": true
        }
    }; }
    static get style() { return ""; }
}

export { AppOrder };
