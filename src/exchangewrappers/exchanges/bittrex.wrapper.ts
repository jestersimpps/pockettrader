import { ApiWrapper } from '../api.wrapper';
import { OhlcRequest } from './../models/ohlcrequest.model';
import { NewOrderRequest } from './../models/neworderrequest.model';
import { OrderRequest } from './../models/orderrequest.model';
import { ClientCreds } from './../models/clientcreds.model';
import { Balance } from './../models/balance.model';
import { PairRequest } from './../models/pairrequest.model';
import { ExchangeId } from '../../services/exchange.service';

export class BittrexWrapper extends ApiWrapper {
  private exchangeName = ExchangeId.bittrex;
  private exchange = new this.ccxt.bittrex();

  constructor() {
    super();
    this.exchange.load_markets();
  }

  getTickers() {
    return this.ccxtGetTickers(this.exchange, this.exchangeName);
  }

  getTicker(symbol: string) {
    return this.ccxtGetTicker(this.exchange, this.exchange.markets[symbol], this.exchangeName, symbol);
  }

  getOrderbook(symbol: string) {
    return this.ccxtGetOrderbook(this.exchange, symbol);
  }

  getOhlc(ohlcRequest: OhlcRequest) {
    return this.ccxtGetOhlc(this.exchange, ohlcRequest);
  }

  newOrder(newOrder: NewOrderRequest) {
    return this.ccxtNewOrder(this.exchange, this.exchangeName, newOrder);
  }

  cancelOrder(orderRequest: OrderRequest) {
    return this.ccxtCancelOrder(this.exchange, this.exchangeName, orderRequest);
  }

  getOrder(orderRequest: OrderRequest) {
    return this.ccxtGetOrder(this.exchange, this.exchangeName, orderRequest);
  }

  getBalances(clientCreds: ClientCreds): Promise<Balance[]> {
    return this.ccxtGetBalances(this.exchange, clientCreds).then((data) => {
      const balances = [];
      data.info.forEach((currency) => {
        balances.push({
          balance: currency.Balance,
          available: currency.Available,
          pending: currency.Pending,
          currency: currency.Currency,
          cryptoAddress: currency.CryptoAddress,
        });
      });
      return balances;
    });
  }

  getOrderHistory(pairRequest: PairRequest) {
    return this.ccxtGetOrderHistory(this.exchange, this.exchangeName, pairRequest);
  }

  getOpenOrders(pairRequest: PairRequest) {
    return this.ccxtGetOpenOrders(this.exchange, this.exchangeName, pairRequest);
  }

  getClosedOrders(pairRequest: PairRequest) {
    return this.ccxtGetClosedOrders(this.exchange, this.exchangeName, pairRequest);
  }
}
