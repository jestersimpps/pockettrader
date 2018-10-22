/*! Built with http://stenciljs.com */
const { h } = window.App;

function getName(name, mode, ios, md) {
    mode = (mode || 'md').toLowerCase();
    if (ios && mode === 'ios') {
        name = ios.toLowerCase();
    }
    else if (md && mode === 'md') {
        name = md.toLowerCase();
    }
    else if (name) {
        name = name.toLowerCase();
        if (!/^md-|^ios-|^logo-/.test(name)) {
            name = `${mode}-${name}`;
        }
    }
    if (typeof name !== 'string' || name.trim() === '') {
        return null;
    }
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
function isValid(elm) {
    if (elm.nodeType === 1) {
        if (elm.nodeName.toLowerCase() === 'script') {
            return false;
        }
        for (let i = 0; i < elm.attributes.length; i++) {
            const val = elm.attributes[i].value;
            if (typeof val === 'string' && val.toLowerCase().indexOf('on') === 0) {
                return false;
            }
        }
        for (let i = 0; i < elm.childNodes.length; i++) {
            if (!isValid(elm.childNodes[i])) {
                return false;
            }
        }
    }
    return true;
}

class Icon {
    constructor() {
        this.isVisible = false;
        this.lazy = false;
    }
    componentWillLoad() {
        this.waitUntilVisible(this.el, "50px", () => {
            this.isVisible = true;
            this.loadIcon();
        });
    }
    componentDidUnload() {
        if (this.io) {
            this.io.disconnect();
            this.io = undefined;
        }
    }
    waitUntilVisible(el, rootMargin, cb) {
        if (this.lazy && this.win && this.win.IntersectionObserver) {
            const io = this.io = new this.win.IntersectionObserver((data) => {
                if (data[0].isIntersecting) {
                    io.disconnect();
                    this.io = undefined;
                    cb();
                }
            }, { rootMargin });
            io.observe(el);
        }
        else {
            cb();
        }
    }
    loadIcon() {
        if (!this.isServer && this.isVisible) {
            const url = this.getUrl();
            if (url) {
                getSvgContent(this.doc, url, "s-ion-icon")
                    .then(svgContent => this.svgContent = svgContent);
            }
        }
        if (!this.ariaLabel) {
            const name = getName(this.name, this.mode, this.ios, this.md);
            if (name) {
                this.ariaLabel = name
                    .replace("ios-", "")
                    .replace("md-", "")
                    .replace(/\-/g, " ");
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
            "role": "img",
            class: Object.assign({}, createColorClasses(this.color), { [`icon-${this.size}`]: !!this.size })
        };
    }
    render() {
        if (!this.isServer && this.svgContent) {
            return h("div", { class: "icon-inner", innerHTML: this.svgContent });
        }
        return h("div", { class: "icon-inner" });
    }
    static get is() { return "ion-icon"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
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
            "lazy": {
                "type": Boolean,
                "attr": "lazy"
            },
            "md": {
                "type": String,
                "attr": "md"
            },
            "mode": {
                "type": String,
                "attr": "mode"
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
        };
    }
    static get style() { return ":host {\n  display: inline-block;\n\n  width: 1em;\n  height: 1em;\n\n  contain: strict;\n\n  -webkit-box-sizing: content-box !important;\n\n  box-sizing: content-box !important;\n}\n\n:host(.ion-color) {\n  color: var(--ion-color-base) !important;\n}\n\n:host(.icon-small) {\n  font-size: var(--ion-icon-size-small, 18px) !important;\n}\n\n:host(.icon-large){\n  font-size: var(--ion-icon-size-large, 32px) !important;\n}\n\n.icon-inner,\nsvg {\n  display: block;\n\n  fill: currentColor;\n  stroke: currentColor;\n\n  height: 100%;\n  width: 100%;\n}\n\n/* Set iOS Icon Colors */\n/* ------------------- */\n\n:host(.ion-color-primary) {\n  --ion-color-base: var(--ion-color-primary, #3880ff);\n}\n\n:host(.ion-color-secondary) {\n  --ion-color-base: var(--ion-color-secondary, #0cd1e8);\n}\n\n:host(.ion-color-tertiary) {\n  --ion-color-base: var(--ion-color-tertiary, #f4a942);\n}\n\n:host(.ion-color-success) {\n  --ion-color-base: var(--ion-color-success, #10dc60);\n}\n\n:host(.ion-color-warning) {\n  --ion-color-base: var(--ion-color-warning, #ffce00);\n}\n\n:host(.ion-color-danger) {\n  --ion-color-base: var(--ion-color-danger, #f14141);\n}\n\n:host(.ion-color-light) {\n  --ion-color-base: var(--ion-color-light, #f4f5f8);\n}\n\n:host(.ion-color-medium) {\n  --ion-color-base: var(--ion-color-medium, #989aa2);\n}\n\n:host(.ion-color-dark) {\n  --ion-color-base: var(--ion-color-dark, #222428);\n}"; }
}
const requests = new Map();
function getSvgContent(doc, url, scopedId) {
    let req = requests.get(url);
    if (!req) {
        req = fetch(url, { cache: "force-cache" }).then(rsp => {
            if (rsp.ok) {
                return rsp.text();
            }
            return Promise.resolve(null);
        }).then(svgContent => validateContent(doc, svgContent, scopedId));
        requests.set(url, req);
    }
    return req;
}
function validateContent(document, svgContent, scopeId) {
    if (svgContent) {
        const frag = document.createDocumentFragment();
        const div = document.createElement("div");
        div.innerHTML = svgContent;
        frag.appendChild(div);
        for (let i = div.childNodes.length - 1; i >= 0; i--) {
            if (div.childNodes[i].nodeName.toLowerCase() !== "svg") {
                div.removeChild(div.childNodes[i]);
            }
        }
        const svgElm = div.firstElementChild;
        if (svgElm && svgElm.nodeName.toLowerCase() === "svg") {
            if (scopeId) {
                svgElm.setAttribute("class", scopeId);
            }
            if (isValid(svgElm)) {
                return div.innerHTML;
            }
        }
    }
    return "";
}
function createColorClasses(color) {
    return (color) ? {
        "ion-color": true,
        [`ion-color-${color}`]: true
    } : null;
}

export { Icon as IonIcon };
