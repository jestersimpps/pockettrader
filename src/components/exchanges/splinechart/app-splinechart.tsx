import { Component, State, Prop } from '@stencil/core';
import { Store } from '@stencil/redux';
import highcharts from '../../../global/highcharts';
import { CURRENCYSERVICE } from '../../../services/globals';
import { Currency } from '../../../services/currency.service';

@Component({
  tag: 'app-splinechart',
  styleUrl: 'app-splinechart.css',
})
export class AppSplineChart {
  @Prop({ context: 'store' })
  store: Store;
  @State() totalBalances: [number, number][];
  @State() baseCurrency: Currency;

  chart;

  componentWillLoad() {
    this.store.mapStateToProps(this, (state) => {
      const {
        app: { baseCurrency, totalBalances },
      } = state;
      return {
        baseCurrency,
        totalBalances,
      };
    });
  }

  componentDidLoad() {
    this.chart = highcharts.chart('spline', {
      chart: {
        type: 'spline',
      },

      title: {
        text: '',
      },
      xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
          month: '%e. %b',
          year: '%b',
        },
        title: {
          text: '',
        },
      },
      yAxis: {
        title: {
          text: `Balance (${this.baseCurrency.symbol})`,
        },
      },
      tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: `<b>Time:</b> {point.x:%e %b %Y, %H:%M}<br><b>Balance:</b> ${this.baseCurrency.symbol} {point.y:.8f} `,
      },

      plotOptions: {
        spline: {
          marker: {
            enabled: true,
            radius: 2,
            // fillColor: '#488aff',
          },
        },
      },
      legend: {
        enabled: false,
      },
      colors: ['#000'],
      series: [
        {
          name: `Total ${this.baseCurrency.id} Balance over time`,
          data: this.balancePoints(),
        },
      ],
    });
  }

  balancePoints() {
    const balances = [];
    this.totalBalances.forEach((b) => {
      balances.push([b[0], +CURRENCYSERVICE.convertToBase(b[1], this.baseCurrency)]);
    });
    return balances.slice(-100);
  }

  render() {
    return [<div id="spline" class="chart" />];
  }
}
