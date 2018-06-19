import { AppAction } from './app';

export interface NullAction {
  type: TypeKeys.NULL;
}

// Keep this type updated with each known action
export type ActionTypes = NullAction | AppAction;

export enum TypeKeys {
  // Won't match anything
  NULL = 'NULL',
  ERROR = 'ERROR',
  APP_SET_EXCHANGES = 'APP_SET_EXCHANGES',
  APP_SET_BASECURRENCY = 'APP_SET_BASECURRENCY',
  APP_SET_CURRENCIES = 'APP_SET_CURRENCIES',
  APP_SET_TICKERS = 'APP_SET_TICKERS',
  APP_SET_TOTALBALANCES = 'APP_SET_TOTALBALANCES',
  APP_SET_WALLETS = 'APP_SET_WALLETS',
}
