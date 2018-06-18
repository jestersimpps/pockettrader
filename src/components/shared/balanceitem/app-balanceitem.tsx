import { Component, Prop } from '@stencil/core';
import numeral from 'numeral';
import { Wallet } from '../../../services/wallets.service';
import { ExchangeId } from '../../../services/exchange.service';
import { Currency } from '../../../services/currency.service';
import { Balance } from '../../../services/balance.service';
import { CURRENCYSERVICE } from '../../../services/globals';

@Component({
  tag: 'app-balanceitem',
  styleUrl: 'app-balanceitem.css',
})
export class AppBalanceItem {
  @Prop() exchangeId: ExchangeId;
  @Prop() baseCurrency: Currency;
  @Prop() cryptodata: Wallet | Balance;

  render() {
    return [
      // TODO: if exchangeid == null, pick one
      <ion-item lines="full" href={`/pair/${this.exchangeId}/${this.cryptodata.symbol}`}>
        <ion-grid>
          <ion-row>
            <ion-col col-4 class="lineText">
              <app-cryptoicon class="cicon" symbol={this.cryptodata.symbol} />
            </ion-col>
            <ion-col col-4 text-center class="lineText">
                <app-baseprice
                  btcPrice={CURRENCYSERVICE.convertToBase(this.cryptodata.btcAmount, this.baseCurrency)}
                  baseCurrency={this.baseCurrency}
                />
            </ion-col>
            <ion-col col-4 text-right class="lineText">
              <app-baseprice
                btcPrice={CURRENCYSERVICE.convertToBase(this.cryptodata.btcPrice, this.baseCurrency)}
                baseCurrency={this.baseCurrency}
              />
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col col-4 text-left class="lineText">
              <b class="ctext">{this.cryptodata.symbol}</b>
            </ion-col>
            <ion-col col-4 text-center class="lineText">
              <span>{numeral(this.cryptodata.balance).format('0,0.00')}</span>
            </ion-col>
            <ion-col col-4 text-right class="lineText">
              <b style={{ color: this.cryptodata.change > 0 ? '#10dc60' : '#f53d3d' }}>{numeral(this.cryptodata.change).format('0,0.00')} %</b>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-item>,
    ];
  }
}