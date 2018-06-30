/*! Built with http://stenciljs.com */
const { h } = window.App;

var TypeKeys;
(function (TypeKeys) {
    // Won't match anything
    TypeKeys["NULL"] = "NULL";
    TypeKeys["ERROR"] = "ERROR";
    TypeKeys["APP_SET_EXCHANGES"] = "APP_SET_EXCHANGES";
    TypeKeys["APP_SET_BASECURRENCY"] = "APP_SET_BASECURRENCY";
    TypeKeys["APP_SET_CURRENCIES"] = "APP_SET_CURRENCIES";
    TypeKeys["APP_SET_TICKERS"] = "APP_SET_TICKERS";
    TypeKeys["APP_SET_TOTALBALANCES"] = "APP_SET_TOTALBALANCES";
    TypeKeys["APP_SET_WALLETS"] = "APP_SET_WALLETS";
    TypeKeys["APP_SET_TOKEN"] = "APP_SET_TOKEN";
    TypeKeys["APP_SET_BALANCES"] = "APP_SET_BALANCES";
    TypeKeys["APP_SET_ORDERS"] = "APP_SET_ORDERS";
})(TypeKeys || (TypeKeys = {}));

const appSetExchanges = (data) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SET_EXCHANGES,
        data: data,
    });
};
const appSetBaseCurrency = (data) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SET_BASECURRENCY,
        data: data,
    });
};
const appSetCurrencies = (data) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SET_CURRENCIES,
        data: data,
    });
};
const appSetTickers = (data) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SET_TICKERS,
        data: data,
    });
};
const appSetTotalBalances = (data) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SET_TOTALBALANCES,
        data: data,
    });
};
const appSetWallets = (data) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SET_WALLETS,
        data: data,
    });
};
const appSetToken = (data) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SET_TOKEN,
        data: data,
    });
};
const appSetBalances = (data) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SET_BALANCES,
        data: data,
    });
};
const appSetTrades = (data) => async (dispatch, _getState) => {
    return dispatch({
        type: TypeKeys.APP_SET_ORDERS,
        data: data,
    });
};

export { appSetBaseCurrency as a, appSetWallets as b, appSetExchanges as c, appSetCurrencies as d, appSetTickers as e, appSetTotalBalances as f, appSetBalances as g, appSetTrades as h, appSetToken as i, TypeKeys as j };
