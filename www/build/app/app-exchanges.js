/*! Built with http://stenciljs.com */
const { h } = window.App;

import { a as CURRENCYSERVICE, c as BALANCESERVICE } from './chunk-6a09bead.js';
import { d as appSetExchanges, a as appSetBaseCurrency, e as appSetCurrencies, f as appSetTickers, g as appSetTotalBalances, c as appSetWallets, h as appSetBalances, i as appSetOrders } from './chunk-9c7d3ec3.js';
import './chunk-ea6d9d39.js';
import './chunk-a7525511.js';

class AppExchanges {
    constructor() {
        this.exchanges = [];
        this.isLoading = false;
    }
    componentWillLoad() {
        this.store.mapStateToProps(this, (state) => {
            const { app: { exchanges, baseCurrency, currencies, tickers, wallets, balances, orders, dust }, } = state;
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
    addTotalBalance(totalBtcBalance) {
        BALANCESERVICE.getTotalBalancesFromStorage().then((totalBalances) => {
            if (totalBtcBalance && totalBtcBalance > 0) {
                let now = Math.round(new Date().getTime());
                BALANCESERVICE.setTotalBalances([...totalBalances, [now, totalBtcBalance]]);
                this.appSetTotalBalances([...totalBalances, [now, totalBtcBalance]]);
            }
        });
    }
    getBtcStats(balance, tickerData) {
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
    render() {
        return [
            h("ion-header", null,
                h("ion-toolbar", { color: "dark" },
                    h("ion-buttons", { slot: "start" },
                        h("ion-button", { "icon-only": true, href: "/settings", padding: true },
                            h("ion-icon", { name: "options" }))),
                    h("ion-title", { "text-center": true },
                        h("ion-badge", { color: "light" },
                            h("app-baseprice", { btcPrice: CURRENCYSERVICE.convertToBase(this.balances.exchanges, this.baseCurrency), baseCurrency: this.baseCurrency }))),
                    h("ion-buttons", { slot: "end" },
                        h("ion-button", { "icon-only": true, disabled: this.isLoading, onClick: () => this.refreshBalances(), padding: true },
                            h("ion-icon", { name: "refresh", class: this.isLoading ? 'spin' : '' }))))),
            h("ion-content", null,
                h("ion-list", null, this.exchanges.filter((e) => e.key && e.secret).map((exchange) => [
                    h("ion-item-divider", { color: "light" },
                        h("ion-label", null, exchange.id),
                        h("ion-badge", { slot: "end", color: "light" },
                            h("app-baseprice", { btcPrice: CURRENCYSERVICE.getBaseTotal(exchange.balances, this.baseCurrency), baseCurrency: this.baseCurrency }))),
                    exchange.balances
                        .sort((a, b) => {
                        return b.btcAmount - a.btcAmount;
                    })
                        .map((b) => h("app-balanceitem", { exchangeId: exchange.id, baseCurrency: this.baseCurrency, cryptodata: b })),
                ]))),
        ];
    }
    static get is() { return "app-exchanges"; }
    static get properties() { return {
        "balances": {
            "state": true
        },
        "baseCurrency": {
            "state": true
        },
        "dust": {
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
        "store": {
            "context": "store"
        },
        "tickers": {
            "state": true
        },
        "wallets": {
            "state": true
        }
    }; }
    static get style() { return ""; }
}

export { AppExchanges };
