import { TypeKeys } from '../actions/index';

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
