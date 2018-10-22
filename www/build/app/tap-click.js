/*! Built with http://stenciljs.com */
const { h } = window.App;

import { h as now, i as pointerCoord } from './chunk-cb94efc7.js';

function startTapClick(doc) {
    let lastTouch = -MOUSE_WAIT * 10;
    let lastActivated = 0;
    let cancelled = false;
    let scrolling = false;
    let activatableEle;
    let activeDefer;
    const clearDefers = new WeakMap();
    function onBodyClick(ev) {
        if (cancelled || scrolling) {
            ev.preventDefault();
            ev.stopPropagation();
        }
    }
    function onTouchStart(ev) {
        lastTouch = now(ev);
        pointerDown(ev);
    }
    function onTouchEnd(ev) {
        lastTouch = now(ev);
        pointerUp(ev);
    }
    function onMouseDown(ev) {
        const t = now(ev) - MOUSE_WAIT;
        if (lastTouch < t) {
            pointerDown(ev);
        }
    }
    function onMouseUp(ev) {
        const t = now(ev) - MOUSE_WAIT;
        if (lastTouch < t) {
            pointerUp(ev);
        }
    }
    function cancelActive() {
        clearTimeout(activeDefer);
        activeDefer = undefined;
        if (activatableEle) {
            removeActivated(false);
            activatableEle = undefined;
        }
        cancelled = true;
    }
    function pointerDown(ev) {
        if (activatableEle || scrolling) {
            return;
        }
        cancelled = false;
        setActivatedElement(getActivatableTarget(ev), ev);
    }
    function pointerUp(ev) {
        if (scrolling) {
            return;
        }
        setActivatedElement(undefined, ev);
        if (cancelled && ev.cancelable) {
            ev.preventDefault();
        }
    }
    function setActivatedElement(el, ev) {
        if (el && el === activatableEle) {
            return;
        }
        clearTimeout(activeDefer);
        activeDefer = undefined;
        const { x, y } = pointerCoord(ev);
        if (activatableEle) {
            if (clearDefers.has(activatableEle)) {
                throw new Error('internal error');
            }
            if (!activatableEle.classList.contains(ACTIVATED)) {
                addActivated(activatableEle, x, y);
            }
            removeActivated(true);
        }
        if (el) {
            const deferId = clearDefers.get(el);
            if (deferId) {
                clearTimeout(deferId);
                clearDefers.delete(el);
            }
            el.classList.remove(ACTIVATED);
            activeDefer = setTimeout(() => {
                addActivated(el, x, y);
                activeDefer = undefined;
            }, ADD_ACTIVATED_DEFERS);
        }
        activatableEle = el;
    }
    function addActivated(el, x, y) {
        lastActivated = Date.now();
        el.classList.add(ACTIVATED);
        const rippleEffect = getRippleEffect(el);
        if (rippleEffect && rippleEffect.addRipple) {
            rippleEffect.addRipple(x, y);
        }
    }
    function removeActivated(smooth) {
        const active = activatableEle;
        if (!active) {
            return;
        }
        const time = CLEAR_STATE_DEFERS - Date.now() + lastActivated;
        if (smooth && time > 0) {
            const deferId = setTimeout(() => {
                active.classList.remove(ACTIVATED);
                clearDefers.delete(active);
            }, CLEAR_STATE_DEFERS);
            clearDefers.set(active, deferId);
        }
        else {
            active.classList.remove(ACTIVATED);
        }
    }
    doc.body.addEventListener('click', onBodyClick, true);
    doc.body.addEventListener('ionScrollStart', () => {
        scrolling = true;
        cancelActive();
    });
    doc.body.addEventListener('ionScrollEnd', () => {
        scrolling = false;
    });
    doc.body.addEventListener('ionGestureCaptured', cancelActive);
    doc.addEventListener('touchstart', onTouchStart, true);
    doc.addEventListener('touchcancel', onTouchEnd, true);
    doc.addEventListener('touchend', onTouchEnd, true);
    doc.addEventListener('mousedown', onMouseDown, true);
    doc.addEventListener('mouseup', onMouseUp, true);
}
function getActivatableTarget(ev) {
    if (ev.composedPath) {
        const path = ev.composedPath();
        for (let i = 0; i < path.length - 2; i++) {
            const el = path[i];
            if (el.hasAttribute && el.hasAttribute('ion-activatable')) {
                return el;
            }
        }
    }
    else {
        return ev.target.closest('[ion-activatable]');
    }
}
function getRippleEffect(el) {
    if (el.shadowRoot) {
        const ripple = el.shadowRoot.querySelector('ion-ripple-effect');
        if (ripple) {
            return ripple;
        }
    }
    return el.querySelector('ion-ripple-effect');
}
const ACTIVATED = 'activated';
const ADD_ACTIVATED_DEFERS = 200;
const CLEAR_STATE_DEFERS = 200;
const MOUSE_WAIT = 2500;

export { startTapClick };
