/*! Built with http://stenciljs.com */
const { h } = window.App;

function rIC(callback) {
    if ('requestIdleCallback' in window) {
        window.requestIdleCallback(callback);
    }
    else {
        setTimeout(callback, 32);
    }
}
function hasShadowDom(el) {
    return !!el.shadowRoot && !!el.attachShadow;
}
function renderHiddenInput(container, name, value, disabled) {
    if (hasShadowDom(container)) {
        let input = container.querySelector('input.aux-input');
        if (!input) {
            input = container.ownerDocument.createElement('input');
            input.type = 'hidden';
            input.classList.add('aux-input');
            container.appendChild(input);
        }
        input.disabled = disabled;
        input.name = name;
        input.value = value;
    }
}
function assert(actual, reason) {
    if (!actual) {
        const message = 'ASSERT: ' + reason;
        console.error(message);
        debugger;
        throw new Error(message);
    }
}
function now(ev) {
    return ev.timeStamp || Date.now();
}
function pointerCoord(ev) {
    if (ev) {
        const changedTouches = ev.changedTouches;
        if (changedTouches && changedTouches.length > 0) {
            const touch = changedTouches[0];
            return { x: touch.clientX, y: touch.clientY };
        }
        if (ev.pageX !== undefined) {
            return { x: ev.pageX, y: ev.pageY };
        }
    }
    return { x: 0, y: 0 };
}
function deferEvent(event) {
    return debounceEvent(event, 0);
}
function debounceEvent(event, wait) {
    const original = event._original || event;
    return {
        _original: event,
        emit: debounce(original.emit.bind(original), wait)
    };
}
function debounce(func, wait = 0) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(func, wait, ...args);
    };
}

function hostContext(selector, el) {
    return el.closest(selector) !== null;
}
function createColorClasses(color) {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
}
function createThemedClasses(mode, name) {
    return {
        [name]: true,
        [`${name}-${mode}`]: !!mode
    };
}
async function openURL(win, url, ev, direction) {
    if (url != null && url[0] !== '#' && url.indexOf('://') === -1) {
        const router = win.document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            await router.componentOnReady();
            return router.push(url, direction);
        }
    }
    return false;
}

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

export { hasShadowDom as a, debounceEvent as b, deferEvent as c, renderHiddenInput as d, rIC as e, assert as f, debounce as g, now as h, pointerCoord as i, createColorClasses as j, openURL as k, hostContext as l, createThemedClasses as m, isPlatform as n };
