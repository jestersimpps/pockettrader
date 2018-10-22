/*! Built with http://stenciljs.com */
const { h } = window.App;

import { g as WALLETSERVICE } from './chunk-811498d8.js';
import { b as debounceEvent, j as createColorClasses } from './chunk-cb94efc7.js';
import './chunk-7affb05f.js';
import './chunk-917ac8f0.js';

class AppHoldings {
    constructor() {
        this.cryptos = [];
        this.wallets = [];
        this.visibleCryptos = [];
        this.filteredWallets = [];
    }
    componentWillLoad() {
        this.store.mapStateToProps(this, (state) => {
            const { app: { wallets }, } = state;
            return {
                wallets,
            };
        });
        WALLETSERVICE.getCoinmarketCapListings().then((response) => {
            this.cryptos = response.data.data;
        });
    }
    onIonInput(e) {
        const val = e.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.visibleCryptos = this.cryptos.filter((item) => {
                return item.symbol.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
        }
        else {
            this.visibleCryptos = [];
        }
    }
    render() {
        return (this.cryptos && [
            h("ion-header", null,
                h("ion-toolbar", { color: "dark" },
                    h("ion-buttons", { slot: "start" },
                        h("ion-back-button", { defaultHref: "/settings" })),
                    h("ion-searchbar", { color: "light", onIonChange: (e) => this.onIonInput(e), placeholder: "Enter Symbol to Add Holdings..." }))),
            h("ion-content", null,
                h("ion-list", null, this.visibleCryptos.length
                    ? this.visibleCryptos.slice(0, 20).map((crypto) => (h("ion-item", { lines: "full", href: `/settings/holdings/${crypto.id}` },
                        h("ion-label", null,
                            crypto.symbol,
                            " - ",
                            crypto.name))))
                    : this.wallets.filter((w) => w.balance > 0).map((wallet) => (h("ion-item", { lines: "full", href: `/settings/holdings/${wallet.id}` },
                        h("ion-label", null,
                            wallet.currency,
                            " - ",
                            wallet.name),
                        h("ion-label", { "text-right": true }, wallet.balance)))))),
        ]);
    }
    static get is() { return "app-holdings"; }
    static get properties() { return {
        "filteredWallets": {
            "state": true
        },
        "store": {
            "context": "store"
        },
        "visibleCryptos": {
            "state": true
        },
        "wallets": {
            "state": true
        }
    }; }
    static get style() { return ""; }
}

class Searchbar {
    constructor() {
        this.isCancelVisible = false;
        this.shouldAlignLeft = true;
        this.focused = false;
        this.animated = false;
        this.autocomplete = "off";
        this.autocorrect = "off";
        this.cancelButtonIcon = "md-arrow-back";
        this.cancelButtonText = "Cancel";
        this.debounce = 250;
        this.placeholder = "Search";
        this.showCancelButton = false;
        this.spellcheck = false;
        this.type = "search";
        this.value = "";
        this.onClearInput = (ev) => {
            this.ionClear.emit();
            if (ev) {
                ev.preventDefault();
                ev.stopPropagation();
            }
            setTimeout(() => {
                const value = this.value;
                if (value !== "") {
                    this.value = "";
                    this.ionInput.emit();
                }
            }, 16 * 4);
        };
        this.onCancelSearchbar = (ev) => {
            if (ev) {
                ev.preventDefault();
                ev.stopPropagation();
            }
            this.ionCancel.emit();
            this.onClearInput();
            this.nativeInput.blur();
        };
        this.onInput = (ev) => {
            const input = ev.target;
            if (input) {
                this.value = input.value;
            }
            this.ionInput.emit(ev);
        };
        this.onBlur = () => {
            this.focused = false;
            this.ionBlur.emit();
            this.positionElements();
        };
        this.onFocus = () => {
            this.focused = true;
            this.ionFocus.emit();
            this.positionElements();
        };
    }
    debounceChanged() {
        this.ionChange = debounceEvent(this.ionChange, this.debounce);
    }
    valueChanged() {
        const inputEl = this.nativeInput;
        const value = this.value;
        if (inputEl && inputEl.value !== value) {
            inputEl.value = value;
        }
        this.ionChange.emit({ value });
    }
    componentDidLoad() {
        this.positionElements();
        this.debounceChanged();
    }
    setFocus() {
        this.nativeInput.focus();
    }
    positionElements() {
        const prevAlignLeft = this.shouldAlignLeft;
        const shouldAlignLeft = (!this.animated || (this.value && this.value.toString().trim() !== "") || !!this.focused);
        this.shouldAlignLeft = shouldAlignLeft;
        if (this.mode !== "ios") {
            return;
        }
        if (prevAlignLeft !== shouldAlignLeft) {
            this.positionPlaceholder();
        }
        if (this.animated) {
            this.positionCancelButton();
        }
    }
    positionPlaceholder() {
        const isRTL = this.doc.dir === "rtl";
        const inputEl = this.nativeInput;
        const iconEl = (this.el.shadowRoot || this.el).querySelector(".searchbar-search-icon");
        if (this.shouldAlignLeft) {
            inputEl.removeAttribute("style");
            iconEl.removeAttribute("style");
        }
        else {
            const doc = this.doc;
            const tempSpan = doc.createElement("span");
            tempSpan.innerHTML = this.placeholder;
            doc.body.appendChild(tempSpan);
            const textWidth = tempSpan.offsetWidth;
            tempSpan.remove();
            const inputLeft = "calc(50% - " + (textWidth / 2) + "px)";
            const iconLeft = "calc(50% - " + ((textWidth / 2) + 30) + "px)";
            if (isRTL) {
                inputEl.style.paddingRight = inputLeft;
                iconEl.style.marginRight = iconLeft;
            }
            else {
                inputEl.style.paddingLeft = inputLeft;
                iconEl.style.marginLeft = iconLeft;
            }
        }
    }
    positionCancelButton() {
        const isRTL = this.doc.dir === "rtl";
        const cancelButton = (this.el.shadowRoot || this.el).querySelector(".searchbar-cancel-button");
        const shouldShowCancel = this.focused;
        if (cancelButton && shouldShowCancel !== this.isCancelVisible) {
            const cancelStyle = cancelButton.style;
            this.isCancelVisible = shouldShowCancel;
            if (shouldShowCancel) {
                if (isRTL) {
                    cancelStyle.marginLeft = "0";
                }
                else {
                    cancelStyle.marginRight = "0";
                }
            }
            else {
                const offset = cancelButton.offsetWidth;
                if (offset > 0) {
                    if (isRTL) {
                        cancelStyle.marginLeft = -offset + "px";
                    }
                    else {
                        cancelStyle.marginRight = -offset + "px";
                    }
                }
            }
        }
    }
    hostData() {
        return {
            class: Object.assign({}, createColorClasses(this.color), { "searchbar-animated": this.animated && this.config.getBoolean("animated", true), "searchbar-has-value": (this.value !== ""), "searchbar-show-cancel": this.showCancelButton, "searchbar-left-aligned": this.shouldAlignLeft, "searchbar-has-focus": this.focused })
        };
    }
    render() {
        const clearIcon = this.clearIcon || (this.mode === "ios" ? "ios-close-circle" : "md-close");
        const searchIcon = this.searchIcon || "search";
        const cancelButton = this.showCancelButton && (h("button", { type: "button", tabIndex: this.mode === "ios" && !this.focused ? -1 : undefined, onMouseDown: this.onCancelSearchbar, onTouchStart: this.onCancelSearchbar, class: "searchbar-cancel-button" }, this.mode === "md"
            ? h("ion-icon", { mode: this.mode, icon: this.cancelButtonIcon, lazy: false })
            : this.cancelButtonText));
        return [
            h("div", { class: "searchbar-input-container" }, h("input", { ref: el => this.nativeInput = el, class: "searchbar-input", onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, placeholder: this.placeholder, type: this.type, value: this.value, autoComplete: this.autocomplete, autoCorrect: this.autocorrect, spellCheck: this.spellcheck }), this.mode === "md" && cancelButton, h("ion-icon", { mode: this.mode, icon: searchIcon, lazy: false, class: "searchbar-search-icon" }), h("button", { type: "button", "no-blur": true, class: "searchbar-clear-button", onMouseDown: this.onClearInput, onTouchStart: this.onClearInput }, h("ion-icon", { mode: this.mode, icon: clearIcon, lazy: false, class: "searchbar-clear-icon" }))),
            this.mode === "ios" && cancelButton
        ];
    }
    static get is() { return "ion-searchbar"; }
    static get encapsulation() { return "scoped"; }
    static get properties() {
        return {
            "animated": {
                "type": Boolean,
                "attr": "animated"
            },
            "autocomplete": {
                "type": String,
                "attr": "autocomplete"
            },
            "autocorrect": {
                "type": String,
                "attr": "autocorrect"
            },
            "cancelButtonIcon": {
                "type": String,
                "attr": "cancel-button-icon"
            },
            "cancelButtonText": {
                "type": String,
                "attr": "cancel-button-text"
            },
            "clearIcon": {
                "type": String,
                "attr": "clear-icon"
            },
            "color": {
                "type": String,
                "attr": "color"
            },
            "config": {
                "context": "config"
            },
            "debounce": {
                "type": Number,
                "attr": "debounce",
                "watchCallbacks": ["debounceChanged"]
            },
            "doc": {
                "context": "document"
            },
            "el": {
                "elementRef": true
            },
            "focused": {
                "state": true
            },
            "mode": {
                "type": String,
                "attr": "mode"
            },
            "placeholder": {
                "type": String,
                "attr": "placeholder"
            },
            "searchIcon": {
                "type": String,
                "attr": "search-icon"
            },
            "setFocus": {
                "method": true
            },
            "showCancelButton": {
                "type": Boolean,
                "attr": "show-cancel-button"
            },
            "spellcheck": {
                "type": Boolean,
                "attr": "spellcheck"
            },
            "type": {
                "type": String,
                "attr": "type"
            },
            "value": {
                "type": String,
                "attr": "value",
                "mutable": true,
                "watchCallbacks": ["valueChanged"]
            }
        };
    }
    static get events() {
        return [{
                "name": "ionInput",
                "method": "ionInput",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionChange",
                "method": "ionChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionCancel",
                "method": "ionCancel",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionClear",
                "method": "ionClear",
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
                "name": "ionFocus",
                "method": "ionFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }];
    }
    static get style() { return ".sc-ion-searchbar-ios-h {\n  \n  --placeholder-color: currentColor;\n  --placeholder-font-style: inherit;\n  --placeholder-font-weight: inherit;\n  --placeholder-opacity: .5;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  width: 100%;\n  color: var(--color);\n  font-family: var(--ion-font-family, inherit);\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.ion-color.sc-ion-searchbar-ios-h {\n  color: var(--ion-color-contrast); }\n\n.ion-color.sc-ion-searchbar-ios-h   .searchbar-input.sc-ion-searchbar-ios {\n  background: var(--ion-color-base); }\n\n.ion-color.sc-ion-searchbar-ios-h   .searchbar-clear-button.sc-ion-searchbar-ios, .ion-color.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios, .ion-color.sc-ion-searchbar-ios-h   .searchbar-search-icon.sc-ion-searchbar-ios {\n  color: inherit; }\n\n.searchbar-search-icon.sc-ion-searchbar-ios {\n  color: var(--icon-color);\n  pointer-events: none; }\n\n.searchbar-input-container.sc-ion-searchbar-ios {\n  display: block;\n  position: relative;\n  -ms-flex-negative: 1;\n  flex-shrink: 1;\n  width: 100%; }\n\n.searchbar-input.sc-ion-searchbar-ios {\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-overflow: inherit;\n  text-transform: inherit;\n  text-align: inherit;\n  white-space: inherit;\n  color: inherit;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  display: block;\n  width: 100%;\n  border: 0;\n  outline: none;\n  background: var(--background);\n  font-family: inherit;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n  .searchbar-input.sc-ion-searchbar-ios::-webkit-input-placeholder {\n    color: var(--placeholder-color);\n    font-family: inherit;\n    font-style: var(--placeholder-font-style);\n    font-weight: var(--placeholder-font-weight);\n    opacity: var(--placeholder-opacity); }\n  .searchbar-input.sc-ion-searchbar-ios:-ms-input-placeholder {\n    color: var(--placeholder-color);\n    font-family: inherit;\n    font-style: var(--placeholder-font-style);\n    font-weight: var(--placeholder-font-weight);\n    opacity: var(--placeholder-opacity); }\n  .searchbar-input.sc-ion-searchbar-ios::-ms-input-placeholder {\n    color: var(--placeholder-color);\n    font-family: inherit;\n    font-style: var(--placeholder-font-style);\n    font-weight: var(--placeholder-font-weight);\n    opacity: var(--placeholder-opacity); }\n  .searchbar-input.sc-ion-searchbar-ios::placeholder {\n    color: var(--placeholder-color);\n    font-family: inherit;\n    font-style: var(--placeholder-font-style);\n    font-weight: var(--placeholder-font-weight);\n    opacity: var(--placeholder-opacity); }\n  .searchbar-input.sc-ion-searchbar-ios::-webkit-search-cancel-button {\n    display: none; }\n\n.searchbar-cancel-button.sc-ion-searchbar-ios {\n  color: var(--cancel-button-color); }\n\n.searchbar-clear-button.sc-ion-searchbar-ios {\n  margin: 0;\n  padding: 0;\n  display: none;\n  min-height: 0;\n  outline: none;\n  color: var(--clear-button-color);\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n\n.searchbar-has-value.searchbar-has-focus.sc-ion-searchbar-ios-h   .searchbar-clear-button.sc-ion-searchbar-ios {\n  display: block; }\n\n.sc-ion-searchbar-ios-h {\n  --clear-button-color: var(--ion-text-color-step-400, #666666);\n  --cancel-button-color: var(--ion-color-primary, #3880ff);\n  --color: var(--ion-text-color, #000);\n  --icon-color: var(--ion-text-color-step-400, #666666);\n  --background: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.07);\n  padding: 12px;\n  height: 60px;\n  contain: strict; }\n\n.searchbar-input-container.sc-ion-searchbar-ios {\n  height: 36px;\n  contain: strict; }\n\n.searchbar-search-icon.sc-ion-searchbar-ios {\n  margin-left: calc(50% - 60px);\n  left: 8px;\n  top: 0;\n  position: absolute;\n  width: 16px;\n  height: 100%;\n  contain: strict; }\n\n.searchbar-input.sc-ion-searchbar-ios {\n  padding: 0 28px;\n  border-radius: 10px;\n  height: 100%;\n  font-size: 14px;\n  font-weight: 400;\n  contain: strict; }\n\n.searchbar-clear-button.sc-ion-searchbar-ios {\n  right: 0;\n  top: 0;\n  background-position: center;\n  position: absolute;\n  width: 30px;\n  height: 100%;\n  border: 0;\n  background-color: transparent; }\n\n.searchbar-clear-icon.sc-ion-searchbar-ios {\n  width: 18px;\n  height: 100%; }\n\n.searchbar-cancel-button.sc-ion-searchbar-ios {\n  padding: 0 0 0 8px;\n  display: none;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  border: 0;\n  outline: none;\n  background-color: transparent;\n  font-size: 16px;\n  cursor: pointer;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n\n.searchbar-left-aligned.sc-ion-searchbar-ios-h   .searchbar-search-icon.sc-ion-searchbar-ios {\n  margin-left: 0; }\n\n.searchbar-left-aligned.sc-ion-searchbar-ios-h   .searchbar-input.sc-ion-searchbar-ios {\n  padding-left: 30px; }\n\n.searchbar-show-cancel.searchbar-has-focus.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios, .searchbar-show-cancel.searchbar-animated.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios {\n  display: block; }\n\n.searchbar-animated.sc-ion-searchbar-ios-h   .searchbar-search-icon.sc-ion-searchbar-ios, .searchbar-animated.sc-ion-searchbar-ios-h   .searchbar-input.sc-ion-searchbar-ios {\n  -webkit-transition: all 300ms ease;\n  transition: all 300ms ease; }\n\n.searchbar-animated.searchbar-has-focus.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios {\n  opacity: 1;\n  pointer-events: auto; }\n\n.searchbar-animated.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios {\n  margin-right: -100%;\n  -webkit-transform: translate3d(0,  0,  0);\n  transform: translate3d(0,  0,  0);\n  -webkit-transition: all 300ms ease;\n  transition: all 300ms ease;\n  opacity: 0;\n  pointer-events: none; }\n\n.ion-color.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios {\n  color: var(--ion-color-base); }\n\n\@media (any-hover: hover) {\n  .ion-color.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios:hover {\n    color: var(--ion-color-tint); } }\n\nion-toolbar.ion-color.sc-ion-searchbar-ios-h, ion-toolbar.ion-color   .sc-ion-searchbar-ios-h {\n  color: inherit; }\n\nion-toolbar.ion-color.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios, ion-toolbar.ion-color   .sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios {\n  color: currentColor; }\n\nion-toolbar.ion-color.sc-ion-searchbar-ios-h   .searchbar-search-icon.sc-ion-searchbar-ios, ion-toolbar.ion-color   .sc-ion-searchbar-ios-h   .searchbar-search-icon.sc-ion-searchbar-ios {\n  color: currentColor;\n  opacity: 0.5; }\n\nion-toolbar.ion-color.sc-ion-searchbar-ios-h   .searchbar-input.sc-ion-searchbar-ios, ion-toolbar.ion-color   .sc-ion-searchbar-ios-h   .searchbar-input.sc-ion-searchbar-ios {\n  background: rgba(var(--ion-color-contrast-rgb), 0.07);\n  color: currentColor; }\n\nion-toolbar.ion-color.sc-ion-searchbar-ios-h   .searchbar-clear-button.sc-ion-searchbar-ios, ion-toolbar.ion-color   .sc-ion-searchbar-ios-h   .searchbar-clear-button.sc-ion-searchbar-ios {\n  color: currentColor;\n  opacity: 0.5; }"; }
    static get styleMode() { return "ios"; }
}

export { AppHoldings, Searchbar as IonSearchbar };
