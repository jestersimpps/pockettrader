/*! Built with http://stenciljs.com */
const { h } = window.App;

import { c as Exchange } from './chunk-ea6d9d39.js';
import { d as appSetExchanges } from './chunk-9c7d3ec3.js';
import './chunk-a7525511.js';

class AppExchangeKeys {
    constructor() {
        this.exchanges = [];
        this.exchange = new Exchange();
    }
    componentWillLoad() {
        this.store.mapStateToProps(this, (state) => {
            const { app: { exchanges }, } = state;
            return {
                exchanges,
            };
        });
        this.store.mapDispatchToProps(this, {
            appSetExchanges,
        });
        this.exchange = this.exchanges.find((e) => e.id === this.exchangeId);
    }
    changeValue(ev, exchange) {
        let value = ev.target.value;
        switch (ev.target.name) {
            case 'key': {
                exchange.key = value;
                break;
            }
            case 'secret': {
                exchange.secret = value;
                break;
            }
        }
        this.appSetExchanges(this.exchanges);
    }
    deleteKeys(exchange) {
        exchange.key = null;
        exchange.secret = null;
        this.appSetExchanges(this.exchanges);
    }
    render() {
        return [
            h("ion-header", null,
                h("ion-toolbar", { color: "dark" },
                    h("ion-buttons", { slot: "start" },
                        h("ion-back-button", { defaultHref: "/settings" })),
                    h("ion-title", null,
                        "Set ",
                        this.exchangeId,
                        " API keys"))),
            h("ion-content", null,
                h("ion-list", null,
                    h("ion-item", { lines: "none" },
                        h("ion-label", null, "Key")),
                    h("ion-item", { lines: "full" },
                        h("ion-input", { name: "key", type: "text", value: this.exchange.key, onInput: (ev) => this.changeValue(ev, this.exchange) })),
                    h("ion-item", { lines: "none" },
                        h("ion-label", null, "Secret")),
                    h("ion-item", { lines: "none" },
                        h("ion-input", { name: "secret", type: "password", value: this.exchange.secret, onInput: (ev) => this.changeValue(ev, this.exchange) }))),
                h("ion-nav-pop", null,
                    h("ion-button", { "icon-left": true, color: "success", expand: "full" }, "Set"))),
        ];
    }
    static get is() { return "app-exchangekeys"; }
    static get properties() { return {
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
        }
    }; }
    static get style() { return ""; }
}

export { AppExchangeKeys as AppExchangekeys };
