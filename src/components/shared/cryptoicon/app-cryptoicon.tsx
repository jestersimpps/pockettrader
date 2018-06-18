import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'app-cryptoicon',
  styleUrl: 'app-cryptoicon.css',
})
export class AppCryptoIcon {
  @Prop() symbol: string;

  render() {
    return [
      <span class={`icon icon-${this.symbol.toLowerCase()}`} />,
      // <img src={`https://github.com/cjdowner/cryptocurrency-icons/raw/master/32/icon/${this.symbol.toLowerCase()}.png`} />
    ];
  }
}
