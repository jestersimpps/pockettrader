import { Component, Prop, State } from '@stencil/core';
// import highcharts from '../../global/highcharts';
import numeral from 'numeral';
import { Balance } from '../../services/balance.service';
import { Exchange, ExchangeId } from '../../services/exchange.service';
import { CURRENCYSERVICE } from '../../services/globals';
import { Store } from '@stencil/redux';
import { Currency, BtcPrice } from '../../services/currency.service';
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
  @State() conversionRates: BtcPrice;

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

  getTotal(cur = 'btc') {
    let sum = 0;
    if (this.exchange && this.exchange.balances) {
      this.exchange.balances.map((balance: Balance) => {
        sum += balance[cur];
      });
    }
    // in millibits
    return sum;
  }

  render() {
    return [
      <ion-list>
        {this.exchange &&
          this.exchange.balances &&
          this.tickers.length &&
          this.exchange.balances.filter((b) => +b.btcprice > 0.00001).map((balance) => (
            <ion-item lines="full" href={`/pair/${this.exchange.id}/${balance.currency}`}>
              <ion-grid>
                <ion-row>
                  <ion-col col-6 class="lineText">
                    <img class="cicon" src={`https://github.com/cjdowner/cryptocurrency-icons/raw/master/32/icon/${balance.currency.toLowerCase()}.png`} />
                    <b class="ctext" >{balance.currency}</b>
                  </ion-col>
                  <ion-col col-6 text-right class="lineText">
                    <ion-badge color="light">
                      {`${numeral(CURRENCYSERVICE.convertToBase(balance.btc, this.conversionRates, this.baseCurrency)).format(
                        this.baseCurrency === Currency.btc ? '0,0.000000' : '0,0.00',
                      )} ${this.baseCurrency}`}
                    </ion-badge>
                  </ion-col>
                </ion-row>
                <ion-row>
                  <ion-col col-3 class="lineText">
                    <b style={{ color: balance.change > 0 ? '#10dc60' : '#f53d3d' }}>{numeral(balance.change).format('0,0.00')} %</b>
                  </ion-col>
                  <ion-col col-3 text-center class="lineText">
                    <span>{numeral(balance.balance).format('0,0.00')}</span>
                  </ion-col>
                  <ion-col col-6 text-right class="lineText">
                    {`${numeral(CURRENCYSERVICE.convertToBase(balance.btcprice, this.conversionRates, this.baseCurrency)).format(
                      this.baseCurrency === Currency.btc ? '0,0.000000' : '0,0.00',
                    )} ${this.baseCurrency}`}
                  </ion-col>
                </ion-row>
              </ion-grid>
            </ion-item>
          ))}
      </ion-list>,
    ];
  }
}
