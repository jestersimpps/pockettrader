var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/*! Built with http://stenciljs.com */
App.loadBundle("chunk-4524eef2.js", ["exports"], function (E) {
    var _this = this;
    var e;
    window.App.h, (e = E.TypeKeys || (E.TypeKeys = {})).NULL = "NULL", e.ERROR = "ERROR", e.APP_SET_EXCHANGES = "APP_SET_EXCHANGES", e.APP_SET_BASECURRENCY = "APP_SET_BASECURRENCY", e.APP_SET_CURRENCIES = "APP_SET_CURRENCIES", e.APP_SET_TICKERS = "APP_SET_TICKERS", e.APP_SET_TOTALBALANCES = "APP_SET_TOTALBALANCES", e.APP_SET_WALLETS = "APP_SET_WALLETS", e.APP_SET_TOKEN = "APP_SET_TOKEN", e.APP_SET_BALANCES = "APP_SET_BALANCES", E.appSetBaseCurrency = (function (e) { return function (S, T) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, S({ type: E.TypeKeys.APP_SET_BASECURRENCY, data: e })];
    }); }); }; }), E.appSetWallets = (function (e) { return function (S, T) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, S({ type: E.TypeKeys.APP_SET_WALLETS, data: e })];
    }); }); }; }), E.appSetExchanges = (function (e) { return function (S, T) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, S({ type: E.TypeKeys.APP_SET_EXCHANGES, data: e })];
    }); }); }; }), E.appSetCurrencies = (function (e) { return function (S, T) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, S({ type: E.TypeKeys.APP_SET_CURRENCIES, data: e })];
    }); }); }; }), E.appSetTickers = (function (e) { return function (S, T) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, S({ type: E.TypeKeys.APP_SET_TICKERS, data: e })];
    }); }); }; }), E.appSetTotalBalances = (function (e) { return function (S, T) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, S({ type: E.TypeKeys.APP_SET_TOTALBALANCES, data: e })];
    }); }); }; }), E.appSetBalances = (function (e) { return function (S, T) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, S({ type: E.TypeKeys.APP_SET_BALANCES, data: e })];
    }); }); }; }), E.appSetToken = (function (e) { return function (S, T) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, S({ type: E.TypeKeys.APP_SET_TOKEN, data: e })];
    }); }); }; });
});
