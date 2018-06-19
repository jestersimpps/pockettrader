import { OrderType } from './../enums/ordertype.enum';
import { Exchange } from './../enums/exchange.enum';
import { OrderStatus } from '../enums/orderstatus.enum';

export class OrderData {
  exchange: Exchange;
  pair: string;
  type: OrderType;
  status?: OrderStatus | string;
  orderId?: string;
  investorId: string;
  batchId: number;
  openPrice: number;
  closePrice: number;
  openTotal?: number;
  closeTotal?: number;
  curTotal?: number;
  curPrice?: number;
  amount: number;
  profitLoss?: number;
  investorName: string;
  fee?: number;
  orderNotes?: string;
  createdAt?: number;
  updatedAt?: number;
  timestamp?: number;
  info?: any;
  side?: string;
  remaining?: number;
}
