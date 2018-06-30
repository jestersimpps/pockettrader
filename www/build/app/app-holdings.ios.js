/*! Built with http://stenciljs.com */
const { h } = window.App;

import { d as WALLETSERVICE } from './chunk-3c4622a5.js';
import { a as debounceEvent } from './chunk-63df273d.js';
import { a as createThemedClasses } from './chunk-ea7ac2d5.js';
import './chunk-8b6e0876.js';
import './chunk-a7525511.js';

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
        this.shouldBlur = true;
        this.shouldAlignLeft = true;
        this.activated = false;
        this.focused = false;
        /**
         * If true, enable searchbar animation. Default `false`.
         */
        this.animated = false;
        /**
         * Set the input's autocomplete property. Values: `"on"`, `"off"`. Default `"off"`.
         */
        this.autocomplete = 'off';
        /**
         * Set the input's autocorrect property. Values: `"on"`, `"off"`. Default `"off"`.
         */
        this.autocorrect = 'off';
        /**
         * Set the the cancel button text. Default: `"Cancel"`.
         */
        this.cancelButtonText = 'Cancel';
        /**
         * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke. Default `250`.
         */
        this.debounce = 250;
        /**
         * Set the input's placeholder. Default `"Search"`.
         */
        this.placeholder = 'Search';
        /**
         * If true, show the cancel button. Default `false`.
         */
        this.showCancelButton = false;
        /**
         * If true, enable spellcheck on the input. Default `false`.
         */
        this.spellcheck = false;
        /**
         * Set the type of the input. Values: `"text"`, `"password"`, `"email"`, `"number"`, `"search"`, `"tel"`, `"url"`. Default `"search"`.
         */
        this.type = 'search';
        /**
         * the value of the searchbar.
         */
        this.value = '';
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
    /**
     * Clears the input field and triggers the control change.
     */
    clearInput() {
        this.ionClear.emit();
        // setTimeout() fixes https://github.com/ionic-team/ionic/issues/7527
        // wait for 4 frames
        setTimeout(() => {
            const value = this.value;
            if (value !== undefined && value !== '') {
                this.value = '';
            }
        }, 16 * 4);
        this.shouldBlur = false;
    }
    /**
     * Clears the input field and tells the input to blur since
     * the clearInput function doesn't want the input to blur
     * then calls the custom cancel function if the user passed one in.
     */
    cancelSearchbar() {
        this.ionCancel.emit();
        this.clearInput();
        this.shouldBlur = true;
        this.activated = false;
    }
    /**
     * Update the Searchbar input value when the input changes
     */
    onInput(ev) {
        const input = ev.target;
        if (input) {
            this.value = input.value;
        }
        this.ionInput.emit(ev);
    }
    inputUpdated() {
        // const inputEl = this.el.querySelector('.searchbar-input') as HTMLInputElment;
        // It is important not to re-assign the value if it is the same, because,
        // otherwise, the caret is moved to the end of the input
        // if (inputEl && inputEl.value !== this.value) {
        //   // inputEl.value = this.value;
        //   this.value = inputEl.value;
        // }
        this.positionElements();
    }
    /**
     * Sets the Searchbar to not focused and checks if it should align left
     * based on whether there is a value in the searchbar or not.
     */
    onBlur() {
        const inputEl = this.el.querySelector('.searchbar-input');
        // shouldBlur determines if it should blur
        // if we are clearing the input we still want to stay focused in the input
        if (this.shouldBlur === false) {
            inputEl.focus();
            this.shouldBlur = true;
            this.ionBlur.emit();
            this.inputUpdated();
            return;
        }
        this.focused = false;
        this.positionElements();
    }
    /**
     * Sets the Searchbar to focused and active on input focus.
     */
    onFocus() {
        this.activated = true;
        this.focused = true;
        this.ionFocus.emit();
        this.inputUpdated();
        this.positionElements();
    }
    /**
     * Positions the input search icon, placeholder, and the cancel button
     * based on the input value and if it is focused. (ios only)
     */
    positionElements() {
        const prevAlignLeft = this.shouldAlignLeft;
        const shouldAlignLeft = (!this.animated || (this.value && this.value.toString().trim() !== '') || this.focused === true);
        this.shouldAlignLeft = shouldAlignLeft;
        if (this.mode !== 'ios') {
            return;
        }
        if (prevAlignLeft !== shouldAlignLeft) {
            this.positionPlaceholder();
        }
        if (this.animated) {
            this.positionCancelButton();
        }
    }
    /**
     * Positions the input placeholder
     */
    positionPlaceholder() {
        const isRTL = this.doc.dir === 'rtl';
        const inputEl = this.el.querySelector('.searchbar-input');
        const iconEl = this.el.querySelector('.searchbar-search-icon');
        if (this.shouldAlignLeft) {
            inputEl.removeAttribute('style');
            iconEl.removeAttribute('style');
        }
        else {
            // Create a dummy span to get the placeholder width
            const doc = this.doc;
            const tempSpan = doc.createElement('span');
            tempSpan.innerHTML = this.placeholder;
            doc.body.appendChild(tempSpan);
            // Get the width of the span then remove it
            const textWidth = tempSpan.offsetWidth;
            tempSpan.remove();
            // Calculate the input padding
            const inputLeft = 'calc(50% - ' + (textWidth / 2) + 'px)';
            // Calculate the icon margin
            const iconLeft = 'calc(50% - ' + ((textWidth / 2) + 30) + 'px)';
            // Set the input padding start and icon margin start
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
    /**
     * Show the iOS Cancel button on focus, hide it offscreen otherwise
     */
    positionCancelButton() {
        const isRTL = this.doc.dir === 'rtl';
        const cancelButton = this.el.querySelector('.searchbar-cancel-button-ios');
        const shouldShowCancel = this.focused;
        if (shouldShowCancel !== this.isCancelVisible) {
            const cancelStyle = cancelButton.style;
            this.isCancelVisible = shouldShowCancel;
            if (shouldShowCancel) {
                if (isRTL) {
                    cancelStyle.marginLeft = '0';
                }
                else {
                    cancelStyle.marginRight = '0';
                }
            }
            else {
                const offset = cancelButton.offsetWidth;
                if (offset > 0) {
                    if (isRTL) {
                        cancelStyle.marginLeft = -offset + 'px';
                    }
                    else {
                        cancelStyle.marginRight = -offset + 'px';
                    }
                }
            }
        }
    }
    hostData() {
        return {
            class: {
                'searchbar-active': this.activated,
                'searchbar-animated': this.animated,
                'searchbar-has-value': (this.value !== ''),
                'searchbar-show-cancel': this.showCancelButton,
                'searchbar-left-aligned': this.shouldAlignLeft,
                'searchbar-has-focus': this.focused
            }
        };
    }
    render() {
        const cancelButtonClasses = createThemedClasses(this.mode, this.color, 'searchbar-cancel-button');
        const searchIconClasses = createThemedClasses(this.mode, this.color, 'searchbar-search-icon');
        const cancelButton = (this.showCancelButton)
            ? h("button", { type: "button", tabindex: this.mode === 'ios' && !this.activated ? -1 : undefined, onClick: this.cancelSearchbar.bind(this), onMouseDown: this.cancelSearchbar.bind(this), class: cancelButtonClasses }, this.mode === 'md'
                ? h("ion-icon", { name: "md-arrow-back" })
                : this.cancelButtonText)
            : null;
        return [
            h("div", { class: "searchbar-input-container" },
                this.mode === 'md' && cancelButton,
                h("div", { class: searchIconClasses }),
                h("input", { ref: (el) => this.nativeInput = el, class: "searchbar-input", onInput: this.onInput.bind(this), onBlur: this.onBlur.bind(this), onFocus: this.onFocus.bind(this), placeholder: this.placeholder, type: this.type, value: this.value, autoComplete: this.autocomplete, autoCorrect: this.autocorrect, spellCheck: this.spellcheck }),
                h("button", { type: "button", class: "searchbar-clear-icon", onClick: this.clearInput.bind(this), onMouseDown: this.clearInput.bind(this) })),
            this.mode === 'ios' && cancelButton
        ];
    }
    static get is() { return "ion-searchbar"; }
    static get host() { return {
        "theme": "searchbar"
    }; }
    static get properties() { return {
        "activated": {
            "state": true
        },
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
        "cancelButtonText": {
            "type": String,
            "attr": "cancel-button-text"
        },
        "color": {
            "type": String,
            "attr": "color"
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
    }; }
    static get events() { return [{
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
        }]; }
    static get style() { return "ion-searchbar {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  width: 100%; }\n\n.searchbar-icon {\n  pointer-events: none; }\n\n.searchbar-input-container {\n  position: relative;\n  display: block;\n  -ms-flex-negative: 1;\n  flex-shrink: 1;\n  width: 100%; }\n\n.searchbar-input {\n  -moz-appearance: none;\n  -ms-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  display: block;\n  width: 100%;\n  border: 0;\n  font-family: inherit; }\n  .searchbar-input:active, .searchbar-input:focus {\n    outline: none; }\n  .searchbar-input::-webkit-search-cancel-button {\n    display: none; }\n\n.searchbar-clear-icon {\n  margin: 0;\n  padding: 0;\n  display: none;\n  min-height: 0; }\n\n.searchbar-has-value.searchbar-has-focus .searchbar-clear-icon {\n  display: block; }\n\n.searchbar-ios {\n  padding: 12px;\n  height: 60px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif;\n  contain: strict; }\n\n.searchbar-ios .searchbar-input-container {\n  height: 36px;\n  contain: strict; }\n\n.searchbar-search-icon-ios {\n  background-position: center;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2013%2013'><path%20fill='var(--ion-text-ios-color-step-400,%20var(--ion-text-color-step-400,%20%23666666))'%20d='M5,1c2.2,0,4,1.8,4,4S7.2,9,5,9S1,7.2,1,5S2.8,1,5,1%20M5,0C2.2,0,0,2.2,0,5s2.2,5,5,5s5-2.2,5-5S7.8,0,5,0%20L5,0z'/><line%20stroke='var(--ion-text-ios-color-step-400,%20var(--ion-text-color-step-400,%20%23666666))'%20stroke-miterlimit='10'%20x1='12.6'%20y1='12.6'%20x2='8.2'%20y2='8.2'/></svg>\");\n  margin-left: calc(50% - 60px);\n  left: 9px;\n  top: 0;\n  position: absolute;\n  width: 14px;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-size: 13px;\n  contain: strict; }\n\n.searchbar-ios .searchbar-input {\n  padding: 0 28px;\n  border-radius: 10px;\n  height: 100%;\n  font-size: 14px;\n  font-weight: 400;\n  color: var(--ion-text-ios-color, var(--ion-text-color, #000));\n  background-color: rgba(var(--ion-text-ios-color-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.07);\n  contain: strict; }\n  .searchbar-ios .searchbar-input::-moz-placeholder {\n    color: var(--ion-text-ios-color-step-400, var(--ion-text-color-step-400, #666666)); }\n  .searchbar-ios .searchbar-input:-ms-input-placeholder {\n    color: var(--ion-text-ios-color-step-400, var(--ion-text-color-step-400, #666666)); }\n  .searchbar-ios .searchbar-input::-webkit-input-placeholder {\n    text-indent: 0;\n    color: var(--ion-text-ios-color-step-400, var(--ion-text-color-step-400, #666666)); }\n\n.searchbar-ios .searchbar-clear-icon {\n  right: 0;\n  top: 0;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='var(--ion-text-ios-color-step-400,%20var(--ion-text-color-step-400,%20%23666666))'%20d='M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z'/></svg>\");\n  background-position: center;\n  position: absolute;\n  width: 30px;\n  height: 100%;\n  border: 0;\n  background-color: transparent;\n  background-repeat: no-repeat;\n  background-size: 18px; }\n\n.searchbar-cancel-button-ios {\n  padding: 0 0 0 8px;\n  display: none;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  border: 0;\n  font-size: 16px;\n  color: var(--ion-color-ios-primary, var(--ion-color-primary, #3880ff));\n  background-color: transparent;\n  cursor: pointer; }\n\n.searchbar-left-aligned .searchbar-search-icon-ios {\n  margin-left: 0; }\n\n.searchbar-ios.searchbar-left-aligned .searchbar-input {\n  padding-left: 30px; }\n\n.searchbar-show-cancel.searchbar-has-focus .searchbar-cancel-button-ios,\n.searchbar-show-cancel.searchbar-animated .searchbar-cancel-button-ios {\n  display: block; }\n\n.searchbar-animated .searchbar-search-icon-ios,\n.searchbar-ios.searchbar-animated .searchbar-input {\n  -webkit-transition: all 300ms ease;\n  transition: all 300ms ease; }\n\n.searchbar-animated.searchbar-has-focus .searchbar-cancel-button-ios {\n  opacity: 1;\n  pointer-events: auto; }\n\n.searchbar-animated .searchbar-cancel-button-ios {\n  margin-right: -100%;\n  -webkit-transform: translate3d(0,  0,  0);\n  transform: translate3d(0,  0,  0);\n  opacity: 0;\n  -webkit-transition: all 300ms ease;\n  transition: all 300ms ease;\n  pointer-events: none; }\n\n.searchbar-ios-primary .searchbar-cancel-button-ios {\n  color: var(--ion-color-ios-primary, var(--ion-color-primary, #3880ff)); }\n\n.searchbar-ios-primary .searchbar-cancel-button-ios:hover {\n  color: var(--ion-color-ios-primary-tint, var(--ion-color-primary-tint, #4c8dff)); }\n\n.toolbar-ios-primary .searchbar-search-icon-ios {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2013%2013'><path%20fill='var(--ion-color-ios-primary-contrast,%20var(--ion-color-primary-contrast,%20%23fff))'%20d='M5,1c2.2,0,4,1.8,4,4S7.2,9,5,9S1,7.2,1,5S2.8,1,5,1%20M5,0C2.2,0,0,2.2,0,5s2.2,5,5,5s5-2.2,5-5S7.8,0,5,0%20L5,0z'/><line%20stroke='var(--ion-color-ios-primary-contrast,%20var(--ion-color-primary-contrast,%20%23fff))'%20stroke-miterlimit='10'%20x1='12.6'%20y1='12.6'%20x2='8.2'%20y2='8.2'/></svg>\");\n  opacity: 0.5; }\n\n.toolbar-ios-primary .searchbar-ios .searchbar-input {\n  color: var(--ion-color-ios-primary-contrast, var(--ion-color-primary-contrast, #fff));\n  background: rgba(var(--ion-color-ios-primary-contrast-rgb, var(--ion-color-primary-contrast-rgb, 255, 255, 255)), 0.07); }\n  .toolbar-ios-primary .searchbar-ios .searchbar-input::-moz-placeholder {\n    color: var(--ion-color-ios-primary-contrast, var(--ion-color-primary-contrast, #fff));\n    opacity: 0.5; }\n  .toolbar-ios-primary .searchbar-ios .searchbar-input:-ms-input-placeholder {\n    color: var(--ion-color-ios-primary-contrast, var(--ion-color-primary-contrast, #fff));\n    opacity: 0.5; }\n  .toolbar-ios-primary .searchbar-ios .searchbar-input::-webkit-input-placeholder {\n    text-indent: 0;\n    color: var(--ion-color-ios-primary-contrast, var(--ion-color-primary-contrast, #fff));\n    opacity: 0.5; }\n\n.toolbar-ios-primary .searchbar-ios .searchbar-clear-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='var(--ion-color-ios-primary-contrast,%20var(--ion-color-primary-contrast,%20%23fff))'%20d='M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z'/></svg>\");\n  opacity: 0.5; }\n\n.toolbar-ios-primary .searchbar-ios .searchbar-cancel-button-ios {\n  color: var(--ion-color-ios-primary-contrast, var(--ion-color-primary-contrast, #fff)); }\n\n.searchbar-ios-secondary .searchbar-cancel-button-ios {\n  color: var(--ion-color-ios-secondary, var(--ion-color-secondary, #0cd1e8)); }\n\n.searchbar-ios-secondary .searchbar-cancel-button-ios:hover {\n  color: var(--ion-color-ios-secondary-tint, var(--ion-color-secondary-tint, #24d6ea)); }\n\n.toolbar-ios-secondary .searchbar-search-icon-ios {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2013%2013'><path%20fill='var(--ion-color-ios-secondary-contrast,%20var(--ion-color-secondary-contrast,%20%23fff))'%20d='M5,1c2.2,0,4,1.8,4,4S7.2,9,5,9S1,7.2,1,5S2.8,1,5,1%20M5,0C2.2,0,0,2.2,0,5s2.2,5,5,5s5-2.2,5-5S7.8,0,5,0%20L5,0z'/><line%20stroke='var(--ion-color-ios-secondary-contrast,%20var(--ion-color-secondary-contrast,%20%23fff))'%20stroke-miterlimit='10'%20x1='12.6'%20y1='12.6'%20x2='8.2'%20y2='8.2'/></svg>\");\n  opacity: 0.5; }\n\n.toolbar-ios-secondary .searchbar-ios .searchbar-input {\n  color: var(--ion-color-ios-secondary-contrast, var(--ion-color-secondary-contrast, #fff));\n  background: rgba(var(--ion-color-ios-secondary-contrast-rgb, var(--ion-color-secondary-contrast-rgb, 255, 255, 255)), 0.07); }\n  .toolbar-ios-secondary .searchbar-ios .searchbar-input::-moz-placeholder {\n    color: var(--ion-color-ios-secondary-contrast, var(--ion-color-secondary-contrast, #fff));\n    opacity: 0.5; }\n  .toolbar-ios-secondary .searchbar-ios .searchbar-input:-ms-input-placeholder {\n    color: var(--ion-color-ios-secondary-contrast, var(--ion-color-secondary-contrast, #fff));\n    opacity: 0.5; }\n  .toolbar-ios-secondary .searchbar-ios .searchbar-input::-webkit-input-placeholder {\n    text-indent: 0;\n    color: var(--ion-color-ios-secondary-contrast, var(--ion-color-secondary-contrast, #fff));\n    opacity: 0.5; }\n\n.toolbar-ios-secondary .searchbar-ios .searchbar-clear-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='var(--ion-color-ios-secondary-contrast,%20var(--ion-color-secondary-contrast,%20%23fff))'%20d='M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z'/></svg>\");\n  opacity: 0.5; }\n\n.toolbar-ios-secondary .searchbar-ios .searchbar-cancel-button-ios {\n  color: var(--ion-color-ios-secondary-contrast, var(--ion-color-secondary-contrast, #fff)); }\n\n.searchbar-ios-tertiary .searchbar-cancel-button-ios {\n  color: var(--ion-color-ios-tertiary, var(--ion-color-tertiary, #7044ff)); }\n\n.searchbar-ios-tertiary .searchbar-cancel-button-ios:hover {\n  color: var(--ion-color-ios-tertiary-tint, var(--ion-color-tertiary-tint, #7e57ff)); }\n\n.toolbar-ios-tertiary .searchbar-search-icon-ios {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2013%2013'><path%20fill='var(--ion-color-ios-tertiary-contrast,%20var(--ion-color-tertiary-contrast,%20%23fff))'%20d='M5,1c2.2,0,4,1.8,4,4S7.2,9,5,9S1,7.2,1,5S2.8,1,5,1%20M5,0C2.2,0,0,2.2,0,5s2.2,5,5,5s5-2.2,5-5S7.8,0,5,0%20L5,0z'/><line%20stroke='var(--ion-color-ios-tertiary-contrast,%20var(--ion-color-tertiary-contrast,%20%23fff))'%20stroke-miterlimit='10'%20x1='12.6'%20y1='12.6'%20x2='8.2'%20y2='8.2'/></svg>\");\n  opacity: 0.5; }\n\n.toolbar-ios-tertiary .searchbar-ios .searchbar-input {\n  color: var(--ion-color-ios-tertiary-contrast, var(--ion-color-tertiary-contrast, #fff));\n  background: rgba(var(--ion-color-ios-tertiary-contrast-rgb, var(--ion-color-tertiary-contrast-rgb, 255, 255, 255)), 0.07); }\n  .toolbar-ios-tertiary .searchbar-ios .searchbar-input::-moz-placeholder {\n    color: var(--ion-color-ios-tertiary-contrast, var(--ion-color-tertiary-contrast, #fff));\n    opacity: 0.5; }\n  .toolbar-ios-tertiary .searchbar-ios .searchbar-input:-ms-input-placeholder {\n    color: var(--ion-color-ios-tertiary-contrast, var(--ion-color-tertiary-contrast, #fff));\n    opacity: 0.5; }\n  .toolbar-ios-tertiary .searchbar-ios .searchbar-input::-webkit-input-placeholder {\n    text-indent: 0;\n    color: var(--ion-color-ios-tertiary-contrast, var(--ion-color-tertiary-contrast, #fff));\n    opacity: 0.5; }\n\n.toolbar-ios-tertiary .searchbar-ios .searchbar-clear-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='var(--ion-color-ios-tertiary-contrast,%20var(--ion-color-tertiary-contrast,%20%23fff))'%20d='M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z'/></svg>\");\n  opacity: 0.5; }\n\n.toolbar-ios-tertiary .searchbar-ios .searchbar-cancel-button-ios {\n  color: var(--ion-color-ios-tertiary-contrast, var(--ion-color-tertiary-contrast, #fff)); }\n\n.searchbar-ios-success .searchbar-cancel-button-ios {\n  color: var(--ion-color-ios-success, var(--ion-color-success, #10dc60)); }\n\n.searchbar-ios-success .searchbar-cancel-button-ios:hover {\n  color: var(--ion-color-ios-success-tint, var(--ion-color-success-tint, #28e070)); }\n\n.toolbar-ios-success .searchbar-search-icon-ios {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2013%2013'><path%20fill='var(--ion-color-ios-success-contrast,%20var(--ion-color-success-contrast,%20%23fff))'%20d='M5,1c2.2,0,4,1.8,4,4S7.2,9,5,9S1,7.2,1,5S2.8,1,5,1%20M5,0C2.2,0,0,2.2,0,5s2.2,5,5,5s5-2.2,5-5S7.8,0,5,0%20L5,0z'/><line%20stroke='var(--ion-color-ios-success-contrast,%20var(--ion-color-success-contrast,%20%23fff))'%20stroke-miterlimit='10'%20x1='12.6'%20y1='12.6'%20x2='8.2'%20y2='8.2'/></svg>\");\n  opacity: 0.5; }\n\n.toolbar-ios-success .searchbar-ios .searchbar-input {\n  color: var(--ion-color-ios-success-contrast, var(--ion-color-success-contrast, #fff));\n  background: rgba(var(--ion-color-ios-success-contrast-rgb, var(--ion-color-success-contrast-rgb, 255, 255, 255)), 0.07); }\n  .toolbar-ios-success .searchbar-ios .searchbar-input::-moz-placeholder {\n    color: var(--ion-color-ios-success-contrast, var(--ion-color-success-contrast, #fff));\n    opacity: 0.5; }\n  .toolbar-ios-success .searchbar-ios .searchbar-input:-ms-input-placeholder {\n    color: var(--ion-color-ios-success-contrast, var(--ion-color-success-contrast, #fff));\n    opacity: 0.5; }\n  .toolbar-ios-success .searchbar-ios .searchbar-input::-webkit-input-placeholder {\n    text-indent: 0;\n    color: var(--ion-color-ios-success-contrast, var(--ion-color-success-contrast, #fff));\n    opacity: 0.5; }\n\n.toolbar-ios-success .searchbar-ios .searchbar-clear-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='var(--ion-color-ios-success-contrast,%20var(--ion-color-success-contrast,%20%23fff))'%20d='M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z'/></svg>\");\n  opacity: 0.5; }\n\n.toolbar-ios-success .searchbar-ios .searchbar-cancel-button-ios {\n  color: var(--ion-color-ios-success-contrast, var(--ion-color-success-contrast, #fff)); }\n\n.searchbar-ios-warning .searchbar-cancel-button-ios {\n  color: var(--ion-color-ios-warning, var(--ion-color-warning, #ffce00)); }\n\n.searchbar-ios-warning .searchbar-cancel-button-ios:hover {\n  color: var(--ion-color-ios-warning-tint, var(--ion-color-warning-tint, #ffd31a)); }\n\n.toolbar-ios-warning .searchbar-search-icon-ios {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2013%2013'><path%20fill='var(--ion-color-ios-warning-contrast,%20var(--ion-color-warning-contrast,%20%23fff))'%20d='M5,1c2.2,0,4,1.8,4,4S7.2,9,5,9S1,7.2,1,5S2.8,1,5,1%20M5,0C2.2,0,0,2.2,0,5s2.2,5,5,5s5-2.2,5-5S7.8,0,5,0%20L5,0z'/><line%20stroke='var(--ion-color-ios-warning-contrast,%20var(--ion-color-warning-contrast,%20%23fff))'%20stroke-miterlimit='10'%20x1='12.6'%20y1='12.6'%20x2='8.2'%20y2='8.2'/></svg>\");\n  opacity: 0.5; }\n\n.toolbar-ios-warning .searchbar-ios .searchbar-input {\n  color: var(--ion-color-ios-warning-contrast, var(--ion-color-warning-contrast, #fff));\n  background: rgba(var(--ion-color-ios-warning-contrast-rgb, var(--ion-color-warning-contrast-rgb, 255, 255, 255)), 0.07); }\n  .toolbar-ios-warning .searchbar-ios .searchbar-input::-moz-placeholder {\n    color: var(--ion-color-ios-warning-contrast, var(--ion-color-warning-contrast, #fff));\n    opacity: 0.5; }\n  .toolbar-ios-warning .searchbar-ios .searchbar-input:-ms-input-placeholder {\n    color: var(--ion-color-ios-warning-contrast, var(--ion-color-warning-contrast, #fff));\n    opacity: 0.5; }\n  .toolbar-ios-warning .searchbar-ios .searchbar-input::-webkit-input-placeholder {\n    text-indent: 0;\n    color: var(--ion-color-ios-warning-contrast, var(--ion-color-warning-contrast, #fff));\n    opacity: 0.5; }\n\n.toolbar-ios-warning .searchbar-ios .searchbar-clear-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='var(--ion-color-ios-warning-contrast,%20var(--ion-color-warning-contrast,%20%23fff))'%20d='M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z'/></svg>\");\n  opacity: 0.5; }\n\n.toolbar-ios-warning .searchbar-ios .searchbar-cancel-button-ios {\n  color: var(--ion-color-ios-warning-contrast, var(--ion-color-warning-contrast, #fff)); }\n\n.searchbar-ios-danger .searchbar-cancel-button-ios {\n  color: var(--ion-color-ios-danger, var(--ion-color-danger, #f04141)); }\n\n.searchbar-ios-danger .searchbar-cancel-button-ios:hover {\n  color: var(--ion-color-ios-danger-tint, var(--ion-color-danger-tint, #f25454)); }\n\n.toolbar-ios-danger .searchbar-search-icon-ios {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2013%2013'><path%20fill='var(--ion-color-ios-danger-contrast,%20var(--ion-color-danger-contrast,%20%23fff))'%20d='M5,1c2.2,0,4,1.8,4,4S7.2,9,5,9S1,7.2,1,5S2.8,1,5,1%20M5,0C2.2,0,0,2.2,0,5s2.2,5,5,5s5-2.2,5-5S7.8,0,5,0%20L5,0z'/><line%20stroke='var(--ion-color-ios-danger-contrast,%20var(--ion-color-danger-contrast,%20%23fff))'%20stroke-miterlimit='10'%20x1='12.6'%20y1='12.6'%20x2='8.2'%20y2='8.2'/></svg>\");\n  opacity: 0.5; }\n\n.toolbar-ios-danger .searchbar-ios .searchbar-input {\n  color: var(--ion-color-ios-danger-contrast, var(--ion-color-danger-contrast, #fff));\n  background: rgba(var(--ion-color-ios-danger-contrast-rgb, var(--ion-color-danger-contrast-rgb, 255, 255, 255)), 0.07); }\n  .toolbar-ios-danger .searchbar-ios .searchbar-input::-moz-placeholder {\n    color: var(--ion-color-ios-danger-contrast, var(--ion-color-danger-contrast, #fff));\n    opacity: 0.5; }\n  .toolbar-ios-danger .searchbar-ios .searchbar-input:-ms-input-placeholder {\n    color: var(--ion-color-ios-danger-contrast, var(--ion-color-danger-contrast, #fff));\n    opacity: 0.5; }\n  .toolbar-ios-danger .searchbar-ios .searchbar-input::-webkit-input-placeholder {\n    text-indent: 0;\n    color: var(--ion-color-ios-danger-contrast, var(--ion-color-danger-contrast, #fff));\n    opacity: 0.5; }\n\n.toolbar-ios-danger .searchbar-ios .searchbar-clear-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='var(--ion-color-ios-danger-contrast,%20var(--ion-color-danger-contrast,%20%23fff))'%20d='M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z'/></svg>\");\n  opacity: 0.5; }\n\n.toolbar-ios-danger .searchbar-ios .searchbar-cancel-button-ios {\n  color: var(--ion-color-ios-danger-contrast, var(--ion-color-danger-contrast, #fff)); }\n\n.searchbar-ios-light .searchbar-cancel-button-ios {\n  color: var(--ion-color-ios-light, var(--ion-color-light, #f4f5f8)); }\n\n.searchbar-ios-light .searchbar-cancel-button-ios:hover {\n  color: var(--ion-color-ios-light-tint, var(--ion-color-light-tint, #f5f6f9)); }\n\n.toolbar-ios-light .searchbar-search-icon-ios {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2013%2013'><path%20fill='var(--ion-color-ios-light-contrast,%20var(--ion-color-light-contrast,%20%23000))'%20d='M5,1c2.2,0,4,1.8,4,4S7.2,9,5,9S1,7.2,1,5S2.8,1,5,1%20M5,0C2.2,0,0,2.2,0,5s2.2,5,5,5s5-2.2,5-5S7.8,0,5,0%20L5,0z'/><line%20stroke='var(--ion-color-ios-light-contrast,%20var(--ion-color-light-contrast,%20%23000))'%20stroke-miterlimit='10'%20x1='12.6'%20y1='12.6'%20x2='8.2'%20y2='8.2'/></svg>\");\n  opacity: 0.5; }\n\n.toolbar-ios-light .searchbar-ios .searchbar-input {\n  color: var(--ion-color-ios-light-contrast, var(--ion-color-light-contrast, #000));\n  background: rgba(var(--ion-color-ios-light-contrast-rgb, var(--ion-color-light-contrast-rgb, 0, 0, 0)), 0.07); }\n  .toolbar-ios-light .searchbar-ios .searchbar-input::-moz-placeholder {\n    color: var(--ion-color-ios-light-contrast, var(--ion-color-light-contrast, #000));\n    opacity: 0.5; }\n  .toolbar-ios-light .searchbar-ios .searchbar-input:-ms-input-placeholder {\n    color: var(--ion-color-ios-light-contrast, var(--ion-color-light-contrast, #000));\n    opacity: 0.5; }\n  .toolbar-ios-light .searchbar-ios .searchbar-input::-webkit-input-placeholder {\n    text-indent: 0;\n    color: var(--ion-color-ios-light-contrast, var(--ion-color-light-contrast, #000));\n    opacity: 0.5; }\n\n.toolbar-ios-light .searchbar-ios .searchbar-clear-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='var(--ion-color-ios-light-contrast,%20var(--ion-color-light-contrast,%20%23000))'%20d='M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z'/></svg>\");\n  opacity: 0.5; }\n\n.toolbar-ios-light .searchbar-ios .searchbar-cancel-button-ios {\n  color: var(--ion-color-ios-light-contrast, var(--ion-color-light-contrast, #000)); }\n\n.searchbar-ios-medium .searchbar-cancel-button-ios {\n  color: var(--ion-color-ios-medium, var(--ion-color-medium, #989aa2)); }\n\n.searchbar-ios-medium .searchbar-cancel-button-ios:hover {\n  color: var(--ion-color-ios-medium-tint, var(--ion-color-medium-tint, #a2a4ab)); }\n\n.toolbar-ios-medium .searchbar-search-icon-ios {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2013%2013'><path%20fill='var(--ion-color-ios-medium-contrast,%20var(--ion-color-medium-contrast,%20%23fff))'%20d='M5,1c2.2,0,4,1.8,4,4S7.2,9,5,9S1,7.2,1,5S2.8,1,5,1%20M5,0C2.2,0,0,2.2,0,5s2.2,5,5,5s5-2.2,5-5S7.8,0,5,0%20L5,0z'/><line%20stroke='var(--ion-color-ios-medium-contrast,%20var(--ion-color-medium-contrast,%20%23fff))'%20stroke-miterlimit='10'%20x1='12.6'%20y1='12.6'%20x2='8.2'%20y2='8.2'/></svg>\");\n  opacity: 0.5; }\n\n.toolbar-ios-medium .searchbar-ios .searchbar-input {\n  color: var(--ion-color-ios-medium-contrast, var(--ion-color-medium-contrast, #fff));\n  background: rgba(var(--ion-color-ios-medium-contrast-rgb, var(--ion-color-medium-contrast-rgb, 255, 255, 255)), 0.07); }\n  .toolbar-ios-medium .searchbar-ios .searchbar-input::-moz-placeholder {\n    color: var(--ion-color-ios-medium-contrast, var(--ion-color-medium-contrast, #fff));\n    opacity: 0.5; }\n  .toolbar-ios-medium .searchbar-ios .searchbar-input:-ms-input-placeholder {\n    color: var(--ion-color-ios-medium-contrast, var(--ion-color-medium-contrast, #fff));\n    opacity: 0.5; }\n  .toolbar-ios-medium .searchbar-ios .searchbar-input::-webkit-input-placeholder {\n    text-indent: 0;\n    color: var(--ion-color-ios-medium-contrast, var(--ion-color-medium-contrast, #fff));\n    opacity: 0.5; }\n\n.toolbar-ios-medium .searchbar-ios .searchbar-clear-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='var(--ion-color-ios-medium-contrast,%20var(--ion-color-medium-contrast,%20%23fff))'%20d='M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z'/></svg>\");\n  opacity: 0.5; }\n\n.toolbar-ios-medium .searchbar-ios .searchbar-cancel-button-ios {\n  color: var(--ion-color-ios-medium-contrast, var(--ion-color-medium-contrast, #fff)); }\n\n.searchbar-ios-dark .searchbar-cancel-button-ios {\n  color: var(--ion-color-ios-dark, var(--ion-color-dark, #222428)); }\n\n.searchbar-ios-dark .searchbar-cancel-button-ios:hover {\n  color: var(--ion-color-ios-dark-tint, var(--ion-color-dark-tint, #383a3e)); }\n\n.toolbar-ios-dark .searchbar-search-icon-ios {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2013%2013'><path%20fill='var(--ion-color-ios-dark-contrast,%20var(--ion-color-dark-contrast,%20%23fff))'%20d='M5,1c2.2,0,4,1.8,4,4S7.2,9,5,9S1,7.2,1,5S2.8,1,5,1%20M5,0C2.2,0,0,2.2,0,5s2.2,5,5,5s5-2.2,5-5S7.8,0,5,0%20L5,0z'/><line%20stroke='var(--ion-color-ios-dark-contrast,%20var(--ion-color-dark-contrast,%20%23fff))'%20stroke-miterlimit='10'%20x1='12.6'%20y1='12.6'%20x2='8.2'%20y2='8.2'/></svg>\");\n  opacity: 0.5; }\n\n.toolbar-ios-dark .searchbar-ios .searchbar-input {\n  color: var(--ion-color-ios-dark-contrast, var(--ion-color-dark-contrast, #fff));\n  background: rgba(var(--ion-color-ios-dark-contrast-rgb, var(--ion-color-dark-contrast-rgb, 255, 255, 255)), 0.07); }\n  .toolbar-ios-dark .searchbar-ios .searchbar-input::-moz-placeholder {\n    color: var(--ion-color-ios-dark-contrast, var(--ion-color-dark-contrast, #fff));\n    opacity: 0.5; }\n  .toolbar-ios-dark .searchbar-ios .searchbar-input:-ms-input-placeholder {\n    color: var(--ion-color-ios-dark-contrast, var(--ion-color-dark-contrast, #fff));\n    opacity: 0.5; }\n  .toolbar-ios-dark .searchbar-ios .searchbar-input::-webkit-input-placeholder {\n    text-indent: 0;\n    color: var(--ion-color-ios-dark-contrast, var(--ion-color-dark-contrast, #fff));\n    opacity: 0.5; }\n\n.toolbar-ios-dark .searchbar-ios .searchbar-clear-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='var(--ion-color-ios-dark-contrast,%20var(--ion-color-dark-contrast,%20%23fff))'%20d='M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z'/></svg>\");\n  opacity: 0.5; }\n\n.toolbar-ios-dark .searchbar-ios .searchbar-cancel-button-ios {\n  color: var(--ion-color-ios-dark-contrast, var(--ion-color-dark-contrast, #fff)); }"; }
    static get styleMode() { return "ios"; }
}

export { AppHoldings, Searchbar as IonSearchbar };
