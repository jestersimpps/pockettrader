import { Component, Prop, State } from '@stencil/core';
import { Exchange, ExchangeId } from '../../services/exchange.service';
import { Store } from '@stencil/redux';
import { Currency, ConversionRates } from '../../services/currency.service';
import { Ticker } from '../../services/ticker.service';

@Component({
  tag: 'app-exchangebalances',
  styleUrl: 'app-exchangebalances.css',
})
export class AppExchangeBalances {
  @Prop({ context: 'store' })
  store: Store;
  @Prop() exchangeId: ExchangeId;

  @State() exchanges: Exchange[] = [];
  @State() exchange: Exchange = new Exchange();
  @State() tickers: Ticker[] = [];
  @State() baseCurrency: Currency;
  @State() conversionRates: ConversionRates;

  componentWillLoad() {
    this.store.mapStateToProps(this, (state) => {
      const {
        app: { tickers, exchanges, baseCurrency, conversionRates },
      } = state;
      return {
        tickers,
        exchanges,
        baseCurrency,
        conversionRates,
      };
    });
  }

  componentDidLoad() {
    this.exchange = this.exchanges.find((e) => e.id === this.exchangeId);
  }

  render() {
    return [
      <ion-list>
        {this.exchange &&
          this.exchange.balances &&
          this.tickers.length &&
          this.exchange.balances
            .filter((b) => +b.btcPrice > 0.00001)
            .map((balance) => (
              <app-balanceitem
                exchangeId={this.exchangeId}
                baseCurrency={this.baseCurrency}
                cryptodata={balance}
                conversionRates={this.conversionRates}
              />
            ))}
      </ion-list>,
    ];
  }
}
