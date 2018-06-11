import { BtcPrice } from './../services/currency.service';
import { TypeKeys, ActionTypes } from '../actions/index';
import { Exchange } from '../services/exchange.service';
import { EXCHANGESERVICE, CURRENCYSERVICE } from '../services/globals';
import { Currency } from '../services/currency.service';
import { Ticker } from '../services/ticker.service';

interface AppState {
  exchanges: Exchange[];
  baseCurrency: Currency;
  totalBalances: [number, number][];
  conversionRates: BtcPrice;
  ticker: any;
  tickers: Ticker[];
}

const getInitialState = () => {
  return {
    exchanges: [],
    baseCurrency: Currency.mbtc,
    totalBalances: [],
    conversionRates: <BtcPrice>{},
    ticker: {},
    tickers: [],
  };
};

const app = (state: AppState = getInitialState(), action: ActionTypes) => {
  switch (action.type) {
    case TypeKeys.APP_SET_EXCHANGES: {
      EXCHANGESERVICE.setExchanges(action.data);
      return { ...state, exchanges: action.data };
    }
    case TypeKeys.APP_SET_BASECURRENCY: {
      CURRENCYSERVICE.setBaseCurrency(action.data);
      return { ...state, baseCurrency: action.data };
    }
    case TypeKeys.APP_SET_CONVERSIONRATES: {
      return { ...state, conversionRates: action.data };
    }
    case TypeKeys.APP_SET_TICKER: {
      return { ...state, ticker: action.data };
    }
    case TypeKeys.APP_SET_TICKERS: {
      return { ...state, tickers: action.data };
    }
  }

  return state;
};

export default app;
