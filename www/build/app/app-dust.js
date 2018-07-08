/*! Built with http://stenciljs.com */
const { h } = window.App;

import { b as appSetDust } from './chunk-9c7d3ec3.js';
import { a as CURRENCYSERVICE } from './chunk-1c4b34f7.js';
import './chunk-ea6d9d39.js';
import './chunk-a7525511.js';

class AppDust {
    componentWillLoad() {
        this.store.mapStateToProps(this, (state) => {
            const { app: { dust, baseCurrency }, } = state;
            return {
                dust,
                baseCurrency,
            };
        });
        this.store.mapDispatchToProps(this, {
            appSetDust,
        });
    }
    changeValue(ev) {
        this.dust = +ev.target.value > 0 ? +ev.target.value : 0.000002;
    }
    setValue() {
        this.appSetDust(this.dust);
    }
    render() {
        return [
            h("ion-header", null,
                h("ion-toolbar", { color: "dark" },
                    h("ion-buttons", { slot: "start" },
                        h("ion-back-button", { defaultHref: "/settings" })),
                    h("ion-title", null, "Dust Limit"))),
            h("ion-content", null,
                h("ion-list", null,
                    h("ion-item", { lines: "none" },
                        h("ion-label", null, "Only show balances larger than (x) BTC:")),
                    h("ion-item", { lines: "none" },
                        h("ion-input", { name: "dust", type: "number", value: `${this.dust}`, onInput: (ev) => this.changeValue(ev) })),
                    h("ion-item", { lines: "none" },
                        h("ion-label", null,
                            "=   ",
                            h("app-baseprice", { btcPrice: CURRENCYSERVICE.convertToBase(this.dust, this.baseCurrency), baseCurrency: this.baseCurrency })))),
                h("ion-nav-pop", null,
                    h("ion-button", { "icon-left": true, color: "success", expand: "full", onClick: () => this.setValue() }, "Set"))),
        ];
    }
    static get is() { return "app-dust"; }
    static get properties() { return {
        "baseCurrency": {
            "state": true
        },
        "dust": {
            "state": true
        },
        "store": {
            "context": "store"
        }
    }; }
    static get style() { return ""; }
}

export { AppDust };
