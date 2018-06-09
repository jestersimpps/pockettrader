import { Component, Prop, State } from '@stencil/core';
import { TICKERSERVICE } from '../../services/globals';
import { ExchangeId } from '../../services/exchange.service';
import { Store, Action } from '@stencil/redux';
import { appSetTicker } from '../../actions/app';

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

  @State() ticker;
  tradingviewWidget;

  appSetTicker: Action;
  componentWillLoad() {
    this.store.mapStateToProps(this, (state) => {
      const {
        app: { ticker },
      } = state;
      return {
        ticker,
      };
    });
    this.store.mapDispatchToProps(this, {
      appSetTicker,
    });
  }

  componentDidLoad() {
    TICKERSERVICE.getTicker(this.exchangeId, `${this.pair}/BTC`).then((response) => {
      this.appSetTicker(response.data);
    });
    this.showChart();
  }

  showChart() {
    this.tradingviewWidget = new TradingView.widget({
      container_id: 'tvChart',
      autosize: true,
      symbol: `${this.exchangeId}:${this.pair}BTC`,
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
    });
  }

  render() {
    const styles = {
      height: `${window.innerHeight - 202 - 44}px`,
    };
    return [
      <ion-header>
        <ion-toolbar color="dark">
          <ion-buttons slot="start">
            <ion-back-button defaultHref={`/exchanges/${this.exchangeId}`} />
          </ion-buttons>
          <ion-title>{`${this.exchangeId} - ${this.pair}/BTC`}</ion-title>
        </ion-toolbar>
      </ion-header>,
      <div id="tvChart" class="tvchart" style={styles} />,
      <ion-content />,
      <ion-footer>
        <ion-toolbar>
          <ion-grid>
            <ion-row class="buttonRow">
              <ion-col col-12>
                <ion-label>
                  <b>Buy</b> 21.438 <b>{this.pair}</b> at {this.ticker.last} BTC{' '}
                </ion-label>
              </ion-col>
            </ion-row>

            <ion-row class="buttonRow">
              <ion-col col-2>
                <ion-button color="danger" class="full">
                  Buy
                </ion-button>
              </ion-col>
              <ion-col col-2>
                <ion-button color="danger" class="full">
                  Low
                </ion-button>
              </ion-col>
              <ion-col col-2>
                <ion-button color="warning" class="full">
                  Last
                </ion-button>
              </ion-col>
              <ion-col col-2>
                <ion-button color="success" class="full">
                  High
                </ion-button>
              </ion-col>
              <ion-col col-4>
                <ion-input type="text" value={this.ticker.last} class="inputbox" />
              </ion-col>
            </ion-row>
            <ion-row class="buttonRow">
              <ion-col col-2>
                <ion-button color="success" class="full">
                  Sell
                </ion-button>
              </ion-col>
              <ion-col col-6 />
              <ion-col col-4>
                <ion-button color="success" class="full">
                  Execute
                </ion-button>
              </ion-col>
            </ion-row>
            <ion-row class="buttonRow">
              <ion-col col-2>
                <ion-button color="primary" class="full">
                  10%
                </ion-button>
              </ion-col>
              <ion-col col-2>
                <ion-button color="primary" class="full">
                  30%
                </ion-button>
              </ion-col>
              <ion-col col-2>
                <ion-button color="primary" class="full">
                  50%
                </ion-button>
              </ion-col>
              <ion-col col-2>
                <ion-button color="primary" class="full">
                  70%
                </ion-button>
              </ion-col>
              <ion-col col-2>
                <ion-button color="primary" class="full">
                  90%
                </ion-button>
              </ion-col>
              <ion-col col-2>
                <ion-button color="primary" class="full">
                  100%
                </ion-button>
              </ion-col>
            </ion-row>
            <br />
          </ion-grid>
        </ion-toolbar>
      </ion-footer>,
    ];
  }
}
