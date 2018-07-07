/*! Built with http://stenciljs.com */
const { h } = window.App;

import { a as CURRENCYSERVICE, c as BALANCESERVICE } from './chunk-6b468cd6.js';
import { a as numeral } from './chunk-374e99fd.js';
import { c as appSetExchanges, a as appSetBaseCurrency, d as appSetCurrencies, e as appSetTickers, f as appSetTotalBalances, b as appSetWallets, g as appSetBalances } from './chunk-43b312d9.js';
import { d as deferEvent } from './chunk-63df273d.js';
import './chunk-8b6e0876.js';
import './chunk-a7525511.js';

class AppPanic {
    constructor() {
        this.sellType = 'market';
        this.exchanges = [];
        this.isLoading = false;
    }
    componentWillLoad() {
        this.store.mapStateToProps(this, (state) => {
            const { app: { exchanges, baseCurrency, currencies, tickers, wallets, balances }, } = state;
            return {
                exchanges,
                baseCurrency,
                currencies,
                tickers,
                wallets,
                balances,
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
        BALANCESERVICE.refreshBalances(this.wallets, this.exchanges).then((response) => {
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
        "exchanges": {
            "state": true
        },
        "isLoading": {
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

/**
 * Check to see if the Haptic Plugin is available
 * @return Returns true or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
function hapticSelection() {
    const engine = window.TapticEngine;
    engine && engine.selection();
}

class Toggle {
    constructor() {
        this.inputId = `ion-tg-${toggleIds++}`;
        this.pivotX = 0;
        this.activated = false;
        this.keyFocus = false;
        /**
         * The name of the control, which is submitted with the form data.
         */
        this.name = this.inputId;
        /**
         * If true, the toggle is selected. Defaults to `false`.
         */
        this.checked = false;
        /*
         * If true, the user cannot interact with the toggle. Default false.
         */
        this.disabled = false;
        /**
         * the value of the toggle.
         */
        this.value = 'on';
    }
    checkedChanged(isChecked) {
        this.ionChange.emit({
            checked: isChecked,
            value: this.value
        });
        this.emitStyle();
    }
    emitStyle() {
        this.ionStyle.emit({
            'toggle-disabled': this.disabled,
            'toggle-checked': this.checked,
            'toggle-activated': this.activated
        });
    }
    componentWillLoad() {
        this.ionStyle = deferEvent(this.ionStyle);
        this.emitStyle();
    }
    componentDidLoad() {
        const parentItem = this.nativeInput.closest('ion-item');
        if (parentItem) {
            const itemLabel = parentItem.querySelector('ion-label');
            if (itemLabel) {
                itemLabel.id = this.inputId + '-lbl';
                this.nativeInput.setAttribute('aria-labelledby', itemLabel.id);
            }
        }
    }
    onDragStart(detail) {
        this.pivotX = detail.currentX;
        this.activated = true;
        // touch-action does not work in iOS
        detail.event.preventDefault();
        return true;
    }
    onDragMove(detail) {
        const currentX = detail.currentX;
        if (shouldToggle(this.checked, currentX - this.pivotX, -15)) {
            this.checked = !this.checked;
            this.pivotX = currentX;
            hapticSelection();
        }
    }
    onDragEnd(detail) {
        const delta = detail.currentX - this.pivotX;
        if (shouldToggle(this.checked, delta, 4)) {
            this.checked = !this.checked;
            hapticSelection();
        }
        this.activated = false;
        this.nativeInput.focus();
    }
    onChange() {
        this.checked = !this.checked;
    }
    onKeyUp() {
        this.keyFocus = true;
    }
    onFocus() {
        this.ionFocus.emit();
    }
    onBlur() {
        this.keyFocus = false;
        this.ionBlur.emit();
    }
    hostData() {
        return {
            class: {
                'toggle-activated': this.activated,
                'toggle-checked': this.checked,
                'toggle-disabled': this.disabled,
                'toggle-key': this.keyFocus
            }
        };
    }
    render() {
        return [
            h("ion-gesture", { onStart: this.onDragStart.bind(this), onMove: this.onDragMove.bind(this), onEnd: this.onDragEnd.bind(this), gestureName: "toggle", passive: false, gesturePriority: 30, direction: "x", threshold: 0, attachTo: "parent", disabled: this.disabled, tabIndex: -1 },
                h("div", { class: "toggle-icon" },
                    h("div", { class: "toggle-inner" })),
                h("div", { class: "toggle-cover" })),
            h("input", { type: "checkbox", onChange: this.onChange.bind(this), onFocus: this.onFocus.bind(this), onBlur: this.onBlur.bind(this), onKeyUp: this.onKeyUp.bind(this), checked: this.checked, id: this.inputId, name: this.name, value: this.value, disabled: this.disabled, ref: r => this.nativeInput = r })
        ];
    }
    static get is() { return "ion-toggle"; }
    static get host() { return {
        "theme": "toggle"
    }; }
    static get properties() { return {
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
            "watchCallbacks": ["emitStyle"]
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
        "value": {
            "type": String,
            "attr": "value"
        }
    }; }
    static get events() { return [{
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
        }]; }
    static get style() { return "ion-toggle {\n  display: inline-block;\n  contain: content;\n  -ms-touch-action: none;\n  touch-action: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\nion-toggle ion-gesture {\n  display: block;\n  width: 100%;\n  height: 100%;\n  visibility: inherit; }\n\n.toggle-cover {\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  outline: none;\n  font-family: inherit;\n  font-style: inherit;\n  font-variant: inherit;\n  line-height: 1;\n  text-transform: none;\n  background: transparent;\n  cursor: pointer; }\n\nion-toggle input {\n  left: 0;\n  top: 0;\n  margin: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  pointer-events: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n\nion-toggle :focus {\n  outline: none; }\n\n.toggle-key input {\n  border: 2px solid #5e9ed6; }\n\n.toggle-md {\n  padding: 12px;\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box;\n  position: relative;\n  width: 36px;\n  height: 14px;\n  contain: strict; }\n\n.toggle-md .toggle-icon {\n  border-radius: 14px;\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(var(--ion-item-md-border-color-rgb, var(--ion-item-border-color-rgb, 0, 0, 0)), 0.13);\n  -webkit-transition: background-color 300ms;\n  transition: background-color 300ms;\n  pointer-events: none; }\n\n.toggle-md .toggle-inner {\n  left: 0;\n  top: -3px;\n  border-radius: 50%;\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  background-color: var(--ion-background-md-color, var(--ion-background-color, #fff));\n  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  -webkit-transition-duration: 300ms;\n  transition-duration: 300ms;\n  -webkit-transition-property: background-color, -webkit-transform;\n  transition-property: background-color, -webkit-transform;\n  transition-property: transform, background-color;\n  transition-property: transform, background-color, -webkit-transform;\n  will-change: transform, background-color;\n  contain: strict; }\n\n.toggle-md.toggle-checked .toggle-icon {\n  background-color: rgba(var(--ion-color-md-primary-rgb, var(--ion-color-primary-rgb, 56, 128, 255)), 0.5); }\n\n.toggle-md.toggle-checked .toggle-inner {\n  -webkit-transform: translate3d(16px,  0,  0);\n  transform: translate3d(16px,  0,  0);\n  background-color: var(--ion-color-md-primary, var(--ion-color-primary, #3880ff)); }\n\n.toggle-md.toggle-disabled,\n.item-md.item-toggle-disabled ion-label {\n  opacity: 0.3;\n  pointer-events: none; }\n\n.toggle-md.toggle-disabled ion-radio {\n  opacity: 0.3; }\n\n.item-md .toggle-md[slot] {\n  margin: 0;\n  padding: 12px 8px 12px 16px;\n  cursor: pointer; }\n\n.item-md .toggle-md[slot=\"start\"] {\n  padding: 12px 18px 12px 2px; }\n\n.item-md.item-toggle ion-label {\n  margin-left: 0; }\n\n.toggle-md-primary.toggle-checked .toggle-icon {\n  background-color: var(--ion-color-md-primary-tint, var(--ion-color-primary-tint, #4c8dff)); }\n\n.toggle-md-primary.toggle-checked .toggle-inner {\n  background-color: var(--ion-color-md-primary, var(--ion-color-primary, #3880ff)); }\n\n.toggle-md-secondary.toggle-checked .toggle-icon {\n  background-color: var(--ion-color-md-secondary-tint, var(--ion-color-secondary-tint, #24d6ea)); }\n\n.toggle-md-secondary.toggle-checked .toggle-inner {\n  background-color: var(--ion-color-md-secondary, var(--ion-color-secondary, #0cd1e8)); }\n\n.toggle-md-tertiary.toggle-checked .toggle-icon {\n  background-color: var(--ion-color-md-tertiary-tint, var(--ion-color-tertiary-tint, #7e57ff)); }\n\n.toggle-md-tertiary.toggle-checked .toggle-inner {\n  background-color: var(--ion-color-md-tertiary, var(--ion-color-tertiary, #7044ff)); }\n\n.toggle-md-success.toggle-checked .toggle-icon {\n  background-color: var(--ion-color-md-success-tint, var(--ion-color-success-tint, #28e070)); }\n\n.toggle-md-success.toggle-checked .toggle-inner {\n  background-color: var(--ion-color-md-success, var(--ion-color-success, #10dc60)); }\n\n.toggle-md-warning.toggle-checked .toggle-icon {\n  background-color: var(--ion-color-md-warning-tint, var(--ion-color-warning-tint, #ffd31a)); }\n\n.toggle-md-warning.toggle-checked .toggle-inner {\n  background-color: var(--ion-color-md-warning, var(--ion-color-warning, #ffce00)); }\n\n.toggle-md-danger.toggle-checked .toggle-icon {\n  background-color: var(--ion-color-md-danger-tint, var(--ion-color-danger-tint, #f25454)); }\n\n.toggle-md-danger.toggle-checked .toggle-inner {\n  background-color: var(--ion-color-md-danger, var(--ion-color-danger, #f04141)); }\n\n.toggle-md-light.toggle-checked .toggle-icon {\n  background-color: var(--ion-color-md-light-tint, var(--ion-color-light-tint, #f5f6f9)); }\n\n.toggle-md-light.toggle-checked .toggle-inner {\n  background-color: var(--ion-color-md-light, var(--ion-color-light, #f4f5f8)); }\n\n.toggle-md-medium.toggle-checked .toggle-icon {\n  background-color: var(--ion-color-md-medium-tint, var(--ion-color-medium-tint, #a2a4ab)); }\n\n.toggle-md-medium.toggle-checked .toggle-inner {\n  background-color: var(--ion-color-md-medium, var(--ion-color-medium, #989aa2)); }\n\n.toggle-md-dark.toggle-checked .toggle-icon {\n  background-color: var(--ion-color-md-dark-tint, var(--ion-color-dark-tint, #383a3e)); }\n\n.toggle-md-dark.toggle-checked .toggle-inner {\n  background-color: var(--ion-color-md-dark, var(--ion-color-dark, #222428)); }"; }
    static get styleMode() { return "md"; }
}
function shouldToggle(checked, deltaX, margin) {
    const isRTL = document.dir === 'rtl';
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
