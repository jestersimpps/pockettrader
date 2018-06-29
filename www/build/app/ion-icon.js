/*! Built with http://stenciljs.com */
const { h } = window.App;

class Icon {
    constructor() {
        this.svgContent = null;
        /**
         * Specifies the label to use for accessibility. Defaults to the icon name.
         */
        this.ariaLabel = '';
        /**
         * Specifies which icon to use on `ios` mode.
         */
        this.ios = '';
        /**
         * Specifies which icon to use on `md` mode.
         */
        this.md = '';
        /**
         * Specifies which icon to use from the built-in set of icons.
         */
        this.name = '';
        /**
         * Specifies the exact `src` of an SVG file to use.
         */
        this.src = '';
        /**
         * A combination of both `name` and `src`. If a `src` url is detected
         * it will set the `src` property. Otherwise it assumes it's a built-in named
         * SVG and set the `name` property.
         */
        this.icon = '';
    }
    componentWillLoad() {
        // purposely do not return the promise here because loading
        // the svg file should not hold up loading the app
        // only load the svg if it's visible
        this.waitUntilVisible(this.el, '50px', () => {
            this.isVisible = true;
            this.loadIcon();
        });
    }
    waitUntilVisible(el, rootMargin, cb) {
        if (this.win.IntersectionObserver) {
            const io = new this.win.IntersectionObserver(data => {
                if (data[0].isIntersecting) {
                    io.disconnect();
                    cb();
                }
            }, { rootMargin });
            io.observe(el);
        }
        else {
            // browser doesn't support IntersectionObserver
            // so just fallback to always show it
            cb();
        }
    }
    loadIcon() {
        if (!this.isServer && this.isVisible) {
            const url = this.getUrl();
            if (url) {
                getSvgContent(url).then(svgContent => {
                    this.svgContent = validateContent(this.doc, svgContent);
                });
            }
        }
        if (!this.ariaLabel) {
            const name = getName(this.name, this.mode, this.ios, this.md);
            // user did not provide a label
            // come up with the label based on the icon name
            if (name) {
                this.ariaLabel = this.name
                    .replace('ios-', '')
                    .replace('md-', '')
                    .replace(/\-/g, ' ');
            }
        }
    }
    getUrl() {
        let url = getSrc(this.src);
        if (url) {
            return url;
        }
        url = getName(this.name, this.mode, this.ios, this.md);
        if (url) {
            return this.getNamedUrl(url);
        }
        url = getSrc(this.icon);
        if (url) {
            return url;
        }
        url = getName(this.icon, this.mode, this.ios, this.md);
        if (url) {
            return this.getNamedUrl(url);
        }
        return null;
    }
    getNamedUrl(name) {
        return `${this.resourcesUrl}svg/${name}.svg`;
    }
    hostData() {
        return {
            'role': 'img',
            class: Object.assign({}, createColorClasses(this.color), { [`icon-${this.size}`]: !!this.size })
        };
    }
    render() {
        if (!this.isServer && this.svgContent) {
            // we've already loaded up this svg at one point
            // and the svg content we've loaded and assigned checks out
            // render this svg!!
            return h("div", { class: "icon-inner", innerHTML: this.svgContent });
        }
        // actively requesting the svg
        // or it's an SSR render
        // so let's just render an empty div for now
        return h("div", { class: "icon-inner" });
    }
    static get is() { return "ion-icon"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "ariaLabel": {
            "type": String,
            "attr": "aria-label",
            "reflectToAttr": true,
            "mutable": true
        },
        "color": {
            "type": String,
            "attr": "color"
        },
        "doc": {
            "context": "document"
        },
        "el": {
            "elementRef": true
        },
        "icon": {
            "type": String,
            "attr": "icon",
            "watchCallbacks": ["loadIcon"]
        },
        "ios": {
            "type": String,
            "attr": "ios"
        },
        "isServer": {
            "context": "isServer"
        },
        "isVisible": {
            "state": true
        },
        "md": {
            "type": String,
            "attr": "md"
        },
        "mode": {
            "context": "mode"
        },
        "name": {
            "type": String,
            "attr": "name",
            "watchCallbacks": ["loadIcon"]
        },
        "resourcesUrl": {
            "context": "resourcesUrl"
        },
        "size": {
            "type": String,
            "attr": "size"
        },
        "src": {
            "type": String,
            "attr": "src",
            "watchCallbacks": ["loadIcon"]
        },
        "svgContent": {
            "state": true
        },
        "win": {
            "context": "window"
        }
    }; }
    static get style() { return ":host {\n  display: inline-block;\n  font-size: inherit;\n\n  width: 1em;\n  height: 1em;\n\n  contain: strict;\n\n  --ion-color-base: currentColor;\n}\n\n:host(.icon-small) {\n  font-size: 18px;\n}\n\n:host(.icon-large){\n  font-size: 32px;\n}\n\n.icon-inner {\n  font-size: inherit;\n}\n\n.icon-inner,\nsvg {\n  height: 100%;\n  width: 100%;\n}\n\nsvg {\n  fill: var(--ion-color-base);\n  stroke: var(--ion-color-base);\n}\n\n/* Set iOS Icon Colors */\n/* ------------------- */\n\n:host(.ion-color-primary) {\n  --ion-color-base: var(--ion-color-primary, #3880ff);\n}\n\n:host(.ion-color-secondary) {\n  --ion-color-base: var(--ion-color-secondary, #0cd1e8);\n}\n\n:host(.ion-color-tertiary) {\n  --ion-color-base: var(--ion-color-tertiary, #f4a942);\n}\n\n:host(.ion-color-success) {\n  --ion-color-base: var(--ion-color-success, #10dc60);\n}\n\n:host(.ion-color-warning) {\n  --ion-color-base: var(--ion-color-warning, #ffce00);\n}\n\n:host(.ion-color-danger) {\n  --ion-color-base: var(--ion-color-danger, #f14141);\n}\n\n:host(.ion-color-light) {\n  --ion-color-base: var(--ion-color-light, #f4f5f8);\n}\n\n:host(.ion-color-medium) {\n  --ion-color-base: var(--ion-color-medium, #989aa2);\n}\n\n:host(.ion-color-dark) {\n  --ion-color-base: var(--ion-color-dark, #222428);\n}"; }
}
const requests = new Map();
function getSvgContent(url) {
    // see if we already have a request for this url
    let req = requests.get(url);
    if (!req) {
        // we don't already have a request
        req = fetch(url, { cache: 'force-cache' }).then(rsp => {
            if (rsp.ok) {
                return rsp.text();
            }
            return Promise.resolve(null);
        });
        // cache for the same requests
        requests.set(url, req);
    }
    return req;
}
function getName(name, mode, ios, md) {
    // default to "md" if somehow the mode wasn't set
    mode = (mode || 'md').toLowerCase();
    // if an icon was passed in using the ios or md attributes
    // set the iconName to whatever was passed in
    if (ios && mode === 'ios') {
        name = ios.toLowerCase();
    }
    else if (md && mode === 'md') {
        name = md.toLowerCase();
    }
    else if (name && !(/^md-|^ios-|^logo-/.test(name))) {
        // this does not have one of the defaults
        // so lets auto add in the mode prefix for them
        name = mode + '-' + name.toLowerCase();
    }
    if (typeof name !== 'string' || name.trim() === '') {
        return null;
    }
    // only allow alpha characters and dash
    const invalidChars = name.replace(/[a-z]|-|\d/gi, '');
    if (invalidChars !== '') {
        return null;
    }
    return name;
}
function getSrc(src) {
    if (typeof src === 'string') {
        src = src.trim();
        if (src.length > 0 && /(\/|\.)/.test(src)) {
            return src;
        }
    }
    return null;
}
function validateContent(document, svgContent) {
    if (svgContent) {
        const frag = document.createDocumentFragment();
        const div = document.createElement('div');
        div.innerHTML = svgContent;
        frag.appendChild(div);
        // setup this way to ensure it works on our buddy IE
        for (let i = div.childNodes.length - 1; i >= 0; i--) {
            if (div.childNodes[i].nodeName.toLowerCase() !== 'svg') {
                div.removeChild(div.childNodes[i]);
            }
        }
        // must only have 1 root element
        const svgElm = div.firstElementChild;
        if (svgElm && svgElm.nodeName.toLowerCase() === 'svg') {
            // root element must be an svg
            // lets double check we've got valid elements
            // do not allow scripts
            if (isValid(svgElm)) {
                return div.innerHTML;
            }
        }
    }
    return '';
}
function isValid(elm) {
    if (elm.nodeType === 1) {
        if (elm.nodeName.toLowerCase() === 'script') {
            return false;
        }
        for (var i = 0; i < elm.attributes.length; i++) {
            let val = elm.attributes[i].value;
            if (typeof val === 'string' && val.toLowerCase().indexOf('on') === 0) {
                return false;
            }
        }
        for (i = 0; i < elm.childNodes.length; i++) {
            if (!isValid(elm.childNodes[i])) {
                return false;
            }
        }
    }
    return true;
}
function createColorClasses(color) {
    return (color) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : null;
}

export { Icon as IonIcon };
