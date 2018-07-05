import { Component, Prop, State } from '@stencil/core';
import { Store, Action } from '@stencil/redux';
import { Exchange, ExchangeId } from '../../services/exchange.service';
import { Ticker } from '../../services/ticker.service';
import { TICKERSERVICE, BALANCESERVICE, TRADESERVICE } from '../../services/globals';
import numeral from 'numeral';
import { appSetOrders } from '../../actions/app';
import { Balance } from '../../services/balance.service';
import { Order, OrderStatus, OrderType } from '../../services/trade.service';

@Component({
  tag: 'app-trade',
  styleUrl: 'app-trade.css',
})
export class AppTrade {
  @Prop({ context: 'store' })
  store: Store;
  @State() exchanges: Exchange[];
  @State() tickers: Ticker[];
  @State() pairs: any[] = [];
  @State() exchangeId: ExchangeId;
  @State() ticker: any;
  @State() orders: Order[];
  @State() isLoading = false;

  @State() tradePrice = 0;
  @State() tradeAmount = 0;
  @State() tradeAction = OrderType.LIMITBUY;
  @State() baseBalance = 0;
  @State() quoteBalance = 0;
  @State() tradeFee = 0;
  @State() segment = 0;
  @State() step = 0;
  @State() selectedExchange: ExchangeId;

  appSetOrders: Action;

