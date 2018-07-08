/*! Built with http://stenciljs.com */
const { h } = window.App;

import { a as CURRENCYSERVICE } from './chunk-1c4b34f7.js';
import './chunk-ea6d9d39.js';
import './chunk-a7525511.js';

class AppExchangeItem {
    render() {
        return [
            h("ion-item", { lines: "full", href: `/exchanges/${this.exchange.id}` },
                h("ion-label", null, this.exchange.id),
                h("ion-badge", { color: "light", "item-end": true },
                    h("app-baseprice", { btcPrice: CURRENCYSERVICE.getBaseTotal(this.exchange.balances, this.baseCurrency), baseCurrency: this.baseCurrency }))),
        ];
    }
    static get is() { return "app-exchangeitem"; }
    static get properties() { return {
        "baseCurrency": {
            "type": "Any",
            "attr": "base-currency"
        },
        "exchange": {
            "type": "Any",
            "attr": "exchange"
        }
    }; }
    static get style() { return ""; }
}

export { AppExchangeItem as AppExchangeitem };
