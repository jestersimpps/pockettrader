import { Component } from '@stencil/core';
@Component({
  tag: 'app-settings',
  styleUrl: 'app-settings.css',
})
export class AppSettings {
  render() {
    return [
      <ion-header>
        <ion-toolbar color="dark">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" />
          </ion-buttons>
          <ion-title>Settings</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
        <ion-list>
          <ion-item lines="full" href={`/settings/tutorial`}>
            <ion-icon name="book" item-start margin-right />
            <ion-label>Tutorial</ion-label>
          </ion-item>
          <ion-item lines="full" href={`/settings/keys`}>
            <ion-icon name="key" item-start margin-right />
            <ion-label>Exchange Keys</ion-label>
          </ion-item>
          <ion-item lines="full" href={`/settings/holdings`}>
            <ion-icon name="wallet" item-start margin-right />
            <ion-label>Wallet Holdings</ion-label>
          </ion-item>
          <ion-item lines="full" href={`/settings/basecurrency`}>
            <ion-icon name="logo-usd" item-start margin-right />
            <ion-label>Base Currency</ion-label>
          </ion-item>
          <ion-item lines="full" href={`/settings/dust`}>
            <ion-icon name="eye-off" item-start margin-right />
            <ion-label>Dust limit</ion-label>
          </ion-item>
          <ion-item lines="full" href={`/settings/premium`}>
            <ion-icon name="swap" item-start margin-right />
            <ion-label>Trading</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>,
    ];
  }
}
