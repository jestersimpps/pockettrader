/*! Built with http://stenciljs.com */
const { h } = window.App;

import { c as BALANCESERVICE, a as CURRENCYSERVICE } from './chunk-9f11c581.js';
import { c as appSetExchanges, a as appSetBaseCurrency, d as appSetCurrencies, e as appSetTickers, f as appSetTotalBalances, b as appSetWallets, g as appSetBalances } from './chunk-43b312d9.js';
import './chunk-8b6e0876.js';
import './chunk-a7525511.js';

class AppWallets {
    constructor() {
        this.exchanges = [];
        this.isLoading = false;
        this.segment = '1';
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
                            h("app-baseprice", { btcPrice: CURRENCYSERVICE.convertToBase(this.balances.wallets, this.baseCurrency), baseCurrency: this.baseCurrency }))),
                    h("ion-buttons", { slot: "end" },
                        h("ion-button", { "icon-only": true, disabled: this.isLoading, onClick: () => this.refreshBalances(), padding: true },
                            h("ion-icon", { name: "refresh", class: this.isLoading ? 'spin' : '' }))))),
            h("ion-content", null,
                h("ion-refresher", { slot: "fixed", onIonRefresh: () => this.refreshBalances() },
                    h("ion-refresher-content", null)),
                h("ion-list", null, this.wallets
                    .filter((w) => w.balance > 0)
                    .map((wallet) => h("app-balanceitem", { exchangeId: null, baseCurrency: this.baseCurrency, cryptodata: wallet })))),
        ];
    }
    static get is() { return "app-wallets"; }
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
        "segment": {
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

export { AppWallets };
