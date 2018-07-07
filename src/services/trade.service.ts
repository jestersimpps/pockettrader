import { STORAGE } from './storage';
import { ExchangeId, Exchange } from './exchange.service';
import { NewOrderRequest } from '../exchangewrappers/models/neworderrequest.model';

declare const axios;

export class Order {
  exchangeId: ExchangeId;
  pair: string;
  type: OrderType;
  status?: OrderStatus | string;
  orderId?: string;
  openPrice: number;
  closePrice: number;
  amount: number;
  filled: number;
  base: string;
  quote: string;
  last: number;
  remaining: number;
  fee?: number;
  createdAt?: number;
  updatedAt?: number;
}

export enum OrderType {
  LIMITSELL = 'LIMITSELL',
  LIMITBUY = 'LIMITBUY',
  MARKETSELL = 'MARKETSELL',
  MARKETBUY = 'MARKETBUY',
  CANCEL = 'CANCEL',
}

export enum OrderStatus {
  open = 'open',
  filled = 'filled',
  cancelled = 'cancelled',
  closed = 'closed',
  failed = 'failed',
}

export class TradeService {
  getOrdersFromStorage() {
    return STORAGE.get('orders');
  }

  setOrders(orders: Order[]): void {
    return STORAGE.set('orders', orders);
  }

  newOrder(exchange: Exchange, newOrder: NewOrderRequest) {
    return axios.post(`https://lightningassets.com/exchangeapi/${exchange.id}/orders/create`, newOrder);
  }

  getOrder(exchange: Exchange, orderId: string, pair: string) {
    return axios.post(`https://lightningassets.com/exchangeapi/${exchange.id}/orders/get`, {
      pair: pair,
      orderId: orderId,
      clientCreds: {
        key: exchange.key,
        secret: exchange.secret,
      },
    });
  }

  cancelOrder(exchange: Exchange, orderId: string, pair: string) {
    return axios.post(`https://lightningassets.com/exchangeapi/${exchange.id}/orders/cancel`, {
      pair: pair,
      orderId: orderId,
      clientCreds: {
        key: exchange.key,
        secret: exchange.secret,
      },
    });
  }

  getOhlc(exchangeId: ExchangeId, symbol: string, timeFrame = '1h') {
    return axios.get(`https://lightningassets.com/exchangeapi/${exchangeId}/ticker/ohlc?symbol=${symbol}&timeframe=${timeFrame}`);
  }
}
