import { TypeKeys } from '../actions/index';
import { Ticker } from '../services/ticker.service';
export interface AppAction {
  type: TypeKeys;
  data: any;
}

export const appSetExchanges = (data: any) => async (dispatch, _getState) => {
  return dispatch({
    type: TypeKeys.APP_SET_EXCHANGES,
    data: data,
  });
};
export const appSetBaseCurrency = (data: any) => async (dispatch, _getState) => {
  return dispatch({
    type: TypeKeys.APP_SET_BASECURRENCY,
    data: data,
  });
};
export const appSetConversionRates = (data: any) => async (dispatch, _getState) => {
  return dispatch({
    type: TypeKeys.APP_SET_CONVERSIONRATES,
    data: data,
  });
};
export const appSetTicker = (data: any) => async (dispatch, _getState) => {
  return dispatch({
    type: TypeKeys.APP_SET_TICKER,
    data: data,
  });
};
export const appSetTickers = (data: Ticker[]) => async (dispatch, _getState) => {
  return dispatch({
    type: TypeKeys.APP_SET_TICKERS,
    data: data,
  });
};
export const appSetTotalBalances = (data: any) => async (dispatch, _getState) => {
  return dispatch({
    type: TypeKeys.APP_SET_TOTALBALANCES,
    data: data,
  });
};
