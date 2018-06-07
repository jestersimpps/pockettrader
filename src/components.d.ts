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

import '@ionic/core';
import 'ionicons';
import '@stencil/router';
import '@stencil/state-tunnel';


declare global {

  namespace StencilComponents {
    interface AppExchangedetail {
      'exchangeId': string;
    }
  }

  interface HTMLAppExchangedetailElement extends StencilComponents.AppExchangedetail, HTMLStencilElement {}

  var HTMLAppExchangedetailElement: {
    prototype: HTMLAppExchangedetailElement;
    new (): HTMLAppExchangedetailElement;
  };
  interface HTMLElementTagNameMap {
    'app-exchangedetail': HTMLAppExchangedetailElement;
  }
  interface ElementTagNameMap {
    'app-exchangedetail': HTMLAppExchangedetailElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-exchangedetail': JSXElements.AppExchangedetailAttributes;
    }
  }
  namespace JSXElements {
    export interface AppExchangedetailAttributes extends HTMLAttributes {
      'exchangeId'?: string;
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
    interface AppKeys {
      'exchangeId': string;
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
      'exchangeId'?: string;
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
    interface AppPairs {
      'exchange': string;
    }
  }

  interface HTMLAppPairsElement extends StencilComponents.AppPairs, HTMLStencilElement {}

  var HTMLAppPairsElement: {
    prototype: HTMLAppPairsElement;
    new (): HTMLAppPairsElement;
  };
  interface HTMLElementTagNameMap {
    'app-pairs': HTMLAppPairsElement;
  }
  interface ElementTagNameMap {
    'app-pairs': HTMLAppPairsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-pairs': JSXElements.AppPairsAttributes;
    }
  }
  namespace JSXElements {
    export interface AppPairsAttributes extends HTMLAttributes {
      'exchange'?: string;
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

declare global { namespace JSX { interface StencilJSX {} } }
