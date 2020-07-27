!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], e) : e(t.bootstrap = {}, t.jQuery)
}(this, function(t, e) {
    "use strict";
    function n(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1,
                i.configurable = !0,
            "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
        }
    }
    function i(t, e, i) {
        return e && n(t.prototype, e),
        i && n(t, i),
            t
    }
    function r() {
        return (r = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            }
        ).apply(this, arguments)
    }
    for (var o, s, a, l, c, h, f, u, d, p, g, m, _, v, E, y, b, T, C, w, I, A, D, S, O, N, k = function(t) {
        var e = !1;
        function n(e) {
            var n = this
                , r = !1;
            return t(this).one(i.TRANSITION_END, function() {
                r = !0
            }),
                setTimeout(function() {
                    r || i.triggerTransitionEnd(n)
                }, e),
                this
        }
        var i = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function(t) {
                do {
                    t += ~~(1e6 * Math.random())
                } while (document.getElementById(t));return t
            },
            getSelectorFromElement: function(e) {
                var n, i = e.getAttribute("data-target");
                i && "#" !== i || (i = e.getAttribute("href") || ""),
                "#" === i.charAt(0) && (n = i,
                    i = n = "function" == typeof t.escapeSelector ? t.escapeSelector(n).substr(1) : n.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1"));
                try {
                    return t(document).find(i).length > 0 ? i : null
                } catch (t) {
                    return null
                }
            },
            reflow: function(t) {
                return t.offsetHeight
            },
            triggerTransitionEnd: function(n) {
                t(n).trigger(e.end)
            },
            supportsTransitionEnd: function() {
                return Boolean(e)
            },
            isElement: function(t) {
                return (t[0] || t).nodeType
            },
            typeCheckConfig: function(t, e, n) {
                for (var r in n)
                    if (Object.prototype.hasOwnProperty.call(n, r)) {
                        var o = n[r]
                            , s = e[r]
                            , a = s && i.isElement(s) ? "element" : (l = s,
                            {}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());
                        if (!new RegExp(o).test(a))
                            throw new Error(t.toUpperCase() + ': Option "' + r + '" provided type "' + a + '" but expected type "' + o + '".')
                    }
                var l
            }
        };
        return e = ("undefined" == typeof window || !window.QUnit) && {
            end: "transitionend"
        },
            t.fn.emulateTransitionEnd = n,
        i.supportsTransitionEnd() && (t.event.special[i.TRANSITION_END] = {
            bindType: e.end,
            delegateType: e.end,
            handle: function(e) {
                if (t(e.target).is(this))
                    return e.handleObj.handler.apply(this, arguments)
            }
        }),
            i
    }(e = e && e.hasOwnProperty("default") ? e.default : e), L = (s = "alert",
        l = "." + (a = "bs.alert"),
        c = (o = e).fn[s],
        h = {
            CLOSE: "close" + l,
            CLOSED: "closed" + l,
            CLICK_DATA_API: "click" + l + ".data-api"
        },
        f = "alert",
        u = "fade",
        d = "show",
        p = function() {
            function t(t) {
                this._element = t
            }
            var e = t.prototype;
            return e.close = function(t) {
                t = t || this._element;
                var e = this._getRootElement(t);
                this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
            }
                ,
                e.dispose = function() {
                    o.removeData(this._element, a),
                        this._element = null
                }
                ,
                e._getRootElement = function(t) {
                    var e = k.getSelectorFromElement(t)
                        , n = !1;
                    return e && (n = o(e)[0]),
                    n || (n = o(t).closest("." + f)[0]),
                        n
                }
                ,
                e._triggerCloseEvent = function(t) {
                    var e = o.Event(h.CLOSE);
                    return o(t).trigger(e),
                        e
                }
                ,
                e._removeElement = function(t) {
                    var e = this;
                    o(t).removeClass(d),
                        k.supportsTransitionEnd() && o(t).hasClass(u) ? o(t).one(k.TRANSITION_END, function(n) {
                            return e._destroyElement(t, n)
                        }).emulateTransitionEnd(150) : this._destroyElement(t)
                }
                ,
                e._destroyElement = function(t) {
                    o(t).detach().trigger(h.CLOSED).remove()
                }
                ,
                t._jQueryInterface = function(e) {
                    return this.each(function() {
                        var n = o(this)
                            , i = n.data(a);
                        i || (i = new t(this),
                            n.data(a, i)),
                        "close" === e && i[e](this)
                    })
                }
                ,
                t._handleDismiss = function(t) {
                    return function(e) {
                        e && e.preventDefault(),
                            t.close(this)
                    }
                }
                ,
                i(t, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.0.0"
                    }
                }]),
                t
        }(),
        o(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p)),
        o.fn[s] = p._jQueryInterface,
        o.fn[s].Constructor = p,
        o.fn[s].noConflict = function() {
            return o.fn[s] = c,
                p._jQueryInterface
        }
        ,
        p), P = (m = "button",
        v = "." + (_ = "bs.button"),
        E = ".data-api",
        y = (g = e).fn[m],
        b = "active",
        T = "btn",
        C = "focus",
        w = '[data-toggle^="button"]',
        I = '[data-toggle="buttons"]',
        A = "input",
        D = ".active",
        S = ".btn",
        O = {
            CLICK_DATA_API: "click" + v + E,
            FOCUS_BLUR_DATA_API: "focus" + v + E + " blur" + v + E
        },
        N = function() {
            function t(t) {
                this._element = t
            }
            var e = t.prototype;
            return e.toggle = function() {
                var t = !0
                    , e = !0
                    , n = g(this._element).closest(I)[0];
                if (n) {
                    var i = g(this._element).find(A)[0];
                    if (i) {
                        if ("radio" === i.type)
                            if (i.checked && g(this._element).hasClass(b))
                                t = !1;
                            else {
                                var r = g(n).find(D)[0];
                                r && g(r).removeClass(b)
                            }
                        if (t) {
                            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled"))
                                return;
                            i.checked = !g(this._element).hasClass(b),
                                g(i).trigger("change")
                        }
                        i.focus(),
                            e = !1
                    }
                }
                e && this._element.setAttribute("aria-pressed", !g(this._element).hasClass(b)),
                t && g(this._element).toggleClass(b)
            }
                ,
                e.dispose = function() {
                    g.removeData(this._element, _),
                        this._element = null
                }
                ,
                t._jQueryInterface = function(e) {
                    return this.each(function() {
                        var n = g(this).data(_);
                        n || (n = new t(this),
                            g(this).data(_, n)),
                        "toggle" === e && n[e]()
                    })
                }
                ,
                i(t, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.0.0"
                    }
                }]),
                t
        }(),
        g(document).on(O.CLICK_DATA_API, w, function(t) {
            t.preventDefault();
            var e = t.target;
            g(e).hasClass(T) || (e = g(e).closest(S)),
                N._jQueryInterface.call(g(e), "toggle")
        }).on(O.FOCUS_BLUR_DATA_API, w, function(t) {
            var e = g(t.target).closest(S)[0];
            g(e).toggleClass(C, /^focus(in)?$/.test(t.type))
        }),
        g.fn[m] = N._jQueryInterface,
        g.fn[m].Constructor = N,
        g.fn[m].noConflict = function() {
            return g.fn[m] = y,
                N._jQueryInterface
        }
        ,
        N), x = function(t) {
        var e = "carousel"
            , n = "bs.carousel"
            , o = "." + n
            , s = t.fn[e]
            , a = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0
        }
            , l = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean"
        }
            , c = "next"
            , h = "prev"
            , f = "left"
            , u = "right"
            , d = {
            SLIDE: "slide" + o,
            SLID: "slid" + o,
            KEYDOWN: "keydown" + o,
            MOUSEENTER: "mouseenter" + o,
            MOUSELEAVE: "mouseleave" + o,
            TOUCHEND: "touchend" + o,
            LOAD_DATA_API: "load" + o + ".data-api",
            CLICK_DATA_API: "click" + o + ".data-api"
        }
            , p = "carousel"
            , g = "active"
            , m = "slide"
            , _ = "carousel-item-right"
            , v = "carousel-item-left"
            , E = "carousel-item-next"
            , y = "carousel-item-prev"
            , b = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]'
        }
            , T = function() {
            function s(e, n) {
                this._items = null,
                    this._interval = null,
                    this._activeElement = null,
                    this._isPaused = !1,
                    this._isSliding = !1,
                    this.touchTimeout = null,
                    this._config = this._getConfig(n),
                    this._element = t(e)[0],
                    this._indicatorsElement = t(this._element).find(b.INDICATORS)[0],
                    this._addEventListeners()
            }
            var T = s.prototype;
            return T.next = function() {
                this._isSliding || this._slide(c)
            }
                ,
                T.nextWhenVisible = function() {
                    !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
                }
                ,
                T.prev = function() {
                    this._isSliding || this._slide(h)
                }
                ,
                T.pause = function(e) {
                    e || (this._isPaused = !0),
                    t(this._element).find(b.NEXT_PREV)[0] && k.supportsTransitionEnd() && (k.triggerTransitionEnd(this._element),
                        this.cycle(!0)),
                        clearInterval(this._interval),
                        this._interval = null
                }
                ,
                T.cycle = function(t) {
                    t || (this._isPaused = !1),
                    this._interval && (clearInterval(this._interval),
                        this._interval = null),
                    this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                }
                ,
                T.to = function(e) {
                    var n = this;
                    this._activeElement = t(this._element).find(b.ACTIVE_ITEM)[0];
                    var i = this._getItemIndex(this._activeElement);
                    if (!(e > this._items.length - 1 || e < 0))
                        if (this._isSliding)
                            t(this._element).one(d.SLID, function() {
                                return n.to(e)
                            });
                        else {
                            if (i === e)
                                return this.pause(),
                                    void this.cycle();
                            var r = e > i ? c : h;
                            this._slide(r, this._items[e])
                        }
                }
                ,
                T.dispose = function() {
                    t(this._element).off(o),
                        t.removeData(this._element, n),
                        this._items = null,
                        this._config = null,
                        this._element = null,
                        this._interval = null,
                        this._isPaused = null,
                        this._isSliding = null,
                        this._activeElement = null,
                        this._indicatorsElement = null
                }
                ,
                T._getConfig = function(t) {
                    return t = r({}, a, t),
                        k.typeCheckConfig(e, t, l),
                        t
                }
                ,
                T._addEventListeners = function() {
                    var e = this;
                    this._config.keyboard && t(this._element).on(d.KEYDOWN, function(t) {
                        return e._keydown(t)
                    }),
                    "hover" === this._config.pause && (t(this._element).on(d.MOUSEENTER, function(t) {
                        return e.pause(t)
                    }).on(d.MOUSELEAVE, function(t) {
                        return e.cycle(t)
                    }),
                    "ontouchstart"in document.documentElement && t(this._element).on(d.TOUCHEND, function() {
                        e.pause(),
                        e.touchTimeout && clearTimeout(e.touchTimeout),
                            e.touchTimeout = setTimeout(function(t) {
                                return e.cycle(t)
                            }, 500 + e._config.interval)
                    }))
                }
                ,
                T._keydown = function(t) {
                    if (!/input|textarea/i.test(t.target.tagName))
                        switch (t.which) {
                            case 37:
                                t.preventDefault(),
                                    this.prev();
                                break;
                            case 39:
                                t.preventDefault(),
                                    this.next()
                        }
                }
                ,
                T._getItemIndex = function(e) {
                    return this._items = t.makeArray(t(e).parent().find(b.ITEM)),
                        this._items.indexOf(e)
                }
                ,
                T._getItemByDirection = function(t, e) {
                    var n = t === c
                        , i = t === h
                        , r = this._getItemIndex(e)
                        , o = this._items.length - 1;
                    if ((i && 0 === r || n && r === o) && !this._config.wrap)
                        return e;
                    var s = (r + (t === h ? -1 : 1)) % this._items.length;
                    return -1 === s ? this._items[this._items.length - 1] : this._items[s]
                }
                ,
                T._triggerSlideEvent = function(e, n) {
                    var i = this._getItemIndex(e)
                        , r = this._getItemIndex(t(this._element).find(b.ACTIVE_ITEM)[0])
                        , o = t.Event(d.SLIDE, {
                        relatedTarget: e,
                        direction: n,
                        from: r,
                        to: i
                    });
                    return t(this._element).trigger(o),
                        o
                }
                ,
                T._setActiveIndicatorElement = function(e) {
                    if (this._indicatorsElement) {
                        t(this._indicatorsElement).find(b.ACTIVE).removeClass(g);
                        var n = this._indicatorsElement.children[this._getItemIndex(e)];
                        n && t(n).addClass(g)
                    }
                }
                ,
                T._slide = function(e, n) {
                    var i, r, o, s = this, a = t(this._element).find(b.ACTIVE_ITEM)[0], l = this._getItemIndex(a), h = n || a && this._getItemByDirection(e, a), p = this._getItemIndex(h), T = Boolean(this._interval);
                    if (e === c ? (i = v,
                        r = E,
                        o = f) : (i = _,
                        r = y,
                        o = u),
                    h && t(h).hasClass(g))
                        this._isSliding = !1;
                    else if (!this._triggerSlideEvent(h, o).isDefaultPrevented() && a && h) {
                        this._isSliding = !0,
                        T && this.pause(),
                            this._setActiveIndicatorElement(h);
                        var C = t.Event(d.SLID, {
                            relatedTarget: h,
                            direction: o,
                            from: l,
                            to: p
                        });
                        k.supportsTransitionEnd() && t(this._element).hasClass(m) ? (t(h).addClass(r),
                            k.reflow(h),
                            t(a).addClass(i),
                            t(h).addClass(i),
                            t(a).one(k.TRANSITION_END, function() {
                                t(h).removeClass(i + " " + r).addClass(g),
                                    t(a).removeClass(g + " " + r + " " + i),
                                    s._isSliding = !1,
                                    setTimeout(function() {
                                        return t(s._element).trigger(C)
                                    }, 0)
                            }).emulateTransitionEnd(600)) : (t(a).removeClass(g),
                            t(h).addClass(g),
                            this._isSliding = !1,
                            t(this._element).trigger(C)),
                        T && this.cycle()
                    }
                }
                ,
                s._jQueryInterface = function(e) {
                    return this.each(function() {
                        var i = t(this).data(n)
                            , o = r({}, a, t(this).data());
                        "object" == typeof e && (o = r({}, o, e));
                        var l = "string" == typeof e ? e : o.slide;
                        if (i || (i = new s(this,o),
                            t(this).data(n, i)),
                        "number" == typeof e)
                            i.to(e);
                        else if ("string" == typeof l) {
                            if ("undefined" == typeof i[l])
                                throw new TypeError('No method named "' + l + '"');
                            i[l]()
                        } else
                            o.interval && (i.pause(),
                                i.cycle())
                    })
                }
                ,
                s._dataApiClickHandler = function(e) {
                    var i = k.getSelectorFromElement(this);
                    if (i) {
                        var o = t(i)[0];
                        if (o && t(o).hasClass(p)) {
                            var a = r({}, t(o).data(), t(this).data())
                                , l = this.getAttribute("data-slide-to");
                            l && (a.interval = !1),
                                s._jQueryInterface.call(t(o), a),
                            l && t(o).data(n).to(l),
                                e.preventDefault()
                        }
                    }
                }
                ,
                i(s, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.0.0"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return a
                    }
                }]),
                s
        }();
        return t(document).on(d.CLICK_DATA_API, b.DATA_SLIDE, T._dataApiClickHandler),
            t(window).on(d.LOAD_DATA_API, function() {
                t(b.DATA_RIDE).each(function() {
                    var e = t(this);
                    T._jQueryInterface.call(e, e.data())
                })
            }),
            t.fn[e] = T._jQueryInterface,
            t.fn[e].Constructor = T,
            t.fn[e].noConflict = function() {
                return t.fn[e] = s,
                    T._jQueryInterface
            }
            ,
            T
    }(e), R = function(t) {
        var e = "collapse"
            , n = "bs.collapse"
            , o = "." + n
            , s = t.fn[e]
            , a = {
            toggle: !0,
            parent: ""
        }
            , l = {
            toggle: "boolean",
            parent: "(string|element)"
        }
            , c = {
            SHOW: "show" + o,
            SHOWN: "shown" + o,
            HIDE: "hide" + o,
            HIDDEN: "hidden" + o,
            CLICK_DATA_API: "click" + o + ".data-api"
        }
            , h = "show"
            , f = "collapse"
            , u = "collapsing"
            , d = "collapsed"
            , p = "width"
            , g = "height"
            , m = {
            ACTIVES: ".show, .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]'
        }
            , _ = function() {
            function o(e, n) {
                this._isTransitioning = !1,
                    this._element = e,
                    this._config = this._getConfig(n),
                    this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                for (var i = t(m.DATA_TOGGLE), r = 0; r < i.length; r++) {
                    var o = i[r]
                        , s = k.getSelectorFromElement(o);
                    null !== s && t(s).filter(e).length > 0 && (this._selector = s,
                        this._triggerArray.push(o))
                }
                this._parent = this._config.parent ? this._getParent() : null,
                this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
                this._config.toggle && this.toggle()
            }
            var s = o.prototype;
            return s.toggle = function() {
                t(this._element).hasClass(h) ? this.hide() : this.show()
            }
                ,
                s.show = function() {
                    var e, i, r = this;
                    if (!this._isTransitioning && !t(this._element).hasClass(h) && (this._parent && 0 === (e = t.makeArray(t(this._parent).find(m.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (e = null),
                        !(e && (i = t(e).not(this._selector).data(n)) && i._isTransitioning))) {
                        var s = t.Event(c.SHOW);
                        if (t(this._element).trigger(s),
                            !s.isDefaultPrevented()) {
                            e && (o._jQueryInterface.call(t(e).not(this._selector), "hide"),
                            i || t(e).data(n, null));
                            var a = this._getDimension();
                            t(this._element).removeClass(f).addClass(u),
                                this._element.style[a] = 0,
                            this._triggerArray.length > 0 && t(this._triggerArray).removeClass(d).attr("aria-expanded", !0),
                                this.setTransitioning(!0);
                            var l = function() {
                                t(r._element).removeClass(u).addClass(f).addClass(h),
                                    r._element.style[a] = "",
                                    r.setTransitioning(!1),
                                    t(r._element).trigger(c.SHOWN)
                            };
                            if (k.supportsTransitionEnd()) {
                                var p = "scroll" + (a[0].toUpperCase() + a.slice(1));
                                t(this._element).one(k.TRANSITION_END, l).emulateTransitionEnd(600),
                                    this._element.style[a] = this._element[p] + "px"
                            } else
                                l()
                        }
                    }
                }
                ,
                s.hide = function() {
                    var e = this;
                    if (!this._isTransitioning && t(this._element).hasClass(h)) {
                        var n = t.Event(c.HIDE);
                        if (t(this._element).trigger(n),
                            !n.isDefaultPrevented()) {
                            var i = this._getDimension();
                            if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px",
                                k.reflow(this._element),
                                t(this._element).addClass(u).removeClass(f).removeClass(h),
                            this._triggerArray.length > 0)
                                for (var r = 0; r < this._triggerArray.length; r++) {
                                    var o = this._triggerArray[r]
                                        , s = k.getSelectorFromElement(o);
                                    if (null !== s)
                                        t(s).hasClass(h) || t(o).addClass(d).attr("aria-expanded", !1)
                                }
                            this.setTransitioning(!0);
                            var a = function() {
                                e.setTransitioning(!1),
                                    t(e._element).removeClass(u).addClass(f).trigger(c.HIDDEN)
                            };
                            this._element.style[i] = "",
                                k.supportsTransitionEnd() ? t(this._element).one(k.TRANSITION_END, a).emulateTransitionEnd(600) : a()
                        }
                    }
                }
                ,
                s.setTransitioning = function(t) {
                    this._isTransitioning = t
                }
                ,
                s.dispose = function() {
                    t.removeData(this._element, n),
                        this._config = null,
                        this._parent = null,
                        this._element = null,
                        this._triggerArray = null,
                        this._isTransitioning = null
                }
                ,
                s._getConfig = function(t) {
                    return (t = r({}, a, t)).toggle = Boolean(t.toggle),
                        k.typeCheckConfig(e, t, l),
                        t
                }
                ,
                s._getDimension = function() {
                    return t(this._element).hasClass(p) ? p : g
                }
                ,
                s._getParent = function() {
                    var e = this
                        , n = null;
                    k.isElement(this._config.parent) ? (n = this._config.parent,
                    "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = t(this._config.parent)[0];
                    var i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                    return t(n).find(i).each(function(t, n) {
                        e._addAriaAndCollapsedClass(o._getTargetFromElement(n), [n])
                    }),
                        n
                }
                ,
                s._addAriaAndCollapsedClass = function(e, n) {
                    if (e) {
                        var i = t(e).hasClass(h);
                        n.length > 0 && t(n).toggleClass(d, !i).attr("aria-expanded", i)
                    }
                }
                ,
                o._getTargetFromElement = function(e) {
                    var n = k.getSelectorFromElement(e);
                    return n ? t(n)[0] : null
                }
                ,
                o._jQueryInterface = function(e) {
                    return this.each(function() {
                        var i = t(this)
                            , s = i.data(n)
                            , l = r({}, a, i.data(), "object" == typeof e && e);
                        if (!s && l.toggle && /show|hide/.test(e) && (l.toggle = !1),
                        s || (s = new o(this,l),
                            i.data(n, s)),
                        "string" == typeof e) {
                            if ("undefined" == typeof s[e])
                                throw new TypeError('No method named "' + e + '"');
                            s[e]()
                        }
                    })
                }
                ,
                i(o, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.0.0"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return a
                    }
                }]),
                o
        }();
        return t(document).on(c.CLICK_DATA_API, m.DATA_TOGGLE, function(e) {
            "A" === e.currentTarget.tagName && e.preventDefault();
            var i = t(this)
                , r = k.getSelectorFromElement(this);
            t(r).each(function() {
                var e = t(this)
                    , r = e.data(n) ? "toggle" : i.data();
                _._jQueryInterface.call(e, r)
            })
        }),
            t.fn[e] = _._jQueryInterface,
            t.fn[e].Constructor = _,
            t.fn[e].noConflict = function() {
                return t.fn[e] = s,
                    _._jQueryInterface
            }
            ,
            _
    }(e), j = "undefined" != typeof window && "undefined" != typeof document, H = ["Edge", "Trident", "Firefox"], M = 0, W = 0; W < H.length; W += 1)
        if (j && navigator.userAgent.indexOf(H[W]) >= 0) {
            M = 1;
            break
        }
    var U = j && window.Promise ? function(t) {
            var e = !1;
            return function() {
                e || (e = !0,
                    window.Promise.resolve().then(function() {
                        e = !1,
                            t()
                    }))
            }
        }
        : function(t) {
            var e = !1;
            return function() {
                e || (e = !0,
                    setTimeout(function() {
                        e = !1,
                            t()
                    }, M))
            }
        }
    ;
    function B(t) {
        return t && "[object Function]" === {}.toString.call(t)
    }
    function F(t, e) {
        if (1 !== t.nodeType)
            return [];
        var n = getComputedStyle(t, null);
        return e ? n[e] : n
    }
    function K(t) {
        return "HTML" === t.nodeName ? t : t.parentNode || t.host
    }
    function V(t) {
        if (!t)
            return document.body;
        switch (t.nodeName) {
            case "HTML":
            case "BODY":
                return t.ownerDocument.body;
            case "#document":
                return t.body
        }
        var e = F(t)
            , n = e.overflow
            , i = e.overflowX
            , r = e.overflowY;
        return /(auto|scroll)/.test(n + r + i) ? t : V(K(t))
    }
    function Q(t) {
        var e = t && t.offsetParent
            , n = e && e.nodeName;
        return n && "BODY" !== n && "HTML" !== n ? -1 !== ["TD", "TABLE"].indexOf(e.nodeName) && "static" === F(e, "position") ? Q(e) : e : t ? t.ownerDocument.documentElement : document.documentElement
    }
    function Y(t) {
        return null !== t.parentNode ? Y(t.parentNode) : t
    }
    function G(t, e) {
        if (!(t && t.nodeType && e && e.nodeType))
            return document.documentElement;
        var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING
            , i = n ? t : e
            , r = n ? e : t
            , o = document.createRange();
        o.setStart(i, 0),
            o.setEnd(r, 0);
        var s, a, l = o.commonAncestorContainer;
        if (t !== l && e !== l || i.contains(r))
            return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && Q(s.firstElementChild) !== s ? Q(l) : l;
        var c = Y(t);
        return c.host ? G(c.host, e) : G(t, Y(e).host)
    }
    function q(t) {
        var e = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft"
            , n = t.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var i = t.ownerDocument.documentElement;
            return (t.ownerDocument.scrollingElement || i)[e]
        }
        return t[e]
    }
    function z(t, e) {
        var n = "x" === e ? "Left" : "Top"
            , i = "Left" === n ? "Right" : "Bottom";
        return parseFloat(t["border" + n + "Width"], 10) + parseFloat(t["border" + i + "Width"], 10)
    }
    var X = void 0
        , Z = function() {
        return void 0 === X && (X = -1 !== navigator.appVersion.indexOf("MSIE 10")),
            X
    };
    function J(t, e, n, i) {
        return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], Z() ? n["offset" + t] + i["margin" + ("Height" === t ? "Top" : "Left")] + i["margin" + ("Height" === t ? "Bottom" : "Right")] : 0)
    }
    function $() {
        var t = document.body
            , e = document.documentElement
            , n = Z() && getComputedStyle(e);
        return {
            height: J("Height", t, e, n),
            width: J("Width", t, e, n)
        }
    }
    var tt = function(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        , et = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1,
                        i.configurable = !0,
                    "value"in i && (i.writable = !0),
                        Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n),
                i && t(e, i),
                    e
            }
        }()
        , nt = function(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
                t
        }
        , it = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }
    ;
    function rt(t) {
        return it({}, t, {
            right: t.left + t.width,
            bottom: t.top + t.height
        })
    }
    function ot(t) {
        var e = {};
        if (Z())
            try {
                e = t.getBoundingClientRect();
                var n = q(t, "top")
                    , i = q(t, "left");
                e.top += n,
                    e.left += i,
                    e.bottom += n,
                    e.right += i
            } catch (t) {}
        else
            e = t.getBoundingClientRect();
        var r = {
            left: e.left,
            top: e.top,
            width: e.right - e.left,
            height: e.bottom - e.top
        }
            , o = "HTML" === t.nodeName ? $() : {}
            , s = o.width || t.clientWidth || r.right - r.left
            , a = o.height || t.clientHeight || r.bottom - r.top
            , l = t.offsetWidth - s
            , c = t.offsetHeight - a;
        if (l || c) {
            var h = F(t);
            l -= z(h, "x"),
                c -= z(h, "y"),
                r.width -= l,
                r.height -= c
        }
        return rt(r)
    }
    function st(t, e) {
        var n = Z()
            , i = "HTML" === e.nodeName
            , r = ot(t)
            , o = ot(e)
            , s = V(t)
            , a = F(e)
            , l = parseFloat(a.borderTopWidth, 10)
            , c = parseFloat(a.borderLeftWidth, 10)
            , h = rt({
            top: r.top - o.top - l,
            left: r.left - o.left - c,
            width: r.width,
            height: r.height
        });
        if (h.marginTop = 0,
            h.marginLeft = 0,
        !n && i) {
            var f = parseFloat(a.marginTop, 10)
                , u = parseFloat(a.marginLeft, 10);
            h.top -= l - f,
                h.bottom -= l - f,
                h.left -= c - u,
                h.right -= c - u,
                h.marginTop = f,
                h.marginLeft = u
        }
        return (n ? e.contains(s) : e === s && "BODY" !== s.nodeName) && (h = function(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                , i = q(e, "top")
                , r = q(e, "left")
                , o = n ? -1 : 1;
            return t.top += i * o,
                t.bottom += i * o,
                t.left += r * o,
                t.right += r * o,
                t
        }(h, e)),
            h
    }
    function at(t, e, n, i) {
        var r, o, s, a, l, c, h, f = {
            top: 0,
            left: 0
        }, u = G(t, e);
        if ("viewport" === i)
            o = (r = u).ownerDocument.documentElement,
                s = st(r, o),
                a = Math.max(o.clientWidth, window.innerWidth || 0),
                l = Math.max(o.clientHeight, window.innerHeight || 0),
                c = q(o),
                h = q(o, "left"),
                f = rt({
                    top: c - s.top + s.marginTop,
                    left: h - s.left + s.marginLeft,
                    width: a,
                    height: l
                });
        else {
            var d = void 0;
            "scrollParent" === i ? "BODY" === (d = V(K(e))).nodeName && (d = t.ownerDocument.documentElement) : d = "window" === i ? t.ownerDocument.documentElement : i;
            var p = st(d, u);
            if ("HTML" !== d.nodeName || function t(e) {
                var n = e.nodeName;
                return "BODY" !== n && "HTML" !== n && ("fixed" === F(e, "position") || t(K(e)))
            }(u))
                f = p;
            else {
                var g = $()
                    , m = g.height
                    , _ = g.width;
                f.top += p.top - p.marginTop,
                    f.bottom = m + p.top,
                    f.left += p.left - p.marginLeft,
                    f.right = _ + p.left
            }
        }
        return f.left += n,
            f.top += n,
            f.right -= n,
            f.bottom -= n,
            f
    }
    function lt(t, e, n, i, r) {
        var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === t.indexOf("auto"))
            return t;
        var s = at(n, i, o, r)
            , a = {
            top: {
                width: s.width,
                height: e.top - s.top
            },
            right: {
                width: s.right - e.right,
                height: s.height
            },
            bottom: {
                width: s.width,
                height: s.bottom - e.bottom
            },
            left: {
                width: e.left - s.left,
                height: s.height
            }
        }
            , l = Object.keys(a).map(function(t) {
            return it({
                key: t
            }, a[t], {
                area: (e = a[t],
                e.width * e.height)
            });
            var e
        }).sort(function(t, e) {
            return e.area - t.area
        })
            , c = l.filter(function(t) {
            var e = t.width
                , i = t.height;
            return e >= n.clientWidth && i >= n.clientHeight
        })
            , h = c.length > 0 ? c[0].key : l[0].key
            , f = t.split("-")[1];
        return h + (f ? "-" + f : "")
    }
    function ct(t, e, n) {
        return st(n, G(e, n))
    }
    function ht(t) {
        var e = getComputedStyle(t)
            , n = parseFloat(e.marginTop) + parseFloat(e.marginBottom)
            , i = parseFloat(e.marginLeft) + parseFloat(e.marginRight);
        return {
            width: t.offsetWidth + i,
            height: t.offsetHeight + n
        }
    }
    function ft(t) {
        var e = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return t.replace(/left|right|bottom|top/g, function(t) {
            return e[t]
        })
    }
    function ut(t, e, n) {
        n = n.split("-")[0];
        var i = ht(t)
            , r = {
            width: i.width,
            height: i.height
        }
            , o = -1 !== ["right", "left"].indexOf(n)
            , s = o ? "top" : "left"
            , a = o ? "left" : "top"
            , l = o ? "height" : "width"
            , c = o ? "width" : "height";
        return r[s] = e[s] + e[l] / 2 - i[l] / 2,
            r[a] = n === a ? e[a] - i[c] : e[ft(a)],
            r
    }
    function dt(t, e) {
        return Array.prototype.find ? t.find(e) : t.filter(e)[0]
    }
    function pt(t, e, n) {
        return (void 0 === n ? t : t.slice(0, function(t, e, n) {
            if (Array.prototype.findIndex)
                return t.findIndex(function(t) {
                    return t[e] === n
                });
            var i = dt(t, function(t) {
                return t[e] === n
            });
            return t.indexOf(i)
        }(t, "name", n))).forEach(function(t) {
            t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var n = t.function || t.fn;
            t.enabled && B(n) && (e.offsets.popper = rt(e.offsets.popper),
                e.offsets.reference = rt(e.offsets.reference),
                e = n(e, t))
        }),
            e
    }
    function gt(t, e) {
        return t.some(function(t) {
            var n = t.name;
            return t.enabled && n === e
        })
    }
    function mt(t) {
        for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length - 1; i++) {
            var r = e[i]
                , o = r ? "" + r + n : t;
            if ("undefined" != typeof document.body.style[o])
                return o
        }
        return null
    }
    function _t(t) {
        var e = t.ownerDocument;
        return e ? e.defaultView : window
    }
    function vt(t, e, n, i) {
        n.updateBound = i,
            _t(t).addEventListener("resize", n.updateBound, {
                passive: !0
            });
        var r = V(t);
        return function t(e, n, i, r) {
            var o = "BODY" === e.nodeName
                , s = o ? e.ownerDocument.defaultView : e;
            s.addEventListener(n, i, {
                passive: !0
            }),
            o || t(V(s.parentNode), n, i, r),
                r.push(s)
        }(r, "scroll", n.updateBound, n.scrollParents),
            n.scrollElement = r,
            n.eventsEnabled = !0,
            n
    }
    function Et() {
        var t, e;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
            this.state = (t = this.reference,
                e = this.state,
                _t(t).removeEventListener("resize", e.updateBound),
                e.scrollParents.forEach(function(t) {
                    t.removeEventListener("scroll", e.updateBound)
                }),
                e.updateBound = null,
                e.scrollParents = [],
                e.scrollElement = null,
                e.eventsEnabled = !1,
                e))
    }
    function yt(t) {
        return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
    }
    function bt(t, e) {
        Object.keys(e).forEach(function(n) {
            var i = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && yt(e[n]) && (i = "px"),
                t.style[n] = e[n] + i
        })
    }
    function Tt(t, e, n) {
        var i = dt(t, function(t) {
            return t.name === e
        })
            , r = !!i && t.some(function(t) {
            return t.name === n && t.enabled && t.order < i.order
        });
        if (!r) {
            var o = "`" + e + "`"
                , s = "`" + n + "`";
            console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return r
    }
    var Ct = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"]
        , wt = Ct.slice(3);
    function It(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
            , n = wt.indexOf(t)
            , i = wt.slice(n + 1).concat(wt.slice(0, n));
        return e ? i.reverse() : i
    }
    var At = {
        FLIP: "flip",
        CLOCKWISE: "clockwise",
        COUNTERCLOCKWISE: "counterclockwise"
    };
    function Dt(t, e, n, i) {
        var r = [0, 0]
            , o = -1 !== ["right", "left"].indexOf(i)
            , s = t.split(/(\+|\-)/).map(function(t) {
            return t.trim()
        })
            , a = s.indexOf(dt(s, function(t) {
            return -1 !== t.search(/,|\s/)
        }));
        s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/
            , c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
        return (c = c.map(function(t, i) {
            var r = (1 === i ? !o : o) ? "height" : "width"
                , s = !1;
            return t.reduce(function(t, e) {
                return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e,
                    s = !0,
                    t) : s ? (t[t.length - 1] += e,
                    s = !1,
                    t) : t.concat(e)
            }, []).map(function(t) {
                return function(t, e, n, i) {
                    var r = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
                        , o = +r[1]
                        , s = r[2];
                    if (!o)
                        return t;
                    if (0 === s.indexOf("%")) {
                        var a = void 0;
                        switch (s) {
                            case "%p":
                                a = n;
                                break;
                            case "%":
                            case "%r":
                            default:
                                a = i
                        }
                        return rt(a)[e] / 100 * o
                    }
                    if ("vh" === s || "vw" === s)
                        return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
                    return o
                }(t, r, e, n)
            })
        })).forEach(function(t, e) {
            t.forEach(function(n, i) {
                yt(n) && (r[e] += n * ("-" === t[i - 1] ? -1 : 1))
            })
        }),
            r
    }
    var St = {
        placement: "bottom",
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(t) {
                    var e = t.placement
                        , n = e.split("-")[0]
                        , i = e.split("-")[1];
                    if (i) {
                        var r = t.offsets
                            , o = r.reference
                            , s = r.popper
                            , a = -1 !== ["bottom", "top"].indexOf(n)
                            , l = a ? "left" : "top"
                            , c = a ? "width" : "height"
                            , h = {
                            start: nt({}, l, o[l]),
                            end: nt({}, l, o[l] + o[c] - s[c])
                        };
                        t.offsets.popper = it({}, s, h[i])
                    }
                    return t
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(t, e) {
                    var n = e.offset
                        , i = t.placement
                        , r = t.offsets
                        , o = r.popper
                        , s = r.reference
                        , a = i.split("-")[0]
                        , l = void 0;
                    return l = yt(+n) ? [+n, 0] : Dt(n, o, s, a),
                        "left" === a ? (o.top += l[0],
                            o.left -= l[1]) : "right" === a ? (o.top += l[0],
                            o.left += l[1]) : "top" === a ? (o.left += l[0],
                            o.top -= l[1]) : "bottom" === a && (o.left += l[0],
                            o.top += l[1]),
                        t.popper = o,
                        t
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(t, e) {
                    var n = e.boundariesElement || Q(t.instance.popper);
                    t.instance.reference === n && (n = Q(n));
                    var i = at(t.instance.popper, t.instance.reference, e.padding, n);
                    e.boundaries = i;
                    var r = e.priority
                        , o = t.offsets.popper
                        , s = {
                        primary: function(t) {
                            var n = o[t];
                            return o[t] < i[t] && !e.escapeWithReference && (n = Math.max(o[t], i[t])),
                                nt({}, t, n)
                        },
                        secondary: function(t) {
                            var n = "right" === t ? "left" : "top"
                                , r = o[n];
                            return o[t] > i[t] && !e.escapeWithReference && (r = Math.min(o[n], i[t] - ("right" === t ? o.width : o.height))),
                                nt({}, n, r)
                        }
                    };
                    return r.forEach(function(t) {
                        var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                        o = it({}, o, s[e](t))
                    }),
                        t.offsets.popper = o,
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
                    var e = t.offsets
                        , n = e.popper
                        , i = e.reference
                        , r = t.placement.split("-")[0]
                        , o = Math.floor
                        , s = -1 !== ["top", "bottom"].indexOf(r)
                        , a = s ? "right" : "bottom"
                        , l = s ? "left" : "top"
                        , c = s ? "width" : "height";
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
                    if (!Tt(t.instance.modifiers, "arrow", "keepTogether"))
                        return t;
                    var i = e.element;
                    if ("string" == typeof i) {
                        if (!(i = t.instance.popper.querySelector(i)))
                            return t
                    } else if (!t.instance.popper.contains(i))
                        return console.warn("WARNING: `arrow.element` must be child of its popper element!"),
                            t;
                    var r = t.placement.split("-")[0]
                        , o = t.offsets
                        , s = o.popper
                        , a = o.reference
                        , l = -1 !== ["left", "right"].indexOf(r)
                        , c = l ? "height" : "width"
                        , h = l ? "Top" : "Left"
                        , f = h.toLowerCase()
                        , u = l ? "left" : "top"
                        , d = l ? "bottom" : "right"
                        , p = ht(i)[c];
                    a[d] - p < s[f] && (t.offsets.popper[f] -= s[f] - (a[d] - p)),
                    a[f] + p > s[d] && (t.offsets.popper[f] += a[f] + p - s[d]),
                        t.offsets.popper = rt(t.offsets.popper);
                    var g = a[f] + a[c] / 2 - p / 2
                        , m = F(t.instance.popper)
                        , _ = parseFloat(m["margin" + h], 10)
                        , v = parseFloat(m["border" + h + "Width"], 10)
                        , E = g - t.offsets.popper[f] - _ - v;
                    return E = Math.max(Math.min(s[c] - p, E), 0),
                        t.arrowElement = i,
                        t.offsets.arrow = (nt(n = {}, f, Math.round(E)),
                            nt(n, u, ""),
                            n),
                        t
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(t, e) {
                    if (gt(t.instance.modifiers, "inner"))
                        return t;
                    if (t.flipped && t.placement === t.originalPlacement)
                        return t;
                    var n = at(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement)
                        , i = t.placement.split("-")[0]
                        , r = ft(i)
                        , o = t.placement.split("-")[1] || ""
                        , s = [];
                    switch (e.behavior) {
                        case At.FLIP:
                            s = [i, r];
                            break;
                        case At.CLOCKWISE:
                            s = It(i);
                            break;
                        case At.COUNTERCLOCKWISE:
                            s = It(i, !0);
                            break;
                        default:
                            s = e.behavior
                    }
                    return s.forEach(function(a, l) {
                        if (i !== a || s.length === l + 1)
                            return t;
                        i = t.placement.split("-")[0],
                            r = ft(i);
                        var c, h = t.offsets.popper, f = t.offsets.reference, u = Math.floor, d = "left" === i && u(h.right) > u(f.left) || "right" === i && u(h.left) < u(f.right) || "top" === i && u(h.bottom) > u(f.top) || "bottom" === i && u(h.top) < u(f.bottom), p = u(h.left) < u(n.left), g = u(h.right) > u(n.right), m = u(h.top) < u(n.top), _ = u(h.bottom) > u(n.bottom), v = "left" === i && p || "right" === i && g || "top" === i && m || "bottom" === i && _, E = -1 !== ["top", "bottom"].indexOf(i), y = !!e.flipVariations && (E && "start" === o && p || E && "end" === o && g || !E && "start" === o && m || !E && "end" === o && _);
                        (d || v || y) && (t.flipped = !0,
                        (d || v) && (i = s[l + 1]),
                        y && (o = "end" === (c = o) ? "start" : "start" === c ? "end" : c),
                            t.placement = i + (o ? "-" + o : ""),
                            t.offsets.popper = it({}, t.offsets.popper, ut(t.instance.popper, t.offsets.reference, t.placement)),
                            t = pt(t.instance.modifiers, t, "flip"))
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
                    var e = t.placement
                        , n = e.split("-")[0]
                        , i = t.offsets
                        , r = i.popper
                        , o = i.reference
                        , s = -1 !== ["left", "right"].indexOf(n)
                        , a = -1 === ["top", "left"].indexOf(n);
                    return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0),
                        t.placement = ft(e),
                        t.offsets.popper = rt(r),
                        t
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(t) {
                    if (!Tt(t.instance.modifiers, "hide", "preventOverflow"))
                        return t;
                    var e = t.offsets.reference
                        , n = dt(t.instance.modifiers, function(t) {
                        return "preventOverflow" === t.name
                    }).boundaries;
                    if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                        if (!0 === t.hide)
                            return t;
                        t.hide = !0,
                            t.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === t.hide)
                            return t;
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
                    var n = e.x
                        , i = e.y
                        , r = t.offsets.popper
                        , o = dt(t.instance.modifiers, function(t) {
                        return "applyStyle" === t.name
                    }).gpuAcceleration;
                    void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var s = void 0 !== o ? o : e.gpuAcceleration
                        , a = ot(Q(t.instance.popper))
                        , l = {
                        position: r.position
                    }
                        , c = {
                        left: Math.floor(r.left),
                        top: Math.floor(r.top),
                        bottom: Math.floor(r.bottom),
                        right: Math.floor(r.right)
                    }
                        , h = "bottom" === n ? "top" : "bottom"
                        , f = "right" === i ? "left" : "right"
                        , u = mt("transform")
                        , d = void 0
                        , p = void 0;
                    if (p = "bottom" === h ? -a.height + c.bottom : c.top,
                        d = "right" === f ? -a.width + c.right : c.left,
                    s && u)
                        l[u] = "translate3d(" + d + "px, " + p + "px, 0)",
                            l[h] = 0,
                            l[f] = 0,
                            l.willChange = "transform";
                    else {
                        var g = "bottom" === h ? -1 : 1
                            , m = "right" === f ? -1 : 1;
                        l[h] = p * g,
                            l[f] = d * m,
                            l.willChange = h + ", " + f
                    }
                    var _ = {
                        "x-placement": t.placement
                    };
                    return t.attributes = it({}, _, t.attributes),
                        t.styles = it({}, l, t.styles),
                        t.arrowStyles = it({}, t.offsets.arrow, t.arrowStyles),
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
                    return bt(t.instance.popper, t.styles),
                        e = t.instance.popper,
                        n = t.attributes,
                        Object.keys(n).forEach(function(t) {
                            !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t)
                        }),
                    t.arrowElement && Object.keys(t.arrowStyles).length && bt(t.arrowElement, t.arrowStyles),
                        t
                },
                onLoad: function(t, e, n, i, r) {
                    var o = ct(0, e, t)
                        , s = lt(n.placement, o, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return e.setAttribute("x-placement", s),
                        bt(e, {
                            position: "absolute"
                        }),
                        n
                },
                gpuAcceleration: void 0
            }
        }
    }
        , Ot = function() {
        function t(e, n) {
            var i = this
                , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            tt(this, t),
                this.scheduleUpdate = function() {
                    return requestAnimationFrame(i.update)
                }
                ,
                this.update = U(this.update.bind(this)),
                this.options = it({}, t.Defaults, r),
                this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                },
                this.reference = e && e.jquery ? e[0] : e,
                this.popper = n && n.jquery ? n[0] : n,
                this.options.modifiers = {},
                Object.keys(it({}, t.Defaults.modifiers, r.modifiers)).forEach(function(e) {
                    i.options.modifiers[e] = it({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
                }),
                this.modifiers = Object.keys(this.options.modifiers).map(function(t) {
                    return it({
                        name: t
                    }, i.options.modifiers[t])
                }).sort(function(t, e) {
                    return t.order - e.order
                }),
                this.modifiers.forEach(function(t) {
                    t.enabled && B(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
                }),
                this.update();
            var o = this.options.eventsEnabled;
            o && this.enableEventListeners(),
                this.state.eventsEnabled = o
        }
        return et(t, [{
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
                        t.offsets.reference = ct(this.state, this.popper, this.reference),
                            t.placement = lt(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
                            t.originalPlacement = t.placement,
                            t.offsets.popper = ut(this.popper, t.offsets.reference, t.placement),
                            t.offsets.popper.position = "absolute",
                            t = pt(this.modifiers, t),
                            this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0,
                                this.options.onCreate(t))
                    }
                }
                    .call(this)
            }
        }, {
            key: "destroy",
            value: function() {
                return function() {
                    return this.state.isDestroyed = !0,
                    gt(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"),
                        this.popper.style.left = "",
                        this.popper.style.position = "",
                        this.popper.style.top = "",
                        this.popper.style[mt("transform")] = ""),
                        this.disableEventListeners(),
                    this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
                        this
                }
                    .call(this)
            }
        }, {
            key: "enableEventListeners",
            value: function() {
                return function() {
                    this.state.eventsEnabled || (this.state = vt(this.reference, this.options, this.state, this.scheduleUpdate))
                }
                    .call(this)
            }
        }, {
            key: "disableEventListeners",
            value: function() {
                return Et.call(this)
            }
        }]),
            t
    }();
    Ot.Utils = ("undefined" != typeof window ? window : global).PopperUtils,
        Ot.placements = Ct,
        Ot.Defaults = St;
    var Nt = function(t) {
        var e = "dropdown"
            , n = "bs.dropdown"
            , o = "." + n
            , s = t.fn[e]
            , a = new RegExp("38|40|27")
            , l = {
            HIDE: "hide" + o,
            HIDDEN: "hidden" + o,
            SHOW: "show" + o,
            SHOWN: "shown" + o,
            CLICK: "click" + o,
            CLICK_DATA_API: "click" + o + ".data-api",
            KEYDOWN_DATA_API: "keydown" + o + ".data-api",
            KEYUP_DATA_API: "keyup" + o + ".data-api"
        }
            , c = "disabled"
            , h = "show"
            , f = "dropup"
            , u = "dropright"
            , d = "dropleft"
            , p = "dropdown-menu-right"
            , g = "dropdown-menu-left"
            , m = "position-static"
            , _ = '[data-toggle="dropdown"]'
            , v = ".dropdown form"
            , E = ".dropdown-menu"
            , y = ".navbar-nav"
            , b = ".dropdown-menu .dropdown-item:not(.disabled)"
            , T = "top-start"
            , C = "top-end"
            , w = "bottom-start"
            , I = "bottom-end"
            , A = "right-start"
            , D = "left-start"
            , S = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent"
        }
            , O = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)"
        }
            , N = function() {
            function s(t, e) {
                this._element = t,
                    this._popper = null,
                    this._config = this._getConfig(e),
                    this._menu = this._getMenuElement(),
                    this._inNavbar = this._detectNavbar(),
                    this._addEventListeners()
            }
            var v = s.prototype;
            return v.toggle = function() {
                if (!this._element.disabled && !t(this._element).hasClass(c)) {
                    var e = s._getParentFromElement(this._element)
                        , n = t(this._menu).hasClass(h);
                    if (s._clearMenus(),
                        !n) {
                        var i = {
                            relatedTarget: this._element
                        }
                            , r = t.Event(l.SHOW, i);
                        if (t(e).trigger(r),
                            !r.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if ("undefined" == typeof Ot)
                                    throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                var o = this._element;
                                t(e).hasClass(f) && (t(this._menu).hasClass(g) || t(this._menu).hasClass(p)) && (o = e),
                                "scrollParent" !== this._config.boundary && t(e).addClass(m),
                                    this._popper = new Ot(o,this._menu,this._getPopperConfig())
                            }
                            "ontouchstart"in document.documentElement && 0 === t(e).closest(y).length && t("body").children().on("mouseover", null, t.noop),
                                this._element.focus(),
                                this._element.setAttribute("aria-expanded", !0),
                                t(this._menu).toggleClass(h),
                                t(e).toggleClass(h).trigger(t.Event(l.SHOWN, i))
                        }
                    }
                }
            }
                ,
                v.dispose = function() {
                    t.removeData(this._element, n),
                        t(this._element).off(o),
                        this._element = null,
                        this._menu = null,
                    null !== this._popper && (this._popper.destroy(),
                        this._popper = null)
                }
                ,
                v.update = function() {
                    this._inNavbar = this._detectNavbar(),
                    null !== this._popper && this._popper.scheduleUpdate()
                }
                ,
                v._addEventListeners = function() {
                    var e = this;
                    t(this._element).on(l.CLICK, function(t) {
                        t.preventDefault(),
                            t.stopPropagation(),
                            e.toggle()
                    })
                }
                ,
                v._getConfig = function(n) {
                    return n = r({}, this.constructor.Default, t(this._element).data(), n),
                        k.typeCheckConfig(e, n, this.constructor.DefaultType),
                        n
                }
                ,
                v._getMenuElement = function() {
                    if (!this._menu) {
                        var e = s._getParentFromElement(this._element);
                        this._menu = t(e).find(E)[0]
                    }
                    return this._menu
                }
                ,
                v._getPlacement = function() {
                    var e = t(this._element).parent()
                        , n = w;
                    return e.hasClass(f) ? (n = T,
                    t(this._menu).hasClass(p) && (n = C)) : e.hasClass(u) ? n = A : e.hasClass(d) ? n = D : t(this._menu).hasClass(p) && (n = I),
                        n
                }
                ,
                v._detectNavbar = function() {
                    return t(this._element).closest(".navbar").length > 0
                }
                ,
                v._getPopperConfig = function() {
                    var t = this
                        , e = {};
                    return "function" == typeof this._config.offset ? e.fn = function(e) {
                            return e.offsets = r({}, e.offsets, t._config.offset(e.offsets) || {}),
                                e
                        }
                        : e.offset = this._config.offset,
                        {
                            placement: this._getPlacement(),
                            modifiers: {
                                offset: e,
                                flip: {
                                    enabled: this._config.flip
                                },
                                preventOverflow: {
                                    boundariesElement: this._config.boundary
                                }
                            }
                        }
                }
                ,
                s._jQueryInterface = function(e) {
                    return this.each(function() {
                        var i = t(this).data(n);
                        if (i || (i = new s(this,"object" == typeof e ? e : null),
                            t(this).data(n, i)),
                        "string" == typeof e) {
                            if ("undefined" == typeof i[e])
                                throw new TypeError('No method named "' + e + '"');
                            i[e]()
                        }
                    })
                }
                ,
                s._clearMenus = function(e) {
                    if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                        for (var i = t.makeArray(t(_)), r = 0; r < i.length; r++) {
                            var o = s._getParentFromElement(i[r])
                                , a = t(i[r]).data(n)
                                , c = {
                                relatedTarget: i[r]
                            };
                            if (a) {
                                var f = a._menu;
                                if (t(o).hasClass(h) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && t.contains(o, e.target))) {
                                    var u = t.Event(l.HIDE, c);
                                    t(o).trigger(u),
                                    u.isDefaultPrevented() || ("ontouchstart"in document.documentElement && t("body").children().off("mouseover", null, t.noop),
                                        i[r].setAttribute("aria-expanded", "false"),
                                        t(f).removeClass(h),
                                        t(o).removeClass(h).trigger(t.Event(l.HIDDEN, c)))
                                }
                            }
                        }
                }
                ,
                s._getParentFromElement = function(e) {
                    var n, i = k.getSelectorFromElement(e);
                    return i && (n = t(i)[0]),
                    n || e.parentNode
                }
                ,
                s._dataApiKeydownHandler = function(e) {
                    if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || t(e.target).closest(E).length)) : a.test(e.which)) && (e.preventDefault(),
                        e.stopPropagation(),
                    !this.disabled && !t(this).hasClass(c))) {
                        var n = s._getParentFromElement(this)
                            , i = t(n).hasClass(h);
                        if ((i || 27 === e.which && 32 === e.which) && (!i || 27 !== e.which && 32 !== e.which)) {
                            var r = t(n).find(b).get();
                            if (0 !== r.length) {
                                var o = r.indexOf(e.target);
                                38 === e.which && o > 0 && o--,
                                40 === e.which && o < r.length - 1 && o++,
                                o < 0 && (o = 0),
                                    r[o].focus()
                            }
                        } else {
                            if (27 === e.which) {
                                var l = t(n).find(_)[0];
                                t(l).trigger("focus")
                            }
                            t(this).trigger("click")
                        }
                    }
                }
                ,
                i(s, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.0.0"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return S
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return O
                    }
                }]),
                s
        }();
        return t(document).on(l.KEYDOWN_DATA_API, _, N._dataApiKeydownHandler).on(l.KEYDOWN_DATA_API, E, N._dataApiKeydownHandler).on(l.CLICK_DATA_API + " " + l.KEYUP_DATA_API, N._clearMenus).on(l.CLICK_DATA_API, _, function(e) {
            e.preventDefault(),
                e.stopPropagation(),
                N._jQueryInterface.call(t(this), "toggle")
        }).on(l.CLICK_DATA_API, v, function(t) {
            t.stopPropagation()
        }),
            t.fn[e] = N._jQueryInterface,
            t.fn[e].Constructor = N,
            t.fn[e].noConflict = function() {
                return t.fn[e] = s,
                    N._jQueryInterface
            }
            ,
            N
    }(e)
        , kt = function(t) {
        var e = "bs.modal"
            , n = "." + e
            , o = t.fn.modal
            , s = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        }
            , a = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        }
            , l = {
            HIDE: "hide" + n,
            HIDDEN: "hidden" + n,
            SHOW: "show" + n,
            SHOWN: "shown" + n,
            FOCUSIN: "focusin" + n,
            RESIZE: "resize" + n,
            CLICK_DISMISS: "click.dismiss" + n,
            KEYDOWN_DISMISS: "keydown.dismiss" + n,
            MOUSEUP_DISMISS: "mouseup.dismiss" + n,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + n,
            CLICK_DATA_API: "click.bs.modal.data-api"
        }
            , c = "modal-scrollbar-measure"
            , h = "modal-backdrop"
            , f = "modal-open"
            , u = "fade"
            , d = "show"
            , p = {
            DIALOG: ".modal-dialog",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            STICKY_CONTENT: ".sticky-top",
            NAVBAR_TOGGLER: ".navbar-toggler"
        }
            , g = function() {
            function o(e, n) {
                this._config = this._getConfig(n),
                    this._element = e,
                    this._dialog = t(e).find(p.DIALOG)[0],
                    this._backdrop = null,
                    this._isShown = !1,
                    this._isBodyOverflowing = !1,
                    this._ignoreBackdropClick = !1,
                    this._originalBodyPadding = 0,
                    this._scrollbarWidth = 0
            }
            var g = o.prototype;
            return g.toggle = function(t) {
                return this._isShown ? this.hide() : this.show(t)
            }
                ,
                g.show = function(e) {
                    var n = this;
                    if (!this._isTransitioning && !this._isShown) {
                        k.supportsTransitionEnd() && t(this._element).hasClass(u) && (this._isTransitioning = !0);
                        var i = t.Event(l.SHOW, {
                            relatedTarget: e
                        });
                        t(this._element).trigger(i),
                        this._isShown || i.isDefaultPrevented() || (this._isShown = !0,
                            this._checkScrollbar(),
                            this._setScrollbar(),
                            this._adjustDialog(),
                            t(document.body).addClass(f),
                            this._setEscapeEvent(),
                            this._setResizeEvent(),
                            t(this._element).on(l.CLICK_DISMISS, p.DATA_DISMISS, function(t) {
                                return n.hide(t)
                            }),
                            t(this._dialog).on(l.MOUSEDOWN_DISMISS, function() {
                                t(n._element).one(l.MOUSEUP_DISMISS, function(e) {
                                    t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                                })
                            }),
                            this._showBackdrop(function() {
                                return n._showElement(e)
                            }))
                    }
                }
                ,
                g.hide = function(e) {
                    var n = this;
                    if (e && e.preventDefault(),
                    !this._isTransitioning && this._isShown) {
                        var i = t.Event(l.HIDE);
                        if (t(this._element).trigger(i),
                        this._isShown && !i.isDefaultPrevented()) {
                            this._isShown = !1;
                            var r = k.supportsTransitionEnd() && t(this._element).hasClass(u);
                            r && (this._isTransitioning = !0),
                                this._setEscapeEvent(),
                                this._setResizeEvent(),
                                t(document).off(l.FOCUSIN),
                                t(this._element).removeClass(d),
                                t(this._element).off(l.CLICK_DISMISS),
                                t(this._dialog).off(l.MOUSEDOWN_DISMISS),
                                r ? t(this._element).one(k.TRANSITION_END, function(t) {
                                    return n._hideModal(t)
                                }).emulateTransitionEnd(300) : this._hideModal()
                        }
                    }
                }
                ,
                g.dispose = function() {
                    t.removeData(this._element, e),
                        t(window, document, this._element, this._backdrop).off(n),
                        this._config = null,
                        this._element = null,
                        this._dialog = null,
                        this._backdrop = null,
                        this._isShown = null,
                        this._isBodyOverflowing = null,
                        this._ignoreBackdropClick = null,
                        this._scrollbarWidth = null
                }
                ,
                g.handleUpdate = function() {
                    this._adjustDialog()
                }
                ,
                g._getConfig = function(t) {
                    return t = r({}, s, t),
                        k.typeCheckConfig("modal", t, a),
                        t
                }
                ,
                g._showElement = function(e) {
                    var n = this
                        , i = k.supportsTransitionEnd() && t(this._element).hasClass(u);
                    this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
                        this._element.style.display = "block",
                        this._element.removeAttribute("aria-hidden"),
                        this._element.scrollTop = 0,
                    i && k.reflow(this._element),
                        t(this._element).addClass(d),
                    this._config.focus && this._enforceFocus();
                    var r = t.Event(l.SHOWN, {
                        relatedTarget: e
                    })
                        , o = function() {
                        n._config.focus && n._element.focus(),
                            n._isTransitioning = !1,
                            t(n._element).trigger(r)
                    };
                    i ? t(this._dialog).one(k.TRANSITION_END, o).emulateTransitionEnd(300) : o()
                }
                ,
                g._enforceFocus = function() {
                    var e = this;
                    t(document).off(l.FOCUSIN).on(l.FOCUSIN, function(n) {
                        document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus()
                    })
                }
                ,
                g._setEscapeEvent = function() {
                    var e = this;
                    this._isShown && this._config.keyboard ? t(this._element).on(l.KEYDOWN_DISMISS, function(t) {
                        27 === t.which && (t.preventDefault(),
                            e.hide())
                    }) : this._isShown || t(this._element).off(l.KEYDOWN_DISMISS)
                }
                ,
                g._setResizeEvent = function() {
                    var e = this;
                    this._isShown ? t(window).on(l.RESIZE, function(t) {
                        return e.handleUpdate(t)
                    }) : t(window).off(l.RESIZE)
                }
                ,
                g._hideModal = function() {
                    var e = this;
                    this._element.style.display = "none",
                        this._element.setAttribute("aria-hidden", !0),
                        this._isTransitioning = !1,
                        this._showBackdrop(function() {
                            t(document.body).removeClass(f),
                                e._resetAdjustments(),
                                e._resetScrollbar(),
                                t(e._element).trigger(l.HIDDEN)
                        })
                }
                ,
                g._removeBackdrop = function() {
                    this._backdrop && (t(this._backdrop).remove(),
                        this._backdrop = null)
                }
                ,
                g._showBackdrop = function(e) {
                    var n = this
                        , i = t(this._element).hasClass(u) ? u : "";
                    if (this._isShown && this._config.backdrop) {
                        var r = k.supportsTransitionEnd() && i;
                        if (this._backdrop = document.createElement("div"),
                            this._backdrop.className = h,
                        i && t(this._backdrop).addClass(i),
                            t(this._backdrop).appendTo(document.body),
                            t(this._element).on(l.CLICK_DISMISS, function(t) {
                                n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                            }),
                        r && k.reflow(this._backdrop),
                            t(this._backdrop).addClass(d),
                            !e)
                            return;
                        if (!r)
                            return void e();
                        t(this._backdrop).one(k.TRANSITION_END, e).emulateTransitionEnd(150)
                    } else if (!this._isShown && this._backdrop) {
                        t(this._backdrop).removeClass(d);
                        var o = function() {
                            n._removeBackdrop(),
                            e && e()
                        };
                        k.supportsTransitionEnd() && t(this._element).hasClass(u) ? t(this._backdrop).one(k.TRANSITION_END, o).emulateTransitionEnd(150) : o()
                    } else
                        e && e()
                }
                ,
                g._adjustDialog = function() {
                    var t = this._element.scrollHeight > document.documentElement.clientHeight;
                    !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
                    this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                }
                ,
                g._resetAdjustments = function() {
                    this._element.style.paddingLeft = "",
                        this._element.style.paddingRight = ""
                }
                ,
                g._checkScrollbar = function() {
                    var t = document.body.getBoundingClientRect();
                    this._isBodyOverflowing = t.left + t.right < window.innerWidth,
                        this._scrollbarWidth = this._getScrollbarWidth()
                }
                ,
                g._setScrollbar = function() {
                    var e = this;
                    if (this._isBodyOverflowing) {
                        t(p.FIXED_CONTENT).each(function(n, i) {
                            var r = t(i)[0].style.paddingRight
                                , o = t(i).css("padding-right");
                            t(i).data("padding-right", r).css("padding-right", parseFloat(o) + e._scrollbarWidth + "px")
                        }),
                            t(p.STICKY_CONTENT).each(function(n, i) {
                                var r = t(i)[0].style.marginRight
                                    , o = t(i).css("margin-right");
                                t(i).data("margin-right", r).css("margin-right", parseFloat(o) - e._scrollbarWidth + "px")
                            }),
                            t(p.NAVBAR_TOGGLER).each(function(n, i) {
                                var r = t(i)[0].style.marginRight
                                    , o = t(i).css("margin-right");
                                t(i).data("margin-right", r).css("margin-right", parseFloat(o) + e._scrollbarWidth + "px")
                            });
                        var n = document.body.style.paddingRight
                            , i = t("body").css("padding-right");
                        t("body").data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                    }
                }
                ,
                g._resetScrollbar = function() {
                    t(p.FIXED_CONTENT).each(function(e, n) {
                        var i = t(n).data("padding-right");
                        "undefined" != typeof i && t(n).css("padding-right", i).removeData("padding-right")
                    }),
                        t(p.STICKY_CONTENT + ", " + p.NAVBAR_TOGGLER).each(function(e, n) {
                            var i = t(n).data("margin-right");
                            "undefined" != typeof i && t(n).css("margin-right", i).removeData("margin-right")
                        });
                    var e = t("body").data("padding-right");
                    "undefined" != typeof e && t("body").css("padding-right", e).removeData("padding-right")
                }
                ,
                g._getScrollbarWidth = function() {
                    var t = document.createElement("div");
                    t.className = c,
                        document.body.appendChild(t);
                    var e = t.getBoundingClientRect().width - t.clientWidth;
                    return document.body.removeChild(t),
                        e
                }
                ,
                o._jQueryInterface = function(n, i) {
                    return this.each(function() {
                        var s = t(this).data(e)
                            , a = r({}, o.Default, t(this).data(), "object" == typeof n && n);
                        if (s || (s = new o(this,a),
                            t(this).data(e, s)),
                        "string" == typeof n) {
                            if ("undefined" == typeof s[n])
                                throw new TypeError('No method named "' + n + '"');
                            s[n](i)
                        } else
                            a.show && s.show(i)
                    })
                }
                ,
                i(o, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.0.0"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return s
                    }
                }]),
                o
        }();
        return t(document).on(l.CLICK_DATA_API, p.DATA_TOGGLE, function(n) {
            var i, o = this, s = k.getSelectorFromElement(this);
            s && (i = t(s)[0]);
            var a = t(i).data(e) ? "toggle" : r({}, t(i).data(), t(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || n.preventDefault();
            var c = t(i).one(l.SHOW, function(e) {
                e.isDefaultPrevented() || c.one(l.HIDDEN, function() {
                    t(o).is(":visible") && o.focus()
                })
            });
            g._jQueryInterface.call(t(i), a, this)
        }),
            t.fn.modal = g._jQueryInterface,
            t.fn.modal.Constructor = g,
            t.fn.modal.noConflict = function() {
                return t.fn.modal = o,
                    g._jQueryInterface
            }
            ,
            g
    }(e)
        , Lt = function(t) {
        var e = "tooltip"
            , n = "bs.tooltip"
            , o = "." + n
            , s = t.fn[e]
            , a = new RegExp("(^|\\s)bs-tooltip\\S+","g")
            , l = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)"
        }
            , c = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        }
            , h = {
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
            boundary: "scrollParent"
        }
            , f = "show"
            , u = "out"
            , d = {
            HIDE: "hide" + o,
            HIDDEN: "hidden" + o,
            SHOW: "show" + o,
            SHOWN: "shown" + o,
            INSERTED: "inserted" + o,
            CLICK: "click" + o,
            FOCUSIN: "focusin" + o,
            FOCUSOUT: "focusout" + o,
            MOUSEENTER: "mouseenter" + o,
            MOUSELEAVE: "mouseleave" + o
        }
            , p = "fade"
            , g = "show"
            , m = ".tooltip-inner"
            , _ = ".arrow"
            , v = "hover"
            , E = "focus"
            , y = "click"
            , b = "manual"
            , T = function() {
            function s(t, e) {
                if ("undefined" == typeof Ot)
                    throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
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
            var T = s.prototype;
            return T.enable = function() {
                this._isEnabled = !0
            }
                ,
                T.disable = function() {
                    this._isEnabled = !1
                }
                ,
                T.toggleEnabled = function() {
                    this._isEnabled = !this._isEnabled
                }
                ,
                T.toggle = function(e) {
                    if (this._isEnabled)
                        if (e) {
                            var n = this.constructor.DATA_KEY
                                , i = t(e.currentTarget).data(n);
                            i || (i = new this.constructor(e.currentTarget,this._getDelegateConfig()),
                                t(e.currentTarget).data(n, i)),
                                i._activeTrigger.click = !i._activeTrigger.click,
                                i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                        } else {
                            if (t(this.getTipElement()).hasClass(g))
                                return void this._leave(null, this);
                            this._enter(null, this)
                        }
                }
                ,
                T.dispose = function() {
                    clearTimeout(this._timeout),
                        t.removeData(this.element, this.constructor.DATA_KEY),
                        t(this.element).off(this.constructor.EVENT_KEY),
                        t(this.element).closest(".modal").off("hide.bs.modal"),
                    this.tip && t(this.tip).remove(),
                        this._isEnabled = null,
                        this._timeout = null,
                        this._hoverState = null,
                        this._activeTrigger = null,
                    null !== this._popper && this._popper.destroy(),
                        this._popper = null,
                        this.element = null,
                        this.config = null,
                        this.tip = null
                }
                ,
                T.show = function() {
                    var e = this;
                    if ("none" === t(this.element).css("display"))
                        throw new Error("Please use show on visible elements");
                    var n = t.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        t(this.element).trigger(n);
                        var i = t.contains(this.element.ownerDocument.documentElement, this.element);
                        if (n.isDefaultPrevented() || !i)
                            return;
                        var r = this.getTipElement()
                            , o = k.getUID(this.constructor.NAME);
                        r.setAttribute("id", o),
                            this.element.setAttribute("aria-describedby", o),
                            this.setContent(),
                        this.config.animation && t(r).addClass(p);
                        var a = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement
                            , l = this._getAttachment(a);
                        this.addAttachmentClass(l);
                        var c = !1 === this.config.container ? document.body : t(this.config.container);
                        t(r).data(this.constructor.DATA_KEY, this),
                        t.contains(this.element.ownerDocument.documentElement, this.tip) || t(r).appendTo(c),
                            t(this.element).trigger(this.constructor.Event.INSERTED),
                            this._popper = new Ot(this.element,r,{
                                placement: l,
                                modifiers: {
                                    offset: {
                                        offset: this.config.offset
                                    },
                                    flip: {
                                        behavior: this.config.fallbackPlacement
                                    },
                                    arrow: {
                                        element: _
                                    },
                                    preventOverflow: {
                                        boundariesElement: this.config.boundary
                                    }
                                },
                                onCreate: function(t) {
                                    t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                                },
                                onUpdate: function(t) {
                                    e._handlePopperPlacementChange(t)
                                }
                            }),
                            t(r).addClass(g),
                        "ontouchstart"in document.documentElement && t("body").children().on("mouseover", null, t.noop);
                        var h = function() {
                            e.config.animation && e._fixTransition();
                            var n = e._hoverState;
                            e._hoverState = null,
                                t(e.element).trigger(e.constructor.Event.SHOWN),
                            n === u && e._leave(null, e)
                        };
                        k.supportsTransitionEnd() && t(this.tip).hasClass(p) ? t(this.tip).one(k.TRANSITION_END, h).emulateTransitionEnd(s._TRANSITION_DURATION) : h()
                    }
                }
                ,
                T.hide = function(e) {
                    var n = this
                        , i = this.getTipElement()
                        , r = t.Event(this.constructor.Event.HIDE)
                        , o = function() {
                        n._hoverState !== f && i.parentNode && i.parentNode.removeChild(i),
                            n._cleanTipClass(),
                            n.element.removeAttribute("aria-describedby"),
                            t(n.element).trigger(n.constructor.Event.HIDDEN),
                        null !== n._popper && n._popper.destroy(),
                        e && e()
                    };
                    t(this.element).trigger(r),
                    r.isDefaultPrevented() || (t(i).removeClass(g),
                    "ontouchstart"in document.documentElement && t("body").children().off("mouseover", null, t.noop),
                        this._activeTrigger[y] = !1,
                        this._activeTrigger[E] = !1,
                        this._activeTrigger[v] = !1,
                        k.supportsTransitionEnd() && t(this.tip).hasClass(p) ? t(i).one(k.TRANSITION_END, o).emulateTransitionEnd(150) : o(),
                        this._hoverState = "")
                }
                ,
                T.update = function() {
                    null !== this._popper && this._popper.scheduleUpdate()
                }
                ,
                T.isWithContent = function() {
                    return Boolean(this.getTitle())
                }
                ,
                T.addAttachmentClass = function(e) {
                    t(this.getTipElement()).addClass("bs-tooltip-" + e)
                }
                ,
                T.getTipElement = function() {
                    return this.tip = this.tip || t(this.config.template)[0],
                        this.tip
                }
                ,
                T.setContent = function() {
                    var e = t(this.getTipElement());
                    this.setElementContent(e.find(m), this.getTitle()),
                        e.removeClass(p + " " + g)
                }
                ,
                T.setElementContent = function(e, n) {
                    var i = this.config.html;
                    "object" == typeof n && (n.nodeType || n.jquery) ? i ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()) : e[i ? "html" : "text"](n)
                }
                ,
                T.getTitle = function() {
                    var t = this.element.getAttribute("data-original-title");
                    return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
                        t
                }
                ,
                T._getAttachment = function(t) {
                    return c[t.toUpperCase()]
                }
                ,
                T._setListeners = function() {
                    var e = this;
                    this.config.trigger.split(" ").forEach(function(n) {
                        if ("click" === n)
                            t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
                                return e.toggle(t)
                            });
                        else if (n !== b) {
                            var i = n === v ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN
                                , r = n === v ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                            t(e.element).on(i, e.config.selector, function(t) {
                                return e._enter(t)
                            }).on(r, e.config.selector, function(t) {
                                return e._leave(t)
                            })
                        }
                        t(e.element).closest(".modal").on("hide.bs.modal", function() {
                            return e.hide()
                        })
                    }),
                        this.config.selector ? this.config = r({}, this.config, {
                            trigger: "manual",
                            selector: ""
                        }) : this._fixTitle()
                }
                ,
                T._fixTitle = function() {
                    var t = typeof this.element.getAttribute("data-original-title");
                    (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
                        this.element.setAttribute("title", ""))
                }
                ,
                T._enter = function(e, n) {
                    var i = this.constructor.DATA_KEY;
                    (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget,this._getDelegateConfig()),
                        t(e.currentTarget).data(i, n)),
                    e && (n._activeTrigger["focusin" === e.type ? E : v] = !0),
                        t(n.getTipElement()).hasClass(g) || n._hoverState === f ? n._hoverState = f : (clearTimeout(n._timeout),
                            n._hoverState = f,
                            n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function() {
                                n._hoverState === f && n.show()
                            }, n.config.delay.show) : n.show())
                }
                ,
                T._leave = function(e, n) {
                    var i = this.constructor.DATA_KEY;
                    (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget,this._getDelegateConfig()),
                        t(e.currentTarget).data(i, n)),
                    e && (n._activeTrigger["focusout" === e.type ? E : v] = !1),
                    n._isWithActiveTrigger() || (clearTimeout(n._timeout),
                        n._hoverState = u,
                        n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function() {
                            n._hoverState === u && n.hide()
                        }, n.config.delay.hide) : n.hide())
                }
                ,
                T._isWithActiveTrigger = function() {
                    for (var t in this._activeTrigger)
                        if (this._activeTrigger[t])
                            return !0;
                    return !1
                }
                ,
                T._getConfig = function(n) {
                    return "number" == typeof (n = r({}, this.constructor.Default, t(this.element).data(), n)).delay && (n.delay = {
                        show: n.delay,
                        hide: n.delay
                    }),
                    "number" == typeof n.title && (n.title = n.title.toString()),
                    "number" == typeof n.content && (n.content = n.content.toString()),
                        k.typeCheckConfig(e, n, this.constructor.DefaultType),
                        n
                }
                ,
                T._getDelegateConfig = function() {
                    var t = {};
                    if (this.config)
                        for (var e in this.config)
                            this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                    return t
                }
                ,
                T._cleanTipClass = function() {
                    var e = t(this.getTipElement())
                        , n = e.attr("class").match(a);
                    null !== n && n.length > 0 && e.removeClass(n.join(""))
                }
                ,
                T._handlePopperPlacementChange = function(t) {
                    this._cleanTipClass(),
                        this.addAttachmentClass(this._getAttachment(t.placement))
                }
                ,
                T._fixTransition = function() {
                    var e = this.getTipElement()
                        , n = this.config.animation;
                    null === e.getAttribute("x-placement") && (t(e).removeClass(p),
                        this.config.animation = !1,
                        this.hide(),
                        this.show(),
                        this.config.animation = n)
                }
                ,
                s._jQueryInterface = function(e) {
                    return this.each(function() {
                        var i = t(this).data(n)
                            , r = "object" == typeof e && e;
                        if ((i || !/dispose|hide/.test(e)) && (i || (i = new s(this,r),
                            t(this).data(n, i)),
                        "string" == typeof e)) {
                            if ("undefined" == typeof i[e])
                                throw new TypeError('No method named "' + e + '"');
                            i[e]()
                        }
                    })
                }
                ,
                i(s, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.0.0"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return h
                    }
                }, {
                    key: "NAME",
                    get: function() {
                        return e
                    }
                }, {
                    key: "DATA_KEY",
                    get: function() {
                        return n
                    }
                }, {
                    key: "Event",
                    get: function() {
                        return d
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function() {
                        return o
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return l
                    }
                }]),
                s
        }();
        return t.fn[e] = T._jQueryInterface,
            t.fn[e].Constructor = T,
            t.fn[e].noConflict = function() {
                return t.fn[e] = s,
                    T._jQueryInterface
            }
            ,
            T
    }(e)
        , Pt = function(t) {
        var e = "popover"
            , n = "bs.popover"
            , o = "." + n
            , s = t.fn[e]
            , a = new RegExp("(^|\\s)bs-popover\\S+","g")
            , l = r({}, Lt.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        })
            , c = r({}, Lt.DefaultType, {
            content: "(string|element|function)"
        })
            , h = "fade"
            , f = "show"
            , u = ".popover-header"
            , d = ".popover-body"
            , p = {
            HIDE: "hide" + o,
            HIDDEN: "hidden" + o,
            SHOW: "show" + o,
            SHOWN: "shown" + o,
            INSERTED: "inserted" + o,
            CLICK: "click" + o,
            FOCUSIN: "focusin" + o,
            FOCUSOUT: "focusout" + o,
            MOUSEENTER: "mouseenter" + o,
            MOUSELEAVE: "mouseleave" + o
        }
            , g = function(r) {
            var s, g;
            function m() {
                return r.apply(this, arguments) || this
            }
            g = r,
                (s = m).prototype = Object.create(g.prototype),
                s.prototype.constructor = s,
                s.__proto__ = g;
            var _ = m.prototype;
            return _.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }
                ,
                _.addAttachmentClass = function(e) {
                    t(this.getTipElement()).addClass("bs-popover-" + e)
                }
                ,
                _.getTipElement = function() {
                    return this.tip = this.tip || t(this.config.template)[0],
                        this.tip
                }
                ,
                _.setContent = function() {
                    var e = t(this.getTipElement());
                    this.setElementContent(e.find(u), this.getTitle());
                    var n = this._getContent();
                    "function" == typeof n && (n = n.call(this.element)),
                        this.setElementContent(e.find(d), n),
                        e.removeClass(h + " " + f)
                }
                ,
                _._getContent = function() {
                    return this.element.getAttribute("data-content") || this.config.content
                }
                ,
                _._cleanTipClass = function() {
                    var e = t(this.getTipElement())
                        , n = e.attr("class").match(a);
                    null !== n && n.length > 0 && e.removeClass(n.join(""))
                }
                ,
                m._jQueryInterface = function(e) {
                    return this.each(function() {
                        var i = t(this).data(n)
                            , r = "object" == typeof e ? e : null;
                        if ((i || !/destroy|hide/.test(e)) && (i || (i = new m(this,r),
                            t(this).data(n, i)),
                        "string" == typeof e)) {
                            if ("undefined" == typeof i[e])
                                throw new TypeError('No method named "' + e + '"');
                            i[e]()
                        }
                    })
                }
                ,
                i(m, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.0.0"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return l
                    }
                }, {
                    key: "NAME",
                    get: function() {
                        return e
                    }
                }, {
                    key: "DATA_KEY",
                    get: function() {
                        return n
                    }
                }, {
                    key: "Event",
                    get: function() {
                        return p
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function() {
                        return o
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return c
                    }
                }]),
                m
        }(Lt);
        return t.fn[e] = g._jQueryInterface,
            t.fn[e].Constructor = g,
            t.fn[e].noConflict = function() {
                return t.fn[e] = s,
                    g._jQueryInterface
            }
            ,
            g
    }(e)
        , xt = function(t) {
        var e = "scrollspy"
            , n = "bs.scrollspy"
            , o = "." + n
            , s = t.fn[e]
            , a = {
            offset: 10,
            method: "auto",
            target: ""
        }
            , l = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        }
            , c = {
            ACTIVATE: "activate" + o,
            SCROLL: "scroll" + o,
            LOAD_DATA_API: "load" + o + ".data-api"
        }
            , h = "dropdown-item"
            , f = "active"
            , u = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: ".active",
            NAV_LIST_GROUP: ".nav, .list-group",
            NAV_LINKS: ".nav-link",
            NAV_ITEMS: ".nav-item",
            LIST_ITEMS: ".list-group-item",
            DROPDOWN: ".dropdown",
            DROPDOWN_ITEMS: ".dropdown-item",
            DROPDOWN_TOGGLE: ".dropdown-toggle"
        }
            , d = "offset"
            , p = "position"
            , g = function() {
            function s(e, n) {
                var i = this;
                this._element = e,
                    this._scrollElement = "BODY" === e.tagName ? window : e,
                    this._config = this._getConfig(n),
                    this._selector = this._config.target + " " + u.NAV_LINKS + "," + this._config.target + " " + u.LIST_ITEMS + "," + this._config.target + " " + u.DROPDOWN_ITEMS,
                    this._offsets = [],
                    this._targets = [],
                    this._activeTarget = null,
                    this._scrollHeight = 0,
                    t(this._scrollElement).on(c.SCROLL, function(t) {
                        return i._process(t)
                    }),
                    this.refresh(),
                    this._process()
            }
            var g = s.prototype;
            return g.refresh = function() {
                var e = this
                    , n = this._scrollElement === this._scrollElement.window ? d : p
                    , i = "auto" === this._config.method ? n : this._config.method
                    , r = i === p ? this._getScrollTop() : 0;
                this._offsets = [],
                    this._targets = [],
                    this._scrollHeight = this._getScrollHeight(),
                    t.makeArray(t(this._selector)).map(function(e) {
                        var n, o = k.getSelectorFromElement(e);
                        if (o && (n = t(o)[0]),
                            n) {
                            var s = n.getBoundingClientRect();
                            if (s.width || s.height)
                                return [t(n)[i]().top + r, o]
                        }
                        return null
                    }).filter(function(t) {
                        return t
                    }).sort(function(t, e) {
                        return t[0] - e[0]
                    }).forEach(function(t) {
                        e._offsets.push(t[0]),
                            e._targets.push(t[1])
                    })
            }
                ,
                g.dispose = function() {
                    t.removeData(this._element, n),
                        t(this._scrollElement).off(o),
                        this._element = null,
                        this._scrollElement = null,
                        this._config = null,
                        this._selector = null,
                        this._offsets = null,
                        this._targets = null,
                        this._activeTarget = null,
                        this._scrollHeight = null
                }
                ,
                g._getConfig = function(n) {
                    if ("string" != typeof (n = r({}, a, n)).target) {
                        var i = t(n.target).attr("id");
                        i || (i = k.getUID(e),
                            t(n.target).attr("id", i)),
                            n.target = "#" + i
                    }
                    return k.typeCheckConfig(e, n, l),
                        n
                }
                ,
                g._getScrollTop = function() {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                }
                ,
                g._getScrollHeight = function() {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }
                ,
                g._getOffsetHeight = function() {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                }
                ,
                g._process = function() {
                    var t = this._getScrollTop() + this._config.offset
                        , e = this._getScrollHeight()
                        , n = this._config.offset + e - this._getOffsetHeight();
                    if (this._scrollHeight !== e && this.refresh(),
                    t >= n) {
                        var i = this._targets[this._targets.length - 1];
                        this._activeTarget !== i && this._activate(i)
                    } else {
                        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
                            return this._activeTarget = null,
                                void this._clear();
                        for (var r = this._offsets.length; r--; ) {
                            this._activeTarget !== this._targets[r] && t >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r])
                        }
                    }
                }
                ,
                g._activate = function(e) {
                    this._activeTarget = e,
                        this._clear();
                    var n = this._selector.split(",");
                    n = n.map(function(t) {
                        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                    });
                    var i = t(n.join(","));
                    i.hasClass(h) ? (i.closest(u.DROPDOWN).find(u.DROPDOWN_TOGGLE).addClass(f),
                        i.addClass(f)) : (i.addClass(f),
                        i.parents(u.NAV_LIST_GROUP).prev(u.NAV_LINKS + ", " + u.LIST_ITEMS).addClass(f),
                        i.parents(u.NAV_LIST_GROUP).prev(u.NAV_ITEMS).children(u.NAV_LINKS).addClass(f)),
                        t(this._scrollElement).trigger(c.ACTIVATE, {
                            relatedTarget: e
                        })
                }
                ,
                g._clear = function() {
                    t(this._selector).filter(u.ACTIVE).removeClass(f)
                }
                ,
                s._jQueryInterface = function(e) {
                    return this.each(function() {
                        var i = t(this).data(n);
                        if (i || (i = new s(this,"object" == typeof e && e),
                            t(this).data(n, i)),
                        "string" == typeof e) {
                            if ("undefined" == typeof i[e])
                                throw new TypeError('No method named "' + e + '"');
                            i[e]()
                        }
                    })
                }
                ,
                i(s, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.0.0"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return a
                    }
                }]),
                s
        }();
        return t(window).on(c.LOAD_DATA_API, function() {
            for (var e = t.makeArray(t(u.DATA_SPY)), n = e.length; n--; ) {
                var i = t(e[n]);
                g._jQueryInterface.call(i, i.data())
            }
        }),
            t.fn[e] = g._jQueryInterface,
            t.fn[e].Constructor = g,
            t.fn[e].noConflict = function() {
                return t.fn[e] = s,
                    g._jQueryInterface
            }
            ,
            g
    }(e)
        , Rt = function(t) {
        var e = ".bs.tab"
            , n = t.fn.tab
            , r = {
            HIDE: "hide" + e,
            HIDDEN: "hidden" + e,
            SHOW: "show" + e,
            SHOWN: "shown" + e,
            CLICK_DATA_API: "click.bs.tab.data-api"
        }
            , o = "dropdown-menu"
            , s = "active"
            , a = "disabled"
            , l = "fade"
            , c = "show"
            , h = ".dropdown"
            , f = ".nav, .list-group"
            , u = ".active"
            , d = "> li > .active"
            , p = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]'
            , g = ".dropdown-toggle"
            , m = "> .dropdown-menu .active"
            , _ = function() {
            function e(t) {
                this._element = t
            }
            var n = e.prototype;
            return n.show = function() {
                var e = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(s) || t(this._element).hasClass(a))) {
                    var n, i, o = t(this._element).closest(f)[0], l = k.getSelectorFromElement(this._element);
                    if (o) {
                        var c = "UL" === o.nodeName ? d : u;
                        i = (i = t.makeArray(t(o).find(c)))[i.length - 1]
                    }
                    var h = t.Event(r.HIDE, {
                        relatedTarget: this._element
                    })
                        , p = t.Event(r.SHOW, {
                        relatedTarget: i
                    });
                    if (i && t(i).trigger(h),
                        t(this._element).trigger(p),
                    !p.isDefaultPrevented() && !h.isDefaultPrevented()) {
                        l && (n = t(l)[0]),
                            this._activate(this._element, o);
                        var g = function() {
                            var n = t.Event(r.HIDDEN, {
                                relatedTarget: e._element
                            })
                                , o = t.Event(r.SHOWN, {
                                relatedTarget: i
                            });
                            t(i).trigger(n),
                                t(e._element).trigger(o)
                        };
                        n ? this._activate(n, n.parentNode, g) : g()
                    }
                }
            }
                ,
                n.dispose = function() {
                    t.removeData(this._element, "bs.tab"),
                        this._element = null
                }
                ,
                n._activate = function(e, n, i) {
                    var r = this
                        , o = ("UL" === n.nodeName ? t(n).find(d) : t(n).children(u))[0]
                        , s = i && k.supportsTransitionEnd() && o && t(o).hasClass(l)
                        , a = function() {
                        return r._transitionComplete(e, o, i)
                    };
                    o && s ? t(o).one(k.TRANSITION_END, a).emulateTransitionEnd(150) : a()
                }
                ,
                n._transitionComplete = function(e, n, i) {
                    if (n) {
                        t(n).removeClass(c + " " + s);
                        var r = t(n.parentNode).find(m)[0];
                        r && t(r).removeClass(s),
                        "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                    }
                    if (t(e).addClass(s),
                    "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0),
                        k.reflow(e),
                        t(e).addClass(c),
                    e.parentNode && t(e.parentNode).hasClass(o)) {
                        var a = t(e).closest(h)[0];
                        a && t(a).find(g).addClass(s),
                            e.setAttribute("aria-expanded", !0)
                    }
                    i && i()
                }
                ,
                e._jQueryInterface = function(n) {
                    return this.each(function() {
                        var i = t(this)
                            , r = i.data("bs.tab");
                        if (r || (r = new e(this),
                            i.data("bs.tab", r)),
                        "string" == typeof n) {
                            if ("undefined" == typeof r[n])
                                throw new TypeError('No method named "' + n + '"');
                            r[n]()
                        }
                    })
                }
                ,
                i(e, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.0.0"
                    }
                }]),
                e
        }();
        return t(document).on(r.CLICK_DATA_API, p, function(e) {
            e.preventDefault(),
                _._jQueryInterface.call(t(this), "show")
        }),
            t.fn.tab = _._jQueryInterface,
            t.fn.tab.Constructor = _,
            t.fn.tab.noConflict = function() {
                return t.fn.tab = n,
                    _._jQueryInterface
            }
            ,
            _
    }(e);
    !function(t) {
        if ("undefined" == typeof t)
            throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var e = t.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4)
            throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(e),
        t.Util = k,
        t.Alert = L,
        t.Button = P,
        t.Carousel = x,
        t.Collapse = R,
        t.Dropdown = Nt,
        t.Modal = kt,
        t.Popover = Pt,
        t.Scrollspy = xt,
        t.Tab = Rt,
        t.Tooltip = Lt,
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
});
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) : typeof define === 'function' && define.amd ? define(['jquery'], factory) : (factory(global.jQuery));
}(this, (function($) {
        'use strict';
        $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
        var WINDOW = typeof window !== 'undefined' ? window : {};
        var NAMESPACE = 'cropper';
        var ACTION_ALL = 'all';
        var ACTION_CROP = 'crop';
        var ACTION_MOVE = 'move';
        var ACTION_ZOOM = 'zoom';
        var ACTION_EAST = 'e';
        var ACTION_WEST = 'w';
        var ACTION_SOUTH = 's';
        var ACTION_NORTH = 'n';
        var ACTION_NORTH_EAST = 'ne';
        var ACTION_NORTH_WEST = 'nw';
        var ACTION_SOUTH_EAST = 'se';
        var ACTION_SOUTH_WEST = 'sw';
        var CLASS_CROP = NAMESPACE + '-crop';
        var CLASS_DISABLED = NAMESPACE + '-disabled';
        var CLASS_HIDDEN = NAMESPACE + '-hidden';
        var CLASS_HIDE = NAMESPACE + '-hide';
        var CLASS_INVISIBLE = NAMESPACE + '-invisible';
        var CLASS_MODAL = NAMESPACE + '-modal';
        var CLASS_MOVE = NAMESPACE + '-move';
        var DATA_ACTION = 'action';
        var DATA_PREVIEW = 'preview';
        var DRAG_MODE_CROP = 'crop';
        var DRAG_MODE_MOVE = 'move';
        var DRAG_MODE_NONE = 'none';
        var EVENT_CROP = 'crop';
        var EVENT_CROP_END = 'cropend';
        var EVENT_CROP_MOVE = 'cropmove';
        var EVENT_CROP_START = 'cropstart';
        var EVENT_DBLCLICK = 'dblclick';
        var EVENT_ERROR = 'error';
        var EVENT_LOAD = 'load';
        var EVENT_POINTER_DOWN = WINDOW.PointerEvent ? 'pointerdown' : 'touchstart mousedown';
        var EVENT_POINTER_MOVE = WINDOW.PointerEvent ? 'pointermove' : 'touchmove mousemove';
        var EVENT_POINTER_UP = WINDOW.PointerEvent ? 'pointerup pointercancel' : 'touchend touchcancel mouseup';
        var EVENT_READY = 'ready';
        var EVENT_RESIZE = 'resize';
        var EVENT_WHEEL = 'wheel mousewheel DOMMouseScroll';
        var EVENT_ZOOM = 'zoom';
        var REGEXP_ACTIONS = /^(e|w|s|n|se|sw|ne|nw|all|crop|move|zoom)$/;
        var REGEXP_DATA_URL = /^data:/;
        var REGEXP_DATA_URL_JPEG = /^data:image\/jpeg;base64,/;
        var REGEXP_TAG_NAME = /^(img|canvas)$/i;
        var DEFAULTS = {
            viewMode: 0,
            dragMode: DRAG_MODE_CROP,
            aspectRatio: NaN,
            data: null,
            preview: '',
            responsive: true,
            restore: true,
            checkCrossOrigin: true,
            checkOrientation: true,
            modal: true,
            guides: true,
            center: true,
            highlight: true,
            background: true,
            autoCrop: true,
            autoCropArea: 0.8,
            movable: true,
            rotatable: true,
            scalable: true,
            zoomable: true,
            zoomOnTouch: true,
            zoomOnWheel: true,
            wheelZoomRatio: 0.1,
            cropBoxMovable: true,
            cropBoxResizable: true,
            toggleDragModeOnDblclick: true,
            minCanvasWidth: 0,
            minCanvasHeight: 0,
            minCropBoxWidth: 0,
            minCropBoxHeight: 0,
            minContainerWidth: 200,
            minContainerHeight: 100,
            ready: null,
            cropstart: null,
            cropmove: null,
            cropend: null,
            crop: null,
            zoom: null
        };
        var TEMPLATE = '<div class="cropper-container">' + '<div class="cropper-wrap-box">' + '<div class="cropper-canvas"></div>' + '</div>' + '<div class="cropper-drag-box"></div>' + '<div class="cropper-crop-box">' + '<span class="cropper-view-box"></span>' + '<span class="cropper-dashed dashed-h"></span>' + '<span class="cropper-dashed dashed-v"></span>' + '<span class="cropper-center"></span>' + '<span class="cropper-face"></span>' + '<span class="cropper-line line-e" data-action="e"></span>' + '<span class="cropper-line line-n" data-action="n"></span>' + '<span class="cropper-line line-w" data-action="w"></span>' + '<span class="cropper-line line-s" data-action="s"></span>' + '<span class="cropper-point point-e" data-action="e"></span>' + '<span class="cropper-point point-n" data-action="n"></span>' + '<span class="cropper-point point-w" data-action="w"></span>' + '<span class="cropper-point point-s" data-action="s"></span>' + '<span class="cropper-point point-ne" data-action="ne"></span>' + '<span class="cropper-point point-nw" data-action="nw"></span>' + '<span class="cropper-point point-sw" data-action="sw"></span>' + '<span class="cropper-point point-se" data-action="se"></span>' + '</div>' + '</div>';
        var classCallCheck = function(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        };
        var createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value"in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps)
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                    defineProperties(Constructor, staticProps);
                return Constructor;
            }
                ;
        }();
        var toConsumableArray = function(arr) {
            if (Array.isArray(arr)) {
                for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++)
                    arr2[i] = arr[i];
                return arr2;
            } else {
                return Array.from(arr);
            }
        };
        function isString(value) {
            return typeof value === 'string';
        }
        var isNaN = Number.isNaN || WINDOW.isNaN;
        function isNumber(value) {
            return typeof value === 'number' && !isNaN(value);
        }
        function isUndefined(value) {
            return typeof value === 'undefined';
        }
        function proxy(fn, context) {
            for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                args[_key - 2] = arguments[_key];
            }
            return function() {
                for (var _len2 = arguments.length, args2 = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    args2[_key2] = arguments[_key2];
                }
                return fn.apply(context, args.concat(args2));
            }
                ;
        }
        var objectKeys = Object.keys || function objectKeys(obj) {
                var keys = [];
                $.each(obj, function(key) {
                    keys.push(key);
                });
                return keys;
            }
        ;
        var REGEXP_DECIMALS = /\.\d*(?:0|9){12}\d*$/i;
        function normalizeDecimalNumber(value) {
            var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100000000000;
            return REGEXP_DECIMALS.test(value) ? Math.round(value * times) / times : value;
        }
        var location = WINDOW.location;
        var REGEXP_ORIGINS = /^(https?:)\/\/([^:/?#]+):?(\d*)/i;
        function isCrossOriginURL(url) {
            var parts = url.match(REGEXP_ORIGINS);
            return parts && (parts[1] !== location.protocol || parts[2] !== location.hostname || parts[3] !== location.port);
        }
        function addTimestamp(url) {
            var timestamp = 'timestamp=' + new Date().getTime();
            return url + (url.indexOf('?') === -1 ? '?' : '&') + timestamp;
        }
        function getTransformValues(_ref) {
            var rotate = _ref.rotate
                , scaleX = _ref.scaleX
                , scaleY = _ref.scaleY
                , translateX = _ref.translateX
                , translateY = _ref.translateY;
            var values = [];
            if (isNumber(translateX) && translateX !== 0) {
                values.push('translateX(' + translateX + 'px)');
            }
            if (isNumber(translateY) && translateY !== 0) {
                values.push('translateY(' + translateY + 'px)');
            }
            if (isNumber(rotate) && rotate !== 0) {
                values.push('rotate(' + rotate + 'deg)');
            }
            if (isNumber(scaleX) && scaleX !== 1) {
                values.push('scaleX(' + scaleX + ')');
            }
            if (isNumber(scaleY) && scaleY !== 1) {
                values.push('scaleY(' + scaleY + ')');
            }
            return values.length ? values.join(' ') : 'none';
        }
        var navigator = WINDOW.navigator;
        var IS_SAFARI_OR_UIWEBVIEW = navigator && /(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent);
        function getImageNaturalSizes(image, callback) {
            if (image.naturalWidth && !IS_SAFARI_OR_UIWEBVIEW) {
                callback(image.naturalWidth, image.naturalHeight);
                return;
            }
            var newImage = document.createElement('img');
            newImage.onload = function() {
                callback(newImage.width, newImage.height);
            }
            ;
            newImage.src = image.src;
        }
        function getMaxZoomRatio(pointers) {
            var pointers2 = $.extend({}, pointers);
            var ratios = [];
            $.each(pointers, function(pointerId, pointer) {
                delete pointers2[pointerId];
                $.each(pointers2, function(pointerId2, pointer2) {
                    var x1 = Math.abs(pointer.startX - pointer2.startX);
                    var y1 = Math.abs(pointer.startY - pointer2.startY);
                    var x2 = Math.abs(pointer.endX - pointer2.endX);
                    var y2 = Math.abs(pointer.endY - pointer2.endY);
                    var z1 = Math.sqrt(x1 * x1 + y1 * y1);
                    var z2 = Math.sqrt(x2 * x2 + y2 * y2);
                    var ratio = (z2 - z1) / z1;
                    ratios.push(ratio);
                });
            });
            ratios.sort(function(a, b) {
                return Math.abs(a) < Math.abs(b);
            });
            return ratios[0];
        }
        function getPointer(_ref2, endOnly) {
            var pageX = _ref2.pageX
                , pageY = _ref2.pageY;
            var end = {
                endX: pageX,
                endY: pageY
            };
            if (endOnly) {
                return end;
            }
            return $.extend({
                startX: pageX,
                startY: pageY
            }, end);
        }
        function getPointersCenter(pointers) {
            var pageX = 0;
            var pageY = 0;
            var count = 0;
            $.each(pointers, function(pointerId, _ref3) {
                var startX = _ref3.startX
                    , startY = _ref3.startY;
                pageX += startX;
                pageY += startY;
                count += 1;
            });
            pageX /= count;
            pageY /= count;
            return {
                pageX: pageX,
                pageY: pageY
            };
        }
        var isFinite = Number.isFinite || WINDOW.isFinite;
        function getAdjustedSizes(_ref4) {
            var aspectRatio = _ref4.aspectRatio
                , height = _ref4.height
                , width = _ref4.width;
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'contain';
            var isValidNumber = function isValidNumber(value) {
                return isFinite(value) && value > 0;
            };
            if (isValidNumber(width) && isValidNumber(height)) {
                var adjustedWidth = height * aspectRatio;
                if (type === 'contain' && adjustedWidth > width || type === 'cover' && adjustedWidth < width) {
                    height = width / aspectRatio;
                } else {
                    width = height * aspectRatio;
                }
            } else if (isValidNumber(width)) {
                height = width / aspectRatio;
            } else if (isValidNumber(height)) {
                width = height * aspectRatio;
            }
            return {
                width: width,
                height: height
            };
        }
        function getRotatedSizes(_ref5) {
            var width = _ref5.width
                , height = _ref5.height
                , degree = _ref5.degree;
            degree = Math.abs(degree) % 180;
            if (degree === 90) {
                return {
                    width: height,
                    height: width
                };
            }
            var arc = degree % 90 * Math.PI / 180;
            var sinArc = Math.sin(arc);
            var cosArc = Math.cos(arc);
            var newWidth = width * cosArc + height * sinArc;
            var newHeight = width * sinArc + height * cosArc;
            return degree > 90 ? {
                width: newHeight,
                height: newWidth
            } : {
                width: newWidth,
                height: newHeight
            };
        }
        function getSourceCanvas(image, _ref6, _ref7, _ref8) {
            var _ref6$rotate = _ref6.rotate
                , rotate = _ref6$rotate === undefined ? 0 : _ref6$rotate
                , _ref6$scaleX = _ref6.scaleX
                , scaleX = _ref6$scaleX === undefined ? 1 : _ref6$scaleX
                , _ref6$scaleY = _ref6.scaleY
                , scaleY = _ref6$scaleY === undefined ? 1 : _ref6$scaleY;
            var aspectRatio = _ref7.aspectRatio
                , naturalWidth = _ref7.naturalWidth
                , naturalHeight = _ref7.naturalHeight;
            var _ref8$fillColor = _ref8.fillColor
                , fillColor = _ref8$fillColor === undefined ? 'transparent' : _ref8$fillColor
                , _ref8$imageSmoothingE = _ref8.imageSmoothingEnabled
                , imageSmoothingEnabled = _ref8$imageSmoothingE === undefined ? true : _ref8$imageSmoothingE
                , _ref8$imageSmoothingQ = _ref8.imageSmoothingQuality
                , imageSmoothingQuality = _ref8$imageSmoothingQ === undefined ? 'low' : _ref8$imageSmoothingQ
                , _ref8$maxWidth = _ref8.maxWidth
                , maxWidth = _ref8$maxWidth === undefined ? Infinity : _ref8$maxWidth
                , _ref8$maxHeight = _ref8.maxHeight
                , maxHeight = _ref8$maxHeight === undefined ? Infinity : _ref8$maxHeight
                , _ref8$minWidth = _ref8.minWidth
                , minWidth = _ref8$minWidth === undefined ? 0 : _ref8$minWidth
                , _ref8$minHeight = _ref8.minHeight
                , minHeight = _ref8$minHeight === undefined ? 0 : _ref8$minHeight;
            var canvas = document.createElement('canvas');
            var context = canvas.getContext('2d');
            var maxSizes = getAdjustedSizes({
                aspectRatio: aspectRatio,
                width: maxWidth,
                height: maxHeight
            });
            var minSizes = getAdjustedSizes({
                aspectRatio: aspectRatio,
                width: minWidth,
                height: minHeight
            }, 'cover');
            var width = Math.min(maxSizes.width, Math.max(minSizes.width, naturalWidth));
            var height = Math.min(maxSizes.height, Math.max(minSizes.height, naturalHeight));
            var params = [-width / 2, -height / 2, width, height];
            canvas.width = normalizeDecimalNumber(width);
            canvas.height = normalizeDecimalNumber(height);
            context.fillStyle = fillColor;
            context.fillRect(0, 0, width, height);
            context.save();
            context.translate(width / 2, height / 2);
            context.rotate(rotate * Math.PI / 180);
            context.scale(scaleX, scaleY);
            context.imageSmoothingEnabled = imageSmoothingEnabled;
            context.imageSmoothingQuality = imageSmoothingQuality;
            context.drawImage.apply(context, [image].concat(toConsumableArray($.map(params, function(param) {
                return Math.floor(normalizeDecimalNumber(param));
            }))));
            context.restore();
            return canvas;
        }
        var fromCharCode = String.fromCharCode;
        function getStringFromCharCode(dataView, start, length) {
            var str = '';
            var i = void 0;
            length += start;
            for (i = start; i < length; i += 1) {
                str += fromCharCode(dataView.getUint8(i));
            }
            return str;
        }
        var REGEXP_DATA_URL_HEAD = /^data:.*,/;
        function dataURLToArrayBuffer(dataURL) {
            var base64 = dataURL.replace(REGEXP_DATA_URL_HEAD, '');
            var binary = atob(base64);
            var arrayBuffer = new ArrayBuffer(binary.length);
            var uint8 = new Uint8Array(arrayBuffer);
            $.each(uint8, function(i) {
                uint8[i] = binary.charCodeAt(i);
            });
            return arrayBuffer;
        }
        function arrayBufferToDataURL(arrayBuffer, mimeType) {
            var uint8 = new Uint8Array(arrayBuffer);
            var data = '';
            $.each(uint8, function(i, value) {
                data += fromCharCode(value);
            });
            return 'data:' + mimeType + ';base64,' + btoa(data);
        }
        function getOrientation(arrayBuffer) {
            var dataView = new DataView(arrayBuffer);
            var orientation = void 0;
            var littleEndian = void 0;
            var app1Start = void 0;
            var ifdStart = void 0;
            if (dataView.getUint8(0) === 0xFF && dataView.getUint8(1) === 0xD8) {
                var length = dataView.byteLength;
                var offset = 2;
                while (offset < length) {
                    if (dataView.getUint8(offset) === 0xFF && dataView.getUint8(offset + 1) === 0xE1) {
                        app1Start = offset;
                        break;
                    }
                    offset += 1;
                }
            }
            if (app1Start) {
                var exifIDCode = app1Start + 4;
                var tiffOffset = app1Start + 10;
                if (getStringFromCharCode(dataView, exifIDCode, 4) === 'Exif') {
                    var endianness = dataView.getUint16(tiffOffset);
                    littleEndian = endianness === 0x4949;
                    if (littleEndian || endianness === 0x4D4D) {
                        if (dataView.getUint16(tiffOffset + 2, littleEndian) === 0x002A) {
                            var firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);
                            if (firstIFDOffset >= 0x00000008) {
                                ifdStart = tiffOffset + firstIFDOffset;
                            }
                        }
                    }
                }
            }
            if (ifdStart) {
                var _length = dataView.getUint16(ifdStart, littleEndian);
                var _offset = void 0;
                var i = void 0;
                for (i = 0; i < _length; i += 1) {
                    _offset = ifdStart + i * 12 + 2;
                    if (dataView.getUint16(_offset, littleEndian) === 0x0112) {
                        _offset += 8;
                        orientation = dataView.getUint16(_offset, littleEndian);
                        dataView.setUint16(_offset, 1, littleEndian);
                        break;
                    }
                }
            }
            return orientation;
        }
        function parseOrientation(orientation) {
            var rotate = 0;
            var scaleX = 1;
            var scaleY = 1;
            switch (orientation) {
                case 2:
                    scaleX = -1;
                    break;
                case 3:
                    rotate = -180;
                    break;
                case 4:
                    scaleY = -1;
                    break;
                case 5:
                    rotate = 90;
                    scaleY = -1;
                    break;
                case 6:
                    rotate = 90;
                    break;
                case 7:
                    rotate = 90;
                    scaleX = -1;
                    break;
                case 8:
                    rotate = -90;
                    break;
                default:
            }
            return {
                rotate: rotate,
                scaleX: scaleX,
                scaleY: scaleY
            };
        }
        var render = {
            render: function render() {
                this.initContainer();
                this.initCanvas();
                this.initCropBox();
                this.renderCanvas();
                if (this.cropped) {
                    this.renderCropBox();
                }
            },
            initContainer: function initContainer() {
                var $element = this.$element
                    , options = this.options
                    , $container = this.$container
                    , $cropper = this.$cropper;
                $cropper.addClass(CLASS_HIDDEN);
                $element.removeClass(CLASS_HIDDEN);
                $cropper.css(this.container = {
                    width: Math.max($container.width(), Number(options.minContainerWidth) || 200),
                    height: Math.max($container.height(), Number(options.minContainerHeight) || 100)
                });
                $element.addClass(CLASS_HIDDEN);
                $cropper.removeClass(CLASS_HIDDEN);
            },
            initCanvas: function initCanvas() {
                var container = this.container
                    , image = this.image;
                var viewMode = this.options.viewMode;
                var rotated = Math.abs(image.rotate) % 180 === 90;
                var naturalWidth = rotated ? image.naturalHeight : image.naturalWidth;
                var naturalHeight = rotated ? image.naturalWidth : image.naturalHeight;
                var aspectRatio = naturalWidth / naturalHeight;
                var canvasWidth = container.width;
                var canvasHeight = container.height;
                if (container.height * aspectRatio > container.width) {
                    if (viewMode === 3) {
                        canvasWidth = container.height * aspectRatio;
                    } else {
                        canvasHeight = container.width / aspectRatio;
                    }
                } else if (viewMode === 3) {
                    canvasHeight = container.width / aspectRatio;
                } else {
                    canvasWidth = container.height * aspectRatio;
                }
                var canvas = {
                    aspectRatio: aspectRatio,
                    naturalWidth: naturalWidth,
                    naturalHeight: naturalHeight,
                    width: canvasWidth,
                    height: canvasHeight
                };
                canvas.left = (container.width - canvasWidth) / 2;
                canvas.top = (container.height - canvasHeight) / 2;
                canvas.oldLeft = canvas.left;
                canvas.oldTop = canvas.top;
                this.canvas = canvas;
                this.limited = viewMode === 1 || viewMode === 2;
                this.limitCanvas(true, true);
                this.initialImage = $.extend({}, image);
                this.initialCanvas = $.extend({}, canvas);
            },
            limitCanvas: function limitCanvas(isSizeLimited, isPositionLimited) {
                var options = this.options
                    , container = this.container
                    , canvas = this.canvas
                    , cropBox = this.cropBox;
                var viewMode = options.viewMode;
                var aspectRatio = canvas.aspectRatio;
                var cropped = this.cropped && cropBox;
                if (isSizeLimited) {
                    var minCanvasWidth = Number(options.minCanvasWidth) || 0;
                    var minCanvasHeight = Number(options.minCanvasHeight) || 0;
                    if (viewMode > 0) {
                        if (viewMode > 1) {
                            minCanvasWidth = Math.max(minCanvasWidth, container.width);
                            minCanvasHeight = Math.max(minCanvasHeight, container.height);
                            if (viewMode === 3) {
                                if (minCanvasHeight * aspectRatio > minCanvasWidth) {
                                    minCanvasWidth = minCanvasHeight * aspectRatio;
                                } else {
                                    minCanvasHeight = minCanvasWidth / aspectRatio;
                                }
                            }
                        } else if (minCanvasWidth) {
                            minCanvasWidth = Math.max(minCanvasWidth, cropped ? cropBox.width : 0);
                        } else if (minCanvasHeight) {
                            minCanvasHeight = Math.max(minCanvasHeight, cropped ? cropBox.height : 0);
                        } else if (cropped) {
                            minCanvasWidth = cropBox.width;
                            minCanvasHeight = cropBox.height;
                            if (minCanvasHeight * aspectRatio > minCanvasWidth) {
                                minCanvasWidth = minCanvasHeight * aspectRatio;
                            } else {
                                minCanvasHeight = minCanvasWidth / aspectRatio;
                            }
                        }
                    }
                    var _getAdjustedSizes = getAdjustedSizes({
                        aspectRatio: aspectRatio,
                        width: minCanvasWidth,
                        height: minCanvasHeight
                    });
                    minCanvasWidth = _getAdjustedSizes.width;
                    minCanvasHeight = _getAdjustedSizes.height;
                    canvas.minWidth = minCanvasWidth;
                    canvas.minHeight = minCanvasHeight;
                    canvas.maxWidth = Infinity;
                    canvas.maxHeight = Infinity;
                }
                if (isPositionLimited) {
                    if (viewMode > 0) {
                        var newCanvasLeft = container.width - canvas.width;
                        var newCanvasTop = container.height - canvas.height;
                        canvas.minLeft = Math.min(0, newCanvasLeft);
                        canvas.minTop = Math.min(0, newCanvasTop);
                        canvas.maxLeft = Math.max(0, newCanvasLeft);
                        canvas.maxTop = Math.max(0, newCanvasTop);
                        if (cropped && this.limited) {
                            canvas.minLeft = Math.min(cropBox.left, cropBox.left + cropBox.width - canvas.width);
                            canvas.minTop = Math.min(cropBox.top, cropBox.top + cropBox.height - canvas.height);
                            canvas.maxLeft = cropBox.left;
                            canvas.maxTop = cropBox.top;
                            if (viewMode === 2) {
                                if (canvas.width >= container.width) {
                                    canvas.minLeft = Math.min(0, newCanvasLeft);
                                    canvas.maxLeft = Math.max(0, newCanvasLeft);
                                }
                                if (canvas.height >= container.height) {
                                    canvas.minTop = Math.min(0, newCanvasTop);
                                    canvas.maxTop = Math.max(0, newCanvasTop);
                                }
                            }
                        }
                    } else {
                        canvas.minLeft = -canvas.width;
                        canvas.minTop = -canvas.height;
                        canvas.maxLeft = container.width;
                        canvas.maxTop = container.height;
                    }
                }
            },
            renderCanvas: function renderCanvas(changed, transformed) {
                var canvas = this.canvas
                    , image = this.image;
                if (transformed) {
                    var _getRotatedSizes = getRotatedSizes({
                        width: image.naturalWidth * Math.abs(image.scaleX || 1),
                        height: image.naturalHeight * Math.abs(image.scaleY || 1),
                        degree: image.rotate || 0
                    })
                        , naturalWidth = _getRotatedSizes.width
                        , naturalHeight = _getRotatedSizes.height;
                    var width = canvas.width * (naturalWidth / canvas.naturalWidth);
                    var height = canvas.height * (naturalHeight / canvas.naturalHeight);
                    canvas.left -= (width - canvas.width) / 2;
                    canvas.top -= (height - canvas.height) / 2;
                    canvas.width = width;
                    canvas.height = height;
                    canvas.aspectRatio = naturalWidth / naturalHeight;
                    canvas.naturalWidth = naturalWidth;
                    canvas.naturalHeight = naturalHeight;
                    this.limitCanvas(true, false);
                }
                if (canvas.width > canvas.maxWidth || canvas.width < canvas.minWidth) {
                    canvas.left = canvas.oldLeft;
                }
                if (canvas.height > canvas.maxHeight || canvas.height < canvas.minHeight) {
                    canvas.top = canvas.oldTop;
                }
                canvas.width = Math.min(Math.max(canvas.width, canvas.minWidth), canvas.maxWidth);
                canvas.height = Math.min(Math.max(canvas.height, canvas.minHeight), canvas.maxHeight);
                this.limitCanvas(false, true);
                canvas.left = Math.min(Math.max(canvas.left, canvas.minLeft), canvas.maxLeft);
                canvas.top = Math.min(Math.max(canvas.top, canvas.minTop), canvas.maxTop);
                canvas.oldLeft = canvas.left;
                canvas.oldTop = canvas.top;
                this.$canvas.css({
                    width: canvas.width,
                    height: canvas.height,
                    transform: getTransformValues({
                        translateX: canvas.left,
                        translateY: canvas.top
                    })
                });
                this.renderImage(changed);
                if (this.cropped && this.limited) {
                    this.limitCropBox(true, true);
                }
            },
            renderImage: function renderImage(changed) {
                var canvas = this.canvas
                    , image = this.image;
                var width = image.naturalWidth * (canvas.width / canvas.naturalWidth);
                var height = image.naturalHeight * (canvas.height / canvas.naturalHeight);
                $.extend(image, {
                    width: width,
                    height: height,
                    left: (canvas.width - width) / 2,
                    top: (canvas.height - height) / 2
                });
                this.$clone.css({
                    width: image.width,
                    height: image.height,
                    transform: getTransformValues($.extend({
                        translateX: image.left,
                        translateY: image.top
                    }, image))
                });
                if (changed) {
                    this.output();
                }
            },
            initCropBox: function initCropBox() {
                var options = this.options
                    , canvas = this.canvas;
                var aspectRatio = options.aspectRatio;
                var autoCropArea = Number(options.autoCropArea) || 0.8;
                var cropBox = {
                    width: canvas.width,
                    height: canvas.height
                };
                if (aspectRatio) {
                    if (canvas.height * aspectRatio > canvas.width) {
                        cropBox.height = cropBox.width / aspectRatio;
                    } else {
                        cropBox.width = cropBox.height * aspectRatio;
                    }
                }
                this.cropBox = cropBox;
                this.limitCropBox(true, true);
                cropBox.width = Math.min(Math.max(cropBox.width, cropBox.minWidth), cropBox.maxWidth);
                cropBox.height = Math.min(Math.max(cropBox.height, cropBox.minHeight), cropBox.maxHeight);
                cropBox.width = Math.max(cropBox.minWidth, cropBox.width * autoCropArea);
                cropBox.height = Math.max(cropBox.minHeight, cropBox.height * autoCropArea);
                cropBox.left = canvas.left + (canvas.width - cropBox.width) / 2;
                cropBox.top = canvas.top + (canvas.height - cropBox.height) / 2;
                cropBox.oldLeft = cropBox.left;
                cropBox.oldTop = cropBox.top;
                this.initialCropBox = $.extend({}, cropBox);
            },
            limitCropBox: function limitCropBox(isSizeLimited, isPositionLimited) {
                var options = this.options
                    , container = this.container
                    , canvas = this.canvas
                    , cropBox = this.cropBox
                    , limited = this.limited;
                var aspectRatio = options.aspectRatio;
                if (isSizeLimited) {
                    var minCropBoxWidth = Number(options.minCropBoxWidth) || 0;
                    var minCropBoxHeight = Number(options.minCropBoxHeight) || 0;
                    var maxCropBoxWidth = Math.min(container.width, limited ? canvas.width : container.width);
                    var maxCropBoxHeight = Math.min(container.height, limited ? canvas.height : container.height);
                    minCropBoxWidth = Math.min(minCropBoxWidth, container.width);
                    minCropBoxHeight = Math.min(minCropBoxHeight, container.height);
                    if (aspectRatio) {
                        if (minCropBoxWidth && minCropBoxHeight) {
                            if (minCropBoxHeight * aspectRatio > minCropBoxWidth) {
                                minCropBoxHeight = minCropBoxWidth / aspectRatio;
                            } else {
                                minCropBoxWidth = minCropBoxHeight * aspectRatio;
                            }
                        } else if (minCropBoxWidth) {
                            minCropBoxHeight = minCropBoxWidth / aspectRatio;
                        } else if (minCropBoxHeight) {
                            minCropBoxWidth = minCropBoxHeight * aspectRatio;
                        }
                        if (maxCropBoxHeight * aspectRatio > maxCropBoxWidth) {
                            maxCropBoxHeight = maxCropBoxWidth / aspectRatio;
                        } else {
                            maxCropBoxWidth = maxCropBoxHeight * aspectRatio;
                        }
                    }
                    cropBox.minWidth = Math.min(minCropBoxWidth, maxCropBoxWidth);
                    cropBox.minHeight = Math.min(minCropBoxHeight, maxCropBoxHeight);
                    cropBox.maxWidth = maxCropBoxWidth;
                    cropBox.maxHeight = maxCropBoxHeight;
                }
                if (isPositionLimited) {
                    if (limited) {
                        cropBox.minLeft = Math.max(0, canvas.left);
                        cropBox.minTop = Math.max(0, canvas.top);
                        cropBox.maxLeft = Math.min(container.width, canvas.left + canvas.width) - cropBox.width;
                        cropBox.maxTop = Math.min(container.height, canvas.top + canvas.height) - cropBox.height;
                    } else {
                        cropBox.minLeft = 0;
                        cropBox.minTop = 0;
                        cropBox.maxLeft = container.width - cropBox.width;
                        cropBox.maxTop = container.height - cropBox.height;
                    }
                }
            },
            renderCropBox: function renderCropBox() {
                var options = this.options
                    , container = this.container
                    , cropBox = this.cropBox;
                if (cropBox.width > cropBox.maxWidth || cropBox.width < cropBox.minWidth) {
                    cropBox.left = cropBox.oldLeft;
                }
                if (cropBox.height > cropBox.maxHeight || cropBox.height < cropBox.minHeight) {
                    cropBox.top = cropBox.oldTop;
                }
                cropBox.width = Math.min(Math.max(cropBox.width, cropBox.minWidth), cropBox.maxWidth);
                cropBox.height = Math.min(Math.max(cropBox.height, cropBox.minHeight), cropBox.maxHeight);
                this.limitCropBox(false, true);
                cropBox.left = Math.min(Math.max(cropBox.left, cropBox.minLeft), cropBox.maxLeft);
                cropBox.top = Math.min(Math.max(cropBox.top, cropBox.minTop), cropBox.maxTop);
                cropBox.oldLeft = cropBox.left;
                cropBox.oldTop = cropBox.top;
                if (options.movable && options.cropBoxMovable) {
                    this.$face.data(DATA_ACTION, cropBox.width >= container.width && cropBox.height >= container.height ? ACTION_MOVE : ACTION_ALL);
                }
                this.$cropBox.css({
                    width: cropBox.width,
                    height: cropBox.height,
                    transform: getTransformValues({
                        translateX: cropBox.left,
                        translateY: cropBox.top
                    })
                });
                if (this.cropped && this.limited) {
                    this.limitCanvas(true, true);
                }
                if (!this.disabled) {
                    this.output();
                }
            },
            output: function output() {
                this.preview();
                if (this.completed) {
                    this.trigger(EVENT_CROP, this.getData());
                }
            }
        };
        var preview = {
            initPreview: function initPreview() {
                var crossOrigin = this.crossOrigin;
                var url = crossOrigin ? this.crossOriginUrl : this.url;
                var image = document.createElement('img');
                if (crossOrigin) {
                    image.crossOrigin = crossOrigin;
                }
                image.src = url;
                var $clone2 = $(image);
                this.$preview = $(this.options.preview);
                this.$clone2 = $clone2;
                this.$viewBox.html($clone2);
                this.$preview.each(function(i, element) {
                    var $element = $(element);
                    var img = document.createElement('img');
                    $element.data(DATA_PREVIEW, {
                        width: $element.width(),
                        height: $element.height(),
                        html: $element.html()
                    });
                    if (crossOrigin) {
                        img.crossOrigin = crossOrigin;
                    }
                    img.src = url;
                    img.style.cssText = 'display:block;' + 'width:100%;' + 'height:auto;' + 'min-width:0!important;' + 'min-height:0!important;' + 'max-width:none!important;' + 'max-height:none!important;' + 'image-orientation:0deg!important;"';
                    $element.html(img);
                });
            },
            resetPreview: function resetPreview() {
                this.$preview.each(function(i, element) {
                    var $element = $(element);
                    var data = $element.data(DATA_PREVIEW);
                    $element.css({
                        width: data.width,
                        height: data.height
                    }).html(data.html).removeData(DATA_PREVIEW);
                });
            },
            preview: function preview() {
                var image = this.image
                    , canvas = this.canvas
                    , cropBox = this.cropBox;
                var cropBoxWidth = cropBox.width
                    , cropBoxHeight = cropBox.height;
                var width = image.width
                    , height = image.height;
                var left = cropBox.left - canvas.left - image.left;
                var top = cropBox.top - canvas.top - image.top;
                if (!this.cropped || this.disabled) {
                    return;
                }
                this.$clone2.css({
                    width: width,
                    height: height,
                    transform: getTransformValues($.extend({
                        translateX: -left,
                        translateY: -top
                    }, image))
                });
                this.$preview.each(function(i, element) {
                    var $element = $(element);
                    var data = $element.data(DATA_PREVIEW);
                    var originalWidth = data.width;
                    var originalHeight = data.height;
                    var newWidth = originalWidth;
                    var newHeight = originalHeight;
                    var ratio = 1;
                    if (cropBoxWidth) {
                        ratio = originalWidth / cropBoxWidth;
                        newHeight = cropBoxHeight * ratio;
                    }
                    if (cropBoxHeight && newHeight > originalHeight) {
                        ratio = originalHeight / cropBoxHeight;
                        newWidth = cropBoxWidth * ratio;
                        newHeight = originalHeight;
                    }
                    $element.css({
                        width: newWidth,
                        height: newHeight
                    }).find('img').css({
                        width: width * ratio,
                        height: height * ratio,
                        transform: getTransformValues($.extend({
                            translateX: -left * ratio,
                            translateY: -top * ratio
                        }, image))
                    });
                });
            }
        };
        var events = {
            bind: function bind() {
                var $element = this.$element
                    , options = this.options
                    , $cropper = this.$cropper;
                if ($.isFunction(options.cropstart)) {
                    $element.on(EVENT_CROP_START, options.cropstart);
                }
                if ($.isFunction(options.cropmove)) {
                    $element.on(EVENT_CROP_MOVE, options.cropmove);
                }
                if ($.isFunction(options.cropend)) {
                    $element.on(EVENT_CROP_END, options.cropend);
                }
                if ($.isFunction(options.crop)) {
                    $element.on(EVENT_CROP, options.crop);
                }
                if ($.isFunction(options.zoom)) {
                    $element.on(EVENT_ZOOM, options.zoom);
                }
                $cropper.on(EVENT_POINTER_DOWN, proxy(this.cropStart, this));
                if (options.zoomable && options.zoomOnWheel) {
                    $cropper.on(EVENT_WHEEL, proxy(this.wheel, this));
                }
                if (options.toggleDragModeOnDblclick) {
                    $cropper.on(EVENT_DBLCLICK, proxy(this.dblclick, this));
                }
                $(this.element.ownerDocument).on(EVENT_POINTER_MOVE, this.onCropMove = proxy(this.cropMove, this)).on(EVENT_POINTER_UP, this.onCropEnd = proxy(this.cropEnd, this));
                if (options.responsive) {
                    $(window).on(EVENT_RESIZE, this.onResize = proxy(this.resize, this));
                }
            },
            unbind: function unbind() {
                var $element = this.$element
                    , options = this.options
                    , $cropper = this.$cropper;
                if ($.isFunction(options.cropstart)) {
                    $element.off(EVENT_CROP_START, options.cropstart);
                }
                if ($.isFunction(options.cropmove)) {
                    $element.off(EVENT_CROP_MOVE, options.cropmove);
                }
                if ($.isFunction(options.cropend)) {
                    $element.off(EVENT_CROP_END, options.cropend);
                }
                if ($.isFunction(options.crop)) {
                    $element.off(EVENT_CROP, options.crop);
                }
                if ($.isFunction(options.zoom)) {
                    $element.off(EVENT_ZOOM, options.zoom);
                }
                $cropper.off(EVENT_POINTER_DOWN, this.cropStart);
                if (options.zoomable && options.zoomOnWheel) {
                    $cropper.off(EVENT_WHEEL, this.wheel);
                }
                if (options.toggleDragModeOnDblclick) {
                    $cropper.off(EVENT_DBLCLICK, this.dblclick);
                }
                $(this.element.ownerDocument).off(EVENT_POINTER_MOVE, this.onCropMove).off(EVENT_POINTER_UP, this.onCropEnd);
                if (options.responsive) {
                    $(window).off(EVENT_RESIZE, this.onResize);
                }
            }
        };
        var handlers = {
            resize: function resize() {
                var options = this.options
                    , $container = this.$container
                    , container = this.container;
                var minContainerWidth = Number(options.minContainerWidth) || 200;
                var minContainerHeight = Number(options.minContainerHeight) || 100;
                if (this.disabled || container.width <= minContainerWidth || container.height <= minContainerHeight) {
                    return;
                }
                var ratio = $container.width() / container.width;
                if (ratio !== 1 || $container.height() !== container.height) {
                    var canvasData = void 0;
                    var cropBoxData = void 0;
                    if (options.restore) {
                        canvasData = this.getCanvasData();
                        cropBoxData = this.getCropBoxData();
                    }
                    this.render();
                    if (options.restore) {
                        this.setCanvasData($.each(canvasData, function(i, n) {
                            canvasData[i] = n * ratio;
                        }));
                        this.setCropBoxData($.each(cropBoxData, function(i, n) {
                            cropBoxData[i] = n * ratio;
                        }));
                    }
                }
            },
            dblclick: function dblclick() {
                if (this.disabled || this.options.dragMode === DRAG_MODE_NONE) {
                    return;
                }
                this.setDragMode(this.$dragBox.hasClass(CLASS_CROP) ? DRAG_MODE_MOVE : DRAG_MODE_CROP);
            },
            wheel: function wheel(event) {
                var _this = this;
                var e = event.originalEvent || event;
                var ratio = Number(this.options.wheelZoomRatio) || 0.1;
                if (this.disabled) {
                    return;
                }
                event.preventDefault();
                if (this.wheeling) {
                    return;
                }
                this.wheeling = true;
                setTimeout(function() {
                    _this.wheeling = false;
                }, 50);
                var delta = 1;
                if (e.deltaY) {
                    delta = e.deltaY > 0 ? 1 : -1;
                } else if (e.wheelDelta) {
                    delta = -e.wheelDelta / 120;
                } else if (e.detail) {
                    delta = e.detail > 0 ? 1 : -1;
                }
                this.zoom(-delta * ratio, event);
            },
            cropStart: function cropStart(e) {
                if (this.disabled) {
                    return;
                }
                var options = this.options
                    , pointers = this.pointers;
                var originalEvent = e.originalEvent;
                var action = void 0;
                if (originalEvent && originalEvent.changedTouches) {
                    $.each(originalEvent.changedTouches, function(i, touch) {
                        pointers[touch.identifier] = getPointer(touch);
                    });
                } else {
                    pointers[originalEvent && originalEvent.pointerId || 0] = getPointer(originalEvent || e);
                }
                if (objectKeys(pointers).length > 1 && options.zoomable && options.zoomOnTouch) {
                    action = ACTION_ZOOM;
                } else {
                    action = $(e.target).data(DATA_ACTION);
                }
                if (!REGEXP_ACTIONS.test(action)) {
                    return;
                }
                if (this.trigger(EVENT_CROP_START, {
                    originalEvent: originalEvent,
                    action: action
                }).isDefaultPrevented()) {
                    return;
                }
                e.preventDefault();
                this.action = action;
                this.cropping = false;
                if (action === ACTION_CROP) {
                    this.cropping = true;
                    this.$dragBox.addClass(CLASS_MODAL);
                }
            },
            cropMove: function cropMove(e) {
                var action = this.action;
                if (this.disabled || !action) {
                    return;
                }
                var pointers = this.pointers;
                var originalEvent = e.originalEvent;
                e.preventDefault();
                if (this.trigger(EVENT_CROP_MOVE, {
                    originalEvent: originalEvent,
                    action: action
                }).isDefaultPrevented()) {
                    return;
                }
                if (originalEvent && originalEvent.changedTouches) {
                    $.each(originalEvent.changedTouches, function(i, touch) {
                        $.extend(pointers[touch.identifier], getPointer(touch, true));
                    });
                } else {
                    $.extend(pointers[originalEvent && originalEvent.pointerId || 0], getPointer(originalEvent || e, true));
                }
                this.change(e);
            },
            cropEnd: function cropEnd(e) {
                if (this.disabled) {
                    return;
                }
                var action = this.action;
                var pointers = this.pointers;
                var originalEvent = e.originalEvent;
                if (originalEvent && originalEvent.changedTouches) {
                    $.each(originalEvent.changedTouches, function(i, touch) {
                        delete pointers[touch.identifier];
                    });
                } else {
                    delete pointers[originalEvent && originalEvent.pointerId || 0];
                }
                if (!action) {
                    return;
                }
                e.preventDefault();
                if (!objectKeys(pointers).length) {
                    this.action = '';
                }
                if (this.cropping) {
                    this.cropping = false;
                    this.$dragBox.toggleClass(CLASS_MODAL, this.cropped && this.options.modal);
                }
                this.trigger(EVENT_CROP_END, {
                    originalEvent: originalEvent,
                    action: action
                });
            }
        };
        var change = {
            change: function change(e) {
                var options = this.options
                    , pointers = this.pointers
                    , container = this.container
                    , canvas = this.canvas
                    , cropBox = this.cropBox;
                var action = this.action;
                var aspectRatio = options.aspectRatio;
                var left = cropBox.left
                    , top = cropBox.top
                    , width = cropBox.width
                    , height = cropBox.height;
                var right = left + width;
                var bottom = top + height;
                var minLeft = 0;
                var minTop = 0;
                var maxWidth = container.width;
                var maxHeight = container.height;
                var renderable = true;
                var offset = void 0;
                if (!aspectRatio && e.shiftKey) {
                    aspectRatio = width && height ? width / height : 1;
                }
                if (this.limited) {
                    minLeft = cropBox.minLeft;
                    minTop = cropBox.minTop;
                    maxWidth = minLeft + Math.min(container.width, canvas.width, canvas.left + canvas.width);
                    maxHeight = minTop + Math.min(container.height, canvas.height, canvas.top + canvas.height);
                }
                var pointer = pointers[objectKeys(pointers)[0]];
                var range = {
                    x: pointer.endX - pointer.startX,
                    y: pointer.endY - pointer.startY
                };
                var check = function check(side) {
                    switch (side) {
                        case ACTION_EAST:
                            if (right + range.x > maxWidth) {
                                range.x = maxWidth - right;
                            }
                            break;
                        case ACTION_WEST:
                            if (left + range.x < minLeft) {
                                range.x = minLeft - left;
                            }
                            break;
                        case ACTION_NORTH:
                            if (top + range.y < minTop) {
                                range.y = minTop - top;
                            }
                            break;
                        case ACTION_SOUTH:
                            if (bottom + range.y > maxHeight) {
                                range.y = maxHeight - bottom;
                            }
                            break;
                        default:
                    }
                };
                switch (action) {
                    case ACTION_ALL:
                        left += range.x;
                        top += range.y;
                        break;
                    case ACTION_EAST:
                        if (range.x >= 0 && (right >= maxWidth || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
                            renderable = false;
                            break;
                        }
                        check(ACTION_EAST);
                        width += range.x;
                        if (aspectRatio) {
                            height = width / aspectRatio;
                            top -= range.x / aspectRatio / 2;
                        }
                        if (width < 0) {
                            action = ACTION_WEST;
                            width = 0;
                        }
                        break;
                    case ACTION_NORTH:
                        if (range.y <= 0 && (top <= minTop || aspectRatio && (left <= minLeft || right >= maxWidth))) {
                            renderable = false;
                            break;
                        }
                        check(ACTION_NORTH);
                        height -= range.y;
                        top += range.y;
                        if (aspectRatio) {
                            width = height * aspectRatio;
                            left += range.y * aspectRatio / 2;
                        }
                        if (height < 0) {
                            action = ACTION_SOUTH;
                            height = 0;
                        }
                        break;
                    case ACTION_WEST:
                        if (range.x <= 0 && (left <= minLeft || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
                            renderable = false;
                            break;
                        }
                        check(ACTION_WEST);
                        width -= range.x;
                        left += range.x;
                        if (aspectRatio) {
                            height = width / aspectRatio;
                            top += range.x / aspectRatio / 2;
                        }
                        if (width < 0) {
                            action = ACTION_EAST;
                            width = 0;
                        }
                        break;
                    case ACTION_SOUTH:
                        if (range.y >= 0 && (bottom >= maxHeight || aspectRatio && (left <= minLeft || right >= maxWidth))) {
                            renderable = false;
                            break;
                        }
                        check(ACTION_SOUTH);
                        height += range.y;
                        if (aspectRatio) {
                            width = height * aspectRatio;
                            left -= range.y * aspectRatio / 2;
                        }
                        if (height < 0) {
                            action = ACTION_NORTH;
                            height = 0;
                        }
                        break;
                    case ACTION_NORTH_EAST:
                        if (aspectRatio) {
                            if (range.y <= 0 && (top <= minTop || right >= maxWidth)) {
                                renderable = false;
                                break;
                            }
                            check(ACTION_NORTH);
                            height -= range.y;
                            top += range.y;
                            width = height * aspectRatio;
                        } else {
                            check(ACTION_NORTH);
                            check(ACTION_EAST);
                            if (range.x >= 0) {
                                if (right < maxWidth) {
                                    width += range.x;
                                } else if (range.y <= 0 && top <= minTop) {
                                    renderable = false;
                                }
                            } else {
                                width += range.x;
                            }
                            if (range.y <= 0) {
                                if (top > minTop) {
                                    height -= range.y;
                                    top += range.y;
                                }
                            } else {
                                height -= range.y;
                                top += range.y;
                            }
                        }
                        if (width < 0 && height < 0) {
                            action = ACTION_SOUTH_WEST;
                            height = 0;
                            width = 0;
                        } else if (width < 0) {
                            action = ACTION_NORTH_WEST;
                            width = 0;
                        } else if (height < 0) {
                            action = ACTION_SOUTH_EAST;
                            height = 0;
                        }
                        break;
                    case ACTION_NORTH_WEST:
                        if (aspectRatio) {
                            if (range.y <= 0 && (top <= minTop || left <= minLeft)) {
                                renderable = false;
                                break;
                            }
                            check(ACTION_NORTH);
                            height -= range.y;
                            top += range.y;
                            width = height * aspectRatio;
                            left += range.y * aspectRatio;
                        } else {
                            check(ACTION_NORTH);
                            check(ACTION_WEST);
                            if (range.x <= 0) {
                                if (left > minLeft) {
                                    width -= range.x;
                                    left += range.x;
                                } else if (range.y <= 0 && top <= minTop) {
                                    renderable = false;
                                }
                            } else {
                                width -= range.x;
                                left += range.x;
                            }
                            if (range.y <= 0) {
                                if (top > minTop) {
                                    height -= range.y;
                                    top += range.y;
                                }
                            } else {
                                height -= range.y;
                                top += range.y;
                            }
                        }
                        if (width < 0 && height < 0) {
                            action = ACTION_SOUTH_EAST;
                            height = 0;
                            width = 0;
                        } else if (width < 0) {
                            action = ACTION_NORTH_EAST;
                            width = 0;
                        } else if (height < 0) {
                            action = ACTION_SOUTH_WEST;
                            height = 0;
                        }
                        break;
                    case ACTION_SOUTH_WEST:
                        if (aspectRatio) {
                            if (range.x <= 0 && (left <= minLeft || bottom >= maxHeight)) {
                                renderable = false;
                                break;
                            }
                            check(ACTION_WEST);
                            width -= range.x;
                            left += range.x;
                            height = width / aspectRatio;
                        } else {
                            check(ACTION_SOUTH);
                            check(ACTION_WEST);
                            if (range.x <= 0) {
                                if (left > minLeft) {
                                    width -= range.x;
                                    left += range.x;
                                } else if (range.y >= 0 && bottom >= maxHeight) {
                                    renderable = false;
                                }
                            } else {
                                width -= range.x;
                                left += range.x;
                            }
                            if (range.y >= 0) {
                                if (bottom < maxHeight) {
                                    height += range.y;
                                }
                            } else {
                                height += range.y;
                            }
                        }
                        if (width < 0 && height < 0) {
                            action = ACTION_NORTH_EAST;
                            height = 0;
                            width = 0;
                        } else if (width < 0) {
                            action = ACTION_SOUTH_EAST;
                            width = 0;
                        } else if (height < 0) {
                            action = ACTION_NORTH_WEST;
                            height = 0;
                        }
                        break;
                    case ACTION_SOUTH_EAST:
                        if (aspectRatio) {
                            if (range.x >= 0 && (right >= maxWidth || bottom >= maxHeight)) {
                                renderable = false;
                                break;
                            }
                            check(ACTION_EAST);
                            width += range.x;
                            height = width / aspectRatio;
                        } else {
                            check(ACTION_SOUTH);
                            check(ACTION_EAST);
                            if (range.x >= 0) {
                                if (right < maxWidth) {
                                    width += range.x;
                                } else if (range.y >= 0 && bottom >= maxHeight) {
                                    renderable = false;
                                }
                            } else {
                                width += range.x;
                            }
                            if (range.y >= 0) {
                                if (bottom < maxHeight) {
                                    height += range.y;
                                }
                            } else {
                                height += range.y;
                            }
                        }
                        if (width < 0 && height < 0) {
                            action = ACTION_NORTH_WEST;
                            height = 0;
                            width = 0;
                        } else if (width < 0) {
                            action = ACTION_SOUTH_WEST;
                            width = 0;
                        } else if (height < 0) {
                            action = ACTION_NORTH_EAST;
                            height = 0;
                        }
                        break;
                    case ACTION_MOVE:
                        this.move(range.x, range.y);
                        renderable = false;
                        break;
                    case ACTION_ZOOM:
                        this.zoom(getMaxZoomRatio(pointers), e.originalEvent);
                        renderable = false;
                        break;
                    case ACTION_CROP:
                        if (!range.x || !range.y) {
                            renderable = false;
                            break;
                        }
                        offset = this.$cropper.offset();
                        left = pointer.startX - offset.left;
                        top = pointer.startY - offset.top;
                        width = cropBox.minWidth;
                        height = cropBox.minHeight;
                        if (range.x > 0) {
                            action = range.y > 0 ? ACTION_SOUTH_EAST : ACTION_NORTH_EAST;
                        } else if (range.x < 0) {
                            left -= width;
                            action = range.y > 0 ? ACTION_SOUTH_WEST : ACTION_NORTH_WEST;
                        }
                        if (range.y < 0) {
                            top -= height;
                        }
                        if (!this.cropped) {
                            this.$cropBox.removeClass(CLASS_HIDDEN);
                            this.cropped = true;
                            if (this.limited) {
                                this.limitCropBox(true, true);
                            }
                        }
                        break;
                    default:
                }
                if (renderable) {
                    cropBox.width = width;
                    cropBox.height = height;
                    cropBox.left = left;
                    cropBox.top = top;
                    this.action = action;
                    this.renderCropBox();
                }
                $.each(pointers, function(i, p) {
                    p.startX = p.endX;
                    p.startY = p.endY;
                });
            }
        };
        var methods = {
            crop: function crop() {
                if (!this.ready || this.disabled) {
                    return;
                }
                if (!this.cropped) {
                    this.cropped = true;
                    this.limitCropBox(true, true);
                    if (this.options.modal) {
                        this.$dragBox.addClass(CLASS_MODAL);
                    }
                    this.$cropBox.removeClass(CLASS_HIDDEN);
                }
                this.setCropBoxData(this.initialCropBox);
            },
            reset: function reset() {
                if (!this.ready || this.disabled) {
                    return;
                }
                this.image = $.extend({}, this.initialImage);
                this.canvas = $.extend({}, this.initialCanvas);
                this.cropBox = $.extend({}, this.initialCropBox);
                this.renderCanvas();
                if (this.cropped) {
                    this.renderCropBox();
                }
            },
            clear: function clear() {
                if (!this.cropped || this.disabled) {
                    return;
                }
                $.extend(this.cropBox, {
                    left: 0,
                    top: 0,
                    width: 0,
                    height: 0
                });
                this.cropped = false;
                this.renderCropBox();
                this.limitCanvas(true, true);
                this.renderCanvas();
                this.$dragBox.removeClass(CLASS_MODAL);
                this.$cropBox.addClass(CLASS_HIDDEN);
            },
            replace: function replace(url, onlyColorChanged) {
                if (!this.disabled && url) {
                    if (this.isImg) {
                        this.$element.attr('src', url);
                    }
                    if (onlyColorChanged) {
                        this.url = url;
                        this.$clone.attr('src', url);
                        if (this.ready) {
                            this.$preview.find('img').add(this.$clone2).attr('src', url);
                        }
                    } else {
                        if (this.isImg) {
                            this.replaced = true;
                        }
                        this.options.data = null;
                        this.load(url);
                    }
                }
            },
            enable: function enable() {
                if (this.ready) {
                    this.disabled = false;
                    this.$cropper.removeClass(CLASS_DISABLED);
                }
            },
            disable: function disable() {
                if (this.ready) {
                    this.disabled = true;
                    this.$cropper.addClass(CLASS_DISABLED);
                }
            },
            destroy: function destroy() {
                var $element = this.$element;
                if (this.loaded) {
                    if (this.isImg && this.replaced) {
                        $element.attr('src', this.originalUrl);
                    }
                    this.unbuild();
                    $element.removeClass(CLASS_HIDDEN);
                } else if (this.isImg) {
                    $element.off(EVENT_LOAD, this.start);
                } else if (this.$clone) {
                    this.$clone.remove();
                }
                $element.removeData(NAMESPACE);
            },
            move: function move(offsetX, offsetY) {
                var _canvas = this.canvas
                    , left = _canvas.left
                    , top = _canvas.top;
                this.moveTo(isUndefined(offsetX) ? offsetX : left + Number(offsetX), isUndefined(offsetY) ? offsetY : top + Number(offsetY));
            },
            moveTo: function moveTo(x, y) {
                var canvas = this.canvas;
                var changed = false;
                if (isUndefined(y)) {
                    y = x;
                }
                x = Number(x);
                y = Number(y);
                if (this.ready && !this.disabled && this.options.movable) {
                    if (isNumber(x)) {
                        canvas.left = x;
                        changed = true;
                    }
                    if (isNumber(y)) {
                        canvas.top = y;
                        changed = true;
                    }
                    if (changed) {
                        this.renderCanvas(true);
                    }
                }
            },
            zoom: function zoom(ratio, _event) {
                var canvas = this.canvas;
                ratio = Number(ratio);
                if (ratio < 0) {
                    ratio = 1 / (1 - ratio);
                } else {
                    ratio = 1 + ratio;
                }
                this.zoomTo(canvas.width * ratio / canvas.naturalWidth, _event);
            },
            zoomTo: function zoomTo(ratio, _event) {
                var options = this.options
                    , pointers = this.pointers
                    , canvas = this.canvas;
                var width = canvas.width
                    , height = canvas.height
                    , naturalWidth = canvas.naturalWidth
                    , naturalHeight = canvas.naturalHeight;
                ratio = Number(ratio);
                if (ratio >= 0 && this.ready && !this.disabled && options.zoomable) {
                    var newWidth = naturalWidth * ratio;
                    var newHeight = naturalHeight * ratio;
                    var originalEvent = void 0;
                    if (_event) {
                        originalEvent = _event.originalEvent;
                    }
                    if (this.trigger(EVENT_ZOOM, {
                        originalEvent: originalEvent,
                        oldRatio: width / naturalWidth,
                        ratio: newWidth / naturalWidth
                    }).isDefaultPrevented()) {
                        return;
                    }
                    if (originalEvent) {
                        var offset = this.$cropper.offset();
                        var center = pointers && objectKeys(pointers).length ? getPointersCenter(pointers) : {
                            pageX: _event.pageX || originalEvent.pageX || 0,
                            pageY: _event.pageY || originalEvent.pageY || 0
                        };
                        canvas.left -= (newWidth - width) * ((center.pageX - offset.left - canvas.left) / width);
                        canvas.top -= (newHeight - height) * ((center.pageY - offset.top - canvas.top) / height);
                    } else {
                        canvas.left -= (newWidth - width) / 2;
                        canvas.top -= (newHeight - height) / 2;
                    }
                    canvas.width = newWidth;
                    canvas.height = newHeight;
                    this.renderCanvas(true);
                }
            },
            rotate: function rotate(degree) {
                this.rotateTo((this.image.rotate || 0) + Number(degree));
            },
            rotateTo: function rotateTo(degree) {
                degree = Number(degree);
                if (isNumber(degree) && this.ready && !this.disabled && this.options.rotatable) {
                    this.image.rotate = degree % 360;
                    this.renderCanvas(true, true);
                }
            },
            scaleX: function scaleX(_scaleX) {
                var scaleY = this.image.scaleY;
                this.scale(_scaleX, isNumber(scaleY) ? scaleY : 1);
            },
            scaleY: function scaleY(_scaleY) {
                var scaleX = this.image.scaleX;
                this.scale(isNumber(scaleX) ? scaleX : 1, _scaleY);
            },
            scale: function scale(scaleX) {
                var scaleY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scaleX;
                var image = this.image;
                var transformed = false;
                scaleX = Number(scaleX);
                scaleY = Number(scaleY);
                if (this.ready && !this.disabled && this.options.scalable) {
                    if (isNumber(scaleX)) {
                        image.scaleX = scaleX;
                        transformed = true;
                    }
                    if (isNumber(scaleY)) {
                        image.scaleY = scaleY;
                        transformed = true;
                    }
                    if (transformed) {
                        this.renderCanvas(true, true);
                    }
                }
            },
            getData: function getData() {
                var rounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                var options = this.options
                    , image = this.image
                    , canvas = this.canvas
                    , cropBox = this.cropBox;
                var data = void 0;
                if (this.ready && this.cropped) {
                    data = {
                        x: cropBox.left - canvas.left,
                        y: cropBox.top - canvas.top,
                        width: cropBox.width,
                        height: cropBox.height
                    };
                    var ratio = image.width / image.naturalWidth;
                    $.each(data, function(i, n) {
                        n /= ratio;
                        data[i] = rounded ? Math.round(n) : n;
                    });
                } else {
                    data = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    };
                }
                if (options.rotatable) {
                    data.rotate = image.rotate || 0;
                }
                if (options.scalable) {
                    data.scaleX = image.scaleX || 1;
                    data.scaleY = image.scaleY || 1;
                }
                return data;
            },
            setData: function setData(data) {
                var options = this.options
                    , image = this.image
                    , canvas = this.canvas;
                var cropBoxData = {};
                if ($.isFunction(data)) {
                    data = data.call(this.element);
                }
                if (this.ready && !this.disabled && $.isPlainObject(data)) {
                    var transformed = false;
                    if (options.rotatable) {
                        if (isNumber(data.rotate) && data.rotate !== image.rotate) {
                            image.rotate = data.rotate;
                            transformed = true;
                        }
                    }
                    if (options.scalable) {
                        if (isNumber(data.scaleX) && data.scaleX !== image.scaleX) {
                            image.scaleX = data.scaleX;
                            transformed = true;
                        }
                        if (isNumber(data.scaleY) && data.scaleY !== image.scaleY) {
                            image.scaleY = data.scaleY;
                            transformed = true;
                        }
                    }
                    if (transformed) {
                        this.renderCanvas(true, true);
                    }
                    var ratio = image.width / image.naturalWidth;
                    if (isNumber(data.x)) {
                        cropBoxData.left = data.x * ratio + canvas.left;
                    }
                    if (isNumber(data.y)) {
                        cropBoxData.top = data.y * ratio + canvas.top;
                    }
                    if (isNumber(data.width)) {
                        cropBoxData.width = data.width * ratio;
                    }
                    if (isNumber(data.height)) {
                        cropBoxData.height = data.height * ratio;
                    }
                    this.setCropBoxData(cropBoxData);
                }
            },
            getContainerData: function getContainerData() {
                return this.ready ? $.extend({}, this.container) : {};
            },
            getImageData: function getImageData() {
                return this.loaded ? $.extend({}, this.image) : {};
            },
            getCanvasData: function getCanvasData() {
                var canvas = this.canvas;
                var data = {};
                if (this.ready) {
                    $.each(['left', 'top', 'width', 'height', 'naturalWidth', 'naturalHeight'], function(i, n) {
                        data[n] = canvas[n];
                    });
                }
                return data;
            },
            setCanvasData: function setCanvasData(data) {
                var canvas = this.canvas;
                var aspectRatio = canvas.aspectRatio;
                if ($.isFunction(data)) {
                    data = data.call(this.$element);
                }
                if (this.ready && !this.disabled && $.isPlainObject(data)) {
                    if (isNumber(data.left)) {
                        canvas.left = data.left;
                    }
                    if (isNumber(data.top)) {
                        canvas.top = data.top;
                    }
                    if (isNumber(data.width)) {
                        canvas.width = data.width;
                        canvas.height = data.width / aspectRatio;
                    } else if (isNumber(data.height)) {
                        canvas.height = data.height;
                        canvas.width = data.height * aspectRatio;
                    }
                    this.renderCanvas(true);
                }
            },
            getCropBoxData: function getCropBoxData() {
                var cropBox = this.cropBox;
                return this.ready && this.cropped ? {
                    left: cropBox.left,
                    top: cropBox.top,
                    width: cropBox.width,
                    height: cropBox.height
                } : {};
            },
            setCropBoxData: function setCropBoxData(data) {
                var cropBox = this.cropBox;
                var aspectRatio = this.options.aspectRatio;
                var widthChanged = void 0;
                var heightChanged = void 0;
                if ($.isFunction(data)) {
                    data = data.call(this.$element);
                }
                if (this.ready && this.cropped && !this.disabled && $.isPlainObject(data)) {
                    if (isNumber(data.left)) {
                        cropBox.left = data.left;
                    }
                    if (isNumber(data.top)) {
                        cropBox.top = data.top;
                    }
                    if (isNumber(data.width) && data.width !== cropBox.width) {
                        widthChanged = true;
                        cropBox.width = data.width;
                    }
                    if (isNumber(data.height) && data.height !== cropBox.height) {
                        heightChanged = true;
                        cropBox.height = data.height;
                    }
                    if (aspectRatio) {
                        if (widthChanged) {
                            cropBox.height = cropBox.width / aspectRatio;
                        } else if (heightChanged) {
                            cropBox.width = cropBox.height * aspectRatio;
                        }
                    }
                    this.renderCropBox();
                }
            },
            getCroppedCanvas: function getCroppedCanvas() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                if (!this.ready || !window.HTMLCanvasElement) {
                    return null;
                }
                var canvasData = this.canvas;
                var source = getSourceCanvas(this.$clone[0], this.image, canvasData, options);
                if (!this.cropped) {
                    return source;
                }
                var _getData = this.getData()
                    , initialX = _getData.x
                    , initialY = _getData.y
                    , initialWidth = _getData.width
                    , initialHeight = _getData.height;
                var ratio = source.width / Math.floor(canvasData.naturalWidth);
                if (ratio !== 1) {
                    initialX *= ratio;
                    initialY *= ratio;
                    initialWidth *= ratio;
                    initialHeight *= ratio;
                }
                var aspectRatio = initialWidth / initialHeight;
                var maxSizes = getAdjustedSizes({
                    aspectRatio: aspectRatio,
                    width: options.maxWidth || Infinity,
                    height: options.maxHeight || Infinity
                });
                var minSizes = getAdjustedSizes({
                    aspectRatio: aspectRatio,
                    width: options.minWidth || 0,
                    height: options.minHeight || 0
                }, 'cover');
                var _getAdjustedSizes = getAdjustedSizes({
                    aspectRatio: aspectRatio,
                    width: options.width || (ratio !== 1 ? source.width : initialWidth),
                    height: options.height || (ratio !== 1 ? source.height : initialHeight)
                })
                    , width = _getAdjustedSizes.width
                    , height = _getAdjustedSizes.height;
                width = Math.min(maxSizes.width, Math.max(minSizes.width, width));
                height = Math.min(maxSizes.height, Math.max(minSizes.height, height));
                var canvas = document.createElement('canvas');
                var context = canvas.getContext('2d');
                canvas.width = normalizeDecimalNumber(width);
                canvas.height = normalizeDecimalNumber(height);
                context.fillStyle = options.fillColor || 'transparent';
                context.fillRect(0, 0, width, height);
                var _options$imageSmoothi = options.imageSmoothingEnabled
                    , imageSmoothingEnabled = _options$imageSmoothi === undefined ? true : _options$imageSmoothi
                    , imageSmoothingQuality = options.imageSmoothingQuality;
                context.imageSmoothingEnabled = imageSmoothingEnabled;
                if (imageSmoothingQuality) {
                    context.imageSmoothingQuality = imageSmoothingQuality;
                }
                var sourceWidth = source.width;
                var sourceHeight = source.height;
                var srcX = initialX;
                var srcY = initialY;
                var srcWidth = void 0;
                var srcHeight = void 0;
                var dstX = void 0;
                var dstY = void 0;
                var dstWidth = void 0;
                var dstHeight = void 0;
                if (srcX <= -initialWidth || srcX > sourceWidth) {
                    srcX = 0;
                    srcWidth = 0;
                    dstX = 0;
                    dstWidth = 0;
                } else if (srcX <= 0) {
                    dstX = -srcX;
                    srcX = 0;
                    srcWidth = Math.min(sourceWidth, initialWidth + srcX);
                    dstWidth = srcWidth;
                } else if (srcX <= sourceWidth) {
                    dstX = 0;
                    srcWidth = Math.min(initialWidth, sourceWidth - srcX);
                    dstWidth = srcWidth;
                }
                if (srcWidth <= 0 || srcY <= -initialHeight || srcY > sourceHeight) {
                    srcY = 0;
                    srcHeight = 0;
                    dstY = 0;
                    dstHeight = 0;
                } else if (srcY <= 0) {
                    dstY = -srcY;
                    srcY = 0;
                    srcHeight = Math.min(sourceHeight, initialHeight + srcY);
                    dstHeight = srcHeight;
                } else if (srcY <= sourceHeight) {
                    dstY = 0;
                    srcHeight = Math.min(initialHeight, sourceHeight - srcY);
                    dstHeight = srcHeight;
                }
                var params = [srcX, srcY, srcWidth, srcHeight];
                if (dstWidth > 0 && dstHeight > 0) {
                    var scale = width / initialWidth;
                    params.push(dstX * scale, dstY * scale, dstWidth * scale, dstHeight * scale);
                }
                context.drawImage.apply(context, [source].concat(toConsumableArray($.map(params, function(param) {
                    return Math.floor(normalizeDecimalNumber(param));
                }))));
                return canvas;
            },
            setAspectRatio: function setAspectRatio(aspectRatio) {
                var options = this.options;
                if (!this.disabled && !isUndefined(aspectRatio)) {
                    options.aspectRatio = Math.max(0, aspectRatio) || NaN;
                    if (this.ready) {
                        this.initCropBox();
                        if (this.cropped) {
                            this.renderCropBox();
                        }
                    }
                }
            },
            setDragMode: function setDragMode(mode) {
                var options = this.options;
                var croppable = void 0;
                var movable = void 0;
                if (this.loaded && !this.disabled) {
                    croppable = mode === DRAG_MODE_CROP;
                    movable = options.movable && mode === DRAG_MODE_MOVE;
                    mode = croppable || movable ? mode : DRAG_MODE_NONE;
                    this.$dragBox.data(DATA_ACTION, mode).toggleClass(CLASS_CROP, croppable).toggleClass(CLASS_MOVE, movable);
                    if (!options.cropBoxMovable) {
                        this.$face.data(DATA_ACTION, mode).toggleClass(CLASS_CROP, croppable).toggleClass(CLASS_MOVE, movable);
                    }
                }
            }
        };
        var Cropper = function() {
            function Cropper(element) {
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                classCallCheck(this, Cropper);
                if (!element || !REGEXP_TAG_NAME.test(element.tagName)) {
                    throw new Error('The first argument is required and must be an <img> or <canvas> element.');
                }
                this.element = element;
                this.$element = $(element);
                this.options = $.extend({}, DEFAULTS, $.isPlainObject(options) && options);
                this.completed = false;
                this.cropped = false;
                this.disabled = false;
                this.isImg = false;
                this.limited = false;
                this.loaded = false;
                this.ready = false;
                this.replaced = false;
                this.wheeling = false;
                this.originalUrl = '';
                this.canvas = null;
                this.cropBox = null;
                this.pointers = {};
                this.init();
            }
            createClass(Cropper, [{
                key: 'init',
                value: function init() {
                    var $element = this.$element;
                    var url = void 0;
                    if ($element.is('img')) {
                        this.isImg = true;
                        url = $element.attr('src') || '';
                        this.originalUrl = url;
                        if (!url) {
                            return;
                        }
                        url = $element.prop('src');
                    } else if ($element.is('canvas') && window.HTMLCanvasElement) {
                        url = $element[0].toDataURL();
                    }
                    this.load(url);
                }
            }, {
                key: 'trigger',
                value: function trigger(type, data) {
                    var e = $.Event(type, data);
                    this.$element.trigger(e);
                    return e;
                }
            }, {
                key: 'load',
                value: function load(url) {
                    var _this = this;
                    if (!url) {
                        return;
                    }
                    this.url = url;
                    this.image = {};
                    var $element = this.$element
                        , options = this.options;
                    if (!options.checkOrientation || !window.ArrayBuffer) {
                        this.clone();
                        return;
                    }
                    if (REGEXP_DATA_URL.test(url)) {
                        if (REGEXP_DATA_URL_JPEG.test(url)) {
                            this.read(dataURLToArrayBuffer(url));
                        } else {
                            this.clone();
                        }
                        return;
                    }
                    var xhr = new XMLHttpRequest();
                    xhr.onerror = function() {
                        _this.clone();
                    }
                    ;
                    xhr.onload = function() {
                        _this.read(xhr.response);
                    }
                    ;
                    if (options.checkCrossOrigin && isCrossOriginURL(url) && !$element.prop('crossOrigin')) {
                        url = addTimestamp(url);
                    }
                    xhr.open('get', url);
                    xhr.responseType = 'arraybuffer';
                    xhr.withCredentials = $element.prop('crossOrigin') === 'use-credentials';
                    xhr.send(null);
                }
            }, {
                key: 'read',
                value: function read(arrayBuffer) {
                    var options = this.options
                        , image = this.image;
                    var orientation = getOrientation(arrayBuffer);
                    var rotate = 0;
                    var scaleX = 1;
                    var scaleY = 1;
                    if (orientation > 1) {
                        this.url = arrayBufferToDataURL(arrayBuffer, 'image/jpeg');
                        var _parseOrientation = parseOrientation(orientation);
                        rotate = _parseOrientation.rotate;
                        scaleX = _parseOrientation.scaleX;
                        scaleY = _parseOrientation.scaleY;
                    }
                    if (options.rotatable) {
                        image.rotate = rotate;
                    }
                    if (options.scalable) {
                        image.scaleX = scaleX;
                        image.scaleY = scaleY;
                    }
                    this.clone();
                }
            }, {
                key: 'clone',
                value: function clone() {
                    var $element = this.$element
                        , options = this.options
                        , url = this.url;
                    var crossOrigin = '';
                    var crossOriginUrl = void 0;
                    if (options.checkCrossOrigin && isCrossOriginURL(url)) {
                        crossOrigin = $element.prop('crossOrigin');
                        if (crossOrigin) {
                            crossOriginUrl = url;
                        } else {
                            crossOrigin = 'anonymous';
                            crossOriginUrl = addTimestamp(url);
                        }
                    }
                    this.crossOrigin = crossOrigin;
                    this.crossOriginUrl = crossOriginUrl;
                    var image = document.createElement('img');
                    if (crossOrigin) {
                        image.crossOrigin = crossOrigin;
                    }
                    image.src = crossOriginUrl || url;
                    var $clone = $(image);
                    this.$clone = $clone;
                    if (this.isImg) {
                        if (this.element.complete) {
                            this.start();
                        } else {
                            $element.one(EVENT_LOAD, $.proxy(this.start, this));
                        }
                    } else {
                        $clone.one(EVENT_LOAD, $.proxy(this.start, this)).one(EVENT_ERROR, $.proxy(this.stop, this)).addClass(CLASS_HIDE).insertAfter($element);
                    }
                }
            }, {
                key: 'start',
                value: function start() {
                    var _this2 = this;
                    var $clone = this.$clone;
                    var $image = this.$element;
                    if (!this.isImg) {
                        $clone.off(EVENT_ERROR, this.stop);
                        $image = $clone;
                    }
                    getImageNaturalSizes($image[0], function(naturalWidth, naturalHeight) {
                        $.extend(_this2.image, {
                            naturalWidth: naturalWidth,
                            naturalHeight: naturalHeight,
                            aspectRatio: naturalWidth / naturalHeight
                        });
                        _this2.loaded = true;
                        _this2.build();
                    });
                }
            }, {
                key: 'stop',
                value: function stop() {
                    this.$clone.remove();
                    this.$clone = null;
                }
            }, {
                key: 'build',
                value: function build() {
                    var _this3 = this;
                    if (!this.loaded) {
                        return;
                    }
                    if (this.ready) {
                        this.unbuild();
                    }
                    var $element = this.$element
                        , options = this.options
                        , $clone = this.$clone;
                    var $cropper = $(TEMPLATE);
                    var $cropBox = $cropper.find('.' + NAMESPACE + '-crop-box');
                    var $face = $cropBox.find('.' + NAMESPACE + '-face');
                    this.$container = $element.parent();
                    this.$cropper = $cropper;
                    this.$canvas = $cropper.find('.' + NAMESPACE + '-canvas').append($clone);
                    this.$dragBox = $cropper.find('.' + NAMESPACE + '-drag-box');
                    this.$cropBox = $cropBox;
                    this.$viewBox = $cropper.find('.' + NAMESPACE + '-view-box');
                    this.$face = $face;
                    $element.addClass(CLASS_HIDDEN).after($cropper);
                    if (!this.isImg) {
                        $clone.removeClass(CLASS_HIDE);
                    }
                    this.initPreview();
                    this.bind();
                    options.aspectRatio = Math.max(0, options.aspectRatio) || NaN;
                    options.viewMode = Math.max(0, Math.min(3, Math.round(options.viewMode))) || 0;
                    this.cropped = options.autoCrop;
                    if (options.autoCrop) {
                        if (options.modal) {
                            this.$dragBox.addClass(CLASS_MODAL);
                        }
                    } else {
                        $cropBox.addClass(CLASS_HIDDEN);
                    }
                    if (!options.guides) {
                        $cropBox.find('.' + NAMESPACE + '-dashed').addClass(CLASS_HIDDEN);
                    }
                    if (!options.center) {
                        $cropBox.find('.' + NAMESPACE + '-center').addClass(CLASS_HIDDEN);
                    }
                    if (options.cropBoxMovable) {
                        $face.addClass(CLASS_MOVE).data(DATA_ACTION, ACTION_ALL);
                    }
                    if (!options.highlight) {
                        $face.addClass(CLASS_INVISIBLE);
                    }
                    if (options.background) {
                        $cropper.addClass(NAMESPACE + '-bg');
                    }
                    if (!options.cropBoxResizable) {
                        $cropBox.find('.' + NAMESPACE + '-line,.' + NAMESPACE + '-point').addClass(CLASS_HIDDEN);
                    }
                    this.setDragMode(options.dragMode);
                    this.render();
                    this.ready = true;
                    this.setData(options.data);
                    this.completing = setTimeout(function() {
                        if ($.isFunction(options.ready)) {
                            $element.one(EVENT_READY, options.ready);
                        }
                        _this3.trigger(EVENT_READY);
                        _this3.trigger(EVENT_CROP, _this3.getData());
                        _this3.completed = true;
                    }, 0);
                }
            }, {
                key: 'unbuild',
                value: function unbuild() {
                    if (!this.ready) {
                        return;
                    }
                    if (!this.completed) {
                        clearTimeout(this.completing);
                    }
                    this.ready = false;
                    this.completed = false;
                    this.initialImage = null;
                    this.initialCanvas = null;
                    this.initialCropBox = null;
                    this.container = null;
                    this.canvas = null;
                    this.cropBox = null;
                    this.unbind();
                    this.resetPreview();
                    this.$preview = null;
                    this.$viewBox = null;
                    this.$cropBox = null;
                    this.$dragBox = null;
                    this.$canvas = null;
                    this.$container = null;
                    this.$cropper.remove();
                    this.$cropper = null;
                }
            }], [{
                key: 'setDefaults',
                value: function setDefaults(options) {
                    $.extend(DEFAULTS, $.isPlainObject(options) && options);
                }
            }]);
            return Cropper;
        }();
        if ($.extend) {
            $.extend(Cropper.prototype, render, preview, events, handlers, change, methods);
        }
        if ($.fn) {
            var AnotherCropper = $.fn.cropper;
            $.fn.cropper = function jQueryCropper(option) {
                for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    args[_key - 1] = arguments[_key];
                }
                var result = void 0;
                this.each(function(i, element) {
                    var $element = $(element);
                    var data = $element.data(NAMESPACE);
                    if (!data) {
                        if (/destroy/.test(option)) {
                            return;
                        }
                        var options = $.extend({}, $element.data(), $.isPlainObject(option) && option);
                        data = new Cropper(element,options);
                        $element.data(NAMESPACE, data);
                    }
                    if (isString(option)) {
                        var fn = data[option];
                        if ($.isFunction(fn)) {
                            result = fn.apply(data, args);
                        }
                    }
                });
                return isUndefined(result) ? this : result;
            }
            ;
            $.fn.cropper.Constructor = Cropper;
            $.fn.cropper.setDefaults = Cropper.setDefaults;
            $.fn.cropper.noConflict = function noConflict() {
                $.fn.cropper = AnotherCropper;
                return this;
            }
            ;
        }
    }
)));
function cropper_init(proportion, callback) {
    'use strict';
    var console = window.console || {
        log: function() {}
    };
    var URL = window.URL || window.webkitURL;
    var $image = $('#image_img_container_s');
    var $download = $('#download');
    var $dataX = $('#dataX');
    var $dataY = $('#dataY');
    var $dataHeight = $('#dataHeight');
    var $dataWidth = $('#dataWidth');
    var $dataRotate = $('#dataRotate');
    var $dataScaleX = $('#dataScaleX');
    var $dataScaleY = $('#dataScaleY');
    var options = {
        aspectRatio: proportion[0] / proportion[1],
        preview: '.img-preview',
        crop: function(e) {
            $dataX.val(Math.round(e.x));
            $dataY.val(Math.round(e.y));
            $dataHeight.val(Math.round(e.height));
            $dataWidth.val(Math.round(e.width));
            $dataRotate.val(e.rotate);
            $dataScaleX.val(e.scaleX);
            $dataScaleY.val(e.scaleY)
        }
    };
    var originalImageURL = $image.attr('src');
    var uploadedImageName = 'cropped.jpg';
    var uploadedImageType = 'image/jpeg';
    var uploadedImageURL;
    $('[data-toggle="tooltip"]').tooltip();
    $image.on({
        ready: function(e) {},
        cropstart: function(e) {},
        cropmove: function(e) {},
        cropend: function(e) {},
        crop: function(e) {},
        zoom: function(e) {}
    }).cropper(options);
    if (!$.isFunction(document.createElement('canvas').getContext)) {
        $('button[data-method="getCroppedCanvas"]').prop('disabled', true)
    }
    if (typeof document.createElement('cropper').style.transition === 'undefined') {
        $('button[data-method="rotate"]').prop('disabled', true);
        $('button[data-method="scale"]').prop('disabled', true)
    }
    if (typeof $download[0].download === 'undefined') {
        $download.addClass('disabled')
    }
    $('.docs-toggles').on('change', 'input', function() {
        var $this = $(this);
        var name = $this.attr('name');
        var type = $this.prop('type');
        var cropBoxData;
        var canvasData;
        if (!$image.data('cropper')) {
            return
        }
        if (type === 'checkbox') {
            options[name] = $this.prop('checked');
            cropBoxData = $image.cropper('getCropBoxData');
            canvasData = $image.cropper('getCanvasData');
            options.ready = function() {
                $image.cropper('setCropBoxData', cropBoxData);
                $image.cropper('setCanvasData', canvasData)
            }
        } else if (type === 'radio') {
            options[name] = $this.val()
        }
        $image.cropper('destroy').cropper(options)
    });
    $('.docs-buttons').on('click', '[data-method]', function() {
        var $this = $(this);
        var data = $this.data();
        var cropper = $image.data('cropper');
        var cropped;
        var $target;
        var result;
        if ($this.prop('disabled') || $this.hasClass('disabled')) {
            return
        }
        if (cropper && data.method) {
            data = $.extend({}, data);
            if (typeof data.target !== 'undefined') {
                $target = $(data.target);
                if (typeof data.option === 'undefined') {
                    try {
                        data.option = JSON.parse($target.val())
                    } catch (e) {}
                }
            }
            cropped = cropper.cropped;
            switch (data.method) {
                case 'rotate':
                    if (cropped && options.viewMode > 0) {
                        $image.cropper('clear')
                    }
                    break;
                case 'getCroppedCanvas':
                    if (uploadedImageType === 'image/jpeg') {
                        if (!data.option) {
                            data.option = {}
                        }
                        data.option.fillColor = '#fff'
                    }
                    break
            }
            result = $image.cropper(data.method, data.option, data.secondOption);
            switch (data.method) {
                case 'rotate':
                    if (cropped && options.viewMode > 0) {
                        $image.cropper('crop')
                    }
                    break;
                case 'scaleX':
                case 'scaleY':
                    $(this).data('option', -data.option);
                    break;
                case 'getCroppedCanvas':
                    if (result) {
                        callback(result.toDataURL(uploadedImageType))
                    }
                    break;
                case 'destroy':
                    if (uploadedImageURL) {
                        URL.revokeObjectURL(uploadedImageURL);
                        uploadedImageURL = '';
                        $image.attr('src', originalImageURL)
                    }
                    break
            }
            if ($.isPlainObject(result) && $target) {
                try {
                    $target.val(JSON.stringify(result))
                } catch (e) {}
            }
        }
    });
    $(document.body).on('keydown', function(e) {
        if (!$image.data('cropper') || this.scrollTop > 300) {
            return
        }
        switch (e.which) {
            case 37:
                e.preventDefault();
                $image.cropper('move', -1, 0);
                break;
            case 38:
                e.preventDefault();
                $image.cropper('move', 0, -1);
                break;
            case 39:
                e.preventDefault();
                $image.cropper('move', 1, 0);
                break;
            case 40:
                e.preventDefault();
                $image.cropper('move', 0, 1);
                break
        }
    });
    var $inputImage = $('#inputImage');
    if (URL) {
        $inputImage.change(function() {
            var files = this.files;
            var file;
            if (!$image.data('cropper')) {
                return
            }
            if (files && files.length) {
                file = files[0];
                if (/^image\/\w+$/.test(file.type)) {
                    uploadedImageName = file.name;
                    uploadedImageType = file.type;
                    if (uploadedImageURL) {
                        URL.revokeObjectURL(uploadedImageURL)
                    }
                    uploadedImageURL = URL.createObjectURL(file);
                    $image.cropper('destroy').attr('src', uploadedImageURL).cropper(options);
                    $inputImage.val('')
                } else {
                    window.alert('Please choose an image file.')
                }
            }
        })
    } else {
        $inputImage.prop('disabled', true).parent().addClass('disabled')
    }
}
;var elt = function(data) {
    if (!(this instanceof elt)) {
        return new elt(data)
    }
    this.data = data;
    this.info_modal = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADlUlEQVRYR82XS4hbdRjFz7l3ZsARamzryCQ31lft5A64qErFhYKK9bFwxmJRu/CxKbjzAXYmdyS0yYwu1J3oqt2otNQ+wEKxogiC+GgX0t44vlDnTqJW7LRoK53ce+SmTUw6j/wTRmq295zz/e6Xf/75PuIif9hOfTenHvWU76fC2wBeQahfYkjguMCyLH7Wu6L/wOHNnDXNNQJYs+2Xa7pYeV7UJoKXLR6uExDfka3X/JH0d61AFgUYmChfbYXhVgCbSFitwhqfCwghvC1YY0Uv+dNC3gUB3G3BnaTeBZlop/AcrTQjcYM/5nw4X868AO54sBkRXm/3rRcClRDBwtP+qPPmhZo5AG4huAvC+0tVvFYwhpC4vjiW+qARognAfal0FcLwq9YHrbMvRdBJ2PaN/pbkz7WEZoBCsJPARtN4AZ9SuA5En7FH2Ol7ziNzADKF6bUWdNg4CJjws84odsl2v51+mcBzpt6KrFsmveSXsb7eATc/tYfkcCcha/Klm7sYfWHqlbTX99IP1QGcV6cuWXYaMyR7jEOAV/zVqRewkaFbCMYJjJh7dQazTsLP8Wy1A5nx0pClaK9pQMPJ/h3E9wTWte/lkO+l9lcB3HxQIDFqGiLhDVC/1vXCOpL3mvpjnYCCn3W8KsBgPtgB4nGjAGnmmJe+vFHrbi0P0g6PGvnPiwTs8LPOk7UOHCJxt1GAcJrsvvZo9sp6B24YLw10Kyoa+f8FOORnnXvOdaAwdRDgetOA+EL527501Q9blp+MPR0BSAd9L33fuQ4Ugu0EnjAFiHWViAOTY6nJzgGw3fecpzo6hEsC0HgIM/nSsMVoj3EHhPdU6XnUz/X9We1ArrSyqzv8mKBrmhHRGi6OJvdVO5DMlXoTXeEJo4tonl9BtahEtxDEl9myVhCSzp7qRSJ4Nn2m8SreR/LBVmYAfx2bTSWQY6VJu0v24DfTp0D0tsqQtN/30kOxrg7Qzn0uyAdwvKmQsJLkYKvi8fMIvKmYTR1pAjh/Ie0GscEkpFONgN1+1nm45m+aBzL50ioiPEJyeacFFvNJ+kOw1zYOqXNGsky+dDsRffRfjGSAdYfvJT9phPz/DaU1uos6ltcg6osJ8RgBu51zUVtMItt+8euR/h8X8hqtZu7E1PUM+YzJahb/UVF8a0lWswupq8tpV/kBC+GtIvuqyykQUfytupyCn7PSfyAetUy7ZdQB07BOdP8AHHSWMKZhltwAAAAASUVORK5CYII=';
    this.close_modal = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACFElEQVRYR+2WTWsTQRjH/08mLxepKIoHQcRLBRX0IPhCay2ih/opQpYJCeSQjxLIy7Ahn8KTivZVhB4aqEJ70V5FUSwlkmSHRyZYWJZtd3YDWQ/d487M8//Nf5555iGk/FHK+jgD+H8dcF33wWg0+lStVo+myZNms3kun8/fdhznY1icUAeUUs8BvALQ9zxvOSmEEc9ms+8A3AXwUkr5OghxEsB5Zn5PRPcAbA+Hw2e1Wu0wjhONRmOuUCi8BXCfmXeI6KmU8rcVgJmklPJD9LXWy5VK5ZcNRKvVuiCEmOz8NHET69QkNBAANgDcAfBZa70QBaGUugRgFcCtKPFIADOh2+1e1FqbgBMIAEtSyh9hThhxZt4konkAuwAWwmz3r7W6hn4IZt4XQjxxHOebP5Drule01mvH4kKIpVKp9DPqyKwAgk4w8xchxKNjiHa7fZWI1onohtm5rbjVEfh38M+JLQA3DQQzL5rxTCbzAcC1uOKxAcyCXq93eTwerxsIAF8BiKTiiQBCIMyvWLbHTsJgIgVcMMN7uVxusVgsfo9KOutCdFIgvzgzH0xsJLpuIIQQj20yP7EDqSZhoBbM9hqmWohSLcVB8Zk+RgHx2T7HgWd4moZkLaoniGrJtj3Pe5G0JfN1RaYxWSmXy2+sC1Gn03k4GAz69Xr9T9zq5p+fqCmdRjDuWut+IG5g2/lnAKk78Bd192wwo+7w4AAAAABJRU5ErkJggg==';
    this.modal = function() {
        var data = this.data;
        var info_modal = this.info_modal;
        var close_modal = this.close_modal;
        if (data === undefined) {
            data = {}
        }
        tipIconImg = info_modal;
        if (data.transition === undefined) {
            data.transition = 200
        }
        ;if (data.mask === undefined) {
            data.mask
        }
        ;if (data.width === undefined) {
            data.width = 300
        }
        ;if (data.pageScroll === undefined) {
            data.pageScroll = true
        }
        ;if (data.title === undefined) {
            data.title = '提示'
        }
        ;if (data.maskClose === undefined) {
            data.maskClose = false
        }
        ;if (data.cancelText === undefined) {
            data.cancelText = '取消'
        }
        ;if (data.confirmText === undefined) {
            data.confirmText = "确认"
        }
        ;if (data.top === undefined) {
            data.top = 100
        }
        ;if (data.center === undefined) {
            data.center = false
        }
        ;function calculate(e, sun) {
            if (data.center) {
                var tipHeight = e.height() + sun;
                var windowHeight = $(window).height();
                data.top = 0.85 * ((windowHeight / 2) - (tipHeight / 2))
            }
        }
        ;var idText = "modailItem";
        var date = (new Date().getTime() * Math.random() + '').substr(0, 10);
        idText += date;
        var titleSize = 16;
        var fontSize = 14;
        if ($('#modail-dialog-box_s').index() < 0) {
            var modelBox = '<div id="modail-dialog-box_s"></div>';
            $('body').append(modelBox);
            $('#modail-dialog-box_s').css({
                fontFamily: '微软雅黑',
                fontSize: fontSize + 'px',
                color: '#666666',
            })
        } else {
            $('#modail-dialog-box_s').html('')
        }
        ;if (data.pageScroll) {
            $('body').css('overflow', 'hidden')
        }
        ;$('#modail-dialog-box_s').append('<div id="' + idText + '_box"></div>');
        if (data.mask) {
            $('#' + idText + '_box').append('<div class="' + idText + '_mask"></div>');
            $('.' + idText + '_mask').css({
                position: 'fixed',
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
                background: 'rgba(0,0,0,0.4)',
            })
        }
        ;$('#' + idText + '_box').append('<div class="' + idText + 'centerBox"></div>');
        $('.' + idText + 'centerBox').css({
            width: data.width + 'px',
            padding: '20px',
            background: '#ffffff',
            position: 'fixed',
            right: 0,
            left: 0,
            zIndex: '99999',
            margin: 'auto',
            borderRadius: '5px',
            boxShadow: '0 1px 6px rgba(0,0,0,.2)',
            opacity: '0'
        });
        $('.' + idText + 'centerBox').append('<div class="' + idText + 'title"></div>');
        $('.' + idText + 'title').append('<div class="' + idText + '_item item1"><img src="' + tipIconImg + '" /></div>');
        $('.' + idText + 'title').append('<div class="' + idText + '_item item2">' + data.title + '</div>');
        if (data.closable) {
            $('.' + idText + 'title').append('<div class="' + idText + '_item item3"><img src="' + close_modal + '" /></div>')
        }
        ;$('.' + idText + '_item.item2').css({
            margin: '0 8px',
            fontSize: titleSize + 'px',
            color: '#333333'
        });
        $('.' + idText + '_item.item3').css({
            position: 'absolute',
            right: '15px',
            cursor: 'pointer'
        });
        $('.' + idText + '_item').css({
            display: 'inline-block'
        });
        $('.' + idText + '_item img').css({
            width: titleSize + 4 + 'px',
            verticalAlign: 'top',
            position: 'relative',
            top: '-1px'
        });
        $('.' + idText + 'title').css({
            marginBottom: '10px'
        });
        $('.' + idText + 'centerBox').append('<div class="' + idText + 'body">' + data.content + '</div>');
        $('.' + idText + 'body').css({
            padding: '0 ' + (titleSize + 10) + 'px',
            maxHeight: "70vh",
            overflow: 'auto'
        });
        $('.' + idText + 'centerBox').append('<div class="' + idText + 'footer"><button  class="button_s_model ' + idText + '_confirm">' + data.confirmText + '</button><button class="button_s_model ' + idText + '_cancel">' + data.cancelText + '</button><div class="clearBoth"></div></div>');
        $('.' + idText + 'footer').css({
            paddingTop: '20px'
        });
        $('.button_s_model').css({
            float: 'right',
            marginLeft: '20px',
            outline: 'none',
            border: 'none',
            padding: '8px 30px',
            cursor: 'pointer',
            borderRadius: '5px',
        });
        calculate($('.' + idText + 'centerBox'), 40);
        $('.' + idText + 'centerBox').css({
            top: data.top + 40,
        });
        $('.' + idText + 'centerBox').animate({
            'top': data.top,
            'opacity': '1',
        }, data.transition);
        $('.button_s_model').hover(function() {
            $(this).css({
                'opacity': '.8'
            })
        }, function() {
            $(this).css({
                'opacity': '1'
            })
        });
        $('.button_s_model').mousedown(function() {
            $(this).css({
                'opacity': '1'
            })
        }).mouseup(function() {
            $(this).css({
                'opacity': '.8'
            })
        });
        $('.button_s_model.' + idText + '_cancel').css({
            background: '#fff',
            borderBox: 'box-sizing',
            border: '1px solid #eee',
        }).click(function() {
            data.cancel(close)
        });
        $('.button_s_model.' + idText + '_confirm').css({
            background: '#ec2828',
            color: '#fff',
        }).click(function() {
            data.confirm(close)
        });
        $('.clearBoth').css({
            clear: 'both'
        });
        function close() {
            $('.' + idText + 'centerBox').animate({
                'top': data.top + 40,
                'opacity': '0',
            }, data.transition);
            setTimeout(function() {
                $('#' + idText + '_box').remove();
                if (data.pageScroll) {
                    $('body').css('overflow', 'auto')
                }
            }, data.transition)
        }
        ;$('.' + idText + '_item.item3').click(function() {
            close()
        });
        if (data.maskClose) {
            $('.' + idText + '_mask').click(function() {
                close()
            })
        }
    }
};
elt.modal = function(data) {
    var obj = elt(data);
    obj.modal();
    return this
}
;
elt.modals = function(content, proportion, confirm) {
    var base64 = '';
    elt.modal({
        type: 'confirm',
        icon: 'question',
        title: '裁剪图片',
        content: content,
        center: true,
        transition: 300,
        closable: true,
        mask: true,
        width: 1100,
        pageScroll: false,
        cancel: function(close) {
            close()
        },
        confirm: function(close) {
            $('#_getCropper_img').click()
            compression(base64, proportion, function(data) {
                confirm({
                    close: close,
                    data: data
                })
            })
        }
    })
    cropper_init(proportion, function(e) {
        base64 = e;
    });
}
function compression(imgUrl, size, callback) {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var img = new Image();
    img.src = imgUrl
    img.onload = function() {
        var originWidth = this.width;
        var originHeight = this.height;
        var maxWidth = size[0]
            , maxHeight = size[1];
        var targetWidth = originWidth
            , targetHeight = originHeight;
        if (originWidth > maxWidth || originHeight > maxHeight) {
            if (originWidth / originHeight > maxWidth / maxHeight) {
                targetWidth = maxWidth;
                targetHeight = Math.round(maxWidth * (originHeight / originWidth));
            } else {
                targetHeight = maxHeight;
                targetWidth = Math.round(maxHeight * (originWidth / originHeight));
            }
        }
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        context.clearRect(0, 0, targetWidth, targetHeight);
        context.drawImage(img, 0, 0, targetWidth, targetHeight);
        if (!HTMLCanvasElement.prototype.toBlob) {
            Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
                value: function(callback, type, quality) {
                    var canvas = this;
                    setTimeout(function() {
                        var binStr = atob(canvas.toDataURL(type, quality).split(',')[1]);
                        var len = binStr.length
                            , arr = new Uint8Array(len);
                        for (var i = 0; i < len; i++) {
                            arr[i] = binStr.charCodeAt(i);
                        }
                        callback(new Blob([arr],{
                            type: type || 'image/png'
                        }));
                    });
                }
            });
        }
        var imgObject = {
            blob: '',
            base64: ''
        }
        imgObject.base64 = canvas.toDataURL('image/jpeg', 0.92)
        canvas.toBlob(function(blob) {
            imgObject.blob = blob;
            callback(imgObject)
        }, 'image/jpeg');
    }
    ;
}
function Model_Cropper(data) {
    if (data === undefined) {
        data = {}
    }
    var _imgSrc = data.imgUrl;
    var size = data.proportion == undefined ? [200, 200] : data.proportion;
    var _html = '</br><div class="container"><div class="row"><div class="col-md-9"><div class="img-container"><img id="image_img_container_s" src="' + _imgSrc + '" alt="Picture"></div></div><div class="col-md-3"><div class="docs-preview clearfix"><div class="img-preview preview-lg"></div><div class="img-preview preview-md"></div><div class="img-preview preview-sm"></div><div class="img-preview preview-xs"></div></div><div class="docs-data"><div class="col-md-9 docs-buttons docs-buttons-bd-s"><div class="btn-group"><button type="button" class="btn btn-primary" data-method="setDragMode"                                data-option="move" title="Move"><span class="docs-tooltip" data-toggle="tooltip"                                    data-animation="false" title="移动图像"><img                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAA80lEQVQ4T63U0Q2CMBAG4N4E4gtJYQlGwE10A51ER3ATHMEpaMIKQM604ZpyQK8ReGtSPu76HwV18AMpXtd11TiOldb6Le0XQYv1fd8AQAYANwmNgiFGlUnoJriGpaBiy8aYGhEbiwHARWv9iZ3jArSV5Xn+pZdioDHmys90BlKbZVmeU8C2bZGfqQdZmjWBiFgppV7T+g4AvnpEdO2HqANjAUhzx4Py4DAM9munVIDvoypnLRNq02QtP6f1g7VM6fuBX4Ri0aIost2hEHDo2Kyd3+7BDivdCir2P4uXA0f/vhzWKpUwN+Qpc3foBZvywXDPD3nKyBVVjfuuAAAAAElFTkSuQmCC"                                        alt=""></span></button><button type="button" class="btn btn-primary"                                data-method="setDragMode" data-option="crop" title="Crop"><span class="docs-tooltip"                                    data-toggle="tooltip" data-animation="false" title="裁剪图片"><img                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAZ0lEQVQ4T2NkQALPnj37D+JKSUkxIouTwkbRODgNRHYVNjYx3kUOIkaqG0hJpGALc4oiZXAYCHMFLGiQI4AsF45AA/ElbLLCcHAaSGz+xZZtseYUqhlIjEGE8j7ZJTPIYIKxTA0XAgBbqqd3lpMUhAAAAABJRU5ErkJggg=="                                        alt=""></span></button></div><div class="btn-group"><button type="button" class="btn btn-primary" data-method="zoom"                                data-option="0.1" title="Zoom In"><span class="docs-tooltip" data-toggle="tooltip"                                    data-animation="false" title="放大图片"><img                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAB+0lEQVQ4T62UMW4iMRSG3xuZYmg2NEh+02RPkMkJAjdIyqQJuQE3CGm3WW4Qtt+CatudnCDsCUKDLdGQNFCAeNEb2cg4hqy062Y0M/bn//3/sxH+88AUb7FYnCyXy4ssy0pm7jDzFBEnSqmndrs9OabhA9BaK4BHAGgBwISZK0Q8ZeYSEc8AYJjn+UOr1XpNgfeAs9lsgIj3zPxQFMUgXjCfz8v1ej1CxC+I2NVaT+M5O6BT9lspdX6sLLFjtVqNAYCJqJsEuknPzPwjViaqGo3GNCzRzRd1AyIahtBaoTHmEgBGRHQS72iMqQBgHC80xvSZ+bYoivMPQOddh4g6KaAEEyv3FhHRXg5eYRUukjI3m813By8BQBKVEv8QUd9vaoxhF45UUQ8PHMkLEfXk6TzqMbNYIE/pwyrLskprXS+21korvSDi1zBtD0z64fzdUx+oS/peA12Jz6mWMcYMEXHslQVAaR2pSsC7sTNUFjLzRbPZ7B46BQFMfJRDUMbNvQM63+ScvuR5fnUIKu2CiN+Y+ScR3Rw8KYHRI2Y+Q0RRMNFaP0kA2+1Wvklocjp+AcA1It5pretA91JO9J6E1HOXgf/9BgByUfSlTGutpP8YQ5PXV7iBNLD0YOoi8FAAuCKiOqRPgbH6RDWXSqmpv1D+GXg0lM/U/M3/d6sUKiR6GmiWAAAAAElFTkSuQmCC"                                        alt=""></span></button><button type="button" class="btn btn-primary"                                data-method="zoom" data-option="-0.1" title="Zoom Out"><span class="docs-tooltip"                                    data-toggle="tooltip" data-animation="false" title="缩小图片"><img                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAB2ElEQVQ4T62UQU4iURCGq16axWMjbDrpeonhCHIC8QTqCXQWsx68gOEIHAFPMMwNmAsoG9e66XoJG1hMgATSZarTTaB9tBOVbVd9r/6//gLhm38Y4nnve1mW3SBip/yOiBMAeEiS5LVuhgPgfD5vrVar3wDQBYARIo6L5o6IXAHAJQAMiejuGHQHVNhyuXxBxD/W2n673V5Um2az2dlmsxkBwJNz7kcIugMys0p6JaLbOkmFCpU9IKJhtTYHqmciMrbWdkKTVZuYWeWPiKgVBDKzylgQUf9/l87MOmWfiEqf89Z8QpWLiIMkSSbMfGqMSY6BjTHPcRz/Y+axiEydc4P92hyYpunUGNNXoPf+PsuynzWTXjrnHtM0zUFBYLEQjcPB+HXyi55xdTGlZN1W66MNlw+UEWs0GhdxHE/fSfbea3BfoijqVgtCU6pcROwRUS+45WIxQxE5bzabF3XRKSKj13Qdsujg9Ir4nAPAXbVYZa7X618iki9DRBZHJe+PzcyaRW2aA4D6o3k7AwCV9xcRRyKinp+EoMF/m8KCKxFRECDiIoqiSemv3vR2u9VTPdEHrbXd0qajwI8uZh+qAS+9/zRQH6xM+qCx+xJwD6qe5ofxZWDVmjd8De8VHnPf/wAAAABJRU5ErkJggg=="                                        alt=""></span></button></div><div class="btn-group"><button type="button" class="btn btn-primary" data-method="move"                                data-option="-10" data-second-option="0" title="Move Left"><span class="docs-tooltip"                                    data-toggle="tooltip" data-animation="false" title="左移"><img                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADwSURBVDhPYxgFWMHz588ToEzKwbNnzyYA8X8olyBggtIY4P379wJAgzYAmfkQEeIAVgOBXlT49u3bASDTHyJCPGCE0nDw6tUrgz9//oAM44eIQAAjI6MjlIkVcHBwXBAUFPyAYiAo8P///z8fyiUJgCyUlJQ8APcyKPDJNQwZgA0ERQCQkgexKQVgA0F+l5KSCgQyJ4D4lACMSMETjqCIwglYWFgKxcTELmAYCAKgmP79+/d+YECDggIMgD7AqhYdYE2HIJuYmJgMgS69ABUiGmA1EASASeABFxeXI9DQBVAh6oGnT582QJmjAB0wMAAAS6JSJzIJ5jsAAAAASUVORK5CYII="                                        alt=""></span></button><button type="button" class="btn btn-primary"                                data-method="move" data-option="10" data-second-option="0" title="Move Right"><span                                    class="docs-tooltip" data-toggle="tooltip" data-animation="false" title="右移"><img                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAA60lEQVQ4T2NkoDJgpLJ5DANn4NOnTxukpaUbCPmIaBc+e/bs/////xdwcXEVCgoKfsBlMEkGggz5////BSYmpkBJSckH2Awl2UCooR9YWVkdxcTELqAbCjbw1atXBn/+/OknED4OGJoZGRMlJSUXIIuDDXz+/LnD////9xMKcBzyE6SkpAphctQwEGTWBk5OzkRQZFHLwIlSUlIFIJMpNpARLRzBBr5//17gx48fBvjCEEsYf2RhYXFAj2lyk81FJiamAGxpkRwDN3Jycibgyi2kGggPfIqz3vPnzxPQEzFFWY/YRE+0lwfMQAB7lmwVxb3WbAAAAABJRU5ErkJggg=="                                        alt=""></span></button><button type="button" class="btn btn-primary"                                data-method="move" data-option="0" data-second-option="-10" title="Move Up"><span                                    class="docs-tooltip" data-toggle="tooltip" data-animation="false" title="上移"><img                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADvSURBVDhPYxgQ8P79ewEokyBggtJ4wffv3+c/e/ZsApRLGQAa1A/E/0H4+fPnCVBhnIARSmMFIAP+//8/H8oFAxYWFkMxMbELUC4GwGngq1evDP78+XMeykUGHxkZGQ0kJSUfQPkoAGsYAl2m8Pv37/1QLjrg//fv3wZcEYVhIEghUMN6oCtwxixQTh8YUQugXBSAYeC3b9/6QV6CcvEBf2wxj2Lg06dPG4CGEYxJJJCPHvN4YxnoAlA4OkB4EAC00BEYIQegXAxAVMImBYwaSDkY/AbiTYegAuLv378oWZCDg+OCoKDgByiX1oCBAQD+NlsuI73EWAAAAABJRU5ErkJggg=="                                        alt=""></span></button><button type="button" class="btn btn-primary"                                data-method="move" data-option="0" data-second-option="10" title="Move Down"><span                                    class="docs-tooltip" data-toggle="tooltip" data-animation="false" title="下移"><img                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAD1SURBVDhPY6A2YITSWMH79+8Ffvz4YQDlggEzM/MHMTGxC1AuBsBr4PPnzx3+//+/H8qFgQNSUlKOUDYGYILSVAOjBlIOBr+BKOkQmO4SgOluPpRLFACqb5SWlm6AcjET9rNnzyYAqXwIDz8AGrYAaFgilAsGWHMK0NANQMofwsMOgIZd4OLichQUFPwAFQIDrGHIyckJ8vpFKBcDAOU+MDExBaIbBgI48zIwPBVArgAy+SEiCMDCwmKIq4DAGcuSkpIPgBodoFw4YGRkTMRX2uBNNiCNIAOgXBCYALRoAZRNPgDFPBCvh3KpA0CFLZRJT8DAAACiKU0pZ0JpvQAAAABJRU5ErkJggg=="                                        alt=""></span></button></div><div class="btn-group"><button type="button" class="btn btn-primary" data-method="rotate"                                data-option="-90" title="Rotate Left"><span class="docs-tooltip" data-toggle="tooltip"                                    data-animation="false" title="逆时针旋转90°"><img                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAUcaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDYtMTVUMTI6MTg6NTArMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTA2LTE1VDEyOjIxOjI1KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA2LTE1VDEyOjIxOjI1KzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA1ZDU0MjhhLTcwYWYtYWQ0NC1hMmYzLTIxZWQwM2ZiMmQ1MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowNWQ1NDI4YS03MGFmLWFkNDQtYTJmMy0yMWVkMDNmYjJkNTMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowNWQ1NDI4YS03MGFmLWFkNDQtYTJmMy0yMWVkMDNmYjJkNTMiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjA1ZDU0MjhhLTcwYWYtYWQ0NC1hMmYzLTIxZWQwM2ZiMmQ1MyIgc3RFdnQ6d2hlbj0iMjAxOS0wNi0xNVQxMjoxODo1MCswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr4IC7AAAAHFSURBVDhPrVTLbcJAELUtkBCXmAsScAh0QAlQQUgFkA7oIE4FiBKoAKgA6IAOkhz4iAs+ARK/vLcer2y8JpHCk9Y7Mzv7PDs7s/b1erUeCUVo27aocSwWixfHcerwaVDH/AV9msvlxoVCwVdOESguftbrdeNyuQyz2WyzWCzOl8tlC+s9jKryNABBeCDuR4k1IQg8OLxD5uIIcidwuQ/4z/P5fDMkJZejVgQgcm/IZtDfMJoYNeivGAO1AsBW3+12k+1264opHqHYQvTL5XJX5Bg2m039dDpNIT5RB8dHpVLxEhFGgcU2N4oaA/OcyWTURREMJoxSEcKQuDHYXInCCJJi0sc/HA68yODIvu+7+/2+A1nngmCJlEqlVFKphmGgWQP4du7W4W9YrVZV7P8UdQbCRmoO/4hEnT6MEJGq1PyLECRtEZk2XlKSkKWCZA+jxWoC+tzDFJbON2p2RCFGSLLj8TiB2GIHmOqQP8IPe6w9MRG6AWK3fNsBginWVX7wgDBnLejR6HVHKa4oISGkDP85sKQDe1XLiWomJHgsHLkLOx8KE/EYredJt2ikEkbBiM/nsws/vkQ+3sC56XElNOHjYFk/LiEDjRkpQd8AAAAASUVORK5CYII="                                        alt=""></span></button><button type="button" class="btn btn-primary"                                data-method="rotate" data-option="90" title="Rotate Right"><span class="docs-tooltip"                                    data-toggle="tooltip" data-animation="false" title="顺时针旋转90°"><img                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABvElEQVQ4T62UwW3CQBBFZ8xyMJfABWnXh5AOSAWBCoAKQipAqSDQgTsAKgipAJdACeHAWuKCcwEkkCcatEbG9qLIypws7ezzzJ8/i/DPgTbebrerH4/HXhzHHURscR4iBnEcrzzP+7LdywENaERE4zvFfwPAu1Jqsd1u26fTaek4zkBKGdwAGbbf75eI2P6LEkQ0A4A+ItaJaOJ53vgKtMDmALBAxBUAcNstIhoCwEv2hzngZrMZI+KHSfwRQnSazSaDcqG19gFglD64AXJ1h8NhlyQIIZ5tsEQzbtMKDMNwSERTkzBXSnFbhaG1jgDgoeCQh+RfNNRas7ivJmnA07MBwzDssJXS54gYua47azQaUQIMEqER8UlKybYoFUXALvupFI3NzxfTE0bENyklS1Aqkgr7APBpCIFSqluKllRoBsO6PfJ34ikb1NhsKoSYZO113RStdbpKZvmu6054cmmw8eGU15OIomq12k1Db3Y5uwF8gVfPcZzL1ImI7ZK2TG6jcq9NZgXvSbkWQvStLWfbOp/P/Hz1CohrfmVqtZqflYNzrQ8sH5q3kbWq8zZUKpXItuPJj+8Cy1jnF+FT4xW4++ZPAAAAAElFTkSuQmCC"                                        alt=""></span></button></div><div class="btn-group"><button type="button" class="btn btn-primary" data-method="scaleX"                                data-option="-1" title="Flip Horizontal"><span class="docs-tooltip"                                    data-toggle="tooltip" data-animation="false" title="左右翻转"><img                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACPSURBVDhP7ZDBDcMgEAQhZUARTikpwa4Ad5CUYCpwSrKLAMo478HJEg8ecfxkJDTc6pBWqE7nBmKMC85Lxia8w7synjzEGSx8Iae1HkrShoiekJM3J1qcm0GuTD/jjTEzX6qGf0DiGq6PQymlt0RNQggf3oVXiTJVQ9QeIY//2UvSBv+8Qd5aO5Wk07mIUgfU3jj47+ZLDgAAAABJRU5ErkJggg=="                                        alt=""></span></button><button type="button" class="btn btn-primary"                                data-method="scaleY" data-option="-1" title="Flip Vertical"><span class="docs-tooltip"                                    data-toggle="tooltip" data-animation="false" title="上下翻转"><img                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAsklEQVQ4T+2U0Q3CMAxEfWtchoBRugEwATABZQPYoGzAKLCE1zgUKUUFqUkV5bP5imT7yTqdD9b4oTHPFgHd/WZmInkuLVAEuvtgZrsIkjSEEA45aBaYNjv+Ae4kT3PQErCTtAVwSRteAbxIPquA45C7K/5JFiUqNkTQCsxacdXwVx537wBsJPWxAqCX9K42dvPTS6b+hoOZPUjuq8NhcnoxvuLpzYbC2LvINqUMnNabAz+bm1gVgz09FwAAAABJRU5ErkJggg=="                                        alt=""></span></button></div><div class="btn-group"><button type="button" class="btn btn-primary" data-method="reset"                                title="Reset"><span class="docs-tooltip" data-toggle="tooltip" data-animation="false"                                    title="重置"><img                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAYAAAB4d5a9AAACEklEQVRIS6VVQXIaMRCcodjDcjF7oUpSpYq8APICww+SF9h5ge0XkLwg5AUhP7AvuRq/wOQF8QWpigv4BFXATqq3tETGu15nrRMg0a3p7hkxVazlctler9dnRPRRRNrM3MdfRGTGzNNms/mz0+nMXoLhsk2AbzabizRNL5m57c/dBedP888iMmm1WldJkqyK8EpJrLVjIroQkd+NRmOslJocA1hrUd0XZu6JyCqKomFRVaUki8Wiv9/v+0XgBWSXRPStjOgJCSQqK7nKO+fcuYj8IKIHrfX78PyBxDk3EJGR1npYBVi2b62FpGfM/DlUICPxCbonoi4zD5VS0zpEzrmuiPw5riYjyU32wNM3VpMFJrwsw+DdbocqDuuN1eTeXGmtQUjsY9hnZiRkhcwz80xrfV1TMnh7S0TftdbApIPx1tqpiPSMMUkdcC87GvcEvQNfmBlB+BWSZMmI4zipG+P5fI7GHAWXfIyi6F1IkjUUEX2qK5VP6QMRnXiiDOtAkh9ABI0xH+pKFlRzp7UePPHEa1rYTP9D6C+LCT1QSqGqf8bji2+mmYhI2bB7DSFwcoJnJJ4oyzmGHcZDlT8ATNN0xMw3ZWcLp7AfdmgkGIhoj40xN2EVaOLtdovOPsfvIvLVGIPoPlulo95LB4/Cxwla4wHrhkgvERTKdXwNP50hIaZCz+8/EhGe3Os4jidVffUXyCE33AhrGcAAAAAASUVORK5CYII="                                        alt=""></span></button></div><div class="btn-group" style="display:none"><button type="button" class="btn btn-success"                                id="_getCropper_img" data-method="getCroppedCanvas"                                data-option="{ &quot;maxWidth&quot;: 4096, &quot;maxHeight&quot;: 4096 }"><span                                    class="docs-tooltip" data-toggle="tooltip" data-animation="false"                                    title="$().cropper(&quot;getCroppedCanvas&quot;, { maxWidth: 4096, maxHeight: 4096 })">                                    获取图片</span></button></div><div class="modal fade docs-cropped" id="getCroppedCanvasModal" aria-hidden="true"                            aria-labelledby="getCroppedCanvasTitle" role="dialog" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="getCroppedCanvasTitle">Cropped</h5><button                                            type="button" class="close" data-dismiss="modal" aria-label="Close"><span                                                aria-hidden="true">&times;</span></button></div><div class="modal-body"></div><div class="modal-footer"><button type="button" class="btn btn-secondary"                                            data-dismiss="modal">Close</button><a class="btn btn-primary" id="download"                                            href="javascript:void(0);" download="cropped.jpg"></a></div></div></div></div></div></div></div></div></div>';
    elt.modals(_html, size, data.confirm)
}
