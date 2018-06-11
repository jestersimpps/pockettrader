import { Component, State, Prop } from '@stencil/core';
import { Store } from '@stencil/redux';
// import numeral from 'numeral';

declare const d3;

@Component({
  tag: 'app-barchart',
  styleUrl: 'app-barchart.css',
})
export class AppKeys {
  @Prop({ context: 'store' })
  store: Store;
  @State() totalBalances: [number, number][];

  componentWillLoad() {
    this.store.mapStateToProps(this, (state) => {
      const {
        app: { totalBalances },
      } = state;
      return {
        totalBalances,
      };
    });
  }

  componentDidLoad() {
    const data = this.totalBalances.map((t) => t[1]).slice(Math.max(this.totalBalances.length - 100, 1));
    d3.select('#bar-chart')
      .selectAll('div')
      .data(data)
      .enter()
      .append('div')
      .style('height', (d) => ((d - Math.min(...data)) * 100) / (Math.max(...data) - Math.min(...data)) + 'px')
      .style('width', () => window.innerWidth / data.length + 'px');
  }

  render() {
    return [<div id="bar-chart" />];
  }
}
