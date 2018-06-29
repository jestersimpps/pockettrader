/*! Built with http://stenciljs.com */
const { h } = window.App;

import { a as numeral } from './chunk-374e99fd.js';
import './chunk-a7525511.js';

class AppBasePrice {
    render() {
        return [`${this.baseCurrency.symbol} ${numeral(this.btcPrice).format(this.baseCurrency.id === `BTC` ? '0,0.0000' : '0,0.00')}`];
    }
    static get is() { return "app-baseprice"; }
    static get properties() { return {
        "baseCurrency": {
            "type": "Any",
            "attr": "base-currency"
        },
        "btcPrice": {
            "type": Number,
            "attr": "btc-price"
        }
    }; }
    static get style() { return ""; }
}

export { AppBasePrice as AppBaseprice };
