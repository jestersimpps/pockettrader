import { Component, Prop } from '@stencil/core';
import highcharts from '../../global/highcharts';

@Component({
  tag: 'app-pairs',
  styleUrl: 'app-pairs.css',
})
export class AppPairs {
  @Prop() exchange: string;

  componentDidLoad() {
    highcharts.chart('container', {
      chart: {
        type: 'bar',
      },
      title: {
        text: 'Fruit Consumption',
      },
      xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges'],
      },
      yAxis: {
        title: {
          text: 'Fruit eaten',
        },
      },
      series: [
        {
          name: 'Jane',
          data: [1, 0, 4],
        },
        {
          name: 'John',
          data: [5, 7, 3],
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
      <div id="container" />,
      <ion-content padding />,
    ];
  }
}
