/*! Built with http://stenciljs.com */
const{h:e}=window.App;import{a as t,b as a}from"./chunk-6061a41c.js";const n=new class{constructor(){this.currencies=[{id:"mBTC",symbol:"mBTC",conversionRate:1e3},{id:"BTC",symbol:"BTC",conversionRate:1},{id:"EUR",symbol:"€",conversionRate:null},{id:"USD",symbol:"$",conversionRate:null},{id:"GBP",symbol:"£",conversionRate:null}]}getBaseCurrency(){return t.get("basecurrency")}getConversionRates(){return axios.get("https://api.coindesk.com/v1/bpi/currentprice.json").then(e=>(this.currencies.map(t=>{switch(t.id){case"USD":t.conversionRate=+e.data.bpi.USD.rate_float;break;case"EUR":t.conversionRate=+e.data.bpi.EUR.rate_float;break;case"GBP":t.conversionRate=+e.data.bpi.GBP.rate_float}}),t.set("currencies",this.currencies),this.currencies))}setBaseCurrency(e){t.set("basecurrency",e)}convertToBase(e,t){return e*this.currencies.find(e=>e.id===t.id).conversionRate}getBaseTotal(e,t){let a=0;return e.forEach(e=>{a+=e.btcAmount}),this.convertToBase(a,t)}},s=new class{getTotalBalances(){return t.get("totalbalances")}getBalancesFromStore(){return t.get("balances")}getLatestTotal(e){return e.length?e[e.length-1][1]:0}setTotalBalances(e){t.set("totalbalances",e)}setBalances(e){t.set("balances",e)}getBalances(e){return axios.post(`https://lightningassets.com/exchangeapi/${e.id}/balances/get`,{key:e.key,secret:e.secret})}refreshBalances(e,t){let a=[],r=[],o=[],l=[],i=[],u=e.filter(e=>e.balance>0),g=t.filter(e=>e.key&&e.secret);g.forEach(e=>{a.push(e.id),r.push(c.getTickers(e.id)),o.push(s.getBalances(e))}),u.forEach(e=>l.push(c.getCoinmarketcapTicker(e.id)));let h={conversionrates:null,tickers:null,wallets:null,exchanges:null,exchangeTotal:0,walletTotal:0};return n.getConversionRates().then(e=>(h.conversionrates=e,Promise.all(r).then(e=>Promise.all(l).then(n=>Promise.all(o).then(s=>{for(let t=0;t<a.length;t++)i[t]={exchangeId:a[t],tickers:e[t].data},g[t].balances=s[t].data.map(a=>{const n=this.getBtcStats(a,e[t].data);return h.exchangeTotal+=n.amount,{btcAmount:n.amount,balance:a.balance,pending:a.pending,available:a.available,symbol:a.currency,btcPrice:n.price,change:n.change}}).filter(e=>+e.btcAmount>2e-6);for(let e=0;e<u.length;e++)u[e].btcPrice=+n[e].data.data.quotes.BTC.price,u[e].btcAmount=+u[e].balance*+n[e].data.data.quotes.BTC.price,u[e].change=+n[e].data.data.quotes.BTC.percent_change_24h,h.walletTotal+=+u[e].balance*+n[e].data.data.quotes.BTC.price;return h.tickers=i,h.wallets=u,h.exchanges=t.map(e=>{return g.find(t=>t.id===e.id)||e}),h}).catch(e=>(window.alert(e.message),null))).catch(e=>(window.alert(e.message),null))).catch(e=>(window.alert(e.message),null)))).catch(e=>(window.alert(e.message),null))}getBtcStats(e,t){let a={price:0,amount:0,change:0,last:0};const n=t.find(t=>t.symbol===`${e.currency}/BTC`),s=t.find(t=>t.symbol===`BTC/${e.currency}`);return"BTC"===e.currency&&(a.amount=e.balance,a.price=1),n&&(a.amount=e.balance*n.last,a.price=n.last,a.change=n.percentage),s&&(a.amount=e.balance/s.last,a.price=1/s.last,a.change=s.percentage),a}},r=new a,c=new class{getTickersFromStore(){return t.get("tickers")}setTickers(e){return t.set("tickers",e)}getTickers(e){return axios.get(`https://lightningassets.com/exchangeapi/${e}/tickers`)}getTicker(e,t){return axios.get(`https://lightningassets.com/exchangeapi/${e}/ticker/data?symbol=${t}`)}getCoinmarketcapTicker(e){return axios.get(`https://api.coinmarketcap.com/v2/ticker/${e}/?convert=BTC`)}},o=new class{getWalletsFromStorage(){return t.get("wallets")}setWallets(e){return t.set("wallets",e)}getCoinmarketCapListings(){return axios.get("https://api.coinmarketcap.com/v2/listings/")}},l=new class{constructor(){}getTokenFromStore(){return t.get("token")}setToken(e){return t.set("token",e)}generateNewToken(){let e=(new Date).getTime();return new Hashids(`token-${e}`,8).encode(1,2,3)}};export{n as a,c as b,s as c,l as d,r as e,o as f};