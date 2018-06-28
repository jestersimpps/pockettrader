import { Component, Prop, State } from '@stencil/core';
import { Store } from '@stencil/redux';
import { Exchange, ExchangeId } from '../../services/exchange.service';
import { Ticker } from '../../services/ticker.service';
import { TICKERSERVICE } from '../../services/globals';
import numeral from 'numeral';

export enum TradeAction {
  limitbuy = 'limitbuy',
  limitsell = 'limitsell',
  marketbuy = 'marketbuy',
  marketsell = 'marketsell',
}

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
  @State() isLoading = false;

  @State() tradePrice = 0;
  @State() tradeAmount = 0;
  @State() tradeAction = TradeAction.limitbuy;
  @State() baseBalance = 0;
  @State() quoteBalance = 0;

  componentWillLoad() {
    this.store.mapStateToProps(this, (state) => {
      const {
        app: { exchanges, baseCurrency, currencies, tickers, wallets },
      } = state;
      return {
        exchanges,
        baseCurrency,
        currencies,
        tickers,
        wallets,
      };
    });
    if (this.tickers.length) {
      this.pairs = this.tickers[0].tickers.sort((a, b) => {
        var textA = a.symbol.toUpperCase();
        var textB = b.symbol.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
      this.exchangeId = this.tickers[0].exchangeId;
      this.getNewTicker(this.exchangeId, this.pairs[0].symbol);
    }
  }

  exchangeSelected(e) {
    this.exchangeId = e.target.value;
    this.pairs = this.tickers.find((t) => t.exchangeId === e.target.value).tickers.sort((a, b) => {
      var textA = a.symbol.toUpperCase();
      var textB = b.symbol.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
    this.getNewTicker(this.exchangeId, this.pairs[0].symbol);
  }

  pairSelected(e) {
    this.getNewTicker(this.exchangeId, e.target.value);
  }

  getBalances(quote: string, base: string) {
    let exchange = this.exchanges.find((e) => e.id === this.exchangeId);
    let quoteBalance = exchange.balances.find((b) => b.symbol === quote);
    let baseBalance = exchange.balances.find((b) => b.symbol === base);
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

  getFormat() {
    let zeros = [];
    for (let index = 0; index < this.ticker.info.precision.amount; index++) {
      zeros.push(`0`);
    }
    return `0,0.${zeros.join('')}`;
  }

  getNewTicker(exchangeId: ExchangeId, symbol: string) {
    this.isLoading = true;
    TICKERSERVICE.getTicker(exchangeId, symbol).then((response) => {
      this.ticker = response.data;
      this.tradePrice = +response.data.last;
      this.getBalances(response.data.quote, response.data.base);
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
    switch (this.tradeAction) {
      case TradeAction.limitbuy:
      case TradeAction.marketbuy:
        this.tradeAmount = (this.quoteBalance * percentage - this.quoteBalance * percentage * this.ticker.info.taker) / this.tradePrice;
        break;
      case TradeAction.limitsell:
      case TradeAction.marketsell:
        this.tradeAmount = this.baseBalance * percentage - this.baseBalance * percentage * this.ticker.info.taker;
        break;
      default:
        break;
    }
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="dark">
          <ion-buttons slot="start">
            <ion-button fill="solid" shape="round" color="danger" href="/panic" padding>
              <ion-icon name="alert" />
              Panic
            </ion-button>
          </ion-buttons>
          <ion-title text-center>Trade</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
        <ion-list>
          <ion-list-header color="dark">
            Pair
            {this.ticker ? (
              <ion-badge color="light" margin-right>
                {this.exchangeId} - {this.ticker.symbol}
              </ion-badge>
            ) : (
              <ion-icon name="sync" class="spin" slot="end" margin-right />
            )}
          </ion-list-header>
          <ion-item lines="none">
            <ion-label>Select Exchange</ion-label>
            <select onChange={(e) => this.exchangeSelected(e)}>
              {this.exchanges.filter((e) => e.key && e.secret).map((e) => <option value={e.id}>{e.id}</option>)}
            </select>
          </ion-item>
          <ion-item lines="none">
            <ion-label>Select Pair</ion-label>
            <select onChange={(e) => this.pairSelected(e)}>{this.pairs.map((p) => <option value={p.symbol}>{p.symbol}</option>)}</select>
          </ion-item>
          <ion-list-header color="dark">
            Price
            {this.isLoading ? (
              <ion-icon name="sync" class="spin" slot="end" margin-right />
            ) : (
              <ion-badge color="light" margin-right>
                {numeral(+this.tradePrice).format('0,0.00000000')} {this.ticker.quote}
              </ion-badge>
            )}
          </ion-list-header>
          {this.ticker && (
            <div>
              <ion-item lines="none">
                <ion-label>Last price</ion-label>
                <ion-button color="light" slot="end" text-right onClick={() => (this.tradePrice = this.ticker.last)}>
                  {numeral(+this.ticker.last).format('0,0.00000000')}
                </ion-button>
              </ion-item>
              <ion-item lines="none">
                <ion-label>Set price</ion-label>
                <ion-input name="price" type="number" value={`${this.tradePrice}`} onBlur={(e) => this.setTradePrice(e)} />
              </ion-item>
              <ion-grid>
                <ion-row>
                  <ion-col>
                    <ion-button expand="block" color="light" onClick={() => this.setPriceWithButtons('--')}>
                      - -
                    </ion-button>
                  </ion-col>
                  <ion-col>
                    <ion-button expand="block" color="light" onClick={() => this.setPriceWithButtons('-')}>
                      -
                    </ion-button>
                  </ion-col>
                  <ion-col>
                    <ion-button expand="block" color="light" onClick={() => this.setPriceWithButtons('+')}>
                      +
                    </ion-button>
                  </ion-col>
                  <ion-col>
                    <ion-button expand="block" color="light" onClick={() => this.setPriceWithButtons('++')}>
                      + +
                    </ion-button>
                  </ion-col>
                </ion-row>
              </ion-grid>

              <ion-list-header color="dark">
                Action
                <ion-badge color="light" margin-right>
                  {this.tradeAction}
                </ion-badge>
              </ion-list-header>
              <ion-grid>
                <ion-row>
                  <ion-col>
                    <ion-button expand="block" color="light" onClick={() => (this.tradeAction = TradeAction.marketbuy)}>
                      Market Buy
                    </ion-button>
                  </ion-col>
                  <ion-col>
                    <ion-button expand="block" color="light" onClick={() => (this.tradeAction = TradeAction.marketsell)}>
                      Market Sell
                    </ion-button>
                  </ion-col>
                </ion-row>
                <ion-row>
                  <ion-col>
                    <ion-button expand="block" color="light" onClick={() => (this.tradeAction = TradeAction.limitbuy)}>
                      Limit Buy
                    </ion-button>
                  </ion-col>
                  <ion-col>
                    <ion-button expand="block" color="light" onClick={() => (this.tradeAction = TradeAction.limitsell)}>
                      Limit Sell
                    </ion-button>
                  </ion-col>
                </ion-row>
              </ion-grid>
              <ion-list-header color="dark">
                Amount
                {this.isLoading ? (
                  <ion-icon name="sync" class="spin" slot="end" margin-right />
                ) : (
                  <ion-badge color="light" margin-right>
                    {numeral(this.tradeAmount).format(this.getFormat())}{' '}
                    {(this.tradeAction === TradeAction.limitbuy || this.tradeAction === TradeAction.marketbuy) && this.ticker.base}
                    {(this.tradeAction === TradeAction.limitsell || this.tradeAction === TradeAction.marketsell) && this.ticker.quote}
                  </ion-badge>
                )}
              </ion-list-header>
              <ion-item lines="none">
                <ion-label>Available {this.ticker.quote}</ion-label>
                <ion-button color="light" slot="end" text-right onClick={() => (this.tradeAmount = this.quoteBalance / this.tradePrice)}>
                  {numeral(+this.quoteBalance).format('0,0.00000000')}
                </ion-button>
              </ion-item>
              <ion-item lines="none">
                <ion-label>Available {this.ticker.base}</ion-label>
                <ion-button color="light" slot="end" text-right onClick={() => (this.tradeAmount = this.baseBalance)}>
                  {numeral(+this.baseBalance).format('0,0.00000000')}
                </ion-button>
              </ion-item>
              <ion-item lines="none">
                <ion-label>Set Amount</ion-label>
                <ion-input name="price" type="number" value={`${this.tradeAmount}`} onBlur={(e) => this.setTradeAmount(e)} />
              </ion-item>
              <ion-grid>
                <ion-row>
                  <ion-col>
                    <ion-button expand="block" color="light" onClick={() => this.setTradeAmountByButton(0.1)}>
                      10%
                    </ion-button>
                  </ion-col>
                  <ion-col>
                    <ion-button expand="block" color="light" onClick={() => this.setTradeAmountByButton(0.2)}>
                      20%
                    </ion-button>
                  </ion-col>
                  <ion-col>
                    <ion-button expand="block" color="light" onClick={() => this.setTradeAmountByButton(0.3)}>
                      30%
                    </ion-button>
                  </ion-col>
                  <ion-col>
                    <ion-button expand="block" color="light" onClick={() => this.setTradeAmountByButton(0.4)}>
                      40%
                    </ion-button>
                  </ion-col>
                  <ion-col>
                    <ion-button expand="block" color="light" onClick={() => this.setTradeAmountByButton(0.5)}>
                      50%
                    </ion-button>
                  </ion-col>
                  <ion-col>
                    <ion-button expand="block" color="light" onClick={() => this.setTradeAmountByButton(0.6)}>
                      60%
                    </ion-button>
                  </ion-col>
                  <ion-col>
                    <ion-button expand="block" color="light" onClick={() => this.setTradeAmountByButton(0.7)}>
                      70%
                    </ion-button>
                  </ion-col>
                  <ion-col>
                    <ion-button expand="block" color="light" onClick={() => this.setTradeAmountByButton(0.8)}>
                      80%
                    </ion-button>
                  </ion-col>
                  <ion-col>
                    <ion-button expand="block" color="light" onClick={() => this.setTradeAmountByButton(0.9)}>
                      90%
                    </ion-button>
                  </ion-col>
                  <ion-col>
                    <ion-button expand="block" color="light" onClick={() => this.setTradeAmountByButton(1)}>
                      100%
                    </ion-button>
                  </ion-col>
                </ion-row>
              </ion-grid>
              <ion-list-header color="dark">Summary</ion-list-header>
              <ion-item lines="none">
                <ion-label>Action</ion-label>
                <ion-label slot="end" text-right>
                  {this.tradeAction}
                </ion-label>
              </ion-item>
              <ion-item lines="none">
                <ion-label>Amount</ion-label>
                <ion-label slot="end" text-right>
                  {numeral(this.tradeAmount).format(this.getFormat())} {this.ticker.base}
                </ion-label>
              </ion-item>
              <ion-item lines="none">
                <ion-label>Price</ion-label>
                <ion-label slot="end" text-right>
                  {numeral(+this.tradePrice).format('0,0.00000000')} {this.ticker.symbol}
                </ion-label>
              </ion-item>
              <ion-item lines="none">
                <ion-label>Fee</ion-label>
                <ion-label slot="end" text-right>
                  {numeral(+this.ticker.info.taker * +this.tradeAmount * +this.tradePrice).format('0,0.00000000')} {this.ticker.quote}
                </ion-label>
              </ion-item>
              <ion-item lines="none">
                <ion-label>Total</ion-label>
                <ion-label slot="end" text-right>
                  {numeral(+this.tradeAmount * +this.tradePrice - +this.ticker.info.taker * +this.tradeAmount * +this.tradePrice).format(
                    '0,0.00000000',
                  )}{' '}
                  {this.ticker.quote}
                </ion-label>
              </ion-item>

              <ion-button
                expand="block"
                color="success"
                onClick={() => this.executeOrder(this.ticker.symbol, this.tradeAction, this.tradePrice, this.tradeAmount)}
              >
                Execute
              </ion-button>
            </div>
          )}
        </ion-list>
      </ion-content>,
    ];
  }

  executeOrder(pair: string, type: string, price: number, amount: number) {
    console.log(pair, type, price, amount);
  }
}
