/*! Built with http://stenciljs.com */
const { h } = window.App;

import { a as appSetBaseCurrency } from './chunk-917ac8f0.js';
import { a as CURRENCYSERVICE } from './chunk-811498d8.js';
import './chunk-7affb05f.js';

class AppBaseCurrency {
    componentWillLoad() {
        this.store.mapStateToProps(this, (state) => {
            const { app: { baseCurrency }, } = state;
            return {
                baseCurrency,
            };
        });
        this.store.mapDispatchToProps(this, {
            appSetBaseCurrency,
        });
    }
    render() {
        return [
            h("ion-header", null,
                h("ion-toolbar", { color: "dark" },
                    h("ion-buttons", { slot: "start" },
                        h("ion-back-button", { defaultHref: "/settings" })),
                    h("ion-title", null, "Base Currency"))),
            h("ion-content", null, this.baseCurrency && (h("ion-nav-pop", null,
                h("ion-list", null, CURRENCYSERVICE.currencies.map((currency) => (h("ion-item", { lines: "full" },
                    h("ion-label", null, currency.id),
                    h("ion-radio", { checked: this.baseCurrency.id === currency.id, value: currency.id, onClick: () => this.appSetBaseCurrency(currency) })))))))),
        ];
    }
    static get is() { return "app-basecurrency"; }
    static get properties() { return {
        "baseCurrency": {
            "state": true
        },
        "store": {
            "context": "store"
        }
    }; }
    static get style() { return ".full {\n  width: 100%;\n}"; }
}

export { AppBaseCurrency as AppBasecurrency };
