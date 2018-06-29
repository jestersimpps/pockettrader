/*! Built with http://stenciljs.com */
const { h } = window.App;

import { f as pointerCoord } from './chunk-63df273d.js';

const RELOCATED_KEY = '$ionRelocated';
function relocateInput(componentEl, inputEl, shouldRelocate, inputRelativeY = 0) {
    if (componentEl[RELOCATED_KEY] === shouldRelocate) {
        return;
    }
    console.debug(`native-input, hideCaret, shouldHideCaret: ${shouldRelocate}, input value: ${inputEl.value}`);
    if (shouldRelocate) {
        // this allows for the actual input to receive the focus from
        // the user's touch event, but before it receives focus, it
        // moves the actual input to a location that will not screw
        // up the app's layout, and does not allow the native browser
        // to attempt to scroll the input into place (messing up headers/footers)
        // the cloned input fills the area of where native input should be
        // while the native input fakes out the browser by relocating itself
        // before it receives the actual focus event
        // We hide the focused input (with the visible caret) invisiable by making it scale(0),
        cloneInputComponent(componentEl, inputEl);
        const doc = componentEl.ownerDocument;
        const tx = doc.dir === 'rtl' ? 9999 : -9999;
        inputEl.style.transform = `translate3d(${tx}px,${inputRelativeY}px,0)`;
        // TODO
        // inputEle.style.opacity = '0';
    }
    else {
        removeClone(componentEl, inputEl);
    }
    componentEl[RELOCATED_KEY] = shouldRelocate;
}
function isFocused(input) {
    return input === input.ownerDocument.activeElement;
}
function removeClone(componentEl, inputEl) {
    if (componentEl && componentEl.parentElement) {
        const clonedInputEles = componentEl.parentElement.querySelectorAll('.cloned-input');
        for (let i = 0; i < clonedInputEles.length; i++) {
            clonedInputEles[i].remove();
        }
        componentEl.style.pointerEvents = '';
    }
    inputEl.style['transform'] = '';
    inputEl.style.opacity = '';
}
function cloneInputComponent(componentEl, inputEl) {
    // Make sure we kill all the clones before creating new ones
    // It is a defensive, removeClone() should do nothing
    // removeClone(plt, srcComponentEle, srcNativeInputEle);
    // given a native <input> or <textarea> element
    // find its parent wrapping component like <ion-input> or <ion-textarea>
    // then clone the entire component
    const parentElement = componentEl.parentElement;
    const doc = componentEl.ownerDocument;
    if (componentEl && parentElement) {
        // DOM READ
        const srcTop = componentEl.offsetTop;
        const srcLeft = componentEl.offsetLeft;
        const srcWidth = componentEl.offsetWidth;
        const srcHeight = componentEl.offsetHeight;
        // DOM WRITE
        // not using deep clone so we don't pull in unnecessary nodes
        const clonedComponentEle = doc.createElement('div');
        const clonedStyle = clonedComponentEle.style;
        clonedComponentEle.classList.add(...Array.from(componentEl.classList));
        clonedComponentEle.classList.add('cloned-input');
        clonedComponentEle.setAttribute('aria-hidden', 'true');
        clonedStyle.pointerEvents = 'none';
        clonedStyle.position = 'absolute';
        clonedStyle.top = srcTop + 'px';
        clonedStyle.left = srcLeft + 'px';
        clonedStyle.width = srcWidth + 'px';
        clonedStyle.height = srcHeight + 'px';
        const clonedInputEl = doc.createElement('input');
        clonedInputEl.classList.add(...Array.from(inputEl.classList));
        clonedInputEl.value = inputEl.value;
        clonedInputEl.type = inputEl.type;
        clonedInputEl.placeholder = inputEl.placeholder;
        clonedInputEl.tabIndex = -1;
        clonedComponentEle.appendChild(clonedInputEl);
        parentElement.appendChild(clonedComponentEle);
        componentEl.style.pointerEvents = 'none';
    }
    inputEl.style.transform = 'scale(0)';
}

function enableHideCaretOnScroll(componentEl, inputEl, scrollEl) {
    if (!scrollEl || !inputEl) {
        return () => { return; };
    }
    console.debug('Input: enableHideCaretOnScroll');
    const scrollHideCaret = (shouldHideCaret) => {
        // console.log('scrollHideCaret', shouldHideCaret)
        if (isFocused(inputEl)) {
            relocateInput(componentEl, inputEl, shouldHideCaret);
        }
    };
    const onBlur = () => relocateInput(componentEl, inputEl, false);
    const hideCaret = () => scrollHideCaret(true);
    const showCaret = () => scrollHideCaret(false);
    scrollEl && scrollEl.addEventListener('ionScrollStart', hideCaret);
    scrollEl && scrollEl.addEventListener('ionScrollEnd', showCaret);
    inputEl.addEventListener('blur', onBlur);
    return () => {
        scrollEl.removeEventListener('ionScrollStart', hideCaret);
        scrollEl.removeEventListener('ionScrollEnd', showCaret);
        inputEl.addEventListener('ionBlur', onBlur);
    };
}

