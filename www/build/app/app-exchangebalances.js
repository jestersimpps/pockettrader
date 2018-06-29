/*! Built with http://stenciljs.com */
const { h } = window.App;

import { c as Exchange } from './chunk-8b6e0876.js';
import './chunk-a7525511.js';

class AppExchangeBalances {
    constructor() {
        this.exchanges = [];
        this.exchange = new Exchange();
        this.tickers = [];
    }
    componentWillLoad() {
        this.store.mapStateToProps(this, (state) => {
            const { app: { tickers, exchanges, baseCurrency, conversionRates }, } = state;
            return {
                tickers,
                exchanges,
                baseCurrency,
                conversionRates,
            };
        });
    }
    componentDidLoad() {
        this.exchange = this.exchanges.find((e) => e.id === this.exchangeId);
    }
    render() {
        return [
            h("ion-list", null, this.exchange &&
                this.exchange.balances &&
                this.tickers.length &&
                this.exchange.balances
                    .filter((b) => +b.btcPrice > 0.00001)
                    .map((balance) => h("app-balanceitem", { exchangeId: this.exchangeId, baseCurrency: this.baseCurrency, cryptodata: balance }))),
        ];
    }
    static get is() { return "app-exchangebalances"; }
    static get properties() { return {
        "baseCurrency": {
            "state": true
        },
        "exchange": {
            "state": true
        },
        "exchangeId": {
            "type": String,
            "attr": "exchange-id"
        },
        "exchanges": {
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

export { AppExchangeBalances as AppExchangebalances };
