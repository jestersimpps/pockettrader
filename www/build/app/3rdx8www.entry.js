/*! Built with http://stenciljs.com */
const{h:i}=window.App;class n{render(){return[i("ion-header",null,i("ion-toolbar",{color:"dark"},i("ion-buttons",{slot:"start"},i("ion-back-button",{defaultHref:"/"})),i("ion-title",null,"Settings"))),i("ion-content",null,i("ion-list",null,i("ion-item",{lines:"full",href:"/settings/tutorial"},i("ion-icon",{name:"book","item-start":!0,"margin-right":!0}),i("ion-label",null,"Tutorial")),i("ion-item",{lines:"full",href:"/settings/keys"},i("ion-icon",{name:"key","item-start":!0,"margin-right":!0}),i("ion-label",null,"Exchange Keys")),i("ion-item",{lines:"full",href:"/settings/holdings"},i("ion-icon",{name:"wallet","item-start":!0,"margin-right":!0}),i("ion-label",null,"Wallet Holdings")),i("ion-item",{lines:"full",href:"/settings/basecurrency"},i("ion-icon",{name:"logo-usd","item-start":!0,"margin-right":!0}),i("ion-label",null,"Base Currency")),i("ion-item",{lines:"full",href:"/settings/dust"},i("ion-icon",{name:"eye-off","item-start":!0,"margin-right":!0}),i("ion-label",null,"Dust limit")),i("ion-item",{lines:"full",href:"/settings/premium"},i("ion-icon",{name:"swap","item-start":!0,"margin-right":!0}),i("ion-label",null,"Trading"))))]}static get is(){return"app-settings"}static get style(){return""}}export{n as AppSettings};