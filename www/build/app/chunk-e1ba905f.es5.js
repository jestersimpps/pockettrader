/*! Built with http://stenciljs.com */
App.loadBundle("chunk-e1ba905f.js", ["exports", "./chunk-cd16bb21.js"], function (e, t) { window.App.h; var a = new /** @class */ (function () {
    function class_1() {
        this.currencies = [{ id: "mBTC", symbol: "mBTC", conversionRate: 1e3 }, { id: "BTC", symbol: "BTC", conversionRate: 1 }, { id: "EUR", symbol: "€", conversionRate: null }, { id: "USD", symbol: "$", conversionRate: null }, { id: "GBP", symbol: "£", conversionRate: null }];
    }
    class_1.prototype.getBaseCurrency = function () { return t.STORAGE.get("basecurrency"); };
    class_1.prototype.getConversionRates = function () {
        var _this = this;
        return axios.get("https://api.coindesk.com/v1/bpi/currentprice.json").then(function (e) { return _this.currencies.map(function (t) { switch (t.id) {
            case "USD":
                t.conversionRate = +e.data.bpi.USD.rate_float;
                break;
            case "EUR":
                t.conversionRate = +e.data.bpi.EUR.rate_float;
                break;
            case "GBP": t.conversionRate = +e.data.bpi.GBP.rate_float;
        } }), t.STORAGE.set("currencies", _this.currencies), _this.currencies; });
    };
    class_1.prototype.setBaseCurrency = function (e) { t.STORAGE.set("basecurrency", e); };
    class_1.prototype.convertToBase = function (e, t) { return e * this.currencies.find(function (e) { return e.id === t.id; }).conversionRate; };
    class_1.prototype.getBaseTotal = function (e, t) { var a = 0; return e.forEach(function (e) { a += e.btcAmount; }), this.convertToBase(a, t); };
    return class_1;
}()), n = new /** @class */ (function () {
    function class_2() {
    }
    class_2.prototype.getTotalBalances = function () { return t.STORAGE.get("totalbalances"); };
    class_2.prototype.getBalancesFromStore = function () { return t.STORAGE.get("balances"); };
    class_2.prototype.getLatestTotal = function (e) { return e.length ? e[e.length - 1][1] : 0; };
    class_2.prototype.setTotalBalances = function (e) { t.STORAGE.set("totalbalances", e); };
    class_2.prototype.setBalances = function (e) { t.STORAGE.set("balances", e); };
    class_2.prototype.getBalances = function (e) { return axios.post("https://lightningassets.com/exchangeapi/" + e.id + "/balances/get", { key: e.key, secret: e.secret }); };
    class_2.prototype.refreshBalances = function (e, t) {
        var _this = this;
        var r = [], c = [], l = [], o = [], i = [], u = e.filter(function (e) { return e.balance > 0; }), g = t.filter(function (e) { return e.key && e.secret; });
        g.forEach(function (e) { r.push(e.id), c.push(s.getTickers(e.id)), l.push(n.getBalances(e)); }), u.forEach(function (e) { return o.push(s.getCoinmarketcapTicker(e.id)); });
        var h = { conversionrates: null, tickers: null, wallets: null, exchanges: null, exchangeTotal: 0, walletTotal: 0 };
        return a.getConversionRates().then(function (e) { return h.conversionrates = e, Promise.all(c).then(function (e) { return Promise.all(o).then(function (a) { return Promise.all(l).then(function (n) { var _loop_1 = function (t_1) {
            i[t_1] = { exchangeId: r[t_1], tickers: e[t_1].data }, g[t_1].balances = n[t_1].data.map(function (a) { var n = _this.getBtcStats(a, e[t_1].data); return h.exchangeTotal += n.amount, { btcAmount: n.amount, balance: a.balance, pending: a.pending, available: a.available, symbol: a.currency, btcPrice: n.price, change: n.change }; }).filter(function (e) { return +e.btcAmount > 2e-6; });
        }; for (var t_1 = 0; t_1 < r.length; t_1++) {
            _loop_1(t_1);
        } for (var e_1 = 0; e_1 < u.length; e_1++)
            u[e_1].btcPrice = +a[e_1].data.data.quotes.BTC.price, u[e_1].btcAmount = +u[e_1].balance * +a[e_1].data.data.quotes.BTC.price, u[e_1].change = +a[e_1].data.data.quotes.BTC.percent_change_24h, h.walletTotal += +u[e_1].balance * +a[e_1].data.data.quotes.BTC.price; return h.tickers = i, h.wallets = u, h.exchanges = t.map(function (e) { return g.find(function (t) { return t.id === e.id; }) || e; }), h; }).catch(function (e) { return window.alert(e.message), null; }); }).catch(function (e) { return window.alert(e.message), null; }); }).catch(function (e) { return window.alert(e.message), null; }); }).catch(function (e) { return window.alert(e.message), null; });
    };
    class_2.prototype.getBtcStats = function (e, t) { var a = { price: 0, amount: 0, change: 0, last: 0 }; var n = t.find(function (t) { return t.symbol === e.currency + "/BTC"; }), r = t.find(function (t) { return t.symbol === "BTC/" + e.currency; }); return "BTC" === e.currency && (a.amount = e.balance, a.price = 1), n && (a.amount = e.balance * n.last, a.price = n.last, a.change = n.percentage), r && (a.amount = e.balance / r.last, a.price = 1 / r.last, a.change = r.percentage), a; };
    return class_2;
}()), r = new t.ExchangeService, s = new /** @class */ (function () {
    function class_3() {
    }
    class_3.prototype.getTickersFromStore = function () { return t.STORAGE.get("tickers"); };
    class_3.prototype.setTickers = function (e) { return t.STORAGE.set("tickers", e); };
    class_3.prototype.getTickers = function (e) { return axios.get("https://lightningassets.com/exchangeapi/" + e + "/tickers"); };
    class_3.prototype.getTicker = function (e, t) { return axios.get("https://lightningassets.com/exchangeapi/" + e + "/ticker/data?symbol=" + t); };
    class_3.prototype.getCoinmarketcapTicker = function (e) { return axios.get("https://api.coinmarketcap.com/v2/ticker/" + e + "/?convert=BTC"); };
    return class_3;
}()), c = new /** @class */ (function () {
    function class_4() {
    }
    class_4.prototype.getWalletsFromStorage = function () { return t.STORAGE.get("wallets"); };
    class_4.prototype.setWallets = function (e) { return t.STORAGE.set("wallets", e); };
    class_4.prototype.getCoinmarketCapListings = function () { return axios.get("https://api.coinmarketcap.com/v2/listings/"); };
    return class_4;
}()), l = new /** @class */ (function () {
    function class_5() {
    }
    class_5.prototype.getTokenFromStore = function () { return t.STORAGE.get("token"); };
    class_5.prototype.setToken = function (e) { return t.STORAGE.set("token", e); };
    class_5.prototype.generateNewToken = function () { var e = (new Date).getTime(); return new Hashids("token-" + e, 8).encode(1, 2, 3); };
    return class_5;
}()); e.CURRENCYSERVICE = a, e.TICKERSERVICE = s, e.BALANCESERVICE = n, e.TOKENSERVICE = l, e.EXCHANGESERVICE = r, e.WALLETSERVICE = c; });
