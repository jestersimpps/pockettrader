/*! Built with http://stenciljs.com */
const { h } = window.App;

import { b as TICKERSERVICE, e as TRADESERVICE, c as BALANCESERVICE } from './chunk-3c4622a5.js';
import { a as numeral } from './chunk-374e99fd.js';
import { i as appSetTrades } from './chunk-65ccb753.js';
import { a as createThemedClasses, b as getElementClassMap } from './chunk-ea7ac2d5.js';
import './chunk-8b6e0876.js';
import './chunk-a7525511.js';

var OrderType;
(function (OrderType) {
    OrderType["LIMITSELL"] = "LIMITSELL";
    OrderType["LIMITBUY"] = "LIMITBUY";
    OrderType["MARKETSELL"] = "MARKETSELL";
    OrderType["MARKETBUY"] = "MARKETBUY";
    OrderType["CANCEL"] = "CANCEL";
})(OrderType || (OrderType = {}));
class AppTrade {
    constructor() {
        this.pairs = [];
        this.isLoading = false;
        this.tradePrice = 0;
        this.tradeAmount = 0;
        this.tradeAction = OrderType.LIMITBUY;
        this.baseBalance = 0;
        this.quoteBalance = 0;
        this.tradeFee = 0;
        this.segment = 0;
    }
    componentWillLoad() {
        this.store.mapStateToProps(this, (state) => {
            const { app: { exchanges, baseCurrency, currencies, tickers, wallets }, } = state;
            return {
                exchanges,
                baseCurrency,
                currencies,
                tickers,
                wallets,
            };
        });
        this.store.mapDispatchToProps(this, {
            appSetTrades,
        });
        if (this.tickers.length) {
            this.pairs = this.tickers[0].tickers.sort((a, b) => {
                var textA = a.symbol.toUpperCase();
                var textB = b.symbol.toUpperCase();
                return textA < textB ? -1 : textA > textB ? 1 : 0;
            });
            this.exchangeId = this.tickers[0].exchangeId;
            this.selectedExchange = this.tickers[0].exchangeId;
            this.getNewTicker(this.exchangeId, this.pairs[0].symbol);
        }
    }
    exchangeSelected(e) {
        this.exchangeId = e.target.value;
        this.selectedExchange = e.target.value;
        this.pairs = this.tickers.find((t) => t.exchangeId === e.target.value).tickers.sort((a, b) => {
            var textA = a.symbol.toUpperCase();
            var textB = b.symbol.toUpperCase();
            return textA < textB ? -1 : textA > textB ? 1 : 0;
        });
        this.getNewTicker(this.exchangeId, this.pairs[0].symbol);
    }
    pairSelected(exchangeId, pair) {
        this.getNewTicker(exchangeId, pair);
    }
    getBalances(quote, base) {
        let exchange = this.exchanges.find((e) => e.id === this.exchangeId);
        let quoteBalance = exchange.balances.find((b) => b.currency === quote);
        let baseBalance = exchange.balances.find((b) => b.currency === base);
        this.quoteBalance = 0;
        this.baseBalance = 0;
        if (quoteBalance) {
            this.quoteBalance = quoteBalance.available;
        }
        if (baseBalance) {
            this.baseBalance = baseBalance.available;
        }
    }
    setPriceWithButtons(button) {
        let largeNumber = this.tradePrice / 100;
        let smallNumber = this.tradePrice / 1000;
        switch (button) {
            case `--`:
                this.tradePrice -= largeNumber;
                break;
            case `-`:
                this.tradePrice -= smallNumber;
                break;
            case `+`:
                this.tradePrice += smallNumber;
                break;
            case `++`:
                this.tradePrice += largeNumber;
                break;
            default:
                break;
        }
    }
    getAmountFormat() {
        let zeros = [];
        for (let index = 0; index < this.ticker.info.precision.amount; index++) {
            zeros.push(`0`);
        }
        return `0.${zeros.join('')}`;
    }
    getPriceFormat() {
        let zeros = [];
        for (let index = 0; index < this.ticker.info.precision.price; index++) {
            zeros.push(`0`);
        }
        return `0.${zeros.join('')}`;
    }
    getNewTicker(exchangeId, symbol) {
        this.isLoading = true;
        TICKERSERVICE.getTicker(exchangeId, symbol)
            .then((response) => {
            this.exchangeId = exchangeId;
            this.ticker = response.data;
            this.tradePrice = +response.data.last;
            this.getBalances(response.data.quote, response.data.base);
            this.isLoading = false;
        })
            .catch(() => {
            window.alert(`Something went wrong while getting ticker data for ${exchangeId} - ${symbol}`);
            this.isLoading = false;
        });
    }
    setTradePrice(e) {
        this.tradePrice = +e.target.value;
    }
    setTradeAmount(e) {
        this.tradeAmount = +e.target.value;
    }
    setTradeAmountByButton(percentage) {
        let amount = 0;
        switch (this.tradeAction) {
            case OrderType.LIMITBUY:
                amount = (this.quoteBalance * percentage - this.quoteBalance * percentage * this.ticker.info.maker) / this.tradePrice;
                if (this.checkAmounts(amount)) {
                    this.tradeAmount = amount;
                }
                break;
            case OrderType.MARKETBUY:
                amount = (this.quoteBalance * percentage - this.quoteBalance * percentage * this.ticker.info.taker) / this.tradePrice;
                if (this.checkAmounts(amount)) {
                    this.tradeAmount = amount;
                }
                break;
            case OrderType.LIMITSELL:
                amount = this.baseBalance * percentage - this.baseBalance * percentage * this.ticker.info.maker;
                if (this.checkAmounts(amount)) {
                    this.tradeAmount = amount;
                }
                break;
            case OrderType.MARKETSELL:
                amount = this.baseBalance * percentage - this.baseBalance * percentage * this.ticker.info.taker;
                if (this.checkAmounts(amount)) {
                    this.tradeAmount = amount;
                }
                break;
            default:
                break;
        }
    }
    checkAmounts(amount) {
        if (this.ticker.info.limits.amount.min > amount) {
            window.alert(`Minimum amount of ${this.ticker.info.limits.amount.min}`);
            this.tradeAmount = this.ticker.info.limits.amount.min;
            return false;
        }
        if (this.ticker.info.limits.amount.max < amount) {
            window.alert(`Maximum amount of ${this.ticker.info.limits.amount.max}`);
            this.tradeAmount = this.ticker.info.limits.amount.max;
            return false;
        }
        return true;
    }
    getSymbol(balance, exchange) {
        let tickers = this.tickers.find((t) => t.exchangeId === exchange.id).tickers;
        return BALANCESERVICE.getBtcStats(balance, tickers).symbol;
    }
    render() {
        return [
            h("ion-header", null,
                h("ion-toolbar", { color: "dark" },
                    h("ion-buttons", { slot: "start" },
                        h("ion-button", { fill: "solid", shape: "round", color: "danger", href: "/panic", padding: true },
                            h("ion-icon", { name: "alert" }),
                            "Panic")),
                    h("ion-title", { "text-center": true }, "Trade"))),
            h("ion-content", null,
                h("ion-list", null,
                    h("ion-list-header", { color: "light" },
                        "Pair",
                        this.ticker ? (h("ion-badge", { color: "light", "margin-right": true },
                            this.exchangeId,
                            " - ",
                            this.ticker.symbol)) : (h("ion-icon", { name: "sync", class: "spin", slot: "end", "margin-right": true }))),
                    h("ion-item", { lines: "none" },
                        h("ion-segment", { color: "light", onIonChange: (e) => (this.segment = +e.detail.value) },
                            h("ion-segment-button", { value: "0", checked: this.segment === 0 },
                                h("span", { style: { color: 'black' } }, "All Pairs")),
                            h("ion-segment-button", { value: "1", checked: this.segment === 1 },
                                h("span", { style: { color: 'black' } }, "Current Holdings")))),
                    h("ion-item", { lines: "none", style: { display: this.segment === 1 ? 'none' : 'block' } },
                        h("ion-label", null, "Select Exchange"),
                        h("select", { onChange: (e) => this.exchangeSelected(e) }, this.exchanges.filter((e) => e.key && e.secret).map((e) => h("option", { value: e.id }, e.id)))),
                    h("ion-item", { lines: "none", style: { display: this.segment === 1 ? 'none' : 'block' } },
                        h("ion-label", null, "Select Pair"),
                        h("select", { onChange: (e) => this.pairSelected(this.selectedExchange, e.target[`value`]) }, this.pairs.map((p) => h("option", { value: p.symbol }, p.symbol)))),
                    this.segment === 1 &&
                        this.exchanges.filter((e) => e.key && e.secret).map((exchange) => [
                            exchange.balances.filter((b) => b.currency != `BTC`).map((b) => (h("ion-item", { lines: "none" },
                                h("ion-label", null,
                                    exchange.id,
                                    " - ",
                                    this.getSymbol(b, exchange)),
                                h("ion-button", { size: "small", color: "light", slot: "end", "text-right": true, onClick: () => this.pairSelected(exchange.id, this.getSymbol(b, exchange)) }, "select")))),
                        ]),
                    h("ion-list-header", { color: "light" },
                        "Price",
                        this.isLoading ? (h("ion-icon", { name: "sync", class: "spin", slot: "end", "margin-right": true })) : (h("ion-badge", { color: "light", "margin-right": true },
                            numeral(+this.tradePrice).format(this.getPriceFormat()),
                            " ",
                            this.ticker.quote))),
                    this.ticker && (h("div", null,
                        h("ion-item", { lines: "none" },
                            h("ion-label", null, "Last price"),
                            h("ion-button", { color: "light", slot: "end", "text-right": true, onClick: () => (this.tradePrice = this.ticker.last) }, numeral(+this.ticker.last).format('0,0.00000000'))),
                        h("ion-item", { lines: "none" },
                            h("ion-label", null, "Set price"),
                            h("ion-input", { slot: "end", name: "price", type: "number", value: `${this.tradePrice}`, onInput: (e) => this.setTradePrice(e) })),
                        h("ion-grid", null,
                            h("ion-row", null,
                                h("ion-col", null,
                                    h("ion-button", { fill: "outline", expand: "block", color: "danger", onClick: () => this.setPriceWithButtons('--') }, "- -")),
                                h("ion-col", null,
                                    h("ion-button", { fill: "outline", expand: "block", color: "danger", onClick: () => this.setPriceWithButtons('-') }, "-")),
                                h("ion-col", null,
                                    h("ion-button", { fill: "outline", expand: "block", color: "success", onClick: () => this.setPriceWithButtons('+') }, "+")),
                                h("ion-col", null,
                                    h("ion-button", { fill: "outline", expand: "block", color: "success", onClick: () => this.setPriceWithButtons('++') }, "+ +")))),
                        h("ion-list-header", { color: "light" },
                            "Action",
                            h("ion-badge", { color: "light", "margin-right": true }, this.tradeAction)),
                        h("ion-grid", null,
                            h("ion-row", null,
                                h("ion-col", null,
                                    h("ion-button", { fill: "outline", expand: "block", color: "success", onClick: () => (this.tradeAction = OrderType.MARKETBUY) }, "Market Buy")),
                                h("ion-col", null,
                                    h("ion-button", { fill: "outline", expand: "block", color: "danger", onClick: () => (this.tradeAction = OrderType.MARKETSELL) }, "Market Sell"))),
                            h("ion-row", null,
                                h("ion-col", null,
                                    h("ion-button", { fill: "outline", expand: "block", color: "success", onClick: () => (this.tradeAction = OrderType.LIMITBUY) }, "Limit Buy")),
                                h("ion-col", null,
                                    h("ion-button", { fill: "outline", expand: "block", color: "danger", onClick: () => (this.tradeAction = OrderType.LIMITSELL) }, "Limit Sell")))),
                        h("ion-list-header", { color: "light" },
                            "Amount",
                            this.isLoading ? (h("ion-icon", { name: "sync", class: "spin", slot: "end", "margin-right": true })) : (h("ion-badge", { color: "light", "margin-right": true },
                                numeral(this.tradeAmount).format(this.getAmountFormat()),
                                ' ',
                                (this.tradeAction === OrderType.LIMITBUY || this.tradeAction === OrderType.MARKETBUY) && this.ticker.base,
                                (this.tradeAction === OrderType.LIMITSELL || this.tradeAction === OrderType.MARKETSELL) && this.ticker.quote))),
                        h("ion-item", { lines: "none" },
                            h("ion-label", null,
                                "Available ",
                                this.ticker.quote),
                            h("ion-button", { color: "light", slot: "end", "text-right": true, onClick: () => this.setTradeAmountByButton(1) }, numeral(+this.quoteBalance).format(this.getAmountFormat()))),
                        h("ion-item", { lines: "none" },
                            h("ion-label", null,
                                "Available ",
                                this.ticker.base),
                            h("ion-button", { color: "light", slot: "end", "text-right": true, onClick: () => this.setTradeAmountByButton(1) }, numeral(+this.baseBalance).format(this.getAmountFormat()))),
                        h("ion-item", { lines: "none" },
                            h("ion-label", null, "Set Amount"),
                            h("ion-input", { slot: "end", name: "price", type: "number", value: `${this.tradeAmount}`, onInput: (e) => this.setTradeAmount(e), onBlur: () => this.checkAmounts(this.tradeAmount) })),
                        h("ion-grid", null,
                            h("ion-row", null,
                                h("ion-col", null,
                                    h("ion-button", { fill: "outline", expand: "block", color: "dark", onClick: () => this.setTradeAmountByButton(0.1) }, "10%")),
                                h("ion-col", null,
                                    h("ion-button", { fill: "outline", expand: "block", color: "dark", onClick: () => this.setTradeAmountByButton(0.2) }, "20%")),
                                h("ion-col", null,
                                    h("ion-button", { fill: "outline", expand: "block", color: "dark", onClick: () => this.setTradeAmountByButton(0.3) }, "30%")),
                                h("ion-col", null,
                                    h("ion-button", { fill: "outline", expand: "block", color: "dark", onClick: () => this.setTradeAmountByButton(0.4) }, "40%")),
                                h("ion-col", null,
                                    h("ion-button", { fill: "outline", expand: "block", color: "dark", onClick: () => this.setTradeAmountByButton(0.5) }, "50%")),
                                h("ion-col", null,
                                    h("ion-button", { fill: "outline", expand: "block", color: "dark", onClick: () => this.setTradeAmountByButton(0.6) }, "60%")),
                                h("ion-col", null,
                                    h("ion-button", { fill: "outline", expand: "block", color: "dark", onClick: () => this.setTradeAmountByButton(0.7) }, "70%")),
                                h("ion-col", null,
                                    h("ion-button", { fill: "outline", expand: "block", color: "dark", onClick: () => this.setTradeAmountByButton(0.8) }, "80%")),
                                h("ion-col", null,
                                    h("ion-button", { fill: "outline", expand: "block", color: "dark", onClick: () => this.setTradeAmountByButton(0.9) }, "90%")),
                                h("ion-col", null,
                                    h("ion-button", { fill: "outline", expand: "block", color: "dark", onClick: () => this.setTradeAmountByButton(1) }, "100%")))),
                        h("ion-list-header", { color: "light" }, "Summary"),
                        h("ion-item", { lines: "none" },
                            h("ion-label", null, "Action"),
                            h("ion-label", { slot: "end", "text-right": true }, this.tradeAction)),
                        h("ion-item", { lines: "none" },
                            h("ion-label", null, "Amount"),
                            h("ion-label", { slot: "end", "text-right": true },
                                numeral(this.tradeAmount).format(this.getAmountFormat()),
                                " ",
                                this.ticker.base)),
                        h("ion-item", { lines: "none" },
                            h("ion-label", null, "Price"),
                            h("ion-label", { slot: "end", "text-right": true },
                                numeral(+this.tradePrice).format(this.getPriceFormat()),
                                " ",
                                this.ticker.symbol)),
                        h("ion-item", { lines: "none" },
                            h("ion-label", null, "Fee"),
                            h("ion-label", { slot: "end", "text-right": true },
                                this.tradeAction === OrderType.LIMITBUY || this.tradeAction === OrderType.LIMITSELL
                                    ? numeral(+this.ticker.info.maker * +this.tradeAmount * +this.tradePrice).format(this.getAmountFormat())
                                    : numeral(+this.ticker.info.taker * +this.tradeAmount * +this.tradePrice).format(this.getAmountFormat()),
                                ' ',
                                this.ticker.quote)),
                        h("ion-item", { lines: "none" },
                            h("ion-label", null, "Total"),
                            h("ion-label", { slot: "end", "text-right": true },
                                numeral(+this.tradeAmount * +this.tradePrice - +this.ticker.info.taker * +this.tradeAmount * +this.tradePrice).format(this.getAmountFormat()),
                                ' ',
                                this.ticker.quote)),
                        h("ion-button", { expand: "block", color: "success", onClick: () => this.executeOrder(this.ticker.symbol, this.tradeAction, this.tradePrice, this.tradeAmount), disabled: this.isLoading },
                            this.isLoading && h("ion-icon", { name: "refresh", class: "spin", "margin-right": true }),
                            " Execute"))))),
        ];
    }
    async executeOrder(pair, type, price, amount) {
        if (window.confirm('Are you sure you want to execute this order?')) {
            this.isLoading = true;
            let exchange = this.exchanges.find((e) => e.id === this.exchangeId);
            TRADESERVICE.newOrder(exchange, {
                pair: pair,
                type: type,
                price: numeral(price).format(this.getPriceFormat()),
                amount: numeral(amount).format(this.getAmountFormat()),
                clientCreds: {
                    key: exchange.key,
                    secret: exchange.secret,
                },
            })
                .then((response) => {
                window.alert(`Executed order:\n
                      Pair: ${pair}\n
                      Type: ${type}\n
                      Price: ${numeral(price).format(this.getPriceFormat())}\n
                      amount:${numeral(amount).format(this.getAmountFormat())}`);
                this.isLoading = false;
                console.log(response);
            })
                .catch((error) => {
                this.isLoading = false;
                window.alert(`Something went wrong while executeing the order: ${error.message}`);
            });
        }
    }
    static get is() { return "app-trade"; }
    static get properties() { return {
        "baseBalance": {
            "state": true
        },
        "exchangeId": {
            "state": true
        },
        "exchanges": {
            "state": true
        },
        "isLoading": {
            "state": true
        },
        "pairs": {
            "state": true
        },
        "quoteBalance": {
            "state": true
        },
        "segment": {
            "state": true
        },
        "selectedExchange": {
            "state": true
        },
        "store": {
            "context": "store"
        },
        "ticker": {
            "state": true
        },
        "tickers": {
            "state": true
        },
        "tradeAction": {
            "state": true
        },
        "tradeAmount": {
            "state": true
        },
        "tradeFee": {
            "state": true
        },
        "tradePrice": {
            "state": true
        }
    }; }
    static get style() { return ".full {\n  width: 100%;\n}"; }
}

