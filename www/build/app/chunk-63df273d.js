/*! Built with http://stenciljs.com */
const { h } = window.App;

function assert(actual, reason) {
    if (!actual) {
        const message = 'ASSERT: ' + reason;
        console.error(message);
        debugger; // tslint:disable-line
        throw new Error(message);
    }
}
function now(ev) {
    return ev.timeStamp || Date.now();
}
function pointerCoord(ev) {
    // get X coordinates for either a mouse click
    // or a touch depending on the given event
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

export { debounceEvent as a, assert as b, now as c, deferEvent as d, debounce as e, pointerCoord as f };
