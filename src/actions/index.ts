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
  APP_SET_CONVERSIONRATES = 'APP_SET_CONVERSIONRATES',
  APP_SET_TICKER = 'APP_SET_TICKER',
}
