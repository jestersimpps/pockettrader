import { OhlcRequest } from './models/ohlcrequest.model';
import { NewOrderRequest } from './models/neworderrequest.model';
import { OrderRequest } from './models/orderrequest.model';
import { ClientCreds } from './models/clientcreds.model';
import { PairRequest } from './models/pairrequest.model';
import { OrderData } from './models/orderdata.model';
import { OrderStatus } from './enums/orderstatus.enum';
import { OrderType } from './enums/ordertype.enum';
import { ExchangeId } from '../services/exchange.service';
declare const ccxt;

export class ApiWrapper {
  ccxt = ccxt;

  // PUBLIC API

  ccxtGetTickers(exchange, exchangeName: ExchangeId): Promise<any> {
    if (exchange.has['fetchTicker']) {
      return exchange
        .fetchTickers()
        .then((tickers) => {
          const t = [];
          Object.keys(tickers).forEach((key) => {
            tickers[key].exchange = exchangeName;
            this.cleanTicker(tickers[key]);
            t.push(tickers[key]);
          });
          return t;
        })
        .catch((error) => {
          throw error;
        });
    } else {
      console.error('not Implemented');
    }
  }

  ccxtGetTicker(exchange, info, exchangeName: ExchangeId, symbol: string): Promise<any> {
    if (exchange.has['fetchTicker']) {
      return exchange
        .fetchTicker(symbol)
        .then((ticker) => {
          ticker.exchange = exchangeName;
          this.cleanTicker(ticker);
          ticker.info = info;
          return ticker;
        })
        .catch((error) => {
          throw error;
        });
    } else {
      console.error('not Implemented');
    }
  }

  ccxtGetOrderbook(exchange, symbol: string): Promise<any> {
    if (exchange.has['fetchOrderBook']) {
      return exchange
        .fetchOrderBook(symbol)
        .then((orders) => {
          return orders;
        })
        .catch((error) => {
          throw error;
        });
    } else {
      console.error('not Implemented');
    }
  }

  ccxtGetOhlc(exchange, ohlcRequest: OhlcRequest) {
    if (exchange.has['fetchOHLCV']) {
      return exchange
        .fetchOHLCV(ohlcRequest.symbol || undefined, ohlcRequest.timeframe, ohlcRequest.since || undefined, ohlcRequest.limit || undefined)
        .then((ohlc) => {
          return ohlc;
        })
        .catch((error) => {
          throw error;
        });
    } else {
      console.error('not Implemented');
    }
  }

  // AUTH API

  ccxtNewOrder(exchange, exchangeName: ExchangeId, newOrder: NewOrderRequest): Promise<any> {
    exchange.apiKey = newOrder.clientCreds.key;
    exchange.secret = newOrder.clientCreds.secret;
    switch (newOrder.type) {
      case OrderType.LIMITBUY:
        return exchange
          .createLimitBuyOrder(newOrder.pair, newOrder.amount, newOrder.price)
          .then((order) => {
            order.exchange = exchangeName;
            this.cleanOrder(order);
            return order;
          })
          .catch((error) => {
            throw error;
          });
      case OrderType.LIMITSELL:
        return exchange
          .createLimitSellOrder(newOrder.pair, newOrder.amount, newOrder.price)
          .then((order) => {
            order.exchange = exchangeName;
            this.cleanOrder(order);
            return order;
          })
          .catch((error) => {
            throw error;
          });
      default:
        console.error('not Implemented');
    }
  }

  ccxtCancelOrder(exchange, exchangeName: ExchangeId, orderRequest: OrderRequest): Promise<any> {
    if (exchange.has['cancelOrder']) {
      exchange.apiKey = orderRequest.clientCreds.key;
      exchange.secret = orderRequest.clientCreds.secret;
      return exchange
        .cancelOrder(orderRequest.orderId, orderRequest.pair)
        .then((order) => {
          order.exchange = exchangeName;
          this.cleanOrder(order);
          return order;
        })
        .catch((error) => {
          throw error;
        });
    } else {
      console.error('not Implemented');
    }
  }