const SKIP_BLURRING = ['INPUT', 'TEXTAREA', 'ION-INPUT', 'ION-TEXTAREA'];
function enableInputBlurring(doc) {
    console.debug('Input: enableInputBlurring');
    let focused = true;
    let didScroll = false;
    function onScroll() {
        didScroll = true;
    }
    function onFocusin() {
        focused = true;
    }
    function onTouchend(ev) {
        // if app did scroll return early
        if (didScroll) {
            didScroll = false;
            return;
        }
        const active = doc.activeElement;
        if (!active) {
            return;
        }
        // only blur if the active element is a text-input or a textarea
        if (SKIP_BLURRING.indexOf(active.tagName) === -1) {
            return;
        }
        // if the selected target is the active element, do not blur
        const tapped = ev.target;
        if (tapped === active) {
            return;
        }
        if (SKIP_BLURRING.indexOf(tapped.tagName) >= 0) {
            return;
        }
        // skip if div is a cover
        if (tapped.classList.contains('input-cover')) {
            return;
        }
        focused = false;
        // TODO: find a better way, why 50ms?
        setTimeout(() => {
            if (!focused) {
                active.blur();
            }
        }, 50);
    }
    doc.addEventListener('ionScrollStart', onScroll);
    doc.addEventListener('focusin', onFocusin, true);
    doc.addEventListener('touchend', onTouchend, false);
    return () => {
        doc.removeEventListener('ionScrollStart', onScroll, true);
        doc.removeEventListener('focusin', onFocusin, true);
        doc.removeEventListener('touchend', onTouchend, false);
    };
}

const SCROLL_ASSIST_SPEED = 0.3;
function getScrollData(componentEl, contentEl, keyboardHeight) {
    if (!contentEl) {
        return {
            scrollAmount: 0,
            scrollPadding: 0,
            scrollDuration: 0,
            inputSafeY: 0,
        };
    }
    const itemEl = componentEl.closest('ion-item,[ion-item]') || componentEl;
    return calcScrollData(itemEl.getBoundingClientRect(), contentEl.getBoundingClientRect(), keyboardHeight, window.innerHeight);
}
function calcScrollData(inputRect, contentRect, keyboardHeight, plaformHeight) {
    // compute input's Y values relative to the body
    const inputTop = inputRect.top;
    const inputBottom = inputRect.bottom;
    // compute visible area
    const visibleAreaTop = contentRect.top;
    const visibleAreaBottom = Math.min(contentRect.bottom, plaformHeight - keyboardHeight);
    // compute safe area
    const safeAreaTop = visibleAreaTop + 10;
    const safeAreaBottom = visibleAreaBottom / 2.0;
    // figure out if each edge of teh input is within the safe area
    const distanceToBottom = safeAreaBottom - inputBottom;
    const distanceToTop = safeAreaTop - inputTop;
    // The scrollAmount is the negated distance to the safe area.
    const scrollAmount = Math.round((distanceToBottom < 0)
        ? -distanceToBottom
        : (distanceToTop > 0)
            ? -distanceToTop
            : 0);
    const distance = Math.abs(scrollAmount);
    const duration = distance / SCROLL_ASSIST_SPEED;
    const scrollDuration = Math.min(400, Math.max(150, duration));
    return {
        scrollAmount,
        scrollDuration,
        scrollPadding: keyboardHeight,
        inputSafeY: -(inputTop - safeAreaTop) + 4
    };
}

function enableScrollAssist(componentEl, inputEl, contentEl, keyboardHeight) {
    let coord;
    const touchStart = (ev) => {
        coord = pointerCoord(ev);
        console.debug(`input-base, pointerStart, type: ${ev.type}`);
    };
    const touchEnd = (ev) => {
        // input cover touchend/mouseup
        console.debug(`input-base, pointerEnd, type: ${ev.type}`);
        if (!coord) {
            return;
        }
        // get where the touchend/mouseup ended
        const endCoord = pointerCoord(ev);
        // focus this input if the pointer hasn't moved XX pixels
        // and the input doesn't already have focus
        if (!hasPointerMoved(6, coord, endCoord) && !isFocused(inputEl)) {
            ev.preventDefault();
            ev.stopPropagation();
            // begin the input focus process
            jsSetFocus(componentEl, inputEl, contentEl, keyboardHeight);
        }
    };
    componentEl.addEventListener('touchstart', touchStart, true);
    componentEl.addEventListener('touchend', touchEnd, true);
    return () => {
        componentEl.removeEventListener('touchstart', touchStart, true);
        componentEl.removeEventListener('touchend', touchEnd, true);
    };
}
function jsSetFocus(componentEl, inputEl, contentEl, keyboardHeight) {
    const scrollData = getScrollData(componentEl, contentEl, keyboardHeight);
    if (Math.abs(scrollData.scrollAmount) < 4) {
        // the text input is in a safe position that doesn't
        // require it to be scrolled into view, just set focus now
        inputEl.focus();
        return;
    }
    // temporarily move the focus to the focus holder so the browser
    // doesn't freak out while it's trying to get the input in place
    // at this point the native text input still does not have focus
    relocateInput(componentEl, inputEl, true, scrollData.inputSafeY);
    inputEl.focus();
    // scroll the input into place
    contentEl.scrollByPoint(0, scrollData.scrollAmount, scrollData.scrollDuration, () => {
        // the scroll view is in the correct position now
        // give the native text input focus
        relocateInput(componentEl, inputEl, false, scrollData.inputSafeY);
        // ensure this is the focused input
        inputEl.focus();
    });
}
function hasPointerMoved(threshold, startCoord, endCoord) {
    if (startCoord && endCoord) {
        const deltaX = (startCoord.x - endCoord.x);
        const deltaY = (startCoord.y - endCoord.y);
        const distance = deltaX * deltaX + deltaY * deltaY;
        return distance > (threshold * threshold);
    }
    return false;
}

