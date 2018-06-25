import { Component, Prop, State } from '@stencil/core';
import { Store } from '@stencil/redux';
import { Exchange, ExchangeId } from '../../services/exchange.service';
import { Ticker } from '../../services/ticker.service';
import { TICKERSERVICE } from '../../services/globals';
import numeral from 'numeral';

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

  getNewTicker(exchangeId: ExchangeId, symbol: string) {
    this.isLoading = true;
    TICKERSERVICE.getTicker(exchangeId, symbol).then((response) => {
      this.ticker = response.data;
      this.isLoading = false;
    });
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
        {!this.isLoading ? (
          <ion-list>
            <ion-list-header color="light">
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
            <ion-list-header color="light">
              Price
              {this.isLoading ? (
                <ion-icon name="sync" class="spin" slot="end" margin-right />
              ) : (
                <ion-badge color="light" margin-right>
                  {numeral(this.ticker.last).format('0,0.00000000')} {this.ticker.quote}
                </ion-badge>
              )}
            </ion-list-header>
            {this.ticker && (
              <div>
                <ion-item lines="none">
                  <ion-label>Set price</ion-label>
                  <ion-input name="price" type="text" value={numeral(this.ticker.last).format('0,0.00000000')} onInput={(e) => console.log(e)} />
                </ion-item>
                <ion-grid>
                  <ion-row>
                    <ion-col>
                      <ion-button expand="block" color="light">
                        - -
                      </ion-button>
                    </ion-col>
                    <ion-col>
                      <ion-button expand="block" color="light">
                        -
                      </ion-button>
                    </ion-col>
                    <ion-col>
                      <ion-button expand="block" color="light">
                        +
                      </ion-button>
                    </ion-col>
                    <ion-col>
                      <ion-button expand="block" color="light">
                        + +
                      </ion-button>
                    </ion-col>
                  </ion-row>
                </ion-grid>

                <ion-list-header color="light">Action</ion-list-header>
                <ion-grid>
                  <ion-row>
                    <ion-col>
                      <ion-button expand="block" color="danger">
                        Market Sell
                      </ion-button>
                    </ion-col>
                    <ion-col>
                      <ion-button expand="block" color="success">
                        Market Buy
                      </ion-button>
                    </ion-col>
                  </ion-row>
                  <ion-row>
                    <ion-col>
                      <ion-button expand="block" color="danger">
                        Limit Sell
                      </ion-button>
                    </ion-col>
                    <ion-col>
                      <ion-button expand="block" color="success">
                        Limit Buy
                      </ion-button>
                    </ion-col>
                  </ion-row>
                </ion-grid>
                <ion-list-header color="light">
                  Amount
                  {this.isLoading ? (
                    <ion-icon name="sync" class="spin" slot="end" margin-right />
                  ) : (
                    <ion-badge color="light" margin-right>
                      {numeral(0).format('0,0.00000000')} {this.ticker.base}
                    </ion-badge>
                  )}
                </ion-list-header>
                <ion-item lines="none">
                  <ion-label>Set Amount</ion-label>
                  <ion-input name="price" type="text" value={numeral(0).format('0,0.00000000')} onInput={(e) => console.log(e)} />
                </ion-item>
                <ion-grid>
                  <ion-row>
                    <ion-col>
                      <ion-button expand="block" color="light">
                        10%
                      </ion-button>
                    </ion-col>
                    <ion-col>
                      <ion-button expand="block" color="light">
                        20%
                      </ion-button>
                    </ion-col>
                    <ion-col>
                      <ion-button expand="block" color="light">
                        30%
                      </ion-button>
                    </ion-col>
                    <ion-col>
                      <ion-button expand="block" color="light">
                        40%
                      </ion-button>
                    </ion-col>
                    <ion-col>
                      <ion-button expand="block" color="light">
                        50%
                      </ion-button>
                    </ion-col>
                    <ion-col>
                      <ion-button expand="block" color="light">
                        60%
                      </ion-button>
                    </ion-col>
                    <ion-col>
                      <ion-button expand="block" color="light">
                        70%
                      </ion-button>
                    </ion-col>
                    <ion-col>
                      <ion-button expand="block" color="light">
                        80%
                      </ion-button>
                    </ion-col>
                    <ion-col>
                      <ion-button expand="block" color="light">
                        90%
                      </ion-button>
                    </ion-col>
                    <ion-col>
                      <ion-button expand="block" color="light">
                        100%
                      </ion-button>
                    </ion-col>
                  </ion-row>
                </ion-grid>
                <ion-list-header color="light">Summary</ion-list-header>
                <ion-button expand="block" color="success">
                  Execute
                </ion-button>
              </div>
            )}
          </ion-list>
        ) : (
          <div class="progress" text-center>
            <ion-icon name="sync" class="spin" />
          </div>
        )}
      </ion-content>,
    ];
  }
}