  ccxtGetOrder(exchange, exchangeName: ExchangeId, orderRequest: OrderRequest): Promise<any> {
    if (exchange.has['fetchOrder']) {
      exchange.apiKey = orderRequest.clientCreds.key;
      exchange.secret = orderRequest.clientCreds.secret;
      //  you can use the params argument for custom overrides
      return exchange
        .fetchOrder(orderRequest.orderId, orderRequest.pair || undefined)
        .then((order) => {
          order.exchange = exchangeName;
          this.cleanOrder(order);
          return order;
        })
        .catch((error) => {
          throw error;
        });
    } else {
      console.error('not Implemented');
    }
  }

  ccxtGetBalances(exchange, clientCreds: ClientCreds): Promise<any> {
    if (exchange.has['fetchBalance']) {
      exchange.apiKey = clientCreds.key;
      exchange.secret = clientCreds.secret;
      return exchange
        .fetchBalance()
        .then((balances) => {
          return balances;
        })
        .catch((error) => {
          throw error;
        });
    } else {
      console.error('not Implemented');
    }
  }

  ccxtGetOrderHistory(exchange, exchangeName: ExchangeId, pairRequest: PairRequest): Promise<any> {
    if (exchange.has['fetchOrders']) {
      exchange.apiKey = pairRequest.clientCreds.key;
      exchange.secret = pairRequest.clientCreds.secret;
      return exchange
        .fetchOrders(pairRequest.pair || undefined, pairRequest.since || undefined, pairRequest.limit || undefined, {})
        .then((orders) => {
          orders.forEach((order) => {
            order.exchange = exchangeName;
            this.cleanOrder(order);
          });
          return orders;
        })
        .catch((error) => {
          throw error;
        });
    } else {
      console.error('not Implemented');
    }
  }

  ccxtGetOpenOrders(exchange, exchangeName: ExchangeId, pairRequest: PairRequest): Promise<any> {
    if (exchange.has['fetchOpenOrders']) {
      exchange.apiKey = pairRequest.clientCreds.key;
      exchange.secret = pairRequest.clientCreds.secret;
      return exchange
        .fetchOpenOrders(pairRequest.pair || undefined, pairRequest.since || undefined, pairRequest.limit || undefined, {})
        .then((orders) => {
          orders.forEach((order) => {
            order.exchange = exchangeName;
            this.cleanOrder(order);
          });
          return orders;
        })
        .catch((error) => {
          throw error;
        });
    } else {
      console.error('not Implemented');
    }
  }

  ccxtGetClosedOrders(exchange, exchangeName: ExchangeId, pairRequest: PairRequest): Promise<any> {
    if (exchange.has['fetchClosedOrders']) {
      exchange.apiKey = pairRequest.clientCreds.key;
      exchange.secret = pairRequest.clientCreds.secret;
      return exchange
        .fetchClosedOrders(pairRequest.pair || undefined, pairRequest.since || undefined, pairRequest.limit || undefined, {})
        .then((orders) => {
          orders.forEach((order) => {
            order.exchange = exchangeName;
            this.cleanOrder(order);
          });
          return orders;
        })
        .catch((error) => {
          throw error;
        });
    } else {
      console.error('not Implemented');
    }
  }

  private cleanOrder(order: OrderData) {
    Object.keys(order).forEach((key) => {
      if (key.indexOf('imestamp') > -1) {
        order.timestamp = order[key];
        delete order[key];
      }
      if (key.indexOf('datetime') > -1) {
        order.timestamp = new Date(order[key]).getTime() / 1000;
        delete order[key];
      }
    });
    delete order.info;
    // status
    switch (order.side) {
      case 'buy':
        if (order.status === 'closed') {
          order.status = OrderStatus.filled;
        }
        if (order.remaining > 0 && (order.status === 'canceled' || order.status === 'cancelled')) {
          order.status = OrderStatus.filled;
        }
        break;
      case 'sell':
        order.status = OrderStatus.closed;
        if (order.remaining > 0 && (order.status === 'canceled' || order.status === 'cancelled')) {
          order.status = OrderStatus.closed;
        }
        break;
      default:
        break;
    }
  }

  private cleanTicker(ticker) {
    delete ticker.info;
    if (ticker.symbol) {
      ticker.base = ticker.symbol.split('/')[0];
      ticker.quote = ticker.symbol.split('/')[1];
    }
    const first = +ticker.open;
    const Increase = +ticker.last - first;
    if (!ticker.percentage) {
      ticker.percentage = (Increase / first) * 100;
    }
    if (!ticker.change) {
      ticker.change = +ticker.last - first;
    }
  }
}