const PADDING_TIMER_KEY = '$ionPaddingTimer';
function enableScrollPadding(doc, keyboardHeight) {
    console.debug('Input: enableScrollPadding');
    function onFocusin(ev) {
        setScrollPadding(ev.target, keyboardHeight);
    }
    function onFocusout(ev) {
        setScrollPadding(ev.target, 0);
    }
    doc.addEventListener('focusin', onFocusin);
    doc.addEventListener('focusout', onFocusout);
    return () => {
        doc.removeEventListener('focusin', onFocusin);
        doc.removeEventListener('focusout', onFocusout);
    };
}
function setScrollPadding(input, keyboardHeight) {
    if (input.tagName !== 'INPUT') {
        return;
    }
    if (input.parentElement && input.parentElement.tagName === 'ION-INPUT') {
        return;
    }
    const el = input.closest('.scroll-inner');
    if (!el) {
        return;
    }
    const timer = el[PADDING_TIMER_KEY];
    if (timer) {
        clearTimeout(timer);
    }
    if (keyboardHeight > 0) {
        el.style.paddingBottom = keyboardHeight + 'px';
    }
    else {
        el[PADDING_TIMER_KEY] = setTimeout(() => {
            el.style.paddingBottom = '';
        }, 120);
    }
}

const INPUT_BLURRING = true;
const SCROLL_PADDING = true;
function startInputShims(doc, config) {
    const keyboardHeight = config.getNumber('keyboardHeight', 290);
    const scrollAssist = config.getBoolean('scrollAssist', true);
    const hideCaret = config.getBoolean('hideCaretOnScroll', true);
    const inputBlurring = config.getBoolean('inputBlurring', true);
    const scrollPadding = config.getBoolean('scrollPadding', true);
    const hideCaretMap = new WeakMap();
    const scrollAssistMap = new WeakMap();
    function registerInput(componentEl) {
        const inputEl = componentEl.querySelector('input');
        const scrollEl = componentEl.closest('ion-scroll');
        const contentEl = componentEl.closest('ion-content');
        if (!inputEl) {
            return;
        }
        if (scrollEl && hideCaret && !hideCaretMap.has(componentEl)) {
            const rmFn = enableHideCaretOnScroll(componentEl, inputEl, scrollEl);
            hideCaretMap.set(componentEl, rmFn);
        }
        if (contentEl && scrollAssist && !scrollAssistMap.has(componentEl)) {
            const rmFn = enableScrollAssist(componentEl, inputEl, contentEl, keyboardHeight);
            scrollAssistMap.set(componentEl, rmFn);
        }
    }
    function unregisterInput(componentEl) {
        if (hideCaret) {
            const fn = hideCaretMap.get(componentEl);
            fn && fn();
            hideCaretMap.delete(componentEl);
        }
        if (scrollAssist) {
            const fn = scrollAssistMap.get(componentEl);
            fn && fn();
            scrollAssistMap.delete(componentEl);
        }
    }
    if (inputBlurring && INPUT_BLURRING) {
        enableInputBlurring(doc);
    }
    if (scrollPadding && SCROLL_PADDING) {
        enableScrollPadding(doc, keyboardHeight);
    }
    // Input might be already loaded in the DOM before ion-device-hacks did.
    // At this point we need to look for all the ion-inputs not registered yet
    // and register them.
    const inputs = Array.from(doc.querySelectorAll('ion-input'));
    for (const input of inputs) {
        registerInput(input);
    }
    doc.body.addEventListener('ionInputDidLoad', (event) => {
        registerInput(event.target);
    });
    doc.body.addEventListener('ionInputDidUnload', (event) => {
        unregisterInput(event.target);
    });
}

export { startInputShims };
