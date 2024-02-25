(function(html) {
    html.className = html.className.replace(/\bno-js\b/, 'js')
})(document.documentElement);
window._wpemojiSettings = {
    "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/72x72\/",
    "ext": ".png",
    "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/svg\/",
    "svgExt": ".svg",
    "source": {
        "concatemoji": "https:\/\/bj88.fun\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.4.3"
    }
};
/*! This file is auto-generated */
! function(i, n) {
    var o, s, e;

    function c(e) {
        try {
            var t = {
                supportTests: e,
                timestamp: (new Date).valueOf()
            };
            sessionStorage.setItem(o, JSON.stringify(t))
        } catch (e) {}
    }

    function p(e, t, n) {
        e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fillText(t, 0, 0);
        var t = new Uint32Array(e.getImageData(0, 0, e.canvas.width, e.canvas.height).data),
            r = (e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fillText(n, 0, 0), new Uint32Array(e.getImageData(0, 0, e.canvas.width, e.canvas.height).data));
        return t.every(function(e, t) {
            return e === r[t]
        })
    }

    function u(e, t, n) {
        switch (t) {
            case "flag":
                return n(e, "\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f", "\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f") ? !1 : !n(e, "\ud83c\uddfa\ud83c\uddf3", "\ud83c\uddfa\u200b\ud83c\uddf3") && !n(e, "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f", "\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");
            case "emoji":
                return !n(e, "\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c\udfff", "\ud83e\udef1\ud83c\udffb\u200b\ud83e\udef2\ud83c\udfff")
        }
        return !1
    }

    function f(e, t, n) {
        var r = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? new OffscreenCanvas(300, 150) : i.createElement("canvas"),
            a = r.getContext("2d", {
                willReadFrequently: !0
            }),
            o = (a.textBaseline = "top", a.font = "600 32px Arial", {});
        return e.forEach(function(e) {
            o[e] = t(a, e, n)
        }), o
    }

    function t(e) {
        var t = i.createElement("script");
        t.src = e, t.defer = !0, i.head.appendChild(t)
    }
    "undefined" != typeof Promise && (o = "wpEmojiSettingsSupports", s = ["flag", "emoji"], n.supports = {
        everything: !0,
        everythingExceptFlag: !0
    }, e = new Promise(function(e) {
        i.addEventListener("DOMContentLoaded", e, {
            once: !0
        })
    }), new Promise(function(t) {
        var n = function() {
            try {
                var e = JSON.parse(sessionStorage.getItem(o));
                if ("object" == typeof e && "number" == typeof e.timestamp && (new Date).valueOf() < e.timestamp + 604800 && "object" == typeof e.supportTests) return e.supportTests
            } catch (e) {}
            return null
        }();
        if (!n) {
            if ("undefined" != typeof Worker && "undefined" != typeof OffscreenCanvas && "undefined" != typeof URL && URL.createObjectURL && "undefined" != typeof Blob) try {
                var e = "postMessage(" + f.toString() + "(" + [JSON.stringify(s), u.toString(), p.toString()].join(",") + "));",
                    r = new Blob([e], {
                        type: "text/javascript"
                    }),
                    a = new Worker(URL.createObjectURL(r), {
                        name: "wpTestEmojiSupports"
                    });
                return void(a.onmessage = function(e) {
                    c(n = e.data), a.terminate(), t(n)
                })
            } catch (e) {}
            c(n = f(s, u, p))
        }
        t(n)
    }).then(function(e) {
        for (var t in e) n.supports[t] = e[t], n.supports.everything = n.supports.everything && n.supports[t], "flag" !== t && (n.supports.everythingExceptFlag = n.supports.everythingExceptFlag && n.supports[t]);
        n.supports.everythingExceptFlag = n.supports.everythingExceptFlag && !n.supports.flag, n.DOMReady = !1, n.readyCallback = function() {
            n.DOMReady = !0
        }
    }).then(function() {
        return e
    }).then(function() {
        var e;
        n.supports.everything || (n.readyCallback(), (e = n.source || {}).concatemoji ? t(e.concatemoji) : e.wpemoji && e.twemoji && (t(e.twemoji), t(e.wpemoji)))
    }))
}((window, document), window._wpemojiSettings); /*! jQuery Migrate v3.4.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
    function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], function(e) {
            return t(e, window)
        }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery"), window) : t(jQuery, window)
    }(function(s, n) {
        "use strict";

        function e(e) {
            return 0 <= function(e, t) {
                for (var r = /^(\d+)\.(\d+)\.(\d+)/, n = r.exec(e) || [], o = r.exec(t) || [], a = 1; a <= 3; a++) {
                    if (+o[a] < +n[a]) return 1;
                    if (+n[a] < +o[a]) return -1
                }
                return 0
            }(s.fn.jquery, e)
        }
        s.migrateVersion = "3.4.1";
        var t = Object.create(null);
        s.migrateDisablePatches = function() {
            for (var e = 0; e < arguments.length; e++) t[arguments[e]] = !0
        }, s.migrateEnablePatches = function() {
            for (var e = 0; e < arguments.length; e++) delete t[arguments[e]]
        }, s.migrateIsPatchEnabled = function(e) {
            return !t[e]
        }, n.console && n.console.log && (s && e("3.0.0") && !e("5.0.0") || n.console.log("JQMIGRATE: jQuery 3.x-4.x REQUIRED"), s.migrateWarnings && n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"), n.console.log("JQMIGRATE: Migrate is installed" + (s.migrateMute ? "" : " with logging active") + ", version " + s.migrateVersion));
        var o = {};

        function u(e, t) {
            var r = n.console;
            !s.migrateIsPatchEnabled(e) || s.migrateDeduplicateWarnings && o[t] || (o[t] = !0, s.migrateWarnings.push(t + " [" + e + "]"), r && r.warn && !s.migrateMute && (r.warn("JQMIGRATE: " + t), s.migrateTrace && r.trace && r.trace()))
        }

        function r(e, t, r, n, o) {
            Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return u(n, o), r
                },
                set: function(e) {
                    u(n, o), r = e
                }
            })
        }

        function a(e, t, r, n, o) {
            var a = e[t];
            e[t] = function() {
                return o && u(n, o), (s.migrateIsPatchEnabled(n) ? r : a || s.noop).apply(this, arguments)
            }
        }

        function c(e, t, r, n, o) {
            if (!o) throw new Error("No warning message provided");
            return a(e, t, r, n, o), 0
        }

        function i(e, t, r, n) {
            return a(e, t, r, n), 0
        }
        s.migrateDeduplicateWarnings = !0, s.migrateWarnings = [], void 0 === s.migrateTrace && (s.migrateTrace = !0), s.migrateReset = function() {
            o = {}, s.migrateWarnings.length = 0
        }, "BackCompat" === n.document.compatMode && u("quirks", "jQuery is not compatible with Quirks Mode");
        var d, l, p, f = {},
            m = s.fn.init,
            y = s.find,
            h = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
            g = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
            v = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
        for (d in i(s.fn, "init", function(e) {
                var t = Array.prototype.slice.call(arguments);
                return s.migrateIsPatchEnabled("selector-empty-id") && "string" == typeof e && "#" === e && (u("selector-empty-id", "jQuery( '#' ) is not a valid selector"), t[0] = []), m.apply(this, t)
            }, "selector-empty-id"), s.fn.init.prototype = s.fn, i(s, "find", function(t) {
                var r = Array.prototype.slice.call(arguments);
                if ("string" == typeof t && h.test(t)) try {
                    n.document.querySelector(t)
                } catch (e) {
                    t = t.replace(g, function(e, t, r, n) {
                        return "[" + t + r + '"' + n + '"]'
                    });
                    try {
                        n.document.querySelector(t), u("selector-hash", "Attribute selector with '#' must be quoted: " + r[0]), r[0] = t
                    } catch (e) {
                        u("selector-hash", "Attribute selector with '#' was not fixed: " + r[0])
                    }
                }
                return y.apply(this, r)
            }, "selector-hash"), y) Object.prototype.hasOwnProperty.call(y, d) && (s.find[d] = y[d]);
        c(s.fn, "size", function() {
            return this.length
        }, "size", "jQuery.fn.size() is deprecated and removed; use the .length property"), c(s, "parseJSON", function() {
            return JSON.parse.apply(null, arguments)
        }, "parseJSON", "jQuery.parseJSON is deprecated; use JSON.parse"), c(s, "holdReady", s.holdReady, "holdReady", "jQuery.holdReady is deprecated"), c(s, "unique", s.uniqueSort, "unique", "jQuery.unique is deprecated; use jQuery.uniqueSort"), r(s.expr, "filters", s.expr.pseudos, "expr-pre-pseudos", "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"), r(s.expr, ":", s.expr.pseudos, "expr-pre-pseudos", "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"), e("3.1.1") && c(s, "trim", function(e) {
            return null == e ? "" : (e + "").replace(v, "$1")
        }, "trim", "jQuery.trim is deprecated; use String.prototype.trim"), e("3.2.0") && (c(s, "nodeName", function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, "nodeName", "jQuery.nodeName is deprecated"), c(s, "isArray", Array.isArray, "isArray", "jQuery.isArray is deprecated; use Array.isArray")), e("3.3.0") && (c(s, "isNumeric", function(e) {
            var t = typeof e;
            return ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
        }, "isNumeric", "jQuery.isNumeric() is deprecated"), s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            f["[object " + t + "]"] = t.toLowerCase()
        }), c(s, "type", function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[Object.prototype.toString.call(e)] || "object" : typeof e
        }, "type", "jQuery.type is deprecated"), c(s, "isFunction", function(e) {
            return "function" == typeof e
        }, "isFunction", "jQuery.isFunction() is deprecated"), c(s, "isWindow", function(e) {
            return null != e && e === e.window
        }, "isWindow", "jQuery.isWindow() is deprecated")), s.ajax && (l = s.ajax, p = /(=)\?(?=&|$)|\?\?/, i(s, "ajax", function() {
            var e = l.apply(this, arguments);
            return e.promise && (c(e, "success", e.done, "jqXHR-methods", "jQXHR.success is deprecated and removed"), c(e, "error", e.fail, "jqXHR-methods", "jQXHR.error is deprecated and removed"), c(e, "complete", e.always, "jqXHR-methods", "jQXHR.complete is deprecated and removed")), e
        }, "jqXHR-methods"), e("4.0.0") || s.ajaxPrefilter("+json", function(e) {
            !1 !== e.jsonp && (p.test(e.url) || "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && p.test(e.data)) && u("jsonp-promotion", "JSON-to-JSONP auto-promotion is deprecated")
        }));
        var j = s.fn.removeAttr,
            b = s.fn.toggleClass,
            w = /\S+/g;

        function x(e) {
            return e.replace(/-([a-z])/g, function(e, t) {
                return t.toUpperCase()
            })
        }
        i(s.fn, "removeAttr", function(e) {
            var r = this,
                n = !1;
            return s.each(e.match(w), function(e, t) {
                s.expr.match.bool.test(t) && r.each(function() {
                    if (!1 !== s(this).prop(t)) return !(n = !0)
                }), n && (u("removeAttr-bool", "jQuery.fn.removeAttr no longer sets boolean properties: " + t), r.prop(t, !1))
            }), j.apply(this, arguments)
        }, "removeAttr-bool"), i(s.fn, "toggleClass", function(t) {
            return void 0 !== t && "boolean" != typeof t ? b.apply(this, arguments) : (u("toggleClass-bool", "jQuery.fn.toggleClass( boolean ) is deprecated"), this.each(function() {
                var e = this.getAttribute && this.getAttribute("class") || "";
                e && s.data(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== t && s.data(this, "__className__") || "")
            }))
        }, "toggleClass-bool");
        var Q, A, R = !1,
            C = /^[a-z]/,
            N = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
        s.swap && s.each(["height", "width", "reliableMarginRight"], function(e, t) {
            var r = s.cssHooks[t] && s.cssHooks[t].get;
            r && (s.cssHooks[t].get = function() {
                var e;
                return R = !0, e = r.apply(this, arguments), R = !1, e
            })
        }), i(s, "swap", function(e, t, r, n) {
            var o, a, i = {};
            for (a in R || u("swap", "jQuery.swap() is undocumented and deprecated"), t) i[a] = e.style[a], e.style[a] = t[a];
            for (a in o = r.apply(e, n || []), t) e.style[a] = i[a];
            return o
        }, "swap"), e("3.4.0") && "undefined" != typeof Proxy && (s.cssProps = new Proxy(s.cssProps || {}, {
            set: function() {
                return u("cssProps", "jQuery.cssProps is deprecated"), Reflect.set.apply(this, arguments)
            }
        })), e("4.0.0") ? (A = {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        }, "undefined" != typeof Proxy ? s.cssNumber = new Proxy(A, {
            get: function() {
                return u("css-number", "jQuery.cssNumber is deprecated"), Reflect.get.apply(this, arguments)
            },
            set: function() {
                return u("css-number", "jQuery.cssNumber is deprecated"), Reflect.set.apply(this, arguments)
            }
        }) : s.cssNumber = A) : A = s.cssNumber, Q = s.fn.css, i(s.fn, "css", function(e, t) {
            var r, n, o = this;
            return e && "object" == typeof e && !Array.isArray(e) ? (s.each(e, function(e, t) {
                s.fn.css.call(o, e, t)
            }), this) : ("number" == typeof t && (r = x(e), n = r, C.test(n) && N.test(n[0].toUpperCase() + n.slice(1)) || A[r] || u("css-number", 'Number-typed values are deprecated for jQuery.fn.css( "' + e + '", value )')), Q.apply(this, arguments))
        }, "css-number");
        var S, P, k, H, E = s.data;
        i(s, "data", function(e, t, r) {
            var n, o, a;
            if (t && "object" == typeof t && 2 === arguments.length) {
                for (a in n = s.hasData(e) && E.call(this, e), o = {}, t) a !== x(a) ? (u("data-camelCase", "jQuery.data() always sets/gets camelCased names: " + a), n[a] = t[a]) : o[a] = t[a];
                return E.call(this, e, o), t
            }
            return t && "string" == typeof t && t !== x(t) && (n = s.hasData(e) && E.call(this, e)) && t in n ? (u("data-camelCase", "jQuery.data() always sets/gets camelCased names: " + t), 2 < arguments.length && (n[t] = r), n[t]) : E.apply(this, arguments)
        }, "data-camelCase"), s.fx && (k = s.Tween.prototype.run, H = function(e) {
            return e
        }, i(s.Tween.prototype, "run", function() {
            1 < s.easing[this.easing].length && (u("easing-one-arg", "'jQuery.easing." + this.easing.toString() + "' should use only one argument"), s.easing[this.easing] = H), k.apply(this, arguments)
        }, "easing-one-arg"), S = s.fx.interval, P = "jQuery.fx.interval is deprecated", n.requestAnimationFrame && Object.defineProperty(s.fx, "interval", {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return n.document.hidden || u("fx-interval", P), s.migrateIsPatchEnabled("fx-interval") && void 0 === S ? 13 : S
            },
            set: function(e) {
                u("fx-interval", P), S = e
            }
        }));
        var M = s.fn.load,
            q = s.event.add,
            O = s.event.fix;
        s.event.props = [], s.event.fixHooks = {}, r(s.event.props, "concat", s.event.props.concat, "event-old-patch", "jQuery.event.props.concat() is deprecated and removed"), i(s.event, "fix", function(e) {
            var t, r = e.type,
                n = this.fixHooks[r],
                o = s.event.props;
            if (o.length) {
                u("event-old-patch", "jQuery.event.props are deprecated and removed: " + o.join());
                while (o.length) s.event.addProp(o.pop())
            }
            if (n && !n._migrated_ && (n._migrated_ = !0, u("event-old-patch", "jQuery.event.fixHooks are deprecated and removed: " + r), (o = n.props) && o.length))
                while (o.length) s.event.addProp(o.pop());
            return t = O.call(this, e), n && n.filter ? n.filter(t, e) : t
        }, "event-old-patch"), i(s.event, "add", function(e, t) {
            return e === n && "load" === t && "complete" === n.document.readyState && u("load-after-event", "jQuery(window).on('load'...) called after load event occurred"), q.apply(this, arguments)
        }, "load-after-event"), s.each(["load", "unload", "error"], function(e, t) {
            i(s.fn, t, function() {
                var e = Array.prototype.slice.call(arguments, 0);
                return "load" === t && "string" == typeof e[0] ? M.apply(this, e) : (u("shorthand-removed-v3", "jQuery.fn." + t + "() is deprecated"), e.splice(0, 0, t), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e), this))
            }, "shorthand-removed-v3")
        }), s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, r) {
            c(s.fn, r, function(e, t) {
                return 0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r)
            }, "shorthand-deprecated-v3", "jQuery.fn." + r + "() event shorthand is deprecated")
        }), s(function() {
            s(n.document).triggerHandler("ready")
        }), s.event.special.ready = {
            setup: function() {
                this === n.document && u("ready-event", "'ready' event is deprecated")
            }
        }, c(s.fn, "bind", function(e, t, r) {
            return this.on(e, null, t, r)
        }, "pre-on-methods", "jQuery.fn.bind() is deprecated"), c(s.fn, "unbind", function(e, t) {
            return this.off(e, null, t)
        }, "pre-on-methods", "jQuery.fn.unbind() is deprecated"), c(s.fn, "delegate", function(e, t, r, n) {
            return this.on(t, e, r, n)
        }, "pre-on-methods", "jQuery.fn.delegate() is deprecated"), c(s.fn, "undelegate", function(e, t, r) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r)
        }, "pre-on-methods", "jQuery.fn.undelegate() is deprecated"), c(s.fn, "hover", function(e, t) {
            return this.on("mouseenter", e).on("mouseleave", t || e)
        }, "pre-on-methods", "jQuery.fn.hover() is deprecated");

        function T(e) {
            var t = n.document.implementation.createHTMLDocument("");
            return t.body.innerHTML = e, t.body && t.body.innerHTML
        }
        var F = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;
        s.UNSAFE_restoreLegacyHtmlPrefilter = function() {
            s.migrateEnablePatches("self-closed-tags")
        }, i(s, "htmlPrefilter", function(e) {
            var t, r;
            return (r = (t = e).replace(F, "<$1></$2>")) !== t && T(t) !== T(r) && u("self-closed-tags", "HTML tags must be properly nested and closed: " + t), e.replace(F, "<$1></$2>")
        }, "self-closed-tags"), s.migrateDisablePatches("self-closed-tags");
        var D, W, _, I = s.fn.offset;
        return i(s.fn, "offset", function() {
            var e = this[0];
            return !e || e.nodeType && e.getBoundingClientRect ? I.apply(this, arguments) : (u("offset-valid-elem", "jQuery.fn.offset() requires a valid DOM element"), arguments.length ? this : void 0)
        }, "offset-valid-elem"), s.ajax && (D = s.param, i(s, "param", function(e, t) {
            var r = s.ajaxSettings && s.ajaxSettings.traditional;
            return void 0 === t && r && (u("param-ajax-traditional", "jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), t = r), D.call(this, e, t)
        }, "param-ajax-traditional")), c(s.fn, "andSelf", s.fn.addBack, "andSelf", "jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"), s.Deferred && (W = s.Deferred, _ = [
            ["resolve", "done", s.Callbacks("once memory"), s.Callbacks("once memory"), "resolved"],
            ["reject", "fail", s.Callbacks("once memory"), s.Callbacks("once memory"), "rejected"],
            ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")]
        ], i(s, "Deferred", function(e) {
            var a = W(),
                i = a.promise();

            function t() {
                var o = arguments;
                return s.Deferred(function(n) {
                    s.each(_, function(e, t) {
                        var r = "function" == typeof o[e] && o[e];
                        a[t[1]](function() {
                            var e = r && r.apply(this, arguments);
                            e && "function" == typeof e.promise ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[t[0] + "With"](this === i ? n.promise() : this, r ? [e] : arguments)
                        })
                    }), o = null
                }).promise()
            }
            return c(a, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"), c(i, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"), e && e.call(a, a), a
        }, "deferred-pipe"), s.Deferred.exceptionHook = W.exceptionHook), s
    });
(function() {
    document.addEventListener("DOMContentLoaded", function() {
        var e = "dmca-badge";
        var t = "refurl";
        var n = document.querySelectorAll('a.' + e);
        if (n[0].getAttribute("href").indexOf("refurl") < 0) {
            for (var r = 0; r < n.length; r++) {
                var i = n[r];
                i.href = i.href + (i.href.indexOf("?") === -1 ? "?" : "&") + t + "=" + document.location
            }
        }
    }, false)
})();
! function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports && "function" == typeof require ? t(require("jquery")) : t(jQuery)
}(function(t) {
    "use strict";
    var e = {
            escapeRegExChars: function(t) {
                return t.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")
            },
            createNode: function(t) {
                var e = document.createElement("div");
                return e.className = t, e.style.position = "absolute", e.style.display = "none", e
            }
        },
        s = 27,
        i = 9,
        n = 13,
        o = 38,
        a = 39,
        u = 40,
        l = t.noop;

    function r(e, s) {
        this.element = e, this.el = t(e), this.suggestions = [], this.badQueries = [], this.selectedIndex = -1, this.currentValue = this.element.value, this.timeoutId = null, this.cachedResponse = {}, this.onChangeTimeout = null, this.onChange = null, this.isLocal = !1, this.suggestionsContainer = null, this.noSuggestionsContainer = null, this.options = t.extend(!0, {}, r.defaults, s), this.classes = {
            selected: "autocomplete-selected",
            suggestion: "autocomplete-suggestion"
        }, this.hint = null, this.hintValue = "", this.selection = null, this.initialize(), this.setOptions(s)
    }
    r.utils = e, t.Autocomplete = r, r.defaults = {
        ajaxSettings: {},
        autoSelectFirst: !1,
        appendTo: "body",
        serviceUrl: null,
        lookup: null,
        onSelect: null,
        onHint: null,
        width: "auto",
        minChars: 1,
        maxHeight: 300,
        deferRequestBy: 0,
        params: {},
        formatResult: function(t, s) {
            if (!s) return t.value;
            var i = "(" + e.escapeRegExChars(s) + ")";
            return t.value.replace(new RegExp(i, "gi"), "<strong>$1</strong>").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/&lt;(\/?strong)&gt;/g, "<$1>")
        },
        formatGroup: function(t, e) {
            return '<div class="autocomplete-group">' + e + "</div>"
        },
        delimiter: null,
        zIndex: 9999,
        type: "GET",
        noCache: !1,
        onSearchStart: l,
        onSearchComplete: l,
        onSearchError: l,
        preserveInput: !1,
        containerClass: "autocomplete-suggestions",
        tabDisabled: !1,
        dataType: "text",
        currentRequest: null,
        triggerSelectOnValidInput: !0,
        preventBadQueries: !0,
        lookupFilter: function(t, e, s) {
            return -1 !== t.value.toLowerCase().indexOf(s)
        },
        paramName: "query",
        transformResult: function(e) {
            return "string" == typeof e ? t.parseJSON(e) : e
        },
        showNoSuggestionNotice: !1,
        noSuggestionNotice: "No results",
        orientation: "bottom",
        forceFixPosition: !1
    }, r.prototype = {
        initialize: function() {
            var e, s = this,
                i = "." + s.classes.suggestion,
                n = s.classes.selected,
                o = s.options;
            s.element.setAttribute("autocomplete", "off"), s.noSuggestionsContainer = t('<div class="autocomplete-no-suggestion"></div>').html(this.options.noSuggestionNotice).get(0), s.suggestionsContainer = r.utils.createNode(o.containerClass), (e = t(s.suggestionsContainer)).appendTo(o.appendTo || "body"), "auto" !== o.width && e.css("width", o.width), e.on("mouseover.autocomplete", i, function() {
                s.activate(t(this).data("index"))
            }), e.on("mouseout.autocomplete", function() {
                s.selectedIndex = -1, e.children("." + n).removeClass(n)
            }), e.on("click.autocomplete", i, function() {
                s.select(t(this).data("index"))
            }), e.on("click.autocomplete", function() {
                clearTimeout(s.blurTimeoutId)
            }), s.fixPositionCapture = function() {
                s.visible && s.fixPosition()
            }, t(window).on("resize.autocomplete", s.fixPositionCapture), s.el.on("keydown.autocomplete", function(t) {
                s.onKeyPress(t)
            }), s.el.on("keyup.autocomplete", function(t) {
                s.onKeyUp(t)
            }), s.el.on("blur.autocomplete", function() {
                s.onBlur()
            }), s.el.on("focus.autocomplete", function() {
                s.onFocus()
            }), s.el.on("change.autocomplete", function(t) {
                s.onKeyUp(t)
            }), s.el.on("input.autocomplete", function(t) {
                s.onKeyUp(t)
            })
        },
        onFocus: function() {
            this.disabled || (this.fixPosition(), this.el.val().length >= this.options.minChars && this.onValueChange())
        },
        onBlur: function() {
            var e = this,
                s = e.options,
                i = e.el.val(),
                n = e.getQuery(i);
            e.blurTimeoutId = setTimeout(function() {
                e.hide(), e.selection && e.currentValue !== n && (s.onInvalidateSelection || t.noop).call(e.element)
            }, 200)
        },
        abortAjax: function() {
            this.currentRequest && (this.currentRequest.abort(), this.currentRequest = null)
        },
        setOptions: function(e) {
            var s = t.extend({}, this.options, e);
            this.isLocal = Array.isArray(s.lookup), this.isLocal && (s.lookup = this.verifySuggestionsFormat(s.lookup)), s.orientation = this.validateOrientation(s.orientation, "bottom"), t(this.suggestionsContainer).css({
                "max-height": s.maxHeight + "px",
                width: s.width + "px",
                "z-index": s.zIndex
            }), this.options = s
        },
        clearCache: function() {
            this.cachedResponse = {}, this.badQueries = []
        },
        clear: function() {
            this.clearCache(), this.currentValue = "", this.suggestions = []
        },
        disable: function() {
            this.disabled = !0, clearTimeout(this.onChangeTimeout), this.abortAjax()
        },
        enable: function() {
            this.disabled = !1
        },
        fixPosition: function() {
            var e = t(this.suggestionsContainer),
                s = e.parent().get(0);
            if (s === document.body || this.options.forceFixPosition) {
                var i = this.options.orientation,
                    n = e.outerHeight(),
                    o = this.el.outerHeight(),
                    a = this.el.offset(),
                    u = {
                        top: a.top,
                        left: a.left
                    };
                if ("auto" === i) {
                    var l = t(window).height(),
                        r = t(window).scrollTop(),
                        h = -r + a.top - n,
                        c = r + l - (a.top + o + n);
                    i = Math.max(h, c) === h ? "top" : "bottom"
                }
                if (u.top += "top" === i ? -n : o, s !== document.body) {
                    var g, d = e.css("opacity");
                    this.visible || e.css("opacity", 0).show(), g = e.offsetParent().offset(), u.top -= g.top, u.top += s.scrollTop, u.left -= g.left, this.visible || e.css("opacity", d).hide()
                }
                "auto" === this.options.width && (u.width = this.el.outerWidth() + "px"), e.css(u)
            }
        },
        isCursorAtEnd: function() {
            var t, e = this.el.val().length,
                s = this.element.selectionStart;
            return "number" == typeof s ? s === e : !document.selection || ((t = document.selection.createRange()).moveStart("character", -e), e === t.text.length)
        },
        onKeyPress: function(t) {
            if (this.disabled || this.visible || t.which !== u || !this.currentValue) {
                if (!this.disabled && this.visible) {
                    switch (t.which) {
                        case s:
                            this.el.val(this.currentValue), this.hide();
                            break;
                        case a:
                            if (this.hint && this.options.onHint && this.isCursorAtEnd()) {
                                this.selectHint();
                                break
                            }
                            return;
                        case i:
                            if (this.hint && this.options.onHint) return void this.selectHint();
                            if (-1 === this.selectedIndex) return void this.hide();
                            if (this.select(this.selectedIndex), !1 === this.options.tabDisabled) return;
                            break;
                        case n:
                            if (-1 === this.selectedIndex) return void this.hide();
                            this.select(this.selectedIndex);
                            break;
                        case o:
                            this.moveUp();
                            break;
                        case u:
                            this.moveDown();
                            break;
                        default:
                            return
                    }
                    t.stopImmediatePropagation(), t.preventDefault()
                }
            } else this.suggest()
        },
        onKeyUp: function(t) {
            var e = this;
            if (!e.disabled) {
                switch (t.which) {
                    case o:
                    case u:
                        return
                }
                clearTimeout(e.onChangeTimeout), e.currentValue !== e.el.val() && (e.findBestHint(), e.options.deferRequestBy > 0 ? e.onChangeTimeout = setTimeout(function() {
                    e.onValueChange()
                }, e.options.deferRequestBy) : e.onValueChange())
            }
        },
        onValueChange: function() {
            if (this.ignoreValueChange) this.ignoreValueChange = !1;
            else {
                var e = this.options,
                    s = this.el.val(),
                    i = this.getQuery(s);
                this.selection && this.currentValue !== i && (this.selection = null, (e.onInvalidateSelection || t.noop).call(this.element)), clearTimeout(this.onChangeTimeout), this.currentValue = s, this.selectedIndex = -1, e.triggerSelectOnValidInput && this.isExactMatch(i) ? this.select(0) : i.length < e.minChars ? this.hide() : this.getSuggestions(i)
            }
        },
        isExactMatch: function(t) {
            var e = this.suggestions;
            return 1 === e.length && e[0].value.toLowerCase() === t.toLowerCase()
        },
        getQuery: function(e) {
            var s, i = this.options.delimiter;
            return i ? (s = e.split(i), t.trim(s[s.length - 1])) : e
        },
        getSuggestionsLocal: function(e) {
            var s, i = this.options,
                n = e.toLowerCase(),
                o = i.lookupFilter,
                a = parseInt(i.lookupLimit, 10);
            return s = {
                suggestions: t.grep(i.lookup, function(t) {
                    return o(t, e, n)
                })
            }, a && s.suggestions.length > a && (s.suggestions = s.suggestions.slice(0, a)), s
        },
        getSuggestions: function(e) {
            var s, i, n, o, a = this,
                u = a.options,
                l = u.serviceUrl;
            u.params[u.paramName] = e, !1 !== u.onSearchStart.call(a.element, u.params) && (i = u.ignoreParams ? null : u.params, t.isFunction(u.lookup) ? u.lookup(e, function(t) {
                a.suggestions = t.suggestions, a.suggest(), u.onSearchComplete.call(a.element, e, t.suggestions)
            }) : (a.isLocal ? s = a.getSuggestionsLocal(e) : (t.isFunction(l) && (l = l.call(a.element, e)), n = l + "?" + t.param(i || {}), s = a.cachedResponse[n]), s && Array.isArray(s.suggestions) ? (a.suggestions = s.suggestions, a.suggest(), u.onSearchComplete.call(a.element, e, s.suggestions)) : a.isBadQuery(e) ? u.onSearchComplete.call(a.element, e, []) : (a.abortAjax(), o = {
                url: l,
                data: i,
                type: u.type,
                dataType: u.dataType
            }, t.extend(o, u.ajaxSettings), a.currentRequest = t.ajax(o).done(function(t) {
                var s;
                a.currentRequest = null, s = u.transformResult(t, e), a.processResponse(s, e, n), u.onSearchComplete.call(a.element, e, s.suggestions)
            }).fail(function(t, s, i) {
                u.onSearchError.call(a.element, e, t, s, i)
            }))))
        },
        isBadQuery: function(t) {
            if (!this.options.preventBadQueries) return !1;
            for (var e = this.badQueries, s = e.length; s--;)
                if (0 === t.indexOf(e[s])) return !0;
            return !1
        },
        hide: function() {
            var e = t(this.suggestionsContainer);
            t.isFunction(this.options.onHide) && this.visible && this.options.onHide.call(this.element, e), this.visible = !1, this.selectedIndex = -1, clearTimeout(this.onChangeTimeout), t(this.suggestionsContainer).hide(), this.onHint(null)
        },
        suggest: function() {
            if (this.suggestions.length) {
                var e, s = this.options,
                    i = s.groupBy,
                    n = s.formatResult,
                    o = this.getQuery(this.currentValue),
                    a = this.classes.suggestion,
                    u = this.classes.selected,
                    l = t(this.suggestionsContainer),
                    r = t(this.noSuggestionsContainer),
                    h = s.beforeRender,
                    c = "";
                s.triggerSelectOnValidInput && this.isExactMatch(o) ? this.select(0) : (t.each(this.suggestions, function(t, u) {
                    i && (c += function(t, n) {
                        var o = t.data[i];
                        return e === o ? "" : (e = o, s.formatGroup(t, e))
                    }(u, 0)), c += '<div class="' + a + '" data-index="' + t + '">' + n(u, o, t) + "</div>"
                }), this.adjustContainerWidth(), r.detach(), l.html(c), t.isFunction(h) && h.call(this.element, l, this.suggestions), this.fixPosition(), l.show(), s.autoSelectFirst && (this.selectedIndex = 0, l.scrollTop(0), l.children("." + a).first().addClass(u)), this.visible = !0, this.findBestHint())
            } else this.options.showNoSuggestionNotice ? this.noSuggestions() : this.hide()
        },
        noSuggestions: function() {
            var e = this.options.beforeRender,
                s = t(this.suggestionsContainer),
                i = t(this.noSuggestionsContainer);
            this.adjustContainerWidth(), i.detach(), s.empty(), s.append(i), t.isFunction(e) && e.call(this.element, s, this.suggestions), this.fixPosition(), s.show(), this.visible = !0
        },
        adjustContainerWidth: function() {
            var e, s = this.options,
                i = t(this.suggestionsContainer);
            "auto" === s.width ? (e = this.el.outerWidth(), i.css("width", e > 0 ? e : 300)) : "flex" === s.width && i.css("width", "")
        },
        findBestHint: function() {
            var e = this.el.val().toLowerCase(),
                s = null;
            e && (t.each(this.suggestions, function(t, i) {
                var n = 0 === i.value.toLowerCase().indexOf(e);
                return n && (s = i), !n
            }), this.onHint(s))
        },
        onHint: function(e) {
            var s = this.options.onHint,
                i = "";
            e && (i = this.currentValue + e.value.substr(this.currentValue.length)), this.hintValue !== i && (this.hintValue = i, this.hint = e, t.isFunction(s) && s.call(this.element, i))
        },
        verifySuggestionsFormat: function(e) {
            return e.length && "string" == typeof e[0] ? t.map(e, function(t) {
                return {
                    value: t,
                    data: null
                }
            }) : e
        },
        validateOrientation: function(e, s) {
            return e = t.trim(e || "").toLowerCase(), -1 === t.inArray(e, ["auto", "bottom", "top"]) && (e = s), e
        },
        processResponse: function(t, e, s) {
            var i = this.options;
            t.suggestions = this.verifySuggestionsFormat(t.suggestions), i.noCache || (this.cachedResponse[s] = t, i.preventBadQueries && !t.suggestions.length && this.badQueries.push(e)), e === this.getQuery(this.currentValue) && (this.suggestions = t.suggestions, this.suggest())
        },
        activate: function(e) {
            var s, i = this.classes.selected,
                n = t(this.suggestionsContainer),
                o = n.find("." + this.classes.suggestion);
            return n.find("." + i).removeClass(i), this.selectedIndex = e, -1 !== this.selectedIndex && o.length > this.selectedIndex ? (s = o.get(this.selectedIndex), t(s).addClass(i), s) : null
        },
        selectHint: function() {
            var e = t.inArray(this.hint, this.suggestions);
            this.select(e)
        },
        select: function(t) {
            this.hide(), this.onSelect(t)
        },
        moveUp: function() {
            if (-1 !== this.selectedIndex) return 0 === this.selectedIndex ? (t(this.suggestionsContainer).children("." + this.classes.suggestion).first().removeClass(this.classes.selected), this.selectedIndex = -1, this.ignoreValueChange = !1, this.el.val(this.currentValue), void this.findBestHint()) : void this.adjustScroll(this.selectedIndex - 1)
        },
        moveDown: function() {
            this.selectedIndex !== this.suggestions.length - 1 && this.adjustScroll(this.selectedIndex + 1)
        },
        adjustScroll: function(e) {
            var s = this.activate(e);
            if (s) {
                var i, n, o, a = t(s).outerHeight();
                i = s.offsetTop, o = (n = t(this.suggestionsContainer).scrollTop()) + this.options.maxHeight - a, i < n ? t(this.suggestionsContainer).scrollTop(i) : i > o && t(this.suggestionsContainer).scrollTop(i - this.options.maxHeight + a), this.options.preserveInput || (this.ignoreValueChange = !0, this.el.val(this.getValue(this.suggestions[e].value))), this.onHint(null)
            }
        },
        onSelect: function(e) {
            var s = this.options.onSelect,
                i = this.suggestions[e];
            this.currentValue = this.getValue(i.value), this.currentValue === this.el.val() || this.options.preserveInput || this.el.val(this.currentValue), this.onHint(null), this.suggestions = [], this.selection = i, t.isFunction(s) && s.call(this.element, i)
        },
        getValue: function(t) {
            var e, s, i = this.options.delimiter;
            return i ? 1 === (s = (e = this.currentValue).split(i)).length ? t : e.substr(0, e.length - s[s.length - 1].length) + t : t
        },
        dispose: function() {
            this.el.off(".autocomplete").removeData("autocomplete"), t(window).off("resize.autocomplete", this.fixPositionCapture), t(this.suggestionsContainer).remove()
        }
    }, t.fn.devbridgeAutocomplete = function(e, s) {
        return arguments.length ? this.each(function() {
            var i = t(this),
                n = i.data("autocomplete");
            "string" == typeof e ? n && "function" == typeof n[e] && n[e](s) : (n && n.dispose && n.dispose(), n = new r(this, e), i.data("autocomplete", n))
        }) : this.first().data("autocomplete")
    }, t.fn.autocomplete || (t.fn.autocomplete = t.fn.devbridgeAutocomplete)
});
jQuery(document).ready(function($) {
    "use strict";
    $('.searchform').each(function() {
        var append = $(this).find('.live-search-results');
        var search_categories = $(this).find('.search_categories');
        var serviceUrl = flatsomeVars.ajaxurl + '?action=flatsome_ajax_search_products';
        var product_cat = '';
        if (search_categories.length && search_categories.val() !== '') {
            serviceUrl += '&product_cat=' + search_categories.val()
        }
        $(this).find('.search-field').devbridgeAutocomplete({
            minChars: 3,
            appendTo: append,
            triggerSelectOnValidInput: !1,
            serviceUrl: serviceUrl,
            deferRequestBy: parseInt(flatsomeVars.options.search_result_latency),
            onSearchStart: function() {
                $('.submit-button').removeClass('loading');
                $('.submit-button').addClass('loading')
            },
            onSelect: function(suggestion) {
                if (suggestion.id != -1) {
                    window.location.href = suggestion.url
                }
            },
            onSearchComplete: function() {
                $('.submit-button').removeClass('loading')
            },
            beforeRender: function(container) {
                $(container).removeAttr('style')
            },
            formatResult: function(suggestion, currentValue) {
                var pattern = '(' + $.Autocomplete.utils.escapeRegExChars(currentValue) + ')';
                var html = '';
                if (suggestion.img) html += '<img class="search-image" src="' + suggestion.img + '">';
                html += '<div class="search-name">' + suggestion.value.replace(new RegExp(pattern, 'gi'), '<strong>$1<\/strong>') + '</div>';
                if (suggestion.price) html += '<span class="search-price">' + suggestion.price + '<span>';
                return html
            }
        });
        if (search_categories.length) {
            var searchForm = $(this).find('.search-field').devbridgeAutocomplete();
            search_categories.on('change', function(e) {
                if (search_categories.val() != '') {
                    searchForm.setOptions({
                        serviceUrl: flatsomeVars.ajaxurl + '?action=flatsome_ajax_search_products&product_cat=' + search_categories.val()
                    })
                } else {
                    searchForm.setOptions({
                        serviceUrl: flatsomeVars.ajaxurl + '?action=flatsome_ajax_search_products'
                    })
                }
                searchForm.hide();
                searchForm.onValueChange()
            })
        }
    })
}); /*! This file is auto-generated */
! function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : jQuery && !jQuery.fn.hoverIntent && e(jQuery)
}(function(f) {
    "use strict";

    function u(e) {
        return "function" == typeof e
    }
    var i, r, v = {
            interval: 100,
            sensitivity: 6,
            timeout: 0
        },
        s = 0,
        a = function(e) {
            i = e.pageX, r = e.pageY
        },
        p = function(e, t, n, o) {
            if (Math.sqrt((n.pX - i) * (n.pX - i) + (n.pY - r) * (n.pY - r)) < o.sensitivity) return t.off(n.event, a), delete n.timeoutId, n.isActive = !0, e.pageX = i, e.pageY = r, delete n.pX, delete n.pY, o.over.apply(t[0], [e]);
            n.pX = i, n.pY = r, n.timeoutId = setTimeout(function() {
                p(e, t, n, o)
            }, o.interval)
        };
    f.fn.hoverIntent = function(e, t, n) {
        function o(e) {
            var u = f.extend({}, e),
                r = f(this),
                v = ((t = r.data("hoverIntent")) || r.data("hoverIntent", t = {}), t[i]),
                t = (v || (t[i] = v = {
                    id: i
                }), v.timeoutId && (v.timeoutId = clearTimeout(v.timeoutId)), v.event = "mousemove.hoverIntent.hoverIntent" + i);
            "mouseenter" === e.type ? v.isActive || (v.pX = u.pageX, v.pY = u.pageY, r.off(t, a).on(t, a), v.timeoutId = setTimeout(function() {
                p(u, r, v, d)
            }, d.interval)) : v.isActive && (r.off(t, a), v.timeoutId = setTimeout(function() {
                var e, t, n, o, i;
                e = u, t = r, n = v, o = d.out, (i = t.data("hoverIntent")) && delete i[n.id], o.apply(t[0], [e])
            }, d.timeout))
        }
        var i = s++,
            d = f.extend({}, v);
        f.isPlainObject(e) ? (d = f.extend(d, e), u(d.out) || (d.out = d.over)) : d = u(t) ? f.extend(d, {
            over: e,
            out: t,
            selector: n
        }) : f.extend(d, {
            over: e,
            out: e,
            selector: t
        });
        return this.on({
            "mouseenter.hoverIntent": o,
            "mouseleave.hoverIntent": o
        }, d.selector)
    }
});
var flatsomeVars = {
    "theme": {
        "version": "3.18.4"
    },
    "ajaxurl": "https:\/\/bj88.fun\/wp-admin\/admin-ajax.php",
    "rtl": "",
    "sticky_height": "70",
    "stickyHeaderHeight": "0",
    "scrollPaddingTop": "0",
    "assets_url": "https:\/\/bj88.fun\/wp-content\/themes\/flatsome\/assets\/",
    "lightbox": {
        "close_markup": "<button title=\"%title%\" type=\"button\" class=\"mfp-close\"><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-x\"><line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"><\/line><line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"><\/line><\/svg><\/button>",
        "close_btn_inside": !1
    },
    "user": {
        "can_edit_pages": !1
    },
    "i18n": {
        "mainMenu": "Menu ch\u00ednh",
        "toggleButton": "Chuy\u1ec3n \u0111\u1ed5i"
    },
    "options": {
        "cookie_notice_version": "1",
        "swatches_layout": !1,
        "swatches_disable_deselect": !1,
        "swatches_box_select_event": !1,
        "swatches_box_behavior_selected": !1,
        "swatches_box_update_urls": "1",
        "swatches_box_reset": !1,
        "swatches_box_reset_limited": !1,
        "swatches_box_reset_extent": !1,
        "swatches_box_reset_time": 300,
        "search_result_latency": "0"
    }
};
! function() {
    var e, t, n, o, i = {
            7387: function() {
                Flatsome.behavior("back-to-top", {
                    attach(e) {
                        const t = jQuery(".back-to-top", e);
                        if (!t.length) return;
                        let n = null;
                        window.addEventListener("scroll", (() => {
                            var e;
                            const o = jQuery(window).scrollTop();
                            n = null !== (e = n) && void 0 !== e ? e : jQuery(window).height(), t.toggleClass("active", o >= n)
                        }), {
                            passive: !0
                        })
                    }
                })
            },
            1478: function() {
                Flatsome.behavior("commons", {
                    attach(e) {
                        jQuery("select.resizeselect").resizeselect(), jQuery("[data-parallax]", e).flatsomeParallax(), jQuery.fn.packery && (jQuery("[data-packery-options], .has-packery", e).each((function() {
                            let e = jQuery(this);
                            e.packery({
                                originLeft: !flatsomeVars.rtl
                            }), setTimeout((function() {
                                e.imagesLoaded((function() {
                                    e.packery("layout")
                                }))
                            }), 100)
                        })), jQuery(".banner-grid-wrapper").imagesLoaded((function() {
                            jQuery(this.elements).removeClass("processing")
                        }))), "objectFitPolyfill" in window && window.objectFitPolyfill()
                    },
                    detach(e) {}
                })
            },
            9086: function() {
                Flatsome.behavior("nav-hover", {
                    attach(e) {
                        const t = jQuery(".ux-body-overlay", e);
                        t.length && jQuery([".nav-prompts-overlay li.menu-item", ".nav-prompts-overlay .header-vertical-menu__opener"].join(", "), e).on({
                            mouseenter: () => {
                                t.addClass("ux-body-overlay--hover-active")
                            },
                            mouseleave: () => {
                                t.removeClass("ux-body-overlay--hover-active")
                            }
                        })
                    }
                })
            },
            7725: function() {
                function e(e) {
                    e.attr("aria-hidden", "true"), e.find("> li > a, > li > button").attr("tabindex", "-1")
                }
                Flatsome.behavior("sidebar-slider", {
                    attach(t) {
                        const n = jQuery("body").hasClass("mobile-submenu-toggle");
                        jQuery(".mobile-sidebar-slide", t).each(((t, o) => {
                            const i = parseInt(jQuery(o).data("levels"), 10) || 1,
                                a = jQuery(".sidebar-menu", o),
                                r = jQuery(".nav-sidebar", o);
                            jQuery(["> li > ul.children", "> li > .sub-menu", i > 1 ? "> li > ul.children > li > ul" : null].filter(Boolean).join(", "), r).each(((t, o) => {
                                const i = jQuery(o),
                                    r = i.parent(),
                                    s = r.parents("ul:first"),
                                    l = jQuery(["> .toggle", '> a[href="#"]', n && "> a"].filter(Boolean).join(","), r),
                                    c = r.find("> a").text().trim(),
                                    u = i.parents("ul").length,
                                    d = Boolean(window.flatsomeVars.rtl),
                                    h = jQuery(`\n            <li class="nav-slide-header pt-half pb-half">\n              <button class="toggle">\n                <i class="icon-angle-left"></i>\n                ${c||window.flatsomeVars.i18n.mainMenu}\n              </button>\n            </li>\n          `);
                                i.prepend(h), e(i);
                                let f = null;
                                l.off("click").on("click", (e => {
                                    var t;
                                    r.attr("aria-expanded", "true"), s.addClass("is-current-parent"), i.addClass("is-current-slide"), a.css("transform", `translateX(${d?"":"-"}${100*u}%)`), (t = i).attr("aria-hidden", "false"), t.find("> li > a, > li > button").attr("tabindex", ""), clearTimeout(f), e.preventDefault()
                                })), h.find(".toggle").on("click", (() => {
                                    a.css("transform", `translateX(${d?"":"-"}${100*(u-1)}%)`), e(i), f = setTimeout((() => {
                                        i.removeClass("is-current-slide"), s.removeClass("is-current-parent")
                                    }), 300), r.removeClass("active"), r.attr("aria-expanded", "false")
                                }))
                            }))
                        }))
                    }
                })
            },
            1284: function() {
                Flatsome.behavior("sidebar-tabs", {
                    attach(e) {
                        jQuery(".sidebar-menu-tabs", e).each(((e, t) => {
                            const n = jQuery(t),
                                o = n.find(".sidebar-menu-tabs__tab"),
                                i = n.parent().find("ul.nav-sidebar");
                            o.each(((e, t) => {
                                jQuery(t).on("click", (function(t) {
                                    ! function(e, t, n) {
                                        t.each(((t, n) => jQuery(n).toggleClass("active", t === e))), n.each(((t, n) => jQuery(n).toggleClass("hidden", t === e)))
                                    }(e, o, i), t.preventDefault(), t.stopPropagation()
                                }))
                            }))
                        }))
                    }
                })
            },
            2394: function() {
                Flatsome.behavior("scroll-to", {
                    attach() {
                        const e = jQuery("span.scroll-to"),
                            t = parseInt(flatsomeVars.sticky_height, 10),
                            n = jQuery("#wpadminbar");
                        if (!e.length) return;
                        let o = jQuery(".scroll-to-bullets");
                        o.length ? (o.children().lazyTooltipster("destroy"), o.empty()) : (o = jQuery('<div class="scroll-to-bullets hide-for-medium"/>'), jQuery("body").append(o)), jQuery("li.scroll-to-link").remove(), e.each((function(e, t) {
                            const i = jQuery(t),
                                a = i.data("link"),
                                r = i.data("title"),
                                s = `a[href*="${a||"<nolink>"}"]`;
                            if (i.data("bullet")) {
                                const e = jQuery(`\n          <a href="${a}" data-title="${r}" title="${r}">\n          <strong></strong>\n          </a>\n        `);
                                e.lazyTooltipster({
                                    position: "left",
                                    delay: 50,
                                    contentAsHTML: !0,
                                    touchDevices: !1
                                }), o.append(e)
                            }
                            const l = jQuery(`\n          <li class="scroll-to-link"><a data-animate="fadeIn" href="${a}" data-title="${r}" title="${r}">\n          ${r}\n          </a></li>\n        `);
                            jQuery("li.nav-single-page").before(l), setTimeout((function() {
                                jQuery(".scroll-to-link a").attr("data-animated", "true")
                            }), 300), jQuery(s).off("click").on("click", (function(e) {
                                const t = jQuery(this).attr("href").split("#")[1];
                                if (!t) return;
                                let o = i.attr("data-offset");
                                o && n.length && n.is(":visible") && (o = Number(o) + Number(n.height())), setTimeout((() => {
                                    jQuery.scrollTo(`a[name="${t}"]`, { ...!isNaN(o) && {
                                            offset: -o
                                        }
                                    })
                                }), 0), jQuery.fn.magnificPopup && jQuery.magnificPopup.close(), e.preventDefault()
                            }))
                        }));
                        let i = 0;
                        const a = () => {
                            clearTimeout(i), i = setTimeout((() => {
                                const n = e.get().map((e => e.getBoundingClientRect().y));
                                o.find("a").each(((e, o) => {
                                    const i = n[e],
                                        a = n[e + 1] || window.innerHeight,
                                        r = i <= t + 100 && a > t + 100;
                                    jQuery(o).toggleClass("active", r)
                                }))
                            }), 100)
                        };
                        if (window.addEventListener("scroll", a, {
                                passive: !0
                            }), window.addEventListener("resize", a), a(), location.hash) {
                            const e = decodeURIComponent(location.hash.replace("#", ""));
                            let t = jQuery(`a[name="${e}"]`).closest(".scroll-to").attr("data-offset");
                            t && n.length && n.is(":visible") && (t = Number(t) + Number(n.height())), jQuery.scrollTo(`a[name="${e}"]`, { ...!isNaN(t) && {
                                    offset: -t
                                }
                            })
                        }
                    },
                    detach() {
                        jQuery("span.scroll-to").length && setTimeout(this.attach, 0)
                    }
                })
            },
            5855: function() {
                function e(e, t, n) {
                    t.each(((t, n) => {
                        jQuery(n).toggleClass("active", t === e), jQuery(n).find("> a").attr("aria-selected", t === e ? "true" : "false").attr("tabindex", t === e ? null : "-1")
                    })), n.each(((t, n) => jQuery(n).toggleClass("active", t === e))), jQuery.fn.packery && jQuery("[data-packery-options]", n[e]).packery("layout")
                }
                Flatsome.behavior("tabs", {
                    attach(t) {
                        const n = window.location.hash;
                        let o = !1;
                        jQuery(".tabbed-content", t).each((function(t, i) {
                            const a = jQuery(i),
                                r = a.find("> .nav > li"),
                                s = a.find("> .tab-panels > .panel"),
                                l = a.find("> .nav").hasClass("active-on-hover"),
                                c = a.find("> .nav").hasClass("nav-vertical");
                            s.removeAttr("style"), r.each((function(t, i) {
                                const u = jQuery(i).find("a");
                                u.on("click", (function(n) {
                                    e(t, r, s), n.preventDefault(), n.stopPropagation()
                                })), u.on("keydown", (e => {
                                    let n;
                                    switch (e.key) {
                                        case c ? "ArrowDown":
                                            "ArrowRight" : n = r.eq((t + 1) % r.length);
                                            break;
                                        case c ? "ArrowUp":
                                            "ArrowLeft" : n = r.eq((t - 1) % r.length);
                                            break;
                                        case "Home":
                                            n = r.first();
                                            break;
                                        case "End":
                                            n = r.last()
                                    }
                                    n && (n.find("> a").trigger("focus"), e.stopPropagation(), e.preventDefault())
                                })), l && u.hoverIntent({
                                    sensitivity: 3,
                                    interval: 20,
                                    timeout: 70,
                                    over(n) {
                                        e(t, r, s)
                                    },
                                    out() {}
                                }), !n.substring(1).length || decodeURIComponent(n.substring(1)) !== u.attr("href") ? .split("#")[1] && n.substring(1) !== u.attr("href") ? .split("#")[1] || (e(t, r, s), o || (o = !0, setTimeout((() => {
                                    jQuery.scrollTo(a)
                                }), 500)))
                            }))
                        }))
                    }
                })
            },
            1092: function() {
                Flatsome.behavior("toggle", {
                    attach(e) {
                        function t(e) {
                            const t = jQuery(e.currentTarget).parent();
                            t.toggleClass("active"), t.attr("aria-expanded", "false" === t.attr("aria-expanded") ? "true" : "false"), e.preventDefault()
                        }
                        jQuery([".widget ul.children", ".nav ul.children", ".menu .sub-menu", ".mobile-sidebar-levels-2 .nav ul.children > li > ul"].join(", "), e).each((function() {
                            const e = jQuery(this).parents(".nav-slide").length ? "right" : "down";
                            jQuery(this).parent().addClass("has-child").attr("aria-expanded", "false"), jQuery(this).before(`<button class="toggle" aria-label="${window.flatsomeVars.i18n.toggleButton}"><i class="icon-angle-${e}"></i></button>`)
                        })), jQuery(".current-cat-parent", e).addClass("active").attr("aria-expanded", "true").removeClass("current-cat-parent"), jQuery(".toggle", e).on("click", t);
                        const n = jQuery("body").hasClass("mobile-submenu-toggle");
                        jQuery(".sidebar-menu li.menu-item.has-child", e).each((function() {
                            let e = jQuery(this),
                                o = e.find("> a:first");
                            "#" === o.attr("href") ? o.on("click", (function(t) {
                                t.preventDefault(), e.toggleClass("active"), e.attr("aria-expanded", "false" === e.attr("aria-expanded") ? "true" : "false")
                            })) : n && o.next(".toggle").length && o.on("click", t)
                        }))
                    }
                })
            },
            5560: function() {
                Flatsome.behavior("tooltips", {
                    attach(e) {
                        jQuery(".tooltip, .has-tooltip, .tip-top, li.chosen a", e).lazyTooltipster(), jQuery(".tooltip-as-html", e).lazyTooltipster({
                            interactive: !0,
                            contentAsHTML: !0
                        })
                    }
                })
            },
            9075: function() {
                Flatsome.behavior("youtube", {
                    attach(e) {
                        var t, n, o, i, a, r = jQuery(".ux-youtube", e);
                        0 !== r.length && (window.onYouTubePlayerAPIReady = function() {
                            r.each((function() {
                                var e = jQuery(this),
                                    t = e.attr("id"),
                                    n = e.data("videoid"),
                                    o = e.data("loop"),
                                    i = e.data("audio");
                                new YT.Player(t, {
                                    height: "100%",
                                    width: "100%",
                                    playerVars: {
                                        html5: 1,
                                        autoplay: 1,
                                        controls: 0,
                                        rel: 0,
                                        modestbranding: 1,
                                        playsinline: 1,
                                        showinfo: 0,
                                        fs: 0,
                                        loop: o,
                                        el: 0,
                                        playlist: o ? n : void 0
                                    },
                                    videoId: n,
                                    events: {
                                        onReady: function(e) {
                                            0 === i && e.target.mute()
                                        }
                                    }
                                })
                            }))
                        }, n = "script", o = "youtube-jssdk", a = (t = document).getElementsByTagName(n)[0], t.getElementById(o) || ((i = t.createElement(n)).id = o, i.src = "https://www.youtube.com/player_api", a.parentNode.insertBefore(i, a)))
                    }
                })
            },
            9343: function(e, t, n) {
                n.g.Flatsome = {
                    behaviors: {},
                    plugin(e, t, n) {
                        n = n || {}, jQuery.fn[e] = function(o) {
                            if ("string" == typeof arguments[0]) {
                                var i = null,
                                    a = arguments[0],
                                    r = Array.prototype.slice.call(arguments, 1);
                                return this.each((function() {
                                    if (!jQuery.data(this, "plugin_" + e) || "function" != typeof jQuery.data(this, "plugin_" + e)[a]) throw new Error("Method " + a + " does not exist on jQuery." + e);
                                    i = jQuery.data(this, "plugin_" + e)[a].apply(this, r)
                                })), "destroy" === a && this.each((function() {
                                    jQuery(this).removeData("plugin_" + e)
                                })), void 0 !== i ? i : this
                            }
                            if ("object" == typeof o || !o) return this.each((function() {
                                jQuery.data(this, "plugin_" + e) || (o = jQuery.extend({}, n, o), jQuery.data(this, "plugin_" + e, new t(this, o)))
                            }))
                        }
                    },
                    behavior(e, t) {
                        this.behaviors[e] = t
                    },
                    attach(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
                        if ("string" == typeof e) return this.behaviors.hasOwnProperty(e) && "function" == typeof this.behaviors[e].attach ? this.behaviors[e].attach(t || document) : null;
                        for (let e in this.behaviors) "function" == typeof this.behaviors[e].attach && this.behaviors[e].attach(t || document)
                    },
                    detach(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
                        if ("string" == typeof e) return this.behaviors.hasOwnProperty(e) && "function" == typeof this.behaviors[e].detach ? this.behaviors[e].detach(t || document) : null;
                        for (let e in this.behaviors) "function" == typeof this.behaviors[e].detach && this.behaviors[e].detach(t || document)
                    }
                }
            },
            5299: function() {
                jQuery(".section .loading-spin, .banner .loading-spin, .page-loader").fadeOut(), jQuery("#top-link").on("click", (function(e) {
                    jQuery.scrollTo(0), e.preventDefault()
                })), jQuery(".scroll-for-more").on("click", (function() {
                    jQuery.scrollTo(jQuery(this))
                })), jQuery(".search-dropdown button").on("click", (function(e) {
                    jQuery(this).parent().find("input").trigger("focus"), e.preventDefault()
                })), jQuery(".current-cat").addClass("active"), jQuery("html").removeClass("loading-site"), setTimeout((function() {
                    jQuery(".page-loader").remove()
                }), 1e3), jQuery(".resize-select").resizeselect(), flatsomeVars.user.can_edit_pages && jQuery(".block-edit-link").each((function() {
                    const e = jQuery(this);
                    let t = e.data("link");
                    const n = e.data("backend"),
                        o = e.data("title"),
                        i = e.parents('[id^="menu-item-"]');
                    if (i.length && i.hasClass("menu-item-has-block")) {
                        const e = i.attr("id").match(/menu-item-(\d+)/);
                        e && e[1] && (t += `&menu_id=${e[1]}`)
                    }
                    jQuery(this).next().addClass("has-block").lazyTooltipster({
                        distance: -15,
                        repositionOnScroll: !0,
                        interactive: !0,
                        contentAsHTML: !0,
                        content: o + '<br/><a class="button edit-block-button edit-block-button-builder" href="' + t + '">UX Builder</a><a class="button edit-block-button edit-block-button edit-block-button-backend" href="' + n + '">WP Editor</a>'
                    }), jQuery(this).remove()
                })), document.addEventListener("uxb_app_ready", (() => {
                    const e = new URLSearchParams(window.top.location.search),
                        t = parseInt(e.get("menu_id"));
                    t && setTimeout((() => {
                        const e = jQuery(`#menu-item-${t}`),
                            n = e.parent().hasClass("ux-nav-vertical-menu");
                        e.hasClass("menu-item-has-block has-dropdown") && !e.hasClass("current-dropdown") && (n && jQuery(".header-vertical-menu__fly-out").addClass("header-vertical-menu__fly-out--open"), jQuery(`#menu-item-${t} a:first`).trigger("click"))
                    }), 1e3)
                })), jQuery("#hotspot").on("click", (function(e) {
                    e.preventDefault()
                })), jQuery(".wpcf7-form .wpcf7-submit").on("click", (function(e) {
                    jQuery(this).parent().parent().addClass("processing")
                })), jQuery(".wpcf7").on("wpcf7invalid wpcf7spam wpcf7mailsent wpcf7mailfailed", (function(e) {
                    jQuery(".processing").removeClass("processing")
                })), jQuery(document).ajaxComplete((function(e, t, n) {
                    jQuery(".processing").removeClass("processing")
                }))
            },
            5402: function(e, t, n) {
                jQuery.fn.lazyTooltipster = function(e) {
                    return this.each(((t, o) => {
                        const i = jQuery(o);
                        "string" == typeof e ? jQuery.fn.tooltipster && i.hasClass("tooltipstered") && i.tooltipster(e) : i.one("mouseenter", (t => {
                            ! function(e, t) {
                                (jQuery.fn.tooltipster ? Promise.resolve() : n.e(255).then(n.t.bind(n, 8382, 23))).then((() => {
                                    e.hasClass("tooltipstered") || e.tooltipster({
                                        theme: "tooltipster-default",
                                        delay: 10,
                                        animationDuration: 300,
                                        ...t
                                    }), e.tooltipster("show")
                                }))
                            }(i, e)
                        }))
                    }))
                }
            },
            8417: function() {
                Flatsome.plugin("resizeselect", (function(e, t) {
                    jQuery(e).on("change", (function() {
                        var e = jQuery(this),
                            t = e.find("option:selected").val(),
                            n = e.find("option:selected").text(),
                            o = jQuery('<span class="select-resize-ghost">').html(n);
                        o.appendTo(e.parent());
                        var i = o.width();
                        o.remove(), e.width(i + 7), t && e.parent().parent().find("input.search-field").focus()
                    })).trigger("change")
                }))
            },
            4944: function(e, t, n) {
                var o, i;
                "undefined" != typeof window && window, void 0 === (i = "function" == typeof(o = function() {
                    "use strict";

                    function e() {}
                    var t = e.prototype;
                    return t.on = function(e, t) {
                        if (e && t) {
                            var n = this._events = this._events || {},
                                o = n[e] = n[e] || [];
                            return -1 == o.indexOf(t) && o.push(t), this
                        }
                    }, t.once = function(e, t) {
                        if (e && t) {
                            this.on(e, t);
                            var n = this._onceEvents = this._onceEvents || {};
                            return (n[e] = n[e] || {})[t] = !0, this
                        }
                    }, t.off = function(e, t) {
                        var n = this._events && this._events[e];
                        if (n && n.length) {
                            var o = n.indexOf(t);
                            return -1 != o && n.splice(o, 1), this
                        }
                    }, t.emitEvent = function(e, t) {
                        var n = this._events && this._events[e];
                        if (n && n.length) {
                            n = n.slice(0), t = t || [];
                            for (var o = this._onceEvents && this._onceEvents[e], i = 0; i < n.length; i++) {
                                var a = n[i];
                                o && o[a] && (this.off(e, a), delete o[a]), a.apply(this, t)
                            }
                            return this
                        }
                    }, t.allOff = function() {
                        delete this._events, delete this._onceEvents
                    }, e
                }) ? o.call(t, n, t, e) : o) || (e.exports = i)
            },
            7243: function() {
                ! function() {
                    var e = window.MutationObserver || window.WebKitMutationObserver,
                        t = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch;
                    if (void 0 === document.documentElement.style["touch-action"] && !document.documentElement.style["-ms-touch-action"] && t && e) {
                        window.Hammer = window.Hammer || {};
                        var n = /touch-action[:][\s]*(none)[^;'"]*/,
                            o = /touch-action[:][\s]*(manipulation)[^;'"]*/,
                            i = /touch-action/,
                            a = /(iP(ad|hone|od))/.test(navigator.userAgent) && ("indexedDB" in window || !!window.performance);
                        window.Hammer.time = {
                            getTouchAction: function(e) {
                                return this.checkStyleString(e.getAttribute("style"))
                            },
                            checkStyleString: function(e) {
                                if (i.test(e)) return n.test(e) ? "none" : !o.test(e) || "manipulation"
                            },
                            shouldHammer: function(e) {
                                var t = e.target.hasParent;
                                return !(!t || a && !(Date.now() - e.target.lastStart < 125)) && t
                            },
                            touchHandler: function(e) {
                                var t = this.shouldHammer(e);
                                if ("none" === t) this.dropHammer(e);
                                else if ("manipulation" === t) {
                                    var n = e.target.getBoundingClientRect();
                                    n.top === this.pos.top && n.left === this.pos.left && this.dropHammer(e)
                                }
                                this.scrolled = !1, delete e.target.lastStart, delete e.target.hasParent
                            },
                            dropHammer: function(e) {
                                "touchend" === e.type && (e.target.focus(), setTimeout((function() {
                                    e.target.click()
                                }), 0)), e.preventDefault()
                            },
                            touchStart: function(e) {
                                this.pos = e.target.getBoundingClientRect(), e.target.hasParent = this.hasParent(e.target), a && e.target.hasParent && (e.target.lastStart = Date.now())
                            },
                            styleWatcher: function(e) {
                                e.forEach(this.styleUpdater, this)
                            },
                            styleUpdater: function(e) {
                                if (e.target.updateNext) e.target.updateNext = !1;
                                else {
                                    var t = this.getTouchAction(e.target);
                                    t ? "none" !== t && (e.target.hadTouchNone = !1) : !t && (e.oldValue && this.checkStyleString(e.oldValue) || e.target.hadTouchNone) && (e.target.hadTouchNone = !0, e.target.updateNext = !1, e.target.setAttribute("style", e.target.getAttribute("style") + " touch-action: none;"))
                                }
                            },
                            hasParent: function(e) {
                                for (var t, n = e; n && n.parentNode; n = n.parentNode)
                                    if (t = this.getTouchAction(n)) return t;
                                return !1
                            },
                            installStartEvents: function() {
                                document.addEventListener("touchstart", this.touchStart.bind(this)), document.addEventListener("mousedown", this.touchStart.bind(this))
                            },
                            installEndEvents: function() {
                                document.addEventListener("touchend", this.touchHandler.bind(this), !0), document.addEventListener("mouseup", this.touchHandler.bind(this), !0)
                            },
                            installObserver: function() {
                                this.observer = new e(this.styleWatcher.bind(this)).observe(document, {
                                    subtree: !0,
                                    attributes: !0,
                                    attributeOldValue: !0,
                                    attributeFilter: ["style"]
                                })
                            },
                            install: function() {
                                this.installEndEvents(), this.installStartEvents(), this.installObserver()
                            }
                        }, window.Hammer.time.install()
                    }
                }()
            },
            7681: function(e, t, n) {
                var o, i;
                ! function(a, r) {
                    "use strict";
                    o = [n(4944)], i = function(e) {
                        return function(e, t) {
                            var n = e.jQuery,
                                o = e.console;

                            function i(e, t) {
                                for (var n in t) e[n] = t[n];
                                return e
                            }
                            var a = Array.prototype.slice;

                            function r(e, t, s) {
                                if (!(this instanceof r)) return new r(e, t, s);
                                var l, c = e;
                                "string" == typeof e && (c = document.querySelectorAll(e)), c ? (this.elements = (l = c, Array.isArray(l) ? l : "object" == typeof l && "number" == typeof l.length ? a.call(l) : [l]), this.options = i({}, this.options), "function" == typeof t ? s = t : i(this.options, t), s && this.on("always", s), this.getImages(), n && (this.jqDeferred = new n.Deferred), setTimeout(this.check.bind(this))) : o.error("Bad element for imagesLoaded " + (c || e))
                            }
                            r.prototype = Object.create(t.prototype), r.prototype.options = {}, r.prototype.getImages = function() {
                                this.images = [], this.elements.forEach(this.addElementImages, this)
                            }, r.prototype.addElementImages = function(e) {
                                "IMG" == e.nodeName && this.addImage(e), !0 === this.options.background && this.addElementBackgroundImages(e);
                                var t = e.nodeType;
                                if (t && s[t]) {
                                    for (var n = e.querySelectorAll("img"), o = 0; o < n.length; o++) {
                                        var i = n[o];
                                        this.addImage(i)
                                    }
                                    if ("string" == typeof this.options.background) {
                                        var a = e.querySelectorAll(this.options.background);
                                        for (o = 0; o < a.length; o++) {
                                            var r = a[o];
                                            this.addElementBackgroundImages(r)
                                        }
                                    }
                                }
                            };
                            var s = {
                                1: !0,
                                9: !0,
                                11: !0
                            };

                            function l(e) {
                                this.img = e
                            }

                            function c(e, t) {
                                this.url = e, this.element = t, this.img = new Image
                            }
                            return r.prototype.addElementBackgroundImages = function(e) {
                                var t = getComputedStyle(e);
                                if (t)
                                    for (var n = /url\((['"])?(.*?)\1\)/gi, o = n.exec(t.backgroundImage); null !== o;) {
                                        var i = o && o[2];
                                        i && this.addBackground(i, e), o = n.exec(t.backgroundImage)
                                    }
                            }, r.prototype.addImage = function(e) {
                                var t = new l(e);
                                this.images.push(t)
                            }, r.prototype.addBackground = function(e, t) {
                                var n = new c(e, t);
                                this.images.push(n)
                            }, r.prototype.check = function() {
                                var e = this;

                                function t(t, n, o) {
                                    setTimeout((function() {
                                        e.progress(t, n, o)
                                    }))
                                }
                                this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach((function(e) {
                                    e.once("progress", t), e.check()
                                })) : this.complete()
                            }, r.prototype.progress = function(e, t, n) {
                                this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && o && o.log("progress: " + n, e, t)
                            }, r.prototype.complete = function() {
                                var e = this.hasAnyBroken ? "fail" : "done";
                                if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                                    var t = this.hasAnyBroken ? "reject" : "resolve";
                                    this.jqDeferred[t](this)
                                }
                            }, l.prototype = Object.create(t.prototype), l.prototype.check = function() {
                                this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src)
                            }, l.prototype.getIsImageComplete = function() {
                                return this.img.complete && this.img.naturalWidth
                            }, l.prototype.confirm = function(e, t) {
                                this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
                            }, l.prototype.handleEvent = function(e) {
                                var t = "on" + e.type;
                                this[t] && this[t](e)
                            }, l.prototype.onload = function() {
                                this.confirm(!0, "onload"), this.unbindEvents()
                            }, l.prototype.onerror = function() {
                                this.confirm(!1, "onerror"), this.unbindEvents()
                            }, l.prototype.unbindEvents = function() {
                                this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
                            }, c.prototype = Object.create(l.prototype), c.prototype.check = function() {
                                this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
                            }, c.prototype.unbindEvents = function() {
                                this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
                            }, c.prototype.confirm = function(e, t) {
                                this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
                            }, r.makeJQueryPlugin = function(t) {
                                (t = t || e.jQuery) && ((n = t).fn.imagesLoaded = function(e, t) {
                                    return new r(this, e, t).jqDeferred.promise(n(this))
                                })
                            }, r.makeJQueryPlugin(), r
                        }(a, e)
                    }.apply(t, o), void 0 === i || (e.exports = i)
                }("undefined" != typeof window ? window : this)
            },
            5114: function(e, t, n) {
                var o, i, a;
                ! function(r) {
                    "use strict";
                    i = [n(9567)], void 0 === (a = "function" == typeof(o = function(e) {
                        var t = e.scrollTo = function(t, n, o) {
                            return e(window).scrollTo(t, n, o)
                        };

                        function n(t) {
                            return !t.nodeName || -1 !== e.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"])
                        }

                        function o(e) {
                            return "function" == typeof e
                        }

                        function i(t) {
                            return o(t) || e.isPlainObject(t) ? t : {
                                top: t,
                                left: t
                            }
                        }
                        return t.defaults = {
                            axis: "xy",
                            duration: 0,
                            limit: !0
                        }, e.fn.scrollTo = function(a, r, s) {
                            "object" == typeof r && (s = r, r = 0), "function" == typeof s && (s = {
                                onAfter: s
                            }), "max" === a && (a = 9e9), s = e.extend({}, t.defaults, s), r = r || s.duration;
                            var l = s.queue && s.axis.length > 1;
                            return l && (r /= 2), s.offset = i(s.offset), s.over = i(s.over), this.each((function() {
                                if (null !== a) {
                                    var c, u = n(this),
                                        d = u ? this.contentWindow || window : this,
                                        h = e(d),
                                        f = a,
                                        p = {};
                                    switch (typeof f) {
                                        case "number":
                                        case "string":
                                            if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(f)) {
                                                f = i(f);
                                                break
                                            }
                                            f = u ? e(f) : e(f, d);
                                        case "object":
                                            if (0 === f.length) return;
                                            (f.is || f.style) && (c = (f = e(f)).offset())
                                    }
                                    var y = o(s.offset) && s.offset(d, f) || s.offset;
                                    e.each(s.axis.split(""), (function(e, n) {
                                        var o = "x" === n ? "Left" : "Top",
                                            i = o.toLowerCase(),
                                            a = "scroll" + o,
                                            r = h[a](),
                                            g = t.max(d, n);
                                        if (c) p[a] = c[i] + (u ? 0 : r - h.offset()[i]), s.margin && (p[a] -= parseInt(f.css("margin" + o), 10) || 0, p[a] -= parseInt(f.css("border" + o + "Width"), 10) || 0), p[a] += y[i] || 0, s.over[i] && (p[a] += f["x" === n ? "width" : "height"]() * s.over[i]);
                                        else {
                                            var v = f[i];
                                            p[a] = v.slice && "%" === v.slice(-1) ? parseFloat(v) / 100 * g : v
                                        }
                                        s.limit && /^\d+$/.test(p[a]) && (p[a] = p[a] <= 0 ? 0 : Math.min(p[a], g)), !e && s.axis.length > 1 && (r === p[a] ? p = {} : l && (m(s.onAfterFirst), p = {}))
                                    })), m(s.onAfter)
                                }

                                function m(t) {
                                    var n = e.extend({}, s, {
                                        queue: !0,
                                        duration: r,
                                        complete: t && function() {
                                            t.call(d, f, s)
                                        }
                                    });
                                    h.animate(p, n)
                                }
                            }))
                        }, t.max = function(t, o) {
                            var i = "x" === o ? "Width" : "Height",
                                a = "scroll" + i;
                            if (!n(t)) return t[a] - e(t)[i.toLowerCase()]();
                            var r = "client" + i,
                                s = t.ownerDocument || t.document,
                                l = s.documentElement,
                                c = s.body;
                            return Math.max(l[a], c[a]) - Math.min(l[r], c[r])
                        }, e.Tween.propHooks.scrollLeft = e.Tween.propHooks.scrollTop = {
                            get: function(t) {
                                return e(t.elem)[t.prop]()
                            },
                            set: function(t) {
                                var n = this.get(t);
                                if (t.options.interrupt && t._last && t._last !== n) return e(t.elem).stop();
                                var o = Math.round(t.now);
                                n !== o && (e(t.elem)[t.prop](o), t._last = this.get(t))
                            }
                        }, t
                    }) ? o.apply(t, i) : o) || (e.exports = a)
                }()
            },
            9567: function(e) {
                "use strict";
                e.exports = window.jQuery
            }
        },
        a = {};

    function r(e) {
        var t = a[e];
        if (void 0 !== t) return t.exports;
        var n = a[e] = {
            exports: {}
        };
        return i[e].call(n.exports, n, n.exports, r), n.exports
    }
    r.m = i, t = Object.getPrototypeOf ? function(e) {
            return Object.getPrototypeOf(e)
        } : function(e) {
            return e.__proto__
        }, r.t = function(n, o) {
            if (1 & o && (n = this(n)), 8 & o) return n;
            if ("object" == typeof n && n) {
                if (4 & o && n.__esModule) return n;
                if (16 & o && "function" == typeof n.then) return n
            }
            var i = Object.create(null);
            r.r(i);
            var a = {};
            e = e || [null, t({}), t([]), t(t)];
            for (var s = 2 & o && n;
                "object" == typeof s && !~e.indexOf(s); s = t(s)) Object.getOwnPropertyNames(s).forEach((function(e) {
                a[e] = function() {
                    return n[e]
                }
            }));
            return a.default = function() {
                return n
            }, r.d(i, a), i
        }, r.d = function(e, t) {
            for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }, r.f = {}, r.e = function(e) {
            return Promise.all(Object.keys(r.f).reduce((function(t, n) {
                return r.f[n](e, t), t
            }), []))
        }, r.u = function(e) {
            return "js/chunk." + {
                255: "tooltips",
                288: "lottie",
                309: "slider",
                408: "countup",
                964: "popups"
            }[e] + ".js"
        }, r.miniCssF = function(e) {}, r.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n = {}, o = "flatsome:", r.l = function(e, t, i, a) {
            if (n[e]) n[e].push(t);
            else {
                var s, l;
                if (void 0 !== i)
                    for (var c = document.getElementsByTagName("script"), u = 0; u < c.length; u++) {
                        var d = c[u];
                        if (d.getAttribute("src") == e || d.getAttribute("data-webpack") == o + i) {
                            s = d;
                            break
                        }
                    }
                s || (l = !0, (s = document.createElement("script")).charset = "utf-8", s.timeout = 120, r.nc && s.setAttribute("nonce", r.nc), s.setAttribute("data-webpack", o + i), s.src = e), n[e] = [t];
                var h = function(t, o) {
                        s.onerror = s.onload = null, clearTimeout(f);
                        var i = n[e];
                        if (delete n[e], s.parentNode && s.parentNode.removeChild(s), i && i.forEach((function(e) {
                                return e(o)
                            })), t) return t(o)
                    },
                    f = setTimeout(h.bind(null, void 0, {
                        type: "timeout",
                        target: s
                    }), 12e4);
                s.onerror = h.bind(null, s.onerror), s.onload = h.bind(null, s.onload), l && document.head.appendChild(s)
            }
        }, r.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        function() {
            const e = r.u;
            r.u = t => {
                const n = e(t),
                    o = globalThis.flatsomeVars ? .theme.version;
                return n + (o ? "?ver=" + o : "")
            }
        }(), r.p = globalThis.flatsomeVars ? .assets_url ? ? "/",
        function() {
            var e = {
                259: 0
            };
            r.f.j = function(t, n) {
                var o = r.o(e, t) ? e[t] : void 0;
                if (0 !== o)
                    if (o) n.push(o[2]);
                    else {
                        var i = new Promise((function(n, i) {
                            o = e[t] = [n, i]
                        }));
                        n.push(o[2] = i);
                        var a = r.p + r.u(t),
                            s = new Error;
                        r.l(a, (function(n) {
                            if (r.o(e, t) && (0 !== (o = e[t]) && (e[t] = void 0), o)) {
                                var i = n && ("load" === n.type ? "missing" : n.type),
                                    a = n && n.target && n.target.src;
                                s.message = "Loading chunk " + t + " failed.\n(" + i + ": " + a + ")", s.name = "ChunkLoadError", s.type = i, s.request = a, o[1](s)
                            }
                        }), "chunk-" + t, t)
                    }
            };
            var t = function(t, n) {
                    var o, i, a = n[0],
                        s = n[1],
                        l = n[2],
                        c = 0;
                    if (a.some((function(t) {
                            return 0 !== e[t]
                        }))) {
                        for (o in s) r.o(s, o) && (r.m[o] = s[o]);
                        l && l(r)
                    }
                    for (t && t(n); c < a.length; c++) i = a[c], r.o(e, i) && e[i] && e[i][0](), e[i] = 0
                },
                n = self.flatsomeChunks = self.flatsomeChunks || [];
            n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
        }(),
        function() {
            "use strict";
            r(7681), r(7243), r(5114), r(9343);
            const e = document.body,
                t = "body-scroll-lock--active",
                n = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
            let o = 0;

            function i() {
                if (!n) return;
                o = window.pageYOffset;
                const i = document.getElementById("wpadminbar"),
                    a = o - (i ? i.offsetHeight : 0);
                e.style.overflow = "hidden", e.style.position = "fixed", e.style.top = `-${a}px`, e.style.width = "100%", e.classList.add(t)
            }

            function a() {
                n && (e.style.removeProperty("overflow"), e.style.removeProperty("position"), e.style.removeProperty("top"), e.style.removeProperty("width"), window.scrollTo(0, o), e.classList.remove(t))
            }

            function s(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = 0;
                const o = t => {
                    const o = window.scrollY;
                    e(t, {
                        direction: o > n ? "down" : "up",
                        scrollY: o
                    }), n = o
                };
                return window.addEventListener("scroll", o, { ...t,
                    passive: !0
                }), () => {
                    window.removeEventListener("scroll", o)
                }
            }
            let l, c, u, d = jQuery("#header"),
                h = d.find(".header-wrapper"),
                f = jQuery(".header-top", d),
                p = jQuery(".header-main", d),
                y = d.hasClass("has-sticky"),
                m = d.hasClass("sticky-hide-on-scroll");

            function g(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "down",
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                void 0 === c && void 0 === u && (d.hasClass("sticky-shrink") ? (c = f.hasClass("hide-for-sticky") ? f.height() : 0, c += p.hasClass("hide-for-sticky") ? p.height() : 0, u = 1 + c) : (c = h.height() + 100, u = f.hasClass("hide-for-sticky") ? f.height() + 1 : 1)), m ? "down" === t || e < u ? e < u ? b() : (l = setTimeout(b, 100), d.addClass("sticky-hide-on-scroll--active")) : e > c && (l = setTimeout((() => v(n)), 100), d.removeClass("sticky-hide-on-scroll--active")) : e > c ? v(n) : e < u && b()
            }

            function v() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (h.hasClass("stuck")) return;
                const t = d.height();
                jQuery(document).trigger("flatsome-header-sticky"), h.addClass("stuck"), h.toggleClass("ux-no-animation", e), d.height(t), jQuery(".has-transparent").removeClass("transparent"), jQuery(".toggle-nav-dark").removeClass("nav-dark")
            }

            function b() {
                h.hasClass("stuck") && (d.height(""), h.removeClass(["stuck", "ux-no-animation"]), jQuery(".has-transparent").addClass("transparent"), jQuery(".toggle-nav-dark").addClass("nav-dark"))
            }
            y && (document.addEventListener("DOMContentLoaded", (() => {
                s(((n, o) => {
                    let {
                        scrollY: i,
                        direction: a
                    } = o;
                    l && (clearTimeout(l), l = void 0), e.classList.contains(t) || g(i, a)
                })), l = setTimeout((() => {
                    window.scrollY && g(window.scrollY)
                }), 100)
            })), jQuery("body").on("experimental-flatsome-pjax-request-done", (() => {
                d = jQuery("#header"), h = d.find(".header-wrapper"), f = jQuery(".header-top", d), p = jQuery(".header-main", d), y = d.hasClass("has-sticky"), m = d.hasClass("sticky-hide-on-scroll"), window.scrollY && g(window.scrollY, void 0, !0)
            })));
            const j = window.matchMedia("(prefers-reduced-motion: reduce)");
            let w = !1;

            function k() {
                w = "undefined" == typeof UxBuilder && j.matches
            }
            k(), j.addEventListener ? .("change", k);
            const Q = [];
            let x;

            function C() {
                Q.length && (cancelAnimationFrame(x), x = requestAnimationFrame((() => {
                    for (let e = 0; e < Q.length; e++) Q[e].element.offsetParent ? E(Q[e]) : Q.splice(e, 1)
                })))
            }

            function E(e) {
                ! function(e) {
                    let {
                        element: t,
                        type: n
                    } = e, o = I(t.dataset.parallax), i = P(t), a = (window.innerHeight - i.offsetHeight) * o;
                    switch (n) {
                        case "backgroundImage":
                            t.style.backgroundSize = o ? "100% auto" : null;
                            break;
                        case "backgroundElement":
                            t.style.height = o ? `${i.offsetHeight+a}px` : null
                    }
                }(e),
                function(e) {
                    let {
                        element: t,
                        type: n
                    } = e, o = I(t.dataset.parallax || t.dataset.parallaxBackground), i = window.innerHeight, a = P(t), r = t.offsetHeight - a.offsetHeight, s = t.getBoundingClientRect(), l = a !== t ? a.getBoundingClientRect() : s, c = s.top + t.offsetHeight / 2, u = i / 2 - c, d = i / 2 - (l.top + a.offsetHeight / 2), h = c + T() < i / 2 ? T() : u, f = (Math.abs(u), Math.abs(h) / (i / 2)), p = 0;
                    var y;
                    if (!(l.top > i || l.top + a.offsetHeight < 0)) switch (n) {
                        case "backgroundImage":
                            p = l.top * o, t.style.backgroundPosition = o ? `50% ${p.toFixed(0)}px` : null, t.style.backgroundAttachment = o ? "fixed" : null;
                            break;
                        case "backgroundElement":
                            p = d * o - r / 2, t.style.transform = o ? `translate3d(0, ${p.toFixed(2)}px, 0)` : null, t.style.backfaceVisibility = o ? "hidden" : null;
                            break;
                        case "element":
                            p = h * o, t.style.transform = o ? `translate3d(0, ${p.toFixed(2)}px, 0)` : null, t.style.backfaceVisibility = o ? "hidden" : null, void 0 !== t.dataset.parallaxFade && (t.style.opacity = o ? (y = 1 - f, y * (2 - y)).toFixed(2) : null)
                    }
                }(e)
            }

            function L(e) {
                return void 0 !== e.dataset.parallaxBackground ? "backgroundElement" : void 0 !== e.dataset.parallaxElemenet ? "element" : "" !== e.style.backgroundImage ? "backgroundImage" : "element"
            }

            function T() {
                return document.documentElement.scrollTop || document.body.scrollTop
            }

            function P(e) {
                return function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    for (; e && !_(e).call(e, t);) e = e.parentElement;
                    return e
                }(e, e.dataset.parallaxContainer || "[data-parallax-container]") || e
            }

            function _(e) {
                return e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector
            }

            function I(e) {
                return e / 10 * -1 / (2 - Math.abs(e) / 10)
            }

            function F(e) {
                return new IntersectionObserver((function(t) {
                    for (let n = 0; n < t.length; n++) e(t[n])
                }), {
                    rootMargin: "0px",
                    threshold: .1,
                    ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                })
            }

            function O() {
                return console.warn("Flatsome: Flickity is lazy loaded. Use 'lazyFlickity()' to instantiate and 'flatsome-flickity-ready' event to interact with Flickity instead."), this
            }

            function A() {
                return jQuery.fn.magnificPopup ? Promise.resolve() : r.e(964).then(r.t.bind(r, 4343, 23))
            }
            window.addEventListener("scroll", C, {
                passive: !0
            }), window.addEventListener("resize", C), new MutationObserver(C).observe(document.body, {
                childList: !0
            }), window.jQuery && (window.jQuery.fn.flatsomeParallax = function(e) {
                w || "destroy" !== e && this.each(((e, t) => function(e) {
                    e.classList.add("parallax-active"), !document.querySelector("body").classList.contains("parallax-mobile") && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) || e.classList && e.dataset && (Q.push({
                        element: e,
                        type: L(e)
                    }), E(Q[Q.length - 1]))
                }(t)))
            }), r(8417), jQuery.fn.flickity || (O.isFlickityStub = !0, jQuery.fn.flickity = O), jQuery.fn.lazyFlickity = function(e) {
                const t = F((n => {
                    if (n.isIntersecting) {
                        if (t.unobserve(n.target), !jQuery.fn.flickity || jQuery.fn.flickity === O) return r.e(309).then(r.t.bind(r, 2066, 23)).then((() => {
                            jQuery(n.target).flickity(e), jQuery(n.target).trigger("flatsome-flickity-ready")
                        }));
                        jQuery(n.target).flickity(e), jQuery(n.target).trigger("flatsome-flickity-ready")
                    }
                }));
                return this.each(((n, o) => {
                    "string" == typeof e ? jQuery.fn.flickity && jQuery(o).flickity(e) : t.observe(o)
                }))
            }, jQuery.loadMagnificPopup = A, jQuery.fn.lazyMagnificPopup = function(e) {
                const t = jQuery(this),
                    n = e.delegate ? t.find(e.delegate) : t;
                return n.one("click", (o => {
                    o.preventDefault(), A().then((() => {
                        t.data("magnificPopup") || t.magnificPopup(e), t.magnificPopup("open", n.index(o.currentTarget) || 0)
                    }))
                })), t
            }, r(5402), r(5299);
            const B = F((e => {
                if (e.intersectionRatio > 0) {
                    B.unobserve(e.target);
                    const t = jQuery(e.target);
                    t.removeAttr("data-animate-transition"), t.removeAttr("data-animated"), window.requestAnimationFrame((() => {
                        t.attr("data-animate-transform", "true"), window.requestAnimationFrame((() => {
                            t.attr("data-animate-transition", "true"), setTimeout((() => {
                                t.attr("data-animated", "true")
                            }), 300)
                        }))
                    }))
                }
            }));
            Flatsome.behavior("animate", {
                attach(e) {
                    const t = "uxBuilder" === jQuery("html").attr("ng-app");
                    jQuery("[data-animate]", e).each(((e, n) => {
                        const o = jQuery(n),
                            i = o.data("animate");
                        if (t || 0 === i.length || w) return o.attr("data-animated", "true");
                        B.observe(n)
                    }))
                },
                detach(e) {
                    jQuery("[data-animate]", e).each(((e, t) => {
                        jQuery(t).attr("data-animated", "false"), B.unobserve(t)
                    }))
                }
            }), r(1478);
            const M = F((e => {
                if (e.intersectionRatio > 0) {
                    M.unobserve(e.target);
                    const t = jQuery(e.target);
                    r.e(408).then(r.bind(r, 5288)).then((e => {
                        let {
                            CountUp: n
                        } = e;
                        const o = parseInt(t.text());
                        new n(t.get(0), o, {
                            decimalPlaces: 0,
                            duration: 4
                        }).start(), t.addClass("active")
                    }))
                }
            }));

            function D(e) {
                e.addClass("current-dropdown"), e.find(".nav-top-link").attr("aria-expanded", !0),
                    function(e) {
                        const t = e,
                            n = t.closest(".container").width(),
                            o = t.closest("li.menu-item"),
                            i = o.hasClass("menu-item-design-full-width"),
                            a = o.hasClass("menu-item-design-container-width"),
                            s = o.parent().hasClass("ux-nav-vertical-menu"),
                            l = !i && !a,
                            c = r.g.flatsomeVars.rtl;
                        if (l && !s) {
                            if (n < 750) return !1;
                            var u = t.outerWidth(),
                                d = t.offset(),
                                h = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                                f = d.left - (h - n) / 2;
                            c && (f = jQuery(window).width() - (d.left + u) - (h - n) / 2);
                            var p = t.width(),
                                y = n - (f + p),
                                m = !1;
                            f > y && f < p && (m = (f + y) / 3), y < 0 && (m = -y), m && c ? t.css("margin-right", -m) : m && t.css("margin-left", -m), p > n && t.addClass("nav-dropdown-full")
                        }
                        if (a) {
                            t.css({
                                inset: "0"
                            });
                            const e = t.closest(".container").get(0).getBoundingClientRect(),
                                i = t.get(0).getBoundingClientRect();
                            t.css({
                                width: s ? n - o.width() : n,
                                ...!c && {
                                    left: e.left - i.left + 15
                                },
                                ...c && {
                                    right: 15 - (e.right - i.right)
                                }
                            })
                        }
                        if (i) {
                            t.css({
                                inset: "0"
                            });
                            const e = document.body,
                                n = e.getBoundingClientRect(),
                                i = t.get(0).getBoundingClientRect(),
                                a = e.clientWidth;
                            t.css({ ...!c && {
                                    width: s ? a - o.get(0).getBoundingClientRect().right : a
                                },
                                ...c && {
                                    width: s ? o.get(0).getBoundingClientRect().left : a
                                },
                                ...!c && {
                                    left: n.left - i.left
                                },
                                ...c && {
                                    right: -(n.right - i.right)
                                }
                            })
                        }
                        if ((a || i) && !s) {
                            let e = null;
                            if (o.closest("#top-bar").length && (e = document.querySelector("#top-bar")), o.closest("#masthead").length && (e = document.querySelector("#masthead")), o.closest("#wide-nav").length && (e = document.querySelector("#wide-nav")), null !== e) {
                                const n = e.getBoundingClientRect(),
                                    i = o.get(0).getBoundingClientRect();
                                t.css({
                                    top: n.bottom - i.bottom + i.height
                                })
                            }
                        }
                        s && /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && t.css({
                            minHeight: t.closest(".header-vertical-menu__fly-out").outerHeight()
                        })
                    }(e.find(".nav-dropdown"))
            }

            function S(e) {
                e.removeClass("current-dropdown"), e.find(".nav-top-link").attr("aria-expanded", !1), e.find(".nav-dropdown").attr("style", "")
            }

            function $(e) {
                e.each(((e, t) => {
                    const n = jQuery(t);
                    n.hasClass("current-dropdown") && S(n)
                }))
            }

            function H(e, t) {
                e.length && e.addClass(`ux-body-overlay--${t}-active`)
            }

            function z(e, t) {
                e.length && e.removeClass(`ux-body-overlay--${t}-active`)
            }
            Flatsome.behavior("count-up", {
                attach(e) {
                    jQuery("span.count-up", e).each(((e, t) => {
                        M.observe(t)
                    }))
                }
            }), Flatsome.behavior("dropdown", {
                attach(e) {
                    const t = jQuery(".nav li.has-dropdown", e),
                        n = "uxBuilder" === jQuery("html").attr("ng-app"),
                        o = jQuery(".ux-body-overlay"),
                        i = "ontouchstart" in window;
                    let a = !1,
                        r = null;
                    jQuery(".header-nav > li > a, .top-bar-nav > li > a", e).on("focus", (() => {
                        $(t)
                    })), t.each((function(e, s) {
                        const l = jQuery(s),
                            c = l.hasClass("nav-dropdown-toggle") && !i;
                        let u = !1,
                            d = !1;
                        l.on("touchstart click", (function(e) {
                            "touchstart" === e.type && (u = !0), "click" === e.type && u && (u && !d && e.preventDefault(), d = !0)
                        })), n || c ? (a = !0, l.on("click", "a:first", (function(e) {
                            if (e.preventDefault(), r = l, l.hasClass("current-dropdown")) return S(l), void z(o, "click");
                            $(t), D(l), H(o, "click"), jQuery(document).trigger("flatsome-dropdown-opened", [l])
                        }))) : (l.on("keydown", "a:first", (function(e) {
                            "Space" === e.code && (e.preventDefault(), l.hasClass("current-dropdown") ? (S(l), z(o, "click")) : ($(t), D(l), H(o, "click"), jQuery(document).trigger("flatsome-dropdown-opened", [l])))
                        })), l.hoverIntent({
                            sensitivity: 3,
                            interval: 20,
                            timeout: 70,
                            over(e) {
                                $(t), D(l), z(o, "click"), jQuery(document).trigger("flatsome-dropdown-opened", [l])
                            },
                            out() {
                                d = !1, u = !1, S(l)
                            }
                        }))
                    })), !n && a && jQuery(document).on("click", (function(e) {
                        null === r || r === e.target || r.has(e.target).length || (S(r), z(o, "click"))
                    })), jQuery(document).on("flatsome-dropdown-opened", (function(e, t) {
                        t.hasClass("menu-item-has-block") && jQuery.fn.packery && t.find("[data-packery-options]").packery("layout")
                    })), jQuery(document).on("flatsome-header-sticky", (function() {
                        $(t), z(o, "click")
                    }))
                }
            }), Flatsome.behavior("instagram", {
                attach(e) {
                    const t = F((e => {
                        if (e.intersectionRatio > 0) {
                            t.unobserve(e.target);
                            const n = jQuery(e.target),
                                o = n.data("flatsome-instagram"),
                                i = e => {
                                    jQuery("body").hasClass("admin-bar") && n.before('<div class="container error"><p>Instagram error: ' + e + "</p></div>"), console.error("Instagram error:", e)
                                };
                            if ("string" != typeof o) return i("Invalid data");
                            jQuery.ajax({
                                url: flatsomeVars.ajaxurl,
                                data: {
                                    action: "flatsome_load_instagram",
                                    data: o
                                },
                                success(e) {
                                    if (!e.success) return i(e.data);
                                    if ("string" != typeof e.data) return console.error("Invalid Instagram response:", e.data);
                                    const t = jQuery(e.data);
                                    Flatsome.detach(n), n.replaceWith(t), Flatsome.attach(t)
                                },
                                error(e) {
                                    i(e)
                                }
                            })
                        }
                    }));
                    jQuery("[data-flatsome-instagram]", e).each(((e, n) => {
                        t.observe(n)
                    }))
                }
            }), Flatsome.behavior("lightbox-gallery", {
                attach(e) {
                    const t = {
                        delegate: "a",
                        type: "image",
                        closeBtnInside: flatsomeVars.lightbox.close_btn_inside,
                        closeMarkup: flatsomeVars.lightbox.close_markup,
                        tLoading: '<div class="loading-spin centered dark"></div>',
                        removalDelay: 300,
                        gallery: {
                            enabled: !0,
                            navigateByImgClick: !0,
                            arrowMarkup: '<button class="mfp-arrow mfp-arrow-%dir%" title="%title%"><i class="icon-angle-%dir%"></i></button>',
                            preload: [0, 1]
                        },
                        image: {
                            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                            verticalFit: !1
                        },
                        callbacks: {
                            beforeOpen: function() {
                                i()
                            },
                            beforeClose: function() {
                                a()
                            }
                        }
                    };
                    jQuery('.lightbox .gallery a[href*=".jpg"], .lightbox .gallery a[href*=".jpeg"], .lightbox .gallery a[href*=".png"], .lightbox a.lightbox-gallery', e).parent().lazyMagnificPopup(t), jQuery(".lightbox .lightbox-multi-gallery", e).length && jQuery(".lightbox-multi-gallery", e).each((function() {
                        jQuery(this).lazyMagnificPopup(t)
                    }))
                }
            }), Flatsome.behavior("lightbox-image", {
                attach(e) {
                    jQuery(['.lightbox *[id^="attachment"] a[href*=".jpg"]', '.lightbox *[id^="attachment"] a[href*=".jpeg"]', '.lightbox *[id^="attachment"] a[href*=".png"]', '.lightbox .wp-block-image a[href*=".jpg"]:not([target="_blank"])', '.lightbox .wp-block-image a[href*=".jpeg"]:not([target="_blank"])', '.lightbox .wp-block-image a[href*=".png"]:not([target="_blank"])', ".lightbox a.image-lightbox", '.lightbox .entry-content a[href*=".jpg"]', '.lightbox .entry-content a[href*=".jpeg"]', '.lightbox .entry-content a[href*=".png"]'].join(","), e).not([".lightbox a.lightbox-gallery", '.lightbox .gallery a[href*=".jpg"]', '.lightbox .gallery a[href*=".jpeg"]', '.lightbox .gallery a[href*=".png"]', '.lightbox .lightbox-multi-gallery a[href*=".jpg"]', '.lightbox .lightbox-multi-gallery a[href*=".jpeg"]', '.lightbox .lightbox-multi-gallery a[href*=".png"]'].join(",")).lazyMagnificPopup({
                        type: "image",
                        tLoading: '<div class="loading-spin centered dark"></div>',
                        closeOnContentClick: !0,
                        closeBtnInside: flatsomeVars.lightbox.close_btn_inside,
                        closeMarkup: flatsomeVars.lightbox.close_markup,
                        removalDelay: 300,
                        image: {
                            verticalFit: !1
                        },
                        callbacks: {
                            beforeOpen: function() {
                                i()
                            },
                            beforeClose: function() {
                                a()
                            }
                        }
                    })
                }
            }), Flatsome.behavior("lightboxes-link", {
                attach(e) {
                    jQuery(".lightbox-by-id", e).each((function() {
                        const t = jQuery(this).attr("id");
                        jQuery('a[href="#' + t + '"]', e).on("click", (e => {
                            e.preventDefault();
                            const t = jQuery(e.currentTarget);
                            A().then((() => {
                                let e = t.attr("href").substring(1),
                                    n = jQuery(`#${e}.lightbox-by-id`);
                                if (e && n.length > 0) {
                                    let e = n[0],
                                        t = jQuery.magnificPopup.open ? 300 : 0;
                                    t && jQuery.magnificPopup.close(), setTimeout((function() {
                                        jQuery.magnificPopup.open({
                                            removalDelay: 300,
                                            closeBtnInside: flatsomeVars.lightbox.close_btn_inside,
                                            closeMarkup: flatsomeVars.lightbox.close_markup,
                                            items: {
                                                src: e,
                                                type: "inline",
                                                tLoading: '<div class="loading-spin dark"></div>'
                                            },
                                            callbacks: {
                                                beforeOpen: function() {
                                                    i()
                                                },
                                                open: function() {
                                                    if (Flatsome.attach(this.content), jQuery.fn.flickity && jQuery("[data-flickity-options].flickity-enabled", this.content).each(((e, t) => {
                                                            jQuery(t).flickity("resize")
                                                        })), jQuery.fn.packery) {
                                                        const e = jQuery("[data-packery-options]", this.content);
                                                        e && e.imagesLoaded((function() {
                                                            e.packery("layout")
                                                        }))
                                                    }
                                                },
                                                beforeClose: function() {
                                                    a()
                                                }
                                            }
                                        })
                                    }), t)
                                }
                            }))
                        }))
                    }))
                }
            }), Flatsome.behavior("lightbox-video", {
                attach(e) {
                    jQuery('a.open-video, a.button[href*="vimeo"]:not(.product_type_external), a.button[href*="youtube.com/watch"]:not(.product_type_external)', e).lazyMagnificPopup({
                        type: "iframe",
                        closeBtnInside: flatsomeVars.lightbox.close_btn_inside,
                        mainClass: "my-mfp-video",
                        closeMarkup: flatsomeVars.lightbox.close_markup,
                        tLoading: '<div class="loading-spin centered dark"></div>',
                        removalDelay: 300,
                        preloader: !0,
                        callbacks: {
                            elementParse: function(e) {
                                /^.*\.(mp4)$/i.test(e.src) && (e.type = "inline", e.src = '<div class="ux-mfp-inline-content ux-mfp-inline-content--video"><video autoplay controls playsinline width="100%" height="auto" name="media"><source src="' + e.src + '" type="video/mp4"></video></div>')
                            },
                            beforeOpen: function() {
                                i()
                            },
                            open: function() {
                                jQuery(".slider .is-selected .video").trigger("pause")
                            },
                            beforeClose: function() {
                                a()
                            },
                            close: function() {
                                jQuery(".slider .is-selected .video").trigger("play")
                            }
                        }
                    })
                }
            }), Flatsome.behavior("lightboxes", {
                attach(e) {
                    jQuery("[data-open]", e).on("click", (e => {
                        e.preventDefault();
                        const t = jQuery(e.currentTarget);
                        A().then((() => {
                            var e = t.data("open"),
                                n = t.data("color"),
                                o = t.data("bg"),
                                r = t.data("pos"),
                                s = t.data("visible-after"),
                                l = t.data("class"),
                                c = t.attr("data-focus");
                            t.offset(), t.addClass("current-lightbox-clicked"), "#product-sidebar" === e && void 0 === s && (s = !jQuery(e).hasClass("mfp-hide")), jQuery.magnificPopup.open({
                                items: {
                                    src: e,
                                    type: "inline",
                                    tLoading: '<div class="loading-spin dark"></div>'
                                },
                                removalDelay: 300,
                                closeBtnInside: flatsomeVars.lightbox.close_btn_inside,
                                closeMarkup: flatsomeVars.lightbox.close_markup,
                                focus: c,
                                callbacks: {
                                    beforeOpen: function() {
                                        this.st.mainClass = `off-canvas ${n||""} off-canvas-${r}`, i()
                                    },
                                    open: function() {
                                        jQuery("html").addClass("has-off-canvas"), jQuery("html").addClass("has-off-canvas-" + r), l && jQuery(".mfp-content").addClass(l), o && jQuery(".mfp-bg").addClass(o), jQuery(".mfp-content .resize-select").change(), jQuery.fn.packery && jQuery("[data-packery-options], .has-packery").packery("layout"), jQuery(".equalize-box", this.content).length && Flatsome.attach("equalize-box", this.content)
                                    },
                                    beforeClose: function() {
                                        jQuery("html").removeClass("has-off-canvas"), a()
                                    },
                                    afterClose: function() {
                                        jQuery("html").removeClass("has-off-canvas-" + r), jQuery(".current-lightbox-clicked").removeClass("current-lightbox-clicked"), s && jQuery(e).removeClass("mfp-hide")
                                    }
                                }
                            })
                        }))
                    }))
                }
            }), Flatsome.behavior("slider", {
                attach(e) {
                    var t;
                    (t = jQuery(e).data("flickityOptions") ? jQuery(e) : jQuery("[data-flickity-options]", e)).length && t.each(((e, t) => {
                        var n = jQuery(t),
                            o = n.closest(".slider-wrapper"),
                            i = n.data("flickity-options");
                        if ("undefined" != typeof UxBuilder && (i.draggable = !1), !0 === i.watchCSS) return;
                        let a = !1,
                            r = !1;
                        const s = e => {
                            try {
                                a = t.contains(e.target), "number" != typeof i.autoPlay || !i.pauseAutoPlayOnHover || a || r || n.flickity("playPlayer")
                            } catch (e) {}
                        };
                        n.on("flatsome-flickity-ready", (function() {
                            n.find(".flickity-slider > :not(.is-selected) .video-bg").trigger("pause"), n.find(".is-selected .video-bg").trigger("play"), "requestAnimationFrame" in window && (n.removeClass("flickity-enabled"), window.requestAnimationFrame((() => {
                                n.addClass("flickity-enabled")
                            })));
                            const e = n.data("flickity");
                            if (e && i.parallax) {
                                const t = n.find(".bg, .flickity-slider > .img img");
                                n.addClass("slider-has-parallax"), n.on("scroll.flickity", (function(n, o) {
                                    e.slides.forEach((function(n, o) {
                                        const a = t[o],
                                            r = -1 * (n.target + e.x) / i.parallax;
                                        a && (a.style.transform = "translateX( " + r + "px)")
                                    }))
                                }))
                            }
                            document.addEventListener("touchstart", s, {
                                passive: !0
                            })
                        })), w && (i.friction = 1, i.selectedAttraction = 1, i.autoPlay = !1), n.lazyFlickity(i), n.imagesLoaded((function() {
                            o.find(".loading-spin").fadeOut()
                        })), n.on("change.flickity", (function() {
                            a && (r = !0), n.find(".flickity-slider > :not(.is-selected) .video-bg").trigger("pause"), n.find(".is-selected .video-bg").trigger("play")
                        })), n.on("dragStart.flickity", (function() {
                            document.ontouchmove = e => e.preventDefault(), n.addClass("is-dragging")
                        })), n.on("dragEnd.flickity", (function() {
                            document.ontouchmove = () => !0, n.removeClass("is-dragging")
                        })), n.on("destroy.flickity", (() => {
                            document.removeEventListener("touchstart", s)
                        }))
                    }))
                },
                detach(e) {
                    jQuery.fn.flickity && !jQuery.fn.flickity.isFlickityStub && (jQuery(e).data("flickityOptions") ? jQuery(e).flickity("destroy") : jQuery("[data-flickity-options]", e).each((function() {
                        jQuery(this).data("flickity") && jQuery(this).flickity("destroy")
                    })))
                }
            }), r(5855), r(1092), r(7725), r(1284), r(9086), r(7387), r(2394), Flatsome.behavior("accordion-title", {
                attach(e) {
                    const t = window.location.hash;
                    let n = !1;
                    jQuery(".accordion-title", e).each((function() {
                        jQuery(this).off("click.flatsome").on("click.flatsome", (function(e) {
                            const t = w ? 0 : 200;
                            jQuery(this).next().is(":hidden") ? (jQuery(this).parent().parent().find(".accordion-title").attr("aria-expanded", !1).removeClass("active").next().slideUp(t), jQuery(this).attr("aria-expanded", !jQuery(this).hasClass("active")).toggleClass("active").next().slideDown(t, (function() {
                                /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) && jQuery.scrollTo(jQuery(this).prev())
                            })), window.requestAnimationFrame((() => {
                                jQuery.fn.flickity && jQuery(this).next().find("[data-flickity-options].flickity-enabled").each(((e, t) => {
                                    jQuery(t).flickity("resize")
                                })), jQuery.fn.packery && jQuery(this).next().find("[data-packery-options]").packery("layout")
                            }))) : jQuery(this).parent().parent().find(".accordion-title").attr("aria-expanded", !1).removeClass("active").next().slideUp(t), e.preventDefault()
                        })), !t.substring(1).length || decodeURIComponent(t.substring(1)) !== jQuery(this).attr("href") ? .split("#")[1] && t.substring(1) !== jQuery(this).attr("href") ? .split("#")[1] || (jQuery(this).hasClass("active") || jQuery(this).trigger("click"), n || (n = !0, setTimeout((() => {
                            jQuery.scrollTo(jQuery(this).parent())
                        }), 500)))
                    }))
                }
            }), r(5560);
            const V = F((e => {
                e.intersectionRatio > 0 && (V.unobserve(e.target), jQuery(e.target).addClass("bg-loaded"))
            }));
            Flatsome.behavior("lazy-load-bg", {
                attach(e) {
                    jQuery(".bg", e).each(((e, t) => {
                        V.observe(t)
                    }))
                }
            });
            const R = "flatsome-sticky-sidebar";

            function q(e) {
                const t = e.getBoundingClientRect();
                return new DOMRect(t.width, t.top + window.scrollY, 0, t.height)
            }
            Flatsome.behavior("sticky-sidebar", {
                attach(e) {
                    jQuery('.is-sticky-column[data-sticky-mode="javascript"]', e).each(((e, t) => {
                        "ResizeObserver" in window && t.offsetParent && t.offsetParent !== document.body ? jQuery(t).data(R, function(e) {
                            const {
                                offsetParent: t
                            } = e, n = parseInt(flatsomeVars.sticky_height, 10) + 30, o = {
                                passive: !0,
                                capture: !1
                            };
                            if (!t || t === document.body) return;
                            let {
                                innerHeight: i
                            } = window, a = null, r = null, l = 0, c = null, u = null;
                            const d = function() {
                                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "down";
                                    const o = window.scrollY + n - Math.round(a ? .top),
                                        s = i + l - n - Math.round(r ? .height),
                                        d = Math.max(Math.min(s, Math.round(a ? .height - r ? .height)), 0);
                                    let h = null,
                                        f = null;
                                    !a || r ? .height < i - n ? f = n : "down" === t ? o <= l ? h = d : r ? .height - o <= i && (f = i - Math.round(r ? .height), l = o) : "up" === t && (o <= s ? (f = n, l = o + Math.round(r ? .height) - i + n) : h = d), h === c && f === u || (e.style.top = "number" == typeof f ? `${f}px` : f, e.style.transform = "number" == typeof h ? `translateY(${h}px)` : h), u = f, c = h
                                },
                                h = function(e) {
                                    if ("ResizeObserver" in window) return new ResizeObserver((function(t) {
                                        for (let n = 0; n < t.length; n++) e(t[n])
                                    }))
                                }((n => {
                                    let {
                                        target: o,
                                        contentRect: i
                                    } = n;
                                    if (o === t) {
                                        const e = q(t),
                                            {
                                                x: n,
                                                y: o,
                                                width: r,
                                                height: s
                                            } = i;
                                        a = new DOMRect(e.x + n, e.y + o, r, s)
                                    } else o === e && (r = q(e), d())
                                })),
                                f = s(((e, t) => {
                                    let {
                                        direction: n
                                    } = t;
                                    return d(n)
                                }), o),
                                p = () => {
                                    i = window.innerHeight, d()
                                };
                            return h ? .observe(t), h ? .observe(e), window.addEventListener("resize", p, o), () => {
                                f(), h ? .disconnect(), window.removeEventListener("resize", p)
                            }
                        }(t)) : jQuery(t).removeAttr("data-sticky-mode")
                    }))
                },
                detach(e) {
                    jQuery('.is-sticky-column[data-sticky-mode="javascript"]', e).each(((e, t) => {
                        jQuery(t).data(R) ? .()
                    }))
                }
            }), r(9075), Flatsome.behavior("lottie", {
                attach(e) {
                    if ("uxBuilder" === jQuery("html").attr("ng-app")) return;
                    const t = jQuery(".ux-lottie__player", e);
                    if (0 === t.length) return;
                    const n = F((e => {
                        e.isIntersecting && (n.unobserve(e.target), function(e) {
                            const t = e,
                                n = JSON.parse(t.dataset.params);
                            let o = null,
                                i = null,
                                a = !1;

                            function s(e) {
                                if (0 === parseInt(e)) return i.ip;
                                if (100 === parseInt(e)) return i.op;
                                const t = parseInt(i.ip),
                                    n = e * (parseInt(i.op) - t) / 100 + t;
                                return Math.ceil(n)
                            }
                            Promise.all([r.e(288).then(r.bind(r, 4600)), r.e(288).then(r.bind(r, 5534))]).then((e => {
                                let [, {
                                    create: r
                                }] = e;
                                t.load(n.src), t.addEventListener("ready", (() => {
                                    o = t.getLottie(), i = o.animationData;
                                    const {
                                        autoplay: e,
                                        controls: l,
                                        direction: c,
                                        end: u,
                                        id: d,
                                        loop: h,
                                        mouseout: f,
                                        speed: p,
                                        start: y,
                                        trigger: m,
                                        scrollActionType: g,
                                        visibilityEnd: v,
                                        visibilityStart: b
                                    } = n;
                                    t.__controls = l, t.setLooping(h), t.setSpeed(parseFloat(p)), t.setDirection(c), "true" !== e && "scroll" === m || o.playSegments([s(y), s(u)], !0), e || (t.pause(), "scroll" === m && r({
                                        player: `#${d} .ux-lottie__player`,
                                        mode: "scroll",
                                        actions: [{
                                            visibility: [b / 100, v / 100],
                                            type: g,
                                            frames: [s(y), s(u)]
                                        }]
                                    }), "hover" === m && (t.addEventListener("mouseenter", (() => {
                                        "reverse" === f ? (t.setDirection(c), t.play()) : t.play()
                                    })), t.addEventListener("mouseleave", (() => {
                                        "reverse" === f ? (t.setDirection(-1 === c ? 1 : -1), t.play()) : t.pause()
                                    }))), "click" === m && t.addEventListener("click", (() => {
                                        if (a) return t.pause(), void(a = !1);
                                        t.play(), a = !0
                                    })))
                                }))
                            }))
                        }(e.target))
                    }));
                    t.each(((e, t) => {
                        n.observe(t)
                    }))
                }
            }), w && window.flatsomeVars.user.can_edit_pages && ("Prefer reduced motion is active on your OS", "The prefers-reduced-motion media feature is used to detect if the user has requested the system minimize the amount of non-essential motion it uses. With this option enabled, slides & animations are reduced on the frontend.\nCheck your OS documentation on how to disable reduced motion.", console.groupCollapsed("%cFlatsome%c: Prefer reduced motion is active on your OS", "color: #0693e3; font-weight: bold;", "color: inherit;"), console.log("The prefers-reduced-motion media feature is used to detect if the user has requested the system minimize the amount of non-essential motion it uses. With this option enabled, slides & animations are reduced on the frontend.\nCheck your OS documentation on how to disable reduced motion."), console.groupEnd());
            let N = 0;
            let W = 0;
            const U = "scrollBehavior" in document.documentElement.style,
                Y = window.getComputedStyle(document.documentElement)["scroll-behavior"];

            function X() {
                window.removeEventListener("keydown", X), window.removeEventListener("pointermove", X), window.removeEventListener("touchstart", X),
                    function() {
                        const e = jQuery("#header");
                        if (!e.hasClass("has-sticky")) return;
                        const t = e.clone();
                        t.attr("id", "header-clone").css("visibility", "hidden");
                        const n = t.find(".header-wrapper");
                        n.addClass("stuck"), jQuery("body").append(t), N = Math.round(n.height()), t.remove(), window.flatsomeVars.stickyHeaderHeight = N,
                            function(e) {
                                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                                t && document.documentElement.style.setProperty(e, t), window.getComputedStyle(document.documentElement).getPropertyValue(e)
                            }("--flatsome--header--sticky-height", `${N}px`)
                    }(),
                    function() {
                        const e = jQuery("#wpadminbar"),
                            t = e.length && e.is(":visible") ? e.height() : 0;
                        W = Math.round(window.flatsomeVars.stickyHeaderHeight + t), window.flatsomeVars.scrollPaddingTop = W, jQuery.extend(jQuery.easing, {
                            fsEaseInOutExpo: function(e) {
                                return 0 === e ? 0 : 1 === e ? 1 : e < .5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2
                            }
                        }), jQuery.extend(jQuery.scrollTo.defaults, {
                            axis: "y",
                            duration: w || U && "smooth" === Y ? 0 : 1e3,
                            offset: -W,
                            easing: "fsEaseInOutExpo"
                        })
                    }()
            }
            document.addEventListener("DOMContentLoaded", (() => {
                window.location.hash || window.scrollY > 200 ? X() : (window.addEventListener("keydown", X, {
                    once: !0
                }), window.addEventListener("pointermove", X, {
                    once: !0
                }), window.addEventListener("touchstart", X, {
                    once: !0
                }))
            }));
            for (const e of ["touchstart", "touchmove"]) jQuery.event.special[e] = {
                setup(t, n, o) {
                    this.addEventListener && this.addEventListener(e, o, {
                        passive: !n.includes("noPreventDefault")
                    })
                }
            };
            for (const e of ["wheel", "mousewheel"]) jQuery.event.special[e] = {
                setup(t, n, o) {
                    this.addEventListener && this.addEventListener(e, o, {
                        passive: !0
                    })
                }
            };
            jQuery((() => r.g.Flatsome.attach(document))), r.g.cookie = function(e, t, n) {
                if (void 0 === t) {
                    const t = ("; " + window.document.cookie).split(`; ${e}=`);
                    return 2 === t.length ? t.pop().split(";").shift() : null
                } {
                    !1 === t && (n = -1);
                    let o = "";
                    if (n) {
                        const e = new Date;
                        e.setTime(e.getTime() + 24 * n * 60 * 60 * 1e3), o = `; expires=${e.toGMTString()}`
                    }
                    window.document.cookie = `${e}=${t}${o}; path=/`
                }
            }
        }()
}();