class Segment {
    constructor() {
        /*
         * If true, the user cannot interact with the segment. Defaults to `false`.
         */
        this.disabled = false;
    }
    valueChanged(value) {
        this.update();
        this.ionChange.emit({ value });
    }
    segmentClick(ev) {
        const selectedButton = ev.target;
        this.value = selectedButton.value;
    }
    componentDidLoad() {
        if (this.value === undefined) {
            const buttons = Array.from(this.el.querySelectorAll('ion-segment-button'));
            const checked = buttons.find(b => b.checked);
            if (checked) {
                this.value = checked.value;
            }
        }
        this.update();
    }
    update() {
        const value = this.value;
        const buttons = Array.from(this.el.querySelectorAll('ion-segment-button'));
        for (const button of buttons) {
            button.checked = (button.value === value);
        }
    }
    hostData() {
        return {
            class: {
                'segment-disabled': this.disabled
            }
        };
    }
    static get is() { return "ion-segment"; }
    static get host() { return {
        "theme": "segment"
    }; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled"
        },
        "el": {
            "elementRef": true
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "value": {
            "type": String,
            "attr": "value",
            "mutable": true,
            "watchCallbacks": ["valueChanged"]
        }
    }; }
    static get events() { return [{
            "name": "ionChange",
            "method": "ionChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "ionSelect",
            "method": "segmentClick"
        }]; }
    static get style() { return "ion-segment {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%; }\n\n.segment-md {\n  font-family: \"Roboto\", \"Helvetica Neue\", sans-serif; }\n\n.segment-md.segment-disabled {\n  opacity: 0.3;\n  pointer-events: none; }"; }
    static get styleMode() { return "md"; }
}

