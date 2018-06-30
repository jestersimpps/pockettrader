import { Component, Prop } from '@stencil/core';
import { Exchange } from '../../../services/exchange.service';
import numeral from 'numeral';
import { Wallet } from '../../../services/wallets.service';
import { Currency } from '../../../services/currency.service';
import { CURRENCYSERVICE } from '../../../services/globals';

declare const d3;

@Component({
  tag: 'app-sunburst',
  styleUrl: 'app-sunburst.css',
})
export class AppSunburst {
  @Prop() exchanges: Exchange[] = [];
  @Prop() wallets: Wallet[] = [];
  @Prop() totalBalance: number;
  @Prop() baseCurrency: Currency;

  componentDidLoad() {
    let innerText = `${this.baseCurrency.symbol} ${numeral(CURRENCYSERVICE.convertToBase(this.totalBalance, this.baseCurrency)).format(
      this.baseCurrency.id === `BTC` ? '0,0.0000' : '0,0.00',
    )}`;
    const nodeData = {
      name: innerText,
      change: 0,
      children: [
        ...this.exchanges.map((e) => {
          return {
            name: e.id,
            balance: e.balances.reduce((a, b) => a + b.balance, 0),
            value: e.balances.reduce((a, b) => a + b.btcAmount, 0),
            change: e.balances.reduce((a, b) => a + b.change * b.btcAmount, 0) / e.balances.reduce((a, b) => a + b.btcAmount, 0),
            children: e.balances.map((b) => {
              return { name: b.currency, size: b.btcAmount, balance: b.balance, value: b.btcAmount, change: b.change };
            }),
          };
        }),
        {
          name: 'Wallets',
          balance: this.wallets.reduce((a, b) => a + b.balance, 0),
          value: this.wallets.reduce((a, b) => a + b.btcAmount, 0),
          change: this.wallets.reduce((a, b) => a + b.change * b.btcAmount, 0) / this.wallets.reduce((a, b) => a + b.btcAmount, 0),
          children: this.wallets.map((w) => {
            return { name: w.currency, size: w.btcAmount, balance: w.balance, value: w.btcAmount, change: w.change };
          }),
        },
      ],
    };

    const width = window.innerWidth,
      height = window.innerHeight,
      maxRadius = Math.min(width, height) / 1.4;
    const max = Math.max(...this.exchanges.map((e) => Math.max(...e.balances.map((b) => b.change))));
    const min = Math.min(...this.exchanges.map((e) => Math.min(...e.balances.map((b) => b.change))));
    let color = d3
      .scaleLinear()
      .domain([min, 0, max])
      .range(['#f53d3d', '#fff', '#10dc60']);

    const x = d3
      .scaleLinear()
      .range([0, 2 * Math.PI])
      .clamp(true);

    const y = d3.scaleLinear().range([maxRadius * 0.1, maxRadius]);

    const partition = d3.partition();

    const middleArcLine = (d) => {
      const halfPi = Math.PI / 2;
      const angles = [x(d.x0) - halfPi, x(d.x1) - halfPi];
      const r = Math.max(0, (y(d.y0) + y(d.y1)) / 2);

      const middleAngle = (angles[1] + angles[0]) / 2;
      const invertDirection = middleAngle > 0 && middleAngle < Math.PI; // On lower quadrants write text ccw
      if (invertDirection) {
        angles.reverse();
      }
      const path = d3.path();
      path.arc(0, 0, r, angles[0], angles[1], invertDirection);
      return path.toString();
    };

    const textFits = (d) => {
      const CHAR_SPACE = 6;
      const deltaAngle = x(d.x1) - x(d.x0);
      const r = Math.max(0, (y(d.y0) + y(d.y1)) / 2);
      const perimeter = r * deltaAngle;
      return d.data.name.length * CHAR_SPACE < perimeter;
    };

    const svg = d3
      .select('#sunburst-chart')
      .append('svg')
      .style('width', '100vw')
      .style('height', '400px')
      .style('background', '#fff')
      .attr('viewBox', `${-width / 2} ${-height / 2} ${width} ${height}`)
      .on('click', () => focusOn()); // Reset zoom on canvas click

    const root = d3.hierarchy(nodeData).sum(function(d) {
      return d.size;
    });

    const slice = svg.selectAll('g.slice').data(partition(root).descendants());

    const newSlice = slice
      .enter()
      .append('g')
      .attr('class', 'slice')
      .on('click', (d) => {
        d3.event.stopPropagation();
        focusOn(d);
      });

    const arc = d3
      .arc()
      .startAngle((d) => x(d.x0))
      .endAngle((d) => x(d.x1))
      .innerRadius((d) => Math.max(0, y(d.y0)))
      .outerRadius((d) => Math.max(0, y(d.y1)));

    newSlice
      .append('path')
      .attr('class', 'main-arc')
      .attr('fill', (d) => color(d.data.change))
      .transition()
      // .delay(function(d,i) {
      //   return 500 * (d.y1 - d.y0) * i;
      // })
      .duration(function(d) {
        return 2000 * (d.y1 - d.y0);
      })
      .attrTween('d', function(d) {
        var i = d3.interpolate(d.x0, d.x1);
        return function(t) {
          d.x1 = i(t);
          return arc(d);
        };
      });

    newSlice
      .append('path')
      .attr('class', 'hidden-arc')
      .attr('id', (_, i) => `hiddenArc${i}`)
      .attr('d', middleArcLine);

    const text = newSlice
      .append('text')
      .style('stroke', '#000')
      .attr('fill', '#000')
      .style('font-size', '1.2rem');

    text
      .append('textPath')
      .attr('startOffset', '50%')
      .attr('xlink:href', (_, i) => `#hiddenArc${i}`)
      .text((d) => {
        if (d.data.change != 0) {
          return `${d.data.name} (${numeral(d.data.change).format('0.0')}%)`;
        } else {
          return `${d.data.name} `;
        }
      });

    function focusOn(d = { x0: 0, x1: 1, y0: 0, y1: 1 }) {
      const transition = svg
        .transition()
        .duration(500)
        .tween('scale', () => {
          const xd = d3.interpolate(x.domain(), [d.x0, d.x1]),
            yd = d3.interpolate(y.domain(), [d.y0, 1]);
          return (t) => {
            x.domain(xd(t));
            y.domain(yd(t));
          };
        });

      transition.selectAll('path.main-arc').attrTween('d', (d) => () => arc(d));
      transition.selectAll('path.hidden-arc').attrTween('d', (d) => () => middleArcLine(d));
      transition.selectAll('text').attrTween('display', (d) => () => (textFits(d) ? null : 'none'));

      moveStackToFront(d);

      function moveStackToFront(elD) {
        svg
          .selectAll('.slice')
          .filter((d) => d === elD)
          .each(function(d) {
            this.parentNode.appendChild(this);
            if (d.parent) {
              moveStackToFront(d.parent);
            }
          })
          .transition()
          .duration(500);
      }
    }
  }

  render() {
    return [<div id="sunburst-chart" />];
  }
}
