import { BALANCESERVICE } from './../services/globals';
import { ConversionRates } from './../services/currency.service';
import { TypeKeys, ActionTypes } from '../actions/index';
import { Exchange } from '../services/exchange.service';
import { EXCHANGESERVICE, CURRENCYSERVICE, TICKERSERVICE, WALLETSERVICE } from '../services/globals';
import { Currency } from '../services/currency.service';
import { Ticker } from '../services/ticker.service';
import { Wallet } from '../services/wallets.service';

interface AppState {
  exchanges: Exchange[];
  baseCurrency: Currency;
  totalBalances: [number, number][];
  conversionRates: ConversionRates;
  ticker: any;
  tickers: Ticker[];
  wallets: Wallet[];
}

const getInitialState = () => {
  return {
    exchanges: [],
    baseCurrency: Currency.mbtc,
    totalBalances: [],
    conversionRates: <ConversionRates>{},
    ticker: {},
    tickers: [],
    wallets: [],
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
      TICKERSERVICE.setTickers(action.data);
      return { ...state, tickers: action.data };
    }
    case TypeKeys.APP_SET_TOTALBALANCES: {
      BALANCESERVICE.setTotalBalances(action.data);
      return { ...state, totalBalances: action.data };
    }
    case TypeKeys.APP_SET_WALLETS: {
      WALLETSERVICE.setWallets(action.data);
      return { ...state, wallets: action.data };
    }
  }

  return state;
};

export default app;
