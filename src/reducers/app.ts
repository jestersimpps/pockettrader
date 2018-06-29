import { Order } from './../services/trade.service';
import { BALANCESERVICE, TOKENSERVICE, TRADESERVICE } from './../services/globals';
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
  currencies: Currency[];
  tickers: Ticker[];
  wallets: Wallet[];
  token: string;
  balances: {
    overview: number;
    exchanges: number;
    wallets: number;
  };
  orders: Order[];
}

const getInitialState = () => {
  return {
    exchanges: [],
    baseCurrency: CURRENCYSERVICE.currencies[0],
    totalBalances: [],
    currencies: <Currency[]>[],
    tickers: [],
    wallets: [],
    token: null,
    balances: null,
    orders: [],
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
    case TypeKeys.APP_SET_CURRENCIES: {
      return { ...state, conversionRates: action.data };
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
    case TypeKeys.APP_SET_TOKEN: {
      TOKENSERVICE.setToken(action.data);
      return { ...state, token: action.data };
    }
    case TypeKeys.APP_SET_BALANCES: {
      BALANCESERVICE.setBalances(action.data);
      return { ...state, balances: action.data };
    }
    case TypeKeys.APP_SET_ORDERS: {
      TRADESERVICE.setOrders(action.data);
      return { ...state, orders: action.data };
    }
  }

  return state;
};

export default app;
