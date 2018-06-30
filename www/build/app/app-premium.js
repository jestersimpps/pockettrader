/*! Built with http://stenciljs.com */
const { h } = window.App;

import { h as appSetToken } from './chunk-65ccb753.js';

class AppPremium {
    componentWillLoad() {
        this.store.mapStateToProps(this, (state) => {
            const { app: { token }, } = state;
            return {
                token,
            };
        });
        this.store.mapDispatchToProps(this, {
            appSetToken,
        });
    }
    render() {
        return [
            h("ion-header", null,
                h("ion-toolbar", { color: "dark" },
                    h("ion-buttons", { slot: "start" },
                        h("ion-back-button", { defaultHref: "/settings" })),
                    h("ion-title", null, "Premium version"))),
            h("ion-content", null, this.token && (h("ion-nav-pop", null,
                h("ion-list", null,
                    h("ion-item", { lines: "full" },
                        h("ion-label", null, "App Version"),
                        h("ion-input", { name: "status", type: "text", value: `Free`, disabled: true })),
                    h("ion-item", { lines: "full" },
                        h("ion-label", null, "Token"),
                        h("ion-input", { name: "key", type: "text", value: `${this.token}`, disabled: true })),
                    h("ion-button", { expand: "block" }, "Try Premium for one week"),
                    h("ion-button", { color: "success", expand: "block" }, "Purchase Premium"))))),
        ];
    }
    static get is() { return "app-premium"; }
    static get properties() { return {
        "store": {
            "context": "store"
        },
        "token": {
            "state": true
        }
    }; }
    static get style() { return ""; }
}

export { AppPremium };
