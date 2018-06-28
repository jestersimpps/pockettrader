/*! Built with http://stenciljs.com */
App.loadBundle("chunk-e404d330.js", ["exports"], function (n) { function e(n, e) { var o = n._original || n; return { _original: n, emit: t(o.emit.bind(o), e) }; } function t(n, e) {
    if (e === void 0) { e = 0; }
    var t;
    return function () {
        var o = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            o[_i] = arguments[_i];
        }
        clearTimeout(t), t = setTimeout.apply(void 0, [n, e].concat(o));
    };
} window.App.h, n.assert = function (n, e) { if (!n) {
    var n_1 = "ASSERT: " + e;
    throw console.error(n_1), new Error(n_1);
} }, n.debounce = t, n.now = function (n) { return n.timeStamp || Date.now(); }, n.pointerCoord = function (n) { if (n) {
    var e_1 = n.changedTouches;
    if (e_1 && e_1.length > 0) {
        var n_2 = e_1[0];
        return { x: n_2.clientX, y: n_2.clientY };
    }
    if (void 0 !== n.pageX)
        return { x: n.pageX, y: n.pageY };
} return { x: 0, y: 0 }; }, n.debounceEvent = e, n.deferEvent = function (n) { return e(n, 0); }; });
