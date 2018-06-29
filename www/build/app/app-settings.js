/*! Built with http://stenciljs.com */
const { h } = window.App;

class AppSettings {
    render() {
        return [
            h("ion-header", null,
                h("ion-toolbar", { color: "dark" },
                    h("ion-buttons", { slot: "start" },
                        h("ion-back-button", { defaultHref: "/" })),
                    h("ion-title", null, "Settings"))),
            h("ion-content", null,
                h("ion-list", null,
                    h("ion-item", { lines: "full", href: `/settings/keys` },
                        h("ion-icon", { name: "key", "item-start": true, "margin-right": true }),
                        h("ion-label", null, "Exchange Keys")),
                    h("ion-item", { lines: "full", href: `/settings/holdings` },
                        h("ion-icon", { name: "wallet", "item-start": true, "margin-right": true }),
                        h("ion-label", null, "Wallet Holdings")),
                    h("ion-item", { lines: "full", href: `/settings/basecurrency` },
                        h("ion-icon", { name: "logo-usd", "item-start": true, "margin-right": true }),
                        h("ion-label", null, "Base Currency")),
                    h("ion-item", { lines: "full", href: `/settings/premium` },
                        h("ion-icon", { name: "swap", "item-start": true, "margin-right": true }),
                        h("ion-label", null, "Trading")))),
        ];
    }
    static get is() { return "app-settings"; }
    static get style() { return ""; }
}

export { AppSettings };
