/*! Built with http://stenciljs.com */
const { h } = window.App;

import { e as TRADESERVICE, c as BALANCESERVICE } from './chunk-6b468cd6.js';
import { a as numeral } from './chunk-374e99fd.js';
import { a as OrderStatus } from './chunk-da5de7ce.js';
import { c as appSetExchanges, a as appSetBaseCurrency, d as appSetCurrencies, e as appSetTickers, f as appSetTotalBalances, b as appSetWallets, g as appSetBalances, h as appSetOrders } from './chunk-43b312d9.js';
import './chunk-8b6e0876.js';
import './chunk-a7525511.js';

class AppOrders {
    constructor() {
        this.pairs = [];
        this.isLoading = false;
        this.status = 0;
    }
    componentWillLoad() {
        this.store.mapStateToProps(this, (state) => {
            const { app: { exchanges, wallets, tickers, orders }, } = state;
            return {
                exchanges,
                tickers,
                wallets,
                orders,
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
                if (+order.remaining === 0) {
                    currentOrder.status = OrderStatus.filled;
                    currentOrder.closePrice = ticker.last;
                }
                currentOrder.updatedAt = new Date().getTime();
            });
            this.isLoading = false;
            this.refreshBalances();
            this.appSetOrders(this.orders);
        })
            .catch((error) => {
            window.alert(`Something went wrong while fetching the orderbook: ${error.message}`);
            this.isLoading = false;
        });
    }
    refreshBalances() {
        this.isLoading = true;
        BALANCESERVICE.refreshBalances(this.wallets, this.exchanges).then((response) => {
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
            }
            this.isLoading = false;
        });
    }
    render() {
        return [
            h("ion-header", null,
                h("ion-toolbar", { color: "dark" },
                    h("ion-buttons", { slot: "start" },
                        h("ion-button", { "icon-only": true, href: "/settings", padding: true },
                            h("ion-icon", { name: "options" }))),
                    h("ion-title", { "text-center": true }, "Orders"),
                    h("ion-buttons", { slot: "end" },
                        h("ion-button", { "icon-only": true, disabled: this.isLoading, onClick: () => this.reloadOrders(), padding: true },
                            h("ion-icon", { name: "refresh", class: this.isLoading ? 'spin' : '' })))),
                h("ion-segment", { color: "dark", onIonChange: (e) => (this.status = +e.detail.value) },
                    h("ion-segment-button", { value: "0", checked: this.status === 0 }, "Open"),
                    h("ion-segment-button", { value: "1", checked: this.status === 1 }, "Filled"))),
            h("ion-content", null,
                this.status === 0 && [
                    this.orders.filter((o) => o.status === OrderStatus.open).map((order) => [
                        h("ion-item", { lines: "full", href: `/orders/${order.orderId}` },
                            h("ion-grid", null,
                                h("ion-row", null,
                                    h("ion-col", { "col-4": true, class: "lineText" }, order.type),
                                    h("ion-col", { "col-4": true, "text-center": true, class: "lineText" }, numeral(order.amount).format('0,0.000000')),
                                    h("ion-col", { "col-4": true, "text-right": true, class: "lineText" },
                                        h("small", null, "open:"),
                                        numeral(order.openPrice).format('0,0.000000'))),
                                h("ion-row", null,
                                    h("ion-col", { "col-4": true, "text-left": true, class: "lineText" },
                                        h("b", null, order.pair)),
                                    h("ion-col", { "col-4": true, "text-center": true, class: "lineText" }, order.exchangeId),
                                    h("ion-col", { "col-4": true, "text-right": true, class: "lineText" },
                                        h("small", null, "last:"),
                                        numeral(order.last).format('0,0.000000'))))),
                    ]),
                ],
                this.status === 1 && [
                    this.orders.filter((o) => o.status === OrderStatus.filled).map((order) => [
                        h("ion-item", { lines: "full", href: `/orders/${order.orderId}` },
                            h("ion-grid", null,
                                h("ion-row", null,
                                    h("ion-col", { "col-4": true, class: "lineText" }, order.type),
                                    h("ion-col", { "col-4": true, "text-center": true, class: "lineText" }, numeral(order.amount).format('0,0.000000')),
                                    h("ion-col", { "col-4": true, "text-right": true, class: "lineText" },
                                        h("small", null, "open:"),
                                        numeral(order.openPrice).format('0,0.000000'))),
                                h("ion-row", null,
                                    h("ion-col", { "col-4": true, "text-left": true, class: "lineText" },
                                        h("b", null, order.pair)),
                                    h("ion-col", { "col-4": true, "text-center": true, class: "lineText" }, order.exchangeId),
                                    h("ion-col", { "col-4": true, "text-right": true, class: "lineText" },
                                        h("small", null, "last:"),
                                        numeral(order.last).format('0,0.000000'))))),
                    ]),
                ]),
        ];
    }
    static get is() { return "app-orders"; }
    static get properties() { return {
        "exchangeId": {
            "state": true
        },
        "exchanges": {
            "state": true
        },
        "isLoading": {
            "state": true
        },
        "orders": {
            "state": true
        },
        "pairs": {
            "state": true
        },
        "status": {
            "state": true
        },
        "store": {
            "context": "store"
        },
        "ticker": {
            "state": true
        },
        "tickers": {
            "state": true
        },
        "wallets": {
            "state": true
        }
    }; }
    static get style() { return ".lineText {\n    font-size: 0.8rem;\n  }\n  .cicon {\n    position: absolute;\n    top: -1px;\n  }"; }
}

export { AppOrders };
