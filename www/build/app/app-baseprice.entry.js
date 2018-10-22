/*! Built with http://stenciljs.com */
const { h } = window.App;

import { a as numeral } from './chunk-60e5018c.js';
import './chunk-917ac8f0.js';

class AppBasePrice {
    render() {
        return [`${this.baseCurrency.symbol} ${numeral(this.btcPrice).format(this.btcPrice < 1 ? '0,0.000000' : '0,0.00')}`];
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
