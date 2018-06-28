/*! Built with http://stenciljs.com */
App.loadBundle("chunk-bfe73137.js", ["exports"], function (e) { window.App.h, e.attachComponent = function (e, n, t, o, r) { if (e)
    return e.attachViewToDom(n, t, r, o); if ("string" != typeof t && !(t instanceof HTMLElement))
    throw new Error("framework delegate is missing"); var i = "string" == typeof t ? n.ownerDocument.createElement(t) : t; return o && o.forEach(function (e) { return i.classList.add(e); }), r && Object.assign(i, r), n.appendChild(i), i.componentOnReady ? i.componentOnReady() : Promise.resolve(i); }; });
