import { Component } from '@stencil/core';
@Component({
  tag: 'app-wallets',
  styleUrl: 'app-wallets.css',
})
export class AppWallets {
  render() {
    return [
      <ion-header>
        <ion-toolbar color="dark">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" />
          </ion-buttons>
          <ion-title>Wallets</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
        <ion-list>
          <ion-item lines="full" href={`/settings/keys`}>
            <ion-icon name="key" item-start padding/>
            <ion-label>API Keys</ion-label>
          </ion-item>
          <ion-item lines="full" href={`/settings/basecurrency`}>
            <ion-icon name="logo-usd" item-start padding/>
            <ion-label>Base Currency</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>,
    ];
  }
}
