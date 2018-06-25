/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import '@stencil/redux';
import '@ionic/core';
import 'ionicons';

import {
  Exchange,
  ExchangeId,
} from './services/exchange.service';
import {
  Wallet,
} from './services/wallets.service';
import {
  Currency,
} from './services/currency.service';
import {
  Balance,
} from './services/balance.service';

declare global {

  namespace StencilComponents {
    interface AppBasecurrency {

    }
  }

  interface HTMLAppBasecurrencyElement extends StencilComponents.AppBasecurrency, HTMLStencilElement {}

  var HTMLAppBasecurrencyElement: {
    prototype: HTMLAppBasecurrencyElement;
    new (): HTMLAppBasecurrencyElement;
  };
  interface HTMLElementTagNameMap {
    'app-basecurrency': HTMLAppBasecurrencyElement;
  }
  interface ElementTagNameMap {
    'app-basecurrency': HTMLAppBasecurrencyElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-basecurrency': JSXElements.AppBasecurrencyAttributes;
    }
  }
  namespace JSXElements {
    export interface AppBasecurrencyAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppEditwallet {
      'walletId': number;
    }
  }

  interface HTMLAppEditwalletElement extends StencilComponents.AppEditwallet, HTMLStencilElement {}

  var HTMLAppEditwalletElement: {
    prototype: HTMLAppEditwalletElement;
    new (): HTMLAppEditwalletElement;
  };
  interface HTMLElementTagNameMap {
    'app-editwallet': HTMLAppEditwalletElement;
  }
  interface ElementTagNameMap {
    'app-editwallet': HTMLAppEditwalletElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-editwallet': JSXElements.AppEditwalletAttributes;
    }
  }
  namespace JSXElements {
    export interface AppEditwalletAttributes extends HTMLAttributes {
      'walletId'?: number;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppExchangebalances {
      'exchangeId': ExchangeId;
    }
  }

  interface HTMLAppExchangebalancesElement extends StencilComponents.AppExchangebalances, HTMLStencilElement {}

  var HTMLAppExchangebalancesElement: {
    prototype: HTMLAppExchangebalancesElement;
    new (): HTMLAppExchangebalancesElement;
  };
  interface HTMLElementTagNameMap {
    'app-exchangebalances': HTMLAppExchangebalancesElement;
  }
  interface ElementTagNameMap {
    'app-exchangebalances': HTMLAppExchangebalancesElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-exchangebalances': JSXElements.AppExchangebalancesAttributes;
    }
  }
  namespace JSXElements {
    export interface AppExchangebalancesAttributes extends HTMLAttributes {
      'exchangeId'?: ExchangeId;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppExchangekeys {
      'exchangeId': ExchangeId;
    }
  }

  interface HTMLAppExchangekeysElement extends StencilComponents.AppExchangekeys, HTMLStencilElement {}

  var HTMLAppExchangekeysElement: {
    prototype: HTMLAppExchangekeysElement;
    new (): HTMLAppExchangekeysElement;
  };
  interface HTMLElementTagNameMap {
    'app-exchangekeys': HTMLAppExchangekeysElement;
  }
  interface ElementTagNameMap {
    'app-exchangekeys': HTMLAppExchangekeysElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-exchangekeys': JSXElements.AppExchangekeysAttributes;
    }
  }
  namespace JSXElements {
    export interface AppExchangekeysAttributes extends HTMLAttributes {
      'exchangeId'?: ExchangeId;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppExchanges {

    }
  }

  interface HTMLAppExchangesElement extends StencilComponents.AppExchanges, HTMLStencilElement {}

  var HTMLAppExchangesElement: {
    prototype: HTMLAppExchangesElement;
    new (): HTMLAppExchangesElement;
  };
  interface HTMLElementTagNameMap {
    'app-exchanges': HTMLAppExchangesElement;
  }
  interface ElementTagNameMap {
    'app-exchanges': HTMLAppExchangesElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-exchanges': JSXElements.AppExchangesAttributes;
    }
  }
  namespace JSXElements {
    export interface AppExchangesAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppBarchart {

    }
  }

  interface HTMLAppBarchartElement extends StencilComponents.AppBarchart, HTMLStencilElement {}

  var HTMLAppBarchartElement: {
    prototype: HTMLAppBarchartElement;
    new (): HTMLAppBarchartElement;
  };
  interface HTMLElementTagNameMap {
    'app-barchart': HTMLAppBarchartElement;
  }
  interface ElementTagNameMap {
    'app-barchart': HTMLAppBarchartElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-barchart': JSXElements.AppBarchartAttributes;
    }
  }
  namespace JSXElements {
    export interface AppBarchartAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppSplinechart {

    }
  }

  interface HTMLAppSplinechartElement extends StencilComponents.AppSplinechart, HTMLStencilElement {}

  var HTMLAppSplinechartElement: {
    prototype: HTMLAppSplinechartElement;
    new (): HTMLAppSplinechartElement;
  };
  interface HTMLElementTagNameMap {
    'app-splinechart': HTMLAppSplinechartElement;
  }
  interface ElementTagNameMap {
    'app-splinechart': HTMLAppSplinechartElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-splinechart': JSXElements.AppSplinechartAttributes;
    }
  }
  namespace JSXElements {
    export interface AppSplinechartAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppSunburst {
      'exchanges': Exchange[];
      'wallets': Wallet[];
    }
  }

  interface HTMLAppSunburstElement extends StencilComponents.AppSunburst, HTMLStencilElement {}

  var HTMLAppSunburstElement: {
    prototype: HTMLAppSunburstElement;
    new (): HTMLAppSunburstElement;
  };
  interface HTMLElementTagNameMap {
    'app-sunburst': HTMLAppSunburstElement;
  }
  interface ElementTagNameMap {
    'app-sunburst': HTMLAppSunburstElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-sunburst': JSXElements.AppSunburstAttributes;
    }
  }
  namespace JSXElements {
    export interface AppSunburstAttributes extends HTMLAttributes {
      'exchanges'?: Exchange[];
      'wallets'?: Wallet[];
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppKeys {

    }
  }

  interface HTMLAppKeysElement extends StencilComponents.AppKeys, HTMLStencilElement {}

  var HTMLAppKeysElement: {
    prototype: HTMLAppKeysElement;
    new (): HTMLAppKeysElement;
  };
  interface HTMLElementTagNameMap {
    'app-keys': HTMLAppKeysElement;
  }
  interface ElementTagNameMap {
    'app-keys': HTMLAppKeysElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-keys': JSXElements.AppKeysAttributes;
    }
  }
  namespace JSXElements {
    export interface AppKeysAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface MyApp {

    }
  }

  interface HTMLMyAppElement extends StencilComponents.MyApp, HTMLStencilElement {}

  var HTMLMyAppElement: {
    prototype: HTMLMyAppElement;
    new (): HTMLMyAppElement;
  };
  interface HTMLElementTagNameMap {
    'my-app': HTMLMyAppElement;
  }
  interface ElementTagNameMap {
    'my-app': HTMLMyAppElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-app': JSXElements.MyAppAttributes;
    }
  }
  namespace JSXElements {
    export interface MyAppAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppOverview {

    }
  }

  interface HTMLAppOverviewElement extends StencilComponents.AppOverview, HTMLStencilElement {}

  var HTMLAppOverviewElement: {
    prototype: HTMLAppOverviewElement;
    new (): HTMLAppOverviewElement;
  };
  interface HTMLElementTagNameMap {
    'app-overview': HTMLAppOverviewElement;
  }
  interface ElementTagNameMap {
    'app-overview': HTMLAppOverviewElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-overview': JSXElements.AppOverviewAttributes;
    }
  }
  namespace JSXElements {
    export interface AppOverviewAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppPair {
      'exchangeId': ExchangeId;
      'pair': string;
    }
  }

  interface HTMLAppPairElement extends StencilComponents.AppPair, HTMLStencilElement {}

  var HTMLAppPairElement: {
    prototype: HTMLAppPairElement;
    new (): HTMLAppPairElement;
  };
  interface HTMLElementTagNameMap {
    'app-pair': HTMLAppPairElement;
  }
  interface ElementTagNameMap {
    'app-pair': HTMLAppPairElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-pair': JSXElements.AppPairAttributes;
    }
  }
  namespace JSXElements {
    export interface AppPairAttributes extends HTMLAttributes {
      'exchangeId'?: ExchangeId;
      'pair'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppPanic {

    }
  }

  interface HTMLAppPanicElement extends StencilComponents.AppPanic, HTMLStencilElement {}

  var HTMLAppPanicElement: {
    prototype: HTMLAppPanicElement;
    new (): HTMLAppPanicElement;
  };
  interface HTMLElementTagNameMap {
    'app-panic': HTMLAppPanicElement;
  }
  interface ElementTagNameMap {
    'app-panic': HTMLAppPanicElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-panic': JSXElements.AppPanicAttributes;
    }
  }
  namespace JSXElements {
    export interface AppPanicAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppPremium {

    }
  }

  interface HTMLAppPremiumElement extends StencilComponents.AppPremium, HTMLStencilElement {}

  var HTMLAppPremiumElement: {
    prototype: HTMLAppPremiumElement;
    new (): HTMLAppPremiumElement;
  };
  interface HTMLElementTagNameMap {
    'app-premium': HTMLAppPremiumElement;
  }
  interface ElementTagNameMap {
    'app-premium': HTMLAppPremiumElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-premium': JSXElements.AppPremiumAttributes;
    }
  }
  namespace JSXElements {
    export interface AppPremiumAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppSettings {

    }
  }

  interface HTMLAppSettingsElement extends StencilComponents.AppSettings, HTMLStencilElement {}

  var HTMLAppSettingsElement: {
    prototype: HTMLAppSettingsElement;
    new (): HTMLAppSettingsElement;
  };
  interface HTMLElementTagNameMap {
    'app-settings': HTMLAppSettingsElement;
  }
  interface ElementTagNameMap {
    'app-settings': HTMLAppSettingsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-settings': JSXElements.AppSettingsAttributes;
    }
  }
  namespace JSXElements {
    export interface AppSettingsAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppBalanceitem {
      'baseCurrency': Currency;
      'cryptodata': Wallet | Balance;
      'exchangeId': ExchangeId;
    }
  }

  interface HTMLAppBalanceitemElement extends StencilComponents.AppBalanceitem, HTMLStencilElement {}

  var HTMLAppBalanceitemElement: {
    prototype: HTMLAppBalanceitemElement;
    new (): HTMLAppBalanceitemElement;
  };
  interface HTMLElementTagNameMap {
    'app-balanceitem': HTMLAppBalanceitemElement;
  }
  interface ElementTagNameMap {
    'app-balanceitem': HTMLAppBalanceitemElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-balanceitem': JSXElements.AppBalanceitemAttributes;
    }
  }
  namespace JSXElements {
    export interface AppBalanceitemAttributes extends HTMLAttributes {
      'baseCurrency'?: Currency;
      'cryptodata'?: Wallet | Balance;
      'exchangeId'?: ExchangeId;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppBaseprice {
      'baseCurrency': Currency;
      'btcPrice': number;
    }
  }

  interface HTMLAppBasepriceElement extends StencilComponents.AppBaseprice, HTMLStencilElement {}

  var HTMLAppBasepriceElement: {
    prototype: HTMLAppBasepriceElement;
    new (): HTMLAppBasepriceElement;
  };
  interface HTMLElementTagNameMap {
    'app-baseprice': HTMLAppBasepriceElement;
  }
  interface ElementTagNameMap {
    'app-baseprice': HTMLAppBasepriceElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-baseprice': JSXElements.AppBasepriceAttributes;
    }
  }
  namespace JSXElements {
    export interface AppBasepriceAttributes extends HTMLAttributes {
      'baseCurrency'?: Currency;
      'btcPrice'?: number;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppCryptoicon {
      'symbol': string;
    }
  }

  interface HTMLAppCryptoiconElement extends StencilComponents.AppCryptoicon, HTMLStencilElement {}

  var HTMLAppCryptoiconElement: {
    prototype: HTMLAppCryptoiconElement;
    new (): HTMLAppCryptoiconElement;
  };
  interface HTMLElementTagNameMap {
    'app-cryptoicon': HTMLAppCryptoiconElement;
  }
  interface ElementTagNameMap {
    'app-cryptoicon': HTMLAppCryptoiconElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-cryptoicon': JSXElements.AppCryptoiconAttributes;
    }
  }
  namespace JSXElements {
    export interface AppCryptoiconAttributes extends HTMLAttributes {
      'symbol'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppExchangeitem {
      'baseCurrency': Currency;
      'exchange': Exchange;
    }
  }

  interface HTMLAppExchangeitemElement extends StencilComponents.AppExchangeitem, HTMLStencilElement {}

  var HTMLAppExchangeitemElement: {
    prototype: HTMLAppExchangeitemElement;
    new (): HTMLAppExchangeitemElement;
  };
  interface HTMLElementTagNameMap {
    'app-exchangeitem': HTMLAppExchangeitemElement;
  }
  interface ElementTagNameMap {
    'app-exchangeitem': HTMLAppExchangeitemElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-exchangeitem': JSXElements.AppExchangeitemAttributes;
    }
  }
  namespace JSXElements {
    export interface AppExchangeitemAttributes extends HTMLAttributes {
      'baseCurrency'?: Currency;
      'exchange'?: Exchange;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppTrade {

    }
  }

  interface HTMLAppTradeElement extends StencilComponents.AppTrade, HTMLStencilElement {}

  var HTMLAppTradeElement: {
    prototype: HTMLAppTradeElement;
    new (): HTMLAppTradeElement;
  };
  interface HTMLElementTagNameMap {
    'app-trade': HTMLAppTradeElement;
  }
  interface ElementTagNameMap {
    'app-trade': HTMLAppTradeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-trade': JSXElements.AppTradeAttributes;
    }
  }
  namespace JSXElements {
    export interface AppTradeAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppWallets {

    }
  }

  interface HTMLAppWalletsElement extends StencilComponents.AppWallets, HTMLStencilElement {}

  var HTMLAppWalletsElement: {
    prototype: HTMLAppWalletsElement;
    new (): HTMLAppWalletsElement;
  };
  interface HTMLElementTagNameMap {
    'app-wallets': HTMLAppWalletsElement;
  }
  interface ElementTagNameMap {
    'app-wallets': HTMLAppWalletsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-wallets': JSXElements.AppWalletsAttributes;
    }
  }
  namespace JSXElements {
    export interface AppWalletsAttributes extends HTMLAttributes {

    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
