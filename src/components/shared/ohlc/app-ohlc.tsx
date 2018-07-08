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
    TRADESERVICE.getOhlc(this.exchangeId, this.symbol, this.timeFrame)
      .then((response) => {
        this.ohlcData = response.data;
        this.chart.series[0].setData(response.data);
        this.chart.series[1].setData(
          this.ohlcData.map((d) => {
            return [d[0], this.altPrice];
          }),
        );
      })
      .catch(() => {
        window.alert(`Couldn't get chart data`);
      });
  }

  setTimeFrame(timeFrame: string) {
    this.timeFrame = timeFrame;
    TRADESERVICE.getOhlc(this.exchangeId, this.symbol, timeFrame)
      .then((response) => {
        this.ohlcData = response.data;
        this.chart.series[0].setData(response.data);
        this.chart.series[1].setData(
          this.ohlcData.map((d) => {
            return [d[0], this.altPrice];
          }),
        );
      })
      .catch(() => {
        window.alert(`Couldn't get chart data`);
      });
  }

  componentDidLoad() {
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
          data: [],
        },
        {
          name: 'Set Price',
          type: 'line',
          data: [],
        },
      ],
    });
  }

  render() {
    return [
      <ion-segment color="dark" onIonChange={(e) => this.setTimeFrame(e.detail.value)}>
        <ion-segment-button value="1m" checked={this.timeFrame === '1m'}>
          1 hour{' '}
        </ion-segment-button>
        <ion-segment-button value="1h" checked={this.timeFrame === '1h'}>
          1 day{' '}
        </ion-segment-button>
        <ion-segment-button value="1d" checked={this.timeFrame === '1d'}>
          1 week{' '}
        </ion-segment-button>
      </ion-segment>,
      <div id="ohlc" style={{ height: '200px' }} />,
    ];
  }
}
