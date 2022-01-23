function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Sweetalert2 = t();
}(this, function () {
  "use strict";

  var t = "SweetAlert2:",
      i = function i(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  },
      a = function a(e) {
    return Array.prototype.slice.call(e);
  },
      r = function r(e) {
    console.warn("".concat(t, " ").concat("object" == _typeof(e) ? e.join(" ") : e));
  },
      s = function s(e) {
    console.error("".concat(t, " ").concat(e));
  },
      n = [],
      c = function c(e, t) {
    t = '"'.concat(e, '" is deprecated and will be removed in the next major release. Please use "').concat(t, '" instead.'), n.includes(t) || (n.push(t), r(t));
  },
      l = function l(e) {
    return "function" == typeof e ? e() : e;
  },
      u = function u(e) {
    return e && "function" == typeof e.toPromise;
  },
      d = function d(e) {
    return u(e) ? e.toPromise() : Promise.resolve(e);
  },
      p = function p(e) {
    return e && Promise.resolve(e) === e;
  },
      m = {
    title: "",
    titleText: "",
    text: "",
    html: "",
    footer: "",
    icon: void 0,
    iconColor: void 0,
    iconHtml: void 0,
    template: void 0,
    toast: !1,
    showClass: {
      popup: "swal2-show",
      backdrop: "swal2-backdrop-show",
      icon: "swal2-icon-show"
    },
    hideClass: {
      popup: "swal2-hide",
      backdrop: "swal2-backdrop-hide",
      icon: "swal2-icon-hide"
    },
    customClass: {},
    target: "body",
    color: void 0,
    backdrop: !0,
    heightAuto: !0,
    allowOutsideClick: !0,
    allowEscapeKey: !0,
    allowEnterKey: !0,
    stopKeydownPropagation: !0,
    keydownListenerCapture: !1,
    showConfirmButton: !0,
    showDenyButton: !1,
    showCancelButton: !1,
    preConfirm: void 0,
    preDeny: void 0,
    confirmButtonText: "OK",
    confirmButtonAriaLabel: "",
    confirmButtonColor: void 0,
    denyButtonText: "No",
    denyButtonAriaLabel: "",
    denyButtonColor: void 0,
    cancelButtonText: "Cancel",
    cancelButtonAriaLabel: "",
    cancelButtonColor: void 0,
    buttonsStyling: !0,
    reverseButtons: !1,
    focusConfirm: !0,
    focusDeny: !1,
    focusCancel: !1,
    returnFocus: !0,
    showCloseButton: !1,
    closeButtonHtml: "&times;",
    closeButtonAriaLabel: "Close this dialog",
    loaderHtml: "",
    showLoaderOnConfirm: !1,
    showLoaderOnDeny: !1,
    imageUrl: void 0,
    imageWidth: void 0,
    imageHeight: void 0,
    imageAlt: "",
    timer: void 0,
    timerProgressBar: !1,
    width: void 0,
    padding: void 0,
    background: void 0,
    input: void 0,
    inputPlaceholder: "",
    inputLabel: "",
    inputValue: "",
    inputOptions: {},
    inputAutoTrim: !0,
    inputAttributes: {},
    inputValidator: void 0,
    returnInputValueOnDeny: !1,
    validationMessage: void 0,
    grow: !1,
    position: "center",
    progressSteps: [],
    currentProgressStep: void 0,
    progressStepsDistance: void 0,
    willOpen: void 0,
    didOpen: void 0,
    didRender: void 0,
    willClose: void 0,
    didClose: void 0,
    didDestroy: void 0,
    scrollbarPadding: !0
  },
      o = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "color", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "preConfirm", "preDeny", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose"],
      g = {},
      h = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"],
      f = function f(e) {
    return Object.prototype.hasOwnProperty.call(m, e);
  },
      b = function b(e) {
    return -1 !== o.indexOf(e);
  },
      y = function y(e) {
    return g[e];
  },
      v = function v(e) {
    !e.backdrop && e.allowOutsideClick && r('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');

    for (var _o in e) {
      n = _o, f(n) || r('Unknown parameter "'.concat(n, '"')), e.toast && (t = _o, h.includes(t) && r('The parameter "'.concat(t, '" is incompatible with toasts'))), t = _o, y(t) && c(t, y(t));
    }

    var t, n;
  };

  var e = function e(_e2) {
    var t = {};

    for (var _n in _e2) {
      t[_e2[_n]] = "swal2-" + _e2[_n];
    }

    return t;
  };

  var w = e(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error"]),
      C = e(["success", "warning", "info", "question", "error"]),
      k = function k() {
    return document.body.querySelector(".".concat(w.container));
  },
      A = function A(e) {
    var t = k();
    return t ? t.querySelector(e) : null;
  },
      P = function P(e) {
    return A(".".concat(e));
  },
      B = function B() {
    return P(w.popup);
  },
      x = function x() {
    return P(w.icon);
  },
      E = function E() {
    return P(w.title);
  },
      T = function T() {
    return P(w["html-container"]);
  },
      S = function S() {
    return P(w.image);
  },
      L = function L() {
    return P(w["progress-steps"]);
  },
      O = function O() {
    return P(w["validation-message"]);
  },
      j = function j() {
    return A(".".concat(w.actions, " .").concat(w.confirm));
  },
      M = function M() {
    return A(".".concat(w.actions, " .").concat(w.deny));
  };

  var D = function D() {
    return A(".".concat(w.loader));
  },
      I = function I() {
    return A(".".concat(w.actions, " .").concat(w.cancel));
  },
      H = function H() {
    return P(w.actions);
  },
      q = function q() {
    return P(w.footer);
  },
      V = function V() {
    return P(w["timer-progress-bar"]);
  },
      N = function N() {
    return P(w.close);
  },
      R = function R() {
    var e = a(B().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function (e, t) {
      e = parseInt(e.getAttribute("tabindex")), t = parseInt(t.getAttribute("tabindex"));
      return t < e ? 1 : e < t ? -1 : 0;
    });
    var t = a(B().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter(function (e) {
      return "-1" !== e.getAttribute("tabindex");
    });
    return function (t) {
      var n = [];

      for (var _e3 = 0; _e3 < t.length; _e3++) {
        -1 === n.indexOf(t[_e3]) && n.push(t[_e3]);
      }

      return n;
    }(e.concat(t)).filter(function (e) {
      return ae(e);
    });
  },
      F = function F() {
    return !K(document.body, w["toast-shown"]) && !K(document.body, w["no-backdrop"]);
  },
      U = function U() {
    return B() && K(B(), w.toast);
  };

  function W(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
    var n = V();
    ae(n) && (t && (n.style.transition = "none", n.style.width = "100%"), setTimeout(function () {
      n.style.transition = "width ".concat(e / 1e3, "s linear"), n.style.width = "0%";
    }, 10));
  }

  var z = {
    previousBodyPadding: null
  },
      _ = function _(t, e) {
    if (t.textContent = "", e) {
      var _n2 = new DOMParser(),
          _o2 = _n2.parseFromString(e, "text/html");

      a(_o2.querySelector("head").childNodes).forEach(function (e) {
        t.appendChild(e);
      }), a(_o2.querySelector("body").childNodes).forEach(function (e) {
        t.appendChild(e);
      });
    }
  },
      K = function K(t, e) {
    if (!e) return !1;
    var n = e.split(/\s+/);

    for (var _e4 = 0; _e4 < n.length; _e4++) {
      if (!t.classList.contains(n[_e4])) return !1;
    }

    return !0;
  },
      Y = function Y(e, t, n) {
    var o, i;

    if (o = e, i = t, a(o.classList).forEach(function (e) {
      Object.values(w).includes(e) || Object.values(C).includes(e) || Object.values(i.showClass).includes(e) || o.classList.remove(e);
    }), t.customClass && t.customClass[n]) {
      if ("string" != typeof t.customClass[n] && !t.customClass[n].forEach) return r("Invalid type of customClass.".concat(n, '! Expected string or iterable object, got "').concat(_typeof(t.customClass[n]), '"'));
      $(e, t.customClass[n]);
    }
  },
      Z = function Z(e, t) {
    if (!t) return null;

    switch (t) {
      case "select":
      case "textarea":
      case "file":
        return e.querySelector(".".concat(w.popup, " > .").concat(w[t]));

      case "checkbox":
        return e.querySelector(".".concat(w.popup, " > .").concat(w.checkbox, " input"));

      case "radio":
        return e.querySelector(".".concat(w.popup, " > .").concat(w.radio, " input:checked")) || e.querySelector(".".concat(w.popup, " > .").concat(w.radio, " input:first-child"));

      case "range":
        return e.querySelector(".".concat(w.popup, " > .").concat(w.range, " input"));

      default:
        return e.querySelector(".".concat(w.popup, " > .").concat(w.input));
    }
  },
      J = function J(e) {
    var t;
    e.focus(), "file" !== e.type && (t = e.value, e.value = "", e.value = t);
  },
      X = function X(e, t, n) {
    e && t && (t = "string" == typeof t ? t.split(/\s+/).filter(Boolean) : t).forEach(function (t) {
      Array.isArray(e) ? e.forEach(function (e) {
        n ? e.classList.add(t) : e.classList.remove(t);
      }) : n ? e.classList.add(t) : e.classList.remove(t);
    });
  },
      $ = function $(e, t) {
    X(e, t, !0);
  },
      G = function G(e, t) {
    X(e, t, !1);
  },
      Q = function Q(e, t) {
    var n = a(e.childNodes);

    for (var _e5 = 0; _e5 < n.length; _e5++) {
      if (K(n[_e5], t)) return n[_e5];
    }
  },
      ee = function ee(e, t, n) {
    (n = n === "".concat(parseInt(n)) ? parseInt(n) : n) || 0 === parseInt(n) ? e.style[t] = "number" == typeof n ? "".concat(n, "px") : n : e.style.removeProperty(t);
  },
      te = function te(e) {
    e.style.display = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "flex";
  },
      ne = function ne(e) {
    e.style.display = "none";
  },
      oe = function oe(e, t, n, o) {
    var i = e.querySelector(t);
    i && (i.style[n] = o);
  },
      ie = function ie(e, t, n) {
    t ? te(e, n) : ne(e);
  },
      ae = function ae(e) {
    return !(!e || !(e.offsetWidth || e.offsetHeight || e.getClientRects().length));
  },
      re = function re() {
    return !ae(j()) && !ae(M()) && !ae(I());
  },
      se = function se(e) {
    return !!(e.scrollHeight > e.clientHeight);
  },
      ce = function ce(e) {
    var t = window.getComputedStyle(e);
    var n = parseFloat(t.getPropertyValue("animation-duration") || "0"),
        e = parseFloat(t.getPropertyValue("transition-duration") || "0");
    return 0 < n || 0 < e;
  },
      le = function le() {
    return "undefined" == typeof window || "undefined" == typeof document;
  },
      ue = 100,
      de = {},
      pe = function pe() {
    de.previousActiveElement && de.previousActiveElement.focus ? (de.previousActiveElement.focus(), de.previousActiveElement = null) : document.body && document.body.focus();
  },
      me = function me(o) {
    return new Promise(function (e) {
      if (!o) return e();
      var t = window.scrollX,
          n = window.scrollY;
      de.restoreFocusTimeout = setTimeout(function () {
        pe(), e();
      }, ue), window.scrollTo(t, n);
    });
  },
      ge = '\n <div aria-labelledby="'.concat(w.title, '" aria-describedby="').concat(w["html-container"], '" class="').concat(w.popup, '" tabindex="-1">\n   <button type="button" class="').concat(w.close, '"></button>\n   <ul class="').concat(w["progress-steps"], '"></ul>\n   <div class="').concat(w.icon, '"></div>\n   <img class="').concat(w.image, '" />\n   <h2 class="').concat(w.title, '" id="').concat(w.title, '"></h2>\n   <div class="').concat(w["html-container"], '" id="').concat(w["html-container"], '"></div>\n   <input class="').concat(w.input, '" />\n   <input type="file" class="').concat(w.file, '" />\n   <div class="').concat(w.range, '">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="').concat(w.select, '"></select>\n   <div class="').concat(w.radio, '"></div>\n   <label for="').concat(w.checkbox, '" class="').concat(w.checkbox, '">\n     <input type="checkbox" />\n     <span class="').concat(w.label, '"></span>\n   </label>\n   <textarea class="').concat(w.textarea, '"></textarea>\n   <div class="').concat(w["validation-message"], '" id="').concat(w["validation-message"], '"></div>\n   <div class="').concat(w.actions, '">\n     <div class="').concat(w.loader, '"></div>\n     <button type="button" class="').concat(w.confirm, '"></button>\n     <button type="button" class="').concat(w.deny, '"></button>\n     <button type="button" class="').concat(w.cancel, '"></button>\n   </div>\n   <div class="').concat(w.footer, '"></div>\n   <div class="').concat(w["timer-progress-bar-container"], '">\n     <div class="').concat(w["timer-progress-bar"], '"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, ""),
      he = function he() {
    var e = k();
    return !!e && (e.remove(), G([document.documentElement, document.body], [w["no-backdrop"], w["toast-shown"], w["has-column"]]), !0);
  },
      fe = function fe() {
    de.currentInstance.resetValidationMessage();
  },
      be = function be() {
    var e = B(),
        t = Q(e, w.input),
        n = Q(e, w.file),
        o = e.querySelector(".".concat(w.range, " input")),
        i = e.querySelector(".".concat(w.range, " output")),
        a = Q(e, w.select),
        r = e.querySelector(".".concat(w.checkbox, " input")),
        s = Q(e, w.textarea);
    t.oninput = fe, n.onchange = fe, a.onchange = fe, r.onchange = fe, s.oninput = fe, o.oninput = function () {
      fe(), i.value = o.value;
    }, o.onchange = function () {
      fe(), o.nextSibling.value = o.value;
    };
  },
      ye = function ye(e) {
    return "string" == typeof e ? document.querySelector(e) : e;
  },
      ve = function ve(e) {
    var t = B();
    t.setAttribute("role", e.toast ? "alert" : "dialog"), t.setAttribute("aria-live", e.toast ? "polite" : "assertive"), e.toast || t.setAttribute("aria-modal", "true");
  },
      we = function we(e) {
    "rtl" === window.getComputedStyle(e).direction && $(k(), w.rtl);
  },
      Ce = function Ce(e, t) {
    e instanceof HTMLElement ? t.appendChild(e) : "object" == _typeof(e) ? function (e, t) {
      if (e.jquery) ke(t, e);else _(t, e.toString());
    }(e, t) : e && _(t, e);
  },
      ke = function ke(t, n) {
    if (t.textContent = "", 0 in n) for (var _e6 = 0; (_e6 in n); _e6++) {
      t.appendChild(n[_e6].cloneNode(!0));
    } else t.appendChild(n.cloneNode(!0));
  },
      Ae = function () {
    if (le()) return !1;
    var e = document.createElement("div"),
        t = {
      WebkitAnimation: "webkitAnimationEnd",
      animation: "animationend"
    };

    for (var _n3 in t) {
      if (Object.prototype.hasOwnProperty.call(t, _n3) && void 0 !== e.style[_n3]) return t[_n3];
    }

    return !1;
  }(),
      Pe = function Pe(e, t) {
    var n,
        o,
        i,
        a,
        r,
        s = H(),
        c = D();
    (t.showConfirmButton || t.showDenyButton || t.showCancelButton ? te : ne)(s), Y(s, t, "actions"), n = s, o = c, i = t, a = j(), r = M(), s = I(), Be(a, "confirm", i), Be(r, "deny", i), Be(s, "cancel", i), function (e, t, n, o) {
      if (!o.buttonsStyling) return G([e, t, n], w.styled);
      $([e, t, n], w.styled), o.confirmButtonColor && (e.style.backgroundColor = o.confirmButtonColor, $(e, w["default-outline"]));
      o.denyButtonColor && (t.style.backgroundColor = o.denyButtonColor, $(t, w["default-outline"]));
      o.cancelButtonColor && (n.style.backgroundColor = o.cancelButtonColor, $(n, w["default-outline"]));
    }(a, r, s, i), i.reverseButtons && (i.toast ? (n.insertBefore(s, a), n.insertBefore(r, a)) : (n.insertBefore(s, o), n.insertBefore(r, o), n.insertBefore(a, o))), _(c, t.loaderHtml), Y(c, t, "loader");
  };

  function Be(e, t, n) {
    ie(e, n["show".concat(i(t), "Button")], "inline-block"), _(e, n["".concat(t, "ButtonText")]), e.setAttribute("aria-label", n["".concat(t, "ButtonAriaLabel")]), e.className = w[t], Y(e, n, "".concat(t, "Button")), $(e, n["".concat(t, "ButtonClass")]);
  }

  var xe = function xe(e, t) {
    var n,
        o,
        i = k();
    i && (o = i, "string" == typeof (n = t.backdrop) ? o.style.background = n : n || $([document.documentElement, document.body], w["no-backdrop"]), o = i, (n = t.position) in w ? $(o, w[n]) : (r('The "position" parameter is not valid, defaulting to "center"'), $(o, w.center)), n = i, !(o = t.grow) || "string" != typeof o || (o = "grow-".concat(o)) in w && $(n, w[o]), Y(i, t, "container"));
  };

  var Ee = {
    awaitingPromise: new WeakMap(),
    promise: new WeakMap(),
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };

  var Te = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
      Se = function Se(e, o) {
    var i = B();
    e = Ee.innerParams.get(e);
    var a = !e || o.input !== e.input;
    Te.forEach(function (e) {
      var t = w[e];
      var n = Q(i, t);
      (function (e, t) {
        var n = Z(B(), e);

        if (n) {
          Le(n);

          for (var _o3 in t) {
            n.setAttribute(_o3, t[_o3]);
          }
        }
      })(e, o.inputAttributes), n.className = t, a && ne(n);
    }), o.input && (a && function (e) {
      if (!De[e.input]) return s('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(e.input, '"'));
      var t = Me(e.input),
          n = De[e.input](t, e);
      te(n), setTimeout(function () {
        J(n);
      });
    }(o), function (e) {
      var t = Me(e.input);
      if (e.customClass) $(t, e.customClass.input);
    }(o));
  },
      Le = function Le(t) {
    for (var _e7 = 0; _e7 < t.attributes.length; _e7++) {
      var n = t.attributes[_e7].name;
      ["type", "value", "style"].includes(n) || t.removeAttribute(n);
    }
  },
      Oe = function Oe(e, t) {
    e.placeholder && !t.inputPlaceholder || (e.placeholder = t.inputPlaceholder);
  },
      je = function je(e, t, n) {
    if (n.inputLabel) {
      e.id = w.input;

      var _i = document.createElement("label");

      var o = w["input-label"];
      _i.setAttribute("for", e.id), _i.className = o, $(_i, n.customClass.inputLabel), _i.innerText = n.inputLabel, t.insertAdjacentElement("beforebegin", _i);
    }
  },
      Me = function Me(e) {
    e = w[e] || w.input;
    return Q(B(), e);
  },
      De = {};

  De.text = De.email = De.password = De.number = De.tel = De.url = function (e, t) {
    return "string" == typeof t.inputValue || "number" == typeof t.inputValue ? e.value = t.inputValue : p(t.inputValue) || r('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(_typeof(t.inputValue), '"')), je(e, e, t), Oe(e, t), e.type = t.input, e;
  }, De.file = function (e, t) {
    return je(e, e, t), Oe(e, t), e;
  }, De.range = function (e, t) {
    var n = e.querySelector("input"),
        o = e.querySelector("output");
    return n.value = t.inputValue, n.type = t.input, o.value = t.inputValue, je(n, e, t), e;
  }, De.select = function (e, t) {
    if (e.textContent = "", t.inputPlaceholder) {
      var _n4 = document.createElement("option");

      _(_n4, t.inputPlaceholder), _n4.value = "", _n4.disabled = !0, _n4.selected = !0, e.appendChild(_n4);
    }

    return je(e, e, t), e;
  }, De.radio = function (e) {
    return e.textContent = "", e;
  }, De.checkbox = function (e, t) {
    var n = Z(B(), "checkbox");
    n.value = "1", n.id = w.checkbox, n.checked = Boolean(t.inputValue);
    var o = e.querySelector("span");
    return _(o, t.inputPlaceholder), e;
  }, De.textarea = function (n, e) {
    n.value = e.inputValue, Oe(n, e), je(n, n, e);
    return setTimeout(function () {
      if ("MutationObserver" in window) {
        var _t2 = parseInt(window.getComputedStyle(B()).width);

        new MutationObserver(function () {
          var e = n.offsetWidth + (e = n, parseInt(window.getComputedStyle(e).marginLeft) + parseInt(window.getComputedStyle(e).marginRight));
          e > _t2 ? B().style.width = "".concat(e, "px") : B().style.width = null;
        }).observe(n, {
          attributes: !0,
          attributeFilter: ["style"]
        });
      }
    }), n;
  };

  var Ie = function Ie(e, t) {
    var n = T();
    Y(n, t, "htmlContainer"), t.html ? (Ce(t.html, n), te(n, "block")) : t.text ? (n.textContent = t.text, te(n, "block")) : ne(n), Se(e, t);
  },
      He = function He(e, t) {
    var n = q();
    ie(n, t.footer), t.footer && Ce(t.footer, n), Y(n, t, "footer");
  },
      qe = function qe(e, t) {
    var n = N();
    _(n, t.closeButtonHtml), Y(n, t, "closeButton"), ie(n, t.showCloseButton), n.setAttribute("aria-label", t.closeButtonAriaLabel);
  },
      Ve = function Ve(e, t) {
    var n = Ee.innerParams.get(e),
        e = x();
    return n && t.icon === n.icon ? (Fe(e, t), void Ne(e, t)) : t.icon || t.iconHtml ? t.icon && -1 === Object.keys(C).indexOf(t.icon) ? (s('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(t.icon, '"')), ne(e)) : (te(e), Fe(e, t), Ne(e, t), void $(e, t.showClass.icon)) : ne(e);
  },
      Ne = function Ne(e, t) {
    for (var _n5 in C) {
      t.icon !== _n5 && G(e, C[_n5]);
    }

    $(e, C[t.icon]), Ue(e, t), Re(), Y(e, t, "icon");
  },
      Re = function Re() {
    var e = B();
    var t = window.getComputedStyle(e).getPropertyValue("background-color");
    var n = e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");

    for (var _e8 = 0; _e8 < n.length; _e8++) {
      n[_e8].style.backgroundColor = t;
    }
  },
      Fe = function Fe(e, t) {
    var n;
    e.textContent = "", t.iconHtml ? _(e, We(t.iconHtml)) : "success" === t.icon ? _(e, '\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    ') : "error" === t.icon ? _(e, '\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    ') : (n = {
      question: "?",
      warning: "!",
      info: "i"
    }, _(e, We(n[t.icon])));
  },
      Ue = function Ue(e, t) {
    if (t.iconColor) {
      e.style.color = t.iconColor, e.style.borderColor = t.iconColor;

      for (var _i2 = 0, _arr = [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"]; _i2 < _arr.length; _i2++) {
        var _n6 = _arr[_i2];
        oe(e, _n6, "backgroundColor", t.iconColor);
      }

      oe(e, ".swal2-success-ring", "borderColor", t.iconColor);
    }
  },
      We = function We(e) {
    return '<div class="'.concat(w["icon-content"], '">').concat(e, "</div>");
  },
      ze = function ze(e, t) {
    var n = S();
    if (!t.imageUrl) return ne(n);
    te(n, ""), n.setAttribute("src", t.imageUrl), n.setAttribute("alt", t.imageAlt), ee(n, "width", t.imageWidth), ee(n, "height", t.imageHeight), n.className = w.image, Y(n, t, "image");
  },
      _e = function _e(e, o) {
    var i = L();
    if (!o.progressSteps || 0 === o.progressSteps.length) return ne(i);
    te(i), i.textContent = "", o.currentProgressStep >= o.progressSteps.length && r("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), o.progressSteps.forEach(function (e, t) {
      var n,
          e = (n = e, e = document.createElement("li"), $(e, w["progress-step"]), _(e, n), e);
      i.appendChild(e), t === o.currentProgressStep && $(e, w["active-progress-step"]), t !== o.progressSteps.length - 1 && (t = function (e) {
        var t = document.createElement("li");
        return $(t, w["progress-step-line"]), e.progressStepsDistance && (t.style.width = e.progressStepsDistance), t;
      }(o), i.appendChild(t));
    });
  },
      Ke = function Ke(e, t) {
    var n = E();
    ie(n, t.title || t.titleText, "block"), t.title && Ce(t.title, n), t.titleText && (n.innerText = t.titleText), Y(n, t, "title");
  },
      Ye = function Ye(e, t) {
    var n = k();
    var o = B();
    t.toast ? (ee(n, "width", t.width), o.style.width = "100%", o.insertBefore(D(), x())) : ee(o, "width", t.width), ee(o, "padding", t.padding), t.color && (o.style.color = t.color), t.background && (o.style.background = t.background), ne(O()), function (e, t) {
      if (e.className = "".concat(w.popup, " ").concat(ae(e) ? t.showClass.popup : ""), t.toast) {
        $([document.documentElement, document.body], w["toast-shown"]);
        $(e, w.toast);
      } else $(e, w.modal);

      if (Y(e, t, "popup"), typeof t.customClass === "string") $(e, t.customClass);
      if (t.icon) $(e, w["icon-".concat(t.icon)]);
    }(o, t);
  },
      Ze = function Ze(e, t) {
    Ye(e, t), xe(e, t), _e(e, t), Ve(e, t), ze(e, t), Ke(e, t), qe(e, t), Ie(e, t), Pe(e, t), He(e, t), "function" == typeof t.didRender && t.didRender(B());
  },
      Je = Object.freeze({
    cancel: "cancel",
    backdrop: "backdrop",
    close: "close",
    esc: "esc",
    timer: "timer"
  }),
      Xe = function Xe() {
    var e = a(document.body.children);
    e.forEach(function (e) {
      e === k() || e.contains(k()) || (e.hasAttribute("aria-hidden") && e.setAttribute("data-previous-aria-hidden", e.getAttribute("aria-hidden")), e.setAttribute("aria-hidden", "true"));
    });
  },
      $e = function $e() {
    var e = a(document.body.children);
    e.forEach(function (e) {
      e.hasAttribute("data-previous-aria-hidden") ? (e.setAttribute("aria-hidden", e.getAttribute("data-previous-aria-hidden")), e.removeAttribute("data-previous-aria-hidden")) : e.removeAttribute("aria-hidden");
    });
  },
      Ge = ["swal-title", "swal-html", "swal-footer"],
      Qe = function Qe(e) {
    var n = {};
    return a(e.querySelectorAll("swal-param")).forEach(function (e) {
      rt(e, ["name", "value"]);
      var t = e.getAttribute("name"),
          e = e.getAttribute("value");
      "boolean" == typeof m[t] && "false" === e && (n[t] = !1), "object" == _typeof(m[t]) && (n[t] = JSON.parse(e));
    }), n;
  },
      et = function et(e) {
    var n = {};
    return a(e.querySelectorAll("swal-button")).forEach(function (e) {
      rt(e, ["type", "color", "aria-label"]);
      var t = e.getAttribute("type");
      n["".concat(t, "ButtonText")] = e.innerHTML, n["show".concat(i(t), "Button")] = !0, e.hasAttribute("color") && (n["".concat(t, "ButtonColor")] = e.getAttribute("color")), e.hasAttribute("aria-label") && (n["".concat(t, "ButtonAriaLabel")] = e.getAttribute("aria-label"));
    }), n;
  },
      tt = function tt(e) {
    var t = {},
        n = e.querySelector("swal-image");
    return n && (rt(n, ["src", "width", "height", "alt"]), n.hasAttribute("src") && (t.imageUrl = n.getAttribute("src")), n.hasAttribute("width") && (t.imageWidth = n.getAttribute("width")), n.hasAttribute("height") && (t.imageHeight = n.getAttribute("height")), n.hasAttribute("alt") && (t.imageAlt = n.getAttribute("alt"))), t;
  },
      nt = function nt(e) {
    var t = {},
        n = e.querySelector("swal-icon");
    return n && (rt(n, ["type", "color"]), n.hasAttribute("type") && (t.icon = n.getAttribute("type")), n.hasAttribute("color") && (t.iconColor = n.getAttribute("color")), t.iconHtml = n.innerHTML), t;
  },
      ot = function ot(e) {
    var n = {},
        t = e.querySelector("swal-input");
    t && (rt(t, ["type", "label", "placeholder", "value"]), n.input = t.getAttribute("type") || "text", t.hasAttribute("label") && (n.inputLabel = t.getAttribute("label")), t.hasAttribute("placeholder") && (n.inputPlaceholder = t.getAttribute("placeholder")), t.hasAttribute("value") && (n.inputValue = t.getAttribute("value")));
    e = e.querySelectorAll("swal-input-option");
    return e.length && (n.inputOptions = {}, a(e).forEach(function (e) {
      rt(e, ["value"]);
      var t = e.getAttribute("value"),
          e = e.innerHTML;
      n.inputOptions[t] = e;
    })), n;
  },
      it = function it(e, t) {
    var n = {};

    for (var _o4 in t) {
      var _i3 = t[_o4],
          _a = e.querySelector(_i3);

      _a && (rt(_a, []), n[_i3.replace(/^swal-/, "")] = _a.innerHTML.trim());
    }

    return n;
  },
      at = function at(e) {
    var t = Ge.concat(["swal-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
    a(e.children).forEach(function (e) {
      e = e.tagName.toLowerCase();
      -1 === t.indexOf(e) && r("Unrecognized element <".concat(e, ">"));
    });
  },
      rt = function rt(t, n) {
    a(t.attributes).forEach(function (e) {
      -1 === n.indexOf(e.name) && r(['Unrecognized attribute "'.concat(e.name, '" on <').concat(t.tagName.toLowerCase(), ">."), "".concat(n.length ? "Allowed attributes are: ".concat(n.join(", ")) : "To set the value, use HTML within the element.")]);
    });
  };

  var st = {
    email: function email(e, t) {
      return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid email address");
    },
    url: function url(e, t) {
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid URL");
    }
  };

  function ct(e) {
    var t, n;
    (t = e).inputValidator || Object.keys(st).forEach(function (e) {
      t.input === e && (t.inputValidator = st[e]);
    }), e.showLoaderOnConfirm && !e.preConfirm && r("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"), (n = e).target && ("string" != typeof n.target || document.querySelector(n.target)) && ("string" == typeof n.target || n.target.appendChild) || (r('Target parameter is not valid, defaulting to "body"'), n.target = "body"), "string" == typeof e.title && (e.title = e.title.split("\n").join("<br />")), function (e) {
      var t = he();
      if (le()) s("SweetAlert2 requires document to initialize");else {
        var _n7 = document.createElement("div");

        _n7.className = w.container, t && $(_n7, w["no-transition"]), _(_n7, ge);

        var _o5 = ye(e.target);

        _o5.appendChild(_n7), ve(e), we(_o5), be();
      }
    }(e);
  }

  var lt = /*#__PURE__*/function () {
    function lt(e, t) {
      _classCallCheck(this, lt);

      this.callback = e, this.remaining = t, this.running = !1, this.start();
    }

    _createClass(lt, [{
      key: "start",
      value: function start() {
        return this.running || (this.running = !0, this.started = new Date(), this.id = setTimeout(this.callback, this.remaining)), this.remaining;
      }
    }, {
      key: "stop",
      value: function stop() {
        return this.running && (this.running = !1, clearTimeout(this.id), this.remaining -= new Date().getTime() - this.started.getTime()), this.remaining;
      }
    }, {
      key: "increase",
      value: function increase(e) {
        var t = this.running;
        return t && this.stop(), this.remaining += e, t && this.start(), this.remaining;
      }
    }, {
      key: "getTimerLeft",
      value: function getTimerLeft() {
        return this.running && (this.stop(), this.start()), this.remaining;
      }
    }, {
      key: "isRunning",
      value: function isRunning() {
        return this.running;
      }
    }]);

    return lt;
  }();

  var ut = function ut() {
    null === z.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (z.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = "".concat(z.previousBodyPadding + function () {
      var e = document.createElement("div");
      e.className = w["scrollbar-measure"], document.body.appendChild(e);
      var t = e.getBoundingClientRect().width - e.clientWidth;
      return document.body.removeChild(e), t;
    }(), "px"));
  },
      dt = function dt() {
    null !== z.previousBodyPadding && (document.body.style.paddingRight = "".concat(z.previousBodyPadding, "px"), z.previousBodyPadding = null);
  },
      pt = function pt() {
    var e;
    (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints) && !K(document.body, w.iosfix) && (e = document.body.scrollTop, document.body.style.top = "".concat(-1 * e, "px"), $(document.body, w.iosfix), function () {
      var e = k();
      var t;
      e.ontouchstart = function (e) {
        t = mt(e);
      }, e.ontouchmove = function (e) {
        if (t) {
          e.preventDefault();
          e.stopPropagation();
        }
      };
    }(), function () {
      var e = navigator.userAgent,
          t = !!e.match(/iPad/i) || !!e.match(/iPhone/i),
          n = !!e.match(/WebKit/i),
          o = t && n && !e.match(/CriOS/i);

      if (o) {
        var _i4 = 44;
        if (B().scrollHeight > window.innerHeight - _i4) k().style.paddingBottom = "".concat(_i4, "px");
      }
    }());
  },
      mt = function mt(e) {
    var t,
        n = e.target,
        o = k();
    return !((t = e).touches && t.touches.length && "stylus" === t.touches[0].touchType || (e = e).touches && 1 < e.touches.length) && (n === o || !(se(o) || "INPUT" === n.tagName || "TEXTAREA" === n.tagName || se(T()) && T().contains(n)));
  },
      gt = function gt() {
    var e;
    K(document.body, w.iosfix) && (e = parseInt(document.body.style.top, 10), G(document.body, w.iosfix), document.body.style.top = "", document.body.scrollTop = -1 * e);
  },
      ht = 10,
      ft = function ft(e) {
    var t = B();

    if (e.target === t) {
      var _n8 = k();

      t.removeEventListener(Ae, ft), _n8.style.overflowY = "auto";
    }
  },
      bt = function bt(e, t) {
    Ae && ce(t) ? (e.style.overflowY = "hidden", t.addEventListener(Ae, ft)) : e.style.overflowY = "auto";
  },
      yt = function yt(e, t, n) {
    pt(), t && "hidden" !== n && ut(), setTimeout(function () {
      e.scrollTop = 0;
    });
  },
      vt = function vt(e, t, n) {
    $(e, n.showClass.backdrop), t.style.setProperty("opacity", "0", "important"), te(t, "grid"), setTimeout(function () {
      $(t, n.showClass.popup), t.style.removeProperty("opacity");
    }, ht), $([document.documentElement, document.body], w.shown), n.heightAuto && n.backdrop && !n.toast && $([document.documentElement, document.body], w["height-auto"]);
  },
      wt = function wt(e) {
    var t = B();
    t || new fn(), t = B();
    var n = D();
    U() ? ne(x()) : function (e, t) {
      var n = H(),
          o = D();
      if (!t && ae(j())) t = j();

      if (te(n), t) {
        ne(t);
        o.setAttribute("data-button-to-replace", t.className);
      }

      o.parentNode.insertBefore(o, t), $([e, n], w.loading);
    }(t, e), te(n), t.setAttribute("data-loading", !0), t.setAttribute("aria-busy", !0), t.focus();
  },
      Ct = function Ct(t, n) {
    var o = B(),
        i = function i(e) {
      return At[n.input](o, Pt(e), n);
    };

    u(n.inputOptions) || p(n.inputOptions) ? (wt(j()), d(n.inputOptions).then(function (e) {
      t.hideLoading(), i(e);
    })) : "object" == _typeof(n.inputOptions) ? i(n.inputOptions) : s("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(n.inputOptions)));
  },
      kt = function kt(t, n) {
    var o = t.getInput();
    ne(o), d(n.inputValue).then(function (e) {
      o.value = "number" === n.input ? parseFloat(e) || 0 : "".concat(e), te(o), o.focus(), t.hideLoading();
    })["catch"](function (e) {
      s("Error in inputValue promise: ".concat(e)), o.value = "", te(o), o.focus(), t.hideLoading();
    });
  },
      At = {
    select: function select(e, t, i) {
      var a = Q(e, w.select),
          r = function r(e, t, n) {
        var o = document.createElement("option");
        o.value = n, _(o, t), o.selected = Bt(n, i.inputValue), e.appendChild(o);
      };

      t.forEach(function (e) {
        var t = e[0];
        var n = e[1];

        if (Array.isArray(n)) {
          var _o6 = document.createElement("optgroup");

          _o6.label = t, _o6.disabled = !1, a.appendChild(_o6), n.forEach(function (e) {
            return r(_o6, e[1], e[0]);
          });
        } else r(a, n, t);
      }), a.focus();
    },
    radio: function radio(e, t, a) {
      var r = Q(e, w.radio);
      t.forEach(function (e) {
        var t = e[0],
            e = e[1];
        var n = document.createElement("input"),
            o = document.createElement("label");
        n.type = "radio", n.name = w.radio, n.value = t, Bt(t, a.inputValue) && (n.checked = !0);
        var i = document.createElement("span");
        _(i, e), i.className = w.label, o.appendChild(n), o.appendChild(i), r.appendChild(o);
      });
      var n = r.querySelectorAll("input");
      n.length && n[0].focus();
    }
  },
      Pt = function Pt(n) {
    var o = [];
    return "undefined" != typeof Map && n instanceof Map ? n.forEach(function (e, t) {
      var n = e;
      "object" == _typeof(n) && (n = Pt(n)), o.push([t, n]);
    }) : Object.keys(n).forEach(function (e) {
      var t = n[e];
      "object" == _typeof(t) && (t = Pt(t)), o.push([e, t]);
    }), o;
  },
      Bt = function Bt(e, t) {
    return t && t.toString() === e.toString();
  },
      xt = function xt(e, t) {
    var n = Ee.innerParams.get(e);
    if (!n.input) return s('The "input" parameter is needed to be set when using returnInputValueOn'.concat(i(t)));

    var o = function (e, t) {
      var n = e.getInput();
      if (!n) return null;

      switch (t.input) {
        case "checkbox":
          return n.checked ? 1 : 0;

        case "radio":
          return (o = n).checked ? o.value : null;

        case "file":
          return (o = n).files.length ? null !== o.getAttribute("multiple") ? o.files : o.files[0] : null;

        default:
          return t.inputAutoTrim ? n.value.trim() : n.value;
      }

      var o;
    }(e, n);

    n.inputValidator ? function (t, n, o) {
      var e = Ee.innerParams.get(t);
      t.disableInput();
      var i = Promise.resolve().then(function () {
        return d(e.inputValidator(n, e.validationMessage));
      });
      i.then(function (e) {
        t.enableButtons();
        t.enableInput();
        if (e) t.showValidationMessage(e);else if (o === "deny") Et(t, n);else Lt(t, n);
      });
    }(e, o, t) : e.getInput().checkValidity() ? ("deny" === t ? Et : Lt)(e, o) : (e.enableButtons(), e.showValidationMessage(n.validationMessage));
  },
      Et = function Et(t, n) {
    var e = Ee.innerParams.get(t || void 0);

    if (e.showLoaderOnDeny && wt(M()), e.preDeny) {
      Ee.awaitingPromise.set(t || void 0, !0);

      var _o7 = Promise.resolve().then(function () {
        return d(e.preDeny(n, e.validationMessage));
      });

      _o7.then(function (e) {
        !1 === e ? t.hideLoading() : t.closePopup({
          isDenied: !0,
          value: void 0 === e ? n : e
        });
      })["catch"](function (e) {
        return St(t || void 0, e);
      });
    } else t.closePopup({
      isDenied: !0,
      value: n
    });
  },
      Tt = function Tt(e, t) {
    e.closePopup({
      isConfirmed: !0,
      value: t
    });
  },
      St = function St(e, t) {
    e.rejectPromise(t);
  },
      Lt = function Lt(t, n) {
    var e = Ee.innerParams.get(t || void 0);

    if (e.showLoaderOnConfirm && wt(), e.preConfirm) {
      t.resetValidationMessage(), Ee.awaitingPromise.set(t || void 0, !0);

      var _o8 = Promise.resolve().then(function () {
        return d(e.preConfirm(n, e.validationMessage));
      });

      _o8.then(function (e) {
        ae(O()) || !1 === e ? t.hideLoading() : Tt(t, void 0 === e ? n : e);
      })["catch"](function (e) {
        return St(t || void 0, e);
      });
    } else Tt(t, n);
  },
      Ot = function Ot(n, e, o) {
    e.popup.onclick = function () {
      var e,
          t = Ee.innerParams.get(n);
      t && ((e = t).showConfirmButton || e.showDenyButton || e.showCancelButton || e.showCloseButton || t.timer || t.input) || o(Je.close);
    };
  };

  var jt = !1;

  var Mt = function Mt(t) {
    t.popup.onmousedown = function () {
      t.container.onmouseup = function (e) {
        t.container.onmouseup = void 0, e.target === t.container && (jt = !0);
      };
    };
  },
      Dt = function Dt(t) {
    t.container.onmousedown = function () {
      t.popup.onmouseup = function (e) {
        t.popup.onmouseup = void 0, e.target !== t.popup && !t.popup.contains(e.target) || (jt = !0);
      };
    };
  },
      It = function It(n, o, i) {
    o.container.onclick = function (e) {
      var t = Ee.innerParams.get(n);
      jt ? jt = !1 : e.target === o.container && l(t.allowOutsideClick) && i(Je.backdrop);
    };
  };

  var Ht = function Ht() {
    return j() && j().click();
  };

  var qt = function qt(e, t, n) {
    var o = R();
    if (o.length) return (t += n) === o.length ? t = 0 : -1 === t && (t = o.length - 1), o[t].focus();
    B().focus();
  },
      Vt = ["ArrowRight", "ArrowDown"],
      Nt = ["ArrowLeft", "ArrowUp"],
      Rt = function Rt(e, t, n) {
    var o,
        i,
        a = Ee.innerParams.get(e);
    a && (a.stopKeydownPropagation && t.stopPropagation(), "Enter" === t.key ? (o = e, i = a, (e = t).isComposing || e.target && o.getInput() && e.target.outerHTML === o.getInput().outerHTML && (["textarea", "file"].includes(i.input) || (Ht(), e.preventDefault()))) : "Tab" === t.key ? function (e, t) {
      var n = e.target,
          o = R();
      var i = -1;

      for (var _e9 = 0; _e9 < o.length; _e9++) {
        if (n === o[_e9]) {
          i = _e9;
          break;
        }
      }

      if (!e.shiftKey) qt(t, i, 1);else qt(t, i, -1);
      e.stopPropagation(), e.preventDefault();
    }(t, a) : [].concat(Vt, Nt).includes(t.key) ? function (e) {
      var t = j(),
          n = M(),
          o = I();

      if ([t, n, o].includes(document.activeElement)) {
        var i = Vt.includes(e) ? "nextElementSibling" : "previousElementSibling";
        var _a2 = document.activeElement[i];
        _a2 instanceof HTMLElement && _a2.focus();
      }
    }(t.key) : "Escape" === t.key && function (e, t, n) {
      if (l(t.allowEscapeKey)) {
        e.preventDefault();
        n(Je.esc);
      }
    }(t, a, n));
  },
      Ft = function Ft(e) {
    return "object" == _typeof(e) && e.jquery;
  },
      Ut = function Ut(e) {
    return e instanceof Element || Ft(e);
  };

  var Wt = function Wt() {
    if (de.timeout) return function () {
      var e = V();
      var t = parseInt(window.getComputedStyle(e).width);
      e.style.removeProperty("transition"), e.style.width = "100%";
      t = t / parseInt(window.getComputedStyle(e).width) * 100;
      e.style.removeProperty("transition"), e.style.width = "".concat(t, "%");
    }(), de.timeout.stop();
  },
      zt = function zt() {
    if (de.timeout) {
      var e = de.timeout.start();
      return W(e), e;
    }
  };

  var _t = !1;

  var Kt = {};

  var Yt = function Yt(t) {
    for (var _e10 = t.target; _e10 && _e10 !== document; _e10 = _e10.parentNode) {
      for (var _o9 in Kt) {
        var n = _e10.getAttribute(_o9);

        if (n) return void Kt[_o9].fire({
          template: n
        });
      }
    }
  };

  var Zt = Object.freeze({
    isValidParameter: f,
    isUpdatableParameter: b,
    isDeprecatedParameter: y,
    argsToParams: function argsToParams(n) {
      var o = {};
      return "object" != _typeof(n[0]) || Ut(n[0]) ? ["title", "html", "icon"].forEach(function (e, t) {
        t = n[t];
        "string" == typeof t || Ut(t) ? o[e] = t : void 0 !== t && s("Unexpected type of ".concat(e, '! Expected "string" or "Element", got ').concat(_typeof(t)));
      }) : Object.assign(o, n[0]), o;
    },
    isVisible: function isVisible() {
      return ae(B());
    },
    clickConfirm: Ht,
    clickDeny: function clickDeny() {
      return M() && M().click();
    },
    clickCancel: function clickCancel() {
      return I() && I().click();
    },
    getContainer: k,
    getPopup: B,
    getTitle: E,
    getHtmlContainer: T,
    getImage: S,
    getIcon: x,
    getInputLabel: function getInputLabel() {
      return P(w["input-label"]);
    },
    getCloseButton: N,
    getActions: H,
    getConfirmButton: j,
    getDenyButton: M,
    getCancelButton: I,
    getLoader: D,
    getFooter: q,
    getTimerProgressBar: V,
    getFocusableElements: R,
    getValidationMessage: O,
    isLoading: function isLoading() {
      return B().hasAttribute("data-loading");
    },
    fire: function fire() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
        t[n] = arguments[n];
      }

      return _construct(this, t);
    },
    mixin: function mixin(n) {
      var e = /*#__PURE__*/function (_this) {
        _inherits(e, _this);

        var _super = _createSuper(e);

        function e() {
          _classCallCheck(this, e);

          return _super.apply(this, arguments);
        }

        _createClass(e, [{
          key: "_main",
          value: function _main(_e11, t) {
            return _get(_getPrototypeOf(e.prototype), "_main", this).call(this, _e11, Object.assign({}, n, t));
          }
        }]);

        return e;
      }(this);

      return e;
    },
    showLoading: wt,
    enableLoading: wt,
    getTimerLeft: function getTimerLeft() {
      return de.timeout && de.timeout.getTimerLeft();
    },
    stopTimer: Wt,
    resumeTimer: zt,
    toggleTimer: function toggleTimer() {
      var e = de.timeout;
      return e && (e.running ? Wt : zt)();
    },
    increaseTimer: function increaseTimer(e) {
      if (de.timeout) {
        e = de.timeout.increase(e);
        return W(e, !0), e;
      }
    },
    isTimerRunning: function isTimerRunning() {
      return de.timeout && de.timeout.isRunning();
    },
    bindClickHandler: function bindClickHandler() {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "data-swal-template";
      Kt[e] = this, _t || (document.body.addEventListener("click", Yt), _t = !0);
    }
  });

  function Jt() {
    var e = Ee.innerParams.get(this);

    if (e) {
      var _t3 = Ee.domCache.get(this);

      ne(_t3.loader), U() ? e.icon && te(x()) : function (e) {
        var t = e.popup.getElementsByClassName(e.loader.getAttribute("data-button-to-replace"));
        if (t.length) te(t[0], "inline-block");else if (re()) ne(e.actions);
      }(_t3), G([_t3.popup, _t3.actions], w.loading), _t3.popup.removeAttribute("aria-busy"), _t3.popup.removeAttribute("data-loading"), _t3.confirmButton.disabled = !1, _t3.denyButton.disabled = !1, _t3.cancelButton.disabled = !1;
    }
  }

  var Xt = {
    swalPromiseResolve: new WeakMap(),
    swalPromiseReject: new WeakMap()
  };

  function $t(e, t, n, o) {
    U() ? tn(e, o) : (me(n).then(function () {
      return tn(e, o);
    }), de.keydownTarget.removeEventListener("keydown", de.keydownHandler, {
      capture: de.keydownListenerCapture
    }), de.keydownHandlerAdded = !1), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? (t.setAttribute("style", "display:none !important"), t.removeAttribute("class"), t.innerHTML = "") : t.remove(), F() && (dt(), gt(), $e()), G([document.documentElement, document.body], [w.shown, w["height-auto"], w["no-backdrop"], w["toast-shown"]]);
  }

  function Gt(e) {
    e = void 0 !== (n = e) ? Object.assign({
      isConfirmed: !1,
      isDenied: !1,
      isDismissed: !1
    }, n) : {
      isConfirmed: !1,
      isDenied: !1,
      isDismissed: !0
    };
    var t = Xt.swalPromiseResolve.get(this);

    var n = function (e) {
      var t = B();
      if (!t) return false;
      var n = Ee.innerParams.get(e);
      if (!n || K(t, n.hideClass.popup)) return false;
      G(t, n.showClass.popup), $(t, n.hideClass.popup);
      var o = k();
      return G(o, n.showClass.backdrop), $(o, n.hideClass.backdrop), en(e, t, n), true;
    }(this);

    this.isAwaitingPromise() ? e.isDismissed || (Qt(this), t(e)) : n && t(e);
  }

  var Qt = function Qt(e) {
    e.isAwaitingPromise() && (Ee.awaitingPromise["delete"](e), Ee.innerParams.get(e) || e._destroy());
  },
      en = function en(e, t, n) {
    var o,
        i,
        a,
        r = k(),
        s = Ae && ce(t);
    "function" == typeof n.willClose && n.willClose(t), s ? (o = e, i = t, a = r, s = n.returnFocus, t = n.didClose, de.swalCloseEventFinishedCallback = $t.bind(null, o, a, s, t), i.addEventListener(Ae, function (e) {
      e.target === i && (de.swalCloseEventFinishedCallback(), delete de.swalCloseEventFinishedCallback);
    })) : $t(e, r, n.returnFocus, n.didClose);
  },
      tn = function tn(e, t) {
    setTimeout(function () {
      "function" == typeof t && t.bind(e.params)(), e._destroy();
    });
  };

  function nn(e, t, n) {
    var o = Ee.domCache.get(e);
    t.forEach(function (e) {
      o[e].disabled = n;
    });
  }

  function on(e, t) {
    if (!e) return !1;

    if ("radio" === e.type) {
      var _n9 = e.parentNode.parentNode,
          _o10 = _n9.querySelectorAll("input");

      for (var _e12 = 0; _e12 < _o10.length; _e12++) {
        _o10[_e12].disabled = t;
      }
    } else e.disabled = t;
  }

  var an = function an(e) {
    e.isAwaitingPromise() ? (rn(Ee, e), Ee.awaitingPromise.set(e, !0)) : (rn(Xt, e), rn(Ee, e));
  },
      rn = function rn(e, t) {
    for (var _n10 in e) {
      e[_n10]["delete"](t);
    }
  };

  e = Object.freeze({
    hideLoading: Jt,
    disableLoading: Jt,
    getInput: function getInput(e) {
      var t = Ee.innerParams.get(e || this);
      return (e = Ee.domCache.get(e || this)) ? Z(e.popup, t.input) : null;
    },
    close: Gt,
    isAwaitingPromise: function isAwaitingPromise() {
      return !!Ee.awaitingPromise.get(this);
    },
    rejectPromise: function rejectPromise(e) {
      var t = Xt.swalPromiseReject.get(this);
      Qt(this), t && t(e);
    },
    closePopup: Gt,
    closeModal: Gt,
    closeToast: Gt,
    enableButtons: function enableButtons() {
      nn(this, ["confirmButton", "denyButton", "cancelButton"], !1);
    },
    disableButtons: function disableButtons() {
      nn(this, ["confirmButton", "denyButton", "cancelButton"], !0);
    },
    enableInput: function enableInput() {
      return on(this.getInput(), !1);
    },
    disableInput: function disableInput() {
      return on(this.getInput(), !0);
    },
    showValidationMessage: function showValidationMessage(e) {
      var t = Ee.domCache.get(this);
      var n = Ee.innerParams.get(this);
      _(t.validationMessage, e), t.validationMessage.className = w["validation-message"], n.customClass && n.customClass.validationMessage && $(t.validationMessage, n.customClass.validationMessage), te(t.validationMessage);
      var o = this.getInput();
      o && (o.setAttribute("aria-invalid", !0), o.setAttribute("aria-describedby", w["validation-message"]), J(o), $(o, w.inputerror));
    },
    resetValidationMessage: function resetValidationMessage() {
      var e = Ee.domCache.get(this);
      e.validationMessage && ne(e.validationMessage);
      var t = this.getInput();
      t && (t.removeAttribute("aria-invalid"), t.removeAttribute("aria-describedby"), G(t, w.inputerror));
    },
    getProgressSteps: function getProgressSteps() {
      return Ee.domCache.get(this).progressSteps;
    },
    update: function update(t) {
      var e = B(),
          n = Ee.innerParams.get(this);
      if (!e || K(e, n.hideClass.popup)) return r("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
      var o = {};
      Object.keys(t).forEach(function (e) {
        b(e) ? o[e] = t[e] : r('Invalid parameter to update: "'.concat(e, '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md'));
      }), n = Object.assign({}, n, o), Ze(this, n), Ee.innerParams.set(this, n), Object.defineProperties(this, {
        params: {
          value: Object.assign({}, this.params, t),
          writable: !1,
          enumerable: !0
        }
      });
    },
    _destroy: function _destroy() {
      var e = Ee.domCache.get(this);
      var t = Ee.innerParams.get(this);
      t ? (e.popup && de.swalCloseEventFinishedCallback && (de.swalCloseEventFinishedCallback(), delete de.swalCloseEventFinishedCallback), de.deferDisposalTimer && (clearTimeout(de.deferDisposalTimer), delete de.deferDisposalTimer), "function" == typeof t.didDestroy && t.didDestroy(), e = this, an(e), delete e.params, delete de.keydownHandler, delete de.keydownTarget, delete de.currentInstance) : an(this);
    }
  });
  var sn;

  var cn = /*#__PURE__*/function () {
    function cn() {
      _classCallCheck(this, cn);

      if ("undefined" != typeof window) {
        sn = this;

        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
          t[n] = arguments[n];
        }

        var o = Object.freeze(this.constructor.argsToParams(t));
        Object.defineProperties(this, {
          params: {
            value: o,
            writable: !1,
            enumerable: !0,
            configurable: !0
          }
        });
        o = this._main(this.params);
        Ee.promise.set(this, o);
      }
    }

    _createClass(cn, [{
      key: "_main",
      value: function _main(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
        v(Object.assign({}, t, e)), de.currentInstance && (de.currentInstance._destroy(), F() && $e()), de.currentInstance = this;
        e = un(e, t);
        ct(e), Object.freeze(e), de.timeout && (de.timeout.stop(), delete de.timeout), clearTimeout(de.restoreFocusTimeout);
        t = dn(this);
        return Ze(this, e), Ee.innerParams.set(this, e), ln(this, t, e);
      }
    }, {
      key: "then",
      value: function then(e) {
        var t = Ee.promise.get(this);
        return t.then(e);
      }
    }, {
      key: "finally",
      value: function _finally(e) {
        var t = Ee.promise.get(this);
        return t["finally"](e);
      }
    }]);

    return cn;
  }();

  var ln = function ln(r, s, c) {
    return new Promise(function (e, t) {
      var n = function n(e) {
        r.closePopup({
          isDismissed: !0,
          dismiss: e
        });
      };

      var o, i, a;
      Xt.swalPromiseResolve.set(r, e), Xt.swalPromiseReject.set(r, t), s.confirmButton.onclick = function () {
        return function (e) {
          var t = Ee.innerParams.get(e);
          e.disableButtons(), t.input ? xt(e, "confirm") : Lt(e, !0);
        }(r);
      }, s.denyButton.onclick = function () {
        return function (e) {
          var t = Ee.innerParams.get(e);
          e.disableButtons(), t.returnInputValueOnDeny ? xt(e, "deny") : Et(e, !1);
        }(r);
      }, s.cancelButton.onclick = function () {
        return function (e, t) {
          e.disableButtons(), t(Je.cancel);
        }(r, n);
      }, s.closeButton.onclick = function () {
        return n(Je.close);
      }, o = r, e = s, t = n, Ee.innerParams.get(o).toast ? Ot(o, e, t) : (Mt(e), Dt(e), It(o, e, t)), i = r, e = de, t = c, a = n, e.keydownTarget && e.keydownHandlerAdded && (e.keydownTarget.removeEventListener("keydown", e.keydownHandler, {
        capture: e.keydownListenerCapture
      }), e.keydownHandlerAdded = !1), t.toast || (e.keydownHandler = function (e) {
        return Rt(i, e, a);
      }, e.keydownTarget = t.keydownListenerCapture ? window : B(), e.keydownListenerCapture = t.keydownListenerCapture, e.keydownTarget.addEventListener("keydown", e.keydownHandler, {
        capture: e.keydownListenerCapture
      }), e.keydownHandlerAdded = !0), t = r, "select" === (e = c).input || "radio" === e.input ? Ct(t, e) : ["text", "email", "number", "tel", "textarea"].includes(e.input) && (u(e.inputValue) || p(e.inputValue)) && (wt(j()), kt(t, e)), function (e) {
        var t = k(),
            n = B();
        "function" == typeof e.willOpen && e.willOpen(n);
        var o = window.getComputedStyle(document.body).overflowY;
        vt(t, n, e), setTimeout(function () {
          bt(t, n);
        }, ht), F() && (yt(t, e.scrollbarPadding, o), Xe()), U() || de.previousActiveElement || (de.previousActiveElement = document.activeElement), "function" == typeof e.didOpen && setTimeout(function () {
          return e.didOpen(n);
        }), G(t, w["no-transition"]);
      }(c), pn(de, c, n), mn(s, c), setTimeout(function () {
        s.container.scrollTop = 0;
      });
    });
  },
      un = function un(e, t) {
    var n = function (e) {
      e = "string" == typeof e.template ? document.querySelector(e.template) : e.template;
      if (!e) return {};
      e = e.content;
      return at(e), Object.assign(Qe(e), et(e), tt(e), nt(e), ot(e), it(e, Ge));
    }(e);

    var o = Object.assign({}, m, t, n, e);
    return o.showClass = Object.assign({}, m.showClass, o.showClass), o.hideClass = Object.assign({}, m.hideClass, o.hideClass), o;
  },
      dn = function dn(e) {
    var t = {
      popup: B(),
      container: k(),
      actions: H(),
      confirmButton: j(),
      denyButton: M(),
      cancelButton: I(),
      loader: D(),
      closeButton: N(),
      validationMessage: O(),
      progressSteps: L()
    };
    return Ee.domCache.set(e, t), t;
  },
      pn = function pn(e, t, n) {
    var o = V();
    ne(o), t.timer && (e.timeout = new lt(function () {
      n("timer"), delete e.timeout;
    }, t.timer), t.timerProgressBar && (te(o), setTimeout(function () {
      e.timeout && e.timeout.running && W(t.timer);
    })));
  },
      mn = function mn(e, t) {
    if (!t.toast) return l(t.allowEnterKey) ? void (gn(e, t) || qt(t, -1, 1)) : hn();
  },
      gn = function gn(e, t) {
    return t.focusDeny && ae(e.denyButton) ? (e.denyButton.focus(), !0) : t.focusCancel && ae(e.cancelButton) ? (e.cancelButton.focus(), !0) : !(!t.focusConfirm || !ae(e.confirmButton)) && (e.confirmButton.focus(), !0);
  },
      hn = function hn() {
    document.activeElement instanceof HTMLElement && "function" == typeof document.activeElement.blur && document.activeElement.blur();
  };

  Object.assign(cn.prototype, e), Object.assign(cn, Zt), Object.keys(e).forEach(function (e) {
    cn[e] = function () {
      var _sn;

      if (sn) return (_sn = sn)[e].apply(_sn, arguments);
    };
  }), cn.DismissReason = Je, cn.version = "11.3.6";
  var fn = cn;
  return fn["default"] = fn, fn;
}), void 0 !== this && this.Sweetalert2 && (this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2);
"undefined" != typeof document && function (e, t) {
  var n = e.createElement("style");
  if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t);else try {
    n.innerHTML = t;
  } catch (e) {
    n.innerText = t;
  }
}(document, ".swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto);grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0,100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;height:.25em;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 3px}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .5s;animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .8s;animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-question-mark .8s;animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@-webkit-keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@-webkit-keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}");
