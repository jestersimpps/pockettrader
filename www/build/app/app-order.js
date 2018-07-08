/*! Built with http://stenciljs.com */
const { h } = window.App;

import { e as OrderStatus, d as TRADESERVICE, a as CURRENCYSERVICE } from './chunk-1c4b34f7.js';
import { a as numeral } from './chunk-374e99fd.js';
import { i as appSetOrders } from './chunk-9c7d3ec3.js';
import './chunk-ea6d9d39.js';
import './chunk-a7525511.js';

class AppOrder {
    componentWillLoad() {
        this.store.mapStateToProps(this, (state) => {
            const { app: { orders, exchanges, baseCurrency }, } = state;
            return {
                orders,
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
                    h("ion-title", { "text-center": true },
                        this.order.base,
                        " Order"))),
            h("ion-content", null,
                h("ion-list", null,
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
                        h("ion-label", null, "Amount"),
                        h("ion-label", { "text-right": true, slot: "end" },
                            this.order.amount,
                            " ",
                            this.order.base)),
                    h("ion-item", { lines: "none" },
                        h("ion-label", null, "Fee"),
                        h("ion-label", { "text-right": true, slot: "end" }, this.order.fee ? numeral(this.order.fee).format('0,0.00000000') : '-')),
                    h("ion-item", { lines: "full" },
                        h("ion-label", null, "Total"),
                        h("ion-label", { "text-right": true, slot: "end" },
                            numeral(this.order.openPrice * this.order.amount - this.order.fee).format('0,0.00000000'),
                            " ",
                            this.order.quote)),
                    h("ion-item", { lines: "none" },
                        h("ion-label", null, "last Price"),
                        h("ion-label", { "text-right": true, slot: "end" }, this.order.last ? numeral(this.order.last).format('0,0.00000000') : '-')),
                    this.order.status === OrderStatus.filled && (h("ion-item", { lines: "none" },
                        h("ion-label", null, "Profit/Loss"),
                        h("ion-label", { "text-right": true, slot: "end" },
                            h("b", { style: { color: (this.order.last * 100) / this.order.openPrice - 100 > 0 ? '#10dc60' : '#f53d3d' } }, (this.order.last * 100) / this.order.openPrice - 100 > 0
                                ? '+' + numeral((this.order.last * 100) / this.order.openPrice - 100).format('0,0.00') + ' %'
                                : numeral((this.order.last * 100) / this.order.openPrice - 100).format('0,0.00') + ' %')))),
                    this.order.status === OrderStatus.open && (h("ion-item", { lines: "none" },
                        h("ion-label", null, "Last/Open Price"),
                        h("ion-label", { "text-right": true, slot: "end" },
                            h("b", { style: { color: (this.order.last * 100) / this.order.openPrice - 100 > 0 ? '#10dc60' : '#f53d3d' } }, (this.order.last * 100) / this.order.openPrice - 100 > 0
                                ? '+' + numeral((this.order.last * 100) / this.order.openPrice - 100).format('0,0.00') + ' %'
                                : numeral((this.order.last * 100) / this.order.openPrice - 100).format('0,0.00') + ' %')))),
                    h("ion-item", { lines: "none" },
                        h("ion-label", null, "Close Price"),
                        h("ion-label", { "text-right": true, slot: "end" }, this.order.closePrice ? numeral(this.order.closePrice).format('0,0.00000000') : '-')),
                    h("ion-item", { lines: "none" },
                        h("ion-label", null, "Total Profit/Loss"),
                        h("ion-label", { "text-right": true, slot: "end" },
                            this.baseCurrency.symbol,
                            ' ',
                            this.order.closePrice ? (h("app-baseprice", { btcPrice: CURRENCYSERVICE.convertToBase(this.order.closePrice * this.order.amount - this.order.openPrice * this.order.amount - 2 * this.order.fee, this.baseCurrency), baseCurrency: this.baseCurrency })) : ('-'))),
                    this.order.status === OrderStatus.open && (h("ion-button", { color: "danger", expand: "full", disabled: this.isLoading, onClick: () => this.cancelOrder() },
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
        }
    }; }
    static get style() { return ""; }
}

export { AppOrder };
