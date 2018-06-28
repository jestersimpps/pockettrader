/*! Built with http://stenciljs.com */
App.loadBundle("chunk-cd16bb21.js", ["exports", "./chunk-d9dbd310.js"], function (e, n) { window.App.h; var r = n.createCommonjsModule(function (e, r) { e.exports = function e(r, t, o) { function i(c, u) { if (!t[c]) {
    if (!r[c]) {
        var f = "function" == typeof n.commonjsRequire && n.commonjsRequire;
        if (!u && f)
            return f(c, !0);
        if (a)
            return a(c, !0);
        var s = new Error("Cannot find module '" + c + "'");
        throw s.code = "MODULE_NOT_FOUND", s;
    }
    var l = t[c] = { exports: {} };
    r[c][0].call(l.exports, function (e) { return i(r[c][1][e] || e); }, l, l.exports, e, r, t, o);
} return t[c].exports; } for (var a = "function" == typeof n.commonjsRequire && n.commonjsRequire, c = 0; c < o.length; c++)
    i(o[c]); return i; }({ 1: [function (e, r, t) { (function (e) { var n, t, o = e.MutationObserver || e.WebKitMutationObserver; if (o) {
            var i = 0, a = new o(s), c = e.document.createTextNode("");
            a.observe(c, { characterData: !0 }), n = function () { c.data = i = ++i % 2; };
        }
        else if (e.setImmediate || void 0 === e.MessageChannel)
            n = "document" in e && "onreadystatechange" in e.document.createElement("script") ? function () { var n = e.document.createElement("script"); n.onreadystatechange = function () { s(), n.onreadystatechange = null, n.parentNode.removeChild(n), n = null; }, e.document.documentElement.appendChild(n); } : function () { setTimeout(s, 0); };
        else {
            var u = new e.MessageChannel;
            u.port1.onmessage = s, n = function () { u.port2.postMessage(0); };
        } var f = []; function s() { var e, n; t = !0; for (var r = f.length; r;) {
            for (n = f, f = [], e = -1; ++e < r;)
                n[e]();
            r = f.length;
        } t = !1; } r.exports = function (e) { 1 !== f.push(e) || t || n(); }; }).call(this, void 0 !== n.commonjsGlobal ? n.commonjsGlobal : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}); }, {}], 2: [function (e, n, r) { var t = e(1); function o() { } var i = {}, a = ["REJECTED"], c = ["FULFILLED"], u = ["PENDING"]; function f(e) { if ("function" != typeof e)
            throw new TypeError("resolver must be a function"); this.state = u, this.queue = [], this.outcome = void 0, e !== o && v(this, e); } function s(e, n, r) { this.promise = e, "function" == typeof n && (this.onFulfilled = n, this.callFulfilled = this.otherCallFulfilled), "function" == typeof r && (this.onRejected = r, this.callRejected = this.otherCallRejected); } function l(e, n, r) { t(function () { var t; try {
            t = n(r);
        }
        catch (n) {
            return i.reject(e, n);
        } t === e ? i.reject(e, new TypeError("Cannot resolve promise with itself")) : i.resolve(e, t); }); } function d(e) { var n = e && e.then; if (e && ("object" == typeof e || "function" == typeof e) && "function" == typeof n)
            return function () { n.apply(e, arguments); }; } function v(e, n) { var r = !1; function t(n) { r || (r = !0, i.reject(e, n)); } function o(n) { r || (r = !0, i.resolve(e, n)); } var a = h(function () { n(o, t); }); "error" === a.status && t(a.value); } function h(e, n) { var r = {}; try {
            r.value = e(n), r.status = "success";
        }
        catch (e) {
            r.status = "error", r.value = e;
        } return r; } n.exports = f, f.prototype.catch = function (e) { return this.then(null, e); }, f.prototype.then = function (e, n) { if ("function" != typeof e && this.state === c || "function" != typeof n && this.state === a)
            return this; var r = new this.constructor(o); this.state !== u ? l(r, this.state === c ? e : n, this.outcome) : this.queue.push(new s(r, e, n)); return r; }, s.prototype.callFulfilled = function (e) { i.resolve(this.promise, e); }, s.prototype.otherCallFulfilled = function (e) { l(this.promise, this.onFulfilled, e); }, s.prototype.callRejected = function (e) { i.reject(this.promise, e); }, s.prototype.otherCallRejected = function (e) { l(this.promise, this.onRejected, e); }, i.resolve = function (e, n) { var r = h(d, n); if ("error" === r.status)
            return i.reject(e, r.value); var t = r.value; if (t)
            v(e, t);
        else {
            e.state = c, e.outcome = n;
            for (var o = -1, a = e.queue.length; ++o < a;)
                e.queue[o].callFulfilled(n);
        } return e; }, i.reject = function (e, n) { e.state = a, e.outcome = n; for (var r = -1, t = e.queue.length; ++r < t;)
            e.queue[r].callRejected(n); return e; }, f.resolve = function (e) { return e instanceof this ? e : i.resolve(new this(o), e); }, f.reject = function (e) { var n = new this(o); return i.reject(n, e); }, f.all = function (e) { var n = this; if ("[object Array]" !== Object.prototype.toString.call(e))
            return this.reject(new TypeError("must be an array")); var r = e.length, t = !1; if (!r)
            return this.resolve([]); for (var a = new Array(r), c = 0, u = -1, f = new this(o); ++u < r;)
            s(e[u], u); return f; function s(e, o) { n.resolve(e).then(function (e) { a[o] = e, ++c !== r || t || (t = !0, i.resolve(f, a)); }, function (e) { t || (t = !0, i.reject(f, e)); }); } }, f.race = function (e) { if ("[object Array]" !== Object.prototype.toString.call(e))
            return this.reject(new TypeError("must be an array")); var n = e.length, r = !1; if (!n)
            return this.resolve([]); for (var t, a = -1, c = new this(o); ++a < n;)
            t = e[a], this.resolve(t).then(function (e) { r || (r = !0, i.resolve(c, e)); }, function (e) { r || (r = !0, i.reject(c, e)); }); return c; }; }, { 1: 1 }], 3: [function (e, r, t) { (function (n) { "function" != typeof n.Promise && (n.Promise = e(2)); }).call(this, void 0 !== n.commonjsGlobal ? n.commonjsGlobal : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}); }, { 2: 2 }], 4: [function (e, n, r) { var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e; } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e; }, o = function () { try {
            if ("undefined" != typeof indexedDB)
                return indexedDB;
            if ("undefined" != typeof webkitIndexedDB)
                return webkitIndexedDB;
            if ("undefined" != typeof mozIndexedDB)
                return mozIndexedDB;
            if ("undefined" != typeof OIndexedDB)
                return OIndexedDB;
            if ("undefined" != typeof msIndexedDB)
                return msIndexedDB;
        }
        catch (e) {
            return;
        } }(); function i(e, n) { e = e || [], n = n || {}; try {
            return new Blob(e, n);
        }
        catch (o) {
            if ("TypeError" !== o.name)
                throw o;
            for (var r = new ("undefined" != typeof BlobBuilder ? BlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : WebKitBlobBuilder), t = 0; t < e.length; t += 1)
                r.append(e[t]);
            return r.getBlob(n.type);
        } } "undefined" == typeof Promise && e(3); var a = Promise; function c(e, n) { n && e.then(function (e) { n(null, e); }, function (e) { n(e); }); } function u(e, n, r) { "function" == typeof n && e.then(n), "function" == typeof r && e.catch(r); } function f(e) { return "string" != typeof e && (console.warn(e + " used as a key, but it is not a string."), e = String(e)), e; } function s() { if (arguments.length && "function" == typeof arguments[arguments.length - 1])
            return arguments[arguments.length - 1]; } var l = "local-forage-detect-blob-support", d = void 0, v = {}, h = Object.prototype.toString, y = "readwrite"; function p(e) { var n = v[e.name], r = {}; r.promise = new a(function (e, n) { r.resolve = e, r.reject = n; }), n.deferredOperations.push(r), n.dbReady ? n.dbReady = n.dbReady.then(function () { return r.promise; }) : n.dbReady = r.promise; } function b(e) { var n = v[e.name].deferredOperations.pop(); if (n)
            return n.resolve(), n.promise; } function m(e, n) { var r = v[e.name].deferredOperations.pop(); if (r)
            return r.reject(n), r.promise; } function g(e, n) { return new a(function (r, t) { if (v[e.name] = v[e.name] || { forages: [], db: null, dbReady: null, deferredOperations: [] }, e.db) {
            if (!n)
                return r(e.db);
            p(e), e.db.close();
        } var i = [e.name]; n && i.push(e.version); var a = o.open.apply(o, i); n && (a.onupgradeneeded = function (n) { var r = a.result; try {
            r.createObjectStore(e.storeName), n.oldVersion <= 1 && r.createObjectStore(l);
        }
        catch (r) {
            if ("ConstraintError" !== r.name)
                throw r;
            console.warn('The database "' + e.name + '" has been upgraded from version ' + n.oldVersion + " to version " + n.newVersion + ', but the storage "' + e.storeName + '" already exists.');
        } }), a.onerror = function (e) { e.preventDefault(), t(a.error); }, a.onsuccess = function () { r(a.result), b(e); }; }); } function _(e) { return g(e, !1); } function w(e) { return g(e, !0); } function I(e, n) { if (!e.db)
            return !0; var r = !e.db.objectStoreNames.contains(e.storeName), t = e.version < e.db.version, o = e.version > e.db.version; if (t && (e.version !== n && console.warn('The database "' + e.name + "\" can't be downgraded from version " + e.db.version + " to version " + e.version + "."), e.version = e.db.version), o || r) {
            if (r) {
                var i = e.db.version + 1;
                i > e.version && (e.version = i);
            }
            return !0;
        } return !1; } function S(e) { return i([function (e) { for (var n = e.length, r = new ArrayBuffer(n), t = new Uint8Array(r), o = 0; o < n; o++)
                t[o] = e.charCodeAt(o); return r; }(atob(e.data))], { type: e.type }); } function E(e) { return e && e.__local_forage_encoded_blob; } function N(e) { var n = this, r = n._initReady().then(function () { var e = v[n._dbInfo.name]; if (e && e.dbReady)
            return e.dbReady; }); return u(r, e, e), r; } function j(e, n, r, t) { void 0 === t && (t = 1); try {
            var o = e.db.transaction(e.storeName, n);
            r(null, o);
        }
        catch (o) {
            if (t > 0 && (!e.db || "InvalidStateError" === o.name || "NotFoundError" === o.name))
                return a.resolve().then(function () { if (!e.db || "NotFoundError" === o.name && !e.db.objectStoreNames.contains(e.storeName) && e.version <= e.db.version)
                    return e.db && (e.version = e.db.version + 1), w(e); }).then(function () { return function (e) { p(e); for (var n = v[e.name], r = n.forages, t = 0; t < r.length; t++) {
                    var o = r[t];
                    o._dbInfo.db && (o._dbInfo.db.close(), o._dbInfo.db = null);
                } return e.db = null, _(e).then(function (n) { return e.db = n, I(e) ? w(e) : n; }).then(function (t) { e.db = n.db = t; for (var o = 0; o < r.length; o++)
                    r[o]._dbInfo.db = t; }).catch(function (n) { throw m(e, n), n; }); }(e).then(function () { j(e, n, r, t - 1); }); }).catch(r);
            r(o);
        } } var x = { _driver: "asyncStorage", _initStorage: function (e) { var n = this, r = { db: null }; if (e)
                for (var t in e)
                    r[t] = e[t]; var o = v[r.name]; o || (o = { forages: [], db: null, dbReady: null, deferredOperations: [] }, v[r.name] = o), o.forages.push(n), n._initReady || (n._initReady = n.ready, n.ready = N); var i = []; function c() { return a.resolve(); } for (var u = 0; u < o.forages.length; u++) {
                var f = o.forages[u];
                f !== n && i.push(f._initReady().catch(c));
            } var s = o.forages.slice(0); return a.all(i).then(function () { return r.db = o.db, _(r); }).then(function (e) { return r.db = e, I(r, n._defaultConfig.version) ? w(r) : e; }).then(function (e) { r.db = o.db = e, n._dbInfo = r; for (var t = 0; t < s.length; t++) {
                var i = s[t];
                i !== n && (i._dbInfo.db = r.db, i._dbInfo.version = r.version);
            } }); }, _support: function () { try {
                if (!o)
                    return !1;
                var e = "undefined" != typeof openDatabase && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform), n = "function" == typeof fetch && -1 !== fetch.toString().indexOf("[native code");
                return (!e || n) && "undefined" != typeof indexedDB && "undefined" != typeof IDBKeyRange;
            }
            catch (e) {
                return !1;
            } }(), iterate: function (e, n) { var r = this, t = new a(function (n, t) { r.ready().then(function () { j(r._dbInfo, "readonly", function (o, i) { if (o)
                return t(o); try {
                var a = i.objectStore(r._dbInfo.storeName).openCursor(), c = 1;
                a.onsuccess = function () { var r = a.result; if (r) {
                    var t = r.value;
                    E(t) && (t = S(t));
                    var o = e(t, r.key, c++);
                    void 0 !== o ? n(o) : r.continue();
                }
                else
                    n(); }, a.onerror = function () { t(a.error); };
            }
            catch (e) {
                t(e);
            } }); }).catch(t); }); return c(t, n), t; }, getItem: function (e, n) { var r = this; e = f(e); var t = new a(function (n, t) { r.ready().then(function () { j(r._dbInfo, "readonly", function (o, i) { if (o)
                return t(o); try {
                var a = i.objectStore(r._dbInfo.storeName).get(e);
                a.onsuccess = function () { var e = a.result; void 0 === e && (e = null), E(e) && (e = S(e)), n(e); }, a.onerror = function () { t(a.error); };
            }
            catch (e) {
                t(e);
            } }); }).catch(t); }); return c(t, n), t; }, setItem: function (e, n, r) { var t = this; e = f(e); var o = new a(function (r, o) { var c; t.ready().then(function () { return c = t._dbInfo, "[object Blob]" === h.call(n) ? (e = c.db, "boolean" == typeof d ? a.resolve(d) : function (e) { return new a(function (n) { var r = e.transaction(l, y), t = i([""]); r.objectStore(l).put(t, "key"), r.onabort = function (e) { e.preventDefault(), e.stopPropagation(), n(!1); }, r.oncomplete = function () { var e = navigator.userAgent.match(/Chrome\/(\d+)/), r = navigator.userAgent.match(/Edge\//); n(r || !e || parseInt(e[1], 10) >= 43); }; }).catch(function () { return !1; }); }(e).then(function (e) { return d = e; })).then(function (e) { return e ? n : (r = n, new a(function (e, n) { var t = new FileReader; t.onerror = n, t.onloadend = function (n) { var t = btoa(n.target.result || ""); e({ __local_forage_encoded_blob: !0, data: t, type: r.type }); }, t.readAsBinaryString(r); })); var r; }) : n; var e; }).then(function (n) { j(t._dbInfo, y, function (i, a) { if (i)
                return o(i); try {
                var c = a.objectStore(t._dbInfo.storeName);
                null === n && (n = void 0);
                var u = c.put(n, e);
                a.oncomplete = function () { void 0 === n && (n = null), r(n); }, a.onabort = a.onerror = function () { var e = u.error ? u.error : u.transaction.error; o(e); };
            }
            catch (e) {
                o(e);
            } }); }).catch(o); }); return c(o, r), o; }, removeItem: function (e, n) { var r = this; e = f(e); var t = new a(function (n, t) { r.ready().then(function () { j(r._dbInfo, y, function (o, i) { if (o)
                return t(o); try {
                var a = i.objectStore(r._dbInfo.storeName).delete(e);
                i.oncomplete = function () { n(); }, i.onerror = function () { t(a.error); }, i.onabort = function () { var e = a.error ? a.error : a.transaction.error; t(e); };
            }
            catch (e) {
                t(e);
            } }); }).catch(t); }); return c(t, n), t; }, clear: function (e) { var n = this, r = new a(function (e, r) { n.ready().then(function () { j(n._dbInfo, y, function (t, o) { if (t)
                return r(t); try {
                var i = o.objectStore(n._dbInfo.storeName).clear();
                o.oncomplete = function () { e(); }, o.onabort = o.onerror = function () { var e = i.error ? i.error : i.transaction.error; r(e); };
            }
            catch (e) {
                r(e);
            } }); }).catch(r); }); return c(r, e), r; }, length: function (e) { var n = this, r = new a(function (e, r) { n.ready().then(function () { j(n._dbInfo, "readonly", function (t, o) { if (t)
                return r(t); try {
                var i = o.objectStore(n._dbInfo.storeName).count();
                i.onsuccess = function () { e(i.result); }, i.onerror = function () { r(i.error); };
            }
            catch (e) {
                r(e);
            } }); }).catch(r); }); return c(r, e), r; }, key: function (e, n) { var r = this, t = new a(function (n, t) { e < 0 ? n(null) : r.ready().then(function () { j(r._dbInfo, "readonly", function (o, i) { if (o)
                return t(o); try {
                var a = i.objectStore(r._dbInfo.storeName), c = !1, u = a.openCursor();
                u.onsuccess = function () { var r = u.result; r ? 0 === e ? n(r.key) : c ? n(r.key) : (c = !0, r.advance(e)) : n(null); }, u.onerror = function () { t(u.error); };
            }
            catch (e) {
                t(e);
            } }); }).catch(t); }); return c(t, n), t; }, keys: function (e) { var n = this, r = new a(function (e, r) { n.ready().then(function () { j(n._dbInfo, "readonly", function (t, o) { if (t)
                return r(t); try {
                var i = o.objectStore(n._dbInfo.storeName).openCursor(), a = [];
                i.onsuccess = function () { var n = i.result; n ? (a.push(n.key), n.continue()) : e(a); }, i.onerror = function () { r(i.error); };
            }
            catch (e) {
                r(e);
            } }); }).catch(r); }); return c(r, e), r; }, dropInstance: function (e, n) { n = s.apply(this, arguments); var r, t = this.config(); if ((e = "function" != typeof e && e || {}).name || (e.name = e.name || t.name, e.storeName = e.storeName || t.storeName), e.name) {
                var i = e.name === t.name && this._dbInfo.db ? a.resolve(this._dbInfo.db) : _(e).then(function (n) { var r = v[e.name], t = r.forages; r.db = n; for (var o = 0; o < t.length; o++)
                    t[o]._dbInfo.db = n; return n; });
                r = e.storeName ? i.then(function (n) { if (n.objectStoreNames.contains(e.storeName)) {
                    var r = n.version + 1;
                    p(e);
                    var t = v[e.name], i = t.forages;
                    n.close();
                    for (var c = 0; c < i.length; c++) {
                        var u = i[c];
                        u._dbInfo.db = null, u._dbInfo.version = r;
                    }
                    return new a(function (n, t) { var i = o.open(e.name, r); i.onerror = function (e) { i.result.close(), t(e); }, i.onupgradeneeded = function () { i.result.deleteObjectStore(e.storeName); }, i.onsuccess = function () { var e = i.result; e.close(), n(e); }; }).then(function (e) { t.db = e; for (var n = 0; n < i.length; n++) {
                        var r = i[n];
                        r._dbInfo.db = e, b(r._dbInfo);
                    } }).catch(function (n) { throw (m(e, n) || a.resolve()).catch(function () { }), n; });
                } }) : i.then(function (n) { p(e); var r = v[e.name], t = r.forages; n.close(); for (var i = 0; i < t.length; i++) {
                    t[i]._dbInfo.db = null;
                } return new a(function (n, r) { var t = o.deleteDatabase(e.name); t.onerror = t.onblocked = function (e) { var n = t.result; n && n.close(), r(e); }, t.onsuccess = function () { var e = t.result; e && e.close(), n(e); }; }).then(function (e) { r.db = e; for (var n = 0; n < t.length; n++) {
                    b(t[n]._dbInfo);
                } }).catch(function (n) { throw (m(e, n) || a.resolve()).catch(function () { }), n; }); });
            }
            else
                r = a.reject("Invalid arguments"); return c(r, n), r; } }, R = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", D = /^~~local_forage_type~([^~]+)~/, A = "__lfsc__:".length, O = A + "arbf".length, k = Object.prototype.toString; function B(e) { var n, r, t, o, i, a = .75 * e.length, c = e.length, u = 0; "=" === e[e.length - 1] && (a--, "=" === e[e.length - 2] && a--); var f = new ArrayBuffer(a), s = new Uint8Array(f); for (n = 0; n < c; n += 4)
            r = R.indexOf(e[n]), t = R.indexOf(e[n + 1]), o = R.indexOf(e[n + 2]), i = R.indexOf(e[n + 3]), s[u++] = r << 2 | t >> 4, s[u++] = (15 & t) << 4 | o >> 2, s[u++] = (3 & o) << 6 | 63 & i; return f; } function T(e) { var n, r = new Uint8Array(e), t = ""; for (n = 0; n < r.length; n += 3)
            t += R[r[n] >> 2], t += R[(3 & r[n]) << 4 | r[n + 1] >> 4], t += R[(15 & r[n + 1]) << 2 | r[n + 2] >> 6], t += R[63 & r[n + 2]]; return r.length % 3 == 2 ? t = t.substring(0, t.length - 1) + "=" : r.length % 3 == 1 && (t = t.substring(0, t.length - 2) + "=="), t; } var C = { serialize: function (e, n) { var r = ""; if (e && (r = k.call(e)), e && ("[object ArrayBuffer]" === r || e.buffer && "[object ArrayBuffer]" === k.call(e.buffer))) {
                var t, o = "__lfsc__:";
                e instanceof ArrayBuffer ? (t = e, o += "arbf") : (t = e.buffer, "[object Int8Array]" === r ? o += "si08" : "[object Uint8Array]" === r ? o += "ui08" : "[object Uint8ClampedArray]" === r ? o += "uic8" : "[object Int16Array]" === r ? o += "si16" : "[object Uint16Array]" === r ? o += "ur16" : "[object Int32Array]" === r ? o += "si32" : "[object Uint32Array]" === r ? o += "ui32" : "[object Float32Array]" === r ? o += "fl32" : "[object Float64Array]" === r ? o += "fl64" : n(new Error("Failed to get type for BinaryArray"))), n(o + T(t));
            }
            else if ("[object Blob]" === r) {
                var i = new FileReader;
                i.onload = function () { var r = "~~local_forage_type~" + e.type + "~" + T(this.result); n("__lfsc__:blob" + r); }, i.readAsArrayBuffer(e);
            }
            else
                try {
                    n(JSON.stringify(e));
                }
                catch (r) {
                    console.error("Couldn't convert value into a JSON string: ", e), n(null, r);
                } }, deserialize: function (e) { if ("__lfsc__:" !== e.substring(0, A))
                return JSON.parse(e); var n, r = e.substring(O), t = e.substring(A, O); if ("blob" === t && D.test(r)) {
                var o = r.match(D);
                n = o[1], r = r.substring(o[0].length);
            } var a = B(r); switch (t) {
                case "arbf": return a;
                case "blob": return i([a], { type: n });
                case "si08": return new Int8Array(a);
                case "ui08": return new Uint8Array(a);
                case "uic8": return new Uint8ClampedArray(a);
                case "si16": return new Int16Array(a);
                case "ur16": return new Uint16Array(a);
                case "si32": return new Int32Array(a);
                case "ui32": return new Uint32Array(a);
                case "fl32": return new Float32Array(a);
                case "fl64": return new Float64Array(a);
                default: throw new Error("Unkown type: " + t);
            } }, stringToBuffer: B, bufferToString: T }; function P(e, n, r, t) { e.executeSql("CREATE TABLE IF NOT EXISTS " + n.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], r, t); } function L(e, n, r, t, o, i) { e.executeSql(r, t, o, function (e, a) { a.code === a.SYNTAX_ERR ? e.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [name], function (e, c) { c.rows.length ? i(e, a) : P(e, n, function () { e.executeSql(r, t, o, i); }, i); }, i) : i(e, a); }, i); } var F = { _driver: "webSQLStorage", _initStorage: function (e) { var n = this, r = { db: null }; if (e)
                for (var t in e)
                    r[t] = "string" != typeof e[t] ? e[t].toString() : e[t]; var o = new a(function (e, t) { try {
                r.db = openDatabase(r.name, String(r.version), r.description, r.size);
            }
            catch (e) {
                return t(e);
            } r.db.transaction(function (o) { P(o, r, function () { n._dbInfo = r, e(); }, function (e, n) { t(n); }); }, t); }); return r.serializer = C, o; }, _support: "function" == typeof openDatabase, iterate: function (e, n) { var r = this, t = new a(function (n, t) { r.ready().then(function () { var o = r._dbInfo; o.db.transaction(function (r) { L(r, o, "SELECT * FROM " + o.storeName, [], function (r, t) { for (var i = t.rows, a = i.length, c = 0; c < a; c++) {
                var u = i.item(c), f = u.value;
                if (f && (f = o.serializer.deserialize(f)), void 0 !== (f = e(f, u.key, c + 1)))
                    return void n(f);
            } n(); }, function (e, n) { t(n); }); }); }).catch(t); }); return c(t, n), t; }, getItem: function (e, n) { var r = this; e = f(e); var t = new a(function (n, t) { r.ready().then(function () { var o = r._dbInfo; o.db.transaction(function (r) { L(r, o, "SELECT * FROM " + o.storeName + " WHERE key = ? LIMIT 1", [e], function (e, r) { var t = r.rows.length ? r.rows.item(0).value : null; t && (t = o.serializer.deserialize(t)), n(t); }, function (e, n) { t(n); }); }); }).catch(t); }); return c(t, n), t; }, setItem: function (e, n, r) { return function e(n, r, t, o) { var i = this; n = f(n); var u = new a(function (a, c) { i.ready().then(function () { void 0 === r && (r = null); var u = r, f = i._dbInfo; f.serializer.serialize(r, function (r, s) { s ? c(s) : f.db.transaction(function (e) { L(e, f, "INSERT OR REPLACE INTO " + f.storeName + " (key, value) VALUES (?, ?)", [n, r], function () { a(u); }, function (e, n) { c(n); }); }, function (r) { if (r.code === r.QUOTA_ERR) {
                if (o > 0)
                    return void a(e.apply(i, [n, u, t, o - 1]));
                c(r);
            } }); }); }).catch(c); }); return c(u, t), u; }.apply(this, [e, n, r, 1]); }, removeItem: function (e, n) { var r = this; e = f(e); var t = new a(function (n, t) { r.ready().then(function () { var o = r._dbInfo; o.db.transaction(function (r) { L(r, o, "DELETE FROM " + o.storeName + " WHERE key = ?", [e], function () { n(); }, function (e, n) { t(n); }); }); }).catch(t); }); return c(t, n), t; }, clear: function (e) { var n = this, r = new a(function (e, r) { n.ready().then(function () { var t = n._dbInfo; t.db.transaction(function (n) { L(n, t, "DELETE FROM " + t.storeName, [], function () { e(); }, function (e, n) { r(n); }); }); }).catch(r); }); return c(r, e), r; }, length: function (e) { var n = this, r = new a(function (e, r) { n.ready().then(function () { var t = n._dbInfo; t.db.transaction(function (n) { L(n, t, "SELECT COUNT(key) as c FROM " + t.storeName, [], function (n, r) { var t = r.rows.item(0).c; e(t); }, function (e, n) { r(n); }); }); }).catch(r); }); return c(r, e), r; }, key: function (e, n) { var r = this, t = new a(function (n, t) { r.ready().then(function () { var o = r._dbInfo; o.db.transaction(function (r) { L(r, o, "SELECT key FROM " + o.storeName + " WHERE id = ? LIMIT 1", [e + 1], function (e, r) { var t = r.rows.length ? r.rows.item(0).key : null; n(t); }, function (e, n) { t(n); }); }); }).catch(t); }); return c(t, n), t; }, keys: function (e) { var n = this, r = new a(function (e, r) { n.ready().then(function () { var t = n._dbInfo; t.db.transaction(function (n) { L(n, t, "SELECT key FROM " + t.storeName, [], function (n, r) { for (var t = [], o = 0; o < r.rows.length; o++)
                t.push(r.rows.item(o).key); e(t); }, function (e, n) { r(n); }); }); }).catch(r); }); return c(r, e), r; }, dropInstance: function (e, n) { n = s.apply(this, arguments); var r = this.config(); (e = "function" != typeof e && e || {}).name || (e.name = e.name || r.name, e.storeName = e.storeName || r.storeName); var t, o = this; return c(t = e.name ? new a(function (n) { var t; t = e.name === r.name ? o._dbInfo.db : openDatabase(e.name, "", "", 0), e.storeName ? n({ db: t, storeNames: [e.storeName] }) : n(function (e) { return new a(function (n, r) { e.transaction(function (t) { t.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function (r, t) { for (var o = [], i = 0; i < t.rows.length; i++)
                o.push(t.rows.item(i).name); n({ db: e, storeNames: o }); }, function (e, n) { r(n); }); }, function (e) { r(e); }); }); }(t)); }).then(function (e) { return new a(function (n, r) { e.db.transaction(function (t) { function o(e) { return new a(function (n, r) { t.executeSql("DROP TABLE IF EXISTS " + e, [], function () { n(); }, function (e, n) { r(n); }); }); } for (var i = [], c = 0, u = e.storeNames.length; c < u; c++)
                i.push(o(e.storeNames[c])); a.all(i).then(function () { n(); }).catch(function (e) { r(e); }); }, function (e) { r(e); }); }); }) : a.reject("Invalid arguments"), n), t; } }; function q(e, n) { var r = e.name + "/"; return e.storeName !== n.storeName && (r += e.storeName + "/"), r; } var z = { _driver: "localStorageWrapper", _initStorage: function (e) { var n = {}; if (e)
                for (var r in e)
                    n[r] = e[r]; return n.keyPrefix = q(e, this._defaultConfig), !function () { try {
                return localStorage.setItem("_localforage_support_test", !0), localStorage.removeItem("_localforage_support_test"), !1;
            }
            catch (e) {
                return !0;
            } }() || localStorage.length > 0 ? (this._dbInfo = n, n.serializer = C, a.resolve()) : a.reject(); }, _support: function () { try {
                return "undefined" != typeof localStorage && "setItem" in localStorage && !!localStorage.setItem;
            }
            catch (e) {
                return !1;
            } }(), iterate: function (e, n) { var r = this, t = r.ready().then(function () { for (var n = r._dbInfo, t = n.keyPrefix, o = t.length, i = localStorage.length, a = 1, c = 0; c < i; c++) {
                var u = localStorage.key(c);
                if (0 === u.indexOf(t)) {
                    var f = localStorage.getItem(u);
                    if (f && (f = n.serializer.deserialize(f)), void 0 !== (f = e(f, u.substring(o), a++)))
                        return f;
                }
            } }); return c(t, n), t; }, getItem: function (e, n) { var r = this; e = f(e); var t = r.ready().then(function () { var n = r._dbInfo, t = localStorage.getItem(n.keyPrefix + e); return t && (t = n.serializer.deserialize(t)), t; }); return c(t, n), t; }, setItem: function (e, n, r) { var t = this; e = f(e); var o = t.ready().then(function () { void 0 === n && (n = null); var r = n; return new a(function (o, i) { var a = t._dbInfo; a.serializer.serialize(n, function (n, t) { if (t)
                i(t);
            else
                try {
                    localStorage.setItem(a.keyPrefix + e, n), o(r);
                }
                catch (e) {
                    "QuotaExceededError" !== e.name && "NS_ERROR_DOM_QUOTA_REACHED" !== e.name || i(e), i(e);
                } }); }); }); return c(o, r), o; }, removeItem: function (e, n) { var r = this; e = f(e); var t = r.ready().then(function () { var n = r._dbInfo; localStorage.removeItem(n.keyPrefix + e); }); return c(t, n), t; }, clear: function (e) { var n = this, r = n.ready().then(function () { for (var e = n._dbInfo.keyPrefix, r = localStorage.length - 1; r >= 0; r--) {
                var t = localStorage.key(r);
                0 === t.indexOf(e) && localStorage.removeItem(t);
            } }); return c(r, e), r; }, length: function (e) { var n = this.keys().then(function (e) { return e.length; }); return c(n, e), n; }, key: function (e, n) { var r = this, t = r.ready().then(function () { var n, t = r._dbInfo; try {
                n = localStorage.key(e);
            }
            catch (e) {
                n = null;
            } return n && (n = n.substring(t.keyPrefix.length)), n; }); return c(t, n), t; }, keys: function (e) { var n = this, r = n.ready().then(function () { for (var e = n._dbInfo, r = localStorage.length, t = [], o = 0; o < r; o++) {
                var i = localStorage.key(o);
                0 === i.indexOf(e.keyPrefix) && t.push(i.substring(e.keyPrefix.length));
            } return t; }); return c(r, e), r; }, dropInstance: function (e, n) { if (n = s.apply(this, arguments), !(e = "function" != typeof e && e || {}).name) {
                var r = this.config();
                e.name = e.name || r.name, e.storeName = e.storeName || r.storeName;
            } var t, o = this; return c(t = e.name ? new a(function (n) { e.storeName ? n(q(e, o._defaultConfig)) : n(e.name + "/"); }).then(function (e) { for (var n = localStorage.length - 1; n >= 0; n--) {
                var r = localStorage.key(n);
                0 === r.indexOf(e) && localStorage.removeItem(r);
            } }) : a.reject("Invalid arguments"), n), t; } }, M = function (e, n) { for (var r = e.length, t = 0; t < r;) {
            if ((o = e[t]) === (i = n) || "number" == typeof o && "number" == typeof i && isNaN(o) && isNaN(i))
                return !0;
            t++;
        } var o, i; return !1; }, U = Array.isArray || function (e) { return "[object Array]" === Object.prototype.toString.call(e); }, W = {}, G = {}, Q = { INDEXEDDB: x, WEBSQL: F, LOCALSTORAGE: z }, K = [Q.INDEXEDDB._driver, Q.WEBSQL._driver, Q.LOCALSTORAGE._driver], X = ["dropInstance"], H = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(X), Y = { description: "", driver: K.slice(), name: "localforage", size: 4980736, storeName: "keyvaluepairs", version: 1 }; function J(e, n) { e[n] = function () { var r = arguments; return e.ready().then(function () { return e[n].apply(e, r); }); }; } function V() { for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            if (n)
                for (var r in n)
                    n.hasOwnProperty(r) && (U(n[r]) ? arguments[0][r] = n[r].slice() : arguments[0][r] = n[r]);
        } return arguments[0]; } var Z = new (function () { function e(n) { for (var r in function (n, r) { if (!(n instanceof e))
            throw new TypeError("Cannot call a class as a function"); }(this), Q)
            if (Q.hasOwnProperty(r)) {
                var t = Q[r], o = t._driver;
                this[r] = o, W[o] || this.defineDriver(t);
            } this._defaultConfig = V({}, Y), this._config = V({}, this._defaultConfig, n), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function () { }); } return e.prototype.config = function (e) { if ("object" === (void 0 === e ? "undefined" : t(e))) {
            if (this._ready)
                return new Error("Can't call config() after localforage has been used.");
            for (var n in e) {
                if ("storeName" === n && (e[n] = e[n].replace(/\W/g, "_")), "version" === n && "number" != typeof e[n])
                    return new Error("Database version must be a number.");
                this._config[n] = e[n];
            }
            return !("driver" in e && e.driver) || this.setDriver(this._config.driver);
        } return "string" == typeof e ? this._config[e] : this._config; }, e.prototype.defineDriver = function (e, n, r) { var t = new a(function (n, r) { try {
            var t = e._driver, o = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
            if (!e._driver)
                return void r(o);
            for (var i = H.concat("_initStorage"), u = 0, f = i.length; u < f; u++) {
                var s = i[u];
                if ((!M(X, s) || e[s]) && "function" != typeof e[s])
                    return void r(o);
            }
            !function () { for (var n = function (e) { return function () { var n = new Error("Method " + e + " is not implemented by the current driver"), r = a.reject(n); return c(r, arguments[arguments.length - 1]), r; }; }, r = 0, t = X.length; r < t; r++) {
                var o = X[r];
                e[o] || (e[o] = n(o));
            } }();
            var l = function (r) { W[t] && console.info("Redefining LocalForage driver: " + t), W[t] = e, G[t] = r, n(); };
            "_support" in e ? e._support && "function" == typeof e._support ? e._support().then(l, r) : l(!!e._support) : l(!0);
        }
        catch (e) {
            r(e);
        } }); return u(t, n, r), t; }, e.prototype.driver = function () { return this._driver || null; }, e.prototype.getDriver = function (e, n, r) { var t = W[e] ? a.resolve(W[e]) : a.reject(new Error("Driver not found.")); return u(t, n, r), t; }, e.prototype.getSerializer = function (e) { var n = a.resolve(C); return u(n, e), n; }, e.prototype.ready = function (e) { var n = this, r = n._driverSet.then(function () { return null === n._ready && (n._ready = n._initDriver()), n._ready; }); return u(r, e, e), r; }, e.prototype.setDriver = function (e, n, r) { var t = this; U(e) || (e = [e]); var o = this._getSupportedDrivers(e); function i() { t._config.driver = t.driver(); } function c(e) { return t._extend(e), i(), t._ready = t._initStorage(t._config), t._ready; } var f = null !== this._driverSet ? this._driverSet.catch(function () { return a.resolve(); }) : a.resolve(); return this._driverSet = f.then(function () { var e = o[0]; return t._dbInfo = null, t._ready = null, t.getDriver(e).then(function (e) { t._driver = e._driver, i(), t._wrapLibraryMethodsWithReady(), t._initDriver = function (e) { return function () { var n = 0; return function r() { for (; n < e.length;) {
            var o = e[n];
            return n++, t._dbInfo = null, t._ready = null, t.getDriver(o).then(c).catch(r);
        } i(); var u = new Error("No available storage method found."); return t._driverSet = a.reject(u), t._driverSet; }(); }; }(o); }); }).catch(function () { i(); var e = new Error("No available storage method found."); return t._driverSet = a.reject(e), t._driverSet; }), u(this._driverSet, n, r), this._driverSet; }, e.prototype.supports = function (e) { return !!G[e]; }, e.prototype._extend = function (e) { V(this, e); }, e.prototype._getSupportedDrivers = function (e) { for (var n = [], r = 0, t = e.length; r < t; r++) {
            var o = e[r];
            this.supports(o) && n.push(o);
        } return n; }, e.prototype._wrapLibraryMethodsWithReady = function () { for (var e = 0, n = H.length; e < n; e++)
            J(this, H[e]); }, e.prototype.createInstance = function (n) { return new e(n); }, e; }()); n.exports = Z; }, { 3: 3 }] }, {}, [4])(4); }); function t(e) { return t.result ? t.result : e && "function" == typeof e.getSerializer ? (t.result = e.getSerializer(), t.result) : Promise.reject(new Error("localforage.getSerializer() was not available! localforage v1.4+ is required!")); } function o(e, n) { return o.result = o.result || {}, o.result[n] ? o.result[n] : e && "function" == typeof e.getDriver ? (o.result[n] = e.getDriver(n), o.result[n]) : Promise.reject(new Error("localforage.getDriver() was not available! localforage v1.4+ is required!")); } function i(e) { return o(e, e.WEBSQL); } var a = new Promise(function (e, n) { "undefined" != typeof sqlitePlugin ? e() : "undefined" == typeof cordova ? n(new Error("cordova is not defined.")) : document.addEventListener("deviceready", function () { return e(); }, !1); }).catch(function () { return Promise.resolve(); }); function c() { return a.then(function () { if ("undefined" != typeof sqlitePlugin && "function" == typeof sqlitePlugin.openDatabase)
    return sqlitePlugin.openDatabase; throw new Error("SQLite plugin is not present."); }); } var u = { _driver: "cordovaSQLiteDriver", _initStorage: function (e) { var n = this, r = { db: null }; if (e)
        for (var o in e)
            r[o] = "string" != typeof e[o] ? e[o].toString() : e[o]; var a = c().then(function (e) { return new Promise(function (t, o) { try {
        r.location = r.location || "default", r.db = e({ name: r.name, version: String(r.version), description: r.description, size: r.size, key: r.dbKey, location: r.location });
    }
    catch (e) {
        o(e);
    } r.db.transaction(function (e) { e.executeSql("CREATE TABLE IF NOT EXISTS " + r.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], function () { n._dbInfo = r, t(); }, function (e, n) { o(n); }); }); }); }), u = t(n), f = i(n); return Promise.all([u, f, a]).then(function (e) { return r.serializer = e[0], a; }); }, _support: function () { return c().then(function (e) { return !!e; }).catch(function () { return !1; }); } }; !function (e) { var n = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"]; function r(e, n) { e[n] = function () { var e = this, r = arguments; return i(e).then(function (t) { return t[n].apply(e, r); }); }; } for (var t = 0, o = n.length; t < o; t++)
    r(e, n[t]); }(u); var f = new /** @class */ (function () {
    function class_1() {
        var _this = this;
        this.dbPromise = new Promise(function (e, n) { var t, o = { name: "_cryptostorage", STORAGEName: "_cryptokv", driverOrder: ["sqlite", "indexeddb", "websql", "localstorage"] }; r.defineDriver(u).then(function () { t = r.createInstance(o); }).then(function () { return t.setDriver(_this.getDriverOrder(o.driverOrder)); }).then(function () { e(t); }).catch(function (e) { return n(e); }); });
    }
    class_1.prototype.ready = function () { return this.dbPromise; };
    class_1.prototype.getDriverOrder = function (e) { return e.map(function (e) { switch (e) {
        case "sqlite": return u._driver;
        case "indexeddb": return r.INDEXEDDB;
        case "websql": return r.WEBSQL;
        case "localstorage": return r.LOCALSTORAGE;
    } }); };
    class_1.prototype.get = function (e) { return this.dbPromise.then(function (n) { return n.getItem(e); }); };
    class_1.prototype.set = function (e, n) { return this.dbPromise.then(function (r) { return r.setItem(e, n); }); };
    class_1.prototype.remove = function (e) { return this.dbPromise.then(function (n) { return n.removeItem(e); }); };
    class_1.prototype.clear = function () { return this.dbPromise.then(function (e) { return e.clear(); }); };
    return class_1;
}()); var s; !function (e) { e.kraken = "kraken", e.poloniex = "poloniex", e.binance = "binance", e.bittrex = "bittrex"; }(s || (s = {})); var l = [{ id: s.kraken, icon: "https://cryptocoincharts.info/img/exchanges/kraken.svg", key: "", secret: "", balances: [] }, { id: s.poloniex, icon: "https://cryptocoincharts.info/img/exchanges/poloniex.svg", key: "", secret: "", balances: [] }, { id: s.binance, icon: "https://cryptocoincharts.info/img/coins/bnb.svg", key: "", secret: "", balances: [] }, { id: s.bittrex, icon: "https://cryptocoincharts.info/img/exchanges/bittrex.svg", key: "", secret: "", balances: [] }]; e.STORAGE = f, e.ExchangeService = /** @class */ (function () {
    function ExchangeService() {
    }
    ExchangeService.prototype.getExchanges = function () { return f.get("exchanges"); };
    ExchangeService.prototype.setExchanges = function (e) { f.set("exchanges", e); };
    return ExchangeService;
}()), e.Exchange = /** @class */ (function () {
    function Exchange() {
    }
    return Exchange;
}()), e.DefaultExchanges = l; });
