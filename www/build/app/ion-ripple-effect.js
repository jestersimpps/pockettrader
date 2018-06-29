/*! Built with http://stenciljs.com */
const { h } = window.App;

import { c as now } from './chunk-63df273d.js';

class RippleEffect {
    constructor() {
        this.lastClick = -10000;
        this.tapClick = false;
    }
    tapClickChanged(tapClick) {
        this.enableListener(this, 'parent:ionActivated', tapClick);
        this.enableListener(this, 'touchstart', !tapClick);
        this.enableListener(this, 'mousedown', !tapClick);
    }
    ionActivated(ev) {
        this.addRipple(ev.detail.x, ev.detail.y);
    }
    touchStart(ev) {
        this.lastClick = now(ev);
        const touches = ev.touches[0];
        this.addRipple(touches.clientX, touches.clientY);
    }
    mouseDown(ev) {
        const timeStamp = now(ev);
        if (this.lastClick < (timeStamp - 1000)) {
            this.addRipple(ev.pageX, ev.pageY);
        }
    }
    componentDidLoad() {
        this.tapClickChanged(this.tapClick);
    }
    addRipple(pageX, pageY) {
        let x, y, size;
        this.queue.read(() => {
            const rect = this.el.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;
            size = Math.min(Math.sqrt(width * width + height * height) * 2, MAX_RIPPLE_DIAMETER);
            x = pageX - rect.left - (size / 2);
            y = pageY - rect.top - (size / 2);
        });
        this.queue.write(() => {
            const div = this.doc.createElement('div');
            div.classList.add('ripple-effect');
            const style = div.style;
            const duration = Math.max(RIPPLE_FACTOR * Math.sqrt(size), MIN_RIPPLE_DURATION);
            style.top = y + 'px';
            style.left = x + 'px';
            style.width = size + 'px';
            style.height = size + 'px';
            style.animationDuration = duration + 'ms';
            this.el.appendChild(div);
            setTimeout(() => div.remove(), duration + 50);
        });
    }
    static get is() { return "ion-ripple-effect"; }
    static get properties() { return {
        "addRipple": {
            "method": true
        },
        "doc": {
            "context": "document"
        },
        "el": {
            "elementRef": true
        },
        "enableListener": {
            "context": "enableListener"
        },
        "queue": {
            "context": "queue"
        },
        "tapClick": {
            "type": Boolean,
            "attr": "tap-click",
            "watchCallbacks": ["tapClickChanged"]
        }
    }; }
    static get listeners() { return [{
            "name": "parent:ionActivated",
            "method": "ionActivated",
            "disabled": true
        }, {
            "name": "touchstart",
            "method": "touchStart",
            "disabled": true,
            "passive": true
        }, {
            "name": "mousedown",
            "method": "mouseDown",
            "disabled": true,
            "passive": true
        }]; }
    static get style() { return "ion-ripple-effect {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  contain: strict; }\n\n.ripple-effect {\n  border-radius: 50%;\n  position: absolute;\n  background-color: var(--ion-ripple-background-color, #000);\n  opacity: 0;\n  will-change: transform, opacity;\n  pointer-events: none;\n  -webkit-animation-name: rippleAnimation;\n  animation-name: rippleAnimation;\n  -webkit-animation-duration: 200ms;\n  animation-duration: 200ms;\n  -webkit-animation-timing-function: ease-out;\n  animation-timing-function: ease-out;\n  contain: strict; }\n\n\@-webkit-keyframes rippleAnimation {\n  0% {\n    opacity: .2;\n    -webkit-transform: scale(0.1);\n    transform: scale(0.1); }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n\@keyframes rippleAnimation {\n  0% {\n    opacity: .2;\n    -webkit-transform: scale(0.1);\n    transform: scale(0.1); }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }"; }
}
const RIPPLE_FACTOR = 35;
const MIN_RIPPLE_DURATION = 260;
const MAX_RIPPLE_DIAMETER = 550;

export { RippleEffect as IonRippleEffect };
