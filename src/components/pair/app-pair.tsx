import { Component, Prop, State } from '@stencil/core';
import { TICKERSERVICE } from '../../services/globals';
import { ExchangeId } from '../../services/exchange.service';
import { Store } from '@stencil/redux';

declare const TradingView: any;

@Component({
  tag: 'app-pair',
  styleUrl: 'app-pair.css',
})
export class AppPair {
  @Prop({ context: 'store' })
  store: Store;
  @Prop() exchangeId: ExchangeId;
  @Prop() pair: string;

  @State() segment: number = 1;
  @State() ticker;
  @State() chartID;
  tradingviewWidget;

  componentDidLoad() {
    console.log(this.pair);
    switch (this.pair) {
      case 'BTC':
        TICKERSERVICE.getTicker(this.exchangeId, `BTC/USD`)
          .then((response) => {
            this.ticker = response.data;
            this.chartID = `${this.exchangeId}:BTCUSD`;
            this.switchSegment(1);
          })
          .catch(() => {
            TICKERSERVICE.getTicker(this.exchangeId, `BTC/USDT`).then((response) => {
              this.ticker = response.data;
              this.chartID = `${this.exchangeId}:BTCUSDT`;
              this.switchSegment(1);
            });
          });
        break;
      case 'USD':
      case 'EUR':
      case 'GBP':
      case 'CAD':
        TICKERSERVICE.getTicker(this.exchangeId, `BTC/${this.pair}`).then((response) => {
          this.ticker = response.data;
          this.chartID = `${this.exchangeId}:BTC${this.pair}`;
          this.switchSegment(1);
        });
        break;
      default:
        TICKERSERVICE.getTicker(this.exchangeId, `${this.pair}/BTC`).then((response) => {
          this.ticker = response.data;
          this.chartID = `${this.exchangeId}:${this.pair}BTC`;
          this.switchSegment(1);
        });
        break;
    }
  }

  showChart() {
    this.tradingviewWidget = new TradingView.widget({
      container_id: 'tvChart',
      autosize: true,
      symbol: this.chartID,
      interval: '60',
      timezone: 'Etc/UTC',
      theme: 'Light',
      style: '1',
      locale: 'en',
      toolbar_bg: '#fff',
      padding: 0,
      hide_top_toolbar: false,
      enable_publishing: false,
      withdateranges: true,
      hide_side_toolbar: true,
      details: false,
      hideideas: true,
      show_popup_button: false,
      save_image: false,
      allow_symbol_change: false,
    });
  }

  switchSegment(segment: number) {
    this.segment = segment;
    switch (segment) {
      case 1:
        this.showChart();
        break;

      default:
        break;
    }
  }

  render() {
    const styles = {
      height: `${window.innerHeight - 93}px`,
    };
    return [
      this.ticker && (
        <ion-header>
          <script type="text/javascript" src="https://s3.tradingview.com/tv.js" />

          <ion-toolbar color="dark">
            <ion-buttons slot="start">
              <ion-back-button defaultHref={`/exchanges`} />
            </ion-buttons>
            <ion-title>{`${this.exchangeId} - ${this.ticker.symbol}`}</ion-title>
          </ion-toolbar>
          {/* <ion-segment color="dark">
            <ion-segment-button checked={this.segment === 1} onIonSelect={() => this.switchSegment(1)}>
              <ion-icon name="stats" />
              Chart
            </ion-segment-button>
            <ion-segment-button checked={this.segment === 2} onIonSelect={() => this.switchSegment(2)} disabled>
              <ion-icon name="paper" />
              News
            </ion-segment-button>
            <ion-segment-button checked={this.segment === 3} onIonSelect={() => this.switchSegment(3)}>
              <ion-icon name="swap" />
              Trade
            </ion-segment-button>
            <ion-segment-button checked={this.segment === 4} onIonSelect={() => this.switchSegment(4)}>
              <ion-icon name="list" />
              Orders
            </ion-segment-button>
          </ion-segment> */}
        </ion-header>
      ),
      <ion-content>{this.segment === 1 && <div id="tvChart" class="tvchart" style={styles} />}</ion-content>,
    ];
  }
}
