/*! Built with http://stenciljs.com */
const { h } = window.App;

import { b as appSetWallets } from './chunk-65ccb753.js';
import { b as TICKERSERVICE } from './chunk-3c4622a5.js';
import './chunk-8b6e0876.js';
import './chunk-a7525511.js';

class AppEditwallet {
    constructor() {
        this.wallets = [];
    }
    componentWillLoad() {
        this.store.mapStateToProps(this, (state) => {
            const { app: { wallets }, } = state;
            return {
                wallets,
            };
        });
        this.store.mapDispatchToProps(this, {
            appSetWallets,
        });
        let wallet = this.wallets.find((w) => w.id === this.walletId);
        if (wallet) {
            this.wallet = wallet;
        }
        else {
            TICKERSERVICE.getCoinmarketcapTicker(this.walletId).then((response) => {
                this.wallet = {
                    id: response.data.data.id,
                    name: response.data.data.name,
                    currency: response.data.data.symbol,
                    balance: 0,
                    btcPrice: response.data.data.quotes.BTC.price,
                    btcAmount: 0,
                    change: +response.data.data.quotes.BTC.percent_change_24h,
                };
            });
        }
    }
    changeValue(ev) {
        let wallet = this.wallets.find((w) => w.id === this.walletId);
        if (wallet) {
            wallet.balance = +ev.target.value > 0 ? +ev.target.value : null;
            this.appSetWallets(this.wallets);
        }
        else {
            this.wallet.balance = +ev.target.value > 0 ? +ev.target.value : null;
            this.appSetWallets([...this.wallets, this.wallet]);
        }
    }
    render() {
        return (this.wallet && [
            h("ion-header", null,
                h("ion-toolbar", { color: "dark" },
                    h("ion-buttons", { slot: "start" },
                        h("ion-back-button", { defaultHref: "/settings" })),
                    h("ion-title", null,
                        "Set ",
                        this.wallet.currency,
                        " Holdings"))),
            h("ion-content", null,
                h("ion-list", null,
                    h("ion-item", { lines: "full" },
                        h("ion-label", null, "Amount"),
                        h("ion-input", { name: "key", type: "number", value: `${this.wallet.balance}`, onInput: (ev) => this.changeValue(ev) })))),
            h("ion-footer", null,
                h("ion-toolbar", null,
                    h("ion-nav-pop", null,
                        h("ion-button", { "icon-left": true, color: "light", class: "full" }, "Set")))),
        ]);
    }
    static get is() { return "app-editwallet"; }
    static get properties() { return {
        "store": {
            "context": "store"
        },
        "wallet": {
            "state": true
        },
        "walletId": {
            "type": Number,
            "attr": "wallet-id"
        },
        "wallets": {
            "state": true
        }
    }; }
    static get style() { return ".full {\n  width: 100%;\n}"; }
}

export { AppEditwallet };
