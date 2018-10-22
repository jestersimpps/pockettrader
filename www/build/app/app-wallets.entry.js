/*! Built with http://stenciljs.com */
const { h } = window.App;

import { c as BALANCESERVICE, a as CURRENCYSERVICE } from './chunk-811498d8.js';
import { d as appSetExchanges, a as appSetBaseCurrency, e as appSetCurrencies, f as appSetTickers, g as appSetTotalBalances, c as appSetWallets, h as appSetBalances, i as appSetOrders } from './chunk-917ac8f0.js';
import './chunk-7affb05f.js';

class AppWallets {
    constructor() {
        this.exchanges = [];
        this.isLoading = false;
        this.segment = '1';
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
    getExchange(balance) {
        let exchangeId = null;
        this.exchanges.forEach((exchange) => {
            let tickerData = this.tickers.find((t) => t.exchangeId === exchange.id);
            if (tickerData) {
                let tickers = tickerData.tickers;
                let symbol = BALANCESERVICE.getBtcStats(balance, tickers).symbol;
                if (symbol) {
                    exchangeId = exchange.id;
                }
            }
        });
        return exchangeId;
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
                h("ion-list", null, this.wallets
                    .filter((w) => w.balance > 0)
                    .sort((a, b) => {
                    return b.btcAmount - a.btcAmount;
                })
                    .map((wallet) => {
                    return h("app-balanceitem", { exchangeId: this.getExchange(wallet), baseCurrency: this.baseCurrency, cryptodata: wallet });
                }))),
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
