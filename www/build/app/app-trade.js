/*! Built with http://stenciljs.com */
const { h } = window.App;

import { b as TICKERSERVICE, e as TRADESERVICE } from './chunk-76b301d8.js';
import { a as numeral } from './chunk-374e99fd.js';
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
        if (this.tickers.length) {
            this.pairs = this.tickers[0].tickers.sort((a, b) => {
                var textA = a.symbol.toUpperCase();
                var textB = b.symbol.toUpperCase();
                return textA < textB ? -1 : textA > textB ? 1 : 0;
            });
            this.exchangeId = this.tickers[0].exchangeId;
            this.getNewTicker(this.exchangeId, this.pairs[0].symbol);
        }
    }
    exchangeSelected(e) {
        this.exchangeId = e.target.value;
        this.pairs = this.tickers.find((t) => t.exchangeId === e.target.value).tickers.sort((a, b) => {
            var textA = a.symbol.toUpperCase();
            var textB = b.symbol.toUpperCase();
            return textA < textB ? -1 : textA > textB ? 1 : 0;
        });
        this.getNewTicker(this.exchangeId, this.pairs[0].symbol);
    }
    pairSelected(e) {
        this.getNewTicker(this.exchangeId, e.target.value);
    }
    getBalances(quote, base) {
        let exchange = this.exchanges.find((e) => e.id === this.exchangeId);
        let quoteBalance = exchange.balances.find((b) => b.symbol === quote);
        let baseBalance = exchange.balances.find((b) => b.symbol === base);
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
        return `0,0.${zeros.join('')}`;
    }
    getPriceFormat() {
        let zeros = [];
        for (let index = 0; index < this.ticker.info.precision.price; index++) {
            zeros.push(`0`);
        }
        return `0,0.${zeros.join('')}`;
    }
    getNewTicker(exchangeId, symbol) {
        this.isLoading = true;
        TICKERSERVICE.getTicker(exchangeId, symbol).then((response) => {
            this.ticker = response.data;
            this.tradePrice = +response.data.last;
            this.getBalances(response.data.quote, response.data.base);
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
        switch (this.tradeAction) {
            case OrderType.LIMITBUY:
            case OrderType.MARKETBUY:
                this.tradeAmount = (this.quoteBalance * percentage - this.quoteBalance * percentage * this.ticker.info.taker) / this.tradePrice;
                break;
            case OrderType.LIMITSELL:
            case OrderType.MARKETSELL:
                this.tradeAmount = this.baseBalance * percentage - this.baseBalance * percentage * this.ticker.info.taker;
                break;
            default:
                break;
        }
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
                        h("ion-label", null, "Select Exchange"),
                        h("select", { onChange: (e) => this.exchangeSelected(e) }, this.exchanges.filter((e) => e.key && e.secret).map((e) => h("option", { value: e.id }, e.id)))),
                    h("ion-item", { lines: "none" },
                        h("ion-label", null, "Select Pair"),
                        h("select", { onChange: (e) => this.pairSelected(e) }, this.pairs.map((p) => h("option", { value: p.symbol }, p.symbol)))),
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
                            h("ion-input", { slot: "end", name: "price", type: "number", value: `${this.tradeAmount}`, onInput: (e) => this.setTradeAmount(e) })),
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
                                numeral(+this.ticker.info.taker * +this.tradeAmount * +this.tradePrice).format(this.getAmountFormat()),
                                " ",
                                this.ticker.quote)),
                        h("ion-item", { lines: "none" },
                            h("ion-label", null, "Total"),
                            h("ion-label", { slot: "end", "text-right": true },
                                numeral(+this.tradeAmount * +this.tradePrice - +this.ticker.info.taker * +this.tradeAmount * +this.tradePrice).format(this.getAmountFormat()),
                                ' ',
                                this.ticker.quote)),
                        h("ion-button", { expand: "block", color: "success", onClick: () => this.executeOrder(this.ticker.symbol, this.tradeAction, this.tradePrice, this.tradeAmount) }, "Execute"))))),
        ];
    }
    executeOrder(pair, type, price, amount) {
        console.log(pair, type, price, amount);
        let exchange = this.exchanges.find((e) => e.id === this.exchangeId);
        TRADESERVICE.newOrder(exchange, {
            pair: pair,
            type: type,
            price: price,
            amount: numeral(amount).format(this.getAmountFormat()),
            clientCreds: {
                key: exchange.key,
                secret: exchange.secret,
            },
        }).then((response) => {
            console.log(response);
        });
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
        "tradePrice": {
            "state": true
        }
    }; }
    static get style() { return ".full {\n  width: 100%;\n}"; }
}

export { AppTrade };