let ids = 0;
class SegmentButton {
    constructor() {
        /**
         * If true, the segment button is selected. Defaults to `false`.
         */
        this.checked = false;
        /*
         * If true, the user cannot interact with the segment button. Default false.
         */
        this.disabled = false;
        /**
         * The value of the segment button.
         */
        this.value = 'ion-sb-' + (ids++);
    }
    checkedChanged(checked, prev) {
        if (checked && !prev) {
            this.ionSelect.emit();
        }
    }
    render() {
        const themedClasses = createThemedClasses(this.mode, this.color, 'segment-button');
        const hostClasses = getElementClassMap(this.el.classList);
        const buttonClasses = Object.assign({ 'segment-button-disabled': this.disabled, 'segment-checked': this.checked }, themedClasses, hostClasses);
        const TagType = this.href ? 'a' : 'button';
        const attrs = (TagType === 'button')
            ? { type: 'button' }
            : {};
        return [
            h(TagType, Object.assign({}, attrs, { "aria-pressed": this.checked, class: buttonClasses, disabled: this.disabled, href: this.href, onClick: () => this.checked = true }),
                h("slot", null),
                this.mode === 'md' && h("ion-ripple-effect", { tapClick: true }))
        ];
    }
    static get is() { return "ion-segment-button"; }
    static get properties() { return {
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
            "attr": "disabled"
        },
        "el": {
            "elementRef": true
        },
        "href": {
            "type": String,
            "attr": "href"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "value": {
            "type": String,
            "attr": "value"
        }
    }; }
    static get events() { return [{
            "name": "ionSelect",
            "method": "ionSelect",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "ion-segment-button {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1; }\n\n.segment-button {\n  border-radius: 0;\n  margin-left: 0;\n  margin-right: 0;\n  text-align: center;\n  position: relative;\n  display: block;\n  overflow: hidden;\n  border: 0;\n  text-decoration: none;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: pointer;\n  -webkit-font-kerning: none;\n  font-kerning: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  contain: content; }\n  .segment-button:active, .segment-button:focus {\n    outline: none; }\n\n.segment-button-md {\n  padding: 0 6px;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  height: 42px;\n  border-bottom-width: 2px;\n  border-bottom-style: solid;\n  border-bottom-color: rgba(0, 0, 0, 0.1);\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 40px;\n  text-transform: uppercase;\n  color: var(--ion-toolbar-md-color-active, var(--ion-toolbar-color-active, #4a4a4a));\n  background-color: transparent;\n  opacity: 0.7;\n  -webkit-transition: 100ms all linear;\n  transition: 100ms all linear; }\n  .segment-button-md ion-icon {\n    font-size: 26px;\n    line-height: 40px; }\n  .segment-button-md.activated, .segment-button-md.segment-checked {\n    border-color: var(--ion-toolbar-md-color-active, var(--ion-toolbar-color-active, #4a4a4a));\n    opacity: 1; }\n\n.segment-md .segment-button-disabled {\n  opacity: 0.3;\n  pointer-events: none; }\n\n.segment-md-primary .segment-button {\n  color: var(--ion-color-md-primary, var(--ion-color-primary, #3880ff)); }\n  .segment-md-primary .segment-button.activated, .segment-md-primary .segment-button.segment-checked {\n    border-color: var(--ion-color-md-primary, var(--ion-color-primary, #3880ff));\n    color: var(--ion-color-md-primary, var(--ion-color-primary, #3880ff)); }\n\n.segment-md-secondary .segment-button {\n  color: var(--ion-color-md-secondary, var(--ion-color-secondary, #0cd1e8)); }\n  .segment-md-secondary .segment-button.activated, .segment-md-secondary .segment-button.segment-checked {\n    border-color: var(--ion-color-md-secondary, var(--ion-color-secondary, #0cd1e8));\n    color: var(--ion-color-md-secondary, var(--ion-color-secondary, #0cd1e8)); }\n\n.segment-md-tertiary .segment-button {\n  color: var(--ion-color-md-tertiary, var(--ion-color-tertiary, #7044ff)); }\n  .segment-md-tertiary .segment-button.activated, .segment-md-tertiary .segment-button.segment-checked {\n    border-color: var(--ion-color-md-tertiary, var(--ion-color-tertiary, #7044ff));\n    color: var(--ion-color-md-tertiary, var(--ion-color-tertiary, #7044ff)); }\n\n.segment-md-success .segment-button {\n  color: var(--ion-color-md-success, var(--ion-color-success, #10dc60)); }\n  .segment-md-success .segment-button.activated, .segment-md-success .segment-button.segment-checked {\n    border-color: var(--ion-color-md-success, var(--ion-color-success, #10dc60));\n    color: var(--ion-color-md-success, var(--ion-color-success, #10dc60)); }\n\n.segment-md-warning .segment-button {\n  color: var(--ion-color-md-warning, var(--ion-color-warning, #ffce00)); }\n  .segment-md-warning .segment-button.activated, .segment-md-warning .segment-button.segment-checked {\n    border-color: var(--ion-color-md-warning, var(--ion-color-warning, #ffce00));\n    color: var(--ion-color-md-warning, var(--ion-color-warning, #ffce00)); }\n\n.segment-md-danger .segment-button {\n  color: var(--ion-color-md-danger, var(--ion-color-danger, #f04141)); }\n  .segment-md-danger .segment-button.activated, .segment-md-danger .segment-button.segment-checked {\n    border-color: var(--ion-color-md-danger, var(--ion-color-danger, #f04141));\n    color: var(--ion-color-md-danger, var(--ion-color-danger, #f04141)); }\n\n.segment-md-light .segment-button {\n  color: var(--ion-color-md-light, var(--ion-color-light, #f4f5f8)); }\n  .segment-md-light .segment-button.activated, .segment-md-light .segment-button.segment-checked {\n    border-color: var(--ion-color-md-light, var(--ion-color-light, #f4f5f8));\n    color: var(--ion-color-md-light, var(--ion-color-light, #f4f5f8)); }\n\n.segment-md-medium .segment-button {\n  color: var(--ion-color-md-medium, var(--ion-color-medium, #989aa2)); }\n  .segment-md-medium .segment-button.activated, .segment-md-medium .segment-button.segment-checked {\n    border-color: var(--ion-color-md-medium, var(--ion-color-medium, #989aa2));\n    color: var(--ion-color-md-medium, var(--ion-color-medium, #989aa2)); }\n\n.segment-md-dark .segment-button {\n  color: var(--ion-color-md-dark, var(--ion-color-dark, #222428)); }\n  .segment-md-dark .segment-button.activated, .segment-md-dark .segment-button.segment-checked {\n    border-color: var(--ion-color-md-dark, var(--ion-color-dark, #222428));\n    color: var(--ion-color-md-dark, var(--ion-color-dark, #222428)); }"; }
    static get styleMode() { return "md"; }
}

export { AppTrade, Segment as IonSegment, SegmentButton as IonSegmentButton };
