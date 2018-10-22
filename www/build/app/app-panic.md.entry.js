/*! Built with http://stenciljs.com */
const { h } = window.App;

import { a as CURRENCYSERVICE, c as BALANCESERVICE } from './chunk-811498d8.js';
import { a as numeral } from './chunk-60e5018c.js';
import { d as appSetExchanges, a as appSetBaseCurrency, e as appSetCurrencies, f as appSetTickers, g as appSetTotalBalances, c as appSetWallets, h as appSetBalances, i as appSetOrders } from './chunk-917ac8f0.js';
import { c as deferEvent, d as renderHiddenInput, j as createColorClasses, l as hostContext } from './chunk-cb94efc7.js';
import './chunk-7affb05f.js';

class AppPanic {
    constructor() {
        this.sellType = 'market';
        this.exchanges = [];
        this.isLoading = false;
    }
    componentWillLoad() {
        this.store.mapStateToProps(this, (state) => {
            const { app: { exchanges, baseCurrency, currencies, tickers, wallets, balances, orders, dust }, } = state;
            return {
                exchanges,
                baseCurrency,
                currencies,
                tickers,
                wallets,
                balances,
                orders,
                dust,
            };
        });
        this.store.mapDispatchToProps(this, {
            appSetExchanges,
            appSetBaseCurrency,
            appSetCurrencies,
            appSetTickers,
            appSetTotalBalances,
            appSetWallets,
            appSetBalances,
            appSetOrders,
        });
    }
    appSetSell(type) {
        this.sellType = type;
    }
    render() {
        return [
            h("ion-header", null,
                h("ion-toolbar", { color: "dark" },
                    h("ion-buttons", { slot: "start" },
                        h("ion-back-button", { defaultHref: "/trade" })),
                    h("ion-title", null, "All to BTC"),
                    h("ion-buttons", { slot: "end" },
                        h("ion-button", { "icon-only": true, disabled: this.isLoading, onClick: () => this.refreshBalances(), padding: true },
                            h("ion-icon", { name: "refresh", class: this.isLoading ? 'spin' : '' }))))),
            h("ion-content", null,
                h("ion-list", null,
                    h("ion-list-header", { color: "light" }, "Sell Type"),
                    h("ion-item", { lines: "full" },
                        h("ion-label", null, "Market Sell"),
                        h("ion-radio", { checked: this.sellType == 'market', value: 'market', onClick: () => this.appSetSell('market') })),
                    h("ion-item", { lines: "full" },
                        h("ion-label", null, "Limit Sell"),
                        h("ion-radio", { checked: this.sellType == 'limit', value: 'limit', onClick: () => this.appSetSell('limit') })),
                    h("ion-button", { expand: "full", color: "danger" }, "Convert selected to BTC"),
                    h("ion-list-header", { color: "light" },
                        "Balance overview",
                        h("ion-badge", { color: "light", "margin-right": true },
                            h("app-baseprice", { btcPrice: CURRENCYSERVICE.convertToBase(this.balances.exchanges, this.baseCurrency), baseCurrency: this.baseCurrency }))),
                    h("ion-item", { lines: "full" },
                        h("ion-grid", null,
                            h("ion-row", null,
                                h("ion-col", { "col-6": true, class: "lineText" }, "Current Value"),
                                h("ion-col", { "col-6": true, "text-right": true, class: "lineText" }, numeral(CURRENCYSERVICE.convertToBase(this.balances.exchanges, this.baseCurrency)).format('0,0.00000000'))),
                            h("ion-row", null,
                                h("ion-col", { "col-6": true, class: "lineText" }, "Sell Value"),
                                h("ion-col", { "col-6": true, "text-right": true, class: "lineText" }, "0")),
                            h("ion-row", null,
                                h("ion-col", { "col-6": true, class: "lineText" }, "Change"),
                                h("ion-col", { "col-6": true, "text-right": true, class: "lineText" }, numeral(0).format('0,0.00'))))),
                    this.exchanges.filter((e) => e.key && e.secret).map((exchange) => [
                        h("ion-list-header", { color: "light" },
                            exchange.id,
                            h("ion-badge", { color: "light", "margin-right": true },
                                h("app-baseprice", { btcPrice: CURRENCYSERVICE.getBaseTotal(exchange.balances, this.baseCurrency), baseCurrency: this.baseCurrency }))),
                        exchange.balances.map((b) => (h("ion-item", { lines: "full" },
                            h("ion-grid", null,
                                h("ion-row", null,
                                    h("ion-col", { "col-6": true, class: "lineText" },
                                        h("app-cryptoicon", { class: "cicon", symbol: b.currency }),
                                        h("b", { style: { position: 'absolute', top: '10px', left: '50px' } }, b.currency)),
                                    h("ion-col", { "col-6": true, "text-right": true, class: "lineText" },
                                        h("ion-toggle", { checked: true }))),
                                h("ion-row", null,
                                    h("ion-col", { "col-6": true, class: "lineText" }, "Status"),
                                    h("ion-col", { "col-6": true, "text-right": true, class: "lineText" }, "open")),
                                h("ion-row", null,
                                    h("ion-col", { "col-6": true, class: "lineText" }, "Current Price"),
                                    h("ion-col", { "col-6": true, "text-right": true, class: "lineText" }, numeral(b.btcPrice).format('0,0.00000000'))),
                                h("ion-row", null,
                                    h("ion-col", { "col-6": true, class: "lineText" }, "Sell Price"),
                                    h("ion-col", { "col-6": true, "text-right": true, class: "lineText" }, numeral(b.btcPrice).format('0,0.00000000'))),
                                h("ion-row", null,
                                    h("ion-col", { "col-6": true, class: "lineText" }, "Current Value"),
                                    h("ion-col", { "col-6": true, "text-right": true, class: "lineText" }, numeral(b.btcAmount).format('0,0.00000000'))),
                                h("ion-row", null,
                                    h("ion-col", { "col-6": true, class: "lineText" }, "Sell Value"),
                                    h("ion-col", { "col-6": true, "text-right": true, class: "lineText" }, numeral(b.btcAmount).format('0,0.00000000'))),
                                h("ion-row", null,
                                    h("ion-col", { "col-6": true, class: "lineText" }, "Change"),
                                    h("ion-col", { "col-6": true, "text-right": true, class: "lineText" }, numeral(b.btcAmount).format('0,0.00'))),
                                h("ion-row", null,
                                    h("ion-col", { "col-6": true, class: "lineText", "padding-bottom": true },
                                        h("ion-button", { size: "small", color: "danger", expand: "block" }, "Cancel"))))))),
                    ]))),
        ];
    }
    addTotalBalance(totalBtcBalance) {
        BALANCESERVICE.getTotalBalancesFromStorage().then((totalBalances) => {
            if (totalBtcBalance && totalBtcBalance > 0) {
                let now = Math.round(new Date().getTime());
                BALANCESERVICE.setTotalBalances([...totalBalances, [now, totalBtcBalance]]);
                this.appSetTotalBalances([...totalBalances, [now, totalBtcBalance]]);
            }
        });
    }
    refreshBalances() {
        this.isLoading = true;
        BALANCESERVICE.refreshBalances(this.wallets, this.exchanges, this.orders, this.dust).then((response) => {
            if (response) {
                this.appSetCurrencies(response.conversionrates);
                this.appSetTickers(response.tickers);
                this.appSetWallets(response.wallets);
                this.appSetExchanges(response.exchanges);
                this.addTotalBalance(response.exchangeTotal + response.walletTotal);
                this.appSetBalances({
                    overview: response.exchangeTotal + response.walletTotal,
                    exchanges: response.exchangeTotal,
                    wallets: response.walletTotal,
                });
                this.appSetOrders(response.orders);
            }
            this.isLoading = false;
        });
    }
    static get is() { return "app-panic"; }
    static get properties() { return {
        "balances": {
            "state": true
        },
        "baseCurrency": {
            "state": true
        },
        "dust": {
            "state": true
        },
        "exchanges": {
            "state": true
        },
        "isLoading": {
            "state": true
        },
        "orders": {
            "state": true
        },
        "sellType": {
            "state": true
        },
        "store": {
            "context": "store"
        },
        "tickers": {
            "state": true
        },
        "wallets": {
            "state": true
        }
    }; }
    static get style() { return ""; }
}