  componentWillLoad() {
    this.store.mapStateToProps(this, (state) => {
      const {
        app: { exchanges, baseCurrency, currencies, tickers, wallets, orders },
      } = state;
      return {
        exchanges,
        baseCurrency,
        currencies,
        tickers,
        wallets,
        orders,
      };
    });
    this.store.mapDispatchToProps(this, {
      appSetOrders,
    });
    if (this.tickers.length) {
      this.pairs = this.tickers[0].tickers.sort((a, b) => {
        let textA = '';
        let textB = '1';
        if (a.symbol && b.symbol) {
          textA = a.symbol.toUpperCase();
          textB = b.symbol.toUpperCase();
        }
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
      this.exchangeId = this.tickers[0].exchangeId;
      this.selectedExchange = this.tickers[0].exchangeId;
      this.getNewTicker(this.exchangeId, this.pairs[0].symbol);
    }
  }

  exchangeSelected(e) {
    this.exchangeId = e.target.value;
    this.selectedExchange = e.target.value;
    this.pairs = this.tickers.find((t) => t.exchangeId === e.target.value).tickers.sort((a, b) => {
      let textA = '';
      let textB = '1';
      if (a.symbol && b.symbol) {
        textA = a.symbol.toUpperCase();
        textB = b.symbol.toUpperCase();
      }
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
    this.getNewTicker(this.exchangeId, this.pairs[0].symbol);
  }

  pairSelected(exchangeId: ExchangeId, pair: string) {
    this.getNewTicker(exchangeId, pair);
  }

  getBalances(quote: string, base: string) {
    let exchange = this.exchanges.find((e) => e.id === this.exchangeId);
    let quoteBalance = exchange.balances.find((b) => b.currency === quote);
    let baseBalance = exchange.balances.find((b) => b.currency === base);
    this.quoteBalance = 0;
    this.baseBalance = 0;
    if (quoteBalance) {
      this.quoteBalance = quoteBalance.available;
    }
    if (baseBalance) {
      this.baseBalance = baseBalance.available;
    }
  }

  setPriceWithButtons(button: string) {
    let largeNumber = this.tradePrice / 100;
    let smallNumber = this.tradePrice / 1000;
    switch (button) {
      case `--`:
        this.tradePrice -= largeNumber;
        break;
      case `-`:
        this.tradePrice -= smallNumber;
        break;
      case `+`:
        this.tradePrice += smallNumber;
        break;
      case `++`:
        this.tradePrice += largeNumber;
        break;
      default:
        break;
    }
  }

  getAmountFormat() {
    let zeros = [];
    for (let index = 0; index < this.ticker.info.precision.amount; index++) {
      zeros.push(`0`);
    }
    return `0.${zeros.join('')}`;
  }

  getPriceFormat() {
    let zeros = [];
    for (let index = 0; index < this.ticker.info.precision.price; index++) {
      zeros.push(`0`);
    }
    return `0.${zeros.join('')}`;
  }

  getNewTicker(exchangeId: ExchangeId, symbol: string) {
    this.isLoading = true;
    TICKERSERVICE.getTicker(exchangeId, symbol)
      .then((response) => {
        this.exchangeId = exchangeId;
        this.ticker = response.data;
        this.tradePrice = +response.data.last;
        this.getBalances(response.data.quote, response.data.base);
        this.isLoading = false;
      })
      .catch(() => {
        window.alert(`Something went wrong while getting ticker data for ${exchangeId} - ${symbol}`);
        this.isLoading = false;
      });
  }

  setTradePrice(e) {
    this.tradePrice = +e.target.value;
  }
  setTradeAmount(e) {
    this.tradeAmount = +e.target.value;
  }

  setTradeAmountByButton(percentage: number) {
    let amount = 0;
    switch (this.tradeAction) {
      case OrderType.LIMITBUY:
        amount = (this.quoteBalance * percentage - this.quoteBalance * percentage * this.ticker.info.maker) / this.tradePrice;
        if (this.checkAmounts(amount)) {
          this.tradeAmount = amount;
        }
        break;
      case OrderType.MARKETBUY:
        amount = (this.quoteBalance * percentage - this.quoteBalance * percentage * this.ticker.info.taker) / this.tradePrice;
        if (this.checkAmounts(amount)) {
          this.tradeAmount = amount;
        }
        break;
      case OrderType.LIMITSELL:
        amount = this.baseBalance * percentage - this.baseBalance * percentage * this.ticker.info.maker;
        if (this.checkAmounts(amount)) {
          this.tradeAmount = amount;
        }
        break;
      case OrderType.MARKETSELL:
        amount = this.baseBalance * percentage - this.baseBalance * percentage * this.ticker.info.taker;
        if (this.checkAmounts(amount)) {
          this.tradeAmount = amount;
        }
        break;
      default:
        break;
    }
  }

  checkAmounts(amount): boolean {
    if (this.ticker.info.limits.amount.min > amount) {
      window.alert(`Minimum amount of ${this.ticker.info.limits.amount.min}`);
      this.tradeAmount = this.ticker.info.limits.amount.min;
      return false;
    }
    if (this.ticker.info.limits.amount.max < amount) {
      window.alert(`Maximum amount of ${this.ticker.info.limits.amount.max}`);
      this.tradeAmount = this.ticker.info.limits.amount.max;
      return false;
    }
    return true;
  }

  getSymbol(balance: Balance, exchange: Exchange) {
    let tickers = this.tickers.find((t) => t.exchangeId === exchange.id).tickers;
    return BALANCESERVICE.getBtcStats(balance, tickers).symbol;
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="dark">
          {/* <ion-buttons slot="start">
            <ion-button fill="solid" shape="round" color="danger" href="/panic" padding>
              <ion-icon name="alert" />
              Panic
            </ion-button>
          </ion-buttons> */}
          <ion-title text-center>Trade</ion-title>
        </ion-toolbar>
        <ion-segment color="dark" onIonChange={(e) => (this.step = +e.detail.value)}>
          <ion-segment-button value="0" checked={this.step === 0}>
            Pair
          </ion-segment-button>
          <ion-segment-button value="1" checked={this.step === 1}>
            Price
          </ion-segment-button>
          <ion-segment-button value="2" checked={this.step === 2}>
            Action
          </ion-segment-button>
          <ion-segment-button value="3" checked={this.step === 3}>
            Amount
          </ion-segment-button>
          <ion-segment-button value="4" checked={this.step === 4}>
            Summary
          </ion-segment-button>
        </ion-segment>
        {this.step === 0 && [
          <ion-list-header color="light">
            Pair
            {this.isLoading ? (
              <ion-icon name="sync" class="spin" slot="end" margin-right />
            ) : (
              <ion-badge color="light" margin-right>
                {this.exchangeId} - {this.ticker.symbol}
              </ion-badge>
            )}
          </ion-list-header>,
          <ion-item lines="none">
            <ion-segment color="light" onIonChange={(e) => (this.segment = +e.detail.value)}>
              <ion-segment-button value="0" checked={this.segment === 0}>
                <span style={{ color: 'black' }}>All Pairs</span>
              </ion-segment-button>
              <ion-segment-button value="1" checked={this.segment === 1}>
                <span style={{ color: 'black' }}>Current Holdings</span>
              </ion-segment-button>
            </ion-segment>
          </ion-item>,
        ]}
        {this.step === 1 && [
          <ion-list-header color="light">
            Price
            {this.isLoading ? (
              <ion-icon name="sync" class="spin" slot="end" margin-right />
            ) : (
              <ion-badge color="light" margin-right>
                {numeral(+this.tradePrice).format(this.getPriceFormat())} {this.ticker.quote}
              </ion-badge>
            )}
          </ion-list-header>,
        ]}
        {this.step === 2 && [
          <ion-list-header color="light">
            Action
            <ion-badge color="light" margin-right>
              {this.tradeAction}
            </ion-badge>
          </ion-list-header>,
        ]}
        {this.step === 3 && [
          <ion-list-header color="light">
            Amount
            {this.isLoading ? (
              <ion-icon name="sync" class="spin" slot="end" margin-right />
            ) : (
              <ion-badge color="light" margin-right>
                {numeral(this.tradeAmount).format(this.getAmountFormat())} {this.ticker.base}
              </ion-badge>
            )}
          </ion-list-header>,
        ]}
        {this.step === 4 && [<ion-list-header color="light">Summary</ion-list-header>]}
      </ion-header>,
      <ion-content>
        <ion-list>
          {this.step === 0 && [
            <ion-item lines="none" style={{ display: this.segment === 1 ? 'none' : 'block' }}>
              <ion-label>Select Exchange</ion-label>
              <select onChange={(e) => this.exchangeSelected(e)}>
                {this.exchanges.filter((e) => e.key && e.secret).map((e) => <option value={e.id}>{e.id}</option>)}
              </select>
            </ion-item>,
            <ion-item lines="none" style={{ display: this.segment === 1 ? 'none' : 'block' }}>
              <ion-label>Select Pair</ion-label>
              <select onChange={(e) => this.pairSelected(this.selectedExchange, e.target[`value`])}>
                {this.pairs.map((p) => <option value={p.symbol}>{p.symbol}</option>)}
              </select>
            </ion-item>,
            this.segment === 1 &&
              this.exchanges.filter((e) => e.key && e.secret).map((exchange) => [
                <ion-list-header color="light">{exchange.id}</ion-list-header>,
                exchange.balances.filter((b) => b.currency != `BTC`).map((b) => [
                  <ion-item lines="full" onClick={() => this.pairSelected(exchange.id, this.getSymbol(b, exchange))}>
                    <app-cryptoicon class="cicon" symbol={b.currency} />
                    <ion-label slot="end">{this.getSymbol(b, exchange)}</ion-label>
                  </ion-item>,
                ]),
              ]),
          ]}

          {this.step === 1 && [
            this.ticker && [
              <app-ohlc exchangeId={this.exchangeId} symbol={this.ticker.symbol} altPrice={this.tradePrice} curPrice={this.ticker.last} />,
              <ion-item lines="none">
                <ion-label>Last price</ion-label>
                <ion-button size="small" fill="outline" color="dark" slot="end" text-right onClick={() => (this.tradePrice = this.ticker.last)}>
                  {numeral(+this.ticker.last).format(this.getPriceFormat())}
                </ion-button>
              </ion-item>,
              <ion-item lines="none">
                <ion-label>Set price</ion-label>
                <ion-input slot="end" name="price" type="number" value={`${this.tradePrice}`} onInput={(e) => this.setTradePrice(e)} />
              </ion-item>,
              <ion-grid>
                <ion-row>
                  <ion-col>
                    <ion-button fill="outline" expand="block" color="danger" onClick={() => this.setPriceWithButtons('--')}>
                      - -
                    </ion-button>
                  </ion-col>
                  <ion-col>
                    <ion-button fill="outline" expand="block" color="danger" onClick={() => this.setPriceWithButtons('-')}>
                      -
                    </ion-button>
                  </ion-col>
                  <ion-col>
                    <ion-button fill="outline" expand="block" color="success" onClick={() => this.setPriceWithButtons('+')}>
                      +
                    </ion-button>
                  </ion-col>
                  <ion-col>
                    <ion-button fill="outline" expand="block" color="success" onClick={() => this.setPriceWithButtons('++')}>
                      + +
                    </ion-button>
                  </ion-col>
                </ion-row>
              </ion-grid>,
            ],
          ]}

          {this.step === 2 && [
            <ion-grid>
              {/* <ion-row>
                <ion-col>
                  <ion-button fill="outline" expand="block" color="success" onClick={() => (this.tradeAction = OrderType.MARKETBUY)}>
                    Market Buy
                  </ion-button>
                </ion-col>
                <ion-col>
                  <ion-button fill="outline" expand="block" color="danger" onClick={() => (this.tradeAction = OrderType.MARKETSELL)}>
                    Market Sell
                  </ion-button>
                </ion-col>
              </ion-row> */}
              <ion-row>
                <ion-col>
                  <ion-button fill="outline" expand="block" color="success" onClick={() => (this.tradeAction = OrderType.LIMITBUY)}>
                    Limit Buy
                  </ion-button>
                </ion-col>
                <ion-col>
                  <ion-button fill="outline" expand="block" color="danger" onClick={() => (this.tradeAction = OrderType.LIMITSELL)}>
                    Limit Sell
                  </ion-button>
                </ion-col>
              </ion-row>
            </ion-grid>,
          ]}

          {this.step === 3 && [
            (this.tradeAction === OrderType.LIMITBUY || this.tradeAction === OrderType.MARKETBUY) && (
              <ion-item lines="none">
                <ion-label>Available {this.ticker.quote}</ion-label>
                <ion-button color="light" slot="end" text-right onClick={() => this.setTradeAmountByButton(1)}>
                  {numeral(+this.quoteBalance).format(this.getAmountFormat())}
                </ion-button>
              </ion-item>
            ),
            (this.tradeAction === OrderType.LIMITSELL || this.tradeAction === OrderType.MARKETSELL) && (
              <ion-item lines="none">
                <ion-label>Available {this.ticker.base}</ion-label>
                <ion-button color="light" slot="end" text-right onClick={() => this.setTradeAmountByButton(1)}>
                  {numeral(+this.baseBalance).format(this.getAmountFormat())}
                </ion-button>
              </ion-item>
            ),
            <ion-item lines="none">
              <ion-label>Set Amount</ion-label>
              <ion-input
                slot="end"
                name="price"
                type="number"
                value={`${this.tradeAmount}`}
                onInput={(e) => this.setTradeAmount(e)}
                onBlur={() => this.checkAmounts(this.tradeAmount)}
              />
            </ion-item>,
            <ion-grid>
              <ion-row>
                <ion-col>
                  <ion-button fill="outline" expand="block" color="dark" onClick={() => this.setTradeAmountByButton(0.1)}>
                    10%
                  </ion-button>
                </ion-col>
                <ion-col>
                  <ion-button fill="outline" expand="block" color="dark" onClick={() => this.setTradeAmountByButton(0.2)}>
                    20%
                  </ion-button>
                </ion-col>
                <ion-col>
                  <ion-button fill="outline" expand="block" color="dark" onClick={() => this.setTradeAmountByButton(0.3)}>
                    30%
                  </ion-button>
                </ion-col>
                <ion-col>
                  <ion-button fill="outline" expand="block" color="dark" onClick={() => this.setTradeAmountByButton(0.4)}>
                    40%
                  </ion-button>
                </ion-col>
                <ion-col>
                  <ion-button fill="outline" expand="block" color="dark" onClick={() => this.setTradeAmountByButton(0.5)}>
                    50%
                  </ion-button>
                </ion-col>
                <ion-col>
                  <ion-button fill="outline" expand="block" color="dark" onClick={() => this.setTradeAmountByButton(0.6)}>
                    60%
                  </ion-button>
                </ion-col>
                <ion-col>
                  <ion-button fill="outline" expand="block" color="dark" onClick={() => this.setTradeAmountByButton(0.7)}>
                    70%
                  </ion-button>
                </ion-col>
                <ion-col>
                  <ion-button fill="outline" expand="block" color="dark" onClick={() => this.setTradeAmountByButton(0.8)}>
                    80%
                  </ion-button>
                </ion-col>
                <ion-col>
                  <ion-button fill="outline" expand="block" color="dark" onClick={() => this.setTradeAmountByButton(0.9)}>
                    90%
                  </ion-button>
                </ion-col>
                <ion-col>
                  <ion-button fill="outline" expand="block" color="dark" onClick={() => this.setTradeAmountByButton(1)}>
                    100%
                  </ion-button>
                </ion-col>
              </ion-row>
            </ion-grid>,
          ]}

          {this.step === 4 && [
            <ion-item lines="none">
              <ion-label>Action</ion-label>
              <ion-label slot="end" text-right>
                {this.tradeAction}
              </ion-label>
            </ion-item>,
            <ion-item lines="none">
              <ion-label>Amount</ion-label>
              <ion-label slot="end" text-right>
                {numeral(this.tradeAmount).format(this.getAmountFormat())} {this.ticker.base}
              </ion-label>
            </ion-item>,
            <ion-item lines="none">
              <ion-label>Price</ion-label>
              <ion-label slot="end" text-right>
                {numeral(+this.tradePrice).format(this.getPriceFormat())} {this.ticker.symbol}
              </ion-label>
            </ion-item>,
            <ion-item lines="none">
              <ion-label>Fee</ion-label>
              <ion-label slot="end" text-right>
                {this.tradeAction === OrderType.LIMITBUY || this.tradeAction === OrderType.LIMITSELL
                  ? numeral(+this.ticker.info.maker * +this.tradeAmount * +this.tradePrice).format(this.getAmountFormat())
                  : numeral(+this.ticker.info.taker * +this.tradeAmount * +this.tradePrice).format(this.getAmountFormat())}{' '}
                {this.ticker.quote}
              </ion-label>
            </ion-item>,
            <ion-item lines="none">
              <ion-label>Total</ion-label>
              <ion-label slot="end" text-right>
                {numeral(+this.tradeAmount * +this.tradePrice - +this.ticker.info.taker * +this.tradeAmount * +this.tradePrice).format(
                  this.getAmountFormat(),
                )}{' '}
                {this.ticker.quote}
              </ion-label>
            </ion-item>,

            <ion-button
              expand="block"
              color="success"
              onClick={() => this.executeOrder(this.ticker.symbol, this.tradeAction, this.tradePrice, this.tradeAmount)}
              disabled={this.isLoading}
            >
              {this.isLoading && <ion-icon name="refresh" class="spin" margin-right />} Execute
            </ion-button>,
          ]}
        </ion-list>
      </ion-content>,
    ];
  }

  executeOrder(pair: string, type: OrderType, price: number, amount: number) {
    if (window.confirm('Are you sure you want to place this order?')) {
      this.isLoading = true;
      let exchange = this.exchanges.find((e) => e.id === this.exchangeId);
      TRADESERVICE.newOrder(exchange, {
        pair: pair,
        type: type,
        price: numeral(price).format(this.getPriceFormat()),
        amount: numeral(amount).format(this.getAmountFormat()),
        clientCreds: {
          key: exchange.key,
          secret: exchange.secret,
        },
      })
        .then((response) => {
          window.alert(`Placed order:\n
                      Pair: ${pair}\n
                      Type: ${type}\n
                      Price: ${numeral(price).format(this.getPriceFormat())}\n
                      amount:${numeral(amount).format(this.getAmountFormat())}`);
          let newOrder = {
            exchangeId: exchange.id,
            pair: pair,
            type: type,
            status: OrderStatus.open,
            orderId: response.data.id,
            openPrice: numeral(price).format(this.getPriceFormat()),
            closePrice: 0,
            filled: 0,
            remaining: 0,
            amount: numeral(amount).format(this.getAmountFormat()),
            fee:
              this.tradeAction === OrderType.LIMITBUY || this.tradeAction === OrderType.LIMITSELL
                ? numeral(+this.ticker.info.maker * +this.tradeAmount * +this.tradePrice).format(this.getAmountFormat())
                : numeral(+this.ticker.info.taker * +this.tradeAmount * +this.tradePrice).format(this.getAmountFormat()),
            createdAt: new Date().getTime(),
            updatedAt: new Date().getTime(),
          };
          this.appSetOrders([...this.orders, newOrder]);
          this.isLoading = false;
        })
        .catch((error) => {
          this.isLoading = false;
          window.alert(`Something went wrong while executing the order: ${error.message}`);
        });
    }
  }
}
