(function () {


    /*
 Copyright 2016 Google Inc.

 Swiffy runtime version 7.4.1

 In addition to the Google Terms of Service (http://www.google.com/accounts/TOS),
 Google grants you and the Google Swiffy end users a personal, worldwide,
 royalty-free, non-assignable and non-exclusive license to use the Google Swiffy
 runtime to host it for Google Swiffy end users and to use it in connection with
 the Google Swiffy service.
*/
    var g;
    var aa = this, l = function (a) {
            return void 0 !== a
        }, ba = function (a, b, c) {
            a = a.split(".");
            c = c || aa;
            a[0] in c || !c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) !a.length && l(b) ? c[d] = b : c = c[d] ? c[d] : c[d] = {}
        }, ca = function () {
        }, da = function (a) {
            a.wh = function () {
                return a.Dq ? a.Dq : a.Dq = new a
            }
        }, ea = function (a) {
            var b = typeof a;
            if ("object" == b) if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" ==
                    c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null"; else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        }, fa = function (a) {
            return "array" == ea(a)
        }, ga = function (a) {
            var b = ea(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        ha = function (a) {
            return "string" == typeof a
        }, ia = function (a) {
            return "boolean" == typeof a
        }, ja = function (a) {
            return "number" == typeof a
        }, ka = function (a) {
            return "function" == ea(a)
        }, la = function (a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        }, ma = function (a, b, c) {
            return a.call.apply(a.bind, arguments)
        }, na = function (a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function () {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b,
                        c)
                }
            }
            return function () {
                return a.apply(b, arguments)
            }
        }, oa = function (a, b, c) {
            oa = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ma : na;
            return oa.apply(null, arguments)
        }, pa = Date.now || function () {
            return +new Date
        }, m = function (a, b) {
            function c() {
            }

            c.prototype = b.prototype;
            a.J = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.Rg = function (a, c, f) {
                for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++) h[k - 2] = arguments[k];
                return b.prototype[c].apply(a, h)
            }
        };
    Object.defineProperty && !Object.defineProperties && (Object.defineProperties = function (a, b) {
        for (var c in b) Object.defineProperty(a, c, b[c]);
        return a
    });
    "Uint32Array" in window || (window.Uint32Array = Array);
    "Uint8Array" in window || (window.Uint8Array = Array);
    "Float32Array" in window || (window.Float32Array = Array);
    var qa = String.prototype.trim ? function (a) {
            return a.trim()
        } : function (a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
        }, ya = function (a, b) {
            if (b) a = a.replace(ra, "&amp;").replace(sa, "&lt;").replace(ta, "&gt;").replace(ua, "&quot;").replace(va, "&#39;").replace(wa, "&#0;"); else {
                if (!xa.test(a)) return a;
                -1 != a.indexOf("&") && (a = a.replace(ra, "&amp;"));
                -1 != a.indexOf("<") && (a = a.replace(sa, "&lt;"));
                -1 != a.indexOf(">") && (a = a.replace(ta, "&gt;"));
                -1 != a.indexOf('"') && (a = a.replace(ua, "&quot;"));
                -1 != a.indexOf("'") && (a = a.replace(va,
                    "&#39;"));
                -1 != a.indexOf("\x00") && (a = a.replace(wa, "&#0;"))
            }
            return a
        }, ra = /&/g, sa = /</g, ta = />/g, ua = /"/g, va = /'/g, wa = /\x00/g, xa = /[\x00&<>"']/,
        za = {"\x00": "\\0", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "\t": "\\t", "\x0B": "\\x0B", '"': '\\"', "\\": "\\\\"}, Aa = {"'": "\\'"}, Ba = function (a) {
            a = String(a);
            if (a.quote) return a.quote();
            for (var b = ['"'], c = 0; c < a.length; c++) {
                var d = a.charAt(c), e = d.charCodeAt(0), f = b, h = c + 1, k;
                if (!(k = za[d])) {
                    if (!(31 < e && 127 > e)) if (d in Aa) d = Aa[d]; else if (d in za) d = Aa[d] = za[d]; else {
                        e = d;
                        k = d.charCodeAt(0);
                        if (31 < k && 127 > k) e = d; else {
                            if (256 > k) {
                                if (e = "\\x", 16 > k || 256 < k) e += "0"
                            } else e = "\\u", 4096 > k && (e += "0");
                            e += k.toString(16).toUpperCase()
                        }
                        d = Aa[d] = e
                    }
                    k = d
                }
                f[h] = k
            }
            b.push('"');
            return b.join("")
        }, Ca = function (a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var Da = Array.prototype, Ea = Da.indexOf ? function (a, b, c) {
        return Da.indexOf.call(a, b, c)
    } : function (a, b, c) {
        c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (ha(a)) return ha(b) && 1 == b.length ? a.indexOf(b, c) : -1;
        for (; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1
    }, Fa = Da.forEach ? function (a, b, c) {
        Da.forEach.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = ha(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    }, Ga = function (a) {
        if (!fa(a)) for (var b = a.length - 1; 0 <= b; b--) delete a[b];
        a.length = 0
    }, Ha = function (a, b) {
        var c =
            Ea(a, b), d;
        (d = 0 <= c) && Da.splice.call(a, c, 1);
        return d
    }, Ia = function (a, b, c) {
        a:{
            for (var d = a.length, e = ha(a) ? a.split("") : a, f = 0; f < d; f++) if (f in e && b.call(c, e[f], f, a)) {
                b = f;
                break a
            }
            b = -1
        }
        return 0 <= b ? (Da.splice.call(a, b, 1), !0) : !1
    }, Ja = function (a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }, Ka = function (a, b, c) {
        return 2 >= arguments.length ? Da.slice.call(a, b) : Da.slice.call(a, b, c)
    }, Ma = function (a, b, c) {
        c = c || La;
        for (var d = 0, e = a.length, f; d < e;) {
            var h = d + e >> 1, k;
            k = c(b, a[h]);
            0 < k ? d = h + 1 : (e =
                h, f = !k)
        }
        return f ? d : ~d
    }, Oa = function (a, b, c) {
        if (!ga(a) || !ga(b) || a.length != b.length) return !1;
        var d = a.length;
        c = c || Na;
        for (var e = 0; e < d; e++) if (!c(a[e], b[e])) return !1;
        return !0
    }, La = function (a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }, Na = function (a, b) {
        return a === b
    };
    var Pa = function (a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    }, Qa = function (a) {
        var b = ea(a);
        if ("object" == b || "array" == b) {
            if (ka(a.clone)) return a.clone();
            var b = "array" == b ? [] : {}, c;
            for (c in a) b[c] = Qa(a[c]);
            return b
        }
        return a
    }, Ra = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), Sa = function (a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Ra.length; f++) c = Ra[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] =
                d[c])
        }
    };
    var Ta;
    a:{
        var Ua = aa.navigator;
        if (Ua) {
            var Va = Ua.userAgent;
            if (Va) {
                Ta = Va;
                break a
            }
        }
        Ta = ""
    }
    var Wa = function (a) {
        return -1 != Ta.indexOf(a)
    };
    var Xa = function () {
        return Wa("Opera") || Wa("OPR")
    }, Ya = function () {
        return (Wa("Chrome") || Wa("CriOS")) && !Xa() && !Wa("Edge")
    };
    var Za = Xa(), $a = Wa("Trident") || Wa("MSIE"), ab = Wa("Edge"), bb = Wa("Gecko") && !(-1 != Ta.toLowerCase().indexOf("webkit") && !Wa("Edge")) && !(Wa("Trident") || Wa("MSIE")) && !Wa("Edge"),
        cb = -1 != Ta.toLowerCase().indexOf("webkit") && !Wa("Edge"), db = Wa("Macintosh"), eb = Wa("Linux") || Wa("CrOS"), fb = function () {
            var a = Ta;
            if (bb) return /rv\:([^\);]+)(\)|;)/.exec(a);
            if (ab) return /Edge\/([\d\.]+)/.exec(a);
            if ($a) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (cb) return /WebKit\/(\S+)/.exec(a)
        }, gb = function () {
            var a = aa.document;
            return a ?
                a.documentMode : void 0
        }, hb = function () {
            if (Za && aa.opera) {
                var a;
                var b = aa.opera.version;
                try {
                    a = b()
                } catch (c) {
                    a = b
                }
                return a
            }
            a = "";
            (b = fb()) && (a = b ? b[1] : "");
            return $a && (b = gb(), b > parseFloat(a)) ? String(b) : a
        }(), ib = {}, jb = function (a) {
            var b;
            if (!(b = ib[a])) {
                b = 0;
                for (var c = qa(String(hb)).split("."), d = qa(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                    var h = c[f] || "", k = d[f] || "", n = RegExp("(\\d*)(\\D*)", "g"), q = RegExp("(\\d*)(\\D*)", "g");
                    do {
                        var u = n.exec(h) || ["", "", ""], p = q.exec(k) || ["", "", ""];
                        if (0 == u[0].length &&
                            0 == p[0].length) break;
                        b = Ca(0 == u[1].length ? 0 : parseInt(u[1], 10), 0 == p[1].length ? 0 : parseInt(p[1], 10)) || Ca(0 == u[2].length, 0 == p[2].length) || Ca(u[2], p[2])
                    } while (0 == b)
                }
                b = ib[a] = 0 <= b
            }
            return b
        }, kb = aa.document, lb = kb && $a ? gb() || ("CSS1Compat" == kb.compatMode ? parseInt(hb, 10) : 5) : void 0;
    var mb = !$a || 9 <= lb;
    !bb && !$a || $a && 9 <= lb || bb && jb("1.9.1");
    $a && jb("9");
    var ob = function (a, b) {
        Pa(b, function (b, d) {
            "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : nb.hasOwnProperty(d) ? a.setAttribute(nb[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
        })
    }, nb = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    }, qb = function (a, b, c) {
        var d = arguments,
            e = d[0], f = d[1];
        if (!mb && f && (f.name || f.type)) {
            e = ["<", e];
            f.name && e.push(' name="', ya(f.name), '"');
            if (f.type) {
                e.push(' type="', ya(f.type), '"');
                var h = {};
                Sa(h, f);
                delete h.type;
                f = h
            }
            e.push(">");
            e = e.join("")
        }
        e = document.createElement(e);
        f && (ha(f) ? e.className = f : fa(f) ? e.className = f.join(" ") : ob(e, f));
        2 < d.length && pb(document, e, d, 2);
        return e
    }, pb = function (a, b, c, d) {
        function e(c) {
            c && b.appendChild(ha(c) ? a.createTextNode(c) : c)
        }

        for (; d < c.length; d++) {
            var f = c[d];
            !ga(f) || la(f) && 0 < f.nodeType ? e(f) : Fa(rb(f) ? Ja(f) : f, e)
        }
    }, rb =
        function (a) {
            if (a && "number" == typeof a.length) {
                if (la(a)) return "function" == typeof a.item || "string" == typeof a.item;
                if (ka(a)) return "function" == typeof a.item
            }
            return !1
        };
    var sb = function (a) {
        sb[" "](a);
        return a
    };
    sb[" "] = ca;
    var tb = !$a || 9 <= lb, ub = $a && !jb("9");
    !cb || jb("528");
    bb && jb("1.9b") || $a && jb("8") || Za && jb("9.5") || cb && jb("528");
    bb && !jb("8") || $a && jb("9");
    var vb = function () {
        this.Si = this.Si;
        this.Uj = this.Uj
    };
    vb.prototype.Si = !1;
    vb.prototype.il = function () {
        this.Si || (this.Si = !0, this.mh())
    };
    vb.prototype.mh = function () {
        if (this.Uj) for (; this.Uj.length;) this.Uj.shift()()
    };
    var wb = function (a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.Ue = !1;
        this.bs = !0
    };
    wb.prototype.stopPropagation = function () {
        this.Ue = !0
    };
    wb.prototype.preventDefault = function () {
        this.defaultPrevented = !0;
        this.bs = !1
    };
    var xb = function (a, b) {
        wb.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.Mb = this.state = null;
        a && this.init(a, b)
    };
    m(xb, wb);
    xb.prototype.init = function (a, b) {
        var c = this.type = a.type, d = a.changedTouches ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var e = a.relatedTarget;
        if (e) {
            if (bb) {
                var f;
                a:{
                    try {
                        sb(e.nodeName);
                        f = !0;
                        break a
                    } catch (h) {
                    }
                    f = !1
                }
                f || (e = null)
            }
        } else "mouseover" == c ? e = a.fromElement : "mouseout" == c && (e = a.toElement);
        this.relatedTarget = e;
        null === d ? (this.offsetX = cb || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = cb || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX :
            a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.state = a.state;
        this.Mb = a;
        a.defaultPrevented &&
        this.preventDefault()
    };
    xb.prototype.stopPropagation = function () {
        xb.J.stopPropagation.call(this);
        this.Mb.stopPropagation ? this.Mb.stopPropagation() : this.Mb.cancelBubble = !0
    };
    xb.prototype.preventDefault = function () {
        xb.J.preventDefault.call(this);
        var a = this.Mb;
        if (a.preventDefault) a.preventDefault(); else if (a.returnValue = !1, ub) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {
        }
    };
    var yb = "closure_listenable_" + (1E6 * Math.random() | 0), zb = function (a) {
        return !(!a || !a[yb])
    }, Ab = 0;
    var Bb = function (a, b, c, d, e, f) {
        this.listener = a;
        this.$j = b;
        this.src = c;
        this.type = d;
        this.Bi = !!e;
        this.Je = f;
        this.key = ++Ab;
        this.og = this.Ai = !1
    };
    Bb.prototype.Oj = function () {
        this.og = !0;
        this.Je = this.src = this.$j = this.listener = null
    };
    var Cb = function (a) {
        this.src = a;
        this.cb = {};
        this.ji = 0
    };
    g = Cb.prototype;
    g.add = function (a, b, c, d, e) {
        var f = a.toString();
        a = this.cb[f];
        a || (a = this.cb[f] = [], this.ji++);
        var h = Db(a, b, d, e);
        -1 < h ? (b = a[h], c || (b.Ai = !1)) : (b = new Bb(b, null, this.src, f, !!d, e), b.Ai = c, a.push(b));
        return b
    };
    g.remove = function (a, b, c, d) {
        a = a.toString();
        if (!(a in this.cb)) return !1;
        var e = this.cb[a];
        b = Db(e, b, c, d);
        return -1 < b ? (e[b].Oj(), Da.splice.call(e, b, 1), 0 == e.length && (delete this.cb[a], this.ji--), !0) : !1
    };
    g.Pr = function (a) {
        var b = a.type;
        if (!(b in this.cb)) return !1;
        var c = Ha(this.cb[b], a);
        c && (a.Oj(), 0 == this.cb[b].length && (delete this.cb[b], this.ji--));
        return c
    };
    g.ox = function (a) {
        a = a && a.toString();
        var b = 0, c;
        for (c in this.cb) if (!a || c == a) {
            for (var d = this.cb[c], e = 0; e < d.length; e++) ++b, d[e].Oj();
            delete this.cb[c];
            this.ji--
        }
        return b
    };
    g.Dl = function (a, b, c, d) {
        a = this.cb[a.toString()];
        var e = -1;
        a && (e = Db(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    var Db = function (a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.og && f.listener == b && f.Bi == !!c && f.Je == d) return e
        }
        return -1
    };
    var Eb = "closure_lm_" + (1E6 * Math.random() | 0), Fb = {}, Gb = 0, Hb = function (a, b, c, d, e) {
        if (fa(b)) {
            for (var f = 0; f < b.length; f++) Hb(a, b[f], c, d, e);
            return null
        }
        c = Ib(c);
        return zb(a) ? a.sw(b, c, d, e) : Jb(a, b, c, !1, d, e)
    }, Jb = function (a, b, c, d, e, f) {
        if (!b) throw Error("Invalid event type");
        var h = !!e, k = Kb(a);
        k || (a[Eb] = k = new Cb(a));
        c = k.add(b, c, d, e, f);
        if (c.$j) return c;
        d = Lb();
        c.$j = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) a.addEventListener(b.toString(), d, h); else if (a.attachEvent) a.attachEvent(Mb(b.toString()), d); else throw Error("addEventListener and attachEvent are unavailable.");
        Gb++;
        return c
    }, Lb = function () {
        var a = Nb, b = tb ? function (c) {
            return a.call(b.src, b.listener, c)
        } : function (c) {
            c = a.call(b.src, b.listener, c);
            if (!c) return c
        };
        return b
    }, Ob = function (a, b, c, d, e) {
        if (fa(b)) {
            for (var f = 0; f < b.length; f++) Ob(a, b[f], c, d, e);
            return null
        }
        c = Ib(c);
        return zb(a) ? a.tw(b, c, d, e) : Jb(a, b, c, !0, d, e)
    }, Pb = function (a, b, c, d, e) {
        if (fa(b)) {
            for (var f = 0; f < b.length; f++) Pb(a, b[f], c, d, e);
            return null
        }
        c = Ib(c);
        if (zb(a)) return a.ny(b, c, d, e);
        if (!a) return !1;
        if (a = Kb(a)) if (b = a.Dl(b, c, !!d, e)) return Qb(b);
        return !1
    }, Qb = function (a) {
        if (ja(a) ||
            !a || a.og) return !1;
        var b = a.src;
        if (zb(b)) return b.$s(a);
        var c = a.type, d = a.$j;
        b.removeEventListener ? b.removeEventListener(c, d, a.Bi) : b.detachEvent && b.detachEvent(Mb(c), d);
        Gb--;
        (c = Kb(b)) ? (c.Pr(a), 0 == c.ji && (c.src = null, b[Eb] = null)) : a.Oj();
        return !0
    }, Rb = function (a, b) {
        if (!a) return 0;
        if (zb(a)) return a.Nr(b);
        var c = Kb(a);
        if (!c) return 0;
        var d = 0, e = b && b.toString(), f;
        for (f in c.cb) if (!e || f == e) for (var h = c.cb[f].concat(), k = 0; k < h.length; ++k) Qb(h[k]) && ++d;
        return d
    }, Mb = function (a) {
        return a in Fb ? Fb[a] : Fb[a] = "on" + a
    }, Tb =
        function (a, b, c, d) {
            var e = !0;
            if (a = Kb(a)) if (b = a.cb[b.toString()]) for (b = b.concat(), a = 0; a < b.length; a++) {
                var f = b[a];
                f && f.Bi == c && !f.og && (f = Sb(f, d), e = e && !1 !== f)
            }
            return e
        }, Sb = function (a, b) {
        var c = a.listener, d = a.Je || a.src;
        a.Ai && Qb(a);
        return c.call(d, b)
    }, Nb = function (a, b) {
        if (a.og) return !0;
        if (!tb) {
            var c;
            if (!(c = b)) a:{
                c = ["window", "event"];
                for (var d = aa, e; e = c.shift();) if (null != d[e]) d = d[e]; else {
                    c = null;
                    break a
                }
                c = d
            }
            e = c;
            c = new xb(e, this);
            d = !0;
            if (!(0 > e.keyCode || void 0 != e.returnValue)) {
                a:{
                    var f = !1;
                    if (0 == e.keyCode) try {
                        e.keyCode =
                            -1;
                        break a
                    } catch (n) {
                        f = !0
                    }
                    if (f || void 0 == e.returnValue) e.returnValue = !0
                }
                e = [];
                for (f = c.currentTarget; f; f = f.parentNode) e.push(f);
                for (var f = a.type, h = e.length - 1; !c.Ue && 0 <= h; h--) {
                    c.currentTarget = e[h];
                    var k = Tb(e[h], f, !0, c), d = d && k
                }
                for (h = 0; !c.Ue && h < e.length; h++) c.currentTarget = e[h], k = Tb(e[h], f, !1, c), d = d && k
            }
            return d
        }
        return Sb(a, new xb(b, this))
    }, Kb = function (a) {
        a = a[Eb];
        return a instanceof Cb ? a : null
    }, Ub = "__closure_events_fn_" + (1E9 * Math.random() >>> 0), Ib = function (a) {
        if (ka(a)) return a;
        a[Ub] || (a[Ub] = function (b) {
            return a.handleEvent(b)
        });
        return a[Ub]
    };
    var Vb = function () {
        vb.call(this);
        this.Dd = new Cb(this);
        this.xt = this;
        this.Gm = null
    };
    m(Vb, vb);
    Vb.prototype[yb] = !0;
    g = Vb.prototype;
    g.addEventListener = function (a, b, c, d) {
        Hb(this, a, b, c, d)
    };
    g.removeEventListener = function (a, b, c, d) {
        Pb(this, a, b, c, d)
    };
    g.dispatchEvent = function (a) {
        var b, c = this.Gm;
        if (c) for (b = []; c; c = c.Gm) b.push(c);
        var c = this.xt, d = a.type || a;
        if (ha(a)) a = new wb(a, c); else if (a instanceof wb) a.target = a.target || c; else {
            var e = a;
            a = new wb(d, c);
            Sa(a, e)
        }
        var e = !0, f;
        if (b) for (var h = b.length - 1; !a.Ue && 0 <= h; h--) f = a.currentTarget = b[h], e = f.cj(d, !0, a) && e;
        a.Ue || (f = a.currentTarget = c, e = f.cj(d, !0, a) && e, a.Ue || (e = f.cj(d, !1, a) && e));
        if (b) for (h = 0; !a.Ue && h < b.length; h++) f = a.currentTarget = b[h], e = f.cj(d, !1, a) && e;
        return e
    };
    g.mh = function () {
        Vb.J.mh.call(this);
        this.Nr();
        this.Gm = null
    };
    g.sw = function (a, b, c, d) {
        return this.Dd.add(String(a), b, !1, c, d)
    };
    g.tw = function (a, b, c, d) {
        return this.Dd.add(String(a), b, !0, c, d)
    };
    g.ny = function (a, b, c, d) {
        return this.Dd.remove(String(a), b, c, d)
    };
    g.$s = function (a) {
        return this.Dd.Pr(a)
    };
    g.Nr = function (a) {
        return this.Dd ? this.Dd.ox(a) : 0
    };
    g.cj = function (a, b, c) {
        a = this.Dd.cb[String(a)];
        if (!a) return !0;
        a = a.concat();
        for (var d = !0, e = 0; e < a.length; ++e) {
            var f = a[e];
            if (f && !f.og && f.Bi == b) {
                var h = f.listener, k = f.Je || f.src;
                f.Ai && this.$s(f);
                d = !1 !== h.call(k, c) && d
            }
        }
        return d && 0 != c.bs
    };
    g.Dl = function (a, b, c, d) {
        return this.Dd.Dl(String(a), b, c, d)
    };
    var $b = function (a, b, c, d, e) {
        if (!($a || ab || cb && jb("525"))) return !0;
        if (db && e) return Wb(a);
        if (e && !d) return !1;
        ja(b) && (b = Zb(b));
        if (!c && (17 == b || 18 == b || db && 91 == b)) return !1;
        if ((cb || ab) && d && c) switch (a) {
            case 220:
            case 219:
            case 221:
            case 192:
            case 186:
            case 189:
            case 187:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
                return !1
        }
        if ($a && d && b == a) return !1;
        switch (a) {
            case 13:
                return !0;
            case 27:
                return !(cb || ab)
        }
        return Wb(a)
    }, Wb = function (a) {
        if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (cb || ab) && 0 == a) return !0;
        switch (a) {
            case 32:
            case 43:
            case 63:
            case 64:
            case 107:
            case 109:
            case 110:
            case 111:
            case 186:
            case 59:
            case 189:
            case 187:
            case 61:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
            case 219:
            case 220:
            case 221:
                return !0;
            default:
                return !1
        }
    }, Zb = function (a) {
        if (bb) a = ac(a); else if (db && cb) a:switch (a) {
            case 93:
                a = 91;
                break a
        }
        return a
    }, ac = function (a) {
        switch (a) {
            case 61:
                return 187;
            case 59:
                return 186;
            case 173:
                return 189;
            case 224:
                return 91;
            case 0:
                return 224;
            default:
                return a
        }
    };
    var bc = function (a, b) {
        Vb.call(this);
        a && this.Gk(a, b)
    };
    m(bc, Vb);
    g = bc.prototype;
    g.oh = null;
    g.Ej = null;
    g.dm = null;
    g.Hj = null;
    g.kc = -1;
    g.Oe = -1;
    g.zk = !1;
    var cc = {
        3: 13,
        12: 144,
        63232: 38,
        63233: 40,
        63234: 37,
        63235: 39,
        63236: 112,
        63237: 113,
        63238: 114,
        63239: 115,
        63240: 116,
        63241: 117,
        63242: 118,
        63243: 119,
        63244: 120,
        63245: 121,
        63246: 122,
        63247: 123,
        63248: 44,
        63272: 46,
        63273: 36,
        63275: 35,
        63276: 33,
        63277: 34,
        63289: 144,
        63302: 45
    }, dc = {
        Up: 38,
        Down: 40,
        Left: 37,
        Right: 39,
        Enter: 13,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        "U+007F": 46,
        Home: 36,
        End: 35,
        PageUp: 33,
        PageDown: 34,
        Insert: 45
    }, ec = $a || ab || cb && jb("525"), fc = db && bb;
    g = bc.prototype;
    g.Lv = function (a) {
        (cb || ab) && (17 == this.kc && !a.ctrlKey || 18 == this.kc && !a.altKey || db && 91 == this.kc && !a.metaKey) && this.Xr();
        -1 == this.kc && (a.ctrlKey && 17 != a.keyCode ? this.kc = 17 : a.altKey && 18 != a.keyCode ? this.kc = 18 : a.metaKey && 91 != a.keyCode && (this.kc = 91));
        ec && !$b(a.keyCode, this.kc, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.Oe = Zb(a.keyCode), fc && (this.zk = a.altKey))
    };
    g.Xr = function () {
        this.Oe = this.kc = -1
    };
    g.Mv = function (a) {
        this.Xr();
        this.zk = a.altKey
    };
    g.handleEvent = function (a) {
        var b = a.Mb, c, d, e = b.altKey;
        $a && "keypress" == a.type ? (c = this.Oe, d = 13 != c && 27 != c ? b.keyCode : 0) : (cb || ab) && "keypress" == a.type ? (c = this.Oe, d = 0 <= b.charCode && 63232 > b.charCode && Wb(c) ? b.charCode : 0) : Za && !cb ? (c = this.Oe, d = Wb(c) ? b.keyCode : 0) : (c = b.keyCode || this.Oe, d = b.charCode || 0, fc && (e = this.zk), db && 63 == d && 224 == c && (c = 191));
        var f = c = Zb(c), h = b.keyIdentifier;
        c ? 63232 <= c && c in cc ? f = cc[c] : 25 == c && a.shiftKey && (f = 9) : h && h in dc && (f = dc[h]);
        a = f == this.kc;
        this.kc = f;
        b = new gc(f, d, a, b);
        b.altKey = e;
        this.dispatchEvent(b)
    };
    g.Gk = function (a, b) {
        this.Hj && this.detach();
        this.oh = a;
        this.Ej = Hb(this.oh, "keypress", this, b);
        this.dm = Hb(this.oh, "keydown", this.Lv, b, this);
        this.Hj = Hb(this.oh, "keyup", this.Mv, b, this)
    };
    g.detach = function () {
        this.Ej && (Qb(this.Ej), Qb(this.dm), Qb(this.Hj), this.Hj = this.dm = this.Ej = null);
        this.oh = null;
        this.Oe = this.kc = -1
    };
    g.mh = function () {
        bc.J.mh.call(this);
        this.detach()
    };
    var gc = function (a, b, c, d) {
        xb.call(this, d);
        this.type = "key";
        this.keyCode = a;
        this.charCode = b;
        this.repeat = c
    };
    m(gc, xb);
    var hc = function (a) {
        return a
    };
    var ic = function (a, b, c) {
        if (ka(a)) c && (a = oa(a, c)); else if (a && "function" == typeof a.handleEvent) a = oa(a.handleEvent, a); else throw Error("Invalid listener argument");
        return 2147483647 < b ? -1 : aa.setTimeout(a, b || 0)
    };
    var jc = function () {
        this.xr = {};
        this.vm = {};
        this.Jm = {};
        this.An = null;
        this.Im = []
    };
    da(jc);
    jc.prototype.aq = function (a, b) {
        return a + "_" + b + ".js"
    };
    var kc = function (a) {
        eval(a)
    };
    jc.prototype.init = function (a, b) {
        ba("__gjsload__", kc, void 0);
        this.An = a.replace(/\.js$/, "");
        b && (this.aq = b);
        Fa(this.Im, function (a) {
            this.Vq(a)
        }, this);
        Ga(this.Im)
    };
    jc.prototype.Wr = function (a, b, c) {
        var d = this.xr, e = this.vm;
        e[a] ? c(e[a][b]) : d[a] ? d[a].push([b, c]) : (d[a] = [[b, c]], ha(this.An) ? this.Vq(a) : this.Im.push(a))
    };
    jc.prototype.Dr = function (a, b, c) {
        var d = this.vm, e = this.xr;
        d[a] || (d[a] = {});
        if (c) d[a][b] = c; else if (e[a]) {
            for (b = 0; b < e[a].length; ++b) (0, e[a][b][1])(d[a][e[a][b][0]]);
            delete e[a];
            delete this.Jm[a]
        }
    };
    jc.prototype.Vq = function (a) {
        ic(function () {
            if (!this.vm[a]) {
                var b = this.aq(this.An, a), c;
                a:{
                    c = this.Jm;
                    for (var d in c) if (c[d] == b) {
                        c = !0;
                        break a
                    }
                    c = !1
                }
                this.Jm[a] = b;
                c || (b = qb("SCRIPT", {type: "text/javascript", src: b}), document.body.appendChild(b))
            }
        }, 0, this)
    };
    var lc = null, mc = null, nc = bb || cb || Za || "function" == typeof aa.atob, oc = function () {
        if (!lc) {
            lc = {};
            mc = {};
            for (var a = 0; 65 > a; a++) lc[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a), mc[lc[a]] = a, 62 <= a && (mc["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)] = a)
        }
    };
    var pc = function (a) {
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
            return eval("(" + a + ")")
        } catch (b) {
        }
        throw Error("Invalid JSON string: " + a);
    };
    var qc = Ya(), rc = Wa("Safari") && !(Ya() || Wa("Coast") || Xa() || Wa("Edge") || Wa("Silk") || Wa("Android")) && !(Wa("iPhone") && !Wa("iPod") && !Wa("iPad") || Wa("iPad") || Wa("iPod"));
    var sc = /iPhone|iPod/, tc = function (a, b, c, d) {
        return a << 21 | b << 14 | c << 7 | d
    }, vc = /OS (\d)_(\d)(?:_(\d))?/;
    var wc = "normal layer multiply screen lighten darken difference add subtract invert alpha erase overlay hardlight shader".split(" "),
        xc = {PA: 0, NA: 1, fB: 2, dB: 3, eB: 4, RC: 5, Iz: 6, aB: 7, $B: 8, aC: 9, VB: 10, UB: 11, vB: 12, Cz: 13, Ez: 14, Bz: 15, Dz: 16, DA: 17, mz: 18, ke: 19, OA: 20}, yc = {
            qB: 2,
            kf: 3,
            Jg: 4,
            Lg: 5,
            cf: 6,
            Gz: 7,
            QA: 8,
            RA: 9,
            vA: 12,
            uA: 13,
            tA: 14,
            sA: 15,
            pt: 16,
            yA: 17,
            mA: 18,
            lA: 19,
            rA: 20,
            qA: 21,
            pA: 22,
            oA: 23,
            nA: 24,
            wA: 25,
            xA: 26,
            bB: 27,
            JB: 28,
            uB: 29,
            nB: 30,
            vk: 31,
            CB: 32,
            IB: 33,
            oB: 35,
            xB: 36,
            EB: 37,
            GB: 38,
            zB: 39,
            BB: 40,
            tt: 41,
            Fz: 42,
            GC: 43,
            FB: 44,
            AB: 45,
            HB: 46,
            yB: 47,
            DB: 48,
            jf: 49,
            Kg: 50,
            $A: 53,
            YA: 54,
            ZA: 55,
            WA: 56,
            XA: 57,
            rC: 58,
            pC: 59,
            qC: 60,
            nC: 61,
            oC: 62,
            hf: 64,
            ie: 65,
            ke: 66,
            Uy: 69,
            Sy: 70,
            ZB: 71,
            YB: 72,
            bf: 73,
            fz: 74,
            je: 76,
            Vy: 78,
            Ty: 79,
            HC: 80,
            JC: 81,
            IC: 82,
            Hg: 83,
            kB: 85,
            jB: 86,
            ri: 87,
            gf: 88,
            Sz: 89,
            ff: 90,
            Pz: 93,
            Oz: 94,
            Tz: 96,
            hC: 97,
            Uz: 98,
            cC: 99,
            Ig: 100,
            df: 101,
            Zz: 102,
            EA: 104,
            zz: 106,
            ef: 108,
            iC: 109,
            jz: 112,
            Mz: 113,
            Lz: 114,
            iz: 115,
            kz: 116,
            hz: 117,
            gz: 118,
            ni: 119,
            mi: 120,
            pd: 128,
            bz: 130,
            dz: 133,
            Fy: 134,
            Gy: 135,
            cz: 137,
            hB: 144,
            ot: 145,
            AA: 146,
            lt: 147,
            qz: 148,
            PC: 149,
            st: 150,
            Iy: 151,
            jt: 160,
            ut: 161,
            rt: 162,
            mt: 163,
            qt: 164,
            cB: 165,
            bC: 166,
            SC: 167,
            Hy: 168,
            Jy: 169,
            Ky: 170,
            nt: 171,
            xC: 172,
            UA: 173,
            TA: 174,
            jA: 175,
            iA: 176,
            pi: 177,
            LA: 178,
            MA: 179,
            oi: 180,
            CA: 192,
            sz: 193,
            BA: 194,
            rz: 195,
            iB: 196,
            Cy: 197,
            FC: 198,
            gB: 199,
            Vz: 208,
            Wz: 209,
            Xz: 210,
            Yz: 211,
            dC: 212,
            eC: 213,
            fC: 214,
            gC: 215,
            nz: 239,
            pz: 240,
            oz: 241,
            Yn: 256,
            $n: 257,
            Zn: 258,
            wk: 259,
            Wn: 260,
            Xn: 261,
            Vn: 262,
            kt: 263
        };
    var zc = function (a, b, c) {
        for (var d = []; c = b(a, c, d);) ;
        return String.fromCharCode.apply(String, d)
    }, Ac = function (a, b, c) {
        var d = a.length, e = c.length;
        if (b >= d) return 0;
        var f = a[b++];
        c.push(f);
        if (194 > f || 244 < f) return b;
        for (var h = f & 32 ? f & 16 ? 3 : 2 : 1, f = f & 63 >> h; h--;) {
            if (b >= d) return 0;
            var k = a[b];
            if (128 != (k & 192)) return b;
            c.push(k);
            b++;
            f = f << 6 | k & 63
        }
        if (1114111 < f) return b;
        65535 < f && (f -= 65536, c[e++] = (f >> 10 & 1023) + 55296, f = (f & 1023) + 56320);
        c[e++] = f;
        c.length = e;
        return b
    }, Bc = function (a, b, c) {
        if (b + 2 > a.length) return 0;
        c.push(a[b++] | a[b++] <<
            8);
        return b
    }, Cc = function (a, b, c) {
        if (b + 2 > a.length) return 0;
        c.push(a[b++] << 8 | a[b++]);
        return b
    };
    var Dc = function (a, b) {
        this.type = a;
        this.mg = b || null
    };
    var Ec = function (a, b) {
        this.x = a;
        this.y = b
    };
    Ec.prototype.eb = function (a) {
        if (!a.Tb()) {
            var b = this.x * a.K + this.y * a.o + a.Z;
            this.x = this.x * a.u + this.y * a.C + a.Y;
            this.y = b
        }
    };
    Ec.prototype.ed = function (a) {
        if (!a.Tb()) {
            var b = a.wl();
            if (0 != b) {
                var c = this.x - a.Y, d = this.y - a.Z;
                this.x = (c * a.o - d * a.C) / b;
                this.y = (d * a.u - c * a.K) / b
            }
        }
    };
    Ec.prototype.clone = function () {
        return new Ec(this.x, this.y)
    };
    var Fc = function (a, b) {
        return Math.sqrt(a * a + b * b)
    }, Gc = function (a, b, c, d, e, f) {
        this.u = a;
        this.K = b;
        this.C = c;
        this.o = d;
        this.Y = e;
        this.Z = f
    }, Hc = new Gc(1, 0, 0, 1, 0, 0), Ic = new Gc(0, 0, 0, 0, 0, 0), Jc = new Gc(20, 0, 0, 20, 0, 0), Kc = new Gc(.05, 0, 0, .05, 0, 0), Lc = 20 / 16384 / 2, Mc = function (a, b, c, d, e, f) {
        if (0 === e && 0 === f && 0 === b && 0 === c) {
            if (1 === a && 1 === d) return Hc;
            if (.05 === a && .05 === d) return Kc;
            if (20 === a && 20 === d) return Jc
        }
        return new Gc(a, b, c, d, e, f)
    };
    g = Gc.prototype;
    g.wl = function () {
        return this.u * this.o - this.K * this.C
    };
    g.Gq = function () {
        if (this.Tb()) return this;
        var a = this.wl();
        return 0 == a ? Hc : Mc(this.o / a, -this.K / a, -this.C / a, this.u / a, (this.C * this.Z - this.o * this.Y) / a, (this.K * this.Y - this.u * this.Z) / a)
    };
    g.multiply = function (a) {
        return this.Tb() ? a : a.Tb() ? this : Mc(this.u * a.u + this.K * a.C, this.u * a.K + this.K * a.o, this.C * a.u + this.o * a.C, this.C * a.K + this.o * a.o, this.Y * a.u + this.Z * a.C + a.Y, this.Y * a.K + this.Z * a.o + a.Z)
    };
    g.Cr = function (a, b) {
        return 1 === a && 1 === b ? this : Mc(this.u * a, this.K * a, this.C * b, this.o * b, this.Y, this.Z)
    };
    g.Br = function (a, b) {
        return 1 === a && 1 === b ? this : Mc(this.u * a, this.K * b, this.C * a, this.o * b, this.Y * a, this.Z * b)
    };
    g.Jv = function () {
        return this.Tb() ? 1 : Math.sqrt(this.u * this.u + this.K * this.K)
    };
    g.Kv = function () {
        return this.Tb() ? 1 : Math.sqrt(this.C * this.C + this.o * this.o)
    };
    g.Ev = function () {
        return this.Tb() ? 1 : Math.sqrt(Math.sqrt(this.u * this.u + this.K * this.K) * Math.sqrt(this.C * this.C + this.o * this.o))
    };
    g.Zj = function (a, b) {
        return 0 === a && 0 === b ? this : Mc(this.u, this.K, this.C, this.o, this.Y + a, this.Z + b)
    };
    g.Tn = function (a, b) {
        return this.Y === a && this.Z === b ? this : Mc(this.u, this.K, this.C, this.o, a, b)
    };
    g.toString = function () {
        return "matrix(" + this.u + "," + this.K + "," + this.C + "," + this.o + "," + this.Y + "," + this.Z + ")"
    };
    g.Du = function () {
        var a = this.Jv(), b = this.Kv();
        if (!a || !b || this.Tb()) return {od: 1, af: 1, angle: 0, C: 0, o: 1};
        var c = this.u / a, d = this.K / a;
        return {od: a, af: b, angle: -Math.atan2(this.K, this.u), C: (c * this.C + d * this.o) / a, o: (c * this.o - d * this.C) / b}
    };
    g.Tb = function () {
        return this === Hc
    };
    g.oa = function (a) {
        return a === this ? !0 : !a || a.Tb() || this.Tb() ? !1 : this.u == a.u && this.K == a.K && this.C == a.C && this.o == a.o && this.Y == a.Y && this.Z == a.Z
    };
    g.Yt = function (a) {
        return a === this ? !0 : this.u == a.u && this.K == a.K && this.C == a.C && this.o == a.o
    };
    g.Fc = function (a) {
        this.Tb() || a.transform(this.u, this.K, this.C, this.o, this.Y, this.Z)
    };
    g.qm = function () {
        return (!!this.u || !!this.K) && (!!this.o || !!this.C)
    };
    var Nc = function (a, b, c, d) {
        this.r = a;
        this.Ob = b;
        this.Jb = c;
        this.$b = d
    };
    Nc.prototype.toString = function () {
        return "rgb(" + (this.r | 0) + "," + (this.Ob | 0) + "," + (this.Jb | 0) + ")"
    };
    Nc.prototype.ld = function () {
        return "rgba(" + (this.r | 0) + "," + (this.Ob | 0) + "," + (this.Jb | 0) + "," + (this.$b / .255 | 0) / 1E3 + ")"
    };
    var Qc = function (a, b) {
        var c = a | 0, d = c & 255, c = c >> 8, e = c & 255, f = l(b) ? b : 100;
        return new Nc(c >> 8 & 255, e, d, 100 > f ? 0 < f ? 2.55 * f | 0 : 0 : 255)
    };
    Nc.prototype.iw = function () {
        return 255 <= this.$b
    };
    Nc.prototype.wv = function () {
        return .3 * this.r + .6 * this.Ob + .1 * this.Jb
    };
    var Rc = function (a, b, c, d, e, f, h, k) {
        this.Eb = a;
        this.Vb = b;
        this.Cb = c;
        this.Rb = d;
        this.Ab = e;
        this.Lb = f;
        this.Ra = h;
        this.zb = k
    }, Sc = new Rc(256, 0, 256, 0, 256, 0, 256, 0);
    g = Rc.prototype;
    g.Tv = function (a) {
        return new Rc(this.Eb * a.Eb >> 8, (this.Eb * a.Vb >> 8) + this.Vb, this.Cb * a.Cb >> 8, (this.Cb * a.Rb >> 8) + this.Rb, this.Ab * a.Ab >> 8, (this.Ab * a.Lb >> 8) + this.Lb, this.Ra * a.Ra >> 8, (this.Ra * a.zb >> 8) + this.zb)
    };
    g.apply = function (a) {
        return new Nc((a.r * this.Eb >> 8) + this.Vb, (a.Ob * this.Cb >> 8) + this.Rb, (a.Jb * this.Ab >> 8) + this.Lb, Math.max(Math.min((a.$b * this.Ra >> 8) + this.zb, 255), 0))
    };
    g.oa = function (a) {
        return null != a && this.Eb == a.Eb && this.Vb == a.Vb && this.Cb == a.Cb && this.Rb == a.Rb && this.Ab == a.Ab && this.Lb == a.Lb && this.Ra == a.Ra && this.zb == a.zb
    };
    g.se = function () {
        return 0 == this.zb && (0 == this.Ra || 256 >= this.Ra && 256 == this.Eb && 0 == this.Vb && 256 == this.Cb && 0 == this.Rb && 256 == this.Ab && 0 == this.Lb)
    };
    g.Hl = function () {
        return Math.max(this.Ra, 0) / 256
    };
    g.ht = function (a) {
        return new Rc(this.Eb, this.Vb, this.Cb, this.Rb, this.Ab, this.Lb, a, this.zb)
    };
    g.lo = function () {
        return [this.Eb, 0, 0, 0, this.Vb, 0, this.Cb, 0, 0, this.Rb, 0, 0, this.Ab, 0, this.Lb, 0, 0, 0, this.Ra, this.zb]
    };
    g.dy = function () {
        return Sc.oa(this) ? "" : this.Eb + "," + this.Vb + "," + this.Cb + "," + this.Rb + "," + this.Ab + "," + this.Lb + "," + this.Ra + "," + this.zb
    };
    g.qm = function () {
        return 0 < 255 * this.Ra + this.zb
    };
    g.hw = function (a) {
        return this.oa(a) || this.se() && a.se()
    };
    var Tc = function (a, b, c, d) {
        this.j = a;
        this.l = b;
        this.F = c;
        this.H = d;
        this.xc() && this.reset()
    }, Uc = function () {
        return new Tc(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY)
    };
    g = Tc.prototype;
    g.reset = function () {
        this.l = this.j = Number.POSITIVE_INFINITY;
        this.H = this.F = Number.NEGATIVE_INFINITY
    };
    g.clone = function () {
        return new Tc(this.j, this.l, this.F, this.H)
    };
    g.expand = function (a, b) {
        this.bc(a, b, 0, 0)
    };
    g.bc = function (a, b, c, d) {
        this.j = Math.min(this.j, a - c);
        this.F = Math.max(this.F, a + c);
        this.l = Math.min(this.l, b - d);
        this.H = Math.max(this.H, b + d)
    };
    g.Ff = function () {
        this.j = Math.floor(this.j);
        this.l = Math.floor(this.l);
        this.F = Math.ceil(this.F);
        this.H = Math.ceil(this.H)
    };
    g.add = function (a) {
        this.l += a.l;
        this.H += a.H;
        this.j += a.j;
        this.F += a.F
    };
    g.zt = function (a) {
        this.l -= a.H;
        this.H -= a.l;
        this.j -= a.F;
        this.F -= a.j
    };
    g.translate = function (a, b) {
        this.j += a;
        this.l += b;
        this.F += a;
        this.H += b
    };
    g.scale = function (a, b) {
        this.j *= a;
        this.l *= b;
        this.F *= a;
        this.H *= b
    };
    g.rm = function (a) {
        if (!a.Tb() && !this.xc()) {
            var b = this.j, c = this.l, d = this.F - this.j, e = this.H - this.l, f = a.u * b + a.C * c + a.Y, b = a.K * b + a.o * c + a.Z, c = f + a.u * d, d = b + a.K * d, h = a.C * e;
            a = a.o * e;
            this.j = Math.min(f, c, f + h, c + h);
            this.F = Math.max(f, c, f + h, c + h);
            this.l = Math.min(b, d, b + a, d + a);
            this.H = Math.max(b, d, b + a, d + a)
        }
    };
    g.eb = function (a) {
        var b = this.clone();
        b.rm(a);
        return b
    };
    g.ur = function (a) {
        return this.F > a.j && a.F > this.j && this.H > a.l && a.H > this.l
    };
    g.Po = function (a) {
        return a.j >= this.j && a.F <= this.F && a.l >= this.l && a.H <= this.H
    };
    g.oa = function (a) {
        return a.j == this.j && a.F == this.F && a.l == this.l && a.H == this.H
    };
    g.contains = function (a, b) {
        return a >= this.j && a <= this.F && b >= this.l && b <= this.H
    };
    g.bh = function (a) {
        this.j = Math.min(this.j, a.j);
        this.F = Math.max(this.F, a.F);
        this.l = Math.min(this.l, a.l);
        this.H = Math.max(this.H, a.H)
    };
    g.Hh = function (a) {
        this.j = Math.max(this.j, a.j);
        this.F = Math.min(this.F, a.F);
        this.l = Math.max(this.l, a.l);
        this.H = Math.min(this.H, a.H);
        this.xc() && this.reset()
    };
    g.Vw = function (a) {
        this.j -= a;
        this.l -= a;
        this.F += a;
        this.H += a
    };
    g.xc = function () {
        return !(this.j <= this.F && this.l <= this.H)
    };
    g.Dh = function () {
        return !(this.j < this.F && this.l < this.H)
    };
    g.width = function () {
        return Math.max(this.F - this.j, 0)
    };
    g.height = function () {
        return Math.max(this.H - this.l, 0)
    };
    var Wc = function (a) {
        if (ha(a)) {
            var b = Vc(a);
            a = b();
            var c = b(), d = a + b(), b = c + b();
            return new Tc(a, c, d, b)
        }
        return new Tc(a.xmin, a.ymin, a.xmax, a.ymax)
    };
    Tc.prototype.toString = function () {
        return "" + this.j + " " + this.l + " " + this.width() + " " + this.height()
    };
    var Yc = function (a, b, c, d) {
        this.x = new Xc(a.j, a.width(), b.j, b.width(), c);
        this.y = new Xc(a.l, a.height(), b.l, b.height(), d)
    }, Xc = function (a, b, c, d, e) {
        this.Xi = Math.min(1 / e, b / (b - d));
        this.Qv = c;
        this.Ul = d;
        this.Bm = a + this.Xi * (c - a);
        this.hr = b - this.Xi * (b - d)
    };
    Xc.prototype.slice = function (a) {
        a -= this.Qv;
        return 0 > a ? this.Bm + this.Xi * a : a < this.Ul ? this.Bm + a * this.hr / this.Ul : this.Bm + this.hr + this.Xi * (a - this.Ul)
    };
    var Zc = function (a, b, c, d, e) {
        this.clip = a;
        c || (a = a.ua(), d = this.bq(d, e), this.ip = a.Y - d.x, this.jp = a.Z - d.y);
        this.Yg = b
    };
    Zc.prototype.ip = 0;
    Zc.prototype.jp = 0;
    Zc.prototype.bq = function (a, b) {
        var c = this.clip.getParent() ? this.clip.getParent().$() : Hc, d = new Ec(a, b);
        d.ed(c);
        return d
    };
    Zc.prototype.Dw = function (a, b) {
        var c = this.bq(a, b), d = c.x + this.ip, c = c.y + this.jp;
        this.Yg && (d = Math.max(Math.min(d, this.Yg.F), this.Yg.j), c = Math.max(Math.min(c, this.Yg.H), this.Yg.l));
        this.clip.setTransform(this.clip.ua().Tn(d, c))
    };
    var $c, ad, bd = document.currentScript;
    if (bd) $c = bd.src; else {
        var cd = Error().stack;
        if (cd) {
            var dd = cd.match("(\\w+://\\S+?):\\d+");
            dd && ($c = dd[1])
        } else {
            var ed = document.getElementsByTagName("script");
            0 != ed.length && ($c = ed[ed.length - 1].src)
        }
    }
    $c && (dd = $c.match("^(.*/)([^/]+)(/[^/]+)_main.js$")) && (ad = dd[1] + "v7.4.1" + dd[3] + ".js");
    if (ad) {
        var fd = ad;
        jc.wh().init(fd, void 0)
    }
    var hd = function (a, b) {
        gd(a) ? jc.wh().Wr("as3", "swiffy.vm.as3.VM", b) : jc.wh().Wr("as2", "swiffy.vm.as2.VM", b)
    };
    var id = function () {
        this.y = this.x = 0;
        this.np = !1;
        this.Dc = !0;
        this.ep = "auto";
        this.ap = ""
    }, jd = {arrow: "default", auto: "", button: "pointer", hand: "move", ibeam: "text"};
    g = id.prototype;
    g.hk = function (a) {
        this.np = a
    };
    g.Zv = function () {
        return this.np
    };
    g.un = function (a) {
        var b = new Ec(this.x, this.y);
        b.ed(a);
        return b.x
    };
    g.vn = function (a) {
        var b = new Ec(this.x, this.y);
        b.ed(a);
        return b.y
    };
    g.jj = function (a) {
        var b = this.Dc;
        this.Dc = a;
        return b
    };
    g.ky = function (a) {
        var b = jd[a];
        if (!l(b)) return !1;
        this.ep = a;
        this.ap = b;
        return !0
    };
    g.Nf = function () {
        return this.ep
    };
    g.hv = function () {
        return this.Dc ? this.ap : "none"
    };
    var ld = function (a) {
        this.gp = a || ":" + (kd++).toString(36)
    }, kd = 0, md = new ld, nd = {};
    ld.prototype.Ow = 0;
    ld.prototype.Gl = function () {
        return this.gp + "-" + (this.Ow++).toString(36)
    };
    var od = function (a, b) {
        this.ha = a;
        this.xe = [];
        this.wm = !1;
        this.Ij = null;
        this.Ts = 0;
        this.Tf = !1;
        this.hy = b;
        this.It = "createTouch" in document && 0 <= b
    };
    g = od.prototype;
    g.ry = function () {
        if (this.It) {
            Hb(this.ha.Da, "touchstart", this.jy, !1, this);
            Hb(this.ha.Da, "touchmove", this.gy, !1, this);
            Hb(this.ha.Da, "touchend", this.fy, !1, this);
            var a = Hb(document, "touchstart", this.iy, !1, this);
            this.xe.push(a);
            a = Hb(document, "touchend", this.ey, !1, this);
            this.xe.push(a)
        }
        Hb(this.ha.Da, "mousemove", this.Cw, !1, this);
        Hb(this.ha.Da, "mousedown", this.Aw, !1, this);
        Hb(this.ha.Da, "mouseup", this.Hw, !1, this);
        Hb(this.ha.Da, "mouseout", this.Ew, !1, this);
        Hb(this.ha.Da, "contextmenu", pd, !1);
        Hb(this.ha.Da, "mouseover",
            pd, !1);
        a = Hb(document, "mousedown", this.zw, !1, this);
        this.xe.push(a);
        a = Hb(document, "mouseup", this.Gw, !1, this);
        this.xe.push(a);
        a = Hb(document, "mouseover", this.Bw, !1, this);
        this.xe.push(a)
    };
    g.ly = function () {
        for (var a = 0; a < this.xe.length; a++) Qb(this.xe[a])
    };
    g.jy = function (a) {
        a.stopPropagation();
        this.Sh(a);
        var b = a.Mb.touches, c = a.Mb.changedTouches;
        this.Tf || 1 != b.length || 1 != c.length ? (this.Tf = !0, this.Lk(a)) : (this.Ij = qd(a), this.ha.Se(this.Pf(a)), this.ha.kr())
    };
    g.gy = function (a) {
        a.stopPropagation();
        this.Sh(a);
        this.Tf || (a = this.Pf(a), this.ha.Se(a))
    };
    g.fy = function (a) {
        a.stopPropagation();
        this.Sh(a);
        var b = a.Mb.changedTouches;
        0 != a.Mb.touches.length || 1 != b.length || this.Tf || this.Lw(a) || this.ha.pr();
        this.Lk(a)
    };
    g.iy = function (a) {
        a.stopPropagation();
        this.Sh(a);
        this.ha.mr();
        this.Tf = !0
    };
    g.ey = function (a) {
        a.stopPropagation();
        this.Sh(a);
        this.Lk(a);
        this.ha.qr()
    };
    g.Lk = function (a) {
        this.ha.Se(new Ec(-1, -1), null);
        this.wm = !1;
        0 == a.Mb.touches.length && (this.Tf = !1)
    };
    g.Cw = function (a) {
        a.stopPropagation();
        this.ne(a) && this.ha.Se(this.Pf(a))
    };
    g.Aw = function (a) {
        a.stopPropagation();
        this.ne(a) && (this.ha.Se(this.Pf(a)), this.ha.kr())
    };
    g.Hw = function (a) {
        a.stopPropagation();
        this.ne(a) && this.ha.pr()
    };
    g.Ew = function (a) {
        a.stopPropagation();
        this.ne(a) && this.ha.Se(this.Pf(a), null)
    };
    g.zw = function (a) {
        a.stopPropagation();
        this.ne(a) && this.ha.mr()
    };
    g.Gw = function (a) {
        a.stopPropagation();
        this.ne(a) && this.ha.qr()
    };
    g.Bw = function (a) {
        a.stopPropagation();
        this.ne(a) && this.ha.Se(this.Pf(a), null)
    };
    g.Sh = function () {
        this.Ts = pa() + 1E3
    };
    g.ne = function (a) {
        return pa() < this.Ts ? !1 : 2 != a.button
    };
    g.Lw = function (a) {
        var b = qd(a);
        if (!this.Ij) return !0;
        a = b.x - this.Ij.x;
        var b = b.y - this.Ij.y, c = this.hy;
        return a * a + b * b > c * c ? !0 : !1
    };
    var qd = function (a) {
        var b = a.Mb.touches, c = a.Mb.changedTouches;
        b && 1 == b.length ? a = b[0] : c && 1 == c.length && (a = c[0]);
        return new Ec(a.clientX, a.clientY)
    };
    od.prototype.Pf = function (a) {
        a = qd(a);
        var b = this.ha.Td.getBoundingClientRect();
        this.wm = a.x >= b.left && a.x < b.right && a.y >= b.top && a.y < b.bottom;
        a = new Ec(a.x - b.left, a.y - b.top);
        a.ed(this.ha.W.mk);
        return a
    };
    var pd = function (a) {
        a.stopPropagation();
        return !1
    };
    var rd = function (a) {
        if (9 > a.length) return !1;
        for (var b = 0; 9 > b; ++b) if ("__swiffy_".charCodeAt(b) != a.charCodeAt(b)) return !1;
        return !0
    };
    var sd = window != window.top, td = -1 != navigator.userAgent.indexOf("iPad") || sc.test(navigator.userAgent), ud = "devicePixelRatio" in window ? function () {
            return window.devicePixelRatio
        } : "screen" in window && "deviceXDPI" in window.screen && "logicalXDPI" in window.screen ? function () {
            return window.screen.deviceXDPI / window.screen.logicalXDPI
        } : function () {
            return 1
        }, vd = function (a) {
            return window.setTimeout(function () {
                a.call(window, Date.now())
            }, 1E3 / 60)
        }, wd = function (a) {
            window.clearTimeout(a)
        }, xd = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null,
        yd = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || null, zd;
    if (zd = -1 != navigator.userAgent.indexOf("iPad") || sc.test(navigator.userAgent)) {
        var Ad = vc.exec(navigator.userAgent) || [];
        Ad.shift();
        zd = tc.apply(null, Ad) < tc(7)
    }
    var Bd = zd ? vd : xd ? oa(xd, window) : vd, Cd = Bd !== vd && yd ? oa(yd, window) : wd, Dd = document.createElement("canvas");
    Dd.width = 1;
    Dd.height = 1;
    var Ed = Dd.getContext("2d"), Fd = Ed.createImageData(1, 1);
    Fd.data[0] = 127;
    Fd.data[3] = 127;
    Ed.putImageData(Fd, 0, 0);
    var Gd = 255 == Ed.getImageData(0, 0, 1, 1).data[0], Hd = function (a, b, c, d) {
        a.putImageData(b, c, d)
    }, Id = function (a, b, c, d) {
        for (var e = b.data, f = e.length; 0 < f;) {
            var h = e[--f] + 1;
            e[--f] = e[f] * h >> 8;
            e[--f] = e[f] * h >> 8;
            e[--f] = e[f] * h >> 8
        }
        a.putImageData(b, c, d)
    }, Jd = Gd ? Id : Hd;
    var Kd = function () {
        this.Qi = [];
        this.mm = {}
    }, Ld = function (a, b) {
        this.id = a;
        this.jh = b
    };
    Ld.prototype.bm = function () {
        return !!this.jh
    };
    Ld.prototype.get = function () {
        return this.jh
    };
    Kd.prototype.Be = function (a) {
        var b = this.Qi[a];
        b || (b = new Ld(a, null), this.Qi[a] = b);
        return b
    };
    Kd.prototype.iv = function (a, b) {
        var c = this.Qi[a], c = c && c.jh;
        return c instanceof b ? c : null
    };
    Kd.prototype.Fr = function (a) {
        this.Be(a.id).jh = a
    };
    Kd.prototype.iu = function (a, b) {
        for (var c = this.Qi, d = 0; d < c.length; d++) c[d] && c[d].jh && c[d].get().ud(a);
        b && a.qf(b)
    };
    var Md = function () {
        this.zm = !0;
        this.vj = [];
        this.Nj = []
    };
    Md.prototype.add = function (a) {
        this.Nj.push(a)
    };
    Md.prototype.xk = function (a) {
        this.vj.push(a)
    };
    Md.prototype.flush = function () {
        if (this.zm) {
            this.zm = !1;
            for (var a = 0, b = 0; ;) if (a < this.vj.length) this.vj[a++](); else if (b < this.Nj.length) this.Nj[b++](); else {
                this.vj = [];
                this.Nj = [];
                this.zm = !0;
                break
            }
        }
    };
    var Nd = RegExp("^[A-Z_a-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c-\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd][A-Z_a-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c-\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd.0-9\u00b7\u0300-\u036f\u203f-\u2040-]*$"),
        Od = function (a) {
            if (null != a && (a = String(a), a.match(Nd))) return a
        }, Pd = {
            "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&apos;", "\t": "&#x9;",
            "\n": "&#xA;", "\r": "&#xD;"
        }, Qd = function (a) {
            return Pd[a] || a
        }, Rd = function (a) {
            return String(a).replace(/[<>&]/g, Qd)
        }, Sd = function (a) {
            return String(a).replace(/[<&"\t\n\r]/g, Qd)
        }, Td = {}, Ud;
    for (Ud in Pd) Td[Pd[Ud]] = Ud;
    var Vd = "&nbsp; &iexcl; &cent; &pound; &curren; &yen; &brvbar; &sect; &uml; &copy; &ordf; &laquo; &not; &shy; &reg; &macr; &deg; &plusmn; &sup2; &sup3; &acute; &micro; &para; &middot; &cedil; &sup1; &ordm; &raquo; &frac14; &frac12; &frac34; &iquest; &Agrave; &Aacute; &Acirc; &Atilde; &Auml; &Aring; &AElig; &Ccedil; &Egrave; &Eacute; &Ecirc; &Euml; &Igrave; &Iacute; &Icirc; &Iuml; &ETH; &Ntilde; &Ograve; &Oacute; &Ocirc; &Otilde; &Ouml; &times; &Oslash; &Ugrave; &Uacute; &Ucirc; &Uuml; &Yacute; &THORN; &szlig; &agrave; &aacute; &acirc; &atilde; &auml; &aring; &aelig; &ccedil; &egrave; &eacute; &ecirc; &euml; &igrave; &iacute; &icirc; &iuml; &eth; &ntilde; &ograve; &oacute; &ocirc; &otilde; &ouml; &divide; &oslash; &ugrave; &uacute; &ucirc; &uuml; &yacute; &thorn; &yuml;".split(" "),
        Wd =
            {}, Xd;
    for (Xd in Td) Wd[Xd] = Td[Xd];
    for (var Yd = 0; Yd < Vd.length; ++Yd) Wd[Vd[Yd]] = String.fromCharCode(Yd + 160);
    var Zd = function (a, b, c, d) {
        this.Zb = a;
        this.Ba = 0;
        this.Rv = b;
        this.Xw = c;
        this.Xu = d ? Wd : Td;
        this.next = this.$g
    };
    g = Zd.prototype;
    g.Ss = function () {
        this.next = this.Ss;
        return null
    };
    g.uc = function (a) {
        this.next = function () {
            throw this.uc(a);
        };
        throw new $d(a);
    };
    g.Zs = function (a) {
        var b = this.Xu;
        return a.replace(/&(#?)([^\s]+?);/g, function (a, d, e) {
            return d && (d = Number("0" + e), d === d) ? String.fromCharCode(d) : b[a] || a
        })
    };
    g.$g = function () {
        var a = this.wj("<"), b;
        0 > a ? (b = this.Zb.substring(this.Ba), this.next = this.Ss) : (b = this.Zb.substring(this.Ba, a), this.Ba = a, this.next = this.vw);
        this.Rv && (b = b.trim());
        return b ? (b = this.Zs(b), {type: "text", value: b}) : this.next()
    };
    g.vw = function () {
        var a = this.ii("<![CDATA[", "]]\x3e", !1, "cdata");
        if (a || (a = this.ii("\x3c!--", "--\x3e", !1, "comment")) || (a = this.ii("<!DOCTYPE", ">", !0, "doctype")) || (a = this.ii("<?XML", "?>", !0, "xml_declaration")) || !this.Xw && (a = this.ii("<?", "?>", !1, "processing_instruction"))) return a;
        if ("/" == this.Zb.charAt(this.Ba + 1)) return this.next = this.$g, {type: "close", value: this.ou()};
        for (a = {type: "tag", value: this.pu(), attributes: []}; ;) {
            this.Oo();
            if (this.aw()) throw this.uc("tag");
            if (this.wn(">")) {
                this.next = this.$g;
                break
            }
            if (this.wn("/>")) {
                this.next =
                    this.zu(a.value);
                break
            }
            a.attributes.push({name: this.mu(), value: this.nu()})
        }
        return a
    };
    g.zu = function (a) {
        return function () {
            this.next = this.$g;
            return {type: "close", value: a}
        }
    };
    g.wj = function (a) {
        return this.Zb.indexOf(a, this.Ba)
    };
    g.aw = function () {
        return this.Ba >= this.Zb.length
    };
    g.wn = function (a) {
        return this.Zb.substr(this.Ba, a.length).toUpperCase() == a ? (this.Ba += a.length, !0) : !1
    };
    g.Oo = function () {
        for (var a = this.Zb; this.Ba < a.length; this.Ba++) switch (a.charAt(this.Ba)) {
            case " ":
            case "\t":
            case "\r":
            case "\n":
                break;
            default:
                return
        }
    };
    g.ii = function (a, b, c, d) {
        var e = this.Ba;
        if (!this.wn(a)) return null;
        a = this.wj(b);
        if (0 > a) throw this.uc(d);
        c = c ? this.Zb.substring(e, a + b.length) : this.Zb.substring(this.Ba, a);
        this.Ba = a + b.length;
        this.next = this.$g;
        return {type: d, value: c}
    };
    g.pu = function () {
        for (var a = this.Zb, b = this.Ba + 1, c = b; c < a.length; c++) switch (a.charAt(c)) {
            case "/":
                if (">" != a.charAt(c + 1)) break;
            case " ":
            case "\t":
            case "\r":
            case "\n":
            case ">":
                if (c == b) throw this.uc("tag");
                this.Ba = c;
                return a.substring(b, c)
        }
        throw this.uc("tag");
    };
    g.ou = function () {
        for (var a = this.Zb, b = this.Ba + 2, c = !1, d = b; d < a.length; d++) switch (a.charAt(d)) {
            case " ":
            case "\t":
            case "\r":
            case "\n":
                c = !0;
                break;
            case ">":
                if (d == b) throw this.uc("close");
                this.Ba = d + 1;
                return a.substring(b, d).trim();
            default:
                if (c) throw this.uc("close");
        }
        throw this.uc("close");
    };
    g.mu = function () {
        var a = this.wj(">");
        if (0 > a) throw this.uc("tag");
        var b = this.wj("="), c = this.Ba;
        if (0 > b || b == c || b > a) throw this.uc("attribute");
        this.Ba = b + 1;
        return this.Zb.substring(c, b).trim()
    };
    g.nu = function () {
        this.Oo();
        var a = this.Zb, b = this.Ba, c = a.charAt(b++);
        if ('"' == c || "'" == c) for (var d = b; d < a.length; d++) if (a.charAt(d) == c) return this.Ba = d + 1, this.Zs(a.substring(b, d));
        throw this.uc("attribute");
    };
    var $d = function (a) {
        this.type = a
    };
    var ae = function (a) {
        this.sd = this.Nd = this.Aa = null;
        this.yg = 0;
        this.s = a || null;
        this.Oh = []
    };
    g = ae.prototype;
    g.bj = function (a) {
        if (this.sd && a == this.sd.depth) return this.sd;
        if (!this.Aa || this.Aa.depth > a) return this.sd = null;
        for (var b = this.Aa; b.nextSibling && !(b.nextSibling.depth >= a);) b = b.nextSibling;
        b.nextSibling && b.nextSibling.depth == a && (b = b.nextSibling);
        return this.sd = b
    };
    g.Xj = function (a, b) {
        this.Cq(a, this.bj(b));
        a.depth = b
    };
    g.Cq = function (a, b) {
        b ? (b.nextSibling ? b.nextSibling.lc = a : this.Nd = a, a.lc = b, a.nextSibling = b.nextSibling, b.nextSibling = a) : (this.Aa && (this.Aa.lc = a, a.nextSibling = this.Aa), this.Aa = a, this.Nd || (this.Nd = a));
        a.jc || ++this.yg
    };
    g.ng = function (a) {
        this.sd === a && (this.sd = this.sd.nextSibling);
        a.lc ? a.lc.nextSibling = a.nextSibling : this.Aa = a.nextSibling;
        a.nextSibling ? a.nextSibling.lc = a.lc : this.Nd = a.lc;
        a.nextSibling = null;
        a.lc = null;
        a.depth = void 0;
        a.jc || --this.yg
    };
    g.Km = function (a, b) {
        this.Xj(a, b);
        be(this.s, a)
    };
    g.Qr = function (a) {
        return (a = this.Ic(a)) ? this.Pm(a) : null
    };
    g.Pm = function (a) {
        this.ng(a);
        a.Ov(5) ? this.Oh.push(a) : this.hl(a);
        return a
    };
    g.Ic = function (a) {
        var b = this.bj(a);
        return b && b.depth == a ? b : null
    };
    g.forEach = function (a) {
        for (var b = this.Aa; b;) {
            if (a(b)) return !0;
            b = b.nextSibling
        }
        return !1
    };
    g.Sp = function (a) {
        for (var b = this.Aa; b;) {
            if (b.getName() == a) return b;
            b = b.nextSibling
        }
        return null
    };
    g.yv = function () {
        return this.Nd ? Math.max(0, this.Nd.depth + 1) : 0
    };
    g.hl = function (a) {
        ce(this.s, a);
        a.Ia();
        a.depth = void 0
    };
    g.Ia = function () {
        for (; this.Aa;) {
            var a = this.Aa;
            this.ng(a);
            this.hl(a)
        }
    };
    g.he = function () {
        for (var a = this.Aa; a;) a.he(), a = a.nextSibling
    };
    g.Ju = function () {
        if (0 < this.Oh.length) {
            for (var a = 0; a < this.Oh.length; a++) this.hl(this.Oh[a]);
            this.Oh = []
        }
    };
    g.Ht = function (a) {
        this.s = a.s;
        for (a = this.Aa; a;) be(this.s, a), a = a.nextSibling
    };
    g.Nk = function (a, b) {
        this.s && (ce(this.s, a), b && be(this.s, a, b))
    };
    g.ln = function (a, b) {
        if (b < a) {
            var c = a;
            a = b;
            b = c
        }
        var c = this.bj(a), d = this.bj(b);
        c && c.depth == a ? this.ng(c) : c = null;
        d && d.depth == b ? this.ng(d) : d = null;
        c && this.Xj(c, b);
        d && this.Xj(d, a)
    };
    g.Jw = function (a) {
        var b = Math.min(-16384, this.Aa.depth) - 1;
        this.ng(a);
        this.Xj(a, b)
    };
    g.Ae = function () {
        return this.yg
    };
    g.ze = function (a) {
        if (0 > a || a >= this.yg) return null;
        if (a <= this.yg - a) {
            for (var b = this.Aa; 1 <= a;) b = b.nextSibling, b.jc || --a;
            for (; b.jc;) b = b.nextSibling
        } else {
            b = this.Nd;
            for (a = this.yg - 1 - a; 1 <= a;) b = b.lc, b.jc || --a;
            for (; b.jc;) b = b.lc
        }
        return b
    };
    g.Lf = function (a) {
        for (var b = 0, c = this.Aa; c; c = c.nextSibling) {
            if (c === a) return b;
            c.jc || ++b
        }
        return -1
    };
    g.Ne = function (a, b) {
        var c = this.ze(b - 1);
        a.depth = NaN;
        this.Cq(a, c)
    };
    g.Uh = function (a) {
        this.ng(a)
    };
    var be = function (a, b, c) {
        if (a && (c = l(c) ? c : b.getName())) {
            var d = b.i.ca();
            b = b.pa() ? b.s : a;
            d.To(a, c, b)
        }
    }, ce = function (a, b) {
        if (a) {
            var c = b.getName();
            if (c) {
                var d = b.i.ca(), e = b.pa() ? b.s : a;
                d.Rr(a, c, e)
            }
        }
    };
    ae.prototype.om = function (a) {
        var b = Uc();
        this.forEach(function (c) {
            b.bh(a(c).eb(c.ua()));
            return !1
        });
        return b
    };
    ae.prototype.Un = function (a) {
        var b = Uc();
        this.forEach(function (c) {
            b.bh(a(c));
            return !1
        });
        return b
    };
    var ge = function (a, b) {
        if (this.yl()) return Function("return (" + a + ")(" + b.join(",") + ");")()
    }, he = function () {
        return !0
    }, je = function (a, b, c, d) {
        var e = r.i.yl();
        if (!e) return !1;
        var f = e[a];
        if (!f || f.__swiffy_external) c ? (f = function () {
            try {
                for (var a = [], e = 0; e < arguments.length; ++e) a.push(ie(arguments[e]));
                var f = c.apply(b, a);
                return ie(f)
            } catch (q) {
                return d ? d(q) : null
            }
        }, Object.defineProperty(f, "__swiffy_external", {value: !0}), e[a] = f) : delete e[a];
        return !0
    }, le = function (a, b, c) {
        var d = a.yl();
        (d = d && d.id) && null != c && ke(a, "window[" +
            Ba(d + "_DoFSCommand") + "]", [b, c])
    }, ke = function (a, b, c, d) {
        try {
            var e = a.Bp(b, c.map(me));
            return ie(e)
        } catch (f) {
            if (d) return d(f)
        }
    }, me = function (a) {
        switch (ea(a)) {
            case "undefined":
            case "null":
            case "boolean":
            case "number":
                return String(a);
            case "string":
                return Ba(a);
            case "array":
                return "[" + a.map(me) + "]";
            case "object":
                if (a instanceof Date) return "new Date(" + a.getTime() + ")";
                var b = [], c;
                for (c in a) b.push(Ba(c) + ":" + me(a[c]));
                return "{" + b.join(",") + "}";
            default:
                return "null"
        }
    }, ie = function (a) {
        switch (ea(a)) {
            case "undefined":
            case "null":
            case "boolean":
            case "number":
            case "string":
                return a;
            case "array":
                return a.map(ie);
            case "object":
                if (a instanceof Date) return new Date(a.getTime());
                var b = [], c;
                for (c in a) b[c] = ie(a[c]);
                return b;
            default:
                return null
        }
    };
    var ne = function (a) {
        this.hs = a || null;
        this.Ec = null;
        this.Zc = this.Yc = 0;
        this.Sc = null;
        this.Xq = "";
        this.Fm = {};
        this.Wq = this.contentType = this.content = null
    };
    ne.prototype.vv = function () {
        return this.Xq || this.Sc || ""
    };
    ne.prototype.Jx = function (a) {
        this.Xq = a
    };
    ne.prototype.xg = function (a) {
        this.Sc = a
    };
    ne.prototype.reset = function () {
        this.Ec = null;
        this.Zc = this.Yc = 0;
        this.Sc = null;
        this.Fm = {};
        this.contentType = this.content = null
    };
    var oe = function (a, b) {
        Object.defineProperty(a, "__swiffy_v", {value: b})
    }, x = function (a) {
        return a.__swiffy_v
    };
    var pe = function () {
    };
    pe.prototype.vd = function () {
        var a = new qe[this.type];
        a.zc(this);
        return a
    };
    pe.prototype.oa = function (a) {
        return a && this.type == a.type
    };
    pe.prototype.ym = function () {
        return !1
    };
    pe.prototype.ta = function () {
        return new Tc(0, 0, 0, 0)
    };
    var qe = [], re = function (a, b) {
        b.prototype.type = a;
        qe[a] = b
    }, se = function (a) {
        if (a) {
            for (var b = [], c = 0; c < a.length; ++c) {
                var d = a[c], e = qe[d.type];
                e && (e = new e, e.Ac(d), b.push(e))
            }
            return b
        }
    }, te = function (a, b) {
        oe(a.prototype, {Cp: b})
    }, ue = function (a, b) {
        for (var c = [], d = 0; d < a.length; ++d) {
            var e, f = (e = a[d]) && x(e);
            if (e = f instanceof pe ? f : f && f.Cp ? f.Cp.call(e) : null) c.push(e); else if (b) return null
        }
        return c
    };
    var ve = function () {
        this.matrix = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
    };
    m(ve, pe);
    re(3, ve);
    g = ve.prototype;
    g.Ac = function (a) {
        this.matrix = a.matrix
    };
    g.zc = function (a) {
        this.matrix = a.matrix.slice()
    };
    g.Na = function (a) {
        this.matrix = a.matrix.slice()
    };
    g.oa = function (a) {
        return ve.J.oa.call(this, a) && Oa(this.matrix, a.matrix)
    };
    g.accept = function (a) {
        a.Hn(this)
    };
    var we = function () {
        return x(this).matrix.slice()
    }, xe = function (a) {
        if (fa(a)) for (var b = x(this).matrix, c = a.length, d = 0; 20 > d; ++d) b[d] = d < c ? +a[d] : 0
    };
    var ye = function () {
        this.bias = 0;
        this.clamp = !0;
        this.color = 0;
        this.divisor = 1;
        this.matrix = [];
        this.matrixY = this.matrixX = 0;
        this.preserveAlpha = !0
    };
    m(ye, pe);
    re(5, ye);
    g = ye.prototype;
    g.Ac = function (a) {
        this.bias = a.bias;
        this.clamp = a.clamp;
        this.color = a.color;
        this.divisor = a.divisor;
        this.matrix = a.matrix;
        this.matrixX = a.matrixX;
        this.matrixY = a.matrixY;
        this.preserveAlpha = a.preserveAlpha
    };
    g.zc = function (a) {
        this.bias = a.bias;
        this.clamp = a.clamp;
        this.color = a.color;
        this.divisor = a.divisor;
        this.matrix = a.matrix.slice();
        this.matrixX = a.matrixX;
        this.matrixY = a.matrixY;
        this.preserveAlpha = a.preserveAlpha
    };
    g.Na = function (a) {
        this.bias = a.bias;
        this.clamp = a.clamp;
        this.color = a.color | (255 * a.alpha | 0) << 24;
        this.divisor = a.divisor;
        this.matrix = a.matrix.slice();
        this.matrixX = a.matrixX;
        this.matrixY = a.matrixY;
        this.preserveAlpha = a.preserveAlpha
    };
    g.oa = function (a) {
        return ye.J.oa.call(this, a) && this.bias == a.bias && this.clamp == a.clamp && this.color == a.color && this.divisor == a.divisor && Oa(this.matrix, a.matrix) && this.matrixX == a.matrixX && this.matrixY == a.matrixY && this.preserveAlpha == a.preserveAlpha
    };
    g.accept = function (a) {
        a.In(this)
    };
    var ze = function () {
            return x(this).matrixX
        }, Be = function (a) {
            var b = x(this);
            b.matrixX = Math.max(a | 0, 0);
            Ae.call(this, b.matrix)
        }, Ce = function () {
            return x(this).matrixY
        }, De = function (a) {
            var b = x(this);
            b.matrixY = Math.max(a | 0, 0);
            Ae.call(this, b.matrix)
        }, Ee = function () {
            return x(this).matrix
        }, Ae = function (a, b) {
            if (fa(a)) {
                for (var c = x(this), d = c.matrixX * c.matrixY, c = c.matrix, e = a.length, f = 0; f < d; ++f) c[f] = f < e ? +a[f] : 0;
                b && (c.length = d)
            }
        }, Fe = function () {
            return x(this).divisor
        }, Ge = function (a) {
            x(this).divisor = +a
        }, He = function () {
            return x(this).bias
        },
        Ie = function (a) {
            x(this).bias = +a
        }, Je = function () {
            return x(this).preserveAlpha
        }, Ke = function (a) {
            x(this).preserveAlpha = !!a
        }, Le = function () {
            return x(this).clamp
        }, Me = function (a) {
            x(this).clamp = !!a
        }, Ne = function () {
            return x(this).color & 16777215
        }, Oe = function (a) {
            var b = x(this);
            b.color = b.color & 4278190080 | a & 16777215
        }, Pe = function () {
            return (x(this).color >>> 24) / 255
        }, Qe = function (a) {
            var b = x(this);
            b.color = b.color & 16777215 | Math.max(0, Math.min(255 * a, 255)) << 24
        }, Re = function (a, b, c, d, e, f, h, k, n, q) {
            oe(a, new ye);
            Be.call(a, y(b, 0));
            De.call(a, y(c, 0));
            Ae.call(a, y(d, []), !0);
            Ge.call(a, y(e, 1));
            Ie.call(a, y(f, 0));
            Ke.call(a, y(h, !0));
            Me.call(a, y(k, !0));
            Oe.call(a, y(n, 0));
            Qe.call(a, y(q, 0))
        };
    var Se = function () {
        this.yc = 1;
        this.ee = this.Rd = 0;
        this.volume = this.Pc = 1
    };
    Se.prototype.wd = function (a) {
        this.yc = a.yc;
        this.Rd = a.Rd;
        this.ee = a.ee;
        this.Pc = a.Pc;
        this.volume = a.volume
    };
    var Te = function () {
        this.Ms = [];
        this.nf = [];
        this.ib = new Se
    };
    g = Te.prototype;
    g.nx = function (a) {
        this.Ms[a.id] = a
    };
    g.Uk = function (a, b, c, d, e) {
        var f = new Audio(a.sound), h = new Ue(this, b, a, f);
        this.nf.push(h);
        var k = function () {
            f.currentTime = d / 1E3;
            f.play()
        };
        Ob(f, "canplaythrough", k);
        Hb(f, "ended", function () {
            0 < --e ? k() : (h.remove(), ka(c) && c())
        });
        return h
    };
    g.Qs = function (a, b) {
        var c = this.Ms[a];
        c && this.Uk(c, b, null, 0, 0)
    };
    g.jn = function (a, b) {
        var c = this.nf;
        a = a || this.ib;
        for (var d = c.length - 1; 0 <= d; d--) {
            var e = c[d];
            b ? e.bi === b && e.ib === a && e.remove() : this.ib !== a && e.ib !== a || e.remove()
        }
    };
    g.ci = function () {
        for (var a = 0; a < this.nf.length; a++) this.nf[a].ci()
    };
    var Ue = function (a, b, c, d) {
        this.bn = a;
        this.ib = b;
        this.bi = c;
        this.Tl = d;
        this.ci()
    };
    Ue.prototype.remove = function () {
        this.Tl.pause();
        Rb(this.Tl);
        this.bn.nf.splice(this.bn.nf.indexOf(this), 1)
    };
    Ue.prototype.ci = function () {
        var a = this.bn.ib, b = a.volume;
        this.ib !== a && (b *= this.ib.volume);
        this.Tl.volume = 0 > b ? 0 : 1 < b ? 1 : b
    };
    var Ve = function (a, b, c) {
        this.i = a;
        this.definition = b;
        this.s = c || this.la();
        this.s.__swiffy_d = this;
        this.s.__swiffy_child_ref = {}
    };
    Ve.prototype.ka = function (a, b) {
        this.i.ca().ka(this, a, b)
    };
    Ve.prototype.Zg = function () {
    };
    Ve.prototype.If = function () {
    };
    var z = function (a) {
        return a.__swiffy_d
    };
    var We = function (a, b, c) {
        Ve.call(this, b, a, c)
    };
    m(We, Ve);
    var Xe = function () {
        this.color = this.bold = this.Oa = null;
        this.$e = !1;
        this.letterSpacing = this.Ub = this.leading = this.leftMargin = this.rightMargin = this.indent = this.target = this.url = this.Ws = this.wo = this.yb = this.Sa = this.size = this.italic = this.font = null
    }, Ye = function () {
        var a = new Xe;
        a.bold = !1;
        a.italic = !1;
        a.yb = !1;
        a.font = "_serif";
        a.color = 0;
        a.size = 240;
        a.indent = 0;
        a.Sa = 0;
        a.rightMargin = 0;
        a.leftMargin = 0;
        a.leading = 0;
        a.Oa = 0;
        a.Ub = !1;
        a.letterSpacing = 0;
        return a
    }, $e = function (a) {
        var b = Ye(), c = a.font && a.font.get();
        c instanceof Ze &&
        (b.font = c);
        l(a.color) && (b.color = 16777215 & a.color);
        l(a.height) && (b.size = a.height);
        l(a.indent) && (b.indent = a.indent);
        l(a.align) && (b.Oa = a.align);
        l(a.leftMargin) && (b.leftMargin = a.leftMargin);
        l(a.rightMargin) && (b.rightMargin = a.rightMargin);
        l(a.leading) && (b.leading = a.leading);
        return b
    }, af = function (a) {
        var b = new Xe;
        b.color = a;
        b.$e = !0;
        return b
    };
    g = Xe.prototype;
    g.wd = function (a) {
        this.$e = a.$e;
        null != a.color && (this.color = a.color, this.$e = !0);
        this.bold = null != a.bold ? a.bold : this.bold;
        this.font = null != a.font ? a.font : this.font;
        this.italic = null != a.italic ? a.italic : this.italic;
        this.size = null != a.size ? a.size : this.size;
        this.yb = null != a.yb ? a.yb : this.yb;
        this.Oa = null != a.Oa ? a.Oa : this.Oa;
        this.target = null != a.target ? a.target : this.target;
        this.url = null != a.url ? a.url : this.url;
        this.indent = null != a.indent ? a.indent : this.indent;
        this.Sa = null != a.Sa ? a.Sa : this.Sa;
        this.rightMargin = null != a.rightMargin ?
            a.rightMargin : this.rightMargin;
        this.leftMargin = null != a.leftMargin ? a.leftMargin : this.leftMargin;
        this.leading = null != a.leading ? a.leading : this.leading;
        this.Ub = null != a.Ub ? a.Ub : this.Ub;
        this.letterSpacing = null != a.letterSpacing ? a.letterSpacing : this.letterSpacing
    };
    g.Ch = function () {
        return !!this.font && this.font instanceof Ze
    };
    g.Rl = function () {
        return !!this.font && this.font instanceof Ze && (0 < this.font.glyphs.length || this.font == bf)
    };
    g.Tp = function () {
        return this.font instanceof Ze && (0 < this.font.glyphs.length || this.font == bf) ? this.font : null
    };
    g.clone = function () {
        var a = new Xe;
        a.bold = this.bold;
        a.color = this.color;
        a.font = this.font;
        a.italic = this.italic;
        a.size = this.size;
        a.yb = this.yb;
        a.$e = this.$e;
        a.Oa = this.Oa;
        a.url = this.url;
        a.target = this.target;
        a.indent = this.indent;
        a.Sa = this.Sa;
        a.rightMargin = this.rightMargin;
        a.leftMargin = this.leftMargin;
        a.leading = this.leading;
        a.Ub = this.Ub;
        a.letterSpacing = this.letterSpacing;
        return a
    };
    g.yw = function (a) {
        this.bold = this.bold == a.bold ? this.bold : null;
        this.color = this.color == a.color ? this.color : null;
        this.font = this.font == a.font ? this.font : null;
        this.italic = this.italic == a.italic ? this.italic : null;
        this.size = this.size == a.size ? this.size : null;
        this.yb = this.yb == a.yb ? this.yb : null;
        this.Oa = this.Oa == a.Oa ? this.Oa : null;
        this.url = this.url == a.url ? this.url : null;
        this.target = this.target == a.target ? this.target : null;
        this.Ub = this.Ub == a.Ub ? this.Ub : null;
        this.indent = this.indent == a.indent ? this.indent : null;
        this.Sa = this.Sa ==
        a.Sa ? this.Sa : null;
        this.rightMargin = this.rightMargin == a.rightMargin ? this.rightMargin : null;
        this.leftMargin = this.leftMargin == a.leftMargin ? this.leftMargin : null;
        this.leading = this.leading == a.leading ? this.leading : null;
        this.letterSpacing = this.letterSpacing == a.letterSpacing ? this.letterSpacing : null
    };
    var cf = {_sans: "Arial, Helvetica, sans-serif", _serif: "Times, serif", _typewriter: "monospace"};
    Xe.prototype.Fc = function (a) {
        var b = "";
        this.bold && (b += "bold ");
        this.italic && (b += "italic ");
        var c = this.font instanceof Ze ? this.font.name : this.font;
        a.font = b + this.size + "px " + (cf[c] || '"' + c + '", sans-serif')
    };
    var df = function (a) {
            if (null == a) return null;
            a = Math.round(Number(a));
            a != a && (a = -2147483648);
            return 20 * a
        }, ef = function (a) {
            return null == a ? null : a / 20
        }, ff = function (a) {
            if (null == a) return null;
            switch (String(a)) {
                case "left":
                    return 0;
                case "center":
                    return 2;
                case "right":
                    return 1;
                case "justify":
                    return 3
            }
        }, gf = function () {
            switch (x(this).Oa) {
                case 0:
                    return "left";
                case 2:
                    return "center";
                case 1:
                    return "right";
                case 3:
                    return "justify";
                default:
                    return null
            }
        }, hf = function (a) {
            a = ff(a);
            if (!l(a)) return !1;
            x(this).Oa = a;
            return !0
        }, jf = function () {
            return ef(x(this).Sa)
        },
        kf = function (a) {
            x(this).Sa = df(a)
        }, lf = function () {
            return x(this).bold
        }, mf = function (a) {
            x(this).bold = null == a ? null : !!a
        }, nf = function () {
            return x(this).wo
        }, of = function (a) {
            x(this).wo = null == a ? null : !!a
        }, pf = function () {
            var a = x(this).color;
            return null == a ? null : a & 16777215
        }, qf = function (a) {
            x(this).color = null == a ? null : Number(a) & 16777215
        }, rf = function () {
            var a = x(this).font;
            a instanceof Ze && (a = a.name);
            return a
        }, sf = function (a) {
            x(this).font = null == a ? null : String(a)
        }, tf = function () {
            return ef(x(this).indent)
        }, uf = function (a) {
            x(this).indent =
                df(a)
        }, vf = function () {
            return x(this).italic
        }, wf = function (a) {
            x(this).italic = null == a ? null : !!a
        }, xf = function () {
            return x(this).Ub
        }, yf = function (a) {
            x(this).Ub = null == a ? null : !!a
        }, zf = function () {
            return ef(x(this).leading)
        }, Af = function (a) {
            x(this).leading = df(a)
        }, Bf = function () {
            return ef(x(this).leftMargin)
        }, Cf = function (a) {
            x(this).leftMargin = df(a)
        }, Df = function () {
            return ef(x(this).letterSpacing)
        }, Ef = function (a) {
            null == a ? a = null : (a = Number(a), a != a && (a = -2147483648), a *= 20);
            x(this).letterSpacing = a
        }, Ff = function () {
            return ef(x(this).rightMargin)
        },
        Gf = function (a) {
            x(this).rightMargin = df(a)
        }, Hf = function () {
            return ef(x(this).size)
        }, If = function (a) {
            x(this).size = df(a)
        }, Jf = function () {
            return x(this).target
        }, Kf = function (a) {
            x(this).target = null == a ? null : String(a)
        }, Lf = function () {
            var a = x(this).Ws;
            return a && a.map(ef)
        }, Mf = function (a) {
            var b = null;
            if (a && a.length) for (var b = [], c = 0; c < a.length; ++c) b.push(df(a[c]) | 0);
            x(this).Ws = b
        }, Nf = function () {
            return x(this).yb
        }, Of = function (a) {
            x(this).yb = null == a ? null : !!a
        }, Pf = function () {
            return x(this).url
        }, Qf = function (a) {
            x(this).url =
                null == a ? null : String(a)
        };
    var Rf = function (a) {
        this.xw = a;
        this.$d = {};
        this.hj = this.qe = 0
    };
    g = Rf.prototype;
    g.ya = function (a) {
        if (a = this.$d[a]) a.gm = this.hj;
        return a
    };
    g.Vt = function () {
        return this.qe < this.xw
    };
    g.add = function (a, b) {
        this.$d[a] = b;
        this.qe += b.Kl();
        b.gm = this.hj
    };
    g.Di = function () {
        for (var a in this.$d) {
            var b = this.$d[a];
            5 < this.hj - b.gm && (this.qe -= b.Kl(), b.Kf(), delete this.$d[a])
        }
        this.hj++
    };
    g.Kf = function () {
        for (var a in this.$d) {
            var b = this.$d[a];
            this.qe -= b.Kl();
            b.Kf();
            delete this.$d[a]
        }
    };
    var Sf = function () {
    };
    Sf.prototype.Vo = function (a) {
        return a.accept(this)
    };
    Sf.prototype.pj = function (a) {
        a.renderer && a.renderer.ck === this || (a.renderer && a.renderer.Ia(), a.renderer = this.Vo(a));
        return a.renderer
    };
    var Tf = {};
    var Uf = function (a, b, c) {
        this.gridFit = a;
        this.thickness = b;
        this.sharpness = c
    };
    var Vf = function () {
    };
    Vf.prototype.ic = function () {
    };
    var Wf = [], Xf = function (a, b) {
        Wf[a] = b
    }, Yf = function (a, b) {
        Xf(a, function (a, d, e, f, h, k) {
            b(a, d, e, k).ic(f, d, e.pc, h)
        })
    };
    var $f = function (a) {
        this.id = a;
        this.rk = null;
        this.lm = "";
        this.Cg = Zf++
    };
    m($f, Vf);
    var Zf = 1;
    $f.prototype.pa = !1;
    $f.prototype.ud = function () {
    };
    $f.prototype.ob = function () {
        return null
    };
    $f.prototype.ic = function (a, b, c) {
        c.Fr(this)
    };
    var ag = function (a, b, c) {
        $f.call(this, a);
        this.sound = b;
        this.format = c
    };
    m(ag, $f);
    Yf(11, function (a) {
        return new ag(a.id, a.data, a.format)
    });
    ag.prototype.ic = function (a, b, c, d) {
        ag.J.ic.call(this, a, b, c, d);
        b.Ah().ec().nx(this)
    };
    Wf[18] = function (a, b) {
        b.Jr(a)
    };
    Wf[15] = function (a, b, c, d, e) {
        d.Xb.yt(e, a.label)
    };
    Wf[19] = function (a, b, c) {
        for (var d = 0; d < a.references.length; d++) b.Hs(c.pc, a.references[d])
    };
    var bg = function () {
        this.fd = []
    };
    g = bg.prototype;
    g.Bq = function (a) {
        var b = this.fd;
        b.push(a);
        this.Kw(b.length - 1)
    };
    g.remove = function () {
        var a = this.fd, b = a.length, c = a[0];
        if (!(0 >= b)) return 1 == b ? this.fd = [] : (a[0] = a.pop(), this.Iw(0)), c
    };
    g.Ww = function () {
        return 0 == this.fd.length ? void 0 : this.fd[0]
    };
    g.Iw = function (a) {
        for (var b = this.fd, c = b.length, d = b[a]; 2 * a + 1 < c;) {
            var e = 2 * a + 1, f = e + 1, e = f < c && 0 > b[f].compare(b[e]) ? f : e;
            if (0 > d.compare(b[e])) break;
            b[a] = b[e];
            a = e
        }
        b[a] = d
    };
    g.Kw = function (a) {
        for (var b = this.fd, c = b[a]; 0 < a;) {
            var d = Math.floor((a - 1) / 2);
            if (0 > c.compare(b[d])) b[a] = b[d], a = d; else break
        }
        b[a] = c
    };
    g.xc = function () {
        return 0 == this.fd.length
    };
    var cg = new bg, dg = 0, fg = function (a, b) {
        return eg(a, b, !1)
    }, gg = function (a, b) {
        return eg(a, b, !0)
    }, eg = function (a, b, c) {
        b = Math.max(b | 0, 1);
        var d = Date.now() + b, e = dg++;
        cg.Bq(new hg(d, a, e, c ? b : void 0));
        return e
    }, ig = function (a) {
        for (var b = cg.fd, c = 0; c < b.length; ++c) if (b[c].id == a) {
            b[c].Pk = !0;
            break
        }
    }, jg = function () {
        if (!cg.xc() && cg.Ww().time <= Date.now()) {
            var a = cg.remove();
            a.Pk || (l(a.interval) && !a.Pk && (a.time += a.interval, cg.Bq(a)), a.av.apply(window));
            cg.xc() || window.setTimeout(jg, 0)
        }
    }, hg = function (a, b, c, d) {
        this.time = a;
        this.av =
            b;
        this.id = c;
        this.interval = d;
        this.Pk = !1
    };
    hg.prototype.compare = function (a) {
        var b = this.time - a.time;
        return 0 == b ? this.id - a.id : b
    };
    var kg = function (a, b, c) {
        this.gj = a ? a : 60;
        this.ww = b;
        this.ha = c;
        this.pg = 0;
        this.qn = !1;
        this.kd = 0;
        this.Rw = oa(this.Qw, this);
        this.Wj = oa(this.Sw, this);
        this.uh = this.ej = 0;
        this.Tr = null;
        this.Bu = Date.now()
    };
    g = kg.prototype;
    g.Gx = function (a) {
        this.gj = a
    };
    g.start = function () {
        this.kd || (this.kd = window.setTimeout(this.Wj, 0))
    };
    g.stop = function () {
        window.clearTimeout(this.kd);
        this.kd = 0;
        Cd(this.pg);
        this.pg = 0
    };
    g.jd = function () {
        this.pg || this.uh || (this.pg = Bd(this.Rw))
    };
    g.Sw = function () {
        var a = this.ha, b = a.W;
        b.bt();
        0 < b.cd && 0 < b.bd && (sd || !a.qq().Dh()) ? this.qn && this.pg ? this.kd = 0 : (b = 0 < this.uh ? 1 : 1E3 / this.gj, this.ej += b % 1, 1 < this.ej && (--this.ej, b += 1), this.kd = window.setTimeout(this.Wj, b), cg.xc() || window.setTimeout(jg, 0), a.tick(), this.uh ? --this.uh : (this.qn = !0, this.jd())) : this.kd = window.setTimeout(this.Wj, 100)
    };
    g.Qw = function () {
        this.qn = !1;
        var a = 1E3 / this.gj, b = Date.now();
        this.ha.ak.bind(this.ha)();
        this.uh = Math.min(Math.floor((Date.now() - b) / a), this.ww);
        this.pg = 0;
        this.kd || (this.kd = window.setTimeout(this.Wj, 1));
        this.Tr && this.Tr()
    };
    var lg = function (a, b, c, d, e, f, h) {
        switch (arguments.length) {
            case 0:
                return new Date(Date.now());
            case 1:
                return new Date(a);
            default:
                return new Date(a, b, l(c) ? c : 1, l(d) ? d : 0, l(e) ? e : 0, l(f) ? f : 0, l(h) ? h : 0)
        }
    }, mg = function (a, b, c, d) {
        Object.defineProperty(a.prototype, b, {
            get: c, set: d || function () {
            }
        })
    };
    mg(Date, "date", Date.prototype.getDate, Date.prototype.setDate);
    mg(Date, "dateUTC", Date.prototype.getUTCDate, Date.prototype.setUTCDate);
    mg(Date, "day", Date.prototype.getDay);
    mg(Date, "dayUTC", Date.prototype.getUTCDay);
    mg(Date, "fullYear", Date.prototype.getFullYear, Date.prototype.setFullYear);
    mg(Date, "fullYearUTC", Date.prototype.getUTCFullYear, Date.prototype.setUTCFullYear);
    mg(Date, "hours", Date.prototype.getHours, Date.prototype.setHours);
    mg(Date, "hoursUTC", Date.prototype.getUTCHours, Date.prototype.setUTCHours);
    mg(Date, "milliseconds", Date.prototype.getMilliseconds, Date.prototype.setMilliseconds);
    mg(Date, "millisecondsUTC", Date.prototype.getUTCMilliseconds, Date.prototype.setUTCMilliseconds);
    mg(Date, "minutes", Date.prototype.getMinutes, Date.prototype.setMinutes);
    mg(Date, "minutesUTC", Date.prototype.getUTCMinutes, Date.prototype.setUTCMinutes);
    mg(Date, "month", Date.prototype.getMonth, Date.prototype.setMonth);
    mg(Date, "monthUTC", Date.prototype.getUTCMonth, Date.prototype.setUTCMonth);
    mg(Date, "seconds", Date.prototype.getSeconds, Date.prototype.setSeconds);
    mg(Date, "secondsUTC", Date.prototype.getUTCSeconds, Date.prototype.setUTCSeconds);
    mg(Date, "time", Date.prototype.getTime, Date.prototype.setTime);
    mg(Date, "timezoneOffset", Date.prototype.getTimezoneOffset);
    Object.defineProperty(Date, "__swiffy_override", {value: lg});
    Object.defineProperty(Array, "__swiffy_override", {value: Array});
    var ng = function (a) {
        window.console && window.console.log("[trace] " + a)
    }, og = function (a) {
        this.value = a
    }, pg = "", qg = [], rg = function (a, b) {
        if (qg.length >= a) throw new RangeError("Maximum stack size reached");
        qg.push(b)
    }, sg = function () {
        qg.pop();
        return qg.length
    }, tg = function (a, b) {
        if (b) throw a;
        if (a instanceof og) ng(a.value); else if (!(a instanceof RangeError)) throw a;
    };
    var ug = 0, vg = function (a) {
        a = Vc(a);
        return Mc(a() / 65536 + 1, a() / 65536, a() / 65536, a() / 65536 + 1, +a(), +a())
    }, wg = function (a) {
        var b = [];
        a = Vc(a);
        for (var c = 0, d; l(d = a());) c += d, b.push(c);
        return b
    }, Vc = function (a) {
        var b = a.length, c = 0;
        return function () {
            for (var d = 0, e = 1; c < b; e *= 10) {
                var f = a.charCodeAt(c++);
                if (58 == f) return 0;
                if (96 < f) return d + e * (f - 96);
                if (64 < f) return -d - e * (f - 64);
                d = 10 * d + f - 48
            }
        }
    }, xg = function (a) {
        a = Number(a);
        return isFinite(a) ? a : 0
    }, yg = function (a) {
        a = Vc(a);
        return new Rc(a() + 256 | 0, +a(), a() + 256 | 0, +a(), a() + 256 | 0, +a(), a() +
            256 | 0, +a())
    }, zg = function (a, b) {
        var c = a, d = c & 255, c = c >> 8, e = c & 255, c = c >> 8, f = c & 255, c = c >> 8 & 255;
        b && (f = (f * b.Eb >> 8) + b.Vb, e = (e * b.Cb >> 8) + b.Rb, d = (d * b.Ab >> 8) + b.Lb, c = (c * b.Ra >> 8) + b.zb);
        return new Nc(f, e, d, c)
    }, Ag = function (a, b, c) {
        return a + (b - a) * c
    }, Bg = function (a) {
        a = String(a).trim();
        return "0" == a.charAt(0) && "x" != a.charAt(1).toLowerCase()
    }, Dg = function (a) {
        var b = a.internedStrings;
        b && (delete a.internedStrings, Cg(a, b))
    }, Cg = function (a, b) {
        for (var c in a) {
            var d = a[c];
            "string" == typeof d && "#" == d.charAt(0) ? a[c] = b[d.substr(1)] : d instanceof
                Object && Cg(d, b)
        }
    }, Eg = function (a, b) {
        if (b in a) {
            for (var c; !c && a; a = Object.getPrototypeOf(a)) c = Object.getOwnPropertyDescriptor(a, b);
            return c
        }
    }, y = function (a, b) {
        return l(a) ? a : b
    }, Fg = function (a, b) {
        var c = document.createElement("canvas");
        c.width = a;
        c.height = b;
        return c
    }, Gg = function (a) {
        return a.getContext("2d")
    }, Hg = Gg(Fg(1, 1)), Ig = function (a, b, c) {
        a[b] || (a[b] = []);
        a[b].push(c)
    }, Jg = Gg(Fg(1, 1)), Kg = function (a) {
        Jg.clearRect(0, 0, 1, 1);
        Jg.fillStyle = "rgba(0,0,0,0)";
        a && (Jg.fillStyle = a);
        Jg.fillRect(0, 0, 1, 1);
        a = Jg.getImageData(0,
            0, 1, 1).data;
        return new Nc(a[0], a[1], a[2], a[3])
    };
    var Lg = function (a, b, c) {
        "_self" == b && this.Ku() && (b = "_parent");
        if (c) {
            var d = document.createElement("form");
            d.method = "post";
            d.action = a;
            d.target = b;
            a = [];
            for (b = 0; b < c.length;) {
                var e = c[b++], f = c[b++];
                a.push('<input type="hidden" name="', ya(e));
                l(f) && a.push('" value="', ya(f));
                a.push('" />')
            }
            d.innerHTML = a.join("");
            d.style.visibility = "hidden";
            document.body.appendChild(d);
            d.submit();
            document.body.removeChild(d)
        } else window.open(a, b)
    };
    var Mg = function (a) {
        this.Va = a || [];
        this.ol = this.gn = null
    }, Ng = {0: 1, 1: 1, 2: 2, 3: 0};
    Mg.prototype.bc = function (a, b) {
        for (var c = 0, d = 0, e = 0, f = this.Va; c < f.length;) switch (f[c++]) {
            case 0:
                d = f[c++];
                e = f[c++];
                break;
            case 1:
                a.bc(d, e, b, b);
                d = f[c++];
                e = f[c++];
                a.bc(d, e, b, b);
                break;
            case 2:
                a.bc(d, e, b, b);
                var h = f[c++], k = f[c++], n = f[c++], q = f[c++], u = (h - d) / (2 * h - d - n), p = (k - e) / (2 * k - e - q);
                0 < p && 1 > p && a.bc(d, (1 - p) * (1 - p) * e + 2 * (1 - p) * p * k + p * p * q, b, b);
                0 < u && 1 > u && a.bc((1 - u) * (1 - u) * d + 2 * (1 - u) * u * h + u * u * n, e, b, b);
                d = n;
                e = q;
                a.bc(d, e, b, b)
        }
    };
    Mg.prototype.slice = function (a, b) {
        function c() {
            var a = t[w], b = t[w + 1], c = u.slice(a * e + b * h + n) - n, a = p.slice(a * f + b * k + q) - q;
            t[w++] = (c * k - a * h) / d;
            t[w++] = (a * e - c * f) / d
        }

        if (!a) return this;
        var d = b.wl();
        if (0 == d) return this;
        for (var e = b.u, f = b.K, h = b.C, k = b.o, n = b.Y, q = b.Z, u = a.x, p = a.y, t = this.Va.slice(), v = t.length, w = 0; w < v;) switch (t[w++]) {
            case 2:
                c();
            case 1:
            case 0:
                c()
        }
        return new Mg(t)
    };
    Mg.prototype.nl = function (a) {
        Og(a, this.Va, 1, 0, 0, 1, 0, 0)
    };
    var Og = function (a, b, c, d, e, f, h, k) {
        a.moveTo(h, k);
        for (var n = b.length, q = 0; q < n;) {
            var u = b[q++];
            if (3 === u) a.closePath(); else {
                var p = b[q] * c + b[q + 1] * e + h, t = b[q] * d + b[q + 1] * f + k, q = q + 2;
                if (0 === u) a.moveTo(p, t); else if (1 === u) a.lineTo(p, t); else if (2 === u) {
                    var u = b[q] * c + b[q + 1] * e + h, v = b[q] * d + b[q + 1] * f + k, q = q + 2;
                    a.quadraticCurveTo(p, t, u, v)
                }
            }
        }
    };
    Mg.prototype.xc = function () {
        for (var a = 0; a < this.Va.length;) switch (this.Va[a++]) {
            case 0:
                a += 2;
            case 3:
                break;
            case 1:
            case 2:
                return !1;
            default:
                return !1
        }
        return !0
    };
    Mg.prototype.it = function () {
        for (var a = [], b = 0; b < this.Va.length;) {
            var c = this.Va[b++];
            3 != c && a.push(c);
            for (var d = 0; d < 2 * Ng[c]; d++) a.push(this.Va[b++])
        }
        return new Mg(a)
    };
    var Qg = function (a) {
        return new Mg(Pg(a))
    }, Pg = function (a) {
        a = Vc(a);
        for (var b = 0, c = 0, d = [], e; l(e = a());) switch (d.push(e), e) {
            case 2:
                d.push(b + a(), c + a());
            case 0:
            case 1:
                b += a(), c += a(), d.push(b, c)
        }
        return d
    };
    g = Mg.prototype;
    g.Uu = function (a) {
        this.gn || this.yq();
        Og(a, this.gn, 1, 0, 0, 1, 0, 0)
    };
    g.Pu = function (a) {
        this.ol || this.yq();
        Og(a, this.ol, 1, 0, 0, 1, 0, 0)
    };
    g.qw = function (a, b) {
        for (var c = 0, d = []; c < this.Va.length;) {
            var e = this.Va[c++];
            d.push(e);
            for (var f = 0; f < 2 * Ng[e]; f++) d.push(Ag(this.Va[c], a.Va[c++], b))
        }
        return new Mg(d)
    };
    g.yq = function () {
        for (var a = [], b = [], c = 0, d = 0, e = 0, f = 0, h = this.Va, k = function (a, b, c) {
            if (a !== b) {
                var d = h[a];
                a = h[a + 1];
                var e = d - h[b];
                b = a - h[b + 1];
                var f = 10 * Math.max(Math.abs(e), Math.abs(b));
                c.push(0, d, a, 1, d - e / f, a - b / f, 1, d, a)
            }
        }, n = h.length, q = 0; q < n;) {
            var u = h[q++];
            3 == u && (d = e = f = c);
            0 == u ? (k(c, d, a), k(f, e, b), d = e = f = c = q, q += 2) : (c === d && (d = q), e = f, f = q, q += 2, 2 === u && (e = f, f = q, q += 2))
        }
        k(c, d, a);
        k(f, e, b);
        this.gn = a;
        this.ol = b
    };
    g.moveTo = function (a, b) {
        this.Va.push(0, a, b);
        return this
    };
    g.lineTo = function (a, b) {
        this.Va.push(1, a, b);
        return this
    };
    g.close = function () {
        this.Va.push(3);
        return this
    };
    g.kb = function (a, b, c, d) {
        this.Va.push(2, a, b, c, d);
        return this
    };
    var Rg = function () {
        this.quality = 1;
        this.y = this.x = 4
    };
    m(Rg, pe);
    re(2, Rg);
    g = Rg.prototype;
    g.Ac = function (a) {
        this.quality = a.quality;
        this.x = a.x;
        this.y = a.y
    };
    g.zc = function (a) {
        this.quality = a.quality;
        this.x = a.x;
        this.y = a.y
    };
    g.Na = function (a) {
        this.quality = a.quality;
        this.x = a.blurX;
        this.y = a.blurY
    };
    g.fq = function () {
        return 0
    };
    g.gq = function () {
        return 0
    };
    g.Bj = function () {
        return !1
    };
    g.ta = function () {
        var a = new Tc(0, 0, 0, 0), b = 0 < this.quality ? Math.ceil(41 * (1 - Math.exp(-this.quality / 3.4))) : 0, c = Math.abs(this.x * b), b = Math.abs(this.y * b), d = this.fq(), e = this.gq();
        a.bc(d, e, c, b);
        this.Bj() && a.bc(-d, -e, c, b);
        return a
    };
    g.oa = function (a) {
        return Rg.J.oa.call(this, a) && this.quality == a.quality && this.x == a.x && this.y == a.y
    };
    g.ym = function (a, b) {
        return 1 <= this.quality && 2 < this.x && 2 < this.y && 2 < a && 2 < b && 100 < a * b
    };
    g.accept = function (a) {
        a.Fn(this)
    };
    var Sg = function () {
        return x(this).x
    }, Tg = function (a) {
        x(this).x = Math.max(0, Math.min(a, 255))
    }, Ug = function () {
        return x(this).y
    }, Vg = function (a) {
        x(this).y = Math.max(0, Math.min(a, 255))
    }, Wg = function () {
        return x(this).quality
    }, Xg = function (a) {
        x(this).quality = Math.max(0, Math.min(a | 0, 15))
    }, Yg = function (a, b, c, d) {
        oe(a, new Rg);
        Tg.call(a, y(b, 4));
        Vg.call(a, y(c, 4));
        Xg.call(a, y(d, 1))
    };
    var $g = function () {
        Rg.call(this);
        this.angle = Math.PI / 4;
        this.distance = 4;
        this.strength = 1;
        this.da = Zg
    };
    m($g, Rg);
    $g.prototype.Ac = function (a) {
        $g.J.Ac.call(this, a);
        this.strength = a.strength;
        this.da = ah(a.inner, a.knockout, a.hideObject, a.onTop);
        this.angle = a.angle || 0;
        this.distance = a.distance || 0
    };
    $g.prototype.zc = function (a) {
        $g.J.zc.call(this, a);
        this.strength = a.strength;
        this.da = a.da;
        this.angle = a.angle;
        this.distance = a.distance
    };
    $g.prototype.Na = function (a) {
        $g.J.Na.call(this, a);
        this.strength = a.strength;
        this.angle = a.angle * Math.PI / 180 || 0;
        this.distance = a.distance || 0
    };
    var bh = {type: "inner", knockout: !1, ad: "source-atop"}, ch = {type: "inner", knockout: !0, ad: "source-in"}, Zg = {type: "outer", knockout: !1, ad: "destination-over"},
        dh = {type: "outer", knockout: !0, ad: "source-out"}, eh = {type: "full", knockout: !1, ad: "source-over"}, fh = {type: "full", knockout: !0, ad: "copy"}, gh = [bh, ch, Zg, dh, eh, fh],
        ah = function (a, b, c, d) {
            return a ? c || b ? ch : bh : d ? c || b ? fh : eh : b ? dh : c ? fh : Zg
        }, hh = function (a, b) {
            for (var c = 0; c < gh.length; ++c) if (a == gh[c].type && !!b == gh[c].knockout) return gh[c];
            return b ? ch : bh
        };
    g = $g.prototype;
    g.Kh = function () {
        return "inner" == this.da.type
    };
    g.Kq = function () {
        return "outer" == this.da.type
    };
    g.fq = function () {
        return Math.cos(this.angle) * this.distance * 20
    };
    g.gq = function () {
        return Math.sin(this.angle) * this.distance * 20
    };
    g.oa = function (a) {
        return $g.J.oa.call(this, a) && this.angle == a.angle && this.distance == a.distance && this.strength == a.strength && this.da == a.da
    };
    g.ym = function () {
        return !1
    };
    var ih = function () {
        $g.call(this);
        this.highlight = 4294967295;
        this.shadow = 4278190080
    };
    m(ih, $g);
    re(4, ih);
    g = ih.prototype;
    g.Ac = function (a) {
        ih.J.Ac.call(this, a);
        this.highlight = a.highlight;
        this.shadow = a.shadow
    };
    g.zc = function (a) {
        ih.J.zc.call(this, a);
        this.highlight = a.highlight;
        this.shadow = a.shadow
    };
    g.Na = function (a) {
        ih.J.Na.call(this, a);
        this.da = hh(a.type, a.knockout);
        this.highlight = a.highlightColor | (255 * a.highlightAlpha | 0) << 24;
        this.shadow = a.shadowColor | (255 * a.shadowAlpha | 0) << 24
    };
    g.Bj = function () {
        return !0
    };
    g.oa = function (a) {
        return ih.J.oa.call(this, a) && this.highlight == a.highlight && this.shadow == a.shadow
    };
    g.accept = function (a) {
        a.Dn(this)
    };
    var jh = function () {
        $g.call(this);
        this.colors = [];
        this.ratios = [];
        this.Rf = null
    };
    m(jh, $g);
    g = jh.prototype;
    g.Ac = function (a) {
        jh.J.Ac.call(this, a);
        this.colors = wg(a.colors);
        this.ratios = wg(a.ratios)
    };
    g.zc = function (a) {
        jh.J.zc.call(this, a);
        this.colors = a.colors.slice();
        this.ratios = a.ratios.slice()
    };
    g.Na = function (a) {
        jh.J.Na.call(this, a);
        this.da = hh(a.type, a.knockout);
        this.Cx(a.colors);
        this.Ax(a.alphas);
        this.Px(a.ratios)
    };
    g.oa = function (a) {
        return jh.J.oa.call(this, a) && Oa(this.colors, a.colors) && Oa(this.ratios, a.ratios)
    };
    g.kj = function () {
        return this.colors.map(function (a) {
            return a & 16777215
        })
    };
    g.ij = function () {
        return this.colors.map(function (a) {
            return (a >>> 24) / 255
        })
    };
    g.oj = function () {
        return this.ratios.slice()
    };
    g.Cx = function (a) {
        for (var b = this.colors, c = this.ratios, d = 0; d < a.length; ++d) {
            var e = a[d];
            b[d] = (l(e) ? e & 16777215 : 16711680) | (l(b[d]) ? b[d] & 4278190080 : 4278190080);
            c[d] |= 0
        }
        b.length = c.length = a.length;
        this.Rf = null
    };
    g.Ax = function (a) {
        for (var b = this.colors, c = 0; c < b.length; ++c) {
            b[c] &= 16777215;
            var d = a[c], d = y(d, 1);
            b[c] |= Math.max(0, Math.min(255 * d | 0, 255)) << 24
        }
        this.Rf = null
    };
    g.Px = function (a) {
        for (var b = this.ratios, c = 0; c < b.length; ++c) b[c] = Math.max(0, Math.min(a[c] | 0, 255));
        this.Rf = null
    };
    g.ov = function () {
        if (this.Rf) return this.Rf;
        for (var a = this.Rf = Hg.createImageData(256, 1), b = a.data, c = this.colors, d = this.ratios, e = 0, f = zg(c[e]), h = d[e], k = 0, n = f, q = 0; 256 > q; ++q) {
            if (q >= h && (n = f, k = h, ++e < d.length ? (f = zg(c[e]), h = d[e]) : h = 255, q == k)) {
                b[4 * q + 0] = n.r;
                b[4 * q + 1] = n.Ob;
                b[4 * q + 2] = n.Jb;
                b[4 * q + 3] = n.$b;
                continue
            }
            var u = (q - k) / (h - k);
            b[4 * q + 0] = Ag(n.r, f.r, u);
            b[4 * q + 1] = Ag(n.Ob, f.Ob, u);
            b[4 * q + 2] = Ag(n.Jb, f.Jb, u);
            b[4 * q + 3] = Ag(n.$b, f.$b, u)
        }
        return a
    };
    var kh = function () {
        jh.call(this)
    };
    m(kh, jh);
    re(7, kh);
    kh.prototype.Bj = function () {
        return !0
    };
    kh.prototype.accept = function (a) {
        a.Mn(this)
    };
    var lh = function () {
        jh.call(this)
    };
    m(lh, jh);
    re(6, lh);
    lh.prototype.Bj = function () {
        return !1
    };
    lh.prototype.accept = function (a) {
        a.Nn(this)
    };
    var mh = function () {
        $g.call(this);
        this.color = 4278190080
    };
    m(mh, $g);
    mh.prototype.Ac = function (a) {
        mh.J.Ac.call(this, a);
        this.color = a.color
    };
    mh.prototype.zc = function (a) {
        mh.J.zc.call(this, a);
        this.color = a.color
    };
    mh.prototype.Na = function (a) {
        mh.J.Na.call(this, a);
        this.da = ah(a.inner, a.knockout, a.hideObject);
        this.color = a.color | (255 * a.alpha | 0) << 24
    };
    mh.prototype.oa = function (a) {
        return mh.J.oa.call(this, a) && this.color == a.color
    };
    var nh = function () {
        mh.call(this)
    };
    m(nh, mh);
    re(1, nh);
    nh.prototype.accept = function (a) {
        a.Jn(this)
    };
    var oh = function () {
        mh.call(this)
    };
    m(oh, mh);
    re(8, oh);
    oh.prototype.accept = function (a) {
        a.Ln(this)
    };
    var rh = function (a, b, c, d) {
        return a.accept(new ph(new qh(b, c), d, null))
    }, sh = Gg(Fg(1, 1)), th = function (a, b, c) {
        sh.save();
        sh.setTransform(.05 * a.u, .05 * a.K, .05 * a.C, .05 * a.o, .05 * (a.Y - b), .05 * (a.Z - c))
    }, uh = function () {
        var a = sh.getImageData(0, 0, 1, 1);
        sh.restore();
        return 0 < a.data[3] ? (a.data[3] = 0, sh.putImageData(a, 0, 0), !0) : !1
    }, qh = function (a, b) {
        this.x = a;
        this.y = b
    }, vh = function (a, b) {
        for (var c = a.length; c && b > a[c - 1];) --c;
        a.length = c;
        return !c
    };
    g = qh.prototype;
    g.gc = function (a) {
        var b = wh(a);
        a = a.Bf;
        return b.contains(this.x, this.y) && (!a || a.accept(this))
    };
    g.Sf = function (a) {
        var b = [];
        for (a = a.Aa; a; a = a.nextSibling) if (!a.Ta && !a.jc) {
            var c = vh(b, a.depth);
            if (a.Pl()) a instanceof xh || a.accept(this) || b.push(a.td); else if (c && a.accept(this)) return !0
        }
        return !1
    };
    g.vq = function (a, b) {
        th(b.$(), this.x, this.y);
        for (var c = a.paths, d = 0; d < c.length; d++) {
            var e = c[d], f = e.data.ya(b.be);
            sh.beginPath();
            f.nl(sh);
            e.fill && sh.fill();
            e.line && e.line.kn(b.be, .05, .05, 1, sh, f, b.$())
        }
        return uh()
    };
    g.En = qh.prototype.gc;
    g.Kn = qh.prototype.gc;
    g.Sn = qh.prototype.gc;
    g.Rn = function (a) {
        if (!this.gc(a)) return !1;
        var b = a.definition;
        if (b.Ys) return !0;
        th(Hc, this.x, this.y);
        a = b.matrix.multiply(a.$());
        b.bk(sh, a, Sc);
        return uh()
    };
    g.Pn = function (a) {
        return this.gc(a) && this.vq(a.definition, a)
    };
    g.Qn = function () {
        return !1
    };
    g.Gn = function (a) {
        return this.gc(a) && this.Sf(a.Id)
    };
    g.On = function (a) {
        if (!this.gc(a)) return !1;
        var b = a.Cd;
        return b && this.vq(b.definition, a) || this.Sf(a.O)
    };
    var ph = function (a, b, c) {
        this.Jd = a;
        this.filter = b;
        this.Cn = c
    };
    ph.prototype.gc = function (a) {
        return a.Dc && this.Jd.gc(a)
    };
    var yh = function (a) {
        return a.Dc && a.accept(this.Jd) ? this.filter(a) ? a : this.Cn : null
    };
    g = ph.prototype;
    g.Sf = function (a) {
        var b = null, c = [];
        for (a = a.Aa; a; a = a.nextSibling) if (!a.Ta) {
            var d = vh(c, a.depth), e;
            a.Pl() ? a instanceof xh || (a.accept(this.Jd) ? d && this.filter(a) && (b = a) : c.push(a.td)) : !d || !(e = a.accept(this)) || e == this.Cn && b || (b = e)
        }
        return b
    };
    g.uq = function (a) {
        return this.gc(a) ? (this.filter(a) ? new ph(this.Jd, this.filter, a) : this).Sf(a.O) : null
    };
    g.En = yh;
    g.Pn = yh;
    g.Rn = yh;
    g.Sn = yh;
    g.Kn = function (a) {
        return this.gc(a) ? a.Xh || this.filter(a) || a.Zp(this.Jd.x, this.Jd.y) ? a : this.Cn : null
    };
    g.On = ph.prototype.uq;
    g.Gn = function (a) {
        if (!this.gc(a)) return null;
        if (!this.filter(a)) return this.Sf(a.O);
        var b = (new ph(this.Jd, this.filter, a)).Sf(a.O);
        if (b) return b;
        for (b = a.Id.Nd; b; b = b.lc) if (b.accept(this.Jd)) return a;
        return null
    };
    g.Qn = function (a) {
        var b = this.uq(a);
        return b && b !== a.i.Ga ? b : this.filter(a) ? a : null
    };
    var zh = function () {
    };
    m(zh, Vf);
    g = zh.prototype;
    g.rh = function () {
    };
    g.ye = function () {
    };
    g.qh = function () {
    };
    g.Tk = function () {
    };
    g.Pg = function () {
    };
    var Bh = function (a, b) {
        for (var c = 0; c < a.length; ++c) {
            var d = a[c];
            if (d instanceof Ah && d.depth == b) return c
        }
        return -1
    };
    zh.prototype.ic = function (a, b, c, d) {
        Ig(a.tags, d, this)
    };
    var Ze = function (a, b, c, d, e, f, h, k, n) {
        $f.call(this, a);
        this.name = b;
        this.glyphs = c;
        this.emSquareSize = d;
        this.ascent = e;
        this.descent = f;
        this.bold = h;
        this.italic = k;
        this.lineHeight = (e + f) / d;
        this.Qk = {};
        for (a = 0; a < c.length; a++) this.Qk[c[a].unicode] = a;
        this.on = n
    };
    m(Ze, $f);
    var bf = new Ze(-1, "", [], 1024, 0, 0, !1, !1);
    Yf(5, function (a) {
        for (var b = a.emSquareSize ? a.emSquareSize : 1024, c = [], d = 0; a.glyphs && d < a.glyphs.length; d++) {
            var e = a.glyphs[d];
            c.push(new Ch(Pg(e.data), e.unicode, e.advance))
        }
        return new Ze(a.id, a.name, c, b, a.ascent ? a.ascent : 0, a.descent ? a.descent : 0, a.bold, a.italic, a.thickness)
    });
    g = Ze.prototype;
    g.Bl = function (a) {
        return this.glyphs[this.Qk[a]]
    };
    g.ic = function (a, b, c, d) {
        Ze.J.ic.call(this, a, b, c, d);
        l(this.name) && Ig(b.Ah().Ed, this.name.toLowerCase(), this)
    };
    g.Tm = function (a) {
        for (var b = [], c = 0; c < a.length; ++c) b[c] = this.Qk[a.charAt(c)];
        return b
    };
    g.pw = function (a, b, c, d, e) {
        for (var f = [], h = 0; h < e.length; ++h) {
            f[h] = a;
            var k = this.glyphs[e[h]];
            k && (a += k.advance * b / this.emSquareSize + c, " " == k.unicode && (a += d))
        }
        return f
    };
    g.Sr = function (a, b, c, d, e, f, h, k) {
        var n = e * f.C + f.Y;
        e = e * f.o + f.Z;
        var q = f.u, u = f.K, p = b / this.emSquareSize, t = p * f.u, v = p * f.K, w = p * f.C, p = p * f.o;
        a.beginPath();
        for (var B = 0; B < c.length; ++B) {
            var A = this.glyphs[c[B]];
            if (A) {
                var F = d[B];
                Og(a, A.data, t, v, w, p, F * q + n, F * u + e)
            }
        }
        h && (a.fillStyle = a.strokeStyle = h.ld());
        a.fill();
        k && h && h.iw() && 200 < h.wv() && (b = 1 - f.Ev() * b / 20, 0 < b && (a.lineWidth = b, a.stroke()))
    };
    var Ch = function (a, b, c) {
        this.data = a;
        this.unicode = b;
        this.advance = c
    };
    var Dh = function (a) {
        this.actions = a
    };
    m(Dh, zh);
    Yf(9, function (a, b) {
        var c = b.ah(a.actions, void 0);
        return new Dh(c)
    });
    Dh.prototype.rh = function () {
    };
    Dh.prototype.qh = function (a, b) {
        b ? this.actions.call(a) : a.i.xb.add(this.actions.bind(a))
    };
    Dh.prototype.Pg = function (a) {
        a.push(this)
    };
    var Eh = function (a) {
        this.actions = a
    };
    m(Eh, Dh);
    Yf(20, function (a, b) {
        var c = b.ah(a.actions, void 0);
        return new Eh(c)
    });
    Eh.prototype.ic = function (a, b, c, d) {
        Ig(a.Aq, d, this)
    };
    Wf[16] = function (a, b, c) {
        c = c.pc;
        for (var d in a.data) {
            var e = c.Be(a.data[d]).get();
            e && (c.mm[d] = e, e.lm = d, e instanceof Ze && Ig(b.Ah().Ed, d.toLowerCase(), e))
        }
    };
    var Ah = function (a, b, c, d, e, f, h, k) {
        this.definition = b;
        this.depth = a.depth;
        this.matrix = c;
        this.clip = a.clip;
        this.colortransform = d;
        this.name = a.name;
        this.ratio = h;
        this.blendmode = a.blendmode;
        this.replace = a.replace;
        this.actions = e;
        this.filters = f;
        this.pa = !!(b && b.bm() && b.get().pa);
        this.hg = k;
        this.visible = a.visible;
        this.cacheAsBitmap = a.cacheAsBitmap
    };
    m(Ah, zh);
    Yf(3, function (a, b, c) {
        var d;
        l(a.actions) && (d = a.actions.map(function (a) {
            return {events: a.events, key: a.key, actions: b.ah(a.actions, void 0)}
        }));
        var e = se(a.filters), f;
        l(a.matrix) && (f = a.matrix ? vg(a.matrix) : Hc);
        var h = l(a.id) ? c.pc.Be(a.id) : null, k = a.colortransform ? yg(a.colortransform) : void 0;
        return new Ah(a, h, f, k, d, e, a.ratio, c.Zw.Gl())
    });
    g = Ah.prototype;
    g.ye = function (a) {
        var b = this.depth + -16384, c = a.O.Ic(b), d = null;
        if (!this.replace == !c) {
            if (c) if (!this.definition || c.pa() || this.pa) d = c; else {
                if (a.de(b), d = this.Hi(a)) d.setTransform(c.ua()), d.Fb(c.jb), d.ug(c.Nb), d.tg(c.rd), d.Xm(c.td), d.Gb(c.getName())
            } else d = this.Hi(a);
            d && !d.ro() && (this.matrix && d.setTransform(this.matrix), this.colortransform && d.Fb(this.colortransform), l(this.ratio) && d.ik(this.ratio), this.filters && d.ug(this.filters), l(this.blendmode) && d.tg(this.blendmode), l(this.visible) && d.lk(!!this.visible),
            l(this.cacheAsBitmap) && d.Wm(this.cacheAsBitmap))
        }
    };
    g.rh = function (a) {
        var b = a.O.Ic(this.depth + -16384), c = null;
        if (b) {
            var c = b.pa() && this.pa, d = this.definition ? this.definition.id : void 0, d = !b.pa() && b.definition.id == d;
            (c || d) && b.be == (this.ratio || 0) ? c = b : (a.O.Jw(b), c = this.Hi(a))
        } else c = this.Hi(a);
        if (c) return c.ro() || (c.setTransform(this.matrix ? this.matrix : Hc), c.Fb(this.colortransform ? this.colortransform : Sc), c.ik(this.ratio || 0), c.ug(this.filters ? this.filters : []), c.tg(this.blendmode), l(this.visible) && c.lk(!!this.visible)), c
    };
    g.Hi = function (a) {
        if (!this.definition || !this.definition.bm()) return null;
        var b = this.definition.get(), c = b.ob(a.i, this.hg);
        if (!c) return null;
        this.name ? c.Gb(this.name) : a.i.ca().vp(a.i, c);
        this.clip && c.Xm(this.clip + -16384);
        if (this.actions) for (c.ph(7), b = 0; b < this.actions.length; ++b) {
            var d = this.actions[b];
            c.bo(d.events, d.key, d.actions)
        } else b.lm && c.ph(7);
        a.Tc(c, this.depth + -16384);
        c.ka(!0);
        return c
    };
    g.Tk = function (a) {
        a.push(this)
    };
    g.Pg = function (a) {
        var b = Bh(a, this.depth);
        if (0 > b) this.replace || a.push(this); else if (this.replace) {
            var c = a[b];
            a.splice(b, 1);
            b = c.definition;
            c.pa || this.pa || !this.definition || (b = this.definition);
            c = new Ah({
                    depth: this.depth,
                    name: c.name,
                    replace: !1,
                    pa: c.pa,
                    clip: c.clip,
                    blendmode: y(this.blendmode, c.blendmode),
                    visible: y(this.visible, c.visible),
                    filters: y(this.filters, c.filters)
                }, b, y(this.matrix, c.matrix), y(this.colortransform, c.colortransform), y(this.actions, c.actions), y(this.filters, c.filters), y(this.ratio, c.ratio),
                this.hg);
            a.push(c)
        }
    };
    g.Nv = function (a) {
        if (!this.actions || !this.pa) return !1;
        for (var b = 0; b < this.actions.length; ++b) if (0 != (this.actions[b].events & a)) return !0;
        return !1
    };
    g.su = function () {
        return new Ah({
            depth: this.depth + -65536,
            name: this.name,
            replace: !1,
            pa: !0,
            clip: 0,
            blendmode: this.blendmode,
            filters: this.filters,
            visible: this.visible
        }, this.definition, this.matrix, this.colortransform, this.actions, this.filters, this.ratio, this.hg)
    };
    var Fh = function (a) {
        this.gl = a
    };
    m(Fh, zh);
    Yf(4, function (a) {
        return new Fh(a.depth)
    });
    g = Fh.prototype;
    g.ye = function (a) {
        a.de(this.gl + -16384)
    };
    g.rh = Fh.prototype.ye;
    g.Tk = function (a) {
        a.push(this)
    };
    g.Pg = function (a) {
        var b = Bh(a, this.gl);
        if (0 <= b) {
            var c = a[b];
            c.Nv(160) ? (a[b] = c.su(), a.push(this.tu())) : a.splice(b, 1)
        }
    };
    g.tu = function () {
        return new Fh(this.gl + -65536)
    };
    var Gh = function (a, b) {
        this.mc = a;
        this.Vm = [];
        this.gs = {};
        for (var c = 0; c < a.length; c++) this.gs[a[c].name] = a[c].offset;
        this.Jf = b;
        this.fj = {};
        for (c = 0; c < b.length; c++) this.fj[b[c].name] = b[c].offset
    };
    m(Gh, zh);
    Yf(23, function (a) {
        return new Gh(a.scenes, a.frames)
    });
    Gh.prototype.ic = function (a) {
        a.Xb = this;
        for (var b = this.mc, c = this.Jf, d = this.Vm, e = 0, f = 0; e < b.length; e++) {
            for (var h = [], k = e + 1 < b.length ? b[e + 1].offset : a.frameCount; f < c.length && c[f].offset < k;) h.push(c[f++]);
            d.push({numFrames: k - b[e].offset, Jf: h})
        }
    };
    Gh.prototype.yt = function (a, b) {
        this.fj[b] = a
    };
    var Hh = function (a, b) {
        var c = Ma(a, {offset: b}, function (a, b) {
            return a.offset - b.offset
        });
        0 > c && (c = -c - 2);
        return c
    };
    g = Gh.prototype;
    g.zh = function (a) {
        return Hh(this.mc, a)
    };
    g.kq = function (a) {
        a = this.zh(a);
        return this.mc[a] ? this.mc[a].offset : 0
    };
    g.Dv = function (a) {
        a = this.zh(a);
        return this.mc[a - 1] ? this.mc[a - 1].offset : Number.NEGATIVE_INFINITY
    };
    g.zv = function (a) {
        a = this.zh(a);
        return this.mc[a + 1] ? this.mc[a + 1].offset : Number.POSITIVE_INFINITY
    };
    g.mv = function (a) {
        return Hh(this.Jf, a)
    };
    var Jh = function (a, b, c) {
        return fa(a) ? 1 == a.length ? new Ih(c(a[0])) : new b(c(a[0]), c(a[1])) : new Ih(c(a))
    }, Ih = function (a) {
        this.value = a
    };
    Ih.prototype.ya = function () {
        return this.value
    };
    var Kh = function (a, b) {
        this.from = a;
        this.to = b
    };
    Kh.prototype.ya = function (a) {
        return Ag(this.from, this.to, a)
    };
    var Lh = new Ih(0), Mh = function (a, b) {
        this.from = a;
        this.to = b
    };
    Mh.prototype.ya = function (a) {
        var b = this.from, c = this.to;
        return Mc(Ag(b.u, c.u, a), Ag(b.K, c.K, a), Ag(b.C, c.C, a), Ag(b.o, c.o, a), Ag(b.Y, c.Y, a), Ag(b.Z, c.Z, a))
    };
    var Nh = new Ih(Hc), Oh = new Ih(Jc), Ph = function (a, b) {
        this.from = a;
        this.to = b
    };
    Ph.prototype.ya = function (a) {
        var b = this.from, c = this.to;
        return new Nc(Ag(b.r, c.r, a), Ag(b.Ob, c.Ob, a), Ag(b.Jb, c.Jb, a), Ag(b.$b, c.$b, a))
    };
    var Qh = function (a, b) {
        this.from = a;
        this.to = b;
        this.$u = a.it();
        this.cy = b.it()
    };
    Qh.prototype.ya = function (a) {
        return 0 == a ? this.from : 1 == a ? this.to : this.$u.qw(this.cy, a)
    };
    var Rh = function (a, b) {
        this.from = a;
        this.to = b
    };
    Rh.prototype.ya = function (a) {
        var b = this.from, c = this.to;
        return new Tc(Ag(b.j, c.j, a), Ag(b.l, c.l, a), Ag(b.F, c.F, a), Ag(b.H, c.H, a))
    };
    var Sh = function (a) {
        this.id = a
    };
    m(Sh, zh);
    Yf(12, function (a) {
        return new Sh(a.id)
    });
    Sh.prototype.ye = function (a) {
        a.ec().Qs(this.id, a.ib)
    };
    Sh.prototype.rh = Sh.prototype.ye;
    Sh.prototype.Pg = function (a) {
        a.push(this)
    };
    var Th = function () {
        this.source = ""
    };
    g = Th.prototype;
    g.append = function (a) {
        this.source += a;
        return this
    };
    g.Xs = function () {
        var a = this.source;
        this.source = "";
        return a
    };
    g.xj = function (a) {
        return a.Uw
    };
    g.Ek = function (a) {
        return this.append(this.xj(a))
    };
    g.Og = function (a, b) {
        this.Ek(a).append("(");
        for (var c = 1; c < arguments.length; ++c) 1 < c && this.append(","), this.append(arguments[c]);
        return this.append(")")
    };
    g.S = function (a, b) {
        return this.Og.apply(this, arguments).append(";")
    };
    g.Yu = function (a) {
        return ha(a) ? Ba(a) : String(a)
    };
    var Uh = function (a, b) {
        for (var c = x(a), d = "(", e = 0; e < b.length; ++e) 0 < e && (d += ", "), d += b[e] + "=" + c[e];
        return d + ")"
    }, Vh = function (a) {
        a = x(a);
        return new Rc(256 * a[0] | 0, a[4], 256 * a[1] | 0, a[5], 256 * a[2] | 0, a[6], 256 * a[3] | 0, a[7])
    }, Wh = function (a, b) {
        return new a(b.Eb / 256, b.Cb / 256, b.Ab / 256, b.Ra / 256, b.Vb, b.Rb, b.Lb, b.zb)
    }, Xh = "redMultiplier greenMultiplier blueMultiplier alphaMultiplier redOffset greenOffset blueOffset alphaOffset".split(" "), Yh = function (a) {
        var b = x(this);
        a = x(a);
        for (var c = 0, d = 4; 4 > c; ++c, ++d) b[d] += b[c] * a[d], b[c] *=
            a[c]
    }, Zh = function () {
        var a = x(this);
        return (a[4] << 16 | a[5] << 8 | a[6]) >>> 0
    }, $h = function (a) {
        var b = x(this);
        b[0] = 0;
        b[1] = 0;
        b[2] = 0;
        b[4] = a >> 16 & 255;
        b[5] = a >> 8 & 255;
        b[6] = a & 255
    }, ai = "a b c d tx ty".split(" "), bi = function (a) {
        a = x(a);
        return new Gc(a[0], a[1], a[2], a[3], 20 * a[4], 20 * a[5])
    }, ci = function (a, b) {
        return new a(b.u, b.K, b.C, b.o, b.Y / 20, b.Z / 20)
    }, di = function (a) {
        var b = x(this);
        a = x(a);
        var c;
        c = b[0] * a[0] + b[1] * a[2];
        b[1] = b[0] * a[1] + b[1] * a[3];
        b[0] = c;
        c = b[2] * a[0] + b[3] * a[2];
        b[3] = b[2] * a[1] + b[3] * a[3];
        b[2] = c;
        c = b[4] * a[0] + b[5] * a[2] + a[4];
        b[5] = b[4] * a[1] + b[5] * a[3] + a[5];
        b[4] = c
    }, ei = function (a) {
        var b = x(this);
        a = x(a);
        for (var c = 0; 6 > c; ++c) b[c] = a[c]
    }, fi = function (a, b, c, d, e) {
        var f = x(this), h = Math.cos(c);
        c = Math.sin(c);
        f[0] = h * a;
        f[1] = c * b;
        f[2] = -c * a;
        f[3] = h * b;
        f[4] = d;
        f[5] = e
    }, gi = function (a, b, c) {
        var d = x(this);
        return new c(d[0] * a + d[2] * b, d[1] * a + d[3] * b)
    }, hi = function () {
        var a = x(this);
        a[0] = 1;
        a[1] = 0;
        a[2] = 0;
        a[3] = 1;
        a[4] = 0;
        a[5] = 0
    }, ii = function () {
        var a = x(this), b = a[0], c = a[1], d = a[2], e = a[3], f = a[4], h = a[5];
        if (0 == c && 0 == d) a[0] = 1 / b, a[3] = 1 / e, a[4] = -f / b, a[5] = -h / e; else {
            var k =
                b * e - c * d;
            0 == k ? hi.call(this) : (a[0] = e / k, a[1] = -c / k, a[2] = -d / k, a[3] = b / k, a[4] = (d * h - e * f) / k, a[5] = (c * f - b * h) / k)
        }
    }, ji = function (a) {
        var b = x(this), c = Math.cos(a);
        a = Math.sin(a);
        var d;
        d = b[0] * c - b[1] * a;
        b[1] = b[1] * c + b[0] * a;
        b[0] = d;
        d = b[2] * c - b[3] * a;
        b[3] = b[3] * c + b[2] * a;
        b[2] = d;
        d = b[4] * c - b[5] * a;
        b[5] = b[5] * c + b[4] * a;
        b[4] = d
    }, ki = function (a, b) {
        var c = x(this);
        c[0] *= a;
        c[1] *= b;
        c[2] *= a;
        c[3] *= b;
        c[4] *= a;
        c[5] *= b
    }, li = function (a, b, c) {
        var d = x(this);
        return new c(d[0] * a + d[2] * b + d[4], d[1] * a + d[3] * b + d[5])
    };
    Object.defineProperty(Array, "CASEINSENSITIVE", {value: 1});
    Object.defineProperty(Array, "DESCENDING", {value: 2});
    Object.defineProperty(Array, "NUMERIC", {value: 16});
    Object.defineProperty(Array, "RETURNINDEXEDARRAY", {value: 8});
    Object.defineProperty(Array, "UNIQUESORT", {value: 4});
    var mi = function (a, b, c) {
        var d = b & Array.DESCENDING ? -1 : 1, e = r, f;
        f = b & Array.NUMERIC ? e.Io : b & Array.CASEINSENSITIVE ? e.Go : e.Ho;
        return function (b, k) {
            return d * f.call(e, b && b[a], k && k[a]) || c(b, k)
        }
    }, ni = function (a, b) {
        return function (c, d) {
            return b(a[c], a[d])
        }
    };
    Object.defineProperty(Array.prototype, "sortOn", {
        value: function (a, b) {
            a = fa(a) ? a : [a];
            var c;
            fa(b) && b.length == a.length ? c = b[0] >>> 0 : (c = b >>> 0, b = null);
            for (var d = c & Array.RETURNINDEXEDARRAY, e = c & Array.UNIQUESORT, f = !1, h = function () {
                f = !0;
                return 0
            }, k = a.length - 1; 0 <= k; --k) h = mi(a[k], b ? b[k] >>> 0 : c, h);
            c = this;
            if (d || e) for (h = ni(c, h), c = [], k = this.length - 1; 0 <= k; --k) c[k] = k;
            c.sort(h);
            if (e) {
                if (f) return 0;
                if (!d) {
                    for (d = 0; d < c.length; d++) if (-1 != c[d]) {
                        for (var e = this[d], n, h = d; n = c[h], c[h] = -1, n != d; h = n) this[h] = this[n];
                        this[h] = e
                    }
                    return this
                }
            }
            return c
        }
    });
    var r = null, oi = function (a, b, c) {
        a = b[a];
        if (ka(a)) return a.call.apply(a.call, arguments)
    };
    var pi = 1, qi = function (a, b) {
        a.prototype = Object.create(b.prototype);
        a.prototype.constructor = a
    }, C = function (a, b, c) {
        c && qi(a, c);
        a.prototype ? (c = a.prototype.__swiffy_as2_classdef || null, Object.defineProperty(a.prototype, "__swiffy_as2_classdef", {value: a})) : c = Object;
        Object.defineProperty(a, "__swiffy_as2_typeid", {value: pi++});
        Object.defineProperty(a, "__swiffy_as2_baseclass", {value: c});
        Object.defineProperty(a, "__swiffy_as2_name", {value: b})
    };
    C(Object, "Object");
    var D = function (a, b, c, d) {
        b = null == b ? Object.getOwnPropertyNames(a) : ha(b) ? b.split(",") : b;
        var e = {};
        d & 4 && (e.writable = !0);
        d & 2 && (e.configurable = !0);
        d & 1 && (e.enumerable = !0);
        c & 4 && (e.writable = !1);
        c & 2 && (e.configurable = !1);
        c & 1 && (e.enumerable = !1);
        for (c = 0; c < b.length; ++c) (d = Object.getOwnPropertyDescriptor(a, b[c])) && d.configurable && Object.defineProperty(a, b[c], e)
    };
    var ri = function (a) {
        Object.defineProperty(this, "__swiffy_vm", {value: a})
    };
    C(ri, "AsBroadcaster");
    var ti = function (a) {
        return function (b) {
            for (var c = [], d = 1; d < arguments.length; ++d) c.push(arguments[d]);
            for (d = 0; d < this._listeners.length; ++d) {
                var e = this._listeners[d], f = a.La(e, b);
                si(e, f, c, b)
            }
            return 0 < this._listeners.length ? !0 : void 0
        }
    }, ui = function (a) {
        null != a ? Ha(this._listeners, a) : Ia(this._listeners, function (a) {
            return null == a
        });
        this._listeners.push(a);
        return !0
    }, vi = function (a) {
        return Ha(this._listeners, a)
    };
    ri.prototype.initialize = function (a) {
        la(a) && (a._listeners = [], a.addListener = ui, a.broadcastMessage = ti(this.__swiffy_vm), a.removeListener = vi, D(a, ["addListener", "broadcastMessage", "removeListener", "_listeners"], 3))
    };
    D(ri.prototype, null, 3);
    var wi = function () {
    };
    C(wi, "BitmapFilter");
    var xi = function (a, b, c, d, e, f, h, k, n, q, u, p) {
        this.angle = l(b) ? b : 45;
        this.blurX = l(h) ? h : 4;
        this.blurY = l(k) ? k : 4;
        this.distance = l(a) ? a : 4;
        this.highlightAlpha = l(d) ? d : 1;
        this.highlightColor = l(c) ? c : 16777215;
        this.knockout = l(p) ? p : !1;
        this.quality = l(q) ? q : 1;
        this.shadowAlpha = l(f) ? f : 1;
        this.shadowColor = l(e) ? e : 0;
        this.strength = l(n) ? n : 1;
        this.type = l(u) ? u : "inner";
        D(this, null, 3)
    };
    C(xi, "BevelFilter", wi);
    te(xi, function () {
        var a = new ih;
        a.Na(this);
        return a
    });
    var yi = function (a, b, c) {
        Yg(this, a, b, c)
    };
    C(yi, "BlurFilter", wi);
    Object.defineProperties(yi.prototype, {blurX: {get: Sg, set: Tg}, blurY: {get: Ug, set: Vg}, quality: {get: Wg, set: Xg}});
    var zi = function (a) {
        oe(this, new ve);
        l(a) && xe.call(this, a)
    };
    C(zi, "ColorMatrixFilter", wi);
    Object.defineProperty(zi.prototype, "matrix", {get: we, set: xe});
    var Ai = function (a, b, c, d, e, f, h, k) {
        var n = [1, 1, 1, 1, 0, 0, 0, 0];
        if (8 <= arguments.length) for (var q = 0; 8 > q; ++q) n[q] = Number(arguments[q]);
        oe(this, n)
    };
    C(Ai, "ColorTransform");
    Xh.forEach(function (a, b) {
        Object.defineProperty(Ai.prototype, a, {
            get: function () {
                return x(this)[b]
            }, set: function (a) {
                x(this)[b] = Number(a)
            }
        })
    });
    Object.defineProperty(Ai.prototype, "rgb", {get: Zh, set: $h});
    Ai.prototype.concat = function (a) {
        a instanceof Ai && Yh.call(this, a)
    };
    Ai.prototype.toString = function () {
        return Uh(this, Xh)
    };
    var Bi = function (a) {
        this.onSelect = a;
        this.builtInItems = {zoom: !0, quality: !0, play: !0, loop: !0, rewind: !0, forward_back: !0, print: !0};
        this.customItems = []
    };
    C(Bi, "ContextMenu");
    Bi.prototype.copy = function () {
        var a = new Bi;
        a.builtInItems = this.builtInItems;
        var b = this.customItems;
        b && (a.customItems = b.map(function (a) {
            if (ka(a.copy)) return a.copy()
        }));
        return a
    };
    Bi.prototype.hideBuiltInItems = function () {
        this.builtInItems = {zoom: !1, quality: !1, play: !1, loop: !1, rewind: !1, forward_back: !1, print: !1}
    };
    var Ci = function (a, b, c, d, e) {
        this.caption = a;
        this.onSelect = b;
        this.separatorBefore = y(c, !1);
        this.enabled = y(d, !0);
        this.visible = y(e, !0)
    };
    C(Ci, "ContextMenuItem");
    Ci.prototype.copy = function () {
        return new Ci(this.caption, this.callbackFunction, this.separatorBefore, this.enabled, this.visible)
    };
    var Di = function (a, b, c, d, e, f, h, k, n) {
        Re(this, a, b, c, d, e, f, h, k, n)
    };
    C(Di, "ConvolutionFilter", wi);
    Object.defineProperty(Di.prototype, "matrixX", {get: ze, set: Be});
    Object.defineProperty(Di.prototype, "matrixY", {get: Ce, set: De});
    Object.defineProperty(Di.prototype, "matrix", {get: Ee, set: Ae});
    Object.defineProperty(Di.prototype, "divisor", {get: Fe, set: Ge});
    Object.defineProperty(Di.prototype, "bias", {get: He, set: Ie});
    Object.defineProperty(Di.prototype, "preserveAlpha", {get: Je, set: Ke});
    Object.defineProperty(Di.prototype, "clamp", {get: Le, set: Me});
    Object.defineProperty(Di.prototype, "color", {get: Ne, set: Oe});
    Object.defineProperty(Di.prototype, "alpha", {get: Pe, set: Qe});
    var Ei = function (a, b, c, d, e, f, h, k, n, q, u) {
        this.angle = l(b) ? b : 45;
        this.blurX = l(e) ? e : 4;
        this.blurY = l(f) ? f : 4;
        this.distance = l(a) ? a : 4;
        this.alpha = l(d) ? d : 1;
        this.color = l(c) ? c : 0;
        this.knockout = l(q) ? q : !1;
        this.quality = l(k) ? k : 1;
        this.strength = l(h) ? h : 1;
        this.inner = l(n) ? n : !1;
        this.hideObject = l(u) ? u : !1;
        D(this, null, 3)
    };
    C(Ei, "DropShadowFilter", wi);
    te(Ei, function () {
        var a = new nh;
        a.Na(this);
        return a
    });
    var Fi = function (a) {
        this.name = "Error";
        this.message = l(a) ? a : "Error"
    };
    C(Fi, "Error");
    Fi.prototype.toString = function () {
        return this.message
    };
    D(Fi.prototype, null, 3);
    var Gi = function () {
    };
    C(Gi, "ExternalInterface");
    Object.defineProperty(Gi, "available", {get: he});
    Gi.call = function (a, b) {
        return ke(r.i, String(a), Array.prototype.slice.call(arguments, 1))
    };
    Gi.addCallback = function (a, b, c) {
        return je(String(a), l(b) ? b : null, c)
    };
    D(Gi, null, 3);
    var Hi = function (a, b, c, d, e, f, h, k) {
        this.blurX = l(c) ? c : 6;
        this.blurY = l(d) ? d : 6;
        this.alpha = l(b) ? b : 1;
        this.color = l(a) ? a : 16711680;
        this.knockout = l(k) ? k : !1;
        this.quality = l(f) ? f : 1;
        this.strength = l(e) ? e : 2;
        this.inner = l(h) ? h : !1;
        D(this, null, 3)
    };
    C(Hi, "GlowFilter", wi);
    te(Hi, function () {
        var a = new oh;
        a.Na(this);
        return a
    });
    var Ii = function (a, b, c, d, e, f, h, k, n, q, u) {
        this.distance = l(a) ? a : 4;
        this.angle = l(b) ? b : 45;
        var p = [];
        Object.defineProperty(this, "colors", {
            enumerable: !0, get: function () {
                return p
            }, set: function (a) {
                p = fa(a) ? a : [];
                for (a = 0; a < p.length; a++) p[a] = (null != p[a] ? Number(p[a]) : 16711680) % 16777216
            }
        });
        this.colors = c;
        var t = [];
        Object.defineProperty(this, "alphas", {
            enumerable: !0, get: function () {
                return t
            }, set: function (a) {
                t = fa(a) ? a : [];
                a = l(p) ? p.length : 0;
                for (var b = 0; b < a; b++) t[b] = Math.min(1, Math.floor(Number(255 * (null != t[b] ? Number(t[b]) :
                    1))) / 255);
                t.length = a
            }
        });
        this.alphas = d;
        var v = [];
        Object.defineProperty(this, "ratios", {
            enumerable: !0, get: function () {
                return v
            }, set: function (a) {
                v = fa(a) ? a : [];
                a = l(p) ? p.length : 0;
                for (var b = 0; b < a; b++) {
                    var c = null != v[b] ? Number(v[b]) : 0, c = Math.floor(c);
                    0 > c ? c = 0 : 255 < c && (c = 255);
                    v[b] = c
                }
                v.length = a
            }
        });
        this.ratios = e;
        this.blurX = l(f) ? f : 4;
        this.blurY = l(h) ? h : 4;
        this.quality = l(n) ? n : 1;
        this.strength = l(k) ? k : 1;
        this.knockout = l(u) ? u : !1;
        this.type = l(q) ? q : "inner"
    };
    C(Ii, "GradientBevelFilter", wi);
    te(Ii, function () {
        var a = new kh;
        a.Na(this);
        return a
    });
    var Ji = function (a, b, c, d, e, f, h, k, n, q, u) {
        this.distance = l(a) ? a : 4;
        this.angle = l(b) ? b : 45;
        var p = [];
        Object.defineProperty(this, "colors", {
            enumerable: !0, get: function () {
                return p
            }, set: function (a) {
                p = fa(a) ? a : [];
                for (a = 0; a < p.length; a++) p[a] = (null != p[a] ? Number(p[a]) : 16711680) % 16777216
            }
        });
        this.colors = c;
        var t = [];
        Object.defineProperty(this, "alphas", {
            enumerable: !0, get: function () {
                return t
            }, set: function (a) {
                t = fa(a) ? a : [];
                a = l(p) ? p.length : 0;
                for (var b = 0; b < a; b++) t[b] = Math.min(1, Math.floor(Number(255 * (null != t[b] ? Number(t[b]) :
                    1))) / 255);
                t.length = a
            }
        });
        this.alphas = d;
        var v = [];
        Object.defineProperty(this, "ratios", {
            enumerable: !0, get: function () {
                return v
            }, set: function (a) {
                v = fa(a) ? a : [];
                a = l(p) ? p.length : 0;
                for (var b = 0; b < a; b++) {
                    var c = null != v[b] ? Number(v[b]) : 0, c = Math.floor(c);
                    0 > c ? c = 0 : 255 < c && (c = 255);
                    v[b] = c
                }
                v.length = a
            }
        });
        this.ratios = e;
        this.blurX = l(f) ? f : 4;
        this.blurY = l(h) ? h : 4;
        this.quality = l(n) ? n : 1;
        this.strength = l(k) ? k : 1;
        this.knockout = l(u) ? u : !1;
        this.type = l(q) ? q : "inner"
    };
    C(Ji, "GradientGlowFilter", wi);
    te(Ji, function () {
        var a = new lh;
        a.Na(this);
        return a
    });
    var Ki = function () {
        this.filters = []
    };
    g = Ki.prototype;
    g.Dn = function (a) {
        this.filters.push(new xi(a.distance, 180 * a.angle / Math.PI, a.highlight & 16777215, (a.highlight >>> 24) / 255, a.shadow & 16777215, (a.shadow >>> 24) / 255, a.x, a.y, a.strength, a.quality, a.da.type, a.da.knockout))
    };
    g.Fn = function (a) {
        this.filters.push(new yi(a.x, a.y, a.quality))
    };
    g.Hn = function (a) {
        this.filters.push(new zi(a.matrix))
    };
    g.In = function (a) {
        this.filters.push(new Di(a.matrixX, a.matrixY, a.matrix, a.divisor, a.bias, a.preserveAlpha, a.clamp, a.color & 16777215, (a.color >>> 24) / 255))
    };
    g.Jn = function (a) {
        this.filters.push(new Ei(a.distance, 180 * a.angle / Math.PI, a.color & 16777215, (a.color >>> 24) / 255, a.x, a.y, a.strength, a.quality, a.Kh(), a.da.knockout && a.Kq(), a.da.knockout))
    };
    g.Ln = function (a) {
        this.filters.push(new Hi(a.color & 16777215, (a.color >>> 24) / 255, a.x, a.y, a.strength, a.quality, a.Kh(), a.da.knockout))
    };
    g.Mn = function (a) {
        this.filters.push(new Ii(a.distance, 180 * a.angle / Math.PI, a.kj(), a.ij(), a.oj(), a.x, a.y, a.strength, a.quality, a.da.type, a.da.knockout))
    };
    g.Nn = function (a) {
        this.filters.push(new Ji(a.distance, 180 * a.angle / Math.PI, a.kj(), a.ij(), a.oj(), a.x, a.y, a.strength, a.quality, a.da.type, a.da.knockout))
    };
    var Li = function () {
        this.em = {};
        this.Fk = this.Ei = 0;
        D(this, null, 3)
    };
    C(Li, "Key");
    Li.prototype.getAscii = function () {
        return this.Fk
    };
    Li.prototype.getCode = function () {
        return this.Ei
    };
    Li.prototype.isDown = function (a) {
        return !!this.em[a]
    };
    Li.prototype.isToggled = function () {
        return !1
    };
    Object.defineProperties(Li.prototype, {
        BACKSPACE: {value: 8},
        CAPSLOCK: {value: 20},
        CONTROL: {value: 17},
        DELETEKEY: {value: 46},
        DOWN: {value: 40},
        END: {value: 35},
        ENTER: {value: 13},
        ESCAPE: {value: 27},
        HOME: {value: 36},
        INSERT: {value: 45},
        LEFT: {value: 37},
        PGDN: {value: 34},
        PGUP: {value: 33},
        RIGHT: {value: 39},
        SHIFT: {value: 16},
        SPACE: {value: 32},
        TAB: {value: 9},
        UP: {value: 38}
    });
    Li.prototype.Gj = function (a) {
        this.Ei = a.keyCode;
        this.em[a.keyCode] = !1
    };
    Li.prototype.Fj = function (a) {
        this.Ei = a.keyCode;
        this.Fk = a.charCode;
        this.em[a.keyCode] = !0
    };
    var Mi = {37: 1, 39: 2, 36: 3, 35: 4, 45: 5, 46: 6, 8: 8, 13: 13, 38: 14, 40: 15, 33: 16, 34: 17, 9: 18, 27: 19};
    Li.prototype.Iv = function () {
        var a = Mi[this.Ei];
        return a ? a : this.Fk
    };
    D(Li.prototype, null, 3);
    var Ni = function () {
    };
    C(Ni, "Mouse");
    Ni.prototype.hide = function () {
        return r.i.va.jj(!1)
    };
    Ni.prototype.show = function () {
        return r.i.va.jj(!0)
    };
    D(Ni.prototype, null, 3);
    var Oi = function () {
        this.isConnected = !1
    };
    C(Oi, "NetConnection");
    Oi.prototype.connect = function () {
        return !0
    };
    var Pi = function () {
        oe(this, {Hk: 0, Sg: .1, Yc: 0, Zc: 0, cl: 0, time: 0, paused: !1})
    };
    C(Pi, "NetStream");
    Pi.prototype.play = function () {
    };
    Pi.prototype.close = function () {
    };
    Pi.prototype.pause = function () {
    };
    Pi.prototype.receiveAudio = function () {
    };
    Pi.prototype.receiveVideo = function () {
    };
    Pi.prototype.seek = function () {
    };
    Pi.prototype.setBufferTime = function (a) {
        x(this).Sg = a
    };
    Object.defineProperty(Pi.prototype, "bufferTime", {
        get: function () {
            return x(this).Sg
        }
    });
    Object.defineProperty(Pi.prototype, "bufferLength", {
        get: function () {
            return x(this).Hk
        }
    });
    Object.defineProperty(Pi.prototype, "bytesLoaded", {
        get: function () {
            return x(this).Yc
        }
    });
    Object.defineProperty(Pi.prototype, "bytesTotal", {
        get: function () {
            return x(this).Zc
        }
    });
    Object.defineProperty(Pi.prototype, "currentFps", {
        get: function () {
            return x(this).cl
        }
    });
    Object.defineProperty(Pi.prototype, "time", {
        get: function () {
            return x(this).time
        }
    });
    var Qi = function () {
    };
    Qi.prototype.valueOf = function () {
    };
    var Ri = function (a) {
        return null != a ? Object(a) : new Qi
    };
    "__proto__" in Object || Object.defineProperty(Ri.prototype, "__proto__", {
        get: function () {
            return Object.getPrototypeOf(this)
        }
    });
    var Si = function (a) {
        return null != a ? Object(a) : Object.create(Ri.prototype)
    }, Ti = {};
    Ri.registerClass = function (a, b) {
        if (2 > arguments.length) return !1;
        Ti[a] = b;
        return !0
    };
    D(Ri, null, 3);
    var Ui = function (a) {
        return Ri.call(this, a)
    };
    C(Ui, "Function", Ri);
    Object.defineProperty(Ui, "__swiffy_wrapped_type", {value: Function});
    Object.defineProperty(Function, "__swiffy_override", {value: Si});
    Object.defineProperty(Ui, "__swiffy_override", {value: Si});
    var Vi = function (a, b) {
        var c = this && this.__swiffy_override || this;
        if (ka(c)) return c.apply(Ri(a), fa(b) ? b : [])
    };
    Ui.prototype.apply = Vi;
    Object.defineProperty(Function.prototype.apply, "__swiffy_override", {value: Vi});
    Function.prototype.bind && Object.defineProperty(Function.prototype.bind, "__swiffy_override", {value: void 0});
    var Wi = function (a, b) {
        return Vi.call(this, a, Array.prototype.slice.call(arguments, 1))
    };
    Ui.prototype.call = Wi;
    Object.defineProperty(Function.prototype.call, "__swiffy_override", {value: Wi});
    D(Ui, null, 3);
    D(Ui.prototype, null, 3);
    var Xi = function (a, b) {
        this.x = l(a) ? a : 0;
        this.y = l(b) ? b : 0
    };
    C(Xi, "Point", Ri);
    Object.defineProperty(Xi.prototype, "length", {
        get: function () {
            return Fc(this.x, this.y)
        }
    });
    Xi.prototype.add = function (a) {
        return new Xi(this.x + a.x, this.y + a.y)
    };
    Xi.prototype.clone = function () {
        return new Xi(this.x, this.y)
    };
    Xi.distance = function (a, b) {
        return Fc(a.x - b.x, a.y - b.y)
    };
    Xi.prototype.equals = function (a) {
        return this.x == a.x && this.y == a.y
    };
    Xi.interpolate = function (a, b, c) {
        return new Xi(a.x * c + b.x * (1 - c), a.y * c + b.y * (1 - c))
    };
    Xi.prototype.normalize = function (a) {
        a /= this.length;
        this.x *= a;
        this.y *= a
    };
    Xi.prototype.offset = function (a, b) {
        this.x += a;
        this.y += b
    };
    Xi.polar = function (a, b) {
        return new Xi(a * Math.cos(b), a * Math.sin(b))
    };
    Xi.prototype.subtract = function (a) {
        return new Xi(this.x - a.x, this.y - a.y)
    };
    Xi.prototype.toString = function () {
        return "(x=" + this.x + ", y=" + this.y + ")"
    };
    var Yi = function (a, b, c, d, e, f) {
        var h = [1, 0, 0, 1, 0, 0];
        if (0 < arguments.length) for (var k = 0; 6 > k; ++k) h[k] = arguments[k];
        oe(this, h)
    };
    C(Yi, "Matrix", Ri);
    ai.forEach(function (a, b) {
        Object.defineProperty(Yi.prototype, a, {
            get: function () {
                return x(this)[b]
            }, set: function (a) {
                x(this)[b] = a
            }
        })
    });
    Yi.prototype.clone = function () {
        var a = x(this);
        return new Yi(a[0], a[1], a[2], a[3], a[4], a[5])
    };
    Yi.prototype.concat = function (a) {
        a instanceof Yi && di.call(this, a)
    };
    Yi.prototype.copyFrom = function (a) {
        a instanceof Yi && ei.call(this, a)
    };
    Yi.prototype.createBox = function (a, b, c, d, e) {
        fi.call(this, Number(a), Number(b), Number(c || 0), Number(d || 0), Number(e || 0))
    };
    Yi.prototype.createGradientBox = function (a, b, c, d, e) {
        a = Number(a);
        b = Number(b);
        fi.call(this, a * Lc, b * Lc, Number(c || 0), a / 2 + Number(d || 0), b / 2 + Number(e || 0))
    };
    Yi.prototype.deltaTransformPoint = function (a) {
        return gi.call(this, a.x, a.y, Xi)
    };
    Yi.prototype.identity = function () {
        hi.call(this)
    };
    Yi.prototype.invert = function () {
        ii.call(this)
    };
    Yi.prototype.rotate = function (a) {
        ji.call(this, a)
    };
    Yi.prototype.scale = function (a, b) {
        ki.call(this, a, b)
    };
    Yi.prototype.transformPoint = function (a) {
        return li.call(this, a.x, a.y, Xi)
    };
    Yi.prototype.translate = function (a, b) {
        var c = x(this);
        c[4] += a;
        c[5] += b
    };
    Yi.prototype.toString = function () {
        return Uh(this, ai)
    };
    var Zi = function (a, b, c, d) {
        this.x = l(a) ? a : 0;
        this.y = l(b) ? b : 0;
        this.width = l(c) ? c : 0;
        this.height = l(d) ? d : 0
    };
    C(Zi, "Rectangle", Ri);
    Object.defineProperty(Zi.prototype, "top", {
        get: function () {
            return this.y
        }, set: function (a) {
            this.y = a
        }
    });
    Object.defineProperty(Zi.prototype, "left", {
        get: function () {
            return this.x
        }, set: function (a) {
            this.x = a
        }
    });
    Object.defineProperty(Zi.prototype, "bottom", {
        get: function () {
            return this.y + this.height
        }, set: function (a) {
            this.height = a - this.y
        }
    });
    Object.defineProperty(Zi.prototype, "right", {
        get: function () {
            return this.x + this.width
        }, set: function (a) {
            this.width = a - this.x
        }
    });
    Object.defineProperty(Zi.prototype, "topLeft", {
        get: function () {
            return new Xi(this.left, this.top)
        }, set: function (a) {
            this.left = a.x;
            this.top = a.y
        }
    });
    Object.defineProperty(Zi.prototype, "bottomRight", {
        get: function () {
            return new Xi(this.right, this.bottom)
        }, set: function (a) {
            this.right = a.x;
            this.bottom = a.y
        }
    });
    Object.defineProperty(Zi.prototype, "size", {
        get: function () {
            return new Xi(this.width, this.height)
        }, set: function (a) {
            this.width = a.x;
            this.height = a.y
        }
    });
    Zi.prototype.clone = function () {
        return new Zi(this.x, this.y, this.width, this.height)
    };
    Zi.prototype.contains = function (a, b) {
        return this.x <= a && this.y <= b && a < this.right && b < this.bottom
    };
    Zi.prototype.containsPoint = function (a) {
        return this.contains(a.x, a.y)
    };
    Zi.prototype.containsRectangle = function (a) {
        var b = this.right, c = this.bottom, d = a.right, e = a.bottom;
        return this.x <= a.x && this.y <= a.y && a.x < b && a.y < c && this.x < d && this.y < e && d <= b && e <= c
    };
    Zi.prototype.copyFrom = function (a) {
        this.x = a.x;
        this.y = a.y;
        this.width = a.width;
        this.height = a.height
    };
    Zi.prototype.equals = function (a) {
        return this.x == a.x && this.y == a.y && this.width == a.width && this.height == a.height
    };
    Zi.prototype.inflate = function (a, b) {
        this.x -= a;
        this.y -= b;
        this.width += 2 * a;
        this.height += 2 * b
    };
    Zi.prototype.inflatePoint = function (a) {
        this.inflate(a.x, a.y)
    };
    Zi.prototype.intersection = function (a) {
        if (this.intersects(a)) {
            var b = Math.max(this.x, a.x), c = Math.max(this.y, a.y);
            return new Zi(b, c, Math.min(this.right, a.right) - b, Math.min(this.bottom, a.bottom) - c)
        }
        return new Zi
    };
    Zi.prototype.intersects = function (a) {
        return 0 < a.width && 0 < a.height && 0 < this.width && 0 < this.height && a.x < this.right && a.y < this.bottom && a.right > this.x && a.bottom > this.y
    };
    Zi.prototype.isEmpty = function () {
        return 0 >= this.width || 0 >= this.height
    };
    Zi.prototype.offset = function (a, b) {
        this.x += a;
        this.y += b
    };
    Zi.prototype.offsetPoint = function (a) {
        this.offset(a.x, a.y)
    };
    Zi.prototype.setEmpty = function () {
        this.height = this.width = this.y = this.x = 0
    };
    Zi.prototype.union = function (a) {
        if (this.isEmpty()) return a.clone();
        if (a.isEmpty()) return this.clone();
        var b = Math.min(this.x, a.x), c = Math.min(this.y, a.y);
        return new Zi(b, c, Math.max(this.right, a.right) - b, Math.max(this.bottom, a.bottom) - c)
    };
    Zi.prototype.toString = function () {
        return "(x=" + this.x + ", y=" + this.y + ", w=" + this.width + ", h=" + this.height + ")"
    };
    var aj = function (a) {
        var b;
        null != a ? (a = a.__swiffy_d, a instanceof $i && (b = a.ib)) : b = r.i.ec().ib;
        oe(this, {transform: b, bi: null})
    };
    C(aj, "Sound");
    aj.prototype.checkPolicyFile = !1;
    Object.defineProperty(aj.prototype, "duration", {value: 0});
    Object.defineProperty(aj.prototype, "id3", {value: void 0});
    Object.defineProperty(aj.prototype, "position", {value: 0});
    aj.prototype.onID3 = void 0;
    aj.prototype.onLoad = void 0;
    aj.prototype.onSoundComplete = void 0;
    aj.prototype.attachSound = function (a) {
        a = r.i.Cl(String(a), ag);
        l(a) && (x(this).bi = a)
    };
    aj.prototype.getBytesLoaded = function () {
        return 0
    };
    aj.prototype.getBytesTotal = function () {
        return 0
    };
    aj.prototype.getPan = function () {
        var a = x(this).transform;
        if (a) {
            var b = Math.abs(Math.round(100 * a.yc)), a = Math.abs(Math.round(100 * a.Pc));
            return 100 == b ? -100 + a : 100 - b
        }
    };
    aj.prototype.getTransform = function () {
        var a = x(this).transform;
        return a && {ll: Math.round(100 * a.yc), lr: Math.round(100 * a.Rd), rl: Math.round(100 * a.ee), rr: Math.round(100 * a.Pc)}
    };
    aj.prototype.getVolume = function () {
        var a = x(this).transform;
        return a && Math.round(100 * a.volume)
    };
    aj.prototype.loadSound = function () {
    };
    aj.prototype.setPan = function (a) {
        a = bj(a);
        var b = x(this).transform;
        b && (b.yc = 0 < a ? 1 - a / 100 : 1, b.Rd = 0, b.ee = 0, b.Pc = 0 > a ? 1 + a / 100 : 1)
    };
    aj.prototype.setTransform = function (a) {
        var b = x(this).transform;
        a && b && (l(a.ll) && (b.yc = (a.ll | 0) / 100), l(a.lr) && (b.Rd = (a.lr | 0) / 100), l(a.rl) && (b.ee = (a.rl | 0) / 100), l(a.rr) && (b.Pc = (a.rr | 0) / 100))
    };
    aj.prototype.setVolume = function (a) {
        a = bj(a);
        var b = x(this).transform;
        b && (b.volume = a / 100, r.i.ec().ci())
    };
    aj.prototype.start = function (a, b) {
        var c = x(this);
        if (c.transform) {
            var d = this;
            c.bi && r.i.ec().Uk(c.bi, c.transform, function () {
                if (ka(d.onSoundComplete)) d.onSoundComplete()
            }, 1E3 * a | 0, b | 0)
        }
    };
    aj.prototype.stop = function (a) {
        var b = x(this).transform;
        if (b) {
            var c;
            if (a && (c = r.i.Cl(a, ag), !c)) return;
            r.i.ec().jn(b, c)
        }
    };
    D(aj.prototype, null, 3);
    var bj = function (a) {
        a = Number(a);
        return isNaN(a) ? -2147483648 : a | 0
    };
    var cj = function () {
        this.showMenu = !0
    };
    C(cj, "Stage");
    Object.defineProperty(cj.prototype, "height", {
        get: function () {
            var a = this.__swiffy_d;
            return "noScale" == a.Qc ? a.bd : a.cn
        }, set: function () {
        }
    });
    Object.defineProperty(cj.prototype, "width", {
        get: function () {
            var a = this.__swiffy_d;
            return "noScale" == a.Qc ? a.cd : a.en
        }, set: function () {
        }
    });
    Object.defineProperty(cj.prototype, "align", {
        get: function () {
            return this.__swiffy_d.Np("LTRB")
        }, set: function (a) {
            this.__swiffy_d.js(String(a))
        }
    });
    Object.defineProperty(cj.prototype, "scaleMode", {
        get: function () {
            return this.__swiffy_d.Qc
        }, set: function (a) {
            var b = this.__swiffy_d;
            switch (String(a).toLowerCase()) {
                case "exactfit":
                    a = "exactFit";
                    break;
                case "noborder":
                    a = "noBorder";
                    break;
                case "noscale":
                    a = "noScale";
                    break;
                default:
                    a = "showAll"
            }
            b.Ds(a)
        }
    });
    D(cj.prototype, null, 3);
    var dj = function () {
        this.allowDomain = function () {
            return !0
        };
        this.allowInsecureDomain = function () {
            return !0
        }
    };
    C(dj, "System.security");
    var ej = function () {
        this.security = new dj
    };
    C(ej, "System");
    var fj = function () {
        oe(this, new Xe)
    };
    C(fj, "TextFormat");
    var gj = function (a) {
        var b = Object.create(fj.prototype);
        oe(b, a);
        return b
    };
    Object.defineProperties(fj.prototype, {
        align: {get: gf, set: hf, Ya: !0},
        blockIndent: {get: jf, set: kf, Ya: !0},
        bold: {get: lf, set: mf, Ya: !0},
        bullet: {get: nf, set: of, Ya: !0},
        color: {get: pf, set: qf, Ya: !0},
        font: {get: rf, set: sf, Ya: !0},
        indent: {get: tf, set: uf, Ya: !0},
        italic: {get: vf, set: wf, Ya: !0},
        kerning: {get: xf, set: yf, Ya: !0},
        leading: {get: zf, set: Af, Ya: !0},
        leftMargin: {get: Bf, set: Cf, Ya: !0},
        letterSpacing: {get: Df, set: Ef, Ya: !0},
        rightMargin: {get: Ff, set: Gf, Ya: !0},
        size: {get: Hf, set: If, Ya: !0},
        tabStops: {get: Lf, set: Mf, Ya: !0},
        target: {
            get: Jf,
            set: Kf, Ya: !0
        },
        underline: {get: Nf, set: Of, Ya: !0},
        url: {get: Pf, set: Qf, Ya: !0}
    });
    var ij = function (a, b) {
        if ("_" == b.charAt(0) && a instanceof E) {
            if (b in a) return b;
            var c = b.toLowerCase();
            if (hj[c] && c in a) return c
        }
        return b
    }, lj = function (a, b) {
        var c = jj[typeof a];
        if (c) {
            var d = b.toLowerCase();
            return (c = c[d]) ? c : d
        }
        if (b in a) return b;
        var e = kj(a), d = b.toLowerCase();
        return (c = e[d]) ? c : b == d || d in a ? d : e[d] = b
    }, mj = function (a, b) {
        var c = jj[typeof a];
        if (!c) {
            if (b in a) return b;
            c = kj(a)
        }
        var d = b.toLowerCase();
        return (c = c[d]) ? c : d
    }, pj = function (a) {
        a = a instanceof nj ? a.getParent() : a;
        return a = this.ul(a, oj)
    }, rj = function (a) {
        a =
a instanceof nj?a.getParent():a;return a=this.ul(a,qj)},sj=function(a){return ja(a)?a:null==a||ha(a)&&""===a.trim()?Number.NaN:Number(a)},tj=function(a){return ja(a)?a:null!=a?ha(a)&&""===a.trim()?Number.NaN:Number(a):0},uj=function(a){return ja(a)?a:null!=a?ha(a)?(a=Number(a),isNaN(a)?0:a):Number(a):0},vj=function(a){if(ha(a))return a;ia(a)&&(a=a?"1":"0");return l(a)?a instanceof E?(a=a.__swiffy_d)?a.rj():"":a+"":""},wj=function(a){return ha(a)?a:l(a)?a instanceof E?(a=a.__swiffy_d)?a.rj():"":a+
"":""},xj=function(a){return ha(a)?a:a instanceof E?(a=a.__swiffy_d)?a.rj():"":a+""},yj=function(a){return!!a},zj=function(a){return!(ha(a)?!Number(a):!a)},Aj=function(a,b){return a==b?1:0},Bj=function(a,b){return a==b},Cj=function(a,b){var c=typeof a,d=typeof b;return"number"===c&&"number"===d?a==b:this.Kp(a,c,b,d)},Dj=function(a,b){var c=typeof a,d=typeof b;return c===d&&null===a===(null===b)?a==b:this.Kp(a,c,b,d)};var Ej=function(a){this.yo=a;this.yj=0};g=Ej.prototype;g.Pv=function(){return this.yj<this.yo.length};g.ce=function(){return this.yo.charCodeAt(this.yj++)};g.Ir=function(){return this.ce()<<24>>24};g.kg=function(){var a=0,b=0;do var c=this.ce(),b=b+((c&127)<<a),a=a+7;while(c&128);return b};g.Hr=function(){var a=this.ce(),a=a|this.ce()<<8;return a|=this.Ir()<<16};var Fj=function(a){return[a.kg()]},Gj=function(a){return[a.kg(),a.kg()]},Hj=function(a,b,c){a=a.Hr()+a.yj;c[a]=!0;return[a]};var Ij=function(a){Object.defineProperty(this,"__swiffy_vm",{value:a});for(var b in Ij.prototype)Object.defineProperty(this,b,{value:oa(Ij.prototype[b],this)})},Jj=function(a,b){Object.defineProperty(Ij.prototype,a,{value:b})};var Kj=function(a,b){return a?a+"."+b:String(b)},Lj=function(a,b){return!(a&&a.__swiffy_disable_search&&la(b.localName))},Nj=function(a,b,c){Mj&&b instanceof Mj&&(b=x(b),c=c||b.na,a?b=b.Ha():(a=b.uri,b=b.localName));this.uri=a;this.localName=b;this.na=c;this.Qe=void 0};g=Nj.prototype;g.complete=function(){return this};g.compile=function(){return""};g.ae=function(){l(this.Qe)||(this.Qe=Kj(this.uri,this.localName));return this.Qe};g.$a=function(a){if(!this.na&&Lj(a,this)){var b=this.ae();if(b in Object(a))return b}};
    g.Uc = function () {
        return this
    };
    g.hp = function (a) {
        var b = null != this.uri ? this.uri : "*";
        return (b && "|" != b[0] ? b + a : "") + this.localName
    };
    g.Ha = function () {
        return this.hp("::")
    };
    g.zf = function () {
        return this.hp(".")
    };
    g.toString = function () {
        return (this.na ? "@" : "") + this.ae()
    };
    g.normalize = function () {
        var a = String(this.localName);
        return a === this.localName ? this : new Nj(this.uri, a, this.na)
    };
    g.sc = function () {
        if (!this.na && !this.uri) {
            var a = this.localName;
            return ja(a) ? !isFinite(a) || 0 > a || 0 != a % 1 ? void 0 : a : (a = String(a), /^[0-9]+$/.test(a) ? parseInt(a, 10) : void 0)
        }
    };
    g.Qg = function (a, b) {
        var c = this.sc();
        if (!l(c)) throw H(a, this.Ha(), Oj(b).zf());
        return c
    };
    var Pj = function (a, b) {
        this.name = a;
        this.na = b
    };
    Pj.prototype.complete = function (a) {
        return new Nj(String(a), this.name, this.na)
    };
    Pj.prototype.compile = function (a) {
        return "," + a.pop()
    };
    Pj.prototype.toString = function () {
        return (this.na ? "@" : "") + Kj("?", this.name)
    };
    var Qj = function (a) {
        this.na = a
    };
    Qj.prototype.complete = function (a, b) {
        return new Nj(String(b), a, this.na)
    };
    Qj.prototype.compile = function (a) {
        return "," + a.pop() + "," + a.pop()
    };
    Qj.prototype.toString = function () {
        return (this.na ? "@" : "") + Kj("?", "?")
    };
    var Rj = function (a, b, c) {
        this.namespaces = a;
        this.localName = b;
        this.na = c
    };
    g = Rj.prototype;
    g.complete = function () {
        return this
    };
    g.compile = function () {
        return ""
    };
    g.ae = function () {
        return Kj("", this.localName)
    };
    g.$a = function (a) {
        if (!this.na && Lj(a, this)) {
            var b = this.namespaces, c = this.localName;
            a = Object(a);
            for (var d = 0; d < b.length; ++d) {
                var e = Kj(b[d], c);
                if (e in a) return e
            }
        }
    };
    g.Uc = function () {
        return new Nj("", this.localName, this.na)
    };
    g.Ha = function () {
        return String(this.localName)
    };
    g.zf = function () {
        return String(this.localName)
    };
    g.toString = function () {
        return (this.na ? "@" : "") + Kj("[" + this.namespaces.join(", ") + "]", this.localName)
    };
    var Sj = function (a, b) {
        this.namespaces = a;
        this.na = b
    };
    Sj.prototype.complete = function (a) {
        return new Rj(this.namespaces, a, this.na)
    };
    Sj.prototype.compile = function (a) {
        return "," + a.pop()
    };
    Sj.prototype.toString = function () {
        return (this.na ? "@" : "") + Kj("[" + this.namespaces.join(", ") + "]", "?")
    };
    var Tj = function (a) {
        this.Lp = a;
        this.gg = ""
    };
    Tj.prototype.eo = function (a) {
        this.gg && (this.gg += ",");
        this.gg += a ? a.Ha() : "*";
        return this
    };
    Tj.prototype.vo = function () {
        return new Nj(this.Lp.uri, this.Lp.localName + ".<" + this.gg + ">", !1)
    };
    var Uj = function (a, b, c) {
        if (!a) return null;
        var d = a.kind;
        if (7 == d) d = !1; else if (13 == d) d = !0; else return null;
        return new Nj(c[a.ns], b[a.name], d)
    }, Vj = function (a, b, c, d, e) {
        switch (a.kind) {
            case 9:
                return new Rj(d[a.ns], b[a.name], !1);
            case 14:
                return new Rj(d[a.ns], b[a.name], !0);
            case 27:
                return new Sj(d[a.ns], !1);
            case 28:
                return new Sj(d[a.ns], !0);
            case 15:
                return new Pj(b[a.name], !1);
            case 16:
                return new Pj(b[a.name], !0);
            case 17:
                return new Qj(!1);
            case 18:
                return new Qj(!0);
            case 7:
            case 13:
                return Uj(a, b, c);
            case 29:
                d = Uj(e[a.name -
                1], b, c);
                if (!d) return null;
                d = new Tj(d);
                for (var f = 0; f < a.params.length; f++) d.eo(Uj(e[a.params[f] - 1], b, c));
                return d.vo();
            default:
                return null
        }
    };
    var Yj = function (a, b, c, d) {
        a = Wj(a);
        var e = b.$a(a);
        if (l(e)) return Xj(d || a, a[e], c, e);
        if ((d = a.__swiffy_proxy) && d.rf) return d.rf.call(a, b.Uc(), c);
        throw H(1069, b.Ha(), Oj(a).zf());
    }, Zj = function (a, b) {
        a = Wj(a);
        if (b.$a(a)) return !0;
        var c = a.__swiffy_proxy;
        return c && c.Le ? c.Le.call(a, b.Uc()) : !1
    }, ak = function (a, b) {
        a = Wj(a);
        var c = b.$a(a);
        if (l(c)) return a[c];
        if ((c = a.__swiffy_proxy) && c.Fe) return c.Fe.call(a, b.Uc())
    }, bk = function (a, b, c) {
        a = Wj(a);
        var d = b.$a(a);
        l(d) ? a[d] = c : (d = a.__swiffy_proxy) && d.setProperty ? d.setProperty.call(a,
            b.Uc(), c) : a[b.ae()] = c
    };
    var ck = /^(?:(\{\d+(?:,(?:\d+)?)?\})|(\\u\d{4})|(\\x\d{2})|(\\[0-7]{1,3})|(\\b|\\B|\\d|\\D|\\f|\\n|\\r|\\s|\\S|\\t|\\v|\\w|\\W)|(\(\?#[^)]*\))|(\(\?P<\w+>)|(\(\?:)|(\(\?=)|(\(\?!)|(\()|(\[\^)|(\[)|([\^$.*+?|])|(\)))/,
        dk = /^(?:(\\u\d{4})|(\\x\d{2})|(\\[0-7]{1,3})|(\\b|\\B|\\d|\\D|\\f|\\n|\\r|\\s|\\S|\\t|\\v|\\w|\\W)|([\-])|(\]))/, ek = /<(\w+)>/, gk = function (a, b) {
            this.Gp = b || "";
            this.fs = new fk(a);
            this.nk = [];
            this.ih = 0;
            this.Gf = !1
        };
    gk.prototype.translate = function () {
        for (var a = "", b = "", c = !1, d = !1, e = 0; e < this.Gp.length; ++e) {
            var f = this.Gp[e];
            "s" === f ? c = !0 : "x" === f ? d = !0 : -1 !== "gim".indexOf(f) && (b += f)
        }
        var h = 0, k = [], n = this;
        this.fs.lu(function (b, e) {
            var f;
            if (0 === n.ih) switch (f = 0, e) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    a += b;
                    break;
                case 14:
                    a = c && "." === b ? a + "[\\s\\S]" : a + b;
                    break;
                case 8:
                case 9:
                case 10:
                    a += b;
                    n.$i(0);
                    break;
                case 7:
                    ++h;
                    var t = ek.exec(b);
                    k.push({name: t[1], index: h});
                    a += "(";
                    n.$i(0);
                    break;
                case 11:
                    ++h;
                    a += b;
                    n.$i(0);
                    break;
                case 12:
                case 13:
                    a += b;
                    n.$i(1);
                    f = 1;
                    break;
                case 15:
                    a += b;
                    n.Ap();
                    break;
                case -2:
                    a += "\\" + b;
                    break;
                case -1:
                    d && " " === b || (a += b)
            } else if (1 === n.ih) switch (f = 1, e) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    a += b;
                    break;
                case 6:
                    a += b;
                    n.Ap();
                    f = 0;
                    break;
                case -2:
                    a += "\\" + b;
                    break;
                case -1:
                    d && " " === b || (a += b)
            } else f = -1;
            return f
        });
        0 !== this.nk.length && (this.Gf = !0);
        if (this.Gf || this.fs.Gf) return RegExp(".^", b);
        if (0 === k.length) return new RegExp(a, b);
        b = new RegExp(a, b);
        b.exec = function (a) {
            var b = RegExp.prototype.exec.call(this, a);
            k.forEach(function (a) {
                b[a.name] = b[a.index]
            });
            return b
        };
        return b
    };
    gk.prototype.$i = function (a) {
        this.nk.push(this.ih);
        this.ih = a
    };
    gk.prototype.Ap = function () {
        0 !== this.nk.length ? this.ih = this.nk.pop() : this.Gf = !0
    };
    var fk = function (a) {
        this.wc = a;
        this.D = 0;
        this.Gf = !1
    };
    fk.prototype.lu = function (a) {
        for (; "" !== this.wc;) {
            var b;
            0 === this.D ? b = ck : 1 === this.D && (b = dk);
            var c = b.exec(this.wc);
            if (null !== c) {
                var d = 0, e = this;
                c.forEach(function (b, f) {
                    0 !== f && void 0 !== b && (e.D = a(c[0], f), ++d)
                });
                this.wc = this.wc.slice(c[0].length)
            } else {
                var f = this.wc[0];
                "\\" === f ? (this.wc = this.wc.slice(1), "" !== this.wc ? f = this.wc[0] : this.Gf = !0, this.D = a(f, -2)) : this.D = a(f, -1);
                this.wc = this.wc.slice(1)
            }
        }
    };
    var hk = function (a, b, c) {
        this.wa = a;
        this.Nh = b;
        this.kw = c;
        this.sj = a ? a.sj : b
    }, ik = new hk(null, {}, !1);
    g = hk.prototype;
    g.Er = function (a) {
        return new hk(this === ik ? null : this, a, !1)
    };
    g.hx = function (a) {
        return new hk(this === ik ? null : this, a, !0)
    };
    g.tq = function (a) {
        return this.kw ? Zj(this.Nh, a) : l(a.$a(this.Nh))
    };
    g.find = function (a) {
        for (var b = this; b.wa && !b.tq(a);) b = b.wa;
        return b.Nh
    };
    g.Ep = function (a) {
        for (var b = this; b; b = b.wa) if (b.tq(a)) return b.Nh;
        throw H(1065, a.zf());
    };
    g.qv = function (a) {
        var b = this.Ep(a);
        return ak(b, a)
    };
    g.St = function (a, b, c) {
        return Yj(a, b, c, this.sj)
    };
    g.Fv = function () {
        return this.Nh
    };
    g.nv = function () {
        return this.sj
    };
    g.du = function (a) {
        return null != a && a !== aa ? a : this.sj
    };
    var jk = function (a, b, c) {
        throw H(a, b, Oj(c).zf());
    }, kk = function (a, b) {
        return function () {
            jk(a, b, this)
        }
    }, lk = function (a) {
        this.traits = a ? Object.create(a.traits) : {};
        this.pk = a ? a.pk.slice() : [];
        this.Wi = a ? a.Wi.slice() : []
    };
    g = lk.prototype;
    g.me = function (a, b) {
        this.traits[a] = b.Dm(this.traits[a])
    };
    g.uu = function (a) {
        for (var b in a.traits) this.me(b, a.traits[b])
    };
    g.Mi = function (a) {
        (this.pk.length || this.Wi.length) && Object.defineProperty(a, "__swiffy_slots", {value: this.pk.concat(this.Wi)});
        for (var b in this.traits) a.hasOwnProperty(b) || this.traits[b].$k(a, b);
        return a
    };
    g.xx = function (a, b, c, d, e, f) {
        a = this.Au(a, b, c, d, e, f);
        b && this.me(b.ae(), a)
    };
    g.Au = function (a, b, c, d, e, f) {
        if (a.slot) return d && (c = d.__swiffy_coerce(c)), this.pk[a.slot] = c, new mk(a.slot, d, !a.writable);
        b = String(b.localName);
        switch (a.kind) {
            case "methods":
                return new nk((c ? c(e, f) : void 0) || ok(b));
            case "setters":
                return new pk(void 0, (c ? c(e, f) : void 0) || qk(b));
            case "getters":
                return new pk((c ? c(e, f) : void 0) || rk(b), void 0);
            default:
                return d && (c = d.__swiffy_coerce(c)), new mk(-this.Wi.unshift(c), d, !a.writable)
        }
    };
    var mk = function (a, b, c) {
        this.hu = c;
        this.Hu = sk(a, b)
    };
    g = mk.prototype;
    g.$k = function (a, b) {
        Object.defineProperty(a, b, this.Hu)
    };
    g.get = function (a, b) {
        return a[b]
    };
    g.set = function (a, b, c) {
        a[b] = c
    };
    g.callee = function (a, b) {
        return a[b]
    };
    g.Dm = function () {
        return this
    };
    var sk = function (a, b) {
        var c, d;
        0 > a ? (c = function () {
            var b = this.__swiffy_slots;
            return b[b.length + a]
        }, d = b ? function (c) {
            var d = this.__swiffy_slots;
            d[d.length + a] = b.__swiffy_coerce(c)
        } : function (b) {
            var c = this.__swiffy_slots;
            c[c.length + a] = b
        }) : (c = function () {
            return this.__swiffy_slots[a]
        }, d = b ? function (c) {
            this.__swiffy_slots[a] = b.__swiffy_coerce(c)
        } : function (b) {
            this.__swiffy_slots[a] = b
        });
        return {get: c, set: d}
    }, nk = function (a) {
        this.method = a
    };
    g = nk.prototype;
    g.$k = function (a, b) {
        Object.defineProperty(a, b, {value: oa(this.method, a)})
    };
    g.get = function (a) {
        return oa(this.method, a)
    };
    g.set = function (a, b) {
        jk(1037, b, a)
    };
    g.callee = function () {
        return this.method
    };
    g.Dm = function () {
        return this
    };
    var pk = function (a, b) {
        this.Ie = a;
        this.We = b
    };
    g = pk.prototype;
    g.$k = function (a, b) {
        var c = Eg(a, b) || {};
        c.get = this.Ie || c.get || kk(1077, b);
        c.set = this.We || c.set || kk(1074, b);
        Object.defineProperty(a, b, c)
    };
    g.get = function (a, b) {
        var c = this.Ie;
        c || (c = (c = Eg(a, b)) && c.get);
        if (c) return c.call(a);
        jk(1077, b, a)
    };
    g.set = function (a, b, c) {
        var d = this.We;
        d || (d = (d = Eg(a, b)) && d.set);
        d ? d.call(a, c) : jk(1074, b, a)
    };
    g.callee = function (a, b) {
        return this.get(a, b)
    };
    g.Dm = function (a) {
        if (a instanceof pk) {
            var b = this.Ie || a.Ie;
            a = this.We || a.We;
            if (b != this.Ie || a != this.We) return new pk(b, a)
        }
        return this
    };
    var ok = function (a) {
        return function () {
            return this[a].apply(this, arguments)
        }
    }, rk = function (a) {
        return function () {
            return this[a]
        }
    }, qk = function (a) {
        return function (b) {
            this[a] = b
        }
    }, I = function (a, b, c) {
        tk(a).me(b, new nk(c));
        uk(a, b, "value", c)
    }, J = function (a, b, c) {
        tk(a).me(b, new pk(c, void 0));
        uk(a, b, "get", c)
    }, K = function (a, b, c) {
        tk(a).me(b, new pk(void 0, c));
        uk(a, b, "set", c)
    }, vk = function (a, b, c, d) {
        tk(a).me(b, new pk(c, d));
        Object.defineProperty(a.prototype, b, {get: c, set: d, configurable: !0})
    }, wk = function (a) {
        var b = tk(a), c =
            Oj(a), c = (c.uri ? c.uri + ":" : "") + c.localName + ".", d;
        for (d in a.prototype) b.me(c + d, new nk(ok(d)))
    }, uk = function (a, b, c, d) {
        a = a.prototype;
        var e = Eg(a, b) || {};
        e.configurable = !0;
        e[c] = d;
        Object.defineProperty(a, b, e)
    };
    var xk = function () {
            return "[class " + this.__swiffy_name.localName + "]"
        }, yk = 1, Bk = function (a, b, c, d, e, f, h, k, n) {
            var q = yk++;
            if (!k) k = new Nj("", "unnamed#" + q, !1); else if (!(k instanceof Nj)) {
                var u = k.lastIndexOf(".");
                k = new Nj(0 < u ? k.substring(0, u) : "", 0 < u ? k.substring(u + 1) : k, !1)
            }
            (n = y(n, Ij.prototype)) && M(n, k.ae(), a);
            Object.defineProperty(a.prototype, "__swiffy_classdef", {value: a});
            Object.defineProperty(a.prototype, "constructor", {value: a, writable: !0});
            Object.defineProperty(a, "__swiffy_classdef", {value: zk});
            Object.defineProperty(a,
                "__swiffy_coerce", {value: b});
            Object.defineProperty(a, "__swiffy_istype", {value: c});
            Object.defineProperty(a, "__swiffy_constructor", {value: d});
            Object.defineProperty(a, "__swiffy_new", {value: e});
            Object.defineProperty(a, "__swiffy_baseclass", {value: f});
            b = new lk(f && f.__swiffy_traits);
            Object.defineProperty(a, "__swiffy_traits", {value: b});
            f = f ? f.__swiffy_if.slice() : [];
            if (h) for (c = 0; c < h.length; ++c) for (d = Ak(h[c]), b.uu(d.__swiffy_traits), d = d.__swiffy_if, e = 0; e < d.length; ++e) d[e] && (f[e] = d[e]);
            f[q] = a;
            Object.defineProperty(a,
                "__swiffy_if", {value: f});
            Object.defineProperty(a, "__swiffy_name", {value: k});
            Object.defineProperty(a, "__swiffy_typeid", {value: q});
            Object.defineProperty(a, "toString", {value: xk});
            return a
        }, Ek = function (a, b, c, d) {
            return Bk(b, c || b, Ck, b, d || b, Dk, null, a)
        }, Gk = function (a, b) {
            return null != a && Fk(b, a.__swiffy_classdef)
        }, Ik = function () {
            return function b(c) {
                return Hk.call(b, c)
            }
        }, Hk = function (a) {
            if (null != a) {
                if (Gk(a, this)) return a;
                throw H(1034, Oj(a), this.__swiffy_name);
            }
            return null
        }, Jk = function (a) {
            return Gk(a, this)
        }, Ck =
            function (a) {
                return this(a) === a
            }, Kk = function (a) {
            return a.__swiffy_typeid ? a : a.__swiffy_classdef
        }, Oj = function (a) {
            return null != a ? Kk(a).__swiffy_name : new Nj("", String(a), !1)
        }, Lk = function (a) {
            a = Object.create(a.prototype);
            tk(a.__swiffy_classdef).Mi(a);
            return a
        }, Nk = function (a) {
            var b = Lk(this);
            Mk(b).apply(b, arguments);
            return b
        }, Ok = function () {
            var a = this.__swiffy_singleton;
            l(a) || (a = Nk.call(this), Object.defineProperty(this, "__swiffy_singleton", {value: a}));
            return a
        }, N = function (a, b, c, d, e) {
            return Pk(a, b, {Rg: c, interfaces: d},
                e)
        }, Pk = function (a, b, c, d) {
            var e = c.ue || Ik(), f = c.Rg || Dk;
            e.prototype = Object.create(f.prototype);
            a.prototype = e.prototype;
            return Bk(e, c.eu || c.ue || Hk, Jk, a, c.Kd || Nk, Ak(f), c.interfaces, b, d)
        }, Qk = function (a) {
            return function () {
                throw H(a, Oj(this).localName + "$");
            }
        }, Rk = Qk(2012), Fk = function (a, b) {
            if (!b) return !1;
            if (!a) return !0;
            var c = Ak(a), d = Ak(b).__swiffy_if;
            return !(!d || !d[c.__swiffy_typeid])
        }, Sk = function (a, b) {
            a.prototype.hasOwnProperty("__swiffy_buildsym") || Object.defineProperty(a.prototype, "__swiffy_buildsym", {value: b})
        },
        Tk = function (a, b) {
            Sk(a, function (a, d) {
                return b.ob(a, null, d)
            })
        }, tk = function (a) {
            return a.__swiffy_traits
        }, Mk = function (a) {
            return a.__swiffy_classdef.__swiffy_constructor
        }, Uk = function (a, b) {
            if (!b || !b.__swiffy_typeid) throw H(1041);
            return b.__swiffy_istype(a) ? a : null
        }, Vk = function (a, b) {
            if (!b || !b.__swiffy_typeid) throw H(1041);
            return b.__swiffy_istype(a)
        }, O = function (a, b) {
            if (!b || !b.__swiffy_typeid) throw H(1041);
            return b.__swiffy_coerce(a)
        }, Wk = function (a) {
            if (this.__swiffy_new) return this.__swiffy_new.apply(this,
                arguments);
            var b = Object.create(this.prototype), c = this.apply(b, arguments);
            return c instanceof Object ? c : b
        }, Ak = function (a) {
            return a.prototype.__swiffy_classdef
        }, P = function (a, b, c, d, e) {
            var f = d;
            Object.defineProperty(a, b, {
                get: function () {
                    return f
                }, set: function (a) {
                    f = e && null == a ? null : O(a, Ij.prototype[c])
                }
            })
        }, M = function (a, b, c) {
            Object.defineProperty(a, b, {value: c})
        }, Q = function (a) {
            Oj(a).ae()
        }, Xk = function (a, b, c) {
            for (var d = 0; d < b.length; ++d) {
                for (var e = b[d], f = e, h = [], k = !1, n = 0; n < f.length; ++n) {
                    var q = f.charCodeAt(n), u =
                        97 <= q && 122 >= q;
                    if (u) q &= 223; else if (65 <= q && 90 >= q) {
                        var p = f.charCodeAt(n + 1);
                        (k || 0 != n && 97 <= p && 122 >= p) && h.push(95)
                    }
                    h.push(q);
                    k = u
                }
                M(a, String.fromCharCode.apply(String, h), e)
            }
            if (c) for (var t in c) M(a, t, c[t])
        }, Yk = function (a) {
            return null != a ? a : null
        }, Dk = function (a) {
            return null != a ? a : {}
        }, zk = Ik(), Zk = Ik();
    Ij.prototype = Object.create(Dk.prototype);
    Zk.prototype = Ij.prototype;
    Bk(Dk, Yk, function (a) {
        return null != a
    }, function () {
    }, function () {
        return {}
    }, null, null, "Object");
    Bk(zk, Hk, Jk, function () {
    }, Qk(1115), Dk, null, "Class");
    Object.defineProperty(Dk.prototype, "toString", {
        value: function () {
            return "[object " + this.__swiffy_classdef.__swiffy_name.localName + "]"
        }, writable: !0
    });
    Object.defineProperty(Object.prototype, "__swiffy_classdef", {value: Dk});
    Bk(Zk, Hk, Jk, Qk(1115), Nk, Dk, null, "global", null);
    var $k = function (a) {
        return null != a ? String(a) : null
    }, al = function (a, b) {
        return void 0 === a ? b : null === a ? null : String(a)
    };
    Ek("Boolean", Boolean, function (a) {
        return !!a
    });
    Ek("Number", Number, function (a) {
        return +a
    });
    Ek("String", String, $k);
    var bl = Ek("int", function (a) {
        return a | 0
    });
    M(bl, "MIN_VALUE", -2147483648);
    M(bl, "MAX_VALUE", 2147483647);
    var cl = Ek("uint", function (a) {
        return a >>> 0
    });
    M(cl, "MIN_VALUE", 0);
    M(cl, "MAX_VALUE", 4294967295);
    Ek("void", function () {
    });
    var dl = function (a, b) {
        oe(this, {id: b | 0, message: y(a, ""), name: "Error", stack: qg.slice()})
    }, el = N(dl, "Error");
    J(el, "errorID", function () {
        return x(this).id
    });
    vk(el, "message", function () {
        return x(this).message
    }, function (a) {
        x(this).message = a
    });
    vk(el, "name", function () {
        return x(this).name
    }, function (a) {
        x(this).name = String(a)
    });
    I(el, "getStackTrace", function () {
        for (var a = x(this).stack, b = this.toString(), c = a.length - 1; 0 <= c; --c) {
            var d = a[c];
            d && (b += "\n\tat " + d + "()")
        }
        return b
    });
    dl.prototype.toString = function () {
        var a = x(this);
        return a.message ? a.name + ": " + a.message : a.name
    };
    var fl = function (a, b) {
            var c = !b, d = b || dl, e = function (b, e) {
                d.call(this, b, e);
                c && (x(this).name = a)
            };
            N(e, a, d);
            return e
        }, gl = fl("ReferenceError"), hl = fl("TypeError"), il = fl("VerifyError"), jl = fl("ArgumentError"), kl = fl("RangeError"), ll = fl("URIError"), ml = fl("SecurityError"),
        pl = fl("flash.errors.IOError", dl), ql = fl("flash.errors.EOFError", pl), rl = fl("flash.errors.StackOverflowError", dl), sl = fl("flash.errors.IllegalOperationError", dl),
        tl = function (a) {
            if (null === a) throw H(1009);
            if (void 0 === a) throw H(1010);
        }, Wj = function (a) {
            tl(a);
            return Object(a)
        }, Xj = function (a, b, c, d) {
            if (ka(b)) return b.apply(a, c);
            throw H(1006, d || "value");
        }, ul = function (a, b) {
            if (null == a) throw H(2007, b);
        }, H = function (a, b) {
            var c = vl[a] || dl, d = wl[a], e = "Error #" + a;
            if (d) var f = arguments, e = e + (": " + d.replace(/%(\d+)/g, function (a, b) {
                return b < f.length ? f[b] : ""
            }));
            return new og(new c(e, a))
        }, wl = {
            1001: "The method %1 is not implemented.",
            1006: "%1 is not a function.",
            1007: "Instantiation attempted on a non-constructor.",
            1009: "Cannot access a property or method of a null object reference.",
            1010: "A term is undefined and has no properties.",
            1014: "Class %1 could not be found.",
            1016: "Descendants operator (..) not supported on type",
            1023: "Stack overflow occurred",
            1034: "Type Coercion failed: cannot convert %1 to %2.",
            1037: "Cannot assign to a method %1 on %2.",
            1040: "The right-hand side of instanceof must be a class or function.",
            1041: "The right-hand side of operator must be a class.",
            1052: "Invalid URI passed to %1 function.",
            1056: "Cannot create property %1 on %2.",
            1065: "Variable %1 is not defined.",
            1069: "Property %1 not found on %2 and there is no default value.",
            1074: "Illegal write to read-only property %1 on %2.",
            1077: "Illegal read of write-only property %1 on %2.",
            1083: 'The prefix "%1" for element "%2" is not bound.',
            1085: 'The element type "%1" must be terminated by the matching end-tag "</%2>".',
            1086: "The %1 method only works on lists containing one item.",
            1087: "Assignment to indexed XML is not allowed.",
            1088: "The markup in the document following the root element must be well-formed.",
            1090: "XML parser failure: element is malformed.",
            1091: "XML parser failure: Unterminated CDATA section.",
            1094: "XML parser failure: Unterminated comment.",
            1095: "XML parser failure: Unterminated attribute.",
            1097: "XML parser failure: Unterminated processing instruction.",
            1100: "Cannot supply flags when constructing one RegExp from another.",
            1115: "%1 is not a constructor.",
            1123: "Filter operator not supported on type %1.",
            1125: "The index %1 is out of range %2.",
            1126: "Cannot change the length of a fixed Vector.",
            1127: "Type application attempted on a non-parameterized type.",
            1504: "End of file.",
            1506: "The specified range is invalid.",
            1508: "The value specified for argument %1 is invalid.",
            2004: "One of the parameters is invalid.",
            2005: "Parameter %1 is of the incorrect type. Should be type %2.",
            2006: "The supplied index is out of bounds.",
            2007: "Parameter %1 must be non-null.",
            2008: "Parameter %1 must be one of the accepted values.",
            2012: "%1 class cannot be instantiated.",
            2015: "Invalid %1.",
            2024: "An object cannot be added as a child of itself.",
            2025: "The supplied DisplayObject must be a child of the caller.",
            2030: "End of file was encountered.",
            2035: "URL Not Found. URL: %1",
            2058: "There was an error decompressing the data.",
            2067: "The ExternalInterface is not available in this container.",
            2071: "The Stage class does not implement this property or method.",
            2088: "The Proxy class does not implement %1. It must be overridden by a subclass.",
            2089: "The Proxy class does not implement %1. It must be overridden by a subclass.",
            2090: "The Proxy class does not implement %1. It must be overridden by a subclass.",
            2091: "The Proxy class does not implement %1. It must be overridden by a subclass.",
            2092: "The Proxy class does not implement %1. It must be overridden by a subclass.",
            2093: "The Proxy class does not implement %1. It must be overridden by a subclass.",
            2098: "The loading object is not a .swf file, you cannot request SWF properties from it.",
            2099: "The loading object is not sufficiently loaded to provide this information.",
            2101: "The String passed to URLVariables.decode() must be a URL-encoded query string containing name/value pairs.",
            2105: "The Proxy class does not implement %1. It must be overridden by a subclass.",
            2106: "The Proxy class does not implement %1. It must be overridden by a subclass.",
            2107: "The Proxy class does not implement %1. It must be overridden by a subclass.",
            2108: "Scene %1 was not found.",
            2109: "Frame label %1 not found in scene %2.",
            2124: "Loaded file is an unknown type. URL: %1",
            2150: "An object cannot be added as a child to one of it's children (or children's children, etc.).",
            2152: "Full screen mode is not allowed."
        }, vl = {
            1001: il,
            1006: hl,
            1007: hl,
            1009: hl,
            1010: hl,
            1014: gl,
            1016: hl,
            1023: rl,
            1034: hl,
            1037: gl,
            1040: hl,
            1041: hl,
            1052: ll,
            1056: gl,
            1065: gl,
            1069: gl,
            1074: gl,
            1077: gl,
            1083: hl,
            1085: hl,
            1086: hl,
            1087: hl,
            1088: hl,
            1090: hl,
            1091: hl,
            1094: hl,
            1095: hl,
            1097: hl,
            1100: hl,
            1115: hl,
            1123: hl,
            1125: kl,
            1126: kl,
            1127: hl,
            1504: dl,
            1506: kl,
            1508: jl,
            2004: hl,
            2005: jl,
            2006: kl,
            2007: hl,
            2008: jl,
            2012: jl,
            2015: jl,
            2024: jl,
            2025: jl,
            2030: ql,
            2035: pl,
            2058: pl,
            2067: dl,
            2071: sl,
            2088: dl,
            2089: dl,
            2090: dl,
            2091: dl,
            2092: dl,
            2093: dl,
            2098: dl,
            2099: dl,
            2101: dl,
            2105: dl,
            2106: dl,
            2107: dl,
            2108: jl,
            2109: jl,
            2124: pl,
            2150: jl,
            2152: ml
        };
    var Mj = function (a) {
        oe(this, a.normalize())
    }, xl = function (a, b, c) {
        return new Mj(new Nj(a, b, c))
    };
    Pk(Mj, "QName", {
        ue: function (a) {
            return a instanceof Mj ? a : xl("", a, !1)
        }, Kd: function (a, b) {
            var c, d;
            if (l(b)) c = l(a) ? a instanceof Mj ? a.uri : null !== a ? String(a) : null : b instanceof Mj ? b.uri : "", d = b instanceof Mj ? b.localName : String(b); else if (c = "", l(a)) {
                if (a instanceof Mj) return a;
                d = String(a)
            } else d = "";
            return xl(c, d, !1)
        }
    });
    Object.defineProperty(Mj.prototype, "uri", {
        get: function () {
            return x(this).uri
        }
    });
    Object.defineProperty(Mj.prototype, "localName", {
        get: function () {
            return x(this).localName
        }
    });
    Mj.prototype.toString = function () {
        return x(this).Ha()
    };
    var yl = function (a, b) {
        var c, d;
        l(b) ? (c = Od(a), d = b instanceof Mj ? b.uri : String(b)) : l(a) ? a instanceof yl ? (c = a.prefix, d = a.uri) : (d = a instanceof Mj ? a.uri : String(a), c = void 0) : d = c = "";
        M(this, "prefix", c);
        M(this, "uri", d)
    }, zl = function (a) {
        return a instanceof yl ? a : new yl(void 0, String(a))
    };
    Pk(yl, "Namespace", {ue: zl});
    yl.prototype.valueOf = function () {
        return this.uri
    };
    yl.prototype.toString = function () {
        return this.uri
    };
    var Bl = function (a, b) {
        this.Vl = a;
        this.strings = a.strings;
        this.ints = a.ints;
        this.uints = a.uints;
        this.doubles = [Number.NaN];
        if (a.doubles) for (var c = 0; c < a.doubles.length; ++c) this.doubles.push(Number(a.doubles[c]));
        this.Ec = b;
        for (var d = [""], c = 0; c < a.namespaces.length; ++c) d.push(Al(a, a.namespaces[c]));
        this.Nw = d;
        this.namespaces = [];
        for (var e = [[""]], c = 0; c < a.namespacesets.length; ++c) {
            for (var f = a.namespacesets[c], h = [], k = 0; k < f.length; ++k) h.push(d[f[k]]);
            e.push(h)
        }
        this.multinames = [null];
        for (c = 0; c < a.multinames.length; ++c) this.multinames.push(Vj(a.multinames[c],
            this.strings, d, e, a.multinames));
        this.tm = [];
        this.classes = []
    }, Cl = 0, Al = function (a, b) {
        return "PROTECTED" == b.kind ? "|PROTECTED|" : b.name ? a.strings[b.name] : "|" + b.kind + Cl++ + "|"
    };
    Bl.prototype.li = "pool";
    Bl.prototype.Ce = function (a, b) {
        var c;
        if (a in this.tm) c = this.tm[a]; else {
            c = this.tm;
            var d;
            d = this.Vl.methods[a];
            var e = this.Ec;
            if (d.code) {
                var f = d.exceptions || [], h = d.code, k;
                if (nc) k = aa.atob(h); else {
                    oc();
                    var n = mc;
                    k = [];
                    for (var q = 0; q < h.length;) {
                        var u = n[h.charAt(q++)], p = q < h.length ? n[h.charAt(q)] : 0;
                        ++q;
                        var t = q < h.length ? n[h.charAt(q)] : 64;
                        ++q;
                        var v = q < h.length ? n[h.charAt(q)] : 64;
                        ++q;
                        if (null == u || null == p || null == t || null == v) throw Error();
                        k.push(u << 2 | p >> 4);
                        64 != t && (k.push(p << 4 & 240 | t >> 2), 64 != v && k.push(t << 6 & 192 | v))
                    }
                    if (8192 >=
                        k.length) k = String.fromCharCode.apply(null, k); else {
                        h = "";
                        for (n = 0; n < k.length; n += 8192) q = Ka(k, n, n + 8192), h += String.fromCharCode.apply(null, q);
                        k = h
                    }
                }
                h = [!0];
                n = [];
                for (t = 0; t < f.length; ++t) q = f[t], h[q.target] = !0, n[q.from] = !0, n[q.to + 1] = !0;
                for (var t = new Ej(k), q = [], w; t.Pv();) if (u = t.yj, p = t.ce(), v = R[p]) q[u] = p = {
                    xj: v,
                    args: v.decode && v.decode(t, u, h),
                    xi: void 0,
                    next: void 0,
                    tj: void 0
                }, w && (w.next = p), w = 2 != v.Ka ? p : void 0;
                w = 0;
                v = !1;
                for (u = 0; u < k.length; ++u) if (v = v || !!n[u], t = h[u], (p = q[u]) && (v || t) && (t && (p.xi = w++), v = !1, f.length)) for (p.tj =
                                                                                                                                                        [], t = 0; t < f.length; ++t) u >= f[t].from && u <= f[t].to && p.tj.push(t);
                w = this.Vh(d.traits, b);
                k = new Dl(q, d.type, this);
                k.Dt(f);
                k.append("return function(base,scope){return ");
                k.Ek(R.$n).append("(");
                k.Ct(d);
                k.Bt(f);
                k.append("},methodInfo);};");
                d = Function(El.prototype.li, Bl.prototype.li, "traits", "methodInfo", k.source)(e, this, w, b)
            } else d = null;
            c = c[a] = d
        }
        return c
    };
    var Fl = [void 0, !1, !0, null];
    g = Bl.prototype;
    g.Zr = function (a, b, c, d) {
        switch (a) {
            case "methods":
                return this.Ce(b, c + "/" + d);
            case "getters":
                return this.Ce(b, c + "/get " + d);
            case "setters":
                return this.Ce(b, c + "/set " + d);
            case "classes":
                return this.classes[b];
            case "specials":
                return Fl[b];
            case "doubles":
                return b ? this.doubles[b] : void 0;
            case "namespaces":
                return this.cq(b);
            default:
                return b ? this.Vl[a][b] : void 0
        }
    };
    g.De = function (a, b, c) {
        return this.multinames[a].complete(b, c)
    };
    g.cq = function (a) {
        var b = this.namespaces[a];
        b || (this.namespaces[a] = b = new yl(void 0, this.Nw[a]));
        return b
    };
    g.Vh = function (a, b, c, d, e) {
        c = c || null;
        d = d || ik;
        e = e || new lk;
        for (var f = 0; f < a.length; ++f) {
            var h = a[f], k = null;
            h.type && h.writable && (k = this.De(h.type).ae(), k = Ij.prototype[k] || Dk);
            var n = h.name ? this.De(h.name).Uc() : null, q = this.Zr(h.kind, h.value, b, b && n.Ha());
            e.xx(h, n, q, k, c, d)
        }
        return e
    };
    g.oq = function (a) {
        a = this.De(a);
        return this.Ec.Rp(a)
    };
    g.Fo = function (a, b) {
        if (!b) return a;
        var c = this.oq(b);
        return c || null !== a ? O(a, c) : null
    };
    var Hl = function (a) {
        this.Ud = Object.create(Gl.prototype);
        oe(this.Ud, this);
        this.parent = a
    };
    g = Hl.prototype;
    g.name = null;
    g.namespaces = null;
    g.attributes = null;
    g.children = null;
    g.value = null;
    g.ti = function (a, b) {
        b.push(this.Vc(a));
        return a
    };
    g.Bh = function () {
        return !1
    };
    g.uj = function () {
        return !this.Bh()
    };
    g.Lf = function () {
        if (this.parent) for (var a = 0; a < this.parent.children.length; a++) if (this.parent.children[a] == this) return a;
        return -1
    };
    g.$f = function (a, b) {
        return !b && !a.na && "*" == a.localName
    };
    g.Ol = function () {
        return !1
    };
    g.oe = function (a) {
        return a
    };
    g.lf = function (a) {
        return a
    };
    g.Bk = function (a) {
        return a
    };
    g.Ck = function (a) {
        return a
    };
    g.Dk = function (a) {
        return a
    };
    var Il = function (a, b, c) {
        Hl.call(this, a);
        this.name = b;
        this.namespaces = c || [];
        this.attributes = [];
        this.children = []
    };
    m(Il, Hl);
    g = Il.prototype;
    g.Sd = "element";
    g.Vc = function (a) {
        var b = [];
        a = this.ti(a, b);
        return Jl(b, a)
    };
    g.ti = function (a, b, c) {
        a = a || this.Bh();
        if (!a) {
            for (a = 0; a < this.children.length; a++) this.children[a].ti(!1, b);
            return !1
        }
        c = new Kl(c);
        for (a = 0; a < this.namespaces.length; a++) c.Lr(this.namespaces[a]);
        var d = c.Yr(this.name), e = "<" + d;
        for (a = 0; a < this.attributes.length; a++) var f = this.attributes[a], e = e + (" " + c.Yr(f.name) + '="' + Sd(f.value) + '"');
        e += c.wu();
        if (0 == this.children.length) b.push(e + "/>"); else if (1 == this.children.length && "text" == this.children[0].Sd) b.push(e + ">" + this.children[0].Vc(!0) + "</" + d + ">"); else {
            f = [];
            for (a =
                     0; a < this.children.length; a++) this.children[a].ti(!0, f, c);
            b.push(e + ">");
            b.push(f);
            b.push("</" + d + ">")
        }
        return !0
    };
    g.Bh = function () {
        for (var a = 0; a < this.children.length; a++) if (this.children[a] instanceof Il) return !0;
        return !1
    };
    g.vd = function (a) {
        a = new Il(a, this.name, this.namespaces.slice());
        for (var b = 0; b < this.attributes.length; b++) a.attributes.push(this.attributes[b].vd(a));
        for (b = 0; b < this.children.length; b++) a.children.push(this.children[b].vd(a));
        return a
    };
    g.$f = function (a) {
        if (a.na) return !1;
        if ("*" == a.localName) return !0;
        var b = x(this.name);
        return a.localName == b.localName && a.uri == b.uri
    };
    g.Ol = function (a) {
        for (var b = a.na ? this.attributes : this.children, c = 0; c < b.length; c++) if (b[c].$f(a, !1)) return !0;
        return !1
    };
    g.oe = function (a, b, c) {
        var d = l(c);
        c = (c = d ? c : b.na) ? this.attributes : this.children;
        for (var e = 0; e < c.length; e++) {
            var f = c[e];
            f.$f(b, d) && a.push(f)
        }
        return a
    };
    g.lf = function (a, b, c) {
        if (b.na) for (var d = 0; d < this.attributes.length; d++) {
            var e = this.attributes[d];
            e.$f(b, c) && a.push(e)
        }
        for (d = 0; d < this.children.length; d++) e = this.children[d], e.$f(b, c) && a.push(e), e.lf(a, b, c);
        return a
    };
    g.Bk = function (a) {
        for (var b = 0; b < this.attributes.length; b++) a.push(this.attributes[b]);
        return a
    };
    g.Ck = function (a) {
        for (var b = 0; b < this.children.length; b++) a.push(this.children[b]);
        return a
    };
    g.Dk = function (a, b) {
        for (var c = 0; c < this.children.length; c++) {
            var d = this.children[c];
            d.Sd == b && a.push(d)
        }
        return a
    };
    g.ac = function (a, b) {
        this.attributes.push(new Ll(this, a, b));
        return this
    };
    g.le = function (a) {
        a = new Il(this, a, []);
        this.children.push(a);
        return a
    };
    var Ll = function (a, b, c) {
        Hl.call(this, a);
        this.name = b;
        this.value = c
    };
    m(Ll, Hl);
    g = Ll.prototype;
    g.Sd = "attribute";
    g.Vc = function (a) {
        return a ? Sd(this.value) : this.value
    };
    g.vd = function (a) {
        return new Ll(a, this.name, this.value)
    };
    g.Lf = function () {
        return -1
    };
    g.$f = function (a, b) {
        if ("*" == a.localName) return !0;
        var c = x(this.name);
        return a.localName == c.localName && (b && !c.uri || a.uri == c.uri)
    };
    var Ml = function (a, b) {
        Hl.call(this, a);
        this.value = b
    };
    m(Ml, Hl);
    Ml.prototype.Sd = "text";
    Ml.prototype.Vc = function (a) {
        return a ? Rd(this.value) : this.value
    };
    Ml.prototype.vd = function (a) {
        return new Ml(a, this.value)
    };
    var Nl = function (a, b) {
        Hl.call(this, a);
        this.value = b
    };
    m(Nl, Hl);
    Nl.prototype.Sd = "text";
    Nl.prototype.Vc = function (a) {
        return a ? "<![CDATA[" + this.value + "]]\x3e" : this.value
    };
    Nl.prototype.vd = function (a) {
        return new Nl(a, this.value)
    };
    var Ol = function (a, b) {
        if (a instanceof Mj) return x(a);
        !l(a) && l(b) && (a = b);
        a = String(a);
        var c = "@" == a.charAt(0);
        c && (a = a.substring(1));
        return new Nj("", a, c)
    }, Pl = function (a) {
        try {
            return a.next()
        } catch (b) {
            switch (b.type) {
                case "tag":
                case "close":
                    throw H(1090);
                case "cdata":
                    throw H(1091);
                case "comment":
                    throw H(1094);
                case "processing_instruction":
                    throw H(1097);
                case "attribute":
                    throw H(1095);
                default:
                    throw b;
            }
        }
    }, Ql = function (a, b) {
        for (var c = {}, d = 0; d < a.length;) {
            var e = a[d], f = e.name.match(/^xmlns(?::(.*))?$/);
            f ? (c[f[1] ||
            ""] = e.value, a.splice(d, 1)) : d++
        }
        b || !pg || l(c[""]) || (c[""] = pg);
        this.ft = c;
        this.wa = b
    };
    Ql.prototype.resolve = function (a, b, c) {
        if (!l(c)) {
            var d = b.indexOf(":");
            c = 0 <= d ? b.substring(0, d) : "";
            b = 0 <= d ? b.substring(d + 1) : b
        }
        if (a && !c) return xl("", b, !0);
        d = this.ft[c];
        if (l(d)) return xl(d, b, a);
        if (this.wa) return this.wa.resolve(a, b, c);
        if (c) throw H(1083, c, b);
        return xl("", b, !1)
    };
    Ql.prototype.xv = function () {
        var a = this.ft;
        return Object.keys(a).map(function (b) {
            return new yl(b, a[b])
        })
    };
    var Rl = function (a, b, c, d) {
        for (var e = c || null, f; f = Pl(a);) switch (f.type) {
            case "tag":
                c = f.attributes;
                b = new Ql(c, b);
                e = new Il(e, b.resolve(!1, f.value), b.xv());
                for (d = 0; d < c.length; d++) {
                    var h = c[d];
                    e.attributes.push(new Ll(e, b.resolve(!0, h.name), h.value))
                }
                for (; ;) {
                    c = Rl(a, b, e, f.value);
                    if (!c) return e;
                    e.children.push(c)
                }
            case "close":
                if (e) {
                    if (d != f.value) throw a = e.name.localName, H(1085, a, a);
                    return null
                }
                throw H(1088);
            case "text":
                return new Ml(e || null, f.value);
            case "cdata":
                return new Nl(e || null, f.value)
        }
        if (!c) return null;
        a = e.name.localName;
        throw H(1085, a, a);
    }, Kl = function (a) {
        this.Sj = [];
        this.Zd = (this.Em = !l(a)) ? {} : a.Zd
    };
    Kl.prototype.Wu = function () {
        if (!this.Em) {
            var a = {}, b;
            for (b in this.Zd) a[b] = this.Zd[b];
            this.Zd = a;
            this.Em = !0
        }
    };
    Kl.prototype.Lr = function (a) {
        var b = a.prefix || "", c = a.uri, d = this.Zd[c];
        d != b && (void 0 === d && (this.Wu(), this.Zd[c] = b), this.Sj.push(a))
    };
    Kl.prototype.Yr = function (a) {
        var b = a.uri;
        a = a.localName;
        if (!b) return a;
        var c = this.Zd[b];
        if (!c) {
            for (var c = "", d = 0; c in this.Zd; d++) c = String.fromCharCode(97 + d / 17576) + String.fromCharCode(97 + d / 17576 % 26) + String.fromCharCode(97 + d / 676 % 26) + String.fromCharCode(97 + d / 26 % 26);
            this.Lr(new yl(c, b))
        }
        return c ? c + ":" + a : a
    };
    Kl.prototype.wu = function () {
        for (var a = "", b = 0; b < this.Sj.length; b++) {
            var a = a + " xmlns", c = this.Sj[b], d = c.prefix;
            d && (a += ":" + d);
            a += '="' + Sd(c.uri) + '"'
        }
        this.Sj = [];
        return a
    };
    var Jl = function (a, b) {
        b = b && Sl.prettyPrinting;
        var c = "";
        if (b) for (var d = Sl.prettyIndent; 0 < d; d--) c += " ";
        var e = [], f = function (a, d) {
            for (var n = 0; n < a.length; n++) if (fa(a[n])) f(a[n], d + c); else if (b) for (var q = a[n].trim().split(/\n/), u = 0; u < q.length; u++) e.push(d + q[u]); else e.push(a[n])
        };
        f(a, "");
        return e.join(b ? "\n" : "")
    };
    var Tl = function (a) {
        if (a instanceof Gl) a = [x(a)]; else if (a instanceof Tl) a = x(a).slice(); else if (null != a && "" != a) {
            a = String(a);
            a = new Zd(a, Sl.ignoreWhitespace, !1);
            for (var b, c = []; b = Rl(a);) c.push(b);
            a = c
        } else a = [];
        return Ul(a)
    }, Vl = function (a) {
        return a instanceof Tl ? a : new Tl(a)
    };
    Pk(Tl, "XMLList", {ue: Vl, Kd: Tl});
    var Wl = function (a) {
        for (var b = x(this), c = a.sc() < b.length, d = 0; !c && d < b.length; d++) c = b[d].Ol(a);
        return c
    };
    Object.defineProperty(Tl.prototype, "__swiffy_proxy", {
        value: {
            rf: function (a, b) {
                var c = Xl[a];
                if (ka(c)) return c.apply(this, b);
                c = Yl[a];
                if (ka(c)) {
                    var d = Zl.call(this, 1086, a);
                    return c.apply(d, b)
                }
                c = String.prototype[a];
                if (ka(c) && (d = Zl.call(this, 1086, a), x(d).uj())) return c.apply(d.toString(), b);
                throw H(1006, "value");
            }, xf: function () {
                return !1
            }, lj: function (a) {
                for (var b = x(this), c = [], d = 0; d < b.length; d++) b[d].lf(c, a, !1);
                return Ul(c)
            }, Fe: function (a) {
                var b = x(this), c = a.sc();
                if (l(c)) return $l(b[c]);
                for (var c = [], d = 0; d < b.length; d++) b[d].oe(c,
                    a);
                return Ul(c)
            }, setProperty: function (a, b) {
                var c = x(this), d = a.sc();
                l(d) && (d > c.length && (d = c.length), b instanceof Gl && (c[d] = x(b)))
            }, Le: Wl, dg: function (a) {
                return String(a - 1)
            }, Re: function (a) {
                return ++a > x(this).length ? 0 : a
            }, eg: function (a) {
                return $l(x(this)[a - 1])
            }
        }
    });
    Tl.prototype.hasOwnProperty = function (a) {
        return Wl.call(this, Ol(a))
    };
    Tl.prototype.toString = function () {
        if (Xl.hasComplexContent.call(this)) return Xl.toXMLString.call(this);
        for (var a = x(this), b = [], c = 0; c < a.length; c++) b.push(a[c].Vc(!1));
        return b.join("")
    };
    Tl.prototype.valueOf = function () {
        return this
    };
    Tl.prototype.toJSON = function () {
        return "XMLList"
    };
    var Xl = {
        attribute: function (a) {
            a = Ol(a);
            for (var b = x(this), c = 0; c < b.length; c++) b[c].oe([], a, !0);
            return Ul([])
        }, attributes: function () {
            for (var a = [], b = x(this), c = 0; c < b.length; c++) b[c].Bk(a);
            return Ul(a)
        }, child: function () {
            Q(this, "child");
            return Ul([])
        }, children: function () {
            for (var a = x(this), b = [], c = 0; c < a.length; c++) a[c].Ck(b);
            return Ul(b)
        }, comments: function () {
            Q(this, "comments");
            return Ul([])
        }, contains: function (a) {
            O(a, Sl);
            Q(this, "contains");
            return !1
        }, copy: function () {
            Q(this, "copy");
            return Ul([])
        }, descendants: function (a) {
            a =
                Ol(a, "*");
            for (var b = x(this), c = [], d = 0; d < b.length; d++) b[d].lf(c, a, !0);
            return Ul(c)
        }, elements: function (a) {
            a = Ol(a, "*");
            for (var b = x(this), c = [], d = 0; d < b.length; d++) b[d].oe(c, a, !1);
            return Ul(c)
        }, hasComplexContent: function () {
            var a = x(this);
            if (0 == a.length) return !1;
            if (1 == a.length) return a[0].Bh();
            for (var b = 0; b < a.length; b++) if ("element" == a[b].Sd) return !0;
            return !1
        }, hasSimpleContent: function () {
            var a = x(this);
            if (0 == a.length) return !0;
            if (1 == a.length) return a[0].uj();
            for (var b = 0; b < a.length; b++) if ("element" == a[b].Sd) return !1;
            return !0
        }, length: function () {
            return x(this).length
        }, normalize: function () {
            Q(this, "normalize");
            return Ul([])
        }, parent: function () {
            var a = x(this);
            if (a.length) {
                for (var b = a[0].parent, c = 1; b && c < a.length; c++) if (a[c].parent != b) return;
                return $l(b)
            }
        }, processingInstructions: function () {
            Q(this, "processingInstructions");
            return Ul([])
        }, propertyIsEnumerable: function (a) {
            return Ol(a).sc() < x(this).length
        }, text: function () {
            for (var a = x(this), b = [], c = 0; c < a.length; c++) a[c].Dk(b, "text");
            return Ul(b)
        }, toXMLString: function () {
            for (var a =
                x(this), b = [], c = 0; c < a.length; c++) b.push(a[c].Vc(!0));
            return b.join("\n")
        }
    }, Ul = function (a) {
        var b = Object.create(Tl.prototype);
        oe(b, a);
        return b
    }, Zl = function (a, b) {
        var c = x(this);
        if (1 == c.length) return c[0].Ud;
        throw H.apply(null, arguments);
    }, $l = function (a) {
        return a ? a.Ud : void 0
    };
    var Gl = function (a) {
        if (a instanceof Tl) return a = Zl.call(a, 1088), Yl.copy.call(a);
        if (a instanceof Gl) return Yl.copy.call(a);
        if (null != a) {
            a = String(a);
            a = new Zd(a, Sl.ignoreWhitespace, !1);
            var b = Rl(a);
            b || (b = new Ml(null, ""));
            if (Pl(a)) throw H(1088);
            return b.Ud
        }
        return (new Ml(null, "")).Ud
    }, Sl = function (a) {
        return a instanceof Gl ? a : a instanceof Tl ? Zl.call(a, 1088) : new Gl(a)
    };
    Pk(Gl, "XML", {ue: Sl, Kd: Gl});
    P(Sl, "ignoreComments", "Boolean", !0);
    P(Sl, "ignoreProcessingInstructions", "Boolean", !0);
    P(Sl, "ignoreWhitespace", "Boolean", !0);
    P(Sl, "prettyIndent", "int", 2);
    P(Sl, "prettyPrinting", "Boolean", !0);
    var am = function (a) {
        return 0 == a.sc() || x(this).Ol(a)
    };
    Object.defineProperty(Gl.prototype, "__swiffy_proxy", {
        value: {
            rf: function (a, b) {
                var c = Yl[a];
                if (ka(c)) return c.apply(this, b);
                c = String.prototype[a];
                if (ka(c) && x(this).uj()) return c.apply(this.toString(), b);
                throw H(1006, "value");
            }, xf: function () {
                return !1
            }, lj: function (a) {
                a = x(this).lf([], a, !1);
                return Ul(a)
            }, Fe: function (a) {
                if (0 == a.sc()) return this;
                a = x(this).oe([], a);
                return Ul(a)
            }, setProperty: function (a) {
                if (l(a.sc())) throw H(1087);
            }, Le: am, dg: function () {
                return "0"
            }, Re: function (a) {
                return 0 == a ? 1 : 0
            }, eg: function () {
                return this
            }
        }
    });
    Gl.prototype.hasOwnProperty = function (a) {
        return am.call(this, Ol(a))
    };
    Gl.prototype.toString = function () {
        return x(this).Vc(!1)
    };
    Gl.prototype.valueOf = function () {
        return this
    };
    Gl.prototype.toJSON = function () {
        return "XML"
    };
    var Yl = {
        addNamespace: function () {
            Q(this, "addNamespace");
            return this
        }, appendChild: function () {
            Q(this, "appendChild");
            return this
        }, attribute: function (a) {
            a = x(this).oe([], Ol(a), !0);
            return Ul(a)
        }, attributes: function () {
            var a = x(this).Bk([]);
            return Ul(a)
        }, child: function () {
            Q(this, "child");
            return Ul([])
        }, childIndex: function () {
            return x(this).Lf()
        }, children: function () {
            var a = x(this).Ck([]);
            return Ul(a)
        }, comments: function () {
            Q(this, "comments");
            return Ul([])
        }, contains: function (a) {
            O(a, Sl);
            Q(this, "contains");
            return !1
        },
        copy: function () {
            return x(this).vd(null).Ud
        }
    };
    Sl.defaultSettings = function () {
        return {ignoreComments: !0, ignoreProcessingInstructions: !0, ignoreWhitespace: !0, prettyIndent: 2, prettyPrinting: !0}
    };
    Yl.descendants = function (a) {
        a = Ol(a, "*");
        a = x(this).lf([], a, !0);
        return Ul(a)
    };
    Yl.elements = function (a) {
        a = x(this).oe([], Ol(a, "*"), !1);
        return Ul(a)
    };
    Yl.hasComplexContent = function () {
        return x(this).Bh()
    };
    Yl.hasSimpleContent = function () {
        return x(this).uj()
    };
    Yl.inScopeNamespaces = function () {
        Q(this, "inScopeNamespaces");
        return []
    };
    Yl.insertChildAfter = function () {
        Q(this, "insertChildAfter")
    };
    Yl.insertChildBefore = function () {
        Q(this, "insertChildBefore")
    };
    Yl.length = function () {
        return 1
    };
    Yl.localName = function () {
        var a = x(this).name;
        return a ? a.localName : null
    };
    Yl.name = function () {
        return x(this).name
    };
    Yl.namespace = function () {
        Q(this, "namespace");
        return null
    };
    Yl.namespaceDeclarations = function () {
        Q(this, "namespaceDeclarations");
        return []
    };
    Yl.nodeKind = function () {
        return x(this).Sd
    };
    Yl.normalize = function () {
        Q(this, "normalize");
        return this
    };
    Yl.parent = function () {
        var a = x(this);
        if (a.parent) return a.parent.Ud
    };
    Yl.prependChild = function () {
        Q(this, "prependChild");
        return this
    };
    Yl.processingInstructions = function () {
        Q(this, "processingInstructions");
        return Ul([])
    };
    Yl.propertyIsEnumerable = function (a) {
        return "0" == Ol(a).sc()
    };
    Yl.removeNamespace = function (a) {
        O(a, zl);
        Q(this, "removeNamespace");
        return this
    };
    Yl.replace = function () {
        Q(this, "replace");
        return this
    };
    Yl.setChildren = function () {
        Q(this, "setChildren");
        return this
    };
    Yl.setLocalName = function () {
        Q(this, "setLocalName")
    };
    Yl.setName = function () {
        Q(this, "setName")
    };
    Yl.setNamespace = function (a) {
        O(a, zl);
        Q(this, "setNamespace")
    };
    Sl.setSettings = function (a) {
        la(a) || (a = Gl.defaultSettings());
        ia(a.ignoreComments) && (Sl.ignoreComments = a.ignoreComments);
        ia(a.ignoreProcessingInstructions) && (Sl.ignoreProcessingInstructions = a.ignoreProcessingInstructions);
        ia(a.ignoreWhitespace) && (Sl.ignoreWhitespace = a.ignoreWhitespace);
        ja(a.prettyIndent) && (Sl.prettyIndent = a.prettyIndent);
        ia(a.prettyPrinting) && (Sl.prettyPrinting = a.prettyPrinting)
    };
    Sl.settings = function () {
        return {
            ignoreComments: Gl.ignoreComments,
            ignoreProcessingInstructions: Sl.ignoreProcessingInstructions,
            ignoreWhitespace: Gl.ignoreWhitespace,
            prettyIndent: Gl.prettyIndent,
            prettyPrinting: Gl.prettyPrinting
        }
    };
    Yl.text = function () {
        var a = x(this).Dk([], "text");
        return Ul(a)
    };
    Yl.toXMLString = function () {
        return x(this).Vc(!0)
    };
    var R = {
        Nt: function (a) {
            Pa(yc, function (b, c) {
                var d = R[b];
                if (d.implementation) {
                    var e = (d.hc || a).prototype;
                    d.Uw = (e.li || "") + "." + c;
                    e[c] = d.implementation
                }
            })
        }
    }, bm = function (a, b, c, d) {
        this.Ec = a.Ec;
        this.target = d;
        this.typeName = 0 == b ? null : a.De(b);
        this.traits = a.Vh([{slot: 1, kind: "specials", value: 0, type: b, name: c}])
    };
    bm.prototype.Wt = function (a) {
        return !this.typeName || Gk(a, this.Ec.Rp(this.typeName))
    };
    var cm = function (a, b) {
        var c;
        if (b && a instanceof og) c = a.value; else if (b && a instanceof RangeError) c = H(1023).value; else throw a;
        for (var d = 0; d < b.length; d++) {
            var e = b[d];
            if (e.Wt(c)) return e.target
        }
        throw a;
    };
    R[36] = function (a) {
        this.ea(a)
    };
    R[36].decode = function (a) {
        return [a.Ir()]
    };
    R[47] = function (a) {
        this.ea(this.gd.doubles[a])
    };
    R[47].decode = Fj;
    R[39] = function () {
        this.ea("!1")
    };
    R[45] = function (a) {
        this.ea(this.gd.ints[a])
    };
    R[45].decode = Fj;
    R.jf = function (a) {
        this.za().S(R.jf, a)
    };
    R.jf.implementation = Bl.prototype.cq;
    R.jf.decode = Fj;
    R.jf.hc = Bl;
    R[49] = R.jf;
    R[40] = function () {
        this.ea("Number.NaN")
    };
    R[32] = function () {
        this.ea(null)
    };
    R[37] = function (a) {
        this.ea(a)
    };
    R[37].decode = Fj;
    R[44] = function (a) {
        this.ea(Ba(this.gd.strings[a]))
    };
    R[44].decode = Fj;
    R[38] = function () {
        this.ea("!0")
    };
    R[46] = function (a) {
        this.ea(this.gd.uints[a])
    };
    R[46].decode = Fj;
    R[33] = function () {
        this.ea(void 0)
    };
    R[42] = function () {
        this.ea(this.stack(0))
    };
    R[43] = function () {
        var a = this.stack(0), b = this.stack(1);
        this.ek("t");
        this.append("t=" + a + ",");
        this.append(a + "=" + b + ",");
        this.append(b + "=t,");
        this.append("t=undefined;")
    };
    R[41] = function () {
        this.pop()
    };
    R[71] = function () {
        this.append("return;")
    };
    R[71].Ka = 2;
    R[72] = function () {
        var a = this.pop();
        this.append("return ");
        this.as ? this.S(R.pd, a, this.as) : this.append(a + ";")
    };
    R[72].Ka = 2;
    R[85] = function (a) {
        for (var b = [], c = []; 0 < a--;) c[a] = this.pop(), b[a] = this.pop();
        this.ek("t");
        this.append("t={},");
        for (a = 0; a < b.length; ++a) this.append("t[" + b[a] + "]=" + c[a] + ",");
        this.za().append("t,t=undefined;")
    };
    R[85].decode = Fj;
    R[86] = function (a) {
        this.ea(this.Wd(a))
    };
    R[86].decode = Fj;
    R.Xa = function (a) {
        return function () {
            var b = this.pop(), c = this.pop();
            this.ea(c + a + b)
        }
    };
    R.gh = function (a) {
        return function () {
            this.ea(a + this.pop())
        }
    };
    R[160] = R.Xa("+");
    R[161] = R.Xa("-");
    R[162] = R.Xa("*");
    R[163] = R.Xa("/");
    R[164] = R.Xa("%");
    R[144] = R.gh("-");
    R[150] = R.gh("!");
    R[145] = function () {
        this.append("++" + this.stack(0) + ";")
    };
    R[147] = function () {
        this.append("--" + this.stack(0) + ";")
    };
    R.al = function (a) {
        return function () {
            var b = this.pop(), c = this.pop();
            this.ea("(" + c + "|0)" + a + "(" + b + "|0)|0")
        }
    };
    R[197] = R.al("+");
    R[198] = R.al("-");
    R[199] = R.al("*");
    R[196] = function () {
        this.ea("(-(" + this.pop() + "|0))|0")
    };
    R[192] = function () {
        this.ea("((" + this.pop() + "|0)+1)|0")
    };
    R[193] = function () {
        this.ea("((" + this.pop() + "|0)-1)|0")
    };
    R[151] = R.gh("~");
    R[169] = R.Xa("|");
    R[170] = R.Xa("^");
    R[168] = R.Xa("&");
    R[165] = R.Xa("<<");
    R[166] = R.Xa(">>");
    R[167] = R.Xa(">>>");
    R[118] = R.gh("!!");
    R[117] = R.gh("+");
    R[115] = function () {
        this.ea(this.pop() + "|0")
    };
    R[116] = function () {
        this.ea(this.pop() + ">>>0")
    };
    R[112] = function () {
        this.ea("String(" + this.pop() + ")")
    };
    R.Ji = function (a) {
        return function () {
            this.ea(this.register(a))
        }
    };
    R[208] = R.Ji(0);
    R[209] = R.Ji(1);
    R[210] = R.Ji(2);
    R[211] = R.Ji(3);
    R.Li = function (a) {
        return function () {
            this.append(this.register(a) + "=" + this.pop() + ";")
        }
    };
    R[212] = R.Li(0);
    R[213] = R.Li(1);
    R[214] = R.Li(2);
    R[215] = R.Li(3);
    R.we = function (a) {
        var b = function (b) {
            a.call(this, this.register(b))
        };
        b.decode = Fj;
        return b
    };
    R[98] = R.we(function (a) {
        this.ea(a)
    });
    R[99] = R.we(function (a) {
        this.append(a + "=" + this.pop() + ";")
    });
    R[146] = R.we(function (a) {
        this.append("++" + a + ";")
    });
    R[148] = R.we(function (a) {
        this.append("--" + a + ";")
    });
    R[194] = R.we(function (a) {
        this.append(a + "=((" + a + "|0)+1)|0;")
    });
    R[195] = R.we(function (a) {
        this.append(a + "=((" + a + "|0)-1)|0;")
    });
    R[8] = R.we(function (a) {
        this.append(a + "=undefined;")
    });
    R[130] = function () {
    };
    R[133] = function () {
        var a = this.pop();
        this.ea(a + "==null?null:String(" + a + ")")
    };
    R[137] = function () {
        var a = this.pop();
        this.ea(a + "==null?null:" + a)
    };
    R[149] = function () {
        this.ea("typeof " + this.pop())
    };
    R[171] = R.Xa("==");
    R[172] = R.Xa("===");
    R[173] = R.Xa("<");
    R[174] = R.Xa("<=");
    R[175] = R.Xa(">");
    R[176] = R.Xa(">=");
    R[16] = function (a) {
        a = this.lg(a);
        0 > a ? this.append("return;") : this.append("j=" + a + ";break;")
    };
    R[16].Ka = 2;
    R[16].decode = Hj;
    R.Bb = function (a) {
        var b = function (b) {
            this.append("if(").append(a.call(this)).append(")");
            b = this.lg(b);
            0 > b ? this.append("return;") : this.append("{j=" + b + ";break;}")
        };
        b.Ka = 1;
        b.decode = Hj;
        return b
    };
    R[14] = R.Bb(function () {
        var a = this.pop(), b = this.pop();
        return "!(" + a + "<" + b + ")"
    });
    R[12] = R.Bb(function () {
        var a = this.pop();
        return "!(" + this.pop() + "<" + a + ")"
    });
    R[15] = R.Bb(function () {
        var a = this.pop(), b = this.pop();
        return "!(" + a + "<=" + b + ")"
    });
    R[19] = R.Bb(function () {
        var a = this.pop();
        return this.pop() + "==" + a
    });
    R[20] = R.Bb(function () {
        var a = this.pop();
        return this.pop() + "!=" + a
    });
    R[25] = R.Bb(function () {
        var a = this.pop();
        return this.pop() + "===" + a
    });
    R[26] = R.Bb(function () {
        var a = this.pop();
        return this.pop() + "!==" + a
    });
    R[13] = R.Bb(function () {
        var a = this.pop();
        return "!(" + this.pop() + "<=" + a + ")"
    });
    R[18] = R.Bb(function () {
        return "!" + this.pop()
    });
    R[23] = R.Bb(function () {
        var a = this.pop(), b = this.pop();
        return a + "<" + b
    });
    R[21] = R.Bb(function () {
        var a = this.pop();
        return this.pop() + "<" + a
    });
    R[24] = R.Bb(function () {
        var a = this.pop(), b = this.pop();
        return a + "<=" + b
    });
    R[22] = R.Bb(function () {
        var a = this.pop();
        return this.pop() + "<=" + a
    });
    R[17] = R.Bb(function () {
        return this.pop()
    });
    R[27] = function (a, b) {
        var c = this.pop(), d = this.lg(a);
        if (2 == arguments.length) {
            var e = this.lg(b);
            this.append("j=" + c + "?" + d + ":" + e)
        } else {
            this.append("j=[");
            for (e = 1; e < arguments.length; ++e) 1 < e && this.append(","), this.append(String(this.lg(arguments[e])));
            this.append("][" + c + "],j=j===undefined?" + d + ":j")
        }
        this.append(";break;")
    };
    R[27].decode = function (a, b, c) {
        var d = [], e = function () {
            var e = a.Hr() + b;
            c[e] = !0;
            d.push(e)
        };
        e();
        for (var f = a.kg() + 1; 0 < f--;) e();
        return d
    };
    R[27].Ka = 2;
    R[29] = function () {
        this.ax()
    };
    R.Uo = function (a) {
        var b = function () {
            var a = this.pop(), d = this.scope();
            this.Ft().append(d).S(b, a)
        };
        b.implementation = a;
        b.hc = hk;
        return b
    };
    R[48] = R.Uo(hk.prototype.Er);
    R[28] = R.Uo(hk.prototype.hx);
    R.df = function (a) {
        this.za().append(this.scope(a)).S(R.df)
    };
    R.df.implementation = hk.prototype.Fv;
    R.df.hc = hk;
    R.df.decode = function (a) {
        return [a.ce()]
    };
    R[101] = R.df;
    R.Ig = function () {
        this.za().append(this.scope()).S(R.Ig)
    };
    R.Ig.implementation = hk.prototype.nv;
    R.Ig.hc = hk;
    R[100] = R.Ig;
    R.ie = function (a) {
        a = this.Wd(a);
        var b = this.pop(), c = this.pop();
        this.za();
        this.S(R.ie, b, c, a)
    };
    R.ie.implementation = Xj;
    R.ie.decode = Fj;
    R.ie.Ka = 1;
    R[65] = R.ie;
    R.je = function (a, b) {
        var c = this.Wd(b), d = this.Yd(a), e = this.pop();
        this.za().append(this.scope()).S(R.je, e, d, c)
    };
    R.je.implementation = hk.prototype.St;
    R.je.Ka = 1;
    R.je.decode = Gj;
    R.je.hc = hk;
    R[76] = R.je;
    R.Vk = function (a, b) {
        var c = function (a, e) {
            var f = this.Wd(e), h = this.Yd(a), k = this.pop();
            b && this.za();
            this.S(c, k, h, f)
        };
        c.Ka = 1;
        c.decode = Gj;
        c.implementation = a;
        return c
    };
    R[70] = R.Vk(Yj, !0);
    R[79] = R.Vk(Yj, !1);
    R.Yk = function (a) {
        var b = function (a) {
            a = this.Yd(a);
            this.za().append(this.scope());
            this.S(b, a)
        };
        b.decode = Fj;
        b.implementation = a;
        b.hc = hk;
        return b
    };
    R[94] = R.Yk(hk.prototype.find);
    R[93] = R.Yk(hk.prototype.Ep);
    R[96] = R.Yk(hk.prototype.qv);
    R.Wo = function (a) {
        var b = function (a) {
            var d = this.pop();
            a = this.Yd(a);
            var e = this.pop();
            this.S(b, e, a, d)
        };
        b.decode = Fj;
        b.implementation = a;
        return b
    };
    R[97] = R.Wo(bk);
    R[104] = R.Wo(bk);
    R.Zk = function (a) {
        var b = function (a) {
            a = this.Yd(a);
            var d = this.pop();
            this.za().S(b, d, a)
        };
        b.decode = Fj;
        b.implementation = a;
        return b
    };
    R[102] = R.Zk(ak);
    R[89] = R.Zk(function (a, b) {
        a = Wj(a);
        var c = a.__swiffy_proxy;
        if (c && c.lj) return c.lj.call(a, b.Uc());
        throw H(1016);
    });
    R[106] = R.Zk(function (a, b) {
        a = Wj(a);
        var c = a.__swiffy_proxy;
        if (c && c.xf) return c.xf.call(a, b.Uc());
        c = b.$a(a);
        return l(c) ? delete a[c] : !1
    });
    R.kf = function () {
        this.S(R.kf, this.pop())
    };
    R.kf.implementation = function (a) {
        throw new og(a);
    };
    R.kf.Ka = 2;
    R[3] = R.kf;
    R.ff = function (a) {
        this.za().append("handler" + a);
        this.S(R.ff)
    };
    R.ff.implementation = function () {
        return this.traits.Mi({})
    };
    R.ff.hc = bm;
    R.ff.decode = Fj;
    R[90] = R.ff;
    R.mi = function () {
        this.S(R.mi, this.stack(0))
    };
    R.mi.implementation = function (a) {
        tl(a);
        if (!Gk(a, Sl) && !Gk(a, Vl)) throw H(1123, Oj(a).zf());
    };
    R[120] = R.mi;
    R.cf = function (a) {
        this.S(R.cf, Ba(this.gd.strings[a]))
    };
    R.cf.implementation = function (a) {
        pg = String(a)
    };
    R.cf.decode = Fj;
    R[6] = R.cf;
    R[7] = function () {
        this.S(R.cf, this.pop())
    };
    R.Xo = function (a) {
        var b = function () {
            var a = this.stack(0);
            this.append(a + "=").S(b, a)
        };
        b.implementation = a;
        return b
    };
    R[114] = R.Xo(Sd);
    R[113] = R.Xo(Rd);
    R.ef = function (a) {
        var b = this.stack(0);
        this.append(b + "=");
        this.Og(R.ef, b);
        this.append("[" + a + "];")
    };
    R.ef.implementation = function (a) {
        Wj(a);
        return a.__swiffy_slots
    };
    R.ef.decode = Fj;
    R[108] = R.ef;
    R[109] = function (a) {
        var b = this.pop(), c = this.pop();
        this.Og(R.ef, c);
        this.append("[" + a + "]=" + b + ";")
    };
    R[109].decode = Fj;
    R.pi = function () {
        var a = this.pop(), b = this.pop();
        this.za().S(R.pi, b, a)
    };
    R.pi.implementation = function (a, b) {
        if (b == Dk) return null != a;
        if (!ka(b)) throw H(1040);
        return Object(a) instanceof b
    };
    R[177] = R.pi;
    R.oi = function () {
        var a = this.pop(), b = this.pop();
        this.za().S(R.oi, b, a)
    };
    R.oi.implementation = function (a, b) {
        b = Wj(b);
        return Zj(b, new Nj("", a, !1))
    };
    R[180] = R.oi;
    R.gf = function (a) {
        var b = this.pop(), c = this.scope();
        this.za().S(R.gf, "pool", c, a, b)
    };
    R.gf.implementation = function (a, b, c, d) {
        return this.vu(a, b, c, d)
    };
    R.gf.decode = Fj;
    R.gf.hc = El;
    R[88] = R.gf;
    R.hf = function (a) {
        this.za().S(R.hf, this.scope(), a)
    };
    R.hf.implementation = function (a, b) {
        return this.Ce(b, "MethodInfo-" + b)(null, a)
    };
    R.hf.decode = Fj;
    R.hf.hc = Bl;
    R[64] = R.hf;
    R.ke = function (a) {
        a = this.Wd(a);
        var b = this.pop();
        this.za().S(R.ke, b, a)
    };
    R.ke.implementation = function (a, b) {
        return this.Eq(a, b)
    };
    R.ke.decode = Fj;
    R.ke.Ka = 1;
    R[66] = R.ke;
    R[74] = R.Vk(function (a, b, c) {
        a = Wj(a);
        b = b.$a(a);
        return this.Eq(a[b], c)
    }, !0);
    R.Tt = function (a, b, c, d) {
        b = Wj(b);
        var e = tk(a).traits, f = c.$a(e);
        if (l(f)) return a = e[f].callee(b, f), Xj(b, a, d, f);
        f = c.$a(a.prototype);
        if (l(f)) return a = a.prototype[f], Xj(b, a, d, f);
        throw H(1069, c.Ha(), Oj(a).localName);
    };
    R.So = function (a) {
        var b = function (c, d) {
            var e = this.Wd(d), f = this.Yd(c), h = this.pop();
            a && this.za();
            this.S(b, "base", h, f, e)
        };
        b.Ka = 1;
        b.decode = Gj;
        b.implementation = R.Tt;
        return b
    };
    R[69] = R.So(!0);
    R[78] = R.So(!1);
    R.Lg = function (a) {
        var b = this.pop();
        a = this.Yd(a);
        var c = this.pop();
        this.S(R.Lg, "base", c, a, b)
    };
    R.Lg.decode = Fj;
    R.Lg.implementation = function (a, b, c, d) {
        b = Wj(b);
        var e = tk(a).traits, f = c.$a(e);
        if (l(f)) e[f].set(b, f, d); else {
            f = c.$a(a.prototype);
            if (l(f) && (e = Eg(a.prototype, f)) && e.set) {
                e.set.call(b, d);
                return
            }
            throw H(1056, c.Ha(), Oj(a).localName);
        }
    };
    R[5] = R.Lg;
    R.Jg = function (a) {
        a = this.Yd(a);
        var b = this.pop();
        this.za().S(R.Jg, "base", b, a)
    };
    R.Jg.decode = Fj;
    R.Jg.implementation = function (a, b, c) {
        b = Wj(b);
        var d = tk(a).traits, e = c.$a(d);
        if (l(e)) return d[e].get(b, e);
        e = c.$a(a.prototype);
        if (l(e) && (d = Eg(a.prototype, e)) && d.get) return d.get.call(b);
        throw H(1069, c.Ha(), Oj(a).localName);
    };
    R[4] = R.Jg;
    R.bf = function (a) {
        a = this.Wd(a);
        var b = this.pop();
        this.S(R.bf, "base", b, a)
    };
    R.bf.implementation = function (a, b, c) {
        b = Wj(b);
        a.__swiffy_constructor.apply(b, c)
    };
    R.bf.decode = Fj;
    R.bf.Ka = 1;
    R[73] = R.bf;
    R.Hg = function (a) {
        a = this.Wd(a);
        var b = this.pop();
        this.za();
        this.S(R.Hg, b, a)
    };
    R.Hg.implementation = function (a, b) {
        var c = a && a.__swiffy_type_apply;
        if (!c) throw H(1127);
        return c.call(a, this.pb, b)
    };
    R.Hg.decode = Fj;
    R[83] = R.Hg;
    R.ri = function () {
        this.za();
        this.S(R.ri, "traits")
    };
    R.ri.implementation = function (a) {
        return a.Mi({})
    };
    R[87] = R.ri;
    R.pd = function (a) {
        var b = this.stack(0);
        this.append(b + "=");
        this.S(R.pd, b, a)
    };
    R.pd.implementation = function (a, b) {
        return this.Fo(a, b)
    };
    R.pd.decode = Fj;
    R.pd.hc = Bl;
    R[128] = R.pd;
    R.ni = function () {
        this.S(R.ni, this.stack(0))
    };
    R.ni.implementation = tl;
    R[119] = R.ni;
    R.Yo = function (a) {
        var b = function (a) {
            var d = this.stack(0);
            this.append(d + "=");
            this.S(b, d, a)
        };
        b.decode = Fj;
        b.implementation = function (b, d) {
            return a(b, this.oq(d))
        };
        b.hc = Bl;
        return b
    };
    R[134] = R.Yo(Uk);
    R[178] = R.Yo(Vk);
    R.Zo = function (a) {
        var b = function () {
            var a = this.pop(), d = this.pop();
            this.za();
            this.S(b, d, a)
        };
        b.implementation = a;
        return b
    };
    R[135] = R.Zo(Uk);
    R[179] = R.Zo(Vk);
    R.Xk = function (a) {
        var b = function () {
            var a = this.pop(), d = this.pop();
            this.za().S(b, d, a)
        };
        b.implementation = a;
        return b
    };
    R.vk = R.Xk(function (a, b) {
        a = Wj(a);
        var c = a.__swiffy_proxy;
        if (c && c.Re) b = c.Re.call(a, b); else {
            c = Object.keys(a);
            do if (++b > c.length) return 0; while (rd(c[b - 1]))
        }
        return b
    });
    R[31] = R.vk;
    R[30] = R.Xk(function (a, b) {
        a = Wj(a);
        var c = a.__swiffy_proxy;
        return c && c.dg ? c.dg.call(a, b) : Object.keys(a)[b - 1]
    });
    R[35] = R.Xk(function (a, b) {
        a = Wj(a);
        var c = a.__swiffy_proxy;
        return c && c.eg ? c.eg.call(a, b) : a[Object.keys(a)[b - 1]]
    });
    R.Kg = function (a, b) {
        this.append("while(" + this.register(a) + "&&!(" + this.register(b) + "=");
        this.Og(R.vk, this.register(a), this.register(b)).append("))");
        this.append(this.register(a) + "=").S(R.Kg, this.register(a));
        this.ea("!!" + this.register(b))
    };
    R.Kg.implementation = function (a) {
        var b = a.__swiffy_proxy;
        return b && b.Re ? null : Object.getPrototypeOf(a)
    };
    R.Kg.decode = Gj;
    R[50] = R.Kg;
    R.dh = function (a) {
        var b = function () {
            var a = this.pop();
            this.za().S(b, a)
        };
        b.implementation = a;
        return b
    };
    R.eh = function (a) {
        var b = function () {
            var a = this.pop(), d = this.pop();
            this.za().S(b, a, d)
        };
        b.implementation = a;
        return b
    };
    R[53] = R.dh(function (a) {
        return this.Jc(a, 1).getUint8(a)
    });
    R[54] = R.dh(function (a) {
        return this.Jc(a, 2).getUint16(a, !0)
    });
    R[55] = R.dh(function (a) {
        return this.Jc(a, 4).getInt32(a, !0)
    });
    R[56] = R.dh(function (a) {
        return this.Jc(a, 4).getFloat32(a, !0)
    });
    R[57] = R.dh(function (a) {
        return this.Jc(a, 8).getFloat64(a, !0)
    });
    R[58] = R.eh(function (a, b) {
        this.Jc(a, 1).setUint8(a, b)
    });
    R[59] = R.eh(function (a, b) {
        this.Jc(a, 2).setUint16(a, b, !0)
    });
    R[60] = R.eh(function (a, b) {
        this.Jc(a, 4).setUint32(a, b, !0)
    });
    R[61] = R.eh(function (a, b) {
        this.Jc(a, 4).setFloat32(a, b, !0)
    });
    R[62] = R.eh(function (a, b) {
        this.Jc(a, 8).setFloat64(a, b, !0)
    });
    R[80] = function () {
        this.ea(this.pop() + "<<31>>31")
    };
    R[81] = function () {
        this.ea(this.pop() + "<<24>>24")
    };
    R[82] = function () {
        this.ea(this.pop() + "<<16>>16")
    };
    R.fh = function (a) {
        var b = function () {
        };
        b.decode = a;
        return b
    };
    R[2] = R.fh();
    R[9] = R.fh();
    R[239] = R.fh(function (a) {
        return [a.ce(), a.kg(), a.ce(), a.kg()]
    });
    R[241] = R.fh(Fj);
    R[240] = R.fh(Fj);
    R.xd = function (a, b, c) {
        var d = function () {
        };
        d.implementation = a;
        d.hc = c;
        return R[b] = d
    };
    R.Yn = R.xd(Bl.prototype.De, 256, Bl);
    R.Zn = R.xd(function (a, b, c) {
        return new bm(this, a, b, c)
    }, 258, Bl);
    R.$n = R.xd(function (a, b) {
        var c = this;
        return function () {
            rg(55, b);
            var d = pg;
            pg = "";
            var e = r;
            r = c.fa;
            try {
                var f = a.apply(this, arguments);
                sg();
                return f
            } catch (h) {
                tg(h, !!sg())
            } finally {
                pg = d, r = e
            }
        }
    }, 257);
    R.wk = R.xd(function (a) {
        for (var b, c = function () {
            b = arguments
        }, d, e = 0; ;) try {
            return a(c, e, d)
        } catch (f) {
            e = cm(f, b), d = f.value
        }
    }, 259);
    R.Wn = R.xd(function (a, b, c, d, e) {
        return a.length > b ? this.Fo(a[b], c) : this.Zr(d, e)
    }, 260, Bl);
    R.Xn = R.xd(hk.prototype.du, 261, hk);
    R.Vn = R.xd(function () {
        ++ug
    }, 262);
    R.kt = R.xd(function () {
    }, 263);
    var Dl = function (a, b, c) {
        this.source = "";
        this.Iq = a;
        this.as = b;
        this.gd = c;
        this.tk = {};
        this.wp = [];
        this.rg = this.Ja = 0
    };
    m(Dl, Th);
    g = Dl.prototype;
    g.lg = function (a, b) {
        var c = this.Iq[a];
        return this.Mm(c, b) ? c.xi : -1
    };
    g.Mm = function (a, b) {
        return a && l(a.xi) ? (this.wp.push({Hq: a, stack: l(b) ? b : this.Ja, yx: this.rg}), !0) : !1
    };
    g.Mw = function (a) {
        return String(a)
    };
    g.Je = function (a) {
        return "handler" + a
    };
    g.register = function (a) {
        return "r" + a
    };
    g.stack = function (a) {
        return "s" + (this.Ja - a - 1)
    };
    g.push = function () {
        return this.ek("s" + this.Ja++)
    };
    g.pop = function () {
        return "s" + --this.Ja
    };
    g.Wd = function (a) {
        for (var b = "[", c = this.Ja -= a; 0 < a; ++c, --a) b += "s" + c, 1 < a && (b += ",");
        return b + "]"
    };
    g.Yd = function (a) {
        var b = this.gd.multinames[a];
        return this.xj(R.Yn) + "(" + this.Mw(a) + b.compile(this) + ")"
    };
    g.za = function () {
        this.append(this.push() + "=");
        return this
    };
    g.ea = function (a) {
        this.append(this.push() + "=" + a + ";");
        return this
    };
    g.scope = function (a) {
        return l(a) ? "scope" + a : this.rg ? "scope" + (this.rg - 1) : "scope"
    };
    g.ax = function () {
        this.rg--
    };
    g.Ft = function () {
        this.append(this.ek("scope" + this.rg++) + "=");
        return this
    };
    g.Dt = function (a) {
        for (var b = 0; b < a.length; ++b) {
            var c = a[b], d = this.lg(c.target, 1);
            this.append("var " + this.Je(b) + "=");
            this.S(R.Zn, c.excType, c.varName, d)
        }
    };
    g.Ct = function (a) {
        var b = a.params || [], c = a.optionals || [], d = b.length - c.length;
        this.append("function(");
        for (var e = 0; e < b.length;) 0 < e && this.append(","), this.append(this.register(++e));
        this.append("){");
        for (e = 0; e < b.length; ++e) {
            var f = b[e];
            if (e >= d) {
                var h = c[e - d];
                this.append(this.register(e + 1) + "=");
                this.S(R.Wn, "arguments", e, f, this.Yu(h.kind), h.value)
            } else f && (this.append(this.register(e + 1) + "="), this.S(R.pd, this.register(e + 1), f))
        }
        this.append("var " + this.register(0) + "=scope").Og(R.Xn, "this");
        for (null != a.arguments &&
             this.append("," + this.register(++e) + "=Array.prototype.slice.call(arguments," + a.arguments + ")"); ++e < a.locals;) this.append("," + this.register(e));
        this.append(";")
    };
    g.ek = function (a) {
        this.tk[a] = !0;
        return a
    };
    g.fx = function (a) {
        this.tk[a] = !1
    };
    g.Gt = function () {
        var a = !1, b;
        for (b in this.tk) this.tk[b] && (this.append((a ? ", " : "var ") + b), a = !0);
        a && this.append(";")
    };
    g.zx = function (a) {
        this.append("katch(");
        for (var b = 0; b < a.length; ++b) 0 < b && this.append(","), this.append(this.Je(a[b]));
        this.append(");")
    };
    g.fu = function (a) {
        this.Ja = a.stack;
        this.rg = a.yx;
        var b = 0;
        for (a = a.Hq; a;) {
            b++;
            a.tj && this.zx(a.tj);
            var c = a.xj;
            c.Ka && (b = 0);
            c.apply(this, a.args);
            a = a.next;
            if (this.Mm(a)) break
        }
        return this.Xs()
    };
    g.Bt = function (a) {
        var b = [], c = this.Xs();
        this.Mm(this.Iq[0]);
        for (var d, e = 0; d = this.wp.pop(); e++) {
            var f = d.Hq.xi;
            b[f] || (b[f] = this.fu(d))
        }
        this.append(c);
        c = 1 < e;
        if (a = !!a.length) this.append("return ").Ek(R.wk), this.append("(function(katch,j,s0){"), this.fx("s0");
        this.Gt();
        c && (this.append(a ? "for(;;){" : "for(var j=0;;){"), this.S(R.Vn), this.append("switch(j){"));
        for (d = 0; d < b.length; ++d) b[d] && (c && this.append("case " + d + ":"), this.append(b[d]));
        c && this.append("default:return;}}");
        a && this.append("});")
    };
    N(function () {
        P(this, "description", "String", "");
        P(this, "forceSimple", "Boolean", !1);
        P(this, "name", "String", "");
        P(this, "noAutoLabeling", "Boolean", !1);
        P(this, "shortcut", "String", "");
        P(this, "silent", "Boolean", !1)
    }, "flash.accessibility.AccessibilityProperties");
    var dm = N(function () {
    }, "flash.display.BitmapDataChannel");
    Object.defineProperties(dm, {ALPHA: {value: 8}, BLUE: {value: 4}, GREEN: {value: 2}, RED: {value: 1}});
    var em = N(function () {
    }, "flash.display.BlendMode");
    Xk(em, wc);
    var fm = N(function () {
    }, "flash.display.CapsStyle");
    M(fm, "NONE", "none");
    M(fm, "ROUND", "round");
    M(fm, "SQUARE", "square");
    var gm = N(function () {
    }, "flash.display.GradientType");
    M(gm, "LINEAR", "linear");
    M(gm, "RADIAL", "radial");
    var hm = N(Qk(1001), "flash.display.IBitmapDrawable");
    hm.m = hm;
    wk(hm.m);
    var im = N(function () {
    }, "flash.display.InterpolationMethod");
    M(im, "RGB", "rgb");
    M(im, "LINEAR_RGB", "linearRGB");
    var jm = N(function () {
    }, "flash.display.JointStyle");
    M(jm, "BEVEL", "bevel");
    M(jm, "MITER", "miter");
    M(jm, "ROUND", "round");
    var km = N(function () {
    }, "flash.display.LineScaleMode");
    M(km, "HORIZONTAL", "horizontal");
    M(km, "NONE", "none");
    M(km, "NORMAL", "normal");
    M(km, "VERTICAL", "vertical");
    var lm = N(function () {
    }, "flash.display.PixelSnapping");
    Xk(lm, ["always", "auto", "never"]);
    var mm = function (a, b, c) {
        oe(this, {name: String(a), numFrames: b | 0, labels: O(c, Array)})
    }, nm = N(mm, "flash.display.Scene");
    J(nm, "name", function () {
        return x(this).name
    });
    J(nm, "numFrames", function () {
        return x(this).numFrames
    });
    J(nm, "labels", function () {
        return x(this).labels
    });
    var om = N(function () {
    }, "flash.display.SpreadMethod");
    M(om, "PAD", "pad");
    M(om, "REFLECT", "reflect");
    M(om, "REPEAT", "repeat");
    var pm = N(function () {
    }, "flash.display.StageAlign");
    M(pm, "BOTTOM", "B");
    M(pm, "BOTTOM_LEFT", "BL");
    M(pm, "BOTTOM_RIGHT", "BR");
    M(pm, "LEFT", "L");
    M(pm, "RIGHT", "R");
    M(pm, "TOP", "T");
    M(pm, "TOP_LEFT", "TL");
    M(pm, "TOP_RIGHT", "TR");
    var qm = N(function () {
    }, "flash.display.StageDisplayState");
    Xk(qm, ["fullScreen", "fullScreenInteractive", "normal"]);
    var rm = N(function () {
    }, "flash.display.StageQuality");
    Xk(rm, ["best", "high", "low", "medium"], {HIGH_16X16: "16x16", HIGH_16X16_LINEAR: "16x16linear", HIGH_8X8: "8x8", HIGH_8X8_LINEAR: "8x8linear"});
    var sm = N(function () {
    }, "flash.display.StageScaleMode");
    M(sm, "EXACT_FIT", "exactFit");
    M(sm, "NO_BORDER", "noBorder");
    M(sm, "NO_SCALE", "noScale");
    M(sm, "SHOW_ALL", "showAll");
    var tm = function (a, b, c) {
        a = String(a);
        oe(this, {type: a, bubbles: !!b, cancelable: !!c, Ci: !1, target: null, currentTarget: null, stopPropagation: !1, Rs: !1, defaultPrevented: !1, nn: !1})
    }, um = N(tm, "flash.events.Event");
    J(um, "bubbles", function () {
        return x(this).bubbles
    });
    J(um, "cancelable", function () {
        return x(this).cancelable
    });
    J(um, "currentTarget", function () {
        return x(this).currentTarget
    });
    J(um, "eventPhase", function () {
        var a = x(this);
        return a.currentTarget == a.target ? 2 : a.Ci ? 1 : 3
    });
    J(um, "target", function () {
        return x(this).target
    });
    J(um, "type", function () {
        return x(this).type
    });
    I(um, "isDefaultPrevented", function () {
        return x(this).defaultPrevented
    });
    I(um, "preventDefault", function () {
        var a = x(this);
        a.cancelable && (a.defaultPrevented = !0)
    });
    I(um, "stopPropagation", function () {
        x(this).stopPropagation = !0
    });
    I(um, "stopImmediatePropagation", function () {
        var a = x(this);
        a.Rs = !0;
        a.stopPropagation = !0
    });
    I(um, "formatToString", function () {
        for (var a = "[" + Oj(this).localName, b = 0; b < arguments.length; b++) {
            var c = this[arguments[b]];
            ja(c) ? c = Math.round(100 * c) / 100 : ha(c) && (c = '"' + c + '"');
            a += " " + arguments[b] + "=" + c
        }
        return a + "]"
    });
    I(um, "clone", function () {
        return Nk.call(um, this.type, this.bubbles, this.cancelable)
    });
    I(um, "toString", function () {
        return this.formatToString("type", "bubbles", "cancelable", "eventPhase")
    });
    Xk(um, "activate added addedToStage cancel change channelMessage channelState clear close closing complete connect context3DCreate copy cut deactivate displaying enterFrame exitFrame exiting frameConstructed frameLabel htmlBoundsChange htmlDOMInitialize htmlRender id3 init locationChange mouseLeave networkChange open paste preparing removed removedFromStage render resize scroll select selectAll soundComplete standardErrorClose standardInputClose standardOutputClose suspend tabChildrenChange tabEnabledChange tabIndexChange textInteractionModeChange textureReady unload userIdle userPresent videoFrame workerState".split(" "), {FULLSCREEN: "fullScreen"});
    var vm = function (a, b, c, d) {
        tm.call(this, a, b, c);
        this.activating = d
    }, wm = N(vm, "flash.events.ActivityEvent", tm);
    J(wm, "activating", function () {
        return x(this).wt
    });
    K(wm, "activating", function (a) {
        x(this).wt = !!a
    });
    I(wm, "clone", function () {
        return Nk.call(um, this.type, this.bubbles, this.cancelable, this.activating)
    });
    I(wm, "toString", function () {
        return this.formatToString("type", "bubbles", "cancelable", "eventPhase", "status", "activating")
    });
    Object.defineProperty(wm, "ACTIVITY", {value: "activity"});
    var xm = function (a, b, c, d, e) {
        tm.call(this, a, b, c);
        this.contextMenuOwner = e;
        this.isMouseTargetInaccessible = !1;
        this.mouseTarget = d
    }, ym = N(xm, "flash.events.ContextMenuEvent", tm);
    J(um, "contextMenuOwner", function () {
        return x(this).qu
    });
    K(um, "contextMenuOwner", function (a) {
        x(this).qu = O(a, zm)
    });
    J(um, "isMouseTargetInaccessible", function () {
        return x(this).cw
    });
    K(um, "isMouseTargetInaccessible", function (a) {
        x(this).cw = !!a
    });
    J(um, "mouseTarget", function () {
        return x(this).Fw
    });
    K(um, "mouseTarget", function (a) {
        x(this).Fw = O(a, zm)
    });
    I(ym, "clone", function () {
        return Nk.call(xm, this.type, this.bubbles, this.cancelable, this.mouseTarget, this.contextMenuOwner)
    });
    Object.defineProperty(ym, "MENU_ITEM_SELECT", {value: "menuItemSelect"});
    Object.defineProperty(ym, "MENU_SELECT", {value: "menuSelect"});
    var Am = N(function (a, b, c, d, e, f) {
        tm.call(this, a, b, c);
        this.relatedObject = l(d) ? d : null;
        this.shiftKey = l(e) ? e : !1;
        this.keyCode = l(f) ? f : 0;
        this.isRelatedObjectInaccessible = !1
    }, "flash.events.FocusEvent", tm);
    J(Am, "isRelatedObjectInaccessible", function () {
        return x(this).jw
    });
    J(Am, "keyCode", function () {
        return x(this).keyCode
    });
    J(Am, "relatedObject", function () {
        return x(this).mg
    });
    J(Am, "shiftKey", function () {
        return x(this).shiftKey
    });
    K(Am, "isRelatedObjectInaccessible", function (a) {
        x(this).jw = !!a
    });
    K(Am, "keyCode", function (a) {
        x(this).keyCode = a >>> 0
    });
    K(Am, "relatedObject", function (a) {
        x(this).mg = O(a, zm)
    });
    K(Am, "shiftKey", function (a) {
        x(this).shiftKey = !!a
    });
    Xk(Am, ["focusIn", "focusOut", "mouseFocusChange"]);
    var Bm = N(function (a, b, c, d, e) {
        vm.call(this, a, b, c);
        a = x(this);
        a.fullScreen = !!d;
        a.Vv = !!e
    }, "flash.events.FullScreenEvent", vm);
    J(Bm, "fullScreen", function () {
        return x(this).fullScreen
    });
    J(Bm, "interactive", function () {
        return x(this).Vv
    });
    I(Bm, "clone", function () {
        return Nk.call(Bm, this.type, this.bubbles, this.cancelable, this.activating, this.fullScreen, this.interactive)
    });
    I(Bm, "toString", function () {
        return this.formatToString("type", "bubbles", "cancelable", "eventPhase", "activating", "fullScreen", "interactive")
    });
    Object.defineProperty(Bm, "FULL_SCREEN", {value: "fullScreen"});
    Object.defineProperty(Bm, "FULL_SCREEN_INTERACTIVE_ACCEPTED", {value: "fullScreenInteractiveAccepted"});
    var Cm = function (a, b, c, d) {
        tm.call(this, a, b, c);
        x(this).status = +y(d, 0);
        this.responseURL = null
    }, Dm = N(Cm, "flash.events.HTTPStatusEvent", tm);
    J(Dm, "status", function () {
        return x(this).status
    });
    I(Dm, "clone", function () {
        return Nk.call(Dm, this.type, this.bubbles, this.cancelable, this.status)
    });
    I(Dm, "toString", function () {
        return this.formatToString("type", "bubbles", "cancelable", "eventPhase", "status", "responseURL")
    });
    Xk(Dm, ["httpResponseStatus", "httpStatus"]);
    var Em = N(Qk(1001), "flash.events.IEventDispatcher");
    Em.m = Em;
    Em.prototype.addEventListener = function () {
    };
    Em.prototype.dispatchEvent = function () {
    };
    Em.prototype.hasEventListener = function () {
    };
    Em.prototype.removeEventListener = function () {
    };
    Em.prototype.willTrigger = function () {
    };
    wk(Em.m);
    var Fm = function (a, b, c) {
        this.listener = a;
        this.Bn = b;
        this.dx = c
    }, S = function (a) {
        a = O(a, Em.m);
        oe(this, {target: a || this})
    };
    N(S, "flash.events.EventDispatcher", void 0, [Em]);
    var Gm = {}, Hm = function (a, b) {
        for (var c = 1; c < arguments.length; ++c) Gm[arguments[c]] = a
    };
    Hm(S, "activate", "deactivate");
    var Im = function (a, b) {
        var c = Gm[a];
        return !!c && b instanceof c
    }, Km = function (a) {
        a = new tm(a, !1, !1);
        x(a).nn = !0;
        Jm(this, a)
    };
    S.prototype.addEventListener = function (a, b, c, d) {
        this.__swiffy_listeners || Object.defineProperty(this, "__swiffy_listeners", {value: {}});
        var e = this.__swiffy_listeners, f = e[a];
        f || (e[a] = f = []);
        d |= 0;
        c = !!c;
        for (e = 0; e < f.length; ++e) if (f[e].listener == b && f[e].Bn == c) return;
        0 == f.length && Im(a, this) && r.kx(a, this);
        for (e = f.length; 0 < e && d > f[e - 1].dx; --e) ;
        f.splice(e, 0, new Fm(b, c, d))
    };
    var Jm = function (a, b) {
        var c = a.__swiffy_d;
        if ((c = c instanceof $i ? c : null) && c.Md()) return !1;
        var d = x(b), e = x(a);
        d.target = e && e.target || a;
        e = [];
        if (c && !d.nn) {
            for (; c = c.getParent();) e.push(c.s);
            d.Ci = !0;
            for (c = e.length - 1; 0 <= c && !d.stopPropagation; --c) {
                var f = e[c];
                d.currentTarget = f;
                Lm(f, b)
            }
        }
        d.Ci = !1;
        d.currentTarget = d.target;
        Lm(a, b);
        if (d.bubbles) for (c = 0; c < e.length && !d.stopPropagation; ++c) f = e[c], d.currentTarget = f, Lm(f, b);
        return !d.defaultPrevented
    };
    S.prototype.dispatchEvent = function (a) {
        a = O(a, um);
        Wj(a);
        a.target && (a = a.clone());
        return Jm(this, a)
    };
    var Lm = function (a, b) {
        var c = a.__swiffy_listeners, d = x(b);
        if (c && c[d.type]) for (var c = c[d.type], e = 0; e < c.length && !d.Rs; e++) if (c[e].Bn == d.Ci) try {
            c[e].listener.call(null, b)
        } catch (f) {
            tg(f, !1)
        }
    };
    S.prototype.removeEventListener = function (a, b, c) {
        var d = this.__swiffy_listeners;
        if (d && d[a] && d[a].length) {
            d = d[a];
            c = !!c;
            for (var e = 0; e < d.length; e++) d[e].listener == b && d[e].Bn == c && d.splice(e--, 1);
            0 == d.length && Im(a, this) && r.at(a, this)
        }
    };
    S.prototype.hasEventListener = function (a) {
        var b = this.__swiffy_listeners;
        return !!b && !!b[a] && b[a].length
    };
    S.prototype.willTrigger = function (a) {
        var b = this;
        do if (b.hasEventListener(a)) return !0; while (b = b.parent);
        return !1
    };
    var Mm = function (a, b) {
        S.call(this);
        var c = x(this);
        c.name = b;
        c.frame = a
    }, Nm = N(Mm, "flash.display.FrameLabel", S);
    J(Nm, "frame", function () {
        return x(this).frame
    });
    J(Nm, "name", function () {
        return x(this).name
    });
    var Om = function (a) {
        S.call(this, a);
        Object.defineProperty(this, "__swiffy_d", {value: new ne(this)});
        M(this, "bytes", null);
        M(this, "childAllowsParent", !0);
        P(this, "childSandboxBridge", "Object", null);
        P(this, "isURLInaccessible", "Boolean", !1);
        M(this, "parentAllowsChild", !0);
        P(this, "parentSandboxBridge", "Object", null);
        M(this, "sameDomain", !1);
        M(this, "sharedEvents", new S);
        M(this, "uncaughtErrorEvents", null)
    }, Pm = Pk(Om, "flash.display.LoaderInfo", {Rg: S, Kd: Rk}), Qm = function (a) {
        a = a.__swiffy_d;
        a = a.content && a.content.__swiffy_d;
        if (!a) throw H(2099);
        return a
    }, Rm = function (a) {
        var b = a.__swiffy_d;
        a = Qm(a);
        if ("application/x-shockwave-flash" != b.contentType) throw H(2098);
        return a
    };
    J(Pm, "actionScriptVersion", function () {
        return Rm(this).definition.as3 ? 3 : 2
    });
    Object.defineProperty(Om.prototype, "applicationDomain", {
        get: function () {
            var a = this.__swiffy_d;
            return a.Ec ? Sm(a.Ec) : null
        }
    });
    Object.defineProperty(Om.prototype, "bytesLoaded", {
        get: function () {
            return this.__swiffy_d.Yc
        }
    });
    Object.defineProperty(Om.prototype, "bytesTotal", {
        get: function () {
            return this.__swiffy_d.Zc
        }
    });
    Object.defineProperty(Om.prototype, "content", {
        get: function () {
            return this.__swiffy_d.content
        }
    });
    Object.defineProperty(Om.prototype, "contentType", {
        get: function () {
            return this.__swiffy_d.contentType
        }
    });
    J(Pm, "frameRate", function () {
        return Rm(this).definition.frameRate
    });
    J(Pm, "height", function () {
        return Qm(this).U()
    });
    Object.defineProperty(Om.prototype, "loader", {
        get: function () {
            return this.__swiffy_d.Wq
        }
    });
    Object.defineProperty(Om.prototype, "loaderURL", {
        get: function () {
            return this.__swiffy_d.vv()
        }
    });
    Object.defineProperty(Om.prototype, "parameters", {
        get: function () {
            return this.__swiffy_d.Fm
        }
    });
    J(Pm, "swfVersion", function () {
        return Rm(this).definition.oc
    });
    Object.defineProperty(Om.prototype, "url", {
        get: function () {
            return this.__swiffy_d.Sc
        }
    });
    J(Pm, "width", function () {
        return Qm(this).I()
    });
    Pm.getLoaderInfoByDefinition = function () {
        Q(Om, "getLoaderInfoByDefinition");
        return null
    };
    var Tm = function () {
        S.call(this)
    };
    N(Tm, "flash.display.NativeMenu", S);
    Tm.prototype.clone = function () {
        return new Tm
    };
    var Um = function () {
        S.call(this)
    };
    N(Um, "flash.display.NativeMenuItem", S);
    Um.prototype.clone = function () {
        return new Um
    };
    var Vm = N(function (a, b, c, d, e, f, h, k, n) {
        tm.call(this, a, !l(b) || !!b, c);
        a = x(this);
        a.charCode = d >>> 0;
        a.keyCode = e >>> 0;
        a.Oq = f >>> 0;
        a.ctrlKey = !!h;
        a.altKey = !!k;
        a.shiftKey = !!n
    }, "flash.events.KeyboardEvent", tm);
    J(Vm, "charCode", function () {
        return x(this).charCode
    });
    J(Vm, "keyCode", function () {
        return x(this).keyCode
    });
    J(Vm, "keyLocation", function () {
        return x(this).Oq
    });
    J(Vm, "ctrlKey", function () {
        return x(this).ctrlKey
    });
    J(Vm, "altKey", function () {
        return x(this).altKey
    });
    J(Vm, "shiftKey", function () {
        return x(this).shiftKey
    });
    K(Vm, "charCode", function (a) {
        x(this).charCode = a >>> 0
    });
    K(Vm, "keyCode", function (a) {
        x(this).keyCode = a >>> 0
    });
    K(Vm, "keyLocation", function (a) {
        x(this).Oq = a >>> 0
    });
    K(Vm, "ctrlKey", function (a) {
        x(this).ctrlKey = !!a
    });
    K(Vm, "altKey", function (a) {
        x(this).altKey = !!a
    });
    K(Vm, "shiftKey", function (a) {
        x(this).shiftKey = !!a
    });
    I(Vm, "clone", function () {
        return Nk.call(Vm, this.type, this.bubbles, this.cancelable, this.charCode, this.keyCode, this.keyLocation, this.ctrlKey, this.altKey, this.shiftKey)
    });
    I(Vm, "updateAfterEvent", function () {
        r.i.jd()
    });
    Xk(Vm, ["keyDown", "keyUp"]);
    var Wm = function (a, b, c, d, e, f, h, k, n, q, u) {
        tm.call(this, a, b, c);
        this.localX = d;
        this.localY = e;
        this.relatedObject = f;
        this.ctrlKey = h;
        this.altKey = k;
        this.shiftKey = n;
        this.buttonDown = q;
        this.delta = u
    }, Xm = N(Wm, "flash.events.MouseEvent", tm);
    J(Xm, "localX", function () {
        return x(this).Kj
    });
    K(Xm, "localX", function (a) {
        x(this).Kj = +a
    });
    J(Xm, "localY", function () {
        return x(this).Lj
    });
    K(Xm, "localY", function (a) {
        x(this).Lj = +a
    });
    var Ym = function (a) {
        a = a.target && a.target.__swiffy_d;
        return a instanceof $i ? a.$() : Ic
    };
    J(Xm, "stageX", function () {
        var a = x(this), b = Ym(a);
        return b.u * a.Kj + b.C * a.Lj + b.Y / 20
    });
    J(Xm, "stageY", function () {
        var a = x(this), b = Ym(a);
        return b.K * a.Kj + b.o * a.Lj + b.Z / 20
    });
    J(Xm, "relatedObject", function () {
        return x(this).mg
    });
    K(Xm, "relatedObject", function (a) {
        x(this).mg = O(a, zm)
    });
    J(Xm, "ctrlKey", function () {
        return x(this).ctrlKey
    });
    K(Xm, "ctrlKey", function (a) {
        x(this).ctrlKey = !!a
    });
    J(Xm, "altKey", function () {
        return x(this).altKey
    });
    K(Xm, "altKey", function (a) {
        x(this).altKey = !!a
    });
    J(Xm, "shiftKey", function () {
        return x(this).shiftKey
    });
    K(Xm, "shiftKey", function (a) {
        x(this).shiftKey = !!a
    });
    J(Xm, "buttonDown", function () {
        return x(this).xo
    });
    K(Xm, "buttonDown", function (a) {
        x(this).xo = !!a
    });
    J(Xm, "delta", function () {
        return x(this).Fu
    });
    K(Xm, "delta", function (a) {
        x(this).Fu = a | 0
    });
    I(Xm, "clone", function () {
        return Nk.call(Xm, this.type, this.bubbles, this.cancelable, this.localX, this.localY, this.relatedObject, this.ctrlKey, this.altKey, this.shiftKey, this.buttonDown, this.delta)
    });
    I(Xm, "toString", function () {
        return this.formatToString("type", "bubbles", "cancelable", "eventPhase", "localX", "localY", "stageX", "stageY", "relatedObject", "ctrlKey", "altKey", "shiftKey", "buttonDown", "delta")
    });
    I(Xm, "updateAfterEvent", function () {
        r.i.jd()
    });
    Xk(Xm, "click contextMenu doubleClick middleClick middleMouseDown middleMouseUp mouseDown mouseMove mouseOut mouseOver mouseUp mouseWheel rightClick rightMouseDown rightMouseUp rollOut rollOver".split(" "));
    var Zm = function (a, b, c, d) {
        tm.call(this, a, b, c);
        this.info = d
    }, $m = N(Zm, "flash.events.NetStatusEvent", tm);
    J($m, "info", function () {
        return x(this).info
    });
    K($m, "info", function (a) {
        x(this).info = Yk(a)
    });
    I($m, "clone", function () {
        return Nk.call($m, this.type, this.bubbles, this.cancelable, this.info)
    });
    Object.defineProperty($m, "NET_STATUS", {value: "netStatus"});
    var an = function (a, b, c, d, e) {
        tm.call(this, a, b, c);
        this.bytesLoaded = d;
        this.bytesTotal = e
    }, bn = N(an, "flash.events.ProgressEvent", tm);
    J(bn, "bytesLoaded", function () {
        return x(this).Yc
    });
    K(bn, "bytesLoaded", function (a) {
        x(this).Yc = +y(a, 0)
    });
    J(bn, "bytesTotal", function () {
        return x(this).Zc
    });
    K(bn, "bytesTotal", function (a) {
        x(this).Zc = +y(a, 0)
    });
    I(bn, "clone", function () {
        return Nk.call(bn, this.type, this.bubbles, this.cancelable, this.bytesLoaded, this.bytesTotal)
    });
    I(bn, "toString", function () {
        return this.formatToString("type", "bubbles", "cancelable", "bytesLoaded", "bytesTotal")
    });
    Xk(bn, ["progress", "socketData", "standardErrorData", "standardInputProgress", "standardOutputData"]);
    var cn = N(function (a, b, c, d, e) {
        tm.call(this, a, b, c);
        this.code = d;
        this.level = e
    }, "flash.events.StatusEvent", tm);
    J(cn, "code", function () {
        return x(this).code
    });
    K(cn, "code", function (a) {
        x(this).code = String(a)
    });
    J(cn, "level", function () {
        return x(this).level
    });
    K(cn, "level", function (a) {
        x(this).level = String(a)
    });
    I(cn, "clone", function () {
        return Nk.call(cn, this.type, this.bubbles, this.cancelable, this.code, this.level)
    });
    Object.defineProperty(cn, "STATUS", {value: "status"});
    var en = function (a, b, c, d) {
        tm.call(this, a, b, c);
        dn.call(this, y(d, ""))
    }, dn = function (a) {
        x(this).text = $k(a)
    }, fn = N(en, "flash.events.TextEvent", tm);
    J(fn, "text", function () {
        return x(this).text
    });
    K(fn, "text", dn);
    I(fn, "clone", function () {
        return Nk.call(fn, this.type, this.bubbles, this.cancelable, this.text)
    });
    I(fn, "toString", function () {
        return this.formatToString("type", "bubbles", "cancelable", "text")
    });
    Object.defineProperty(fn, "LINK", {value: "link"});
    Object.defineProperty(fn, "TEXT_INPUT", {value: "textInput"});
    var gn = function (a, b, c, d) {
        en.call(this, a, b, c, d)
    }, hn = N(gn, "flash.events.ErrorEvent", en);
    I(hn, "clone", function () {
        return Nk.call(hn, this.type, this.bubbles, this.cancelable, this.text)
    });
    Object.defineProperty(hn, "ERROR", {value: "error"});
    var jn = N(function (a, b, c, d, e) {
        en.call(this, a, b, c, d);
        this.error = e
    }, "flash.events.AsyncErrorEvent", gn);
    J(jn, "error", function () {
        return x(this).error
    });
    K(jn, "error", function (a) {
        x(this).error = O(a, el)
    });
    I(jn, "clone", function () {
        return Nk.call(jn, this.type, this.bubbles, this.cancelable, this.text, this.error)
    });
    Object.defineProperty(jn, "ASYNC_ERROR", {value: "asyncError"});
    var kn = function (a, b, c, d) {
        en.call(this, a, b, c, d)
    }, ln = function (a, b) {
        var c = H.apply(null, arguments);
        return Nk.call(kn, "ioError", !1, !1, c.value.message)
    }, mn = N(kn, "flash.events.IOErrorEvent", gn);
    I(mn, "clone", function () {
        return Nk.call(mn, this.type, this.bubbles, this.cancelable, this.text)
    });
    Xk(mn, ["ioError", "standardErrorIoError", "standardInputIoError", "standardOutputIoError"]);
    var nn = N(function (a, b, c, d) {
        en.call(this, a, b, c, d)
    }, "flash.events.SecurityErrorEvent", gn);
    I(nn, "clone", function () {
        return Nk.call(nn, this.type, this.bubbles, this.cancelable, this.text)
    });
    Object.defineProperty(nn, "SECURITY_ERROR", {value: "securityError"});
    var on = function (a, b, c) {
        tm.call(this, a, b, c)
    }, pn = N(on, "flash.events.TimerEvent", tm);
    I(pn, "clone", function () {
        return Nk.call(pn, this.type, this.bubbles, this.cancelable, this.activating)
    });
    I(pn, "updateAfterEvent", function () {
        r.i.jd()
    });
    Xk(pn, ["timer", "timerComplete"]);
    var qn = Qk(2012);
    qn.m = N(qn, "flash.external.ExternalInterface");
    Object.defineProperty(qn.m, "available", {get: he});
    P(qn.m, "marshallExceptions", "Boolean", !1);
    Object.defineProperty(qn.m, "objectID", {
        get: function () {
            return r.i.getName()
        }
    });
    qn.m.addCallback = function (a, b) {
        je(String(a), null, O(b, Function), qn.Ut)
    };
    qn.Ut = function () {
        if (qn.m.marshallExceptions) throw Error("Error in ActionScript");
        return null
    };
    qn.m.call = function (a, b) {
        return ke(r.i, String(a), Array.prototype.slice.call(arguments, 1), qn.Qt)
    };
    qn.Qt = function (a) {
        if (qn.m.marshallExceptions) throw new og(new dl(String(a)));
        return null
    };
    var rn = function () {
    }, sn = Pk(rn, "flash.filters.BitmapFilter", {Kd: Rk});
    rn.prototype.clone = function () {
        return null
    };
    var tn = N(function () {
    }, "flash.filters.BitmapFilterQuality");
    Object.defineProperties(tn, {HIGH: {value: 3}, LOW: {value: 1}, MEDIUM: {value: 2}});
    var un = N(function () {
    }, "flash.filters.BitmapFilterType");
    Xk(un, ["full", "inner", "outer"]);
    var vn = function (a) {
        return Math.max(0, Math.min(a | 0, 255))
    };
    var wn = function (a, b, c, d, e, f, h, k, n, q, u, p) {
        a = +y(a, 4);
        b = +y(b, 45);
        c = y(c, 16777215) >>> 0;
        d = +y(d, 1);
        e >>>= 0;
        f = +y(f, 1);
        h = +y(h, 4);
        k = +y(k, 4);
        n = +y(n, 1);
        q = y(q, 1) | 0;
        u = al(u, "inner");
        p = !!p;
        P(this, "angle", "Number", b);
        P(this, "blurX", "Number", h);
        P(this, "blurY", "Number", k);
        P(this, "distance", "Number", a);
        P(this, "highlightAlpha", "Number", d);
        P(this, "highlightColor", "uint", c);
        P(this, "knockout", "Boolean", p);
        P(this, "quality", "int", q);
        P(this, "shadowAlpha", "Number", f);
        P(this, "shadowColor", "uint", e);
        P(this, "strength", "Number",
            n);
        P(this, "type", "String", u)
    };
    N(wn, "flash.filters.BevelFilter", rn);
    te(wn, function () {
        var a = new ih;
        a.Na(this);
        return a
    });
    wn.prototype.clone = function () {
        return new wn(this.distance, this.angle, this.highlightColor, this.highlightAlpha, this.shadowColor, this.shadowAlpha, this.blurX, this.blurY, this.strength, this.quality, this.type, this.knockout)
    };
    var xn = function (a) {
        a = O(a, Array);
        oe(this, new ve);
        l(a) && xe.call(this, a)
    }, yn = N(xn, "flash.filters.ColorMatrixFilter", rn);
    vk(yn, "matrix", we, xe);
    xn.prototype.clone = function () {
        return new xn(this.matrix)
    };
    var zn = function (a, b, c, d, e, f, h, k, n) {
        c = O(c, Array);
        Re(this, a, b, c, d, e, f, h, k, n)
    }, An = N(zn, "flash.filters.ConvolutionFilter", rn);
    vk(An, "matrixX", ze, Be);
    vk(An, "matrixY", Ce, De);
    vk(An, "matrix", Ee, Ae);
    vk(An, "divisor", Fe, Ge);
    vk(An, "bias", He, Ie);
    vk(An, "preserveAlpha", Je, Ke);
    vk(An, "clamp", Le, Me);
    vk(An, "color", Ne, Oe);
    vk(An, "alpha", Pe, Qe);
    zn.prototype.clone = function () {
        return new zn(this.matrixX, this.matrixY, this.matrix, this.divisor, this.bias, this.preserveAlpha, this.clamp, this.color, this.alpha)
    };
    var Bn = function (a, b, c, d, e, f, h, k, n, q, u) {
        a = +y(a, 4);
        b = +y(b, 45);
        c >>>= 0;
        d = +y(d, 1);
        e = +y(e, 4);
        f = +y(f, 4);
        h = +y(h, 1);
        k = y(k, 1) | 0;
        n = !!n;
        q = !!q;
        u = !!u;
        var p;
        Object.defineProperty(this, "alpha", {
            get: function () {
                return p
            }, set: function (a) {
                p = vn(255 * y(a, 0)) / 255
            }
        });
        this.alpha = d;
        P(this, "angle", "Number", b);
        P(this, "blurX", "Number", e);
        P(this, "blurY", "Number", f);
        var t;
        Object.defineProperty(this, "color", {
            get: function () {
                return t
            }, set: function (a) {
                t = a >>> 0 & 16777215
            }
        });
        this.color = c;
        P(this, "distance", "Number", a);
        P(this, "hideObject",
            "Boolean", u);
        P(this, "inner", "Boolean", n);
        P(this, "knockout", "Boolean", q);
        P(this, "quality", "int", k);
        P(this, "strength", "Number", h)
    };
    N(Bn, "flash.filters.DropShadowFilter", rn);
    te(Bn, function () {
        var a = new nh;
        a.Na(this);
        return a
    });
    Bn.prototype.clone = function () {
        return new Bn(this.distance, this.angle, this.color, this.alpha, this.blurX, this.blurY, this.strength, this.quality, this.inner, this.knockout, this.hideObject)
    };
    var Cn = function (a, b, c, d, e, f, h, k) {
        c = +y(c, 6);
        d = +y(d, 6);
        e = +y(e, 2);
        f = y(f, 1) | 0;
        h = !!h;
        k = !!k;
        var n;
        Object.defineProperty(this, "alpha", {
            get: function () {
                return n
            }, set: function (a) {
                n = vn(255 * y(a, 1)) / 255
            }
        });
        this.alpha = b;
        P(this, "blurX", "Number", c);
        P(this, "blurY", "Number", d);
        var q;
        Object.defineProperty(this, "color", {
            get: function () {
                return q
            }, set: function (a) {
                q = y(a, 16711680) >>> 0 & 16777215
            }
        });
        this.color = a;
        P(this, "inner", "Boolean", h);
        P(this, "knockout", "Boolean", k);
        P(this, "quality", "int", f);
        P(this, "strength", "Number", e)
    };
    N(Cn, "flash.filters.GlowFilter", rn);
    te(Cn, function () {
        var a = new oh;
        a.Na(this);
        return a
    });
    Cn.prototype.clone = function () {
        return new Cn(this.color, this.alpha, this.blurX, this.blurY, this.strength, this.quality, this.inner, this.knockout)
    };
    var Dn = function (a, b, c, d, e, f, h, k, n, q, u) {
        a = +y(a, 4);
        b = +y(b, 45);
        f = +y(f, 4);
        h = +y(h, 4);
        k = +y(k, 1);
        n = y(n, 1) | 0;
        q = al(q, "inner");
        u = !!u;
        var p = [], t = [], v = [], w = 0;
        Object.defineProperty(this, "colors", {
            get: function () {
                return p
            }, set: function (a) {
                a = O(a, Array) || [];
                w = a.length;
                for (var b = 0; b < w; b++) p[b] = y(a[b], 16711680) >>> 0 & 16777215;
                for (a = w; t.length < a;) t.push(1);
                t.length = a;
                for (a = w; v.length < a;) v.push(0);
                v.length = a
            }
        });
        this.colors = c;
        Object.defineProperty(this, "alphas", {
            get: function () {
                return t
            }, set: function (a) {
                a = O(a, Array) || [];
                for (var b = 0; b < w; b++) t[b] = vn(255 * y(a[b], 1)) / 255;
                t.length = w
            }
        });
        this.alphas = d;
        Object.defineProperty(this, "ratios", {
            get: function () {
                return v
            }, set: function (a) {
                a = O(a, Array) || [];
                for (var b = 0; b < w; b++) v[b] = vn(a[b]);
                v.length = w
            }
        });
        this.ratios = e;
        P(this, "angle", "Number", b);
        P(this, "blurX", "Number", f);
        P(this, "blurY", "Number", h);
        P(this, "distance", "Number", a);
        P(this, "knockout", "Boolean", u);
        P(this, "quality", "int", n);
        P(this, "strength", "Number", k);
        P(this, "type", "String", q)
    };
    var En = function (a, b, c, d, e, f, h, k, n, q, u) {
        Dn.call(this, a, b, c, d, e, f, h, k, n, q, u)
    };
    N(En, "flash.filters.GradientBevelFilter", rn);
    te(En, function () {
        var a = new kh;
        a.Na(this);
        return a
    });
    En.prototype.clone = function () {
        return new En(this.distance, this.angle, this.colors, this.alphas, this.ratios, this.blurX, this.blurY, this.strength, this.quality, this.type, this.knockout)
    };
    var Fn = function (a, b, c, d, e, f, h, k, n, q, u) {
        Dn.call(this, a, b, c, d, e, f, h, k, n, q, u)
    };
    N(Fn, "flash.filters.GradientGlowFilter", rn);
    te(Fn, function () {
        var a = new lh;
        a.Na(this);
        return a
    });
    Fn.prototype.clone = function () {
        return new Fn(this.distance, this.angle, this.colors, this.alphas, this.ratios, this.blurX, this.blurY, this.strength, this.quality, this.type, this.knockout)
    };
    var Gn = function (a, b, c) {
        Yg(this, a, b, c)
    }, Hn = N(Gn, "flash.filters.BlurFilter", rn);
    vk(Hn, "blurX", Sg, Tg);
    vk(Hn, "blurY", Ug, Vg);
    vk(Hn, "quality", Wg, Xg);
    Gn.prototype.clone = function () {
        return new Gn(this.blurX, this.blurY, this.quality)
    };
    var In = function () {
        this.filters = []
    };
    g = In.prototype;
    g.Dn = function (a) {
        this.filters.push(new wn(a.distance, 180 * a.angle / Math.PI, a.highlight & 16777215, (a.highlight >>> 24) / 255, a.shadow & 16777215, (a.shadow >>> 24) / 255, a.x, a.y, a.strength, a.quality, a.da.type, a.da.knockout))
    };
    g.Fn = function (a) {
        this.filters.push(new Gn(a.x, a.y, a.quality))
    };
    g.Hn = function (a) {
        this.filters.push(new xn(a.matrix))
    };
    g.In = function (a) {
        this.filters.push(new zn(a.matrixX, a.matrixY, a.matrix, a.divisor, a.bias, a.preserveAlpha, a.clamp, a.color & 16777215, (a.color >>> 24) / 255))
    };
    g.Jn = function (a) {
        this.filters.push(new Bn(a.distance, 180 * a.angle / Math.PI, a.color & 16777215, (a.color >>> 24) / 255, a.x, a.y, a.strength, a.quality, a.Kh(), a.da.knockout && a.Kq(), a.da.knockout))
    };
    g.Ln = function (a) {
        this.filters.push(new Cn(a.color & 16777215, (a.color >>> 24) / 255, a.x, a.y, a.strength, a.quality, a.Kh(), a.da.knockout))
    };
    g.Mn = function (a) {
        this.filters.push(new En(a.distance, 180 * a.angle / Math.PI, a.kj(), a.ij(), a.oj(), a.x, a.y, a.strength, a.quality, a.da.type, a.da.knockout))
    };
    g.Nn = function (a) {
        this.filters.push(new Fn(a.distance, 180 * a.angle / Math.PI, a.kj(), a.ij(), a.oj(), a.x, a.y, a.strength, a.quality, a.da.type, a.da.knockout))
    };
    var Jn = function (a, b, c, d, e, f, h, k) {
        for (var n = [1, 1, 1, 1, 0, 0, 0, 0], q = 0; q < arguments.length && 8 > q; ++q) n[q] = +arguments[q];
        oe(this, n)
    }, Kn = N(Jn, "flash.geom.ColorTransform");
    Xh.forEach(function (a, b) {
        Object.defineProperty(Jn.prototype, a, {
            get: function () {
                return x(this)[b]
            }, set: function (a) {
                x(this)[b] = +a
            }
        })
    });
    Object.defineProperty(Jn.prototype, "color", {get: Zh, set: $h});
    Jn.prototype.concat = function (a) {
        a = O(a, Kn);
        tl(a);
        Yh.call(this, a)
    };
    Jn.prototype.toString = function () {
        return Uh(this, Xh)
    };
    var Ln = function (a, b) {
        a = +y(a, 0);
        b = +y(b, 0);
        P(this, "x", "Number", a);
        P(this, "y", "Number", b)
    }, Mn = N(Ln, "flash.geom.Point");
    Object.defineProperty(Ln.prototype, "length", {
        get: function () {
            return Fc(this.x, this.y)
        }
    });
    Ln.prototype.add = function (a) {
        return new Ln(this.x + a.x, this.y + a.y)
    };
    Ln.prototype.clone = function () {
        return new Ln(this.x, this.y)
    };
    Ln.prototype.copyFrom = function (a) {
        this.x = a.x;
        this.y = a.y
    };
    Mn.distance = function (a, b) {
        return Fc(a.x - b.x, a.y - b.y)
    };
    Ln.prototype.equals = function (a) {
        return this.x == a.x && this.y == a.y
    };
    Mn.interpolate = function (a, b, c) {
        return new Ln(a.x * c + b.x * (1 - c), a.y * c + b.y * (1 - c))
    };
    Ln.prototype.normalize = function (a) {
        a /= this.length;
        this.x *= a;
        this.y *= a
    };
    Ln.prototype.offset = function (a, b) {
        this.x += a;
        this.y += b
    };
    Mn.polar = function (a, b) {
        return new Ln(a * Math.cos(b), a * Math.sin(b))
    };
    Ln.prototype.setTo = function (a, b) {
        this.x = a;
        this.y = b
    };
    Ln.prototype.subtract = function (a) {
        return new Ln(this.x - a.x, this.y - a.y)
    };
    Ln.prototype.toString = function () {
        return "(x=" + this.x + ", y=" + this.y + ")"
    };
    var Nn = function (a, b, c, d, e, f, h, k, n) {
        c >>>= 0;
        d >>>= 0;
        e = +y(e, 0);
        f = +y(f, 0);
        h = al(h, "wrap");
        var q;
        Object.defineProperty(this, "alpha", {
            get: function () {
                return q
            }, set: function (a) {
                q = vn(255 * y(a, 0)) / 255
            }
        });
        this.alpha = n;
        var u;
        Object.defineProperty(this, "color", {
            get: function () {
                return u
            }, set: function (a) {
                u = a >>> 0 & 16777215
            }
        });
        this.color = k;
        P(this, "componentX", "uint", c);
        P(this, "componentY", "uint", d);
        P(this, "mapBitmap", "flash.display.BitmapData", a);
        var p;
        Object.defineProperty(this, "mapPoint", {
            get: function () {
                return p
            }, set: function (a) {
                a =
                    O(a, Mn);
                p = null != a ? new Ln(a.x, a.y) : new Ln(0, 0)
            }
        });
        this.mapPoint = b;
        P(this, "mode", "String", h);
        P(this, "scaleX", "Number", e);
        P(this, "scaleY", "Number", f)
    };
    N(Nn, "flash.filters.DisplacementMapFilter", rn);
    Nn.prototype.clone = function () {
        return new Nn(this.mapBitmap, this.mapPoint, this.componentX, this.componentY, this.scaleX, this.scaleY, this.mode, this.color, this.alpha)
    };
    var On = function () {
    };
    On.m = N(On, "flash.filters.DisplacementMapFilterMode");
    Xk(On.m, ["clamp", "color", "ignore", "wrap"]);
    var Pn = function (a, b, c, d) {
        a = +y(a, 0);
        b = +y(b, 0);
        c = +y(c, 0);
        d = +y(d, 0);
        P(this, "x", "Number", a);
        P(this, "y", "Number", b);
        P(this, "width", "Number", c);
        P(this, "height", "Number", d)
    }, Qn = N(Pn, "flash.geom.Rectangle");
    Object.defineProperty(Pn.prototype, "top", {
        get: function () {
            return this.y
        }, set: function (a) {
            this.y = +a
        }
    });
    Object.defineProperty(Pn.prototype, "left", {
        get: function () {
            return this.x
        }, set: function (a) {
            this.x = +a
        }
    });
    Object.defineProperty(Pn.prototype, "bottom", {
        get: function () {
            return this.y + this.height
        }, set: function (a) {
            this.height = +a - this.y
        }
    });
    Object.defineProperty(Pn.prototype, "right", {
        get: function () {
            return this.x + this.width
        }, set: function (a) {
            this.width = +a - this.x
        }
    });
    Object.defineProperty(Pn.prototype, "topLeft", {
        get: function () {
            return new Ln(this.left, this.top)
        }, set: function (a) {
            a = O(a, Mn);
            this.left = a.x;
            this.top = a.y
        }
    });
    Object.defineProperty(Pn.prototype, "bottomRight", {
        get: function () {
            return new Ln(this.right, this.bottom)
        }, set: function (a) {
            a = O(a, Mn);
            this.right = a.x;
            this.bottom = a.y
        }
    });
    Object.defineProperty(Pn.prototype, "size", {
        get: function () {
            return new Ln(this.width, this.height)
        }, set: function (a) {
            a = O(a, Mn);
            this.width = a.x;
            this.height = a.y
        }
    });
    Pn.prototype.clone = function () {
        return new Pn(this.x, this.y, this.width, this.height)
    };
    Pn.prototype.contains = function (a, b) {
        return this.x <= a && this.y <= b && a < this.right && b < this.bottom
    };
    Pn.prototype.containsPoint = function (a) {
        return this.contains(a.x, a.y)
    };
    Pn.prototype.containsRect = function (a) {
        var b = this.right, c = this.bottom, d = a.right, e = a.bottom;
        return this.x <= a.x && this.y <= a.y && a.x < b && a.y < c && this.x < d && this.y < e && d <= b && e <= c
    };
    Pn.prototype.copyFrom = function (a) {
        this.x = a.x;
        this.y = a.y;
        this.width = a.width;
        this.height = a.height
    };
    Pn.prototype.equals = function (a) {
        return this.x == a.x && this.y == a.y && this.width == a.width && this.height == a.height
    };
    Pn.prototype.inflate = function (a, b) {
        this.x -= a;
        this.y -= b;
        this.width += 2 * a;
        this.height += 2 * b
    };
    Pn.prototype.inflatePoint = function (a) {
        this.inflate(a.x, a.y)
    };
    Pn.prototype.intersection = function (a) {
        if (this.intersects(a)) {
            var b = Math.max(this.x, a.x), c = Math.max(this.y, a.y);
            return new Pn(b, c, Math.min(this.right, a.right) - b, Math.min(this.bottom, a.bottom) - c)
        }
        return new Pn
    };
    Pn.prototype.intersects = function (a) {
        return 0 < a.width && 0 < a.height && 0 < this.width && 0 < this.height && a.x < this.right && a.y < this.bottom && a.right > this.x && a.bottom > this.y
    };
    Pn.prototype.isEmpty = function () {
        return 0 >= this.width || 0 >= this.height
    };
    Pn.prototype.offset = function (a, b) {
        this.x += a;
        this.y += b
    };
    Pn.prototype.offsetPoint = function (a) {
        this.offset(a.x, a.y)
    };
    Pn.prototype.setEmpty = function () {
        this.height = this.width = this.y = this.x = 0
    };
    Pn.prototype.setTo = function (a, b, c, d) {
        this.x = a;
        this.y = b;
        this.width = c;
        this.height = d
    };
    Pn.prototype.union = function (a) {
        if (this.isEmpty()) return a.clone();
        if (a.isEmpty()) return this.clone();
        var b = Math.min(this.x, a.x), c = Math.min(this.y, a.y);
        return new Pn(b, c, Math.max(this.right, a.right) - b, Math.max(this.bottom, a.bottom) - c)
    };
    Pn.prototype.toString = function () {
        return "(x=" + this.x + ", y=" + this.y + ", w=" + this.width + ", h=" + this.height + ")"
    };
    var Rn = function (a, b) {
        return new Pn(a.j * b, a.l * b, a.width() * b, a.height() * b)
    };
    var Sn = function (a, b, c, d) {
        this.w = l(d) ? Number(d) : 0;
        this.x = l(a) ? Number(a) : 0;
        this.y = l(b) ? Number(b) : 0;
        this.z = l(c) ? Number(c) : 0
    }, Tn = N(Sn, "flash.geom.Vector3D");
    Object.defineProperty(Sn.prototype, "lengthSquared", {
        get: function () {
            return this.x * this.x + this.y * this.y + this.z * this.z
        }
    });
    Object.defineProperty(Sn.prototype, "length", {
        get: function () {
            return Math.sqrt(this.lengthSquared)
        }
    });
    Object.defineProperty(Tn, "X_AXIS", {value: new Sn(1, 0, 0, 0)});
    Object.defineProperty(Tn, "Y_AXIS", {value: new Sn(0, 1, 0, 0)});
    Object.defineProperty(Tn, "Z_AXIS", {value: new Sn(0, 0, 1, 0)});
    Sn.prototype.add = function (a) {
        return new Sn(this.x + a.x, this.y + a.y, this.z + a.z)
    };
    Tn.angleBetween = function () {
        return 0
    };
    Sn.prototype.clone = function () {
        return new Sn(this.x, this.y, this.z, this.w)
    };
    Sn.prototype.copyFrom = function (a) {
        this.x = a.x;
        this.y = a.y;
        this.z = a.z;
        this.w = a.w
    };
    Sn.prototype.crossProduct = function () {
        return new Sn
    };
    Sn.prototype.decrementBy = function () {
    };
    Tn.distance = function (a, b) {
        return a.subtract(b).length
    };
    Sn.prototype.dotProduct = function () {
        return 0
    };
    Sn.prototype.equals = function (a, b) {
        return this.x == a.x && this.y == a.y && this.z == a.z && (!b || this.w == a.w)
    };
    Sn.prototype.incrementBy = function () {
    };
    Sn.prototype.nearEquals = function () {
        return !1
    };
    Sn.prototype.negate = function () {
    };
    Sn.prototype.normalize = function () {
        return 0
    };
    Sn.prototype.project = function () {
    };
    Sn.prototype.scaleBy = function () {
    };
    Sn.prototype.setTo = function (a, b, c) {
        this.x = Number(a);
        this.y = Number(b);
        this.z = Number(c)
    };
    Sn.prototype.subtract = function (a) {
        return new Sn(this.x - a.x, this.y - a.y, this.z - a.z)
    };
    Sn.prototype.toString = function () {
        return "Vector3D(" + this.x + ", " + this.y + ", " + this.z + ")"
    };
    var Un = function (a, b, c, d, e, f) {
        for (var h = [1, 0, 0, 1, 0, 0], k = 0; k < arguments.length && 6 > k; ++k) h[k] = +arguments[k];
        oe(this, h)
    }, Vn = N(Un, "flash.geom.Matrix");
    ai.forEach(function (a, b) {
        Object.defineProperty(Un.prototype, a, {
            get: function () {
                return x(this)[b]
            }, set: function (a) {
                x(this)[b] = +a
            }
        })
    });
    Un.prototype.clone = function () {
        var a = x(this);
        return new Un(a[0], a[1], a[2], a[3], a[4], a[5])
    };
    Un.prototype.concat = function (a) {
        a = O(a, Vn);
        di.call(this, a)
    };
    Un.prototype.copyColumnFrom = function (a, b) {
        a >>>= 0;
        b = O(b, Tn);
        if (3 > a) {
            tl(b);
            var c = x(this);
            c[2 * a] = b.x;
            c[2 * a + 1] = b.y
        }
    };
    Un.prototype.copyColumnTo = function (a, b) {
        a >>>= 0;
        b = O(b, Tn);
        if (3 > a) {
            tl(b);
            var c = x(this);
            b.x = c[2 * a];
            b.y = c[2 * a + 1];
            b.z = 2 == a ? 1 : 0
        }
    };
    Un.prototype.copyFrom = function (a) {
        a = O(a, Vn);
        tl(a);
        ei.call(this, a)
    };
    Un.prototype.copyRowFrom = function (a, b) {
        a >>>= 0;
        b = O(b, Tn);
        if (2 > a) {
            tl(b);
            var c = x(this);
            c[a] = b.x;
            c[a + 2] = b.y;
            c[a + 4] = b.z
        }
    };
    Un.prototype.copyRowTo = function (a, b) {
        a >>>= 0;
        b = O(b, Tn);
        if (3 > a) {
            tl(b);
            var c = x(this);
            b.x = 2 == a ? 0 : c[a];
            b.y = 2 == a ? 0 : c[a + 2];
            b.z = 2 == a ? 1 : c[a + 4]
        }
    };
    Un.prototype.createBox = function (a, b, c, d, e) {
        fi.call(this, +a, +b, +y(c, 0), +y(d, 0), +y(e, 0))
    };
    Un.prototype.createGradientBox = function (a, b, c, d, e) {
        a = +a;
        b = +b;
        fi.call(this, a * Lc, b * Lc, +y(c, 0), a / 2 + +y(d, 0), b / 2 + +y(e, 0))
    };
    Un.prototype.deltaTransformPoint = function (a) {
        a = O(a, Mn);
        return gi.call(this, a.x, a.y, Ln)
    };
    Un.prototype.identity = function () {
        hi.call(this)
    };
    Un.prototype.invert = function () {
        ii.call(this)
    };
    Un.prototype.rotate = function (a) {
        ji.call(this, +a)
    };
    Un.prototype.scale = function (a, b) {
        ki.call(this, +a, +b)
    };
    Un.prototype.setTo = function (a, b, c, d, e, f) {
        var h = x(this);
        h[0] = +a;
        h[1] = +b;
        h[2] = +c;
        h[3] = +d;
        h[4] = +e;
        h[5] = +f
    };
    Un.prototype.transformPoint = function (a) {
        a = O(a, Mn);
        return li.call(this, a.x, a.y, Ln)
    };
    Un.prototype.translate = function (a, b) {
        var c = x(this);
        c[4] += +a;
        c[5] += +b
    };
    Un.prototype.toString = function () {
        return Uh(this, ai)
    };
    var Xn = function (a) {
        a = O(a, Wn);
        Object.defineProperty(this, "__swiffy_d", {value: a.__swiffy_d})
    }, Yn = N(Xn, "flash.geom.Transform");
    Object.defineProperty(Xn.prototype, "colorTransform", {
        get: function () {
            return Wh(Jn, this.__swiffy_d.jb)
        }, set: function (a) {
            a = O(a, Kn);
            var b = this.__swiffy_d;
            b.Fb(Vh(a));
            b.Ea()
        }
    });
    Object.defineProperty(Xn.prototype, "concatenatedColorTransform", {
        get: function () {
            var a = this.__swiffy_d.fc();
            return Wh(Jn, a)
        }
    });
    Object.defineProperty(Xn.prototype, "concatenatedMatrix", {
        get: function () {
            var a = this.__swiffy_d.$();
            return ci(Un, a)
        }
    });
    Object.defineProperty(Xn.prototype, "matrix", {
        get: function () {
            return ci(Un, this.__swiffy_d.ua())
        }, set: function (a) {
            a = O(a, Vn);
            var b = this.__swiffy_d;
            b.setTransform(bi(a));
            b.Ea()
        }
    });
    Object.defineProperty(Xn.prototype, "pixelBounds", {
        get: function () {
            return Rn(this.__swiffy_d.iq(), 1)
        }
    });
    var Zn = function () {
        if (!this.__swiffy_d) throw H(2012, Oj(this).localName + "$");
        S.call(this)
    }, Wn = N(Zn, "flash.display.DisplayObject", S, [hm]);
    Hm(Zn, "enterFrame", "exitFrame", "render");
    I(Wn, "localToGlobal", function (a) {
        a = O(a, Mn);
        a = new Ec(20 * a.x, 20 * a.y);
        a.eb(this.__swiffy_d.$());
        return new Ln(a.x / 20, a.y / 20)
    });
    I(Wn, "globalToLocal", function (a) {
        a = O(a, Mn);
        a = new Ec(20 * a.x, 20 * a.y);
        a.ed(this.__swiffy_d.$());
        return new Ln(a.x / 20, a.y / 20)
    });
    var $n = function (a, b, c) {
        b = O(b, Wn);
        a = a.__swiffy_d;
        c = c(a);
        b && (a = a.$(), b = b.__swiffy_d.$(), c = c.eb(a.multiply(b.Gq())));
        return Rn(c, .05)
    };
    I(Wn, "getBounds", function (a) {
        return $n(this, a, ao)
    });
    I(Wn, "getRect", function (a) {
        return $n(this, a, bo)
    });
    Object.defineProperty(Zn.prototype, "x", {
        get: function () {
            return this.__swiffy_d.ua().Y / 20
        }, set: function (a) {
            var b = this.__swiffy_d, c = b.ua();
            b.setTransform(c.Zj((20 * a | 0) - c.Y, 0));
            b.Ea()
        }
    });
    Object.defineProperty(Zn.prototype, "y", {
        get: function () {
            return this.__swiffy_d.ua().Z / 20
        }, set: function (a) {
            var b = this.__swiffy_d, c = b.ua();
            b.setTransform(c.Zj(0, (20 * a | 0) - c.Z));
            b.Ea()
        }
    });
    Object.defineProperty(Zn.prototype, "alpha", {
        get: function () {
            return this.__swiffy_d.jb.Ra / 256
        }, set: function (a) {
            var b = this.__swiffy_d;
            b.Fb(b.jb.ht(256 * a | 0));
            b.Ea()
        }
    });
    Object.defineProperty(Zn.prototype, "visible", {
        get: function () {
            return this.__swiffy_d.Dc
        }, set: function (a) {
            this.__swiffy_d.lk(Boolean(a))
        }
    });
    Object.defineProperty(Zn.prototype, "rotation", {
        get: function () {
            return -180 * this.__swiffy_d.dc().angle / Math.PI
        }, set: function (a) {
            var b = this.__swiffy_d;
            b.dc().angle = -a * Math.PI / 180;
            b.mf();
            b.Ea()
        }
    });
    Object.defineProperty(Zn.prototype, "width", {
        get: function () {
            return this.__swiffy_d.I()
        }, set: function (a) {
            var b = this.__swiffy_d;
            b.$h(Number(a));
            b.Ea()
        }
    });
    Object.defineProperty(Zn.prototype, "height", {
        get: function () {
            return this.__swiffy_d.U()
        }, set: function (a) {
            var b = this.__swiffy_d;
            b.Yh(Number(a));
            b.Ea()
        }
    });
    Object.defineProperty(Zn.prototype, "scaleX", {
        get: function () {
            return this.__swiffy_d.dc().od
        }, set: function (a) {
            var b = this.__swiffy_d;
            b.dc().od = a;
            b.mf();
            b.Ea()
        }
    });
    Object.defineProperty(Zn.prototype, "scaleY", {
        get: function () {
            return this.__swiffy_d.dc().af
        }, set: function (a) {
            var b = this.__swiffy_d;
            b.dc().af = a;
            b.mf();
            b.Ea()
        }
    });
    Object.defineProperty(Zn.prototype, "mouseX", {
        get: function () {
            var a = this.__swiffy_d;
            return a.i.va.un(a.$()) / 20
        }
    });
    Object.defineProperty(Zn.prototype, "mouseY", {
        get: function () {
            var a = this.__swiffy_d;
            return a.i.va.vn(a.$()) / 20
        }
    });
    Object.defineProperty(Zn.prototype, "root", {
        get: function () {
            for (var a = this.__swiffy_d; a && !a.Mj && a != a.i.W;) if (a.getParent()) if (a == a.i.Ga) break; else a = a.getParent(); else a = null;
            return a ? a.s : null
        }
    });
    Object.defineProperty(Zn.prototype, "parent", {
        get: function () {
            var a = this.__swiffy_d.getParent();
            return a ? a.s : null
        }
    });
    Object.defineProperty(Zn.prototype, "name", {
        get: function () {
            return this.__swiffy_d.getName()
        }, set: function (a) {
            this.__swiffy_d.Gb(a)
        }
    });
    Object.defineProperty(Zn.prototype, "loaderInfo", {
        get: function () {
            return this.__swiffy_d.El().hs
        }
    });
    Object.defineProperty(Zn.prototype, "stage", {
        get: function () {
            var a = this.__swiffy_d;
            return this.root ? a.i.W.s : null
        }
    });
    Object.defineProperty(Zn.prototype, "transform", {
        get: function () {
            return new Xn(this)
        }, set: function (a) {
            a = O(a, Yn);
            a = a.__swiffy_d;
            var b = this.__swiffy_d;
            b.setTransform(a.ua());
            b.Fb(a.jb);
            b.Ea()
        }
    });
    Object.defineProperty(Zn.prototype, "filters", {
        get: function () {
            var a = new In;
            this.__swiffy_d.gt(a);
            return a.filters
        }, set: function (a) {
            a = O(a, Array);
            a = ue(a, !0);
            if (!a) throw H(2005, 0, "Filter");
            this.__swiffy_d.ug(a)
        }
    });
    Object.defineProperty(Zn.prototype, "mask", {
        get: function () {
            var a = this.__swiffy_d.Bf;
            return a ? a.s : null
        }, set: function (a) {
            a = O(a, Wn);
            this.__swiffy_d.Ve(a.__swiffy_d)
        }
    });
    Object.defineProperty(Zn.prototype, "blendMode", {
        get: function () {
            return wc[this.__swiffy_d.rd]
        }, set: function (a) {
            a = String(a);
            var b = this.__swiffy_d;
            a = wc.indexOf(a);
            if (0 > a) throw H(2008, "blendMode");
            b.tg(a)
        }
    });
    Object.defineProperty(Zn.prototype, "cacheAsBitmap", {
        get: function () {
            return this.__swiffy_d.Yl()
        }, set: function (a) {
            this.__swiffy_d.Wm(!!a)
        }
    });
    var co = N(function () {
    }, "flash.media.AudioDecoder");
    Object.defineProperties(co, {
        DOLBY_DIGITAL: {value: "DolbyDigital"},
        DOLBY_DIGITAL_PLUS: {value: "DolbyDigitalPlus"},
        DTS: {value: "DTS"},
        DTS_EXPRESS: {value: "DTSExpress"},
        DTS_HD_HIGH_RESOLUTION_AUDIO: {value: "DTSHDHighResolutionAudio"},
        DTS_HD_MASTER_AUDIO: {value: "DTSHDMasterAudio"}
    });
    var eo = N(function (a, b) {
        a = +y(a, 1E3);
        b = !!b;
        P(this, "bufferTime", "Number", a);
        P(this, "checkPolicyFile", "Boolean", b)
    }, "flash.media.SoundLoaderContext");
    var fo = function (a, b) {
        a = +y(a, 1);
        b = +y(b, 0);
        var c = new Se;
        c.volume = a;
        c.yc = Math.sqrt(1 - b);
        c.Pc = Math.sqrt(1 + b);
        oe(this, c)
    }, go = N(fo, "flash.media.SoundTransform");
    J(go, "leftToLeft", function () {
        return x(this).yc
    });
    K(go, "leftToLeft", function (a) {
        x(this).yc = +a
    });
    J(go, "leftToRight", function () {
        return x(this).Rd
    });
    K(go, "leftToRight", function (a) {
        x(this).Rd = +a
    });
    J(go, "rightToLeft", function () {
        return x(this).ee
    });
    K(go, "rightToLeft", function (a) {
        x(this).ee = +a
    });
    J(go, "rightToRight", function () {
        return x(this).Pc
    });
    K(go, "rightToRight", function (a) {
        x(this).Pc = +a
    });
    J(go, "pan", function () {
        var a = x(this).yc;
        return 1 - a * a
    });
    K(go, "pan", function (a) {
        a = +a;
        var b = x(this);
        b.yc = Math.sqrt(1 - a);
        b.Rd = 0;
        b.ee = 0;
        b.Pc = Math.sqrt(1 + a)
    });
    J(go, "volume", function () {
        return x(this).volume
    });
    K(go, "volume", function (a) {
        x(this).volume = +a
    });
    var ho = function () {
        oe(this, {ib: new Se, audio: null})
    }, io = N(ho, "flash.media.SoundChannel");
    J(io, "leftPeak", function () {
        return 0
    });
    J(io, "position", function () {
        return 0
    });
    J(io, "rightPeak", function () {
        return 0
    });
    J(io, "soundTransform", function () {
        var a = new fo;
        x(a).wd(x(this).ib);
        return a
    });
    K(io, "soundTransform", function (a) {
        ul(a, "soundChannel");
        a = O(a, go);
        var b = x(this);
        b.ib.wd(x(a));
        b.audio && b.audio.ci()
    });
    ho.prototype.stop = function () {
        var a = x(this).audio;
        a && a.remove()
    };
    var ko = function (a, b) {
        O(a, jo);
        O(b, eo);
        P(this, "bytesLoaded", "uint", 0);
        P(this, "bytesTotal", "Number", 0);
        P(this, "isBuffering", "Boolean", !1);
        P(this, "isURLInaccessible", "Boolean", !0);
        P(this, "length", "Number", 0);
        P(this, "url", "String", "")
    };
    N(ko, "flash.media.Sound");
    ko.prototype.play = function (a, b, c) {
        c = O(c, go);
        a |= 0;
        b |= 0;
        var d = this.__swiffy_d, d = d && d.definition;
        if (!(d instanceof ag)) return null;
        var e = new ho;
        c && (e.soundTransform = c);
        c = x(e);
        c.audio = r.i.ec().Uk(d, c.ib, null, a, b);
        return e
    };
    ko.prototype.close = function () {
        Q(this, "close")
    };
    ko.prototype.connect = function () {
        Q(this, "connect")
    };
    var lo = function () {
        S.call(this);
        P(this, "client", "Object", null);
        M(this, "domain", "");
        P(this, "isPerUser", "Boolean", !1)
    }, mo = N(lo, "flash.net.LocalConnection", S);
    Object.defineProperty(mo, "isSupported", {value: !1});
    lo.prototype.allowDomain = function () {
        Q(this, "allowDomain")
    };
    lo.prototype.allowInsecureDomain = function () {
        Q(this, "allowInsecureDomain")
    };
    lo.prototype.close = function () {
        Q(this, "close")
    };
    lo.prototype.connect = function () {
        Q(this, "connect")
    };
    lo.prototype.send = function () {
        Q(this, "send")
    };
    var no = function () {
        S.call(this);
        P(this, "client", "Object", null);
        M(this, "connectedProxyType", "");
        M(this, "farID", "");
        M(this, "farNonce", "");
        P(this, "httpIdleTimeout", "Number", 0);
        P(this, "maxPeerConnections", "uint", 0);
        M(this, "nearID", "");
        M(this, "nearNonce", "");
        P(this, "objectEncoding", "uint", 0);
        M(this, "protocol", "");
        P(this, "proxyType", "String", "");
        M(this, "unconnectedPeerStreams", null);
        M(this, "uri", "");
        M(this, "usingTLS", !1);
        x(this).gu = !1
    }, oo = N(no, "flash.net.NetConnection", S);
    J(oo, "connected", function () {
        return x(this).gu
    });
    Object.defineProperty(oo, "defaultObjectEncoding", {value: 0});
    no.prototype.addHeader = function () {
        Q(this, "addHeader")
    };
    no.prototype.call = function (a, b) {
        O(b, po);
        Q(this, "call")
    };
    no.prototype.close = function () {
        Q(this, "close")
    };
    no.prototype.connect = function () {
        Q(this, "connect")
    };
    var qo = N(function () {
        S.call(this);
        P(this, "len", "Number", 0);
        P(this, "offset", "Number", 0);
        P(this, "oldStreamName", "String", "");
        P(this, "start", "Number", 0);
        P(this, "streamName", "String", "");
        P(this, "transition", "String", "")
    }, "flash.net.NetStreamPlayOptions", S);
    var ro = Qk(2012);
    ro.m = N(ro, "flash.net.ObjectEncoding");
    Object.defineProperty(ro.m, "dynamicPropertyWriter", {value: null});
    Object.defineProperty(ro.m, "AMF0", {value: 0});
    Object.defineProperty(ro.m, "AMF3", {value: 3});
    Object.defineProperty(ro.m, "DEFAULT", {value: 3});
    var po = N(function (a, b) {
        O(a, Function);
        O(b, Function)
    }, "flash.net.Responder");
    var so = function (a) {
        S.call(this);
        O(a, oo);
        P(this, "audioReliable", "Boolean", !1);
        P(this, "audioSampleAccess", "Boolean", !1);
        M(this, "backBufferLength", 0);
        P(this, "backBufferTime", "Number", 0);
        P(this, "bufferTimeMax", "Number", 0);
        P(this, "checkPolicyFile", "Boolean", !1);
        P(this, "dataReliable", "Boolean", !1);
        M(this, "farID", "");
        M(this, "farNonce", "");
        P(this, "inBufferSeek", "Boolean", !1);
        M(this, "info", null);
        M(this, "liveDelay", 0);
        P(this, "maxPauseBufferTime", "Number", 0);
        P(this, "multicastAvailabilitySendToAll", "Boolean",
            !1);
        P(this, "multicastAvailabilityUpdatePeriod", "Number", 0);
        P(this, "multicastFetchPeriod", "Number", 0);
        M(this, "multicastInfo", null);
        P(this, "multicastPushNeighborLimit", "Number", 0);
        P(this, "multicastRelayMarginDuration", "Number", 0);
        P(this, "multicastWindowDuration", "Number", 0);
        M(this, "nearNonce", "");
        M(this, "objectEncoding", 0);
        M(this, "peerStreams", null);
        P(this, "soundTransform", "flash.media.SoundTransform", null);
        P(this, "useHardwareDecoder", "Boolean", !1);
        P(this, "useJitterBuffer", "Boolean", !1);
        P(this, "videoReliable",
            "Boolean", !1);
        P(this, "videoSampleAccess", "Boolean", !1);
        P(this, "videoStreamSettings", "flash.media.VideoStreamSettings", null);
        a = x(this);
        a.Hk = 0;
        a.Sg = .1;
        a.Yc = 0;
        a.Zc = 0;
        a.cl = 0;
        a.time = 0;
        a.client = null
    }, to = N(so, "flash.net.NetStream", S);
    J(to, "bufferTime", function () {
        return x(this).Sg
    });
    K(to, "bufferTime", function (a) {
        x(this).Sg = +a
    });
    J(to, "bufferLength", function () {
        return x(this).Hk
    });
    J(to, "bytesLoaded", function () {
        return x(this).Yc
    });
    J(to, "bytesTotal", function () {
        return x(this).Zc
    });
    J(to, "currentFPS", function () {
        return x(this).cl
    });
    J(to, "time", function () {
        return x(this).time
    });
    J(to, "client", function () {
        return x(this).client
    });
    K(to, "client", function (a) {
        x(this).client = a
    });
    Object.defineProperty(to, "CONNECT_TO_FMS", {value: "connectToFMS"});
    Object.defineProperty(to, "DIRECT_CONNECTIONS", {value: "directConnections"});
    so.prototype.appendBytes = function (a) {
        O(a, uo);
        Q(this, "appendBytes")
    };
    so.prototype.appendBytesAction = function () {
        Q(this, "appendBytesAction")
    };
    so.prototype.attach = function (a) {
        O(a, oo);
        Q(this, "attach")
    };
    so.prototype.attachAudio = function () {
        Q(this, "attachAudio")
    };
    so.prototype.attachCamera = function () {
        Q(this, "attachCamera")
    };
    so.prototype.close = function () {
        Q(this, "close")
    };
    so.prototype.dispose = function () {
        Q(this, "dispose")
    };
    so.prototype.onPeerConnect = function (a) {
        O(a, to);
        Q(this, "onPeerConnect");
        return !1
    };
    so.prototype.pause = function () {
        Q(this, "pause")
    };
    so.prototype.play = function () {
        Q(this, "play")
    };
    so.prototype.play2 = function (a) {
        O(a, qo);
        Q(this, "play2")
    };
    so.prototype.preloadEmbeddedData = function (a) {
        O(a, qo);
        Q(this, "preloadEmbeddedData")
    };
    so.prototype.publish = function () {
        Q(this, "publish")
    };
    so.prototype.receiveAudio = function () {
        Q(this, "receiveAudio")
    };
    so.prototype.receiveVideo = function () {
        Q(this, "receiveVideo")
    };
    so.prototype.receiveVideoFPS = function () {
        Q(this, "receiveVideoFPS")
    };
    to.resetDRMVouchers = function () {
        Q(this, "resetDRMVouchers")
    };
    so.prototype.resume = function () {
        Q(this, "resume")
    };
    so.prototype.seek = function () {
        Q(this, "seek");
        Jm(this, new Zm("netStatus", !1, !1, {code: "NetStream.SeekStart.Notify", level: "status"}))
    };
    so.prototype.send = function () {
        Q(this, "send")
    };
    so.prototype.step = function () {
        Q(this, "step")
    };
    so.prototype.togglePause = function () {
        Q(this, "togglePause")
    };
    var T = Qk(2012);
    T.Ge = function (a) {
        return x(a)
    };
    T.$o = function () {
        var a = Lk(T.m);
        S.call(a);
        var b = T.Ge(a);
        b.client = a;
        b.ir = T.dl;
        b.data = {};
        return a
    };
    T.Yq = {};
    T.dl = ro.m.AMF3;
    T.m = N(T, "flash.net.SharedObject", S);
    J(T.m, "client", function () {
        return T.Ge(this).client
    });
    K(T.m, "client", function (a) {
        if (null == a) throw H(2004);
        T.Ge(this).client = a
    });
    I(T.m, "clear", function () {
        Q(this, "clear");
        T.Ge(this).data = {}
    });
    I(T.m, "close", function () {
        Q(this, "close")
    });
    I(T.m, "connect", function (a) {
        O(a, oo);
        Q(this, "connect")
    });
    J(T.m, "data", function () {
        return T.Ge(this).data
    });
    Object.defineProperty(T.m, "defaultObjectEncoding", {
        get: function () {
            return T.dl
        }, set: function (a) {
            T.dl = a >>> 0
        }
    });
    I(T.m, "flush", function () {
        Q(this, "flush");
        return vo.m.FLUSHED
    });
    K(T.m, "fps", function () {
        Q(this, "fps")
    });
    T.m.getLocal = function (a) {
        ul(a, "name");
        a = String(a);
        Q(this, "getLocal");
        var b = T.Yq[a];
        b || (T.Yq[a] = b = T.$o());
        return b
    };
    T.m.getRemote = function (a) {
        ul(a, "name");
        Q(this, "getRemote");
        return T.$o()
    };
    J(T.m, "objectEncoding", function () {
        return T.Ge(this).ir
    });
    K(T.m, "objectEncoding", function (a) {
        a >>>= 0;
        Q(this, "objectEncoding");
        if (a != ro.m.AMF0 && a != ro.m.AMF3) throw H(2008, "objectEncoding");
        T.Ge(this).ir = a
    });
    I(T.m, "send", function () {
        Q(this, "send")
    });
    I(T.m, "setDirty", function (a) {
        ul(a, "propertyName");
        Q(this, "setDirty")
    });
    I(T.m, "setProperty", function () {
        Q(this, "setProperty")
    });
    J(T.m, "size", function () {
        Q(this, "size");
        return 0
    });
    var vo = Qk(2012);
    vo.m = N(vo, "flash.net.SharedObjectFlushStatus");
    Object.defineProperty(vo.m, "FLUSHED", {value: "flushed"});
    Object.defineProperty(vo.m, "PENDING", {value: "pending"});
    var wo = function () {
        S.call(this);
        M(this, "bytesAvailable", 0);
        M(this, "bytesPending", 0);
        M(this, "connected", !1);
        P(this, "endian", "String", "bigEndian");
        P(this, "objectEncoding", "uint", 0);
        P(this, "timeout", "uint", 0)
    };
    N(wo, "flash.net.Socket", S);
    wo.prototype.close = function () {
        Q(this, "close")
    };
    wo.prototype.connect = function () {
        Q(this, "connect")
    };
    wo.prototype.flush = function () {
        Q(this, "flush")
    };
    wo.prototype.readBoolean = function () {
        Q(this, "readBoolean");
        return !1
    };
    wo.prototype.readByte = function () {
        Q(this, "readByte");
        return 0
    };
    wo.prototype.readBytes = function (a) {
        O(a, uo);
        Q(this, "readBytes")
    };
    wo.prototype.readDouble = function () {
        Q(this, "readDouble");
        return 0
    };
    wo.prototype.readFloat = function () {
        Q(this, "readFloat");
        return 0
    };
    wo.prototype.readInt = function () {
        Q(this, "readInt");
        return 0
    };
    wo.prototype.readMultiByte = function () {
        Q(this, "readMultiByte");
        return ""
    };
    wo.prototype.readObject = function () {
        Q(this, "readObject");
        return null
    };
    wo.prototype.readShort = function () {
        Q(this, "readShort");
        return 0
    };
    wo.prototype.readUnsignedByte = function () {
        Q(this, "readUnsignedByte");
        return 0
    };
    wo.prototype.readUnsignedInt = function () {
        Q(this, "readUnsignedInt");
        return 0
    };
    wo.prototype.readUnsignedShort = function () {
        Q(this, "readUnsignedShort");
        return 0
    };
    wo.prototype.readUTF = function () {
        Q(this, "readUTF");
        return ""
    };
    wo.prototype.readUTFBytes = function () {
        Q(this, "readUTFBytes");
        return ""
    };
    wo.prototype.writeBoolean = function () {
        Q(this, "writeBoolean")
    };
    wo.prototype.writeByte = function () {
        Q(this, "writeByte")
    };
    wo.prototype.writeBytes = function (a) {
        O(a, uo);
        Q(this, "writeBytes")
    };
    wo.prototype.writeDouble = function () {
        Q(this, "writeDouble")
    };
    wo.prototype.writeFloat = function () {
        Q(this, "writeFloat")
    };
    wo.prototype.writeInt = function () {
        Q(this, "writeInt")
    };
    wo.prototype.writeMultiByte = function () {
        Q(this, "writeMultiByte")
    };
    wo.prototype.writeObject = function () {
        Q(this, "writeObject")
    };
    wo.prototype.writeShort = function () {
        Q(this, "writeShort")
    };
    wo.prototype.writeUnsignedInt = function () {
        Q(this, "writeUnsignedInt")
    };
    wo.prototype.writeUTF = function () {
        Q(this, "writeUTF")
    };
    wo.prototype.writeUTFBytes = function () {
        Q(this, "writeUTFBytes")
    };
    var yo = function (a) {
        S.call(this);
        a = O(a, jo);
        P(this, "bytesLoaded", "uint", 0);
        P(this, "bytesTotal", "uint", 0);
        this.data = void 0;
        P(this, "dataFormat", "String", xo.TEXT);
        a && this.load(a)
    };
    N(yo, "flash.net.URLLoader", S);
    yo.prototype.close = function () {
        Q(this, "close")
    };
    yo.prototype.load = function (a) {
        a = O(a, jo);
        Q(this, "load");
        Jm(this, new tm("open"));
        var b = this;
        zo(a.url, null, a.method, a.data ? a.data.toString() : null, {
            Db: function () {
            }, hb: function () {
            }, fb: function () {
            }, sb: function (a) {
                b.bytesLoaded = 1024;
                b.bytesTotal = 1024;
                Jm(b, new an("progress", !1, !1, 1024, 1024));
                Jm(b, new Cm("httpStatus", !1, !1, 400));
                b.data = a;
                Jm(b, new tm("complete"))
            }
        }, Ao(a))
    };
    var xo = N(function () {
    }, "flash.net.URLLoaderDataFormat");
    M(xo, "BINARY", "binary");
    M(xo, "TEXT", "text");
    M(xo, "VARIABLES", "variables");
    var Bo = N(function (a, b) {
        oe(this, {name: al(a, ""), value: al(b, "")})
    }, "flash.net.URLRequestHeader");
    J(Bo, "name", function () {
        return x(this).name
    });
    K(Bo, "name", function (a) {
        x(this).name = $k(a)
    });
    J(Bo, "value", function () {
        return x(this).value
    });
    K(Bo, "value", function (a) {
        x(this).value = $k(a)
    });
    var Ao = function (a) {
        return a.requestHeaders.map(function (a) {
            a = O(a, Bo);
            return x(a)
        })
    }, jo = N(function (a) {
        a = $k(a);
        P(this, "contentType", "String", null);
        P(this, "data", "Object", null);
        P(this, "digest", "String", "");
        P(this, "method", "String", Co.GET);
        M(this, "requestHeaders", []);
        P(this, "url", "String", a)
    }, "flash.net.URLRequest");
    var Do = function () {
    }, Co = N(Do, "flash.net.URLRequestMethod");
    M(Co, "DELETE", "DELETE");
    M(Co, "GET", "GET");
    M(Co, "HEAD", "HEAD");
    M(Co, "OPTIONS", "OPTIONS");
    M(Co, "POST", "POST");
    M(Do, "PUT", "PUT");
    var Eo = function (a) {
        a = $k(a);
        null != a && this.decode(a)
    };
    N(Eo, "flash.net.URLVariables");
    Object.defineProperty(Eo.prototype, "decode", {
        value: function (a) {
            a = String(a);
            var b = this;
            Fo(a, function (a, d) {
                if (!l(d)) throw H(2101);
                var e = b[a];
                fa(e) ? e.push(d) : b[a] = null != e ? [e, d] : d
            })
        }
    });
    Object.defineProperty(Eo.prototype, "toString", {
        value: function () {
            return Go(this)
        }
    });
    var Ho = N(function () {
    }, "flash.system.Capabilities");
    Object.defineProperty(Ho, "avHardwareDisable", {value: !1});
    Object.defineProperty(Ho, "cpuArchitecture", {value: ""});
    Object.defineProperty(Ho, "hasAccessibility", {value: !1});
    Object.defineProperty(Ho, "hasAudio", {value: !1});
    Object.defineProperty(Ho, "hasAudioEncoder", {value: !1});
    Object.defineProperty(Ho, "hasEmbeddedVideo", {value: !1});
    Object.defineProperty(Ho, "hasIME", {value: !1});
    Object.defineProperty(Ho, "hasMP3", {value: !1});
    Object.defineProperty(Ho, "hasPrinting", {value: !1});
    Object.defineProperty(Ho, "hasScreenBroadcast", {value: !1});
    Object.defineProperty(Ho, "hasScreenPlayback", {value: !1});
    Object.defineProperty(Ho, "hasStreamingAudio", {value: !0});
    Object.defineProperty(Ho, "hasStreamingVideo", {value: !0});
    Object.defineProperty(Ho, "hasTLS", {value: !1});
    Object.defineProperty(Ho, "hasVideoEncoder", {value: !1});
    Object.defineProperty(Ho, "isDebugger", {value: !1});
    Object.defineProperty(Ho, "isEmbeddedInAcrobat", {value: !1});
    Object.defineProperty(Ho, "language", {value: ""});
    Object.defineProperty(Ho, "localFileReadDisable", {value: !0});
    Object.defineProperty(Ho, "manufacturer", {value: ""});
    Object.defineProperty(Ho, "maxLevelIDC", {value: "5.1"});
    Object.defineProperty(Ho, "os", {
        get: function () {
            return "Windows 7"
        }
    });
    Object.defineProperty(Ho, "pixelAspectRatio", {value: 1});
    Object.defineProperty(Ho, "playerType", {value: "PlugIn"});
    Object.defineProperty(Ho, "screenColor", {value: "color"});
    Object.defineProperty(Ho, "screenDPI", {value: 72});
    Object.defineProperty(Ho, "screenResolutionX", {
        get: function () {
            return screen.width
        }
    });
    Object.defineProperty(Ho, "screenResolutionY", {
        get: function () {
            return screen.height
        }
    });
    Object.defineProperty(Ho, "serverString", {
        get: function () {
            var a = [], b;
            for (b in Io) {
                var c = Io[b], c = ka(c) ? c(this) : this[c], c = !0 === c ? "t" : !1 === c ? "f" : encodeURIComponent(c);
                a.push(b + "=" + c)
            }
            return a.join("&")
        }
    });
    Object.defineProperty(Ho, "supports32BitProcesses", {value: !1});
    Object.defineProperty(Ho, "supports64BitProcesses", {value: !1});
    Object.defineProperty(Ho, "touchscreenType", {value: ""});
    Object.defineProperty(Ho, "version", {
        get: function () {
            return "HTML 11,0,0,0"
        }
    });
    Ho.hasMultiChannelAudio = function () {
        Q(this, "hasMultiChannelAudio");
        return !1
    };
    var Jo = function (a) {
        return function (b) {
            return b.hasMultiChannelAudio(a)
        }
    }, Io = {
        A: "hasAudio",
        SA: "hasStreamingAudio",
        SV: "hasStreamingVideo",
        EV: "hasEmbeddedVideo",
        MP3: "hasMP3",
        AE: "hasAudioEncoder",
        VE: "hasVideoEncoder",
        ACC: "hasAccessibility",
        PR: "hasPrinting",
        SP: "hasScreenPlayback",
        SB: "hasScreenBroadcast",
        DEB: "isDebugger",
        V: "version",
        M: "manufacturer",
        R: function (a) {
            return a.screenResolutionX + "x" + a.screenResolutionY
        },
        COL: "screenColor",
        AR: "pixelAspectRatio",
        OS: "os",
        ARCH: "cpuArchitecture",
        L: "language",
        PR32: "supports32BitProcesses",
        PR64: "supports64BitProcesses",
        PT: "playerType",
        AVD: "avHardwareDisable",
        LFD: "localFileReadDisable",
        WD: function () {
            return !1
        },
        TLS: "hasTLS",
        ML: "maxLevelIDC",
        DP: "screenDPI",
        IME: "hasIME",
        DD: Jo("DolbyDigital"),
        DDP: Jo("DolbyDigitalPlus"),
        DTS: Jo("DTS"),
        DTE: Jo("DTSExpress"),
        DTH: Jo("DTSHDHighResolutionAudio"),
        DTM: Jo("DTSHDMasterAudio")
    };
    var Mo = function (a, b, c) {
        a = !!a;
        b = O(b, Ko);
        c = O(c, Lo);
        P(this, "allowCodeImport", "Boolean", !0);
        P(this, "applicationDomain", "flash.system.ApplicationDomain", b);
        P(this, "checkPolicyFile", "Boolean", a);
        P(this, "imageDecodingPolicy", "String", "onDemand");
        P(this, "parameters", "Object", null);
        P(this, "requestedContentParent", "flash.display.DisplayObjectContainer", null);
        P(this, "securityDomain", "flash.system.SecurityDomain", c)
    }, No = N(Mo, "flash.system.LoaderContext");
    var Oo = Qk(2012);
    Oo.m = N(Oo, "flash.system.Security");
    P(Oo.m, "exactSettings", "Boolean", !1);
    M(Oo.m, "pageDomain", void 0);
    M(Oo.m, "sandboxType", "remote");
    M(Oo.m, "LOCAL_TRUSTED", "localTrusted");
    M(Oo.m, "LOCAL_WITH_FILE", "localWithFile");
    M(Oo.m, "LOCAL_WITH_NETWORK", "localWithNetwork");
    M(Oo.m, "REMOTE", "remote");
    Oo.m.allowDomain = function () {
        Q(Oo, "allowDomain")
    };
    Oo.m.allowInsecureDomain = function () {
        Q(Oo, "allowInsecureDomain")
    };
    Oo.m.loadPolicyFile = function () {
        Q(Oo, "loadPolicyFile")
    };
    Oo.m.showSettings = function () {
        Q(Oo, "showSettings")
    };
    var Po = function () {
    }, Lo = Pk(Po, "flash.system.SecurityDomain", {
        Kd: function () {
            throw H(2012, "SecurityDomain");
        }
    });
    M(Lo, "currentDomain", new Po);
    var Qo = N(function () {
    }, "flash.text.AntiAliasType");
    M(Qo, "ADVANCED", "advanced");
    M(Qo, "NORMAL", "normal");
    var Ro = function (a, b, c, d, e, f) {
        a = al(a, "_serif");
        b = al(b, "normal");
        c = al(c, "normal");
        d = al(d, "device");
        e = al(e, "cff");
        f = al(f, "horizontalStem");
        P(this, "cffHinting", "String", f);
        P(this, "fontLookup", "String", d);
        P(this, "fontName", "String", a);
        P(this, "fontPosture", "String", c);
        P(this, "fontWeight", "String", b);
        P(this, "locked", "Boolean", !1);
        P(this, "renderingMode", "String", e)
    }, So = N(Ro, "flash.text.engine.FontDescription");
    Ro.prototype.clone = function () {
        return new Ro(this.fontName, this.fontWeight, this.fontPosture, this.fontLookup, this.renderingMode, this.ccfHinting)
    };
    So.isDeviceFontCompatible = function () {
        Q(this, "isDeviceFontCompatible");
        return !1
    };
    So.isFontCompatible = function () {
        Q(this, "isFontCompatible");
        return !1
    };
    var To = N(function () {
    }, "flash.text.engine.FontPosture");
    Object.defineProperty(To, "ITALIC", {value: "italic"});
    Object.defineProperty(To, "NORMAL", {value: "normal"});
    var Uo = N(function () {
    }, "flash.text.engine.FontWeight");
    Object.defineProperty(Uo, "BOLD", {value: "bold"});
    Object.defineProperty(Uo, "NORMAL", {value: "normal"});
    var Vo = N(function () {
    }, "flash.text.FontStyle");
    M(Vo, "BOLD", "bold");
    M(Vo, "BOLD_ITALIC", "boldItalic");
    M(Vo, "ITALIC", "italic");
    M(Vo, "REGULAR", "regular");
    var Wo = N(function () {
    }, "flash.text.FontType");
    M(Wo, "DEVICE", "device");
    M(Wo, "EMBEDDED", "embedded");
    M(Wo, "EMBEDDED_CFF", "embeddedCFF");
    var Xo = function () {
    }, Yo = N(Xo, "flash.text.Font");
    Object.defineProperty(Xo.prototype, "fontName", {
        get: function () {
            var a = x(this);
            return a ? a.name : null
        }
    });
    Object.defineProperty(Xo.prototype, "fontStyle", {
        get: function () {
            var a = x(this);
            return a ? a.bold ? a.italic ? Vo.BOLD_ITALIC : Vo.BOLD : a.italic ? Vo.ITALIC : Vo.REGULAR : null
        }
    });
    Object.defineProperty(Xo.prototype, "fontType", {
        get: function () {
            return x(this) ? Wo.EMBEDDED : null
        }
    });
    Yo.enumerateFonts = function () {
        var a = [], b = r.i.Ed, c;
        for (c in b) for (var d = b[c], e = 0; e < d.length; e++) {
            var f = new Xo;
            oe(f, d[e]);
            a.push(f)
        }
        return a
    };
    Xo.prototype.hasGlyphs = function (a) {
        a = String(a);
        var b = x(this);
        if (!b) return !1;
        for (var c = 0; c < a.length; c++) if (!b.Bl(a.charAt(c))) return !1;
        return !0
    };
    Yo.registerFont = function (a) {
        O(a, zk);
        throw H(1508, "font");
    };
    var Zo = N(function () {
    }, "flash.text.TextFieldType");
    M(Zo, "DYNAMIC", "dynamic");
    M(Zo, "INPUT", "input");
    var ap = function (a, b, c, d, e, f, h, k, n, q, u, p, t) {
        oe(this, new Xe);
        sf.call(this, a);
        If.call(this, b);
        qf.call(this, c);
        mf.call(this, d);
        wf.call(this, e);
        Of.call(this, f);
        Qf.call(this, h);
        Kf.call(this, k);
        $o.call(this, n);
        Cf.call(this, q);
        Gf.call(this, u);
        uf.call(this, p);
        Af.call(this, t)
    }, bp = N(ap, "flash.text.TextFormat"), cp = function (a) {
        var b = Lk(ap);
        oe(b, a);
        return b
    }, $o = function (a) {
        if (!hf.call(this, a)) throw H(2008, "align");
    };
    Object.defineProperties(ap.prototype, {
        align: {get: gf, set: $o},
        blockIndent: {get: jf, set: kf},
        bold: {get: lf, set: mf},
        bullet: {get: nf, set: of},
        color: {get: pf, set: qf},
        font: {get: rf, set: sf},
        indent: {get: tf, set: uf},
        italic: {get: vf, set: wf},
        kerning: {get: xf, set: yf},
        leading: {get: zf, set: Af},
        leftMargin: {get: Bf, set: Cf},
        letterSpacing: {get: Df, set: Ef},
        rightMargin: {get: Ff, set: Gf},
        size: {get: Hf, set: If},
        tabStops: {
            get: Lf, set: function (a) {
                a = O(a, Array);
                Mf.call(this, a)
            }
        },
        target: {get: Jf, set: Kf},
        underline: {get: Nf, set: Of},
        url: {get: Pf, set: Qf}
    });
    var dp = N(function () {
    }, "flash.text.TextFormatAlign");
    M(dp, "CENTER", "center");
    M(dp, "END", "end");
    M(dp, "JUSTIFY", "justify");
    M(dp, "LEFT", "left");
    M(dp, "RIGHT", "right");
    M(dp, "START", "start");
    var ep = function (a, b, c, d, e, f) {
        P(this, "ascent", "Number", d);
        P(this, "descent", "Number", e);
        P(this, "height", "Number", c);
        P(this, "leading", "Number", f);
        P(this, "width", "Number", b);
        P(this, "x", "Number", a)
    };
    N(ep, "flash.text.TextLineMetrics");
    var gp = function () {
        for (var a = fp, b = 0; b < a.length; ++b) P(this, a[b], "Boolean", !0)
    };
    N(gp, "flash.ui.ContextMenuBuiltInItems");
    var fp = "forwardAndBack loop play print quality rewind save zoom".split(" ");
    gp.prototype.clone = function () {
        for (var a = new gp, b = fp, c = 0; c < b.length; ++c) a[b[c]] = this[b[c]];
        return a
    };
    var ip = function () {
        for (var a = hp, b = 0; b < a.length; ++b) P(this, a[b], "Boolean", !0)
    };
    N(ip, "flash.ui.ContextMenuClipboardItems");
    var hp = ["clear", "copy", "cut", "paste", "selectAll"];
    ip.prototype.clone = function () {
        for (var a = new ip, b = hp, c = 0; c < b.length; ++c) a[b[c]] = this[b[c]];
        return a
    };
    var jp = function () {
        S.call(this);
        P(this, "builtInItems", "flash.ui.ContextMenuBuiltInItems", new gp);
        P(this, "clipboardItems", "flash.ui.ContextMenuClipboardItems", new ip);
        P(this, "clipboardMenu", "Boolean", !1);
        P(this, "customItems", "Array", []);
        P(this, "link", "flash.net.URLRequest", null)
    }, kp = N(jp, "flash.ui.ContextMenu", Tm);
    Object.defineProperty(kp, "isSupported", {value: !1});
    jp.prototype.clone = function () {
        ul(this.builtInItems, "builtInItems");
        ul(this.clipboardItems, "clipboardItems");
        ul(this.customItems, "customItems");
        var a = new jp;
        a.builtInItems = this.builtInItems.clone();
        a.clipboardItems = this.clipboardItems.clone();
        a.customItems = this.customItems.map(function (a) {
            return Xj(a, a.clone, [], "clone")
        });
        a.clipboardMenu = this.clipboardMenu;
        a.isSupported = this.isSupported;
        a.link = this.link;
        return a
    };
    jp.prototype.hideBuiltInItems = function () {
        for (var a = fp, b = 0; b < a.length; ++b) this.builtInItems[a[b]] = !1
    };
    var lp = function (a, b, c, d) {
        S.call(this);
        a = String(a);
        b = !!b;
        d = !l(d) || !!d;
        P(this, "caption", "String", a);
        P(this, "separatorBefore", "Boolean", b);
        P(this, "visible", "Boolean", d)
    }, mp = N(lp, "flash.ui.ContextMenuItem", Um);
    lp.prototype.clone = function () {
        return new lp(this.caption, this.separatorBefore, this.enabled, this.visible)
    };
    mp.systemClearMenuItem = function () {
        Q(this, "systemClearMenuItem");
        return null
    };
    mp.systemCopyLinkMenuItem = function () {
        Q(this, "systemCopyLinkMenuItem");
        return null
    };
    mp.systemCopyMenuItem = function () {
        Q(this, "systemCopyMenuItem");
        return null
    };
    mp.systemCutMenuItem = function () {
        Q(this, "systemCutMenuItem");
        return null
    };
    mp.systemOpenLinkMenuItem = function () {
        Q(this, "systemOpenLinkMenuItem");
        return null
    };
    mp.systemPasteMenuItem = function () {
        Q(this, "systemPasteMenuItem");
        return null
    };
    mp.systemSelectAllMenuItem = function () {
        Q(this, "systemSelectAllMenuItem");
        return null
    };
    var np = N(function () {
    }, "flash.ui.Keyboard");
    M(np, "capsLock", !1);
    M(np, "hasVirtualKeyboard", !1);
    M(np, "numLock", !1);
    M(np, "physicalKeyboardType", "alphanumeric");
    np.isAccessible = function () {
        Q(this, "isAccessible");
        return !1
    };
    var op = ["Up", "Down", "Left", "Right"],
        pp = "Insert Delete Home Begin End PgUp PgDn PrntScrn ScrlLck Pause SysReq Break Reset Stop Menu User Sys Print ClrLn ClrDsp InsLn DelLn InsChr DelChr Prev Next Select Exec Undo Redo Find Help ModeSw".split(" "),
        qp = {
            PgUp: "PAGEUP",
            PgDn: "PAGEDOWN",
            PrntScrn: "PRINTSCREEN",
            ScrlLck: "SCROLLLOCK",
            Sys: "SYSTEM",
            ClrLn: "CLEARLINE",
            ClrDsp: "CLEARDISPLAY",
            InsLn: "INSERTLINE",
            DelLn: "DELETELINE",
            InsChr: "INSERTCHAR",
            DelChr: "DELETECHAR",
            Exec: "EXECUTE",
            ModeSw: "MODESWITCH"
        },
        rp = "RED GREEN YELLOW BLUE CHANNEL_UP CHANNEL_DOWN RECORD PLAY PAUSE STOP FAST_FORWARD REWIND SKIP_FORWARD SKIP_BACKWARD NEXT PREVIOUS LIVE LAST MENU INFO GUIDE EXIT BACK AUDIO SUBTITLE DVR VOD INPUT SETUP HELP MASTER_SHELL SEARCH".split(" "),
        sp = {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            COMMAND: 15,
            SHIFT: 16,
            CONTROL: 17,
            ALTERNATE: 18,
            CAPS_LOCK: 20,
            NUMPAD: 21,
            ESCAPE: 27,
            SPACE: 32,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            INSERT: 45,
            DELETE: 46,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_ADD: 107,
            NUMPAD_ENTER: 108,
            NUMPAD_SUBTRACT: 109,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            SEMICOLON: 186,
            EQUAL: 187,
            COMMA: 188,
            MINUS: 189,
            PERIOD: 190,
            SLASH: 191,
            BACKQUOTE: 192,
            LEFTBRACKET: 219,
            BACKSLASH: 220,
            RIGHTBRACKET: 221,
            QUOTE: 222
        }, tp = [];
    M(np, "CharCodeStrings", tp);
    var up = function (a, b, c) {
        tp.push(b);
        M(np, "KEYNAME_" + a, b);
        M(np, "STRING_" + a, String.fromCharCode(c))
    }, vp;
    for (vp = 65; 90 >= vp; ++vp) M(np, String.fromCharCode(vp), vp);
    for (vp = 0; 9 >= vp; ++vp) M(np, "NUMBER_" + vp, 48 + vp), M(np, "NUMPAD_" + vp, 96 + vp);
    for (vp = 0; vp < rp.length; ++vp) M(np, rp[vp], 16777216 + vp);
    for (var wp in sp) M(np, wp, sp[wp]);
    for (vp = 0; vp < op.length; ++vp) {
        var xp = op[vp];
        up(xp.toUpperCase() + "ARROW", xp, 63232 + vp)
    }
    for (vp = 1; 35 >= vp; ++vp) {
        var yp = "F" + vp;
        up(yp, yp, 63235 + vp);
        15 >= vp && M(np, yp, 111 + vp)
    }
    for (vp = 0; vp < pp.length; ++vp) {
        var zp = pp[vp];
        up(qp[zp] || zp.toUpperCase(), zp, 63271 + vp)
    }
    ;var Ap = Pk(function () {
    }, "flash.ui.Mouse", {Kd: Rk});
    Object.defineProperties(Ap, {
        supportsCursor: {value: !0}, cursor: {
            get: function () {
                return r.i.va.Nf()
            }, set: function (a) {
                ul(a, "cursor");
                a = String(a);
                if (!r.i.va.ky(a)) throw H(2008, "cursor");
            }
        }, hide: {
            value: function () {
                r.i.va.jj(!1)
            }
        }, show: {
            value: function () {
                r.i.va.jj(!0)
            }
        }
    });
    var Bp = N(function () {
    }, "flash.ui.MouseCursor");
    Xk(Bp, ["arrow", "auto", "button", "hand", "ibeam"]);
    var Cp = N(function () {
    }, "flash.utils.CompressionAlgorithm");
    Object.defineProperties(Cp, {DEFLATE: {value: "deflate"}, ZLIB: {value: "zlib"}});
    var Dp = {};
    var Ep = function () {
        this.Gr = {}
    }, Fp = null;
    Ep.prototype.Ma = function (a) {
        var b = this.Gr[a];
        b || ((b = "@" === a.charAt(0)) && (a = a.substring(1)), b = this.Gr[a] = xl("", a, b));
        return b
    };
    Ep.prototype.kp = function (a, b, c) {
        var d = c ? zk : b.__swiffy_baseclass;
        if (!d) return null;
        for (var e = [], f = d; f; f = f.__swiffy_baseclass) a.le(this.Ma("extendsClass")).ac(this.Ma("@type"), f.__swiffy_name.Ha()), e[f.__swiffy_typeid] = !0;
        if (!c) {
            e[b.__swiffy_typeid] = !0;
            b = b.__swiffy_if;
            for (var h in b) e[h] || (c = b[h], a.le(this.Ma("implementsInterface")).ac(this.Ma("@type"), c.__swiffy_name.Ha()))
        }
        return d
    };
    Ep.prototype.Gu = function (a, b) {
        for (var c in b.traits) if (!(0 <= c.indexOf("."))) {
            var d = b.traits[c], e;
            d instanceof pk ? (e = a.le(this.Ma("accessor")), d.Ie && d.We ? e.ac(this.Ma("@access"), "readwrite") : d.Ie ? e.ac(this.Ma("@access"), "readonly") : d.We && e.ac(this.Ma("@access"), "writeonly")) : e = d instanceof nk ? a.le(this.Ma("method")) : d.hu ? a.le(this.Ma("constant")) : a.le(this.Ma("variable"));
            e.ac(this.Ma("@name"), c)
        }
    };
    Ij.prototype.trace = function (a) {
        var b = Array.prototype.map.call(arguments, String).join(" ");
        this.__swiffy_vm.trace(b)
    };
    Ij.prototype.parseInt = function (a, b) {
        !l(b) && Bg(a) && (b = 10);
        return parseInt(a, b)
    };
    Ij.prototype.parseFloat = parseFloat;
    Ij.prototype.isNaN = isNaN;
    Ij.prototype.isFinite = isFinite;
    Ij.prototype["flash.utils.setTimeout"] = function (a, b) {
        for (var c = this, d = [], e = 2; e < arguments.length; ++e) d.push(arguments[e]);
        return fg(function () {
            a.apply(c, d)
        }, b)
    };
    Ij.prototype["flash.utils.clearTimeout"] = function (a) {
        ig(a)
    };
    Ij.prototype["flash.utils.setInterval"] = function (a, b) {
        for (var c = this, d = [], e = 2; e < arguments.length; ++e) d.push(arguments[e]);
        return gg(function () {
            a.apply(c, d)
        }, b)
    };
    Ij.prototype["flash.utils.clearInterval"] = function (a) {
        ig(a)
    };
    Ij.prototype["flash.utils.getTimer"] = function () {
        return r.i.pq()
    };
    Ij.prototype["flash.utils.getDefinitionByName"] = function (a) {
        ul(a, "name");
        a = String(a);
        var b = this.__swiffy_vm.yd;
        if (b.Ql(a)) return b.vl(a);
        throw H(1065, a);
    };
    Ij.prototype["flash.utils.getQualifiedClassName"] = function (a) {
        switch (typeof a) {
            case "undefined":
                return "void";
            case "number":
                if ((a | 0) == a) return "int"
        }
        return Oj(a).Ha()
    };
    Ij.prototype["flash.utils.getQualifiedSuperclassName"] = function (a) {
        a:{
            if (null != a && (a = Kk(a).__swiffy_baseclass, null != a)) {
                a = a.__swiffy_name;
                break a
            }
            a = null
        }
        return a ? a.Ha() : a
    };
    Ij.prototype["flash.utils.describeType"] = function (a) {
        var b;
        if (!l(a)) throw H(1010);
        Fp || (Fp = new Ep);
        b = Fp;
        var c = new Il(null, b.Ma("type"));
        if (null === a) c.ac(b.Ma("@name"), "null"), c.ac(b.Ma("@isStatic"), "false"); else {
            var d = !!a.__swiffy_typeid;
            a = d ? a : a.__swiffy_classdef;
            var e = b.kp(c, a, d), f = a.__swiffy_name.Ha();
            c.ac(b.Ma("@name"), f);
            c.ac(b.Ma("@isStatic"), String(d));
            e && c.ac(b.Ma("@base"), e.__swiffy_name.Ha());
            e = c;
            d && (e = c.le(b.Ma("factory")), e.ac(b.Ma("@type"), f), b.kp(e, a, !1));
            b.Gu(e, a.__swiffy_traits)
        }
        b = c.Ud;
        return b
    };
    Ij.prototype["flash.system.fscommand"] = function (a, b) {
        ul(a, "command");
        le(r.i, String(a), 2 > arguments.length ? "" : $k(b))
    };
    Ij.prototype.isXMLName = function (a) {
        return l(Od(a))
    };
    var Gp = function (a, b) {
        Jj(a, function (c) {
            try {
                return null != c ? b(String(c)) : "null"
            } catch (d) {
                throw H(1052, a);
            }
        })
    };
    Gp("escape", escape);
    Gp("unescape", unescape);
    Gp("encodeURI", encodeURI);
    Gp("encodeURIComponent", encodeURIComponent);
    Gp("decodeURI", decodeURI);
    Gp("decodeURIComponent", decodeURIComponent);
    Jj("Math", Math);
    Ek("Date", function (a) {
        return a instanceof Date ? a : (new Date(Date.now())).toString()
    }, function (a) {
        if (a instanceof Date) return a;
        if (null == a) return null;
        throw H(1034, Oj(a), "Date");
    }, lg);
    Ij.prototype.Date.prototype = Date.prototype;
    Ij.prototype.Date.UTC = Date.UTC;
    Bk(Function, Hk, Jk, Function, Function, Dk, null, "Function");
    Bk(Array, Hk, Jk, Array, Array, Dk, null, "Array");
    var Hp = aa.RegExp;
    Bk(Hp, Hk, Jk, Hp, function (a, b) {
        if (a instanceof RegExp) {
            if (l(b)) throw H(1100);
            return new RegExp(a)
        }
        a = String(a);
        null != b && (b = String(b));
        return (new gk(a, b)).translate()
    }, Dk, null, "RegExp");
    Jj("undefined", void 0);
    Jj("null", null);
    Jj("Infinity", Infinity);
    Jj("NaN", NaN);
    Jj("AS3", zl("http://adobe.com/AS3/2006/builtin"));
    Object.defineProperty(Object.prototype, "setPropertyIsEnumerable", {
        value: function (a, b) {
            a = String(a);
            b = !!b;
            var c = Object.getOwnPropertyDescriptor(this, a);
            c && c.configurable && c.enumerable != b && (c.enumerable = b, Object.defineProperty(this, a, c))
        }
    });
    var Ip = function (a, b) {
        Object.defineProperty(a, Kj("http://adobe.com/AS3/2006/builtin", b), {
            value: function () {
                return this[b].apply(this, arguments)
            }
        })
    };
    Ip(Object.prototype, "toLocaleString");
    Ip(Object.prototype, "toString");
    Ip(Object.prototype, "valueOf");
    var U = function (a, b) {
        Object.defineProperty(a, Kj("http://adobe.com/AS3/2006/builtin", b), {value: a[b]})
    };
    U(Object.prototype, "hasOwnProperty");
    U(Object.prototype, "isPrototypeOf");
    U(Object.prototype, "propertyIsEnumerable");
    U(Function.prototype, "apply");
    U(Function.prototype, "call");
    U(Number.prototype, "toExponential");
    U(Number.prototype, "toFixed");
    U(Number.prototype, "toPrecision");
    U(Number.prototype, "toString");
    U(Number.prototype, "valueOf");
    U(String, "fromCharCode");
    U(String.prototype, "charAt");
    U(String.prototype, "charCodeAt");
    U(String.prototype, "concat");
    U(String.prototype, "indexOf");
    U(String.prototype, "lastIndexOf");
    U(String.prototype, "localeCompare");
    U(String.prototype, "match");
    U(String.prototype, "replace");
    U(String.prototype, "search");
    U(String.prototype, "slice");
    U(String.prototype, "split");
    U(String.prototype, "substr");
    U(String.prototype, "substring");
    U(String.prototype, "toLocaleLowerCase");
    U(String.prototype, "toLocaleUpperCase");
    U(String.prototype, "toLowerCase");
    U(String.prototype, "toUpperCase");
    U(String.prototype, "toString");
    U(String.prototype, "valueOf");
    U(Array.prototype, "concat");
    U(Array.prototype, "every");
    U(Array.prototype, "filter");
    U(Array.prototype, "forEach");
    U(Array.prototype, "indexOf");
    U(Array.prototype, "join");
    U(Array.prototype, "lastIndexOf");
    U(Array.prototype, "map");
    U(Array.prototype, "pop");
    U(Array.prototype, "push");
    U(Array.prototype, "reverse");
    U(Array.prototype, "shift");
    U(Array.prototype, "slice");
    U(Array.prototype, "some");
    U(Array.prototype, "sort");
    U(Array.prototype, "sortOn");
    U(Array.prototype, "splice");
    U(Array.prototype, "unshift");
    U(Date.prototype, "getDate");
    U(Date.prototype, "getDay");
    U(Date.prototype, "getFullYear");
    U(Date.prototype, "getHours");
    U(Date.prototype, "getMilliseconds");
    U(Date.prototype, "getMinutes");
    U(Date.prototype, "getMonth");
    U(Date.prototype, "getSeconds");
    U(Date.prototype, "getTime");
    U(Date.prototype, "getTimezoneOffset");
    U(Date.prototype, "getUTCDate");
    U(Date.prototype, "getUTCDay");
    U(Date.prototype, "getUTCFullYear");
    U(Date.prototype, "getUTCHours");
    U(Date.prototype, "getUTCMilliseconds");
    U(Date.prototype, "getUTCMinutes");
    U(Date.prototype, "getUTCMonth");
    U(Date.prototype, "getUTCSeconds");
    U(Date.prototype, "setDate");
    U(Date.prototype, "setFullYear");
    U(Date.prototype, "setHours");
    U(Date.prototype, "setMilliseconds");
    U(Date.prototype, "setMinutes");
    U(Date.prototype, "setMonth");
    U(Date.prototype, "setSeconds");
    U(Date.prototype, "setTime");
    U(Date.prototype, "setUTCDate");
    U(Date.prototype, "setUTCFullYear");
    U(Date.prototype, "setUTCHours");
    U(Date.prototype, "setUTCMilliseconds");
    U(Date.prototype, "setUTCMinutes");
    U(Date.prototype, "setUTCMonth");
    U(Date.prototype, "setUTCSeconds");
    U(Date.prototype, "toDateString");
    U(Date.prototype, "toJSON");
    U(Date.prototype, "toLocaleDateString");
    U(Date.prototype, "toLocaleString");
    U(Date.prototype, "toLocaleTimeString");
    U(Date.prototype, "toTimeString");
    U(Date.prototype, "toUTCString");
    Ip(RegExp.prototype, "exec");
    Ip(RegExp.prototype, "test");
    var V = function (a, b, c) {
        oe(this, a);
        c && Jp(this, 0);
        P(this, "fixed", "Boolean", !!b);
        Object.defineProperty(this, "length", {
            get: function () {
                return x(this).length
            }, set: function (a) {
                a >>>= 0;
                if (this.fixed) throw H(1126);
                var b = x(this).length;
                x(this).length = a;
                Jp(this, b)
            }
        })
    }, Kp = function (a) {
        return x(a.__swiffy_classdef)
    }, Jp = function (a, b) {
        for (var c = x(a), d = Kp(a).Vf ? 0 : null; b < c.length; b++) c[b] = d
    }, Lp = function (a, b, c) {
        if (null == b) return Kp(a).Vf ? 0 : null;
        a = Kp(a);
        return !a.type || c && !a.Vf ? b : O(b, a.type)
    }, Mp = function (a, b) {
        var c = Object.create(a.prototype);
        V.call(c, b || []);
        return c
    };
    V.prototype = Object.create(Dk.prototype);
    var Np = function (a, b) {
        var c = function (a) {
            if (Gk(a, c)) return a;
            if (null == a || Object(a) !== a) throw H(1034, Oj(a), c.__swiffy_name);
            var b = Mp(c);
            a instanceof V && (a = x(a));
            if (fa(a)) for (var f = x(b), h = 0; h < a.length; h++) f[h] = Lp(b, a[h]);
            return b
        };
        oe(c, {type: a, Vf: b});
        return c
    }, Op = function () {
        return function (a, b) {
            V.call(this, Array(a >>> 0), !!b, !0)
        }
    }, Pp = new Nj("__AS3__.vec", "Vector", !1), Rp = function (a, b, c, d) {
        d = d || Ij.prototype;
        var e = (new Tj(Pp)).eo(a && a.__swiffy_name).vo(), f = d[e];
        f || (f = Pk(Op(), e, {ue: Np(a, b), eu: Hk, Rg: c ? V : Qp}),
            d[e] = f);
        return f
    }, Sp = function (a, b, c) {
        a = Rp(a && Ij.prototype[a], b, !0);
        Jj(Pp + "$" + c, a);
        return a
    }, Qp = Sp(null, !1, "object"), Tp = Sp("int", !0, "int"), Up = Sp("uint", !0, "uint"), Vp = Sp("Number", !0, "double"), Wp = N(function () {
        throw H(1007);
    }, Pp);
    Object.defineProperty(Wp, "__swiffy_type_apply", {
        value: function (a, b) {
            if (1 != b.length) throw "PANIC! Wrong number of vector type parameters";
            return Rp(b[0], !1, !1, a)
        }
    });
    Object.defineProperty(V.prototype, "__swiffy_proxy", {
        value: {
            rf: function (a, b) {
                var c = a.Qg(1069, this), d = x(this);
                if (c >= d.length) throw H(1125, c, d.length);
                c = d[c];
                if (!ka(c)) throw H(1006);
                return c.apply(this, b)
            }, xf: function (a) {
                return !a.$a(this)
            }, Fe: function (a) {
                a = a.Qg(1069, this);
                var b = x(this);
                if (a >= b.length) throw H(1125, a, b.length);
                return b[a]
            }, Le: function (a) {
                return a.sc() < x(this).length
            }, dg: function (a) {
                return a - 1
            }, Re: function (a) {
                return ++a > x(this).length ? 0 : a
            }, eg: function (a) {
                return x(this)[a - 1]
            }, setProperty: function (a,
                                      b) {
                var c = a.Qg(1056, this), d = x(this);
                if (c > d.length || c == d.length && this.fixed) throw H(1125, c, d.length);
                d[c] = Lp(this, b)
            }
        }
    });
    var Xp = function (a, b, c) {
        if (!Gk(c, a)) throw H(1034, Oj(c), a.__swiffy_name);
        b.push.apply(b, x(c))
    }, Yp = function (a, b, c, d) {
        if (null != b) {
            b = O(b, Function);
            for (var e = x(a), f = 0; f < e.length; f++) {
                var h = e[f], k = b.call(c, h, f, a);
                if (d && d.call(a, k, h)) return !1
            }
        }
        return !0
    }, Zp = function (a, b, c, d) {
        if (a.fixed) throw H(1126);
        var e = x(a), f = d.length;
        c = [b, c];
        c.length += f;
        c = e.splice.apply(e, c);
        var h = 0;
        try {
            for (; 0 < f; h++, b++, f--) e[b] = Lp(a, d[h])
        } finally {
            for (a = Kp(a).Vf ? 0 : null; 0 < f; b++, f--) e[b] = a
        }
        return c
    };
    V.prototype.concat = function (a) {
        var b = this.__swiffy_classdef, c = x(this).slice();
        if (10 < r.i.oc) for (var d = 0; d < arguments.length; d++) Xp(b, c, arguments[d]); else for (d = arguments.length - 1; 0 <= d; d--) Xp(b, c, arguments[d]);
        return Mp(b, c)
    };
    U(V.prototype, "concat");
    V.prototype.every = function (a, b) {
        return Yp(this, a, b, function (a) {
            return !a
        })
    };
    U(V.prototype, "every");
    V.prototype.filter = function (a, b) {
        var c = [];
        Yp(this, a, b, function (a, b) {
            a && c.push(b)
        });
        return Mp(this.__swiffy_classdef, c)
    };
    U(V.prototype, "filter");
    V.prototype.forEach = function (a, b) {
        Yp(this, a, b)
    };
    U(V.prototype, "forEach");
    V.prototype.indexOf = function (a, b) {
        a = Lp(this, a, !0);
        return x(this).indexOf(a, b | 0)
    };
    U(V.prototype, "indexOf");
    V.prototype.join = function (a) {
        a = al(a, ",");
        return x(this).join(a)
    };
    U(V.prototype, "join");
    V.prototype.lastIndexOf = function (a, b) {
        a = Lp(this, a, !0);
        b = y(b, 2147483647) | 0;
        return x(this).lastIndexOf(a, b)
    };
    U(V.prototype, "lastIndexOf");
    V.prototype.map = function (a, b) {
        var c = [];
        Yp(this, a, b, function (a) {
            c.push(Lp(this, a))
        });
        return Mp(this.__swiffy_classdef, c)
    };
    U(V.prototype, "map");
    V.prototype.pop = function () {
        if (this.fixed) throw H(1126);
        var a = x(this);
        return a.length ? a.pop() : Kp(this).Vf ? 0 : void 0
    };
    U(V.prototype, "pop");
    V.prototype.push = function (a) {
        var b = x(this);
        Zp(this, b.length, 0, arguments);
        return b.length
    };
    U(V.prototype, "push");
    V.prototype.reverse = function () {
        x(this).reverse();
        return this
    };
    U(V.prototype, "reverse");
    V.prototype.shift = function () {
        if (this.fixed) throw H(1126);
        var a = x(this);
        return a.length ? a.shift() : Kp(this).Vf ? 0 : void 0
    };
    U(V.prototype, "shift");
    V.prototype.slice = function (a, b) {
        b = y(b, 16777215) | 0;
        return Mp(this.__swiffy_classdef, x(this).slice(a | 0, b))
    };
    U(V.prototype, "slice");
    V.prototype.some = function (a, b) {
        return !Yp(this, a, b, function (a) {
            return a
        })
    };
    U(V.prototype, "some");
    V.prototype.sort = function (a) {
        x(this).sort(a);
        return this
    };
    U(V.prototype, "sort");
    V.prototype.splice = function (a, b, c) {
        a |= 0;
        b >>>= 0;
        c = Array.prototype.slice.call(arguments, 2);
        return Mp(this.__swiffy_classdef, Zp(this, a, b, c))
    };
    U(V.prototype, "splice");
    V.prototype.toLocaleString = function () {
        return this.toString()
    };
    V.prototype.unshift = function (a) {
        Zp(this, 0, 0, arguments);
        return x(this).length
    };
    U(V.prototype, "unshift");
    V.prototype.toString = function () {
        return x(this).join(",")
    };
    var $p = Qk(2012);
    $p.m = N($p, "flash.display.Graphics");
    $p.create = function (a) {
        var b = Object.create($p.prototype);
        Object.defineProperty(b, "__swiffy_d", {value: a});
        return b
    };
    $p.prototype.beginBitmapFill = function (a, b) {
        O(a, aq);
        O(b, Vn);
        Q(this, "beginBitmapFill")
    };
    $p.prototype.beginFill = function (a, b) {
        a >>>= 0;
        b = 100 * +y(b, 1);
        this.__swiffy_d.Fa().no(a, b)
    };
    $p.prototype.beginGradientFill = function (a, b, c, d, e, f, h, k) {
        a = String(a);
        b = O(b, Array);
        c = O(c, Array);
        d = O(d, Array);
        e = O(e, Vn);
        f = al(f, "pad");
        h = al(h, "rgb");
        k = +y(k, 0);
        this.__swiffy_d.Fa().oo(a, b, c, d, bi(e), f, h, k)
    };
    $p.prototype.beginShaderFill = function (a, b) {
        O(b, Vn);
        Q(this, "beginShaderFill")
    };
    $p.prototype.clear = function () {
        this.__swiffy_d.Fa().clear()
    };
    $p.prototype.copyFrom = function (a) {
        O(a, $p.m);
        Q(this, "copyFrom")
    };
    $p.prototype.cubicCurveTo = function () {
        Q(this, "cubicCurveTo")
    };
    $p.prototype.curveTo = function (a, b, c, d) {
        a = +a;
        b = +b;
        c = +c;
        d = +d;
        this.__swiffy_d.Fa().kb(a, b, c, d)
    };
    $p.prototype.drawCircle = function (a, b, c) {
        a = +a;
        b = +b;
        c = +c;
        this.__swiffy_d.Fa().pp(a, b, c, c)
    };
    $p.prototype.drawEllipse = function (a, b, c, d) {
        c = +c / 2;
        d = +d / 2;
        a = +a + c;
        b = +b + d;
        this.__swiffy_d.Fa().pp(a, b, c, d)
    };
    $p.prototype.drawGraphicsData = function () {
        Q(this, "drawGraphicsData")
    };
    $p.prototype.drawPath = function (a, b) {
        O(a, Tp);
        O(b, Vp);
        Q(this, "drawPath")
    };
    $p.prototype.drawRect = function (a, b, c, d) {
        a = +a;
        b = +b;
        c = +c;
        d = +d;
        this.__swiffy_d.Fa().Su(a, b, c, d)
    };
    $p.prototype.drawRoundRect = function (a, b, c, d, e, f) {
        a = +a;
        b = +b;
        c = +c;
        d = +d;
        e = +e;
        f = +y(f, e);
        this.__swiffy_d.Fa().Tu(a, b, c, d, e, f)
    };
    $p.prototype.drawTriangles = function (a, b, c) {
        O(a, Vp);
        O(b, Tp);
        O(c, Vp);
        Q(this, "drawTriangles")
    };
    $p.prototype.endFill = function () {
        this.__swiffy_d.Fa().up()
    };
    $p.prototype.lineBitmapStyle = function (a, b) {
        O(a, aq);
        O(b, Vn);
        Q(this, "lineBitmapStyle")
    };
    $p.prototype.lineGradientStyle = function (a, b, c, d, e) {
        O(b, Array);
        O(c, Array);
        O(d, Array);
        O(e, Vn);
        Q(this, "lineGradientStyle")
    };
    $p.prototype.lineShaderStyle = function (a, b) {
        O(b, Vn);
        Q(this, "lineShaderStyle")
    };
    $p.prototype.lineStyle = function (a, b, c, d, e, f, h, k) {
        l(a) && (a = +a);
        b >>>= 0;
        c = 100 * +y(c, 1);
        d = !!d;
        e = al(e, "normal");
        f = $k(f);
        h = $k(h);
        k = +y(k, 3);
        this.__swiffy_d.Fa().Qq(a, b, c, d, e, f, h, k)
    };
    $p.prototype.lineTo = function (a, b) {
        a = +a;
        b = +b;
        this.__swiffy_d.Fa().lineTo(a, b)
    };
    $p.prototype.moveTo = function (a, b) {
        a = +a;
        b = +b;
        this.__swiffy_d.Fa().moveTo(a, b)
    };
    var Sm = function (a) {
        return Nk.call(Ko, a)
    }, Ko = Pk(function (a) {
        oe(this, a || r.yd)
    }, "flash.system.ApplicationDomain", {
        Kd: function (a) {
            a = O(a, Ko);
            return Sm((a ? x(a) : r.Vs).Wk())
        }
    });
    M(Ko, "MIN_DOMAIN_MEMORY_LENGTH", 1024);
    Object.defineProperty(Ko, "currentDomain", {
        get: function () {
            return Sm()
        }
    });
    J(Ko, "parentDomain", function () {
        var a = x(this).parent;
        return a ? a.parent ? Sm(a) : null : null
    });
    J(Ko, "domainMemory", function () {
        Q(this, "domainMemory");
        return x(this).Ti
    });
    K(Ko, "domainMemory", function (a) {
        Q(this, "domainMemory");
        if ((a = O(a, uo)) && 1024 > a.length) throw H(1504);
        x(this).Ti = a
    });
    I(Ko, "getDefinition", function (a) {
        a = String(a);
        var b = x(this);
        if (b.Ql(a)) return b.vl(a);
        throw H(1065, a);
    });
    I(Ko, "getQualifiedDefinitionNames", function () {
        Q(this, "getQualifiedDefinitionNames");
        return Mp(String, [])
    });
    I(Ko, "hasDefinition", function (a) {
        a = String(a);
        return x(this).Ql(a)
    });
    var bq = function () {
        Object.defineProperty(this, "__swiffy_disable_search", {value: !0, enumerable: !1});
        oe(this, {})
    };
    N(bq, "flash.utils.Dictionary");
    var cq = 0, dq = function (a, b) {
        this.key = ha(a) && /^[0-9]+$/.test(a) ? parseInt(a, 10) : a;
        this.value = b
    }, eq = function (a) {
        if (!a.na && !a.uri) switch (a = a.localName, typeof a) {
            case "object":
                if (null === a) return "_null";
            case "function":
                var b = a.__swiffy_dic_key;
                b || (a.__swiffy_dic_key = b = ++cq);
                return b;
            default:
                return "_" + a
        }
    };
    Object.defineProperty(bq.prototype, "toJSON", {
        value: function (a) {
            return a = String(a)
        }, writable: !0, configurable: !0
    });
    Object.defineProperty(bq.prototype, "__swiffy_proxy", {
        value: {
            rf: function (a, b) {
                var c = eq(a);
                if (c) return c = (c = x(this)[c]) && c.value, Xj(this, c, b, a);
                throw H(1069, a.Ha(), "flash.utils.Dictionary");
            }, xf: function (a) {
                return (a = eq(a)) ? delete x(this)[a] : !1
            }, Fe: function (a) {
                var b = eq(a);
                if (b) return (a = x(this)[b]) && a.value;
                throw H(1069, a.Ha(), "flash.utils.Dictionary");
            }, Le: function (a) {
                return (a = eq(a)) ? a in x(this) : !1
            }, dg: function (a) {
                var b = x(this);
                return b[Object.keys(b)[a - 1]].key
            }, Re: function (a) {
                var b = x(this);
                return a++ <
                Object.keys(b).length ? a : 0
            }, eg: function (a) {
                var b = x(this);
                return b[Object.keys(b)[a - 1]].value
            }, setProperty: function (a, b) {
                var c = eq(a);
                if (c) x(this)[c] = new dq(a.localName, b); else throw H(1056, a.Ha(), "flash.utils.Dictionary");
            }
        }
    });
    var fq = N(function () {
    }, "flash.utils.Endian");
    Object.defineProperty(fq, "BIG_ENDIAN", {value: "bigEndian"});
    Object.defineProperty(fq, "LITTLE_ENDIAN", {value: "littleEndian"});
    var W = function () {
        oe(this, {G: new DataView(new ArrayBuffer(0)), position: 0, mb: !1});
        P(this, "objectEncoding", "uint", 0);
        P(this, "shareable", "Boolean", !1)
    }, uo = N(W, "flash.utils.ByteArray");
    J(uo, "bytesAvailable", function () {
        var a = x(this);
        return Math.max(0, a.G.byteLength - a.position)
    });
    J(uo, "endian", function () {
        return x(this).mb ? "littleEndian" : "bigEndian"
    });
    K(uo, "endian", function (a) {
        ul(a, "endian");
        a = String(a);
        var b = x(this);
        if ("littleEndian" === a) b.mb = !0; else if ("bigEndian" === a) b.mb = !1; else throw H(2008, "type");
    });
    J(uo, "position", function () {
        return x(this).position
    });
    K(uo, "position", function (a) {
        x(this).position = a >>> 0
    });
    J(uo, "length", function () {
        return x(this).G.byteLength
    });
    K(uo, "length", function (a) {
        a >>>= 0;
        var b = x(this);
        gq(b, a);
        b.position > a && (b.position = a)
    });
    var gq = function (a, b) {
        var c = a.G;
        if (b > c.buffer.byteLength) {
            var d = new Uint8Array(b + (b >> 3) + (9 > b ? 3 : 6));
            d.set(new Uint8Array(c.buffer));
            a.G = new DataView(d.buffer, 0, b)
        } else b !== c.byteLength && (a.G = new DataView(c.buffer, 0, b))
    }, hq = function (a, b) {
        var c = a.position;
        if (c + b > a.G.byteLength) throw H(2030);
        a.position = c + b;
        return c
    }, iq = function (a, b) {
        var c = a.position, d = c + b;
        d > a.G.byteLength && gq(a, d);
        a.position = c + b;
        return c
    }, jq = function (a, b) {
        var c = x(a), d = hq(c, b);
        return new Uint8Array(c.G.buffer, d, b)
    }, kq = function (a, b) {
        var c =
            x(a), d = iq(c, b);
        return new Uint8Array(c.G.buffer, d, b)
    };
    Object.defineProperty(uo, "defaultObjectEncoding", {value: 0});
    Object.defineProperty(W.prototype, "__swiffy_proxy", {
        value: {
            Fe: function (a) {
                a = a.Qg(1069, this);
                var b = x(this).G;
                return a < b.byteLength ? b.getUint8(a) : void 0
            }, Le: function (a) {
                return a.sc() < x(this).G.byteLength
            }, setProperty: function (a, b) {
                var c = a.Qg(1056, this);
                b |= 0;
                var d = x(this), e = c + 1;
                e > d.G.byteLength && gq(d, e);
                d.G.setUint8(c, b)
            }
        }
    });
    W.prototype.atomicCompareAndSwapIntAt = function (a, b, c) {
        a |= 0;
        b |= 0;
        c |= 0;
        var d = this.position;
        try {
            this.position = a;
            var e = this.readInt();
            e == b && (this.position = a, this.writeInt(c));
            return e
        } finally {
            this.position = d
        }
    };
    W.prototype.atomicCompareAndSwapLength = function (a, b) {
        var c = this.length;
        c == (a | 0) && (this.length = b | 0);
        return c
    };
    W.prototype.clear = function () {
        var a = x(this);
        a.G = new DataView(new ArrayBuffer(0));
        a.position = 0
    };
    W.prototype.compress = function () {
        Q(this, "compress")
    };
    W.prototype.deflate = function () {
        Q(this, "deflate")
    };
    W.prototype.inflate = function () {
        this.uncompress("deflate")
    };
    W.prototype.readBoolean = function () {
        var a = x(this), b = hq(a, 1);
        return !!a.G.getUint8(b)
    };
    W.prototype.readByte = function () {
        var a = x(this), b = hq(a, 1);
        return a.G.getInt8(b)
    };
    W.prototype.readBytes = function (a, b, c) {
        a = O(a, uo);
        b >>>= 0;
        c >>>= 0;
        if (0 == c) {
            var d = x(this), d = d.G.byteLength - d.position;
            0 < d && (c = d)
        }
        d = jq(this, c);
        a = x(a);
        var e = b + c;
        e > a.G.byteLength && gq(a, e);
        (new Uint8Array(a.G.buffer, b, c)).set(d)
    };
    W.prototype.readDouble = function () {
        var a = x(this), b = hq(a, 8);
        return a.G.getFloat64(b, a.mb)
    };
    W.prototype.readFloat = function () {
        var a = x(this), b = hq(a, 4);
        return a.G.getFloat32(b, a.mb)
    };
    W.prototype.readInt = function () {
        var a = x(this), b = hq(a, 4);
        return a.G.getInt32(b, a.mb)
    };
    W.prototype.readMultiByte = function () {
        Q(this, "readMultiByte");
        return ""
    };
    W.prototype.readObject = function () {
        Q(this, "readObject")
    };
    W.prototype.readShort = function () {
        var a = x(this), b = hq(a, 2);
        return a.G.getInt16(b, a.mb)
    };
    W.prototype.readUnsignedByte = function () {
        var a = x(this), b = hq(a, 1);
        return a.G.getUint8(b)
    };
    W.prototype.readUnsignedInt = function () {
        var a = x(this), b = hq(a, 4);
        return a.G.getUint32(b, a.mb)
    };
    W.prototype.readUnsignedShort = function () {
        var a = x(this), b = hq(a, 2);
        return a.G.getUint16(b, a.mb)
    };
    var lq = function (a, b) {
        if (0 == b) return "";
        var c = jq(a, b);
        return zc(c, Ac, 0)
    };
    W.prototype.readUTF = function () {
        var a = x(this), b = hq(a, 2), a = a.G.getUint16(b, a.mb);
        return lq(this, a)
    };
    W.prototype.readUTFBytes = function (a) {
        return lq(this, a >>> 0)
    };
    W.prototype.toJSON = function () {
        return "ByteArray"
    };
    W.prototype.toString = function () {
        var a = x(this).G, a = new Uint8Array(a.buffer, 0, a.byteLength), b = Ac, c = 0;
        239 == a[0] && 187 == a[1] && 191 == a[2] ? c = 3 : 255 == a[0] && 254 == a[1] ? (b = Bc, c = 2) : 254 == a[0] && 255 == a[1] && (b = Cc, c = 2);
        return zc(a, b, c)
    };
    W.prototype.uncompress = function (a) {
        a = al(a, "zlib");
        ul(a, "algorithm");
        a = Dp[a];
        if (!a) throw H(2058);
        var b = x(this);
        if (b.G.byteLength) {
            var c = new Uint8Array(b.G.byteLength + 1);
            c.set(new Uint8Array(b.G.buffer, 0, b.G.byteLength));
            try {
                var d = a(c);
                b.G = new DataView(d.buffer, 0, d.length);
                b.position = 0
            } catch (e) {
                throw H(2058);
            }
        }
    };
    W.prototype.writeBoolean = function (a) {
        a = !!a;
        var b = x(this), c = iq(b, 1);
        b.G.setUint8(c, a ? 1 : 0)
    };
    W.prototype.writeByte = function (a) {
        a |= 0;
        var b = x(this), c = iq(b, 1);
        b.G.setInt8(c, a)
    };
    W.prototype.writeBytes = function (a, b, c) {
        a = O(a, uo);
        b >>>= 0;
        c >>>= 0;
        a = x(a).G;
        var d = a.byteLength;
        if (b > d || b + c > d) throw H(2006);
        0 == c && (c = d - b);
        kq(this, c).set(new Uint8Array(a.buffer, b, c))
    };
    W.prototype.writeDouble = function (a) {
        a = +a;
        var b = x(this), c = iq(b, 8);
        b.G.setFloat64(c, a, b.mb)
    };
    W.prototype.writeFloat = function (a) {
        a = +a;
        var b = x(this), c = iq(b, 4);
        b.G.setFloat32(c, a, b.mb)
    };
    W.prototype.writeInt = function (a) {
        a |= 0;
        var b = x(this), c = iq(b, 4);
        b.G.setInt32(c, a, b.mb)
    };
    W.prototype.writeMultiByte = function () {
        Q(this, "writeMultiByte")
    };
    W.prototype.writeObject = function () {
        Q(this, "writeObject")
    };
    W.prototype.writeShort = function (a) {
        a |= 0;
        var b = x(this), c = iq(b, 2);
        b.G.setInt16(c, a, b.mb)
    };
    W.prototype.writeUnsignedInt = function (a) {
        a >>>= 0;
        var b = x(this), c = iq(b, 4);
        b.G.setUint32(c, a, b.mb)
    };
    W.prototype.writeUTF = function (a) {
        a = String(a);
        a = unescape(encodeURIComponent(a));
        var b = a.length;
        if (65535 < b) throw H(2006);
        var c = x(this), d = iq(c, b + 2);
        c.G.setUint16(d, b, c.mb);
        for (var d = d + 2, e = 0; e < b; ++e, ++d) c.G.setUint8(d, a.charCodeAt(e))
    };
    W.prototype.writeUTFBytes = function (a) {
        a = String(a);
        a = unescape(encodeURIComponent(a));
        for (var b = a.length, c = x(this), d = iq(c, b), e = 0; e < b; ++e, ++d) c.G.setUint8(d, a.charCodeAt(e))
    };
    var mq = function () {
    };
    N(mq, "flash.utils.Proxy");
    Jj("flash.utils.flash_proxy", new yl(void 0, "http://www.adobe.com/2006/actionscript/flash/proxy"));
    Jj(Kj("http://www.adobe.com/2006/actionscript/flash/proxy", "isAttribute"), function (a) {
        return a instanceof Mj && x(a).na
    });
    var nq = function (a) {
        var b = a.localName;
        return a.na || a.uri || !ja(b) ? new Mj(a) : String(b)
    };
    Object.defineProperty(mq.prototype, "__swiffy_proxy", {
        value: {
            rf: function (a, b) {
                a = nq(a);
                return this[Kj("http://www.adobe.com/2006/actionscript/flash/proxy", "callProperty")].apply(this, [a].concat(b))
            }, xf: function (a) {
                a = nq(a);
                return this[Kj("http://www.adobe.com/2006/actionscript/flash/proxy", "deleteProperty")].call(this, a)
            }, lj: function (a) {
                a = nq(a);
                return this[Kj("http://www.adobe.com/2006/actionscript/flash/proxy", "getDescendants")].call(this, a)
            }, Fe: function (a) {
                a = nq(a);
                return this[Kj("http://www.adobe.com/2006/actionscript/flash/proxy",
                    "getProperty")].call(this, a)
            }, Le: function (a) {
                a = a.Ha();
                return this[Kj("http://www.adobe.com/2006/actionscript/flash/proxy", "hasProperty")].call(this, a)
            }, dg: function (a) {
                return this[Kj("http://www.adobe.com/2006/actionscript/flash/proxy", "nextName")].call(this, a | 0)
            }, Re: function (a) {
                return this[Kj("http://www.adobe.com/2006/actionscript/flash/proxy", "nextNameIndex")].call(this, a | 0)
            }, eg: function (a) {
                return this[Kj("http://www.adobe.com/2006/actionscript/flash/proxy", "nextValue")].call(this, a | 0)
            }, setProperty: function (a,
                                      b) {
                a = nq(a);
                this[Kj("http://www.adobe.com/2006/actionscript/flash/proxy", "setProperty")].call(this, a, b)
            }
        }
    });
    var oq = function (a, b) {
        Object.defineProperty(mq.prototype, Kj("http://www.adobe.com/2006/actionscript/flash/proxy", a), {
            value: function () {
                throw H(b, a);
            }
        })
    };
    oq("callProperty", 2090);
    oq("deleteProperty", 2092);
    oq("getDescendants", 2093);
    oq("getProperty", 2088);
    oq("hasProperty", 2091);
    oq("setProperty", 2089);
    oq("nextNameIndex", 2105);
    oq("nextName", 2106);
    oq("nextValue", 2107);
    var pq = N(function (a, b) {
        S.call(this);
        var c = x(this);
        c.rn = null;
        c.gk = !1;
        c.fl = +a;
        c.Sm = b | 0;
        c.Oi = 0
    }, "flash.utils.Timer", S);
    J(pq, "delay", function () {
        return x(this).fl
    });
    K(pq, "delay", function (a) {
        x(this).fl = +a
    });
    J(pq, "repeatCount", function () {
        return x(this).Sm
    });
    K(pq, "repeatCount", function (a) {
        x(this).Sm = a | 0
    });
    J(pq, "running", function () {
        return x(this).gk
    });
    J(pq, "currentCount", function () {
        return x(this).Oi
    });
    I(pq, "start", function () {
        var a = x(this);
        if (!a.gk) {
            var b = this;
            a.rn = gg(function () {
                a.Oi++;
                Jm(b, Wk.call(on, "timer", !1, !1));
                var c = a.Sm;
                c && a.Oi >= c && (b.stop(), b.dispatchEvent(Wk.call(on, "timerComplete", !1, !1)))
            }, a.fl);
            a.gk = !0
        }
    });
    I(pq, "stop", function () {
        var a = x(this);
        ig(a.rn);
        a.gk = !1;
        a.rn = null
    });
    I(pq, "reset", function () {
        this.stop();
        x(this).Oi = 0
    });
    var qq = function (a, b, c, d) {
        for (var e = a.length, f = 0; f < e; f += 4) {
            var h = a[f + 3] * d, k = b[f + 3];
            b[f + 3] = h + k - h * k / 255;
            var n = 1 / (255 * b[f + 3]);
            b[f + 0] = n * (c(a[f + 0], b[f + 0]) * h * k + a[f + 0] * h * (255 - k) + b[f + 0] * k * (255 - h));
            b[f + 1] = n * (c(a[f + 1], b[f + 1]) * h * k + a[f + 1] * h * (255 - k) + b[f + 1] * k * (255 - h));
            b[f + 2] = n * (c(a[f + 2], b[f + 2]) * h * k + a[f + 2] * h * (255 - k) + b[f + 2] * k * (255 - h))
        }
    }, rq = function (a, b, c, d) {
        for (var e = a.length, f = 0; f < e; f += 4) {
            var h = a[f + 3] * d, k = b[f + 3];
            if (0 < k) {
                var n = Math.min(255, h + k | 0);
                b[f + 3] = n;
                n = 1 / n;
                h *= c;
                b[f + 0] = (b[f + 0] * k + a[f + 0] * h) * n;
                b[f + 1] = (b[f + 1] * k + a[f +
                1] * h) * n;
                b[f + 2] = (b[f + 2] * k + a[f + 2] * h) * n
            } else b[f + 0] = a[f + 0], b[f + 1] = a[f + 1], b[f + 2] = a[f + 2], b[f + 3] = h
        }
    }, sq = function (a, b, c) {
        for (var d = a.length, e = 0; e < d; e += 4) {
            var f = a[e + 3] * c;
            0 < b[e + 3] ? (b[e + 0] = b[e + 0] * (1 - 2 / 255 * f) + f, b[e + 1] = b[e + 1] * (1 - 2 / 255 * f) + f, b[e + 2] = b[e + 2] * (1 - 2 / 255 * f) + f) : (b[e + 0] = a[e + 0], b[e + 1] = a[e + 1], b[e + 2] = a[e + 2], b[e + 3] = f)
        }
    }, tq = function (a, b, c) {
        for (var d = 3, e = a.length; d < e; d += 4) b[d] = a[d] * b[d] * c / 255
    }, uq = [, , function (a, b) {
        return a * b / 255
    }, function (a, b) {
        return a + b - a * b / 255
    }];
    uq[5] = Math.min;
    uq[4] = Math.max;
    uq[13] = function (a, b) {
        return 127 >= a ? 2 * a * b / 255 : 2 * (a + b - a * b / 255) - 255
    };
    uq[12] = function (a, b) {
        return 127 >= b ? 2 * b * a / 255 : 2 * (b + a - b * a / 255) - 255
    };
    uq[6] = function (a, b) {
        return Math.abs(a - b)
    };
    var vq = function (a, b, c, d) {
        var e = uq[c];
        e ? qq(a, b, e, d) : 7 == c ? rq(a, b, 1, d) : 8 == c ? rq(a, b, -1, d) : 9 == c ? sq(a, b, d) : 10 == c ? tq(a, b, d) : qq(a, b, function (a) {
            return a
        }, d)
    };
    var Aq = function (a, b, c, d, e, f, h, k, n) {
        for (var q = 0, u = 0; u < n; ++u) {
            for (var p = 0, t = 0, v = 0, w = 0, B = u * k * 4, A = B, F = 0; F < h; ++F) t += a[A + 0], v += a[A + 1], w += a[A + 2], p += a[A + 3], A += 4;
            for (var G = q, F = 0; F < f; ++F) b[G + 0] = t * e, b[G + 1] = v * e, b[G + 2] = w * e, b[G + 3] = p * e, F + h < k && (t += a[A + 0], v += a[A + 1], w += a[A + 2], p += a[A + 3], A += 4), G += c;
            for (; F + h + 4 <= k; F += 4) b[G + 0] = t * e, b[G + 1] = v * e, b[G + 2] = w * e, b[G + 3] = p * e, G += c, t += a[A + 0] - a[B + 0], v += a[A + 1] - a[B + 1], w += a[A + 2] - a[B + 2], p += a[A + 3] - a[B + 3], b[G + 0] = t * e, b[G + 1] = v * e, b[G + 2] = w * e, b[G + 3] = p * e, G += c, t += a[A + 4] - a[B + 4], v += a[A + 5] - a[B + 5], w +=
                a[A + 6] - a[B + 6], p += a[A + 7] - a[B + 7], b[G + 0] = t * e, b[G + 1] = v * e, b[G + 2] = w * e, b[G + 3] = p * e, G += c, t += a[A + 8] - a[B + 8], v += a[A + 9] - a[B + 9], w += a[A + 10] - a[B + 10], p += a[A + 11] - a[B + 11], b[G + 0] = t * e, b[G + 1] = v * e, b[G + 2] = w * e, b[G + 3] = p * e, G += c, t += a[A + 12] - a[B + 12], v += a[A + 13] - a[B + 13], w += a[A + 14] - a[B + 14], p += a[A + 15] - a[B + 15], B += 16, A += 16;
            for (; F + h < k; ++F) b[G + 0] = t * e, b[G + 1] = v * e, b[G + 2] = w * e, b[G + 3] = p * e, t += a[A + 0] - a[B + 0], v += a[A + 1] - a[B + 1], w += a[A + 2] - a[B + 2], p += a[A + 3] - a[B + 3], B += 4, A += 4, G += c;
            for (; F < k; ++F) b[G + 0] = t * e, b[G + 1] = v * e, b[G + 2] = w * e, b[G + 3] = p * e, t -= a[B + 0], v -=
                a[B + 1], w -= a[B + 2], p -= a[B + 3], B += 4, G += c;
            q += d
        }
    }, Bq = function (a, b, c, d, e, f, h, k, n) {
        var q = 0;
        e /= 255;
        for (var u = 0; u < n; ++u) {
            for (var p = 0, t = 0, v = 0, w = 0, B = u * k * 4, A = B, F, G = 0; G < h; ++G) F = a[A + 3], t += a[A + 0] * F, v += a[A + 1] * F, w += a[A + 2] * F, p += 255 * F, A += 4;
            for (var L = q, G = 0; G < f; ++G) b[L + 0] = t * e, b[L + 1] = v * e, b[L + 2] = w * e, b[L + 3] = p * e, G + h < k && (F = a[A + 3], t += a[A + 0] * F, v += a[A + 1] * F, w += a[A + 2] * F, p += 255 * F, A += 4), L += c;
            for (; G + h + 4 <= k; G += 4) b[L + 0] = t * e, b[L + 1] = v * e, b[L + 2] = w * e, b[L + 3] = p * e, L += c, F = a[A + 3], t += a[A + 0] * F, v += a[A + 1] * F, w += a[A + 2] * F, p += 255 * F, F = a[B + 3], t -= a[B + 0] *
                F, v -= a[B + 1] * F, w -= a[B + 2] * F, p -= 255 * F, b[L + 0] = t * e, b[L + 1] = v * e, b[L + 2] = w * e, b[L + 3] = p * e, L += c, F = a[A + 7], t += a[A + 4] * F, v += a[A + 5] * F, w += a[A + 6] * F, p += 255 * F, F = a[B + 7], t -= a[B + 4] * F, v -= a[B + 5] * F, w -= a[B + 6] * F, p -= 255 * F, b[L + 0] = t * e, b[L + 1] = v * e, b[L + 2] = w * e, b[L + 3] = p * e, L += c, F = a[A + 11], t += a[A + 8] * F, v += a[A + 9] * F, w += a[A + 10] * F, p += 255 * F, F = a[B + 11], t -= a[B + 8] * F, v -= a[B + 9] * F, w -= a[B + 10] * F, p -= 255 * F, b[L + 0] = t * e, b[L + 1] = v * e, b[L + 2] = w * e, b[L + 3] = p * e, L += c, F = a[A + 15], t += a[A + 12] * F, v += a[A + 13] * F, w += a[A + 14] * F, p += 255 * F, F = a[B + 15], t -= a[B + 12] * F, v -= a[B + 13] * F, w -= a[B +
            14] * F, p -= 255 * F, B += 16, A += 16;
            for (; G + h < k; ++G) b[L + 0] = t * e, b[L + 1] = v * e, b[L + 2] = w * e, b[L + 3] = p * e, F = a[A + 3], t += a[A + 0] * F, v += a[A + 1] * F, w += a[A + 2] * F, p += 255 * F, F = a[B + 3], t -= a[B + 0] * F, v -= a[B + 1] * F, w -= a[B + 2] * F, p -= 255 * F, B += 4, A += 4, L += c;
            for (; G < k; ++G) b[L + 0] = t * e, b[L + 1] = v * e, b[L + 2] = w * e, b[L + 3] = p * e, F = a[B + 3], t -= a[B + 0] * F, v -= a[B + 1] * F, w -= a[B + 2] * F, p -= 255 * F, B += 4, L += c;
            q += d
        }
    }, Cq = function (a, b, c, d, e, f, h, k, n) {
        for (var q = 0, u = 0; u < n; ++u) {
            for (var p = 0, t = 0, v = 0, w = 0, B = u * k * 4, A = B, F = 0; F < h; ++F) t += a[A + 0], v += a[A + 1], w += a[A + 2], p += a[A + 3], A += 4;
            for (var G = q, L, F =
                0; F < f; ++F) L = 255 / p, b[G + 0] = t * L, b[G + 1] = v * L, b[G + 2] = w * L, b[G + 3] = p * e, F + h < k && (t += a[A + 0], v += a[A + 1], w += a[A + 2], p += a[A + 3], A += 4), G += c;
            for (; F + h + 4 <= k; F += 4) L = 255 / p, b[G + 0] = t * L, b[G + 1] = v * L, b[G + 2] = w * L, b[G + 3] = p * e, G += c, t += a[A + 0] - a[B + 0], v += a[A + 1] - a[B + 1], w += a[A + 2] - a[B + 2], p += a[A + 3] - a[B + 3], L = 255 / p, b[G + 0] = t * L, b[G + 1] = v * L, b[G + 2] = w * L, b[G + 3] = p * e, G += c, t += a[A + 4] - a[B + 4], v += a[A + 5] - a[B + 5], w += a[A + 6] - a[B + 6], p += a[A + 7] - a[B + 7], L = 255 / p, b[G + 0] = t * L, b[G + 1] = v * L, b[G + 2] = w * L, b[G + 3] = p * e, G += c, t += a[A + 8] - a[B + 8], v += a[A + 9] - a[B + 9], w += a[A + 10] - a[B + 10], p +=
                a[A + 11] - a[B + 11], L = 255 / p, b[G + 0] = t * L, b[G + 1] = v * L, b[G + 2] = w * L, b[G + 3] = p * e, G += c, t += a[A + 12] - a[B + 12], v += a[A + 13] - a[B + 13], w += a[A + 14] - a[B + 14], p += a[A + 15] - a[B + 15], B += 16, A += 16;
            for (; F + h < k; ++F) L = 255 / p, b[G + 0] = t * L, b[G + 1] = v * L, b[G + 2] = w * L, b[G + 3] = p * e, t += a[A + 0] - a[B + 0], v += a[A + 1] - a[B + 1], w += a[A + 2] - a[B + 2], p += a[A + 3] - a[B + 3], B += 4, A += 4, G += c;
            for (; F < k; ++F) L = 255 / p, b[G + 0] = t * L, b[G + 1] = v * L, b[G + 2] = w * L, b[G + 3] = p * e, t -= a[B + 0], v -= a[B + 1], w -= a[B + 2], p -= a[B + 3], B += 4, G += c;
            q += d
        }
    };
    var Dq = /100000100000100000.0s/, Eq = /1000.0100.0010.000.0s/, Fq = /0000.0000.0000.000.0s/, Gq = function (a) {
        a.save();
        a.setTransform(1, 0, 0, 1, 0, 0)
    }, Hq = function (a, b, c, d, e, f) {
        d.globalAlpha = b;
        d.globalCompositeOperation = c;
        d.drawImage(a.canvas, 0, 0, e, f, 0, 0, e, f)
    }, Iq = function (a, b, c, d) {
        a != b && Hq(a, 1, "copy", b, c, d)
    }, Jq = function (a, b, c, d) {
        Gq(b);
        Iq(a, b, c, d);
        b.restore()
    }, Kq = function (a, b, c, d) {
        Gq(b);
        b.clearRect(0, 0, c, d);
        b.restore()
    }, Lq = function (a, b, c, d, e) {
        e = e[18] / 256;
        Gq(b);
        bb || rc ? (Iq(a, b, c, d), Hq(a, e, "source-in", b, c, d)) : Hq(a,
            e, "copy", b, c, d);
        b.restore()
    }, Mq = function (a, b, c, d, e) {
        var f = e[4], h = e[9], k = e[14];
        e = e[18] / 256;
        Gq(b);
        Iq(a, b, c, d);
        var n = b == a ? Gg(Fg(c, d)) : a;
        Iq(a, n, c, d);
        b.fillStyle = "rgba(" + f + "," + h + "," + k + ",1)";
        b.globalCompositeOperation = "lighter";
        b.fillRect(0, 0, c, d);
        Hq(n, e, "destination-in", b, c, d);
        b.restore()
    }, Nq = function (a, b, c, d, e) {
        var f = e[4], h = e[9], k = e[14];
        e = e[18] / 256;
        Gq(b);
        Iq(a, b, c, d);
        b.fillStyle = "rgba(" + f + "," + h + "," + k + "," + e + ")";
        b.globalCompositeOperation = "source-in";
        b.fillRect(0, 0, c, d);
        b.restore()
    }, Oq = {
        "10000010000010000010s": Jq,
        "10000010000010000010sm": Jq
    }, Pq = function (a, b, c) {
        var d = [!1, !1, !1, b], e = [];
        c = c ? ")>>8)" : ")/256)";
        for (var f = 0, h = 0; 4 > h; ++h) {
            for (var k = !1, n = !1, q = [], u = [], p = 0; 4 > p; ++p) {
                var t = a[f++];
                "1" == t ? (p == h ? k = !0 : n = d[p] = !0, q.push("s" + p)) : "x" == t && (n = d[p] = !0, u.push("m" + h + p + "*s" + p))
            }
            "0" != a[f++] && (n = !0, q.push("m" + h + "4"));
            u.length || q.length ? n && (d[h] |= k, p = "this[i+" + h + "]=", q.length && (p += q.join("+") + (u.length ? "+" : "")), u.length && (p += "((" + u.join("+") + c), e.push(p)) : e.push("this[i+" + h + "]=0;")
        }
        a = [];
        for (p = 0; 4 > p; ++p) d[p] && a.push("s" +
            p + "=this[i+" + p + "]");
        d = [];
        d.push("for(var i=0,l=this.length;i<l;i+=4){");
        a.length && d.push("var " + a.join() + ";");
        b && d.push("if (s3) {");
        d.push(e.join("\n"));
        d.push("}");
        b && d.push("}");
        var v = new Function("m00", "m01", "m02", "m03", "m04", "m10", "m11", "m12", "m13", "m14", "m20", "m21", "m22", "m23", "m24", "m30", "m31", "m32", "m33", "m34", d.join("\n"));
        return function (a, b, c, d, e) {
            a = a.getImageData(0, 0, c, d);
            v.apply(a.data, e);
            Jd(b, a, 0, 0)
        }
    }, Qq = function (a, b) {
        var c = !!(a[15] || a[16] || a[17] || a[19]);
        if (!a[18] && !c) return Kq;
        b = b &&
            c;
        for (var d = c = !0, e = "", f = 0; 20 > f; ++f) {
            var h = a[f], d = d && (4 == f % 5 && -16E3 < h && 16E3 > h || 4 != f % 5 && -65025 < h && 65025 > h);
            if (0 == h) e += "0"; else if (256 != h || 4 == f % 5) {
                if (e += "x", 0 > h || 255 < h) c = !1
            } else e += "1"
        }
        d && (e += "s");
        b && (e += "m");
        if (f = Oq[e]) return f;
        if (c) {
            if (Dq.test(e)) return Lq;
            if (Eq.test(e)) return Mq;
            if (Fq.test(e)) return Nq
        }
        f = Pq(e, b, d);
        return Oq[e] = f
    }, Rq = function (a, b, c, d) {
        Qq(c, d)(a.N(), (b || a).N(), a.I(), a.U(), c)
    }, Sq = function (a, b, c) {
        if (c.se()) return b.globalAlpha = c.Hl(), a;
        b = a.ta(a.I(), a.U(), !1, !1);
        Rq(a, b, c.lo(), !0);
        return b
    };
    var Tq = function (a, b, c, d, e, f, h, k, n, q) {
        for (var u = 0; u < q; ++u) {
            for (var p = 0, t = u * n * 4 + b, v = t, w = 0; w < k; ++w) p += a[v], v += 4;
            for (var B = c, w = 0; w < h; ++w) a[B] = p * f, w + k < n && (p += a[v], v += 4), B += d;
            for (; w + k + 4 <= n; w += 4) a[B] = p * f, B += d, p += a[v] - a[t], a[B] = p * f, B += d, p += a[v + 4] - a[t + 4], a[B] = p * f, B += d, p += a[v + 8] - a[t + 8], a[B] = p * f, B += d, p += a[v + 12] - a[t + 12], t += 16, v += 16;
            for (; w + k < n; ++w) a[B] = p * f, p += a[v] - a[t], t += 4, v += 4, B += d;
            for (; w < n; ++w) a[B] = p * f, p -= a[t], t += 4, B += d;
            c += e
        }
    }, Uq = function (a, b, c, d, e, f, h, k) {
        e = Math.max(a.x * e | 0, 1);
        f = Math.max(a.y * f | 0, 1);
        a = a.quality;
        if (0 < a && 1 < e * f) {
            for (var n = a & 1, q, u, p = 3, t = 2, v = 1; v < a; ++v) q = (e - n) / 2 | 0, u = e - q, Tq(b, p, t, 4, 4 * c, 1 / e, q, u, c, d), n ^= 1, q = p, p = t, t = q;
            a & 1 && (e = e - 1 | 1);
            q = (e - n) / 2 | 0;
            Tq(b, p, t, 4 * d, 4, 1 / e, q, e - q, c, d);
            q = p;
            p = t;
            t = q;
            n = a & 1;
            for (v = 1; v < a; ++v) q = (f - n) / 2 | 0, u = f - q, Tq(b, p, t, 4, 4 * d, 1 / f, q, u, d, c), n ^= 1, q = p, p = t, t = q;
            a & 1 && (f = f - 1 | 1);
            q = (f - n) / 2 | 0;
            Tq(b, p, h, 4 * c, 4, k / f, q, f - q, d, c)
        } else for (e = 3; e < c * d * 4; e += 4, h += 4) b[h] = b[e] * k
    }, Vq = function (a, b, c, d, e, f) {
        Uq(a, b, c, d, e, f, 1, 1);
        var h = a.distance;
        e = Math.round(Math.cos(a.angle) * h * e);
        f = Math.round(Math.sin(a.angle) * h *
            f);
        a = a.strength;
        a *= .5;
        for (h = 0; h < d; ++h) for (var k = 0; k < c; ++k) {
            var n = 0, q = 0;
            0 <= k + e && k + e < c && 0 <= h + f && h + f < d && (n = b[4 * ((h + f) * c + k + e) + 1]);
            0 <= k - e && k - e < c && 0 <= h - f && h - f < d && (q = b[4 * ((h - f) * c + k - e) + 1]);
            b[4 * (h * c + k) + 3] = (n - q) * a + 127.5
        }
    }, Wq = function (a, b) {
        for (var c = b.ov().data, d = a.length, e = 0; e < d; e += 4) {
            var f = 4 * a[e + 3];
            a[e + 0] = c[f + 0];
            a[e + 1] = c[f + 1];
            a[e + 2] = c[f + 2];
            a[e + 3] = c[f + 3]
        }
    };
    var Xq = function (a, b) {
        var c;
        c = b.distance;
        var d = zg(b.color), e = 2 < c ? .5 : 1, f = 20 * a.ub * e, h = 20 * a.vb * e;
        c = a.Gi(e, Math.cos(b.angle) * c * f, Math.sin(b.angle) * c * h);
        e = c.getImageData();
        if (b.Kh()) {
            Uq(b, e.data, e.width, e.height, f, h, 3, 1);
            for (var f = e.data, h = d.r, k = d.Ob, n = d.Jb, d = d.$b, q = b.strength, u = f.length, p = 0; p < u; p += 4) f[p + 0] = h, f[p + 1] = k, f[p + 2] = n, f[p + 3] = (255 - f[p + 3]) * q, f[p + 3] = f[p + 3] * d >> 8;
            c.putImageData(e)
        } else Uq(b, e.data, e.width, e.height, f, h, 3, b.strength), c.putImageData(e), d = bb && eb && 254 < d.r && 254 < d.Ob && 254 < d.Jb ? new Nc(254,
            254, 254, d.$b) : d, c.fill(d, "source-in");
        e = c.ta();
        a.Xg(e, b.da.ad, 1);
        c.release()
    };
    var Yq = function (a) {
        this.D = a
    };
    g = Yq.prototype;
    g.Dn = function (a) {
        var b = this.D, c = b.bl(), d = b.getImageData();
        Vq(a, d.data, d.width, d.height, 20 * b.ub, 20 * b.vb);
        for (var e = zg(a.highlight), f = zg(a.shadow), h = d.data, k = e.r, n = e.Ob, q = e.Jb, u = e.$b, e = f.r, p = f.Ob, t = f.Jb, v = f.$b, f = h.length, w = 2 * u, u = 255 * u, B = 2 * v, v = 255 * v, A = 0; A < f; A += 4) 127.5 < h[A + 3] ? (h[A + 0] = k, h[A + 1] = n, h[A + 2] = q, h[A + 3] = h[A + 3] * w - u >> 8) : (h[A + 0] = e, h[A + 1] = p, h[A + 2] = t, h[A + 3] = v - h[A + 3] * B >> 8);
        Jd(c.N(), d, 0, 0);
        b.Xg(c, a.da.ad, 1);
        c.hd()
    };
    g.Fn = function (a) {
        var b = this.D, c = a.quality;
        if (!(1 > c || 1 >= a.x && 1 >= a.y)) {
            var d = Math.max(20 * a.x * b.ub | 0, 1);
            a = Math.max(20 * a.y * b.vb | 0, 1);
            for (var e = b.I(), f = b.U(), h = b.getImageData(), k = h.data, n = b.createImageData().data, q = c & 1, u, p, t = Bq, v = 1; v < c; ++v) u = (d - q) / 2 | 0, p = d - u, t(k, n, 4, 4 * e, 1 / d, u, p, e, f), q ^= 1, u = k, k = n, n = u, t = Aq;
            c & 1 && (d = d - 1 | 1);
            u = (d - q) / 2 | 0;
            t(k, n, 4 * f, 4, 1 / d, u, d - u, e, f);
            u = k;
            k = n;
            n = u;
            t = Aq;
            q = c & 1;
            for (v = 1; v < c; ++v) u = (a - q) / 2 | 0, p = a - u, t(k, n, 4, 4 * f, 1 / a, u, p, f, e), q ^= 1, u = k, k = n, n = u;
            t = Gd ? Aq : Cq;
            c & 1 && (a = a - 1 | 1);
            u = (a - q) / 2 | 0;
            t(k, n, 4 * e,
                4, 1 / a, u, a - u, f, e);
            b.ix(h)
        }
    };
    g.Hn = function (a) {
        for (var b = this.D, c = [], d = 0; 20 > d; ++d) {
            var e = a.matrix[d];
            c[d] = (4 == d % 5 ? e : 256 * e) | 0
        }
        Rq(b.ta(), null, c, !1)
    };
    g.In = function (a) {
        for (var b = this.D, c = b.I(), d = b.U(), e = b.createImageData(), f = e.data, h = b.getImageData().data, k = a.divisor || 1, n = a.matrixX, q = a.matrixY, u = new Float32Array(n * q), p = 0; p < a.matrix.length; ++p) u[p] = a.matrix[p] / k;
        var k = n / 2 | 0, p = q / 2 | 0, t = a.bias, v = a.preserveAlpha, w = a.clamp;
        if (!w) var B = a.color >> 24 & 255, A = a.color >> 16 & 255, F = a.color >> 8 & 255, G = a.color & 255;
        for (var L = a = 0; a < d; ++a) for (var de = 0; de < c; ++de, L += 4) {
            for (var Xb = t, Oc = t, Pc = t, Yb = t, wq = 0, nl = 0; nl < q; ++nl) for (var xq = a + nl - p, yq = Math.max(0, Math.min(xq, d - 1)), ol = 0; ol <
            n; ++ol, ++wq) {
                var uc = u[wq], ee = de + ol - k, zq = Math.max(0, Math.min(ee, c - 1)), fe = 4 * (yq * c + zq);
                w || zq === ee && yq === xq ? v ? (Xb += uc * h[fe], Oc += uc * h[fe + 1], Pc += uc * h[fe + 2]) : (ee = h[fe + 3], Xb += uc * ee * h[fe] / 255, Oc += uc * ee * h[fe + 1] / 255, Pc += uc * ee * h[fe + 2] / 255, Yb += uc * ee) : (Xb += uc * A, Oc += uc * F, Pc += uc * G, Yb += uc * B)
            }
            v ? Yb = h[L + 3] : 0 >= Yb ? Xb = Oc = Pc = Yb = 0 : (255 < Yb && (Yb = 255), Xb = 255 * Xb / Yb, Oc = 255 * Oc / Yb, Pc = 255 * Pc / Yb);
            f[L] = Xb;
            f[L + 1] = Oc;
            f[L + 2] = Pc;
            f[L + 3] = Yb
        }
        b.putImageData(e)
    };
    g.Jn = function (a) {
        Xq(this.D, a)
    };
    g.Ln = function (a) {
        Xq(this.D, a)
    };
    g.Mn = function (a) {
        var b = this.D, c = b.bl(), d = b.getImageData();
        Vq(a, d.data, d.width, d.height, 20 * b.ub, 20 * b.vb);
        Wq(d.data, a);
        Jd(c.N(), d, 0, 0);
        b.Xg(c, a.da.ad, 1);
        c.hd()
    };
    g.Nn = function (a) {
        var b = this.D, c = 20 * b.ub, d = 20 * b.vb, e = a.distance, e = b.Gi(1, Math.cos(a.angle) * e * c, Math.sin(a.angle) * e * d), f = e.getImageData();
        Uq(a, f.data, f.width, f.height, c, d, 3, a.strength);
        Wq(f.data, a);
        e.putImageData(f);
        c = e.ta();
        b.Xg(c, a.da.ad, 1);
        e.release()
    };
    var Zq = function () {
    };
    Zq.prototype.I = function () {
        return this.cc().width
    };
    Zq.prototype.U = function () {
        return this.cc().height
    };
    Zq.prototype.dd = function (a, b, c, d, e) {
        var f = this.cc(), h = f.width, k = f.height;
        d = d || h;
        e = e || k;
        d === h && e === k ? a.drawImage(f, b, c) : a.drawImage(f, 0, 0, h, k, b, c, d, e)
    };
    Zq.prototype.hd = function () {
        return null
    };
    var $q = function (a) {
        this.Cu = a
    };
    m($q, Zq);
    var ar = function (a) {
        return new $q(Gg(a))
    };
    $q.prototype.N = function () {
        return this.Cu
    };
    $q.prototype.cc = function () {
        return this.N().canvas
    };
    $q.prototype.ta = function (a, b) {
        return ar(Fg(a, b))
    };
    var br = function (a, b) {
        this.Bo = a;
        this.gx = b
    };
    m(br, Zq);
    br.prototype.N = function () {
        return Gg(this.Bo)
    };
    br.prototype.cc = function () {
        return this.Bo
    };
    br.prototype.ta = function (a, b, c, d) {
        return this.gx.ta(a, b, c, d)
    };
    var er = function (a, b, c) {
        Ve.call(this, b, a, c);
        this.ja = null;
        this.Cc = !1;
        this.wi = [];
        this.Am = this.pm = !1;
        a !== cr && (this.ja = ar(Fg(a.width, a.height)), this.ja.N().drawImage(a.canvas, 0, 0), this.Cc = a.transparent);
        this.Cg = dr++
    }, fr;
    m(er, Ve);
    var cr = {}, dr = 0;
    g = er.prototype;
    g.ic = function (a, b, c, d) {
        this.ja || (this.ja = ar(Fg(a, b)), (this.Cc = c) || (d = (d | 4278190080) >>> 0), c = this.ja.N(), c.fillStyle = zg(d).ld(), c.fillRect(0, 0, a, b))
    };
    g.I = function () {
        return this.ja ? this.ja.I() : 0
    };
    g.U = function () {
        return this.ja ? this.ja.U() : 0
    };
    g.ta = function () {
        return this.ja
    };
    g.cc = function () {
        return this.ja.cc()
    };
    g.ao = function (a) {
        var b = this.wi;
        0 <= Ea(b, a) || b.push(a)
    };
    g.Or = function (a) {
        Ha(this.wi, a)
    };
    g.uw = function () {
        this.pm = !0
    };
    g.oy = function () {
        this.pm = !1;
        this.Am && this.fg()
    };
    g.fg = function () {
        this.Cg = dr++;
        if (this.pm) this.Am = !0; else {
            this.Am = !1;
            for (var a = 0; a < this.wi.length; ++a) this.wi[a].fr()
        }
    };
    g.il = function () {
        this.ja = null;
        this.fg()
    };
    g.yu = function (a, b) {
        return this.ja.N().createImageData(a, b)
    };
    g.Fd = function (a, b, c, d) {
        return this.ja.N().getImageData(a, b, c, d)
    };
    g.jg = function (a, b, c) {
        Jd(this.ja.N(), a, b, c);
        this.fg()
    };
    g.Bd = function (a, b, c) {
        this.ja && (a.Vi(this.ja, b || Hc, c || Sc), this.fg())
    };
    g.Vi = function (a, b, c) {
        this.ja && (a = a.N(), a.save(), a.setTransform(b.u, b.K, b.C, b.o, .05 * b.Y, .05 * b.Z), b = Sq(this.ja, a, c), b.dd(a, 0, 0, b.I(), b.U()), b.hd(this.ja), a.restore())
    };
    g.fillRect = function (a, b, c, d, e) {
        var f = this.ja.N();
        this.Cc ? 4278190080 === (e & 4278190080) || f.clearRect(a, b, c, d) : e = (e | 4278190080) >>> 0;
        0 != e && (f.fillStyle = zg(e).ld(), f.fillRect(a, b, c, d));
        this.fg()
    };
    g.$m = function (a, b, c) {
        var d = this.yu(1, 1), e = d.data;
        e[0] = c >>> 16 & 255;
        e[1] = c >>> 8 & 255;
        e[2] = c & 255;
        e[3] = this.Cc ? c >>> 24 : 255;
        this.jg(d, a, b)
    };
    g.Mx = function (a, b, c) {
        var d = this.Fd(a, b, 1, 1), e = d.data;
        e[0] = c >>> 16 & 255;
        e[1] = c >>> 8 & 255;
        e[2] = c & 255;
        this.jg(d, a, b)
    };
    g.Il = function (a, b) {
        var c = this.Fd(a, b, 1, 1).data;
        return (c[3] << 24 | c[0] << 16 | c[1] << 8 | c[2]) >>> 0
    };
    g.Av = function (a, b) {
        var c = this.Fd(a, b, 1, 1).data;
        return (c[0] << 16 | c[1] << 8 | c[2]) >>> 0
    };
    g.Cv = function (a, b, c, d) {
        if (0 >= c || 0 >= d) return [];
        a = this.Fd(a, b, c, d).data;
        b = Array(Math.floor(a.length / 4));
        for (d = c = 0; d < b.length; d++) b[d] = (a[c++] << 16 | a[c++] << 8 | a[c++] | a[c++] << 24) >>> 0;
        return b
    };
    g.Ox = function (a, b, c, d, e) {
        if (!(0 >= c || 0 >= d)) {
            var f = this.Fd(a, b, c, d), h = f.data;
            c = Math.min(e.length, c * d * 4);
            d = this.Cc ? 0 : 255;
            for (var k = 0, n = 0; k < c; k++) {
                var q = e[k];
                h[n++] = q >>> 16 & 255;
                h[n++] = q >>> 8 & 255;
                h[n++] = q & 255;
                h[n++] = (q >>> 24 | d) & 255
            }
            this.jg(f, a, b)
        }
    };
    g.Bv = function (a, b, c, d, e) {
        if (0 >= c || 0 >= d) return new Uint8Array(0);
        a = this.Fd(a, b, c, d).data;
        if (e) for (e = 0; e < a.length; e += 4) b = a[e], a[e] = a[e + 2], a[e + 2] = b; else for (e = 0; e < a.length; e += 4) b = a[e], a[e] = a[e + 3], a[e + 3] = a[e + 2], a[e + 2] = a[e + 1], a[e + 1] = b;
        return a
    };
    g.Nx = function (a, b, c, d, e, f) {
        if (!(0 >= c || 0 >= d)) {
            c = this.Fd(a, b, c, d);
            d = c.data;
            var h = 4 * Math.floor(Math.min(d.length, e.length) / 4), k = this.Cc ? 0 : 255;
            e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
            if (f) for (f = 0; f < h; f += 4) d[f] = e[f + 2], d[f + 1] = e[f + 1], d[f + 2] = e[f], d[f + 3] = e[f + 3] | k; else for (f = 0; f < h; f += 4) d[f] = e[f + 1], d[f + 1] = e[f + 2], d[f + 2] = e[f + 3], d[f + 3] = e[f] | k;
            this.jg(c, a, b)
        }
    };
    g.scroll = function (a, b) {
        if (a || b) {
            var c = 0 > a ? -a : 0, d = 0 > b ? -b : 0, e = 0 > a ? 0 : a, f = 0 > b ? 0 : b, h = this.I() - c - e, k = this.U() - d - f;
            0 < h && 0 < k && this.jg(this.Fd(c, d, h, k), e, f)
        }
    };
    g.Qo = function (a, b, c, d, e, f, h, k, n, q, u) {
        d = Math.min(d, a.I() - b, this.I() - f);
        e = Math.min(e, a.U() - c, this.U() - h);
        k && (d = Math.min(d, k.I() - n), e = Math.min(e, k.U() - q));
        if (!(0 >= d || 0 >= e)) {
            var p;
            k && k.Cc ? (p = Gg(Fg(d, e)), a.ja.dd(p, -b, -c), p.globalCompositeOperation = "destination-in", k.ja.dd(p, -n, -q), c = b = 0, a = !0) : (p = a.ja.N(), a = a.Cc);
            !a || !u && this.Cc ? Jd(this.ja.N(), p.getImageData(b, c, d, e), f, h) : this.ja.N().drawImage(p.canvas, b, c, d, e, f, h, d, e);
            this.fg()
        }
    };
    var gr = function (a, b, c, d, e) {
        if (!fr) {
            fr = [];
            for (var f = 0; 95327 > f; ++f) {
                var h = 65536 * Math.sin(f), h = h - Math.floor(h), h = 2 * h * Math.PI;
                fr.push([Math.cos(h), Math.sin(h)])
            }
        }
        a = fr[(48761 * a + 15473 * b + 16691 * e >>> 0) % 95327];
        return a[0] * c + a[1] * d
    }, hr = function (a, b, c) {
        c = 3 * c * c - 2 * c * c * c;
        return a * (1 - c) + b * c
    }, ir = function (a, b, c, d, e, f, h, k, n, q, u, p) {
        a /= e;
        b /= f;
        e = 0;
        f = 1;
        for (--q; 0 <= q; --q) {
            var t, v = a + h[q], w = b + k[q], B = n, A = Math.floor(v), F = Math.floor(w), G = A + 1, L = F + 1;
            t = v - A;
            var de = w - F, v = v - G, Xb = w - L;
            u && (A %= c, F %= d, G %= c, L %= d);
            w = gr(A, F, t, de, B);
            A = gr(A,
                L, t, Xb, B);
            F = gr(G, F, v, de, B);
            B = gr(G, L, v, Xb, B);
            t = hr(hr(w, F, t), hr(A, B, t), de);
            p || (t = Math.abs(t));
            e += t * f;
            a *= 2;
            b *= 2;
            c *= 2;
            d *= 2;
            f /= 2
        }
        return p ? .5 * e + .5 : e
    };
    er.prototype.yr = function (a, b, c, d, e, f, h, k, n) {
        c = 32 >= c ? c : 0;
        for (var q = [], u = [], p = 1 / a, t = 1 / b, v = c - 1; 0 <= v; --v) {
            var w = n[v];
            w ? (q[v] = w.x * p, u[v] = w.y * t) : (q[v] = 0, u[v] = 0);
            p *= 2;
            t *= 2
        }
        n = this.ja.N().createImageData(this.ja.I(), this.ja.U());
        p = n.data;
        t = n.width / a;
        v = n.height / b;
        if (k) for (w = k = 0; k < n.height; ++k) for (var B = 0; B < n.width; w += 4, ++B) h = 255 * ir(k, B, t, v, a, b, q, u, d, c, e, f), p[w] = h, p[w + 1] = h, p[w + 2] = h, p[w + 3] = 255; else for (w = k = 0; k < n.height; ++k) for (B = 0; B < n.width; w += 4, ++B) {
            var A = 1;
            h & 8 && (A = ir(k, B, t, v, a, b, q, u, d + 3, c, e, f));
            p[w + 3] = 255 *
                A;
            h & 1 && (p[w] = ir(k, B, t, v, a, b, q, u, d, c, e, f) / A * 255);
            h & 2 && (p[w + 1] = ir(k, B, t, v, a, b, q, u, d + 1, c, e, f) / A * 255);
            h & 4 && (p[w + 2] = ir(k, B, t, v, a, b, q, u, d + 2, c, e, f) / A * 255)
        }
        this.jg(n, 0, 0)
    };
    var jr = [null, "reflect", "repeat"], kr = [null, "linearRGB"], lr = function (a) {
        this.color = a
    };
    lr.prototype.Fc = function (a, b, c, d) {
        a = this.color.ya(a);
        a = d.apply(a);
        c.fillStyle = a.ld();
        c.fill("evenodd")
    };
    lr.prototype.ve = function () {
        return 1
    };
    var mr = function (a, b, c, d, e) {
        this.transform = a;
        this.stops = b;
        this.Ns = jr[c];
        this.focus = e
    };
    mr.prototype.Fc = function (a, b, c, d) {
        c.save();
        var e = this.transform.ya(a), e = e.Cr(16384, 16384);
        e.Fc(c);
        var f = -1, h = 1, k = this.focus.ya(a);
        if (this.Ns) {
            var n = this.Ug(b.j, b.l, e, k);
            n < f && (f = n);
            n > h && (h = n);
            n = this.Ug(b.F, b.l, e, k);
            n < f && (f = n);
            n > h && (h = n);
            n = this.Ug(b.j, b.H, e, k);
            n < f && (f = n);
            n > h && (h = n);
            n = this.Ug(b.F, b.H, e, k);
            n < f && (f = n);
            n > h && (h = n);
            h = Math.min(Math.ceil(h), 25);
            f = Math.max(Math.floor(f), -25)
        }
        this.jo(a, c, e, d, k, h, f);
        c.fill("evenodd");
        c.restore()
    };
    mr.prototype.fo = function (a, b, c, d, e) {
        var f = b, h = 1 / (c - b);
        switch (this.Ns) {
            case "reflect":
                for (f & 1 && (++f, this.Mg(a, b - f, -h, d, e)); f + 1 < c;) this.Mg(a, f - b, h, d, e), f += 2, this.Mg(a, b - f, -h, d, e);
            case "repeat":
                for (; f < c;) this.Mg(a, f - b, h, d, e), ++f;
                break;
            default:
                this.Mg(a, 0, 1, d, e)
        }
    };
    mr.prototype.Mg = function (a, b, c, d, e) {
        for (var f = this.stops, h = 0; h < f.length; h++) {
            var k = (f[h].offset.ya(d) + b) * c, n = f[h].color.ya(d), n = e.apply(n);
            if (td) try {
                a.addColorStop(k, n.ld())
            } catch (q) {
            } else a.addColorStop(k, n.ld())
        }
    };
    mr.prototype.ve = function () {
        return 1
    };
    var nr = function (a, b, c, d) {
        mr.call(this, a, b, c, d, Lh)
    };
    m(nr, mr);
    nr.prototype.Ug = function (a, b, c) {
        a = new Ec(a, b);
        a.ed(c);
        return a.x
    };
    nr.prototype.jo = function (a, b, c, d, e, f, h) {
        f |= 1;
        h = h - 1 | 1;
        c = b.createLinearGradient(h, 0, f, 0);
        this.fo(c, (h + 1) / 2, (f + 1) / 2, a, d);
        b.fillStyle = c
    };
    var or = function (a, b, c, d, e) {
        mr.call(this, a, b, c, d, e)
    };
    m(or, mr);
    or.prototype.Ug = function (a, b, c, d) {
        var e = new Ec(a, b);
        e.ed(c);
        a = e.x;
        b = e.y;
        c = d * d - 1;
        e = d * (a - d);
        a = (a - d) * (a - d) + b * b;
        return 0 != c ? (a = e * e - c * a, 0 < c ? (-e + Math.sqrt(a)) / c : (-e - Math.sqrt(a)) / c) : -.5 * a / e
    };
    or.prototype.jo = function (a, b, c, d, e, f) {
        c = b.createRadialGradient(e, 0, 0, e * (1 - f), 0, f);
        this.fo(c, 0, f, a, d);
        b.fillStyle = c
    };
    var pr = function (a, b, c) {
        this.Me = ar(a);
        this.transform = b;
        this.bu = c
    };
    pr.prototype.ve = function () {
        return 150
    };
    pr.prototype.Fc = function (a, b, c, d) {
        c.save();
        this.transform.ya(a).Fc(c);
        a = Sq(this.Me, c, d);
        this.bu ? (c.clip("evenodd"), a.dd(c, 0, 0, a.I(), a.U())) : (c.fillStyle = c.createPattern(a.cc(), "repeat"), c.fill("evenodd"));
        a.hd(this.Me);
        c.restore()
    };
    var qr = function (a, b, c, d, e, f) {
        this.width = a;
        this.miter = e;
        this.fn = b;
        this.tp = c;
        this.lw = d;
        this.flags = f
    };
    qr.prototype.kn = function (a, b, c, d, e, f, h) {
        var k = this.fn != this.tp;
        e.lineCap = k ? "butt" : this.fn;
        e.lineJoin = this.lw;
        e.miterLimit = this.miter;
        a = this.width.ya(a);
        b *= h.u + h.C;
        c *= h.K + h.o;
        h = this.flags & 4;
        var n = this.flags & 2;
        e.lineWidth = Math.max(a * (h && n ? .05 * d : n ? b : h ? c : Math.sqrt((b * b + c * c) / 2)), d);
        rr(e);
        k && (e.lineJoin = "bevel", e.beginPath(), e.lineCap = this.fn, f.Uu(e), rr(e), e.beginPath(), e.lineCap = this.tp, f.Pu(e), rr(e))
    };
    var rr = function (a) {
        a.save();
        a.setTransform(1, 0, 0, 1, 0, 0);
        a.stroke();
        a.restore()
    }, sr = function (a, b, c, d, e, f, h) {
        qr.call(this, b, c, d, e, f, h);
        this.color = a
    };
    m(sr, qr);
    sr.prototype.ko = function (a, b, c, d, e, f, h, k, n, q) {
        b = this.color.ya(a);
        h.strokeStyle = q.apply(b).ld();
        this.kn(a, d, e, f, h, k, n)
    };
    sr.prototype.ve = function () {
        return 2
    };
    var tr = function (a, b, c, d, e, f, h) {
        qr.call(this, b, c, d, e, f, h);
        this.fill = a
    };
    m(tr, qr);
    tr.prototype.ko = function (a, b, c, d, e, f, h, k, n, q) {
        h.save();
        var u = b.eb(n);
        u.Hh(c);
        u.scale(d, e);
        u.Ff();
        if (!u.Dh()) {
            var p = Fg(u.width(), u.height()), t = Gg(p);
            t.setTransform(n.u * d, n.K * e, n.C * d, n.o * e, n.Y * d - u.j, n.Z * e - u.l);
            t.beginPath();
            k.nl(t);
            t.strokeStyle = "rgb(0,0,0)";
            this.kn(a, d, e, f, t, k, n);
            t.globalCompositeOperation = "source-in";
            t.save();
            t.setTransform(1, 0, 0, 1, 0, 0);
            t.beginPath();
            t.rect(0, 0, u.width(), u.height());
            t.restore();
            this.fill.Fc(a, b, t, q);
            h.setTransform(1, 0, 0, 1, 0, 0);
            h.drawImage(p, u.j - c.j * d, u.l - c.l * e);
            h.restore()
        }
    };
    tr.prototype.ve = function () {
        return 2 * this.fill.ve()
    };
    var ur = function (a, b, c, d) {
        c = l(c) ? c : !0;
        d = l(d) ? d : 4294967295;
        if (!("__swiffy_d" in this)) {
            var e = new er(cr, r.i);
            e.ic(a, b, c, d);
            this.__swiffy_d = e
        }
    };
    C(ur, "BitmapData", Ri);
    var vr = function (a) {
        return a.__swiffy_d
    };
    Object.defineProperty(ur, "__swiffy_override", {
        value: function (a, b, c, d) {
            return 8191 >= a && 8191 >= b && 16777215 >= a * b ? new ur(a, b, c, d) : void 0
        }
    });
    Object.defineProperty(ur.prototype, "width", {
        get: function () {
            return vr(this).I()
        }
    });
    Object.defineProperty(ur.prototype, "height", {
        get: function () {
            return vr(this).U()
        }
    });
    Object.defineProperty(ur.prototype, "rectangle", {
        get: function () {
            var a = vr(this);
            return new Zi(0, 0, a.I(), a.U())
        }
    });
    Object.defineProperty(ur.prototype, "transparent", {
        get: function () {
            return vr(this).Cc
        }
    });
    ur.loadBitmap = function (a) {
        var b = Ti[a] || ur, c = Object.create(b.prototype), d = r.i;
        (a = d.Cl(a, wr)) && (c.__swiffy_d = new er(a, d, c));
        b.call(c);
        return c
    };
    ur.prototype.copyPixels = function (a, b, c, d, e, f) {
        a && b && c && (e = e || b, vr(this).Qo(vr(a), b.x, b.y, b.width, b.height, c.x, c.y, d ? vr(d) : null, e.x, e.y, !!f))
    };
    ur.prototype.dispose = function () {
        vr(this).il()
    };
    ur.prototype.fillRect = function (a, b) {
        a && vr(this).fillRect(a.x, a.y, a.width, a.height, b)
    };
    ur.prototype.getPixel = function (a, b) {
        return vr(this).Il(a, b) & 16777215
    };
    ur.prototype.getPixel32 = function (a, b) {
        return vr(this).Il(a, b)
    };
    ur.prototype.scroll = function (a, b) {
        vr(this).scroll(a, b)
    };
    ur.prototype.setPixel = function (a, b, c) {
        vr(this).$m(a, b, c | 4278190080)
    };
    ur.prototype.setPixel32 = function (a, b, c) {
        vr(this).$m(a, b, c)
    };
    D(ur, null, 3);
    ur.prototype.draw = function (a, b, c) {
        (a = a && a.__swiffy_d) && a.Vi && this.__swiffy_d.Bd(a, b && (b instanceof Yi ? bi(b) : Hc), c && (c instanceof Ai ? Vh(c) : Sc))
    };
    ur.prototype.perlinNoise = function (a, b, c, d, e, f, h, k, n) {
        var q = r;
        a = q.Hb(a);
        b = q.Hb(b);
        c = q.Hb(c) >>> 0;
        d = q.Hb(d) | 0;
        e = q.Bg(e);
        f = q.Bg(f);
        h = null != h ? q.Hb(h) | 0 : 7;
        k = q.Bg(k);
        n = fa(n) ? n : [];
        this.__swiffy_d.yr(a, b, c, d, e, f, h, k, n)
    };
    var X = function (a, b, c, d) {
        a |= 0;
        b |= 0;
        c = !l(c) || !!c;
        d = y(d, 4294967295) >>> 0;
        if (!(8191 >= a && 8191 >= b && 16777215 >= a * b)) throw H(2015, "BitmapData");
        this.__swiffy_d.ic(a, b, c, d)
    }, aq = N(X, "flash.display.BitmapData", Dk, [hm]);
    Object.defineProperty(X.prototype, "width", {
        get: function () {
            return this.__swiffy_d.I()
        }
    });
    Object.defineProperty(X.prototype, "height", {
        get: function () {
            return this.__swiffy_d.U()
        }
    });
    Object.defineProperty(X.prototype, "rect", {
        get: function () {
            return new Pn(0, 0, this.__swiffy_d.I(), this.__swiffy_d.U())
        }
    });
    Object.defineProperty(X.prototype, "transparent", {
        get: function () {
            return this.__swiffy_d.Cc
        }
    });
    X.prototype.applyFilter = function () {
        Q(this, "applyFilter")
    };
    X.prototype.clone = function () {
        Q(this, "clone");
        return null
    };
    X.prototype.colorTransform = function (a, b) {
        O(a, Qn);
        O(b, Kn);
        Q(this, "colorTransform")
    };
    X.prototype.compare = function (a) {
        O(a, aq);
        Q(this, "compare");
        return 0
    };
    X.prototype.copyChannel = function (a, b, c) {
        O(a, aq);
        O(b, Qn);
        O(c, Mn);
        Q(this, "copyChannel")
    };
    X.prototype.copyPixels = function (a, b, c, d, e, f) {
        a = O(a, aq);
        b = O(b, Qn);
        c = O(c, Mn);
        d = O(d, aq);
        e = O(e, Mn);
        this.__swiffy_d.Qo(a.__swiffy_d, b.x, b.y, b.width, b.height, c.x, c.y, d ? d.__swiffy_d : null, (e || b).x, (e || b).y, !!f)
    };
    X.prototype.copyPixelsToByteArray = function (a, b) {
        a = O(a, Qn);
        b = O(b, uo);
        var c = this.__swiffy_d.Bv(a.x, a.y, a.width, a.height, b.endian == fq.LITTLE_ENDIAN), d = c.byteLength, e = void 0 === d;
        e && (d = c.length);
        if (0 != d) {
            var f = kq(b, d);
            if (e) for (e = 0; e < d; ++e) f[e] = c[e]; else f.set(new Uint8Array(c.buffer, c.byteOffset, c.byteLength))
        }
    };
    X.prototype.dispose = function () {
        this.__swiffy_d.il()
    };
    X.prototype.draw = function (a, b, c, d, e) {
        a = O(a, hm.m);
        b = O(b, Vn);
        c = O(c, Kn);
        O(e, Qn);
        a = a && a.__swiffy_d;
        if (!a || !a.Vi) throw H(2005, 0, "IBitmapDrawable");
        this.__swiffy_d.Bd(a, b && bi(b), c && Vh(c))
    };
    X.prototype.drawWithQuality = function (a, b, c, d, e) {
        O(a, hm.m);
        O(b, Vn);
        O(c, Kn);
        O(e, Qn);
        Q(this, "drawWithQuality")
    };
    X.prototype.encode = function (a, b, c) {
        ul(a, "rectangle");
        O(a, Qn);
        ul(b, "compressor");
        O(c, uo);
        Q(this, "encode");
        return new W
    };
    X.prototype.fillRect = function (a, b) {
        a = O(a, Qn);
        this.__swiffy_d.fillRect(a.x, a.y, a.width, a.height, b >>> 0)
    };
    X.prototype.floodFill = function () {
        Q(this, "floodFill")
    };
    X.prototype.generateFilterRect = function (a, b) {
        O(a, Qn);
        O(b, sn);
        Q(this, "generateFilterRect");
        return new Pn
    };
    X.prototype.getColorBoundsRect = function () {
        Q(this, "getColorBoundsRect");
        return new Pn
    };
    X.prototype.getPixel = function (a, b) {
        return this.__swiffy_d.Av(a | 0, b | 0)
    };
    X.prototype.getPixel32 = function (a, b) {
        return this.__swiffy_d.Il(a | 0, b | 0)
    };
    X.prototype.getPixels = function (a) {
        var b = new W;
        this.copyPixelsToByteArray(a, b);
        return b
    };
    X.prototype.getVector = function (a) {
        a = O(a, Qn);
        a = this.__swiffy_d.Cv(a.x, a.y, a.width, a.height);
        return Mp(Up, a)
    };
    X.prototype.histogram = function (a) {
        O(a, Qn);
        Q(this, "histogram");
        return Mp(Rp(Vp, !1, !1))
    };
    X.prototype.hitTest = function (a, b, c, d) {
        ul(a, "firstPoint");
        O(a, Mn);
        O(d, Mn);
        Q(this, "hitTest");
        return !1
    };
    X.prototype.lock = function () {
        Q(this, "lock");
        this.__swiffy_d.uw()
    };
    X.prototype.merge = function (a, b, c) {
        O(a, aq);
        O(b, Qn);
        O(c, Mn);
        Q(this, "merge")
    };
    X.prototype.noise = function () {
        Q(this, "noise")
    };
    X.prototype.paletteMap = function (a, b, c, d, e, f, h) {
        O(a, aq);
        O(b, Qn);
        O(c, Mn);
        O(d, Array);
        O(e, Array);
        O(f, Array);
        O(h, Array);
        Q(this, "paletteMap")
    };
    X.prototype.perlinNoise = function (a, b, c, d, e, f, h, k, n) {
        a = +a;
        b = +b;
        c >>>= 0;
        d |= 0;
        e = !!e;
        f = !!f;
        h = y(h, 7) >>> 0;
        k = !!k;
        n = O(n, Array) || [];
        this.__swiffy_d.yr(a, b, c, d, e, f, h, k, n)
    };
    X.prototype.pixelDissolve = function (a, b, c) {
        O(a, aq);
        O(b, Qn);
        O(c, Mn);
        Q(this, "pixelDissolve");
        return 0
    };
    X.prototype.scroll = function (a, b) {
        this.__swiffy_d.scroll(a | 0, b | 0)
    };
    X.prototype.setPixel = function (a, b, c) {
        this.__swiffy_d.Mx(a | 0, b | 0, c >>> 0)
    };
    X.prototype.setPixel32 = function (a, b, c) {
        this.__swiffy_d.$m(a | 0, b | 0, c >>> 0)
    };
    X.prototype.setPixels = function (a, b) {
        a = O(a, Qn);
        b = O(b, uo);
        var c = a.width, d = a.height, e = c * d * 4, f = x(b), h = f.position;
        e + h > f.G.byteLength && (e = f.G.byteLength - h, 0 >= e && (h = 0));
        h = new Uint8Array(f.G.buffer, h, e);
        f.position += e;
        this.__swiffy_d.Nx(a.x, a.y, c, d, h, b.endian == fq.LITTLE_ENDIAN)
    };
    X.prototype.setVector = function (a, b) {
        a = O(a, Qn);
        b = O(b, Up);
        this.__swiffy_d.Ox(a.x, a.y, a.width, a.height, x(b))
    };
    X.prototype.threshold = function (a, b, c) {
        O(a, aq);
        O(b, Qn);
        O(c, Mn);
        Q(this, "threshold");
        return 0
    };
    X.prototype.unlock = function (a) {
        O(a, Qn);
        this.__swiffy_d.oy()
    };
    Sk(X, function (a, b) {
        return new er(cr, a, b)
    });
    var xr = function (a, b) {
        this.Kt = a;
        this.Jt = b;
        this.te = {}
    }, yr = function (a, b, c) {
        this.gd = a;
        this.Ni = b;
        this.size = c;
        this.tn = this.height = this.width = 0;
        this.next = null
    };
    g = yr.prototype;
    g.N = function () {
        return this.Ni
    };
    g.cc = function () {
        return this.Ni.canvas
    };
    g.I = function () {
        return this.width
    };
    g.U = function () {
        return this.height
    };
    g.dd = function (a, b, c, d, e) {
        d = d || this.width;
        e = e || this.height;
        a.drawImage(this.cc(), 0, 0, this.width, this.height, b, c, d, e)
    };
    g.hd = function (a) {
        if (a === this) return null;
        a = this.gd;
        ++this.tn;
        this.N().restore();
        this.next = a.te[this.size] || null;
        a.te[this.size] = this;
        return null
    };
    g.ta = function (a, b, c, d) {
        return this.gd.ta(a, b, c, d)
    };
    g.vt = function (a, b) {
        this.width = a;
        this.height = b
    };
    var zr = function (a, b) {
        if (1 == a || a == b) return a;
        var c;
        if (a > b) c = b + 10 * Math.ceil((a - b) / 10); else {
            c = b;
            for (var d = Math.ceil(.5 * c); d >= a;) c = d, d = Math.ceil(.5 * c)
        }
        return c
    };
    xr.prototype.ta = function (a, b, c, d) {
        var e = zr(a, this.Kt), f = zr(b, this.Jt), h = "" + e + "x" + f, k = this.te[h];
        k ? (this.te[h] = k.next, h = k.N(), h.save(), (0 == c || bb && eb) && h.clearRect(0, 0, e, f)) : (k = new yr(this, Gg(Fg(e, f)), h), k.N().save());
        k.vt(a, b, d);
        return k
    };
    xr.prototype.Di = function () {
        var a, b, c, d = Object.keys(this.te);
        for (c = 0; c < d.length; ++c) {
            b = d[c];
            var e = null;
            for (a = this.te[b]; a; a = a.next) a.tn ? (a.tn = 0, e = a) : e ? e.next = a.next : this.te[b] = a.next
        }
    };
    var Ar = function (a, b, c, d, e, f, h, k) {
        this.Vd = c;
        this.quality = d;
        this.Qa = b.clone();
        this.tb = a;
        this.ub = this.I() / this.Qa.width();
        this.vb = this.U() / this.Qa.height();
        this.zg = f || null;
        this.flags = e || 0;
        this.Te = h || null;
        this.Pj = k || null
    };
    g = Ar.prototype;
    g.Ld = function () {
        return !!(this.flags & 1)
    };
    g.Lq = function () {
        return !!(this.flags & 2)
    };
    g.$v = function () {
        return !!(this.flags & 4)
    };
    g.Wf = function () {
        return !this.Ld() || !this.Lq() && this.$v()
    };
    g.N = function () {
        return this.tb.N()
    };
    g.jq = function () {
        return Mc(this.ub, 0, 0, this.vb, -this.Kc(), -this.Lc())
    };
    g.ai = function (a) {
        var b = this.ub, c = this.vb;
        this.N().setTransform(a.u * b, a.K * c, a.C * b, a.o * c, a.Y * b - this.Kc(), a.Z * c - this.Lc())
    };
    g.fk = function () {
        this.N().setTransform(1, 0, 0, 1, 0, 0)
    };
    g.clear = function (a) {
        a ? this.fill(a, "copy") : (this.fk(), this.N().clearRect(0, 0, this.I(), this.U()))
    };
    g.fill = function (a, b) {
        this.fk();
        var c = this.N();
        c.globalCompositeOperation = b || "source-over";
        c.fillStyle = a.ld();
        c.fillRect(0, 0, this.I(), this.U());
        c.globalCompositeOperation = "source-over"
    };
    g.I = function () {
        return this.tb.I()
    };
    g.U = function () {
        return this.tb.U()
    };
    g.mj = function () {
        return new Tc(0, 0, this.I(), this.U())
    };
    g.ta = function () {
        return this.tb
    };
    g.cc = function () {
        return this.tb.cc()
    };
    g.Kc = function () {
        return this.Qa.j * this.ub
    };
    g.Lc = function () {
        return this.Qa.l * this.vb
    };
    g.Os = function (a, b) {
        b = y(b, this.flags);
        return this.Ki(a, !1, b | 1, 1)
    };
    g.io = function () {
        var a = this.mj();
        a.translate(this.Kc(), this.Lc());
        return this.Ki(a, !1, this.Te.flags, 1, this.Te)
    };
    g.pl = function () {
        this.Lo();
        this.Te.release();
        this.release();
        return this.Pj
    };
    g.Lo = function () {
        this.Pj.au(this.Te, this)
    };
    g.au = function (a, b) {
        b.Zq(a, 1);
        this.Ui(b)
    };
    g.Ki = function (a, b, c, d, e) {
        c = y(c, this.flags);
        d = d || this.quality;
        var f = a.width(), h = a.height();
        a = a.clone();
        a.scale(1 / this.ub, 1 / this.vb);
        f = Math.ceil(f * d);
        h = Math.ceil(h * d);
        b = this.tb.ta(f, h, !1, b);
        return new Ar(b, a, this.Vd, d, c, this.zg, this, e)
    };
    g.release = function () {
        return this.tb = this.tb.hd()
    };
    g.Ik = function (a) {
        var b = this.ub, c = this.vb, d = this.Qa.clone();
        d.zt(Br(a));
        d.Hh(Cr(a));
        d.scale(b, c);
        d.Ff();
        return d
    };
    g.Ui = function (a) {
        this.qp(a.ta(), a.ub, a.vb, a.Kc(), a.Lc())
    };
    g.qp = function (a, b, c, d, e) {
        this.fk();
        var f = this.N();
        b = this.ub / b;
        c = this.vb / c;
        a.dd(f, d * b - this.Kc(), e * c - this.Lc(), a.I() * b, a.U() * c)
    };
    g.Ot = function (a, b, c) {
        var d = this.Pj;
        if (1 >= b || !d) this.po(a, b, c); else {
            var e = this.tb.N();
            this.Lo();
            e.globalCompositeOperation = "copy";
            this.Ui(a);
            this.Zq(this.Te, 1);
            d.po(this, b, c);
            this.clear();
            e.globalCompositeOperation = "source-over"
        }
    };
    g.Zq = function (a, b) {
        var c = this.tb.N();
        c.globalAlpha = b;
        c.globalCompositeOperation = "destination-in";
        this.Ui(a);
        c.globalAlpha = 1;
        c.globalCompositeOperation = "source-over"
    };
    g.po = function (a, b, c) {
        var d = this.tb.N(), e = Dr(b);
        d.globalCompositeOperation = e;
        d.globalCompositeOperation == e ? (d.globalAlpha = c, this.Ui(a), d.globalCompositeOperation = "source-over") : this.Yw(a, b, c);
        d.globalAlpha = 1
    };
    g.Yw = function (a, b, c) {
        var d = a.mj(), e = a.Kc() - this.Kc(), f = a.Lc() - this.Lc();
        d.translate(e, f);
        d.Hh(this.mj());
        var e = d.j, f = d.l, h = d.width(), k = d.height();
        if (!(0 >= h || 0 >= k)) {
            var d = this.tb.N(), n = a.tb.N().getImageData(e - (a.Kc() - this.Kc()), f - (a.Lc() - this.Lc()), h, k).data, e = Math.round(e), f = Math.round(f), h = d.getImageData(e, f, h, k);
            vq(n, h.data, b, c);
            a.quality != this.quality ? (b = a.bl(), Jd(b.N(), h, 0, 0), d.globalCompositeOperation = "source-over", this.qp(b, a.ub, a.vb, a.Kc(), a.Lc()), b.hd()) : Jd(d, h, e, f)
        }
    };
    var Dr = function (a) {
        switch (a) {
            case 2:
            case 4:
            case 5:
            case 3:
            case 12:
            case 6:
                return wc[a];
            case 13:
                return "hard-light";
            case 7:
                return "lighter";
            case 11:
                return "destination-out";
            case 10:
            case 8:
            case 9:
                return "";
            default:
                return "source-over"
        }
    };
    g = Ar.prototype;
    g.getImageData = function () {
        return this.N().getImageData(0, 0, this.I(), this.U())
    };
    g.createImageData = function () {
        return this.N().createImageData(this.I(), this.U())
    };
    g.putImageData = function (a) {
        Jd(this.N(), a, 0, 0)
    };
    g.ix = function (a) {
        this.N().putImageData(a, 0, 0)
    };
    g.Xg = function (a, b, c, d, e) {
        var f = this.N();
        f.save();
        f.setTransform(1, 0, 0, 1, 0, 0);
        f.globalAlpha = c;
        f.globalCompositeOperation = b;
        a.dd(f, d || 0, e || 0, this.I(), this.U());
        f.restore()
    };
    g.Gi = function (a, b, c) {
        a = a || 1;
        var d = this.mj();
        d.scale(a, a);
        d.Ff();
        d = this.tb.ta(d.width(), d.height(), !0, !1);
        a = new Ar(d, this.Qa, this.Vd, a, this.flags, this.zg, this.Te);
        a.Xg(this.ta(), "copy", 1, b, c);
        return a
    };
    g.bl = function () {
        return this.tb.ta(this.I(), this.U(), !1, !1)
    };
    g.uy = function (a) {
        return a === this.zg ? this : new Ar(this.ta(), this.Qa, this.Vd, this.quality, this.flags, a, this.Te, this.Pj)
    };
    g.Sv = function (a) {
        return this.Qa.ur(a)
    };
    var $i = function (a, b, c) {
        Ve.call(this, a, b, c);
        this.depth = this.td = void 0;
        this.Qe = "";
        this.lc = this.nextSibling = this.wa = null;
        this.Nb = [];
        this.Dc = !0;
        this.be = 0;
        this.Ri = void 0;
        this.Sb = !1;
        this.fe = Hc;
        this.vf = null;
        this.jb = Sc;
        this.Gg = this.uk = null;
        this.im = Sc;
        this.Qa = this.Hf = this.qd = this.Eh = this.dj = null;
        this.rd = 0;
        this.qo = !1;
        this.Ta = this.Bf = null;
        this.Mj = !1;
        this.Sc = null;
        this.jc = !1;
        this.renderer = null;
        this.Cg = ++Er;
        this.zo = !1;
        this.Qd = null;
        this.qc = 60817408;
        this.ib = new Se;
        this.lh = [a.qg, 0, 0]
    };
    m($i, Ve);
    var Er = 0, Fr = function (a) {
        if (!a.Gg) return !1;
        a.Gg = null;
        a.th(Fr);
        return !1
    };
    g = $i.prototype;
    g.dt = function () {
        if (!this.Gg) {
            var a = this.wa, a = a ? a.fc().Tv(this.jb) : this.jb;
            this.Uf() ? (this.im = a, this.Gg = Sc) : (this.im = Sc, this.Gg = a)
        }
        return this.Gg
    };
    g.fc = function () {
        return this.dt()
    };
    g.Xp = function () {
        this.dt();
        return this.im
    };
    g.$ = function () {
        if (!this.uk) {
            var a = this.wa || this.Ta && this.Ta.wa;
            this.uk = a ? this.fe.multiply(a.$()) : this.fe
        }
        return this.uk
    };
    g.th = function () {
        return !1
    };
    g.Ip = function () {
        return !1
    };
    g.map = function (a) {
        return a(this)
    };
    g.Ea = function () {
        this.qo = !0
    };
    g.ro = function () {
        return !!this.qo
    };
    g.setTransform = function (a, b) {
        if (b || !this.fe.oa(a)) this.P(2), this.fe = a, this.vf = null, this.Ih()
    };
    g.dc = function () {
        this.vf || (this.vf = this.fe.Du());
        return this.vf
    };
    g.mf = function () {
        var a = this.vf;
        if (a) {
            var b = Math.cos(a.angle), c = Math.sin(a.angle);
            this.setTransform(Mc(a.od * b, -a.od * c, a.od * b * a.C + a.af * c * a.o, a.af * b * a.o - a.od * c * a.C, this.fe.Y, this.fe.Z));
            this.vf = a
        }
    };
    g.I = function () {
        var a = ao(this), a = a.eb(this.ua());
        return a.width() / 20
    };
    g.$h = function (a) {
        if (0 <= a) {
            var b = this.I(), c = this.ua();
            0 == b ? (b = ao(this).width() / 20, 0 == b && (b = 1), this.setTransform(Mc(a / b, c.K, 0, c.o, c.Y, c.Z))) : (0 == a && (a = 1 / 1024), this.setTransform(c.Br(a / b, 1).Tn(c.Y, c.Z)))
        }
    };
    g.U = function () {
        var a = ao(this), a = a.eb(this.ua());
        return a.height() / 20
    };
    g.Yh = function (a) {
        if (0 <= a) {
            var b = this.U(), c = this.ua();
            0 == b ? (b = ao(this).height() / 20, 0 == b && (b = 1), this.setTransform(Mc(c.u, 0, c.C, a / b, c.Y, c.Z))) : (0 == a && (a = 1 / 1024), this.setTransform(c.Br(1, a / b).Tn(c.Y, c.Z)))
        }
    };
    g.Ih = function () {
        this.Ta ? this.Ta.qb() : this.wa && this.wa.qb();
        Gr(this)
    };
    var Gr = function (a) {
        a.uk = null;
        a.Eh = null;
        a.Qa = null;
        a.th(Gr);
        a.Ip(Gr);
        return !1
    };
    g = $i.prototype;
    g.qb = function () {
        for (var a = this; a; a = a.wa) a.dj = null, a.qd = null, a.Eh = null, a.Qa = null
    };
    g.ua = function () {
        return this.fe
    };
    g.Pl = function () {
        return l(this.td)
    };
    g.Xm = function (a) {
        this.td != a && (this.P(0), this.td = a)
    };
    g.Zl = function (a, b) {
        var c = !1;
        if (l(b)) c = this.lh[b] > a; else for (var d = 0; !c && d < this.lh.length; d++) c = this.lh[d] > a;
        return c
    };
    g.Yv = function (a) {
        return this.Zl(this.i.qg - 1, a)
    };
    g.P = function (a) {
        this.lh[a] < this.i.qg && (this.lh[a] = this.i.qg, this.Ta ? this.Ta.P(0) : this.wa && this.wa.P(1))
    };
    g.Ok = function (a) {
        var b = a != this.be;
        this.be = a;
        return b
    };
    g.ik = function (a) {
        this.Ok(a)
    };
    g.Ia = function () {
        this.Ri = !0;
        this.Ta && this.Ta.Ve(null);
        this.i.dw(this) && this.i.qk();
        this.i.ca().jr(this)
    };
    g.he = function () {
    };
    g.Fb = function (a, b) {
        if (b || !this.jb.oa(a)) this.P(2), this.jb = a, Fr(this)
    };
    g.Zm = function (a) {
        a != this.Uf() && Fr(this)
    };
    g.tg = function (a) {
        var b = this.rd, c = this.Uf();
        this.rd = a | 0;
        b != this.rd && (this.P(2), this.Zm(c))
    };
    g.Ve = function (a) {
        if (this.Bf != a) {
            this.P(0);
            var b = this.Bf;
            this.Ta && this.Ta.Ve(null);
            b && (b.P(0), b.Ta = null, b.Hf = null, b.getParent() ? b.getParent().P(1) : b.Ih());
            a && (a.P(0), a.Ve(null), a.Xm(void 0), a.Ta && a.Ta.Ve(null), a.Ta = this, a.Hf = null, a.getParent() || a.Ih());
            this.Bf = a
        }
    };
    g.gt = function (a) {
        for (var b = 0; b < this.Nb.length; ++b) this.Nb[b].accept(a)
    };
    g.ug = function (a) {
        if (this.Nb != a && (0 < this.Nb.length || 0 < a.length)) {
            var b = this.Uf(), c = this.Nb;
            this.Nb = [];
            for (var d = !1, e = 0; e < a.length; e++) e >= c.length || !c[e].oa(a[e]) ? (d = !0, this.Nb.push(a[e].vd())) : this.Nb.push(c[e]);
            if (d || a.length != c.length) for (this.P(0), this.Zm(b), this.Hf = null, a = this; a; a = a.wa) a.Qa = null
        }
    };
    g.Gb = function (a) {
        a = String(a);
        a != this.Qe && this.wa && this.wa.Nk(this, a);
        this.Qe = a
    };
    g.getName = function () {
        return this.Qe
    };
    g.vg = function (a) {
        var b = this.wa;
        b !== a && (this.P(2), b && (b.P(0), b.P(1)), a && (a.P(0), a.P(1)), this.wa = a)
    };
    g.getParent = function () {
        return this.wa
    };
    g.Op = function () {
        for (var a = [], b = this; b; b = b.getParent()) a.push(b);
        return a
    };
    g.gw = function () {
        return this.i.W.contains(this)
    };
    g.rj = function () {
        for (var a = "", b = this; b && b.getName();) a = "." + b.getName() + a, b = b.getParent();
        b && b.getParent() == b.i.W && (a = "_level" + (b.depth - -16384) + a);
        return a
    };
    g.El = function () {
        return this.Qd ? this.Qd : this.getParent() && this.getParent().El() || this.i.ca().Of()
    };
    g.vs = function (a) {
        this.Qd = a
    };
    g.Zx = function () {
        return this.Dc && this.Xp().qm() && this.$().qm()
    };
    g.lk = function (a) {
        this.Dc != a && (this.P(0), this.Dc = a)
    };
    g.pa = function () {
        return !1
    };
    g.Xv = function () {
        return !1 === this.Ri
    };
    g.Md = function () {
        return !0 === this.Ri
    };
    g.ph = function (a) {
        this.qc |= 1 << a
    };
    g.Lu = function (a) {
        this.qc &= ~(1 << a)
    };
    g.fireEvent = function (a, b) {
        var c = !1;
        !this.jc && this.qc & 1 << a.type && ((c = this.xl(a.type)) && c.sound && this.i.ec().Qs(c.sound, this.ib), c = this.i.ca().fireEvent(this, c, a, b));
        return c
    };
    g.xl = function () {
        return null
    };
    g.Ov = function (a) {
        return !!this.xl(a, !0)
    };
    var ao = function (a) {
        a.dj || (a.dj = a.pf());
        return a.dj
    }, bo = function (a) {
        return a.of()
    }, Hr = function (a) {
        a.qd || (a.qd = a.re());
        return a.qd
    }, wh = function (a) {
        a.Eh || (a.Eh = a.Jk());
        return a.Eh
    }, Br = function (a) {
        if (!a.Hf) {
            var b = new Tc(0, 0, 0, 0);
            if (!a.td && !a.Ta) for (var c = 0; c < a.Nb.length; c++) b.add(a.Nb[c].ta());
            a.Hf = b
        }
        return a.Hf
    }, Cr = function (a) {
        if (!a.Qa) {
            var b = a.Kk();
            b.add(Br(a));
            a.Qa = b
        }
        return a.Qa
    };
    g = $i.prototype;
    g.of = function () {
        return ao(this)
    };
    g.re = function () {
        return ao(this)
    };
    g.Jk = function () {
        return ao(this).eb(this.$())
    };
    g.Kk = function () {
        return Hr(this).eb(this.$())
    };
    g.iq = function () {
        var a = ao(this).eb(this.$());
        a.scale(.05, .05);
        a.Ff();
        return a
    };
    g.Ro = function () {
    };
    g.ka = function (a, b) {
        this.Ri = !1;
        $i.J.ka.call(this, a, b)
    };
    g.xg = function (a) {
        this.Sc = a
    };
    g.si = function () {
        return this.i.ca().si(this)
    };
    g.ws = function (a) {
        this.Mj = a
    };
    g.contains = function (a) {
        for (; a && a != this;) a = a.getParent();
        return a == this
    };
    g.Th = function () {
        this.renderer && this.renderer.Ia();
        this.renderer = null;
        this.th(function (a) {
            a.Th();
            return !1
        })
    };
    g.Uf = function () {
        return !!this.rd || this.Yl()
    };
    g.Wm = function (a) {
        var b = this.Uf();
        this.zo = a;
        this.Zm(b)
    };
    g.Yl = function () {
        return this.zo || 0 < this.Nb.length
    };
    var Ir = {mo: 24, tr: 21}, Jr = {mo: 25, tr: 23};
    $i.prototype.If = function (a, b, c) {
        c != this.wa && this.Xv() && (this.fireEvent(new Dc(a.mo), !0), this.gw() && this.map(function (c) {
            c.fireEvent(new Dc(a.tr), !0);
            return b
        }))
    };
    $i.prototype.Vi = function (a, b, c) {
        var d = a.N();
        d.save();
        var e = Kr.pj(this), f = new Tc(0, 0, 20 * a.I(), 20 * a.U()), h = new Ar(a, f, 1, 1);
        this.detach(b, c, function () {
            e.Bd(h)
        });
        d.restore()
    };
    $i.prototype.detach = function (a, b, c) {
        var d = this.wa, e = this.ua(), f = this.jb;
        this.wa = null;
        this.setTransform(a, !!d);
        this.Fb(b, !!d);
        c();
        this.setTransform(e, !!d);
        this.Fb(f, !!d);
        this.wa = d
    };
    $i.prototype.aj = function () {
    };
    var Lr = function (a) {
        a.aj();
        return !1
    };
    var Mr = function (a, b, c) {
        if (a) for (var d in a) {
            var e = a[d];
            if (!("$" == d.charAt(0) || rd(d) || e && e.__swiffy_d instanceof $i)) {
                fa(e) || (e = [e]);
                for (var f = 0; f < e.length; ++f) b.call(c, d, String(e[f]))
            }
        }
    }, Go = function (a, b) {
        var c;
        ha(a) ? c = a : (c = "", Mr(a, function (a, b) {
            c && (c += "&");
            c += encodeURIComponent(a);
            b && (c += "=" + encodeURIComponent(b))
        }));
        if (!b) return c;
        if (!c) return b;
        var d = b.indexOf("?") + 1;
        return b = d ? b.slice(0, d) + c + "&" + b.slice(d) : b + ("?" + c)
    }, Nr = function (a) {
        a = a.replace(/\+/g, " ");
        try {
            return decodeURIComponent(a)
        } catch (h) {
            for (var b =
                "", c = 0, d = c; d < a.length; c = d) {
                d = a.indexOf("%", c);
                if (0 > d) break;
                for (var b = b + a.substring(c, d), e = c = 0; d < a.length;) {
                    var f = a.charCodeAt(d++);
                    if (37 === f) {
                        if (!/[0-9a-fA-F]/.test(a.charAt(d)) || !/[0-9a-fA-F]/.test(a.charAt(++d))) if (0 < e) continue; else break;
                        f = parseInt(a.substr(++d - 2, 2), 16)
                    }
                    if (0 < e) c = (c << 6) + (f & 63), e--; else if (192 === (f & 192)) {
                        for (; f & 64;) f <<= 1, e++;
                        c = (f & 127) >> e
                    } else c = f;
                    if (0 === e) {
                        b += String.fromCharCode(c);
                        break
                    }
                }
            }
            return b + a.substring(c)
        }
    }, Or = function (a, b) {
        var c = a.indexOf("?"), d = a.indexOf("#");
        0 <= c && (0 >
            d || d > c) && Fo(a.substring(c + 1), b)
    }, Fo = function (a, b) {
        for (var c = a.split("&"), d = 0; d < c.length; d++) {
            var e = c[d], f = void 0, h = e.indexOf("=");
            0 <= h && (f = Nr(e.substring(h + 1)), e = e.substring(0, h));
            b(Nr(e), f)
        }
    }, Pr = function (a) {
        return function (b, c) {
            b && (a[b] = c || "")
        }
    };
    var Qr = function (a, b, c) {
        $i.call(this, b, cr, c);
        this.Kb = a;
        this.zr = "auto";
        this.smoothing = !1
    };
    m(Qr, $i);
    g = Qr.prototype;
    g.Bx = function (a) {
        a !== this.Kb && (this.Kb && this.Kb.Or(this), (this.Kb = a) && this.Kb.ao(this), this.fr())
    };
    g.fr = function () {
        this.P(0)
    };
    g.ka = function (a, b) {
        Qr.J.ka.call(this, a, b);
        this.Kb && this.Kb.ao(this)
    };
    g.Ia = function () {
        Qr.J.Ia.call(this);
        this.Kb && this.Kb.Or(this)
    };
    g.pf = function () {
        var a = this.Kb, b = a ? 20 * a.I() : 0, a = a ? 20 * a.U() : 0;
        return new Tc(0, 0, b, a)
    };
    g.accept = function (a) {
        return a.En(this)
    };
    var Rr = function (a, b, c, d) {
        $i.call(this, a, b, d);
        this.nc = 1;
        this.Wl = !1;
        this.bg = this.enabled = !0;
        this.Nl = [];
        this.jl = !1;
        this.fm = 0;
        this.Xe = void 0;
        this.tabIndex = -1;
        this.hg = c || md.Gl();
        this.qc |= 6291200
    };
    m(Rr, $i);
    var Sr = function () {
        this.actions = [];
        this.sound = null
    };
    g = Rr.prototype;
    g.xl = function (a, b) {
        var c = this.Nl[a];
        return !c || b && !c.actions.length ? null : c
    };
    g.Vp = function (a) {
        var b = this.Nl[a];
        b || (b = new Sr, this.Nl[a] = b);
        return b
    };
    g.bo = function (a, b, c) {
        var d = this.i.ca().hq(this), e;
        for (e in xc) {
            var f = xc[e];
            if (a & 1 << f) {
                this.ph(f);
                var h = null, k = !1;
                20 == f && (h = function (a) {
                    return a.getKey().Iv() == b
                }, k = !0);
                this.Vp(f).actions.push({Fq: c.bind(d), Mo: h, stopPropagation: k});
                1 << f & 4325120 && this.Zi()
            }
        }
    };
    g.Sx = function (a, b) {
        for (var c in xc) {
            var d = xc[c];
            a & d && (this.Vp(d).sound = b)
        }
    };
    g.$l = function () {
        return this.ge() && this.bg
    };
    g.cm = function () {
        return !!this.Xe
    };
    g.ge = function () {
        return this.Wl && this.enabled && !this.Md()
    };
    g.Zi = function () {
        this.Wl = !0
    };
    g.nb = function (a) {
        this.nc != a && (this.nc = a)
    };
    g.Dx = function (a) {
        this.jl = a
    };
    g.ys = function (a) {
        this.bg != a && (this.bg = a)
    };
    g.trackAsMenu = function () {
        return !1
    };
    g.es = function (a) {
        if (this.ge()) {
            var b;
            this.i.Jh() || 1 != this.nc ? this.trackAsMenu() && !this.i.Aj() && 1 == this.nc ? (this.nb(4), b = 14) : this.i.zj(this) && 2 == this.nc && (this.nb(4), b = 16) : (this.nb(2), b = 9);
            b && this.fireEvent(new Dc(b, a))
        }
    };
    g.ds = function (a) {
        if (this.ge()) {
            var b;
            this.i.Jh() || 2 != this.nc ? this.trackAsMenu() && !this.i.Aj() && 4 == this.nc ? (this.nb(1), b = 13) : this.i.zj(this) && 4 == this.nc && (this.nb(2), b = 15) : (this.nb(1), b = 8);
            b && this.fireEvent(new Dc(b, a))
        } else this.nb(1)
    };
    g.ag = function () {
        this.ge() ? (this.i.setCapture(this, !this.trackAsMenu()), this.nb(4), this.fireEvent(new Dc(12))) : this.nb(1)
    };
    g.Rj = function () {
        if (this.ge()) {
            var a = this.i.zj(this) || this.trackAsMenu() && !this.i.Aj();
            this.i.releaseCapture(this);
            this.nb(2);
            if (a) {
                var a = Date.now(), b = a - this.fm;
                this.jl && 600 > b ? (this.fireEvent(new Dc(22)), this.fm = 0) : (this.fireEvent(new Dc(11)), this.fm = a)
            } else this.fireEvent(new Dc(9))
        } else this.nb(1)
    };
    g.Zt = function () {
        this.ge() && !this.trackAsMenu() && (this.nb(1), this.fireEvent(new Dc(10)))
    };
    g.Nf = function () {
        if (!this.$l()) return "default";
        var a = this.s.useHandCursor;
        return l(a) && !a ? "default" : "pointer"
    };
    var oj = function (a, b, c, d) {
        Rr.call(this, a, b, c, d);
        this.O = new ae(this.s);
        this.Qj = !0;
        this.Ag = this.Wh = null
    };
    m(oj, Rr);
    g = oj.prototype;
    g.Ia = function () {
        oj.J.Ia.call(this);
        this.O.Ia();
        this.P(0)
    };
    g.pf = function () {
        return this.O.om(ao)
    };
    g.of = function () {
        return this.O.om(bo)
    };
    g.re = function () {
        return this.O.om(Hr)
    };
    g.Jk = function () {
        return this.O.Un(wh)
    };
    g.Kk = function () {
        return this.O.Un(Cr)
    };
    g.map = function (a) {
        var b = oj.J.map.call(this, a);
        return b = b || this.O.forEach(function (b) {
            return b.map(a)
        })
    };
    g.th = function (a) {
        return this.O.forEach(a)
    };
    g.pa = function () {
        return !0
    };
    g.fv = function (a) {
        return this.O.Sp(a)
    };
    g.Tc = function (a, b) {
        var c = a.getParent();
        c && c.removeChild(a);
        a.vg(this);
        this.O.Km(a, b);
        this.qb();
        a.If(Ir, !1, c)
    };
    g.removeChild = function (a) {
        a.Th();
        a.If(Jr, !1);
        this.O.Pm(a);
        a.he();
        a.vg(null);
        this.qb()
    };
    g.Mr = function () {
        for (var a = this.O.Aa; a;) this.removeChild(a), a = this.O.Aa
    };
    g.de = function (a) {
        (a = this.O.Ic(a)) && this.removeChild(a)
    };
    g.Ic = function (a) {
        return this.O.Ic(a)
    };
    g.Nk = function (a, b) {
        this.O.Nk(a, b)
    };
    g.ln = function (a, b) {
        this.P(0);
        this.O.ln(a, b)
    };
    g.sq = function (a) {
        return this === a.getParent()
    };
    g.Ae = function () {
        return this.O.Ae()
    };
    g.ze = function (a) {
        return this.O.ze(a)
    };
    g.Lf = function (a) {
        return this.O.Lf(a)
    };
    g.Ne = function (a, b) {
        var c = a.getParent();
        c && c.Uh(a, this);
        a.vg(this);
        this.O.Ne(a, b);
        this.qb();
        a.If(Ir, !1, c)
    };
    g.Uh = function (a, b) {
        a.If(Jr, !1, b);
        this.O.Uh(a);
        a.vg(null);
        this.qb()
    };
    g.qb = function () {
        oj.J.qb.call(this);
        this.Ag = null
    };
    g.Ih = function () {
        oj.J.Ih.call(this);
        this.Ag = null
    };
    g.Qx = function (a) {
        this.Wh = a;
        this.Ag = null
    };
    g.Gv = function () {
        if (!this.Ag && this.Wh && 0 < this.Wh.width() && 0 < this.Wh.height()) {
            var a = this.ua();
            if (0 < a.u && 0 < a.o && !a.K && !a.C) {
                var b = Uc();
                this.th(function (a) {
                    a.Ro(b);
                    return !1
                });
                0 < b.width() && 0 < b.height() && (this.Ag = new Yc(b, this.Wh, a.u, a.o))
            }
        }
        return this.Ag
    };
    g.Kx = function (a) {
        this.Qj != a && (this.Qj = a)
    };
    $i.prototype.Do = function () {
        return !0
    };
    var nj = function (a, b, c, d) {
        oj.call(this, b, a, c, d);
        this.Id = new ae
    };
    m(nj, oj);
    g = nj.prototype;
    g.ka = function (a, b) {
        nj.J.ka.call(this, a, b);
        this.Ze(this.O, 1);
        this.Ze(this.Id, 8);
        this.Zi();
        for (var c = 0; c < this.definition.actions.length; c++) {
            var d = this.definition.actions[c];
            this.bo(d.events, d.key, d.actions)
        }
        for (c = 0; c < this.definition.sounds.length; c++) d = this.definition.sounds[c], this.Sx(d.events, d.sound)
    };
    g.Ia = function () {
        nj.J.Ia.call(this);
        this.Id.Ia()
    };
    g.Jk = function () {
        return this.Id.Un(wh)
    };
    g.Ip = function (a) {
        return this.Id.forEach(a)
    };
    g.nb = function (a) {
        a != this.nc && (this.Ze(this.O, a, this.nc), this.i.jd());
        nj.J.nb.call(this, a)
    };
    g.ge = function () {
        return nj.J.ge.call(this) && this.bg
    };
    g.trackAsMenu = function () {
        return this.definition.trackAsMenu
    };
    g.Ze = function (a, b, c) {
        this.P(0);
        var d = this.definition.records;
        if (d) {
            if (l(c)) for (var e = 0; e < d.length; e++) {
                var f = d[e], h = f.states & c, k = f.states & b;
                h && !k && a.Qr(f.depth)
            }
            for (e = 0; e < d.length; e++) if (f = d[e], h = f.states & c, (k = f.states & b) && !h && (h = this.hg + "." + f.definition.id.toString(36), f.definition.bm() && (h = f.definition.get().ob(this.i, h)))) h.pa() && 8 != b && h.Gb(this.i.yh()), h.vg(this), h.ka(), a.Km(h, f.depth), f.transform && h.setTransform(f.transform), f.filters && h.ug(f.filters), f.blendmode && h.tg(f.blendmode), f.Vg && h.Fb(f.Vg)
        }
    };
    g.accept = function (a) {
        return a.Gn(this)
    };
    var Tr = function (a, b, c) {
        $i.call(this, b, a, c)
    };
    m(Tr, $i);
    g = Tr.prototype;
    g.re = function () {
        return this.definition.re(this.xh())
    };
    g.pf = function () {
        var a = this.definition;
        return a.bounds ? a.bounds.ya(0) : a.re(this.xh())
    };
    g.of = function () {
        return this.definition.of(this.xh())
    };
    g.Kk = function () {
        var a = this.definition.flags, b = Hr(this), c = this.$();
        if (a & 2) {
            var d = bo(this), e = d.eb(c), f = this.i.W.mk, h = f.u, f = f.o;
            e.j += (b.j - d.j) / h;
            e.l += (b.l - d.l) / f;
            e.F += (b.F - d.F) / h;
            e.H += (b.H - d.H) / f;
            a & 1 && e.bh(b.eb(c));
            return e
        }
        return b.eb(c)
    };
    g.Ro = function (a) {
        var b = this.definition.of(this.xh());
        a.bh(b.eb(this.ua()))
    };
    g.ik = function (a) {
        this.Ok(a) && (this.P(0), this.qb())
    };
    $i.prototype.xh = function () {
        return this.be / 65535
    };
    Tr.prototype.accept = function (a) {
        return a.Pn(this)
    };
    var Ur = function (a, b, c, d) {
        nj.call(this, a, b, c, d);
        this.hn = {}
    };
    m(Ur, nj);
    g = Ur.prototype;
    g.ka = function (a, b) {
        Ur.J.ka.call(this, a, b);
        this.Ze(this.O, 1);
        this.Ze(this.Id, 8)
    };
    g.Ia = function () {
        Ur.J.Ia.call(this)
    };
    g.Tx = function (a, b) {
        b && b.vg(this);
        this.hn[a] = b;
        a != this.nc && 8 != a || this.Ze(8 == a ? this.Id : this.O, a)
    };
    g.Hv = function (a) {
        return this.hn[a]
    };
    g.Ze = function (a, b) {
        var c = this.hn[b];
        c != a.Ic(1) && (a.Qr(1), c && a.Km(c, 1), this.P(0))
    };
    var Vr = function (a, b, c) {
        $i.call(this, b, a, c)
    };
    m(Vr, $i);
    Vr.prototype.pf = function () {
        return this.definition.bounds
    };
    Vr.prototype.re = function () {
        return this.definition.bv()
    };
    Vr.prototype.accept = function (a) {
        return a.Rn(this)
    };
    var Wr = function (a, b, c) {
        $i.call(this, b, a, c);
        this.nd = a.width;
        this.Sl = a.height
    };
    m(Wr, $i);
    g = Wr.prototype;
    g.pa = function () {
        return !0
    };
    g.pf = function () {
        return new Tc(0, 0, 20 * this.nd, 20 * this.Sl)
    };
    g.ik = function (a) {
        this.Ok(a) && this.P(0)
    };
    g.lv = function () {
        return this.be % this.nj() | 0
    };
    g.I = function () {
        return this.nd
    };
    g.U = function () {
        return this.Sl
    };
    g.$h = function (a) {
        this.nd = a
    };
    g.Yh = function (a) {
        this.Sl = a
    };
    g.nj = function () {
        var a = this.definition.motionEstimationData;
        return a ? a.type.length : 0
    };
    var Xr = {};
    Wr.prototype.accept = function (a) {
        return a.Sn(this)
    };
    var Yr = function (a, b, c, d, e) {
        $f.call(this, a);
        this.trackAsMenu = b;
        this.records = c;
        this.actions = d;
        this.sounds = e
    };
    m(Yr, $f);
    Yf(10, function (a, b, c) {
        for (var d = [], e = 0; a.records && e < a.records.length; e++) {
            var f = a.records[e], h = f.transform ? vg(f.transform) : null, k = f.colortransform ? yg(f.colortransform) : null, n = se(f.filters);
            l(f.id) && d.push(new Zr(c.pc.Be(f.id), f.depth, h, f.states, k, n, f.blendmode))
        }
        c = [];
        for (e = 0; a.actions && e < a.actions.length; e++) f = a.actions[e], c.push({actions: b.ah(f.actions, void 0), key: f.key, events: f.events});
        b = [];
        for (e = 0; a.sounds && e < a.sounds.length; e++) f = a.sounds[e], b.push(new $r(f.events, f.sound));
        return new Yr(a.id,
            a.trackAsMenu, d, c, b)
    });
    Yr.prototype.ob = function (a, b, c) {
        return new nj(this, a, b, c)
    };
    Yr.prototype.pa = !0;
    var Zr = function (a, b, c, d, e, f, h) {
        this.definition = a;
        this.depth = b;
        this.transform = c;
        this.states = d;
        this.Vg = e;
        this.filters = f;
        this.blendmode = h
    }, $r = function (a, b) {
        this.events = a;
        this.sound = b
    };
    var wr = function (a, b, c, d, e, f) {
        $f.call(this, a);
        this.data = b;
        this.mask = c;
        this.width = d;
        this.height = e;
        this.transparent = f;
        this.canvas = Fg(d, e)
    };
    m(wr, $f);
    var as = function (a) {
        return new wr(a.id, a.data, a.mask, a.width, a.height, !(!a.transparent && !a.mask))
    };
    Yf(8, as);
    wr.prototype.ud = function (a) {
        a.Fh();
        var b, c = !1, d, e = !this.mask, f = this, h = function () {
            if (c && e) {
                var h = f.canvas.getContext("2d");
                h.clearRect(0, 0, f.width, f.height);
                h.drawImage(b, 0, 0, f.width, f.height);
                d && (h.globalCompositeOperation = "destination-in", h.drawImage(d, 0, 0, f.width, f.height));
                a.zd()
            }
        };
        b = new Image;
        b.onload = function () {
            c = !0;
            h()
        };
        b.onerror = function () {
            a.zd()
        };
        b.src = this.data;
        this.mask && (d = new Image, d.onload = function () {
            e = !0;
            h()
        }, d.onerror = b.onerror, d.src = this.mask)
    };
    wr.prototype.ob = function (a, b, c) {
        return new Qr(new er(this, a), a, c)
    };
    var bs = function (a) {
        return a / 255
    }, cs = function (a, b) {
        var c = b.transform ? Jh(b.transform, Mh, vg) : Oh;
        if (l(b.color)) return new lr(Jh(b.color, Ph, zg));
        if (b.gradient) {
            var d = b.gradient, e = d.stops, f = [];
            if (e) for (var h = 0; h < e.length; h++) {
                var k = e[h];
                f[h] = {color: Jh(k.color, Ph, zg), offset: Jh(k.offset, Kh, bs)}
            }
            e = d.spread | 0;
            h = d.interpolation | 0;
            if (2 == b.type) return new nr(c, f, e, h);
            d = d.f ? Jh(d.f, Kh, hc) : Lh;
            return new or(c, f, e, h, d)
        }
        return b.bitmap && (f = a.iv(b.bitmap, wr)) ? new pr(f.canvas, c, 6 == b.type) : new lr(new Ih(new Nc(255, 0, 0,
            255)))
    }, ds = ["round", "butt", "square"], es = ["round", "bevel", "miter"];
    var fs = function (a, b, c, d, e) {
        $f.call(this, a);
        this.paths = b;
        this.bounds = c;
        this.edges = d;
        this.flags = e;
        for (c = a = 0; c < b.length; c++) {
            d = b[c];
            var f = d.data.ya(0).Va.length;
            d.line && (a += f * d.line.ve());
            d.fill && (a += f * d.fill.ve())
        }
        this.vy = 1500 < a;
        this.Xt = !(e & 2)
    };
    m(fs, $f);
    fs.prototype.ud = function () {
    };
    Yf(1, function (a, b, c) {
        var d = c.pc, e = a.fillstyles ? a.fillstyles.map(function (a) {
            return cs(d, a)
        }) : [], f = a.linestyles ? a.linestyles.map(function (a) {
            if (a) {
                var b = Jh(a.width, Kh, hc), c = ds[a.cap] || "round", e = ds[a.ecap] || c, f = es[a.joint] || "round";
                a = a.fill ? new tr(cs(d, a.fill), b, c, e, f, a.miter | 0, a.flags | 0) : new sr(Jh(a.color, Ph, zg), b, c, e, f, a.miter | 0, a.flags | 0)
            } else a = null;
            return a
        }) : [], h = 0;
        b = a.paths.map(function (a) {
            var b = f[a.line] || null, c = e[a.fill] || null;
            a = Jh(a.data, Qh, Qg);
            if (b) {
                var d = b.flags & 6;
                0 != d && (h |= 2);
                6 != d && (h |=
                    1)
            }
            return {data: a, fill: c, line: b}
        });
        return new fs(a.id, b, Jh(a.bounds, Rh, Wc), a.edges ? Jh(a.edges, Rh, Wc) : null, h)
    });
    fs.prototype.ob = function (a, b, c) {
        return new Tr(this, a, c)
    };
    fs.prototype.re = function (a) {
        if (this.bounds) return this.bounds.ya(a);
        for (var b = Uc(), c = this.paths, d = 0; d < c.length; ++d) {
            var e = c[d], f = e.line ? e.line.width.ya(a) / 2 : 0;
            e.data.ya(a).bc(b, f)
        }
        return b
    };
    fs.prototype.of = function (a) {
        if (this.edges) return this.edges.ya(a);
        for (var b = Uc(), c = this.paths, d = 0; d < c.length; ++d) c[d].data.ya(a).bc(b, 0);
        return b
    };
    var gs = function (a, b) {
        var c = new fs(-1, [], null, null, 0);
        $i.call(this, a, c, b);
        this.clear();
        this.hh = this.uf = null;
        this.Ea()
    };
    m(gs, Tr);
    g = gs.prototype;
    g.Fa = function () {
        return this
    };
    g.duplicate = function () {
        var a = new gs(this.i);
        a.definition = Qa(this.definition);
        return a
    };
    g.clear = function () {
        this.definition.paths = [];
        this.Mc = this.Nc = this.Od = this.Pd = 0;
        this.P(0);
        this.qb()
    };
    g.Ee = function () {
        var a = this.uf, b = this.hh, c;
        b && (c = b);
        a && a != b && (c = a);
        return c ? (this.P(0), this.qb(), c.data.value) : new Mg
    };
    g.moveTo = function (a, b) {
        l(a) && l(b) && (a *= 20, b *= 20, this.Ee().moveTo(a, b), this.Mc = a, this.Nc = b, this.Od = a, this.Pd = b)
    };
    g.lineTo = function (a, b) {
        l(a) && l(b) && (a *= 20, b *= 20, a != this.Mc || b != this.Nc || this.hh ? this.Ee().lineTo(a, b) : this.Ee().close(), this.Od = a, this.Pd = b)
    };
    g.kb = function (a, b, c, d) {
        l(c) && l(d) && l(a) && l(b) && (a *= 20, b *= 20, c *= 20, d *= 20, this.Ee().kb(a, b, c, d), this.Od = c, this.Pd = d)
    };
    g.Su = function (a, b, c, d) {
        l(a) && l(b) && l(c) && l(d) && (a *= 20, b *= 20, c *= 20, d *= 20, this.Ee().moveTo(a, b).lineTo(a, b + d).lineTo(a + c, b + d).lineTo(a + c, b).lineTo(a, b), this.Mc = this.Od = a, this.Nc = this.Pd = b)
    };
    var hs = Math.sqrt(2);
    g = gs.prototype;
    g.pp = function (a, b, c, d) {
        if (l(a) && l(b) && l(c) && l(d)) {
            a *= 20;
            b *= 20;
            c *= 20;
            d *= 20;
            var e = c / hs, f = d / hs, h = c * (hs - 1), k = d * (hs - 1);
            this.Ee().moveTo(a + c, b).kb(a + c, b + k, a + e, b + f).kb(a + h, b + d, a, b + d).kb(a - h, b + d, a - e, b + f).kb(a - c, b + k, a - c, b).kb(a - c, b - k, a - e, b - f).kb(a - h, b - d, a, b - d).kb(a + h, b - d, a + e, b - f).kb(a + c, b - k, a + c, b);
            this.Mc = this.Od = a + c;
            this.Nc = this.Pd = b
        }
    };
    g.Tu = function (a, b, c, d, e, f) {
        l(a) && l(b) && l(c) && l(d) && l(e) && l(f) && (e && f ? (e > c && (e = c), f > d && (f = d)) : e = f = 0, a *= 20, b *= 20, c *= 20, d *= 20, e *= 10, f *= 10, this.Ee().moveTo(a + c, b + d - f).kb(a + c, b + d, a + c - e, b + d).lineTo(a + e, b + d).kb(a, b + d, a, b + d - f).lineTo(a, b + f).kb(a, b, a + e, b).lineTo(a + c - e, b).kb(a + c, b, a + c, b + f).lineTo(a + c, b + d - f), this.Mc = this.Od = a + c, this.Nc = this.Pd = b + d - f)
    };
    g.fi = function (a, b, c, d) {
        var e = this.definition.paths, f = e[e.length - 1], h = new Mg;
        h.moveTo(a, b);
        a = {data: new Ih(h), fill: d, line: c};
        f && f.data.value.xc() ? e[e.length - 1] = a : e.push(a);
        return a
    };
    g.cr = function (a) {
        var b = this.uf, c = this.hh;
        if (c) {
            if (c.data.value.xc()) {
                b = c;
                b.line = a;
                this.uf = b;
                return
            }
            b == c && (b = this.fi(0, 0, c.line, null), b.data = c.data, delete c.line)
        }
        this.uf = b = a ? this.fi(this.Od, this.Pd, a, null) : null
    };
    g.Tj = function (a) {
        var b = this.hh;
        b && b.data.value.close();
        var c = this.uf;
        b && c && c != b ? (c.data.value.lineTo(this.Mc, this.Nc), a ? c = b = this.fi(this.Mc, this.Nc, c.line, a) : b = null) : (b = a ? this.fi(this.Mc, this.Nc, null, a) : null, c && (b ? (b.line = c.line, c = b) : c = this.fi(this.Mc, this.Nc, c.line, null)));
        this.hh = b;
        this.uf = c;
        this.Od = this.Mc;
        this.Pd = this.Nc;
        this.P(0)
    };
    var is = {round: "round", none: "butt", square: "square"}, js = {round: "round", bevel: "bevel", miter: "miter"}, ks = {linear: nr, radial: or}, ls = {vertical: 2, horizontal: 4, none: 6};
    gs.prototype.Qq = function (a, b, c, d, e, f, h, k) {
        a *= 20;
        if (a == a) {
            var n = 0;
            d && (n |= 1);
            n |= ls[e];
            f = is[f] || "round";
            h = js[h] || "round";
            this.cr(new sr(new Ih(Qc(b, c)), new Ih(a), f, f, h, k, n))
        } else this.cr(null)
    };
    var ms = function (a, b, c) {
        return b && (a = a.indexOf(b), 0 <= a) ? a : c
    };
    gs.prototype.no = function (a, b) {
        l(a) && this.Tj(new lr(new Ih(Qc(a, b))))
    };
    gs.prototype.Mt = function (a, b, c) {
        if (a = a.cc()) b = b ? b.Cr(20, 20) : Jc, this.Tj(new pr(a, new Ih(b), !c))
    };
    gs.prototype.oo = function (a, b, c, d, e, f, h, k) {
        if ((a = ks[a]) && fa(b) && fa(c) && fa(d)) {
            for (var n = b.length, q = [], u = 0; u < n; ++u) {
                var p = d[u] / 255;
                0 <= p && 1 >= p && q.push({color: new Ih(Qc(b[u], c[u])), offset: new Ih(p)})
            }
            this.Tj(new a(e ? new Ih(e) : Nh, q, ms(jr, f, 0), ms(kr, h, 0), new Ih(k || 0)))
        }
    };
    gs.prototype.up = function () {
        this.Tj(null)
    };
    var qj = function (a, b, c, d) {
        oj.call(this, b, a, c, d);
        this.xq();
        this.Jj = !1;
        this.nh = {};
        this.Cd = null;
        this.i.lx(this);
        this.qc |= 127;
        this.sl = 0
    };
    m(qj, oj);
    g = qj.prototype;
    g.xq = function () {
        this.wq = [];
        this.Dj = this.cp = this.ia = -1;
        this.Ph = !1;
        this.Tg = !0;
        this.Jp = []
    };
    g.dk = function (a) {
        this.he();
        this.Mr();
        this.xq();
        for (var b = this.s, c = Object.getOwnPropertyNames(b), d = 0; d < c.length; ++d) rd(c[d]) || delete b[c[d]];
        this.definition = a || this.definition.Ii();
        this.Sb = !0;
        this.ka();
        a && (this.fireEvent(new Dc(18)), this.i.Za())
    };
    g.ka = function (a, b) {
        this.Sb && this.ph(7);
        qj.J.ka.call(this, a, b)
    };
    g.Zg = function () {
        this.aj(0, !0);
        qj.J.Zg.call(this);
        this.Jj || (this.Jj = !0, this.play(), this.ho())
    };
    g.he = function () {
        this.Jj && (this.O.he(), this.fireEvent(new Dc(5)), this.Jj = !1);
        qj.J.he.call(this)
    };
    g.play = function () {
        this.Ph = !0
    };
    g.qs = function (a) {
        this.Tg = a
    };
    g.cm = function () {
        return l(this.Xe) ? this.Xe : this.Tg
    };
    g.tick = function () {
        this.O.Ju();
        this.Ph && this.ho()
    };
    g.ho = function () {
        var a = this.ia + 1;
        if (a >= this.definition.frameCount) {
            if (this.definition.mp) return;
            a = 0
        }
        0 == this.definition.frameCount && this.i.Ga == this || this.Rq(a)
    };
    g.stop = function () {
        this.Ph = !1
    };
    g.Qb = function (a, b) {
        0 <= a && (a >= this.definition.frameCount ? this.Sq(this.definition.frameCount - 1) : (this.Rq(a), this.aj(this.ia, !0)), this.Ph = b)
    };
    g.el = function (a, b) {
        this.Dj = a;
        this.mw = b;
        var c = this;
        this.i.xb.add(function () {
            -1 != c.Dj && c.Qb(c.Dj, c.mw)
        })
    };
    g.cx = function () {
        var a = this.definition.Xb.Dv(this.ia);
        0 > a && (a = 0);
        this.el(a, !0)
    };
    g.Pw = function () {
        var a = this.definition.Xb, b = a.zv(this.ia), a = a.mc, a = a.length ? a[a.length - 1].offset : 0;
        b > a && (b = a);
        this.el(b, !0)
    };
    g.Zf = function (a, b) {
        var c = this.definition.Xb, d;
        if (l(b)) {
            if (d = c.gs[b], !l(d)) return
        } else d = c.kq(this.ia);
        var e = Number(a) + d - 1;
        return 0 <= e && e == Math.floor(e) ? e : (e = c.fj[a]) && c.kq(e) != d ? void 0 : e
    };
    g.kv = function (a) {
        return this.definition.tags[a]
    };
    g.Rq = function (a) {
        this.Dj = -1;
        if (a != this.ia) if (a > this.ia) {
            this.Sq(a - 1);
            this.ia = a;
            this.yp(this.ia);
            var b = this.definition.tags[this.ia];
            if (b) for (var c = 0; c < b.length; c++) b[c].ye(this), b[c].qh(this, !1)
        } else {
            this.ia = a;
            b = this.definition.Nq[this.ia];
            a = [];
            if (b) for (c = 0; c < b.length; c++) {
                var d = b[c].rh(this);
                d && a.push(d);
                b[c].qh(this, !1)
            }
            for (var b = !1, c = this.O, e = c.Aa; d = e;) e = d.nextSibling, !d.jc && 0 > d.depth && 0 > a.indexOf(d) && (c.Pm(d), this.P(0), d.he(), b = !0);
            b && c.Ht(this)
        }
    };
    g.Sq = function (a) {
        for (; a > this.ia;) {
            this.ia++;
            this.yp(this.ia);
            var b = this.definition.tags[this.ia];
            if (b) for (var c = 0; c < b.length; c++) b[c].ye(this)
        }
    };
    g.aj = function (a, b) {
        var c = l(a) ? a : this.ia;
        b ? this.i.xb.add(this.xp.bind(this, c)) : this.xp(c)
    };
    g.xp = function (a) {
        var b = this.Jp[a];
        if (b && this.cp != a) {
            qg.push(void 0);
            try {
                b(), sg()
            } catch (c) {
                this.stop(), tg(c, !!sg())
            }
        }
        this.cp = a
    };
    g.Do = function (a) {
        var b = this.sl != a;
        this.sl = a;
        return b
    };
    g.Uv = function () {
        return ++this.sl
    };
    g.yp = function (a) {
        if (!this.wq[a]) {
            for (var b = this.definition.Aq[a], c = 0; b && c < b.length; c++) b[c].qh(this, !0);
            this.wq[a] = !0
        }
    };
    g.ca = function () {
        return this.i.ca()
    };
    g.Mf = function () {
        return this.i.Mf()
    };
    g.ec = function () {
        return this.i.ec()
    };
    g.duplicate = function (a, b, c) {
        var d = new qj(this.definition, this.i, this.hg + "_d");
        d.Sb = !0;
        d.Gb(b);
        d.setTransform(this.ua());
        this.Cd && (d.Cd = this.Cd.duplicate(d), d.Tc(d.Cd, -16385));
        d.ka();
        a.de(c);
        a.Tc(d, c);
        d.Fb(this.jb);
        return d
    };
    g.Fa = function () {
        var a = this.Cd;
        a || (this.Cd = a = new gs(this.i), a.jc = !0, this.Tc(a, -16385));
        return a
    };
    g.nb = function (a) {
        if (this.Tg && a != this.nc) {
            var b;
            switch (a) {
                case 1:
                    b = "_up";
                    break;
                case 4:
                    b = "_down";
                    break;
                case 2:
                    b = "_over"
            }
            b && (b = this.definition.Xb.fj[b], l(b) && (this.Qb(b, !1), this.i.jd()))
        }
        qj.J.nb.call(this, a)
    };
    g.Uq = function (a, b, c) {
        this.xg(ns(a));
        var d = this;
        os(a, this.i, b, c, {
            Db: function () {
            }, hb: function () {
            }, fb: function () {
            }, sb: function (a) {
                d.dk(a)
            }
        })
    };
    g.nj = function () {
        return this.definition.frameCount
    };
    g.jv = function () {
        var a = this.i.va, b = this;
        return rh(this.i.W, a.x, a.y, function (a) {
            return !b.contains(a) && a instanceof Rr
        })
    };
    g.Nf = function () {
        return this.Tg ? qj.J.Nf.call(this) : "default"
    };
    g.bp = function () {
        var a = this.definition.Xb;
        return a.Jf[a.mv(this.ia)]
    };
    g.accept = function (a) {
        return a.On(this)
    };
    var ps = function (a, b, c, d) {
        $f.call(this, b);
        this.br = a;
        this.Nq = [];
        this.Xb = new Gh([], []);
        this.frameCount = c;
        this.scaleRect = d;
        this.tags = [];
        this.Aq = [];
        this.mp = !1
    };
    m(ps, $f);
    Yf(7, function (a, b, c, d) {
        var e = new ps(c, a.id, a.frameCount, a.scaleRect ? Wc(a.scaleRect) : null);
        e.vr(a.tags, b, c, d);
        return e
    });
    g = ps.prototype;
    g.vr = function (a, b, c) {
        for (var d = 0, e = 0, f = 0; a && f < a.length; f++) {
            var h = a[f];
            if (2 == h.type) d++, e = 0; else {
                var k = Wf[h.type];
                k && (e++, k(h, b, c, this, d, void 0))
            }
        }
        this.ju()
    };
    g.pa = !0;
    g.ob = function (a, b, c) {
        a = new qj(this, a, b, c);
        this.scaleRect && a.Qx(this.scaleRect);
        return a
    };
    g.Ii = function () {
        return new ps(this.br, 0, 0, null)
    };
    g.ju = function () {
        for (var a = [], b = 0; b < this.frameCount; ++b) {
            for (var c = this.tags[b], d = [], e = 0; e < a.length; ++e) a[e].Tk(d);
            if (c) for (e = 0; e < c.length; ++e) c[e].Pg(d);
            a = this.Nq[b] = d
        }
    };
    var qs = function (a, b, c, d, e) {
        ps.call(this, this, 0, a, null);
        this.frameRate = b;
        this.oc = c;
        this.as3 = d;
        this.pc = new Kd;
        e ? (a = nd[e], b = new ld(a), a || (nd[e] = b.gp), e = b) : e = md;
        this.Zw = e;
        this.pc.Fr(this)
    };
    m(qs, ps);
    var rs = function (a, b) {
        var c = new qs(a.frameCount, a.frameRate, a.version, gd(a), a.digest);
        c.vr(a.tags, b, c, a.url || "root");
        a.truncated && (c.mp = !0);
        return c
    }, gd = function (a) {
        if (l(a.as3)) return a.as3;
        if (a.tags) for (var b = 0; b < a.tags.length; ++b) if (18 == a.tags[b].type) return !0;
        return !1
    };
    var ss = function (a, b, c, d) {
        var e = !1;
        if (fa(c)) for (var f = 0; f < c.length; ++f) {
            var h = c[f];
            switch (h.name && h.name.toLowerCase()) {
                case "content-type":
                    e = !0
            }
            a.setRequestHeader(h.name, h.value)
        }
        e || ("POST" == b && (d = d || "application/x-www-form-urlencoded"), d && a.setRequestHeader("Content-Type", d))
    }, vs = function (a) {
        return function (b, c, d, e, f, h) {
            d = String(d).toUpperCase();
            switch (d) {
                case "POST":
                    if ("function" == typeof ArrayBuffer) {
                        ts(a, b, c, "POST", Go(e), f, h);
                        break
                    }
                case "GET":
                    b = Go(e, b);
                default:
                    USING_XML_HTTP_MOCK ? ts(a, b, c, "GET",
                        null, f, h) : us(b, c, f)
            }
        }
    }, ts = function (a, b, c, d, e, f, h) {
        c && c.Fh();
        var k = new XMLHttpRequest;
        k.open(d, b);
        k.responseType = "arraybuffer";
        k.onreadystatechange = function () {
            if (4 == k.readyState) {
                if (ws(k)) {
                    var b = new Uint8Array(k.response);
                    oc();
                    for (var d = lc, e = [], h = 0; h < b.length; h += 3) {
                        var t = b[h], v = h + 1 < b.length, w = v ? b[h + 1] : 0, B = h + 2 < b.length, A = B ? b[h + 2] : 0, F = t >> 2, t = (t & 3) << 4 | w >> 4, w = (w & 15) << 2 | A >> 6,
                            A = A & 63;
                        B || (A = 64, v || (w = 64));
                        e.push(d[F], d[t], d[w], d[A])
                    }
                    us("data:image/" + a + ";base64," + e.join(""), c, f)
                } else f.fb(k.status);
                c && c.zd()
            }
        };
        ss(k, d, h);
        k.send(e)
    }, us = function (a, b, c) {
        b && b.Fh();
        var d = new Image;
        d.onload = function () {
            c.Db();
            c.hb(0, 1024);
            c.hb(1024, 1024);
            c.sb({type: 8, id: 1, data: d.src, width: d.width, height: d.height}, 200);
            b && b.zd()
        };
        d.onerror = function () {
            c.fb(404);
            b && b.zd()
        };
        d.src = a
    }, zo = function (a, b, c, d, e, f, h) {
        b && b.Fh();
        var k = new XMLHttpRequest, n = !0, q = 0, u = 0;
        k.onreadystatechange = function () {
            2 == k.readyState ? ws(k) && e.Db() : 4 == k.readyState && ws(k) && 0 != u && q != u && e.hb(u, u)
        };
        k.onprogress = function (a) {
            ws(k) && (n && 0 != a.loaded && e.hb(0, a.total), e.hb(a.loaded,
                a.total));
            n = !1;
            q = a.loaded;
            u = a.total
        };
        k.onload = function () {
            ws(k) ? e.sb(k.responseText, k.status) : e.fb(k.status);
            b && b.zd()
        };
        k.onerror = function () {
            e.fb(k.status);
            b && b.zd()
        };
        c = String(c).toUpperCase();
        var p = null;
        switch (c) {
            case "POST":
                k.open(c, a);
                p = Go(d);
                break;
            case "GET":
                a = Go(d, a);
            default:
                k.open("GET", a)
        }
        ss(k, c, f, h);
        try {
            k.send(p)
        } catch (t) {
        }
    }, xs = function (a, b, c, d, e, f) {
        zo(a, b, c, d, {
                Db: function () {
                }, hb: function () {
                }, fb: function () {
                }, sb: function (a) {
                    var b = e(), c = b.s;
                    Fo(a, Pr(c));
                    b.fireEvent(new Dc(18));
                    oi("onData", c)
                }
            },
            f)
    }, ys = function (a) {
        return (a = a.match(/\.([^.?#]+)(?:#.*$|\?.*$|$)/)) && a[1] || ""
    }, zs = {png: "image/png", gif: "image/gif", jpg: "image/jpeg", jpeg: "image/jpeg", swf: "application/x-shockwave-flash"}, As = vs("jpeg"), Bs = {
        png: vs("png"), gif: vs("gif"), jpg: As, jpeg: As, swf: function (a, b, c, d, e, f) {
            USING_XML_HTTP_MOCK || (a = a.replace(/^([^?#]+)([?#].*)?$/g, "$1.json$2"));
            zo(a, b, c, d, {
                Db: e.Db, hb: e.hb, fb: e.fb, sb: function (a, b) {
                    try {
                        var c;
                        a ? (c = pc(a), Dg(c)) : c = {};
                        e.sb(c, b)
                    } catch (d) {
                        e.fb(b)
                    }
                }
            }, f)
        }
    }, Cs = function (a, b, c, d, e, f) {
        var h = ys(a);
        (h = Bs[h]) && h(a, b, c, d, e, f)
    }, Ds = function (a, b, c, d) {
        var e = rs(a, c);
        b.zq(e.pc, function () {
            d(e)
        })
    }, Es = function (a, b, c, d, e, f, h) {
        Cs(a, b, d, e, {
            Db: f.Db, hb: f.hb, fb: f.fb, sb: function (a, d) {
                if (8 == a.type) {
                    var e = as(a);
                    e.ud(b);
                    b.qf(function () {
                        f.sb(e, d)
                    })
                } else Ds(a, b, c, function (a) {
                    f.sb(a, d)
                })
            }
        }, h)
    }, os = function (a, b, c, d, e, f) {
        Cs(a, b, c, d, {
            Db: e.Db, hb: e.hb, fb: e.fb, sb: function (a, c) {
                a.type && (a = {tags: [a, {type: 3, id: a.id, depth: 1}, {type: 2}], frameCount: 1});
                Ds(a, b, b.ca().yd, function (a) {
                    e.sb(a, c)
                })
            }
        }, f)
    }, ws = function (a) {
        return 200 == a.status ||
            0 == a.status && null != a.response
    }, ns = function (a) {
        var b = document.createElement("a");
        b.href = a;
        return b.href
    };
    var Fs = function (a, b, c, d, e, f, h) {
        this.i = a.i;
        this.variables = b;
        this.url = c;
        this.target = d || "_self";
        this.method = e;
        this.Jq = !!f;
        this.am = !!h;
        this.$r = this.Jq || this.am ? a.He("_self" == this.target ? "this" : this.target) : null
    }, Gs = {0: void 0, 1: "GET", 2: "POST"};
    g = Fs.prototype;
    g.request = function (a) {
        var b = this.target.match(/^\_level(\d+)$/i);
        if (this.Jq) return this.am ? b ? this.lp(Number(b[1])) : this.Ou() : this.Nu(), !0;
        if (b) return this.am ? this.lp(Number(b[1])) : this.Mu(Number(b[1])), !0;
        if ("" == this.url) return !0;
        if (b = this.url.match(/^fscommand:(.*)$/i)) return le(this.i, b[1], this.target), !0;
        b = this.target;
        if (!a && "_self" != b) return !1;
        var c = this.method;
        a = this.url;
        if (1 == c) a = Go(this.variables, a), a = a.replace(/%20/g, "+"); else if (2 == c) {
            var d;
            d = this.variables;
            ha(d) ? d = [d] : (c = [], Mr(d, c.push,
                c), d = c)
        }
        this.i.navigate(a, b, d);
        return !0
    };
    g.Mu = function (a) {
        var b = this.i;
        b.W.de(-16384 + a);
        this.url && os(this.url, b, Gs[this.method], this.variables, {
            Db: function () {
            }, hb: function () {
            }, fb: function () {
            }, sb: function (c) {
                b.Tq(a, c)
            }
        })
    };
    g.Nu = function () {
        var a = this.$r, b = Gs[this.method];
        if (a) {
            var c = a.__swiffy_d;
            c instanceof qj && c.Uq(this.url, b, a)
        }
    };
    g.Ou = function () {
        var a = this.$r, b = Gs[this.method];
        a && a.__swiffy_d instanceof qj && a.loadVariables.call(a, this.url, b)
    };
    g.lp = function (a) {
        var b = this.i;
        xs(this.url, b, Gs[this.method], this.variables, function () {
            var c = b.pv(a);
            c || (c = new qs(0, 0, b.oc, !1), c = new qj(c, b, null), b.yk(c, a), c.ka(), c.Sb = !0);
            return c
        })
    };
    var xh = function (a, b, c, d) {
        Rr.call(this, b, a, c, d);
        this.Ak = "normal";
        this.Wc = a.autoSize;
        this.vi = a.border;
        this.ui = 16777215;
        this.zi = a.border;
        this.yi = 0;
        this.Fi = !1;
        this.Yi = a.editable;
        this.Cf = a.sp;
        this.rq = "pixel";
        this.vc = a.html;
        this.sm = a.maxChars;
        this.Pe = a.multiline;
        this.gi = !1;
        this.wr = a.password;
        this.Um = null;
        this.Xh = a.selectable;
        this.Ks = 0;
        this.qa = null;
        this.Ye = a.color;
        this.on = 0;
        this.Fg = a.wrap;
        this.tc = $e(a);
        this.Ke = [];
        this.Yb = [];
        this.Xc = a.bounds.clone();
        this.Co = !0;
        this.et = !1;
        this.Eg = a.variable;
        this.links = [];
        null == this.qa && (a = a.text, this.Rc(l(a) ? a : ""))
    };
    m(xh, Rr);
    g = xh.prototype;
    g.pf = function () {
        if ("none" == this.Wc) return this.Xc;
        var a = this.Xc.j, b = this.Xc.F, c = this.Xc.l, d = c + (this.Ll() + 80);
        if (!this.Fg) {
            var e = this.Ml() + 80;
            "left" == this.Wc ? b = a + e : "right" == this.Wc ? a = b - e : "center" == this.Wc && (e = (b - e - a) / 2, a += e, b -= e)
        }
        return new Tc(a, c, b, d)
    };
    g.Rc = function (a) {
        this.Co && this.vc && this.Ye != this.definition.color && (this.P(0), this.Ye = this.definition.color);
        if (this.gi || this.qa != a) this.Fi && (a = a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")), this.et = !0, this.ct(a), this.gi = !1
    };
    g.rs = function (a) {
        this.Co = a
    };
    g.qj = function () {
        var a = this.qa;
        return this.vc ? Hs(a, this.definition.multiline) : a
    };
    g.Es = function (a, b) {
        this.vc && (a = Is(a), this.rs(!1));
        (b || this.Rc).call(this, a);
        this.rs(!0)
    };
    g.Wp = function () {
        var a = this.qa;
        if (this.vc) {
            for (var b = /\s*<p(?: [^>]*)?>.*?<\/p>\s*/ig, c = 0, d = b.exec(a), e = ""; d;) d.index > c && (e += "<p>" + a.substring(c, d.index) + "</p>"), e += d[0], c = b.lastIndex, d = b.exec(a);
            a.length > c && (e += "<p>" + a.substring(c) + "</p>");
            a = e
        }
        return a
    };
    g.Ix = function (a) {
        this.vc != a && (this.P(0), this.vc = a)
    };
    g.Is = function (a) {
        this.Ye = 16777215 & a | this.Ye & 4278190080;
        this.jk(af(this.Ye))
    };
    g.mq = function () {
        return this.Ye & 16777215
    };
    g.ks = function (a) {
        this.Ak = a
    };
    g.sg = function (a) {
        this.vi = a;
        this.P(0)
    };
    g.ms = function (a) {
        this.ui = a & 16777215;
        this.P(0)
    };
    g.os = function (a) {
        this.zi = a;
        this.P(0)
    };
    g.ps = function (a) {
        this.yi = a & 16777215;
        this.P(0)
    };
    g.ss = function (a) {
        this.Fi = a
    };
    g.ts = function (a) {
        this.Cf = a;
        this.ct(this.qa)
    };
    g.Hx = function (a) {
        this.rq = a
    };
    g.xs = function (a) {
        this.sm = a
    };
    g.zs = function (a) {
        this.Pe != a && (this.gi = !0);
        this.Pe = a;
        this.Dg()
    };
    g.Lx = function (a) {
        this.wr = a
    };
    g.Cs = function (a) {
        this.Um = a
    };
    g.Rx = function (a) {
        this.Ks = a
    };
    g.Vx = function (a) {
        this.on = a
    };
    g.He = function () {
        return this.Eg
    };
    g.kk = function (a) {
        this.Eg && this.i.ca().xn(this.Eg, this);
        (this.Eg = a) && this.i.ca().Om(this.Eg, this, this.definition.text)
    };
    g.Js = function (a) {
        this.Fg != a && (this.gi = !0);
        this.Fg = a;
        this.Dg()
    };
    g.ls = function (a) {
        this.P(0);
        this.Wc = a;
        this.qb()
    };
    g.Fs = function (a) {
        this.Xh = a
    };
    g.Ym = function (a) {
        this.Yi = a
    };
    g.cm = function () {
        return l(this.Xe) ? this.Xe : this.Yi
    };
    g.nq = function (a, b) {
        l(a) ? l(b) || (b = a + 1) : (a = 0, b = this.qa.length);
        for (var c = null, d = 0, e, f = 0; f < this.Ke.length; f++) for (var h = this.Ke[f], k = 0; k < h.length; k++) {
            var n = h[k];
            e = d + n.qa.length - 1;
            d < b && e >= a && (c ? c.yw(n.format) : c = n.format.clone());
            d = e + 1
        }
        c ? c.font = c.Ch() ? c.font.name : c.font : c = new Xe;
        return c
    };
    g.eq = function () {
        var a = new Xe;
        a.wd(this.tc);
        return a
    };
    g.jk = function (a, b, c) {
        a = a.clone();
        l(b) ? l(c) || (c = b + 1) : (b = 0, c = this.qa.length);
        for (var d = 0, e, f = 0; f < this.Ke.length; f++) for (var h = this.Ke[f], k = 0; k < h.length; k++) {
            var n = h[k], q = n.qa;
            e = d + q.length - 1;
            if (d < c && e >= b) {
                var u = Math.max(d, b) - d, d = Math.min(e + 1, c) - d;
                if (0 < u) {
                    var p = n.vh(q.substring(0, u));
                    h.splice(k, 0, p);
                    k++
                }
                d < q.length && (p = n.vh(q.substring(d)), h.splice(k + 1, 0, p));
                n.Rc(q.substring(u, d));
                null != a.color && (a.color |= 4278190080);
                !this.Cf && n.format.Rl() && (a.font = n.format.font);
                n.format.wd(a);
                n.ki(this.zl())
            }
            d = e + 1
        }
        this.Dg();
        this.P(0)
    };
    g.Bs = function (a) {
        this.gi = !0;
        this.tc.wd(a)
    };
    g.ka = function (a, b) {
        xh.J.ka.call(this, a, b);
        (this.i.ca().rp || this.Xh) && this.ys(!0);
        this.definition.variable && this.i.ca().Om(this.definition.variable, this, this.definition.text)
    };
    g.Ia = function () {
        xh.J.Ia.call(this);
        this.definition.variable && this.i.ca().xn(this.definition.variable, this)
    };
    g.pa = function () {
        return this.definition.pa
    };
    g.ct = function (a) {
        this.P(0);
        this.qa = a;
        this.Ke = [];
        this.vc || (a = Js(a));
        this.Et(a, this.Pe)
    };
    g.Et = function (a, b) {
        var c = new Ks(null, null);
        c.format = $e(this.definition);
        if (this.Cf && this.definition.font) {
            var d = this.definition.font.get();
            d instanceof Ze && (c.format.font = d)
        } else this.definition.font && (d = this.definition.font.get(), d instanceof Ze && (c.format.font = d.name));
        c.format.color = this.Ye | 0;
        c.format.Ch() && (d = c.format.font, c.format.italic = d.italic, c.format.bold = d.bold);
        this.vc && this.tc && (c.format.italic = !!this.tc.italic, c.format.bold = !!this.tc.bold, c.format.size = this.tc.size, c.format.Oa = this.tc.Oa,
            c.format.indent = this.tc.indent, c.format.Sa = this.tc.Sa, d = this.tc.color, c.format.color = this.tc.$e ? 4278190080 | d : c.format.color);
        var d = new Ls(c, this.zl(), b), e = a.replace(/\r\n|\r|\n/g, "<br/>");
        c.ki(this.zl());
        var c = new Zd(e, !1, !1, !0), f;
        try {
            for (; f = c.next();) switch (f.type) {
                case "tag":
                    e = {};
                    if (f.attributes) for (var h = 0; h < f.attributes.length; ++h) {
                        var k = f.attributes[h];
                        e[k.name.toLowerCase()] = k.value
                    }
                    d.by(f.value.toLowerCase(), e);
                    break;
                case "close":
                    d.Vu(f.value.toLowerCase());
                    break;
                case "text":
                case "cdata":
                    d.$t(f.value)
            }
        } catch (n) {
        }
        this.Ke =
            d.jm;
        this.Dg()
    };
    g.Dg = function () {
        var a = this.Ke;
        if (!(this.et || this.Pe || this.vc)) {
            var b = [];
            b.push(Array.prototype.concat.apply([], a));
            a = b
        }
        this.Fg && (a = this.Ay(a, this.Xc));
        this.Yb = a;
        "none" != this.Wc && this.qb()
    };
    g.$p = function (a, b) {
        var c = a.F - a.j - 80;
        b && (c -= b.leftMargin + b.rightMargin + b.Sa);
        return c
    };
    g.Ay = function (a, b) {
        var c = [], d = 0, e = !1;
        c[d] = [];
        for (var f = 0; f < a.length; f++) {
            for (var h = a[f], k = 0 < h.length ? h[0].format : null, n = this.$p(b, k), k = k ? k.indent | 0 : 0, q = 0; q < h.length; q++) for (var u = h[q].zy(k, n, e), p = 0; p < u.length; p++) e = h[q].vh(u[p]), e.Yf = p == u.length - 1, c[d].push(e), p == u.length - 1 ? (k += e.I(), e = this.Pe || " " == e.qa[e.qa.length - 1]) : (d++, c[d] = [], k = 0, e = !1);
            d++;
            c[d] = []
        }
        0 == c[d].length && c.pop();
        return c
    };
    g.uv = function (a) {
        if (0 <= a && a < this.Yb.length) {
            a = this.Yb[a];
            for (var b = "", c = 0; c < a.length; c++) b += a[c].qa;
            return b.replace(/\n/, "")
        }
        return null
    };
    g.Yp = function (a) {
        for (var b = 0, c = 0, d = 0; d < this.Yb.length; d++, b = c) {
            for (var e = this.Yb[d], f = 0; f < e.length; f++) c += e[f].qa.length, e[f].Yf && c++;
            b = a(d, b, c);
            if (-1 != b) return b
        }
        return -1
    };
    g.tv = function (a) {
        return 0 <= a && a < this.Yb.length ? this.Yp(function (b, c) {
            return b == a ? c : -1
        }) : -1
    };
    g.rv = function (a) {
        return 0 <= a && a < this.qa.length ? this.Yp(function (b, c, d) {
            return c <= a && d > a ? b : -1
        }) : -1
    };
    g.Ur = function (a) {
        var b = ao(this);
        this.links = [];
        for (var c = 0, d = !0, e = 0, f = this.Yb, h = 0; h < f.length; h++) {
            var k = f[h], n = Ms(k), q = Ns(k) * n;
            if (0 != h && "none" == this.Wc && c + q > b.H) break;
            var u = 0 < k.length ? k[0].format : null;
            0 == h && u && (e = u.leading | 0, c = b.l + 40 - .5 * e, 0 > e ? c = b.l : 0 > c && (c = b.l + 40));
            for (var p = b.j + 40 + (u ? u.leftMargin : 0), t = this.$p(b, u), v = 0, w = 0; w < k.length; w++) v += k[w].I();
            if (u) switch (l(u.Sa) && (p += u.Sa), l(u.indent) && d && (p += u.indent, t -= u.indent, d = !1), u.Oa) {
                case 2:
                    p += (t - v) / 2;
                    break;
                case 1:
                    p += t - v
            }
            for (w = 0; w < k.length; w++) k[w].qa.length &&
            (v = 0, u = k[w].I(), !k[k.length - 1].Yf && 3 == k[w].format.Oa && h < f.length - 1 && (v = (k[w].qa.match(/ /g) || []).length, v = (t - u) / v), a.rx(k[w], p, c, n, v), k[w].format.url && (v = new Os(p, c, u, q, k[w].format.url, k[w].format.target), this.links.push(v)), p += u, d = d || k[w].Yf);
            c += q + e
        }
    };
    g.zl = function () {
        return this.Cf ? this.i.Ed : null
    };
    g.$h = function (a) {
        0 <= a && (this.Xc.F = this.Xc.j + 20 * a, this.Dg(), this.qb(), this.P(0))
    };
    g.Yh = function (a) {
        0 <= a && (this.Xc.H = this.Xc.l + 20 * a, this.Dg(), this.qb(), this.P(0))
    };
    g.ag = function () {
        var a = this.Zp(this.i.va.x, this.i.va.y);
        a ? this.i.Qh(new Fs(this.i.ca(), "", a.rw, a.target, 1)) : xh.J.ag.call(this)
    };
    g.Zp = function (a, b) {
        var c = new Ec(a, b);
        c.ed(this.$());
        for (var d = 0; d < this.links.length; d++) if (this.links[d].Lt.contains(c.x, c.y)) return this.links[d];
        return null
    };
    var Os = function (a, b, c, d, e, f) {
        this.Lt = new Tc(a, b, a + c, b + d);
        this.rw = e || "";
        this.target = f || "_self"
    }, Ps = function () {
        this.format = Ye();
        this.Yf = !1;
        this.qa = "";
        this.nd = 0
    };
    g = Ps.prototype;
    g.vh = function (a) {
        var b = this.Gi();
        b.qa = a;
        return b
    };
    g.Rc = function (a) {
        this.qa = a;
        this.nd = 0
    };
    g.ki = function (a, b) {
        this.nd = 0;
        !l(b) && this.format.Ch() && (b = this.format.font.name);
        if (a) {
            if (!l(b) && l(this.format.font) && (b = String(this.format.font)), !this.format.Ch() || b != this.format.font.name || !!this.format.italic != !!this.format.font.italic || !!this.format.bold != !!this.format.font.bold) {
                var c = bf;
                if (l(b) && a) {
                    var d = a[b.toLowerCase()];
                    if (d) for (var e = 0; e < d.length; ++e) {
                        if (!!this.format.italic == !!d[e].italic && !!this.format.bold == !!d[e].bold) {
                            this.format.font = d[e];
                            return
                        }
                        c == bf && (c = d[e])
                    }
                }
                this.format.font = c
            }
        } else b &&
        (this.format.font = b)
    };
    g.Gi = function () {
        var a = new Ps;
        a.format.wd(this.format);
        return a
    };
    g.I = function () {
        this.nd || (this.nd = this.measureText(this.qa));
        return this.nd
    };
    g.measureText = function (a) {
        var b = 0;
        if (this.format.Rl()) {
            for (var c = 0; c < a.length; c++) {
                var d = this.format.font.Bl(a.charAt(c));
                l(d) && (b += d.advance ? d.advance : 0)
            }
            b = b * this.format.size / (this.format.font.emSquareSize | 0)
        } else b = this.ev(a);
        return b += this.format.letterSpacing * a.length | 0
    };
    var Qs = Gg(Fg(1, 1));
    g = Ps.prototype;
    g.Qp = function () {
        this.format.Fc(Qs);
        return Qs
    };
    g.ev = function (a) {
        return this.Qp().measureText(a).width
    };
    g.zy = function (a, b, c) {
        for (var d = [], e = 0, f = d[0] = "", h = 0, k = this.qa.split(" "), n = 0; n < k.length; n++) if (!(0 < e && 0 == a && "" == k[n])) {
            k[n] = k[n].replace(/&nbsp;/g, " ");
            var q = this.measureText(k[n]);
            a + h + q > b ? q < b && c ? (e++, a = q, d[e] = k[n]) : (e || d[e] ? a = 0 : d.pop(), this.yy(k[n], b, a, d), e = d.length - 1, a = this.measureText(d[e])) : (d[e] = d[e] + f + k[n], a += h + q);
            c = !0;
            0 == n && (f = " ", h = this.measureText("a a") - this.measureText("aa"))
        }
        return d
    };
    g.yy = function (a, b, c, d) {
        this.format.Rl() ? this.xy(a, b, c, d) : this.wy(a, b, c, d)
    };
    g.xy = function (a, b, c, d) {
        for (var e = 0, f = 0, h = this.format.size / (this.format.font.emSquareSize | 0), k = 0; k < a.length; k++) {
            var n = this.format.font.Bl(a.charAt(k)), n = (l(n) && n.advance ? n.advance : 0) * h + this.format.letterSpacing;
            0 < k - f && e + n > b - c && (d.push(a.substring(f, k)), f = k, c = e = 0);
            e += n
        }
        d.push(a.substring(f))
    };
    g.wy = function (a, b, c, d) {
        for (var e = this.Qp(), f = 0; f < a.length;) {
            for (var h = f + 1, k = a.length, n; k > h;) {
                var q = h + (k - h) / 2, q = Math.ceil(q);
                n = a.substring(f, q);
                e.measureText(n).width <= b - c ? h = q : k = q - 1
            }
            d.push(a.substring(f, h));
            f = h;
            c = 0
        }
    };
    var Ks = function (a, b) {
        Ps.call(this);
        a && this.format.wd(a.format);
        this.parent = a;
        this.Tw = b
    };
    m(Ks, Ps);
    var Hs = function (a, b) {
        return a.replace(/<[^>]+>|&[^;]+;/g, function (a) {
            switch (a) {
                case "&amp;":
                    return "&";
                case "&lt;":
                    return "<";
                case "&gt;":
                    return ">";
                case "&quot;":
                    return '"';
                case "&apos;":
                    return "'";
                case "&nbsp;":
                    return " ";
                case "</p>":
                case "<br>":
                case "<br/>":
                    return b ? "\n" : ""
            }
            return ""
        })
    }, Is = function (a) {
        return a.replace(/[<>&]/g, function (a) {
            switch (a) {
                case "&":
                    return "&amp;";
                case "<":
                    return "&lt;";
                case ">":
                    return "&gt;"
            }
            return a
        })
    }, Js = function (a) {
        return a.replace(/[&<>"'\u02c6\u02dc]/g, function (a) {
            switch (a) {
                case "&":
                    return "&amp;";
                case "<":
                    return "&lt;";
                case ">":
                    return "&gt;";
                case "'":
                    return "&apos;";
                case '"':
                    return "&quot;";
                case "\u02c6":
                    return "&#710;";
                case "\u02dc":
                    return "&#732;"
            }
            return a
        })
    };
    xh.prototype.Ll = function () {
        for (var a = 0, b = 0; b < this.Yb.length; b++) var c = this.Yb[b], a = a + Ns(c) * Ms(c);
        return a
    };
    var Ms = function (a) {
        for (var b = 0, c = 0; c < a.length; c++) b = Math.max(b, a[c].format.size);
        return b
    }, Ns = function (a) {
        for (var b = 1, c = 0; c < a.length; c++) b = a[c].format.Ch() && a[c].format.font.lineHeight ? Math.max(b, a[c].format.font.lineHeight) : Math.max(b, 1.14);
        return b
    }, Rs = function (a) {
        switch (a) {
            case "left":
                return 0;
            case "center":
                return 2;
            case "right":
                return 1;
            case "justify":
                return 3;
            default:
                return 0
        }
    };
    xh.prototype.Ml = function () {
        for (var a = 0, b = 0; b < this.Yb.length; b++) {
            for (var c = 0, d = this.Yb[b], e = 0; e < d.length; e++) c += d[e].I();
            a = Math.max(a, c)
        }
        return a
    };
    var Ls = function (a, b, c) {
        this.Ua = a;
        this.Gc = [];
        this.jm = [];
        this.jm.push(this.Gc);
        this.Ed = b;
        this.multiline = c
    };
    g = Ls.prototype;
    g.ig = function (a) {
        this.Ua = new Ks(this.Ua, a)
    };
    g.$w = function (a) {
        var b = this.Ua;
        b.parent && b.Tw == a && (this.Ua = b.parent)
    };
    g.by = function (a, b) {
        switch (a) {
            case "p":
                this.ig(a);
                var c = b.align;
                c && (this.Ua.format.Oa = Rs(c));
                break;
            case "b":
                this.ig(a);
                this.Ua.format.bold = !0;
                this.Ua.ki(this.Ed);
                break;
            case "i":
                this.ig(a);
                this.Ua.format.italic = !0;
                this.Ua.ki(this.Ed);
                break;
            case "u":
                this.ig(a);
                this.Ua.format.yb = !0;
                break;
            case "a":
                this.ig(a);
                if (c = b.href) this.Ua.format.url = c;
                if (c = b.target) this.Ua.format.target = c;
                break;
            case "br":
            case "sbr":
                this.co();
                break;
            case "font":
                this.ig(a);
                if (c = b.color) c = /^#([0-9a-fA-F]+)/.exec(c), this.Ua.format.color =
                    (c ? parseInt(c[1], 16) & 16777215 : 0) | 4278190080;
                (c = b.face) && this.Ua.ki(this.Ed, c);
                c = Number(b.size);
                c == c && (this.Ua.format.size = 20 * c);
                c = Number(b.letterspacing);
                c == c && (this.Ua.format.letterSpacing = 20 * c)
        }
    };
    g.Vu = function (a) {
        switch (a) {
            case "p":
                this.multiline && this.co()
        }
        this.$w(a)
    };
    g.co = function () {
        if (this.Gc.length) {
            var a = this.Gc.length;
            a && (this.Gc[a - 1].Yf = !0);
            do {
                a--;
                var b = this.Gc[a];
                b.Rc(b.qa.replace(/\s+$/g, ""))
            } while (0 < a && !this.Gc[a].qa.length)
        } else a = this.Ua.vh(""), a.Yf = !0, this.Gc.push(a);
        this.Gc = [];
        this.jm.push(this.Gc)
    };
    g.$t = function (a) {
        this.Gc.push(this.Ua.vh(a))
    };
    xh.prototype.sv = function (a) {
        var b = this.Yb[a];
        if (!b) return null;
        for (var c = a = 0, d = 0, e = 0, f = 0, h = 0; h < b.length; h++) {
            var k = b[h].format.Tp(), n = b[h].format.size, q = b[h].format.leading;
            a = Math.max(a, (k ? k.ascent / k.emSquareSize : .9) * n | 0);
            c = Math.max(c, (k ? k.descent / k.emSquareSize : 1 - .9) * n | 0);
            d = Math.max(d, q);
            e = Math.max(e, q + (k ? k.lineHeight : 1.14) * n | 0);
            f += b[h].I() | 0
        }
        b = ao(this).j + 40 + b[0] ? b[0].format.leftMargin : 0;
        return {ascent: a, descent: c, leading: d, height: e, width: f, x: b}
    };
    xh.prototype.accept = function (a) {
        return a.Kn(this)
    };
    var Ss = function (a, b) {
        var c = new qs(0, 0, a.oc, !0);
        oj.call(this, a, c, "stage");
        this.backgroundColor = zg(b.backgroundColor);
        this.en = b.frameSize.xmax / 20;
        this.cn = b.frameSize.ymax / 20;
        this.Qc = "showAll";
        this.Sk = this.Rk = this.bd = this.cd = this.Ng = 0;
        this.mk = Hc;
        this.P(0)
    };
    m(Ss, oj);
    var Ts = {L: 1, T: 2, R: 4, B: 8};
    g = Ss.prototype;
    g.Ds = function (a) {
        this.Qc != a && (this.Qc = a, this.zn())
    };
    g.Np = function (a) {
        for (var b = "", c = this.Ng, d = 0; d < a.length; ++d) {
            var e = a[d];
            c & Ts[e] && (b += e)
        }
        return b
    };
    g.js = function (a) {
        a = a.toUpperCase();
        for (var b = 0, c = 0; c < a.length; ++c) b = b | Ts[a[c]] | 0;
        this.Ng != b && (this.Ng = b, this.zn())
    };
    g.bt = function () {
        var a;
        a:{
            var b = this.i.Td;
            try {
                if (b.getBoundingClientRect) {
                    var c = b.getBoundingClientRect();
                    a = new Tc(c.left, c.top, c.right, c.bottom);
                    break a
                }
            } catch (f) {
            }
            a = new Tc(0, 0, b.offsetWidth, b.offsetHeight)
        }
        var b = a.width(), c = a.height(), d = a.j;
        a = a.l;
        var e = !1;
        if (this.Rk != d || this.Sk != a) this.Rk = d, this.Sk = a, e = !0;
        if (this.cd != b || this.bd != c) this.cd = b, this.bd = c, "noScale" == this.Qc && this.i.ca().sr(), e = !0;
        e && this.zn()
    };
    g.Pp = function (a, b, c, d, e) {
        return this.Ng & a ? 0 : this.Ng & b ? c - d * e : (c - d * e) / 2
    };
    g.zn = function () {
        var a = this.cd, b = this.bd, c = this.en, d = this.cn, e = c ? a / c : 1, f = d ? b / d : 1;
        switch (this.Qc) {
            case "noScale":
                e = f = 1;
                break;
            case "showAll":
                e = f = Math.min(e, f);
                break;
            case "noBorder":
                e = f = Math.max(e, f)
        }
        this.mk = Mc(e / 20, 0, 0, f / 20, this.Pp(1, 4, a, c, e), this.Pp(2, 8, b, d, f));
        this.P(0)
    };
    g.sg = function (a) {
        this.P(0);
        this.backgroundColor = a
    };
    g.Mp = function (a, b) {
        return rh(this, a, b, function (a) {
            return a instanceof Rr && a.Wl && a.bg
        })
    };
    g.Nf = function () {
        return "default"
    };
    var Us = {Qz: "fullScreen", Rz: "fullScreenInteractive", rB: "normal"};
    Ss.prototype.accept = function (a) {
        return a.Qn(this)
    };
    USING_XML_HTTP_MOCK = !!aa.USING_XML_HTTP_MOCK;
    var Vs = function (a, b, c) {
        Dg(b);
        this.Td = a;
        this.oc = b.version;
        var d = window.location.href;
        a = c && c.maxFrameDrop;
        this.ay = Tf[c && c.renderer || "swiffy.CANVAS"];
        this.va = new id;
        this.$x = new Te;
        this.Cm = b.fileSize;
        this.cg = [];
        this.tf = new kg(b.frameRate, null != a ? a : 3, this);
        this.Hm = 0;
        this.Vj = [];
        this.Us = [];
        this.Ed = {};
        this.xb = new Md;
        this.sa = null;
        this.Oc = [];
        this.$c = null;
        this.Mk = !1;
        this.my = 1;
        this.Ls = !(c && c.dontWireEvents);
        this.Da = document.createElement("div");
        this.Da.style.position = "relative";
        this.Da.style.width = "100%";
        this.Da.style.height =
            "100%";
        this.Da.style.overflow = "hidden";
        this.Da.style.webkitTapHighlightColor = "rgba(0,0,0,0)";
        this.Da.style.webkitUserSelect = "none";
        this.Da.style.UC = "none";
        this.Da.style.VC = "none";
        a = c && c.touchRadius;
        null != a || (a = 16);
        !qc || c && c.chromeTouchEvents || (a = -1);
        this.Lm = new od(this, a);
        this.qg = 1;
        this.Ib = this.ei = this.Ga = this.W = null;
        this.Fp = !0;
        this.md = [];
        this.Af = null;
        this.navigate = Lg;
        this.Bp = ge;
        this.At = !(c && 0 == c.allowScriptAccess);
        this.Xl = !1;
        this.Fh();
        var e = this;
        hd(b, function (a) {
            e.sa = new a(e);
            a = rs(b, e.sa.yd);
            e.W =
                new Ss(e, b);
            e.zq(a.pc);
            e.W.bt();
            e.Ga = new qj(a, e, "#0");
            3 == e.sa.yd.tl() && (e.Ga.Gb("root1"), e.Ga.vs(e.sa.Of()));
            e.W.ka();
            e.Ga.Lu(19);
            e.Ga.play();
            e.yk(e.Ga, 0);
            e.ei = new e.ay(e, c);
            e.Gs(d);
            e.zd()
        })
    };
    ba("swiffy.Stage", Vs, void 0);
    Vs.prototype.Cl = function (a, b) {
        for (var c = this.Us, d = 0; d < c.length; d++) {
            var e = c[d].mm[a];
            if (e instanceof b) return e
        }
    };
    Vs.prototype.pause = function () {
        this.tf.stop()
    };
    Vs.prototype.Iu = function () {
        this.tf.stop();
        this.Lm.ly();
        this.W.Ia();
        this.ei.Ia();
        Rb(this.Da);
        var a = this.Da;
        a && a.parentNode && a.parentNode.removeChild(a);
        this.ec().jn()
    };
    Vs.prototype.destroy = Vs.prototype.Iu;
    Vs.prototype.sg = function (a) {
        var b = Kg(a), c = this;
        this.qf(function () {
            c.W.sg(b)
        })
    };
    Vs.prototype.setBackground = Vs.prototype.sg;
    Vs.prototype.Ex = function (a) {
        this.Bp = a || ge
    };
    Vs.prototype.setExternalInterfaceCallHook = Vs.prototype.Ex;
    Vs.prototype.Fx = function (a) {
        var b = this;
        this.qf(function () {
            Fo(a, b.Hp())
        })
    };
    Vs.prototype.setFlashVars = Vs.prototype.Fx;
    Vs.prototype.Gs = function (a) {
        this.sa.Of().xg(a);
        Or(a, this.Hp())
    };
    Vs.prototype.Ux = function (a) {
        var b = this;
        this.qf(function () {
            b.Gs(a)
        })
    };
    Vs.prototype.setSwfUrl = Vs.prototype.Ux;
    Vs.prototype.As = function (a) {
        this.navigate = a || Lg
    };
    Vs.prototype.setNavigateHook = Vs.prototype.As;
    Vs.prototype.Yx = function (a) {
        this.As(a ? function (b, c, d) {
            b = a(b, d ? "POST" : "GET", c);
            Lg.call(this, b, c, d)
        } : null)
    };
    Vs.prototype.setUrlHook = Vs.prototype.Yx;
    Vs.prototype.start = function () {
        var a = this.tf;
        this.qf(function () {
            a.start()
        })
    };
    Vs.prototype.start = Vs.prototype.start;
    g = Vs.prototype;
    g.yk = function (a, b) {
        this.W.Tc(a, -16384 + b);
        this.ca().Kr(a, b)
    };
    g.Tq = function (a, b, c) {
        b = new qj(b, this, null);
        c && c(b);
        this.yk(b, a);
        b.ka();
        b.Sb = !0;
        this.Za()
    };
    g.pv = function (a) {
        return this.W.Ic(-16384 + a)
    };
    g.Fh = function () {
        this.Hm++
    };
    g.zd = function () {
        if (0 == --this.Hm) {
            for (var a = 0; a < this.Vj.length; a++) this.Vj[a].call();
            this.Vj = []
        }
    };
    g.bw = function () {
        return 0 == this.Hm
    };
    g.qf = function (a) {
        this.bw() ? a.call() : this.Vj.push(a)
    };
    g.sy = function () {
        this.Ls = !1;
        this.Lm.ry();
        Hb(document, "keyup", this.ow, !1, this);
        Hb(new bc(document), "key", this.nw, !1, this);
        Hb(document, "visibilitychange", Ws, !1, this)
    };
    g.ex = function (a) {
        this.Ga.map(function (b) {
            if (b instanceof Rr) return b.fireEvent(a)
        })
    };
    g.kr = function () {
        this.Eo();
        this.va.hk(!0);
        this.sa.yf(new Dc(3));
        this.Za();
        this.sa.ag();
        this.Ib ? this.Ib.ag() : this.setCapture(this.W);
        this.Za();
        this.Ef(!1)
    };
    g.pr = function () {
        this.va.hk(!1);
        this.sa.yf(new Dc(2));
        this.Za();
        this.sa.Rj();
        this.Ib ? this.Ib.Rj() : this.releaseCapture(this.W);
        this.Za();
        this.Ef(!0)
    };
    g.or = function (a) {
        if (a) {
            var b = a.getParent();
            if (b) {
                do this.sa.si(b) || (a = b); while (b = b.getParent())
            }
        }
        this.Ib != a && (this.sa.nr(this.er(this.Ib), this.er(a)), this.Ib = a, this.Za(), this.Ef(!1), this.yn())
    };
    g.Se = function (a, b) {
        var c = this.va.x = a.x, d = this.va.y = a.y;
        l(b) || (b = this.W.Mp(c, d));
        this.Af && this.Af.Dw(c, d);
        this.sa.ar(b);
        this.xb.flush();
        this.or(b)
    };
    g.mr = function () {
        this.setCapture(this.W, !0)
    };
    g.qr = function () {
        this.releaseCapture(this.W)
    };
    g.qq = function () {
        var a = this.W, b = new Tc(0, 0, a.cd, a.bd), c = new Tc(0, 0, window.innerWidth, window.innerHeight);
        c.translate(-a.Rk, -a.Sk);
        b.Hh(c);
        return b
    };
    g.ow = function (a) {
        this.sa.Gj(a);
        this.sa.yf(new Dc(0));
        this.Za();
        this.sa.uo();
        this.Ef(!0)
    };
    g.nw = function (a) {
        this.sa.Fj(a);
        this.sa.yf(new Dc(1));
        this.Za();
        this.sa.so();
        this.ex(new Dc(20));
        this.Za();
        this.Ef(!0)
    };
    g.fw = function () {
        return null != this.Ib
    };
    g.yn = function () {
        var a = this.va.hv();
        a || (a = "default", (this.Aj() || this.ew() || !this.Jh() && this.fw()) && this.Ib && (a = this.Ib.Nf()));
        this.Da.style.cursor = a
    };
    g.Ps = function (a, b, c, d, e, f) {
        this.qk();
        var h = null;
        l(c) && l(d) && l(e) && l(f) && (c > e && (h = c, c = e, e = h), d > f && (h = d, d = f, f = h), h = new Tc(20 * c, 20 * d, 20 * e, 20 * f));
        this.Af = new Zc(a, h, l(b) && b, this.va.x, this.va.y)
    };
    g.qk = function () {
        this.Af = null
    };
    g.dw = function (a) {
        return null != this.Af && this.Af.clip === a
    };
    g.er = function (a) {
        return a != this.W ? a : null
    };
    g.Jh = function () {
        return !!this.$c && !this.$c.Md()
    };
    g.Aj = function () {
        return this.Jh() && this.Mk
    };
    g.zj = function (a) {
        return this.$c == a && !a.Md()
    };
    g.ew = function () {
        var a = this.Ib;
        return !!a && this.zj(a)
    };
    g.setCapture = function (a, b) {
        this.releaseCapture(a);
        this.va.hk(!0);
        this.$c = a;
        b && (this.Mk = !0, this.yn())
    };
    g.releaseCapture = function (a) {
        this.va.hk(!1);
        this.$c && (this.yn(), this.$c != a && (this.Eo(), this.$c && (this.$c.Zt(), this.Za())), this.$c = null, this.Mk = !1)
    };
    g.lx = function (a) {
        2 == this.sa.yd.tl() ? this.Oc.push(a) : this.cg.push(a)
    };
    g.zq = function (a, b) {
        a.iu(this, b);
        this.Us.push(a)
    };
    g.tick = function () {
        this.Ls && this.sy();
        this.Oc = this.Oc.filter(function (a) {
            return !a.Md()
        });
        if (this.Fp) this.sa.ql(), this.Ga.fireEvent(new Dc(6)), this.ku(), this.sa.nm(this.sa.Of()); else {
            this.sa.ql();
            for (var a = this.Oc.length - 1; 0 <= a; --a) {
                var b = this.Oc[a];
                b.fireEvent(new Dc(6));
                b.tick()
            }
            this.cg.length && (Array.prototype.push.apply(this.Oc, this.cg), this.cg = []);
            this.Za();
            b = this.Ga.Uv();
            for (a = this.Oc.length - 1; 0 <= a; --a) for (var c = this.Oc[a]; c.Do(b);) if (c.getParent()) c = c.getParent(); else {
                c.map(Lr);
                break
            }
            this.Ga.map(Lr)
        }
        this.sa.zp();
        this.Za();
        this.W.Yv() && this.Lm.wm && (a = this.W.Mp(this.va.x, this.va.y), a != this.Ib && this.or(a));
        this.Ef(!1);
        this.Fp = !1
    };
    g.ku = function () {
        this.Ga.ka();
        this.Ga.s.$version = "HTML 11,0,0,0";
        Array.prototype.push.apply(this.Oc, this.cg);
        this.cg = [];
        this.Za();
        this.Ga.ph(7);
        this.Ga.fireEvent(new Dc(7))
    };
    g.ca = function () {
        return this.sa
    };
    g.Za = function () {
        this.xb.flush()
    };
    g.Ef = function (a) {
        for (var b = [], c = 0; c < this.md.length; ++c) this.md[c].request(a) || b.push(this.md[c]);
        this.md = b
    };
    g.Eo = function () {
        this.md = []
    };
    g.Qh = function (a) {
        for (var b = 0; b < this.md.length; ++b) if (this.md[b].target == a.target) {
            this.md[b] = a;
            return
        }
        this.md.push(a)
    };
    g.Mf = function () {
        return this.tf
    };
    g.pq = function () {
        return Date.now() - this.tf.Bu
    };
    g.ec = function () {
        return this.$x
    };
    g.Hp = function () {
        var a = this.sa;
        return function (b, c) {
            b && a.us(b, c || "")
        }
    };
    g.yh = function () {
        return "instance" + this.my++
    };
    g.ak = function () {
        this.Xl && (this.ca().ak(), this.Za(), this.Xl = !1);
        this.ei.sx();
        this.Da.parentNode || (this.ei.Gk(this.Da), this.Td.appendChild(this.Da));
        this.qg++
    };
    g.Wv = function () {
        this.Xl = !0
    };
    g.jd = function () {
        this.tf.jd()
    };
    g.getName = function () {
        return this.Td.id
    };
    g.Ku = function () {
        if (window.top == window) return !1;
        var a = this.Td.parentNode;
        if (!a || a != document.body) return !1;
        for (a = a.firstChild; a; a = a.nextSibling) if (a != this.Td && "SCRIPT" != a.tagName && (a.nodeType != Node.TEXT_NODE || a.nodeValue.trim())) return !1;
        return !0
    };
    g.yl = function () {
        return this.At ? this.Td : null
    };
    var Ws = function () {
        document.hidden ? (this.ei.Kf(), this.Mf().stop()) : this.Mf().start()
    };
    var Xs = function (a, b, c, d) {
        $f.call(this, a.id);
        this.font = d || null;
        this.height = a.height;
        this.color = l(a.color) ? a.color : 4278190080;
        this.text = a.text;
        this.align = !l(a.align) || a.html && 7 >= c ? 0 : a.align;
        this.bounds = b;
        this.html = !!a.html;
        this.wrap = !!a.wrap;
        this.multiline = !!a.multiline;
        this.indent = a.indent;
        this.leading = a.leading;
        this.leftMargin = a.leftMargin;
        this.rightMargin = a.rightMargin;
        this.border = !!a.border;
        this.variable = a.variable || null;
        this.pa = 6 <= c;
        this.selectable = !!a.selectable;
        this.editable = !!a.editable;
        this.password =
            !!a.password;
        this.maxChars = a.maxChars || null;
        this.sp = !!a.embed;
        this.autoSize = a.autoSize ? "left" : "none"
    };
    m(Xs, $f);
    Yf(13, function (a, b, c) {
        c = l(a.font) ? c.pc.Be(a.font) : null;
        return new Xs(a, Wc(a.bounds), b.Ah().oc, c)
    });
    Xs.prototype.ob = function (a, b, c) {
        return new xh(this, a, b, c)
    };
    var Zs = function (a, b, c, d, e) {
        $f.call(this, a);
        this.matrix = b;
        this.records = c;
        this.bounds = d;
        this.Ys = e;
        this.qd = null;
        Ys && Ys(this)
    };
    m(Zs, $f);
    var Ys = null;
    Yf(6, function (a, b, c) {
        b = Wc(a.bounds);
        for (var d = vg(a.matrix), e = l(a.mode) && 1 != a.mode ? null : new Uf(a.gridFit || 0, a.thickness || 0, a.sharpness || 0), f = [], h = 0; a.records && h < a.records.length; h++) {
            var k = a.records[h], n = l(k.font) ? c.pc.Be(k.font) : null, q = l(k.glyphs) ? wg(k.glyphs) : null;
            f.push(new $s(k.text, q, n, k.height, wg(k.x), Number(k.y), k.color))
        }
        return new Zs(a.id, d, f, b, e)
    });
    Zs.prototype.ob = function (a, b, c) {
        return new Vr(this, a, c)
    };
    Zs.prototype.bv = function () {
        if (!this.qd) for (var a = this.qd = this.bounds.clone(), b = 0; b < this.records.length; b++) {
            var c = this.records[b].cv();
            c.rm(this.matrix);
            a.bh(c)
        }
        return this.qd
    };
    Zs.prototype.bk = function (a, b, c) {
        for (var d = this.Ys, e = 0; e < this.records.length; e++) this.records[e].bk(a, b, c, d)
    };
    var $s = function (a, b, c, d, e, f, h) {
        this.text = a;
        this.font = c;
        this.height = d;
        this.x = e;
        this.y = f;
        this.color = h;
        this.Hd = b
    };
    $s.prototype.bk = function (a, b, c, d) {
        var e = this.font && this.font.get();
        e instanceof Ze && (this.Hd || (this.Hd = e.Tm(this.text)), c = c ? c.apply(zg(this.color)) : null, e.Sr(a, this.height, this.Hd, this.x, this.y, b, c, d))
    };
    $s.prototype.cv = function () {
        var a = this.font && this.font.get(), b = 0, c = 0, d = 0, e = 0;
        a instanceof Ze && (this.Hd || (this.Hd = a.Tm(this.text)), this.Hd.length && (c = this.y + a.descent * this.height / a.emSquareSize, b = this.y - a.ascent * this.height / a.emSquareSize, d = this.x[0], e = this.Hd.length - 1, e = this.x[e] + (a.glyphs[this.Hd[e]].advance | 0) * this.height / a.emSquareSize));
        return new Tc(d, b, e, c)
    };
    var at = function (a, b, c, d, e, f, h, k, n, q) {
        $f.call(this, a);
        this.numFrames = b;
        this.width = c;
        this.height = d;
        this.deblocking = e;
        this.smoothing = f;
        this.codecId = h;
        this.motionEstimationData = k;
        this.images = [];
        this.motionX = n;
        this.motionY = q
    };
    m(at, $f);
    Yf(24, function (a) {
        var b = null, c = null;
        a.motionEstimationData && (b = wg(a.motionEstimationData.motionX), c = wg(a.motionEstimationData.motionY));
        return new at(a.id, a.numFrames, a.width, a.height, a.deblocking, a.smoothing, a.codecId, a.motionEstimationData, b, c)
    });
    at.prototype.ob = function (a, b, c) {
        return new Wr(this, a, c)
    };
    at.prototype.ud = function () {
    };
    var bt = function (a) {
        a = r.hi(a);
        oe(this, {ma: a && a.__swiffy_d, cs: 0})
    };
    C(bt, "Color");
    bt.prototype.getRGB = function () {
        var a = x(this);
        if (a.ma) return a.cs
    };
    bt.prototype.setRGB = function (a) {
        var b = x(this), c = b.ma;
        c && (b.cs = a, c.Fb(new Rc(0, (a & 16711680) >> 16, 0, (a & 65280) >> 8, 0, a & 255, 256, 0)), c.Ea())
    };
    bt.prototype.setTransform = function (a) {
        var b = x(this).ma;
        if (b) {
            var c = b.i.ca(), d = c.La(a, "ra"), e = c.La(a, "rb"), f = c.La(a, "ga"), h = c.La(a, "gb"), k = c.La(a, "ba"), n = c.La(a, "bb"), q = c.La(a, "aa");
            a = c.La(a, "ab");
            c = b.jb;
            b.Fb(new Rc(l(d) ? 2.56 * d | 0 : c.Eb, l(e) ? e : c.Vb, l(f) ? 2.56 * f | 0 : c.Cb, l(h) ? h : c.Rb, l(k) ? 2.56 * k | 0 : c.Ab, l(n) ? n : c.Lb, l(q) ? 2.56 * q | 0 : c.Ra, l(a) ? a : c.zb));
            b.Ea()
        }
    };
    bt.prototype.getTransform = function () {
        var a = x(this).ma;
        if (a) return a = a.jb, {ra: a.Eb / 2.56, rb: a.Vb, ga: a.Cb / 2.56, gb: a.Rb, ba: a.Ab / 2.56, bb: a.Lb, aa: a.Ra / 2.56, ab: a.zb}
    };
    D(bt.prototype, null, 3);
    var ct = function (a) {
        x(a).Vr = [];
        Object.defineProperty(a, "contentType", {value: "application/x-www-form-urlencoded", writable: !0});
        Object.defineProperty(a, "loaded", {value: !1, writable: !0})
    }, dt = function (a, b, c) {
        var d = r;
        a = x(a).Vr;
        if (ha(b) && l(c)) a.push({name: b, value: d.Ca(c)}); else if (fa(b)) {
            c = b.length / 2;
            for (var e = 0; e < c; e++) a.push({name: d.Ca(b[2 * e]), value: d.Ca(b[2 * e + 1])})
        }
    }, et = function (a, b, c, d) {
        var e = r;
        a = e.Ca(a);
        b.loaded = !1;
        var f = null, h = "GET", k, n;
        c && (f = c.toString(), h = l(d) ? d : "POST", k = x(c).Vr, n = c.contentType);
        zo(a, e.i, h, f, {
            Db: function () {
            }, hb: function () {
            }, fb: function () {
                oi("onData", b, void 0)
            }, sb: function (a) {
                oi("onData", b, a)
            }
        }, k, n)
    }, ft = function (a, b, c, d) {
        var e = r;
        a = e.Ca(a);
        c = l(c) ? c : "_self";
        d = l(d) ? d : "POST";
        if ("GET" == d) d = 1; else if ("POST" == d) d = 2; else return;
        e.i.Qh(new Fs(e, b, a, c, d))
    };
    var gt = function () {
        oe(this, {});
        ct(this)
    };
    C(gt, "LoadVars");
    gt.prototype.addRequestHeader = function (a, b) {
        dt(this, a, b)
    };
    gt.prototype.load = function (a) {
        et(a, this)
    };
    gt.prototype.send = function (a, b, c) {
        if (0 == arguments.length) return !1;
        ft(a, this, b, c);
        return !0
    };
    gt.prototype.sendAndLoad = function (a, b, c) {
        b && et(a, b, this, c)
    };
    gt.prototype.onData = function (a) {
        var b = l(a);
        b && oi("decode", this, a);
        this.loaded = b;
        oi("onLoad", this, b)
    };
    gt.prototype.onLoad = function () {
    };
    gt.prototype.decode = function (a) {
        Fo(a, Pr(this))
    };
    gt.prototype.toString = function () {
        return Go(this)
    };
    D(gt.prototype, null, 3);
    var ht = function () {
        r.Gh(this)
    };
    C(ht, "MovieClipLoader");
    ht.prototype.checkPolicyFile = !1;
    ht.prototype.loadClip = function (a, b) {
        if (a && b) {
            var c = r;
            a = c.Ca(a);
            var d = this, e = b.__swiffy_d;
            ja(b) ? e = c.i.Ga : ha(b) ? e = c.hi(b).__swiffy_d : e.xg(ns(a));
            os(a, e.i, "", this, {
                Db: function () {
                }, hb: function () {
                }, fb: function (a) {
                    d.broadcastMessage("onLoadError", b, a)
                }, sb: function (c, h) {
                    d.broadcastMessage("onLoadStart", b);
                    d.broadcastMessage("onLoadProgress", b, 1024, 1024);
                    d.broadcastMessage("onLoadComplete", b, h);
                    ja(b) ? e.i.Tq(b, c, function (b) {
                        b.xg(ns(a))
                    }) : e.dk(c);
                    d.broadcastMessage("onLoadInit", b)
                }
            })
        }
    };
    ht.prototype.getProgress = function () {
        return {bytesLoaded: 1024, bytesTotal: 1024}
    };
    ht.prototype.unloadClip = function (a) {
        (a = a && a.__swiffy_d) && a.dk()
    };
    var it = function (a) {
        oe(this, a)
    };
    C(it, "Transform");
    Object.defineProperty(it, "__swiffy_override", {
        value: function (a) {
            a = a && a.__swiffy_d;
            if (a instanceof $i) return new it(a)
        }
    });
    Object.defineProperty(it.prototype, "colorTransform", {
        get: function () {
            return Wh(Ai, x(this).jb)
        }, set: function (a) {
            x(this).Fb(a instanceof Ai ? Vh(a) : Sc)
        }
    });
    Object.defineProperty(it.prototype, "concatenatedColorTransform", {
        get: function () {
            var a = x(this).fc();
            return Wh(Ai, a)
        }
    });
    Object.defineProperty(it.prototype, "concatenatedMatrix", {
        get: function () {
            var a = x(this).$();
            return ci(Yi, a)
        }
    });
    Object.defineProperty(it.prototype, "matrix", {
        get: function () {
            return ci(Yi, x(this).ua())
        }, set: function (a) {
            x(this).setTransform(a instanceof Yi ? bi(a) : Hc)
        }
    });
    Object.defineProperty(it.prototype, "pixelBounds", {
        get: function () {
            var a = x(this).iq();
            return new Zi(a.j, a.l, a.width(), a.height())
        }
    });
    var E = function () {
    };
    qi(E, Ri);
    E.prototype.valueOf = function () {
        return this
    };
    E.prototype.getDepth = function () {
        var a = this.__swiffy_d;
        return a ? a.depth : void 0
    };
    var jt = function (a, b, c, d) {
        Object.defineProperty(a, b, {
            get: function () {
                var a = this.__swiffy_d;
                if (a) return c.call(this, a)
            }, set: function (a) {
                var c = this.__swiffy_d;
                c ? d.call(this, c, a) : Object.defineProperty(this, b, {value: a})
            }
        })
    }, kt = function (a, b, c, d) {
        jt(a, b, c, function (a, b) {
            var c = a.i.ca().Hb(b);
            isNaN(c) || d.call(this, a, c)
        })
    }, lt = function (a, b) {
        jt(a, b, function () {
            return 0
        }, function () {
        })
    }, mt = function (a, b, c) {
        jt(a, b, c, function () {
        })
    };
    kt(E.prototype, "_x", function (a) {
        return a.ua().Y / 20
    }, function (a, b) {
        isFinite(b) || (b = 0 <= b ? 107374182 : -107374182);
        var c = a.ua();
        a.setTransform(c.Zj(20 * b - c.Y, 0));
        a.Ea()
    });
    kt(E.prototype, "_y", function (a) {
        return a.ua().Z / 20
    }, function (a, b) {
        isFinite(b) || (b = 0 <= b ? 107374182 : -107374182);
        var c = a.ua();
        a.setTransform(c.Zj(0, 20 * b - c.Z));
        a.Ea()
    });
    kt(E.prototype, "_xscale", function (a) {
        return 100 * a.dc().od
    }, function (a, b) {
        isFinite(b) || (b = 0 <= b ? 32768 : -32768);
        a.dc().od = b / 100;
        a.mf();
        a.Ea()
    });
    kt(E.prototype, "_yscale", function (a) {
        return 100 * a.dc().af
    }, function (a, b) {
        isFinite(b) || (b = 0 <= b ? 32768 : -32768);
        a.dc().af = b / 100;
        a.mf();
        a.Ea()
    });
    kt(E.prototype, "_alpha", function (a) {
        return a.jb.Ra / 2.56
    }, function (a, b) {
        a.Fb(a.jb.ht(2.56 * b | 0));
        a.Ea()
    });
    kt(E.prototype, "_visible", function (a) {
        return a.Dc
    }, function (a, b) {
        a.lk(Boolean(b))
    });
    kt(E.prototype, "_rotation", function (a) {
        return -180 * a.dc().angle / Math.PI
    }, function (a, b) {
        isFinite(b) || (b = 0);
        a.dc().angle = -b * Math.PI / 180;
        a.mf();
        a.Ea()
    });
    jt(E.prototype, "_name", function (a) {
        return a.getName()
    }, function (a, b) {
        a.Gb(b)
    });
    lt(E.prototype, "_quality");
    lt(E.prototype, "_highquality");
    lt(E.prototype, "_soundbuftime");
    mt(E.prototype, "_parent", function (a) {
        return (a = a.getParent()) && a != a.i.W ? a.s : void 0
    });
    mt(E.prototype, "_xmouse", function (a) {
        return a.i.va.un(a.$()) / 20
    });
    mt(E.prototype, "_ymouse", function (a) {
        return a.i.va.vn(a.$()) / 20
    });
    mt(E.prototype, "_url", function (a) {
        return null === a.Sc ? a.El().Sc.replace(/^([^?#]+)\.html?\b/, "$1") : a.Sc
    });
    kt(E.prototype, "_width", function (a) {
        return a.I()
    }, function (a, b) {
        0 > b || (isFinite(b) || (b = 0 <= b ? 32768 : -32768), a.$h(b), a.Ea())
    });
    kt(E.prototype, "_height", function (a) {
        return a.U()
    }, function (a, b) {
        0 > b || (isFinite(b) || (b = 0 <= b ? 32768 : -32768), a.Yh(b), a.Ea())
    });
    mt(E.prototype, "_root", function (a) {
        for (; a && !a.Mj && a.getParent() != a.i.W;) a = a.getParent();
        return a ? a.s : void 0
    });
    mt(E.prototype, "_target", function (a) {
        for (var b = ""; a && a.getName();) b = "/" + a.getName() + b, a = a.getParent();
        a && a.getParent() == a.i.W && (a = a.depth - -16384) && (b = "_level" + a + b);
        return b || "/"
    });
    jt(E.prototype, "filters", function (a) {
        var b = new Ki;
        a.gt(b);
        return b.filters
    }, function (a, b) {
        if (fa(b)) {
            var c = ue(b, !1);
            c && a.ug(c)
        }
    });
    jt(E.prototype, "transform", function (a) {
        return new it(a)
    }, function (a, b) {
        if (la(b)) {
            var c = new it(a);
            c.colorTransform = b.colorTransform;
            c.matrix = b.matrix
        }
    });
    D(E.prototype, null, 3);
    var nt = function () {
    };
    C(nt, "TextField", E);
    nt.prototype.getTextFormat = function (a, b) {
        var c = this.__swiffy_d;
        if (c) return c = c.nq(a, b), gj(c)
    };
    nt.prototype.setTextFormat = function (a, b, c) {
        var d = this.__swiffy_d;
        if (d) {
            var e, f, h;
            a instanceof fj ? e = a : b instanceof fj ? (e = b, f = a) : c instanceof fj && (e = c, f = a, h = b);
            e && d.jk(x(e), f, h)
        }
    };
    nt.prototype.getNewTextFormat = function () {
        var a = this.__swiffy_d;
        if (a) return a = a.eq(), gj(a)
    };
    nt.prototype.setNewTextFormat = function (a) {
        var b = this.__swiffy_d;
        b && a instanceof fj && b.Bs(x(a))
    };
    var ot = function (a, b, c, d) {
        Object.defineProperty(nt.prototype, a, {
            get: function () {
                var a = this.__swiffy_d;
                if (a) return b.call(this, a)
            }, set: function (a) {
                var b = this.__swiffy_d;
                b && c && c.call(this, b, a)
            }, enumerable: l(d) ? d : !0
        })
    };
    ot("text", function (a) {
        return a.qj()
    }, function (a, b) {
        var c = a.i.ca(), d = a.He(), e;
        null != d && (e = function (a) {
            c.qy(d, this, a)
        });
        a.Es(c.Ca(b), e)
    });
    ot("htmlText", function (a) {
        return a.Wp()
    }, function (a, b) {
        var c = a.i.ca();
        b = c.Ca(b);
        null != a.He() ? c.kk(a.He(), b) : a.Rc(b)
    });
    ot("textColor", function (a) {
        return a.mq()
    }, function (a, b) {
        a.Is(Number(b))
    });
    ot("antiAliasType", function (a) {
        return a.Ak
    }, function (a, b) {
        "normal" != b && "advanced" != b || a.ks(String(b))
    });
    ot("autoSize", function (a) {
        return a.Wc
    }, function (a, b) {
        switch (b) {
            case !0:
                b = "left";
            case "center":
            case "left":
            case "none":
            case "right":
                break;
            default:
                b = "none"
        }
        a.ls(b)
    });
    ot("background", function (a) {
        return a.vi
    }, function (a, b) {
        a.sg(!!b)
    }, !1);
    ot("backgroundColor", function (a) {
        return a.ui
    }, function (a, b) {
        a.ms(Number(b))
    }, !1);
    ot("border", function (a) {
        return a.zi
    }, function (a, b) {
        a.os(!!b)
    }, !1);
    ot("borderColor", function (a) {
        return a.yi
    }, function (a, b) {
        a.ps(Number(b))
    }, !1);
    ot("condenseWhite", function (a) {
        return a.Fi
    }, function (a, b) {
        a.ss(!!b)
    }, !1);
    ot("embedFonts", function (a) {
        return a.Cf
    }, function (a, b) {
        a.ts(!!b)
    });
    ot("gridFitType", function (a) {
        return a.rq
    }, function (a, b) {
        "none" != b && "pixel" != b && "subpixel" != b || a.Hx(String(b))
    }, !1);
    ot("html", function (a) {
        return a.vc
    }, function (a, b) {
        b = !!b;
        if (b != a.vc) {
            var c = this.text;
            a.Ix(b);
            this.text = c
        }
    });
    ot("length", function (a) {
        return a.qj().length
    });
    ot("maxChars", function (a) {
        return a.sm
    }, function (a, b) {
        a.xs(null != b ? Number(b) : null)
    }, !1);
    ot("mouseWheelEnabled", function () {
        return !0
    }, void 0, !1);
    ot("multiline", function (a) {
        return a.Pe
    }, function (a, b) {
        a.zs(!!b)
    });
    ot("password", function (a) {
        return a.wr
    }, function (a, b) {
        a.Lx(!!b)
    }, !1);
    ot("restrict", function (a) {
        return a.Um
    }, function (a, b) {
        a.Cs(null != b ? String(b) : null)
    }, !1);
    ot("selectable", function (a) {
        return a.Xh
    }, function (a, b) {
        a.Fs(!!b)
    });
    Object.defineProperty(nt.prototype, "styleSheet", {value: void 0, enumerable: !1});
    ot("sharpness", function (a) {
        return a.Ks
    }, function (a, b) {
        a.Rx(Number(b))
    }, !1);
    Object.defineProperty(nt.prototype, "tabIndex", {value: void 0, writable: !0, enumerable: !1});
    ot("textHeight", function (a) {
        return Math.floor(a.Ll() / 20)
    });
    ot("textWidth", function (a) {
        return Math.floor(a.Ml() / 20)
    });
    ot("thickness", function (a) {
        return a.on
    }, function (a, b) {
        a.Vx(Number(b))
    }, !1);
    ot("variable", function (a) {
        return a.He()
    }, function (a, b) {
        a.kk(null != b ? String(b) : null)
    });
    ot("wordWrap", function (a) {
        return a.Fg
    }, function (a, b) {
        a.Js(!!b)
    });
    ot("type", function (a) {
        return a.Yi ? "input" : "dynamic"
    }, function (a, b) {
        b = String(b).toLowerCase();
        "input" == b ? a.Ym(!0) : "dynamic" == b && a.Ym(!1)
    }, !1);
    D(nt.prototype, null, 3);
    var pt = function () {
    };
    qi(pt, E);
    var qt = function (a) {
        return function (b) {
            Object.defineProperty(this, a, {value: b, configurable: !0, writable: !0, enumerable: !0});
            (b = this.__swiffy_d) && b != b.i.Ga && b.Zi()
        }
    }, rt = function (a) {
        Object.defineProperty(a.prototype, "enabled", {
            get: function () {
                var a = this.__swiffy_d;
                if (a) return a.enabled
            }, set: function (a) {
                var c = this.__swiffy_d;
                c && (c.enabled = !!a)
            }
        })
    }, st = function () {
    }, tt = [, , "onMouseUp", "onMouseDown", "onMouseMove", "onUnload", "onEnterFrame"];
    tt[17] = "onInitialize";
    tt[19] = "onConstruct";
    tt[7] = "onLoad";
    tt[14] = "onDragOver";
    tt[16] = "onDragOver";
    tt[8] = "onRollOut";
    tt[9] = "onRollOver";
    tt[10] = "onReleaseOutside";
    tt[11] = "onRelease";
    tt[12] = "onPress";
    tt[13] = "onDragOut";
    tt[15] = "onDragOut";
    for (var ut = {}, vt = 0; vt < tt.length; vt++) if (1 << vt & 4325120) {
        var wt = tt[vt];
        ut[wt] = {get: st, set: qt(wt)}
    }
    Object.defineProperties(pt.prototype, ut);
    D(pt.prototype, null, 3);
    var xt = function () {
    };
    qi(xt, pt);
    D(xt.prototype, null, 3);
    var yt = function () {
    };
    C(yt, "Button", xt);
    rt(yt);
    yt.prototype.useHandCursor = !0;
    Object.defineProperty(yt.prototype, "tabIndex", {value: void 0, writable: !0, enumerable: !0});
    D(yt.prototype, null, 3);
    var Y = function () {
    };
    C(Y, "MovieClip", xt);
    rt(Y);
    Y.prototype.useHandCursor = !0;
    Y.prototype.focusEnabled = void 0;
    Object.defineProperty(Y.prototype, "_droptarget", {
        get: function () {
            var a = this.__swiffy_d;
            return a ? (a = (a = a.jv()) && a.s._target) && "/" != a ? a : "" : ""
        }
    });
    Y.prototype.gotoAndStop = function (a) {
        var b = this.__swiffy_d;
        b && b.Qb(b.Zf(a), !1)
    };
    Y.prototype.gotoAndPlay = function (a) {
        var b = this.__swiffy_d;
        b && b.Qb(b.Zf(a), !0)
    };
    Y.prototype.play = function () {
        var a = this.__swiffy_d;
        a && a.play()
    };
    Y.prototype.stop = function () {
        var a = this.__swiffy_d;
        a && a.stop()
    };
    Y.prototype.nextFrame = function () {
        var a = this.__swiffy_d;
        a && a.Qb(a.ia + 1, !1)
    };
    Y.prototype.prevFrame = function () {
        var a = this.__swiffy_d;
        a && a.Qb(a.ia - 1, !1)
    };
    Y.prototype.globalToLocal = function (a) {
        var b = this.__swiffy_d;
        b && b.i.ca().$q(a, function (a) {
            a.ed(b.$())
        })
    };
    Y.prototype.localToGlobal = function (a) {
        var b = this.__swiffy_d;
        b && b.i.ca().$q(a, function (a) {
            a.eb(b.$())
        })
    };
    Y.prototype.createEmptyMovieClip = function (a, b) {
        var c = this.__swiffy_d;
        if (c) {
            b = xg(b);
            var d = new qj(c.definition.Ii(), c.i, null);
            d.Sb = !0;
            d.Gb(a);
            d.ka();
            c.de(b);
            c.Tc(d, b);
            return d.s
        }
    };
    Y.prototype.createTextField = function (a, b, c, d, e, f) {
        if (!(6 > arguments.length)) {
            var h = this.__swiffy_d;
            if (h) {
                var k = xg(b), n = xg(c), q = xg(d), u = new Xs({
                    tag: -1,
                    height: 240,
                    color: 4278190080,
                    border: !1,
                    sp: !1,
                    html: !1,
                    maxChars: null,
                    multiline: !1,
                    password: !1,
                    selectable: !0,
                    variable: null,
                    wrap: !1,
                    pa: 6 <= h.i.oc
                }, new Tc(0, 0, 20 * Math.abs(xg(e)), 20 * Math.abs(xg(f))), h.i.oc), u = new xh(u, h.i, null);
                u.Gb(String(a));
                u.setTransform(Mc(1, 0, 0, 1, 20 * n, 20 * q));
                u.ka();
                u.Sb = !0;
                h.de(k);
                h.Tc(u, k);
                return u.s
            }
        }
    };
    Y.prototype.getNextHighestDepth = function () {
        var a = this.__swiffy_d;
        return a ? a.O.yv() : void 0
    };
    Y.prototype.getInstanceAtDepth = function (a) {
        var b = this.__swiffy_d;
        a = xg(a);
        if (b && !(-16384 > a) && (a = b.O.Ic(a))) return a instanceof Rr ? a.s : b.s
    };
    Y.prototype.getSWFVersion = function () {
        var a = this.__swiffy_d;
        return a ? a.i.oc : -1
    };
    Y.prototype.setMask = function (a) {
        var b = this.__swiffy_d;
        if (b) {
            var c;
            c = ha(a) ? b.i.ca().Dp(a) : a;
            if (c instanceof Y || c instanceof nt) return b.Ve(c.__swiffy_d), !0;
            b.Ve(null);
            return !l(a)
        }
    };
    Y.prototype.attachMovie = function (a, b, c, d) {
        var e = this.__swiffy_d;
        if (e && (a = e.definition.br.pc.mm[a], l(a))) {
            c = xg(c);
            var f = md.Gl();
            a = a.ob(e.i, f);
            a.Sb = !0;
            a.Gb(b);
            e.de(c);
            e.Tc(a, c);
            if (l(d)) {
                b = a.s;
                for (var h in d) b[h] = d[h]
            }
            a.ka();
            return a.s
        }
    };
    Y.prototype.attachBitmap = function (a, b) {
        var c = this.__swiffy_d;
        if (c && a) {
            var d = new Qr(a.__swiffy_d, c.i);
            d.Sb = !0;
            c.de(b);
            c.Tc(d, b)
        }
    };
    Y.prototype.duplicateMovieClip = function (a, b, c) {
        var d = this.__swiffy_d;
        if (d) {
            var e = d.getParent();
            if (e) {
                b = xg(b);
                a = d.duplicate(e, a, b);
                if (l(c)) {
                    b = a.s;
                    for (var f in c) b[f] = c[f]
                }
                return a.s
            }
        }
    };
    Y.prototype.removeMovieClip = function () {
        var a = this.__swiffy_d;
        if (a) {
            var b = a.getParent();
            0 <= a.depth && a.Sb && b && (a.Ia(), b.removeChild(a))
        }
    };
    Y.prototype.loadMovie = function (a, b) {
        var c = this.__swiffy_d;
        c && (a = c.i.ca().Ca(a), c.Uq(a, b, this))
    };
    Y.prototype.loadVariables = function (a, b) {
        var c = this.__swiffy_d;
        c && xs(a, c.i, b, this, function () {
            return c
        })
    };
    Y.prototype.unloadMovie = function () {
        var a = this.__swiffy_d;
        a && a.dk()
    };
    Y.prototype.swapDepths = function (a) {
        var b = this.__swiffy_d, c = b ? b.getParent() : void 0;
        if (c) {
            var d = void 0;
            if (a instanceof E) {
                a = a.__swiffy_d;
                if (a.getParent() != c) return;
                d = a.depth
            } else "number" === typeof a && (d = a);
            l(d) && c.ln(b.depth, d)
        }
    };
    Y.prototype.getBytesTotal = function () {
        var a = this.__swiffy_d;
        if (a) return a.i.Cm
    };
    Y.prototype.getBytesLoaded = Y.prototype.getBytesTotal;
    Y.prototype.getBounds = function (a) {
        var b = this.__swiffy_d;
        if (b) {
            var c = ao(b).clone();
            c.xc() && c.expand(134217728, 134217728);
            if (l(a)) {
                var d = null;
                ha(a) && (a = b.i.ca().sh(a, this));
                a instanceof Y && (d = a.__swiffy_d);
                if (d) c.rm(b.$().multiply(d.$().Gq())); else return
            }
            return {xMin: c.j / 20, xMax: c.F / 20, yMin: c.l / 20, yMax: c.H / 20}
        }
    };
    Y.prototype.getURL = function (a, b, c) {
        var d = this.__swiffy_d;
        if (d) {
            var e = d.i.ca();
            a = e.Ca(a);
            var f = 0;
            ha(c) && (c = c.toLowerCase(), "get" == c ? f = 1 : "post" == c && (f = 2));
            a = new Fs(e, this, a, b, f);
            d.i.Qh(a)
        }
    };
    Y.prototype.hitTest = function (a, b, c) {
        var d = this.__swiffy_d;
        if (l(a) && d) {
            var e = ao(d).eb(d.$());
            if (!l(b) && !l(c)) {
                if (c = null, a instanceof Y ? c = a.__swiffy_d : ha(a) && (c = d.i.ca().sh(a, this)), null != c) return d = ao(c).eb(c.$()), e.ur(d)
            } else if (l(b)) return a *= 20, b *= 20, e.contains(a, b) && (!c || d.accept(new qh(a, b)))
        }
        return !1
    };
    Y.prototype.clear = function () {
        var a = this.__swiffy_d;
        a && a.Fa().clear()
    };
    Y.prototype.moveTo = function (a, b) {
        if (2 <= arguments.length) {
            var c = this.__swiffy_d;
            c && (a = xg(a), b = xg(b), c.Fa().moveTo(a, b))
        }
    };
    Y.prototype.lineTo = function (a, b) {
        if (2 <= arguments.length) {
            var c = this.__swiffy_d;
            c && (a = xg(a), b = xg(b), c.Fa().lineTo(a, b))
        }
    };
    Y.prototype.curveTo = function (a, b, c, d) {
        if (4 <= arguments.length) {
            var e = this.__swiffy_d;
            e && (a = xg(a), b = xg(b), c = xg(c), d = xg(d), e.Fa().kb(a, b, c, d))
        }
    };
    Y.prototype.lineStyle = function (a, b, c, d, e, f, h, k) {
        var n = this.__swiffy_d;
        n && n.Fa().Qq(a, b, c, d, e, f, h, k)
    };
    Y.prototype.beginFill = function (a, b) {
        var c = this.__swiffy_d;
        c && c.Fa().no(a, b)
    };
    var zt = function (a, b) {
        if (!a) return null;
        if (a instanceof Yi) return bi(a);
        var c = r, d = {}, e, f, h, k;
        if (c.Fl(a, d, "a", "b", "c", "d", "tx", "ty")) c = d.a, e = d.b, f = d.c, h = d.d, k = d.tx, d = d.ty; else if (b) if (c.Fl(a, d, "a", "b", "d", "e", "g", "h")) c = d.a * Lc, e = d.b * Lc, f = d.d * Lc, h = d.e * Lc, k = d.g, d = d.h; else if (c.Fl(a, d, "matrixType", "x", "y", "w", "h", "r") && "box" == d.matrixType) {
            h = Math.cos(d.r);
            f = Math.sin(d.r);
            k = d.w * Lc;
            var n = d.h * Lc, c = h * k;
            e = f * n;
            f = -f * n;
            h *= k;
            k = d.w / 2 + d.x;
            d = d.h / 2 + d.y
        } else return null; else return null;
        return Mc(+c, +e, +f, +h, 20 * k, 20 *
            d)
    };
    Y.prototype.beginBitmapFill = function (a, b, c) {
        var d = this.__swiffy_d;
        d && (a = a && a.__swiffy_d, a instanceof er && d.Fa().Mt(a, zt(b, !1), l(c) ? !!c : !0))
    };
    Y.prototype.beginGradientFill = function (a, b, c, d, e, f, h, k) {
        var n = this.__swiffy_d;
        n && (e = zt(e, !0)) && n.Fa().oo(a, b, c, d, e, f, h, k)
    };
    Y.prototype.endFill = function () {
        var a = this.__swiffy_d;
        a && a.Fa().up()
    };
    Y.prototype.startDrag = function (a, b, c, d, e) {
        var f = this.__swiffy_d;
        f && f.i.Ps(f, a, b, c, d, e)
    };
    Y.prototype.stopDrag = function () {
        var a = this.__swiffy_d;
        a && a.i.qk()
    };
    mt(Y.prototype, "_currentframe", function (a) {
        return Math.max(1, a.ia + 1)
    });
    mt(Y.prototype, "_totalframes", function (a) {
        return a.definition.frameCount
    });
    mt(Y.prototype, "_framesloaded", function (a) {
        return a.definition.frameCount
    });
    jt(Y.prototype, "_lockroot", function (a) {
        return a.Mj
    }, function (a, b) {
        a.ws(Boolean(b))
    });
    jt(Y.prototype, "blendMode", function (a) {
        return wc[a.rd]
    }, function (a, b) {
        var c = b - 1;
        c != c && (c = wc.indexOf(String(b)));
        a.tg(wc[c] ? c : 0)
    });
    jt(Y.prototype, "cacheAsBitmap", function (a) {
        return a.Yl()
    }, function (a, b) {
        a.Wm(Boolean(b))
    });
    D(Y.prototype, null, 3);
    var At = function () {
    };
    C(At, "Video", E);
    Object.defineProperty(At.prototype, "width", {
        get: function () {
            return this.__swiffy_d.width
        }
    });
    Object.defineProperty(At.prototype, "height", {
        get: function () {
            return this.__swiffy_d.height
        }
    });
    Object.defineProperty(At.prototype, "smoothing", {
        get: function () {
            return this.__swiffy_d.smoothing
        }, set: function (a) {
            this.__swiffy_d.smoothing = a
        }
    });
    Object.defineProperty(At.prototype, "deblocking", {
        get: function () {
            return this.__swiffy_d.deblocking
        }, set: function (a) {
            this.__swiffy_d.deblocking = a
        }
    });
    At.prototype.attachVideo = function () {
    };
    At.prototype.clear = function () {
    };
    D(At.prototype, null, 3);
    var Bt = function (a, b) {
        Object.defineProperty(this, "nodeType", {value: a, writable: !1});
        Object.defineProperty(this, "attributes", {value: {}, writable: !1});
        1 == a ? (this.nodeName = b, this.nodeValue = null) : (this.nodeName = null, this.nodeValue = b);
        oe(this, {nextSibling: null, previousSibling: null, parentNode: null, childNodes: []})
    };
    C(Bt, "XMLNode");
    Object.defineProperty(Bt.prototype, "childNodes", {
        get: function () {
            return x(this).childNodes.slice(0)
        }
    });
    Object.defineProperty(Bt.prototype, "firstChild", {
        get: function () {
            return x(this).childNodes[0]
        }
    });
    Object.defineProperty(Bt.prototype, "lastChild", {
        get: function () {
            var a = x(this).childNodes;
            return a[a.length - 1]
        }
    });
    Object.defineProperty(Bt.prototype, "nextSibling", {
        get: function () {
            return x(this).nextSibling
        }
    });
    Object.defineProperty(Bt.prototype, "parentNode", {
        get: function () {
            return x(this).parentNode
        }
    });
    Object.defineProperty(Bt.prototype, "previousSibling", {
        get: function () {
            return x(this).previousSibling
        }
    });
    Bt.prototype.toString = function () {
        return Ct(this, !1, 0)
    };
    var Ct = function (a, b, c) {
        b = "undefined" !== typeof b ? b : !1;
        c = "undefined" !== typeof c ? c : 0;
        var d = "";
        if (b) for (var e = 0; e < c; e++) d += "  ";
        var f = b ? "\n" : "";
        if (3 == a.nodeType) return d + Rd(a.nodeValue) + f;
        var h = "";
        if (null == a.nodeName) a.xmlDecl && (h += d + a.xmlDecl + f), a.docTypeDecl && (h += d + a.docTypeDecl + f); else {
            var h = h + (d + "<" + a.nodeName), k;
            for (k in a.attributes) h += " " + k + '="' + a.attributes[k] + '"';
            if (0 == x(a).childNodes.length) return h + " />";
            h += ">" + f
        }
        k = x(a).childNodes;
        for (e = 0; e < k.length; e++) h += Ct(k[e], b, c + 1);
        null != a.nodeName &&
        (h += d + "</" + a.nodeName + ">" + f);
        return h
    };
    Bt.prototype.appendChild = function (a) {
        if (!~x(this).childNodes.indexOf(a)) {
            a.removeNode();
            var b = this.lastChild;
            x(this).childNodes.push(a);
            b && (x(b).nextSibling = a, x(a).previousSibling = b);
            x(a).parentNode = this
        }
    };
    Bt.prototype.insertBefore = function (a, b) {
        var c = x(this).childNodes;
        if (!~c.indexOf(a)) {
            var d = c.indexOf(b);
            if (~d) {
                a.removeNode();
                x(a).parentNode = this;
                var e = c[d - 1], f = c[d];
                c.splice(d, 0, a);
                e ? (x(e).nextSibling = a, x(a).previousSibling = e) : x(a).previousSibling = null;
                f ? (x(f).previousSibling = a, x(a).nextSibling = f) : x(a).nextSibling = null
            }
        }
    };
    Bt.prototype.removeNode = function () {
        var a = x(this);
        a.parentNode && Ha(x(a.parentNode).childNodes, this);
        a.nextSibling && (x(a.nextSibling).previousSibling = a.previousSibling);
        a.previousSibling && (x(a.previousSibling).nextSibling = a.nextSibling);
        a.nextSibling = null;
        a.previousSibling = null;
        a.parentNode = null
    };
    Bt.prototype.cloneNode = function (a) {
        var b = new Bt(this.nodeType, null);
        b.nodeName = this.nodeName;
        b.nodeValue = this.nodeValue;
        for (var c in this.attributes) b.attributes[c] = this.attributes[c];
        if (a) {
            c = x(this).childNodes;
            for (var d = x(b).childNodes, e = 0; e < c.length; e++) {
                var f = c[e].cloneNode(a);
                d[e] = f
            }
        }
        return b
    };
    Bt.prototype.hasChildNodes = function () {
        return 0 < x(this).childNodes.length
    };
    var Dt = function (a, b, c) {
        for (var d = null, e = x(b), f; f = c.next();) {
            var h;
            switch (f.type) {
                case "close":
                    return f.value;
                case "tag":
                    h = 1;
                    break;
                case "text":
                case "cdata":
                    h = 3;
                    break;
                case "xml_declaration":
                    a.xmlDecl || (a.xmlDecl = "");
                    a.xmlDecl += f.value;
                    continue;
                case "doctype":
                    a.docTypeDecl = f.value;
                    continue;
                default:
                    continue
            }
            h = new Bt(h, f.value);
            var k = x(h);
            k.parentNode = b;
            d && (k.previousSibling = d, x(d).nextSibling = h);
            d = h;
            e.childNodes.push(h);
            if ("tag" == f.type) {
                if (f.attributes) for (k = 0; k < f.attributes.length; k++) {
                    var n = f.attributes[k];
                    h.attributes[n.name] = n.value
                }
                h = Dt(a, h, c);
                if (null === h || h != f.value) return a.status = -9, h
            }
        }
        return null
    }, Et = function (a) {
        Bt.call(this, 1, null);
        ct(this);
        a && this.parseXML(a)
    };
    C(Et, "XML", Bt);
    Et.prototype.status = 0;
    Et.prototype.createElement = function (a) {
        return new Bt(1, a)
    };
    Et.prototype.createTextNode = function (a) {
        return new Bt(3, a)
    };
    Et.prototype.addRequestHeader = function (a, b) {
        dt(this, a, b)
    };
    Et.prototype.load = function (a) {
        et(a, this)
    };
    Et.prototype.send = function (a, b, c) {
        if (0 == arguments.length) return !1;
        ft(a, this.toString(), b, c);
        return !0
    };
    Et.prototype.sendAndLoad = function (a, b, c) {
        b && et(a, b, this, c)
    };
    Et.prototype.onData = function (a) {
        var b = l(a);
        b && oi("parseXML", this, a);
        this.loaded = b;
        oi("onLoad", this, b)
    };
    Et.prototype.onLoad = function () {
    };
    Et.prototype.parseXML = function (a) {
        for (var b = x(this).childNodes, c = b.length - 1; 0 <= c; c--) b[c].removeNode();
        for (var d in this.attributes) delete this.attributes[d];
        this.docTypeDecl = this.xmlDecl = void 0;
        a = new Zd(a, this.ignoreWhite, !0);
        try {
            this.status = 0, null !== Dt(this, this, a) && (this.status = -10)
        } catch (e) {
            this.status = Ft(e.type)
        }
    };
    var Ft = function (a) {
        switch (a) {
            case "cdata":
                return -2;
            case "xml_declaration":
                return -3;
            case "doctype":
                return -4;
            case "comment":
                return -5;
            case "tag":
            case "close":
                return -6;
            case "attribute":
                return -8;
            default:
                return -1
        }
    };
    D(Et.prototype, null, 3);
    var It = function (a) {
        Object.defineProperty(this, "__swiffy_vm", {value: a});
        this.String = Gt(String, function (b) {
            return a.Ca(b)
        }, ["fromCharCode"]);
        D(this, "String", 3);
        this.Number = Gt(Number, function (b) {
            return a.Hb(b)
        }, ["MAX_VALUE", "MIN_VALUE", "NaN", "NEGATIVE_INFINITY", "POSITIVE_INFINITY"]);
        D(this, "Number", 3);
        this.Boolean = Gt(Boolean, function (b) {
            return a.Bg(b)
        });
        D(this, "Boolean", 3);
        this.AsBroadcaster = new ri(a);
        D(this, "AsBroadcaster", 3);
        this.setInterval = function () {
            return Ht(a, gg, arguments)
        };
        D(this, "setInterval",
            3);
        this.setTimeout = function () {
            return Ht(a, fg, arguments)
        };
        D(this, "setTimeout", 3);
        this.getVersion = function () {
            return "HTML 11,0,0,0"
        };
        D(this, "getVersion", 3);
        this.updateAfterEvent = function () {
            a.i.jd()
        };
        D(this, "updateAfterEvent", 3);
        this.escape = function (b) {
            return encodeURIComponent(a.Ca(b)).replace(/[.!*'()]/g, function (a) {
                return "%" + a.charCodeAt(0).toString(16).toUpperCase()
            })
        };
        D(this, "escape", 3);
        this.unescape = function (b) {
            return Nr(a.Ca(b))
        };
        D(this, "unescape", 3);
        this._global = this;
        D(this, "_global", 3);
        Object.prototype.hasOwnProperty("addProperty") ||
        (Function.prototype.toString = function () {
            return "[type Function]"
        }, Object.prototype.unwatch = function (a) {
            if (1 > arguments.length) return !1;
            var c = this[a];
            delete this[a];
            this[a] = c;
            return !0
        }, Object.prototype.watch = function (a, c, d) {
            if (2 > arguments.length) return !1;
            for (var e = this, f = null, h = this; h; h = Object.getPrototypeOf(h)) if (null != Object.getOwnPropertyDescriptor(h, a)) {
                e = h;
                f = Object.getOwnPropertyDescriptor(h, a);
                break
            }
            if (!f || f.configurable) {
                var k = e[a];
                delete e[a];
                Object.defineProperty(e, a, {
                    get: function () {
                        return k
                    },
                    set: function (e) {
                        return k = c.call(this, a, k, e, d)
                    }, configurable: !0
                })
            }
            return !0
        }, Object.prototype.addProperty = function (a, c, d) {
            var e = Object.getOwnPropertyDescriptor(this, a);
            if (null == a || "" == a || !ka(c) || d && !ka(d) || e && !e.configurable) return !1;
            if (!d || e && !e.writable) d = function () {
            };
            Object.defineProperty(this, a, {get: c, set: d, configurable: !0, enumerable: !(e && !e.enumerable)});
            return !0
        }, D(Object.prototype, ["watch", "unwatch", "addProperty"], 3))
    };
    C(It, "global");
    var Gt = function (a, b, c) {
        b.__swiffy_override = function (c) {
            return new a(b(c))
        };
        b.__swiffy_wrapped_type = a;
        if (l(c)) for (var d = 0; d < c.length; d++) b[c[d]] = a[c[d]];
        D(b, null, 3);
        return b
    };
    It.prototype.ASSetPropFlags = function (a, b, c, d) {
        la(a) && D(a, b, c, d)
    };
    It.prototype.clearInterval = function (a) {
        ig(a)
    };
    It.prototype.clearTimeout = function (a) {
        ig(a)
    };
    It.prototype.parseFloat = parseFloat;
    It.prototype.parseInt = function (a, b) {
        !l(b) && Bg(a) && (b = 8);
        return parseInt(a, b)
    };
    It.prototype.isFinite = function (a) {
        return isFinite(a)
    };
    It.prototype.isNaN = function (a) {
        return isNaN(a)
    };
    It.prototype.NaN = NaN;
    It.prototype.Infinity = Infinity;
    var Ht = function (a, b, c) {
        var d = c[0];
        if (ka(d) && 2 <= c.length) {
            var e = Array.prototype.slice.call(c, 2);
            c = c[1];
            return b(function () {
                d.apply(Ri(null), e);
                a.i.xb.flush()
            }, c)
        }
        if (la(d) && 3 <= c.length) {
            var f = c[1], e = Array.prototype.slice.call(c, 3);
            c = c[2];
            return b(function () {
                ka(d[f]) && (d[f].apply(Ri(d), e), a.i.xb.flush())
            }, c)
        }
    };
    It.prototype.Array = Array;
    It.prototype.AsBroadcaster = ri;
    It.prototype.Button = yt;
    It.prototype.flash = {
        display: {BitmapData: ur},
        external: {ExternalInterface: Gi},
        filters: {BevelFilter: xi, BlurFilter: yi, ColorMatrixFilter: zi, ConvolutionFilter: Di, DropShadowFilter: Ei, GlowFilter: Hi, GradientBevelFilter: Ii, GradientGlowFilter: Ji},
        geom: {ColorTransform: Ai, Matrix: Yi, Point: Xi, Rectangle: Zi, Transform: it}
    };
    It.prototype.Color = bt;
    It.prototype.Date = Date;
    It.prototype.Error = Fi;
    It.prototype.Function = Ui;
    It.prototype.LoadVars = gt;
    It.prototype.Math = Math;
    It.prototype.MovieClip = Y;
    It.prototype.MovieClipLoader = ht;
    It.prototype.NetConnection = Oi;
    It.prototype.NetStream = Pi;
    It.prototype.Object = Ri;
    Object.defineProperty(Ri, "__swiffy_override", {value: Si});
    Object.defineProperty(Ri, "__swiffy_wrapped_type", {value: Object});
    It.prototype.Sound = aj;
    It.prototype.System = new ej;
    It.prototype.TextField = nt;
    It.prototype.TextFormat = fj;
    It.prototype.XML = Et;
    It.prototype.XMLNode = Bt;
    It.prototype.Video = At;
    Object.defineProperty(It.prototype, "Key", {
        get: function () {
            return this.__swiffy_vm.getKey()
        }, set: function () {
        }
    });
    Object.defineProperty(It.prototype, "Mouse", {
        get: function () {
            return this.__swiffy_vm.Mh
        }, set: function () {
        }
    });
    Object.defineProperty(It.prototype, "Stage", {
        get: function () {
            return this.__swiffy_vm.i.W.s
        }, set: function () {
        }
    });
    D(It.prototype, null, 3);
    C(Array, "Array");
    C(Boolean, "Boolean");
    C(Date, "Date");
    C(Math, "Math");
    C(Number, "Number");
    C(String, "String");
    var Jt = function (a, b) {
        this.object = a;
        this.method = b
    };
    Jt.prototype.lq = function () {
        for (var a = this.object; a = Object.getPrototypeOf(a);) for (var b = Object.getOwnPropertyNames(a), c = 0; c < b.length; c++) if (a[b[c]] === this.method) return Object.getPrototypeOf(a);
        return null
    };
    var Kt = function (a, b, c) {
        this.fa = a;
        this.data = {};
        this.Wa = b;
        this.Zu = c
    };
    g = Kt.prototype;
    g.get = function (a) {
        var b = this.fa.Pa(this.data, a);
        return b in this.data ? this.data[b] : this.Wa.get(a)
    };
    g.call = function (a, b) {
        var c = this.fa.Pa(this.data, a);
        return c in this.data ? (c = this.data[c], c instanceof Jt ? si(c.object, Object.getPrototypeOf(c.method.prototype).constructor, b, "super") : si(this.Pb(), c, b, a)) : this.Wa.call(a, b)
    };
    g.set = function (a, b) {
        var c = this.fa.Pa(this.data, a);
        return c in this.data ? (this.data[c] = b, !0) : this.Wa.set(a, b)
    };
    g.Ad = function (a, b) {
        this.fa.Zh(this.data, a, b)
    };
    g.Pi = function (a) {
        a = this.fa.pe(this.data, a);
        a in this.data || (this.data[a] = void 0)
    };
    g.wf = function (a) {
        return this.fa.Pa(this.data, a) in this.data ? !1 : this.Wa.wf(a)
    };
    g.wg = function (a) {
        this.Wa.wg(a)
    };
    g.Pb = function () {
        return this.Wa.Pb()
    };
    g.Qf = function () {
        return this.Wa.Qf()
    };
    g.getFunction = function () {
        return this.Zu
    };
    var Lt = function (a, b, c) {
        this.fa = a;
        this.data = c;
        this.Wa = b
    };
    g = Lt.prototype;
    g.get = function (a) {
        var b = this.fa.Pa(this.data, a);
        return b in this.data ? this.data[b] : this.Wa.get(a)
    };
    g.call = function (a, b) {
        var c = this.fa.Pa(this.data, a);
        return c in this.data ? si(this.data, this.data[c], b, a) : this.Wa.call(a, b)
    };
    g.set = function (a, b) {
        var c = this.fa.Pa(this.data, a);
        return c in this.data ? (this.data[c] = b, !0) : this.Wa.set(a, b)
    };
    g.Ad = function (a, b) {
        var c = this.fa.Pa(this.data, a);
        c in this.data ? this.data[c] = b : this.Wa.Ad(a, b)
    };
    g.Pi = function (a) {
        this.fa.Pa(this.data, a) in this.data || this.Wa.Pi(a)
    };
    g.wf = function (a) {
        var b = this.fa.kh(this.data, a);
        return l(b) ? b : this.Wa.wf(a)
    };
    g.wg = function (a) {
        this.Wa.wg(a)
    };
    g.Pb = function () {
        return this.Wa.Pb()
    };
    g.Qf = function () {
        return this.Wa.Qf()
    };
    g.getFunction = function () {
        return this.Wa.getFunction()
    };
    var Mt = function (a, b) {
        this.fa = a;
        this.pn = this.mn = this.data = b
    };
    g = Mt.prototype;
    g.get = function (a) {
        var b = this.fa.Pa(this.data, a);
        return b in this.data ? this.data[b] : "this" == a.toLowerCase() ? this.pn : this.fa.Al(a)
    };
    g.call = function (a, b) {
        var c = this.data, d = this.fa.Pa(c, a);
        return d in c ? si(c, c[d], b, a) : si(void 0, this.fa.Al(a), b, a)
    };
    g.set = function (a, b) {
        this.fa.Zh(this.data, a, b);
        return !0
    };
    g.Ad = function (a, b) {
        this.fa.Zh(this.data, a, b)
    };
    g.Pi = function (a) {
        a = this.fa.pe(this.data, a);
        a in this.data || (this.data[a] = void 0)
    };
    g.wf = function (a) {
        var b = this.fa.kh(this.data, a);
        return l(b) ? b : !!this.fa.kh(this.fa.pb, a)
    };
    g.wg = function (a) {
        a ? this.data = this.mn = a : (this.mn = null, this.data = this.pn)
    };
    g.Pb = function () {
        return this.mn
    };
    g.Qf = function () {
        return this.pn
    };
    g.getFunction = function () {
        return null
    };
    var Nt = function (a) {
        this.yd = this;
        this.Xx(a.oc);
        this.Ja = [];
        this.Wb = 0;
        this.wb = this.Bc = 4;
        this.No = [];
        this.i = a;
        this.D = null;
        this.pb = new It(this);
        this.Qd = new ne;
        this.Mh = new Ni;
        this.Gh(this.Mh);
        this.Xf = new Li;
        this.Gh(this.Xf);
        this.km();
        this.Wx()
    };
    g = Nt.prototype;
    g.tl = function () {
        return 2
    };
    g.Ah = function () {
        return this.i
    };
    g.Jr = function () {
    };
    g.Hs = function () {
    };
    g.rp = !1;
    g.Xx = function (a) {
        this.pe = lj;
        this.oa = Cj;
        this.Pa = mj;
        this.hq = rj;
        this.gr = Aj;
        this.Bg = zj;
        this.Hb = uj;
        this.Ca = vj;
        5 <= a && (this.gr = Bj, this.Hb = tj, this.Ca = wj, 6 <= a && (this.oa = Dj, this.hq = pj, 7 <= a && (this.Pa = this.pe = ij, this.Bg = yj, this.Hb = sj, this.Ca = xj)))
    };
    g.Wx = function () {
        var a = this, b = this.i.Td;
        b.SetVariable = function (b, d) {
            var e = a.di(String(b), a.i.Ga.s);
            if (e) {
                var f = a.pe(e.path, e.Rh);
                e.path[f] = String(d)
            }
        };
        b.GetVariable = function (b) {
            if (b = a.di(String(b), a.i.Ga.s)) {
                var d = a.Pa(b.path, b.Rh);
                return d in b.path ? String(b.path[d]) : null
            }
            return null
        }
    };
    g.getKey = function () {
        return this.Xf
    };
    g.Gh = function (a) {
        this.Al("AsBroadcaster").initialize(a)
    };
    var Ot = function (a, b) {
        a.broadcastMessage(b)
    };
    Nt.prototype.wx = function (a) {
        this.Ja = [];
        this.Wb = 0;
        this.wb = this.Bc = 4;
        this.D = new Mt(this, a.s)
    };
    var Pt = function (a) {
        a = a.replace(/\.\.|\/:?|:/g, function (a) {
            return ".." == a ? "_parent" : "."
        });
        "." == a[0] && (a = "_root" + a);
        "." == a[a.length - 1] && (a = a.substring(0, a.length - 1));
        return a
    }, Qt = function (a) {
        for (var b = [], c = 0, d = a.length, e = 0; e < d; e++) switch (a[e]) {
            case ".":
                var f = e + 1;
                if (f != d && "." == a[f]) {
                    e > c && b.push(a.substring(c, e));
                    b.push("_parent");
                    c = e + 2;
                    e++;
                    break
                }
            case ":":
                e > c && b.push(a.substring(c, e));
                c = e + 1;
                break;
            case "/":
                0 == e ? b.push("_root") : e > c && b.push(a.substring(c, e)), c = e + 1
        }
        e > c ? b.push(0 == c && e == d ? a : a.substring(c, e)) :
            0 == b.length && b.push("");
        return b
    };
    Nt.prototype.di = function (a, b) {
        if (b = b || this.Pb()) {
            var c = 0 < a.indexOf(":") ? a.split(":") : a.split(".");
            if (1 < c.length) {
                var d = c.slice(0, c.length - 1).join(".");
                b = this.sh(d, b)
            }
            if (b) return {path: b, Rh: c[c.length - 1]}
        }
    };
    Nt.prototype.Al = function (a) {
        return this.La(this.pb, a)
    };
    var jj = {"boolean": {}, number: {}, string: {}, object: void 0, "function": void 0, undefined: {}}, Rt = function (a) {
        var b = Object.getOwnPropertyNames(a.constructor.prototype);
        a = jj[typeof a];
        for (var c = 0; c < b.length; ++c) {
            var d = b[c], e = d.toLowerCase();
            d != e && (a[e] = d)
        }
    };
    Rt(!1);
    Rt(0);
    Rt("");
    var kj = function (a) {
        if (!a) return {constructor: "constructor"};
        var b = a.__swiffy_nm;
        if (!b || b.__swiffy_nm != a) {
            for (var b = Object.create(kj(Object.getPrototypeOf(a))), c = Object.getOwnPropertyNames(a), d = 0; d < c.length; ++d) {
                var e = c[d], f = e.toLowerCase();
                e != f && (b[f] = e)
            }
            Object.defineProperty(b, "__swiffy_nm", {value: a, writable: !0});
            Object.defineProperty(a, "__swiffy_nm", {value: b, writable: !0})
        }
        return b
    };
    g = Nt.prototype;
    g.$q = function (a, b) {
        if (la(a)) {
            var c = this.Pa(a, "x"), d = this.Pa(a, "y"), e = a[c], f = a[d];
            ja(e) && ja(f) && (e = new Ec(20 * e, 20 * f), b(e), a[c] = e.x / 20, a[d] = e.y / 20)
        }
    };
    g.Pb = function () {
        return this.D.Pb()
    };
    g.Gd = function () {
        var a = this.D.Pb();
        return a ? a.__swiffy_d : null
    };
    g.push = function (a) {
        this.Ja[this.wb++] = a
    };
    g.pop = function () {
        if (this.wb > this.Bc) {
            var a = this.Ja[--this.wb];
            this.Ja[this.wb] = void 0;
            return a
        }
    };
    g.X = function () {
        return this.Hb(this.pop())
    };
    g.xa = function () {
        return this.Ca(this.pop())
    };
    g.Xd = function () {
        return this.Bg(this.pop())
    };
    g.Ar = function () {
        return this.hi(this.pop())
    };
    g.Yj = function () {
        for (var a = Number(this.pop()), a = Math.min(a, this.wb - this.Bc), b = [], c = 0; c < a; ++c) b[c] = this.pop();
        return b
    };
    g.hi = function (a) {
        if (a instanceof E || (a = this.Dp(String(a)))) return a
    };
    g.sh = function (a, b) {
        if (a) for (var c = Qt(a), d = 0; d < c.length && b; d++) b = this.La(b, c[d]);
        return b
    };
    g.Dp = function (a) {
        return this.sh(a, this.Pb())
    };
    g.ag = function () {
        Ot(this.Mh, "onMouseDown")
    };
    g.ar = function () {
        this.yf(new Dc(4));
        Ot(this.Mh, "onMouseMove")
    };
    g.Rj = function () {
        Ot(this.Mh, "onMouseUp")
    };
    g.sr = function () {
        Ot(this.i.W.s, "onResize")
    };
    g.Gj = function (a) {
        this.Xf.Gj(a)
    };
    g.uo = function () {
        Ot(this.Xf, "onKeyUp")
    };
    g.Fj = function (a) {
        this.Xf.Fj(a)
    };
    g.so = function () {
        Ot(this.Xf, "onKeyDown")
    };
    g.ql = function () {
    };
    g.zp = function () {
    };
    g.ak = function () {
    };
    g.nm = function () {
    };
    g.To = function (a, b, c) {
        b = this.Pa(a, b);
        var d = !(b in a);
        if (!d) {
            var e = a.__swiffy_child_ref[b];
            e && (d = a[b], d = d === e && d.__swiffy_d.depth > c.__swiffy_d.depth)
        }
        d && (b = this.pe(a, b), a[b] = c, a.__swiffy_child_ref[b] = c)
    };
    g.Rr = function (a, b, c) {
        b = this.Pa(a, b);
        c === a[b] && (delete a[b], delete a.__swiffy_child_ref[b])
    };
    g.Om = function (a, b, c) {
        this.i.xb.xk(this.jx.bind(this, a, b, c))
    };
    g.jx = function (a, b, c) {
        this.um(a, b, function (a, e, f, h) {
            var k = c;
            l(h.nh[f]) || (h.nh[f] = []);
            h.nh[f].push(b);
            f in e && (b.Rc(String(e[f])), k = e[f]);
            Object.defineProperty(e, f, a.xu(k, h.nh[f]))
        })
    };
    g.xn = function (a, b) {
        this.i.xb.xk(this.py.bind(this, a, b))
    };
    g.py = function (a, b) {
        this.um(a, b, function (a, d, e, f) {
            (a = f.nh[e]) && Ha(a, b)
        })
    };
    g.qy = function (a, b, c) {
        this.um(a, b, function (a, b, f) {
            b[f] = c
        })
    };
    g.um = function (a, b, c) {
        if (b = this.ul(b, qj)) a = Pt(a), (a = (b = this.di(a, b.s)) && b.path) && a.__swiffy_d && (b = this.pe(a, b.Rh), c(this, a, b, a.__swiffy_d))
    };
    g.ul = function (a, b) {
        for (var c = a; c && !(c instanceof b);) c = c.getParent();
        return c
    };
    g.Kr = function (a, b) {
        var c = -16384 + b, d = "_level" + b;
        d in Y.prototype || Object.defineProperty(Y.prototype, d, {
            get: function () {
                var a = this.__swiffy_d;
                if (a && (a = a.i.W.Ic(c))) return a.s
            }, set: function (a) {
                Object.defineProperty(this, d, {value: a, configurable: !0, writable: !0, enumerable: !0})
            }
        })
    };
    g.fireEvent = function (a, b, c, d) {
        var e = a.s, f = tt[c.type];
        a = !1;
        if (b) for (c = 0; c < b.actions.length; ++c) {
            var h = b.actions[c];
            if (!h.Mo || h.Mo(this)) d ? h.Fq() : this.i.xb.add(h.Fq), h.stopPropagation && (a = !0)
        }
        if (f) {
            var k = this;
            b = function () {
                var a = k.La(e, f);
                ka(a) && a.call(e)
            };
            d ? b() : this.i.xb.add(b)
        }
        return a
    };
    g.km = function () {
        var a = this;
        $i.prototype.la = function () {
            return Object.create(E.prototype)
        };
        xh.prototype.la = function () {
            var b = Object.create(nt.prototype);
            a.Gh(b);
            b.addListener(b);
            return b
        };
        Ss.prototype.la = function () {
            var b = Object.create(cj.prototype);
            a.Gh(b);
            return b
        };
        oj.prototype.la = function () {
            return Object.create(xt.prototype)
        };
        qj.prototype.la = function () {
            var a = void 0, c = this.definition.lm;
            c && (a = Ti[c]);
            return Object.create((a ? a : Y).prototype)
        };
        nj.prototype.la = function () {
            return Object.create(yt.prototype)
        };
        er.prototype.la = function () {
            return {}
        };
        Wr.prototype.la = function () {
            return Object.create(At.prototype)
        }
    };
    g.ka = function (a, b) {
        var c = a.s, d = new Dc(17), e = new Dc(19), f = new Dc(7);
        b ? (a.fireEvent(d, !0), this.i.xb.xk(function () {
            a.fireEvent(e, !0);
            c.constructor()
        }), a.fireEvent(f), a.Zg()) : (a.Zg(), a.fireEvent(d, !0), a.fireEvent(e, !0), c.constructor(), a.fireEvent(f))
    };
    g.jr = function () {
    };
    g.xu = function (a, b) {
        var c = a, d = this;
        return {
            get: function () {
                return c
            }, set: function (a) {
                c = a;
                a = d.Ca(a);
                for (var f = 0; f < b.length; f++) b[f].Rc(a)
            }, configurable: !0
        }
    };
    g.kh = function (a, b) {
        if (null != a) {
            var c = this.Pa(a, b);
            if (c in a) {
                var d = delete a[c];
                this.vx(a, c);
                return d
            }
        }
    };
    g.vx = function (a, b) {
        if (a instanceof Y) {
            var c = a.__swiffy_d;
            c && (c = c.O.Sp(b)) && be(a, c, b)
        }
    };
    g.us = function (a, b) {
        this.i.Ga.s[a] = b
    };
    g.Of = function () {
        return this.Qd
    };
    g.ah = function (a, b) {
        var c = this.ru(a, b), d = this;
        return function () {
            this.Md() || (d.wx(this), c())
        }
    };
    g.ru = function (a) {
        a = this.Wg(a, 4);
        a = "return " + St(Tt, a);
        return Function("vm", a)(this)
    };
    g.Df = function (a, b, c, d, e) {
        rg(120);
        var f = r;
        r = this;
        try {
            var h = a(b, c, d, e);
            sg();
            return h
        } catch (k) {
            tg(k, !!sg())
        } finally {
            r = f
        }
    };
    g.Wg = function (a, b) {
        return a ? "function(){" + this.Jo(a, b) + "}" : "null"
    };
    g.Jo = function (a, b) {
        for (var c = 0, d = "for(var j=0;;){" + St(Ut) + "switch(j){", e = [-1], f = 0; f < a.length;) {
            var h = a[f++];
            switch (h.type) {
                case 157:
                case 153:
                    e[h.target] = -1
            }
        }
        for (h = f = 0; f < a.length; ++f) e[f] && (e[f] = h++);
        f = {labels: e, registerCount: b};
        d += "case 0:";
        for (h = 0; h < a.length; h++) {
            var k = e[h];
            k && (d += "case " + k + ":");
            c++;
            var k = a[h], n = Z[k.type];
            n && (d = n.compile ? d + n.compile.call(n, k, this, f) : d + St(n))
        }
        return d + "default:return;}}"
    };
    var Vt = function (a, b) {
        for (var c = "vm." + a.action + "(", d = 1; d < arguments.length; ++d) 1 < d && (c += ","), c += arguments[d];
        return c + ")"
    }, St = function (a, b) {
        return Vt.apply(null, arguments) + ";"
    }, Wt = function (a) {
        return l(a) && 0 <= a ? "j=" + a + ";continue;" : "return;"
    };
    g = Nt.prototype;
    g.si = function (a) {
        return !(a instanceof qj && a.$l())
    };
    g.nr = function (a, b) {
        a && a.ds(b);
        b && b.es(a)
    };
    g.yf = function (a) {
        for (var b = this.i.Oc, c = b.length - 1; 0 <= c; c--) b[c].Md() || b[c].fireEvent(a)
    };
    g.vp = function (a, b) {
        b.pa() && b.Gb(a.yh())
    };
    g.Ho = function (a, b) {
        a = String(a);
        b = String(b);
        return a < b ? -1 : a > b ? 1 : 0
    };
    g.Go = function (a, b) {
        a = String(a).toUpperCase();
        b = String(b).toUpperCase();
        return a < b ? -1 : a > b ? 1 : 0
    };
    g.Io = function (a, b) {
        ja(a) && ja(b) || (a = String(a), b = String(b));
        return a < b ? -1 : a > b ? 1 : 0
    };
    var Xt = "_x _y _xscale _yscale _currentframe _totalframes _alpha _visible _width _height _rotation _target _framesloaded _name _droptarget _url _highquality _focusrect _soundbuftime _quality _xmouse _ymouse".split(" "),
        hj = function () {
            var a = {};
            Xt.forEach(function (b) {
                a[b] = !0
            });
            return a
        }(), Z = {
            4: function () {
                var a = this.Gd();
                a instanceof qj && a.Qb(a.ia + 1, !1)
            }, 5: function () {
                var a = this.Gd();
                a instanceof qj && a.Qb(a.ia - 1, !1)
            }, 6: function () {
                var a = this.Gd();
                a instanceof qj && a.play()
            }, 7: function () {
                var a = this.Gd();
                a instanceof
                qj && a.stop()
            }, 9: function () {
                var a = this.Gd();
                a instanceof qj && a.ec().jn()
            }, 10: function () {
                var a = this.X(), b = this.X();
                this.push(b + a)
            }, 11: function () {
                var a = this.X(), b = this.X();
                this.push(b - a)
            }, 12: function () {
                var a = this.X(), b = this.X();
                this.push(b * a)
            }, 13: function () {
                var a = this.X(), b = this.X();
                this.push(b / a)
            }, 14: function () {
                var a = this.X(), b = this.X();
                this.push(this.gr(b, a))
            }, 15: function () {
                var a = this.X(), b = this.X();
                this.push(b < a)
            }, 16: function () {
                var a = this.Xd(), b = this.Xd();
                this.push(b && a)
            }, 17: function () {
                var a = this.Xd(),
                    b = this.Xd();
                this.push(b || a)
            }, 18: function () {
                var a = this.Xd();
                this.push(!a)
            }, 19: function () {
                var a = this.xa(), b = this.xa();
                this.push(b == a)
            }, 20: function () {
                var a = this.xa();
                this.push(a.length)
            }, 21: function () {
                var a = this.pop() | 0, b = this.pop() | 0, c = this.xa();
                this.push(c.substr(Math.max(0, b - 1), a))
            }
        }, Yt = function () {
            return this.pop()
        };
    Z[23] = Yt;
    Z[24] = function () {
        var a = this.X(), a = 0 > a ? Math.ceil(a) : Math.floor(a);
        this.push(a)
    };
    Z[28] = function () {
        var a = this.xa();
        this.push(this.He(a))
    };
    Nt.prototype.He = function (a) {
        a = Qt(a);
        for (var b = this.D.get(a[0]), c = 1; c < a.length && l(b); ++c) b = this.La(b, a[c]);
        return b
    };
    Z[29] = function () {
        var a = this.pop(), b = this.xa();
        this.kk(b, a)
    };
    Nt.prototype.kk = function (a, b) {
        var c = Qt(a);
        if (1 == c.length) this.D.set(c[0], b); else {
            for (var d = this.D.get(c[0]), e = 1; l(d) && e < c.length - 1; ++e) d = this.La(d, c[e]);
            l(d) && this.Zh(d, c[e], b)
        }
    };
    Z[33] = function () {
        var a = this.xa(), b = this.xa();
        this.push(b + a)
    };
    Z[34] = function () {
        var a = Xt[this.X()], b = this.hi(this.pop());
        this.push(b && a && b[a])
    };
    Z[35] = function () {
        var a = this.pop(), b = Xt[this.X()], c = this.hi(this.pop());
        c && b && (c[b] = a)
    };
    Z[36] = function () {
        var a = this.X(), b = this.xa(), c = this.Ar(), d = this.Gd();
        c && d && c.__swiffy_d && c.__swiffy_d.duplicate(d, b, a + -16384)
    };
    Z[37] = function () {
        var a = this.Ar();
        a instanceof Y && a.removeMovieClip()
    };
    Z[38] = function () {
        var a = this.pop();
        ng(l(a) ? this.Ca(a) : "undefined")
    };
    Z[51] = function () {
        var a = this.X();
        this.push(String.fromCharCode(a))
    };
    Z[50] = function () {
        var a = this.xa();
        this.push(a.charCodeAt(0))
    };
    Z[52] = function () {
        this.push(this.i.pq())
    };
    Z[48] = function () {
        var a = this.X(), b;
        do b = Math.floor(Math.random() * a); while (b == a && 0 < a);
        this.push(b)
    };
    Z[60] = function () {
        var a = this.pop(), b = this.xa();
        b && this.D.Ad(b, a)
    };
    Z[65] = function () {
        var a = this.xa();
        a && this.D.Pi(a)
    };
    Z[59] = function () {
        var a = this.Eu(this.pop());
        this.push(a)
    };
    Nt.prototype.Eu = function (a) {
        a = this.Ca(a);
        a = Qt(a);
        if (1 == a.length) return this.D.wf(a[0]);
        var b = this.D.get(a[0]), c;
        for (c = 1; l(b) && c < a.length - 1; ++c) b = this.La(b, a[c]);
        return !!this.kh(b, a[c])
    };
    Z[62] = function () {
    };
    Z[62].Ka = 2;
    Z[62].compile = function () {
        return "return " + St(Yt)
    };
    Z[63] = function () {
        var a = this.X(), b = this.X();
        this.push(b % a)
    };
    Z[71] = function () {
        var a = this.pop(), b = this.pop();
        this.push(ha(b) || ha(a) ? this.Ca(b) + this.Ca(a) : this.Hb(b) + this.Hb(a))
    };
    Z[72] = function () {
        var a = this.pop(), b = this.pop();
        this.push(this.Pq(b, a))
    };
    Nt.prototype.Pq = function (a, b) {
        var c = typeof a, d = typeof b;
        if ("number" !== c || "number" !== d) {
            if ("object" === c && null !== a && (a = Zt(a), c = typeof a, "object" === c) || "object" === d && null !== b && (b = Zt(b), d = typeof b, "object" === d)) return !1;
            if ("string" === c && "string" === d) return a < b;
            a = this.Hb(a);
            b = this.Hb(b)
        }
        return a !== a || b !== b ? void 0 : a < b
    };
    Z[103] = function () {
        var a = this.pop(), b = this.pop();
        this.push(this.Pq(a, b))
    };
    Z[73] = function () {
        var a = this.pop(), b = this.pop();
        this.push(this.oa(b, a))
    };
    Nt.prototype.Kp = function (a, b, c, d) {
        "object" === b && null !== a && (a = Zt(a), b = typeof a);
        "object" === d && null !== c && (c = Zt(c), d = typeof c);
        if ("object" === b || "object" === d) return void 0 === a || null === a ? void 0 === c || null === c : a === c;
        if (a != c) return !1;
        if ("string" === b) {
            if (("boolean" === d || "number" === d) && "" == a.trim()) return !1
        } else if ("string" === d && ("boolean" === b || "number" === b) && "" == c.trim()) return !1;
        return !0
    };
    var Zt = function (a) {
        return a.valueOf ? ka(a.valueOf) ? a.valueOf() : a.valueOf : a.toString()
    };
    Z[102] = function () {
        var a = this.pop(), b = this.pop();
        this.push(b === a)
    };
    Z[41] = function () {
        var a = this.xa(), b = this.xa();
        this.push(b < a)
    };
    Z[42] = function () {
        throw new og(this.pop());
    };
    Z[42].Ka = 2;
    Z[104] = function () {
        var a = this.xa(), b = this.xa();
        this.push(b > a)
    };
    Z[105] = function () {
        var a = this.pop(), b = this.pop();
        ka(a) && ka(b) && qi(b, a)
    };
    Z[74] = function () {
        var a = this.X();
        this.push(a)
    };
    Z[75] = function () {
        var a = this.xa();
        this.push(a)
    };
    Z[76] = function () {
        var a = this.pop();
        this.push(a);
        this.push(a)
    };
    Z[77] = function () {
        var a = this.pop(), b = this.pop();
        this.push(a);
        this.push(b)
    };
    Z[78] = function () {
        var a = this.pop(), b = this.pop();
        this.push(this.La(b, a))
    };
    Nt.prototype.La = function (a, b) {
        if (null != a) {
            a instanceof Jt && (a = a.lq());
            if (!ja(b)) b = this.Pa(a, this.Ca(b)); else if (ha(a)) return;
            return a[b]
        }
    };
    Nt.prototype.Fl = function (a, b, c) {
        for (var d = 2; d < arguments.length; ++d) {
            var e = arguments[d];
            if (!l(b[e])) {
                var f = this.La(a, e);
                if (!l(f)) return !1;
                b[e] = f
            }
        }
        return !0
    };
    Z[79] = function () {
        var a = this.pop(), b = this.pop(), c = this.pop();
        this.Zh(c, b, a)
    };
    Nt.prototype.Zh = function (a, b, c) {
        null != a && (ja(b) || (b = this.pe(a, this.Ca(b)), "length" == b ? a instanceof Array && (c = Math.max(0, c | 0)) : "prototype" == b && ka(a) && (c.constructor = a)), a[b] = c)
    };
    Z[80] = function () {
        var a = this.X();
        this.push(++a)
    };
    Z[81] = function () {
        var a = this.X();
        this.push(--a)
    };
    Z[96] = function () {
        var a = this.X(), b = this.X();
        this.push(a & b)
    };
    Z[97] = function () {
        var a = this.X(), b = this.X();
        this.push(a | b)
    };
    Z[98] = function () {
        var a = this.X(), b = this.X();
        this.push(b ^ a)
    };
    Z[99] = function () {
        var a = this.X(), b = this.X();
        this.push(b << a)
    };
    Z[100] = function () {
        var a = this.X(), b = this.X();
        this.push(b >> a)
    };
    Z[101] = function () {
        var a = this.X(), b = this.X();
        this.push(b >>> a)
    };
    Z[58] = function () {
        var a = this.xa(), b = this.pop();
        this.push(!!this.kh(b, a))
    };
    Z[129] = function (a) {
        var b = this.Gd();
        b instanceof qj && b.Qb(a, !1)
    };
    Z[129].compile = function (a) {
        return St(this, a.frame)
    };
    Z[140] = function (a) {
        var b = this.Gd();
        b instanceof qj && (a = b.Zf(a), void 0 != a && b.Qb(a, !1))
    };
    Z[140].compile = function (a) {
        return St(this, Ba(a.label))
    };
    Z[136] = function () {
    };
    Z[136].compile = function (a, b) {
        b.No = a.constants;
        return St(this)
    };
    Z[32] = function () {
        var a = this.pop();
        a instanceof E || (a = String(a), a = this.sh(a, this.D.Qf()), a instanceof E || (a = void 0));
        this.D.wg(a)
    };
    Z[69] = function () {
        var a = this.pop(), b = void 0;
        a instanceof E && (b = a.__swiffy_d.rj());
        this.push(b)
    };
    Z[305] = function (a) {
        this.push(a)
    };
    Z[305].compile = function (a) {
        a = a.value;
        ha(a) && (a = Ba(a));
        return St(this, a)
    };
    Z[306] = function () {
        this.push(void 0)
    };
    Z[307] = function () {
        this.push(Number.POSITIVE_INFINITY)
    };
    Z[308] = function () {
        this.push(Number.NEGATIVE_INFINITY)
    };
    Z[309] = function () {
        this.push(Number.NaN)
    };
    Z[304] = function (a) {
        this.push(a)
    };
    Z[304].compile = function (a, b) {
        var c = b.No[a.index];
        l(c) && (c = Ba(c));
        return St(this, c)
    };
    Z[303] = function (a) {
        this.push(this.Ja[a + this.Wb])
    };
    Z[303].compile = function (a, b, c) {
        a = a.index;
        return a < c.registerCount ? St(this, a) : St(Z[306])
    };
    Z[135] = function (a) {
        this.Ja[a + this.Wb] = this.Ja[this.wb - 1]
    };
    Z[135].compile = function (a, b, c) {
        a = a.index;
        return a < c.registerCount ? St(this, a) : ""
    };
    Z[154] = function (a, b, c) {
        var d = this.xa(), e = this.xa();
        a = new Fs(this, this.Pb(), e, d, a, b, c);
        this.i.Qh(a)
    };
    Z[154].compile = function (a) {
        return St(this, a.method, a.target, a.variables)
    };
    Z[148] = function (a) {
        var b = this.pop();
        if (b instanceof Object) {
            var c = this.D;
            this.D = new Lt(this, c, b);
            try {
                this.Df(a)
            } finally {
                this.D = c
            }
        }
    };
    Z[148].compile = function (a, b, c) {
        return St(this, b.Wg(a.body, c.registerCount))
    };
    Z[155] = function (a) {
        this.push(this.fp(4, a))
    };
    Z[155].compile = function (a, b) {
        var c = b.Ko(a.args, [], 0, a.body, 4);
        return St(this, c)
    };
    Z[142] = function (a, b) {
        this.push(this.fp(a, b))
    };
    Z[142].compile = function (a, b) {
        var c = b.Ko(a.args, a.preloads, a.suppress, a.body, a.registerCount);
        return St(this, a.registerCount, c)
    };
    Nt.prototype.Ko = function (a, b, c, d, e) {
        var f = "function(self,fn,caller,args){";
        c & 4 || (f += St($t, '"this"', "self"));
        c & 1 || (f += St(au, "self", "fn"));
        c & 2 || (f += "args=Array.prototype.slice.call(args);args.callee=fn;", f += "args.caller=caller;", f += St($t, '"arguments"', "args"));
        for (c = 0; c < b.length && c + 1 < e; ++c) var h = Vt(bu, Ba(b[c])), f = f + St(cu, c + 1, h);
        for (c = 0; c < a.length; ++c) b = a[c], h = "args[" + c + "]", f = ha(b) ? f + St($t, Ba(b), h) : f + St(cu, b, h);
        return f + this.Jo(d, e) + "}"
    };
    Nt.prototype.fp = function (a, b) {
        var c = this, d = this.D, e = function () {
            var f = c.D, h = c.D.Pb();
            c.D = new Kt(c, 5 < c.i.oc ? d : new Mt(c, this), e);
            var k = c.Wb, n = c.Bc;
            c.Wb = c.wb;
            c.wb += a;
            c.Bc = c.wb;
            try {
                return c.Df(b, this, e, f.getFunction(), arguments)
            } finally {
                for (var q = c.Wb; q < c.wb; ++q) c.Ja[q] = void 0;
                c.wb = c.Wb;
                c.Wb = k;
                c.Bc = n;
                c.D = f;
                c.D.wg(h)
            }
        };
        qi(e, Ri);
        return e
    };
    Z[143] = function (a, b, c, d, e) {
        try {
            this.Df(a)
        } catch (k) {
            if (k instanceof og) {
                var f = k.value;
                if (null != b) {
                    var h;
                    l(e) ? (h = this.D.get(e), this.D.Ad(e, f)) : (d += this.Wb, d >= this.Wb && d < this.Bc && (this.Ja[d] = f));
                    try {
                        this.Df(b)
                    } finally {
                        l(e) && (l(h) ? this.D.Ad(e, h) : this.D.wf(e))
                    }
                } else throw k;
            } else throw c = null, k;
        } finally {
            null != c && this.Df(c)
        }
    };
    Z[143].compile = function (a, b, c) {
        var d = a.variable;
        l(d) && (d = Ba(d));
        return St(this, b.Wg(a.tryBlock, c.registerCount), b.Wg(a.catchBlock, c.registerCount), b.Wg(a.finallyBlock, c.registerCount), a.register, d)
    };
    Z[61] = function () {
        var a = this.xa(), b = this.Yj(), c = Qt(a);
        if (2 > c.length) this.push(this.D.call(c[0], b)); else {
            for (var d = this.D.get(c[0]), e = 1; null != d && e < c.length; ++e) var f = d, d = this.La(f, c[e]);
            this.push(si(f, d, b, a))
        }
    };
    Z[61].Ka = 1;
    var si = function (a, b, c) {
        if (ka(b)) return b.apply(Ri(a), c)
    };
    Z[82] = function () {
        var a = this.pop(), b = this.pop(), c = this.Yj();
        this.push(this.Rt(a, b, c))
    };
    Z[82].Ka = 1;
    Nt.prototype.Rt = function (a, b, c) {
        if (null != b) {
            if (null != a && "" !== a) {
                var d = b;
                if (d instanceof Jt) {
                    b = d.lq();
                    if (!b) return;
                    d = d.object
                }
                b = this.La(b, a);
                ka(b) && "__swiffy_override" in b && (b = b.__swiffy_override);
                return si(d, b, c, a)
            }
            if (b instanceof Jt) return si(b.object, Object.getPrototypeOf(b.method.prototype).constructor, c, "super");
            (a = this.D.Pb()) || (a = this.D.Qf());
            ka(b) && "__swiffy_override" in b && (b = b.__swiffy_override);
            return si(a, b, c, "")
        }
    };
    Nt.prototype.ud = function (a, b) {
        ka(a) || (a = Ri);
        var c;
        (c = a.__swiffy_override) ? c = c.apply(Ri(null), b) : (c = Object.create(a.prototype), a.apply(Ri(c), b));
        this.push(c)
    };
    Z[64] = function () {
        var a = this.xa(), b = this.D.get(a), c = this.Yj();
        this.ud(b, c, a)
    };
    Z[83] = function () {
        var a = this.pop(), b = this.pop(), c = this.Yj(), d;
        null != b && (d = null != a && "" !== a ? this.La(b, a) : b);
        this.ud(d, c, a)
    };
    Z[67] = function () {
        for (var a = Si(), b = Number(this.pop()), c = 0; c < b; c++) {
            var d = this.pop(), e = this.xa();
            a[e] = d
        }
        this.push(a)
    };
    Z[66] = function () {
        for (var a = [], b = Number(this.pop()), c = 0; c < b; c++) a[c] = this.pop();
        this.push(a)
    };
    Z[68] = function () {
        var a = this.pop();
        this.push(a instanceof Y ? "movieclip" : null == a || void 0 == a ? String(a) : typeof a)
    };
    Z[85] = function () {
        var a = this.pop();
        this.push(void 0);
        if ("string" !== typeof a) for (var b in a) rd(b) || this.push(b)
    };
    Z[153] = function () {
    };
    Z[153].Ka = 2;
    Z[153].compile = function (a, b, c) {
        return Wt(c.labels[a.target])
    };
    Z[157] = function () {
        return this.Xd()
    };
    Z[157].Ka = 1;
    Z[157].compile = function (a, b, c) {
        return "if(" + Vt(this) + "){" + Wt(c.labels[a.target]) + "}"
    };
    Z[158] = function () {
        var a = this.xa(), b = this.di(a);
        if (a = b && b.path.__swiffy_d) if (b = a.Zf(b.Rh), void 0 != b && (b = a.kv(b))) {
            for (var c = this.D, d = this.Wb, e = this.Bc, f = this.wb, h = this.Ja, k = 0; k < b.length; k++) b[k].qh(a, !0);
            this.Ja = h;
            this.D = c;
            this.Wb = d;
            this.Bc = e;
            this.wb = f
        }
    };
    Z[158].Ka = 1;
    Z[159] = function (a, b) {
        var c = this.xa(), d = this.di(c);
        if (c = d && d.path.__swiffy_d) d = c.Zf(d.Rh), void 0 != d && c.Qb(d + a, b)
    };
    Z[159].compile = function (a) {
        return St(this, a.frameBias, a.play)
    };
    Z[44] = function () {
        var a = this.pop(), b = Number(this.pop()), a = (a = a ? a.prototype : null) ? a : {}, c;
        if (a.hasOwnProperty("__swiffy_if")) c = a.__swiffy_if; else {
            c = [];
            var d = a.__swiffy_if;
            if (d) for (var e = 0; e < d.length; ++e) c.push(d[e]);
            Object.defineProperty(a, "__swiffy_if", {value: c})
        }
        for (var f = 0; f < b; ++f) if (a = (d = this.pop()) ? d.prototype : null) if (c.push(d), d = a.__swiffy_if) for (e = 0; e < d.length; ++e) c.push(d[e])
    };
    var du = function (a, b) {
        if (ka(b)) {
            "__swiffy_wrapped_type" in b && (b = b.__swiffy_wrapped_type);
            if (a instanceof b) return a;
            if (a instanceof Object) {
                var c = a.__swiffy_if;
                if (c && -1 != c.indexOf(b)) return a
            }
        }
        return null
    };
    Z[43] = function () {
        var a = this.pop(), b = this.pop();
        this.push(du(a, b))
    };
    Z[84] = function () {
        var a = this.pop(), b = this.pop();
        this.push(!!du(b, a))
    };
    Z[39] = function () {
        var a = this.pop(), b = this.Xd(), c = this.Xd(), d = c ? this.X() : void 0, e = c ? this.X() : void 0, f = c ? this.X() : void 0, c = c ? this.X() : void 0, a = a ? a.__swiffy_d : null;
        a instanceof qj && this.i.Ps(a, b, c, f, e, d)
    };
    Z[40] = function () {
        this.i.qk()
    };
    Z[1E3] = function () {
    };
    var cu = function (a, b) {
        this.Ja[a + this.Wb] = b
    };
    Z[1001] = cu;
    var $t = function (a, b) {
        this.D.Ad(a, b)
    };
    Z[1002] = $t;
    var au = function (a, b) {
        this.D.Ad("super", new Jt(a, b))
    };
    Z[1003] = au;
    var bu = function (a) {
        return this.D.get(a)
    };
    Z[1004] = bu;
    var Tt = function (a) {
        var b = this;
        return function () {
            b.Df(a)
        }
    };
    Z[1005] = Tt;
    var Ut = function () {
        ++ug
    };
    Z[1006] = Ut;
    Pa({
        pB: 4,
        wB: 5,
        tB: 6,
        uC: 7,
        vC: 9,
        jt: 10,
        ut: 11,
        rt: 12,
        mt: 13,
        nt: 14,
        LESS: 15,
        Dy: 16,
        sB: 17,
        st: 18,
        AC: 19,
        DC: 20,
        BC: 21,
        tt: 23,
        LC: 24,
        eA: 28,
        mC: 29,
        lC: 32,
        zC: 33,
        bA: 34,
        kC: 35,
        az: 36,
        WB: 37,
        OC: 38,
        tC: 39,
        Hz: 40,
        EC: 41,
        kf: 42,
        Yy: 43,
        zA: 44,
        TB: 48,
        Zy: 50,
        Ey: 51,
        cA: 52,
        yz: 58,
        Az: 59,
        wz: 60,
        Wy: 61,
        XB: 62,
        qt: 63,
        mB: 64,
        xz: 65,
        FA: 66,
        HA: 67,
        QC: 68,
        KC: 69,
        By: 71,
        VA: 72,
        Kz: 73,
        MC: 74,
        NC: 75,
        LB: 76,
        sC: 77,
        aA: 78,
        jC: 79,
        ot: 80,
        lt: 81,
        Xy: 82,
        lB: 83,
        KA: 84,
        Jz: 85,
        Ly: 96,
        Ny: 97,
        Qy: 98,
        My: 99,
        Oy: 100,
        Py: 101,
        yC: 102,
        GREATER: 103,
        CC: 104,
        Nz: 105,
        fA: 129,
        wC: 135,
        ez: 136,
        hA: 140,
        vz: 142,
        wk: 143,
        TC: 148,
        pt: 153,
        dA: 154,
        uz: 155,
        kA: 157,
        ie: 158,
        gA: 159,
        PB: 303,
        KB: 304,
        RB: 305,
        QB: 306,
        OB: 307,
        NB: 308,
        MB: 309,
        lz: 1E3,
        IA: 1001,
        GA: 1002,
        JA: 1003,
        $z: 1004,
        Ry: 1005,
        $y: 1006
    }, function (a, b) {
        var c = Z[a];
        c.action = b;
        Nt.prototype[b] = c
    });
    jc.wh().Dr("as2", "swiffy.vm.as2.VM", Nt);
    var eu = function (a, b, c) {
        Zn.call(this);
        a && (this.bitmapData = a);
        this.pixelSnapping = b;
        this.smoothing = c
    }, fu = N(eu, "flash.display.Bitmap", Zn);
    Object.defineProperty(eu.prototype, "bitmapData", {
        get: function () {
            var a = this.__swiffy_d.Kb;
            return a ? a.s : null
        }, set: function (a) {
            a = O(a, aq);
            this.__swiffy_d.Bx(a ? a.__swiffy_d : null)
        }
    });
    Object.defineProperty(eu.prototype, "pixelSnapping", {
        get: function () {
            return this.__swiffy_d.zr
        }, set: function (a) {
            this.__swiffy_d.zr = String(a)
        }
    });
    Object.defineProperty(eu.prototype, "smoothing", {
        get: function () {
            return this.__swiffy_d.smoothing
        }, set: function (a) {
            this.__swiffy_d.smoothing = !!a
        }
    });
    Sk(eu, function (a, b) {
        return new Qr(null, a, b)
    });
    var gu = function () {
        Zn.call(this);
        var a = this.__swiffy_d;
        a.qc |= 127;
        a.Zi();
        P(this, "contextMenu", "flash.ui.ContextMenu", null);
        P(this, "focusRect", "Boolean", null)
    }, zm = N(gu, "flash.display.InteractiveObject", Zn);
    Object.defineProperty(gu.prototype, "tabIndex", {
        get: function () {
            return this.__swiffy_d.tabIndex
        }, set: function (a) {
            this.__swiffy_d.tabIndex = a | 0
        }
    });
    Object.defineProperty(gu.prototype, "tabEnabled", {
        get: function () {
            return this.__swiffy_d.cm()
        }, set: function (a) {
            this.__swiffy_d.Xe = !!a
        }
    });
    Object.defineProperty(gu.prototype, "mouseEnabled", {
        get: function () {
            return this.__swiffy_d.bg
        }, set: function (a) {
            return this.__swiffy_d.ys(!!a)
        }
    });
    Object.defineProperty(gu.prototype, "doubleClickEnabled", {
        get: function () {
            return this.__swiffy_d.jl
        }, set: function (a) {
            return this.__swiffy_d.Dx(!!a)
        }
    });
    var hu = function (a, b, c, d) {
        a = new Wm(a, b, !1);
        b = x(a);
        d && (b.mg = d.s);
        d = c.i.va;
        c = c.$();
        b.Kj = d.un(c) / 20;
        b.Lj = d.vn(c) / 20;
        b.xo = d.Zv();
        return a
    }, iu = function (a, b) {
        return function (c, d) {
            return hu(a, b, c, d.mg)
        }
    }, ju = function (a) {
        return function () {
            var b = new tm(a, !1, !1);
            x(b).nn = !0;
            return b
        }
    }, ku = function (a) {
        return function () {
            return new tm(a, !0, !1)
        }
    }, lu = {};
    lu[24] = ku("added");
    lu[21] = ju("addedToStage");
    lu[25] = ku("removed");
    lu[23] = ju("removedFromStage");
    lu[11] = iu("click", !0);
    lu[22] = iu("doubleClick", !0);
    lu[2] = iu("mouseUp", !0);
    lu[3] = iu("mouseDown", !0);
    lu[8] = iu("rollOut", !1);
    lu[9] = iu("rollOver", !1);
    var mu = function () {
        gu.call(this)
    };
    N(mu, "flash.display.DisplayObjectContainer", gu);
    Object.defineProperty(mu.prototype, "tabChildren", {value: !0, writable: !0});
    Object.defineProperty(mu.prototype, "numChildren", {
        get: function () {
            return this.__swiffy_d.Ae()
        }
    });
    Object.defineProperty(gu.prototype, "mouseChildren", {
        get: function () {
            return this.__swiffy_d.Qj
        }, set: function (a) {
            return this.__swiffy_d.Kx(!!a)
        }
    });
    var nu = function (a) {
        ul(a, "child");
        a = O(a, Wn);
        return a.__swiffy_d
    }, ou = function (a, b, c) {
        b = nu(b);
        a = a.__swiffy_d;
        if (b === a) throw H(2024);
        if (b.contains(a)) throw H(2150);
        if (!l(c)) c = a.Ae(); else if (0 > c || c > a.Ae()) throw H(2006);
        a.Ne(b, c)
    };
    mu.prototype.addChild = function (a) {
        ou(this, a);
        return a
    };
    mu.prototype.addChildAt = function (a, b) {
        ou(this, a, b | 0);
        return a
    };
    mu.prototype.contains = function (a) {
        a = nu(a);
        return this.__swiffy_d.contains(a)
    };
    mu.prototype.getChildAt = function (a) {
        if (a = this.__swiffy_d.ze(a | 0)) return a.s;
        throw H(2006);
    };
    mu.prototype.getChildByName = function (a) {
        return (a = this.__swiffy_d.fv(a)) ? a.s : a
    };
    mu.prototype.getChildIndex = function (a) {
        a = nu(a);
        a = this.__swiffy_d.Lf(a);
        if (-1 == a) throw H(2025);
        return a
    };
    mu.prototype.removeChild = function (a) {
        a = nu(a);
        var b = this.__swiffy_d;
        if (!b.sq(a)) throw H(2025);
        b.Uh(a)
    };
    mu.prototype.removeChildAt = function (a) {
        var b = this.__swiffy_d;
        if (a = b.ze(a | 0)) return b.Uh(a), a.s;
        throw H(2006);
    };
    mu.prototype.setChildIndex = function (a, b) {
        var c = nu(a);
        b |= 0;
        var d = this.__swiffy_d;
        if (!d.sq(c)) throw H(2025);
        d.Ne(c, b)
    };
    mu.prototype.swapChildren = function (a, b) {
        this.swapChildrenAt(this.getChildIndex(a), this.getChildIndex(b))
    };
    mu.prototype.swapChildrenAt = function (a, b) {
        a |= 0;
        b |= 0;
        var c = this.__swiffy_d, d = c.ze(a), e = c.ze(b);
        if (!d || !e) throw H(2006);
        c.Ne(d, b);
        c.Ne(e, a)
    };
    var pu = function () {
        gu.call(this);
        var a = new Om;
        M(this, "contentLoaderInfo", a);
        a = a.__swiffy_d;
        a.Jx(r.Of().Sc);
        a.Wq = this;
        M(this, "uncaughtErrorEvents", null)
    }, qu = N(pu, "flash.display.Loader", mu);
    Sk(qu, function (a, b) {
        return a.W.definition.Ii().ob(a, null, b)
    });
    Object.defineProperty(pu.prototype, "content", {
        get: function () {
            return this.contentLoaderInfo.content
        }
    });
    pu.prototype.close = function () {
        Q(this, "close")
    };
    pu.prototype.load = function (a, b) {
        a = O(a, jo);
        b = O(b, No);
        Q(this, "load");
        var c = b || new Mo, d = c.applicationDomain ? x(c.applicationDomain) : r.yd.Wk(), e = a.url, f = this.contentLoaderInfo, h = f.__swiffy_d;
        Or(e, Pr(h.Fm));
        var k = this, n = this.__swiffy_d;
        Es(e, n.i, d, a.method, a.data ? a.data.toString() : null, {
            Db: function () {
                k.unload();
                f.dispatchEvent(new tm("open"))
            }, hb: function (a, b) {
                h.Yc = a;
                h.Zc = b;
                f.dispatchEvent(new an("progress", !1, !1, a, b))
            }, sb: function (a, b) {
                var f = a.ob(n.i, null);
                f.ws(!0);
                f.Sb = !0;
                f.Gb(n.i.yh());
                f.vs(h);
                f.ka();
                h.Ec = d;
                h.xg(e);
                h.content = f.s;
                var k = ys(e);
                h.contentType = zs[k] || null;
                k = c.requestedContentParent ? c.requestedContentParent.__swiffy_d : n;
                k.Ne(f, k.Ae());
                k.i.Za();
                n.i.ca().nm(h, b);
                n.i.Za()
            }, fb: function (a) {
                f.dispatchEvent(new Cm("httpStatus", !1, !1, a));
                200 == a ? f.dispatchEvent(ln(2124, e)) : f.dispatchEvent(ln(2035, e))
            }
        }, Ao(a))
    };
    pu.prototype.loadBytes = function (a, b) {
        O(a, uo);
        O(b, No);
        Q(this, "loadBytes")
    };
    pu.prototype.loadFilePromise = function (a, b) {
        O(b, No);
        Q(this, "loadFilePromise")
    };
    pu.prototype.unload = function () {
        var a = this.__swiffy_d;
        a.Ae() && (a.Mr(), a = this.contentLoaderInfo, a.__swiffy_d.reset(), a.dispatchEvent(new tm("unload")))
    };
    pu.prototype.unloadAndStop = function () {
        Q(this, "unloadAndStop");
        this.unload()
    };
    var ru = function () {
        Zn.call(this);
        M(this, "graphics", $p.create(this.__swiffy_d))
    };
    N(ru, "flash.display.Shape", Zn);
    Sk(ru, function (a, b) {
        return new gs(a, b)
    });
    var su = function () {
        gu.call(this);
        this.__swiffy_d.Xe = !0
    }, tu = N(su, "flash.display.SimpleButton", gu);
    Sk(su, function (a, b) {
        var c = new Yr(0, !1, [], [], []);
        return new Ur(c, a, null, b)
    });
    vk(tu, "enabled", function () {
        return this.__swiffy_d.enabled
    }, function (a) {
        this.__swiffy_d.enabled = !!a
    });
    su.prototype.useHandCursor = !0;
    var uu = function (a, b) {
        J(tu, a, function () {
            var a = this.__swiffy_d.Hv(b);
            return a ? a.s : null
        });
        K(tu, a, function (a) {
            a = O(a, Wn);
            this.__swiffy_d.Tx(b, a ? a.__swiffy_d : null)
        })
    };
    uu("upState", 1);
    uu("overState", 2);
    uu("downState", 4);
    uu("hitTestState", 8);
    var vu = function () {
        gu.call(this);
        var a = this.__swiffy_d;
        a.qs(!1);
        a.Zg();
        M(this, "graphics", $p.create(a))
    }, wu = N(vu, "flash.display.Sprite", mu);
    Sk(wu, function (a, b) {
        return a.W.definition.Ii().ob(a, null, b)
    });
    Object.defineProperty(vu.prototype, "buttonMode", {
        set: function (a) {
            this.__swiffy_d.qs(Boolean(a))
        }, get: function () {
            return this.__swiffy_d.Tg
        }
    });
    Object.defineProperty(vu.prototype, "soundTransform", {
        set: function (a) {
            O(a, go);
            Q(this, "soundTransform")
        }, get: function () {
            Q(this, "soundTransform");
            return new fo
        }
    });
    vu.prototype.useHandCursor = !0;
    var xu = function () {
        vu.call(this)
    };
    N(xu, "flash.display.MovieClip", vu);
    var yu = function (a) {
        return a.__swiffy_d
    };
    xu.prototype.addFrameScript = function (a) {
        for (var b = yu(this).Jp, c = 1; c < arguments.length; c += 2) {
            var d = arguments[c - 1] | 0;
            if (0 <= d) {
                var e = arguments[c];
                b[d] = ka(e) ? e : null
            }
        }
    };
    xu.prototype.stop = function () {
        yu(this).stop()
    };
    xu.prototype.play = function () {
        yu(this).play()
    };
    xu.prototype.prevScene = function () {
        yu(this).cx()
    };
    xu.prototype.nextScene = function () {
        yu(this).Pw()
    };
    xu.prototype.prevFrame = function () {
        var a = yu(this);
        a.Qb(a.ia - 1, !1)
    };
    xu.prototype.nextFrame = function () {
        var a = yu(this);
        a.Qb(a.ia + 1, !1)
    };
    var zu = function (a, b, c, d) {
        a = yu(a);
        var e = a.Zf(b, c);
        if (l(e)) a.el(e, d); else if (0 != b) throw H(2109, b, c);
    };
    xu.prototype.gotoAndStop = function (a, b) {
        zu(this, a, b, !1)
    };
    xu.prototype.gotoAndPlay = function (a, b) {
        zu(this, a, b, !0)
    };
    Object.defineProperty(xu.prototype, "currentFrame", {
        get: function () {
            return yu(this).ia + 1
        }
    });
    Object.defineProperty(xu.prototype, "framesLoaded", {
        get: function () {
            return yu(this).nj()
        }
    });
    Object.defineProperty(xu.prototype, "totalFrames", {
        get: function () {
            return yu(this).nj()
        }
    });
    Object.defineProperty(xu.prototype, "isPlaying", {
        get: function () {
            return yu(this).Ph
        }
    });
    Object.defineProperty(xu.prototype, "currentFrameLabel", {
        get: function () {
            var a = yu(this), b = a.bp();
            return b && b.offset === a.ia ? b.name : null
        }
    });
    Object.defineProperty(xu.prototype, "currentLabel", {
        get: function () {
            var a = yu(this).bp();
            return a ? a.name : null
        }
    });
    var Au = function (a, b) {
        var c = a.definition.Xb, d = c.mc[b], c = c.Vm[b], e = [];
        if (!d || !c) return e;
        for (var f = 0; f < c.Jf.length; f++) {
            var h = c.Jf[f];
            e.push(new Mm(h.offset - d.offset + 1, h.name))
        }
        return e
    };
    Object.defineProperty(xu.prototype, "currentLabels", {
        get: function () {
            var a = yu(this);
            return Au(a, a.definition.Xb.zh(a.ia))
        }
    });
    var Bu = function (a, b) {
        var c = a.definition.Xb.mc[b], d = a.definition.Xb.Vm[b];
        return c && d ? new mm(c.name, d.numFrames, Au(a, b)) : null
    };
    Object.defineProperty(xu.prototype, "currentScene", {
        get: function () {
            var a = yu(this);
            return Bu(a, a.definition.Xb.zh(a.ia))
        }
    });
    Object.defineProperty(xu.prototype, "scenes", {
        get: function () {
            for (var a = yu(this), b = a.definition.Xb.mc, c = [], d = 0; d < b.length; d++) c.push(Bu(a, d));
            return c
        }
    });
    var Cu = function () {
        gu.call(this);
        M(this, "allowsFullScreen", !1);
        M(this, "allowsFullScreenInteractive", !1);
        P(this, "color", "uint", 0);
        P(this, "colorCorrection", "String", "default");
        M(this, "colorCorrectionSupport", "unsupported");
        M(this, "contentsScaleFactor", 1);
        P(this, "focus", "flash.display.InteractiveObject", null);
        P(this, "fullScreenSourceRect", "flash.geom.Rectangle", null);
        P(this, "mouseLock", "Boolean", !1);
        M(this, "nativeWindow", null);
        P(this, "quality", "String", rm.HIGH);
        P(this, "showDefaultContextMenu", "Boolean",
            !0);
        M(this, "softKeyboardRect", new Pn(0, 0, 0, 0));
        M(this, "stage3Ds", null);
        P(this, "stageFocusRect", "Boolean", !0);
        M(this, "stageVideos", null);
        M(this, "wmodeGPU", !1)
    }, Du = N(Cu, "flash.display.Stage", mu);
    M(Du, "supportsOrientationChange", !1);
    Cu.prototype.assignFocus = function (a) {
        O(a, zm);
        Q(this, "assignFocus")
    };
    Cu.prototype.invalidate = function () {
        this.__swiffy_d.i.Wv()
    };
    Cu.prototype.isFocusInaccessible = function () {
        Q(this, "isFocusInaccessible");
        return !1
    };
    Cu.prototype.setAspectRatio = function () {
        Q(this, "setAspectRatio")
    };
    Cu.prototype.setOrientation = function () {
        Q(this, "setOrientation")
    };
    Object.defineProperty(Cu.prototype, "displayState", {
        get: function () {
            return "normal"
        }, set: function (a) {
            a = String(a);
            a:{
                for (var b in Us) if (a == Us[b]) {
                    a = Us[b];
                    break a
                }
                a = null
            }
            if (null === a) throw H(2008, "displayState");
            if ("normal" != a) throw H(2152);
        }
    });
    Object.defineProperty(Cu.prototype, "stageWidth", {
        get: function () {
            var a = this.__swiffy_d;
            return "noScale" == a.Qc ? a.cd : a.en
        }, set: function () {
        }
    });
    Object.defineProperty(Cu.prototype, "stageHeight", {
        get: function () {
            var a = this.__swiffy_d;
            return "noScale" == a.Qc ? a.bd : a.cn
        }, set: function () {
        }
    });
    Object.defineProperty(Cu.prototype, "fullScreenWidth", {
        get: function () {
            Q(this, "fullScreenWidth");
            return this.stageWidth
        }
    });
    Object.defineProperty(Cu.prototype, "fullScreenHeight", {
        get: function () {
            Q(this, "fullScreenHeight");
            return this.stageHeight
        }
    });
    Object.defineProperty(Cu.prototype, "frameRate", {
        get: function () {
            return this.__swiffy_d.i.Mf().gj
        }, set: function (a) {
            a = +a;
            a = 0 >= a ? .01 : Math.min(1E3, a);
            this.__swiffy_d.i.Mf().Gx(a)
        }
    });
    Object.defineProperty(Cu.prototype, "scaleMode", {
        get: function () {
            return this.__swiffy_d.Qc
        }, set: function (a) {
            a = String(a);
            var b = this.__swiffy_d;
            switch (a) {
                case "showAll":
                case "exactFit":
                case "noBorder":
                case "noScale":
                    break;
                default:
                    throw H(2008, "scaleMode");
            }
            b.Ds(a)
        }
    });
    Object.defineProperty(Cu.prototype, "align", {
        get: function () {
            return this.__swiffy_d.Np("TBLR")
        }, set: function (a) {
            a = String(a);
            this.__swiffy_d.js(a)
        }
    });
    var Eu = function (a, b) {
        Zn.call(this);
        a = y(a, 320) | 0;
        b = y(b, 240) | 0;
        b = 0 < b ? b : 240;
        var c = this.__swiffy_d;
        c.$h(0 < a ? a : 320);
        c.Yh(b);
        this.deblocking = 0;
        this.smoothing = !1
    }, Fu = N(Eu, "flash.media.Video", Zn);
    Sk(Eu, function (a, b) {
        return new Wr(Xr, a, b)
    });
    J(Fu, "deblocking", function () {
        return x(this).deblocking
    });
    K(Fu, "deblocking", function (a) {
        x(this).deblocking = a | 0
    });
    J(Fu, "smoothing", function () {
        return x(this).smoothing
    });
    K(Fu, "smoothing", function (a) {
        x(this).smoothing = !!a
    });
    J(Fu, "videoHeight", function () {
        return 0
    });
    J(Fu, "videoWidth", function () {
        return 0
    });
    Eu.prototype.attachCamera = function () {
        Q(this, "attachCamera")
    };
    Eu.prototype.attachNetStream = function (a) {
        O(a, to);
        Q(this, "attachNetStream")
    };
    Eu.prototype.clear = function () {
        Q(this, "clear")
    };
    Ij.prototype["flash.net.navigateToURL"] = function (a, b) {
        ul(a, "request");
        ul(a.url, "url");
        var c = l(b) ? b : "_blank", d = 0;
        a.data && (d = a.method == Co.POST ? 2 : 1);
        var e = r;
        e.i.Qh(new Fs(e, a.data ? a.data.toString() : null, a.url, c, d))
    };
    var Gu = {};
    Ij.prototype["flash.net.registerClassAlias"] = function (a, b) {
        ul(a, "aliasName");
        ul(b, "classObject");
        a = String(a);
        b = O(b, zk);
        Q(this, "flash.net.registerClassAlias");
        Gu[a] = b
    };
    Ij.prototype["flash.net.getClassByAlias"] = function (a) {
        ul(a, "aliasName");
        a = String(a);
        Q(this, "flash.net.getClassByAlias");
        var b = Gu[a];
        if (!b) throw H(1014, a);
        return b
    };
    var Hu = function () {
        gu.call(this)
    }, Iu = N(Hu, "flash.text.TextField", gu);
    Sk(Hu, function (a, b) {
        return (new Xs({id: 0, height: 240, html: !0, selectable: !0, leftMargin: 0, rightMargin: 0}, new Tc(0, 0, 2E3, 2E3), a.oc)).ob(a, null, b)
    });
    J(Iu, "textHeight", function () {
        return z(this).Ll() / 20
    });
    J(Iu, "textWidth", function () {
        return z(this).Ml() / 20
    });
    Hu.prototype.appendText = function (a) {
        if (null != a) {
            var b = z(this);
            b.Rc(b.qa + Is(String(a)))
        } else throw H(2007, "text");
    };
    Hu.prototype.getTextFormat = function (a, b) {
        var c = z(this).nq(a, b);
        return cp(c)
    };
    Hu.prototype.setTextFormat = function (a, b, c) {
        a = O(a, bp);
        ul(a, "format");
        z(this).jk(x(a), b, c)
    };
    Hu.prototype.getLineMetrics = function (a) {
        a = z(this).sv(a | 0);
        if (!a) throw H(2006, "lineIndex");
        return new ep(a.x / 20, a.width / 20, a.height / 20, a.ascent / 20, a.descent / 20, a.leading / 20)
    };
    Object.defineProperty(Hu.prototype, "text", {
        get: function () {
            return z(this).qj()
        }, set: function (a) {
            a = String(a);
            z(this).Es(a)
        }
    });
    Object.defineProperty(Hu.prototype, "condenseWhite", {
        get: function () {
            return z(this).Fi
        }, set: function (a) {
            z(this).ss(!!a)
        }
    });
    Object.defineProperty(Hu.prototype, "htmlText", {
        get: function () {
            return z(this).Wp()
        }, set: function (a) {
            var b = z(this), c = Ye();
            c.color = 4278190080;
            b.jk(c);
            b.Rc(String(a))
        }
    });
    Object.defineProperty(Hu.prototype, "length", {
        get: function () {
            return z(this).qj().length
        }
    });
    Object.defineProperty(Hu.prototype, "textColor", {
        get: function () {
            return z(this).mq()
        }, set: function (a) {
            z(this).Is(a)
        }
    });
    Object.defineProperty(Hu.prototype, "autoSize", {
        get: function () {
            return z(this).Wc
        }, set: function (a) {
            switch (a) {
                case "center":
                case "left":
                case "none":
                case "right":
                    break;
                default:
                    throw H(2008, "autoSize");
            }
            z(this).ls(a)
        }
    });
    Object.defineProperty(Hu.prototype, "selectable", {
        get: function () {
            return z(this).Xh
        }, set: function (a) {
            z(this).Fs(!!a)
        }
    });
    Object.defineProperty(Hu.prototype, "border", {
        get: function () {
            return z(this).zi
        }, set: function (a) {
            z(this).os(!!a)
        }
    });
    Object.defineProperty(Hu.prototype, "borderColor", {
        get: function () {
            return z(this).yi
        }, set: function (a) {
            z(this).ps(Number(a))
        }
    });
    Object.defineProperty(Hu.prototype, "background", {
        get: function () {
            return z(this).vi
        }, set: function (a) {
            z(this).sg(!!a)
        }
    });
    Object.defineProperty(Hu.prototype, "backgroundColor", {
        get: function () {
            return z(this).ui
        }, set: function (a) {
            z(this).ms(Number(a))
        }
    });
    Object.defineProperty(Hu.prototype, "type", {
        get: function () {
            return z(this).Yi ? Zo.INPUT : Zo.DYNAMIC
        }, set: function (a) {
            switch (a) {
                case Zo.DYNAMIC:
                    a = !1;
                    break;
                case Zo.INPUT:
                    a = !0;
                    break;
                default:
                    throw H(2008, "type");
            }
            z(this).Ym(a)
        }
    });
    Object.defineProperty(Hu.prototype, "antiAliasType", {
        get: function () {
            return "advanced" == z(this).Ak ? Qo.ADVANCED : Qo.NORMAL
        }, set: function (a) {
            z(this).ks(a == Qo.ADVANCED ? "advanced" : "normal")
        }
    });
    Object.defineProperty(Hu.prototype, "numLines", {
        get: function () {
            return z(this).Yb.length
        }
    });
    Hu.prototype.getLineText = function (a) {
        a = z(this).uv(a);
        if (null === a) throw new RangeError;
        return a
    };
    Object.defineProperty(Hu.prototype, "multiline", {
        get: function () {
            return z(this).Pe
        }, set: function (a) {
            z(this).zs(!!a)
        }
    });
    Object.defineProperty(Hu.prototype, "wordWrap", {
        get: function () {
            return z(this).Fg
        }, set: function (a) {
            z(this).Js(!!a)
        }
    });
    Object.defineProperty(Hu.prototype, "embedFonts", {
        get: function () {
            return z(this).Cf
        }, set: function (a) {
            z(this).ts(!!a)
        }
    });
    Object.defineProperty(Hu.prototype, "defaultTextFormat", {
        get: function () {
            return cp(z(this).eq())
        }, set: function (a) {
            a = O(a, bp);
            ul(a, "format");
            z(this).Bs(x(a))
        }
    });
    Object.defineProperty(Hu.prototype, "restrict", {
        get: function () {
            return z(this).Um
        }, set: function (a) {
            a = $k(a);
            z(this).Cs(a)
        }
    });
    Object.defineProperty(Hu.prototype, "maxChars", {
        get: function () {
            return z(this).sm
        }, set: function (a) {
            z(this).xs(a | 0)
        }
    });
    Hu.prototype.getLineOffset = function (a) {
        a = z(this).tv(a | 0);
        if (-1 === a) throw H(2006);
        return a
    };
    Hu.prototype.getLineIndexOfChar = function (a) {
        a = z(this).rv(a | 0);
        if (-1 === a) throw H(2006);
        return a
    };
    var El = function (a, b) {
        this.fa = a;
        this.pb = (this.parent = b || null) ? Object.create(this.parent.pb) : new Ij(this.fa);
        this.Ti = null
    };
    g = El.prototype;
    g.tl = function () {
        return 3
    };
    g.Ah = function () {
        return this.fa.i
    };
    g.ah = function () {
        return ca
    };
    g.dr = function (a) {
        a = a.replace("::", ".");
        "." == a[0] && (a = a.substring(1));
        return a
    };
    g.Ql = function (a) {
        a = this.dr(a);
        return a in this.pb
    };
    g.vl = function (a) {
        a = this.dr(a);
        return this.pb[a]
    };
    g.Rp = function (a) {
        a = a.$a(this.pb);
        return this.pb[a]
    };
    g.li = "$";
    g.Wk = function () {
        return new El(this.fa, this)
    };
    g.mx = function (a, b, c) {
        var d = Ik();
        d.prototype = Object.create(this.pb);
        Bk(d, Hk, Jk, b.Ce(a.init, c)(null, ik), Ok, Dk, null, "global", null);
        var e = tk(d);
        b.Vh(a.traits, c, null, ik, e);
        var f = this;
        a = function (a) {
            Object.defineProperty(f.pb, a, {
                get: function () {
                    return Wk.call(d)[a]
                }, set: function (b) {
                    Wk.call(d)[a] = b
                }, configurable: !0
            })
        };
        for (var h in e.traits) h in this.pb || a(h)
    };
    g.Jr = function (a) {
        for (var b = new Bl(a, this), c = 0; c < a.scripts.length; ++c) this.mx(a.scripts[c], b, "global$init")
    };
    g.vu = function (a, b, c, d) {
        var e = a.Vl.classes[c], f = Ik(), h = b.Er(f), k = a.De(e.name).Uc(), n = [];
        if (e.interfaces) for (var q = 0; q < e.interfaces.length; ++q) {
            var u = a.De(e.interfaces[q]).$a(this.pb);
            u && n.push(this.pb[u])
        }
        q = k.Ha();
        u = (u = a.Ce(e.init, q)) ? u(d, h) : Qk(1001);
        Pk(u, k, {ue: f, Rg: d, interfaces: n}, this.pb);
        a.Vh(e.traits, q, d, h, tk(f));
        d = q + "$";
        a.Vh(e.ctraits, d, null, h, void 0).Mi(f);
        a.classes[c] = f;
        a.Ce(e.cinit, d + "cinit")(null, b).call(f);
        return f
    };
    g.Eq = function (a, b) {
        if (null == a) throw H(1007);
        var c = a.prototype.__swiffy_buildsym;
        if (c) {
            var d = Lk(a), c = c(this.fa.i, d);
            c instanceof $i && (c.Gb(this.fa.i.yh()), c.Sb = !0);
            c && c.ka(!1, b);
            return d
        }
        return Wk.apply(a, b)
    };
    g.Jc = function (a, b) {
        var c;
        this.Ti ? c = x(this.Ti).G : (Ju || (Ju = new DataView(new ArrayBuffer(1024))), c = Ju);
        if (0 > a || a + b > c.byteLength) throw H(1506);
        return c
    };
    g.Hs = function (a, b) {
        var c = a.Be(b.id).get(), d = this.vl(b.name);
        if (c && d && ka(d)) {
            c.rk = d;
            var e;
            c instanceof wr ? e = Fk(fu, d) ? function (a, b) {
                return new Qr(new er(c, a), a, b)
            } : function (a, b) {
                return new er(c, a, b)
            } : c instanceof ag && (e = function (a, b) {
                return new We(c, a, b)
            });
            e ? Sk(d, e) : Tk(d, c)
        }
    };
    var Ku = function (a) {
        this.Vs = new El(this);
        this.yd = this.Vs.Wk();
        this.i = a;
        this.Qd = new Om;
        this.sk = {};
        this.km()
    };
    Ku.prototype.li = "vm";
    R.Nt(El);
    g = Ku.prototype;
    g.rp = !0;
    g.trace = function (a) {
        ng(a)
    };
    g.Of = function () {
        return this.Qd.__swiffy_d
    };
    g.ag = function () {
    };
    g.ar = function (a) {
        Lu("mouseMove", !0, a, null)
    };
    g.Rj = function () {
    };
    g.Gj = function () {
    };
    g.uo = function () {
    };
    g.Fj = function () {
    };
    g.so = function () {
    };
    g.sr = function () {
        var a = new tm("resize", !1, !1);
        Mu.call(this.i.W, a)
    };
    g.To = function (a, b, c) {
        a[b] = c
    };
    g.Rr = function (a, b) {
        a[b] = null
    };
    g.Om = function () {
    };
    g.xn = function () {
    };
    g.Kr = function () {
    };
    var Mu = function (a) {
        return Jm(this.s, a)
    }, Lu = function (a, b, c, d) {
        c && c.$l() && !c.i.Jh() && (a = hu(a, b, c, d), c.i.xb.add(Mu.bind(c, a)))
    };
    g = Ku.prototype;
    g.fireEvent = function (a, b, c, d) {
        if (b = lu[c.type]) {
            c = b(a, c);
            if (d) return Mu.call(a, c);
            this.i.xb.add(Mu.bind(a, c))
        }
        return !1
    };
    g.kx = function (a, b) {
        var c = this.sk[a];
        c || (this.sk[a] = c = []);
        c.push(b)
    };
    g.at = function (a, b) {
        var c = this.sk[a];
        c && Ha(c, b)
    };
    g.jr = function (a) {
        a = a.s;
        if (a instanceof S) {
            var b = a.__swiffy_listeners;
            if (b) for (var c in b) b[c].length && Im(c, a) && this.at(c, a)
        }
    };
    g.Nm = function (a) {
        var b = this.sk[a];
        if (b) for (var c = 0; c < b.length; ++c) this.i.xb.add(Km.bind(b[c], a))
    };
    g.ql = function () {
        this.Nm("enterFrame")
    };
    g.zp = function () {
        this.Nm("exitFrame")
    };
    g.ak = function () {
        this.Nm("render")
    };
    g.nm = function (a, b) {
        var c = a && a.hs;
        c && (Jm(c, new tm("init")), l(b) ? Jm(c, new Cm("httpStatus", !1, !1, b)) : Jm(c, new an("progress", !1, !1, this.i.Cm, this.i.Cm)), Jm(c, new tm("complete")))
    };
    g.ka = function (a, b, c) {
        try {
            var d = a.s;
            Mk(d).apply(d, c);
            a.If(Ir, !0)
        } catch (e) {
            tg(e, !b)
        }
    };
    g.la = function (a, b) {
        var c = a.definition.rk, c = Lk(Fk(b, c) ? c : b), d;
        for (d in c) ka(c[d]) && (c[d] = oa(c[d], c));
        return c
    };
    g.km = function () {
        var a = this;
        $i.prototype.la = function () {
            return a.la(this, Zn)
        };
        qj.prototype.la = function () {
            return a.la(this, this.definition.rk && Fk(wu, this.definition.rk) ? vu : xu)
        };
        Ss.prototype.la = function () {
            return a.la(this, Cu)
        };
        xh.prototype.la = function () {
            return a.la(this, Hu)
        };
        nj.prototype.la = function () {
            return a.la(this, su)
        };
        Qr.prototype.la = function () {
            return a.la(this, eu)
        };
        er.prototype.la = function () {
            return a.la(this, X)
        };
        Wr.prototype.la = function () {
            return a.la(this, Eu)
        };
        Tr.prototype.la = function () {
            return a.la(this,
                ru)
        }
    };
    g.us = function (a, b) {
        Object.defineProperty(this.Qd.parameters, a, {value: b, configurable: !0, enumerable: !0})
    };
    g.si = function (a) {
        return a instanceof qj && a.Qj || a instanceof Ss
    };
    g.nr = function (a, b) {
        var c;
        c = a ? a.Op() : [];
        var d;
        d = b ? b.Op() : [];
        var e = c.length - 1, f = d.length - 1;
        if (0 < e && 0 < f) for (; c[e] == d[f];) e--, f--;
        Lu("mouseOut", !0, a, b);
        for (var h = 0; h <= e; h++) c[h].ds(b);
        for (h = 0; h <= f; h++) d[h].es(a);
        Lu("mouseOver", !0, b, a)
    };
    g.yf = function (a) {
        var b = this.i.Ib;
        b && !b.Md() && b.fireEvent(a)
    };
    g.vp = function (a, b) {
        b.Gb(a.yh())
    };
    g.Ho = function (a, b) {
        a = String(a);
        b = String(b);
        return a < b ? -1 : a > b ? 1 : 0
    };
    g.Go = function (a, b) {
        a = String(a).toLowerCase();
        b = String(b).toLowerCase();
        return a < b ? -1 : a > b ? 1 : 0
    };
    g.Io = function (a, b) {
        a = null !== a ? Number(a) : null;
        b = null !== b ? Number(b) : null;
        if (a !== a) throw H(1034, a, "Number");
        if (b !== b) throw H(1034, b, "Number");
        return a < b ? -1 : a > b ? 1 : 0
    };
    var Ju = null;
    jc.wh().Dr("as3", "swiffy.vm.as3.VM", Ku);
    var Nu = N(function () {
    }, "flash.text.TextFieldAutoSize");
    M(Nu, "CENTER", "center");
    M(Nu, "LEFT", "left");
    M(Nu, "NONE", "none");
    M(Nu, "RIGHT", "right");
    var Ou = function (a, b) {
        this.ma = a;
        this.lb = null;
        this.hm = 0;
        this.Mq = Sc;
        this.Lh = Hc;
        this.Cj = Uc();
        this.ck = b
    }, Pu = new Rf(3E6), Qu = {};
    g = Ou.prototype;
    g.Bd = function (a) {
        var b = this.ma, c = a.Wf(), d = b.Zx() || !c;
        (d = d && a.Sv(Cr(b))) ? (c && b.Uf() ? this.Qu(a) : (this.lb = this.lb && this.lb.release(), this.op(a)), this.hm = this.ma.i.qg) : this.lb = this.lb && this.lb.release()
    };
    g.xm = function (a) {
        return this.ma.Zl(this.hm, a)
    };
    g.Qu = function (a) {
        var b = this.ma, c = b.rd;
        if (!a.Lq() || 11 != c && 10 != c) {
            for (var d = this.lb, e = b.Nb, f = a.quality, h = 0; 1 <= f && h < e.length; ++h) e[h].ym(a.I(), a.U()) && (f = .5);
            var k = Cr(b), n = a.Qa.clone();
            n.Hh(k);
            var q = b.$(), h = b.Xp(), u = a.flags & -3, p = d && !this.xm(0) && !this.xm(1) && this.Lh.Yt(q) && this.Mq.hw(h) && d.quality * d.Vd >= f * a.Vd, t = q.Y - this.Lh.Y,
                v = q.Z - this.Lh.Z;
            this.Cj.translate(t, v);
            if (d && p && this.Cj.Po(n)) {
                if (t || v) e = d.Qa.clone(), e.translate(t, v), this.Lh = q, this.lb = d = new Ar(d.ta(), e, d.Vd, d.quality, u)
            } else {
                t = k.clone();
                t.scale(a.ub,
                    a.vb);
                t.Ff();
                d && d.release();
                p && 2048 >= t.width() && 2048 >= t.height() ? (this.Cj = k, d = this.lb = a.Ki(t, !0, u, f)) : (t = a.Ik(b), d = this.lb = a.Ki(t, !0, u, f), this.Cj = n);
                this.Lh = q;
                this.Mq = h;
                this.op(d);
                b = new Yq(d);
                for (f = 0; f < e.length; ++f) e[f].accept(b);
                h.se() || Rq(d.ta(), null, h.lo(), !0)
            }
            e = 1;
            h.se() && (e = h.Hl());
            a.Ot(d, c, e)
        } else this.lb = this.lb && this.lb.release()
    };
    g.op = function (a) {
        a.Ld() ? this.ml(a) : this.Ru(a)
    };
    g.ml = function (a) {
        var b = this.dv(a);
        b ? this.qx(b, a) : this.Hc(a)
    };
    g.dv = function (a) {
        var b = this.ma;
        if (a.zg || !this.an()) return null;
        var c = a.ub / a.quality, d = a.vb / a.quality, e = b.$(), f = e.u * e.u * c * c + e.K * e.K * d * d, c = e.o * e.o * d * d + e.C * e.C * c * c;
        if (1.2 * f < c || 1.2 * c < f || .001 < Math.abs(e.u * e.C + e.K * e.o) + Math.abs(e.u * e.K + e.C * e.o)) return null;
        e = Qu[b.definition.Cg];
        e || (e = f, Qu[b.definition.Cg] = e);
        f = Math.ceil(Math.log(f / e) / 2 / Math.log(1.4) - .05);
        b = b.fc();
        if (b.se() || a.Ld()) b = Sc;
        c = this.Jl(a, f, b);
        d = Pu.ya(c);
        !d && Pu.Vt() && (d = this.bx(a, Math.pow(1.4, f) * Math.sqrt(e), b)) && Pu.add(c, d);
        return d
    };
    g.Jl = function (a, b, c) {
        return this.ma.definition.Cg + ";" + b + ";" + a.Wf() + c.dy()
    };
    g.an = function () {
        return !1
    };
    g.qx = function (a, b) {
        var c = this.ma;
        b.ai(c.$());
        var d = b.N();
        b.Ld() || (c = c.fc(), c.se() && (d.globalAlpha = c.Hl()));
        c = a.Pt;
        a.Me.dd(d, c.j, c.l, c.width(), c.height());
        d.globalAlpha = 1
    };
    g.bx = function (a, b, c) {
        var d = this.ma, e = Hr(d).clone();
        e.scale(b, b);
        e.Vw(1);
        e.Ff();
        var f = e.width(), h = e.height(), k = f * h;
        return 1E6 < k ? null : 0 < k ? (f = a.ta().ta(f, h, !1, !0), e.scale(1 / b, 1 / b), a = new Ar(f, e, a.Vd, a.quality, a.flags), d.detach(Hc, c, this.Hc.bind(this, a)), new Ru(f, e, c)) : null
    };
    g.Hc = function () {
    };
    g.Ru = function (a) {
        var b = this.ma.Bf;
        if (b) {
            var c = a.Ik(b);
            c.Dh() || (a = a.Os(c, a.flags | 4), this.ck.pj(b).Bd(a), a = a.io(), this.ml(a), a.pl())
        } else this.ml(a)
    };
    g.Ia = function () {
        this.lb = this.lb && this.lb.release()
    };
    g.kl = function (a, b) {
        for (var c = [], d = !0, e = b.Aa; e; e = e.nextSibling) if (!e.Ta && !e.jc) {
            for (; 0 < c.length && e.depth > c[c.length - 1];) c.pop(), d && (a = a.pl()), d = !0;
            if (d) if (e.Pl() && !a.Ld()) {
                if (!(e instanceof xh)) {
                    var f = a.Ik(e);
                    c.push(e.td);
                    f.Dh() ? d = !1 : (a = a.Os(f), f = this.ck.pj(e), f.Bd(a), a = a.io())
                }
            } else f = this.ck.pj(e), f.Bd(a)
        }
        for (e = 0; e < c.length; e++) d && (a = a.pl()), d = !0
    };
    var Ru = function (a, b, c) {
        this.Me = a;
        this.Pt = b;
        this.Vg = c;
        this.gm = 0
    };
    Ru.prototype.Kl = function () {
        return this.Me.I() * this.Me.U()
    };
    Ru.prototype.Kf = function () {
        this.Me.hd()
    };
    var Su = function (a, b) {
        this.i = a;
        this.rc = document.createElement("canvas");
        this.sf = null;
        this.Qm = 0;
        this.Rm = new Tc(0, 0, 0, 0);
        this.dn = b.Vo(a.W)
    };
    Su.prototype.Gk = function (a) {
        a.appendChild(this.rc)
    };
    Su.prototype.sx = function () {
        var a = this.i, b = a.W, c = ud(), a = a.qq();
        if (!a.Dh()) {
            var d = Math.max(b.cd, b.bd);
            2048 < d * c && (c = 2048 / d);
            this.sf || (this.sf = new xr(b.cd * c, b.bd * c));
            this.dn.xm() || this.Qm != c || !this.Rm.Po(a) ? (this.Rm.oa(a) && this.Qm == c ? bb && (this.rc.width = a.width() * c, this.rc.height = a.height() * c) : (this.rc.width = a.width() * c, this.rc.height = a.height() * c, this.rc.style.width = a.width() + "px", this.rc.style.height = a.height() + "px", this.rc.style.position = "absolute", this.rc.style.left = a.j + "px", this.rc.style.top = a.l +
                "px"), b = b.mk, d = a.clone(), d.translate(-b.Y, -b.Z), d.scale(1 / b.u, 1 / b.o), this.Qm = c, this.Rm = a, this.gv(d, c, new br(this.rc, this.sf))) : b.Zl(this.dn.hm - 5) || this.i.W.Th();
            Pu.Di();
            this.sf.Di()
        }
    };
    Su.prototype.Kf = function () {
        Pu.Kf();
        this.sf && this.sf.Di();
        this.i.W.Th()
    };
    Su.prototype.Ia = function () {
        this.i.W.Th()
    };
    var Tu = function (a, b) {
        Ou.call(this, a, b)
    };
    m(Tu, Ou);
    Tu.prototype.Hc = function (a) {
        var b = this.ma, c = a.Wf(), d = b.Kb, e = b.$(), b = b.fc();
        if (d = d && d.ta()) {
            var f = 20 * d.I(), h = 20 * d.U();
            a.ai(e);
            a = a.N();
            c ? (c = Sq(d, a, b), c.dd(a, 0, 0, f, h), c.hd(d)) : a.fillRect(0, 0, f, h)
        }
    };
    var Uu = function (a, b) {
        Ou.call(this, a, b)
    };
    m(Uu, Ou);
    Uu.prototype.Hc = function (a) {
        this.kl(a, this.ma.O)
    };
    var Vu = function (a, b) {
        Ou.call(this, a, b)
    };
    m(Vu, Ou);
    Vu.prototype.Hc = function (a) {
        var b = this.ma;
        a.ai(b.$());
        var c = a.N(), d = ao(b), e = a.Ld();
        a = b.Sb ? Sc : b.fc();
        var f = b.vi ? b.ui : void 0, h = b.zi ? b.yi : void 0;
        e ? b.Ur(new Wu(c, !0, b.fc())) : (c.save(), c.beginPath(), c.rect(d.j, d.l, d.width(), d.height()), l(f) && (d = zg(f, a), c.fillStyle = d.toString(), c.fill()), l(h) && (d = zg(h, a), c.strokeStyle = d.toString(), c.lineJoin = "miter", Xu(c)), c.clip(), b.Ur(new Wu(c, !1, b.fc())), c.restore())
    };
    var Wu = function (a, b, c) {
        this.Ni = a;
        this.cu = b;
        this.Vg = c
    };
    Wu.prototype.rx = function (a, b, c, d, e) {
        var f = this.Ni, h = a.format, k = h.size, n = h.letterSpacing, q = a.qa;
        this.cu || (f.fillStyle = zg(h.color, this.Vg).ld());
        var u = h.Tp();
        c += d * (u ? u.ascent / u.emSquareSize : .9);
        if (u) q = u.Tm(q), u.Sr(f, k, q, u.pw(b, k, n, e, q), c, Hc, null, null); else if (h.Fc(f), n || e) for (var k = b, p = 0; p < q.length; p++) {
            var t = q[p];
            " " == t && (k += e);
            f.fillText(t, k, c);
            k += f.measureText(t).width + n
        } else f.fillText(q, b, c);
        h.yb && (d = c + d * (u ? u.descent / u.emSquareSize : 1 - .9) / 2, f.beginPath(), f.moveTo(b, d), f.lineTo(b + a.I(), d), Xu(f))
    };
    var Xu = function (a) {
        a.save();
        a.transform(1, 0, 0, 1, 0, 0);
        a.lineWidth = 10;
        a.stroke();
        a.restore()
    };
    var Yu = function (a, b) {
        Ou.call(this, a, b)
    };
    m(Yu, Ou);
    Yu.prototype.Hc = function (a) {
        var b = this.ma;
        a = a.uy(b.Gv());
        var c = b.Cd;
        if (c) {
            var d = b.ua(), e = b.$(), f = b.fc(), h = Hr(b);
            Zu(a, a.Qa, a.Ld(), a.Wf(), a.zg, c.definition.paths, 0, d, e, f, h)
        }
        this.kl(a, b.O)
    };
    var $u = function (a, b) {
        Ou.call(this, a, b)
    };
    m($u, Ou);
    $u.prototype.Hc = function (a) {
        var b = this.ma, c = b.xh(), d = b.ua(), e = b.$(), f = b.fc(), h = Hr(b);
        Zu(a, a.Qa, a.Ld(), a.Wf(), a.zg, b.definition.paths, c, d, e, f, h)
    };
    var Zu = function (a, b, c, d, e, f, h, k, n, q, u) {
        a.ai(n);
        var p = a.N(), t = a.Vd, v = a.jq();
        a = v.u;
        for (var v = v.o, w = 0; w < f.length; w++) {
            var B = f[w], A = B.data.ya(h).slice(e, k);
            p.beginPath();
            A.nl(p);
            B.fill && (d ? B.fill.Fc(h, u, p, q) : p.fill());
            B.line && !c && B.line.ko(h, u, b, a, v, t, p, A, n, q)
        }
    };
    $u.prototype.an = function () {
        return this.ma.definition.Xt && this.ma.definition.vy
    };
    $u.prototype.Jl = function (a, b, c) {
        return $u.J.Jl.call(this, a, b, c) + this.ma.be
    };
    var av = function (a, b) {
        Ou.call(this, a, b)
    };
    m(av, Ou);
    av.prototype.Hc = function (a) {
        this.kl(a, this.ma.O)
    };
    var bv = function (a, b) {
        Ou.call(this, a, b)
    };
    m(bv, Ou);
    bv.prototype.Hc = function (a) {
        var b = this.ma, c = b.$(), d = b.fc(), e = a.Wf(), b = b.definition;
        a.fk();
        var f = a.N();
        a = b.matrix.multiply(c).multiply(a.jq());
        b.bk(f, a, e ? d : null)
    };
    bv.prototype.an = function () {
        return !0
    };
    var cv = function (a, b) {
        var c;
        Ou.call(this, a, b);
        this.Ao = !1
    };
    m(cv, Ou);
    cv.prototype.Hc = function (a) {
        if (this.Ao) {
            var b = this.ma.definition, c = this.ma.lv(), d = this.ma.$(), e = this.ux;
            a.ai(d);
            a = a.N();
            d = b.motionEstimationData.type.charCodeAt(c);
            if (73 === d) e = b.motionEstimationData.height, d = c / b.motionEstimationData.framesPerImage | 0, a.globalCompositeOperation = "source-over", a.drawImage(b.images[d], 0, c % b.motionEstimationData.framesPerImage * e, b.width, b.height, 0, 0, 20 * b.width, 20 * b.height); else if (80 === d) {
                var d = b.motionEstimationData, f = d.width, h = d.height, k = c * f / 32 * h / 32 | 0, n = d.useMotion, q =
                    b.motionX, u = b.motionY, p, t = c;
                for (p = b.motionEstimationData; 73 !== p.type.charCodeAt(t);) t--;
                p = t;
                t = p % d.framesPerImage * h;
                p = b.images[p / d.framesPerImage | 0];
                e.globalCompositeOperation = "source-over";
                e.fillStyle = "rgb(0, 0, 0)";
                e.fillRect(0, 0, f, h);
                for (var v = 0; v < h; v += 32, t += 32) for (var w = 0; w < f; w += 32, ++k) 49 === n.charCodeAt(k) && e.drawImage(p, w + q[k], t + u[k], 32, 32, w, v, 32, 32);
                e.globalCompositeOperation = "source-over";
                e.fillStyle = "rgb(0, 0, 0)";
                e.globalAlpha = .5;
                e.fillRect(0, 0, f, h);
                e.globalAlpha = 1;
                e.globalCompositeOperation =
                    "lighter";
                e.drawImage(b.images[c / d.framesPerImage | 0], 0, c % d.framesPerImage * h, f, h, 0, 0, f, h);
                e.globalCompositeOperation = "difference";
                e.fillStyle = "rgb(128, 128, 128)";
                e.fillRect(0, 0, f, h);
                e.globalCompositeOperation = "lighter";
                e.drawImage(e.canvas, 0, 0, f, h);
                a.globalCompositeOperation = "source-over";
                a.drawImage(e.canvas, 0, 0, b.width, b.height, 0, 0, 20 * b.width, 20 * b.height)
            }
        }
    };
    var dv = function () {
    };
    m(dv, Sf);
    g = dv.prototype;
    g.En = function (a) {
        return new Tu(a, this)
    };
    g.Qn = function (a) {
        return new av(a, this)
    };
    g.Gn = function (a) {
        return new Uu(a, this)
    };
    g.Kn = function (a) {
        return new Vu(a, this)
    };
    g.Sn = function (a) {
        return new cv(a, this)
    };
    g.Rn = function (a) {
        return new bv(a, this)
    };
    g.Pn = function (a) {
        return new $u(a, this)
    };
    g.On = function (a) {
        return new Yu(a, this)
    };
    var ev = function (a) {
        Su.call(this, a, Kr)
    };
    m(ev, Su);
    ev.prototype.gv = function (a, b, c) {
        a = new Ar(c, a, b, 1, 2);
        this.px(a);
        this.dn.Bd(a)
    };
    ev.prototype.px = function (a) {
        a.clear(this.i.W.backgroundColor)
    };
    var Kr = new dv;
    Tf["swiffy.CANVAS"] = ev;
})()
