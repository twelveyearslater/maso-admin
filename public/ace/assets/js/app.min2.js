!
    function(t, e) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        }: e(t)
    } ("undefined" != typeof window ? window: this,
        function(t, e) {
            "use strict";
            var n = [],
                i = t.document,
                s = Object.getPrototypeOf,
                o = n.slice,
                r = n.concat,
                a = n.push,
                l = n.indexOf,
                c = {},
                h = c.toString,
                u = c.hasOwnProperty,
                d = u.toString,
                f = d.call(Object),
                p = {},
                m = function(t) {
                    return "function" == typeof t && "number" != typeof t.nodeType
                },
                g = function(t) {
                    return null != t && t === t.window
                },
                v = {
                    type: !0,
                    src: !0,
                    noModule: !0
                };
            function y(t, e, n) {
                var s, o = (e = e || i).createElement("script");
                if (o.text = t, n) for (s in v) n[s] && (o[s] = n[s]);
                e.head.appendChild(o).parentNode.removeChild(o)
            }
            function b(t) {
                return null == t ? t + "": "object" == typeof t || "function" == typeof t ? c[h.call(t)] || "object": typeof t
            }
            var _ = "3.3.1",
                w = function(t, e) {
                    return new w.fn.init(t, e)
                },
                D = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            function k(t) {
                var e = !!t && "length" in t && t.length,
                    n = b(t);
                return ! m(t) && !g(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
            }
            w.fn = w.prototype = {
                jquery: _,
                constructor: w,
                length: 0,
                toArray: function() {
                    return o.call(this)
                },
                get: function(t) {
                    return null == t ? o.call(this) : t < 0 ? this[t + this.length] : this[t]
                },
                pushStack: function(t) {
                    var e = w.merge(this.constructor(), t);
                    return e.prevObject = this,
                        e
                },
                each: function(t) {
                    return w.each(this, t)
                },
                map: function(t) {
                    return this.pushStack(w.map(this,
                        function(e, n) {
                            return t.call(e, n, e)
                        }))
                },
                slice: function() {
                    return this.pushStack(o.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq( - 1)
                },
                eq: function(t) {
                    var e = this.length,
                        n = +t + (t < 0 ? e: 0);
                    return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: a,
                sort: n.sort,
                splice: n.splice
            },
                w.extend = w.fn.extend = function() {
                    var t, e, n, i, s, o, r = arguments[0] || {},
                        a = 1,
                        l = arguments.length,
                        c = !1;
                    for ("boolean" == typeof r && (c = r, r = arguments[a] || {},
                        a++), "object" == typeof r || m(r) || (r = {}), a === l && (r = this, a--); a < l; a++) if (null != (t = arguments[a])) for (e in t) n = r[e],
                    r !== (i = t[e]) && (c && i && (w.isPlainObject(i) || (s = Array.isArray(i))) ? (s ? (s = !1, o = n && Array.isArray(n) ? n: []) : o = n && w.isPlainObject(n) ? n: {},
                        r[e] = w.extend(c, o, i)) : void 0 !== i && (r[e] = i));
                    return r
                },
                w.extend({
                    expando: "jQuery" + (_ + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function(t) {
                        throw new Error(t)
                    },
                    noop: function() {},
                    isPlainObject: function(t) {
                        var e, n;
                        return ! (!t || "[object Object]" !== h.call(t)) && (!(e = s(t)) || "function" == typeof(n = u.call(e, "constructor") && e.constructor) && d.call(n) === f)
                    },
                    isEmptyObject: function(t) {
                        var e;
                        for (e in t) return ! 1;
                        return ! 0
                    },
                    globalEval: function(t) {
                        y(t)
                    },
                    each: function(t, e) {
                        var n, i = 0;
                        if (k(t)) for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
                        else for (i in t) if (!1 === e.call(t[i], i, t[i])) break;
                        return t
                    },
                    trim: function(t) {
                        return null == t ? "": (t + "").replace(D, "")
                    },
                    makeArray: function(t, e) {
                        var n = e || [];
                        return null != t && (k(Object(t)) ? w.merge(n, "string" == typeof t ? [t] : t) : a.call(n, t)),
                            n
                    },
                    inArray: function(t, e, n) {
                        return null == e ? -1 : l.call(e, t, n)
                    },
                    merge: function(t, e) {
                        for (var n = +e.length,
                                 i = 0,
                                 s = t.length; i < n; i++) t[s++] = e[i];
                        return t.length = s,
                            t
                    },
                    grep: function(t, e, n) {
                        for (var i = [], s = 0, o = t.length, r = !n; s < o; s++) ! e(t[s], s) !== r && i.push(t[s]);
                        return i
                    },
                    map: function(t, e, n) {
                        var i, s, o = 0,
                            a = [];
                        if (k(t)) for (i = t.length; o < i; o++) null != (s = e(t[o], o, n)) && a.push(s);
                        else for (o in t) null != (s = e(t[o], o, n)) && a.push(s);
                        return r.apply([], a)
                    },
                    guid: 1,
                    support: p
                }),
            "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
                w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
                    function(t, e) {
                        c["[object " + e + "]"] = e.toLowerCase()
                    });
            var C = function(t) {
                var e, n, i, s, o, r, a, l, c, h, u, d, f, p, m, g, v, y, b, _ = "sizzle" + 1 * new Date,
                    w = t.document,
                    D = 0,
                    k = 0,
                    C = rt(),
                    x = rt(),
                    T = rt(),
                    S = function(t, e) {
                        return t === e && (u = !0),
                            0
                    },
                    E = {}.hasOwnProperty,
                    M = [],
                    A = M.pop,
                    O = M.push,
                    I = M.push,
                    N = M.slice,
                    P = function(t, e) {
                        for (var n = 0,
                                 i = t.length; n < i; n++) if (t[n] === e) return n;
                        return - 1
                    },
                    L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    j = "[\\x20\\t\\r\\n\\f]",
                    Y = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    H = "\\[" + j + "*(" + Y + ")(?:" + j + "*([*^$|!~]?=)" + j + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + Y + "))|)" + j + "*\\]",
                    $ = ":(" + Y + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
                    R = new RegExp(j + "+", "g"),
                    W = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$", "g"),
                    U = new RegExp("^" + j + "*," + j + "*"),
                    F = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
                    q = new RegExp("=" + j + "*([^\\]'\"]*?)" + j + "*\\]", "g"),
                    V = new RegExp($),
                    B = new RegExp("^" + Y + "$"),
                    z = {
                        ID: new RegExp("^#(" + Y + ")"),
                        CLASS: new RegExp("^\\.(" + Y + ")"),
                        TAG: new RegExp("^(" + Y + "|[*])"),
                        ATTR: new RegExp("^" + H),
                        PSEUDO: new RegExp("^" + $),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + j + "*(even|odd|(([+-]|)(\\d*)n|)" + j + "*(?:([+-]|)" + j + "*(\\d+)|))" + j + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + L + ")$", "i"),
                        needsContext: new RegExp("^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)", "i")
                    },
                    G = /^(?:input|select|textarea|button)$/i,
                    K = /^h\d$/i,
                    Q = /^[^{]+\{\s*\[native \w/,
                    Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    X = /[+~]/,
                    J = new RegExp("\\\\([\\da-f]{1,6}" + j + "?|(" + j + ")|.)", "ig"),
                    tt = function(t, e, n) {
                        var i = "0x" + e - 65536;
                        return i != i || n ? e: i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                    },
                    et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    nt = function(t, e) {
                        return e ? "\0" === t ? "�": t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " ": "\\" + t
                    },
                    it = function() {
                        d()
                    },
                    st = yt(function(t) {
                            return ! 0 === t.disabled && ("form" in t || "label" in t)
                        },
                        {
                            dir: "parentNode",
                            next: "legend"
                        });
                try {
                    I.apply(M = N.call(w.childNodes), w.childNodes),
                        M[w.childNodes.length].nodeType
                } catch(t) {
                    I = {
                        apply: M.length ?
                            function(t, e) {
                                O.apply(t, N.call(e))
                            }: function(t, e) {
                                for (var n = t.length,
                                         i = 0; t[n++] = e[i++];);
                                t.length = n - 1
                            }
                    }
                }
                function ot(t, e, i, s) {
                    var o, a, c, h, u, p, v, y = e && e.ownerDocument,
                        D = e ? e.nodeType: 9;
                    if (i = i || [], "string" != typeof t || !t || 1 !== D && 9 !== D && 11 !== D) return i;
                    if (!s && ((e ? e.ownerDocument || e: w) !== f && d(e), e = e || f, m)) {
                        if (11 !== D && (u = Z.exec(t))) if (o = u[1]) {
                            if (9 === D) {
                                if (! (c = e.getElementById(o))) return i;
                                if (c.id === o) return i.push(c),
                                    i
                            } else if (y && (c = y.getElementById(o)) && b(e, c) && c.id === o) return i.push(c),
                                i
                        } else {
                            if (u[2]) return I.apply(i, e.getElementsByTagName(t)),
                                i;
                            if ((o = u[3]) && n.getElementsByClassName && e.getElementsByClassName) return I.apply(i, e.getElementsByClassName(o)),
                                i
                        }
                        if (n.qsa && !T[t + " "] && (!g || !g.test(t))) {
                            if (1 !== D) y = e,
                                v = t;
                            else if ("object" !== e.nodeName.toLowerCase()) {
                                for ((h = e.getAttribute("id")) ? h = h.replace(et, nt) : e.setAttribute("id", h = _), a = (p = r(t)).length; a--;) p[a] = "#" + h + " " + vt(p[a]);
                                v = p.join(","),
                                    y = X.test(t) && mt(e.parentNode) || e
                            }
                            if (v) try {
                                return I.apply(i, y.querySelectorAll(v)),
                                    i
                            } catch(t) {} finally {
                                h === _ && e.removeAttribute("id")
                            }
                        }
                    }
                    return l(t.replace(W, "$1"), e, i, s)
                }
                function rt() {
                    var t = [];
                    return function e(n, s) {
                        return t.push(n + " ") > i.cacheLength && delete e[t.shift()],
                            e[n + " "] = s
                    }
                }
                function at(t) {
                    return t[_] = !0,
                        t
                }
                function lt(t) {
                    var e = f.createElement("fieldset");
                    try {
                        return !! t(e)
                    } catch(t) {
                        return ! 1
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e),
                            e = null
                    }
                }
                function ct(t, e) {
                    for (var n = t.split("|"), s = n.length; s--;) i.attrHandle[n[s]] = e
                }
                function ht(t, e) {
                    var n = e && t,
                        i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                    if (i) return i;
                    if (n) for (; n = n.nextSibling;) if (n === e) return - 1;
                    return t ? 1 : -1
                }
                function ut(t) {
                    return function(e) {
                        return "input" === e.nodeName.toLowerCase() && e.type === t
                    }
                }
                function dt(t) {
                    return function(e) {
                        var n = e.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && e.type === t
                    }
                }
                function ft(t) {
                    return function(e) {
                        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t: e.disabled === t: e.isDisabled === t || e.isDisabled !== !t && st(e) === t: e.disabled === t: "label" in e && e.disabled === t
                    }
                }
                function pt(t) {
                    return at(function(e) {
                        return e = +e,
                            at(function(n, i) {
                                for (var s, o = t([], n.length, e), r = o.length; r--;) n[s = o[r]] && (n[s] = !(i[s] = n[s]))
                            })
                    })
                }
                function mt(t) {
                    return t && void 0 !== t.getElementsByTagName && t
                }
                for (e in n = ot.support = {},
                    o = ot.isXML = function(t) {
                        var e = t && (t.ownerDocument || t).documentElement;
                        return !! e && "HTML" !== e.nodeName
                    },
                    d = ot.setDocument = function(t) {
                        var e, s, r = t ? t.ownerDocument || t: w;
                        return r !== f && 9 === r.nodeType && r.documentElement ? (p = (f = r).documentElement, m = !o(f), w !== f && (s = f.defaultView) && s.top !== s && (s.addEventListener ? s.addEventListener("unload", it, !1) : s.attachEvent && s.attachEvent("onunload", it)), n.attributes = lt(function(t) {
                            return t.className = "i",
                                !t.getAttribute("className")
                        }), n.getElementsByTagName = lt(function(t) {
                            return t.appendChild(f.createComment("")),
                                !t.getElementsByTagName("*").length
                        }), n.getElementsByClassName = Q.test(f.getElementsByClassName), n.getById = lt(function(t) {
                            return p.appendChild(t).id = _,
                            !f.getElementsByName || !f.getElementsByName(_).length
                        }), n.getById ? (i.filter.ID = function(t) {
                            var e = t.replace(J, tt);
                            return function(t) {
                                return t.getAttribute("id") === e
                            }
                        },
                            i.find.ID = function(t, e) {
                                if (void 0 !== e.getElementById && m) {
                                    var n = e.getElementById(t);
                                    return n ? [n] : []
                                }
                            }) : (i.filter.ID = function(t) {
                            var e = t.replace(J, tt);
                            return function(t) {
                                var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                                return n && n.value === e
                            }
                        },
                            i.find.ID = function(t, e) {
                                if (void 0 !== e.getElementById && m) {
                                    var n, i, s, o = e.getElementById(t);
                                    if (o) {
                                        if ((n = o.getAttributeNode("id")) && n.value === t) return [o];
                                        for (s = e.getElementsByName(t), i = 0; o = s[i++];) if ((n = o.getAttributeNode("id")) && n.value === t) return [o]
                                    }
                                    return []
                                }
                            }), i.find.TAG = n.getElementsByTagName ?
                            function(t, e) {
                                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0
                            }: function(t, e) {
                                var n, i = [],
                                    s = 0,
                                    o = e.getElementsByTagName(t);
                                if ("*" === t) {
                                    for (; n = o[s++];) 1 === n.nodeType && i.push(n);
                                    return i
                                }
                                return o
                            },
                            i.find.CLASS = n.getElementsByClassName &&
                                function(t, e) {
                                    if (void 0 !== e.getElementsByClassName && m) return e.getElementsByClassName(t)
                                },
                            v = [], g = [], (n.qsa = Q.test(f.querySelectorAll)) && (lt(function(t) {
                            p.appendChild(t).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                            t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + j + "*(?:''|\"\")"),
                            t.querySelectorAll("[selected]").length || g.push("\\[" + j + "*(?:value|" + L + ")"),
                            t.querySelectorAll("[id~=" + _ + "-]").length || g.push("~="),
                            t.querySelectorAll(":checked").length || g.push(":checked"),
                            t.querySelectorAll("a#" + _ + "+*").length || g.push(".#.+[+~]")
                        }), lt(function(t) {
                            t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var e = f.createElement("input");
                            e.setAttribute("type", "hidden"),
                                t.appendChild(e).setAttribute("name", "D"),
                            t.querySelectorAll("[name=d]").length && g.push("name" + j + "*[*^$|!~]?="),
                            2 !== t.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"),
                                p.appendChild(t).disabled = !0,
                            2 !== t.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"),
                                t.querySelectorAll("*,:x"),
                                g.push(",.*:")
                        })), (n.matchesSelector = Q.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && lt(function(t) {
                            n.disconnectedMatch = y.call(t, "*"),
                                y.call(t, "[s!='']:x"),
                                v.push("!=", $)
                        }), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), e = Q.test(p.compareDocumentPosition), b = e || Q.test(p.contains) ?
                            function(t, e) {
                                var n = 9 === t.nodeType ? t.documentElement: t,
                                    i = e && e.parentNode;
                                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                            }: function(t, e) {
                                if (e) for (; e = e.parentNode;) if (e === t) return ! 0;
                                return ! 1
                            },
                            S = e ?
                                function(t, e) {
                                    if (t === e) return u = !0,
                                        0;
                                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                                    return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === i ? t === f || t.ownerDocument === w && b(w, t) ? -1 : e === f || e.ownerDocument === w && b(w, e) ? 1 : h ? P(h, t) - P(h, e) : 0 : 4 & i ? -1 : 1)
                                }: function(t, e) {
                                    if (t === e) return u = !0,
                                        0;
                                    var n, i = 0,
                                        s = t.parentNode,
                                        o = e.parentNode,
                                        r = [t],
                                        a = [e];
                                    if (!s || !o) return t === f ? -1 : e === f ? 1 : s ? -1 : o ? 1 : h ? P(h, t) - P(h, e) : 0;
                                    if (s === o) return ht(t, e);
                                    for (n = t; n = n.parentNode;) r.unshift(n);
                                    for (n = e; n = n.parentNode;) a.unshift(n);
                                    for (; r[i] === a[i];) i++;
                                    return i ? ht(r[i], a[i]) : r[i] === w ? -1 : a[i] === w ? 1 : 0
                                },
                            f) : f
                    },
                    ot.matches = function(t, e) {
                        return ot(t, null, null, e)
                    },
                    ot.matchesSelector = function(t, e) {
                        if ((t.ownerDocument || t) !== f && d(t), e = e.replace(q, "='$1']"), n.matchesSelector && m && !T[e + " "] && (!v || !v.test(e)) && (!g || !g.test(e))) try {
                            var i = y.call(t, e);
                            if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                        } catch(t) {}
                        return ot(e, f, null, [t]).length > 0
                    },
                    ot.contains = function(t, e) {
                        return (t.ownerDocument || t) !== f && d(t),
                            b(t, e)
                    },
                    ot.attr = function(t, e) { (t.ownerDocument || t) !== f && d(t);
                        var s = i.attrHandle[e.toLowerCase()],
                            o = s && E.call(i.attrHandle, e.toLowerCase()) ? s(t, e, !m) : void 0;
                        return void 0 !== o ? o: n.attributes || !m ? t.getAttribute(e) : (o = t.getAttributeNode(e)) && o.specified ? o.value: null
                    },
                    ot.escape = function(t) {
                        return (t + "").replace(et, nt)
                    },
                    ot.error = function(t) {
                        throw new Error("Syntax error, unrecognized expression: " + t)
                    },
                    ot.uniqueSort = function(t) {
                        var e, i = [],
                            s = 0,
                            o = 0;
                        if (u = !n.detectDuplicates, h = !n.sortStable && t.slice(0), t.sort(S), u) {
                            for (; e = t[o++];) e === t[o] && (s = i.push(o));
                            for (; s--;) t.splice(i[s], 1)
                        }
                        return h = null,
                            t
                    },
                    s = ot.getText = function(t) {
                        var e, n = "",
                            i = 0,
                            o = t.nodeType;
                        if (o) {
                            if (1 === o || 9 === o || 11 === o) {
                                if ("string" == typeof t.textContent) return t.textContent;
                                for (t = t.firstChild; t; t = t.nextSibling) n += s(t)
                            } else if (3 === o || 4 === o) return t.nodeValue
                        } else for (; e = t[i++];) n += s(e);
                        return n
                    },
                    (i = ot.selectors = {
                        cacheLength: 50,
                        createPseudo: at,
                        match: z,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(t) {
                                return t[1] = t[1].replace(J, tt),
                                    t[3] = (t[3] || t[4] || t[5] || "").replace(J, tt),
                                "~=" === t[2] && (t[3] = " " + t[3] + " "),
                                    t.slice(0, 4)
                            },
                            CHILD: function(t) {
                                return t[1] = t[1].toLowerCase(),
                                    "nth" === t[1].slice(0, 3) ? (t[3] || ot.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && ot.error(t[0]),
                                    t
                            },
                            PSEUDO: function(t) {
                                var e, n = !t[6] && t[2];
                                return z.CHILD.test(t[0]) ? null: (t[3] ? t[2] = t[4] || t[5] || "": n && V.test(n) && (e = r(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(t) {
                                var e = t.replace(J, tt).toLowerCase();
                                return "*" === t ?
                                    function() {
                                        return ! 0
                                    }: function(t) {
                                        return t.nodeName && t.nodeName.toLowerCase() === e
                                    }
                            },
                            CLASS: function(t) {
                                var e = C[t + " "];
                                return e || (e = new RegExp("(^|" + j + ")" + t + "(" + j + "|$)")) && C(t,
                                    function(t) {
                                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                                    })
                            },
                            ATTR: function(t, e, n) {
                                return function(i) {
                                    var s = ot.attr(i, t);
                                    return null == s ? "!=" === e: !e || (s += "", "=" === e ? s === n: "!=" === e ? s !== n: "^=" === e ? n && 0 === s.indexOf(n) : "*=" === e ? n && s.indexOf(n) > -1 : "$=" === e ? n && s.slice( - n.length) === n: "~=" === e ? (" " + s.replace(R, " ") + " ").indexOf(n) > -1 : "|=" === e && (s === n || s.slice(0, n.length + 1) === n + "-"))
                                }
                            },
                            CHILD: function(t, e, n, i, s) {
                                var o = "nth" !== t.slice(0, 3),
                                    r = "last" !== t.slice( - 4),
                                    a = "of-type" === e;
                                return 1 === i && 0 === s ?
                                    function(t) {
                                        return !! t.parentNode
                                    }: function(e, n, l) {
                                        var c, h, u, d, f, p, m = o !== r ? "nextSibling": "previousSibling",
                                            g = e.parentNode,
                                            v = a && e.nodeName.toLowerCase(),
                                            y = !l && !a,
                                            b = !1;
                                        if (g) {
                                            if (o) {
                                                for (; m;) {
                                                    for (d = e; d = d[m];) if (a ? d.nodeName.toLowerCase() === v: 1 === d.nodeType) return ! 1;
                                                    p = m = "only" === t && !p && "nextSibling"
                                                }
                                                return ! 0
                                            }
                                            if (p = [r ? g.firstChild: g.lastChild], r && y) {
                                                for (b = (f = (c = (h = (u = (d = g)[_] || (d[_] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[t] || [])[0] === D && c[1]) && c[2], d = f && g.childNodes[f]; d = ++f && d && d[m] || (b = f = 0) || p.pop();) if (1 === d.nodeType && ++b && d === e) {
                                                    h[t] = [D, f, b];
                                                    break
                                                }
                                            } else if (y && (b = f = (c = (h = (u = (d = e)[_] || (d[_] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[t] || [])[0] === D && c[1]), !1 === b) for (; (d = ++f && d && d[m] || (b = f = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== v: 1 !== d.nodeType) || !++b || (y && ((h = (u = d[_] || (d[_] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[t] = [D, b]), d !== e)););
                                            return (b -= s) === i || b % i == 0 && b / i >= 0
                                        }
                                    }
                            },
                            PSEUDO: function(t, e) {
                                var n, s = i.pseudos[t] || i.setFilters[t.toLowerCase()] || ot.error("unsupported pseudo: " + t);
                                return s[_] ? s(e) : s.length > 1 ? (n = [t, t, "", e], i.setFilters.hasOwnProperty(t.toLowerCase()) ? at(function(t, n) {
                                    for (var i, o = s(t, e), r = o.length; r--;) t[i = P(t, o[r])] = !(n[i] = o[r])
                                }) : function(t) {
                                    return s(t, 0, n)
                                }) : s
                            }
                        },
                        pseudos: {
                            not: at(function(t) {
                                var e = [],
                                    n = [],
                                    i = a(t.replace(W, "$1"));
                                return i[_] ? at(function(t, e, n, s) {
                                    for (var o, r = i(t, null, s, []), a = t.length; a--;)(o = r[a]) && (t[a] = !(e[a] = o))
                                }) : function(t, s, o) {
                                    return e[0] = t,
                                        i(e, null, o, n),
                                        e[0] = null,
                                        !n.pop()
                                }
                            }),
                            has: at(function(t) {
                                return function(e) {
                                    return ot(t, e).length > 0
                                }
                            }),
                            contains: at(function(t) {
                                return t = t.replace(J, tt),
                                    function(e) {
                                        return (e.textContent || e.innerText || s(e)).indexOf(t) > -1
                                    }
                            }),
                            lang: at(function(t) {
                                return B.test(t || "") || ot.error("unsupported lang: " + t),
                                    t = t.replace(J, tt).toLowerCase(),
                                    function(e) {
                                        var n;
                                        do {
                                            if (n = m ? e.lang: e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                        } while (( e = e . parentNode ) && 1 === e.nodeType);
                                        return ! 1
                                    }
                            }),
                            target: function(e) {
                                var n = t.location && t.location.hash;
                                return n && n.slice(1) === e.id
                            },
                            root: function(t) {
                                return t === p
                            },
                            focus: function(t) {
                                return t === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                            },
                            enabled: ft(!1),
                            disabled: ft(!0),
                            checked: function(t) {
                                var e = t.nodeName.toLowerCase();
                                return "input" === e && !!t.checked || "option" === e && !!t.selected
                            },
                            selected: function(t) {
                                return t.parentNode && t.parentNode.selectedIndex,
                                !0 === t.selected
                            },
                            empty: function(t) {
                                for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return ! 1;
                                return ! 0
                            },
                            parent: function(t) {
                                return ! i.pseudos.empty(t)
                            },
                            header: function(t) {
                                return K.test(t.nodeName)
                            },
                            input: function(t) {
                                return G.test(t.nodeName)
                            },
                            button: function(t) {
                                var e = t.nodeName.toLowerCase();
                                return "input" === e && "button" === t.type || "button" === e
                            },
                            text: function(t) {
                                var e;
                                return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                            },
                            first: pt(function() {
                                return [0]
                            }),
                            last: pt(function(t, e) {
                                return [e - 1]
                            }),
                            eq: pt(function(t, e, n) {
                                return [n < 0 ? n + e: n]
                            }),
                            even: pt(function(t, e) {
                                for (var n = 0; n < e; n += 2) t.push(n);
                                return t
                            }),
                            odd: pt(function(t, e) {
                                for (var n = 1; n < e; n += 2) t.push(n);
                                return t
                            }),
                            lt: pt(function(t, e, n) {
                                for (var i = n < 0 ? n + e: n; --i >= 0;) t.push(i);
                                return t
                            }),
                            gt: pt(function(t, e, n) {
                                for (var i = n < 0 ? n + e: n; ++i < e;) t.push(i);
                                return t
                            })
                        }
                    }).pseudos.nth = i.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) i.pseudos[e] = ut(e);
                for (e in {
                    submit: !0,
                    reset: !0
                }) i.pseudos[e] = dt(e);
                function gt() {}
                function vt(t) {
                    for (var e = 0,
                             n = t.length,
                             i = ""; e < n; e++) i += t[e].value;
                    return i
                }
                function yt(t, e, n) {
                    var i = e.dir,
                        s = e.next,
                        o = s || i,
                        r = n && "parentNode" === o,
                        a = k++;
                    return e.first ?
                        function(e, n, s) {
                            for (; e = e[i];) if (1 === e.nodeType || r) return t(e, n, s);
                            return ! 1
                        }: function(e, n, l) {
                            var c, h, u, d = [D, a];
                            if (l) {
                                for (; e = e[i];) if ((1 === e.nodeType || r) && t(e, n, l)) return ! 0
                            } else for (; e = e[i];) if (1 === e.nodeType || r) if (h = (u = e[_] || (e[_] = {}))[e.uniqueID] || (u[e.uniqueID] = {}), s && s === e.nodeName.toLowerCase()) e = e[i] || e;
                            else {
                                if ((c = h[o]) && c[0] === D && c[1] === a) return d[2] = c[2];
                                if (h[o] = d, d[2] = t(e, n, l)) return ! 0
                            }
                            return ! 1
                        }
                }
                function bt(t) {
                    return t.length > 1 ?
                        function(e, n, i) {
                            for (var s = t.length; s--;) if (!t[s](e, n, i)) return ! 1;
                            return ! 0
                        }: t[0]
                }
                function _t(t, e, n, i, s) {
                    for (var o, r = [], a = 0, l = t.length, c = null != e; a < l; a++)(o = t[a]) && (n && !n(o, i, s) || (r.push(o), c && e.push(a)));
                    return r
                }
                function wt(t, e, n, i, s, o) {
                    return i && !i[_] && (i = wt(i)),
                    s && !s[_] && (s = wt(s, o)),
                        at(function(o, r, a, l) {
                            var c, h, u, d = [],
                                f = [],
                                p = r.length,
                                m = o ||
                                    function(t, e, n) {
                                        for (var i = 0,
                                                 s = e.length; i < s; i++) ot(t, e[i], n);
                                        return n
                                    } (e || "*", a.nodeType ? [a] : a, []),
                                g = !t || !o && e ? m: _t(m, d, t, a, l),
                                v = n ? s || (o ? t: p || i) ? [] : r: g;
                            if (n && n(g, v, a, l), i) for (c = _t(v, f), i(c, [], a, l), h = c.length; h--;)(u = c[h]) && (v[f[h]] = !(g[f[h]] = u));
                            if (o) {
                                if (s || t) {
                                    if (s) {
                                        for (c = [], h = v.length; h--;)(u = v[h]) && c.push(g[h] = u);
                                        s(null, v = [], c, l)
                                    }
                                    for (h = v.length; h--;)(u = v[h]) && (c = s ? P(o, u) : d[h]) > -1 && (o[c] = !(r[c] = u))
                                }
                            } else v = _t(v === r ? v.splice(p, v.length) : v),
                                s ? s(null, r, v, l) : I.apply(r, v)
                        })
                }
                function Dt(t) {
                    for (var e, n, s, o = t.length,
                             r = i.relative[t[0].type], a = r || i.relative[" "], l = r ? 1 : 0, h = yt(function(t) {
                                return t === e
                            },
                            a, !0), u = yt(function(t) {
                                return P(e, t) > -1
                            },
                            a, !0), d = [function(t, n, i) {
                            var s = !r && (i || n !== c) || ((e = n).nodeType ? h(t, n, i) : u(t, n, i));
                            return e = null,
                                s
                        }]; l < o; l++) if (n = i.relative[t[l].type]) d = [yt(bt(d), n)];
                    else {
                        if ((n = i.filter[t[l].type].apply(null, t[l].matches))[_]) {
                            for (s = ++l; s < o && !i.relative[t[s].type]; s++);
                            return wt(l > 1 && bt(d), l > 1 && vt(t.slice(0, l - 1).concat({
                                value: " " === t[l - 2].type ? "*": ""
                            })).replace(W, "$1"), n, l < s && Dt(t.slice(l, s)), s < o && Dt(t = t.slice(s)), s < o && vt(t))
                        }
                        d.push(n)
                    }
                    return bt(d)
                }
                return gt.prototype = i.filters = i.pseudos,
                    i.setFilters = new gt,
                    r = ot.tokenize = function(t, e) {
                        var n, s, o, r, a, l, c, h = x[t + " "];
                        if (h) return e ? 0 : h.slice(0);
                        for (a = t, l = [], c = i.preFilter; a;) {
                            for (r in n && !(s = U.exec(a)) || (s && (a = a.slice(s[0].length) || a), l.push(o = [])), n = !1, (s = F.exec(a)) && (n = s.shift(), o.push({
                                value: n,
                                type: s[0].replace(W, " ")
                            }), a = a.slice(n.length)), i.filter) ! (s = z[r].exec(a)) || c[r] && !(s = c[r](s)) || (n = s.shift(), o.push({
                                value: n,
                                type: r,
                                matches: s
                            }), a = a.slice(n.length));
                            if (!n) break
                        }
                        return e ? a.length: a ? ot.error(t) : x(t, l).slice(0)
                    },
                    a = ot.compile = function(t, e) {
                        var n, s, o, a, l, h, u = [],
                            p = [],
                            g = T[t + " "];
                        if (!g) {
                            for (e || (e = r(t)), n = e.length; n--;)(g = Dt(e[n]))[_] ? u.push(g) : p.push(g); (g = T(t, (s = p, a = (o = u).length > 0, l = s.length > 0, h = function(t, e, n, r, h) {
                                var u, p, g, v = 0,
                                    y = "0",
                                    b = t && [],
                                    _ = [],
                                    w = c,
                                    k = t || l && i.find.TAG("*", h),
                                    C = D += null == w ? 1 : Math.random() || .1,
                                    x = k.length;
                                for (h && (c = e === f || e || h); y !== x && null != (u = k[y]); y++) {
                                    if (l && u) {
                                        for (p = 0, e || u.ownerDocument === f || (d(u), n = !m); g = s[p++];) if (g(u, e || f, n)) {
                                            r.push(u);
                                            break
                                        }
                                        h && (D = C)
                                    }
                                    a && ((u = !g && u) && v--, t && b.push(u))
                                }
                                if (v += y, a && y !== v) {
                                    for (p = 0; g = o[p++];) g(b, _, e, n);
                                    if (t) {
                                        if (v > 0) for (; y--;) b[y] || _[y] || (_[y] = A.call(r));
                                        _ = _t(_)
                                    }
                                    I.apply(r, _),
                                    h && !t && _.length > 0 && v + o.length > 1 && ot.uniqueSort(r)
                                }
                                return h && (D = C, c = w),
                                    b
                            },
                                a ? at(h) : h))).selector = t
                        }
                        return g
                    },
                    l = ot.select = function(t, e, n, s) {
                        var o, l, c, h, u, d = "function" == typeof t && t,
                            f = !s && r(t = d.selector || t);
                        if (n = n || [], 1 === f.length) {
                            if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === e.nodeType && m && i.relative[l[1].type]) {
                                if (! (e = (i.find.ID(c.matches[0].replace(J, tt), e) || [])[0])) return n;
                                d && (e = e.parentNode),
                                    t = t.slice(l.shift().value.length)
                            }
                            for (o = z.needsContext.test(t) ? 0 : l.length; o--&&(c = l[o], !i.relative[h = c.type]);) if ((u = i.find[h]) && (s = u(c.matches[0].replace(J, tt), X.test(l[0].type) && mt(e.parentNode) || e))) {
                                if (l.splice(o, 1), !(t = s.length && vt(l))) return I.apply(n, s),
                                    n;
                                break
                            }
                        }
                        return (d || a(t, f))(s, e, !m, n, !e || X.test(t) && mt(e.parentNode) || e),
                            n
                    },
                    n.sortStable = _.split("").sort(S).join("") === _,
                    n.detectDuplicates = !!u,
                    d(),
                    n.sortDetached = lt(function(t) {
                        return 1 & t.compareDocumentPosition(f.createElement("fieldset"))
                    }),
                lt(function(t) {
                    return t.innerHTML = "<a href='#'></a>",
                    "#" === t.firstChild.getAttribute("href")
                }) || ct("type|href|height|width",
                    function(t, e, n) {
                        if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                    }),
                n.attributes && lt(function(t) {
                    return t.innerHTML = "<input/>",
                        t.firstChild.setAttribute("value", ""),
                    "" === t.firstChild.getAttribute("value")
                }) || ct("value",
                    function(t, e, n) {
                        if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
                    }),
                lt(function(t) {
                    return null == t.getAttribute("disabled")
                }) || ct(L,
                    function(t, e, n) {
                        var i;
                        if (!n) return ! 0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value: null
                    }),
                    ot
            } (t);
            w.find = C,
                w.expr = C.selectors,
                w.expr[":"] = w.expr.pseudos,
                w.uniqueSort = w.unique = C.uniqueSort,
                w.text = C.getText,
                w.isXMLDoc = C.isXML,
                w.contains = C.contains,
                w.escapeSelector = C.escape;
            var x = function(t, e, n) {
                    for (var i = [], s = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;) if (1 === t.nodeType) {
                        if (s && w(t).is(n)) break;
                        i.push(t)
                    }
                    return i
                },
                T = function(t, e) {
                    for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                    return n
                },
                S = w.expr.match.needsContext;
            function E(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            }
            var M = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            function A(t, e, n) {
                return m(e) ? w.grep(t,
                    function(t, i) {
                        return !! e.call(t, i, t) !== n
                    }) : e.nodeType ? w.grep(t,
                    function(t) {
                        return t === e !== n
                    }) : "string" != typeof e ? w.grep(t,
                    function(t) {
                        return l.call(e, t) > -1 !== n
                    }) : w.filter(e, t, n)
            }
            w.filter = function(t, e, n) {
                var i = e[0];
                return n && (t = ":not(" + t + ")"),
                    1 === e.length && 1 === i.nodeType ? w.find.matchesSelector(i, t) ? [i] : [] : w.find.matches(t, w.grep(e,
                        function(t) {
                            return 1 === t.nodeType
                        }))
            },
                w.fn.extend({
                    find: function(t) {
                        var e, n, i = this.length,
                            s = this;
                        if ("string" != typeof t) return this.pushStack(w(t).filter(function() {
                            for (e = 0; e < i; e++) if (w.contains(s[e], this)) return ! 0
                        }));
                        for (n = this.pushStack([]), e = 0; e < i; e++) w.find(t, s[e], n);
                        return i > 1 ? w.uniqueSort(n) : n
                    },
                    filter: function(t) {
                        return this.pushStack(A(this, t || [], !1))
                    },
                    not: function(t) {
                        return this.pushStack(A(this, t || [], !0))
                    },
                    is: function(t) {
                        return !! A(this, "string" == typeof t && S.test(t) ? w(t) : t || [], !1).length
                    }
                });
            var O, I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/; (w.fn.init = function(t, e, n) {
                var s, o;
                if (!t) return this;
                if (n = n || O, "string" == typeof t) {
                    if (! (s = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : I.exec(t)) || !s[1] && e) return ! e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                    if (s[1]) {
                        if (e = e instanceof w ? e[0] : e, w.merge(this, w.parseHTML(s[1], e && e.nodeType ? e.ownerDocument || e: i, !0)), M.test(s[1]) && w.isPlainObject(e)) for (s in e) m(this[s]) ? this[s](e[s]) : this.attr(s, e[s]);
                        return this
                    }
                    return (o = i.getElementById(s[2])) && (this[0] = o, this.length = 1),
                        this
                }
                return t.nodeType ? (this[0] = t, this.length = 1, this) : m(t) ? void 0 !== n.ready ? n.ready(t) : t(w) : w.makeArray(t, this)
            }).prototype = w.fn,
                O = w(i);
            var N = /^(?:parents|prev(?:Until|All))/,
                P = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
            function L(t, e) {
                for (; (t = t[e]) && 1 !== t.nodeType;);
                return t
            }
            w.fn.extend({
                has: function(t) {
                    var e = w(t, this),
                        n = e.length;
                    return this.filter(function() {
                        for (var t = 0; t < n; t++) if (w.contains(this, e[t])) return ! 0
                    })
                },
                closest: function(t, e) {
                    var n, i = 0,
                        s = this.length,
                        o = [],
                        r = "string" != typeof t && w(t);
                    if (!S.test(t)) for (; i < s; i++) for (n = this[i]; n && n !== e; n = n.parentNode) if (n.nodeType < 11 && (r ? r.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, t))) {
                        o.push(n);
                        break
                    }
                    return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
                },
                index: function(t) {
                    return t ? "string" == typeof t ? l.call(w(t), this[0]) : l.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
                },
                add: function(t, e) {
                    return this.pushStack(w.uniqueSort(w.merge(this.get(), w(t, e))))
                },
                addBack: function(t) {
                    return this.add(null == t ? this.prevObject: this.prevObject.filter(t))
                }
            }),
                w.each({
                        parent: function(t) {
                            var e = t.parentNode;
                            return e && 11 !== e.nodeType ? e: null
                        },
                        parents: function(t) {
                            return x(t, "parentNode")
                        },
                        parentsUntil: function(t, e, n) {
                            return x(t, "parentNode", n)
                        },
                        next: function(t) {
                            return L(t, "nextSibling")
                        },
                        prev: function(t) {
                            return L(t, "previousSibling")
                        },
                        nextAll: function(t) {
                            return x(t, "nextSibling")
                        },
                        prevAll: function(t) {
                            return x(t, "previousSibling")
                        },
                        nextUntil: function(t, e, n) {
                            return x(t, "nextSibling", n)
                        },
                        prevUntil: function(t, e, n) {
                            return x(t, "previousSibling", n)
                        },
                        siblings: function(t) {
                            return T((t.parentNode || {}).firstChild, t)
                        },
                        children: function(t) {
                            return T(t.firstChild)
                        },
                        contents: function(t) {
                            return E(t, "iframe") ? t.contentDocument: (E(t, "template") && (t = t.content || t), w.merge([], t.childNodes))
                        }
                    },
                    function(t, e) {
                        w.fn[t] = function(n, i) {
                            var s = w.map(this, e, n);
                            return "Until" !== t.slice( - 5) && (i = n),
                            i && "string" == typeof i && (s = w.filter(i, s)),
                            this.length > 1 && (P[t] || w.uniqueSort(s), N.test(t) && s.reverse()),
                                this.pushStack(s)
                        }
                    });
            var j = /[^\x20\t\r\n\f]+/g;
            function Y(t) {
                return t
            }
            function H(t) {
                throw t
            }
            function $(t, e, n, i) {
                var s;
                try {
                    t && m(s = t.promise) ? s.call(t).done(e).fail(n) : t && m(s = t.then) ? s.call(t, e, n) : e.apply(void 0, [t].slice(i))
                } catch(t) {
                    n.apply(void 0, [t])
                }
            }
            w.Callbacks = function(t) {
                var e, n;
                t = "string" == typeof t ? (e = t, n = {},
                    w.each(e.match(j) || [],
                        function(t, e) {
                            n[e] = !0
                        }), n) : w.extend({},
                    t);
                var i, s, o, r, a = [],
                    l = [],
                    c = -1,
                    h = function() {
                        for (r = r || t.once, o = i = !0; l.length; c = -1) for (s = l.shift(); ++c < a.length;) ! 1 === a[c].apply(s[0], s[1]) && t.stopOnFalse && (c = a.length, s = !1);
                        t.memory || (s = !1),
                            i = !1,
                        r && (a = s ? [] : "")
                    },
                    u = {
                        add: function() {
                            return a && (s && !i && (c = a.length - 1, l.push(s)),
                                function e(n) {
                                    w.each(n,
                                        function(n, i) {
                                            m(i) ? t.unique && u.has(i) || a.push(i) : i && i.length && "string" !== b(i) && e(i)
                                        })
                                } (arguments), s && !i && h()),
                                this
                        },
                        remove: function() {
                            return w.each(arguments,
                                function(t, e) {
                                    for (var n; (n = w.inArray(e, a, n)) > -1;) a.splice(n, 1),
                                    n <= c && c--
                                }),
                                this
                        },
                        has: function(t) {
                            return t ? w.inArray(t, a) > -1 : a.length > 0
                        },
                        empty: function() {
                            return a && (a = []),
                                this
                        },
                        disable: function() {
                            return r = l = [],
                                a = s = "",
                                this
                        },
                        disabled: function() {
                            return ! a
                        },
                        lock: function() {
                            return r = l = [],
                            s || i || (a = s = ""),
                                this
                        },
                        locked: function() {
                            return !! r
                        },
                        fireWith: function(t, e) {
                            return r || (e = [t, (e = e || []).slice ? e.slice() : e], l.push(e), i || h()),
                                this
                        },
                        fire: function() {
                            return u.fireWith(this, arguments),
                                this
                        },
                        fired: function() {
                            return !! o
                        }
                    };
                return u
            },
                w.extend({
                    Deferred: function(e) {
                        var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]],
                            i = "pending",
                            s = {
                                state: function() {
                                    return i
                                },
                                always: function() {
                                    return o.done(arguments).fail(arguments),
                                        this
                                },
                                catch: function(t) {
                                    return s.then(null, t)
                                },
                                pipe: function() {
                                    var t = arguments;
                                    return w.Deferred(function(e) {
                                        w.each(n,
                                            function(n, i) {
                                                var s = m(t[i[4]]) && t[i[4]];
                                                o[i[1]](function() {
                                                    var t = s && s.apply(this, arguments);
                                                    t && m(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, s ? [t] : arguments)
                                                })
                                            }),
                                            t = null
                                    }).promise()
                                },
                                then: function(e, i, s) {
                                    var o = 0;
                                    function r(e, n, i, s) {
                                        return function() {
                                            var a = this,
                                                l = arguments,
                                                c = function() {
                                                    var t, c;
                                                    if (! (e < o)) {
                                                        if ((t = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                                        c = t && ("object" == typeof t || "function" == typeof t) && t.then,
                                                            m(c) ? s ? c.call(t, r(o, n, Y, s), r(o, n, H, s)) : (o++, c.call(t, r(o, n, Y, s), r(o, n, H, s), r(o, n, Y, n.notifyWith))) : (i !== Y && (a = void 0, l = [t]), (s || n.resolveWith)(a, l))
                                                    }
                                                },
                                                h = s ? c: function() {
                                                    try {
                                                        c()
                                                    } catch(t) {
                                                        w.Deferred.exceptionHook && w.Deferred.exceptionHook(t, h.stackTrace),
                                                        e + 1 >= o && (i !== H && (a = void 0, l = [t]), n.rejectWith(a, l))
                                                    }
                                                };
                                            e ? h() : (w.Deferred.getStackHook && (h.stackTrace = w.Deferred.getStackHook()), t.setTimeout(h))
                                        }
                                    }
                                    return w.Deferred(function(t) {
                                        n[0][3].add(r(0, t, m(s) ? s: Y, t.notifyWith)),
                                            n[1][3].add(r(0, t, m(e) ? e: Y)),
                                            n[2][3].add(r(0, t, m(i) ? i: H))
                                    }).promise()
                                },
                                promise: function(t) {
                                    return null != t ? w.extend(t, s) : s
                                }
                            },
                            o = {};
                        return w.each(n,
                            function(t, e) {
                                var r = e[2],
                                    a = e[5];
                                s[e[1]] = r.add,
                                a && r.add(function() {
                                        i = a
                                    },
                                    n[3 - t][2].disable, n[3 - t][3].disable, n[0][2].lock, n[0][3].lock),
                                    r.add(e[3].fire),
                                    o[e[0]] = function() {
                                        return o[e[0] + "With"](this === o ? void 0 : this, arguments),
                                            this
                                    },
                                    o[e[0] + "With"] = r.fireWith
                            }),
                            s.promise(o),
                        e && e.call(o, o),
                            o
                    },
                    when: function(t) {
                        var e = arguments.length,
                            n = e,
                            i = Array(n),
                            s = o.call(arguments),
                            r = w.Deferred(),
                            a = function(t) {
                                return function(n) {
                                    i[t] = this,
                                        s[t] = arguments.length > 1 ? o.call(arguments) : n,
                                    --e || r.resolveWith(i, s)
                                }
                            };
                        if (e <= 1 && ($(t, r.done(a(n)).resolve, r.reject, !e), "pending" === r.state() || m(s[n] && s[n].then))) return r.then();
                        for (; n--;) $(s[n], a(n), r.reject);
                        return r.promise()
                    }
                });
            var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            w.Deferred.exceptionHook = function(e, n) {
                t.console && t.console.warn && e && R.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
            },
                w.readyException = function(e) {
                    t.setTimeout(function() {
                        throw e
                    })
                };
            var W = w.Deferred();
            function U() {
                i.removeEventListener("DOMContentLoaded", U),
                    t.removeEventListener("load", U),
                    w.ready()
            }
            w.fn.ready = function(t) {
                return W.then(t).
                catch(function(t) {
                    w.readyException(t)
                }),
                    this
            },
                w.extend({
                    isReady: !1,
                    readyWait: 1,
                    ready: function(t) { (!0 === t ? --w.readyWait: w.isReady) || (w.isReady = !0, !0 !== t && --w.readyWait > 0 || W.resolveWith(i, [w]))
                    }
                }),
                w.ready.then = W.then,
                "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? t.setTimeout(w.ready) : (i.addEventListener("DOMContentLoaded", U), t.addEventListener("load", U));
            var F = function(t, e, n, i, s, o, r) {
                    var a = 0,
                        l = t.length,
                        c = null == n;
                    if ("object" === b(n)) for (a in s = !0, n) F(t, e, a, n[a], !0, o, r);
                    else if (void 0 !== i && (s = !0, m(i) || (r = !0), c && (r ? (e.call(t, i), e = null) : (c = e, e = function(t, e, n) {
                        return c.call(w(t), n)
                    })), e)) for (; a < l; a++) e(t[a], n, r ? i: i.call(t[a], a, e(t[a], n)));
                    return s ? t: c ? e.call(t) : l ? e(t[0], n) : o
                },
                q = /^-ms-/,
                V = /-([a-z])/g;
            function B(t, e) {
                return e.toUpperCase()
            }
            function z(t) {
                return t.replace(q, "ms-").replace(V, B)
            }
            var G = function(t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            };
            function K() {
                this.expando = w.expando + K.uid++
            }
            K.uid = 1,
                K.prototype = {
                    cache: function(t) {
                        var e = t[this.expando];
                        return e || (e = {},
                        G(t) && (t.nodeType ? t[this.expando] = e: Object.defineProperty(t, this.expando, {
                            value: e,
                            configurable: !0
                        }))),
                            e
                    },
                    set: function(t, e, n) {
                        var i, s = this.cache(t);
                        if ("string" == typeof e) s[z(e)] = n;
                        else for (i in e) s[z(i)] = e[i];
                        return s
                    },
                    get: function(t, e) {
                        return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][z(e)]
                    },
                    access: function(t, e, n) {
                        return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n: e)
                    },
                    remove: function(t, e) {
                        var n, i = t[this.expando];
                        if (void 0 !== i) {
                            if (void 0 !== e) {
                                n = (e = Array.isArray(e) ? e.map(z) : (e = z(e)) in i ? [e] : e.match(j) || []).length;
                                for (; n--;) delete i[e[n]]
                            } (void 0 === e || w.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                        }
                    },
                    hasData: function(t) {
                        var e = t[this.expando];
                        return void 0 !== e && !w.isEmptyObject(e)
                    }
                };
            var Q = new K,
                Z = new K,
                X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                J = /[A-Z]/g;
            function tt(t, e, n) {
                var i, s;
                if (void 0 === n && 1 === t.nodeType) if (i = "data-" + e.replace(J, "-$&").toLowerCase(), "string" == typeof(n = t.getAttribute(i))) {
                    try {
                        n = "true" === (s = n) || "false" !== s && ("null" === s ? null: s === +s + "" ? +s: X.test(s) ? JSON.parse(s) : s)
                    } catch(t) {}
                    Z.set(t, e, n)
                } else n = void 0;
                return n
            }
            w.extend({
                hasData: function(t) {
                    return Z.hasData(t) || Q.hasData(t)
                },
                data: function(t, e, n) {
                    return Z.access(t, e, n)
                },
                removeData: function(t, e) {
                    Z.remove(t, e)
                },
                _data: function(t, e, n) {
                    return Q.access(t, e, n)
                },
                _removeData: function(t, e) {
                    Q.remove(t, e)
                }
            }),
                w.fn.extend({
                    data: function(t, e) {
                        var n, i, s, o = this[0],
                            r = o && o.attributes;
                        if (void 0 === t) {
                            if (this.length && (s = Z.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
                                for (n = r.length; n--;) r[n] && 0 === (i = r[n].name).indexOf("data-") && (i = z(i.slice(5)), tt(o, i, s[i]));
                                Q.set(o, "hasDataAttrs", !0)
                            }
                            return s
                        }
                        return "object" == typeof t ? this.each(function() {
                            Z.set(this, t)
                        }) : F(this,
                            function(e) {
                                var n;
                                if (o && void 0 === e) return void 0 !== (n = Z.get(o, t)) ? n: void 0 !== (n = tt(o, t)) ? n: void 0;
                                this.each(function() {
                                    Z.set(this, t, e)
                                })
                            },
                            null, e, arguments.length > 1, null, !0)
                    },
                    removeData: function(t) {
                        return this.each(function() {
                            Z.remove(this, t)
                        })
                    }
                }),
                w.extend({
                    queue: function(t, e, n) {
                        var i;
                        if (t) return e = (e || "fx") + "queue",
                            i = Q.get(t, e),
                        n && (!i || Array.isArray(n) ? i = Q.access(t, e, w.makeArray(n)) : i.push(n)),
                        i || []
                    },
                    dequeue: function(t, e) {
                        e = e || "fx";
                        var n = w.queue(t, e),
                            i = n.length,
                            s = n.shift(),
                            o = w._queueHooks(t, e);
                        "inprogress" === s && (s = n.shift(), i--),
                        s && ("fx" === e && n.unshift("inprogress"), delete o.stop, s.call(t,
                            function() {
                                w.dequeue(t, e)
                            },
                            o)),
                        !i && o && o.empty.fire()
                    },
                    _queueHooks: function(t, e) {
                        var n = e + "queueHooks";
                        return Q.get(t, n) || Q.access(t, n, {
                            empty: w.Callbacks("once memory").add(function() {
                                Q.remove(t, [e + "queue", n])
                            })
                        })
                    }
                }),
                w.fn.extend({
                    queue: function(t, e) {
                        var n = 2;
                        return "string" != typeof t && (e = t, t = "fx", n--),
                            arguments.length < n ? w.queue(this[0], t) : void 0 === e ? this: this.each(function() {
                                var n = w.queue(this, t, e);
                                w._queueHooks(this, t),
                                "fx" === t && "inprogress" !== n[0] && w.dequeue(this, t)
                            })
                    },
                    dequeue: function(t) {
                        return this.each(function() {
                            w.dequeue(this, t)
                        })
                    },
                    clearQueue: function(t) {
                        return this.queue(t || "fx", [])
                    },
                    promise: function(t, e) {
                        var n, i = 1,
                            s = w.Deferred(),
                            o = this,
                            r = this.length,
                            a = function() {--i || s.resolveWith(o, [o])
                            };
                        for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;)(n = Q.get(o[r], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                        return a(),
                            s.promise(e)
                    }
                });
            var et = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                nt = new RegExp("^(?:([+-])=|)(" + et + ")([a-z%]*)$", "i"),
                it = ["Top", "Right", "Bottom", "Left"],
                st = function(t, e) {
                    return "none" === (t = e || t).style.display || "" === t.style.display && w.contains(t.ownerDocument, t) && "none" === w.css(t, "display")
                },
                ot = function(t, e, n, i) {
                    var s, o, r = {};
                    for (o in e) r[o] = t.style[o],
                        t.style[o] = e[o];
                    for (o in s = n.apply(t, i || []), e) t.style[o] = r[o];
                    return s
                };
            function rt(t, e, n, i) {
                var s, o, r = 20,
                    a = i ?
                        function() {
                            return i.cur()
                        }: function() {
                            return w.css(t, e, "")
                        },
                    l = a(),
                    c = n && n[3] || (w.cssNumber[e] ? "": "px"),
                    h = (w.cssNumber[e] || "px" !== c && +l) && nt.exec(w.css(t, e));
                if (h && h[3] !== c) {
                    for (l /= 2, c = c || h[3], h = +l || 1; r--;) w.style(t, e, h + c),
                    (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (r = 0),
                        h /= o;
                    h *= 2,
                        w.style(t, e, h + c),
                        n = n || []
                }
                return n && (h = +h || +l || 0, s = n[1] ? h + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = h, i.end = s)),
                    s
            }
            var at = {};
            function lt(t, e) {
                for (var n, i, s, o, r, a, l, c = [], h = 0, u = t.length; h < u; h++)(i = t[h]).style && (n = i.style.display, e ? ("none" === n && (c[h] = Q.get(i, "display") || null, c[h] || (i.style.display = "")), "" === i.style.display && st(i) && (c[h] = (o = void 0, r = void 0, void 0, l = void 0, r = (s = i).ownerDocument, a = s.nodeName, (l = at[a]) || (o = r.body.appendChild(r.createElement(a)), l = w.css(o, "display"), o.parentNode.removeChild(o), "none" === l && (l = "block"), at[a] = l, l)))) : "none" !== n && (c[h] = "none", Q.set(i, "display", n)));
                for (h = 0; h < u; h++) null != c[h] && (t[h].style.display = c[h]);
                return t
            }
            w.fn.extend({
                show: function() {
                    return lt(this, !0)
                },
                hide: function() {
                    return lt(this)
                },
                toggle: function(t) {
                    return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                        st(this) ? w(this).show() : w(this).hide()
                    })
                }
            });
            var ct = /^(?:checkbox|radio)$/i,
                ht = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
                ut = /^$|^module$|\/(?:java|ecma)script/i,
                dt = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };
            function ft(t, e) {
                var n;
                return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [],
                    void 0 === e || e && E(t, e) ? w.merge([t], n) : n
            }
            function pt(t, e) {
                for (var n = 0,
                         i = t.length; n < i; n++) Q.set(t[n], "globalEval", !e || Q.get(e[n], "globalEval"))
            }
            dt.optgroup = dt.option,
                dt.tbody = dt.tfoot = dt.colgroup = dt.caption = dt.thead,
                dt.th = dt.td;
            var mt, gt, vt = /<|&#?\w+;/;
            function yt(t, e, n, i, s) {
                for (var o, r, a, l, c, h, u = e.createDocumentFragment(), d = [], f = 0, p = t.length; f < p; f++) if ((o = t[f]) || 0 === o) if ("object" === b(o)) w.merge(d, o.nodeType ? [o] : o);
                else if (vt.test(o)) {
                    for (r = r || u.appendChild(e.createElement("div")), a = (ht.exec(o) || ["", ""])[1].toLowerCase(), l = dt[a] || dt._default, r.innerHTML = l[1] + w.htmlPrefilter(o) + l[2], h = l[0]; h--;) r = r.lastChild;
                    w.merge(d, r.childNodes),
                        (r = u.firstChild).textContent = ""
                } else d.push(e.createTextNode(o));
                for (u.textContent = "", f = 0; o = d[f++];) if (i && w.inArray(o, i) > -1) s && s.push(o);
                else if (c = w.contains(o.ownerDocument, o), r = ft(u.appendChild(o), "script"), c && pt(r), n) for (h = 0; o = r[h++];) ut.test(o.type || "") && n.push(o);
                return u
            }
            mt = i.createDocumentFragment().appendChild(i.createElement("div")),
                (gt = i.createElement("input")).setAttribute("type", "radio"),
                gt.setAttribute("checked", "checked"),
                gt.setAttribute("name", "t"),
                mt.appendChild(gt),
                p.checkClone = mt.cloneNode(!0).cloneNode(!0).lastChild.checked,
                mt.innerHTML = "<textarea>x</textarea>",
                p.noCloneChecked = !!mt.cloneNode(!0).lastChild.defaultValue;
            var bt = i.documentElement,
                _t = /^key/,
                wt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                Dt = /^([^.]*)(?:\.(.+)|)/;
            function kt() {
                return ! 0
            }
            function Ct() {
                return ! 1
            }
            function xt() {
                try {
                    return i.activeElement
                } catch(t) {}
            }
            function Tt(t, e, n, i, s, o) {
                var r, a;
                if ("object" == typeof e) {
                    for (a in "string" != typeof n && (i = i || n, n = void 0), e) Tt(t, a, n, i, e[a], o);
                    return t
                }
                if (null == i && null == s ? (s = n, i = n = void 0) : null == s && ("string" == typeof n ? (s = i, i = void 0) : (s = i, i = n, n = void 0)), !1 === s) s = Ct;
                else if (!s) return t;
                return 1 === o && (r = s, (s = function(t) {
                    return w().off(t),
                        r.apply(this, arguments)
                }).guid = r.guid || (r.guid = w.guid++)),
                    t.each(function() {
                        w.event.add(this, e, s, i, n)
                    })
            }
            w.event = {
                global: {},
                add: function(t, e, n, i, s) {
                    var o, r, a, l, c, h, u, d, f, p, m, g = Q.get(t);
                    if (g) for (n.handler && (n = (o = n).handler, s = o.selector), s && w.find.matchesSelector(bt, s), n.guid || (n.guid = w.guid++), (l = g.events) || (l = g.events = {}), (r = g.handle) || (r = g.handle = function(e) {
                        return void 0 !== w && w.event.triggered !== e.type ? w.event.dispatch.apply(t, arguments) : void 0
                    }), c = (e = (e || "").match(j) || [""]).length; c--;) f = m = (a = Dt.exec(e[c]) || [])[1],
                        p = (a[2] || "").split(".").sort(),
                    f && (u = w.event.special[f] || {},
                        f = (s ? u.delegateType: u.bindType) || f, u = w.event.special[f] || {},
                        h = w.extend({
                                type: f,
                                origType: m,
                                data: i,
                                handler: n,
                                guid: n.guid,
                                selector: s,
                                needsContext: s && w.expr.match.needsContext.test(s),
                                namespace: p.join(".")
                            },
                            o), (d = l[f]) || ((d = l[f] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(t, i, p, r) || t.addEventListener && t.addEventListener(f, r)), u.add && (u.add.call(t, h), h.handler.guid || (h.handler.guid = n.guid)), s ? d.splice(d.delegateCount++, 0, h) : d.push(h), w.event.global[f] = !0)
                },
                remove: function(t, e, n, i, s) {
                    var o, r, a, l, c, h, u, d, f, p, m, g = Q.hasData(t) && Q.get(t);
                    if (g && (l = g.events)) {
                        for (c = (e = (e || "").match(j) || [""]).length; c--;) if (f = m = (a = Dt.exec(e[c]) || [])[1], p = (a[2] || "").split(".").sort(), f) {
                            for (u = w.event.special[f] || {},
                                     d = l[f = (i ? u.delegateType: u.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = o = d.length; o--;) h = d[o],
                            !s && m !== h.origType || n && n.guid !== h.guid || a && !a.test(h.namespace) || i && i !== h.selector && ("**" !== i || !h.selector) || (d.splice(o, 1), h.selector && d.delegateCount--, u.remove && u.remove.call(t, h));
                            r && !d.length && (u.teardown && !1 !== u.teardown.call(t, p, g.handle) || w.removeEvent(t, f, g.handle), delete l[f])
                        } else for (f in l) w.event.remove(t, f + e[c], n, i, !0);
                        w.isEmptyObject(l) && Q.remove(t, "handle events")
                    }
                },
                dispatch: function(t) {
                    var e, n, i, s, o, r, a = w.event.fix(t),
                        l = new Array(arguments.length),
                        c = (Q.get(this, "events") || {})[a.type] || [],
                        h = w.event.special[a.type] || {};
                    for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
                    if (a.delegateTarget = this, !h.preDispatch || !1 !== h.preDispatch.call(this, a)) {
                        for (r = w.event.handlers.call(this, a, c), e = 0; (s = r[e++]) && !a.isPropagationStopped();) for (a.currentTarget = s.elem, n = 0; (o = s.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (i = ((w.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                        return h.postDispatch && h.postDispatch.call(this, a),
                            a.result
                    }
                },
                handlers: function(t, e) {
                    var n, i, s, o, r, a = [],
                        l = e.delegateCount,
                        c = t.target;
                    if (l && c.nodeType && !("click" === t.type && t.button >= 1)) for (; c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                        for (o = [], r = {},
                                 n = 0; n < l; n++) void 0 === r[s = (i = e[n]).selector + " "] && (r[s] = i.needsContext ? w(s, this).index(c) > -1 : w.find(s, this, null, [c]).length),
                        r[s] && o.push(i);
                        o.length && a.push({
                            elem: c,
                            handlers: o
                        })
                    }
                    return c = this,
                    l < e.length && a.push({
                        elem: c,
                        handlers: e.slice(l)
                    }),
                        a
                },
                addProp: function(t, e) {
                    Object.defineProperty(w.Event.prototype, t, {
                        enumerable: !0,
                        configurable: !0,
                        get: m(e) ?
                            function() {
                                if (this.originalEvent) return e(this.originalEvent)
                            }: function() {
                                if (this.originalEvent) return this.originalEvent[t]
                            },
                        set: function(e) {
                            Object.defineProperty(this, t, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: e
                            })
                        }
                    })
                },
                fix: function(t) {
                    return t[w.expando] ? t: new w.Event(t)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            if (this !== xt() && this.focus) return this.focus(),
                                !1
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            if (this === xt() && this.blur) return this.blur(),
                                !1
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            if ("checkbox" === this.type && this.click && E(this, "input")) return this.click(),
                                !1
                        },
                        _default: function(t) {
                            return E(t.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(t) {
                            void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                        }
                    }
                }
            },
                w.removeEvent = function(t, e, n) {
                    t.removeEventListener && t.removeEventListener(e, n)
                },
                w.Event = function(t, e) {
                    if (! (this instanceof w.Event)) return new w.Event(t, e);
                    t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? kt: Ct, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode: t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t,
                    e && w.extend(this, e),
                        this.timeStamp = t && t.timeStamp || Date.now(),
                        this[w.expando] = !0
                },
                w.Event.prototype = {
                    constructor: w.Event,
                    isDefaultPrevented: Ct,
                    isPropagationStopped: Ct,
                    isImmediatePropagationStopped: Ct,
                    isSimulated: !1,
                    preventDefault: function() {
                        var t = this.originalEvent;
                        this.isDefaultPrevented = kt,
                        t && !this.isSimulated && t.preventDefault()
                    },
                    stopPropagation: function() {
                        var t = this.originalEvent;
                        this.isPropagationStopped = kt,
                        t && !this.isSimulated && t.stopPropagation()
                    },
                    stopImmediatePropagation: function() {
                        var t = this.originalEvent;
                        this.isImmediatePropagationStopped = kt,
                        t && !this.isSimulated && t.stopImmediatePropagation(),
                            this.stopPropagation()
                    }
                },
                w.each({
                        altKey: !0,
                        bubbles: !0,
                        cancelable: !0,
                        changedTouches: !0,
                        ctrlKey: !0,
                        detail: !0,
                        eventPhase: !0,
                        metaKey: !0,
                        pageX: !0,
                        pageY: !0,
                        shiftKey: !0,
                        view: !0,
                        char: !0,
                        charCode: !0,
                        key: !0,
                        keyCode: !0,
                        button: !0,
                        buttons: !0,
                        clientX: !0,
                        clientY: !0,
                        offsetX: !0,
                        offsetY: !0,
                        pointerId: !0,
                        pointerType: !0,
                        screenX: !0,
                        screenY: !0,
                        targetTouches: !0,
                        toElement: !0,
                        touches: !0,
                        which: function(t) {
                            var e = t.button;
                            return null == t.which && _t.test(t.type) ? null != t.charCode ? t.charCode: t.keyCode: !t.which && void 0 !== e && wt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
                        }
                    },
                    w.event.addProp),
                w.each({
                        mouseenter: "mouseover",
                        mouseleave: "mouseout",
                        pointerenter: "pointerover",
                        pointerleave: "pointerout"
                    },
                    function(t, e) {
                        w.event.special[t] = {
                            delegateType: e,
                            bindType: e,
                            handle: function(t) {
                                var n, i = t.relatedTarget,
                                    s = t.handleObj;
                                return i && (i === this || w.contains(this, i)) || (t.type = s.origType, n = s.handler.apply(this, arguments), t.type = e),
                                    n
                            }
                        }
                    }),
                w.fn.extend({
                    on: function(t, e, n, i) {
                        return Tt(this, t, e, n, i)
                    },
                    one: function(t, e, n, i) {
                        return Tt(this, t, e, n, i, 1)
                    },
                    off: function(t, e, n) {
                        var i, s;
                        if (t && t.preventDefault && t.handleObj) return i = t.handleObj,
                            w(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace: i.origType, i.selector, i.handler),
                            this;
                        if ("object" == typeof t) {
                            for (s in t) this.off(s, e, t[s]);
                            return this
                        }
                        return ! 1 !== e && "function" != typeof e || (n = e, e = void 0),
                        !1 === n && (n = Ct),
                            this.each(function() {
                                w.event.remove(this, t, n, e)
                            })
                    }
                });
            var St = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                Et = /<script|<style|<link/i,
                Mt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                At = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            function Ot(t, e) {
                return E(t, "table") && E(11 !== e.nodeType ? e: e.firstChild, "tr") && w(t).children("tbody")[0] || t
            }
            function It(t) {
                return t.type = (null !== t.getAttribute("type")) + "/" + t.type,
                    t
            }
            function Nt(t) {
                return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"),
                    t
            }
            function Pt(t, e) {
                var n, i, s, o, r, a, l, c;
                if (1 === e.nodeType) {
                    if (Q.hasData(t) && (o = Q.access(t), r = Q.set(e, o), c = o.events)) for (s in delete r.handle, r.events = {},
                        c) for (n = 0, i = c[s].length; n < i; n++) w.event.add(e, s, c[s][n]);
                    Z.hasData(t) && (a = Z.access(t), l = w.extend({},
                        a), Z.set(e, l))
                }
            }
            function Lt(t, e, n, i) {
                e = r.apply([], e);
                var s, o, a, l, c, h, u = 0,
                    d = t.length,
                    f = d - 1,
                    g = e[0],
                    v = m(g);
                if (v || d > 1 && "string" == typeof g && !p.checkClone && Mt.test(g)) return t.each(function(s) {
                    var o = t.eq(s);
                    v && (e[0] = g.call(this, s, o.html())),
                        Lt(o, e, n, i)
                });
                if (d && (o = (s = yt(e, t[0].ownerDocument, !1, t, i)).firstChild, 1 === s.childNodes.length && (s = o), o || i)) {
                    for (l = (a = w.map(ft(s, "script"), It)).length; u < d; u++) c = s,
                    u !== f && (c = w.clone(c, !0, !0), l && w.merge(a, ft(c, "script"))),
                        n.call(t[u], c, u);
                    if (l) for (h = a[a.length - 1].ownerDocument, w.map(a, Nt), u = 0; u < l; u++) c = a[u],
                    ut.test(c.type || "") && !Q.access(c, "globalEval") && w.contains(h, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(c.src) : y(c.textContent.replace(At, ""), h, c))
                }
                return t
            }
            function jt(t, e, n) {
                for (var i, s = e ? w.filter(e, t) : t, o = 0; null != (i = s[o]); o++) n || 1 !== i.nodeType || w.cleanData(ft(i)),
                i.parentNode && (n && w.contains(i.ownerDocument, i) && pt(ft(i, "script")), i.parentNode.removeChild(i));
                return t
            }
            w.extend({
                htmlPrefilter: function(t) {
                    return t.replace(St, "<$1></$2>")
                },
                clone: function(t, e, n) {
                    var i, s, o, r, a, l, c, h = t.cloneNode(!0),
                        u = w.contains(t.ownerDocument, t);
                    if (! (p.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || w.isXMLDoc(t))) for (r = ft(h), i = 0, s = (o = ft(t)).length; i < s; i++) a = o[i],
                        l = r[i],
                        void 0,
                        "input" === (c = l.nodeName.toLowerCase()) && ct.test(a.type) ? l.checked = a.checked: "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
                    if (e) if (n) for (o = o || ft(t), r = r || ft(h), i = 0, s = o.length; i < s; i++) Pt(o[i], r[i]);
                    else Pt(t, h);
                    return (r = ft(h, "script")).length > 0 && pt(r, !u && ft(t, "script")),
                        h
                },
                cleanData: function(t) {
                    for (var e, n, i, s = w.event.special,
                             o = 0; void 0 !== (n = t[o]); o++) if (G(n)) {
                        if (e = n[Q.expando]) {
                            if (e.events) for (i in e.events) s[i] ? w.event.remove(n, i) : w.removeEvent(n, i, e.handle);
                            n[Q.expando] = void 0
                        }
                        n[Z.expando] && (n[Z.expando] = void 0)
                    }
                }
            }),
                w.fn.extend({
                    detach: function(t) {
                        return jt(this, t, !0)
                    },
                    remove: function(t) {
                        return jt(this, t)
                    },
                    text: function(t) {
                        return F(this,
                            function(t) {
                                return void 0 === t ? w.text(this) : this.empty().each(function() {
                                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                                })
                            },
                            null, t, arguments.length)
                    },
                    append: function() {
                        return Lt(this, arguments,
                            function(t) {
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ot(this, t).appendChild(t)
                            })
                    },
                    prepend: function() {
                        return Lt(this, arguments,
                            function(t) {
                                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                    var e = Ot(this, t);
                                    e.insertBefore(t, e.firstChild)
                                }
                            })
                    },
                    before: function() {
                        return Lt(this, arguments,
                            function(t) {
                                this.parentNode && this.parentNode.insertBefore(t, this)
                            })
                    },
                    after: function() {
                        return Lt(this, arguments,
                            function(t) {
                                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                            })
                    },
                    empty: function() {
                        for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (w.cleanData(ft(t, !1)), t.textContent = "");
                        return this
                    },
                    clone: function(t, e) {
                        return t = null != t && t,
                            e = null == e ? t: e,
                            this.map(function() {
                                return w.clone(this, t, e)
                            })
                    },
                    html: function(t) {
                        return F(this,
                            function(t) {
                                var e = this[0] || {},
                                    n = 0,
                                    i = this.length;
                                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                                if ("string" == typeof t && !Et.test(t) && !dt[(ht.exec(t) || ["", ""])[1].toLowerCase()]) {
                                    t = w.htmlPrefilter(t);
                                    try {
                                        for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (w.cleanData(ft(e, !1)), e.innerHTML = t);
                                        e = 0
                                    } catch(t) {}
                                }
                                e && this.empty().append(t)
                            },
                            null, t, arguments.length)
                    },
                    replaceWith: function() {
                        var t = [];
                        return Lt(this, arguments,
                            function(e) {
                                var n = this.parentNode;
                                w.inArray(this, t) < 0 && (w.cleanData(ft(this)), n && n.replaceChild(e, this))
                            },
                            t)
                    }
                }),
                w.each({
                        appendTo: "append",
                        prependTo: "prepend",
                        insertBefore: "before",
                        insertAfter: "after",
                        replaceAll: "replaceWith"
                    },
                    function(t, e) {
                        w.fn[t] = function(t) {
                            for (var n, i = [], s = w(t), o = s.length - 1, r = 0; r <= o; r++) n = r === o ? this: this.clone(!0),
                                w(s[r])[e](n),
                                a.apply(i, n.get());
                            return this.pushStack(i)
                        }
                    });
            var Yt = new RegExp("^(" + et + ")(?!px)[a-z%]+$", "i"),
                Ht = function(e) {
                    var n = e.ownerDocument.defaultView;
                    return n && n.opener || (n = t),
                        n.getComputedStyle(e)
                },
                $t = new RegExp(it.join("|"), "i");
            function Rt(t, e, n) {
                var i, s, o, r, a = t.style;
                return (n = n || Ht(t)) && ("" !== (r = n.getPropertyValue(e) || n[e]) || w.contains(t.ownerDocument, t) || (r = w.style(t, e)), !p.pixelBoxStyles() && Yt.test(r) && $t.test(e) && (i = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = n.width, a.width = i, a.minWidth = s, a.maxWidth = o)),
                    void 0 !== r ? r + "": r
            }
            function Wt(t, e) {
                return {
                    get: function() {
                        if (!t()) return (this.get = e).apply(this, arguments);
                        delete this.get
                    }
                }
            } !
                function() {
                    function e() {
                        if (h) {
                            c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                                h.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                                bt.appendChild(c).appendChild(h);
                            var e = t.getComputedStyle(h);
                            s = "1%" !== e.top,
                                l = 12 === n(e.marginLeft),
                                h.style.right = "60%",
                                a = 36 === n(e.right),
                                o = 36 === n(e.width),
                                h.style.position = "absolute",
                                r = 36 === h.offsetWidth || "absolute",
                                bt.removeChild(c),
                                h = null
                        }
                    }
                    function n(t) {
                        return Math.round(parseFloat(t))
                    }
                    var s, o, r, a, l, c = i.createElement("div"),
                        h = i.createElement("div");
                    h.style && (h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === h.style.backgroundClip, w.extend(p, {
                        boxSizingReliable: function() {
                            return e(),
                                o
                        },
                        pixelBoxStyles: function() {
                            return e(),
                                a
                        },
                        pixelPosition: function() {
                            return e(),
                                s
                        },
                        reliableMarginLeft: function() {
                            return e(),
                                l
                        },
                        scrollboxSize: function() {
                            return e(),
                                r
                        }
                    }))
                } ();
            var Ut = /^(none|table(?!-c[ea]).+)/,
                Ft = /^--/,
                qt = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                Vt = {
                    letterSpacing: "0",
                    fontWeight: "400"
                },
                Bt = ["Webkit", "Moz", "ms"],
                zt = i.createElement("div").style;
            function Gt(t) {
                var e = w.cssProps[t];
                return e || (e = w.cssProps[t] = function(t) {
                    if (t in zt) return t;
                    for (var e = t[0].toUpperCase() + t.slice(1), n = Bt.length; n--;) if ((t = Bt[n] + e) in zt) return t
                } (t) || t),
                    e
            }
            function Kt(t, e, n) {
                var i = nt.exec(e);
                return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
            }
            function Qt(t, e, n, i, s, o) {
                var r = "width" === e ? 1 : 0,
                    a = 0,
                    l = 0;
                if (n === (i ? "border": "content")) return 0;
                for (; r < 4; r += 2)"margin" === n && (l += w.css(t, n + it[r], !0, s)),
                    i ? ("content" === n && (l -= w.css(t, "padding" + it[r], !0, s)), "margin" !== n && (l -= w.css(t, "border" + it[r] + "Width", !0, s))) : (l += w.css(t, "padding" + it[r], !0, s), "padding" !== n ? l += w.css(t, "border" + it[r] + "Width", !0, s) : a += w.css(t, "border" + it[r] + "Width", !0, s));
                return ! i && o >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - a - .5))),
                    l
            }
            function Zt(t, e, n) {
                var i = Ht(t),
                    s = Rt(t, e, i),
                    o = "border-box" === w.css(t, "boxSizing", !1, i),
                    r = o;
                if (Yt.test(s)) {
                    if (!n) return s;
                    s = "auto"
                }
                return r = r && (p.boxSizingReliable() || s === t.style[e]),
                ("auto" === s || !parseFloat(s) && "inline" === w.css(t, "display", !1, i)) && (s = t["offset" + e[0].toUpperCase() + e.slice(1)], r = !0),
                (s = parseFloat(s) || 0) + Qt(t, e, n || (o ? "border": "content"), r, i, s) + "px"
            }
            function Xt(t, e, n, i, s) {
                return new Xt.prototype.init(t, e, n, i, s)
            }
            w.extend({
                cssHooks: {
                    opacity: {
                        get: function(t, e) {
                            if (e) {
                                var n = Rt(t, "opacity");
                                return "" === n ? "1": n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {},
                style: function(t, e, n, i) {
                    if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                        var s, o, r, a = z(e),
                            l = Ft.test(e),
                            c = t.style;
                        if (l || (e = Gt(a)), r = w.cssHooks[e] || w.cssHooks[a], void 0 === n) return r && "get" in r && void 0 !== (s = r.get(t, !1, i)) ? s: c[e];
                        "string" === (o = typeof n) && (s = nt.exec(n)) && s[1] && (n = rt(t, e, s), o = "number"),
                        null != n && n == n && ("number" === o && (n += s && s[3] || (w.cssNumber[a] ? "": "px")), p.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"), r && "set" in r && void 0 === (n = r.set(t, n, i)) || (l ? c.setProperty(e, n) : c[e] = n))
                    }
                },
                css: function(t, e, n, i) {
                    var s, o, r, a = z(e);
                    return Ft.test(e) || (e = Gt(a)),
                    (r = w.cssHooks[e] || w.cssHooks[a]) && "get" in r && (s = r.get(t, !0, n)),
                    void 0 === s && (s = Rt(t, e, i)),
                    "normal" === s && e in Vt && (s = Vt[e]),
                        "" === n || n ? (o = parseFloat(s), !0 === n || isFinite(o) ? o || 0 : s) : s
                }
            }),
                w.each(["height", "width"],
                    function(t, e) {
                        w.cssHooks[e] = {
                            get: function(t, n, i) {
                                if (n) return ! Ut.test(w.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Zt(t, e, i) : ot(t, qt,
                                    function() {
                                        return Zt(t, e, i)
                                    })
                            },
                            set: function(t, n, i) {
                                var s, o = Ht(t),
                                    r = "border-box" === w.css(t, "boxSizing", !1, o),
                                    a = i && Qt(t, e, i, r, o);
                                return r && p.scrollboxSize() === o.position && (a -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(o[e]) - Qt(t, e, "border", !1, o) - .5)),
                                a && (s = nt.exec(n)) && "px" !== (s[3] || "px") && (t.style[e] = n, n = w.css(t, e)),
                                    Kt(0, n, a)
                            }
                        }
                    }),
                w.cssHooks.marginLeft = Wt(p.reliableMarginLeft,
                    function(t, e) {
                        if (e) return (parseFloat(Rt(t, "marginLeft")) || t.getBoundingClientRect().left - ot(t, {
                                marginLeft: 0
                            },
                            function() {
                                return t.getBoundingClientRect().left
                            })) + "px"
                    }),
                w.each({
                        margin: "",
                        padding: "",
                        border: "Width"
                    },
                    function(t, e) {
                        w.cssHooks[t + e] = {
                            expand: function(n) {
                                for (var i = 0,
                                         s = {},
                                         o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) s[t + it[i] + e] = o[i] || o[i - 2] || o[0];
                                return s
                            }
                        },
                        "margin" !== t && (w.cssHooks[t + e].set = Kt)
                    }),
                w.fn.extend({
                    css: function(t, e) {
                        return F(this,
                            function(t, e, n) {
                                var i, s, o = {},
                                    r = 0;
                                if (Array.isArray(e)) {
                                    for (i = Ht(t), s = e.length; r < s; r++) o[e[r]] = w.css(t, e[r], !1, i);
                                    return o
                                }
                                return void 0 !== n ? w.style(t, e, n) : w.css(t, e)
                            },
                            t, e, arguments.length > 1)
                    }
                }),
                w.Tween = Xt,
                Xt.prototype = {
                    constructor: Xt,
                    init: function(t, e, n, i, s, o) {
                        this.elem = t,
                            this.prop = n,
                            this.easing = s || w.easing._default,
                            this.options = e,
                            this.start = this.now = this.cur(),
                            this.end = i,
                            this.unit = o || (w.cssNumber[n] ? "": "px")
                    },
                    cur: function() {
                        var t = Xt.propHooks[this.prop];
                        return t && t.get ? t.get(this) : Xt.propHooks._default.get(this)
                    },
                    run: function(t) {
                        var e, n = Xt.propHooks[this.prop];
                        return this.options.duration ? this.pos = e = w.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
                            this.now = (this.end - this.start) * e + this.start,
                        this.options.step && this.options.step.call(this.elem, this.now, this),
                            n && n.set ? n.set(this) : Xt.propHooks._default.set(this),
                            this
                    }
                },
                Xt.prototype.init.prototype = Xt.prototype,
                Xt.propHooks = {
                    _default: {
                        get: function(t) {
                            var e;
                            return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = w.css(t.elem, t.prop, "")) && "auto" !== e ? e: 0
                        },
                        set: function(t) {
                            w.fx.step[t.prop] ? w.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[w.cssProps[t.prop]] && !w.cssHooks[t.prop] ? t.elem[t.prop] = t.now: w.style(t.elem, t.prop, t.now + t.unit)
                        }
                    }
                },
                Xt.propHooks.scrollTop = Xt.propHooks.scrollLeft = {
                    set: function(t) {
                        t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
                    }
                },
                w.easing = {
                    linear: function(t) {
                        return t
                    },
                    swing: function(t) {
                        return.5 - Math.cos(t * Math.PI) / 2
                    },
                    _default: "swing"
                },
                w.fx = Xt.prototype.init,
                w.fx.step = {};
            var Jt, te, ee, ne, ie = /^(?:toggle|show|hide)$/,
                se = /queueHooks$/;
            function oe() {
                te && (!1 === i.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(oe) : t.setTimeout(oe, w.fx.interval), w.fx.tick())
            }
            function re() {
                return t.setTimeout(function() {
                    Jt = void 0
                }),
                    Jt = Date.now()
            }
            function ae(t, e) {
                var n, i = 0,
                    s = {
                        height: t
                    };
                for (e = e ? 1 : 0; i < 4; i += 2 - e) s["margin" + (n = it[i])] = s["padding" + n] = t;
                return e && (s.opacity = s.width = t),
                    s
            }
            function le(t, e, n) {
                for (var i, s = (ce.tweeners[e] || []).concat(ce.tweeners["*"]), o = 0, r = s.length; o < r; o++) if (i = s[o].call(n, e, t)) return i
            }
            function ce(t, e, n) {
                var i, s, o = 0,
                    r = ce.prefilters.length,
                    a = w.Deferred().always(function() {
                        delete l.elem
                    }),
                    l = function() {
                        if (s) return ! 1;
                        for (var e = Jt || re(), n = Math.max(0, c.startTime + c.duration - e), i = 1 - (n / c.duration || 0), o = 0, r = c.tweens.length; o < r; o++) c.tweens[o].run(i);
                        return a.notifyWith(t, [c, i, n]),
                            i < 1 && r ? n: (r || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1)
                    },
                    c = a.promise({
                        elem: t,
                        props: w.extend({},
                            e),
                        opts: w.extend(!0, {
                                specialEasing: {},
                                easing: w.easing._default
                            },
                            n),
                        originalProperties: e,
                        originalOptions: n,
                        startTime: Jt || re(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(e, n) {
                            var i = w.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                            return c.tweens.push(i),
                                i
                        },
                        stop: function(e) {
                            var n = 0,
                                i = e ? c.tweens.length: 0;
                            if (s) return this;
                            for (s = !0; n < i; n++) c.tweens[n].run(1);
                            return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]),
                                this
                        }
                    }),
                    h = c.props;
                for (!
                         function(t, e) {
                             var n, i, s, o, r;
                             for (n in t) if (s = e[i = z(n)], o = t[n], Array.isArray(o) && (s = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), (r = w.cssHooks[i]) && "expand" in r) for (n in o = r.expand(o), delete t[i], o) n in t || (t[n] = o[n], e[n] = s);
                             else e[i] = s
                         } (h, c.opts.specialEasing); o < r; o++) if (i = ce.prefilters[o].call(c, t, h, c.opts)) return m(i.stop) && (w._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
                    i;
                return w.map(h, le, c),
                m(c.opts.start) && c.opts.start.call(t, c),
                    c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
                    w.fx.timer(w.extend(l, {
                        elem: t,
                        anim: c,
                        queue: c.opts.queue
                    })),
                    c
            }
            w.Animation = w.extend(ce, {
                tweeners: {
                    "*": [function(t, e) {
                        var n = this.createTween(t, e);
                        return rt(n.elem, t, nt.exec(e), n),
                            n
                    }]
                },
                tweener: function(t, e) {
                    m(t) ? (e = t, t = ["*"]) : t = t.match(j);
                    for (var n, i = 0,
                             s = t.length; i < s; i++) n = t[i],
                        ce.tweeners[n] = ce.tweeners[n] || [],
                        ce.tweeners[n].unshift(e)
                },
                prefilters: [function(t, e, n) {
                    var i, s, o, r, a, l, c, h, u = "width" in e || "height" in e,
                        d = this,
                        f = {},
                        p = t.style,
                        m = t.nodeType && st(t),
                        g = Q.get(t, "fxshow");
                    for (i in n.queue || (null == (r = w._queueHooks(t, "fx")).unqueued && (r.unqueued = 0, a = r.empty.fire, r.empty.fire = function() {
                        r.unqueued || a()
                    }), r.unqueued++, d.always(function() {
                        d.always(function() {
                            r.unqueued--,
                            w.queue(t, "fx").length || r.empty.fire()
                        })
                    })), e) if (s = e[i], ie.test(s)) {
                        if (delete e[i], o = o || "toggle" === s, s === (m ? "hide": "show")) {
                            if ("show" !== s || !g || void 0 === g[i]) continue;
                            m = !0
                        }
                        f[i] = g && g[i] || w.style(t, i)
                    }
                    if ((l = !w.isEmptyObject(e)) || !w.isEmptyObject(f)) for (i in u && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = g && g.display) && (c = Q.get(t, "display")), "none" === (h = w.css(t, "display")) && (c ? h = c: (lt([t], !0), c = t.style.display || c, h = w.css(t, "display"), lt([t]))), ("inline" === h || "inline-block" === h && null != c) && "none" === w.css(t, "float") && (l || (d.done(function() {
                        p.display = c
                    }), null == c && (h = p.display, c = "none" === h ? "": h)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function() {
                        p.overflow = n.overflow[0],
                            p.overflowX = n.overflow[1],
                            p.overflowY = n.overflow[2]
                    })), l = !1, f) l || (g ? "hidden" in g && (m = g.hidden) : g = Q.access(t, "fxshow", {
                        display: c
                    }), o && (g.hidden = !m), m && lt([t], !0), d.done(function() {
                        for (i in m || lt([t]), Q.remove(t, "fxshow"), f) w.style(t, i, f[i])
                    })),
                        l = le(m ? g[i] : 0, i, d),
                    i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0))
                }],
                prefilter: function(t, e) {
                    e ? ce.prefilters.unshift(t) : ce.prefilters.push(t)
                }
            }),
                w.speed = function(t, e, n) {
                    var i = t && "object" == typeof t ? w.extend({},
                        t) : {
                        complete: n || !n && e || m(t) && t,
                        duration: t,
                        easing: n && e || e && !m(e) && e
                    };
                    return w.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in w.fx.speeds ? i.duration = w.fx.speeds[i.duration] : i.duration = w.fx.speeds._default),
                    null != i.queue && !0 !== i.queue || (i.queue = "fx"),
                        i.old = i.complete,
                        i.complete = function() {
                            m(i.old) && i.old.call(this),
                            i.queue && w.dequeue(this, i.queue)
                        },
                        i
                },
                w.fn.extend({
                    fadeTo: function(t, e, n, i) {
                        return this.filter(st).css("opacity", 0).show().end().animate({
                                opacity: e
                            },
                            t, n, i)
                    },
                    animate: function(t, e, n, i) {
                        var s = w.isEmptyObject(t),
                            o = w.speed(e, n, i),
                            r = function() {
                                var e = ce(this, w.extend({},
                                    t), o); (s || Q.get(this, "finish")) && e.stop(!0)
                            };
                        return r.finish = r,
                            s || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
                    },
                    stop: function(t, e, n) {
                        var i = function(t) {
                            var e = t.stop;
                            delete t.stop,
                                e(n)
                        };
                        return "string" != typeof t && (n = e, e = t, t = void 0),
                        e && !1 !== t && this.queue(t || "fx", []),
                            this.each(function() {
                                var e = !0,
                                    s = null != t && t + "queueHooks",
                                    o = w.timers,
                                    r = Q.get(this);
                                if (s) r[s] && r[s].stop && i(r[s]);
                                else for (s in r) r[s] && r[s].stop && se.test(s) && i(r[s]);
                                for (s = o.length; s--;) o[s].elem !== this || null != t && o[s].queue !== t || (o[s].anim.stop(n), e = !1, o.splice(s, 1)); ! e && n || w.dequeue(this, t)
                            })
                    },
                    finish: function(t) {
                        return ! 1 !== t && (t = t || "fx"),
                            this.each(function() {
                                var e, n = Q.get(this),
                                    i = n[t + "queue"],
                                    s = n[t + "queueHooks"],
                                    o = w.timers,
                                    r = i ? i.length: 0;
                                for (n.finish = !0, w.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                                for (e = 0; e < r; e++) i[e] && i[e].finish && i[e].finish.call(this);
                                delete n.finish
                            })
                    }
                }),
                w.each(["toggle", "show", "hide"],
                    function(t, e) {
                        var n = w.fn[e];
                        w.fn[e] = function(t, i, s) {
                            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(ae(e, !0), t, i, s)
                        }
                    }),
                w.each({
                        slideDown: ae("show"),
                        slideUp: ae("hide"),
                        slideToggle: ae("toggle"),
                        fadeIn: {
                            opacity: "show"
                        },
                        fadeOut: {
                            opacity: "hide"
                        },
                        fadeToggle: {
                            opacity: "toggle"
                        }
                    },
                    function(t, e) {
                        w.fn[t] = function(t, n, i) {
                            return this.animate(e, t, n, i)
                        }
                    }),
                w.timers = [],
                w.fx.tick = function() {
                    var t, e = 0,
                        n = w.timers;
                    for (Jt = Date.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
                    n.length || w.fx.stop(),
                        Jt = void 0
                },
                w.fx.timer = function(t) {
                    w.timers.push(t),
                        w.fx.start()
                },
                w.fx.interval = 13,
                w.fx.start = function() {
                    te || (te = !0, oe())
                },
                w.fx.stop = function() {
                    te = null
                },
                w.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                },
                w.fn.delay = function(e, n) {
                    return e = w.fx && w.fx.speeds[e] || e,
                        n = n || "fx",
                        this.queue(n,
                            function(n, i) {
                                var s = t.setTimeout(n, e);
                                i.stop = function() {
                                    t.clearTimeout(s)
                                }
                            })
                },
                ee = i.createElement("input"),
                ne = i.createElement("select").appendChild(i.createElement("option")),
                ee.type = "checkbox",
                p.checkOn = "" !== ee.value,
                p.optSelected = ne.selected,
                (ee = i.createElement("input")).value = "t",
                ee.type = "radio",
                p.radioValue = "t" === ee.value;
            var he, ue = w.expr.attrHandle;
            w.fn.extend({
                attr: function(t, e) {
                    return F(this, w.attr, t, e, arguments.length > 1)
                },
                removeAttr: function(t) {
                    return this.each(function() {
                        w.removeAttr(this, t)
                    })
                }
            }),
                w.extend({
                    attr: function(t, e, n) {
                        var i, s, o = t.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? w.prop(t, e, n) : (1 === o && w.isXMLDoc(t) || (s = w.attrHooks[e.toLowerCase()] || (w.expr.match.bool.test(e) ? he: void 0)), void 0 !== n ? null === n ? void w.removeAttr(t, e) : s && "set" in s && void 0 !== (i = s.set(t, n, e)) ? i: (t.setAttribute(e, n + ""), n) : s && "get" in s && null !== (i = s.get(t, e)) ? i: null == (i = w.find.attr(t, e)) ? void 0 : i)
                    },
                    attrHooks: {
                        type: {
                            set: function(t, e) {
                                if (!p.radioValue && "radio" === e && E(t, "input")) {
                                    var n = t.value;
                                    return t.setAttribute("type", e),
                                    n && (t.value = n),
                                        e
                                }
                            }
                        }
                    },
                    removeAttr: function(t, e) {
                        var n, i = 0,
                            s = e && e.match(j);
                        if (s && 1 === t.nodeType) for (; n = s[i++];) t.removeAttribute(n)
                    }
                }),
                he = {
                    set: function(t, e, n) {
                        return ! 1 === e ? w.removeAttr(t, n) : t.setAttribute(n, n),
                            n
                    }
                },
                w.each(w.expr.match.bool.source.match(/\w+/g),
                    function(t, e) {
                        var n = ue[e] || w.find.attr;
                        ue[e] = function(t, e, i) {
                            var s, o, r = e.toLowerCase();
                            return i || (o = ue[r], ue[r] = s, s = null != n(t, e, i) ? r: null, ue[r] = o),
                                s
                        }
                    });
            var de = /^(?:input|select|textarea|button)$/i,
                fe = /^(?:a|area)$/i;
            function pe(t) {
                return (t.match(j) || []).join(" ")
            }
            function me(t) {
                return t.getAttribute && t.getAttribute("class") || ""
            }
            function ge(t) {
                return Array.isArray(t) ? t: "string" == typeof t && t.match(j) || []
            }
            w.fn.extend({
                prop: function(t, e) {
                    return F(this, w.prop, t, e, arguments.length > 1)
                },
                removeProp: function(t) {
                    return this.each(function() {
                        delete this[w.propFix[t] || t]
                    })
                }
            }),
                w.extend({
                    prop: function(t, e, n) {
                        var i, s, o = t.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(t) || (e = w.propFix[e] || e, s = w.propHooks[e]),
                            void 0 !== n ? s && "set" in s && void 0 !== (i = s.set(t, n, e)) ? i: t[e] = n: s && "get" in s && null !== (i = s.get(t, e)) ? i: t[e]
                    },
                    propHooks: {
                        tabIndex: {
                            get: function(t) {
                                var e = w.find.attr(t, "tabindex");
                                return e ? parseInt(e, 10) : de.test(t.nodeName) || fe.test(t.nodeName) && t.href ? 0 : -1
                            }
                        }
                    },
                    propFix: {
                        for: "htmlFor",
                        class: "className"
                    }
                }),
            p.optSelected || (w.propHooks.selected = {
                get: function(t) {
                    var e = t.parentNode;
                    return e && e.parentNode && e.parentNode.selectedIndex,
                        null
                },
                set: function(t) {
                    var e = t.parentNode;
                    e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
                }
            }),
                w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
                    function() {
                        w.propFix[this.toLowerCase()] = this
                    }),
                w.fn.extend({
                    addClass: function(t) {
                        var e, n, i, s, o, r, a, l = 0;
                        if (m(t)) return this.each(function(e) {
                            w(this).addClass(t.call(this, e, me(this)))
                        });
                        if ((e = ge(t)).length) for (; n = this[l++];) if (s = me(n), i = 1 === n.nodeType && " " + pe(s) + " ") {
                            for (r = 0; o = e[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            s !== (a = pe(i)) && n.setAttribute("class", a)
                        }
                        return this
                    },
                    removeClass: function(t) {
                        var e, n, i, s, o, r, a, l = 0;
                        if (m(t)) return this.each(function(e) {
                            w(this).removeClass(t.call(this, e, me(this)))
                        });
                        if (!arguments.length) return this.attr("class", "");
                        if ((e = ge(t)).length) for (; n = this[l++];) if (s = me(n), i = 1 === n.nodeType && " " + pe(s) + " ") {
                            for (r = 0; o = e[r++];) for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                            s !== (a = pe(i)) && n.setAttribute("class", a)
                        }
                        return this
                    },
                    toggleClass: function(t, e) {
                        var n = typeof t,
                            i = "string" === n || Array.isArray(t);
                        return "boolean" == typeof e && i ? e ? this.addClass(t) : this.removeClass(t) : m(t) ? this.each(function(n) {
                            w(this).toggleClass(t.call(this, n, me(this), e), e)
                        }) : this.each(function() {
                            var e, s, o, r;
                            if (i) for (s = 0, o = w(this), r = ge(t); e = r[s++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                            else void 0 !== t && "boolean" !== n || ((e = me(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "": Q.get(this, "__className__") || ""))
                        })
                    },
                    hasClass: function(t) {
                        var e, n, i = 0;
                        for (e = " " + t + " "; n = this[i++];) if (1 === n.nodeType && (" " + pe(me(n)) + " ").indexOf(e) > -1) return ! 0;
                        return ! 1
                    }
                });
            var ve = /\r/g;
            w.fn.extend({
                val: function(t) {
                    var e, n, i, s = this[0];
                    return arguments.length ? (i = m(t), this.each(function(n) {
                        var s;
                        1 === this.nodeType && (null == (s = i ? t.call(this, n, w(this).val()) : t) ? s = "": "number" == typeof s ? s += "": Array.isArray(s) && (s = w.map(s,
                            function(t) {
                                return null == t ? "": t + ""
                            })), (e = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s))
                    })) : s ? (e = w.valHooks[s.type] || w.valHooks[s.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(s, "value")) ? n: "string" == typeof(n = s.value) ? n.replace(ve, "") : null == n ? "": n: void 0
                }
            }),
                w.extend({
                    valHooks: {
                        option: {
                            get: function(t) {
                                var e = w.find.attr(t, "value");
                                return null != e ? e: pe(w.text(t))
                            }
                        },
                        select: {
                            get: function(t) {
                                var e, n, i, s = t.options,
                                    o = t.selectedIndex,
                                    r = "select-one" === t.type,
                                    a = r ? null: [],
                                    l = r ? o + 1 : s.length;
                                for (i = o < 0 ? l: r ? o: 0; i < l; i++) if (((n = s[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !E(n.parentNode, "optgroup"))) {
                                    if (e = w(n).val(), r) return e;
                                    a.push(e)
                                }
                                return a
                            },
                            set: function(t, e) {
                                for (var n, i, s = t.options,
                                         o = w.makeArray(e), r = s.length; r--;)((i = s[r]).selected = w.inArray(w.valHooks.option.get(i), o) > -1) && (n = !0);
                                return n || (t.selectedIndex = -1),
                                    o
                            }
                        }
                    }
                }),
                w.each(["radio", "checkbox"],
                    function() {
                        w.valHooks[this] = {
                            set: function(t, e) {
                                if (Array.isArray(e)) return t.checked = w.inArray(w(t).val(), e) > -1
                            }
                        },
                        p.checkOn || (w.valHooks[this].get = function(t) {
                            return null === t.getAttribute("value") ? "on": t.value
                        })
                    }),
                p.focusin = "onfocusin" in t;
            var ye = /^(?:focusinfocus|focusoutblur)$/,
                be = function(t) {
                    t.stopPropagation()
                };
            w.extend(w.event, {
                trigger: function(e, n, s, o) {
                    var r, a, l, c, h, d, f, p, v = [s || i],
                        y = u.call(e, "type") ? e.type: e,
                        b = u.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (a = p = l = s = s || i, 3 !== s.nodeType && 8 !== s.nodeType && !ye.test(y + w.event.triggered) && (y.indexOf(".") > -1 && (y = (b = y.split(".")).shift(), b.sort()), h = y.indexOf(":") < 0 && "on" + y, (e = e[w.expando] ? e: new w.Event(y, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = b.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = s), n = null == n ? [e] : w.makeArray(n, [e]), f = w.event.special[y] || {},
                    o || !f.trigger || !1 !== f.trigger.apply(s, n))) {
                        if (!o && !f.noBubble && !g(s)) {
                            for (c = f.delegateType || y, ye.test(c + y) || (a = a.parentNode); a; a = a.parentNode) v.push(a),
                                l = a;
                            l === (s.ownerDocument || i) && v.push(l.defaultView || l.parentWindow || t)
                        }
                        for (r = 0; (a = v[r++]) && !e.isPropagationStopped();) p = a,
                            e.type = r > 1 ? c: f.bindType || y,
                        (d = (Q.get(a, "events") || {})[e.type] && Q.get(a, "handle")) && d.apply(a, n),
                        (d = h && a[h]) && d.apply && G(a) && (e.result = d.apply(a, n), !1 === e.result && e.preventDefault());
                        return e.type = y,
                        o || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(v.pop(), n) || !G(s) || h && m(s[y]) && !g(s) && ((l = s[h]) && (s[h] = null), w.event.triggered = y, e.isPropagationStopped() && p.addEventListener(y, be), s[y](), e.isPropagationStopped() && p.removeEventListener(y, be), w.event.triggered = void 0, l && (s[h] = l)),
                            e.result
                    }
                },
                simulate: function(t, e, n) {
                    var i = w.extend(new w.Event, n, {
                        type: t,
                        isSimulated: !0
                    });
                    w.event.trigger(i, null, e)
                }
            }),
                w.fn.extend({
                    trigger: function(t, e) {
                        return this.each(function() {
                            w.event.trigger(t, e, this)
                        })
                    },
                    triggerHandler: function(t, e) {
                        var n = this[0];
                        if (n) return w.event.trigger(t, e, n, !0)
                    }
                }),
            p.focusin || w.each({
                    focus: "focusin",
                    blur: "focusout"
                },
                function(t, e) {
                    var n = function(t) {
                        w.event.simulate(e, t.target, w.event.fix(t))
                    };
                    w.event.special[e] = {
                        setup: function() {
                            var i = this.ownerDocument || this,
                                s = Q.access(i, e);
                            s || i.addEventListener(t, n, !0),
                                Q.access(i, e, (s || 0) + 1)
                        },
                        teardown: function() {
                            var i = this.ownerDocument || this,
                                s = Q.access(i, e) - 1;
                            s ? Q.access(i, e, s) : (i.removeEventListener(t, n, !0), Q.remove(i, e))
                        }
                    }
                });
            var _e = t.location,
                we = Date.now(),
                De = /\?/;
            w.parseXML = function(e) {
                var n;
                if (!e || "string" != typeof e) return null;
                try {
                    n = (new t.DOMParser).parseFromString(e, "text/xml")
                } catch(t) {
                    n = void 0
                }
                return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + e),
                    n
            };
            var ke = /\[\]$/,
                Ce = /\r?\n/g,
                xe = /^(?:submit|button|image|reset|file)$/i,
                Te = /^(?:input|select|textarea|keygen)/i;
            function Se(t, e, n, i) {
                var s;
                if (Array.isArray(e)) w.each(e,
                    function(e, s) {
                        n || ke.test(t) ? i(t, s) : Se(t + "[" + ("object" == typeof s && null != s ? e: "") + "]", s, n, i)
                    });
                else if (n || "object" !== b(e)) i(t, e);
                else for (s in e) Se(t + "[" + s + "]", e[s], n, i)
            }
            w.param = function(t, e) {
                var n, i = [],
                    s = function(t, e) {
                        var n = m(e) ? e() : e;
                        i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "": n)
                    };
                if (Array.isArray(t) || t.jquery && !w.isPlainObject(t)) w.each(t,
                    function() {
                        s(this.name, this.value)
                    });
                else for (n in t) Se(n, t[n], e, s);
                return i.join("&")
            },
                w.fn.extend({
                    serialize: function() {
                        return w.param(this.serializeArray())
                    },
                    serializeArray: function() {
                        return this.map(function() {
                            var t = w.prop(this, "elements");
                            return t ? w.makeArray(t) : this
                        }).filter(function() {
                            var t = this.type;
                            return this.name && !w(this).is(":disabled") && Te.test(this.nodeName) && !xe.test(t) && (this.checked || !ct.test(t))
                        }).map(function(t, e) {
                            var n = w(this).val();
                            return null == n ? null: Array.isArray(n) ? w.map(n,
                                function(t) {
                                    return {
                                        name: e.name,
                                        value: t.replace(Ce, "\r\n")
                                    }
                                }) : {
                                name: e.name,
                                value: n.replace(Ce, "\r\n")
                            }
                        }).get()
                    }
                });
            var Ee = /%20/g,
                Me = /#.*$/,
                Ae = /([?&])_=[^&]*/,
                Oe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Ie = /^(?:GET|HEAD)$/,
                Ne = /^\/\//,
                Pe = {},
                Le = {},
                je = "*/".concat("*"),
                Ye = i.createElement("a");
            function He(t) {
                return function(e, n) {
                    "string" != typeof e && (n = e, e = "*");
                    var i, s = 0,
                        o = e.toLowerCase().match(j) || [];
                    if (m(n)) for (; i = o[s++];)"+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
                }
            }
            function $e(t, e, n, i) {
                var s = {},
                    o = t === Le;
                function r(a) {
                    var l;
                    return s[a] = !0,
                        w.each(t[a] || [],
                            function(t, a) {
                                var c = a(e, n, i);
                                return "string" != typeof c || o || s[c] ? o ? !(l = c) : void 0 : (e.dataTypes.unshift(c), r(c), !1)
                            }),
                        l
                }
                return r(e.dataTypes[0]) || !s["*"] && r("*")
            }
            function Re(t, e) {
                var n, i, s = w.ajaxSettings.flatOptions || {};
                for (n in e) void 0 !== e[n] && ((s[n] ? t: i || (i = {}))[n] = e[n]);
                return i && w.extend(!0, t, i),
                    t
            }
            Ye.href = _e.href,
                w.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: _e.href,
                        type: "GET",
                        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(_e.protocol),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": je,
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript"
                        },
                        contents: {
                            xml: /\bxml\b/,
                            html: /\bhtml/,
                            json: /\bjson\b/
                        },
                        responseFields: {
                            xml: "responseXML",
                            text: "responseText",
                            json: "responseJSON"
                        },
                        converters: {
                            "* text": String,
                            "text html": !0,
                            "text json": JSON.parse,
                            "text xml": w.parseXML
                        },
                        flatOptions: {
                            url: !0,
                            context: !0
                        }
                    },
                    ajaxSetup: function(t, e) {
                        return e ? Re(Re(t, w.ajaxSettings), e) : Re(w.ajaxSettings, t)
                    },
                    ajaxPrefilter: He(Pe),
                    ajaxTransport: He(Le),
                    ajax: function(e, n) {
                        "object" == typeof e && (n = e, e = void 0),
                            n = n || {};
                        var s, o, r, a, l, c, h, u, d, f, p = w.ajaxSetup({},
                            n),
                            m = p.context || p,
                            g = p.context && (m.nodeType || m.jquery) ? w(m) : w.event,
                            v = w.Deferred(),
                            y = w.Callbacks("once memory"),
                            b = p.statusCode || {},
                            _ = {},
                            D = {},
                            k = "canceled",
                            C = {
                                readyState: 0,
                                getResponseHeader: function(t) {
                                    var e;
                                    if (h) {
                                        if (!a) for (a = {}; e = Oe.exec(r);) a[e[1].toLowerCase()] = e[2];
                                        e = a[t.toLowerCase()]
                                    }
                                    return null == e ? null: e
                                },
                                getAllResponseHeaders: function() {
                                    return h ? r: null
                                },
                                setRequestHeader: function(t, e) {
                                    return null == h && (t = D[t.toLowerCase()] = D[t.toLowerCase()] || t, _[t] = e),
                                        this
                                },
                                overrideMimeType: function(t) {
                                    return null == h && (p.mimeType = t),
                                        this
                                },
                                statusCode: function(t) {
                                    var e;
                                    if (t) if (h) C.always(t[C.status]);
                                    else for (e in t) b[e] = [b[e], t[e]];
                                    return this
                                },
                                abort: function(t) {
                                    var e = t || k;
                                    return s && s.abort(e),
                                        x(0, e),
                                        this
                                }
                            };
                        if (v.promise(C), p.url = ((e || p.url || _e.href) + "").replace(Ne, _e.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(j) || [""], null == p.crossDomain) {
                            c = i.createElement("a");
                            try {
                                c.href = p.url,
                                    c.href = c.href,
                                    p.crossDomain = Ye.protocol + "//" + Ye.host != c.protocol + "//" + c.host
                            } catch(t) {
                                p.crossDomain = !0
                            }
                        }
                        if (p.data && p.processData && "string" != typeof p.data && (p.data = w.param(p.data, p.traditional)), $e(Pe, p, n, C), h) return C;
                        for (d in (u = w.event && p.global) && 0 == w.active++&&w.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Ie.test(p.type), o = p.url.replace(Me, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Ee, "+")) : (f = p.url.slice(o.length), p.data && (p.processData || "string" == typeof p.data) && (o += (De.test(o) ? "&": "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(Ae, "$1"), f = (De.test(o) ? "&": "?") + "_=" + we+++f), p.url = o + f), p.ifModified && (w.lastModified[o] && C.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && C.setRequestHeader("If-None-Match", w.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + je + "; q=0.01": "") : p.accepts["*"]), p.headers) C.setRequestHeader(d, p.headers[d]);
                        if (p.beforeSend && (!1 === p.beforeSend.call(m, C, p) || h)) return C.abort();
                        if (k = "abort", y.add(p.complete), C.done(p.success), C.fail(p.error), s = $e(Le, p, n, C)) {
                            if (C.readyState = 1, u && g.trigger("ajaxSend", [C, p]), h) return C;
                            p.async && p.timeout > 0 && (l = t.setTimeout(function() {
                                    C.abort("timeout")
                                },
                                p.timeout));
                            try {
                                h = !1,
                                    s.send(_, x)
                            } catch(t) {
                                if (h) throw t;
                                x( - 1, t)
                            }
                        } else x( - 1, "No Transport");
                        function x(e, n, i, a) {
                            var c, d, f, _, D, k = n;
                            h || (h = !0, l && t.clearTimeout(l), s = void 0, r = a || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, i && (_ = function(t, e, n) {
                                for (var i, s, o, r, a = t.contents,
                                         l = t.dataTypes;
                                     "*" === l[0];) l.shift(),
                                void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                                if (i) for (s in a) if (a[s] && a[s].test(i)) {
                                    l.unshift(s);
                                    break
                                }
                                if (l[0] in n) o = l[0];
                                else {
                                    for (s in n) {
                                        if (!l[0] || t.converters[s + " " + l[0]]) {
                                            o = s;
                                            break
                                        }
                                        r || (r = s)
                                    }
                                    o = o || r
                                }
                                if (o) return o !== l[0] && l.unshift(o),
                                    n[o]
                            } (p, C, i)), _ = function(t, e, n, i) {
                                var s, o, r, a, l, c = {},
                                    h = t.dataTypes.slice();
                                if (h[1]) for (r in t.converters) c[r.toLowerCase()] = t.converters[r];
                                for (o = h.shift(); o;) if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = h.shift()) if ("*" === o) o = l;
                                else if ("*" !== l && l !== o) {
                                    if (! (r = c[l + " " + o] || c["* " + o])) for (s in c) if ((a = s.split(" "))[1] === o && (r = c[l + " " + a[0]] || c["* " + a[0]])) { ! 0 === r ? r = c[s] : !0 !== c[s] && (o = a[0], h.unshift(a[1]));
                                        break
                                    }
                                    if (!0 !== r) if (r && t.throws) e = r(e);
                                    else try {
                                            e = r(e)
                                        } catch(t) {
                                            return {
                                                state: "parsererror",
                                                error: r ? t: "No conversion from " + l + " to " + o
                                            }
                                        }
                                }
                                return {
                                    state: "success",
                                    data: e
                                }
                            } (p, _, C, c), c ? (p.ifModified && ((D = C.getResponseHeader("Last-Modified")) && (w.lastModified[o] = D), (D = C.getResponseHeader("etag")) && (w.etag[o] = D)), 204 === e || "HEAD" === p.type ? k = "nocontent": 304 === e ? k = "notmodified": (k = _.state, d = _.data, c = !(f = _.error))) : (f = k, !e && k || (k = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (n || k) + "", c ? v.resolveWith(m, [d, k, C]) : v.rejectWith(m, [C, k, f]), C.statusCode(b), b = void 0, u && g.trigger(c ? "ajaxSuccess": "ajaxError", [C, p, c ? d: f]), y.fireWith(m, [C, k]), u && (g.trigger("ajaxComplete", [C, p]), --w.active || w.event.trigger("ajaxStop")))
                        }
                        return C
                    },
                    getJSON: function(t, e, n) {
                        return w.get(t, e, n, "json")
                    },
                    getScript: function(t, e) {
                        return w.get(t, void 0, e, "script")
                    }
                }),
                w.each(["get", "post"],
                    function(t, e) {
                        w[e] = function(t, n, i, s) {
                            return m(n) && (s = s || i, i = n, n = void 0),
                                w.ajax(w.extend({
                                        url: t,
                                        type: e,
                                        dataType: s,
                                        data: n,
                                        success: i
                                    },
                                    w.isPlainObject(t) && t))
                        }
                    }),
                w._evalUrl = function(t) {
                    return w.ajax({
                        url: t,
                        type: "GET",
                        dataType: "script",
                        cache: !0,
                        async: !1,
                        global: !1,
                        throws: !0
                    })
                },
                w.fn.extend({
                    wrapAll: function(t) {
                        var e;
                        return this[0] && (m(t) && (t = t.call(this[0])), e = w(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                            for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                            return t
                        }).append(this)),
                            this
                    },
                    wrapInner: function(t) {
                        return m(t) ? this.each(function(e) {
                            w(this).wrapInner(t.call(this, e))
                        }) : this.each(function() {
                            var e = w(this),
                                n = e.contents();
                            n.length ? n.wrapAll(t) : e.append(t)
                        })
                    },
                    wrap: function(t) {
                        var e = m(t);
                        return this.each(function(n) {
                            w(this).wrapAll(e ? t.call(this, n) : t)
                        })
                    },
                    unwrap: function(t) {
                        return this.parent(t).not("body").each(function() {
                            w(this).replaceWith(this.childNodes)
                        }),
                            this
                    }
                }),
                w.expr.pseudos.hidden = function(t) {
                    return ! w.expr.pseudos.visible(t)
                },
                w.expr.pseudos.visible = function(t) {
                    return !! (t.offsetWidth || t.offsetHeight || t.getClientRects().length)
                },
                w.ajaxSettings.xhr = function() {
                    try {
                        return new t.XMLHttpRequest
                    } catch(t) {}
                };
            var We = {
                    0 : 200,
                    1223 : 204
                },
                Ue = w.ajaxSettings.xhr();
            p.cors = !!Ue && "withCredentials" in Ue,
                p.ajax = Ue = !!Ue,
                w.ajaxTransport(function(e) {
                    var n, i;
                    if (p.cors || Ue && !e.crossDomain) return {
                        send: function(s, o) {
                            var r, a = e.xhr();
                            if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (r in e.xhrFields) a[r] = e.xhrFields[r];
                            for (r in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest"), s) a.setRequestHeader(r, s[r]);
                            n = function(t) {
                                return function() {
                                    n && (n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(We[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                            binary: a.response
                                        }: {
                                            text: a.responseText
                                        },
                                        a.getAllResponseHeaders()))
                                }
                            },
                                a.onload = n(),
                                i = a.onerror = a.ontimeout = n("error"),
                                void 0 !== a.onabort ? a.onabort = i: a.onreadystatechange = function() {
                                    4 === a.readyState && t.setTimeout(function() {
                                        n && i()
                                    })
                                },
                                n = n("abort");
                            try {
                                a.send(e.hasContent && e.data || null)
                            } catch(t) {
                                if (n) throw t
                            }
                        },
                        abort: function() {
                            n && n()
                        }
                    }
                }),
                w.ajaxPrefilter(function(t) {
                    t.crossDomain && (t.contents.script = !1)
                }),
                w.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                    },
                    contents: {
                        script: /\b(?:java|ecma)script\b/
                    },
                    converters: {
                        "text script": function(t) {
                            return w.globalEval(t),
                                t
                        }
                    }
                }),
                w.ajaxPrefilter("script",
                    function(t) {
                        void 0 === t.cache && (t.cache = !1),
                        t.crossDomain && (t.type = "GET")
                    }),
                w.ajaxTransport("script",
                    function(t) {
                        var e, n;
                        if (t.crossDomain) return {
                            send: function(s, o) {
                                e = w("<script>").prop({
                                    charset: t.scriptCharset,
                                    src: t.url
                                }).on("load error", n = function(t) {
                                    e.remove(),
                                        n = null,
                                    t && o("error" === t.type ? 404 : 200, t.type)
                                }),
                                    i.head.appendChild(e[0])
                            },
                            abort: function() {
                                n && n()
                            }
                        }
                    });
            var Fe, qe = [],
                Ve = /(=)\?(?=&|$)|\?\?/;
            w.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var t = qe.pop() || w.expando + "_" + we++;
                    return this[t] = !0,
                        t
                }
            }),
                w.ajaxPrefilter("json jsonp",
                    function(e, n, i) {
                        var s, o, r, a = !1 !== e.jsonp && (Ve.test(e.url) ? "url": "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ve.test(e.data) && "data");
                        if (a || "jsonp" === e.dataTypes[0]) return s = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                            a ? e[a] = e[a].replace(Ve, "$1" + s) : !1 !== e.jsonp && (e.url += (De.test(e.url) ? "&": "?") + e.jsonp + "=" + s),
                            e.converters["script json"] = function() {
                                return r || w.error(s + " was not called"),
                                    r[0]
                            },
                            e.dataTypes[0] = "json",
                            o = t[s],
                            t[s] = function() {
                                r = arguments
                            },
                            i.always(function() {
                                void 0 === o ? w(t).removeProp(s) : t[s] = o,
                                e[s] && (e.jsonpCallback = n.jsonpCallback, qe.push(s)),
                                r && m(o) && o(r[0]),
                                    r = o = void 0
                            }),
                            "script"
                    }),
                p.createHTMLDocument = ((Fe = i.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Fe.childNodes.length),
                w.parseHTML = function(t, e, n) {
                    return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (p.createHTMLDocument ? ((s = (e = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, e.head.appendChild(s)) : e = i), o = M.exec(t), r = !n && [], o ? [e.createElement(o[1])] : (o = yt([t], e, r), r && r.length && w(r).remove(), w.merge([], o.childNodes)));
                    var s, o, r
                }, w.fn.load = function(t, e, n) {
                var i, s, o, r = this,
                    a = t.indexOf(" ");
                return a > -1 && (i = pe(t.slice(a)), t = t.slice(0, a)),
                    m(e) ? (n = e, e = void 0) : e && "object" == typeof e && (s = "POST"),
                r.length > 0 && w.ajax({
                    url: t,
                    type: s || "GET",
                    dataType: "html",
                    data: e
                }).done(function(t) {
                    o = arguments,
                        r.html(i ? w("<div>").append(w.parseHTML(t)).find(i) : t)
                }).always(n &&
                    function(t, e) {
                        r.each(function() {
                            n.apply(this, o || [t.responseText, e, t])
                        })
                    }),
                    this
            },
                w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
                    function(t, e) {
                        w.fn[e] = function(t) {
                            return this.on(e, t)
                        }
                    }),
                w.expr.pseudos.animated = function(t) {
                    return w.grep(w.timers,
                        function(e) {
                            return t === e.elem
                        }).length
                },
                w.offset = {
                    setOffset: function(t, e, n) {
                        var i, s, o, r, a, l, c = w.css(t, "position"),
                            h = w(t),
                            u = {};
                        "static" === c && (t.style.position = "relative"),
                            a = h.offset(),
                            o = w.css(t, "top"),
                            l = w.css(t, "left"),
                            ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (r = (i = h.position()).top, s = i.left) : (r = parseFloat(o) || 0, s = parseFloat(l) || 0),
                        m(e) && (e = e.call(t, n, w.extend({},
                            a))),
                        null != e.top && (u.top = e.top - a.top + r),
                        null != e.left && (u.left = e.left - a.left + s),
                            "using" in e ? e.using.call(t, u) : h.css(u)
                    }
                },
                w.fn.extend({
                    offset: function(t) {
                        if (arguments.length) return void 0 === t ? this: this.each(function(e) {
                            w.offset.setOffset(this, t, e)
                        });
                        var e, n, i = this[0];
                        return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                            top: e.top + n.pageYOffset,
                            left: e.left + n.pageXOffset
                        }) : {
                            top: 0,
                            left: 0
                        }: void 0
                    },
                    position: function() {
                        if (this[0]) {
                            var t, e, n, i = this[0],
                                s = {
                                    top: 0,
                                    left: 0
                                };
                            if ("fixed" === w.css(i, "position")) e = i.getBoundingClientRect();
                            else {
                                for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === w.css(t, "position");) t = t.parentNode;
                                t && t !== i && 1 === t.nodeType && ((s = w(t).offset()).top += w.css(t, "borderTopWidth", !0), s.left += w.css(t, "borderLeftWidth", !0))
                            }
                            return {
                                top: e.top - s.top - w.css(i, "marginTop", !0),
                                left: e.left - s.left - w.css(i, "marginLeft", !0)
                            }
                        }
                    },
                    offsetParent: function() {
                        return this.map(function() {
                            for (var t = this.offsetParent; t && "static" === w.css(t, "position");) t = t.offsetParent;
                            return t || bt
                        })
                    }
                }),
                w.each({
                        scrollLeft: "pageXOffset",
                        scrollTop: "pageYOffset"
                    },
                    function(t, e) {
                        var n = "pageYOffset" === e;
                        w.fn[t] = function(i) {
                            return F(this,
                                function(t, i, s) {
                                    var o;
                                    if (g(t) ? o = t: 9 === t.nodeType && (o = t.defaultView), void 0 === s) return o ? o[e] : t[i];
                                    o ? o.scrollTo(n ? o.pageXOffset: s, n ? s: o.pageYOffset) : t[i] = s
                                },
                                t, i, arguments.length)
                        }
                    }),
                w.each(["top", "left"],
                    function(t, e) {
                        w.cssHooks[e] = Wt(p.pixelPosition,
                            function(t, n) {
                                if (n) return n = Rt(t, e),
                                    Yt.test(n) ? w(t).position()[e] + "px": n
                            })
                    }),
                w.each({
                        Height: "height",
                        Width: "width"
                    },
                    function(t, e) {
                        w.each({
                                padding: "inner" + t,
                                content: e,
                                "": "outer" + t
                            },
                            function(n, i) {
                                w.fn[i] = function(s, o) {
                                    var r = arguments.length && (n || "boolean" != typeof s),
                                        a = n || (!0 === s || !0 === o ? "margin": "border");
                                    return F(this,
                                        function(e, n, s) {
                                            var o;
                                            return g(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === s ? w.css(e, n, a) : w.style(e, n, s, a)
                                        },
                                        e, r ? s: void 0, r)
                                }
                            })
                    }),
                w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
                    function(t, e) {
                        w.fn[e] = function(t, n) {
                            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
                        }
                    }),
                w.fn.extend({
                    hover: function(t, e) {
                        return this.mouseenter(t).mouseleave(e || t)
                    }
                }),
                w.fn.extend({
                    bind: function(t, e, n) {
                        return this.on(t, null, e, n)
                    },
                    unbind: function(t, e) {
                        return this.off(t, null, e)
                    },
                    delegate: function(t, e, n, i) {
                        return this.on(e, t, n, i)
                    },
                    undelegate: function(t, e, n) {
                        return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
                    }
                }),
                w.proxy = function(t, e) {
                    var n, i, s;
                    if ("string" == typeof e && (n = t[e], e = t, t = n), m(t)) return i = o.call(arguments, 2),
                        (s = function() {
                            return t.apply(e || this, i.concat(o.call(arguments)))
                        }).guid = t.guid = t.guid || w.guid++,
                        s
                },
                w.holdReady = function(t) {
                    t ? w.readyWait++:w.ready(!0)
                },
                w.isArray = Array.isArray,
                w.parseJSON = JSON.parse,
                w.nodeName = E,
                w.isFunction = m,
                w.isWindow = g,
                w.camelCase = z,
                w.type = b,
                w.now = Date.now,
                w.isNumeric = function(t) {
                    var e = w.type(t);
                    return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
                },
            "function" == typeof define && define.amd && define("jquery", [],
                function() {
                    return w
                });
            var Be = t.jQuery,
                ze = t.$;
            return w.noConflict = function(e) {
                return t.$ === w && (t.$ = ze),
                e && t.jQuery === w && (t.jQuery = Be),
                    w
            },
            e || (t.jQuery = t.$ = w),
                w
        }),
    function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], e) : e((t = t || self).bootstrap = {},
            t.jQuery)
    } (this,
        function(t, e) {
            "use strict";
            function n(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1,
                        i.configurable = !0,
                    "value" in i && (i.writable = !0),
                        Object.defineProperty(t, i.key, i)
                }
            }
            function i(t, e, i) {
                return e && n(t.prototype, e),
                i && n(t, i),
                    t
            }
            function s(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))),
                        i.forEach(function(e) {
                            var i, s, o;
                            i = t,
                                s = e,
                                o = n[e],
                                s in i ? Object.defineProperty(i, s, {
                                    value: o,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : i[s] = o
                        })
                }
                return t
            }
            var o = "transitionend";
            function r(t) {
                var n = this,
                    i = !1;
                return e(this).one(a.TRANSITION_END,
                    function() {
                        i = !0
                    }),
                    setTimeout(function() {
                            i || a.triggerTransitionEnd(n)
                        },
                        t),
                    this
            }
            var a = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function(t) {
                    do {
                        t += ~~ (1e6 * Math.random())
                    } while ( document . getElementById ( t ));
                    return t
                },
                getSelectorFromElement: function(t) {
                    var e = t.getAttribute("data-target");
                    if (!e || "#" === e) {
                        var n = t.getAttribute("href");
                        e = n && "#" !== n ? n.trim() : ""
                    }
                    try {
                        return document.querySelector(e) ? e: null
                    } catch(t) {
                        return null
                    }
                },
                getTransitionDurationFromElement: function(t) {
                    if (!t) return 0;
                    var n = e(t).css("transition-duration"),
                        i = e(t).css("transition-delay"),
                        s = parseFloat(n),
                        o = parseFloat(i);
                    return s || o ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0
                },
                reflow: function(t) {
                    return t.offsetHeight
                },
                triggerTransitionEnd: function(t) {
                    e(t).trigger(o)
                },
                supportsTransitionEnd: function() {
                    return Boolean(o)
                },
                isElement: function(t) {
                    return (t[0] || t).nodeType
                },
                typeCheckConfig: function(t, e, n) {
                    for (var i in n) if (Object.prototype.hasOwnProperty.call(n, i)) {
                        var s = n[i],
                            o = e[i],
                            r = o && a.isElement(o) ? "element": (l = o, {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());
                        if (!new RegExp(s).test(r)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + r + '" but expected type "' + s + '".')
                    }
                    var l
                }, findShadowRoot: function(t) {
                    if (!document.documentElement.attachShadow) return null;
                    if ("function" == typeof t.getRootNode) {
                        var e = t.getRootNode();
                        return e instanceof ShadowRoot ? e: null
                    }
                    return t instanceof ShadowRoot ? t: t.parentNode ? a.findShadowRoot(t.parentNode) : null
                }
            }; (e = e && e.hasOwnProperty("default") ? e.
                    default:
                e).fn.emulateTransitionEnd = r,
                e.event.special[a.TRANSITION_END] = {
                    bindType: o,
                    delegateType: o,
                    handle: function(t) {
                        if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
                    }
                };
            var l = "alert",
                c = "bs.alert",
                h = "." + c,
                u = e.fn[l],
                d = {
                    CLOSE: "close" + h,
                    CLOSED: "closed" + h,
                    CLICK_DATA_API: "click" + h + ".data-api"
                },
                f = "alert",
                p = "fade",
                m = "show",
                g = function() {
                    function t(t) {
                        this._element = t
                    }
                    var n = t.prototype;
                    return n.close = function(t) {
                        var e = this._element;
                        t && (e = this._getRootElement(t)),
                        this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
                    },
                        n.dispose = function() {
                            e.removeData(this._element, c),
                                this._element = null
                        },
                        n._getRootElement = function(t) {
                            var n = a.getSelectorFromElement(t),
                                i = !1;
                            return n && (i = document.querySelector(n)),
                            i || (i = e(t).closest("." + f)[0]),
                                i
                        },
                        n._triggerCloseEvent = function(t) {
                            var n = e.Event(d.CLOSE);
                            return e(t).trigger(n),
                                n
                        },
                        n._removeElement = function(t) {
                            var n = this;
                            if (e(t).removeClass(m), e(t).hasClass(p)) {
                                var i = a.getTransitionDurationFromElement(t);
                                e(t).one(a.TRANSITION_END,
                                    function(e) {
                                        return n._destroyElement(t, e)
                                    }).emulateTransitionEnd(i)
                            } else this._destroyElement(t)
                        },
                        n._destroyElement = function(t) {
                            e(t).detach().trigger(d.CLOSED).remove()
                        },
                        t._jQueryInterface = function(n) {
                            return this.each(function() {
                                var i = e(this),
                                    s = i.data(c);
                                s || (s = new t(this), i.data(c, s)),
                                "close" === n && s[n](this)
                            })
                        },
                        t._handleDismiss = function(t) {
                            return function(e) {
                                e && e.preventDefault(),
                                    t.close(this)
                            }
                        },
                        i(t, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.3.1"
                            }
                        }]),
                        t
                } ();
            e(document).on(d.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g)),
                e.fn[l] = g._jQueryInterface,
                e.fn[l].Constructor = g,
                e.fn[l].noConflict = function() {
                    return e.fn[l] = u,
                        g._jQueryInterface
                };
            var v = "button",
                y = "bs.button",
                b = "." + y,
                _ = ".data-api",
                w = e.fn[v],
                D = "active",
                k = "btn",
                C = "focus",
                x = '[data-toggle^="button"]',
                T = '[data-toggle="buttons"]',
                S = 'input:not([type="hidden"])',
                E = ".active",
                M = ".btn",
                A = {
                    CLICK_DATA_API: "click" + b + _,
                    FOCUS_BLUR_DATA_API: "focus" + b + _ + " blur" + b + _
                },
                O = function() {
                    function t(t) {
                        this._element = t
                    }
                    var n = t.prototype;
                    return n.toggle = function() {
                        var t = !0,
                            n = !0,
                            i = e(this._element).closest(T)[0];
                        if (i) {
                            var s = this._element.querySelector(S);
                            if (s) {
                                if ("radio" === s.type) if (s.checked && this._element.classList.contains(D)) t = !1;
                                else {
                                    var o = i.querySelector(E);
                                    o && e(o).removeClass(D)
                                }
                                if (t) {
                                    if (s.hasAttribute("disabled") || i.hasAttribute("disabled") || s.classList.contains("disabled") || i.classList.contains("disabled")) return;
                                    s.checked = !this._element.classList.contains(D),
                                        e(s).trigger("change")
                                }
                                s.focus(),
                                    n = !1
                            }
                        }
                        n && this._element.setAttribute("aria-pressed", !this._element.classList.contains(D)),
                        t && e(this._element).toggleClass(D)
                    },
                        n.dispose = function() {
                            e.removeData(this._element, y),
                                this._element = null
                        },
                        t._jQueryInterface = function(n) {
                            return this.each(function() {
                                var i = e(this).data(y);
                                i || (i = new t(this), e(this).data(y, i)),
                                "toggle" === n && i[n]()
                            })
                        },
                        i(t, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.3.1"
                            }
                        }]),
                        t
                } ();
            e(document).on(A.CLICK_DATA_API, x,
                function(t) {
                    t.preventDefault();
                    var n = t.target;
                    e(n).hasClass(k) || (n = e(n).closest(M)),
                        O._jQueryInterface.call(e(n), "toggle")
                }).on(A.FOCUS_BLUR_DATA_API, x,
                function(t) {
                    var n = e(t.target).closest(M)[0];
                    e(n).toggleClass(C, /^focus(in)?$/.test(t.type))
                }),
                e.fn[v] = O._jQueryInterface,
                e.fn[v].Constructor = O,
                e.fn[v].noConflict = function() {
                    return e.fn[v] = w,
                        O._jQueryInterface
                };
            var I = "carousel",
                N = "bs.carousel",
                P = "." + N,
                L = ".data-api",
                j = e.fn[I],
                Y = {
                    interval: 5e3,
                    keyboard: !0,
                    slide: !1,
                    pause: "hover",
                    wrap: !0,
                    touch: !0
                },
                H = {
                    interval: "(number|boolean)",
                    keyboard: "boolean",
                    slide: "(boolean|string)",
                    pause: "(string|boolean)",
                    wrap: "boolean",
                    touch: "boolean"
                },
                $ = "next",
                R = "prev",
                W = "left",
                U = "right",
                F = {
                    SLIDE: "slide" + P,
                    SLID: "slid" + P,
                    KEYDOWN: "keydown" + P,
                    MOUSEENTER: "mouseenter" + P,
                    MOUSELEAVE: "mouseleave" + P,
                    TOUCHSTART: "touchstart" + P,
                    TOUCHMOVE: "touchmove" + P,
                    TOUCHEND: "touchend" + P,
                    POINTERDOWN: "pointerdown" + P,
                    POINTERUP: "pointerup" + P,
                    DRAG_START: "dragstart" + P,
                    LOAD_DATA_API: "load" + P + L,
                    CLICK_DATA_API: "click" + P + L
                },
                q = "carousel",
                V = "active",
                B = "slide",
                z = "carousel-item-right",
                G = "carousel-item-left",
                K = "carousel-item-next",
                Q = "carousel-item-prev",
                Z = "pointer-event",
                X = {
                    ACTIVE: ".active",
                    ACTIVE_ITEM: ".active.carousel-item",
                    ITEM: ".carousel-item",
                    ITEM_IMG: ".carousel-item img",
                    NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                    INDICATORS: ".carousel-indicators",
                    DATA_SLIDE: "[data-slide], [data-slide-to]",
                    DATA_RIDE: '[data-ride="carousel"]'
                },
                J = {
                    TOUCH: "touch",
                    PEN: "pen"
                },
                tt = function() {
                    function t(t, e) {
                        this._items = null,
                            this._interval = null,
                            this._activeElement = null,
                            this._isPaused = !1,
                            this._isSliding = !1,
                            this.touchTimeout = null,
                            this.touchStartX = 0,
                            this.touchDeltaX = 0,
                            this._config = this._getConfig(e),
                            this._element = t,
                            this._indicatorsElement = this._element.querySelector(X.INDICATORS),
                            this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0,
                            this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent),
                            this._addEventListeners()
                    }
                    var n = t.prototype;
                    return n.next = function() {
                        this._isSliding || this._slide($)
                    },
                        n.nextWhenVisible = function() { ! document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next()
                        },
                        n.prev = function() {
                            this._isSliding || this._slide(R)
                        },
                        n.pause = function(t) {
                            t || (this._isPaused = !0),
                            this._element.querySelector(X.NEXT_PREV) && (a.triggerTransitionEnd(this._element), this.cycle(!0)),
                                clearInterval(this._interval),
                                this._interval = null
                        },
                        n.cycle = function(t) {
                            t || (this._isPaused = !1),
                            this._interval && (clearInterval(this._interval), this._interval = null),
                            this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible: this.next).bind(this), this._config.interval))
                        },
                        n.to = function(t) {
                            var n = this;
                            this._activeElement = this._element.querySelector(X.ACTIVE_ITEM);
                            var i = this._getItemIndex(this._activeElement);
                            if (! (t > this._items.length - 1 || t < 0)) if (this._isSliding) e(this._element).one(F.SLID,
                                function() {
                                    return n.to(t)
                                });
                            else {
                                if (i === t) return this.pause(),
                                    void this.cycle();
                                var s = t > i ? $: R;
                                this._slide(s, this._items[t])
                            }
                        },
                        n.dispose = function() {
                            e(this._element).off(P),
                                e.removeData(this._element, N),
                                this._items = null,
                                this._config = null,
                                this._element = null,
                                this._interval = null,
                                this._isPaused = null,
                                this._isSliding = null,
                                this._activeElement = null,
                                this._indicatorsElement = null
                        },
                        n._getConfig = function(t) {
                            return t = s({},
                                Y, t),
                                a.typeCheckConfig(I, t, H),
                                t
                        },
                        n._handleSwipe = function() {
                            var t = Math.abs(this.touchDeltaX);
                            if (! (t <= 40)) {
                                var e = t / this.touchDeltaX;
                                e > 0 && this.prev(),
                                e < 0 && this.next()
                            }
                        },
                        n._addEventListeners = function() {
                            var t = this;
                            this._config.keyboard && e(this._element).on(F.KEYDOWN,
                                function(e) {
                                    return t._keydown(e)
                                }),
                            "hover" === this._config.pause && e(this._element).on(F.MOUSEENTER,
                                function(e) {
                                    return t.pause(e)
                                }).on(F.MOUSELEAVE,
                                function(e) {
                                    return t.cycle(e)
                                }),
                            this._config.touch && this._addTouchEventListeners()
                        },
                        n._addTouchEventListeners = function() {
                            var t = this;
                            if (this._touchSupported) {
                                var n = function(e) {
                                        t._pointerEvent && J[e.originalEvent.pointerType.toUpperCase()] ? t.touchStartX = e.originalEvent.clientX: t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX)
                                    },
                                    i = function(e) {
                                        t._pointerEvent && J[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX),
                                            t._handleSwipe(),
                                        "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function(e) {
                                                return t.cycle(e)
                                            },
                                            500 + t._config.interval))
                                    };
                                e(this._element.querySelectorAll(X.ITEM_IMG)).on(F.DRAG_START,
                                    function(t) {
                                        return t.preventDefault()
                                    }),
                                    this._pointerEvent ? (e(this._element).on(F.POINTERDOWN,
                                        function(t) {
                                            return n(t)
                                        }), e(this._element).on(F.POINTERUP,
                                        function(t) {
                                            return i(t)
                                        }), this._element.classList.add(Z)) : (e(this._element).on(F.TOUCHSTART,
                                        function(t) {
                                            return n(t)
                                        }), e(this._element).on(F.TOUCHMOVE,
                                        function(e) {
                                            var n; (n = e).originalEvent.touches && n.originalEvent.touches.length > 1 ? t.touchDeltaX = 0 : t.touchDeltaX = n.originalEvent.touches[0].clientX - t.touchStartX
                                        }), e(this._element).on(F.TOUCHEND,
                                        function(t) {
                                            return i(t)
                                        }))
                            }
                        },
                        n._keydown = function(t) {
                            if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                                case 37:
                                    t.preventDefault(),
                                        this.prev();
                                    break;
                                case 39:
                                    t.preventDefault(),
                                        this.next()
                            }
                        },
                        n._getItemIndex = function(t) {
                            return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(X.ITEM)) : [],
                                this._items.indexOf(t)
                        },
                        n._getItemByDirection = function(t, e) {
                            var n = t === $,
                                i = t === R,
                                s = this._getItemIndex(e),
                                o = this._items.length - 1;
                            if ((i && 0 === s || n && s === o) && !this._config.wrap) return e;
                            var r = (s + (t === R ? -1 : 1)) % this._items.length;
                            return - 1 === r ? this._items[this._items.length - 1] : this._items[r]
                        },
                        n._triggerSlideEvent = function(t, n) {
                            var i = this._getItemIndex(t),
                                s = this._getItemIndex(this._element.querySelector(X.ACTIVE_ITEM)),
                                o = e.Event(F.SLIDE, {
                                    relatedTarget: t,
                                    direction: n,
                                    from: s,
                                    to: i
                                });
                            return e(this._element).trigger(o),
                                o
                        },
                        n._setActiveIndicatorElement = function(t) {
                            if (this._indicatorsElement) {
                                var n = [].slice.call(this._indicatorsElement.querySelectorAll(X.ACTIVE));
                                e(n).removeClass(V);
                                var i = this._indicatorsElement.children[this._getItemIndex(t)];
                                i && e(i).addClass(V)
                            }
                        },
                        n._slide = function(t, n) {
                            var i, s, o, r = this,
                                l = this._element.querySelector(X.ACTIVE_ITEM),
                                c = this._getItemIndex(l),
                                h = n || l && this._getItemByDirection(t, l),
                                u = this._getItemIndex(h),
                                d = Boolean(this._interval);
                            if (t === $ ? (i = G, s = K, o = W) : (i = z, s = Q, o = U), h && e(h).hasClass(V)) this._isSliding = !1;
                            else if (!this._triggerSlideEvent(h, o).isDefaultPrevented() && l && h) {
                                this._isSliding = !0,
                                d && this.pause(),
                                    this._setActiveIndicatorElement(h);
                                var f = e.Event(F.SLID, {
                                    relatedTarget: h,
                                    direction: o,
                                    from: c,
                                    to: u
                                });
                                if (e(this._element).hasClass(B)) {
                                    e(h).addClass(s),
                                        a.reflow(h),
                                        e(l).addClass(i),
                                        e(h).addClass(i);
                                    var p = parseInt(h.getAttribute("data-interval"), 10);
                                    p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = p) : this._config.interval = this._config.defaultInterval || this._config.interval;
                                    var m = a.getTransitionDurationFromElement(l);
                                    e(l).one(a.TRANSITION_END,
                                        function() {
                                            e(h).removeClass(i + " " + s).addClass(V),
                                                e(l).removeClass(V + " " + s + " " + i),
                                                r._isSliding = !1,
                                                setTimeout(function() {
                                                        return e(r._element).trigger(f)
                                                    },
                                                    0)
                                        }).emulateTransitionEnd(m)
                                } else e(l).removeClass(V),
                                    e(h).addClass(V),
                                    this._isSliding = !1,
                                    e(this._element).trigger(f);
                                d && this.cycle()
                            }
                        },
                        t._jQueryInterface = function(n) {
                            return this.each(function() {
                                var i = e(this).data(N),
                                    o = s({},
                                        Y, e(this).data());
                                "object" == typeof n && (o = s({},
                                    o, n));
                                var r = "string" == typeof n ? n: o.slide;
                                if (i || (i = new t(this, o), e(this).data(N, i)), "number" == typeof n) i.to(n);
                                else if ("string" == typeof r) {
                                    if (void 0 === i[r]) throw new TypeError('No method named "' + r + '"');
                                    i[r]()
                                } else o.interval && o.ride && (i.pause(), i.cycle())
                            })
                        },
                        t._dataApiClickHandler = function(n) {
                            var i = a.getSelectorFromElement(this);
                            if (i) {
                                var o = e(i)[0];
                                if (o && e(o).hasClass(q)) {
                                    var r = s({},
                                        e(o).data(), e(this).data()),
                                        l = this.getAttribute("data-slide-to");
                                    l && (r.interval = !1),
                                        t._jQueryInterface.call(e(o), r),
                                    l && e(o).data(N).to(l),
                                        n.preventDefault()
                                }
                            }
                        },
                        i(t, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.3.1"
                            }
                        },
                            {
                                key: "Default",
                                get: function() {
                                    return Y
                                }
                            }]),
                        t
                } ();
            e(document).on(F.CLICK_DATA_API, X.DATA_SLIDE, tt._dataApiClickHandler),
                e(window).on(F.LOAD_DATA_API,
                    function() {
                        for (var t = [].slice.call(document.querySelectorAll(X.DATA_RIDE)), n = 0, i = t.length; n < i; n++) {
                            var s = e(t[n]);
                            tt._jQueryInterface.call(s, s.data())
                        }
                    }),
                e.fn[I] = tt._jQueryInterface,
                e.fn[I].Constructor = tt,
                e.fn[I].noConflict = function() {
                    return e.fn[I] = j,
                        tt._jQueryInterface
                };
            var et = "collapse",
                nt = "bs.collapse",
                it = "." + nt,
                st = e.fn[et],
                ot = {
                    toggle: !0,
                    parent: ""
                },
                rt = {
                    toggle: "boolean",
                    parent: "(string|element)"
                },
                at = {
                    SHOW: "show" + it,
                    SHOWN: "shown" + it,
                    HIDE: "hide" + it,
                    HIDDEN: "hidden" + it,
                    CLICK_DATA_API: "click" + it + ".data-api"
                },
                lt = "show",
                ct = "collapse",
                ht = "collapsing",
                ut = "collapsed",
                dt = "width",
                ft = "height",
                pt = {
                    ACTIVES: ".show, .collapsing",
                    DATA_TOGGLE: '[data-toggle="collapse"]'
                },
                mt = function() {
                    function t(t, e) {
                        this._isTransitioning = !1,
                            this._element = t,
                            this._config = this._getConfig(e),
                            this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                        for (var n = [].slice.call(document.querySelectorAll(pt.DATA_TOGGLE)), i = 0, s = n.length; i < s; i++) {
                            var o = n[i],
                                r = a.getSelectorFromElement(o),
                                l = [].slice.call(document.querySelectorAll(r)).filter(function(e) {
                                    return e === t
                                });
                            null !== r && l.length > 0 && (this._selector = r, this._triggerArray.push(o))
                        }
                        this._parent = this._config.parent ? this._getParent() : null,
                        this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
                        this._config.toggle && this.toggle()
                    }
                    var n = t.prototype;
                    return n.toggle = function() {
                        e(this._element).hasClass(lt) ? this.hide() : this.show()
                    },
                        n.show = function() {
                            var n, i, s = this;
                            if (!this._isTransitioning && !e(this._element).hasClass(lt) && (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(pt.ACTIVES)).filter(function(t) {
                                return "string" == typeof s._config.parent ? t.getAttribute("data-parent") === s._config.parent: t.classList.contains(ct)
                            })).length && (n = null), !(n && (i = e(n).not(this._selector).data(nt)) && i._isTransitioning))) {
                                var o = e.Event(at.SHOW);
                                if (e(this._element).trigger(o), !o.isDefaultPrevented()) {
                                    n && (t._jQueryInterface.call(e(n).not(this._selector), "hide"), i || e(n).data(nt, null));
                                    var r = this._getDimension();
                                    e(this._element).removeClass(ct).addClass(ht),
                                        this._element.style[r] = 0,
                                    this._triggerArray.length && e(this._triggerArray).removeClass(ut).attr("aria-expanded", !0),
                                        this.setTransitioning(!0);
                                    var l = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                                        c = a.getTransitionDurationFromElement(this._element);
                                    e(this._element).one(a.TRANSITION_END,
                                        function() {
                                            e(s._element).removeClass(ht).addClass(ct).addClass(lt),
                                                s._element.style[r] = "",
                                                s.setTransitioning(!1),
                                                e(s._element).trigger(at.SHOWN)
                                        }).emulateTransitionEnd(c),
                                        this._element.style[r] = this._element[l] + "px"
                                }
                            }
                        },
                        n.hide = function() {
                            var t = this;
                            if (!this._isTransitioning && e(this._element).hasClass(lt)) {
                                var n = e.Event(at.HIDE);
                                if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
                                    var i = this._getDimension();
                                    this._element.style[i] = this._element.getBoundingClientRect()[i] + "px",
                                        a.reflow(this._element),
                                        e(this._element).addClass(ht).removeClass(ct).removeClass(lt);
                                    var s = this._triggerArray.length;
                                    if (s > 0) for (var o = 0; o < s; o++) {
                                        var r = this._triggerArray[o],
                                            l = a.getSelectorFromElement(r);
                                        if (null !== l) e([].slice.call(document.querySelectorAll(l))).hasClass(lt) || e(r).addClass(ut).attr("aria-expanded", !1)
                                    }
                                    this.setTransitioning(!0);
                                    this._element.style[i] = "";
                                    var c = a.getTransitionDurationFromElement(this._element);
                                    e(this._element).one(a.TRANSITION_END,
                                        function() {
                                            t.setTransitioning(!1),
                                                e(t._element).removeClass(ht).addClass(ct).trigger(at.HIDDEN)
                                        }).emulateTransitionEnd(c)
                                }
                            }
                        },
                        n.setTransitioning = function(t) {
                            this._isTransitioning = t
                        },
                        n.dispose = function() {
                            e.removeData(this._element, nt),
                                this._config = null,
                                this._parent = null,
                                this._element = null,
                                this._triggerArray = null,
                                this._isTransitioning = null
                        },
                        n._getConfig = function(t) {
                            return (t = s({},
                                ot, t)).toggle = Boolean(t.toggle),
                                a.typeCheckConfig(et, t, rt),
                                t
                        },
                        n._getDimension = function() {
                            return e(this._element).hasClass(dt) ? dt: ft
                        },
                        n._getParent = function() {
                            var n, i = this;
                            a.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
                            var s = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                                o = [].slice.call(n.querySelectorAll(s));
                            return e(o).each(function(e, n) {
                                i._addAriaAndCollapsedClass(t._getTargetFromElement(n), [n])
                            }),
                                n
                        },
                        n._addAriaAndCollapsedClass = function(t, n) {
                            var i = e(t).hasClass(lt);
                            n.length && e(n).toggleClass(ut, !i).attr("aria-expanded", i)
                        },
                        t._getTargetFromElement = function(t) {
                            var e = a.getSelectorFromElement(t);
                            return e ? document.querySelector(e) : null
                        },
                        t._jQueryInterface = function(n) {
                            return this.each(function() {
                                var i = e(this),
                                    o = i.data(nt),
                                    r = s({},
                                        ot, i.data(), "object" == typeof n && n ? n: {});
                                if (!o && r.toggle && /show|hide/.test(n) && (r.toggle = !1), o || (o = new t(this, r), i.data(nt, o)), "string" == typeof n) {
                                    if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                                    o[n]()
                                }
                            })
                        },
                        i(t, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.3.1"
                            }
                        },
                            {
                                key: "Default",
                                get: function() {
                                    return ot
                                }
                            }]),
                        t
                } ();
            e(document).on(at.CLICK_DATA_API, pt.DATA_TOGGLE,
                function(t) {
                    "A" === t.currentTarget.tagName && t.preventDefault();
                    var n = e(this),
                        i = a.getSelectorFromElement(this),
                        s = [].slice.call(document.querySelectorAll(i));
                    e(s).each(function() {
                        var t = e(this),
                            i = t.data(nt) ? "toggle": n.data();
                        mt._jQueryInterface.call(t, i)
                    })
                }),
                e.fn[et] = mt._jQueryInterface,
                e.fn[et].Constructor = mt,
                e.fn[et].noConflict = function() {
                    return e.fn[et] = st,
                        mt._jQueryInterface
                };
            for (var gt = "undefined" != typeof window && "undefined" != typeof document,
                     vt = ["Edge", "Trident", "Firefox"], yt = 0, bt = 0; bt < vt.length; bt += 1) if (gt && navigator.userAgent.indexOf(vt[bt]) >= 0) {
                yt = 1;
                break
            }
            var _t = gt && window.Promise ?
                function(t) {
                    var e = !1;
                    return function() {
                        e || (e = !0, window.Promise.resolve().then(function() {
                            e = !1,
                                t()
                        }))
                    }
                }: function(t) {
                    var e = !1;
                    return function() {
                        e || (e = !0, setTimeout(function() {
                                e = !1,
                                    t()
                            },
                            yt))
                    }
                };
            function wt(t) {
                return t && "[object Function]" === {}.toString.call(t)
            }
            function Dt(t, e) {
                if (1 !== t.nodeType) return [];
                var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
                return e ? n[e] : n
            }
            function kt(t) {
                return "HTML" === t.nodeName ? t: t.parentNode || t.host
            }
            function Ct(t) {
                if (!t) return document.body;
                switch (t.nodeName) {
                    case "HTML":
                    case "BODY":
                        return t.ownerDocument.body;
                    case "#document":
                        return t.body
                }
                var e = Dt(t),
                    n = e.overflow,
                    i = e.overflowX,
                    s = e.overflowY;
                return /(auto|scroll|overlay)/.test(n + s + i) ? t: Ct(kt(t))
            }
            var xt = gt && !(!window.MSInputMethodContext || !document.documentMode),
                Tt = gt && /MSIE 10/.test(navigator.userAgent);
            function St(t) {
                return 11 === t ? xt: 10 === t ? Tt: xt || Tt
            }
            function Et(t) {
                if (!t) return document.documentElement;
                for (var e = St(10) ? document.body: null, n = t.offsetParent || null; n === e && t.nextElementSibling;) n = (t = t.nextElementSibling).offsetParent;
                var i = n && n.nodeName;
                return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === Dt(n, "position") ? Et(n) : n: t ? t.ownerDocument.documentElement: document.documentElement
            }
            function Mt(t) {
                return null !== t.parentNode ? Mt(t.parentNode) : t
            }
            function At(t, e) {
                if (! (t && t.nodeType && e && e.nodeType)) return document.documentElement;
                var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
                    i = n ? t: e,
                    s = n ? e: t,
                    o = document.createRange();
                o.setStart(i, 0),
                    o.setEnd(s, 0);
                var r, a, l = o.commonAncestorContainer;
                if (t !== l && e !== l || i.contains(s)) return "BODY" === (a = (r = l).nodeName) || "HTML" !== a && Et(r.firstElementChild) !== r ? Et(l) : l;
                var c = Mt(t);
                return c.host ? At(c.host, e) : At(t, Mt(e).host)
            }
            function Ot(t) {
                var e = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop": "scrollLeft",
                    n = t.nodeName;
                if ("BODY" === n || "HTML" === n) {
                    var i = t.ownerDocument.documentElement;
                    return (t.ownerDocument.scrollingElement || i)[e]
                }
                return t[e]
            }
            function It(t, e) {
                var n = "x" === e ? "Left": "Top",
                    i = "Left" === n ? "Right": "Bottom";
                return parseFloat(t["border" + n + "Width"], 10) + parseFloat(t["border" + i + "Width"], 10)
            }
            function Nt(t, e, n, i) {
                return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], St(10) ? parseInt(n["offset" + t]) + parseInt(i["margin" + ("Height" === t ? "Top": "Left")]) + parseInt(i["margin" + ("Height" === t ? "Bottom": "Right")]) : 0)
            }
            function Pt(t) {
                var e = t.body,
                    n = t.documentElement,
                    i = St(10) && getComputedStyle(n);
                return {
                    height: Nt("Height", e, n, i),
                    width: Nt("Width", e, n, i)
                }
            }
            var Lt = function(t, e) {
                    if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
                },
                jt = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                            "value" in i && (i.writable = !0),
                                Object.defineProperty(t, i.key, i)
                        }
                    }
                    return function(e, n, i) {
                        return n && t(e.prototype, n),
                        i && t(e, i),
                            e
                    }
                } (),
                Yt = function(t, e, n) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n,
                        t
                },
                Ht = Object.assign ||
                    function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = arguments[e];
                            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                        }
                        return t
                    };
            function $t(t) {
                return Ht({},
                    t, {
                        right: t.left + t.width,
                        bottom: t.top + t.height
                    })
            }
            function Rt(t) {
                var e = {};
                try {
                    if (St(10)) {
                        e = t.getBoundingClientRect();
                        var n = Ot(t, "top"),
                            i = Ot(t, "left");
                        e.top += n,
                            e.left += i,
                            e.bottom += n,
                            e.right += i
                    } else e = t.getBoundingClientRect()
                } catch(t) {}
                var s = {
                        left: e.left,
                        top: e.top,
                        width: e.right - e.left,
                        height: e.bottom - e.top
                    },
                    o = "HTML" === t.nodeName ? Pt(t.ownerDocument) : {},
                    r = o.width || t.clientWidth || s.right - s.left,
                    a = o.height || t.clientHeight || s.bottom - s.top,
                    l = t.offsetWidth - r,
                    c = t.offsetHeight - a;
                if (l || c) {
                    var h = Dt(t);
                    l -= It(h, "x"),
                        c -= It(h, "y"),
                        s.width -= l,
                        s.height -= c
                }
                return $t(s)
            }
            function Wt(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = St(10),
                    s = "HTML" === e.nodeName,
                    o = Rt(t),
                    r = Rt(e),
                    a = Ct(t),
                    l = Dt(e),
                    c = parseFloat(l.borderTopWidth, 10),
                    h = parseFloat(l.borderLeftWidth, 10);
                n && s && (r.top = Math.max(r.top, 0), r.left = Math.max(r.left, 0));
                var u = $t({
                    top: o.top - r.top - c,
                    left: o.left - r.left - h,
                    width: o.width,
                    height: o.height
                });
                if (u.marginTop = 0, u.marginLeft = 0, !i && s) {
                    var d = parseFloat(l.marginTop, 10),
                        f = parseFloat(l.marginLeft, 10);
                    u.top -= c - d,
                        u.bottom -= c - d,
                        u.left -= h - f,
                        u.right -= h - f,
                        u.marginTop = d,
                        u.marginLeft = f
                }
                return (i && !n ? e.contains(a) : e === a && "BODY" !== a.nodeName) && (u = function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = Ot(e, "top"),
                        s = Ot(e, "left"),
                        o = n ? -1 : 1;
                    return t.top += i * o,
                        t.bottom += i * o,
                        t.left += s * o,
                        t.right += s * o,
                        t
                } (u, e)),
                    u
            }
            function Ut(t) {
                if (!t || !t.parentElement || St()) return document.documentElement;
                for (var e = t.parentElement; e && "none" === Dt(e, "transform");) e = e.parentElement;
                return e || document.documentElement
            }
            function Ft(t, e, n, i) {
                var s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                    o = {
                        top: 0,
                        left: 0
                    },
                    r = s ? Ut(t) : At(t, e);
                if ("viewport" === i) o = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = t.ownerDocument.documentElement,
                        i = Wt(t, n),
                        s = Math.max(n.clientWidth, window.innerWidth || 0),
                        o = Math.max(n.clientHeight, window.innerHeight || 0),
                        r = e ? 0 : Ot(n),
                        a = e ? 0 : Ot(n, "left");
                    return $t({
                        top: r - i.top + i.marginTop,
                        left: a - i.left + i.marginLeft,
                        width: s,
                        height: o
                    })
                } (r, s);
                else {
                    var a = void 0;
                    "scrollParent" === i ? "BODY" === (a = Ct(kt(e))).nodeName && (a = t.ownerDocument.documentElement) : a = "window" === i ? t.ownerDocument.documentElement: i;
                    var l = Wt(a, r, s);
                    if ("HTML" !== a.nodeName ||
                        function t(e) {
                            var n = e.nodeName;
                            if ("BODY" === n || "HTML" === n) return ! 1;
                            if ("fixed" === Dt(e, "position")) return ! 0;
                            var i = kt(e);
                            return !! i && t(i)
                        } (r)) o = l;
                    else {
                        var c = Pt(t.ownerDocument),
                            h = c.height,
                            u = c.width;
                        o.top += l.top - l.marginTop,
                            o.bottom = h + l.top,
                            o.left += l.left - l.marginLeft,
                            o.right = u + l.left
                    }
                }
                var d = "number" == typeof(n = n || 0);
                return o.left += d ? n: n.left || 0,
                    o.top += d ? n: n.top || 0,
                    o.right -= d ? n: n.right || 0,
                    o.bottom -= d ? n: n.bottom || 0,
                    o
            }
            function qt(t, e, n, i, s) {
                var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                if ( - 1 === t.indexOf("auto")) return t;
                var r = Ft(n, i, o, s),
                    a = {
                        top: {
                            width: r.width,
                            height: e.top - r.top
                        },
                        right: {
                            width: r.right - e.right,
                            height: r.height
                        },
                        bottom: {
                            width: r.width,
                            height: r.bottom - e.bottom
                        },
                        left: {
                            width: e.left - r.left,
                            height: r.height
                        }
                    },
                    l = Object.keys(a).map(function(t) {
                        return Ht({
                                key: t
                            },
                            a[t], {
                                area: (e = a[t], e.width * e.height)
                            });
                        var e
                    }).sort(function(t, e) {
                        return e.area - t.area
                    }),
                    c = l.filter(function(t) {
                        var e = t.width,
                            i = t.height;
                        return e >= n.clientWidth && i >= n.clientHeight
                    }),
                    h = c.length > 0 ? c[0].key: l[0].key,
                    u = t.split("-")[1];
                return h + (u ? "-" + u: "")
            }
            function Vt(t, e, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                return Wt(n, i ? Ut(e) : At(e, n), i)
            }
            function Bt(t) {
                var e = t.ownerDocument.defaultView.getComputedStyle(t),
                    n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
                    i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
                return {
                    width: t.offsetWidth + i,
                    height: t.offsetHeight + n
                }
            }
            function zt(t) {
                var e = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                };
                return t.replace(/left|right|bottom|top/g,
                    function(t) {
                        return e[t]
                    })
            }
            function Gt(t, e, n) {
                n = n.split("-")[0];
                var i = Bt(t),
                    s = {
                        width: i.width,
                        height: i.height
                    },
                    o = -1 !== ["right", "left"].indexOf(n),
                    r = o ? "top": "left",
                    a = o ? "left": "top",
                    l = o ? "height": "width",
                    c = o ? "width": "height";
                return s[r] = e[r] + e[l] / 2 - i[l] / 2,
                    s[a] = n === a ? e[a] - i[c] : e[zt(a)],
                    s
            }
            function Kt(t, e) {
                return Array.prototype.find ? t.find(e) : t.filter(e)[0]
            }
            function Qt(t, e, n) {
                return (void 0 === n ? t: t.slice(0,
                    function(t, e, n) {
                        if (Array.prototype.findIndex) return t.findIndex(function(t) {
                            return t[e] === n
                        });
                        var i = Kt(t,
                            function(t) {
                                return t[e] === n
                            });
                        return t.indexOf(i)
                    } (t, "name", n))).forEach(function(t) {
                    t.
                        function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                    var n = t.
                        function || t.fn;
                    t.enabled && wt(n) && (e.offsets.popper = $t(e.offsets.popper), e.offsets.reference = $t(e.offsets.reference), e = n(e, t))
                }),
                    e
            }
            function Zt(t, e) {
                return t.some(function(t) {
                    var n = t.name;
                    return t.enabled && n === e
                })
            }
            function Xt(t) {
                for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) {
                    var s = e[i],
                        o = s ? "" + s + n: t;
                    if (void 0 !== document.body.style[o]) return o
                }
                return null
            }
            function Jt(t) {
                var e = t.ownerDocument;
                return e ? e.defaultView: window
            }
            function te(t, e, n, i) {
                n.updateBound = i,
                    Jt(t).addEventListener("resize", n.updateBound, {
                        passive: !0
                    });
                var s = Ct(t);
                return function t(e, n, i, s) {
                    var o = "BODY" === e.nodeName,
                        r = o ? e.ownerDocument.defaultView: e;
                    r.addEventListener(n, i, {
                        passive: !0
                    }),
                    o || t(Ct(r.parentNode), n, i, s),
                        s.push(r)
                } (s, "scroll", n.updateBound, n.scrollParents),
                    n.scrollElement = s,
                    n.eventsEnabled = !0,
                    n
            }
            function ee() {
                var t, e;
                this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, Jt(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function(t) {
                    t.removeEventListener("scroll", e.updateBound)
                }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e))
            }
            function ne(t) {
                return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
            }
            function ie(t, e) {
                Object.keys(e).forEach(function(n) {
                    var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && ne(e[n]) && (i = "px"),
                        t.style[n] = e[n] + i
                })
            }
            var se = gt && /Firefox/i.test(navigator.userAgent);
            function oe(t, e, n) {
                var i = Kt(t,
                    function(t) {
                        return t.name === e
                    }),
                    s = !!i && t.some(function(t) {
                        return t.name === n && t.enabled && t.order < i.order
                    });
                if (!s) {
                    var o = "`" + e + "`",
                        r = "`" + n + "`";
                    console.warn(r + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
                }
                return s
            }
            var re = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
                ae = re.slice(3);
            function le(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = ae.indexOf(t),
                    i = ae.slice(n + 1).concat(ae.slice(0, n));
                return e ? i.reverse() : i
            }
            var ce = {
                FLIP: "flip",
                CLOCKWISE: "clockwise",
                COUNTERCLOCKWISE: "counterclockwise"
            };
            function he(t, e, n, i) {
                var s = [0, 0],
                    o = -1 !== ["right", "left"].indexOf(i),
                    r = t.split(/(\+|\-)/).map(function(t) {
                        return t.trim()
                    }),
                    a = r.indexOf(Kt(r,
                        function(t) {
                            return - 1 !== t.search(/,|\s/)
                        }));
                r[a] && -1 === r[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                var l = /\s*,\s*|\s+/,
                    c = -1 !== a ? [r.slice(0, a).concat([r[a].split(l)[0]]), [r[a].split(l)[1]].concat(r.slice(a + 1))] : [r];
                return (c = c.map(function(t, i) {
                    var s = (1 === i ? !o: o) ? "height": "width",
                        r = !1;
                    return t.reduce(function(t, e) {
                            return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, r = !0, t) : r ? (t[t.length - 1] += e, r = !1, t) : t.concat(e)
                        },
                        []).map(function(t) {
                        return function(t, e, n, i) {
                            var s = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                o = +s[1],
                                r = s[2];
                            if (!o) return t;
                            if (0 === r.indexOf("%")) {
                                var a = void 0;
                                switch (r) {
                                    case "%p":
                                        a = n;
                                        break;
                                    case "%":
                                    case "%r":
                                    default:
                                        a = i
                                }
                                return $t(a)[e] / 100 * o
                            }
                            if ("vh" === r || "vw" === r) return ("vh" === r ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
                            return o
                        } (t, s, e, n)
                    })
                })).forEach(function(t, e) {
                    t.forEach(function(n, i) {
                        ne(n) && (s[e] += n * ("-" === t[i - 1] ? -1 : 1))
                    })
                }),
                    s
            }
            var ue = {
                    placement: "bottom",
                    positionFixed: !1,
                    eventsEnabled: !0,
                    removeOnDestroy: !1,
                    onCreate: function() {},
                    onUpdate: function() {},
                    modifiers: {
                        shift: {
                            order: 100,
                            enabled: !0,
                            fn: function(t) {
                                var e = t.placement,
                                    n = e.split("-")[0],
                                    i = e.split("-")[1];
                                if (i) {
                                    var s = t.offsets,
                                        o = s.reference,
                                        r = s.popper,
                                        a = -1 !== ["bottom", "top"].indexOf(n),
                                        l = a ? "left": "top",
                                        c = a ? "width": "height",
                                        h = {
                                            start: Yt({},
                                                l, o[l]),
                                            end: Yt({},
                                                l, o[l] + o[c] - r[c])
                                        };
                                    t.offsets.popper = Ht({},
                                        r, h[i])
                                }
                                return t
                            }
                        },
                        offset: {
                            order: 200,
                            enabled: !0,
                            fn: function(t, e) {
                                var n = e.offset,
                                    i = t.placement,
                                    s = t.offsets,
                                    o = s.popper,
                                    r = s.reference,
                                    a = i.split("-")[0],
                                    l = void 0;
                                return l = ne( + n) ? [ + n, 0] : he(n, o, r, a),
                                    "left" === a ? (o.top += l[0], o.left -= l[1]) : "right" === a ? (o.top += l[0], o.left += l[1]) : "top" === a ? (o.left += l[0], o.top -= l[1]) : "bottom" === a && (o.left += l[0], o.top += l[1]),
                                    t.popper = o,
                                    t
                            },
                            offset: 0
                        },
                        preventOverflow: {
                            order: 300,
                            enabled: !0,
                            fn: function(t, e) {
                                var n = e.boundariesElement || Et(t.instance.popper);
                                t.instance.reference === n && (n = Et(n));
                                var i = Xt("transform"),
                                    s = t.instance.popper.style,
                                    o = s.top,
                                    r = s.left,
                                    a = s[i];
                                s.top = "",
                                    s.left = "",
                                    s[i] = "";
                                var l = Ft(t.instance.popper, t.instance.reference, e.padding, n, t.positionFixed);
                                s.top = o,
                                    s.left = r,
                                    s[i] = a,
                                    e.boundaries = l;
                                var c = e.priority,
                                    h = t.offsets.popper,
                                    u = {
                                        primary: function(t) {
                                            var n = h[t];
                                            return h[t] < l[t] && !e.escapeWithReference && (n = Math.max(h[t], l[t])),
                                                Yt({},
                                                    t, n)
                                        },
                                        secondary: function(t) {
                                            var n = "right" === t ? "left": "top",
                                                i = h[n];
                                            return h[t] > l[t] && !e.escapeWithReference && (i = Math.min(h[n], l[t] - ("right" === t ? h.width: h.height))),
                                                Yt({},
                                                    n, i)
                                        }
                                    };
                                return c.forEach(function(t) {
                                    var e = -1 !== ["left", "top"].indexOf(t) ? "primary": "secondary";
                                    h = Ht({},
                                        h, u[e](t))
                                }),
                                    t.offsets.popper = h,
                                    t
                            },
                            priority: ["left", "right", "top", "bottom"],
                            padding: 5,
                            boundariesElement: "scrollParent"
                        },
                        keepTogether: {
                            order: 400,
                            enabled: !0,
                            fn: function(t) {
                                var e = t.offsets,
                                    n = e.popper,
                                    i = e.reference,
                                    s = t.placement.split("-")[0],
                                    o = Math.floor,
                                    r = -1 !== ["top", "bottom"].indexOf(s),
                                    a = r ? "right": "bottom",
                                    l = r ? "left": "top",
                                    c = r ? "width": "height";
                                return n[a] < o(i[l]) && (t.offsets.popper[l] = o(i[l]) - n[c]),
                                n[l] > o(i[a]) && (t.offsets.popper[l] = o(i[a])),
                                    t
                            }
                        },
                        arrow: {
                            order: 500,
                            enabled: !0,
                            fn: function(t, e) {
                                var n;
                                if (!oe(t.instance.modifiers, "arrow", "keepTogether")) return t;
                                var i = e.element;
                                if ("string" == typeof i) {
                                    if (! (i = t.instance.popper.querySelector(i))) return t
                                } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"),
                                    t;
                                var s = t.placement.split("-")[0],
                                    o = t.offsets,
                                    r = o.popper,
                                    a = o.reference,
                                    l = -1 !== ["left", "right"].indexOf(s),
                                    c = l ? "height": "width",
                                    h = l ? "Top": "Left",
                                    u = h.toLowerCase(),
                                    d = l ? "left": "top",
                                    f = l ? "bottom": "right",
                                    p = Bt(i)[c];
                                a[f] - p < r[u] && (t.offsets.popper[u] -= r[u] - (a[f] - p)),
                                a[u] + p > r[f] && (t.offsets.popper[u] += a[u] + p - r[f]),
                                    t.offsets.popper = $t(t.offsets.popper);
                                var m = a[u] + a[c] / 2 - p / 2,
                                    g = Dt(t.instance.popper),
                                    v = parseFloat(g["margin" + h], 10),
                                    y = parseFloat(g["border" + h + "Width"], 10),
                                    b = m - t.offsets.popper[u] - v - y;
                                return b = Math.max(Math.min(r[c] - p, b), 0),
                                    t.arrowElement = i,
                                    t.offsets.arrow = (Yt(n = {},
                                        u, Math.round(b)), Yt(n, d, ""), n),
                                    t
                            },
                            element: "[x-arrow]"
                        },
                        flip: {
                            order: 600,
                            enabled: !0,
                            fn: function(t, e) {
                                if (Zt(t.instance.modifiers, "inner")) return t;
                                if (t.flipped && t.placement === t.originalPlacement) return t;
                                var n = Ft(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed),
                                    i = t.placement.split("-")[0],
                                    s = zt(i),
                                    o = t.placement.split("-")[1] || "",
                                    r = [];
                                switch (e.behavior) {
                                    case ce.FLIP:
                                        r = [i, s];
                                        break;
                                    case ce.CLOCKWISE:
                                        r = le(i);
                                        break;
                                    case ce.COUNTERCLOCKWISE:
                                        r = le(i, !0);
                                        break;
                                    default:
                                        r = e.behavior
                                }
                                return r.forEach(function(a, l) {
                                    if (i !== a || r.length === l + 1) return t;
                                    i = t.placement.split("-")[0],
                                        s = zt(i);
                                    var c, h = t.offsets.popper,
                                        u = t.offsets.reference,
                                        d = Math.floor,
                                        f = "left" === i && d(h.right) > d(u.left) || "right" === i && d(h.left) < d(u.right) || "top" === i && d(h.bottom) > d(u.top) || "bottom" === i && d(h.top) < d(u.bottom),
                                        p = d(h.left) < d(n.left),
                                        m = d(h.right) > d(n.right),
                                        g = d(h.top) < d(n.top),
                                        v = d(h.bottom) > d(n.bottom),
                                        y = "left" === i && p || "right" === i && m || "top" === i && g || "bottom" === i && v,
                                        b = -1 !== ["top", "bottom"].indexOf(i),
                                        _ = !!e.flipVariations && (b && "start" === o && p || b && "end" === o && m || !b && "start" === o && g || !b && "end" === o && v); (f || y || _) && (t.flipped = !0, (f || y) && (i = r[l + 1]), _ && (o = "end" === (c = o) ? "start": "start" === c ? "end": c), t.placement = i + (o ? "-" + o: ""), t.offsets.popper = Ht({},
                                        t.offsets.popper, Gt(t.instance.popper, t.offsets.reference, t.placement)), t = Qt(t.instance.modifiers, t, "flip"))
                                }),
                                    t
                            },
                            behavior: "flip",
                            padding: 5,
                            boundariesElement: "viewport"
                        },
                        inner: {
                            order: 700,
                            enabled: !1,
                            fn: function(t) {
                                var e = t.placement,
                                    n = e.split("-")[0],
                                    i = t.offsets,
                                    s = i.popper,
                                    o = i.reference,
                                    r = -1 !== ["left", "right"].indexOf(n),
                                    a = -1 === ["top", "left"].indexOf(n);
                                return s[r ? "left": "top"] = o[n] - (a ? s[r ? "width": "height"] : 0),
                                    t.placement = zt(e),
                                    t.offsets.popper = $t(s),
                                    t
                            }
                        },
                        hide: {
                            order: 800,
                            enabled: !0,
                            fn: function(t) {
                                if (!oe(t.instance.modifiers, "hide", "preventOverflow")) return t;
                                var e = t.offsets.reference,
                                    n = Kt(t.instance.modifiers,
                                        function(t) {
                                            return "preventOverflow" === t.name
                                        }).boundaries;
                                if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                                    if (!0 === t.hide) return t;
                                    t.hide = !0,
                                        t.attributes["x-out-of-boundaries"] = ""
                                } else {
                                    if (!1 === t.hide) return t;
                                    t.hide = !1,
                                        t.attributes["x-out-of-boundaries"] = !1
                                }
                                return t
                            }
                        },
                        computeStyle: {
                            order: 850,
                            enabled: !0,
                            fn: function(t, e) {
                                var n = e.x,
                                    i = e.y,
                                    s = t.offsets.popper,
                                    o = Kt(t.instance.modifiers,
                                        function(t) {
                                            return "applyStyle" === t.name
                                        }).gpuAcceleration;
                                void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                                var r, a, l, c, h, u, d, f, p, m, g, v, y, b, _ = void 0 !== o ? o: e.gpuAcceleration,
                                    w = Et(t.instance.popper),
                                    D = Rt(w),
                                    k = {
                                        position: s.position
                                    },
                                    C = (r = t, a = window.devicePixelRatio < 2 || !se, l = r.offsets, c = l.popper, h = l.reference, u = Math.round, d = Math.floor, f = function(t) {
                                        return t
                                    },
                                        p = u(h.width), m = u(c.width), g = -1 !== ["left", "right"].indexOf(r.placement), v = -1 !== r.placement.indexOf("-"), y = a ? g || v || p % 2 == m % 2 ? u: d: f, b = a ? u: f, {
                                        left: y(p % 2 == 1 && m % 2 == 1 && !v && a ? c.left - 1 : c.left),
                                        top: b(c.top),
                                        bottom: b(c.bottom),
                                        right: y(c.right)
                                    }),
                                    x = "bottom" === n ? "top": "bottom",
                                    T = "right" === i ? "left": "right",
                                    S = Xt("transform"),
                                    E = void 0,
                                    M = void 0;
                                if (M = "bottom" === x ? "HTML" === w.nodeName ? -w.clientHeight + C.bottom: -D.height + C.bottom: C.top, E = "right" === T ? "HTML" === w.nodeName ? -w.clientWidth + C.right: -D.width + C.right: C.left, _ && S) k[S] = "translate3d(" + E + "px, " + M + "px, 0)",
                                    k[x] = 0,
                                    k[T] = 0,
                                    k.willChange = "transform";
                                else {
                                    var A = "bottom" === x ? -1 : 1,
                                        O = "right" === T ? -1 : 1;
                                    k[x] = M * A,
                                        k[T] = E * O,
                                        k.willChange = x + ", " + T
                                }
                                var I = {
                                    "x-placement": t.placement
                                };
                                return t.attributes = Ht({},
                                    I, t.attributes),
                                    t.styles = Ht({},
                                        k, t.styles),
                                    t.arrowStyles = Ht({},
                                        t.offsets.arrow, t.arrowStyles),
                                    t
                            },
                            gpuAcceleration: !0,
                            x: "bottom",
                            y: "right"
                        },
                        applyStyle: {
                            order: 900,
                            enabled: !0,
                            fn: function(t) {
                                var e, n;
                                return ie(t.instance.popper, t.styles),
                                    e = t.instance.popper,
                                    n = t.attributes,
                                    Object.keys(n).forEach(function(t) { ! 1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t)
                                    }),
                                t.arrowElement && Object.keys(t.arrowStyles).length && ie(t.arrowElement, t.arrowStyles),
                                    t
                            },
                            onLoad: function(t, e, n, i, s) {
                                var o = Vt(s, e, t, n.positionFixed),
                                    r = qt(n.placement, o, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                                return e.setAttribute("x-placement", r),
                                    ie(e, {
                                        position: n.positionFixed ? "fixed": "absolute"
                                    }),
                                    n
                            },
                            gpuAcceleration: void 0
                        }
                    }
                },
                de = function() {
                    function t(e, n) {
                        var i = this,
                            s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        Lt(this, t),
                            this.scheduleUpdate = function() {
                                return requestAnimationFrame(i.update)
                            },
                            this.update = _t(this.update.bind(this)),
                            this.options = Ht({},
                                t.Defaults, s),
                            this.state = {
                                isDestroyed: !1,
                                isCreated: !1,
                                scrollParents: []
                            },
                            this.reference = e && e.jquery ? e[0] : e,
                            this.popper = n && n.jquery ? n[0] : n,
                            this.options.modifiers = {},
                            Object.keys(Ht({},
                                t.Defaults.modifiers, s.modifiers)).forEach(function(e) {
                                i.options.modifiers[e] = Ht({},
                                    t.Defaults.modifiers[e] || {},
                                    s.modifiers ? s.modifiers[e] : {})
                            }),
                            this.modifiers = Object.keys(this.options.modifiers).map(function(t) {
                                return Ht({
                                        name: t
                                    },
                                    i.options.modifiers[t])
                            }).sort(function(t, e) {
                                return t.order - e.order
                            }),
                            this.modifiers.forEach(function(t) {
                                t.enabled && wt(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
                            }),
                            this.update();
                        var o = this.options.eventsEnabled;
                        o && this.enableEventListeners(),
                            this.state.eventsEnabled = o
                    }
                    return jt(t, [{
                        key: "update",
                        value: function() {
                            return function() {
                                if (!this.state.isDestroyed) {
                                    var t = {
                                        instance: this,
                                        styles: {},
                                        arrowStyles: {},
                                        attributes: {},
                                        flipped: !1,
                                        offsets: {}
                                    };
                                    t.offsets.reference = Vt(this.state, this.popper, this.reference, this.options.positionFixed),
                                        t.placement = qt(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
                                        t.originalPlacement = t.placement,
                                        t.positionFixed = this.options.positionFixed,
                                        t.offsets.popper = Gt(this.popper, t.offsets.reference, t.placement),
                                        t.offsets.popper.position = this.options.positionFixed ? "fixed": "absolute",
                                        t = Qt(this.modifiers, t),
                                        this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t))
                                }
                            }.call(this)
                        }
                    },
                        {
                            key: "destroy",
                            value: function() {
                                return function() {
                                    return this.state.isDestroyed = !0,
                                    Zt(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[Xt("transform")] = ""),
                                        this.disableEventListeners(),
                                    this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
                                        this
                                }.call(this)
                            }
                        },
                        {
                            key: "enableEventListeners",
                            value: function() {
                                return function() {
                                    this.state.eventsEnabled || (this.state = te(this.reference, this.options, this.state, this.scheduleUpdate))
                                }.call(this)
                            }
                        },
                        {
                            key: "disableEventListeners",
                            value: function() {
                                return ee.call(this)
                            }
                        }]),
                        t
                } ();
            de.Utils = ("undefined" != typeof window ? window: global).PopperUtils,
                de.placements = re,
                de.Defaults = ue;
            var fe = "dropdown",
                pe = "bs.dropdown",
                me = "." + pe,
                ge = ".data-api",
                ve = e.fn[fe],
                ye = new RegExp("38|40|27"),
                be = {
                    HIDE: "hide" + me,
                    HIDDEN: "hidden" + me,
                    SHOW: "show" + me,
                    SHOWN: "shown" + me,
                    CLICK: "click" + me,
                    CLICK_DATA_API: "click" + me + ge,
                    KEYDOWN_DATA_API: "keydown" + me + ge,
                    KEYUP_DATA_API: "keyup" + me + ge
                },
                _e = "disabled",
                we = "show",
                De = "dropup",
                ke = "dropright",
                Ce = "dropleft",
                xe = "dropdown-menu-right",
                Te = "position-static",
                Se = '[data-toggle="dropdown"]',
                Ee = ".dropdown form",
                Me = ".dropdown-menu",
                Ae = ".navbar-nav",
                Oe = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
                Ie = "top-start",
                Ne = "top-end",
                Pe = "bottom-start",
                Le = "bottom-end",
                je = "right-start",
                Ye = "left-start",
                He = {
                    offset: 0,
                    flip: !0,
                    boundary: "scrollParent",
                    reference: "toggle",
                    display: "dynamic"
                },
                $e = {
                    offset: "(number|string|function)",
                    flip: "boolean",
                    boundary: "(string|element)",
                    reference: "(string|element)",
                    display: "string"
                },
                Re = function() {
                    function t(t, e) {
                        this._element = t,
                            this._popper = null,
                            this._config = this._getConfig(e),
                            this._menu = this._getMenuElement(),
                            this._inNavbar = this._detectNavbar(),
                            this._addEventListeners()
                    }
                    var n = t.prototype;
                    return n.toggle = function() {
                        if (!this._element.disabled && !e(this._element).hasClass(_e)) {
                            var n = t._getParentFromElement(this._element),
                                i = e(this._menu).hasClass(we);
                            if (t._clearMenus(), !i) {
                                var s = {
                                        relatedTarget: this._element
                                    },
                                    o = e.Event(be.SHOW, s);
                                if (e(n).trigger(o), !o.isDefaultPrevented()) {
                                    if (!this._inNavbar) {
                                        if (void 0 === de) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                        var r = this._element;
                                        "parent" === this._config.reference ? r = n: a.isElement(this._config.reference) && (r = this._config.reference, void 0 !== this._config.reference.jquery && (r = this._config.reference[0])),
                                        "scrollParent" !== this._config.boundary && e(n).addClass(Te),
                                            this._popper = new de(r, this._menu, this._getPopperConfig())
                                    }
                                    "ontouchstart" in document.documentElement && 0 === e(n).closest(Ae).length && e(document.body).children().on("mouseover", null, e.noop),
                                        this._element.focus(),
                                        this._element.setAttribute("aria-expanded", !0),
                                        e(this._menu).toggleClass(we),
                                        e(n).toggleClass(we).trigger(e.Event(be.SHOWN, s))
                                }
                            }
                        }
                    },
                        n.show = function() {
                            if (! (this._element.disabled || e(this._element).hasClass(_e) || e(this._menu).hasClass(we))) {
                                var n = {
                                        relatedTarget: this._element
                                    },
                                    i = e.Event(be.SHOW, n),
                                    s = t._getParentFromElement(this._element);
                                e(s).trigger(i),
                                i.isDefaultPrevented() || (e(this._menu).toggleClass(we), e(s).toggleClass(we).trigger(e.Event(be.SHOWN, n)))
                            }
                        },
                        n.hide = function() {
                            if (!this._element.disabled && !e(this._element).hasClass(_e) && e(this._menu).hasClass(we)) {
                                var n = {
                                        relatedTarget: this._element
                                    },
                                    i = e.Event(be.HIDE, n),
                                    s = t._getParentFromElement(this._element);
                                e(s).trigger(i),
                                i.isDefaultPrevented() || (e(this._menu).toggleClass(we), e(s).toggleClass(we).trigger(e.Event(be.HIDDEN, n)))
                            }
                        },
                        n.dispose = function() {
                            e.removeData(this._element, pe),
                                e(this._element).off(me),
                                this._element = null,
                                this._menu = null,
                            null !== this._popper && (this._popper.destroy(), this._popper = null)
                        },
                        n.update = function() {
                            this._inNavbar = this._detectNavbar(),
                            null !== this._popper && this._popper.scheduleUpdate()
                        },
                        n._addEventListeners = function() {
                            var t = this;
                            e(this._element).on(be.CLICK,
                                function(e) {
                                    e.preventDefault(),
                                        e.stopPropagation(),
                                        t.toggle()
                                })
                        },
                        n._getConfig = function(t) {
                            return t = s({},
                                this.constructor.Default, e(this._element).data(), t),
                                a.typeCheckConfig(fe, t, this.constructor.DefaultType),
                                t
                        },
                        n._getMenuElement = function() {
                            if (!this._menu) {
                                var e = t._getParentFromElement(this._element);
                                e && (this._menu = e.querySelector(Me))
                            }
                            return this._menu
                        },
                        n._getPlacement = function() {
                            var t = e(this._element.parentNode),
                                n = Pe;
                            return t.hasClass(De) ? (n = Ie, e(this._menu).hasClass(xe) && (n = Ne)) : t.hasClass(ke) ? n = je: t.hasClass(Ce) ? n = Ye: e(this._menu).hasClass(xe) && (n = Le),
                                n
                        },
                        n._detectNavbar = function() {
                            return e(this._element).closest(".navbar").length > 0
                        },
                        n._getOffset = function() {
                            var t = this,
                                e = {};
                            return "function" == typeof this._config.offset ? e.fn = function(e) {
                                return e.offsets = s({},
                                    e.offsets, t._config.offset(e.offsets, t._element) || {}),
                                    e
                            }: e.offset = this._config.offset,
                                e
                        },
                        n._getPopperConfig = function() {
                            var t = {
                                placement: this._getPlacement(),
                                modifiers: {
                                    offset: this._getOffset(),
                                    flip: {
                                        enabled: this._config.flip
                                    },
                                    preventOverflow: {
                                        boundariesElement: this._config.boundary
                                    }
                                }
                            };
                            return "static" === this._config.display && (t.modifiers.applyStyle = {
                                enabled: !1
                            }),
                                t
                        },
                        t._jQueryInterface = function(n) {
                            return this.each(function() {
                                var i = e(this).data(pe);
                                if (i || (i = new t(this, "object" == typeof n ? n: null), e(this).data(pe, i)), "string" == typeof n) {
                                    if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                                    i[n]()
                                }
                            })
                        },
                        t._clearMenus = function(n) {
                            if (!n || 3 !== n.which && ("keyup" !== n.type || 9 === n.which)) for (var i = [].slice.call(document.querySelectorAll(Se)), s = 0, o = i.length; s < o; s++) {
                                var r = t._getParentFromElement(i[s]),
                                    a = e(i[s]).data(pe),
                                    l = {
                                        relatedTarget: i[s]
                                    };
                                if (n && "click" === n.type && (l.clickEvent = n), a) {
                                    var c = a._menu;
                                    if (e(r).hasClass(we) && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "keyup" === n.type && 9 === n.which) && e.contains(r, n.target))) {
                                        var h = e.Event(be.HIDE, l);
                                        e(r).trigger(h),
                                        h.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), i[s].setAttribute("aria-expanded", "false"), e(c).removeClass(we), e(r).removeClass(we).trigger(e.Event(be.HIDDEN, l)))
                                    }
                                }
                            }
                        },
                        t._getParentFromElement = function(t) {
                            var e, n = a.getSelectorFromElement(t);
                            return n && (e = document.querySelector(n)),
                            e || t.parentNode
                        },
                        t._dataApiKeydownHandler = function(n) {
                            if ((/input|textarea/i.test(n.target.tagName) ? !(32 === n.which || 27 !== n.which && (40 !== n.which && 38 !== n.which || e(n.target).closest(Me).length)) : ye.test(n.which)) && (n.preventDefault(), n.stopPropagation(), !this.disabled && !e(this).hasClass(_e))) {
                                var i = t._getParentFromElement(this),
                                    s = e(i).hasClass(we);
                                if (s && (!s || 27 !== n.which && 32 !== n.which)) {
                                    var o = [].slice.call(i.querySelectorAll(Oe));
                                    if (0 !== o.length) {
                                        var r = o.indexOf(n.target);
                                        38 === n.which && r > 0 && r--,
                                        40 === n.which && r < o.length - 1 && r++,
                                        r < 0 && (r = 0),
                                            o[r].focus()
                                    }
                                } else {
                                    if (27 === n.which) {
                                        var a = i.querySelector(Se);
                                        e(a).trigger("focus")
                                    }
                                    e(this).trigger("click")
                                }
                            }
                        },
                        i(t, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.3.1"
                            }
                        },
                            {
                                key: "Default",
                                get: function() {
                                    return He
                                }
                            },
                            {
                                key: "DefaultType",
                                get: function() {
                                    return $e
                                }
                            }]),
                        t
                } ();
            e(document).on(be.KEYDOWN_DATA_API, Se, Re._dataApiKeydownHandler).on(be.KEYDOWN_DATA_API, Me, Re._dataApiKeydownHandler).on(be.CLICK_DATA_API + " " + be.KEYUP_DATA_API, Re._clearMenus).on(be.CLICK_DATA_API, Se,
                function(t) {
                    t.preventDefault(),
                        t.stopPropagation(),
                        Re._jQueryInterface.call(e(this), "toggle")
                }).on(be.CLICK_DATA_API, Ee,
                function(t) {
                    t.stopPropagation()
                }),
                e.fn[fe] = Re._jQueryInterface,
                e.fn[fe].Constructor = Re,
                e.fn[fe].noConflict = function() {
                    return e.fn[fe] = ve,
                        Re._jQueryInterface
                };
            var We = "modal",
                Ue = "bs.modal",
                Fe = "." + Ue,
                qe = e.fn[We],
                Ve = {
                    backdrop: !0,
                    keyboard: !0,
                    focus: !0,
                    show: !0
                },
                Be = {
                    backdrop: "(boolean|string)",
                    keyboard: "boolean",
                    focus: "boolean",
                    show: "boolean"
                },
                ze = {
                    HIDE: "hide" + Fe,
                    HIDDEN: "hidden" + Fe,
                    SHOW: "show" + Fe,
                    SHOWN: "shown" + Fe,
                    FOCUSIN: "focusin" + Fe,
                    RESIZE: "resize" + Fe,
                    CLICK_DISMISS: "click.dismiss" + Fe,
                    KEYDOWN_DISMISS: "keydown.dismiss" + Fe,
                    MOUSEUP_DISMISS: "mouseup.dismiss" + Fe,
                    MOUSEDOWN_DISMISS: "mousedown.dismiss" + Fe,
                    CLICK_DATA_API: "click" + Fe + ".data-api"
                },
                Ge = "modal-dialog-scrollable",
                Ke = "modal-scrollbar-measure",
                Qe = "modal-backdrop",
                Ze = "modal-open",
                Xe = "fade",
                Je = "show",
                tn = {
                    DIALOG: ".modal-dialog",
                    MODAL_BODY: ".modal-body",
                    DATA_TOGGLE: '[data-toggle="modal"]',
                    DATA_DISMISS: '[data-dismiss="modal"]',
                    FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                    STICKY_CONTENT: ".sticky-top"
                },
                en = function() {
                    function t(t, e) {
                        this._config = this._getConfig(e),
                            this._element = t,
                            this._dialog = t.querySelector(tn.DIALOG),
                            this._backdrop = null,
                            this._isShown = !1,
                            this._isBodyOverflowing = !1,
                            this._ignoreBackdropClick = !1,
                            this._isTransitioning = !1,
                            this._scrollbarWidth = 0
                    }
                    var n = t.prototype;
                    return n.toggle = function(t) {
                        return this._isShown ? this.hide() : this.show(t)
                    },
                        n.show = function(t) {
                            var n = this;
                            if (!this._isShown && !this._isTransitioning) {
                                e(this._element).hasClass(Xe) && (this._isTransitioning = !0);
                                var i = e.Event(ze.SHOW, {
                                    relatedTarget: t
                                });
                                e(this._element).trigger(i),
                                this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(ze.CLICK_DISMISS, tn.DATA_DISMISS,
                                    function(t) {
                                        return n.hide(t)
                                    }), e(this._dialog).on(ze.MOUSEDOWN_DISMISS,
                                    function() {
                                        e(n._element).one(ze.MOUSEUP_DISMISS,
                                            function(t) {
                                                e(t.target).is(n._element) && (n._ignoreBackdropClick = !0)
                                            })
                                    }), this._showBackdrop(function() {
                                    return n._showElement(t)
                                }))
                            }
                        },
                        n.hide = function(t) {
                            var n = this;
                            if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
                                var i = e.Event(ze.HIDE);
                                if (e(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                                    this._isShown = !1;
                                    var s = e(this._element).hasClass(Xe);
                                    if (s && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off(ze.FOCUSIN), e(this._element).removeClass(Je), e(this._element).off(ze.CLICK_DISMISS), e(this._dialog).off(ze.MOUSEDOWN_DISMISS), s) {
                                        var o = a.getTransitionDurationFromElement(this._element);
                                        e(this._element).one(a.TRANSITION_END,
                                            function(t) {
                                                return n._hideModal(t)
                                            }).emulateTransitionEnd(o)
                                    } else this._hideModal()
                                }
                            }
                        },
                        n.dispose = function() { [window, this._element, this._dialog].forEach(function(t) {
                            return e(t).off(Fe)
                        }),
                            e(document).off(ze.FOCUSIN),
                            e.removeData(this._element, Ue),
                            this._config = null,
                            this._element = null,
                            this._dialog = null,
                            this._backdrop = null,
                            this._isShown = null,
                            this._isBodyOverflowing = null,
                            this._ignoreBackdropClick = null,
                            this._isTransitioning = null,
                            this._scrollbarWidth = null
                        },
                        n.handleUpdate = function() {
                            this._adjustDialog()
                        },
                        n._getConfig = function(t) {
                            return t = s({},
                                Ve, t),
                                a.typeCheckConfig(We, t, Be),
                                t
                        },
                        n._showElement = function(t) {
                            var n = this,
                                i = e(this._element).hasClass(Xe);
                            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
                                this._element.style.display = "block",
                                this._element.removeAttribute("aria-hidden"),
                                this._element.setAttribute("aria-modal", !0),
                                e(this._dialog).hasClass(Ge) ? this._dialog.querySelector(tn.MODAL_BODY).scrollTop = 0 : this._element.scrollTop = 0,
                            i && a.reflow(this._element),
                                e(this._element).addClass(Je),
                            this._config.focus && this._enforceFocus();
                            var s = e.Event(ze.SHOWN, {
                                    relatedTarget: t
                                }),
                                o = function() {
                                    n._config.focus && n._element.focus(),
                                        n._isTransitioning = !1,
                                        e(n._element).trigger(s)
                                };
                            if (i) {
                                var r = a.getTransitionDurationFromElement(this._dialog);
                                e(this._dialog).one(a.TRANSITION_END, o).emulateTransitionEnd(r)
                            } else o()
                        },
                        n._enforceFocus = function() {
                            var t = this;
                            e(document).off(ze.FOCUSIN).on(ze.FOCUSIN,
                                function(n) {
                                    document !== n.target && t._element !== n.target && 0 === e(t._element).has(n.target).length && t._element.focus()
                                })
                        },
                        n._setEscapeEvent = function() {
                            var t = this;
                            this._isShown && this._config.keyboard ? e(this._element).on(ze.KEYDOWN_DISMISS,
                                function(e) {
                                    27 === e.which && (e.preventDefault(), t.hide())
                                }) : this._isShown || e(this._element).off(ze.KEYDOWN_DISMISS)
                        },
                        n._setResizeEvent = function() {
                            var t = this;
                            this._isShown ? e(window).on(ze.RESIZE,
                                function(e) {
                                    return t.handleUpdate(e)
                                }) : e(window).off(ze.RESIZE)
                        },
                        n._hideModal = function() {
                            var t = this;
                            this._element.style.display = "none",
                                this._element.setAttribute("aria-hidden", !0),
                                this._element.removeAttribute("aria-modal"),
                                this._isTransitioning = !1,
                                this._showBackdrop(function() {
                                    e(document.body).removeClass(Ze),
                                        t._resetAdjustments(),
                                        t._resetScrollbar(),
                                        e(t._element).trigger(ze.HIDDEN)
                                })
                        },
                        n._removeBackdrop = function() {
                            this._backdrop && (e(this._backdrop).remove(), this._backdrop = null)
                        },
                        n._showBackdrop = function(t) {
                            var n = this,
                                i = e(this._element).hasClass(Xe) ? Xe: "";
                            if (this._isShown && this._config.backdrop) {
                                if (this._backdrop = document.createElement("div"), this._backdrop.className = Qe, i && this._backdrop.classList.add(i), e(this._backdrop).appendTo(document.body), e(this._element).on(ze.CLICK_DISMISS,
                                    function(t) {
                                        n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                                    }), i && a.reflow(this._backdrop), e(this._backdrop).addClass(Je), !t) return;
                                if (!i) return void t();
                                var s = a.getTransitionDurationFromElement(this._backdrop);
                                e(this._backdrop).one(a.TRANSITION_END, t).emulateTransitionEnd(s)
                            } else if (!this._isShown && this._backdrop) {
                                e(this._backdrop).removeClass(Je);
                                var o = function() {
                                    n._removeBackdrop(),
                                    t && t()
                                };
                                if (e(this._element).hasClass(Xe)) {
                                    var r = a.getTransitionDurationFromElement(this._backdrop);
                                    e(this._backdrop).one(a.TRANSITION_END, o).emulateTransitionEnd(r)
                                } else o()
                            } else t && t()
                        },
                        n._adjustDialog = function() {
                            var t = this._element.scrollHeight > document.documentElement.clientHeight; ! this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
                            this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                        },
                        n._resetAdjustments = function() {
                            this._element.style.paddingLeft = "",
                                this._element.style.paddingRight = ""
                        },
                        n._checkScrollbar = function() {
                            var t = document.body.getBoundingClientRect();
                            this._isBodyOverflowing = t.left + t.right < window.innerWidth,
                                this._scrollbarWidth = this._getScrollbarWidth()
                        },
                        n._setScrollbar = function() {
                            var t = this;
                            if (this._isBodyOverflowing) {
                                var n = [].slice.call(document.querySelectorAll(tn.FIXED_CONTENT)),
                                    i = [].slice.call(document.querySelectorAll(tn.STICKY_CONTENT));
                                e(n).each(function(n, i) {
                                    var s = i.style.paddingRight,
                                        o = e(i).css("padding-right");
                                    e(i).data("padding-right", s).css("padding-right", parseFloat(o) + t._scrollbarWidth + "px")
                                }),
                                    e(i).each(function(n, i) {
                                        var s = i.style.marginRight,
                                            o = e(i).css("margin-right");
                                        e(i).data("margin-right", s).css("margin-right", parseFloat(o) - t._scrollbarWidth + "px")
                                    });
                                var s = document.body.style.paddingRight,
                                    o = e(document.body).css("padding-right");
                                e(document.body).data("padding-right", s).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px")
                            }
                            e(document.body).addClass(Ze)
                        },
                        n._resetScrollbar = function() {
                            var t = [].slice.call(document.querySelectorAll(tn.FIXED_CONTENT));
                            e(t).each(function(t, n) {
                                var i = e(n).data("padding-right");
                                e(n).removeData("padding-right"),
                                    n.style.paddingRight = i || ""
                            });
                            var n = [].slice.call(document.querySelectorAll("" + tn.STICKY_CONTENT));
                            e(n).each(function(t, n) {
                                var i = e(n).data("margin-right");
                                void 0 !== i && e(n).css("margin-right", i).removeData("margin-right")
                            });
                            var i = e(document.body).data("padding-right");
                            e(document.body).removeData("padding-right"),
                                document.body.style.paddingRight = i || ""
                        },
                        n._getScrollbarWidth = function() {
                            var t = document.createElement("div");
                            t.className = Ke,
                                document.body.appendChild(t);
                            var e = t.getBoundingClientRect().width - t.clientWidth;
                            return document.body.removeChild(t),
                                e
                        },
                        t._jQueryInterface = function(n, i) {
                            return this.each(function() {
                                var o = e(this).data(Ue),
                                    r = s({},
                                        Ve, e(this).data(), "object" == typeof n && n ? n: {});
                                if (o || (o = new t(this, r), e(this).data(Ue, o)), "string" == typeof n) {
                                    if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                                    o[n](i)
                                } else r.show && o.show(i)
                            })
                        },
                        i(t, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.3.1"
                            }
                        },
                            {
                                key: "Default",
                                get: function() {
                                    return Ve
                                }
                            }]),
                        t
                } ();
            e(document).on(ze.CLICK_DATA_API, tn.DATA_TOGGLE,
                function(t) {
                    var n, i = this,
                        o = a.getSelectorFromElement(this);
                    o && (n = document.querySelector(o));
                    var r = e(n).data(Ue) ? "toggle": s({},
                        e(n).data(), e(this).data());
                    "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
                    var l = e(n).one(ze.SHOW,
                        function(t) {
                            t.isDefaultPrevented() || l.one(ze.HIDDEN,
                                function() {
                                    e(i).is(":visible") && i.focus()
                                })
                        });
                    en._jQueryInterface.call(e(n), r, this)
                }),
                e.fn[We] = en._jQueryInterface,
                e.fn[We].Constructor = en,
                e.fn[We].noConflict = function() {
                    return e.fn[We] = qe,
                        en._jQueryInterface
                };
            var nn = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
                sn = {
                    "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                    a: ["target", "href", "title", "rel"],
                    area: [],
                    b: [],
                    br: [],
                    col: [],
                    code: [],
                    div: [],
                    em: [],
                    hr: [],
                    h1: [],
                    h2: [],
                    h3: [],
                    h4: [],
                    h5: [],
                    h6: [],
                    i: [],
                    img: ["src", "alt", "title", "width", "height"],
                    li: [],
                    ol: [],
                    p: [],
                    pre: [],
                    s: [],
                    small: [],
                    span: [],
                    sub: [],
                    sup: [],
                    strong: [],
                    u: [],
                    ul: []
                },
                on = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/ ? #] * ( ? :[/?#]|$))/gi, rn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/] += *$ / i;
            function an(t, e, n) {
                if (0 === t.length) return t;
                if (n && "function" == typeof n) return n(t);
                for (var i = (new window.DOMParser).parseFromString(t, "text/html"), s = Object.keys(e), o = [].slice.call(i.body.querySelectorAll("*")), r = function(t, n) {
                        var i = o[t],
                            r = i.nodeName.toLowerCase();
                        if ( - 1 === s.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i),
                            "continue";
                        var a = [].slice.call(i.attributes),
                            l = [].concat(e["*"] || [], e[r] || []);
                        a.forEach(function(t) { (function(t, e) {
                            var n = t.nodeName.toLowerCase();
                            if ( - 1 !== e.indexOf(n)) return - 1 === nn.indexOf(n) || Boolean(t.nodeValue.match(on) || t.nodeValue.match(rn));
                            for (var i = e.filter(function(t) {
                                return t instanceof RegExp
                            }), s = 0, o = i.length; s < o; s++) if (n.match(i[s])) return ! 0;
                            return ! 1
                        })(t, l) || i.removeAttribute(t.nodeName)
                        })
                    },
                         a = 0, l = o.length; a < l; a++) r(a);
                return i.body.innerHTML
            }
            var ln = "tooltip",
                cn = "bs.tooltip",
                hn = "." + cn,
                un = e.fn[ln], dn = "bs-tooltip", fn = new RegExp("(^|\\s)" + dn + "\\S+", "g"), pn = ["sanitize", "whiteList", "sanitizeFn"], mn = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "(number|string|function)",
                    container: "(string|element|boolean)",
                    fallbackPlacement: "(string|array)",
                    boundary: "(string|element)",
                    sanitize: "boolean",
                    sanitizeFn: "(null|function)",
                    whiteList: "object"
                },
                gn = {
                    AUTO: "auto",
                    TOP: "top",
                    RIGHT: "right",
                    BOTTOM: "bottom",
                    LEFT: "left"
                },
                vn = {
                    animation: !0,
                    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    selector: !1,
                    placement: "top",
                    offset: 0,
                    container: !1,
                    fallbackPlacement: "flip",
                    boundary: "scrollParent",
                    sanitize: !0,
                    sanitizeFn: null,
                    whiteList: sn
                },
                yn = "show", bn = "out", _n = {
                    HIDE: "hide" + hn,
                    HIDDEN: "hidden" + hn,
                    SHOW: "show" + hn,
                    SHOWN: "shown" + hn,
                    INSERTED: "inserted" + hn,
                    CLICK: "click" + hn,
                    FOCUSIN: "focusin" + hn,
                    FOCUSOUT: "focusout" + hn,
                    MOUSEENTER: "mouseenter" + hn,
                    MOUSELEAVE: "mouseleave" + hn
                },
                wn = "fade", Dn = "show", kn = ".tooltip-inner", Cn = ".arrow", xn = "hover", Tn = "focus", Sn = "click", En = "manual", Mn = function() {
                    function t(t, e) {
                        if (void 0 === de) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                        this._isEnabled = !0,
                            this._timeout = 0,
                            this._hoverState = "",
                            this._activeTrigger = {},
                            this._popper = null,
                            this.element = t,
                            this.config = this._getConfig(e),
                            this.tip = null,
                            this._setListeners()
                    }
                    var n = t.prototype;
                    return n.enable = function() {
                        this._isEnabled = !0
                    },
                        n.disable = function() {
                            this._isEnabled = !1
                        },
                        n.toggleEnabled = function() {
                            this._isEnabled = !this._isEnabled
                        },
                        n.toggle = function(t) {
                            if (this._isEnabled) if (t) {
                                var n = this.constructor.DATA_KEY,
                                    i = e(t.currentTarget).data(n);
                                i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)),
                                    i._activeTrigger.click = !i._activeTrigger.click,
                                    i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                            } else {
                                if (e(this.getTipElement()).hasClass(Dn)) return void this._leave(null, this);
                                this._enter(null, this)
                            }
                        },
                        n.dispose = function() {
                            clearTimeout(this._timeout),
                                e.removeData(this.element, this.constructor.DATA_KEY),
                                e(this.element).off(this.constructor.EVENT_KEY),
                                e(this.element).closest(".modal").off("hide.bs.modal"),
                            this.tip && e(this.tip).remove(),
                                this._isEnabled = null,
                                this._timeout = null,
                                this._hoverState = null,
                                this._activeTrigger = null,
                            null !== this._popper && this._popper.destroy(),
                                this._popper = null,
                                this.element = null,
                                this.config = null,
                                this.tip = null
                        },
                        n.show = function() {
                            var t = this;
                            if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");
                            var n = e.Event(this.constructor.Event.SHOW);
                            if (this.isWithContent() && this._isEnabled) {
                                e(this.element).trigger(n);
                                var i = a.findShadowRoot(this.element),
                                    s = e.contains(null !== i ? i: this.element.ownerDocument.documentElement, this.element);
                                if (n.isDefaultPrevented() || !s) return;
                                var o = this.getTipElement(),
                                    r = a.getUID(this.constructor.NAME);
                                o.setAttribute("id", r),
                                    this.element.setAttribute("aria-describedby", r),
                                    this.setContent(),
                                this.config.animation && e(o).addClass(wn);
                                var l = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                                    c = this._getAttachment(l);
                                this.addAttachmentClass(c);
                                var h = this._getContainer();
                                e(o).data(this.constructor.DATA_KEY, this),
                                e.contains(this.element.ownerDocument.documentElement, this.tip) || e(o).appendTo(h),
                                    e(this.element).trigger(this.constructor.Event.INSERTED),
                                    this._popper = new de(this.element, o, {
                                        placement: c,
                                        modifiers: {
                                            offset: this._getOffset(),
                                            flip: {
                                                behavior: this.config.fallbackPlacement
                                            },
                                            arrow: {
                                                element: Cn
                                            },
                                            preventOverflow: {
                                                boundariesElement: this.config.boundary
                                            }
                                        },
                                        onCreate: function(e) {
                                            e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                                        },
                                        onUpdate: function(e) {
                                            return t._handlePopperPlacementChange(e)
                                        }
                                    }),
                                    e(o).addClass(Dn),
                                "ontouchstart" in document.documentElement && e(document.body).children().on("mouseover", null, e.noop);
                                var u = function() {
                                    t.config.animation && t._fixTransition();
                                    var n = t._hoverState;
                                    t._hoverState = null,
                                        e(t.element).trigger(t.constructor.Event.SHOWN),
                                    n === bn && t._leave(null, t)
                                };
                                if (e(this.tip).hasClass(wn)) {
                                    var d = a.getTransitionDurationFromElement(this.tip);
                                    e(this.tip).one(a.TRANSITION_END, u).emulateTransitionEnd(d)
                                } else u()
                            }
                        },
                        n.hide = function(t) {
                            var n = this,
                                i = this.getTipElement(),
                                s = e.Event(this.constructor.Event.HIDE),
                                o = function() {
                                    n._hoverState !== yn && i.parentNode && i.parentNode.removeChild(i),
                                        n._cleanTipClass(),
                                        n.element.removeAttribute("aria-describedby"),
                                        e(n.element).trigger(n.constructor.Event.HIDDEN),
                                    null !== n._popper && n._popper.destroy(),
                                    t && t()
                                };
                            if (e(this.element).trigger(s), !s.isDefaultPrevented()) {
                                if (e(i).removeClass(Dn), "ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), this._activeTrigger[Sn] = !1, this._activeTrigger[Tn] = !1, this._activeTrigger[xn] = !1, e(this.tip).hasClass(wn)) {
                                    var r = a.getTransitionDurationFromElement(i);
                                    e(i).one(a.TRANSITION_END, o).emulateTransitionEnd(r)
                                } else o();
                                this._hoverState = ""
                            }
                        },
                        n.update = function() {
                            null !== this._popper && this._popper.scheduleUpdate()
                        },
                        n.isWithContent = function() {
                            return Boolean(this.getTitle())
                        },
                        n.addAttachmentClass = function(t) {
                            e(this.getTipElement()).addClass(dn + "-" + t)
                        },
                        n.getTipElement = function() {
                            return this.tip = this.tip || e(this.config.template)[0],
                                this.tip
                        },
                        n.setContent = function() {
                            var t = this.getTipElement();
                            this.setElementContent(e(t.querySelectorAll(kn)), this.getTitle()),
                                e(t).removeClass(wn + " " + Dn)
                        },
                        n.setElementContent = function(t, n) {
                            "object" != typeof n || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = an(n, this.config.whiteList, this.config.sanitizeFn)), t.html(n)) : t.text(n) : this.config.html ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text())
                        },
                        n.getTitle = function() {
                            var t = this.element.getAttribute("data-original-title");
                            return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
                                t
                        },
                        n._getOffset = function() {
                            var t = this,
                                e = {};
                            return "function" == typeof this.config.offset ? e.fn = function(e) {
                                return e.offsets = s({},
                                    e.offsets, t.config.offset(e.offsets, t.element) || {}),
                                    e
                            }: e.offset = this.config.offset,
                                e
                        },
                        n._getContainer = function() {
                            return ! 1 === this.config.container ? document.body: a.isElement(this.config.container) ? e(this.config.container) : e(document).find(this.config.container)
                        },
                        n._getAttachment = function(t) {
                            return gn[t.toUpperCase()]
                        },
                        n._setListeners = function() {
                            var t = this;
                            this.config.trigger.split(" ").forEach(function(n) {
                                if ("click" === n) e(t.element).on(t.constructor.Event.CLICK, t.config.selector,
                                    function(e) {
                                        return t.toggle(e)
                                    });
                                else if (n !== En) {
                                    var i = n === xn ? t.constructor.Event.MOUSEENTER: t.constructor.Event.FOCUSIN,
                                        s = n === xn ? t.constructor.Event.MOUSELEAVE: t.constructor.Event.FOCUSOUT;
                                    e(t.element).on(i, t.config.selector,
                                        function(e) {
                                            return t._enter(e)
                                        }).on(s, t.config.selector,
                                        function(e) {
                                            return t._leave(e)
                                        })
                                }
                            }),
                                e(this.element).closest(".modal").on("hide.bs.modal",
                                    function() {
                                        t.element && t.hide()
                                    }),
                                this.config.selector ? this.config = s({},
                                    this.config, {
                                        trigger: "manual",
                                        selector: ""
                                    }) : this._fixTitle()
                        },
                        n._fixTitle = function() {
                            var t = typeof this.element.getAttribute("data-original-title"); (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                        },
                        n._enter = function(t, n) {
                            var i = this.constructor.DATA_KEY; (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)),
                            t && (n._activeTrigger["focusin" === t.type ? Tn: xn] = !0),
                                e(n.getTipElement()).hasClass(Dn) || n._hoverState === yn ? n._hoverState = yn: (clearTimeout(n._timeout), n._hoverState = yn, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function() {
                                        n._hoverState === yn && n.show()
                                    },
                                    n.config.delay.show) : n.show())
                        },
                        n._leave = function(t, n) {
                            var i = this.constructor.DATA_KEY; (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)),
                            t && (n._activeTrigger["focusout" === t.type ? Tn: xn] = !1),
                            n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = bn, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function() {
                                    n._hoverState === bn && n.hide()
                                },
                                n.config.delay.hide) : n.hide())
                        },
                        n._isWithActiveTrigger = function() {
                            for (var t in this._activeTrigger) if (this._activeTrigger[t]) return ! 0;
                            return ! 1
                        },
                        n._getConfig = function(t) {
                            var n = e(this.element).data();
                            return Object.keys(n).forEach(function(t) { - 1 !== pn.indexOf(t) && delete n[t]
                            }),
                            "number" == typeof(t = s({},
                                this.constructor.Default, n, "object" == typeof t && t ? t: {})).delay && (t.delay = {
                                show: t.delay,
                                hide: t.delay
                            }),
                            "number" == typeof t.title && (t.title = t.title.toString()),
                            "number" == typeof t.content && (t.content = t.content.toString()),
                                a.typeCheckConfig(ln, t, this.constructor.DefaultType),
                            t.sanitize && (t.template = an(t.template, t.whiteList, t.sanitizeFn)),
                                t
                        },
                        n._getDelegateConfig = function() {
                            var t = {};
                            if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                            return t
                        },
                        n._cleanTipClass = function() {
                            var t = e(this.getTipElement()),
                                n = t.attr("class").match(fn);
                            null !== n && n.length && t.removeClass(n.join(""))
                        },
                        n._handlePopperPlacementChange = function(t) {
                            var e = t.instance;
                            this.tip = e.popper,
                                this._cleanTipClass(),
                                this.addAttachmentClass(this._getAttachment(t.placement))
                        },
                        n._fixTransition = function() {
                            var t = this.getTipElement(),
                                n = this.config.animation;
                            null === t.getAttribute("x-placement") && (e(t).removeClass(wn), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
                        },
                        t._jQueryInterface = function(n) {
                            return this.each(function() {
                                var i = e(this).data(cn),
                                    s = "object" == typeof n && n;
                                if ((i || !/dispose|hide/.test(n)) && (i || (i = new t(this, s), e(this).data(cn, i)), "string" == typeof n)) {
                                    if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                                    i[n]()
                                }
                            })
                        },
                        i(t, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.3.1"
                            }
                        },
                            {
                                key: "Default",
                                get: function() {
                                    return vn
                                }
                            },
                            {
                                key: "NAME",
                                get: function() {
                                    return ln
                                }
                            },
                            {
                                key: "DATA_KEY",
                                get: function() {
                                    return cn
                                }
                            },
                            {
                                key: "Event",
                                get: function() {
                                    return _n
                                }
                            },
                            {
                                key: "EVENT_KEY",
                                get: function() {
                                    return hn
                                }
                            },
                            {
                                key: "DefaultType",
                                get: function() {
                                    return mn
                                }
                            }]),
                        t
                } (); e.fn[ln] = Mn._jQueryInterface, e.fn[ln].Constructor = Mn, e.fn[ln].noConflict = function() {
                return e.fn[ln] = un,
                    Mn._jQueryInterface
            };
            var An = "popover",
                On = "bs.popover",
                In = "." + On,
                Nn = e.fn[An], Pn = "bs-popover", Ln = new RegExp("(^|\\s)" + Pn + "\\S+", "g"), jn = s({},
                Mn.Default, {
                    placement: "right",
                    trigger: "click",
                    content: "",
                    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                }), Yn = s({},
                Mn.DefaultType, {
                    content: "(string|element|function)"
                }), Hn = "fade", $n = "show", Rn = ".popover-header", Wn = ".popover-body", Un = {
                    HIDE: "hide" + In,
                    HIDDEN: "hidden" + In,
                    SHOW: "show" + In,
                    SHOWN: "shown" + In,
                    INSERTED: "inserted" + In,
                    CLICK: "click" + In,
                    FOCUSIN: "focusin" + In,
                    FOCUSOUT: "focusout" + In,
                    MOUSEENTER: "mouseenter" + In,
                    MOUSELEAVE: "mouseleave" + In
                },
                Fn = function(t) {
                    var n, s;
                    function o() {
                        return t.apply(this, arguments) || this
                    }
                    s = t,
                        (n = o).prototype = Object.create(s.prototype),
                        n.prototype.constructor = n,
                        n.__proto__ = s;
                    var r = o.prototype;
                    return r.isWithContent = function() {
                        return this.getTitle() || this._getContent()
                    },
                        r.addAttachmentClass = function(t) {
                            e(this.getTipElement()).addClass(Pn + "-" + t)
                        },
                        r.getTipElement = function() {
                            return this.tip = this.tip || e(this.config.template)[0],
                                this.tip
                        },
                        r.setContent = function() {
                            var t = e(this.getTipElement());
                            this.setElementContent(t.find(Rn), this.getTitle());
                            var n = this._getContent();
                            "function" == typeof n && (n = n.call(this.element)),
                                this.setElementContent(t.find(Wn), n),
                                t.removeClass(Hn + " " + $n)
                        },
                        r._getContent = function() {
                            return this.element.getAttribute("data-content") || this.config.content
                        },
                        r._cleanTipClass = function() {
                            var t = e(this.getTipElement()),
                                n = t.attr("class").match(Ln);
                            null !== n && n.length > 0 && t.removeClass(n.join(""))
                        },
                        o._jQueryInterface = function(t) {
                            return this.each(function() {
                                var n = e(this).data(On),
                                    i = "object" == typeof t ? t: null;
                                if ((n || !/dispose|hide/.test(t)) && (n || (n = new o(this, i), e(this).data(On, n)), "string" == typeof t)) {
                                    if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                                    n[t]()
                                }
                            })
                        },
                        i(o, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.3.1"
                            }
                        },
                            {
                                key: "Default",
                                get: function() {
                                    return jn
                                }
                            },
                            {
                                key: "NAME",
                                get: function() {
                                    return An
                                }
                            },
                            {
                                key: "DATA_KEY",
                                get: function() {
                                    return On
                                }
                            },
                            {
                                key: "Event",
                                get: function() {
                                    return Un
                                }
                            },
                            {
                                key: "EVENT_KEY",
                                get: function() {
                                    return In
                                }
                            },
                            {
                                key: "DefaultType",
                                get: function() {
                                    return Yn
                                }
                            }]),
                        o
                } (Mn); e.fn[An] = Fn._jQueryInterface, e.fn[An].Constructor = Fn, e.fn[An].noConflict = function() {
                return e.fn[An] = Nn,
                    Fn._jQueryInterface
            };
            var qn = "scrollspy",
                Vn = "bs.scrollspy",
                Bn = "." + Vn,
                zn = e.fn[qn], Gn = {
                    offset: 10,
                    method: "auto",
                    target: ""
                },
                Kn = {
                    offset: "number",
                    method: "string",
                    target: "(string|element)"
                },
                Qn = {
                    ACTIVATE: "activate" + Bn,
                    SCROLL: "scroll" + Bn,
                    LOAD_DATA_API: "load" + Bn + ".data-api"
                },
                Zn = "dropdown-item", Xn = "active", Jn = {
                    DATA_SPY: '[data-spy="scroll"]',
                    ACTIVE: ".active",
                    NAV_LIST_GROUP: ".nav, .list-group",
                    NAV_LINKS: ".nav-link",
                    NAV_ITEMS: ".nav-item",
                    LIST_ITEMS: ".list-group-item",
                    DROPDOWN: ".dropdown",
                    DROPDOWN_ITEMS: ".dropdown-item",
                    DROPDOWN_TOGGLE: ".dropdown-toggle"
                },
                ti = "offset", ei = "position", ni = function() {
                    function t(t, n) {
                        var i = this;
                        this._element = t,
                            this._scrollElement = "BODY" === t.tagName ? window: t,
                            this._config = this._getConfig(n),
                            this._selector = this._config.target + " " + Jn.NAV_LINKS + "," + this._config.target + " " + Jn.LIST_ITEMS + "," + this._config.target + " " + Jn.DROPDOWN_ITEMS,
                            this._offsets = [],
                            this._targets = [],
                            this._activeTarget = null,
                            this._scrollHeight = 0,
                            e(this._scrollElement).on(Qn.SCROLL,
                                function(t) {
                                    return i._process(t)
                                }),
                            this.refresh(),
                            this._process()
                    }
                    var n = t.prototype;
                    return n.refresh = function() {
                        var t = this,
                            n = this._scrollElement === this._scrollElement.window ? ti: ei,
                            i = "auto" === this._config.method ? n: this._config.method,
                            s = i === ei ? this._getScrollTop() : 0;
                        this._offsets = [],
                            this._targets = [],
                            this._scrollHeight = this._getScrollHeight(),
                            [].slice.call(document.querySelectorAll(this._selector)).map(function(t) {
                                var n, o = a.getSelectorFromElement(t);
                                if (o && (n = document.querySelector(o)), n) {
                                    var r = n.getBoundingClientRect();
                                    if (r.width || r.height) return [e(n)[i]().top + s, o]
                                }
                                return null
                            }).filter(function(t) {
                                return t
                            }).sort(function(t, e) {
                                return t[0] - e[0]
                            }).forEach(function(e) {
                                t._offsets.push(e[0]),
                                    t._targets.push(e[1])
                            })
                    },
                        n.dispose = function() {
                            e.removeData(this._element, Vn),
                                e(this._scrollElement).off(Bn),
                                this._element = null,
                                this._scrollElement = null,
                                this._config = null,
                                this._selector = null,
                                this._offsets = null,
                                this._targets = null,
                                this._activeTarget = null,
                                this._scrollHeight = null
                        },
                        n._getConfig = function(t) {
                            if ("string" != typeof(t = s({},
                                Gn, "object" == typeof t && t ? t: {})).target) {
                                var n = e(t.target).attr("id");
                                n || (n = a.getUID(qn), e(t.target).attr("id", n)),
                                    t.target = "#" + n
                            }
                            return a.typeCheckConfig(qn, t, Kn),
                                t
                        },
                        n._getScrollTop = function() {
                            return this._scrollElement === window ? this._scrollElement.pageYOffset: this._scrollElement.scrollTop
                        },
                        n._getScrollHeight = function() {
                            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                        },
                        n._getOffsetHeight = function() {
                            return this._scrollElement === window ? window.innerHeight: this._scrollElement.getBoundingClientRect().height
                        },
                        n._process = function() {
                            var t = this._getScrollTop() + this._config.offset,
                                e = this._getScrollHeight(),
                                n = this._config.offset + e - this._getOffsetHeight();
                            if (this._scrollHeight !== e && this.refresh(), t >= n) {
                                var i = this._targets[this._targets.length - 1];
                                this._activeTarget !== i && this._activate(i)
                            } else {
                                if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null,
                                    void this._clear();
                                for (var s = this._offsets.length; s--;) {
                                    this._activeTarget !== this._targets[s] && t >= this._offsets[s] && (void 0 === this._offsets[s + 1] || t < this._offsets[s + 1]) && this._activate(this._targets[s])
                                }
                            }
                        },
                        n._activate = function(t) {
                            this._activeTarget = t,
                                this._clear();
                            var n = this._selector.split(",").map(function(e) {
                                    return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                                }),
                                i = e([].slice.call(document.querySelectorAll(n.join(","))));
                            i.hasClass(Zn) ? (i.closest(Jn.DROPDOWN).find(Jn.DROPDOWN_TOGGLE).addClass(Xn), i.addClass(Xn)) : (i.addClass(Xn), i.parents(Jn.NAV_LIST_GROUP).prev(Jn.NAV_LINKS + ", " + Jn.LIST_ITEMS).addClass(Xn), i.parents(Jn.NAV_LIST_GROUP).prev(Jn.NAV_ITEMS).children(Jn.NAV_LINKS).addClass(Xn)),
                                e(this._scrollElement).trigger(Qn.ACTIVATE, {
                                    relatedTarget: t
                                })
                        },
                        n._clear = function() { [].slice.call(document.querySelectorAll(this._selector)).filter(function(t) {
                            return t.classList.contains(Xn)
                        }).forEach(function(t) {
                            return t.classList.remove(Xn)
                        })
                        },
                        t._jQueryInterface = function(n) {
                            return this.each(function() {
                                var i = e(this).data(Vn);
                                if (i || (i = new t(this, "object" == typeof n && n), e(this).data(Vn, i)), "string" == typeof n) {
                                    if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                                    i[n]()
                                }
                            })
                        },
                        i(t, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.3.1"
                            }
                        },
                            {
                                key: "Default",
                                get: function() {
                                    return Gn
                                }
                            }]),
                        t
                } (); e(window).on(Qn.LOAD_DATA_API,
                function() {
                    for (var t = [].slice.call(document.querySelectorAll(Jn.DATA_SPY)), n = t.length; n--;) {
                        var i = e(t[n]);
                        ni._jQueryInterface.call(i, i.data())
                    }
                }), e.fn[qn] = ni._jQueryInterface, e.fn[qn].Constructor = ni, e.fn[qn].noConflict = function() {
                return e.fn[qn] = zn,
                    ni._jQueryInterface
            };
            var ii = "bs.tab",
                si = "." + ii,
                oi = e.fn.tab,
                ri = {
                    HIDE: "hide" + si,
                    HIDDEN: "hidden" + si,
                    SHOW: "show" + si,
                    SHOWN: "shown" + si,
                    CLICK_DATA_API: "click" + si + ".data-api"
                },
                ai = "dropdown-menu", li = "active", ci = "disabled", hi = "fade", ui = "show", di = ".dropdown", fi = ".nav, .list-group", pi = ".active", mi = "> li > .active", gi = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', vi = ".dropdown-toggle", yi = "> .dropdown-menu .active", bi = function() {
                    function t(t) {
                        this._element = t
                    }
                    var n = t.prototype;
                    return n.show = function() {
                        var t = this;
                        if (! (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(li) || e(this._element).hasClass(ci))) {
                            var n, i, s = e(this._element).closest(fi)[0],
                                o = a.getSelectorFromElement(this._element);
                            if (s) {
                                var r = "UL" === s.nodeName || "OL" === s.nodeName ? mi: pi;
                                i = (i = e.makeArray(e(s).find(r)))[i.length - 1]
                            }
                            var l = e.Event(ri.HIDE, {
                                    relatedTarget: this._element
                                }),
                                c = e.Event(ri.SHOW, {
                                    relatedTarget: i
                                });
                            if (i && e(i).trigger(l), e(this._element).trigger(c), !c.isDefaultPrevented() && !l.isDefaultPrevented()) {
                                o && (n = document.querySelector(o)),
                                    this._activate(this._element, s);
                                var h = function() {
                                    var n = e.Event(ri.HIDDEN, {
                                            relatedTarget: t._element
                                        }),
                                        s = e.Event(ri.SHOWN, {
                                            relatedTarget: i
                                        });
                                    e(i).trigger(n),
                                        e(t._element).trigger(s)
                                };
                                n ? this._activate(n, n.parentNode, h) : h()
                            }
                        }
                    },
                        n.dispose = function() {
                            e.removeData(this._element, ii),
                                this._element = null
                        },
                        n._activate = function(t, n, i) {
                            var s = this,
                                o = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? e(n).children(pi) : e(n).find(mi))[0],
                                r = i && o && e(o).hasClass(hi),
                                l = function() {
                                    return s._transitionComplete(t, o, i)
                                };
                            if (o && r) {
                                var c = a.getTransitionDurationFromElement(o);
                                e(o).removeClass(ui).one(a.TRANSITION_END, l).emulateTransitionEnd(c)
                            } else l()
                        },
                        n._transitionComplete = function(t, n, i) {
                            if (n) {
                                e(n).removeClass(li);
                                var s = e(n.parentNode).find(yi)[0];
                                s && e(s).removeClass(li),
                                "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                            }
                            if (e(t).addClass(li), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), a.reflow(t), t.classList.contains(hi) && t.classList.add(ui), t.parentNode && e(t.parentNode).hasClass(ai)) {
                                var o = e(t).closest(di)[0];
                                if (o) {
                                    var r = [].slice.call(o.querySelectorAll(vi));
                                    e(r).addClass(li)
                                }
                                t.setAttribute("aria-expanded", !0)
                            }
                            i && i()
                        },
                        t._jQueryInterface = function(n) {
                            return this.each(function() {
                                var i = e(this),
                                    s = i.data(ii);
                                if (s || (s = new t(this), i.data(ii, s)), "string" == typeof n) {
                                    if (void 0 === s[n]) throw new TypeError('No method named "' + n + '"');
                                    s[n]()
                                }
                            })
                        },
                        i(t, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.3.1"
                            }
                        }]),
                        t
                } (); e(document).on(ri.CLICK_DATA_API, gi,
                function(t) {
                    t.preventDefault(),
                        bi._jQueryInterface.call(e(this), "show")
                }), e.fn.tab = bi._jQueryInterface, e.fn.tab.Constructor = bi, e.fn.tab.noConflict = function() {
                return e.fn.tab = oi,
                    bi._jQueryInterface
            };
            var _i = "toast",
                wi = "bs.toast",
                Di = "." + wi,
                ki = e.fn[_i], Ci = {
                    CLICK_DISMISS: "click.dismiss" + Di,
                    HIDE: "hide" + Di,
                    HIDDEN: "hidden" + Di,
                    SHOW: "show" + Di,
                    SHOWN: "shown" + Di
                },
                xi = "fade", Ti = "hide", Si = "show", Ei = "showing", Mi = {
                    animation: "boolean",
                    autohide: "boolean",
                    delay: "number"
                },
                Ai = {
                    animation: !0,
                    autohide: !0,
                    delay: 500
                },
                Oi = '[data-dismiss="toast"]', Ii = function() {
                    function t(t, e) {
                        this._element = t,
                            this._config = this._getConfig(e),
                            this._timeout = null,
                            this._setListeners()
                    }
                    var n = t.prototype;
                    return n.show = function() {
                        var t = this;
                        e(this._element).trigger(Ci.SHOW),
                        this._config.animation && this._element.classList.add(xi);
                        var n = function() {
                            t._element.classList.remove(Ei),
                                t._element.classList.add(Si),
                                e(t._element).trigger(Ci.SHOWN),
                            t._config.autohide && t.hide()
                        };
                        if (this._element.classList.remove(Ti), this._element.classList.add(Ei), this._config.animation) {
                            var i = a.getTransitionDurationFromElement(this._element);
                            e(this._element).one(a.TRANSITION_END, n).emulateTransitionEnd(i)
                        } else n()
                    },
                        n.hide = function(t) {
                            var n = this;
                            this._element.classList.contains(Si) && (e(this._element).trigger(Ci.HIDE), t ? this._close() : this._timeout = setTimeout(function() {
                                    n._close()
                                },
                                this._config.delay))
                        },
                        n.dispose = function() {
                            clearTimeout(this._timeout),
                                this._timeout = null,
                            this._element.classList.contains(Si) && this._element.classList.remove(Si),
                                e(this._element).off(Ci.CLICK_DISMISS),
                                e.removeData(this._element, wi),
                                this._element = null,
                                this._config = null
                        },
                        n._getConfig = function(t) {
                            return t = s({},
                                Ai, e(this._element).data(), "object" == typeof t && t ? t: {}),
                                a.typeCheckConfig(_i, t, this.constructor.DefaultType),
                                t
                        },
                        n._setListeners = function() {
                            var t = this;
                            e(this._element).on(Ci.CLICK_DISMISS, Oi,
                                function() {
                                    return t.hide(!0)
                                })
                        },
                        n._close = function() {
                            var t = this,
                                n = function() {
                                    t._element.classList.add(Ti),
                                        e(t._element).trigger(Ci.HIDDEN)
                                };
                            if (this._element.classList.remove(Si), this._config.animation) {
                                var i = a.getTransitionDurationFromElement(this._element);
                                e(this._element).one(a.TRANSITION_END, n).emulateTransitionEnd(i)
                            } else n()
                        },
                        t._jQueryInterface = function(n) {
                            return this.each(function() {
                                var i = e(this),
                                    s = i.data(wi);
                                if (s || (s = new t(this, "object" == typeof n && n), i.data(wi, s)), "string" == typeof n) {
                                    if (void 0 === s[n]) throw new TypeError('No method named "' + n + '"');
                                    s[n](this)
                                }
                            })
                        },
                        i(t, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.3.1"
                            }
                        },
                            {
                                key: "DefaultType",
                                get: function() {
                                    return Mi
                                }
                            },
                            {
                                key: "Default",
                                get: function() {
                                    return Ai
                                }
                            }]),
                        t
                } (); e.fn[_i] = Ii._jQueryInterface, e.fn[_i].Constructor = Ii, e.fn[_i].noConflict = function() {
                return e.fn[_i] = ki,
                    Ii._jQueryInterface
            },
                function() {
                    if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
                    var t = e.fn.jquery.split(" ")[0].split(".");
                    if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
                } (), t.Util = a, t.Alert = g, t.Button = O, t.Carousel = tt, t.Collapse = mt, t.Dropdown = Re, t.Modal = en, t.Popover = Fn, t.Scrollspy = ni, t.Tab = bi, t.Toast = Ii, t.Tooltip = Mn, Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }),
    function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.moment = e()
    } (this,
        function() {
            "use strict";
            var t, e;
            function n() {
                return t.apply(null, arguments)
            }
            function i(t) {
                return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
            }
            function s(t) {
                return null != t && "[object Object]" === Object.prototype.toString.call(t)
            }
            function o(t) {
                return void 0 === t
            }
            function r(t) {
                return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t)
            }
            function a(t) {
                return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
            }
            function l(t, e) {
                var n, i = [];
                for (n = 0; n < t.length; ++n) i.push(e(t[n], n));
                return i
            }
            function c(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
            function h(t, e) {
                for (var n in e) c(e, n) && (t[n] = e[n]);
                return c(e, "toString") && (t.toString = e.toString),
                c(e, "valueOf") && (t.valueOf = e.valueOf),
                    t
            }
            function u(t, e, n, i) {
                return Se(t, e, n, i, !0).utc()
            }
            function d(t) {
                return null == t._pf && (t._pf = {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1,
                    parsedDateParts: [],
                    meridiem: null,
                    rfc2822: !1,
                    weekdayMismatch: !1
                }),
                    t._pf
            }
            function f(t) {
                if (null == t._isValid) {
                    var n = d(t),
                        i = e.call(n.parsedDateParts,
                            function(t) {
                                return null != t
                            }),
                        s = !isNaN(t._d.getTime()) && n.overflow < 0 && !n.empty && !n.invalidMonth && !n.invalidWeekday && !n.weekdayMismatch && !n.nullInput && !n.invalidFormat && !n.userInvalidated && (!n.meridiem || n.meridiem && i);
                    if (t._strict && (s = s && 0 === n.charsLeftOver && 0 === n.unusedTokens.length && void 0 === n.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return s;
                    t._isValid = s
                }
                return t._isValid
            }
            function p(t) {
                var e = u(NaN);
                return null != t ? h(d(e), t) : d(e).userInvalidated = !0,
                    e
            }
            e = Array.prototype.some ? Array.prototype.some: function(t) {
                for (var e = Object(this), n = e.length >>> 0, i = 0; i < n; i++) if (i in e && t.call(this, e[i], i, e)) return ! 0;
                return ! 1
            };
            var m = n.momentProperties = [];
            function g(t, e) {
                var n, i, s;
                if (o(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), o(e._i) || (t._i = e._i), o(e._f) || (t._f = e._f), o(e._l) || (t._l = e._l), o(e._strict) || (t._strict = e._strict), o(e._tzm) || (t._tzm = e._tzm), o(e._isUTC) || (t._isUTC = e._isUTC), o(e._offset) || (t._offset = e._offset), o(e._pf) || (t._pf = d(e)), o(e._locale) || (t._locale = e._locale), m.length > 0) for (n = 0; n < m.length; n++) o(s = e[i = m[n]]) || (t[i] = s);
                return t
            }
            var v = !1;
            function y(t) {
                g(this, t),
                    this._d = new Date(null != t._d ? t._d.getTime() : NaN),
                this.isValid() || (this._d = new Date(NaN)),
                !1 === v && (v = !0, n.updateOffset(this), v = !1)
            }
            function b(t) {
                return t instanceof y || null != t && null != t._isAMomentObject
            }
            function _(t) {
                return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
            }
            function w(t) {
                var e = +t,
                    n = 0;
                return 0 !== e && isFinite(e) && (n = _(e)),
                    n
            }
            function D(t, e, n) {
                var i, s = Math.min(t.length, e.length),
                    o = Math.abs(t.length - e.length),
                    r = 0;
                for (i = 0; i < s; i++)(n && t[i] !== e[i] || !n && w(t[i]) !== w(e[i])) && r++;
                return r + o
            }
            function k(t) { ! 1 === n.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
            }
            function C(t, e) {
                var i = !0;
                return h(function() {
                        if (null != n.deprecationHandler && n.deprecationHandler(null, t), i) {
                            for (var s, o = [], r = 0; r < arguments.length; r++) {
                                if (s = "", "object" == typeof arguments[r]) {
                                    for (var a in s += "\n[" + r + "] ",
                                        arguments[0]) s += a + ": " + arguments[0][a] + ", ";
                                    s = s.slice(0, -2)
                                } else s = arguments[r];
                                o.push(s)
                            }
                            k(t + "\nArguments: " + Array.prototype.slice.call(o).join("") + "\n" + (new Error).stack),
                                i = !1
                        }
                        return e.apply(this, arguments)
                    },
                    e)
            }
            var x, T = {};
            function S(t, e) {
                null != n.deprecationHandler && n.deprecationHandler(t, e),
                T[t] || (k(e), T[t] = !0)
            }
            function E(t) {
                return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
            }
            function M(t, e) {
                var n, i = h({},
                    t);
                for (n in e) c(e, n) && (s(t[n]) && s(e[n]) ? (i[n] = {},
                    h(i[n], t[n]), h(i[n], e[n])) : null != e[n] ? i[n] = e[n] : delete i[n]);
                for (n in t) c(t, n) && !c(e, n) && s(t[n]) && (i[n] = h({},
                    i[n]));
                return i
            }
            function A(t) {
                null != t && this.set(t)
            }
            n.suppressDeprecationWarnings = !1,
                n.deprecationHandler = null,
                x = Object.keys ? Object.keys: function(t) {
                    var e, n = [];
                    for (e in t) c(t, e) && n.push(e);
                    return n
                };
            var O = {};
            function I(t, e) {
                var n = t.toLowerCase();
                O[n] = O[n + "s"] = O[e] = t
            }
            function N(t) {
                return "string" == typeof t ? O[t] || O[t.toLowerCase()] : void 0
            }
            function P(t) {
                var e, n, i = {};
                for (n in t) c(t, n) && (e = N(n)) && (i[e] = t[n]);
                return i
            }
            var L = {};
            function j(t, e) {
                L[t] = e
            }
            function Y(t, e, n) {
                var i = "" + Math.abs(t),
                    s = e - i.length;
                return (t >= 0 ? n ? "+": "": "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + i
            }
            var H = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                $ = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                R = {},
                W = {};
            function U(t, e, n, i) {
                var s = i;
                "string" == typeof i && (s = function() {
                    return this[i]()
                }),
                t && (W[t] = s),
                e && (W[e[0]] = function() {
                    return Y(s.apply(this, arguments), e[1], e[2])
                }),
                n && (W[n] = function() {
                    return this.localeData().ordinal(s.apply(this, arguments), t)
                })
            }
            function F(t, e) {
                return t.isValid() ? (e = q(e, t.localeData()), R[e] = R[e] ||
                    function(t) {
                        var e, n, i, s = t.match(H);
                        for (e = 0, n = s.length; e < n; e++) W[s[e]] ? s[e] = W[s[e]] : s[e] = (i = s[e]).match(/\[[\s\S]/) ? i.replace(/^\[|\]$/g, "") : i.replace(/\\/g, "");
                        return function(e) {
                            var i, o = "";
                            for (i = 0; i < n; i++) o += E(s[i]) ? s[i].call(e, t) : s[i];
                            return o
                        }
                    } (e), R[e](t)) : t.localeData().invalidDate()
            }
            function q(t, e) {
                var n = 5;
                function i(t) {
                    return e.longDateFormat(t) || t
                }
                for ($.lastIndex = 0; n >= 0 && $.test(t);) t = t.replace($, i),
                    $.lastIndex = 0,
                    n -= 1;
                return t
            }
            var V = /\d/,
                B = /\d\d/,
                z = /\d{3}/,
                G = /\d{4}/,
                K = /[+-]?\d{6}/,
                Q = /\d\d?/,
                Z = /\d\d\d\d?/,
                X = /\d\d\d\d\d\d?/,
                J = /\d{1,3}/,
                tt = /\d{1,4}/,
                et = /[+-]?\d{1,6}/,
                nt = /\d+/,
                it = /[+-]?\d+/,
                st = /Z|[+-]\d\d:?\d\d/gi,
                ot = /Z|[+-]\d\d(?::?\d\d)?/gi,
                rt = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
                at = {};
            function lt(t, e, n) {
                at[t] = E(e) ? e: function(t, i) {
                    return t && n ? n: e
                }
            }
            function ct(t, e) {
                return c(at, t) ? at[t](e._strict, e._locale) : new RegExp(ht(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                    function(t, e, n, i, s) {
                        return e || n || i || s
                    })))
            }
            function ht(t) {
                return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }
            var ut = {};
            function dt(t, e) {
                var n, i = e;
                for ("string" == typeof t && (t = [t]), r(e) && (i = function(t, n) {
                    n[e] = w(t)
                }), n = 0; n < t.length; n++) ut[t[n]] = i
            }
            function ft(t, e) {
                dt(t,
                    function(t, n, i, s) {
                        i._w = i._w || {},
                            e(t, i._w, i, s)
                    })
            }
            var pt = 0,
                mt = 1,
                gt = 2,
                vt = 3,
                yt = 4,
                bt = 5,
                _t = 6,
                wt = 7,
                Dt = 8;
            function kt(t) {
                return Ct(t) ? 366 : 365
            }
            function Ct(t) {
                return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
            }
            U("Y", 0, 0,
                function() {
                    var t = this.year();
                    return t <= 9999 ? "" + t: "+" + t
                }),
                U(0, ["YY", 2], 0,
                    function() {
                        return this.year() % 100
                    }),
                U(0, ["YYYY", 4], 0, "year"),
                U(0, ["YYYYY", 5], 0, "year"),
                U(0, ["YYYYYY", 6, !0], 0, "year"),
                I("year", "y"),
                j("year", 1),
                lt("Y", it),
                lt("YY", Q, B),
                lt("YYYY", tt, G),
                lt("YYYYY", et, K),
                lt("YYYYYY", et, K),
                dt(["YYYYY", "YYYYYY"], pt),
                dt("YYYY",
                    function(t, e) {
                        e[pt] = 2 === t.length ? n.parseTwoDigitYear(t) : w(t)
                    }),
                dt("YY",
                    function(t, e) {
                        e[pt] = n.parseTwoDigitYear(t)
                    }),
                dt("Y",
                    function(t, e) {
                        e[pt] = parseInt(t, 10)
                    }),
                n.parseTwoDigitYear = function(t) {
                    return w(t) + (w(t) > 68 ? 1900 : 2e3)
                };
            var xt, Tt = St("FullYear", !0);
            function St(t, e) {
                return function(i) {
                    return null != i ? (Mt(this, t, i), n.updateOffset(this, e), this) : Et(this, t)
                }
            }
            function Et(t, e) {
                return t.isValid() ? t._d["get" + (t._isUTC ? "UTC": "") + e]() : NaN
            }
            function Mt(t, e, n) {
                t.isValid() && !isNaN(n) && ("FullYear" === e && Ct(t.year()) && 1 === t.month() && 29 === t.date() ? t._d["set" + (t._isUTC ? "UTC": "") + e](n, t.month(), At(n, t.month())) : t._d["set" + (t._isUTC ? "UTC": "") + e](n))
            }
            function At(t, e) {
                if (isNaN(t) || isNaN(e)) return NaN;
                var n, i = (e % (n = 12) + n) % n;
                return t += (e - i) / 12,
                    1 === i ? Ct(t) ? 29 : 28 : 31 - i % 7 % 2
            }
            xt = Array.prototype.indexOf ? Array.prototype.indexOf: function(t) {
                var e;
                for (e = 0; e < this.length; ++e) if (this[e] === t) return e;
                return - 1
            },
                U("M", ["MM", 2], "Mo",
                    function() {
                        return this.month() + 1
                    }),
                U("MMM", 0, 0,
                    function(t) {
                        return this.localeData().monthsShort(this, t)
                    }),
                U("MMMM", 0, 0,
                    function(t) {
                        return this.localeData().months(this, t)
                    }),
                I("month", "M"),
                j("month", 8),
                lt("M", Q),
                lt("MM", Q, B),
                lt("MMM",
                    function(t, e) {
                        return e.monthsShortRegex(t)
                    }),
                lt("MMMM",
                    function(t, e) {
                        return e.monthsRegex(t)
                    }),
                dt(["M", "MM"],
                    function(t, e) {
                        e[mt] = w(t) - 1
                    }),
                dt(["MMM", "MMMM"],
                    function(t, e, n, i) {
                        var s = n._locale.monthsParse(t, i, n._strict);
                        null != s ? e[mt] = s: d(n).invalidMonth = t
                    });
            var Ot = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                It = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
            var Nt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
            function Pt(t, e) {
                var n;
                if (!t.isValid()) return t;
                if ("string" == typeof e) if (/^\d+$/.test(e)) e = w(e);
                else if (!r(e = t.localeData().monthsParse(e))) return t;
                return n = Math.min(t.date(), At(t.year(), e)),
                    t._d["set" + (t._isUTC ? "UTC": "") + "Month"](e, n),
                    t
            }
            function Lt(t) {
                return null != t ? (Pt(this, t), n.updateOffset(this, !0), this) : Et(this, "Month")
            }
            var jt = rt;
            var Yt = rt;
            function Ht() {
                function t(t, e) {
                    return e.length - t.length
                }
                var e, n, i = [],
                    s = [],
                    o = [];
                for (e = 0; e < 12; e++) n = u([2e3, e]),
                    i.push(this.monthsShort(n, "")),
                    s.push(this.months(n, "")),
                    o.push(this.months(n, "")),
                    o.push(this.monthsShort(n, ""));
                for (i.sort(t), s.sort(t), o.sort(t), e = 0; e < 12; e++) i[e] = ht(i[e]),
                    s[e] = ht(s[e]);
                for (e = 0; e < 24; e++) o[e] = ht(o[e]);
                this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i"),
                    this._monthsShortRegex = this._monthsRegex,
                    this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"),
                    this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
            }
            function $t(t) {
                var e;
                if (t < 100 && t >= 0) {
                    var n = Array.prototype.slice.call(arguments);
                    n[0] = t + 400,
                        e = new Date(Date.UTC.apply(null, n)),
                    isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t)
                } else e = new Date(Date.UTC.apply(null, arguments));
                return e
            }
            function Rt(t, e, n) {
                var i = 7 + e - n;
                return - ((7 + $t(t, 0, i).getUTCDay() - e) % 7) + i - 1
            }
            function Wt(t, e, n, i, s) {
                var o, r, a = 1 + 7 * (e - 1) + (7 + n - i) % 7 + Rt(t, i, s);
                return a <= 0 ? r = kt(o = t - 1) + a: a > kt(t) ? (o = t + 1, r = a - kt(t)) : (o = t, r = a),
                    {
                        year: o,
                        dayOfYear: r
                    }
            }
            function Ut(t, e, n) {
                var i, s, o = Rt(t.year(), e, n),
                    r = Math.floor((t.dayOfYear() - o - 1) / 7) + 1;
                return r < 1 ? i = r + Ft(s = t.year() - 1, e, n) : r > Ft(t.year(), e, n) ? (i = r - Ft(t.year(), e, n), s = t.year() + 1) : (s = t.year(), i = r),
                    {
                        week: i,
                        year: s
                    }
            }
            function Ft(t, e, n) {
                var i = Rt(t, e, n),
                    s = Rt(t + 1, e, n);
                return (kt(t) - i + s) / 7
            }
            U("w", ["ww", 2], "wo", "week"),
                U("W", ["WW", 2], "Wo", "isoWeek"),
                I("week", "w"),
                I("isoWeek", "W"),
                j("week", 5),
                j("isoWeek", 5),
                lt("w", Q),
                lt("ww", Q, B),
                lt("W", Q),
                lt("WW", Q, B),
                ft(["w", "ww", "W", "WW"],
                    function(t, e, n, i) {
                        e[i.substr(0, 1)] = w(t)
                    });
            function qt(t, e) {
                return t.slice(e, 7).concat(t.slice(0, e))
            }
            U("d", 0, "do", "day"),
                U("dd", 0, 0,
                    function(t) {
                        return this.localeData().weekdaysMin(this, t)
                    }),
                U("ddd", 0, 0,
                    function(t) {
                        return this.localeData().weekdaysShort(this, t)
                    }),
                U("dddd", 0, 0,
                    function(t) {
                        return this.localeData().weekdays(this, t)
                    }),
                U("e", 0, 0, "weekday"),
                U("E", 0, 0, "isoWeekday"),
                I("day", "d"),
                I("weekday", "e"),
                I("isoWeekday", "E"),
                j("day", 11),
                j("weekday", 11),
                j("isoWeekday", 11),
                lt("d", Q),
                lt("e", Q),
                lt("E", Q),
                lt("dd",
                    function(t, e) {
                        return e.weekdaysMinRegex(t)
                    }),
                lt("ddd",
                    function(t, e) {
                        return e.weekdaysShortRegex(t)
                    }),
                lt("dddd",
                    function(t, e) {
                        return e.weekdaysRegex(t)
                    }),
                ft(["dd", "ddd", "dddd"],
                    function(t, e, n, i) {
                        var s = n._locale.weekdaysParse(t, i, n._strict);
                        null != s ? e.d = s: d(n).invalidWeekday = t
                    }),
                ft(["d", "e", "E"],
                    function(t, e, n, i) {
                        e[i] = w(t)
                    });
            var Vt = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
            var Bt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
            var zt = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
            var Gt = rt;
            var Kt = rt;
            var Qt = rt;
            function Zt() {
                function t(t, e) {
                    return e.length - t.length
                }
                var e, n, i, s, o, r = [],
                    a = [],
                    l = [],
                    c = [];
                for (e = 0; e < 7; e++) n = u([2e3, 1]).day(e),
                    i = this.weekdaysMin(n, ""),
                    s = this.weekdaysShort(n, ""),
                    o = this.weekdays(n, ""),
                    r.push(i),
                    a.push(s),
                    l.push(o),
                    c.push(i),
                    c.push(s),
                    c.push(o);
                for (r.sort(t), a.sort(t), l.sort(t), c.sort(t), e = 0; e < 7; e++) a[e] = ht(a[e]),
                    l[e] = ht(l[e]),
                    c[e] = ht(c[e]);
                this._weekdaysRegex = new RegExp("^(" + c.join("|") + ")", "i"),
                    this._weekdaysShortRegex = this._weekdaysRegex,
                    this._weekdaysMinRegex = this._weekdaysRegex,
                    this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"),
                    this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"),
                    this._weekdaysMinStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
            }
            function Xt() {
                return this.hours() % 12 || 12
            }
            function Jt(t, e) {
                U(t, 0, 0,
                    function() {
                        return this.localeData().meridiem(this.hours(), this.minutes(), e)
                    })
            }
            function te(t, e) {
                return e._meridiemParse
            }
            U("H", ["HH", 2], 0, "hour"),
                U("h", ["hh", 2], 0, Xt),
                U("k", ["kk", 2], 0,
                    function() {
                        return this.hours() || 24
                    }),
                U("hmm", 0, 0,
                    function() {
                        return "" + Xt.apply(this) + Y(this.minutes(), 2)
                    }),
                U("hmmss", 0, 0,
                    function() {
                        return "" + Xt.apply(this) + Y(this.minutes(), 2) + Y(this.seconds(), 2)
                    }),
                U("Hmm", 0, 0,
                    function() {
                        return "" + this.hours() + Y(this.minutes(), 2)
                    }),
                U("Hmmss", 0, 0,
                    function() {
                        return "" + this.hours() + Y(this.minutes(), 2) + Y(this.seconds(), 2)
                    }),
                Jt("a", !0),
                Jt("A", !1),
                I("hour", "h"),
                j("hour", 13),
                lt("a", te),
                lt("A", te),
                lt("H", Q),
                lt("h", Q),
                lt("k", Q),
                lt("HH", Q, B),
                lt("hh", Q, B),
                lt("kk", Q, B),
                lt("hmm", Z),
                lt("hmmss", X),
                lt("Hmm", Z),
                lt("Hmmss", X),
                dt(["H", "HH"], vt),
                dt(["k", "kk"],
                    function(t, e, n) {
                        var i = w(t);
                        e[vt] = 24 === i ? 0 : i
                    }),
                dt(["a", "A"],
                    function(t, e, n) {
                        n._isPm = n._locale.isPM(t),
                            n._meridiem = t
                    }),
                dt(["h", "hh"],
                    function(t, e, n) {
                        e[vt] = w(t),
                            d(n).bigHour = !0
                    }),
                dt("hmm",
                    function(t, e, n) {
                        var i = t.length - 2;
                        e[vt] = w(t.substr(0, i)),
                            e[yt] = w(t.substr(i)),
                            d(n).bigHour = !0
                    }),
                dt("hmmss",
                    function(t, e, n) {
                        var i = t.length - 4,
                            s = t.length - 2;
                        e[vt] = w(t.substr(0, i)),
                            e[yt] = w(t.substr(i, 2)),
                            e[bt] = w(t.substr(s)),
                            d(n).bigHour = !0
                    }),
                dt("Hmm",
                    function(t, e, n) {
                        var i = t.length - 2;
                        e[vt] = w(t.substr(0, i)),
                            e[yt] = w(t.substr(i))
                    }),
                dt("Hmmss",
                    function(t, e, n) {
                        var i = t.length - 4,
                            s = t.length - 2;
                        e[vt] = w(t.substr(0, i)),
                            e[yt] = w(t.substr(i, 2)),
                            e[bt] = w(t.substr(s))
                    });
            var ee, ne = St("Hours", !0),
                ie = {
                    calendar: {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    longDateFormat: {
                        LTS: "h:mm:ss A",
                        LT: "h:mm A",
                        L: "MM/DD/YYYY",
                        LL: "MMMM D, YYYY",
                        LLL: "MMMM D, YYYY h:mm A",
                        LLLL: "dddd, MMMM D, YYYY h:mm A"
                    },
                    invalidDate: "Invalid date",
                    ordinal: "%d",
                    dayOfMonthOrdinalParse: /\d{1,2}/,
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        ss: "%d seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    months: It,
                    monthsShort: Nt,
                    week: {
                        dow: 0,
                        doy: 6
                    },
                    weekdays: Vt,
                    weekdaysMin: zt,
                    weekdaysShort: Bt,
                    meridiemParse: /[ap]\.?m?\.?/i
                },
                se = {},
                oe = {};
            function re(t) {
                return t ? t.toLowerCase().replace("_", "-") : t
            }
            function ae(t) {
                var e = null;
                if (!se[t] && "undefined" != typeof module && module && module.exports) try {
                    e = ee._abbr,
                        require("./locale/" + t),
                        le(e)
                } catch(t) {}
                return se[t]
            }
            function le(t, e) {
                var n;
                return t && ((n = o(e) ? he(t) : ce(t, e)) ? ee = n: "undefined" != typeof console && console.warn && console.warn("Locale " + t + " not found. Did you forget to load it?")),
                    ee._abbr
            }
            function ce(t, e) {
                if (null !== e) {
                    var n, i = ie;
                    if (e.abbr = t, null != se[t]) S("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),
                        i = se[t]._config;
                    else if (null != e.parentLocale) if (null != se[e.parentLocale]) i = se[e.parentLocale]._config;
                    else {
                        if (null == (n = ae(e.parentLocale))) return oe[e.parentLocale] || (oe[e.parentLocale] = []),
                            oe[e.parentLocale].push({
                                name: t,
                                config: e
                            }),
                            null;
                        i = n._config
                    }
                    return se[t] = new A(M(i, e)),
                    oe[t] && oe[t].forEach(function(t) {
                        ce(t.name, t.config)
                    }),
                        le(t),
                        se[t]
                }
                return delete se[t],
                    null
            }
            function he(t) {
                var e;
                if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return ee;
                if (!i(t)) {
                    if (e = ae(t)) return e;
                    t = [t]
                }
                return function(t) {
                    for (var e, n, i, s, o = 0; o < t.length;) {
                        for (e = (s = re(t[o]).split("-")).length, n = (n = re(t[o + 1])) ? n.split("-") : null; e > 0;) {
                            if (i = ae(s.slice(0, e).join("-"))) return i;
                            if (n && n.length >= e && D(s, n, !0) >= e - 1) break;
                            e--
                        }
                        o++
                    }
                    return ee
                } (t)
            }
            function ue(t) {
                var e, n = t._a;
                return n && -2 === d(t).overflow && (e = n[mt] < 0 || n[mt] > 11 ? mt: n[gt] < 1 || n[gt] > At(n[pt], n[mt]) ? gt: n[vt] < 0 || n[vt] > 24 || 24 === n[vt] && (0 !== n[yt] || 0 !== n[bt] || 0 !== n[_t]) ? vt: n[yt] < 0 || n[yt] > 59 ? yt: n[bt] < 0 || n[bt] > 59 ? bt: n[_t] < 0 || n[_t] > 999 ? _t: -1, d(t)._overflowDayOfYear && (e < pt || e > gt) && (e = gt), d(t)._overflowWeeks && -1 === e && (e = wt), d(t)._overflowWeekday && -1 === e && (e = Dt), d(t).overflow = e),
                    t
            }
            function de(t, e, n) {
                return null != t ? t: null != e ? e: n
            }
            function fe(t) {
                var e, i, s, o, r, a = [];
                if (!t._d) {
                    var l, c;
                    for (l = t, c = new Date(n.now()), s = l._useUTC ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()] : [c.getFullYear(), c.getMonth(), c.getDate()], t._w && null == t._a[gt] && null == t._a[mt] &&
                    function(t) {
                        var e, n, i, s, o, r, a, l;
                        if (null != (e = t._w).GG || null != e.W || null != e.E) o = 1,
                            r = 4,
                            n = de(e.GG, t._a[pt], Ut(Ee(), 1, 4).year),
                            i = de(e.W, 1),
                        ((s = de(e.E, 1)) < 1 || s > 7) && (l = !0);
                        else {
                            o = t._locale._week.dow,
                                r = t._locale._week.doy;
                            var c = Ut(Ee(), o, r);
                            n = de(e.gg, t._a[pt], c.year),
                                i = de(e.w, c.week),
                                null != e.d ? ((s = e.d) < 0 || s > 6) && (l = !0) : null != e.e ? (s = e.e + o, (e.e < 0 || e.e > 6) && (l = !0)) : s = o
                        }
                        i < 1 || i > Ft(n, o, r) ? d(t)._overflowWeeks = !0 : null != l ? d(t)._overflowWeekday = !0 : (a = Wt(n, i, s, o, r), t._a[pt] = a.year, t._dayOfYear = a.dayOfYear)
                    } (t), null != t._dayOfYear && (r = de(t._a[pt], s[pt]), (t._dayOfYear > kt(r) || 0 === t._dayOfYear) && (d(t)._overflowDayOfYear = !0), i = $t(r, 0, t._dayOfYear), t._a[mt] = i.getUTCMonth(), t._a[gt] = i.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e) t._a[e] = a[e] = s[e];
                    for (; e < 7; e++) t._a[e] = a[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
                    24 === t._a[vt] && 0 === t._a[yt] && 0 === t._a[bt] && 0 === t._a[_t] && (t._nextDay = !0, t._a[vt] = 0),
                        t._d = (t._useUTC ? $t: function(t, e, n, i, s, o, r) {
                            var a;
                            return t < 100 && t >= 0 ? (a = new Date(t + 400, e, n, i, s, o, r), isFinite(a.getFullYear()) && a.setFullYear(t)) : a = new Date(t, e, n, i, s, o, r),
                                a
                        }).apply(null, a),
                        o = t._useUTC ? t._d.getUTCDay() : t._d.getDay(),
                    null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
                    t._nextDay && (t._a[vt] = 24),
                    t._w && void 0 !== t._w.d && t._w.d !== o && (d(t).weekdayMismatch = !0)
                }
            }
            var pe = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                me = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                ge = /Z|[+-]\d\d(?::?\d\d)?/,
                ve = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
                ye = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
                be = /^\/?Date\((\-?\d+)/i;
            function _e(t) {
                var e, n, i, s, o, r, a = t._i,
                    l = pe.exec(a) || me.exec(a);
                if (l) {
                    for (d(t).iso = !0, e = 0, n = ve.length; e < n; e++) if (ve[e][1].exec(l[1])) {
                        s = ve[e][0],
                            i = !1 !== ve[e][2];
                        break
                    }
                    if (null == s) return void(t._isValid = !1);
                    if (l[3]) {
                        for (e = 0, n = ye.length; e < n; e++) if (ye[e][1].exec(l[3])) {
                            o = (l[2] || " ") + ye[e][0];
                            break
                        }
                        if (null == o) return void(t._isValid = !1)
                    }
                    if (!i && null != o) return void(t._isValid = !1);
                    if (l[4]) {
                        if (!ge.exec(l[4])) return void(t._isValid = !1);
                        r = "Z"
                    }
                    t._f = s + (o || "") + (r || ""),
                        xe(t)
                } else t._isValid = !1
            }
            var we = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
            function De(t, e, n, i, s, o) {
                var r = [function(t) {
                    var e = parseInt(t, 10); {
                        if (e <= 49) return 2e3 + e;
                        if (e <= 999) return 1900 + e
                    }
                    return e
                } (t), Nt.indexOf(e), parseInt(n, 10), parseInt(i, 10), parseInt(s, 10)];
                return o && r.push(parseInt(o, 10)),
                    r
            }
            var ke = {
                UT: 0,
                GMT: 0,
                EDT: -240,
                EST: -300,
                CDT: -300,
                CST: -360,
                MDT: -360,
                MST: -420,
                PDT: -420,
                PST: -480
            };
            function Ce(t) {
                var e, n, i, s = we.exec(t._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
                if (s) {
                    var o = De(s[4], s[3], s[2], s[5], s[6], s[7]);
                    if (e = s[1], n = o, i = t, e && Bt.indexOf(e) !== new Date(n[0], n[1], n[2]).getDay() && (d(i).weekdayMismatch = !0, i._isValid = !1, 1)) return;
                    t._a = o,
                        t._tzm = function(t, e, n) {
                            if (t) return ke[t];
                            if (e) return 0;
                            var i = parseInt(n, 10),
                                s = i % 100;
                            return (i - s) / 100 * 60 + s
                        } (s[8], s[9], s[10]),
                        t._d = $t.apply(null, t._a),
                        t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
                        d(t).rfc2822 = !0
                } else t._isValid = !1
            }
            function xe(t) {
                if (t._f !== n.ISO_8601) if (t._f !== n.RFC_2822) {
                    t._a = [],
                        d(t).empty = !0;
                    var e, i, s, o, r, a, l, h, u = "" + t._i,
                        f = u.length,
                        p = 0;
                    for (s = q(t._f, t._locale).match(H) || [], e = 0; e < s.length; e++) o = s[e],
                    (i = (u.match(ct(o, t)) || [])[0]) && ((r = u.substr(0, u.indexOf(i))).length > 0 && d(t).unusedInput.push(r), u = u.slice(u.indexOf(i) + i.length), p += i.length),
                        W[o] ? (i ? d(t).empty = !1 : d(t).unusedTokens.push(o), a = o, h = t, null != (l = i) && c(ut, a) && ut[a](l, h._a, h, a)) : t._strict && !i && d(t).unusedTokens.push(o);
                    d(t).charsLeftOver = f - p,
                    u.length > 0 && d(t).unusedInput.push(u),
                    t._a[vt] <= 12 && !0 === d(t).bigHour && t._a[vt] > 0 && (d(t).bigHour = void 0),
                        d(t).parsedDateParts = t._a.slice(0),
                        d(t).meridiem = t._meridiem,
                        t._a[vt] = function(t, e, n) {
                            var i;
                            if (null == n) return e;
                            return null != t.meridiemHour ? t.meridiemHour(e, n) : null != t.isPM ? ((i = t.isPM(n)) && e < 12 && (e += 12), i || 12 !== e || (e = 0), e) : e
                        } (t._locale, t._a[vt], t._meridiem),
                        fe(t),
                        ue(t)
                } else Ce(t);
                else _e(t)
            }
            function Te(t) {
                var e, c, u, m, v = t._i,
                    _ = t._f;
                return t._locale = t._locale || he(t._l),
                    null === v || void 0 === _ && "" === v ? p({
                        nullInput: !0
                    }) : ("string" == typeof v && (t._i = v = t._locale.preparse(v)), b(v) ? new y(ue(v)) : (a(v) ? t._d = v: i(_) ?
                        function(t) {
                            var e, n, i, s, o;
                            if (0 === t._f.length) return d(t).invalidFormat = !0,
                                void(t._d = new Date(NaN));
                            for (s = 0; s < t._f.length; s++) o = 0,
                                e = g({},
                                    t),
                            null != t._useUTC && (e._useUTC = t._useUTC),
                                e._f = t._f[s],
                                xe(e),
                            f(e) && (o += d(e).charsLeftOver, o += 10 * d(e).unusedTokens.length, d(e).score = o, (null == i || o < i) && (i = o, n = e));
                            h(t, n || e)
                        } (t) : _ ? xe(t) : o(c = (e = t)._i) ? e._d = new Date(n.now()) : a(c) ? e._d = new Date(c.valueOf()) : "string" == typeof c ? (u = e, null === (m = be.exec(u._i)) ? (_e(u), !1 === u._isValid && (delete u._isValid, Ce(u), !1 === u._isValid && (delete u._isValid, n.createFromInputFallback(u)))) : u._d = new Date( + m[1])) : i(c) ? (e._a = l(c.slice(0),
                            function(t) {
                                return parseInt(t, 10)
                            }), fe(e)) : s(c) ?
                            function(t) {
                                if (!t._d) {
                                    var e = P(t._i);
                                    t._a = l([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond],
                                        function(t) {
                                            return t && parseInt(t, 10)
                                        }),
                                        fe(t)
                                }
                            } (e) : r(c) ? e._d = new Date(c) : n.createFromInputFallback(e), f(t) || (t._d = null), t))
            }
            function Se(t, e, n, o, r) {
                var a, l = {};
                return ! 0 !== n && !1 !== n || (o = n, n = void 0),
                (s(t) &&
                    function(t) {
                        if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(t).length;
                        var e;
                        for (e in t) if (t.hasOwnProperty(e)) return ! 1;
                        return ! 0
                    } (t) || i(t) && 0 === t.length) && (t = void 0),
                    l._isAMomentObject = !0,
                    l._useUTC = l._isUTC = r,
                    l._l = n,
                    l._i = t,
                    l._f = e,
                    l._strict = o,
                (a = new y(ue(Te(l))))._nextDay && (a.add(1, "d"), a._nextDay = void 0),
                    a
            }
            function Ee(t, e, n, i) {
                return Se(t, e, n, i, !1)
            }
            n.createFromInputFallback = C("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
                function(t) {
                    t._d = new Date(t._i + (t._useUTC ? " UTC": ""))
                }),
                n.ISO_8601 = function() {},
                n.RFC_2822 = function() {};
            var Me = C("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
                function() {
                    var t = Ee.apply(null, arguments);
                    return this.isValid() && t.isValid() ? t < this ? this: t: p()
                }),
                Ae = C("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
                    function() {
                        var t = Ee.apply(null, arguments);
                        return this.isValid() && t.isValid() ? t > this ? this: t: p()
                    });
            function Oe(t, e) {
                var n, s;
                if (1 === e.length && i(e[0]) && (e = e[0]), !e.length) return Ee();
                for (n = e[0], s = 1; s < e.length; ++s) e[s].isValid() && !e[s][t](n) || (n = e[s]);
                return n
            }
            var Ie = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
            function Ne(t) {
                var e = P(t),
                    n = e.year || 0,
                    i = e.quarter || 0,
                    s = e.month || 0,
                    o = e.week || e.isoWeek || 0,
                    r = e.day || 0,
                    a = e.hour || 0,
                    l = e.minute || 0,
                    c = e.second || 0,
                    h = e.millisecond || 0;
                this._isValid = function(t) {
                    for (var e in t) if ( - 1 === xt.call(Ie, e) || null != t[e] && isNaN(t[e])) return ! 1;
                    for (var n = !1,
                             i = 0; i < Ie.length; ++i) if (t[Ie[i]]) {
                        if (n) return ! 1;
                        parseFloat(t[Ie[i]]) !== w(t[Ie[i]]) && (n = !0)
                    }
                    return ! 0
                } (e),
                    this._milliseconds = +h + 1e3 * c + 6e4 * l + 1e3 * a * 60 * 60,
                    this._days = +r + 7 * o,
                    this._months = +s + 3 * i + 12 * n,
                    this._data = {},
                    this._locale = he(),
                    this._bubble()
            }
            function Pe(t) {
                return t instanceof Ne
            }
            function Le(t) {
                return t < 0 ? -1 * Math.round( - 1 * t) : Math.round(t)
            }
            function je(t, e) {
                U(t, 0, 0,
                    function() {
                        var t = this.utcOffset(),
                            n = "+";
                        return t < 0 && (t = -t, n = "-"),
                        n + Y(~~ (t / 60), 2) + e + Y(~~t % 60, 2)
                    })
            }
            je("Z", ":"),
                je("ZZ", ""),
                lt("Z", ot),
                lt("ZZ", ot),
                dt(["Z", "ZZ"],
                    function(t, e, n) {
                        n._useUTC = !0,
                            n._tzm = He(ot, t)
                    });
            var Ye = /([\+\-]|\d\d)/gi;
            function He(t, e) {
                var n = (e || "").match(t);
                if (null === n) return null;
                var i = ((n[n.length - 1] || []) + "").match(Ye) || ["-", 0, 0],
                    s = 60 * i[1] + w(i[2]);
                return 0 === s ? 0 : "+" === i[0] ? s: -s
            }
            function $e(t, e) {
                var i, s;
                return e._isUTC ? (i = e.clone(), s = (b(t) || a(t) ? t.valueOf() : Ee(t).valueOf()) - i.valueOf(), i._d.setTime(i._d.valueOf() + s), n.updateOffset(i, !1), i) : Ee(t).local()
            }
            function Re(t) {
                return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
            }
            function We() {
                return !! this.isValid() && (this._isUTC && 0 === this._offset)
            }
            n.updateOffset = function() {};
            var Ue = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
                Fe = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
            function qe(t, e) {
                var n, i, s, o = t,
                    a = null;
                return Pe(t) ? o = {
                    ms: t._milliseconds,
                    d: t._days,
                    M: t._months
                }: r(t) ? (o = {},
                    e ? o[e] = t: o.milliseconds = t) : (a = Ue.exec(t)) ? (n = "-" === a[1] ? -1 : 1, o = {
                    y: 0,
                    d: w(a[gt]) * n,
                    h: w(a[vt]) * n,
                    m: w(a[yt]) * n,
                    s: w(a[bt]) * n,
                    ms: w(Le(1e3 * a[_t])) * n
                }) : (a = Fe.exec(t)) ? (n = "-" === a[1] ? -1 : 1, o = {
                    y: Ve(a[2], n),
                    M: Ve(a[3], n),
                    w: Ve(a[4], n),
                    d: Ve(a[5], n),
                    h: Ve(a[6], n),
                    m: Ve(a[7], n),
                    s: Ve(a[8], n)
                }) : null == o ? o = {}: "object" == typeof o && ("from" in o || "to" in o) && (s = function(t, e) {
                    var n;
                    if (!t.isValid() || !e.isValid()) return {
                        milliseconds: 0,
                        months: 0
                    };
                    e = $e(e, t),
                        t.isBefore(e) ? n = Be(t, e) : ((n = Be(e, t)).milliseconds = -n.milliseconds, n.months = -n.months);
                    return n
                } (Ee(o.from), Ee(o.to)), (o = {}).ms = s.milliseconds, o.M = s.months),
                    i = new Ne(o),
                Pe(t) && c(t, "_locale") && (i._locale = t._locale),
                    i
            }
            function Ve(t, e) {
                var n = t && parseFloat(t.replace(",", "."));
                return (isNaN(n) ? 0 : n) * e
            }
            function Be(t, e) {
                var n = {};
                return n.months = e.month() - t.month() + 12 * (e.year() - t.year()),
                t.clone().add(n.months, "M").isAfter(e) && --n.months,
                    n.milliseconds = +e - +t.clone().add(n.months, "M"),
                    n
            }
            function ze(t, e) {
                return function(n, i) {
                    var s;
                    return null === i || isNaN( + i) || (S(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), s = n, n = i, i = s),
                        Ge(this, qe(n = "string" == typeof n ? +n: n, i), t),
                        this
                }
            }
            function Ge(t, e, i, s) {
                var o = e._milliseconds,
                    r = Le(e._days),
                    a = Le(e._months);
                t.isValid() && (s = null == s || s, a && Pt(t, Et(t, "Month") + a * i), r && Mt(t, "Date", Et(t, "Date") + r * i), o && t._d.setTime(t._d.valueOf() + o * i), s && n.updateOffset(t, r || a))
            }
            qe.fn = Ne.prototype,
                qe.invalid = function() {
                    return qe(NaN)
                };
            var Ke = ze(1, "add"),
                Qe = ze( - 1, "subtract");
            function Ze(t, e) {
                var n = 12 * (e.year() - t.year()) + (e.month() - t.month()),
                    i = t.clone().add(n, "months");
                return - (n + (e - i < 0 ? (e - i) / (i - t.clone().add(n - 1, "months")) : (e - i) / (t.clone().add(n + 1, "months") - i))) || 0
            }
            function Xe(t) {
                var e;
                return void 0 === t ? this._locale._abbr: (null != (e = he(t)) && (this._locale = e), this)
            }
            n.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ",
                n.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            var Je = C("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
                function(t) {
                    return void 0 === t ? this.localeData() : this.locale(t)
                });
            function tn() {
                return this._locale
            }
            var en = 1e3,
                nn = 60 * en,
                sn = 60 * nn,
                on = 3506328 * sn;
            function rn(t, e) {
                return (t % e + e) % e
            }
            function an(t, e, n) {
                return t < 100 && t >= 0 ? new Date(t + 400, e, n) - on: new Date(t, e, n).valueOf()
            }
            function ln(t, e, n) {
                return t < 100 && t >= 0 ? Date.UTC(t + 400, e, n) - on: Date.UTC(t, e, n)
            }
            function cn(t, e) {
                U(0, [t, t.length], 0, e)
            }
            function hn(t, e, n, i, s) {
                var o;
                return null == t ? Ut(this, i, s).year: (e > (o = Ft(t, i, s)) && (e = o),
                    function(t, e, n, i, s) {
                        var o = Wt(t, e, n, i, s),
                            r = $t(o.year, 0, o.dayOfYear);
                        return this.year(r.getUTCFullYear()),
                            this.month(r.getUTCMonth()),
                            this.date(r.getUTCDate()),
                            this
                    }.call(this, t, e, n, i, s))
            }
            U(0, ["gg", 2], 0,
                function() {
                    return this.weekYear() % 100
                }),
                U(0, ["GG", 2], 0,
                    function() {
                        return this.isoWeekYear() % 100
                    }),
                cn("gggg", "weekYear"),
                cn("ggggg", "weekYear"),
                cn("GGGG", "isoWeekYear"),
                cn("GGGGG", "isoWeekYear"),
                I("weekYear", "gg"),
                I("isoWeekYear", "GG"),
                j("weekYear", 1),
                j("isoWeekYear", 1),
                lt("G", it),
                lt("g", it),
                lt("GG", Q, B),
                lt("gg", Q, B),
                lt("GGGG", tt, G),
                lt("gggg", tt, G),
                lt("GGGGG", et, K),
                lt("ggggg", et, K),
                ft(["gggg", "ggggg", "GGGG", "GGGGG"],
                    function(t, e, n, i) {
                        e[i.substr(0, 2)] = w(t)
                    }),
                ft(["gg", "GG"],
                    function(t, e, i, s) {
                        e[s] = n.parseTwoDigitYear(t)
                    }),
                U("Q", 0, "Qo", "quarter"),
                I("quarter", "Q"),
                j("quarter", 7),
                lt("Q", V),
                dt("Q",
                    function(t, e) {
                        e[mt] = 3 * (w(t) - 1)
                    }),
                U("D", ["DD", 2], "Do", "date"),
                I("date", "D"),
                j("date", 9),
                lt("D", Q),
                lt("DD", Q, B),
                lt("Do",
                    function(t, e) {
                        return t ? e._dayOfMonthOrdinalParse || e._ordinalParse: e._dayOfMonthOrdinalParseLenient
                    }),
                dt(["D", "DD"], gt),
                dt("Do",
                    function(t, e) {
                        e[gt] = w(t.match(Q)[0])
                    });
            var un = St("Date", !0);
            U("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
                I("dayOfYear", "DDD"),
                j("dayOfYear", 4),
                lt("DDD", J),
                lt("DDDD", z),
                dt(["DDD", "DDDD"],
                    function(t, e, n) {
                        n._dayOfYear = w(t)
                    }),
                U("m", ["mm", 2], 0, "minute"),
                I("minute", "m"),
                j("minute", 14),
                lt("m", Q),
                lt("mm", Q, B),
                dt(["m", "mm"], yt);
            var dn = St("Minutes", !1);
            U("s", ["ss", 2], 0, "second"),
                I("second", "s"),
                j("second", 15),
                lt("s", Q),
                lt("ss", Q, B),
                dt(["s", "ss"], bt);
            var fn, pn = St("Seconds", !1);
            for (U("S", 0, 0,
                function() {
                    return~~ (this.millisecond() / 100)
                }), U(0, ["SS", 2], 0,
                function() {
                    return~~ (this.millisecond() / 10)
                }), U(0, ["SSS", 3], 0, "millisecond"), U(0, ["SSSS", 4], 0,
                function() {
                    return 10 * this.millisecond()
                }), U(0, ["SSSSS", 5], 0,
                function() {
                    return 100 * this.millisecond()
                }), U(0, ["SSSSSS", 6], 0,
                function() {
                    return 1e3 * this.millisecond()
                }), U(0, ["SSSSSSS", 7], 0,
                function() {
                    return 1e4 * this.millisecond()
                }), U(0, ["SSSSSSSS", 8], 0,
                function() {
                    return 1e5 * this.millisecond()
                }), U(0, ["SSSSSSSSS", 9], 0,
                function() {
                    return 1e6 * this.millisecond()
                }), I("millisecond", "ms"), j("millisecond", 16), lt("S", J, V), lt("SS", J, B), lt("SSS", J, z), fn = "SSSS"; fn.length <= 9; fn += "S") lt(fn, nt);
            function mn(t, e) {
                e[_t] = w(1e3 * ("0." + t))
            }
            for (fn = "S"; fn.length <= 9; fn += "S") dt(fn, mn);
            var gn = St("Milliseconds", !1);
            U("z", 0, 0, "zoneAbbr"),
                U("zz", 0, 0, "zoneName");
            var vn = y.prototype;
            function yn(t) {
                return t
            }
            vn.add = Ke,
                vn.calendar = function(t, e) {
                    var i = t || Ee(),
                        s = $e(i, this).startOf("day"),
                        o = n.calendarFormat(this, s) || "sameElse",
                        r = e && (E(e[o]) ? e[o].call(this, i) : e[o]);
                    return this.format(r || this.localeData().calendar(o, this, Ee(i)))
                },
                vn.clone = function() {
                    return new y(this)
                },
                vn.diff = function(t, e, n) {
                    var i, s, o;
                    if (!this.isValid()) return NaN;
                    if (! (i = $e(t, this)).isValid()) return NaN;
                    switch (s = 6e4 * (i.utcOffset() - this.utcOffset()), e = N(e)) {
                        case "year":
                            o = Ze(this, i) / 12;
                            break;
                        case "month":
                            o = Ze(this, i);
                            break;
                        case "quarter":
                            o = Ze(this, i) / 3;
                            break;
                        case "second":
                            o = (this - i) / 1e3;
                            break;
                        case "minute":
                            o = (this - i) / 6e4;
                            break;
                        case "hour":
                            o = (this - i) / 36e5;
                            break;
                        case "day":
                            o = (this - i - s) / 864e5;
                            break;
                        case "week":
                            o = (this - i - s) / 6048e5;
                            break;
                        default:
                            o = this - i
                    }
                    return n ? o: _(o)
                },
                vn.endOf = function(t) {
                    var e;
                    if (void 0 === (t = N(t)) || "millisecond" === t || !this.isValid()) return this;
                    var i = this._isUTC ? ln: an;
                    switch (t) {
                        case "year":
                            e = i(this.year() + 1, 0, 1) - 1;
                            break;
                        case "quarter":
                            e = i(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                            break;
                        case "month":
                            e = i(this.year(), this.month() + 1, 1) - 1;
                            break;
                        case "week":
                            e = i(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                            break;
                        case "isoWeek":
                            e = i(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                            break;
                        case "day":
                        case "date":
                            e = i(this.year(), this.month(), this.date() + 1) - 1;
                            break;
                        case "hour":
                            e = this._d.valueOf(),
                                e += sn - rn(e + (this._isUTC ? 0 : this.utcOffset() * nn), sn) - 1;
                            break;
                        case "minute":
                            e = this._d.valueOf(),
                                e += nn - rn(e, nn) - 1;
                            break;
                        case "second":
                            e = this._d.valueOf(),
                                e += en - rn(e, en) - 1
                    }
                    return this._d.setTime(e),
                        n.updateOffset(this, !0),
                        this
                },
                vn.format = function(t) {
                    t || (t = this.isUtc() ? n.defaultFormatUtc: n.defaultFormat);
                    var e = F(this, t);
                    return this.localeData().postformat(e)
                },
                vn.from = function(t, e) {
                    return this.isValid() && (b(t) && t.isValid() || Ee(t).isValid()) ? qe({
                        to: this,
                        from: t
                    }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
                },
                vn.fromNow = function(t) {
                    return this.from(Ee(), t)
                },
                vn.to = function(t, e) {
                    return this.isValid() && (b(t) && t.isValid() || Ee(t).isValid()) ? qe({
                        from: this,
                        to: t
                    }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
                },
                vn.toNow = function(t) {
                    return this.to(Ee(), t)
                },
                vn.get = function(t) {
                    return E(this[t = N(t)]) ? this[t]() : this
                },
                vn.invalidAt = function() {
                    return d(this).overflow
                },
                vn.isAfter = function(t, e) {
                    var n = b(t) ? t: Ee(t);
                    return ! (!this.isValid() || !n.isValid()) && ("millisecond" === (e = N(e) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(e).valueOf())
                },
                vn.isBefore = function(t, e) {
                    var n = b(t) ? t: Ee(t);
                    return ! (!this.isValid() || !n.isValid()) && ("millisecond" === (e = N(e) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(e).valueOf() < n.valueOf())
                },
                vn.isBetween = function(t, e, n, i) {
                    var s = b(t) ? t: Ee(t),
                        o = b(e) ? e: Ee(e);
                    return !! (this.isValid() && s.isValid() && o.isValid()) && ("(" === (i = i || "()")[0] ? this.isAfter(s, n) : !this.isBefore(s, n)) && (")" === i[1] ? this.isBefore(o, n) : !this.isAfter(o, n))
                },
                vn.isSame = function(t, e) {
                    var n, i = b(t) ? t: Ee(t);
                    return ! (!this.isValid() || !i.isValid()) && ("millisecond" === (e = N(e) || "millisecond") ? this.valueOf() === i.valueOf() : (n = i.valueOf(), this.clone().startOf(e).valueOf() <= n && n <= this.clone().endOf(e).valueOf()))
                },
                vn.isSameOrAfter = function(t, e) {
                    return this.isSame(t, e) || this.isAfter(t, e)
                },
                vn.isSameOrBefore = function(t, e) {
                    return this.isSame(t, e) || this.isBefore(t, e)
                },
                vn.isValid = function() {
                    return f(this)
                },
                vn.lang = Je,
                vn.locale = Xe,
                vn.localeData = tn,
                vn.max = Ae,
                vn.min = Me,
                vn.parsingFlags = function() {
                    return h({},
                        d(this))
                },
                vn.set = function(t, e) {
                    if ("object" == typeof t) for (var n = function(t) {
                        var e = [];
                        for (var n in t) e.push({
                            unit: n,
                            priority: L[n]
                        });
                        return e.sort(function(t, e) {
                            return t.priority - e.priority
                        }),
                            e
                    } (t = P(t)), i = 0; i < n.length; i++) this[n[i].unit](t[n[i].unit]);
                    else if (E(this[t = N(t)])) return this[t](e);
                    return this
                },
                vn.startOf = function(t) {
                    var e;
                    if (void 0 === (t = N(t)) || "millisecond" === t || !this.isValid()) return this;
                    var i = this._isUTC ? ln: an;
                    switch (t) {
                        case "year":
                            e = i(this.year(), 0, 1);
                            break;
                        case "quarter":
                            e = i(this.year(), this.month() - this.month() % 3, 1);
                            break;
                        case "month":
                            e = i(this.year(), this.month(), 1);
                            break;
                        case "week":
                            e = i(this.year(), this.month(), this.date() - this.weekday());
                            break;
                        case "isoWeek":
                            e = i(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                            break;
                        case "day":
                        case "date":
                            e = i(this.year(), this.month(), this.date());
                            break;
                        case "hour":
                            e = this._d.valueOf(),
                                e -= rn(e + (this._isUTC ? 0 : this.utcOffset() * nn), sn);
                            break;
                        case "minute":
                            e = this._d.valueOf(),
                                e -= rn(e, nn);
                            break;
                        case "second":
                            e = this._d.valueOf(),
                                e -= rn(e, en)
                    }
                    return this._d.setTime(e),
                        n.updateOffset(this, !0),
                        this
                },
                vn.subtract = Qe,
                vn.toArray = function() {
                    return [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()]
                },
                vn.toObject = function() {
                    return {
                        years: this.year(),
                        months: this.month(),
                        date: this.date(),
                        hours: this.hours(),
                        minutes: this.minutes(),
                        seconds: this.seconds(),
                        milliseconds: this.milliseconds()
                    }
                },
                vn.toDate = function() {
                    return new Date(this.valueOf())
                },
                vn.toISOString = function(t) {
                    if (!this.isValid()) return null;
                    var e = !0 !== t,
                        n = e ? this.clone().utc() : this;
                    return n.year() < 0 || n.year() > 9999 ? F(n, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]": "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : E(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", F(n, "Z")) : F(n, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]": "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
                },
                vn.inspect = function() {
                    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                    var t = "moment",
                        e = "";
                    this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc": "moment.parseZone", e = "Z");
                    var n = "[" + t + '("]',
                        i = 0 <= this.year() && this.year() <= 9999 ? "YYYY": "YYYYYY",
                        s = e + '[")]';
                    return this.format(n + i + "-MM-DD[T]HH:mm:ss.SSS" + s)
                },
                vn.toJSON = function() {
                    return this.isValid() ? this.toISOString() : null
                },
                vn.toString = function() {
                    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
                },
                vn.unix = function() {
                    return Math.floor(this.valueOf() / 1e3)
                },
                vn.valueOf = function() {
                    return this._d.valueOf() - 6e4 * (this._offset || 0)
                },
                vn.creationData = function() {
                    return {
                        input: this._i,
                        format: this._f,
                        locale: this._locale,
                        isUTC: this._isUTC,
                        strict: this._strict
                    }
                },
                vn.year = Tt,
                vn.isLeapYear = function() {
                    return Ct(this.year())
                },
                vn.weekYear = function(t) {
                    return hn.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
                },
                vn.isoWeekYear = function(t) {
                    return hn.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
                },
                vn.quarter = vn.quarters = function(t) {
                    return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
                },
                vn.month = Lt,
                vn.daysInMonth = function() {
                    return At(this.year(), this.month())
                },
                vn.week = vn.weeks = function(t) {
                    var e = this.localeData().week(this);
                    return null == t ? e: this.add(7 * (t - e), "d")
                },
                vn.isoWeek = vn.isoWeeks = function(t) {
                    var e = Ut(this, 1, 4).week;
                    return null == t ? e: this.add(7 * (t - e), "d")
                },
                vn.weeksInYear = function() {
                    var t = this.localeData()._week;
                    return Ft(this.year(), t.dow, t.doy)
                },
                vn.isoWeeksInYear = function() {
                    return Ft(this.year(), 1, 4)
                },
                vn.date = un,
                vn.day = vn.days = function(t) {
                    if (!this.isValid()) return null != t ? this: NaN;
                    var e, n, i = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                    return null != t ? (e = t, n = this.localeData(), t = "string" != typeof e ? e: isNaN(e) ? "number" == typeof(e = n.weekdaysParse(e)) ? e: null: parseInt(e, 10), this.add(t - i, "d")) : i
                },
                vn.weekday = function(t) {
                    if (!this.isValid()) return null != t ? this: NaN;
                    var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
                    return null == t ? e: this.add(t - e, "d")
                },
                vn.isoWeekday = function(t) {
                    if (!this.isValid()) return null != t ? this: NaN;
                    if (null != t) {
                        var e = (n = t, i = this.localeData(), "string" == typeof n ? i.weekdaysParse(n) % 7 || 7 : isNaN(n) ? null: n);
                        return this.day(this.day() % 7 ? e: e - 7)
                    }
                    return this.day() || 7;
                    var n, i
                }, vn.dayOfYear = function(t) {
                var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return null == t ? e: this.add(t - e, "d")
            },
                vn.hour = vn.hours = ne,
                vn.minute = vn.minutes = dn,
                vn.second = vn.seconds = pn,
                vn.millisecond = vn.milliseconds = gn,
                vn.utcOffset = function(t, e, i) {
                    var s, o = this._offset || 0;
                    if (!this.isValid()) return null != t ? this: NaN;
                    if (null != t) {
                        if ("string" == typeof t) {
                            if (null === (t = He(ot, t))) return this
                        } else Math.abs(t) < 16 && !i && (t *= 60);
                        return ! this._isUTC && e && (s = Re(this)),
                            this._offset = t,
                            this._isUTC = !0,
                        null != s && this.add(s, "m"),
                        o !== t && (!e || this._changeInProgress ? Ge(this, qe(t - o, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, n.updateOffset(this, !0), this._changeInProgress = null)),
                            this
                    }
                    return this._isUTC ? o: Re(this)
                },
                vn.utc = function(t) {
                    return this.utcOffset(0, t)
                },
                vn.local = function(t) {
                    return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Re(this), "m")),
                        this
                },
                vn.parseZone = function() {
                    if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
                    else if ("string" == typeof this._i) {
                        var t = He(st, this._i);
                        null != t ? this.utcOffset(t) : this.utcOffset(0, !0)
                    }
                    return this
                },
                vn.hasAlignedHourOffset = function(t) {
                    return !! this.isValid() && (t = t ? Ee(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0)
                },
                vn.isDST = function() {
                    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
                },
                vn.isLocal = function() {
                    return !! this.isValid() && !this._isUTC
                },
                vn.isUtcOffset = function() {
                    return !! this.isValid() && this._isUTC
                },
                vn.isUtc = We,
                vn.isUTC = We,
                vn.zoneAbbr = function() {
                    return this._isUTC ? "UTC": ""
                },
                vn.zoneName = function() {
                    return this._isUTC ? "Coordinated Universal Time": ""
                },
                vn.dates = C("dates accessor is deprecated. Use date instead.", un),
                vn.months = C("months accessor is deprecated. Use month instead", Lt),
                vn.years = C("years accessor is deprecated. Use year instead", Tt),
                vn.zone = C("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
                    function(t, e) {
                        return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
                    }),
                vn.isDSTShifted = C("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
                    function() {
                        if (!o(this._isDSTShifted)) return this._isDSTShifted;
                        var t = {};
                        if (g(t, this), (t = Te(t))._a) {
                            var e = t._isUTC ? u(t._a) : Ee(t._a);
                            this._isDSTShifted = this.isValid() && D(t._a, e.toArray()) > 0
                        } else this._isDSTShifted = !1;
                        return this._isDSTShifted
                    });
            var bn = A.prototype;
            function _n(t, e, n, i) {
                var s = he(),
                    o = u().set(i, e);
                return s[n](o, t)
            }
            function wn(t, e, n) {
                if (r(t) && (e = t, t = void 0), t = t || "", null != e) return _n(t, e, n, "month");
                var i, s = [];
                for (i = 0; i < 12; i++) s[i] = _n(t, i, n, "month");
                return s
            }
            function Dn(t, e, n, i) {
                "boolean" == typeof t ? (r(e) && (n = e, e = void 0), e = e || "") : (n = e = t, t = !1, r(e) && (n = e, e = void 0), e = e || "");
                var s, o = he(),
                    a = t ? o._week.dow: 0;
                if (null != n) return _n(e, (n + a) % 7, i, "day");
                var l = [];
                for (s = 0; s < 7; s++) l[s] = _n(e, (s + a) % 7, i, "day");
                return l
            }
            bn.calendar = function(t, e, n) {
                var i = this._calendar[t] || this._calendar.sameElse;
                return E(i) ? i.call(e, n) : i
            },
                bn.longDateFormat = function(t) {
                    var e = this._longDateFormat[t],
                        n = this._longDateFormat[t.toUpperCase()];
                    return e || !n ? e: (this._longDateFormat[t] = n.replace(/MMMM|MM|DD|dddd/g,
                        function(t) {
                            return t.slice(1)
                        }), this._longDateFormat[t])
                },
                bn.invalidDate = function() {
                    return this._invalidDate
                },
                bn.ordinal = function(t) {
                    return this._ordinal.replace("%d", t)
                },
                bn.preparse = yn,
                bn.postformat = yn,
                bn.relativeTime = function(t, e, n, i) {
                    var s = this._relativeTime[n];
                    return E(s) ? s(t, e, n, i) : s.replace(/%d/i, t)
                },
                bn.pastFuture = function(t, e) {
                    var n = this._relativeTime[t > 0 ? "future": "past"];
                    return E(n) ? n(e) : n.replace(/%s/i, e)
                },
                bn.set = function(t) {
                    var e, n;
                    for (n in t) E(e = t[n]) ? this[n] = e: this["_" + n] = e;
                    this._config = t,
                        this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
                },
                bn.months = function(t, e) {
                    return t ? i(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || Ot).test(e) ? "format": "standalone"][t.month()] : i(this._months) ? this._months: this._months.standalone
                },
                bn.monthsShort = function(t, e) {
                    return t ? i(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[Ot.test(e) ? "format": "standalone"][t.month()] : i(this._monthsShort) ? this._monthsShort: this._monthsShort.standalone
                },
                bn.monthsParse = function(t, e, n) {
                    var i, s, o;
                    if (this._monthsParseExact) return function(t, e, n) {
                        var i, s, o, r = t.toLocaleLowerCase();
                        if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; i < 12; ++i) o = u([2e3, i]),
                            this._shortMonthsParse[i] = this.monthsShort(o, "").toLocaleLowerCase(),
                            this._longMonthsParse[i] = this.months(o, "").toLocaleLowerCase();
                        return n ? "MMM" === e ? -1 !== (s = xt.call(this._shortMonthsParse, r)) ? s: null: -1 !== (s = xt.call(this._longMonthsParse, r)) ? s: null: "MMM" === e ? -1 !== (s = xt.call(this._shortMonthsParse, r)) ? s: -1 !== (s = xt.call(this._longMonthsParse, r)) ? s: null: -1 !== (s = xt.call(this._longMonthsParse, r)) ? s: -1 !== (s = xt.call(this._shortMonthsParse, r)) ? s: null
                    }.call(this, t, e, n);
                    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; i < 12; i++) {
                        if (s = u([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(s, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(s, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (o = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[i] = new RegExp(o.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[i].test(t)) return i;
                        if (n && "MMM" === e && this._shortMonthsParse[i].test(t)) return i;
                        if (!n && this._monthsParse[i].test(t)) return i
                    }
                },
                bn.monthsRegex = function(t) {
                    return this._monthsParseExact ? (c(this, "_monthsRegex") || Ht.call(this), t ? this._monthsStrictRegex: this._monthsRegex) : (c(this, "_monthsRegex") || (this._monthsRegex = Yt), this._monthsStrictRegex && t ? this._monthsStrictRegex: this._monthsRegex)
                },
                bn.monthsShortRegex = function(t) {
                    return this._monthsParseExact ? (c(this, "_monthsRegex") || Ht.call(this), t ? this._monthsShortStrictRegex: this._monthsShortRegex) : (c(this, "_monthsShortRegex") || (this._monthsShortRegex = jt), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex: this._monthsShortRegex)
                },
                bn.week = function(t) {
                    return Ut(t, this._week.dow, this._week.doy).week
                },
                bn.firstDayOfYear = function() {
                    return this._week.doy
                },
                bn.firstDayOfWeek = function() {
                    return this._week.dow
                },
                bn.weekdays = function(t, e) {
                    var n = i(this._weekdays) ? this._weekdays: this._weekdays[t && !0 !== t && this._weekdays.isFormat.test(e) ? "format": "standalone"];
                    return ! 0 === t ? qt(n, this._week.dow) : t ? n[t.day()] : n
                },
                bn.weekdaysMin = function(t) {
                    return ! 0 === t ? qt(this._weekdaysMin, this._week.dow) : t ? this._weekdaysMin[t.day()] : this._weekdaysMin
                },
                bn.weekdaysShort = function(t) {
                    return ! 0 === t ? qt(this._weekdaysShort, this._week.dow) : t ? this._weekdaysShort[t.day()] : this._weekdaysShort
                },
                bn.weekdaysParse = function(t, e, n) {
                    var i, s, o;
                    if (this._weekdaysParseExact) return function(t, e, n) {
                        var i, s, o, r = t.toLocaleLowerCase();
                        if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; i < 7; ++i) o = u([2e3, 1]).day(i),
                            this._minWeekdaysParse[i] = this.weekdaysMin(o, "").toLocaleLowerCase(),
                            this._shortWeekdaysParse[i] = this.weekdaysShort(o, "").toLocaleLowerCase(),
                            this._weekdaysParse[i] = this.weekdays(o, "").toLocaleLowerCase();
                        return n ? "dddd" === e ? -1 !== (s = xt.call(this._weekdaysParse, r)) ? s: null: "ddd" === e ? -1 !== (s = xt.call(this._shortWeekdaysParse, r)) ? s: null: -1 !== (s = xt.call(this._minWeekdaysParse, r)) ? s: null: "dddd" === e ? -1 !== (s = xt.call(this._weekdaysParse, r)) ? s: -1 !== (s = xt.call(this._shortWeekdaysParse, r)) ? s: -1 !== (s = xt.call(this._minWeekdaysParse, r)) ? s: null: "ddd" === e ? -1 !== (s = xt.call(this._shortWeekdaysParse, r)) ? s: -1 !== (s = xt.call(this._weekdaysParse, r)) ? s: -1 !== (s = xt.call(this._minWeekdaysParse, r)) ? s: null: -1 !== (s = xt.call(this._minWeekdaysParse, r)) ? s: -1 !== (s = xt.call(this._weekdaysParse, r)) ? s: -1 !== (s = xt.call(this._shortWeekdaysParse, r)) ? s: null
                    }.call(this, t, e, n);
                    for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; i < 7; i++) {
                        if (s = u([2e3, 1]).day(i), n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(s, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(s, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(s, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[i] || (o = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[i] = new RegExp(o.replace(".", ""), "i")), n && "dddd" === e && this._fullWeekdaysParse[i].test(t)) return i;
                        if (n && "ddd" === e && this._shortWeekdaysParse[i].test(t)) return i;
                        if (n && "dd" === e && this._minWeekdaysParse[i].test(t)) return i;
                        if (!n && this._weekdaysParse[i].test(t)) return i
                    }
                },
                bn.weekdaysRegex = function(t) {
                    return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Zt.call(this), t ? this._weekdaysStrictRegex: this._weekdaysRegex) : (c(this, "_weekdaysRegex") || (this._weekdaysRegex = Gt), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex: this._weekdaysRegex)
                },
                bn.weekdaysShortRegex = function(t) {
                    return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Zt.call(this), t ? this._weekdaysShortStrictRegex: this._weekdaysShortRegex) : (c(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Kt), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex: this._weekdaysShortRegex)
                },
                bn.weekdaysMinRegex = function(t) {
                    return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Zt.call(this), t ? this._weekdaysMinStrictRegex: this._weekdaysMinRegex) : (c(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Qt), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex: this._weekdaysMinRegex)
                },
                bn.isPM = function(t) {
                    return "p" === (t + "").toLowerCase().charAt(0)
                },
                bn.meridiem = function(t, e, n) {
                    return t > 11 ? n ? "pm": "PM": n ? "am": "AM"
                },
                le("en", {
                    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                    ordinal: function(t) {
                        var e = t % 10;
                        return t + (1 === w(t % 100 / 10) ? "th": 1 === e ? "st": 2 === e ? "nd": 3 === e ? "rd": "th")
                    }
                }),
                n.lang = C("moment.lang is deprecated. Use moment.locale instead.", le),
                n.langData = C("moment.langData is deprecated. Use moment.localeData instead.", he);
            var kn = Math.abs;
            function Cn(t, e, n, i) {
                var s = qe(e, n);
                return t._milliseconds += i * s._milliseconds,
                    t._days += i * s._days,
                    t._months += i * s._months,
                    t._bubble()
            }
            function xn(t) {
                return t < 0 ? Math.floor(t) : Math.ceil(t)
            }
            function Tn(t) {
                return 4800 * t / 146097
            }
            function Sn(t) {
                return 146097 * t / 4800
            }
            function En(t) {
                return function() {
                    return this.as(t)
                }
            }
            var Mn = En("ms"),
                An = En("s"),
                On = En("m"),
                In = En("h"),
                Nn = En("d"),
                Pn = En("w"),
                Ln = En("M"),
                jn = En("Q"),
                Yn = En("y");
            function Hn(t) {
                return function() {
                    return this.isValid() ? this._data[t] : NaN
                }
            }
            var $n = Hn("milliseconds"),
                Rn = Hn("seconds"),
                Wn = Hn("minutes"),
                Un = Hn("hours"),
                Fn = Hn("days"),
                qn = Hn("months"),
                Vn = Hn("years");
            var Bn = Math.round,
                zn = {
                    ss: 44,
                    s: 45,
                    m: 45,
                    h: 22,
                    d: 26,
                    M: 11
                };
            var Gn = Math.abs;
            function Kn(t) {
                return (t > 0) - (t < 0) || +t
            }
            function Qn() {
                if (!this.isValid()) return this.localeData().invalidDate();
                var t, e, n = Gn(this._milliseconds) / 1e3,
                    i = Gn(this._days),
                    s = Gn(this._months);
                e = _((t = _(n / 60)) / 60),
                    n %= 60,
                    t %= 60;
                var o = _(s / 12),
                    r = s %= 12,
                    a = i,
                    l = e,
                    c = t,
                    h = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
                    u = this.asSeconds();
                if (!u) return "P0D";
                var d = u < 0 ? "-": "",
                    f = Kn(this._months) !== Kn(u) ? "-": "",
                    p = Kn(this._days) !== Kn(u) ? "-": "",
                    m = Kn(this._milliseconds) !== Kn(u) ? "-": "";
                return d + "P" + (o ? f + o + "Y": "") + (r ? f + r + "M": "") + (a ? p + a + "D": "") + (l || c || h ? "T": "") + (l ? m + l + "H": "") + (c ? m + c + "M": "") + (h ? m + h + "S": "")
            }
            var Zn = Ne.prototype;
            return Zn.isValid = function() {
                return this._isValid
            },
                Zn.abs = function() {
                    var t = this._data;
                    return this._milliseconds = kn(this._milliseconds),
                        this._days = kn(this._days),
                        this._months = kn(this._months),
                        t.milliseconds = kn(t.milliseconds),
                        t.seconds = kn(t.seconds),
                        t.minutes = kn(t.minutes),
                        t.hours = kn(t.hours),
                        t.months = kn(t.months),
                        t.years = kn(t.years),
                        this
                },
                Zn.add = function(t, e) {
                    return Cn(this, t, e, 1)
                },
                Zn.subtract = function(t, e) {
                    return Cn(this, t, e, -1)
                },
                Zn.as = function(t) {
                    if (!this.isValid()) return NaN;
                    var e, n, i = this._milliseconds;
                    if ("month" === (t = N(t)) || "quarter" === t || "year" === t) switch (e = this._days + i / 864e5, n = this._months + Tn(e), t) {
                        case "month":
                            return n;
                        case "quarter":
                            return n / 3;
                        case "year":
                            return n / 12
                    } else switch (e = this._days + Math.round(Sn(this._months)), t) {
                        case "week":
                            return e / 7 + i / 6048e5;
                        case "day":
                            return e + i / 864e5;
                        case "hour":
                            return 24 * e + i / 36e5;
                        case "minute":
                            return 1440 * e + i / 6e4;
                        case "second":
                            return 86400 * e + i / 1e3;
                        case "millisecond":
                            return Math.floor(864e5 * e) + i;
                        default:
                            throw new Error("Unknown unit " + t)
                    }
                },
                Zn.asMilliseconds = Mn,
                Zn.asSeconds = An,
                Zn.asMinutes = On,
                Zn.asHours = In,
                Zn.asDays = Nn,
                Zn.asWeeks = Pn,
                Zn.asMonths = Ln,
                Zn.asQuarters = jn,
                Zn.asYears = Yn,
                Zn.valueOf = function() {
                    return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * w(this._months / 12) : NaN
                },
                Zn._bubble = function() {
                    var t, e, n, i, s, o = this._milliseconds,
                        r = this._days,
                        a = this._months,
                        l = this._data;
                    return o >= 0 && r >= 0 && a >= 0 || o <= 0 && r <= 0 && a <= 0 || (o += 864e5 * xn(Sn(a) + r), r = 0, a = 0),
                        l.milliseconds = o % 1e3,
                        t = _(o / 1e3),
                        l.seconds = t % 60,
                        e = _(t / 60),
                        l.minutes = e % 60,
                        n = _(e / 60),
                        l.hours = n % 24,
                        a += s = _(Tn(r += _(n / 24))),
                        r -= xn(Sn(s)),
                        i = _(a / 12),
                        a %= 12,
                        l.days = r,
                        l.months = a,
                        l.years = i,
                        this
                },
                Zn.clone = function() {
                    return qe(this)
                },
                Zn.get = function(t) {
                    return t = N(t),
                        this.isValid() ? this[t + "s"]() : NaN
                },
                Zn.milliseconds = $n,
                Zn.seconds = Rn,
                Zn.minutes = Wn,
                Zn.hours = Un,
                Zn.days = Fn,
                Zn.weeks = function() {
                    return _(this.days() / 7)
                },
                Zn.months = qn,
                Zn.years = Vn,
                Zn.humanize = function(t) {
                    if (!this.isValid()) return this.localeData().invalidDate();
                    var e, n, i, s, o, r, a, l, c, h, u, d = this.localeData(),
                        f = (n = !t, i = d, s = qe(e = this).abs(), o = Bn(s.as("s")), r = Bn(s.as("m")), a = Bn(s.as("h")), l = Bn(s.as("d")), c = Bn(s.as("M")), h = Bn(s.as("y")), (u = o <= zn.ss && ["s", o] || o < zn.s && ["ss", o] || r <= 1 && ["m"] || r < zn.m && ["mm", r] || a <= 1 && ["h"] || a < zn.h && ["hh", a] || l <= 1 && ["d"] || l < zn.d && ["dd", l] || c <= 1 && ["M"] || c < zn.M && ["MM", c] || h <= 1 && ["y"] || ["yy", h])[2] = n, u[3] = +e > 0, u[4] = i,
                            function(t, e, n, i, s) {
                                return s.relativeTime(e || 1, !!n, t, i)
                            }.apply(null, u));
                    return t && (f = d.pastFuture( + this, f)),
                        d.postformat(f)
                },
                Zn.toISOString = Qn,
                Zn.toString = Qn,
                Zn.toJSON = Qn,
                Zn.locale = Xe,
                Zn.localeData = tn,
                Zn.toIsoString = C("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Qn),
                Zn.lang = Je,
                U("X", 0, 0, "unix"),
                U("x", 0, 0, "valueOf"),
                lt("x", it),
                lt("X", /[+-]?\d+(\.\d{1,3})?/),
                dt("X",
                    function(t, e, n) {
                        n._d = new Date(1e3 * parseFloat(t, 10))
                    }),
                dt("x",
                    function(t, e, n) {
                        n._d = new Date(w(t))
                    }),
                n.version = "2.24.0",
                t = Ee,
                n.fn = vn,
                n.min = function() {
                    return Oe("isBefore", [].slice.call(arguments, 0))
                },
                n.max = function() {
                    return Oe("isAfter", [].slice.call(arguments, 0))
                },
                n.now = function() {
                    return Date.now ? Date.now() : +new Date
                },
                n.utc = u,
                n.unix = function(t) {
                    return Ee(1e3 * t)
                },
                n.months = function(t, e) {
                    return wn(t, e, "months")
                },
                n.isDate = a,
                n.locale = le,
                n.invalid = p,
                n.duration = qe,
                n.isMoment = b,
                n.weekdays = function(t, e, n) {
                    return Dn(t, e, n, "weekdays")
                },
                n.parseZone = function() {
                    return Ee.apply(null, arguments).parseZone()
                },
                n.localeData = he,
                n.isDuration = Pe,
                n.monthsShort = function(t, e) {
                    return wn(t, e, "monthsShort")
                },
                n.weekdaysMin = function(t, e, n) {
                    return Dn(t, e, n, "weekdaysMin")
                },
                n.defineLocale = ce,
                n.updateLocale = function(t, e) {
                    if (null != e) {
                        var n, i, s = ie;
                        null != (i = ae(t)) && (s = i._config),
                            (n = new A(e = M(s, e))).parentLocale = se[t],
                            se[t] = n,
                            le(t)
                    } else null != se[t] && (null != se[t].parentLocale ? se[t] = se[t].parentLocale: null != se[t] && delete se[t]);
                    return se[t]
                },
                n.locales = function() {
                    return x(se)
                },
                n.weekdaysShort = function(t, e, n) {
                    return Dn(t, e, n, "weekdaysShort")
                },
                n.normalizeUnits = N,
                n.relativeTimeRounding = function(t) {
                    return void 0 === t ? Bn: "function" == typeof t && (Bn = t, !0)
                },
                n.relativeTimeThreshold = function(t, e) {
                    return void 0 !== zn[t] && (void 0 === e ? zn[t] : (zn[t] = e, "s" === t && (zn.ss = e - 1), !0))
                },
                n.calendarFormat = function(t, e) {
                    var n = t.diff(e, "days", !0);
                    return n < -6 ? "sameElse": n < -1 ? "lastWeek": n < 0 ? "lastDay": n < 1 ? "sameDay": n < 2 ? "nextDay": n < 7 ? "nextWeek": "sameElse"
                },
                n.prototype = vn,
                n.HTML5_FMT = {
                    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                    DATE: "YYYY-MM-DD",
                    TIME: "HH:mm",
                    TIME_SECONDS: "HH:mm:ss",
                    TIME_MS: "HH:mm:ss.SSS",
                    WEEK: "GGGG-[W]WW",
                    MONTH: "YYYY-MM"
                },
                n
        }),
    function(e) {
        e.fn.extend({
            slimScroll: function(n) {
                var i = e.extend({
                        width: "auto",
                        height: "250px",
                        size: "7px",
                        color: "#000",
                        position: "right",
                        distance: "1px",
                        start: "top",
                        opacity: .4,
                        alwaysVisible: !1,
                        disableFadeOut: !1,
                        railVisible: !1,
                        railColor: "#333",
                        railOpacity: .2,
                        railDraggable: !0,
                        railClass: "slimScrollRail",
                        barClass: "slimScrollBar",
                        wrapperClass: "slimScrollDiv",
                        allowPageScroll: !1,
                        wheelStep: 20,
                        touchScrollStep: 200,
                        borderRadius: "7px",
                        railBorderRadius: "7px"
                    },
                    n);
                return this.each(function() {
                    var s, o, r, a, l, c, h, u, d = "<div></div>",
                        f = 30,
                        p = !1,
                        m = e(this);
                    if (m.parent().hasClass(i.wrapperClass)) {
                        var g = m.scrollTop();
                        if (D = m.siblings("." + i.barClass), w = m.siblings("." + i.railClass), T(), e.isPlainObject(n)) {
                            if ("height" in n && "auto" == n.height) {
                                m.parent().css("height", "auto"),
                                    m.css("height", "auto");
                                var v = m.parent().parent().height();
                                m.parent().css("height", v),
                                    m.css("height", v)
                            } else if ("height" in n) {
                                var y = n.height;
                                m.parent().css("height", y),
                                    m.css("height", y)
                            }
                            if ("scrollTo" in n) g = parseInt(i.scrollTo);
                            else if ("scrollBy" in n) g += parseInt(i.scrollBy);
                            else if ("destroy" in n) return D.remove(),
                                w.remove(),
                                void m.unwrap();
                            x(g, !1, !0)
                        }
                    } else if (! (e.isPlainObject(n) && "destroy" in n)) {
                        i.height = "auto" == i.height ? m.parent().height() : i.height;
                        var b = e(d).addClass(i.wrapperClass).css({
                            position: "relative",
                            overflow: "hidden",
                            width: i.width,
                            height: i.height
                        });
                        m.css({
                            overflow: "hidden",
                            width: i.width,
                            height: i.height
                        });
                        var _, w = e(d).addClass(i.railClass).css({
                                width: i.size,
                                height: "100%",
                                position: "absolute",
                                top: 0,
                                display: i.alwaysVisible && i.railVisible ? "block": "none",
                                "border-radius": i.railBorderRadius,
                                background: i.railColor,
                                opacity: i.railOpacity,
                                zIndex: 90
                            }),
                            D = e(d).addClass(i.barClass).css({
                                background: i.color,
                                width: i.size,
                                position: "absolute",
                                top: 0,
                                opacity: i.opacity,
                                display: i.alwaysVisible ? "block": "none",
                                "border-radius": i.borderRadius,
                                BorderRadius: i.borderRadius,
                                MozBorderRadius: i.borderRadius,
                                WebkitBorderRadius: i.borderRadius,
                                zIndex: 99
                            }),
                            k = "right" == i.position ? {
                                right: i.distance
                            }: {
                                left: i.distance
                            };
                        w.css(k),
                            D.css(k),
                            m.wrap(b),
                            m.parent().append(D),
                            m.parent().append(w),
                        i.railDraggable && D.bind("mousedown",
                            function(n) {
                                var i = e(document);
                                return r = !0,
                                    t = parseFloat(D.css("top")),
                                    pageY = n.pageY,
                                    i.bind("mousemove.slimscroll",
                                        function(e) {
                                            currTop = t + e.pageY - pageY,
                                                D.css("top", currTop),
                                                x(0, D.position().top, !1)
                                        }),
                                    i.bind("mouseup.slimscroll",
                                        function(t) {
                                            r = !1,
                                                E(),
                                                i.unbind(".slimscroll")
                                        }),
                                    !1
                            }).bind("selectstart.slimscroll",
                            function(t) {
                                return t.stopPropagation(),
                                    t.preventDefault(),
                                    !1
                            }),
                            w.hover(function() {
                                    S()
                                },
                                function() {
                                    E()
                                }),
                            D.hover(function() {
                                    o = !0
                                },
                                function() {
                                    o = !1
                                }),
                            m.hover(function() {
                                    s = !0,
                                        S(),
                                        E()
                                },
                                function() {
                                    s = !1,
                                        E()
                                }),
                            m.bind("touchstart",
                                function(t, e) {
                                    t.originalEvent.touches.length && (l = t.originalEvent.touches[0].pageY)
                                }),
                            m.bind("touchmove",
                                function(t) { (p || t.originalEvent.preventDefault(), t.originalEvent.touches.length) && (x((l - t.originalEvent.touches[0].pageY) / i.touchScrollStep, !0), l = t.originalEvent.touches[0].pageY)
                                }),
                            T(),
                            "bottom" === i.start ? (D.css({
                                top: m.outerHeight() - D.outerHeight()
                            }), x(0, !0)) : "top" !== i.start && (x(e(i.start).position().top, null, !0), i.alwaysVisible || D.hide()),
                            _ = this,
                            window.addEventListener ? (_.addEventListener("DOMMouseScroll", C, !1), _.addEventListener("mousewheel", C, !1)) : document.attachEvent("onmousewheel", C)
                    }
                    function C(t) {
                        if (s) {
                            var n = 0; (t = t || window.event).wheelDelta && (n = -t.wheelDelta / 120),
                            t.detail && (n = t.detail / 3);
                            var o = t.target || t.srcTarget || t.srcElement;
                            e(o).closest("." + i.wrapperClass).is(m.parent()) && x(n, !0),
                            t.preventDefault && !p && t.preventDefault(),
                            p || (t.returnValue = !1)
                        }
                    }
                    function x(t, e, n) {
                        p = !1;
                        var s = t,
                            o = m.outerHeight() - D.outerHeight();
                        if (e && (s = parseInt(D.css("top")) + t * parseInt(i.wheelStep) / 100 * D.outerHeight(), s = Math.min(Math.max(s, 0), o), s = t > 0 ? Math.ceil(s) : Math.floor(s), D.css({
                            top: s + "px"
                        })), s = (h = parseInt(D.css("top")) / (m.outerHeight() - D.outerHeight())) * (m[0].scrollHeight - m.outerHeight()), n) {
                            var r = (s = t) / m[0].scrollHeight * m.outerHeight();
                            r = Math.min(Math.max(r, 0), o),
                                D.css({
                                    top: r + "px"
                                })
                        }
                        m.scrollTop(s),
                            m.trigger("slimscrolling", ~~s),
                            S(),
                            E()
                    }
                    function T() {
                        c = Math.max(m.outerHeight() / m[0].scrollHeight * m.outerHeight(), f),
                            D.css({
                                height: c + "px"
                            });
                        var t = c == m.outerHeight() ? "none": "block";
                        D.css({
                            display: t
                        })
                    }
                    function S() {
                        if (T(), clearTimeout(a), h == ~~h) {
                            if (p = i.allowPageScroll, u != h) {
                                var t = 0 == ~~h ? "top": "bottom";
                                m.trigger("slimscroll", t)
                            }
                        } else p = !1;
                        u = h,
                            c >= m.outerHeight() ? p = !0 : (D.stop(!0, !0).fadeIn("fast"), i.railVisible && w.stop(!0, !0).fadeIn("fast"))
                    }
                    function E() {
                        i.alwaysVisible || (a = setTimeout(function() {
                                i.disableFadeOut && s || o || r || (D.fadeOut("slow"), w.fadeOut("slow"))
                            },
                            1e3))
                    }
                }),
                    this
            }
        }),
            e.fn.extend({
                slimscroll: e.fn.slimScroll
            })
    } (jQuery),
    function(t, e) {
        if ("function" == typeof define && define.amd) define(["moment", "jquery"],
            function(t, n) {
                return n.fn || (n.fn = {}),
                    e(t, n)
            });
        else if ("object" == typeof module && module.exports) {
            var n = "undefined" != typeof window ? window.jQuery: void 0;
            n || (n = require("jquery")).fn || (n.fn = {});
            var i = "undefined" != typeof window && void 0 !== window.moment ? window.moment: require("moment");
            module.exports = e(i, n)
        } else t.daterangepicker = e(t.moment, t.jQuery)
    } (this,
        function(t, e) {
            var n = function(n, i, s) {
                if (this.parentEl = "body", this.element = e(n), this.startDate = t().startOf("day"), this.endDate = t().endOf("day"), this.minDate = !1, this.maxDate = !1, this.maxSpan = !1, this.autoApply = !1, this.singleDatePicker = !1, this.showDropdowns = !1, this.minYear = t().subtract(100, "year").format("YYYY"), this.maxYear = t().add(100, "year").format("YYYY"), this.showWeekNumbers = !1, this.showISOWeekNumbers = !1, this.showCustomRangeLabel = !0, this.timePicker = !1, this.timePicker24Hour = !1, this.timePickerIncrement = 1, this.timePickerSeconds = !1, this.linkedCalendars = !0, this.autoUpdateInput = !0, this.alwaysShowCalendars = !1, this.ranges = {},
                    this.opens = "right", this.element.hasClass("pull-right") && (this.opens = "left"), this.drops = "down", this.element.hasClass("dropup") && (this.drops = "up"), this.buttonClasses = "btn btn-sm", this.applyButtonClasses = "btn-primary", this.cancelButtonClasses = "btn-default", this.locale = {
                    direction: "ltr",
                    format: t.localeData().longDateFormat("L"),
                    separator: " - ",
                    applyLabel: "Apply",
                    cancelLabel: "Cancel",
                    weekLabel: "W",
                    customRangeLabel: "Custom Range",
                    daysOfWeek: t.weekdaysMin(),
                    monthNames: t.monthsShort(),
                    firstDay: t.localeData().firstDayOfWeek()
                },
                    this.callback = function() {},
                    this.isShowing = !1, this.leftCalendar = {},
                    this.rightCalendar = {},
                "object" == typeof i && null !== i || (i = {}), "string" == typeof(i = e.extend(this.element.data(), i)).template || i.template instanceof e || (i.template = '<div class="daterangepicker"><div class="ranges"></div><div class="drp-calendar left"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="drp-calendar right"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="drp-buttons"><span class="drp-selected"></span><button class="cancelBtn" type="button"></button><button class="applyBtn" disabled="disabled" type="button"></button> </div></div>'), this.parentEl = i.parentEl && e(i.parentEl).length ? e(i.parentEl) : e(this.parentEl), this.container = e(i.template).appendTo(this.parentEl), "object" == typeof i.locale && ("string" == typeof i.locale.direction && (this.locale.direction = i.locale.direction), "string" == typeof i.locale.format && (this.locale.format = i.locale.format), "string" == typeof i.locale.separator && (this.locale.separator = i.locale.separator), "object" == typeof i.locale.daysOfWeek && (this.locale.daysOfWeek = i.locale.daysOfWeek.slice()), "object" == typeof i.locale.monthNames && (this.locale.monthNames = i.locale.monthNames.slice()), "number" == typeof i.locale.firstDay && (this.locale.firstDay = i.locale.firstDay), "string" == typeof i.locale.applyLabel && (this.locale.applyLabel = i.locale.applyLabel), "string" == typeof i.locale.cancelLabel && (this.locale.cancelLabel = i.locale.cancelLabel), "string" == typeof i.locale.weekLabel && (this.locale.weekLabel = i.locale.weekLabel), "string" == typeof i.locale.customRangeLabel)) { (f = document.createElement("textarea")).innerHTML = i.locale.customRangeLabel;
                    var o = f.value;
                    this.locale.customRangeLabel = o
                }
                if (this.container.addClass(this.locale.direction), "string" == typeof i.startDate && (this.startDate = t(i.startDate, this.locale.format)), "string" == typeof i.endDate && (this.endDate = t(i.endDate, this.locale.format)), "string" == typeof i.minDate && (this.minDate = t(i.minDate, this.locale.format)), "string" == typeof i.maxDate && (this.maxDate = t(i.maxDate, this.locale.format)), "object" == typeof i.startDate && (this.startDate = t(i.startDate)), "object" == typeof i.endDate && (this.endDate = t(i.endDate)), "object" == typeof i.minDate && (this.minDate = t(i.minDate)), "object" == typeof i.maxDate && (this.maxDate = t(i.maxDate)), this.minDate && this.startDate.isBefore(this.minDate) && (this.startDate = this.minDate.clone()), this.maxDate && this.endDate.isAfter(this.maxDate) && (this.endDate = this.maxDate.clone()), "string" == typeof i.applyButtonClasses && (this.applyButtonClasses = i.applyButtonClasses), "string" == typeof i.applyClass && (this.applyButtonClasses = i.applyClass), "string" == typeof i.cancelButtonClasses && (this.cancelButtonClasses = i.cancelButtonClasses), "string" == typeof i.cancelClass && (this.cancelButtonClasses = i.cancelClass), "object" == typeof i.maxSpan && (this.maxSpan = i.maxSpan), "object" == typeof i.dateLimit && (this.maxSpan = i.dateLimit), "string" == typeof i.opens && (this.opens = i.opens), "string" == typeof i.drops && (this.drops = i.drops), "boolean" == typeof i.showWeekNumbers && (this.showWeekNumbers = i.showWeekNumbers), "boolean" == typeof i.showISOWeekNumbers && (this.showISOWeekNumbers = i.showISOWeekNumbers), "string" == typeof i.buttonClasses && (this.buttonClasses = i.buttonClasses), "object" == typeof i.buttonClasses && (this.buttonClasses = i.buttonClasses.join(" ")), "boolean" == typeof i.showDropdowns && (this.showDropdowns = i.showDropdowns), "number" == typeof i.minYear && (this.minYear = i.minYear), "number" == typeof i.maxYear && (this.maxYear = i.maxYear), "boolean" == typeof i.showCustomRangeLabel && (this.showCustomRangeLabel = i.showCustomRangeLabel), "boolean" == typeof i.singleDatePicker && (this.singleDatePicker = i.singleDatePicker, this.singleDatePicker && (this.endDate = this.startDate.clone())), "boolean" == typeof i.timePicker && (this.timePicker = i.timePicker), "boolean" == typeof i.timePickerSeconds && (this.timePickerSeconds = i.timePickerSeconds), "number" == typeof i.timePickerIncrement && (this.timePickerIncrement = i.timePickerIncrement), "boolean" == typeof i.timePicker24Hour && (this.timePicker24Hour = i.timePicker24Hour), "boolean" == typeof i.autoApply && (this.autoApply = i.autoApply), "boolean" == typeof i.autoUpdateInput && (this.autoUpdateInput = i.autoUpdateInput), "boolean" == typeof i.linkedCalendars && (this.linkedCalendars = i.linkedCalendars), "function" == typeof i.isInvalidDate && (this.isInvalidDate = i.isInvalidDate), "function" == typeof i.isCustomDate && (this.isCustomDate = i.isCustomDate), "boolean" == typeof i.alwaysShowCalendars && (this.alwaysShowCalendars = i.alwaysShowCalendars), 0 != this.locale.firstDay) for (var r = this.locale.firstDay; r > 0;) this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift()),
                    r--;
                var a, l, c;
                if (void 0 === i.startDate && void 0 === i.endDate && e(this.element).is(":text")) {
                    var h = e(this.element).val(),
                        u = h.split(this.locale.separator);
                    a = l = null,
                        2 == u.length ? (a = t(u[0], this.locale.format), l = t(u[1], this.locale.format)) : this.singleDatePicker && "" !== h && (a = t(h, this.locale.format), l = t(h, this.locale.format)),
                    null !== a && null !== l && (this.setStartDate(a), this.setEndDate(l))
                }
                if ("object" == typeof i.ranges) {
                    for (c in i.ranges) {
                        a = "string" == typeof i.ranges[c][0] ? t(i.ranges[c][0], this.locale.format) : t(i.ranges[c][0]),
                            l = "string" == typeof i.ranges[c][1] ? t(i.ranges[c][1], this.locale.format) : t(i.ranges[c][1]),
                        this.minDate && a.isBefore(this.minDate) && (a = this.minDate.clone());
                        var d = this.maxDate;
                        if (this.maxSpan && d && a.clone().add(this.maxSpan).isAfter(d) && (d = a.clone().add(this.maxSpan)), d && l.isAfter(d) && (l = d.clone()), !(this.minDate && l.isBefore(this.minDate, this.timepicker ? "minute": "day") || d && a.isAfter(d, this.timepicker ? "minute": "day"))) {
                            var f; (f = document.createElement("textarea")).innerHTML = c;
                            o = f.value;
                            this.ranges[o] = [a, l]
                        }
                    }
                    var p = "<ul>";
                    for (c in this.ranges) p += '<li data-range-key="' + c + '">' + c + "</li>";
                    this.showCustomRangeLabel && (p += '<li data-range-key="' + this.locale.customRangeLabel + '">' + this.locale.customRangeLabel + "</li>"),
                        p += "</ul>",
                        this.container.find(".ranges").prepend(p)
                }
                "function" == typeof s && (this.callback = s),
                this.timePicker || (this.startDate = this.startDate.startOf("day"), this.endDate = this.endDate.endOf("day"), this.container.find(".calendar-time").hide()),
                this.timePicker && this.autoApply && (this.autoApply = !1),
                this.autoApply && this.container.addClass("auto-apply"),
                "object" == typeof i.ranges && this.container.addClass("show-ranges"),
                this.singleDatePicker && (this.container.addClass("single"), this.container.find(".drp-calendar.left").addClass("single"), this.container.find(".drp-calendar.left").show(), this.container.find(".drp-calendar.right").hide(), this.timePicker || this.container.addClass("auto-apply")),
                (void 0 === i.ranges && !this.singleDatePicker || this.alwaysShowCalendars) && this.container.addClass("show-calendar"),
                    this.container.addClass("opens" + this.opens),
                    this.container.find(".applyBtn, .cancelBtn").addClass(this.buttonClasses),
                this.applyButtonClasses.length && this.container.find(".applyBtn").addClass(this.applyButtonClasses),
                this.cancelButtonClasses.length && this.container.find(".cancelBtn").addClass(this.cancelButtonClasses),
                    this.container.find(".applyBtn").html(this.locale.applyLabel),
                    this.container.find(".cancelBtn").html(this.locale.cancelLabel),
                    this.container.find(".drp-calendar").on("click.daterangepicker", ".prev", e.proxy(this.clickPrev, this)).on("click.daterangepicker", ".next", e.proxy(this.clickNext, this)).on("mousedown.daterangepicker", "td.available", e.proxy(this.clickDate, this)).on("mouseenter.daterangepicker", "td.available", e.proxy(this.hoverDate, this)).on("change.daterangepicker", "select.yearselect", e.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.monthselect", e.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.hourselect,select.minuteselect,select.secondselect,select.ampmselect", e.proxy(this.timeChanged, this)),
                    this.container.find(".ranges").on("click.daterangepicker", "li", e.proxy(this.clickRange, this)),
                    this.container.find(".drp-buttons").on("click.daterangepicker", "button.applyBtn", e.proxy(this.clickApply, this)).on("click.daterangepicker", "button.cancelBtn", e.proxy(this.clickCancel, this)),
                    this.element.is("input") || this.element.is("button") ? this.element.on({
                        "click.daterangepicker": e.proxy(this.show, this),
                        "focus.daterangepicker": e.proxy(this.show, this),
                        "keyup.daterangepicker": e.proxy(this.elementChanged, this),
                        "keydown.daterangepicker": e.proxy(this.keydown, this)
                    }) : (this.element.on("click.daterangepicker", e.proxy(this.toggle, this)), this.element.on("keydown.daterangepicker", e.proxy(this.toggle, this))),
                    this.updateElement()
            };
            return n.prototype = {
                constructor: n,
                setStartDate: function(e) {
                    "string" == typeof e && (this.startDate = t(e, this.locale.format)),
                    "object" == typeof e && (this.startDate = t(e)),
                    this.timePicker || (this.startDate = this.startDate.startOf("day")),
                    this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement),
                    this.minDate && this.startDate.isBefore(this.minDate) && (this.startDate = this.minDate.clone(), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement)),
                    this.maxDate && this.startDate.isAfter(this.maxDate) && (this.startDate = this.maxDate.clone(), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement)),
                    this.isShowing || this.updateElement(),
                        this.updateMonthsInView()
                },
                setEndDate: function(e) {
                    "string" == typeof e && (this.endDate = t(e, this.locale.format)),
                    "object" == typeof e && (this.endDate = t(e)),
                    this.timePicker || (this.endDate = this.endDate.add(1, "d").startOf("day").subtract(1, "second")),
                    this.timePicker && this.timePickerIncrement && this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement),
                    this.endDate.isBefore(this.startDate) && (this.endDate = this.startDate.clone()),
                    this.maxDate && this.endDate.isAfter(this.maxDate) && (this.endDate = this.maxDate.clone()),
                    this.maxSpan && this.startDate.clone().add(this.maxSpan).isBefore(this.endDate) && (this.endDate = this.startDate.clone().add(this.maxSpan)),
                        this.previousRightTime = this.endDate.clone(),
                        this.container.find(".drp-selected").html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)),
                    this.isShowing || this.updateElement(),
                        this.updateMonthsInView()
                },
                isInvalidDate: function() {
                    return ! 1
                },
                isCustomDate: function() {
                    return ! 1
                },
                updateView: function() {
                    this.timePicker && (this.renderTimePicker("left"), this.renderTimePicker("right"), this.endDate ? this.container.find(".right .calendar-time select").removeAttr("disabled").removeClass("disabled") : this.container.find(".right .calendar-time select").attr("disabled", "disabled").addClass("disabled")),
                    this.endDate && this.container.find(".drp-selected").html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)),
                        this.updateMonthsInView(),
                        this.updateCalendars(),
                        this.updateFormInputs()
                },
                updateMonthsInView: function() {
                    if (this.endDate) {
                        if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month && (this.startDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.startDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM")) && (this.endDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.endDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM"))) return;
                        this.leftCalendar.month = this.startDate.clone().date(2),
                            this.linkedCalendars || this.endDate.month() == this.startDate.month() && this.endDate.year() == this.startDate.year() ? this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month") : this.rightCalendar.month = this.endDate.clone().date(2)
                    } else this.leftCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") && this.rightCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") && (this.leftCalendar.month = this.startDate.clone().date(2), this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month"));
                    this.maxDate && this.linkedCalendars && !this.singleDatePicker && this.rightCalendar.month > this.maxDate && (this.rightCalendar.month = this.maxDate.clone().date(2), this.leftCalendar.month = this.maxDate.clone().date(2).subtract(1, "month"))
                },
                updateCalendars: function() {
                    if (this.timePicker) {
                        var t, e, n, i;
                        if (this.endDate) {
                            if (t = parseInt(this.container.find(".left .hourselect").val(), 10), e = parseInt(this.container.find(".left .minuteselect").val(), 10), n = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0, !this.timePicker24Hour)"PM" === (i = this.container.find(".left .ampmselect").val()) && t < 12 && (t += 12),
                            "AM" === i && 12 === t && (t = 0)
                        } else if (t = parseInt(this.container.find(".right .hourselect").val(), 10), e = parseInt(this.container.find(".right .minuteselect").val(), 10), n = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0, !this.timePicker24Hour)"PM" === (i = this.container.find(".right .ampmselect").val()) && t < 12 && (t += 12),
                        "AM" === i && 12 === t && (t = 0);
                        this.leftCalendar.month.hour(t).minute(e).second(n),
                            this.rightCalendar.month.hour(t).minute(e).second(n)
                    }
                    this.renderCalendar("left"),
                        this.renderCalendar("right"),
                        this.container.find(".ranges li").removeClass("active"),
                    null != this.endDate && this.calculateChosenLabel()
                },
                renderCalendar: function(n) {
                    var i, s = (i = "left" == n ? this.leftCalendar: this.rightCalendar).month.month(),
                        o = i.month.year(),
                        r = i.month.hour(),
                        a = i.month.minute(),
                        l = i.month.second(),
                        c = t([o, s]).daysInMonth(),
                        h = t([o, s, 1]),
                        u = t([o, s, c]),
                        d = t(h).subtract(1, "month").month(),
                        f = t(h).subtract(1, "month").year(),
                        p = t([f, d]).daysInMonth(),
                        m = h.day(); (i = []).firstDay = h,
                        i.lastDay = u;
                    for (var g = 0; g < 6; g++) i[g] = [];
                    var v = p - m + this.locale.firstDay + 1;
                    v > p && (v -= 7),
                    m == this.locale.firstDay && (v = p - 6);
                    for (var y = t([f, d, v, 12, a, l]), b = (g = 0, 0), _ = 0; g < 42; g++, b++, y = t(y).add(24, "hour")) g > 0 && b % 7 == 0 && (b = 0, _++),
                        i[_][b] = y.clone().hour(r).minute(a).second(l),
                        y.hour(12),
                    this.minDate && i[_][b].format("YYYY-MM-DD") == this.minDate.format("YYYY-MM-DD") && i[_][b].isBefore(this.minDate) && "left" == n && (i[_][b] = this.minDate.clone()),
                    this.maxDate && i[_][b].format("YYYY-MM-DD") == this.maxDate.format("YYYY-MM-DD") && i[_][b].isAfter(this.maxDate) && "right" == n && (i[_][b] = this.maxDate.clone());
                    "left" == n ? this.leftCalendar.calendar = i: this.rightCalendar.calendar = i;
                    var w = "left" == n ? this.minDate: this.startDate,
                        D = this.maxDate,
                        k = ("left" == n ? this.startDate: this.endDate, this.locale.direction, '<table class="table-condensed">');
                    k += "<thead>",
                        k += "<tr>",
                    (this.showWeekNumbers || this.showISOWeekNumbers) && (k += "<th></th>"),
                        w && !w.isBefore(i.firstDay) || this.linkedCalendars && "left" != n ? k += "<th></th>": k += '<th class="prev available"><span></span></th>';
                    var C = this.locale.monthNames[i[1][1].month()] + i[1][1].format(" YYYY");
                    if (this.showDropdowns) {
                        for (var x = i[1][1].month(), T = i[1][1].year(), S = D && D.year() || this.maxYear, E = w && w.year() || this.minYear, M = T == E, A = T == S, O = '<select class="monthselect">', I = 0; I < 12; I++)(!M || I >= w.month()) && (!A || I <= D.month()) ? O += "<option value='" + I + "'" + (I === x ? " selected='selected'": "") + ">" + this.locale.monthNames[I] + "</option>": O += "<option value='" + I + "'" + (I === x ? " selected='selected'": "") + " disabled='disabled'>" + this.locale.monthNames[I] + "</option>";
                        O += "</select>";
                        for (var N = '<select class="yearselect">',
                                 P = E; P <= S; P++) N += '<option value="' + P + '"' + (P === T ? ' selected="selected"': "") + ">" + P + "</option>";
                        C = O + (N += "</select>")
                    }
                    if (k += '<th colspan="5" class="month">' + C + "</th>", D && !D.isAfter(i.lastDay) || this.linkedCalendars && "right" != n && !this.singleDatePicker ? k += "<th></th>": k += '<th class="next available"><span></span></th>', k += "</tr>", k += "<tr>", (this.showWeekNumbers || this.showISOWeekNumbers) && (k += '<th class="week">' + this.locale.weekLabel + "</th>"), e.each(this.locale.daysOfWeek,
                        function(t, e) {
                            k += "<th>" + e + "</th>"
                        }), k += "</tr>", k += "</thead>", k += "<tbody>", null == this.endDate && this.maxSpan) {
                        var L = this.startDate.clone().add(this.maxSpan).endOf("day");
                        D && !L.isBefore(D) || (D = L)
                    }
                    for (_ = 0; _ < 6; _++) {
                        k += "<tr>",
                            this.showWeekNumbers ? k += '<td class="week">' + i[_][0].week() + "</td>": this.showISOWeekNumbers && (k += '<td class="week">' + i[_][0].isoWeek() + "</td>");
                        for (b = 0; b < 7; b++) {
                            var j = [];
                            i[_][b].isSame(new Date, "day") && j.push("today"),
                            i[_][b].isoWeekday() > 5 && j.push("weekend"),
                            i[_][b].month() != i[1][1].month() && j.push("off"),
                            this.minDate && i[_][b].isBefore(this.minDate, "day") && j.push("off", "disabled"),
                            D && i[_][b].isAfter(D, "day") && j.push("off", "disabled"),
                            this.isInvalidDate(i[_][b]) && j.push("off", "disabled"),
                            i[_][b].format("YYYY-MM-DD") == this.startDate.format("YYYY-MM-DD") && j.push("active", "start-date"),
                            null != this.endDate && i[_][b].format("YYYY-MM-DD") == this.endDate.format("YYYY-MM-DD") && j.push("active", "end-date"),
                            null != this.endDate && i[_][b] > this.startDate && i[_][b] < this.endDate && j.push("in-range");
                            var Y = this.isCustomDate(i[_][b]); ! 1 !== Y && ("string" == typeof Y ? j.push(Y) : Array.prototype.push.apply(j, Y));
                            var H = "",
                                $ = !1;
                            for (g = 0; g < j.length; g++) H += j[g] + " ",
                            "disabled" == j[g] && ($ = !0);
                            $ || (H += "available"),
                                k += '<td class="' + H.replace(/^\s+|\s+$/g, "") + '" data-title="r' + _ + "c" + b + '">' + i[_][b].date() + "</td>"
                        }
                        k += "</tr>"
                    }
                    k += "</tbody>",
                        k += "</table>",
                        this.container.find(".drp-calendar." + n + " .calendar-table").html(k)
                },
                renderTimePicker: function(t) {
                    if ("right" != t || this.endDate) {
                        var e, n, i, s = this.maxDate;
                        if (!this.maxSpan || this.maxDate && !this.startDate.clone().add(this.maxSpan).isAfter(this.maxDate) || (s = this.startDate.clone().add(this.maxSpan)), "left" == t) n = this.startDate.clone(),
                            i = this.minDate;
                        else if ("right" == t) {
                            n = this.endDate.clone(),
                                i = this.startDate;
                            var o = this.container.find(".drp-calendar.right .calendar-time");
                            if ("" != o.html() && (n.hour(n.hour() || o.find(".hourselect option:selected").val()), n.minute(n.minute() || o.find(".minuteselect option:selected").val()), n.second(n.second() || o.find(".secondselect option:selected").val()), !this.timePicker24Hour)) {
                                var r = o.find(".ampmselect option:selected").val();
                                "PM" === r && n.hour() < 12 && n.hour(n.hour() + 12),
                                "AM" === r && 12 === n.hour() && n.hour(0)
                            }
                            n.isBefore(this.startDate) && (n = this.startDate.clone()),
                            s && n.isAfter(s) && (n = s.clone())
                        }
                        e = '<select class="hourselect">';
                        for (var a = this.timePicker24Hour ? 0 : 1, l = this.timePicker24Hour ? 23 : 12, c = a; c <= l; c++) {
                            var h = c;
                            this.timePicker24Hour || (h = n.hour() >= 12 ? 12 == c ? 12 : c + 12 : 12 == c ? 0 : c);
                            var u = n.clone().hour(h),
                                d = !1;
                            i && u.minute(59).isBefore(i) && (d = !0),
                            s && u.minute(0).isAfter(s) && (d = !0),
                                h != n.hour() || d ? e += d ? '<option value="' + c + '" disabled="disabled" class="disabled">' + c + "</option>": '<option value="' + c + '">' + c + "</option>": e += '<option value="' + c + '" selected="selected">' + c + "</option>"
                        }
                        e += "</select> ",
                            e += ': <select class="minuteselect">';
                        for (c = 0; c < 60; c += this.timePickerIncrement) {
                            var f = c < 10 ? "0" + c: c;
                            u = n.clone().minute(c),
                                d = !1;
                            i && u.second(59).isBefore(i) && (d = !0),
                            s && u.second(0).isAfter(s) && (d = !0),
                                n.minute() != c || d ? e += d ? '<option value="' + c + '" disabled="disabled" class="disabled">' + f + "</option>": '<option value="' + c + '">' + f + "</option>": e += '<option value="' + c + '" selected="selected">' + f + "</option>"
                        }
                        if (e += "</select> ", this.timePickerSeconds) {
                            e += ': <select class="secondselect">';
                            for (c = 0; c < 60; c++) {
                                f = c < 10 ? "0" + c: c,
                                    u = n.clone().second(c),
                                    d = !1;
                                i && u.isBefore(i) && (d = !0),
                                s && u.isAfter(s) && (d = !0),
                                    n.second() != c || d ? e += d ? '<option value="' + c + '" disabled="disabled" class="disabled">' + f + "</option>": '<option value="' + c + '">' + f + "</option>": e += '<option value="' + c + '" selected="selected">' + f + "</option>"
                            }
                            e += "</select> "
                        }
                        if (!this.timePicker24Hour) {
                            e += '<select class="ampmselect">';
                            var p = "",
                                m = "";
                            i && n.clone().hour(12).minute(0).second(0).isBefore(i) && (p = ' disabled="disabled" class="disabled"'),
                            s && n.clone().hour(0).minute(0).second(0).isAfter(s) && (m = ' disabled="disabled" class="disabled"'),
                                n.hour() >= 12 ? e += '<option value="AM"' + p + '>AM</option><option value="PM" selected="selected"' + m + ">PM</option>": e += '<option value="AM" selected="selected"' + p + '>AM</option><option value="PM"' + m + ">PM</option>",
                                e += "</select>"
                        }
                        this.container.find(".drp-calendar." + t + " .calendar-time").html(e)
                    }
                },
                updateFormInputs: function() {
                    this.singleDatePicker || this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate)) ? this.container.find("button.applyBtn").removeAttr("disabled") : this.container.find("button.applyBtn").attr("disabled", "disabled")
                },
                move: function() {
                    var t, n = {
                            top: 0,
                            left: 0
                        },
                        i = e(window).width();
                    this.parentEl.is("body") || (n = {
                        top: this.parentEl.offset().top - this.parentEl.scrollTop(),
                        left: this.parentEl.offset().left - this.parentEl.scrollLeft()
                    },
                        i = this.parentEl[0].clientWidth + this.parentEl.offset().left),
                        t = "up" == this.drops ? this.element.offset().top - this.container.outerHeight() - n.top: this.element.offset().top + this.element.outerHeight() - n.top,
                        this.container["up" == this.drops ? "addClass": "removeClass"]("drop-up"),
                        "left" == this.opens ? (this.container.css({
                            top: t,
                            right: i - this.element.offset().left - this.element.outerWidth(),
                            left: "auto"
                        }), this.container.offset().left < 0 && this.container.css({
                            right: "auto",
                            left: 9
                        })) : "center" == this.opens ? (this.container.css({
                            top: t,
                            left: this.element.offset().left - n.left + this.element.outerWidth() / 2 - this.container.outerWidth() / 2,
                            right: "auto"
                        }), this.container.offset().left < 0 && this.container.css({
                            right: "auto",
                            left: 9
                        })) : (this.container.css({
                            top: t,
                            left: this.element.offset().left - n.left,
                            right: "auto"
                        }), this.container.offset().left + this.container.outerWidth() > e(window).width() && this.container.css({
                            left: "auto",
                            right: 0
                        }))
                },
                show: function(t) {
                    this.isShowing || (this._outsideClickProxy = e.proxy(function(t) {
                            this.outsideClick(t)
                        },
                        this), e(document).on("mousedown.daterangepicker", this._outsideClickProxy).on("touchend.daterangepicker", this._outsideClickProxy).on("click.daterangepicker", "[data-toggle=dropdown]", this._outsideClickProxy).on("focusin.daterangepicker", this._outsideClickProxy), e(window).on("resize.daterangepicker", e.proxy(function(t) {
                            this.move(t)
                        },
                        this)), this.oldStartDate = this.startDate.clone(), this.oldEndDate = this.endDate.clone(), this.previousRightTime = this.endDate.clone(), this.updateView(), this.container.show(), this.move(), this.element.trigger("show.daterangepicker", this), this.isShowing = !0)
                },
                hide: function(t) {
                    this.isShowing && (this.endDate || (this.startDate = this.oldStartDate.clone(), this.endDate = this.oldEndDate.clone()), this.startDate.isSame(this.oldStartDate) && this.endDate.isSame(this.oldEndDate) || this.callback(this.startDate.clone(), this.endDate.clone(), this.chosenLabel), this.updateElement(), e(document).off(".daterangepicker"), e(window).off(".daterangepicker"), this.container.hide(), this.element.trigger("hide.daterangepicker", this), this.isShowing = !1)
                },
                toggle: function(t) {
                    this.isShowing ? this.hide() : this.show()
                },
                outsideClick: function(t) {
                    var n = e(t.target);
                    "focusin" == t.type || n.closest(this.element).length || n.closest(this.container).length || n.closest(".calendar-table").length || (this.hide(), this.element.trigger("outsideClick.daterangepicker", this))
                },
                showCalendars: function() {
                    this.container.addClass("show-calendar"),
                        this.move(),
                        this.element.trigger("showCalendar.daterangepicker", this)
                },
                hideCalendars: function() {
                    this.container.removeClass("show-calendar"),
                        this.element.trigger("hideCalendar.daterangepicker", this)
                },
                clickRange: function(t) {
                    var e = t.target.getAttribute("data-range-key");
                    if (this.chosenLabel = e, e == this.locale.customRangeLabel) this.showCalendars();
                    else {
                        var n = this.ranges[e];
                        this.startDate = n[0],
                            this.endDate = n[1],
                        this.timePicker || (this.startDate.startOf("day"), this.endDate.endOf("day")),
                        this.alwaysShowCalendars || this.hideCalendars(),
                            this.clickApply()
                    }
                },
                clickPrev: function(t) {
                    e(t.target).parents(".drp-calendar").hasClass("left") ? (this.leftCalendar.month.subtract(1, "month"), this.linkedCalendars && this.rightCalendar.month.subtract(1, "month")) : this.rightCalendar.month.subtract(1, "month"),
                        this.updateCalendars()
                },
                clickNext: function(t) {
                    e(t.target).parents(".drp-calendar").hasClass("left") ? this.leftCalendar.month.add(1, "month") : (this.rightCalendar.month.add(1, "month"), this.linkedCalendars && this.leftCalendar.month.add(1, "month")),
                        this.updateCalendars()
                },
                hoverDate: function(t) {
                    if (e(t.target).hasClass("available")) {
                        var n = e(t.target).attr("data-title"),
                            i = n.substr(1, 1),
                            s = n.substr(3, 1),
                            o = e(t.target).parents(".drp-calendar").hasClass("left") ? this.leftCalendar.calendar[i][s] : this.rightCalendar.calendar[i][s],
                            r = this.leftCalendar,
                            a = this.rightCalendar,
                            l = this.startDate;
                        this.endDate || this.container.find(".drp-calendar tbody td").each(function(t, n) {
                            if (!e(n).hasClass("week")) {
                                var i = e(n).attr("data-title"),
                                    s = i.substr(1, 1),
                                    c = i.substr(3, 1),
                                    h = e(n).parents(".drp-calendar").hasClass("left") ? r.calendar[s][c] : a.calendar[s][c];
                                h.isAfter(l) && h.isBefore(o) || h.isSame(o, "day") ? e(n).addClass("in-range") : e(n).removeClass("in-range")
                            }
                        })
                    }
                },
                clickDate: function(t) {
                    if (e(t.target).hasClass("available")) {
                        var n = e(t.target).attr("data-title"),
                            i = n.substr(1, 1),
                            s = n.substr(3, 1),
                            o = e(t.target).parents(".drp-calendar").hasClass("left") ? this.leftCalendar.calendar[i][s] : this.rightCalendar.calendar[i][s];
                        if (this.endDate || o.isBefore(this.startDate, "day")) {
                            if (this.timePicker) {
                                var r = parseInt(this.container.find(".left .hourselect").val(), 10);
                                if (!this.timePicker24Hour)"PM" === (c = this.container.find(".left .ampmselect").val()) && r < 12 && (r += 12),
                                "AM" === c && 12 === r && (r = 0);
                                var a = parseInt(this.container.find(".left .minuteselect").val(), 10),
                                    l = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0;
                                o = o.clone().hour(r).minute(a).second(l)
                            }
                            this.endDate = null,
                                this.setStartDate(o.clone())
                        } else if (!this.endDate && o.isBefore(this.startDate)) this.setEndDate(this.startDate.clone());
                        else {
                            if (this.timePicker) {
                                var c;
                                r = parseInt(this.container.find(".right .hourselect").val(), 10);
                                if (!this.timePicker24Hour)"PM" === (c = this.container.find(".right .ampmselect").val()) && r < 12 && (r += 12),
                                "AM" === c && 12 === r && (r = 0);
                                a = parseInt(this.container.find(".right .minuteselect").val(), 10),
                                    l = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0;
                                o = o.clone().hour(r).minute(a).second(l)
                            }
                            this.setEndDate(o.clone()),
                            this.autoApply && (this.calculateChosenLabel(), this.clickApply())
                        }
                        this.singleDatePicker && (this.setEndDate(this.startDate), this.timePicker || this.clickApply()),
                            this.updateView(),
                            t.stopPropagation()
                    }
                },
                calculateChosenLabel: function() {
                    var t = !0,
                        e = 0;
                    for (var n in this.ranges) {
                        if (this.timePicker) {
                            var i = this.timePickerSeconds ? "YYYY-MM-DD hh:mm:ss": "YYYY-MM-DD hh:mm";
                            if (this.startDate.format(i) == this.ranges[n][0].format(i) && this.endDate.format(i) == this.ranges[n][1].format(i)) {
                                t = !1,
                                    this.chosenLabel = this.container.find(".ranges li:eq(" + e + ")").addClass("active").attr("data-range-key");
                                break
                            }
                        } else if (this.startDate.format("YYYY-MM-DD") == this.ranges[n][0].format("YYYY-MM-DD") && this.endDate.format("YYYY-MM-DD") == this.ranges[n][1].format("YYYY-MM-DD")) {
                            t = !1,
                                this.chosenLabel = this.container.find(".ranges li:eq(" + e + ")").addClass("active").attr("data-range-key");
                            break
                        }
                        e++
                    }
                    t && (this.showCustomRangeLabel ? this.chosenLabel = this.container.find(".ranges li:last").addClass("active").attr("data-range-key") : this.chosenLabel = null, this.showCalendars())
                },
                clickApply: function(t) {
                    this.hide(),
                        this.element.trigger("apply.daterangepicker", this)
                },
                clickCancel: function(t) {
                    this.startDate = this.oldStartDate,
                        this.endDate = this.oldEndDate,
                        this.hide(),
                        this.element.trigger("cancel.daterangepicker", this)
                },
                monthOrYearChanged: function(t) {
                    var n = e(t.target).closest(".drp-calendar").hasClass("left"),
                        i = n ? "left": "right",
                        s = this.container.find(".drp-calendar." + i),
                        o = parseInt(s.find(".monthselect").val(), 10),
                        r = s.find(".yearselect").val();
                    n || (r < this.startDate.year() || r == this.startDate.year() && o < this.startDate.month()) && (o = this.startDate.month(), r = this.startDate.year()),
                    this.minDate && (r < this.minDate.year() || r == this.minDate.year() && o < this.minDate.month()) && (o = this.minDate.month(), r = this.minDate.year()),
                    this.maxDate && (r > this.maxDate.year() || r == this.maxDate.year() && o > this.maxDate.month()) && (o = this.maxDate.month(), r = this.maxDate.year()),
                        n ? (this.leftCalendar.month.month(o).year(r), this.linkedCalendars && (this.rightCalendar.month = this.leftCalendar.month.clone().add(1, "month"))) : (this.rightCalendar.month.month(o).year(r), this.linkedCalendars && (this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, "month"))),
                        this.updateCalendars()
                },
                timeChanged: function(t) {
                    var n = e(t.target).closest(".drp-calendar"),
                        i = n.hasClass("left"),
                        s = parseInt(n.find(".hourselect").val(), 10),
                        o = parseInt(n.find(".minuteselect").val(), 10),
                        r = this.timePickerSeconds ? parseInt(n.find(".secondselect").val(), 10) : 0;
                    if (!this.timePicker24Hour) {
                        var a = n.find(".ampmselect").val();
                        "PM" === a && s < 12 && (s += 12),
                        "AM" === a && 12 === s && (s = 0)
                    }
                    if (i) {
                        var l = this.startDate.clone();
                        l.hour(s),
                            l.minute(o),
                            l.second(r),
                            this.setStartDate(l),
                            this.singleDatePicker ? this.endDate = this.startDate.clone() : this.endDate && this.endDate.format("YYYY-MM-DD") == l.format("YYYY-MM-DD") && this.endDate.isBefore(l) && this.setEndDate(l.clone())
                    } else if (this.endDate) {
                        var c = this.endDate.clone();
                        c.hour(s),
                            c.minute(o),
                            c.second(r),
                            this.setEndDate(c)
                    }
                    this.updateCalendars(),
                        this.updateFormInputs(),
                        this.renderTimePicker("left"),
                        this.renderTimePicker("right")
                },
                elementChanged: function() {
                    if (this.element.is("input") && this.element.val().length) {
                        var e = this.element.val().split(this.locale.separator),
                            n = null,
                            i = null;
                        2 === e.length && (n = t(e[0], this.locale.format), i = t(e[1], this.locale.format)),
                        (this.singleDatePicker || null === n || null === i) && (i = n = t(this.element.val(), this.locale.format)),
                        n.isValid() && i.isValid() && (this.setStartDate(n), this.setEndDate(i), this.updateView())
                    }
                },
                keydown: function(t) {
                    9 !== t.keyCode && 13 !== t.keyCode || this.hide(),
                    27 === t.keyCode && (t.preventDefault(), t.stopPropagation(), this.hide())
                },
                updateElement: function() {
                    if (this.element.is("input") && this.autoUpdateInput) {
                        var t = this.startDate.format(this.locale.format);
                        this.singleDatePicker || (t += this.locale.separator + this.endDate.format(this.locale.format)),
                        t !== this.element.val() && this.element.val(t).trigger("change")
                    }
                },
                remove: function() {
                    this.container.remove(),
                        this.element.off(".daterangepicker"),
                        this.element.removeData()
                }
            },
                e.fn.daterangepicker = function(t, i) {
                    var s = e.extend(!0, {},
                        e.fn.daterangepicker.defaultOptions, t);
                    return this.each(function() {
                        var t = e(this);
                        t.data("daterangepicker") && t.data("daterangepicker").remove(),
                            t.data("daterangepicker", new n(t, s, i))
                    }),
                        this
                },
                n
        }),
    function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], e) : t.metisMenu = e(t.jQuery)
    } (this,
        function(t) {
            "use strict";
            function e(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))),
                        i.forEach(function(e) {
                            var i, s, o;
                            i = t,
                                s = e,
                                o = n[e],
                                s in i ? Object.defineProperty(i, s, {
                                    value: o,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : i[s] = o
                        })
                }
                return t
            }
            var n, i, s, o, r, a, l, c, h = function(t) {
                var e = "transitionend",
                    n = {
                        TRANSITION_END: "mmTransitionEnd",
                        triggerTransitionEnd: function(n) {
                            t(n).trigger(e)
                        },
                        supportsTransitionEnd: function() {
                            return Boolean(e)
                        }
                    };
                function i(e) {
                    var i = this,
                        s = !1;
                    return t(this).one(n.TRANSITION_END,
                        function() {
                            s = !0
                        }),
                        setTimeout(function() {
                                s || n.triggerTransitionEnd(i)
                            },
                            e),
                        this
                }
                return t.fn.mmEmulateTransitionEnd = i,
                    t.event.special[n.TRANSITION_END] = {
                        bindType: e,
                        delegateType: e,
                        handle: function(e) {
                            if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                        }
                    },
                    n
            } (t = t && t.hasOwnProperty("default") ? t.
                    default:
                t);
            return i = "metisMenu",
                o = "." + (s = "metisMenu"),
                r = (n = t).fn[i],
                a = {
                    toggle: !0,
                    preventDefault: !0,
                    activeClass: "active",
                    collapseClass: "collapse",
                    collapseInClass: "in",
                    collapsingClass: "collapsing",
                    triggerElement: "a",
                    parentTrigger: "li",
                    subMenu: "ul"
                },
                l = {
                    SHOW: "show" + o,
                    SHOWN: "shown" + o,
                    HIDE: "hide" + o,
                    HIDDEN: "hidden" + o,
                    CLICK_DATA_API: "click" + o + ".data-api"
                },
                c = function() {
                    function t(t, n) {
                        this.element = t,
                            this.config = e({},
                                a, n),
                            this.transitioning = null,
                            this.init()
                    }
                    var i = t.prototype;
                    return i.init = function() {
                        var t = this,
                            e = this.config;
                        n(this.element).find(e.parentTrigger + "." + e.activeClass).has(e.subMenu).children(e.subMenu).attr("aria-expanded", !0).addClass(e.collapseClass + " " + e.collapseInClass),
                            n(this.element).find(e.parentTrigger).not("." + e.activeClass).has(e.subMenu).children(e.subMenu).attr("aria-expanded", !1).addClass(e.collapseClass),
                            n(this.element).find(e.parentTrigger).has(e.subMenu).children(e.triggerElement).on(l.CLICK_DATA_API,
                                function(i) {
                                    var s = n(this),
                                        o = s.parent(e.parentTrigger),
                                        r = o.siblings(e.parentTrigger).children(e.triggerElement),
                                        a = o.children(e.subMenu);
                                    e.preventDefault && i.preventDefault(),
                                    "true" !== s.attr("aria-disabled") && (o.hasClass(e.activeClass) ? (s.attr("aria-expanded", !1), t.hide(a)) : (t.show(a), s.attr("aria-expanded", !0), e.toggle && r.attr("aria-expanded", !1)), e.onTransitionStart && e.onTransitionStart(i))
                                })
                    },
                        i.show = function(t) {
                            var e = this;
                            if (!this.transitioning && !n(t).hasClass(this.config.collapsingClass)) {
                                var i = n(t),
                                    s = n.Event(l.SHOW);
                                if (i.trigger(s), !s.isDefaultPrevented()) {
                                    i.parent(this.config.parentTrigger).addClass(this.config.activeClass),
                                    this.config.toggle && this.hide(i.parent(this.config.parentTrigger).siblings().children(this.config.subMenu + "." + this.config.collapseInClass).attr("aria-expanded", !1)),
                                        i.removeClass(this.config.collapseClass).addClass(this.config.collapsingClass).height(0),
                                        this.setTransitioning(!0);
                                    var o = function() {
                                        e.config && e.element && (i.removeClass(e.config.collapsingClass).addClass(e.config.collapseClass + " " + e.config.collapseInClass).height("").attr("aria-expanded", !0), e.setTransitioning(!1), i.trigger(l.SHOWN))
                                    };
                                    h.supportsTransitionEnd() ? i.height(t[0].scrollHeight).one(h.TRANSITION_END, o).mmEmulateTransitionEnd(350) : o()
                                }
                            }
                        },
                        i.hide = function(t) {
                            var e = this;
                            if (!this.transitioning && n(t).hasClass(this.config.collapseInClass)) {
                                var i = n(t),
                                    s = n.Event(l.HIDE);
                                if (i.trigger(s), !s.isDefaultPrevented()) {
                                    i.parent(this.config.parentTrigger).removeClass(this.config.activeClass),
                                        i.height(i.height())[0].offsetHeight,
                                        i.addClass(this.config.collapsingClass).removeClass(this.config.collapseClass).removeClass(this.config.collapseInClass),
                                        this.setTransitioning(!0);
                                    var o = function() {
                                        e.config && e.element && (e.transitioning && e.config.onTransitionEnd && e.config.onTransitionEnd(), e.setTransitioning(!1), i.trigger(l.HIDDEN), i.removeClass(e.config.collapsingClass).addClass(e.config.collapseClass).attr("aria-expanded", !1))
                                    };
                                    h.supportsTransitionEnd() ? 0 === i.height() || "none" === i.css("display") ? o() : i.height(0).one(h.TRANSITION_END, o).mmEmulateTransitionEnd(350) : o()
                                }
                            }
                        },
                        i.setTransitioning = function(t) {
                            this.transitioning = t
                        },
                        i.dispose = function() {
                            n.removeData(this.element, s),
                                n(this.element).find(this.config.parentTrigger).has(this.config.subMenu).children(this.config.triggerElement).off("click"),
                                this.transitioning = null,
                                this.config = null,
                                this.element = null
                        },
                        t.jQueryInterface = function(i) {
                            return this.each(function() {
                                var o = n(this),
                                    r = o.data(s),
                                    l = e({},
                                        a, o.data(), "object" == typeof i && i ? i: {});
                                if (!r && /dispose/.test(i) && this.dispose(), r || (r = new t(this, l), o.data(s, r)), "string" == typeof i) {
                                    if (void 0 === r[i]) throw new Error('No method named "' + i + '"');
                                    r[i]()
                                }
                            })
                        },
                        t
                } (),
                n.fn[i] = c.jQueryInterface,
                n.fn[i].Constructor = c,
                n.fn[i].noConflict = function() {
                    return n.fn[i] = r,
                        c.jQueryInterface
                },
                c
        }),
"function" != typeof Object.create && (Object.create = function(t) {
    function e() {}
    return e.prototype = t,
        new e
}),
    function(t, e, n, i) {
        "use strict";
        var s = {
            _positionClasses: ["bottom-left", "bottom-right", "top-right", "top-left", "bottom-center", "top-center", "mid-center"],
            _defaultIcons: ["success", "error", "info", "warning"],
            init: function(e, n) {
                this.prepareOptions(e, t.toast.options),
                    this.process()
            },
            prepareOptions: function(e, n) {
                var i = {};
                "string" == typeof e || e instanceof Array ? i.text = e: i = e,
                    this.options = t.extend({},
                        n, i)
            },
            process: function() {
                this.setup(),
                    this.addToDom(),
                    this.position(),
                    this.bindToast(),
                    this.animate()
            },
            setup: function() {
                var e = "";
                if (this._toastEl = this._toastEl || t("<div></div>", {
                    class: "jq-toast-single"
                }), e += '<span class="jq-toast-loader"></span>', this.options.allowToastClose && (e += '<span class="close-jq-toast-single">&times;</span>'), this.options.text instanceof Array) {
                    this.options.heading && (e += '<h2 class="jq-toast-heading">' + this.options.heading + "</h2>"),
                        e += '<ul class="jq-toast-ul">';
                    for (var n = 0; n < this.options.text.length; n++) e += '<li class="jq-toast-li" id="jq-toast-item-' + n + '">' + this.options.text[n] + "</li>";
                    e += "</ul>"
                } else this.options.heading && (e += '<h2 class="jq-toast-heading">' + this.options.heading + "</h2>"),
                    e += this.options.text;
                this._toastEl.html(e),
                !1 !== this.options.bgColor && this._toastEl.css("background-color", this.options.bgColor),
                !1 !== this.options.textColor && this._toastEl.css("color", this.options.textColor),
                this.options.textAlign && this._toastEl.css("text-align", this.options.textAlign),
                !1 !== this.options.icon && (this._toastEl.addClass("jq-has-icon"), -1 !== t.inArray(this.options.icon, this._defaultIcons) && this._toastEl.addClass("jq-icon-" + this.options.icon)),
                !1 !== this.options.class && this._toastEl.addClass(this.options.class)
            },
            position: function() {
                "string" == typeof this.options.position && -1 !== t.inArray(this.options.position, this._positionClasses) ? "bottom-center" === this.options.position ? this._container.css({
                    left: t(e).outerWidth() / 2 - this._container.outerWidth() / 2,
                    bottom: 20
                }) : "top-center" === this.options.position ? this._container.css({
                    left: t(e).outerWidth() / 2 - this._container.outerWidth() / 2,
                    top: 20
                }) : "mid-center" === this.options.position ? this._container.css({
                    left: t(e).outerWidth() / 2 - this._container.outerWidth() / 2,
                    top: t(e).outerHeight() / 2 - this._container.outerHeight() / 2
                }) : this._container.addClass(this.options.position) : "object" == typeof this.options.position ? this._container.css({
                    top: this.options.position.top ? this.options.position.top: "auto",
                    bottom: this.options.position.bottom ? this.options.position.bottom: "auto",
                    left: this.options.position.left ? this.options.position.left: "auto",
                    right: this.options.position.right ? this.options.position.right: "auto"
                }) : this._container.addClass("bottom-left")
            },
            bindToast: function() {
                var t = this;
                this._toastEl.on("afterShown",
                    function() {
                        t.processLoader()
                    }),
                    this._toastEl.find(".close-jq-toast-single").on("click",
                        function(e) {
                            e.preventDefault(),
                                "fade" === t.options.showHideTransition ? (t._toastEl.trigger("beforeHide"), t._toastEl.fadeOut(function() {
                                    t._toastEl.trigger("afterHidden")
                                })) : "slide" === t.options.showHideTransition ? (t._toastEl.trigger("beforeHide"), t._toastEl.slideUp(function() {
                                    t._toastEl.trigger("afterHidden")
                                })) : (t._toastEl.trigger("beforeHide"), t._toastEl.hide(function() {
                                    t._toastEl.trigger("afterHidden")
                                }))
                        }),
                "function" == typeof this.options.beforeShow && this._toastEl.on("beforeShow",
                    function() {
                        t.options.beforeShow()
                    }),
                "function" == typeof this.options.afterShown && this._toastEl.on("afterShown",
                    function() {
                        t.options.afterShown()
                    }),
                "function" == typeof this.options.beforeHide && this._toastEl.on("beforeHide",
                    function() {
                        t.options.beforeHide()
                    }),
                "function" == typeof this.options.afterHidden && this._toastEl.on("afterHidden",
                    function() {
                        t.options.afterHidden()
                    })
            },
            addToDom: function() {
                var e = t(".jq-toast-wrap");
                if (0 === e.length ? (e = t("<div></div>", {
                    class: "jq-toast-wrap"
                }), t("body").append(e)) : (!this.options.stack || isNaN(parseInt(this.options.stack, 10))) && e.empty(), e.find(".jq-toast-single:hidden").remove(), e.append(this._toastEl), this.options.stack && !isNaN(parseInt(this.options.stack), 10)) {
                    var n = e.find(".jq-toast-single").length - this.options.stack;
                    n > 0 && t(".jq-toast-wrap").find(".jq-toast-single").slice(0, n).remove()
                }
                this._container = e
            },
            canAutoHide: function() {
                return ! 1 !== this.options.hideAfter && !isNaN(parseInt(this.options.hideAfter, 10))
            },
            processLoader: function() {
                if (!this.canAutoHide() || !1 === this.options.loader) return ! 1;
                var t = this._toastEl.find(".jq-toast-loader"),
                    e = (this.options.hideAfter - 400) / 1e3 + "s",
                    n = this.options.loaderBg,
                    i = t.attr("style") || "";
                i = i.substring(0, i.indexOf("-webkit-transition")),
                    i += "-webkit-transition: width " + e + " ease-in;                       -o-transition: width " + e + " ease-in;                       transition: width " + e + " ease-in;                       background-color: " + n + ";",
                    t.attr("style", i).addClass("jq-toast-loaded")
            },
            animate: function() {
                var t = this;
                if (this._toastEl.hide(), this._toastEl.trigger("beforeShow"), "fade" === this.options.showHideTransition.toLowerCase() ? this._toastEl.fadeIn(function() {
                    t._toastEl.trigger("afterShown")
                }) : "slide" === this.options.showHideTransition.toLowerCase() ? this._toastEl.slideDown(function() {
                    t._toastEl.trigger("afterShown")
                }) : this._toastEl.show(function() {
                    t._toastEl.trigger("afterShown")
                }), this.canAutoHide()) {
                    t = this;
                    e.setTimeout(function() {
                            "fade" === t.options.showHideTransition.toLowerCase() ? (t._toastEl.trigger("beforeHide"), t._toastEl.fadeOut(function() {
                                t._toastEl.trigger("afterHidden")
                            })) : "slide" === t.options.showHideTransition.toLowerCase() ? (t._toastEl.trigger("beforeHide"), t._toastEl.slideUp(function() {
                                t._toastEl.trigger("afterHidden")
                            })) : (t._toastEl.trigger("beforeHide"), t._toastEl.hide(function() {
                                t._toastEl.trigger("afterHidden")
                            }))
                        },
                        this.options.hideAfter)
                }
            },
            reset: function(e) {
                "all" === e ? t(".jq-toast-wrap").remove() : this._toastEl.remove()
            },
            update: function(t) {
                this.prepareOptions(t, this.options),
                    this.setup(),
                    this.bindToast()
            }
        };
        t.toast = function(t) {
            var e = Object.create(s);
            return e.init(t, this),
                {
                    reset: function(t) {
                        e.reset(t)
                    },
                    update: function(t) {
                        e.update(t)
                    }
                }
        },
            t.toast.options = {
                text: "",
                heading: "",
                showHideTransition: "fade",
                allowToastClose: !0,
                hideAfter: 3e3,
                loader: !0,
                loaderBg: "#9EC600",
                stack: 5,
                position: "bottom-left",
                bgColor: !1,
                textColor: !1,
                textAlign: "left",
                icon: !1,
                beforeShow: function() {},
                afterShown: function() {},
                beforeHide: function() {},
                afterHidden: function() {}
            }
    } (jQuery, window, document),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = function(e, n) {
            return void 0 === n && (n = "undefined" != typeof window ? require("jquery") : require("jquery")(e)),
                t(n),
                n
        }: t(jQuery)
    } (function(t) {
        var e = function() {
                if (t && t.fn && t.fn.select2 && t.fn.select2.amd) var e = t.fn.select2.amd;
                var n, i, s;
                return e && e.requirejs || (e ? i = e: e = {},
                    function(t) {
                        function e(t, e) {
                            return b.call(t, e)
                        }
                        function o(t, e) {
                            var n, i, s, o, r, a, l, c, h, u, d, f = e && e.split("/"),
                                p = v.map,
                                m = p && p["*"] || {};
                            if (t) {
                                for (r = (t = t.split("/")).length - 1, v.nodeIdCompat && w.test(t[r]) && (t[r] = t[r].replace(w, "")), "." === t[0].charAt(0) && f && (t = f.slice(0, f.length - 1).concat(t)), h = 0; h < t.length; h++) if ("." === (d = t[h])) t.splice(h, 1),
                                    h -= 1;
                                else if (".." === d) {
                                    if (0 === h || 1 === h && ".." === t[2] || ".." === t[h - 1]) continue;
                                    h > 0 && (t.splice(h - 1, 2), h -= 2)
                                }
                                t = t.join("/")
                            }
                            if ((f || m) && p) {
                                for (h = (n = t.split("/")).length; h > 0; h -= 1) {
                                    if (i = n.slice(0, h).join("/"), f) for (u = f.length; u > 0; u -= 1) if ((s = p[f.slice(0, u).join("/")]) && (s = s[i])) {
                                        o = s,
                                            a = h;
                                        break
                                    }
                                    if (o) break; ! l && m && m[i] && (l = m[i], c = h)
                                } ! o && l && (o = l, a = c),
                                o && (n.splice(0, a, o), t = n.join("/"))
                            }
                            return t
                        }
                        function r(e, n) {
                            return function() {
                                var i = _.call(arguments, 0);
                                return "string" != typeof i[0] && 1 === i.length && i.push(null),
                                    d.apply(t, i.concat([e, n]))
                            }
                        }
                        function a(t) {
                            return function(e) {
                                m[t] = e
                            }
                        }
                        function l(n) {
                            if (e(g, n)) {
                                var i = g[n];
                                delete g[n],
                                    y[n] = !0,
                                    u.apply(t, i)
                            }
                            if (!e(m, n) && !e(y, n)) throw new Error("No " + n);
                            return m[n]
                        }
                        function c(t) {
                            var e, n = t ? t.indexOf("!") : -1;
                            return n > -1 && (e = t.substring(0, n), t = t.substring(n + 1, t.length)),
                                [e, t]
                        }
                        function h(t) {
                            return t ? c(t) : []
                        }
                        var u, d, f, p, m = {},
                            g = {},
                            v = {},
                            y = {},
                            b = Object.prototype.hasOwnProperty,
                            _ = [].slice,
                            w = /\.js$/;
                        f = function(t, e) {
                            var n, i, s = c(t),
                                r = s[0],
                                a = e[1];
                            return t = s[1],
                            r && (n = l(r = o(r, a))),
                                r ? t = n && n.normalize ? n.normalize(t, (i = a,
                                    function(t) {
                                        return o(t, i)
                                    })) : o(t, a) : (r = (s = c(t = o(t, a)))[0], t = s[1], r && (n = l(r))),
                                {
                                    f: r ? r + "!" + t: t,
                                    n: t,
                                    pr: r,
                                    p: n
                                }
                        },
                            p = {
                                require: function(t) {
                                    return r(t)
                                },
                                exports: function(t) {
                                    var e = m[t];
                                    return void 0 !== e ? e: m[t] = {}
                                },
                                module: function(t) {
                                    return {
                                        id: t,
                                        uri: "",
                                        exports: m[t],
                                        config: (e = t,
                                            function() {
                                                return v && v.config && v.config[e] || {}
                                            })
                                    };
                                    var e
                                }
                            }, u = function(n, i, s, o) {
                            var c, u, d, v, b, _, w, D = [],
                                k = typeof s;
                            if (_ = h(o = o || n), "undefined" === k || "function" === k) {
                                for (i = !i.length && s.length ? ["require", "exports", "module"] : i, b = 0; b < i.length; b += 1) if ("require" === (u = (v = f(i[b], _)).f)) D[b] = p.require(n);
                                else if ("exports" === u) D[b] = p.exports(n),
                                    w = !0;
                                else if ("module" === u) c = D[b] = p.module(n);
                                else if (e(m, u) || e(g, u) || e(y, u)) D[b] = l(u);
                                else {
                                    if (!v.p) throw new Error(n + " missing " + u);
                                    v.p.load(v.n, r(o, !0), a(u), {}),
                                        D[b] = m[u]
                                }
                                d = s ? s.apply(m[n], D) : void 0,
                                n && (c && c.exports !== t && c.exports !== m[n] ? m[n] = c.exports: d === t && w || (m[n] = d))
                            } else n && (m[n] = s)
                        },
                            n = i = d = function(e, n, i, s, o) {
                                if ("string" == typeof e) return p[e] ? p[e](n) : l(f(e, h(n)).f);
                                if (!e.splice) {
                                    if ((v = e).deps && d(v.deps, v.callback), !n) return;
                                    n.splice ? (e = n, n = i, i = null) : e = t
                                }
                                return n = n ||
                                    function() {},
                                "function" == typeof i && (i = s, s = o),
                                    s ? u(t, e, n, i) : setTimeout(function() {
                                            u(t, e, n, i)
                                        },
                                        4),
                                    d
                            },
                            d.config = function(t) {
                                return d(t)
                            },
                            n._defined = m,
                            (s = function(t, n, i) {
                                if ("string" != typeof t) throw new Error("See almond README: incorrect module build, no module name");
                                n.splice || (i = n, n = []),
                                e(m, t) || e(g, t) || (g[t] = [t, n, i])
                            }).amd = {
                                jQuery: !0
                            }
                    } (), e.requirejs = n, e.require = i, e.define = s),
                    e.define("almond",
                        function() {}),
                    e.define("jquery", [],
                        function() {
                            var e = t || $;
                            return null == e && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),
                                e
                        }),
                    e.define("select2/utils", ["jquery"],
                        function(t) {
                            function e(t) {
                                var e = t.prototype,
                                    n = [];
                                for (var i in e)"function" == typeof e[i] && "constructor" !== i && n.push(i);
                                return n
                            }
                            var n = {
                                    Extend: function(t, e) {
                                        function n() {
                                            this.constructor = t
                                        }
                                        var i = {}.hasOwnProperty;
                                        for (var s in e) i.call(e, s) && (t[s] = e[s]);
                                        return n.prototype = e.prototype,
                                            t.prototype = new n,
                                            t.__super__ = e.prototype,
                                            t
                                    },
                                    Decorate: function(t, n) {
                                        function i() {
                                            var e = Array.prototype.unshift,
                                                i = n.prototype.constructor.length,
                                                s = t.prototype.constructor;
                                            i > 0 && (e.call(arguments, t.prototype.constructor), s = n.prototype.constructor),
                                                s.apply(this, arguments)
                                        }
                                        var s = e(n),
                                            o = e(t);
                                        n.displayName = t.displayName,
                                            i.prototype = new
                                            function() {
                                                this.constructor = i
                                            };
                                        for (var r = 0; r < o.length; r++) {
                                            var a = o[r];
                                            i.prototype[a] = t.prototype[a]
                                        }
                                        for (var l = function(t) {
                                                var e = function() {};
                                                t in i.prototype && (e = i.prototype[t]);
                                                var s = n.prototype[t];
                                                return function() {
                                                    return Array.prototype.unshift.call(arguments, e),
                                                        s.apply(this, arguments)
                                                }
                                            },
                                                 c = 0; c < s.length; c++) {
                                            var h = s[c];
                                            i.prototype[h] = l(h)
                                        }
                                        return i
                                    }
                                },
                                i = function() {
                                    this.listeners = {}
                                };
                            i.prototype.on = function(t, e) {
                                this.listeners = this.listeners || {},
                                    t in this.listeners ? this.listeners[t].push(e) : this.listeners[t] = [e]
                            },
                                i.prototype.trigger = function(t) {
                                    var e = Array.prototype.slice,
                                        n = e.call(arguments, 1);
                                    this.listeners = this.listeners || {},
                                    null == n && (n = []),
                                    0 === n.length && n.push({}),
                                        n[0]._type = t,
                                    t in this.listeners && this.invoke(this.listeners[t], e.call(arguments, 1)),
                                    "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                                },
                                i.prototype.invoke = function(t, e) {
                                    for (var n = 0,
                                             i = t.length; n < i; n++) t[n].apply(this, e)
                                },
                                n.Observable = i,
                                n.generateChars = function(t) {
                                    for (var e = "",
                                             n = 0; n < t; n++) e += Math.floor(36 * Math.random()).toString(36);
                                    return e
                                },
                                n.bind = function(t, e) {
                                    return function() {
                                        t.apply(e, arguments)
                                    }
                                },
                                n._convertData = function(t) {
                                    for (var e in t) {
                                        var n = e.split("-"),
                                            i = t;
                                        if (1 !== n.length) {
                                            for (var s = 0; s < n.length; s++) {
                                                var o = n[s]; (o = o.substring(0, 1).toLowerCase() + o.substring(1)) in i || (i[o] = {}),
                                                s == n.length - 1 && (i[o] = t[e]),
                                                    i = i[o]
                                            }
                                            delete t[e]
                                        }
                                    }
                                    return t
                                },
                                n.hasScroll = function(e, n) {
                                    var i = t(n),
                                        s = n.style.overflowX,
                                        o = n.style.overflowY;
                                    return (s !== o || "hidden" !== o && "visible" !== o) && ("scroll" === s || "scroll" === o || i.innerHeight() < n.scrollHeight || i.innerWidth() < n.scrollWidth)
                                },
                                n.escapeMarkup = function(t) {
                                    var e = {
                                        "\\": "&#92;",
                                        "&": "&amp;",
                                        "<": "&lt;",
                                        ">": "&gt;",
                                        '"': "&quot;",
                                        "'": "&#39;",
                                        "/": "&#47;"
                                    };
                                    return "string" != typeof t ? t: String(t).replace(/[&<>"'\/\\]/g,
                                        function(t) {
                                            return e[t]
                                        })
                                },
                                n.appendMany = function(e, n) {
                                    if ("1.7" === t.fn.jquery.substr(0, 3)) {
                                        var i = t();
                                        t.map(n,
                                            function(t) {
                                                i = i.add(t)
                                            }),
                                            n = i
                                    }
                                    e.append(n)
                                },
                                n.__cache = {};
                            var s = 0;
                            return n.GetUniqueElementId = function(t) {
                                var e = t.getAttribute("data-select2-id");
                                return null == e && (t.id ? (e = t.id, t.setAttribute("data-select2-id", e)) : (t.setAttribute("data-select2-id", ++s), e = s.toString())),
                                    e
                            },
                                n.StoreData = function(t, e, i) {
                                    var s = n.GetUniqueElementId(t);
                                    n.__cache[s] || (n.__cache[s] = {}),
                                        n.__cache[s][e] = i
                                },
                                n.GetData = function(e, i) {
                                    var s = n.GetUniqueElementId(e);
                                    return i ? n.__cache[s] && null != n.__cache[s][i] ? n.__cache[s][i] : t(e).data(i) : n.__cache[s]
                                },
                                n.RemoveData = function(t) {
                                    var e = n.GetUniqueElementId(t);
                                    null != n.__cache[e] && delete n.__cache[e]
                                },
                                n
                        }),
                    e.define("select2/results", ["jquery", "./utils"],
                        function(t, e) {
                            function n(t, e, i) {
                                this.$element = t,
                                    this.data = i,
                                    this.options = e,
                                    n.__super__.constructor.call(this)
                            }
                            return e.Extend(n, e.Observable),
                                n.prototype.render = function() {
                                    var e = t('<ul class="select2-results__options" role="tree"></ul>');
                                    return this.options.get("multiple") && e.attr("aria-multiselectable", "true"),
                                        this.$results = e,
                                        e
                                },
                                n.prototype.clear = function() {
                                    this.$results.empty()
                                },
                                n.prototype.displayMessage = function(e) {
                                    var n = this.options.get("escapeMarkup");
                                    this.clear(),
                                        this.hideLoading();
                                    var i = t('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                                        s = this.options.get("translations").get(e.message);
                                    i.append(n(s(e.args))),
                                        i[0].className += " select2-results__message",
                                        this.$results.append(i)
                                },
                                n.prototype.hideMessages = function() {
                                    this.$results.find(".select2-results__message").remove()
                                },
                                n.prototype.append = function(t) {
                                    this.hideLoading();
                                    var e = [];
                                    if (null != t.results && 0 !== t.results.length) {
                                        t.results = this.sort(t.results);
                                        for (var n = 0; n < t.results.length; n++) {
                                            var i = t.results[n],
                                                s = this.option(i);
                                            e.push(s)
                                        }
                                        this.$results.append(e)
                                    } else 0 === this.$results.children().length && this.trigger("results:message", {
                                        message: "noResults"
                                    })
                                },
                                n.prototype.position = function(t, e) {
                                    e.find(".select2-results").append(t)
                                },
                                n.prototype.sort = function(t) {
                                    return this.options.get("sorter")(t)
                                },
                                n.prototype.highlightFirstItem = function() {
                                    var t = this.$results.find(".select2-results__option[aria-selected]"),
                                        e = t.filter("[aria-selected=true]");
                                    e.length > 0 ? e.first().trigger("mouseenter") : t.first().trigger("mouseenter"),
                                        this.ensureHighlightVisible()
                                },
                                n.prototype.setClasses = function() {
                                    var n = this;
                                    this.data.current(function(i) {
                                        var s = t.map(i,
                                            function(t) {
                                                return t.id.toString()
                                            });
                                        n.$results.find(".select2-results__option[aria-selected]").each(function() {
                                            var n = t(this),
                                                i = e.GetData(this, "data"),
                                                o = "" + i.id;
                                            null != i.element && i.element.selected || null == i.element && t.inArray(o, s) > -1 ? n.attr("aria-selected", "true") : n.attr("aria-selected", "false")
                                        })
                                    })
                                },
                                n.prototype.showLoading = function(t) {
                                    this.hideLoading();
                                    var e = {
                                            disabled: !0,
                                            loading: !0,
                                            text: this.options.get("translations").get("searching")(t)
                                        },
                                        n = this.option(e);
                                    n.className += " loading-results",
                                        this.$results.prepend(n)
                                },
                                n.prototype.hideLoading = function() {
                                    this.$results.find(".loading-results").remove()
                                },
                                n.prototype.option = function(n) {
                                    var i = document.createElement("li");
                                    i.className = "select2-results__option";
                                    var s = {
                                        role: "treeitem",
                                        "aria-selected": "false"
                                    };
                                    for (var o in n.disabled && (delete s["aria-selected"], s["aria-disabled"] = "true"), null == n.id && delete s["aria-selected"], null != n._resultId && (i.id = n._resultId), n.title && (i.title = n.title), n.children && (s.role = "group", s["aria-label"] = n.text, delete s["aria-selected"]), s) {
                                        var r = s[o];
                                        i.setAttribute(o, r)
                                    }
                                    if (n.children) {
                                        var a = t(i),
                                            l = document.createElement("strong");
                                        l.className = "select2-results__group",
                                            t(l),
                                            this.template(n, l);
                                        for (var c = [], h = 0; h < n.children.length; h++) {
                                            var u = n.children[h],
                                                d = this.option(u);
                                            c.push(d)
                                        }
                                        var f = t("<ul></ul>", {
                                            class: "select2-results__options select2-results__options--nested"
                                        });
                                        f.append(c),
                                            a.append(l),
                                            a.append(f)
                                    } else this.template(n, i);
                                    return e.StoreData(i, "data", n),
                                        i
                                },
                                n.prototype.bind = function(n, i) {
                                    var s = this,
                                        o = n.id + "-results";
                                    this.$results.attr("id", o),
                                        n.on("results:all",
                                            function(t) {
                                                s.clear(),
                                                    s.append(t.data),
                                                n.isOpen() && (s.setClasses(), s.highlightFirstItem())
                                            }),
                                        n.on("results:append",
                                            function(t) {
                                                s.append(t.data),
                                                n.isOpen() && s.setClasses()
                                            }),
                                        n.on("query",
                                            function(t) {
                                                s.hideMessages(),
                                                    s.showLoading(t)
                                            }),
                                        n.on("select",
                                            function() {
                                                n.isOpen() && (s.setClasses(), s.highlightFirstItem())
                                            }),
                                        n.on("unselect",
                                            function() {
                                                n.isOpen() && (s.setClasses(), s.highlightFirstItem())
                                            }),
                                        n.on("open",
                                            function() {
                                                s.$results.attr("aria-expanded", "true"),
                                                    s.$results.attr("aria-hidden", "false"),
                                                    s.setClasses(),
                                                    s.ensureHighlightVisible()
                                            }),
                                        n.on("close",
                                            function() {
                                                s.$results.attr("aria-expanded", "false"),
                                                    s.$results.attr("aria-hidden", "true"),
                                                    s.$results.removeAttr("aria-activedescendant")
                                            }),
                                        n.on("results:toggle",
                                            function() {
                                                var t = s.getHighlightedResults();
                                                0 !== t.length && t.trigger("mouseup")
                                            }),
                                        n.on("results:select",
                                            function() {
                                                var t = s.getHighlightedResults();
                                                if (0 !== t.length) {
                                                    var n = e.GetData(t[0], "data");
                                                    "true" == t.attr("aria-selected") ? s.trigger("close", {}) : s.trigger("select", {
                                                        data: n
                                                    })
                                                }
                                            }),
                                        n.on("results:previous",
                                            function() {
                                                var t = s.getHighlightedResults(),
                                                    e = s.$results.find("[aria-selected]"),
                                                    n = e.index(t);
                                                if (! (n <= 0)) {
                                                    var i = n - 1;
                                                    0 === t.length && (i = 0);
                                                    var o = e.eq(i);
                                                    o.trigger("mouseenter");
                                                    var r = s.$results.offset().top,
                                                        a = o.offset().top,
                                                        l = s.$results.scrollTop() + (a - r);
                                                    0 === i ? s.$results.scrollTop(0) : a - r < 0 && s.$results.scrollTop(l)
                                                }
                                            }),
                                        n.on("results:next",
                                            function() {
                                                var t = s.getHighlightedResults(),
                                                    e = s.$results.find("[aria-selected]"),
                                                    n = e.index(t) + 1;
                                                if (! (n >= e.length)) {
                                                    var i = e.eq(n);
                                                    i.trigger("mouseenter");
                                                    var o = s.$results.offset().top + s.$results.outerHeight(!1),
                                                        r = i.offset().top + i.outerHeight(!1),
                                                        a = s.$results.scrollTop() + r - o;
                                                    0 === n ? s.$results.scrollTop(0) : r > o && s.$results.scrollTop(a)
                                                }
                                            }),
                                        n.on("results:focus",
                                            function(t) {
                                                t.element.addClass("select2-results__option--highlighted")
                                            }),
                                        n.on("results:message",
                                            function(t) {
                                                s.displayMessage(t)
                                            }),
                                    t.fn.mousewheel && this.$results.on("mousewheel",
                                        function(t) {
                                            var e = s.$results.scrollTop(),
                                                n = s.$results.get(0).scrollHeight - e + t.deltaY,
                                                i = t.deltaY > 0 && e - t.deltaY <= 0,
                                                o = t.deltaY < 0 && n <= s.$results.height();
                                            i ? (s.$results.scrollTop(0), t.preventDefault(), t.stopPropagation()) : o && (s.$results.scrollTop(s.$results.get(0).scrollHeight - s.$results.height()), t.preventDefault(), t.stopPropagation())
                                        }),
                                        this.$results.on("mouseup", ".select2-results__option[aria-selected]",
                                            function(n) {
                                                var i = t(this),
                                                    o = e.GetData(this, "data");
                                                "true" !== i.attr("aria-selected") ? s.trigger("select", {
                                                    originalEvent: n,
                                                    data: o
                                                }) : s.options.get("multiple") ? s.trigger("unselect", {
                                                    originalEvent: n,
                                                    data: o
                                                }) : s.trigger("close", {})
                                            }),
                                        this.$results.on("mouseenter", ".select2-results__option[aria-selected]",
                                            function(n) {
                                                var i = e.GetData(this, "data");
                                                s.getHighlightedResults().removeClass("select2-results__option--highlighted"),
                                                    s.trigger("results:focus", {
                                                        data: i,
                                                        element: t(this)
                                                    })
                                            })
                                },
                                n.prototype.getHighlightedResults = function() {
                                    return this.$results.find(".select2-results__option--highlighted")
                                },
                                n.prototype.destroy = function() {
                                    this.$results.remove()
                                },
                                n.prototype.ensureHighlightVisible = function() {
                                    var t = this.getHighlightedResults();
                                    if (0 !== t.length) {
                                        var e = this.$results.find("[aria-selected]").index(t),
                                            n = this.$results.offset().top,
                                            i = t.offset().top,
                                            s = this.$results.scrollTop() + (i - n),
                                            o = i - n;
                                        s -= 2 * t.outerHeight(!1),
                                            e <= 2 ? this.$results.scrollTop(0) : (o > this.$results.outerHeight() || o < 0) && this.$results.scrollTop(s)
                                    }
                                },
                                n.prototype.template = function(e, n) {
                                    var i = this.options.get("templateResult"),
                                        s = this.options.get("escapeMarkup"),
                                        o = i(e, n);
                                    null == o ? n.style.display = "none": "string" == typeof o ? n.innerHTML = s(o) : t(n).append(o)
                                },
                                n
                        }),
                    e.define("select2/keys", [],
                        function() {
                            return {
                                BACKSPACE: 8,
                                TAB: 9,
                                ENTER: 13,
                                SHIFT: 16,
                                CTRL: 17,
                                ALT: 18,
                                ESC: 27,
                                SPACE: 32,
                                PAGE_UP: 33,
                                PAGE_DOWN: 34,
                                END: 35,
                                HOME: 36,
                                LEFT: 37,
                                UP: 38,
                                RIGHT: 39,
                                DOWN: 40,
                                DELETE: 46
                            }
                        }),
                    e.define("select2/selection/base", ["jquery", "../utils", "../keys"],
                        function(t, e, n) {
                            function i(t, e) {
                                this.$element = t,
                                    this.options = e,
                                    i.__super__.constructor.call(this)
                            }
                            return e.Extend(i, e.Observable),
                                i.prototype.render = function() {
                                    var n = t('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                                    return this._tabindex = 0,
                                        null != e.GetData(this.$element[0], "old-tabindex") ? this._tabindex = e.GetData(this.$element[0], "old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")),
                                        n.attr("title", this.$element.attr("title")),
                                        n.attr("tabindex", this._tabindex),
                                        this.$selection = n,
                                        n
                                },
                                i.prototype.bind = function(t, e) {
                                    var i = this,
                                        s = (t.id, t.id + "-results");
                                    this.container = t,
                                        this.$selection.on("focus",
                                            function(t) {
                                                i.trigger("focus", t)
                                            }),
                                        this.$selection.on("blur",
                                            function(t) {
                                                i._handleBlur(t)
                                            }),
                                        this.$selection.on("keydown",
                                            function(t) {
                                                i.trigger("keypress", t),
                                                t.which === n.SPACE && t.preventDefault()
                                            }),
                                        t.on("results:focus",
                                            function(t) {
                                                i.$selection.attr("aria-activedescendant", t.data._resultId)
                                            }),
                                        t.on("selection:update",
                                            function(t) {
                                                i.update(t.data)
                                            }),
                                        t.on("open",
                                            function() {
                                                i.$selection.attr("aria-expanded", "true"),
                                                    i.$selection.attr("aria-owns", s),
                                                    i._attachCloseHandler(t)
                                            }),
                                        t.on("close",
                                            function() {
                                                i.$selection.attr("aria-expanded", "false"),
                                                    i.$selection.removeAttr("aria-activedescendant"),
                                                    i.$selection.removeAttr("aria-owns"),
                                                    i.$selection.focus(),
                                                    window.setTimeout(function() {
                                                            i.$selection.focus()
                                                        },
                                                        0),
                                                    i._detachCloseHandler(t)
                                            }),
                                        t.on("enable",
                                            function() {
                                                i.$selection.attr("tabindex", i._tabindex)
                                            }),
                                        t.on("disable",
                                            function() {
                                                i.$selection.attr("tabindex", "-1")
                                            })
                                },
                                i.prototype._handleBlur = function(e) {
                                    var n = this;
                                    window.setTimeout(function() {
                                            document.activeElement == n.$selection[0] || t.contains(n.$selection[0], document.activeElement) || n.trigger("blur", e)
                                        },
                                        1)
                                },
                                i.prototype._attachCloseHandler = function(n) {
                                    t(document.body).on("mousedown.select2." + n.id,
                                        function(n) {
                                            var i = t(n.target).closest(".select2");
                                            t(".select2.select2-container--open").each(function() {
                                                t(this),
                                                this != i[0] && e.GetData(this, "element").select2("close")
                                            })
                                        })
                                },
                                i.prototype._detachCloseHandler = function(e) {
                                    t(document.body).off("mousedown.select2." + e.id)
                                },
                                i.prototype.position = function(t, e) {
                                    e.find(".selection").append(t)
                                },
                                i.prototype.destroy = function() {
                                    this._detachCloseHandler(this.container)
                                },
                                i.prototype.update = function(t) {
                                    throw new Error("The `update` method must be defined in child classes.")
                                },
                                i
                        }),
                    e.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"],
                        function(t, e, n, i) {
                            function s() {
                                s.__super__.constructor.apply(this, arguments)
                            }
                            return n.Extend(s, e),
                                s.prototype.render = function() {
                                    var t = s.__super__.render.call(this);
                                    return t.addClass("select2-selection--single"),
                                        t.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),
                                        t
                                },
                                s.prototype.bind = function(t, e) {
                                    var n = this;
                                    s.__super__.bind.apply(this, arguments);
                                    var i = t.id + "-container";
                                    this.$selection.find(".select2-selection__rendered").attr("id", i).attr("role", "textbox").attr("aria-readonly", "true"),
                                        this.$selection.attr("aria-labelledby", i),
                                        this.$selection.on("mousedown",
                                            function(t) {
                                                1 === t.which && n.trigger("toggle", {
                                                    originalEvent: t
                                                })
                                            }),
                                        this.$selection.on("focus",
                                            function(t) {}),
                                        this.$selection.on("blur",
                                            function(t) {}),
                                        t.on("focus",
                                            function(e) {
                                                t.isOpen() || n.$selection.focus()
                                            })
                                },
                                s.prototype.clear = function() {
                                    var t = this.$selection.find(".select2-selection__rendered");
                                    t.empty(),
                                        t.removeAttr("title")
                                },
                                s.prototype.display = function(t, e) {
                                    var n = this.options.get("templateSelection");
                                    return this.options.get("escapeMarkup")(n(t, e))
                                },
                                s.prototype.selectionContainer = function() {
                                    return t("<span></span>")
                                },
                                s.prototype.update = function(t) {
                                    if (0 !== t.length) {
                                        var e = t[0],
                                            n = this.$selection.find(".select2-selection__rendered"),
                                            i = this.display(e, n);
                                        n.empty().append(i),
                                            n.attr("title", e.title || e.text)
                                    } else this.clear()
                                },
                                s
                        }),
                    e.define("select2/selection/multiple", ["jquery", "./base", "../utils"],
                        function(t, e, n) {
                            function i(t, e) {
                                i.__super__.constructor.apply(this, arguments)
                            }
                            return n.Extend(i, e),
                                i.prototype.render = function() {
                                    var t = i.__super__.render.call(this);
                                    return t.addClass("select2-selection--multiple"),
                                        t.html('<ul class="select2-selection__rendered"></ul>'),
                                        t
                                },
                                i.prototype.bind = function(e, s) {
                                    var o = this;
                                    i.__super__.bind.apply(this, arguments),
                                        this.$selection.on("click",
                                            function(t) {
                                                o.trigger("toggle", {
                                                    originalEvent: t
                                                })
                                            }),
                                        this.$selection.on("click", ".select2-selection__choice__remove",
                                            function(e) {
                                                if (!o.options.get("disabled")) {
                                                    var i = t(this).parent(),
                                                        s = n.GetData(i[0], "data");
                                                    o.trigger("unselect", {
                                                        originalEvent: e,
                                                        data: s
                                                    })
                                                }
                                            })
                                },
                                i.prototype.clear = function() {
                                    var t = this.$selection.find(".select2-selection__rendered");
                                    t.empty(),
                                        t.removeAttr("title")
                                },
                                i.prototype.display = function(t, e) {
                                    var n = this.options.get("templateSelection");
                                    return this.options.get("escapeMarkup")(n(t, e))
                                },
                                i.prototype.selectionContainer = function() {
                                    return t('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')
                                },
                                i.prototype.update = function(t) {
                                    if (this.clear(), 0 !== t.length) {
                                        for (var e = [], i = 0; i < t.length; i++) {
                                            var s = t[i],
                                                o = this.selectionContainer(),
                                                r = this.display(s, o);
                                            o.append(r),
                                                o.attr("title", s.title || s.text),
                                                n.StoreData(o[0], "data", s),
                                                e.push(o)
                                        }
                                        var a = this.$selection.find(".select2-selection__rendered");
                                        n.appendMany(a, e)
                                    }
                                },
                                i
                        }),
                    e.define("select2/selection/placeholder", ["../utils"],
                        function(t) {
                            function e(t, e, n) {
                                this.placeholder = this.normalizePlaceholder(n.get("placeholder")),
                                    t.call(this, e, n)
                            }
                            return e.prototype.normalizePlaceholder = function(t, e) {
                                return "string" == typeof e && (e = {
                                    id: "",
                                    text: e
                                }),
                                    e
                            },
                                e.prototype.createPlaceholder = function(t, e) {
                                    var n = this.selectionContainer();
                                    return n.html(this.display(e)),
                                        n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),
                                        n
                                },
                                e.prototype.update = function(t, e) {
                                    var n = 1 == e.length && e[0].id != this.placeholder.id;
                                    if (e.length > 1 || n) return t.call(this, e);
                                    this.clear();
                                    var i = this.createPlaceholder(this.placeholder);
                                    this.$selection.find(".select2-selection__rendered").append(i)
                                },
                                e
                        }),
                    e.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"],
                        function(t, e, n) {
                            function i() {}
                            return i.prototype.bind = function(t, e, n) {
                                var i = this;
                                t.call(this, e, n),
                                null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),
                                    this.$selection.on("mousedown", ".select2-selection__clear",
                                        function(t) {
                                            i._handleClear(t)
                                        }),
                                    e.on("keypress",
                                        function(t) {
                                            i._handleKeyboardClear(t, e)
                                        })
                            },
                                i.prototype._handleClear = function(t, e) {
                                    if (!this.options.get("disabled")) {
                                        var i = this.$selection.find(".select2-selection__clear");
                                        if (0 !== i.length) {
                                            e.stopPropagation();
                                            var s = n.GetData(i[0], "data"),
                                                o = this.$element.val();
                                            this.$element.val(this.placeholder.id);
                                            var r = {
                                                data: s
                                            };
                                            if (this.trigger("clear", r), r.prevented) return void this.$element.val(o);
                                            for (var a = 0; a < s.length; a++) if (r = {
                                                data: s[a]
                                            },
                                                this.trigger("unselect", r), r.prevented) return void this.$element.val(o);
                                            this.$element.trigger("change"),
                                                this.trigger("toggle", {})
                                        }
                                    }
                                },
                                i.prototype._handleKeyboardClear = function(t, n, i) {
                                    i.isOpen() || n.which != e.DELETE && n.which != e.BACKSPACE || this._handleClear(n)
                                },
                                i.prototype.update = function(e, i) {
                                    if (e.call(this, i), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === i.length)) {
                                        var s = t('<span class="select2-selection__clear">&times;</span>');
                                        n.StoreData(s[0], "data", i),
                                            this.$selection.find(".select2-selection__rendered").prepend(s)
                                    }
                                },
                                i
                        }),
                    e.define("select2/selection/search", ["jquery", "../utils", "../keys"],
                        function(t, e, n) {
                            function i(t, e, n) {
                                t.call(this, e, n)
                            }
                            return i.prototype.render = function(e) {
                                var n = t('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                                this.$searchContainer = n,
                                    this.$search = n.find("input");
                                var i = e.call(this);
                                return this._transferTabIndex(),
                                    i
                            },
                                i.prototype.bind = function(t, i, s) {
                                    var o = this;
                                    t.call(this, i, s),
                                        i.on("open",
                                            function() {
                                                o.$search.trigger("focus")
                                            }),
                                        i.on("close",
                                            function() {
                                                o.$search.val(""),
                                                    o.$search.removeAttr("aria-activedescendant"),
                                                    o.$search.trigger("focus")
                                            }),
                                        i.on("enable",
                                            function() {
                                                o.$search.prop("disabled", !1),
                                                    o._transferTabIndex()
                                            }),
                                        i.on("disable",
                                            function() {
                                                o.$search.prop("disabled", !0)
                                            }),
                                        i.on("focus",
                                            function(t) {
                                                o.$search.trigger("focus")
                                            }),
                                        i.on("results:focus",
                                            function(t) {
                                                o.$search.attr("aria-activedescendant", t.id)
                                            }),
                                        this.$selection.on("focusin", ".select2-search--inline",
                                            function(t) {
                                                o.trigger("focus", t)
                                            }),
                                        this.$selection.on("focusout", ".select2-search--inline",
                                            function(t) {
                                                o._handleBlur(t)
                                            }),
                                        this.$selection.on("keydown", ".select2-search--inline",
                                            function(t) {
                                                if (t.stopPropagation(), o.trigger("keypress", t), o._keyUpPrevented = t.isDefaultPrevented(), t.which === n.BACKSPACE && "" === o.$search.val()) {
                                                    var i = o.$searchContainer.prev(".select2-selection__choice");
                                                    if (i.length > 0) {
                                                        var s = e.GetData(i[0], "data");
                                                        o.searchRemoveChoice(s),
                                                            t.preventDefault()
                                                    }
                                                }
                                            });
                                    var r = document.documentMode,
                                        a = r && r <= 11;
                                    this.$selection.on("input.searchcheck", ".select2-search--inline",
                                        function(t) {
                                            a ? o.$selection.off("input.search input.searchcheck") : o.$selection.off("keyup.search")
                                        }),
                                        this.$selection.on("keyup.search input.search", ".select2-search--inline",
                                            function(t) {
                                                if (a && "input" === t.type) o.$selection.off("input.search input.searchcheck");
                                                else {
                                                    var e = t.which;
                                                    e != n.SHIFT && e != n.CTRL && e != n.ALT && e != n.TAB && o.handleSearch(t)
                                                }
                                            })
                                },
                                i.prototype._transferTabIndex = function(t) {
                                    this.$search.attr("tabindex", this.$selection.attr("tabindex")),
                                        this.$selection.attr("tabindex", "-1")
                                },
                                i.prototype.createPlaceholder = function(t, e) {
                                    this.$search.attr("placeholder", e.text)
                                },
                                i.prototype.update = function(t, e) {
                                    var n = this.$search[0] == document.activeElement;
                                    this.$search.attr("placeholder", ""),
                                        t.call(this, e),
                                        this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),
                                        this.resizeSearch(),
                                    n && (this.$element.find("[data-select2-tag]").length ? this.$element.focus() : this.$search.focus())
                                },
                                i.prototype.handleSearch = function() {
                                    if (this.resizeSearch(), !this._keyUpPrevented) {
                                        var t = this.$search.val();
                                        this.trigger("query", {
                                            term: t
                                        })
                                    }
                                    this._keyUpPrevented = !1
                                },
                                i.prototype.searchRemoveChoice = function(t, e) {
                                    this.trigger("unselect", {
                                        data: e
                                    }),
                                        this.$search.val(e.text),
                                        this.handleSearch()
                                },
                                i.prototype.resizeSearch = function() {
                                    this.$search.css("width", "25px");
                                    var t = "";
                                    t = "" !== this.$search.attr("placeholder") ? this.$selection.find(".select2-selection__rendered").innerWidth() : .75 * (this.$search.val().length + 1) + "em",
                                        this.$search.css("width", t)
                                },
                                i
                        }),
                    e.define("select2/selection/eventRelay", ["jquery"],
                        function(t) {
                            function e() {}
                            return e.prototype.bind = function(e, n, i) {
                                var s = this,
                                    o = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"],
                                    r = ["opening", "closing", "selecting", "unselecting", "clearing"];
                                e.call(this, n, i),
                                    n.on("*",
                                        function(e, n) {
                                            if ( - 1 !== t.inArray(e, o)) {
                                                n = n || {};
                                                var i = t.Event("select2:" + e, {
                                                    params: n
                                                });
                                                s.$element.trigger(i),
                                                -1 !== t.inArray(e, r) && (n.prevented = i.isDefaultPrevented())
                                            }
                                        })
                            },
                                e
                        }),
                    e.define("select2/translation", ["jquery", "require"],
                        function(t, e) {
                            function n(t) {
                                this.dict = t || {}
                            }
                            return n.prototype.all = function() {
                                return this.dict
                            },
                                n.prototype.get = function(t) {
                                    return this.dict[t]
                                },
                                n.prototype.extend = function(e) {
                                    this.dict = t.extend({},
                                        e.all(), this.dict)
                                },
                                n._cache = {},
                                n.loadPath = function(t) {
                                    if (! (t in n._cache)) {
                                        var i = e(t);
                                        n._cache[t] = i
                                    }
                                    return new n(n._cache[t])
                                },
                                n
                        }),
                    e.define("select2/diacritics", [],
                        function() {
                            return {
                                "Ⓐ": "A",
                                "Ａ": "A",
                                "À": "A",
                                "Á": "A",
                                "Â": "A",
                                "Ầ": "A",
                                "Ấ": "A",
                                "Ẫ": "A",
                                "Ẩ": "A",
                                "Ã": "A",
                                "Ā": "A",
                                "Ă": "A",
                                "Ằ": "A",
                                "Ắ": "A",
                                "Ẵ": "A",
                                "Ẳ": "A",
                                "Ȧ": "A",
                                "Ǡ": "A",
                                "Ä": "A",
                                "Ǟ": "A",
                                "Ả": "A",
                                "Å": "A",
                                "Ǻ": "A",
                                "Ǎ": "A",
                                "Ȁ": "A",
                                "Ȃ": "A",
                                "Ạ": "A",
                                "Ậ": "A",
                                "Ặ": "A",
                                "Ḁ": "A",
                                "Ą": "A",
                                "Ⱥ": "A",
                                "Ɐ": "A",
                                "Ꜳ": "AA",
                                "Æ": "AE",
                                "Ǽ": "AE",
                                "Ǣ": "AE",
                                "Ꜵ": "AO",
                                "Ꜷ": "AU",
                                "Ꜹ": "AV",
                                "Ꜻ": "AV",
                                "Ꜽ": "AY",
                                "Ⓑ": "B",
                                "Ｂ": "B",
                                "Ḃ": "B",
                                "Ḅ": "B",
                                "Ḇ": "B",
                                "Ƀ": "B",
                                "Ƃ": "B",
                                "Ɓ": "B",
                                "Ⓒ": "C",
                                "Ｃ": "C",
                                "Ć": "C",
                                "Ĉ": "C",
                                "Ċ": "C",
                                "Č": "C",
                                "Ç": "C",
                                "Ḉ": "C",
                                "Ƈ": "C",
                                "Ȼ": "C",
                                "Ꜿ": "C",
                                "Ⓓ": "D",
                                "Ｄ": "D",
                                "Ḋ": "D",
                                "Ď": "D",
                                "Ḍ": "D",
                                "Ḑ": "D",
                                "Ḓ": "D",
                                "Ḏ": "D",
                                "Đ": "D",
                                "Ƌ": "D",
                                "Ɗ": "D",
                                "Ɖ": "D",
                                "Ꝺ": "D",
                                "Ǳ": "DZ",
                                "Ǆ": "DZ",
                                "ǲ": "Dz",
                                "ǅ": "Dz",
                                "Ⓔ": "E",
                                "Ｅ": "E",
                                "È": "E",
                                "É": "E",
                                "Ê": "E",
                                "Ề": "E",
                                "Ế": "E",
                                "Ễ": "E",
                                "Ể": "E",
                                "Ẽ": "E",
                                "Ē": "E",
                                "Ḕ": "E",
                                "Ḗ": "E",
                                "Ĕ": "E",
                                "Ė": "E",
                                "Ë": "E",
                                "Ẻ": "E",
                                "Ě": "E",
                                "Ȅ": "E",
                                "Ȇ": "E",
                                "Ẹ": "E",
                                "Ệ": "E",
                                "Ȩ": "E",
                                "Ḝ": "E",
                                "Ę": "E",
                                "Ḙ": "E",
                                "Ḛ": "E",
                                "Ɛ": "E",
                                "Ǝ": "E",
                                "Ⓕ": "F",
                                "Ｆ": "F",
                                "Ḟ": "F",
                                "Ƒ": "F",
                                "Ꝼ": "F",
                                "Ⓖ": "G",
                                "Ｇ": "G",
                                "Ǵ": "G",
                                "Ĝ": "G",
                                "Ḡ": "G",
                                "Ğ": "G",
                                "Ġ": "G",
                                "Ǧ": "G",
                                "Ģ": "G",
                                "Ǥ": "G",
                                "Ɠ": "G",
                                "Ꞡ": "G",
                                "Ᵹ": "G",
                                "Ꝿ": "G",
                                "Ⓗ": "H",
                                "Ｈ": "H",
                                "Ĥ": "H",
                                "Ḣ": "H",
                                "Ḧ": "H",
                                "Ȟ": "H",
                                "Ḥ": "H",
                                "Ḩ": "H",
                                "Ḫ": "H",
                                "Ħ": "H",
                                "Ⱨ": "H",
                                "Ⱶ": "H",
                                "Ɥ": "H",
                                "Ⓘ": "I",
                                "Ｉ": "I",
                                "Ì": "I",
                                "Í": "I",
                                "Î": "I",
                                "Ĩ": "I",
                                "Ī": "I",
                                "Ĭ": "I",
                                "İ": "I",
                                "Ï": "I",
                                "Ḯ": "I",
                                "Ỉ": "I",
                                "Ǐ": "I",
                                "Ȉ": "I",
                                "Ȋ": "I",
                                "Ị": "I",
                                "Į": "I",
                                "Ḭ": "I",
                                "Ɨ": "I",
                                "Ⓙ": "J",
                                "Ｊ": "J",
                                "Ĵ": "J",
                                "Ɉ": "J",
                                "Ⓚ": "K",
                                "Ｋ": "K",
                                "Ḱ": "K",
                                "Ǩ": "K",
                                "Ḳ": "K",
                                "Ķ": "K",
                                "Ḵ": "K",
                                "Ƙ": "K",
                                "Ⱪ": "K",
                                "Ꝁ": "K",
                                "Ꝃ": "K",
                                "Ꝅ": "K",
                                "Ꞣ": "K",
                                "Ⓛ": "L",
                                "Ｌ": "L",
                                "Ŀ": "L",
                                "Ĺ": "L",
                                "Ľ": "L",
                                "Ḷ": "L",
                                "Ḹ": "L",
                                "Ļ": "L",
                                "Ḽ": "L",
                                "Ḻ": "L",
                                "Ł": "L",
                                "Ƚ": "L",
                                "Ɫ": "L",
                                "Ⱡ": "L",
                                "Ꝉ": "L",
                                "Ꝇ": "L",
                                "Ꞁ": "L",
                                "Ǉ": "LJ",
                                "ǈ": "Lj",
                                "Ⓜ": "M",
                                "Ｍ": "M",
                                "Ḿ": "M",
                                "Ṁ": "M",
                                "Ṃ": "M",
                                "Ɱ": "M",
                                "Ɯ": "M",
                                "Ⓝ": "N",
                                "Ｎ": "N",
                                "Ǹ": "N",
                                "Ń": "N",
                                "Ñ": "N",
                                "Ṅ": "N",
                                "Ň": "N",
                                "Ṇ": "N",
                                "Ņ": "N",
                                "Ṋ": "N",
                                "Ṉ": "N",
                                "Ƞ": "N",
                                "Ɲ": "N",
                                "Ꞑ": "N",
                                "Ꞥ": "N",
                                "Ǌ": "NJ",
                                "ǋ": "Nj",
                                "Ⓞ": "O",
                                "Ｏ": "O",
                                "Ò": "O",
                                "Ó": "O",
                                "Ô": "O",
                                "Ồ": "O",
                                "Ố": "O",
                                "Ỗ": "O",
                                "Ổ": "O",
                                "Õ": "O",
                                "Ṍ": "O",
                                "Ȭ": "O",
                                "Ṏ": "O",
                                "Ō": "O",
                                "Ṑ": "O",
                                "Ṓ": "O",
                                "Ŏ": "O",
                                "Ȯ": "O",
                                "Ȱ": "O",
                                "Ö": "O",
                                "Ȫ": "O",
                                "Ỏ": "O",
                                "Ő": "O",
                                "Ǒ": "O",
                                "Ȍ": "O",
                                "Ȏ": "O",
                                "Ơ": "O",
                                "Ờ": "O",
                                "Ớ": "O",
                                "Ỡ": "O",
                                "Ở": "O",
                                "Ợ": "O",
                                "Ọ": "O",
                                "Ộ": "O",
                                "Ǫ": "O",
                                "Ǭ": "O",
                                "Ø": "O",
                                "Ǿ": "O",
                                "Ɔ": "O",
                                "Ɵ": "O",
                                "Ꝋ": "O",
                                "Ꝍ": "O",
                                "Ƣ": "OI",
                                "Ꝏ": "OO",
                                "Ȣ": "OU",
                                "Ⓟ": "P",
                                "Ｐ": "P",
                                "Ṕ": "P",
                                "Ṗ": "P",
                                "Ƥ": "P",
                                "Ᵽ": "P",
                                "Ꝑ": "P",
                                "Ꝓ": "P",
                                "Ꝕ": "P",
                                "Ⓠ": "Q",
                                "Ｑ": "Q",
                                "Ꝗ": "Q",
                                "Ꝙ": "Q",
                                "Ɋ": "Q",
                                "Ⓡ": "R",
                                "Ｒ": "R",
                                "Ŕ": "R",
                                "Ṙ": "R",
                                "Ř": "R",
                                "Ȑ": "R",
                                "Ȓ": "R",
                                "Ṛ": "R",
                                "Ṝ": "R",
                                "Ŗ": "R",
                                "Ṟ": "R",
                                "Ɍ": "R",
                                "Ɽ": "R",
                                "Ꝛ": "R",
                                "Ꞧ": "R",
                                "Ꞃ": "R",
                                "Ⓢ": "S",
                                "Ｓ": "S",
                                "ẞ": "S",
                                "Ś": "S",
                                "Ṥ": "S",
                                "Ŝ": "S",
                                "Ṡ": "S",
                                "Š": "S",
                                "Ṧ": "S",
                                "Ṣ": "S",
                                "Ṩ": "S",
                                "Ș": "S",
                                "Ş": "S",
                                "Ȿ": "S",
                                "Ꞩ": "S",
                                "Ꞅ": "S",
                                "Ⓣ": "T",
                                "Ｔ": "T",
                                "Ṫ": "T",
                                "Ť": "T",
                                "Ṭ": "T",
                                "Ț": "T",
                                "Ţ": "T",
                                "Ṱ": "T",
                                "Ṯ": "T",
                                "Ŧ": "T",
                                "Ƭ": "T",
                                "Ʈ": "T",
                                "Ⱦ": "T",
                                "Ꞇ": "T",
                                "Ꜩ": "TZ",
                                "Ⓤ": "U",
                                "Ｕ": "U",
                                "Ù": "U",
                                "Ú": "U",
                                "Û": "U",
                                "Ũ": "U",
                                "Ṹ": "U",
                                "Ū": "U",
                                "Ṻ": "U",
                                "Ŭ": "U",
                                "Ü": "U",
                                "Ǜ": "U",
                                "Ǘ": "U",
                                "Ǖ": "U",
                                "Ǚ": "U",
                                "Ủ": "U",
                                "Ů": "U",
                                "Ű": "U",
                                "Ǔ": "U",
                                "Ȕ": "U",
                                "Ȗ": "U",
                                "Ư": "U",
                                "Ừ": "U",
                                "Ứ": "U",
                                "Ữ": "U",
                                "Ử": "U",
                                "Ự": "U",
                                "Ụ": "U",
                                "Ṳ": "U",
                                "Ų": "U",
                                "Ṷ": "U",
                                "Ṵ": "U",
                                "Ʉ": "U",
                                "Ⓥ": "V",
                                "Ｖ": "V",
                                "Ṽ": "V",
                                "Ṿ": "V",
                                "Ʋ": "V",
                                "Ꝟ": "V",
                                "Ʌ": "V",
                                "Ꝡ": "VY",
                                "Ⓦ": "W",
                                "Ｗ": "W",
                                "Ẁ": "W",
                                "Ẃ": "W",
                                "Ŵ": "W",
                                "Ẇ": "W",
                                "Ẅ": "W",
                                "Ẉ": "W",
                                "Ⱳ": "W",
                                "Ⓧ": "X",
                                "Ｘ": "X",
                                "Ẋ": "X",
                                "Ẍ": "X",
                                "Ⓨ": "Y",
                                "Ｙ": "Y",
                                "Ỳ": "Y",
                                "Ý": "Y",
                                "Ŷ": "Y",
                                "Ỹ": "Y",
                                "Ȳ": "Y",
                                "Ẏ": "Y",
                                "Ÿ": "Y",
                                "Ỷ": "Y",
                                "Ỵ": "Y",
                                "Ƴ": "Y",
                                "Ɏ": "Y",
                                "Ỿ": "Y",
                                "Ⓩ": "Z",
                                "Ｚ": "Z",
                                "Ź": "Z",
                                "Ẑ": "Z",
                                "Ż": "Z",
                                "Ž": "Z",
                                "Ẓ": "Z",
                                "Ẕ": "Z",
                                "Ƶ": "Z",
                                "Ȥ": "Z",
                                "Ɀ": "Z",
                                "Ⱬ": "Z",
                                "Ꝣ": "Z",
                                "ⓐ": "a",
                                "ａ": "a",
                                "ẚ": "a",
                                "à": "a",
                                "á": "a",
                                "â": "a",
                                "ầ": "a",
                                "ấ": "a",
                                "ẫ": "a",
                                "ẩ": "a",
                                "ã": "a",
                                "ā": "a",
                                "ă": "a",
                                "ằ": "a",
                                "ắ": "a",
                                "ẵ": "a",
                                "ẳ": "a",
                                "ȧ": "a",
                                "ǡ": "a",
                                "ä": "a",
                                "ǟ": "a",
                                "ả": "a",
                                "å": "a",
                                "ǻ": "a",
                                "ǎ": "a",
                                "ȁ": "a",
                                "ȃ": "a",
                                "ạ": "a",
                                "ậ": "a",
                                "ặ": "a",
                                "ḁ": "a",
                                "ą": "a",
                                "ⱥ": "a",
                                "ɐ": "a",
                                "ꜳ": "aa",
                                "æ": "ae",
                                "ǽ": "ae",
                                "ǣ": "ae",
                                "ꜵ": "ao",
                                "ꜷ": "au",
                                "ꜹ": "av",
                                "ꜻ": "av",
                                "ꜽ": "ay",
                                "ⓑ": "b",
                                "ｂ": "b",
                                "ḃ": "b",
                                "ḅ": "b",
                                "ḇ": "b",
                                "ƀ": "b",
                                "ƃ": "b",
                                "ɓ": "b",
                                "ⓒ": "c",
                                "ｃ": "c",
                                "ć": "c",
                                "ĉ": "c",
                                "ċ": "c",
                                "č": "c",
                                "ç": "c",
                                "ḉ": "c",
                                "ƈ": "c",
                                "ȼ": "c",
                                "ꜿ": "c",
                                "ↄ": "c",
                                "ⓓ": "d",
                                "ｄ": "d",
                                "ḋ": "d",
                                "ď": "d",
                                "ḍ": "d",
                                "ḑ": "d",
                                "ḓ": "d",
                                "ḏ": "d",
                                "đ": "d",
                                "ƌ": "d",
                                "ɖ": "d",
                                "ɗ": "d",
                                "ꝺ": "d",
                                "ǳ": "dz",
                                "ǆ": "dz",
                                "ⓔ": "e",
                                "ｅ": "e",
                                "è": "e",
                                "é": "e",
                                "ê": "e",
                                "ề": "e",
                                "ế": "e",
                                "ễ": "e",
                                "ể": "e",
                                "ẽ": "e",
                                "ē": "e",
                                "ḕ": "e",
                                "ḗ": "e",
                                "ĕ": "e",
                                "ė": "e",
                                "ë": "e",
                                "ẻ": "e",
                                "ě": "e",
                                "ȅ": "e",
                                "ȇ": "e",
                                "ẹ": "e",
                                "ệ": "e",
                                "ȩ": "e",
                                "ḝ": "e",
                                "ę": "e",
                                "ḙ": "e",
                                "ḛ": "e",
                                "ɇ": "e",
                                "ɛ": "e",
                                "ǝ": "e",
                                "ⓕ": "f",
                                "ｆ": "f",
                                "ḟ": "f",
                                "ƒ": "f",
                                "ꝼ": "f",
                                "ⓖ": "g",
                                "ｇ": "g",
                                "ǵ": "g",
                                "ĝ": "g",
                                "ḡ": "g",
                                "ğ": "g",
                                "ġ": "g",
                                "ǧ": "g",
                                "ģ": "g",
                                "ǥ": "g",
                                "ɠ": "g",
                                "ꞡ": "g",
                                "ᵹ": "g",
                                "ꝿ": "g",
                                "ⓗ": "h",
                                "ｈ": "h",
                                "ĥ": "h",
                                "ḣ": "h",
                                "ḧ": "h",
                                "ȟ": "h",
                                "ḥ": "h",
                                "ḩ": "h",
                                "ḫ": "h",
                                "ẖ": "h",
                                "ħ": "h",
                                "ⱨ": "h",
                                "ⱶ": "h",
                                "ɥ": "h",
                                "ƕ": "hv",
                                "ⓘ": "i",
                                "ｉ": "i",
                                "ì": "i",
                                "í": "i",
                                "î": "i",
                                "ĩ": "i",
                                "ī": "i",
                                "ĭ": "i",
                                "ï": "i",
                                "ḯ": "i",
                                "ỉ": "i",
                                "ǐ": "i",
                                "ȉ": "i",
                                "ȋ": "i",
                                "ị": "i",
                                "į": "i",
                                "ḭ": "i",
                                "ɨ": "i",
                                "ı": "i",
                                "ⓙ": "j",
                                "ｊ": "j",
                                "ĵ": "j",
                                "ǰ": "j",
                                "ɉ": "j",
                                "ⓚ": "k",
                                "ｋ": "k",
                                "ḱ": "k",
                                "ǩ": "k",
                                "ḳ": "k",
                                "ķ": "k",
                                "ḵ": "k",
                                "ƙ": "k",
                                "ⱪ": "k",
                                "ꝁ": "k",
                                "ꝃ": "k",
                                "ꝅ": "k",
                                "ꞣ": "k",
                                "ⓛ": "l",
                                "ｌ": "l",
                                "ŀ": "l",
                                "ĺ": "l",
                                "ľ": "l",
                                "ḷ": "l",
                                "ḹ": "l",
                                "ļ": "l",
                                "ḽ": "l",
                                "ḻ": "l",
                                "ſ": "l",
                                "ł": "l",
                                "ƚ": "l",
                                "ɫ": "l",
                                "ⱡ": "l",
                                "ꝉ": "l",
                                "ꞁ": "l",
                                "ꝇ": "l",
                                "ǉ": "lj",
                                "ⓜ": "m",
                                "ｍ": "m",
                                "ḿ": "m",
                                "ṁ": "m",
                                "ṃ": "m",
                                "ɱ": "m",
                                "ɯ": "m",
                                "ⓝ": "n",
                                "ｎ": "n",
                                "ǹ": "n",
                                "ń": "n",
                                "ñ": "n",
                                "ṅ": "n",
                                "ň": "n",
                                "ṇ": "n",
                                "ņ": "n",
                                "ṋ": "n",
                                "ṉ": "n",
                                "ƞ": "n",
                                "ɲ": "n",
                                "ŉ": "n",
                                "ꞑ": "n",
                                "ꞥ": "n",
                                "ǌ": "nj",
                                "ⓞ": "o",
                                "ｏ": "o",
                                "ò": "o",
                                "ó": "o",
                                "ô": "o",
                                "ồ": "o",
                                "ố": "o",
                                "ỗ": "o",
                                "ổ": "o",
                                "õ": "o",
                                "ṍ": "o",
                                "ȭ": "o",
                                "ṏ": "o",
                                "ō": "o",
                                "ṑ": "o",
                                "ṓ": "o",
                                "ŏ": "o",
                                "ȯ": "o",
                                "ȱ": "o",
                                "ö": "o",
                                "ȫ": "o",
                                "ỏ": "o",
                                "ő": "o",
                                "ǒ": "o",
                                "ȍ": "o",
                                "ȏ": "o",
                                "ơ": "o",
                                "ờ": "o",
                                "ớ": "o",
                                "ỡ": "o",
                                "ở": "o",
                                "ợ": "o",
                                "ọ": "o",
                                "ộ": "o",
                                "ǫ": "o",
                                "ǭ": "o",
                                "ø": "o",
                                "ǿ": "o",
                                "ɔ": "o",
                                "ꝋ": "o",
                                "ꝍ": "o",
                                "ɵ": "o",
                                "ƣ": "oi",
                                "ȣ": "ou",
                                "ꝏ": "oo",
                                "ⓟ": "p",
                                "ｐ": "p",
                                "ṕ": "p",
                                "ṗ": "p",
                                "ƥ": "p",
                                "ᵽ": "p",
                                "ꝑ": "p",
                                "ꝓ": "p",
                                "ꝕ": "p",
                                "ⓠ": "q",
                                "ｑ": "q",
                                "ɋ": "q",
                                "ꝗ": "q",
                                "ꝙ": "q",
                                "ⓡ": "r",
                                "ｒ": "r",
                                "ŕ": "r",
                                "ṙ": "r",
                                "ř": "r",
                                "ȑ": "r",
                                "ȓ": "r",
                                "ṛ": "r",
                                "ṝ": "r",
                                "ŗ": "r",
                                "ṟ": "r",
                                "ɍ": "r",
                                "ɽ": "r",
                                "ꝛ": "r",
                                "ꞧ": "r",
                                "ꞃ": "r",
                                "ⓢ": "s",
                                "ｓ": "s",
                                "ß": "s",
                                "ś": "s",
                                "ṥ": "s",
                                "ŝ": "s",
                                "ṡ": "s",
                                "š": "s",
                                "ṧ": "s",
                                "ṣ": "s",
                                "ṩ": "s",
                                "ș": "s",
                                "ş": "s",
                                "ȿ": "s",
                                "ꞩ": "s",
                                "ꞅ": "s",
                                "ẛ": "s",
                                "ⓣ": "t",
                                "ｔ": "t",
                                "ṫ": "t",
                                "ẗ": "t",
                                "ť": "t",
                                "ṭ": "t",
                                "ț": "t",
                                "ţ": "t",
                                "ṱ": "t",
                                "ṯ": "t",
                                "ŧ": "t",
                                "ƭ": "t",
                                "ʈ": "t",
                                "ⱦ": "t",
                                "ꞇ": "t",
                                "ꜩ": "tz",
                                "ⓤ": "u",
                                "ｕ": "u",
                                "ù": "u",
                                "ú": "u",
                                "û": "u",
                                "ũ": "u",
                                "ṹ": "u",
                                "ū": "u",
                                "ṻ": "u",
                                "ŭ": "u",
                                "ü": "u",
                                "ǜ": "u",
                                "ǘ": "u",
                                "ǖ": "u",
                                "ǚ": "u",
                                "ủ": "u",
                                "ů": "u",
                                "ű": "u",
                                "ǔ": "u",
                                "ȕ": "u",
                                "ȗ": "u",
                                "ư": "u",
                                "ừ": "u",
                                "ứ": "u",
                                "ữ": "u",
                                "ử": "u",
                                "ự": "u",
                                "ụ": "u",
                                "ṳ": "u",
                                "ų": "u",
                                "ṷ": "u",
                                "ṵ": "u",
                                "ʉ": "u",
                                "ⓥ": "v",
                                "ｖ": "v",
                                "ṽ": "v",
                                "ṿ": "v",
                                "ʋ": "v",
                                "ꝟ": "v",
                                "ʌ": "v",
                                "ꝡ": "vy",
                                "ⓦ": "w",
                                "ｗ": "w",
                                "ẁ": "w",
                                "ẃ": "w",
                                "ŵ": "w",
                                "ẇ": "w",
                                "ẅ": "w",
                                "ẘ": "w",
                                "ẉ": "w",
                                "ⱳ": "w",
                                "ⓧ": "x",
                                "ｘ": "x",
                                "ẋ": "x",
                                "ẍ": "x",
                                "ⓨ": "y",
                                "ｙ": "y",
                                "ỳ": "y",
                                "ý": "y",
                                "ŷ": "y",
                                "ỹ": "y",
                                "ȳ": "y",
                                "ẏ": "y",
                                "ÿ": "y",
                                "ỷ": "y",
                                "ẙ": "y",
                                "ỵ": "y",
                                "ƴ": "y",
                                "ɏ": "y",
                                "ỿ": "y",
                                "ⓩ": "z",
                                "ｚ": "z",
                                "ź": "z",
                                "ẑ": "z",
                                "ż": "z",
                                "ž": "z",
                                "ẓ": "z",
                                "ẕ": "z",
                                "ƶ": "z",
                                "ȥ": "z",
                                "ɀ": "z",
                                "ⱬ": "z",
                                "ꝣ": "z",
                                "Ά": "Α",
                                "Έ": "Ε",
                                "Ή": "Η",
                                "Ί": "Ι",
                                "Ϊ": "Ι",
                                "Ό": "Ο",
                                "Ύ": "Υ",
                                "Ϋ": "Υ",
                                "Ώ": "Ω",
                                "ά": "α",
                                "έ": "ε",
                                "ή": "η",
                                "ί": "ι",
                                "ϊ": "ι",
                                "ΐ": "ι",
                                "ό": "ο",
                                "ύ": "υ",
                                "ϋ": "υ",
                                "ΰ": "υ",
                                "ω": "ω",
                                "ς": "σ"
                            }
                        }),
                    e.define("select2/data/base", ["../utils"],
                        function(t) {
                            function e(t, n) {
                                e.__super__.constructor.call(this)
                            }
                            return t.Extend(e, t.Observable),
                                e.prototype.current = function(t) {
                                    throw new Error("The `current` method must be defined in child classes.")
                                },
                                e.prototype.query = function(t, e) {
                                    throw new Error("The `query` method must be defined in child classes.")
                                },
                                e.prototype.bind = function(t, e) {},
                                e.prototype.destroy = function() {},
                                e.prototype.generateResultId = function(e, n) {
                                    var i = e.id + "-result-";
                                    return i += t.generateChars(4),
                                        null != n.id ? i += "-" + n.id.toString() : i += "-" + t.generateChars(4),
                                        i
                                },
                                e
                        }),
                    e.define("select2/data/select", ["./base", "../utils", "jquery"],
                        function(t, e, n) {
                            function i(t, e) {
                                this.$element = t,
                                    this.options = e,
                                    i.__super__.constructor.call(this)
                            }
                            return e.Extend(i, t),
                                i.prototype.current = function(t) {
                                    var e = [],
                                        i = this;
                                    this.$element.find(":selected").each(function() {
                                        var t = n(this),
                                            s = i.item(t);
                                        e.push(s)
                                    }),
                                        t(e)
                                },
                                i.prototype.select = function(t) {
                                    var e = this;
                                    if (t.selected = !0, n(t.element).is("option")) return t.element.selected = !0,
                                        void this.$element.trigger("change");
                                    if (this.$element.prop("multiple")) this.current(function(i) {
                                        var s = []; (t = [t]).push.apply(t, i);
                                        for (var o = 0; o < t.length; o++) {
                                            var r = t[o].id; - 1 === n.inArray(r, s) && s.push(r)
                                        }
                                        e.$element.val(s),
                                            e.$element.trigger("change")
                                    });
                                    else {
                                        var i = t.id;
                                        this.$element.val(i),
                                            this.$element.trigger("change")
                                    }
                                },
                                i.prototype.unselect = function(t) {
                                    var e = this;
                                    if (this.$element.prop("multiple")) {
                                        if (t.selected = !1, n(t.element).is("option")) return t.element.selected = !1,
                                            void this.$element.trigger("change");
                                        this.current(function(i) {
                                            for (var s = [], o = 0; o < i.length; o++) {
                                                var r = i[o].id;
                                                r !== t.id && -1 === n.inArray(r, s) && s.push(r)
                                            }
                                            e.$element.val(s),
                                                e.$element.trigger("change")
                                        })
                                    }
                                },
                                i.prototype.bind = function(t, e) {
                                    var n = this;
                                    this.container = t,
                                        t.on("select",
                                            function(t) {
                                                n.select(t.data)
                                            }),
                                        t.on("unselect",
                                            function(t) {
                                                n.unselect(t.data)
                                            })
                                },
                                i.prototype.destroy = function() {
                                    this.$element.find("*").each(function() {
                                        e.RemoveData(this)
                                    })
                                },
                                i.prototype.query = function(t, e) {
                                    var i = [],
                                        s = this;
                                    this.$element.children().each(function() {
                                        var e = n(this);
                                        if (e.is("option") || e.is("optgroup")) {
                                            var o = s.item(e),
                                                r = s.matches(t, o);
                                            null !== r && i.push(r)
                                        }
                                    }),
                                        e({
                                            results: i
                                        })
                                },
                                i.prototype.addOptions = function(t) {
                                    e.appendMany(this.$element, t)
                                },
                                i.prototype.option = function(t) {
                                    var i;
                                    t.children ? (i = document.createElement("optgroup")).label = t.text: void 0 !== (i = document.createElement("option")).textContent ? i.textContent = t.text: i.innerText = t.text,
                                    void 0 !== t.id && (i.value = t.id),
                                    t.disabled && (i.disabled = !0),
                                    t.selected && (i.selected = !0),
                                    t.title && (i.title = t.title);
                                    var s = n(i),
                                        o = this._normalizeItem(t);
                                    return o.element = i,
                                        e.StoreData(i, "data", o),
                                        s
                                },
                                i.prototype.item = function(t) {
                                    var i = {};
                                    if (null != (i = e.GetData(t[0], "data"))) return i;
                                    if (t.is("option")) i = {
                                        id: t.val(),
                                        text: t.text(),
                                        disabled: t.prop("disabled"),
                                        selected: t.prop("selected"),
                                        title: t.prop("title")
                                    };
                                    else if (t.is("optgroup")) {
                                        i = {
                                            text: t.prop("label"),
                                            children: [],
                                            title: t.prop("title")
                                        };
                                        for (var s = t.children("option"), o = [], r = 0; r < s.length; r++) {
                                            var a = n(s[r]),
                                                l = this.item(a);
                                            o.push(l)
                                        }
                                        i.children = o
                                    }
                                    return (i = this._normalizeItem(i)).element = t[0],
                                        e.StoreData(t[0], "data", i),
                                        i
                                },
                                i.prototype._normalizeItem = function(t) {
                                    t !== Object(t) && (t = {
                                        id: t,
                                        text: t
                                    });
                                    return null != (t = n.extend({},
                                        {
                                            text: ""
                                        },
                                        t)).id && (t.id = t.id.toString()),
                                    null != t.text && (t.text = t.text.toString()),
                                    null == t._resultId && t.id && null != this.container && (t._resultId = this.generateResultId(this.container, t)),
                                        n.extend({},
                                            {
                                                selected: !1,
                                                disabled: !1
                                            },
                                            t)
                                },
                                i.prototype.matches = function(t, e) {
                                    return this.options.get("matcher")(t, e)
                                },
                                i
                        }),
                    e.define("select2/data/array", ["./select", "../utils", "jquery"],
                        function(t, e, n) {
                            function i(t, e) {
                                var n = e.get("data") || [];
                                i.__super__.constructor.call(this, t, e),
                                    this.addOptions(this.convertToOptions(n))
                            }
                            return e.Extend(i, t),
                                i.prototype.select = function(t) {
                                    var e = this.$element.find("option").filter(function(e, n) {
                                        return n.value == t.id.toString()
                                    });
                                    0 === e.length && (e = this.option(t), this.addOptions(e)),
                                        i.__super__.select.call(this, t)
                                },
                                i.prototype.convertToOptions = function(t) {
                                    function i(t) {
                                        return function() {
                                            return n(this).val() == t.id
                                        }
                                    }
                                    for (var s = this,
                                             o = this.$element.find("option"), r = o.map(function() {
                                            return s.item(n(this)).id
                                        }).get(), a = [], l = 0; l < t.length; l++) {
                                        var c = this._normalizeItem(t[l]);
                                        if (n.inArray(c.id, r) >= 0) {
                                            var h = o.filter(i(c)),
                                                u = this.item(h),
                                                d = n.extend(!0, {},
                                                    c, u),
                                                f = this.option(d);
                                            h.replaceWith(f)
                                        } else {
                                            var p = this.option(c);
                                            if (c.children) {
                                                var m = this.convertToOptions(c.children);
                                                e.appendMany(p, m)
                                            }
                                            a.push(p)
                                        }
                                    }
                                    return a
                                },
                                i
                        }),
                    e.define("select2/data/ajax", ["./array", "../utils", "jquery"],
                        function(t, e, n) {
                            function i(t, e) {
                                this.ajaxOptions = this._applyDefaults(e.get("ajax")),
                                null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults),
                                    i.__super__.constructor.call(this, t, e)
                            }
                            return e.Extend(i, t),
                                i.prototype._applyDefaults = function(t) {
                                    var e = {
                                        data: function(t) {
                                            return n.extend({},
                                                t, {
                                                    q: t.term
                                                })
                                        },
                                        transport: function(t, e, i) {
                                            var s = n.ajax(t);
                                            return s.then(e),
                                                s.fail(i),
                                                s
                                        }
                                    };
                                    return n.extend({},
                                        e, t, !0)
                                },
                                i.prototype.processResults = function(t) {
                                    return t
                                },
                                i.prototype.query = function(t, e) {
                                    function i() {
                                        var i = o.transport(o,
                                            function(i) {
                                                var o = s.processResults(i, t);
                                                s.options.get("debug") && window.console && console.error && (o && o.results && n.isArray(o.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),
                                                    e(o)
                                            },
                                            function() {
                                                "status" in i && (0 === i.status || "0" === i.status) || s.trigger("results:message", {
                                                    message: "errorLoading"
                                                })
                                            });
                                        s._request = i
                                    }
                                    var s = this;
                                    null != this._request && (n.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                                    var o = n.extend({
                                            type: "GET"
                                        },
                                        this.ajaxOptions);
                                    "function" == typeof o.url && (o.url = o.url.call(this.$element, t)),
                                    "function" == typeof o.data && (o.data = o.data.call(this.$element, t)),
                                        this.ajaxOptions.delay && null != t.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(i, this.ajaxOptions.delay)) : i()
                                },
                                i
                        }),
                    e.define("select2/data/tags", ["jquery"],
                        function(t) {
                            function e(e, n, i) {
                                var s = i.get("tags"),
                                    o = i.get("createTag");
                                void 0 !== o && (this.createTag = o);
                                var r = i.get("insertTag");
                                if (void 0 !== r && (this.insertTag = r), e.call(this, n, i), t.isArray(s)) for (var a = 0; a < s.length; a++) {
                                    var l = s[a],
                                        c = this._normalizeItem(l),
                                        h = this.option(c);
                                    this.$element.append(h)
                                }
                            }
                            return e.prototype.query = function(t, e, n) {
                                var i = this;
                                this._removeOldTags(),
                                    null != e.term && null == e.page ? t.call(this, e,
                                        function t(s, o) {
                                            for (var r = s.results,
                                                     a = 0; a < r.length; a++) {
                                                var l = r[a],
                                                    c = null != l.children && !t({
                                                            results: l.children
                                                        },
                                                        !0);
                                                if ((l.text || "").toUpperCase() === (e.term || "").toUpperCase() || c) return ! o && (s.data = r, void n(s))
                                            }
                                            if (o) return ! 0;
                                            var h = i.createTag(e);
                                            if (null != h) {
                                                var u = i.option(h);
                                                u.attr("data-select2-tag", !0),
                                                    i.addOptions([u]),
                                                    i.insertTag(r, h)
                                            }
                                            s.results = r,
                                                n(s)
                                        }) : t.call(this, e, n)
                            },
                                e.prototype.createTag = function(e, n) {
                                    var i = t.trim(n.term);
                                    return "" === i ? null: {
                                        id: i,
                                        text: i
                                    }
                                },
                                e.prototype.insertTag = function(t, e, n) {
                                    e.unshift(n)
                                },
                                e.prototype._removeOldTags = function(e) {
                                    this._lastTag,
                                        this.$element.find("option[data-select2-tag]").each(function() {
                                            this.selected || t(this).remove()
                                        })
                                },
                                e
                        }),
                    e.define("select2/data/tokenizer", ["jquery"],
                        function(t) {
                            function e(t, e, n) {
                                var i = n.get("tokenizer");
                                void 0 !== i && (this.tokenizer = i),
                                    t.call(this, e, n)
                            }
                            return e.prototype.bind = function(t, e, n) {
                                t.call(this, e, n),
                                    this.$search = e.dropdown.$search || e.selection.$search || n.find(".select2-search__field")
                            },
                                e.prototype.query = function(e, n, i) {
                                    var s = this;
                                    n.term = n.term || "";
                                    var o = this.tokenizer(n, this.options,
                                        function(e) {
                                            var n, i = s._normalizeItem(e);
                                            if (!s.$element.find("option").filter(function() {
                                                return t(this).val() === i.id
                                            }).length) {
                                                var o = s.option(i);
                                                o.attr("data-select2-tag", !0),
                                                    s._removeOldTags(),
                                                    s.addOptions([o])
                                            }
                                            n = i,
                                                s.trigger("select", {
                                                    data: n
                                                })
                                        });
                                    o.term !== n.term && (this.$search.length && (this.$search.val(o.term), this.$search.focus()), n.term = o.term),
                                        e.call(this, n, i)
                                },
                                e.prototype.tokenizer = function(e, n, i, s) {
                                    for (var o = i.get("tokenSeparators") || [], r = n.term, a = 0, l = this.createTag ||
                                        function(t) {
                                            return {
                                                id: t.term,
                                                text: t.term
                                            }
                                        }; a < r.length;) {
                                        var c = r[a];
                                        if ( - 1 !== t.inArray(c, o)) {
                                            var h = r.substr(0, a),
                                                u = l(t.extend({},
                                                    n, {
                                                        term: h
                                                    }));
                                            null != u ? (s(u), r = r.substr(a + 1) || "", a = 0) : a++
                                        } else a++
                                    }
                                    return {
                                        term: r
                                    }
                                },
                                e
                        }),
                    e.define("select2/data/minimumInputLength", [],
                        function() {
                            function t(t, e, n) {
                                this.minimumInputLength = n.get("minimumInputLength"),
                                    t.call(this, e, n)
                            }
                            return t.prototype.query = function(t, e, n) {
                                e.term = e.term || "",
                                    e.term.length < this.minimumInputLength ? this.trigger("results:message", {
                                        message: "inputTooShort",
                                        args: {
                                            minimum: this.minimumInputLength,
                                            input: e.term,
                                            params: e
                                        }
                                    }) : t.call(this, e, n)
                            },
                                t
                        }),
                    e.define("select2/data/maximumInputLength", [],
                        function() {
                            function t(t, e, n) {
                                this.maximumInputLength = n.get("maximumInputLength"),
                                    t.call(this, e, n)
                            }
                            return t.prototype.query = function(t, e, n) {
                                e.term = e.term || "",
                                    this.maximumInputLength > 0 && e.term.length > this.maximumInputLength ? this.trigger("results:message", {
                                        message: "inputTooLong",
                                        args: {
                                            maximum: this.maximumInputLength,
                                            input: e.term,
                                            params: e
                                        }
                                    }) : t.call(this, e, n)
                            },
                                t
                        }),
                    e.define("select2/data/maximumSelectionLength", [],
                        function() {
                            function t(t, e, n) {
                                this.maximumSelectionLength = n.get("maximumSelectionLength"),
                                    t.call(this, e, n)
                            }
                            return t.prototype.query = function(t, e, n) {
                                var i = this;
                                this.current(function(s) {
                                    var o = null != s ? s.length: 0;
                                    i.maximumSelectionLength > 0 && o >= i.maximumSelectionLength ? i.trigger("results:message", {
                                        message: "maximumSelected",
                                        args: {
                                            maximum: i.maximumSelectionLength
                                        }
                                    }) : t.call(i, e, n)
                                })
                            },
                                t
                        }),
                    e.define("select2/dropdown", ["jquery", "./utils"],
                        function(t, e) {
                            function n(t, e) {
                                this.$element = t,
                                    this.options = e,
                                    n.__super__.constructor.call(this)
                            }
                            return e.Extend(n, e.Observable),
                                n.prototype.render = function() {
                                    var e = t('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                                    return e.attr("dir", this.options.get("dir")),
                                        this.$dropdown = e,
                                        e
                                },
                                n.prototype.bind = function() {},
                                n.prototype.position = function(t, e) {},
                                n.prototype.destroy = function() {
                                    this.$dropdown.remove()
                                },
                                n
                        }),
                    e.define("select2/dropdown/search", ["jquery", "../utils"],
                        function(t, e) {
                            function n() {}
                            return n.prototype.render = function(e) {
                                var n = e.call(this),
                                    i = t('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>');
                                return this.$searchContainer = i,
                                    this.$search = i.find("input"),
                                    n.prepend(i),
                                    n
                            },
                                n.prototype.bind = function(e, n, i) {
                                    var s = this;
                                    e.call(this, n, i),
                                        this.$search.on("keydown",
                                            function(t) {
                                                s.trigger("keypress", t),
                                                    s._keyUpPrevented = t.isDefaultPrevented()
                                            }),
                                        this.$search.on("input",
                                            function(e) {
                                                t(this).off("keyup")
                                            }),
                                        this.$search.on("keyup input",
                                            function(t) {
                                                s.handleSearch(t)
                                            }),
                                        n.on("open",
                                            function() {
                                                s.$search.attr("tabindex", 0),
                                                    s.$search.focus(),
                                                    window.setTimeout(function() {
                                                            s.$search.focus()
                                                        },
                                                        0)
                                            }),
                                        n.on("close",
                                            function() {
                                                s.$search.attr("tabindex", -1),
                                                    s.$search.val(""),
                                                    s.$search.blur()
                                            }),
                                        n.on("focus",
                                            function() {
                                                n.isOpen() || s.$search.focus()
                                            }),
                                        n.on("results:all",
                                            function(t) {
                                                null != t.query.term && "" !== t.query.term || (s.showSearch(t) ? s.$searchContainer.removeClass("select2-search--hide") : s.$searchContainer.addClass("select2-search--hide"))
                                            })
                                },
                                n.prototype.handleSearch = function(t) {
                                    if (!this._keyUpPrevented) {
                                        var e = this.$search.val();
                                        this.trigger("query", {
                                            term: e
                                        })
                                    }
                                    this._keyUpPrevented = !1
                                },
                                n.prototype.showSearch = function(t, e) {
                                    return ! 0
                                },
                                n
                        }),
                    e.define("select2/dropdown/hidePlaceholder", [],
                        function() {
                            function t(t, e, n, i) {
                                this.placeholder = this.normalizePlaceholder(n.get("placeholder")),
                                    t.call(this, e, n, i)
                            }
                            return t.prototype.append = function(t, e) {
                                e.results = this.removePlaceholder(e.results),
                                    t.call(this, e)
                            },
                                t.prototype.normalizePlaceholder = function(t, e) {
                                    return "string" == typeof e && (e = {
                                        id: "",
                                        text: e
                                    }),
                                        e
                                },
                                t.prototype.removePlaceholder = function(t, e) {
                                    for (var n = e.slice(0), i = e.length - 1; i >= 0; i--) {
                                        var s = e[i];
                                        this.placeholder.id === s.id && n.splice(i, 1)
                                    }
                                    return n
                                },
                                t
                        }),
                    e.define("select2/dropdown/infiniteScroll", ["jquery"],
                        function(t) {
                            function e(t, e, n, i) {
                                this.lastParams = {},
                                    t.call(this, e, n, i),
                                    this.$loadingMore = this.createLoadingMore(),
                                    this.loading = !1
                            }
                            return e.prototype.append = function(t, e) {
                                this.$loadingMore.remove(),
                                    this.loading = !1,
                                    t.call(this, e),
                                this.showLoadingMore(e) && this.$results.append(this.$loadingMore)
                            },
                                e.prototype.bind = function(e, n, i) {
                                    var s = this;
                                    e.call(this, n, i),
                                        n.on("query",
                                            function(t) {
                                                s.lastParams = t,
                                                    s.loading = !0
                                            }),
                                        n.on("query:append",
                                            function(t) {
                                                s.lastParams = t,
                                                    s.loading = !0
                                            }),
                                        this.$results.on("scroll",
                                            function() {
                                                var e = t.contains(document.documentElement, s.$loadingMore[0]); ! s.loading && e && s.$results.offset().top + s.$results.outerHeight(!1) + 50 >= s.$loadingMore.offset().top + s.$loadingMore.outerHeight(!1) && s.loadMore()
                                            })
                                },
                                e.prototype.loadMore = function() {
                                    this.loading = !0;
                                    var e = t.extend({},
                                        {
                                            page: 1
                                        },
                                        this.lastParams);
                                    e.page++,
                                        this.trigger("query:append", e)
                                },
                                e.prototype.showLoadingMore = function(t, e) {
                                    return e.pagination && e.pagination.more
                                },
                                e.prototype.createLoadingMore = function() {
                                    var e = t('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                                        n = this.options.get("translations").get("loadingMore");
                                    return e.html(n(this.lastParams)),
                                        e
                                },
                                e
                        }),
                    e.define("select2/dropdown/attachBody", ["jquery", "../utils"],
                        function(t, e) {
                            function n(e, n, i) {
                                this.$dropdownParent = i.get("dropdownParent") || t(document.body),
                                    e.call(this, n, i)
                            }
                            return n.prototype.bind = function(t, e, n) {
                                var i = this,
                                    s = !1;
                                t.call(this, e, n),
                                    e.on("open",
                                        function() {
                                            i._showDropdown(),
                                                i._attachPositioningHandler(e),
                                            s || (s = !0, e.on("results:all",
                                                function() {
                                                    i._positionDropdown(),
                                                        i._resizeDropdown()
                                                }), e.on("results:append",
                                                function() {
                                                    i._positionDropdown(),
                                                        i._resizeDropdown()
                                                }))
                                        }),
                                    e.on("close",
                                        function() {
                                            i._hideDropdown(),
                                                i._detachPositioningHandler(e)
                                        }),
                                    this.$dropdownContainer.on("mousedown",
                                        function(t) {
                                            t.stopPropagation()
                                        })
                            },
                                n.prototype.destroy = function(t) {
                                    t.call(this),
                                        this.$dropdownContainer.remove()
                                },
                                n.prototype.position = function(t, e, n) {
                                    e.attr("class", n.attr("class")),
                                        e.removeClass("select2"),
                                        e.addClass("select2-container--open"),
                                        e.css({
                                            position: "absolute",
                                            top: -999999
                                        }),
                                        this.$container = n
                                },
                                n.prototype.render = function(e) {
                                    var n = t("<span></span>"),
                                        i = e.call(this);
                                    return n.append(i),
                                        this.$dropdownContainer = n,
                                        n
                                },
                                n.prototype._hideDropdown = function(t) {
                                    this.$dropdownContainer.detach()
                                },
                                n.prototype._attachPositioningHandler = function(n, i) {
                                    var s = this,
                                        o = "scroll.select2." + i.id,
                                        r = "resize.select2." + i.id,
                                        a = "orientationchange.select2." + i.id,
                                        l = this.$container.parents().filter(e.hasScroll);
                                    l.each(function() {
                                        e.StoreData(this, "select2-scroll-position", {
                                            x: t(this).scrollLeft(),
                                            y: t(this).scrollTop()
                                        })
                                    }),
                                        l.on(o,
                                            function(n) {
                                                var i = e.GetData(this, "select2-scroll-position");
                                                t(this).scrollTop(i.y)
                                            }),
                                        t(window).on(o + " " + r + " " + a,
                                            function(t) {
                                                s._positionDropdown(),
                                                    s._resizeDropdown()
                                            })
                                },
                                n.prototype._detachPositioningHandler = function(n, i) {
                                    var s = "scroll.select2." + i.id,
                                        o = "resize.select2." + i.id,
                                        r = "orientationchange.select2." + i.id;
                                    this.$container.parents().filter(e.hasScroll).off(s),
                                        t(window).off(s + " " + o + " " + r)
                                },
                                n.prototype._positionDropdown = function() {
                                    var e = t(window),
                                        n = this.$dropdown.hasClass("select2-dropdown--above"),
                                        i = this.$dropdown.hasClass("select2-dropdown--below"),
                                        s = null,
                                        o = this.$container.offset();
                                    o.bottom = o.top + this.$container.outerHeight(!1);
                                    var r = {
                                        height: this.$container.outerHeight(!1)
                                    };
                                    r.top = o.top,
                                        r.bottom = o.top + r.height;
                                    var a = this.$dropdown.outerHeight(!1),
                                        l = e.scrollTop(),
                                        c = e.scrollTop() + e.height(),
                                        h = l < o.top - a,
                                        u = c > o.bottom + a,
                                        d = {
                                            left: o.left,
                                            top: r.bottom
                                        },
                                        f = this.$dropdownParent;
                                    "static" === f.css("position") && (f = f.offsetParent());
                                    var p = f.offset();
                                    d.top -= p.top,
                                        d.left -= p.left,
                                    n || i || (s = "below"),
                                        u || !h || n ? !h && u && n && (s = "below") : s = "above",
                                    ("above" == s || n && "below" !== s) && (d.top = r.top - p.top - a),
                                    null != s && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + s), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + s)),
                                        this.$dropdownContainer.css(d)
                                },
                                n.prototype._resizeDropdown = function() {
                                    var t = {
                                        width: this.$container.outerWidth(!1) + "px"
                                    };
                                    this.options.get("dropdownAutoWidth") && (t.minWidth = t.width, t.position = "relative", t.width = "auto"),
                                        this.$dropdown.css(t)
                                },
                                n.prototype._showDropdown = function(t) {
                                    this.$dropdownContainer.appendTo(this.$dropdownParent),
                                        this._positionDropdown(),
                                        this._resizeDropdown()
                                },
                                n
                        }),
                    e.define("select2/dropdown/minimumResultsForSearch", [],
                        function() {
                            function t(t, e, n, i) {
                                this.minimumResultsForSearch = n.get("minimumResultsForSearch"),
                                this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0),
                                    t.call(this, e, n, i)
                            }
                            return t.prototype.showSearch = function(t, e) {
                                return ! (function t(e) {
                                    for (var n = 0,
                                             i = 0; i < e.length; i++) {
                                        var s = e[i];
                                        s.children ? n += t(s.children) : n++
                                    }
                                    return n
                                } (e.data.results) < this.minimumResultsForSearch) && t.call(this, e)
                            },
                                t
                        }),
                    e.define("select2/dropdown/selectOnClose", ["../utils"],
                        function(t) {
                            function e() {}
                            return e.prototype.bind = function(t, e, n) {
                                var i = this;
                                t.call(this, e, n),
                                    e.on("close",
                                        function(t) {
                                            i._handleSelectOnClose(t)
                                        })
                            },
                                e.prototype._handleSelectOnClose = function(e, n) {
                                    if (n && null != n.originalSelect2Event) {
                                        var i = n.originalSelect2Event;
                                        if ("select" === i._type || "unselect" === i._type) return
                                    }
                                    var s = this.getHighlightedResults();
                                    if (! (s.length < 1)) {
                                        var o = t.GetData(s[0], "data");
                                        null != o.element && o.element.selected || null == o.element && o.selected || this.trigger("select", {
                                            data: o
                                        })
                                    }
                                },
                                e
                        }),
                    e.define("select2/dropdown/closeOnSelect", [],
                        function() {
                            function t() {}
                            return t.prototype.bind = function(t, e, n) {
                                var i = this;
                                t.call(this, e, n),
                                    e.on("select",
                                        function(t) {
                                            i._selectTriggered(t)
                                        }),
                                    e.on("unselect",
                                        function(t) {
                                            i._selectTriggered(t)
                                        })
                            },
                                t.prototype._selectTriggered = function(t, e) {
                                    var n = e.originalEvent;
                                    n && n.ctrlKey || this.trigger("close", {
                                        originalEvent: n,
                                        originalSelect2Event: e
                                    })
                                },
                                t
                        }),
                    e.define("select2/i18n/en", [],
                        function() {
                            return {
                                errorLoading: function() {
                                    return "The results could not be loaded."
                                },
                                inputTooLong: function(t) {
                                    var e = t.input.length - t.maximum,
                                        n = "Please delete " + e + " character";
                                    return 1 != e && (n += "s"),
                                        n
                                },
                                inputTooShort: function(t) {
                                    return "Please enter " + (t.minimum - t.input.length) + " or more characters"
                                },
                                loadingMore: function() {
                                    return "Loading more results…"
                                },
                                maximumSelected: function(t) {
                                    var e = "You can only select " + t.maximum + " item";
                                    return 1 != t.maximum && (e += "s"),
                                        e
                                },
                                noResults: function() {
                                    return "No results found"
                                },
                                searching: function() {
                                    return "Searching…"
                                }
                            }
                        }),
                    e.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"],
                        function(t, e, n, i, s, o, r, a, l, c, h, u, d, f, p, m, g, v, y, b, _, w, D, k, C, x, T, S, E) {
                            function M() {
                                this.reset()
                            }
                            return M.prototype.apply = function(u) {
                                if (null == (u = t.extend(!0, {},
                                    this.defaults, u)).dataAdapter) {
                                    if (null != u.ajax ? u.dataAdapter = p: null != u.data ? u.dataAdapter = f: u.dataAdapter = d, u.minimumInputLength > 0 && (u.dataAdapter = c.Decorate(u.dataAdapter, v)), u.maximumInputLength > 0 && (u.dataAdapter = c.Decorate(u.dataAdapter, y)), u.maximumSelectionLength > 0 && (u.dataAdapter = c.Decorate(u.dataAdapter, b)), u.tags && (u.dataAdapter = c.Decorate(u.dataAdapter, m)), null == u.tokenSeparators && null == u.tokenizer || (u.dataAdapter = c.Decorate(u.dataAdapter, g)), null != u.query) {
                                        var E = e(u.amdBase + "compat/query");
                                        u.dataAdapter = c.Decorate(u.dataAdapter, E)
                                    }
                                    if (null != u.initSelection) {
                                        var M = e(u.amdBase + "compat/initSelection");
                                        u.dataAdapter = c.Decorate(u.dataAdapter, M)
                                    }
                                }
                                if (null == u.resultsAdapter && (u.resultsAdapter = n, null != u.ajax && (u.resultsAdapter = c.Decorate(u.resultsAdapter, k)), null != u.placeholder && (u.resultsAdapter = c.Decorate(u.resultsAdapter, D)), u.selectOnClose && (u.resultsAdapter = c.Decorate(u.resultsAdapter, T))), null == u.dropdownAdapter) {
                                    if (u.multiple) u.dropdownAdapter = _;
                                    else {
                                        var A = c.Decorate(_, w);
                                        u.dropdownAdapter = A
                                    }
                                    if (0 !== u.minimumResultsForSearch && (u.dropdownAdapter = c.Decorate(u.dropdownAdapter, x)), u.closeOnSelect && (u.dropdownAdapter = c.Decorate(u.dropdownAdapter, S)), null != u.dropdownCssClass || null != u.dropdownCss || null != u.adaptDropdownCssClass) {
                                        var O = e(u.amdBase + "compat/dropdownCss");
                                        u.dropdownAdapter = c.Decorate(u.dropdownAdapter, O)
                                    }
                                    u.dropdownAdapter = c.Decorate(u.dropdownAdapter, C)
                                }
                                if (null == u.selectionAdapter) {
                                    if (u.multiple ? u.selectionAdapter = s: u.selectionAdapter = i, null != u.placeholder && (u.selectionAdapter = c.Decorate(u.selectionAdapter, o)), u.allowClear && (u.selectionAdapter = c.Decorate(u.selectionAdapter, r)), u.multiple && (u.selectionAdapter = c.Decorate(u.selectionAdapter, a)), null != u.containerCssClass || null != u.containerCss || null != u.adaptContainerCssClass) {
                                        var I = e(u.amdBase + "compat/containerCss");
                                        u.selectionAdapter = c.Decorate(u.selectionAdapter, I)
                                    }
                                    u.selectionAdapter = c.Decorate(u.selectionAdapter, l)
                                }
                                if ("string" == typeof u.language) if (u.language.indexOf("-") > 0) {
                                    var N = u.language.split("-")[0];
                                    u.language = [u.language, N]
                                } else u.language = [u.language];
                                if (t.isArray(u.language)) {
                                    var P = new h;
                                    u.language.push("en");
                                    for (var L = u.language,
                                             j = 0; j < L.length; j++) {
                                        var Y = L[j],
                                            H = {};
                                        try {
                                            H = h.loadPath(Y)
                                        } catch(t) {
                                            try {
                                                Y = this.defaults.amdLanguageBase + Y,
                                                    H = h.loadPath(Y)
                                            } catch(t) {
                                                u.debug && window.console && console.warn && console.warn('Select2: The language file for "' + Y + '" could not be automatically loaded. A fallback will be used instead.');
                                                continue
                                            }
                                        }
                                        P.extend(H)
                                    }
                                    u.translations = P
                                } else {
                                    var $ = h.loadPath(this.defaults.amdLanguageBase + "en"),
                                        R = new h(u.language);
                                    R.extend($),
                                        u.translations = R
                                }
                                return u
                            },
                                M.prototype.reset = function() {
                                    function e(t) {
                                        return t.replace(/[^\u0000-\u007E]/g,
                                            function(t) {
                                                return u[t] || t
                                            })
                                    }
                                    this.defaults = {
                                        amdBase: "./",
                                        amdLanguageBase: "./i18n/",
                                        closeOnSelect: !0,
                                        debug: !1,
                                        dropdownAutoWidth: !1,
                                        escapeMarkup: c.escapeMarkup,
                                        language: E,
                                        matcher: function n(i, s) {
                                            if ("" === t.trim(i.term)) return s;
                                            if (s.children && s.children.length > 0) {
                                                for (var o = t.extend(!0, {},
                                                    s), r = s.children.length - 1; r >= 0; r--) null == n(i, s.children[r]) && o.children.splice(r, 1);
                                                return o.children.length > 0 ? o: n(i, o)
                                            }
                                            var a = e(s.text).toUpperCase(),
                                                l = e(i.term).toUpperCase();
                                            return a.indexOf(l) > -1 ? s: null
                                        },
                                        minimumInputLength: 0,
                                        maximumInputLength: 0,
                                        maximumSelectionLength: 0,
                                        minimumResultsForSearch: 0,
                                        selectOnClose: !1,
                                        sorter: function(t) {
                                            return t
                                        },
                                        templateResult: function(t) {
                                            return t.text
                                        },
                                        templateSelection: function(t) {
                                            return t.text
                                        },
                                        theme: "default",
                                        width: "resolve"
                                    }
                                },
                                M.prototype.set = function(e, n) {
                                    var i = {};
                                    i[t.camelCase(e)] = n;
                                    var s = c._convertData(i);
                                    t.extend(!0, this.defaults, s)
                                },
                                new M
                        }),
                    e.define("select2/options", ["require", "jquery", "./defaults", "./utils"],
                        function(t, e, n, i) {
                            function s(e, s) {
                                if (this.options = e, null != s && this.fromElement(s), this.options = n.apply(this.options), s && s.is("input")) {
                                    var o = t(this.get("amdBase") + "compat/inputData");
                                    this.options.dataAdapter = i.Decorate(this.options.dataAdapter, o)
                                }
                            }
                            return s.prototype.fromElement = function(t) {
                                var n = ["select2"];
                                null == this.options.multiple && (this.options.multiple = t.prop("multiple")),
                                null == this.options.disabled && (this.options.disabled = t.prop("disabled")),
                                null == this.options.language && (t.prop("lang") ? this.options.language = t.prop("lang").toLowerCase() : t.closest("[lang]").prop("lang") && (this.options.language = t.closest("[lang]").prop("lang"))),
                                null == this.options.dir && (t.prop("dir") ? this.options.dir = t.prop("dir") : t.closest("[dir]").prop("dir") ? this.options.dir = t.closest("[dir]").prop("dir") : this.options.dir = "ltr"),
                                    t.prop("disabled", this.options.disabled),
                                    t.prop("multiple", this.options.multiple),
                                i.GetData(t[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), i.StoreData(t[0], "data", i.GetData(t[0], "select2Tags")), i.StoreData(t[0], "tags", !0)),
                                i.GetData(t[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), t.attr("ajax--url", i.GetData(t[0], "ajaxUrl")), i.StoreData(t[0], "ajax-Url", i.GetData(t[0], "ajaxUrl")));
                                var s;
                                s = e.fn.jquery && "1." == e.fn.jquery.substr(0, 2) && t[0].dataset ? e.extend(!0, {},
                                    t[0].dataset, i.GetData(t[0])) : i.GetData(t[0]);
                                var o = e.extend(!0, {},
                                    s);
                                for (var r in o = i._convertData(o)) e.inArray(r, n) > -1 || (e.isPlainObject(this.options[r]) ? e.extend(this.options[r], o[r]) : this.options[r] = o[r]);
                                return this
                            },
                                s.prototype.get = function(t) {
                                    return this.options[t]
                                },
                                s.prototype.set = function(t, e) {
                                    this.options[t] = e
                                },
                                s
                        }),
                    e.define("select2/core", ["jquery", "./options", "./utils", "./keys"],
                        function(t, e, n, i) {
                            var s = function(t, i) {
                                null != n.GetData(t[0], "select2") && n.GetData(t[0], "select2").destroy(),
                                    this.$element = t,
                                    this.id = this._generateId(t),
                                    i = i || {},
                                    this.options = new e(i, t),
                                    s.__super__.constructor.call(this);
                                var o = t.attr("tabindex") || 0;
                                n.StoreData(t[0], "old-tabindex", o),
                                    t.attr("tabindex", "-1");
                                var r = this.options.get("dataAdapter");
                                this.dataAdapter = new r(t, this.options);
                                var a = this.render();
                                this._placeContainer(a);
                                var l = this.options.get("selectionAdapter");
                                this.selection = new l(t, this.options),
                                    this.$selection = this.selection.render(),
                                    this.selection.position(this.$selection, a);
                                var c = this.options.get("dropdownAdapter");
                                this.dropdown = new c(t, this.options),
                                    this.$dropdown = this.dropdown.render(),
                                    this.dropdown.position(this.$dropdown, a);
                                var h = this.options.get("resultsAdapter");
                                this.results = new h(t, this.options, this.dataAdapter),
                                    this.$results = this.results.render(),
                                    this.results.position(this.$results, this.$dropdown);
                                var u = this;
                                this._bindAdapters(),
                                    this._registerDomEvents(),
                                    this._registerDataEvents(),
                                    this._registerSelectionEvents(),
                                    this._registerDropdownEvents(),
                                    this._registerResultsEvents(),
                                    this._registerEvents(),
                                    this.dataAdapter.current(function(t) {
                                        u.trigger("selection:update", {
                                            data: t
                                        })
                                    }),
                                    t.addClass("select2-hidden-accessible"),
                                    t.attr("aria-hidden", "true"),
                                    this._syncAttributes(),
                                    n.StoreData(t[0], "select2", this),
                                    t.data("select2", this)
                            };
                            return n.Extend(s, n.Observable),
                                s.prototype._generateId = function(t) {
                                    return "select2-" + (null != t.attr("id") ? t.attr("id") : null != t.attr("name") ? t.attr("name") + "-" + n.generateChars(2) : n.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "")
                                },
                                s.prototype._placeContainer = function(t) {
                                    t.insertAfter(this.$element);
                                    var e = this._resolveWidth(this.$element, this.options.get("width"));
                                    null != e && t.css("width", e)
                                },
                                s.prototype._resolveWidth = function(t, e) {
                                    var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                                    if ("resolve" == e) {
                                        var i = this._resolveWidth(t, "style");
                                        return null != i ? i: this._resolveWidth(t, "element")
                                    }
                                    if ("element" == e) {
                                        var s = t.outerWidth(!1);
                                        return s <= 0 ? "auto": s + "px"
                                    }
                                    if ("style" == e) {
                                        var o = t.attr("style");
                                        if ("string" != typeof o) return null;
                                        for (var r = o.split(";"), a = 0, l = r.length; a < l; a += 1) {
                                            var c = r[a].replace(/\s/g, "").match(n);
                                            if (null !== c && c.length >= 1) return c[1]
                                        }
                                        return null
                                    }
                                    return e
                                },
                                s.prototype._bindAdapters = function() {
                                    this.dataAdapter.bind(this, this.$container),
                                        this.selection.bind(this, this.$container),
                                        this.dropdown.bind(this, this.$container),
                                        this.results.bind(this, this.$container)
                                },
                                s.prototype._registerDomEvents = function() {
                                    var e = this;
                                    this.$element.on("change.select2",
                                        function() {
                                            e.dataAdapter.current(function(t) {
                                                e.trigger("selection:update", {
                                                    data: t
                                                })
                                            })
                                        }),
                                        this.$element.on("focus.select2",
                                            function(t) {
                                                e.trigger("focus", t)
                                            }),
                                        this._syncA = n.bind(this._syncAttributes, this),
                                        this._syncS = n.bind(this._syncSubtree, this),
                                    this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                                    var i = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                                    null != i ? (this._observer = new i(function(n) {
                                        t.each(n, e._syncA),
                                            t.each(n, e._syncS)
                                    }), this._observer.observe(this.$element[0], {
                                        attributes: !0,
                                        childList: !0,
                                        subtree: !1
                                    })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", e._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", e._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", e._syncS, !1))
                                },
                                s.prototype._registerDataEvents = function() {
                                    var t = this;
                                    this.dataAdapter.on("*",
                                        function(e, n) {
                                            t.trigger(e, n)
                                        })
                                },
                                s.prototype._registerSelectionEvents = function() {
                                    var e = this,
                                        n = ["toggle", "focus"];
                                    this.selection.on("toggle",
                                        function() {
                                            e.toggleDropdown()
                                        }),
                                        this.selection.on("focus",
                                            function(t) {
                                                e.focus(t)
                                            }),
                                        this.selection.on("*",
                                            function(i, s) { - 1 === t.inArray(i, n) && e.trigger(i, s)
                                            })
                                },
                                s.prototype._registerDropdownEvents = function() {
                                    var t = this;
                                    this.dropdown.on("*",
                                        function(e, n) {
                                            t.trigger(e, n)
                                        })
                                },
                                s.prototype._registerResultsEvents = function() {
                                    var t = this;
                                    this.results.on("*",
                                        function(e, n) {
                                            t.trigger(e, n)
                                        })
                                },
                                s.prototype._registerEvents = function() {
                                    var t = this;
                                    this.on("open",
                                        function() {
                                            t.$container.addClass("select2-container--open")
                                        }),
                                        this.on("close",
                                            function() {
                                                t.$container.removeClass("select2-container--open")
                                            }),
                                        this.on("enable",
                                            function() {
                                                t.$container.removeClass("select2-container--disabled")
                                            }),
                                        this.on("disable",
                                            function() {
                                                t.$container.addClass("select2-container--disabled")
                                            }),
                                        this.on("blur",
                                            function() {
                                                t.$container.removeClass("select2-container--focus")
                                            }),
                                        this.on("query",
                                            function(e) {
                                                t.isOpen() || t.trigger("open", {}),
                                                    this.dataAdapter.query(e,
                                                        function(n) {
                                                            t.trigger("results:all", {
                                                                data: n,
                                                                query: e
                                                            })
                                                        })
                                            }),
                                        this.on("query:append",
                                            function(e) {
                                                this.dataAdapter.query(e,
                                                    function(n) {
                                                        t.trigger("results:append", {
                                                            data: n,
                                                            query: e
                                                        })
                                                    })
                                            }),
                                        this.on("keypress",
                                            function(e) {
                                                var n = e.which;
                                                t.isOpen() ? n === i.ESC || n === i.TAB || n === i.UP && e.altKey ? (t.close(), e.preventDefault()) : n === i.ENTER ? (t.trigger("results:select", {}), e.preventDefault()) : n === i.SPACE && e.ctrlKey ? (t.trigger("results:toggle", {}), e.preventDefault()) : n === i.UP ? (t.trigger("results:previous", {}), e.preventDefault()) : n === i.DOWN && (t.trigger("results:next", {}), e.preventDefault()) : (n === i.ENTER || n === i.SPACE || n === i.DOWN && e.altKey) && (t.open(), e.preventDefault())
                                            })
                                },
                                s.prototype._syncAttributes = function() {
                                    this.options.set("disabled", this.$element.prop("disabled")),
                                        this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
                                },
                                s.prototype._syncSubtree = function(t, e) {
                                    var n = !1,
                                        i = this;
                                    if (!t || !t.target || "OPTION" === t.target.nodeName || "OPTGROUP" === t.target.nodeName) {
                                        if (e) if (e.addedNodes && e.addedNodes.length > 0) for (var s = 0; s < e.addedNodes.length; s++) {
                                            e.addedNodes[s].selected && (n = !0)
                                        } else e.removedNodes && e.removedNodes.length > 0 && (n = !0);
                                        else n = !0;
                                        n && this.dataAdapter.current(function(t) {
                                            i.trigger("selection:update", {
                                                data: t
                                            })
                                        })
                                    }
                                },
                                s.prototype.trigger = function(t, e) {
                                    var n = s.__super__.trigger,
                                        i = {
                                            open: "opening",
                                            close: "closing",
                                            select: "selecting",
                                            unselect: "unselecting",
                                            clear: "clearing"
                                        };
                                    if (void 0 === e && (e = {}), t in i) {
                                        var o = i[t],
                                            r = {
                                                prevented: !1,
                                                name: t,
                                                args: e
                                            };
                                        if (n.call(this, o, r), r.prevented) return void(e.prevented = !0)
                                    }
                                    n.call(this, t, e)
                                },
                                s.prototype.toggleDropdown = function() {
                                    this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
                                },
                                s.prototype.open = function() {
                                    this.isOpen() || this.trigger("query", {})
                                },
                                s.prototype.close = function() {
                                    this.isOpen() && this.trigger("close", {})
                                },
                                s.prototype.isOpen = function() {
                                    return this.$container.hasClass("select2-container--open")
                                },
                                s.prototype.hasFocus = function() {
                                    return this.$container.hasClass("select2-container--focus")
                                },
                                s.prototype.focus = function(t) {
                                    this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
                                },
                                s.prototype.enable = function(t) {
                                    this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),
                                    null != t && 0 !== t.length || (t = [!0]);
                                    var e = !t[0];
                                    this.$element.prop("disabled", e)
                                },
                                s.prototype.data = function() {
                                    this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                                    var t = [];
                                    return this.dataAdapter.current(function(e) {
                                        t = e
                                    }),
                                        t
                                },
                                s.prototype.val = function(e) {
                                    if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == e || 0 === e.length) return this.$element.val();
                                    var n = e[0];
                                    t.isArray(n) && (n = t.map(n,
                                        function(t) {
                                            return t.toString()
                                        })),
                                        this.$element.val(n).trigger("change")
                                },
                                s.prototype.destroy = function() {
                                    this.$container.remove(),
                                    this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA),
                                        null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)),
                                        this._syncA = null,
                                        this._syncS = null,
                                        this.$element.off(".select2"),
                                        this.$element.attr("tabindex", n.GetData(this.$element[0], "old-tabindex")),
                                        this.$element.removeClass("select2-hidden-accessible"),
                                        this.$element.attr("aria-hidden", "false"),
                                        n.RemoveData(this.$element[0]),
                                        this.$element.removeData("select2"),
                                        this.dataAdapter.destroy(),
                                        this.selection.destroy(),
                                        this.dropdown.destroy(),
                                        this.results.destroy(),
                                        this.dataAdapter = null,
                                        this.selection = null,
                                        this.dropdown = null,
                                        this.results = null
                                },
                                s.prototype.render = function() {
                                    var e = t('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                                    return e.attr("dir", this.options.get("dir")),
                                        this.$container = e,
                                        this.$container.addClass("select2-container--" + this.options.get("theme")),
                                        n.StoreData(e[0], "element", this.$element),
                                        e
                                },
                                s
                        }),
                    e.define("jquery-mousewheel", ["jquery"],
                        function(t) {
                            return t
                        }),
                    e.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"],
                        function(t, e, n, i, s) {
                            if (null == t.fn.select2) {
                                var o = ["open", "close", "destroy"];
                                t.fn.select2 = function(e) {
                                    if ("object" == typeof(e = e || {})) return this.each(function() {
                                        var i = t.extend(!0, {},
                                            e);
                                        new n(t(this), i)
                                    }),
                                        this;
                                    if ("string" == typeof e) {
                                        var i, r = Array.prototype.slice.call(arguments, 1);
                                        return this.each(function() {
                                            var t = s.GetData(this, "select2");
                                            null == t && window.console && console.error && console.error("The select2('" + e + "') method was called on an element that is not using Select2."),
                                                i = t[e].apply(t, r)
                                        }),
                                            t.inArray(e, o) > -1 ? this: i
                                    }
                                    throw new Error("Invalid arguments for Select2: " + e)
                                }
                            }
                            return null == t.fn.select2.defaults && (t.fn.select2.defaults = i),
                                n
                        }),
                    {
                        define: e.define,
                        require: e.require
                    }
            } (),
            n = e.require("jquery.select2");
        return t.fn.select2.amd = e,
            n
    });
var $jscomp = {
    scope: {},
    findInternal: function(t, e, n) {
        t instanceof String && (t = String(t));
        for (var i = t.length,
                 s = 0; s < i; s++) {
            var o = t[s];
            if (e.call(n, o, s, t)) return {
                i: s,
                v: o
            }
        }
        return {
            i: -1,
            v: void 0
        }
    }
};
$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty: function(t, e, n) {
    if (n.get || n.set) throw new TypeError("ES3 does not support getters and setters.");
    t != Array.prototype && t != Object.prototype && (t[e] = n.value)
},
    $jscomp.getGlobal = function(t) {
        return "undefined" != typeof window && window === t ? t: "undefined" != typeof global && null != global ? global: t
    },
    $jscomp.global = $jscomp.getGlobal(this),
    $jscomp.polyfill = function(t, e, n, i) {
        if (e) {
            for (n = $jscomp.global, t = t.split("."), i = 0; i < t.length - 1; i++) {
                var s = t[i];
                s in n || (n[s] = {}),
                    n = n[s]
            } (e = e(i = n[t = t[t.length - 1]])) != i && null != e && $jscomp.defineProperty(n, t, {
                configurable: !0,
                writable: !0,
                value: e
            })
        }
    },
    $jscomp.polyfill("Array.prototype.find",
        function(t) {
            return t ||
                function(t, e) {
                    return $jscomp.findInternal(this, t, e).v
                }
        },
        "es6-impl", "es3"),
    function(t, e, n) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(e || n)
    } (function(t) {
            var e = function(e, n, i) {
                var s = {
                    invalid: [],
                    getCaret: function() {
                        try {
                            var t, n = 0,
                                i = e.get(0),
                                o = document.selection,
                                r = i.selectionStart;
                            return o && -1 === navigator.appVersion.indexOf("MSIE 10") ? ((t = o.createRange()).moveStart("character", -s.val().length), n = t.text.length) : (r || "0" === r) && (n = r),
                                n
                        } catch(t) {}
                    },
                    setCaret: function(t) {
                        try {
                            if (e.is(":focus")) {
                                var n, i = e.get(0);
                                i.setSelectionRange ? i.setSelectionRange(t, t) : ((n = i.createTextRange()).collapse(!0), n.moveEnd("character", t), n.moveStart("character", t), n.select())
                            }
                        } catch(t) {}
                    },
                    events: function() {
                        e.on("keydown.mask",
                            function(t) {
                                e.data("mask-keycode", t.keyCode || t.which),
                                    e.data("mask-previus-value", e.val()),
                                    e.data("mask-previus-caret-pos", s.getCaret()),
                                    s.maskDigitPosMapOld = s.maskDigitPosMap
                            }).on(t.jMaskGlobals.useInput ? "input.mask": "keyup.mask", s.behaviour).on("paste.mask drop.mask",
                            function() {
                                setTimeout(function() {
                                        e.keydown().keyup()
                                    },
                                    100)
                            }).on("change.mask",
                            function() {
                                e.data("changed", !0)
                            }).on("blur.mask",
                            function() {
                                a === s.val() || e.data("changed") || e.trigger("change"),
                                    e.data("changed", !1)
                            }).on("blur.mask",
                            function() {
                                a = s.val()
                            }).on("focus.mask",
                            function(e) { ! 0 === i.selectOnFocus && t(e.target).select()
                            }).on("focusout.mask",
                            function() {
                                i.clearIfNotMatch && !o.test(s.val()) && s.val("")
                            })
                    },
                    getRegexMask: function() {
                        for (var t, e, i, s, o = [], a = 0; a < n.length; a++)(t = r.translation[n.charAt(a)]) ? (e = t.pattern.toString().replace(/.{1}$|^.{1}/g, ""), i = t.optional, (t = t.recursive) ? (o.push(n.charAt(a)), s = {
                            digit: n.charAt(a),
                            pattern: e
                        }) : o.push(i || t ? e + "?": e)) : o.push(n.charAt(a).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
                        return o = o.join(""),
                        s && (o = o.replace(new RegExp("(" + s.digit + "(.*" + s.digit + ")?)"), "($1)?").replace(new RegExp(s.digit, "g"), s.pattern)),
                            new RegExp(o)
                    },
                    destroyEvents: function() {
                        e.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))
                    },
                    val: function(t) {
                        var n = e.is("input") ? "val": "text";
                        return 0 < arguments.length ? (e[n]() !== t && e[n](t), n = e) : n = e[n](),
                            n
                    },
                    calculateCaretPosition: function() {
                        var t = e.data("mask-previus-value") || "",
                            n = s.getMasked(),
                            i = s.getCaret();
                        if (t !== n) {
                            var o, r = e.data("mask-previus-caret-pos") || 0,
                                a = (n = n.length, t.length),
                                l = t = 0,
                                c = 0,
                                h = 0;
                            for (o = i; o < n && s.maskDigitPosMap[o]; o++) l++;
                            for (o = i - 1; 0 <= o && s.maskDigitPosMap[o]; o--) t++;
                            for (o = i - 1; 0 <= o; o--) s.maskDigitPosMap[o] && c++;
                            for (o = r - 1; 0 <= o; o--) s.maskDigitPosMapOld[o] && h++;
                            i > a ? i = 10 * n: r >= i && r !== a ? s.maskDigitPosMapOld[i] || (r = i, i = i - (h - c) - t, s.maskDigitPosMap[i] && (i = r)) : i > r && (i = i + (c - h) + l)
                        }
                        return i
                    },
                    behaviour: function(n) {
                        n = n || window.event,
                            s.invalid = [];
                        var i = e.data("mask-keycode");
                        if ( - 1 === t.inArray(i, r.byPassKeys)) {
                            i = s.getMasked();
                            var o = s.getCaret();
                            return setTimeout(function() {
                                    s.setCaret(s.calculateCaretPosition())
                                },
                                t.jMaskGlobals.keyStrokeCompensation),
                                s.val(i),
                                s.setCaret(o),
                                s.callbacks(n)
                        }
                    },
                    getMasked: function(t, e) {
                        var o, a, l, c = [],
                            h = void 0 === e ? s.val() : e + "",
                            u = 0,
                            d = n.length,
                            f = 0,
                            p = h.length,
                            m = 1,
                            g = "push",
                            v = -1,
                            y = 0,
                            b = [];
                        for (i.reverse ? (g = "unshift", m = -1, o = 0, u = d - 1, f = p - 1, a = function() {
                            return - 1 < u && -1 < f
                        }) : (o = d - 1, a = function() {
                            return u < d && f < p
                        }); a();) {
                            var _ = n.charAt(u),
                                w = h.charAt(f),
                                D = r.translation[_];
                            D ? (w.match(D.pattern) ? (c[g](w), D.recursive && ( - 1 === v ? v = u: u === o && u !== v && (u = v - m), o === v && (u -= m)), u += m) : w === l ? (y--, l = void 0) : D.optional ? (u += m, f -= m) : D.fallback ? (c[g](D.fallback), u += m, f -= m) : s.invalid.push({
                                p: f,
                                v: w,
                                e: D.pattern
                            }), f += m) : (t || c[g](_), w === _ ? (b.push(f), f += m) : (l = _, b.push(f + y), y++), u += m)
                        }
                        return h = n.charAt(o),
                        d !== p + 1 || r.translation[h] || c.push(h),
                            c = c.join(""),
                            s.mapMaskdigitPositions(c, b, p),
                            c
                    },
                    mapMaskdigitPositions: function(t, e, n) {
                        for (t = i.reverse ? t.length - n: 0, s.maskDigitPosMap = {},
                                 n = 0; n < e.length; n++) s.maskDigitPosMap[e[n] + t] = 1
                    },
                    callbacks: function(t) {
                        var o = s.val(),
                            r = o !== a,
                            l = [o, t, e, i],
                            c = function(t, e, n) {
                                "function" == typeof i[t] && e && i[t].apply(this, n)
                            };
                        c("onChange", !0 === r, l),
                            c("onKeyPress", !0 === r, l),
                            c("onComplete", o.length === n.length, l),
                            c("onInvalid", 0 < s.invalid.length, [o, t, e, s.invalid, i])
                    }
                };
                e = t(e);
                var o, r = this,
                    a = s.val();
                n = "function" == typeof n ? n(s.val(), void 0, e, i) : n,
                    r.mask = n,
                    r.options = i,
                    r.remove = function() {
                        var t = s.getCaret();
                        return r.options.placeholder && e.removeAttr("placeholder"),
                        e.data("mask-maxlength") && e.removeAttr("maxlength"),
                            s.destroyEvents(),
                            s.val(r.getCleanVal()),
                            s.setCaret(t),
                            e
                    },
                    r.getCleanVal = function() {
                        return s.getMasked(!0)
                    },
                    r.getMaskedVal = function(t) {
                        return s.getMasked(!1, t)
                    },
                    r.init = function(a) {
                        if (a = a || !1, i = i || {},
                            r.clearIfNotMatch = t.jMaskGlobals.clearIfNotMatch, r.byPassKeys = t.jMaskGlobals.byPassKeys, r.translation = t.extend({},
                            t.jMaskGlobals.translation, i.translation), r = t.extend(!0, {},
                            r, i), o = s.getRegexMask(), a) s.events(),
                            s.val(s.getMasked());
                        else {
                            i.placeholder && e.attr("placeholder", i.placeholder),
                            e.data("mask") && e.attr("autocomplete", "off"),
                                a = 0;
                            for (var l = !0; a < n.length; a++) {
                                var c = r.translation[n.charAt(a)];
                                if (c && c.recursive) {
                                    l = !1;
                                    break
                                }
                            }
                            l && e.attr("maxlength", n.length).data("mask-maxlength", !0),
                                s.destroyEvents(),
                                s.events(),
                                a = s.getCaret(),
                                s.val(s.getMasked()),
                                s.setCaret(a)
                        }
                    },
                    r.init(!e.is("input"))
            };
            t.maskWatchers = {};
            var n = function() {
                    var n = t(this),
                        s = {},
                        o = n.attr("data-mask");
                    if (n.attr("data-mask-reverse") && (s.reverse = !0), n.attr("data-mask-clearifnotmatch") && (s.clearIfNotMatch = !0), "true" === n.attr("data-mask-selectonfocus") && (s.selectOnFocus = !0), i(n, o, s)) return n.data("mask", new e(this, o, s))
                },
                i = function(e, n, i) {
                    i = i || {};
                    var s = t(e).data("mask"),
                        o = JSON.stringify;
                    e = t(e).val() || t(e).text();
                    try {
                        return "function" == typeof n && (n = n(e)),
                        "object" != typeof s || o(s.options) !== o(i) || s.mask !== n
                    } catch(t) {}
                },
                s = function(t) {
                    var e, n = document.createElement("div");
                    return (e = (t = "on" + t) in n) || (n.setAttribute(t, "return;"), e = "function" == typeof n[t]),
                        e
                };
            t.fn.mask = function(n, s) {
                s = s || {};
                var o = this.selector,
                    r = (a = t.jMaskGlobals).watchInterval,
                    a = s.watchInputs || a.watchInputs,
                    l = function() {
                        if (i(this, n, s)) return t(this).data("mask", new e(this, n, s))
                    };
                return t(this).each(l),
                o && "" !== o && a && (clearInterval(t.maskWatchers[o]), t.maskWatchers[o] = setInterval(function() {
                        t(document).find(o).each(l)
                    },
                    r)),
                    this
            },
                t.fn.masked = function(t) {
                    return this.data("mask").getMaskedVal(t)
                },
                t.fn.unmask = function() {
                    return clearInterval(t.maskWatchers[this.selector]),
                        delete t.maskWatchers[this.selector],
                        this.each(function() {
                            var e = t(this).data("mask");
                            e && e.remove().removeData("mask")
                        })
                },
                t.fn.cleanVal = function() {
                    return this.data("mask").getCleanVal()
                },
                t.applyDataMask = function(e) { ((e = e || t.jMaskGlobals.maskElements) instanceof t ? e: t(e)).filter(t.jMaskGlobals.dataMaskAttr).each(n)
                },
                s = {
                    maskElements: "input,td,span,div",
                    dataMaskAttr: "*[data-mask]",
                    dataMask: !0,
                    watchInterval: 300,
                    watchInputs: !0,
                    keyStrokeCompensation: 10,
                    useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && s("input"),
                    watchDataMask: !1,
                    byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
                    translation: {
                        0 : {
                            pattern: /\d/
                        },
                        9 : {
                            pattern: /\d/,
                            optional: !0
                        },
                        "#": {
                            pattern: /\d/,
                            recursive: !0
                        },
                        A: {
                            pattern: /[a-zA-Z0-9]/
                        },
                        S: {
                            pattern: /[a-zA-Z]/
                        }
                    }
                },
                t.jMaskGlobals = t.jMaskGlobals || {},
            (s = t.jMaskGlobals = t.extend(!0, {},
                s, t.jMaskGlobals)).dataMask && t.applyDataMask(),
                setInterval(function() {
                        t.jMaskGlobals.watchDataMask && t.applyDataMask()
                    },
                    s.watchInterval)
        },
        window.jQuery, window.Zepto),
    function(t) {
        t.fn.bootstrapWizard = function(e) {
            if ("string" == typeof e) {
                var n = Array.prototype.slice.call(arguments, 1);
                return 1 === n.length && n.toString(),
                    this.data("bootstrapWizard")[e](n)
            }
            return this.each(function(n) {
                if (! (n = t(this)).data("bootstrapWizard")) {
                    var i = new
                    function(e, n) {
                        e = t(e);
                        var i = this,
                            s = [],
                            o = t.extend({},
                                t.fn.bootstrapWizard.defaults, n),
                            r = null,
                            a = null;
                        this.rebindClick = function(t, e) {
                            t.unbind("click", e).bind("click", e)
                        },
                            this.fixNavigationButtons = function() {
                                if (r.length || (a.find("a:first").tab("show"), r = a.find('li:has([data-toggle="tab"]):first')), t(o.previousSelector, e).toggleClass("disabled", i.firstIndex() >= i.currentIndex()), t(o.nextSelector, e).toggleClass("disabled", i.currentIndex() >= i.navigationLength()), t(o.backSelector, e).toggleClass("disabled", 0 == s.length), i.rebindClick(t(o.nextSelector, e), i.next), i.rebindClick(t(o.previousSelector, e), i.previous), i.rebindClick(t(o.lastSelector, e), i.last), i.rebindClick(t(o.firstSelector, e), i.first), i.rebindClick(t(o.backSelector, e), i.back), o.onTabShow && "function" == typeof o.onTabShow && !1 === o.onTabShow(r, a, i.currentIndex())) return ! 1
                            },
                            this.next = function(t) {
                                if (e.hasClass("last") || o.onNext && "function" == typeof o.onNext && !1 === o.onNext(r, a, i.nextIndex())) return ! 1;
                                t = i.currentIndex(),
                                    $index = i.nextIndex(),
                                $index > i.navigationLength() || (s.push(t), a.find('li:has([data-toggle="tab"]):eq(' + $index + ") a").tab("show"))
                            },
                            this.previous = function(t) {
                                if (e.hasClass("first") || o.onPrevious && "function" == typeof o.onPrevious && !1 === o.onPrevious(r, a, i.previousIndex())) return ! 1;
                                t = i.currentIndex(),
                                    $index = i.previousIndex(),
                                0 > $index || (s.push(t), a.find('li:has([data-toggle="tab"]):eq(' + $index + ") a").tab("show"))
                            },
                            this.first = function(t) {
                                if (o.onFirst && "function" == typeof o.onFirst && !1 === o.onFirst(r, a, i.firstIndex()) || e.hasClass("disabled")) return ! 1;
                                s.push(i.currentIndex()),
                                    a.find('li:has([data-toggle="tab"]):eq(0) a').tab("show")
                            },
                            this.last = function(t) {
                                if (o.onLast && "function" == typeof o.onLast && !1 === o.onLast(r, a, i.lastIndex()) || e.hasClass("disabled")) return ! 1;
                                s.push(i.currentIndex()),
                                    a.find('li:has([data-toggle="tab"]):eq(' + i.navigationLength() + ") a").tab("show")
                            },
                            this.back = function() {
                                if (0 == s.length) return null;
                                var t = s.pop();
                                if (o.onBack && "function" == typeof o.onBack && !1 === o.onBack(r, a, t)) return s.push(t),
                                    !1;
                                e.find('li:has([data-toggle="tab"]):eq(' + t + ") a").tab("show")
                            },
                            this.currentIndex = function() {
                                return a.find('li:has([data-toggle="tab"])').index(r)
                            },
                            this.firstIndex = function() {
                                return 0
                            },
                            this.lastIndex = function() {
                                return i.navigationLength()
                            },
                            this.getIndex = function(t) {
                                return a.find('li:has([data-toggle="tab"])').index(t)
                            },
                            this.nextIndex = function() {
                                return a.find('li:has([data-toggle="tab"])').index(r) + 1
                            },
                            this.previousIndex = function() {
                                return a.find('li:has([data-toggle="tab"])').index(r) - 1
                            },
                            this.navigationLength = function() {
                                return a.find('li:has([data-toggle="tab"])').length - 1
                            },
                            this.activeTab = function() {
                                return r
                            },
                            this.nextTab = function() {
                                return a.find('li:has([data-toggle="tab"]):eq(' + (i.currentIndex() + 1) + ")").length ? a.find('li:has([data-toggle="tab"]):eq(' + (i.currentIndex() + 1) + ")") : null
                            },
                            this.previousTab = function() {
                                return 0 >= i.currentIndex() ? null: a.find('li:has([data-toggle="tab"]):eq(' + parseInt(i.currentIndex() - 1) + ")")
                            },
                            this.show = function(t) {
                                0 < (t = isNaN(t) ? e.find('li:has([data-toggle="tab"]) a[href=#' + t + "]") : e.find('li:has([data-toggle="tab"]):eq(' + t + ") a")).length && (s.push(i.currentIndex()), t.tab("show"))
                            },
                            this.disable = function(t) {
                                a.find('li:has([data-toggle="tab"]):eq(' + t + ")").addClass("disabled")
                            },
                            this.enable = function(t) {
                                a.find('li:has([data-toggle="tab"]):eq(' + t + ")").removeClass("disabled")
                            },
                            this.hide = function(t) {
                                a.find('li:has([data-toggle="tab"]):eq(' + t + ")").hide()
                            },
                            this.display = function(t) {
                                a.find('li:has([data-toggle="tab"]):eq(' + t + ")").show()
                            },
                            this.remove = function(e) {
                                var n = void 0 !== e[1] && e[1];
                                e = a.find('li:has([data-toggle="tab"]):eq(' + e[0] + ")"),
                                n && (n = e.find("a").attr("href"), t(n).remove()),
                                    e.remove()
                            };
                        var l = function(e) {
                                var n = a.find('li:has([data-toggle="tab"])');
                                if (e = n.index(t(e.currentTarget).parent('li:has([data-toggle="tab"])')), n = t(n[e]), o.onTabClick && "function" == typeof o.onTabClick && !1 === o.onTabClick(r, a, i.currentIndex(), e, n)) return ! 1
                            },
                            c = function(e) {
                                if ($element = t(e.target).parent(), e = a.find('li:has([data-toggle="tab"])').index($element), $element.hasClass("disabled") || o.onTabChange && "function" == typeof o.onTabChange && !1 === o.onTabChange(r, a, i.currentIndex(), e)) return ! 1;
                                r = $element,
                                    i.fixNavigationButtons()
                            };
                        this.resetWizard = function() {
                            t('a[data-toggle="tab"]', a).off("click", l),
                                t('a[data-toggle="tab"]', a).off("shown shown.bs.tab", c),
                                a = e.find("ul:first", e),
                                r = a.find('li:has([data-toggle="tab"]).active', e),
                                t('a[data-toggle="tab"]', a).on("click", l),
                                t('a[data-toggle="tab"]', a).on("shown shown.bs.tab", c),
                                i.fixNavigationButtons()
                        },
                            a = e.find("ul:first", e),
                            r = a.find('li:has([data-toggle="tab"]).active', e),
                        a.hasClass(o.tabClass) || a.addClass(o.tabClass),
                        o.onInit && "function" == typeof o.onInit && o.onInit(r, a, 0),
                        o.onShow && "function" == typeof o.onShow && o.onShow(r, a, i.nextIndex()),
                            t('a[data-toggle="tab"]', a).on("click", l),
                            t('a[data-toggle="tab"]', a).on("shown shown.bs.tab", c)
                    } (n, e);
                    n.data("bootstrapWizard", i),
                        i.fixNavigationButtons()
                }
            })
        },
            t.fn.bootstrapWizard.defaults = {
                tabClass: "nav nav-pills",
                nextSelector: ".wizard li.next",
                previousSelector: ".wizard li.previous",
                firstSelector: ".wizard li.first",
                lastSelector: ".wizard li.last",
                backSelector: ".wizard li.back",
                onShow: null,
                onInit: null,
                onNext: null,
                onPrevious: null,
                onLast: null,
                onFirst: null,
                onBack: null,
                onTabChange: null,
                onTabClick: null,
                onTabShow: null
            }
    } (jQuery),
    function(t, e, n) {
        "use strict";
        var i = function(e, n) {
            this.widget = "",
                this.$element = t(e),
                this.defaultTime = n.defaultTime,
                this.disableFocus = n.disableFocus,
                this.disableMousewheel = n.disableMousewheel,
                this.isOpen = n.isOpen,
                this.minuteStep = n.minuteStep,
                this.modalBackdrop = n.modalBackdrop,
                this.orientation = n.orientation,
                this.secondStep = n.secondStep,
                this.snapToStep = n.snapToStep,
                this.showInputs = n.showInputs,
                this.showMeridian = n.showMeridian,
                this.showSeconds = n.showSeconds,
                this.template = n.template,
                this.appendWidgetTo = n.appendWidgetTo,
                this.showWidgetOnAddonClick = n.showWidgetOnAddonClick,
                this.icons = n.icons,
                this.maxHours = n.maxHours,
                this.explicitMode = n.explicitMode,
                this.handleDocumentClick = function(t) {
                    var e = t.data.scope;
                    e.$element.parent().find(t.target).length || e.$widget.is(t.target) || e.$widget.find(t.target).length || e.hideWidget()
                },
                this._init()
        };
        i.prototype = {
            constructor: i,
            _init: function() {
                var e = this;
                this.showWidgetOnAddonClick && this.$element.parent().hasClass("input-group") && this.$element.parent().hasClass("bootstrap-timepicker") ? (this.$element.parent(".input-group.bootstrap-timepicker").find(".input-group-addon").on({
                    "click.timepicker": t.proxy(this.showWidget, this)
                }), this.$element.on({
                    "focus.timepicker": t.proxy(this.highlightUnit, this),
                    "click.timepicker": t.proxy(this.highlightUnit, this),
                    "keydown.timepicker": t.proxy(this.elementKeydown, this),
                    "blur.timepicker": t.proxy(this.blurElement, this),
                    "mousewheel.timepicker DOMMouseScroll.timepicker": t.proxy(this.mousewheel, this)
                })) : this.template ? this.$element.on({
                    "focus.timepicker": t.proxy(this.showWidget, this),
                    "click.timepicker": t.proxy(this.showWidget, this),
                    "blur.timepicker": t.proxy(this.blurElement, this),
                    "mousewheel.timepicker DOMMouseScroll.timepicker": t.proxy(this.mousewheel, this)
                }) : this.$element.on({
                    "focus.timepicker": t.proxy(this.highlightUnit, this),
                    "click.timepicker": t.proxy(this.highlightUnit, this),
                    "keydown.timepicker": t.proxy(this.elementKeydown, this),
                    "blur.timepicker": t.proxy(this.blurElement, this),
                    "mousewheel.timepicker DOMMouseScroll.timepicker": t.proxy(this.mousewheel, this)
                }),
                    !1 !== this.template ? this.$widget = t(this.getTemplate()).on("click", t.proxy(this.widgetClick, this)) : this.$widget = !1,
                this.showInputs && !1 !== this.$widget && this.$widget.find("input").each(function() {
                    t(this).on({
                        "click.timepicker": function() {
                            t(this).select()
                        },
                        "keydown.timepicker": t.proxy(e.widgetKeydown, e),
                        "keyup.timepicker": t.proxy(e.widgetKeyup, e)
                    })
                }),
                    this.setDefaultTime(this.defaultTime)
            },
            blurElement: function() {
                this.highlightedUnit = null,
                    this.updateFromElementVal()
            },
            clear: function() {
                this.hour = "",
                    this.minute = "",
                    this.second = "",
                    this.meridian = "",
                    this.$element.val("")
            },
            decrementHour: function() {
                if (this.showMeridian) if (1 === this.hour) this.hour = 12;
                else {
                    if (12 === this.hour) return this.hour--,
                        this.toggleMeridian();
                    if (0 === this.hour) return this.hour = 11,
                        this.toggleMeridian();
                    this.hour--
                } else this.hour <= 0 ? this.hour = this.maxHours - 1 : this.hour--
            },
            decrementMinute: function(t) {
                var e;
                0 > (e = t ? this.minute - t: this.minute - this.minuteStep) ? (this.decrementHour(), this.minute = e + 60) : this.minute = e
            },
            decrementSecond: function() {
                var t = this.second - this.secondStep;
                0 > t ? (this.decrementMinute(!0), this.second = t + 60) : this.second = t
            },
            elementKeydown: function(t) {
                switch (t.which) {
                    case 9:
                        if (t.shiftKey) {
                            if ("hour" === this.highlightedUnit) {
                                this.hideWidget();
                                break
                            }
                            this.highlightPrevUnit()
                        } else {
                            if (this.showMeridian && "meridian" === this.highlightedUnit || this.showSeconds && "second" === this.highlightedUnit || !this.showMeridian && !this.showSeconds && "minute" === this.highlightedUnit) {
                                this.hideWidget();
                                break
                            }
                            this.highlightNextUnit()
                        }
                        t.preventDefault(),
                            this.updateFromElementVal();
                        break;
                    case 27:
                        this.updateFromElementVal();
                        break;
                    case 37:
                        t.preventDefault(),
                            this.highlightPrevUnit(),
                            this.updateFromElementVal();
                        break;
                    case 38:
                        switch (t.preventDefault(), this.highlightedUnit) {
                            case "hour":
                                this.incrementHour(),
                                    this.highlightHour();
                                break;
                            case "minute":
                                this.incrementMinute(),
                                    this.highlightMinute();
                                break;
                            case "second":
                                this.incrementSecond(),
                                    this.highlightSecond();
                                break;
                            case "meridian":
                                this.toggleMeridian(),
                                    this.highlightMeridian()
                        }
                        this.update();
                        break;
                    case 39:
                        t.preventDefault(),
                            this.highlightNextUnit(),
                            this.updateFromElementVal();
                        break;
                    case 40:
                        switch (t.preventDefault(), this.highlightedUnit) {
                            case "hour":
                                this.decrementHour(),
                                    this.highlightHour();
                                break;
                            case "minute":
                                this.decrementMinute(),
                                    this.highlightMinute();
                                break;
                            case "second":
                                this.decrementSecond(),
                                    this.highlightSecond();
                                break;
                            case "meridian":
                                this.toggleMeridian(),
                                    this.highlightMeridian()
                        }
                        this.update()
                }
            },
            getCursorPosition: function() {
                var t = this.$element.get(0);
                if ("selectionStart" in t) return t.selectionStart;
                if (n.selection) {
                    t.focus();
                    var e = n.selection.createRange(),
                        i = n.selection.createRange().text.length;
                    return e.moveStart("character", -t.value.length),
                    e.text.length - i
                }
            },
            getTemplate: function() {
                var t, e, n, i, s, o;
                switch (this.showInputs ? (e = '<input type="text" class="bootstrap-timepicker-hour" maxlength="2"/>', n = '<input type="text" class="bootstrap-timepicker-minute" maxlength="2"/>', i = '<input type="text" class="bootstrap-timepicker-second" maxlength="2"/>', s = '<input type="text" class="bootstrap-timepicker-meridian" maxlength="2"/>') : (e = '<span class="bootstrap-timepicker-hour"></span>', n = '<span class="bootstrap-timepicker-minute"></span>', i = '<span class="bootstrap-timepicker-second"></span>', s = '<span class="bootstrap-timepicker-meridian"></span>'), o = '<table><tr><td><a href="#" data-action="incrementHour"><span class="' + this.icons.up + '"></span></a></td><td class="separator">&nbsp;</td><td><a href="#" data-action="incrementMinute"><span class="' + this.icons.up + '"></span></a></td>' + (this.showSeconds ? '<td class="separator">&nbsp;</td><td><a href="#" data-action="incrementSecond"><span class="' + this.icons.up + '"></span></a></td>': "") + (this.showMeridian ? '<td class="separator">&nbsp;</td><td class="meridian-column"><a href="#" data-action="toggleMeridian"><span class="' + this.icons.up + '"></span></a></td>': "") + "</tr><tr><td>" + e + '</td> <td class="separator">:</td><td>' + n + "</td> " + (this.showSeconds ? '<td class="separator">:</td><td>' + i + "</td>": "") + (this.showMeridian ? '<td class="separator">&nbsp;</td><td>' + s + "</td>": "") + '</tr><tr><td><a href="#" data-action="decrementHour"><span class="' + this.icons.down + '"></span></a></td><td class="separator"></td><td><a href="#" data-action="decrementMinute"><span class="' + this.icons.down + '"></span></a></td>' + (this.showSeconds ? '<td class="separator">&nbsp;</td><td><a href="#" data-action="decrementSecond"><span class="' + this.icons.down + '"></span></a></td>': "") + (this.showMeridian ? '<td class="separator">&nbsp;</td><td><a href="#" data-action="toggleMeridian"><span class="' + this.icons.down + '"></span></a></td>': "") + "</tr></table>", this.template) {
                    case "modal":
                        t = '<div class="bootstrap-timepicker-widget modal hide fade in" data-backdrop="' + (this.modalBackdrop ? "true": "false") + '"><div class="modal-header"><a href="#" class="close" data-dismiss="modal">&times;</a><h3>Pick a Time</h3></div><div class="modal-content">' + o + '</div><div class="modal-footer"><a href="#" class="btn btn-primary" data-dismiss="modal">OK</a></div></div>';
                        break;
                    case "dropdown":
                        t = '<div class="bootstrap-timepicker-widget dropdown-menu">' + o + "</div>"
                }
                return t
            },
            getTime: function() {
                return "" === this.hour ? "": this.hour + ":" + (1 === this.minute.toString().length ? "0" + this.minute: this.minute) + (this.showSeconds ? ":" + (1 === this.second.toString().length ? "0" + this.second: this.second) : "") + (this.showMeridian ? " " + this.meridian: "")
            },
            hideWidget: function() { ! 1 !== this.isOpen && (this.$element.trigger({
                type: "hide.timepicker",
                time: {
                    value: this.getTime(),
                    hours: this.hour,
                    minutes: this.minute,
                    seconds: this.second,
                    meridian: this.meridian
                }
            }), "modal" === this.template && this.$widget.modal ? this.$widget.modal("hide") : this.$widget.removeClass("open"), t(n).off("mousedown.timepicker, touchend.timepicker", this.handleDocumentClick), this.isOpen = !1, this.$widget.detach())
            },
            highlightUnit: function() {
                this.position = this.getCursorPosition(),
                    this.position >= 0 && this.position <= 2 ? this.highlightHour() : this.position >= 3 && this.position <= 5 ? this.highlightMinute() : this.position >= 6 && this.position <= 8 ? this.showSeconds ? this.highlightSecond() : this.highlightMeridian() : this.position >= 9 && this.position <= 11 && this.highlightMeridian()
            },
            highlightNextUnit: function() {
                switch (this.highlightedUnit) {
                    case "hour":
                        this.highlightMinute();
                        break;
                    case "minute":
                        this.showSeconds ? this.highlightSecond() : this.showMeridian ? this.highlightMeridian() : this.highlightHour();
                        break;
                    case "second":
                        this.showMeridian ? this.highlightMeridian() : this.highlightHour();
                        break;
                    case "meridian":
                        this.highlightHour()
                }
            },
            highlightPrevUnit: function() {
                switch (this.highlightedUnit) {
                    case "hour":
                        this.showMeridian ? this.highlightMeridian() : this.showSeconds ? this.highlightSecond() : this.highlightMinute();
                        break;
                    case "minute":
                        this.highlightHour();
                        break;
                    case "second":
                        this.highlightMinute();
                        break;
                    case "meridian":
                        this.showSeconds ? this.highlightSecond() : this.highlightMinute()
                }
            },
            highlightHour: function() {
                var t = this.$element.get(0),
                    e = this;
                this.highlightedUnit = "hour",
                t.setSelectionRange && setTimeout(function() {
                        e.hour < 10 ? t.setSelectionRange(0, 1) : t.setSelectionRange(0, 2)
                    },
                    0)
            },
            highlightMinute: function() {
                var t = this.$element.get(0),
                    e = this;
                this.highlightedUnit = "minute",
                t.setSelectionRange && setTimeout(function() {
                        e.hour < 10 ? t.setSelectionRange(2, 4) : t.setSelectionRange(3, 5)
                    },
                    0)
            },
            highlightSecond: function() {
                var t = this.$element.get(0),
                    e = this;
                this.highlightedUnit = "second",
                t.setSelectionRange && setTimeout(function() {
                        e.hour < 10 ? t.setSelectionRange(5, 7) : t.setSelectionRange(6, 8)
                    },
                    0)
            },
            highlightMeridian: function() {
                var t = this.$element.get(0),
                    e = this;
                this.highlightedUnit = "meridian",
                t.setSelectionRange && (this.showSeconds ? setTimeout(function() {
                        e.hour < 10 ? t.setSelectionRange(8, 10) : t.setSelectionRange(9, 11)
                    },
                    0) : setTimeout(function() {
                        e.hour < 10 ? t.setSelectionRange(5, 7) : t.setSelectionRange(6, 8)
                    },
                    0))
            },
            incrementHour: function() {
                if (this.showMeridian) {
                    if (11 === this.hour) return this.hour++,
                        this.toggleMeridian();
                    12 === this.hour && (this.hour = 0)
                }
                return this.hour === this.maxHours - 1 ? void(this.hour = 0) : void this.hour++
            },
            incrementMinute: function(t) {
                var e; (e = t ? this.minute + t: this.minute + this.minuteStep - this.minute % this.minuteStep) > 59 ? (this.incrementHour(), this.minute = e - 60) : this.minute = e
            },
            incrementSecond: function() {
                var t = this.second + this.secondStep - this.second % this.secondStep;
                t > 59 ? (this.incrementMinute(!0), this.second = t - 60) : this.second = t
            },
            mousewheel: function(e) {
                if (!this.disableMousewheel) {
                    e.preventDefault(),
                        e.stopPropagation();
                    var n = e.originalEvent.wheelDelta || -e.originalEvent.detail,
                        i = null;
                    switch ("mousewheel" === e.type ? i = -1 * e.originalEvent.wheelDelta: "DOMMouseScroll" === e.type && (i = 40 * e.originalEvent.detail), i && (e.preventDefault(), t(this).scrollTop(i + t(this).scrollTop())), this.highlightedUnit) {
                        case "minute":
                            n > 0 ? this.incrementMinute() : this.decrementMinute(),
                                this.highlightMinute();
                            break;
                        case "second":
                            n > 0 ? this.incrementSecond() : this.decrementSecond(),
                                this.highlightSecond();
                            break;
                        case "meridian":
                            this.toggleMeridian(),
                                this.highlightMeridian();
                            break;
                        default:
                            n > 0 ? this.incrementHour() : this.decrementHour(),
                                this.highlightHour()
                    }
                    return ! 1
                }
            },
            changeToNearestStep: function(t, e) {
                return t % e == 0 ? t: Math.round(t % e / e) ? (t + (e - t % e)) % 60 : t - t % e
            },
            place: function() {
                if (!this.isInline) {
                    var n = this.$widget.outerWidth(),
                        i = this.$widget.outerHeight(),
                        s = t(e).width(),
                        o = t(e).height(),
                        r = t(e).scrollTop(),
                        a = parseInt(this.$element.parents().filter(function() {
                            return "auto" !== t(this).css("z-index")
                        }).first().css("z-index"), 10) + 10,
                        l = this.component ? this.component.parent().offset() : this.$element.offset(),
                        c = this.component ? this.component.outerHeight(!0) : this.$element.outerHeight(!1),
                        h = this.component ? this.component.outerWidth(!0) : this.$element.outerWidth(!1),
                        u = l.left,
                        d = l.top;
                    this.$widget.removeClass("timepicker-orient-top timepicker-orient-bottom timepicker-orient-right timepicker-orient-left"),
                        "auto" !== this.orientation.x ? (this.$widget.addClass("timepicker-orient-" + this.orientation.x), "right" === this.orientation.x && (u -= n - h)) : (this.$widget.addClass("timepicker-orient-left"), l.left < 0 ? u -= l.left - 10 : l.left + n > s && (u = s - n - 10));
                    var f, p, m = this.orientation.y;
                    "auto" === m && (f = -r + l.top - i, p = r + o - (l.top + c + i), m = Math.max(f, p) === p ? "top": "bottom"),
                        this.$widget.addClass("timepicker-orient-" + m),
                        "top" === m ? d += c: d -= i + parseInt(this.$widget.css("padding-top"), 10),
                        this.$widget.css({
                            top: d,
                            left: u,
                            zIndex: a
                        })
                }
            },
            remove: function() {
                t("document").off(".timepicker"),
                this.$widget && this.$widget.remove(),
                    delete this.$element.data().timepicker
            },
            setDefaultTime: function(t) {
                if (this.$element.val()) this.updateFromElementVal();
                else if ("current" === t) {
                    var e = new Date,
                        n = e.getHours(),
                        i = e.getMinutes(),
                        s = e.getSeconds(),
                        o = "AM";
                    0 !== s && (60 === (s = Math.ceil(e.getSeconds() / this.secondStep) * this.secondStep) && (i += 1, s = 0)),
                    0 !== i && (60 === (i = Math.ceil(e.getMinutes() / this.minuteStep) * this.minuteStep) && (n += 1, i = 0)),
                    this.showMeridian && (0 === n ? n = 12 : n >= 12 ? (n > 12 && (n -= 12), o = "PM") : o = "AM"),
                        this.hour = n,
                        this.minute = i,
                        this.second = s,
                        this.meridian = o,
                        this.update()
                } else ! 1 === t ? (this.hour = 0, this.minute = 0, this.second = 0, this.meridian = "AM") : this.setTime(t)
            },
            setTime: function(t, e) {
                if (t) {
                    var n, i, s, o, r, a;
                    if ("object" == typeof t && t.getMonth) s = t.getHours(),
                        o = t.getMinutes(),
                        r = t.getSeconds(),
                    this.showMeridian && (a = "AM", s > 12 && (a = "PM", s %= 12), 12 === s && (a = "PM"));
                    else {
                        if ((n = (/a/i.test(t) ? 1 : 0) + (/p/i.test(t) ? 2 : 0)) > 2) return void this.clear();
                        if (s = (i = t.replace(/[^0-9\:]/g, "").split(":"))[0] ? i[0].toString() : i.toString(), this.explicitMode && s.length > 2 && s.length % 2 != 0) return void this.clear();
                        o = i[1] ? i[1].toString() : "",
                            r = i[2] ? i[2].toString() : "",
                        s.length > 4 && (r = s.slice( - 2), s = s.slice(0, -2)),
                        s.length > 2 && (o = s.slice( - 2), s = s.slice(0, -2)),
                        o.length > 2 && (r = o.slice( - 2), o = o.slice(0, -2)),
                            s = parseInt(s, 10),
                            o = parseInt(o, 10),
                            r = parseInt(r, 10),
                        isNaN(s) && (s = 0),
                        isNaN(o) && (o = 0),
                        isNaN(r) && (r = 0),
                        r > 59 && (r = 59),
                        o > 59 && (o = 59),
                        s >= this.maxHours && (s = this.maxHours - 1),
                            this.showMeridian ? (s > 12 && (n = 2, s -= 12), n || (n = 1), 0 === s && (s = 12), a = 1 === n ? "AM": "PM") : 12 > s && 2 === n ? s += 12 : s >= this.maxHours ? s = this.maxHours - 1 : (0 > s || 12 === s && 1 === n) && (s = 0)
                    }
                    this.hour = s,
                        this.snapToStep ? (this.minute = this.changeToNearestStep(o, this.minuteStep), this.second = this.changeToNearestStep(r, this.secondStep)) : (this.minute = o, this.second = r),
                        this.meridian = a,
                        this.update(e)
                } else this.clear()
            },
            showWidget: function() {
                this.isOpen || this.$element.is(":disabled") || (this.$widget.appendTo(this.appendWidgetTo), t(n).on("mousedown.timepicker, touchend.timepicker", {
                        scope: this
                    },
                    this.handleDocumentClick), this.$element.trigger({
                    type: "show.timepicker",
                    time: {
                        value: this.getTime(),
                        hours: this.hour,
                        minutes: this.minute,
                        seconds: this.second,
                        meridian: this.meridian
                    }
                }), this.place(), this.disableFocus && this.$element.blur(), "" === this.hour && (this.defaultTime ? this.setDefaultTime(this.defaultTime) : this.setTime("0:0:0")), "modal" === this.template && this.$widget.modal ? this.$widget.modal("show").on("hidden", t.proxy(this.hideWidget, this)) : !1 === this.isOpen && this.$widget.addClass("open"), this.isOpen = !0)
            },
            toggleMeridian: function() {
                this.meridian = "AM" === this.meridian ? "PM": "AM"
            },
            update: function(t) {
                this.updateElement(),
                t || this.updateWidget(),
                    this.$element.trigger({
                        type: "changeTime.timepicker",
                        time: {
                            value: this.getTime(),
                            hours: this.hour,
                            minutes: this.minute,
                            seconds: this.second,
                            meridian: this.meridian
                        }
                    })
            },
            updateElement: function() {
                this.$element.val(this.getTime()).change()
            },
            updateFromElementVal: function() {
                this.setTime(this.$element.val())
            },
            updateWidget: function() {
                if (!1 !== this.$widget) {
                    var t = this.hour,
                        e = 1 === this.minute.toString().length ? "0" + this.minute: this.minute,
                        n = 1 === this.second.toString().length ? "0" + this.second: this.second;
                    this.showInputs ? (this.$widget.find("input.bootstrap-timepicker-hour").val(t), this.$widget.find("input.bootstrap-timepicker-minute").val(e), this.showSeconds && this.$widget.find("input.bootstrap-timepicker-second").val(n), this.showMeridian && this.$widget.find("input.bootstrap-timepicker-meridian").val(this.meridian)) : (this.$widget.find("span.bootstrap-timepicker-hour").text(t), this.$widget.find("span.bootstrap-timepicker-minute").text(e), this.showSeconds && this.$widget.find("span.bootstrap-timepicker-second").text(n), this.showMeridian && this.$widget.find("span.bootstrap-timepicker-meridian").text(this.meridian))
                }
            },
            updateFromWidgetInputs: function() {
                if (!1 !== this.$widget) {
                    var t = this.$widget.find("input.bootstrap-timepicker-hour").val() + ":" + this.$widget.find("input.bootstrap-timepicker-minute").val() + (this.showSeconds ? ":" + this.$widget.find("input.bootstrap-timepicker-second").val() : "") + (this.showMeridian ? this.$widget.find("input.bootstrap-timepicker-meridian").val() : "");
                    this.setTime(t, !0)
                }
            },
            widgetClick: function(e) {
                e.stopPropagation(),
                    e.preventDefault();
                var n = t(e.target),
                    i = n.closest("a").data("action");
                i && this[i](),
                    this.update(),
                n.is("input") && n.get(0).setSelectionRange(0, 2)
            },
            widgetKeydown: function(e) {
                var n = t(e.target),
                    i = n.attr("class").replace("bootstrap-timepicker-", "");
                switch (e.which) {
                    case 9:
                        if (e.shiftKey) {
                            if ("hour" === i) return this.hideWidget()
                        } else if (this.showMeridian && "meridian" === i || this.showSeconds && "second" === i || !this.showMeridian && !this.showSeconds && "minute" === i) return this.hideWidget();
                        break;
                    case 27:
                        this.hideWidget();
                        break;
                    case 38:
                        switch (e.preventDefault(), i) {
                            case "hour":
                                this.incrementHour();
                                break;
                            case "minute":
                                this.incrementMinute();
                                break;
                            case "second":
                                this.incrementSecond();
                                break;
                            case "meridian":
                                this.toggleMeridian()
                        }
                        this.setTime(this.getTime()),
                            n.get(0).setSelectionRange(0, 2);
                        break;
                    case 40:
                        switch (e.preventDefault(), i) {
                            case "hour":
                                this.decrementHour();
                                break;
                            case "minute":
                                this.decrementMinute();
                                break;
                            case "second":
                                this.decrementSecond();
                                break;
                            case "meridian":
                                this.toggleMeridian()
                        }
                        this.setTime(this.getTime()),
                            n.get(0).setSelectionRange(0, 2)
                }
            },
            widgetKeyup: function(t) { (65 === t.which || 77 === t.which || 80 === t.which || 46 === t.which || 8 === t.which || t.which >= 48 && t.which <= 57 || t.which >= 96 && t.which <= 105) && this.updateFromWidgetInputs()
            }
        },
            t.fn.timepicker = function(e) {
                var n = Array.apply(null, arguments);
                return n.shift(),
                    this.each(function() {
                        var s = t(this),
                            o = s.data("timepicker"),
                            r = "object" == typeof e && e;
                        o || s.data("timepicker", o = new i(this, t.extend({},
                            t.fn.timepicker.defaults, r, t(this).data()))),
                        "string" == typeof e && o[e].apply(o, n)
                    })
            },
            t.fn.timepicker.defaults = {
                defaultTime: "current",
                disableFocus: !1,
                disableMousewheel: !1,
                isOpen: !1,
                minuteStep: 15,
                modalBackdrop: !1,
                orientation: {
                    x: "auto",
                    y: "auto"
                },
                secondStep: 15,
                snapToStep: !1,
                showSeconds: !1,
                showInputs: !0,
                showMeridian: !0,
                template: "dropdown",
                appendWidgetTo: "body",
                showWidgetOnAddonClick: !0,
                icons: {
                    up: "glyphicon glyphicon-chevron-up",
                    down: "glyphicon glyphicon-chevron-down"
                },
                maxHours: 24,
                explicitMode: !1
            },
            t.fn.timepicker.Constructor = i,
            t(n).on("focus.timepicker.data-api click.timepicker.data-api", '[data-provide="timepicker"]',
                function(e) {
                    var n = t(this);
                    n.data("timepicker") || (e.preventDefault(), n.timepicker())
                })
    } (jQuery, window, document),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = function(e, n) {
            return void 0 === n && (n = "undefined" != typeof window ? require("jquery") : require("jquery")(e)),
                t(n),
                n
        }: t(jQuery)
    } (function(t) {
        "use strict";
        var e = 0;
        t.fn.TouchSpin = function(n) {
            var i = {
                    min: 0,
                    max: 100,
                    initval: "",
                    replacementval: "",
                    step: 1,
                    decimals: 0,
                    stepinterval: 100,
                    forcestepdivisibility: "round",
                    stepintervaldelay: 500,
                    verticalbuttons: !1,
                    verticalup: "+",
                    verticaldown: "-",
                    verticalupclass: "",
                    verticaldownclass: "",
                    prefix: "",
                    postfix: "",
                    prefix_extraclass: "",
                    postfix_extraclass: "",
                    booster: !0,
                    boostat: 10,
                    maxboostedstep: !1,
                    mousewheel: !0,
                    buttondown_class: "btn btn-primary",
                    buttonup_class: "btn btn-primary",
                    buttondown_txt: "-",
                    buttonup_txt: "+",
                    callback_before_calculation: function(t) {
                        return t
                    },
                    callback_after_calculation: function(t) {
                        return t
                    }
                },
                s = {
                    min: "min",
                    max: "max",
                    initval: "init-val",
                    replacementval: "replacement-val",
                    step: "step",
                    decimals: "decimals",
                    stepinterval: "step-interval",
                    verticalbuttons: "vertical-buttons",
                    verticalupclass: "vertical-up-class",
                    verticaldownclass: "vertical-down-class",
                    forcestepdivisibility: "force-step-divisibility",
                    stepintervaldelay: "step-interval-delay",
                    prefix: "prefix",
                    postfix: "postfix",
                    prefix_extraclass: "prefix-extra-class",
                    postfix_extraclass: "postfix-extra-class",
                    booster: "booster",
                    boostat: "boostat",
                    maxboostedstep: "max-boosted-step",
                    mousewheel: "mouse-wheel",
                    buttondown_class: "button-down-class",
                    buttonup_class: "button-up-class",
                    buttondown_txt: "button-down-txt",
                    buttonup_txt: "button-up-txt"
                };
            return this.each(function() {
                var o, r, a, l, c, h, u, d, f, p, m = t(this),
                    g = m.data(),
                    v = 0,
                    y = !1;
                function b() {
                    "" === o.prefix && (r = c.prefix.detach()),
                    "" === o.postfix && (a = c.postfix.detach())
                }
                function _() {
                    var t, e, n;
                    "" !== (t = o.callback_before_calculation(m.val())) ? 0 < o.decimals && "." === t || (e = parseFloat(t), isNaN(e) && (e = "" !== o.replacementval ? o.replacementval: 0), (n = e).toString() !== t && (n = e), null !== o.min && e < o.min && (n = o.min), null !== o.max && e > o.max && (n = o.max), n = function(t) {
                        switch (o.forcestepdivisibility) {
                            case "round":
                                return (Math.round(t / o.step) * o.step).toFixed(o.decimals);
                            case "floor":
                                return (Math.floor(t / o.step) * o.step).toFixed(o.decimals);
                            case "ceil":
                                return (Math.ceil(t / o.step) * o.step).toFixed(o.decimals);
                            default:
                                return t
                        }
                    } (n), Number(t).toString() !== n.toString() && (m.val(n), m.trigger("change"))) : "" !== o.replacementval && (m.val(o.replacementval), m.trigger("change"))
                }
                function w() {
                    if (o.booster) {
                        var t = Math.pow(2, Math.floor(v / o.boostat)) * o.step;
                        return o.maxboostedstep && t > o.maxboostedstep && (t = o.maxboostedstep, h = Math.round(h / t) * t),
                            Math.max(o.step, t)
                    }
                    return o.step
                }
                function D() {
                    _(),
                        h = parseFloat(o.callback_before_calculation(c.input.val())),
                    isNaN(h) && (h = 0);
                    var t = h,
                        e = w();
                    h += e,
                    null !== o.max && h > o.max && (h = o.max, m.trigger("touchspin.on.max"), T()),
                        c.input.val(o.callback_after_calculation(Number(h).toFixed(o.decimals))),
                    t !== h && m.trigger("change")
                }
                function k() {
                    _(),
                        h = parseFloat(o.callback_before_calculation(c.input.val())),
                    isNaN(h) && (h = 0);
                    var t = h,
                        e = w();
                    h -= e,
                    null !== o.min && h < o.min && (h = o.min, m.trigger("touchspin.on.min"), T()),
                        c.input.val(o.callback_after_calculation(Number(h).toFixed(o.decimals))),
                    t !== h && m.trigger("change")
                }
                function C() {
                    T(),
                        v = 0,
                        y = "down",
                        m.trigger("touchspin.on.startspin"),
                        m.trigger("touchspin.on.startdownspin"),
                        f = setTimeout(function() {
                                u = setInterval(function() {
                                        v++,
                                            k()
                                    },
                                    o.stepinterval)
                            },
                            o.stepintervaldelay)
                }
                function x() {
                    T(),
                        v = 0,
                        y = "up",
                        m.trigger("touchspin.on.startspin"),
                        m.trigger("touchspin.on.startupspin"),
                        p = setTimeout(function() {
                                d = setInterval(function() {
                                        v++,
                                            D()
                                    },
                                    o.stepinterval)
                            },
                            o.stepintervaldelay)
                }
                function T() {
                    switch (clearTimeout(f), clearTimeout(p), clearInterval(u), clearInterval(d), y) {
                        case "up":
                            m.trigger("touchspin.on.stopupspin"),
                                m.trigger("touchspin.on.stopspin");
                            break;
                        case "down":
                            m.trigger("touchspin.on.stopdownspin"),
                                m.trigger("touchspin.on.stopspin")
                    }
                    v = 0,
                        y = !1
                } !
                    function() {
                        var h, u, d, f, p;
                        if (!m.data("alreadyinitialized")) m.data("alreadyinitialized", !0),
                            e += 1,
                            m.data("spinnerid", e),
                            m.is("input") ? ("" !== (o = t.extend({},
                                i, g, (p = {},
                                    t.each(s,
                                        function(t, e) {
                                            var n = "bts-" + e;
                                            m.is("[data-" + n + "]") && (p[t] = m.data(n))
                                        }), p), n)).initval && "" === m.val() && m.val(o.initval), _(), d = m.val(), f = m.parent(), "" !== d && (d = o.callback_after_calculation(Number(d).toFixed(o.decimals))), m.data("initvalue", d).val(d), m.addClass("form-control"), f.hasClass("input-group") ?
                                function(e) {
                                    e.addClass("bootstrap-touchspin");
                                    var n, i, s = m.prev(),
                                        r = m.next(),
                                        a = '<span class="input-group-addon input-group-prepend bootstrap-touchspin-prefix input-group-prepend bootstrap-touchspin-injected"><span class="input-group-text">' + o.prefix + "</span></span>",
                                        c = '<span class="input-group-addon input-group-append bootstrap-touchspin-postfix input-group-append bootstrap-touchspin-injected"><span class="input-group-text">' + o.postfix + "</span></span>";
                                    s.hasClass("input-group-btn") || s.hasClass("input-group-prepend") ? (n = '<button class="' + o.buttondown_class + ' bootstrap-touchspin-down bootstrap-touchspin-injected" type="button">' + o.buttondown_txt + "</button>", s.append(n)) : (n = '<span class="input-group-btn input-group-prepend bootstrap-touchspin-injected"><button class="' + o.buttondown_class + ' bootstrap-touchspin-down" type="button">' + o.buttondown_txt + "</button></span>", t(n).insertBefore(m)),
                                        r.hasClass("input-group-btn") || r.hasClass("input-group-append") ? (i = '<button class="' + o.buttonup_class + ' bootstrap-touchspin-up bootstrap-touchspin-injected" type="button">' + o.buttonup_txt + "</button>", r.prepend(i)) : (i = '<span class="input-group-btn input-group-append bootstrap-touchspin-injected"><button class="' + o.buttonup_class + ' bootstrap-touchspin-up" type="button">' + o.buttonup_txt + "</button></span>", t(i).insertAfter(m)),
                                        t(a).insertBefore(m),
                                        t(c).insertAfter(m),
                                        l = e
                                } (f) : (u = "", m.hasClass("input-sm") && (u = "input-group-sm"), m.hasClass("input-lg") && (u = "input-group-lg"), h = o.verticalbuttons ? '<div class="input-group ' + u + ' bootstrap-touchspin bootstrap-touchspin-injected"><span class="input-group-addon input-group-prepend bootstrap-touchspin-prefix"><span class="input-group-text">' + o.prefix + '</span></span><span class="input-group-addon bootstrap-touchspin-postfix input-group-append"><span class="input-group-text">' + o.postfix + '</span></span><span class="input-group-btn-vertical"><button class="' + o.buttondown_class + " bootstrap-touchspin-up " + o.verticalupclass + '" type="button">' + o.verticalup + '</button><button class="' + o.buttonup_class + " bootstrap-touchspin-down " + o.verticaldownclass + '" type="button">' + o.verticaldown + "</button></span></div>": '<div class="input-group bootstrap-touchspin bootstrap-touchspin-injected"><span class="input-group-btn input-group-prepend"><button class="' + o.buttondown_class + ' bootstrap-touchspin-down" type="button">' + o.buttondown_txt + '</button></span><span class="input-group-addon bootstrap-touchspin-prefix input-group-prepend"><span class="input-group-text">' + o.prefix + '</span></span><span class="input-group-addon bootstrap-touchspin-postfix input-group-append"><span class="input-group-text">' + o.postfix + '</span></span><span class="input-group-btn input-group-append"><button class="' + o.buttonup_class + ' bootstrap-touchspin-up" type="button">' + o.buttonup_txt + "</button></span></div>", l = t(h).insertBefore(m), t(".bootstrap-touchspin-prefix", l).after(m), m.hasClass("input-sm") ? l.addClass("input-group-sm") : m.hasClass("input-lg") && l.addClass("input-group-lg")), c = {
                                down: t(".bootstrap-touchspin-down", l),
                                up: t(".bootstrap-touchspin-up", l),
                                input: t("input", l),
                                prefix: t(".bootstrap-touchspin-prefix", l).addClass(o.prefix_extraclass),
                                postfix: t(".bootstrap-touchspin-postfix", l).addClass(o.postfix_extraclass)
                            },
                                b(), m.on("keydown.touchspin",
                                function(t) {
                                    var e = t.keyCode || t.which;
                                    38 === e ? ("up" !== y && (D(), x()), t.preventDefault()) : 40 === e && ("down" !== y && (k(), C()), t.preventDefault())
                                }), m.on("keyup.touchspin",
                                function(t) {
                                    var e = t.keyCode || t.which;
                                    38 === e ? T() : 40 === e && T()
                                }), m.on("blur.touchspin",
                                function() {
                                    _(),
                                        m.val(o.callback_after_calculation(m.val()))
                                }), c.down.on("keydown",
                                function(t) {
                                    var e = t.keyCode || t.which;
                                    32 !== e && 13 !== e || ("down" !== y && (k(), C()), t.preventDefault())
                                }), c.down.on("keyup.touchspin",
                                function(t) {
                                    var e = t.keyCode || t.which;
                                    32 !== e && 13 !== e || T()
                                }), c.up.on("keydown.touchspin",
                                function(t) {
                                    var e = t.keyCode || t.which;
                                    32 !== e && 13 !== e || ("up" !== y && (D(), x()), t.preventDefault())
                                }), c.up.on("keyup.touchspin",
                                function(t) {
                                    var e = t.keyCode || t.which;
                                    32 !== e && 13 !== e || T()
                                }), c.down.on("mousedown.touchspin",
                                function(t) {
                                    c.down.off("touchstart.touchspin"),
                                    m.is(":disabled") || (k(), C(), t.preventDefault(), t.stopPropagation())
                                }), c.down.on("touchstart.touchspin",
                                function(t) {
                                    c.down.off("mousedown.touchspin"),
                                    m.is(":disabled") || (k(), C(), t.preventDefault(), t.stopPropagation())
                                }), c.up.on("mousedown.touchspin",
                                function(t) {
                                    c.up.off("touchstart.touchspin"),
                                    m.is(":disabled") || (D(), x(), t.preventDefault(), t.stopPropagation())
                                }), c.up.on("touchstart.touchspin",
                                function(t) {
                                    c.up.off("mousedown.touchspin"),
                                    m.is(":disabled") || (D(), x(), t.preventDefault(), t.stopPropagation())
                                }), c.up.on("mouseup.touchspin mouseout.touchspin touchleave.touchspin touchend.touchspin touchcancel.touchspin",
                                function(t) {
                                    y && (t.stopPropagation(), T())
                                }), c.down.on("mouseup.touchspin mouseout.touchspin touchleave.touchspin touchend.touchspin touchcancel.touchspin",
                                function(t) {
                                    y && (t.stopPropagation(), T())
                                }), c.down.on("mousemove.touchspin touchmove.touchspin",
                                function(t) {
                                    y && (t.stopPropagation(), t.preventDefault())
                                }), c.up.on("mousemove.touchspin touchmove.touchspin",
                                function(t) {
                                    y && (t.stopPropagation(), t.preventDefault())
                                }), m.on("mousewheel.touchspin DOMMouseScroll.touchspin",
                                function(t) {
                                    if (o.mousewheel && m.is(":focus")) {
                                        var e = t.originalEvent.wheelDelta || -t.originalEvent.deltaY || -t.originalEvent.detail;
                                        t.stopPropagation(),
                                            t.preventDefault(),
                                            e < 0 ? k() : D()
                                    }
                                }), m.on("touchspin.destroy",
                                function() {
                                    var e;
                                    e = m.parent(),
                                        T(),
                                        m.off(".touchspin"),
                                        e.hasClass("bootstrap-touchspin-injected") ? (m.siblings().remove(), m.unwrap()) : (t(".bootstrap-touchspin-injected", e).remove(), e.removeClass("bootstrap-touchspin")),
                                        m.data("alreadyinitialized", !1)
                                }), m.on("touchspin.uponce",
                                function() {
                                    T(),
                                        D()
                                }), m.on("touchspin.downonce",
                                function() {
                                    T(),
                                        k()
                                }), m.on("touchspin.startupspin",
                                function() {
                                    x()
                                }), m.on("touchspin.startdownspin",
                                function() {
                                    C()
                                }), m.on("touchspin.stopspin",
                                function() {
                                    T()
                                }), m.on("touchspin.updatesettings",
                                function(e, n) { !
                                    function(e) { (function(e) { (o = t.extend({},
                                        o, e), e.postfix) && (0 === m.parent().find(".bootstrap-touchspin-postfix").length && a.insertAfter(m), m.parent().find(".bootstrap-touchspin-postfix .input-group-text").text(e.postfix));
                                        e.prefix && (0 === m.parent().find(".bootstrap-touchspin-prefix").length && r.insertBefore(m), m.parent().find(".bootstrap-touchspin-prefix .input-group-text").text(e.prefix));
                                        b()
                                    })(n),
                                        _();
                                        var i = c.input.val();
                                        "" !== i && (i = Number(o.callback_before_calculation(c.input.val())), c.input.val(o.callback_after_calculation(Number(i).toFixed(o.decimals))))
                                    } ()
                                })) : console.log("Must be an input.")
                    } ()
            })
        }
    }),
    function(t) {
        "use strict";
        t.event.special.destroyed || (t.event.special.destroyed = {
            remove: function(t) {
                t.handler && t.handler()
            }
        }),
            t.fn.extend({
                maxlength: function(e, n) {
                    function i(t) {
                        var n = t.val();
                        n = e.twoCharLinebreak ? n.replace(/\r(?!\n)|\n(?!\r)/g, "\r\n") : n.replace(new RegExp("\r?\n", "g"), "\n");
                        return e.utf8 ?
                            function(t) {
                                for (var e = 0,
                                         n = 0; n < t.length; n++) {
                                    var i = t.charCodeAt(n);
                                    128 > i ? e++:e += i > 127 && 2048 > i ? 2 : 3
                                }
                                return e
                            } (n) : n.length
                    }
                    function s(t, e) {
                        return e - i(t)
                    }
                    function o(t, e) {
                        e.css({
                            display: "block"
                        }),
                            t.trigger("maxlength.shown")
                    }
                    function r(t, n, i) {
                        var s = "";
                        return e.message ? s = "function" == typeof e.message ? e.message(t, n) : e.message.replace("%charsTyped%", i).replace("%charsRemaining%", n - i).replace("%charsTotal%", n) : (e.preText && (s += e.preText), s += e.showCharsTyped ? i: n - i, e.showMaxLength && (s += e.separator + n), e.postText && (s += e.postText)),
                            s
                    }
                    function a(t, n, s, a) {
                        var l, c, h, u, d;
                        a && (a.html(r(n.val(), s, s - t)), t > 0 ? (c = n, h = e.threshold, u = s, d = !0, !e.alwaysShow && u - i(c) > h && (d = !1), d ? o(n, a.removeClass(e.limitReachedClass).addClass(e.warningClass)) : (l = n, a.css({
                            display: "none"
                        }), l.trigger("maxlength.hidden"))) : o(n, a.removeClass(e.warningClass).addClass(e.limitReachedClass))),
                        e.allowOverMax && (0 > t ? n.addClass("overmax") : n.removeClass("overmax"))
                    }
                    function l(n, i) {
                        var s, o, r = (o = (s = n)[0], t.extend({},
                            "function" == typeof o.getBoundingClientRect ? o.getBoundingClientRect() : {
                                width: o.offsetWidth,
                                height: o.offsetHeight
                            },
                            s.offset()));
                        if ("function" !== t.type(e.placement)) if (t.isPlainObject(e.placement)) !
                            function(n, i) {
                                if (n && i) {
                                    var s = {};
                                    t.each(["top", "bottom", "left", "right", "position"],
                                        function(t, n) {
                                            var i = e.placement[n];
                                            void 0 !== i && (s[n] = i)
                                        }),
                                        i.css(s)
                                }
                            } (e.placement, i);
                        else {
                            var a = n.outerWidth(),
                                l = i.outerWidth(),
                                c = i.width(),
                                h = i.height();
                            switch (e.appendToParent && (r.top -= n.parent().offset().top, r.left -= n.parent().offset().left), e.placement) {
                                case "bottom":
                                    i.css({
                                        top:
                                            r.top + r.height,
                                        left: r.left + r.width / 2 - c / 2
                                    });
                                    break;
                                case "top":
                                    i.css({
                                        top:
                                            r.top - h,
                                        left: r.left + r.width / 2 - c / 2
                                    });
                                    break;
                                case "left":
                                    i.css({
                                        top:
                                            r.top + r.height / 2 - h / 2,
                                        left: r.left - c
                                    });
                                    break;
                                case "right":
                                    i.css({
                                        top:
                                            r.top + r.height / 2 - h / 2,
                                        left: r.left + r.width
                                    });
                                    break;
                                case "bottom-right":
                                    i.css({
                                        top:
                                            r.top + r.height,
                                        left: r.left + r.width
                                    });
                                    break;
                                case "top-right":
                                    i.css({
                                        top:
                                            r.top - h,
                                        left: r.left + a
                                    });
                                    break;
                                case "top-left":
                                    i.css({
                                        top:
                                            r.top - h,
                                        left: r.left - l
                                    });
                                    break;
                                case "bottom-left":
                                    i.css({
                                        top:
                                            r.top + n.outerHeight(),
                                        left: r.left - l
                                    });
                                    break;
                                case "centered-right":
                                    i.css({
                                        top:
                                            r.top + h / 2,
                                        left: r.left + a - l - 3
                                    });
                                    break;
                                case "bottom-right-inside":
                                    i.css({
                                        top:
                                            r.top + r.height,
                                        left: r.left + r.width - l
                                    });
                                    break;
                                case "top-right-inside":
                                    i.css({
                                        top:
                                            r.top - h,
                                        left: r.left + a - l
                                    });
                                    break;
                                case "top-left-inside":
                                    i.css({
                                        top:
                                            r.top - h,
                                        left: r.left
                                    });
                                    break;
                                case "bottom-left-inside":
                                    i.css({
                                        top:
                                            r.top + n.outerHeight(),
                                        left: r.left
                                    })
                            }
                        } else e.placement(n, i, r)
                    }
                    function c(t) {
                        var n = "maxlength";
                        return e.allowOverMax && (n = "data-bs-mxl"),
                        t.attr(n) || t.attr("size")
                    }
                    var h = t("body");
                    return t.isFunction(e) && !n && (n = e, e = {}),
                        e = t.extend({
                                showOnReady: !1,
                                alwaysShow: !1,
                                threshold: 10,
                                warningClass: "label label-success",
                                limitReachedClass: "label label-important label-danger",
                                separator: " / ",
                                preText: "",
                                postText: "",
                                showMaxLength: !0,
                                placement: "bottom",
                                message: null,
                                showCharsTyped: !0,
                                validate: !1,
                                utf8: !1,
                                appendToParent: !1,
                                twoCharLinebreak: !0,
                                allowOverMax: !1
                            },
                            e),
                        this.each(function() {
                            function n() {
                                var n = r(u.val(), i, "0");
                                i = c(u),
                                o || (o = t('<span class="bootstrap-maxlength"></span>').css({
                                    display: "none",
                                    position: "absolute",
                                    whiteSpace: "nowrap",
                                    zIndex: 1099
                                }).html(n)),
                                u.is("textarea") && (u.data("maxlenghtsizex", u.outerWidth()), u.data("maxlenghtsizey", u.outerHeight()), u.mouseup(function() { (u.outerWidth() !== u.data("maxlenghtsizex") || u.outerHeight() !== u.data("maxlenghtsizey")) && l(u, o),
                                    u.data("maxlenghtsizex", u.outerWidth()),
                                    u.data("maxlenghtsizey", u.outerHeight())
                                })),
                                    e.appendToParent ? (u.parent().append(o), u.parent().css("position", "relative")) : h.append(o),
                                    a(s(u, c(u)), u, i, o),
                                    l(u, o)
                            }
                            var i, o, u = t(this);
                            t(window).resize(function() {
                                o && l(u, o)
                            }),
                            e.allowOverMax && (t(this).attr("data-bs-mxl", t(this).attr("maxlength")), t(this).removeAttr("maxlength")),
                                e.showOnReady ? u.ready(function() {
                                    n()
                                }) : u.focus(function() {
                                    n()
                                }),
                                u.on("maxlength.reposition",
                                    function() {
                                        l(u, o)
                                    }),
                                u.on("destroyed",
                                    function() {
                                        o && o.remove()
                                    }),
                                u.on("blur",
                                    function() {
                                        o && !e.showOnReady && o.remove()
                                    }),
                                u.on("input",
                                    function() {
                                        var t, n, r, h, d = c(u),
                                            f = s(u, d),
                                            p = !0;
                                        return e.validate && 0 > f ? (n = d, r = (t = u).val(), h = 0, e.twoCharLinebreak && "\n" === (r = r.replace(/\r(?!\n)|\n(?!\r)/g, "\r\n")).substr(r.length - 1) && r.length % 2 == 1 && (h = 1), t.val(r.substr(0, n - h)), p = !1) : a(f, u, i, o),
                                        ("bottom-right-inside" === e.placement || "top-right-inside" === e.placement) && l(u, o),
                                            p
                                    })
                        })
                }
            })
    } (jQuery),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
    } (function(t, e) {
        function n() {
            return new Date(Date.UTC.apply(Date, arguments))
        }
        function i() {
            var t = new Date;
            return n(t.getFullYear(), t.getMonth(), t.getDate())
        }
        function s(t, e) {
            return t.getUTCFullYear() === e.getUTCFullYear() && t.getUTCMonth() === e.getUTCMonth() && t.getUTCDate() === e.getUTCDate()
        }
        function o(n, i) {
            return function() {
                return i !== e && t.fn.datepicker.deprecated(i),
                    this[n].apply(this, arguments)
            }
        }
        var r, a = (r = {
                get: function(t) {
                    return this.slice(t)[0]
                },
                contains: function(t) {
                    for (var e = t && t.valueOf(), n = 0, i = this.length; n < i; n++) if (0 <= this[n].valueOf() - e && this[n].valueOf() - e < 864e5) return n;
                    return - 1
                },
                remove: function(t) {
                    this.splice(t, 1)
                },
                replace: function(e) {
                    e && (t.isArray(e) || (e = [e]), this.clear(), this.push.apply(this, e))
                },
                clear: function() {
                    this.length = 0
                },
                copy: function() {
                    var t = new a;
                    return t.replace(this),
                        t
                }
            },
                function() {
                    var e = [];
                    return e.push.apply(e, arguments),
                        t.extend(e, r),
                        e
                }),
            l = function(e, n) {
                t.data(e, "datepicker", this),
                    this._process_options(n),
                    this.dates = new a,
                    this.viewDate = this.o.defaultViewDate,
                    this.focusDate = null,
                    this.element = t(e),
                    this.isInput = this.element.is("input"),
                    this.inputField = this.isInput ? this.element: this.element.find("input"),
                    this.component = !!this.element.hasClass("date") && this.element.find(".add-on, .input-group-addon, .btn"),
                this.component && 0 === this.component.length && (this.component = !1),
                    this.isInline = !this.component && this.element.is("div"),
                    this.picker = t(m.template),
                this._check_template(this.o.templates.leftArrow) && this.picker.find(".prev").html(this.o.templates.leftArrow),
                this._check_template(this.o.templates.rightArrow) && this.picker.find(".next").html(this.o.templates.rightArrow),
                    this._buildEvents(),
                    this._attachEvents(),
                    this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"),
                this.o.rtl && this.picker.addClass("datepicker-rtl"),
                this.o.calendarWeeks && this.picker.find(".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan",
                    function(t, e) {
                        return Number(e) + 1
                    }),
                    this._process_options({
                        startDate: this._o.startDate,
                        endDate: this._o.endDate,
                        daysOfWeekDisabled: this.o.daysOfWeekDisabled,
                        daysOfWeekHighlighted: this.o.daysOfWeekHighlighted,
                        datesDisabled: this.o.datesDisabled
                    }),
                    this._allow_update = !1,
                    this.setViewMode(this.o.startView),
                    this._allow_update = !0,
                    this.fillDow(),
                    this.fillMonths(),
                    this.update(),
                this.isInline && this.show()
            };
        l.prototype = {
            constructor: l,
            _resolveViewName: function(e) {
                return t.each(m.viewModes,
                    function(n, i) {
                        if (e === n || -1 !== t.inArray(e, i.names)) return e = n,
                            !1
                    }),
                    e
            },
            _resolveDaysOfWeek: function(e) {
                return t.isArray(e) || (e = e.split(/[,\s]*/)),
                    t.map(e, Number)
            },
            _check_template: function(n) {
                try {
                    return n !== e && "" !== n && ((n.match(/[<>]/g) || []).length <= 0 || t(n).length > 0)
                } catch(t) {
                    return ! 1
                }
            },
            _process_options: function(e) {
                this._o = t.extend({},
                    this._o, e);
                var s = this.o = t.extend({},
                    this._o),
                    o = s.language;
                p[o] || (o = o.split("-")[0], p[o] || (o = d.language)),
                    s.language = o,
                    s.startView = this._resolveViewName(s.startView),
                    s.minViewMode = this._resolveViewName(s.minViewMode),
                    s.maxViewMode = this._resolveViewName(s.maxViewMode),
                    s.startView = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, s.startView)),
                !0 !== s.multidate && (s.multidate = Number(s.multidate) || !1, !1 !== s.multidate && (s.multidate = Math.max(0, s.multidate))),
                    s.multidateSeparator = String(s.multidateSeparator),
                    s.weekStart %= 7,
                    s.weekEnd = (s.weekStart + 6) % 7;
                var r = m.parseFormat(s.format);
                s.startDate !== -1 / 0 && (s.startDate ? s.startDate instanceof Date ? s.startDate = this._local_to_utc(this._zero_time(s.startDate)) : s.startDate = m.parseDate(s.startDate, r, s.language, s.assumeNearbyYear) : s.startDate = -1 / 0),
                s.endDate !== 1 / 0 && (s.endDate ? s.endDate instanceof Date ? s.endDate = this._local_to_utc(this._zero_time(s.endDate)) : s.endDate = m.parseDate(s.endDate, r, s.language, s.assumeNearbyYear) : s.endDate = 1 / 0),
                    s.daysOfWeekDisabled = this._resolveDaysOfWeek(s.daysOfWeekDisabled || []),
                    s.daysOfWeekHighlighted = this._resolveDaysOfWeek(s.daysOfWeekHighlighted || []),
                    s.datesDisabled = s.datesDisabled || [],
                t.isArray(s.datesDisabled) || (s.datesDisabled = s.datesDisabled.split(",")),
                    s.datesDisabled = t.map(s.datesDisabled,
                        function(t) {
                            return m.parseDate(t, r, s.language, s.assumeNearbyYear)
                        });
                var a = String(s.orientation).toLowerCase().split(/\s+/g),
                    l = s.orientation.toLowerCase();
                if (a = t.grep(a,
                    function(t) {
                        return /^auto|left|right|top|bottom$/.test(t)
                    }), s.orientation = {
                    x: "auto",
                    y: "auto"
                },
                l && "auto" !== l) if (1 === a.length) switch (a[0]) {
                    case "top":
                    case "bottom":
                        s.orientation.y = a[0];
                        break;
                    case "left":
                    case "right":
                        s.orientation.x = a[0]
                } else l = t.grep(a,
                    function(t) {
                        return /^left|right$/.test(t)
                    }),
                    s.orientation.x = l[0] || "auto",
                    l = t.grep(a,
                        function(t) {
                            return /^top|bottom$/.test(t)
                        }),
                    s.orientation.y = l[0] || "auto";
                if (s.defaultViewDate instanceof Date || "string" == typeof s.defaultViewDate) s.defaultViewDate = m.parseDate(s.defaultViewDate, r, s.language, s.assumeNearbyYear);
                else if (s.defaultViewDate) {
                    var c = s.defaultViewDate.year || (new Date).getFullYear(),
                        h = s.defaultViewDate.month || 0,
                        u = s.defaultViewDate.day || 1;
                    s.defaultViewDate = n(c, h, u)
                } else s.defaultViewDate = i()
            },
            _events: [],
            _secondaryEvents: [],
            _applyEvents: function(t) {
                for (var n, i, s, o = 0; o < t.length; o++) n = t[o][0],
                    2 === t[o].length ? (i = e, s = t[o][1]) : 3 === t[o].length && (i = t[o][1], s = t[o][2]),
                    n.on(s, i)
            },
            _unapplyEvents: function(t) {
                for (var n, i, s, o = 0; o < t.length; o++) n = t[o][0],
                    2 === t[o].length ? (s = e, i = t[o][1]) : 3 === t[o].length && (s = t[o][1], i = t[o][2]),
                    n.off(i, s)
            },
            _buildEvents: function() {
                var e = {
                    keyup: t.proxy(function(e) { - 1 === t.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update()
                        },
                        this),
                    keydown: t.proxy(this.keydown, this),
                    paste: t.proxy(this.paste, this)
                }; ! 0 === this.o.showOnFocus && (e.focus = t.proxy(this.show, this)),
                    this.isInput ? this._events = [[this.element, e]] : this.component && this.inputField.length ? this._events = [[this.inputField, e], [this.component, {
                        click: t.proxy(this.show, this)
                    }]] : this._events = [[this.element, {
                        click: t.proxy(this.show, this),
                        keydown: t.proxy(this.keydown, this)
                    }]],
                    this._events.push([this.element, "*", {
                        blur: t.proxy(function(t) {
                                this._focused_from = t.target
                            },
                            this)
                    }], [this.element, {
                        blur: t.proxy(function(t) {
                                this._focused_from = t.target
                            },
                            this)
                    }]),
                this.o.immediateUpdates && this._events.push([this.element, {
                    "changeYear changeMonth": t.proxy(function(t) {
                            this.update(t.date)
                        },
                        this)
                }]),
                    this._secondaryEvents = [[this.picker, {
                        click: t.proxy(this.click, this)
                    }], [this.picker, ".prev, .next", {
                        click: t.proxy(this.navArrowsClick, this)
                    }], [this.picker, ".day:not(.disabled)", {
                        click: t.proxy(this.dayCellClick, this)
                    }], [t(window), {
                        resize: t.proxy(this.place, this)
                    }], [t(document), {
                        "mousedown touchstart": t.proxy(function(t) {
                                this.element.is(t.target) || this.element.find(t.target).length || this.picker.is(t.target) || this.picker.find(t.target).length || this.isInline || this.hide()
                            },
                            this)
                    }]]
            },
            _attachEvents: function() {
                this._detachEvents(),
                    this._applyEvents(this._events)
            },
            _detachEvents: function() {
                this._unapplyEvents(this._events)
            },
            _attachSecondaryEvents: function() {
                this._detachSecondaryEvents(),
                    this._applyEvents(this._secondaryEvents)
            },
            _detachSecondaryEvents: function() {
                this._unapplyEvents(this._secondaryEvents)
            },
            _trigger: function(e, n) {
                var i = n || this.dates.get( - 1),
                    s = this._utc_to_local(i);
                this.element.trigger({
                    type: e,
                    date: s,
                    viewMode: this.viewMode,
                    dates: t.map(this.dates, this._utc_to_local),
                    format: t.proxy(function(t, e) {
                            0 === arguments.length ? (t = this.dates.length - 1, e = this.o.format) : "string" == typeof t && (e = t, t = this.dates.length - 1),
                                e = e || this.o.format;
                            var n = this.dates.get(t);
                            return m.formatDate(n, e, this.o.language)
                        },
                        this)
                })
            },
            show: function() {
                if (! (this.inputField.prop("disabled") || this.inputField.prop("readonly") && !1 === this.o.enableOnReadonly)) return this.isInline || this.picker.appendTo(this.o.container),
                    this.place(),
                    this.picker.show(),
                    this._attachSecondaryEvents(),
                    this._trigger("show"),
                (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && this.o.disableTouchKeyboard && t(this.element).blur(),
                    this
            },
            hide: function() {
                return this.isInline || !this.picker.is(":visible") ? this: (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.setViewMode(this.o.startView), this.o.forceParse && this.inputField.val() && this.setValue(), this._trigger("hide"), this)
            },
            destroy: function() {
                return this.hide(),
                    this._detachEvents(),
                    this._detachSecondaryEvents(),
                    this.picker.remove(),
                    delete this.element.data().datepicker,
                this.isInput || delete this.element.data().date,
                    this
            },
            paste: function(e) {
                var n;
                if (e.originalEvent.clipboardData && e.originalEvent.clipboardData.types && -1 !== t.inArray("text/plain", e.originalEvent.clipboardData.types)) n = e.originalEvent.clipboardData.getData("text/plain");
                else {
                    if (!window.clipboardData) return;
                    n = window.clipboardData.getData("Text")
                }
                this.setDate(n),
                    this.update(),
                    e.preventDefault()
            },
            _utc_to_local: function(t) {
                if (!t) return t;
                var e = new Date(t.getTime() + 6e4 * t.getTimezoneOffset());
                return e.getTimezoneOffset() !== t.getTimezoneOffset() && (e = new Date(t.getTime() + 6e4 * e.getTimezoneOffset())),
                    e
            },
            _local_to_utc: function(t) {
                return t && new Date(t.getTime() - 6e4 * t.getTimezoneOffset())
            },
            _zero_time: function(t) {
                return t && new Date(t.getFullYear(), t.getMonth(), t.getDate())
            },
            _zero_utc_time: function(t) {
                return t && n(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate())
            },
            getDates: function() {
                return t.map(this.dates, this._utc_to_local)
            },
            getUTCDates: function() {
                return t.map(this.dates,
                    function(t) {
                        return new Date(t)
                    })
            },
            getDate: function() {
                return this._utc_to_local(this.getUTCDate())
            },
            getUTCDate: function() {
                var t = this.dates.get( - 1);
                return t !== e ? new Date(t) : null
            },
            clearDates: function() {
                this.inputField.val(""),
                    this.update(),
                    this._trigger("changeDate"),
                this.o.autoclose && this.hide()
            },
            setDates: function() {
                var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
                return this.update.apply(this, e),
                    this._trigger("changeDate"),
                    this.setValue(),
                    this
            },
            setUTCDates: function() {
                var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
                return this.setDates.apply(this, t.map(e, this._utc_to_local)),
                    this
            },
            setDate: o("setDates"),
            setUTCDate: o("setUTCDates"),
            remove: o("destroy", "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"),
            setValue: function() {
                var t = this.getFormattedDate();
                return this.inputField.val(t),
                    this
            },
            getFormattedDate: function(n) {
                n === e && (n = this.o.format);
                var i = this.o.language;
                return t.map(this.dates,
                    function(t) {
                        return m.formatDate(t, n, i)
                    }).join(this.o.multidateSeparator)
            },
            getStartDate: function() {
                return this.o.startDate
            },
            setStartDate: function(t) {
                return this._process_options({
                    startDate: t
                }),
                    this.update(),
                    this.updateNavArrows(),
                    this
            },
            getEndDate: function() {
                return this.o.endDate
            },
            setEndDate: function(t) {
                return this._process_options({
                    endDate: t
                }),
                    this.update(),
                    this.updateNavArrows(),
                    this
            },
            setDaysOfWeekDisabled: function(t) {
                return this._process_options({
                    daysOfWeekDisabled: t
                }),
                    this.update(),
                    this
            },
            setDaysOfWeekHighlighted: function(t) {
                return this._process_options({
                    daysOfWeekHighlighted: t
                }),
                    this.update(),
                    this
            },
            setDatesDisabled: function(t) {
                return this._process_options({
                    datesDisabled: t
                }),
                    this.update(),
                    this
            },
            place: function() {
                if (this.isInline) return this;
                var e = this.picker.outerWidth(),
                    n = this.picker.outerHeight(),
                    i = t(this.o.container),
                    s = i.width(),
                    o = "body" === this.o.container ? t(document).scrollTop() : i.scrollTop(),
                    r = i.offset(),
                    a = [0];
                this.element.parents().each(function() {
                    var e = t(this).css("z-index");
                    "auto" !== e && 0 !== Number(e) && a.push(Number(e))
                });
                var l = Math.max.apply(Math, a) + this.o.zIndexOffset,
                    c = this.component ? this.component.parent().offset() : this.element.offset(),
                    h = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
                    u = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
                    d = c.left - r.left,
                    f = c.top - r.top;
                "body" !== this.o.container && (f += o),
                    this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"),
                    "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (d -= e - u)) : c.left < 0 ? (this.picker.addClass("datepicker-orient-left"), d -= c.left - 10) : d + e > s ? (this.picker.addClass("datepicker-orient-right"), d += u - e) : this.o.rtl ? this.picker.addClass("datepicker-orient-right") : this.picker.addClass("datepicker-orient-left");
                var p = this.o.orientation.y;
                if ("auto" === p && (p = -o + f - n < 0 ? "bottom": "top"), this.picker.addClass("datepicker-orient-" + p), "top" === p ? f -= n + parseInt(this.picker.css("padding-top")) : f += h, this.o.rtl) {
                    var m = s - (d + u);
                    this.picker.css({
                        top: f,
                        right: m,
                        zIndex: l
                    })
                } else this.picker.css({
                    top: f,
                    left: d,
                    zIndex: l
                });
                return this
            },
            _allow_update: !0,
            update: function() {
                if (!this._allow_update) return this;
                var e = this.dates.copy(),
                    n = [],
                    i = !1;
                return arguments.length ? (t.each(arguments, t.proxy(function(t, e) {
                        e instanceof Date && (e = this._local_to_utc(e)),
                            n.push(e)
                    },
                    this)), i = !0) : (n = (n = this.isInput ? this.element.val() : this.element.data("date") || this.inputField.val()) && this.o.multidate ? n.split(this.o.multidateSeparator) : [n], delete this.element.data().date),
                    n = t.map(n, t.proxy(function(t) {
                            return m.parseDate(t, this.o.format, this.o.language, this.o.assumeNearbyYear)
                        },
                        this)),
                    n = t.grep(n, t.proxy(function(t) {
                            return ! this.dateWithinRange(t) || !t
                        },
                        this), !0),
                    this.dates.replace(n),
                this.o.updateViewDate && (this.dates.length ? this.viewDate = new Date(this.dates.get( - 1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate ? this.viewDate = new Date(this.o.endDate) : this.viewDate = this.o.defaultViewDate),
                    i ? (this.setValue(), this.element.change()) : this.dates.length && String(e) !== String(this.dates) && i && (this._trigger("changeDate"), this.element.change()),
                !this.dates.length && e.length && (this._trigger("clearDate"), this.element.change()),
                    this.fill(),
                    this
            },
            fillDow: function() {
                if (this.o.showWeekDays) {
                    var e = this.o.weekStart,
                        n = "<tr>";
                    for (this.o.calendarWeeks && (n += '<th class="cw">&#160;</th>'); e < this.o.weekStart + 7;) n += '<th class="dow',
                    -1 !== t.inArray(e, this.o.daysOfWeekDisabled) && (n += " disabled"),
                        n += '">' + p[this.o.language].daysMin[e++%7] + "</th>";
                    n += "</tr>",
                        this.picker.find(".datepicker-days thead").append(n)
                }
            },
            fillMonths: function() {
                for (var t = this._utc_to_local(this.viewDate), e = "", n = 0; n < 12; n++) e += '<span class="month' + (t && t.getMonth() === n ? " focused": "") + '">' + p[this.o.language].monthsShort[n] + "</span>";
                this.picker.find(".datepicker-months td").html(e)
            },
            setRange: function(e) {
                e && e.length ? this.range = t.map(e,
                    function(t) {
                        return t.valueOf()
                    }) : delete this.range,
                    this.fill()
            },
            getClassNames: function(e) {
                var n = [],
                    o = this.viewDate.getUTCFullYear(),
                    r = this.viewDate.getUTCMonth(),
                    a = i();
                return e.getUTCFullYear() < o || e.getUTCFullYear() === o && e.getUTCMonth() < r ? n.push("old") : (e.getUTCFullYear() > o || e.getUTCFullYear() === o && e.getUTCMonth() > r) && n.push("new"),
                this.focusDate && e.valueOf() === this.focusDate.valueOf() && n.push("focused"),
                this.o.todayHighlight && s(e, a) && n.push("today"),
                -1 !== this.dates.contains(e) && n.push("active"),
                this.dateWithinRange(e) || n.push("disabled"),
                this.dateIsDisabled(e) && n.push("disabled", "disabled-date"),
                -1 !== t.inArray(e.getUTCDay(), this.o.daysOfWeekHighlighted) && n.push("highlighted"),
                this.range && (e > this.range[0] && e < this.range[this.range.length - 1] && n.push("range"), -1 !== t.inArray(e.valueOf(), this.range) && n.push("selected"), e.valueOf() === this.range[0] && n.push("range-start"), e.valueOf() === this.range[this.range.length - 1] && n.push("range-end")),
                    n
            },
            _fill_yearsView: function(n, i, s, o, r, a, l) {
                for (var c, h, u, d = "",
                         f = s / 10,
                         p = this.picker.find(n), m = Math.floor(o / s) * s, g = m + 9 * f, v = Math.floor(this.viewDate.getFullYear() / f) * f, y = t.map(this.dates,
                        function(t) {
                            return Math.floor(t.getUTCFullYear() / f) * f
                        }), b = m - f; b <= g + f; b += f) c = [i],
                    h = null,
                    b === m - f ? c.push("old") : b === g + f && c.push("new"),
                -1 !== t.inArray(b, y) && c.push("active"),
                (b < r || b > a) && c.push("disabled"),
                b === v && c.push("focused"),
                l !== t.noop && ((u = l(new Date(b, 0, 1))) === e ? u = {}: "boolean" == typeof u ? u = {
                    enabled: u
                }: "string" == typeof u && (u = {
                    classes: u
                }), !1 === u.enabled && c.push("disabled"), u.classes && (c = c.concat(u.classes.split(/\s+/))), u.tooltip && (h = u.tooltip)),
                    d += '<span class="' + c.join(" ") + '"' + (h ? ' title="' + h + '"': "") + ">" + b + "</span>";
                p.find(".datepicker-switch").text(m + "-" + g),
                    p.find("td").html(d)
            },
            fill: function() {
                var i, s, o = new Date(this.viewDate),
                    r = o.getUTCFullYear(),
                    a = o.getUTCMonth(),
                    l = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0,
                    c = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
                    h = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
                    u = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
                    d = p[this.o.language].today || p.en.today || "",
                    f = p[this.o.language].clear || p.en.clear || "",
                    g = p[this.o.language].titleFormat || p.en.titleFormat;
                if (!isNaN(r) && !isNaN(a)) {
                    this.picker.find(".datepicker-days .datepicker-switch").text(m.formatDate(o, g, this.o.language)),
                        this.picker.find("tfoot .today").text(d).css("display", !0 === this.o.todayBtn || "linked" === this.o.todayBtn ? "table-cell": "none"),
                        this.picker.find("tfoot .clear").text(f).css("display", !0 === this.o.clearBtn ? "table-cell": "none"),
                        this.picker.find("thead .datepicker-title").text(this.o.title).css("display", "string" == typeof this.o.title && "" !== this.o.title ? "table-cell": "none"),
                        this.updateNavArrows(),
                        this.fillMonths();
                    var v = n(r, a, 0),
                        y = v.getUTCDate();
                    v.setUTCDate(y - (v.getUTCDay() - this.o.weekStart + 7) % 7);
                    var b = new Date(v);
                    v.getUTCFullYear() < 100 && b.setUTCFullYear(v.getUTCFullYear()),
                        b.setUTCDate(b.getUTCDate() + 42),
                        b = b.valueOf();
                    for (var _, w, D = []; v.valueOf() < b;) {
                        if ((_ = v.getUTCDay()) === this.o.weekStart && (D.push("<tr>"), this.o.calendarWeeks)) {
                            var k = new Date( + v + (this.o.weekStart - _ - 7) % 7 * 864e5),
                                C = new Date(Number(k) + (11 - k.getUTCDay()) % 7 * 864e5),
                                x = new Date(Number(x = n(C.getUTCFullYear(), 0, 1)) + (11 - x.getUTCDay()) % 7 * 864e5),
                                T = (C - x) / 864e5 / 7 + 1;
                            D.push('<td class="cw">' + T + "</td>")
                        } (w = this.getClassNames(v)).push("day");
                        var S = v.getUTCDate();
                        this.o.beforeShowDay !== t.noop && ((s = this.o.beforeShowDay(this._utc_to_local(v))) === e ? s = {}: "boolean" == typeof s ? s = {
                            enabled: s
                        }: "string" == typeof s && (s = {
                            classes: s
                        }), !1 === s.enabled && w.push("disabled"), s.classes && (w = w.concat(s.classes.split(/\s+/))), s.tooltip && (i = s.tooltip), s.content && (S = s.content)),
                            w = t.isFunction(t.uniqueSort) ? t.uniqueSort(w) : t.unique(w),
                            D.push('<td class="' + w.join(" ") + '"' + (i ? ' title="' + i + '"': "") + ' data-date="' + v.getTime().toString() + '">' + S + "</td>"),
                            i = null,
                        _ === this.o.weekEnd && D.push("</tr>"),
                            v.setUTCDate(v.getUTCDate() + 1)
                    }
                    this.picker.find(".datepicker-days tbody").html(D.join(""));
                    var E = p[this.o.language].monthsTitle || p.en.monthsTitle || "Months",
                        M = this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode < 2 ? E: r).end().find("tbody span").removeClass("active");
                    if (t.each(this.dates,
                        function(t, e) {
                            e.getUTCFullYear() === r && M.eq(e.getUTCMonth()).addClass("active")
                        }), (r < l || r > h) && M.addClass("disabled"), r === l && M.slice(0, c).addClass("disabled"), r === h && M.slice(u + 1).addClass("disabled"), this.o.beforeShowMonth !== t.noop) {
                        var A = this;
                        t.each(M,
                            function(n, i) {
                                var s = new Date(r, n, 1),
                                    o = A.o.beforeShowMonth(s);
                                o === e ? o = {}: "boolean" == typeof o ? o = {
                                    enabled: o
                                }: "string" == typeof o && (o = {
                                    classes: o
                                }),
                                !1 !== o.enabled || t(i).hasClass("disabled") || t(i).addClass("disabled"),
                                o.classes && t(i).addClass(o.classes),
                                o.tooltip && t(i).prop("title", o.tooltip)
                            })
                    }
                    this._fill_yearsView(".datepicker-years", "year", 10, r, l, h, this.o.beforeShowYear),
                        this._fill_yearsView(".datepicker-decades", "decade", 100, r, l, h, this.o.beforeShowDecade),
                        this._fill_yearsView(".datepicker-centuries", "century", 1e3, r, l, h, this.o.beforeShowCentury)
                }
            },
            updateNavArrows: function() {
                if (this._allow_update) {
                    var t, e, n = new Date(this.viewDate),
                        i = n.getUTCFullYear(),
                        s = n.getUTCMonth(),
                        o = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0,
                        r = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
                        a = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
                        l = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
                        c = 1;
                    switch (this.viewMode) {
                        case 4:
                            c *= 10;
                        case 3:
                            c *= 10;
                        case 2:
                            c *= 10;
                        case 1:
                            t = Math.floor(i / c) * c < o,
                                e = Math.floor(i / c) * c + c > a;
                            break;
                        case 0:
                            t = i <= o && s < r,
                                e = i >= a && s > l
                    }
                    this.picker.find(".prev").toggleClass("disabled", t),
                        this.picker.find(".next").toggleClass("disabled", e)
                }
            },
            click: function(e) {
                var s, o, r, a;
                e.preventDefault(),
                    e.stopPropagation(),
                (s = t(e.target)).hasClass("datepicker-switch") && this.viewMode !== this.o.maxViewMode && this.setViewMode(this.viewMode + 1),
                s.hasClass("today") && !s.hasClass("day") && (this.setViewMode(0), this._setDate(i(), "linked" === this.o.todayBtn ? null: "view")),
                s.hasClass("clear") && this.clearDates(),
                s.hasClass("disabled") || (s.hasClass("month") || s.hasClass("year") || s.hasClass("decade") || s.hasClass("century")) && (this.viewDate.setUTCDate(1), o = 1, 1 === this.viewMode ? (a = s.parent().find("span").index(s), r = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(a)) : (a = 0, r = Number(s.text()), this.viewDate.setUTCFullYear(r)), this._trigger(m.viewModes[this.viewMode - 1].e, this.viewDate), this.viewMode === this.o.minViewMode ? this._setDate(n(r, a, o)) : (this.setViewMode(this.viewMode - 1), this.fill())),
                this.picker.is(":visible") && this._focused_from && this._focused_from.focus(),
                    delete this._focused_from
            },
            dayCellClick: function(e) {
                var n = t(e.currentTarget).data("date"),
                    i = new Date(n);
                this.o.updateViewDate && (i.getUTCFullYear() !== this.viewDate.getUTCFullYear() && this._trigger("changeYear", this.viewDate), i.getUTCMonth() !== this.viewDate.getUTCMonth() && this._trigger("changeMonth", this.viewDate)),
                    this._setDate(i)
            },
            navArrowsClick: function(e) {
                var n = t(e.currentTarget).hasClass("prev") ? -1 : 1;
                0 !== this.viewMode && (n *= 12 * m.viewModes[this.viewMode].navStep),
                    this.viewDate = this.moveMonth(this.viewDate, n),
                    this._trigger(m.viewModes[this.viewMode].e, this.viewDate),
                    this.fill()
            },
            _toggle_multidate: function(t) {
                var e = this.dates.contains(t);
                if (t || this.dates.clear(), -1 !== e ? (!0 === this.o.multidate || this.o.multidate > 1 || this.o.toggleActive) && this.dates.remove(e) : !1 === this.o.multidate ? (this.dates.clear(), this.dates.push(t)) : this.dates.push(t), "number" == typeof this.o.multidate) for (; this.dates.length > this.o.multidate;) this.dates.remove(0)
            },
            _setDate: function(t, e) {
                e && "date" !== e || this._toggle_multidate(t && new Date(t)),
                (!e && this.o.updateViewDate || "view" === e) && (this.viewDate = t && new Date(t)),
                    this.fill(),
                    this.setValue(),
                e && "view" === e || this._trigger("changeDate"),
                    this.inputField.trigger("change"),
                !this.o.autoclose || e && "date" !== e || this.hide()
            },
            moveDay: function(t, e) {
                var n = new Date(t);
                return n.setUTCDate(t.getUTCDate() + e),
                    n
            },
            moveWeek: function(t, e) {
                return this.moveDay(t, 7 * e)
            },
            moveMonth: function(t, e) {
                if (! (n = t) || isNaN(n.getTime())) return this.o.defaultViewDate;
                var n;
                if (!e) return t;
                var i, s, o = new Date(t.valueOf()),
                    r = o.getUTCDate(),
                    a = o.getUTCMonth(),
                    l = Math.abs(e);
                if (e = e > 0 ? 1 : -1, 1 === l) s = -1 === e ?
                    function() {
                        return o.getUTCMonth() === a
                    }: function() {
                        return o.getUTCMonth() !== i
                    },
                    i = a + e,
                    o.setUTCMonth(i),
                    i = (i + 12) % 12;
                else {
                    for (var c = 0; c < l; c++) o = this.moveMonth(o, e);
                    i = o.getUTCMonth(),
                        o.setUTCDate(r),
                        s = function() {
                            return i !== o.getUTCMonth()
                        }
                }
                for (; s();) o.setUTCDate(--r),
                    o.setUTCMonth(i);
                return o
            },
            moveYear: function(t, e) {
                return this.moveMonth(t, 12 * e)
            },
            moveAvailableDate: function(t, e, n) {
                do {
                    if (t = this[n](t, e), !this.dateWithinRange(t)) return ! 1;
                    n = "moveDay"
                } while ( this . dateIsDisabled ( t ));
                return t
            },
            weekOfDateIsDisabled: function(e) {
                return - 1 !== t.inArray(e.getUTCDay(), this.o.daysOfWeekDisabled)
            },
            dateIsDisabled: function(e) {
                return this.weekOfDateIsDisabled(e) || t.grep(this.o.datesDisabled,
                    function(t) {
                        return s(e, t)
                    }).length > 0
            },
            dateWithinRange: function(t) {
                return t >= this.o.startDate && t <= this.o.endDate
            },
            keydown: function(t) {
                if (this.picker.is(":visible")) {
                    var e, n, i = !1,
                        s = this.focusDate || this.viewDate;
                    switch (t.keyCode) {
                        case 27:
                            this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get( - 1) || this.viewDate, this.fill()) : this.hide(),
                                t.preventDefault(),
                                t.stopPropagation();
                            break;
                        case 37:
                        case 38:
                        case 39:
                        case 40:
                            if (!this.o.keyboardNavigation || 7 === this.o.daysOfWeekDisabled.length) break;
                            e = 37 === t.keyCode || 38 === t.keyCode ? -1 : 1,
                                0 === this.viewMode ? t.ctrlKey ? (n = this.moveAvailableDate(s, e, "moveYear")) && this._trigger("changeYear", this.viewDate) : t.shiftKey ? (n = this.moveAvailableDate(s, e, "moveMonth")) && this._trigger("changeMonth", this.viewDate) : 37 === t.keyCode || 39 === t.keyCode ? n = this.moveAvailableDate(s, e, "moveDay") : this.weekOfDateIsDisabled(s) || (n = this.moveAvailableDate(s, e, "moveWeek")) : 1 === this.viewMode ? (38 !== t.keyCode && 40 !== t.keyCode || (e *= 4), n = this.moveAvailableDate(s, e, "moveMonth")) : 2 === this.viewMode && (38 !== t.keyCode && 40 !== t.keyCode || (e *= 4), n = this.moveAvailableDate(s, e, "moveYear")),
                            n && (this.focusDate = this.viewDate = n, this.setValue(), this.fill(), t.preventDefault());
                            break;
                        case 13:
                            if (!this.o.forceParse) break;
                            s = this.focusDate || this.dates.get( - 1) || this.viewDate,
                            this.o.keyboardNavigation && (this._toggle_multidate(s), i = !0),
                                this.focusDate = null,
                                this.viewDate = this.dates.get( - 1) || this.viewDate,
                                this.setValue(),
                                this.fill(),
                            this.picker.is(":visible") && (t.preventDefault(), t.stopPropagation(), this.o.autoclose && this.hide());
                            break;
                        case 9:
                            this.focusDate = null,
                                this.viewDate = this.dates.get( - 1) || this.viewDate,
                                this.fill(),
                                this.hide()
                    }
                    i && (this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate"), this.inputField.trigger("change"))
                } else 40 !== t.keyCode && 27 !== t.keyCode || (this.show(), t.stopPropagation())
            },
            setViewMode: function(t) {
                this.viewMode = t,
                    this.picker.children("div").hide().filter(".datepicker-" + m.viewModes[this.viewMode].clsName).show(),
                    this.updateNavArrows(),
                    this._trigger("changeViewMode", new Date(this.viewDate))
            }
        };
        var c = function(e, n) {
            t.data(e, "datepicker", this),
                this.element = t(e),
                this.inputs = t.map(n.inputs,
                    function(t) {
                        return t.jquery ? t[0] : t
                    }),
                delete n.inputs,
                this.keepEmptyValues = n.keepEmptyValues,
                delete n.keepEmptyValues,
                u.call(t(this.inputs), n).on("changeDate", t.proxy(this.dateUpdated, this)),
                this.pickers = t.map(this.inputs,
                    function(e) {
                        return t.data(e, "datepicker")
                    }),
                this.updateDates()
        };
        c.prototype = {
            updateDates: function() {
                this.dates = t.map(this.pickers,
                    function(t) {
                        return t.getUTCDate()
                    }),
                    this.updateRanges()
            },
            updateRanges: function() {
                var e = t.map(this.dates,
                    function(t) {
                        return t.valueOf()
                    });
                t.each(this.pickers,
                    function(t, n) {
                        n.setRange(e)
                    })
            },
            clearDates: function() {
                t.each(this.pickers,
                    function(t, e) {
                        e.clearDates()
                    })
            },
            dateUpdated: function(n) {
                if (!this.updating) {
                    this.updating = !0;
                    var i = t.data(n.target, "datepicker");
                    if (i !== e) {
                        var s = i.getUTCDate(),
                            o = this.keepEmptyValues,
                            r = t.inArray(n.target, this.inputs),
                            a = r - 1,
                            l = r + 1,
                            c = this.inputs.length;
                        if ( - 1 !== r) {
                            if (t.each(this.pickers,
                                function(t, e) {
                                    e.getUTCDate() || e !== i && o || e.setUTCDate(s)
                                }), s < this.dates[a]) for (; a >= 0 && s < this.dates[a];) this.pickers[a--].setUTCDate(s);
                            else if (s > this.dates[l]) for (; l < c && s > this.dates[l];) this.pickers[l++].setUTCDate(s);
                            this.updateDates(),
                                delete this.updating
                        }
                    }
                }
            },
            destroy: function() {
                t.map(this.pickers,
                    function(t) {
                        t.destroy()
                    }),
                    t(this.inputs).off("changeDate", this.dateUpdated),
                    delete this.element.data().datepicker
            },
            remove: o("destroy", "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead")
        };
        var h = t.fn.datepicker,
            u = function(n) {
                var i, s = Array.apply(null, arguments);
                if (s.shift(), this.each(function() {
                    var e = t(this),
                        o = e.data("datepicker"),
                        r = "object" == typeof n && n;
                    if (!o) {
                        var a = function(e, n) {
                                function i(t, e) {
                                    return e.toLowerCase()
                                }
                                var s = t(e).data(),
                                    o = {},
                                    r = new RegExp("^" + n.toLowerCase() + "([A-Z])");
                                for (var a in n = new RegExp("^" + n.toLowerCase()), s) n.test(a) && (o[a.replace(r, i)] = s[a]);
                                return o
                            } (this, "date"),
                            h = function(e) {
                                var n = {};
                                if (p[e] || (e = e.split("-")[0], p[e])) {
                                    var i = p[e];
                                    return t.each(f,
                                        function(t, e) {
                                            e in i && (n[e] = i[e])
                                        }),
                                        n
                                }
                            } (t.extend({},
                                d, a, r).language),
                            u = t.extend({},
                                d, h, a, r);
                        e.hasClass("input-daterange") || u.inputs ? (t.extend(u, {
                            inputs: u.inputs || e.find("input").toArray()
                        }), o = new c(this, u)) : o = new l(this, u),
                            e.data("datepicker", o)
                    }
                    "string" == typeof n && "function" == typeof o[n] && (i = o[n].apply(o, s))
                }), i === e || i instanceof l || i instanceof c) return this;
                if (this.length > 1) throw new Error("Using only allowed for the collection of a single element (" + n + " function)");
                return i
            };
        t.fn.datepicker = u;
        var d = t.fn.datepicker.defaults = {
                assumeNearbyYear: !1,
                autoclose: !1,
                beforeShowDay: t.noop,
                beforeShowMonth: t.noop,
                beforeShowYear: t.noop,
                beforeShowDecade: t.noop,
                beforeShowCentury: t.noop,
                calendarWeeks: !1,
                clearBtn: !1,
                toggleActive: !1,
                daysOfWeekDisabled: [],
                daysOfWeekHighlighted: [],
                datesDisabled: [],
                endDate: 1 / 0,
                forceParse: !0,
                format: "mm/dd/yyyy",
                keepEmptyValues: !1,
                keyboardNavigation: !0,
                language: "en",
                minViewMode: 0,
                maxViewMode: 4,
                multidate: !1,
                multidateSeparator: ",",
                orientation: "auto",
                rtl: !1,
                startDate: -1 / 0,
                startView: 0,
                todayBtn: !1,
                todayHighlight: !1,
                updateViewDate: !0,
                weekStart: 0,
                disableTouchKeyboard: !1,
                enableOnReadonly: !0,
                showOnFocus: !0,
                zIndexOffset: 10,
                container: "body",
                immediateUpdates: !1,
                title: "",
                templates: {
                    leftArrow: "&#x00AB;",
                    rightArrow: "&#x00BB;"
                },
                showWeekDays: !0
            },
            f = t.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
        t.fn.datepicker.Constructor = l;
        var p = t.fn.datepicker.dates = {
                en: {
                    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    today: "Today",
                    clear: "Clear",
                    titleFormat: "MM yyyy"
                }
            },
            m = {
                viewModes: [{
                    names: ["days", "month"],
                    clsName: "days",
                    e: "changeMonth"
                },
                    {
                        names: ["months", "year"],
                        clsName: "months",
                        e: "changeYear",
                        navStep: 1
                    },
                    {
                        names: ["years", "decade"],
                        clsName: "years",
                        e: "changeDecade",
                        navStep: 10
                    },
                    {
                        names: ["decades", "century"],
                        clsName: "decades",
                        e: "changeCentury",
                        navStep: 100
                    },
                    {
                        names: ["centuries", "millennium"],
                        clsName: "centuries",
                        e: "changeMillennium",
                        navStep: 1e3
                    }],
                validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
                nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
                parseFormat: function(t) {
                    if ("function" == typeof t.toValue && "function" == typeof t.toDisplay) return t;
                    var e = t.replace(this.validParts, "\0").split("\0"),
                        n = t.match(this.validParts);
                    if (!e || !e.length || !n || 0 === n.length) throw new Error("Invalid date format.");
                    return {
                        separators: e,
                        parts: n
                    }
                },
                parseDate: function(n, s, o, r) {
                    function a() {
                        var t = this.slice(0, c[d].length),
                            e = c[d].slice(0, t.length);
                        return t.toLowerCase() === e.toLowerCase()
                    }
                    if (!n) return e;
                    if (n instanceof Date) return n;
                    if ("string" == typeof s && (s = m.parseFormat(s)), s.toValue) return s.toValue(n, s, o);
                    var c, h, u, d, f, g = {
                            d: "moveDay",
                            m: "moveMonth",
                            w: "moveWeek",
                            y: "moveYear"
                        },
                        v = {
                            yesterday: "-1d",
                            today: "+0d",
                            tomorrow: "+1d"
                        };
                    if (n in v && (n = v[n]), /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(n)) {
                        for (c = n.match(/([\-+]\d+)([dmwy])/gi), n = new Date, d = 0; d < c.length; d++) h = c[d].match(/([\-+]\d+)([dmwy])/i),
                            u = Number(h[1]),
                            f = g[h[2].toLowerCase()],
                            n = l.prototype[f](n, u);
                        return l.prototype._zero_utc_time(n)
                    }
                    c = n && n.match(this.nonpunctuation) || [];
                    var y, b, _ = {},
                        w = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
                        D = {
                            yyyy: function(t, e) {
                                return t.setUTCFullYear(r ? (n = e, !0 === (i = r) && (i = 10), n < 100 && (n += 2e3) > (new Date).getFullYear() + i && (n -= 100), n) : e);
                                var n, i
                            }, m: function(t, e) {
                                if (isNaN(t)) return t;
                                for (e -= 1; e < 0;) e += 12;
                                for (e %= 12, t.setUTCMonth(e); t.getUTCMonth() !== e;) t.setUTCDate(t.getUTCDate() - 1);
                                return t
                            },
                            d: function(t, e) {
                                return t.setUTCDate(e)
                            }
                        };
                    D.yy = D.yyyy,
                        D.M = D.MM = D.mm = D.m,
                        D.dd = D.d,
                        n = i();
                    var k = s.parts.slice();
                    if (c.length !== k.length && (k = t(k).filter(function(e, n) {
                        return - 1 !== t.inArray(n, w)
                    }).toArray()), c.length === k.length) {
                        var C, x, T;
                        for (d = 0, C = k.length; d < C; d++) {
                            if (y = parseInt(c[d], 10), h = k[d], isNaN(y)) switch (h) {
                                case "MM":
                                    b = t(p[o].months).filter(a),
                                        y = t.inArray(b[0], p[o].months) + 1;
                                    break;
                                case "M":
                                    b = t(p[o].monthsShort).filter(a),
                                        y = t.inArray(b[0], p[o].monthsShort) + 1
                            }
                            _[h] = y
                        }
                        for (d = 0; d < w.length; d++)(T = w[d]) in _ && !isNaN(_[T]) && (x = new Date(n), D[T](x, _[T]), isNaN(x) || (n = x))
                    }
                    return n
                },
                formatDate: function(e, n, i) {
                    if (!e) return "";
                    if ("string" == typeof n && (n = m.parseFormat(n)), n.toDisplay) return n.toDisplay(e, n, i);
                    var s = {
                        d: e.getUTCDate(),
                        D: p[i].daysShort[e.getUTCDay()],
                        DD: p[i].days[e.getUTCDay()],
                        m: e.getUTCMonth() + 1,
                        M: p[i].monthsShort[e.getUTCMonth()],
                        MM: p[i].months[e.getUTCMonth()],
                        yy: e.getUTCFullYear().toString().substring(2),
                        yyyy: e.getUTCFullYear()
                    };
                    s.dd = (s.d < 10 ? "0": "") + s.d,
                        s.mm = (s.m < 10 ? "0": "") + s.m,
                        e = [];
                    for (var o = t.extend([], n.separators), r = 0, a = n.parts.length; r <= a; r++) o.length && e.push(o.shift()),
                        e.push(s[n.parts[r]]);
                    return e.join("")
                },
                headTemplate: '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">' + d.templates.leftArrow + '</th><th colspan="5" class="datepicker-switch"></th><th class="next">' + d.templates.rightArrow + "</th></tr></thead>",
                contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
                footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
            };
        m.template = '<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">' + m.headTemplate + "<tbody></tbody>" + m.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + m.headTemplate + m.contTemplate + m.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + m.headTemplate + m.contTemplate + m.footTemplate + '</table></div><div class="datepicker-decades"><table class="table-condensed">' + m.headTemplate + m.contTemplate + m.footTemplate + '</table></div><div class="datepicker-centuries"><table class="table-condensed">' + m.headTemplate + m.contTemplate + m.footTemplate + "</table></div></div>",
            t.fn.datepicker.DPGlobal = m,
            t.fn.datepicker.noConflict = function() {
                return t.fn.datepicker = h,
                    this
            },
            t.fn.datepicker.version = "1.8.0",
            t.fn.datepicker.deprecated = function(t) {
                var e = window.console;
                e && e.warn && e.warn("DEPRECATED: " + t)
            },
            t(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]',
                function(e) {
                    var n = t(this);
                    n.data("datepicker") || (e.preventDefault(), u.call(n, "show"))
                }),
            t(function() {
                u.call(t('[data-provide="datepicker-inline"]'))
            })
    }),
    function(t) {
        "use strict";
        var e = function() {
            this.$body = t("body"),
                this.$portletIdentifier = ".card",
                this.$portletCloser = '.card a[data-toggle="remove"]',
                this.$portletRefresher = '.card a[data-toggle="reload"]'
        };
        e.prototype.init = function() {
            var e = this;
            t(document).on("click", this.$portletCloser,
                function(n) {
                    n.preventDefault();
                    var i = t(this).closest(e.$portletIdentifier),
                        s = i.parent();
                    i.remove(),
                    0 == s.children().length && s.remove()
                }),
                t(document).on("click", this.$portletRefresher,
                    function(n) {
                        n.preventDefault();
                        var i = t(this).closest(e.$portletIdentifier);
                        i.append('<div class="card-disabled"><div class="card-portlets-loader"></div></div>');
                        var s = i.find(".card-disabled");
                        setTimeout(function() {
                                s.fadeOut("fast",
                                    function() {
                                        s.remove()
                                    })
                            },
                            500 + 5 * Math.random() * 300)
                    })
        },
            t.Portlet = new e,
            t.Portlet.Constructor = e
    } (window.jQuery),
    function(t) {
        "use strict";
        var e = function() {
            this.$body = t("body"),
                this.$window = t(window)
        };
        e.prototype.initSelect2 = function() {
            t('[data-toggle="select2"]').select2()
        },
            e.prototype.initMask = function() {
                t('[data-toggle="input-mask"]').each(function(e, n) {
                    var i = t(n).data("maskFormat"),
                        s = t(n).data("reverse");
                    null != s ? t(n).mask(i, {
                        reverse: s
                    }) : t(n).mask(i)
                })
            },
            e.prototype.initDateRange = function() {
                var e = {
                    cancelClass: "btn-light",
                    applyButtonClasses: "btn-success"
                };
                t('[data-toggle="date-picker"]').each(function(n, i) {
                    var s = t.extend({},
                        e, t(i).data());
                    t(i).daterangepicker(s)
                });
                var n = {
                    startDate: moment().subtract(29, "days"),
                    endDate: moment(),
                    ranges: {
                        Today: [moment(), moment()],
                        Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
                        "Last 7 Days": [moment().subtract(6, "days"), moment()],
                        "Last 30 Days": [moment().subtract(29, "days"), moment()],
                        "This Month": [moment().startOf("month"), moment().endOf("month")],
                        "Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
                    }
                };
                t('[data-toggle="date-picker-range"]').each(function(e, i) {
                    var s = t.extend({},
                        n, t(i).data()),
                        o = s.targetDisplay;
                    t(i).daterangepicker(s,
                        function(e, n) {
                            o && t(o).html(e.format("MMMM D, YYYY") + " - " + n.format("MMMM D, YYYY"))
                        })
                })
            },
            e.prototype.initTimePicker = function() {
                var e = {
                    showSeconds: !0,
                    icons: {
                        up: "mdi mdi-chevron-up",
                        down: "mdi mdi-chevron-down"
                    }
                };
                t('[data-toggle="timepicker"]').each(function(n, i) {
                    var s = t.extend({},
                        e, t(i).data());
                    t(i).timepicker(s)
                })
            },
            e.prototype.initTouchspin = function() {
                var e = {};
                t('[data-toggle="touchspin"]').each(function(n, i) {
                    var s = t.extend({},
                        e, t(i).data());
                    t(i).TouchSpin(s)
                })
            },
            e.prototype.initMaxlength = function() {
                var e = {
                    warningClass: "badge badge-success",
                    limitReachedClass: "badge badge-danger",
                    separator: " out of ",
                    preText: "You typed ",
                    postText: " chars available.",
                    placement: "bottom"
                };
                t('[data-toggle="maxlength"]').each(function(n, i) {
                    var s = t.extend({},
                        e, t(i).data());
                    t(i).maxlength(s)
                })
            },
            e.prototype.init = function() {
                this.initSelect2(),
                    this.initMask(),
                    this.initDateRange(),
                    this.initTimePicker(),
                    this.initTouchspin(),
                    this.initMaxlength()
            },
            t.AdvanceFormApp = new e,
            t.AdvanceFormApp.Constructor = e
    } (window.jQuery),
    function(t) {
        "use strict";
        var e = function() {};
        e.prototype.send = function(e, n, i, s, o, r, a, l) {
            r || (r = 3e3),
            a || (a = 1);
            var c = {
                heading: e,
                text: n,
                position: i,
                loaderBg: s,
                icon: o,
                hideAfter: r,
                stack: a
            };
            c.showHideTransition = l || "fade",
                t.toast().reset("all"),
                t.toast(c)
        },
            t.NotificationApp = new e,
            t.NotificationApp.Constructor = e
    } (window.jQuery),
    function(t) {
        "use strict";
        var e = function() {};
        e.prototype.initTooltipPlugin = function() {
            t.fn.tooltip && t('[data-toggle="tooltip"]').tooltip()
        },
            e.prototype.initPopoverPlugin = function() {
                t.fn.popover && t('[data-toggle="popover"]').popover()
            },
            e.prototype.initToastPlugin = function() {
                t.fn.toast && t('[data-toggle="toast"]').toast()
            },
            e.prototype.initSlimScrollPlugin = function() {
                t.fn.slimScroll && t(".slimscroll").slimScroll({
                    height: "auto",
                    position: "right",
                    size: "8px",
                    touchScrollStep: 20,
                    color: "#9ea5ab"
                })
            },
            e.prototype.initFormValidation = function() {
                t(".needs-validation").on("submit",
                    function(e) {
                        return t(this).addClass("was-validated"),
                        !1 !== t(this)[0].checkValidity() || (e.preventDefault(), e.stopPropagation(), !1)
                    })
            },
            e.prototype.init = function() {
                this.initTooltipPlugin(),
                    this.initPopoverPlugin(),
                    this.initToastPlugin(),
                    this.initSlimScrollPlugin(),
                    this.initFormValidation()
            },
            t.Components = new e,
            t.Components.Constructor = e
    } (window.jQuery),
    function(t) {
        "use strict";
        var e = function() {
            this.$body = t("body"),
                this.$window = t(window)
        };
        e.prototype._resetSidebarScroll = function() {
            t(".slimscroll-menu").slimscroll({
                height: "auto",
                position: "right",
                size: "8px",
                color: "#9ea5ab",
                wheelStep: 5,
                touchScrollStep: 20
            })
        },
            e.prototype.initMenu = function() {
                var e = this;
                t(".button-menu-mobile").on("click",
                    function(t) {
                        t.preventDefault(),
                            e.$body.toggleClass("sidebar-enable"),
                            e.$window.width() >= 768 ? e.$body.toggleClass("enlarged") : e.$body.removeClass("enlarged"),
                            e._resetSidebarScroll()
                    }),
                    t(".side-nav").metisMenu(),
                    e._resetSidebarScroll(),
                    t(".right-bar-toggle").on("click",
                        function(e) {
                            t("body").toggleClass("right-bar-enabled")
                        }),
                    t(document).on("click", "body",
                        function(e) {
                            t(e.target).closest(".right-bar-toggle, .right-bar").length > 0 || t(e.target).closest(".left-side-menu, .side-nav").length > 0 || t(e.target).hasClass("button-menu-mobile") || t(e.target).closest(".button-menu-mobile").length > 0 || (t("body").removeClass("right-bar-enabled"), t("body").removeClass("sidebar-enable"))
                        }),
                    t(".side-nav a").each(function() {
                        var e = window.location.href.split(/[?#]/)[0];
                        this.href == e && (t(this).addClass("active"), t(this).parent().addClass("active"), t(this).parent().parent().addClass("in"), t(this).parent().parent().prev().addClass("active"), t(this).parent().parent().parent().addClass("active"), t(this).parent().parent().parent().parent().addClass("in"), t(this).parent().parent().parent().parent().parent().addClass("active"))
                    }),
                    t(".topnav-menu li a").each(function() {
                        var e = window.location.href.split(/[?#]/)[0];
                        this.href == e && (t(this).addClass("active"), t(this).parent().parent().addClass("active"), t(this).parent().parent().parent().parent().addClass("active"))
                    }),
                    t(".navbar-toggle").on("click",
                        function(e) {
                            t(this).toggleClass("open"),
                                t("#navigation").slideToggle(400)
                        }),
                    t(".dropdown-menu a.dropdown-toggle").on("click",
                        function(e) {
                            return t(this).next().hasClass("show") || t(this).parents(".dropdown-menu").first().find(".show").removeClass("show"),
                                t(this).next(".dropdown-menu").toggleClass("show"),
                                !1
                        })
            },
            e.prototype.initLayout = function() {
                this.$window.width() >= 768 && this.$window.width() <= 1028 ? this.$body.addClass("enlarged") : 1 != this.$body.data("keep-enlarged") && this.$body.removeClass("enlarged")
            },
            e.prototype.init = function() {
                var e = this;
                this.initLayout(),
                    this.initMenu(),
                    t.Portlet.init(),
                    t.AdvanceFormApp.init(),
                    t.Components.init(),
                    e.$window.on("resize",
                        function(t) {
                            t.preventDefault(),
                                e.initLayout(),
                                e._resetSidebarScroll()
                        })
            },
            t.App = new e,
            t.App.Constructor = e
    } (window.jQuery),
    function(t) {
        "use strict";
        t.App.init()
    } (window.jQuery);
//# sourceMappingURL=app.min.js.map
