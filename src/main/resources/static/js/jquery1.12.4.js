/*
 * jQuery JavaScript Library v1.12.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:17Z
 */
(function (b, a) {
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = b.document ? a(b, true) : function (c) {
            if (!c.document) {
                throw new Error("jQuery requires a window with a document")
            }
            return a(c)
        }
    } else {
        a(b)
    }
}(typeof window !== "undefined" ? window : this, function (b7, aE) {
    var O = [];
    var S = b7.document;
    var bY = O.slice;
    var z = O.concat;
    var aL = O.push;
    var aq = O.indexOf;
    var w = {};
    var b2 = w.toString;
    var an = w.hasOwnProperty;
    var bZ = {};
    var b6 = "1.12.4", az = function (cd, i) {
        return new az.fn.init(cd, i)
    }, bJ = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, bj = /^-ms-/, aX = /-([\da-z])/gi, X = function (i, cd) {
        return cd.toUpperCase()
    };
    az.fn = az.prototype = {
        jquery: b6, constructor: az, selector: "", length: 0, toArray: function () {
            return bY.call(this)
        }, get: function (i) {
            return i != null ? (i < 0 ? this[i + this.length] : this[i]) : bY.call(this)
        }, pushStack: function (i) {
            var cd = az.merge(this.constructor(), i);
            cd.prevObject = this;
            cd.context = this.context;
            return cd
        }, each: function (i) {
            return az.each(this, i)
        }, map: function (i) {
            return this.pushStack(az.map(this, function (cd, ce) {
                return i.call(cd, ce, cd)
            }))
        }, slice: function () {
            return this.pushStack(bY.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (cd) {
            var cf = this.length, ce = +cd + (cd < 0 ? cf : 0);
            return this.pushStack(ce >= 0 && ce < cf ? [this[ce]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: aL, sort: O.sort, splice: O.splice
    };
    az.extend = az.fn.extend = function () {
        var cl, cf, ce, cj, ck, cd, cm = arguments[0] || {}, ch = 1, ci = arguments.length, cg = false;
        if (typeof cm === "boolean") {
            cg = cm;
            cm = arguments[ch] || {};
            ch++
        }
        if (typeof cm !== "object" && !az.isFunction(cm)) {
            cm = {}
        }
        if (ch === ci) {
            cm = this;
            ch--
        }
        for (; ch < ci; ch++) {
            if ((ck = arguments[ch]) != null) {
                for (cj in ck) {
                    cl = cm[cj];
                    ce = ck[cj];
                    if (cm === ce) {
                        continue
                    }
                    if (cg && ce && (az.isPlainObject(ce) || (cf = az.isArray(ce)))) {
                        if (cf) {
                            cf = false;
                            cd = cl && az.isArray(cl) ? cl : []
                        } else {
                            cd = cl && az.isPlainObject(cl) ? cl : {}
                        }
                        cm[cj] = az.extend(cg, cd, ce)
                    } else {
                        if (ce !== undefined) {
                            cm[cj] = ce
                        }
                    }
                }
            }
        }
        return cm
    };
    az.extend({
        expando: "jQuery" + (b6 + Math.random()).replace(/\D/g, ""), isReady: true, error: function (i) {
            throw new Error(i)
        }, noop: function () {
        }, isFunction: function (i) {
            return az.type(i) === "function"
        }, isArray: Array.isArray || function (i) {
            return az.type(i) === "array"
        }, isWindow: function (i) {
            return i != null && i == i.window
        }, isNumeric: function (i) {
            var cd = i && i.toString();
            return !az.isArray(i) && (cd - parseFloat(cd) + 1) >= 0
        }, isEmptyObject: function (cd) {
            var i;
            for (i in cd) {
                return false
            }
            return true
        }, isPlainObject: function (ce) {
            var cd;
            if (!ce || az.type(ce) !== "object" || ce.nodeType || az.isWindow(ce)) {
                return false
            }
            try {
                if (ce.constructor && !an.call(ce, "constructor") && !an.call(ce.constructor.prototype, "isPrototypeOf")) {
                    return false
                }
            } catch (i) {
                return false
            }
            if (!bZ.ownFirst) {
                for (cd in ce) {
                    return an.call(ce, cd)
                }
            }
            for (cd in ce) {
            }
            return cd === undefined || an.call(ce, cd)
        }, type: function (i) {
            if (i == null) {
                return i + ""
            }
            return typeof i === "object" || typeof i === "function" ? w[b2.call(i)] || "object" : typeof i
        }, globalEval: function (i) {
            if (i && az.trim(i)) {
                (b7.execScript || function (cd) {
                    b7["eval"].call(b7, cd)
                })(i)
            }
        }, camelCase: function (i) {
            return i.replace(bj, "ms-").replace(aX, X)
        }, nodeName: function (i, cd) {
            return i.nodeName && i.nodeName.toLowerCase() === cd.toLowerCase()
        }, each: function (cg, cd) {
            var cf, ce = 0;
            if (aw(cg)) {
                cf = cg.length;
                for (; ce < cf; ce++) {
                    if (cd.call(cg[ce], ce, cg[ce]) === false) {
                        break
                    }
                }
            } else {
                for (ce in cg) {
                    if (cd.call(cg[ce], ce, cg[ce]) === false) {
                        break
                    }
                }
            }
            return cg
        }, trim: function (i) {
            return i == null ? "" : (i + "").replace(bJ, "")
        }, makeArray: function (i, cd) {
            var ce = cd || [];
            if (i != null) {
                if (aw(Object(i))) {
                    az.merge(ce, typeof i === "string" ? [i] : i)
                } else {
                    aL.call(ce, i)
                }
            }
            return ce
        }, inArray: function (ce, cd, cf) {
            var cg;
            if (cd) {
                if (aq) {
                    return aq.call(cd, ce, cf)
                }
                cg = cd.length;
                cf = cf ? cf < 0 ? Math.max(0, cg + cf) : cf : 0;
                for (; cf < cg; cf++) {
                    if (cf in cd && cd[cf] === ce) {
                        return cf
                    }
                }
            }
            return -1
        }, merge: function (cd, ch) {
            var cg = +ch.length, cf = 0, ce = cd.length;
            while (cf < cg) {
                cd[ce++] = ch[cf++]
            }
            if (cg !== cg) {
                while (ch[cf] !== undefined) {
                    cd[ce++] = ch[cf++]
                }
            }
            cd.length = ce;
            return cd
        }, grep: function (cg, cd, ci) {
            var cf, ck = [], ch = 0, cj = cg.length, ce = !ci;
            for (; ch < cj; ch++) {
                cf = !cd(cg[ch], ch);
                if (cf !== ce) {
                    ck.push(cg[ch])
                }
            }
            return ck
        }, map: function (cf, ce, cd) {
            var ch, cj, cg = 0, ci = [];
            if (aw(cf)) {
                ch = cf.length;
                for (; cg < ch; cg++) {
                    cj = ce(cf[cg], cg, cd);
                    if (cj != null) {
                        ci.push(cj)
                    }
                }
            } else {
                for (cg in cf) {
                    cj = ce(cf[cg], cg, cd);
                    if (cj != null) {
                        ci.push(cj)
                    }
                }
            }
            return z.apply([], ci)
        }, guid: 1, proxy: function (ce, cd) {
            var i, cf, cg;
            if (typeof cd === "string") {
                cg = ce[cd];
                cd = ce;
                ce = cg
            }
            if (!az.isFunction(ce)) {
                return undefined
            }
            i = bY.call(arguments, 2);
            cf = function () {
                return ce.apply(cd || this, i.concat(bY.call(arguments)))
            };
            cf.guid = ce.guid = ce.guid || az.guid++;
            return cf
        }, now: function () {
            return +(new Date())
        }, support: bZ
    });
    if (typeof Symbol === "function") {
        az.fn[Symbol.iterator] = O[Symbol.iterator]
    }
    az.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (cd, ce) {
        w["[object " + ce + "]"] = ce.toLowerCase()
    });

    function aw(cd) {
        var i = !!cd && "length" in cd && cd.length, ce = az.type(cd);
        if (ce === "function" || az.isWindow(cd)) {
            return false
        }
        return ce === "array" || i === 0 || typeof i === "number" && i > 0 && (i - 1) in cd
    }

    var bX =
        /*
 * Sizzle CSS Selector Engine v2.2.1
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-10-17
 */
        (function (dt) {
            var cF, dl, cA, cC, cI, dp, ck, dc, cQ, dj, cD, dd, cu, ct, cv, cY, cX, cM, cn,
                cz = "sizzle" + 1 * new Date(), cS = dt.document, cs = 0, cw = 0, cj = cp(), dn = cp(), cl = cp(),
                dk = function (i, du) {
                    if (i === du) {
                        cD = true
                    }
                    return 0
                }, cO = 1 << 31, cE = ({}).hasOwnProperty, cf = [], cR = cf.pop, cV = cf.push, cU = cf.push,
                di = cf.slice, cH = function (dx, du) {
                    var dv = 0, dw = dx.length;
                    for (; dv < dw; dv++) {
                        if (dx[dv] === du) {
                            return dv
                        }
                    }
                    return -1
                },
                ci = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ds = "[\\x20\\t\\r\\n\\f]", cG = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ch = "\\[" + ds + "*(" + cG + ")(?:" + ds + "*([*^$|!~]?=)" + ds + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + cG + "))|)" + ds + "*\\]",
                cT = ":(" + cG + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ch + ")*)|.*)\\)|)",
                db = new RegExp(ds + "+", "g"),
                c9 = new RegExp("^" + ds + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ds + "+$", "g"),
                c0 = new RegExp("^" + ds + "*," + ds + "*"),
                cZ = new RegExp("^" + ds + "*([>+~]|" + ds + ")" + ds + "*"),
                cW = new RegExp("=" + ds + "*([^\\]'\"]*?)" + ds + "*\\]", "g"), c6 = new RegExp(cT),
                c3 = new RegExp("^" + cG + "$"), cN = {
                    ID: new RegExp("^#(" + cG + ")"),
                    CLASS: new RegExp("^\\.(" + cG + ")"),
                    TAG: new RegExp("^(" + cG + "|[*])"),
                    ATTR: new RegExp("^" + ch),
                    PSEUDO: new RegExp("^" + cT),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ds + "*(even|odd|(([+-]|)(\\d*)n|)" + ds + "*(?:([+-]|)" + ds + "*(\\d+)|))" + ds + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + ci + ")$", "i"),
                    needsContext: new RegExp("^" + ds + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ds + "*((?:-\\d)?\\d*)" + ds + "*\\)|)(?=[^-]|$)", "i")
                }, c4 = /^(?:input|select|textarea|button)$/i, c2 = /^h\d$/i, c5 = /^[^{]+\{\s*\[native \w/,
                c7 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, c8 = /[+~]/, c1 = /'|\\/g,
                da = new RegExp("\\\\([\\da-f]{1,6}" + ds + "?|(" + ds + ")|.)", "ig"), cB = function (i, du, dv) {
                    var dw = "0x" + du - 65536;
                    return dw !== dw || dv ? du : dw < 0 ? String.fromCharCode(dw + 65536) : String.fromCharCode(dw >> 10 | 55296, dw & 1023 | 56320)
                }, dr = function () {
                    dd()
                };
            try {
                cU.apply((cf = di.call(cS.childNodes)), cS.childNodes);
                cf[cS.childNodes.length].nodeType
            } catch (cx) {
                cU = {
                    apply: cf.length ? function (du, i) {
                        cV.apply(du, di.call(i))
                    } : function (dx, du) {
                        var dw = dx.length, dv = 0;
                        while ((dx[dw++] = du[dv++])) {
                        }
                        dx.length = dw - 1
                    }
                }
            }

            function dh(dI, du, dG, dH) {
                var dy, dx, dv, dC, dD, dz, dw, dB, dA = du && du.ownerDocument, dE = du ? du.nodeType : 9;
                dG = dG || [];
                if (typeof dI !== "string" || !dI || dE !== 1 && dE !== 9 && dE !== 11) {
                    return dG
                }
                if (!dH) {
                    if ((du ? du.ownerDocument || du : cS) !== cu) {
                        dd(du)
                    }
                    du = du || cu;
                    if (cv) {
                        if (dE !== 11 && (dz = c7.exec(dI))) {
                            if ((dy = dz[1])) {
                                if (dE === 9) {
                                    if ((dv = du.getElementById(dy))) {
                                        if (dv.id === dy) {
                                            dG.push(dv);
                                            return dG
                                        }
                                    } else {
                                        return dG
                                    }
                                } else {
                                    if (dA && (dv = dA.getElementById(dy)) && cn(du, dv) && dv.id === dy) {
                                        dG.push(dv);
                                        return dG
                                    }
                                }
                            } else {
                                if (dz[2]) {
                                    cU.apply(dG, du.getElementsByTagName(dI));
                                    return dG
                                } else {
                                    if ((dy = dz[3]) && dl.getElementsByClassName && du.getElementsByClassName) {
                                        cU.apply(dG, du.getElementsByClassName(dy));
                                        return dG
                                    }
                                }
                            }
                        }
                        if (dl.qsa && !cl[dI + " "] && (!cY || !cY.test(dI))) {
                            if (dE !== 1) {
                                dA = du;
                                dB = dI
                            } else {
                                if (du.nodeName.toLowerCase() !== "object") {
                                    if ((dC = du.getAttribute("id"))) {
                                        dC = dC.replace(c1, "\\$&")
                                    } else {
                                        du.setAttribute("id", (dC = cz))
                                    }
                                    dw = dp(dI);
                                    dx = dw.length;
                                    dD = c3.test(dC) ? "#" + dC : "[id='" + dC + "']";
                                    while (dx--) {
                                        dw[dx] = dD + " " + dq(dw[dx])
                                    }
                                    dB = dw.join(",");
                                    dA = c8.test(dI) && dm(du.parentNode) || du
                                }
                            }
                            if (dB) {
                                try {
                                    cU.apply(dG, dA.querySelectorAll(dB));
                                    return dG
                                } catch (dF) {
                                } finally {
                                    if (dC === cz) {
                                        du.removeAttribute("id")
                                    }
                                }
                            }
                        }
                    }
                }
                return dc(dI.replace(c9, "$1"), du, dG, dH)
            }

            function cp() {
                var du = [];

                function i(dv, dw) {
                    if (du.push(dv + " ") > cA.cacheLength) {
                        delete i[du.shift()]
                    }
                    return (i[dv + " "] = dw)
                }

                return i
            }

            function cJ(i) {
                i[cz] = true;
                return i
            }

            function cg(dv) {
                var i = cu.createElement("div");
                try {
                    return !!dv(i)
                } catch (du) {
                    return false
                } finally {
                    if (i.parentNode) {
                        i.parentNode.removeChild(i)
                    }
                    i = null
                }
            }

            function ce(dv, dw) {
                var du = dv.split("|"), dx = du.length;
                while (dx--) {
                    cA.attrHandle[du[dx]] = dw
                }
            }

            function dg(i, du) {
                var dv = du && i,
                    dw = dv && i.nodeType === 1 && du.nodeType === 1 && (~du.sourceIndex || cO) - (~i.sourceIndex || cO);
                if (dw) {
                    return dw
                }
                if (dv) {
                    while ((dv = dv.nextSibling)) {
                        if (dv === du) {
                            return -1
                        }
                    }
                }
                return i ? 1 : -1
            }

            function cq(i) {
                return function (du) {
                    var dv = du.nodeName.toLowerCase();
                    return dv === "input" && du.type === i
                }
            }

            function co(i) {
                return function (du) {
                    var dv = du.nodeName.toLowerCase();
                    return (dv === "input" || dv === "button") && du.type === i
                }
            }

            function cr(i) {
                return cJ(function (du) {
                    du = +du;
                    return cJ(function (dz, dx) {
                        var dw, dy = i([], dz.length, du), dv = dy.length;
                        while (dv--) {
                            if (dz[(dw = dy[dv])]) {
                                dz[dw] = !(dx[dw] = dz[dw])
                            }
                        }
                    })
                })
            }

            function dm(i) {
                return i && typeof i.getElementsByTagName !== "undefined" && i
            }

            dl = dh.support = {};
            cI = dh.isXML = function (du) {
                var i = du && (du.ownerDocument || du).documentElement;
                return i ? i.nodeName !== "HTML" : false
            };
            dd = dh.setDocument = function (dv) {
                var du, dw, i = dv ? dv.ownerDocument || dv : cS;
                if (i === cu || i.nodeType !== 9 || !i.documentElement) {
                    return cu
                }
                cu = i;
                ct = cu.documentElement;
                cv = !cI(cu);
                if ((dw = cu.defaultView) && dw.top !== dw) {
                    if (dw.addEventListener) {
                        dw.addEventListener("unload", dr, false)
                    } else {
                        if (dw.attachEvent) {
                            dw.attachEvent("onunload", dr)
                        }
                    }
                }
                dl.attributes = cg(function (dx) {
                    dx.className = "i";
                    return !dx.getAttribute("className")
                });
                dl.getElementsByTagName = cg(function (dx) {
                    dx.appendChild(cu.createComment(""));
                    return !dx.getElementsByTagName("*").length
                });
                dl.getElementsByClassName = c5.test(cu.getElementsByClassName);
                dl.getById = cg(function (dx) {
                    ct.appendChild(dx).id = cz;
                    return !cu.getElementsByName || !cu.getElementsByName(cz).length
                });
                if (dl.getById) {
                    cA.find.ID = function (dy, dx) {
                        if (typeof dx.getElementById !== "undefined" && cv) {
                            var dz = dx.getElementById(dy);
                            return dz ? [dz] : []
                        }
                    };
                    cA.filter.ID = function (dy) {
                        var dx = dy.replace(da, cB);
                        return function (dz) {
                            return dz.getAttribute("id") === dx
                        }
                    }
                } else {
                    delete cA.find.ID;
                    cA.filter.ID = function (dy) {
                        var dx = dy.replace(da, cB);
                        return function (dz) {
                            var dA = typeof dz.getAttributeNode !== "undefined" && dz.getAttributeNode("id");
                            return dA && dA.value === dx
                        }
                    }
                }
                cA.find.TAG = dl.getElementsByTagName ? function (dy, dx) {
                    if (typeof dx.getElementsByTagName !== "undefined") {
                        return dx.getElementsByTagName(dy)
                    } else {
                        if (dl.qsa) {
                            return dx.querySelectorAll(dy)
                        }
                    }
                } : function (dB, dx) {
                    var dy, dC = [], dz = 0, dA = dx.getElementsByTagName(dB);
                    if (dB === "*") {
                        while ((dy = dA[dz++])) {
                            if (dy.nodeType === 1) {
                                dC.push(dy)
                            }
                        }
                        return dC
                    }
                    return dA
                };
                cA.find.CLASS = dl.getElementsByClassName && function (dx, dy) {
                    if (typeof dy.getElementsByClassName !== "undefined" && cv) {
                        return dy.getElementsByClassName(dx)
                    }
                };
                cX = [];
                cY = [];
                if ((dl.qsa = c5.test(cu.querySelectorAll))) {
                    cg(function (dx) {
                        ct.appendChild(dx).innerHTML = "<a id='" + cz + "'></a><select id='" + cz + "-\r\\' msallowcapture=''><option selected=''></option></select>";
                        if (dx.querySelectorAll("[msallowcapture^='']").length) {
                            cY.push("[*^$]=" + ds + "*(?:''|\"\")")
                        }
                        if (!dx.querySelectorAll("[selected]").length) {
                            cY.push("\\[" + ds + "*(?:value|" + ci + ")")
                        }
                        if (!dx.querySelectorAll("[id~=" + cz + "-]").length) {
                            cY.push("~=")
                        }
                        if (!dx.querySelectorAll(":checked").length) {
                            cY.push(":checked")
                        }
                        if (!dx.querySelectorAll("a#" + cz + "+*").length) {
                            cY.push(".#.+[+~]")
                        }
                    });
                    cg(function (dx) {
                        var dy = cu.createElement("input");
                        dy.setAttribute("type", "hidden");
                        dx.appendChild(dy).setAttribute("name", "D");
                        if (dx.querySelectorAll("[name=d]").length) {
                            cY.push("name" + ds + "*[*^$|!~]?=")
                        }
                        if (!dx.querySelectorAll(":enabled").length) {
                            cY.push(":enabled", ":disabled")
                        }
                        dx.querySelectorAll("*,:x");
                        cY.push(",.*:")
                    })
                }
                if ((dl.matchesSelector = c5.test((cM = ct.matches || ct.webkitMatchesSelector || ct.mozMatchesSelector || ct.oMatchesSelector || ct.msMatchesSelector)))) {
                    cg(function (dx) {
                        dl.disconnectedMatch = cM.call(dx, "div");
                        cM.call(dx, "[s!='']:x");
                        cX.push("!=", cT)
                    })
                }
                cY = cY.length && new RegExp(cY.join("|"));
                cX = cX.length && new RegExp(cX.join("|"));
                du = c5.test(ct.compareDocumentPosition);
                cn = du || c5.test(ct.contains) ? function (dx, dz) {
                    var dy = dx.nodeType === 9 ? dx.documentElement : dx, dA = dz && dz.parentNode;
                    return dx === dA || !!(dA && dA.nodeType === 1 && (dy.contains ? dy.contains(dA) : dx.compareDocumentPosition && dx.compareDocumentPosition(dA) & 16))
                } : function (dx, dy) {
                    if (dy) {
                        while ((dy = dy.parentNode)) {
                            if (dy === dx) {
                                return true
                            }
                        }
                    }
                    return false
                };
                dk = du ? function (dx, dy) {
                    if (dx === dy) {
                        cD = true;
                        return 0
                    }
                    var dz = !dx.compareDocumentPosition - !dy.compareDocumentPosition;
                    if (dz) {
                        return dz
                    }
                    dz = (dx.ownerDocument || dx) === (dy.ownerDocument || dy) ? dx.compareDocumentPosition(dy) : 1;
                    if (dz & 1 || (!dl.sortDetached && dy.compareDocumentPosition(dx) === dz)) {
                        if (dx === cu || dx.ownerDocument === cS && cn(cS, dx)) {
                            return -1
                        }
                        if (dy === cu || dy.ownerDocument === cS && cn(cS, dy)) {
                            return 1
                        }
                        return dj ? (cH(dj, dx) - cH(dj, dy)) : 0
                    }
                    return dz & 4 ? -1 : 1
                } : function (dx, dA) {
                    if (dx === dA) {
                        cD = true;
                        return 0
                    }
                    var dD, dE = 0, dz = dx.parentNode, dC = dA.parentNode, dy = [dx], dB = [dA];
                    if (!dz || !dC) {
                        return dx === cu ? -1 : dA === cu ? 1 : dz ? -1 : dC ? 1 : dj ? (cH(dj, dx) - cH(dj, dA)) : 0
                    } else {
                        if (dz === dC) {
                            return dg(dx, dA)
                        }
                    }
                    dD = dx;
                    while ((dD = dD.parentNode)) {
                        dy.unshift(dD)
                    }
                    dD = dA;
                    while ((dD = dD.parentNode)) {
                        dB.unshift(dD)
                    }
                    while (dy[dE] === dB[dE]) {
                        dE++
                    }
                    return dE ? dg(dy[dE], dB[dE]) : dy[dE] === cS ? -1 : dB[dE] === cS ? 1 : 0
                };
                return cu
            };
            dh.matches = function (du, i) {
                return dh(du, null, null, i)
            };
            dh.matchesSelector = function (du, dv) {
                if ((du.ownerDocument || du) !== cu) {
                    dd(du)
                }
                dv = dv.replace(cW, "='$1']");
                if (dl.matchesSelector && cv && !cl[dv + " "] && (!cX || !cX.test(dv)) && (!cY || !cY.test(dv))) {
                    try {
                        var dw = cM.call(du, dv);
                        if (dw || dl.disconnectedMatch || du.document && du.document.nodeType !== 11) {
                            return dw
                        }
                    } catch (i) {
                    }
                }
                return dh(dv, cu, null, [du]).length > 0
            };
            dh.contains = function (i, du) {
                if ((i.ownerDocument || i) !== cu) {
                    dd(i)
                }
                return cn(i, du)
            };
            dh.attr = function (i, dv) {
                if ((i.ownerDocument || i) !== cu) {
                    dd(i)
                }
                var du = cA.attrHandle[dv.toLowerCase()],
                    dw = du && cE.call(cA.attrHandle, dv.toLowerCase()) ? du(i, dv, !cv) : undefined;
                return dw !== undefined ? dw : dl.attributes || !cv ? i.getAttribute(dv) : (dw = i.getAttributeNode(dv)) && dw.specified ? dw.value : null
            };
            dh.error = function (i) {
                throw new Error("Syntax error, unrecognized expression: " + i)
            };
            dh.uniqueSort = function (dy) {
                var dv, du = [], dx = 0, dw = 0;
                cD = !dl.detectDuplicates;
                dj = !dl.sortStable && dy.slice(0);
                dy.sort(dk);
                if (cD) {
                    while ((dv = dy[dw++])) {
                        if (dv === dy[dw]) {
                            dx = du.push(dw)
                        }
                    }
                    while (dx--) {
                        dy.splice(du[dx], 1)
                    }
                }
                dj = null;
                return dy
            };
            cC = dh.getText = function (du) {
                var dw, dy = "", dv = 0, dx = du.nodeType;
                if (!dx) {
                    while ((dw = du[dv++])) {
                        dy += cC(dw)
                    }
                } else {
                    if (dx === 1 || dx === 9 || dx === 11) {
                        if (typeof du.textContent === "string") {
                            return du.textContent
                        } else {
                            for (du = du.firstChild; du; du = du.nextSibling) {
                                dy += cC(du)
                            }
                        }
                    } else {
                        if (dx === 3 || dx === 4) {
                            return du.nodeValue
                        }
                    }
                }
                return dy
            };
            cA = dh.selectors = {
                cacheLength: 50,
                createPseudo: cJ,
                match: cN,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: true},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: true},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (i) {
                        i[1] = i[1].replace(da, cB);
                        i[3] = (i[3] || i[4] || i[5] || "").replace(da, cB);
                        if (i[2] === "~=") {
                            i[3] = " " + i[3] + " "
                        }
                        return i.slice(0, 4)
                    }, CHILD: function (i) {
                        i[1] = i[1].toLowerCase();
                        if (i[1].slice(0, 3) === "nth") {
                            if (!i[3]) {
                                dh.error(i[0])
                            }
                            i[4] = +(i[4] ? i[5] + (i[6] || 1) : 2 * (i[3] === "even" || i[3] === "odd"));
                            i[5] = +((i[7] + i[8]) || i[3] === "odd")
                        } else {
                            if (i[3]) {
                                dh.error(i[0])
                            }
                        }
                        return i
                    }, PSEUDO: function (du) {
                        var i, dv = !du[6] && du[2];
                        if (cN.CHILD.test(du[0])) {
                            return null
                        }
                        if (du[3]) {
                            du[2] = du[4] || du[5] || ""
                        } else {
                            if (dv && c6.test(dv) && (i = dp(dv, true)) && (i = dv.indexOf(")", dv.length - i) - dv.length)) {
                                du[0] = du[0].slice(0, i);
                                du[2] = dv.slice(0, i)
                            }
                        }
                        return du.slice(0, 3)
                    }
                },
                filter: {
                    TAG: function (du) {
                        var i = du.replace(da, cB).toLowerCase();
                        return du === "*" ? function () {
                            return true
                        } : function (dv) {
                            return dv.nodeName && dv.nodeName.toLowerCase() === i
                        }
                    }, CLASS: function (i) {
                        var du = cj[i + " "];
                        return du || (du = new RegExp("(^|" + ds + ")" + i + "(" + ds + "|$)")) && cj(i, function (dv) {
                            return du.test(typeof dv.className === "string" && dv.className || typeof dv.getAttribute !== "undefined" && dv.getAttribute("class") || "")
                        })
                    }, ATTR: function (du, dv, i) {
                        return function (dw) {
                            var dx = dh.attr(dw, du);
                            if (dx == null) {
                                return dv === "!="
                            }
                            if (!dv) {
                                return true
                            }
                            dx += "";
                            return dv === "=" ? dx === i : dv === "!=" ? dx !== i : dv === "^=" ? i && dx.indexOf(i) === 0 : dv === "*=" ? i && dx.indexOf(i) > -1 : dv === "$=" ? i && dx.slice(-i.length) === i : dv === "~=" ? (" " + dx.replace(db, " ") + " ").indexOf(i) > -1 : dv === "|=" ? dx === i || dx.slice(0, i.length + 1) === i + "-" : false
                        }
                    }, CHILD: function (dz, dA, i, du, dw) {
                        var dy = dz.slice(0, 3) !== "nth", dv = dz.slice(-4) !== "last", dx = dA === "of-type";
                        return du === 1 && dw === 0 ? function (dB) {
                            return !!dB.parentNode
                        } : function (dF, dC, dO) {
                            var dB, dM, dJ, dH, dI, dL, dE = dy !== dv ? "nextSibling" : "previousSibling",
                                dK = dF.parentNode, dG = dx && dF.nodeName.toLowerCase(), dN = !dO && !dx, dD = false;
                            if (dK) {
                                if (dy) {
                                    while (dE) {
                                        dH = dF;
                                        while ((dH = dH[dE])) {
                                            if (dx ? dH.nodeName.toLowerCase() === dG : dH.nodeType === 1) {
                                                return false
                                            }
                                        }
                                        dL = dE = dz === "only" && !dL && "nextSibling"
                                    }
                                    return true
                                }
                                dL = [dv ? dK.firstChild : dK.lastChild];
                                if (dv && dN) {
                                    dH = dK;
                                    dJ = dH[cz] || (dH[cz] = {});
                                    dM = dJ[dH.uniqueID] || (dJ[dH.uniqueID] = {});
                                    dB = dM[dz] || [];
                                    dI = dB[0] === cs && dB[1];
                                    dD = dI && dB[2];
                                    dH = dI && dK.childNodes[dI];
                                    while ((dH = ++dI && dH && dH[dE] || (dD = dI = 0) || dL.pop())) {
                                        if (dH.nodeType === 1 && ++dD && dH === dF) {
                                            dM[dz] = [cs, dI, dD];
                                            break
                                        }
                                    }
                                } else {
                                    if (dN) {
                                        dH = dF;
                                        dJ = dH[cz] || (dH[cz] = {});
                                        dM = dJ[dH.uniqueID] || (dJ[dH.uniqueID] = {});
                                        dB = dM[dz] || [];
                                        dI = dB[0] === cs && dB[1];
                                        dD = dI
                                    }
                                    if (dD === false) {
                                        while ((dH = ++dI && dH && dH[dE] || (dD = dI = 0) || dL.pop())) {
                                            if ((dx ? dH.nodeName.toLowerCase() === dG : dH.nodeType === 1) && ++dD) {
                                                if (dN) {
                                                    dJ = dH[cz] || (dH[cz] = {});
                                                    dM = dJ[dH.uniqueID] || (dJ[dH.uniqueID] = {});
                                                    dM[dz] = [cs, dD]
                                                }
                                                if (dH === dF) {
                                                    break
                                                }
                                            }
                                        }
                                    }
                                }
                                dD -= dw;
                                return dD === du || (dD % du === 0 && dD / du >= 0)
                            }
                        }
                    }, PSEUDO: function (dw, du) {
                        var i,
                            dv = cA.pseudos[dw] || cA.setFilters[dw.toLowerCase()] || dh.error("unsupported pseudo: " + dw);
                        if (dv[cz]) {
                            return dv(du)
                        }
                        if (dv.length > 1) {
                            i = [dw, dw, "", du];
                            return cA.setFilters.hasOwnProperty(dw.toLowerCase()) ? cJ(function (dB, dA) {
                                var dy, dz = dv(dB, du), dx = dz.length;
                                while (dx--) {
                                    dy = cH(dB, dz[dx]);
                                    dB[dy] = !(dA[dy] = dz[dx])
                                }
                            }) : function (dx) {
                                return dv(dx, 0, i)
                            }
                        }
                        return dv
                    }
                },
                pseudos: {
                    not: cJ(function (dw) {
                        var i = [], dv = [], du = ck(dw.replace(c9, "$1"));
                        return du[cz] ? cJ(function (dB, dA, dx, dD) {
                            var dy, dC = du(dB, null, dD, []), dz = dB.length;
                            while (dz--) {
                                if ((dy = dC[dz])) {
                                    dB[dz] = !(dA[dz] = dy)
                                }
                            }
                        }) : function (dy, dx, dz) {
                            i[0] = dy;
                            du(i, null, dz, dv);
                            i[0] = null;
                            return !dv.pop()
                        }
                    }), has: cJ(function (i) {
                        return function (du) {
                            return dh(i, du).length > 0
                        }
                    }), contains: cJ(function (i) {
                        i = i.replace(da, cB);
                        return function (du) {
                            return (du.textContent || du.innerText || cC(du)).indexOf(i) > -1
                        }
                    }), lang: cJ(function (i) {
                        if (!c3.test(i || "")) {
                            dh.error("unsupported lang: " + i)
                        }
                        i = i.replace(da, cB).toLowerCase();
                        return function (du) {
                            var dv;
                            do {
                                if ((dv = cv ? du.lang : du.getAttribute("xml:lang") || du.getAttribute("lang"))) {
                                    dv = dv.toLowerCase();
                                    return dv === i || dv.indexOf(i + "-") === 0
                                }
                            } while ((du = du.parentNode) && du.nodeType === 1);
                            return false
                        }
                    }), target: function (i) {
                        var du = dt.location && dt.location.hash;
                        return du && du.slice(1) === i.id
                    }, root: function (i) {
                        return i === ct
                    }, focus: function (i) {
                        return i === cu.activeElement && (!cu.hasFocus || cu.hasFocus()) && !!(i.type || i.href || ~i.tabIndex)
                    }, enabled: function (i) {
                        return i.disabled === false
                    }, disabled: function (i) {
                        return i.disabled === true
                    }, checked: function (i) {
                        var du = i.nodeName.toLowerCase();
                        return (du === "input" && !!i.checked) || (du === "option" && !!i.selected)
                    }, selected: function (i) {
                        if (i.parentNode) {
                            i.parentNode.selectedIndex
                        }
                        return i.selected === true
                    }, empty: function (i) {
                        for (i = i.firstChild; i; i = i.nextSibling) {
                            if (i.nodeType < 6) {
                                return false
                            }
                        }
                        return true
                    }, parent: function (i) {
                        return !cA.pseudos.empty(i)
                    }, header: function (i) {
                        return c2.test(i.nodeName)
                    }, input: function (i) {
                        return c4.test(i.nodeName)
                    }, button: function (i) {
                        var du = i.nodeName.toLowerCase();
                        return du === "input" && i.type === "button" || du === "button"
                    }, text: function (du) {
                        var i;
                        return du.nodeName.toLowerCase() === "input" && du.type === "text" && ((i = du.getAttribute("type")) == null || i.toLowerCase() === "text")
                    }, first: cr(function () {
                        return [0]
                    }), last: cr(function (du, i) {
                        return [i - 1]
                    }), eq: cr(function (dv, du, i) {
                        return [i < 0 ? i + du : i]
                    }), even: cr(function (dw, dv) {
                        var du = 0;
                        for (; du < dv; du += 2) {
                            dw.push(du)
                        }
                        return dw
                    }), odd: cr(function (dw, dv) {
                        var du = 1;
                        for (; du < dv; du += 2) {
                            dw.push(du)
                        }
                        return dw
                    }), lt: cr(function (dx, dw, du) {
                        var dv = du < 0 ? du + dw : du;
                        for (; --dv >= 0;) {
                            dx.push(dv)
                        }
                        return dx
                    }), gt: cr(function (dx, dw, du) {
                        var dv = du < 0 ? du + dw : du;
                        for (; ++dv < dw;) {
                            dx.push(dv)
                        }
                        return dx
                    })
                }
            };
            cA.pseudos.nth = cA.pseudos.eq;
            for (cF in {radio: true, checkbox: true, file: true, password: true, image: true}) {
                cA.pseudos[cF] = cq(cF)
            }
            for (cF in {submit: true, reset: true}) {
                cA.pseudos[cF] = co(cF)
            }

            function de() {
            }

            de.prototype = cA.filters = cA.pseudos;
            cA.setFilters = new de();
            dp = dh.tokenize = function (dz, dx) {
                var dw, dv, dB, dC, dA, du, dy, i = dn[dz + " "];
                if (i) {
                    return dx ? 0 : i.slice(0)
                }
                dA = dz;
                du = [];
                dy = cA.preFilter;
                while (dA) {
                    if (!dw || (dv = c0.exec(dA))) {
                        if (dv) {
                            dA = dA.slice(dv[0].length) || dA
                        }
                        du.push((dB = []))
                    }
                    dw = false;
                    if ((dv = cZ.exec(dA))) {
                        dw = dv.shift();
                        dB.push({value: dw, type: dv[0].replace(c9, " ")});
                        dA = dA.slice(dw.length)
                    }
                    for (dC in cA.filter) {
                        if ((dv = cN[dC].exec(dA)) && (!dy[dC] || (dv = dy[dC](dv)))) {
                            dw = dv.shift();
                            dB.push({value: dw, type: dC, matches: dv});
                            dA = dA.slice(dw.length)
                        }
                    }
                    if (!dw) {
                        break
                    }
                }
                return dx ? dA.length : dA ? dh.error(dz) : dn(dz, du).slice(0)
            };

            function dq(dx) {
                var du = 0, dv = dx.length, dw = "";
                for (; du < dv; du++) {
                    dw += dx[du].value
                }
                return dw
            }

            function cd(dy, dv, i) {
                var dw = dv.dir, du = i && dw === "parentNode", dx = cw++;
                return dv.first ? function (dA, dz, dB) {
                    while ((dA = dA[dw])) {
                        if (dA.nodeType === 1 || du) {
                            return dy(dA, dz, dB)
                        }
                    }
                } : function (dA, dz, dF) {
                    var dC, dE, dD, dB = [cs, dx];
                    if (dF) {
                        while ((dA = dA[dw])) {
                            if (dA.nodeType === 1 || du) {
                                if (dy(dA, dz, dF)) {
                                    return true
                                }
                            }
                        }
                    } else {
                        while ((dA = dA[dw])) {
                            if (dA.nodeType === 1 || du) {
                                dD = dA[cz] || (dA[cz] = {});
                                dE = dD[dA.uniqueID] || (dD[dA.uniqueID] = {});
                                if ((dC = dE[dw]) && dC[0] === cs && dC[1] === dx) {
                                    return (dB[2] = dC[2])
                                } else {
                                    dE[dw] = dB;
                                    if ((dB[2] = dy(dA, dz, dF))) {
                                        return true
                                    }
                                }
                            }
                        }
                    }
                }
            }

            function cy(i) {
                return i.length > 1 ? function (dv, du, dx) {
                    var dw = i.length;
                    while (dw--) {
                        if (!i[dw](dv, du, dx)) {
                            return false
                        }
                    }
                    return true
                } : i[0]
            }

            function cP(dy, du, dx) {
                var dv = 0, dw = du.length;
                for (; dv < dw; dv++) {
                    dh(dy, du[dv], dx)
                }
                return dx
            }

            function cm(dC, dz, dw, du, dD) {
                var dv, dB = [], dx = 0, dy = dC.length, dA = dz != null;
                for (; dx < dy; dx++) {
                    if ((dv = dC[dx])) {
                        if (!dw || dw(dv, du, dD)) {
                            dB.push(dv);
                            if (dA) {
                                dz.push(dx)
                            }
                        }
                    }
                }
                return dB
            }

            function df(dx, dy, i, du, dv, dw) {
                if (du && !du[cz]) {
                    du = df(du)
                }
                if (dv && !dv[cz]) {
                    dv = df(dv, dw)
                }
                return cJ(function (dJ, dI, dz, dL) {
                    var dK, dC, dA, dH = [], dF = [], dG = dI.length,
                        dB = dJ || cP(dy || "*", dz.nodeType ? [dz] : dz, []),
                        dD = dx && (dJ || !dy) ? cm(dB, dH, dx, dz, dL) : dB,
                        dE = i ? dv || (dJ ? dx : dG || du) ? [] : dI : dD;
                    if (i) {
                        i(dD, dE, dz, dL)
                    }
                    if (du) {
                        dK = cm(dE, dF);
                        du(dK, [], dz, dL);
                        dC = dK.length;
                        while (dC--) {
                            if ((dA = dK[dC])) {
                                dE[dF[dC]] = !(dD[dF[dC]] = dA)
                            }
                        }
                    }
                    if (dJ) {
                        if (dv || dx) {
                            if (dv) {
                                dK = [];
                                dC = dE.length;
                                while (dC--) {
                                    if ((dA = dE[dC])) {
                                        dK.push((dD[dC] = dA))
                                    }
                                }
                                dv(null, (dE = []), dK, dL)
                            }
                            dC = dE.length;
                            while (dC--) {
                                if ((dA = dE[dC]) && (dK = dv ? cH(dJ, dA) : dH[dC]) > -1) {
                                    dJ[dK] = !(dI[dK] = dA)
                                }
                            }
                        }
                    } else {
                        dE = cm(dE === dI ? dE.splice(dG, dE.length) : dE);
                        if (dv) {
                            dv(null, dI, dE, dL)
                        } else {
                            cU.apply(dI, dE)
                        }
                    }
                })
            }

            function cL(dE) {
                var du, dC, dx, dz = dE.length, dy = cA.relative[dE[0].type], dw = dy || cA.relative[" "],
                    dv = dy ? 1 : 0, dB = cd(function (i) {
                        return i === du
                    }, dw, true), dA = cd(function (i) {
                        return cH(du, i) > -1
                    }, dw, true), dD = [function (dF, i, dH) {
                        var dG = (!dy && (dH || i !== cQ)) || ((du = i).nodeType ? dB(dF, i, dH) : dA(dF, i, dH));
                        du = null;
                        return dG
                    }];
                for (; dv < dz; dv++) {
                    if ((dC = cA.relative[dE[dv].type])) {
                        dD = [cd(cy(dD), dC)]
                    } else {
                        dC = cA.filter[dE[dv].type].apply(null, dE[dv].matches);
                        if (dC[cz]) {
                            dx = ++dv;
                            for (; dx < dz; dx++) {
                                if (cA.relative[dE[dx].type]) {
                                    break
                                }
                            }
                            return df(dv > 1 && cy(dD), dv > 1 && dq(dE.slice(0, dv - 1).concat({value: dE[dv - 2].type === " " ? "*" : ""})).replace(c9, "$1"), dC, dv < dx && cL(dE.slice(dv, dx)), dx < dz && cL((dE = dE.slice(dx))), dx < dz && dq(dE))
                        }
                        dD.push(dC)
                    }
                }
                return cy(dD)
            }

            function cK(dv, dw) {
                var du = dw.length > 0, i = dv.length > 0, dx = function (dK, dy, dN, dJ, dI) {
                    var dB, dE, dH, dG = 0, dD = "0", dM = dK && [], dL = [], dz = cQ,
                        dC = dK || i && cA.find.TAG("*", dI), dA = (cs += dz == null ? 1 : Math.random() || 0.1),
                        dF = dC.length;
                    if (dI) {
                        cQ = dy === cu || dy || dI
                    }
                    for (; dD !== dF && (dB = dC[dD]) != null; dD++) {
                        if (i && dB) {
                            dE = 0;
                            if (!dy && dB.ownerDocument !== cu) {
                                dd(dB);
                                dN = !cv
                            }
                            while ((dH = dv[dE++])) {
                                if (dH(dB, dy || cu, dN)) {
                                    dJ.push(dB);
                                    break
                                }
                            }
                            if (dI) {
                                cs = dA
                            }
                        }
                        if (du) {
                            if ((dB = !dH && dB)) {
                                dG--
                            }
                            if (dK) {
                                dM.push(dB)
                            }
                        }
                    }
                    dG += dD;
                    if (du && dD !== dG) {
                        dE = 0;
                        while ((dH = dw[dE++])) {
                            dH(dM, dL, dy, dN)
                        }
                        if (dK) {
                            if (dG > 0) {
                                while (dD--) {
                                    if (!(dM[dD] || dL[dD])) {
                                        dL[dD] = cR.call(dJ)
                                    }
                                }
                            }
                            dL = cm(dL)
                        }
                        cU.apply(dJ, dL);
                        if (dI && !dK && dL.length > 0 && (dG + dw.length) > 1) {
                            dh.uniqueSort(dJ)
                        }
                    }
                    if (dI) {
                        cs = dA;
                        cQ = dz
                    }
                    return dM
                };
                return du ? cJ(dx) : dx
            }

            ck = dh.compile = function (dy, dx) {
                var dw, dz = [], dv = [], du = cl[dy + " "];
                if (!du) {
                    if (!dx) {
                        dx = dp(dy)
                    }
                    dw = dx.length;
                    while (dw--) {
                        du = cL(dx[dw]);
                        if (du[cz]) {
                            dz.push(du)
                        } else {
                            dv.push(du)
                        }
                    }
                    du = cl(dy, cK(dv, dz));
                    du.selector = dy
                }
                return du
            };
            dc = dh.select = function (dB, dv, dz, dA) {
                var dx, dD, dC, dE, dw, du = typeof dB === "function" && dB, dy = !dA && dp((dB = du.selector || dB));
                dz = dz || [];
                if (dy.length === 1) {
                    dD = dy[0] = dy[0].slice(0);
                    if (dD.length > 2 && (dC = dD[0]).type === "ID" && dl.getById && dv.nodeType === 9 && cv && cA.relative[dD[1].type]) {
                        dv = (cA.find.ID(dC.matches[0].replace(da, cB), dv) || [])[0];
                        if (!dv) {
                            return dz
                        } else {
                            if (du) {
                                dv = dv.parentNode
                            }
                        }
                        dB = dB.slice(dD.shift().value.length)
                    }
                    dx = cN.needsContext.test(dB) ? 0 : dD.length;
                    while (dx--) {
                        dC = dD[dx];
                        if (cA.relative[(dE = dC.type)]) {
                            break
                        }
                        if ((dw = cA.find[dE])) {
                            if ((dA = dw(dC.matches[0].replace(da, cB), c8.test(dD[0].type) && dm(dv.parentNode) || dv))) {
                                dD.splice(dx, 1);
                                dB = dA.length && dq(dD);
                                if (!dB) {
                                    cU.apply(dz, dA);
                                    return dz
                                }
                                break
                            }
                        }
                    }
                }
                (du || ck(dB, dy))(dA, dv, !cv, dz, !dv || c8.test(dB) && dm(dv.parentNode) || dv);
                return dz
            };
            dl.sortStable = cz.split("").sort(dk).join("") === cz;
            dl.detectDuplicates = !!cD;
            dd();
            dl.sortDetached = cg(function (i) {
                return i.compareDocumentPosition(cu.createElement("div")) & 1
            });
            if (!cg(function (i) {
                i.innerHTML = "<a href='#'></a>";
                return i.firstChild.getAttribute("href") === "#"
            })) {
                ce("type|href|height|width", function (i, dv, du) {
                    if (!du) {
                        return i.getAttribute(dv, dv.toLowerCase() === "type" ? 1 : 2)
                    }
                })
            }
            if (!dl.attributes || !cg(function (i) {
                i.innerHTML = "<input/>";
                i.firstChild.setAttribute("value", "");
                return i.firstChild.getAttribute("value") === ""
            })) {
                ce("value", function (i, dv, du) {
                    if (!du && i.nodeName.toLowerCase() === "input") {
                        return i.defaultValue
                    }
                })
            }
            if (!cg(function (i) {
                return i.getAttribute("disabled") == null
            })) {
                ce(ci, function (i, dv, du) {
                    var dw;
                    if (!du) {
                        return i[dv] === true ? dv.toLowerCase() : (dw = i.getAttributeNode(dv)) && dw.specified ? dw.value : null
                    }
                })
            }
            return dh
        })(b7);
    az.find = bX;
    az.expr = bX.selectors;
    az.expr[":"] = az.expr.pseudos;
    az.uniqueSort = az.unique = bX.uniqueSort;
    az.text = bX.getText;
    az.isXMLDoc = bX.isXML;
    az.contains = bX.contains;
    var Q = function (cd, i, cg) {
        var ce = [], cf = cg !== undefined;
        while ((cd = cd[i]) && cd.nodeType !== 9) {
            if (cd.nodeType === 1) {
                if (cf && az(cd).is(cg)) {
                    break
                }
                ce.push(cd)
            }
        }
        return ce
    };
    var bW = function (ce, i) {
        var cd = [];
        for (; ce; ce = ce.nextSibling) {
            if (ce.nodeType === 1 && ce !== i) {
                cd.push(ce)
            }
        }
        return cd
    };
    var bl = az.expr.match.needsContext;
    var bD = (/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/);
    var bc = /^.[^:#\[\.,]*$/;

    function b8(i, ce, cd) {
        if (az.isFunction(ce)) {
            return az.grep(i, function (cf, cg) {
                return !!ce.call(cf, cg, cf) !== cd
            })
        }
        if (ce.nodeType) {
            return az.grep(i, function (cf) {
                return (cf === ce) !== cd
            })
        }
        if (typeof ce === "string") {
            if (bc.test(ce)) {
                return az.filter(ce, i, cd)
            }
            ce = az.filter(ce, i)
        }
        return az.grep(i, function (cf) {
            return (az.inArray(cf, ce) > -1) !== cd
        })
    }

    az.filter = function (ce, cd, cf) {
        var i = cd[0];
        if (cf) {
            ce = ":not(" + ce + ")"
        }
        return cd.length === 1 && i.nodeType === 1 ? az.find.matchesSelector(i, ce) ? [i] : [] : az.find.matches(ce, az.grep(cd, function (cg) {
            return cg.nodeType === 1
        }))
    };
    az.fn.extend({
        find: function (cg) {
            var cd, cf = [], ch = this, ce = ch.length;
            if (typeof cg !== "string") {
                return this.pushStack(az(cg).filter(function () {
                    for (cd = 0; cd < ce; cd++) {
                        if (az.contains(ch[cd], this)) {
                            return true
                        }
                    }
                }))
            }
            for (cd = 0; cd < ce; cd++) {
                az.find(cg, ch[cd], cf)
            }
            cf = this.pushStack(ce > 1 ? az.unique(cf) : cf);
            cf.selector = this.selector ? this.selector + " " + cg : cg;
            return cf
        }, filter: function (i) {
            return this.pushStack(b8(this, i || [], false))
        }, not: function (i) {
            return this.pushStack(b8(this, i || [], true))
        }, is: function (i) {
            return !!b8(this, typeof i === "string" && bl.test(i) ? az(i) : i || [], false).length
        }
    });
    var bs, by = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ar = az.fn.init = function (cg, i, cf) {
        var ce, cd;
        if (!cg) {
            return this
        }
        cf = cf || bs;
        if (typeof cg === "string") {
            if (cg.charAt(0) === "<" && cg.charAt(cg.length - 1) === ">" && cg.length >= 3) {
                ce = [null, cg, null]
            } else {
                ce = by.exec(cg)
            }
            if (ce && (ce[1] || !i)) {
                if (ce[1]) {
                    i = i instanceof az ? i[0] : i;
                    az.merge(this, az.parseHTML(ce[1], i && i.nodeType ? i.ownerDocument || i : S, true));
                    if (bD.test(ce[1]) && az.isPlainObject(i)) {
                        for (ce in i) {
                            if (az.isFunction(this[ce])) {
                                this[ce](i[ce])
                            } else {
                                this.attr(ce, i[ce])
                            }
                        }
                    }
                    return this
                } else {
                    cd = S.getElementById(ce[2]);
                    if (cd && cd.parentNode) {
                        if (cd.id !== ce[2]) {
                            return bs.find(cg)
                        }
                        this.length = 1;
                        this[0] = cd
                    }
                    this.context = S;
                    this.selector = cg;
                    return this
                }
            } else {
                if (!i || i.jquery) {
                    return (i || cf).find(cg)
                } else {
                    return this.constructor(i).find(cg)
                }
            }
        } else {
            if (cg.nodeType) {
                this.context = this[0] = cg;
                this.length = 1;
                return this
            } else {
                if (az.isFunction(cg)) {
                    return typeof cf.ready !== "undefined" ? cf.ready(cg) : cg(az)
                }
            }
        }
        if (cg.selector !== undefined) {
            this.selector = cg.selector;
            this.context = cg.context
        }
        return az.makeArray(cg, this)
    };
    ar.prototype = az.fn;
    bs = az(S);
    var bu = /^(?:parents|prev(?:Until|All))/, am = {children: true, contents: true, next: true, prev: true};
    az.fn.extend({
        has: function (cf) {
            var cd, cg = az(cf, this), ce = cg.length;
            return this.filter(function () {
                for (cd = 0; cd < ce; cd++) {
                    if (az.contains(this, cg[cd])) {
                        return true
                    }
                }
            })
        }, closest: function (cj, cd) {
            var ce, cf = 0, cg = this.length, ch = [],
                ci = bl.test(cj) || typeof cj !== "string" ? az(cj, cd || this.context) : 0;
            for (; cf < cg; cf++) {
                for (ce = this[cf]; ce && ce !== cd; ce = ce.parentNode) {
                    if (ce.nodeType < 11 && (ci ? ci.index(ce) > -1 : ce.nodeType === 1 && az.find.matchesSelector(ce, cj))) {
                        ch.push(ce);
                        break
                    }
                }
            }
            return this.pushStack(ch.length > 1 ? az.uniqueSort(ch) : ch)
        }, index: function (i) {
            if (!i) {
                return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1
            }
            if (typeof i === "string") {
                return az.inArray(this[0], az(i))
            }
            return az.inArray(i.jquery ? i[0] : i, this)
        }, add: function (cd, i) {
            return this.pushStack(az.uniqueSort(az.merge(this.get(), az(cd, i))))
        }, addBack: function (i) {
            return this.add(i == null ? this.prevObject : this.prevObject.filter(i))
        }
    });

    function bV(i, cd) {
        do {
            i = i[cd]
        } while (i && i.nodeType !== 1);
        return i
    }

    az.each({
        parent: function (i) {
            var cd = i.parentNode;
            return cd && cd.nodeType !== 11 ? cd : null
        }, parents: function (i) {
            return Q(i, "parentNode")
        }, parentsUntil: function (cd, ce, cf) {
            return Q(cd, "parentNode", cf)
        }, next: function (i) {
            return bV(i, "nextSibling")
        }, prev: function (i) {
            return bV(i, "previousSibling")
        }, nextAll: function (i) {
            return Q(i, "nextSibling")
        }, prevAll: function (i) {
            return Q(i, "previousSibling")
        }, nextUntil: function (cd, ce, cf) {
            return Q(cd, "nextSibling", cf)
        }, prevUntil: function (cd, ce, cf) {
            return Q(cd, "previousSibling", cf)
        }, siblings: function (i) {
            return bW((i.parentNode || {}).firstChild, i)
        }, children: function (i) {
            return bW(i.firstChild)
        }, contents: function (i) {
            return az.nodeName(i, "iframe") ? i.contentDocument || i.contentWindow.document : az.merge([], i.childNodes)
        }
    }, function (cd, i) {
        az.fn[cd] = function (cg, cf) {
            var ce = az.map(this, i, cg);
            if (cd.slice(-5) !== "Until") {
                cf = cg
            }
            if (cf && typeof cf === "string") {
                ce = az.filter(cf, ce)
            }
            if (this.length > 1) {
                if (!am[cd]) {
                    ce = az.uniqueSort(ce)
                }
                if (bu.test(cd)) {
                    ce = ce.reverse()
                }
            }
            return this.pushStack(ce)
        }
    });
    var bp = (/\S+/g);

    function C(cd) {
        var i = {};
        az.each(cd.match(bp) || [], function (ce, cf) {
            i[cf] = true
        });
        return i
    }

    az.Callbacks = function (cj) {
        cj = typeof cj === "string" ? C(cj) : az.extend({}, cj);
        var ce, ci, cd, ch, cg = [], ck = [], cf = -1, i = function () {
            ch = cj.once;
            cd = ce = true;
            for (; ck.length; cf = -1) {
                ci = ck.shift();
                while (++cf < cg.length) {
                    if (cg[cf].apply(ci[0], ci[1]) === false && cj.stopOnFalse) {
                        cf = cg.length;
                        ci = false
                    }
                }
            }
            if (!cj.memory) {
                ci = false
            }
            ce = false;
            if (ch) {
                if (ci) {
                    cg = []
                } else {
                    cg = ""
                }
            }
        }, cl = {
            add: function () {
                if (cg) {
                    if (ci && !ce) {
                        cf = cg.length - 1;
                        ck.push(ci)
                    }
                    (function cm(cn) {
                        az.each(cn, function (co, cp) {
                            if (az.isFunction(cp)) {
                                if (!cj.unique || !cl.has(cp)) {
                                    cg.push(cp)
                                }
                            } else {
                                if (cp && cp.length && az.type(cp) !== "string") {
                                    cm(cp)
                                }
                            }
                        })
                    })(arguments);
                    if (ci && !ce) {
                        i()
                    }
                }
                return this
            }, remove: function () {
                az.each(arguments, function (cm, cn) {
                    var co;
                    while ((co = az.inArray(cn, cg, co)) > -1) {
                        cg.splice(co, 1);
                        if (co <= cf) {
                            cf--
                        }
                    }
                });
                return this
            }, has: function (cm) {
                return cm ? az.inArray(cm, cg) > -1 : cg.length > 0
            }, empty: function () {
                if (cg) {
                    cg = []
                }
                return this
            }, disable: function () {
                ch = ck = [];
                cg = ci = "";
                return this
            }, disabled: function () {
                return !cg
            }, lock: function () {
                ch = true;
                if (!ci) {
                    cl.disable()
                }
                return this
            }, locked: function () {
                return !!ch
            }, fireWith: function (cn, cm) {
                if (!ch) {
                    cm = cm || [];
                    cm = [cn, cm.slice ? cm.slice() : cm];
                    ck.push(cm);
                    if (!ce) {
                        i()
                    }
                }
                return this
            }, fire: function () {
                cl.fireWith(this, arguments);
                return this
            }, fired: function () {
                return !!cd
            }
        };
        return cl
    };
    az.extend({
        Deferred: function (cd) {
            var cg = [["resolve", "done", az.Callbacks("once memory"), "resolved"], ["reject", "fail", az.Callbacks("once memory"), "rejected"], ["notify", "progress", az.Callbacks("memory")]],
                cf = "pending", ce = {
                    state: function () {
                        return cf
                    }, always: function () {
                        i.done(arguments).fail(arguments);
                        return this
                    }, then: function () {
                        var ch = arguments;
                        return az.Deferred(function (ci) {
                            az.each(cg, function (ck, cl) {
                                var cj = az.isFunction(ch[ck]) && ch[ck];
                                i[cl[1]](function () {
                                    var cm = cj && cj.apply(this, arguments);
                                    if (cm && az.isFunction(cm.promise)) {
                                        cm.promise().progress(ci.notify).done(ci.resolve).fail(ci.reject)
                                    } else {
                                        ci[cl[0] + "With"](this === ce ? ci.promise() : this, cj ? [cm] : arguments)
                                    }
                                })
                            });
                            ch = null
                        }).promise()
                    }, promise: function (ch) {
                        return ch != null ? az.extend(ch, ce) : ce
                    }
                }, i = {};
            ce.pipe = ce.then;
            az.each(cg, function (ch, ck) {
                var ci = ck[2], cj = ck[3];
                ce[ck[1]] = ci.add;
                if (cj) {
                    ci.add(function () {
                        cf = cj
                    }, cg[ch ^ 1][2].disable, cg[2][2].lock)
                }
                i[ck[0]] = function () {
                    i[ck[0] + "With"](this === i ? ce : this, arguments);
                    return this
                };
                i[ck[0] + "With"] = ci.fireWith
            });
            ce.promise(i);
            if (cd) {
                cd.call(i, i)
            }
            return i
        }, when: function (cl) {
            var ce = 0, ck = bY.call(arguments), cf = ck.length,
                ci = cf !== 1 || (cl && az.isFunction(cl.promise)) ? cf : 0, cd = ci === 1 ? cl : az.Deferred(),
                cm = function (co, cn, cp) {
                    return function (i) {
                        cn[co] = this;
                        cp[co] = arguments.length > 1 ? bY.call(arguments) : i;
                        if (cp === ch) {
                            cd.notifyWith(cn, cp)
                        } else {
                            if (!(--ci)) {
                                cd.resolveWith(cn, cp)
                            }
                        }
                    }
                }, ch, cg, cj;
            if (cf > 1) {
                ch = new Array(cf);
                cg = new Array(cf);
                cj = new Array(cf);
                for (; ce < cf; ce++) {
                    if (ck[ce] && az.isFunction(ck[ce].promise)) {
                        ck[ce].promise().progress(cm(ce, cg, ch)).done(cm(ce, cj, ck)).fail(cd.reject)
                    } else {
                        --ci
                    }
                }
            }
            if (!ci) {
                cd.resolveWith(cj, ck)
            }
            return cd.promise()
        }
    });
    var aZ;
    az.fn.ready = function (i) {
        az.ready.promise().done(i);
        return this
    };
    az.extend({
        isReady: false, readyWait: 1, holdReady: function (i) {
            if (i) {
                az.readyWait++
            } else {
                az.ready(true)
            }
        }, ready: function (i) {
            if (i === true ? --az.readyWait : az.isReady) {
                return
            }
            az.isReady = true;
            if (i !== true && --az.readyWait > 0) {
                return
            }
            aZ.resolveWith(S, [az]);
            if (az.fn.triggerHandler) {
                az(S).triggerHandler("ready");
                az(S).off("ready")
            }
        }
    });

    function P() {
        if (S.addEventListener) {
            S.removeEventListener("DOMContentLoaded", y);
            b7.removeEventListener("load", y)
        } else {
            S.detachEvent("onreadystatechange", y);
            b7.detachEvent("onload", y)
        }
    }

    function y() {
        if (S.addEventListener || b7.event.type === "load" || S.readyState === "complete") {
            P();
            az.ready()
        }
    }

    az.ready.promise = function (ce) {
        if (!aZ) {
            aZ = az.Deferred();
            if (S.readyState === "complete" || (S.readyState !== "loading" && !S.documentElement.doScroll)) {
                b7.setTimeout(az.ready)
            } else {
                if (S.addEventListener) {
                    S.addEventListener("DOMContentLoaded", y);
                    b7.addEventListener("load", y)
                } else {
                    S.attachEvent("onreadystatechange", y);
                    b7.attachEvent("onload", y);
                    var cf = false;
                    try {
                        cf = b7.frameElement == null && S.documentElement
                    } catch (cd) {
                    }
                    if (cf && cf.doScroll) {
                        (function i() {
                            if (!az.isReady) {
                                try {
                                    cf.doScroll("left")
                                } catch (cg) {
                                    return b7.setTimeout(i, 50)
                                }
                                P();
                                az.ready()
                            }
                        })()
                    }
                }
            }
        }
        return aZ.promise(ce)
    };
    az.ready.promise();
    var ao;
    for (ao in az(bZ)) {
        break
    }
    bZ.ownFirst = ao === "0";
    bZ.inlineBlockNeedsLayout = false;
    az(function () {
        var cf, ce, i, cd;
        i = S.getElementsByTagName("body")[0];
        if (!i || !i.style) {
            return
        }
        ce = S.createElement("div");
        cd = S.createElement("div");
        cd.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
        i.appendChild(cd).appendChild(ce);
        if (typeof ce.style.zoom !== "undefined") {
            ce.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";
            bZ.inlineBlockNeedsLayout = cf = ce.offsetWidth === 3;
            if (cf) {
                i.style.zoom = 1
            }
        }
        i.removeChild(cd)
    });
    (function () {
        var i = S.createElement("div");
        bZ.deleteExpando = true;
        try {
            delete i.test
        } catch (cd) {
            bZ.deleteExpando = false
        }
        i = null
    })();
    var d = function (i) {
        var cd = az.noData[(i.nodeName + " ").toLowerCase()], ce = +i.nodeType || 1;
        return ce !== 1 && ce !== 9 ? false : !cd || cd !== true && i.getAttribute("classid") === cd
    };
    var aO = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, bk = /([A-Z])/g;

    function L(ce, cf, i) {
        if (i === undefined && ce.nodeType === 1) {
            var cg = "data-" + cf.replace(bk, "-$1").toLowerCase();
            i = ce.getAttribute(cg);
            if (typeof i === "string") {
                try {
                    i = i === "true" ? true : i === "false" ? false : i === "null" ? null : +i + "" === i ? +i : aO.test(i) ? az.parseJSON(i) : i
                } catch (cd) {
                }
                az.data(ce, cf, i)
            } else {
                i = undefined
            }
        }
        return i
    }

    function ax(cd) {
        var i;
        for (i in cd) {
            if (i === "data" && az.isEmptyObject(cd[i])) {
                continue
            }
            if (i !== "toJSON") {
                return false
            }
        }
        return true
    }

    function au(ce, ci, cd, cj) {
        if (!d(ce)) {
            return
        }
        var ck, cl, cg = az.expando, ch = ce.nodeType, i = ch ? az.cache : ce, cf = ch ? ce[cg] : ce[cg] && cg;
        if ((!cf || !i[cf] || (!cj && !i[cf].data)) && cd === undefined && typeof ci === "string") {
            return
        }
        if (!cf) {
            if (ch) {
                cf = ce[cg] = O.pop() || az.guid++
            } else {
                cf = cg
            }
        }
        if (!i[cf]) {
            i[cf] = ch ? {} : {toJSON: az.noop}
        }
        if (typeof ci === "object" || typeof ci === "function") {
            if (cj) {
                i[cf] = az.extend(i[cf], ci)
            } else {
                i[cf].data = az.extend(i[cf].data, ci)
            }
        }
        cl = i[cf];
        if (!cj) {
            if (!cl.data) {
                cl.data = {}
            }
            cl = cl.data
        }
        if (cd !== undefined) {
            cl[az.camelCase(ci)] = cd
        }
        if (typeof ci === "string") {
            ck = cl[ci];
            if (ck == null) {
                ck = cl[az.camelCase(ci)]
            }
        } else {
            ck = cl
        }
        return ck
    }

    function av(ce, ci, cj) {
        if (!d(ce)) {
            return
        }
        var ck, cf, ch = ce.nodeType, cd = ch ? az.cache : ce, cg = ch ? ce[az.expando] : az.expando;
        if (!cd[cg]) {
            return
        }
        if (ci) {
            ck = cj ? cd[cg] : cd[cg].data;
            if (ck) {
                if (!az.isArray(ci)) {
                    if (ci in ck) {
                        ci = [ci]
                    } else {
                        ci = az.camelCase(ci);
                        if (ci in ck) {
                            ci = [ci]
                        } else {
                            ci = ci.split(" ")
                        }
                    }
                } else {
                    ci = ci.concat(az.map(ci, az.camelCase))
                }
                cf = ci.length;
                while (cf--) {
                    delete ck[ci[cf]]
                }
                if (cj ? !ax(ck) : !az.isEmptyObject(ck)) {
                    return
                }
            }
        }
        if (!cj) {
            delete cd[cg].data;
            if (!ax(cd[cg])) {
                return
            }
        }
        if (ch) {
            az.cleanData([ce], true)
        } else {
            if (bZ.deleteExpando || cd != cd.window) {
                delete cd[cg]
            } else {
                cd[cg] = undefined
            }
        }
    }

    az.extend({
        cache: {},
        noData: {"applet ": true, "embed ": true, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (i) {
            i = i.nodeType ? az.cache[i[az.expando]] : i[az.expando];
            return !!i && !ax(i)
        },
        data: function (cd, ce, i) {
            return au(cd, ce, i)
        },
        removeData: function (i, cd) {
            return av(i, cd)
        },
        _data: function (cd, ce, i) {
            return au(cd, ce, i, true)
        },
        _removeData: function (i, cd) {
            return av(i, cd, true)
        }
    });
    az.fn.extend({
        data: function (ch, cj) {
            var cg, ci, ce, cf = this[0], cd = cf && cf.attributes;
            if (ch === undefined) {
                if (this.length) {
                    ce = az.data(cf);
                    if (cf.nodeType === 1 && !az._data(cf, "parsedAttrs")) {
                        cg = cd.length;
                        while (cg--) {
                            if (cd[cg]) {
                                ci = cd[cg].name;
                                if (ci.indexOf("data-") === 0) {
                                    ci = az.camelCase(ci.slice(5));
                                    L(cf, ci, ce[ci])
                                }
                            }
                        }
                        az._data(cf, "parsedAttrs", true)
                    }
                }
                return ce
            }
            if (typeof ch === "object") {
                return this.each(function () {
                    az.data(this, ch)
                })
            }
            return arguments.length > 1 ? this.each(function () {
                az.data(this, ch, cj)
            }) : cf ? L(cf, ch, az.data(cf, ch)) : undefined
        }, removeData: function (i) {
            return this.each(function () {
                az.removeData(this, i)
            })
        }
    });
    az.extend({
        queue: function (cd, cf, i) {
            var ce;
            if (cd) {
                cf = (cf || "fx") + "queue";
                ce = az._data(cd, cf);
                if (i) {
                    if (!ce || az.isArray(i)) {
                        ce = az._data(cd, cf, az.makeArray(i))
                    } else {
                        ce.push(i)
                    }
                }
                return ce || []
            }
        }, dequeue: function (i, ci) {
            ci = ci || "fx";
            var cg = az.queue(i, ci), ch = cg.length, cd = cg.shift(), ce = az._queueHooks(i, ci), cf = function () {
                az.dequeue(i, ci)
            };
            if (cd === "inprogress") {
                cd = cg.shift();
                ch--
            }
            if (cd) {
                if (ci === "fx") {
                    cg.unshift("inprogress")
                }
                delete ce.stop;
                cd.call(i, cf, ce)
            }
            if (!ch && ce) {
                ce.empty.fire()
            }
        }, _queueHooks: function (i, ce) {
            var cd = ce + "queueHooks";
            return az._data(i, cd) || az._data(i, cd, {
                empty: az.Callbacks("once memory").add(function () {
                    az._removeData(i, ce + "queue");
                    az._removeData(i, cd)
                })
            })
        }
    });
    az.fn.extend({
        queue: function (ce, i) {
            var cd = 2;
            if (typeof ce !== "string") {
                i = ce;
                ce = "fx";
                cd--
            }
            if (arguments.length < cd) {
                return az.queue(this[0], ce)
            }
            return i === undefined ? this : this.each(function () {
                var cf = az.queue(this, ce, i);
                az._queueHooks(this, ce);
                if (ce === "fx" && cf[0] !== "inprogress") {
                    az.dequeue(this, ce)
                }
            })
        }, dequeue: function (i) {
            return this.each(function () {
                az.dequeue(this, i)
            })
        }, clearQueue: function (i) {
            return this.queue(i || "fx", [])
        }, promise: function (ck, ch) {
            var cj, cd = 1, ce = az.Deferred(), cf = this, cg = this.length, ci = function () {
                if (!(--cd)) {
                    ce.resolveWith(cf, [cf])
                }
            };
            if (typeof ck !== "string") {
                ch = ck;
                ck = undefined
            }
            ck = ck || "fx";
            while (cg--) {
                cj = az._data(cf[cg], ck + "queueHooks");
                if (cj && cj.empty) {
                    cd++;
                    cj.empty.add(ci)
                }
            }
            ci();
            return ce.promise(ch)
        }
    });
    (function () {
        var i;
        bZ.shrinkWrapBlocks = function () {
            if (i != null) {
                return i
            }
            i = false;
            var cf, cd, ce;
            cd = S.getElementsByTagName("body")[0];
            if (!cd || !cd.style) {
                return
            }
            cf = S.createElement("div");
            ce = S.createElement("div");
            ce.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
            cd.appendChild(ce).appendChild(cf);
            if (typeof cf.style.zoom !== "undefined") {
                cf.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1";
                cf.appendChild(S.createElement("div")).style.width = "5px";
                i = cf.offsetWidth !== 3
            }
            cd.removeChild(ce);
            return i
        }
    })();
    var aI = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
    var aW = new RegExp("^(?:([+-])=|)(" + aI + ")([a-z%]*)$", "i");
    var G = ["Top", "Right", "Bottom", "Left"];
    var ay = function (cd, i) {
        cd = i || cd;
        return az.css(cd, "display") === "none" || !az.contains(cd.ownerDocument, cd)
    };

    function j(ce, ci, cm, ck) {
        var i, cj = 1, ch = 20, cd = ck ? function () {
                return ck.cur()
            } : function () {
                return az.css(ce, ci, "")
            }, cf = cd(), cl = cm && cm[3] || (az.cssNumber[ci] ? "" : "px"),
            cg = (az.cssNumber[ci] || cl !== "px" && +cf) && aW.exec(az.css(ce, ci));
        if (cg && cg[3] !== cl) {
            cl = cl || cg[3];
            cm = cm || [];
            cg = +cf || 1;
            do {
                cj = cj || ".5";
                cg = cg / cj;
                az.style(ce, ci, cg + cl)
            } while (cj !== (cj = cd() / cf) && cj !== 1 && --ch)
        }
        if (cm) {
            cg = +cg || +cf || 0;
            i = cm[1] ? cg + (cm[1] + 1) * cm[2] : +cm[2];
            if (ck) {
                ck.unit = cl;
                ck.start = cg;
                ck.end = i
            }
        }
        return i
    }

    var e = function (cf, ch, cj, cm, ce, cg, cl) {
        var ci = 0, ck = cf.length, cd = cj == null;
        if (az.type(cj) === "object") {
            ce = true;
            for (ci in cj) {
                e(cf, ch, ci, cj[ci], true, cg, cl)
            }
        } else {
            if (cm !== undefined) {
                ce = true;
                if (!az.isFunction(cm)) {
                    cl = true
                }
                if (cd) {
                    if (cl) {
                        ch.call(cf, cm);
                        ch = null
                    } else {
                        cd = ch;
                        ch = function (i, cn, co) {
                            return cd.call(az(i), co)
                        }
                    }
                }
                if (ch) {
                    for (; ci < ck; ci++) {
                        ch(cf[ci], cj, cl ? cm : cm.call(cf[ci], ci, ch(cf[ci], cj)))
                    }
                }
            }
        }
        return ce ? cf : cd ? ch.call(cf) : ck ? ch(cf[0], cj) : cg
    };
    var aQ = (/^(?:checkbox|radio)$/i);
    var bH = (/<([\w:-]+)/);
    var bB = (/^$|\/(?:java|ecma)script/i);
    var bf = (/^\s+/);
    var aD = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

    function D(i) {
        var cd = aD.split("|"), ce = i.createDocumentFragment();
        if (ce.createElement) {
            while (cd.length) {
                ce.createElement(cd.pop())
            }
        }
        return ce
    }

    (function () {
        var i = S.createElement("div"), cd = S.createDocumentFragment(), ce = S.createElement("input");
        i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        bZ.leadingWhitespace = i.firstChild.nodeType === 3;
        bZ.tbody = !i.getElementsByTagName("tbody").length;
        bZ.htmlSerialize = !!i.getElementsByTagName("link").length;
        bZ.html5Clone = S.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";
        ce.type = "checkbox";
        ce.checked = true;
        cd.appendChild(ce);
        bZ.appendChecked = ce.checked;
        i.innerHTML = "<textarea>x</textarea>";
        bZ.noCloneChecked = !!i.cloneNode(true).lastChild.defaultValue;
        cd.appendChild(i);
        ce = S.createElement("input");
        ce.setAttribute("type", "radio");
        ce.setAttribute("checked", "checked");
        ce.setAttribute("name", "t");
        i.appendChild(ce);
        bZ.checkClone = i.cloneNode(true).cloneNode(true).lastChild.checked;
        bZ.noCloneEvent = !!i.addEventListener;
        i[az.expando] = 1;
        bZ.attributes = !i.getAttribute(az.expando)
    })();
    var b9 = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: bZ.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    b9.optgroup = b9.option;
    b9.tbody = b9.tfoot = b9.colgroup = b9.caption = b9.thead;
    b9.th = b9.td;

    function ae(cd, ci) {
        var cf, ce, ch = 0,
            cg = typeof cd.getElementsByTagName !== "undefined" ? cd.getElementsByTagName(ci || "*") : typeof cd.querySelectorAll !== "undefined" ? cd.querySelectorAll(ci || "*") : undefined;
        if (!cg) {
            for (cg = [], cf = cd.childNodes || cd; (ce = cf[ch]) != null; ch++) {
                if (!ci || az.nodeName(ce, ci)) {
                    cg.push(ce)
                } else {
                    az.merge(cg, ae(ce, ci))
                }
            }
        }
        return ci === undefined || ci && az.nodeName(cd, ci) ? az.merge([cd], cg) : cg
    }

    function bS(ce, cg) {
        var cd, cf = 0;
        for (; (cd = ce[cf]) != null; cf++) {
            az._data(cd, "globalEval", !cg || az._data(cg[cf], "globalEval"))
        }
    }

    var ba = /<|&#?\w+;/, bI = /<tbody/i;

    function aa(i) {
        if (aQ.test(i.type)) {
            i.defaultChecked = i.checked
        }
    }

    function u(cg, ce, cn, co, ci) {
        var cj, cf, cd, cr, cp, cq, cs, ck = cg.length, cm = D(ce), cl = [], ch = 0;
        for (; ch < ck; ch++) {
            cf = cg[ch];
            if (cf || cf === 0) {
                if (az.type(cf) === "object") {
                    az.merge(cl, cf.nodeType ? [cf] : cf)
                } else {
                    if (!ba.test(cf)) {
                        cl.push(ce.createTextNode(cf))
                    } else {
                        cr = cr || cm.appendChild(ce.createElement("div"));
                        cp = (bH.exec(cf) || ["", ""])[1].toLowerCase();
                        cs = b9[cp] || b9._default;
                        cr.innerHTML = cs[1] + az.htmlPrefilter(cf) + cs[2];
                        cj = cs[0];
                        while (cj--) {
                            cr = cr.lastChild
                        }
                        if (!bZ.leadingWhitespace && bf.test(cf)) {
                            cl.push(ce.createTextNode(bf.exec(cf)[0]))
                        }
                        if (!bZ.tbody) {
                            cf = cp === "table" && !bI.test(cf) ? cr.firstChild : cs[1] === "<table>" && !bI.test(cf) ? cr : 0;
                            cj = cf && cf.childNodes.length;
                            while (cj--) {
                                if (az.nodeName((cq = cf.childNodes[cj]), "tbody") && !cq.childNodes.length) {
                                    cf.removeChild(cq)
                                }
                            }
                        }
                        az.merge(cl, cr.childNodes);
                        cr.textContent = "";
                        while (cr.firstChild) {
                            cr.removeChild(cr.firstChild)
                        }
                        cr = cm.lastChild
                    }
                }
            }
        }
        if (cr) {
            cm.removeChild(cr)
        }
        if (!bZ.appendChecked) {
            az.grep(ae(cl, "input"), aa)
        }
        ch = 0;
        while ((cf = cl[ch++])) {
            if (co && az.inArray(cf, co) > -1) {
                if (ci) {
                    ci.push(cf)
                }
                continue
            }
            cd = az.contains(cf.ownerDocument, cf);
            cr = ae(cm.appendChild(cf), "script");
            if (cd) {
                bS(cr)
            }
            if (cn) {
                cj = 0;
                while ((cf = cr[cj++])) {
                    if (bB.test(cf.type || "")) {
                        cn.push(cf)
                    }
                }
            }
        }
        cr = null;
        return cm
    }

    (function () {
        var cf, ce, cd = S.createElement("div");
        for (cf in {submit: true, change: true, focusin: true}) {
            ce = "on" + cf;
            if (!(bZ[cf] = ce in b7)) {
                cd.setAttribute(ce, "t");
                bZ[cf] = cd.attributes[ce].expando === false
            }
        }
        cd = null
    })();
    var a6 = /^(?:input|select|textarea)$/i, be = /^key/, bi = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        a5 = /^(?:focusinfocus|focusoutblur)$/, bL = /^([^.]*)(?:\.(.+)|)/;

    function a3() {
        return true
    }

    function a2() {
        return false
    }

    function bQ() {
        try {
            return S.activeElement
        } catch (i) {
        }
    }

    function aH(cd, cj, ch, i, ce, cf) {
        var cg, ci;
        if (typeof cj === "object") {
            if (typeof ch !== "string") {
                i = i || ch;
                ch = undefined
            }
            for (ci in cj) {
                aH(cd, ci, ch, i, cj[ci], cf)
            }
            return cd
        }
        if (i == null && ce == null) {
            ce = ch;
            i = ch = undefined
        } else {
            if (ce == null) {
                if (typeof ch === "string") {
                    ce = i;
                    i = undefined
                } else {
                    ce = i;
                    i = ch;
                    ch = undefined
                }
            }
        }
        if (ce === false) {
            ce = a2
        } else {
            if (!ce) {
                return cd
            }
        }
        if (cf === 1) {
            cg = ce;
            ce = function (ck) {
                az().off(ck);
                return cg.apply(this, arguments)
            };
            ce.guid = cg.guid || (cg.guid = az.guid++)
        }
        return cd.each(function () {
            az.event.add(this, cj, ce, i, ch)
        })
    }

    az.event = {
        global: {},
        add: function (cd, cs, cj, i, cn) {
            var cq, cg, cp, ci, co, cf, ch, ck, cr, cl, cm, ce = az._data(cd);
            if (!ce) {
                return
            }
            if (cj.handler) {
                ci = cj;
                cj = ci.handler;
                cn = ci.selector
            }
            if (!cj.guid) {
                cj.guid = az.guid++
            }
            if (!(cg = ce.events)) {
                cg = ce.events = {}
            }
            if (!(cf = ce.handle)) {
                cf = ce.handle = function (ct) {
                    return typeof az !== "undefined" && (!ct || az.event.triggered !== ct.type) ? az.event.dispatch.apply(cf.elem, arguments) : undefined
                };
                cf.elem = cd
            }
            cs = (cs || "").match(bp) || [""];
            cp = cs.length;
            while (cp--) {
                cq = bL.exec(cs[cp]) || [];
                cr = cm = cq[1];
                cl = (cq[2] || "").split(".").sort();
                if (!cr) {
                    continue
                }
                co = az.event.special[cr] || {};
                cr = (cn ? co.delegateType : co.bindType) || cr;
                co = az.event.special[cr] || {};
                ch = az.extend({
                    type: cr,
                    origType: cm,
                    data: i,
                    handler: cj,
                    guid: cj.guid,
                    selector: cn,
                    needsContext: cn && az.expr.match.needsContext.test(cn),
                    namespace: cl.join(".")
                }, ci);
                if (!(ck = cg[cr])) {
                    ck = cg[cr] = [];
                    ck.delegateCount = 0;
                    if (!co.setup || co.setup.call(cd, i, cl, cf) === false) {
                        if (cd.addEventListener) {
                            cd.addEventListener(cr, cf, false)
                        } else {
                            if (cd.attachEvent) {
                                cd.attachEvent("on" + cr, cf)
                            }
                        }
                    }
                }
                if (co.add) {
                    co.add.call(cd, ch);
                    if (!ch.handler.guid) {
                        ch.handler.guid = cj.guid
                    }
                }
                if (cn) {
                    ck.splice(ck.delegateCount++, 0, ch)
                } else {
                    ck.push(ch)
                }
                az.event.global[cr] = true
            }
            cd = null
        },
        remove: function (i, cs, cg, cn, cj) {
            var ci, cf, cq, cl, cp, ce, co, ch, cr, ck, cm, cd = az.hasData(i) && az._data(i);
            if (!cd || !(ce = cd.events)) {
                return
            }
            cs = (cs || "").match(bp) || [""];
            cp = cs.length;
            while (cp--) {
                cq = bL.exec(cs[cp]) || [];
                cr = cm = cq[1];
                ck = (cq[2] || "").split(".").sort();
                if (!cr) {
                    for (cr in ce) {
                        az.event.remove(i, cr + cs[cp], cg, cn, true)
                    }
                    continue
                }
                co = az.event.special[cr] || {};
                cr = (cn ? co.delegateType : co.bindType) || cr;
                ch = ce[cr] || [];
                cq = cq[2] && new RegExp("(^|\\.)" + ck.join("\\.(?:.*\\.|)") + "(\\.|$)");
                cl = ci = ch.length;
                while (ci--) {
                    cf = ch[ci];
                    if ((cj || cm === cf.origType) && (!cg || cg.guid === cf.guid) && (!cq || cq.test(cf.namespace)) && (!cn || cn === cf.selector || cn === "**" && cf.selector)) {
                        ch.splice(ci, 1);
                        if (cf.selector) {
                            ch.delegateCount--
                        }
                        if (co.remove) {
                            co.remove.call(i, cf)
                        }
                    }
                }
                if (cl && !ch.length) {
                    if (!co.teardown || co.teardown.call(i, ck, cd.handle) === false) {
                        az.removeEvent(i, cr, cd.handle)
                    }
                    delete ce[cr]
                }
            }
            if (az.isEmptyObject(ce)) {
                delete cd.handle;
                az._removeData(i, "events")
            }
        },
        trigger: function (ci, cf, ch, cn) {
            var ck, co, ce, cd, cp, cq, cl, cj = [ch || S], cr = an.call(ci, "type") ? ci.type : ci,
                cm = an.call(ci, "namespace") ? ci.namespace.split(".") : [];
            ce = cq = ch = ch || S;
            if (ch.nodeType === 3 || ch.nodeType === 8) {
                return
            }
            if (a5.test(cr + az.event.triggered)) {
                return
            }
            if (cr.indexOf(".") > -1) {
                cm = cr.split(".");
                cr = cm.shift();
                cm.sort()
            }
            co = cr.indexOf(":") < 0 && "on" + cr;
            ci = ci[az.expando] ? ci : new az.Event(cr, typeof ci === "object" && ci);
            ci.isTrigger = cn ? 2 : 3;
            ci.namespace = cm.join(".");
            ci.rnamespace = ci.namespace ? new RegExp("(^|\\.)" + cm.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            ci.result = undefined;
            if (!ci.target) {
                ci.target = ch
            }
            cf = cf == null ? [ci] : az.makeArray(cf, [ci]);
            cp = az.event.special[cr] || {};
            if (!cn && cp.trigger && cp.trigger.apply(ch, cf) === false) {
                return
            }
            if (!cn && !cp.noBubble && !az.isWindow(ch)) {
                cd = cp.delegateType || cr;
                if (!a5.test(cd + cr)) {
                    ce = ce.parentNode
                }
                for (; ce; ce = ce.parentNode) {
                    cj.push(ce);
                    cq = ce
                }
                if (cq === (ch.ownerDocument || S)) {
                    cj.push(cq.defaultView || cq.parentWindow || b7)
                }
            }
            cl = 0;
            while ((ce = cj[cl++]) && !ci.isPropagationStopped()) {
                ci.type = cl > 1 ? cd : cp.bindType || cr;
                ck = (az._data(ce, "events") || {})[ci.type] && az._data(ce, "handle");
                if (ck) {
                    ck.apply(ce, cf)
                }
                ck = co && ce[co];
                if (ck && ck.apply && d(ce)) {
                    ci.result = ck.apply(ce, cf);
                    if (ci.result === false) {
                        ci.preventDefault()
                    }
                }
            }
            ci.type = cr;
            if (!cn && !ci.isDefaultPrevented()) {
                if ((!cp._default || cp._default.apply(cj.pop(), cf) === false) && d(ch)) {
                    if (co && ch[cr] && !az.isWindow(ch)) {
                        cq = ch[co];
                        if (cq) {
                            ch[co] = null
                        }
                        az.event.triggered = cr;
                        try {
                            ch[cr]()
                        } catch (cg) {
                        }
                        az.event.triggered = undefined;
                        if (cq) {
                            ch[co] = cq
                        }
                    }
                }
            }
            return ci.result
        },
        dispatch: function (ce) {
            ce = az.event.fix(ce);
            var ci, cj, cl, ck, cf, cg = [], cd = bY.call(arguments),
                ch = (az._data(this, "events") || {})[ce.type] || [], cm = az.event.special[ce.type] || {};
            cd[0] = ce;
            ce.delegateTarget = this;
            if (cm.preDispatch && cm.preDispatch.call(this, ce) === false) {
                return
            }
            cg = az.event.handlers.call(this, ce, ch);
            ci = 0;
            while ((ck = cg[ci++]) && !ce.isPropagationStopped()) {
                ce.currentTarget = ck.elem;
                cj = 0;
                while ((cf = ck.handlers[cj++]) && !ce.isImmediatePropagationStopped()) {
                    if (!ce.rnamespace || ce.rnamespace.test(cf.namespace)) {
                        ce.handleObj = cf;
                        ce.data = cf.data;
                        cl = ((az.event.special[cf.origType] || {}).handle || cf.handler).apply(ck.elem, cd);
                        if (cl !== undefined) {
                            if ((ce.result = cl) === false) {
                                ce.preventDefault();
                                ce.stopPropagation()
                            }
                        }
                    }
                }
            }
            if (cm.postDispatch) {
                cm.postDispatch.call(this, ce)
            }
            return ce.result
        },
        handlers: function (cf, ci) {
            var cj, ck, cl, cg, ch = [], ce = ci.delegateCount, cd = cf.target;
            if (ce && cd.nodeType && (cf.type !== "click" || isNaN(cf.button) || cf.button < 1)) {
                for (; cd != this; cd = cd.parentNode || this) {
                    if (cd.nodeType === 1 && (cd.disabled !== true || cf.type !== "click")) {
                        ck = [];
                        for (cj = 0; cj < ce; cj++) {
                            cg = ci[cj];
                            cl = cg.selector + " ";
                            if (ck[cl] === undefined) {
                                ck[cl] = cg.needsContext ? az(cl, this).index(cd) > -1 : az.find(cl, this, null, [cd]).length
                            }
                            if (ck[cl]) {
                                ck.push(cg)
                            }
                        }
                        if (ck.length) {
                            ch.push({elem: cd, handlers: ck})
                        }
                    }
                }
            }
            if (ce < ci.length) {
                ch.push({elem: this, handlers: ci.slice(ce)})
            }
            return ch
        },
        fix: function (ce) {
            if (ce[az.expando]) {
                return ce
            }
            var cg, ci, cd, cj = ce.type, ch = ce, cf = this.fixHooks[cj];
            if (!cf) {
                this.fixHooks[cj] = cf = bi.test(cj) ? this.mouseHooks : be.test(cj) ? this.keyHooks : {}
            }
            cd = cf.props ? this.props.concat(cf.props) : this.props;
            ce = new az.Event(ch);
            cg = cd.length;
            while (cg--) {
                ci = cd[cg];
                ce[ci] = ch[ci]
            }
            if (!ce.target) {
                ce.target = ch.srcElement || S
            }
            if (ce.target.nodeType === 3) {
                ce.target = ce.target.parentNode
            }
            ce.metaKey = !!ce.metaKey;
            return cf.filter ? cf.filter(ce, ch) : ce
        },
        props: ("altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which").split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (i, cd) {
                if (i.which == null) {
                    i.which = cd.charCode != null ? cd.charCode : cd.keyCode
                }
                return i
            }
        },
        mouseHooks: {
            props: ("button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement").split(" "),
            filter: function (cf, ci) {
                var i, cg, ce, cd = ci.button, ch = ci.fromElement;
                if (cf.pageX == null && ci.clientX != null) {
                    cg = cf.target.ownerDocument || S;
                    ce = cg.documentElement;
                    i = cg.body;
                    cf.pageX = ci.clientX + (ce && ce.scrollLeft || i && i.scrollLeft || 0) - (ce && ce.clientLeft || i && i.clientLeft || 0);
                    cf.pageY = ci.clientY + (ce && ce.scrollTop || i && i.scrollTop || 0) - (ce && ce.clientTop || i && i.clientTop || 0)
                }
                if (!cf.relatedTarget && ch) {
                    cf.relatedTarget = ch === cf.target ? ci.toElement : ch
                }
                if (!cf.which && cd !== undefined) {
                    cf.which = (cd & 1 ? 1 : (cd & 2 ? 3 : (cd & 4 ? 2 : 0)))
                }
                return cf
            }
        },
        special: {
            load: {noBubble: true}, focus: {
                trigger: function () {
                    if (this !== bQ() && this.focus) {
                        try {
                            this.focus();
                            return false
                        } catch (i) {
                        }
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === bQ() && this.blur) {
                        this.blur();
                        return false
                    }
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if (az.nodeName(this, "input") && this.type === "checkbox" && this.click) {
                        this.click();
                        return false
                    }
                }, _default: function (i) {
                    return az.nodeName(i.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (i) {
                    if (i.result !== undefined && i.originalEvent) {
                        i.originalEvent.returnValue = i.result
                    }
                }
            }
        },
        simulate: function (cf, cd, ce) {
            var i = az.extend(new az.Event(), ce, {type: cf, isSimulated: true});
            az.event.trigger(i, null, cd);
            if (i.isDefaultPrevented()) {
                ce.preventDefault()
            }
        }
    };
    az.removeEvent = S.removeEventListener ? function (i, ce, cd) {
        if (i.removeEventListener) {
            i.removeEventListener(ce, cd)
        }
    } : function (i, cf, cd) {
        var ce = "on" + cf;
        if (i.detachEvent) {
            if (typeof i[ce] === "undefined") {
                i[ce] = null
            }
            i.detachEvent(ce, cd)
        }
    };
    az.Event = function (cd, i) {
        if (!(this instanceof az.Event)) {
            return new az.Event(cd, i)
        }
        if (cd && cd.type) {
            this.originalEvent = cd;
            this.type = cd.type;
            this.isDefaultPrevented = cd.defaultPrevented || cd.defaultPrevented === undefined && cd.returnValue === false ? a3 : a2
        } else {
            this.type = cd
        }
        if (i) {
            az.extend(this, i)
        }
        this.timeStamp = cd && cd.timeStamp || az.now();
        this[az.expando] = true
    };
    az.Event.prototype = {
        constructor: az.Event,
        isDefaultPrevented: a2,
        isPropagationStopped: a2,
        isImmediatePropagationStopped: a2,
        preventDefault: function () {
            var i = this.originalEvent;
            this.isDefaultPrevented = a3;
            if (!i) {
                return
            }
            if (i.preventDefault) {
                i.preventDefault()
            } else {
                i.returnValue = false
            }
        },
        stopPropagation: function () {
            var i = this.originalEvent;
            this.isPropagationStopped = a3;
            if (!i || this.isSimulated) {
                return
            }
            if (i.stopPropagation) {
                i.stopPropagation()
            }
            i.cancelBubble = true
        },
        stopImmediatePropagation: function () {
            var i = this.originalEvent;
            this.isImmediatePropagationStopped = a3;
            if (i && i.stopImmediatePropagation) {
                i.stopImmediatePropagation()
            }
            this.stopPropagation()
        }
    };
    az.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (cd, i) {
        az.event.special[cd] = {
            delegateType: i, bindType: i, handle: function (ce) {
                var ch, ci = this, cg = ce.relatedTarget, cf = ce.handleObj;
                if (!cg || (cg !== ci && !az.contains(ci, cg))) {
                    ce.type = cf.origType;
                    ch = cf.handler.apply(this, arguments);
                    ce.type = i
                }
                return ch
            }
        }
    });
    if (!bZ.submit) {
        az.event.special.submit = {
            setup: function () {
                if (az.nodeName(this, "form")) {
                    return false
                }
                az.event.add(this, "click._submit keypress._submit", function (i) {
                    var cd = i.target,
                        ce = az.nodeName(cd, "input") || az.nodeName(cd, "button") ? az.prop(cd, "form") : undefined;
                    if (ce && !az._data(ce, "submit")) {
                        az.event.add(ce, "submit._submit", function (cf) {
                            cf._submitBubble = true
                        });
                        az._data(ce, "submit", true)
                    }
                })
            }, postDispatch: function (i) {
                if (i._submitBubble) {
                    delete i._submitBubble;
                    if (this.parentNode && !i.isTrigger) {
                        az.event.simulate("submit", this.parentNode, i)
                    }
                }
            }, teardown: function () {
                if (az.nodeName(this, "form")) {
                    return false
                }
                az.event.remove(this, "._submit")
            }
        }
    }
    if (!bZ.change) {
        az.event.special.change = {
            setup: function () {
                if (a6.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") {
                        az.event.add(this, "propertychange._change", function (i) {
                            if (i.originalEvent.propertyName === "checked") {
                                this._justChanged = true
                            }
                        });
                        az.event.add(this, "click._change", function (i) {
                            if (this._justChanged && !i.isTrigger) {
                                this._justChanged = false
                            }
                            az.event.simulate("change", this, i)
                        })
                    }
                    return false
                }
                az.event.add(this, "beforeactivate._change", function (i) {
                    var cd = i.target;
                    if (a6.test(cd.nodeName) && !az._data(cd, "change")) {
                        az.event.add(cd, "change._change", function (ce) {
                            if (this.parentNode && !ce.isSimulated && !ce.isTrigger) {
                                az.event.simulate("change", this.parentNode, ce)
                            }
                        });
                        az._data(cd, "change", true)
                    }
                })
            }, handle: function (cd) {
                var i = cd.target;
                if (this !== i || cd.isSimulated || cd.isTrigger || (i.type !== "radio" && i.type !== "checkbox")) {
                    return cd.handleObj.handler.apply(this, arguments)
                }
            }, teardown: function () {
                az.event.remove(this, "._change");
                return !a6.test(this.nodeName)
            }
        }
    }
    if (!bZ.focusin) {
        az.each({focus: "focusin", blur: "focusout"}, function (ce, i) {
            var cd = function (cf) {
                az.event.simulate(i, cf.target, az.event.fix(cf))
            };
            az.event.special[i] = {
                setup: function () {
                    var cg = this.ownerDocument || this, cf = az._data(cg, i);
                    if (!cf) {
                        cg.addEventListener(ce, cd, true)
                    }
                    az._data(cg, i, (cf || 0) + 1)
                }, teardown: function () {
                    var cg = this.ownerDocument || this, cf = az._data(cg, i) - 1;
                    if (!cf) {
                        cg.removeEventListener(ce, cd, true);
                        az._removeData(cg, i)
                    } else {
                        az._data(cg, i, cf)
                    }
                }
            }
        })
    }
    az.fn.extend({
        on: function (cf, ce, i, cd) {
            return aH(this, cf, ce, i, cd)
        }, one: function (cf, ce, i, cd) {
            return aH(this, cf, ce, i, cd, 1)
        }, off: function (cg, ce, i) {
            var cd, cf;
            if (cg && cg.preventDefault && cg.handleObj) {
                cd = cg.handleObj;
                az(cg.delegateTarget).off(cd.namespace ? cd.origType + "." + cd.namespace : cd.origType, cd.selector, cd.handler);
                return this
            }
            if (typeof cg === "object") {
                for (cf in cg) {
                    this.off(cf, ce, cg[cf])
                }
                return this
            }
            if (ce === false || typeof ce === "function") {
                i = ce;
                ce = undefined
            }
            if (i === false) {
                i = a2
            }
            return this.each(function () {
                az.event.remove(this, cg, i, ce)
            })
        }, trigger: function (cd, i) {
            return this.each(function () {
                az.event.trigger(cd, i, this)
            })
        }, triggerHandler: function (ce, i) {
            var cd = this[0];
            if (cd) {
                return az.event.trigger(ce, i, cd, true)
            }
        }
    });
    var bb = / jQuery\d+="(?:null|\d+)"/g, bo = new RegExp("<(?:" + aD + ")[\\s/>]", "i"),
        bP = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, bn = /<script|<style|<link/i,
        aR = /checked\s*(?:[^=]|=\s*.checked.)/i, bC = /^true\/(.*)/, aT = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        bR = D(S), ab = bR.appendChild(S.createElement("div"));

    function aB(cd, i) {
        return az.nodeName(cd, "table") && az.nodeName(i.nodeType !== 11 ? i : i.firstChild, "tr") ? cd.getElementsByTagName("tbody")[0] || cd.appendChild(cd.ownerDocument.createElement("tbody")) : cd
    }

    function R(i) {
        i.type = (az.find.attr(i, "type") !== null) + "/" + i.type;
        return i
    }

    function a1(i) {
        var cd = bC.exec(i.type);
        if (cd) {
            i.type = cd[1]
        } else {
            i.removeAttribute("type")
        }
        return i
    }

    function x(cj, ce) {
        if (ce.nodeType !== 1 || !az.hasData(cj)) {
            return
        }
        var ck, cg, ch, ci = az._data(cj), cd = az._data(ce, ci), cf = ci.events;
        if (cf) {
            delete cd.handle;
            cd.events = {};
            for (ck in cf) {
                for (cg = 0, ch = cf[ck].length; cg < ch; cg++) {
                    az.event.add(ce, ck, cf[ck][cg])
                }
            }
        }
        if (cd.data) {
            cd.data = az.extend({}, cd.data)
        }
    }

    function Z(cg, cd) {
        var cf, ce, i;
        if (cd.nodeType !== 1) {
            return
        }
        cf = cd.nodeName.toLowerCase();
        if (!bZ.noCloneEvent && cd[az.expando]) {
            i = az._data(cd);
            for (ce in i.events) {
                az.removeEvent(cd, ce, i.handle)
            }
            cd.removeAttribute(az.expando)
        }
        if (cf === "script" && cd.text !== cg.text) {
            R(cd).text = cg.text;
            a1(cd)
        } else {
            if (cf === "object") {
                if (cd.parentNode) {
                    cd.outerHTML = cg.outerHTML
                }
                if (bZ.html5Clone && (cg.innerHTML && !az.trim(cd.innerHTML))) {
                    cd.innerHTML = cg.innerHTML
                }
            } else {
                if (cf === "input" && aQ.test(cg.type)) {
                    cd.defaultChecked = cd.checked = cg.checked;
                    if (cd.value !== cg.value) {
                        cd.value = cg.value
                    }
                } else {
                    if (cf === "option") {
                        cd.defaultSelected = cd.selected = cg.defaultSelected
                    } else {
                        if (cf === "input" || cf === "textarea") {
                            cd.defaultValue = cg.defaultValue
                        }
                    }
                }
            }
        }
    }

    function U(cf, cd, ce, cl) {
        cd = z.apply([], cd);
        var ch, cp, cj, cq, cg, ci, ck = 0, co = cf.length, cm = co - 1, cr = cd[0], cn = az.isFunction(cr);
        if (cn || (co > 1 && typeof cr === "string" && !bZ.checkClone && aR.test(cr))) {
            return cf.each(function (i) {
                var cs = cf.eq(i);
                if (cn) {
                    cd[0] = cr.call(this, i, cs.html())
                }
                U(cs, cd, ce, cl)
            })
        }
        if (co) {
            ci = u(cd, cf[0].ownerDocument, false, cf, cl);
            ch = ci.firstChild;
            if (ci.childNodes.length === 1) {
                ci = ch
            }
            if (ch || cl) {
                cq = az.map(ae(ci, "script"), R);
                cj = cq.length;
                for (; ck < co; ck++) {
                    cp = ci;
                    if (ck !== cm) {
                        cp = az.clone(cp, true, true);
                        if (cj) {
                            az.merge(cq, ae(cp, "script"))
                        }
                    }
                    ce.call(cf[ck], cp, ck)
                }
                if (cj) {
                    cg = cq[cq.length - 1].ownerDocument;
                    az.map(cq, a1);
                    for (ck = 0; ck < cj; ck++) {
                        cp = cq[ck];
                        if (bB.test(cp.type || "") && !az._data(cp, "globalEval") && az.contains(cg, cp)) {
                            if (cp.src) {
                                if (az._evalUrl) {
                                    az._evalUrl(cp.src)
                                }
                            } else {
                                az.globalEval((cp.text || cp.textContent || cp.innerHTML || "").replace(aT, ""))
                            }
                        }
                    }
                }
                ci = ch = null
            }
        }
        return cf
    }

    function a0(cd, ci, cg) {
        var ch, ce = ci ? az.filter(ci, cd) : cd, cf = 0;
        for (; (ch = ce[cf]) != null; cf++) {
            if (!cg && ch.nodeType === 1) {
                az.cleanData(ae(ch))
            }
            if (ch.parentNode) {
                if (cg && az.contains(ch.ownerDocument, ch)) {
                    bS(ae(ch, "script"))
                }
                ch.parentNode.removeChild(ch)
            }
        }
        return cd
    }

    az.extend({
        htmlPrefilter: function (i) {
            return i.replace(bP, "<$1></$2>")
        }, clone: function (ch, ce, cf) {
            var cg, ck, cd, ci, cl, cj = az.contains(ch.ownerDocument, ch);
            if (bZ.html5Clone || az.isXMLDoc(ch) || !bo.test("<" + ch.nodeName + ">")) {
                cd = ch.cloneNode(true)
            } else {
                ab.innerHTML = ch.outerHTML;
                ab.removeChild(cd = ab.firstChild)
            }
            if ((!bZ.noCloneEvent || !bZ.noCloneChecked) && (ch.nodeType === 1 || ch.nodeType === 11) && !az.isXMLDoc(ch)) {
                cg = ae(cd);
                cl = ae(ch);
                for (ci = 0; (ck = cl[ci]) != null; ++ci) {
                    if (cg[ci]) {
                        Z(ck, cg[ci])
                    }
                }
            }
            if (ce) {
                if (cf) {
                    cl = cl || ae(ch);
                    cg = cg || ae(cd);
                    for (ci = 0; (ck = cl[ci]) != null; ci++) {
                        x(ck, cg[ci])
                    }
                } else {
                    x(ch, cd)
                }
            }
            cg = ae(cd, "script");
            if (cg.length > 0) {
                bS(cg, !cj && ae(ch, "script"))
            }
            cg = cl = ck = null;
            return cd
        }, cleanData: function (ch, ci) {
            var cg, cn, ck, cf, cj = 0, cl = az.expando, ce = az.cache, cd = bZ.attributes, cm = az.event.special;
            for (; (cg = ch[cj]) != null; cj++) {
                if (ci || d(cg)) {
                    ck = cg[cl];
                    cf = ck && ce[ck];
                    if (cf) {
                        if (cf.events) {
                            for (cn in cf.events) {
                                if (cm[cn]) {
                                    az.event.remove(cg, cn)
                                } else {
                                    az.removeEvent(cg, cn, cf.handle)
                                }
                            }
                        }
                        if (ce[ck]) {
                            delete ce[ck];
                            if (!cd && typeof cg.removeAttribute !== "undefined") {
                                cg.removeAttribute(cl)
                            } else {
                                cg[cl] = undefined
                            }
                            O.push(ck)
                        }
                    }
                }
            }
        }
    });
    az.fn.extend({
        domManip: U, detach: function (i) {
            return a0(this, i, true)
        }, remove: function (i) {
            return a0(this, i)
        }, text: function (i) {
            return e(this, function (cd) {
                return cd === undefined ? az.text(this) : this.empty().append((this[0] && this[0].ownerDocument || S).createTextNode(cd))
            }, null, i, arguments.length)
        }, append: function () {
            return U(this, arguments, function (i) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var cd = aB(this, i);
                    cd.appendChild(i)
                }
            })
        }, prepend: function () {
            return U(this, arguments, function (i) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var cd = aB(this, i);
                    cd.insertBefore(i, cd.firstChild)
                }
            })
        }, before: function () {
            return U(this, arguments, function (i) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(i, this)
                }
            })
        }, after: function () {
            return U(this, arguments, function (i) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(i, this.nextSibling)
                }
            })
        }, empty: function () {
            var cd, ce = 0;
            for (; (cd = this[ce]) != null; ce++) {
                if (cd.nodeType === 1) {
                    az.cleanData(ae(cd, false))
                }
                while (cd.firstChild) {
                    cd.removeChild(cd.firstChild)
                }
                if (cd.options && az.nodeName(cd, "select")) {
                    cd.options.length = 0
                }
            }
            return this
        }, clone: function (i, cd) {
            i = i == null ? false : i;
            cd = cd == null ? i : cd;
            return this.map(function () {
                return az.clone(this, i, cd)
            })
        }, html: function (i) {
            return e(this, function (ch) {
                var ce = this[0] || {}, cf = 0, cg = this.length;
                if (ch === undefined) {
                    return ce.nodeType === 1 ? ce.innerHTML.replace(bb, "") : undefined
                }
                if (typeof ch === "string" && !bn.test(ch) && (bZ.htmlSerialize || !bo.test(ch)) && (bZ.leadingWhitespace || !bf.test(ch)) && !b9[(bH.exec(ch) || ["", ""])[1].toLowerCase()]) {
                    ch = az.htmlPrefilter(ch);
                    try {
                        for (; cf < cg; cf++) {
                            ce = this[cf] || {};
                            if (ce.nodeType === 1) {
                                az.cleanData(ae(ce, false));
                                ce.innerHTML = ch
                            }
                        }
                        ce = 0
                    } catch (cd) {
                    }
                }
                if (ce) {
                    this.empty().append(ch)
                }
            }, null, i, arguments.length)
        }, replaceWith: function () {
            var i = [];
            return U(this, arguments, function (cd) {
                var ce = this.parentNode;
                if (az.inArray(this, i) < 0) {
                    az.cleanData(ae(this));
                    if (ce) {
                        ce.replaceChild(cd, this)
                    }
                }
            }, i)
        }
    });
    az.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (i, cd) {
        az.fn[i] = function (cj) {
            var ce, cf = 0, ci = [], cg = az(cj), ch = cg.length - 1;
            for (; cf <= ch; cf++) {
                ce = cf === ch ? this : this.clone(true);
                az(cg[cf])[cd](ce);
                aL.apply(ci, ce.get())
            }
            return this.pushStack(ci)
        }
    });
    var ap, V = {HTML: "block", BODY: "block"};

    function f(cf, cd) {
        var ce = az(cd.createElement(cf)).appendTo(cd.body), i = az.css(ce[0], "display");
        ce.detach();
        return i
    }

    function M(ce) {
        var cd = S, i = V[ce];
        if (!i) {
            i = f(ce, cd);
            if (i === "none" || !i) {
                ap = (ap || az("<iframe frameborder='0' width='0' height='0'/>")).appendTo(cd.documentElement);
                cd = (ap[0].contentWindow || ap[0].contentDocument).document;
                cd.write();
                cd.close();
                i = f(ce, cd);
                ap.detach()
            }
            V[ce] = i
        }
        return i
    }

    var bh = (/^margin/);
    var bq = new RegExp("^(" + aI + ")(?!px)[a-z%]+$", "i");
    var b0 = function (ce, ch, cd, i) {
        var ci, cf, cg = {};
        for (cf in ch) {
            cg[cf] = ce.style[cf];
            ce.style[cf] = ch[cf]
        }
        ci = cd.apply(ce, i || []);
        for (cf in ch) {
            ce.style[cf] = cg[cf]
        }
        return ci
    };
    var T = S.documentElement;
    (function () {
        var ch, cg, i, ci, ck, cj, ce = S.createElement("div"), cf = S.createElement("div");
        if (!cf.style) {
            return
        }
        cf.style.cssText = "float:left;opacity:.5";
        bZ.opacity = cf.style.opacity === "0.5";
        bZ.cssFloat = !!cf.style.cssFloat;
        cf.style.backgroundClip = "content-box";
        cf.cloneNode(true).style.backgroundClip = "";
        bZ.clearCloneStyle = cf.style.backgroundClip === "content-box";
        ce = S.createElement("div");
        ce.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute";
        cf.innerHTML = "";
        ce.appendChild(cf);
        bZ.boxSizing = cf.style.boxSizing === "" || cf.style.MozBoxSizing === "" || cf.style.WebkitBoxSizing === "";
        az.extend(bZ, {
            reliableHiddenOffsets: function () {
                if (ch == null) {
                    cd()
                }
                return ci
            }, boxSizingReliable: function () {
                if (ch == null) {
                    cd()
                }
                return i
            }, pixelMarginRight: function () {
                if (ch == null) {
                    cd()
                }
                return cg
            }, pixelPosition: function () {
                if (ch == null) {
                    cd()
                }
                return ch
            }, reliableMarginRight: function () {
                if (ch == null) {
                    cd()
                }
                return ck
            }, reliableMarginLeft: function () {
                if (ch == null) {
                    cd()
                }
                return cj
            }
        });

        function cd() {
            var cl, cm, cn = S.documentElement;
            cn.appendChild(ce);
            cf.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
            ch = i = cj = false;
            cg = ck = true;
            if (b7.getComputedStyle) {
                cm = b7.getComputedStyle(cf);
                ch = (cm || {}).top !== "1%";
                cj = (cm || {}).marginLeft === "2px";
                i = (cm || {width: "4px"}).width === "4px";
                cf.style.marginRight = "50%";
                cg = (cm || {marginRight: "4px"}).marginRight === "4px";
                cl = cf.appendChild(S.createElement("div"));
                cl.style.cssText = cf.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0";
                cl.style.marginRight = cl.style.width = "0";
                cf.style.width = "1px";
                ck = !parseFloat((b7.getComputedStyle(cl) || {}).marginRight);
                cf.removeChild(cl)
            }
            cf.style.display = "none";
            ci = cf.getClientRects().length === 0;
            if (ci) {
                cf.style.display = "";
                cf.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
                cf.childNodes[0].style.borderCollapse = "separate";
                cl = cf.getElementsByTagName("td");
                cl[0].style.cssText = "margin:0;border:0;padding:0;display:none";
                ci = cl[0].offsetHeight === 0;
                if (ci) {
                    cl[0].style.display = "";
                    cl[1].style.display = "none";
                    ci = cl[0].offsetHeight === 0
                }
            }
            cn.removeChild(ce)
        }
    })();
    var aj, K, bv = /^(top|right|bottom|left)$/;
    if (b7.getComputedStyle) {
        aj = function (i) {
            var cd = i.ownerDocument.defaultView;
            if (!cd || !cd.opener) {
                cd = b7
            }
            return cd.getComputedStyle(i)
        };
        K = function (cd, cg, i) {
            var cj, cf, ce, ch, ci = cd.style;
            i = i || aj(cd);
            ch = i ? i.getPropertyValue(cg) || i[cg] : undefined;
            if ((ch === "" || ch === undefined) && !az.contains(cd.ownerDocument, cd)) {
                ch = az.style(cd, cg)
            }
            if (i) {
                if (!bZ.pixelMarginRight() && bq.test(ch) && bh.test(cg)) {
                    cj = ci.width;
                    cf = ci.minWidth;
                    ce = ci.maxWidth;
                    ci.minWidth = ci.maxWidth = ci.width = ch;
                    ch = i.width;
                    ci.width = cj;
                    ci.minWidth = cf;
                    ci.maxWidth = ce
                }
            }
            return ch === undefined ? ch : ch + ""
        }
    } else {
        if (T.currentStyle) {
            aj = function (i) {
                return i.currentStyle
            };
            K = function (cd, cf, i) {
                var ce, ch, ci, cg, cj = cd.style;
                i = i || aj(cd);
                cg = i ? i[cf] : undefined;
                if (cg == null && cj && cj[cf]) {
                    cg = cj[cf]
                }
                if (bq.test(cg) && !bv.test(cf)) {
                    ce = cj.left;
                    ch = cd.runtimeStyle;
                    ci = ch && ch.left;
                    if (ci) {
                        ch.left = cd.currentStyle.left
                    }
                    cj.left = cf === "fontSize" ? "1em" : cg;
                    cg = cj.pixelLeft + "px";
                    cj.left = ce;
                    if (ci) {
                        ch.left = ci
                    }
                }
                return cg === undefined ? cg : cg + "" || "auto"
            }
        }
    }

    function g(i, cd) {
        return {
            get: function () {
                if (i()) {
                    delete this.get;
                    return
                }
                return (this.get = cd).apply(this, arguments)
            }
        }
    }

    var aN = /alpha\([^)]*\)/i, bt = /opacity\s*=\s*([^)]*)/i, aY = /^(none|table(?!-c[ea]).+)/,
        br = new RegExp("^(" + aI + ")(.*)$", "i"), J = {position: "absolute", visibility: "hidden", display: "block"},
        H = {letterSpacing: "0", fontWeight: "400"}, I = ["Webkit", "O", "Moz", "ms"], W = S.createElement("div").style;

    function b5(cf) {
        if (cf in W) {
            return cf
        }
        var cd = cf.charAt(0).toUpperCase() + cf.slice(1), ce = I.length;
        while (ce--) {
            cf = I[ce] + cd;
            if (cf in W) {
                return cf
            }
        }
    }

    function bU(ce, ci) {
        var i, cd, cf, cj = [], cg = 0, ch = ce.length;
        for (; cg < ch; cg++) {
            cd = ce[cg];
            if (!cd.style) {
                continue
            }
            cj[cg] = az._data(cd, "olddisplay");
            i = cd.style.display;
            if (ci) {
                if (!cj[cg] && i === "none") {
                    cd.style.display = ""
                }
                if (cd.style.display === "" && ay(cd)) {
                    cj[cg] = az._data(cd, "olddisplay", M(cd.nodeName))
                }
            } else {
                cf = ay(cd);
                if (i && i !== "none" || !cf) {
                    az._data(cd, "olddisplay", cf ? i : az.css(cd, "display"))
                }
            }
        }
        for (cg = 0; cg < ch; cg++) {
            cd = ce[cg];
            if (!cd.style) {
                continue
            }
            if (!ci || cd.style.display === "none" || cd.style.display === "") {
                cd.style.display = ci ? cj[cg] || "" : "none"
            }
        }
        return ce
    }

    function bT(i, cf, ce) {
        var cd = br.exec(cf);
        return cd ? Math.max(0, cd[1] - (ce || 0)) + (cd[2] || "px") : cf
    }

    function s(cd, ch, ce, cg, ci) {
        var cf = ce === (cg ? "border" : "content") ? 4 : ch === "width" ? 1 : 0, cj = 0;
        for (; cf < 4; cf += 2) {
            if (ce === "margin") {
                cj += az.css(cd, ce + G[cf], true, ci)
            }
            if (cg) {
                if (ce === "content") {
                    cj -= az.css(cd, "padding" + G[cf], true, ci)
                }
                if (ce !== "margin") {
                    cj -= az.css(cd, "border" + G[cf] + "Width", true, ci)
                }
            } else {
                cj += az.css(cd, "padding" + G[cf], true, ci);
                if (ce !== "padding") {
                    cj += az.css(cd, "border" + G[cf] + "Width", true, ci)
                }
            }
        }
        return cj
    }

    function ak(i, cf, cd) {
        var ci = true, ch = cf === "width" ? i.offsetWidth : i.offsetHeight, cg = aj(i),
            ce = bZ.boxSizing && az.css(i, "boxSizing", false, cg) === "border-box";
        if (ch <= 0 || ch == null) {
            ch = K(i, cf, cg);
            if (ch < 0 || ch == null) {
                ch = i.style[cf]
            }
            if (bq.test(ch)) {
                return ch
            }
            ci = ce && (bZ.boxSizingReliable() || ch === i.style[cf]);
            ch = parseFloat(ch) || 0
        }
        return (ch + s(i, cf, cd || (ce ? "border" : "content"), ci, cg)) + "px"
    }

    az.extend({
        cssHooks: {
            opacity: {
                get: function (cd, i) {
                    if (i) {
                        var ce = K(cd, "opacity");
                        return ce === "" ? "1" : ce
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: true,
            columnCount: true,
            fillOpacity: true,
            flexGrow: true,
            flexShrink: true,
            fontWeight: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true
        },
        cssProps: {"float": bZ.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (cd, cg, cl, ce) {
            if (!cd || cd.nodeType === 3 || cd.nodeType === 8 || !cd.style) {
                return
            }
            var ci, ck, cf, ch = az.camelCase(cg), cj = cd.style;
            cg = az.cssProps[ch] || (az.cssProps[ch] = b5(ch) || ch);
            cf = az.cssHooks[cg] || az.cssHooks[ch];
            if (cl !== undefined) {
                ck = typeof cl;
                if (ck === "string" && (ci = aW.exec(cl)) && ci[1]) {
                    cl = j(cd, cg, ci);
                    ck = "number"
                }
                if (cl == null || cl !== cl) {
                    return
                }
                if (ck === "number") {
                    cl += ci && ci[3] || (az.cssNumber[ch] ? "" : "px")
                }
                if (!bZ.clearCloneStyle && cl === "" && cg.indexOf("background") === 0) {
                    cj[cg] = "inherit"
                }
                if (!cf || !("set" in cf) || (cl = cf.set(cd, cl, ce)) !== undefined) {
                    try {
                        cj[cg] = cl
                    } catch (i) {
                    }
                }
            } else {
                if (cf && "get" in cf && (ci = cf.get(cd, false, ce)) !== undefined) {
                    return ci
                }
                return cj[cg]
            }
        },
        css: function (i, cf, cd, ci) {
            var cg, cj, ce, ch = az.camelCase(cf);
            cf = az.cssProps[ch] || (az.cssProps[ch] = b5(ch) || ch);
            ce = az.cssHooks[cf] || az.cssHooks[ch];
            if (ce && "get" in ce) {
                cj = ce.get(i, true, cd)
            }
            if (cj === undefined) {
                cj = K(i, cf, ci)
            }
            if (cj === "normal" && cf in H) {
                cj = H[cf]
            }
            if (cd === "" || cd) {
                cg = parseFloat(cj);
                return cd === true || isFinite(cg) ? cg || 0 : cj
            }
            return cj
        }
    });
    az.each(["height", "width"], function (cd, ce) {
        az.cssHooks[ce] = {
            get: function (cf, i, cg) {
                if (i) {
                    return aY.test(az.css(cf, "display")) && cf.offsetWidth === 0 ? b0(cf, J, function () {
                        return ak(cf, ce, cg)
                    }) : ak(cf, ce, cg)
                }
            }, set: function (i, ch, cf) {
                var cg = cf && aj(i);
                return bT(i, ch, cf ? s(i, ce, cf, bZ.boxSizing && az.css(i, "boxSizing", false, cg) === "border-box", cg) : 0)
            }
        }
    });
    if (!bZ.opacity) {
        az.cssHooks.opacity = {
            get: function (cd, i) {
                return bt.test((i && cd.currentStyle ? cd.currentStyle.filter : cd.style.filter) || "") ? (0.01 * parseFloat(RegExp.$1)) + "" : i ? "1" : ""
            }, set: function (cd, ch) {
                var cg = cd.style, i = cd.currentStyle, cf = az.isNumeric(ch) ? "alpha(opacity=" + ch * 100 + ")" : "",
                    ce = i && i.filter || cg.filter || "";
                cg.zoom = 1;
                if ((ch >= 1 || ch === "") && az.trim(ce.replace(aN, "")) === "" && cg.removeAttribute) {
                    cg.removeAttribute("filter");
                    if (ch === "" || i && !i.filter) {
                        return
                    }
                }
                cg.filter = aN.test(ce) ? ce.replace(aN, cf) : ce + " " + cf
            }
        }
    }
    az.cssHooks.marginRight = g(bZ.reliableMarginRight, function (cd, i) {
        if (i) {
            return b0(cd, {display: "inline-block"}, K, [cd, "marginRight"])
        }
    });
    az.cssHooks.marginLeft = g(bZ.reliableMarginLeft, function (cd, i) {
        if (i) {
            return (parseFloat(K(cd, "marginLeft")) || (az.contains(cd.ownerDocument, cd) ? cd.getBoundingClientRect().left - b0(cd, {marginLeft: 0}, function () {
                return cd.getBoundingClientRect().left
            }) : 0)) + "px"
        }
    });
    az.each({margin: "", padding: "", border: "Width"}, function (i, cd) {
        az.cssHooks[i + cd] = {
            expand: function (ch) {
                var cf = 0, ce = {}, cg = typeof ch === "string" ? ch.split(" ") : [ch];
                for (; cf < 4; cf++) {
                    ce[i + G[cf] + cd] = cg[cf] || cg[cf - 2] || cg[0]
                }
                return ce
            }
        };
        if (!bh.test(i)) {
            az.cssHooks[i + cd].set = bT
        }
    });
    az.fn.extend({
        css: function (i, cd) {
            return e(this, function (ce, ci, ck) {
                var cj, cg, ch = {}, cf = 0;
                if (az.isArray(ci)) {
                    cj = aj(ce);
                    cg = ci.length;
                    for (; cf < cg; cf++) {
                        ch[ci[cf]] = az.css(ce, ci[cf], false, cj)
                    }
                    return ch
                }
                return ck !== undefined ? az.style(ce, ci, ck) : az.css(ce, ci)
            }, i, cd, arguments.length > 1)
        }, show: function () {
            return bU(this, true)
        }, hide: function () {
            return bU(this)
        }, toggle: function (i) {
            if (typeof i === "boolean") {
                return i ? this.show() : this.hide()
            }
            return this.each(function () {
                if (ay(this)) {
                    az(this).show()
                } else {
                    az(this).hide()
                }
            })
        }
    });

    function b4(cd, cf, cg, ce, i) {
        return new b4.prototype.init(cd, cf, cg, ce, i)
    }

    az.Tween = b4;
    b4.prototype = {
        constructor: b4, init: function (cd, cf, cg, ce, i, ch) {
            this.elem = cd;
            this.prop = cg;
            this.easing = i || az.easing._default;
            this.options = cf;
            this.start = this.now = this.cur();
            this.end = ce;
            this.unit = ch || (az.cssNumber[cg] ? "" : "px")
        }, cur: function () {
            var i = b4.propHooks[this.prop];
            return i && i.get ? i.get(this) : b4.propHooks._default.get(this)
        }, run: function (ce) {
            var i, cd = b4.propHooks[this.prop];
            if (this.options.duration) {
                this.pos = i = az.easing[this.easing](ce, this.options.duration * ce, 0, 1, this.options.duration)
            } else {
                this.pos = i = ce
            }
            this.now = (this.end - this.start) * i + this.start;
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this)
            }
            if (cd && cd.set) {
                cd.set(this)
            } else {
                b4.propHooks._default.set(this)
            }
            return this
        }
    };
    b4.prototype.init.prototype = b4.prototype;
    b4.propHooks = {
        _default: {
            get: function (cd) {
                var i;
                if (cd.elem.nodeType !== 1 || cd.elem[cd.prop] != null && cd.elem.style[cd.prop] == null) {
                    return cd.elem[cd.prop]
                }
                i = az.css(cd.elem, cd.prop, "");
                return !i || i === "auto" ? 0 : i
            }, set: function (i) {
                if (az.fx.step[i.prop]) {
                    az.fx.step[i.prop](i)
                } else {
                    if (i.elem.nodeType === 1 && (i.elem.style[az.cssProps[i.prop]] != null || az.cssHooks[i.prop])) {
                        az.style(i.elem, i.prop, i.now + i.unit)
                    } else {
                        i.elem[i.prop] = i.now
                    }
                }
            }
        }
    };
    b4.propHooks.scrollTop = b4.propHooks.scrollLeft = {
        set: function (i) {
            if (i.elem.nodeType && i.elem.parentNode) {
                i.elem[i.prop] = i.now
            }
        }
    };
    az.easing = {
        linear: function (i) {
            return i
        }, swing: function (i) {
            return 0.5 - Math.cos(i * Math.PI) / 2
        }, _default: "swing"
    };
    az.fx = b4.prototype.init;
    az.fx.step = {};
    var ac, b1, a7 = /^(?:toggle|show|hide)$/, bA = /queueHooks$/;

    function B() {
        b7.setTimeout(function () {
            ac = undefined
        });
        return (ac = az.now())
    }

    function ad(cg, cf) {
        var ch, cd = {height: cg}, ce = 0;
        cf = cf ? 1 : 0;
        for (; ce < 4; ce += 2 - cf) {
            ch = G[ce];
            cd["margin" + ch] = cd["padding" + ch] = cg
        }
        if (cf) {
            cd.opacity = cd.width = cg
        }
        return cd
    }

    function F(ci, cg, i) {
        var ch, cd = (q.tweeners[cg] || []).concat(q.tweeners["*"]), ce = 0, cf = cd.length;
        for (; ce < cf; ce++) {
            if ((ch = cd[ce].call(i, cg, ci))) {
                return ch
            }
        }
    }

    function N(cg, cn, ck) {
        var cm, cr, cp, cq, ci, cj, cf, cd, i = this, cl = {}, co = cg.style, ch = cg.nodeType && ay(cg),
            ce = az._data(cg, "fxshow");
        if (!ck.queue) {
            ci = az._queueHooks(cg, "fx");
            if (ci.unqueued == null) {
                ci.unqueued = 0;
                cj = ci.empty.fire;
                ci.empty.fire = function () {
                    if (!ci.unqueued) {
                        cj()
                    }
                }
            }
            ci.unqueued++;
            i.always(function () {
                i.always(function () {
                    ci.unqueued--;
                    if (!az.queue(cg, "fx").length) {
                        ci.empty.fire()
                    }
                })
            })
        }
        if (cg.nodeType === 1 && ("height" in cn || "width" in cn)) {
            ck.overflow = [co.overflow, co.overflowX, co.overflowY];
            cf = az.css(cg, "display");
            cd = cf === "none" ? az._data(cg, "olddisplay") || M(cg.nodeName) : cf;
            if (cd === "inline" && az.css(cg, "float") === "none") {
                if (!bZ.inlineBlockNeedsLayout || M(cg.nodeName) === "inline") {
                    co.display = "inline-block"
                } else {
                    co.zoom = 1
                }
            }
        }
        if (ck.overflow) {
            co.overflow = "hidden";
            if (!bZ.shrinkWrapBlocks()) {
                i.always(function () {
                    co.overflow = ck.overflow[0];
                    co.overflowX = ck.overflow[1];
                    co.overflowY = ck.overflow[2]
                })
            }
        }
        for (cm in cn) {
            cr = cn[cm];
            if (a7.exec(cr)) {
                delete cn[cm];
                cp = cp || cr === "toggle";
                if (cr === (ch ? "hide" : "show")) {
                    if (cr === "show" && ce && ce[cm] !== undefined) {
                        ch = true
                    } else {
                        continue
                    }
                }
                cl[cm] = ce && ce[cm] || az.style(cg, cm)
            } else {
                cf = undefined
            }
        }
        if (!az.isEmptyObject(cl)) {
            if (ce) {
                if ("hidden" in ce) {
                    ch = ce.hidden
                }
            } else {
                ce = az._data(cg, "fxshow", {})
            }
            if (cp) {
                ce.hidden = !ch
            }
            if (ch) {
                az(cg).show()
            } else {
                i.done(function () {
                    az(cg).hide()
                })
            }
            i.done(function () {
                var cs;
                az._removeData(cg, "fxshow");
                for (cs in cl) {
                    az.style(cg, cs, cl[cs])
                }
            });
            for (cm in cl) {
                cq = F(ch ? ce[cm] : 0, cm, i);
                if (!(cm in ce)) {
                    ce[cm] = cq.start;
                    if (ch) {
                        cq.end = cq.start;
                        cq.start = cm === "width" || cm === "height" ? 1 : 0
                    }
                }
            }
        } else {
            if ((cf === "none" ? M(cg.nodeName) : cf) === "inline") {
                co.display = cf
            }
        }
    }

    function aK(cg, ch) {
        var ce, cf, i, ci, cd;
        for (ce in cg) {
            cf = az.camelCase(ce);
            i = ch[cf];
            ci = cg[ce];
            if (az.isArray(ci)) {
                i = ci[1];
                ci = cg[ce] = ci[0]
            }
            if (ce !== cf) {
                cg[cf] = ci;
                delete cg[ce]
            }
            cd = az.cssHooks[cf];
            if (cd && "expand" in cd) {
                ci = cd.expand(ci);
                delete cg[cf];
                for (ce in ci) {
                    if (!(ce in cg)) {
                        cg[ce] = ci[ce];
                        ch[ce] = i
                    }
                }
            } else {
                ch[cf] = i
            }
        }
    }

    function q(ce, ci, ch) {
        var ck, cl, cf = 0, cg = q.prefilters.length, cd = az.Deferred().always(function () {
            delete cm.elem
        }), cm = function () {
            if (cl) {
                return false
            }
            var cn = ac || B(), cr = Math.max(0, i.startTime + i.duration - cn), cs = cr / i.duration || 0, cq = 1 - cs,
                co = 0, cp = i.tweens.length;
            for (; co < cp; co++) {
                i.tweens[co].run(cq)
            }
            cd.notifyWith(ce, [i, cq, cr]);
            if (cq < 1 && cp) {
                return cr
            } else {
                cd.resolveWith(ce, [i]);
                return false
            }
        }, i = cd.promise({
            elem: ce,
            props: az.extend({}, ci),
            opts: az.extend(true, {specialEasing: {}, easing: az.easing._default}, ch),
            originalProperties: ci,
            originalOptions: ch,
            startTime: ac || B(),
            duration: ch.duration,
            tweens: [],
            createTween: function (co, cn) {
                var cp = az.Tween(ce, i.opts, co, cn, i.opts.specialEasing[co] || i.opts.easing);
                i.tweens.push(cp);
                return cp
            },
            stop: function (cn) {
                var co = 0, cp = cn ? i.tweens.length : 0;
                if (cl) {
                    return this
                }
                cl = true;
                for (; co < cp; co++) {
                    i.tweens[co].run(1)
                }
                if (cn) {
                    cd.notifyWith(ce, [i, 1, 0]);
                    cd.resolveWith(ce, [i, cn])
                } else {
                    cd.rejectWith(ce, [i, cn])
                }
                return this
            }
        }), cj = i.props;
        aK(cj, i.opts.specialEasing);
        for (; cf < cg; cf++) {
            ck = q.prefilters[cf].call(i, ce, cj, i.opts);
            if (ck) {
                if (az.isFunction(ck.stop)) {
                    az._queueHooks(i.elem, i.opts.queue).stop = az.proxy(ck.stop, ck)
                }
                return ck
            }
        }
        az.map(cj, F, i);
        if (az.isFunction(i.opts.start)) {
            i.opts.start.call(ce, i)
        }
        az.fx.timer(az.extend(cm, {elem: ce, anim: i, queue: i.opts.queue}));
        return i.progress(i.opts.progress).done(i.opts.done, i.opts.complete).fail(i.opts.fail).always(i.opts.always)
    }

    az.Animation = az.extend(q, {
        tweeners: {
            "*": [function (i, ce) {
                var cd = this.createTween(i, ce);
                j(cd.elem, i, aW.exec(ce), cd);
                return cd
            }]
        }, tweener: function (cg, i) {
            if (az.isFunction(cg)) {
                i = cg;
                cg = ["*"]
            } else {
                cg = cg.match(bp)
            }
            var cf, cd = 0, ce = cg.length;
            for (; cd < ce; cd++) {
                cf = cg[cd];
                q.tweeners[cf] = q.tweeners[cf] || [];
                q.tweeners[cf].unshift(i)
            }
        }, prefilters: [N], prefilter: function (i, cd) {
            if (cd) {
                q.prefilters.unshift(i)
            } else {
                q.prefilters.push(i)
            }
        }
    });
    az.speed = function (cf, i, cd) {
        var ce = cf && typeof cf === "object" ? az.extend({}, cf) : {
            complete: cd || !cd && i || az.isFunction(cf) && cf,
            duration: cf,
            easing: cd && i || i && !az.isFunction(i) && i
        };
        ce.duration = az.fx.off ? 0 : typeof ce.duration === "number" ? ce.duration : ce.duration in az.fx.speeds ? az.fx.speeds[ce.duration] : az.fx.speeds._default;
        if (ce.queue == null || ce.queue === true) {
            ce.queue = "fx"
        }
        ce.old = ce.complete;
        ce.complete = function () {
            if (az.isFunction(ce.old)) {
                ce.old.call(this)
            }
            if (ce.queue) {
                az.dequeue(this, ce.queue)
            }
        };
        return ce
    };
    az.fn.extend({
        fadeTo: function (ce, cf, cd, i) {
            return this.filter(ay).css("opacity", 0).show().end().animate({opacity: cf}, ce, cd, i)
        }, animate: function (ch, ci, ce, i) {
            var cf = az.isEmptyObject(ch), cg = az.speed(ci, ce, i), cd = function () {
                var cj = q(this, az.extend({}, ch), cg);
                if (cf || az._data(this, "finish")) {
                    cj.stop(true)
                }
            };
            cd.finish = cd;
            return cf || cg.queue === false ? this.each(cd) : this.queue(cg.queue, cd)
        }, stop: function (cf, i, cd) {
            var ce = function (cg) {
                var ch = cg.stop;
                delete cg.stop;
                ch(cd)
            };
            if (typeof cf !== "string") {
                cd = i;
                i = cf;
                cf = undefined
            }
            if (i && cf !== false) {
                this.queue(cf || "fx", [])
            }
            return this.each(function () {
                var ch = true, ci = cf != null && cf + "queueHooks", cj = az.timers, cg = az._data(this);
                if (ci) {
                    if (cg[ci] && cg[ci].stop) {
                        ce(cg[ci])
                    }
                } else {
                    for (ci in cg) {
                        if (cg[ci] && cg[ci].stop && bA.test(ci)) {
                            ce(cg[ci])
                        }
                    }
                }
                for (ci = cj.length; ci--;) {
                    if (cj[ci].elem === this && (cf == null || cj[ci].queue === cf)) {
                        cj[ci].anim.stop(cd);
                        ch = false;
                        cj.splice(ci, 1)
                    }
                }
                if (ch || !cd) {
                    az.dequeue(this, cf)
                }
            })
        }, finish: function (i) {
            if (i !== false) {
                i = i || "fx"
            }
            return this.each(function () {
                var cf, cd = az._data(this), ch = cd[i + "queue"], ce = cd[i + "queueHooks"], ci = az.timers,
                    cg = ch ? ch.length : 0;
                cd.finish = true;
                az.queue(this, i, []);
                if (ce && ce.stop) {
                    ce.stop.call(this, true)
                }
                for (cf = ci.length; cf--;) {
                    if (ci[cf].elem === this && ci[cf].queue === i) {
                        ci[cf].anim.stop(true);
                        ci.splice(cf, 1)
                    }
                }
                for (cf = 0; cf < cg; cf++) {
                    if (ch[cf] && ch[cf].finish) {
                        ch[cf].finish.call(this)
                    }
                }
                delete cd.finish
            })
        }
    });
    az.each(["toggle", "show", "hide"], function (ce, cf) {
        var cd = az.fn[cf];
        az.fn[cf] = function (ch, cg, i) {
            return ch == null || typeof ch === "boolean" ? cd.apply(this, arguments) : this.animate(ad(cf, true), ch, cg, i)
        }
    });
    az.each({
        slideDown: ad("show"),
        slideUp: ad("hide"),
        slideToggle: ad("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (i, cd) {
        az.fn[i] = function (cg, cf, ce) {
            return this.animate(cd, cg, cf, ce)
        }
    });
    az.timers = [];
    az.fx.tick = function () {
        var ce, cf = az.timers, cd = 0;
        ac = az.now();
        for (; cd < cf.length; cd++) {
            ce = cf[cd];
            if (!ce() && cf[cd] === ce) {
                cf.splice(cd--, 1)
            }
        }
        if (!cf.length) {
            az.fx.stop()
        }
        ac = undefined
    };
    az.fx.timer = function (i) {
        az.timers.push(i);
        if (i()) {
            az.fx.start()
        } else {
            az.timers.pop()
        }
    };
    az.fx.interval = 13;
    az.fx.start = function () {
        if (!b1) {
            b1 = b7.setInterval(az.fx.tick, az.fx.interval)
        }
    };
    az.fx.stop = function () {
        b7.clearInterval(b1);
        b1 = null
    };
    az.fx.speeds = {slow: 600, fast: 200, _default: 400};
    az.fn.delay = function (i, cd) {
        i = az.fx ? az.fx.speeds[i] || i : i;
        cd = cd || "fx";
        return this.queue(cd, function (cf, ce) {
            var cg = b7.setTimeout(cf, i);
            ce.stop = function () {
                b7.clearTimeout(cg)
            }
        })
    };
    (function () {
        var i, ce = S.createElement("input"), cd = S.createElement("div"), cg = S.createElement("select"),
            cf = cg.appendChild(S.createElement("option"));
        cd = S.createElement("div");
        cd.setAttribute("className", "t");
        cd.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        i = cd.getElementsByTagName("a")[0];
        ce.setAttribute("type", "checkbox");
        cd.appendChild(ce);
        i = cd.getElementsByTagName("a")[0];
        i.style.cssText = "top:1px";
        bZ.getSetAttribute = cd.className !== "t";
        bZ.style = /top/.test(i.getAttribute("style"));
        bZ.hrefNormalized = i.getAttribute("href") === "/a";
        bZ.checkOn = !!ce.value;
        bZ.optSelected = cf.selected;
        bZ.enctype = !!S.createElement("form").enctype;
        cg.disabled = true;
        bZ.optDisabled = !cf.disabled;
        ce = S.createElement("input");
        ce.setAttribute("value", "");
        bZ.input = ce.getAttribute("value") === "";
        ce.value = "t";
        ce.setAttribute("type", "radio");
        bZ.radioValue = ce.value === "t"
    })();
    var bz = /\r/g, bE = /[\x20\t\r\n\f]+/g;
    az.fn.extend({
        val: function (cg) {
            var cd, cf, ce, i = this[0];
            if (!arguments.length) {
                if (i) {
                    cd = az.valHooks[i.type] || az.valHooks[i.nodeName.toLowerCase()];
                    if (cd && "get" in cd && (cf = cd.get(i, "value")) !== undefined) {
                        return cf
                    }
                    cf = i.value;
                    return typeof cf === "string" ? cf.replace(bz, "") : cf == null ? "" : cf
                }
                return
            }
            ce = az.isFunction(cg);
            return this.each(function (ch) {
                var ci;
                if (this.nodeType !== 1) {
                    return
                }
                if (ce) {
                    ci = cg.call(this, ch, az(this).val())
                } else {
                    ci = cg
                }
                if (ci == null) {
                    ci = ""
                } else {
                    if (typeof ci === "number") {
                        ci += ""
                    } else {
                        if (az.isArray(ci)) {
                            ci = az.map(ci, function (cj) {
                                return cj == null ? "" : cj + ""
                            })
                        }
                    }
                }
                cd = az.valHooks[this.type] || az.valHooks[this.nodeName.toLowerCase()];
                if (!cd || !("set" in cd) || cd.set(this, ci, "value") === undefined) {
                    this.value = ci
                }
            })
        }
    });
    az.extend({
        valHooks: {
            option: {
                get: function (i) {
                    var cd = az.find.attr(i, "value");
                    return cd != null ? cd : az.trim(az.text(i)).replace(bE, " ")
                }
            }, select: {
                get: function (cd) {
                    var ck, ci, cj = cd.options, cf = cd.selectedIndex, ch = cd.type === "select-one" || cf < 0,
                        cl = ch ? null : [], cg = ch ? cf + 1 : cj.length, ce = cf < 0 ? cg : ch ? cf : 0;
                    for (; ce < cg; ce++) {
                        ci = cj[ce];
                        if ((ci.selected || ce === cf) && (bZ.optDisabled ? !ci.disabled : ci.getAttribute("disabled") === null) && (!ci.parentNode.disabled || !az.nodeName(ci.parentNode, "optgroup"))) {
                            ck = az(ci).val();
                            if (ch) {
                                return ck
                            }
                            cl.push(ck)
                        }
                    }
                    return cl
                }, set: function (ce, cj) {
                    var ci, cg, ch = ce.options, ck = az.makeArray(cj), cf = ch.length;
                    while (cf--) {
                        cg = ch[cf];
                        if (az.inArray(az.valHooks.option.get(cg), ck) > -1) {
                            try {
                                cg.selected = ci = true
                            } catch (cd) {
                                cg.scrollHeight
                            }
                        } else {
                            cg.selected = false
                        }
                    }
                    if (!ci) {
                        ce.selectedIndex = -1
                    }
                    return ch
                }
            }
        }
    });
    az.each(["radio", "checkbox"], function () {
        az.valHooks[this] = {
            set: function (i, cd) {
                if (az.isArray(cd)) {
                    return (i.checked = az.inArray(az(i).val(), cd) > -1)
                }
            }
        };
        if (!bZ.checkOn) {
            az.valHooks[this].get = function (i) {
                return i.getAttribute("value") === null ? "on" : i.value
            }
        }
    });
    var aC, t, r = az.expr.attrHandle, bN = /^(?:checked|selected)$/i, ah = bZ.getSetAttribute, ai = bZ.input;
    az.fn.extend({
        attr: function (i, cd) {
            return e(this, az.attr, i, cd, arguments.length > 1)
        }, removeAttr: function (i) {
            return this.each(function () {
                az.removeAttr(this, i)
            })
        }
    });
    az.extend({
        attr: function (i, ce, ch) {
            var cg, cd, cf = i.nodeType;
            if (cf === 3 || cf === 8 || cf === 2) {
                return
            }
            if (typeof i.getAttribute === "undefined") {
                return az.prop(i, ce, ch)
            }
            if (cf !== 1 || !az.isXMLDoc(i)) {
                ce = ce.toLowerCase();
                cd = az.attrHooks[ce] || (az.expr.match.bool.test(ce) ? t : aC)
            }
            if (ch !== undefined) {
                if (ch === null) {
                    az.removeAttr(i, ce);
                    return
                }
                if (cd && "set" in cd && (cg = cd.set(i, ch, ce)) !== undefined) {
                    return cg
                }
                i.setAttribute(ce, ch + "");
                return ch
            }
            if (cd && "get" in cd && (cg = cd.get(i, ce)) !== null) {
                return cg
            }
            cg = az.find.attr(i, ce);
            return cg == null ? undefined : cg
        }, attrHooks: {
            type: {
                set: function (i, ce) {
                    if (!bZ.radioValue && ce === "radio" && az.nodeName(i, "input")) {
                        var cd = i.value;
                        i.setAttribute("type", ce);
                        if (cd) {
                            i.value = cd
                        }
                        return ce
                    }
                }
            }
        }, removeAttr: function (ce, ci) {
            var cg, ch, cf = 0, cd = ci && ci.match(bp);
            if (cd && ce.nodeType === 1) {
                while ((cg = cd[cf++])) {
                    ch = az.propFix[cg] || cg;
                    if (az.expr.match.bool.test(cg)) {
                        if (ai && ah || !bN.test(cg)) {
                            ce[ch] = false
                        } else {
                            ce[az.camelCase("default-" + cg)] = ce[ch] = false
                        }
                    } else {
                        az.attr(ce, cg, "")
                    }
                    ce.removeAttribute(ah ? cg : ch)
                }
            }
        }
    });
    t = {
        set: function (i, ce, cd) {
            if (ce === false) {
                az.removeAttr(i, cd)
            } else {
                if (ai && ah || !bN.test(cd)) {
                    i.setAttribute(!ah && az.propFix[cd] || cd, cd)
                } else {
                    i[az.camelCase("default-" + cd)] = i[cd] = true
                }
            }
            return cd
        }
    };
    az.each(az.expr.match.bool.source.match(/\w+/g), function (ce, cf) {
        var cd = r[cf] || az.find.attr;
        if (ai && ah || !bN.test(cf)) {
            r[cf] = function (i, ci, ch) {
                var cj, cg;
                if (!ch) {
                    cg = r[ci];
                    r[ci] = cj;
                    cj = cd(i, ci, ch) != null ? ci.toLowerCase() : null;
                    r[ci] = cg
                }
                return cj
            }
        } else {
            r[cf] = function (i, ch, cg) {
                if (!cg) {
                    return i[az.camelCase("default-" + ch)] ? ch.toLowerCase() : null
                }
            }
        }
    });
    if (!ai || !ah) {
        az.attrHooks.value = {
            set: function (i, ce, cd) {
                if (az.nodeName(i, "input")) {
                    i.defaultValue = ce
                } else {
                    return aC && aC.set(i, ce, cd)
                }
            }
        }
    }
    if (!ah) {
        aC = {
            set: function (i, cf, cd) {
                var ce = i.getAttributeNode(cd);
                if (!ce) {
                    i.setAttributeNode((ce = i.ownerDocument.createAttribute(cd)))
                }
                ce.value = cf += "";
                if (cd === "value" || cf === i.getAttribute(cd)) {
                    return cf
                }
            }
        };
        r.id = r.name = r.coords = function (i, ce, cd) {
            var cf;
            if (!cd) {
                return (cf = i.getAttributeNode(ce)) && cf.value !== "" ? cf.value : null
            }
        };
        az.valHooks.button = {
            get: function (i, cd) {
                var ce = i.getAttributeNode(cd);
                if (ce && ce.specified) {
                    return ce.value
                }
            }, set: aC.set
        };
        az.attrHooks.contenteditable = {
            set: function (i, ce, cd) {
                aC.set(i, ce === "" ? false : ce, cd)
            }
        };
        az.each(["width", "height"], function (cd, ce) {
            az.attrHooks[ce] = {
                set: function (i, cf) {
                    if (cf === "") {
                        i.setAttribute(ce, "auto");
                        return cf
                    }
                }
            }
        })
    }
    if (!bZ.style) {
        az.attrHooks.style = {
            get: function (i) {
                return i.style.cssText || undefined
            }, set: function (i, cd) {
                return (i.style.cssText = cd + "")
            }
        }
    }
    var a4 = /^(?:input|select|textarea|button|object)$/i, aU = /^(?:a|area)$/i;
    az.fn.extend({
        prop: function (i, cd) {
            return e(this, az.prop, i, cd, arguments.length > 1)
        }, removeProp: function (i) {
            i = az.propFix[i] || i;
            return this.each(function () {
                try {
                    this[i] = undefined;
                    delete this[i]
                } catch (cd) {
                }
            })
        }
    });
    az.extend({
        prop: function (i, ce, ch) {
            var cg, cd, cf = i.nodeType;
            if (cf === 3 || cf === 8 || cf === 2) {
                return
            }
            if (cf !== 1 || !az.isXMLDoc(i)) {
                ce = az.propFix[ce] || ce;
                cd = az.propHooks[ce]
            }
            if (ch !== undefined) {
                if (cd && "set" in cd && (cg = cd.set(i, ch, ce)) !== undefined) {
                    return cg
                }
                return (i[ce] = ch)
            }
            if (cd && "get" in cd && (cg = cd.get(i, ce)) !== null) {
                return cg
            }
            return i[ce]
        }, propHooks: {
            tabIndex: {
                get: function (i) {
                    var cd = az.find.attr(i, "tabindex");
                    return cd ? parseInt(cd, 10) : a4.test(i.nodeName) || aU.test(i.nodeName) && i.href ? 0 : -1
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}
    });
    if (!bZ.hrefNormalized) {
        az.each(["href", "src"], function (cd, ce) {
            az.propHooks[ce] = {
                get: function (i) {
                    return i.getAttribute(ce, 4)
                }
            }
        })
    }
    if (!bZ.optSelected) {
        az.propHooks.selected = {
            get: function (i) {
                var cd = i.parentNode;
                if (cd) {
                    cd.selectedIndex;
                    if (cd.parentNode) {
                        cd.parentNode.selectedIndex
                    }
                }
                return null
            }, set: function (i) {
                var cd = i.parentNode;
                if (cd) {
                    cd.selectedIndex;
                    if (cd.parentNode) {
                        cd.parentNode.selectedIndex
                    }
                }
            }
        }
    }
    az.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        az.propFix[this.toLowerCase()] = this
    });
    if (!bZ.enctype) {
        az.propFix.enctype = "encoding"
    }
    var aS = /[\t\r\n\f]/g;

    function af(i) {
        return az.attr(i, "class") || ""
    }

    az.fn.extend({
        addClass: function (cl) {
            var cd, ch, cf, cg, ce, ck, ci, cj = 0;
            if (az.isFunction(cl)) {
                return this.each(function (i) {
                    az(this).addClass(cl.call(this, i, af(this)))
                })
            }
            if (typeof cl === "string" && cl) {
                cd = cl.match(bp) || [];
                while ((ch = this[cj++])) {
                    cg = af(ch);
                    cf = ch.nodeType === 1 && (" " + cg + " ").replace(aS, " ");
                    if (cf) {
                        ck = 0;
                        while ((ce = cd[ck++])) {
                            if (cf.indexOf(" " + ce + " ") < 0) {
                                cf += ce + " "
                            }
                        }
                        ci = az.trim(cf);
                        if (cg !== ci) {
                            az.attr(ch, "class", ci)
                        }
                    }
                }
            }
            return this
        }, removeClass: function (cl) {
            var cd, ch, cf, cg, ce, ck, ci, cj = 0;
            if (az.isFunction(cl)) {
                return this.each(function (i) {
                    az(this).removeClass(cl.call(this, i, af(this)))
                })
            }
            if (!arguments.length) {
                return this.attr("class", "")
            }
            if (typeof cl === "string" && cl) {
                cd = cl.match(bp) || [];
                while ((ch = this[cj++])) {
                    cg = af(ch);
                    cf = ch.nodeType === 1 && (" " + cg + " ").replace(aS, " ");
                    if (cf) {
                        ck = 0;
                        while ((ce = cd[ck++])) {
                            while (cf.indexOf(" " + ce + " ") > -1) {
                                cf = cf.replace(" " + ce + " ", " ")
                            }
                        }
                        ci = az.trim(cf);
                        if (cg !== ci) {
                            az.attr(ch, "class", ci)
                        }
                    }
                }
            }
            return this
        }, toggleClass: function (ce, i) {
            var cd = typeof ce;
            if (typeof i === "boolean" && cd === "string") {
                return i ? this.addClass(ce) : this.removeClass(ce)
            }
            if (az.isFunction(ce)) {
                return this.each(function (cf) {
                    az(this).toggleClass(ce.call(this, cf, af(this), i), i)
                })
            }
            return this.each(function () {
                var cf, ch, ci, cg;
                if (cd === "string") {
                    ch = 0;
                    ci = az(this);
                    cg = ce.match(bp) || [];
                    while ((cf = cg[ch++])) {
                        if (ci.hasClass(cf)) {
                            ci.removeClass(cf)
                        } else {
                            ci.addClass(cf)
                        }
                    }
                } else {
                    if (ce === undefined || cd === "boolean") {
                        cf = af(this);
                        if (cf) {
                            az._data(this, "__className__", cf)
                        }
                        az.attr(this, "class", cf || ce === false ? "" : az._data(this, "__className__") || "")
                    }
                }
            })
        }, hasClass: function (cg) {
            var cd, ce, cf = 0;
            cd = " " + cg + " ";
            while ((ce = this[cf++])) {
                if (ce.nodeType === 1 && (" " + af(ce) + " ").replace(aS, " ").indexOf(cd) > -1) {
                    return true
                }
            }
            return false
        }
    });
    az.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "), function (cd, ce) {
        az.fn[ce] = function (i, cf) {
            return arguments.length > 0 ? this.on(ce, null, i, cf) : this.trigger(ce)
        }
    });
    az.fn.extend({
        hover: function (cd, i) {
            return this.mouseenter(cd).mouseleave(i || cd)
        }
    });
    var aA = b7.location;
    var aF = az.now();
    var bx = (/\?/);
    var bO = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    az.parseJSON = function (i) {
        if (b7.JSON && b7.JSON.parse) {
            return b7.JSON.parse(i + "")
        }
        var ce, cd = null, cf = az.trim(i + "");
        return cf && !az.trim(cf.replace(bO, function (cj, ch, ci, cg) {
            if (ce && ch) {
                cd = 0
            }
            if (cd === 0) {
                return cj
            }
            ce = ci || ch;
            cd += !cg - !ci;
            return ""
        })) ? (Function("return " + cf))() : az.error("Invalid JSON: " + i)
    };
    az.parseXML = function (i) {
        var cf, ce;
        if (!i || typeof i !== "string") {
            return null
        }
        try {
            if (b7.DOMParser) {
                ce = new b7.DOMParser();
                cf = ce.parseFromString(i, "text/xml")
            } else {
                cf = new b7.ActiveXObject("Microsoft.XMLDOM");
                cf.async = "false";
                cf.loadXML(i)
            }
        } catch (cd) {
            cf = undefined
        }
        if (!cf || !cf.documentElement || cf.getElementsByTagName("parsererror").length) {
            az.error("Invalid XML: " + i)
        }
        return cf
    };
    var a8 = /#.*$/, bK = /([?&])_=[^&]*/, a9 = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        bg = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, bm = /^(?:GET|HEAD)$/, bw = /^\/\//,
        bM = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, aJ = {}, b3 = {}, p = "*/".concat("*"),
        n = aA.href, o = bM.exec(n.toLowerCase()) || [];

    function h(i) {
        return function (ce, cg) {
            if (typeof ce !== "string") {
                cg = ce;
                ce = "*"
            }
            var cd, ch = 0, cf = ce.toLowerCase().match(bp) || [];
            if (az.isFunction(cg)) {
                while ((cd = cf[ch++])) {
                    if (cd.charAt(0) === "+") {
                        cd = cd.slice(1) || "*";
                        (i[cd] = i[cd] || []).unshift(cg)
                    } else {
                        (i[cd] = i[cd] || []).push(cg)
                    }
                }
            }
        }
    }

    function at(ci, cf, cg, ce) {
        var cd = {}, ch = (ci === b3);

        function i(cj) {
            var ck;
            cd[cj] = true;
            az.each(ci[cj] || [], function (cl, cn) {
                var cm = cn(cf, cg, ce);
                if (typeof cm === "string" && !ch && !cd[cm]) {
                    cf.dataTypes.unshift(cm);
                    i(cm);
                    return false
                } else {
                    if (ch) {
                        return !(ck = cm)
                    }
                }
            });
            return ck
        }

        return i(cf.dataTypes[0]) || !cd["*"] && i("*")
    }

    function l(cg, cf) {
        var i, ce, cd = az.ajaxSettings.flatOptions || {};
        for (ce in cf) {
            if (cf[ce] !== undefined) {
                (cd[ce] ? cg : (i || (i = {})))[ce] = cf[ce]
            }
        }
        if (i) {
            az.extend(true, cg, i)
        }
        return cg
    }

    function m(cj, ch, ci) {
        var cg, cd, cf, ck, i = cj.contents, ce = cj.dataTypes;
        while (ce[0] === "*") {
            ce.shift();
            if (cd === undefined) {
                cd = cj.mimeType || ch.getResponseHeader("Content-Type")
            }
        }
        if (cd) {
            for (ck in i) {
                if (i[ck] && i[ck].test(cd)) {
                    ce.unshift(ck);
                    break
                }
            }
        }
        if (ce[0] in ci) {
            cf = ce[0]
        } else {
            for (ck in ci) {
                if (!ce[0] || cj.converters[ck + " " + ce[0]]) {
                    cf = ck;
                    break
                }
                if (!cg) {
                    cg = ck
                }
            }
            cf = cf || cg
        }
        if (cf) {
            if (cf !== ce[0]) {
                ce.unshift(cf)
            }
            return ci[cf]
        }
    }

    function k(cm, cl, cj, ci) {
        var cd, cf, i, cn, ck, ce = {}, cg = cm.dataTypes.slice();
        if (cg[1]) {
            for (i in cm.converters) {
                ce[i.toLowerCase()] = cm.converters[i]
            }
        }
        cf = cg.shift();
        while (cf) {
            if (cm.responseFields[cf]) {
                cj[cm.responseFields[cf]] = cl
            }
            if (!ck && ci && cm.dataFilter) {
                cl = cm.dataFilter(cl, cm.dataType)
            }
            ck = cf;
            cf = cg.shift();
            if (cf) {
                if (cf === "*") {
                    cf = ck
                } else {
                    if (ck !== "*" && ck !== cf) {
                        i = ce[ck + " " + cf] || ce["* " + cf];
                        if (!i) {
                            for (cd in ce) {
                                cn = cd.split(" ");
                                if (cn[1] === cf) {
                                    i = ce[ck + " " + cn[0]] || ce["* " + cn[0]];
                                    if (i) {
                                        if (i === true) {
                                            i = ce[cd]
                                        } else {
                                            if (ce[cd] !== true) {
                                                cf = cn[0];
                                                cg.unshift(cn[1])
                                            }
                                        }
                                        break
                                    }
                                }
                            }
                        }
                        if (i !== true) {
                            if (i && cm["throws"]) {
                                cl = i(cl)
                            } else {
                                try {
                                    cl = i(cl)
                                } catch (ch) {
                                    return {
                                        state: "parsererror",
                                        error: i ? ch : "No conversion from " + ck + " to " + cf
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return {state: "success", data: cl}
    }

    az.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: n,
            type: "GET",
            isLocal: bg.test(o[1]),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": p,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": true, "text json": az.parseJSON, "text xml": az.parseXML},
            flatOptions: {url: true, context: true}
        },
        ajaxSetup: function (cd, i) {
            return i ? l(l(cd, az.ajaxSettings), i) : l(az.ajaxSettings, cd)
        },
        ajaxPrefilter: h(aJ),
        ajaxTransport: h(b3),
        ajax: function (cz, cn) {
            if (typeof cz === "object") {
                cn = cz;
                cz = undefined
            }
            cn = cn || {};
            var co, cl, cd, cs, cx, cj, cy, cr, ct = az.ajaxSetup({}, cn), ce = ct.context || ct,
                ck = ct.context && (ce.nodeType || ce.jquery) ? az(ce) : az.event, cg = az.Deferred(),
                cf = az.Callbacks("once memory"), cv = ct.statusCode || {}, cp = {}, cq = {}, cu = 0, cw = "canceled",
                cm = {
                    readyState: 0, getResponseHeader: function (i) {
                        var cA;
                        if (cu === 2) {
                            if (!cr) {
                                cr = {};
                                while ((cA = a9.exec(cs))) {
                                    cr[cA[1].toLowerCase()] = cA[2]
                                }
                            }
                            cA = cr[i.toLowerCase()]
                        }
                        return cA == null ? null : cA
                    }, getAllResponseHeaders: function () {
                        return cu === 2 ? cs : null
                    }, setRequestHeader: function (cA, cB) {
                        var i = cA.toLowerCase();
                        if (!cu) {
                            cA = cq[i] = cq[i] || cA;
                            cp[cA] = cB
                        }
                        return this
                    }, overrideMimeType: function (i) {
                        if (!cu) {
                            ct.mimeType = i
                        }
                        return this
                    }, statusCode: function (cA) {
                        var i;
                        if (cA) {
                            if (cu < 2) {
                                for (i in cA) {
                                    cv[i] = [cv[i], cA[i]]
                                }
                            } else {
                                cm.always(cA[cm.status])
                            }
                        }
                        return this
                    }, abort: function (cA) {
                        var i = cA || cw;
                        if (cy) {
                            cy.abort(i)
                        }
                        ch(0, i);
                        return this
                    }
                };
            cg.promise(cm).complete = cf.add;
            cm.success = cm.done;
            cm.error = cm.fail;
            ct.url = ((cz || ct.url || n) + "").replace(a8, "").replace(bw, o[1] + "//");
            ct.type = cn.method || cn.type || ct.method || ct.type;
            ct.dataTypes = az.trim(ct.dataType || "*").toLowerCase().match(bp) || [""];
            if (ct.crossDomain == null) {
                co = bM.exec(ct.url.toLowerCase());
                ct.crossDomain = !!(co && (co[1] !== o[1] || co[2] !== o[2] || (co[3] || (co[1] === "http:" ? "80" : "443")) !== (o[3] || (o[1] === "http:" ? "80" : "443"))))
            }
            if (ct.data && ct.processData && typeof ct.data !== "string") {
                ct.data = az.param(ct.data, ct.traditional)
            }
            at(aJ, ct, cn, cm);
            if (cu === 2) {
                return cm
            }
            cj = az.event && ct.global;
            if (cj && az.active++ === 0) {
                az.event.trigger("ajaxStart")
            }
            ct.type = ct.type.toUpperCase();
            ct.hasContent = !bm.test(ct.type);
            cd = ct.url;
            if (!ct.hasContent) {
                if (ct.data) {
                    cd = (ct.url += (bx.test(cd) ? "&" : "?") + ct.data);
                    delete ct.data
                }
                if (ct.cache === false) {
                    ct.url = bK.test(cd) ? cd.replace(bK, "$1_=" + aF++) : cd + (bx.test(cd) ? "&" : "?") + "_=" + aF++
                }
            }
            if (ct.ifModified) {
                if (az.lastModified[cd]) {
                    cm.setRequestHeader("If-Modified-Since", az.lastModified[cd])
                }
                if (az.etag[cd]) {
                    cm.setRequestHeader("If-None-Match", az.etag[cd])
                }
            }
            if (ct.data && ct.hasContent && ct.contentType !== false || cn.contentType) {
                cm.setRequestHeader("Content-Type", ct.contentType)
            }
            cm.setRequestHeader("Accept", ct.dataTypes[0] && ct.accepts[ct.dataTypes[0]] ? ct.accepts[ct.dataTypes[0]] + (ct.dataTypes[0] !== "*" ? ", " + p + "; q=0.01" : "") : ct.accepts["*"]);
            for (cl in ct.headers) {
                cm.setRequestHeader(cl, ct.headers[cl])
            }
            if (ct.beforeSend && (ct.beforeSend.call(ce, cm, ct) === false || cu === 2)) {
                return cm.abort()
            }
            cw = "abort";
            for (cl in {success: 1, error: 1, complete: 1}) {
                cm[cl](ct[cl])
            }
            cy = at(b3, ct, cn, cm);
            if (!cy) {
                ch(-1, "No Transport")
            } else {
                cm.readyState = 1;
                if (cj) {
                    ck.trigger("ajaxSend", [cm, ct])
                }
                if (cu === 2) {
                    return cm
                }
                if (ct.async && ct.timeout > 0) {
                    cx = b7.setTimeout(function () {
                        cm.abort("timeout")
                    }, ct.timeout)
                }
                try {
                    cu = 1;
                    cy.send(cp, ch)
                } catch (ci) {
                    if (cu < 2) {
                        ch(-1, ci)
                    } else {
                        throw ci
                    }
                }
            }

            function ch(cG, cD, cF, cA) {
                var cB, cI, i, cE, cC, cH = cD;
                if (cu === 2) {
                    return
                }
                cu = 2;
                if (cx) {
                    b7.clearTimeout(cx)
                }
                cy = undefined;
                cs = cA || "";
                cm.readyState = cG > 0 ? 4 : 0;
                cB = cG >= 200 && cG < 300 || cG === 304;
                if (cF) {
                    cE = m(ct, cm, cF)
                }
                cE = k(ct, cE, cm, cB);
                if (cB) {
                    if (ct.ifModified) {
                        cC = cm.getResponseHeader("Last-Modified");
                        if (cC) {
                            az.lastModified[cd] = cC
                        }
                        cC = cm.getResponseHeader("etag");
                        if (cC) {
                            az.etag[cd] = cC
                        }
                    }
                    if (cG === 204 || ct.type === "HEAD") {
                        cH = "nocontent"
                    } else {
                        if (cG === 304) {
                            cH = "notmodified"
                        } else {
                            cH = cE.state;
                            cI = cE.data;
                            i = cE.error;
                            cB = !i
                        }
                    }
                } else {
                    i = cH;
                    if (cG || !cH) {
                        cH = "error";
                        if (cG < 0) {
                            cG = 0
                        }
                    }
                }
                cm.status = cG;
                cm.statusText = (cD || cH) + "";
                if (cB) {
                    cg.resolveWith(ce, [cI, cH, cm])
                } else {
                    cg.rejectWith(ce, [cm, cH, i])
                }
                cm.statusCode(cv);
                cv = undefined;
                if (cj) {
                    ck.trigger(cB ? "ajaxSuccess" : "ajaxError", [cm, ct, cB ? cI : i])
                }
                cf.fireWith(ce, [cm, cH]);
                if (cj) {
                    ck.trigger("ajaxComplete", [cm, ct]);
                    if (!(--az.active)) {
                        az.event.trigger("ajaxStop")
                    }
                }
            }

            return cm
        },
        getJSON: function (ce, cd, i) {
            return az.get(ce, cd, i, "json")
        },
        getScript: function (cd, i) {
            return az.get(cd, undefined, i, "script")
        }
    });
    az.each(["get", "post"], function (cd, ce) {
        az[ce] = function (ch, cf, i, cg) {
            if (az.isFunction(cf)) {
                cg = cg || i;
                i = cf;
                cf = undefined
            }
            return az.ajax(az.extend({
                url: ch,
                type: ce,
                dataType: cg,
                data: cf,
                success: i
            }, az.isPlainObject(ch) && ch))
        }
    });
    az._evalUrl = function (i) {
        return az.ajax({
            url: i,
            type: "GET",
            dataType: "script",
            cache: true,
            async: false,
            global: false,
            "throws": true
        })
    };
    az.fn.extend({
        wrapAll: function (i) {
            if (az.isFunction(i)) {
                return this.each(function (ce) {
                    az(this).wrapAll(i.call(this, ce))
                })
            }
            if (this[0]) {
                var cd = az(i, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    cd.insertBefore(this[0])
                }
                cd.map(function () {
                    var ce = this;
                    while (ce.firstChild && ce.firstChild.nodeType === 1) {
                        ce = ce.firstChild
                    }
                    return ce
                }).append(this)
            }
            return this
        }, wrapInner: function (i) {
            if (az.isFunction(i)) {
                return this.each(function (cd) {
                    az(this).wrapInner(i.call(this, cd))
                })
            }
            return this.each(function () {
                var ce = az(this), cd = ce.contents();
                if (cd.length) {
                    cd.wrapAll(i)
                } else {
                    ce.append(i)
                }
            })
        }, wrap: function (i) {
            var cd = az.isFunction(i);
            return this.each(function (ce) {
                az(this).wrapAll(cd ? i.call(this, ce) : i)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                if (!az.nodeName(this, "body")) {
                    az(this).replaceWith(this.childNodes)
                }
            }).end()
        }
    });

    function ag(i) {
        return i.style && i.style.display || az.css(i, "display")
    }

    function Y(i) {
        if (!az.contains(i.ownerDocument || S, i)) {
            return true
        }
        while (i && i.nodeType === 1) {
            if (ag(i) === "none" || i.type === "hidden") {
                return true
            }
            i = i.parentNode
        }
        return false
    }

    az.expr.filters.hidden = function (i) {
        return bZ.reliableHiddenOffsets() ? (i.offsetWidth <= 0 && i.offsetHeight <= 0 && !i.getClientRects().length) : Y(i)
    };
    az.expr.filters.visible = function (i) {
        return !az.expr.filters.hidden(i)
    };
    var aM = /%20/g, aP = /\[\]$/, aV = /\r?\n/g, bG = /^(?:submit|button|image|reset|file)$/i,
        bF = /^(?:input|select|textarea|keygen)/i;

    function v(cf, ce, cg, i) {
        var cd;
        if (az.isArray(ce)) {
            az.each(ce, function (ch, ci) {
                if (cg || aP.test(cf)) {
                    i(cf, ci)
                } else {
                    v(cf + "[" + (typeof ci === "object" && ci != null ? ch : "") + "]", ci, cg, i)
                }
            })
        } else {
            if (!cg && az.type(ce) === "object") {
                for (cd in ce) {
                    v(cf + "[" + cd + "]", ce[cd], cg, i)
                }
            } else {
                i(cf, ce)
            }
        }
    }

    az.param = function (i, cg) {
        var ce, cf = [], cd = function (ch, ci) {
            ci = az.isFunction(ci) ? ci() : (ci == null ? "" : ci);
            cf[cf.length] = encodeURIComponent(ch) + "=" + encodeURIComponent(ci)
        };
        if (cg === undefined) {
            cg = az.ajaxSettings && az.ajaxSettings.traditional
        }
        if (az.isArray(i) || (i.jquery && !az.isPlainObject(i))) {
            az.each(i, function () {
                cd(this.name, this.value)
            })
        } else {
            for (ce in i) {
                v(ce, i[ce], cg, cd)
            }
        }
        return cf.join("&").replace(aM, "+")
    };
    az.fn.extend({
        serialize: function () {
            return az.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var i = az.prop(this, "elements");
                return i ? az.makeArray(i) : this
            }).filter(function () {
                var i = this.type;
                return this.name && !az(this).is(":disabled") && bF.test(this.nodeName) && !bG.test(i) && (this.checked || !aQ.test(i))
            }).map(function (ce, cd) {
                var cf = az(this).val();
                return cf == null ? null : az.isArray(cf) ? az.map(cf, function (i) {
                    return {name: cd.name, value: i.replace(aV, "\r\n")}
                }) : {name: cd.name, value: cf.replace(aV, "\r\n")}
            }).get()
        }
    });
    az.ajaxSettings.xhr = b7.ActiveXObject !== undefined ? function () {
        if (this.isLocal) {
            return A()
        }
        if (S.documentMode > 8) {
            return E()
        }
        return /^(get|post|head|put|delete|options)$/i.test(this.type) && E() || A()
    } : E;
    var cb = 0, ca = {}, cc = az.ajaxSettings.xhr();
    if (b7.attachEvent) {
        b7.attachEvent("onunload", function () {
            for (var i in ca) {
                ca[i](undefined, true)
            }
        })
    }
    bZ.cors = !!cc && ("withCredentials" in cc);
    cc = bZ.ajax = !!cc;
    if (cc) {
        az.ajaxTransport(function (cd) {
            if (!cd.crossDomain || bZ.cors) {
                var i;
                return {
                    send: function (cf, ce) {
                        var cg, ci = cd.xhr(), ch = ++cb;
                        ci.open(cd.type, cd.url, cd.async, cd.username, cd.password);
                        if (cd.xhrFields) {
                            for (cg in cd.xhrFields) {
                                ci[cg] = cd.xhrFields[cg]
                            }
                        }
                        if (cd.mimeType && ci.overrideMimeType) {
                            ci.overrideMimeType(cd.mimeType)
                        }
                        if (!cd.crossDomain && !cf["X-Requested-With"]) {
                            cf["X-Requested-With"] = "XMLHttpRequest"
                        }
                        for (cg in cf) {
                            if (cf[cg] !== undefined) {
                                ci.setRequestHeader(cg, cf[cg] + "")
                            }
                        }
                        ci.send((cd.hasContent && cd.data) || null);
                        i = function (cj, cl) {
                            var cn, co, cm;
                            if (i && (cl || ci.readyState === 4)) {
                                delete ca[ch];
                                i = undefined;
                                ci.onreadystatechange = az.noop;
                                if (cl) {
                                    if (ci.readyState !== 4) {
                                        ci.abort()
                                    }
                                } else {
                                    cm = {};
                                    cn = ci.status;
                                    if (typeof ci.responseText === "string") {
                                        cm.text = ci.responseText
                                    }
                                    try {
                                        co = ci.statusText
                                    } catch (ck) {
                                        co = ""
                                    }
                                    if (!cn && cd.isLocal && !cd.crossDomain) {
                                        cn = cm.text ? 200 : 404
                                    } else {
                                        if (cn === 1223) {
                                            cn = 204
                                        }
                                    }
                                }
                            }
                            if (cm) {
                                ce(cn, co, cm, ci.getAllResponseHeaders())
                            }
                        };
                        if (!cd.async) {
                            i()
                        } else {
                            if (ci.readyState === 4) {
                                b7.setTimeout(i)
                            } else {
                                ci.onreadystatechange = ca[ch] = i
                            }
                        }
                    }, abort: function () {
                        if (i) {
                            i(undefined, true)
                        }
                    }
                }
            }
        })
    }

    function E() {
        try {
            return new b7.XMLHttpRequest()
        } catch (i) {
        }
    }

    function A() {
        try {
            return new b7.ActiveXObject("Microsoft.XMLHTTP")
        } catch (i) {
        }
    }

    az.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (i) {
                az.globalEval(i);
                return i
            }
        }
    });
    az.ajaxPrefilter("script", function (i) {
        if (i.cache === undefined) {
            i.cache = false
        }
        if (i.crossDomain) {
            i.type = "GET";
            i.global = false
        }
    });
    az.ajaxTransport("script", function (cd) {
        if (cd.crossDomain) {
            var ce, i = S.head || az("head")[0] || S.documentElement;
            return {
                send: function (cf, cg) {
                    ce = S.createElement("script");
                    ce.async = true;
                    if (cd.scriptCharset) {
                        ce.charset = cd.scriptCharset
                    }
                    ce.src = cd.url;
                    ce.onload = ce.onreadystatechange = function (ch, ci) {
                        if (ci || !ce.readyState || /loaded|complete/.test(ce.readyState)) {
                            ce.onload = ce.onreadystatechange = null;
                            if (ce.parentNode) {
                                ce.parentNode.removeChild(ce)
                            }
                            ce = null;
                            if (!ci) {
                                cg(200, "success")
                            }
                        }
                    };
                    i.insertBefore(ce, i.firstChild)
                }, abort: function () {
                    if (ce) {
                        ce.onload(undefined, true)
                    }
                }
            }
        }
    });
    var aG = [], bd = /(=)\?(?=&|$)|\?\?/;
    az.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var i = aG.pop() || (az.expando + "_" + (aF++));
            this[i] = true;
            return i
        }
    });
    az.ajaxPrefilter("json jsonp", function (ci, cf, cd) {
        var i, cg, ch,
            ce = ci.jsonp !== false && (bd.test(ci.url) ? "url" : typeof ci.data === "string" && (ci.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && bd.test(ci.data) && "data");
        if (ce || ci.dataTypes[0] === "jsonp") {
            i = ci.jsonpCallback = az.isFunction(ci.jsonpCallback) ? ci.jsonpCallback() : ci.jsonpCallback;
            if (ce) {
                ci[ce] = ci[ce].replace(bd, "$1" + i)
            } else {
                if (ci.jsonp !== false) {
                    ci.url += (bx.test(ci.url) ? "&" : "?") + ci.jsonp + "=" + i
                }
            }
            ci.converters["script json"] = function () {
                if (!ch) {
                    az.error(i + " was not called")
                }
                return ch[0]
            };
            ci.dataTypes[0] = "json";
            cg = b7[i];
            b7[i] = function () {
                ch = arguments
            };
            cd.always(function () {
                if (cg === undefined) {
                    az(b7).removeProp(i)
                } else {
                    b7[i] = cg
                }
                if (ci[i]) {
                    ci.jsonpCallback = cf.jsonpCallback;
                    aG.push(i)
                }
                if (ch && az.isFunction(cg)) {
                    cg(ch[0])
                }
                ch = cg = undefined
            });
            return "script"
        }
    });
    az.parseHTML = function (cd, i, ce) {
        if (!cd || typeof cd !== "string") {
            return null
        }
        if (typeof i === "boolean") {
            ce = i;
            i = false
        }
        i = i || S;
        var cf = bD.exec(cd), cg = !ce && [];
        if (cf) {
            return [i.createElement(cf[1])]
        }
        cf = u([cd], i, cg);
        if (cg && cg.length) {
            az(cg).remove()
        }
        return az.merge([], cf.childNodes)
    };
    var c = az.fn.load;
    az.fn.load = function (cj, ce, i) {
        if (typeof cj !== "string" && c) {
            return c.apply(this, arguments)
        }
        var cg, ci, cf, ch = this, cd = cj.indexOf(" ");
        if (cd > -1) {
            cg = az.trim(cj.slice(cd, cj.length));
            cj = cj.slice(0, cd)
        }
        if (az.isFunction(ce)) {
            i = ce;
            ce = undefined
        } else {
            if (ce && typeof ce === "object") {
                ci = "POST"
            }
        }
        if (ch.length > 0) {
            az.ajax({url: cj, type: ci || "GET", dataType: "html", data: ce}).done(function (ck) {
                cf = arguments;
                ch.html(cg ? az("<div>").append(az.parseHTML(ck)).find(cg) : ck)
            }).always(i && function (ck, cl) {
                ch.each(function () {
                    i.apply(this, cf || [ck.responseText, cl, ck])
                })
            })
        }
        return this
    };
    az.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (cd, ce) {
        az.fn[ce] = function (i) {
            return this.on(ce, i)
        }
    });
    az.expr.filters.animated = function (i) {
        return az.grep(az.timers, function (cd) {
            return i === cd.elem
        }).length
    };

    function al(i) {
        return az.isWindow(i) ? i : i.nodeType === 9 ? i.defaultView || i.parentWindow : false
    }

    az.offset = {
        setOffset: function (cl, cn, cm) {
            var cj, ch, cf, ck, ci, ce, cd, co = az.css(cl, "position"), cg = az(cl), cp = {};
            if (co === "static") {
                cl.style.position = "relative"
            }
            ci = cg.offset();
            cf = az.css(cl, "top");
            ce = az.css(cl, "left");
            cd = (co === "absolute" || co === "fixed") && az.inArray("auto", [cf, ce]) > -1;
            if (cd) {
                cj = cg.position();
                ck = cj.top;
                ch = cj.left
            } else {
                ck = parseFloat(cf) || 0;
                ch = parseFloat(ce) || 0
            }
            if (az.isFunction(cn)) {
                cn = cn.call(cl, cm, az.extend({}, ci))
            }
            if (cn.top != null) {
                cp.top = (cn.top - ci.top) + ck
            }
            if (cn.left != null) {
                cp.left = (cn.left - ci.left) + ch
            }
            if ("using" in cn) {
                cn.using.call(cl, cp)
            } else {
                cg.css(cp)
            }
        }
    };
    az.fn.extend({
        offset: function (cg) {
            if (arguments.length) {
                return cg === undefined ? this : this.each(function (ci) {
                    az.offset.setOffset(this, cg, ci)
                })
            }
            var ce, ch, i = {top: 0, left: 0}, cf = this[0], cd = cf && cf.ownerDocument;
            if (!cd) {
                return
            }
            ce = cd.documentElement;
            if (!az.contains(ce, cf)) {
                return i
            }
            if (typeof cf.getBoundingClientRect !== "undefined") {
                i = cf.getBoundingClientRect()
            }
            ch = al(cd);
            return {
                top: i.top + (ch.pageYOffset || ce.scrollTop) - (ce.clientTop || 0),
                left: i.left + (ch.pageXOffset || ce.scrollLeft) - (ce.clientLeft || 0)
            }
        }, position: function () {
            if (!this[0]) {
                return
            }
            var ce, cd, cf = {top: 0, left: 0}, i = this[0];
            if (az.css(i, "position") === "fixed") {
                cd = i.getBoundingClientRect()
            } else {
                ce = this.offsetParent();
                cd = this.offset();
                if (!az.nodeName(ce[0], "html")) {
                    cf = ce.offset()
                }
                cf.top += az.css(ce[0], "borderTopWidth", true);
                cf.left += az.css(ce[0], "borderLeftWidth", true)
            }
            return {
                top: cd.top - cf.top - az.css(i, "marginTop", true),
                left: cd.left - cf.left - az.css(i, "marginLeft", true)
            }
        }, offsetParent: function () {
            return this.map(function () {
                var i = this.offsetParent;
                while (i && (!az.nodeName(i, "html") && az.css(i, "position") === "static")) {
                    i = i.offsetParent
                }
                return i || T
            })
        }
    });
    az.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (i, cd) {
        var ce = /Y/.test(cd);
        az.fn[i] = function (cf) {
            return e(this, function (cg, ch, ci) {
                var cj = al(cg);
                if (ci === undefined) {
                    return cj ? (cd in cj) ? cj[cd] : cj.document.documentElement[ch] : cg[ch]
                }
                if (cj) {
                    cj.scrollTo(!ce ? ci : az(cj).scrollLeft(), ce ? ci : az(cj).scrollTop())
                } else {
                    cg[ch] = ci
                }
            }, i, cf, arguments.length, null)
        }
    });
    az.each(["top", "left"], function (cd, ce) {
        az.cssHooks[ce] = g(bZ.pixelPosition, function (cf, i) {
            if (i) {
                i = K(cf, ce);
                return bq.test(i) ? az(cf).position()[ce] + "px" : i
            }
        })
    });
    az.each({Height: "height", Width: "width"}, function (i, cd) {
        az.each({padding: "inner" + i, content: cd, "": "outer" + i}, function (ce, cf) {
            az.fn[cf] = function (ci, cj) {
                var cg = arguments.length && (ce || typeof ci !== "boolean"),
                    ch = ce || (ci === true || cj === true ? "margin" : "border");
                return e(this, function (cl, cm, cn) {
                    var ck;
                    if (az.isWindow(cl)) {
                        return cl.document.documentElement["client" + i]
                    }
                    if (cl.nodeType === 9) {
                        ck = cl.documentElement;
                        return Math.max(cl.body["scroll" + i], ck["scroll" + i], cl.body["offset" + i], ck["offset" + i], ck["client" + i])
                    }
                    return cn === undefined ? az.css(cl, cm, ch) : az.style(cl, cm, cn, ch)
                }, cd, cg ? ci : undefined, cg, null)
            }
        })
    });
    az.fn.extend({
        bind: function (ce, i, cd) {
            return this.on(ce, null, i, cd)
        }, unbind: function (cd, i) {
            return this.off(cd, null, i)
        }, delegate: function (ce, cf, i, cd) {
            return this.on(cf, ce, i, cd)
        }, undelegate: function (cd, ce, i) {
            return arguments.length === 1 ? this.off(cd, "**") : this.off(ce, cd || "**", i)
        }
    });
    az.fn.size = function () {
        return this.length
    };
    az.fn.andSelf = az.fn.addBack;
    if (typeof define === "function" && define.amd) {
        define("jquery", [], function () {
            return az
        })
    }
    var b = b7.jQuery, a = b7.$;
    az.noConflict = function (i) {
        if (b7.$ === az) {
            b7.$ = a
        }
        if (i && b7.jQuery === az) {
            b7.jQuery = b
        }
        return az
    };
    if (!aE) {
        b7.jQuery = b7.$ = az
    }
    return az
}));