import { Component, State, Prop } from '@stencil/core';
import { Exchange } from '../../../services/exchange.service';
import { Store } from '@stencil/redux';
// import numeral from 'numeral';

declare const d3;

@Component({
  tag: 'app-sunburst',
  styleUrl: 'app-sunburst.css',
})
export class AppSunburst {
  @Prop({ context: 'store' })
  store: Store;
  @State() exchanges: Exchange[] = [];

  componentWillLoad() {
    this.store.mapStateToProps(this, (state) => {
      const {
        app: { exchanges },
      } = state;
      return {
        exchanges,
      };
    });
  }

  componentDidLoad() {
    const nodeData = {
      name: 'All Balances',
      children: [
        ...this.exchanges.map((e) => {
          return {
            name: e.id,
            balance: e.balances.reduce(function(prev, cur) {
              return prev + cur.balance;
            }, 0),
            value: e.balances.reduce(function(prev, cur) {
              return prev + cur.btc;
            }, 0),
            children: e.balances.map((b) => {
              return { name: b.currency, size: b.btc, balance: b.balance, value: b.btc };
            }),
          };
        }),
        {
          name: 'Wallets',
          children: [],
        },
      ],
    };

    const width = window.innerWidth,
      height = window.innerHeight,
      maxRadius = Math.min(width, height) / 1.4;
    const formatNumber = d3.format(',d');
    const color = function(d) {
      let colors;

      if (!d.parent) {
        colors = d3.scaleOrdinal(['#488aff', '#32db64', '#ffce00', '#f53d3d', '#989aa2']);
        d.color = '#131722';
      } else if (d.children) {
        let startColor = d3.hcl(d.color).darker(),
          endColor = d3.hcl(d.color).brighter();

        colors = d3
          .scaleLinear()
          .interpolate(d3.interpolateHcl)
          .range([startColor.toString(), endColor.toString()])
          .domain([0, d.children.length + 1]);
      }

      if (d.children) {
        d.children
          .map(function(child, i) {
            return { value: child.value, idx: i };
          })
          .sort(function(a, b) {
            return b.value - a.value;
          })
          .forEach(function(child, i) {
            d.children[child.idx].color = colors(i);
          });
      }
      return d.color;
    };

    const x = d3
      .scaleLinear()
      .range([0, 2 * Math.PI])
      .clamp(true);

    const y = d3.scaleLinear().range([maxRadius * 0.1, maxRadius]);

    // const color = d3.scaleOrdinal(d3.schemeCategory20);

    const partition = d3.partition();

    const arc = d3
      .arc()
      .startAngle((d) => x(d.x0))
      .endAngle((d) => x(d.x1))
      .innerRadius((d) => Math.max(0, y(d.y0)))
      .outerRadius((d) => Math.max(0, y(d.y1)));

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
      .style('background', '#131722')
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

    newSlice.append('title').text((d) => d.data.name + '\n' + formatNumber(d.value));

    newSlice
      .append('path')
      .attr('class', 'main-arc')
      .attr('fill', color)
      .attr('d', arc);

    newSlice
      .append('path')
      .attr('class', 'hidden-arc')
      .attr('id', (_, i) => `hiddenArc${i}`)
      .attr('d', middleArcLine);

    const text = newSlice
      .append('text')
      .style('stroke', '#fff')
      .attr('fill', '#fff')
      .style('font-size', '1.2rem');

    text
      .append('textPath')
      .attr('startOffset', '50%')
      .attr('xlink:href', (_, i) => `#hiddenArc${i}`)
      .text((d) => `${d.data.name}`);

    function focusOn(d = { x0: 0, x1: 1, y0: 0, y1: 1 }) {
      // Reset to top-level if no data point specified

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
