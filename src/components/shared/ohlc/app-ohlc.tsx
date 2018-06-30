import { Component, Prop, Watch, State } from '@stencil/core';
import { ExchangeId } from '../../../services/exchange.service';
import { highstock } from '../../../global/highcharts';
import { TRADESERVICE } from '../../../services/globals';

@Component({
  tag: 'app-ohlc',
  styleUrl: 'app-ohlc.css',
})
export class AppOhlc {
  @Prop() exchangeId: ExchangeId;
  @Prop() symbol: string;
  @Prop() altPrice: number;
  @Prop() curPrice: number;

  @State() timeFrame = '1h';
  chart;
  ohlcData;

  @Watch('altPrice')
  changeAltLine() {
    this.chart.series[1].setData(
      this.ohlcData.map((d) => {
        return [d[0], this.altPrice];
      }),
    );
  }
  @Watch('symbol')
  changeSymbol() {
    TRADESERVICE.getOhlc(this.exchangeId, this.symbol).then((response) => {
      this.ohlcData = response.data;
      this.chart.series[0].setData(response.data);
    });
  }

  setTimeFrame(timeFrame: string) {
    this.timeFrame = timeFrame;
    TRADESERVICE.getOhlc(this.exchangeId, this.symbol, timeFrame).then((response) => {
      this.ohlcData = response.data;
      this.chart.series[0].setData(response.data);
    });
  }

  componentDidLoad() {
    TRADESERVICE.getOhlc(this.exchangeId, this.symbol, this.timeFrame).then((response) => {
      this.ohlcData = response.data;
      this.chart = highstock.stockChart('ohlc', {
        title: {
          text: ``,
        },
        rangeSelector: {
          enabled: false,
          inputEnabled: false,
        },
        navigator: {
          enabled: false,
        },
        scrollbar: {
          enabled: false,
        },
        plotOptions: {
          line: {
            dashStyle: 'ShortDot',
          },
        },
        series: [
          {
            name: `${this.exchangeId} - ${this.symbol}`,
            type: 'candlestick',
            data: this.ohlcData,
          },
          {
            name: 'Set Price',
            type: 'line',
            data: this.ohlcData.map((d) => {
              return [d[0], this.curPrice];
            }),
          },
        ],
      });
    });
  }

  render() {
    return [
      <ion-segment color="light" onIonChange={(e) => this.setTimeFrame(e.detail.value)}>
        <ion-segment-button value="1m" checked={this.timeFrame === '1m'}>
          <span style={{ color: 'black' }}>1 minute</span>
        </ion-segment-button>
        <ion-segment-button value="1h" checked={this.timeFrame === '1h'}>
          <span style={{ color: 'black' }}>1 hour</span>
        </ion-segment-button>
        <ion-segment-button value="1d" checked={this.timeFrame === '1d'}>
          <span style={{ color: 'black' }}>1 day</span>
        </ion-segment-button>
      </ion-segment>,
      <div id="ohlc" class="chart" />,
    ];
  }
}
