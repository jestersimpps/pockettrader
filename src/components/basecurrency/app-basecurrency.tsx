import { Component } from '@stencil/core';

@Component({
  tag: 'app-basecurrency',
  styleUrl: 'app-basecurrency.css',
})
export class AppBaseCurrency {
  render() {
    return [
      <ion-header>
        <ion-toolbar color="dark">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/settings" />
          </ion-buttons>
          <ion-title>Base Currency</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
        <ion-list>
          <ion-item lines="full">
            <ion-label>mBTC</ion-label>
            <ion-radio checked={true} value="mBTC" />
          </ion-item>
          <ion-item lines="full">
            <ion-label>BTC</ion-label>
            <ion-radio value="BTC" />
          </ion-item>
          <ion-item lines="full">
            <ion-label>USD</ion-label>
            <ion-radio value="USD" />
          </ion-item>
          <ion-item lines="full">
            <ion-label>EUR</ion-label>
            <ion-radio value="EUR" />
          </ion-item>
          <ion-item lines="full">
            <ion-label>GBP</ion-label>
            <ion-radio value="GBP" />
          </ion-item>
        </ion-list>
      </ion-content>,
    ];
  }
}