function hapticSelection() {
    const engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
}

class Toggle {
    constructor() {
        this.inputId = `ion-tg-${toggleIds++}`;
        this.pivotX = 0;
        this.activated = false;
        this.keyFocus = false;
        this.name = this.inputId;
        this.checked = false;
        this.disabled = false;
        this.value = "on";
        this.onChange = () => {
            this.checked = !this.checked;
        };
        this.onKeyUp = () => {
            this.keyFocus = true;
        };
        this.onFocus = () => {
            this.ionFocus.emit();
        };
        this.onBlur = () => {
            this.keyFocus = false;
            this.ionBlur.emit();
        };
    }
    checkedChanged(isChecked) {
        this.ionChange.emit({
            checked: isChecked,
            value: this.value
        });
    }
    disabledChanged() {
        this.ionStyle.emit({
            "interactive-disabled": this.disabled,
        });
        if (this.gesture) {
            this.gesture.setDisabled(this.disabled);
        }
    }
    componentWillLoad() {
        this.ionStyle = deferEvent(this.ionStyle);
    }
    async componentDidLoad() {
        const parentItem = this.nativeInput.closest("ion-item");
        if (parentItem) {
            const itemLabel = parentItem.querySelector("ion-label");
            if (itemLabel) {
                itemLabel.id = this.inputId + "-lbl";
                this.nativeInput.setAttribute("aria-labelledby", itemLabel.id);
            }
        }
        this.gesture = (await import("./gesture.js")).createGesture({
            el: this.el,
            queue: this.queue,
            gestureName: "toggle",
            gesturePriority: 100,
            threshold: 0,
            onStart: ev => this.onStart(ev),
            onMove: ev => this.onMove(ev),
            onEnd: ev => this.onEnd(ev),
        });
        this.disabledChanged();
    }
    onStart(detail) {
        this.pivotX = detail.currentX;
        this.activated = true;
        detail.event.preventDefault();
        return true;
    }
    onMove(detail) {
        const currentX = detail.currentX;
        if (shouldToggle(this.checked, currentX - this.pivotX, -15)) {
            this.checked = !this.checked;
            this.pivotX = currentX;
            hapticSelection();
        }
    }
    onEnd(detail) {
        const delta = detail.currentX - this.pivotX;
        if (shouldToggle(this.checked, delta, 4)) {
            this.checked = !this.checked;
            hapticSelection();
        }
        this.activated = false;
        this.nativeInput.focus();
    }
    hostData() {
        return {
            class: Object.assign({}, createColorClasses(this.color), { "in-item": hostContext("ion-item", this.el), "toggle-activated": this.activated, "toggle-checked": this.checked, "toggle-disabled": this.disabled, "toggle-key": this.keyFocus, "interactive": true })
        };
    }
    render() {
        renderHiddenInput(this.el, this.name, (this.checked ? this.value : ""), this.disabled);
        return [
            h("div", { class: "toggle-icon" }, h("div", { class: "toggle-inner" })),
            h("input", { type: "checkbox", onChange: this.onChange, onFocus: this.onFocus, onBlur: this.onBlur, onKeyUp: this.onKeyUp, checked: this.checked, id: this.inputId, name: this.name, value: this.value, disabled: this.disabled, ref: r => this.nativeInput = r }),
            h("slot", null)
        ];
    }
    static get is() { return "ion-toggle"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "activated": {
                "state": true
            },
            "checked": {
                "type": Boolean,
                "attr": "checked",
                "mutable": true,
                "watchCallbacks": ["checkedChanged"]
            },
            "color": {
                "type": String,
                "attr": "color"
            },
            "disabled": {
                "type": Boolean,
                "attr": "disabled",
                "watchCallbacks": ["disabledChanged"]
            },
            "el": {
                "elementRef": true
            },
            "keyFocus": {
                "state": true
            },
            "mode": {
                "type": String,
                "attr": "mode"
            },
            "name": {
                "type": String,
                "attr": "name"
            },
            "queue": {
                "context": "queue"
            },
            "value": {
                "type": String,
                "attr": "value"
            }
        };
    }
    static get events() {
        return [{
                "name": "ionChange",
                "method": "ionChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionFocus",
                "method": "ionFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionBlur",
                "method": "ionBlur",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionStyle",
                "method": "ionStyle",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }];
    }
    static get style() { return ":host {\n  /**\n   * \@prop --background: Background of the toggle\n   * \@prop --background-checked: Background of the toggle when checked\n   * \@prop --handle-background: Background of the toggle handle\n   * \@prop --handle-background-checked: Background of the toggle handle when checked\n   */\n  /* stylelint-disable-next-line declaration-no-important */\n  -webkit-box-sizing: content-box !important;\n  box-sizing: content-box !important;\n  display: inline-block;\n  contain: content;\n  cursor: pointer;\n  -ms-touch-action: none;\n  touch-action: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n:host(.toggle-key) input {\n  border: 2px solid #5e9ed6; }\n\n:host(:focus) {\n  outline: none; }\n\n:host(.toggle-disabled) {\n  pointer-events: none; }\n\ninput {\n  left: 0;\n  top: 0;\n  margin: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  outline: none;\n  pointer-events: none; }\n\n:host {\n  --background: rgba(var(--ion-item-border-color-rgb, 0, 0, 0), 0.13);\n  --background-checked: rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.5);\n  --handle-background: var(--ion-background-color, #fff);\n  --handle-background-checked: var(--ion-color-primary, #3880ff);\n  padding: 12px;\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box;\n  position: relative;\n  width: 36px;\n  height: 14px;\n  contain: strict; }\n\n:host(.ion-color.toggle-checked) .toggle-icon {\n  background: rgba(var(--ion-color-base-rgb), 0.5); }\n\n:host(.ion-color.toggle-checked) .toggle-inner {\n  background: var(--ion-color-base); }\n\n.toggle-icon {\n  border-radius: 14px;\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  -webkit-transition: background-color 160ms;\n  transition: background-color 160ms;\n  background: var(--background);\n  pointer-events: none; }\n\n.toggle-inner {\n  left: 0;\n  top: -3px;\n  border-radius: 50%;\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  -webkit-transition-duration: 160ms;\n  transition-duration: 160ms;\n  -webkit-transition-property: background-color, -webkit-transform;\n  transition-property: background-color, -webkit-transform;\n  transition-property: transform, background-color;\n  transition-property: transform, background-color, -webkit-transform;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  background: var(--handle-background);\n  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  will-change: transform, background-color;\n  contain: strict; }\n\n:host(.toggle-checked) .toggle-icon {\n  background: var(--background-checked); }\n\n:host(.toggle-checked) .toggle-inner {\n  -webkit-transform: translate3d(16px,  0,  0);\n  transform: translate3d(16px,  0,  0);\n  background: var(--handle-background-checked); }\n\n:host(.toggle-disabled) {\n  opacity: 0.3; }\n\n:host(.in-item[slot]) {\n  margin: 0;\n  padding: 12px 8px 12px 16px;\n  cursor: pointer; }\n\n:host(.in-item[slot=\"start\"]) {\n  padding: 12px 18px 12px 2px; }"; }
    static get styleMode() { return "md"; }
}
function shouldToggle(checked, deltaX, margin) {
    const isRTL = document.dir === "rtl";
    if (checked) {
        return (!isRTL && (margin > deltaX)) ||
            (isRTL && (-margin < deltaX));
    }
    else {
        return (!isRTL && (-margin < deltaX)) ||
            (isRTL && (margin > deltaX));
    }
}
let toggleIds = 0;

export { AppPanic, Toggle as IonToggle };
