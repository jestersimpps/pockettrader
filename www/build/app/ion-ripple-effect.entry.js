/*! Built with http://stenciljs.com */
const { h } = window.App;

import { e as rIC } from './chunk-cb94efc7.js';

class RippleEffect {
    addRipple(pageX, pageY) {
        if (this.config.getBoolean("animated", true)) {
            rIC(() => this.prepareRipple(pageX, pageY));
        }
    }
    prepareRipple(pageX, pageY) {
        let x;
        let y;
        let size;
        this.queue.read(() => {
            const rect = this.el.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;
            size = Math.min(Math.sqrt(width * width + height * height) * 2, MAX_RIPPLE_DIAMETER);
            x = pageX - rect.left - (size * 0.5);
            y = pageY - rect.top - (size * 0.5);
        });
        this.queue.write(() => {
            const div = this.win.document.createElement("div");
            div.classList.add("ripple-effect");
            const style = div.style;
            const duration = Math.max(RIPPLE_FACTOR * Math.sqrt(size), MIN_RIPPLE_DURATION);
            style.top = y + "px";
            style.left = x + "px";
            style.width = style.height = size + "px";
            style.animationDuration = duration + "ms";
            const container = this.el.shadowRoot || this.el;
            container.appendChild(div);
            setTimeout(() => div.remove(), duration + 50);
        });
    }
    static get is() { return "ion-ripple-effect"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "addRipple": {
                "method": true
            },
            "config": {
                "context": "config"
            },
            "el": {
                "elementRef": true
            },
            "queue": {
                "context": "queue"
            },
            "win": {
                "context": "window"
            }
        };
    }
    static get style() { return ":host {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  contain: strict; }\n\n.ripple-effect {\n  border-radius: 50%;\n  position: absolute;\n  background-color: currentColor;\n  color: inherit;\n  contain: strict;\n  opacity: 0;\n  -webkit-animation-name: rippleAnimation;\n  animation-name: rippleAnimation;\n  -webkit-animation-duration: 200ms;\n  animation-duration: 200ms;\n  -webkit-animation-timing-function: ease-out;\n  animation-timing-function: ease-out;\n  will-change: transform, opacity;\n  pointer-events: none; }\n\n\@-webkit-keyframes rippleAnimation {\n  0% {\n    -webkit-transform: scale(0.1);\n    transform: scale(0.1);\n    opacity: .2; }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 0; } }\n\n\@keyframes rippleAnimation {\n  0% {\n    -webkit-transform: scale(0.1);\n    transform: scale(0.1);\n    opacity: .2; }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 0; } }"; }
}
const RIPPLE_FACTOR = 35;
const MIN_RIPPLE_DURATION = 260;
const MAX_RIPPLE_DIAMETER = 550;

export { RippleEffect as IonRippleEffect };
