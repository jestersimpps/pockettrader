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
          <ion-item lines="full" href={`/settings/keys`}>
            <ion-icon name="key" item-start margin-right/>
            <ion-label>Configure Exchanges</ion-label>
          </ion-item>
          <ion-item lines="full" href={`/settings/wallets`}>
            <ion-icon name="briefcase" item-start margin-right/>
            <ion-label>Configure Wallets</ion-label>
          </ion-item>
          <ion-item lines="full" href={`/settings/basecurrency`}>
            <ion-icon name="logo-usd" item-start margin-right/>
            <ion-label>Set Base Currency</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>,
    ];
  }
}
