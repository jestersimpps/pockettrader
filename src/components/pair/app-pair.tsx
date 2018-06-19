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

  @State() ticker;
  tradingviewWidget;

  componentDidLoad() {
    TICKERSERVICE.getTicker(this.exchangeId, `${this.pair}/BTC`).then((response) => {
      this.ticker = response.data;
      this.showChart();
    });
  }

  showChart() {
    this.tradingviewWidget = new TradingView.widget({
      container_id: 'tvChart',
      autosize: true,
      symbol: `${this.exchangeId}:${this.ticker.base}BTC`,
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
      height: `${window.innerHeight - 44}px`,
    };
    return [
      this.ticker && <ion-header>
        <ion-toolbar color="dark">
          <ion-buttons slot="start">
            <ion-back-button defaultHref={`/exchanges/${this.exchangeId}`} />
          </ion-buttons>
          <ion-title>{`${this.exchangeId} - ${this.ticker.base}/BTC`}</ion-title>
        </ion-toolbar>
      </ion-header>,
      <div id="tvChart" class="tvchart" style={styles} />,
      <ion-content />,
    ];
  }
}
