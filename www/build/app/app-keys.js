/*! Built with http://stenciljs.com */
const { h } = window.App;

class AppKeys {
    constructor() {
        this.exchanges = [];
    }
    componentWillLoad() {
        this.store.mapStateToProps(this, (state) => {
            const { app: { exchanges }, } = state;
            return {
                exchanges,
            };
        });
    }
    render() {
        return [
            h("ion-header", null,
                h("ion-toolbar", { color: "dark" },
                    h("ion-buttons", { slot: "start" },
                        h("ion-back-button", { defaultHref: "/settings" })),
                    h("ion-title", null, "Exchanges"))),
            h("ion-content", null,
                h("ion-list", null, this.exchanges.map((exchange) => (h("ion-item", { lines: "full", href: `/settings/keys/${exchange.id}` },
                    exchange.key && exchange.secret ? (h("ion-icon", { name: "checkmark", color: "success", "item-start": true, "margin-right": true, style: { 'font-size': '2rem' } })) : (h("ion-icon", { name: "close", color: "danger", "item-start": true, "margin-right": true, style: { 'font-size': '2rem' } })),
                    h("ion-label", null, exchange.id)))))),
        ];
    }
    static get is() { return "app-keys"; }
    static get properties() { return {
        "exchanges": {
            "state": true
        },
        "store": {
            "context": "store"
        }
    }; }
    static get style() { return ""; }
}

export { AppKeys };
