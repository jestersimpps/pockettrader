/*! Built with http://stenciljs.com */
(function(Context,namespace,hydratedCssClass,resourcesUrl,s){"use strict";
s=document.querySelector("script[data-namespace='app']");if(s){resourcesUrl=s.getAttribute('data-resources-url');}
(function(resourcesUrl){
    /** App global **/

    var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var highcharts = createCommonjsModule(function (module) {
    /*
     Highcharts JS v6.1.0 (2018-04-13)

     (c) 2009-2016 Torstein Honsi

     License: www.highcharts.com/license
    */
    (function(T,K){module.exports?module.exports=T.document?K(T):K:T.Highcharts=K(T);})("undefined"!==typeof window?window:commonjsGlobal,function(T){var K=function(){var a="undefined"===typeof T?window:T,C=a.document,F=a.navigator&&a.navigator.userAgent||"",D=C&&C.createElementNS&&!!C.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,r=/(edge|msie|trident)/i.test(F)&&!a.opera,g=-1!==F.indexOf("Firefox"),e=-1!==F.indexOf("Chrome"),t=g&&4>parseInt(F.split("Firefox/")[1],
    10);return a.Highcharts?a.Highcharts.error(16,!0):{product:"Highcharts",version:"6.1.0",deg2rad:2*Math.PI/360,doc:C,hasBidiBug:t,hasTouch:C&&void 0!==C.documentElement.ontouchstart,isMS:r,isWebKit:-1!==F.indexOf("AppleWebKit"),isFirefox:g,isChrome:e,isSafari:!e&&-1!==F.indexOf("Safari"),isTouchDevice:/(Mobile|Android|Windows Phone)/.test(F),SVG_NS:"http://www.w3.org/2000/svg",chartCount:0,seriesTypes:{},symbolSizes:{},svg:D,win:a,marginNames:["plotTop","marginRight","marginBottom","plotLeft"],noop:function(){},
    charts:[]}}();(function(a){a.timers=[];var C=a.charts,F=a.doc,D=a.win;a.error=function(r,g){r=a.isNumber(r)?"Highcharts error #"+r+": www.highcharts.com/errors/"+r:r;if(g)throw Error(r);D.console&&console.log(r);};a.Fx=function(a,g,e){this.options=g;this.elem=a;this.prop=e;};a.Fx.prototype={dSetter:function(){var a=this.paths[0],g=this.paths[1],e=[],t=this.now,w=a.length,l;if(1===t)e=this.toD;else if(w===g.length&&1>t)for(;w--;)l=parseFloat(a[w]),e[w]=isNaN(l)?g[w]:t*parseFloat(g[w]-l)+l;else e=g;this.elem.attr("d",
    e,null,!0);},update:function(){var a=this.elem,g=this.prop,e=this.now,t=this.options.step;if(this[g+"Setter"])this[g+"Setter"]();else a.attr?a.element&&a.attr(g,e,null,!0):a.style[g]=e+this.unit;t&&t.call(a,e,this);},run:function(r,g,e){var t=this,w=t.options,l=function(a){return l.stopped?!1:t.step(a)},u=D.requestAnimationFrame||function(a){setTimeout(a,13);},c=function(){for(var d=0;d<a.timers.length;d++)a.timers[d]()||a.timers.splice(d--,1);a.timers.length&&u(c);};r!==g||this.elem["forceAnimate:"+
    this.prop]?(this.startTime=+new Date,this.start=r,this.end=g,this.unit=e,this.now=this.start,this.pos=0,l.elem=this.elem,l.prop=this.prop,l()&&1===a.timers.push(l)&&u(c)):(delete w.curAnim[this.prop],w.complete&&0===a.keys(w.curAnim).length&&w.complete.call(this.elem));},step:function(r){var g=+new Date,e,t=this.options,w=this.elem,l=t.complete,u=t.duration,c=t.curAnim;w.attr&&!w.element?r=!1:r||g>=u+this.startTime?(this.now=this.end,this.pos=1,this.update(),e=c[this.prop]=!0,a.objectEach(c,function(a){!0!==
    a&&(e=!1);}),e&&l&&l.call(w),r=!1):(this.pos=t.easing((g-this.startTime)/u),this.now=this.start+(this.end-this.start)*this.pos,this.update(),r=!0);return r},initPath:function(r,g,e){function t(a){var f,c;for(b=a.length;b--;)f="M"===a[b]||"L"===a[b],c=/[a-zA-Z]/.test(a[b+3]),f&&c&&a.splice(b+1,0,a[b+1],a[b+2],a[b+1],a[b+2]);}function w(a,f){for(;a.length<p;){a[0]=f[p-a.length];var c=a.slice(0,x);[].splice.apply(a,[0,0].concat(c));n&&(c=a.slice(a.length-x),[].splice.apply(a,[a.length,0].concat(c)),b--);}a[0]=
    "M";}function l(a,b){for(var c=(p-a.length)/x;0<c&&c--;)f=a.slice().splice(a.length/z-x,x*z),f[0]=b[p-x-c*x],k&&(f[x-6]=f[x-2],f[x-5]=f[x-1]),[].splice.apply(a,[a.length/z,0].concat(f)),n&&c--;}g=g||"";var u,c=r.startX,d=r.endX,k=-1<g.indexOf("C"),x=k?7:3,p,f,b;g=g.split(" ");e=e.slice();var n=r.isArea,z=n?2:1,J;k&&(t(g),t(e));if(c&&d){for(b=0;b<c.length;b++)if(c[b]===d[0]){u=b;break}else if(c[0]===d[d.length-c.length+b]){u=b;J=!0;break}void 0===u&&(g=[]);}g.length&&a.isNumber(u)&&(p=e.length+u*z*x,
    J?(w(g,e),l(e,g)):(w(e,g),l(g,e)));return [g,e]}};a.Fx.prototype.fillSetter=a.Fx.prototype.strokeSetter=function(){this.elem.attr(this.prop,a.color(this.start).tweenTo(a.color(this.end),this.pos),null,!0);};a.merge=function(){var r,g=arguments,e,t={},w=function(e,u){"object"!==typeof e&&(e={});a.objectEach(u,function(c,d){!a.isObject(c,!0)||a.isClass(c)||a.isDOMElement(c)?e[d]=u[d]:e[d]=w(e[d]||{},c);});return e};!0===g[0]&&(t=g[1],g=Array.prototype.slice.call(g,2));e=g.length;for(r=0;r<e;r++)t=w(t,
    g[r]);return t};a.pInt=function(a,g){return parseInt(a,g||10)};a.isString=function(a){return "string"===typeof a};a.isArray=function(a){a=Object.prototype.toString.call(a);return "[object Array]"===a||"[object Array Iterator]"===a};a.isObject=function(r,g){return !!r&&"object"===typeof r&&(!g||!a.isArray(r))};a.isDOMElement=function(r){return a.isObject(r)&&"number"===typeof r.nodeType};a.isClass=function(r){var g=r&&r.constructor;return !(!a.isObject(r,!0)||a.isDOMElement(r)||!g||!g.name||"Object"===
    g.name)};a.isNumber=function(a){return "number"===typeof a&&!isNaN(a)&&Infinity>a&&-Infinity<a};a.erase=function(a,g){for(var e=a.length;e--;)if(a[e]===g){a.splice(e,1);break}};a.defined=function(a){return void 0!==a&&null!==a};a.attr=function(r,g,e){var t;a.isString(g)?a.defined(e)?r.setAttribute(g,e):r&&r.getAttribute&&((t=r.getAttribute(g))||"class"!==g||(t=r.getAttribute(g+"Name"))):a.defined(g)&&a.isObject(g)&&a.objectEach(g,function(a,e){r.setAttribute(e,a);});return t};a.splat=function(r){return a.isArray(r)?
    r:[r]};a.syncTimeout=function(a,g,e){if(g)return setTimeout(a,g,e);a.call(0,e);};a.clearTimeout=function(r){a.defined(r)&&clearTimeout(r);};a.extend=function(a,g){var e;a||(a={});for(e in g)a[e]=g[e];return a};a.pick=function(){var a=arguments,g,e,t=a.length;for(g=0;g<t;g++)if(e=a[g],void 0!==e&&null!==e)return e};a.css=function(r,g){a.isMS&&!a.svg&&g&&void 0!==g.opacity&&(g.filter="alpha(opacity\x3d"+100*g.opacity+")");a.extend(r.style,g);};a.createElement=function(r,g,e,t,w){r=F.createElement(r);var l=
    a.css;g&&a.extend(r,g);w&&l(r,{padding:0,border:"none",margin:0});e&&l(r,e);t&&t.appendChild(r);return r};a.extendClass=function(r,g){var e=function(){};e.prototype=new r;a.extend(e.prototype,g);return e};a.pad=function(a,g,e){return Array((g||2)+1-String(a).replace("-","").length).join(e||0)+a};a.relativeLength=function(a,g,e){return /%$/.test(a)?g*parseFloat(a)/100+(e||0):parseFloat(a)};a.wrap=function(a,g,e){var t=a[g];a[g]=function(){var a=Array.prototype.slice.call(arguments),l=arguments,u=this;
    u.proceed=function(){t.apply(u,arguments.length?arguments:l);};a.unshift(t);a=e.apply(this,a);u.proceed=null;return a};};a.formatSingle=function(r,g,e){var t=/\.([0-9])/,w=a.defaultOptions.lang;/f$/.test(r)?(e=(e=r.match(t))?e[1]:-1,null!==g&&(g=a.numberFormat(g,e,w.decimalPoint,-1<r.indexOf(",")?w.thousandsSep:""))):g=(e||a.time).dateFormat(r,g);return g};a.format=function(r,g,e){for(var t="{",w=!1,l,u,c,d,k=[],x;r;){t=r.indexOf(t);if(-1===t)break;l=r.slice(0,t);if(w){l=l.split(":");u=l.shift().split(".");
    d=u.length;x=g;for(c=0;c<d;c++)x&&(x=x[u[c]]);l.length&&(x=a.formatSingle(l.join(":"),x,e));k.push(x);}else k.push(l);r=r.slice(t+1);t=(w=!w)?"}":"{";}k.push(r);return k.join("")};a.getMagnitude=function(a){return Math.pow(10,Math.floor(Math.log(a)/Math.LN10))};a.normalizeTickInterval=function(r,g,e,t,w){var l,u=r;e=a.pick(e,1);l=r/e;g||(g=w?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],!1===t&&(1===e?g=a.grep(g,function(a){return 0===a%1}):.1>=e&&(g=[1/e])));for(t=0;t<g.length&&!(u=g[t],w&&u*e>=r||
    !w&&l<=(g[t]+(g[t+1]||g[t]))/2);t++);return u=a.correctFloat(u*e,-Math.round(Math.log(.001)/Math.LN10))};a.stableSort=function(a,g){var e=a.length,t,w;for(w=0;w<e;w++)a[w].safeI=w;a.sort(function(a,e){t=g(a,e);return 0===t?a.safeI-e.safeI:t});for(w=0;w<e;w++)delete a[w].safeI;};a.arrayMin=function(a){for(var g=a.length,e=a[0];g--;)a[g]<e&&(e=a[g]);return e};a.arrayMax=function(a){for(var g=a.length,e=a[0];g--;)a[g]>e&&(e=a[g]);return e};a.destroyObjectProperties=function(r,g){a.objectEach(r,function(a,
    t){a&&a!==g&&a.destroy&&a.destroy();delete r[t];});};a.discardElement=function(r){var g=a.garbageBin;g||(g=a.createElement("div"));r&&g.appendChild(r);g.innerHTML="";};a.correctFloat=function(a,g){return parseFloat(a.toPrecision(g||14))};a.setAnimation=function(r,g){g.renderer.globalAnimation=a.pick(r,g.options.chart.animation,!0);};a.animObject=function(r){return a.isObject(r)?a.merge(r):{duration:r?500:0}};a.timeUnits={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,
    year:314496E5};a.numberFormat=function(r,g,e,t){r=+r||0;g=+g;var w=a.defaultOptions.lang,l=(r.toString().split(".")[1]||"").split("e")[0].length,u,c,d=r.toString().split("e");-1===g?g=Math.min(l,20):a.isNumber(g)?g&&d[1]&&0>d[1]&&(u=g+ +d[1],0<=u?(d[0]=(+d[0]).toExponential(u).split("e")[0],g=u):(d[0]=d[0].split(".")[0]||0,r=20>g?(d[0]*Math.pow(10,d[1])).toFixed(g):0,d[1]=0)):g=2;c=(Math.abs(d[1]?d[0]:r)+Math.pow(10,-Math.max(g,l)-1)).toFixed(g);l=String(a.pInt(c));u=3<l.length?l.length%3:0;e=a.pick(e,
    w.decimalPoint);t=a.pick(t,w.thousandsSep);r=(0>r?"-":"")+(u?l.substr(0,u)+t:"");r+=l.substr(u).replace(/(\d{3})(?=\d)/g,"$1"+t);g&&(r+=e+c.slice(-g));d[1]&&0!==+r&&(r+="e"+d[1]);return r};Math.easeInOutSine=function(a){return -.5*(Math.cos(Math.PI*a)-1)};a.getStyle=function(r,g,e){if("width"===g)return Math.min(r.offsetWidth,r.scrollWidth)-a.getStyle(r,"padding-left")-a.getStyle(r,"padding-right");if("height"===g)return Math.min(r.offsetHeight,r.scrollHeight)-a.getStyle(r,"padding-top")-a.getStyle(r,
    "padding-bottom");D.getComputedStyle||a.error(27,!0);if(r=D.getComputedStyle(r,void 0))r=r.getPropertyValue(g),a.pick(e,"opacity"!==g)&&(r=a.pInt(r));return r};a.inArray=function(r,g,e){return (a.indexOfPolyfill||Array.prototype.indexOf).call(g,r,e)};a.grep=function(r,g){return (a.filterPolyfill||Array.prototype.filter).call(r,g)};a.find=Array.prototype.find?function(a,g){return a.find(g)}:function(a,g){var e,t=a.length;for(e=0;e<t;e++)if(g(a[e],e))return a[e]};a.some=function(r,g,e){return (a.somePolyfill||
    Array.prototype.some).call(r,g,e)};a.map=function(a,g){for(var e=[],t=0,w=a.length;t<w;t++)e[t]=g.call(a[t],a[t],t,a);return e};a.keys=function(r){return (a.keysPolyfill||Object.keys).call(void 0,r)};a.reduce=function(r,g,e){return (a.reducePolyfill||Array.prototype.reduce).call(r,g,e)};a.offset=function(a){var g=F.documentElement;a=a.parentElement?a.getBoundingClientRect():{top:0,left:0};return {top:a.top+(D.pageYOffset||g.scrollTop)-(g.clientTop||0),left:a.left+(D.pageXOffset||g.scrollLeft)-(g.clientLeft||
    0)}};a.stop=function(r,g){for(var e=a.timers.length;e--;)a.timers[e].elem!==r||g&&g!==a.timers[e].prop||(a.timers[e].stopped=!0);};a.each=function(r,g,e){return (a.forEachPolyfill||Array.prototype.forEach).call(r,g,e)};a.objectEach=function(a,g,e){for(var t in a)a.hasOwnProperty(t)&&g.call(e||a[t],a[t],t,a);};a.addEvent=function(r,g,e){var t,w=r.addEventListener||a.addEventListenerPolyfill;t="function"===typeof r&&r.prototype?r.prototype.protoEvents=r.prototype.protoEvents||{}:r.hcEvents=r.hcEvents||
    {};w&&w.call(r,g,e,!1);t[g]||(t[g]=[]);t[g].push(e);return function(){a.removeEvent(r,g,e);}};a.removeEvent=function(r,g,e){function t(c,d){var k=r.removeEventListener||a.removeEventListenerPolyfill;k&&k.call(r,c,d,!1);}function w(c){var d,k;r.nodeName&&(g?(d={},d[g]=!0):d=c,a.objectEach(d,function(a,d){if(c[d])for(k=c[d].length;k--;)t(d,c[d][k]);}));}var l,u;a.each(["protoEvents","hcEvents"],function(c){var d=r[c];d&&(g?(l=d[g]||[],e?(u=a.inArray(e,l),-1<u&&(l.splice(u,1),d[g]=l),t(g,e)):(w(d),d[g]=
    [])):(w(d),r[c]={}));});};a.fireEvent=function(r,g,e,t){var w,l,u,c,d;e=e||{};F.createEvent&&(r.dispatchEvent||r.fireEvent)?(w=F.createEvent("Events"),w.initEvent(g,!0,!0),a.extend(w,e),r.dispatchEvent?r.dispatchEvent(w):r.fireEvent(g,w)):a.each(["protoEvents","hcEvents"],function(k){if(r[k])for(l=r[k][g]||[],u=l.length,e.target||a.extend(e,{preventDefault:function(){e.defaultPrevented=!0;},target:r,type:g}),c=0;c<u;c++)(d=l[c])&&!1===d.call(r,e)&&e.preventDefault();});t&&!e.defaultPrevented&&t.call(r,
    e);};a.animate=function(r,g,e){var t,w="",l,u,c;a.isObject(e)||(c=arguments,e={duration:c[2],easing:c[3],complete:c[4]});a.isNumber(e.duration)||(e.duration=400);e.easing="function"===typeof e.easing?e.easing:Math[e.easing]||Math.easeInOutSine;e.curAnim=a.merge(g);a.objectEach(g,function(c,k){a.stop(r,k);u=new a.Fx(r,e,k);l=null;"d"===k?(u.paths=u.initPath(r,r.d,g.d),u.toD=g.d,t=0,l=1):r.attr?t=r.attr(k):(t=parseFloat(a.getStyle(r,k))||0,"opacity"!==k&&(w="px"));l||(l=c);l&&l.match&&l.match("px")&&
    (l=l.replace(/px/g,""));u.run(t,l,w);});};a.seriesType=function(r,g,e,t,w){var l=a.getOptions(),u=a.seriesTypes;l.plotOptions[r]=a.merge(l.plotOptions[g],e);u[r]=a.extendClass(u[g]||function(){},t);u[r].prototype.type=r;w&&(u[r].prototype.pointClass=a.extendClass(a.Point,w));return u[r]};a.uniqueKey=function(){var a=Math.random().toString(36).substring(2,9),g=0;return function(){return "highcharts-"+a+"-"+g++}}();D.jQuery&&(D.jQuery.fn.highcharts=function(){var r=[].slice.call(arguments);if(this[0])return r[0]?
    (new (a[a.isString(r[0])?r.shift():"Chart"])(this[0],r[0],r[1]),this):C[a.attr(this[0],"data-highcharts-chart")]});})(K);(function(a){var C=a.each,F=a.isNumber,D=a.map,r=a.merge,g=a.pInt;a.Color=function(e){if(!(this instanceof a.Color))return new a.Color(e);this.init(e);};a.Color.prototype={parsers:[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(a){return [g(a[1]),g(a[2]),g(a[3]),parseFloat(a[4],10)]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
    parse:function(a){return [g(a[1]),g(a[2]),g(a[3]),1]}}],names:{none:"rgba(255,255,255,0)",white:"#ffffff",black:"#000000"},init:function(e){var g,w,l,u;if((this.input=e=this.names[e&&e.toLowerCase?e.toLowerCase():""]||e)&&e.stops)this.stops=D(e.stops,function(c){return new a.Color(c[1])});else if(e&&e.charAt&&"#"===e.charAt()&&(g=e.length,e=parseInt(e.substr(1),16),7===g?w=[(e&16711680)>>16,(e&65280)>>8,e&255,1]:4===g&&(w=[(e&3840)>>4|(e&3840)>>8,(e&240)>>4|e&240,(e&15)<<4|e&15,1])),!w)for(l=this.parsers.length;l--&&
    !w;)u=this.parsers[l],(g=u.regex.exec(e))&&(w=u.parse(g));this.rgba=w||[];},get:function(a){var e=this.input,g=this.rgba,l;this.stops?(l=r(e),l.stops=[].concat(l.stops),C(this.stops,function(e,c){l.stops[c]=[l.stops[c][0],e.get(a)];})):l=g&&F(g[0])?"rgb"===a||!a&&1===g[3]?"rgb("+g[0]+","+g[1]+","+g[2]+")":"a"===a?g[3]:"rgba("+g.join(",")+")":e;return l},brighten:function(a){var e,w=this.rgba;if(this.stops)C(this.stops,function(e){e.brighten(a);});else if(F(a)&&0!==a)for(e=0;3>e;e++)w[e]+=g(255*a),0>
    w[e]&&(w[e]=0),255<w[e]&&(w[e]=255);return this},setOpacity:function(a){this.rgba[3]=a;return this},tweenTo:function(a,g){var e=this.rgba,l=a.rgba;l.length&&e&&e.length?(a=1!==l[3]||1!==e[3],g=(a?"rgba(":"rgb(")+Math.round(l[0]+(e[0]-l[0])*(1-g))+","+Math.round(l[1]+(e[1]-l[1])*(1-g))+","+Math.round(l[2]+(e[2]-l[2])*(1-g))+(a?","+(l[3]+(e[3]-l[3])*(1-g)):"")+")"):g=a.input||"none";return g}};a.color=function(e){return new a.Color(e)};})(K);(function(a){var C,F,D=a.addEvent,r=a.animate,g=a.attr,e=a.charts,
    t=a.color,w=a.css,l=a.createElement,u=a.defined,c=a.deg2rad,d=a.destroyObjectProperties,k=a.doc,x=a.each,p=a.extend,f=a.erase,b=a.grep,n=a.hasTouch,z=a.inArray,J=a.isArray,q=a.isFirefox,L=a.isMS,B=a.isObject,H=a.isString,m=a.isWebKit,E=a.merge,A=a.noop,M=a.objectEach,G=a.pick,h=a.pInt,v=a.removeEvent,Q=a.stop,P=a.svg,I=a.SVG_NS,O=a.symbolSizes,N=a.win;C=a.SVGElement=function(){return this};p(C.prototype,{opacity:1,SVG_NS:I,textProps:"direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline".split(" "),
    init:function(a,h){this.element="span"===h?l(h):k.createElementNS(this.SVG_NS,h);this.renderer=a;},animate:function(y,h,b){h=a.animObject(G(h,this.renderer.globalAnimation,!0));0!==h.duration?(b&&(h.complete=b),r(this,y,h)):(this.attr(y,null,b),h.step&&h.step.call(this));return this},complexColor:function(y,h,b){var f=this.renderer,v,c,d,m,I,p,A,n,k,R,q,z=[],P;a.fireEvent(this.renderer,"complexColor",{args:arguments},function(){y.radialGradient?c="radialGradient":y.linearGradient&&(c="linearGradient");
    c&&(d=y[c],I=f.gradients,A=y.stops,R=b.radialReference,J(d)&&(y[c]=d={x1:d[0],y1:d[1],x2:d[2],y2:d[3],gradientUnits:"userSpaceOnUse"}),"radialGradient"===c&&R&&!u(d.gradientUnits)&&(m=d,d=E(d,f.getRadialAttr(R,m),{gradientUnits:"userSpaceOnUse"})),M(d,function(a,y){"id"!==y&&z.push(y,a);}),M(A,function(a){z.push(a);}),z=z.join(","),I[z]?q=I[z].attr("id"):(d.id=q=a.uniqueKey(),I[z]=p=f.createElement(c).attr(d).add(f.defs),p.radAttr=m,p.stops=[],x(A,function(y){0===y[1].indexOf("rgba")?(v=a.color(y[1]),
    n=v.get("rgb"),k=v.get("a")):(n=y[1],k=1);y=f.createElement("stop").attr({offset:y[0],"stop-color":n,"stop-opacity":k}).add(p);p.stops.push(y);})),P="url("+f.url+"#"+q+")",b.setAttribute(h,P),b.gradient=z,y.toString=function(){return P});});},applyTextOutline:function(y){var h=this.element,b,v,c,d,m;-1!==y.indexOf("contrast")&&(y=y.replace(/contrast/g,this.renderer.getContrast(h.style.fill)));y=y.split(" ");v=y[y.length-1];if((c=y[0])&&"none"!==c&&a.svg){this.fakeTS=!0;y=[].slice.call(h.getElementsByTagName("tspan"));
    this.ySetter=this.xSetter;c=c.replace(/(^[\d\.]+)(.*?)$/g,function(a,y,h){return 2*y+h});for(m=y.length;m--;)b=y[m],"highcharts-text-outline"===b.getAttribute("class")&&f(y,h.removeChild(b));d=h.firstChild;x(y,function(a,y){0===y&&(a.setAttribute("x",h.getAttribute("x")),y=h.getAttribute("y"),a.setAttribute("y",y||0),null===y&&h.setAttribute("y",0));a=a.cloneNode(1);g(a,{"class":"highcharts-text-outline",fill:v,stroke:v,"stroke-width":c,"stroke-linejoin":"round"});h.insertBefore(a,d);});}},attr:function(a,
    h,b,c){var y,f=this.element,v,d=this,m,I;"string"===typeof a&&void 0!==h&&(y=a,a={},a[y]=h);"string"===typeof a?d=(this[a+"Getter"]||this._defaultGetter).call(this,a,f):(M(a,function(y,h){m=!1;c||Q(this,h);this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)$/.test(h)&&(v||(this.symbolAttr(a),v=!0),m=!0);!this.rotation||"x"!==h&&"y"!==h||(this.doTransform=!0);m||(I=this[h+"Setter"]||this._defaultSetter,I.call(this,y,h,f),this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(h)&&
    this.updateShadows(h,y,I));},this),this.afterSetters());b&&b.call(this);return d},afterSetters:function(){this.doTransform&&(this.updateTransform(),this.doTransform=!1);},updateShadows:function(a,h,b){for(var y=this.shadows,c=y.length;c--;)b.call(y[c],"height"===a?Math.max(h-(y[c].cutHeight||0),0):"d"===a?this.d:h,a,y[c]);},addClass:function(a,h){var y=this.attr("class")||"";-1===y.indexOf(a)&&(h||(a=(y+(y?" ":"")+a).replace("  "," ")),this.attr("class",a));return this},hasClass:function(a){return -1!==
    z(a,(this.attr("class")||"").split(" "))},removeClass:function(a){return this.attr("class",(this.attr("class")||"").replace(a,""))},symbolAttr:function(a){var y=this;x("x y r start end width height innerR anchorX anchorY".split(" "),function(h){y[h]=G(a[h],y[h]);});y.attr({d:y.renderer.symbols[y.symbolName](y.x,y.y,y.width,y.height,y)});},clip:function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":"none")},crisp:function(a,h){var y;h=h||a.strokeWidth||0;y=Math.round(h)%2/2;
    a.x=Math.floor(a.x||this.x||0)+y;a.y=Math.floor(a.y||this.y||0)+y;a.width=Math.floor((a.width||this.width||0)-2*y);a.height=Math.floor((a.height||this.height||0)-2*y);u(a.strokeWidth)&&(a.strokeWidth=h);return a},css:function(a){var y=this.styles,b={},c=this.element,f,v="",d,m=!y,I=["textOutline","textOverflow","width"];a&&a.color&&(a.fill=a.color);y&&M(a,function(a,h){a!==y[h]&&(b[h]=a,m=!0);});m&&(y&&(a=p(y,b)),f=this.textWidth=a&&a.width&&"auto"!==a.width&&"text"===c.nodeName.toLowerCase()&&h(a.width),
    this.styles=a,f&&!P&&this.renderer.forExport&&delete a.width,c.namespaceURI===this.SVG_NS?(d=function(a,y){return "-"+y.toLowerCase()},M(a,function(a,y){-1===z(y,I)&&(v+=y.replace(/([A-Z])/g,d)+":"+a+";");}),v&&g(c,"style",v)):w(c,a),this.added&&("text"===this.element.nodeName&&this.renderer.buildText(this),a&&a.textOutline&&this.applyTextOutline(a.textOutline)));return this},strokeWidth:function(){return this["stroke-width"]||0},on:function(a,h){var y=this,b=y.element;n&&"click"===a?(b.ontouchstart=
    function(a){y.touchEventFired=Date.now();a.preventDefault();h.call(b,a);},b.onclick=function(a){(-1===N.navigator.userAgent.indexOf("Android")||1100<Date.now()-(y.touchEventFired||0))&&h.call(b,a);}):b["on"+a]=h;return this},setRadialReference:function(a){var y=this.renderer.gradients[this.element.gradient];this.element.radialReference=a;y&&y.radAttr&&y.animate(this.renderer.getRadialAttr(a,y.radAttr));return this},translate:function(a,h){return this.attr({translateX:a,translateY:h})},invert:function(a){this.inverted=
    a;this.updateTransform();return this},updateTransform:function(){var a=this.translateX||0,h=this.translateY||0,b=this.scaleX,c=this.scaleY,v=this.inverted,f=this.rotation,d=this.matrix,m=this.element;v&&(a+=this.width,h+=this.height);a=["translate("+a+","+h+")"];u(d)&&a.push("matrix("+d.join(",")+")");v?a.push("rotate(90) scale(-1,1)"):f&&a.push("rotate("+f+" "+G(this.rotationOriginX,m.getAttribute("x"),0)+" "+G(this.rotationOriginY,m.getAttribute("y")||0)+")");(u(b)||u(c))&&a.push("scale("+G(b,1)+
    " "+G(c,1)+")");a.length&&m.setAttribute("transform",a.join(" "));},toFront:function(){var a=this.element;a.parentNode.appendChild(a);return this},align:function(a,h,b){var y,c,v,d,m={};c=this.renderer;v=c.alignedObjects;var I,p;if(a){if(this.alignOptions=a,this.alignByTranslate=h,!b||H(b))this.alignTo=y=b||"renderer",f(v,this),v.push(this),b=null;}else a=this.alignOptions,h=this.alignByTranslate,y=this.alignTo;b=G(b,c[y],c);y=a.align;c=a.verticalAlign;v=(b.x||0)+(a.x||0);d=(b.y||0)+(a.y||0);"right"===
    y?I=1:"center"===y&&(I=2);I&&(v+=(b.width-(a.width||0))/I);m[h?"translateX":"x"]=Math.round(v);"bottom"===c?p=1:"middle"===c&&(p=2);p&&(d+=(b.height-(a.height||0))/p);m[h?"translateY":"y"]=Math.round(d);this[this.placed?"animate":"attr"](m);this.placed=!0;this.alignAttr=m;return this},getBBox:function(a,h){var y,b=this.renderer,v,f=this.element,d=this.styles,m,I=this.textStr,A,n=b.cache,k=b.cacheKeys,q;h=G(h,this.rotation);v=h*c;m=d&&d.fontSize;u(I)&&(q=I.toString(),-1===q.indexOf("\x3c")&&(q=q.replace(/[0-9]/g,
    "0")),q+=["",h||0,m,this.textWidth,d&&d.textOverflow].join());q&&!a&&(y=n[q]);if(!y){if(f.namespaceURI===this.SVG_NS||b.forExport){try{(A=this.fakeTS&&function(a){x(f.querySelectorAll(".highcharts-text-outline"),function(y){y.style.display=a;});})&&A("none"),y=f.getBBox?p({},f.getBBox()):{width:f.offsetWidth,height:f.offsetHeight},A&&A("");}catch(W){}if(!y||0>y.width)y={width:0,height:0};}else y=this.htmlGetBBox();b.isSVG&&(a=y.width,b=y.height,d&&"11px"===d.fontSize&&17===Math.round(b)&&(y.height=b=
    14),h&&(y.width=Math.abs(b*Math.sin(v))+Math.abs(a*Math.cos(v)),y.height=Math.abs(b*Math.cos(v))+Math.abs(a*Math.sin(v))));if(q&&0<y.height){for(;250<k.length;)delete n[k.shift()];n[q]||k.push(q);n[q]=y;}}return y},show:function(a){return this.attr({visibility:a?"inherit":"visible"})},hide:function(){return this.attr({visibility:"hidden"})},fadeOut:function(a){var y=this;y.animate({opacity:0},{duration:a||150,complete:function(){y.attr({y:-9999});}});},add:function(a){var y=this.renderer,h=this.element,
    b;a&&(this.parentGroup=a);this.parentInverted=a&&a.inverted;void 0!==this.textStr&&y.buildText(this);this.added=!0;if(!a||a.handleZ||this.zIndex)b=this.zIndexSetter();b||(a?a.element:y.box).appendChild(h);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var y=a.parentNode;y&&y.removeChild(a);},destroy:function(){var a=this,h=a.element||{},b=a.renderer.isSVG&&"SPAN"===h.nodeName&&a.parentGroup,c=h.ownerSVGElement,v=a.clipPath;h.onclick=h.onmouseout=h.onmouseover=h.onmousemove=h.point=
    null;Q(a);v&&c&&(x(c.querySelectorAll("[clip-path],[CLIP-PATH]"),function(a){var h=a.getAttribute("clip-path"),y=v.element.id;(-1<h.indexOf("(#"+y+")")||-1<h.indexOf('("#'+y+'")'))&&a.removeAttribute("clip-path");}),a.clipPath=v.destroy());if(a.stops){for(c=0;c<a.stops.length;c++)a.stops[c]=a.stops[c].destroy();a.stops=null;}a.safeRemoveChild(h);for(a.destroyShadows();b&&b.div&&0===b.div.childNodes.length;)h=b.parentGroup,a.safeRemoveChild(b.div),delete b.div,b=h;a.alignTo&&f(a.renderer.alignedObjects,
    a);M(a,function(h,y){delete a[y];});return null},shadow:function(a,h,b){var y=[],c,v,f=this.element,d,m,I,p;if(!a)this.destroyShadows();else if(!this.shadows){m=G(a.width,3);I=(a.opacity||.15)/m;p=this.parentInverted?"(-1,-1)":"("+G(a.offsetX,1)+", "+G(a.offsetY,1)+")";for(c=1;c<=m;c++)v=f.cloneNode(0),d=2*m+1-2*c,g(v,{isShadow:"true",stroke:a.color||"#000000","stroke-opacity":I*c,"stroke-width":d,transform:"translate"+p,fill:"none"}),b&&(g(v,"height",Math.max(g(v,"height")-d,0)),v.cutHeight=d),h?
    h.element.appendChild(v):f.parentNode&&f.parentNode.insertBefore(v,f),y.push(v);this.shadows=y;}return this},destroyShadows:function(){x(this.shadows||[],function(a){this.safeRemoveChild(a);},this);this.shadows=void 0;},xGetter:function(a){"circle"===this.element.nodeName&&("x"===a?a="cx":"y"===a&&(a="cy"));return this._defaultGetter(a)},_defaultGetter:function(a){a=G(this[a+"Value"],this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,
    h,b){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");this[h]!==a&&(b.setAttribute(h,a),this[h]=a);},dashstyleSetter:function(a){var b,y=this["stroke-width"];"inherit"===y&&(y=1);if(a=a&&a.toLowerCase()){a=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(b=a.length;b--;)a[b]=h(a[b])*y;a=a.join(",").replace(/NaN/g,
    "none");this.element.setAttribute("stroke-dasharray",a);}},alignSetter:function(a){this.alignValue=a;this.element.setAttribute("text-anchor",{left:"start",center:"middle",right:"end"}[a]);},opacitySetter:function(a,h,b){this[h]=a;b.setAttribute(h,a);},titleSetter:function(a){var h=this.element.getElementsByTagName("title")[0];h||(h=k.createElementNS(this.SVG_NS,"title"),this.element.appendChild(h));h.firstChild&&h.removeChild(h.firstChild);h.appendChild(k.createTextNode(String(G(a),"").replace(/<[^>]*>/g,
    "").replace(/&lt;/g,"\x3c").replace(/&gt;/g,"\x3e")));},textSetter:function(a){a!==this.textStr&&(delete this.bBox,this.textStr=a,this.added&&this.renderer.buildText(this));},fillSetter:function(a,h,b){"string"===typeof a?b.setAttribute(h,a):a&&this.complexColor(a,h,b);},visibilitySetter:function(a,h,b){"inherit"===a?b.removeAttribute(h):this[h]!==a&&b.setAttribute(h,a);this[h]=a;},zIndexSetter:function(a,b){var c=this.renderer,v=this.parentGroup,y=(v||c).element||c.box,f,d=this.element,m,I,c=y===c.box;
    f=this.added;var p;u(a)&&(d.zIndex=a,a=+a,this[b]===a&&(f=!1),this[b]=a);if(f){(a=this.zIndex)&&v&&(v.handleZ=!0);b=y.childNodes;for(p=b.length-1;0<=p&&!m;p--)if(v=b[p],f=v.zIndex,I=!u(f),v!==d)if(0>a&&I&&!c&&!p)y.insertBefore(d,b[p]),m=!0;else if(h(f)<=a||I&&(!u(a)||0<=a))y.insertBefore(d,b[p+1]||null),m=!0;m||(y.insertBefore(d,b[c?3:0]||null),m=!0);}return m},_defaultSetter:function(a,h,b){b.setAttribute(h,a);}});C.prototype.yGetter=C.prototype.xGetter;C.prototype.translateXSetter=C.prototype.translateYSetter=
    C.prototype.rotationSetter=C.prototype.verticalAlignSetter=C.prototype.rotationOriginXSetter=C.prototype.rotationOriginYSetter=C.prototype.scaleXSetter=C.prototype.scaleYSetter=C.prototype.matrixSetter=function(a,h){this[h]=a;this.doTransform=!0;};C.prototype["stroke-widthSetter"]=C.prototype.strokeSetter=function(a,h,b){this[h]=a;this.stroke&&this["stroke-width"]?(C.prototype.fillSetter.call(this,this.stroke,"stroke",b),b.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0):"stroke-width"===
    h&&0===a&&this.hasStroke&&(b.removeAttribute("stroke"),this.hasStroke=!1);};F=a.SVGRenderer=function(){this.init.apply(this,arguments);};p(F.prototype,{Element:C,SVG_NS:I,init:function(a,h,b,c,v,f){var y;c=this.createElement("svg").attr({version:"1.1","class":"highcharts-root"}).css(this.getStyle(c));y=c.element;a.appendChild(y);g(a,"dir","ltr");-1===a.innerHTML.indexOf("xmlns")&&g(y,"xmlns",this.SVG_NS);this.isSVG=!0;this.box=y;this.boxWrapper=c;this.alignedObjects=[];this.url=(q||m)&&k.getElementsByTagName("base").length?
    N.location.href.replace(/#.*?$/,"").replace(/<[^>]*>/g,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(k.createTextNode("Created with Highcharts 6.1.0"));this.defs=this.createElement("defs").add();this.allowHTML=f;this.forExport=v;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(h,b,!1);var d;q&&a.getBoundingClientRect&&(h=function(){w(a,{left:0,top:0});d=a.getBoundingClientRect();w(a,{left:Math.ceil(d.left)-
    d.left+"px",top:Math.ceil(d.top)-d.top+"px"});},h(),this.unSubPixelFix=D(N,"resize",h));},getStyle:function(a){return this.style=p({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},a)},setStyle:function(a){this.boxWrapper.css(this.getStyle(a));},isHidden:function(){return !this.boxWrapper.getBBox().width},destroy:function(){var a=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();d(this.gradients||{});this.gradients=null;a&&(this.defs=a.destroy());
    this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null},createElement:function(a){var h=new this.Element;h.init(this,a);return h},draw:A,getRadialAttr:function(a,h){return {cx:a[0]-a[2]/2+h.cx*a[2],cy:a[1]-a[2]/2+h.cy*a[2],r:h.r*a[2]}},getSpanWidth:function(a){return a.getBBox(!0).width},applyEllipsis:function(a,h,b,c){var v=a.rotation,f=b,d,y=0,m=b.length,I=function(a){h.removeChild(h.firstChild);a&&h.appendChild(k.createTextNode(a));},p;a.rotation=0;f=this.getSpanWidth(a,h);if(p=
    f>c){for(;y<=m;)d=Math.ceil((y+m)/2),f=b.substring(0,d)+"\u2026",I(f),f=this.getSpanWidth(a,h),y===m?y=m+1:f>c?m=d-1:y=d;0===m&&I("");}a.rotation=v;return p},escapes:{"\x26":"\x26amp;","\x3c":"\x26lt;","\x3e":"\x26gt;","'":"\x26#39;",'"':"\x26quot;"},buildText:function(a){var c=a.element,v=this,f=v.forExport,d=G(a.textStr,"").toString(),y=-1!==d.indexOf("\x3c"),m=c.childNodes,p,A=g(c,"x"),n=a.styles,q=a.textWidth,E=n&&n.lineHeight,e=n&&n.textOutline,B=n&&"ellipsis"===n.textOverflow,Q=n&&"nowrap"===
    n.whiteSpace,u=n&&n.fontSize,l,O,H=m.length,n=q&&!a.added&&this.box,J=function(a){var b;b=/(px|em)$/.test(a&&a.style.fontSize)?a.style.fontSize:u||v.style.fontSize||12;return E?h(E):v.fontMetrics(b,a.getAttribute("style")?a:c).h},N=function(a,h){M(v.escapes,function(b,c){h&&-1!==z(b,h)||(a=a.toString().replace(new RegExp(b,"g"),c));});return a},t=function(a,h){var b;b=a.indexOf("\x3c");a=a.substring(b,a.indexOf("\x3e")-b);b=a.indexOf(h+"\x3d");if(-1!==b&&(b=b+h.length+1,h=a.charAt(b),'"'===h||"'"===
    h))return a=a.substring(b+1),a.substring(0,a.indexOf(h))};l=[d,B,Q,E,e,u,q].join();if(l!==a.textCache){for(a.textCache=l;H--;)c.removeChild(m[H]);y||e||B||q||-1!==d.indexOf(" ")?(n&&n.appendChild(c),d=y?d.replace(/<(b|strong)>/g,'\x3cspan style\x3d"font-weight:bold"\x3e').replace(/<(i|em)>/g,'\x3cspan style\x3d"font-style:italic"\x3e').replace(/<a/g,"\x3cspan").replace(/<\/(b|strong|i|em|a)>/g,"\x3c/span\x3e").split(/<br.*?>/g):[d],d=b(d,function(a){return ""!==a}),x(d,function(h,b){var d,y=0;h=h.replace(/^\s+|\s+$/g,
    "").replace(/<span/g,"|||\x3cspan").replace(/<\/span>/g,"\x3c/span\x3e|||");d=h.split("|||");x(d,function(h){if(""!==h||1===d.length){var m={},n=k.createElementNS(v.SVG_NS,"tspan"),E,z;(E=t(h,"class"))&&g(n,"class",E);if(E=t(h,"style"))E=E.replace(/(;| |^)color([ :])/,"$1fill$2"),g(n,"style",E);(z=t(h,"href"))&&!f&&(g(n,"onclick",'location.href\x3d"'+z+'"'),g(n,"class","highcharts-anchor"),w(n,{cursor:"pointer"}));h=N(h.replace(/<[a-zA-Z\/](.|\n)*?>/g,"")||" ");if(" "!==h){n.appendChild(k.createTextNode(h));
    y?m.dx=0:b&&null!==A&&(m.x=A);g(n,m);c.appendChild(n);!y&&O&&(!P&&f&&w(n,{display:"block"}),g(n,"dy",J(n)));if(q){m=h.replace(/([^\^])-/g,"$1- ").split(" ");z=1<d.length||b||1<m.length&&!Q;var e=[],x,G=J(n),u=a.rotation;for(B&&(p=v.applyEllipsis(a,n,h,q));!B&&z&&(m.length||e.length);)a.rotation=0,x=v.getSpanWidth(a,n),h=x>q,void 0===p&&(p=h),h&&1!==m.length?(n.removeChild(n.firstChild),e.unshift(m.pop())):(m=e,e=[],m.length&&!Q&&(n=k.createElementNS(I,"tspan"),g(n,{dy:G,x:A}),E&&g(n,"style",E),c.appendChild(n)),
    x>q&&(q=x)),m.length&&n.appendChild(k.createTextNode(m.join(" ").replace(/- /g,"-")));a.rotation=u;}y++;}}});O=O||c.childNodes.length;}),p&&a.attr("title",N(a.textStr,["\x26lt;","\x26gt;"])),n&&n.removeChild(c),e&&a.applyTextOutline&&a.applyTextOutline(e)):c.appendChild(k.createTextNode(N(d)));}},getContrast:function(a){a=t(a).rgba;return 510<a[0]+a[1]+a[2]?"#000000":"#FFFFFF"},button:function(a,h,b,c,v,f,d,m,I){var y=this.label(a,h,b,I,null,null,null,null,"button"),n=0;y.attr(E({padding:8,r:2},v));var A,
    k,q,z;v=E({fill:"#f7f7f7",stroke:"#cccccc","stroke-width":1,style:{color:"#333333",cursor:"pointer",fontWeight:"normal"}},v);A=v.style;delete v.style;f=E(v,{fill:"#e6e6e6"},f);k=f.style;delete f.style;d=E(v,{fill:"#e6ebf5",style:{color:"#000000",fontWeight:"bold"}},d);q=d.style;delete d.style;m=E(v,{style:{color:"#cccccc"}},m);z=m.style;delete m.style;D(y.element,L?"mouseover":"mouseenter",function(){3!==n&&y.setState(1);});D(y.element,L?"mouseout":"mouseleave",function(){3!==n&&y.setState(n);});y.setState=
    function(a){1!==a&&(y.state=n=a);y.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+["normal","hover","pressed","disabled"][a||0]);y.attr([v,f,d,m][a||0]).css([A,k,q,z][a||0]);};y.attr(v).css(p({cursor:"default"},A));return y.on("click",function(a){3!==n&&c.call(y,a);})},crispLine:function(a,h){a[1]===a[4]&&(a[1]=a[4]=Math.round(a[1])-h%2/2);a[2]===a[5]&&(a[2]=a[5]=Math.round(a[2])+h%2/2);return a},path:function(a){var h={fill:"none"};J(a)?h.d=a:B(a)&&p(h,
    a);return this.createElement("path").attr(h)},circle:function(a,h,b){a=B(a)?a:{x:a,y:h,r:b};h=this.createElement("circle");h.xSetter=h.ySetter=function(a,h,b){b.setAttribute("c"+h,a);};return h.attr(a)},arc:function(a,h,b,c,v,f){B(a)?(c=a,h=c.y,b=c.r,a=c.x):c={innerR:c,start:v,end:f};a=this.symbol("arc",a,h,b,b,c);a.r=b;return a},rect:function(a,h,b,c,v,f){v=B(a)?a.r:v;var d=this.createElement("rect");a=B(a)?a:void 0===a?{}:{x:a,y:h,width:Math.max(b,0),height:Math.max(c,0)};void 0!==f&&(a.strokeWidth=
    f,a=d.crisp(a));a.fill="none";v&&(a.r=v);d.rSetter=function(a,h,b){g(b,{rx:a,ry:a});};return d.attr(a)},setSize:function(a,h,b){var c=this.alignedObjects,v=c.length;this.width=a;this.height=h;for(this.boxWrapper.animate({width:a,height:h},{step:function(){this.attr({viewBox:"0 0 "+this.attr("width")+" "+this.attr("height")});},duration:G(b,!0)?void 0:0});v--;)c[v].align();},g:function(a){var h=this.createElement("g");return a?h.attr({"class":"highcharts-"+a}):h},image:function(a,h,b,c,v,f){var d={preserveAspectRatio:"none"},
    m,I=function(a,h){a.setAttributeNS?a.setAttributeNS("http://www.w3.org/1999/xlink","href",h):a.setAttribute("hc-svg-href",h);};1<arguments.length&&p(d,{x:h,y:b,width:c,height:v});m=this.createElement("image").attr(d);f?(I(m.element,"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw\x3d\x3d"),d=new N.Image,D(d,"load",function(h){I(m.element,a);f.call(m,h);}),d.src=a):I(m.element,a);return m},symbol:function(a,h,b,c,v,f){var d=this,m,I=/^url\((.*?)\)$/,n=I.test(a),y=!n&&(this.symbols[a]?
    a:"circle"),A=y&&this.symbols[y],q=u(h)&&A&&A.call(this.symbols,Math.round(h),Math.round(b),c,v,f),E,z;A?(m=this.path(q),m.attr("fill","none"),p(m,{symbolName:y,x:h,y:b,width:c,height:v}),f&&p(m,f)):n&&(E=a.match(I)[1],m=this.image(E),m.imgwidth=G(O[E]&&O[E].width,f&&f.width),m.imgheight=G(O[E]&&O[E].height,f&&f.height),z=function(){m.attr({width:m.width,height:m.height});},x(["width","height"],function(a){m[a+"Setter"]=function(a,h){var b={},c=this["img"+h],v="width"===h?"translateX":"translateY";
    this[h]=a;u(c)&&(this.element&&this.element.setAttribute(h,c),this.alignByTranslate||(b[v]=((this[h]||0)-c)/2,this.attr(b)));};}),u(h)&&m.attr({x:h,y:b}),m.isImg=!0,u(m.imgwidth)&&u(m.imgheight)?z():(m.attr({width:0,height:0}),l("img",{onload:function(){var a=e[d.chartIndex];0===this.width&&(w(this,{position:"absolute",top:"-999em"}),k.body.appendChild(this));O[E]={width:this.width,height:this.height};m.imgwidth=this.width;m.imgheight=this.height;m.element&&z();this.parentNode&&this.parentNode.removeChild(this);
    d.imgCount--;if(!d.imgCount&&a&&a.onload)a.onload();},src:E}),this.imgCount++));return m},symbols:{circle:function(a,h,b,c){return this.arc(a+b/2,h+c/2,b/2,c/2,{start:0,end:2*Math.PI,open:!1})},square:function(a,h,b,c){return ["M",a,h,"L",a+b,h,a+b,h+c,a,h+c,"Z"]},triangle:function(a,h,b,c){return ["M",a+b/2,h,"L",a+b,h+c,a,h+c,"Z"]},"triangle-down":function(a,h,b,c){return ["M",a,h,"L",a+b,h,a+b/2,h+c,"Z"]},diamond:function(a,h,b,c){return ["M",a+b/2,h,"L",a+b,h+c/2,a+b/2,h+c,a,h+c/2,"Z"]},arc:function(a,
    h,b,c,v){var f=v.start,d=v.r||b,m=v.r||c||b,I=v.end-.001;b=v.innerR;c=G(v.open,.001>Math.abs(v.end-v.start-2*Math.PI));var n=Math.cos(f),p=Math.sin(f),y=Math.cos(I),I=Math.sin(I);v=.001>v.end-f-Math.PI?0:1;d=["M",a+d*n,h+m*p,"A",d,m,0,v,1,a+d*y,h+m*I];u(b)&&d.push(c?"M":"L",a+b*y,h+b*I,"A",b,b,0,v,0,a+b*n,h+b*p);d.push(c?"":"Z");return d},callout:function(a,h,b,c,v){var f=Math.min(v&&v.r||0,b,c),d=f+6,m=v&&v.anchorX;v=v&&v.anchorY;var I;I=["M",a+f,h,"L",a+b-f,h,"C",a+b,h,a+b,h,a+b,h+f,"L",a+b,h+c-
    f,"C",a+b,h+c,a+b,h+c,a+b-f,h+c,"L",a+f,h+c,"C",a,h+c,a,h+c,a,h+c-f,"L",a,h+f,"C",a,h,a,h,a+f,h];m&&m>b?v>h+d&&v<h+c-d?I.splice(13,3,"L",a+b,v-6,a+b+6,v,a+b,v+6,a+b,h+c-f):I.splice(13,3,"L",a+b,c/2,m,v,a+b,c/2,a+b,h+c-f):m&&0>m?v>h+d&&v<h+c-d?I.splice(33,3,"L",a,v+6,a-6,v,a,v-6,a,h+f):I.splice(33,3,"L",a,c/2,m,v,a,c/2,a,h+f):v&&v>c&&m>a+d&&m<a+b-d?I.splice(23,3,"L",m+6,h+c,m,h+c+6,m-6,h+c,a+f,h+c):v&&0>v&&m>a+d&&m<a+b-d&&I.splice(3,3,"L",m-6,h,m,h-6,m+6,h,b-f,h);return I}},clipRect:function(h,b,c,
    v){var f=a.uniqueKey(),d=this.createElement("clipPath").attr({id:f}).add(this.defs);h=this.rect(h,b,c,v,0).add(d);h.id=f;h.clipPath=d;h.count=0;return h},text:function(a,h,b,c){var v={};if(c&&(this.allowHTML||!this.forExport))return this.html(a,h,b);v.x=Math.round(h||0);b&&(v.y=Math.round(b));if(a||0===a)v.text=a;a=this.createElement("text").attr(v);c||(a.xSetter=function(a,h,b){var c=b.getElementsByTagName("tspan"),v,f=b.getAttribute(h),d;for(d=0;d<c.length;d++)v=c[d],v.getAttribute(h)===f&&v.setAttribute(h,
    a);b.setAttribute(h,a);});return a},fontMetrics:function(a,b){a=a||b&&b.style&&b.style.fontSize||this.style&&this.style.fontSize;a=/px/.test(a)?h(a):/em/.test(a)?parseFloat(a)*(b?this.fontMetrics(null,b.parentNode).f:16):12;b=24>a?a+3:Math.round(1.2*a);return {h:b,b:Math.round(.8*b),f:a}},rotCorr:function(a,h,b){var v=a;h&&b&&(v=Math.max(v*Math.cos(h*c),4));return {x:-a/3*Math.sin(h*c),y:v}},label:function(h,b,c,f,d,m,I,n,A){var k=this,q=k.g("button"!==A&&"label"),z=q.text=k.text("",0,0,I).attr({zIndex:1}),
    y,e,P=0,B=3,Q=0,g,G,l,O,H,J={},M,N,w=/^url\((.*?)\)$/.test(f),t=w,L,r,R,U;A&&q.addClass("highcharts-"+A);t=w;L=function(){return (M||0)%2/2};r=function(){var a=z.element.style,h={};e=(void 0===g||void 0===G||H)&&u(z.textStr)&&z.getBBox();q.width=(g||e.width||0)+2*B+Q;q.height=(G||e.height||0)+2*B;N=B+k.fontMetrics(a&&a.fontSize,z).b;t&&(y||(q.box=y=k.symbols[f]||w?k.symbol(f):k.rect(),y.addClass(("button"===A?"":"highcharts-label-box")+(A?" highcharts-"+A+"-box":"")),y.add(q),a=L(),h.x=a,h.y=(n?-N:
    0)+a),h.width=Math.round(q.width),h.height=Math.round(q.height),y.attr(p(h,J)),J={});};R=function(){var a=Q+B,h;h=n?0:N;u(g)&&e&&("center"===H||"right"===H)&&(a+={center:.5,right:1}[H]*(g-e.width));if(a!==z.x||h!==z.y)z.attr("x",a),void 0!==h&&z.attr("y",h);z.x=a;z.y=h;};U=function(a,h){y?y.attr(a,h):J[a]=h;};q.onAdd=function(){z.add(q);q.attr({text:h||0===h?h:"",x:b,y:c});y&&u(d)&&q.attr({anchorX:d,anchorY:m});};q.widthSetter=function(h){g=a.isNumber(h)?h:null;};q.heightSetter=function(a){G=a;};q["text-alignSetter"]=
    function(a){H=a;};q.paddingSetter=function(a){u(a)&&a!==B&&(B=q.padding=a,R());};q.paddingLeftSetter=function(a){u(a)&&a!==Q&&(Q=a,R());};q.alignSetter=function(a){a={left:0,center:.5,right:1}[a];a!==P&&(P=a,e&&q.attr({x:l}));};q.textSetter=function(a){void 0!==a&&z.textSetter(a);r();R();};q["stroke-widthSetter"]=function(a,h){a&&(t=!0);M=this["stroke-width"]=a;U(h,a);};q.strokeSetter=q.fillSetter=q.rSetter=function(a,h){"r"!==h&&("fill"===h&&a&&(t=!0),q[h]=a);U(h,a);};q.anchorXSetter=function(a,h){d=q.anchorX=
    a;U(h,Math.round(a)-L()-l);};q.anchorYSetter=function(a,h){m=q.anchorY=a;U(h,a-O);};q.xSetter=function(a){q.x=a;P&&(a-=P*((g||e.width)+2*B),q["forceAnimate:x"]=!0);l=Math.round(a);q.attr("translateX",l);};q.ySetter=function(a){O=q.y=Math.round(a);q.attr("translateY",O);};var S=q.css;return p(q,{css:function(a){if(a){var h={};a=E(a);x(q.textProps,function(b){void 0!==a[b]&&(h[b]=a[b],delete a[b]);});z.css(h);"width"in h&&r();}return S.call(q,a)},getBBox:function(){return {width:e.width+2*B,height:e.height+
    2*B,x:e.x-B,y:e.y-B}},shadow:function(a){a&&(r(),y&&y.shadow(a));return q},destroy:function(){v(q.element,"mouseenter");v(q.element,"mouseleave");z&&(z=z.destroy());y&&(y=y.destroy());C.prototype.destroy.call(q);q=k=r=R=U=null;}})}});a.Renderer=F;})(K);(function(a){var C=a.attr,F=a.createElement,D=a.css,r=a.defined,g=a.each,e=a.extend,t=a.isFirefox,w=a.isMS,l=a.isWebKit,u=a.pick,c=a.pInt,d=a.SVGRenderer,k=a.win,x=a.wrap;e(a.SVGElement.prototype,{htmlCss:function(a){var c=this.element;if(c=a&&"SPAN"===
    c.tagName&&a.width)delete a.width,this.textWidth=c,this.htmlUpdateTransform();a&&"ellipsis"===a.textOverflow&&(a.whiteSpace="nowrap",a.overflow="hidden");this.styles=e(this.styles,a);D(this.element,a);return this},htmlGetBBox:function(){var a=this.element;return {x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var a=this.renderer,f=this.element,b=this.translateX||0,d=this.translateY||0,k=this.x||0,e=this.y||0,q=this.textAlign||
    "left",x={left:0,center:.5,right:1}[q],B=this.styles,l=B&&B.whiteSpace;D(f,{marginLeft:b,marginTop:d});this.shadows&&g(this.shadows,function(a){D(a,{marginLeft:b+1,marginTop:d+1});});this.inverted&&g(f.childNodes,function(b){a.invertChild(b,f);});if("SPAN"===f.tagName){var B=this.rotation,m=this.textWidth&&c(this.textWidth),E=[B,q,f.innerHTML,this.textWidth,this.textAlign].join(),A;(A=m!==this.oldTextWidth)&&!(A=m>this.oldTextWidth)&&((A=this.textPxLength)||(D(f,{width:"",whiteSpace:l||"nowrap"}),A=
    f.offsetWidth),A=A>m);A&&/[ \-]/.test(f.textContent||f.innerText)&&(D(f,{width:m+"px",display:"block",whiteSpace:l||"normal"}),this.oldTextWidth=m);E!==this.cTT&&(l=a.fontMetrics(f.style.fontSize).b,r(B)&&B!==(this.oldRotation||0)&&this.setSpanRotation(B,x,l),this.getSpanCorrection(!r(B)&&this.textPxLength||f.offsetWidth,l,x,B,q));D(f,{left:k+(this.xCorr||0)+"px",top:e+(this.yCorr||0)+"px"});this.cTT=E;this.oldRotation=B;}}else this.alignOnAdd=!0;},setSpanRotation:function(a,c,b){var f={},d=this.renderer.getTransformKey();
    f[d]=f.transform="rotate("+a+"deg)";f[d+(t?"Origin":"-origin")]=f.transformOrigin=100*c+"% "+b+"px";D(this.element,f);},getSpanCorrection:function(a,c,b){this.xCorr=-a*b;this.yCorr=-c;}});e(d.prototype,{getTransformKey:function(){return w&&!/Edge/.test(k.navigator.userAgent)?"-ms-transform":l?"-webkit-transform":t?"MozTransform":k.opera?"-o-transform":""},html:function(a,c,b){var f=this.createElement("span"),d=f.element,p=f.renderer,q=p.isSVG,k=function(a,b){g(["opacity","visibility"],function(c){x(a,
    c+"Setter",function(a,c,f,d){a.call(this,c,f,d);b[f]=c;});});a.addedSetters=!0;};f.textSetter=function(a){a!==d.innerHTML&&delete this.bBox;this.textStr=a;d.innerHTML=u(a,"");f.doTransform=!0;};q&&k(f,f.element.style);f.xSetter=f.ySetter=f.alignSetter=f.rotationSetter=function(a,b){"align"===b&&(b="textAlign");f[b]=a;f.doTransform=!0;};f.afterSetters=function(){this.doTransform&&(this.htmlUpdateTransform(),this.doTransform=!1);};f.attr({text:a,x:Math.round(c),y:Math.round(b)}).css({fontFamily:this.style.fontFamily,
    fontSize:this.style.fontSize,position:"absolute"});d.style.whiteSpace="nowrap";f.css=f.htmlCss;q&&(f.add=function(a){var b,c=p.box.parentNode,q=[];if(this.parentGroup=a){if(b=a.div,!b){for(;a;)q.push(a),a=a.parentGroup;g(q.reverse(),function(a){function d(h,b){a[b]=h;"translateX"===b?m.left=h+"px":m.top=h+"px";a.doTransform=!0;}var m,h=C(a.element,"class");h&&(h={className:h});b=a.div=a.div||F("div",h,{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px",display:a.display,opacity:a.opacity,
    pointerEvents:a.styles&&a.styles.pointerEvents},b||c);m=b.style;e(a,{classSetter:function(a){return function(h){this.element.setAttribute("class",h);a.className=h;}}(b),on:function(){q[0].div&&f.on.apply({element:q[0].div},arguments);return a},translateXSetter:d,translateYSetter:d});a.addedSetters||k(a,m);});}}else b=c;b.appendChild(d);f.added=!0;f.alignOnAdd&&f.htmlUpdateTransform();return f});return f}});})(K);(function(a){var C=a.defined,F=a.each,D=a.extend,r=a.merge,g=a.pick,e=a.timeUnits,t=a.win;
    a.Time=function(a){this.update(a,!1);};a.Time.prototype={defaultOptions:{},update:function(e){var l=g(e&&e.useUTC,!0),u=this;this.options=e=r(!0,this.options||{},e);this.Date=e.Date||t.Date;this.timezoneOffset=(this.useUTC=l)&&e.timezoneOffset;this.getTimezoneOffset=this.timezoneOffsetFunction();(this.variableTimezone=!(l&&!e.getTimezoneOffset&&!e.timezone))||this.timezoneOffset?(this.get=function(a,d){var c=d.getTime(),e=c-u.getTimezoneOffset(d);d.setTime(e);a=d["getUTC"+a]();d.setTime(c);return a},
    this.set=function(c,d,k){var e;if(-1!==a.inArray(c,["Milliseconds","Seconds","Minutes"]))d["set"+c](k);else e=u.getTimezoneOffset(d),e=d.getTime()-e,d.setTime(e),d["setUTC"+c](k),c=u.getTimezoneOffset(d),e=d.getTime()+c,d.setTime(e);}):l?(this.get=function(a,d){return d["getUTC"+a]()},this.set=function(a,d,k){return d["setUTC"+a](k)}):(this.get=function(a,d){return d["get"+a]()},this.set=function(a,d,k){return d["set"+a](k)});},makeTime:function(e,l,u,c,d,k){var x,p,f;this.useUTC?(x=this.Date.UTC.apply(0,
    arguments),p=this.getTimezoneOffset(x),x+=p,f=this.getTimezoneOffset(x),p!==f?x+=f-p:p-36E5!==this.getTimezoneOffset(x-36E5)||a.isSafari||(x-=36E5)):x=(new this.Date(e,l,g(u,1),g(c,0),g(d,0),g(k,0))).getTime();return x},timezoneOffsetFunction:function(){var e=this,g=this.options,u=t.moment;if(!this.useUTC)return function(a){return 6E4*(new Date(a)).getTimezoneOffset()};if(g.timezone){if(u)return function(a){return 6E4*-u.tz(a,g.timezone).utcOffset()};a.error(25);}return this.useUTC&&g.getTimezoneOffset?
    function(a){return 6E4*g.getTimezoneOffset(a)}:function(){return 6E4*(e.timezoneOffset||0)}},dateFormat:function(e,g,u){if(!a.defined(g)||isNaN(g))return a.defaultOptions.lang.invalidDate||"";e=a.pick(e,"%Y-%m-%d %H:%M:%S");var c=this,d=new this.Date(g),k=this.get("Hours",d),x=this.get("Day",d),p=this.get("Date",d),f=this.get("Month",d),b=this.get("FullYear",d),n=a.defaultOptions.lang,z=n.weekdays,l=n.shortWeekdays,q=a.pad,d=a.extend({a:l?l[x]:z[x].substr(0,3),A:z[x],d:q(p),e:q(p,2," "),w:x,b:n.shortMonths[f],
    B:n.months[f],m:q(f+1),y:b.toString().substr(2,2),Y:b,H:q(k),k:k,I:q(k%12||12),l:k%12||12,M:q(c.get("Minutes",d)),p:12>k?"AM":"PM",P:12>k?"am":"pm",S:q(d.getSeconds()),L:q(Math.round(g%1E3),3)},a.dateFormats);a.objectEach(d,function(a,b){for(;-1!==e.indexOf("%"+b);)e=e.replace("%"+b,"function"===typeof a?a.call(c,g):a);});return u?e.substr(0,1).toUpperCase()+e.substr(1):e},getTimeTicks:function(a,l,u,c){var d=this,k=[],x={},p,f=new d.Date(l),b=a.unitRange,n=a.count||1,z;if(C(l)){d.set("Milliseconds",
    f,b>=e.second?0:n*Math.floor(d.get("Milliseconds",f)/n));b>=e.second&&d.set("Seconds",f,b>=e.minute?0:n*Math.floor(d.get("Seconds",f)/n));b>=e.minute&&d.set("Minutes",f,b>=e.hour?0:n*Math.floor(d.get("Minutes",f)/n));b>=e.hour&&d.set("Hours",f,b>=e.day?0:n*Math.floor(d.get("Hours",f)/n));b>=e.day&&d.set("Date",f,b>=e.month?1:n*Math.floor(d.get("Date",f)/n));b>=e.month&&(d.set("Month",f,b>=e.year?0:n*Math.floor(d.get("Month",f)/n)),p=d.get("FullYear",f));b>=e.year&&d.set("FullYear",f,p-p%n);b===e.week&&
    d.set("Date",f,d.get("Date",f)-d.get("Day",f)+g(c,1));p=d.get("FullYear",f);c=d.get("Month",f);var J=d.get("Date",f),q=d.get("Hours",f);l=f.getTime();d.variableTimezone&&(z=u-l>4*e.month||d.getTimezoneOffset(l)!==d.getTimezoneOffset(u));f=f.getTime();for(l=1;f<u;)k.push(f),f=b===e.year?d.makeTime(p+l*n,0):b===e.month?d.makeTime(p,c+l*n):!z||b!==e.day&&b!==e.week?z&&b===e.hour&&1<n?d.makeTime(p,c,J,q+l*n):f+b*n:d.makeTime(p,c,J+l*n*(b===e.day?1:7)),l++;k.push(f);b<=e.hour&&1E4>k.length&&F(k,function(a){0===
    a%18E5&&"000000000"===d.dateFormat("%H%M%S%L",a)&&(x[a]="day");});}k.info=D(a,{higherRanks:x,totalRange:b*n});return k}};})(K);(function(a){var C=a.color,F=a.merge;a.defaultOptions={colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{},time:a.Time.prototype.defaultOptions,chart:{borderRadius:0,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:6},position:{align:"right",x:-10,y:10}},width:null,height:null,borderColor:"#335cad",backgroundColor:"#ffffff",plotBorderColor:"#cccccc"},
    title:{text:"Chart title",align:"center",margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},plotOptions:{},labels:{style:{position:"absolute",color:"#333333"}},legend:{enabled:!0,align:"center",alignColumns:!0,layout:"horizontal",labelFormatter:function(){return this.name},borderColor:"#999999",borderRadius:0,navigation:{activeColor:"#003399",inactiveColor:"#cccccc"},itemStyle:{color:"#333333",fontSize:"12px",fontWeight:"bold",textOverflow:"ellipsis"},itemHoverStyle:{color:"#000000"},
    itemHiddenStyle:{color:"#cccccc"},shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"#ffffff",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,animation:a.svg,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",
    minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",padding:8,snap:a.isTouchDevice?25:10,backgroundColor:C("#f7f7f7").setOpacity(.85).get(),borderWidth:1,headerFormat:'\x3cspan style\x3d"font-size: 10px"\x3e{point.key}\x3c/span\x3e\x3cbr/\x3e',pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e',shadow:!0,style:{color:"#333333",cursor:"default",
    fontSize:"12px",pointerEvents:"none",whiteSpace:"nowrap"}},credits:{enabled:!0,href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#999999",fontSize:"9px"},text:"Highcharts.com"}};a.setOptions=function(C){a.defaultOptions=F(!0,a.defaultOptions,C);a.time.update(F(a.defaultOptions.global,a.defaultOptions.time),!1);return a.defaultOptions};a.getOptions=function(){return a.defaultOptions};a.defaultPlotOptions=a.defaultOptions.plotOptions;
    a.time=new a.Time(F(a.defaultOptions.global,a.defaultOptions.time));a.dateFormat=function(C,r,g){return a.time.dateFormat(C,r,g)};})(K);(function(a){var C=a.correctFloat,F=a.defined,D=a.destroyObjectProperties,r=a.fireEvent,g=a.isNumber,e=a.merge,t=a.pick,w=a.deg2rad;a.Tick=function(a,e,c,d){this.axis=a;this.pos=e;this.type=c||"";this.isNewLabel=this.isNew=!0;c||d||this.addLabel();};a.Tick.prototype={addLabel:function(){var a=this.axis,g=a.options,c=a.chart,d=a.categories,k=a.names,x=this.pos,p=g.labels,
    f=a.tickPositions,b=x===f[0],n=x===f[f.length-1],k=d?t(d[x],k[x],x):x,d=this.label,f=f.info,z;a.isDatetimeAxis&&f&&(z=g.dateTimeLabelFormats[f.higherRanks[x]||f.unitName]);this.isFirst=b;this.isLast=n;g=a.labelFormatter.call({axis:a,chart:c,isFirst:b,isLast:n,dateTimeLabelFormat:z,value:a.isLog?C(a.lin2log(k)):k,pos:x});if(F(d))d&&d.attr({text:g});else{if(this.label=d=F(g)&&p.enabled?c.renderer.text(g,0,0,p.useHTML).css(e(p.style)).add(a.labelGroup):null)d.textPxLength=d.getBBox().width;this.rotation=
    0;}},getLabelSize:function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0},handleOverflow:function(a){var e=this.axis,c=e.options.labels,d=a.x,k=e.chart.chartWidth,g=e.chart.spacing,p=t(e.labelLeft,Math.min(e.pos,g[3])),g=t(e.labelRight,Math.max(e.isRadial?0:e.pos+e.len,k-g[1])),f=this.label,b=this.rotation,n={left:0,center:.5,right:1}[e.labelAlign||f.attr("align")],z=f.getBBox().width,l=e.getSlotWidth(),q=l,L=1,B,H={};if(b||!1===c.overflow)0>b&&d-n*z<p?B=Math.round(d/
    Math.cos(b*w)-p):0<b&&d+n*z>g&&(B=Math.round((k-d)/Math.cos(b*w)));else if(k=d+(1-n)*z,d-n*z<p?q=a.x+q*(1-n)-p:k>g&&(q=g-a.x+q*n,L=-1),q=Math.min(l,q),q<l&&"center"===e.labelAlign&&(a.x+=L*(l-q-n*(l-Math.min(z,q)))),z>q||e.autoRotation&&(f.styles||{}).width)B=q;B&&(H.width=B,(c.style||{}).textOverflow||(H.textOverflow="ellipsis"),f.css(H));},getPosition:function(e,g,c,d){var k=this.axis,x=k.chart,p=d&&x.oldChartHeight||x.chartHeight;e={x:e?a.correctFloat(k.translate(g+c,null,null,d)+k.transB):k.left+
    k.offset+(k.opposite?(d&&x.oldChartWidth||x.chartWidth)-k.right-k.left:0),y:e?p-k.bottom+k.offset-(k.opposite?k.height:0):a.correctFloat(p-k.translate(g+c,null,null,d)-k.transB)};r(this,"afterGetPosition",{pos:e});return e},getLabelPosition:function(a,e,c,d,k,g,p,f){var b=this.axis,n=b.transA,z=b.reversed,x=b.staggerLines,q=b.tickRotCorr||{x:0,y:0},l=k.y,B=d||b.reserveSpaceDefault?0:-b.labelOffset*("center"===b.labelAlign?.5:1),u={};F(l)||(l=0===b.side?c.rotation?-8:-c.getBBox().height:2===b.side?
    q.y+8:Math.cos(c.rotation*w)*(q.y-c.getBBox(!1,0).height/2));a=a+k.x+B+q.x-(g&&d?g*n*(z?-1:1):0);e=e+l-(g&&!d?g*n*(z?1:-1):0);x&&(c=p/(f||1)%x,b.opposite&&(c=x-c-1),e+=b.labelOffset/x*c);u.x=a;u.y=Math.round(e);r(this,"afterGetLabelPosition",{pos:u});return u},getMarkPath:function(a,e,c,d,k,g){return g.crispLine(["M",a,e,"L",a+(k?0:-c),e+(k?c:0)],d)},renderGridLine:function(a,e,c){var d=this.axis,k=d.options,g=this.gridLine,p={},f=this.pos,b=this.type,n=d.tickmarkOffset,z=d.chart.renderer,l=b?b+"Grid":
    "grid",q=k[l+"LineWidth"],u=k[l+"LineColor"],k=k[l+"LineDashStyle"];g||(p.stroke=u,p["stroke-width"]=q,k&&(p.dashstyle=k),b||(p.zIndex=1),a&&(p.opacity=0),this.gridLine=g=z.path().attr(p).addClass("highcharts-"+(b?b+"-":"")+"grid-line").add(d.gridGroup));if(!a&&g&&(a=d.getPlotLinePath(f+n,g.strokeWidth()*c,a,!0)))g[this.isNew?"attr":"animate"]({d:a,opacity:e});},renderMark:function(a,e,c){var d=this.axis,k=d.options,g=d.chart.renderer,p=this.type,f=p?p+"Tick":"tick",b=d.tickSize(f),n=this.mark,z=!n,
    l=a.x;a=a.y;var q=t(k[f+"Width"],!p&&d.isXAxis?1:0),k=k[f+"Color"];b&&(d.opposite&&(b[0]=-b[0]),z&&(this.mark=n=g.path().addClass("highcharts-"+(p?p+"-":"")+"tick").add(d.axisGroup),n.attr({stroke:k,"stroke-width":q})),n[z?"attr":"animate"]({d:this.getMarkPath(l,a,b[0],n.strokeWidth()*c,d.horiz,g),opacity:e}));},renderLabel:function(a,e,c,d){var k=this.axis,x=k.horiz,p=k.options,f=this.label,b=p.labels,n=b.step,k=k.tickmarkOffset,z=!0,u=a.x;a=a.y;f&&g(u)&&(f.xy=a=this.getLabelPosition(u,a,f,x,b,k,
    d,n),this.isFirst&&!this.isLast&&!t(p.showFirstLabel,1)||this.isLast&&!this.isFirst&&!t(p.showLastLabel,1)?z=!1:!x||b.step||b.rotation||e||0===c||this.handleOverflow(a),n&&d%n&&(z=!1),z&&g(a.y)?(a.opacity=c,f[this.isNewLabel?"attr":"animate"](a),this.isNewLabel=!1):(f.attr("y",-9999),this.isNewLabel=!0));},render:function(e,g,c){var d=this.axis,k=d.horiz,x=this.getPosition(k,this.pos,d.tickmarkOffset,g),p=x.x,f=x.y,d=k&&p===d.pos+d.len||!k&&f===d.pos?-1:1;c=t(c,1);this.isActive=!0;this.renderGridLine(g,
    c,d);this.renderMark(x,c,d);this.renderLabel(x,g,c,e);this.isNew=!1;a.fireEvent(this,"afterRender");},destroy:function(){D(this,this.axis);}};})(K);var V=function(a){var C=a.addEvent,F=a.animObject,D=a.arrayMax,r=a.arrayMin,g=a.color,e=a.correctFloat,t=a.defaultOptions,w=a.defined,l=a.deg2rad,u=a.destroyObjectProperties,c=a.each,d=a.extend,k=a.fireEvent,x=a.format,p=a.getMagnitude,f=a.grep,b=a.inArray,n=a.isArray,z=a.isNumber,J=a.isString,q=a.merge,L=a.normalizeTickInterval,B=a.objectEach,H=a.pick,m=
    a.removeEvent,E=a.splat,A=a.syncTimeout,M=a.Tick,G=function(){this.init.apply(this,arguments);};a.extend(G.prototype,{defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:!1,labels:{enabled:!0,style:{color:"#666666",cursor:"default",fontSize:"11px"},x:0},maxPadding:.01,minorTickLength:2,minorTickPosition:"outside",minPadding:.01,startOfWeek:1,startOnTick:!1,tickLength:10,tickmarkPlacement:"between",
    tickPixelInterval:100,tickPosition:"outside",title:{align:"middle",style:{color:"#666666"}},type:"linear",minorGridLineColor:"#f2f2f2",minorGridLineWidth:1,minorTickColor:"#999999",lineColor:"#ccd6eb",lineWidth:1,gridLineColor:"#e6e6e6",tickColor:"#ccd6eb"},defaultYAxisOptions:{endOnTick:!0,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},maxPadding:.05,minPadding:.05,startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{allowOverlap:!1,enabled:!1,formatter:function(){return a.numberFormat(this.total,
    -1)},style:{fontSize:"11px",fontWeight:"bold",color:"#000000",textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0},defaultLeftAxisOptions:{labels:{x:-15},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15},title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},defaultTopAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},init:function(a,c){var h=c.isX,v=this;v.chart=a;v.horiz=a.inverted&&!v.isZAxis?!h:h;v.isXAxis=h;v.coll=v.coll||
    (h?"xAxis":"yAxis");k(this,"init",{userOptions:c});v.opposite=c.opposite;v.side=c.side||(v.horiz?v.opposite?0:2:v.opposite?1:3);v.setOptions(c);var f=this.options,d=f.type;v.labelFormatter=f.labels.formatter||v.defaultLabelFormatter;v.userOptions=c;v.minPixelPadding=0;v.reversed=f.reversed;v.visible=!1!==f.visible;v.zoomEnabled=!1!==f.zoomEnabled;v.hasNames="category"===d||!0===f.categories;v.categories=f.categories||v.hasNames;v.names||(v.names=[],v.names.keys={});v.plotLinesAndBandsGroups={};v.isLog=
    "logarithmic"===d;v.isDatetimeAxis="datetime"===d;v.positiveValuesOnly=v.isLog&&!v.allowNegativeLog;v.isLinked=w(f.linkedTo);v.ticks={};v.labelEdge=[];v.minorTicks={};v.plotLinesAndBands=[];v.alternateBands={};v.len=0;v.minRange=v.userMinRange=f.minRange||f.maxZoom;v.range=f.range;v.offset=f.offset||0;v.stacks={};v.oldStacks={};v.stacksTouched=0;v.max=null;v.min=null;v.crosshair=H(f.crosshair,E(a.options.tooltip.crosshairs)[h?0:1],!1);c=v.options.events;-1===b(v,a.axes)&&(h?a.axes.splice(a.xAxis.length,
    0,v):a.axes.push(v),a[v.coll].push(v));v.series=v.series||[];a.inverted&&!v.isZAxis&&h&&void 0===v.reversed&&(v.reversed=!0);B(c,function(a,h){C(v,h,a);});v.lin2log=f.linearToLogConverter||v.lin2log;v.isLog&&(v.val2lin=v.log2lin,v.lin2val=v.lin2log);k(this,"afterInit");},setOptions:function(a){this.options=q(this.defaultOptions,"yAxis"===this.coll&&this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],
    q(t[this.coll],a));k(this,"afterSetOptions",{userOptions:a});},defaultLabelFormatter:function(){var h=this.axis,b=this.value,c=h.chart.time,f=h.categories,d=this.dateTimeLabelFormat,m=t.lang,q=m.numericSymbols,m=m.numericSymbolMagnitude||1E3,p=q&&q.length,n,e=h.options.labels.format,h=h.isLog?Math.abs(b):h.tickInterval;if(e)n=x(e,this,c);else if(f)n=b;else if(d)n=c.dateFormat(d,b);else if(p&&1E3<=h)for(;p--&&void 0===n;)c=Math.pow(m,p+1),h>=c&&0===10*b%c&&null!==q[p]&&0!==b&&(n=a.numberFormat(b/c,
    -1)+q[p]);void 0===n&&(n=1E4<=Math.abs(b)?a.numberFormat(b,-1):a.numberFormat(b,-1,void 0,""));return n},getSeriesExtremes:function(){var a=this,b=a.chart;k(this,"getSeriesExtremes",null,function(){a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.threshold=null;a.softThreshold=!a.isXAxis;a.buildStacks&&a.buildStacks();c(a.series,function(h){if(h.visible||!b.options.chart.ignoreHiddenSeries){var v=h.options,c=v.threshold,d;a.hasVisibleSeries=!0;a.positiveValuesOnly&&0>=c&&(c=null);if(a.isXAxis)v=h.xData,
    v.length&&(h=r(v),d=D(v),z(h)||h instanceof Date||(v=f(v,z),h=r(v),d=D(v)),v.length&&(a.dataMin=Math.min(H(a.dataMin,v[0],h),h),a.dataMax=Math.max(H(a.dataMax,v[0],d),d)));else if(h.getExtremes(),d=h.dataMax,h=h.dataMin,w(h)&&w(d)&&(a.dataMin=Math.min(H(a.dataMin,h),h),a.dataMax=Math.max(H(a.dataMax,d),d)),w(c)&&(a.threshold=c),!v.softThreshold||a.positiveValuesOnly)a.softThreshold=!1;}});});k(this,"afterGetSeriesExtremes");},translate:function(a,b,c,f,d,m){var h=this.linkedParent||this,v=1,I=0,q=f?
    h.oldTransA:h.transA;f=f?h.oldMin:h.min;var p=h.minPixelPadding;d=(h.isOrdinal||h.isBroken||h.isLog&&d)&&h.lin2val;q||(q=h.transA);c&&(v*=-1,I=h.len);h.reversed&&(v*=-1,I-=v*(h.sector||h.len));b?(a=(a*v+I-p)/q+f,d&&(a=h.lin2val(a))):(d&&(a=h.val2lin(a)),a=z(f)?v*(a-f)*q+I+v*p+(z(m)?q*m:0):void 0);return a},toPixels:function(a,b){return this.translate(a,!1,!this.horiz,null,!0)+(b?0:this.pos)},toValue:function(a,b){return this.translate(a-(b?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a,
    b,c,f,d){var h=this.chart,v=this.left,m=this.top,I,q,p=c&&h.oldChartHeight||h.chartHeight,n=c&&h.oldChartWidth||h.chartWidth,e;I=this.transB;var A=function(a,h,b){if(a<h||a>b)f?a=Math.min(Math.max(h,a),b):e=!0;return a};d=H(d,this.translate(a,null,null,c));d=Math.min(Math.max(-1E5,d),1E5);a=c=Math.round(d+I);I=q=Math.round(p-d-I);z(d)?this.horiz?(I=m,q=p-this.bottom,a=c=A(a,v,v+this.width)):(a=v,c=n-this.right,I=q=A(I,m,m+this.height)):(e=!0,f=!1);return e&&!f?null:h.renderer.crispLine(["M",a,I,"L",
    c,q],b||1)},getLinearTickPositions:function(a,b,c){var h,v=e(Math.floor(b/a)*a);c=e(Math.ceil(c/a)*a);var f=[],d;e(v+a)===v&&(d=20);if(this.single)return [b];for(b=v;b<=c;){f.push(b);b=e(b+a,d);if(b===h)break;h=b;}return f},getMinorTickInterval:function(){var a=this.options;return !0===a.minorTicks?H(a.minorTickInterval,"auto"):!1===a.minorTicks?null:a.minorTickInterval},getMinorTickPositions:function(){var a=this,b=a.options,f=a.tickPositions,d=a.minorTickInterval,m=[],q=a.pointRangePadding||0,p=a.min-
    q,q=a.max+q,n=q-p;if(n&&n/d<a.len/3)if(a.isLog)c(this.paddedTicks,function(h,b,c){b&&m.push.apply(m,a.getLogTickPositions(d,c[b-1],c[b],!0));});else if(a.isDatetimeAxis&&"auto"===this.getMinorTickInterval())m=m.concat(a.getTimeTicks(a.normalizeTimeTickInterval(d),p,q,b.startOfWeek));else for(b=p+(f[0]-p)%d;b<=q&&b!==m[0];b+=d)m.push(b);0!==m.length&&a.trimTicks(m);return m},adjustForMinRange:function(){var a=this.options,b=this.min,f=this.max,d,m,q,p,n,e,A,k;this.isXAxis&&void 0===this.minRange&&!this.isLog&&
    (w(a.min)||w(a.max)?this.minRange=null:(c(this.series,function(a){e=a.xData;for(p=A=a.xIncrement?1:e.length-1;0<p;p--)if(n=e[p]-e[p-1],void 0===q||n<q)q=n;}),this.minRange=Math.min(5*q,this.dataMax-this.dataMin)));f-b<this.minRange&&(m=this.dataMax-this.dataMin>=this.minRange,k=this.minRange,d=(k-f+b)/2,d=[b-d,H(a.min,b-d)],m&&(d[2]=this.isLog?this.log2lin(this.dataMin):this.dataMin),b=D(d),f=[b+k,H(a.max,b+k)],m&&(f[2]=this.isLog?this.log2lin(this.dataMax):this.dataMax),f=r(f),f-b<k&&(d[0]=f-k,d[1]=
    H(a.min,f-k),b=D(d)));this.min=b;this.max=f;},getClosest:function(){var a;this.categories?a=1:c(this.series,function(h){var b=h.closestPointRange,c=h.visible||!h.chart.options.chart.ignoreHiddenSeries;!h.noSharedTooltip&&w(b)&&c&&(a=w(a)?Math.min(a,b):b);});return a},nameToX:function(a){var h=n(this.categories),c=h?this.categories:this.names,f=a.options.x,d;a.series.requireSorting=!1;w(f)||(f=!1===this.options.uniqueNames?a.series.autoIncrement():h?b(a.name,c):H(c.keys[a.name],-1));-1===f?h||(d=c.length):
    d=f;void 0!==d&&(this.names[d]=a.name,this.names.keys[a.name]=d);return d},updateNames:function(){var h=this,b=this.names;0<b.length&&(c(a.keys(b.keys),function(a){delete b.keys[a];}),b.length=0,this.minRange=this.userMinRange,c(this.series||[],function(a){a.xIncrement=null;if(!a.points||a.isDirtyData)a.processData(),a.generatePoints();c(a.points,function(b,c){var f;b.options&&(f=h.nameToX(b),void 0!==f&&f!==b.x&&(b.x=f,a.xData[c]=f));});}));},setAxisTranslation:function(a){var h=this,b=h.max-h.min,f=
    h.axisPointRange||0,d,m=0,q=0,p=h.linkedParent,n=!!h.categories,e=h.transA,A=h.isXAxis;if(A||n||f)d=h.getClosest(),p?(m=p.minPointOffset,q=p.pointRangePadding):c(h.series,function(a){var b=n?1:A?H(a.options.pointRange,d,0):h.axisPointRange||0;a=a.options.pointPlacement;f=Math.max(f,b);h.single||(m=Math.max(m,J(a)?0:b/2),q=Math.max(q,"on"===a?0:b));}),p=h.ordinalSlope&&d?h.ordinalSlope/d:1,h.minPointOffset=m*=p,h.pointRangePadding=q*=p,h.pointRange=Math.min(f,b),A&&(h.closestPointRange=d);a&&(h.oldTransA=
    e);h.translationSlope=h.transA=e=h.options.staticScale||h.len/(b+q||1);h.transB=h.horiz?h.left:h.bottom;h.minPixelPadding=e*m;k(this,"afterSetAxisTranslation");},minFromRange:function(){return this.max-this.range},setTickInterval:function(h){var b=this,f=b.chart,d=b.options,m=b.isLog,q=b.isDatetimeAxis,n=b.isXAxis,A=b.isLinked,E=d.maxPadding,g=d.minPadding,B=d.tickInterval,x=d.tickPixelInterval,G=b.categories,u=z(b.threshold)?b.threshold:null,l=b.softThreshold,t,J,M,r;q||G||A||this.getTickAmount();
    M=H(b.userMin,d.min);r=H(b.userMax,d.max);A?(b.linkedParent=f[b.coll][d.linkedTo],f=b.linkedParent.getExtremes(),b.min=H(f.min,f.dataMin),b.max=H(f.max,f.dataMax),d.type!==b.linkedParent.options.type&&a.error(11,1)):(!l&&w(u)&&(b.dataMin>=u?(t=u,g=0):b.dataMax<=u&&(J=u,E=0)),b.min=H(M,t,b.dataMin),b.max=H(r,J,b.dataMax));m&&(b.positiveValuesOnly&&!h&&0>=Math.min(b.min,H(b.dataMin,b.min))&&a.error(10,1),b.min=e(b.log2lin(b.min),15),b.max=e(b.log2lin(b.max),15));b.range&&w(b.max)&&(b.userMin=b.min=
    M=Math.max(b.dataMin,b.minFromRange()),b.userMax=r=b.max,b.range=null);k(b,"foundExtremes");b.beforePadding&&b.beforePadding();b.adjustForMinRange();!(G||b.axisPointRange||b.usePercentage||A)&&w(b.min)&&w(b.max)&&(f=b.max-b.min)&&(!w(M)&&g&&(b.min-=f*g),!w(r)&&E&&(b.max+=f*E));z(d.softMin)&&!z(b.userMin)&&(b.min=Math.min(b.min,d.softMin));z(d.softMax)&&!z(b.userMax)&&(b.max=Math.max(b.max,d.softMax));z(d.floor)&&(b.min=Math.max(b.min,d.floor));z(d.ceiling)&&(b.max=Math.min(b.max,d.ceiling));l&&w(b.dataMin)&&
    (u=u||0,!w(M)&&b.min<u&&b.dataMin>=u?b.min=u:!w(r)&&b.max>u&&b.dataMax<=u&&(b.max=u));b.tickInterval=b.min===b.max||void 0===b.min||void 0===b.max?1:A&&!B&&x===b.linkedParent.options.tickPixelInterval?B=b.linkedParent.tickInterval:H(B,this.tickAmount?(b.max-b.min)/Math.max(this.tickAmount-1,1):void 0,G?1:(b.max-b.min)*x/Math.max(b.len,x));n&&!h&&c(b.series,function(a){a.processData(b.min!==b.oldMin||b.max!==b.oldMax);});b.setAxisTranslation(!0);b.beforeSetTickPositions&&b.beforeSetTickPositions();
    b.postProcessTickInterval&&(b.tickInterval=b.postProcessTickInterval(b.tickInterval));b.pointRange&&!B&&(b.tickInterval=Math.max(b.pointRange,b.tickInterval));h=H(d.minTickInterval,b.isDatetimeAxis&&b.closestPointRange);!B&&b.tickInterval<h&&(b.tickInterval=h);q||m||B||(b.tickInterval=L(b.tickInterval,null,p(b.tickInterval),H(d.allowDecimals,!(.5<b.tickInterval&&5>b.tickInterval&&1E3<b.max&&9999>b.max)),!!this.tickAmount));this.tickAmount||(b.tickInterval=b.unsquish());this.setTickPositions();},setTickPositions:function(){var a=
    this.options,b,c=a.tickPositions;b=this.getMinorTickInterval();var f=a.tickPositioner,d=a.startOnTick,m=a.endOnTick;this.tickmarkOffset=this.categories&&"between"===a.tickmarkPlacement&&1===this.tickInterval?.5:0;this.minorTickInterval="auto"===b&&this.tickInterval?this.tickInterval/5:b;this.single=this.min===this.max&&w(this.min)&&!this.tickAmount&&(parseInt(this.min,10)===this.min||!1!==a.allowDecimals);this.tickPositions=b=c&&c.slice();!b&&(b=this.isDatetimeAxis?this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,
    a.units),this.min,this.max,a.startOfWeek,this.ordinalPositions,this.closestPointRange,!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max),b.length>this.len&&(b=[b[0],b.pop()],b[0]===b[1]&&(b.length=1)),this.tickPositions=b,f&&(f=f.apply(this,[this.min,this.max])))&&(this.tickPositions=b=f);this.paddedTicks=b.slice(0);this.trimTicks(b,d,m);this.isLinked||(this.single&&2>b.length&&(this.min-=.5,this.max+=.5),c||
    f||this.adjustTickAmount());k(this,"afterSetTickPositions");},trimTicks:function(a,b,c){var h=a[0],f=a[a.length-1],d=this.minPointOffset||0;if(!this.isLinked){if(b&&-Infinity!==h)this.min=h;else for(;this.min-d>a[0];)a.shift();if(c)this.max=f;else for(;this.max+d<a[a.length-1];)a.pop();0===a.length&&w(h)&&!this.options.tickPositions&&a.push((f+h)/2);}},alignToOthers:function(){var a={},b,f=this.options;!1===this.chart.options.chart.alignTicks||!1===f.alignTicks||!1===f.startOnTick||!1===f.endOnTick||
    this.isLog||c(this.chart[this.coll],function(h){var c=h.options,c=[h.horiz?c.left:c.top,c.width,c.height,c.pane].join();h.series.length&&(a[c]?b=!0:a[c]=1);});return b},getTickAmount:function(){var a=this.options,b=a.tickAmount,c=a.tickPixelInterval;!w(a.tickInterval)&&this.len<c&&!this.isRadial&&!this.isLog&&a.startOnTick&&a.endOnTick&&(b=2);!b&&this.alignToOthers()&&(b=Math.ceil(this.len/c)+1);4>b&&(this.finalTickAmt=b,b=5);this.tickAmount=b;},adjustTickAmount:function(){var a=this.tickInterval,b=
    this.tickPositions,c=this.tickAmount,f=this.finalTickAmt,d=b&&b.length,m=H(this.threshold,this.softThreshold?0:null);if(this.hasData()){if(d<c){for(;b.length<c;)b.length%2||this.min===m?b.push(e(b[b.length-1]+a)):b.unshift(e(b[0]-a));this.transA*=(d-1)/(c-1);this.min=b[0];this.max=b[b.length-1];}else d>c&&(this.tickInterval*=2,this.setTickPositions());if(w(f)){for(a=c=b.length;a--;)(3===f&&1===a%2||2>=f&&0<a&&a<c-1)&&b.splice(a,1);this.finalTickAmt=void 0;}}},setScale:function(){var a,b;this.oldMin=
    this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();b=this.len!==this.oldAxisLength;c(this.series,function(b){if(b.isDirtyData||b.isDirty||b.xAxis.isDirty)a=!0;});b||a||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()?(this.resetStacks&&this.resetStacks(),this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=this.userMin,this.oldUserMax=this.userMax,this.isDirty||(this.isDirty=
    b||this.min!==this.oldMin||this.max!==this.oldMax)):this.cleanStacks&&this.cleanStacks();k(this,"afterSetScale");},setExtremes:function(a,b,f,m,q){var h=this,p=h.chart;f=H(f,!0);c(h.series,function(a){delete a.kdTree;});q=d(q,{min:a,max:b});k(h,"setExtremes",q,function(){h.userMin=a;h.userMax=b;h.eventArgs=q;f&&p.redraw(m);});},zoom:function(a,b){var h=this.dataMin,c=this.dataMax,f=this.options,d=Math.min(h,H(f.min,h)),f=Math.max(c,H(f.max,c));if(a!==this.min||b!==this.max)this.allowZoomOutside||(w(h)&&
    (a<d&&(a=d),a>f&&(a=f)),w(c)&&(b<d&&(b=d),b>f&&(b=f))),this.displayBtn=void 0!==a||void 0!==b,this.setExtremes(a,b,!1,void 0,{trigger:"zoom"});return !0},setAxisSize:function(){var b=this.chart,c=this.options,f=c.offsets||[0,0,0,0],d=this.horiz,m=this.width=Math.round(a.relativeLength(H(c.width,b.plotWidth-f[3]+f[1]),b.plotWidth)),q=this.height=Math.round(a.relativeLength(H(c.height,b.plotHeight-f[0]+f[2]),b.plotHeight)),p=this.top=Math.round(a.relativeLength(H(c.top,b.plotTop+f[0]),b.plotHeight,b.plotTop)),
    c=this.left=Math.round(a.relativeLength(H(c.left,b.plotLeft+f[3]),b.plotWidth,b.plotLeft));this.bottom=b.chartHeight-q-p;this.right=b.chartWidth-m-c;this.len=Math.max(d?m:q,0);this.pos=d?c:p;},getExtremes:function(){var a=this.isLog;return {min:a?e(this.lin2log(this.min)):this.min,max:a?e(this.lin2log(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var b=this.isLog,h=b?this.lin2log(this.min):this.min,b=b?this.lin2log(this.max):
    this.max;null===a||-Infinity===a?a=h:Infinity===a?a=b:h>a?a=h:b<a&&(a=b);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){a=(H(a,0)-90*this.side+720)%360;return 15<a&&165>a?"right":195<a&&345>a?"left":"center"},tickSize:function(a){var b=this.options,h=b[a+"Length"],c=H(b[a+"Width"],"tick"===a&&this.isXAxis?1:0);if(c&&h)return "inside"===b[a+"Position"]&&(h=-h),[h,c]},labelMetrics:function(){var a=this.tickPositions&&this.tickPositions[0]||0;return this.chart.renderer.fontMetrics(this.options.labels.style&&
    this.options.labels.style.fontSize,this.ticks[a]&&this.ticks[a].label)},unsquish:function(){var a=this.options.labels,b=this.horiz,f=this.tickInterval,d=f,m=this.len/(((this.categories?1:0)+this.max-this.min)/f),q,p=a.rotation,n=this.labelMetrics(),A,k=Number.MAX_VALUE,E,z=function(a){a/=m||1;a=1<a?Math.ceil(a):1;return e(a*f)};b?(E=!a.staggerLines&&!a.step&&(w(p)?[p]:m<H(a.autoRotationLimit,80)&&a.autoRotation))&&c(E,function(a){var b;if(a===p||a&&-90<=a&&90>=a)A=z(Math.abs(n.h/Math.sin(l*a))),b=
    A+Math.abs(a/360),b<k&&(k=b,q=a,d=A);}):a.step||(d=z(n.h));this.autoRotation=E;this.labelRotation=H(q,p);return d},getSlotWidth:function(){var a=this.chart,b=this.horiz,c=this.options.labels,f=Math.max(this.tickPositions.length-(this.categories?0:1),1),d=a.margin[3];return b&&2>(c.step||0)&&!c.rotation&&(this.staggerLines||1)*this.len/f||!b&&(c.style&&parseInt(c.style.width,10)||d&&d-a.spacing[3]||.33*a.chartWidth)},renderUnsquish:function(){var a=this.chart,b=a.renderer,f=this.tickPositions,d=this.ticks,
    m=this.options.labels,q=this.horiz,p=this.getSlotWidth(),n=Math.max(1,Math.round(p-2*(m.padding||5))),e={},A=this.labelMetrics(),k=m.style&&m.style.textOverflow,E,z,g=0,B;J(m.rotation)||(e.rotation=m.rotation||0);c(f,function(a){(a=d[a])&&a.label&&a.label.textPxLength>g&&(g=a.label.textPxLength);});this.maxLabelLength=g;if(this.autoRotation)g>n&&g>A.h?e.rotation=this.labelRotation:this.labelRotation=0;else if(p&&(E=n,!k))for(z="clip",n=f.length;!q&&n--;)if(B=f[n],B=d[B].label)B.styles&&"ellipsis"===
    B.styles.textOverflow?B.css({textOverflow:"clip"}):B.textPxLength>p&&B.css({width:p+"px"}),B.getBBox().height>this.len/f.length-(A.h-A.f)&&(B.specificTextOverflow="ellipsis");e.rotation&&(E=g>.5*a.chartHeight?.33*a.chartHeight:a.chartHeight,k||(z="ellipsis"));if(this.labelAlign=m.align||this.autoLabelAlign(this.labelRotation))e.align=this.labelAlign;c(f,function(a){var b=(a=d[a])&&a.label,h={};b&&(b.attr(e),!E||m.style&&m.style.width||!(E<b.textPxLength||"SPAN"===b.element.tagName)||(h.width=E,k||
    (h.textOverflow=b.specificTextOverflow||z),b.css(h)),delete b.specificTextOverflow,a.rotation=e.rotation);});this.tickRotCorr=b.rotCorr(A.b,this.labelRotation||0,0!==this.side);},hasData:function(){return this.hasVisibleSeries||w(this.min)&&w(this.max)&&this.tickPositions&&0<this.tickPositions.length},addTitle:function(a){var b=this.chart.renderer,h=this.horiz,c=this.opposite,f=this.options.title,d;this.axisTitle||((d=f.textAlign)||(d=(h?{low:"left",middle:"center",high:"right"}:{low:c?"right":"left",
    middle:"center",high:c?"left":"right"})[f.align]),this.axisTitle=b.text(f.text,0,0,f.useHTML).attr({zIndex:7,rotation:f.rotation||0,align:d}).addClass("highcharts-axis-title").css(q(f.style)).add(this.axisGroup),this.axisTitle.isNew=!0);f.style.width||this.isRadial||this.axisTitle.css({width:this.len});this.axisTitle[a?"show":"hide"](!0);},generateTick:function(a){var b=this.ticks;b[a]?b[a].addLabel():b[a]=new M(this,a);},getOffset:function(){var a=this,b=a.chart,f=b.renderer,d=a.options,m=a.tickPositions,
    q=a.ticks,p=a.horiz,n=a.side,e=b.inverted&&!a.isZAxis?[1,0,3,2][n]:n,A,k,E=0,z,g=0,x=d.title,G=d.labels,u=0,l=b.axisOffset,b=b.clipOffset,t=[-1,1,1,-1][n],J=d.className,M=a.axisParent,r=this.tickSize("tick");A=a.hasData();a.showAxis=k=A||H(d.showEmpty,!0);a.staggerLines=a.horiz&&G.staggerLines;a.axisGroup||(a.gridGroup=f.g("grid").attr({zIndex:d.gridZIndex||1}).addClass("highcharts-"+this.coll.toLowerCase()+"-grid "+(J||"")).add(M),a.axisGroup=f.g("axis").attr({zIndex:d.zIndex||2}).addClass("highcharts-"+
    this.coll.toLowerCase()+" "+(J||"")).add(M),a.labelGroup=f.g("axis-labels").attr({zIndex:G.zIndex||7}).addClass("highcharts-"+a.coll.toLowerCase()+"-labels "+(J||"")).add(M));A||a.isLinked?(c(m,function(b,f){a.generateTick(b,f);}),a.renderUnsquish(),a.reserveSpaceDefault=0===n||2===n||{1:"left",3:"right"}[n]===a.labelAlign,H(G.reserveSpace,"center"===a.labelAlign?!0:null,a.reserveSpaceDefault)&&c(m,function(a){u=Math.max(q[a].getLabelSize(),u);}),a.staggerLines&&(u*=a.staggerLines),a.labelOffset=u*
    (a.opposite?-1:1)):B(q,function(a,b){a.destroy();delete q[b];});x&&x.text&&!1!==x.enabled&&(a.addTitle(k),k&&!1!==x.reserveSpace&&(a.titleOffset=E=a.axisTitle.getBBox()[p?"height":"width"],z=x.offset,g=w(z)?0:H(x.margin,p?5:10)));a.renderLine();a.offset=t*H(d.offset,l[n]);a.tickRotCorr=a.tickRotCorr||{x:0,y:0};f=0===n?-a.labelMetrics().h:2===n?a.tickRotCorr.y:0;g=Math.abs(u)+g;u&&(g=g-f+t*(p?H(G.y,a.tickRotCorr.y+8*t):G.x));a.axisTitleMargin=H(z,g);l[n]=Math.max(l[n],a.axisTitleMargin+E+t*a.offset,
    g,A&&m.length&&r?r[0]+t*a.offset:0);d=d.offset?0:2*Math.floor(a.axisLine.strokeWidth()/2);b[e]=Math.max(b[e],d);},getLinePath:function(a){var b=this.chart,f=this.opposite,c=this.offset,h=this.horiz,d=this.left+(f?this.width:0)+c,c=b.chartHeight-this.bottom-(f?this.height:0)+c;f&&(a*=-1);return b.renderer.crispLine(["M",h?this.left:d,h?c:this.top,"L",h?b.chartWidth-this.right:d,h?c:b.chartHeight-this.bottom],a)},renderLine:function(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),
    this.axisLine.attr({stroke:this.options.lineColor,"stroke-width":this.options.lineWidth,zIndex:7}));},getTitlePosition:function(){var a=this.horiz,b=this.left,f=this.top,c=this.len,d=this.options.title,m=a?b:f,q=this.opposite,p=this.offset,n=d.x||0,e=d.y||0,A=this.axisTitle,k=this.chart.renderer.fontMetrics(d.style&&d.style.fontSize,A),A=Math.max(A.getBBox(null,0).height-k.h-1,0),c={low:m+(a?0:c),middle:m+c/2,high:m+(a?c:0)}[d.align],b=(a?f+this.height:b)+(a?1:-1)*(q?-1:1)*this.axisTitleMargin+[-A,
    A,k.f,-A][this.side];return {x:a?c+n:b+(q?this.width:0)+p+n,y:a?b+e-(q?this.height:0)+p:c+e}},renderMinorTick:function(a){var b=this.chart.hasRendered&&z(this.oldMin),f=this.minorTicks;f[a]||(f[a]=new M(this,a,"minor"));b&&f[a].isNew&&f[a].render(null,!0);f[a].render(null,!1,1);},renderTick:function(a,b){var f=this.isLinked,c=this.ticks,d=this.chart.hasRendered&&z(this.oldMin);if(!f||a>=this.min&&a<=this.max)c[a]||(c[a]=new M(this,a)),d&&c[a].isNew&&c[a].render(b,!0,.1),c[a].render(b);},render:function(){var b=
    this,f=b.chart,d=b.options,m=b.isLog,q=b.isLinked,p=b.tickPositions,n=b.axisTitle,e=b.ticks,E=b.minorTicks,g=b.alternateBands,x=d.stackLabels,G=d.alternateGridColor,u=b.tickmarkOffset,l=b.axisLine,H=b.showAxis,t=F(f.renderer.globalAnimation),J,r;b.labelEdge.length=0;b.overlap=!1;c([e,E,g],function(a){B(a,function(a){a.isActive=!1;});});if(b.hasData()||q)b.minorTickInterval&&!b.categories&&c(b.getMinorTickPositions(),function(a){b.renderMinorTick(a);}),p.length&&(c(p,function(a,f){b.renderTick(a,f);}),
    u&&(0===b.min||b.single)&&(e[-1]||(e[-1]=new M(b,-1,null,!0)),e[-1].render(-1))),G&&c(p,function(c,d){r=void 0!==p[d+1]?p[d+1]+u:b.max-u;0===d%2&&c<b.max&&r<=b.max+(f.polar?-u:u)&&(g[c]||(g[c]=new a.PlotLineOrBand(b)),J=c+u,g[c].options={from:m?b.lin2log(J):J,to:m?b.lin2log(r):r,color:G},g[c].render(),g[c].isActive=!0);}),b._addedPlotLB||(c((d.plotLines||[]).concat(d.plotBands||[]),function(a){b.addPlotBandOrLine(a);}),b._addedPlotLB=!0);c([e,E,g],function(a){var b,c=[],d=t.duration;B(a,function(a,
    b){a.isActive||(a.render(b,!1,0),a.isActive=!1,c.push(b));});A(function(){for(b=c.length;b--;)a[c[b]]&&!a[c[b]].isActive&&(a[c[b]].destroy(),delete a[c[b]]);},a!==g&&f.hasRendered&&d?d:0);});l&&(l[l.isPlaced?"animate":"attr"]({d:this.getLinePath(l.strokeWidth())}),l.isPlaced=!0,l[H?"show":"hide"](!0));n&&H&&(d=b.getTitlePosition(),z(d.y)?(n[n.isNew?"attr":"animate"](d),n.isNew=!1):(n.attr("y",-9999),n.isNew=!0));x&&x.enabled&&b.renderStackTotals();b.isDirty=!1;k(this,"afterRender");},redraw:function(){this.visible&&
    (this.render(),c(this.plotLinesAndBands,function(a){a.render();}));c(this.series,function(a){a.isDirty=!0;});},keepProps:"extKey hcEvents names series userMax userMin".split(" "),destroy:function(a){var f=this,d=f.stacks,h=f.plotLinesAndBands,q;k(this,"destroy",{keepEvents:a});a||m(f);B(d,function(a,b){u(a);d[b]=null;});c([f.ticks,f.minorTicks,f.alternateBands],function(a){u(a);});if(h)for(a=h.length;a--;)h[a].destroy();c("stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross".split(" "),
    function(a){f[a]&&(f[a]=f[a].destroy());});for(q in f.plotLinesAndBandsGroups)f.plotLinesAndBandsGroups[q]=f.plotLinesAndBandsGroups[q].destroy();B(f,function(a,c){-1===b(c,f.keepProps)&&delete f[c];});},drawCrosshair:function(a,b){var f,c=this.crosshair,d=H(c.snap,!0),h,m=this.cross;k(this,"drawCrosshair",{e:a,point:b});a||(a=this.cross&&this.cross.e);if(this.crosshair&&!1!==(w(b)||!d)){d?w(b)&&(h=H(b.crosshairPos,this.isXAxis?b.plotX:this.len-b.plotY)):h=a&&(this.horiz?a.chartX-this.pos:this.len-a.chartY+
    this.pos);w(h)&&(f=this.getPlotLinePath(b&&(this.isXAxis?b.x:H(b.stackY,b.y)),null,null,null,h)||null);if(!w(f)){this.hideCrosshair();return}d=this.categories&&!this.isRadial;m||(this.cross=m=this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+(d?"category ":"thin ")+c.className).attr({zIndex:H(c.zIndex,2)}).add(),m.attr({stroke:c.color||(d?g("#ccd6eb").setOpacity(.25).get():"#cccccc"),"stroke-width":H(c.width,1)}).css({"pointer-events":"none"}),c.dashStyle&&m.attr({dashstyle:c.dashStyle}));
    m.show().attr({d:f});d&&!c.width&&m.attr({"stroke-width":this.transA});this.cross.e=a;}else this.hideCrosshair();k(this,"afterDrawCrosshair",{e:a,point:b});},hideCrosshair:function(){this.cross&&this.cross.hide();}});return a.Axis=G}(K);(function(a){var C=a.Axis,F=a.getMagnitude,D=a.normalizeTickInterval,r=a.timeUnits;C.prototype.getTimeTicks=function(){return this.chart.time.getTimeTicks.apply(this.chart.time,arguments)};C.prototype.normalizeTimeTickInterval=function(a,e){var g=e||[["millisecond",[1,
    2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]];e=g[g.length-1];var w=r[e[0]],l=e[1],u;for(u=0;u<g.length&&!(e=g[u],w=r[e[0]],l=e[1],g[u+1]&&a<=(w*l[l.length-1]+r[g[u+1][0]])/2);u++);w===r.year&&a<5*w&&(l=[1,2,5]);a=D(a/w,l,"year"===e[0]?Math.max(F(a/w),1):1);return {unitRange:w,count:a,unitName:e[0]}};})(K);(function(a){var C=a.Axis,F=a.getMagnitude,D=a.map,r=a.normalizeTickInterval,
    g=a.pick;C.prototype.getLogTickPositions=function(a,t,w,l){var e=this.options,c=this.len,d=[];l||(this._minorAutoInterval=null);if(.5<=a)a=Math.round(a),d=this.getLinearTickPositions(a,t,w);else if(.08<=a)for(var c=Math.floor(t),k,x,p,f,b,e=.3<a?[1,2,4]:.15<a?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];c<w+1&&!b;c++)for(x=e.length,k=0;k<x&&!b;k++)p=this.log2lin(this.lin2log(c)*e[k]),p>t&&(!l||f<=w)&&void 0!==f&&d.push(f),f>w&&(b=!0),f=p;else t=this.lin2log(t),w=this.lin2log(w),a=l?this.getMinorTickInterval():
    e.tickInterval,a=g("auto"===a?null:a,this._minorAutoInterval,e.tickPixelInterval/(l?5:1)*(w-t)/((l?c/this.tickPositions.length:c)||1)),a=r(a,null,F(a)),d=D(this.getLinearTickPositions(a,t,w),this.log2lin),l||(this._minorAutoInterval=a/5);l||(this.tickInterval=a);return d};C.prototype.log2lin=function(a){return Math.log(a)/Math.LN10};C.prototype.lin2log=function(a){return Math.pow(10,a)};})(K);(function(a,C){var F=a.arrayMax,D=a.arrayMin,r=a.defined,g=a.destroyObjectProperties,e=a.each,t=a.erase,w=
    a.merge,l=a.pick;a.PlotLineOrBand=function(a,c){this.axis=a;c&&(this.options=c,this.id=c.id);};a.PlotLineOrBand.prototype={render:function(){var e=this,c=e.axis,d=c.horiz,k=e.options,g=k.label,p=e.label,f=k.to,b=k.from,n=k.value,z=r(b)&&r(f),J=r(n),q=e.svgElem,t=!q,B=[],H=k.color,m=l(k.zIndex,0),E=k.events,B={"class":"highcharts-plot-"+(z?"band ":"line ")+(k.className||"")},A={},M=c.chart.renderer,G=z?"bands":"lines";c.isLog&&(b=c.log2lin(b),f=c.log2lin(f),n=c.log2lin(n));J?(B={stroke:H,"stroke-width":k.width},
    k.dashStyle&&(B.dashstyle=k.dashStyle)):z&&(H&&(B.fill=H),k.borderWidth&&(B.stroke=k.borderColor,B["stroke-width"]=k.borderWidth));A.zIndex=m;G+="-"+m;(H=c.plotLinesAndBandsGroups[G])||(c.plotLinesAndBandsGroups[G]=H=M.g("plot-"+G).attr(A).add());t&&(e.svgElem=q=M.path().attr(B).add(H));if(J)B=c.getPlotLinePath(n,q.strokeWidth());else if(z)B=c.getPlotBandPath(b,f,k);else return;t&&B&&B.length?(q.attr({d:B}),E&&a.objectEach(E,function(a,b){q.on(b,function(a){E[b].apply(e,[a]);});})):q&&(B?(q.show(),
    q.animate({d:B})):(q.hide(),p&&(e.label=p=p.destroy())));g&&r(g.text)&&B&&B.length&&0<c.width&&0<c.height&&!B.flat?(g=w({align:d&&z&&"center",x:d?!z&&4:10,verticalAlign:!d&&z&&"middle",y:d?z?16:10:z?6:-4,rotation:d&&!z&&90},g),this.renderLabel(g,B,z,m)):p&&p.hide();return e},renderLabel:function(a,c,d,e){var k=this.label,p=this.axis.chart.renderer;k||(k={align:a.textAlign||a.align,rotation:a.rotation,"class":"highcharts-plot-"+(d?"band":"line")+"-label "+(a.className||"")},k.zIndex=e,this.label=k=
    p.text(a.text,0,0,a.useHTML).attr(k).add(),k.css(a.style));e=c.xBounds||[c[1],c[4],d?c[6]:c[1]];c=c.yBounds||[c[2],c[5],d?c[7]:c[2]];d=D(e);p=D(c);k.align(a,!1,{x:d,y:p,width:F(e)-d,height:F(c)-p});k.show();},destroy:function(){t(this.axis.plotLinesAndBands,this);delete this.axis;g(this);}};a.extend(C.prototype,{getPlotBandPath:function(a,c){var d=this.getPlotLinePath(c,null,null,!0),e=this.getPlotLinePath(a,null,null,!0),g=[],p=this.horiz,f=1,b;a=a<this.min&&c<this.min||a>this.max&&c>this.max;if(e&&
    d)for(a&&(b=e.toString()===d.toString(),f=0),a=0;a<e.length;a+=6)p&&d[a+1]===e[a+1]?(d[a+1]+=f,d[a+4]+=f):p||d[a+2]!==e[a+2]||(d[a+2]+=f,d[a+5]+=f),g.push("M",e[a+1],e[a+2],"L",e[a+4],e[a+5],d[a+4],d[a+5],d[a+1],d[a+2],"z"),g.flat=b;return g},addPlotBand:function(a){return this.addPlotBandOrLine(a,"plotBands")},addPlotLine:function(a){return this.addPlotBandOrLine(a,"plotLines")},addPlotBandOrLine:function(e,c){var d=(new a.PlotLineOrBand(this,e)).render(),k=this.userOptions;d&&(c&&(k[c]=k[c]||[],
    k[c].push(e)),this.plotLinesAndBands.push(d));return d},removePlotBandOrLine:function(a){for(var c=this.plotLinesAndBands,d=this.options,k=this.userOptions,g=c.length;g--;)c[g].id===a&&c[g].destroy();e([d.plotLines||[],k.plotLines||[],d.plotBands||[],k.plotBands||[]],function(c){for(g=c.length;g--;)c[g].id===a&&t(c,c[g]);});},removePlotBand:function(a){this.removePlotBandOrLine(a);},removePlotLine:function(a){this.removePlotBandOrLine(a);}});})(K,V);(function(a){var C=a.each,F=a.extend,D=a.format,r=a.isNumber,
    g=a.map,e=a.merge,t=a.pick,w=a.splat,l=a.syncTimeout,u=a.timeUnits;a.Tooltip=function(){this.init.apply(this,arguments);};a.Tooltip.prototype={init:function(a,d){this.chart=a;this.options=d;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.split=d.split&&!a.inverted;this.shared=d.shared||this.split;},cleanSplit:function(a){C(this.chart.series,function(c){var d=c&&c.tt;d&&(!d.isActive||a?c.tt=d.destroy():d.isActive=!1);});},getLabel:function(){var a=this.chart.renderer,d=this.options;this.label||
    (this.split?this.label=a.g("tooltip"):(this.label=a.label("",0,0,d.shape||"callout",null,null,d.useHTML,null,"tooltip").attr({padding:d.padding,r:d.borderRadius}),this.label.attr({fill:d.backgroundColor,"stroke-width":d.borderWidth}).css(d.style).shadow(d.shadow)),this.label.attr({zIndex:8}).add());return this.label},update:function(a){this.destroy();e(!0,this.chart.options.tooltip.userOptions,a);this.init(this.chart,e(!0,this.options,a));},destroy:function(){this.label&&(this.label=this.label.destroy());
    this.split&&this.tt&&(this.cleanSplit(this.chart,!0),this.tt=this.tt.destroy());a.clearTimeout(this.hideTimer);a.clearTimeout(this.tooltipTimeout);},move:function(c,d,e,g){var p=this,f=p.now,b=!1!==p.options.animation&&!p.isHidden&&(1<Math.abs(c-f.x)||1<Math.abs(d-f.y)),n=p.followPointer||1<p.len;F(f,{x:b?(2*f.x+c)/3:c,y:b?(f.y+d)/2:d,anchorX:n?void 0:b?(2*f.anchorX+e)/3:e,anchorY:n?void 0:b?(f.anchorY+g)/2:g});p.getLabel().attr(f);b&&(a.clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){p&&
    p.move(c,d,e,g);},32));},hide:function(c){var d=this;a.clearTimeout(this.hideTimer);c=t(c,this.options.hideDelay,500);this.isHidden||(this.hideTimer=l(function(){d.getLabel()[c?"fadeOut":"hide"]();d.isHidden=!0;},c));},getAnchor:function(a,d){var c,e=this.chart,p=e.inverted,f=e.plotTop,b=e.plotLeft,n=0,z=0,l,q;a=w(a);c=a[0].tooltipPos;this.followPointer&&d&&(void 0===d.chartX&&(d=e.pointer.normalize(d)),c=[d.chartX-e.plotLeft,d.chartY-f]);c||(C(a,function(a){l=a.series.yAxis;q=a.series.xAxis;n+=a.plotX+
    (!p&&q?q.left-b:0);z+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+(!p&&l?l.top-f:0);}),n/=a.length,z/=a.length,c=[p?e.plotWidth-z:n,this.shared&&!p&&1<a.length&&d?d.chartY-f:p?e.plotHeight-n:z]);return g(c,Math.round)},getPosition:function(a,d,e){var c=this.chart,p=this.distance,f={},b=c.inverted&&e.h||0,n,g=["y",c.chartHeight,d,e.plotY+c.plotTop,c.plotTop,c.plotTop+c.plotHeight],k=["x",c.chartWidth,a,e.plotX+c.plotLeft,c.plotLeft,c.plotLeft+c.plotWidth],q=!this.followPointer&&t(e.ttBelow,!c.inverted===
    !!e.negative),l=function(a,c,d,m,h,e){var n=d<m-p,A=m+p+d<c,g=m-p-d;m+=p;if(q&&A)f[a]=m;else if(!q&&n)f[a]=g;else if(n)f[a]=Math.min(e-d,0>g-b?g:g-b);else if(A)f[a]=Math.max(h,m+b+d>c?m:m+b);else return !1},B=function(a,b,c,d){var h;d<p||d>b-p?h=!1:f[a]=d<c/2?1:d>b-c/2?b-c-2:d-c/2;return h},H=function(a){var b=g;g=k;k=b;n=a;},m=function(){!1!==l.apply(0,g)?!1!==B.apply(0,k)||n||(H(!0),m()):n?f.x=f.y=0:(H(!0),m());};(c.inverted||1<this.len)&&H();m();return f},defaultFormatter:function(a){var c=this.points||
    w(this),e;e=[a.tooltipFooterHeaderFormatter(c[0])];e=e.concat(a.bodyFormatter(c));e.push(a.tooltipFooterHeaderFormatter(c[0],!0));return e},refresh:function(c,d){var e,g=this.options,p,f=c,b,n={},z=[];e=g.formatter||this.defaultFormatter;var n=this.shared,l;g.enabled&&(a.clearTimeout(this.hideTimer),this.followPointer=w(f)[0].series.tooltipOptions.followPointer,b=this.getAnchor(f,d),d=b[0],p=b[1],!n||f.series&&f.series.noSharedTooltip?n=f.getLabelConfig():(C(f,function(a){a.setState("hover");z.push(a.getLabelConfig());}),
    n={x:f[0].category,y:f[0].y},n.points=z,f=f[0]),this.len=z.length,n=e.call(n,this),l=f.series,this.distance=t(l.tooltipOptions.distance,16),!1===n?this.hide():(e=this.getLabel(),this.isHidden&&e.attr({opacity:1}).show(),this.split?this.renderSplit(n,w(c)):(g.style.width||e.css({width:this.chart.spacingBox.width}),e.attr({text:n&&n.join?n.join(""):n}),e.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-"+t(f.colorIndex,l.colorIndex)),e.attr({stroke:g.borderColor||f.color||l.color||
    "#666666"}),this.updatePosition({plotX:d,plotY:p,negative:f.negative,ttBelow:f.ttBelow,h:b[2]||0})),this.isHidden=!1));},renderSplit:function(c,d){var e=this,g=[],p=this.chart,f=p.renderer,b=!0,n=this.options,z=0,l=this.getLabel();a.isString(c)&&(c=[!1,c]);C(c.slice(0,d.length+1),function(a,c){if(!1!==a){c=d[c-1]||{isHeader:!0,plotX:d[0].plotX};var q=c.series||e,k=q.tt,m=c.series||{},E="highcharts-color-"+t(c.colorIndex,m.colorIndex,"none");k||(q.tt=k=f.label(null,null,null,"callout",null,null,n.useHTML).addClass("highcharts-tooltip-box "+
    E).attr({padding:n.padding,r:n.borderRadius,fill:n.backgroundColor,stroke:n.borderColor||c.color||m.color||"#333333","stroke-width":n.borderWidth}).add(l));k.isActive=!0;k.attr({text:a});k.css(n.style).shadow(n.shadow);a=k.getBBox();m=a.width+k.strokeWidth();c.isHeader?(z=a.height,m=Math.max(0,Math.min(c.plotX+p.plotLeft-m/2,p.chartWidth-m))):m=c.plotX+p.plotLeft-t(n.distance,16)-m;0>m&&(b=!1);a=(c.series&&c.series.yAxis&&c.series.yAxis.pos)+(c.plotY||0);a-=p.plotTop;g.push({target:c.isHeader?p.plotHeight+
    z:a,rank:c.isHeader?1:0,size:q.tt.getBBox().height+1,point:c,x:m,tt:k});}});this.cleanSplit();a.distribute(g,p.plotHeight+z);C(g,function(a){var c=a.point,f=c.series;a.tt.attr({visibility:void 0===a.pos?"hidden":"inherit",x:b||c.isHeader?a.x:c.plotX+p.plotLeft+t(n.distance,16),y:a.pos+p.plotTop,anchorX:c.isHeader?c.plotX+p.plotLeft:c.plotX+f.xAxis.pos,anchorY:c.isHeader?a.pos+p.plotTop-15:c.plotY+f.yAxis.pos});});},updatePosition:function(a){var c=this.chart,e=this.getLabel(),e=(this.options.positioner||
    this.getPosition).call(this,e.width,e.height,a);this.move(Math.round(e.x),Math.round(e.y||0),a.plotX+c.plotLeft,a.plotY+c.plotTop);},getDateFormat:function(a,d,e,g){var c=this.chart.time,f=c.dateFormat("%m-%d %H:%M:%S.%L",d),b,n,k={millisecond:15,second:12,minute:9,hour:6,day:3},l="millisecond";for(n in u){if(a===u.week&&+c.dateFormat("%w",d)===e&&"00:00:00.000"===f.substr(6)){n="week";break}if(u[n]>a){n=l;break}if(k[n]&&f.substr(k[n])!=="01-01 00:00:00.000".substr(k[n]))break;"week"!==n&&(l=n);}n&&
    (b=g[n]);return b},getXDateFormat:function(a,d,e){d=d.dateTimeLabelFormats;var c=e&&e.closestPointRange;return (c?this.getDateFormat(c,a.x,e.options.startOfWeek,d):d.day)||d.year},tooltipFooterHeaderFormatter:function(a,d){d=d?"footer":"header";var c=a.series,e=c.tooltipOptions,p=e.xDateFormat,f=c.xAxis,b=f&&"datetime"===f.options.type&&r(a.key),n=e[d+"Format"];b&&!p&&(p=this.getXDateFormat(a,e,f));b&&p&&C(a.point&&a.point.tooltipDateKeys||["key"],function(a){n=n.replace("{point."+a+"}","{point."+
    a+":"+p+"}");});return D(n,{point:a,series:c},this.chart.time)},bodyFormatter:function(a){return g(a,function(a){var c=a.series.tooltipOptions;return (c[(a.point.formatPrefix||"point")+"Formatter"]||a.point.tooltipFormatter).call(a.point,c[(a.point.formatPrefix||"point")+"Format"])})}};})(K);(function(a){var C=a.addEvent,F=a.attr,D=a.charts,r=a.color,g=a.css,e=a.defined,t=a.each,w=a.extend,l=a.find,u=a.fireEvent,c=a.isNumber,d=a.isObject,k=a.offset,x=a.pick,p=a.splat,f=a.Tooltip;a.Pointer=function(a,
    c){this.init(a,c);};a.Pointer.prototype={init:function(a,c){this.options=c;this.chart=a;this.runChartClick=c.chart.events&&!!c.chart.events.click;this.pinchDown=[];this.lastValidTouch={};f&&(a.tooltip=new f(a,c.tooltip),this.followTouchMove=x(c.tooltip.followTouchMove,!0));this.setDOMEvents();},zoomOption:function(a){var b=this.chart,c=b.options.chart,f=c.zoomType||"",b=b.inverted;/touch/.test(a.type)&&(f=x(c.pinchType,f));this.zoomX=a=/x/.test(f);this.zoomY=f=/y/.test(f);this.zoomHor=a&&!b||f&&b;this.zoomVert=
    f&&!b||a&&b;this.hasZoom=a||f;},normalize:function(a,c){var b;b=a.touches?a.touches.length?a.touches.item(0):a.changedTouches[0]:a;c||(this.chartPosition=c=k(this.chart.container));return w(a,{chartX:Math.round(b.pageX-c.left),chartY:Math.round(b.pageY-c.top)})},getCoordinates:function(a){var b={xAxis:[],yAxis:[]};t(this.chart.axes,function(c){b[c.isXAxis?"xAxis":"yAxis"].push({axis:c,value:c.toValue(a[c.horiz?"chartX":"chartY"])});});return b},findNearestKDPoint:function(a,c,f){var b;t(a,function(a){var e=
    !(a.noSharedTooltip&&c)&&0>a.options.findNearestPointBy.indexOf("y");a=a.searchPoint(f,e);if((e=d(a,!0))&&!(e=!d(b,!0)))var e=b.distX-a.distX,p=b.dist-a.dist,q=(a.series.group&&a.series.group.zIndex)-(b.series.group&&b.series.group.zIndex),e=0<(0!==e&&c?e:0!==p?p:0!==q?q:b.series.index>a.series.index?-1:1);e&&(b=a);});return b},getPointFromEvent:function(a){a=a.target;for(var b;a&&!b;)b=a.point,a=a.parentNode;return b},getChartCoordinatesFromPoint:function(a,c){var b=a.series,f=b.xAxis,b=b.yAxis,d=
    x(a.clientX,a.plotX),e=a.shapeArgs;if(f&&b)return c?{chartX:f.len+f.pos-d,chartY:b.len+b.pos-a.plotY}:{chartX:d+f.pos,chartY:a.plotY+b.pos};if(e&&e.x&&e.y)return {chartX:e.x,chartY:e.y}},getHoverData:function(b,c,f,e,p,g,k){var q,m=[],n=k&&k.isBoosting;e=!(!e||!b);k=c&&!c.stickyTracking?[c]:a.grep(f,function(a){return a.visible&&!(!p&&a.directTouch)&&x(a.options.enableMouseTracking,!0)&&a.stickyTracking});c=(q=e?b:this.findNearestKDPoint(k,p,g))&&q.series;q&&(p&&!c.noSharedTooltip?(k=a.grep(f,function(a){return a.visible&&
    !(!p&&a.directTouch)&&x(a.options.enableMouseTracking,!0)&&!a.noSharedTooltip}),t(k,function(a){var b=l(a.points,function(a){return a.x===q.x&&!a.isNull});d(b)&&(n&&(b=a.getPoint(b)),m.push(b));})):m.push(q));return {hoverPoint:q,hoverSeries:c,hoverPoints:m}},runPointActions:function(b,c){var f=this.chart,d=f.tooltip&&f.tooltip.options.enabled?f.tooltip:void 0,e=d?d.shared:!1,p=c||f.hoverPoint,n=p&&p.series||f.hoverSeries,n=this.getHoverData(p,n,f.series,!!c||n&&n.directTouch&&this.isDirectTouch,e,
    b,{isBoosting:f.isBoosting}),g,p=n.hoverPoint;g=n.hoverPoints;c=(n=n.hoverSeries)&&n.tooltipOptions.followPointer;e=e&&n&&!n.noSharedTooltip;if(p&&(p!==f.hoverPoint||d&&d.isHidden)){t(f.hoverPoints||[],function(b){-1===a.inArray(b,g)&&b.setState();});t(g||[],function(a){a.setState("hover");});if(f.hoverSeries!==n)n.onMouseOver();f.hoverPoint&&f.hoverPoint.firePointEvent("mouseOut");if(!p.series)return;p.firePointEvent("mouseOver");f.hoverPoints=g;f.hoverPoint=p;d&&d.refresh(e?g:p,b);}else c&&d&&!d.isHidden&&
    (p=d.getAnchor([{}],b),d.updatePosition({plotX:p[0],plotY:p[1]}));this.unDocMouseMove||(this.unDocMouseMove=C(f.container.ownerDocument,"mousemove",function(b){var c=D[a.hoverChartIndex];if(c)c.pointer.onDocumentMouseMove(b);}));t(f.axes,function(c){var f=x(c.crosshair.snap,!0),d=f?a.find(g,function(a){return a.series[c.coll]===c}):void 0;d||!f?c.drawCrosshair(b,d):c.hideCrosshair();});},reset:function(a,c){var b=this.chart,f=b.hoverSeries,d=b.hoverPoint,e=b.hoverPoints,n=b.tooltip,g=n&&n.shared?e:d;
    a&&g&&t(p(g),function(b){b.series.isCartesian&&void 0===b.plotX&&(a=!1);});if(a)n&&g&&(n.refresh(g),d&&(d.setState(d.state,!0),t(b.axes,function(a){a.crosshair&&a.drawCrosshair(null,d);})));else{if(d)d.onMouseOut();e&&t(e,function(a){a.setState();});if(f)f.onMouseOut();n&&n.hide(c);this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove());t(b.axes,function(a){a.hideCrosshair();});this.hoverX=b.hoverPoints=b.hoverPoint=null;}},scaleGroups:function(a,c){var b=this.chart,f;t(b.series,function(d){f=
    a||d.getPlotBox();d.xAxis&&d.xAxis.zoomEnabled&&d.group&&(d.group.attr(f),d.markerGroup&&(d.markerGroup.attr(f),d.markerGroup.clip(c?b.clipRect:null)),d.dataLabelsGroup&&d.dataLabelsGroup.attr(f));});b.clipRect.attr(c||b.clipBox);},dragStart:function(a){var b=this.chart;b.mouseIsDown=a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=a.chartX;b.mouseDownY=this.mouseDownY=a.chartY;},drag:function(a){var b=this.chart,c=b.options.chart,f=a.chartX,d=a.chartY,e=this.zoomHor,p=this.zoomVert,g=b.plotLeft,
    m=b.plotTop,k=b.plotWidth,A=b.plotHeight,l,G=this.selectionMarker,h=this.mouseDownX,v=this.mouseDownY,t=c.panKey&&a[c.panKey+"Key"];G&&G.touch||(f<g?f=g:f>g+k&&(f=g+k),d<m?d=m:d>m+A&&(d=m+A),this.hasDragged=Math.sqrt(Math.pow(h-f,2)+Math.pow(v-d,2)),10<this.hasDragged&&(l=b.isInsidePlot(h-g,v-m),b.hasCartesianSeries&&(this.zoomX||this.zoomY)&&l&&!t&&!G&&(this.selectionMarker=G=b.renderer.rect(g,m,e?1:k,p?1:A,0).attr({fill:c.selectionMarkerFill||r("#335cad").setOpacity(.25).get(),"class":"highcharts-selection-marker",
    zIndex:7}).add()),G&&e&&(f-=h,G.attr({width:Math.abs(f),x:(0<f?0:f)+h})),G&&p&&(f=d-v,G.attr({height:Math.abs(f),y:(0<f?0:f)+v})),l&&!G&&c.panning&&b.pan(a,c.panning)));},drop:function(a){var b=this,f=this.chart,d=this.hasPinched;if(this.selectionMarker){var p={originalEvent:a,xAxis:[],yAxis:[]},k=this.selectionMarker,B=k.attr?k.attr("x"):k.x,l=k.attr?k.attr("y"):k.y,m=k.attr?k.attr("width"):k.width,E=k.attr?k.attr("height"):k.height,A;if(this.hasDragged||d)t(f.axes,function(c){if(c.zoomEnabled&&e(c.min)&&
    (d||b[{xAxis:"zoomX",yAxis:"zoomY"}[c.coll]])){var f=c.horiz,h="touchend"===a.type?c.minPixelPadding:0,g=c.toValue((f?B:l)+h),f=c.toValue((f?B+m:l+E)-h);p[c.coll].push({axis:c,min:Math.min(g,f),max:Math.max(g,f)});A=!0;}}),A&&u(f,"selection",p,function(a){f.zoom(w(a,d?{animation:!1}:null));});c(f.index)&&(this.selectionMarker=this.selectionMarker.destroy());d&&this.scaleGroups();}f&&c(f.index)&&(g(f.container,{cursor:f._cursor}),f.cancelClick=10<this.hasDragged,f.mouseIsDown=this.hasDragged=this.hasPinched=
    !1,this.pinchDown=[]);},onContainerMouseDown:function(a){a=this.normalize(a);2!==a.button&&(this.zoomOption(a),a.preventDefault&&a.preventDefault(),this.dragStart(a));},onDocumentMouseUp:function(b){D[a.hoverChartIndex]&&D[a.hoverChartIndex].pointer.drop(b);},onDocumentMouseMove:function(a){var b=this.chart,c=this.chartPosition;a=this.normalize(a,c);!c||this.inClass(a.target,"highcharts-tracker")||b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)||this.reset();},onContainerMouseLeave:function(b){var c=
    D[a.hoverChartIndex];c&&(b.relatedTarget||b.toElement)&&(c.pointer.reset(),c.pointer.chartPosition=null);},onContainerMouseMove:function(b){var c=this.chart;e(a.hoverChartIndex)&&D[a.hoverChartIndex]&&D[a.hoverChartIndex].mouseIsDown||(a.hoverChartIndex=c.index);b=this.normalize(b);b.returnValue=!1;"mousedown"===c.mouseIsDown&&this.drag(b);!this.inClass(b.target,"highcharts-tracker")&&!c.isInsidePlot(b.chartX-c.plotLeft,b.chartY-c.plotTop)||c.openMenu||this.runPointActions(b);},inClass:function(a,c){for(var b;a;){if(b=
    F(a,"class")){if(-1!==b.indexOf(c))return !0;if(-1!==b.indexOf("highcharts-container"))return !1}a=a.parentNode;}},onTrackerMouseOut:function(a){var b=this.chart.hoverSeries;a=a.relatedTarget||a.toElement;this.isDirectTouch=!1;if(!(!b||!a||b.stickyTracking||this.inClass(a,"highcharts-tooltip")||this.inClass(a,"highcharts-series-"+b.index)&&this.inClass(a,"highcharts-tracker")))b.onMouseOut();},onContainerClick:function(a){var b=this.chart,c=b.hoverPoint,f=b.plotLeft,d=b.plotTop;a=this.normalize(a);b.cancelClick||
    (c&&this.inClass(a.target,"highcharts-tracker")?(u(c.series,"click",w(a,{point:c})),b.hoverPoint&&c.firePointEvent("click",a)):(w(a,this.getCoordinates(a)),b.isInsidePlot(a.chartX-f,a.chartY-d)&&u(b,"click",a)));},setDOMEvents:function(){var b=this,c=b.chart.container,f=c.ownerDocument;c.onmousedown=function(a){b.onContainerMouseDown(a);};c.onmousemove=function(a){b.onContainerMouseMove(a);};c.onclick=function(a){b.onContainerClick(a);};this.unbindContainerMouseLeave=C(c,"mouseleave",b.onContainerMouseLeave);
    a.unbindDocumentMouseUp||(a.unbindDocumentMouseUp=C(f,"mouseup",b.onDocumentMouseUp));a.hasTouch&&(c.ontouchstart=function(a){b.onContainerTouchStart(a);},c.ontouchmove=function(a){b.onContainerTouchMove(a);},a.unbindDocumentTouchEnd||(a.unbindDocumentTouchEnd=C(f,"touchend",b.onDocumentTouchEnd)));},destroy:function(){var b=this;b.unDocMouseMove&&b.unDocMouseMove();this.unbindContainerMouseLeave();a.chartCount||(a.unbindDocumentMouseUp&&(a.unbindDocumentMouseUp=a.unbindDocumentMouseUp()),a.unbindDocumentTouchEnd&&
    (a.unbindDocumentTouchEnd=a.unbindDocumentTouchEnd()));clearInterval(b.tooltipTimeout);a.objectEach(b,function(a,c){b[c]=null;});}};})(K);(function(a){var C=a.charts,F=a.each,D=a.extend,r=a.map,g=a.noop,e=a.pick;D(a.Pointer.prototype,{pinchTranslate:function(a,e,g,r,c,d){this.zoomHor&&this.pinchTranslateDirection(!0,a,e,g,r,c,d);this.zoomVert&&this.pinchTranslateDirection(!1,a,e,g,r,c,d);},pinchTranslateDirection:function(a,e,g,r,c,d,k,x){var p=this.chart,f=a?"x":"y",b=a?"X":"Y",n="chart"+b,l=a?"width":
    "height",t=p["plot"+(a?"Left":"Top")],q,u,B=x||1,H=p.inverted,m=p.bounds[a?"h":"v"],E=1===e.length,A=e[0][n],M=g[0][n],G=!E&&e[1][n],h=!E&&g[1][n],v;g=function(){!E&&20<Math.abs(A-G)&&(B=x||Math.abs(M-h)/Math.abs(A-G));u=(t-M)/B+A;q=p["plot"+(a?"Width":"Height")]/B;};g();e=u;e<m.min?(e=m.min,v=!0):e+q>m.max&&(e=m.max-q,v=!0);v?(M-=.8*(M-k[f][0]),E||(h-=.8*(h-k[f][1])),g()):k[f]=[M,h];H||(d[f]=u-t,d[l]=q);d=H?1/B:B;c[l]=q;c[f]=e;r[H?a?"scaleY":"scaleX":"scale"+b]=B;r["translate"+b]=d*t+(M-d*A);},pinch:function(a){var t=
    this,l=t.chart,u=t.pinchDown,c=a.touches,d=c.length,k=t.lastValidTouch,x=t.hasZoom,p=t.selectionMarker,f={},b=1===d&&(t.inClass(a.target,"highcharts-tracker")&&l.runTrackerClick||t.runChartClick),n={};1<d&&(t.initiated=!0);x&&t.initiated&&!b&&a.preventDefault();r(c,function(a){return t.normalize(a)});"touchstart"===a.type?(F(c,function(a,b){u[b]={chartX:a.chartX,chartY:a.chartY};}),k.x=[u[0].chartX,u[1]&&u[1].chartX],k.y=[u[0].chartY,u[1]&&u[1].chartY],F(l.axes,function(a){if(a.zoomEnabled){var b=
    l.bounds[a.horiz?"h":"v"],c=a.minPixelPadding,f=a.toPixels(e(a.options.min,a.dataMin)),d=a.toPixels(e(a.options.max,a.dataMax)),p=Math.max(f,d);b.min=Math.min(a.pos,Math.min(f,d)-c);b.max=Math.max(a.pos+a.len,p+c);}}),t.res=!0):t.followTouchMove&&1===d?this.runPointActions(t.normalize(a)):u.length&&(p||(t.selectionMarker=p=D({destroy:g,touch:!0},l.plotBox)),t.pinchTranslate(u,c,f,p,n,k),t.hasPinched=x,t.scaleGroups(f,n),t.res&&(t.res=!1,this.reset(!1,0)));},touch:function(g,r){var l=this.chart,t,c;
    if(l.index!==a.hoverChartIndex)this.onContainerMouseLeave({relatedTarget:!0});a.hoverChartIndex=l.index;1===g.touches.length?(g=this.normalize(g),(c=l.isInsidePlot(g.chartX-l.plotLeft,g.chartY-l.plotTop))&&!l.openMenu?(r&&this.runPointActions(g),"touchmove"===g.type&&(r=this.pinchDown,t=r[0]?4<=Math.sqrt(Math.pow(r[0].chartX-g.chartX,2)+Math.pow(r[0].chartY-g.chartY,2)):!1),e(t,!0)&&this.pinch(g)):r&&this.reset()):2===g.touches.length&&this.pinch(g);},onContainerTouchStart:function(a){this.zoomOption(a);
    this.touch(a,!0);},onContainerTouchMove:function(a){this.touch(a);},onDocumentTouchEnd:function(e){C[a.hoverChartIndex]&&C[a.hoverChartIndex].pointer.drop(e);}});})(K);(function(a){var C=a.addEvent,F=a.charts,D=a.css,r=a.doc,g=a.extend,e=a.noop,t=a.Pointer,w=a.removeEvent,l=a.win,u=a.wrap;if(!a.hasTouch&&(l.PointerEvent||l.MSPointerEvent)){var c={},d=!!l.PointerEvent,k=function(){var d=[];d.item=function(a){return this[a]};a.objectEach(c,function(a){d.push({pageX:a.pageX,pageY:a.pageY,target:a.target});});
    return d},x=function(c,f,b,d){"touch"!==c.pointerType&&c.pointerType!==c.MSPOINTER_TYPE_TOUCH||!F[a.hoverChartIndex]||(d(c),d=F[a.hoverChartIndex].pointer,d[f]({type:b,target:c.currentTarget,preventDefault:e,touches:k()}));};g(t.prototype,{onContainerPointerDown:function(a){x(a,"onContainerTouchStart","touchstart",function(a){c[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget};});},onContainerPointerMove:function(a){x(a,"onContainerTouchMove","touchmove",function(a){c[a.pointerId]={pageX:a.pageX,
    pageY:a.pageY};c[a.pointerId].target||(c[a.pointerId].target=a.currentTarget);});},onDocumentPointerUp:function(a){x(a,"onDocumentTouchEnd","touchend",function(a){delete c[a.pointerId];});},batchMSEvents:function(a){a(this.chart.container,d?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,d?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(r,d?"pointerup":"MSPointerUp",this.onDocumentPointerUp);}});u(t.prototype,"init",function(a,c,b){a.call(this,c,b);this.hasZoom&&
    D(c.container,{"-ms-touch-action":"none","touch-action":"none"});});u(t.prototype,"setDOMEvents",function(a){a.apply(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(C);});u(t.prototype,"destroy",function(a){this.batchMSEvents(w);a.call(this);});}})(K);(function(a){var C=a.addEvent,F=a.css,D=a.discardElement,r=a.defined,g=a.each,e=a.fireEvent,t=a.isFirefox,w=a.marginNames,l=a.merge,u=a.pick,c=a.setAnimation,d=a.stableSort,k=a.win,x=a.wrap;a.Legend=function(a,c){this.init(a,c);};a.Legend.prototype=
    {init:function(a,c){this.chart=a;this.setOptions(c);c.enabled&&(this.render(),C(this.chart,"endResize",function(){this.legend.positionCheckboxes();}));},setOptions:function(a){var c=u(a.padding,8);this.options=a;this.itemStyle=a.itemStyle;this.itemHiddenStyle=l(this.itemStyle,a.itemHiddenStyle);this.itemMarginTop=a.itemMarginTop||0;this.padding=c;this.initialItemY=c-5;this.symbolWidth=u(a.symbolWidth,16);this.pages=[];},update:function(a,c){var b=this.chart;this.setOptions(l(!0,this.options,a));this.destroy();
    b.isDirtyLegend=b.isDirtyBox=!0;u(c,!0)&&b.redraw();e(this,"afterUpdate");},colorizeItem:function(a,c){a.legendGroup[c?"removeClass":"addClass"]("highcharts-legend-item-hidden");var b=this.options,f=a.legendItem,d=a.legendLine,g=a.legendSymbol,p=this.itemHiddenStyle.color,b=c?b.itemStyle.color:p,k=c?a.color||p:p,B=a.options&&a.options.marker,l={fill:k};f&&f.css({fill:b,color:b});d&&d.attr({stroke:k});g&&(B&&g.isMarker&&(l=a.pointAttribs(),c||(l.stroke=l.fill=p)),g.attr(l));e(this,"afterColorizeItem",
    {item:a,visible:c});},positionItem:function(a){var c=this.options,b=c.symbolPadding,c=!c.rtl,d=a._legendItemPos,e=d[0],d=d[1],g=a.checkbox;(a=a.legendGroup)&&a.element&&a.translate(c?e:this.legendWidth-e-2*b-4,d);g&&(g.x=e,g.y=d);},destroyItem:function(a){var c=a.checkbox;g(["legendItem","legendLine","legendSymbol","legendGroup"],function(b){a[b]&&(a[b]=a[b].destroy());});c&&D(a.checkbox);},destroy:function(){function a(a){this[a]&&(this[a]=this[a].destroy());}g(this.getAllItems(),function(c){g(["legendItem",
    "legendGroup"],a,c);});g("clipRect up down pager nav box title group".split(" "),a,this);this.display=null;},positionCheckboxes:function(){var a=this.group&&this.group.alignAttr,c,b=this.clipHeight||this.legendHeight,d=this.titleHeight;a&&(c=a.translateY,g(this.allItems,function(f){var e=f.checkbox,g;e&&(g=c+d+e.y+(this.scrollOffset||0)+3,F(e,{left:a.translateX+f.checkboxOffset+e.x-20+"px",top:g+"px",display:g>c-6&&g<c+b-6?"":"none"}));},this));},renderTitle:function(){var a=this.options,c=this.padding,
    b=a.title,d=0;b.text&&(this.title||(this.title=this.chart.renderer.label(b.text,c-3,c-4,null,null,null,a.useHTML,null,"legend-title").attr({zIndex:1}).css(b.style).add(this.group)),a=this.title.getBBox(),d=a.height,this.offsetWidth=a.width,this.contentGroup.attr({translateY:d}));this.titleHeight=d;},setText:function(c){var d=this.options;c.legendItem.attr({text:d.labelFormat?a.format(d.labelFormat,c,this.chart.time):d.labelFormatter.call(c)});},renderItem:function(a){var c=this.chart,b=c.renderer,d=
    this.options,e=this.symbolWidth,g=d.symbolPadding,q=this.itemStyle,k=this.itemHiddenStyle,p="horizontal"===d.layout?u(d.itemDistance,20):0,t=!d.rtl,m=a.legendItem,E=!a.series,A=!E&&a.series.drawLegendSymbol?a.series:a,x=A.options,x=this.createCheckboxForItem&&x&&x.showCheckbox,p=e+g+p+(x?20:0),G=d.useHTML,h=a.options.className;m||(a.legendGroup=b.g("legend-item").addClass("highcharts-"+A.type+"-series highcharts-color-"+a.colorIndex+(h?" "+h:"")+(E?" highcharts-series-"+a.index:"")).attr({zIndex:1}).add(this.scrollGroup),
    a.legendItem=m=b.text("",t?e+g:-g,this.baseline||0,G).css(l(a.visible?q:k)).attr({align:t?"left":"right",zIndex:2}).add(a.legendGroup),this.baseline||(e=q.fontSize,this.fontMetrics=b.fontMetrics(e,m),this.baseline=this.fontMetrics.f+3+this.itemMarginTop,m.attr("y",this.baseline)),this.symbolHeight=d.symbolHeight||this.fontMetrics.f,A.drawLegendSymbol(this,a),this.setItemEvents&&this.setItemEvents(a,m,G),x&&this.createCheckboxForItem(a));this.colorizeItem(a,a.visible);q.width||m.css({width:(d.itemWidth||
    d.width||c.spacingBox.width)-p});this.setText(a);c=m.getBBox();a.itemWidth=a.checkboxOffset=d.itemWidth||a.legendItemWidth||c.width+p;this.maxItemWidth=Math.max(this.maxItemWidth,a.itemWidth);this.totalItemWidth+=a.itemWidth;this.itemHeight=a.itemHeight=Math.round(a.legendItemHeight||c.height||this.symbolHeight);},layoutItem:function(a){var c=this.options,b=this.padding,d="horizontal"===c.layout,e=a.itemHeight,g=c.itemMarginBottom||0,q=this.itemMarginTop,k=d?u(c.itemDistance,20):0,p=c.width,l=p||this.chart.spacingBox.width-
    2*b-c.x,c=c.alignColumns&&this.totalItemWidth>l?this.maxItemWidth:a.itemWidth;d&&this.itemX-b+c>l&&(this.itemX=b,this.itemY+=q+this.lastLineHeight+g,this.lastLineHeight=0);this.lastItemY=q+this.itemY+g;this.lastLineHeight=Math.max(e,this.lastLineHeight);a._legendItemPos=[this.itemX,this.itemY];d?this.itemX+=c:(this.itemY+=q+e+g,this.lastLineHeight=e);this.offsetWidth=p||Math.max((d?this.itemX-b-(a.checkbox?0:k):c)+b,this.offsetWidth);},getAllItems:function(){var a=[];g(this.chart.series,function(c){var b=
    c&&c.options;c&&u(b.showInLegend,r(b.linkedTo)?!1:void 0,!0)&&(a=a.concat(c.legendItems||("point"===b.legendType?c.data:c)));});e(this,"afterGetAllItems",{allItems:a});return a},getAlignment:function(){var a=this.options;return a.floating?"":a.align.charAt(0)+a.verticalAlign.charAt(0)+a.layout.charAt(0)},adjustMargins:function(a,c){var b=this.chart,d=this.options,f=this.getAlignment();f&&g([/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/],function(e,g){e.test(f)&&!r(a[g])&&(b[w[g]]=Math.max(b[w[g]],
    b.legend[(g+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][g]*d[g%2?"x":"y"]+u(d.margin,12)+c[g]+(0===g&&void 0!==b.options.title.margin?b.titleOffset+b.options.title.margin:0)));});},render:function(){var a=this.chart,c=a.renderer,b=this.group,e,k,x,q,t=this.box,B=this.options,r=this.padding;this.itemX=r;this.itemY=this.initialItemY;this.lastItemY=this.offsetWidth=0;b||(this.group=b=c.g("legend").attr({zIndex:7}).add(),this.contentGroup=c.g().attr({zIndex:1}).add(b),this.scrollGroup=c.g().add(this.contentGroup));
    this.renderTitle();e=this.getAllItems();d(e,function(a,b){return (a.options&&a.options.legendIndex||0)-(b.options&&b.options.legendIndex||0)});B.reversed&&e.reverse();this.allItems=e;this.display=k=!!e.length;this.itemHeight=this.totalItemWidth=this.maxItemWidth=this.lastLineHeight=0;g(e,this.renderItem,this);g(e,this.layoutItem,this);x=(B.width||this.offsetWidth)+r;q=this.lastItemY+this.lastLineHeight+this.titleHeight;q=this.handleOverflow(q);q+=r;t||(this.box=t=c.rect().addClass("highcharts-legend-box").attr({r:B.borderRadius}).add(b),
    t.isNew=!0);t.attr({stroke:B.borderColor,"stroke-width":B.borderWidth||0,fill:B.backgroundColor||"none"}).shadow(B.shadow);0<x&&0<q&&(t[t.isNew?"attr":"animate"](t.crisp.call({},{x:0,y:0,width:x,height:q},t.strokeWidth())),t.isNew=!1);t[k?"show":"hide"]();this.legendWidth=x;this.legendHeight=q;g(e,this.positionItem,this);k&&(c=a.spacingBox,/(lth|ct|rth)/.test(this.getAlignment())&&(c=l(c,{y:c.y+a.titleOffset+a.options.title.margin})),b.align(l(B,{width:x,height:q}),!0,c));a.isResizing||this.positionCheckboxes();},
    handleOverflow:function(a){var c=this,b=this.chart,d=b.renderer,e=this.options,k=e.y,q=this.padding,b=b.spacingBox.height+("top"===e.verticalAlign?-k:k)-q,k=e.maxHeight,p,l=this.clipRect,t=e.navigation,m=u(t.animation,!0),E=t.arrowSize||12,A=this.nav,x=this.pages,G,h=this.allItems,v=function(a){"number"===typeof a?l.attr({height:a}):l&&(c.clipRect=l.destroy(),c.contentGroup.clip());c.contentGroup.div&&(c.contentGroup.div.style.clip=a?"rect("+q+"px,9999px,"+(q+a)+"px,0)":"auto");};"horizontal"!==e.layout||
    "middle"===e.verticalAlign||e.floating||(b/=2);k&&(b=Math.min(b,k));x.length=0;a>b&&!1!==t.enabled?(this.clipHeight=p=Math.max(b-20-this.titleHeight-q,0),this.currentPage=u(this.currentPage,1),this.fullHeight=a,g(h,function(a,b){var c=a._legendItemPos[1],d=Math.round(a.legendItem.getBBox().height),f=x.length;if(!f||c-x[f-1]>p&&(G||c)!==x[f-1])x.push(G||c),f++;a.pageIx=f-1;G&&(h[b-1].pageIx=f-1);b===h.length-1&&c+d-x[f-1]>p&&(x.push(c),a.pageIx=f);c!==G&&(G=c);}),l||(l=c.clipRect=d.clipRect(0,q,9999,
    0),c.contentGroup.clip(l)),v(p),A||(this.nav=A=d.g().attr({zIndex:1}).add(this.group),this.up=d.symbol("triangle",0,0,E,E).on("click",function(){c.scroll(-1,m);}).add(A),this.pager=d.text("",15,10).addClass("highcharts-legend-navigation").css(t.style).add(A),this.down=d.symbol("triangle-down",0,0,E,E).on("click",function(){c.scroll(1,m);}).add(A)),c.scroll(0),a=b):A&&(v(),this.nav=A.destroy(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0);return a},scroll:function(a,d){var b=this.pages,f=
    b.length;a=this.currentPage+a;var e=this.clipHeight,g=this.options.navigation,k=this.pager,p=this.padding;a>f&&(a=f);0<a&&(void 0!==d&&c(d,this.chart),this.nav.attr({translateX:p,translateY:e+this.padding+7+this.titleHeight,visibility:"visible"}),this.up.attr({"class":1===a?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),k.attr({text:a+"/"+f}),this.down.attr({x:18+this.pager.getBBox().width,"class":a===f?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),this.up.attr({fill:1===
    a?g.inactiveColor:g.activeColor}).css({cursor:1===a?"default":"pointer"}),this.down.attr({fill:a===f?g.inactiveColor:g.activeColor}).css({cursor:a===f?"default":"pointer"}),this.scrollOffset=-b[a-1]+this.initialItemY,this.scrollGroup.animate({translateY:this.scrollOffset}),this.currentPage=a,this.positionCheckboxes());}};a.LegendSymbolMixin={drawRectangle:function(a,c){var b=a.symbolHeight,d=a.options.squareSymbol;c.legendSymbol=this.chart.renderer.rect(d?(a.symbolWidth-b)/2:0,a.baseline-b+1,d?b:a.symbolWidth,
    b,u(a.options.symbolRadius,b/2)).addClass("highcharts-point").attr({zIndex:3}).add(c.legendGroup);},drawLineMarker:function(a){var c=this.options,b=c.marker,d=a.symbolWidth,e=a.symbolHeight,g=e/2,k=this.chart.renderer,p=this.legendGroup;a=a.baseline-Math.round(.3*a.fontMetrics.b);var B;B={"stroke-width":c.lineWidth||0};c.dashStyle&&(B.dashstyle=c.dashStyle);this.legendLine=k.path(["M",0,a,"L",d,a]).addClass("highcharts-graph").attr(B).add(p);b&&!1!==b.enabled&&(c=Math.min(u(b.radius,g),g),0===this.symbol.indexOf("url")&&
    (b=l(b,{width:e,height:e}),c=0),this.legendSymbol=b=k.symbol(this.symbol,d/2-c,a-c,2*c,2*c,b).addClass("highcharts-point").add(p),b.isMarker=!0);}};(/Trident\/7\.0/.test(k.navigator.userAgent)||t)&&x(a.Legend.prototype,"positionItem",function(a,c){var b=this,d=function(){c._legendItemPos&&a.call(b,c);};d();setTimeout(d);});})(K);(function(a){var C=a.addEvent,F=a.animate,D=a.animObject,r=a.attr,g=a.doc,e=a.Axis,t=a.createElement,w=a.defaultOptions,l=a.discardElement,u=a.charts,c=a.css,d=a.defined,k=a.each,
    x=a.extend,p=a.find,f=a.fireEvent,b=a.grep,n=a.isNumber,z=a.isObject,J=a.isString,q=a.Legend,L=a.marginNames,B=a.merge,H=a.objectEach,m=a.Pointer,E=a.pick,A=a.pInt,M=a.removeEvent,G=a.seriesTypes,h=a.splat,v=a.syncTimeout,Q=a.win,P=a.Chart=function(){this.getArgs.apply(this,arguments);};a.chart=function(a,b,c){return new P(a,b,c)};x(P.prototype,{callbacks:[],getArgs:function(){var a=[].slice.call(arguments);if(J(a[0])||a[0].nodeName)this.renderTo=a.shift();this.init(a[0],a[1]);},init:function(b,c){var d,
    h,m=b.series,e=b.plotOptions||{};f(this,"init",{args:arguments},function(){b.series=null;d=B(w,b);for(h in d.plotOptions)d.plotOptions[h].tooltip=e[h]&&B(e[h].tooltip)||void 0;d.tooltip.userOptions=b.chart&&b.chart.forExport&&b.tooltip.userOptions||b.tooltip;d.series=b.series=m;this.userOptions=b;var g=d.chart,k=g.events;this.margin=[];this.spacing=[];this.bounds={h:{},v:{}};this.labelCollectors=[];this.callback=c;this.isResizing=0;this.options=d;this.axes=[];this.series=[];this.time=b.time&&a.keys(b.time).length?
    new a.Time(b.time):a.time;this.hasCartesianSeries=g.showAxes;var A=this;A.index=u.length;u.push(A);a.chartCount++;k&&H(k,function(a,b){C(A,b,a);});A.xAxis=[];A.yAxis=[];A.pointCount=A.colorCounter=A.symbolCounter=0;f(A,"afterInit");A.firstRender();});},initSeries:function(b){var c=this.options.chart;(c=G[b.type||c.type||c.defaultSeriesType])||a.error(17,!0);c=new c;c.init(this,b);return c},orderSeries:function(a){var b=this.series;for(a=a||0;a<b.length;a++)b[a]&&(b[a].index=a,b[a].name=b[a].getName());},
    isInsidePlot:function(a,b,c){var d=c?b:a;a=c?a:b;return 0<=d&&d<=this.plotWidth&&0<=a&&a<=this.plotHeight},redraw:function(b){f(this,"beforeRedraw");var c=this.axes,d=this.series,h=this.pointer,m=this.legend,e=this.isDirtyLegend,g,A,q=this.hasCartesianSeries,p=this.isDirtyBox,E,v=this.renderer,n=v.isHidden(),l=[];this.setResponsive&&this.setResponsive(!1);a.setAnimation(b,this);n&&this.temporaryDisplay();this.layOutTitles();for(b=d.length;b--;)if(E=d[b],E.options.stacking&&(g=!0,E.isDirty)){A=!0;
    break}if(A)for(b=d.length;b--;)E=d[b],E.options.stacking&&(E.isDirty=!0);k(d,function(a){a.isDirty&&"point"===a.options.legendType&&(a.updateTotals&&a.updateTotals(),e=!0);a.isDirtyData&&f(a,"updatedData");});e&&m.options.enabled&&(m.render(),this.isDirtyLegend=!1);g&&this.getStacks();q&&k(c,function(a){a.updateNames();a.setScale();});this.getMargins();q&&(k(c,function(a){a.isDirty&&(p=!0);}),k(c,function(a){var b=a.min+","+a.max;a.extKey!==b&&(a.extKey=b,l.push(function(){f(a,"afterSetExtremes",x(a.eventArgs,
    a.getExtremes()));delete a.eventArgs;}));(p||g)&&a.redraw();}));p&&this.drawChartBox();f(this,"predraw");k(d,function(a){(p||a.isDirty)&&a.visible&&a.redraw();a.isDirtyData=!1;});h&&h.reset(!0);v.draw();f(this,"redraw");f(this,"render");n&&this.temporaryDisplay(!0);k(l,function(a){a.call();});},get:function(a){function b(b){return b.id===a||b.options&&b.options.id===a}var c,d=this.series,f;c=p(this.axes,b)||p(this.series,b);for(f=0;!c&&f<d.length;f++)c=p(d[f].points||[],b);return c},getAxes:function(){var a=
    this,b=this.options,c=b.xAxis=h(b.xAxis||{}),b=b.yAxis=h(b.yAxis||{});f(this,"getAxes");k(c,function(a,b){a.index=b;a.isX=!0;});k(b,function(a,b){a.index=b;});c=c.concat(b);k(c,function(b){new e(a,b);});f(this,"afterGetAxes");},getSelectedPoints:function(){var a=[];k(this.series,function(c){a=a.concat(b(c.data||[],function(a){return a.selected}));});return a},getSelectedSeries:function(){return b(this.series,function(a){return a.selected})},setTitle:function(a,b,c){var d=this,f=d.options,h;h=f.title=B({style:{color:"#333333",
    fontSize:f.isStock?"16px":"18px"}},f.title,a);f=f.subtitle=B({style:{color:"#666666"}},f.subtitle,b);k([["title",a,h],["subtitle",b,f]],function(a,b){var c=a[0],f=d[c],h=a[1];a=a[2];f&&h&&(d[c]=f=f.destroy());a&&!f&&(d[c]=d.renderer.text(a.text,0,0,a.useHTML).attr({align:a.align,"class":"highcharts-"+c,zIndex:a.zIndex||4}).add(),d[c].update=function(a){d.setTitle(!b&&a,b&&a);},d[c].css(a.style));});d.layOutTitles(c);},layOutTitles:function(a){var b=0,c,d=this.renderer,f=this.spacingBox;k(["title","subtitle"],
    function(a){var c=this[a],h=this.options[a];a="title"===a?-3:h.verticalAlign?0:b+2;var m;c&&(m=h.style.fontSize,m=d.fontMetrics(m,c).b,c.css({width:(h.width||f.width+h.widthAdjust)+"px"}).align(x({y:a+m},h),!1,"spacingBox"),h.floating||h.verticalAlign||(b=Math.ceil(b+c.getBBox(h.useHTML).height)));},this);c=this.titleOffset!==b;this.titleOffset=b;!this.isDirtyBox&&c&&(this.isDirtyBox=this.isDirtyLegend=c,this.hasRendered&&E(a,!0)&&this.isDirtyBox&&this.redraw());},getChartSize:function(){var b=this.options.chart,
    c=b.width,b=b.height,f=this.renderTo;d(c)||(this.containerWidth=a.getStyle(f,"width"));d(b)||(this.containerHeight=a.getStyle(f,"height"));this.chartWidth=Math.max(0,c||this.containerWidth||600);this.chartHeight=Math.max(0,a.relativeLength(b,this.chartWidth)||(1<this.containerHeight?this.containerHeight:400));},temporaryDisplay:function(b){var c=this.renderTo;if(b)for(;c&&c.style;)c.hcOrigStyle&&(a.css(c,c.hcOrigStyle),delete c.hcOrigStyle),c.hcOrigDetached&&(g.body.removeChild(c),c.hcOrigDetached=
    !1),c=c.parentNode;else for(;c&&c.style;){g.body.contains(c)||c.parentNode||(c.hcOrigDetached=!0,g.body.appendChild(c));if("none"===a.getStyle(c,"display",!1)||c.hcOricDetached)c.hcOrigStyle={display:c.style.display,height:c.style.height,overflow:c.style.overflow},b={display:"block",overflow:"hidden"},c!==this.renderTo&&(b.height=0),a.css(c,b),c.offsetWidth||c.style.setProperty("display","block","important");c=c.parentNode;if(c===g.body)break}},setClassName:function(a){this.container.className="highcharts-container "+
    (a||"");},getContainer:function(){var b,c=this.options,d=c.chart,h,m;b=this.renderTo;var e=a.uniqueKey(),k;b||(this.renderTo=b=d.renderTo);J(b)&&(this.renderTo=b=g.getElementById(b));b||a.error(13,!0);h=A(r(b,"data-highcharts-chart"));n(h)&&u[h]&&u[h].hasRendered&&u[h].destroy();r(b,"data-highcharts-chart",this.index);b.innerHTML="";d.skipClone||b.offsetWidth||this.temporaryDisplay();this.getChartSize();h=this.chartWidth;m=this.chartHeight;k=x({position:"relative",overflow:"hidden",width:h+"px",height:m+
    "px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},d.style);this.container=b=t("div",{id:e},k,b);this._cursor=b.style.cursor;this.renderer=new (a[d.renderer]||a.Renderer)(b,h,m,null,d.forExport,c.exporting&&c.exporting.allowHTML);this.setClassName(d.className);this.renderer.setStyle(d.style);this.renderer.chartIndex=this.index;f(this,"afterGetContainer");},getMargins:function(a){var b=this.spacing,c=this.margin,f=this.titleOffset;this.resetMargins();f&&
    !d(c[0])&&(this.plotTop=Math.max(this.plotTop,f+this.options.title.margin+b[0]));this.legend&&this.legend.display&&this.legend.adjustMargins(c,b);this.extraMargin&&(this[this.extraMargin.type]=(this[this.extraMargin.type]||0)+this.extraMargin.value);this.adjustPlotArea&&this.adjustPlotArea();a||this.getAxisMargins();},getAxisMargins:function(){var a=this,b=a.axisOffset=[0,0,0,0],c=a.margin;a.hasCartesianSeries&&k(a.axes,function(a){a.visible&&a.getOffset();});k(L,function(f,h){d(c[h])||(a[f]+=b[h]);});
    a.setChartSize();},reflow:function(b){var c=this,f=c.options.chart,h=c.renderTo,m=d(f.width)&&d(f.height),e=f.width||a.getStyle(h,"width"),f=f.height||a.getStyle(h,"height"),h=b?b.target:Q;if(!m&&!c.isPrinting&&e&&f&&(h===Q||h===g)){if(e!==c.containerWidth||f!==c.containerHeight)a.clearTimeout(c.reflowTimeout),c.reflowTimeout=v(function(){c.container&&c.setSize(void 0,void 0,!1);},b?100:0);c.containerWidth=e;c.containerHeight=f;}},setReflow:function(a){var b=this;!1===a||this.unbindReflow?!1===a&&this.unbindReflow&&
    (this.unbindReflow=this.unbindReflow()):(this.unbindReflow=C(Q,"resize",function(a){b.reflow(a);}),C(this,"destroy",this.unbindReflow));},setSize:function(b,d,h){var m=this,e=m.renderer;m.isResizing+=1;a.setAnimation(h,m);m.oldChartHeight=m.chartHeight;m.oldChartWidth=m.chartWidth;void 0!==b&&(m.options.chart.width=b);void 0!==d&&(m.options.chart.height=d);m.getChartSize();b=e.globalAnimation;(b?F:c)(m.container,{width:m.chartWidth+"px",height:m.chartHeight+"px"},b);m.setChartSize(!0);e.setSize(m.chartWidth,
    m.chartHeight,h);k(m.axes,function(a){a.isDirty=!0;a.setScale();});m.isDirtyLegend=!0;m.isDirtyBox=!0;m.layOutTitles();m.getMargins();m.redraw(h);m.oldChartHeight=null;f(m,"resize");v(function(){m&&f(m,"endResize",null,function(){--m.isResizing;});},D(b).duration);},setChartSize:function(a){var b=this.inverted,c=this.renderer,d=this.chartWidth,h=this.chartHeight,m=this.options.chart,e=this.spacing,g=this.clipOffset,A,q,p,E;this.plotLeft=A=Math.round(this.plotLeft);this.plotTop=q=Math.round(this.plotTop);
    this.plotWidth=p=Math.max(0,Math.round(d-A-this.marginRight));this.plotHeight=E=Math.max(0,Math.round(h-q-this.marginBottom));this.plotSizeX=b?E:p;this.plotSizeY=b?p:E;this.plotBorderWidth=m.plotBorderWidth||0;this.spacingBox=c.spacingBox={x:e[3],y:e[0],width:d-e[3]-e[1],height:h-e[0]-e[2]};this.plotBox=c.plotBox={x:A,y:q,width:p,height:E};d=2*Math.floor(this.plotBorderWidth/2);b=Math.ceil(Math.max(d,g[3])/2);c=Math.ceil(Math.max(d,g[0])/2);this.clipBox={x:b,y:c,width:Math.floor(this.plotSizeX-Math.max(d,
    g[1])/2-b),height:Math.max(0,Math.floor(this.plotSizeY-Math.max(d,g[2])/2-c))};a||k(this.axes,function(a){a.setAxisSize();a.setAxisTranslation();});f(this,"afterSetChartSize",{skipAxes:a});},resetMargins:function(){var a=this,b=a.options.chart;k(["margin","spacing"],function(c){var d=b[c],f=z(d)?d:[d,d,d,d];k(["Top","Right","Bottom","Left"],function(d,h){a[c][h]=E(b[c+d],f[h]);});});k(L,function(b,c){a[b]=E(a.margin[c],a.spacing[c]);});a.axisOffset=[0,0,0,0];a.clipOffset=[0,0,0,0];},drawChartBox:function(){var a=
    this.options.chart,b=this.renderer,c=this.chartWidth,d=this.chartHeight,h=this.chartBackground,m=this.plotBackground,e=this.plotBorder,g,A=this.plotBGImage,k=a.backgroundColor,q=a.plotBackgroundColor,p=a.plotBackgroundImage,E,v=this.plotLeft,n=this.plotTop,l=this.plotWidth,G=this.plotHeight,B=this.plotBox,x=this.clipRect,t=this.clipBox,r="animate";h||(this.chartBackground=h=b.rect().addClass("highcharts-background").add(),r="attr");g=a.borderWidth||0;E=g+(a.shadow?8:0);k={fill:k||"none"};if(g||h["stroke-width"])k.stroke=
    a.borderColor,k["stroke-width"]=g;h.attr(k).shadow(a.shadow);h[r]({x:E/2,y:E/2,width:c-E-g%2,height:d-E-g%2,r:a.borderRadius});r="animate";m||(r="attr",this.plotBackground=m=b.rect().addClass("highcharts-plot-background").add());m[r](B);m.attr({fill:q||"none"}).shadow(a.plotShadow);p&&(A?A.animate(B):this.plotBGImage=b.image(p,v,n,l,G).add());x?x.animate({width:t.width,height:t.height}):this.clipRect=b.clipRect(t);r="animate";e||(r="attr",this.plotBorder=e=b.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());
    e.attr({stroke:a.plotBorderColor,"stroke-width":a.plotBorderWidth||0,fill:"none"});e[r](e.crisp({x:v,y:n,width:l,height:G},-e.strokeWidth()));this.isDirtyBox=!1;f(this,"afterDrawChartBox");},propFromSeries:function(){var a=this,b=a.options.chart,c,d=a.options.series,f,h;k(["inverted","angular","polar"],function(m){c=G[b.type||b.defaultSeriesType];h=b[m]||c&&c.prototype[m];for(f=d&&d.length;!h&&f--;)(c=G[d[f].type])&&c.prototype[m]&&(h=!0);a[m]=h;});},linkSeries:function(){var a=this,b=a.series;k(b,function(a){a.linkedSeries.length=
    0;});k(b,function(b){var c=b.options.linkedTo;J(c)&&(c=":previous"===c?a.series[b.index-1]:a.get(c))&&c.linkedParent!==b&&(c.linkedSeries.push(b),b.linkedParent=c,b.visible=E(b.options.visible,c.options.visible,b.visible));});f(this,"afterLinkSeries");},renderSeries:function(){k(this.series,function(a){a.translate();a.render();});},renderLabels:function(){var a=this,b=a.options.labels;b.items&&k(b.items,function(c){var d=x(b.style,c.style),f=A(d.left)+a.plotLeft,h=A(d.top)+a.plotTop+12;delete d.left;delete d.top;
    a.renderer.text(c.html,f,h).attr({zIndex:2}).css(d).add();});},render:function(){var a=this.axes,b=this.renderer,c=this.options,d,f,h;this.setTitle();this.legend=new q(this,c.legend);this.getStacks&&this.getStacks();this.getMargins(!0);this.setChartSize();c=this.plotWidth;d=this.plotHeight=Math.max(this.plotHeight-21,0);k(a,function(a){a.setScale();});this.getAxisMargins();f=1.1<c/this.plotWidth;h=1.05<d/this.plotHeight;if(f||h)k(a,function(a){(a.horiz&&f||!a.horiz&&h)&&a.setTickInterval(!0);}),this.getMargins();
    this.drawChartBox();this.hasCartesianSeries&&k(a,function(a){a.visible&&a.render();});this.seriesGroup||(this.seriesGroup=b.g("series-group").attr({zIndex:3}).add());this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive&&this.setResponsive();this.hasRendered=!0;},addCredits:function(a){var b=this;a=B(!0,this.options.credits,a);a.enabled&&!this.credits&&(this.credits=this.renderer.text(a.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",function(){a.href&&
    (Q.location.href=a.href);}).attr({align:a.position.align,zIndex:8}).css(a.style).add().align(a.position),this.credits.update=function(a){b.credits=b.credits.destroy();b.addCredits(a);});},destroy:function(){var b=this,c=b.axes,d=b.series,h=b.container,m,e=h&&h.parentNode;f(b,"destroy");b.renderer.forExport?a.erase(u,b):u[b.index]=void 0;a.chartCount--;b.renderTo.removeAttribute("data-highcharts-chart");M(b);for(m=c.length;m--;)c[m]=c[m].destroy();this.scroller&&this.scroller.destroy&&this.scroller.destroy();
    for(m=d.length;m--;)d[m]=d[m].destroy();k("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" "),function(a){var c=b[a];c&&c.destroy&&(b[a]=c.destroy());});h&&(h.innerHTML="",M(h),e&&l(h));H(b,function(a,c){delete b[c];});},firstRender:function(){var a=this,b=a.options;if(!a.isReadyToRender||a.isReadyToRender()){a.getContainer();a.resetMargins();a.setChartSize();a.propFromSeries();a.getAxes();
    k(b.series||[],function(b){a.initSeries(b);});a.linkSeries();f(a,"beforeRender");m&&(a.pointer=new m(a,b));a.render();if(!a.renderer.imgCount&&a.onload)a.onload();a.temporaryDisplay(!0);}},onload:function(){k([this.callback].concat(this.callbacks),function(a){a&&void 0!==this.index&&a.apply(this,[this]);},this);f(this,"load");f(this,"render");d(this.index)&&this.setReflow(this.options.chart.reflow);this.onload=null;}});})(K);(function(a){var C=a.addEvent,F=a.Chart,D=a.each;C(F,"afterSetChartSize",function(r){var g=
    this.options.chart.scrollablePlotArea;if(g=g&&g.minWidth)if(this.scrollablePixels=g=Math.max(0,g-this.chartWidth))this.plotWidth+=g,this.clipBox.width+=g,r.skipAxes||D(this.axes,function(e){1===e.side?e.getPlotLinePath=function(){var g=this.right,r;this.right=g-e.chart.scrollablePixels;r=a.Axis.prototype.getPlotLinePath.apply(this,arguments);this.right=g;return r}:(e.setAxisSize(),e.setAxisTranslation());});});C(F,"render",function(){this.scrollablePixels?(this.setUpScrolling&&this.setUpScrolling(),
    this.applyFixed()):this.fixedDiv&&this.applyFixed();});F.prototype.setUpScrolling=function(){this.scrollingContainer=a.createElement("div",{className:"highcharts-scrolling"},{overflowX:"auto",WebkitOverflowScrolling:"touch"},this.renderTo);this.innerContainer=a.createElement("div",{className:"highcharts-inner-container"},null,this.scrollingContainer);this.innerContainer.appendChild(this.container);this.setUpScrolling=null;};F.prototype.applyFixed=function(){var r=this.container,g,e;this.fixedDiv||(this.fixedDiv=
    a.createElement("div",{className:"highcharts-fixed"},{position:"absolute",overflow:"hidden",pointerEvents:"none",zIndex:2},null,!0),this.renderTo.insertBefore(this.fixedDiv,this.renderTo.firstChild),this.fixedRenderer=g=new a.Renderer(this.fixedDiv,0,0),this.scrollableMask=g.path().attr({fill:a.color(this.options.chart.backgroundColor||"#fff").setOpacity(.85).get(),zIndex:-1}).addClass("highcharts-scrollable-mask").add(),a.each([this.inverted?".highcharts-xaxis":".highcharts-yaxis",this.inverted?
    ".highcharts-xaxis-labels":".highcharts-yaxis-labels",".highcharts-contextbutton",".highcharts-credits",".highcharts-legend",".highcharts-subtitle",".highcharts-title"],function(e){a.each(r.querySelectorAll(e),function(a){g.box.appendChild(a);a.style.pointerEvents="auto";});}));this.fixedRenderer.setSize(this.chartWidth,this.chartHeight);e=this.chartWidth+this.scrollablePixels;this.container.style.width=e+"px";this.renderer.boxWrapper.attr({width:e,height:this.chartHeight,viewBox:[0,0,e,this.chartHeight].join(" ")});
    e=this.options.chart.scrollablePlotArea;e.scrollPositionX&&(this.scrollingContainer.scrollLeft=this.scrollablePixels*e.scrollPositionX);var t=this.axisOffset;e=this.plotTop-t[0]-1;var t=this.plotTop+this.plotHeight+t[2],w=this.plotLeft+this.plotWidth-this.scrollablePixels;this.scrollableMask.attr({d:this.scrollablePixels?["M",0,e,"L",this.plotLeft-1,e,"L",this.plotLeft-1,t,"L",0,t,"Z","M",w,e,"L",this.chartWidth,e,"L",this.chartWidth,t,"L",w,t,"Z"]:["M",0,0]});};})(K);(function(a){var C,F=a.each,D=
    a.extend,r=a.erase,g=a.fireEvent,e=a.format,t=a.isArray,w=a.isNumber,l=a.pick,u=a.removeEvent;a.Point=C=function(){};a.Point.prototype={init:function(a,d,e){this.series=a;this.color=a.color;this.applyOptions(d,e);a.options.colorByPoint?(d=a.options.colors||a.chart.options.colors,this.color=this.color||d[a.colorCounter],d=d.length,e=a.colorCounter,a.colorCounter++,a.colorCounter===d&&(a.colorCounter=0)):e=a.colorIndex;this.colorIndex=l(this.colorIndex,e);a.chart.pointCount++;g(this,"afterInit");return this},
    applyOptions:function(a,d){var c=this.series,e=c.options.pointValKey||c.pointValKey;a=C.prototype.optionsToObject.call(this,a);D(this,a);this.options=this.options?D(this.options,a):a;a.group&&delete this.group;e&&(this.y=this[e]);this.isNull=l(this.isValid&&!this.isValid(),null===this.x||!w(this.y,!0));this.selected&&(this.state="select");"name"in this&&void 0===d&&c.xAxis&&c.xAxis.hasNames&&(this.x=c.xAxis.nameToX(this));void 0===this.x&&c&&(this.x=void 0===d?c.autoIncrement(this):d);return this},
    setNestedProperty:function(c,d,e){e=e.split(".");a.reduce(e,function(c,e,f,b){c[e]=b.length-1===f?d:a.isObject(c[e],!0)?c[e]:{};return c[e]},c);return c},optionsToObject:function(c){var d={},e=this.series,g=e.options.keys,p=g||e.pointArrayMap||["y"],f=p.length,b=0,n=0;if(w(c)||null===c)d[p[0]]=c;else if(t(c))for(!g&&c.length>f&&(e=typeof c[0],"string"===e?d.name=c[0]:"number"===e&&(d.x=c[0]),b++);n<f;)g&&void 0===c[b]||(0<p[n].indexOf(".")?a.Point.prototype.setNestedProperty(d,c[b],p[n]):d[p[n]]=
    c[b]),b++,n++;else"object"===typeof c&&(d=c,c.dataLabels&&(e._hasPointLabels=!0),c.marker&&(e._hasPointMarkers=!0));return d},getClassName:function(){return "highcharts-point"+(this.selected?" highcharts-point-select":"")+(this.negative?" highcharts-negative":"")+(this.isNull?" highcharts-null-point":"")+(void 0!==this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?" "+this.zone.className.replace("highcharts-negative",
    ""):"")},getZone:function(){var a=this.series,d=a.zones,a=a.zoneAxis||"y",e=0,g;for(g=d[e];this[a]>=g.value;)g=d[++e];this.nonZonedColor||(this.nonZonedColor=this.color);this.color=g&&g.color&&!this.options.color?g.color:this.nonZonedColor;return g},destroy:function(){var a=this.series.chart,d=a.hoverPoints,e;a.pointCount--;d&&(this.setState(),r(d,this),d.length||(a.hoverPoints=null));if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel)u(this),this.destroyElements();this.legendItem&&
    a.legend.destroyItem(this);for(e in this)this[e]=null;},destroyElements:function(){for(var a=["graphic","dataLabel","dataLabelUpper","connector","shadowGroup"],d,e=6;e--;)d=a[e],this[d]&&(this[d]=this[d].destroy());},getLabelConfig:function(){return {x:this.category,y:this.y,color:this.color,colorIndex:this.colorIndex,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(a){var c=this.series,g=c.tooltipOptions,
    t=l(g.valueDecimals,""),p=g.valuePrefix||"",f=g.valueSuffix||"";F(c.pointArrayMap||["y"],function(b){b="{point."+b;if(p||f)a=a.replace(RegExp(b+"}","g"),p+b+"}"+f);a=a.replace(RegExp(b+"}","g"),b+":,."+t+"f}");});return e(a,{point:this,series:this.series},c.chart.time)},firePointEvent:function(a,d,e){var c=this,k=this.series.options;(k.point.events[a]||c.options&&c.options.events&&c.options.events[a])&&this.importEvents();"click"===a&&k.allowPointSelect&&(e=function(a){c.select&&c.select(null,a.ctrlKey||
    a.metaKey||a.shiftKey);});g(this,a,d,e);},visible:!0};})(K);(function(a){var C=a.addEvent,F=a.animObject,D=a.arrayMax,r=a.arrayMin,g=a.correctFloat,e=a.defaultOptions,t=a.defaultPlotOptions,w=a.defined,l=a.each,u=a.erase,c=a.extend,d=a.fireEvent,k=a.grep,x=a.isArray,p=a.isNumber,f=a.isString,b=a.merge,n=a.objectEach,z=a.pick,J=a.removeEvent,q=a.splat,L=a.SVGElement,B=a.syncTimeout,H=a.win;a.Series=a.seriesType("line",null,{lineWidth:2,allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},
    marker:{lineWidth:0,lineColor:"#ffffff",enabledThreshold:2,radius:4,states:{normal:{animation:!0},hover:{animation:{duration:50},enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:"#cccccc",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){return null===this.y?"":a.numberFormat(this.y,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},verticalAlign:"bottom",x:0,y:0,padding:5},cropThreshold:300,pointRange:0,
    softThreshold:!0,states:{normal:{animation:!0},hover:{animation:{duration:50},lineWidthPlus:1,marker:{},halo:{size:10,opacity:.25}},select:{marker:{}}},stickyTracking:!0,turboThreshold:1E3,findNearestPointBy:"x"},{isCartesian:!0,pointClass:a.Point,sorted:!0,requireSorting:!0,directTouch:!1,axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x","y"],coll:"series",init:function(a,b){var f=this,e,m=a.series,h;f.chart=a;f.options=b=f.setOptions(b);f.linkedSeries=[];f.bindAxes();c(f,{name:b.name,
    state:"",visible:!1!==b.visible,selected:!0===b.selected});e=b.events;n(e,function(a,b){C(f,b,a);});if(e&&e.click||b.point&&b.point.events&&b.point.events.click||b.allowPointSelect)a.runTrackerClick=!0;f.getColor();f.getSymbol();l(f.parallelArrays,function(a){f[a+"Data"]=[];});f.setData(b.data,!1);f.isCartesian&&(a.hasCartesianSeries=!0);m.length&&(h=m[m.length-1]);f._i=z(h&&h._i,-1)+1;a.orderSeries(this.insert(m));d(this,"afterInit");},insert:function(a){var b=this.options.index,c;if(p(b)){for(c=a.length;c--;)if(b>=
    z(a[c].options.index,a[c]._i)){a.splice(c+1,0,this);break}-1===c&&a.unshift(this);c+=1;}else a.push(this);return z(c,a.length-1)},bindAxes:function(){var b=this,c=b.options,d=b.chart,f;l(b.axisTypes||[],function(e){l(d[e],function(a){f=a.options;if(c[e]===f.index||void 0!==c[e]&&c[e]===f.id||void 0===c[e]&&0===f.index)b.insert(a.series),b[e]=a,a.isDirty=!0;});b[e]||b.optionalAxis===e||a.error(18,!0);});},updateParallelArrays:function(a,b){var c=a.series,d=arguments,f=p(b)?function(d){var f="y"===d&&c.toYData?
    c.toYData(a):a[d];c[d+"Data"][b]=f;}:function(a){Array.prototype[b].apply(c[a+"Data"],Array.prototype.slice.call(d,2));};l(c.parallelArrays,f);},autoIncrement:function(){var a=this.options,b=this.xIncrement,c,d=a.pointIntervalUnit,f=this.chart.time,b=z(b,a.pointStart,0);this.pointInterval=c=z(this.pointInterval,a.pointInterval,1);d&&(a=new f.Date(b),"day"===d?f.set("Date",a,f.get("Date",a)+c):"month"===d?f.set("Month",a,f.get("Month",a)+c):"year"===d&&f.set("FullYear",a,f.get("FullYear",a)+c),c=a.getTime()-
    b);this.xIncrement=b+c;return b},setOptions:function(a){var c=this.chart,f=c.options,m=f.plotOptions,g=(c.userOptions||{}).plotOptions||{},h=m[this.type];this.userOptions=a;c=b(h,m.series,a);this.tooltipOptions=b(e.tooltip,e.plotOptions.series&&e.plotOptions.series.tooltip,e.plotOptions[this.type].tooltip,f.tooltip.userOptions,m.series&&m.series.tooltip,m[this.type].tooltip,a.tooltip);this.stickyTracking=z(a.stickyTracking,g[this.type]&&g[this.type].stickyTracking,g.series&&g.series.stickyTracking,
    this.tooltipOptions.shared&&!this.noSharedTooltip?!0:c.stickyTracking);null===h.marker&&delete c.marker;this.zoneAxis=c.zoneAxis;a=this.zones=(c.zones||[]).slice();!c.negativeColor&&!c.negativeFillColor||c.zones||a.push({value:c[this.zoneAxis+"Threshold"]||c.threshold||0,className:"highcharts-negative",color:c.negativeColor,fillColor:c.negativeFillColor});a.length&&w(a[a.length-1].value)&&a.push({color:this.color,fillColor:this.fillColor});d(this,"afterSetOptions",{options:c});return c},getName:function(){return this.name||
    "Series "+(this.index+1)},getCyclic:function(a,b,c){var d,f=this.chart,h=this.userOptions,e=a+"Index",m=a+"Counter",g=c?c.length:z(f.options.chart[a+"Count"],f[a+"Count"]);b||(d=z(h[e],h["_"+e]),w(d)||(f.series.length||(f[m]=0),h["_"+e]=d=f[m]%g,f[m]+=1),c&&(b=c[d]));void 0!==d&&(this[e]=d);this[a]=b;},getColor:function(){this.options.colorByPoint?this.options.color=null:this.getCyclic("color",this.options.color||t[this.type].color,this.chart.options.colors);},getSymbol:function(){this.getCyclic("symbol",
    this.options.marker.symbol,this.chart.options.symbols);},drawLegendSymbol:a.LegendSymbolMixin.drawLineMarker,updateData:function(b){var c=this.options,d=this.points,f=[],e,h,m,g=this.requireSorting;l(b,function(b){var h;h=a.defined(b)&&this.pointClass.prototype.optionsToObject.call({series:this},b).x;p(h)&&(h=a.inArray(h,this.xData,m),-1===h?f.push(b):b!==c.data[h]?(d[h].update(b,!1,null,!1),d[h].touched=!0,g&&(m=h)):d[h]&&(d[h].touched=!0),e=!0);},this);if(e)for(b=d.length;b--;)h=d[b],h.touched||h.remove(!1),
    h.touched=!1;else if(b.length===d.length)l(b,function(a,b){d[b].update&&a!==c.data[b]&&d[b].update(a,!1,null,!1);});else return !1;l(f,function(a){this.addPoint(a,!1);},this);return !0},setData:function(b,c,d,e){var m=this,h=m.points,g=h&&h.length||0,q,k=m.options,A=m.chart,n=null,E=m.xAxis,B=k.turboThreshold,t=this.xData,r=this.yData,u=(q=m.pointArrayMap)&&q.length,H;b=b||[];q=b.length;c=z(c,!0);!1!==e&&q&&g&&!m.cropped&&!m.hasGroupedData&&m.visible&&(H=this.updateData(b));if(!H){m.xIncrement=null;m.colorCounter=
    0;l(this.parallelArrays,function(a){m[a+"Data"].length=0;});if(B&&q>B){for(d=0;null===n&&d<q;)n=b[d],d++;if(p(n))for(d=0;d<q;d++)t[d]=this.autoIncrement(),r[d]=b[d];else if(x(n))if(u)for(d=0;d<q;d++)n=b[d],t[d]=n[0],r[d]=n.slice(1,u+1);else for(d=0;d<q;d++)n=b[d],t[d]=n[0],r[d]=n[1];else a.error(12);}else for(d=0;d<q;d++)void 0!==b[d]&&(n={series:m},m.pointClass.prototype.applyOptions.apply(n,[b[d]]),m.updateParallelArrays(n,d));r&&f(r[0])&&a.error(14,!0);m.data=[];m.options.data=m.userOptions.data=
    b;for(d=g;d--;)h[d]&&h[d].destroy&&h[d].destroy();E&&(E.minRange=E.userMinRange);m.isDirty=A.isDirtyBox=!0;m.isDirtyData=!!h;d=!1;}"point"===k.legendType&&(this.processData(),this.generatePoints());c&&A.redraw(d);},processData:function(b){var c=this.xData,d=this.yData,f=c.length,e;e=0;var h,m,g=this.xAxis,q,k=this.options;q=k.cropThreshold;var p=this.getExtremesFromAll||k.getExtremesFromAll,n=this.isCartesian,k=g&&g.val2lin,l=g&&g.isLog,B=this.requireSorting,t,r;if(n&&!this.isDirty&&!g.isDirty&&!this.yAxis.isDirty&&
    !b)return !1;g&&(b=g.getExtremes(),t=b.min,r=b.max);if(n&&this.sorted&&!p&&(!q||f>q||this.forceCrop))if(c[f-1]<t||c[0]>r)c=[],d=[];else if(c[0]<t||c[f-1]>r)e=this.cropData(this.xData,this.yData,t,r),c=e.xData,d=e.yData,e=e.start,h=!0;for(q=c.length||1;--q;)f=l?k(c[q])-k(c[q-1]):c[q]-c[q-1],0<f&&(void 0===m||f<m)?m=f:0>f&&B&&(a.error(15),B=!1);this.cropped=h;this.cropStart=e;this.processedXData=c;this.processedYData=d;this.closestPointRange=m;},cropData:function(a,b,c,d,f){var h=a.length,e=0,m=h,g;f=
    z(f,this.cropShoulder,1);for(g=0;g<h;g++)if(a[g]>=c){e=Math.max(0,g-f);break}for(c=g;c<h;c++)if(a[c]>d){m=c+f;break}return {xData:a.slice(e,m),yData:b.slice(e,m),start:e,end:m}},generatePoints:function(){var a=this.options,b=a.data,c=this.data,d,f=this.processedXData,h=this.processedYData,e=this.pointClass,g=f.length,k=this.cropStart||0,p,n=this.hasGroupedData,a=a.keys,l,B=[],t;c||n||(c=[],c.length=b.length,c=this.data=c);a&&n&&(this.options.keys=!1);for(t=0;t<g;t++)p=k+t,n?(l=(new e).init(this,[f[t]].concat(q(h[t]))),
    l.dataGroup=this.groupMap[t]):(l=c[p])||void 0===b[p]||(c[p]=l=(new e).init(this,b[p],f[t])),l&&(l.index=p,B[t]=l);this.options.keys=a;if(c&&(g!==(d=c.length)||n))for(t=0;t<d;t++)t!==k||n||(t+=g),c[t]&&(c[t].destroyElements(),c[t].plotX=void 0);this.data=c;this.points=B;},getExtremes:function(a){var b=this.yAxis,c=this.processedXData,d,f=[],h=0;d=this.xAxis.getExtremes();var e=d.min,m=d.max,g,q,k=this.requireSorting?1:0,n,l;a=a||this.stackedYData||this.processedYData||[];d=a.length;for(l=0;l<d;l++)if(q=
    c[l],n=a[l],g=(p(n,!0)||x(n))&&(!b.positiveValuesOnly||n.length||0<n),q=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||(c[l+k]||q)>=e&&(c[l-k]||q)<=m,g&&q)if(g=n.length)for(;g--;)"number"===typeof n[g]&&(f[h++]=n[g]);else f[h++]=n;this.dataMin=r(f);this.dataMax=D(f);},translate:function(){this.processedXData||this.processData();this.generatePoints();var a=this.options,b=a.stacking,c=this.xAxis,f=c.categories,e=this.yAxis,h=this.points,q=h.length,k=!!this.modifyValue,n=a.pointPlacement,
    l="between"===n||p(n),t=a.threshold,B=a.startFromThreshold?t:0,r,x,u,H,J=Number.MAX_VALUE;"between"===n&&(n=.5);p(n)&&(n*=z(a.pointRange||c.pointRange));for(a=0;a<q;a++){var L=h[a],C=L.x,D=L.y;x=L.low;var F=b&&e.stacks[(this.negStacks&&D<(B?0:t)?"-":"")+this.stackKey],K;e.positiveValuesOnly&&null!==D&&0>=D&&(L.isNull=!0);L.plotX=r=g(Math.min(Math.max(-1E5,c.translate(C,0,0,0,1,n,"flags"===this.type)),1E5));b&&this.visible&&!L.isNull&&F&&F[C]&&(H=this.getStackIndicator(H,C,this.index),K=F[C],D=K.points[H.key],
    x=D[0],D=D[1],x===B&&H.key===F[C].base&&(x=z(p(t)&&t,e.min)),e.positiveValuesOnly&&0>=x&&(x=null),L.total=L.stackTotal=K.total,L.percentage=K.total&&L.y/K.total*100,L.stackY=D,K.setOffset(this.pointXOffset||0,this.barW||0));L.yBottom=w(x)?Math.min(Math.max(-1E5,e.translate(x,0,1,0,1)),1E5):null;k&&(D=this.modifyValue(D,L));L.plotY=x="number"===typeof D&&Infinity!==D?Math.min(Math.max(-1E5,e.translate(D,0,1,0,1)),1E5):void 0;L.isInside=void 0!==x&&0<=x&&x<=e.len&&0<=r&&r<=c.len;L.clientX=l?g(c.translate(C,
    0,0,0,1,n)):r;L.negative=L.y<(t||0);L.category=f&&void 0!==f[L.x]?f[L.x]:L.x;L.isNull||(void 0!==u&&(J=Math.min(J,Math.abs(r-u))),u=r);L.zone=this.zones.length&&L.getZone();}this.closestPointRangePx=J;d(this,"afterTranslate");},getValidPoints:function(a,b){var c=this.chart;return k(a||this.points||[],function(a){return b&&!c.isInsidePlot(a.plotX,a.plotY,c.inverted)?!1:!a.isNull})},setClip:function(a){var b=this.chart,c=this.options,d=b.renderer,f=b.inverted,h=this.clipBox,e=h||b.clipBox,m=this.sharedClipKey||
    ["_sharedClip",a&&a.duration,a&&a.easing,e.height,c.xAxis,c.yAxis].join(),g=b[m],q=b[m+"m"];g||(a&&(e.width=0,f&&(e.x=b.plotSizeX),b[m+"m"]=q=d.clipRect(f?b.plotSizeX+99:-99,f?-b.plotLeft:-b.plotTop,99,f?b.chartWidth:b.chartHeight)),b[m]=g=d.clipRect(e),g.count={length:0});a&&!g.count[this.index]&&(g.count[this.index]=!0,g.count.length+=1);!1!==c.clip&&(this.group.clip(a||h?g:b.clipRect),this.markerGroup.clip(q),this.sharedClipKey=m);a||(g.count[this.index]&&(delete g.count[this.index],--g.count.length),
    0===g.count.length&&m&&b[m]&&(h||(b[m]=b[m].destroy()),b[m+"m"]&&(b[m+"m"]=b[m+"m"].destroy())));},animate:function(a){var b=this.chart,c=F(this.options.animation),d;a?this.setClip(c):(d=this.sharedClipKey,(a=b[d])&&a.animate({width:b.plotSizeX,x:0},c),b[d+"m"]&&b[d+"m"].animate({width:b.plotSizeX+99,x:0},c),this.animate=null);},afterAnimate:function(){this.setClip();d(this,"afterAnimate");this.finishedAnimating=!0;},drawPoints:function(){var a=this.points,b=this.chart,c,d,f,h,e=this.options.marker,
    g,q,k,p=this[this.specialGroup]||this.markerGroup,n,l=z(e.enabled,this.xAxis.isRadial?!0:null,this.closestPointRangePx>=e.enabledThreshold*e.radius);if(!1!==e.enabled||this._hasPointMarkers)for(c=0;c<a.length;c++)d=a[c],h=d.graphic,g=d.marker||{},q=!!d.marker,f=l&&void 0===g.enabled||g.enabled,k=d.isInside,f&&!d.isNull?(f=z(g.symbol,this.symbol),n=this.markerAttribs(d,d.selected&&"select"),h?h[k?"show":"hide"](!0).animate(n):k&&(0<n.width||d.hasImage)&&(d.graphic=h=b.renderer.symbol(f,n.x,n.y,n.width,
    n.height,q?g:e).add(p)),h&&h.attr(this.pointAttribs(d,d.selected&&"select")),h&&h.addClass(d.getClassName(),!0)):h&&(d.graphic=h.destroy());},markerAttribs:function(a,b){var c=this.options.marker,d=a.marker||{},f=d.symbol||c.symbol,h=z(d.radius,c.radius);b&&(c=c.states[b],b=d.states&&d.states[b],h=z(b&&b.radius,c&&c.radius,h+(c&&c.radiusPlus||0)));a.hasImage=f&&0===f.indexOf("url");a.hasImage&&(h=0);a={x:Math.floor(a.plotX)-h,y:a.plotY-h};h&&(a.width=a.height=2*h);return a},pointAttribs:function(a,
    b){var c=this.options.marker,d=a&&a.options,f=d&&d.marker||{},h=this.color,e=d&&d.color,g=a&&a.color,d=z(f.lineWidth,c.lineWidth);a=a&&a.zone&&a.zone.color;h=e||a||g||h;a=f.fillColor||c.fillColor||h;h=f.lineColor||c.lineColor||h;b&&(c=c.states[b],b=f.states&&f.states[b]||{},d=z(b.lineWidth,c.lineWidth,d+z(b.lineWidthPlus,c.lineWidthPlus,0)),a=b.fillColor||c.fillColor||a,h=b.lineColor||c.lineColor||h);return {stroke:h,"stroke-width":d,fill:a}},destroy:function(){var b=this,c=b.chart,f=/AppleWebKit\/533/.test(H.navigator.userAgent),
    e,g,h=b.data||[],q,k;d(b,"destroy");J(b);l(b.axisTypes||[],function(a){(k=b[a])&&k.series&&(u(k.series,b),k.isDirty=k.forceRedraw=!0);});b.legendItem&&b.chart.legend.destroyItem(b);for(g=h.length;g--;)(q=h[g])&&q.destroy&&q.destroy();b.points=null;a.clearTimeout(b.animationTimeout);n(b,function(a,b){a instanceof L&&!a.survive&&(e=f&&"group"===b?"hide":"destroy",a[e]());});c.hoverSeries===b&&(c.hoverSeries=null);u(c.series,b);c.orderSeries();n(b,function(a,c){delete b[c];});},getGraphPath:function(a,b,
    c){var d=this,f=d.options,h=f.step,e,g=[],m=[],q;a=a||d.points;(e=a.reversed)&&a.reverse();(h={right:1,center:2}[h]||h&&3)&&e&&(h=4-h);!f.connectNulls||b||c||(a=this.getValidPoints(a));l(a,function(e,k){var n=e.plotX,p=e.plotY,l=a[k-1];(e.leftCliff||l&&l.rightCliff)&&!c&&(q=!0);e.isNull&&!w(b)&&0<k?q=!f.connectNulls:e.isNull&&!b?q=!0:(0===k||q?k=["M",e.plotX,e.plotY]:d.getPointSpline?k=d.getPointSpline(a,e,k):h?(k=1===h?["L",l.plotX,p]:2===h?["L",(l.plotX+n)/2,l.plotY,"L",(l.plotX+n)/2,p]:["L",n,
    l.plotY],k.push("L",n,p)):k=["L",n,p],m.push(e.x),h&&(m.push(e.x),2===h&&m.push(e.x)),g.push.apply(g,k),q=!1);});g.xMap=m;return d.graphPath=g},drawGraph:function(){var a=this,b=this.options,c=(this.gappedPath||this.getGraphPath).call(this),d=[["graph","highcharts-graph",b.lineColor||this.color,b.dashStyle]],d=a.getZonesGraphs(d);l(d,function(d,f){var e=d[0],h=a[e];h?(h.endX=a.preventGraphAnimation?null:c.xMap,h.animate({d:c})):c.length&&(a[e]=a.chart.renderer.path(c).addClass(d[1]).attr({zIndex:1}).add(a.group),
    h={stroke:d[2],"stroke-width":b.lineWidth,fill:a.fillGraph&&a.color||"none"},d[3]?h.dashstyle=d[3]:"square"!==b.linecap&&(h["stroke-linecap"]=h["stroke-linejoin"]="round"),h=a[e].attr(h).shadow(2>f&&b.shadow));h&&(h.startX=c.xMap,h.isArea=c.isArea);});},getZonesGraphs:function(a){l(this.zones,function(b,c){a.push(["zone-graph-"+c,"highcharts-graph highcharts-zone-graph-"+c+" "+(b.className||""),b.color||this.color,b.dashStyle||this.options.dashStyle]);},this);return a},applyZones:function(){var a=this,
    b=this.chart,c=b.renderer,d=this.zones,f,e,g=this.clips||[],q,k=this.graph,n=this.area,p=Math.max(b.chartWidth,b.chartHeight),t=this[(this.zoneAxis||"y")+"Axis"],B,r,x=b.inverted,u,H,w,L,J=!1;d.length&&(k||n)&&t&&void 0!==t.min&&(r=t.reversed,u=t.horiz,k&&!this.showLine&&k.hide(),n&&n.hide(),B=t.getExtremes(),l(d,function(d,h){f=r?u?b.plotWidth:0:u?0:t.toPixels(B.min);f=Math.min(Math.max(z(e,f),0),p);e=Math.min(Math.max(Math.round(t.toPixels(z(d.value,B.max),!0)),0),p);J&&(f=e=t.toPixels(B.max));
    H=Math.abs(f-e);w=Math.min(f,e);L=Math.max(f,e);t.isXAxis?(q={x:x?L:w,y:0,width:H,height:p},u||(q.x=b.plotHeight-q.x)):(q={x:0,y:x?L:w,width:p,height:H},u&&(q.y=b.plotWidth-q.y));x&&c.isVML&&(q=t.isXAxis?{x:0,y:r?w:L,height:q.width,width:b.chartWidth}:{x:q.y-b.plotLeft-b.spacingBox.x,y:0,width:q.height,height:b.chartHeight});g[h]?g[h].animate(q):(g[h]=c.clipRect(q),k&&a["zone-graph-"+h].clip(g[h]),n&&a["zone-area-"+h].clip(g[h]));J=d.value>B.max;a.resetZones&&0===e&&(e=void 0);}),this.clips=g);},invertGroups:function(a){function b(){l(["group",
    "markerGroup"],function(b){c[b]&&(d.renderer.isVML&&c[b].attr({width:c.yAxis.len,height:c.xAxis.len}),c[b].width=c.yAxis.len,c[b].height=c.xAxis.len,c[b].invert(a));});}var c=this,d=c.chart,f;c.xAxis&&(f=C(d,"resize",b),C(c,"destroy",f),b(a),c.invertGroups=b);},plotGroup:function(a,b,c,d,f){var e=this[a],g=!e;g&&(this[a]=e=this.chart.renderer.g().attr({zIndex:d||.1}).add(f));e.addClass("highcharts-"+b+" highcharts-series-"+this.index+" highcharts-"+this.type+"-series "+(w(this.colorIndex)?"highcharts-color-"+
    this.colorIndex+" ":"")+(this.options.className||"")+(e.hasClass("highcharts-tracker")?" highcharts-tracker":""),!0);e.attr({visibility:c})[g?"attr":"animate"](this.getPlotBox());return e},getPlotBox:function(){var a=this.chart,b=this.xAxis,c=this.yAxis;a.inverted&&(b=c,c=this.xAxis);return {translateX:b?b.left:a.plotLeft,translateY:c?c.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=this,b=a.chart,c,f=a.options,e=!!a.animate&&b.renderer.isSVG&&F(f.animation).duration,h=a.visible?"inherit":
    "hidden",g=f.zIndex,q=a.hasRendered,k=b.seriesGroup,n=b.inverted;c=a.plotGroup("group","series",h,g,k);a.markerGroup=a.plotGroup("markerGroup","markers",h,g,k);e&&a.animate(!0);c.inverted=a.isCartesian?n:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());a.drawDataLabels&&a.drawDataLabels();a.visible&&a.drawPoints();a.drawTracker&&!1!==a.options.enableMouseTracking&&a.drawTracker();a.invertGroups(n);!1===f.clip||a.sharedClipKey||q||c.clip(b.clipRect);e&&a.animate();q||(a.animationTimeout=B(function(){a.afterAnimate();},
    e));a.isDirty=!1;a.hasRendered=!0;d(a,"afterRender");},redraw:function(){var a=this.chart,b=this.isDirty||this.isDirtyData,c=this.group,d=this.xAxis,f=this.yAxis;c&&(a.inverted&&c.attr({width:a.plotWidth,height:a.plotHeight}),c.animate({translateX:z(d&&d.left,a.plotLeft),translateY:z(f&&f.top,a.plotTop)}));this.translate();this.render();b&&delete this.kdTree;},kdAxisArray:["clientX","plotY"],searchPoint:function(a,b){var c=this.xAxis,d=this.yAxis,f=this.chart.inverted;return this.searchKDTree({clientX:f?
    c.len-a.chartY+c.pos:a.chartX-c.pos,plotY:f?d.len-a.chartX+d.pos:a.chartY-d.pos},b)},buildKDTree:function(){function a(c,d,f){var e,h;if(h=c&&c.length)return e=b.kdAxisArray[d%f],c.sort(function(a,b){return a[e]-b[e]}),h=Math.floor(h/2),{point:c[h],left:a(c.slice(0,h),d+1,f),right:a(c.slice(h+1),d+1,f)}}this.buildingKdTree=!0;var b=this,c=-1<b.options.findNearestPointBy.indexOf("y")?2:1;delete b.kdTree;B(function(){b.kdTree=a(b.getValidPoints(null,!b.directTouch),c,c);b.buildingKdTree=!1;},b.options.kdNow?
    0:1);},searchKDTree:function(a,b){function c(a,b,h,m){var q=b.point,k=d.kdAxisArray[h%m],n,p,l=q;p=w(a[f])&&w(q[f])?Math.pow(a[f]-q[f],2):null;n=w(a[e])&&w(q[e])?Math.pow(a[e]-q[e],2):null;n=(p||0)+(n||0);q.dist=w(n)?Math.sqrt(n):Number.MAX_VALUE;q.distX=w(p)?Math.sqrt(p):Number.MAX_VALUE;k=a[k]-q[k];n=0>k?"left":"right";p=0>k?"right":"left";b[n]&&(n=c(a,b[n],h+1,m),l=n[g]<l[g]?n:q);b[p]&&Math.sqrt(k*k)<l[g]&&(a=c(a,b[p],h+1,m),l=a[g]<l[g]?a:l);return l}var d=this,f=this.kdAxisArray[0],e=this.kdAxisArray[1],
    g=b?"distX":"dist";b=-1<d.options.findNearestPointBy.indexOf("y")?2:1;this.kdTree||this.buildingKdTree||this.buildKDTree();if(this.kdTree)return c(a,this.kdTree,b,b)}});})(K);(function(a){var C=a.Axis,F=a.Chart,D=a.correctFloat,r=a.defined,g=a.destroyObjectProperties,e=a.each,t=a.format,w=a.objectEach,l=a.pick,u=a.Series;a.StackItem=function(a,d,e,g,p){var c=a.chart.inverted;this.axis=a;this.isNegative=e;this.options=d;this.x=g;this.total=null;this.points={};this.stack=p;this.rightCliff=this.leftCliff=
    0;this.alignOptions={align:d.align||(c?e?"left":"right":"center"),verticalAlign:d.verticalAlign||(c?"middle":e?"bottom":"top"),y:l(d.y,c?4:e?14:-6),x:l(d.x,c?e?-6:6:0)};this.textAlign=d.textAlign||(c?e?"right":"left":"center");};a.StackItem.prototype={destroy:function(){g(this,this.axis);},render:function(a){var c=this.axis.chart,e=this.options,g=e.format,g=g?t(g,this,c.time):e.formatter.call(this);this.label?this.label.attr({text:g,visibility:"hidden"}):this.label=c.renderer.text(g,null,null,e.useHTML).css(e.style).attr({align:this.textAlign,
    rotation:e.rotation,visibility:"hidden"}).add(a);},setOffset:function(a,d){var c=this.axis,e=c.chart,g=c.translate(c.usePercentage?100:this.total,0,0,0,1),f=c.translate(0),f=Math.abs(g-f);a=e.xAxis[0].translate(this.x)+a;c=this.getStackBox(e,this,a,g,d,f,c);if(d=this.label)d.align(this.alignOptions,null,c),c=d.alignAttr,d[!1===this.options.crop||e.isInsidePlot(c.x,c.y)?"show":"hide"](!0);},getStackBox:function(a,d,e,g,p,f,b){var c=d.axis.reversed,k=a.inverted;a=b.height+b.pos-a.plotTop;d=d.isNegative&&
    !c||!d.isNegative&&c;return {x:k?d?g:g-f:e,y:k?a-e-p:d?a-g-f:a-g,width:k?f:p,height:k?p:f}}};F.prototype.getStacks=function(){var a=this;e(a.yAxis,function(a){a.stacks&&a.hasVisibleSeries&&(a.oldStacks=a.stacks);});e(a.series,function(c){!c.options.stacking||!0!==c.visible&&!1!==a.options.chart.ignoreHiddenSeries||(c.stackKey=c.type+l(c.options.stack,""));});};C.prototype.buildStacks=function(){var a=this.series,d=l(this.options.reversedStacks,!0),e=a.length,g;if(!this.isXAxis){this.usePercentage=!1;
    for(g=e;g--;)a[d?g:e-g-1].setStackedPoints();for(g=0;g<e;g++)a[g].modifyStacks();}};C.prototype.renderStackTotals=function(){var a=this.chart,d=a.renderer,e=this.stacks,g=this.stackTotalGroup;g||(this.stackTotalGroup=g=d.g("stack-labels").attr({visibility:"visible",zIndex:6}).add());g.translate(a.plotLeft,a.plotTop);w(e,function(a){w(a,function(a){a.render(g);});});};C.prototype.resetStacks=function(){var a=this,d=a.stacks;a.isXAxis||w(d,function(c){w(c,function(d,e){d.touched<a.stacksTouched?(d.destroy(),
    delete c[e]):(d.total=null,d.cumulative=null);});});};C.prototype.cleanStacks=function(){var a;this.isXAxis||(this.oldStacks&&(a=this.stacks=this.oldStacks),w(a,function(a){w(a,function(a){a.cumulative=a.total;});}));};u.prototype.setStackedPoints=function(){if(this.options.stacking&&(!0===this.visible||!1===this.chart.options.chart.ignoreHiddenSeries)){var c=this.processedXData,d=this.processedYData,e=[],g=d.length,p=this.options,f=p.threshold,b=l(p.startFromThreshold&&f,0),n=p.stack,p=p.stacking,t=this.stackKey,
    u="-"+t,q=this.negStacks,w=this.yAxis,B=w.stacks,H=w.oldStacks,m,E,A,M,G,h,v;w.stacksTouched+=1;for(G=0;G<g;G++)h=c[G],v=d[G],m=this.getStackIndicator(m,h,this.index),M=m.key,A=(E=q&&v<(b?0:f))?u:t,B[A]||(B[A]={}),B[A][h]||(H[A]&&H[A][h]?(B[A][h]=H[A][h],B[A][h].total=null):B[A][h]=new a.StackItem(w,w.options.stackLabels,E,h,n)),A=B[A][h],null!==v?(A.points[M]=A.points[this.index]=[l(A.cumulative,b)],r(A.cumulative)||(A.base=M),A.touched=w.stacksTouched,0<m.index&&!1===this.singleStacks&&(A.points[M][0]=
    A.points[this.index+","+h+",0"][0])):A.points[M]=A.points[this.index]=null,"percent"===p?(E=E?t:u,q&&B[E]&&B[E][h]?(E=B[E][h],A.total=E.total=Math.max(E.total,A.total)+Math.abs(v)||0):A.total=D(A.total+(Math.abs(v)||0))):A.total=D(A.total+(v||0)),A.cumulative=l(A.cumulative,b)+(v||0),null!==v&&(A.points[M].push(A.cumulative),e[G]=A.cumulative);"percent"===p&&(w.usePercentage=!0);this.stackedYData=e;w.oldStacks={};}};u.prototype.modifyStacks=function(){var a=this,d=a.stackKey,g=a.yAxis.stacks,l=a.processedXData,
    p,f=a.options.stacking;a[f+"Stacker"]&&e([d,"-"+d],function(b){for(var c=l.length,d,e;c--;)if(d=l[c],p=a.getStackIndicator(p,d,a.index,b),e=(d=g[b]&&g[b][d])&&d.points[p.key])a[f+"Stacker"](e,d,c);});};u.prototype.percentStacker=function(a,d,e){d=d.total?100/d.total:0;a[0]=D(a[0]*d);a[1]=D(a[1]*d);this.stackedYData[e]=a[1];};u.prototype.getStackIndicator=function(a,d,e,g){!r(a)||a.x!==d||g&&a.key!==g?a={x:d,index:0,key:g}:a.index++;a.key=[e,d,a.index].join();return a};})(K);(function(a){var C=a.addEvent,
    F=a.animate,D=a.Axis,r=a.createElement,g=a.css,e=a.defined,t=a.each,w=a.erase,l=a.extend,u=a.fireEvent,c=a.inArray,d=a.isNumber,k=a.isObject,x=a.isArray,p=a.merge,f=a.objectEach,b=a.pick,n=a.Point,z=a.Series,J=a.seriesTypes,q=a.setAnimation,L=a.splat;l(a.Chart.prototype,{addSeries:function(a,c,d){var f,e=this;a&&(c=b(c,!0),u(e,"addSeries",{options:a},function(){f=e.initSeries(a);e.isDirtyLegend=!0;e.linkSeries();u(e,"afterAddSeries");c&&e.redraw(d);}));return f},addAxis:function(a,c,d,f){var e=c?"xAxis":
    "yAxis",g=this.options;a=p(a,{index:this[e].length,isX:c});c=new D(this,a);g[e]=L(g[e]||{});g[e].push(a);b(d,!0)&&this.redraw(f);return c},showLoading:function(a){var b=this,c=b.options,d=b.loadingDiv,f=c.loading,e=function(){d&&g(d,{left:b.plotLeft+"px",top:b.plotTop+"px",width:b.plotWidth+"px",height:b.plotHeight+"px"});};d||(b.loadingDiv=d=r("div",{className:"highcharts-loading highcharts-loading-hidden"},null,b.container),b.loadingSpan=r("span",{className:"highcharts-loading-inner"},null,d),C(b,
    "redraw",e));d.className="highcharts-loading";b.loadingSpan.innerHTML=a||c.lang.loading;g(d,l(f.style,{zIndex:10}));g(b.loadingSpan,f.labelStyle);b.loadingShown||(g(d,{opacity:0,display:""}),F(d,{opacity:f.style.opacity||.5},{duration:f.showDuration||0}));b.loadingShown=!0;e();},hideLoading:function(){var a=this.options,b=this.loadingDiv;b&&(b.className="highcharts-loading highcharts-loading-hidden",F(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){g(b,{display:"none"});}}));
    this.loadingShown=!1;},propsRequireDirtyBox:"backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" "),update:function(a,g,m,q){var k=this,n={credits:"addCredits",
    title:"setTitle",subtitle:"setSubtitle"},l=a.chart,h,v,r=[];u(k,"update",{options:a});if(l){p(!0,k.options.chart,l);"className"in l&&k.setClassName(l.className);"reflow"in l&&k.setReflow(l.reflow);if("inverted"in l||"polar"in l)k.propFromSeries(),h=!0;"alignTicks"in l&&(h=!0);f(l,function(a,b){-1!==c("chart."+b,k.propsRequireUpdateSeries)&&(v=!0);-1!==c(b,k.propsRequireDirtyBox)&&(k.isDirtyBox=!0);});"style"in l&&k.renderer.setStyle(l.style);}a.colors&&(this.options.colors=a.colors);a.plotOptions&&
    p(!0,this.options.plotOptions,a.plotOptions);f(a,function(a,b){if(k[b]&&"function"===typeof k[b].update)k[b].update(a,!1);else if("function"===typeof k[n[b]])k[n[b]](a);"chart"!==b&&-1!==c(b,k.propsRequireUpdateSeries)&&(v=!0);});t("xAxis yAxis zAxis series colorAxis pane".split(" "),function(b){a[b]&&(t(L(a[b]),function(a,c){(c=e(a.id)&&k.get(a.id)||k[b][c])&&c.coll===b&&(c.update(a,!1),m&&(c.touched=!0));if(!c&&m)if("series"===b)k.addSeries(a,!1).touched=!0;else if("xAxis"===b||"yAxis"===b)k.addAxis(a,
    "xAxis"===b,!1).touched=!0;}),m&&t(k[b],function(a){a.touched?delete a.touched:r.push(a);}));});t(r,function(a){a.remove(!1);});h&&t(k.axes,function(a){a.update({},!1);});v&&t(k.series,function(a){a.update({},!1);});a.loading&&p(!0,k.options.loading,a.loading);h=l&&l.width;l=l&&l.height;d(h)&&h!==k.chartWidth||d(l)&&l!==k.chartHeight?k.setSize(h,l,q):b(g,!0)&&k.redraw(q);},setSubtitle:function(a){this.setTitle(void 0,a);}});l(n.prototype,{update:function(a,c,d,f){function e(){g.applyOptions(a);null===g.y&&
    h&&(g.graphic=h.destroy());k(a,!0)&&(h&&h.element&&a&&a.marker&&void 0!==a.marker.symbol&&(g.graphic=h.destroy()),a&&a.dataLabels&&g.dataLabel&&(g.dataLabel=g.dataLabel.destroy()),g.connector&&(g.connector=g.connector.destroy()));m=g.index;q.updateParallelArrays(g,m);p.data[m]=k(p.data[m],!0)||k(a,!0)?g.options:b(a,p.data[m]);q.isDirty=q.isDirtyData=!0;!q.fixedBox&&q.hasCartesianSeries&&(n.isDirtyBox=!0);"point"===p.legendType&&(n.isDirtyLegend=!0);c&&n.redraw(d);}var g=this,q=g.series,h=g.graphic,
    m,n=q.chart,p=q.options;c=b(c,!0);!1===f?e():g.firePointEvent("update",{options:a},e);},remove:function(a,b){this.series.removePoint(c(this,this.series.data),a,b);}});l(z.prototype,{addPoint:function(a,c,d,f){var e=this.options,g=this.data,q=this.chart,h=this.xAxis,h=h&&h.hasNames&&h.names,m=e.data,k,n,p=this.xData,l,t;c=b(c,!0);k={series:this};this.pointClass.prototype.applyOptions.apply(k,[a]);t=k.x;l=p.length;if(this.requireSorting&&t<p[l-1])for(n=!0;l&&p[l-1]>t;)l--;this.updateParallelArrays(k,
    "splice",l,0,0);this.updateParallelArrays(k,l);h&&k.name&&(h[t]=k.name);m.splice(l,0,a);n&&(this.data.splice(l,0,null),this.processData());"point"===e.legendType&&this.generatePoints();d&&(g[0]&&g[0].remove?g[0].remove(!1):(g.shift(),this.updateParallelArrays(k,"shift"),m.shift()));this.isDirtyData=this.isDirty=!0;c&&q.redraw(f);},removePoint:function(a,c,d){var f=this,e=f.data,g=e[a],m=f.points,h=f.chart,k=function(){m&&m.length===e.length&&m.splice(a,1);e.splice(a,1);f.options.data.splice(a,1);f.updateParallelArrays(g||
    {series:f},"splice",a,1);g&&g.destroy();f.isDirty=!0;f.isDirtyData=!0;c&&h.redraw();};q(d,h);c=b(c,!0);g?g.firePointEvent("remove",null,k):k();},remove:function(a,c,d){function f(){e.destroy();g.isDirtyLegend=g.isDirtyBox=!0;g.linkSeries();b(a,!0)&&g.redraw(c);}var e=this,g=e.chart;!1!==d?u(e,"remove",null,f):f();},update:function(d,f){var e=this,g=e.chart,q=e.userOptions,k=e.oldType||e.type,n=d.type||q.type||g.options.chart.type,h=J[k].prototype,r,B=["group","markerGroup","dataLabelsGroup"],x=["navigatorSeries",
    "baseSeries"],z=e.finishedAnimating&&{animation:!1},w=["data","name","turboThreshold"],H=a.keys(d),y=0<H.length;t(H,function(a){-1===c(a,w)&&(y=!1);});if(y)d.data&&this.setData(d.data,!1),d.name&&this.setName(d.name,!1);else{x=B.concat(x);t(x,function(a){x[a]=e[a];delete e[a];});d=p(q,z,{index:e.index,pointStart:b(q.pointStart,e.xData[0])},{data:e.options.data},d);e.remove(!1,null,!1);for(r in h)e[r]=void 0;J[n||k]?l(e,J[n||k].prototype):a.error(17,!0);t(x,function(a){e[a]=x[a];});e.init(g,d);d.zIndex!==
    q.zIndex&&t(B,function(a){e[a]&&e[a].attr({zIndex:d.zIndex});});e.oldType=k;g.linkSeries();}u(this,"afterUpdate");b(f,!0)&&g.redraw(!1);},setName:function(a){this.name=this.options.name=this.userOptions.name=a;this.chart.isDirtyLegend=!0;}});l(D.prototype,{update:function(a,c){var d=this.chart;a=p(this.userOptions,a);d.options[this.coll].indexOf&&(d.options[this.coll][d.options[this.coll].indexOf(this.userOptions)]=a);this.destroy(!0);this.init(d,l(a,{events:void 0}));d.isDirtyBox=!0;b(c,!0)&&d.redraw();},
    remove:function(a){for(var c=this.chart,d=this.coll,f=this.series,e=f.length;e--;)f[e]&&f[e].remove(!1);w(c.axes,this);w(c[d],this);x(c.options[d])?c.options[d].splice(this.options.index,1):delete c.options[d];t(c[d],function(a,b){a.options.index=a.userOptions.index=b;});this.destroy();c.isDirtyBox=!0;b(a,!0)&&c.redraw();},setTitle:function(a,b){this.update({title:a},b);},setCategories:function(a,b){this.update({categories:a},b);}});})(K);(function(a){var C=a.color,F=a.each,D=a.map,r=a.pick,g=a.Series,
    e=a.seriesType;e("area","line",{softThreshold:!1,threshold:0},{singleStacks:!1,getStackPoints:function(e){var g=[],l=[],t=this.xAxis,c=this.yAxis,d=c.stacks[this.stackKey],k={},x=this.index,p=c.series,f=p.length,b,n=r(c.options.reversedStacks,!0)?1:-1,z;e=e||this.points;if(this.options.stacking){for(z=0;z<e.length;z++)e[z].leftNull=e[z].rightNull=null,k[e[z].x]=e[z];a.objectEach(d,function(a,b){null!==a.total&&l.push(b);});l.sort(function(a,b){return a-b});b=D(p,function(){return this.visible});F(l,
    function(a,e){var q=0,p,r;if(k[a]&&!k[a].isNull)g.push(k[a]),F([-1,1],function(c){var g=1===c?"rightNull":"leftNull",q=0,m=d[l[e+c]];if(m)for(z=x;0<=z&&z<f;)p=m.points[z],p||(z===x?k[a][g]=!0:b[z]&&(r=d[a].points[z])&&(q-=r[1]-r[0])),z+=n;k[a][1===c?"rightCliff":"leftCliff"]=q;});else{for(z=x;0<=z&&z<f;){if(p=d[a].points[z]){q=p[1];break}z+=n;}q=c.translate(q,0,1,0,1);g.push({isNull:!0,plotX:t.translate(a,0,0,0,1),x:a,plotY:q,yBottom:q});}});}return g},getGraphPath:function(a){var e=g.prototype.getGraphPath,
    l=this.options,t=l.stacking,c=this.yAxis,d,k,x=[],p=[],f=this.index,b,n=c.stacks[this.stackKey],z=l.threshold,J=c.getThreshold(l.threshold),q,l=l.connectNulls||"percent"===t,L=function(d,e,g){var q=a[d];d=t&&n[q.x].points[f];var k=q[g+"Null"]||0;g=q[g+"Cliff"]||0;var m,l,q=!0;g||k?(m=(k?d[0]:d[1])+g,l=d[0]+g,q=!!k):!t&&a[e]&&a[e].isNull&&(m=l=z);void 0!==m&&(p.push({plotX:b,plotY:null===m?J:c.getThreshold(m),isNull:q,isCliff:!0}),x.push({plotX:b,plotY:null===l?J:c.getThreshold(l),doCurve:!1}));};a=
    a||this.points;t&&(a=this.getStackPoints(a));for(d=0;d<a.length;d++)if(k=a[d].isNull,b=r(a[d].rectPlotX,a[d].plotX),q=r(a[d].yBottom,J),!k||l)l||L(d,d-1,"left"),k&&!t&&l||(p.push(a[d]),x.push({x:d,plotX:b,plotY:q})),l||L(d,d+1,"right");d=e.call(this,p,!0,!0);x.reversed=!0;k=e.call(this,x,!0,!0);k.length&&(k[0]="L");k=d.concat(k);e=e.call(this,p,!1,l);k.xMap=d.xMap;this.areaPath=k;return e},drawGraph:function(){this.areaPath=[];g.prototype.drawGraph.apply(this);var a=this,e=this.areaPath,l=this.options,
    u=[["area","highcharts-area",this.color,l.fillColor]];F(this.zones,function(c,d){u.push(["zone-area-"+d,"highcharts-area highcharts-zone-area-"+d+" "+c.className,c.color||a.color,c.fillColor||l.fillColor]);});F(u,function(c){var d=c[0],g=a[d];g?(g.endX=a.preventGraphAnimation?null:e.xMap,g.animate({d:e})):(g=a[d]=a.chart.renderer.path(e).addClass(c[1]).attr({fill:r(c[3],C(c[2]).setOpacity(r(l.fillOpacity,.75)).get()),zIndex:0}).add(a.group),g.isArea=!0);g.startX=e.xMap;g.shiftUnit=l.step?2:1;});},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle});})(K);
    (function(a){var C=a.pick;a=a.seriesType;a("spline","line",{},{getPointSpline:function(a,D,r){var g=D.plotX,e=D.plotY,t=a[r-1];r=a[r+1];var w,l,u,c;if(t&&!t.isNull&&!1!==t.doCurve&&!D.isCliff&&r&&!r.isNull&&!1!==r.doCurve&&!D.isCliff){a=t.plotY;u=r.plotX;r=r.plotY;var d=0;w=(1.5*g+t.plotX)/2.5;l=(1.5*e+a)/2.5;u=(1.5*g+u)/2.5;c=(1.5*e+r)/2.5;u!==w&&(d=(c-l)*(u-g)/(u-w)+e-c);l+=d;c+=d;l>a&&l>e?(l=Math.max(a,e),c=2*e-l):l<a&&l<e&&(l=Math.min(a,e),c=2*e-l);c>r&&c>e?(c=Math.max(r,e),l=2*e-c):c<r&&c<e&&
    (c=Math.min(r,e),l=2*e-c);D.rightContX=u;D.rightContY=c;}D=["C",C(t.rightContX,t.plotX),C(t.rightContY,t.plotY),C(w,g),C(l,e),g,e];t.rightContX=t.rightContY=null;return D}});})(K);(function(a){var C=a.seriesTypes.area.prototype,F=a.seriesType;F("areaspline","spline",a.defaultPlotOptions.area,{getStackPoints:C.getStackPoints,getGraphPath:C.getGraphPath,drawGraph:C.drawGraph,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle});})(K);(function(a){var C=a.animObject,F=a.color,D=a.each,r=a.extend,g=a.isNumber,
    e=a.merge,t=a.pick,w=a.Series,l=a.seriesType,u=a.svg;l("column","line",{borderRadius:0,crisp:!0,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,brightness:.1},select:{color:"#cccccc",borderColor:"#000000"}},dataLabels:{align:null,verticalAlign:null,y:null},softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,borderColor:"#ffffff"},{cropShoulder:0,directTouch:!0,trackerGroups:["group","dataLabelsGroup"],
    negStacks:!0,init:function(){w.prototype.init.apply(this,arguments);var a=this,d=a.chart;d.hasRendered&&D(d.series,function(c){c.type===a.type&&(c.isDirty=!0);});},getColumnMetrics:function(){var a=this,d=a.options,e=a.xAxis,g=a.yAxis,p=e.reversed,f,b={},n=0;!1===d.grouping?n=1:D(a.chart.series,function(c){var d=c.options,e=c.yAxis,q;c.type!==a.type||!c.visible&&a.chart.options.chart.ignoreHiddenSeries||g.len!==e.len||g.pos!==e.pos||(d.stacking?(f=c.stackKey,void 0===b[f]&&(b[f]=n++),q=b[f]):!1!==d.grouping&&
    (q=n++),c.columnIndex=q);});var l=Math.min(Math.abs(e.transA)*(e.ordinalSlope||d.pointRange||e.closestPointRange||e.tickInterval||1),e.len),r=l*d.groupPadding,q=(l-2*r)/(n||1),d=Math.min(d.maxPointWidth||e.len,t(d.pointWidth,q*(1-2*d.pointPadding)));a.columnMetrics={width:d,offset:(q-d)/2+(r+((a.columnIndex||0)+(p?1:0))*q-l/2)*(p?-1:1)};return a.columnMetrics},crispCol:function(a,d,e,g){var c=this.chart,f=this.borderWidth,b=-(f%2?.5:0),f=f%2?.5:1;c.inverted&&c.renderer.isVML&&(f+=1);this.options.crisp&&
    (e=Math.round(a+e)+b,a=Math.round(a)+b,e-=a);g=Math.round(d+g)+f;b=.5>=Math.abs(d)&&.5<g;d=Math.round(d)+f;g-=d;b&&g&&(--d,g+=1);return {x:a,y:d,width:e,height:g}},translate:function(){var a=this,d=a.chart,e=a.options,g=a.dense=2>a.closestPointRange*a.xAxis.transA,g=a.borderWidth=t(e.borderWidth,g?0:1),p=a.yAxis,f=e.threshold,b=a.translatedThreshold=p.getThreshold(f),n=t(e.minPointLength,5),l=a.getColumnMetrics(),r=l.width,q=a.barW=Math.max(r,1+2*g),u=a.pointXOffset=l.offset;d.inverted&&(b-=.5);e.pointPadding&&
    (q=Math.ceil(q));w.prototype.translate.apply(a);D(a.points,function(c){var e=t(c.yBottom,b),g=999+Math.abs(e),g=Math.min(Math.max(-g,c.plotY),p.len+g),k=c.plotX+u,l=q,x=Math.min(g,e),B,h=Math.max(g,e)-x;n&&Math.abs(h)<n&&(h=n,B=!p.reversed&&!c.negative||p.reversed&&c.negative,c.y===f&&a.dataMax<=f&&p.min<f&&(B=!B),x=Math.abs(x-b)>n?e-n:b-(B?n:0));c.barX=k;c.pointWidth=r;c.tooltipPos=d.inverted?[p.len+p.pos-d.plotLeft-g,a.xAxis.len-k-l/2,h]:[k+l/2,g+p.pos-d.plotTop,h];c.shapeType="rect";c.shapeArgs=
    a.crispCol.apply(a,c.isNull?[k,b,l,0]:[k,x,l,h]);});},getSymbol:a.noop,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,drawGraph:function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data");},pointAttribs:function(a,d){var c=this.options,g,p=this.pointAttrToOptions||{};g=p.stroke||"borderColor";var f=p["stroke-width"]||"borderWidth",b=a&&a.color||this.color,n=a&&a[g]||c[g]||this.color||b,l=a&&a[f]||c[f]||this[f]||0,p=c.dashStyle;a&&this.zones.length&&(b=a.getZone(),b=a.options.color||
    b&&b.color||this.color);d&&(a=e(c.states[d],a.options.states&&a.options.states[d]||{}),d=a.brightness,b=a.color||void 0!==d&&F(b).brighten(a.brightness).get()||b,n=a[g]||n,l=a[f]||l,p=a.dashStyle||p);g={fill:b,stroke:n,"stroke-width":l};p&&(g.dashstyle=p);return g},drawPoints:function(){var a=this,d=this.chart,k=a.options,l=d.renderer,p=k.animationLimit||250,f;D(a.points,function(b){var c=b.graphic,t=c&&d.pointCount<p?"animate":"attr";if(g(b.plotY)&&null!==b.y){f=b.shapeArgs;if(c)c[t](e(f));else b.graphic=
    c=l[b.shapeType](f).add(b.group||a.group);k.borderRadius&&c.attr({r:k.borderRadius});c[t](a.pointAttribs(b,b.selected&&"select")).shadow(k.shadow,null,k.stacking&&!k.borderRadius);c.addClass(b.getClassName(),!0);}else c&&(b.graphic=c.destroy());});},animate:function(a){var c=this,e=this.yAxis,g=c.options,p=this.chart.inverted,f={},b=p?"translateX":"translateY",n;u&&(a?(f.scaleY=.001,a=Math.min(e.pos+e.len,Math.max(e.pos,e.toPixels(g.threshold))),p?f.translateX=a-e.len:f.translateY=a,c.group.attr(f)):
    (n=c.group.attr(b),c.group.animate({scaleY:1},r(C(c.options.animation),{step:function(a,d){f[b]=n+d.pos*(e.pos-n);c.group.attr(f);}})),c.animate=null));},remove:function(){var a=this,d=a.chart;d.hasRendered&&D(d.series,function(c){c.type===a.type&&(c.isDirty=!0);});w.prototype.remove.apply(a,arguments);}});})(K);(function(a){a=a.seriesType;a("bar","column",null,{inverted:!0});})(K);(function(a){var C=a.Series;a=a.seriesType;a("scatter","line",{lineWidth:0,findNearestPointBy:"xy",marker:{enabled:!0},tooltip:{headerFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cspan style\x3d"font-size: 0.85em"\x3e {series.name}\x3c/span\x3e\x3cbr/\x3e',
    pointFormat:"x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e"}},{sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,drawGraph:function(){this.options.lineWidth&&C.prototype.drawGraph.call(this);}});})(K);(function(a){var C=a.deg2rad,F=a.isNumber,D=a.pick,r=a.relativeLength;a.CenteredSeriesMixin={getCenter:function(){var a=this.options,e=this.chart,t=2*(a.slicedOffset||0),w=e.plotWidth-2*t,
    e=e.plotHeight-2*t,l=a.center,l=[D(l[0],"50%"),D(l[1],"50%"),a.size||"100%",a.innerSize||0],u=Math.min(w,e),c,d;for(c=0;4>c;++c)d=l[c],a=2>c||2===c&&/%$/.test(d),l[c]=r(d,[w,e,u,l[2]][c])+(a?t:0);l[3]>l[2]&&(l[3]=l[2]);return l},getStartAndEndRadians:function(a,e){a=F(a)?a:0;e=F(e)&&e>a&&360>e-a?e:a+360;return {start:C*(a+-90),end:C*(e+-90)}}};})(K);(function(a){var C=a.addEvent,F=a.CenteredSeriesMixin,D=a.defined,r=a.each,g=a.extend,e=F.getStartAndEndRadians,t=a.inArray,w=a.noop,l=a.pick,u=a.Point,
    c=a.Series,d=a.seriesType,k=a.setAnimation;d("pie","line",{center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{distance:30,enabled:!0,formatter:function(){return this.point.isNull?void 0:this.point.name},x:0},ignoreHiddenPoint:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},borderColor:"#ffffff",borderWidth:1,states:{hover:{brightness:.1}}},{isCartesian:!1,requireSorting:!1,directTouch:!0,noSharedTooltip:!0,trackerGroups:["group",
    "dataLabelsGroup"],axisTypes:[],pointAttribs:a.seriesTypes.column.prototype.pointAttribs,animate:function(a){var c=this,d=c.points,b=c.startAngleRad;a||(r(d,function(a){var d=a.graphic,f=a.shapeArgs;d&&(d.attr({r:a.startR||c.center[3]/2,start:b,end:b}),d.animate({r:f.r,start:f.start,end:f.end},c.options.animation));}),c.animate=null);},updateTotals:function(){var a,c=0,d=this.points,b=d.length,e,g=this.options.ignoreHiddenPoint;for(a=0;a<b;a++)e=d[a],c+=g&&!e.visible?0:e.isNull?0:e.y;this.total=c;for(a=
    0;a<b;a++)e=d[a],e.percentage=0<c&&(e.visible||!g)?e.y/c*100:0,e.total=c;},generatePoints:function(){c.prototype.generatePoints.call(this);this.updateTotals();},translate:function(a){this.generatePoints();var c=0,d=this.options,b=d.slicedOffset,g=b+(d.borderWidth||0),k,t,q,r=e(d.startAngle,d.endAngle),u=this.startAngleRad=r.start,r=(this.endAngleRad=r.end)-u,w=this.points,m,x=d.dataLabels.distance,d=d.ignoreHiddenPoint,A,C=w.length,G;a||(this.center=a=this.getCenter());this.getX=function(b,c,d){q=Math.asin(Math.min((b-
    a[1])/(a[2]/2+d.labelDistance),1));return a[0]+(c?-1:1)*Math.cos(q)*(a[2]/2+d.labelDistance)};for(A=0;A<C;A++){G=w[A];G.labelDistance=l(G.options.dataLabels&&G.options.dataLabels.distance,x);this.maxLabelDistance=Math.max(this.maxLabelDistance||0,G.labelDistance);k=u+c*r;if(!d||G.visible)c+=G.percentage/100;t=u+c*r;G.shapeType="arc";G.shapeArgs={x:a[0],y:a[1],r:a[2]/2,innerR:a[3]/2,start:Math.round(1E3*k)/1E3,end:Math.round(1E3*t)/1E3};q=(t+k)/2;q>1.5*Math.PI?q-=2*Math.PI:q<-Math.PI/2&&(q+=2*Math.PI);
    G.slicedTranslation={translateX:Math.round(Math.cos(q)*b),translateY:Math.round(Math.sin(q)*b)};t=Math.cos(q)*a[2]/2;m=Math.sin(q)*a[2]/2;G.tooltipPos=[a[0]+.7*t,a[1]+.7*m];G.half=q<-Math.PI/2||q>Math.PI/2?1:0;G.angle=q;k=Math.min(g,G.labelDistance/5);G.labelPos=[a[0]+t+Math.cos(q)*G.labelDistance,a[1]+m+Math.sin(q)*G.labelDistance,a[0]+t+Math.cos(q)*k,a[1]+m+Math.sin(q)*k,a[0]+t,a[1]+m,0>G.labelDistance?"center":G.half?"right":"left",q];}},drawGraph:null,drawPoints:function(){var a=this,c=a.chart.renderer,
    d,b,e,k,l=a.options.shadow;l&&!a.shadowGroup&&(a.shadowGroup=c.g("shadow").add(a.group));r(a.points,function(f){b=f.graphic;if(f.isNull)b&&(f.graphic=b.destroy());else{k=f.shapeArgs;d=f.getTranslate();var q=f.shadowGroup;l&&!q&&(q=f.shadowGroup=c.g("shadow").add(a.shadowGroup));q&&q.attr(d);e=a.pointAttribs(f,f.selected&&"select");b?b.setRadialReference(a.center).attr(e).animate(g(k,d)):(f.graphic=b=c[f.shapeType](k).setRadialReference(a.center).attr(d).add(a.group),f.visible||b.attr({visibility:"hidden"}),
    b.attr(e).attr({"stroke-linejoin":"round"}).shadow(l,q));b.addClass(f.getClassName());}});},searchPoint:w,sortByAngle:function(a,c){a.sort(function(a,b){return void 0!==a.angle&&(b.angle-a.angle)*c});},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,getCenter:F.getCenter,getSymbol:w},{init:function(){u.prototype.init.apply(this,arguments);var a=this,c;a.name=l(a.name,"Slice");c=function(c){a.slice("select"===c.type);};C(a,"select",c);C(a,"unselect",c);return a},isValid:function(){return a.isNumber(this.y,
    !0)&&0<=this.y},setVisible:function(a,c){var d=this,b=d.series,e=b.chart,g=b.options.ignoreHiddenPoint;c=l(c,g);a!==d.visible&&(d.visible=d.options.visible=a=void 0===a?!d.visible:a,b.options.data[t(d,b.data)]=d.options,r(["graphic","dataLabel","connector","shadowGroup"],function(b){if(d[b])d[b][a?"show":"hide"](!0);}),d.legendItem&&e.legend.colorizeItem(d,a),a||"hover"!==d.state||d.setState(""),g&&(b.isDirty=!0),c&&e.redraw());},slice:function(a,c,d){var b=this.series;k(d,b.chart);l(c,!0);this.sliced=
    this.options.sliced=D(a)?a:!this.sliced;b.options.data[t(this,b.data)]=this.options;this.graphic.animate(this.getTranslate());this.shadowGroup&&this.shadowGroup.animate(this.getTranslate());},getTranslate:function(){return this.sliced?this.slicedTranslation:{translateX:0,translateY:0}},haloPath:function(a){var c=this.shapeArgs;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(c.x,c.y,c.r+a,c.r+a,{innerR:this.shapeArgs.r-1,start:c.start,end:c.end})}});})(K);(function(a){var C=
    a.addEvent,F=a.arrayMax,D=a.defined,r=a.each,g=a.extend,e=a.format,t=a.map,w=a.merge,l=a.noop,u=a.pick,c=a.relativeLength,d=a.Series,k=a.seriesTypes,x=a.some,p=a.stableSort;a.distribute=function(c,b,d){function e(a,b){return a.target-b.target}var f,g=!0,k=c,l=[],n;n=0;var m=k.reducedLen||b;for(f=c.length;f--;)n+=c[f].size;if(n>m){p(c,function(a,b){return (b.rank||0)-(a.rank||0)});for(n=f=0;n<=m;)n+=c[f].size,f++;l=c.splice(f-1,c.length);}p(c,e);for(c=t(c,function(a){return {size:a.size,targets:[a.target],
    align:u(a.align,.5)}});g;){for(f=c.length;f--;)g=c[f],n=(Math.min.apply(0,g.targets)+Math.max.apply(0,g.targets))/2,g.pos=Math.min(Math.max(0,n-g.size*g.align),b-g.size);f=c.length;for(g=!1;f--;)0<f&&c[f-1].pos+c[f-1].size>c[f].pos&&(c[f-1].size+=c[f].size,c[f-1].targets=c[f-1].targets.concat(c[f].targets),c[f-1].align=.5,c[f-1].pos+c[f-1].size>b&&(c[f-1].pos=b-c[f-1].size),c.splice(f,1),g=!0);}k.push.apply(k,l);f=0;x(c,function(c){var e=0;if(x(c.targets,function(){k[f].pos=c.pos+e;if(Math.abs(k[f].pos-
    k[f].target)>d)return r(k.slice(0,f+1),function(a){delete a.pos;}),k.reducedLen=(k.reducedLen||b)-.1*b,k.reducedLen>.1*b&&a.distribute(k,b,d),!0;e+=k[f].size;f++;}))return !0});p(k,e);};d.prototype.drawDataLabels=function(){function c(a,b){var c=b.filter;return c?(b=c.operator,a=a[c.property],c=c.value,"\x3e"===b&&a>c||"\x3c"===b&&a<c||"\x3e\x3d"===b&&a>=c||"\x3c\x3d"===b&&a<=c||"\x3d\x3d"===b&&a==c||"\x3d\x3d\x3d"===b&&a===c?!0:!1):!0}var b=this,d=b.chart,g=b.options,k=g.dataLabels,q=b.points,l,p,t=
    b.hasRendered||0,m,x,A=u(k.defer,!!g.animation),F=d.renderer;if(k.enabled||b._hasPointLabels)b.dlProcessOptions&&b.dlProcessOptions(k),x=b.plotGroup("dataLabelsGroup","data-labels",A&&!t?"hidden":"visible",k.zIndex||6),A&&(x.attr({opacity:+t}),t||C(b,"afterAnimate",function(){b.visible&&x.show(!0);x[g.animation?"animate":"attr"]({opacity:1},{duration:200});})),p=k,r(q,function(f){var h,q=f.dataLabel,n,t,r=f.connector,B=!q,z;l=f.dlOptions||f.options&&f.options.dataLabels;(h=u(l&&l.enabled,p.enabled)&&
    !f.isNull)&&(h=!0===c(f,l||k));h&&(k=w(p,l),n=f.getLabelConfig(),z=k[f.formatPrefix+"Format"]||k.format,m=D(z)?e(z,n,d.time):(k[f.formatPrefix+"Formatter"]||k.formatter).call(n,k),z=k.style,n=k.rotation,z.color=u(k.color,z.color,b.color,"#000000"),"contrast"===z.color&&(f.contrastColor=F.getContrast(f.color||b.color),z.color=k.inside||0>u(f.labelDistance,k.distance)||g.stacking?f.contrastColor:"#000000"),g.cursor&&(z.cursor=g.cursor),t={fill:k.backgroundColor,stroke:k.borderColor,"stroke-width":k.borderWidth,
    r:k.borderRadius||0,rotation:n,padding:k.padding,zIndex:1},a.objectEach(t,function(a,b){void 0===a&&delete t[b];}));!q||h&&D(m)?h&&D(m)&&(q?t.text=m:(q=f.dataLabel=n?F.text(m,0,-9999).addClass("highcharts-data-label"):F.label(m,0,-9999,k.shape,null,null,k.useHTML,null,"data-label"),q.addClass(" highcharts-data-label-color-"+f.colorIndex+" "+(k.className||"")+(k.useHTML?"highcharts-tracker":""))),q.attr(t),q.css(z).shadow(k.shadow),q.added||q.add(x),b.alignDataLabel(f,q,k,null,B)):(f.dataLabel=q=q.destroy(),
    r&&(f.connector=r.destroy()));});a.fireEvent(this,"afterDrawDataLabels");};d.prototype.alignDataLabel=function(a,b,c,d,e){var f=this.chart,k=f.inverted,l=u(a.dlBox&&a.dlBox.centerX,a.plotX,-9999),n=u(a.plotY,-9999),m=b.getBBox(),p,t=c.rotation,r=c.align,w=this.visible&&(a.series.forceDL||f.isInsidePlot(l,Math.round(n),k)||d&&f.isInsidePlot(l,k?d.x+1:d.y+d.height-1,k)),h="justify"===u(c.overflow,"justify");if(w&&(p=c.style.fontSize,p=f.renderer.fontMetrics(p,b).b,d=g({x:k?this.yAxis.len-n:l,y:Math.round(k?
    this.xAxis.len-l:n),width:0,height:0},d),g(c,{width:m.width,height:m.height}),t?(h=!1,l=f.renderer.rotCorr(p,t),l={x:d.x+c.x+d.width/2+l.x,y:d.y+c.y+{top:0,middle:.5,bottom:1}[c.verticalAlign]*d.height},b[e?"attr":"animate"](l).attr({align:r}),n=(t+720)%360,n=180<n&&360>n,"left"===r?l.y-=n?m.height:0:"center"===r?(l.x-=m.width/2,l.y-=m.height/2):"right"===r&&(l.x-=m.width,l.y-=n?0:m.height),b.placed=!0,b.alignAttr=l):(b.align(c,null,d),l=b.alignAttr),h?a.isLabelJustified=this.justifyDataLabel(b,c,
    l,m,d,e):u(c.crop,!0)&&(w=f.isInsidePlot(l.x,l.y)&&f.isInsidePlot(l.x+m.width,l.y+m.height)),c.shape&&!t))b[e?"attr":"animate"]({anchorX:k?f.plotWidth-a.plotY:a.plotX,anchorY:k?f.plotHeight-a.plotX:a.plotY});w||(b.attr({y:-9999}),b.placed=!1);};d.prototype.justifyDataLabel=function(a,b,c,d,e,g){var f=this.chart,q=b.align,k=b.verticalAlign,m,l,n=a.box?0:a.padding||0;m=c.x+n;0>m&&("right"===q?b.align="left":b.x=-m,l=!0);m=c.x+d.width-n;m>f.plotWidth&&("left"===q?b.align="right":b.x=f.plotWidth-m,l=!0);
    m=c.y+n;0>m&&("bottom"===k?b.verticalAlign="top":b.y=-m,l=!0);m=c.y+d.height-n;m>f.plotHeight&&("top"===k?b.verticalAlign="bottom":b.y=f.plotHeight-m,l=!0);l&&(a.placed=!g,a.align(b,null,e));return l};k.pie&&(k.pie.prototype.drawDataLabels=function(){var c=this,b=c.data,e,g=c.chart,k=c.options.dataLabels,q=u(k.connectorPadding,10),l=u(k.connectorWidth,1),p=g.plotWidth,t=g.plotHeight,m=Math.round(g.chartWidth/3),w,x=c.center,C=x[2]/2,G=x[1],h,v,K,P,I=[[],[]],O,N,y,R,S=[0,0,0,0];c.visible&&(k.enabled||
    c._hasPointLabels)&&(r(b,function(a){a.dataLabel&&a.visible&&a.dataLabel.shortened&&(a.dataLabel.attr({width:"auto"}).css({width:"auto",textOverflow:"clip"}),a.dataLabel.shortened=!1);}),d.prototype.drawDataLabels.apply(c),r(b,function(a){a.dataLabel&&a.visible&&(I[a.half].push(a),a.dataLabel._pos=null,!D(k.style.width)&&!D(a.options.dataLabels&&a.options.dataLabels.style&&a.options.dataLabels.style.width)&&a.dataLabel.getBBox().width>m&&(a.dataLabel.css({width:.7*m}),a.dataLabel.shortened=!0));}),
    r(I,function(b,d){var f,m,l=b.length,n=[],w;if(l)for(c.sortByAngle(b,d-.5),0<c.maxLabelDistance&&(f=Math.max(0,G-C-c.maxLabelDistance),m=Math.min(G+C+c.maxLabelDistance,g.plotHeight),r(b,function(a){0<a.labelDistance&&a.dataLabel&&(a.top=Math.max(0,G-C-a.labelDistance),a.bottom=Math.min(G+C+a.labelDistance,g.plotHeight),w=a.dataLabel.getBBox().height||21,a.positionsIndex=n.push({target:a.labelPos[1]-a.top+w/2,size:w,rank:a.y})-1);}),f=m+w-f,a.distribute(n,f,f/5)),R=0;R<l;R++)e=b[R],m=e.positionsIndex,
    K=e.labelPos,h=e.dataLabel,y=!1===e.visible?"hidden":"inherit",N=f=K[1],n&&D(n[m])&&(void 0===n[m].pos?y="hidden":(P=n[m].size,N=e.top+n[m].pos)),delete e.positionIndex,O=k.justify?x[0]+(d?-1:1)*(C+e.labelDistance):c.getX(N<e.top+2||N>e.bottom-2?f:N,d,e),h._attr={visibility:y,align:K[6]},h._pos={x:O+k.x+({left:q,right:-q}[K[6]]||0),y:N+k.y-10},K.x=O,K.y=N,u(k.crop,!0)&&(v=h.getBBox().width,f=null,O-v<q&&1===d?(f=Math.round(v-O+q),S[3]=Math.max(f,S[3])):O+v>p-q&&0===d&&(f=Math.round(O+v-p+q),S[1]=
    Math.max(f,S[1])),0>N-P/2?S[0]=Math.max(Math.round(-N+P/2),S[0]):N+P/2>t&&(S[2]=Math.max(Math.round(N+P/2-t),S[2])),h.sideOverflow=f);}),0===F(S)||this.verifyDataLabelOverflow(S))&&(this.placeDataLabels(),l&&r(this.points,function(a){var b;w=a.connector;if((h=a.dataLabel)&&h._pos&&a.visible&&0<a.labelDistance){y=h._attr.visibility;if(b=!w)a.connector=w=g.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-"+a.colorIndex+(a.className?" "+a.className:"")).add(c.dataLabelsGroup),
    w.attr({"stroke-width":l,stroke:k.connectorColor||a.color||"#666666"});w[b?"attr":"animate"]({d:c.connectorPath(a.labelPos)});w.attr("visibility",y);}else w&&(a.connector=w.destroy());}));},k.pie.prototype.connectorPath=function(a){var b=a.x,c=a.y;return u(this.options.dataLabels.softConnector,!0)?["M",b+("left"===a[6]?5:-5),c,"C",b,c,2*a[2]-a[4],2*a[3]-a[5],a[2],a[3],"L",a[4],a[5]]:["M",b+("left"===a[6]?5:-5),c,"L",a[2],a[3],"L",a[4],a[5]]},k.pie.prototype.placeDataLabels=function(){r(this.points,function(a){var b=
    a.dataLabel;b&&a.visible&&((a=b._pos)?(b.sideOverflow&&(b._attr.width=b.getBBox().width-b.sideOverflow,b.css({width:b._attr.width+"px",textOverflow:this.options.dataLabels.style.textOverflow||"ellipsis"}),b.shortened=!0),b.attr(b._attr),b[b.moved?"animate":"attr"](a),b.moved=!0):b&&b.attr({y:-9999}));},this);},k.pie.prototype.alignDataLabel=l,k.pie.prototype.verifyDataLabelOverflow=function(a){var b=this.center,d=this.options,e=d.center,f=d.minSize||80,g,k=null!==d.size;k||(null!==e[0]?g=Math.max(b[2]-
    Math.max(a[1],a[3]),f):(g=Math.max(b[2]-a[1]-a[3],f),b[0]+=(a[3]-a[1])/2),null!==e[1]?g=Math.max(Math.min(g,b[2]-Math.max(a[0],a[2])),f):(g=Math.max(Math.min(g,b[2]-a[0]-a[2]),f),b[1]+=(a[0]-a[2])/2),g<b[2]?(b[2]=g,b[3]=Math.min(c(d.innerSize||0,g),g),this.translate(b),this.drawDataLabels&&this.drawDataLabels()):k=!0);return k});k.column&&(k.column.prototype.alignDataLabel=function(a,b,c,e,g){var f=this.chart.inverted,k=a.series,l=a.dlBox||a.shapeArgs,p=u(a.below,a.plotY>u(this.translatedThreshold,
    k.yAxis.len)),m=u(c.inside,!!this.options.stacking);l&&(e=w(l),0>e.y&&(e.height+=e.y,e.y=0),l=e.y+e.height-k.yAxis.len,0<l&&(e.height-=l),f&&(e={x:k.yAxis.len-e.y-e.height,y:k.xAxis.len-e.x-e.width,width:e.height,height:e.width}),m||(f?(e.x+=p?0:e.width,e.width=0):(e.y+=p?e.height:0,e.height=0)));c.align=u(c.align,!f||m?"center":p?"right":"left");c.verticalAlign=u(c.verticalAlign,f||m?"middle":p?"top":"bottom");d.prototype.alignDataLabel.call(this,a,b,c,e,g);a.isLabelJustified&&a.contrastColor&&a.dataLabel.css({color:a.contrastColor});});})(K);
    (function(a){var C=a.Chart,F=a.each,D=a.objectEach,r=a.pick;a=a.addEvent;a(C,"render",function(){var a=[];F(this.labelCollectors||[],function(e){a=a.concat(e());});F(this.yAxis||[],function(e){e.options.stackLabels&&!e.options.stackLabels.allowOverlap&&D(e.stacks,function(e){D(e,function(e){a.push(e.label);});});});F(this.series||[],function(e){var g=e.options.dataLabels,w=e.dataLabelCollections||["dataLabel"];(g.enabled||e._hasPointLabels)&&!g.allowOverlap&&e.visible&&F(w,function(g){F(e.points,function(e){e[g]&&
    (e[g].labelrank=r(e.labelrank,e.shapeArgs&&e.shapeArgs.height),a.push(e[g]));});});});this.hideOverlappingLabels(a);});C.prototype.hideOverlappingLabels=function(a){var e=a.length,g,r,l,u,c,d,k,x,p,f=function(a,c,d,e,f,g,k,l){return !(f>a+d||f+k<a||g>c+e||g+l<c)};for(r=0;r<e;r++)if(g=a[r])g.oldOpacity=g.opacity,g.newOpacity=1,g.width||(l=g.getBBox(),g.width=l.width,g.height=l.height);a.sort(function(a,c){return (c.labelrank||0)-(a.labelrank||0)});for(r=0;r<e;r++)for(l=a[r],g=r+1;g<e;++g)if(u=a[g],l&&u&&
    l!==u&&l.placed&&u.placed&&0!==l.newOpacity&&0!==u.newOpacity&&(c=l.alignAttr,d=u.alignAttr,k=l.parentGroup,x=u.parentGroup,p=2*(l.box?0:l.padding||0),c=f(c.x+k.translateX,c.y+k.translateY,l.width-p,l.height-p,d.x+x.translateX,d.y+x.translateY,u.width-p,u.height-p)))(l.labelrank<u.labelrank?l:u).newOpacity=0;F(a,function(a){var b,c;a&&(c=a.newOpacity,a.oldOpacity!==c&&a.placed&&(c?a.show(!0):b=function(){a.hide();},a.alignAttr.opacity=c,a[a.isOld?"animate":"attr"](a.alignAttr,null,b)),a.isOld=!0);});};})(K);
    (function(a){var C=a.addEvent,F=a.Chart,D=a.createElement,r=a.css,g=a.defaultOptions,e=a.defaultPlotOptions,t=a.each,w=a.extend,l=a.fireEvent,u=a.hasTouch,c=a.inArray,d=a.isObject,k=a.Legend,x=a.merge,p=a.pick,f=a.Point,b=a.Series,n=a.seriesTypes,z=a.svg,J;J=a.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart.pointer,c=function(a){var c=b.getPointFromEvent(a);void 0!==c&&(b.isDirectTouch=!0,c.onMouseOver(a));};t(a.points,function(a){a.graphic&&(a.graphic.element.point=a);a.dataLabel&&
    (a.dataLabel.div?a.dataLabel.div.point=a:a.dataLabel.element.point=a);});a._hasTracking||(t(a.trackerGroups,function(d){if(a[d]){a[d].addClass("highcharts-tracker").on("mouseover",c).on("mouseout",function(a){b.onTrackerMouseOut(a);});if(u)a[d].on("touchstart",c);a.options.cursor&&a[d].css(r).css({cursor:a.options.cursor});}}),a._hasTracking=!0);l(this,"afterDrawTracker");},drawTrackerGraph:function(){var a=this,b=a.options,c=b.trackByArea,d=[].concat(c?a.areaPath:a.graphPath),e=d.length,f=a.chart,g=
    f.pointer,k=f.renderer,p=f.options.tooltip.snap,h=a.tracker,n,r=function(){if(f.hoverSeries!==a)a.onMouseOver();},w="rgba(192,192,192,"+(z?.0001:.002)+")";if(e&&!c)for(n=e+1;n--;)"M"===d[n]&&d.splice(n+1,0,d[n+1]-p,d[n+2],"L"),(n&&"M"===d[n]||n===e)&&d.splice(n,0,"L",d[n-2]+p,d[n-1]);h?h.attr({d:d}):a.graph&&(a.tracker=k.path(d).attr({"stroke-linejoin":"round",visibility:a.visible?"visible":"hidden",stroke:w,fill:c?w:"none","stroke-width":a.graph.strokeWidth()+(c?0:2*p),zIndex:2}).add(a.group),t([a.tracker,
    a.markerGroup],function(a){a.addClass("highcharts-tracker").on("mouseover",r).on("mouseout",function(a){g.onTrackerMouseOut(a);});b.cursor&&a.css({cursor:b.cursor});if(u)a.on("touchstart",r);}));l(this,"afterDrawTracker");}};n.column&&(n.column.prototype.drawTracker=J.drawTrackerPoint);n.pie&&(n.pie.prototype.drawTracker=J.drawTrackerPoint);n.scatter&&(n.scatter.prototype.drawTracker=J.drawTrackerPoint);w(k.prototype,{setItemEvents:function(a,b,c){var d=this,e=d.chart.renderer.boxWrapper,g="highcharts-legend-"+
    (a instanceof f?"point":"series")+"-active";(c?b:a.legendGroup).on("mouseover",function(){a.setState("hover");e.addClass(g);b.css(d.options.itemHoverStyle);}).on("mouseout",function(){b.css(x(a.visible?d.itemStyle:d.itemHiddenStyle));e.removeClass(g);a.setState();}).on("click",function(b){var c=function(){a.setVisible&&a.setVisible();};e.removeClass(g);b={browserEvent:b};a.firePointEvent?a.firePointEvent("legendItemClick",b,c):l(a,"legendItemClick",b,c);});},createCheckboxForItem:function(a){a.checkbox=
    D("input",{type:"checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);C(a.checkbox,"click",function(b){l(a.series||a,"checkboxClick",{checked:b.target.checked,item:a},function(){a.select();});});}});g.legend.itemStyle.cursor="pointer";w(F.prototype,{showResetZoom:function(){function a(){b.zoomOut();}var b=this,c=g.lang,d=b.options.chart.resetZoomButton,e=d.theme,f=e.states,k="chart"===d.relativeTo?null:"plotBox";l(this,"beforeShowResetZoom",null,
    function(){b.resetZoomButton=b.renderer.button(c.resetZoom,null,null,a,e,f&&f.hover).attr({align:d.position.align,title:c.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(d.position,!1,k);});},zoomOut:function(){l(this,"selection",{resetSelection:!0},this.zoom);},zoom:function(a){var b,c=this.pointer,e=!1,f;!a||a.resetSelection?(t(this.axes,function(a){b=a.zoom();}),c.initiated=!1):t(a.xAxis.concat(a.yAxis),function(a){var d=a.axis;c[d.isXAxis?"zoomX":"zoomY"]&&(b=d.zoom(a.min,a.max),d.displayBtn&&
    (e=!0));});f=this.resetZoomButton;e&&!f?this.showResetZoom():!e&&d(f)&&(this.resetZoomButton=f.destroy());b&&this.redraw(p(this.options.chart.animation,a&&a.animation,100>this.pointCount));},pan:function(a,b){var c=this,d=c.hoverPoints,e;d&&t(d,function(a){a.setState();});t("xy"===b?[1,0]:[1],function(b){b=c[b?"xAxis":"yAxis"][0];var d=b.horiz,f=a[d?"chartX":"chartY"],d=d?"mouseDownX":"mouseDownY",g=c[d],h=(b.pointRange||0)/2,k=b.reversed&&!c.inverted||!b.reversed&&c.inverted?-1:1,l=b.getExtremes(),
    m=b.toValue(g-f,!0)+h*k,k=b.toValue(g+b.len-f,!0)-h*k,q=k<m,g=q?k:m,m=q?m:k,k=Math.min(l.dataMin,h?l.min:b.toValue(b.toPixels(l.min)-b.minPixelPadding)),h=Math.max(l.dataMax,h?l.max:b.toValue(b.toPixels(l.max)+b.minPixelPadding)),q=k-g;0<q&&(m+=q,g=k);q=m-h;0<q&&(m=h,g-=q);b.series.length&&g!==l.min&&m!==l.max&&(b.setExtremes(g,m,!1,!1,{trigger:"pan"}),e=!0);c[d]=f;});e&&c.redraw(!1);r(c.container,{cursor:"move"});}});w(f.prototype,{select:function(a,b){var d=this,e=d.series,f=e.chart;a=p(a,!d.selected);
    d.firePointEvent(a?"select":"unselect",{accumulate:b},function(){d.selected=d.options.selected=a;e.options.data[c(d,e.data)]=d.options;d.setState(a&&"select");b||t(f.getSelectedPoints(),function(a){a.selected&&a!==d&&(a.selected=a.options.selected=!1,e.options.data[c(a,e.data)]=a.options,a.setState(""),a.firePointEvent("unselect"));});});},onMouseOver:function(a){var b=this.series.chart,c=b.pointer;a=a?c.normalize(a):c.getChartCoordinatesFromPoint(this,b.inverted);c.runPointActions(a,this);},onMouseOut:function(){var a=
    this.series.chart;this.firePointEvent("mouseOut");t(a.hoverPoints||[],function(a){a.setState();});a.hoverPoints=a.hoverPoint=null;},importEvents:function(){if(!this.hasImportedEvents){var b=this,c=x(b.series.options.point,b.options).events;b.events=c;a.objectEach(c,function(a,c){C(b,c,a);});this.hasImportedEvents=!0;}},setState:function(a,b){var c=Math.floor(this.plotX),d=this.plotY,f=this.series,g=f.options.states[a||"normal"]||{},k=e[f.type].marker&&f.options.marker,q=k&&!1===k.enabled,n=k&&k.states&&
    k.states[a||"normal"]||{},h=!1===n.enabled,r=f.stateMarkerGraphic,t=this.marker||{},u=f.chart,x=f.halo,z,C=k&&f.markerAttribs;a=a||"";if(!(a===this.state&&!b||this.selected&&"select"!==a||!1===g.enabled||a&&(h||q&&!1===n.enabled)||a&&t.states&&t.states[a]&&!1===t.states[a].enabled)){C&&(z=f.markerAttribs(this,a));if(this.graphic)this.state&&this.graphic.removeClass("highcharts-point-"+this.state),a&&this.graphic.addClass("highcharts-point-"+a),this.graphic.animate(f.pointAttribs(this,a),p(u.options.chart.animation,
    g.animation)),z&&this.graphic.animate(z,p(u.options.chart.animation,n.animation,k.animation)),r&&r.hide();else{if(a&&n){k=t.symbol||f.symbol;r&&r.currentSymbol!==k&&(r=r.destroy());if(r)r[b?"animate":"attr"]({x:z.x,y:z.y});else k&&(f.stateMarkerGraphic=r=u.renderer.symbol(k,z.x,z.y,z.width,z.height).add(f.markerGroup),r.currentSymbol=k);r&&r.attr(f.pointAttribs(this,a));}r&&(r[a&&u.isInsidePlot(c,d,u.inverted)?"show":"hide"](),r.element.point=this);}(c=g.halo)&&c.size?(x||(f.halo=x=u.renderer.path().add((this.graphic||
    r).parentGroup)),x.show()[b?"animate":"attr"]({d:this.haloPath(c.size)}),x.attr({"class":"highcharts-halo highcharts-color-"+p(this.colorIndex,f.colorIndex)+(this.className?" "+this.className:"")}),x.point=this,x.attr(w({fill:this.color||f.color,"fill-opacity":c.opacity,zIndex:-1},c.attributes))):x&&x.point&&x.point.haloPath&&x.animate({d:x.point.haloPath(0)},null,x.hide);this.state=a;l(this,"afterSetState");}},haloPath:function(a){return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX)-
    a,this.plotY-a,2*a,2*a)}});w(b.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&l(this,"mouseOver");this.setState("hover");a.hoverSeries=this;},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;b.hoverSeries=null;if(d)d.onMouseOut();this&&a.events.mouseOut&&l(this,"mouseOut");!c||this.stickyTracking||c.shared&&!this.noSharedTooltip||c.hide();this.setState();},setState:function(a){var b=this,
    c=b.options,d=b.graph,e=c.states,f=c.lineWidth,c=0;a=a||"";if(b.state!==a&&(t([b.group,b.markerGroup,b.dataLabelsGroup],function(c){c&&(b.state&&c.removeClass("highcharts-series-"+b.state),a&&c.addClass("highcharts-series-"+a));}),b.state=a,!e[a]||!1!==e[a].enabled)&&(a&&(f=e[a].lineWidth||f+(e[a].lineWidthPlus||0)),d&&!d.dashstyle))for(f={"stroke-width":f},d.animate(f,p(e[a||"normal"]&&e[a||"normal"].animation,b.chart.options.chart.animation));b["zone-graph-"+c];)b["zone-graph-"+c].attr(f),c+=1;},
    setVisible:function(a,b){var c=this,d=c.chart,e=c.legendItem,f,g=d.options.chart.ignoreHiddenSeries,k=c.visible;f=(c.visible=a=c.options.visible=c.userOptions.visible=void 0===a?!k:a)?"show":"hide";t(["group","dataLabelsGroup","markerGroup","tracker","tt"],function(a){if(c[a])c[a][f]();});if(d.hoverSeries===c||(d.hoverPoint&&d.hoverPoint.series)===c)c.onMouseOut();e&&d.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&t(d.series,function(a){a.options.stacking&&a.visible&&(a.isDirty=!0);});t(c.linkedSeries,
    function(b){b.setVisible(a,!1);});g&&(d.isDirtyBox=!0);!1!==b&&d.redraw();l(c,f);},show:function(){this.setVisible(!0);},hide:function(){this.setVisible(!1);},select:function(a){this.selected=a=void 0===a?!this.selected:a;this.checkbox&&(this.checkbox.checked=a);l(this,a?"select":"unselect");},drawTracker:J.drawTrackerGraph});})(K);(function(a){var C=a.Chart,F=a.each,D=a.inArray,r=a.isArray,g=a.isObject,e=a.pick,t=a.splat;C.prototype.setResponsive=function(e){var g=this.options.responsive,r=[],c=this.currentResponsive;
    g&&g.rules&&F(g.rules,function(c){void 0===c._id&&(c._id=a.uniqueKey());this.matchResponsiveRule(c,r,e);},this);var d=a.merge.apply(0,a.map(r,function(c){return a.find(g.rules,function(a){return a._id===c}).chartOptions})),r=r.toString()||void 0;r!==(c&&c.ruleIds)&&(c&&this.update(c.undoOptions,e),r?(this.currentResponsive={ruleIds:r,mergedOptions:d,undoOptions:this.currentOptions(d)},this.update(d,e)):this.currentResponsive=void 0);};C.prototype.matchResponsiveRule=function(a,g){var l=a.condition;
    (l.callback||function(){return this.chartWidth<=e(l.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=e(l.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=e(l.minWidth,0)&&this.chartHeight>=e(l.minHeight,0)}).call(this)&&g.push(a._id);};C.prototype.currentOptions=function(e){function l(c,d,e,u){var k;a.objectEach(c,function(a,b){if(!u&&-1<D(b,["series","xAxis","yAxis"]))for(a=t(a),e[b]=[],k=0;k<a.length;k++)d[b][k]&&(e[b][k]={},l(a[k],d[b][k],e[b][k],u+1));else g(a)?(e[b]=r(a)?[]:{},l(a,d[b]||{},e[b],u+1)):
    e[b]=d[b]||null;});}var u={};l(e,this.options,u,0);return u};})(K);return K});
    });

    var highstock = createCommonjsModule(function (module) {
    /*
     Highstock JS v6.1.0 (2018-04-13)

     (c) 2009-2016 Torstein Honsi

     License: www.highcharts.com/license
    */
    (function(V,L){module.exports?module.exports=V.document?L(V):L:V.Highcharts=L(V);})("undefined"!==typeof window?window:commonjsGlobal,function(V){var L=function(){var a="undefined"===typeof V?window:V,B=a.document,C=a.navigator&&a.navigator.userAgent||"",G=B&&B.createElementNS&&!!B.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,p=/(edge|msie|trident)/i.test(C)&&!a.opera,m=-1!==C.indexOf("Firefox"),g=-1!==C.indexOf("Chrome"),v=m&&4>parseInt(C.split("Firefox/")[1],
    10);return a.Highcharts?a.Highcharts.error(16,!0):{product:"Highstock",version:"6.1.0",deg2rad:2*Math.PI/360,doc:B,hasBidiBug:v,hasTouch:B&&void 0!==B.documentElement.ontouchstart,isMS:p,isWebKit:-1!==C.indexOf("AppleWebKit"),isFirefox:m,isChrome:g,isSafari:!g&&-1!==C.indexOf("Safari"),isTouchDevice:/(Mobile|Android|Windows Phone)/.test(C),SVG_NS:"http://www.w3.org/2000/svg",chartCount:0,seriesTypes:{},symbolSizes:{},svg:G,win:a,marginNames:["plotTop","marginRight","marginBottom","plotLeft"],noop:function(){},
    charts:[]}}();(function(a){a.timers=[];var B=a.charts,C=a.doc,G=a.win;a.error=function(p,m){p=a.isNumber(p)?"Highcharts error #"+p+": www.highcharts.com/errors/"+p:p;if(m)throw Error(p);G.console&&console.log(p);};a.Fx=function(a,m,g){this.options=m;this.elem=a;this.prop=g;};a.Fx.prototype={dSetter:function(){var a=this.paths[0],m=this.paths[1],g=[],v=this.now,z=a.length,u;if(1===v)g=this.toD;else if(z===m.length&&1>v)for(;z--;)u=parseFloat(a[z]),g[z]=isNaN(u)?m[z]:v*parseFloat(m[z]-u)+u;else g=m;this.elem.attr("d",
    g,null,!0);},update:function(){var a=this.elem,m=this.prop,g=this.now,v=this.options.step;if(this[m+"Setter"])this[m+"Setter"]();else a.attr?a.element&&a.attr(m,g,null,!0):a.style[m]=g+this.unit;v&&v.call(a,g,this);},run:function(p,m,g){var v=this,z=v.options,u=function(a){return u.stopped?!1:v.step(a)},y=G.requestAnimationFrame||function(a){setTimeout(a,13);},l=function(){for(var b=0;b<a.timers.length;b++)a.timers[b]()||a.timers.splice(b--,1);a.timers.length&&y(l);};p!==m||this.elem["forceAnimate:"+
    this.prop]?(this.startTime=+new Date,this.start=p,this.end=m,this.unit=g,this.now=this.start,this.pos=0,u.elem=this.elem,u.prop=this.prop,u()&&1===a.timers.push(u)&&y(l)):(delete z.curAnim[this.prop],z.complete&&0===a.keys(z.curAnim).length&&z.complete.call(this.elem));},step:function(p){var m=+new Date,g,v=this.options,z=this.elem,u=v.complete,y=v.duration,l=v.curAnim;z.attr&&!z.element?p=!1:p||m>=y+this.startTime?(this.now=this.end,this.pos=1,this.update(),g=l[this.prop]=!0,a.objectEach(l,function(a){!0!==
    a&&(g=!1);}),g&&u&&u.call(z),p=!1):(this.pos=v.easing((m-this.startTime)/y),this.now=this.start+(this.end-this.start)*this.pos,this.update(),p=!0);return p},initPath:function(p,m,g){function v(a){var b,f;for(c=a.length;c--;)b="M"===a[c]||"L"===a[c],f=/[a-zA-Z]/.test(a[c+3]),b&&f&&a.splice(c+1,0,a[c+1],a[c+2],a[c+1],a[c+2]);}function z(a,b){for(;a.length<n;){a[0]=b[n-a.length];var f=a.slice(0,t);[].splice.apply(a,[0,0].concat(f));h&&(f=a.slice(a.length-t),[].splice.apply(a,[a.length,0].concat(f)),c--);}a[0]=
    "M";}function u(a,b){for(var c=(n-a.length)/t;0<c&&c--;)f=a.slice().splice(a.length/w-t,t*w),f[0]=b[n-t-c*t],e&&(f[t-6]=f[t-2],f[t-5]=f[t-1]),[].splice.apply(a,[a.length/w,0].concat(f)),h&&c--;}m=m||"";var y,l=p.startX,b=p.endX,e=-1<m.indexOf("C"),t=e?7:3,n,f,c;m=m.split(" ");g=g.slice();var h=p.isArea,w=h?2:1,D;e&&(v(m),v(g));if(l&&b){for(c=0;c<l.length;c++)if(l[c]===b[0]){y=c;break}else if(l[0]===b[b.length-l.length+c]){y=c;D=!0;break}void 0===y&&(m=[]);}m.length&&a.isNumber(y)&&(n=g.length+y*w*t,
    D?(z(m,g),u(g,m)):(z(g,m),u(m,g)));return [m,g]}};a.Fx.prototype.fillSetter=a.Fx.prototype.strokeSetter=function(){this.elem.attr(this.prop,a.color(this.start).tweenTo(a.color(this.end),this.pos),null,!0);};a.merge=function(){var p,m=arguments,g,v={},z=function(g,y){"object"!==typeof g&&(g={});a.objectEach(y,function(l,b){!a.isObject(l,!0)||a.isClass(l)||a.isDOMElement(l)?g[b]=y[b]:g[b]=z(g[b]||{},l);});return g};!0===m[0]&&(v=m[1],m=Array.prototype.slice.call(m,2));g=m.length;for(p=0;p<g;p++)v=z(v,
    m[p]);return v};a.pInt=function(a,m){return parseInt(a,m||10)};a.isString=function(a){return "string"===typeof a};a.isArray=function(a){a=Object.prototype.toString.call(a);return "[object Array]"===a||"[object Array Iterator]"===a};a.isObject=function(p,m){return !!p&&"object"===typeof p&&(!m||!a.isArray(p))};a.isDOMElement=function(p){return a.isObject(p)&&"number"===typeof p.nodeType};a.isClass=function(p){var m=p&&p.constructor;return !(!a.isObject(p,!0)||a.isDOMElement(p)||!m||!m.name||"Object"===
    m.name)};a.isNumber=function(a){return "number"===typeof a&&!isNaN(a)&&Infinity>a&&-Infinity<a};a.erase=function(a,m){for(var g=a.length;g--;)if(a[g]===m){a.splice(g,1);break}};a.defined=function(a){return void 0!==a&&null!==a};a.attr=function(p,m,g){var v;a.isString(m)?a.defined(g)?p.setAttribute(m,g):p&&p.getAttribute&&((v=p.getAttribute(m))||"class"!==m||(v=p.getAttribute(m+"Name"))):a.defined(m)&&a.isObject(m)&&a.objectEach(m,function(a,g){p.setAttribute(g,a);});return v};a.splat=function(p){return a.isArray(p)?
    p:[p]};a.syncTimeout=function(a,m,g){if(m)return setTimeout(a,m,g);a.call(0,g);};a.clearTimeout=function(p){a.defined(p)&&clearTimeout(p);};a.extend=function(a,m){var g;a||(a={});for(g in m)a[g]=m[g];return a};a.pick=function(){var a=arguments,m,g,v=a.length;for(m=0;m<v;m++)if(g=a[m],void 0!==g&&null!==g)return g};a.css=function(p,m){a.isMS&&!a.svg&&m&&void 0!==m.opacity&&(m.filter="alpha(opacity\x3d"+100*m.opacity+")");a.extend(p.style,m);};a.createElement=function(p,m,g,v,z){p=C.createElement(p);var u=
    a.css;m&&a.extend(p,m);z&&u(p,{padding:0,border:"none",margin:0});g&&u(p,g);v&&v.appendChild(p);return p};a.extendClass=function(p,m){var g=function(){};g.prototype=new p;a.extend(g.prototype,m);return g};a.pad=function(a,m,g){return Array((m||2)+1-String(a).replace("-","").length).join(g||0)+a};a.relativeLength=function(a,m,g){return /%$/.test(a)?m*parseFloat(a)/100+(g||0):parseFloat(a)};a.wrap=function(a,m,g){var v=a[m];a[m]=function(){var a=Array.prototype.slice.call(arguments),u=arguments,y=this;
    y.proceed=function(){v.apply(y,arguments.length?arguments:u);};a.unshift(v);a=g.apply(this,a);y.proceed=null;return a};};a.formatSingle=function(p,m,g){var v=/\.([0-9])/,z=a.defaultOptions.lang;/f$/.test(p)?(g=(g=p.match(v))?g[1]:-1,null!==m&&(m=a.numberFormat(m,g,z.decimalPoint,-1<p.indexOf(",")?z.thousandsSep:""))):m=(g||a.time).dateFormat(p,m);return m};a.format=function(p,m,g){for(var v="{",z=!1,u,y,l,b,e=[],t;p;){v=p.indexOf(v);if(-1===v)break;u=p.slice(0,v);if(z){u=u.split(":");y=u.shift().split(".");
    b=y.length;t=m;for(l=0;l<b;l++)t&&(t=t[y[l]]);u.length&&(t=a.formatSingle(u.join(":"),t,g));e.push(t);}else e.push(u);p=p.slice(v+1);v=(z=!z)?"}":"{";}e.push(p);return e.join("")};a.getMagnitude=function(a){return Math.pow(10,Math.floor(Math.log(a)/Math.LN10))};a.normalizeTickInterval=function(p,m,g,v,z){var u,y=p;g=a.pick(g,1);u=p/g;m||(m=z?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],!1===v&&(1===g?m=a.grep(m,function(a){return 0===a%1}):.1>=g&&(m=[1/g])));for(v=0;v<m.length&&!(y=m[v],z&&y*g>=p||
    !z&&u<=(m[v]+(m[v+1]||m[v]))/2);v++);return y=a.correctFloat(y*g,-Math.round(Math.log(.001)/Math.LN10))};a.stableSort=function(a,m){var g=a.length,v,z;for(z=0;z<g;z++)a[z].safeI=z;a.sort(function(a,g){v=m(a,g);return 0===v?a.safeI-g.safeI:v});for(z=0;z<g;z++)delete a[z].safeI;};a.arrayMin=function(a){for(var m=a.length,g=a[0];m--;)a[m]<g&&(g=a[m]);return g};a.arrayMax=function(a){for(var m=a.length,g=a[0];m--;)a[m]>g&&(g=a[m]);return g};a.destroyObjectProperties=function(p,m){a.objectEach(p,function(a,
    v){a&&a!==m&&a.destroy&&a.destroy();delete p[v];});};a.discardElement=function(p){var m=a.garbageBin;m||(m=a.createElement("div"));p&&m.appendChild(p);m.innerHTML="";};a.correctFloat=function(a,m){return parseFloat(a.toPrecision(m||14))};a.setAnimation=function(p,m){m.renderer.globalAnimation=a.pick(p,m.options.chart.animation,!0);};a.animObject=function(p){return a.isObject(p)?a.merge(p):{duration:p?500:0}};a.timeUnits={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,
    year:314496E5};a.numberFormat=function(p,m,g,v){p=+p||0;m=+m;var z=a.defaultOptions.lang,u=(p.toString().split(".")[1]||"").split("e")[0].length,y,l,b=p.toString().split("e");-1===m?m=Math.min(u,20):a.isNumber(m)?m&&b[1]&&0>b[1]&&(y=m+ +b[1],0<=y?(b[0]=(+b[0]).toExponential(y).split("e")[0],m=y):(b[0]=b[0].split(".")[0]||0,p=20>m?(b[0]*Math.pow(10,b[1])).toFixed(m):0,b[1]=0)):m=2;l=(Math.abs(b[1]?b[0]:p)+Math.pow(10,-Math.max(m,u)-1)).toFixed(m);u=String(a.pInt(l));y=3<u.length?u.length%3:0;g=a.pick(g,
    z.decimalPoint);v=a.pick(v,z.thousandsSep);p=(0>p?"-":"")+(y?u.substr(0,y)+v:"");p+=u.substr(y).replace(/(\d{3})(?=\d)/g,"$1"+v);m&&(p+=g+l.slice(-m));b[1]&&0!==+p&&(p+="e"+b[1]);return p};Math.easeInOutSine=function(a){return -.5*(Math.cos(Math.PI*a)-1)};a.getStyle=function(p,m,g){if("width"===m)return Math.min(p.offsetWidth,p.scrollWidth)-a.getStyle(p,"padding-left")-a.getStyle(p,"padding-right");if("height"===m)return Math.min(p.offsetHeight,p.scrollHeight)-a.getStyle(p,"padding-top")-a.getStyle(p,
    "padding-bottom");G.getComputedStyle||a.error(27,!0);if(p=G.getComputedStyle(p,void 0))p=p.getPropertyValue(m),a.pick(g,"opacity"!==m)&&(p=a.pInt(p));return p};a.inArray=function(p,m,g){return (a.indexOfPolyfill||Array.prototype.indexOf).call(m,p,g)};a.grep=function(p,m){return (a.filterPolyfill||Array.prototype.filter).call(p,m)};a.find=Array.prototype.find?function(a,m){return a.find(m)}:function(a,m){var g,v=a.length;for(g=0;g<v;g++)if(m(a[g],g))return a[g]};a.some=function(p,m,g){return (a.somePolyfill||
    Array.prototype.some).call(p,m,g)};a.map=function(a,m){for(var g=[],v=0,z=a.length;v<z;v++)g[v]=m.call(a[v],a[v],v,a);return g};a.keys=function(p){return (a.keysPolyfill||Object.keys).call(void 0,p)};a.reduce=function(p,m,g){return (a.reducePolyfill||Array.prototype.reduce).call(p,m,g)};a.offset=function(a){var m=C.documentElement;a=a.parentElement?a.getBoundingClientRect():{top:0,left:0};return {top:a.top+(G.pageYOffset||m.scrollTop)-(m.clientTop||0),left:a.left+(G.pageXOffset||m.scrollLeft)-(m.clientLeft||
    0)}};a.stop=function(p,m){for(var g=a.timers.length;g--;)a.timers[g].elem!==p||m&&m!==a.timers[g].prop||(a.timers[g].stopped=!0);};a.each=function(p,m,g){return (a.forEachPolyfill||Array.prototype.forEach).call(p,m,g)};a.objectEach=function(a,m,g){for(var v in a)a.hasOwnProperty(v)&&m.call(g||a[v],a[v],v,a);};a.addEvent=function(p,m,g){var v,z=p.addEventListener||a.addEventListenerPolyfill;v="function"===typeof p&&p.prototype?p.prototype.protoEvents=p.prototype.protoEvents||{}:p.hcEvents=p.hcEvents||
    {};z&&z.call(p,m,g,!1);v[m]||(v[m]=[]);v[m].push(g);return function(){a.removeEvent(p,m,g);}};a.removeEvent=function(p,m,g){function v(l,b){var e=p.removeEventListener||a.removeEventListenerPolyfill;e&&e.call(p,l,b,!1);}function z(l){var b,e;p.nodeName&&(m?(b={},b[m]=!0):b=l,a.objectEach(b,function(a,b){if(l[b])for(e=l[b].length;e--;)v(b,l[b][e]);}));}var u,y;a.each(["protoEvents","hcEvents"],function(l){var b=p[l];b&&(m?(u=b[m]||[],g?(y=a.inArray(g,u),-1<y&&(u.splice(y,1),b[m]=u),v(m,g)):(z(b),b[m]=
    [])):(z(b),p[l]={}));});};a.fireEvent=function(p,m,g,v){var z,u,y,l,b;g=g||{};C.createEvent&&(p.dispatchEvent||p.fireEvent)?(z=C.createEvent("Events"),z.initEvent(m,!0,!0),a.extend(z,g),p.dispatchEvent?p.dispatchEvent(z):p.fireEvent(m,z)):a.each(["protoEvents","hcEvents"],function(e){if(p[e])for(u=p[e][m]||[],y=u.length,g.target||a.extend(g,{preventDefault:function(){g.defaultPrevented=!0;},target:p,type:m}),l=0;l<y;l++)(b=u[l])&&!1===b.call(p,g)&&g.preventDefault();});v&&!g.defaultPrevented&&v.call(p,
    g);};a.animate=function(p,m,g){var v,z="",u,y,l;a.isObject(g)||(l=arguments,g={duration:l[2],easing:l[3],complete:l[4]});a.isNumber(g.duration)||(g.duration=400);g.easing="function"===typeof g.easing?g.easing:Math[g.easing]||Math.easeInOutSine;g.curAnim=a.merge(m);a.objectEach(m,function(b,e){a.stop(p,e);y=new a.Fx(p,g,e);u=null;"d"===e?(y.paths=y.initPath(p,p.d,m.d),y.toD=m.d,v=0,u=1):p.attr?v=p.attr(e):(v=parseFloat(a.getStyle(p,e))||0,"opacity"!==e&&(z="px"));u||(u=b);u&&u.match&&u.match("px")&&
    (u=u.replace(/px/g,""));y.run(v,u,z);});};a.seriesType=function(p,m,g,v,z){var u=a.getOptions(),y=a.seriesTypes;u.plotOptions[p]=a.merge(u.plotOptions[m],g);y[p]=a.extendClass(y[m]||function(){},v);y[p].prototype.type=p;z&&(y[p].prototype.pointClass=a.extendClass(a.Point,z));return y[p]};a.uniqueKey=function(){var a=Math.random().toString(36).substring(2,9),m=0;return function(){return "highcharts-"+a+"-"+m++}}();G.jQuery&&(G.jQuery.fn.highcharts=function(){var p=[].slice.call(arguments);if(this[0])return p[0]?
    (new (a[a.isString(p[0])?p.shift():"Chart"])(this[0],p[0],p[1]),this):B[a.attr(this[0],"data-highcharts-chart")]});})(L);(function(a){var B=a.each,C=a.isNumber,G=a.map,p=a.merge,m=a.pInt;a.Color=function(g){if(!(this instanceof a.Color))return new a.Color(g);this.init(g);};a.Color.prototype={parsers:[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(a){return [m(a[1]),m(a[2]),m(a[3]),parseFloat(a[4],10)]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
    parse:function(a){return [m(a[1]),m(a[2]),m(a[3]),1]}}],names:{none:"rgba(255,255,255,0)",white:"#ffffff",black:"#000000"},init:function(g){var m,z,u,y;if((this.input=g=this.names[g&&g.toLowerCase?g.toLowerCase():""]||g)&&g.stops)this.stops=G(g.stops,function(l){return new a.Color(l[1])});else if(g&&g.charAt&&"#"===g.charAt()&&(m=g.length,g=parseInt(g.substr(1),16),7===m?z=[(g&16711680)>>16,(g&65280)>>8,g&255,1]:4===m&&(z=[(g&3840)>>4|(g&3840)>>8,(g&240)>>4|g&240,(g&15)<<4|g&15,1])),!z)for(u=this.parsers.length;u--&&
    !z;)y=this.parsers[u],(m=y.regex.exec(g))&&(z=y.parse(m));this.rgba=z||[];},get:function(a){var g=this.input,m=this.rgba,u;this.stops?(u=p(g),u.stops=[].concat(u.stops),B(this.stops,function(g,l){u.stops[l]=[u.stops[l][0],g.get(a)];})):u=m&&C(m[0])?"rgb"===a||!a&&1===m[3]?"rgb("+m[0]+","+m[1]+","+m[2]+")":"a"===a?m[3]:"rgba("+m.join(",")+")":g;return u},brighten:function(a){var g,z=this.rgba;if(this.stops)B(this.stops,function(g){g.brighten(a);});else if(C(a)&&0!==a)for(g=0;3>g;g++)z[g]+=m(255*a),0>
    z[g]&&(z[g]=0),255<z[g]&&(z[g]=255);return this},setOpacity:function(a){this.rgba[3]=a;return this},tweenTo:function(a,m){var g=this.rgba,u=a.rgba;u.length&&g&&g.length?(a=1!==u[3]||1!==g[3],m=(a?"rgba(":"rgb(")+Math.round(u[0]+(g[0]-u[0])*(1-m))+","+Math.round(u[1]+(g[1]-u[1])*(1-m))+","+Math.round(u[2]+(g[2]-u[2])*(1-m))+(a?","+(u[3]+(g[3]-u[3])*(1-m)):"")+")"):m=a.input||"none";return m}};a.color=function(g){return new a.Color(g)};})(L);(function(a){var B,C,G=a.addEvent,p=a.animate,m=a.attr,g=a.charts,
    v=a.color,z=a.css,u=a.createElement,y=a.defined,l=a.deg2rad,b=a.destroyObjectProperties,e=a.doc,t=a.each,n=a.extend,f=a.erase,c=a.grep,h=a.hasTouch,w=a.inArray,D=a.isArray,r=a.isFirefox,J=a.isMS,q=a.isObject,F=a.isString,x=a.isWebKit,K=a.merge,d=a.noop,H=a.objectEach,E=a.pick,k=a.pInt,A=a.removeEvent,P=a.stop,R=a.svg,I=a.SVG_NS,Q=a.symbolSizes,N=a.win;B=a.SVGElement=function(){return this};n(B.prototype,{opacity:1,SVG_NS:I,textProps:"direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline".split(" "),
    init:function(a,k){this.element="span"===k?u(k):e.createElementNS(this.SVG_NS,k);this.renderer=a;},animate:function(k,d,A){d=a.animObject(E(d,this.renderer.globalAnimation,!0));0!==d.duration?(A&&(d.complete=A),p(this,k,d)):(this.attr(k,null,A),d.step&&d.step.call(this));return this},complexColor:function(k,d,A){var M=this.renderer,b,f,c,h,I,x,n,r,e,w,E,q=[],l;a.fireEvent(this.renderer,"complexColor",{args:arguments},function(){k.radialGradient?f="radialGradient":k.linearGradient&&(f="linearGradient");
    f&&(c=k[f],I=M.gradients,n=k.stops,w=A.radialReference,D(c)&&(k[f]=c={x1:c[0],y1:c[1],x2:c[2],y2:c[3],gradientUnits:"userSpaceOnUse"}),"radialGradient"===f&&w&&!y(c.gradientUnits)&&(h=c,c=K(c,M.getRadialAttr(w,h),{gradientUnits:"userSpaceOnUse"})),H(c,function(a,k){"id"!==k&&q.push(k,a);}),H(n,function(a){q.push(a);}),q=q.join(","),I[q]?E=I[q].attr("id"):(c.id=E=a.uniqueKey(),I[q]=x=M.createElement(f).attr(c).add(M.defs),x.radAttr=h,x.stops=[],t(n,function(k){0===k[1].indexOf("rgba")?(b=a.color(k[1]),
    r=b.get("rgb"),e=b.get("a")):(r=k[1],e=1);k=M.createElement("stop").attr({offset:k[0],"stop-color":r,"stop-opacity":e}).add(x);x.stops.push(k);})),l="url("+M.url+"#"+E+")",A.setAttribute(d,l),A.gradient=q,k.toString=function(){return l});});},applyTextOutline:function(k){var d=this.element,M,A,b,c,h;-1!==k.indexOf("contrast")&&(k=k.replace(/contrast/g,this.renderer.getContrast(d.style.fill)));k=k.split(" ");A=k[k.length-1];if((b=k[0])&&"none"!==b&&a.svg){this.fakeTS=!0;k=[].slice.call(d.getElementsByTagName("tspan"));
    this.ySetter=this.xSetter;b=b.replace(/(^[\d\.]+)(.*?)$/g,function(a,k,d){return 2*k+d});for(h=k.length;h--;)M=k[h],"highcharts-text-outline"===M.getAttribute("class")&&f(k,d.removeChild(M));c=d.firstChild;t(k,function(a,k){0===k&&(a.setAttribute("x",d.getAttribute("x")),k=d.getAttribute("y"),a.setAttribute("y",k||0),null===k&&d.setAttribute("y",0));a=a.cloneNode(1);m(a,{"class":"highcharts-text-outline",fill:A,stroke:A,"stroke-width":b,"stroke-linejoin":"round"});d.insertBefore(a,c);});}},attr:function(a,
    k,d,A){var M,b=this.element,f,c=this,h,I;"string"===typeof a&&void 0!==k&&(M=a,a={},a[M]=k);"string"===typeof a?c=(this[a+"Getter"]||this._defaultGetter).call(this,a,b):(H(a,function(k,d){h=!1;A||P(this,d);this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)$/.test(d)&&(f||(this.symbolAttr(a),f=!0),h=!0);!this.rotation||"x"!==d&&"y"!==d||(this.doTransform=!0);h||(I=this[d+"Setter"]||this._defaultSetter,I.call(this,k,d,b),this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(d)&&
    this.updateShadows(d,k,I));},this),this.afterSetters());d&&d.call(this);return c},afterSetters:function(){this.doTransform&&(this.updateTransform(),this.doTransform=!1);},updateShadows:function(a,k,d){for(var M=this.shadows,A=M.length;A--;)d.call(M[A],"height"===a?Math.max(k-(M[A].cutHeight||0),0):"d"===a?this.d:k,a,M[A]);},addClass:function(a,k){var d=this.attr("class")||"";-1===d.indexOf(a)&&(k||(a=(d+(d?" ":"")+a).replace("  "," ")),this.attr("class",a));return this},hasClass:function(a){return -1!==
    w(a,(this.attr("class")||"").split(" "))},removeClass:function(a){return this.attr("class",(this.attr("class")||"").replace(a,""))},symbolAttr:function(a){var k=this;t("x y r start end width height innerR anchorX anchorY".split(" "),function(d){k[d]=E(a[d],k[d]);});k.attr({d:k.renderer.symbols[k.symbolName](k.x,k.y,k.width,k.height,k)});},clip:function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":"none")},crisp:function(a,k){var d;k=k||a.strokeWidth||0;d=Math.round(k)%2/2;
    a.x=Math.floor(a.x||this.x||0)+d;a.y=Math.floor(a.y||this.y||0)+d;a.width=Math.floor((a.width||this.width||0)-2*d);a.height=Math.floor((a.height||this.height||0)-2*d);y(a.strokeWidth)&&(a.strokeWidth=k);return a},css:function(a){var d=this.styles,A={},b=this.element,f,c="",M,h=!d,I=["textOutline","textOverflow","width"];a&&a.color&&(a.fill=a.color);d&&H(a,function(a,k){a!==d[k]&&(A[k]=a,h=!0);});h&&(d&&(a=n(d,A)),f=this.textWidth=a&&a.width&&"auto"!==a.width&&"text"===b.nodeName.toLowerCase()&&k(a.width),
    this.styles=a,f&&!R&&this.renderer.forExport&&delete a.width,b.namespaceURI===this.SVG_NS?(M=function(a,k){return "-"+k.toLowerCase()},H(a,function(a,k){-1===w(k,I)&&(c+=k.replace(/([A-Z])/g,M)+":"+a+";");}),c&&m(b,"style",c)):z(b,a),this.added&&("text"===this.element.nodeName&&this.renderer.buildText(this),a&&a.textOutline&&this.applyTextOutline(a.textOutline)));return this},strokeWidth:function(){return this["stroke-width"]||0},on:function(a,k){var d=this,A=d.element;h&&"click"===a?(A.ontouchstart=
    function(a){d.touchEventFired=Date.now();a.preventDefault();k.call(A,a);},A.onclick=function(a){(-1===N.navigator.userAgent.indexOf("Android")||1100<Date.now()-(d.touchEventFired||0))&&k.call(A,a);}):A["on"+a]=k;return this},setRadialReference:function(a){var k=this.renderer.gradients[this.element.gradient];this.element.radialReference=a;k&&k.radAttr&&k.animate(this.renderer.getRadialAttr(a,k.radAttr));return this},translate:function(a,k){return this.attr({translateX:a,translateY:k})},invert:function(a){this.inverted=
    a;this.updateTransform();return this},updateTransform:function(){var a=this.translateX||0,k=this.translateY||0,d=this.scaleX,A=this.scaleY,b=this.inverted,f=this.rotation,c=this.matrix,h=this.element;b&&(a+=this.width,k+=this.height);a=["translate("+a+","+k+")"];y(c)&&a.push("matrix("+c.join(",")+")");b?a.push("rotate(90) scale(-1,1)"):f&&a.push("rotate("+f+" "+E(this.rotationOriginX,h.getAttribute("x"),0)+" "+E(this.rotationOriginY,h.getAttribute("y")||0)+")");(y(d)||y(A))&&a.push("scale("+E(d,1)+
    " "+E(A,1)+")");a.length&&h.setAttribute("transform",a.join(" "));},toFront:function(){var a=this.element;a.parentNode.appendChild(a);return this},align:function(a,k,d){var A,b,c,h,M={};b=this.renderer;c=b.alignedObjects;var I,x;if(a){if(this.alignOptions=a,this.alignByTranslate=k,!d||F(d))this.alignTo=A=d||"renderer",f(c,this),c.push(this),d=null;}else a=this.alignOptions,k=this.alignByTranslate,A=this.alignTo;d=E(d,b[A],b);A=a.align;b=a.verticalAlign;c=(d.x||0)+(a.x||0);h=(d.y||0)+(a.y||0);"right"===
    A?I=1:"center"===A&&(I=2);I&&(c+=(d.width-(a.width||0))/I);M[k?"translateX":"x"]=Math.round(c);"bottom"===b?x=1:"middle"===b&&(x=2);x&&(h+=(d.height-(a.height||0))/x);M[k?"translateY":"y"]=Math.round(h);this[this.placed?"animate":"attr"](M);this.placed=!0;this.alignAttr=M;return this},getBBox:function(a,k){var d,A=this.renderer,b,c=this.element,f=this.styles,h,I=this.textStr,M,x=A.cache,r=A.cacheKeys,e;k=E(k,this.rotation);b=k*l;h=f&&f.fontSize;y(I)&&(e=I.toString(),-1===e.indexOf("\x3c")&&(e=e.replace(/[0-9]/g,
    "0")),e+=["",k||0,h,this.textWidth,f&&f.textOverflow].join());e&&!a&&(d=x[e]);if(!d){if(c.namespaceURI===this.SVG_NS||A.forExport){try{(M=this.fakeTS&&function(a){t(c.querySelectorAll(".highcharts-text-outline"),function(k){k.style.display=a;});})&&M("none"),d=c.getBBox?n({},c.getBBox()):{width:c.offsetWidth,height:c.offsetHeight},M&&M("");}catch(fa){}if(!d||0>d.width)d={width:0,height:0};}else d=this.htmlGetBBox();A.isSVG&&(a=d.width,A=d.height,f&&"11px"===f.fontSize&&17===Math.round(A)&&(d.height=A=
    14),k&&(d.width=Math.abs(A*Math.sin(b))+Math.abs(a*Math.cos(b)),d.height=Math.abs(A*Math.cos(b))+Math.abs(a*Math.sin(b))));if(e&&0<d.height){for(;250<r.length;)delete x[r.shift()];x[e]||r.push(e);x[e]=d;}}return d},show:function(a){return this.attr({visibility:a?"inherit":"visible"})},hide:function(){return this.attr({visibility:"hidden"})},fadeOut:function(a){var k=this;k.animate({opacity:0},{duration:a||150,complete:function(){k.attr({y:-9999});}});},add:function(a){var k=this.renderer,d=this.element,
    A;a&&(this.parentGroup=a);this.parentInverted=a&&a.inverted;void 0!==this.textStr&&k.buildText(this);this.added=!0;if(!a||a.handleZ||this.zIndex)A=this.zIndexSetter();A||(a?a.element:k.box).appendChild(d);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var k=a.parentNode;k&&k.removeChild(a);},destroy:function(){var a=this,k=a.element||{},d=a.renderer.isSVG&&"SPAN"===k.nodeName&&a.parentGroup,A=k.ownerSVGElement,b=a.clipPath;k.onclick=k.onmouseout=k.onmouseover=k.onmousemove=k.point=
    null;P(a);b&&A&&(t(A.querySelectorAll("[clip-path],[CLIP-PATH]"),function(a){var k=a.getAttribute("clip-path"),d=b.element.id;(-1<k.indexOf("(#"+d+")")||-1<k.indexOf('("#'+d+'")'))&&a.removeAttribute("clip-path");}),a.clipPath=b.destroy());if(a.stops){for(A=0;A<a.stops.length;A++)a.stops[A]=a.stops[A].destroy();a.stops=null;}a.safeRemoveChild(k);for(a.destroyShadows();d&&d.div&&0===d.div.childNodes.length;)k=d.parentGroup,a.safeRemoveChild(d.div),delete d.div,d=k;a.alignTo&&f(a.renderer.alignedObjects,
    a);H(a,function(k,d){delete a[d];});return null},shadow:function(a,k,d){var A=[],b,c,f=this.element,h,I,x,n;if(!a)this.destroyShadows();else if(!this.shadows){I=E(a.width,3);x=(a.opacity||.15)/I;n=this.parentInverted?"(-1,-1)":"("+E(a.offsetX,1)+", "+E(a.offsetY,1)+")";for(b=1;b<=I;b++)c=f.cloneNode(0),h=2*I+1-2*b,m(c,{isShadow:"true",stroke:a.color||"#000000","stroke-opacity":x*b,"stroke-width":h,transform:"translate"+n,fill:"none"}),d&&(m(c,"height",Math.max(m(c,"height")-h,0)),c.cutHeight=h),k?
    k.element.appendChild(c):f.parentNode&&f.parentNode.insertBefore(c,f),A.push(c);this.shadows=A;}return this},destroyShadows:function(){t(this.shadows||[],function(a){this.safeRemoveChild(a);},this);this.shadows=void 0;},xGetter:function(a){"circle"===this.element.nodeName&&("x"===a?a="cx":"y"===a&&(a="cy"));return this._defaultGetter(a)},_defaultGetter:function(a){a=E(this[a+"Value"],this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,
    k,d){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");this[k]!==a&&(d.setAttribute(k,a),this[k]=a);},dashstyleSetter:function(a){var d,A=this["stroke-width"];"inherit"===A&&(A=1);if(a=a&&a.toLowerCase()){a=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(d=a.length;d--;)a[d]=k(a[d])*A;a=a.join(",").replace(/NaN/g,
    "none");this.element.setAttribute("stroke-dasharray",a);}},alignSetter:function(a){this.alignValue=a;this.element.setAttribute("text-anchor",{left:"start",center:"middle",right:"end"}[a]);},opacitySetter:function(a,k,d){this[k]=a;d.setAttribute(k,a);},titleSetter:function(a){var k=this.element.getElementsByTagName("title")[0];k||(k=e.createElementNS(this.SVG_NS,"title"),this.element.appendChild(k));k.firstChild&&k.removeChild(k.firstChild);k.appendChild(e.createTextNode(String(E(a),"").replace(/<[^>]*>/g,
    "").replace(/&lt;/g,"\x3c").replace(/&gt;/g,"\x3e")));},textSetter:function(a){a!==this.textStr&&(delete this.bBox,this.textStr=a,this.added&&this.renderer.buildText(this));},fillSetter:function(a,k,d){"string"===typeof a?d.setAttribute(k,a):a&&this.complexColor(a,k,d);},visibilitySetter:function(a,k,d){"inherit"===a?d.removeAttribute(k):this[k]!==a&&d.setAttribute(k,a);this[k]=a;},zIndexSetter:function(a,d){var A=this.renderer,b=this.parentGroup,c=(b||A).element||A.box,f,h=this.element,I,x,A=c===A.box;
    f=this.added;var n;y(a)&&(h.zIndex=a,a=+a,this[d]===a&&(f=!1),this[d]=a);if(f){(a=this.zIndex)&&b&&(b.handleZ=!0);d=c.childNodes;for(n=d.length-1;0<=n&&!I;n--)if(b=d[n],f=b.zIndex,x=!y(f),b!==h)if(0>a&&x&&!A&&!n)c.insertBefore(h,d[n]),I=!0;else if(k(f)<=a||x&&(!y(a)||0<=a))c.insertBefore(h,d[n+1]||null),I=!0;I||(c.insertBefore(h,d[A?3:0]||null),I=!0);}return I},_defaultSetter:function(a,k,d){d.setAttribute(k,a);}});B.prototype.yGetter=B.prototype.xGetter;B.prototype.translateXSetter=B.prototype.translateYSetter=
    B.prototype.rotationSetter=B.prototype.verticalAlignSetter=B.prototype.rotationOriginXSetter=B.prototype.rotationOriginYSetter=B.prototype.scaleXSetter=B.prototype.scaleYSetter=B.prototype.matrixSetter=function(a,k){this[k]=a;this.doTransform=!0;};B.prototype["stroke-widthSetter"]=B.prototype.strokeSetter=function(a,k,d){this[k]=a;this.stroke&&this["stroke-width"]?(B.prototype.fillSetter.call(this,this.stroke,"stroke",d),d.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0):"stroke-width"===
    k&&0===a&&this.hasStroke&&(d.removeAttribute("stroke"),this.hasStroke=!1);};C=a.SVGRenderer=function(){this.init.apply(this,arguments);};n(C.prototype,{Element:B,SVG_NS:I,init:function(a,k,d,A,b,c){var f;A=this.createElement("svg").attr({version:"1.1","class":"highcharts-root"}).css(this.getStyle(A));f=A.element;a.appendChild(f);m(a,"dir","ltr");-1===a.innerHTML.indexOf("xmlns")&&m(f,"xmlns",this.SVG_NS);this.isSVG=!0;this.box=f;this.boxWrapper=A;this.alignedObjects=[];this.url=(r||x)&&e.getElementsByTagName("base").length?
    N.location.href.replace(/#.*?$/,"").replace(/<[^>]*>/g,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(e.createTextNode("Created with Highstock 6.1.0"));this.defs=this.createElement("defs").add();this.allowHTML=c;this.forExport=b;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(k,d,!1);var h;r&&a.getBoundingClientRect&&(k=function(){z(a,{left:0,top:0});h=a.getBoundingClientRect();z(a,{left:Math.ceil(h.left)-
    h.left+"px",top:Math.ceil(h.top)-h.top+"px"});},k(),this.unSubPixelFix=G(N,"resize",k));},getStyle:function(a){return this.style=n({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},a)},setStyle:function(a){this.boxWrapper.css(this.getStyle(a));},isHidden:function(){return !this.boxWrapper.getBBox().width},destroy:function(){var a=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();b(this.gradients||{});this.gradients=null;a&&(this.defs=a.destroy());
    this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null},createElement:function(a){var k=new this.Element;k.init(this,a);return k},draw:d,getRadialAttr:function(a,k){return {cx:a[0]-a[2]/2+k.cx*a[2],cy:a[1]-a[2]/2+k.cy*a[2],r:k.r*a[2]}},getSpanWidth:function(a){return a.getBBox(!0).width},applyEllipsis:function(a,k,d,A){var b=a.rotation,c=d,f,h=0,I=d.length,x=function(a){k.removeChild(k.firstChild);a&&k.appendChild(e.createTextNode(a));},n;a.rotation=0;c=this.getSpanWidth(a,k);if(n=
    c>A){for(;h<=I;)f=Math.ceil((h+I)/2),c=d.substring(0,f)+"\u2026",x(c),c=this.getSpanWidth(a,k),h===I?h=I+1:c>A?I=f-1:h=f;0===I&&x("");}a.rotation=b;return n},escapes:{"\x26":"\x26amp;","\x3c":"\x26lt;","\x3e":"\x26gt;","'":"\x26#39;",'"':"\x26quot;"},buildText:function(a){var d=a.element,A=this,b=A.forExport,f=E(a.textStr,"").toString(),h=-1!==f.indexOf("\x3c"),x=d.childNodes,n,r=m(d,"x"),q=a.styles,l=a.textWidth,D=q&&q.lineHeight,F=q&&q.textOutline,P=q&&"ellipsis"===q.textOverflow,K=q&&"nowrap"===
    q.whiteSpace,M=q&&q.fontSize,J,g,Q=x.length,q=l&&!a.added&&this.box,u=function(a){var b;b=/(px|em)$/.test(a&&a.style.fontSize)?a.style.fontSize:M||A.style.fontSize||12;return D?k(D):A.fontMetrics(b,a.getAttribute("style")?a:d).h},y=function(a,k){H(A.escapes,function(d,A){k&&-1!==w(d,k)||(a=a.toString().replace(new RegExp(d,"g"),A));});return a},N=function(a,k){var d;d=a.indexOf("\x3c");a=a.substring(d,a.indexOf("\x3e")-d);d=a.indexOf(k+"\x3d");if(-1!==d&&(d=d+k.length+1,k=a.charAt(d),'"'===k||"'"===
    k))return a=a.substring(d+1),a.substring(0,a.indexOf(k))};J=[f,P,K,D,F,M,l].join();if(J!==a.textCache){for(a.textCache=J;Q--;)d.removeChild(x[Q]);h||F||P||l||-1!==f.indexOf(" ")?(q&&q.appendChild(d),f=h?f.replace(/<(b|strong)>/g,'\x3cspan style\x3d"font-weight:bold"\x3e').replace(/<(i|em)>/g,'\x3cspan style\x3d"font-style:italic"\x3e').replace(/<a/g,"\x3cspan").replace(/<\/(b|strong|i|em|a)>/g,"\x3c/span\x3e").split(/<br.*?>/g):[f],f=c(f,function(a){return ""!==a}),t(f,function(k,f){var c,h=0;k=k.replace(/^\s+|\s+$/g,
    "").replace(/<span/g,"|||\x3cspan").replace(/<\/span>/g,"\x3c/span\x3e|||");c=k.split("|||");t(c,function(k){if(""!==k||1===c.length){var x={},q=e.createElementNS(A.SVG_NS,"tspan"),w,E;(w=N(k,"class"))&&m(q,"class",w);if(w=N(k,"style"))w=w.replace(/(;| |^)color([ :])/,"$1fill$2"),m(q,"style",w);(E=N(k,"href"))&&!b&&(m(q,"onclick",'location.href\x3d"'+E+'"'),m(q,"class","highcharts-anchor"),z(q,{cursor:"pointer"}));k=y(k.replace(/<[a-zA-Z\/](.|\n)*?>/g,"")||" ");if(" "!==k){q.appendChild(e.createTextNode(k));
    h?x.dx=0:f&&null!==r&&(x.x=r);m(q,x);d.appendChild(q);!h&&g&&(!R&&b&&z(q,{display:"block"}),m(q,"dy",u(q)));if(l){x=k.replace(/([^\^])-/g,"$1- ").split(" ");E=1<c.length||f||1<x.length&&!K;var H=[],D,t=u(q),F=a.rotation;for(P&&(n=A.applyEllipsis(a,q,k,l));!P&&E&&(x.length||H.length);)a.rotation=0,D=A.getSpanWidth(a,q),k=D>l,void 0===n&&(n=k),k&&1!==x.length?(q.removeChild(q.firstChild),H.unshift(x.pop())):(x=H,H=[],x.length&&!K&&(q=e.createElementNS(I,"tspan"),m(q,{dy:t,x:r}),w&&m(q,"style",w),d.appendChild(q)),
    D>l&&(l=D)),x.length&&q.appendChild(e.createTextNode(x.join(" ").replace(/- /g,"-")));a.rotation=F;}h++;}}});g=g||d.childNodes.length;}),n&&a.attr("title",y(a.textStr,["\x26lt;","\x26gt;"])),q&&q.removeChild(d),F&&a.applyTextOutline&&a.applyTextOutline(F)):d.appendChild(e.createTextNode(y(f)));}},getContrast:function(a){a=v(a).rgba;return 510<a[0]+a[1]+a[2]?"#000000":"#FFFFFF"},button:function(a,k,d,A,b,f,c,h,x){var I=this.label(a,k,d,x,null,null,null,null,"button"),q=0;I.attr(K({padding:8,r:2},b));var r,
    e,w,E;b=K({fill:"#f7f7f7",stroke:"#cccccc","stroke-width":1,style:{color:"#333333",cursor:"pointer",fontWeight:"normal"}},b);r=b.style;delete b.style;f=K(b,{fill:"#e6e6e6"},f);e=f.style;delete f.style;c=K(b,{fill:"#e6ebf5",style:{color:"#000000",fontWeight:"bold"}},c);w=c.style;delete c.style;h=K(b,{style:{color:"#cccccc"}},h);E=h.style;delete h.style;G(I.element,J?"mouseover":"mouseenter",function(){3!==q&&I.setState(1);});G(I.element,J?"mouseout":"mouseleave",function(){3!==q&&I.setState(q);});I.setState=
    function(a){1!==a&&(I.state=q=a);I.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+["normal","hover","pressed","disabled"][a||0]);I.attr([b,f,c,h][a||0]).css([r,e,w,E][a||0]);};I.attr(b).css(n({cursor:"default"},r));return I.on("click",function(a){3!==q&&A.call(I,a);})},crispLine:function(a,k){a[1]===a[4]&&(a[1]=a[4]=Math.round(a[1])-k%2/2);a[2]===a[5]&&(a[2]=a[5]=Math.round(a[2])+k%2/2);return a},path:function(a){var k={fill:"none"};D(a)?k.d=a:q(a)&&n(k,
    a);return this.createElement("path").attr(k)},circle:function(a,k,d){a=q(a)?a:{x:a,y:k,r:d};k=this.createElement("circle");k.xSetter=k.ySetter=function(a,k,d){d.setAttribute("c"+k,a);};return k.attr(a)},arc:function(a,k,d,A,b,f){q(a)?(A=a,k=A.y,d=A.r,a=A.x):A={innerR:A,start:b,end:f};a=this.symbol("arc",a,k,d,d,A);a.r=d;return a},rect:function(a,k,d,A,b,f){b=q(a)?a.r:b;var c=this.createElement("rect");a=q(a)?a:void 0===a?{}:{x:a,y:k,width:Math.max(d,0),height:Math.max(A,0)};void 0!==f&&(a.strokeWidth=
    f,a=c.crisp(a));a.fill="none";b&&(a.r=b);c.rSetter=function(a,k,d){m(d,{rx:a,ry:a});};return c.attr(a)},setSize:function(a,k,d){var A=this.alignedObjects,b=A.length;this.width=a;this.height=k;for(this.boxWrapper.animate({width:a,height:k},{step:function(){this.attr({viewBox:"0 0 "+this.attr("width")+" "+this.attr("height")});},duration:E(d,!0)?void 0:0});b--;)A[b].align();},g:function(a){var k=this.createElement("g");return a?k.attr({"class":"highcharts-"+a}):k},image:function(a,k,d,A,b,f){var c={preserveAspectRatio:"none"},
    h,I=function(a,k){a.setAttributeNS?a.setAttributeNS("http://www.w3.org/1999/xlink","href",k):a.setAttribute("hc-svg-href",k);};1<arguments.length&&n(c,{x:k,y:d,width:A,height:b});h=this.createElement("image").attr(c);f?(I(h.element,"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw\x3d\x3d"),c=new N.Image,G(c,"load",function(k){I(h.element,a);f.call(h,k);}),c.src=a):I(h.element,a);return h},symbol:function(a,k,d,A,b,c){var f=this,h,I=/^url\((.*?)\)$/,x=I.test(a),q=!x&&(this.symbols[a]?
    a:"circle"),r=q&&this.symbols[q],w=y(k)&&r&&r.call(this.symbols,Math.round(k),Math.round(d),A,b,c),l,H;r?(h=this.path(w),h.attr("fill","none"),n(h,{symbolName:q,x:k,y:d,width:A,height:b}),c&&n(h,c)):x&&(l=a.match(I)[1],h=this.image(l),h.imgwidth=E(Q[l]&&Q[l].width,c&&c.width),h.imgheight=E(Q[l]&&Q[l].height,c&&c.height),H=function(){h.attr({width:h.width,height:h.height});},t(["width","height"],function(a){h[a+"Setter"]=function(a,k){var d={},A=this["img"+k],b="width"===k?"translateX":"translateY";
    this[k]=a;y(A)&&(this.element&&this.element.setAttribute(k,A),this.alignByTranslate||(d[b]=((this[k]||0)-A)/2,this.attr(d)));};}),y(k)&&h.attr({x:k,y:d}),h.isImg=!0,y(h.imgwidth)&&y(h.imgheight)?H():(h.attr({width:0,height:0}),u("img",{onload:function(){var a=g[f.chartIndex];0===this.width&&(z(this,{position:"absolute",top:"-999em"}),e.body.appendChild(this));Q[l]={width:this.width,height:this.height};h.imgwidth=this.width;h.imgheight=this.height;h.element&&H();this.parentNode&&this.parentNode.removeChild(this);
    f.imgCount--;if(!f.imgCount&&a&&a.onload)a.onload();},src:l}),this.imgCount++));return h},symbols:{circle:function(a,k,d,A){return this.arc(a+d/2,k+A/2,d/2,A/2,{start:0,end:2*Math.PI,open:!1})},square:function(a,k,d,A){return ["M",a,k,"L",a+d,k,a+d,k+A,a,k+A,"Z"]},triangle:function(a,k,d,A){return ["M",a+d/2,k,"L",a+d,k+A,a,k+A,"Z"]},"triangle-down":function(a,k,d,A){return ["M",a,k,"L",a+d,k,a+d/2,k+A,"Z"]},diamond:function(a,k,d,A){return ["M",a+d/2,k,"L",a+d,k+A/2,a+d/2,k+A,a,k+A/2,"Z"]},arc:function(a,
    k,d,A,b){var c=b.start,f=b.r||d,h=b.r||A||d,I=b.end-.001;d=b.innerR;A=E(b.open,.001>Math.abs(b.end-b.start-2*Math.PI));var x=Math.cos(c),n=Math.sin(c),q=Math.cos(I),I=Math.sin(I);b=.001>b.end-c-Math.PI?0:1;f=["M",a+f*x,k+h*n,"A",f,h,0,b,1,a+f*q,k+h*I];y(d)&&f.push(A?"M":"L",a+d*q,k+d*I,"A",d,d,0,b,0,a+d*x,k+d*n);f.push(A?"":"Z");return f},callout:function(a,k,d,A,b){var c=Math.min(b&&b.r||0,d,A),f=c+6,h=b&&b.anchorX;b=b&&b.anchorY;var I;I=["M",a+c,k,"L",a+d-c,k,"C",a+d,k,a+d,k,a+d,k+c,"L",a+d,k+A-
    c,"C",a+d,k+A,a+d,k+A,a+d-c,k+A,"L",a+c,k+A,"C",a,k+A,a,k+A,a,k+A-c,"L",a,k+c,"C",a,k,a,k,a+c,k];h&&h>d?b>k+f&&b<k+A-f?I.splice(13,3,"L",a+d,b-6,a+d+6,b,a+d,b+6,a+d,k+A-c):I.splice(13,3,"L",a+d,A/2,h,b,a+d,A/2,a+d,k+A-c):h&&0>h?b>k+f&&b<k+A-f?I.splice(33,3,"L",a,b+6,a-6,b,a,b-6,a,k+c):I.splice(33,3,"L",a,A/2,h,b,a,A/2,a,k+c):b&&b>A&&h>a+f&&h<a+d-f?I.splice(23,3,"L",h+6,k+A,h,k+A+6,h-6,k+A,a+c,k+A):b&&0>b&&h>a+f&&h<a+d-f&&I.splice(3,3,"L",h-6,k,h,k-6,h+6,k,d-c,k);return I}},clipRect:function(k,d,A,
    b){var c=a.uniqueKey(),f=this.createElement("clipPath").attr({id:c}).add(this.defs);k=this.rect(k,d,A,b,0).add(f);k.id=c;k.clipPath=f;k.count=0;return k},text:function(a,k,d,A){var b={};if(A&&(this.allowHTML||!this.forExport))return this.html(a,k,d);b.x=Math.round(k||0);d&&(b.y=Math.round(d));if(a||0===a)b.text=a;a=this.createElement("text").attr(b);A||(a.xSetter=function(a,k,d){var A=d.getElementsByTagName("tspan"),b,c=d.getAttribute(k),f;for(f=0;f<A.length;f++)b=A[f],b.getAttribute(k)===c&&b.setAttribute(k,
    a);d.setAttribute(k,a);});return a},fontMetrics:function(a,d){a=a||d&&d.style&&d.style.fontSize||this.style&&this.style.fontSize;a=/px/.test(a)?k(a):/em/.test(a)?parseFloat(a)*(d?this.fontMetrics(null,d.parentNode).f:16):12;d=24>a?a+3:Math.round(1.2*a);return {h:d,b:Math.round(.8*d),f:a}},rotCorr:function(a,k,d){var A=a;k&&d&&(A=Math.max(A*Math.cos(k*l),4));return {x:-a/3*Math.sin(k*l),y:A}},label:function(k,d,b,c,f,h,I,x,q){var r=this,e=r.g("button"!==q&&"label"),w=e.text=r.text("",0,0,I).attr({zIndex:1}),
    E,l,H=0,D=3,F=0,R,P,J,g,Q,m={},u,N,v=/^url\((.*?)\)$/.test(c),z=v,M,p,S,O;q&&e.addClass("highcharts-"+q);z=v;M=function(){return (u||0)%2/2};p=function(){var a=w.element.style,k={};l=(void 0===R||void 0===P||Q)&&y(w.textStr)&&w.getBBox();e.width=(R||l.width||0)+2*D+F;e.height=(P||l.height||0)+2*D;N=D+r.fontMetrics(a&&a.fontSize,w).b;z&&(E||(e.box=E=r.symbols[c]||v?r.symbol(c):r.rect(),E.addClass(("button"===q?"":"highcharts-label-box")+(q?" highcharts-"+q+"-box":"")),E.add(e),a=M(),k.x=a,k.y=(x?-N:
    0)+a),k.width=Math.round(e.width),k.height=Math.round(e.height),E.attr(n(k,m)),m={});};S=function(){var a=F+D,k;k=x?0:N;y(R)&&l&&("center"===Q||"right"===Q)&&(a+={center:.5,right:1}[Q]*(R-l.width));if(a!==w.x||k!==w.y)w.attr("x",a),void 0!==k&&w.attr("y",k);w.x=a;w.y=k;};O=function(a,k){E?E.attr(a,k):m[a]=k;};e.onAdd=function(){w.add(e);e.attr({text:k||0===k?k:"",x:d,y:b});E&&y(f)&&e.attr({anchorX:f,anchorY:h});};e.widthSetter=function(k){R=a.isNumber(k)?k:null;};e.heightSetter=function(a){P=a;};e["text-alignSetter"]=
    function(a){Q=a;};e.paddingSetter=function(a){y(a)&&a!==D&&(D=e.padding=a,S());};e.paddingLeftSetter=function(a){y(a)&&a!==F&&(F=a,S());};e.alignSetter=function(a){a={left:0,center:.5,right:1}[a];a!==H&&(H=a,l&&e.attr({x:J}));};e.textSetter=function(a){void 0!==a&&w.textSetter(a);p();S();};e["stroke-widthSetter"]=function(a,k){a&&(z=!0);u=this["stroke-width"]=a;O(k,a);};e.strokeSetter=e.fillSetter=e.rSetter=function(a,k){"r"!==k&&("fill"===k&&a&&(z=!0),e[k]=a);O(k,a);};e.anchorXSetter=function(a,k){f=e.anchorX=
    a;O(k,Math.round(a)-M()-J);};e.anchorYSetter=function(a,k){h=e.anchorY=a;O(k,a-g);};e.xSetter=function(a){e.x=a;H&&(a-=H*((R||l.width)+2*D),e["forceAnimate:x"]=!0);J=Math.round(a);e.attr("translateX",J);};e.ySetter=function(a){g=e.y=Math.round(a);e.attr("translateY",g);};var ea=e.css;return n(e,{css:function(a){if(a){var k={};a=K(a);t(e.textProps,function(d){void 0!==a[d]&&(k[d]=a[d],delete a[d]);});w.css(k);"width"in k&&p();}return ea.call(e,a)},getBBox:function(){return {width:l.width+2*D,height:l.height+
    2*D,x:l.x-D,y:l.y-D}},shadow:function(a){a&&(p(),E&&E.shadow(a));return e},destroy:function(){A(e.element,"mouseenter");A(e.element,"mouseleave");w&&(w=w.destroy());E&&(E=E.destroy());B.prototype.destroy.call(e);e=r=p=S=O=null;}})}});a.Renderer=C;})(L);(function(a){var B=a.attr,C=a.createElement,G=a.css,p=a.defined,m=a.each,g=a.extend,v=a.isFirefox,z=a.isMS,u=a.isWebKit,y=a.pick,l=a.pInt,b=a.SVGRenderer,e=a.win,t=a.wrap;g(a.SVGElement.prototype,{htmlCss:function(a){var b=this.element;if(b=a&&"SPAN"===
    b.tagName&&a.width)delete a.width,this.textWidth=b,this.htmlUpdateTransform();a&&"ellipsis"===a.textOverflow&&(a.whiteSpace="nowrap",a.overflow="hidden");this.styles=g(this.styles,a);G(this.element,a);return this},htmlGetBBox:function(){var a=this.element;return {x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var a=this.renderer,b=this.element,c=this.translateX||0,h=this.translateY||0,e=this.x||0,D=this.y||0,r=this.textAlign||
    "left",t={left:0,center:.5,right:1}[r],q=this.styles,F=q&&q.whiteSpace;G(b,{marginLeft:c,marginTop:h});this.shadows&&m(this.shadows,function(a){G(a,{marginLeft:c+1,marginTop:h+1});});this.inverted&&m(b.childNodes,function(d){a.invertChild(d,b);});if("SPAN"===b.tagName){var q=this.rotation,x=this.textWidth&&l(this.textWidth),K=[q,r,b.innerHTML,this.textWidth,this.textAlign].join(),d;(d=x!==this.oldTextWidth)&&!(d=x>this.oldTextWidth)&&((d=this.textPxLength)||(G(b,{width:"",whiteSpace:F||"nowrap"}),d=
    b.offsetWidth),d=d>x);d&&/[ \-]/.test(b.textContent||b.innerText)&&(G(b,{width:x+"px",display:"block",whiteSpace:F||"normal"}),this.oldTextWidth=x);K!==this.cTT&&(F=a.fontMetrics(b.style.fontSize).b,p(q)&&q!==(this.oldRotation||0)&&this.setSpanRotation(q,t,F),this.getSpanCorrection(!p(q)&&this.textPxLength||b.offsetWidth,F,t,q,r));G(b,{left:e+(this.xCorr||0)+"px",top:D+(this.yCorr||0)+"px"});this.cTT=K;this.oldRotation=q;}}else this.alignOnAdd=!0;},setSpanRotation:function(a,b,c){var f={},e=this.renderer.getTransformKey();
    f[e]=f.transform="rotate("+a+"deg)";f[e+(v?"Origin":"-origin")]=f.transformOrigin=100*b+"% "+c+"px";G(this.element,f);},getSpanCorrection:function(a,b,c){this.xCorr=-a*c;this.yCorr=-b;}});g(b.prototype,{getTransformKey:function(){return z&&!/Edge/.test(e.navigator.userAgent)?"-ms-transform":u?"-webkit-transform":v?"MozTransform":e.opera?"-o-transform":""},html:function(a,b,c){var f=this.createElement("span"),e=f.element,n=f.renderer,r=n.isSVG,l=function(a,b){m(["opacity","visibility"],function(c){t(a,
    c+"Setter",function(a,d,c,f){a.call(this,d,c,f);b[c]=d;});});a.addedSetters=!0;};f.textSetter=function(a){a!==e.innerHTML&&delete this.bBox;this.textStr=a;e.innerHTML=y(a,"");f.doTransform=!0;};r&&l(f,f.element.style);f.xSetter=f.ySetter=f.alignSetter=f.rotationSetter=function(a,b){"align"===b&&(b="textAlign");f[b]=a;f.doTransform=!0;};f.afterSetters=function(){this.doTransform&&(this.htmlUpdateTransform(),this.doTransform=!1);};f.attr({text:a,x:Math.round(b),y:Math.round(c)}).css({fontFamily:this.style.fontFamily,
    fontSize:this.style.fontSize,position:"absolute"});e.style.whiteSpace="nowrap";f.css=f.htmlCss;r&&(f.add=function(a){var b,c=n.box.parentNode,h=[];if(this.parentGroup=a){if(b=a.div,!b){for(;a;)h.push(a),a=a.parentGroup;m(h.reverse(),function(a){function d(k,d){a[d]=k;"translateX"===d?x.left=k+"px":x.top=k+"px";a.doTransform=!0;}var x,k=B(a.element,"class");k&&(k={className:k});b=a.div=a.div||C("div",k,{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px",display:a.display,opacity:a.opacity,
    pointerEvents:a.styles&&a.styles.pointerEvents},b||c);x=b.style;g(a,{classSetter:function(a){return function(k){this.element.setAttribute("class",k);a.className=k;}}(b),on:function(){h[0].div&&f.on.apply({element:h[0].div},arguments);return a},translateXSetter:d,translateYSetter:d});a.addedSetters||l(a,x);});}}else b=c;b.appendChild(e);f.added=!0;f.alignOnAdd&&f.htmlUpdateTransform();return f});return f}});})(L);(function(a){var B=a.defined,C=a.each,G=a.extend,p=a.merge,m=a.pick,g=a.timeUnits,v=a.win;
    a.Time=function(a){this.update(a,!1);};a.Time.prototype={defaultOptions:{},update:function(g){var u=m(g&&g.useUTC,!0),y=this;this.options=g=p(!0,this.options||{},g);this.Date=g.Date||v.Date;this.timezoneOffset=(this.useUTC=u)&&g.timezoneOffset;this.getTimezoneOffset=this.timezoneOffsetFunction();(this.variableTimezone=!(u&&!g.getTimezoneOffset&&!g.timezone))||this.timezoneOffset?(this.get=function(a,b){var e=b.getTime(),l=e-y.getTimezoneOffset(b);b.setTime(l);a=b["getUTC"+a]();b.setTime(e);return a},
    this.set=function(l,b,e){var t;if(-1!==a.inArray(l,["Milliseconds","Seconds","Minutes"]))b["set"+l](e);else t=y.getTimezoneOffset(b),t=b.getTime()-t,b.setTime(t),b["setUTC"+l](e),l=y.getTimezoneOffset(b),t=b.getTime()+l,b.setTime(t);}):u?(this.get=function(a,b){return b["getUTC"+a]()},this.set=function(a,b,e){return b["setUTC"+a](e)}):(this.get=function(a,b){return b["get"+a]()},this.set=function(a,b,e){return b["set"+a](e)});},makeTime:function(g,u,y,l,b,e){var t,n,f;this.useUTC?(t=this.Date.UTC.apply(0,
    arguments),n=this.getTimezoneOffset(t),t+=n,f=this.getTimezoneOffset(t),n!==f?t+=f-n:n-36E5!==this.getTimezoneOffset(t-36E5)||a.isSafari||(t-=36E5)):t=(new this.Date(g,u,m(y,1),m(l,0),m(b,0),m(e,0))).getTime();return t},timezoneOffsetFunction:function(){var g=this,m=this.options,y=v.moment;if(!this.useUTC)return function(a){return 6E4*(new Date(a)).getTimezoneOffset()};if(m.timezone){if(y)return function(a){return 6E4*-y.tz(a,m.timezone).utcOffset()};a.error(25);}return this.useUTC&&m.getTimezoneOffset?
    function(a){return 6E4*m.getTimezoneOffset(a)}:function(){return 6E4*(g.timezoneOffset||0)}},dateFormat:function(g,m,y){if(!a.defined(m)||isNaN(m))return a.defaultOptions.lang.invalidDate||"";g=a.pick(g,"%Y-%m-%d %H:%M:%S");var l=this,b=new this.Date(m),e=this.get("Hours",b),t=this.get("Day",b),n=this.get("Date",b),f=this.get("Month",b),c=this.get("FullYear",b),h=a.defaultOptions.lang,w=h.weekdays,D=h.shortWeekdays,r=a.pad,b=a.extend({a:D?D[t]:w[t].substr(0,3),A:w[t],d:r(n),e:r(n,2," "),w:t,b:h.shortMonths[f],
    B:h.months[f],m:r(f+1),y:c.toString().substr(2,2),Y:c,H:r(e),k:e,I:r(e%12||12),l:e%12||12,M:r(l.get("Minutes",b)),p:12>e?"AM":"PM",P:12>e?"am":"pm",S:r(b.getSeconds()),L:r(Math.round(m%1E3),3)},a.dateFormats);a.objectEach(b,function(a,b){for(;-1!==g.indexOf("%"+b);)g=g.replace("%"+b,"function"===typeof a?a.call(l,m):a);});return y?g.substr(0,1).toUpperCase()+g.substr(1):g},getTimeTicks:function(a,u,y,l){var b=this,e=[],t={},n,f=new b.Date(u),c=a.unitRange,h=a.count||1,w;if(B(u)){b.set("Milliseconds",
    f,c>=g.second?0:h*Math.floor(b.get("Milliseconds",f)/h));c>=g.second&&b.set("Seconds",f,c>=g.minute?0:h*Math.floor(b.get("Seconds",f)/h));c>=g.minute&&b.set("Minutes",f,c>=g.hour?0:h*Math.floor(b.get("Minutes",f)/h));c>=g.hour&&b.set("Hours",f,c>=g.day?0:h*Math.floor(b.get("Hours",f)/h));c>=g.day&&b.set("Date",f,c>=g.month?1:h*Math.floor(b.get("Date",f)/h));c>=g.month&&(b.set("Month",f,c>=g.year?0:h*Math.floor(b.get("Month",f)/h)),n=b.get("FullYear",f));c>=g.year&&b.set("FullYear",f,n-n%h);c===g.week&&
    b.set("Date",f,b.get("Date",f)-b.get("Day",f)+m(l,1));n=b.get("FullYear",f);l=b.get("Month",f);var D=b.get("Date",f),r=b.get("Hours",f);u=f.getTime();b.variableTimezone&&(w=y-u>4*g.month||b.getTimezoneOffset(u)!==b.getTimezoneOffset(y));f=f.getTime();for(u=1;f<y;)e.push(f),f=c===g.year?b.makeTime(n+u*h,0):c===g.month?b.makeTime(n,l+u*h):!w||c!==g.day&&c!==g.week?w&&c===g.hour&&1<h?b.makeTime(n,l,D,r+u*h):f+c*h:b.makeTime(n,l,D+u*h*(c===g.day?1:7)),u++;e.push(f);c<=g.hour&&1E4>e.length&&C(e,function(a){0===
    a%18E5&&"000000000"===b.dateFormat("%H%M%S%L",a)&&(t[a]="day");});}e.info=G(a,{higherRanks:t,totalRange:c*h});return e}};})(L);(function(a){var B=a.color,C=a.merge;a.defaultOptions={colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{},time:a.Time.prototype.defaultOptions,chart:{borderRadius:0,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:6},position:{align:"right",x:-10,y:10}},width:null,height:null,borderColor:"#335cad",backgroundColor:"#ffffff",plotBorderColor:"#cccccc"},
    title:{text:"Chart title",align:"center",margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},plotOptions:{},labels:{style:{position:"absolute",color:"#333333"}},legend:{enabled:!0,align:"center",alignColumns:!0,layout:"horizontal",labelFormatter:function(){return this.name},borderColor:"#999999",borderRadius:0,navigation:{activeColor:"#003399",inactiveColor:"#cccccc"},itemStyle:{color:"#333333",fontSize:"12px",fontWeight:"bold",textOverflow:"ellipsis"},itemHoverStyle:{color:"#000000"},
    itemHiddenStyle:{color:"#cccccc"},shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"#ffffff",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,animation:a.svg,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",
    minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",padding:8,snap:a.isTouchDevice?25:10,backgroundColor:B("#f7f7f7").setOpacity(.85).get(),borderWidth:1,headerFormat:'\x3cspan style\x3d"font-size: 10px"\x3e{point.key}\x3c/span\x3e\x3cbr/\x3e',pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e',shadow:!0,style:{color:"#333333",cursor:"default",
    fontSize:"12px",pointerEvents:"none",whiteSpace:"nowrap"}},credits:{enabled:!0,href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#999999",fontSize:"9px"},text:"Highcharts.com"}};a.setOptions=function(B){a.defaultOptions=C(!0,a.defaultOptions,B);a.time.update(C(a.defaultOptions.global,a.defaultOptions.time),!1);return a.defaultOptions};a.getOptions=function(){return a.defaultOptions};a.defaultPlotOptions=a.defaultOptions.plotOptions;
    a.time=new a.Time(C(a.defaultOptions.global,a.defaultOptions.time));a.dateFormat=function(C,p,m){return a.time.dateFormat(C,p,m)};})(L);(function(a){var B=a.correctFloat,C=a.defined,G=a.destroyObjectProperties,p=a.fireEvent,m=a.isNumber,g=a.merge,v=a.pick,z=a.deg2rad;a.Tick=function(a,g,l,b){this.axis=a;this.pos=g;this.type=l||"";this.isNewLabel=this.isNew=!0;l||b||this.addLabel();};a.Tick.prototype={addLabel:function(){var a=this.axis,m=a.options,l=a.chart,b=a.categories,e=a.names,t=this.pos,n=m.labels,
    f=a.tickPositions,c=t===f[0],h=t===f[f.length-1],e=b?v(b[t],e[t],t):t,b=this.label,f=f.info,w;a.isDatetimeAxis&&f&&(w=m.dateTimeLabelFormats[f.higherRanks[t]||f.unitName]);this.isFirst=c;this.isLast=h;m=a.labelFormatter.call({axis:a,chart:l,isFirst:c,isLast:h,dateTimeLabelFormat:w,value:a.isLog?B(a.lin2log(e)):e,pos:t});if(C(b))b&&b.attr({text:m});else{if(this.label=b=C(m)&&n.enabled?l.renderer.text(m,0,0,n.useHTML).css(g(n.style)).add(a.labelGroup):null)b.textPxLength=b.getBBox().width;this.rotation=
    0;}},getLabelSize:function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0},handleOverflow:function(a){var g=this.axis,l=g.options.labels,b=a.x,e=g.chart.chartWidth,t=g.chart.spacing,n=v(g.labelLeft,Math.min(g.pos,t[3])),t=v(g.labelRight,Math.max(g.isRadial?0:g.pos+g.len,e-t[1])),f=this.label,c=this.rotation,h={left:0,center:.5,right:1}[g.labelAlign||f.attr("align")],w=f.getBBox().width,D=g.getSlotWidth(),r=D,J=1,q,F={};if(c||!1===l.overflow)0>c&&b-h*w<n?q=Math.round(b/
    Math.cos(c*z)-n):0<c&&b+h*w>t&&(q=Math.round((e-b)/Math.cos(c*z)));else if(e=b+(1-h)*w,b-h*w<n?r=a.x+r*(1-h)-n:e>t&&(r=t-a.x+r*h,J=-1),r=Math.min(D,r),r<D&&"center"===g.labelAlign&&(a.x+=J*(D-r-h*(D-Math.min(w,r)))),w>r||g.autoRotation&&(f.styles||{}).width)q=r;q&&(F.width=q,(l.style||{}).textOverflow||(F.textOverflow="ellipsis"),f.css(F));},getPosition:function(g,m,l,b){var e=this.axis,t=e.chart,n=b&&t.oldChartHeight||t.chartHeight;g={x:g?a.correctFloat(e.translate(m+l,null,null,b)+e.transB):e.left+
    e.offset+(e.opposite?(b&&t.oldChartWidth||t.chartWidth)-e.right-e.left:0),y:g?n-e.bottom+e.offset-(e.opposite?e.height:0):a.correctFloat(n-e.translate(m+l,null,null,b)-e.transB)};p(this,"afterGetPosition",{pos:g});return g},getLabelPosition:function(a,g,l,b,e,t,n,f){var c=this.axis,h=c.transA,w=c.reversed,D=c.staggerLines,r=c.tickRotCorr||{x:0,y:0},J=e.y,q=b||c.reserveSpaceDefault?0:-c.labelOffset*("center"===c.labelAlign?.5:1),F={};C(J)||(J=0===c.side?l.rotation?-8:-l.getBBox().height:2===c.side?
    r.y+8:Math.cos(l.rotation*z)*(r.y-l.getBBox(!1,0).height/2));a=a+e.x+q+r.x-(t&&b?t*h*(w?-1:1):0);g=g+J-(t&&!b?t*h*(w?1:-1):0);D&&(l=n/(f||1)%D,c.opposite&&(l=D-l-1),g+=c.labelOffset/D*l);F.x=a;F.y=Math.round(g);p(this,"afterGetLabelPosition",{pos:F});return F},getMarkPath:function(a,g,l,b,e,t){return t.crispLine(["M",a,g,"L",a+(e?0:-l),g+(e?l:0)],b)},renderGridLine:function(a,g,l){var b=this.axis,e=b.options,t=this.gridLine,n={},f=this.pos,c=this.type,h=b.tickmarkOffset,w=b.chart.renderer,D=c?c+"Grid":
    "grid",r=e[D+"LineWidth"],J=e[D+"LineColor"],e=e[D+"LineDashStyle"];t||(n.stroke=J,n["stroke-width"]=r,e&&(n.dashstyle=e),c||(n.zIndex=1),a&&(n.opacity=0),this.gridLine=t=w.path().attr(n).addClass("highcharts-"+(c?c+"-":"")+"grid-line").add(b.gridGroup));if(!a&&t&&(a=b.getPlotLinePath(f+h,t.strokeWidth()*l,a,!0)))t[this.isNew?"attr":"animate"]({d:a,opacity:g});},renderMark:function(a,g,l){var b=this.axis,e=b.options,t=b.chart.renderer,n=this.type,f=n?n+"Tick":"tick",c=b.tickSize(f),h=this.mark,w=!h,
    D=a.x;a=a.y;var r=v(e[f+"Width"],!n&&b.isXAxis?1:0),e=e[f+"Color"];c&&(b.opposite&&(c[0]=-c[0]),w&&(this.mark=h=t.path().addClass("highcharts-"+(n?n+"-":"")+"tick").add(b.axisGroup),h.attr({stroke:e,"stroke-width":r})),h[w?"attr":"animate"]({d:this.getMarkPath(D,a,c[0],h.strokeWidth()*l,b.horiz,t),opacity:g}));},renderLabel:function(a,g,l,b){var e=this.axis,t=e.horiz,n=e.options,f=this.label,c=n.labels,h=c.step,e=e.tickmarkOffset,w=!0,D=a.x;a=a.y;f&&m(D)&&(f.xy=a=this.getLabelPosition(D,a,f,t,c,e,
    b,h),this.isFirst&&!this.isLast&&!v(n.showFirstLabel,1)||this.isLast&&!this.isFirst&&!v(n.showLastLabel,1)?w=!1:!t||c.step||c.rotation||g||0===l||this.handleOverflow(a),h&&b%h&&(w=!1),w&&m(a.y)?(a.opacity=l,f[this.isNewLabel?"attr":"animate"](a),this.isNewLabel=!1):(f.attr("y",-9999),this.isNewLabel=!0));},render:function(g,m,l){var b=this.axis,e=b.horiz,t=this.getPosition(e,this.pos,b.tickmarkOffset,m),n=t.x,f=t.y,b=e&&n===b.pos+b.len||!e&&f===b.pos?-1:1;l=v(l,1);this.isActive=!0;this.renderGridLine(m,
    l,b);this.renderMark(t,l,b);this.renderLabel(t,m,l,g);this.isNew=!1;a.fireEvent(this,"afterRender");},destroy:function(){G(this,this.axis);}};})(L);var da=function(a){var B=a.addEvent,C=a.animObject,G=a.arrayMax,p=a.arrayMin,m=a.color,g=a.correctFloat,v=a.defaultOptions,z=a.defined,u=a.deg2rad,y=a.destroyObjectProperties,l=a.each,b=a.extend,e=a.fireEvent,t=a.format,n=a.getMagnitude,f=a.grep,c=a.inArray,h=a.isArray,w=a.isNumber,D=a.isString,r=a.merge,J=a.normalizeTickInterval,q=a.objectEach,F=a.pick,
    x=a.removeEvent,K=a.splat,d=a.syncTimeout,H=a.Tick,E=function(){this.init.apply(this,arguments);};a.extend(E.prototype,{defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:!1,labels:{enabled:!0,style:{color:"#666666",cursor:"default",fontSize:"11px"},x:0},maxPadding:.01,minorTickLength:2,minorTickPosition:"outside",minPadding:.01,startOfWeek:1,startOnTick:!1,tickLength:10,tickmarkPlacement:"between",
    tickPixelInterval:100,tickPosition:"outside",title:{align:"middle",style:{color:"#666666"}},type:"linear",minorGridLineColor:"#f2f2f2",minorGridLineWidth:1,minorTickColor:"#999999",lineColor:"#ccd6eb",lineWidth:1,gridLineColor:"#e6e6e6",tickColor:"#ccd6eb"},defaultYAxisOptions:{endOnTick:!0,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},maxPadding:.05,minPadding:.05,startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{allowOverlap:!1,enabled:!1,formatter:function(){return a.numberFormat(this.total,
    -1)},style:{fontSize:"11px",fontWeight:"bold",color:"#000000",textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0},defaultLeftAxisOptions:{labels:{x:-15},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15},title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},defaultTopAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},init:function(a,d){var k=d.isX,b=this;b.chart=a;b.horiz=a.inverted&&!b.isZAxis?!k:k;b.isXAxis=k;b.coll=b.coll||
    (k?"xAxis":"yAxis");e(this,"init",{userOptions:d});b.opposite=d.opposite;b.side=d.side||(b.horiz?b.opposite?0:2:b.opposite?1:3);b.setOptions(d);var A=this.options,f=A.type;b.labelFormatter=A.labels.formatter||b.defaultLabelFormatter;b.userOptions=d;b.minPixelPadding=0;b.reversed=A.reversed;b.visible=!1!==A.visible;b.zoomEnabled=!1!==A.zoomEnabled;b.hasNames="category"===f||!0===A.categories;b.categories=A.categories||b.hasNames;b.names||(b.names=[],b.names.keys={});b.plotLinesAndBandsGroups={};b.isLog=
    "logarithmic"===f;b.isDatetimeAxis="datetime"===f;b.positiveValuesOnly=b.isLog&&!b.allowNegativeLog;b.isLinked=z(A.linkedTo);b.ticks={};b.labelEdge=[];b.minorTicks={};b.plotLinesAndBands=[];b.alternateBands={};b.len=0;b.minRange=b.userMinRange=A.minRange||A.maxZoom;b.range=A.range;b.offset=A.offset||0;b.stacks={};b.oldStacks={};b.stacksTouched=0;b.max=null;b.min=null;b.crosshair=F(A.crosshair,K(a.options.tooltip.crosshairs)[k?0:1],!1);d=b.options.events;-1===c(b,a.axes)&&(k?a.axes.splice(a.xAxis.length,
    0,b):a.axes.push(b),a[b.coll].push(b));b.series=b.series||[];a.inverted&&!b.isZAxis&&k&&void 0===b.reversed&&(b.reversed=!0);q(d,function(a,k){B(b,k,a);});b.lin2log=A.linearToLogConverter||b.lin2log;b.isLog&&(b.val2lin=b.log2lin,b.lin2val=b.lin2log);e(this,"afterInit");},setOptions:function(a){this.options=r(this.defaultOptions,"yAxis"===this.coll&&this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],
    r(v[this.coll],a));e(this,"afterSetOptions",{userOptions:a});},defaultLabelFormatter:function(){var k=this.axis,d=this.value,b=k.chart.time,c=k.categories,f=this.dateTimeLabelFormat,h=v.lang,x=h.numericSymbols,h=h.numericSymbolMagnitude||1E3,e=x&&x.length,r,n=k.options.labels.format,k=k.isLog?Math.abs(d):k.tickInterval;if(n)r=t(n,this,b);else if(c)r=d;else if(f)r=b.dateFormat(f,d);else if(e&&1E3<=k)for(;e--&&void 0===r;)b=Math.pow(h,e+1),k>=b&&0===10*d%b&&null!==x[e]&&0!==d&&(r=a.numberFormat(d/b,
    -1)+x[e]);void 0===r&&(r=1E4<=Math.abs(d)?a.numberFormat(d,-1):a.numberFormat(d,-1,void 0,""));return r},getSeriesExtremes:function(){var a=this,d=a.chart;e(this,"getSeriesExtremes",null,function(){a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.threshold=null;a.softThreshold=!a.isXAxis;a.buildStacks&&a.buildStacks();l(a.series,function(k){if(k.visible||!d.options.chart.ignoreHiddenSeries){var b=k.options,A=b.threshold,c;a.hasVisibleSeries=!0;a.positiveValuesOnly&&0>=A&&(A=null);if(a.isXAxis)b=k.xData,
    b.length&&(k=p(b),c=G(b),w(k)||k instanceof Date||(b=f(b,w),k=p(b),c=G(b)),b.length&&(a.dataMin=Math.min(F(a.dataMin,b[0],k),k),a.dataMax=Math.max(F(a.dataMax,b[0],c),c)));else if(k.getExtremes(),c=k.dataMax,k=k.dataMin,z(k)&&z(c)&&(a.dataMin=Math.min(F(a.dataMin,k),k),a.dataMax=Math.max(F(a.dataMax,c),c)),z(A)&&(a.threshold=A),!b.softThreshold||a.positiveValuesOnly)a.softThreshold=!1;}});});e(this,"afterGetSeriesExtremes");},translate:function(a,d,b,c,f,h){var k=this.linkedParent||this,A=1,x=0,I=c?
    k.oldTransA:k.transA;c=c?k.oldMin:k.min;var e=k.minPixelPadding;f=(k.isOrdinal||k.isBroken||k.isLog&&f)&&k.lin2val;I||(I=k.transA);b&&(A*=-1,x=k.len);k.reversed&&(A*=-1,x-=A*(k.sector||k.len));d?(a=(a*A+x-e)/I+c,f&&(a=k.lin2val(a))):(f&&(a=k.val2lin(a)),a=w(c)?A*(a-c)*I+x+A*e+(w(h)?I*h:0):void 0);return a},toPixels:function(a,d){return this.translate(a,!1,!this.horiz,null,!0)+(d?0:this.pos)},toValue:function(a,d){return this.translate(a-(d?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a,
    d,b,c,f){var k=this.chart,A=this.left,h=this.top,x,I,e=b&&k.oldChartHeight||k.chartHeight,r=b&&k.oldChartWidth||k.chartWidth,n;x=this.transB;var q=function(a,k,d){if(a<k||a>d)c?a=Math.min(Math.max(k,a),d):n=!0;return a};f=F(f,this.translate(a,null,null,b));f=Math.min(Math.max(-1E5,f),1E5);a=b=Math.round(f+x);x=I=Math.round(e-f-x);w(f)?this.horiz?(x=h,I=e-this.bottom,a=b=q(a,A,A+this.width)):(a=A,b=r-this.right,x=I=q(x,h,h+this.height)):(n=!0,c=!1);return n&&!c?null:k.renderer.crispLine(["M",a,x,"L",
    b,I],d||1)},getLinearTickPositions:function(a,d,b){var k,A=g(Math.floor(d/a)*a);b=g(Math.ceil(b/a)*a);var c=[],f;g(A+a)===A&&(f=20);if(this.single)return [d];for(d=A;d<=b;){c.push(d);d=g(d+a,f);if(d===k)break;k=d;}return c},getMinorTickInterval:function(){var a=this.options;return !0===a.minorTicks?F(a.minorTickInterval,"auto"):!1===a.minorTicks?null:a.minorTickInterval},getMinorTickPositions:function(){var a=this,d=a.options,b=a.tickPositions,c=a.minorTickInterval,f=[],h=a.pointRangePadding||0,x=a.min-
    h,h=a.max+h,e=h-x;if(e&&e/c<a.len/3)if(a.isLog)l(this.paddedTicks,function(k,d,b){d&&f.push.apply(f,a.getLogTickPositions(c,b[d-1],b[d],!0));});else if(a.isDatetimeAxis&&"auto"===this.getMinorTickInterval())f=f.concat(a.getTimeTicks(a.normalizeTimeTickInterval(c),x,h,d.startOfWeek));else for(d=x+(b[0]-x)%c;d<=h&&d!==f[0];d+=c)f.push(d);0!==f.length&&a.trimTicks(f);return f},adjustForMinRange:function(){var a=this.options,d=this.min,b=this.max,c,f,h,x,e,r,n,q;this.isXAxis&&void 0===this.minRange&&!this.isLog&&
    (z(a.min)||z(a.max)?this.minRange=null:(l(this.series,function(a){r=a.xData;for(x=n=a.xIncrement?1:r.length-1;0<x;x--)if(e=r[x]-r[x-1],void 0===h||e<h)h=e;}),this.minRange=Math.min(5*h,this.dataMax-this.dataMin)));b-d<this.minRange&&(f=this.dataMax-this.dataMin>=this.minRange,q=this.minRange,c=(q-b+d)/2,c=[d-c,F(a.min,d-c)],f&&(c[2]=this.isLog?this.log2lin(this.dataMin):this.dataMin),d=G(c),b=[d+q,F(a.max,d+q)],f&&(b[2]=this.isLog?this.log2lin(this.dataMax):this.dataMax),b=p(b),b-d<q&&(c[0]=b-q,c[1]=
    F(a.min,b-q),d=G(c)));this.min=d;this.max=b;},getClosest:function(){var a;this.categories?a=1:l(this.series,function(k){var d=k.closestPointRange,b=k.visible||!k.chart.options.chart.ignoreHiddenSeries;!k.noSharedTooltip&&z(d)&&b&&(a=z(a)?Math.min(a,d):d);});return a},nameToX:function(a){var k=h(this.categories),d=k?this.categories:this.names,b=a.options.x,f;a.series.requireSorting=!1;z(b)||(b=!1===this.options.uniqueNames?a.series.autoIncrement():k?c(a.name,d):F(d.keys[a.name],-1));-1===b?k||(f=d.length):
    f=b;void 0!==f&&(this.names[f]=a.name,this.names.keys[a.name]=f);return f},updateNames:function(){var k=this,d=this.names;0<d.length&&(l(a.keys(d.keys),function(a){delete d.keys[a];}),d.length=0,this.minRange=this.userMinRange,l(this.series||[],function(a){a.xIncrement=null;if(!a.points||a.isDirtyData)a.processData(),a.generatePoints();l(a.points,function(d,b){var c;d.options&&(c=k.nameToX(d),void 0!==c&&c!==d.x&&(d.x=c,a.xData[b]=c));});}));},setAxisTranslation:function(a){var k=this,d=k.max-k.min,b=
    k.axisPointRange||0,c,f=0,h=0,x=k.linkedParent,r=!!k.categories,n=k.transA,q=k.isXAxis;if(q||r||b)c=k.getClosest(),x?(f=x.minPointOffset,h=x.pointRangePadding):l(k.series,function(a){var d=r?1:q?F(a.options.pointRange,c,0):k.axisPointRange||0;a=a.options.pointPlacement;b=Math.max(b,d);k.single||(f=Math.max(f,D(a)?0:d/2),h=Math.max(h,"on"===a?0:d));}),x=k.ordinalSlope&&c?k.ordinalSlope/c:1,k.minPointOffset=f*=x,k.pointRangePadding=h*=x,k.pointRange=Math.min(b,d),q&&(k.closestPointRange=c);a&&(k.oldTransA=
    n);k.translationSlope=k.transA=n=k.options.staticScale||k.len/(d+h||1);k.transB=k.horiz?k.left:k.bottom;k.minPixelPadding=n*f;e(this,"afterSetAxisTranslation");},minFromRange:function(){return this.max-this.range},setTickInterval:function(k){var d=this,b=d.chart,c=d.options,f=d.isLog,h=d.isDatetimeAxis,x=d.isXAxis,r=d.isLinked,q=c.maxPadding,E=c.minPadding,D=c.tickInterval,H=c.tickPixelInterval,t=d.categories,K=w(d.threshold)?d.threshold:null,m=d.softThreshold,y,v,u,p;h||t||r||this.getTickAmount();
    u=F(d.userMin,c.min);p=F(d.userMax,c.max);r?(d.linkedParent=b[d.coll][c.linkedTo],b=d.linkedParent.getExtremes(),d.min=F(b.min,b.dataMin),d.max=F(b.max,b.dataMax),c.type!==d.linkedParent.options.type&&a.error(11,1)):(!m&&z(K)&&(d.dataMin>=K?(y=K,E=0):d.dataMax<=K&&(v=K,q=0)),d.min=F(u,y,d.dataMin),d.max=F(p,v,d.dataMax));f&&(d.positiveValuesOnly&&!k&&0>=Math.min(d.min,F(d.dataMin,d.min))&&a.error(10,1),d.min=g(d.log2lin(d.min),15),d.max=g(d.log2lin(d.max),15));d.range&&z(d.max)&&(d.userMin=d.min=
    u=Math.max(d.dataMin,d.minFromRange()),d.userMax=p=d.max,d.range=null);e(d,"foundExtremes");d.beforePadding&&d.beforePadding();d.adjustForMinRange();!(t||d.axisPointRange||d.usePercentage||r)&&z(d.min)&&z(d.max)&&(b=d.max-d.min)&&(!z(u)&&E&&(d.min-=b*E),!z(p)&&q&&(d.max+=b*q));w(c.softMin)&&!w(d.userMin)&&(d.min=Math.min(d.min,c.softMin));w(c.softMax)&&!w(d.userMax)&&(d.max=Math.max(d.max,c.softMax));w(c.floor)&&(d.min=Math.max(d.min,c.floor));w(c.ceiling)&&(d.max=Math.min(d.max,c.ceiling));m&&z(d.dataMin)&&
    (K=K||0,!z(u)&&d.min<K&&d.dataMin>=K?d.min=K:!z(p)&&d.max>K&&d.dataMax<=K&&(d.max=K));d.tickInterval=d.min===d.max||void 0===d.min||void 0===d.max?1:r&&!D&&H===d.linkedParent.options.tickPixelInterval?D=d.linkedParent.tickInterval:F(D,this.tickAmount?(d.max-d.min)/Math.max(this.tickAmount-1,1):void 0,t?1:(d.max-d.min)*H/Math.max(d.len,H));x&&!k&&l(d.series,function(a){a.processData(d.min!==d.oldMin||d.max!==d.oldMax);});d.setAxisTranslation(!0);d.beforeSetTickPositions&&d.beforeSetTickPositions();
    d.postProcessTickInterval&&(d.tickInterval=d.postProcessTickInterval(d.tickInterval));d.pointRange&&!D&&(d.tickInterval=Math.max(d.pointRange,d.tickInterval));k=F(c.minTickInterval,d.isDatetimeAxis&&d.closestPointRange);!D&&d.tickInterval<k&&(d.tickInterval=k);h||f||D||(d.tickInterval=J(d.tickInterval,null,n(d.tickInterval),F(c.allowDecimals,!(.5<d.tickInterval&&5>d.tickInterval&&1E3<d.max&&9999>d.max)),!!this.tickAmount));this.tickAmount||(d.tickInterval=d.unsquish());this.setTickPositions();},setTickPositions:function(){var a=
    this.options,d,b=a.tickPositions;d=this.getMinorTickInterval();var c=a.tickPositioner,f=a.startOnTick,h=a.endOnTick;this.tickmarkOffset=this.categories&&"between"===a.tickmarkPlacement&&1===this.tickInterval?.5:0;this.minorTickInterval="auto"===d&&this.tickInterval?this.tickInterval/5:d;this.single=this.min===this.max&&z(this.min)&&!this.tickAmount&&(parseInt(this.min,10)===this.min||!1!==a.allowDecimals);this.tickPositions=d=b&&b.slice();!d&&(d=this.isDatetimeAxis?this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,
    a.units),this.min,this.max,a.startOfWeek,this.ordinalPositions,this.closestPointRange,!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max),d.length>this.len&&(d=[d[0],d.pop()],d[0]===d[1]&&(d.length=1)),this.tickPositions=d,c&&(c=c.apply(this,[this.min,this.max])))&&(this.tickPositions=d=c);this.paddedTicks=d.slice(0);this.trimTicks(d,f,h);this.isLinked||(this.single&&2>d.length&&(this.min-=.5,this.max+=.5),b||
    c||this.adjustTickAmount());e(this,"afterSetTickPositions");},trimTicks:function(a,d,b){var k=a[0],c=a[a.length-1],f=this.minPointOffset||0;if(!this.isLinked){if(d&&-Infinity!==k)this.min=k;else for(;this.min-f>a[0];)a.shift();if(b)this.max=c;else for(;this.max+f<a[a.length-1];)a.pop();0===a.length&&z(k)&&!this.options.tickPositions&&a.push((c+k)/2);}},alignToOthers:function(){var a={},d,b=this.options;!1===this.chart.options.chart.alignTicks||!1===b.alignTicks||!1===b.startOnTick||!1===b.endOnTick||
    this.isLog||l(this.chart[this.coll],function(k){var b=k.options,b=[k.horiz?b.left:b.top,b.width,b.height,b.pane].join();k.series.length&&(a[b]?d=!0:a[b]=1);});return d},getTickAmount:function(){var a=this.options,d=a.tickAmount,b=a.tickPixelInterval;!z(a.tickInterval)&&this.len<b&&!this.isRadial&&!this.isLog&&a.startOnTick&&a.endOnTick&&(d=2);!d&&this.alignToOthers()&&(d=Math.ceil(this.len/b)+1);4>d&&(this.finalTickAmt=d,d=5);this.tickAmount=d;},adjustTickAmount:function(){var a=this.tickInterval,d=
    this.tickPositions,b=this.tickAmount,c=this.finalTickAmt,f=d&&d.length,h=F(this.threshold,this.softThreshold?0:null);if(this.hasData()){if(f<b){for(;d.length<b;)d.length%2||this.min===h?d.push(g(d[d.length-1]+a)):d.unshift(g(d[0]-a));this.transA*=(f-1)/(b-1);this.min=d[0];this.max=d[d.length-1];}else f>b&&(this.tickInterval*=2,this.setTickPositions());if(z(c)){for(a=b=d.length;a--;)(3===c&&1===a%2||2>=c&&0<a&&a<b-1)&&d.splice(a,1);this.finalTickAmt=void 0;}}},setScale:function(){var a,d;this.oldMin=
    this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();d=this.len!==this.oldAxisLength;l(this.series,function(d){if(d.isDirtyData||d.isDirty||d.xAxis.isDirty)a=!0;});d||a||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()?(this.resetStacks&&this.resetStacks(),this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=this.userMin,this.oldUserMax=this.userMax,this.isDirty||(this.isDirty=
    d||this.min!==this.oldMin||this.max!==this.oldMax)):this.cleanStacks&&this.cleanStacks();e(this,"afterSetScale");},setExtremes:function(a,d,c,f,h){var k=this,x=k.chart;c=F(c,!0);l(k.series,function(a){delete a.kdTree;});h=b(h,{min:a,max:d});e(k,"setExtremes",h,function(){k.userMin=a;k.userMax=d;k.eventArgs=h;c&&x.redraw(f);});},zoom:function(a,d){var k=this.dataMin,b=this.dataMax,c=this.options,f=Math.min(k,F(c.min,k)),c=Math.max(b,F(c.max,b));if(a!==this.min||d!==this.max)this.allowZoomOutside||(z(k)&&
    (a<f&&(a=f),a>c&&(a=c)),z(b)&&(d<f&&(d=f),d>c&&(d=c))),this.displayBtn=void 0!==a||void 0!==d,this.setExtremes(a,d,!1,void 0,{trigger:"zoom"});return !0},setAxisSize:function(){var d=this.chart,b=this.options,c=b.offsets||[0,0,0,0],f=this.horiz,h=this.width=Math.round(a.relativeLength(F(b.width,d.plotWidth-c[3]+c[1]),d.plotWidth)),x=this.height=Math.round(a.relativeLength(F(b.height,d.plotHeight-c[0]+c[2]),d.plotHeight)),e=this.top=Math.round(a.relativeLength(F(b.top,d.plotTop+c[0]),d.plotHeight,d.plotTop)),
    b=this.left=Math.round(a.relativeLength(F(b.left,d.plotLeft+c[3]),d.plotWidth,d.plotLeft));this.bottom=d.chartHeight-x-e;this.right=d.chartWidth-h-b;this.len=Math.max(f?h:x,0);this.pos=f?b:e;},getExtremes:function(){var a=this.isLog;return {min:a?g(this.lin2log(this.min)):this.min,max:a?g(this.lin2log(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var d=this.isLog,k=d?this.lin2log(this.min):this.min,d=d?this.lin2log(this.max):
    this.max;null===a||-Infinity===a?a=k:Infinity===a?a=d:k>a?a=k:d<a&&(a=d);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){a=(F(a,0)-90*this.side+720)%360;return 15<a&&165>a?"right":195<a&&345>a?"left":"center"},tickSize:function(a){var d=this.options,k=d[a+"Length"],b=F(d[a+"Width"],"tick"===a&&this.isXAxis?1:0);if(b&&k)return "inside"===d[a+"Position"]&&(k=-k),[k,b]},labelMetrics:function(){var a=this.tickPositions&&this.tickPositions[0]||0;return this.chart.renderer.fontMetrics(this.options.labels.style&&
    this.options.labels.style.fontSize,this.ticks[a]&&this.ticks[a].label)},unsquish:function(){var a=this.options.labels,d=this.horiz,b=this.tickInterval,c=b,f=this.len/(((this.categories?1:0)+this.max-this.min)/b),h,x=a.rotation,e=this.labelMetrics(),r,q=Number.MAX_VALUE,n,w=function(a){a/=f||1;a=1<a?Math.ceil(a):1;return g(a*b)};d?(n=!a.staggerLines&&!a.step&&(z(x)?[x]:f<F(a.autoRotationLimit,80)&&a.autoRotation))&&l(n,function(a){var d;if(a===x||a&&-90<=a&&90>=a)r=w(Math.abs(e.h/Math.sin(u*a))),d=
    r+Math.abs(a/360),d<q&&(q=d,h=a,c=r);}):a.step||(c=w(e.h));this.autoRotation=n;this.labelRotation=F(h,x);return c},getSlotWidth:function(){var a=this.chart,d=this.horiz,b=this.options.labels,c=Math.max(this.tickPositions.length-(this.categories?0:1),1),f=a.margin[3];return d&&2>(b.step||0)&&!b.rotation&&(this.staggerLines||1)*this.len/c||!d&&(b.style&&parseInt(b.style.width,10)||f&&f-a.spacing[3]||.33*a.chartWidth)},renderUnsquish:function(){var a=this.chart,d=a.renderer,b=this.tickPositions,c=this.ticks,
    f=this.options.labels,h=this.horiz,x=this.getSlotWidth(),e=Math.max(1,Math.round(x-2*(f.padding||5))),r={},q=this.labelMetrics(),n=f.style&&f.style.textOverflow,w,E,H=0,t;D(f.rotation)||(r.rotation=f.rotation||0);l(b,function(a){(a=c[a])&&a.label&&a.label.textPxLength>H&&(H=a.label.textPxLength);});this.maxLabelLength=H;if(this.autoRotation)H>e&&H>q.h?r.rotation=this.labelRotation:this.labelRotation=0;else if(x&&(w=e,!n))for(E="clip",e=b.length;!h&&e--;)if(t=b[e],t=c[t].label)t.styles&&"ellipsis"===
    t.styles.textOverflow?t.css({textOverflow:"clip"}):t.textPxLength>x&&t.css({width:x+"px"}),t.getBBox().height>this.len/b.length-(q.h-q.f)&&(t.specificTextOverflow="ellipsis");r.rotation&&(w=H>.5*a.chartHeight?.33*a.chartHeight:a.chartHeight,n||(E="ellipsis"));if(this.labelAlign=f.align||this.autoLabelAlign(this.labelRotation))r.align=this.labelAlign;l(b,function(a){var d=(a=c[a])&&a.label,b={};d&&(d.attr(r),!w||f.style&&f.style.width||!(w<d.textPxLength||"SPAN"===d.element.tagName)||(b.width=w,n||
    (b.textOverflow=d.specificTextOverflow||E),d.css(b)),delete d.specificTextOverflow,a.rotation=r.rotation);});this.tickRotCorr=d.rotCorr(q.b,this.labelRotation||0,0!==this.side);},hasData:function(){return this.hasVisibleSeries||z(this.min)&&z(this.max)&&this.tickPositions&&0<this.tickPositions.length},addTitle:function(a){var d=this.chart.renderer,b=this.horiz,k=this.opposite,c=this.options.title,f;this.axisTitle||((f=c.textAlign)||(f=(b?{low:"left",middle:"center",high:"right"}:{low:k?"right":"left",
    middle:"center",high:k?"left":"right"})[c.align]),this.axisTitle=d.text(c.text,0,0,c.useHTML).attr({zIndex:7,rotation:c.rotation||0,align:f}).addClass("highcharts-axis-title").css(r(c.style)).add(this.axisGroup),this.axisTitle.isNew=!0);c.style.width||this.isRadial||this.axisTitle.css({width:this.len});this.axisTitle[a?"show":"hide"](!0);},generateTick:function(a){var d=this.ticks;d[a]?d[a].addLabel():d[a]=new H(this,a);},getOffset:function(){var a=this,d=a.chart,b=d.renderer,c=a.options,f=a.tickPositions,
    h=a.ticks,x=a.horiz,e=a.side,r=d.inverted&&!a.isZAxis?[1,0,3,2][e]:e,n,w,E=0,D,H=0,t=c.title,K=c.labels,g=0,J=d.axisOffset,d=d.clipOffset,m=[-1,1,1,-1][e],y=c.className,v=a.axisParent,u=this.tickSize("tick");n=a.hasData();a.showAxis=w=n||F(c.showEmpty,!0);a.staggerLines=a.horiz&&K.staggerLines;a.axisGroup||(a.gridGroup=b.g("grid").attr({zIndex:c.gridZIndex||1}).addClass("highcharts-"+this.coll.toLowerCase()+"-grid "+(y||"")).add(v),a.axisGroup=b.g("axis").attr({zIndex:c.zIndex||2}).addClass("highcharts-"+
    this.coll.toLowerCase()+" "+(y||"")).add(v),a.labelGroup=b.g("axis-labels").attr({zIndex:K.zIndex||7}).addClass("highcharts-"+a.coll.toLowerCase()+"-labels "+(y||"")).add(v));n||a.isLinked?(l(f,function(d,b){a.generateTick(d,b);}),a.renderUnsquish(),a.reserveSpaceDefault=0===e||2===e||{1:"left",3:"right"}[e]===a.labelAlign,F(K.reserveSpace,"center"===a.labelAlign?!0:null,a.reserveSpaceDefault)&&l(f,function(a){g=Math.max(h[a].getLabelSize(),g);}),a.staggerLines&&(g*=a.staggerLines),a.labelOffset=g*
    (a.opposite?-1:1)):q(h,function(a,d){a.destroy();delete h[d];});t&&t.text&&!1!==t.enabled&&(a.addTitle(w),w&&!1!==t.reserveSpace&&(a.titleOffset=E=a.axisTitle.getBBox()[x?"height":"width"],D=t.offset,H=z(D)?0:F(t.margin,x?5:10)));a.renderLine();a.offset=m*F(c.offset,J[e]);a.tickRotCorr=a.tickRotCorr||{x:0,y:0};b=0===e?-a.labelMetrics().h:2===e?a.tickRotCorr.y:0;H=Math.abs(g)+H;g&&(H=H-b+m*(x?F(K.y,a.tickRotCorr.y+8*m):K.x));a.axisTitleMargin=F(D,H);J[e]=Math.max(J[e],a.axisTitleMargin+E+m*a.offset,
    H,n&&f.length&&u?u[0]+m*a.offset:0);c=c.offset?0:2*Math.floor(a.axisLine.strokeWidth()/2);d[r]=Math.max(d[r],c);},getLinePath:function(a){var d=this.chart,b=this.opposite,k=this.offset,c=this.horiz,f=this.left+(b?this.width:0)+k,k=d.chartHeight-this.bottom-(b?this.height:0)+k;b&&(a*=-1);return d.renderer.crispLine(["M",c?this.left:f,c?k:this.top,"L",c?d.chartWidth-this.right:f,c?k:d.chartHeight-this.bottom],a)},renderLine:function(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),
    this.axisLine.attr({stroke:this.options.lineColor,"stroke-width":this.options.lineWidth,zIndex:7}));},getTitlePosition:function(){var a=this.horiz,d=this.left,b=this.top,c=this.len,f=this.options.title,h=a?d:b,x=this.opposite,e=this.offset,r=f.x||0,n=f.y||0,q=this.axisTitle,w=this.chart.renderer.fontMetrics(f.style&&f.style.fontSize,q),q=Math.max(q.getBBox(null,0).height-w.h-1,0),c={low:h+(a?0:c),middle:h+c/2,high:h+(a?c:0)}[f.align],d=(a?b+this.height:d)+(a?1:-1)*(x?-1:1)*this.axisTitleMargin+[-q,
    q,w.f,-q][this.side];return {x:a?c+r:d+(x?this.width:0)+e+r,y:a?d+n-(x?this.height:0)+e:c+n}},renderMinorTick:function(a){var d=this.chart.hasRendered&&w(this.oldMin),b=this.minorTicks;b[a]||(b[a]=new H(this,a,"minor"));d&&b[a].isNew&&b[a].render(null,!0);b[a].render(null,!1,1);},renderTick:function(a,d){var b=this.isLinked,k=this.ticks,c=this.chart.hasRendered&&w(this.oldMin);if(!b||a>=this.min&&a<=this.max)k[a]||(k[a]=new H(this,a)),c&&k[a].isNew&&k[a].render(d,!0,.1),k[a].render(d);},render:function(){var b=
    this,c=b.chart,f=b.options,h=b.isLog,x=b.isLinked,r=b.tickPositions,n=b.axisTitle,E=b.ticks,D=b.minorTicks,t=b.alternateBands,K=f.stackLabels,F=f.alternateGridColor,g=b.tickmarkOffset,J=b.axisLine,m=b.showAxis,y=C(c.renderer.globalAnimation),v,u;b.labelEdge.length=0;b.overlap=!1;l([E,D,t],function(a){q(a,function(a){a.isActive=!1;});});if(b.hasData()||x)b.minorTickInterval&&!b.categories&&l(b.getMinorTickPositions(),function(a){b.renderMinorTick(a);}),r.length&&(l(r,function(a,d){b.renderTick(a,d);}),
    g&&(0===b.min||b.single)&&(E[-1]||(E[-1]=new H(b,-1,null,!0)),E[-1].render(-1))),F&&l(r,function(d,k){u=void 0!==r[k+1]?r[k+1]+g:b.max-g;0===k%2&&d<b.max&&u<=b.max+(c.polar?-g:g)&&(t[d]||(t[d]=new a.PlotLineOrBand(b)),v=d+g,t[d].options={from:h?b.lin2log(v):v,to:h?b.lin2log(u):u,color:F},t[d].render(),t[d].isActive=!0);}),b._addedPlotLB||(l((f.plotLines||[]).concat(f.plotBands||[]),function(a){b.addPlotBandOrLine(a);}),b._addedPlotLB=!0);l([E,D,t],function(a){var b,k=[],f=y.duration;q(a,function(a,
    d){a.isActive||(a.render(d,!1,0),a.isActive=!1,k.push(d));});d(function(){for(b=k.length;b--;)a[k[b]]&&!a[k[b]].isActive&&(a[k[b]].destroy(),delete a[k[b]]);},a!==t&&c.hasRendered&&f?f:0);});J&&(J[J.isPlaced?"animate":"attr"]({d:this.getLinePath(J.strokeWidth())}),J.isPlaced=!0,J[m?"show":"hide"](!0));n&&m&&(f=b.getTitlePosition(),w(f.y)?(n[n.isNew?"attr":"animate"](f),n.isNew=!1):(n.attr("y",-9999),n.isNew=!0));K&&K.enabled&&b.renderStackTotals();b.isDirty=!1;e(this,"afterRender");},redraw:function(){this.visible&&
    (this.render(),l(this.plotLinesAndBands,function(a){a.render();}));l(this.series,function(a){a.isDirty=!0;});},keepProps:"extKey hcEvents names series userMax userMin".split(" "),destroy:function(a){var d=this,b=d.stacks,k=d.plotLinesAndBands,f;e(this,"destroy",{keepEvents:a});a||x(d);q(b,function(a,d){y(a);b[d]=null;});l([d.ticks,d.minorTicks,d.alternateBands],function(a){y(a);});if(k)for(a=k.length;a--;)k[a].destroy();l("stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross".split(" "),
    function(a){d[a]&&(d[a]=d[a].destroy());});for(f in d.plotLinesAndBandsGroups)d.plotLinesAndBandsGroups[f]=d.plotLinesAndBandsGroups[f].destroy();q(d,function(a,b){-1===c(b,d.keepProps)&&delete d[b];});},drawCrosshair:function(a,d){var b,c=this.crosshair,k=F(c.snap,!0),f,h=this.cross;e(this,"drawCrosshair",{e:a,point:d});a||(a=this.cross&&this.cross.e);if(this.crosshair&&!1!==(z(d)||!k)){k?z(d)&&(f=F(d.crosshairPos,this.isXAxis?d.plotX:this.len-d.plotY)):f=a&&(this.horiz?a.chartX-this.pos:this.len-a.chartY+
    this.pos);z(f)&&(b=this.getPlotLinePath(d&&(this.isXAxis?d.x:F(d.stackY,d.y)),null,null,null,f)||null);if(!z(b)){this.hideCrosshair();return}k=this.categories&&!this.isRadial;h||(this.cross=h=this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+(k?"category ":"thin ")+c.className).attr({zIndex:F(c.zIndex,2)}).add(),h.attr({stroke:c.color||(k?m("#ccd6eb").setOpacity(.25).get():"#cccccc"),"stroke-width":F(c.width,1)}).css({"pointer-events":"none"}),c.dashStyle&&h.attr({dashstyle:c.dashStyle}));
    h.show().attr({d:b});k&&!c.width&&h.attr({"stroke-width":this.transA});this.cross.e=a;}else this.hideCrosshair();e(this,"afterDrawCrosshair",{e:a,point:d});},hideCrosshair:function(){this.cross&&this.cross.hide();}});return a.Axis=E}(L);(function(a){var B=a.Axis,C=a.getMagnitude,G=a.normalizeTickInterval,p=a.timeUnits;B.prototype.getTimeTicks=function(){return this.chart.time.getTimeTicks.apply(this.chart.time,arguments)};B.prototype.normalizeTimeTickInterval=function(a,g){var m=g||[["millisecond",[1,
    2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]];g=m[m.length-1];var z=p[g[0]],u=g[1],y;for(y=0;y<m.length&&!(g=m[y],z=p[g[0]],u=g[1],m[y+1]&&a<=(z*u[u.length-1]+p[m[y+1][0]])/2);y++);z===p.year&&a<5*z&&(u=[1,2,5]);a=G(a/z,u,"year"===g[0]?Math.max(C(a/z),1):1);return {unitRange:z,count:a,unitName:g[0]}};})(L);(function(a){var B=a.Axis,C=a.getMagnitude,G=a.map,p=a.normalizeTickInterval,
    m=a.pick;B.prototype.getLogTickPositions=function(a,v,z,u){var g=this.options,l=this.len,b=[];u||(this._minorAutoInterval=null);if(.5<=a)a=Math.round(a),b=this.getLinearTickPositions(a,v,z);else if(.08<=a)for(var l=Math.floor(v),e,t,n,f,c,g=.3<a?[1,2,4]:.15<a?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];l<z+1&&!c;l++)for(t=g.length,e=0;e<t&&!c;e++)n=this.log2lin(this.lin2log(l)*g[e]),n>v&&(!u||f<=z)&&void 0!==f&&b.push(f),f>z&&(c=!0),f=n;else v=this.lin2log(v),z=this.lin2log(z),a=u?this.getMinorTickInterval():
    g.tickInterval,a=m("auto"===a?null:a,this._minorAutoInterval,g.tickPixelInterval/(u?5:1)*(z-v)/((u?l/this.tickPositions.length:l)||1)),a=p(a,null,C(a)),b=G(this.getLinearTickPositions(a,v,z),this.log2lin),u||(this._minorAutoInterval=a/5);u||(this.tickInterval=a);return b};B.prototype.log2lin=function(a){return Math.log(a)/Math.LN10};B.prototype.lin2log=function(a){return Math.pow(10,a)};})(L);(function(a,B){var C=a.arrayMax,G=a.arrayMin,p=a.defined,m=a.destroyObjectProperties,g=a.each,v=a.erase,z=
    a.merge,u=a.pick;a.PlotLineOrBand=function(a,l){this.axis=a;l&&(this.options=l,this.id=l.id);};a.PlotLineOrBand.prototype={render:function(){var g=this,l=g.axis,b=l.horiz,e=g.options,t=e.label,n=g.label,f=e.to,c=e.from,h=e.value,w=p(c)&&p(f),D=p(h),r=g.svgElem,J=!r,q=[],F=e.color,x=u(e.zIndex,0),K=e.events,q={"class":"highcharts-plot-"+(w?"band ":"line ")+(e.className||"")},d={},H=l.chart.renderer,E=w?"bands":"lines";l.isLog&&(c=l.log2lin(c),f=l.log2lin(f),h=l.log2lin(h));D?(q={stroke:F,"stroke-width":e.width},
    e.dashStyle&&(q.dashstyle=e.dashStyle)):w&&(F&&(q.fill=F),e.borderWidth&&(q.stroke=e.borderColor,q["stroke-width"]=e.borderWidth));d.zIndex=x;E+="-"+x;(F=l.plotLinesAndBandsGroups[E])||(l.plotLinesAndBandsGroups[E]=F=H.g("plot-"+E).attr(d).add());J&&(g.svgElem=r=H.path().attr(q).add(F));if(D)q=l.getPlotLinePath(h,r.strokeWidth());else if(w)q=l.getPlotBandPath(c,f,e);else return;J&&q&&q.length?(r.attr({d:q}),K&&a.objectEach(K,function(a,d){r.on(d,function(a){K[d].apply(g,[a]);});})):r&&(q?(r.show(),
    r.animate({d:q})):(r.hide(),n&&(g.label=n=n.destroy())));t&&p(t.text)&&q&&q.length&&0<l.width&&0<l.height&&!q.flat?(t=z({align:b&&w&&"center",x:b?!w&&4:10,verticalAlign:!b&&w&&"middle",y:b?w?16:10:w?6:-4,rotation:b&&!w&&90},t),this.renderLabel(t,q,w,x)):n&&n.hide();return g},renderLabel:function(a,l,b,e){var t=this.label,n=this.axis.chart.renderer;t||(t={align:a.textAlign||a.align,rotation:a.rotation,"class":"highcharts-plot-"+(b?"band":"line")+"-label "+(a.className||"")},t.zIndex=e,this.label=t=
    n.text(a.text,0,0,a.useHTML).attr(t).add(),t.css(a.style));e=l.xBounds||[l[1],l[4],b?l[6]:l[1]];l=l.yBounds||[l[2],l[5],b?l[7]:l[2]];b=G(e);n=G(l);t.align(a,!1,{x:b,y:n,width:C(e)-b,height:C(l)-n});t.show();},destroy:function(){v(this.axis.plotLinesAndBands,this);delete this.axis;m(this);}};a.extend(B.prototype,{getPlotBandPath:function(a,l){var b=this.getPlotLinePath(l,null,null,!0),e=this.getPlotLinePath(a,null,null,!0),t=[],n=this.horiz,f=1,c;a=a<this.min&&l<this.min||a>this.max&&l>this.max;if(e&&
    b)for(a&&(c=e.toString()===b.toString(),f=0),a=0;a<e.length;a+=6)n&&b[a+1]===e[a+1]?(b[a+1]+=f,b[a+4]+=f):n||b[a+2]!==e[a+2]||(b[a+2]+=f,b[a+5]+=f),t.push("M",e[a+1],e[a+2],"L",e[a+4],e[a+5],b[a+4],b[a+5],b[a+1],b[a+2],"z"),t.flat=c;return t},addPlotBand:function(a){return this.addPlotBandOrLine(a,"plotBands")},addPlotLine:function(a){return this.addPlotBandOrLine(a,"plotLines")},addPlotBandOrLine:function(g,l){var b=(new a.PlotLineOrBand(this,g)).render(),e=this.userOptions;b&&(l&&(e[l]=e[l]||[],
    e[l].push(g)),this.plotLinesAndBands.push(b));return b},removePlotBandOrLine:function(a){for(var l=this.plotLinesAndBands,b=this.options,e=this.userOptions,t=l.length;t--;)l[t].id===a&&l[t].destroy();g([b.plotLines||[],e.plotLines||[],b.plotBands||[],e.plotBands||[]],function(b){for(t=b.length;t--;)b[t].id===a&&v(b,b[t]);});},removePlotBand:function(a){this.removePlotBandOrLine(a);},removePlotLine:function(a){this.removePlotBandOrLine(a);}});})(L,da);(function(a){var B=a.each,C=a.extend,G=a.format,p=a.isNumber,
    m=a.map,g=a.merge,v=a.pick,z=a.splat,u=a.syncTimeout,y=a.timeUnits;a.Tooltip=function(){this.init.apply(this,arguments);};a.Tooltip.prototype={init:function(a,b){this.chart=a;this.options=b;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.split=b.split&&!a.inverted;this.shared=b.shared||this.split;},cleanSplit:function(a){B(this.chart.series,function(b){var e=b&&b.tt;e&&(!e.isActive||a?b.tt=e.destroy():e.isActive=!1);});},getLabel:function(){var a=this.chart.renderer,b=this.options;this.label||
    (this.split?this.label=a.g("tooltip"):(this.label=a.label("",0,0,b.shape||"callout",null,null,b.useHTML,null,"tooltip").attr({padding:b.padding,r:b.borderRadius}),this.label.attr({fill:b.backgroundColor,"stroke-width":b.borderWidth}).css(b.style).shadow(b.shadow)),this.label.attr({zIndex:8}).add());return this.label},update:function(a){this.destroy();g(!0,this.chart.options.tooltip.userOptions,a);this.init(this.chart,g(!0,this.options,a));},destroy:function(){this.label&&(this.label=this.label.destroy());
    this.split&&this.tt&&(this.cleanSplit(this.chart,!0),this.tt=this.tt.destroy());a.clearTimeout(this.hideTimer);a.clearTimeout(this.tooltipTimeout);},move:function(l,b,e,t){var n=this,f=n.now,c=!1!==n.options.animation&&!n.isHidden&&(1<Math.abs(l-f.x)||1<Math.abs(b-f.y)),h=n.followPointer||1<n.len;C(f,{x:c?(2*f.x+l)/3:l,y:c?(f.y+b)/2:b,anchorX:h?void 0:c?(2*f.anchorX+e)/3:e,anchorY:h?void 0:c?(f.anchorY+t)/2:t});n.getLabel().attr(f);c&&(a.clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){n&&
    n.move(l,b,e,t);},32));},hide:function(l){var b=this;a.clearTimeout(this.hideTimer);l=v(l,this.options.hideDelay,500);this.isHidden||(this.hideTimer=u(function(){b.getLabel()[l?"fadeOut":"hide"]();b.isHidden=!0;},l));},getAnchor:function(a,b){var e,l=this.chart,n=l.inverted,f=l.plotTop,c=l.plotLeft,h=0,w=0,D,r;a=z(a);e=a[0].tooltipPos;this.followPointer&&b&&(void 0===b.chartX&&(b=l.pointer.normalize(b)),e=[b.chartX-l.plotLeft,b.chartY-f]);e||(B(a,function(a){D=a.series.yAxis;r=a.series.xAxis;h+=a.plotX+
    (!n&&r?r.left-c:0);w+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+(!n&&D?D.top-f:0);}),h/=a.length,w/=a.length,e=[n?l.plotWidth-w:h,this.shared&&!n&&1<a.length&&b?b.chartY-f:n?l.plotHeight-h:w]);return m(e,Math.round)},getPosition:function(a,b,e){var l=this.chart,n=this.distance,f={},c=l.inverted&&e.h||0,h,w=["y",l.chartHeight,b,e.plotY+l.plotTop,l.plotTop,l.plotTop+l.plotHeight],D=["x",l.chartWidth,a,e.plotX+l.plotLeft,l.plotLeft,l.plotLeft+l.plotWidth],r=!this.followPointer&&v(e.ttBelow,!l.inverted===
    !!e.negative),g=function(a,d,b,h,k,x){var e=b<h-n,q=h+n+b<d,w=h-n-b;h+=n;if(r&&q)f[a]=h;else if(!r&&e)f[a]=w;else if(e)f[a]=Math.min(x-b,0>w-c?w:w-c);else if(q)f[a]=Math.max(k,h+c+b>d?h:h+c);else return !1},q=function(a,d,b,c){var k;c<n||c>d-n?k=!1:f[a]=c<b/2?1:c>d-b/2?d-b-2:c-b/2;return k},F=function(a){var d=w;w=D;D=d;h=a;},x=function(){!1!==g.apply(0,w)?!1!==q.apply(0,D)||h||(F(!0),x()):h?f.x=f.y=0:(F(!0),x());};(l.inverted||1<this.len)&&F();x();return f},defaultFormatter:function(a){var b=this.points||
    z(this),e;e=[a.tooltipFooterHeaderFormatter(b[0])];e=e.concat(a.bodyFormatter(b));e.push(a.tooltipFooterHeaderFormatter(b[0],!0));return e},refresh:function(l,b){var e,t=this.options,n,f=l,c,h={},w=[];e=t.formatter||this.defaultFormatter;var h=this.shared,D;t.enabled&&(a.clearTimeout(this.hideTimer),this.followPointer=z(f)[0].series.tooltipOptions.followPointer,c=this.getAnchor(f,b),b=c[0],n=c[1],!h||f.series&&f.series.noSharedTooltip?h=f.getLabelConfig():(B(f,function(a){a.setState("hover");w.push(a.getLabelConfig());}),
    h={x:f[0].category,y:f[0].y},h.points=w,f=f[0]),this.len=w.length,h=e.call(h,this),D=f.series,this.distance=v(D.tooltipOptions.distance,16),!1===h?this.hide():(e=this.getLabel(),this.isHidden&&e.attr({opacity:1}).show(),this.split?this.renderSplit(h,z(l)):(t.style.width||e.css({width:this.chart.spacingBox.width}),e.attr({text:h&&h.join?h.join(""):h}),e.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-"+v(f.colorIndex,D.colorIndex)),e.attr({stroke:t.borderColor||f.color||D.color||
    "#666666"}),this.updatePosition({plotX:b,plotY:n,negative:f.negative,ttBelow:f.ttBelow,h:c[2]||0})),this.isHidden=!1));},renderSplit:function(l,b){var e=this,t=[],n=this.chart,f=n.renderer,c=!0,h=this.options,w=0,D=this.getLabel();a.isString(l)&&(l=[!1,l]);B(l.slice(0,b.length+1),function(a,l){if(!1!==a){l=b[l-1]||{isHeader:!0,plotX:b[0].plotX};var r=l.series||e,F=r.tt,x=l.series||{},K="highcharts-color-"+v(l.colorIndex,x.colorIndex,"none");F||(r.tt=F=f.label(null,null,null,"callout",null,null,h.useHTML).addClass("highcharts-tooltip-box "+
    K).attr({padding:h.padding,r:h.borderRadius,fill:h.backgroundColor,stroke:h.borderColor||l.color||x.color||"#333333","stroke-width":h.borderWidth}).add(D));F.isActive=!0;F.attr({text:a});F.css(h.style).shadow(h.shadow);a=F.getBBox();x=a.width+F.strokeWidth();l.isHeader?(w=a.height,x=Math.max(0,Math.min(l.plotX+n.plotLeft-x/2,n.chartWidth-x))):x=l.plotX+n.plotLeft-v(h.distance,16)-x;0>x&&(c=!1);a=(l.series&&l.series.yAxis&&l.series.yAxis.pos)+(l.plotY||0);a-=n.plotTop;t.push({target:l.isHeader?n.plotHeight+
    w:a,rank:l.isHeader?1:0,size:r.tt.getBBox().height+1,point:l,x:x,tt:F});}});this.cleanSplit();a.distribute(t,n.plotHeight+w);B(t,function(a){var b=a.point,f=b.series;a.tt.attr({visibility:void 0===a.pos?"hidden":"inherit",x:c||b.isHeader?a.x:b.plotX+n.plotLeft+v(h.distance,16),y:a.pos+n.plotTop,anchorX:b.isHeader?b.plotX+n.plotLeft:b.plotX+f.xAxis.pos,anchorY:b.isHeader?a.pos+n.plotTop-15:b.plotY+f.yAxis.pos});});},updatePosition:function(a){var b=this.chart,e=this.getLabel(),e=(this.options.positioner||
    this.getPosition).call(this,e.width,e.height,a);this.move(Math.round(e.x),Math.round(e.y||0),a.plotX+b.plotLeft,a.plotY+b.plotTop);},getDateFormat:function(a,b,e,t){var n=this.chart.time,f=n.dateFormat("%m-%d %H:%M:%S.%L",b),c,h,w={millisecond:15,second:12,minute:9,hour:6,day:3},l="millisecond";for(h in y){if(a===y.week&&+n.dateFormat("%w",b)===e&&"00:00:00.000"===f.substr(6)){h="week";break}if(y[h]>a){h=l;break}if(w[h]&&f.substr(w[h])!=="01-01 00:00:00.000".substr(w[h]))break;"week"!==h&&(l=h);}h&&
    (c=t[h]);return c},getXDateFormat:function(a,b,e){b=b.dateTimeLabelFormats;var l=e&&e.closestPointRange;return (l?this.getDateFormat(l,a.x,e.options.startOfWeek,b):b.day)||b.year},tooltipFooterHeaderFormatter:function(a,b){b=b?"footer":"header";var e=a.series,l=e.tooltipOptions,n=l.xDateFormat,f=e.xAxis,c=f&&"datetime"===f.options.type&&p(a.key),h=l[b+"Format"];c&&!n&&(n=this.getXDateFormat(a,l,f));c&&n&&B(a.point&&a.point.tooltipDateKeys||["key"],function(a){h=h.replace("{point."+a+"}","{point."+
    a+":"+n+"}");});return G(h,{point:a,series:e},this.chart.time)},bodyFormatter:function(a){return m(a,function(a){var b=a.series.tooltipOptions;return (b[(a.point.formatPrefix||"point")+"Formatter"]||a.point.tooltipFormatter).call(a.point,b[(a.point.formatPrefix||"point")+"Format"])})}};})(L);(function(a){var B=a.addEvent,C=a.attr,G=a.charts,p=a.color,m=a.css,g=a.defined,v=a.each,z=a.extend,u=a.find,y=a.fireEvent,l=a.isNumber,b=a.isObject,e=a.offset,t=a.pick,n=a.splat,f=a.Tooltip;a.Pointer=function(a,
    b){this.init(a,b);};a.Pointer.prototype={init:function(a,b){this.options=b;this.chart=a;this.runChartClick=b.chart.events&&!!b.chart.events.click;this.pinchDown=[];this.lastValidTouch={};f&&(a.tooltip=new f(a,b.tooltip),this.followTouchMove=t(b.tooltip.followTouchMove,!0));this.setDOMEvents();},zoomOption:function(a){var b=this.chart,c=b.options.chart,f=c.zoomType||"",b=b.inverted;/touch/.test(a.type)&&(f=t(c.pinchType,f));this.zoomX=a=/x/.test(f);this.zoomY=f=/y/.test(f);this.zoomHor=a&&!b||f&&b;this.zoomVert=
    f&&!b||a&&b;this.hasZoom=a||f;},normalize:function(a,b){var c;c=a.touches?a.touches.length?a.touches.item(0):a.changedTouches[0]:a;b||(this.chartPosition=b=e(this.chart.container));return z(a,{chartX:Math.round(c.pageX-b.left),chartY:Math.round(c.pageY-b.top)})},getCoordinates:function(a){var b={xAxis:[],yAxis:[]};v(this.chart.axes,function(c){b[c.isXAxis?"xAxis":"yAxis"].push({axis:c,value:c.toValue(a[c.horiz?"chartX":"chartY"])});});return b},findNearestKDPoint:function(a,f,e){var c;v(a,function(a){var h=
    !(a.noSharedTooltip&&f)&&0>a.options.findNearestPointBy.indexOf("y");a=a.searchPoint(e,h);if((h=b(a,!0))&&!(h=!b(c,!0)))var h=c.distX-a.distX,n=c.dist-a.dist,r=(a.series.group&&a.series.group.zIndex)-(c.series.group&&c.series.group.zIndex),h=0<(0!==h&&f?h:0!==n?n:0!==r?r:c.series.index>a.series.index?-1:1);h&&(c=a);});return c},getPointFromEvent:function(a){a=a.target;for(var b;a&&!b;)b=a.point,a=a.parentNode;return b},getChartCoordinatesFromPoint:function(a,b){var c=a.series,f=c.xAxis,c=c.yAxis,h=
    t(a.clientX,a.plotX),e=a.shapeArgs;if(f&&c)return b?{chartX:f.len+f.pos-h,chartY:c.len+c.pos-a.plotY}:{chartX:h+f.pos,chartY:a.plotY+c.pos};if(e&&e.x&&e.y)return {chartX:e.x,chartY:e.y}},getHoverData:function(c,f,e,n,r,l,q){var h,x=[],w=q&&q.isBoosting;n=!(!n||!c);q=f&&!f.stickyTracking?[f]:a.grep(e,function(a){return a.visible&&!(!r&&a.directTouch)&&t(a.options.enableMouseTracking,!0)&&a.stickyTracking});f=(h=n?c:this.findNearestKDPoint(q,r,l))&&h.series;h&&(r&&!f.noSharedTooltip?(q=a.grep(e,function(a){return a.visible&&
    !(!r&&a.directTouch)&&t(a.options.enableMouseTracking,!0)&&!a.noSharedTooltip}),v(q,function(a){var d=u(a.points,function(a){return a.x===h.x&&!a.isNull});b(d)&&(w&&(d=a.getPoint(d)),x.push(d));})):x.push(h));return {hoverPoint:h,hoverSeries:f,hoverPoints:x}},runPointActions:function(b,f){var c=this.chart,h=c.tooltip&&c.tooltip.options.enabled?c.tooltip:void 0,e=h?h.shared:!1,n=f||c.hoverPoint,q=n&&n.series||c.hoverSeries,q=this.getHoverData(n,q,c.series,!!f||q&&q.directTouch&&this.isDirectTouch,e,
    b,{isBoosting:c.isBoosting}),l,n=q.hoverPoint;l=q.hoverPoints;f=(q=q.hoverSeries)&&q.tooltipOptions.followPointer;e=e&&q&&!q.noSharedTooltip;if(n&&(n!==c.hoverPoint||h&&h.isHidden)){v(c.hoverPoints||[],function(b){-1===a.inArray(b,l)&&b.setState();});v(l||[],function(a){a.setState("hover");});if(c.hoverSeries!==q)q.onMouseOver();c.hoverPoint&&c.hoverPoint.firePointEvent("mouseOut");if(!n.series)return;n.firePointEvent("mouseOver");c.hoverPoints=l;c.hoverPoint=n;h&&h.refresh(e?l:n,b);}else f&&h&&!h.isHidden&&
    (n=h.getAnchor([{}],b),h.updatePosition({plotX:n[0],plotY:n[1]}));this.unDocMouseMove||(this.unDocMouseMove=B(c.container.ownerDocument,"mousemove",function(b){var c=G[a.hoverChartIndex];if(c)c.pointer.onDocumentMouseMove(b);}));v(c.axes,function(c){var f=t(c.crosshair.snap,!0),d=f?a.find(l,function(a){return a.series[c.coll]===c}):void 0;d||!f?c.drawCrosshair(b,d):c.hideCrosshair();});},reset:function(a,b){var c=this.chart,f=c.hoverSeries,h=c.hoverPoint,e=c.hoverPoints,q=c.tooltip,l=q&&q.shared?e:h;
    a&&l&&v(n(l),function(b){b.series.isCartesian&&void 0===b.plotX&&(a=!1);});if(a)q&&l&&(q.refresh(l),h&&(h.setState(h.state,!0),v(c.axes,function(a){a.crosshair&&a.drawCrosshair(null,h);})));else{if(h)h.onMouseOut();e&&v(e,function(a){a.setState();});if(f)f.onMouseOut();q&&q.hide(b);this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove());v(c.axes,function(a){a.hideCrosshair();});this.hoverX=c.hoverPoints=c.hoverPoint=null;}},scaleGroups:function(a,b){var c=this.chart,f;v(c.series,function(h){f=
    a||h.getPlotBox();h.xAxis&&h.xAxis.zoomEnabled&&h.group&&(h.group.attr(f),h.markerGroup&&(h.markerGroup.attr(f),h.markerGroup.clip(b?c.clipRect:null)),h.dataLabelsGroup&&h.dataLabelsGroup.attr(f));});c.clipRect.attr(b||c.clipBox);},dragStart:function(a){var b=this.chart;b.mouseIsDown=a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=a.chartX;b.mouseDownY=this.mouseDownY=a.chartY;},drag:function(a){var b=this.chart,c=b.options.chart,f=a.chartX,e=a.chartY,n=this.zoomHor,q=this.zoomVert,l=b.plotLeft,
    x=b.plotTop,t=b.plotWidth,d=b.plotHeight,H,E=this.selectionMarker,k=this.mouseDownX,A=this.mouseDownY,g=c.panKey&&a[c.panKey+"Key"];E&&E.touch||(f<l?f=l:f>l+t&&(f=l+t),e<x?e=x:e>x+d&&(e=x+d),this.hasDragged=Math.sqrt(Math.pow(k-f,2)+Math.pow(A-e,2)),10<this.hasDragged&&(H=b.isInsidePlot(k-l,A-x),b.hasCartesianSeries&&(this.zoomX||this.zoomY)&&H&&!g&&!E&&(this.selectionMarker=E=b.renderer.rect(l,x,n?1:t,q?1:d,0).attr({fill:c.selectionMarkerFill||p("#335cad").setOpacity(.25).get(),"class":"highcharts-selection-marker",
    zIndex:7}).add()),E&&n&&(f-=k,E.attr({width:Math.abs(f),x:(0<f?0:f)+k})),E&&q&&(f=e-A,E.attr({height:Math.abs(f),y:(0<f?0:f)+A})),H&&!E&&c.panning&&b.pan(a,c.panning)));},drop:function(a){var b=this,c=this.chart,f=this.hasPinched;if(this.selectionMarker){var e={originalEvent:a,xAxis:[],yAxis:[]},n=this.selectionMarker,q=n.attr?n.attr("x"):n.x,t=n.attr?n.attr("y"):n.y,x=n.attr?n.attr("width"):n.width,K=n.attr?n.attr("height"):n.height,d;if(this.hasDragged||f)v(c.axes,function(c){if(c.zoomEnabled&&g(c.min)&&
    (f||b[{xAxis:"zoomX",yAxis:"zoomY"}[c.coll]])){var h=c.horiz,k="touchend"===a.type?c.minPixelPadding:0,n=c.toValue((h?q:t)+k),h=c.toValue((h?q+x:t+K)-k);e[c.coll].push({axis:c,min:Math.min(n,h),max:Math.max(n,h)});d=!0;}}),d&&y(c,"selection",e,function(a){c.zoom(z(a,f?{animation:!1}:null));});l(c.index)&&(this.selectionMarker=this.selectionMarker.destroy());f&&this.scaleGroups();}c&&l(c.index)&&(m(c.container,{cursor:c._cursor}),c.cancelClick=10<this.hasDragged,c.mouseIsDown=this.hasDragged=this.hasPinched=
    !1,this.pinchDown=[]);},onContainerMouseDown:function(a){a=this.normalize(a);2!==a.button&&(this.zoomOption(a),a.preventDefault&&a.preventDefault(),this.dragStart(a));},onDocumentMouseUp:function(b){G[a.hoverChartIndex]&&G[a.hoverChartIndex].pointer.drop(b);},onDocumentMouseMove:function(a){var b=this.chart,c=this.chartPosition;a=this.normalize(a,c);!c||this.inClass(a.target,"highcharts-tracker")||b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)||this.reset();},onContainerMouseLeave:function(b){var c=
    G[a.hoverChartIndex];c&&(b.relatedTarget||b.toElement)&&(c.pointer.reset(),c.pointer.chartPosition=null);},onContainerMouseMove:function(b){var c=this.chart;g(a.hoverChartIndex)&&G[a.hoverChartIndex]&&G[a.hoverChartIndex].mouseIsDown||(a.hoverChartIndex=c.index);b=this.normalize(b);b.returnValue=!1;"mousedown"===c.mouseIsDown&&this.drag(b);!this.inClass(b.target,"highcharts-tracker")&&!c.isInsidePlot(b.chartX-c.plotLeft,b.chartY-c.plotTop)||c.openMenu||this.runPointActions(b);},inClass:function(a,b){for(var c;a;){if(c=
    C(a,"class")){if(-1!==c.indexOf(b))return !0;if(-1!==c.indexOf("highcharts-container"))return !1}a=a.parentNode;}},onTrackerMouseOut:function(a){var b=this.chart.hoverSeries;a=a.relatedTarget||a.toElement;this.isDirectTouch=!1;if(!(!b||!a||b.stickyTracking||this.inClass(a,"highcharts-tooltip")||this.inClass(a,"highcharts-series-"+b.index)&&this.inClass(a,"highcharts-tracker")))b.onMouseOut();},onContainerClick:function(a){var b=this.chart,f=b.hoverPoint,c=b.plotLeft,e=b.plotTop;a=this.normalize(a);b.cancelClick||
    (f&&this.inClass(a.target,"highcharts-tracker")?(y(f.series,"click",z(a,{point:f})),b.hoverPoint&&f.firePointEvent("click",a)):(z(a,this.getCoordinates(a)),b.isInsidePlot(a.chartX-c,a.chartY-e)&&y(b,"click",a)));},setDOMEvents:function(){var b=this,f=b.chart.container,e=f.ownerDocument;f.onmousedown=function(a){b.onContainerMouseDown(a);};f.onmousemove=function(a){b.onContainerMouseMove(a);};f.onclick=function(a){b.onContainerClick(a);};this.unbindContainerMouseLeave=B(f,"mouseleave",b.onContainerMouseLeave);
    a.unbindDocumentMouseUp||(a.unbindDocumentMouseUp=B(e,"mouseup",b.onDocumentMouseUp));a.hasTouch&&(f.ontouchstart=function(a){b.onContainerTouchStart(a);},f.ontouchmove=function(a){b.onContainerTouchMove(a);},a.unbindDocumentTouchEnd||(a.unbindDocumentTouchEnd=B(e,"touchend",b.onDocumentTouchEnd)));},destroy:function(){var b=this;b.unDocMouseMove&&b.unDocMouseMove();this.unbindContainerMouseLeave();a.chartCount||(a.unbindDocumentMouseUp&&(a.unbindDocumentMouseUp=a.unbindDocumentMouseUp()),a.unbindDocumentTouchEnd&&
    (a.unbindDocumentTouchEnd=a.unbindDocumentTouchEnd()));clearInterval(b.tooltipTimeout);a.objectEach(b,function(a,f){b[f]=null;});}};})(L);(function(a){var B=a.charts,C=a.each,G=a.extend,p=a.map,m=a.noop,g=a.pick;G(a.Pointer.prototype,{pinchTranslate:function(a,g,m,p,l,b){this.zoomHor&&this.pinchTranslateDirection(!0,a,g,m,p,l,b);this.zoomVert&&this.pinchTranslateDirection(!1,a,g,m,p,l,b);},pinchTranslateDirection:function(a,g,m,p,l,b,e,t){var n=this.chart,f=a?"x":"y",c=a?"X":"Y",h="chart"+c,w=a?"width":
    "height",D=n["plot"+(a?"Left":"Top")],r,J,q=t||1,F=n.inverted,x=n.bounds[a?"h":"v"],K=1===g.length,d=g[0][h],H=m[0][h],E=!K&&g[1][h],k=!K&&m[1][h],A;m=function(){!K&&20<Math.abs(d-E)&&(q=t||Math.abs(H-k)/Math.abs(d-E));J=(D-H)/q+d;r=n["plot"+(a?"Width":"Height")]/q;};m();g=J;g<x.min?(g=x.min,A=!0):g+r>x.max&&(g=x.max-r,A=!0);A?(H-=.8*(H-e[f][0]),K||(k-=.8*(k-e[f][1])),m()):e[f]=[H,k];F||(b[f]=J-D,b[w]=r);b=F?1/q:q;l[w]=r;l[f]=g;p[F?a?"scaleY":"scaleX":"scale"+c]=q;p["translate"+c]=b*D+(H-b*d);},pinch:function(a){var v=
    this,u=v.chart,y=v.pinchDown,l=a.touches,b=l.length,e=v.lastValidTouch,t=v.hasZoom,n=v.selectionMarker,f={},c=1===b&&(v.inClass(a.target,"highcharts-tracker")&&u.runTrackerClick||v.runChartClick),h={};1<b&&(v.initiated=!0);t&&v.initiated&&!c&&a.preventDefault();p(l,function(a){return v.normalize(a)});"touchstart"===a.type?(C(l,function(a,b){y[b]={chartX:a.chartX,chartY:a.chartY};}),e.x=[y[0].chartX,y[1]&&y[1].chartX],e.y=[y[0].chartY,y[1]&&y[1].chartY],C(u.axes,function(a){if(a.zoomEnabled){var b=
    u.bounds[a.horiz?"h":"v"],f=a.minPixelPadding,c=a.toPixels(g(a.options.min,a.dataMin)),h=a.toPixels(g(a.options.max,a.dataMax)),e=Math.max(c,h);b.min=Math.min(a.pos,Math.min(c,h)-f);b.max=Math.max(a.pos+a.len,e+f);}}),v.res=!0):v.followTouchMove&&1===b?this.runPointActions(v.normalize(a)):y.length&&(n||(v.selectionMarker=n=G({destroy:m,touch:!0},u.plotBox)),v.pinchTranslate(y,l,f,n,h,e),v.hasPinched=t,v.scaleGroups(f,h),v.res&&(v.res=!1,this.reset(!1,0)));},touch:function(m,p){var u=this.chart,v,l;
    if(u.index!==a.hoverChartIndex)this.onContainerMouseLeave({relatedTarget:!0});a.hoverChartIndex=u.index;1===m.touches.length?(m=this.normalize(m),(l=u.isInsidePlot(m.chartX-u.plotLeft,m.chartY-u.plotTop))&&!u.openMenu?(p&&this.runPointActions(m),"touchmove"===m.type&&(p=this.pinchDown,v=p[0]?4<=Math.sqrt(Math.pow(p[0].chartX-m.chartX,2)+Math.pow(p[0].chartY-m.chartY,2)):!1),g(v,!0)&&this.pinch(m)):p&&this.reset()):2===m.touches.length&&this.pinch(m);},onContainerTouchStart:function(a){this.zoomOption(a);
    this.touch(a,!0);},onContainerTouchMove:function(a){this.touch(a);},onDocumentTouchEnd:function(g){B[a.hoverChartIndex]&&B[a.hoverChartIndex].pointer.drop(g);}});})(L);(function(a){var B=a.addEvent,C=a.charts,G=a.css,p=a.doc,m=a.extend,g=a.noop,v=a.Pointer,z=a.removeEvent,u=a.win,y=a.wrap;if(!a.hasTouch&&(u.PointerEvent||u.MSPointerEvent)){var l={},b=!!u.PointerEvent,e=function(){var b=[];b.item=function(a){return this[a]};a.objectEach(l,function(a){b.push({pageX:a.pageX,pageY:a.pageY,target:a.target});});
    return b},t=function(b,f,c,h){"touch"!==b.pointerType&&b.pointerType!==b.MSPOINTER_TYPE_TOUCH||!C[a.hoverChartIndex]||(h(b),h=C[a.hoverChartIndex].pointer,h[f]({type:c,target:b.currentTarget,preventDefault:g,touches:e()}));};m(v.prototype,{onContainerPointerDown:function(a){t(a,"onContainerTouchStart","touchstart",function(a){l[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget};});},onContainerPointerMove:function(a){t(a,"onContainerTouchMove","touchmove",function(a){l[a.pointerId]={pageX:a.pageX,
    pageY:a.pageY};l[a.pointerId].target||(l[a.pointerId].target=a.currentTarget);});},onDocumentPointerUp:function(a){t(a,"onDocumentTouchEnd","touchend",function(a){delete l[a.pointerId];});},batchMSEvents:function(a){a(this.chart.container,b?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,b?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(p,b?"pointerup":"MSPointerUp",this.onDocumentPointerUp);}});y(v.prototype,"init",function(a,b,c){a.call(this,b,c);this.hasZoom&&
    G(b.container,{"-ms-touch-action":"none","touch-action":"none"});});y(v.prototype,"setDOMEvents",function(a){a.apply(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(B);});y(v.prototype,"destroy",function(a){this.batchMSEvents(z);a.call(this);});}})(L);(function(a){var B=a.addEvent,C=a.css,G=a.discardElement,p=a.defined,m=a.each,g=a.fireEvent,v=a.isFirefox,z=a.marginNames,u=a.merge,y=a.pick,l=a.setAnimation,b=a.stableSort,e=a.win,t=a.wrap;a.Legend=function(a,b){this.init(a,b);};a.Legend.prototype=
    {init:function(a,b){this.chart=a;this.setOptions(b);b.enabled&&(this.render(),B(this.chart,"endResize",function(){this.legend.positionCheckboxes();}));},setOptions:function(a){var b=y(a.padding,8);this.options=a;this.itemStyle=a.itemStyle;this.itemHiddenStyle=u(this.itemStyle,a.itemHiddenStyle);this.itemMarginTop=a.itemMarginTop||0;this.padding=b;this.initialItemY=b-5;this.symbolWidth=y(a.symbolWidth,16);this.pages=[];},update:function(a,b){var f=this.chart;this.setOptions(u(!0,this.options,a));this.destroy();
    f.isDirtyLegend=f.isDirtyBox=!0;y(b,!0)&&f.redraw();g(this,"afterUpdate");},colorizeItem:function(a,b){a.legendGroup[b?"removeClass":"addClass"]("highcharts-legend-item-hidden");var f=this.options,h=a.legendItem,e=a.legendLine,n=a.legendSymbol,l=this.itemHiddenStyle.color,f=b?f.itemStyle.color:l,t=b?a.color||l:l,q=a.options&&a.options.marker,F={fill:t};h&&h.css({fill:f,color:f});e&&e.attr({stroke:t});n&&(q&&n.isMarker&&(F=a.pointAttribs(),b||(F.stroke=F.fill=l)),n.attr(F));g(this,"afterColorizeItem",
    {item:a,visible:b});},positionItem:function(a){var b=this.options,c=b.symbolPadding,b=!b.rtl,h=a._legendItemPos,e=h[0],h=h[1],n=a.checkbox;(a=a.legendGroup)&&a.element&&a.translate(b?e:this.legendWidth-e-2*c-4,h);n&&(n.x=e,n.y=h);},destroyItem:function(a){var b=a.checkbox;m(["legendItem","legendLine","legendSymbol","legendGroup"],function(b){a[b]&&(a[b]=a[b].destroy());});b&&G(a.checkbox);},destroy:function(){function a(a){this[a]&&(this[a]=this[a].destroy());}m(this.getAllItems(),function(b){m(["legendItem",
    "legendGroup"],a,b);});m("clipRect up down pager nav box title group".split(" "),a,this);this.display=null;},positionCheckboxes:function(){var a=this.group&&this.group.alignAttr,b,c=this.clipHeight||this.legendHeight,h=this.titleHeight;a&&(b=a.translateY,m(this.allItems,function(f){var e=f.checkbox,n;e&&(n=b+h+e.y+(this.scrollOffset||0)+3,C(e,{left:a.translateX+f.checkboxOffset+e.x-20+"px",top:n+"px",display:n>b-6&&n<b+c-6?"":"none"}));},this));},renderTitle:function(){var a=this.options,b=this.padding,
    c=a.title,h=0;c.text&&(this.title||(this.title=this.chart.renderer.label(c.text,b-3,b-4,null,null,null,a.useHTML,null,"legend-title").attr({zIndex:1}).css(c.style).add(this.group)),a=this.title.getBBox(),h=a.height,this.offsetWidth=a.width,this.contentGroup.attr({translateY:h}));this.titleHeight=h;},setText:function(b){var f=this.options;b.legendItem.attr({text:f.labelFormat?a.format(f.labelFormat,b,this.chart.time):f.labelFormatter.call(b)});},renderItem:function(a){var b=this.chart,c=b.renderer,h=
    this.options,e=this.symbolWidth,l=h.symbolPadding,n=this.itemStyle,t=this.itemHiddenStyle,q="horizontal"===h.layout?y(h.itemDistance,20):0,g=!h.rtl,x=a.legendItem,K=!a.series,d=!K&&a.series.drawLegendSymbol?a.series:a,H=d.options,H=this.createCheckboxForItem&&H&&H.showCheckbox,q=e+l+q+(H?20:0),E=h.useHTML,k=a.options.className;x||(a.legendGroup=c.g("legend-item").addClass("highcharts-"+d.type+"-series highcharts-color-"+a.colorIndex+(k?" "+k:"")+(K?" highcharts-series-"+a.index:"")).attr({zIndex:1}).add(this.scrollGroup),
    a.legendItem=x=c.text("",g?e+l:-l,this.baseline||0,E).css(u(a.visible?n:t)).attr({align:g?"left":"right",zIndex:2}).add(a.legendGroup),this.baseline||(e=n.fontSize,this.fontMetrics=c.fontMetrics(e,x),this.baseline=this.fontMetrics.f+3+this.itemMarginTop,x.attr("y",this.baseline)),this.symbolHeight=h.symbolHeight||this.fontMetrics.f,d.drawLegendSymbol(this,a),this.setItemEvents&&this.setItemEvents(a,x,E),H&&this.createCheckboxForItem(a));this.colorizeItem(a,a.visible);n.width||x.css({width:(h.itemWidth||
    h.width||b.spacingBox.width)-q});this.setText(a);b=x.getBBox();a.itemWidth=a.checkboxOffset=h.itemWidth||a.legendItemWidth||b.width+q;this.maxItemWidth=Math.max(this.maxItemWidth,a.itemWidth);this.totalItemWidth+=a.itemWidth;this.itemHeight=a.itemHeight=Math.round(a.legendItemHeight||b.height||this.symbolHeight);},layoutItem:function(a){var b=this.options,c=this.padding,h="horizontal"===b.layout,e=a.itemHeight,l=b.itemMarginBottom||0,n=this.itemMarginTop,t=h?y(b.itemDistance,20):0,q=b.width,g=q||this.chart.spacingBox.width-
    2*c-b.x,b=b.alignColumns&&this.totalItemWidth>g?this.maxItemWidth:a.itemWidth;h&&this.itemX-c+b>g&&(this.itemX=c,this.itemY+=n+this.lastLineHeight+l,this.lastLineHeight=0);this.lastItemY=n+this.itemY+l;this.lastLineHeight=Math.max(e,this.lastLineHeight);a._legendItemPos=[this.itemX,this.itemY];h?this.itemX+=b:(this.itemY+=n+e+l,this.lastLineHeight=e);this.offsetWidth=q||Math.max((h?this.itemX-c-(a.checkbox?0:t):b)+c,this.offsetWidth);},getAllItems:function(){var a=[];m(this.chart.series,function(b){var c=
    b&&b.options;b&&y(c.showInLegend,p(c.linkedTo)?!1:void 0,!0)&&(a=a.concat(b.legendItems||("point"===c.legendType?b.data:b)));});g(this,"afterGetAllItems",{allItems:a});return a},getAlignment:function(){var a=this.options;return a.floating?"":a.align.charAt(0)+a.verticalAlign.charAt(0)+a.layout.charAt(0)},adjustMargins:function(a,b){var c=this.chart,f=this.options,e=this.getAlignment();e&&m([/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/],function(h,l){h.test(e)&&!p(a[l])&&(c[z[l]]=Math.max(c[z[l]],
    c.legend[(l+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][l]*f[l%2?"x":"y"]+y(f.margin,12)+b[l]+(0===l&&void 0!==c.options.title.margin?c.titleOffset+c.options.title.margin:0)));});},render:function(){var a=this.chart,f=a.renderer,c=this.group,e,l,t,r,g=this.box,q=this.options,F=this.padding;this.itemX=F;this.itemY=this.initialItemY;this.lastItemY=this.offsetWidth=0;c||(this.group=c=f.g("legend").attr({zIndex:7}).add(),this.contentGroup=f.g().attr({zIndex:1}).add(c),this.scrollGroup=f.g().add(this.contentGroup));
    this.renderTitle();e=this.getAllItems();b(e,function(a,b){return (a.options&&a.options.legendIndex||0)-(b.options&&b.options.legendIndex||0)});q.reversed&&e.reverse();this.allItems=e;this.display=l=!!e.length;this.itemHeight=this.totalItemWidth=this.maxItemWidth=this.lastLineHeight=0;m(e,this.renderItem,this);m(e,this.layoutItem,this);t=(q.width||this.offsetWidth)+F;r=this.lastItemY+this.lastLineHeight+this.titleHeight;r=this.handleOverflow(r);r+=F;g||(this.box=g=f.rect().addClass("highcharts-legend-box").attr({r:q.borderRadius}).add(c),
    g.isNew=!0);g.attr({stroke:q.borderColor,"stroke-width":q.borderWidth||0,fill:q.backgroundColor||"none"}).shadow(q.shadow);0<t&&0<r&&(g[g.isNew?"attr":"animate"](g.crisp.call({},{x:0,y:0,width:t,height:r},g.strokeWidth())),g.isNew=!1);g[l?"show":"hide"]();this.legendWidth=t;this.legendHeight=r;m(e,this.positionItem,this);l&&(f=a.spacingBox,/(lth|ct|rth)/.test(this.getAlignment())&&(f=u(f,{y:f.y+a.titleOffset+a.options.title.margin})),c.align(u(q,{width:t,height:r}),!0,f));a.isResizing||this.positionCheckboxes();},
    handleOverflow:function(a){var b=this,c=this.chart,e=c.renderer,l=this.options,n=l.y,r=this.padding,c=c.spacingBox.height+("top"===l.verticalAlign?-n:n)-r,n=l.maxHeight,t,q=this.clipRect,g=l.navigation,x=y(g.animation,!0),K=g.arrowSize||12,d=this.nav,H=this.pages,E,k=this.allItems,A=function(a){"number"===typeof a?q.attr({height:a}):q&&(b.clipRect=q.destroy(),b.contentGroup.clip());b.contentGroup.div&&(b.contentGroup.div.style.clip=a?"rect("+r+"px,9999px,"+(r+a)+"px,0)":"auto");};"horizontal"!==l.layout||
    "middle"===l.verticalAlign||l.floating||(c/=2);n&&(c=Math.min(c,n));H.length=0;a>c&&!1!==g.enabled?(this.clipHeight=t=Math.max(c-20-this.titleHeight-r,0),this.currentPage=y(this.currentPage,1),this.fullHeight=a,m(k,function(a,b){var d=a._legendItemPos[1],c=Math.round(a.legendItem.getBBox().height),f=H.length;if(!f||d-H[f-1]>t&&(E||d)!==H[f-1])H.push(E||d),f++;a.pageIx=f-1;E&&(k[b-1].pageIx=f-1);b===k.length-1&&d+c-H[f-1]>t&&(H.push(d),a.pageIx=f);d!==E&&(E=d);}),q||(q=b.clipRect=e.clipRect(0,r,9999,
    0),b.contentGroup.clip(q)),A(t),d||(this.nav=d=e.g().attr({zIndex:1}).add(this.group),this.up=e.symbol("triangle",0,0,K,K).on("click",function(){b.scroll(-1,x);}).add(d),this.pager=e.text("",15,10).addClass("highcharts-legend-navigation").css(g.style).add(d),this.down=e.symbol("triangle-down",0,0,K,K).on("click",function(){b.scroll(1,x);}).add(d)),b.scroll(0),a=c):d&&(A(),this.nav=d.destroy(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0);return a},scroll:function(a,b){var c=this.pages,f=
    c.length;a=this.currentPage+a;var e=this.clipHeight,n=this.options.navigation,r=this.pager,t=this.padding;a>f&&(a=f);0<a&&(void 0!==b&&l(b,this.chart),this.nav.attr({translateX:t,translateY:e+this.padding+7+this.titleHeight,visibility:"visible"}),this.up.attr({"class":1===a?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),r.attr({text:a+"/"+f}),this.down.attr({x:18+this.pager.getBBox().width,"class":a===f?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),this.up.attr({fill:1===
    a?n.inactiveColor:n.activeColor}).css({cursor:1===a?"default":"pointer"}),this.down.attr({fill:a===f?n.inactiveColor:n.activeColor}).css({cursor:a===f?"default":"pointer"}),this.scrollOffset=-c[a-1]+this.initialItemY,this.scrollGroup.animate({translateY:this.scrollOffset}),this.currentPage=a,this.positionCheckboxes());}};a.LegendSymbolMixin={drawRectangle:function(a,b){var c=a.symbolHeight,f=a.options.squareSymbol;b.legendSymbol=this.chart.renderer.rect(f?(a.symbolWidth-c)/2:0,a.baseline-c+1,f?c:a.symbolWidth,
    c,y(a.options.symbolRadius,c/2)).addClass("highcharts-point").attr({zIndex:3}).add(b.legendGroup);},drawLineMarker:function(a){var b=this.options,c=b.marker,e=a.symbolWidth,l=a.symbolHeight,n=l/2,r=this.chart.renderer,t=this.legendGroup;a=a.baseline-Math.round(.3*a.fontMetrics.b);var q;q={"stroke-width":b.lineWidth||0};b.dashStyle&&(q.dashstyle=b.dashStyle);this.legendLine=r.path(["M",0,a,"L",e,a]).addClass("highcharts-graph").attr(q).add(t);c&&!1!==c.enabled&&(b=Math.min(y(c.radius,n),n),0===this.symbol.indexOf("url")&&
    (c=u(c,{width:l,height:l}),b=0),this.legendSymbol=c=r.symbol(this.symbol,e/2-b,a-b,2*b,2*b,c).addClass("highcharts-point").add(t),c.isMarker=!0);}};(/Trident\/7\.0/.test(e.navigator.userAgent)||v)&&t(a.Legend.prototype,"positionItem",function(a,b){var c=this,f=function(){b._legendItemPos&&a.call(c,b);};f();setTimeout(f);});})(L);(function(a){var B=a.addEvent,C=a.animate,G=a.animObject,p=a.attr,m=a.doc,g=a.Axis,v=a.createElement,z=a.defaultOptions,u=a.discardElement,y=a.charts,l=a.css,b=a.defined,e=a.each,
    t=a.extend,n=a.find,f=a.fireEvent,c=a.grep,h=a.isNumber,w=a.isObject,D=a.isString,r=a.Legend,J=a.marginNames,q=a.merge,F=a.objectEach,x=a.Pointer,K=a.pick,d=a.pInt,H=a.removeEvent,E=a.seriesTypes,k=a.splat,A=a.syncTimeout,P=a.win,R=a.Chart=function(){this.getArgs.apply(this,arguments);};a.chart=function(a,b,d){return new R(a,b,d)};t(R.prototype,{callbacks:[],getArgs:function(){var a=[].slice.call(arguments);if(D(a[0])||a[0].nodeName)this.renderTo=a.shift();this.init(a[0],a[1]);},init:function(b,d){var k,
    c,e=b.series,h=b.plotOptions||{};f(this,"init",{args:arguments},function(){b.series=null;k=q(z,b);for(c in k.plotOptions)k.plotOptions[c].tooltip=h[c]&&q(h[c].tooltip)||void 0;k.tooltip.userOptions=b.chart&&b.chart.forExport&&b.tooltip.userOptions||b.tooltip;k.series=b.series=e;this.userOptions=b;var x=k.chart,l=x.events;this.margin=[];this.spacing=[];this.bounds={h:{},v:{}};this.labelCollectors=[];this.callback=d;this.isResizing=0;this.options=k;this.axes=[];this.series=[];this.time=b.time&&a.keys(b.time).length?
    new a.Time(b.time):a.time;this.hasCartesianSeries=x.showAxes;var E=this;E.index=y.length;y.push(E);a.chartCount++;l&&F(l,function(a,b){B(E,b,a);});E.xAxis=[];E.yAxis=[];E.pointCount=E.colorCounter=E.symbolCounter=0;f(E,"afterInit");E.firstRender();});},initSeries:function(b){var d=this.options.chart;(d=E[b.type||d.type||d.defaultSeriesType])||a.error(17,!0);d=new d;d.init(this,b);return d},orderSeries:function(a){var b=this.series;for(a=a||0;a<b.length;a++)b[a]&&(b[a].index=a,b[a].name=b[a].getName());},
    isInsidePlot:function(a,b,d){var k=d?b:a;a=d?a:b;return 0<=k&&k<=this.plotWidth&&0<=a&&a<=this.plotHeight},redraw:function(b){f(this,"beforeRedraw");var d=this.axes,k=this.series,c=this.pointer,h=this.legend,x=this.isDirtyLegend,l,q,E=this.hasCartesianSeries,r=this.isDirtyBox,n,H=this.renderer,g=H.isHidden(),A=[];this.setResponsive&&this.setResponsive(!1);a.setAnimation(b,this);g&&this.temporaryDisplay();this.layOutTitles();for(b=k.length;b--;)if(n=k[b],n.options.stacking&&(l=!0,n.isDirty)){q=!0;
    break}if(q)for(b=k.length;b--;)n=k[b],n.options.stacking&&(n.isDirty=!0);e(k,function(a){a.isDirty&&"point"===a.options.legendType&&(a.updateTotals&&a.updateTotals(),x=!0);a.isDirtyData&&f(a,"updatedData");});x&&h.options.enabled&&(h.render(),this.isDirtyLegend=!1);l&&this.getStacks();E&&e(d,function(a){a.updateNames();a.setScale();});this.getMargins();E&&(e(d,function(a){a.isDirty&&(r=!0);}),e(d,function(a){var b=a.min+","+a.max;a.extKey!==b&&(a.extKey=b,A.push(function(){f(a,"afterSetExtremes",t(a.eventArgs,
    a.getExtremes()));delete a.eventArgs;}));(r||l)&&a.redraw();}));r&&this.drawChartBox();f(this,"predraw");e(k,function(a){(r||a.isDirty)&&a.visible&&a.redraw();a.isDirtyData=!1;});c&&c.reset(!0);H.draw();f(this,"redraw");f(this,"render");g&&this.temporaryDisplay(!0);e(A,function(a){a.call();});},get:function(a){function b(b){return b.id===a||b.options&&b.options.id===a}var d,k=this.series,c;d=n(this.axes,b)||n(this.series,b);for(c=0;!d&&c<k.length;c++)d=n(k[c].points||[],b);return d},getAxes:function(){var a=
    this,b=this.options,d=b.xAxis=k(b.xAxis||{}),b=b.yAxis=k(b.yAxis||{});f(this,"getAxes");e(d,function(a,b){a.index=b;a.isX=!0;});e(b,function(a,b){a.index=b;});d=d.concat(b);e(d,function(b){new g(a,b);});f(this,"afterGetAxes");},getSelectedPoints:function(){var a=[];e(this.series,function(b){a=a.concat(c(b.data||[],function(a){return a.selected}));});return a},getSelectedSeries:function(){return c(this.series,function(a){return a.selected})},setTitle:function(a,b,d){var k=this,c=k.options,f;f=c.title=q({style:{color:"#333333",
    fontSize:c.isStock?"16px":"18px"}},c.title,a);c=c.subtitle=q({style:{color:"#666666"}},c.subtitle,b);e([["title",a,f],["subtitle",b,c]],function(a,b){var d=a[0],c=k[d],f=a[1];a=a[2];c&&f&&(k[d]=c=c.destroy());a&&!c&&(k[d]=k.renderer.text(a.text,0,0,a.useHTML).attr({align:a.align,"class":"highcharts-"+d,zIndex:a.zIndex||4}).add(),k[d].update=function(a){k.setTitle(!b&&a,b&&a);},k[d].css(a.style));});k.layOutTitles(d);},layOutTitles:function(a){var b=0,d,k=this.renderer,c=this.spacingBox;e(["title","subtitle"],
    function(a){var d=this[a],f=this.options[a];a="title"===a?-3:f.verticalAlign?0:b+2;var e;d&&(e=f.style.fontSize,e=k.fontMetrics(e,d).b,d.css({width:(f.width||c.width+f.widthAdjust)+"px"}).align(t({y:a+e},f),!1,"spacingBox"),f.floating||f.verticalAlign||(b=Math.ceil(b+d.getBBox(f.useHTML).height)));},this);d=this.titleOffset!==b;this.titleOffset=b;!this.isDirtyBox&&d&&(this.isDirtyBox=this.isDirtyLegend=d,this.hasRendered&&K(a,!0)&&this.isDirtyBox&&this.redraw());},getChartSize:function(){var d=this.options.chart,
    k=d.width,d=d.height,c=this.renderTo;b(k)||(this.containerWidth=a.getStyle(c,"width"));b(d)||(this.containerHeight=a.getStyle(c,"height"));this.chartWidth=Math.max(0,k||this.containerWidth||600);this.chartHeight=Math.max(0,a.relativeLength(d,this.chartWidth)||(1<this.containerHeight?this.containerHeight:400));},temporaryDisplay:function(b){var d=this.renderTo;if(b)for(;d&&d.style;)d.hcOrigStyle&&(a.css(d,d.hcOrigStyle),delete d.hcOrigStyle),d.hcOrigDetached&&(m.body.removeChild(d),d.hcOrigDetached=
    !1),d=d.parentNode;else for(;d&&d.style;){m.body.contains(d)||d.parentNode||(d.hcOrigDetached=!0,m.body.appendChild(d));if("none"===a.getStyle(d,"display",!1)||d.hcOricDetached)d.hcOrigStyle={display:d.style.display,height:d.style.height,overflow:d.style.overflow},b={display:"block",overflow:"hidden"},d!==this.renderTo&&(b.height=0),a.css(d,b),d.offsetWidth||d.style.setProperty("display","block","important");d=d.parentNode;if(d===m.body)break}},setClassName:function(a){this.container.className="highcharts-container "+
    (a||"");},getContainer:function(){var b,k=this.options,c=k.chart,e,x;b=this.renderTo;var l=a.uniqueKey(),q;b||(this.renderTo=b=c.renderTo);D(b)&&(this.renderTo=b=m.getElementById(b));b||a.error(13,!0);e=d(p(b,"data-highcharts-chart"));h(e)&&y[e]&&y[e].hasRendered&&y[e].destroy();p(b,"data-highcharts-chart",this.index);b.innerHTML="";c.skipClone||b.offsetWidth||this.temporaryDisplay();this.getChartSize();e=this.chartWidth;x=this.chartHeight;q=t({position:"relative",overflow:"hidden",width:e+"px",height:x+
    "px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},c.style);this.container=b=v("div",{id:l},q,b);this._cursor=b.style.cursor;this.renderer=new (a[c.renderer]||a.Renderer)(b,e,x,null,c.forExport,k.exporting&&k.exporting.allowHTML);this.setClassName(c.className);this.renderer.setStyle(c.style);this.renderer.chartIndex=this.index;f(this,"afterGetContainer");},getMargins:function(a){var d=this.spacing,k=this.margin,c=this.titleOffset;this.resetMargins();c&&
    !b(k[0])&&(this.plotTop=Math.max(this.plotTop,c+this.options.title.margin+d[0]));this.legend&&this.legend.display&&this.legend.adjustMargins(k,d);this.extraMargin&&(this[this.extraMargin.type]=(this[this.extraMargin.type]||0)+this.extraMargin.value);this.adjustPlotArea&&this.adjustPlotArea();a||this.getAxisMargins();},getAxisMargins:function(){var a=this,d=a.axisOffset=[0,0,0,0],k=a.margin;a.hasCartesianSeries&&e(a.axes,function(a){a.visible&&a.getOffset();});e(J,function(c,f){b(k[f])||(a[c]+=d[f]);});
    a.setChartSize();},reflow:function(d){var k=this,c=k.options.chart,f=k.renderTo,e=b(c.width)&&b(c.height),h=c.width||a.getStyle(f,"width"),c=c.height||a.getStyle(f,"height"),f=d?d.target:P;if(!e&&!k.isPrinting&&h&&c&&(f===P||f===m)){if(h!==k.containerWidth||c!==k.containerHeight)a.clearTimeout(k.reflowTimeout),k.reflowTimeout=A(function(){k.container&&k.setSize(void 0,void 0,!1);},d?100:0);k.containerWidth=h;k.containerHeight=c;}},setReflow:function(a){var b=this;!1===a||this.unbindReflow?!1===a&&this.unbindReflow&&
    (this.unbindReflow=this.unbindReflow()):(this.unbindReflow=B(P,"resize",function(a){b.reflow(a);}),B(this,"destroy",this.unbindReflow));},setSize:function(b,d,k){var c=this,h=c.renderer;c.isResizing+=1;a.setAnimation(k,c);c.oldChartHeight=c.chartHeight;c.oldChartWidth=c.chartWidth;void 0!==b&&(c.options.chart.width=b);void 0!==d&&(c.options.chart.height=d);c.getChartSize();b=h.globalAnimation;(b?C:l)(c.container,{width:c.chartWidth+"px",height:c.chartHeight+"px"},b);c.setChartSize(!0);h.setSize(c.chartWidth,
    c.chartHeight,k);e(c.axes,function(a){a.isDirty=!0;a.setScale();});c.isDirtyLegend=!0;c.isDirtyBox=!0;c.layOutTitles();c.getMargins();c.redraw(k);c.oldChartHeight=null;f(c,"resize");A(function(){c&&f(c,"endResize",null,function(){--c.isResizing;});},G(b).duration);},setChartSize:function(a){var b=this.inverted,d=this.renderer,c=this.chartWidth,k=this.chartHeight,h=this.options.chart,x=this.spacing,l=this.clipOffset,q,E,r,n;this.plotLeft=q=Math.round(this.plotLeft);this.plotTop=E=Math.round(this.plotTop);
    this.plotWidth=r=Math.max(0,Math.round(c-q-this.marginRight));this.plotHeight=n=Math.max(0,Math.round(k-E-this.marginBottom));this.plotSizeX=b?n:r;this.plotSizeY=b?r:n;this.plotBorderWidth=h.plotBorderWidth||0;this.spacingBox=d.spacingBox={x:x[3],y:x[0],width:c-x[3]-x[1],height:k-x[0]-x[2]};this.plotBox=d.plotBox={x:q,y:E,width:r,height:n};c=2*Math.floor(this.plotBorderWidth/2);b=Math.ceil(Math.max(c,l[3])/2);d=Math.ceil(Math.max(c,l[0])/2);this.clipBox={x:b,y:d,width:Math.floor(this.plotSizeX-Math.max(c,
    l[1])/2-b),height:Math.max(0,Math.floor(this.plotSizeY-Math.max(c,l[2])/2-d))};a||e(this.axes,function(a){a.setAxisSize();a.setAxisTranslation();});f(this,"afterSetChartSize",{skipAxes:a});},resetMargins:function(){var a=this,b=a.options.chart;e(["margin","spacing"],function(d){var c=b[d],k=w(c)?c:[c,c,c,c];e(["Top","Right","Bottom","Left"],function(c,f){a[d][f]=K(b[d+c],k[f]);});});e(J,function(b,d){a[b]=K(a.margin[d],a.spacing[d]);});a.axisOffset=[0,0,0,0];a.clipOffset=[0,0,0,0];},drawChartBox:function(){var a=
    this.options.chart,b=this.renderer,d=this.chartWidth,c=this.chartHeight,k=this.chartBackground,e=this.plotBackground,h=this.plotBorder,x,l=this.plotBGImage,q=a.backgroundColor,E=a.plotBackgroundColor,r=a.plotBackgroundImage,n,t=this.plotLeft,H=this.plotTop,g=this.plotWidth,A=this.plotHeight,K=this.plotBox,w=this.clipRect,F=this.clipBox,m="animate";k||(this.chartBackground=k=b.rect().addClass("highcharts-background").add(),m="attr");x=a.borderWidth||0;n=x+(a.shadow?8:0);q={fill:q||"none"};if(x||k["stroke-width"])q.stroke=
    a.borderColor,q["stroke-width"]=x;k.attr(q).shadow(a.shadow);k[m]({x:n/2,y:n/2,width:d-n-x%2,height:c-n-x%2,r:a.borderRadius});m="animate";e||(m="attr",this.plotBackground=e=b.rect().addClass("highcharts-plot-background").add());e[m](K);e.attr({fill:E||"none"}).shadow(a.plotShadow);r&&(l?l.animate(K):this.plotBGImage=b.image(r,t,H,g,A).add());w?w.animate({width:F.width,height:F.height}):this.clipRect=b.clipRect(F);m="animate";h||(m="attr",this.plotBorder=h=b.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());
    h.attr({stroke:a.plotBorderColor,"stroke-width":a.plotBorderWidth||0,fill:"none"});h[m](h.crisp({x:t,y:H,width:g,height:A},-h.strokeWidth()));this.isDirtyBox=!1;f(this,"afterDrawChartBox");},propFromSeries:function(){var a=this,b=a.options.chart,d,c=a.options.series,k,f;e(["inverted","angular","polar"],function(e){d=E[b.type||b.defaultSeriesType];f=b[e]||d&&d.prototype[e];for(k=c&&c.length;!f&&k--;)(d=E[c[k].type])&&d.prototype[e]&&(f=!0);a[e]=f;});},linkSeries:function(){var a=this,b=a.series;e(b,function(a){a.linkedSeries.length=
    0;});e(b,function(b){var d=b.options.linkedTo;D(d)&&(d=":previous"===d?a.series[b.index-1]:a.get(d))&&d.linkedParent!==b&&(d.linkedSeries.push(b),b.linkedParent=d,b.visible=K(b.options.visible,d.options.visible,b.visible));});f(this,"afterLinkSeries");},renderSeries:function(){e(this.series,function(a){a.translate();a.render();});},renderLabels:function(){var a=this,b=a.options.labels;b.items&&e(b.items,function(c){var k=t(b.style,c.style),f=d(k.left)+a.plotLeft,e=d(k.top)+a.plotTop+12;delete k.left;delete k.top;
    a.renderer.text(c.html,f,e).attr({zIndex:2}).css(k).add();});},render:function(){var a=this.axes,b=this.renderer,d=this.options,c,k,f;this.setTitle();this.legend=new r(this,d.legend);this.getStacks&&this.getStacks();this.getMargins(!0);this.setChartSize();d=this.plotWidth;c=this.plotHeight=Math.max(this.plotHeight-21,0);e(a,function(a){a.setScale();});this.getAxisMargins();k=1.1<d/this.plotWidth;f=1.05<c/this.plotHeight;if(k||f)e(a,function(a){(a.horiz&&k||!a.horiz&&f)&&a.setTickInterval(!0);}),this.getMargins();
    this.drawChartBox();this.hasCartesianSeries&&e(a,function(a){a.visible&&a.render();});this.seriesGroup||(this.seriesGroup=b.g("series-group").attr({zIndex:3}).add());this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive&&this.setResponsive();this.hasRendered=!0;},addCredits:function(a){var b=this;a=q(!0,this.options.credits,a);a.enabled&&!this.credits&&(this.credits=this.renderer.text(a.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",function(){a.href&&
    (P.location.href=a.href);}).attr({align:a.position.align,zIndex:8}).css(a.style).add().align(a.position),this.credits.update=function(a){b.credits=b.credits.destroy();b.addCredits(a);});},destroy:function(){var b=this,d=b.axes,c=b.series,k=b.container,h,x=k&&k.parentNode;f(b,"destroy");b.renderer.forExport?a.erase(y,b):y[b.index]=void 0;a.chartCount--;b.renderTo.removeAttribute("data-highcharts-chart");H(b);for(h=d.length;h--;)d[h]=d[h].destroy();this.scroller&&this.scroller.destroy&&this.scroller.destroy();
    for(h=c.length;h--;)c[h]=c[h].destroy();e("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" "),function(a){var d=b[a];d&&d.destroy&&(b[a]=d.destroy());});k&&(k.innerHTML="",H(k),x&&u(k));F(b,function(a,d){delete b[d];});},firstRender:function(){var a=this,b=a.options;if(!a.isReadyToRender||a.isReadyToRender()){a.getContainer();a.resetMargins();a.setChartSize();a.propFromSeries();a.getAxes();
    e(b.series||[],function(b){a.initSeries(b);});a.linkSeries();f(a,"beforeRender");x&&(a.pointer=new x(a,b));a.render();if(!a.renderer.imgCount&&a.onload)a.onload();a.temporaryDisplay(!0);}},onload:function(){e([this.callback].concat(this.callbacks),function(a){a&&void 0!==this.index&&a.apply(this,[this]);},this);f(this,"load");f(this,"render");b(this.index)&&this.setReflow(this.options.chart.reflow);this.onload=null;}});})(L);(function(a){var B=a.addEvent,C=a.Chart,G=a.each;B(C,"afterSetChartSize",function(p){var m=
    this.options.chart.scrollablePlotArea;if(m=m&&m.minWidth)if(this.scrollablePixels=m=Math.max(0,m-this.chartWidth))this.plotWidth+=m,this.clipBox.width+=m,p.skipAxes||G(this.axes,function(g){1===g.side?g.getPlotLinePath=function(){var m=this.right,p;this.right=m-g.chart.scrollablePixels;p=a.Axis.prototype.getPlotLinePath.apply(this,arguments);this.right=m;return p}:(g.setAxisSize(),g.setAxisTranslation());});});B(C,"render",function(){this.scrollablePixels?(this.setUpScrolling&&this.setUpScrolling(),
    this.applyFixed()):this.fixedDiv&&this.applyFixed();});C.prototype.setUpScrolling=function(){this.scrollingContainer=a.createElement("div",{className:"highcharts-scrolling"},{overflowX:"auto",WebkitOverflowScrolling:"touch"},this.renderTo);this.innerContainer=a.createElement("div",{className:"highcharts-inner-container"},null,this.scrollingContainer);this.innerContainer.appendChild(this.container);this.setUpScrolling=null;};C.prototype.applyFixed=function(){var p=this.container,m,g;this.fixedDiv||(this.fixedDiv=
    a.createElement("div",{className:"highcharts-fixed"},{position:"absolute",overflow:"hidden",pointerEvents:"none",zIndex:2},null,!0),this.renderTo.insertBefore(this.fixedDiv,this.renderTo.firstChild),this.fixedRenderer=m=new a.Renderer(this.fixedDiv,0,0),this.scrollableMask=m.path().attr({fill:a.color(this.options.chart.backgroundColor||"#fff").setOpacity(.85).get(),zIndex:-1}).addClass("highcharts-scrollable-mask").add(),a.each([this.inverted?".highcharts-xaxis":".highcharts-yaxis",this.inverted?
    ".highcharts-xaxis-labels":".highcharts-yaxis-labels",".highcharts-contextbutton",".highcharts-credits",".highcharts-legend",".highcharts-subtitle",".highcharts-title"],function(g){a.each(p.querySelectorAll(g),function(a){m.box.appendChild(a);a.style.pointerEvents="auto";});}));this.fixedRenderer.setSize(this.chartWidth,this.chartHeight);g=this.chartWidth+this.scrollablePixels;this.container.style.width=g+"px";this.renderer.boxWrapper.attr({width:g,height:this.chartHeight,viewBox:[0,0,g,this.chartHeight].join(" ")});
    g=this.options.chart.scrollablePlotArea;g.scrollPositionX&&(this.scrollingContainer.scrollLeft=this.scrollablePixels*g.scrollPositionX);var v=this.axisOffset;g=this.plotTop-v[0]-1;var v=this.plotTop+this.plotHeight+v[2],z=this.plotLeft+this.plotWidth-this.scrollablePixels;this.scrollableMask.attr({d:this.scrollablePixels?["M",0,g,"L",this.plotLeft-1,g,"L",this.plotLeft-1,v,"L",0,v,"Z","M",z,g,"L",this.chartWidth,g,"L",this.chartWidth,v,"L",z,v,"Z"]:["M",0,0]});};})(L);(function(a){var B,C=a.each,G=
    a.extend,p=a.erase,m=a.fireEvent,g=a.format,v=a.isArray,z=a.isNumber,u=a.pick,y=a.removeEvent;a.Point=B=function(){};a.Point.prototype={init:function(a,b,e){this.series=a;this.color=a.color;this.applyOptions(b,e);a.options.colorByPoint?(b=a.options.colors||a.chart.options.colors,this.color=this.color||b[a.colorCounter],b=b.length,e=a.colorCounter,a.colorCounter++,a.colorCounter===b&&(a.colorCounter=0)):e=a.colorIndex;this.colorIndex=u(this.colorIndex,e);a.chart.pointCount++;m(this,"afterInit");return this},
    applyOptions:function(a,b){var e=this.series,l=e.options.pointValKey||e.pointValKey;a=B.prototype.optionsToObject.call(this,a);G(this,a);this.options=this.options?G(this.options,a):a;a.group&&delete this.group;l&&(this.y=this[l]);this.isNull=u(this.isValid&&!this.isValid(),null===this.x||!z(this.y,!0));this.selected&&(this.state="select");"name"in this&&void 0===b&&e.xAxis&&e.xAxis.hasNames&&(this.x=e.xAxis.nameToX(this));void 0===this.x&&e&&(this.x=void 0===b?e.autoIncrement(this):b);return this},
    setNestedProperty:function(l,b,e){e=e.split(".");a.reduce(e,function(e,l,f,c){e[l]=c.length-1===f?b:a.isObject(e[l],!0)?e[l]:{};return e[l]},l);return l},optionsToObject:function(l){var b={},e=this.series,t=e.options.keys,n=t||e.pointArrayMap||["y"],f=n.length,c=0,h=0;if(z(l)||null===l)b[n[0]]=l;else if(v(l))for(!t&&l.length>f&&(e=typeof l[0],"string"===e?b.name=l[0]:"number"===e&&(b.x=l[0]),c++);h<f;)t&&void 0===l[c]||(0<n[h].indexOf(".")?a.Point.prototype.setNestedProperty(b,l[c],n[h]):b[n[h]]=
    l[c]),c++,h++;else"object"===typeof l&&(b=l,l.dataLabels&&(e._hasPointLabels=!0),l.marker&&(e._hasPointMarkers=!0));return b},getClassName:function(){return "highcharts-point"+(this.selected?" highcharts-point-select":"")+(this.negative?" highcharts-negative":"")+(this.isNull?" highcharts-null-point":"")+(void 0!==this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?" "+this.zone.className.replace("highcharts-negative",
    ""):"")},getZone:function(){var a=this.series,b=a.zones,a=a.zoneAxis||"y",e=0,t;for(t=b[e];this[a]>=t.value;)t=b[++e];this.nonZonedColor||(this.nonZonedColor=this.color);this.color=t&&t.color&&!this.options.color?t.color:this.nonZonedColor;return t},destroy:function(){var a=this.series.chart,b=a.hoverPoints,e;a.pointCount--;b&&(this.setState(),p(b,this),b.length||(a.hoverPoints=null));if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel)y(this),this.destroyElements();this.legendItem&&
    a.legend.destroyItem(this);for(e in this)this[e]=null;},destroyElements:function(){for(var a=["graphic","dataLabel","dataLabelUpper","connector","shadowGroup"],b,e=6;e--;)b=a[e],this[b]&&(this[b]=this[b].destroy());},getLabelConfig:function(){return {x:this.category,y:this.y,color:this.color,colorIndex:this.colorIndex,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(a){var b=this.series,e=b.tooltipOptions,
    l=u(e.valueDecimals,""),n=e.valuePrefix||"",f=e.valueSuffix||"";C(b.pointArrayMap||["y"],function(b){b="{point."+b;if(n||f)a=a.replace(RegExp(b+"}","g"),n+b+"}"+f);a=a.replace(RegExp(b+"}","g"),b+":,."+l+"f}");});return g(a,{point:this,series:this.series},b.chart.time)},firePointEvent:function(a,b,e){var l=this,n=this.series.options;(n.point.events[a]||l.options&&l.options.events&&l.options.events[a])&&this.importEvents();"click"===a&&n.allowPointSelect&&(e=function(a){l.select&&l.select(null,a.ctrlKey||
    a.metaKey||a.shiftKey);});m(this,a,b,e);},visible:!0};})(L);(function(a){var B=a.addEvent,C=a.animObject,G=a.arrayMax,p=a.arrayMin,m=a.correctFloat,g=a.defaultOptions,v=a.defaultPlotOptions,z=a.defined,u=a.each,y=a.erase,l=a.extend,b=a.fireEvent,e=a.grep,t=a.isArray,n=a.isNumber,f=a.isString,c=a.merge,h=a.objectEach,w=a.pick,D=a.removeEvent,r=a.splat,J=a.SVGElement,q=a.syncTimeout,F=a.win;a.Series=a.seriesType("line",null,{lineWidth:2,allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},
    marker:{lineWidth:0,lineColor:"#ffffff",enabledThreshold:2,radius:4,states:{normal:{animation:!0},hover:{animation:{duration:50},enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:"#cccccc",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){return null===this.y?"":a.numberFormat(this.y,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},verticalAlign:"bottom",x:0,y:0,padding:5},cropThreshold:300,pointRange:0,
    softThreshold:!0,states:{normal:{animation:!0},hover:{animation:{duration:50},lineWidthPlus:1,marker:{},halo:{size:10,opacity:.25}},select:{marker:{}}},stickyTracking:!0,turboThreshold:1E3,findNearestPointBy:"x"},{isCartesian:!0,pointClass:a.Point,sorted:!0,requireSorting:!0,directTouch:!1,axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x","y"],coll:"series",init:function(a,c){var d=this,f,e=a.series,k;d.chart=a;d.options=c=d.setOptions(c);d.linkedSeries=[];d.bindAxes();l(d,{name:c.name,
    state:"",visible:!1!==c.visible,selected:!0===c.selected});f=c.events;h(f,function(a,b){B(d,b,a);});if(f&&f.click||c.point&&c.point.events&&c.point.events.click||c.allowPointSelect)a.runTrackerClick=!0;d.getColor();d.getSymbol();u(d.parallelArrays,function(a){d[a+"Data"]=[];});d.setData(c.data,!1);d.isCartesian&&(a.hasCartesianSeries=!0);e.length&&(k=e[e.length-1]);d._i=w(k&&k._i,-1)+1;a.orderSeries(this.insert(e));b(this,"afterInit");},insert:function(a){var b=this.options.index,d;if(n(b)){for(d=a.length;d--;)if(b>=
    w(a[d].options.index,a[d]._i)){a.splice(d+1,0,this);break}-1===d&&a.unshift(this);d+=1;}else a.push(this);return w(d,a.length-1)},bindAxes:function(){var b=this,c=b.options,d=b.chart,f;u(b.axisTypes||[],function(e){u(d[e],function(a){f=a.options;if(c[e]===f.index||void 0!==c[e]&&c[e]===f.id||void 0===c[e]&&0===f.index)b.insert(a.series),b[e]=a,a.isDirty=!0;});b[e]||b.optionalAxis===e||a.error(18,!0);});},updateParallelArrays:function(a,b){var d=a.series,c=arguments,f=n(b)?function(c){var k="y"===c&&d.toYData?
    d.toYData(a):a[c];d[c+"Data"][b]=k;}:function(a){Array.prototype[b].apply(d[a+"Data"],Array.prototype.slice.call(c,2));};u(d.parallelArrays,f);},autoIncrement:function(){var a=this.options,b=this.xIncrement,d,c=a.pointIntervalUnit,f=this.chart.time,b=w(b,a.pointStart,0);this.pointInterval=d=w(this.pointInterval,a.pointInterval,1);c&&(a=new f.Date(b),"day"===c?f.set("Date",a,f.get("Date",a)+d):"month"===c?f.set("Month",a,f.get("Month",a)+d):"year"===c&&f.set("FullYear",a,f.get("FullYear",a)+d),d=a.getTime()-
    b);this.xIncrement=b+d;return b},setOptions:function(a){var f=this.chart,d=f.options,e=d.plotOptions,h=(f.userOptions||{}).plotOptions||{},k=e[this.type];this.userOptions=a;f=c(k,e.series,a);this.tooltipOptions=c(g.tooltip,g.plotOptions.series&&g.plotOptions.series.tooltip,g.plotOptions[this.type].tooltip,d.tooltip.userOptions,e.series&&e.series.tooltip,e[this.type].tooltip,a.tooltip);this.stickyTracking=w(a.stickyTracking,h[this.type]&&h[this.type].stickyTracking,h.series&&h.series.stickyTracking,
    this.tooltipOptions.shared&&!this.noSharedTooltip?!0:f.stickyTracking);null===k.marker&&delete f.marker;this.zoneAxis=f.zoneAxis;a=this.zones=(f.zones||[]).slice();!f.negativeColor&&!f.negativeFillColor||f.zones||a.push({value:f[this.zoneAxis+"Threshold"]||f.threshold||0,className:"highcharts-negative",color:f.negativeColor,fillColor:f.negativeFillColor});a.length&&z(a[a.length-1].value)&&a.push({color:this.color,fillColor:this.fillColor});b(this,"afterSetOptions",{options:f});return f},getName:function(){return this.name||
    "Series "+(this.index+1)},getCyclic:function(a,b,d){var c,f=this.chart,k=this.userOptions,e=a+"Index",h=a+"Counter",x=d?d.length:w(f.options.chart[a+"Count"],f[a+"Count"]);b||(c=w(k[e],k["_"+e]),z(c)||(f.series.length||(f[h]=0),k["_"+e]=c=f[h]%x,f[h]+=1),d&&(b=d[c]));void 0!==c&&(this[e]=c);this[a]=b;},getColor:function(){this.options.colorByPoint?this.options.color=null:this.getCyclic("color",this.options.color||v[this.type].color,this.chart.options.colors);},getSymbol:function(){this.getCyclic("symbol",
    this.options.marker.symbol,this.chart.options.symbols);},drawLegendSymbol:a.LegendSymbolMixin.drawLineMarker,updateData:function(b){var c=this.options,d=this.points,f=[],e,k,h,x=this.requireSorting;u(b,function(b){var k;k=a.defined(b)&&this.pointClass.prototype.optionsToObject.call({series:this},b).x;n(k)&&(k=a.inArray(k,this.xData,h),-1===k?f.push(b):b!==c.data[k]?(d[k].update(b,!1,null,!1),d[k].touched=!0,x&&(h=k)):d[k]&&(d[k].touched=!0),e=!0);},this);if(e)for(b=d.length;b--;)k=d[b],k.touched||k.remove(!1),
    k.touched=!1;else if(b.length===d.length)u(b,function(a,b){d[b].update&&a!==c.data[b]&&d[b].update(a,!1,null,!1);});else return !1;u(f,function(a){this.addPoint(a,!1);},this);return !0},setData:function(b,c,d,e){var h=this,k=h.points,x=k&&k.length||0,q,l=h.options,r=h.chart,g=null,H=h.xAxis,F=l.turboThreshold,m=this.xData,D=this.yData,K=(q=h.pointArrayMap)&&q.length,J;b=b||[];q=b.length;c=w(c,!0);!1!==e&&q&&x&&!h.cropped&&!h.hasGroupedData&&h.visible&&(J=this.updateData(b));if(!J){h.xIncrement=null;h.colorCounter=
    0;u(this.parallelArrays,function(a){h[a+"Data"].length=0;});if(F&&q>F){for(d=0;null===g&&d<q;)g=b[d],d++;if(n(g))for(d=0;d<q;d++)m[d]=this.autoIncrement(),D[d]=b[d];else if(t(g))if(K)for(d=0;d<q;d++)g=b[d],m[d]=g[0],D[d]=g.slice(1,K+1);else for(d=0;d<q;d++)g=b[d],m[d]=g[0],D[d]=g[1];else a.error(12);}else for(d=0;d<q;d++)void 0!==b[d]&&(g={series:h},h.pointClass.prototype.applyOptions.apply(g,[b[d]]),h.updateParallelArrays(g,d));D&&f(D[0])&&a.error(14,!0);h.data=[];h.options.data=h.userOptions.data=
    b;for(d=x;d--;)k[d]&&k[d].destroy&&k[d].destroy();H&&(H.minRange=H.userMinRange);h.isDirty=r.isDirtyBox=!0;h.isDirtyData=!!k;d=!1;}"point"===l.legendType&&(this.processData(),this.generatePoints());c&&r.redraw(d);},processData:function(b){var c=this.xData,d=this.yData,f=c.length,e;e=0;var k,h,x=this.xAxis,q,l=this.options;q=l.cropThreshold;var r=this.getExtremesFromAll||l.getExtremesFromAll,n=this.isCartesian,l=x&&x.val2lin,g=x&&x.isLog,t=this.requireSorting,w,F;if(n&&!this.isDirty&&!x.isDirty&&!this.yAxis.isDirty&&
    !b)return !1;x&&(b=x.getExtremes(),w=b.min,F=b.max);if(n&&this.sorted&&!r&&(!q||f>q||this.forceCrop))if(c[f-1]<w||c[0]>F)c=[],d=[];else if(c[0]<w||c[f-1]>F)e=this.cropData(this.xData,this.yData,w,F),c=e.xData,d=e.yData,e=e.start,k=!0;for(q=c.length||1;--q;)f=g?l(c[q])-l(c[q-1]):c[q]-c[q-1],0<f&&(void 0===h||f<h)?h=f:0>f&&t&&(a.error(15),t=!1);this.cropped=k;this.cropStart=e;this.processedXData=c;this.processedYData=d;this.closestPointRange=h;},cropData:function(a,b,d,c,f){var k=a.length,e=0,h=k,x;f=
    w(f,this.cropShoulder,1);for(x=0;x<k;x++)if(a[x]>=d){e=Math.max(0,x-f);break}for(d=x;d<k;d++)if(a[d]>c){h=d+f;break}return {xData:a.slice(e,h),yData:b.slice(e,h),start:e,end:h}},generatePoints:function(){var a=this.options,b=a.data,d=this.data,c,f=this.processedXData,k=this.processedYData,e=this.pointClass,h=f.length,q=this.cropStart||0,l,n=this.hasGroupedData,a=a.keys,g,t=[],w;d||n||(d=[],d.length=b.length,d=this.data=d);a&&n&&(this.options.keys=!1);for(w=0;w<h;w++)l=q+w,n?(g=(new e).init(this,[f[w]].concat(r(k[w]))),
    g.dataGroup=this.groupMap[w]):(g=d[l])||void 0===b[l]||(d[l]=g=(new e).init(this,b[l],f[w])),g&&(g.index=l,t[w]=g);this.options.keys=a;if(d&&(h!==(c=d.length)||n))for(w=0;w<c;w++)w!==q||n||(w+=h),d[w]&&(d[w].destroyElements(),d[w].plotX=void 0);this.data=d;this.points=t;},getExtremes:function(a){var b=this.yAxis,d=this.processedXData,c,f=[],k=0;c=this.xAxis.getExtremes();var e=c.min,h=c.max,q,x,l=this.requireSorting?1:0,r,g;a=a||this.stackedYData||this.processedYData||[];c=a.length;for(g=0;g<c;g++)if(x=
    d[g],r=a[g],q=(n(r,!0)||t(r))&&(!b.positiveValuesOnly||r.length||0<r),x=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||(d[g+l]||x)>=e&&(d[g-l]||x)<=h,q&&x)if(q=r.length)for(;q--;)"number"===typeof r[q]&&(f[k++]=r[q]);else f[k++]=r;this.dataMin=p(f);this.dataMax=G(f);},translate:function(){this.processedXData||this.processData();this.generatePoints();var a=this.options,c=a.stacking,d=this.xAxis,f=d.categories,e=this.yAxis,k=this.points,h=k.length,q=!!this.modifyValue,l=a.pointPlacement,
    r="between"===l||n(l),g=a.threshold,t=a.startFromThreshold?g:0,F,D,J,u,v=Number.MAX_VALUE;"between"===l&&(l=.5);n(l)&&(l*=w(a.pointRange||d.pointRange));for(a=0;a<h;a++){var p=k[a],y=p.x,C=p.y;D=p.low;var B=c&&e.stacks[(this.negStacks&&C<(t?0:g)?"-":"")+this.stackKey],G;e.positiveValuesOnly&&null!==C&&0>=C&&(p.isNull=!0);p.plotX=F=m(Math.min(Math.max(-1E5,d.translate(y,0,0,0,1,l,"flags"===this.type)),1E5));c&&this.visible&&!p.isNull&&B&&B[y]&&(u=this.getStackIndicator(u,y,this.index),G=B[y],C=G.points[u.key],
    D=C[0],C=C[1],D===t&&u.key===B[y].base&&(D=w(n(g)&&g,e.min)),e.positiveValuesOnly&&0>=D&&(D=null),p.total=p.stackTotal=G.total,p.percentage=G.total&&p.y/G.total*100,p.stackY=C,G.setOffset(this.pointXOffset||0,this.barW||0));p.yBottom=z(D)?Math.min(Math.max(-1E5,e.translate(D,0,1,0,1)),1E5):null;q&&(C=this.modifyValue(C,p));p.plotY=D="number"===typeof C&&Infinity!==C?Math.min(Math.max(-1E5,e.translate(C,0,1,0,1)),1E5):void 0;p.isInside=void 0!==D&&0<=D&&D<=e.len&&0<=F&&F<=d.len;p.clientX=r?m(d.translate(y,
    0,0,0,1,l)):F;p.negative=p.y<(g||0);p.category=f&&void 0!==f[p.x]?f[p.x]:p.x;p.isNull||(void 0!==J&&(v=Math.min(v,Math.abs(F-J))),J=F);p.zone=this.zones.length&&p.getZone();}this.closestPointRangePx=v;b(this,"afterTranslate");},getValidPoints:function(a,b){var d=this.chart;return e(a||this.points||[],function(a){return b&&!d.isInsidePlot(a.plotX,a.plotY,d.inverted)?!1:!a.isNull})},setClip:function(a){var b=this.chart,d=this.options,c=b.renderer,f=b.inverted,k=this.clipBox,e=k||b.clipBox,h=this.sharedClipKey||
    ["_sharedClip",a&&a.duration,a&&a.easing,e.height,d.xAxis,d.yAxis].join(),q=b[h],l=b[h+"m"];q||(a&&(e.width=0,f&&(e.x=b.plotSizeX),b[h+"m"]=l=c.clipRect(f?b.plotSizeX+99:-99,f?-b.plotLeft:-b.plotTop,99,f?b.chartWidth:b.chartHeight)),b[h]=q=c.clipRect(e),q.count={length:0});a&&!q.count[this.index]&&(q.count[this.index]=!0,q.count.length+=1);!1!==d.clip&&(this.group.clip(a||k?q:b.clipRect),this.markerGroup.clip(l),this.sharedClipKey=h);a||(q.count[this.index]&&(delete q.count[this.index],--q.count.length),
    0===q.count.length&&h&&b[h]&&(k||(b[h]=b[h].destroy()),b[h+"m"]&&(b[h+"m"]=b[h+"m"].destroy())));},animate:function(a){var b=this.chart,d=C(this.options.animation),c;a?this.setClip(d):(c=this.sharedClipKey,(a=b[c])&&a.animate({width:b.plotSizeX,x:0},d),b[c+"m"]&&b[c+"m"].animate({width:b.plotSizeX+99,x:0},d),this.animate=null);},afterAnimate:function(){this.setClip();b(this,"afterAnimate");this.finishedAnimating=!0;},drawPoints:function(){var a=this.points,b=this.chart,d,c,f,k,e=this.options.marker,
    h,q,l,r=this[this.specialGroup]||this.markerGroup,g,n=w(e.enabled,this.xAxis.isRadial?!0:null,this.closestPointRangePx>=e.enabledThreshold*e.radius);if(!1!==e.enabled||this._hasPointMarkers)for(d=0;d<a.length;d++)c=a[d],k=c.graphic,h=c.marker||{},q=!!c.marker,f=n&&void 0===h.enabled||h.enabled,l=c.isInside,f&&!c.isNull?(f=w(h.symbol,this.symbol),g=this.markerAttribs(c,c.selected&&"select"),k?k[l?"show":"hide"](!0).animate(g):l&&(0<g.width||c.hasImage)&&(c.graphic=k=b.renderer.symbol(f,g.x,g.y,g.width,
    g.height,q?h:e).add(r)),k&&k.attr(this.pointAttribs(c,c.selected&&"select")),k&&k.addClass(c.getClassName(),!0)):k&&(c.graphic=k.destroy());},markerAttribs:function(a,b){var d=this.options.marker,c=a.marker||{},f=c.symbol||d.symbol,k=w(c.radius,d.radius);b&&(d=d.states[b],b=c.states&&c.states[b],k=w(b&&b.radius,d&&d.radius,k+(d&&d.radiusPlus||0)));a.hasImage=f&&0===f.indexOf("url");a.hasImage&&(k=0);a={x:Math.floor(a.plotX)-k,y:a.plotY-k};k&&(a.width=a.height=2*k);return a},pointAttribs:function(a,
    b){var d=this.options.marker,c=a&&a.options,f=c&&c.marker||{},k=this.color,e=c&&c.color,h=a&&a.color,c=w(f.lineWidth,d.lineWidth);a=a&&a.zone&&a.zone.color;k=e||a||h||k;a=f.fillColor||d.fillColor||k;k=f.lineColor||d.lineColor||k;b&&(d=d.states[b],b=f.states&&f.states[b]||{},c=w(b.lineWidth,d.lineWidth,c+w(b.lineWidthPlus,d.lineWidthPlus,0)),a=b.fillColor||d.fillColor||a,k=b.lineColor||d.lineColor||k);return {stroke:k,"stroke-width":c,fill:a}},destroy:function(){var c=this,f=c.chart,d=/AppleWebKit\/533/.test(F.navigator.userAgent),
    e,q,k=c.data||[],l,r;b(c,"destroy");D(c);u(c.axisTypes||[],function(a){(r=c[a])&&r.series&&(y(r.series,c),r.isDirty=r.forceRedraw=!0);});c.legendItem&&c.chart.legend.destroyItem(c);for(q=k.length;q--;)(l=k[q])&&l.destroy&&l.destroy();c.points=null;a.clearTimeout(c.animationTimeout);h(c,function(a,b){a instanceof J&&!a.survive&&(e=d&&"group"===b?"hide":"destroy",a[e]());});f.hoverSeries===c&&(f.hoverSeries=null);y(f.series,c);f.orderSeries();h(c,function(a,b){delete c[b];});},getGraphPath:function(a,b,
    d){var c=this,f=c.options,k=f.step,e,h=[],q=[],l;a=a||c.points;(e=a.reversed)&&a.reverse();(k={right:1,center:2}[k]||k&&3)&&e&&(k=4-k);!f.connectNulls||b||d||(a=this.getValidPoints(a));u(a,function(e,r){var x=e.plotX,g=e.plotY,n=a[r-1];(e.leftCliff||n&&n.rightCliff)&&!d&&(l=!0);e.isNull&&!z(b)&&0<r?l=!f.connectNulls:e.isNull&&!b?l=!0:(0===r||l?r=["M",e.plotX,e.plotY]:c.getPointSpline?r=c.getPointSpline(a,e,r):k?(r=1===k?["L",n.plotX,g]:2===k?["L",(n.plotX+x)/2,n.plotY,"L",(n.plotX+x)/2,g]:["L",x,
    n.plotY],r.push("L",x,g)):r=["L",x,g],q.push(e.x),k&&(q.push(e.x),2===k&&q.push(e.x)),h.push.apply(h,r),l=!1);});h.xMap=q;return c.graphPath=h},drawGraph:function(){var a=this,b=this.options,d=(this.gappedPath||this.getGraphPath).call(this),c=[["graph","highcharts-graph",b.lineColor||this.color,b.dashStyle]],c=a.getZonesGraphs(c);u(c,function(c,f){var k=c[0],e=a[k];e?(e.endX=a.preventGraphAnimation?null:d.xMap,e.animate({d:d})):d.length&&(a[k]=a.chart.renderer.path(d).addClass(c[1]).attr({zIndex:1}).add(a.group),
    e={stroke:c[2],"stroke-width":b.lineWidth,fill:a.fillGraph&&a.color||"none"},c[3]?e.dashstyle=c[3]:"square"!==b.linecap&&(e["stroke-linecap"]=e["stroke-linejoin"]="round"),e=a[k].attr(e).shadow(2>f&&b.shadow));e&&(e.startX=d.xMap,e.isArea=d.isArea);});},getZonesGraphs:function(a){u(this.zones,function(b,d){a.push(["zone-graph-"+d,"highcharts-graph highcharts-zone-graph-"+d+" "+(b.className||""),b.color||this.color,b.dashStyle||this.options.dashStyle]);},this);return a},applyZones:function(){var a=this,
    b=this.chart,d=b.renderer,c=this.zones,f,k,e=this.clips||[],h,q=this.graph,l=this.area,r=Math.max(b.chartWidth,b.chartHeight),g=this[(this.zoneAxis||"y")+"Axis"],n,t,F=b.inverted,D,m,J,p,v=!1;c.length&&(q||l)&&g&&void 0!==g.min&&(t=g.reversed,D=g.horiz,q&&!this.showLine&&q.hide(),l&&l.hide(),n=g.getExtremes(),u(c,function(c,x){f=t?D?b.plotWidth:0:D?0:g.toPixels(n.min);f=Math.min(Math.max(w(k,f),0),r);k=Math.min(Math.max(Math.round(g.toPixels(w(c.value,n.max),!0)),0),r);v&&(f=k=g.toPixels(n.max));
    m=Math.abs(f-k);J=Math.min(f,k);p=Math.max(f,k);g.isXAxis?(h={x:F?p:J,y:0,width:m,height:r},D||(h.x=b.plotHeight-h.x)):(h={x:0,y:F?p:J,width:r,height:m},D&&(h.y=b.plotWidth-h.y));F&&d.isVML&&(h=g.isXAxis?{x:0,y:t?J:p,height:h.width,width:b.chartWidth}:{x:h.y-b.plotLeft-b.spacingBox.x,y:0,width:h.height,height:b.chartHeight});e[x]?e[x].animate(h):(e[x]=d.clipRect(h),q&&a["zone-graph-"+x].clip(e[x]),l&&a["zone-area-"+x].clip(e[x]));v=c.value>n.max;a.resetZones&&0===k&&(k=void 0);}),this.clips=e);},invertGroups:function(a){function b(){u(["group",
    "markerGroup"],function(b){d[b]&&(c.renderer.isVML&&d[b].attr({width:d.yAxis.len,height:d.xAxis.len}),d[b].width=d.yAxis.len,d[b].height=d.xAxis.len,d[b].invert(a));});}var d=this,c=d.chart,f;d.xAxis&&(f=B(c,"resize",b),B(d,"destroy",f),b(a),d.invertGroups=b);},plotGroup:function(a,b,d,c,f){var k=this[a],e=!k;e&&(this[a]=k=this.chart.renderer.g().attr({zIndex:c||.1}).add(f));k.addClass("highcharts-"+b+" highcharts-series-"+this.index+" highcharts-"+this.type+"-series "+(z(this.colorIndex)?"highcharts-color-"+
    this.colorIndex+" ":"")+(this.options.className||"")+(k.hasClass("highcharts-tracker")?" highcharts-tracker":""),!0);k.attr({visibility:d})[e?"attr":"animate"](this.getPlotBox());return k},getPlotBox:function(){var a=this.chart,b=this.xAxis,d=this.yAxis;a.inverted&&(b=d,d=this.xAxis);return {translateX:b?b.left:a.plotLeft,translateY:d?d.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=this,c=a.chart,d,f=a.options,e=!!a.animate&&c.renderer.isSVG&&C(f.animation).duration,k=a.visible?"inherit":
    "hidden",h=f.zIndex,l=a.hasRendered,r=c.seriesGroup,g=c.inverted;d=a.plotGroup("group","series",k,h,r);a.markerGroup=a.plotGroup("markerGroup","markers",k,h,r);e&&a.animate(!0);d.inverted=a.isCartesian?g:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());a.drawDataLabels&&a.drawDataLabels();a.visible&&a.drawPoints();a.drawTracker&&!1!==a.options.enableMouseTracking&&a.drawTracker();a.invertGroups(g);!1===f.clip||a.sharedClipKey||l||d.clip(c.clipRect);e&&a.animate();l||(a.animationTimeout=q(function(){a.afterAnimate();},
    e));a.isDirty=!1;a.hasRendered=!0;b(a,"afterRender");},redraw:function(){var a=this.chart,b=this.isDirty||this.isDirtyData,d=this.group,c=this.xAxis,f=this.yAxis;d&&(a.inverted&&d.attr({width:a.plotWidth,height:a.plotHeight}),d.animate({translateX:w(c&&c.left,a.plotLeft),translateY:w(f&&f.top,a.plotTop)}));this.translate();this.render();b&&delete this.kdTree;},kdAxisArray:["clientX","plotY"],searchPoint:function(a,b){var d=this.xAxis,c=this.yAxis,f=this.chart.inverted;return this.searchKDTree({clientX:f?
    d.len-a.chartY+d.pos:a.chartX-d.pos,plotY:f?c.len-a.chartX+c.pos:a.chartY-c.pos},b)},buildKDTree:function(){function a(d,c,f){var k,e;if(e=d&&d.length)return k=b.kdAxisArray[c%f],d.sort(function(a,b){return a[k]-b[k]}),e=Math.floor(e/2),{point:d[e],left:a(d.slice(0,e),c+1,f),right:a(d.slice(e+1),c+1,f)}}this.buildingKdTree=!0;var b=this,d=-1<b.options.findNearestPointBy.indexOf("y")?2:1;delete b.kdTree;q(function(){b.kdTree=a(b.getValidPoints(null,!b.directTouch),d,d);b.buildingKdTree=!1;},b.options.kdNow?
    0:1);},searchKDTree:function(a,b){function d(a,b,h,q){var l=b.point,r=c.kdAxisArray[h%q],g,n,t=l;n=z(a[f])&&z(l[f])?Math.pow(a[f]-l[f],2):null;g=z(a[k])&&z(l[k])?Math.pow(a[k]-l[k],2):null;g=(n||0)+(g||0);l.dist=z(g)?Math.sqrt(g):Number.MAX_VALUE;l.distX=z(n)?Math.sqrt(n):Number.MAX_VALUE;r=a[r]-l[r];g=0>r?"left":"right";n=0>r?"right":"left";b[g]&&(g=d(a,b[g],h+1,q),t=g[e]<t[e]?g:l);b[n]&&Math.sqrt(r*r)<t[e]&&(a=d(a,b[n],h+1,q),t=a[e]<t[e]?a:t);return t}var c=this,f=this.kdAxisArray[0],k=this.kdAxisArray[1],
    e=b?"distX":"dist";b=-1<c.options.findNearestPointBy.indexOf("y")?2:1;this.kdTree||this.buildingKdTree||this.buildKDTree();if(this.kdTree)return d(a,this.kdTree,b,b)}});})(L);(function(a){var B=a.Axis,C=a.Chart,G=a.correctFloat,p=a.defined,m=a.destroyObjectProperties,g=a.each,v=a.format,z=a.objectEach,u=a.pick,y=a.Series;a.StackItem=function(a,b,e,g,n){var f=a.chart.inverted;this.axis=a;this.isNegative=e;this.options=b;this.x=g;this.total=null;this.points={};this.stack=n;this.rightCliff=this.leftCliff=
    0;this.alignOptions={align:b.align||(f?e?"left":"right":"center"),verticalAlign:b.verticalAlign||(f?"middle":e?"bottom":"top"),y:u(b.y,f?4:e?14:-6),x:u(b.x,f?e?-6:6:0)};this.textAlign=b.textAlign||(f?e?"right":"left":"center");};a.StackItem.prototype={destroy:function(){m(this,this.axis);},render:function(a){var b=this.axis.chart,e=this.options,l=e.format,l=l?v(l,this,b.time):e.formatter.call(this);this.label?this.label.attr({text:l,visibility:"hidden"}):this.label=b.renderer.text(l,null,null,e.useHTML).css(e.style).attr({align:this.textAlign,
    rotation:e.rotation,visibility:"hidden"}).add(a);},setOffset:function(a,b){var e=this.axis,l=e.chart,g=e.translate(e.usePercentage?100:this.total,0,0,0,1),f=e.translate(0),f=Math.abs(g-f);a=l.xAxis[0].translate(this.x)+a;e=this.getStackBox(l,this,a,g,b,f,e);if(b=this.label)b.align(this.alignOptions,null,e),e=b.alignAttr,b[!1===this.options.crop||l.isInsidePlot(e.x,e.y)?"show":"hide"](!0);},getStackBox:function(a,b,e,g,n,f,c){var h=b.axis.reversed,l=a.inverted;a=c.height+c.pos-a.plotTop;b=b.isNegative&&
    !h||!b.isNegative&&h;return {x:l?b?g:g-f:e,y:l?a-e-n:b?a-g-f:a-g,width:l?f:n,height:l?n:f}}};C.prototype.getStacks=function(){var a=this;g(a.yAxis,function(a){a.stacks&&a.hasVisibleSeries&&(a.oldStacks=a.stacks);});g(a.series,function(b){!b.options.stacking||!0!==b.visible&&!1!==a.options.chart.ignoreHiddenSeries||(b.stackKey=b.type+u(b.options.stack,""));});};B.prototype.buildStacks=function(){var a=this.series,b=u(this.options.reversedStacks,!0),e=a.length,g;if(!this.isXAxis){this.usePercentage=!1;
    for(g=e;g--;)a[b?g:e-g-1].setStackedPoints();for(g=0;g<e;g++)a[g].modifyStacks();}};B.prototype.renderStackTotals=function(){var a=this.chart,b=a.renderer,e=this.stacks,g=this.stackTotalGroup;g||(this.stackTotalGroup=g=b.g("stack-labels").attr({visibility:"visible",zIndex:6}).add());g.translate(a.plotLeft,a.plotTop);z(e,function(a){z(a,function(a){a.render(g);});});};B.prototype.resetStacks=function(){var a=this,b=a.stacks;a.isXAxis||z(b,function(b){z(b,function(e,l){e.touched<a.stacksTouched?(e.destroy(),
    delete b[l]):(e.total=null,e.cumulative=null);});});};B.prototype.cleanStacks=function(){var a;this.isXAxis||(this.oldStacks&&(a=this.stacks=this.oldStacks),z(a,function(a){z(a,function(a){a.cumulative=a.total;});}));};y.prototype.setStackedPoints=function(){if(this.options.stacking&&(!0===this.visible||!1===this.chart.options.chart.ignoreHiddenSeries)){var l=this.processedXData,b=this.processedYData,e=[],g=b.length,n=this.options,f=n.threshold,c=u(n.startFromThreshold&&f,0),h=n.stack,n=n.stacking,w=this.stackKey,
    D="-"+w,r=this.negStacks,m=this.yAxis,q=m.stacks,F=m.oldStacks,x,v,d,H,E,k,A;m.stacksTouched+=1;for(E=0;E<g;E++)k=l[E],A=b[E],x=this.getStackIndicator(x,k,this.index),H=x.key,d=(v=r&&A<(c?0:f))?D:w,q[d]||(q[d]={}),q[d][k]||(F[d]&&F[d][k]?(q[d][k]=F[d][k],q[d][k].total=null):q[d][k]=new a.StackItem(m,m.options.stackLabels,v,k,h)),d=q[d][k],null!==A?(d.points[H]=d.points[this.index]=[u(d.cumulative,c)],p(d.cumulative)||(d.base=H),d.touched=m.stacksTouched,0<x.index&&!1===this.singleStacks&&(d.points[H][0]=
    d.points[this.index+","+k+",0"][0])):d.points[H]=d.points[this.index]=null,"percent"===n?(v=v?w:D,r&&q[v]&&q[v][k]?(v=q[v][k],d.total=v.total=Math.max(v.total,d.total)+Math.abs(A)||0):d.total=G(d.total+(Math.abs(A)||0))):d.total=G(d.total+(A||0)),d.cumulative=u(d.cumulative,c)+(A||0),null!==A&&(d.points[H].push(d.cumulative),e[E]=d.cumulative);"percent"===n&&(m.usePercentage=!0);this.stackedYData=e;m.oldStacks={};}};y.prototype.modifyStacks=function(){var a=this,b=a.stackKey,e=a.yAxis.stacks,t=a.processedXData,
    n,f=a.options.stacking;a[f+"Stacker"]&&g([b,"-"+b],function(b){for(var c=t.length,l,g;c--;)if(l=t[c],n=a.getStackIndicator(n,l,a.index,b),g=(l=e[b]&&e[b][l])&&l.points[n.key])a[f+"Stacker"](g,l,c);});};y.prototype.percentStacker=function(a,b,e){b=b.total?100/b.total:0;a[0]=G(a[0]*b);a[1]=G(a[1]*b);this.stackedYData[e]=a[1];};y.prototype.getStackIndicator=function(a,b,e,g){!p(a)||a.x!==b||g&&a.key!==g?a={x:b,index:0,key:g}:a.index++;a.key=[e,b,a.index].join();return a};})(L);(function(a){var B=a.addEvent,
    C=a.animate,G=a.Axis,p=a.createElement,m=a.css,g=a.defined,v=a.each,z=a.erase,u=a.extend,y=a.fireEvent,l=a.inArray,b=a.isNumber,e=a.isObject,t=a.isArray,n=a.merge,f=a.objectEach,c=a.pick,h=a.Point,w=a.Series,D=a.seriesTypes,r=a.setAnimation,J=a.splat;u(a.Chart.prototype,{addSeries:function(a,b,f){var e,d=this;a&&(b=c(b,!0),y(d,"addSeries",{options:a},function(){e=d.initSeries(a);d.isDirtyLegend=!0;d.linkSeries();y(d,"afterAddSeries");b&&d.redraw(f);}));return e},addAxis:function(a,b,f,e){var d=b?"xAxis":
    "yAxis",h=this.options;a=n(a,{index:this[d].length,isX:b});b=new G(this,a);h[d]=J(h[d]||{});h[d].push(a);c(f,!0)&&this.redraw(e);return b},showLoading:function(a){var b=this,c=b.options,f=b.loadingDiv,d=c.loading,e=function(){f&&m(f,{left:b.plotLeft+"px",top:b.plotTop+"px",width:b.plotWidth+"px",height:b.plotHeight+"px"});};f||(b.loadingDiv=f=p("div",{className:"highcharts-loading highcharts-loading-hidden"},null,b.container),b.loadingSpan=p("span",{className:"highcharts-loading-inner"},null,f),B(b,
    "redraw",e));f.className="highcharts-loading";b.loadingSpan.innerHTML=a||c.lang.loading;m(f,u(d.style,{zIndex:10}));m(b.loadingSpan,d.labelStyle);b.loadingShown||(m(f,{opacity:0,display:""}),C(f,{opacity:d.style.opacity||.5},{duration:d.showDuration||0}));b.loadingShown=!0;e();},hideLoading:function(){var a=this.options,b=this.loadingDiv;b&&(b.className="highcharts-loading highcharts-loading-hidden",C(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){m(b,{display:"none"});}}));
    this.loadingShown=!1;},propsRequireDirtyBox:"backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" "),update:function(a,e,h,r){var d=this,q={credits:"addCredits",
    title:"setTitle",subtitle:"setSubtitle"},x=a.chart,k,t,w=[];y(d,"update",{options:a});if(x){n(!0,d.options.chart,x);"className"in x&&d.setClassName(x.className);"reflow"in x&&d.setReflow(x.reflow);if("inverted"in x||"polar"in x)d.propFromSeries(),k=!0;"alignTicks"in x&&(k=!0);f(x,function(a,b){-1!==l("chart."+b,d.propsRequireUpdateSeries)&&(t=!0);-1!==l(b,d.propsRequireDirtyBox)&&(d.isDirtyBox=!0);});"style"in x&&d.renderer.setStyle(x.style);}a.colors&&(this.options.colors=a.colors);a.plotOptions&&
    n(!0,this.options.plotOptions,a.plotOptions);f(a,function(a,b){if(d[b]&&"function"===typeof d[b].update)d[b].update(a,!1);else if("function"===typeof d[q[b]])d[q[b]](a);"chart"!==b&&-1!==l(b,d.propsRequireUpdateSeries)&&(t=!0);});v("xAxis yAxis zAxis series colorAxis pane".split(" "),function(b){a[b]&&(v(J(a[b]),function(a,c){(c=g(a.id)&&d.get(a.id)||d[b][c])&&c.coll===b&&(c.update(a,!1),h&&(c.touched=!0));if(!c&&h)if("series"===b)d.addSeries(a,!1).touched=!0;else if("xAxis"===b||"yAxis"===b)d.addAxis(a,
    "xAxis"===b,!1).touched=!0;}),h&&v(d[b],function(a){a.touched?delete a.touched:w.push(a);}));});v(w,function(a){a.remove(!1);});k&&v(d.axes,function(a){a.update({},!1);});t&&v(d.series,function(a){a.update({},!1);});a.loading&&n(!0,d.options.loading,a.loading);k=x&&x.width;x=x&&x.height;b(k)&&k!==d.chartWidth||b(x)&&x!==d.chartHeight?d.setSize(k,x,r):c(e,!0)&&d.redraw(r);},setSubtitle:function(a){this.setTitle(void 0,a);}});u(h.prototype,{update:function(a,b,f,h){function d(){q.applyOptions(a);null===q.y&&
    k&&(q.graphic=k.destroy());e(a,!0)&&(k&&k.element&&a&&a.marker&&void 0!==a.marker.symbol&&(q.graphic=k.destroy()),a&&a.dataLabels&&q.dataLabel&&(q.dataLabel=q.dataLabel.destroy()),q.connector&&(q.connector=q.connector.destroy()));g=q.index;l.updateParallelArrays(q,g);n.data[g]=e(n.data[g],!0)||e(a,!0)?q.options:c(a,n.data[g]);l.isDirty=l.isDirtyData=!0;!l.fixedBox&&l.hasCartesianSeries&&(r.isDirtyBox=!0);"point"===n.legendType&&(r.isDirtyLegend=!0);b&&r.redraw(f);}var q=this,l=q.series,k=q.graphic,
    g,r=l.chart,n=l.options;b=c(b,!0);!1===h?d():q.firePointEvent("update",{options:a},d);},remove:function(a,b){this.series.removePoint(l(this,this.series.data),a,b);}});u(w.prototype,{addPoint:function(a,b,f,e){var d=this.options,h=this.data,q=this.chart,k=this.xAxis,k=k&&k.hasNames&&k.names,l=d.data,g,r,n=this.xData,x,t;b=c(b,!0);g={series:this};this.pointClass.prototype.applyOptions.apply(g,[a]);t=g.x;x=n.length;if(this.requireSorting&&t<n[x-1])for(r=!0;x&&n[x-1]>t;)x--;this.updateParallelArrays(g,
    "splice",x,0,0);this.updateParallelArrays(g,x);k&&g.name&&(k[t]=g.name);l.splice(x,0,a);r&&(this.data.splice(x,0,null),this.processData());"point"===d.legendType&&this.generatePoints();f&&(h[0]&&h[0].remove?h[0].remove(!1):(h.shift(),this.updateParallelArrays(g,"shift"),l.shift()));this.isDirtyData=this.isDirty=!0;b&&q.redraw(e);},removePoint:function(a,b,f){var e=this,d=e.data,h=d[a],q=e.points,k=e.chart,l=function(){q&&q.length===d.length&&q.splice(a,1);d.splice(a,1);e.options.data.splice(a,1);e.updateParallelArrays(h||
    {series:e},"splice",a,1);h&&h.destroy();e.isDirty=!0;e.isDirtyData=!0;b&&k.redraw();};r(f,k);b=c(b,!0);h?h.firePointEvent("remove",null,l):l();},remove:function(a,b,f){function e(){d.destroy();h.isDirtyLegend=h.isDirtyBox=!0;h.linkSeries();c(a,!0)&&h.redraw(b);}var d=this,h=d.chart;!1!==f?y(d,"remove",null,e):e();},update:function(b,f){var e=this,h=e.chart,d=e.userOptions,q=e.oldType||e.type,g=b.type||d.type||h.options.chart.type,k=D[q].prototype,r,t=["group","markerGroup","dataLabelsGroup"],w=["navigatorSeries",
    "baseSeries"],m=e.finishedAnimating&&{animation:!1},F=["data","name","turboThreshold"],J=a.keys(b),p=0<J.length;v(J,function(a){-1===l(a,F)&&(p=!1);});if(p)b.data&&this.setData(b.data,!1),b.name&&this.setName(b.name,!1);else{w=t.concat(w);v(w,function(a){w[a]=e[a];delete e[a];});b=n(d,m,{index:e.index,pointStart:c(d.pointStart,e.xData[0])},{data:e.options.data},b);e.remove(!1,null,!1);for(r in k)e[r]=void 0;D[g||q]?u(e,D[g||q].prototype):a.error(17,!0);v(w,function(a){e[a]=w[a];});e.init(h,b);b.zIndex!==
    d.zIndex&&v(t,function(a){e[a]&&e[a].attr({zIndex:b.zIndex});});e.oldType=q;h.linkSeries();}y(this,"afterUpdate");c(f,!0)&&h.redraw(!1);},setName:function(a){this.name=this.options.name=this.userOptions.name=a;this.chart.isDirtyLegend=!0;}});u(G.prototype,{update:function(a,b){var f=this.chart;a=n(this.userOptions,a);f.options[this.coll].indexOf&&(f.options[this.coll][f.options[this.coll].indexOf(this.userOptions)]=a);this.destroy(!0);this.init(f,u(a,{events:void 0}));f.isDirtyBox=!0;c(b,!0)&&f.redraw();},
    remove:function(a){for(var b=this.chart,f=this.coll,e=this.series,d=e.length;d--;)e[d]&&e[d].remove(!1);z(b.axes,this);z(b[f],this);t(b.options[f])?b.options[f].splice(this.options.index,1):delete b.options[f];v(b[f],function(a,b){a.options.index=a.userOptions.index=b;});this.destroy();b.isDirtyBox=!0;c(a,!0)&&b.redraw();},setTitle:function(a,b){this.update({title:a},b);},setCategories:function(a,b){this.update({categories:a},b);}});})(L);(function(a){var B=a.color,C=a.each,G=a.map,p=a.pick,m=a.Series,
    g=a.seriesType;g("area","line",{softThreshold:!1,threshold:0},{singleStacks:!1,getStackPoints:function(g){var m=[],u=[],v=this.xAxis,l=this.yAxis,b=l.stacks[this.stackKey],e={},t=this.index,n=l.series,f=n.length,c,h=p(l.options.reversedStacks,!0)?1:-1,w;g=g||this.points;if(this.options.stacking){for(w=0;w<g.length;w++)g[w].leftNull=g[w].rightNull=null,e[g[w].x]=g[w];a.objectEach(b,function(a,b){null!==a.total&&u.push(b);});u.sort(function(a,b){return a-b});c=G(n,function(){return this.visible});C(u,
    function(a,g){var r=0,q,n;if(e[a]&&!e[a].isNull)m.push(e[a]),C([-1,1],function(l){var r=1===l?"rightNull":"leftNull",d=0,x=b[u[g+l]];if(x)for(w=t;0<=w&&w<f;)q=x.points[w],q||(w===t?e[a][r]=!0:c[w]&&(n=b[a].points[w])&&(d-=n[1]-n[0])),w+=h;e[a][1===l?"rightCliff":"leftCliff"]=d;});else{for(w=t;0<=w&&w<f;){if(q=b[a].points[w]){r=q[1];break}w+=h;}r=l.translate(r,0,1,0,1);m.push({isNull:!0,plotX:v.translate(a,0,0,0,1),x:a,plotY:r,yBottom:r});}});}return m},getGraphPath:function(a){var g=m.prototype.getGraphPath,
    u=this.options,v=u.stacking,l=this.yAxis,b,e,t=[],n=[],f=this.index,c,h=l.stacks[this.stackKey],w=u.threshold,D=l.getThreshold(u.threshold),r,u=u.connectNulls||"percent"===v,J=function(b,e,g){var q=a[b];b=v&&h[q.x].points[f];var d=q[g+"Null"]||0;g=q[g+"Cliff"]||0;var r,x,q=!0;g||d?(r=(d?b[0]:b[1])+g,x=b[0]+g,q=!!d):!v&&a[e]&&a[e].isNull&&(r=x=w);void 0!==r&&(n.push({plotX:c,plotY:null===r?D:l.getThreshold(r),isNull:q,isCliff:!0}),t.push({plotX:c,plotY:null===x?D:l.getThreshold(x),doCurve:!1}));};a=
    a||this.points;v&&(a=this.getStackPoints(a));for(b=0;b<a.length;b++)if(e=a[b].isNull,c=p(a[b].rectPlotX,a[b].plotX),r=p(a[b].yBottom,D),!e||u)u||J(b,b-1,"left"),e&&!v&&u||(n.push(a[b]),t.push({x:b,plotX:c,plotY:r})),u||J(b,b+1,"right");b=g.call(this,n,!0,!0);t.reversed=!0;e=g.call(this,t,!0,!0);e.length&&(e[0]="L");e=b.concat(e);g=g.call(this,n,!1,u);e.xMap=b.xMap;this.areaPath=e;return g},drawGraph:function(){this.areaPath=[];m.prototype.drawGraph.apply(this);var a=this,g=this.areaPath,u=this.options,
    y=[["area","highcharts-area",this.color,u.fillColor]];C(this.zones,function(g,b){y.push(["zone-area-"+b,"highcharts-area highcharts-zone-area-"+b+" "+g.className,g.color||a.color,g.fillColor||u.fillColor]);});C(y,function(l){var b=l[0],e=a[b];e?(e.endX=a.preventGraphAnimation?null:g.xMap,e.animate({d:g})):(e=a[b]=a.chart.renderer.path(g).addClass(l[1]).attr({fill:p(l[3],B(l[2]).setOpacity(p(u.fillOpacity,.75)).get()),zIndex:0}).add(a.group),e.isArea=!0);e.startX=g.xMap;e.shiftUnit=u.step?2:1;});},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle});})(L);
    (function(a){var B=a.pick;a=a.seriesType;a("spline","line",{},{getPointSpline:function(a,G,p){var m=G.plotX,g=G.plotY,v=a[p-1];p=a[p+1];var z,u,y,l;if(v&&!v.isNull&&!1!==v.doCurve&&!G.isCliff&&p&&!p.isNull&&!1!==p.doCurve&&!G.isCliff){a=v.plotY;y=p.plotX;p=p.plotY;var b=0;z=(1.5*m+v.plotX)/2.5;u=(1.5*g+a)/2.5;y=(1.5*m+y)/2.5;l=(1.5*g+p)/2.5;y!==z&&(b=(l-u)*(y-m)/(y-z)+g-l);u+=b;l+=b;u>a&&u>g?(u=Math.max(a,g),l=2*g-u):u<a&&u<g&&(u=Math.min(a,g),l=2*g-u);l>p&&l>g?(l=Math.max(p,g),u=2*g-l):l<p&&l<g&&
    (l=Math.min(p,g),u=2*g-l);G.rightContX=y;G.rightContY=l;}G=["C",B(v.rightContX,v.plotX),B(v.rightContY,v.plotY),B(z,m),B(u,g),m,g];v.rightContX=v.rightContY=null;return G}});})(L);(function(a){var B=a.seriesTypes.area.prototype,C=a.seriesType;C("areaspline","spline",a.defaultPlotOptions.area,{getStackPoints:B.getStackPoints,getGraphPath:B.getGraphPath,drawGraph:B.drawGraph,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle});})(L);(function(a){var B=a.animObject,C=a.color,G=a.each,p=a.extend,m=a.isNumber,
    g=a.merge,v=a.pick,z=a.Series,u=a.seriesType,y=a.svg;u("column","line",{borderRadius:0,crisp:!0,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,brightness:.1},select:{color:"#cccccc",borderColor:"#000000"}},dataLabels:{align:null,verticalAlign:null,y:null},softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,borderColor:"#ffffff"},{cropShoulder:0,directTouch:!0,trackerGroups:["group","dataLabelsGroup"],
    negStacks:!0,init:function(){z.prototype.init.apply(this,arguments);var a=this,b=a.chart;b.hasRendered&&G(b.series,function(b){b.type===a.type&&(b.isDirty=!0);});},getColumnMetrics:function(){var a=this,b=a.options,e=a.xAxis,g=a.yAxis,n=e.reversed,f,c={},h=0;!1===b.grouping?h=1:G(a.chart.series,function(b){var e=b.options,l=b.yAxis,r;b.type!==a.type||!b.visible&&a.chart.options.chart.ignoreHiddenSeries||g.len!==l.len||g.pos!==l.pos||(e.stacking?(f=b.stackKey,void 0===c[f]&&(c[f]=h++),r=c[f]):!1!==e.grouping&&
    (r=h++),b.columnIndex=r);});var w=Math.min(Math.abs(e.transA)*(e.ordinalSlope||b.pointRange||e.closestPointRange||e.tickInterval||1),e.len),m=w*b.groupPadding,r=(w-2*m)/(h||1),b=Math.min(b.maxPointWidth||e.len,v(b.pointWidth,r*(1-2*b.pointPadding)));a.columnMetrics={width:b,offset:(r-b)/2+(m+((a.columnIndex||0)+(n?1:0))*r-w/2)*(n?-1:1)};return a.columnMetrics},crispCol:function(a,b,e,g){var l=this.chart,f=this.borderWidth,c=-(f%2?.5:0),f=f%2?.5:1;l.inverted&&l.renderer.isVML&&(f+=1);this.options.crisp&&
    (e=Math.round(a+e)+c,a=Math.round(a)+c,e-=a);g=Math.round(b+g)+f;c=.5>=Math.abs(b)&&.5<g;b=Math.round(b)+f;g-=b;c&&g&&(--b,g+=1);return {x:a,y:b,width:e,height:g}},translate:function(){var a=this,b=a.chart,e=a.options,g=a.dense=2>a.closestPointRange*a.xAxis.transA,g=a.borderWidth=v(e.borderWidth,g?0:1),n=a.yAxis,f=e.threshold,c=a.translatedThreshold=n.getThreshold(f),h=v(e.minPointLength,5),w=a.getColumnMetrics(),m=w.width,r=a.barW=Math.max(m,1+2*g),J=a.pointXOffset=w.offset;b.inverted&&(c-=.5);e.pointPadding&&
    (r=Math.ceil(r));z.prototype.translate.apply(a);G(a.points,function(e){var g=v(e.yBottom,c),q=999+Math.abs(g),q=Math.min(Math.max(-q,e.plotY),n.len+q),l=e.plotX+J,d=r,t=Math.min(q,g),w,k=Math.max(q,g)-t;h&&Math.abs(k)<h&&(k=h,w=!n.reversed&&!e.negative||n.reversed&&e.negative,e.y===f&&a.dataMax<=f&&n.min<f&&(w=!w),t=Math.abs(t-c)>h?g-h:c-(w?h:0));e.barX=l;e.pointWidth=m;e.tooltipPos=b.inverted?[n.len+n.pos-b.plotLeft-q,a.xAxis.len-l-d/2,k]:[l+d/2,q+n.pos-b.plotTop,k];e.shapeType="rect";e.shapeArgs=
    a.crispCol.apply(a,e.isNull?[l,c,d,0]:[l,t,d,k]);});},getSymbol:a.noop,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,drawGraph:function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data");},pointAttribs:function(a,b){var e=this.options,l,n=this.pointAttrToOptions||{};l=n.stroke||"borderColor";var f=n["stroke-width"]||"borderWidth",c=a&&a.color||this.color,h=a&&a[l]||e[l]||this.color||c,w=a&&a[f]||e[f]||this[f]||0,n=e.dashStyle;a&&this.zones.length&&(c=a.getZone(),c=a.options.color||
    c&&c.color||this.color);b&&(a=g(e.states[b],a.options.states&&a.options.states[b]||{}),b=a.brightness,c=a.color||void 0!==b&&C(c).brighten(a.brightness).get()||c,h=a[l]||h,w=a[f]||w,n=a.dashStyle||n);l={fill:c,stroke:h,"stroke-width":w};n&&(l.dashstyle=n);return l},drawPoints:function(){var a=this,b=this.chart,e=a.options,t=b.renderer,n=e.animationLimit||250,f;G(a.points,function(c){var h=c.graphic,l=h&&b.pointCount<n?"animate":"attr";if(m(c.plotY)&&null!==c.y){f=c.shapeArgs;if(h)h[l](g(f));else c.graphic=
    h=t[c.shapeType](f).add(c.group||a.group);e.borderRadius&&h.attr({r:e.borderRadius});h[l](a.pointAttribs(c,c.selected&&"select")).shadow(e.shadow,null,e.stacking&&!e.borderRadius);h.addClass(c.getClassName(),!0);}else h&&(c.graphic=h.destroy());});},animate:function(a){var b=this,e=this.yAxis,g=b.options,l=this.chart.inverted,f={},c=l?"translateX":"translateY",h;y&&(a?(f.scaleY=.001,a=Math.min(e.pos+e.len,Math.max(e.pos,e.toPixels(g.threshold))),l?f.translateX=a-e.len:f.translateY=a,b.group.attr(f)):
    (h=b.group.attr(c),b.group.animate({scaleY:1},p(B(b.options.animation),{step:function(a,g){f[c]=h+g.pos*(e.pos-h);b.group.attr(f);}})),b.animate=null));},remove:function(){var a=this,b=a.chart;b.hasRendered&&G(b.series,function(b){b.type===a.type&&(b.isDirty=!0);});z.prototype.remove.apply(a,arguments);}});})(L);(function(a){a=a.seriesType;a("bar","column",null,{inverted:!0});})(L);(function(a){var B=a.Series;a=a.seriesType;a("scatter","line",{lineWidth:0,findNearestPointBy:"xy",marker:{enabled:!0},tooltip:{headerFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cspan style\x3d"font-size: 0.85em"\x3e {series.name}\x3c/span\x3e\x3cbr/\x3e',
    pointFormat:"x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e"}},{sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,drawGraph:function(){this.options.lineWidth&&B.prototype.drawGraph.call(this);}});})(L);(function(a){var B=a.deg2rad,C=a.isNumber,G=a.pick,p=a.relativeLength;a.CenteredSeriesMixin={getCenter:function(){var a=this.options,g=this.chart,v=2*(a.slicedOffset||0),z=g.plotWidth-2*v,
    g=g.plotHeight-2*v,u=a.center,u=[G(u[0],"50%"),G(u[1],"50%"),a.size||"100%",a.innerSize||0],y=Math.min(z,g),l,b;for(l=0;4>l;++l)b=u[l],a=2>l||2===l&&/%$/.test(b),u[l]=p(b,[z,g,y,u[2]][l])+(a?v:0);u[3]>u[2]&&(u[3]=u[2]);return u},getStartAndEndRadians:function(a,g){a=C(a)?a:0;g=C(g)&&g>a&&360>g-a?g:a+360;return {start:B*(a+-90),end:B*(g+-90)}}};})(L);(function(a){var B=a.addEvent,C=a.CenteredSeriesMixin,G=a.defined,p=a.each,m=a.extend,g=C.getStartAndEndRadians,v=a.inArray,z=a.noop,u=a.pick,y=a.Point,
    l=a.Series,b=a.seriesType,e=a.setAnimation;b("pie","line",{center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{distance:30,enabled:!0,formatter:function(){return this.point.isNull?void 0:this.point.name},x:0},ignoreHiddenPoint:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},borderColor:"#ffffff",borderWidth:1,states:{hover:{brightness:.1}}},{isCartesian:!1,requireSorting:!1,directTouch:!0,noSharedTooltip:!0,trackerGroups:["group",
    "dataLabelsGroup"],axisTypes:[],pointAttribs:a.seriesTypes.column.prototype.pointAttribs,animate:function(a){var b=this,f=b.points,c=b.startAngleRad;a||(p(f,function(a){var f=a.graphic,e=a.shapeArgs;f&&(f.attr({r:a.startR||b.center[3]/2,start:c,end:c}),f.animate({r:e.r,start:e.start,end:e.end},b.options.animation));}),b.animate=null);},updateTotals:function(){var a,b=0,f=this.points,c=f.length,e,g=this.options.ignoreHiddenPoint;for(a=0;a<c;a++)e=f[a],b+=g&&!e.visible?0:e.isNull?0:e.y;this.total=b;for(a=
    0;a<c;a++)e=f[a],e.percentage=0<b&&(e.visible||!g)?e.y/b*100:0,e.total=b;},generatePoints:function(){l.prototype.generatePoints.call(this);this.updateTotals();},translate:function(a){this.generatePoints();var b=0,f=this.options,c=f.slicedOffset,e=c+(f.borderWidth||0),l,m,r,t=g(f.startAngle,f.endAngle),q=this.startAngleRad=t.start,t=(this.endAngleRad=t.end)-q,F=this.points,x,p=f.dataLabels.distance,f=f.ignoreHiddenPoint,d,H=F.length,E;a||(this.center=a=this.getCenter());this.getX=function(b,d,c){r=Math.asin(Math.min((b-
    a[1])/(a[2]/2+c.labelDistance),1));return a[0]+(d?-1:1)*Math.cos(r)*(a[2]/2+c.labelDistance)};for(d=0;d<H;d++){E=F[d];E.labelDistance=u(E.options.dataLabels&&E.options.dataLabels.distance,p);this.maxLabelDistance=Math.max(this.maxLabelDistance||0,E.labelDistance);l=q+b*t;if(!f||E.visible)b+=E.percentage/100;m=q+b*t;E.shapeType="arc";E.shapeArgs={x:a[0],y:a[1],r:a[2]/2,innerR:a[3]/2,start:Math.round(1E3*l)/1E3,end:Math.round(1E3*m)/1E3};r=(m+l)/2;r>1.5*Math.PI?r-=2*Math.PI:r<-Math.PI/2&&(r+=2*Math.PI);
    E.slicedTranslation={translateX:Math.round(Math.cos(r)*c),translateY:Math.round(Math.sin(r)*c)};m=Math.cos(r)*a[2]/2;x=Math.sin(r)*a[2]/2;E.tooltipPos=[a[0]+.7*m,a[1]+.7*x];E.half=r<-Math.PI/2||r>Math.PI/2?1:0;E.angle=r;l=Math.min(e,E.labelDistance/5);E.labelPos=[a[0]+m+Math.cos(r)*E.labelDistance,a[1]+x+Math.sin(r)*E.labelDistance,a[0]+m+Math.cos(r)*l,a[1]+x+Math.sin(r)*l,a[0]+m,a[1]+x,0>E.labelDistance?"center":E.half?"right":"left",r];}},drawGraph:null,drawPoints:function(){var a=this,b=a.chart.renderer,
    f,c,e,g,l=a.options.shadow;l&&!a.shadowGroup&&(a.shadowGroup=b.g("shadow").add(a.group));p(a.points,function(h){c=h.graphic;if(h.isNull)c&&(h.graphic=c.destroy());else{g=h.shapeArgs;f=h.getTranslate();var r=h.shadowGroup;l&&!r&&(r=h.shadowGroup=b.g("shadow").add(a.shadowGroup));r&&r.attr(f);e=a.pointAttribs(h,h.selected&&"select");c?c.setRadialReference(a.center).attr(e).animate(m(g,f)):(h.graphic=c=b[h.shapeType](g).setRadialReference(a.center).attr(f).add(a.group),h.visible||c.attr({visibility:"hidden"}),
    c.attr(e).attr({"stroke-linejoin":"round"}).shadow(l,r));c.addClass(h.getClassName());}});},searchPoint:z,sortByAngle:function(a,b){a.sort(function(a,c){return void 0!==a.angle&&(c.angle-a.angle)*b});},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,getCenter:C.getCenter,getSymbol:z},{init:function(){y.prototype.init.apply(this,arguments);var a=this,b;a.name=u(a.name,"Slice");b=function(b){a.slice("select"===b.type);};B(a,"select",b);B(a,"unselect",b);return a},isValid:function(){return a.isNumber(this.y,
    !0)&&0<=this.y},setVisible:function(a,b){var f=this,c=f.series,e=c.chart,g=c.options.ignoreHiddenPoint;b=u(b,g);a!==f.visible&&(f.visible=f.options.visible=a=void 0===a?!f.visible:a,c.options.data[v(f,c.data)]=f.options,p(["graphic","dataLabel","connector","shadowGroup"],function(b){if(f[b])f[b][a?"show":"hide"](!0);}),f.legendItem&&e.legend.colorizeItem(f,a),a||"hover"!==f.state||f.setState(""),g&&(c.isDirty=!0),b&&e.redraw());},slice:function(a,b,f){var c=this.series;e(f,c.chart);u(b,!0);this.sliced=
    this.options.sliced=G(a)?a:!this.sliced;c.options.data[v(this,c.data)]=this.options;this.graphic.animate(this.getTranslate());this.shadowGroup&&this.shadowGroup.animate(this.getTranslate());},getTranslate:function(){return this.sliced?this.slicedTranslation:{translateX:0,translateY:0}},haloPath:function(a){var b=this.shapeArgs;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(b.x,b.y,b.r+a,b.r+a,{innerR:this.shapeArgs.r-1,start:b.start,end:b.end})}});})(L);(function(a){var B=
    a.addEvent,C=a.arrayMax,G=a.defined,p=a.each,m=a.extend,g=a.format,v=a.map,z=a.merge,u=a.noop,y=a.pick,l=a.relativeLength,b=a.Series,e=a.seriesTypes,t=a.some,n=a.stableSort;a.distribute=function(b,c,e){function f(a,b){return a.target-b.target}var h,g=!0,l=b,q=[],m;m=0;var x=l.reducedLen||c;for(h=b.length;h--;)m+=b[h].size;if(m>x){n(b,function(a,b){return (b.rank||0)-(a.rank||0)});for(m=h=0;m<=x;)m+=b[h].size,h++;q=b.splice(h-1,b.length);}n(b,f);for(b=v(b,function(a){return {size:a.size,targets:[a.target],
    align:y(a.align,.5)}});g;){for(h=b.length;h--;)g=b[h],m=(Math.min.apply(0,g.targets)+Math.max.apply(0,g.targets))/2,g.pos=Math.min(Math.max(0,m-g.size*g.align),c-g.size);h=b.length;for(g=!1;h--;)0<h&&b[h-1].pos+b[h-1].size>b[h].pos&&(b[h-1].size+=b[h].size,b[h-1].targets=b[h-1].targets.concat(b[h].targets),b[h-1].align=.5,b[h-1].pos+b[h-1].size>c&&(b[h-1].pos=c-b[h-1].size),b.splice(h,1),g=!0);}l.push.apply(l,q);h=0;t(b,function(b){var d=0;if(t(b.targets,function(){l[h].pos=b.pos+d;if(Math.abs(l[h].pos-
    l[h].target)>e)return p(l.slice(0,h+1),function(a){delete a.pos;}),l.reducedLen=(l.reducedLen||c)-.1*c,l.reducedLen>.1*c&&a.distribute(l,c,e),!0;d+=l[h].size;h++;}))return !0});n(l,f);};b.prototype.drawDataLabels=function(){function b(a,b){var d=b.filter;return d?(b=d.operator,a=a[d.property],d=d.value,"\x3e"===b&&a>d||"\x3c"===b&&a<d||"\x3e\x3d"===b&&a>=d||"\x3c\x3d"===b&&a<=d||"\x3d\x3d"===b&&a==d||"\x3d\x3d\x3d"===b&&a===d?!0:!1):!0}var c=this,e=c.chart,l=c.options,n=l.dataLabels,r=c.points,m,q,t=
    c.hasRendered||0,x,u,d=y(n.defer,!!l.animation),H=e.renderer;if(n.enabled||c._hasPointLabels)c.dlProcessOptions&&c.dlProcessOptions(n),u=c.plotGroup("dataLabelsGroup","data-labels",d&&!t?"hidden":"visible",n.zIndex||6),d&&(u.attr({opacity:+t}),t||B(c,"afterAnimate",function(){c.visible&&u.show(!0);u[l.animation?"animate":"attr"]({opacity:1},{duration:200});})),q=n,p(r,function(d){var f,h=d.dataLabel,r,w,t=d.connector,F=!h,E;m=d.dlOptions||d.options&&d.options.dataLabels;(f=y(m&&m.enabled,q.enabled)&&
    !d.isNull)&&(f=!0===b(d,m||n));f&&(n=z(q,m),r=d.getLabelConfig(),E=n[d.formatPrefix+"Format"]||n.format,x=G(E)?g(E,r,e.time):(n[d.formatPrefix+"Formatter"]||n.formatter).call(r,n),E=n.style,r=n.rotation,E.color=y(n.color,E.color,c.color,"#000000"),"contrast"===E.color&&(d.contrastColor=H.getContrast(d.color||c.color),E.color=n.inside||0>y(d.labelDistance,n.distance)||l.stacking?d.contrastColor:"#000000"),l.cursor&&(E.cursor=l.cursor),w={fill:n.backgroundColor,stroke:n.borderColor,"stroke-width":n.borderWidth,
    r:n.borderRadius||0,rotation:r,padding:n.padding,zIndex:1},a.objectEach(w,function(a,b){void 0===a&&delete w[b];}));!h||f&&G(x)?f&&G(x)&&(h?w.text=x:(h=d.dataLabel=r?H.text(x,0,-9999).addClass("highcharts-data-label"):H.label(x,0,-9999,n.shape,null,null,n.useHTML,null,"data-label"),h.addClass(" highcharts-data-label-color-"+d.colorIndex+" "+(n.className||"")+(n.useHTML?"highcharts-tracker":""))),h.attr(w),h.css(E).shadow(n.shadow),h.added||h.add(u),c.alignDataLabel(d,h,n,null,F)):(d.dataLabel=h=h.destroy(),
    t&&(d.connector=t.destroy()));});a.fireEvent(this,"afterDrawDataLabels");};b.prototype.alignDataLabel=function(a,b,e,g,l){var c=this.chart,f=c.inverted,h=y(a.dlBox&&a.dlBox.centerX,a.plotX,-9999),n=y(a.plotY,-9999),x=b.getBBox(),w,d=e.rotation,t=e.align,E=this.visible&&(a.series.forceDL||c.isInsidePlot(h,Math.round(n),f)||g&&c.isInsidePlot(h,f?g.x+1:g.y+g.height-1,f)),k="justify"===y(e.overflow,"justify");if(E&&(w=e.style.fontSize,w=c.renderer.fontMetrics(w,b).b,g=m({x:f?this.yAxis.len-n:h,y:Math.round(f?
    this.xAxis.len-h:n),width:0,height:0},g),m(e,{width:x.width,height:x.height}),d?(k=!1,h=c.renderer.rotCorr(w,d),h={x:g.x+e.x+g.width/2+h.x,y:g.y+e.y+{top:0,middle:.5,bottom:1}[e.verticalAlign]*g.height},b[l?"attr":"animate"](h).attr({align:t}),n=(d+720)%360,n=180<n&&360>n,"left"===t?h.y-=n?x.height:0:"center"===t?(h.x-=x.width/2,h.y-=x.height/2):"right"===t&&(h.x-=x.width,h.y-=n?0:x.height),b.placed=!0,b.alignAttr=h):(b.align(e,null,g),h=b.alignAttr),k?a.isLabelJustified=this.justifyDataLabel(b,e,
    h,x,g,l):y(e.crop,!0)&&(E=c.isInsidePlot(h.x,h.y)&&c.isInsidePlot(h.x+x.width,h.y+x.height)),e.shape&&!d))b[l?"attr":"animate"]({anchorX:f?c.plotWidth-a.plotY:a.plotX,anchorY:f?c.plotHeight-a.plotX:a.plotY});E||(b.attr({y:-9999}),b.placed=!1);};b.prototype.justifyDataLabel=function(a,b,e,g,l,r){var c=this.chart,f=b.align,h=b.verticalAlign,n,m,d=a.box?0:a.padding||0;n=e.x+d;0>n&&("right"===f?b.align="left":b.x=-n,m=!0);n=e.x+g.width-d;n>c.plotWidth&&("left"===f?b.align="right":b.x=c.plotWidth-n,m=!0);
    n=e.y+d;0>n&&("bottom"===h?b.verticalAlign="top":b.y=-n,m=!0);n=e.y+g.height-d;n>c.plotHeight&&("top"===h?b.verticalAlign="bottom":b.y=c.plotHeight-n,m=!0);m&&(a.placed=!r,a.align(b,null,l));return m};e.pie&&(e.pie.prototype.drawDataLabels=function(){var f=this,c=f.data,e,g=f.chart,l=f.options.dataLabels,r=y(l.connectorPadding,10),n=y(l.connectorWidth,1),q=g.plotWidth,m=g.plotHeight,x=Math.round(g.chartWidth/3),t,d=f.center,H=d[2]/2,E=d[1],k,A,u,v,z=[[],[]],B,N,M,S,O=[0,0,0,0];f.visible&&(l.enabled||
    f._hasPointLabels)&&(p(c,function(a){a.dataLabel&&a.visible&&a.dataLabel.shortened&&(a.dataLabel.attr({width:"auto"}).css({width:"auto",textOverflow:"clip"}),a.dataLabel.shortened=!1);}),b.prototype.drawDataLabels.apply(f),p(c,function(a){a.dataLabel&&a.visible&&(z[a.half].push(a),a.dataLabel._pos=null,!G(l.style.width)&&!G(a.options.dataLabels&&a.options.dataLabels.style&&a.options.dataLabels.style.width)&&a.dataLabel.getBBox().width>x&&(a.dataLabel.css({width:.7*x}),a.dataLabel.shortened=!0));}),
    p(z,function(b,c){var h,n,x=b.length,t=[],w;if(x)for(f.sortByAngle(b,c-.5),0<f.maxLabelDistance&&(h=Math.max(0,E-H-f.maxLabelDistance),n=Math.min(E+H+f.maxLabelDistance,g.plotHeight),p(b,function(a){0<a.labelDistance&&a.dataLabel&&(a.top=Math.max(0,E-H-a.labelDistance),a.bottom=Math.min(E+H+a.labelDistance,g.plotHeight),w=a.dataLabel.getBBox().height||21,a.positionsIndex=t.push({target:a.labelPos[1]-a.top+w/2,size:w,rank:a.y})-1);}),h=n+w-h,a.distribute(t,h,h/5)),S=0;S<x;S++)e=b[S],n=e.positionsIndex,
    u=e.labelPos,k=e.dataLabel,M=!1===e.visible?"hidden":"inherit",N=h=u[1],t&&G(t[n])&&(void 0===t[n].pos?M="hidden":(v=t[n].size,N=e.top+t[n].pos)),delete e.positionIndex,B=l.justify?d[0]+(c?-1:1)*(H+e.labelDistance):f.getX(N<e.top+2||N>e.bottom-2?h:N,c,e),k._attr={visibility:M,align:u[6]},k._pos={x:B+l.x+({left:r,right:-r}[u[6]]||0),y:N+l.y-10},u.x=B,u.y=N,y(l.crop,!0)&&(A=k.getBBox().width,h=null,B-A<r&&1===c?(h=Math.round(A-B+r),O[3]=Math.max(h,O[3])):B+A>q-r&&0===c&&(h=Math.round(B+A-q+r),O[1]=
    Math.max(h,O[1])),0>N-v/2?O[0]=Math.max(Math.round(-N+v/2),O[0]):N+v/2>m&&(O[2]=Math.max(Math.round(N+v/2-m),O[2])),k.sideOverflow=h);}),0===C(O)||this.verifyDataLabelOverflow(O))&&(this.placeDataLabels(),n&&p(this.points,function(a){var b;t=a.connector;if((k=a.dataLabel)&&k._pos&&a.visible&&0<a.labelDistance){M=k._attr.visibility;if(b=!t)a.connector=t=g.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-"+a.colorIndex+(a.className?" "+a.className:"")).add(f.dataLabelsGroup),
    t.attr({"stroke-width":n,stroke:l.connectorColor||a.color||"#666666"});t[b?"attr":"animate"]({d:f.connectorPath(a.labelPos)});t.attr("visibility",M);}else t&&(a.connector=t.destroy());}));},e.pie.prototype.connectorPath=function(a){var b=a.x,f=a.y;return y(this.options.dataLabels.softConnector,!0)?["M",b+("left"===a[6]?5:-5),f,"C",b,f,2*a[2]-a[4],2*a[3]-a[5],a[2],a[3],"L",a[4],a[5]]:["M",b+("left"===a[6]?5:-5),f,"L",a[2],a[3],"L",a[4],a[5]]},e.pie.prototype.placeDataLabels=function(){p(this.points,function(a){var b=
    a.dataLabel;b&&a.visible&&((a=b._pos)?(b.sideOverflow&&(b._attr.width=b.getBBox().width-b.sideOverflow,b.css({width:b._attr.width+"px",textOverflow:this.options.dataLabels.style.textOverflow||"ellipsis"}),b.shortened=!0),b.attr(b._attr),b[b.moved?"animate":"attr"](a),b.moved=!0):b&&b.attr({y:-9999}));},this);},e.pie.prototype.alignDataLabel=u,e.pie.prototype.verifyDataLabelOverflow=function(a){var b=this.center,e=this.options,f=e.center,g=e.minSize||80,r,n=null!==e.size;n||(null!==f[0]?r=Math.max(b[2]-
    Math.max(a[1],a[3]),g):(r=Math.max(b[2]-a[1]-a[3],g),b[0]+=(a[3]-a[1])/2),null!==f[1]?r=Math.max(Math.min(r,b[2]-Math.max(a[0],a[2])),g):(r=Math.max(Math.min(r,b[2]-a[0]-a[2]),g),b[1]+=(a[0]-a[2])/2),r<b[2]?(b[2]=r,b[3]=Math.min(l(e.innerSize||0,r),r),this.translate(b),this.drawDataLabels&&this.drawDataLabels()):n=!0);return n});e.column&&(e.column.prototype.alignDataLabel=function(a,c,e,g,l){var f=this.chart.inverted,h=a.series,q=a.dlBox||a.shapeArgs,n=y(a.below,a.plotY>y(this.translatedThreshold,
    h.yAxis.len)),m=y(e.inside,!!this.options.stacking);q&&(g=z(q),0>g.y&&(g.height+=g.y,g.y=0),q=g.y+g.height-h.yAxis.len,0<q&&(g.height-=q),f&&(g={x:h.yAxis.len-g.y-g.height,y:h.xAxis.len-g.x-g.width,width:g.height,height:g.width}),m||(f?(g.x+=n?0:g.width,g.width=0):(g.y+=n?g.height:0,g.height=0)));e.align=y(e.align,!f||m?"center":n?"right":"left");e.verticalAlign=y(e.verticalAlign,f||m?"middle":n?"top":"bottom");b.prototype.alignDataLabel.call(this,a,c,e,g,l);a.isLabelJustified&&a.contrastColor&&a.dataLabel.css({color:a.contrastColor});});})(L);
    (function(a){var B=a.Chart,C=a.each,G=a.objectEach,p=a.pick;a=a.addEvent;a(B,"render",function(){var a=[];C(this.labelCollectors||[],function(g){a=a.concat(g());});C(this.yAxis||[],function(g){g.options.stackLabels&&!g.options.stackLabels.allowOverlap&&G(g.stacks,function(g){G(g,function(g){a.push(g.label);});});});C(this.series||[],function(g){var m=g.options.dataLabels,z=g.dataLabelCollections||["dataLabel"];(m.enabled||g._hasPointLabels)&&!m.allowOverlap&&g.visible&&C(z,function(m){C(g.points,function(g){g[m]&&
    (g[m].labelrank=p(g.labelrank,g.shapeArgs&&g.shapeArgs.height),a.push(g[m]));});});});this.hideOverlappingLabels(a);});B.prototype.hideOverlappingLabels=function(a){var g=a.length,m,p,u,y,l,b,e,t,n,f=function(a,b,e,f,g,l,q,n){return !(g>a+e||g+q<a||l>b+f||l+n<b)};for(p=0;p<g;p++)if(m=a[p])m.oldOpacity=m.opacity,m.newOpacity=1,m.width||(u=m.getBBox(),m.width=u.width,m.height=u.height);a.sort(function(a,b){return (b.labelrank||0)-(a.labelrank||0)});for(p=0;p<g;p++)for(u=a[p],m=p+1;m<g;++m)if(y=a[m],u&&y&&
    u!==y&&u.placed&&y.placed&&0!==u.newOpacity&&0!==y.newOpacity&&(l=u.alignAttr,b=y.alignAttr,e=u.parentGroup,t=y.parentGroup,n=2*(u.box?0:u.padding||0),l=f(l.x+e.translateX,l.y+e.translateY,u.width-n,u.height-n,b.x+t.translateX,b.y+t.translateY,y.width-n,y.height-n)))(u.labelrank<y.labelrank?u:y).newOpacity=0;C(a,function(a){var b,c;a&&(c=a.newOpacity,a.oldOpacity!==c&&a.placed&&(c?a.show(!0):b=function(){a.hide();},a.alignAttr.opacity=c,a[a.isOld?"animate":"attr"](a.alignAttr,null,b)),a.isOld=!0);});};})(L);
    (function(a){var B=a.addEvent,C=a.Chart,G=a.createElement,p=a.css,m=a.defaultOptions,g=a.defaultPlotOptions,v=a.each,z=a.extend,u=a.fireEvent,y=a.hasTouch,l=a.inArray,b=a.isObject,e=a.Legend,t=a.merge,n=a.pick,f=a.Point,c=a.Series,h=a.seriesTypes,w=a.svg,D;D=a.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart.pointer,c=function(a){var c=b.getPointFromEvent(a);void 0!==c&&(b.isDirectTouch=!0,c.onMouseOver(a));};v(a.points,function(a){a.graphic&&(a.graphic.element.point=a);a.dataLabel&&
    (a.dataLabel.div?a.dataLabel.div.point=a:a.dataLabel.element.point=a);});a._hasTracking||(v(a.trackerGroups,function(e){if(a[e]){a[e].addClass("highcharts-tracker").on("mouseover",c).on("mouseout",function(a){b.onTrackerMouseOut(a);});if(y)a[e].on("touchstart",c);a.options.cursor&&a[e].css(p).css({cursor:a.options.cursor});}}),a._hasTracking=!0);u(this,"afterDrawTracker");},drawTrackerGraph:function(){var a=this,b=a.options,c=b.trackByArea,e=[].concat(c?a.areaPath:a.graphPath),f=e.length,h=a.chart,d=
    h.pointer,g=h.renderer,l=h.options.tooltip.snap,k=a.tracker,n,m=function(){if(h.hoverSeries!==a)a.onMouseOver();},t="rgba(192,192,192,"+(w?.0001:.002)+")";if(f&&!c)for(n=f+1;n--;)"M"===e[n]&&e.splice(n+1,0,e[n+1]-l,e[n+2],"L"),(n&&"M"===e[n]||n===f)&&e.splice(n,0,"L",e[n-2]+l,e[n-1]);k?k.attr({d:e}):a.graph&&(a.tracker=g.path(e).attr({"stroke-linejoin":"round",visibility:a.visible?"visible":"hidden",stroke:t,fill:c?t:"none","stroke-width":a.graph.strokeWidth()+(c?0:2*l),zIndex:2}).add(a.group),v([a.tracker,
    a.markerGroup],function(a){a.addClass("highcharts-tracker").on("mouseover",m).on("mouseout",function(a){d.onTrackerMouseOut(a);});b.cursor&&a.css({cursor:b.cursor});if(y)a.on("touchstart",m);}));u(this,"afterDrawTracker");}};h.column&&(h.column.prototype.drawTracker=D.drawTrackerPoint);h.pie&&(h.pie.prototype.drawTracker=D.drawTrackerPoint);h.scatter&&(h.scatter.prototype.drawTracker=D.drawTrackerPoint);z(e.prototype,{setItemEvents:function(a,b,c){var e=this,h=e.chart.renderer.boxWrapper,g="highcharts-legend-"+
    (a instanceof f?"point":"series")+"-active";(c?b:a.legendGroup).on("mouseover",function(){a.setState("hover");h.addClass(g);b.css(e.options.itemHoverStyle);}).on("mouseout",function(){b.css(t(a.visible?e.itemStyle:e.itemHiddenStyle));h.removeClass(g);a.setState();}).on("click",function(b){var d=function(){a.setVisible&&a.setVisible();};h.removeClass(g);b={browserEvent:b};a.firePointEvent?a.firePointEvent("legendItemClick",b,d):u(a,"legendItemClick",b,d);});},createCheckboxForItem:function(a){a.checkbox=
    G("input",{type:"checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);B(a.checkbox,"click",function(b){u(a.series||a,"checkboxClick",{checked:b.target.checked,item:a},function(){a.select();});});}});m.legend.itemStyle.cursor="pointer";z(C.prototype,{showResetZoom:function(){function a(){b.zoomOut();}var b=this,c=m.lang,e=b.options.chart.resetZoomButton,f=e.theme,h=f.states,d="chart"===e.relativeTo?null:"plotBox";u(this,"beforeShowResetZoom",null,
    function(){b.resetZoomButton=b.renderer.button(c.resetZoom,null,null,a,f,h&&h.hover).attr({align:e.position.align,title:c.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(e.position,!1,d);});},zoomOut:function(){u(this,"selection",{resetSelection:!0},this.zoom);},zoom:function(a){var c,e=this.pointer,f=!1,h;!a||a.resetSelection?(v(this.axes,function(a){c=a.zoom();}),e.initiated=!1):v(a.xAxis.concat(a.yAxis),function(a){var b=a.axis;e[b.isXAxis?"zoomX":"zoomY"]&&(c=b.zoom(a.min,a.max),b.displayBtn&&
    (f=!0));});h=this.resetZoomButton;f&&!h?this.showResetZoom():!f&&b(h)&&(this.resetZoomButton=h.destroy());c&&this.redraw(n(this.options.chart.animation,a&&a.animation,100>this.pointCount));},pan:function(a,b){var c=this,e=c.hoverPoints,f;e&&v(e,function(a){a.setState();});v("xy"===b?[1,0]:[1],function(b){b=c[b?"xAxis":"yAxis"][0];var d=b.horiz,e=a[d?"chartX":"chartY"],d=d?"mouseDownX":"mouseDownY",h=c[d],k=(b.pointRange||0)/2,g=b.reversed&&!c.inverted||!b.reversed&&c.inverted?-1:1,l=b.getExtremes(),
    n=b.toValue(h-e,!0)+k*g,g=b.toValue(h+b.len-e,!0)-k*g,q=g<n,h=q?g:n,n=q?n:g,g=Math.min(l.dataMin,k?l.min:b.toValue(b.toPixels(l.min)-b.minPixelPadding)),k=Math.max(l.dataMax,k?l.max:b.toValue(b.toPixels(l.max)+b.minPixelPadding)),q=g-h;0<q&&(n+=q,h=g);q=n-k;0<q&&(n=k,h-=q);b.series.length&&h!==l.min&&n!==l.max&&(b.setExtremes(h,n,!1,!1,{trigger:"pan"}),f=!0);c[d]=e;});f&&c.redraw(!1);p(c.container,{cursor:"move"});}});z(f.prototype,{select:function(a,b){var c=this,e=c.series,f=e.chart;a=n(a,!c.selected);
    c.firePointEvent(a?"select":"unselect",{accumulate:b},function(){c.selected=c.options.selected=a;e.options.data[l(c,e.data)]=c.options;c.setState(a&&"select");b||v(f.getSelectedPoints(),function(a){a.selected&&a!==c&&(a.selected=a.options.selected=!1,e.options.data[l(a,e.data)]=a.options,a.setState(""),a.firePointEvent("unselect"));});});},onMouseOver:function(a){var b=this.series.chart,c=b.pointer;a=a?c.normalize(a):c.getChartCoordinatesFromPoint(this,b.inverted);c.runPointActions(a,this);},onMouseOut:function(){var a=
    this.series.chart;this.firePointEvent("mouseOut");v(a.hoverPoints||[],function(a){a.setState();});a.hoverPoints=a.hoverPoint=null;},importEvents:function(){if(!this.hasImportedEvents){var b=this,c=t(b.series.options.point,b.options).events;b.events=c;a.objectEach(c,function(a,c){B(b,c,a);});this.hasImportedEvents=!0;}},setState:function(a,b){var c=Math.floor(this.plotX),e=this.plotY,f=this.series,h=f.options.states[a||"normal"]||{},d=g[f.type].marker&&f.options.marker,l=d&&!1===d.enabled,r=d&&d.states&&
    d.states[a||"normal"]||{},k=!1===r.enabled,m=f.stateMarkerGraphic,t=this.marker||{},w=f.chart,p=f.halo,D,v=d&&f.markerAttribs;a=a||"";if(!(a===this.state&&!b||this.selected&&"select"!==a||!1===h.enabled||a&&(k||l&&!1===r.enabled)||a&&t.states&&t.states[a]&&!1===t.states[a].enabled)){v&&(D=f.markerAttribs(this,a));if(this.graphic)this.state&&this.graphic.removeClass("highcharts-point-"+this.state),a&&this.graphic.addClass("highcharts-point-"+a),this.graphic.animate(f.pointAttribs(this,a),n(w.options.chart.animation,
    h.animation)),D&&this.graphic.animate(D,n(w.options.chart.animation,r.animation,d.animation)),m&&m.hide();else{if(a&&r){d=t.symbol||f.symbol;m&&m.currentSymbol!==d&&(m=m.destroy());if(m)m[b?"animate":"attr"]({x:D.x,y:D.y});else d&&(f.stateMarkerGraphic=m=w.renderer.symbol(d,D.x,D.y,D.width,D.height).add(f.markerGroup),m.currentSymbol=d);m&&m.attr(f.pointAttribs(this,a));}m&&(m[a&&w.isInsidePlot(c,e,w.inverted)?"show":"hide"](),m.element.point=this);}(c=h.halo)&&c.size?(p||(f.halo=p=w.renderer.path().add((this.graphic||
    m).parentGroup)),p.show()[b?"animate":"attr"]({d:this.haloPath(c.size)}),p.attr({"class":"highcharts-halo highcharts-color-"+n(this.colorIndex,f.colorIndex)+(this.className?" "+this.className:"")}),p.point=this,p.attr(z({fill:this.color||f.color,"fill-opacity":c.opacity,zIndex:-1},c.attributes))):p&&p.point&&p.point.haloPath&&p.animate({d:p.point.haloPath(0)},null,p.hide);this.state=a;u(this,"afterSetState");}},haloPath:function(a){return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX)-
    a,this.plotY-a,2*a,2*a)}});z(c.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&u(this,"mouseOver");this.setState("hover");a.hoverSeries=this;},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,e=b.hoverPoint;b.hoverSeries=null;if(e)e.onMouseOut();this&&a.events.mouseOut&&u(this,"mouseOut");!c||this.stickyTracking||c.shared&&!this.noSharedTooltip||c.hide();this.setState();},setState:function(a){var b=this,
    c=b.options,e=b.graph,f=c.states,h=c.lineWidth,c=0;a=a||"";if(b.state!==a&&(v([b.group,b.markerGroup,b.dataLabelsGroup],function(d){d&&(b.state&&d.removeClass("highcharts-series-"+b.state),a&&d.addClass("highcharts-series-"+a));}),b.state=a,!f[a]||!1!==f[a].enabled)&&(a&&(h=f[a].lineWidth||h+(f[a].lineWidthPlus||0)),e&&!e.dashstyle))for(h={"stroke-width":h},e.animate(h,n(f[a||"normal"]&&f[a||"normal"].animation,b.chart.options.chart.animation));b["zone-graph-"+c];)b["zone-graph-"+c].attr(h),c+=1;},
    setVisible:function(a,b){var c=this,e=c.chart,f=c.legendItem,h,d=e.options.chart.ignoreHiddenSeries,g=c.visible;h=(c.visible=a=c.options.visible=c.userOptions.visible=void 0===a?!g:a)?"show":"hide";v(["group","dataLabelsGroup","markerGroup","tracker","tt"],function(a){if(c[a])c[a][h]();});if(e.hoverSeries===c||(e.hoverPoint&&e.hoverPoint.series)===c)c.onMouseOut();f&&e.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&v(e.series,function(a){a.options.stacking&&a.visible&&(a.isDirty=!0);});v(c.linkedSeries,
    function(b){b.setVisible(a,!1);});d&&(e.isDirtyBox=!0);!1!==b&&e.redraw();u(c,h);},show:function(){this.setVisible(!0);},hide:function(){this.setVisible(!1);},select:function(a){this.selected=a=void 0===a?!this.selected:a;this.checkbox&&(this.checkbox.checked=a);u(this,a?"select":"unselect");},drawTracker:D.drawTrackerGraph});})(L);(function(a){var B=a.Chart,C=a.each,G=a.inArray,p=a.isArray,m=a.isObject,g=a.pick,v=a.splat;B.prototype.setResponsive=function(g){var m=this.options.responsive,p=[],l=this.currentResponsive;
    m&&m.rules&&C(m.rules,function(b){void 0===b._id&&(b._id=a.uniqueKey());this.matchResponsiveRule(b,p,g);},this);var b=a.merge.apply(0,a.map(p,function(b){return a.find(m.rules,function(a){return a._id===b}).chartOptions})),p=p.toString()||void 0;p!==(l&&l.ruleIds)&&(l&&this.update(l.undoOptions,g),p?(this.currentResponsive={ruleIds:p,mergedOptions:b,undoOptions:this.currentOptions(b)},this.update(b,g)):this.currentResponsive=void 0);};B.prototype.matchResponsiveRule=function(a,m){var p=a.condition;
    (p.callback||function(){return this.chartWidth<=g(p.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=g(p.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=g(p.minWidth,0)&&this.chartHeight>=g(p.minHeight,0)}).call(this)&&m.push(a._id);};B.prototype.currentOptions=function(g){function u(g,b,e,t){var l;a.objectEach(g,function(a,c){if(!t&&-1<G(c,["series","xAxis","yAxis"]))for(a=v(a),e[c]=[],l=0;l<a.length;l++)b[c][l]&&(e[c][l]={},u(a[l],b[c][l],e[c][l],t+1));else m(a)?(e[c]=p(a)?[]:{},u(a,b[c]||{},e[c],t+1)):
    e[c]=b[c]||null;});}var y={};u(g,this.options,y,0);return y};})(L);(function(a){var B=a.addEvent,C=a.Axis,G=a.Chart,p=a.css,m=a.defined,g=a.each,v=a.extend,z=a.noop,u=a.pick,y=a.timeUnits,l=a.wrap;l(a.Series.prototype,"init",function(a){var b;a.apply(this,Array.prototype.slice.call(arguments,1));(b=this.xAxis)&&b.options.ordinal&&B(this,"updatedData",function(){delete b.ordinalIndex;});});l(C.prototype,"getTimeTicks",function(a,e,g,l,f,c,h,w){var b=0,n,t,q={},p,x,u,d=[],H=-Number.MAX_VALUE,E=this.options.tickPixelInterval,
    k=this.chart.time;if(!this.options.ordinal&&!this.options.breaks||!c||3>c.length||void 0===g)return a.call(this,e,g,l,f);x=c.length;for(n=0;n<x;n++){u=n&&c[n-1]>l;c[n]<g&&(b=n);if(n===x-1||c[n+1]-c[n]>5*h||u){if(c[n]>H){for(t=a.call(this,e,c[b],c[n],f);t.length&&t[0]<=H;)t.shift();t.length&&(H=t[t.length-1]);d=d.concat(t);}b=n+1;}if(u)break}a=t.info;if(w&&a.unitRange<=y.hour){n=d.length-1;for(b=1;b<n;b++)k.dateFormat("%d",d[b])!==k.dateFormat("%d",d[b-1])&&(q[d[b]]="day",p=!0);p&&(q[d[0]]="day");a.higherRanks=
    q;}d.info=a;if(w&&m(E)){w=k=d.length;n=[];var A;for(p=[];w--;)b=this.translate(d[w]),A&&(p[w]=A-b),n[w]=A=b;p.sort();p=p[Math.floor(p.length/2)];p<.6*E&&(p=null);w=d[k-1]>l?k-1:k;for(A=void 0;w--;)b=n[w],l=Math.abs(A-b),A&&l<.8*E&&(null===p||l<.8*p)?(q[d[w]]&&!q[d[w+1]]?(l=w+1,A=b):l=w,d.splice(l,1)):A=b;}return d});v(C.prototype,{beforeSetTickPositions:function(){var a,e=[],l=!1,n,f=this.getExtremes(),c=f.min,h=f.max,w,p=this.isXAxis&&!!this.options.breaks,f=this.options.ordinal,r=Number.MAX_VALUE,
    v=this.chart.options.chart.ignoreHiddenSeries;n="highcharts-navigator-xaxis"===this.options.className;!this.options.overscroll||this.max!==this.dataMax||this.chart.mouseIsDown&&!n||this.eventArgs&&(!this.eventArgs||"navigator"===this.eventArgs.trigger)||(this.max+=this.options.overscroll,!n&&m(this.userMin)&&(this.min+=this.options.overscroll));if(f||p){g(this.series,function(b,c){if(!(v&&!1===b.visible||!1===b.takeOrdinalPosition&&!p)&&(e=e.concat(b.processedXData),a=e.length,e.sort(function(a,b){return a-
    b}),r=Math.min(r,u(b.closestPointRange,r)),a))for(c=a-1;c--;)e[c]===e[c+1]&&e.splice(c,1);});a=e.length;if(2<a){n=e[1]-e[0];for(w=a-1;w--&&!l;)e[w+1]-e[w]!==n&&(l=!0);!this.options.keepOrdinalPadding&&(e[0]-c>n||h-e[e.length-1]>n)&&(l=!0);}else this.options.overscroll&&(2===a?r=e[1]-e[0]:1===a?(r=this.options.overscroll,e=[e[0],e[0]+r]):r=this.overscrollPointsRange);l?(this.options.overscroll&&(this.overscrollPointsRange=r,e=e.concat(this.getOverscrollPositions())),this.ordinalPositions=e,n=this.ordinal2lin(Math.max(c,
    e[0]),!0),w=Math.max(this.ordinal2lin(Math.min(h,e[e.length-1]),!0),1),this.ordinalSlope=h=(h-c)/(w-n),this.ordinalOffset=c-n*h):(this.overscrollPointsRange=u(this.closestPointRange,this.overscrollPointsRange),this.ordinalPositions=this.ordinalSlope=this.ordinalOffset=void 0);}this.isOrdinal=f&&l;this.groupIntervalFactor=null;},val2lin:function(a,e){var b=this.ordinalPositions;if(b){var g=b.length,f,c;for(f=g;f--;)if(b[f]===a){c=f;break}for(f=g-1;f--;)if(a>b[f]||0===f){a=(a-b[f])/(b[f+1]-b[f]);c=f+
    a;break}e=e?c:this.ordinalSlope*(c||0)+this.ordinalOffset;}else e=a;return e},lin2val:function(a,e){var b=this.ordinalPositions;if(b){var g=this.ordinalSlope,f=this.ordinalOffset,c=b.length-1,h;if(e)0>a?a=b[0]:a>c?a=b[c]:(c=Math.floor(a),h=a-c);else for(;c--;)if(e=g*c+f,a>=e){g=g*(c+1)+f;h=(a-e)/(g-e);break}return void 0!==h&&void 0!==b[c]?b[c]+(h?h*(b[c+1]-b[c]):0):a}return a},getExtendedPositions:function(){var a=this,e=a.chart,l=a.series[0].currentDataGrouping,n=a.ordinalIndex,f=l?l.count+l.unitName:
    "raw",c=a.options.overscroll,h=a.getExtremes(),m,p;n||(n=a.ordinalIndex={});n[f]||(m={series:[],chart:e,getExtremes:function(){return {min:h.dataMin,max:h.dataMax+c}},options:{ordinal:!0},val2lin:C.prototype.val2lin,ordinal2lin:C.prototype.ordinal2lin},g(a.series,function(b){p={xAxis:m,xData:b.xData.slice(),chart:e,destroyGroupedData:z};p.xData=p.xData.concat(a.getOverscrollPositions());p.options={dataGrouping:l?{enabled:!0,forced:!0,approximation:"open",units:[[l.unitName,[l.count]]]}:{enabled:!1}};
    b.processData.apply(p);m.series.push(p);}),a.beforeSetTickPositions.apply(m),n[f]=m.ordinalPositions);return n[f]},getOverscrollPositions:function(){var b=this.options.overscroll,e=this.overscrollPointsRange,g=[],l=this.dataMax;if(a.defined(e))for(g.push(l);l<=this.dataMax+b;)l+=e,g.push(l);return g},getGroupIntervalFactor:function(a,e,g){var b;g=g.processedXData;var f=g.length,c=[];b=this.groupIntervalFactor;if(!b){for(b=0;b<f-1;b++)c[b]=g[b+1]-g[b];c.sort(function(a,b){return a-b});c=c[Math.floor(f/
    2)];a=Math.max(a,g[0]);e=Math.min(e,g[f-1]);this.groupIntervalFactor=b=f*c/(e-a);}return b},postProcessTickInterval:function(a){var b=this.ordinalSlope;return b?this.options.breaks?this.closestPointRange||a:a/(b/this.closestPointRange):a}});C.prototype.ordinal2lin=C.prototype.val2lin;l(G.prototype,"pan",function(a,e){var b=this.xAxis[0],l=b.options.overscroll,f=e.chartX,c=!1;if(b.options.ordinal&&b.series.length){var h=this.mouseDownX,m=b.getExtremes(),u=m.dataMax,r=m.min,v=m.max,q=this.hoverPoints,
    F=b.closestPointRange||b.overscrollPointsRange,h=(h-f)/(b.translationSlope*(b.ordinalSlope||F)),x={ordinalPositions:b.getExtendedPositions()},F=b.lin2val,y=b.val2lin,d;x.ordinalPositions?1<Math.abs(h)&&(q&&g(q,function(a){a.setState();}),0>h?(q=x,d=b.ordinalPositions?b:x):(q=b.ordinalPositions?b:x,d=x),x=d.ordinalPositions,u>x[x.length-1]&&x.push(u),this.fixedRange=v-r,h=b.toFixedRange(null,null,F.apply(q,[y.apply(q,[r,!0])+h,!0]),F.apply(d,[y.apply(d,[v,!0])+h,!0])),h.min>=Math.min(m.dataMin,r)&&
    h.max<=Math.max(u,v)+l&&b.setExtremes(h.min,h.max,!0,!1,{trigger:"pan"}),this.mouseDownX=f,p(this.container,{cursor:"move"})):c=!0;}else c=!0;c&&(l&&(b.max=b.dataMax+l),a.apply(this,Array.prototype.slice.call(arguments,1)));});})(L);(function(a){function B(){return Array.prototype.slice.call(arguments,1)}function C(a){a.apply(this);this.drawBreaks(this.xAxis,["x"]);this.drawBreaks(this.yAxis,p(this.pointArrayMap,["y"]));}var G=a.addEvent,p=a.pick,m=a.wrap,g=a.each,v=a.extend,z=a.isArray,u=a.fireEvent,
    y=a.Axis,l=a.Series;v(y.prototype,{isInBreak:function(a,e){var b=a.repeat||Infinity,g=a.from,f=a.to-a.from;e=e>=g?(e-g)%b:b-(g-e)%b;return a.inclusive?e<=f:e<f&&0!==e},isInAnyBreak:function(a,e){var b=this.options.breaks,g=b&&b.length,f,c,h;if(g){for(;g--;)this.isInBreak(b[g],a)&&(f=!0,c||(c=p(b[g].showPoints,this.isXAxis?!1:!0)));h=f&&e?f&&!c:f;}return h}});G(y,"afterSetTickPositions",function(){if(this.options.breaks){var a=this.tickPositions,e=this.tickPositions.info,g=[],l;for(l=0;l<a.length;l++)this.isInAnyBreak(a[l])||
    g.push(a[l]);this.tickPositions=g;this.tickPositions.info=e;}});G(y,"afterSetOptions",function(){this.options.breaks&&this.options.breaks.length&&(this.options.ordinal=!1);});G(y,"afterInit",function(){var a=this,e;e=this.options.breaks;a.isBroken=z(e)&&!!e.length;a.isBroken&&(a.val2lin=function(b){var e=b,f,c;for(c=0;c<a.breakArray.length;c++)if(f=a.breakArray[c],f.to<=b)e-=f.len;else if(f.from>=b)break;else if(a.isInBreak(f,b)){e-=b-f.from;break}return e},a.lin2val=function(b){var e,f;for(f=0;f<a.breakArray.length&&
    !(e=a.breakArray[f],e.from>=b);f++)e.to<b?b+=e.len:a.isInBreak(e,b)&&(b+=e.len);return b},a.setExtremes=function(a,b,e,c,h){for(;this.isInAnyBreak(a);)a-=this.closestPointRange;for(;this.isInAnyBreak(b);)b-=this.closestPointRange;y.prototype.setExtremes.call(this,a,b,e,c,h);},a.setAxisTranslation=function(b){y.prototype.setAxisTranslation.call(this,b);b=a.options.breaks;var e=[],f=[],c=0,h,l,m=a.userMin||a.min,r=a.userMax||a.max,t=p(a.pointRangePadding,0),q,v;g(b,function(b){l=b.repeat||Infinity;a.isInBreak(b,
    m)&&(m+=b.to%l-m%l);a.isInBreak(b,r)&&(r-=r%l-b.from%l);});g(b,function(a){q=a.from;for(l=a.repeat||Infinity;q-l>m;)q-=l;for(;q<m;)q+=l;for(v=q;v<r;v+=l)e.push({value:v,move:"in"}),e.push({value:v+(a.to-a.from),move:"out",size:a.breakSize});});e.sort(function(a,b){return a.value===b.value?("in"===a.move?0:1)-("in"===b.move?0:1):a.value-b.value});h=0;q=m;g(e,function(a){h+="in"===a.move?1:-1;1===h&&"in"===a.move&&(q=a.value);0===h&&(f.push({from:q,to:a.value,len:a.value-q-(a.size||0)}),c+=a.value-q-
    (a.size||0));});a.breakArray=f;a.unitLength=r-m-c+t;u(a,"afterBreaks");a.options.staticScale?a.transA=a.options.staticScale:a.unitLength&&(a.transA*=(r-a.min+t)/a.unitLength);t&&(a.minPixelPadding=a.transA*a.minPointOffset);a.min=m;a.max=r;});});m(l.prototype,"generatePoints",function(a){a.apply(this,B(arguments));var b=this.xAxis,g=this.yAxis,l=this.points,f,c=l.length,h=this.options.connectNulls,m;if(b&&g&&(b.options.breaks||g.options.breaks))for(;c--;)f=l[c],m=null===f.y&&!1===h,m||!b.isInAnyBreak(f.x,
    !0)&&!g.isInAnyBreak(f.y,!0)||(l.splice(c,1),this.data[c]&&this.data[c].destroyElements());});a.Series.prototype.drawBreaks=function(a,e){var b=this,l=b.points,f,c,h,m;a&&g(e,function(e){f=a.breakArray||[];c=a.isXAxis?a.min:p(b.options.threshold,a.min);g(l,function(b){m=p(b["stack"+e.toUpperCase()],b[e]);g(f,function(e){h=!1;if(c<e.from&&m>e.to||c>e.from&&m<e.from)h="pointBreak";else if(c<e.from&&m>e.from&&m<e.to||c>e.from&&m>e.to&&m<e.from)h="pointInBreak";h&&u(a,h,{point:b,brk:e});});});});};a.Series.prototype.gappedPath=
    function(){var b=this.currentDataGrouping,e=b&&b.totalRange,b=this.options.gapSize,g=this.points.slice(),l=g.length-1,f=this.yAxis;if(b&&0<l)for("value"!==this.options.gapUnit&&(b*=this.closestPointRange),e&&e>b&&(b=e);l--;)g[l+1].x-g[l].x>b&&(e=(g[l].x+g[l+1].x)/2,g.splice(l+1,0,{isNull:!0,x:e}),this.options.stacking&&(e=f.stacks[this.stackKey][e]=new a.StackItem(f,f.options.stackLabels,!1,e,this.stack),e.total=0));return this.getGraphPath(g)};m(a.seriesTypes.column.prototype,"drawPoints",C);m(a.Series.prototype,
    "drawPoints",C);})(L);(function(a){var B=a.addEvent,C=a.arrayMax,G=a.arrayMin,p=a.Axis,m=a.defaultPlotOptions,g=a.defined,v=a.each,z=a.extend,u=a.format,y=a.isNumber,l=a.merge,b=a.pick,e=a.Point,t=a.Series,n=a.Tooltip,f=a.wrap,c=t.prototype,h=c.processData,w=c.generatePoints,D={approximation:"average",groupPixelWidth:2,dateTimeLabelFormats:{millisecond:["%A, %b %e, %H:%M:%S.%L","%A, %b %e, %H:%M:%S.%L","-%H:%M:%S.%L"],second:["%A, %b %e, %H:%M:%S","%A, %b %e, %H:%M:%S","-%H:%M:%S"],minute:["%A, %b %e, %H:%M",
    "%A, %b %e, %H:%M","-%H:%M"],hour:["%A, %b %e, %H:%M","%A, %b %e, %H:%M","-%H:%M"],day:["%A, %b %e, %Y","%A, %b %e","-%A, %b %e, %Y"],week:["Week from %A, %b %e, %Y","%A, %b %e","-%A, %b %e, %Y"],month:["%B %Y","%B","-%B %Y"],year:["%Y","%Y","-%Y"]}},r={line:{},spline:{},area:{},areaspline:{},column:{approximation:"sum",groupPixelWidth:10},arearange:{approximation:"range"},areasplinerange:{approximation:"range"},columnrange:{approximation:"range",groupPixelWidth:10},candlestick:{approximation:"ohlc",
    groupPixelWidth:10},ohlc:{approximation:"ohlc",groupPixelWidth:5}},J=a.defaultDataGroupingUnits=[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1]],["week",[1]],["month",[1,3,6]],["year",null]],q=a.approximations={sum:function(a){var b=a.length,c;if(!b&&a.hasNulls)c=null;else if(b)for(c=0;b--;)c+=a[b];return c},average:function(a){var b=a.length;a=q.sum(a);y(a)&&b&&(a/=b);return a},averages:function(){var a=
    [];v(arguments,function(b){a.push(q.average(b));});return void 0===a[0]?void 0:a},open:function(a){return a.length?a[0]:a.hasNulls?null:void 0},high:function(a){return a.length?C(a):a.hasNulls?null:void 0},low:function(a){return a.length?G(a):a.hasNulls?null:void 0},close:function(a){return a.length?a[a.length-1]:a.hasNulls?null:void 0},ohlc:function(a,b,c,d){a=q.open(a);b=q.high(b);c=q.low(c);d=q.close(d);if(y(a)||y(b)||y(c)||y(d))return [a,b,c,d]},range:function(a,b){a=q.low(a);b=q.high(b);if(y(a)||
    y(b))return [a,b];if(null===a&&null===b)return null}};c.groupData=function(a,b,c,d){var e=this.data,f=this.options.data,k=[],h=[],g=[],l=a.length,m,n,p=!!b,w=[];d="function"===typeof d?d:q[d]||r[this.type]&&q[r[this.type].approximation]||q[D.approximation];var x=this.pointArrayMap,t=x&&x.length,u=0;n=0;var F,z;t?v(x,function(){w.push([]);}):w.push([]);F=t||1;for(z=0;z<=l&&!(a[z]>=c[0]);z++);for(z;z<=l;z++){for(;void 0!==c[u+1]&&a[z]>=c[u+1]||z===l;){m=c[u];this.dataGroupInfo={start:n,length:w[0].length};
    n=d.apply(this,w);void 0!==n&&(k.push(m),h.push(n),g.push(this.dataGroupInfo));n=z;for(m=0;m<F;m++)w[m].length=0,w[m].hasNulls=!1;u+=1;if(z===l)break}if(z===l)break;if(x){m=this.cropStart+z;var J=e&&e[m]||this.pointClass.prototype.applyOptions.apply({series:this},[f[m]]),B;for(m=0;m<t;m++)B=J[x[m]],y(B)?w[m].push(B):null===B&&(w[m].hasNulls=!0);}else m=p?b[z]:null,y(m)?w[0].push(m):null===m&&(w[0].hasNulls=!0);}return [k,h,g]};c.processData=function(){var a=this.chart,e=this.options.dataGrouping,f=!1!==
    this.allowDG&&e&&b(e.enabled,a.options.isStock),d=this.visible||!a.options.chart.ignoreHiddenSeries,l,m=this.currentDataGrouping,k;this.forceCrop=f;this.groupPixelWidth=null;this.hasProcessed=!0;if(!1!==h.apply(this,arguments)&&f){this.destroyGroupedData();var n,q=e.groupAll?this.xData:this.processedXData,r=e.groupAll?this.yData:this.processedYData,p=a.plotSizeX,a=this.xAxis,w=a.options.ordinal,t=this.groupPixelWidth=a.getGroupPixelWidth&&a.getGroupPixelWidth();if(t){this.isDirty=l=!0;this.points=
    null;f=a.getExtremes();k=f.min;f=f.max;w=w&&a.getGroupIntervalFactor(k,f,this)||1;t=t*(f-k)/p*w;p=a.getTimeTicks(a.normalizeTimeTickInterval(t,e.units||J),Math.min(k,q[0]),Math.max(f,q[q.length-1]),a.options.startOfWeek,q,this.closestPointRange);r=c.groupData.apply(this,[q,r,p,e.approximation]);q=r[0];w=r[1];if(e.smoothed&&q.length){n=q.length-1;for(q[n]=Math.min(q[n],f);n--&&0<n;)q[n]+=t/2;q[0]=Math.max(q[0],k);}k=p.info;this.closestPointRange=p.info.totalRange;this.groupMap=r[2];g(q[0])&&q[0]<a.dataMin&&
    d&&(a.min<=a.dataMin&&(a.min=q[0]),a.dataMin=q[0]);e.groupAll&&(e=this.cropData(q,w,a.min,a.max,1),q=e.xData,w=e.yData);this.processedXData=q;this.processedYData=w;}else this.groupMap=null;this.hasGroupedData=l;this.currentDataGrouping=k;this.preventGraphAnimation=(m&&m.totalRange)!==(k&&k.totalRange);}};c.destroyGroupedData=function(){var a=this.groupedData;v(a||[],function(b,c){b&&(a[c]=b.destroy?b.destroy():null);});this.groupedData=null;};c.generatePoints=function(){w.apply(this);this.destroyGroupedData();
    this.groupedData=this.hasGroupedData?this.points:null;};B(e,"update",function(){if(this.dataGroup)return a.error(24),!1});f(n.prototype,"tooltipFooterHeaderFormatter",function(a,b,c){var d=this.chart.time,e=b.series,f=e.tooltipOptions,k=e.options.dataGrouping,h=f.xDateFormat,g,l=e.xAxis;return l&&"datetime"===l.options.type&&k&&y(b.key)?(a=e.currentDataGrouping,k=k.dateTimeLabelFormats,a?(l=k[a.unitName],1===a.count?h=l[0]:(h=l[1],g=l[2])):!h&&k&&(h=this.getXDateFormat(b,f,l)),h=d.dateFormat(h,b.key),
    g&&(h+=d.dateFormat(g,b.key+a.totalRange-1)),u(f[(c?"footer":"header")+"Format"],{point:z(b.point,{key:h}),series:e},d)):a.call(this,b,c)});B(t,"destroy",c.destroyGroupedData);B(t,"afterSetOptions",function(a){a=a.options;var b=this.type,c=this.chart.options.plotOptions,d=m[b].dataGrouping,e=this.useCommonDataGrouping&&D;if(r[b]||e)d||(d=l(D,r[b])),a.dataGrouping=l(e,d,c.series&&c.series.dataGrouping,c[b].dataGrouping,this.userOptions.dataGrouping);this.chart.options.isStock&&(this.requireSorting=
    !0);});B(p,"afterSetScale",function(){v(this.series,function(a){a.hasProcessed=!1;});});p.prototype.getGroupPixelWidth=function(){var a=this.series,b=a.length,c,d=0,e=!1,f;for(c=b;c--;)(f=a[c].options.dataGrouping)&&(d=Math.max(d,f.groupPixelWidth));for(c=b;c--;)(f=a[c].options.dataGrouping)&&a[c].hasProcessed&&(b=(a[c].processedXData||a[c].data).length,a[c].groupPixelWidth||b>this.chart.plotSizeX/d||b&&f.forced)&&(e=!0);return e?d:0};p.prototype.setDataGrouping=function(a,c){var e;c=b(c,!0);a||(a={forced:!1,
    units:null});if(this instanceof p)for(e=this.series.length;e--;)this.series[e].update({dataGrouping:a},!1);else v(this.chart.options.series,function(b){b.dataGrouping=a;},!1);this.ordinalSlope=null;c&&this.chart.redraw();};})(L);(function(a){var B=a.each,C=a.Point,G=a.seriesType,p=a.seriesTypes;G("ohlc","column",{lineWidth:1,tooltip:{pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cb\x3e {series.name}\x3c/b\x3e\x3cbr/\x3eOpen: {point.open}\x3cbr/\x3eHigh: {point.high}\x3cbr/\x3eLow: {point.low}\x3cbr/\x3eClose: {point.close}\x3cbr/\x3e'},
    threshold:null,states:{hover:{lineWidth:3}},stickyTracking:!0},{directTouch:!1,pointArrayMap:["open","high","low","close"],toYData:function(a){return [a.open,a.high,a.low,a.close]},pointValKey:"close",pointAttrToOptions:{stroke:"color","stroke-width":"lineWidth"},pointAttribs:function(a,g){g=p.column.prototype.pointAttribs.call(this,a,g);var m=this.options;delete g.fill;!a.options.color&&m.upColor&&a.open<a.close&&(g.stroke=m.upColor);return g},translate:function(){var a=this,g=a.yAxis,v=!!a.modifyValue,
    z=["plotOpen","plotHigh","plotLow","plotClose","yBottom"];p.column.prototype.translate.apply(a);B(a.points,function(m){B([m.open,m.high,m.low,m.close,m.low],function(p,l){null!==p&&(v&&(p=a.modifyValue(p)),m[z[l]]=g.toPixels(p,!0));});m.tooltipPos[1]=m.plotHigh+g.pos-a.chart.plotTop;});},drawPoints:function(){var a=this,g=a.chart;B(a.points,function(m){var p,u,v,l,b=m.graphic,e,t=!b;void 0!==m.plotY&&(b||(m.graphic=b=g.renderer.path().add(a.group)),b.attr(a.pointAttribs(m,m.selected&&"select")),u=b.strokeWidth()%
    2/2,e=Math.round(m.plotX)-u,v=Math.round(m.shapeArgs.width/2),l=["M",e,Math.round(m.yBottom),"L",e,Math.round(m.plotHigh)],null!==m.open&&(p=Math.round(m.plotOpen)+u,l.push("M",e,p,"L",e-v,p)),null!==m.close&&(p=Math.round(m.plotClose)+u,l.push("M",e,p,"L",e+v,p)),b[t?"attr":"animate"]({d:l}).addClass(m.getClassName(),!0));});},animate:null},{getClassName:function(){return C.prototype.getClassName.call(this)+(this.open<this.close?" highcharts-point-up":" highcharts-point-down")}});})(L);(function(a){var B=
    a.defaultPlotOptions,C=a.each,G=a.merge,p=a.seriesType,m=a.seriesTypes;p("candlestick","ohlc",G(B.column,{states:{hover:{lineWidth:2}},tooltip:B.ohlc.tooltip,threshold:null,lineColor:"#000000",lineWidth:1,upColor:"#ffffff",stickyTracking:!0}),{pointAttribs:function(a,p){var g=m.column.prototype.pointAttribs.call(this,a,p),u=this.options,v=a.open<a.close,l=u.lineColor||this.color;g["stroke-width"]=u.lineWidth;g.fill=a.options.color||(v?u.upColor||this.color:this.color);g.stroke=a.lineColor||(v?u.upLineColor||
    l:l);p&&(a=u.states[p],g.fill=a.color||g.fill,g.stroke=a.lineColor||g.stroke,g["stroke-width"]=a.lineWidth||g["stroke-width"]);return g},drawPoints:function(){var a=this,m=a.chart;C(a.points,function(g){var p=g.graphic,v,l,b,e,t,n,f,c=!p;void 0!==g.plotY&&(p||(g.graphic=p=m.renderer.path().add(a.group)),p.attr(a.pointAttribs(g,g.selected&&"select")).shadow(a.options.shadow),t=p.strokeWidth()%2/2,n=Math.round(g.plotX)-t,v=g.plotOpen,l=g.plotClose,b=Math.min(v,l),v=Math.max(v,l),f=Math.round(g.shapeArgs.width/
    2),l=Math.round(b)!==Math.round(g.plotHigh),e=v!==g.yBottom,b=Math.round(b)+t,v=Math.round(v)+t,t=[],t.push("M",n-f,v,"L",n-f,b,"L",n+f,b,"L",n+f,v,"Z","M",n,b,"L",n,l?Math.round(g.plotHigh):b,"M",n,v,"L",n,e?Math.round(g.yBottom):v),p[c?"attr":"animate"]({d:t}).addClass(g.getClassName(),!0));});}});})(L);da=function(a){var B=a.each,C=a.defined,G=a.seriesTypes,p=a.stableSort;return {getPlotBox:function(){return a.Series.prototype.getPlotBox.call(this.options.onSeries&&this.chart.get(this.options.onSeries)||
    this)},translate:function(){G.column.prototype.translate.apply(this);var a=this.options,g=this.chart,v=this.points,z=v.length-1,u,y,l=a.onSeries,l=l&&g.get(l),a=a.onKey||"y",b=l&&l.options.step,e=l&&l.points,t=e&&e.length,n=g.inverted,f=this.xAxis,c=this.yAxis,h=0,w,D,r,J;if(l&&l.visible&&t)for(h=(l.pointXOffset||0)+(l.barW||0)/2,u=l.currentDataGrouping,D=e[t-1].x+(u?u.totalRange:0),p(v,function(a,b){return a.x-b.x}),a="plot"+a[0].toUpperCase()+a.substr(1);t--&&v[z]&&!(w=e[t],u=v[z],u.y=w.y,w.x<=
    u.x&&void 0!==w[a]&&(u.x<=D&&(u.plotY=w[a],w.x<u.x&&!b&&(r=e[t+1])&&void 0!==r[a]&&(J=(u.x-w.x)/(r.x-w.x),u.plotY+=J*(r[a]-w[a]),u.y+=J*(r.y-w.y))),z--,t++,0>z)););B(v,function(a,b){var e;a.plotX+=h;if(void 0===a.plotY||n)0<=a.plotX&&a.plotX<=f.len?n?(a.plotY=f.translate(a.x,0,1,0,1),a.plotX=C(a.y)?c.translate(a.y,0,0,0,1):0):a.plotY=g.chartHeight-f.bottom-(f.opposite?f.height:0)+f.offset-c.top:a.shapeArgs={};(y=v[b-1])&&y.plotX===a.plotX&&(void 0===y.stackIndex&&(y.stackIndex=0),e=y.stackIndex+1);
    a.stackIndex=e;});this.onSeries=l;}}}(L);(function(a,B){function C(a){l[a+"pin"]=function(b,g,m,f,c){var e=c&&c.anchorX;c=c&&c.anchorY;"circle"===a&&f>m&&(b-=Math.round((f-m)/2),m=f);b=l[a](b,g,m,f);e&&c&&(b.push("M","circle"===a?b[1]-b[4]:b[1]+b[4]/2,g>c?g:g+f,"L",e,c),b=b.concat(l.circle(e-1,c-1,2,2)));return b};}var G=a.addEvent,p=a.each,m=a.merge,g=a.noop,v=a.Renderer,z=a.seriesType,u=a.TrackerMixin,y=a.VMLRenderer,l=a.SVGRenderer.prototype.symbols;z("flags","column",{pointRange:0,allowOverlapX:!1,
    shape:"flag",stackDistance:12,textAlign:"center",tooltip:{pointFormat:"{point.text}\x3cbr/\x3e"},threshold:null,y:-30,fillColor:"#ffffff",lineWidth:1,states:{hover:{lineColor:"#000000",fillColor:"#ccd6eb"}},style:{fontSize:"11px",fontWeight:"bold"}},{sorted:!1,noSharedTooltip:!0,allowDG:!1,takeOrdinalPosition:!1,trackerGroups:["markerGroup"],forceCrop:!0,init:a.Series.prototype.init,pointAttribs:function(a,e){var b=this.options,g=a&&a.color||this.color,f=b.lineColor,c=a&&a.lineWidth;a=a&&a.fillColor||
    b.fillColor;e&&(a=b.states[e].fillColor,f=b.states[e].lineColor,c=b.states[e].lineWidth);return {fill:a||g,stroke:f||g,"stroke-width":c||b.lineWidth||0}},translate:B.translate,getPlotBox:B.getPlotBox,drawPoints:function(){var b=this.points,e=this.chart,g=e.renderer,l,f,c=e.inverted,h=this.options,w=h.y,u,r,v,q,y,x,z=this.yAxis,d={},H=[];for(r=b.length;r--;)v=b[r],x=(c?v.plotY:v.plotX)>this.xAxis.len,l=v.plotX,q=v.stackIndex,u=v.options.shape||h.shape,f=v.plotY,void 0!==f&&(f=v.plotY+w-(void 0!==q&&
    q*h.stackDistance)),v.anchorX=q?void 0:v.plotX,y=q?void 0:v.plotY,q=v.graphic,void 0!==f&&0<=l&&!x?(q||(q=v.graphic=g.label("",null,null,u,null,null,h.useHTML).attr(this.pointAttribs(v)).css(m(h.style,v.style)).attr({align:"flag"===u?"left":"center",width:h.width,height:h.height,"text-align":h.textAlign}).addClass("highcharts-point").add(this.markerGroup),v.graphic.div&&(v.graphic.div.point=v),q.shadow(h.shadow),q.isNew=!0),0<l&&(l-=q.strokeWidth()%2),u={y:f,anchorY:y},h.allowOverlapX&&(u.x=l,u.anchorX=
    v.anchorX),q.attr({text:v.options.title||h.title||"A"})[q.isNew?"attr":"animate"](u),h.allowOverlapX||(d[v.plotX]?d[v.plotX].size=Math.max(d[v.plotX].size,q.width):d[v.plotX]={align:0,size:q.width,target:l,anchorX:l}),v.tooltipPos=[l,f+z.pos-e.plotTop]):q&&(v.graphic=q.destroy());h.allowOverlapX||(a.objectEach(d,function(a){a.plotX=a.anchorX;H.push(a);}),a.distribute(H,c?z.len:this.xAxis.len,100),p(b,function(a){var b=a.graphic&&d[a.plotX];b&&(a.graphic[a.graphic.isNew?"attr":"animate"]({x:b.pos,anchorX:a.anchorX}),
    a.graphic.isNew=!1);}));h.useHTML&&a.wrap(this.markerGroup,"on",function(b){return a.SVGElement.prototype.on.apply(b.apply(this,[].slice.call(arguments,1)),[].slice.call(arguments,1))});},drawTracker:function(){var a=this.points;u.drawTrackerPoint.apply(this);p(a,function(b){var e=b.graphic;e&&G(e.element,"mouseover",function(){0<b.stackIndex&&!b.raised&&(b._y=e.y,e.attr({y:b._y-8}),b.raised=!0);p(a,function(a){a!==b&&a.raised&&a.graphic&&(a.graphic.attr({y:a._y}),a.raised=!1);});});});},animate:g,buildKDTree:g,
    setClip:g,invertGroups:g});l.flag=function(a,e,g,m,f){var b=f&&f.anchorX||a;f=f&&f.anchorY||e;return l.circle(b-1,f-1,2,2).concat(["M",b,f,"L",a,e+m,a,e,a+g,e,a+g,e+m,a,e+m,"Z"])};C("circle");C("square");v===y&&p(["flag","circlepin","squarepin"],function(a){y.prototype.symbols[a]=l[a];});})(L,da);(function(a){function B(a,b,c){this.init(a,b,c);}var C=a.addEvent,G=a.Axis,p=a.correctFloat,m=a.defaultOptions,g=a.defined,v=a.destroyObjectProperties,z=a.each,u=a.fireEvent,y=a.hasTouch,l=a.isTouchDevice,b=
    a.merge,e=a.pick,t=a.removeEvent,n=a.wrap,f,c={height:l?20:14,barBorderRadius:0,buttonBorderRadius:0,liveRedraw:a.svg&&!l,margin:10,minWidth:6,step:.2,zIndex:3,barBackgroundColor:"#cccccc",barBorderWidth:1,barBorderColor:"#cccccc",buttonArrowColor:"#333333",buttonBackgroundColor:"#e6e6e6",buttonBorderColor:"#cccccc",buttonBorderWidth:1,rifleColor:"#333333",trackBackgroundColor:"#f2f2f2",trackBorderColor:"#f2f2f2",trackBorderWidth:1};m.scrollbar=b(!0,c,m.scrollbar);a.swapXY=f=function(a,b){var c=a.length,
    e;if(b)for(b=0;b<c;b+=3)e=a[b+1],a[b+1]=a[b+2],a[b+2]=e;return a};B.prototype={init:function(a,f,g){this.scrollbarButtons=[];this.renderer=a;this.userOptions=f;this.options=b(c,f);this.chart=g;this.size=e(this.options.size,this.options.height);f.enabled&&(this.render(),this.initEvents(),this.addEvents());},render:function(){var a=this.renderer,b=this.options,c=this.size,e;this.group=e=a.g("scrollbar").attr({zIndex:b.zIndex,translateY:-99999}).add();this.track=a.rect().addClass("highcharts-scrollbar-track").attr({x:0,
    r:b.trackBorderRadius||0,height:c,width:c}).add(e);this.track.attr({fill:b.trackBackgroundColor,stroke:b.trackBorderColor,"stroke-width":b.trackBorderWidth});this.trackBorderWidth=this.track.strokeWidth();this.track.attr({y:-this.trackBorderWidth%2/2});this.scrollbarGroup=a.g().add(e);this.scrollbar=a.rect().addClass("highcharts-scrollbar-thumb").attr({height:c,width:c,r:b.barBorderRadius||0}).add(this.scrollbarGroup);this.scrollbarRifles=a.path(f(["M",-3,c/4,"L",-3,2*c/3,"M",0,c/4,"L",0,2*c/3,"M",
    3,c/4,"L",3,2*c/3],b.vertical)).addClass("highcharts-scrollbar-rifles").add(this.scrollbarGroup);this.scrollbar.attr({fill:b.barBackgroundColor,stroke:b.barBorderColor,"stroke-width":b.barBorderWidth});this.scrollbarRifles.attr({stroke:b.rifleColor,"stroke-width":1});this.scrollbarStrokeWidth=this.scrollbar.strokeWidth();this.scrollbarGroup.translate(-this.scrollbarStrokeWidth%2/2,-this.scrollbarStrokeWidth%2/2);this.drawScrollbarButton(0);this.drawScrollbarButton(1);},position:function(a,b,c,e){var f=
    this.options.vertical,h=0,g=this.rendered?"animate":"attr";this.x=a;this.y=b+this.trackBorderWidth;this.width=c;this.xOffset=this.height=e;this.yOffset=h;f?(this.width=this.yOffset=c=h=this.size,this.xOffset=b=0,this.barWidth=e-2*c,this.x=a+=this.options.margin):(this.height=this.xOffset=e=b=this.size,this.barWidth=c-2*e,this.y+=this.options.margin);this.group[g]({translateX:a,translateY:this.y});this.track[g]({width:c,height:e});this.scrollbarButtons[1][g]({translateX:f?0:c-b,translateY:f?e-h:0});},
    drawScrollbarButton:function(a){var b=this.renderer,c=this.scrollbarButtons,e=this.options,h=this.size,g;g=b.g().add(this.group);c.push(g);g=b.rect().addClass("highcharts-scrollbar-button").add(g);g.attr({stroke:e.buttonBorderColor,"stroke-width":e.buttonBorderWidth,fill:e.buttonBackgroundColor});g.attr(g.crisp({x:-.5,y:-.5,width:h+1,height:h+1,r:e.buttonBorderRadius},g.strokeWidth()));g=b.path(f(["M",h/2+(a?-1:1),h/2-3,"L",h/2+(a?-1:1),h/2+3,"L",h/2+(a?2:-2),h/2],e.vertical)).addClass("highcharts-scrollbar-arrow").add(c[a]);
    g.attr({fill:e.buttonArrowColor});},setRange:function(a,b){var c=this.options,e=c.vertical,f=c.minWidth,h=this.barWidth,l,m,n=this.rendered&&!this.hasDragged?"animate":"attr";g(h)&&(a=Math.max(a,0),l=Math.ceil(h*a),this.calculatedWidth=m=p(h*Math.min(b,1)-l),m<f&&(l=(h-f+m)*a,m=f),f=Math.floor(l+this.xOffset+this.yOffset),h=m/2-.5,this.from=a,this.to=b,e?(this.scrollbarGroup[n]({translateY:f}),this.scrollbar[n]({height:m}),this.scrollbarRifles[n]({translateY:h}),this.scrollbarTop=f,this.scrollbarLeft=
    0):(this.scrollbarGroup[n]({translateX:f}),this.scrollbar[n]({width:m}),this.scrollbarRifles[n]({translateX:h}),this.scrollbarLeft=f,this.scrollbarTop=0),12>=m?this.scrollbarRifles.hide():this.scrollbarRifles.show(!0),!1===c.showFull&&(0>=a&&1<=b?this.group.hide():this.group.show()),this.rendered=!0);},initEvents:function(){var a=this;a.mouseMoveHandler=function(b){var c=a.chart.pointer.normalize(b),e=a.options.vertical?"chartY":"chartX",f=a.initPositions;!a.grabbedCenter||b.touches&&0===b.touches[0][e]||
    (c=a.cursorToScrollbarPosition(c)[e],e=a[e],e=c-e,a.hasDragged=!0,a.updatePosition(f[0]+e,f[1]+e),a.hasDragged&&u(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMType:b.type,DOMEvent:b}));};a.mouseUpHandler=function(b){a.hasDragged&&u(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMType:b.type,DOMEvent:b});a.grabbedCenter=a.hasDragged=a.chartX=a.chartY=null;};a.mouseDownHandler=function(b){b=a.chart.pointer.normalize(b);b=a.cursorToScrollbarPosition(b);a.chartX=b.chartX;a.chartY=b.chartY;
    a.initPositions=[a.from,a.to];a.grabbedCenter=!0;};a.buttonToMinClick=function(b){var c=p(a.to-a.from)*a.options.step;a.updatePosition(p(a.from-c),p(a.to-c));u(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMEvent:b});};a.buttonToMaxClick=function(b){var c=(a.to-a.from)*a.options.step;a.updatePosition(a.from+c,a.to+c);u(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMEvent:b});};a.trackClick=function(b){var c=a.chart.pointer.normalize(b),e=a.to-a.from,f=a.y+a.scrollbarTop,g=a.x+a.scrollbarLeft;
    a.options.vertical&&c.chartY>f||!a.options.vertical&&c.chartX>g?a.updatePosition(a.from+e,a.to+e):a.updatePosition(a.from-e,a.to-e);u(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMEvent:b});};},cursorToScrollbarPosition:function(a){var b=this.options,b=b.minWidth>this.calculatedWidth?b.minWidth:0;return {chartX:(a.chartX-this.x-this.xOffset)/(this.barWidth-b),chartY:(a.chartY-this.y-this.yOffset)/(this.barWidth-b)}},updatePosition:function(a,b){1<b&&(a=p(1-p(b-a)),b=1);0>a&&(b=p(b-a),a=0);
    this.from=a;this.to=b;},update:function(a){this.destroy();this.init(this.chart.renderer,b(!0,this.options,a),this.chart);},addEvents:function(){var a=this.options.inverted?[1,0]:[0,1],b=this.scrollbarButtons,c=this.scrollbarGroup.element,e=this.mouseDownHandler,f=this.mouseMoveHandler,g=this.mouseUpHandler,a=[[b[a[0]].element,"click",this.buttonToMinClick],[b[a[1]].element,"click",this.buttonToMaxClick],[this.track.element,"click",this.trackClick],[c,"mousedown",e],[c.ownerDocument,"mousemove",f],[c.ownerDocument,
    "mouseup",g]];y&&a.push([c,"touchstart",e],[c.ownerDocument,"touchmove",f],[c.ownerDocument,"touchend",g]);z(a,function(a){C.apply(null,a);});this._events=a;},removeEvents:function(){z(this._events,function(a){t.apply(null,a);});this._events.length=0;},destroy:function(){var a=this.chart.scroller;this.removeEvents();z(["track","scrollbarRifles","scrollbar","scrollbarGroup","group"],function(a){this[a]&&this[a].destroy&&(this[a]=this[a].destroy());},this);a&&this===a.scrollbar&&(a.scrollbar=null,v(a.scrollbarButtons));}};
    n(G.prototype,"init",function(a){var b=this;a.apply(b,Array.prototype.slice.call(arguments,1));b.options.scrollbar&&b.options.scrollbar.enabled&&(b.options.scrollbar.vertical=!b.horiz,b.options.startOnTick=b.options.endOnTick=!1,b.scrollbar=new B(b.chart.renderer,b.options.scrollbar,b.chart),C(b.scrollbar,"changed",function(a){var c=Math.min(e(b.options.min,b.min),b.min,b.dataMin),f=Math.max(e(b.options.max,b.max),b.max,b.dataMax)-c,g;b.horiz&&!b.reversed||!b.horiz&&b.reversed?(g=c+f*this.to,c+=f*
    this.from):(g=c+f*(1-this.from),c+=f*(1-this.to));b.setExtremes(c,g,!0,!1,a);}));});n(G.prototype,"render",function(a){var b=Math.min(e(this.options.min,this.min),this.min,e(this.dataMin,this.min)),c=Math.max(e(this.options.max,this.max),this.max,e(this.dataMax,this.max)),f=this.scrollbar,h=this.titleOffset||0;a.apply(this,Array.prototype.slice.call(arguments,1));if(f){this.horiz?(f.position(this.left,this.top+this.height+2+this.chart.scrollbarsOffsets[1]+(this.opposite?0:h+this.axisTitleMargin+this.offset),
    this.width,this.height),h=1):(f.position(this.left+this.width+2+this.chart.scrollbarsOffsets[0]+(this.opposite?h+this.axisTitleMargin+this.offset:0),this.top,this.width,this.height),h=0);if(!this.opposite&&!this.horiz||this.opposite&&this.horiz)this.chart.scrollbarsOffsets[h]+=this.scrollbar.size+this.scrollbar.options.margin;isNaN(b)||isNaN(c)||!g(this.min)||!g(this.max)?f.setRange(0,0):(h=(this.min-b)/(c-b),b=(this.max-b)/(c-b),this.horiz&&!this.reversed||!this.horiz&&this.reversed?f.setRange(h,
    b):f.setRange(1-b,1-h));}});n(G.prototype,"getOffset",function(a){var b=this.horiz?2:1,c=this.scrollbar;a.apply(this,Array.prototype.slice.call(arguments,1));c&&(this.chart.scrollbarsOffsets=[0,0],this.chart.axisOffset[b]+=c.size+c.options.margin);});n(G.prototype,"destroy",function(a){this.scrollbar&&(this.scrollbar=this.scrollbar.destroy());a.apply(this,Array.prototype.slice.call(arguments,1));});a.Scrollbar=B;})(L);(function(a){function B(a){this.init(a);}var C=a.addEvent,G=a.Axis,p=a.Chart,m=a.color,
    g=a.defaultOptions,v=a.defined,z=a.destroyObjectProperties,u=a.each,y=a.erase,l=a.error,b=a.extend,e=a.grep,t=a.hasTouch,n=a.isArray,f=a.isNumber,c=a.isObject,h=a.merge,w=a.pick,D=a.removeEvent,r=a.Scrollbar,J=a.Series,q=a.seriesTypes,F=a.wrap,x=[].concat(a.defaultDataGroupingUnits),K=function(a){var b=e(arguments,f);if(b.length)return Math[a].apply(0,b)};x[4]=["day",[1,2,3,4]];x[5]=["week",[1,2,3]];q=void 0===q.areaspline?"line":"areaspline";b(g,{navigator:{height:40,margin:25,maskInside:!0,handles:{width:7,
    height:15,symbols:["navigator-handle","navigator-handle"],enabled:!0,lineWidth:1,backgroundColor:"#f2f2f2",borderColor:"#999999"},maskFill:m("#6685c2").setOpacity(.3).get(),outlineColor:"#cccccc",outlineWidth:1,series:{type:q,fillOpacity:.05,lineWidth:1,compare:null,dataGrouping:{approximation:"average",enabled:!0,groupPixelWidth:2,smoothed:!0,units:x},dataLabels:{enabled:!1,zIndex:2},id:"highcharts-navigator-series",className:"highcharts-navigator-series",lineColor:null,marker:{enabled:!1},pointRange:0,
    threshold:null},xAxis:{overscroll:0,className:"highcharts-navigator-xaxis",tickLength:0,lineWidth:0,gridLineColor:"#e6e6e6",gridLineWidth:1,tickPixelInterval:200,labels:{align:"left",style:{color:"#999999"},x:3,y:-4},crosshair:!1},yAxis:{className:"highcharts-navigator-yaxis",gridLineWidth:0,startOnTick:!1,endOnTick:!1,minPadding:.1,maxPadding:.1,labels:{enabled:!1},crosshair:!1,title:{text:null},tickLength:0,tickWidth:0}}});a.Renderer.prototype.symbols["navigator-handle"]=function(a,b,c,e,f){a=f.width/
    2;b=Math.round(a/3)+.5;f=f.height;return ["M",-a-1,.5,"L",a,.5,"L",a,f+.5,"L",-a-1,f+.5,"L",-a-1,.5,"M",-b,4,"L",-b,f-3,"M",b-1,4,"L",b-1,f-3]};B.prototype={drawHandle:function(a,b,c,e){var d=this.navigatorOptions.handles.height;this.handles[b][e](c?{translateX:Math.round(this.left+this.height/2),translateY:Math.round(this.top+parseInt(a,10)+.5-d)}:{translateX:Math.round(this.left+parseInt(a,10)),translateY:Math.round(this.top+this.height/2-d/2-1)});},drawOutline:function(a,b,c,e){var d=this.navigatorOptions.maskInside,
    f=this.outline.strokeWidth(),k=f/2,f=f%2/2,g=this.outlineHeight,h=this.scrollbarHeight,l=this.size,m=this.left-h,n=this.top;c?(m-=k,c=n+b+f,b=n+a+f,a=["M",m+g,n-h-f,"L",m+g,c,"L",m,c,"L",m,b,"L",m+g,b,"L",m+g,n+l+h].concat(d?["M",m+g,c-k,"L",m+g,b+k]:[])):(a+=m+h-f,b+=m+h-f,n+=k,a=["M",m,n,"L",a,n,"L",a,n+g,"L",b,n+g,"L",b,n,"L",m+l+2*h,n].concat(d?["M",a-k,n,"L",b+k,n]:[]));this.outline[e]({d:a});},drawMasks:function(a,b,c,e){var d=this.left,f=this.top,k=this.height,g,h,l,m;c?(l=[d,d,d],m=[f,f+a,
    f+b],h=[k,k,k],g=[a,b-a,this.size-b]):(l=[d,d+a,d+b],m=[f,f,f],h=[a,b-a,this.size-b],g=[k,k,k]);u(this.shades,function(a,b){a[e]({x:l[b],y:m[b],width:h[b],height:g[b]});});},renderElements:function(){var a=this,b=a.navigatorOptions,c=b.maskInside,e=a.chart,f=e.inverted,g=e.renderer,h;a.navigatorGroup=h=g.g("navigator").attr({zIndex:8,visibility:"hidden"}).add();var l={cursor:f?"ns-resize":"ew-resize"};u([!c,c,!c],function(d,c){a.shades[c]=g.rect().addClass("highcharts-navigator-mask"+(1===c?"-inside":
    "-outside")).attr({fill:d?b.maskFill:"rgba(0,0,0,0)"}).css(1===c&&l).add(h);});a.outline=g.path().addClass("highcharts-navigator-outline").attr({"stroke-width":b.outlineWidth,stroke:b.outlineColor}).add(h);b.handles.enabled&&u([0,1],function(d){b.handles.inverted=e.inverted;a.handles[d]=g.symbol(b.handles.symbols[d],-b.handles.width/2-1,0,b.handles.width,b.handles.height,b.handles);a.handles[d].attr({zIndex:7-d}).addClass("highcharts-navigator-handle highcharts-navigator-handle-"+["left","right"][d]).add(h);
    var c=b.handles;a.handles[d].attr({fill:c.backgroundColor,stroke:c.borderColor,"stroke-width":c.lineWidth}).css(l);});},update:function(a){u(this.series||[],function(a){a.baseSeries&&delete a.baseSeries.navigatorSeries;});this.destroy();h(!0,this.chart.options.navigator,this.options,a);this.init(this.chart);},render:function(b,c,e,k){var d=this.chart,g,h,l=this.scrollbarHeight,m,n=this.xAxis;g=n.fake?d.xAxis[0]:n;var q=this.navigatorEnabled,p,r=this.rendered;h=d.inverted;var t,x=d.xAxis[0].minRange,u=
    d.xAxis[0].options.maxRange;if(!this.hasDragged||v(e)){if(!f(b)||!f(c))if(r)e=0,k=w(n.width,g.width);else return;this.left=w(n.left,d.plotLeft+l+(h?d.plotWidth:0));this.size=p=m=w(n.len,(h?d.plotHeight:d.plotWidth)-2*l);d=h?l:m+2*l;e=w(e,n.toPixels(b,!0));k=w(k,n.toPixels(c,!0));f(e)&&Infinity!==Math.abs(e)||(e=0,k=d);b=n.toValue(e,!0);c=n.toValue(k,!0);t=Math.abs(a.correctFloat(c-b));t<x?this.grabbedLeft?e=n.toPixels(c-x,!0):this.grabbedRight&&(k=n.toPixels(b+x,!0)):v(u)&&t>u&&(this.grabbedLeft?
    e=n.toPixels(c-u,!0):this.grabbedRight&&(k=n.toPixels(b+u,!0)));this.zoomedMax=Math.min(Math.max(e,k,0),p);this.zoomedMin=Math.min(Math.max(this.fixedWidth?this.zoomedMax-this.fixedWidth:Math.min(e,k),0),p);this.range=this.zoomedMax-this.zoomedMin;p=Math.round(this.zoomedMax);e=Math.round(this.zoomedMin);q&&(this.navigatorGroup.attr({visibility:"visible"}),r=r&&!this.hasDragged?"animate":"attr",this.drawMasks(e,p,h,r),this.drawOutline(e,p,h,r),this.navigatorOptions.handles.enabled&&(this.drawHandle(e,
    0,h,r),this.drawHandle(p,1,h,r)));this.scrollbar&&(h?(h=this.top-l,g=this.left-l+(q||!g.opposite?0:(g.titleOffset||0)+g.axisTitleMargin),l=m+2*l):(h=this.top+(q?this.height:-l),g=this.left-l),this.scrollbar.position(g,h,d,l),this.scrollbar.setRange(this.zoomedMin/m,this.zoomedMax/m));this.rendered=!0;}},addMouseEvents:function(){var a=this,b=a.chart,c=b.container,e=[],f,g;a.mouseMoveHandler=f=function(b){a.onMouseMove(b);};a.mouseUpHandler=g=function(b){a.onMouseUp(b);};e=a.getPartsEvents("mousedown");
    e.push(C(c,"mousemove",f),C(c.ownerDocument,"mouseup",g));t&&(e.push(C(c,"touchmove",f),C(c.ownerDocument,"touchend",g)),e.concat(a.getPartsEvents("touchstart")));a.eventsToUnbind=e;a.series&&a.series[0]&&e.push(C(a.series[0].xAxis,"foundExtremes",function(){b.navigator.modifyNavigatorAxisExtremes();}));},getPartsEvents:function(a){var b=this,d=[];u(["shades","handles"],function(c){u(b[c],function(e,f){d.push(C(e.element,a,function(a){b[c+"Mousedown"](a,f);}));});});return d},shadesMousedown:function(a,
    b){a=this.chart.pointer.normalize(a);var d=this.chart,c=this.xAxis,e=this.zoomedMin,f=this.left,g=this.size,h=this.range,l=a.chartX,m,n;d.inverted&&(l=a.chartY,f=this.top);1===b?(this.grabbedCenter=l,this.fixedWidth=h,this.dragOffset=l-e):(a=l-f-h/2,0===b?a=Math.max(0,a):2===b&&a+h>=g&&(a=g-h,c.reversed?(a-=h,n=this.getUnionExtremes().dataMin):m=this.getUnionExtremes().dataMax),a!==e&&(this.fixedWidth=h,b=c.toFixedRange(a,a+h,n,m),v(b.min)&&d.xAxis[0].setExtremes(Math.min(b.min,b.max),Math.max(b.min,
    b.max),!0,null,{trigger:"navigator"})));},handlesMousedown:function(a,b){this.chart.pointer.normalize(a);a=this.chart;var d=a.xAxis[0],c=a.inverted&&!d.reversed||!a.inverted&&d.reversed;0===b?(this.grabbedLeft=!0,this.otherHandlePos=this.zoomedMax,this.fixedExtreme=c?d.min:d.max):(this.grabbedRight=!0,this.otherHandlePos=this.zoomedMin,this.fixedExtreme=c?d.max:d.min);a.fixedRange=null;},onMouseMove:function(a){var b=this,d=b.chart,c=b.left,e=b.navigatorSize,f=b.range,g=b.dragOffset,h=d.inverted;a.touches&&
    0===a.touches[0].pageX||(a=d.pointer.normalize(a),d=a.chartX,h&&(c=b.top,d=a.chartY),b.grabbedLeft?(b.hasDragged=!0,b.render(0,0,d-c,b.otherHandlePos)):b.grabbedRight?(b.hasDragged=!0,b.render(0,0,b.otherHandlePos,d-c)):b.grabbedCenter&&(b.hasDragged=!0,d<g?d=g:d>e+g-f&&(d=e+g-f),b.render(0,0,d-g,d-g+f)),b.hasDragged&&b.scrollbar&&b.scrollbar.options.liveRedraw&&(a.DOMType=a.type,setTimeout(function(){b.onMouseUp(a);},0)));},onMouseUp:function(a){var b=this.chart,d=this.xAxis,c=d&&d.reversed,e=this.scrollbar,
    f,g,h=a.DOMEvent||a;(!this.hasDragged||e&&e.hasDragged)&&"scrollbar"!==a.trigger||(e=this.getUnionExtremes(),this.zoomedMin===this.otherHandlePos?f=this.fixedExtreme:this.zoomedMax===this.otherHandlePos&&(g=this.fixedExtreme),this.zoomedMax===this.size&&(g=c?e.dataMin:e.dataMax),0===this.zoomedMin&&(f=c?e.dataMax:e.dataMin),d=d.toFixedRange(this.zoomedMin,this.zoomedMax,f,g),v(d.min)&&b.xAxis[0].setExtremes(Math.min(d.min,d.max),Math.max(d.min,d.max),!0,this.hasDragged?!1:null,{trigger:"navigator",
    triggerOp:"navigator-drag",DOMEvent:h}));"mousemove"!==a.DOMType&&(this.grabbedLeft=this.grabbedRight=this.grabbedCenter=this.fixedWidth=this.fixedExtreme=this.otherHandlePos=this.hasDragged=this.dragOffset=null);},removeEvents:function(){this.eventsToUnbind&&(u(this.eventsToUnbind,function(a){a();}),this.eventsToUnbind=void 0);this.removeBaseSeriesEvents();},removeBaseSeriesEvents:function(){var a=this.baseSeries||[];this.navigatorEnabled&&a[0]&&(!1!==this.navigatorOptions.adaptToUpdatedData&&u(a,function(a){D(a,
    "updatedData",this.updatedDataHandler);},this),a[0].xAxis&&D(a[0].xAxis,"foundExtremes",this.modifyBaseAxisExtremes));},init:function(a){var b=a.options,d=b.navigator,c=d.enabled,e=b.scrollbar,f=e.enabled,b=c?d.height:0,g=f?e.height:0;this.handles=[];this.shades=[];this.chart=a;this.setBaseSeries();this.height=b;this.scrollbarHeight=g;this.scrollbarEnabled=f;this.navigatorEnabled=c;this.navigatorOptions=d;this.scrollbarOptions=e;this.outlineHeight=b+g;this.opposite=w(d.opposite,!c&&a.inverted);var l=
    this,e=l.baseSeries,f=a.xAxis.length,m=a.yAxis.length,n=e&&e[0]&&e[0].xAxis||a.xAxis[0]||{options:{}};a.extraMargin={type:l.opposite?"plotTop":"marginBottom",value:(c||!a.inverted?l.outlineHeight:0)+d.margin};a.inverted&&(a.extraMargin.type=l.opposite?"marginRight":"plotLeft");a.isDirtyBox=!0;l.navigatorEnabled?(l.xAxis=new G(a,h({breaks:n.options.breaks,ordinal:n.options.ordinal},d.xAxis,{id:"navigator-x-axis",yAxis:"navigator-y-axis",isX:!0,type:"datetime",index:f,offset:0,keepOrdinalPadding:!0,
    startOnTick:!1,endOnTick:!1,minPadding:0,maxPadding:0,zoomEnabled:!1},a.inverted?{offsets:[g,0,-g,0],width:b}:{offsets:[0,-g,0,g],height:b})),l.yAxis=new G(a,h(d.yAxis,{id:"navigator-y-axis",alignTicks:!1,offset:0,index:m,zoomEnabled:!1},a.inverted?{width:b}:{height:b})),e||d.series.data?l.updateNavigatorSeries(!1):0===a.series.length&&(l.unbindRedraw=C(a,"beforeRedraw",function(){0<a.series.length&&!l.series&&(l.setBaseSeries(),l.unbindRedraw());})),l.renderElements(),l.addMouseEvents()):l.xAxis=
    {translate:function(b,d){var c=a.xAxis[0],e=c.getExtremes(),f=c.len-2*g,k=K("min",c.options.min,e.dataMin),c=K("max",c.options.max,e.dataMax)-k;return d?b*c/f+k:f*(b-k)/c},toPixels:function(a){return this.translate(a)},toValue:function(a){return this.translate(a,!0)},toFixedRange:G.prototype.toFixedRange,fake:!0};a.options.scrollbar.enabled&&(a.scrollbar=l.scrollbar=new r(a.renderer,h(a.options.scrollbar,{margin:l.navigatorEnabled?0:10,vertical:a.inverted}),a),C(l.scrollbar,"changed",function(b){var d=
    l.size,c=d*this.to,d=d*this.from;l.hasDragged=l.scrollbar.hasDragged;l.render(0,0,d,c);(a.options.scrollbar.liveRedraw||"mousemove"!==b.DOMType&&"touchmove"!==b.DOMType)&&setTimeout(function(){l.onMouseUp(b);});}));l.addBaseSeriesEvents();l.addChartEvents();},getUnionExtremes:function(a){var b=this.chart.xAxis[0],d=this.xAxis,c=d.options,e=b.options,f;a&&null===b.dataMin||(f={dataMin:w(c&&c.min,K("min",e.min,b.dataMin,d.dataMin,d.min)),dataMax:w(c&&c.max,K("max",e.max,b.dataMax,d.dataMax,d.max))});return f},
    setBaseSeries:function(a,b){var d=this.chart,c=this.baseSeries=[];a=a||d.options&&d.options.navigator.baseSeries||0;u(d.series||[],function(b,d){b.options.isInternal||!b.options.showInNavigator&&(d!==a&&b.options.id!==a||!1===b.options.showInNavigator)||c.push(b);});this.xAxis&&!this.xAxis.fake&&this.updateNavigatorSeries(!0,b);},updateNavigatorSeries:function(d,c){var e=this,f=e.chart,l=e.baseSeries,m,q,p=e.navigatorOptions.series,r,t={enableMouseTracking:!1,index:null,linkedTo:null,group:"nav",padXAxis:!1,
    xAxis:"navigator-x-axis",yAxis:"navigator-y-axis",showInLegend:!1,stacking:!1,isInternal:!0,visible:!0},x=e.series=a.grep(e.series||[],function(b){var d=b.baseSeries;return 0>a.inArray(d,l)?(d&&(D(d,"updatedData",e.updatedDataHandler),delete d.navigatorSeries),b.destroy(),!1):!0});l&&l.length&&u(l,function(a){var d=a.navigatorSeries,k=b({color:a.color},n(p)?g.navigator.series:p);d&&!1===e.navigatorOptions.adaptToUpdatedData||(t.name="Navigator "+l.length,m=a.options||{},r=m.navigatorOptions||{},q=
    h(m,t,k,r),k=r.data||k.data,e.hasNavigatorData=e.hasNavigatorData||!!k,q.data=k||m.data&&m.data.slice(0),d&&d.options?d.update(q,c):(a.navigatorSeries=f.initSeries(q),a.navigatorSeries.baseSeries=a,x.push(a.navigatorSeries)));});if(p.data&&(!l||!l.length)||n(p))e.hasNavigatorData=!1,p=a.splat(p),u(p,function(a,b){t.name="Navigator "+(x.length+1);q=h(g.navigator.series,{color:f.series[b]&&!f.series[b].options.isInternal&&f.series[b].color||f.options.colors[b]||f.options.colors[0]},t,a);q.data=a.data;
    q.data&&(e.hasNavigatorData=!0,x.push(f.initSeries(q)));});d&&this.addBaseSeriesEvents();},addBaseSeriesEvents:function(){var a=this,b=a.baseSeries||[];b[0]&&b[0].xAxis&&C(b[0].xAxis,"foundExtremes",this.modifyBaseAxisExtremes);u(b,function(b){C(b,"show",function(){this.navigatorSeries&&this.navigatorSeries.setVisible(!0,!1);});C(b,"hide",function(){this.navigatorSeries&&this.navigatorSeries.setVisible(!1,!1);});!1!==this.navigatorOptions.adaptToUpdatedData&&b.xAxis&&C(b,"updatedData",this.updatedDataHandler);
    C(b,"remove",function(){this.navigatorSeries&&(y(a.series,this.navigatorSeries),v(this.navigatorSeries.options)&&this.navigatorSeries.remove(!1),delete this.navigatorSeries);});},this);},modifyNavigatorAxisExtremes:function(){var a=this.xAxis,b;a.getExtremes&&(!(b=this.getUnionExtremes(!0))||b.dataMin===a.min&&b.dataMax===a.max||(a.min=b.dataMin,a.max=b.dataMax));},modifyBaseAxisExtremes:function(){var a=this.chart.navigator,b=this.getExtremes(),c=b.dataMin,e=b.dataMax,b=b.max-b.min,g=a.stickToMin,h=
    a.stickToMax,l=w(this.options.overscroll,0),m,n,q=a.series&&a.series[0],p=!!this.setExtremes;this.eventArgs&&"rangeSelectorButton"===this.eventArgs.trigger||(g&&(n=c,m=n+b),h&&(m=e+l,g||(n=Math.max(m-b,q&&q.xData?q.xData[0]:-Number.MAX_VALUE))),p&&(g||h)&&f(n)&&(this.min=this.userMin=n,this.max=this.userMax=m));a.stickToMin=a.stickToMax=null;},updatedDataHandler:function(){var a=this.chart.navigator,b=this.navigatorSeries;a.stickToMax=a.xAxis.reversed?0===Math.round(a.zoomedMin):Math.round(a.zoomedMax)>=
    Math.round(a.size);a.stickToMin=f(this.xAxis.min)&&this.xAxis.min<=this.xData[0]&&(!this.chart.fixedRange||!a.stickToMax);b&&!a.hasNavigatorData&&(b.options.pointStart=this.xData[0],b.setData(this.options.data,!1,null,!1));},addChartEvents:function(){C(this.chart,"redraw",function(){var a=this.navigator,b=a&&(a.baseSeries&&a.baseSeries[0]&&a.baseSeries[0].xAxis||a.scrollbar&&this.xAxis[0]);b&&a.render(b.min,b.max);});},destroy:function(){this.removeEvents();this.xAxis&&(y(this.chart.xAxis,this.xAxis),
    y(this.chart.axes,this.xAxis));this.yAxis&&(y(this.chart.yAxis,this.yAxis),y(this.chart.axes,this.yAxis));u(this.series||[],function(a){a.destroy&&a.destroy();});u("series xAxis yAxis shades outline scrollbarTrack scrollbarRifles scrollbarGroup scrollbar navigatorGroup rendered".split(" "),function(a){this[a]&&this[a].destroy&&this[a].destroy();this[a]=null;},this);u([this.handles],function(a){z(a);},this);}};a.Navigator=B;F(G.prototype,"zoom",function(a,b,c){var d=this.chart,e=d.options,f=e.chart.zoomType,
    g=e.chart.pinchType,h=e.navigator,e=e.rangeSelector,l;this.isXAxis&&(h&&h.enabled||e&&e.enabled)&&("x"===f||"x"===g?d.resetZoomButton="blocked":"y"===f?l=!1:"xy"!==f&&"xy"!==g||!this.options.range||(d=this.previousZoom,v(b)?this.previousZoom=[this.min,this.max]:d&&(b=d[0],c=d[1],delete this.previousZoom)));return void 0!==l?l:a.call(this,b,c)});C(p,"beforeRender",function(){var a=this.options;if(a.navigator.enabled||a.scrollbar.enabled)this.scroller=this.navigator=new B(this);});C(p,"afterSetChartSize",
    function(){var a=this.legend,b=this.navigator,c,e,f,g;b&&(e=a&&a.options,f=b.xAxis,g=b.yAxis,c=b.scrollbarHeight,this.inverted?(b.left=b.opposite?this.chartWidth-c-b.height:this.spacing[3]+c,b.top=this.plotTop+c):(b.left=this.plotLeft+c,b.top=b.navigatorOptions.top||this.chartHeight-b.height-c-this.spacing[2]-(this.rangeSelector&&this.extraBottomMargin?this.rangeSelector.getHeight():0)-(e&&"bottom"===e.verticalAlign&&e.enabled&&!e.floating?a.legendHeight+w(e.margin,10):0)),f&&g&&(this.inverted?f.options.left=
    g.options.left=b.left:f.options.top=g.options.top=b.top,f.setAxisSize(),g.setAxisSize()));});F(J.prototype,"addPoint",function(a,b,e,f,g){var d=this.options.turboThreshold;d&&this.xData.length>d&&c(b,!0)&&this.chart.navigator&&l(20,!0);a.call(this,b,e,f,g);});C(p,"afterAddSeries",function(){this.navigator&&this.navigator.setBaseSeries(null,!1);});C(J,"afterUpdate",function(){this.chart.navigator&&!this.options.isInternal&&this.chart.navigator.setBaseSeries(null,!1);});p.prototype.callbacks.push(function(a){var b=
    a.navigator;b&&a.xAxis[0]&&(a=a.xAxis[0].getExtremes(),b.render(a.min,a.max));});})(L);(function(a){function B(a){this.init(a);}var C=a.addEvent,G=a.Axis,p=a.Chart,m=a.css,g=a.createElement,v=a.defaultOptions,z=a.defined,u=a.destroyObjectProperties,y=a.discardElement,l=a.each,b=a.extend,e=a.fireEvent,t=a.isNumber,n=a.merge,f=a.pick,c=a.pInt,h=a.splat,w=a.wrap;b(v,{rangeSelector:{verticalAlign:"top",buttonTheme:{"stroke-width":0,width:28,height:18,padding:2,zIndex:7},floating:!1,x:0,y:0,height:void 0,
    inputPosition:{align:"right",x:0,y:0},buttonPosition:{align:"left",x:0,y:0},labelStyle:{color:"#666666"}}});v.lang=n(v.lang,{rangeSelectorZoom:"Zoom",rangeSelectorFrom:"From",rangeSelectorTo:"To"});B.prototype={clickButton:function(a,b){var c=this,e=c.chart,g=c.buttonOptions[a],m=e.xAxis[0],n=e.scroller&&e.scroller.getUnionExtremes()||m||{},d=n.dataMin,p=n.dataMax,r,k=m&&Math.round(Math.min(m.max,f(p,m.max))),u=g.type,v,n=g._range,w,D,y,z=g.dataGrouping;if(null!==d&&null!==p){e.fixedRange=n;z&&(this.forcedDataGrouping=
    !0,G.prototype.setDataGrouping.call(m||{chart:this.chart},z,!1));if("month"===u||"year"===u)m?(u={range:g,max:k,chart:e,dataMin:d,dataMax:p},r=m.minFromRange.call(u),t(u.newMax)&&(k=u.newMax)):n=g;else if(n)r=Math.max(k-n,d),k=Math.min(r+n,p);else if("ytd"===u)if(m)void 0===p&&(d=Number.MAX_VALUE,p=Number.MIN_VALUE,l(e.series,function(a){a=a.xData;d=Math.min(a[0],d);p=Math.max(a[a.length-1],p);}),b=!1),k=c.getYTDExtremes(p,d,e.time.useUTC),r=w=k.min,k=k.max;else{C(e,"beforeRender",function(){c.clickButton(a);});
    return}else"all"===u&&m&&(r=d,k=p);r+=g._offsetMin;k+=g._offsetMax;c.setSelected(a);m?m.setExtremes(r,k,f(b,1),null,{trigger:"rangeSelectorButton",rangeSelectorButton:g}):(v=h(e.options.xAxis)[0],y=v.range,v.range=n,D=v.min,v.min=w,C(e,"load",function(){v.range=y;v.min=D;}));}},setSelected:function(a){this.selected=this.options.selected=a;},defaultButtons:[{type:"month",count:1,text:"1m"},{type:"month",count:3,text:"3m"},{type:"month",count:6,text:"6m"},{type:"ytd",text:"YTD"},{type:"year",count:1,text:"1y"},
    {type:"all",text:"All"}],init:function(a){var b=this,c=a.options.rangeSelector,f=c.buttons||[].concat(b.defaultButtons),g=c.selected,h=function(){var a=b.minInput,c=b.maxInput;a&&a.blur&&e(a,"blur");c&&c.blur&&e(c,"blur");};b.chart=a;b.options=c;b.buttons=[];a.extraTopMargin=c.height;b.buttonOptions=f;this.unMouseDown=C(a.container,"mousedown",h);this.unResize=C(a,"resize",h);l(f,b.computeButtonRange);void 0!==g&&f[g]&&this.clickButton(g,!1);C(a,"load",function(){a.xAxis&&a.xAxis[0]&&C(a.xAxis[0],
    "setExtremes",function(c){this.max-this.min!==a.fixedRange&&"rangeSelectorButton"!==c.trigger&&"updatedData"!==c.trigger&&b.forcedDataGrouping&&this.setDataGrouping(!1,!1);});});},updateButtonStates:function(){var a=this.chart,b=a.xAxis[0],c=Math.round(b.max-b.min),e=!b.hasVisibleSeries,f=a.scroller&&a.scroller.getUnionExtremes()||b,g=f.dataMin,h=f.dataMax,a=this.getYTDExtremes(h,g,a.time.useUTC),d=a.min,m=a.max,n=this.selected,k=t(n),p=this.options.allButtonsEnabled,u=this.buttons;l(this.buttonOptions,
    function(a,f){var l=a._range,q=a.type,r=a.count||1,t=u[f],v=0;a=a._offsetMax-a._offsetMin;f=f===n;var x=l>h-g,w=l<b.minRange,A=!1,y=!1,l=l===c;("month"===q||"year"===q)&&c+36E5>=864E5*{month:28,year:365}[q]*r-a&&c-36E5<=864E5*{month:31,year:366}[q]*r+a?l=!0:"ytd"===q?(l=m-d+a===c,A=!f):"all"===q&&(l=b.max-b.min>=h-g,y=!f&&k&&l);q=!p&&(x||w||y||e);r=f&&l||l&&!k&&!A;q?v=3:r&&(k=!0,v=2);t.state!==v&&t.setState(v);});},computeButtonRange:function(a){var b=a.type,c=a.count||1,e={millisecond:1,second:1E3,
    minute:6E4,hour:36E5,day:864E5,week:6048E5};if(e[b])a._range=e[b]*c;else if("month"===b||"year"===b)a._range=864E5*{month:30,year:365}[b]*c;a._offsetMin=f(a.offsetMin,0);a._offsetMax=f(a.offsetMax,0);a._range+=a._offsetMax-a._offsetMin;},setInputValue:function(a,b){var c=this.chart.options.rangeSelector,e=this.chart.time,f=this[a+"Input"];z(b)&&(f.previousValue=f.HCTime,f.HCTime=b);f.value=e.dateFormat(c.inputEditDateFormat||"%Y-%m-%d",f.HCTime);this[a+"DateBox"].attr({text:e.dateFormat(c.inputDateFormat||
    "%b %e, %Y",f.HCTime)});},showInput:function(a){var b=this.inputGroup,c=this[a+"DateBox"];m(this[a+"Input"],{left:b.translateX+c.x+"px",top:b.translateY+"px",width:c.width-2+"px",height:c.height-2+"px",border:"2px solid silver"});},hideInput:function(a){m(this[a+"Input"],{border:0,width:"1px",height:"1px"});this.setInputValue(a);},drawInput:function(a){function e(){var a=y.value,b=(u.inputDateParser||Date.parse)(a),d=h.xAxis[0],e=h.scroller&&h.scroller.xAxis?h.scroller.xAxis:d,g=e.dataMin,e=e.dataMax;
    b!==y.previousValue&&(y.previousValue=b,t(b)||(b=a.split("-"),b=Date.UTC(c(b[0]),c(b[1])-1,c(b[2]))),t(b)&&(h.time.useUTC||(b+=6E4*(new Date).getTimezoneOffset()),w?b>f.maxInput.HCTime?b=void 0:b<g&&(b=g):b<f.minInput.HCTime?b=void 0:b>e&&(b=e),void 0!==b&&d.setExtremes(w?b:d.min,w?d.max:b,void 0,void 0,{trigger:"rangeSelectorInput"})));}var f=this,h=f.chart,l=h.renderer.style||{},p=h.renderer,u=h.options.rangeSelector,d=f.div,w="min"===a,y,k,A=this.inputGroup;this[a+"Label"]=k=p.label(v.lang[w?"rangeSelectorFrom":
    "rangeSelectorTo"],this.inputGroup.offset).addClass("highcharts-range-label").attr({padding:2}).add(A);A.offset+=k.width+5;this[a+"DateBox"]=p=p.label("",A.offset).addClass("highcharts-range-input").attr({padding:2,width:u.inputBoxWidth||90,height:u.inputBoxHeight||17,stroke:u.inputBoxBorderColor||"#cccccc","stroke-width":1,"text-align":"center"}).on("click",function(){f.showInput(a);f[a+"Input"].focus();}).add(A);A.offset+=p.width+(w?10:0);this[a+"Input"]=y=g("input",{name:a,className:"highcharts-range-selector",
    type:"text"},{top:h.plotTop+"px"},d);k.css(n(l,u.labelStyle));p.css(n({color:"#333333"},l,u.inputStyle));m(y,b({position:"absolute",border:0,width:"1px",height:"1px",padding:0,textAlign:"center",fontSize:l.fontSize,fontFamily:l.fontFamily,top:"-9999em"},u.inputStyle));y.onfocus=function(){f.showInput(a);};y.onblur=function(){f.hideInput(a);};y.onchange=e;y.onkeypress=function(a){13===a.keyCode&&e();};},getPosition:function(){var a=this.chart,b=a.options.rangeSelector,a="top"===b.verticalAlign?a.plotTop-
    a.axisOffset[0]:0;return {buttonTop:a+b.buttonPosition.y,inputTop:a+b.inputPosition.y-10}},getYTDExtremes:function(a,b,c){var e=this.chart.time,f=new e.Date(a),g=e.get("FullYear",f);c=c?e.Date.UTC(g,0,1):+new e.Date(g,0,1);b=Math.max(b||0,c);f=f.getTime();return {max:Math.min(a||f,f),min:b}},render:function(a,b){var c=this,e=c.chart,h=e.renderer,m=e.container,n=e.options,d=n.exporting&&!1!==n.exporting.enabled&&n.navigation&&n.navigation.buttonOptions,p=v.lang,r=c.div,k=n.rangeSelector,n=k.floating,
    t=c.buttons,r=c.inputGroup,u=k.buttonTheme,w=k.buttonPosition,y=k.inputPosition,z=k.inputEnabled,D=u&&u.states,B=e.plotLeft,C,G=c.buttonGroup,L;L=c.rendered;var X=c.options.verticalAlign,Z=e.legend,aa=Z&&Z.options,ba=w.y,Y=y.y,ca=L||!1,W=0,T=0,U;if(!1!==k.enabled){L||(c.group=L=h.g("range-selector-group").attr({zIndex:7}).add(),c.buttonGroup=G=h.g("range-selector-buttons").add(L),c.zoomText=h.text(p.rangeSelectorZoom,f(B+w.x,B),15).css(k.labelStyle).add(G),C=f(B+w.x,B)+c.zoomText.getBBox().width+
    5,l(c.buttonOptions,function(a,b){t[b]=h.button(a.text,C,0,function(){var d=a.events&&a.events.click,e;d&&(e=d.call(a));!1!==e&&c.clickButton(b);c.isActive=!0;},u,D&&D.hover,D&&D.select,D&&D.disabled).attr({"text-align":"center"}).add(G);C+=t[b].width+f(k.buttonSpacing,5);}),!1!==z&&(c.div=r=g("div",null,{position:"relative",height:0,zIndex:1}),m.parentNode.insertBefore(r,m),c.inputGroup=r=h.g("input-group").add(L),r.offset=0,c.drawInput("min"),c.drawInput("max")));B=e.plotLeft-e.spacing[3];c.updateButtonStates();
    d&&this.titleCollision(e)&&"top"===X&&"right"===w.align&&w.y+G.getBBox().height-12<(d.y||0)+d.height&&(W=-40);"left"===w.align?U=w.x-e.spacing[3]:"right"===w.align&&(U=w.x+W-e.spacing[1]);G.align({y:w.y,width:G.getBBox().width,align:w.align,x:U},!0,e.spacingBox);c.group.placed=ca;c.buttonGroup.placed=ca;!1!==z&&(W=d&&this.titleCollision(e)&&"top"===X&&"right"===y.align&&y.y-r.getBBox().height-12<(d.y||0)+d.height+e.spacing[0]?-40:0,"left"===y.align?U=B:"right"===y.align&&(U=-Math.max(e.axisOffset[1],
    -W)),r.align({y:y.y,width:r.getBBox().width,align:y.align,x:y.x+U-2},!0,e.spacingBox),m=r.alignAttr.translateX+r.alignOptions.x-W+r.getBBox().x+2,d=r.alignOptions.width,p=G.alignAttr.translateX+G.getBBox().x,U=G.getBBox().width+20,(y.align===w.align||p+U>m&&m+d>p&&ba<Y+r.getBBox().height)&&r.attr({translateX:r.alignAttr.translateX+(e.axisOffset[1]>=-W?0:-W),translateY:r.alignAttr.translateY+G.getBBox().height+10}),c.setInputValue("min",a),c.setInputValue("max",b),c.inputGroup.placed=ca);c.group.align({verticalAlign:X},
    !0,e.spacingBox);a=c.group.getBBox().height+20;b=c.group.alignAttr.translateY;"bottom"===X&&(Z=aa&&"bottom"===aa.verticalAlign&&aa.enabled&&!aa.floating?Z.legendHeight+f(aa.margin,10):0,a=a+Z-20,T=b-a-(n?0:k.y)-10);if("top"===X)n&&(T=0),e.titleOffset&&(T=e.titleOffset+e.options.title.margin),T+=e.margin[0]-e.spacing[0]||0;else if("middle"===X)if(Y===ba)T=0>Y?b+void 0:b;else if(Y||ba)T=0>Y||0>ba?T-Math.min(Y,ba):b-a+NaN;c.group.translate(k.x,k.y+Math.floor(T));!1!==z&&(c.minInput.style.marginTop=c.group.translateY+
    "px",c.maxInput.style.marginTop=c.group.translateY+"px");c.rendered=!0;}},getHeight:function(){var a=this.options,b=this.group,c=a.y,e=a.buttonPosition.y,a=a.inputPosition.y,b=b?b.getBBox(!0).height+13+c:0,c=Math.min(a,e);if(0>a&&0>e||0<a&&0<e)b+=Math.abs(c);return b},titleCollision:function(a){return !(a.options.title.text||a.options.subtitle.text)},update:function(a){var b=this.chart;n(!0,b.options.rangeSelector,a);this.destroy();this.init(b);b.rangeSelector.render();},destroy:function(){var b=this,
    c=b.minInput,e=b.maxInput;b.unMouseDown();b.unResize();u(b.buttons);c&&(c.onfocus=c.onblur=c.onchange=null);e&&(e.onfocus=e.onblur=e.onchange=null);a.objectEach(b,function(a,c){a&&"chart"!==c&&(a.destroy?a.destroy():a.nodeType&&y(this[c]));a!==B.prototype[c]&&(b[c]=null);},this);}};G.prototype.toFixedRange=function(a,b,c,e){var g=this.chart&&this.chart.fixedRange;a=f(c,this.translate(a,!0,!this.horiz));b=f(e,this.translate(b,!0,!this.horiz));c=g&&(b-a)/g;.7<c&&1.3>c&&(e?a=b-g:b=a+g);t(a)&&t(b)||(a=
    b=void 0);return {min:a,max:b}};G.prototype.minFromRange=function(){var a=this.range,b={month:"Month",year:"FullYear"}[a.type],c,e=this.max,g,h,l=function(a,c){var d=new Date(a),e=d["get"+b]();d["set"+b](e+c);e===d["get"+b]()&&d.setDate(0);return d.getTime()-a};t(a)?(c=e-a,h=a):(c=e+l(e,-a.count),this.chart&&(this.chart.fixedRange=e-c));g=f(this.dataMin,Number.MIN_VALUE);t(c)||(c=g);c<=g&&(c=g,void 0===h&&(h=l(c,a.count)),this.newMax=Math.min(c+h,this.dataMax));t(e)||(c=void 0);return c};C(p,"afterGetContainer",
    function(){this.options.rangeSelector.enabled&&(this.rangeSelector=new B(this));});w(p.prototype,"render",function(a,b,c){var e=this.axes,f=this.rangeSelector;f&&(l(e,function(a){a.updateNames();a.setScale();}),this.getAxisMargins(),f.render(),e=f.options.verticalAlign,f.options.floating||("bottom"===e?this.extraBottomMargin=!0:"middle"!==e&&(this.extraTopMargin=!0)));a.call(this,b,c);});C(p,"update",function(a){var b=a.options;a=this.rangeSelector;this.extraTopMargin=this.extraBottomMargin=!1;this.isDirtyBox=
    !0;a&&(a.render(),b=b.rangeSelector&&b.rangeSelector.verticalAlign||a.options&&a.options.verticalAlign,a.options.floating||("bottom"===b?this.extraBottomMargin=!0:"middle"!==b&&(this.extraTopMargin=!0)));});w(p.prototype,"redraw",function(a,b,c){var e=this.rangeSelector;e&&!e.options.floating&&(e.render(),e=e.options.verticalAlign,"bottom"===e?this.extraBottomMargin=!0:"middle"!==e&&(this.extraTopMargin=!0));a.call(this,b,c);});p.prototype.adjustPlotArea=function(){var a=this.rangeSelector;this.rangeSelector&&
    (a=a.getHeight(),this.extraTopMargin&&(this.plotTop+=a),this.extraBottomMargin&&(this.marginBottom+=a));};p.prototype.callbacks.push(function(a){function b(){c=a.xAxis[0].getExtremes();t(c.min)&&e.render(c.min,c.max);}var c,e=a.rangeSelector,f,g;e&&(g=C(a.xAxis[0],"afterSetExtremes",function(a){e.render(a.min,a.max);}),f=C(a,"redraw",b),b());C(a,"destroy",function(){e&&(f(),g());});});a.RangeSelector=B;})(L);(function(a){var B=a.addEvent,C=a.arrayMax,G=a.arrayMin,p=a.Axis,m=a.Chart,g=a.defined,v=a.each,
    z=a.extend,u=a.format,y=a.grep,l=a.inArray,b=a.isNumber,e=a.isString,t=a.map,n=a.merge,f=a.pick,c=a.Point,h=a.Renderer,w=a.Series,D=a.splat,r=a.SVGRenderer,J=a.VMLRenderer,q=a.wrap,F=w.prototype,x=F.init,K=F.processData,d=c.prototype.tooltipFormatter;a.StockChart=a.stockChart=function(b,c,d){var g=e(b)||b.nodeName,k=arguments[g?1:0],h=k.series,l=a.getOptions(),p,q=f(k.navigator&&k.navigator.enabled,l.navigator.enabled,!0),r=q?{startOnTick:!1,endOnTick:!1}:null,u={marker:{enabled:!1,radius:2}},v={shadow:!1,
    borderWidth:0};k.xAxis=t(D(k.xAxis||{}),function(a,b){return n({minPadding:0,maxPadding:0,overscroll:0,ordinal:!0,title:{text:null},labels:{overflow:"justify"},showLastLabel:!0},l.xAxis,l.xAxis&&l.xAxis[b],a,{type:"datetime",categories:null},r)});k.yAxis=t(D(k.yAxis||{}),function(a,b){p=f(a.opposite,!0);return n({labels:{y:-2},opposite:p,showLastLabel:!(!a.categories&&"category"!==a.type),title:{text:null}},l.yAxis,l.yAxis&&l.yAxis[b],a)});k.series=null;k=n({chart:{panning:!0,pinchType:"x"},navigator:{enabled:q},
    scrollbar:{enabled:f(l.scrollbar.enabled,!0)},rangeSelector:{enabled:f(l.rangeSelector.enabled,!0)},title:{text:null},tooltip:{split:f(l.tooltip.split,!0),crosshairs:!0},legend:{enabled:!1},plotOptions:{line:u,spline:u,area:u,areaspline:u,arearange:u,areasplinerange:u,column:v,columnrange:v,candlestick:v,ohlc:v}},k,{isStock:!0});k.series=h;return g?new m(b,k,d):new m(k,c)};q(p.prototype,"autoLabelAlign",function(a){var b=this.chart,c=this.options,b=b._labelPanes=b._labelPanes||{},d=this.options.labels;
    return this.chart.options.isStock&&"yAxis"===this.coll&&(c=c.top+","+c.height,!b[c]&&d.enabled)?(15===d.x&&(d.x=0),void 0===d.align&&(d.align="right"),b[c]=this,"right"):a.apply(this,[].slice.call(arguments,1))});B(p,"destroy",function(){var a=this.chart,b=this.options&&this.options.top+","+this.options.height;b&&a._labelPanes&&a._labelPanes[b]===this&&delete a._labelPanes[b];});q(p.prototype,"getPlotLinePath",function(c,d,k,h,m,n){var p=this,q=this.isLinked&&!this.series?this.linkedParent.series:
    this.series,r=p.chart,u=r.renderer,w=p.left,x=p.top,y,A,z,E,B=[],D=[],C,H;if("xAxis"!==p.coll&&"yAxis"!==p.coll)return c.apply(this,[].slice.call(arguments,1));D=function(a){var c="xAxis"===a?"yAxis":"xAxis";a=p.options[c];return b(a)?[r[c][a]]:e(a)?[r.get(a)]:t(q,function(a){return a[c]})}(p.coll);v(p.isXAxis?r.yAxis:r.xAxis,function(a){if(g(a.options.id)?-1===a.options.id.indexOf("navigator"):1){var b=a.isXAxis?"yAxis":"xAxis",b=g(a.options[b])?r[b][a.options[b]]:r[b][0];p===b&&D.push(a);}});C=D.length?
    []:[p.isXAxis?r.yAxis[0]:r.xAxis[0]];v(D,function(b){-1!==l(b,C)||a.find(C,function(a){return a.pos===b.pos&&a.len&&b.len})||C.push(b);});H=f(n,p.translate(d,null,null,h));b(H)&&(p.horiz?v(C,function(a){var b;A=a.pos;E=A+a.len;y=z=Math.round(H+p.transB);if(y<w||y>w+p.width)m?y=z=Math.min(Math.max(w,y),w+p.width):b=!0;b||B.push("M",y,A,"L",z,E);}):v(C,function(a){var b;y=a.pos;z=y+a.len;A=E=Math.round(x+p.height-H);if(A<x||A>x+p.height)m?A=E=Math.min(Math.max(x,A),p.top+p.height):b=!0;b||B.push("M",
    y,A,"L",z,E);}));return 0<B.length?u.crispPolyLine(B,k||1):null});r.prototype.crispPolyLine=function(a,b){var c;for(c=0;c<a.length;c+=6)a[c+1]===a[c+4]&&(a[c+1]=a[c+4]=Math.round(a[c+1])-b%2/2),a[c+2]===a[c+5]&&(a[c+2]=a[c+5]=Math.round(a[c+2])+b%2/2);return a};h===J&&(J.prototype.crispPolyLine=r.prototype.crispPolyLine);q(p.prototype,"hideCrosshair",function(a,b){a.call(this,b);this.crossLabel&&(this.crossLabel=this.crossLabel.hide());});B(p,"afterDrawCrosshair",function(a){var b,c;if(g(this.crosshair.label)&&
    this.crosshair.label.enabled&&this.cross){var d=this.chart,e=this.options.crosshair.label,h=this.horiz;b=this.opposite;c=this.left;var l=this.top,m=this.crossLabel,n=e.format,p="",q="inside"===this.options.tickPosition,r=!1!==this.crosshair.snap,t=0,v=a.e||this.cross&&this.cross.e,w=a.point;a=h?"center":b?"right"===this.labelAlign?"right":"left":"left"===this.labelAlign?"left":"center";m||(m=this.crossLabel=d.renderer.label(null,null,null,e.shape||"callout").addClass("highcharts-crosshair-label"+
    (this.series[0]&&" highcharts-color-"+this.series[0].colorIndex)).attr({align:e.align||a,padding:f(e.padding,8),r:f(e.borderRadius,3),zIndex:2}).add(this.labelGroup),m.attr({fill:e.backgroundColor||this.series[0]&&this.series[0].color||"#666666",stroke:e.borderColor||"","stroke-width":e.borderWidth||0}).css(z({color:"#ffffff",fontWeight:"normal",fontSize:"11px",textAlign:"center"},e.style)));h?(a=r?w.plotX+c:v.chartX,l+=b?0:this.height):(a=b?this.width+c:0,l=r?w.plotY+l:v.chartY);n||e.formatter||
    (this.isDatetimeAxis&&(p="%b %d, %Y"),n="{value"+(p?":"+p:"")+"}");p=r?w[this.isXAxis?"x":"y"]:this.toValue(h?v.chartX:v.chartY);m.attr({text:n?u(n,{value:p},d.time):e.formatter.call(this,p),x:a,y:l,visibility:p<this.min||p>this.max?"hidden":"visible"});e=m.getBBox();if(h){if(q&&!b||!q&&b)l=m.y-e.height;}else l=m.y-e.height/2;h?(b=c-e.x,c=c+this.width-e.x):(b="left"===this.labelAlign?c:0,c="right"===this.labelAlign?c+this.width:d.chartWidth);m.translateX<b&&(t=b-m.translateX);m.translateX+e.width>=
    c&&(t=-(m.translateX+e.width-c));m.attr({x:a+t,y:l,anchorX:h?a:this.opposite?0:d.chartWidth,anchorY:h?this.opposite?d.chartHeight:0:l+e.height/2});}});F.init=function(){x.apply(this,arguments);this.setCompare(this.options.compare);};F.setCompare=function(a){this.modifyValue="value"===a||"percent"===a?function(b,c){var d=this.compareValue;if(void 0!==b&&void 0!==d)return b="value"===a?b-d:b/d*100-(100===this.options.compareBase?0:100),c&&(c.change=b),b}:null;this.userOptions.compare=a;this.chart.hasRendered&&
    (this.isDirty=!0);};F.processData=function(){var a,c=-1,d,e,f=!0===this.options.compareStart?0:1,g,h;K.apply(this,arguments);if(this.xAxis&&this.processedYData)for(d=this.processedXData,e=this.processedYData,g=e.length,this.pointArrayMap&&(c=l("close",this.pointArrayMap),-1===c&&(c=l(this.pointValKey||"y",this.pointArrayMap))),a=0;a<g-f;a++)if(h=e[a]&&-1<c?e[a][c]:e[a],b(h)&&d[a+f]>=this.xAxis.min&&0!==h){this.compareValue=h;break}};q(F,"getExtremes",function(a){var b;a.apply(this,[].slice.call(arguments,
    1));this.modifyValue&&(b=[this.modifyValue(this.dataMin),this.modifyValue(this.dataMax)],this.dataMin=G(b),this.dataMax=C(b));});p.prototype.setCompare=function(a,b){this.isXAxis||(v(this.series,function(b){b.setCompare(a);}),f(b,!0)&&this.chart.redraw());};c.prototype.tooltipFormatter=function(b){b=b.replace("{point.change}",(0<this.change?"+":"")+a.numberFormat(this.change,f(this.series.tooltipOptions.changeDecimals,2)));return d.apply(this,[b])};q(w.prototype,"render",function(a){this.chart.is3d&&
    this.chart.is3d()||this.chart.polar||!this.xAxis||this.xAxis.isRadial||(!this.clipBox&&this.animate?(this.clipBox=n(this.chart.clipBox),this.clipBox.width=this.xAxis.len,this.clipBox.height=this.yAxis.len):this.chart[this.sharedClipKey]?this.chart[this.sharedClipKey].attr({width:this.xAxis.len,height:this.yAxis.len}):this.clipBox&&(this.clipBox.width=this.xAxis.len,this.clipBox.height=this.yAxis.len));a.call(this);});q(m.prototype,"getSelectedPoints",function(a){var b=a.call(this);v(this.series,function(a){a.hasGroupedData&&
    (b=b.concat(y(a.points||[],function(a){return a.selected})));});return b});B(m,"update",function(a){a=a.options;"scrollbar"in a&&this.navigator&&(n(!0,this.options.scrollbar,a.scrollbar),this.navigator.update({},!1),delete a.scrollbar);});})(L);return L});
    });

    const highcharts$1 = highcharts;
    const highstock$1 = highstock;

    var hookCallback;

    function hooks () {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback (callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
    }

    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return input != null && Object.prototype.toString.call(input) === '[object Object]';
    }

    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
            return (Object.getOwnPropertyNames(obj).length === 0);
        } else {
            var k;
            for (k in obj) {
                if (obj.hasOwnProperty(k)) {
                    return false;
                }
            }
            return true;
        }
    }

    function isUndefined(input) {
        return input === void 0;
    }

    function isNumber(input) {
        return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
    }

    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }

    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function createUTC (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty           : false,
            unusedTokens    : [],
            unusedInput     : [],
            overflow        : -2,
            charsLeftOver   : 0,
            nullInput       : false,
            invalidMonth    : null,
            invalidFormat   : false,
            userInvalidated : false,
            iso             : false,
            parsedDateParts : [],
            meridiem        : null,
            rfc2822         : false,
            weekdayMismatch : false
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    var some;
    if (Array.prototype.some) {
        some = Array.prototype.some;
    } else {
        some = function (fun) {
            var t = Object(this);
            var len = t.length >>> 0;

            for (var i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                }
            }

            return false;
        };
    }

    function isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m);
            var parsedParts = some.call(flags.parsedDateParts, function (i) {
                return i != null;
            });
            var isNowValid = !isNaN(m._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.weekdayMismatch &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated &&
                (!flags.meridiem || (flags.meridiem && parsedParts));

            if (m._strict) {
                isNowValid = isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }

            if (Object.isFrozen == null || !Object.isFrozen(m)) {
                m._isValid = isNowValid;
            }
            else {
                return isNowValid;
            }
        }
        return m._isValid;
    }

    function createInvalid (flags) {
        var m = createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        }
        else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = hooks.momentProperties = [];

    function copyConfig(to, from) {
        var i, prop, val;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i = 0; i < momentProperties.length; i++) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    var updateInProgress = false;

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
            this._d = new Date(NaN);
        }
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment (obj) {
        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
    }

    function absFloor (number) {
        if (number < 0) {
            // -0 -> 0
            return Math.ceil(number) || 0;
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false &&
                (typeof console !==  'undefined') && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
                var args = [];
                var arg;
                for (var i = 0; i < arguments.length; i++) {
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                        arg += '\n[' + i + '] ';
                        for (var key in arguments[0]) {
                            arg += key + ': ' + arguments[0][key] + ', ';
                        }
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else {
                        arg = arguments[i];
                    }
                    args.push(arg);
                }
                warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;

    function isFunction(input) {
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }

    function set (config) {
        var prop, i;
        for (i in config) {
            prop = config[i];
            if (isFunction(prop)) {
                this[i] = prop;
            } else {
                this['_' + i] = prop;
            }
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
                '|' + (/\d{1,2}/).source);
    }

    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig), prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                } else {
                    delete res[prop];
                }
            }
        }
        for (prop in parentConfig) {
            if (hasOwnProp(parentConfig, prop) &&
                    !hasOwnProp(childConfig, prop) &&
                    isObject(parentConfig[prop])) {
                // make sure changes to properties don't modify parent config
                res[prop] = extend({}, res[prop]);
            }
        }
        return res;
    }

    function Locale(config) {
        if (config != null) {
            this.set(config);
        }
    }

    var keys;

    if (Object.keys) {
        keys = Object.keys;
    } else {
        keys = function (obj) {
            var i, res = [];
            for (i in obj) {
                if (hasOwnProp(obj, i)) {
                    res.push(i);
                }
            }
            return res;
        };
    }

    var defaultCalendar = {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    };

    function calendar (key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    var defaultLongDateFormat = {
        LTS  : 'h:mm:ss A',
        LT   : 'h:mm A',
        L    : 'MM/DD/YYYY',
        LL   : 'MMMM D, YYYY',
        LLL  : 'MMMM D, YYYY h:mm A',
        LLLL : 'dddd, MMMM D, YYYY h:mm A'
    };

    function longDateFormat (key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate () {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d';
    var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

    function ordinal (number) {
        return this._ordinal.replace('%d', number);
    }

    var defaultRelativeTime = {
        future : 'in %s',
        past   : '%s ago',
        s  : 'a few seconds',
        ss : '%d seconds',
        m  : 'a minute',
        mm : '%d minutes',
        h  : 'an hour',
        hh : '%d hours',
        d  : 'a day',
        dd : '%d days',
        M  : 'a month',
        MM : '%d months',
        y  : 'a year',
        yy : '%d years'
    };

    function relativeTime (number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return (isFunction(output)) ?
            output(number, withoutSuffix, string, isFuture) :
            output.replace(/%d/i, number);
    }

    function pastFuture (diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var aliases = {};

    function addUnitAlias (unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    var priorities = {};

    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }

    function getPrioritizedUnits(unitsObj) {
        var units = [];
        for (var u in unitsObj) {
            units.push({unit: u, priority: priorities[u]});
        }
        units.sort(function (a, b) {
            return a.priority - b.priority;
        });
        return units;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

    var formatFunctions = {};

    var formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken (token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(func.apply(this, arguments), token);
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '', i;
            for (i = 0; i < length; i++) {
                output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var match1         = /\d/;            //       0 - 9
    var match2         = /\d\d/;          //      00 - 99
    var match3         = /\d{3}/;         //     000 - 999
    var match4         = /\d{4}/;         //    0000 - 9999
    var match6         = /[+-]?\d{6}/;    // -999999 - 999999
    var match1to2      = /\d\d?/;         //       0 - 99
    var match3to4      = /\d\d\d\d?/;     //     999 - 9999
    var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
    var match1to3      = /\d{1,3}/;       //       0 - 999
    var match1to4      = /\d{1,4}/;       //       0 - 9999
    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

    var matchUnsigned  = /\d+/;           //       0 - inf
    var matchSigned    = /[+-]?\d+/;      //    -inf - inf

    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

    var regexes = {};

    function addRegexToken (token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
            return (isStrict && strictRegex) ? strictRegex : regex;
        };
    }

    function getParseRegexForToken (token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }));
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken (token, callback) {
        var i, func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (isNumber(callback)) {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken (token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;
    var WEEK = 7;
    var WEEKDAY = 8;

    // FORMATTING

    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? '' + y : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY',   4],       0, 'year');
    addFormatToken(0, ['YYYYY',  5],       0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PRIORITIES

    addUnitPriority('year', 1);

    // PARSING

    addRegexToken('Y',      matchSigned);
    addRegexToken('YY',     match1to2, match2);
    addRegexToken('YYYY',   match1to4, match4);
    addRegexToken('YYYYY',  match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    // HOOKS

    hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear () {
        return isLeapYear(this.year());
    }

    function makeGetSet (unit, keepTime) {
        return function (value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get(this, unit);
            }
        };
    }

    function get (mom, unit) {
        return mom.isValid() ?
            mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
    }

    function set$1 (mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
            if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
            }
            else {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
            }
        }
    }

    // MOMENTS

    function stringGet (units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units]();
        }
        return this;
    }


    function stringSet (units, value) {
        if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units);
            for (var i = 0; i < prioritized.length; i++) {
                this[prioritized[i].unit](units[prioritized[i].unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    function mod(n, x) {
        return ((n % x) + x) % x;
    }

    var indexOf;

    if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (o) {
            // I know
            var i;
            for (i = 0; i < this.length; ++i) {
                if (this[i] === o) {
                    return i;
                }
            }
            return -1;
        };
    }

    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
            return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1 ? (isLeapYear(year) ? 29 : 28) : (31 - modMonth % 7 % 2);
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PRIORITY

    addUnitPriority('month', 8);

    // PARSING

    addRegexToken('M',    match1to2);
    addRegexToken('MM',   match1to2, match2);
    addRegexToken('MMM',  function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths (m, format) {
        if (!m) {
            return isArray(this._months) ? this._months :
                this._months['standalone'];
        }
        return isArray(this._months) ? this._months[m.month()] :
            this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
    }

    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    function localeMonthsShort (m, format) {
        if (!m) {
            return isArray(this._monthsShort) ? this._monthsShort :
                this._monthsShort['standalone'];
        }
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
            this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }

    function handleStrictParse(monthName, format, strict) {
        var i, ii, mom, llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = createUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeMonthsParse (monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                return i;
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth (mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
            // No op
            return mom;
        }

        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
                value = toInt(value);
            } else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) {
                    return mom;
                }
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth (value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else {
            return get(this, 'Month');
        }
    }

    function getDaysInMonth () {
        return daysInMonth(this.year(), this.month());
    }

    var defaultMonthsShortRegex = matchWord;
    function monthsShortRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
                this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict ?
                this._monthsShortStrictRegex : this._monthsShortRegex;
        }
    }

    var defaultMonthsRegex = matchWord;
    function monthsRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict ?
                this._monthsStrictRegex : this._monthsRegex;
        }
    }

    function computeMonthsParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    }

    function createDate (y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date = new Date(y, m, d, h, M, s, ms);

        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
            date.setFullYear(y);
        }
        return date;
    }

    function createUTCDate (y) {
        var date = new Date(Date.UTC.apply(null, arguments));

        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
            date.setUTCFullYear(y);
        }
        return date;
    }

    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear, resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek, resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    // FORMATTING

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PRIORITIES

    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);

    // PARSING

    addRegexToken('w',  match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W',  match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });

    // HELPERS

    // LOCALES

    function localeWeek (mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    };

    function localeFirstDayOfWeek () {
        return this._week.dow;
    }

    function localeFirstDayOfYear () {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek (input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek (input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    // FORMATTING

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PRIORITY
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);

    // PARSING

    addRegexToken('d',    match1to2);
    addRegexToken('e',    match1to2);
    addRegexToken('E',    match1to2);
    addRegexToken('dd',   function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd',   function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd',   function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
    }

    // LOCALES

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    function localeWeekdays (m, format) {
        if (!m) {
            return isArray(this._weekdays) ? this._weekdays :
                this._weekdays['standalone'];
        }
        return isArray(this._weekdays) ? this._weekdays[m.day()] :
            this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
    }

    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    function localeWeekdaysShort (m) {
        return (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
    }

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    function localeWeekdaysMin (m) {
        return (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
    }

    function handleStrictParse$1(weekdayName, format, strict) {
        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            for (i = 0; i < 7; ++i) {
                mom = createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeWeekdaysParse (weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already

            mom = createUTC([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }

        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.

        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
            return this.day() || 7;
        }
    }

    var defaultWeekdaysRegex = matchWord;
    function weekdaysRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            } else {
                return this._weekdaysRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict ?
                this._weekdaysStrictRegex : this._weekdaysRegex;
        }
    }

    var defaultWeekdaysShortRegex = matchWord;
    function weekdaysShortRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            } else {
                return this._weekdaysShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict ?
                this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
    }

    var defaultWeekdaysMinRegex = matchWord;
    function weekdaysMinRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            } else {
                return this._weekdaysMinRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict ?
                this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
    }


    function computeWeekdaysParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom, minp, shortp, longp;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, 1]).day(i);
            minp = this.weekdaysMin(mom, '');
            shortp = this.weekdaysShort(mom, '');
            longp = this.weekdays(mom, '');
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 7; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;

        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
    }

    // FORMATTING

    function hFormat() {
        return this.hours() % 12 || 12;
    }

    function kFormat() {
        return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);

    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    function meridiem (token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PRIORITY
    addUnitPriority('hour', 13);

    // PARSING

    function matchMeridiem (isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a',  matchMeridiem);
    addRegexToken('A',  matchMeridiem);
    addRegexToken('H',  match1to2);
    addRegexToken('h',  match1to2);
    addRegexToken('k',  match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function (input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });

    // LOCALES

    function localeIsPM (input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return ((input + '').toLowerCase().charAt(0) === 'p');
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    function localeMeridiem (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }


    // MOMENTS

    // Setting the hour should keep the time, because the user explicitly
    // specified which hour they want. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    var getSetHour = makeGetSet('Hours', true);

    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,

        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,

        week: defaultLocaleWeek,

        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,

        meridiemParse: defaultLocaleMeridiemParse
    };

    // internal storage for locale config files
    var locales = {};
    var localeFamilies = {};
    var globalLocale;

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return globalLocale;
    }

    function loadLocale(name) {
        var oldLocale = null;
        // TODO: Find a better way to register and load all the locales in Node
        if (!locales[name] && (typeof module !== 'undefined') &&
                module && module.exports) {
            try {
                oldLocale = globalLocale._abbr;
                var aliasedRequire = require;
                aliasedRequire('./locale/' + name);
                getSetGlobalLocale(oldLocale);
            } catch (e) {}
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function getSetGlobalLocale (key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = getLocale(key);
            }
            else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            }
            else {
                if ((typeof console !==  'undefined') && console.warn) {
                    //warn user if arguments are passed but the locale could not be set
                    console.warn('Locale ' + key +  ' not found. Did you forget to load it?');
                }
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale (name, config) {
        if (config !== null) {
            var locale, parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple('defineLocaleOverride',
                        'use moment.updateLocale(localeName, config) to change ' +
                        'an existing locale. moment.defineLocale(localeName, ' +
                        'config) should only be used for creating a new locale ' +
                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                    parentConfig = locales[config.parentLocale]._config;
                } else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) {
                        parentConfig = locale._config;
                    } else {
                        if (!localeFamilies[config.parentLocale]) {
                            localeFamilies[config.parentLocale] = [];
                        }
                        localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config
                        });
                        return null;
                    }
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));

            if (localeFamilies[name]) {
                localeFamilies[name].forEach(function (x) {
                    defineLocale(x.name, x.config);
                });
            }

            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            getSetGlobalLocale(name);


            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    function updateLocale(name, config) {
        if (config != null) {
            var locale, tmpLocale, parentConfig = baseConfig;
            // MERGE
            tmpLocale = loadLocale(name);
            if (tmpLocale != null) {
                parentConfig = tmpLocale._config;
            }
            config = mergeConfigs(parentConfig, config);
            locale = new Locale(config);
            locale.parentLocale = locales[name];
            locales[name] = locale;

            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        } else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                } else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }

    // returns locale data
    function getLocale (key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    function listLocales() {
        return keys(locales);
    }

    function checkOverflow (m) {
        var overflow;
        var a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray (config) {
        var i, date, input = [], currentDate, expectedWeekday, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
                config._a[MINUTE] === 0 &&
                config._a[SECOND] === 0 &&
                config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();

        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }

        // check for mismatching day of week
        if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
            getParsingFlags(config).weekdayMismatch = true;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            var curWeek = weekOfYear(createLocal(), dow, doy);

            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

            // Default to current week.
            week = defaults(w.w, curWeek.week);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from begining of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                // default to begining of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

    var isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
        ['YYYY-DDD', /\d{4}-\d{3}/],
        ['YYYY-MM', /\d{4}-\d\d/, false],
        ['YYYYYYMMDD', /[+-]\d{10}/],
        ['YYYYMMDD', /\d{8}/],
        // YYYYMM is NOT allowed by the standard
        ['GGGG[W]WWE', /\d{4}W\d{3}/],
        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
        ['YYYYDDD', /\d{7}/]
    ];

    // iso time formats and regexes
    var isoTimes = [
        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
        ['HH:mm', /\d\d:\d\d/],
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
        ['HHmmss', /\d\d\d\d\d\d/],
        ['HHmm', /\d\d\d\d/],
        ['HH', /\d\d/]
    ];

    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

    // date from iso format
    function configFromISO(config) {
        var i, l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime, dateFormat, timeFormat, tzFormat;

        if (match) {
            getParsingFlags(config).iso = true;

            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
    var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10)
        ];

        if (secondStr) {
            result.push(parseInt(secondStr, 10));
        }

        return result;
    }

    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
            return 2000 + year;
        } else if (year <= 999) {
            return 1900 + year;
        }
        return year;
    }

    function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }

    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }

    var obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
    };

    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
            return obsOffsets[obsOffset];
        } else if (militaryOffset) {
            // the only allowed military tz is Z
            return 0;
        } else {
            var hm = parseInt(numOffset, 10);
            var m = hm % 100, h = (hm - m) / 100;
            return h * 60 + m;
        }
    }

    // date and time from ref 2822 format
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i));
        if (match) {
            var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
            if (!checkWeekday(match[1], parsedArray, config)) {
                return;
            }

            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);

            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

            getParsingFlags(config).rfc2822 = true;
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        configFromRFC2822(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        // Final attempt, use Input Fallback
        hooks.createFromInputFallback(config);
    }

    hooks.createFromInputFallback = deprecate(
        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
        'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
        'discouraged and will be removed in an upcoming major release. Please refer to ' +
        'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    // constant that refers to the ISO standard
    hooks.ISO_8601 = function () {};

    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            // console.log('token', token, 'parsedInput', parsedInput,
            //         'regex', getParseRegexForToken(token, config));
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                }
                else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (config._a[HOUR] <= 12 &&
            getParsingFlags(config).bigHour === true &&
            config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

        configFromArray(config);
        checkOverflow(config);
    }


    function meridiemFixWrap (locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (!isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i);
        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
            return obj && parseInt(obj, 10);
        });

        configFromArray(config);
    }

    function createFromConfig (config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig (config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return createInvalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
            config._d = input;
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        }  else {
            configFromInput(config);
        }

        if (!isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
            config._d = new Date(hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) {
            configFromObject(config);
        } else if (isNumber(input)) {
            // from milliseconds
            config._d = new Date(input);
        } else {
            hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC (input, format, locale, strict, isUTC) {
        var c = {};

        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }

        if ((isObject(input) && isObjectEmpty(input)) ||
                (isArray(input) && input.length === 0)) {
            input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function createLocal (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
        'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other < this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    var prototypeMax = deprecate(
        'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other > this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function () {
        return Date.now ? Date.now() : +(new Date());
    };

    var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

    function isDurationValid(m) {
        for (var key in m) {
            if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
                return false;
            }
        }

        var unitHasDecimal = false;
        for (var i = 0; i < ordering.length; ++i) {
            if (m[ordering[i]]) {
                if (unitHasDecimal) {
                    return false; // only allow non-integers for smallest unit
                }
                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                    unitHasDecimal = true;
                }
            }
        }

        return true;
    }

    function isValid$1() {
        return this._isValid;
    }

    function createInvalid$1() {
        return createDuration(NaN);
    }

    function Duration (duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        this._isValid = isDurationValid(normalizedInput);

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = getLocale();

        this._bubble();
    }

    function isDuration (obj) {
        return obj instanceof Duration;
    }

    function absRound (number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        } else {
            return Math.round(number);
        }
    }

    // FORMATTING

    function offset (token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset();
            var sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z',  matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher);

        if (matches === null) {
            return null;
        }

        var chunk   = matches[matches.length - 1] || [];
        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);

        return minutes === 0 ?
          0 :
          parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else {
            return createLocal(input).local();
        }
    }

    function getDateOffset (m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset (input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) {
                    return this;
                }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    addSubtract(this, createDuration(input - offset, 'm'), 1, false);
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone (input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC (keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal (keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset () {
        if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
                this.utcOffset(tZone);
            }
            else {
                this.utcOffset(0, true);
            }
        }
        return this;
    }

    function hasAlignedHourOffset (input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime () {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted () {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {};

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted = this.isValid() &&
                compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal () {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset () {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc () {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    // ASP.NET json date format regex
    var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function createDuration (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms : input._milliseconds,
                d  : input._days,
                M  : input._months
            };
        } else if (isNumber(input)) {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y  : 0,
                d  : toInt(match[DATE])                         * sign,
                h  : toInt(match[HOUR])                         * sign,
                m  : toInt(match[MINUTE])                       * sign,
                s  : toInt(match[SECOND])                       * sign,
                ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
            };
        } else if (!!(match = isoRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : (match[1] === '+') ? 1 : 1;
            duration = {
                y : parseIso(match[2], sign),
                M : parseIso(match[3], sign),
                w : parseIso(match[4], sign),
                d : parseIso(match[5], sign),
                h : parseIso(match[6], sign),
                m : parseIso(match[7], sign),
                s : parseIso(match[8], sign)
            };
        } else if (duration == null) {// checks for null or undefined
            duration = {};
        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    }

    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;

    function parseIso (inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {milliseconds: 0, months: 0};

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return {milliseconds: 0, months: 0};
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
                'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
                tmp = val; val = period; period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }

    function addSubtract (mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (months) {
            setMonth(mom, get(mom, 'Month') + months * isAdding);
        }
        if (days) {
            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }
        if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (updateOffset) {
            hooks.updateOffset(mom, days || months);
        }
    }

    var add      = createAdder(1, 'add');
    var subtract = createAdder(-1, 'subtract');

    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6 ? 'sameElse' :
                diff < -1 ? 'lastWeek' :
                diff < 0 ? 'lastDay' :
                diff < 1 ? 'sameDay' :
                diff < 2 ? 'nextDay' :
                diff < 7 ? 'nextWeek' : 'sameElse';
    }

    function calendar$1 (time, formats) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = hooks.calendarFormat(this, sod) || 'sameElse';

        var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

        return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
    }

    function clone () {
        return new Moment(this);
    }

    function isAfter (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
        if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
        } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
    }

    function isBefore (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
        if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
        } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
    }

    function isBetween (from, to, units, inclusivity) {
        inclusivity = inclusivity || '()';
        return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
            (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
    }

    function isSame (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units || 'millisecond');
        if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
        } else {
            inputMs = localInput.valueOf();
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
    }

    function isSameOrAfter (input, units) {
        return this.isSame(input, units) || this.isAfter(input,units);
    }

    function isSameOrBefore (input, units) {
        return this.isSame(input, units) || this.isBefore(input,units);
    }

    function diff (input, units, asFloat) {
        var that,
            zoneDelta,
            output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        switch (units) {
            case 'year': output = monthDiff(this, that) / 12; break;
            case 'month': output = monthDiff(this, that); break;
            case 'quarter': output = monthDiff(this, that) / 3; break;
            case 'second': output = (this - that) / 1e3; break; // 1000
            case 'minute': output = (this - that) / 6e4; break; // 1000 * 60
            case 'hour': output = (this - that) / 36e5; break; // 1000 * 60 * 60
            case 'day': output = (this - that - zoneDelta) / 864e5; break; // 1000 * 60 * 60 * 24, negate dst
            case 'week': output = (this - that - zoneDelta) / 6048e5; break; // 1000 * 60 * 60 * 24 * 7, negate dst
            default: output = this - that;
        }

        return asFloat ? output : absFloor(output);
    }

    function monthDiff (a, b) {
        // difference in months
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2, adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }

    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString () {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function toISOString(keepOffset) {
        if (!this.isValid()) {
            return null;
        }
        var utc = keepOffset !== true;
        var m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
        }
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) {
                return this.toDate().toISOString();
            } else {
                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
            }
        }
        return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }

    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
    function inspect () {
        if (!this.isValid()) {
            return 'moment.invalid(/* ' + this._i + ' */)';
        }
        var func = 'moment';
        var zone = '';
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        var prefix = '[' + func + '("]';
        var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
        var datetime = '-MM-DD[T]HH:mm:ss.SSS';
        var suffix = zone + '[")]';

        return this.format(prefix + year + datetime + suffix);
    }

    function format (inputString) {
        if (!inputString) {
            inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }

    function from (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 createLocal(time).isValid())) {
            return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow (withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }

    function to (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 createLocal(time).isValid())) {
            return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow (withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale (key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData () {
        return this._locale;
    }

    function startOf (units) {
        units = normalizeUnits(units);
        // the following switch intentionally omits break keywords
        // to utilize falling through the cases.
        switch (units) {
            case 'year':
                this.month(0);
                /* falls through */
            case 'quarter':
            case 'month':
                this.date(1);
                /* falls through */
            case 'week':
            case 'isoWeek':
            case 'day':
            case 'date':
                this.hours(0);
                /* falls through */
            case 'hour':
                this.minutes(0);
                /* falls through */
            case 'minute':
                this.seconds(0);
                /* falls through */
            case 'second':
                this.milliseconds(0);
        }

        // weeks are a special case
        if (units === 'week') {
            this.weekday(0);
        }
        if (units === 'isoWeek') {
            this.isoWeekday(1);
        }

        // quarters are also special
        if (units === 'quarter') {
            this.month(Math.floor(this.month() / 3) * 3);
        }

        return this;
    }

    function endOf (units) {
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond') {
            return this;
        }

        // 'date' is an alias for 'day', so it should be considered as such.
        if (units === 'date') {
            units = 'day';
        }

        return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
    }

    function valueOf () {
        return this._d.valueOf() - ((this._offset || 0) * 60000);
    }

    function unix () {
        return Math.floor(this.valueOf() / 1000);
    }

    function toDate () {
        return new Date(this.valueOf());
    }

    function toArray () {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }

    function toObject () {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }

    function toJSON () {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }

    function isValid$2 () {
        return isValid(this);
    }

    function parsingFlags () {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt () {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }

    // FORMATTING

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken (token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg',     'weekYear');
    addWeekYearFormatToken('ggggg',    'weekYear');
    addWeekYearFormatToken('GGGG',  'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PRIORITY

    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);


    // PARSING

    addRegexToken('G',      matchSigned);
    addRegexToken('g',      matchSigned);
    addRegexToken('GG',     match1to2, match2);
    addRegexToken('gg',     match1to2, match2);
    addRegexToken('GGGG',   match1to4, match4);
    addRegexToken('gggg',   match1to4, match4);
    addRegexToken('GGGGG',  match1to6, match6);
    addRegexToken('ggggg',  match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input,
                this.week(),
                this.weekday(),
                this.localeData()._week.dow,
                this.localeData()._week.doy);
    }

    function getSetISOWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }

    function getISOWeeksInYear () {
        return weeksInYear(this.year(), 1, 4);
    }

    function getWeeksInYear () {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

    // FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PRIORITY

    addUnitPriority('quarter', 7);

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter (input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }

    // FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PRIORITY
    addUnitPriority('date', 9);

    // PARSING

    addRegexToken('D',  match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict ?
          (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
          locale._dayOfMonthOrdinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PRIORITY
    addUnitPriority('dayOfYear', 4);

    // PARSING

    addRegexToken('DDD',  match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear (input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
    }

    // FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PRIORITY

    addUnitPriority('minute', 14);

    // PARSING

    addRegexToken('m',  match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PRIORITY

    addUnitPriority('second', 15);

    // PARSING

    addRegexToken('s',  match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    // FORMATTING

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });


    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PRIORITY

    addUnitPriority('millisecond', 16);

    // PARSING

    addRegexToken('S',    match1to3, match1);
    addRegexToken('SS',   match1to3, match2);
    addRegexToken('SSS',  match1to3, match3);

    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
    // MOMENTS

    var getSetMillisecond = makeGetSet('Milliseconds', false);

    // FORMATTING

    addFormatToken('z',  0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr () {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName () {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var proto = Moment.prototype;

    proto.add               = add;
    proto.calendar          = calendar$1;
    proto.clone             = clone;
    proto.diff              = diff;
    proto.endOf             = endOf;
    proto.format            = format;
    proto.from              = from;
    proto.fromNow           = fromNow;
    proto.to                = to;
    proto.toNow             = toNow;
    proto.get               = stringGet;
    proto.invalidAt         = invalidAt;
    proto.isAfter           = isAfter;
    proto.isBefore          = isBefore;
    proto.isBetween         = isBetween;
    proto.isSame            = isSame;
    proto.isSameOrAfter     = isSameOrAfter;
    proto.isSameOrBefore    = isSameOrBefore;
    proto.isValid           = isValid$2;
    proto.lang              = lang;
    proto.locale            = locale;
    proto.localeData        = localeData;
    proto.max               = prototypeMax;
    proto.min               = prototypeMin;
    proto.parsingFlags      = parsingFlags;
    proto.set               = stringSet;
    proto.startOf           = startOf;
    proto.subtract          = subtract;
    proto.toArray           = toArray;
    proto.toObject          = toObject;
    proto.toDate            = toDate;
    proto.toISOString       = toISOString;
    proto.inspect           = inspect;
    proto.toJSON            = toJSON;
    proto.toString          = toString;
    proto.unix              = unix;
    proto.valueOf           = valueOf;
    proto.creationData      = creationData;
    proto.year       = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear    = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month       = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week           = proto.weeks        = getSetWeek;
    proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
    proto.weeksInYear    = getWeeksInYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.date       = getSetDayOfMonth;
    proto.day        = proto.days             = getSetDayOfWeek;
    proto.weekday    = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear  = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset            = getSetOffset;
    proto.utc                  = setOffsetToUTC;
    proto.local                = setOffsetToLocal;
    proto.parseZone            = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST                = isDaylightSavingTime;
    proto.isLocal              = isLocal;
    proto.isUtcOffset          = isUtcOffset;
    proto.isUtc                = isUtc;
    proto.isUTC                = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
    proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

    function createUnix (input) {
        return createLocal(input * 1000);
    }

    function createInZone () {
        return createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat (string) {
        return string;
    }

    var proto$1 = Locale.prototype;

    proto$1.calendar        = calendar;
    proto$1.longDateFormat  = longDateFormat;
    proto$1.invalidDate     = invalidDate;
    proto$1.ordinal         = ordinal;
    proto$1.preparse        = preParsePostFormat;
    proto$1.postformat      = preParsePostFormat;
    proto$1.relativeTime    = relativeTime;
    proto$1.pastFuture      = pastFuture;
    proto$1.set             = set;

    proto$1.months            =        localeMonths;
    proto$1.monthsShort       =        localeMonthsShort;
    proto$1.monthsParse       =        localeMonthsParse;
    proto$1.monthsRegex       = monthsRegex;
    proto$1.monthsShortRegex  = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

    proto$1.weekdays       =        localeWeekdays;
    proto$1.weekdaysMin    =        localeWeekdaysMin;
    proto$1.weekdaysShort  =        localeWeekdaysShort;
    proto$1.weekdaysParse  =        localeWeekdaysParse;

    proto$1.weekdaysRegex       =        weekdaysRegex;
    proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
    proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;

    function get$1 (format, index, field, setter) {
        var locale = getLocale();
        var utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function listMonthsImpl (format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return get$1(format, index, field, 'month');
        }

        var i;
        var out = [];
        for (i = 0; i < 12; i++) {
            out[i] = get$1(format, i, field, 'month');
        }
        return out;
    }

    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl (localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        }

        var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0;

        if (index != null) {
            return get$1(format, (index + shift) % 7, field, 'day');
        }

        var i;
        var out = [];
        for (i = 0; i < 7; i++) {
            out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }
        return out;
    }

    function listMonths (format, index) {
        return listMonthsImpl(format, index, 'months');
    }

    function listMonthsShort (format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }

    function listWeekdays (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function listWeekdaysShort (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function listWeekdaysMin (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    getSetGlobalLocale('en', {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    // Side effect imports

    hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
    hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

    var mathAbs = Math.abs;

    function abs () {
        var data           = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days         = mathAbs(this._days);
        this._months       = mathAbs(this._months);

        data.milliseconds  = mathAbs(data.milliseconds);
        data.seconds       = mathAbs(data.seconds);
        data.minutes       = mathAbs(data.minutes);
        data.hours         = mathAbs(data.hours);
        data.months        = mathAbs(data.months);
        data.years         = mathAbs(data.years);

        return this;
    }

    function addSubtract$1 (duration, input, value, direction) {
        var other = createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days         += direction * other._days;
        duration._months       += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1 (input, value) {
        return addSubtract$1(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1 (input, value) {
        return addSubtract$1(this, input, value, -1);
    }

    function absCeil (number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble () {
        var milliseconds = this._milliseconds;
        var days         = this._days;
        var months       = this._months;
        var data         = this._data;
        var seconds, minutes, hours, years, monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0))) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds           = absFloor(milliseconds / 1000);
        data.seconds      = seconds % 60;

        minutes           = absFloor(seconds / 60);
        data.minutes      = minutes % 60;

        hours             = absFloor(minutes / 60);
        data.hours        = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days   = days;
        data.months = months;
        data.years  = years;

        return this;
    }

    function daysToMonths (days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
    }

    function monthsToDays (months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
    }

    function as (units) {
        if (!this.isValid()) {
            return NaN;
        }
        var days;
        var months;
        var milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'year') {
            days   = this._days   + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            return units === 'month' ? months : months / 12;
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week'   : return days / 7     + milliseconds / 6048e5;
                case 'day'    : return days         + milliseconds / 864e5;
                case 'hour'   : return days * 24    + milliseconds / 36e5;
                case 'minute' : return days * 1440  + milliseconds / 6e4;
                case 'second' : return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
                default: throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function valueOf$1 () {
        if (!this.isValid()) {
            return NaN;
        }
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs (alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms');
    var asSeconds      = makeAs('s');
    var asMinutes      = makeAs('m');
    var asHours        = makeAs('h');
    var asDays         = makeAs('d');
    var asWeeks        = makeAs('w');
    var asMonths       = makeAs('M');
    var asYears        = makeAs('y');

    function clone$1 () {
        return createDuration(this);
    }

    function get$2 (units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
    }

    function makeGetter(name) {
        return function () {
            return this.isValid() ? this._data[name] : NaN;
        };
    }

    var milliseconds = makeGetter('milliseconds');
    var seconds      = makeGetter('seconds');
    var minutes      = makeGetter('minutes');
    var hours        = makeGetter('hours');
    var days         = makeGetter('days');
    var months       = makeGetter('months');
    var years        = makeGetter('years');

    function weeks () {
        return absFloor(this.days() / 7);
    }

    var round = Math.round;
    var thresholds = {
        ss: 44,         // a few seconds to seconds
        s : 45,         // seconds to minute
        m : 45,         // minutes to hour
        h : 22,         // hours to day
        d : 26,         // days to month
        M : 11          // months to year
    };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
        var duration = createDuration(posNegDuration).abs();
        var seconds  = round(duration.as('s'));
        var minutes  = round(duration.as('m'));
        var hours    = round(duration.as('h'));
        var days     = round(duration.as('d'));
        var months   = round(duration.as('M'));
        var years    = round(duration.as('y'));

        var a = seconds <= thresholds.ss && ['s', seconds]  ||
                seconds < thresholds.s   && ['ss', seconds] ||
                minutes <= 1             && ['m']           ||
                minutes < thresholds.m   && ['mm', minutes] ||
                hours   <= 1             && ['h']           ||
                hours   < thresholds.h   && ['hh', hours]   ||
                days    <= 1             && ['d']           ||
                days    < thresholds.d   && ['dd', days]    ||
                months  <= 1             && ['M']           ||
                months  < thresholds.M   && ['MM', months]  ||
                years   <= 1             && ['y']           || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding (roundingFunction) {
        if (roundingFunction === undefined) {
            return round;
        }
        if (typeof(roundingFunction) === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }

    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold (threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === 's') {
            thresholds.ss = limit - 1;
        }
        return true;
    }

    function humanize (withSuffix) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var locale = this.localeData();
        var output = relativeTime$1(this, !withSuffix, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var abs$1 = Math.abs;

    function sign(x) {
        return ((x > 0) - (x < 0)) || +x;
    }

    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var seconds = abs$1(this._milliseconds) / 1000;
        var days         = abs$1(this._days);
        var months       = abs$1(this._months);
        var minutes, hours, years;

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes           = absFloor(seconds / 60);
        hours             = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years  = absFloor(months / 12);
        months %= 12;


        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
        var total = this.asSeconds();

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        var totalSign = total < 0 ? '-' : '';
        var ymSign = sign(this._months) !== sign(total) ? '-' : '';
        var daysSign = sign(this._days) !== sign(total) ? '-' : '';
        var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

        return totalSign + 'P' +
            (Y ? ymSign + Y + 'Y' : '') +
            (M ? ymSign + M + 'M' : '') +
            (D ? daysSign + D + 'D' : '') +
            ((h || m || s) ? 'T' : '') +
            (h ? hmsSign + h + 'H' : '') +
            (m ? hmsSign + m + 'M' : '') +
            (s ? hmsSign + s + 'S' : '');
    }

    var proto$2 = Duration.prototype;

    proto$2.isValid        = isValid$1;
    proto$2.abs            = abs;
    proto$2.add            = add$1;
    proto$2.subtract       = subtract$1;
    proto$2.as             = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds      = asSeconds;
    proto$2.asMinutes      = asMinutes;
    proto$2.asHours        = asHours;
    proto$2.asDays         = asDays;
    proto$2.asWeeks        = asWeeks;
    proto$2.asMonths       = asMonths;
    proto$2.asYears        = asYears;
    proto$2.valueOf        = valueOf$1;
    proto$2._bubble        = bubble;
    proto$2.clone          = clone$1;
    proto$2.get            = get$2;
    proto$2.milliseconds   = milliseconds;
    proto$2.seconds        = seconds;
    proto$2.minutes        = minutes;
    proto$2.hours          = hours;
    proto$2.days           = days;
    proto$2.weeks          = weeks;
    proto$2.months         = months;
    proto$2.years          = years;
    proto$2.humanize       = humanize;
    proto$2.toISOString    = toISOString$1;
    proto$2.toString       = toISOString$1;
    proto$2.toJSON         = toISOString$1;
    proto$2.locale         = locale;
    proto$2.localeData     = localeData;

    proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
    proto$2.lang = lang;

    // Side effect imports

    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    // Side effect imports

    //! moment.js

    hooks.version = '2.22.2';

    setHookCallback(createLocal);

    hooks.fn                    = proto;
    hooks.min                   = min;
    hooks.max                   = max;
    hooks.now                   = now;
    hooks.utc                   = createUTC;
    hooks.unix                  = createUnix;
    hooks.months                = listMonths;
    hooks.isDate                = isDate;
    hooks.locale                = getSetGlobalLocale;
    hooks.invalid               = createInvalid;
    hooks.duration              = createDuration;
    hooks.isMoment              = isMoment;
    hooks.weekdays              = listWeekdays;
    hooks.parseZone             = createInZone;
    hooks.localeData            = getLocale;
    hooks.isDuration            = isDuration;
    hooks.monthsShort           = listMonthsShort;
    hooks.weekdaysMin           = listWeekdaysMin;
    hooks.defineLocale          = defineLocale;
    hooks.updateLocale          = updateLocale;
    hooks.locales               = listLocales;
    hooks.weekdaysShort         = listWeekdaysShort;
    hooks.normalizeUnits        = normalizeUnits;
    hooks.relativeTimeRounding  = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat        = getCalendarFormat;
    hooks.prototype             = proto;

    // currently HTML5 input type only supports 24-hour formats
    hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',             // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',  // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',   // <input type="datetime-local" step="0.001" />
        DATE: 'YYYY-MM-DD',                             // <input type="date" />
        TIME: 'HH:mm',                                  // <input type="time" />
        TIME_SECONDS: 'HH:mm:ss',                       // <input type="time" step="1" />
        TIME_MS: 'HH:mm:ss.SSS',                        // <input type="time" step="0.001" />
        WEEK: 'YYYY-[W]WW',                             // <input type="week" />
        MONTH: 'YYYY-MM'                                // <input type="month" />
    };

    const moment = hooks;

    /*
      This is temporarily commented out as the `setupConfig` method has been temporarily removed
    */
    Context.highcharts = highcharts$1;
    Context.highstock = highstock$1;
    Context.moment = moment;
})(resourcesUrl);


(function(resourcesUrl){
    /** @stencil/redux global **/

    Context.store = (function () {
        var _store;
        function setStore(store) {
            _store = store;
        }
        function getState() {
            return _store && _store.getState();
        }
        function getStore() {
            return _store;
        }
        function mapDispatchToProps(component, props) {
            Object.keys(props).forEach(function (actionName) {
                var action = props[actionName];
                Object.defineProperty(component, actionName, {
                    get: function () { return function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return action.apply(void 0, args)(_store.dispatch, _store.getState);
                    }; },
                    configurable: true,
                    enumerable: true
                });
            });
        }
        function mapStateToProps(component, mapState) {
            // TODO: Don't listen for each component
            var _mapStateToProps = function (_component, _mapState) {
                var mergeProps = mapState(_store.getState());
                Object.keys(mergeProps).forEach(function (newPropName) {
                    var newPropValue = mergeProps[newPropName];
                    component[newPropName] = newPropValue;
                    // TODO: can we define new props and still have change detection work?
                });
            };
            _store.subscribe(function () { return _mapStateToProps(component, mapState); });
            _mapStateToProps(component, mapState);
        }
        return {
            getStore: getStore,
            setStore: setStore,
            getState: getState,
            mapDispatchToProps: mapDispatchToProps,
            mapStateToProps: mapStateToProps
        };
    })();
})(resourcesUrl);


(function(resourcesUrl){
    /** @ionic/core global **/

    const PLATFORMS_MAP = {
        'ipad': isIpad,
        'iphone': isIphone,
        'ios': isIOS,
        'android': isAndroid,
        'phablet': isPhablet,
        'tablet': isTablet,
        'cordova': isCordova,
        'capacitor': isCapacitorNative,
        'electron': isElectron,
        'pwa': isPWA,
        'mobile': isMobile,
        'desktop': isDesktop,
        'hybrid': isHybrid
    };
    function getPlatforms(win) {
        return setupPlatforms(win);
    }
    function isPlatform(win, platform) {
        return getPlatforms(win).includes(platform);
    }
    function setupPlatforms(win) {
        win.Ionic = win.Ionic || {};
        let platforms = win.Ionic.platforms;
        if (platforms == null) {
            platforms = win.Ionic.platforms = detectPlatforms(win);
            const classList = win.document.documentElement.classList;
            platforms.forEach(p => classList.add(`plt-${p}`));
        }
        return platforms;
    }
    function detectPlatforms(win) {
        return Object.keys(PLATFORMS_MAP).filter(p => PLATFORMS_MAP[p](win));
    }
    function isIpad(win) {
        return testUserAgent(win, /iPad/i);
    }
    function isIphone(win) {
        return testUserAgent(win, /iPhone/i);
    }
    function isIOS(win) {
        return testUserAgent(win, /iPad|iPhone|iPod/i);
    }
    function isAndroid(win) {
        return testUserAgent(win, /android|sink/i);
    }
    function isPhablet(win) {
        const width = win.innerWidth;
        const height = win.innerHeight;
        const smallest = Math.min(width, height);
        const largest = Math.max(width, height);
        return (smallest > 390 && smallest < 520) &&
            (largest > 620 && largest < 800);
    }
    function isTablet(win) {
        const width = win.innerWidth;
        const height = win.innerHeight;
        const smallest = Math.min(width, height);
        const largest = Math.max(width, height);
        return (smallest > 460 && smallest < 820) &&
            (largest > 780 && largest < 1400);
    }
    function isMobile(win) {
        return matchMedia(win, '(any-pointer:coarse)');
    }
    function isDesktop(win) {
        return !isMobile(win);
    }
    function isHybrid(win) {
        return isCordova(win) || isCapacitorNative(win);
    }
    function isCordova(window) {
        const win = window;
        return !!(win['cordova'] || win['phonegap'] || win['PhoneGap']);
    }
    function isCapacitorNative(window) {
        const win = window;
        const capacitor = win['Capacitor'];
        return !!(capacitor && capacitor.isNative);
    }
    function isElectron(win) {
        return testUserAgent(win, /electron/);
    }
    function isPWA(win) {
        return win.matchMedia('(display-mode: standalone)').matches;
    }
    function testUserAgent(win, expr) {
        return expr.test(win.navigator.userAgent);
    }
    function matchMedia(win, query) {
        return win.matchMedia(query).matches;
    }

    class Config {
        constructor(configObj) {
            this.m = new Map(Object.entries(configObj));
        }
        get(key, fallback) {
            const value = this.m.get(key);
            return (value !== undefined) ? value : fallback;
        }
        getBoolean(key, fallback = false) {
            const val = this.m.get(key);
            if (val === undefined) {
                return fallback;
            }
            if (typeof val === 'string') {
                return val === 'true';
            }
            return !!val;
        }
        getNumber(key, fallback) {
            const val = parseFloat(this.m.get(key));
            return isNaN(val) ? (fallback !== undefined ? fallback : NaN) : val;
        }
        set(key, value) {
            this.m.set(key, value);
        }
    }
    function configFromSession() {
        try {
            const configStr = window.sessionStorage.getItem(IONIC_SESSION_KEY);
            return configStr !== null ? JSON.parse(configStr) : {};
        }
        catch (e) {
            return {};
        }
    }
    function saveConfig(config) {
        try {
            window.sessionStorage.setItem(IONIC_SESSION_KEY, JSON.stringify(config));
        }
        catch (e) {
            return;
        }
    }
    function configFromURL() {
        const config = {};
        const win = window;
        win.location.search.slice(1)
            .split('&')
            .map(entry => entry.split('='))
            .map(([key, value]) => [decodeURIComponent(key), decodeURIComponent(value)])
            .filter(([key]) => startsWith(key, IONIC_PREFIX))
            .map(([key, value]) => [key.slice(IONIC_PREFIX.length), value])
            .forEach(([key, value]) => {
            config[key] = value;
        });
        return config;
    }
    function startsWith(input, search) {
        return input.substr(0, search.length) === search;
    }
    const IONIC_PREFIX = 'ionic:';
    const IONIC_SESSION_KEY = 'ionic-persist-config';

    const win = window;
    const Ionic = win['Ionic'] = win['Ionic'] || {};
    Object.defineProperty(Ionic, 'queue', {
        get: () => Context['queue']
    });
    setupPlatforms(win);
    Context.isPlatform = isPlatform;
    const configObj = Object.assign({}, configFromSession(), { persistConfig: false }, Ionic['config'], configFromURL());
    const config = Ionic['config'] = Context['config'] = new Config(configObj);
    if (config.getBoolean('persistConfig')) {
        saveConfig(configObj);
    }
    const documentElement = document.documentElement;
    const mode = config.get('mode', documentElement.getAttribute('mode') || (isPlatform(win, 'ios') ? 'ios' : 'md'));
    Ionic.mode = Context.mode = mode;
    config.set('mode', mode);
    documentElement.setAttribute('mode', mode);
    documentElement.classList.add(mode);
    if (config.getBoolean('_testing')) {
        config.set('animated', false);
    }
})(resourcesUrl);
(function(window, document, Context, namespace) {
  'use strict';
  /**
 * SSR Attribute Names
 */  const SSR_VNODE_ID = 'ssrv';
  const SSR_CHILD_ID = 'ssrc';
  /**
 * Default style mode id
 */  const DEFAULT_STYLE_MODE = '$';
  /**
 * Reusable empty obj/array
 * Don't add values to these!!
 */  const EMPTY_OBJ = {};
  /**
 * Key Name to Key Code Map
 */  const KEY_CODE_MAP = {
    'enter': 13,
    'escape': 27,
    'space': 32,
    'tab': 9,
    'left': 37,
    'up': 38,
    'right': 39,
    'down': 40
  };
  function getScopeId(cmpMeta, mode) {
    return 'sc-' + cmpMeta.tagNameMeta + (mode && mode !== DEFAULT_STYLE_MODE ? '-' + mode : '');
  }
  function getElementScopeId(scopeId, isHostElement) {
    return scopeId + (isHostElement ? '-h' : '-s');
  }
  function initStyleTemplate(domApi, cmpMeta, encapsulation, style, styleMode) {
    if (style) {
      // we got a style mode for this component, let's create an id for this style
      const styleModeId = cmpMeta.tagNameMeta + (styleMode || DEFAULT_STYLE_MODE);
      if (!cmpMeta[styleModeId]) {
        false;
        {
          // use <template> elements to clone styles
          // create the template element which will hold the styles
          // adding it to the dom via <template> so that we can
          // clone this for each potential shadow root that will need these styles
          // otherwise it'll be cloned and added to document.body.head
          // but that's for the renderer to figure out later
          const templateElm = domApi.$createElement('template');
          // keep a reference to this template element within the
          // Constructor using the style mode id as the key
                    cmpMeta[styleModeId] = templateElm;
          // add the style text to the template element's innerHTML
                    true;
          {
            // hot module replacement enabled
            // add a style id attribute, but only useful during dev
            const styleContent = [ '<style', ` data-style-tag="${cmpMeta.tagNameMeta}"` ];
            domApi.$setAttribute(templateElm, 'data-tmpl-style-tag', cmpMeta.tagNameMeta);
            if (styleMode) {
              styleContent.push(` data-style-mode="${styleMode}"`);
              domApi.$setAttribute(templateElm, 'data-tmpl-style-mode', styleMode);
            }
            if (2 /* ScopedCss */ === encapsulation || 1 /* ShadowDom */ === encapsulation && !domApi.$supportsShadowDom) {
              styleContent.push(' data-style-scoped="true"');
              domApi.$setAttribute(templateElm, 'data-tmpl-style-scoped', 'true');
            }
            styleContent.push('>');
            styleContent.push(style);
            styleContent.push('</style>');
            templateElm.innerHTML = styleContent.join('');
          }
          // add our new template element to the head
          // so it can be cloned later
          domApi.$appendChild(domApi.$doc.head, templateElm);
        }
      }
    }
  }
  function attachStyles(plt, domApi, cmpMeta, hostElm) {
    // first see if we've got a style for a specific mode
    // either this host element should use scoped css
    // or it wants to use shadow dom but the browser doesn't support it
    // create a scope id which is useful for scoped css
    // and add the scope attribute to the host
    const shouldScopeCss = 2 /* ScopedCss */ === cmpMeta.encapsulationMeta || 1 /* ShadowDom */ === cmpMeta.encapsulationMeta && !plt.domApi.$supportsShadowDom;
    // create the style id w/ the host element's mode
        let styleId = cmpMeta.tagNameMeta + hostElm.mode;
    let styleTemplate = cmpMeta[styleId];
    shouldScopeCss && (hostElm['s-sc'] = getScopeId(cmpMeta, hostElm.mode));
    if (!styleTemplate) {
      // doesn't look like there's a style template with the mode
      // create the style id using the default style mode and try again
      styleId = cmpMeta.tagNameMeta + DEFAULT_STYLE_MODE;
      styleTemplate = cmpMeta[styleId];
      shouldScopeCss && (hostElm['s-sc'] = getScopeId(cmpMeta));
    }
    if (styleTemplate) {
      // cool, we found a style template element for this component
      let styleContainerNode = domApi.$doc.head;
      // if this browser supports shadow dom, then let's climb up
      // the dom and see if we're within a shadow dom
            if (true, domApi.$supportsShadowDom) if (1 /* ShadowDom */ === cmpMeta.encapsulationMeta) 
      // we already know we're in a shadow dom
      // so shadow root is the container for these styles
      styleContainerNode = hostElm.shadowRoot; else {
        // climb up the dom and see if we're in a shadow dom
        let root = hostElm;
        while (root = domApi.$parentNode(root)) if (root.host && root.host.shadowRoot) {
          // looks like we are in shadow dom, let's use
          // this shadow root as the container for these styles
          styleContainerNode = root.host.shadowRoot;
          break;
        }
      }
      // if this container element already has these styles
      // then there's no need to apply them again
      // create an object to keep track if we'ready applied this component style
            let appliedStyles = plt.componentAppliedStyles.get(styleContainerNode);
      appliedStyles || plt.componentAppliedStyles.set(styleContainerNode, appliedStyles = {});
      // check if we haven't applied these styles to this container yet
            if (!appliedStyles[styleId]) {
        let styleElm;
        false;
        {
          // this browser supports the <template> element
          // and all its native content.cloneNode() goodness
          // clone the template element to create a new <style> element
          styleElm = styleTemplate.content.cloneNode(true);
          // remember we don't need to do this again for this element
                    appliedStyles[styleId] = true;
          // let's make sure we put the styles below the <style data-styles> element
          // so any visibility css overrides the default
                    const dataStyles = styleContainerNode.querySelectorAll('[data-styles]');
          domApi.$insertBefore(styleContainerNode, styleElm, dataStyles.length && dataStyles[dataStyles.length - 1].nextSibling || styleContainerNode.firstChild);
        }
      }
    }
  }
  const isDef = v => null != v;
  const toLowerCase = str => str.toLowerCase();
  const dashToPascalCase = str => toLowerCase(str).split('-').map(segment => segment.charAt(0).toUpperCase() + segment.slice(1)).join('');
  const noop = () => {};
  function createDomApi(App, win, doc) {
    // using the $ prefix so that closure is
    // cool with property renaming each of these
    if (!App.ael) {
      App.ael = ((elm, eventName, cb, opts) => elm.addEventListener(eventName, cb, opts));
      App.rel = ((elm, eventName, cb, opts) => elm.removeEventListener(eventName, cb, opts));
    }
    const unregisterListenerFns = new WeakMap();
    false;
    const domApi = {
      $doc: doc,
      $supportsShadowDom: !!doc.documentElement.attachShadow,
      $supportsEventOptions: false,
      $nodeType: node => node.nodeType,
      $createElement: tagName => doc.createElement(tagName),
      $createElementNS: (namespace, tagName) => doc.createElementNS(namespace, tagName),
      $createTextNode: text => doc.createTextNode(text),
      $createComment: data => doc.createComment(data),
      $insertBefore: (parentNode, childNode, referenceNode) => parentNode.insertBefore(childNode, referenceNode),
      // https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove
      // and it's polyfilled in es5 builds
      $remove: node => node.remove(),
      $appendChild: (parentNode, childNode) => parentNode.appendChild(childNode),
      $addClass: (elm, cssClass) => {
        true, false;
        elm.classList.add(cssClass);
      },
      $childNodes: node => node.childNodes,
      $parentNode: node => node.parentNode,
      $nextSibling: node => node.nextSibling,
      $previousSibling: node => node.previousSibling,
      $tagName: elm => toLowerCase(elm.nodeName),
      $getTextContent: node => node.textContent,
      $setTextContent: (node, text) => node.textContent = text,
      $getAttribute: (elm, key) => elm.getAttribute(key),
      $setAttribute: (elm, key, val) => elm.setAttribute(key, val),
      $setAttributeNS: (elm, namespaceURI, qualifiedName, val) => elm.setAttributeNS(namespaceURI, qualifiedName, val),
      $removeAttribute: (elm, key) => elm.removeAttribute(key),
      $hasAttribute: (elm, key) => elm.hasAttribute(key),
      $getMode: elm => elm.getAttribute('mode') || (App.Context || {}).mode,
      $elementRef: (elm, referenceName) => {
        if ('child' === referenceName) return elm.firstElementChild;
        if ('parent' === referenceName) return domApi.$parentElement(elm);
        if ('body' === referenceName) return doc.body;
        if ('document' === referenceName) return doc;
        if ('window' === referenceName) return win;
        return elm;
      },
      $addEventListener: (assignerElm, eventName, listenerCallback, useCapture, usePassive, attachTo, eventListenerOpts, splt) => {
        // remember the original name before we possibly change it
        const assignersEventName = eventName;
        let attachToElm = assignerElm;
        // get the existing unregister listeners for
        // this element from the unregister listeners weakmap
                let assignersUnregListeners = unregisterListenerFns.get(assignerElm);
        assignersUnregListeners && assignersUnregListeners[assignersEventName] && 
        // removed any existing listeners for this event for the assigner element
        // this element already has this listener, so let's unregister it now
        assignersUnregListeners[assignersEventName]();
        if ('string' === typeof attachTo) 
        // attachTo is a string, and is probably something like
        // "parent", "window", or "document"
        // and the eventName would be like "mouseover" or "mousemove"
        attachToElm = domApi.$elementRef(assignerElm, attachTo); else if ('object' === typeof attachTo) 
        // we were passed in an actual element to attach to
        attachToElm = attachTo; else {
          // depending on the event name, we could actually be attaching
          // this element to something like the document or window
          splt = eventName.split(':');
          if (splt.length > 1) {
            // document:mousemove
            // parent:touchend
            // body:keyup.enter
            attachToElm = domApi.$elementRef(assignerElm, splt[0]);
            eventName = splt[1];
          }
        }
        if (!attachToElm) 
        // somehow we're referencing an element that doesn't exist
        // let's not continue
        return;
        let eventListener = listenerCallback;
        // test to see if we're looking for an exact keycode
                splt = eventName.split('.');
        if (splt.length > 1) {
          // looks like this listener is also looking for a keycode
          // keyup.enter
          eventName = splt[0];
          eventListener = (ev => {
            // wrap the user's event listener with our own check to test
            // if this keyboard event has the keycode they're looking for
            ev.keyCode === KEY_CODE_MAP[splt[1]] && listenerCallback(ev);
          });
        }
        // create the actual event listener options to use
        // this browser may not support event options
                eventListenerOpts = domApi.$supportsEventOptions ? {
          capture: !!useCapture,
          passive: !!usePassive
        } : !!useCapture;
        // ok, good to go, let's add the actual listener to the dom element
                App.ael(attachToElm, eventName, eventListener, eventListenerOpts);
        assignersUnregListeners || 
        // we don't already have a collection, let's create it
        unregisterListenerFns.set(assignerElm, assignersUnregListeners = {});
        // add the unregister listener to this element's collection
                assignersUnregListeners[assignersEventName] = (() => {
          // looks like it's time to say goodbye
          attachToElm && App.rel(attachToElm, eventName, eventListener, eventListenerOpts);
          assignersUnregListeners[assignersEventName] = null;
        });
      },
      $removeEventListener: (elm, eventName) => {
        // get the unregister listener functions for this element
        const assignersUnregListeners = unregisterListenerFns.get(elm);
        assignersUnregListeners && (
        // this element has unregister listeners
        eventName ? 
        // passed in one specific event name to remove
        assignersUnregListeners[eventName] && assignersUnregListeners[eventName]() : 
        // remove all event listeners
        Object.keys(assignersUnregListeners).forEach(assignersEventName => {
          assignersUnregListeners[assignersEventName] && assignersUnregListeners[assignersEventName]();
        }));
      },
      $dispatchEvent: (elm, eventName, data) => elm && elm.dispatchEvent(new win.CustomEvent(eventName, data)),
      $parentElement: (elm, parentNode) => 
      // if the parent node is a document fragment (shadow root)
      // then use the "host" property on it
      // otherwise use the parent node
      (parentNode = domApi.$parentNode(elm)) && 11 /* DocumentFragment */ === domApi.$nodeType(parentNode) ? parentNode.host : parentNode
    };
    true;
    win.location.search.indexOf('shadow=false') > 0 && (
    // by adding ?shadow=false it'll force the slot polyfill
    // only add this check when in dev mode
    domApi.$supportsShadowDom = false);
    true;
    domApi.$attachShadow = ((elm, shadowRootInit) => elm.attachShadow(shadowRootInit));
    true;
    // test if this browser supports event options or not
    try {
      win.addEventListener('e', null, Object.defineProperty({}, 'passive', {
        get: () => domApi.$supportsEventOptions = true
      }));
    } catch (e) {}
    return domApi;
  }
  function updateAttribute(elm, memberName, newValue, isBooleanAttr = 'boolean' === typeof newValue) {
    const isXlinkNs = memberName !== (memberName = memberName.replace(/^xlink\:?/, ''));
    if (null == newValue || isBooleanAttr && (!newValue || 'false' === newValue)) isXlinkNs ? elm.removeAttributeNS(XLINK_NS$1, toLowerCase(memberName)) : elm.removeAttribute(memberName); else if ('function' !== typeof newValue) {
      newValue = isBooleanAttr ? '' : newValue.toString();
      isXlinkNs ? elm.setAttributeNS(XLINK_NS$1, toLowerCase(memberName), newValue) : elm.setAttribute(memberName, newValue);
    }
  }
  const XLINK_NS$1 = 'http://www.w3.org/1999/xlink';
  function setAccessor(plt, elm, memberName, oldValue, newValue, isSvg, isHostElement) {
    if ('class' !== memberName || isSvg) if ('style' === memberName) {
      // update style attribute, css properties and values
      for (const prop in oldValue) newValue && null != newValue[prop] || (/-/.test(prop) ? elm.style.removeProperty(prop) : elm.style[prop] = '');
      for (const prop in newValue) oldValue && newValue[prop] === oldValue[prop] || (/-/.test(prop) ? elm.style.setProperty(prop, newValue[prop]) : elm.style[prop] = newValue[prop]);
    } else if ('o' !== memberName[0] || 'n' !== memberName[1] || !/[A-Z]/.test(memberName[2]) || memberName in elm) if ('list' !== memberName && 'type' !== memberName && !isSvg && (memberName in elm || -1 !== [ 'object', 'function' ].indexOf(typeof newValue) && null !== newValue) || false) {
      // Properties
      // - list and type are attributes that get applied as values on the element
      // - all svgs get values as attributes not props
      // - check if elm contains name or if the value is array, object, or function
      const cmpMeta = plt.getComponentMeta(elm);
      if (cmpMeta && cmpMeta.membersMeta && cmpMeta.membersMeta[memberName]) {
        // we know for a fact that this element is a known component
        // and this component has this member name as a property,
        // let's set the known @Prop on this element
        // set it directly as property on the element
        setProperty(elm, memberName, newValue);
        false;
      } else if ('ref' !== memberName) {
        // this member name is a property on this element, but it's not a component
        // this is a native property like "value" or something
        // also we can ignore the "ref" member name at this point
        setProperty(elm, memberName, null == newValue ? '' : newValue);
        null != newValue && false !== newValue || plt.domApi.$removeAttribute(elm, memberName);
      }
    } else null != newValue && 'key' !== memberName ? 
    // Element Attributes
    updateAttribute(elm, memberName, newValue) : (isSvg || plt.domApi.$hasAttribute(elm, memberName) && (null == newValue || false === newValue)) && 
    // remove svg attribute
    plt.domApi.$removeAttribute(elm, memberName); else {
      // Event Handlers
      // so if the member name starts with "on" and the 3rd characters is
      // a capital letter, and it's not already a member on the element,
      // then we're assuming it's an event listener
      // standard event
      // the JSX attribute could have been "onMouseOver" and the
      // member name "onmouseover" is on the element's prototype
      // so let's add the listener "mouseover", which is all lowercased
      memberName = toLowerCase(memberName) in elm ? toLowerCase(memberName.substring(2)) : toLowerCase(memberName[2]) + memberName.substring(3);
      newValue ? newValue !== oldValue && 
      // add listener
      plt.domApi.$addEventListener(elm, memberName, newValue) : 
      // remove listener
      plt.domApi.$removeEventListener(elm, memberName);
    } else 
    // Class
    if (oldValue !== newValue) {
      const oldList = parseClassList(oldValue);
      const newList = parseClassList(newValue);
      // remove classes in oldList, not included in newList
            const toRemove = oldList.filter(item => !newList.includes(item));
      const classList = parseClassList(elm.className).filter(item => !toRemove.includes(item));
      // add classes from newValue that are not in oldList or classList
            const toAdd = newList.filter(item => !oldList.includes(item) && !classList.includes(item));
      classList.push(...toAdd);
      elm.className = classList.join(' ');
    }
  }
  function parseClassList(value) {
    return null == value || '' === value ? [] : value.trim().split(/\s+/);
  }
  /**
 * Attempt to set a DOM property to the given value.
 * IE & FF throw for certain property-value combinations.
 */  function setProperty(elm, name, value) {
    try {
      elm[name] = value;
    } catch (e) {}
  }
  function updateElement(plt, oldVnode, newVnode, isSvgMode, memberName) {
    // if the element passed in is a shadow root, which is a document fragment
    // then we want to be adding attrs/props to the shadow root's "host" element
    // if it's not a shadow root, then we add attrs/props to the same element
    const elm = 11 /* DocumentFragment */ === newVnode.elm.nodeType && newVnode.elm.host ? newVnode.elm.host : newVnode.elm;
    const oldVnodeAttrs = oldVnode && oldVnode.vattrs || EMPTY_OBJ;
    const newVnodeAttrs = newVnode.vattrs || EMPTY_OBJ;
    // remove attributes no longer present on the vnode by setting them to undefined
        for (memberName in oldVnodeAttrs) newVnodeAttrs && null != newVnodeAttrs[memberName] || null == oldVnodeAttrs[memberName] || setAccessor(plt, elm, memberName, oldVnodeAttrs[memberName], void 0, isSvgMode, newVnode.ishost);
    // add new & update changed attributes
        for (memberName in newVnodeAttrs) memberName in oldVnodeAttrs && newVnodeAttrs[memberName] === ('value' === memberName || 'checked' === memberName ? elm[memberName] : oldVnodeAttrs[memberName]) || setAccessor(plt, elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode, newVnode.ishost);
  }
  let isSvgMode = false;
  function createRendererPatch(plt, domApi) {
    // createRenderer() is only created once per app
    // the patch() function which createRenderer() returned is the function
    // which gets called numerous times by each component
    // internal variables to be reused per patch() call
    let useNativeShadowDom, scopeId, checkSlotFallbackVisibility, checkSlotRelocate, contentRef, hostTagName, hostElm;
    function createElm(oldParentVNode, newParentVNode, childIndex, parentElm, i, elm, childNode, newVNode, oldVNode) {
      newVNode = newParentVNode.vchildren[childIndex];
      if (true, !useNativeShadowDom) {
        // remember for later we need to check to relocate nodes
        checkSlotRelocate = true;
        if ('slot' === newVNode.vtag) {
          scopeId && 
          // scoped css needs to add its scoped id to the parent element
          domApi.$addClass(parentElm, scopeId + '-s');
          newVNode.vchildren ? 
          // slot element has fallback content
          // still create an element that "mocks" the slot element
          newVNode.isSlotFallback = true : 
          // slot element does not have fallback content
          // create an html comment we'll use to always reference
          // where actual slot content should sit next to
          newVNode.isSlotReference = true;
        }
      }
      if (isDef(newVNode.vtext)) 
      // create text node
      newVNode.elm = domApi.$createTextNode(newVNode.vtext); else if (true, newVNode.isSlotReference) 
      // create a slot reference html text node
      newVNode.elm = domApi.$createTextNode(''); else {
        // create element
        elm = newVNode.elm = (true, isSvgMode || 'svg' === newVNode.vtag ? domApi.$createElementNS('http://www.w3.org/2000/svg', newVNode.vtag) : domApi.$createElement((true, 
        newVNode.isSlotFallback ? 'slot-fb' : newVNode.vtag)));
        plt.isDefinedComponent(elm) && plt.isCmpReady.delete(hostElm);
        true;
        isSvgMode = 'svg' === newVNode.vtag || 'foreignObject' !== newVNode.vtag && isSvgMode;
        // add css classes, attrs, props, listeners, etc.
        updateElement(plt, null, newVNode, isSvgMode);
        isDef(scopeId) && elm['s-si'] !== scopeId && 
        // if there is a scopeId and this is the initial render
        // then let's add the scopeId as an attribute
        domApi.$addClass(elm, elm['s-si'] = scopeId);
        false;
        if (newVNode.vchildren) for (i = 0; i < newVNode.vchildren.length; ++i) {
          // create the node
          childNode = createElm(oldParentVNode, newVNode, i, elm);
          // return node could have been null
                    if (childNode) {
            false;
            // append our new node
            domApi.$appendChild(elm, childNode);
            false;
          }
        }
        (true, 'svg' === newVNode.vtag) && (
        // Only reset the SVG context when we're exiting SVG element
        isSvgMode = false);
      }
      true;
      newVNode.elm['s-hn'] = hostTagName;
      if (newVNode.isSlotFallback || newVNode.isSlotReference) {
        // remember the content reference comment
        newVNode.elm['s-sr'] = true;
        // remember the content reference comment
                newVNode.elm['s-cr'] = contentRef;
        // remember the slot name, or empty string for default slot
                newVNode.elm['s-sn'] = newVNode.vname || '';
        // check if we've got an old vnode for this slot
                oldVNode = oldParentVNode && oldParentVNode.vchildren && oldParentVNode.vchildren[childIndex];
        oldVNode && oldVNode.vtag === newVNode.vtag && oldParentVNode.elm && 
        // we've got an old slot vnode and the wrapper is being replaced
        // so let's move the old slot content back to it's original location
        putBackInOriginalLocation(oldParentVNode.elm);
      }
      return newVNode.elm;
    }
    function putBackInOriginalLocation(parentElm, recursive, i, childNode) {
      plt.tmpDisconnected = true;
      const oldSlotChildNodes = domApi.$childNodes(parentElm);
      for (i = oldSlotChildNodes.length - 1; i >= 0; i--) {
        childNode = oldSlotChildNodes[i];
        if (childNode['s-hn'] !== hostTagName && childNode['s-ol']) {
          // this child node in the old element is from another component
          // remove this node from the old slot's parent
          domApi.$remove(childNode);
          // and relocate it back to it's original location
                    domApi.$insertBefore(parentReferenceNode(childNode), childNode, referenceNode(childNode));
          // remove the old original location comment entirely
          // later on the patch function will know what to do
          // and move this to the correct spot in need be
                    domApi.$remove(childNode['s-ol']);
          childNode['s-ol'] = null;
          checkSlotRelocate = true;
        }
        recursive && putBackInOriginalLocation(childNode, recursive);
      }
      plt.tmpDisconnected = false;
    }
    function addVnodes(parentElm, before, parentVNode, vnodes, startIdx, endIdx, containerElm, childNode) {
      const contentRef = parentElm['s-cr'];
      containerElm = contentRef && domApi.$parentNode(contentRef) || parentElm;
      containerElm.shadowRoot && domApi.$tagName(containerElm) === hostTagName && (containerElm = containerElm.shadowRoot);
      for (;startIdx <= endIdx; ++startIdx) if (vnodes[startIdx]) {
        childNode = isDef(vnodes[startIdx].vtext) ? domApi.$createTextNode(vnodes[startIdx].vtext) : createElm(null, parentVNode, startIdx, parentElm);
        if (childNode) {
          vnodes[startIdx].elm = childNode;
          domApi.$insertBefore(containerElm, childNode, referenceNode(before));
        }
      }
    }
    function removeVnodes(vnodes, startIdx, endIdx, node) {
      for (;startIdx <= endIdx; ++startIdx) if (isDef(vnodes[startIdx])) {
        node = vnodes[startIdx].elm;
        true;
        // we're removing this element
        // so it's possible we need to show slot fallback content now
        checkSlotFallbackVisibility = true;
        node['s-ol'] ? 
        // remove the original location comment
        domApi.$remove(node['s-ol']) : 
        // it's possible that child nodes of the node
        // that's being removed are slot nodes
        putBackInOriginalLocation(node, true);
        // remove the vnode's element from the dom
        domApi.$remove(node);
      }
    }
    function updateChildren(parentElm, oldCh, newVNode, newCh, idxInOld, i, node, elmToMove) {
      let oldStartIdx = 0, newStartIdx = 0;
      let oldEndIdx = oldCh.length - 1;
      let oldStartVnode = oldCh[0];
      let oldEndVnode = oldCh[oldEndIdx];
      let newEndIdx = newCh.length - 1;
      let newStartVnode = newCh[0];
      let newEndVnode = newCh[newEndIdx];
      while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) if (null == oldStartVnode) 
      // Vnode might have been moved left
      oldStartVnode = oldCh[++oldStartIdx]; else if (null == oldEndVnode) oldEndVnode = oldCh[--oldEndIdx]; else if (null == newStartVnode) newStartVnode = newCh[++newStartIdx]; else if (null == newEndVnode) newEndVnode = newCh[--newEndIdx]; else if (isSameVnode(oldStartVnode, newStartVnode)) {
        patchVNode(oldStartVnode, newStartVnode);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (isSameVnode(oldEndVnode, newEndVnode)) {
        patchVNode(oldEndVnode, newEndVnode);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (isSameVnode(oldStartVnode, newEndVnode)) {
        // Vnode moved right
        'slot' !== oldStartVnode.vtag && 'slot' !== newEndVnode.vtag || putBackInOriginalLocation(domApi.$parentNode(oldStartVnode.elm));
        patchVNode(oldStartVnode, newEndVnode);
        domApi.$insertBefore(parentElm, oldStartVnode.elm, domApi.$nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (isSameVnode(oldEndVnode, newStartVnode)) {
        // Vnode moved left
        'slot' !== oldStartVnode.vtag && 'slot' !== newEndVnode.vtag || putBackInOriginalLocation(domApi.$parentNode(oldEndVnode.elm));
        patchVNode(oldEndVnode, newStartVnode);
        domApi.$insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        // createKeyToOldIdx
        idxInOld = null;
        for (i = oldStartIdx; i <= oldEndIdx; ++i) if (oldCh[i] && isDef(oldCh[i].vkey) && oldCh[i].vkey === newStartVnode.vkey) {
          idxInOld = i;
          break;
        }
        if (isDef(idxInOld)) {
          elmToMove = oldCh[idxInOld];
          if (elmToMove.vtag !== newStartVnode.vtag) node = createElm(oldCh && oldCh[newStartIdx], newVNode, idxInOld, parentElm); else {
            patchVNode(elmToMove, newStartVnode);
            oldCh[idxInOld] = void 0;
            node = elmToMove.elm;
          }
          newStartVnode = newCh[++newStartIdx];
        } else {
          // new element
          node = createElm(oldCh && oldCh[newStartIdx], newVNode, newStartIdx, parentElm);
          newStartVnode = newCh[++newStartIdx];
        }
        node && domApi.$insertBefore(parentReferenceNode(oldStartVnode.elm), node, referenceNode(oldStartVnode.elm));
      }
      oldStartIdx > oldEndIdx ? addVnodes(parentElm, null == newCh[newEndIdx + 1] ? null : newCh[newEndIdx + 1].elm, newVNode, newCh, newStartIdx, newEndIdx) : newStartIdx > newEndIdx && removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
    function isSameVnode(vnode1, vnode2) {
      // compare if two vnode to see if they're "technically" the same
      // need to have the same element tag, and same key to be the same
      if (vnode1.vtag === vnode2.vtag && vnode1.vkey === vnode2.vkey) {
        true;
        if ('slot' === vnode1.vtag) return vnode1.vname === vnode2.vname;
        return true;
      }
      return false;
    }
    function referenceNode(node) {
      true;
      if (node && node['s-ol']) 
      // this node was relocated to a new location in the dom
      // because of some other component's slot
      // but we still have an html comment in place of where
      // it's original location was according to it's original vdom
      return node['s-ol'];
      return node;
    }
    function parentReferenceNode(node) {
      return domApi.$parentNode(node['s-ol'] ? node['s-ol'] : node);
    }
    function patchVNode(oldVNode, newVNode, defaultHolder) {
      const elm = newVNode.elm = oldVNode.elm;
      const oldChildren = oldVNode.vchildren;
      const newChildren = newVNode.vchildren;
      true;
      // test if we're rendering an svg element, or still rendering nodes inside of one
      // only add this to the when the compiler sees we're using an svg somewhere
      isSvgMode = newVNode.elm && isDef(domApi.$parentElement(newVNode.elm)) && void 0 !== newVNode.elm.ownerSVGElement;
      isSvgMode = 'svg' === newVNode.vtag || 'foreignObject' !== newVNode.vtag && isSvgMode;
      if (isDef(newVNode.vtext)) true, (defaultHolder = elm['s-cr']) ? 
      // this element has slotted content
      domApi.$setTextContent(domApi.$parentNode(defaultHolder), newVNode.vtext) : oldVNode.vtext !== newVNode.vtext && 
      // update the text content for the text only vnode
      // and also only if the text is different than before
      domApi.$setTextContent(elm, newVNode.vtext); else {
        // element node
        'slot' !== newVNode.vtag && 
        // either this is the first render of an element OR it's an update
        // AND we already know it's possible it could have changed
        // this updates the element's css classes, attrs, props, listeners, etc.
        updateElement(plt, oldVNode, newVNode, isSvgMode);
        if (isDef(oldChildren) && isDef(newChildren)) 
        // looks like there's child vnodes for both the old and new vnodes
        updateChildren(elm, oldChildren, newVNode, newChildren); else if (isDef(newChildren)) {
          // no old child vnodes, but there are new child vnodes to add
          isDef(oldVNode.vtext) && 
          // the old vnode was text, so be sure to clear it out
          domApi.$setTextContent(elm, '');
          // add the new vnode children
                    addVnodes(elm, null, newVNode, newChildren, 0, newChildren.length - 1);
        } else isDef(oldChildren) && 
        // no new child vnodes, but there are old child vnodes to remove
        removeVnodes(oldChildren, 0, oldChildren.length - 1);
      }
      true;
      // reset svgMode when svg node is fully patched
      isSvgMode && 'svg' === newVNode.vtag && (isSvgMode = false);
    }
    function updateFallbackSlotVisibility(elm, childNode, childNodes, i, ilen, j, slotNameAttr, nodeType) {
      childNodes = domApi.$childNodes(elm);
      for (i = 0, ilen = childNodes.length; i < ilen; i++) {
        childNode = childNodes[i];
        if (1 /* ElementNode */ === domApi.$nodeType(childNode)) {
          if (childNode['s-sr']) {
            // this is a slot fallback node
            // get the slot name for this slot reference node
            slotNameAttr = childNode['s-sn'];
            // by default always show a fallback slot node
            // then hide it if there are other slots in the light dom
                        childNode.hidden = false;
            for (j = 0; j < ilen; j++) if (childNodes[j]['s-hn'] !== childNode['s-hn']) {
              // this sibling node is from a different component
              nodeType = domApi.$nodeType(childNodes[j]);
              if ('' !== slotNameAttr) {
                // this is a named fallback slot node
                if (1 /* ElementNode */ === nodeType && slotNameAttr === domApi.$getAttribute(childNodes[j], 'slot')) {
                  childNode.hidden = true;
                  break;
                }
              } else 
              // this is a default fallback slot node
              // any element or text node (with content)
              // should hide the default fallback slot node
              if (1 /* ElementNode */ === nodeType || 3 /* TextNode */ === nodeType && '' !== domApi.$getTextContent(childNodes[j]).trim()) {
                childNode.hidden = true;
                break;
              }
            }
          }
          // keep drilling down
                    updateFallbackSlotVisibility(childNode);
        }
      }
    }
    const relocateNodes = [];
    function relocateSlotContent(elm, childNodes, childNode, node, i, ilen, j, hostContentNodes, slotNameAttr, nodeType) {
      childNodes = domApi.$childNodes(elm);
      for (i = 0, ilen = childNodes.length; i < ilen; i++) {
        childNode = childNodes[i];
        if (childNode['s-sr'] && (node = childNode['s-cr'])) {
          // first got the content reference comment node
          // then we got it's parent, which is where all the host content is in now
          hostContentNodes = domApi.$childNodes(domApi.$parentNode(node));
          slotNameAttr = childNode['s-sn'];
          for (j = hostContentNodes.length - 1; j >= 0; j--) {
            node = hostContentNodes[j];
            if (!node['s-cn'] && !node['s-nr'] && node['s-hn'] !== childNode['s-hn']) {
              // let's do some relocating to its new home
              // but never relocate a content reference node
              // that is suppose to always represent the original content location
              nodeType = domApi.$nodeType(node);
              if (((3 /* TextNode */ === nodeType || 8 /* CommentNode */ === nodeType) && '' === slotNameAttr || 1 /* ElementNode */ === nodeType && null === domApi.$getAttribute(node, 'slot') && '' === slotNameAttr || 1 /* ElementNode */ === nodeType && domApi.$getAttribute(node, 'slot') === slotNameAttr) && !relocateNodes.some(r => r.nodeToRelocate === node)) {
                // made some changes to slots
                // let's make sure we also double check
                // fallbacks are correctly hidden or shown
                checkSlotFallbackVisibility = true;
                node['s-sn'] = slotNameAttr;
                // add to our list of nodes to relocate
                                relocateNodes.push({
                  slotRefNode: childNode,
                  nodeToRelocate: node
                });
              }
            }
          }
        }
        1 /* ElementNode */ === domApi.$nodeType(childNode) && relocateSlotContent(childNode);
      }
    }
    return function patch(hostElement, oldVNode, newVNode, useNativeShadowDomVal, encapsulation, ssrPatchId, i, relocateNode, orgLocationNode, refNode, parentNodeRef, insertBeforeNode) {
      // patchVNode() is synchronous
      // so it is safe to set these variables and internally
      // the same patch() call will reference the same data
      hostElm = hostElement;
      hostTagName = domApi.$tagName(hostElm);
      contentRef = hostElm['s-cr'];
      useNativeShadowDom = useNativeShadowDomVal;
      false;
      true;
      // get the scopeId
      scopeId = hostElm['s-sc'];
      // always reset
            checkSlotRelocate = checkSlotFallbackVisibility = false;
      // synchronous patch
      patchVNode(oldVNode, newVNode);
      false;
      true;
      if (checkSlotRelocate) {
        relocateSlotContent(newVNode.elm);
        for (i = 0; i < relocateNodes.length; i++) {
          relocateNode = relocateNodes[i];
          if (!relocateNode.nodeToRelocate['s-ol']) {
            // add a reference node marking this node's original location
            // keep a reference to this node for later lookups
            orgLocationNode = domApi.$createTextNode('');
            orgLocationNode['s-nr'] = relocateNode.nodeToRelocate;
            domApi.$insertBefore(domApi.$parentNode(relocateNode.nodeToRelocate), relocateNode.nodeToRelocate['s-ol'] = orgLocationNode, relocateNode.nodeToRelocate);
          }
        }
        // while we're moving nodes around existing nodes, temporarily disable
        // the disconnectCallback from working
                plt.tmpDisconnected = true;
        for (i = 0; i < relocateNodes.length; i++) {
          relocateNode = relocateNodes[i];
          // by default we're just going to insert it directly
          // after the slot reference node
                    parentNodeRef = domApi.$parentNode(relocateNode.slotRefNode);
          insertBeforeNode = domApi.$nextSibling(relocateNode.slotRefNode);
          orgLocationNode = relocateNode.nodeToRelocate['s-ol'];
          while (orgLocationNode = domApi.$previousSibling(orgLocationNode)) if ((refNode = orgLocationNode['s-nr']) && refNode && refNode['s-sn'] === relocateNode.nodeToRelocate['s-sn'] && parentNodeRef === domApi.$parentNode(refNode) && (refNode = domApi.$nextSibling(refNode)) && refNode && !refNode['s-nr']) {
            insertBeforeNode = refNode;
            break;
          }
          if ((!insertBeforeNode && parentNodeRef !== domApi.$parentNode(relocateNode.nodeToRelocate) || domApi.$nextSibling(relocateNode.nodeToRelocate) !== insertBeforeNode) && relocateNode.nodeToRelocate !== insertBeforeNode) {
            // remove the node from the dom
            domApi.$remove(relocateNode.nodeToRelocate);
            // add it back to the dom but in its new home
                        domApi.$insertBefore(parentNodeRef, relocateNode.nodeToRelocate, insertBeforeNode);
          }
        }
        // done moving nodes around
        // allow the disconnect callback to work again
                plt.tmpDisconnected = false;
      }
      checkSlotFallbackVisibility && updateFallbackSlotVisibility(newVNode.elm);
      // always reset
            relocateNodes.length = 0;
      // return our new vnode
      return newVNode;
    };
  }
  function callNodeRefs(vNode, isDestroy) {
    if (vNode) {
      vNode.vattrs && vNode.vattrs.ref && vNode.vattrs.ref(isDestroy ? null : vNode.elm);
      vNode.vchildren && vNode.vchildren.forEach(vChild => {
        callNodeRefs(vChild, isDestroy);
      });
    }
  }
  function createVNodesFromSsr(plt, domApi, rootElm) {
    const allSsrElms = rootElm.querySelectorAll(`[${SSR_VNODE_ID}]`);
    const ilen = allSsrElms.length;
    let elm, ssrVNodeId, ssrVNode, i, j, jlen;
    if (ilen > 0) {
      plt.isCmpReady.set(rootElm, true);
      for (i = 0; i < ilen; i++) {
        elm = allSsrElms[i];
        ssrVNodeId = domApi.$getAttribute(elm, SSR_VNODE_ID);
        ssrVNode = {};
        ssrVNode.vtag = domApi.$tagName(ssrVNode.elm = elm);
        plt.vnodeMap.set(elm, ssrVNode);
        for (j = 0, jlen = elm.childNodes.length; j < jlen; j++) addChildSsrVNodes(domApi, elm.childNodes[j], ssrVNode, ssrVNodeId, true);
      }
    }
  }
  function addChildSsrVNodes(domApi, node, parentVNode, ssrVNodeId, checkNestedElements) {
    const nodeType = domApi.$nodeType(node);
    let previousComment;
    let childVNodeId, childVNodeSplt, childVNode;
    if (checkNestedElements && 1 /* ElementNode */ === nodeType) {
      childVNodeId = domApi.$getAttribute(node, SSR_CHILD_ID);
      if (childVNodeId) {
        // split the start comment's data with a period
        childVNodeSplt = childVNodeId.split('.');
        // ensure this this element is a child element of the ssr vnode
                if (childVNodeSplt[0] === ssrVNodeId) {
          // cool, this element is a child to the parent vnode
          childVNode = {};
          childVNode.vtag = domApi.$tagName(childVNode.elm = node);
          // this is a new child vnode
          // so ensure its parent vnode has the vchildren array
                    parentVNode.vchildren || (parentVNode.vchildren = []);
          // add our child vnode to a specific index of the vnode's children
                    parentVNode.vchildren[childVNodeSplt[1]] = childVNode;
          // this is now the new parent vnode for all the next child checks
                    parentVNode = childVNode;
          // if there's a trailing period, then it means there aren't any
          // more nested elements, but maybe nested text nodes
          // either way, don't keep walking down the tree after this next call
                    checkNestedElements = '' !== childVNodeSplt[2];
        }
      }
      // keep drilling down through the elements
            for (let i = 0; i < node.childNodes.length; i++) addChildSsrVNodes(domApi, node.childNodes[i], parentVNode, ssrVNodeId, checkNestedElements);
    } else if (3 /* TextNode */ === nodeType && (previousComment = node.previousSibling) && 8 /* CommentNode */ === domApi.$nodeType(previousComment)) {
      // split the start comment's data with a period
      childVNodeSplt = domApi.$getTextContent(previousComment).split('.');
      // ensure this is an ssr text node start comment
      // which should start with an "s" and delimited by periods
            if ('s' === childVNodeSplt[0] && childVNodeSplt[1] === ssrVNodeId) {
        // cool, this is a text node and it's got a start comment
        childVNode = {
          vtext: domApi.$getTextContent(node)
        };
        childVNode.elm = node;
        // this is a new child vnode
        // so ensure its parent vnode has the vchildren array
                parentVNode.vchildren || (parentVNode.vchildren = []);
        // add our child vnode to a specific index of the vnode's children
                parentVNode.vchildren[childVNodeSplt[2]] = childVNode;
      }
    }
  }
  function createQueueClient(App, win) {
    const now = () => win.performance.now();
    const resolved = Promise.resolve();
    const highPriority = [];
    const domReads = [];
    const domWrites = [];
    const domWritesLow = [];
    let congestion = 0;
    let rafPending = false;
    App.raf || (App.raf = win.requestAnimationFrame.bind(win));
    function queueTask(queue) {
      return cb => {
        // queue dom reads
        queue.push(cb);
        if (!rafPending) {
          rafPending = true;
          App.raf(flush);
        }
      };
    }
    function consume(queue) {
      for (let i = 0; i < queue.length; i++) try {
        queue[i](now());
      } catch (e) {
        console.error(e);
      }
      queue.length = 0;
    }
    function consumeTimeout(queue, timeout) {
      let i = 0;
      let ts;
      while (i < queue.length && (ts = now()) < timeout) try {
        queue[i++](ts);
      } catch (e) {
        console.error(e);
      }
      i === queue.length ? queue.length = 0 : 0 !== i && queue.splice(0, i);
    }
    function flush() {
      congestion++;
      // always force a bunch of medium callbacks to run, but still have
      // a throttle on how many can run in a certain time
      // DOM READS!!!
            consume(domReads);
      const start = now() + 7 * Math.ceil(congestion * (1 / 22));
      // DOM WRITES!!!
            consumeTimeout(domWrites, start);
      consumeTimeout(domWritesLow, start);
      if (domWrites.length > 0) {
        domWritesLow.push(...domWrites);
        domWrites.length = 0;
      }
      (rafPending = domReads.length + domWrites.length + domWritesLow.length > 0) ? 
      // still more to do yet, but we've run out of time
      // let's let this thing cool off and try again in the next tick
      App.raf(flush) : congestion = 0;
    }
    return {
      tick(cb) {
        // queue high priority work to happen in next tick
        // uses Promise.resolve() for next tick
        highPriority.push(cb);
        1 === highPriority.length && resolved.then(() => consume(highPriority));
      },
      read: queueTask(domReads),
      write: queueTask(domWrites)
    };
  }
  function initElementListeners(plt, elm) {
    // so the element was just connected, which means it's in the DOM
    // however, the component instance hasn't been created yet
    // but what if an event it should be listening to get emitted right now??
    // let's add our listeners right now to our element, and if it happens
    // to receive events between now and the instance being created let's
    // queue up all of the event data and fire it off on the instance when it's ready
    const cmpMeta = plt.getComponentMeta(elm);
    cmpMeta.listenersMeta && 
    // we've got listens
    cmpMeta.listenersMeta.forEach(listenMeta => {
      // go through each listener
      listenMeta.eventDisabled || 
      // only add ones that are not already disabled
      plt.domApi.$addEventListener(elm, listenMeta.eventName, createListenerCallback(plt, elm, listenMeta.eventMethodName), listenMeta.eventCapture, listenMeta.eventPassive);
    });
  }
  function createListenerCallback(plt, elm, eventMethodName, val) {
    // create the function that gets called when the element receives
    // an event which it should be listening for
    return ev => {
      // get the instance if it exists
      val = plt.instanceMap.get(elm);
      if (val) 
      // instance is ready, let's call it's member method for this event
      val[eventMethodName](ev); else {
        // instance is not ready!!
        // let's queue up this event data and replay it later
        // when the instance is ready
        val = plt.queuedEvents.get(elm) || [];
        val.push(eventMethodName, ev);
        plt.queuedEvents.set(elm, val);
      }
    };
  }
  function enableEventListener(plt, instance, eventName, shouldEnable, attachTo, passive) {
    if (instance) {
      // cool, we've got an instance, it's get the element it's on
      const elm = plt.hostElementMap.get(instance);
      const cmpMeta = plt.getComponentMeta(elm);
      if (cmpMeta && cmpMeta.listenersMeta) 
      // alrighty, so this cmp has listener meta
      if (shouldEnable) {
        // we want to enable this event
        // find which listen meta we're talking about
        const listenMeta = cmpMeta.listenersMeta.find(l => l.eventName === eventName);
        listenMeta && 
        // found the listen meta, so let's add the listener
        plt.domApi.$addEventListener(elm, eventName, ev => instance[listenMeta.eventMethodName](ev), listenMeta.eventCapture, void 0 === passive ? listenMeta.eventPassive : !!passive, attachTo);
      } else 
      // we're disabling the event listener
      // so let's just remove it entirely
      plt.domApi.$removeEventListener(elm, eventName);
    }
  }
  function generateDevInspector(App, namespace, win, plt) {
    const devInspector = win.devInspector = win.devInspector || {};
    devInspector.apps = devInspector.apps || [];
    devInspector.apps.push(generateDevInspectorApp(App, namespace, plt));
    devInspector.getInstance || (devInspector.getInstance = (elm => {
      return Promise.all(devInspector.apps.map(app => {
        return app.getInstance(elm);
      })).then(results => {
        return results.find(instance => !!instance);
      });
    }));
    devInspector.getComponents || (devInspector.getComponents = (() => {
      const appsMetadata = [];
      devInspector.apps.forEach(app => {
        appsMetadata.push(app.getComponents());
      });
      return Promise.all(appsMetadata).then(appMetadata => {
        const allMetadata = [];
        appMetadata.forEach(metadata => {
          metadata.forEach(m => {
            allMetadata.push(m);
          });
        });
        return allMetadata;
      });
    }));
    return devInspector;
  }
  function generateDevInspectorApp(App, namespace, plt) {
    const app = {
      namespace: namespace,
      getInstance: elm => {
        if (elm && elm.tagName) return Promise.all([ getComponentMeta(plt, elm.tagName), getComponentInstance(plt, elm) ]).then(results => {
          if (results[0] && results[1]) {
            const cmp = {
              meta: results[0],
              instance: results[1]
            };
            return cmp;
          }
          return null;
        });
        return Promise.resolve(null);
      },
      getComponent: tagName => {
        return getComponentMeta(plt, tagName);
      },
      getComponents: () => {
        return Promise.all(App.components.map(cmp => {
          return getComponentMeta(plt, cmp[0]);
        })).then(metadata => {
          return metadata.filter(m => m);
        });
      }
    };
    return app;
  }
  function getMembersMeta(properties) {
    return Object.keys(properties).reduce((membersMap, memberKey) => {
      const prop = properties[memberKey];
      let category;
      const member = {
        name: memberKey
      };
      if (prop.state) {
        category = 'states';
        member.watchers = prop.watchCallbacks || [];
      } else if (prop.elementRef) category = 'elements'; else if (prop.method) category = 'methods'; else {
        category = 'props';
        let type = 'any';
        if (prop.type) {
          type = prop.type;
          'function' === typeof prop.type && (type = prop.type.name);
        }
        member.type = type.toLowerCase();
        member.mutable = prop.mutable || false;
        member.connect = prop.connect || '-';
        member.context = prop.connect || '-';
        member.watchers = prop.watchCallbacks || [];
      }
      membersMap[category].push(member);
      return membersMap;
    }, {
      props: [],
      states: [],
      elements: [],
      methods: []
    });
  }
  function getComponentMeta(plt, tagName) {
    const elm = {
      nodeName: tagName
    };
    const internalMeta = plt.getComponentMeta(elm);
    if (!internalMeta || !internalMeta.componentConstructor) return Promise.resolve(null);
    const cmpCtr = internalMeta.componentConstructor;
    const members = getMembersMeta(cmpCtr.properties || {});
    const listeners = (internalMeta.listenersMeta || []).map(listenerMeta => {
      return {
        event: listenerMeta.eventName,
        capture: listenerMeta.eventCapture,
        disabled: listenerMeta.eventDisabled,
        passive: listenerMeta.eventPassive,
        method: listenerMeta.eventMethodName
      };
    });
    const emmiters = cmpCtr.events || [];
    const meta = Object.assign({
      tag: cmpCtr.is,
      bundle: internalMeta.bundleIds || 'unknown',
      encapsulation: cmpCtr.encapsulation || 'none'
    }, members, {
      events: {
        emmiters: emmiters,
        listeners: listeners
      }
    });
    return Promise.resolve(meta);
  }
  function getComponentInstance(plt, elm) {
    return Promise.resolve(plt.instanceMap.get(elm));
  }
  /**
 * Production h() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */  const stack = [];
  function h(nodeName, vnodeData) {
    let children = null;
    let lastSimple = false;
    let simple = false;
    for (var i = arguments.length; i-- > 2; ) stack.push(arguments[i]);
    while (stack.length > 0) {
      let child = stack.pop();
      if (child && void 0 !== child.pop) for (i = child.length; i--; ) stack.push(child[i]); else {
        'boolean' === typeof child && (child = null);
        (simple = 'function' !== typeof nodeName) && (null == child ? child = '' : 'number' === typeof child ? child = String(child) : 'string' !== typeof child && (simple = false));
        simple && lastSimple ? children[children.length - 1].vtext += child : null === children ? children = [ simple ? {
          vtext: child
        } : child ] : children.push(simple ? {
          vtext: child
        } : child);
        lastSimple = simple;
      }
    }
    let vkey;
    let vname;
    if (null != vnodeData) {
      // normalize class / classname attributes
      vnodeData.className && (vnodeData.class = vnodeData.className);
      if ('object' === typeof vnodeData.class) {
        for (i in vnodeData.class) vnodeData.class[i] && stack.push(i);
        vnodeData.class = stack.join(' ');
        stack.length = 0;
      }
      null != vnodeData.key && (vkey = vnodeData.key);
      null != vnodeData.name && (vname = vnodeData.name);
    }
    if ('function' === typeof nodeName) 
    // nodeName is a functional component
    return nodeName(vnodeData, children || [], utils);
    return {
      vtag: nodeName,
      vchildren: children,
      vtext: void 0,
      vattrs: vnodeData,
      vkey: vkey,
      vname: vname,
      elm: void 0,
      ishost: false
    };
  }
  function childToVNode(child) {
    return {
      vtag: child.vtag,
      vchildren: child.vchildren,
      vtext: child.vtext,
      vattrs: child.vattrs,
      vkey: child.vkey,
      vname: child.vname
    };
  }
  function VNodeToChild(vnode) {
    return {
      'vtag': vnode.vtag,
      'vchildren': vnode.vchildren,
      'vtext': vnode.vtext,
      'vattrs': vnode.vattrs,
      'vkey': vnode.vkey,
      'vname': vnode.vname
    };
  }
  const utils = {
    'forEach': (children, cb) => {
      children.forEach((item, index, array) => cb(VNodeToChild(item), index, array));
    },
    'map': (children, cb) => {
      return children.map((item, index, array) => childToVNode(cb(VNodeToChild(item), index, array)));
    }
  };
  function initCoreComponentOnReady(plt, App, win, apps, queuedComponentOnReadys, i) {
    // add componentOnReady() to the App object
    // this also is used to know that the App's core is ready
    App.componentOnReady = ((elm, resolve) => {
      if (!elm.nodeName.includes('-')) {
        resolve(null);
        return false;
      }
      const cmpMeta = plt.getComponentMeta(elm);
      if (cmpMeta) if (plt.isCmpReady.has(elm)) 
      // element has already loaded, pass the resolve the element component
      // so we know that the resolve knows it this element is an app component
      resolve(elm); else {
        // element hasn't loaded yet or it has an update in progress
        // add this resolve specifically to this elements on ready queue
        const onReadyCallbacks = plt.onReadyCallbacksMap.get(elm) || [];
        onReadyCallbacks.push(resolve);
        plt.onReadyCallbacksMap.set(elm, onReadyCallbacks);
      }
      // return a boolean if this app recognized this element or not
            return !!cmpMeta;
    });
    if (queuedComponentOnReadys) {
      // we've got some componentOnReadys in the queue before the app was ready
      for (i = queuedComponentOnReadys.length - 1; i >= 0; i--) 
      // go through each element and see if this app recongizes it
      App.componentOnReady(queuedComponentOnReadys[i][0], queuedComponentOnReadys[i][1]) && 
      // turns out this element belongs to this app
      // remove the resolve from the queue so in the end
      // all that's left in the queue are elements not apart of any apps
      queuedComponentOnReadys.splice(i, 1);
      for (i = 0; i < apps.length; i++) if (!win[apps[i]].componentOnReady) 
      // there is at least 1 apps that isn't ready yet
      // so let's stop here cuz there's still app cores loading
      return;
      // if we got to this point then that means all of the apps are ready
      // and they would have removed any of their elements from queuedComponentOnReadys
      // so let's do the cleanup of the  remaining queuedComponentOnReadys
            for (i = 0; i < queuedComponentOnReadys.length; i++) 
      // resolve any queued componentsOnReadys that are left over
      // since these elements were not apart of any apps
      // call the resolve fn, but pass null so it's know this wasn't a known app component
      queuedComponentOnReadys[i][1](null);
      queuedComponentOnReadys.length = 0;
    }
  }
  function attributeChangedCallback(attrPropsMap, elm, attribName, newVal) {
    // look up to see if we have a property wired up to this attribute name
    const propName = attrPropsMap[toLowerCase(attribName)];
    propName && (
    // there is not need to cast the value since, it's already casted when
    // the prop is setted
    elm[propName] = newVal);
  }
  function initHostSnapshot(domApi, cmpMeta, hostElm, hostSnapshot, attribName) {
    // the host element has connected to the dom
    // and we've waited a tick to make sure all frameworks
    // have finished adding attributes and child nodes to the host
    // before we go all out and hydrate this beast
    // let's first take a snapshot of its original layout before render
    hostElm.mode || (
    // looks like mode wasn't set as a property directly yet
    // first check if there's an attribute
    // next check the app's global
    hostElm.mode = domApi.$getMode(hostElm));
    true;
    // if the slot polyfill is required we'll need to put some nodes
    // in here to act as original content anchors as we move nodes around
    // host element has been connected to the DOM
    if (!hostElm['s-cr'] && !domApi.$getAttribute(hostElm, SSR_VNODE_ID) && (!domApi.$supportsShadowDom || 1 /* ShadowDom */ !== cmpMeta.encapsulationMeta)) {
      // only required when we're NOT using native shadow dom (slot)
      // or this browser doesn't support native shadow dom
      // and this host element was NOT created with SSR
      // let's pick out the inner content for slot projection
      // create a node to represent where the original
      // content was first placed, which is useful later on
      hostElm['s-cr'] = domApi.$createTextNode('');
      hostElm['s-cr']['s-cn'] = true;
      domApi.$insertBefore(hostElm, hostElm['s-cr'], domApi.$childNodes(hostElm)[0]);
    }
    if (!domApi.$supportsShadowDom && 1 /* ShadowDom */ === cmpMeta.encapsulationMeta) {
      true, true;
      // it's possible we're manually forcing the slot polyfill
      // but this browser may already support the read-only shadowRoot
      // do an extra check here, but only for dev mode on the client
      'shadowRoot' in HTMLElement.prototype || (hostElm.shadowRoot = hostElm);
    }
    true;
    1 /* ShadowDom */ === cmpMeta.encapsulationMeta && domApi.$supportsShadowDom && !hostElm.shadowRoot && 
    // this component is using shadow dom
    // and this browser supports shadow dom
    // add the read-only property "shadowRoot" to the host element
    domApi.$attachShadow(hostElm, {
      mode: 'open'
    });
    // create a host snapshot object we'll
    // use to store all host data about to be read later
    hostSnapshot = {
      $id: hostElm['s-id'],
      $attributes: {}
    };
    // loop through and gather up all the original attributes on the host
    // this is useful later when we're creating the component instance
        cmpMeta.membersMeta && Object.keys(cmpMeta.membersMeta).forEach(memberName => {
      (attribName = cmpMeta.membersMeta[memberName].attribName) && (hostSnapshot.$attributes[attribName] = domApi.$getAttribute(hostElm, attribName));
    });
    return hostSnapshot;
  }
  function connectedCallback(plt, cmpMeta, elm) {
    true;
    // initialize our event listeners on the host element
    // we do this now so that we can listening to events that may
    // have fired even before the instance is ready
    if (!plt.hasListenersMap.has(elm)) {
      // it's possible we've already connected
      // then disconnected
      // and the same element is reconnected again
      plt.hasListenersMap.set(elm, true);
      initElementListeners(plt, elm);
    }
    // this element just connected, which may be re-connecting
    // ensure we remove it from our map of disconnected
    plt.isDisconnectedMap.delete(elm);
    if (!plt.hasConnectedMap.has(elm)) {
      plt.processingCmp.add(elm);
      // first time we've connected
            plt.hasConnectedMap.set(elm, true);
      elm['s-id'] || (
      // assign a unique id to this host element
      // it's possible this was already given an element id
      elm['s-id'] = plt.nextId());
      // register this component as an actively
      // loading child to its parent component
            registerWithParentComponent(plt, elm);
      // add to the queue to load the bundle
      // it's important to have an async tick in here so we can
      // ensure the "mode" attribute has been added to the element
      // place in high priority since it's not much work and we need
      // to know as fast as possible, but still an async tick in between
            plt.queue.tick(() => {
        // start loading this component mode's bundle
        // if it's already loaded then the callback will be synchronous
        plt.hostSnapshotMap.set(elm, initHostSnapshot(plt.domApi, cmpMeta, elm));
        plt.requestBundle(cmpMeta, elm);
      });
    }
  }
  function registerWithParentComponent(plt, elm, ancestorHostElement) {
    // find the first ancestor host element (if there is one) and register
    // this element as one of the actively loading child elements for its ancestor
    ancestorHostElement = elm;
    while (ancestorHostElement = plt.domApi.$parentElement(ancestorHostElement)) 
    // climb up the ancestors looking for the first registered component
    if (plt.isDefinedComponent(ancestorHostElement)) {
      // we found this elements the first ancestor host element
      // if the ancestor already loaded then do nothing, it's too late
      if (!plt.isCmpReady.has(elm)) {
        // keep a reference to this element's ancestor host element
        // elm._ancestorHostElement = ancestorHostElement;
        plt.ancestorHostElementMap.set(elm, ancestorHostElement);
        // ensure there is an array to contain a reference to each of the child elements
        // and set this element as one of the ancestor's child elements it should wait on
                // ensure there is an array to contain a reference to each of the child elements
        // and set this element as one of the ancestor's child elements it should wait on
        (ancestorHostElement['s-ld'] = ancestorHostElement['s-ld'] || []).push(elm);
      }
      break;
    }
  }
  function initEventEmitters(plt, cmpEvents, instance) {
    if (cmpEvents) {
      const elm = plt.hostElementMap.get(instance);
      cmpEvents.forEach(eventMeta => {
        instance[eventMeta.method] = {
          emit: data => {
            plt.emitEvent(elm, eventMeta.name, {
              bubbles: eventMeta.bubbles,
              composed: eventMeta.composed,
              cancelable: eventMeta.cancelable,
              detail: data
            });
          }
        };
      });
    }
  }
  function parseComponentLoader(cmpRegistryData) {
    // tag name will always be lower case
    // parse member meta
    // this data only includes props that are attributes that need to be observed
    // it does not include all of the props yet
    const [tagNameMeta, bundleIds, , memberData, encapsulationMeta, listenerMeta] = cmpRegistryData;
    const membersMeta = {
      // every component defaults to always have
      // the mode and color properties
      // but only color should observe any attribute changes
      'color': {
        attribName: 'color'
      }
    };
    if (memberData) for (let i = 0; i < memberData.length; i++) {
      const d = memberData[i];
      membersMeta[d[0]] = {
        memberType: d[1],
        reflectToAttrib: !!d[2],
        attribName: 'string' === typeof d[3] ? d[3] : d[3] ? d[0] : 0,
        propType: d[4]
      };
    }
    return {
      tagNameMeta: tagNameMeta,
      // map of the bundle ids
      // can contain modes, and array of esm and es5 bundle ids
      bundleIds: bundleIds,
      membersMeta: Object.assign({}, membersMeta),
      // encapsulation
      encapsulationMeta: encapsulationMeta,
      // parse listener meta
      listenersMeta: listenerMeta ? listenerMeta.map(parseListenerData) : void 0
    };
  }
  function parseListenerData(listenerData) {
    return {
      eventName: listenerData[0],
      eventMethodName: listenerData[1],
      eventDisabled: !!listenerData[2],
      eventPassive: !!listenerData[3],
      eventCapture: !!listenerData[4]
    };
  }
  function parsePropertyValue(propType, propValue) {
    // ensure this value is of the correct prop type
    // we're testing both formats of the "propType" value because
    // we could have either gotten the data from the attribute changed callback,
    // which wouldn't have Constructor data yet, and because this method is reused
    // within proxy where we don't have meta data, but only constructor data
    if (isDef(propValue) && 'object' !== typeof propValue && 'function' !== typeof propValue) {
      if (propType === Boolean || 4 /* Boolean */ === propType) 
      // per the HTML spec, any string value means it is a boolean true value
      // but we'll cheat here and say that the string "false" is the boolean false
      return 'false' !== propValue && ('' === propValue || !!propValue);
      if (propType === Number || 8 /* Number */ === propType) 
      // force it to be a number
      return parseFloat(propValue);
      if (propType === String || 2 /* String */ === propType) 
      // could have been passed as a number or boolean
      // but we still want it as a string
      return propValue.toString();
    }
    // not sure exactly what type we want
    // so no need to change to a different type
        return propValue;
  }
  function render(plt, cmpMeta, hostElm, instance) {
    try {
      // if this component has a render function, let's fire
      // it off and generate the child vnodes for this host element
      // note that we do not create the host element cuz it already exists
      const hostMeta = cmpMeta.componentConstructor.host;
      const encapsulation = cmpMeta.componentConstructor.encapsulation;
      // test if this component should be shadow dom
      // and if so does the browser supports it
            const useNativeShadowDom = 'shadow' === encapsulation && plt.domApi.$supportsShadowDom;
      let reflectHostAttr;
      let rootElm = hostElm;
      false;
      // this component SHOULD use native slot/shadow dom
      // this browser DOES support native shadow dom
      // and this is the first render
      // let's create that shadow root
      // test if this component should be shadow dom
      // and if so does the browser supports it
      (true, useNativeShadowDom) && (rootElm = hostElm.shadowRoot);
      if (true, !hostElm['s-rn']) {
        // attach the styles this component needs, if any
        // this fn figures out if the styles should go in a
        // shadow root or if they should be global
        plt.attachStyles(plt, plt.domApi, cmpMeta, hostElm);
        // if no render function
                const scopeId = hostElm['s-sc'];
        if (scopeId) {
          plt.domApi.$addClass(hostElm, getElementScopeId(scopeId, true));
          instance.render || plt.domApi.$addClass(hostElm, getElementScopeId(scopeId));
        }
      }
      if (instance.render || instance.hostData || hostMeta || reflectHostAttr) {
        // tell the platform we're actively rendering
        // if a value is changed within a render() then
        // this tells the platform not to queue the change
        plt.activeRender = true;
        const vnodeChildren = instance.render && instance.render();
        let vnodeHostData;
        true;
        // user component provided a "hostData()" method
        // the returned data/attributes are used on the host element
        vnodeHostData = instance.hostData && instance.hostData();
        true;
        if (vnodeHostData && cmpMeta.membersMeta) {
          const foundHostKeys = Object.keys(vnodeHostData).reduce((err, k) => {
            if (cmpMeta.membersMeta[k]) return err.concat(k);
            if (cmpMeta.membersMeta[dashToPascalCase(k)]) return err.concat(dashToPascalCase(k));
            return err;
          }, []);
          if (foundHostKeys.length > 0) throw new Error('The following keys were attempted to be set with hostData() from the ' + `${cmpMeta.tagNameMeta} component: ${foundHostKeys.join(', ')}. ` + 'If you would like to modify these please set @Prop({ mutable: true, reflectToAttr: true}) on the @Prop() decorator.');
        }
        false;
        // tell the platform we're done rendering
        // now any changes will again queue
        plt.activeRender = false;
        false;
        // looks like we've got child nodes to render into this host element
        // or we need to update the css class/attrs on the host element
        // if we haven't already created a vnode, then we give the renderer the actual element
        // if this is a re-render, then give the renderer the last vnode we already created
        const oldVNode = plt.vnodeMap.get(hostElm) || {};
        oldVNode.elm = rootElm;
        const hostVNode = h(null, vnodeHostData, vnodeChildren);
        false;
        // each patch always gets a new vnode
        // the host element itself isn't patched because it already exists
        // kick off the actual render and any DOM updates
        plt.vnodeMap.set(hostElm, plt.render(hostElm, oldVNode, hostVNode, useNativeShadowDom, encapsulation));
      }
      // update styles!
            false;
      // it's official, this element has rendered
      hostElm['s-rn'] = true;
      if (hostElm['s-rc']) {
        // ok, so turns out there are some child host elements
        // waiting on this parent element to load
        // let's fire off all update callbacks waiting
        hostElm['s-rc'].forEach(cb => cb());
        hostElm['s-rc'] = null;
      }
    } catch (e) {
      plt.activeRender = false;
      plt.onError(e, 8 /* RenderError */ , hostElm, true);
    }
  }
  function queueUpdate(plt, elm) {
    // we're actively processing this component
    plt.processingCmp.add(elm);
    // only run patch if it isn't queued already
        if (!plt.isQueuedForUpdate.has(elm)) {
      plt.isQueuedForUpdate.set(elm, true);
      // run the patch in the next tick
      // vdom diff and patch the host element for differences
            plt.isAppLoaded ? 
      // app has already loaded
      // let's queue this work in the dom write phase
      plt.queue.write(() => update(plt, elm)) : 
      // app hasn't finished loading yet
      // so let's use next tick to do everything
      // as fast as possible
      plt.queue.tick(() => update(plt, elm));
    }
  }
  async function update(plt, elm, isInitialLoad, instance, ancestorHostElement) {
    // no longer queued for update
    plt.isQueuedForUpdate.delete(elm);
    // everything is async, so somehow we could have already disconnected
    // this node, so be sure to do nothing if we've already disconnected
        if (!plt.isDisconnectedMap.has(elm)) {
      instance = plt.instanceMap.get(elm);
      isInitialLoad = !instance;
      if (isInitialLoad) {
        ancestorHostElement = plt.ancestorHostElementMap.get(elm);
        if (ancestorHostElement && !ancestorHostElement['s-rn']) {
          // this is the intial load
          // this element has an ancestor host element
          // but the ancestor host element has NOT rendered yet
          // so let's just cool our jets and wait for the ancestor to render
          (ancestorHostElement['s-rc'] = ancestorHostElement['s-rc'] || []).push(() => {
            // this will get fired off when the ancestor host element
            // finally gets around to rendering its lazy self
            update(plt, elm);
          });
          return;
        }
        // haven't created a component instance for this host element yet!
        // create the instance from the user's component class
        // https://www.youtube.com/watch?v=olLxrojmvMg
                instance = initComponentInstance(plt, elm, plt.hostSnapshotMap.get(elm));
        if (true, instance) 
        // this is the initial load and the instance was just created
        // fire off the user's componentWillLoad method (if one was provided)
        // componentWillLoad only runs ONCE, after instance's element has been
        // assigned as the host element, but BEFORE render() has been called
        try {
          instance.componentWillLoad && await instance.componentWillLoad();
        } catch (e) {
          plt.onError(e, 3 /* WillLoadError */ , elm);
        }
      } else if (true, instance) 
      // component already initialized, this is an update
      // already created an instance and this is an update
      // fire off the user's componentWillUpdate method (if one was provided)
      // componentWillUpdate runs BEFORE render() has been called
      // but only BEFORE an UPDATE and not before the intial render
      // get the returned promise (if one was provided)
      try {
        instance.componentWillUpdate && await instance.componentWillUpdate();
      } catch (e) {
        plt.onError(e, 5 /* WillUpdateError */ , elm);
      }
      // if this component has a render function, let's fire
      // it off and generate a vnode for this
            render(plt, plt.getComponentMeta(elm), elm, instance);
      elm['s-init']();
      true;
      elm['s-hmr-load'] && elm['s-hmr-load']();
    }
  }
  function defineMember(plt, property, elm, instance, memberName, hostSnapshot, hostAttributes, hostAttrValue) {
    function getComponentProp(values) {
      // component instance prop/state getter
      // get the property value directly from our internal values
      values = plt.valuesMap.get(plt.hostElementMap.get(this));
      return values && values[memberName];
    }
    function setComponentProp(newValue, elm) {
      // component instance prop/state setter (cannot be arrow fn)
      elm = plt.hostElementMap.get(this);
      if (elm) if (property.state || property.mutable) setValue(plt, elm, memberName, newValue); else {
        true;
        console.warn(`@Prop() "${memberName}" on "${elm.tagName}" cannot be modified.`);
      }
    }
    if (property.type || property.state) {
      const values = plt.valuesMap.get(elm);
      if (!property.state) {
        !property.attr || void 0 !== values[memberName] && '' !== values[memberName] || 
        // check the prop value from the host element attribute
        (hostAttributes = hostSnapshot && hostSnapshot.$attributes) && isDef(hostAttrValue = hostAttributes[property.attr]) && (
        // looks like we've got an attribute value
        // let's set it to our internal values
        values[memberName] = parsePropertyValue(property.type, hostAttrValue));
        true;
        // client-side
        // within the browser, the element's prototype
        // already has its getter/setter set, but on the
        // server the prototype is shared causing issues
        // so instead the server's elm has the getter/setter
        // directly on the actual element instance, not its prototype
        // so on the browser we can use "hasOwnProperty"
        if (elm.hasOwnProperty(memberName)) {
          // @Prop or @Prop({mutable:true})
          // property values on the host element should override
          // any default values on the component instance
          void 0 === values[memberName] && (values[memberName] = parsePropertyValue(property.type, elm[memberName]));
          // for the client only, let's delete its "own" property
          // this way our already assigned getter/setter on the prototype kicks in
          // the very special case is to NOT do this for "mode"
                    'mode' !== memberName && delete elm[memberName];
        }
      }
      instance.hasOwnProperty(memberName) && void 0 === values[memberName] && (
      // @Prop() or @Prop({mutable:true}) or @State()
      // we haven't yet got a value from the above checks so let's
      // read any "own" property instance values already set
      // to our internal value as the source of getter data
      // we're about to define a property and it'll overwrite this "own" property
      values[memberName] = instance[memberName]);
      property.watchCallbacks && (values[WATCH_CB_PREFIX + memberName] = property.watchCallbacks.slice());
      // add getter/setter to the component instance
      // these will be pointed to the internal data set from the above checks
            definePropertyGetterSetter(instance, memberName, getComponentProp, setComponentProp);
    } else if (true, property.elementRef) 
    // @Element()
    // add a getter to the element reference using
    // the member name the component meta provided
    definePropertyValue(instance, memberName, elm); else if (true, property.method) 
    // @Method()
    // add a property "value" on the host element
    // which we'll bind to the instance's method
    definePropertyValue(elm, memberName, instance[memberName].bind(instance)); else if (true, 
    property.context) {
      // @Prop({ context: 'config' })
      const contextObj = plt.getContextItem(property.context);
      void 0 !== contextObj && definePropertyValue(instance, memberName, contextObj.getContext && contextObj.getContext(elm) || contextObj);
    } else (true, property.connect) && 
    // @Prop({ connect: 'ion-loading-ctrl' })
    definePropertyValue(instance, memberName, plt.propConnect(property.connect));
  }
  function setValue(plt, elm, memberName, newVal, instance) {
    // get the internal values object, which should always come from the host element instance
    // create the _values object if it doesn't already exist
    let values = plt.valuesMap.get(elm);
    values || plt.valuesMap.set(elm, values = {});
    const oldVal = values[memberName];
    // check our new property value against our internal value
        if (newVal !== oldVal) {
      // gadzooks! the property's value has changed!!
      // set our new value!
      // https://youtu.be/dFtLONl4cNc?t=22
      values[memberName] = newVal;
      instance = plt.instanceMap.get(elm);
      if (instance) {
        true;
        {
          const watchMethods = values[WATCH_CB_PREFIX + memberName];
          if (watchMethods) 
          // this instance is watching for when this property changed
          for (let i = 0; i < watchMethods.length; i++) try {
            // fire off each of the watch methods that are watching this property
            instance[watchMethods[i]].call(instance, newVal, oldVal, memberName);
          } catch (e) {
            console.error(e);
          }
        }
        !plt.activeRender && elm['s-rn'] && 
        // looks like this value actually changed, so we've got work to do!
        // but only if we've already rendered, otherwise just chill out
        // queue that we need to do an update, but don't worry about queuing
        // up millions cuz this function ensures it only runs once
        queueUpdate(plt, elm);
      }
    }
  }
  function definePropertyValue(obj, propertyKey, value) {
    // minification shortcut
    Object.defineProperty(obj, propertyKey, {
      'configurable': true,
      'value': value
    });
  }
  function definePropertyGetterSetter(obj, propertyKey, get, set) {
    // minification shortcut
    Object.defineProperty(obj, propertyKey, {
      'configurable': true,
      'get': get,
      'set': set
    });
  }
  const WATCH_CB_PREFIX = 'wc-';
  function proxyComponentInstance(plt, cmpConstructor, elm, instance, hostSnapshot) {
    // at this point we've got a specific node of a host element, and created a component class instance
    // and we've already created getters/setters on both the host element and component class prototypes
    // let's upgrade any data that might have been set on the host element already
    // and let's have the getters/setters kick in and do their jobs
    // let's automatically add a reference to the host element on the instance
    plt.hostElementMap.set(instance, elm);
    // create the values object if it doesn't already exist
    // this will hold all of the internal getter/setter values
        plt.valuesMap.has(elm) || plt.valuesMap.set(elm, {});
    // get the properties from the constructor
    // and add default "mode" and "color" properties
        Object.entries(Object.assign({
      color: {
        type: String
      }
    }, cmpConstructor.properties, {
      mode: {
        type: String
      }
    })).forEach(([memberName, property]) => {
      // define each of the members and initialize what their role is
      defineMember(plt, property, elm, instance, memberName, hostSnapshot);
    });
  }
  function initComponentInstance(plt, elm, hostSnapshot, instance, componentConstructor, queuedEvents, i) {
    try {
      // using the user's component class, let's create a new instance
      componentConstructor = plt.getComponentMeta(elm).componentConstructor;
      instance = new componentConstructor();
      // ok cool, we've got an host element now, and a actual instance
      // and there were no errors creating the instance
      // let's upgrade the data on the host element
      // and let the getters/setters do their jobs
            proxyComponentInstance(plt, componentConstructor, elm, instance, hostSnapshot);
      true;
      // add each of the event emitters which wire up instance methods
      // to fire off dom events from the host element
      initEventEmitters(plt, componentConstructor.events, instance);
      true;
      try {
        // replay any event listeners on the instance that
        // were queued up between the time the element was
        // connected and before the instance was ready
        queuedEvents = plt.queuedEvents.get(elm);
        if (queuedEvents) {
          // events may have already fired before the instance was even ready
          // now that the instance is ready, let's replay all of the events that
          // we queued up earlier that were originally meant for the instance
          for (i = 0; i < queuedEvents.length; i += 2) 
          // data was added in sets of two
          // first item the eventMethodName
          // second item is the event data
          // take a look at initElementListener()
          instance[queuedEvents[i]](queuedEvents[i + 1]);
          plt.queuedEvents.delete(elm);
        }
      } catch (e) {
        plt.onError(e, 2 /* QueueEventsError */ , elm);
      }
    } catch (e) {
      // something done went wrong trying to create a component instance
      // create a dumby instance so other stuff can load
      // but chances are the app isn't fully working cuz this component has issues
      instance = {};
      plt.onError(e, 7 /* InitInstanceError */ , elm, true);
    }
    plt.instanceMap.set(elm, instance);
    return instance;
  }
  function initComponentLoaded(plt, elm, hydratedCssClass, instance, onReadyCallbacks, hasCmpLoaded) {
    false;
    // all is good, this component has been told it's time to finish loading
    // it's possible that we've already decided to destroy this element
    // check if this element has any actively loading child elements
    if ((instance = plt.instanceMap.get(elm)) && !plt.isDisconnectedMap.has(elm) && (!elm['s-ld'] || !elm['s-ld'].length)) {
      // cool, so at this point this element isn't already being destroyed
      // and it does not have any child elements that are still loading
      // all of this element's children have loaded (if any)
      plt.isCmpReady.set(elm, true);
      if (!(hasCmpLoaded = plt.isCmpLoaded.has(elm))) {
        // remember that this component has loaded
        // isCmpLoaded map is useful to know if we should fire
        // the lifecycle componentDidLoad() or componentDidUpdate()
        plt.isCmpLoaded.set(elm, true);
        // ensure we remove any child references cuz it doesn't matter at this point
                elm['s-ld'] = void 0;
        // add the css class that this element has officially hydrated
                plt.domApi.$addClass(elm, hydratedCssClass);
      }
      try {
        // fire off the ref if it exists
        callNodeRefs(plt.vnodeMap.get(elm));
        // fire off the user's elm.componentOnReady() callbacks that were
        // put directly on the element (well before anything was ready)
                if (onReadyCallbacks = plt.onReadyCallbacksMap.get(elm)) {
          onReadyCallbacks.forEach(cb => cb(elm));
          plt.onReadyCallbacksMap.delete(elm);
        }
        !((true, hasCmpLoaded) || !instance.componentDidLoad) && 
        // we've never loaded this component
        // fire off the user's componentDidLoad method (if one was provided)
        // componentDidLoad only runs ONCE, after the instance's element has been
        // assigned as the host element, and AFTER render() has been called
        // and all the child componenets have finished loading
        instance.componentDidLoad();
      } catch (e) {
        plt.onError(e, 4 /* DidLoadError */ , elm);
      }
      // ( •_•)
      // ( •_•)>⌐■-■
      // (⌐■_■)
      // load events fire from bottom to top
      // the deepest elements load first then bubbles up
            propagateComponentReady(plt, elm);
    }
  }
  function propagateComponentReady(plt, elm, index, ancestorsActivelyLoadingChildren, ancestorHostElement, cb) {
    // we're no longer processing this component
    plt.processingCmp.delete(elm);
    // load events fire from bottom to top
    // the deepest elements load first then bubbles up
        if (ancestorHostElement = plt.ancestorHostElementMap.get(elm)) {
      // ok so this element already has a known ancestor host element
      // let's make sure we remove this element from its ancestor's
      // known list of child elements which are actively loading
      ancestorsActivelyLoadingChildren = ancestorHostElement['s-ld'];
      if (ancestorsActivelyLoadingChildren) {
        index = ancestorsActivelyLoadingChildren.indexOf(elm);
        index > -1 && 
        // yup, this element is in the list of child elements to wait on
        // remove it so we can work to get the length down to 0
        ancestorsActivelyLoadingChildren.splice(index, 1);
        // the ancestor's initLoad method will do the actual checks
        // to see if the ancestor is actually loaded or not
        // then let's call the ancestor's initLoad method if there's no length
        // (which actually ends up as this method again but for the ancestor)
                ancestorsActivelyLoadingChildren.length || ancestorHostElement['s-init'] && ancestorHostElement['s-init']();
      }
      plt.ancestorHostElementMap.delete(elm);
    }
    if (plt.onAppReadyCallbacks.length && !plt.processingCmp.size) 
    // we've got some promises waiting on the entire app to be done processing
    // so it should have an empty queue and no longer rendering
    while (cb = plt.onAppReadyCallbacks.shift()) cb();
  }
  function disconnectedCallback(plt, elm) {
    // only disconnect if we're not temporarily disconnected
    // tmpDisconnected will happen when slot nodes are being relocated
    if (!plt.tmpDisconnected && isDisconnected(plt.domApi, elm)) {
      // ok, let's officially destroy this thing
      // set this to true so that any of our pending async stuff
      // doesn't continue since we already decided to destroy this node
      // elm._hasDestroyed = true;
      plt.isDisconnectedMap.set(elm, true);
      // double check that we've informed the ancestor host elements
      // that they're good to go and loaded (cuz this one is on its way out)
            propagateComponentReady(plt, elm);
      // since we're disconnecting, call all of the JSX ref's with null
            callNodeRefs(plt.vnodeMap.get(elm), true);
      // detatch any event listeners that may have been added
      // because we're not passing an exact event name it'll
      // remove all of this element's event, which is good
            plt.domApi.$removeEventListener(elm);
      plt.hasListenersMap.delete(elm);
      true;
      {
        // call instance componentDidUnload
        // if we've created an instance for this
        const instance = plt.instanceMap.get(elm);
        instance && instance.componentDidUnload && 
        // call the user's componentDidUnload if there is one
        instance.componentDidUnload();
      }
      // clear CSS var-shim tracking
            false;
      // clear any references to other elements
      // more than likely we've already deleted these references
      // but let's double check there pal
      [ plt.ancestorHostElementMap, plt.onReadyCallbacksMap, plt.hostSnapshotMap ].forEach(wm => wm.delete(elm));
    }
  }
  function isDisconnected(domApi, elm) {
    while (elm) {
      if (!domApi.$parentNode(elm)) return 9 /* DocumentNode */ !== domApi.$nodeType(elm);
      elm = domApi.$parentNode(elm);
    }
  }
  function hmrStart(plt, cmpMeta, elm, hmrVersionId) {
    // ¯\_(ツ)_/¯
    // keep the existing state
    // forget the constructor
    cmpMeta.componentConstructor = null;
    // no sir, this component has never loaded, not once, ever
        plt.isCmpLoaded.delete(elm);
    plt.isCmpReady.delete(elm);
    // forget the instance
        const instance = plt.instanceMap.get(elm);
    if (instance) {
      plt.hostElementMap.delete(instance);
      plt.instanceMap.delete(elm);
    }
    // detatch any event listeners that may have been added
    // because we're not passing an exact event name it'll
    // remove all of this element's event, which is good
        plt.domApi.$removeEventListener(elm);
    plt.hasListenersMap.delete(elm);
    cmpMeta.listenersMeta = null;
    // create a callback for when this component finishes hmr
        elm['s-hmr-load'] = (() => {
      // finished hmr for this element
      delete elm['s-hmr-load'];
      hmrFinish(plt, cmpMeta, elm);
    });
    // create the new host snapshot from the element
        plt.hostSnapshotMap.set(elm, initHostSnapshot(plt.domApi, cmpMeta, elm));
    // request the bundle again
        plt.requestBundle(cmpMeta, elm, hmrVersionId);
  }
  function hmrFinish(plt, cmpMeta, elm) {
    if (!plt.hasListenersMap.has(elm)) {
      plt.hasListenersMap.set(elm, true);
      // initElementListeners works off of cmp metadata
      // but we just got new data from the constructor
      // so let's update the cmp metadata w/ constructor listener data
            if (cmpMeta.componentConstructor && cmpMeta.componentConstructor.listeners) {
        cmpMeta.listenersMeta = cmpMeta.componentConstructor.listeners.map(lstn => {
          const listenerMeta = {
            eventMethodName: lstn.method,
            eventName: lstn.name,
            eventCapture: !!lstn.capture,
            eventPassive: !!lstn.passive,
            eventDisabled: !!lstn.disabled
          };
          return listenerMeta;
        });
        initElementListeners(plt, elm);
      }
    }
  }
  function proxyHostElementPrototype(plt, membersEntries, hostPrototype) {
    false;
    membersEntries.forEach(([memberName, member]) => {
      // add getters/setters
      const memberType = member.memberType;
      3 /* PropMutable */ & memberType ? 
      // @Prop() or @Prop({ mutable: true })
      definePropertyGetterSetter(hostPrototype, memberName, function getHostElementProp() {
        // host element getter (cannot be arrow fn)
        // yup, ugly, srynotsry
        return (plt.valuesMap.get(this) || {})[memberName];
      }, function setHostElementProp(newValue) {
        // host element setter (cannot be arrow fn)
        setValue(plt, this, memberName, parsePropertyValue(member.propType, newValue));
      }) : 32 /* Method */ === memberType && 
      // @Method()
      // add a placeholder noop value on the host element's prototype
      // incase this method gets called before setup
      definePropertyValue(hostPrototype, memberName, noop);
    });
  }
  function initHostElement(plt, cmpMeta, HostElementConstructor, hydratedCssClass) {
    // let's wire up our functions to the host element's prototype
    // we can also inject our platform into each one that needs that api
    // note: these cannot be arrow functions cuz "this" is important here hombre
    HostElementConstructor.connectedCallback = function() {
      // coolsville, our host element has just hit the DOM
      connectedCallback(plt, cmpMeta, this);
    };
    HostElementConstructor.disconnectedCallback = function() {
      // the element has left the builing
      disconnectedCallback(plt, this);
    };
    HostElementConstructor['s-init'] = function() {
      initComponentLoaded(plt, this, hydratedCssClass);
    };
    HostElementConstructor.forceUpdate = function() {
      queueUpdate(plt, this);
    };
    true;
    HostElementConstructor['s-hmr'] = function(hmrVersionId) {
      hmrStart(plt, cmpMeta, this, hmrVersionId);
    };
    if (cmpMeta.membersMeta) {
      const entries = Object.entries(cmpMeta.membersMeta);
      true;
      {
        let attrToProp = {};
        entries.forEach(([propName, {attribName: attribName}]) => {
          attribName && (attrToProp[attribName] = propName);
        });
        attrToProp = Object.assign({}, attrToProp);
        HostElementConstructor.attributeChangedCallback = function(attribName, _oldVal, newVal) {
          // the browser has just informed us that an attribute
          // on the host element has changed
          attributeChangedCallback(attrToProp, this, attribName, newVal);
        };
      }
      // add getters/setters to the host element members
      // these would come from the @Prop and @Method decorators that
      // should create the public API to this component
            proxyHostElementPrototype(plt, entries, HostElementConstructor);
    }
  }
  function proxyController(domApi, controllerComponents, ctrlTag) {
    return {
      'create': proxyProp(domApi, controllerComponents, ctrlTag, 'create'),
      'componentOnReady': proxyProp(domApi, controllerComponents, ctrlTag, 'componentOnReady')
    };
  }
  function proxyProp(domApi, controllerComponents, ctrlTag, proxyMethodName) {
    return function() {
      const args = arguments;
      return loadComponent(domApi, controllerComponents, ctrlTag).then(ctrlElm => ctrlElm[proxyMethodName].apply(ctrlElm, args));
    };
  }
  function loadComponent(domApi, controllerComponents, ctrlTag) {
    let ctrlElm = controllerComponents[ctrlTag];
    const body = domApi.$doc.body;
    if (body) {
      ctrlElm || (ctrlElm = body.querySelector(ctrlTag));
      if (!ctrlElm) {
        ctrlElm = controllerComponents[ctrlTag] = domApi.$createElement(ctrlTag);
        domApi.$appendChild(body, ctrlElm);
      }
      return ctrlElm.componentOnReady();
    }
    return Promise.resolve();
  }
  function createPlatformMain(namespace, Context, win, doc, resourcesUrl, hydratedCssClass) {
    const cmpRegistry = {
      'html': {}
    };
    const controllerComponents = {};
    const App = win[namespace] = win[namespace] || {};
    const domApi = createDomApi(App, win, doc);
    // set App Context
        Context.isServer = Context.isPrerender = !(Context.isClient = true);
    Context.window = win;
    Context.location = win.location;
    Context.document = doc;
    Context.resourcesUrl = Context.publicPath = resourcesUrl;
    true;
    Context.enableListener = ((instance, eventName, enabled, attachTo, passive) => enableEventListener(plt, instance, eventName, enabled, attachTo, passive));
    true;
    Context.emit = ((elm, eventName, data) => domApi.$dispatchEvent(elm, Context.eventNameFn ? Context.eventNameFn(eventName) : eventName, data));
    // add the h() fn to the app's global namespace
    App.h = h;
    App.Context = Context;
    // keep a global set of tags we've already defined
        const globalDefined = win['s-defined'] = win['s-defined'] || {};
    // internal id increment for unique ids
        let ids = 0;
    // create the platform api which is used throughout common core code
        const plt = {
      domApi: domApi,
      defineComponent: defineComponent,
      emitEvent: Context.emit,
      getComponentMeta: elm => cmpRegistry[domApi.$tagName(elm)],
      getContextItem: contextKey => Context[contextKey],
      isClient: true,
      isDefinedComponent: elm => !!(globalDefined[domApi.$tagName(elm)] || plt.getComponentMeta(elm)),
      nextId: () => namespace + ids++,
      onError: (err, type, elm) => console.error(err, type, elm && elm.tagName),
      propConnect: ctrlTag => proxyController(domApi, controllerComponents, ctrlTag),
      queue: Context.queue = createQueueClient(App, win),
      requestBundle: requestBundle,
      activeRender: false,
      isAppLoaded: false,
      tmpDisconnected: false,
      attachStyles: attachStyles,
      ancestorHostElementMap: new WeakMap(),
      componentAppliedStyles: new WeakMap(),
      hasConnectedMap: new WeakMap(),
      hasListenersMap: new WeakMap(),
      isCmpLoaded: new WeakMap(),
      isCmpReady: new WeakMap(),
      hostElementMap: new WeakMap(),
      hostSnapshotMap: new WeakMap(),
      instanceMap: new WeakMap(),
      isDisconnectedMap: new WeakMap(),
      isQueuedForUpdate: new WeakMap(),
      onReadyCallbacksMap: new WeakMap(),
      queuedEvents: new WeakMap(),
      vnodeMap: new WeakMap(),
      valuesMap: new WeakMap(),
      processingCmp: new Set(),
      onAppReadyCallbacks: []
    };
    // create a method that returns a promise
    // which gets resolved when the app's queue is empty
    // and app is idle, works for both initial load and updates
        App.onReady = (() => new Promise(resolve => plt.queue.write(() => plt.processingCmp.size ? plt.onAppReadyCallbacks.push(resolve) : resolve())));
    // create the renderer that will be used
        plt.render = createRendererPatch(plt, domApi);
    // setup the root element which is the mighty <html> tag
    // the <html> has the final say of when the app has loaded
        const rootElm = domApi.$doc.documentElement;
    rootElm['s-ld'] = [];
    rootElm['s-rn'] = true;
    // this will fire when all components have finished loaded
        rootElm['s-init'] = (() => {
      plt.isCmpReady.set(rootElm, App.loaded = plt.isAppLoaded = true);
      domApi.$dispatchEvent(win, 'appload', {
        detail: {
          namespace: namespace
        }
      });
    });
    true;
    // if the HTML was generated from SSR
    // then let's walk the tree and generate vnodes out of the data
    createVNodesFromSsr(plt, domApi, rootElm);
    function defineComponent(cmpMeta, HostElementConstructor) {
      const tagNameMeta = cmpMeta.tagNameMeta;
      if (!win.customElements.get(tagNameMeta)) {
        // define the custom element
        // initialize the members on the host element prototype
        // keep a ref to the metadata with the tag as the key
        initHostElement(plt, cmpRegistry[tagNameMeta] = cmpMeta, HostElementConstructor.prototype, hydratedCssClass);
        true;
        // add which attributes should be observed
        // at this point the membersMeta only includes attributes which should
        // be observed, it does not include all props yet, so it's safe to
        // loop through all of the props (attrs) and observed them
        // set the array of all the attributes to keep an eye on
        // https://www.youtube.com/watch?v=RBs21CFBALI
        HostElementConstructor.observedAttributes = Object.values(cmpMeta.membersMeta).map(member => member.attribName).filter(attribName => !!attribName);
        win.customElements.define(cmpMeta.tagNameMeta, HostElementConstructor);
      }
    }
    function requestBundle(cmpMeta, elm, hmrVersionId) {
      if (cmpMeta.componentConstructor) 
      // we're already all loaded up :)
      queueUpdate(plt, elm); else {
        false;
        true;
        {
          // self loading module using built-in browser's import()
          // this is when not using a 3rd party bundler
          // and components are able to lazy load themselves
          // through standardized browser APIs
          const bundleId = 'string' === typeof cmpMeta.bundleIds ? cmpMeta.bundleIds : cmpMeta.bundleIds[elm.mode];
          const useScopedCss = (true, !domApi.$supportsShadowDom);
          let url = resourcesUrl + bundleId + (useScopedCss ? '.sc' : '') + '.entry.js';
          (true, hmrVersionId) && (url += '?s-hmr=' + hmrVersionId);
          // dynamic es module import() => woot!
                    import(url).then(importedModule => {
            // async loading of the module is done
            try {
              // get the component constructor from the module
              // initialize this component constructor's styles
              // it is possible for the same component to have difficult styles applied in the same app
              cmpMeta.componentConstructor = importedModule[dashToPascalCase(cmpMeta.tagNameMeta)];
              initStyleTemplate(domApi, cmpMeta, cmpMeta.encapsulationMeta, cmpMeta.componentConstructor.style, cmpMeta.componentConstructor.styleMode);
              // bundle all loaded up, let's continue
                            queueUpdate(plt, elm);
            } catch (e) {
              // oh man, something's up
              console.error(e);
              // provide a bogus component constructor
              // so the rest of the app acts as normal
                            cmpMeta.componentConstructor = class {};
            }
          }, err => console.error(err, url));
        }
      }
    }
    true;
    generateDevInspector(App, namespace, win, plt);
    true;
    // register all the components now that everything's ready
    // standard es2017 class extends HTMLElement
    (App.components || []).map(parseComponentLoader).forEach(cmpMeta => defineComponent(cmpMeta, class extends HTMLElement {}));
    // create the componentOnReady fn
    initCoreComponentOnReady(plt, App, win, win['s-apps'], win['s-cr']);
    // notify that the app has initialized and the core script is ready
    // but note that the components have not fully loaded yet
        App.initialized = true;
    return plt;
  }
  false;
  // esm build which uses es module imports and dynamic imports
  createPlatformMain(namespace, Context, window, document, resourcesUrl, hydratedCssClass);
})(window, document, Context, namespace);
})({},"App","hydrated");