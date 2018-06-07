import { Component, Prop } from '@stencil/core';
import highcharts from '../../global/highcharts';
import { Balance } from './balance.model';

@Component({
  tag: 'app-exchangedetail',
  styleUrl: 'app-exchangedetail.css',
})
export class AppExchangeDetail {
  @Prop() exchange: string;
  balances: Balance[] = [
    {
      currency: 'eth',
      available: 300,
      pending: 100,
      balance: 300,
    },
    {
      currency: 'btc',
      available: 300,
      pending: 100,
      balance: 100,
    },
    {
      currency: 'ltc',
      available: 300,
      pending: 100,
      balance: 500,
    },
  ];

  componentDidLoad() {
    highcharts.chart('pie', {
      chart: {
        plotBackgroundColor: '#fff',
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
      },
      title: {
        text: ``,
      },
      tooltip: {
        pointFormat: `{series.name}: <b>{point.percentage:.1f}%</b>`,
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b><br>{point.percentage:.1f} % ',
            distance: 0,
          },
        },
      },
      series: [
        {
          name: 'Balances',
          data: this.balances.map((balance) => {
            return {
              name: balance.currency,
              y: balance.balance,
            };
          }),
        },
      ],
    });
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" />
          </ion-buttons>
          <ion-title>{this.exchange}</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content padding>
        <div id="pie" />
      </ion-content>,
    ];
  }
}
