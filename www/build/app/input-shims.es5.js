/*! Built with http://stenciljs.com */
App.loadBundle("input-shims.js", ["exports", "./chunk-e404d330.js"], function (t, e) { window.App.h; var n = "$ionRelocated"; function o(t, e, o, i) {
    if (i === void 0) { i = 0; }
    if (t[n] !== o) {
        if (e.value, o) {
            !function (t, e) { var _a, _b; var n = t.parentElement, o = t.ownerDocument; if (t && n) {
                var i_1 = t.offsetTop, r_1 = t.offsetLeft, s_1 = t.offsetWidth, l_1 = t.offsetHeight, a_1 = o.createElement("div"), c_1 = a_1.style;
                (_a = a_1.classList).add.apply(_a, Array.from(t.classList)), a_1.classList.add("cloned-input"), a_1.setAttribute("aria-hidden", "true"), c_1.pointerEvents = "none", c_1.position = "absolute", c_1.top = i_1 + "px", c_1.left = r_1 + "px", c_1.width = s_1 + "px", c_1.height = l_1 + "px";
                var u = o.createElement("input");
                (_b = u.classList).add.apply(_b, Array.from(e.classList)), u.value = e.value, u.type = e.type, u.placeholder = e.placeholder, u.tabIndex = -1, a_1.appendChild(u), n.appendChild(a_1), t.style.pointerEvents = "none";
            } e.style.transform = "scale(0)"; }(t, e);
            var n_1 = "rtl" === t.ownerDocument.dir ? 9999 : -9999;
            e.style.transform = "translate3d(" + n_1 + "px," + i + "px,0)";
        }
        else
            !function (t, e) { if (t && t.parentElement) {
                var e_1 = t.parentElement.querySelectorAll(".cloned-input");
                for (var t_1 = 0; t_1 < e_1.length; t_1++)
                    e_1[t_1].remove();
                t.style.pointerEvents = "";
            } e.style.transform = "", e.style.opacity = ""; }(t, e);
        t[n] = o;
    }
} function i(t) { return t === t.ownerDocument.activeElement; } var r = ["INPUT", "TEXTAREA", "ION-INPUT", "ION-TEXTAREA"], s = .3; function l(t, n, r, l) { var a; var c = function (t) { a = e.pointerCoord(t), t.type; }, u = function (c) { if (c.type, !a)
    return; var u = e.pointerCoord(c); (function (t, e, n) { if (e && n) {
    var t_2 = e.x - n.x, o_1 = e.y - n.y;
    return t_2 * t_2 + o_1 * o_1 > 36;
} return !1; })(0, a, u) || i(n) || (c.preventDefault(), c.stopPropagation(), function (t, e, n, i) { var r = function (t, e, n) { return e ? function (t, e, n, o) { var i = t.top, r = t.bottom, l = e.top + 10, a = Math.min(e.bottom, o - n) / 2 - r, c = l - i, u = Math.round(a < 0 ? -a : c > 0 ? -c : 0), d = Math.abs(u) / s; return { scrollAmount: u, scrollDuration: Math.min(400, Math.max(150, d)), scrollPadding: n, inputSafeY: 4 - (i - l) }; }((t.closest("ion-item,[ion-item]") || t).getBoundingClientRect(), e.getBoundingClientRect(), n, window.innerHeight) : { scrollAmount: 0, scrollPadding: 0, scrollDuration: 0, inputSafeY: 0 }; }(t, n, i); Math.abs(r.scrollAmount) < 4 ? e.focus() : (o(t, e, !0, r.inputSafeY), e.focus(), n.scrollByPoint(0, r.scrollAmount, r.scrollDuration, function () { o(t, e, !1, r.inputSafeY), e.focus(); })); }(t, n, r, l)); }; return t.addEventListener("touchstart", c, !0), t.addEventListener("touchend", u, !0), function () { t.removeEventListener("touchstart", c, !0), t.removeEventListener("touchend", u, !0); }; } var a = "$ionPaddingTimer"; function c(t, e) { if ("INPUT" !== t.tagName)
    return; if (t.parentElement && "ION-INPUT" === t.parentElement.tagName)
    return; var n = t.closest(".scroll-inner"); if (!n)
    return; var o = n[a]; o && clearTimeout(o), e > 0 ? n.style.paddingBottom = e + "px" : n[a] = setTimeout(function () { n.style.paddingBottom = ""; }, 120); } t.startInputShims = function (t, e) { var n = e.getNumber("keyboardHeight", 290), s = e.getBoolean("scrollAssist", !0), a = e.getBoolean("hideCaretOnScroll", !0), u = e.getBoolean("inputBlurring", !0), d = e.getBoolean("scrollPadding", !0), f = new WeakMap, p = new WeakMap; function m(t) { var e = t.querySelector("input"), r = t.closest("ion-scroll"), c = t.closest("ion-content"); if (e) {
    if (r && a && !f.has(t)) {
        var n_2 = function (t, e, n) { if (!n || !e)
            return function () { }; var r = function (n) { i(e) && o(t, e, n); }, s = function () { return o(t, e, !1); }, l = function () { return r(!0); }, a = function () { return r(!1); }; return n && n.addEventListener("ionScrollStart", l), n && n.addEventListener("ionScrollEnd", a), e.addEventListener("blur", s), function () { n.removeEventListener("ionScrollStart", l), n.removeEventListener("ionScrollEnd", a), e.addEventListener("ionBlur", s); }; }(t, e, r);
        f.set(t, n_2);
    }
    if (c && s && !p.has(t)) {
        var o_2 = l(t, e, c, n);
        p.set(t, o_2);
    }
} } u && function (t) { var e = !0, n = !1; t.addEventListener("ionScrollStart", function () { n = !0; }), t.addEventListener("focusin", function () { e = !0; }, !0), t.addEventListener("touchend", function (o) { if (n)
    return void (n = !1); var i = t.activeElement; if (!i)
    return; if (-1 === r.indexOf(i.tagName))
    return; var s = o.target; s !== i && (r.indexOf(s.tagName) >= 0 || s.classList.contains("input-cover") || (e = !1, setTimeout(function () { e || i.blur(); }, 50))); }, !1); }(t), d && function (t, e) { t.addEventListener("focusin", function (t) { c(t.target, e); }), t.addEventListener("focusout", function (t) { c(t.target, 0); }); }(t, n); var v = Array.from(t.querySelectorAll("ion-input")); for (var _i = 0, v_1 = v; _i < v_1.length; _i++) {
    var t_3 = v_1[_i];
    m(t_3);
} t.body.addEventListener("ionInputDidLoad", function (t) { m(t.target); }), t.body.addEventListener("ionInputDidUnload", function (t) { !function (t) { if (a) {
    var e_2 = f.get(t);
    e_2 && e_2(), f.delete(t);
} if (s) {
    var e_3 = p.get(t);
    e_3 && e_3(), p.delete(t);
} }(t.target); }); }, Object.defineProperty(t, "__esModule", { value: !0 }); });
