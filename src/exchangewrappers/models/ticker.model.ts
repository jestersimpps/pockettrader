import { Exchange } from './../enums/exchange.enum';

export class TickerDto {
  readonly exchange: Exchange;
  readonly symbol: string;
  readonly last: number;
  readonly ask: number;
  readonly askVolume: number;
  readonly bid: number;
  readonly base: string;
  readonly quote: string;
  readonly bidVolume: number;
  readonly percentage: number;
  readonly vwap: number;
  readonly change: number;
  readonly baseVolume: number;
  readonly quoteVolume: number;
  readonly high: number;
  readonly low: number;
  readonly timestamp: number;
  readonly fee: number;
  readonly info: any;
  history: { p: number; v: number; t: number }[];
}
