/*! Built with http://stenciljs.com */
const { h } = window.App;

class AppBarChart {
    componentWillLoad() {
        this.store.mapStateToProps(this, (state) => {
            const { app: { totalBalances }, } = state;
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
        return [h("div", { id: "bar-chart" })];
    }
    static get is() { return "app-barchart"; }
    static get properties() { return {
        "store": {
            "context": "store"
        },
        "totalBalances": {
            "state": true
        }
    }; }
    static get style() { return "#bar-chart div {\n    display: inline-block;\n    background: #2678B2;\n  }\n#bar-chart div:hover {\n    background: #FD7F28;\n  }"; }
}

export { AppBarChart as AppBarchart };
