import { Balance } from './../models/balance.model';
import { Exchange } from './../enums/exchange.enum';

export class Investor {
  readonly _id: string;
  readonly name: string;
  readonly trader_id?: string;
  readonly tradeKey?: string;
  readonly tradeSecret?: string;
  readonly email: string;
  readonly phone: string;
  chart?: any;
  available?: number;
  btcvalue?: number;
  usdvalue?: number;
  eurvalue?: number;
  gbpvalue?: number;
  currency?: string;
  status?: string;
  group?: string;
  balances?: Balance[];
  readonly exchange: Exchange;
  readonly createdAt?: string;
  readonly updatedAt?: number;
}
