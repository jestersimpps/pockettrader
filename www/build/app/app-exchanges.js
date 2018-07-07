/*! Built with http://stenciljs.com */
const { h } = window.App;

import { a as CURRENCYSERVICE, c as BALANCESERVICE } from './chunk-6b468cd6.js';
import { c as appSetExchanges, a as appSetBaseCurrency, d as appSetCurrencies, e as appSetTickers, f as appSetTotalBalances, b as appSetWallets, g as appSetBalances } from './chunk-43b312d9.js';
import './chunk-8b6e0876.js';
import './chunk-a7525511.js';

class AppExchanges {
    constructor() {
        this.exchanges = [];
        this.isLoading = false;
    }
    componentWillLoad() {
        this.store.mapStateToProps(this, (state) => {
            const { app: { exchanges, baseCurrency, currencies, tickers, wallets, balances }, } = state;
            return {
                exchanges,
                baseCurrency,
                currencies,
                tickers,
                wallets,
                balances,
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
        BALANCESERVICE.refreshBalances(this.wallets, this.exchanges).then((response) => {
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
                    h("ion-list-header", { color: "light" },
                        exchange.id,
                        h("ion-badge", { color: "light", "margin-right": true },
                            h("app-baseprice", { btcPrice: CURRENCYSERVICE.getBaseTotal(exchange.balances, this.baseCurrency), baseCurrency: this.baseCurrency }))),
                    exchange.balances.map((b) => h("app-balanceitem", { exchangeId: exchange.id, baseCurrency: this.baseCurrency, cryptodata: b })),
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
        "exchanges": {
            "state": true
        },
        "isLoading": {
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
