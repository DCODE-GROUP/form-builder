import Ll, { createElementBlock as le, openBlock as ae, createCommentVNode as ke, Fragment as At, renderList as Cn, withDirectives as rt, createElementVNode as F, normalizeClass as et, vModelDynamic as Ea, toDisplayString as Ge, vModelText as Et, defineComponent as Ul, ref as gt, onMounted as la, onUnmounted as Nl, createVNode as ue, inject as wa, watchEffect as Jt, watch as jl, computed as an, toRef as kl, shallowRef as Bl, provide as Ta, isVNode as $l, Teleport as Vl, Transition as Aa, h as si, resolveComponent as Pt, createBlock as On, renderSlot as gn, createTextVNode as Xt, withCtx as wt, resolveDynamicComponent as Cr, toRaw as li, markRaw as ot, normalizeStyle as Hl, mergeProps as zl, withModifiers as tr, resolveDirective as Gl, vShow as Wl, vModelSelect as Jr } from "vue";
const un = {
  props: {
    /**
     * Form data can be editable after its complete
     */
    editable: {
      type: Boolean,
      default: !1
    },
    preview: {
      type: Boolean,
      default: !1
    }
  }
}, pt = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [a, i] of e)
    r[a] = i;
  return r;
}, Yl = {
  name: "CheckGroup",
  mixins: [un],
  props: {
    name: {},
    type: {},
    field: {},
    modelValue: { default: () => [] },
    options: { default: () => [] }
  },
  data() {
    return {
      input: []
    };
  },
  created() {
    this.input = this.modelValue;
  },
  watch: {
    modelValue() {
      this.input = this.modelValue;
    },
    input() {
      this.$emit("update:modelValue", this.input);
    }
  },
  methods: {},
  computed: {
    inputName() {
      return this.type === "check-group" ? `${this.name}[]` : this.name;
    },
    inputType() {
      if (this.type === "check-group")
        return "checkbox";
      if (this.type === "radio-group")
        return "radio";
    }
  }
}, Kl = { class: "-options" }, Xl = { class: "cursor-pointer" }, Jl = ["type", "name", "value", "disabled"], Ql = {
  key: 0,
  class: "inline-block text-sm text-gray-600 mt-1.5 brand-200"
};
function Zl(t, e, r, a, i, c) {
  var n;
  return ae(), le("div", Kl, [
    (ae(!0), le(At, null, Cn(r.options, (u) => (ae(), le("label", Xl, [
      rt(F("input", {
        type: c.inputType,
        name: c.inputName,
        value: u,
        "onUpdate:modelValue": e[0] || (e[0] = (o) => i.input = o),
        disabled: !t.editable,
        class: et({ "[&]:checked:bg-brand-600 [&]:hover:bg-brand-600 [&]:checked:hover:bg-brand-600 [&]:focus:bg-brand-600 [&]:focus:ring-brand-600 [&]:focus:checked:bg-brand-600 !rounded-full": r.type === "radio-group" })
      }, null, 10, Jl), [
        [Ea, i.input]
      ]),
      F("span", null, Ge(u), 1)
    ]))), 256)),
    (n = r.field) != null && n.hint ? (ae(), le("p", Ql, Ge(r.field.hint), 1)) : ke("", !0)
  ]);
}
const vo = /* @__PURE__ */ pt(Yl, [["render", Zl]]);
function Xi(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: ql } = Object.prototype, { getPrototypeOf: Ca } = Object, { iterator: Po, toStringTag: Ji } = Symbol, Io = /* @__PURE__ */ ((t) => (e) => {
  const r = ql.call(e);
  return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), nn = (t) => (t = t.toLowerCase(), (e) => Io(e) === t), Ro = (t) => (e) => typeof e === t, { isArray: rr } = Array, Or = Ro("undefined");
function _l(t) {
  return t !== null && !Or(t) && t.constructor !== null && !Or(t.constructor) && jt(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Qi = nn("ArrayBuffer");
function eu(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Qi(t.buffer), e;
}
const tu = Ro("string"), jt = Ro("function"), Zi = Ro("number"), Do = (t) => t !== null && typeof t == "object", nu = (t) => t === !0 || t === !1, ao = (t) => {
  if (Io(t) !== "object")
    return !1;
  const e = Ca(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Ji in t) && !(Po in t);
}, ru = nn("Date"), ou = nn("File"), au = nn("Blob"), iu = nn("FileList"), su = (t) => Do(t) && jt(t.pipe), lu = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || jt(t.append) && ((e = Io(t)) === "formdata" || // detect form-data instance
  e === "object" && jt(t.toString) && t.toString() === "[object FormData]"));
}, uu = nn("URLSearchParams"), [cu, du, fu, hu] = ["ReadableStream", "Request", "Response", "Headers"].map(nn), pu = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ir(t, e, { allOwnKeys: r = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let a, i;
  if (typeof t != "object" && (t = [t]), rr(t))
    for (a = 0, i = t.length; a < i; a++)
      e.call(null, t[a], a, t);
  else {
    const c = r ? Object.getOwnPropertyNames(t) : Object.keys(t), n = c.length;
    let u;
    for (a = 0; a < n; a++)
      u = c[a], e.call(null, t[u], u, t);
  }
}
function qi(t, e) {
  e = e.toLowerCase();
  const r = Object.keys(t);
  let a = r.length, i;
  for (; a-- > 0; )
    if (i = r[a], e === i.toLowerCase())
      return i;
  return null;
}
const kn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, _i = (t) => !Or(t) && t !== kn;
function ua() {
  const { caseless: t } = _i(this) && this || {}, e = {}, r = (a, i) => {
    const c = t && qi(e, i) || i;
    ao(e[c]) && ao(a) ? e[c] = ua(e[c], a) : ao(a) ? e[c] = ua({}, a) : rr(a) ? e[c] = a.slice() : e[c] = a;
  };
  for (let a = 0, i = arguments.length; a < i; a++)
    arguments[a] && Ir(arguments[a], r);
  return e;
}
const vu = (t, e, r, { allOwnKeys: a } = {}) => (Ir(e, (i, c) => {
  r && jt(i) ? t[c] = Xi(i, r) : t[c] = i;
}, { allOwnKeys: a }), t), mu = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), gu = (t, e, r, a) => {
  t.prototype = Object.create(e.prototype, a), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), r && Object.assign(t.prototype, r);
}, yu = (t, e, r, a) => {
  let i, c, n;
  const u = {};
  if (e = e || {}, t == null) return e;
  do {
    for (i = Object.getOwnPropertyNames(t), c = i.length; c-- > 0; )
      n = i[c], (!a || a(n, t, e)) && !u[n] && (e[n] = t[n], u[n] = !0);
    t = r !== !1 && Ca(t);
  } while (t && (!r || r(t, e)) && t !== Object.prototype);
  return e;
}, bu = (t, e, r) => {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
  const a = t.indexOf(e, r);
  return a !== -1 && a === r;
}, xu = (t) => {
  if (!t) return null;
  if (rr(t)) return t;
  let e = t.length;
  if (!Zi(e)) return null;
  const r = new Array(e);
  for (; e-- > 0; )
    r[e] = t[e];
  return r;
}, Su = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && Ca(Uint8Array)), Eu = (t, e) => {
  const a = (t && t[Po]).call(t);
  let i;
  for (; (i = a.next()) && !i.done; ) {
    const c = i.value;
    e.call(t, c[0], c[1]);
  }
}, wu = (t, e) => {
  let r;
  const a = [];
  for (; (r = t.exec(e)) !== null; )
    a.push(r);
  return a;
}, Tu = nn("HTMLFormElement"), Au = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, a, i) {
    return a.toUpperCase() + i;
  }
), ui = (({ hasOwnProperty: t }) => (e, r) => t.call(e, r))(Object.prototype), Cu = nn("RegExp"), es = (t, e) => {
  const r = Object.getOwnPropertyDescriptors(t), a = {};
  Ir(r, (i, c) => {
    let n;
    (n = e(i, c, t)) !== !1 && (a[c] = n || i);
  }), Object.defineProperties(t, a);
}, Ou = (t) => {
  es(t, (e, r) => {
    if (jt(t) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const a = t[r];
    if (jt(a)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Pu = (t, e) => {
  const r = {}, a = (i) => {
    i.forEach((c) => {
      r[c] = !0;
    });
  };
  return rr(t) ? a(t) : a(String(t).split(e)), r;
}, Iu = () => {
}, Ru = (t, e) => t != null && Number.isFinite(t = +t) ? t : e;
function Du(t) {
  return !!(t && jt(t.append) && t[Ji] === "FormData" && t[Po]);
}
const Fu = (t) => {
  const e = new Array(10), r = (a, i) => {
    if (Do(a)) {
      if (e.indexOf(a) >= 0)
        return;
      if (!("toJSON" in a)) {
        e[i] = a;
        const c = rr(a) ? [] : {};
        return Ir(a, (n, u) => {
          const o = r(n, i + 1);
          !Or(o) && (c[u] = o);
        }), e[i] = void 0, c;
      }
    }
    return a;
  };
  return r(t, 0);
}, Mu = nn("AsyncFunction"), Lu = (t) => t && (Do(t) || jt(t)) && jt(t.then) && jt(t.catch), ts = ((t, e) => t ? setImmediate : e ? ((r, a) => (kn.addEventListener("message", ({ source: i, data: c }) => {
  i === kn && c === r && a.length && a.shift()();
}, !1), (i) => {
  a.push(i), kn.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  jt(kn.postMessage)
), Uu = typeof queueMicrotask < "u" ? queueMicrotask.bind(kn) : typeof process < "u" && process.nextTick || ts, Nu = (t) => t != null && jt(t[Po]), ne = {
  isArray: rr,
  isArrayBuffer: Qi,
  isBuffer: _l,
  isFormData: lu,
  isArrayBufferView: eu,
  isString: tu,
  isNumber: Zi,
  isBoolean: nu,
  isObject: Do,
  isPlainObject: ao,
  isReadableStream: cu,
  isRequest: du,
  isResponse: fu,
  isHeaders: hu,
  isUndefined: Or,
  isDate: ru,
  isFile: ou,
  isBlob: au,
  isRegExp: Cu,
  isFunction: jt,
  isStream: su,
  isURLSearchParams: uu,
  isTypedArray: Su,
  isFileList: iu,
  forEach: Ir,
  merge: ua,
  extend: vu,
  trim: pu,
  stripBOM: mu,
  inherits: gu,
  toFlatObject: yu,
  kindOf: Io,
  kindOfTest: nn,
  endsWith: bu,
  toArray: xu,
  forEachEntry: Eu,
  matchAll: wu,
  isHTMLForm: Tu,
  hasOwnProperty: ui,
  hasOwnProp: ui,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: es,
  freezeMethods: Ou,
  toObjectSet: Pu,
  toCamelCase: Au,
  noop: Iu,
  toFiniteNumber: Ru,
  findKey: qi,
  global: kn,
  isContextDefined: _i,
  isSpecCompliantForm: Du,
  toJSONObject: Fu,
  isAsyncFn: Mu,
  isThenable: Lu,
  setImmediate: ts,
  asap: Uu,
  isIterable: Nu
};
function Ye(t, e, r, a, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), r && (this.config = r), a && (this.request = a), i && (this.response = i, this.status = i.status ? i.status : null);
}
ne.inherits(Ye, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: ne.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const ns = Ye.prototype, rs = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((t) => {
  rs[t] = { value: t };
});
Object.defineProperties(Ye, rs);
Object.defineProperty(ns, "isAxiosError", { value: !0 });
Ye.from = (t, e, r, a, i, c) => {
  const n = Object.create(ns);
  return ne.toFlatObject(t, n, function(o) {
    return o !== Error.prototype;
  }, (u) => u !== "isAxiosError"), Ye.call(n, t.message, e, r, a, i), n.cause = t, n.name = t.name, c && Object.assign(n, c), n;
};
const ju = null;
function ca(t) {
  return ne.isPlainObject(t) || ne.isArray(t);
}
function os(t) {
  return ne.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function ci(t, e, r) {
  return t ? t.concat(e).map(function(i, c) {
    return i = os(i), !r && c ? "[" + i + "]" : i;
  }).join(r ? "." : "") : e;
}
function ku(t) {
  return ne.isArray(t) && !t.some(ca);
}
const Bu = ne.toFlatObject(ne, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Fo(t, e, r) {
  if (!ne.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), r = ne.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(v, m) {
    return !ne.isUndefined(m[v]);
  });
  const a = r.metaTokens, i = r.visitor || l, c = r.dots, n = r.indexes, o = (r.Blob || typeof Blob < "u" && Blob) && ne.isSpecCompliantForm(e);
  if (!ne.isFunction(i))
    throw new TypeError("visitor must be a function");
  function s(h) {
    if (h === null) return "";
    if (ne.isDate(h))
      return h.toISOString();
    if (!o && ne.isBlob(h))
      throw new Ye("Blob is not supported. Use a Buffer instead.");
    return ne.isArrayBuffer(h) || ne.isTypedArray(h) ? o && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function l(h, v, m) {
    let g = h;
    if (h && !m && typeof h == "object") {
      if (ne.endsWith(v, "{}"))
        v = a ? v : v.slice(0, -2), h = JSON.stringify(h);
      else if (ne.isArray(h) && ku(h) || (ne.isFileList(h) || ne.endsWith(v, "[]")) && (g = ne.toArray(h)))
        return v = os(v), g.forEach(function(S, E) {
          !(ne.isUndefined(S) || S === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            n === !0 ? ci([v], E, c) : n === null ? v : v + "[]",
            s(S)
          );
        }), !1;
    }
    return ca(h) ? !0 : (e.append(ci(m, v, c), s(h)), !1);
  }
  const d = [], f = Object.assign(Bu, {
    defaultVisitor: l,
    convertValue: s,
    isVisitable: ca
  });
  function p(h, v) {
    if (!ne.isUndefined(h)) {
      if (d.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      d.push(h), ne.forEach(h, function(g, y) {
        (!(ne.isUndefined(g) || g === null) && i.call(
          e,
          g,
          ne.isString(y) ? y.trim() : y,
          v,
          f
        )) === !0 && p(g, v ? v.concat(y) : [y]);
      }), d.pop();
    }
  }
  if (!ne.isObject(t))
    throw new TypeError("data must be an object");
  return p(t), e;
}
function di(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(a) {
    return e[a];
  });
}
function Oa(t, e) {
  this._pairs = [], t && Fo(t, this, e);
}
const as = Oa.prototype;
as.append = function(e, r) {
  this._pairs.push([e, r]);
};
as.toString = function(e) {
  const r = e ? function(a) {
    return e.call(this, a, di);
  } : di;
  return this._pairs.map(function(i) {
    return r(i[0]) + "=" + r(i[1]);
  }, "").join("&");
};
function $u(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function is(t, e, r) {
  if (!e)
    return t;
  const a = r && r.encode || $u;
  ne.isFunction(r) && (r = {
    serialize: r
  });
  const i = r && r.serialize;
  let c;
  if (i ? c = i(e, r) : c = ne.isURLSearchParams(e) ? e.toString() : new Oa(e, r).toString(a), c) {
    const n = t.indexOf("#");
    n !== -1 && (t = t.slice(0, n)), t += (t.indexOf("?") === -1 ? "?" : "&") + c;
  }
  return t;
}
class fi {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(e, r, a) {
    return this.handlers.push({
      fulfilled: e,
      rejected: r,
      synchronous: a ? a.synchronous : !1,
      runWhen: a ? a.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(e) {
    ne.forEach(this.handlers, function(a) {
      a !== null && e(a);
    });
  }
}
const ss = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Vu = typeof URLSearchParams < "u" ? URLSearchParams : Oa, Hu = typeof FormData < "u" ? FormData : null, zu = typeof Blob < "u" ? Blob : null, Gu = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Vu,
    FormData: Hu,
    Blob: zu
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Pa = typeof window < "u" && typeof document < "u", da = typeof navigator == "object" && navigator || void 0, Wu = Pa && (!da || ["ReactNative", "NativeScript", "NS"].indexOf(da.product) < 0), Yu = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Ku = Pa && window.location.href || "http://localhost", Xu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Pa,
  hasStandardBrowserEnv: Wu,
  hasStandardBrowserWebWorkerEnv: Yu,
  navigator: da,
  origin: Ku
}, Symbol.toStringTag, { value: "Module" })), Ct = {
  ...Xu,
  ...Gu
};
function Ju(t, e) {
  return Fo(t, new Ct.classes.URLSearchParams(), Object.assign({
    visitor: function(r, a, i, c) {
      return Ct.isNode && ne.isBuffer(r) ? (this.append(a, r.toString("base64")), !1) : c.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function Qu(t) {
  return ne.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function Zu(t) {
  const e = {}, r = Object.keys(t);
  let a;
  const i = r.length;
  let c;
  for (a = 0; a < i; a++)
    c = r[a], e[c] = t[c];
  return e;
}
function ls(t) {
  function e(r, a, i, c) {
    let n = r[c++];
    if (n === "__proto__") return !0;
    const u = Number.isFinite(+n), o = c >= r.length;
    return n = !n && ne.isArray(i) ? i.length : n, o ? (ne.hasOwnProp(i, n) ? i[n] = [i[n], a] : i[n] = a, !u) : ((!i[n] || !ne.isObject(i[n])) && (i[n] = []), e(r, a, i[n], c) && ne.isArray(i[n]) && (i[n] = Zu(i[n])), !u);
  }
  if (ne.isFormData(t) && ne.isFunction(t.entries)) {
    const r = {};
    return ne.forEachEntry(t, (a, i) => {
      e(Qu(a), i, r, 0);
    }), r;
  }
  return null;
}
function qu(t, e, r) {
  if (ne.isString(t))
    try {
      return (e || JSON.parse)(t), ne.trim(t);
    } catch (a) {
      if (a.name !== "SyntaxError")
        throw a;
    }
  return (r || JSON.stringify)(t);
}
const Rr = {
  transitional: ss,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, r) {
    const a = r.getContentType() || "", i = a.indexOf("application/json") > -1, c = ne.isObject(e);
    if (c && ne.isHTMLForm(e) && (e = new FormData(e)), ne.isFormData(e))
      return i ? JSON.stringify(ls(e)) : e;
    if (ne.isArrayBuffer(e) || ne.isBuffer(e) || ne.isStream(e) || ne.isFile(e) || ne.isBlob(e) || ne.isReadableStream(e))
      return e;
    if (ne.isArrayBufferView(e))
      return e.buffer;
    if (ne.isURLSearchParams(e))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let u;
    if (c) {
      if (a.indexOf("application/x-www-form-urlencoded") > -1)
        return Ju(e, this.formSerializer).toString();
      if ((u = ne.isFileList(e)) || a.indexOf("multipart/form-data") > -1) {
        const o = this.env && this.env.FormData;
        return Fo(
          u ? { "files[]": e } : e,
          o && new o(),
          this.formSerializer
        );
      }
    }
    return c || i ? (r.setContentType("application/json", !1), qu(e)) : e;
  }],
  transformResponse: [function(e) {
    const r = this.transitional || Rr.transitional, a = r && r.forcedJSONParsing, i = this.responseType === "json";
    if (ne.isResponse(e) || ne.isReadableStream(e))
      return e;
    if (e && ne.isString(e) && (a && !this.responseType || i)) {
      const n = !(r && r.silentJSONParsing) && i;
      try {
        return JSON.parse(e);
      } catch (u) {
        if (n)
          throw u.name === "SyntaxError" ? Ye.from(u, Ye.ERR_BAD_RESPONSE, this, null, this.response) : u;
      }
    }
    return e;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Ct.classes.FormData,
    Blob: Ct.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
ne.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  Rr.headers[t] = {};
});
const _u = ne.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), ec = (t) => {
  const e = {};
  let r, a, i;
  return t && t.split(`
`).forEach(function(n) {
    i = n.indexOf(":"), r = n.substring(0, i).trim().toLowerCase(), a = n.substring(i + 1).trim(), !(!r || e[r] && _u[r]) && (r === "set-cookie" ? e[r] ? e[r].push(a) : e[r] = [a] : e[r] = e[r] ? e[r] + ", " + a : a);
  }), e;
}, hi = Symbol("internals");
function cr(t) {
  return t && String(t).trim().toLowerCase();
}
function io(t) {
  return t === !1 || t == null ? t : ne.isArray(t) ? t.map(io) : String(t);
}
function tc(t) {
  const e = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let a;
  for (; a = r.exec(t); )
    e[a[1]] = a[2];
  return e;
}
const nc = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function Wo(t, e, r, a, i) {
  if (ne.isFunction(a))
    return a.call(this, e, r);
  if (i && (e = r), !!ne.isString(e)) {
    if (ne.isString(a))
      return e.indexOf(a) !== -1;
    if (ne.isRegExp(a))
      return a.test(e);
  }
}
function rc(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, a) => r.toUpperCase() + a);
}
function oc(t, e) {
  const r = ne.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((a) => {
    Object.defineProperty(t, a + r, {
      value: function(i, c, n) {
        return this[a].call(this, e, i, c, n);
      },
      configurable: !0
    });
  });
}
let kt = class {
  constructor(e) {
    e && this.set(e);
  }
  set(e, r, a) {
    const i = this;
    function c(u, o, s) {
      const l = cr(o);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const d = ne.findKey(i, l);
      (!d || i[d] === void 0 || s === !0 || s === void 0 && i[d] !== !1) && (i[d || o] = io(u));
    }
    const n = (u, o) => ne.forEach(u, (s, l) => c(s, l, o));
    if (ne.isPlainObject(e) || e instanceof this.constructor)
      n(e, r);
    else if (ne.isString(e) && (e = e.trim()) && !nc(e))
      n(ec(e), r);
    else if (ne.isObject(e) && ne.isIterable(e)) {
      let u = {}, o, s;
      for (const l of e) {
        if (!ne.isArray(l))
          throw TypeError("Object iterator must return a key-value pair");
        u[s = l[0]] = (o = u[s]) ? ne.isArray(o) ? [...o, l[1]] : [o, l[1]] : l[1];
      }
      n(u, r);
    } else
      e != null && c(r, e, a);
    return this;
  }
  get(e, r) {
    if (e = cr(e), e) {
      const a = ne.findKey(this, e);
      if (a) {
        const i = this[a];
        if (!r)
          return i;
        if (r === !0)
          return tc(i);
        if (ne.isFunction(r))
          return r.call(this, i, a);
        if (ne.isRegExp(r))
          return r.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, r) {
    if (e = cr(e), e) {
      const a = ne.findKey(this, e);
      return !!(a && this[a] !== void 0 && (!r || Wo(this, this[a], a, r)));
    }
    return !1;
  }
  delete(e, r) {
    const a = this;
    let i = !1;
    function c(n) {
      if (n = cr(n), n) {
        const u = ne.findKey(a, n);
        u && (!r || Wo(a, a[u], u, r)) && (delete a[u], i = !0);
      }
    }
    return ne.isArray(e) ? e.forEach(c) : c(e), i;
  }
  clear(e) {
    const r = Object.keys(this);
    let a = r.length, i = !1;
    for (; a--; ) {
      const c = r[a];
      (!e || Wo(this, this[c], c, e, !0)) && (delete this[c], i = !0);
    }
    return i;
  }
  normalize(e) {
    const r = this, a = {};
    return ne.forEach(this, (i, c) => {
      const n = ne.findKey(a, c);
      if (n) {
        r[n] = io(i), delete r[c];
        return;
      }
      const u = e ? rc(c) : String(c).trim();
      u !== c && delete r[c], r[u] = io(i), a[u] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const r = /* @__PURE__ */ Object.create(null);
    return ne.forEach(this, (a, i) => {
      a != null && a !== !1 && (r[i] = e && ne.isArray(a) ? a.join(", ") : a);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, r]) => e + ": " + r).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...r) {
    const a = new this(e);
    return r.forEach((i) => a.set(i)), a;
  }
  static accessor(e) {
    const a = (this[hi] = this[hi] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function c(n) {
      const u = cr(n);
      a[u] || (oc(i, n), a[u] = !0);
    }
    return ne.isArray(e) ? e.forEach(c) : c(e), this;
  }
};
kt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
ne.reduceDescriptors(kt.prototype, ({ value: t }, e) => {
  let r = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(a) {
      this[r] = a;
    }
  };
});
ne.freezeMethods(kt);
function Yo(t, e) {
  const r = this || Rr, a = e || r, i = kt.from(a.headers);
  let c = a.data;
  return ne.forEach(t, function(u) {
    c = u.call(r, c, i.normalize(), e ? e.status : void 0);
  }), i.normalize(), c;
}
function us(t) {
  return !!(t && t.__CANCEL__);
}
function or(t, e, r) {
  Ye.call(this, t ?? "canceled", Ye.ERR_CANCELED, e, r), this.name = "CanceledError";
}
ne.inherits(or, Ye, {
  __CANCEL__: !0
});
function cs(t, e, r) {
  const a = r.config.validateStatus;
  !r.status || !a || a(r.status) ? t(r) : e(new Ye(
    "Request failed with status code " + r.status,
    [Ye.ERR_BAD_REQUEST, Ye.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function ac(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function ic(t, e) {
  t = t || 10;
  const r = new Array(t), a = new Array(t);
  let i = 0, c = 0, n;
  return e = e !== void 0 ? e : 1e3, function(o) {
    const s = Date.now(), l = a[c];
    n || (n = s), r[i] = o, a[i] = s;
    let d = c, f = 0;
    for (; d !== i; )
      f += r[d++], d = d % t;
    if (i = (i + 1) % t, i === c && (c = (c + 1) % t), s - n < e)
      return;
    const p = l && s - l;
    return p ? Math.round(f * 1e3 / p) : void 0;
  };
}
function sc(t, e) {
  let r = 0, a = 1e3 / e, i, c;
  const n = (s, l = Date.now()) => {
    r = l, i = null, c && (clearTimeout(c), c = null), t.apply(null, s);
  };
  return [(...s) => {
    const l = Date.now(), d = l - r;
    d >= a ? n(s, l) : (i = s, c || (c = setTimeout(() => {
      c = null, n(i);
    }, a - d)));
  }, () => i && n(i)];
}
const mo = (t, e, r = 3) => {
  let a = 0;
  const i = ic(50, 250);
  return sc((c) => {
    const n = c.loaded, u = c.lengthComputable ? c.total : void 0, o = n - a, s = i(o), l = n <= u;
    a = n;
    const d = {
      loaded: n,
      total: u,
      progress: u ? n / u : void 0,
      bytes: o,
      rate: s || void 0,
      estimated: s && u && l ? (u - n) / s : void 0,
      event: c,
      lengthComputable: u != null,
      [e ? "download" : "upload"]: !0
    };
    t(d);
  }, r);
}, pi = (t, e) => {
  const r = t != null;
  return [(a) => e[0]({
    lengthComputable: r,
    total: t,
    loaded: a
  }), e[1]];
}, vi = (t) => (...e) => ne.asap(() => t(...e)), lc = Ct.hasStandardBrowserEnv ? /* @__PURE__ */ ((t, e) => (r) => (r = new URL(r, Ct.origin), t.protocol === r.protocol && t.host === r.host && (e || t.port === r.port)))(
  new URL(Ct.origin),
  Ct.navigator && /(msie|trident)/i.test(Ct.navigator.userAgent)
) : () => !0, uc = Ct.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, r, a, i, c) {
      const n = [t + "=" + encodeURIComponent(e)];
      ne.isNumber(r) && n.push("expires=" + new Date(r).toGMTString()), ne.isString(a) && n.push("path=" + a), ne.isString(i) && n.push("domain=" + i), c === !0 && n.push("secure"), document.cookie = n.join("; ");
    },
    read(t) {
      const e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
      return e ? decodeURIComponent(e[3]) : null;
    },
    remove(t) {
      this.write(t, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function cc(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function dc(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function ds(t, e, r) {
  let a = !cc(e);
  return t && (a || r == !1) ? dc(t, e) : e;
}
const mi = (t) => t instanceof kt ? { ...t } : t;
function zn(t, e) {
  e = e || {};
  const r = {};
  function a(s, l, d, f) {
    return ne.isPlainObject(s) && ne.isPlainObject(l) ? ne.merge.call({ caseless: f }, s, l) : ne.isPlainObject(l) ? ne.merge({}, l) : ne.isArray(l) ? l.slice() : l;
  }
  function i(s, l, d, f) {
    if (ne.isUndefined(l)) {
      if (!ne.isUndefined(s))
        return a(void 0, s, d, f);
    } else return a(s, l, d, f);
  }
  function c(s, l) {
    if (!ne.isUndefined(l))
      return a(void 0, l);
  }
  function n(s, l) {
    if (ne.isUndefined(l)) {
      if (!ne.isUndefined(s))
        return a(void 0, s);
    } else return a(void 0, l);
  }
  function u(s, l, d) {
    if (d in e)
      return a(s, l);
    if (d in t)
      return a(void 0, s);
  }
  const o = {
    url: c,
    method: c,
    data: c,
    baseURL: n,
    transformRequest: n,
    transformResponse: n,
    paramsSerializer: n,
    timeout: n,
    timeoutMessage: n,
    withCredentials: n,
    withXSRFToken: n,
    adapter: n,
    responseType: n,
    xsrfCookieName: n,
    xsrfHeaderName: n,
    onUploadProgress: n,
    onDownloadProgress: n,
    decompress: n,
    maxContentLength: n,
    maxBodyLength: n,
    beforeRedirect: n,
    transport: n,
    httpAgent: n,
    httpsAgent: n,
    cancelToken: n,
    socketPath: n,
    responseEncoding: n,
    validateStatus: u,
    headers: (s, l, d) => i(mi(s), mi(l), d, !0)
  };
  return ne.forEach(Object.keys(Object.assign({}, t, e)), function(l) {
    const d = o[l] || i, f = d(t[l], e[l], l);
    ne.isUndefined(f) && d !== u || (r[l] = f);
  }), r;
}
const fs = (t) => {
  const e = zn({}, t);
  let { data: r, withXSRFToken: a, xsrfHeaderName: i, xsrfCookieName: c, headers: n, auth: u } = e;
  e.headers = n = kt.from(n), e.url = is(ds(e.baseURL, e.url, e.allowAbsoluteUrls), t.params, t.paramsSerializer), u && n.set(
    "Authorization",
    "Basic " + btoa((u.username || "") + ":" + (u.password ? unescape(encodeURIComponent(u.password)) : ""))
  );
  let o;
  if (ne.isFormData(r)) {
    if (Ct.hasStandardBrowserEnv || Ct.hasStandardBrowserWebWorkerEnv)
      n.setContentType(void 0);
    else if ((o = n.getContentType()) !== !1) {
      const [s, ...l] = o ? o.split(";").map((d) => d.trim()).filter(Boolean) : [];
      n.setContentType([s || "multipart/form-data", ...l].join("; "));
    }
  }
  if (Ct.hasStandardBrowserEnv && (a && ne.isFunction(a) && (a = a(e)), a || a !== !1 && lc(e.url))) {
    const s = i && c && uc.read(c);
    s && n.set(i, s);
  }
  return e;
}, fc = typeof XMLHttpRequest < "u", hc = fc && function(t) {
  return new Promise(function(r, a) {
    const i = fs(t);
    let c = i.data;
    const n = kt.from(i.headers).normalize();
    let { responseType: u, onUploadProgress: o, onDownloadProgress: s } = i, l, d, f, p, h;
    function v() {
      p && p(), h && h(), i.cancelToken && i.cancelToken.unsubscribe(l), i.signal && i.signal.removeEventListener("abort", l);
    }
    let m = new XMLHttpRequest();
    m.open(i.method.toUpperCase(), i.url, !0), m.timeout = i.timeout;
    function g() {
      if (!m)
        return;
      const S = kt.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), A = {
        data: !u || u === "text" || u === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: S,
        config: t,
        request: m
      };
      cs(function(L) {
        r(L), v();
      }, function(L) {
        a(L), v();
      }, A), m = null;
    }
    "onloadend" in m ? m.onloadend = g : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(g);
    }, m.onabort = function() {
      m && (a(new Ye("Request aborted", Ye.ECONNABORTED, t, m)), m = null);
    }, m.onerror = function() {
      a(new Ye("Network Error", Ye.ERR_NETWORK, t, m)), m = null;
    }, m.ontimeout = function() {
      let E = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
      const A = i.transitional || ss;
      i.timeoutErrorMessage && (E = i.timeoutErrorMessage), a(new Ye(
        E,
        A.clarifyTimeoutError ? Ye.ETIMEDOUT : Ye.ECONNABORTED,
        t,
        m
      )), m = null;
    }, c === void 0 && n.setContentType(null), "setRequestHeader" in m && ne.forEach(n.toJSON(), function(E, A) {
      m.setRequestHeader(A, E);
    }), ne.isUndefined(i.withCredentials) || (m.withCredentials = !!i.withCredentials), u && u !== "json" && (m.responseType = i.responseType), s && ([f, h] = mo(s, !0), m.addEventListener("progress", f)), o && m.upload && ([d, p] = mo(o), m.upload.addEventListener("progress", d), m.upload.addEventListener("loadend", p)), (i.cancelToken || i.signal) && (l = (S) => {
      m && (a(!S || S.type ? new or(null, t, m) : S), m.abort(), m = null);
    }, i.cancelToken && i.cancelToken.subscribe(l), i.signal && (i.signal.aborted ? l() : i.signal.addEventListener("abort", l)));
    const y = ac(i.url);
    if (y && Ct.protocols.indexOf(y) === -1) {
      a(new Ye("Unsupported protocol " + y + ":", Ye.ERR_BAD_REQUEST, t));
      return;
    }
    m.send(c || null);
  });
}, pc = (t, e) => {
  const { length: r } = t = t ? t.filter(Boolean) : [];
  if (e || r) {
    let a = new AbortController(), i;
    const c = function(s) {
      if (!i) {
        i = !0, u();
        const l = s instanceof Error ? s : this.reason;
        a.abort(l instanceof Ye ? l : new or(l instanceof Error ? l.message : l));
      }
    };
    let n = e && setTimeout(() => {
      n = null, c(new Ye(`timeout ${e} of ms exceeded`, Ye.ETIMEDOUT));
    }, e);
    const u = () => {
      t && (n && clearTimeout(n), n = null, t.forEach((s) => {
        s.unsubscribe ? s.unsubscribe(c) : s.removeEventListener("abort", c);
      }), t = null);
    };
    t.forEach((s) => s.addEventListener("abort", c));
    const { signal: o } = a;
    return o.unsubscribe = () => ne.asap(u), o;
  }
}, vc = function* (t, e) {
  let r = t.byteLength;
  if (r < e) {
    yield t;
    return;
  }
  let a = 0, i;
  for (; a < r; )
    i = a + e, yield t.slice(a, i), a = i;
}, mc = async function* (t, e) {
  for await (const r of gc(t))
    yield* vc(r, e);
}, gc = async function* (t) {
  if (t[Symbol.asyncIterator]) {
    yield* t;
    return;
  }
  const e = t.getReader();
  try {
    for (; ; ) {
      const { done: r, value: a } = await e.read();
      if (r)
        break;
      yield a;
    }
  } finally {
    await e.cancel();
  }
}, gi = (t, e, r, a) => {
  const i = mc(t, e);
  let c = 0, n, u = (o) => {
    n || (n = !0, a && a(o));
  };
  return new ReadableStream({
    async pull(o) {
      try {
        const { done: s, value: l } = await i.next();
        if (s) {
          u(), o.close();
          return;
        }
        let d = l.byteLength;
        if (r) {
          let f = c += d;
          r(f);
        }
        o.enqueue(new Uint8Array(l));
      } catch (s) {
        throw u(s), s;
      }
    },
    cancel(o) {
      return u(o), i.return();
    }
  }, {
    highWaterMark: 2
  });
}, Mo = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", hs = Mo && typeof ReadableStream == "function", yc = Mo && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((t) => (e) => t.encode(e))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), ps = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, bc = hs && ps(() => {
  let t = !1;
  const e = new Request(Ct.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !e;
}), yi = 64 * 1024, fa = hs && ps(() => ne.isReadableStream(new Response("").body)), go = {
  stream: fa && ((t) => t.body)
};
Mo && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !go[e] && (go[e] = ne.isFunction(t[e]) ? (r) => r[e]() : (r, a) => {
      throw new Ye(`Response type '${e}' is not supported`, Ye.ERR_NOT_SUPPORT, a);
    });
  });
})(new Response());
const xc = async (t) => {
  if (t == null)
    return 0;
  if (ne.isBlob(t))
    return t.size;
  if (ne.isSpecCompliantForm(t))
    return (await new Request(Ct.origin, {
      method: "POST",
      body: t
    }).arrayBuffer()).byteLength;
  if (ne.isArrayBufferView(t) || ne.isArrayBuffer(t))
    return t.byteLength;
  if (ne.isURLSearchParams(t) && (t = t + ""), ne.isString(t))
    return (await yc(t)).byteLength;
}, Sc = async (t, e) => {
  const r = ne.toFiniteNumber(t.getContentLength());
  return r ?? xc(e);
}, Ec = Mo && (async (t) => {
  let {
    url: e,
    method: r,
    data: a,
    signal: i,
    cancelToken: c,
    timeout: n,
    onDownloadProgress: u,
    onUploadProgress: o,
    responseType: s,
    headers: l,
    withCredentials: d = "same-origin",
    fetchOptions: f
  } = fs(t);
  s = s ? (s + "").toLowerCase() : "text";
  let p = pc([i, c && c.toAbortSignal()], n), h;
  const v = p && p.unsubscribe && (() => {
    p.unsubscribe();
  });
  let m;
  try {
    if (o && bc && r !== "get" && r !== "head" && (m = await Sc(l, a)) !== 0) {
      let A = new Request(e, {
        method: "POST",
        body: a,
        duplex: "half"
      }), w;
      if (ne.isFormData(a) && (w = A.headers.get("content-type")) && l.setContentType(w), A.body) {
        const [L, j] = pi(
          m,
          mo(vi(o))
        );
        a = gi(A.body, yi, L, j);
      }
    }
    ne.isString(d) || (d = d ? "include" : "omit");
    const g = "credentials" in Request.prototype;
    h = new Request(e, {
      ...f,
      signal: p,
      method: r.toUpperCase(),
      headers: l.normalize().toJSON(),
      body: a,
      duplex: "half",
      credentials: g ? d : void 0
    });
    let y = await fetch(h);
    const S = fa && (s === "stream" || s === "response");
    if (fa && (u || S && v)) {
      const A = {};
      ["status", "statusText", "headers"].forEach((U) => {
        A[U] = y[U];
      });
      const w = ne.toFiniteNumber(y.headers.get("content-length")), [L, j] = u && pi(
        w,
        mo(vi(u), !0)
      ) || [];
      y = new Response(
        gi(y.body, yi, L, () => {
          j && j(), v && v();
        }),
        A
      );
    }
    s = s || "text";
    let E = await go[ne.findKey(go, s) || "text"](y, t);
    return !S && v && v(), await new Promise((A, w) => {
      cs(A, w, {
        data: E,
        headers: kt.from(y.headers),
        status: y.status,
        statusText: y.statusText,
        config: t,
        request: h
      });
    });
  } catch (g) {
    throw v && v(), g && g.name === "TypeError" && /Load failed|fetch/i.test(g.message) ? Object.assign(
      new Ye("Network Error", Ye.ERR_NETWORK, t, h),
      {
        cause: g.cause || g
      }
    ) : Ye.from(g, g && g.code, t, h);
  }
}), ha = {
  http: ju,
  xhr: hc,
  fetch: Ec
};
ne.forEach(ha, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const bi = (t) => `- ${t}`, wc = (t) => ne.isFunction(t) || t === null || t === !1, vs = {
  getAdapter: (t) => {
    t = ne.isArray(t) ? t : [t];
    const { length: e } = t;
    let r, a;
    const i = {};
    for (let c = 0; c < e; c++) {
      r = t[c];
      let n;
      if (a = r, !wc(r) && (a = ha[(n = String(r)).toLowerCase()], a === void 0))
        throw new Ye(`Unknown adapter '${n}'`);
      if (a)
        break;
      i[n || "#" + c] = a;
    }
    if (!a) {
      const c = Object.entries(i).map(
        ([u, o]) => `adapter ${u} ` + (o === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let n = e ? c.length > 1 ? `since :
` + c.map(bi).join(`
`) : " " + bi(c[0]) : "as no adapter specified";
      throw new Ye(
        "There is no suitable adapter to dispatch the request " + n,
        "ERR_NOT_SUPPORT"
      );
    }
    return a;
  },
  adapters: ha
};
function Ko(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new or(null, t);
}
function xi(t) {
  return Ko(t), t.headers = kt.from(t.headers), t.data = Yo.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), vs.getAdapter(t.adapter || Rr.adapter)(t).then(function(a) {
    return Ko(t), a.data = Yo.call(
      t,
      t.transformResponse,
      a
    ), a.headers = kt.from(a.headers), a;
  }, function(a) {
    return us(a) || (Ko(t), a && a.response && (a.response.data = Yo.call(
      t,
      t.transformResponse,
      a.response
    ), a.response.headers = kt.from(a.response.headers))), Promise.reject(a);
  });
}
const ms = "1.9.0", Lo = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  Lo[t] = function(a) {
    return typeof a === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const Si = {};
Lo.transitional = function(e, r, a) {
  function i(c, n) {
    return "[Axios v" + ms + "] Transitional option '" + c + "'" + n + (a ? ". " + a : "");
  }
  return (c, n, u) => {
    if (e === !1)
      throw new Ye(
        i(n, " has been removed" + (r ? " in " + r : "")),
        Ye.ERR_DEPRECATED
      );
    return r && !Si[n] && (Si[n] = !0, console.warn(
      i(
        n,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), e ? e(c, n, u) : !0;
  };
};
Lo.spelling = function(e) {
  return (r, a) => (console.warn(`${a} is likely a misspelling of ${e}`), !0);
};
function Tc(t, e, r) {
  if (typeof t != "object")
    throw new Ye("options must be an object", Ye.ERR_BAD_OPTION_VALUE);
  const a = Object.keys(t);
  let i = a.length;
  for (; i-- > 0; ) {
    const c = a[i], n = e[c];
    if (n) {
      const u = t[c], o = u === void 0 || n(u, c, t);
      if (o !== !0)
        throw new Ye("option " + c + " must be " + o, Ye.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new Ye("Unknown option " + c, Ye.ERR_BAD_OPTION);
  }
}
const so = {
  assertOptions: Tc,
  validators: Lo
}, on = so.validators;
let Vn = class {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new fi(),
      response: new fi()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(e, r) {
    try {
      return await this._request(e, r);
    } catch (a) {
      if (a instanceof Error) {
        let i = {};
        Error.captureStackTrace ? Error.captureStackTrace(i) : i = new Error();
        const c = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        try {
          a.stack ? c && !String(a.stack).endsWith(c.replace(/^.+\n.+\n/, "")) && (a.stack += `
` + c) : a.stack = c;
        } catch {
        }
      }
      throw a;
    }
  }
  _request(e, r) {
    typeof e == "string" ? (r = r || {}, r.url = e) : r = e || {}, r = zn(this.defaults, r);
    const { transitional: a, paramsSerializer: i, headers: c } = r;
    a !== void 0 && so.assertOptions(a, {
      silentJSONParsing: on.transitional(on.boolean),
      forcedJSONParsing: on.transitional(on.boolean),
      clarifyTimeoutError: on.transitional(on.boolean)
    }, !1), i != null && (ne.isFunction(i) ? r.paramsSerializer = {
      serialize: i
    } : so.assertOptions(i, {
      encode: on.function,
      serialize: on.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), so.assertOptions(r, {
      baseUrl: on.spelling("baseURL"),
      withXsrfToken: on.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let n = c && ne.merge(
      c.common,
      c[r.method]
    );
    c && ne.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete c[h];
      }
    ), r.headers = kt.concat(n, c);
    const u = [];
    let o = !0;
    this.interceptors.request.forEach(function(v) {
      typeof v.runWhen == "function" && v.runWhen(r) === !1 || (o = o && v.synchronous, u.unshift(v.fulfilled, v.rejected));
    });
    const s = [];
    this.interceptors.response.forEach(function(v) {
      s.push(v.fulfilled, v.rejected);
    });
    let l, d = 0, f;
    if (!o) {
      const h = [xi.bind(this), void 0];
      for (h.unshift.apply(h, u), h.push.apply(h, s), f = h.length, l = Promise.resolve(r); d < f; )
        l = l.then(h[d++], h[d++]);
      return l;
    }
    f = u.length;
    let p = r;
    for (d = 0; d < f; ) {
      const h = u[d++], v = u[d++];
      try {
        p = h(p);
      } catch (m) {
        v.call(this, m);
        break;
      }
    }
    try {
      l = xi.call(this, p);
    } catch (h) {
      return Promise.reject(h);
    }
    for (d = 0, f = s.length; d < f; )
      l = l.then(s[d++], s[d++]);
    return l;
  }
  getUri(e) {
    e = zn(this.defaults, e);
    const r = ds(e.baseURL, e.url, e.allowAbsoluteUrls);
    return is(r, e.params, e.paramsSerializer);
  }
};
ne.forEach(["delete", "get", "head", "options"], function(e) {
  Vn.prototype[e] = function(r, a) {
    return this.request(zn(a || {}, {
      method: e,
      url: r,
      data: (a || {}).data
    }));
  };
});
ne.forEach(["post", "put", "patch"], function(e) {
  function r(a) {
    return function(c, n, u) {
      return this.request(zn(u || {}, {
        method: e,
        headers: a ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: c,
        data: n
      }));
    };
  }
  Vn.prototype[e] = r(), Vn.prototype[e + "Form"] = r(!0);
});
let Ac = class gs {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(c) {
      r = c;
    });
    const a = this;
    this.promise.then((i) => {
      if (!a._listeners) return;
      let c = a._listeners.length;
      for (; c-- > 0; )
        a._listeners[c](i);
      a._listeners = null;
    }), this.promise.then = (i) => {
      let c;
      const n = new Promise((u) => {
        a.subscribe(u), c = u;
      }).then(i);
      return n.cancel = function() {
        a.unsubscribe(c);
      }, n;
    }, e(function(c, n, u) {
      a.reason || (a.reason = new or(c, n, u), r(a.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(e);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const e = new AbortController(), r = (a) => {
      e.abort(a);
    };
    return this.subscribe(r), e.signal.unsubscribe = () => this.unsubscribe(r), e.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new gs(function(i) {
        e = i;
      }),
      cancel: e
    };
  }
};
function Cc(t) {
  return function(r) {
    return t.apply(null, r);
  };
}
function Oc(t) {
  return ne.isObject(t) && t.isAxiosError === !0;
}
const pa = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(pa).forEach(([t, e]) => {
  pa[e] = t;
});
function ys(t) {
  const e = new Vn(t), r = Xi(Vn.prototype.request, e);
  return ne.extend(r, Vn.prototype, e, { allOwnKeys: !0 }), ne.extend(r, e, null, { allOwnKeys: !0 }), r.create = function(i) {
    return ys(zn(t, i));
  }, r;
}
const ht = ys(Rr);
ht.Axios = Vn;
ht.CanceledError = or;
ht.CancelToken = Ac;
ht.isCancel = us;
ht.VERSION = ms;
ht.toFormData = Fo;
ht.AxiosError = Ye;
ht.Cancel = ht.CanceledError;
ht.all = function(e) {
  return Promise.all(e);
};
ht.spread = Cc;
ht.isAxiosError = Oc;
ht.mergeConfig = zn;
ht.AxiosHeaders = kt;
ht.formToJSON = (t) => ls(ne.isHTMLForm(t) ? new FormData(t) : t);
ht.getAdapter = vs.getAdapter;
ht.HttpStatusCode = pa;
ht.default = ht;
const {
  Axios: fg,
  AxiosError: hg,
  CanceledError: pg,
  isCancel: vg,
  CancelToken: mg,
  VERSION: gg,
  all: yg,
  Cancel: bg,
  isAxiosError: xg,
  spread: Sg,
  toFormData: Eg,
  AxiosHeaders: wg,
  HttpStatusCode: Tg,
  formToJSON: Ag,
  getAdapter: Cg,
  mergeConfig: Og
} = ht;
var Qr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ia(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Pc(t) {
  if (Object.prototype.hasOwnProperty.call(t, "__esModule")) return t;
  var e = t.default;
  if (typeof e == "function") {
    var r = function a() {
      return this instanceof a ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    r.prototype = e.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(t).forEach(function(a) {
    var i = Object.getOwnPropertyDescriptor(t, a);
    Object.defineProperty(r, a, i.get ? i : {
      enumerable: !0,
      get: function() {
        return t[a];
      }
    });
  }), r;
}
var Xo = { exports: {} }, Ei;
function Ic() {
  return Ei || (Ei = 1, function(t, e) {
    (function(a, i) {
      t.exports = i();
    })(self, function() {
      return (
        /******/
        function() {
          var r = {
            /***/
            3099: (
              /***/
              function(n) {
                n.exports = function(u) {
                  if (typeof u != "function")
                    throw TypeError(String(u) + " is not a function");
                  return u;
                };
              }
            ),
            /***/
            6077: (
              /***/
              function(n, u, o) {
                var s = o(111);
                n.exports = function(l) {
                  if (!s(l) && l !== null)
                    throw TypeError("Can't set " + String(l) + " as a prototype");
                  return l;
                };
              }
            ),
            /***/
            1223: (
              /***/
              function(n, u, o) {
                var s = o(5112), l = o(30), d = o(3070), f = s("unscopables"), p = Array.prototype;
                p[f] == null && d.f(p, f, {
                  configurable: !0,
                  value: l(null)
                }), n.exports = function(h) {
                  p[f][h] = !0;
                };
              }
            ),
            /***/
            1530: (
              /***/
              function(n, u, o) {
                var s = o(8710).charAt;
                n.exports = function(l, d, f) {
                  return d + (f ? s(l, d).length : 1);
                };
              }
            ),
            /***/
            5787: (
              /***/
              function(n) {
                n.exports = function(u, o, s) {
                  if (!(u instanceof o))
                    throw TypeError("Incorrect " + (s ? s + " " : "") + "invocation");
                  return u;
                };
              }
            ),
            /***/
            9670: (
              /***/
              function(n, u, o) {
                var s = o(111);
                n.exports = function(l) {
                  if (!s(l))
                    throw TypeError(String(l) + " is not an object");
                  return l;
                };
              }
            ),
            /***/
            4019: (
              /***/
              function(n) {
                n.exports = typeof ArrayBuffer < "u" && typeof DataView < "u";
              }
            ),
            /***/
            260: (
              /***/
              function(n, u, o) {
                var s = o(4019), l = o(9781), d = o(7854), f = o(111), p = o(6656), h = o(648), v = o(8880), m = o(1320), g = o(3070).f, y = o(9518), S = o(7674), E = o(5112), A = o(9711), w = d.Int8Array, L = w && w.prototype, j = d.Uint8ClampedArray, U = j && j.prototype, N = w && y(w), $ = L && y(L), H = Object.prototype, k = H.isPrototypeOf, z = E("toStringTag"), Y = A("TYPED_ARRAY_TAG"), W = s && !!S && h(d.opera) !== "Opera", re = !1, X, he = {
                  Int8Array: 1,
                  Uint8Array: 1,
                  Uint8ClampedArray: 1,
                  Int16Array: 2,
                  Uint16Array: 2,
                  Int32Array: 4,
                  Uint32Array: 4,
                  Float32Array: 4,
                  Float64Array: 8
                }, fe = {
                  BigInt64Array: 8,
                  BigUint64Array: 8
                }, Te = function(O) {
                  if (!f(O)) return !1;
                  var R = h(O);
                  return R === "DataView" || p(he, R) || p(fe, R);
                }, Re = function(be) {
                  if (!f(be)) return !1;
                  var O = h(be);
                  return p(he, O) || p(fe, O);
                }, xe = function(be) {
                  if (Re(be)) return be;
                  throw TypeError("Target is not a typed array");
                }, Ne = function(be) {
                  if (S) {
                    if (k.call(N, be)) return be;
                  } else for (var O in he) if (p(he, X)) {
                    var R = d[O];
                    if (R && (be === R || k.call(R, be)))
                      return be;
                  }
                  throw TypeError("Target is not a typed array constructor");
                }, Ue = function(be, O, R) {
                  if (l) {
                    if (R) for (var T in he) {
                      var D = d[T];
                      D && p(D.prototype, be) && delete D.prototype[be];
                    }
                    (!$[be] || R) && m($, be, R ? O : W && L[be] || O);
                  }
                }, Me = function(be, O, R) {
                  var T, D;
                  if (l) {
                    if (S) {
                      if (R) for (T in he)
                        D = d[T], D && p(D, be) && delete D[be];
                      if (!N[be] || R)
                        try {
                          return m(N, be, R ? O : W && w[be] || O);
                        } catch {
                        }
                      else return;
                    }
                    for (T in he)
                      D = d[T], D && (!D[be] || R) && m(D, be, O);
                  }
                };
                for (X in he)
                  d[X] || (W = !1);
                if ((!W || typeof N != "function" || N === Function.prototype) && (N = function() {
                  throw TypeError("Incorrect invocation");
                }, W))
                  for (X in he)
                    d[X] && S(d[X], N);
                if ((!W || !$ || $ === H) && ($ = N.prototype, W))
                  for (X in he)
                    d[X] && S(d[X].prototype, $);
                if (W && y(U) !== $ && S(U, $), l && !p($, z)) {
                  re = !0, g($, z, { get: function() {
                    return f(this) ? this[Y] : void 0;
                  } });
                  for (X in he) d[X] && v(d[X], Y, X);
                }
                n.exports = {
                  NATIVE_ARRAY_BUFFER_VIEWS: W,
                  TYPED_ARRAY_TAG: re && Y,
                  aTypedArray: xe,
                  aTypedArrayConstructor: Ne,
                  exportTypedArrayMethod: Ue,
                  exportTypedArrayStaticMethod: Me,
                  isView: Te,
                  isTypedArray: Re,
                  TypedArray: N,
                  TypedArrayPrototype: $
                };
              }
            ),
            /***/
            3331: (
              /***/
              function(n, u, o) {
                var s = o(7854), l = o(9781), d = o(4019), f = o(8880), p = o(2248), h = o(7293), v = o(5787), m = o(9958), g = o(7466), y = o(7067), S = o(1179), E = o(9518), A = o(7674), w = o(8006).f, L = o(3070).f, j = o(1285), U = o(8003), N = o(9909), $ = N.get, H = N.set, k = "ArrayBuffer", z = "DataView", Y = "prototype", W = "Wrong length", re = "Wrong index", X = s[k], he = X, fe = s[z], Te = fe && fe[Y], Re = Object.prototype, xe = s.RangeError, Ne = S.pack, Ue = S.unpack, Me = function(q) {
                  return [q & 255];
                }, be = function(q) {
                  return [q & 255, q >> 8 & 255];
                }, O = function(q) {
                  return [q & 255, q >> 8 & 255, q >> 16 & 255, q >> 24 & 255];
                }, R = function(q) {
                  return q[3] << 24 | q[2] << 16 | q[1] << 8 | q[0];
                }, T = function(q) {
                  return Ne(q, 23, 4);
                }, D = function(q) {
                  return Ne(q, 52, 8);
                }, b = function(q, te) {
                  L(q[Y], te, { get: function() {
                    return $(this)[te];
                  } });
                }, x = function(q, te, ie, ge) {
                  var Ce = y(ie), Ke = $(q);
                  if (Ce + te > Ke.byteLength) throw xe(re);
                  var qe = $(Ke.buffer).bytes, Ze = Ce + Ke.byteOffset, G = qe.slice(Ze, Ze + te);
                  return ge ? G : G.reverse();
                }, P = function(q, te, ie, ge, Ce, Ke) {
                  var qe = y(ie), Ze = $(q);
                  if (qe + te > Ze.byteLength) throw xe(re);
                  for (var G = $(Ze.buffer).bytes, K = qe + Ze.byteOffset, ee = ge(+Ce), ce = 0; ce < te; ce++) G[K + ce] = ee[Ke ? ce : te - ce - 1];
                };
                if (!d)
                  he = function(te) {
                    v(this, he, k);
                    var ie = y(te);
                    H(this, {
                      bytes: j.call(new Array(ie), 0),
                      byteLength: ie
                    }), l || (this.byteLength = ie);
                  }, fe = function(te, ie, ge) {
                    v(this, fe, z), v(te, he, z);
                    var Ce = $(te).byteLength, Ke = m(ie);
                    if (Ke < 0 || Ke > Ce) throw xe("Wrong offset");
                    if (ge = ge === void 0 ? Ce - Ke : g(ge), Ke + ge > Ce) throw xe(W);
                    H(this, {
                      buffer: te,
                      byteLength: ge,
                      byteOffset: Ke
                    }), l || (this.buffer = te, this.byteLength = ge, this.byteOffset = Ke);
                  }, l && (b(he, "byteLength"), b(fe, "buffer"), b(fe, "byteLength"), b(fe, "byteOffset")), p(fe[Y], {
                    getInt8: function(te) {
                      return x(this, 1, te)[0] << 24 >> 24;
                    },
                    getUint8: function(te) {
                      return x(this, 1, te)[0];
                    },
                    getInt16: function(te) {
                      var ie = x(this, 2, te, arguments.length > 1 ? arguments[1] : void 0);
                      return (ie[1] << 8 | ie[0]) << 16 >> 16;
                    },
                    getUint16: function(te) {
                      var ie = x(this, 2, te, arguments.length > 1 ? arguments[1] : void 0);
                      return ie[1] << 8 | ie[0];
                    },
                    getInt32: function(te) {
                      return R(x(this, 4, te, arguments.length > 1 ? arguments[1] : void 0));
                    },
                    getUint32: function(te) {
                      return R(x(this, 4, te, arguments.length > 1 ? arguments[1] : void 0)) >>> 0;
                    },
                    getFloat32: function(te) {
                      return Ue(x(this, 4, te, arguments.length > 1 ? arguments[1] : void 0), 23);
                    },
                    getFloat64: function(te) {
                      return Ue(x(this, 8, te, arguments.length > 1 ? arguments[1] : void 0), 52);
                    },
                    setInt8: function(te, ie) {
                      P(this, 1, te, Me, ie);
                    },
                    setUint8: function(te, ie) {
                      P(this, 1, te, Me, ie);
                    },
                    setInt16: function(te, ie) {
                      P(this, 2, te, be, ie, arguments.length > 2 ? arguments[2] : void 0);
                    },
                    setUint16: function(te, ie) {
                      P(this, 2, te, be, ie, arguments.length > 2 ? arguments[2] : void 0);
                    },
                    setInt32: function(te, ie) {
                      P(this, 4, te, O, ie, arguments.length > 2 ? arguments[2] : void 0);
                    },
                    setUint32: function(te, ie) {
                      P(this, 4, te, O, ie, arguments.length > 2 ? arguments[2] : void 0);
                    },
                    setFloat32: function(te, ie) {
                      P(this, 4, te, T, ie, arguments.length > 2 ? arguments[2] : void 0);
                    },
                    setFloat64: function(te, ie) {
                      P(this, 8, te, D, ie, arguments.length > 2 ? arguments[2] : void 0);
                    }
                  });
                else {
                  if (!h(function() {
                    X(1);
                  }) || !h(function() {
                    new X(-1);
                  }) || h(function() {
                    return new X(), new X(1.5), new X(NaN), X.name != k;
                  })) {
                    he = function(te) {
                      return v(this, he), new X(y(te));
                    };
                    for (var M = he[Y] = X[Y], B = w(X), V = 0, Q; B.length > V; )
                      (Q = B[V++]) in he || f(he, Q, X[Q]);
                    M.constructor = he;
                  }
                  A && E(Te) !== Re && A(Te, Re);
                  var Z = new fe(new he(2)), J = Te.setInt8;
                  Z.setInt8(0, 2147483648), Z.setInt8(1, 2147483649), (Z.getInt8(0) || !Z.getInt8(1)) && p(Te, {
                    setInt8: function(te, ie) {
                      J.call(this, te, ie << 24 >> 24);
                    },
                    setUint8: function(te, ie) {
                      J.call(this, te, ie << 24 >> 24);
                    }
                  }, { unsafe: !0 });
                }
                U(he, k), U(fe, z), n.exports = {
                  ArrayBuffer: he,
                  DataView: fe
                };
              }
            ),
            /***/
            1048: (
              /***/
              function(n, u, o) {
                var s = o(7908), l = o(1400), d = o(7466), f = Math.min;
                n.exports = [].copyWithin || function(h, v) {
                  var m = s(this), g = d(m.length), y = l(h, g), S = l(v, g), E = arguments.length > 2 ? arguments[2] : void 0, A = f((E === void 0 ? g : l(E, g)) - S, g - y), w = 1;
                  for (S < y && y < S + A && (w = -1, S += A - 1, y += A - 1); A-- > 0; )
                    S in m ? m[y] = m[S] : delete m[y], y += w, S += w;
                  return m;
                };
              }
            ),
            /***/
            1285: (
              /***/
              function(n, u, o) {
                var s = o(7908), l = o(1400), d = o(7466);
                n.exports = function(p) {
                  for (var h = s(this), v = d(h.length), m = arguments.length, g = l(m > 1 ? arguments[1] : void 0, v), y = m > 2 ? arguments[2] : void 0, S = y === void 0 ? v : l(y, v); S > g; ) h[g++] = p;
                  return h;
                };
              }
            ),
            /***/
            8533: (
              /***/
              function(n, u, o) {
                var s = o(2092).forEach, l = o(9341), d = l("forEach");
                n.exports = d ? [].forEach : function(p) {
                  return s(this, p, arguments.length > 1 ? arguments[1] : void 0);
                };
              }
            ),
            /***/
            8457: (
              /***/
              function(n, u, o) {
                var s = o(9974), l = o(7908), d = o(3411), f = o(7659), p = o(7466), h = o(6135), v = o(1246);
                n.exports = function(g) {
                  var y = l(g), S = typeof this == "function" ? this : Array, E = arguments.length, A = E > 1 ? arguments[1] : void 0, w = A !== void 0, L = v(y), j = 0, U, N, $, H, k, z;
                  if (w && (A = s(A, E > 2 ? arguments[2] : void 0, 2)), L != null && !(S == Array && f(L)))
                    for (H = L.call(y), k = H.next, N = new S(); !($ = k.call(H)).done; j++)
                      z = w ? d(H, A, [$.value, j], !0) : $.value, h(N, j, z);
                  else
                    for (U = p(y.length), N = new S(U); U > j; j++)
                      z = w ? A(y[j], j) : y[j], h(N, j, z);
                  return N.length = j, N;
                };
              }
            ),
            /***/
            1318: (
              /***/
              function(n, u, o) {
                var s = o(5656), l = o(7466), d = o(1400), f = function(p) {
                  return function(h, v, m) {
                    var g = s(h), y = l(g.length), S = d(m, y), E;
                    if (p && v != v) {
                      for (; y > S; )
                        if (E = g[S++], E != E) return !0;
                    } else for (; y > S; S++)
                      if ((p || S in g) && g[S] === v) return p || S || 0;
                    return !p && -1;
                  };
                };
                n.exports = {
                  // `Array.prototype.includes` method
                  // https://tc39.es/ecma262/#sec-array.prototype.includes
                  includes: f(!0),
                  // `Array.prototype.indexOf` method
                  // https://tc39.es/ecma262/#sec-array.prototype.indexof
                  indexOf: f(!1)
                };
              }
            ),
            /***/
            2092: (
              /***/
              function(n, u, o) {
                var s = o(9974), l = o(8361), d = o(7908), f = o(7466), p = o(5417), h = [].push, v = function(m) {
                  var g = m == 1, y = m == 2, S = m == 3, E = m == 4, A = m == 6, w = m == 7, L = m == 5 || A;
                  return function(j, U, N, $) {
                    for (var H = d(j), k = l(H), z = s(U, N, 3), Y = f(k.length), W = 0, re = $ || p, X = g ? re(j, Y) : y || w ? re(j, 0) : void 0, he, fe; Y > W; W++) if ((L || W in k) && (he = k[W], fe = z(he, W, H), m))
                      if (g) X[W] = fe;
                      else if (fe) switch (m) {
                        case 3:
                          return !0;
                        // some
                        case 5:
                          return he;
                        // find
                        case 6:
                          return W;
                        // findIndex
                        case 2:
                          h.call(X, he);
                      }
                      else switch (m) {
                        case 4:
                          return !1;
                        // every
                        case 7:
                          h.call(X, he);
                      }
                    return A ? -1 : S || E ? E : X;
                  };
                };
                n.exports = {
                  // `Array.prototype.forEach` method
                  // https://tc39.es/ecma262/#sec-array.prototype.foreach
                  forEach: v(0),
                  // `Array.prototype.map` method
                  // https://tc39.es/ecma262/#sec-array.prototype.map
                  map: v(1),
                  // `Array.prototype.filter` method
                  // https://tc39.es/ecma262/#sec-array.prototype.filter
                  filter: v(2),
                  // `Array.prototype.some` method
                  // https://tc39.es/ecma262/#sec-array.prototype.some
                  some: v(3),
                  // `Array.prototype.every` method
                  // https://tc39.es/ecma262/#sec-array.prototype.every
                  every: v(4),
                  // `Array.prototype.find` method
                  // https://tc39.es/ecma262/#sec-array.prototype.find
                  find: v(5),
                  // `Array.prototype.findIndex` method
                  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
                  findIndex: v(6),
                  // `Array.prototype.filterOut` method
                  // https://github.com/tc39/proposal-array-filtering
                  filterOut: v(7)
                };
              }
            ),
            /***/
            6583: (
              /***/
              function(n, u, o) {
                var s = o(5656), l = o(9958), d = o(7466), f = o(9341), p = Math.min, h = [].lastIndexOf, v = !!h && 1 / [1].lastIndexOf(1, -0) < 0, m = f("lastIndexOf"), g = v || !m;
                n.exports = g ? function(S) {
                  if (v) return h.apply(this, arguments) || 0;
                  var E = s(this), A = d(E.length), w = A - 1;
                  for (arguments.length > 1 && (w = p(w, l(arguments[1]))), w < 0 && (w = A + w); w >= 0; w--) if (w in E && E[w] === S) return w || 0;
                  return -1;
                } : h;
              }
            ),
            /***/
            1194: (
              /***/
              function(n, u, o) {
                var s = o(7293), l = o(5112), d = o(7392), f = l("species");
                n.exports = function(p) {
                  return d >= 51 || !s(function() {
                    var h = [], v = h.constructor = {};
                    return v[f] = function() {
                      return { foo: 1 };
                    }, h[p](Boolean).foo !== 1;
                  });
                };
              }
            ),
            /***/
            9341: (
              /***/
              function(n, u, o) {
                var s = o(7293);
                n.exports = function(l, d) {
                  var f = [][l];
                  return !!f && s(function() {
                    f.call(null, d || function() {
                      throw 1;
                    }, 1);
                  });
                };
              }
            ),
            /***/
            3671: (
              /***/
              function(n, u, o) {
                var s = o(3099), l = o(7908), d = o(8361), f = o(7466), p = function(h) {
                  return function(v, m, g, y) {
                    s(m);
                    var S = l(v), E = d(S), A = f(S.length), w = h ? A - 1 : 0, L = h ? -1 : 1;
                    if (g < 2) for (; ; ) {
                      if (w in E) {
                        y = E[w], w += L;
                        break;
                      }
                      if (w += L, h ? w < 0 : A <= w)
                        throw TypeError("Reduce of empty array with no initial value");
                    }
                    for (; h ? w >= 0 : A > w; w += L) w in E && (y = m(y, E[w], w, S));
                    return y;
                  };
                };
                n.exports = {
                  // `Array.prototype.reduce` method
                  // https://tc39.es/ecma262/#sec-array.prototype.reduce
                  left: p(!1),
                  // `Array.prototype.reduceRight` method
                  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
                  right: p(!0)
                };
              }
            ),
            /***/
            5417: (
              /***/
              function(n, u, o) {
                var s = o(111), l = o(3157), d = o(5112), f = d("species");
                n.exports = function(p, h) {
                  var v;
                  return l(p) && (v = p.constructor, typeof v == "function" && (v === Array || l(v.prototype)) ? v = void 0 : s(v) && (v = v[f], v === null && (v = void 0))), new (v === void 0 ? Array : v)(h === 0 ? 0 : h);
                };
              }
            ),
            /***/
            3411: (
              /***/
              function(n, u, o) {
                var s = o(9670), l = o(9212);
                n.exports = function(d, f, p, h) {
                  try {
                    return h ? f(s(p)[0], p[1]) : f(p);
                  } catch (v) {
                    throw l(d), v;
                  }
                };
              }
            ),
            /***/
            7072: (
              /***/
              function(n, u, o) {
                var s = o(5112), l = s("iterator"), d = !1;
                try {
                  var f = 0, p = {
                    next: function() {
                      return { done: !!f++ };
                    },
                    return: function() {
                      d = !0;
                    }
                  };
                  p[l] = function() {
                    return this;
                  }, Array.from(p, function() {
                    throw 2;
                  });
                } catch {
                }
                n.exports = function(h, v) {
                  if (!v && !d) return !1;
                  var m = !1;
                  try {
                    var g = {};
                    g[l] = function() {
                      return {
                        next: function() {
                          return { done: m = !0 };
                        }
                      };
                    }, h(g);
                  } catch {
                  }
                  return m;
                };
              }
            ),
            /***/
            4326: (
              /***/
              function(n) {
                var u = {}.toString;
                n.exports = function(o) {
                  return u.call(o).slice(8, -1);
                };
              }
            ),
            /***/
            648: (
              /***/
              function(n, u, o) {
                var s = o(1694), l = o(4326), d = o(5112), f = d("toStringTag"), p = l(/* @__PURE__ */ function() {
                  return arguments;
                }()) == "Arguments", h = function(v, m) {
                  try {
                    return v[m];
                  } catch {
                  }
                };
                n.exports = s ? l : function(v) {
                  var m, g, y;
                  return v === void 0 ? "Undefined" : v === null ? "Null" : typeof (g = h(m = Object(v), f)) == "string" ? g : p ? l(m) : (y = l(m)) == "Object" && typeof m.callee == "function" ? "Arguments" : y;
                };
              }
            ),
            /***/
            9920: (
              /***/
              function(n, u, o) {
                var s = o(6656), l = o(3887), d = o(1236), f = o(3070);
                n.exports = function(p, h) {
                  for (var v = l(h), m = f.f, g = d.f, y = 0; y < v.length; y++) {
                    var S = v[y];
                    s(p, S) || m(p, S, g(h, S));
                  }
                };
              }
            ),
            /***/
            8544: (
              /***/
              function(n, u, o) {
                var s = o(7293);
                n.exports = !s(function() {
                  function l() {
                  }
                  return l.prototype.constructor = null, Object.getPrototypeOf(new l()) !== l.prototype;
                });
              }
            ),
            /***/
            4994: (
              /***/
              function(n, u, o) {
                var s = o(3383).IteratorPrototype, l = o(30), d = o(9114), f = o(8003), p = o(7497), h = function() {
                  return this;
                };
                n.exports = function(v, m, g) {
                  var y = m + " Iterator";
                  return v.prototype = l(s, { next: d(1, g) }), f(v, y, !1, !0), p[y] = h, v;
                };
              }
            ),
            /***/
            8880: (
              /***/
              function(n, u, o) {
                var s = o(9781), l = o(3070), d = o(9114);
                n.exports = s ? function(f, p, h) {
                  return l.f(f, p, d(1, h));
                } : function(f, p, h) {
                  return f[p] = h, f;
                };
              }
            ),
            /***/
            9114: (
              /***/
              function(n) {
                n.exports = function(u, o) {
                  return {
                    enumerable: !(u & 1),
                    configurable: !(u & 2),
                    writable: !(u & 4),
                    value: o
                  };
                };
              }
            ),
            /***/
            6135: (
              /***/
              function(n, u, o) {
                var s = o(7593), l = o(3070), d = o(9114);
                n.exports = function(f, p, h) {
                  var v = s(p);
                  v in f ? l.f(f, v, d(0, h)) : f[v] = h;
                };
              }
            ),
            /***/
            654: (
              /***/
              function(n, u, o) {
                var s = o(2109), l = o(4994), d = o(9518), f = o(7674), p = o(8003), h = o(8880), v = o(1320), m = o(5112), g = o(1913), y = o(7497), S = o(3383), E = S.IteratorPrototype, A = S.BUGGY_SAFARI_ITERATORS, w = m("iterator"), L = "keys", j = "values", U = "entries", N = function() {
                  return this;
                };
                n.exports = function($, H, k, z, Y, W, re) {
                  l(k, H, z);
                  var X = function(O) {
                    if (O === Y && xe) return xe;
                    if (!A && O in Te) return Te[O];
                    switch (O) {
                      case L:
                        return function() {
                          return new k(this, O);
                        };
                      case j:
                        return function() {
                          return new k(this, O);
                        };
                      case U:
                        return function() {
                          return new k(this, O);
                        };
                    }
                    return function() {
                      return new k(this);
                    };
                  }, he = H + " Iterator", fe = !1, Te = $.prototype, Re = Te[w] || Te["@@iterator"] || Y && Te[Y], xe = !A && Re || X(Y), Ne = H == "Array" && Te.entries || Re, Ue, Me, be;
                  if (Ne && (Ue = d(Ne.call(new $())), E !== Object.prototype && Ue.next && (!g && d(Ue) !== E && (f ? f(Ue, E) : typeof Ue[w] != "function" && h(Ue, w, N)), p(Ue, he, !0, !0), g && (y[he] = N))), Y == j && Re && Re.name !== j && (fe = !0, xe = function() {
                    return Re.call(this);
                  }), (!g || re) && Te[w] !== xe && h(Te, w, xe), y[H] = xe, Y)
                    if (Me = {
                      values: X(j),
                      keys: W ? xe : X(L),
                      entries: X(U)
                    }, re) for (be in Me)
                      (A || fe || !(be in Te)) && v(Te, be, Me[be]);
                    else s({ target: H, proto: !0, forced: A || fe }, Me);
                  return Me;
                };
              }
            ),
            /***/
            9781: (
              /***/
              function(n, u, o) {
                var s = o(7293);
                n.exports = !s(function() {
                  return Object.defineProperty({}, 1, { get: function() {
                    return 7;
                  } })[1] != 7;
                });
              }
            ),
            /***/
            317: (
              /***/
              function(n, u, o) {
                var s = o(7854), l = o(111), d = s.document, f = l(d) && l(d.createElement);
                n.exports = function(p) {
                  return f ? d.createElement(p) : {};
                };
              }
            ),
            /***/
            8324: (
              /***/
              function(n) {
                n.exports = {
                  CSSRuleList: 0,
                  CSSStyleDeclaration: 0,
                  CSSValueList: 0,
                  ClientRectList: 0,
                  DOMRectList: 0,
                  DOMStringList: 0,
                  DOMTokenList: 1,
                  DataTransferItemList: 0,
                  FileList: 0,
                  HTMLAllCollection: 0,
                  HTMLCollection: 0,
                  HTMLFormElement: 0,
                  HTMLSelectElement: 0,
                  MediaList: 0,
                  MimeTypeArray: 0,
                  NamedNodeMap: 0,
                  NodeList: 1,
                  PaintRequestList: 0,
                  Plugin: 0,
                  PluginArray: 0,
                  SVGLengthList: 0,
                  SVGNumberList: 0,
                  SVGPathSegList: 0,
                  SVGPointList: 0,
                  SVGStringList: 0,
                  SVGTransformList: 0,
                  SourceBufferList: 0,
                  StyleSheetList: 0,
                  TextTrackCueList: 0,
                  TextTrackList: 0,
                  TouchList: 0
                };
              }
            ),
            /***/
            8113: (
              /***/
              function(n, u, o) {
                var s = o(5005);
                n.exports = s("navigator", "userAgent") || "";
              }
            ),
            /***/
            7392: (
              /***/
              function(n, u, o) {
                var s = o(7854), l = o(8113), d = s.process, f = d && d.versions, p = f && f.v8, h, v;
                p ? (h = p.split("."), v = h[0] + h[1]) : l && (h = l.match(/Edge\/(\d+)/), (!h || h[1] >= 74) && (h = l.match(/Chrome\/(\d+)/), h && (v = h[1]))), n.exports = v && +v;
              }
            ),
            /***/
            748: (
              /***/
              function(n) {
                n.exports = [
                  "constructor",
                  "hasOwnProperty",
                  "isPrototypeOf",
                  "propertyIsEnumerable",
                  "toLocaleString",
                  "toString",
                  "valueOf"
                ];
              }
            ),
            /***/
            2109: (
              /***/
              function(n, u, o) {
                var s = o(7854), l = o(1236).f, d = o(8880), f = o(1320), p = o(3505), h = o(9920), v = o(4705);
                n.exports = function(m, g) {
                  var y = m.target, S = m.global, E = m.stat, A, w, L, j, U, N;
                  if (S ? w = s : E ? w = s[y] || p(y, {}) : w = (s[y] || {}).prototype, w) for (L in g) {
                    if (U = g[L], m.noTargetGet ? (N = l(w, L), j = N && N.value) : j = w[L], A = v(S ? L : y + (E ? "." : "#") + L, m.forced), !A && j !== void 0) {
                      if (typeof U == typeof j) continue;
                      h(U, j);
                    }
                    (m.sham || j && j.sham) && d(U, "sham", !0), f(w, L, U, m);
                  }
                };
              }
            ),
            /***/
            7293: (
              /***/
              function(n) {
                n.exports = function(u) {
                  try {
                    return !!u();
                  } catch {
                    return !0;
                  }
                };
              }
            ),
            /***/
            7007: (
              /***/
              function(n, u, o) {
                o(4916);
                var s = o(1320), l = o(7293), d = o(5112), f = o(2261), p = o(8880), h = d("species"), v = !l(function() {
                  var E = /./;
                  return E.exec = function() {
                    var A = [];
                    return A.groups = { a: "7" }, A;
                  }, "".replace(E, "$<a>") !== "7";
                }), m = function() {
                  return "a".replace(/./, "$0") === "$0";
                }(), g = d("replace"), y = function() {
                  return /./[g] ? /./[g]("a", "$0") === "" : !1;
                }(), S = !l(function() {
                  var E = /(?:)/, A = E.exec;
                  E.exec = function() {
                    return A.apply(this, arguments);
                  };
                  var w = "ab".split(E);
                  return w.length !== 2 || w[0] !== "a" || w[1] !== "b";
                });
                n.exports = function(E, A, w, L) {
                  var j = d(E), U = !l(function() {
                    var Y = {};
                    return Y[j] = function() {
                      return 7;
                    }, ""[E](Y) != 7;
                  }), N = U && !l(function() {
                    var Y = !1, W = /a/;
                    return E === "split" && (W = {}, W.constructor = {}, W.constructor[h] = function() {
                      return W;
                    }, W.flags = "", W[j] = /./[j]), W.exec = function() {
                      return Y = !0, null;
                    }, W[j](""), !Y;
                  });
                  if (!U || !N || E === "replace" && !(v && m && !y) || E === "split" && !S) {
                    var $ = /./[j], H = w(j, ""[E], function(Y, W, re, X, he) {
                      return W.exec === f ? U && !he ? { done: !0, value: $.call(W, re, X) } : { done: !0, value: Y.call(re, W, X) } : { done: !1 };
                    }, {
                      REPLACE_KEEPS_$0: m,
                      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: y
                    }), k = H[0], z = H[1];
                    s(String.prototype, E, k), s(
                      RegExp.prototype,
                      j,
                      A == 2 ? function(Y, W) {
                        return z.call(Y, this, W);
                      } : function(Y) {
                        return z.call(Y, this);
                      }
                    );
                  }
                  L && p(RegExp.prototype[j], "sham", !0);
                };
              }
            ),
            /***/
            9974: (
              /***/
              function(n, u, o) {
                var s = o(3099);
                n.exports = function(l, d, f) {
                  if (s(l), d === void 0) return l;
                  switch (f) {
                    case 0:
                      return function() {
                        return l.call(d);
                      };
                    case 1:
                      return function(p) {
                        return l.call(d, p);
                      };
                    case 2:
                      return function(p, h) {
                        return l.call(d, p, h);
                      };
                    case 3:
                      return function(p, h, v) {
                        return l.call(d, p, h, v);
                      };
                  }
                  return function() {
                    return l.apply(d, arguments);
                  };
                };
              }
            ),
            /***/
            5005: (
              /***/
              function(n, u, o) {
                var s = o(857), l = o(7854), d = function(f) {
                  return typeof f == "function" ? f : void 0;
                };
                n.exports = function(f, p) {
                  return arguments.length < 2 ? d(s[f]) || d(l[f]) : s[f] && s[f][p] || l[f] && l[f][p];
                };
              }
            ),
            /***/
            1246: (
              /***/
              function(n, u, o) {
                var s = o(648), l = o(7497), d = o(5112), f = d("iterator");
                n.exports = function(p) {
                  if (p != null) return p[f] || p["@@iterator"] || l[s(p)];
                };
              }
            ),
            /***/
            8554: (
              /***/
              function(n, u, o) {
                var s = o(9670), l = o(1246);
                n.exports = function(d) {
                  var f = l(d);
                  if (typeof f != "function")
                    throw TypeError(String(d) + " is not iterable");
                  return s(f.call(d));
                };
              }
            ),
            /***/
            647: (
              /***/
              function(n, u, o) {
                var s = o(7908), l = Math.floor, d = "".replace, f = /\$([$&'`]|\d\d?|<[^>]*>)/g, p = /\$([$&'`]|\d\d?)/g;
                n.exports = function(h, v, m, g, y, S) {
                  var E = m + h.length, A = g.length, w = p;
                  return y !== void 0 && (y = s(y), w = f), d.call(S, w, function(L, j) {
                    var U;
                    switch (j.charAt(0)) {
                      case "$":
                        return "$";
                      case "&":
                        return h;
                      case "`":
                        return v.slice(0, m);
                      case "'":
                        return v.slice(E);
                      case "<":
                        U = y[j.slice(1, -1)];
                        break;
                      default:
                        var N = +j;
                        if (N === 0) return L;
                        if (N > A) {
                          var $ = l(N / 10);
                          return $ === 0 ? L : $ <= A ? g[$ - 1] === void 0 ? j.charAt(1) : g[$ - 1] + j.charAt(1) : L;
                        }
                        U = g[N - 1];
                    }
                    return U === void 0 ? "" : U;
                  });
                };
              }
            ),
            /***/
            7854: (
              /***/
              function(n, u, o) {
                var s = function(l) {
                  return l && l.Math == Math && l;
                };
                n.exports = /* global globalThis -- safe */
                s(typeof globalThis == "object" && globalThis) || s(typeof window == "object" && window) || s(typeof self == "object" && self) || s(typeof o.g == "object" && o.g) || // eslint-disable-next-line no-new-func -- fallback
                /* @__PURE__ */ function() {
                  return this;
                }() || Function("return this")();
              }
            ),
            /***/
            6656: (
              /***/
              function(n) {
                var u = {}.hasOwnProperty;
                n.exports = function(o, s) {
                  return u.call(o, s);
                };
              }
            ),
            /***/
            3501: (
              /***/
              function(n) {
                n.exports = {};
              }
            ),
            /***/
            490: (
              /***/
              function(n, u, o) {
                var s = o(5005);
                n.exports = s("document", "documentElement");
              }
            ),
            /***/
            4664: (
              /***/
              function(n, u, o) {
                var s = o(9781), l = o(7293), d = o(317);
                n.exports = !s && !l(function() {
                  return Object.defineProperty(d("div"), "a", {
                    get: function() {
                      return 7;
                    }
                  }).a != 7;
                });
              }
            ),
            /***/
            1179: (
              /***/
              function(n) {
                var u = Math.abs, o = Math.pow, s = Math.floor, l = Math.log, d = Math.LN2, f = function(h, v, m) {
                  var g = new Array(m), y = m * 8 - v - 1, S = (1 << y) - 1, E = S >> 1, A = v === 23 ? o(2, -24) - o(2, -77) : 0, w = h < 0 || h === 0 && 1 / h < 0 ? 1 : 0, L = 0, j, U, N;
                  for (h = u(h), h != h || h === 1 / 0 ? (U = h != h ? 1 : 0, j = S) : (j = s(l(h) / d), h * (N = o(2, -j)) < 1 && (j--, N *= 2), j + E >= 1 ? h += A / N : h += A * o(2, 1 - E), h * N >= 2 && (j++, N /= 2), j + E >= S ? (U = 0, j = S) : j + E >= 1 ? (U = (h * N - 1) * o(2, v), j = j + E) : (U = h * o(2, E - 1) * o(2, v), j = 0)); v >= 8; g[L++] = U & 255, U /= 256, v -= 8) ;
                  for (j = j << v | U, y += v; y > 0; g[L++] = j & 255, j /= 256, y -= 8) ;
                  return g[--L] |= w * 128, g;
                }, p = function(h, v) {
                  var m = h.length, g = m * 8 - v - 1, y = (1 << g) - 1, S = y >> 1, E = g - 7, A = m - 1, w = h[A--], L = w & 127, j;
                  for (w >>= 7; E > 0; L = L * 256 + h[A], A--, E -= 8) ;
                  for (j = L & (1 << -E) - 1, L >>= -E, E += v; E > 0; j = j * 256 + h[A], A--, E -= 8) ;
                  if (L === 0)
                    L = 1 - S;
                  else {
                    if (L === y)
                      return j ? NaN : w ? -1 / 0 : 1 / 0;
                    j = j + o(2, v), L = L - S;
                  }
                  return (w ? -1 : 1) * j * o(2, L - v);
                };
                n.exports = {
                  pack: f,
                  unpack: p
                };
              }
            ),
            /***/
            8361: (
              /***/
              function(n, u, o) {
                var s = o(7293), l = o(4326), d = "".split;
                n.exports = s(function() {
                  return !Object("z").propertyIsEnumerable(0);
                }) ? function(f) {
                  return l(f) == "String" ? d.call(f, "") : Object(f);
                } : Object;
              }
            ),
            /***/
            9587: (
              /***/
              function(n, u, o) {
                var s = o(111), l = o(7674);
                n.exports = function(d, f, p) {
                  var h, v;
                  return (
                    // it can work only with native `setPrototypeOf`
                    l && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
                    typeof (h = f.constructor) == "function" && h !== p && s(v = h.prototype) && v !== p.prototype && l(d, v), d
                  );
                };
              }
            ),
            /***/
            2788: (
              /***/
              function(n, u, o) {
                var s = o(5465), l = Function.toString;
                typeof s.inspectSource != "function" && (s.inspectSource = function(d) {
                  return l.call(d);
                }), n.exports = s.inspectSource;
              }
            ),
            /***/
            9909: (
              /***/
              function(n, u, o) {
                var s = o(8536), l = o(7854), d = o(111), f = o(8880), p = o(6656), h = o(5465), v = o(6200), m = o(3501), g = l.WeakMap, y, S, E, A = function(H) {
                  return E(H) ? S(H) : y(H, {});
                }, w = function(H) {
                  return function(k) {
                    var z;
                    if (!d(k) || (z = S(k)).type !== H)
                      throw TypeError("Incompatible receiver, " + H + " required");
                    return z;
                  };
                };
                if (s) {
                  var L = h.state || (h.state = new g()), j = L.get, U = L.has, N = L.set;
                  y = function(H, k) {
                    return k.facade = H, N.call(L, H, k), k;
                  }, S = function(H) {
                    return j.call(L, H) || {};
                  }, E = function(H) {
                    return U.call(L, H);
                  };
                } else {
                  var $ = v("state");
                  m[$] = !0, y = function(H, k) {
                    return k.facade = H, f(H, $, k), k;
                  }, S = function(H) {
                    return p(H, $) ? H[$] : {};
                  }, E = function(H) {
                    return p(H, $);
                  };
                }
                n.exports = {
                  set: y,
                  get: S,
                  has: E,
                  enforce: A,
                  getterFor: w
                };
              }
            ),
            /***/
            7659: (
              /***/
              function(n, u, o) {
                var s = o(5112), l = o(7497), d = s("iterator"), f = Array.prototype;
                n.exports = function(p) {
                  return p !== void 0 && (l.Array === p || f[d] === p);
                };
              }
            ),
            /***/
            3157: (
              /***/
              function(n, u, o) {
                var s = o(4326);
                n.exports = Array.isArray || function(d) {
                  return s(d) == "Array";
                };
              }
            ),
            /***/
            4705: (
              /***/
              function(n, u, o) {
                var s = o(7293), l = /#|\.prototype\./, d = function(m, g) {
                  var y = p[f(m)];
                  return y == v ? !0 : y == h ? !1 : typeof g == "function" ? s(g) : !!g;
                }, f = d.normalize = function(m) {
                  return String(m).replace(l, ".").toLowerCase();
                }, p = d.data = {}, h = d.NATIVE = "N", v = d.POLYFILL = "P";
                n.exports = d;
              }
            ),
            /***/
            111: (
              /***/
              function(n) {
                n.exports = function(u) {
                  return typeof u == "object" ? u !== null : typeof u == "function";
                };
              }
            ),
            /***/
            1913: (
              /***/
              function(n) {
                n.exports = !1;
              }
            ),
            /***/
            7850: (
              /***/
              function(n, u, o) {
                var s = o(111), l = o(4326), d = o(5112), f = d("match");
                n.exports = function(p) {
                  var h;
                  return s(p) && ((h = p[f]) !== void 0 ? !!h : l(p) == "RegExp");
                };
              }
            ),
            /***/
            9212: (
              /***/
              function(n, u, o) {
                var s = o(9670);
                n.exports = function(l) {
                  var d = l.return;
                  if (d !== void 0)
                    return s(d.call(l)).value;
                };
              }
            ),
            /***/
            3383: (
              /***/
              function(n, u, o) {
                var s = o(7293), l = o(9518), d = o(8880), f = o(6656), p = o(5112), h = o(1913), v = p("iterator"), m = !1, g = function() {
                  return this;
                }, y, S, E;
                [].keys && (E = [].keys(), "next" in E ? (S = l(l(E)), S !== Object.prototype && (y = S)) : m = !0);
                var A = y == null || s(function() {
                  var w = {};
                  return y[v].call(w) !== w;
                });
                A && (y = {}), (!h || A) && !f(y, v) && d(y, v, g), n.exports = {
                  IteratorPrototype: y,
                  BUGGY_SAFARI_ITERATORS: m
                };
              }
            ),
            /***/
            7497: (
              /***/
              function(n) {
                n.exports = {};
              }
            ),
            /***/
            133: (
              /***/
              function(n, u, o) {
                var s = o(7293);
                n.exports = !!Object.getOwnPropertySymbols && !s(function() {
                  return !String(Symbol());
                });
              }
            ),
            /***/
            590: (
              /***/
              function(n, u, o) {
                var s = o(7293), l = o(5112), d = o(1913), f = l("iterator");
                n.exports = !s(function() {
                  var p = new URL("b?a=1&b=2&c=3", "http://a"), h = p.searchParams, v = "";
                  return p.pathname = "c%20d", h.forEach(function(m, g) {
                    h.delete("b"), v += g + m;
                  }), d && !p.toJSON || !h.sort || p.href !== "http://a/c%20d?a=1&c=3" || h.get("c") !== "3" || String(new URLSearchParams("?a=1")) !== "a=1" || !h[f] || new URL("https://a@b").username !== "a" || new URLSearchParams(new URLSearchParams("a=b")).get("a") !== "b" || new URL("http://тест").host !== "xn--e1aybc" || new URL("http://a#б").hash !== "#%D0%B1" || v !== "a1c3" || new URL("http://x", void 0).host !== "x";
                });
              }
            ),
            /***/
            8536: (
              /***/
              function(n, u, o) {
                var s = o(7854), l = o(2788), d = s.WeakMap;
                n.exports = typeof d == "function" && /native code/.test(l(d));
              }
            ),
            /***/
            1574: (
              /***/
              function(n, u, o) {
                var s = o(9781), l = o(7293), d = o(1956), f = o(5181), p = o(5296), h = o(7908), v = o(8361), m = Object.assign, g = Object.defineProperty;
                n.exports = !m || l(function() {
                  if (s && m({ b: 1 }, m(g({}, "a", {
                    enumerable: !0,
                    get: function() {
                      g(this, "b", {
                        value: 3,
                        enumerable: !1
                      });
                    }
                  }), { b: 2 })).b !== 1) return !0;
                  var y = {}, S = {}, E = Symbol(), A = "abcdefghijklmnopqrst";
                  return y[E] = 7, A.split("").forEach(function(w) {
                    S[w] = w;
                  }), m({}, y)[E] != 7 || d(m({}, S)).join("") != A;
                }) ? function(S, E) {
                  for (var A = h(S), w = arguments.length, L = 1, j = f.f, U = p.f; w > L; )
                    for (var N = v(arguments[L++]), $ = j ? d(N).concat(j(N)) : d(N), H = $.length, k = 0, z; H > k; )
                      z = $[k++], (!s || U.call(N, z)) && (A[z] = N[z]);
                  return A;
                } : m;
              }
            ),
            /***/
            30: (
              /***/
              function(n, u, o) {
                var s = o(9670), l = o(6048), d = o(748), f = o(3501), p = o(490), h = o(317), v = o(6200), m = ">", g = "<", y = "prototype", S = "script", E = v("IE_PROTO"), A = function() {
                }, w = function($) {
                  return g + S + m + $ + g + "/" + S + m;
                }, L = function($) {
                  $.write(w("")), $.close();
                  var H = $.parentWindow.Object;
                  return $ = null, H;
                }, j = function() {
                  var $ = h("iframe"), H = "java" + S + ":", k;
                  return $.style.display = "none", p.appendChild($), $.src = String(H), k = $.contentWindow.document, k.open(), k.write(w("document.F=Object")), k.close(), k.F;
                }, U, N = function() {
                  try {
                    U = document.domain && new ActiveXObject("htmlfile");
                  } catch {
                  }
                  N = U ? L(U) : j();
                  for (var $ = d.length; $--; ) delete N[y][d[$]];
                  return N();
                };
                f[E] = !0, n.exports = Object.create || function(H, k) {
                  var z;
                  return H !== null ? (A[y] = s(H), z = new A(), A[y] = null, z[E] = H) : z = N(), k === void 0 ? z : l(z, k);
                };
              }
            ),
            /***/
            6048: (
              /***/
              function(n, u, o) {
                var s = o(9781), l = o(3070), d = o(9670), f = o(1956);
                n.exports = s ? Object.defineProperties : function(h, v) {
                  d(h);
                  for (var m = f(v), g = m.length, y = 0, S; g > y; ) l.f(h, S = m[y++], v[S]);
                  return h;
                };
              }
            ),
            /***/
            3070: (
              /***/
              function(n, u, o) {
                var s = o(9781), l = o(4664), d = o(9670), f = o(7593), p = Object.defineProperty;
                u.f = s ? p : function(v, m, g) {
                  if (d(v), m = f(m, !0), d(g), l) try {
                    return p(v, m, g);
                  } catch {
                  }
                  if ("get" in g || "set" in g) throw TypeError("Accessors not supported");
                  return "value" in g && (v[m] = g.value), v;
                };
              }
            ),
            /***/
            1236: (
              /***/
              function(n, u, o) {
                var s = o(9781), l = o(5296), d = o(9114), f = o(5656), p = o(7593), h = o(6656), v = o(4664), m = Object.getOwnPropertyDescriptor;
                u.f = s ? m : function(y, S) {
                  if (y = f(y), S = p(S, !0), v) try {
                    return m(y, S);
                  } catch {
                  }
                  if (h(y, S)) return d(!l.f.call(y, S), y[S]);
                };
              }
            ),
            /***/
            8006: (
              /***/
              function(n, u, o) {
                var s = o(6324), l = o(748), d = l.concat("length", "prototype");
                u.f = Object.getOwnPropertyNames || function(p) {
                  return s(p, d);
                };
              }
            ),
            /***/
            5181: (
              /***/
              function(n, u) {
                u.f = Object.getOwnPropertySymbols;
              }
            ),
            /***/
            9518: (
              /***/
              function(n, u, o) {
                var s = o(6656), l = o(7908), d = o(6200), f = o(8544), p = d("IE_PROTO"), h = Object.prototype;
                n.exports = f ? Object.getPrototypeOf : function(v) {
                  return v = l(v), s(v, p) ? v[p] : typeof v.constructor == "function" && v instanceof v.constructor ? v.constructor.prototype : v instanceof Object ? h : null;
                };
              }
            ),
            /***/
            6324: (
              /***/
              function(n, u, o) {
                var s = o(6656), l = o(5656), d = o(1318).indexOf, f = o(3501);
                n.exports = function(p, h) {
                  var v = l(p), m = 0, g = [], y;
                  for (y in v) !s(f, y) && s(v, y) && g.push(y);
                  for (; h.length > m; ) s(v, y = h[m++]) && (~d(g, y) || g.push(y));
                  return g;
                };
              }
            ),
            /***/
            1956: (
              /***/
              function(n, u, o) {
                var s = o(6324), l = o(748);
                n.exports = Object.keys || function(f) {
                  return s(f, l);
                };
              }
            ),
            /***/
            5296: (
              /***/
              function(n, u) {
                var o = {}.propertyIsEnumerable, s = Object.getOwnPropertyDescriptor, l = s && !o.call({ 1: 2 }, 1);
                u.f = l ? function(f) {
                  var p = s(this, f);
                  return !!p && p.enumerable;
                } : o;
              }
            ),
            /***/
            7674: (
              /***/
              function(n, u, o) {
                var s = o(9670), l = o(6077);
                n.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                  var d = !1, f = {}, p;
                  try {
                    p = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set, p.call(f, []), d = f instanceof Array;
                  } catch {
                  }
                  return function(v, m) {
                    return s(v), l(m), d ? p.call(v, m) : v.__proto__ = m, v;
                  };
                }() : void 0);
              }
            ),
            /***/
            288: (
              /***/
              function(n, u, o) {
                var s = o(1694), l = o(648);
                n.exports = s ? {}.toString : function() {
                  return "[object " + l(this) + "]";
                };
              }
            ),
            /***/
            3887: (
              /***/
              function(n, u, o) {
                var s = o(5005), l = o(8006), d = o(5181), f = o(9670);
                n.exports = s("Reflect", "ownKeys") || function(h) {
                  var v = l.f(f(h)), m = d.f;
                  return m ? v.concat(m(h)) : v;
                };
              }
            ),
            /***/
            857: (
              /***/
              function(n, u, o) {
                var s = o(7854);
                n.exports = s;
              }
            ),
            /***/
            2248: (
              /***/
              function(n, u, o) {
                var s = o(1320);
                n.exports = function(l, d, f) {
                  for (var p in d) s(l, p, d[p], f);
                  return l;
                };
              }
            ),
            /***/
            1320: (
              /***/
              function(n, u, o) {
                var s = o(7854), l = o(8880), d = o(6656), f = o(3505), p = o(2788), h = o(9909), v = h.get, m = h.enforce, g = String(String).split("String");
                (n.exports = function(y, S, E, A) {
                  var w = A ? !!A.unsafe : !1, L = A ? !!A.enumerable : !1, j = A ? !!A.noTargetGet : !1, U;
                  if (typeof E == "function" && (typeof S == "string" && !d(E, "name") && l(E, "name", S), U = m(E), U.source || (U.source = g.join(typeof S == "string" ? S : ""))), y === s) {
                    L ? y[S] = E : f(S, E);
                    return;
                  } else w ? !j && y[S] && (L = !0) : delete y[S];
                  L ? y[S] = E : l(y, S, E);
                })(Function.prototype, "toString", function() {
                  return typeof this == "function" && v(this).source || p(this);
                });
              }
            ),
            /***/
            7651: (
              /***/
              function(n, u, o) {
                var s = o(4326), l = o(2261);
                n.exports = function(d, f) {
                  var p = d.exec;
                  if (typeof p == "function") {
                    var h = p.call(d, f);
                    if (typeof h != "object")
                      throw TypeError("RegExp exec method returned something other than an Object or null");
                    return h;
                  }
                  if (s(d) !== "RegExp")
                    throw TypeError("RegExp#exec called on incompatible receiver");
                  return l.call(d, f);
                };
              }
            ),
            /***/
            2261: (
              /***/
              function(n, u, o) {
                var s = o(7066), l = o(2999), d = RegExp.prototype.exec, f = String.prototype.replace, p = d, h = function() {
                  var y = /a/, S = /b*/g;
                  return d.call(y, "a"), d.call(S, "a"), y.lastIndex !== 0 || S.lastIndex !== 0;
                }(), v = l.UNSUPPORTED_Y || l.BROKEN_CARET, m = /()??/.exec("")[1] !== void 0, g = h || m || v;
                g && (p = function(S) {
                  var E = this, A, w, L, j, U = v && E.sticky, N = s.call(E), $ = E.source, H = 0, k = S;
                  return U && (N = N.replace("y", ""), N.indexOf("g") === -1 && (N += "g"), k = String(S).slice(E.lastIndex), E.lastIndex > 0 && (!E.multiline || E.multiline && S[E.lastIndex - 1] !== `
`) && ($ = "(?: " + $ + ")", k = " " + k, H++), w = new RegExp("^(?:" + $ + ")", N)), m && (w = new RegExp("^" + $ + "$(?!\\s)", N)), h && (A = E.lastIndex), L = d.call(U ? w : E, k), U ? L ? (L.input = L.input.slice(H), L[0] = L[0].slice(H), L.index = E.lastIndex, E.lastIndex += L[0].length) : E.lastIndex = 0 : h && L && (E.lastIndex = E.global ? L.index + L[0].length : A), m && L && L.length > 1 && f.call(L[0], w, function() {
                    for (j = 1; j < arguments.length - 2; j++)
                      arguments[j] === void 0 && (L[j] = void 0);
                  }), L;
                }), n.exports = p;
              }
            ),
            /***/
            7066: (
              /***/
              function(n, u, o) {
                var s = o(9670);
                n.exports = function() {
                  var l = s(this), d = "";
                  return l.global && (d += "g"), l.ignoreCase && (d += "i"), l.multiline && (d += "m"), l.dotAll && (d += "s"), l.unicode && (d += "u"), l.sticky && (d += "y"), d;
                };
              }
            ),
            /***/
            2999: (
              /***/
              function(n, u, o) {
                var s = o(7293);
                function l(d, f) {
                  return RegExp(d, f);
                }
                u.UNSUPPORTED_Y = s(function() {
                  var d = l("a", "y");
                  return d.lastIndex = 2, d.exec("abcd") != null;
                }), u.BROKEN_CARET = s(function() {
                  var d = l("^r", "gy");
                  return d.lastIndex = 2, d.exec("str") != null;
                });
              }
            ),
            /***/
            4488: (
              /***/
              function(n) {
                n.exports = function(u) {
                  if (u == null) throw TypeError("Can't call method on " + u);
                  return u;
                };
              }
            ),
            /***/
            3505: (
              /***/
              function(n, u, o) {
                var s = o(7854), l = o(8880);
                n.exports = function(d, f) {
                  try {
                    l(s, d, f);
                  } catch {
                    s[d] = f;
                  }
                  return f;
                };
              }
            ),
            /***/
            6340: (
              /***/
              function(n, u, o) {
                var s = o(5005), l = o(3070), d = o(5112), f = o(9781), p = d("species");
                n.exports = function(h) {
                  var v = s(h), m = l.f;
                  f && v && !v[p] && m(v, p, {
                    configurable: !0,
                    get: function() {
                      return this;
                    }
                  });
                };
              }
            ),
            /***/
            8003: (
              /***/
              function(n, u, o) {
                var s = o(3070).f, l = o(6656), d = o(5112), f = d("toStringTag");
                n.exports = function(p, h, v) {
                  p && !l(p = v ? p : p.prototype, f) && s(p, f, { configurable: !0, value: h });
                };
              }
            ),
            /***/
            6200: (
              /***/
              function(n, u, o) {
                var s = o(2309), l = o(9711), d = s("keys");
                n.exports = function(f) {
                  return d[f] || (d[f] = l(f));
                };
              }
            ),
            /***/
            5465: (
              /***/
              function(n, u, o) {
                var s = o(7854), l = o(3505), d = "__core-js_shared__", f = s[d] || l(d, {});
                n.exports = f;
              }
            ),
            /***/
            2309: (
              /***/
              function(n, u, o) {
                var s = o(1913), l = o(5465);
                (n.exports = function(d, f) {
                  return l[d] || (l[d] = f !== void 0 ? f : {});
                })("versions", []).push({
                  version: "3.9.0",
                  mode: s ? "pure" : "global",
                  copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
                });
              }
            ),
            /***/
            6707: (
              /***/
              function(n, u, o) {
                var s = o(9670), l = o(3099), d = o(5112), f = d("species");
                n.exports = function(p, h) {
                  var v = s(p).constructor, m;
                  return v === void 0 || (m = s(v)[f]) == null ? h : l(m);
                };
              }
            ),
            /***/
            8710: (
              /***/
              function(n, u, o) {
                var s = o(9958), l = o(4488), d = function(f) {
                  return function(p, h) {
                    var v = String(l(p)), m = s(h), g = v.length, y, S;
                    return m < 0 || m >= g ? f ? "" : void 0 : (y = v.charCodeAt(m), y < 55296 || y > 56319 || m + 1 === g || (S = v.charCodeAt(m + 1)) < 56320 || S > 57343 ? f ? v.charAt(m) : y : f ? v.slice(m, m + 2) : (y - 55296 << 10) + (S - 56320) + 65536);
                  };
                };
                n.exports = {
                  // `String.prototype.codePointAt` method
                  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
                  codeAt: d(!1),
                  // `String.prototype.at` method
                  // https://github.com/mathiasbynens/String.prototype.at
                  charAt: d(!0)
                };
              }
            ),
            /***/
            3197: (
              /***/
              function(n) {
                var u = 2147483647, o = 36, s = 1, l = 26, d = 38, f = 700, p = 72, h = 128, v = "-", m = /[^\0-\u007E]/, g = /[.\u3002\uFF0E\uFF61]/g, y = "Overflow: input needs wider integers to process", S = o - s, E = Math.floor, A = String.fromCharCode, w = function(N) {
                  for (var $ = [], H = 0, k = N.length; H < k; ) {
                    var z = N.charCodeAt(H++);
                    if (z >= 55296 && z <= 56319 && H < k) {
                      var Y = N.charCodeAt(H++);
                      (Y & 64512) == 56320 ? $.push(((z & 1023) << 10) + (Y & 1023) + 65536) : ($.push(z), H--);
                    } else
                      $.push(z);
                  }
                  return $;
                }, L = function(N) {
                  return N + 22 + 75 * (N < 26);
                }, j = function(N, $, H) {
                  var k = 0;
                  for (N = H ? E(N / f) : N >> 1, N += E(N / $); N > S * l >> 1; k += o)
                    N = E(N / S);
                  return E(k + (S + 1) * N / (N + d));
                }, U = function(N) {
                  var $ = [];
                  N = w(N);
                  var H = N.length, k = h, z = 0, Y = p, W, re;
                  for (W = 0; W < N.length; W++)
                    re = N[W], re < 128 && $.push(A(re));
                  var X = $.length, he = X;
                  for (X && $.push(v); he < H; ) {
                    var fe = u;
                    for (W = 0; W < N.length; W++)
                      re = N[W], re >= k && re < fe && (fe = re);
                    var Te = he + 1;
                    if (fe - k > E((u - z) / Te))
                      throw RangeError(y);
                    for (z += (fe - k) * Te, k = fe, W = 0; W < N.length; W++) {
                      if (re = N[W], re < k && ++z > u)
                        throw RangeError(y);
                      if (re == k) {
                        for (var Re = z, xe = o; ; xe += o) {
                          var Ne = xe <= Y ? s : xe >= Y + l ? l : xe - Y;
                          if (Re < Ne) break;
                          var Ue = Re - Ne, Me = o - Ne;
                          $.push(A(L(Ne + Ue % Me))), Re = E(Ue / Me);
                        }
                        $.push(A(L(Re))), Y = j(z, Te, he == X), z = 0, ++he;
                      }
                    }
                    ++z, ++k;
                  }
                  return $.join("");
                };
                n.exports = function(N) {
                  var $ = [], H = N.toLowerCase().replace(g, ".").split("."), k, z;
                  for (k = 0; k < H.length; k++)
                    z = H[k], $.push(m.test(z) ? "xn--" + U(z) : z);
                  return $.join(".");
                };
              }
            ),
            /***/
            6091: (
              /***/
              function(n, u, o) {
                var s = o(7293), l = o(1361), d = "​᠎";
                n.exports = function(f) {
                  return s(function() {
                    return !!l[f]() || d[f]() != d || l[f].name !== f;
                  });
                };
              }
            ),
            /***/
            3111: (
              /***/
              function(n, u, o) {
                var s = o(4488), l = o(1361), d = "[" + l + "]", f = RegExp("^" + d + d + "*"), p = RegExp(d + d + "*$"), h = function(v) {
                  return function(m) {
                    var g = String(s(m));
                    return v & 1 && (g = g.replace(f, "")), v & 2 && (g = g.replace(p, "")), g;
                  };
                };
                n.exports = {
                  // `String.prototype.{ trimLeft, trimStart }` methods
                  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
                  start: h(1),
                  // `String.prototype.{ trimRight, trimEnd }` methods
                  // https://tc39.es/ecma262/#sec-string.prototype.trimend
                  end: h(2),
                  // `String.prototype.trim` method
                  // https://tc39.es/ecma262/#sec-string.prototype.trim
                  trim: h(3)
                };
              }
            ),
            /***/
            1400: (
              /***/
              function(n, u, o) {
                var s = o(9958), l = Math.max, d = Math.min;
                n.exports = function(f, p) {
                  var h = s(f);
                  return h < 0 ? l(h + p, 0) : d(h, p);
                };
              }
            ),
            /***/
            7067: (
              /***/
              function(n, u, o) {
                var s = o(9958), l = o(7466);
                n.exports = function(d) {
                  if (d === void 0) return 0;
                  var f = s(d), p = l(f);
                  if (f !== p) throw RangeError("Wrong length or index");
                  return p;
                };
              }
            ),
            /***/
            5656: (
              /***/
              function(n, u, o) {
                var s = o(8361), l = o(4488);
                n.exports = function(d) {
                  return s(l(d));
                };
              }
            ),
            /***/
            9958: (
              /***/
              function(n) {
                var u = Math.ceil, o = Math.floor;
                n.exports = function(s) {
                  return isNaN(s = +s) ? 0 : (s > 0 ? o : u)(s);
                };
              }
            ),
            /***/
            7466: (
              /***/
              function(n, u, o) {
                var s = o(9958), l = Math.min;
                n.exports = function(d) {
                  return d > 0 ? l(s(d), 9007199254740991) : 0;
                };
              }
            ),
            /***/
            7908: (
              /***/
              function(n, u, o) {
                var s = o(4488);
                n.exports = function(l) {
                  return Object(s(l));
                };
              }
            ),
            /***/
            4590: (
              /***/
              function(n, u, o) {
                var s = o(3002);
                n.exports = function(l, d) {
                  var f = s(l);
                  if (f % d) throw RangeError("Wrong offset");
                  return f;
                };
              }
            ),
            /***/
            3002: (
              /***/
              function(n, u, o) {
                var s = o(9958);
                n.exports = function(l) {
                  var d = s(l);
                  if (d < 0) throw RangeError("The argument can't be less than 0");
                  return d;
                };
              }
            ),
            /***/
            7593: (
              /***/
              function(n, u, o) {
                var s = o(111);
                n.exports = function(l, d) {
                  if (!s(l)) return l;
                  var f, p;
                  if (d && typeof (f = l.toString) == "function" && !s(p = f.call(l)) || typeof (f = l.valueOf) == "function" && !s(p = f.call(l)) || !d && typeof (f = l.toString) == "function" && !s(p = f.call(l))) return p;
                  throw TypeError("Can't convert object to primitive value");
                };
              }
            ),
            /***/
            1694: (
              /***/
              function(n, u, o) {
                var s = o(5112), l = s("toStringTag"), d = {};
                d[l] = "z", n.exports = String(d) === "[object z]";
              }
            ),
            /***/
            9843: (
              /***/
              function(n, u, o) {
                var s = o(2109), l = o(7854), d = o(9781), f = o(3832), p = o(260), h = o(3331), v = o(5787), m = o(9114), g = o(8880), y = o(7466), S = o(7067), E = o(4590), A = o(7593), w = o(6656), L = o(648), j = o(111), U = o(30), N = o(7674), $ = o(8006).f, H = o(7321), k = o(2092).forEach, z = o(6340), Y = o(3070), W = o(1236), re = o(9909), X = o(9587), he = re.get, fe = re.set, Te = Y.f, Re = W.f, xe = Math.round, Ne = l.RangeError, Ue = h.ArrayBuffer, Me = h.DataView, be = p.NATIVE_ARRAY_BUFFER_VIEWS, O = p.TYPED_ARRAY_TAG, R = p.TypedArray, T = p.TypedArrayPrototype, D = p.aTypedArrayConstructor, b = p.isTypedArray, x = "BYTES_PER_ELEMENT", P = "Wrong length", M = function(q, te) {
                  for (var ie = 0, ge = te.length, Ce = new (D(q))(ge); ge > ie; ) Ce[ie] = te[ie++];
                  return Ce;
                }, B = function(q, te) {
                  Te(q, te, { get: function() {
                    return he(this)[te];
                  } });
                }, V = function(q) {
                  var te;
                  return q instanceof Ue || (te = L(q)) == "ArrayBuffer" || te == "SharedArrayBuffer";
                }, Q = function(q, te) {
                  return b(q) && typeof te != "symbol" && te in q && String(+te) == String(te);
                }, Z = function(te, ie) {
                  return Q(te, ie = A(ie, !0)) ? m(2, te[ie]) : Re(te, ie);
                }, J = function(te, ie, ge) {
                  return Q(te, ie = A(ie, !0)) && j(ge) && w(ge, "value") && !w(ge, "get") && !w(ge, "set") && !ge.configurable && (!w(ge, "writable") || ge.writable) && (!w(ge, "enumerable") || ge.enumerable) ? (te[ie] = ge.value, te) : Te(te, ie, ge);
                };
                d ? (be || (W.f = Z, Y.f = J, B(T, "buffer"), B(T, "byteOffset"), B(T, "byteLength"), B(T, "length")), s({ target: "Object", stat: !0, forced: !be }, {
                  getOwnPropertyDescriptor: Z,
                  defineProperty: J
                }), n.exports = function(q, te, ie) {
                  var ge = q.match(/\d+$/)[0] / 8, Ce = q + (ie ? "Clamped" : "") + "Array", Ke = "get" + q, qe = "set" + q, Ze = l[Ce], G = Ze, K = G && G.prototype, ee = {}, ce = function(Ae, Ee) {
                    var Ve = he(Ae);
                    return Ve.view[Ke](Ee * ge + Ve.byteOffset, !0);
                  }, Se = function(Ae, Ee, Ve) {
                    var Oe = he(Ae);
                    ie && (Ve = (Ve = xe(Ve)) < 0 ? 0 : Ve > 255 ? 255 : Ve & 255), Oe.view[qe](Ee * ge + Oe.byteOffset, Ve, !0);
                  }, Fe = function(Ae, Ee) {
                    Te(Ae, Ee, {
                      get: function() {
                        return ce(this, Ee);
                      },
                      set: function(Ve) {
                        return Se(this, Ee, Ve);
                      },
                      enumerable: !0
                    });
                  };
                  be ? f && (G = te(function(Ae, Ee, Ve, Oe) {
                    return v(Ae, G, Ce), X(function() {
                      return j(Ee) ? V(Ee) ? Oe !== void 0 ? new Ze(Ee, E(Ve, ge), Oe) : Ve !== void 0 ? new Ze(Ee, E(Ve, ge)) : new Ze(Ee) : b(Ee) ? M(G, Ee) : H.call(G, Ee) : new Ze(S(Ee));
                    }(), Ae, G);
                  }), N && N(G, R), k($(Ze), function(Ae) {
                    Ae in G || g(G, Ae, Ze[Ae]);
                  }), G.prototype = K) : (G = te(function(Ae, Ee, Ve, Oe) {
                    v(Ae, G, Ce);
                    var we = 0, Ie = 0, $e, je, tt;
                    if (!j(Ee))
                      tt = S(Ee), je = tt * ge, $e = new Ue(je);
                    else if (V(Ee)) {
                      $e = Ee, Ie = E(Ve, ge);
                      var zt = Ee.byteLength;
                      if (Oe === void 0) {
                        if (zt % ge || (je = zt - Ie, je < 0)) throw Ne(P);
                      } else if (je = y(Oe) * ge, je + Ie > zt) throw Ne(P);
                      tt = je / ge;
                    } else return b(Ee) ? M(G, Ee) : H.call(G, Ee);
                    for (fe(Ae, {
                      buffer: $e,
                      byteOffset: Ie,
                      byteLength: je,
                      length: tt,
                      view: new Me($e)
                    }); we < tt; ) Fe(Ae, we++);
                  }), N && N(G, R), K = G.prototype = U(T)), K.constructor !== G && g(K, "constructor", G), O && g(K, O, Ce), ee[Ce] = G, s({
                    global: !0,
                    forced: G != Ze,
                    sham: !be
                  }, ee), x in G || g(G, x, ge), x in K || g(K, x, ge), z(Ce);
                }) : n.exports = function() {
                };
              }
            ),
            /***/
            3832: (
              /***/
              function(n, u, o) {
                var s = o(7854), l = o(7293), d = o(7072), f = o(260).NATIVE_ARRAY_BUFFER_VIEWS, p = s.ArrayBuffer, h = s.Int8Array;
                n.exports = !f || !l(function() {
                  h(1);
                }) || !l(function() {
                  new h(-1);
                }) || !d(function(v) {
                  new h(), new h(null), new h(1.5), new h(v);
                }, !0) || l(function() {
                  return new h(new p(2), 1, void 0).length !== 1;
                });
              }
            ),
            /***/
            3074: (
              /***/
              function(n, u, o) {
                var s = o(260).aTypedArrayConstructor, l = o(6707);
                n.exports = function(d, f) {
                  for (var p = l(d, d.constructor), h = 0, v = f.length, m = new (s(p))(v); v > h; ) m[h] = f[h++];
                  return m;
                };
              }
            ),
            /***/
            7321: (
              /***/
              function(n, u, o) {
                var s = o(7908), l = o(7466), d = o(1246), f = o(7659), p = o(9974), h = o(260).aTypedArrayConstructor;
                n.exports = function(m) {
                  var g = s(m), y = arguments.length, S = y > 1 ? arguments[1] : void 0, E = S !== void 0, A = d(g), w, L, j, U, N, $;
                  if (A != null && !f(A))
                    for (N = A.call(g), $ = N.next, g = []; !(U = $.call(N)).done; )
                      g.push(U.value);
                  for (E && y > 2 && (S = p(S, arguments[2], 2)), L = l(g.length), j = new (h(this))(L), w = 0; L > w; w++)
                    j[w] = E ? S(g[w], w) : g[w];
                  return j;
                };
              }
            ),
            /***/
            9711: (
              /***/
              function(n) {
                var u = 0, o = Math.random();
                n.exports = function(s) {
                  return "Symbol(" + String(s === void 0 ? "" : s) + ")_" + (++u + o).toString(36);
                };
              }
            ),
            /***/
            3307: (
              /***/
              function(n, u, o) {
                var s = o(133);
                n.exports = s && !Symbol.sham && typeof Symbol.iterator == "symbol";
              }
            ),
            /***/
            5112: (
              /***/
              function(n, u, o) {
                var s = o(7854), l = o(2309), d = o(6656), f = o(9711), p = o(133), h = o(3307), v = l("wks"), m = s.Symbol, g = h ? m : m && m.withoutSetter || f;
                n.exports = function(y) {
                  return d(v, y) || (p && d(m, y) ? v[y] = m[y] : v[y] = g("Symbol." + y)), v[y];
                };
              }
            ),
            /***/
            1361: (
              /***/
              function(n) {
                n.exports = `	
\v\f\r                　\u2028\u2029\uFEFF`;
              }
            ),
            /***/
            8264: (
              /***/
              function(n, u, o) {
                var s = o(2109), l = o(7854), d = o(3331), f = o(6340), p = "ArrayBuffer", h = d[p], v = l[p];
                s({ global: !0, forced: v !== h }, {
                  ArrayBuffer: h
                }), f(p);
              }
            ),
            /***/
            2222: (
              /***/
              function(n, u, o) {
                var s = o(2109), l = o(7293), d = o(3157), f = o(111), p = o(7908), h = o(7466), v = o(6135), m = o(5417), g = o(1194), y = o(5112), S = o(7392), E = y("isConcatSpreadable"), A = 9007199254740991, w = "Maximum allowed index exceeded", L = S >= 51 || !l(function() {
                  var $ = [];
                  return $[E] = !1, $.concat()[0] !== $;
                }), j = g("concat"), U = function($) {
                  if (!f($)) return !1;
                  var H = $[E];
                  return H !== void 0 ? !!H : d($);
                }, N = !L || !j;
                s({ target: "Array", proto: !0, forced: N }, {
                  // eslint-disable-next-line no-unused-vars -- required for `.length`
                  concat: function(H) {
                    var k = p(this), z = m(k, 0), Y = 0, W, re, X, he, fe;
                    for (W = -1, X = arguments.length; W < X; W++)
                      if (fe = W === -1 ? k : arguments[W], U(fe)) {
                        if (he = h(fe.length), Y + he > A) throw TypeError(w);
                        for (re = 0; re < he; re++, Y++) re in fe && v(z, Y, fe[re]);
                      } else {
                        if (Y >= A) throw TypeError(w);
                        v(z, Y++, fe);
                      }
                    return z.length = Y, z;
                  }
                });
              }
            ),
            /***/
            7327: (
              /***/
              function(n, u, o) {
                var s = o(2109), l = o(2092).filter, d = o(1194), f = d("filter");
                s({ target: "Array", proto: !0, forced: !f }, {
                  filter: function(h) {
                    return l(this, h, arguments.length > 1 ? arguments[1] : void 0);
                  }
                });
              }
            ),
            /***/
            2772: (
              /***/
              function(n, u, o) {
                var s = o(2109), l = o(1318).indexOf, d = o(9341), f = [].indexOf, p = !!f && 1 / [1].indexOf(1, -0) < 0, h = d("indexOf");
                s({ target: "Array", proto: !0, forced: p || !h }, {
                  indexOf: function(m) {
                    return p ? f.apply(this, arguments) || 0 : l(this, m, arguments.length > 1 ? arguments[1] : void 0);
                  }
                });
              }
            ),
            /***/
            6992: (
              /***/
              function(n, u, o) {
                var s = o(5656), l = o(1223), d = o(7497), f = o(9909), p = o(654), h = "Array Iterator", v = f.set, m = f.getterFor(h);
                n.exports = p(Array, "Array", function(g, y) {
                  v(this, {
                    type: h,
                    target: s(g),
                    // target
                    index: 0,
                    // next index
                    kind: y
                    // kind
                  });
                }, function() {
                  var g = m(this), y = g.target, S = g.kind, E = g.index++;
                  return !y || E >= y.length ? (g.target = void 0, { value: void 0, done: !0 }) : S == "keys" ? { value: E, done: !1 } : S == "values" ? { value: y[E], done: !1 } : { value: [E, y[E]], done: !1 };
                }, "values"), d.Arguments = d.Array, l("keys"), l("values"), l("entries");
              }
            ),
            /***/
            1249: (
              /***/
              function(n, u, o) {
                var s = o(2109), l = o(2092).map, d = o(1194), f = d("map");
                s({ target: "Array", proto: !0, forced: !f }, {
                  map: function(h) {
                    return l(this, h, arguments.length > 1 ? arguments[1] : void 0);
                  }
                });
              }
            ),
            /***/
            7042: (
              /***/
              function(n, u, o) {
                var s = o(2109), l = o(111), d = o(3157), f = o(1400), p = o(7466), h = o(5656), v = o(6135), m = o(5112), g = o(1194), y = g("slice"), S = m("species"), E = [].slice, A = Math.max;
                s({ target: "Array", proto: !0, forced: !y }, {
                  slice: function(L, j) {
                    var U = h(this), N = p(U.length), $ = f(L, N), H = f(j === void 0 ? N : j, N), k, z, Y;
                    if (d(U) && (k = U.constructor, typeof k == "function" && (k === Array || d(k.prototype)) ? k = void 0 : l(k) && (k = k[S], k === null && (k = void 0)), k === Array || k === void 0))
                      return E.call(U, $, H);
                    for (z = new (k === void 0 ? Array : k)(A(H - $, 0)), Y = 0; $ < H; $++, Y++) $ in U && v(z, Y, U[$]);
                    return z.length = Y, z;
                  }
                });
              }
            ),
            /***/
            561: (
              /***/
              function(n, u, o) {
                var s = o(2109), l = o(1400), d = o(9958), f = o(7466), p = o(7908), h = o(5417), v = o(6135), m = o(1194), g = m("splice"), y = Math.max, S = Math.min, E = 9007199254740991, A = "Maximum allowed length exceeded";
                s({ target: "Array", proto: !0, forced: !g }, {
                  splice: function(L, j) {
                    var U = p(this), N = f(U.length), $ = l(L, N), H = arguments.length, k, z, Y, W, re, X;
                    if (H === 0 ? k = z = 0 : H === 1 ? (k = 0, z = N - $) : (k = H - 2, z = S(y(d(j), 0), N - $)), N + k - z > E)
                      throw TypeError(A);
                    for (Y = h(U, z), W = 0; W < z; W++)
                      re = $ + W, re in U && v(Y, W, U[re]);
                    if (Y.length = z, k < z) {
                      for (W = $; W < N - z; W++)
                        re = W + z, X = W + k, re in U ? U[X] = U[re] : delete U[X];
                      for (W = N; W > N - z + k; W--) delete U[W - 1];
                    } else if (k > z)
                      for (W = N - z; W > $; W--)
                        re = W + z - 1, X = W + k - 1, re in U ? U[X] = U[re] : delete U[X];
                    for (W = 0; W < k; W++)
                      U[W + $] = arguments[W + 2];
                    return U.length = N - z + k, Y;
                  }
                });
              }
            ),
            /***/
            8309: (
              /***/
              function(n, u, o) {
                var s = o(9781), l = o(3070).f, d = Function.prototype, f = d.toString, p = /^\s*function ([^ (]*)/, h = "name";
                s && !(h in d) && l(d, h, {
                  configurable: !0,
                  get: function() {
                    try {
                      return f.call(this).match(p)[1];
                    } catch {
                      return "";
                    }
                  }
                });
              }
            ),
            /***/
            489: (
              /***/
              function(n, u, o) {
                var s = o(2109), l = o(7293), d = o(7908), f = o(9518), p = o(8544), h = l(function() {
                  f(1);
                });
                s({ target: "Object", stat: !0, forced: h, sham: !p }, {
                  getPrototypeOf: function(m) {
                    return f(d(m));
                  }
                });
              }
            ),
            /***/
            1539: (
              /***/
              function(n, u, o) {
                var s = o(1694), l = o(1320), d = o(288);
                s || l(Object.prototype, "toString", d, { unsafe: !0 });
              }
            ),
            /***/
            4916: (
              /***/
              function(n, u, o) {
                var s = o(2109), l = o(2261);
                s({ target: "RegExp", proto: !0, forced: /./.exec !== l }, {
                  exec: l
                });
              }
            ),
            /***/
            9714: (
              /***/
              function(n, u, o) {
                var s = o(1320), l = o(9670), d = o(7293), f = o(7066), p = "toString", h = RegExp.prototype, v = h[p], m = d(function() {
                  return v.call({ source: "a", flags: "b" }) != "/a/b";
                }), g = v.name != p;
                (m || g) && s(RegExp.prototype, p, function() {
                  var S = l(this), E = String(S.source), A = S.flags, w = String(A === void 0 && S instanceof RegExp && !("flags" in h) ? f.call(S) : A);
                  return "/" + E + "/" + w;
                }, { unsafe: !0 });
              }
            ),
            /***/
            8783: (
              /***/
              function(n, u, o) {
                var s = o(8710).charAt, l = o(9909), d = o(654), f = "String Iterator", p = l.set, h = l.getterFor(f);
                d(String, "String", function(v) {
                  p(this, {
                    type: f,
                    string: String(v),
                    index: 0
                  });
                }, function() {
                  var m = h(this), g = m.string, y = m.index, S;
                  return y >= g.length ? { value: void 0, done: !0 } : (S = s(g, y), m.index += S.length, { value: S, done: !1 });
                });
              }
            ),
            /***/
            4723: (
              /***/
              function(n, u, o) {
                var s = o(7007), l = o(9670), d = o(7466), f = o(4488), p = o(1530), h = o(7651);
                s("match", 1, function(v, m, g) {
                  return [
                    // `String.prototype.match` method
                    // https://tc39.es/ecma262/#sec-string.prototype.match
                    function(S) {
                      var E = f(this), A = S == null ? void 0 : S[v];
                      return A !== void 0 ? A.call(S, E) : new RegExp(S)[v](String(E));
                    },
                    // `RegExp.prototype[@@match]` method
                    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
                    function(y) {
                      var S = g(m, y, this);
                      if (S.done) return S.value;
                      var E = l(y), A = String(this);
                      if (!E.global) return h(E, A);
                      var w = E.unicode;
                      E.lastIndex = 0;
                      for (var L = [], j = 0, U; (U = h(E, A)) !== null; ) {
                        var N = String(U[0]);
                        L[j] = N, N === "" && (E.lastIndex = p(A, d(E.lastIndex), w)), j++;
                      }
                      return j === 0 ? null : L;
                    }
                  ];
                });
              }
            ),
            /***/
            5306: (
              /***/
              function(n, u, o) {
                var s = o(7007), l = o(9670), d = o(7466), f = o(9958), p = o(4488), h = o(1530), v = o(647), m = o(7651), g = Math.max, y = Math.min, S = function(E) {
                  return E === void 0 ? E : String(E);
                };
                s("replace", 2, function(E, A, w, L) {
                  var j = L.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE, U = L.REPLACE_KEEPS_$0, N = j ? "$" : "$0";
                  return [
                    // `String.prototype.replace` method
                    // https://tc39.es/ecma262/#sec-string.prototype.replace
                    function(H, k) {
                      var z = p(this), Y = H == null ? void 0 : H[E];
                      return Y !== void 0 ? Y.call(H, z, k) : A.call(String(z), H, k);
                    },
                    // `RegExp.prototype[@@replace]` method
                    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
                    function($, H) {
                      if (!j && U || typeof H == "string" && H.indexOf(N) === -1) {
                        var k = w(A, $, this, H);
                        if (k.done) return k.value;
                      }
                      var z = l($), Y = String(this), W = typeof H == "function";
                      W || (H = String(H));
                      var re = z.global;
                      if (re) {
                        var X = z.unicode;
                        z.lastIndex = 0;
                      }
                      for (var he = []; ; ) {
                        var fe = m(z, Y);
                        if (fe === null || (he.push(fe), !re)) break;
                        var Te = String(fe[0]);
                        Te === "" && (z.lastIndex = h(Y, d(z.lastIndex), X));
                      }
                      for (var Re = "", xe = 0, Ne = 0; Ne < he.length; Ne++) {
                        fe = he[Ne];
                        for (var Ue = String(fe[0]), Me = g(y(f(fe.index), Y.length), 0), be = [], O = 1; O < fe.length; O++) be.push(S(fe[O]));
                        var R = fe.groups;
                        if (W) {
                          var T = [Ue].concat(be, Me, Y);
                          R !== void 0 && T.push(R);
                          var D = String(H.apply(void 0, T));
                        } else
                          D = v(Ue, Y, Me, be, R, H);
                        Me >= xe && (Re += Y.slice(xe, Me) + D, xe = Me + Ue.length);
                      }
                      return Re + Y.slice(xe);
                    }
                  ];
                });
              }
            ),
            /***/
            3123: (
              /***/
              function(n, u, o) {
                var s = o(7007), l = o(7850), d = o(9670), f = o(4488), p = o(6707), h = o(1530), v = o(7466), m = o(7651), g = o(2261), y = o(7293), S = [].push, E = Math.min, A = 4294967295, w = !y(function() {
                  return !RegExp(A, "y");
                });
                s("split", 2, function(L, j, U) {
                  var N;
                  return "abbc".split(/(b)*/)[1] == "c" || // eslint-disable-next-line regexp/no-empty-group -- required for testing
                  "test".split(/(?:)/, -1).length != 4 || "ab".split(/(?:ab)*/).length != 2 || ".".split(/(.?)(.?)/).length != 4 || // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
                  ".".split(/()()/).length > 1 || "".split(/.?/).length ? N = function($, H) {
                    var k = String(f(this)), z = H === void 0 ? A : H >>> 0;
                    if (z === 0) return [];
                    if ($ === void 0) return [k];
                    if (!l($))
                      return j.call(k, $, z);
                    for (var Y = [], W = ($.ignoreCase ? "i" : "") + ($.multiline ? "m" : "") + ($.unicode ? "u" : "") + ($.sticky ? "y" : ""), re = 0, X = new RegExp($.source, W + "g"), he, fe, Te; (he = g.call(X, k)) && (fe = X.lastIndex, !(fe > re && (Y.push(k.slice(re, he.index)), he.length > 1 && he.index < k.length && S.apply(Y, he.slice(1)), Te = he[0].length, re = fe, Y.length >= z))); )
                      X.lastIndex === he.index && X.lastIndex++;
                    return re === k.length ? (Te || !X.test("")) && Y.push("") : Y.push(k.slice(re)), Y.length > z ? Y.slice(0, z) : Y;
                  } : "0".split(void 0, 0).length ? N = function($, H) {
                    return $ === void 0 && H === 0 ? [] : j.call(this, $, H);
                  } : N = j, [
                    // `String.prototype.split` method
                    // https://tc39.es/ecma262/#sec-string.prototype.split
                    function(H, k) {
                      var z = f(this), Y = H == null ? void 0 : H[L];
                      return Y !== void 0 ? Y.call(H, z, k) : N.call(String(z), H, k);
                    },
                    // `RegExp.prototype[@@split]` method
                    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
                    //
                    // NOTE: This cannot be properly polyfilled in engines that don't support
                    // the 'y' flag.
                    function($, H) {
                      var k = U(N, $, this, H, N !== j);
                      if (k.done) return k.value;
                      var z = d($), Y = String(this), W = p(z, RegExp), re = z.unicode, X = (z.ignoreCase ? "i" : "") + (z.multiline ? "m" : "") + (z.unicode ? "u" : "") + (w ? "y" : "g"), he = new W(w ? z : "^(?:" + z.source + ")", X), fe = H === void 0 ? A : H >>> 0;
                      if (fe === 0) return [];
                      if (Y.length === 0) return m(he, Y) === null ? [Y] : [];
                      for (var Te = 0, Re = 0, xe = []; Re < Y.length; ) {
                        he.lastIndex = w ? Re : 0;
                        var Ne = m(he, w ? Y : Y.slice(Re)), Ue;
                        if (Ne === null || (Ue = E(v(he.lastIndex + (w ? 0 : Re)), Y.length)) === Te)
                          Re = h(Y, Re, re);
                        else {
                          if (xe.push(Y.slice(Te, Re)), xe.length === fe) return xe;
                          for (var Me = 1; Me <= Ne.length - 1; Me++)
                            if (xe.push(Ne[Me]), xe.length === fe) return xe;
                          Re = Te = Ue;
                        }
                      }
                      return xe.push(Y.slice(Te)), xe;
                    }
                  ];
                }, !w);
              }
            ),
            /***/
            3210: (
              /***/
              function(n, u, o) {
                var s = o(2109), l = o(3111).trim, d = o(6091);
                s({ target: "String", proto: !0, forced: d("trim") }, {
                  trim: function() {
                    return l(this);
                  }
                });
              }
            ),
            /***/
            2990: (
              /***/
              function(n, u, o) {
                var s = o(260), l = o(1048), d = s.aTypedArray, f = s.exportTypedArrayMethod;
                f("copyWithin", function(h, v) {
                  return l.call(d(this), h, v, arguments.length > 2 ? arguments[2] : void 0);
                });
              }
            ),
            /***/
            8927: (
              /***/
              function(n, u, o) {
                var s = o(260), l = o(2092).every, d = s.aTypedArray, f = s.exportTypedArrayMethod;
                f("every", function(h) {
                  return l(d(this), h, arguments.length > 1 ? arguments[1] : void 0);
                });
              }
            ),
            /***/
            3105: (
              /***/
              function(n, u, o) {
                var s = o(260), l = o(1285), d = s.aTypedArray, f = s.exportTypedArrayMethod;
                f("fill", function(h) {
                  return l.apply(d(this), arguments);
                });
              }
            ),
            /***/
            5035: (
              /***/
              function(n, u, o) {
                var s = o(260), l = o(2092).filter, d = o(3074), f = s.aTypedArray, p = s.exportTypedArrayMethod;
                p("filter", function(v) {
                  var m = l(f(this), v, arguments.length > 1 ? arguments[1] : void 0);
                  return d(this, m);
                });
              }
            ),
            /***/
            7174: (
              /***/
              function(n, u, o) {
                var s = o(260), l = o(2092).findIndex, d = s.aTypedArray, f = s.exportTypedArrayMethod;
                f("findIndex", function(h) {
                  return l(d(this), h, arguments.length > 1 ? arguments[1] : void 0);
                });
              }
            ),
            /***/
            4345: (
              /***/
              function(n, u, o) {
                var s = o(260), l = o(2092).find, d = s.aTypedArray, f = s.exportTypedArrayMethod;
                f("find", function(h) {
                  return l(d(this), h, arguments.length > 1 ? arguments[1] : void 0);
                });
              }
            ),
            /***/
            2846: (
              /***/
              function(n, u, o) {
                var s = o(260), l = o(2092).forEach, d = s.aTypedArray, f = s.exportTypedArrayMethod;
                f("forEach", function(h) {
                  l(d(this), h, arguments.length > 1 ? arguments[1] : void 0);
                });
              }
            ),
            /***/
            4731: (
              /***/
              function(n, u, o) {
                var s = o(260), l = o(1318).includes, d = s.aTypedArray, f = s.exportTypedArrayMethod;
                f("includes", function(h) {
                  return l(d(this), h, arguments.length > 1 ? arguments[1] : void 0);
                });
              }
            ),
            /***/
            7209: (
              /***/
              function(n, u, o) {
                var s = o(260), l = o(1318).indexOf, d = s.aTypedArray, f = s.exportTypedArrayMethod;
                f("indexOf", function(h) {
                  return l(d(this), h, arguments.length > 1 ? arguments[1] : void 0);
                });
              }
            ),
            /***/
            6319: (
              /***/
              function(n, u, o) {
                var s = o(7854), l = o(260), d = o(6992), f = o(5112), p = f("iterator"), h = s.Uint8Array, v = d.values, m = d.keys, g = d.entries, y = l.aTypedArray, S = l.exportTypedArrayMethod, E = h && h.prototype[p], A = !!E && (E.name == "values" || E.name == null), w = function() {
                  return v.call(y(this));
                };
                S("entries", function() {
                  return g.call(y(this));
                }), S("keys", function() {
                  return m.call(y(this));
                }), S("values", w, !A), S(p, w, !A);
              }
            ),
            /***/
            8867: (
              /***/
              function(n, u, o) {
                var s = o(260), l = s.aTypedArray, d = s.exportTypedArrayMethod, f = [].join;
                d("join", function(h) {
                  return f.apply(l(this), arguments);
                });
              }
            ),
            /***/
            7789: (
              /***/
              function(n, u, o) {
                var s = o(260), l = o(6583), d = s.aTypedArray, f = s.exportTypedArrayMethod;
                f("lastIndexOf", function(h) {
                  return l.apply(d(this), arguments);
                });
              }
            ),
            /***/
            3739: (
              /***/
              function(n, u, o) {
                var s = o(260), l = o(2092).map, d = o(6707), f = s.aTypedArray, p = s.aTypedArrayConstructor, h = s.exportTypedArrayMethod;
                h("map", function(m) {
                  return l(f(this), m, arguments.length > 1 ? arguments[1] : void 0, function(g, y) {
                    return new (p(d(g, g.constructor)))(y);
                  });
                });
              }
            ),
            /***/
            4483: (
              /***/
              function(n, u, o) {
                var s = o(260), l = o(3671).right, d = s.aTypedArray, f = s.exportTypedArrayMethod;
                f("reduceRight", function(h) {
                  return l(d(this), h, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
                });
              }
            ),
            /***/
            9368: (
              /***/
              function(n, u, o) {
                var s = o(260), l = o(3671).left, d = s.aTypedArray, f = s.exportTypedArrayMethod;
                f("reduce", function(h) {
                  return l(d(this), h, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
                });
              }
            ),
            /***/
            2056: (
              /***/
              function(n, u, o) {
                var s = o(260), l = s.aTypedArray, d = s.exportTypedArrayMethod, f = Math.floor;
                d("reverse", function() {
                  for (var h = this, v = l(h).length, m = f(v / 2), g = 0, y; g < m; )
                    y = h[g], h[g++] = h[--v], h[v] = y;
                  return h;
                });
              }
            ),
            /***/
            3462: (
              /***/
              function(n, u, o) {
                var s = o(260), l = o(7466), d = o(4590), f = o(7908), p = o(7293), h = s.aTypedArray, v = s.exportTypedArrayMethod, m = p(function() {
                  new Int8Array(1).set({});
                });
                v("set", function(y) {
                  h(this);
                  var S = d(arguments.length > 1 ? arguments[1] : void 0, 1), E = this.length, A = f(y), w = l(A.length), L = 0;
                  if (w + S > E) throw RangeError("Wrong length");
                  for (; L < w; ) this[S + L] = A[L++];
                }, m);
              }
            ),
            /***/
            678: (
              /***/
              function(n, u, o) {
                var s = o(260), l = o(6707), d = o(7293), f = s.aTypedArray, p = s.aTypedArrayConstructor, h = s.exportTypedArrayMethod, v = [].slice, m = d(function() {
                  new Int8Array(1).slice();
                });
                h("slice", function(y, S) {
                  for (var E = v.call(f(this), y, S), A = l(this, this.constructor), w = 0, L = E.length, j = new (p(A))(L); L > w; ) j[w] = E[w++];
                  return j;
                }, m);
              }
            ),
            /***/
            7462: (
              /***/
              function(n, u, o) {
                var s = o(260), l = o(2092).some, d = s.aTypedArray, f = s.exportTypedArrayMethod;
                f("some", function(h) {
                  return l(d(this), h, arguments.length > 1 ? arguments[1] : void 0);
                });
              }
            ),
            /***/
            3824: (
              /***/
              function(n, u, o) {
                var s = o(260), l = s.aTypedArray, d = s.exportTypedArrayMethod, f = [].sort;
                d("sort", function(h) {
                  return f.call(l(this), h);
                });
              }
            ),
            /***/
            5021: (
              /***/
              function(n, u, o) {
                var s = o(260), l = o(7466), d = o(1400), f = o(6707), p = s.aTypedArray, h = s.exportTypedArrayMethod;
                h("subarray", function(m, g) {
                  var y = p(this), S = y.length, E = d(m, S);
                  return new (f(y, y.constructor))(
                    y.buffer,
                    y.byteOffset + E * y.BYTES_PER_ELEMENT,
                    l((g === void 0 ? S : d(g, S)) - E)
                  );
                });
              }
            ),
            /***/
            2974: (
              /***/
              function(n, u, o) {
                var s = o(7854), l = o(260), d = o(7293), f = s.Int8Array, p = l.aTypedArray, h = l.exportTypedArrayMethod, v = [].toLocaleString, m = [].slice, g = !!f && d(function() {
                  v.call(new f(1));
                }), y = d(function() {
                  return [1, 2].toLocaleString() != new f([1, 2]).toLocaleString();
                }) || !d(function() {
                  f.prototype.toLocaleString.call([1, 2]);
                });
                h("toLocaleString", function() {
                  return v.apply(g ? m.call(p(this)) : p(this), arguments);
                }, y);
              }
            ),
            /***/
            5016: (
              /***/
              function(n, u, o) {
                var s = o(260).exportTypedArrayMethod, l = o(7293), d = o(7854), f = d.Uint8Array, p = f && f.prototype || {}, h = [].toString, v = [].join;
                l(function() {
                  h.call({});
                }) && (h = function() {
                  return v.call(this);
                });
                var m = p.toString != h;
                s("toString", h, m);
              }
            ),
            /***/
            2472: (
              /***/
              function(n, u, o) {
                var s = o(9843);
                s("Uint8", function(l) {
                  return function(f, p, h) {
                    return l(this, f, p, h);
                  };
                });
              }
            ),
            /***/
            4747: (
              /***/
              function(n, u, o) {
                var s = o(7854), l = o(8324), d = o(8533), f = o(8880);
                for (var p in l) {
                  var h = s[p], v = h && h.prototype;
                  if (v && v.forEach !== d) try {
                    f(v, "forEach", d);
                  } catch {
                    v.forEach = d;
                  }
                }
              }
            ),
            /***/
            3948: (
              /***/
              function(n, u, o) {
                var s = o(7854), l = o(8324), d = o(6992), f = o(8880), p = o(5112), h = p("iterator"), v = p("toStringTag"), m = d.values;
                for (var g in l) {
                  var y = s[g], S = y && y.prototype;
                  if (S) {
                    if (S[h] !== m) try {
                      f(S, h, m);
                    } catch {
                      S[h] = m;
                    }
                    if (S[v] || f(S, v, g), l[g]) {
                      for (var E in d)
                        if (S[E] !== d[E]) try {
                          f(S, E, d[E]);
                        } catch {
                          S[E] = d[E];
                        }
                    }
                  }
                }
              }
            ),
            /***/
            1637: (
              /***/
              function(n, u, o) {
                o(6992);
                var s = o(2109), l = o(5005), d = o(590), f = o(1320), p = o(2248), h = o(8003), v = o(4994), m = o(9909), g = o(5787), y = o(6656), S = o(9974), E = o(648), A = o(9670), w = o(111), L = o(30), j = o(9114), U = o(8554), N = o(1246), $ = o(5112), H = l("fetch"), k = l("Headers"), z = $("iterator"), Y = "URLSearchParams", W = Y + "Iterator", re = m.set, X = m.getterFor(Y), he = m.getterFor(W), fe = /\+/g, Te = Array(4), Re = function(M) {
                  return Te[M - 1] || (Te[M - 1] = RegExp("((?:%[\\da-f]{2}){" + M + "})", "gi"));
                }, xe = function(M) {
                  try {
                    return decodeURIComponent(M);
                  } catch {
                    return M;
                  }
                }, Ne = function(M) {
                  var B = M.replace(fe, " "), V = 4;
                  try {
                    return decodeURIComponent(B);
                  } catch {
                    for (; V; )
                      B = B.replace(Re(V--), xe);
                    return B;
                  }
                }, Ue = /[!'()~]|%20/g, Me = {
                  "!": "%21",
                  "'": "%27",
                  "(": "%28",
                  ")": "%29",
                  "~": "%7E",
                  "%20": "+"
                }, be = function(M) {
                  return Me[M];
                }, O = function(M) {
                  return encodeURIComponent(M).replace(Ue, be);
                }, R = function(M, B) {
                  if (B)
                    for (var V = B.split("&"), Q = 0, Z, J; Q < V.length; )
                      Z = V[Q++], Z.length && (J = Z.split("="), M.push({
                        key: Ne(J.shift()),
                        value: Ne(J.join("="))
                      }));
                }, T = function(M) {
                  this.entries.length = 0, R(this.entries, M);
                }, D = function(M, B) {
                  if (M < B) throw TypeError("Not enough arguments");
                }, b = v(function(B, V) {
                  re(this, {
                    type: W,
                    iterator: U(X(B).entries),
                    kind: V
                  });
                }, "Iterator", function() {
                  var B = he(this), V = B.kind, Q = B.iterator.next(), Z = Q.value;
                  return Q.done || (Q.value = V === "keys" ? Z.key : V === "values" ? Z.value : [Z.key, Z.value]), Q;
                }), x = function() {
                  g(this, x, Y);
                  var B = arguments.length > 0 ? arguments[0] : void 0, V = this, Q = [], Z, J, q, te, ie, ge, Ce, Ke, qe;
                  if (re(V, {
                    type: Y,
                    entries: Q,
                    updateURL: function() {
                    },
                    updateSearchParams: T
                  }), B !== void 0)
                    if (w(B))
                      if (Z = N(B), typeof Z == "function")
                        for (J = Z.call(B), q = J.next; !(te = q.call(J)).done; ) {
                          if (ie = U(A(te.value)), ge = ie.next, (Ce = ge.call(ie)).done || (Ke = ge.call(ie)).done || !ge.call(ie).done) throw TypeError("Expected sequence with length 2");
                          Q.push({ key: Ce.value + "", value: Ke.value + "" });
                        }
                      else for (qe in B) y(B, qe) && Q.push({ key: qe, value: B[qe] + "" });
                    else
                      R(Q, typeof B == "string" ? B.charAt(0) === "?" ? B.slice(1) : B : B + "");
                }, P = x.prototype;
                p(P, {
                  // `URLSearchParams.prototype.append` method
                  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
                  append: function(B, V) {
                    D(arguments.length, 2);
                    var Q = X(this);
                    Q.entries.push({ key: B + "", value: V + "" }), Q.updateURL();
                  },
                  // `URLSearchParams.prototype.delete` method
                  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
                  delete: function(M) {
                    D(arguments.length, 1);
                    for (var B = X(this), V = B.entries, Q = M + "", Z = 0; Z < V.length; )
                      V[Z].key === Q ? V.splice(Z, 1) : Z++;
                    B.updateURL();
                  },
                  // `URLSearchParams.prototype.get` method
                  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
                  get: function(B) {
                    D(arguments.length, 1);
                    for (var V = X(this).entries, Q = B + "", Z = 0; Z < V.length; Z++)
                      if (V[Z].key === Q) return V[Z].value;
                    return null;
                  },
                  // `URLSearchParams.prototype.getAll` method
                  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
                  getAll: function(B) {
                    D(arguments.length, 1);
                    for (var V = X(this).entries, Q = B + "", Z = [], J = 0; J < V.length; J++)
                      V[J].key === Q && Z.push(V[J].value);
                    return Z;
                  },
                  // `URLSearchParams.prototype.has` method
                  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
                  has: function(B) {
                    D(arguments.length, 1);
                    for (var V = X(this).entries, Q = B + "", Z = 0; Z < V.length; )
                      if (V[Z++].key === Q) return !0;
                    return !1;
                  },
                  // `URLSearchParams.prototype.set` method
                  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
                  set: function(B, V) {
                    D(arguments.length, 1);
                    for (var Q = X(this), Z = Q.entries, J = !1, q = B + "", te = V + "", ie = 0, ge; ie < Z.length; ie++)
                      ge = Z[ie], ge.key === q && (J ? Z.splice(ie--, 1) : (J = !0, ge.value = te));
                    J || Z.push({ key: q, value: te }), Q.updateURL();
                  },
                  // `URLSearchParams.prototype.sort` method
                  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
                  sort: function() {
                    var B = X(this), V = B.entries, Q = V.slice(), Z, J, q;
                    for (V.length = 0, q = 0; q < Q.length; q++) {
                      for (Z = Q[q], J = 0; J < q; J++)
                        if (V[J].key > Z.key) {
                          V.splice(J, 0, Z);
                          break;
                        }
                      J === q && V.push(Z);
                    }
                    B.updateURL();
                  },
                  // `URLSearchParams.prototype.forEach` method
                  forEach: function(B) {
                    for (var V = X(this).entries, Q = S(B, arguments.length > 1 ? arguments[1] : void 0, 3), Z = 0, J; Z < V.length; )
                      J = V[Z++], Q(J.value, J.key, this);
                  },
                  // `URLSearchParams.prototype.keys` method
                  keys: function() {
                    return new b(this, "keys");
                  },
                  // `URLSearchParams.prototype.values` method
                  values: function() {
                    return new b(this, "values");
                  },
                  // `URLSearchParams.prototype.entries` method
                  entries: function() {
                    return new b(this, "entries");
                  }
                }, { enumerable: !0 }), f(P, z, P.entries), f(P, "toString", function() {
                  for (var B = X(this).entries, V = [], Q = 0, Z; Q < B.length; )
                    Z = B[Q++], V.push(O(Z.key) + "=" + O(Z.value));
                  return V.join("&");
                }, { enumerable: !0 }), h(x, Y), s({ global: !0, forced: !d }, {
                  URLSearchParams: x
                }), !d && typeof H == "function" && typeof k == "function" && s({ global: !0, enumerable: !0, forced: !0 }, {
                  fetch: function(B) {
                    var V = [B], Q, Z, J;
                    return arguments.length > 1 && (Q = arguments[1], w(Q) && (Z = Q.body, E(Z) === Y && (J = Q.headers ? new k(Q.headers) : new k(), J.has("content-type") || J.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"), Q = L(Q, {
                      body: j(0, String(Z)),
                      headers: j(0, J)
                    }))), V.push(Q)), H.apply(this, V);
                  }
                }), n.exports = {
                  URLSearchParams: x,
                  getState: X
                };
              }
            ),
            /***/
            285: (
              /***/
              function(n, u, o) {
                o(8783);
                var s = o(2109), l = o(9781), d = o(590), f = o(7854), p = o(6048), h = o(1320), v = o(5787), m = o(6656), g = o(1574), y = o(8457), S = o(8710).codeAt, E = o(3197), A = o(8003), w = o(1637), L = o(9909), j = f.URL, U = w.URLSearchParams, N = w.getState, $ = L.set, H = L.getterFor("URL"), k = Math.floor, z = Math.pow, Y = "Invalid authority", W = "Invalid scheme", re = "Invalid host", X = "Invalid port", he = /[A-Za-z]/, fe = /[\d+-.A-Za-z]/, Te = /\d/, Re = /^(0x|0X)/, xe = /^[0-7]+$/, Ne = /^\d+$/, Ue = /^[\dA-Fa-f]+$/, Me = /[\u0000\t\u000A\u000D #%/:?@[\\]]/, be = /[\u0000\t\u000A\u000D #/:?@[\\]]/, O = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g, R = /[\t\u000A\u000D]/g, T, D = function(I, se) {
                  var oe, pe, me;
                  if (se.charAt(0) == "[") {
                    if (se.charAt(se.length - 1) != "]" || (oe = x(se.slice(1, -1)), !oe)) return re;
                    I.host = oe;
                  } else if (te(I)) {
                    if (se = E(se), Me.test(se) || (oe = b(se), oe === null)) return re;
                    I.host = oe;
                  } else {
                    if (be.test(se)) return re;
                    for (oe = "", pe = y(se), me = 0; me < pe.length; me++)
                      oe += J(pe[me], B);
                    I.host = oe;
                  }
                }, b = function(I) {
                  var se = I.split("."), oe, pe, me, He, Pe, Qe, at;
                  if (se.length && se[se.length - 1] == "" && se.pop(), oe = se.length, oe > 4) return I;
                  for (pe = [], me = 0; me < oe; me++) {
                    if (He = se[me], He == "") return I;
                    if (Pe = 10, He.length > 1 && He.charAt(0) == "0" && (Pe = Re.test(He) ? 16 : 8, He = He.slice(Pe == 8 ? 1 : 2)), He === "")
                      Qe = 0;
                    else {
                      if (!(Pe == 10 ? Ne : Pe == 8 ? xe : Ue).test(He)) return I;
                      Qe = parseInt(He, Pe);
                    }
                    pe.push(Qe);
                  }
                  for (me = 0; me < oe; me++)
                    if (Qe = pe[me], me == oe - 1) {
                      if (Qe >= z(256, 5 - oe)) return null;
                    } else if (Qe > 255) return null;
                  for (at = pe.pop(), me = 0; me < pe.length; me++)
                    at += pe[me] * z(256, 3 - me);
                  return at;
                }, x = function(I) {
                  var se = [0, 0, 0, 0, 0, 0, 0, 0], oe = 0, pe = null, me = 0, He, Pe, Qe, at, it, Ft, ve, vt = function() {
                    return I.charAt(me);
                  };
                  if (vt() == ":") {
                    if (I.charAt(1) != ":") return;
                    me += 2, oe++, pe = oe;
                  }
                  for (; vt(); ) {
                    if (oe == 8) return;
                    if (vt() == ":") {
                      if (pe !== null) return;
                      me++, oe++, pe = oe;
                      continue;
                    }
                    for (He = Pe = 0; Pe < 4 && Ue.test(vt()); )
                      He = He * 16 + parseInt(vt(), 16), me++, Pe++;
                    if (vt() == ".") {
                      if (Pe == 0 || (me -= Pe, oe > 6)) return;
                      for (Qe = 0; vt(); ) {
                        if (at = null, Qe > 0)
                          if (vt() == "." && Qe < 4) me++;
                          else return;
                        if (!Te.test(vt())) return;
                        for (; Te.test(vt()); ) {
                          if (it = parseInt(vt(), 10), at === null) at = it;
                          else {
                            if (at == 0) return;
                            at = at * 10 + it;
                          }
                          if (at > 255) return;
                          me++;
                        }
                        se[oe] = se[oe] * 256 + at, Qe++, (Qe == 2 || Qe == 4) && oe++;
                      }
                      if (Qe != 4) return;
                      break;
                    } else if (vt() == ":") {
                      if (me++, !vt()) return;
                    } else if (vt()) return;
                    se[oe++] = He;
                  }
                  if (pe !== null)
                    for (Ft = oe - pe, oe = 7; oe != 0 && Ft > 0; )
                      ve = se[oe], se[oe--] = se[pe + Ft - 1], se[pe + --Ft] = ve;
                  else if (oe != 8) return;
                  return se;
                }, P = function(I) {
                  for (var se = null, oe = 1, pe = null, me = 0, He = 0; He < 8; He++)
                    I[He] !== 0 ? (me > oe && (se = pe, oe = me), pe = null, me = 0) : (pe === null && (pe = He), ++me);
                  return me > oe && (se = pe, oe = me), se;
                }, M = function(I) {
                  var se, oe, pe, me;
                  if (typeof I == "number") {
                    for (se = [], oe = 0; oe < 4; oe++)
                      se.unshift(I % 256), I = k(I / 256);
                    return se.join(".");
                  } else if (typeof I == "object") {
                    for (se = "", pe = P(I), oe = 0; oe < 8; oe++)
                      me && I[oe] === 0 || (me && (me = !1), pe === oe ? (se += oe ? ":" : "::", me = !0) : (se += I[oe].toString(16), oe < 7 && (se += ":")));
                    return "[" + se + "]";
                  }
                  return I;
                }, B = {}, V = g({}, B, {
                  " ": 1,
                  '"': 1,
                  "<": 1,
                  ">": 1,
                  "`": 1
                }), Q = g({}, V, {
                  "#": 1,
                  "?": 1,
                  "{": 1,
                  "}": 1
                }), Z = g({}, Q, {
                  "/": 1,
                  ":": 1,
                  ";": 1,
                  "=": 1,
                  "@": 1,
                  "[": 1,
                  "\\": 1,
                  "]": 1,
                  "^": 1,
                  "|": 1
                }), J = function(I, se) {
                  var oe = S(I, 0);
                  return oe > 32 && oe < 127 && !m(se, I) ? I : encodeURIComponent(I);
                }, q = {
                  ftp: 21,
                  file: null,
                  http: 80,
                  https: 443,
                  ws: 80,
                  wss: 443
                }, te = function(I) {
                  return m(q, I.scheme);
                }, ie = function(I) {
                  return I.username != "" || I.password != "";
                }, ge = function(I) {
                  return !I.host || I.cannotBeABaseURL || I.scheme == "file";
                }, Ce = function(I, se) {
                  var oe;
                  return I.length == 2 && he.test(I.charAt(0)) && ((oe = I.charAt(1)) == ":" || !se && oe == "|");
                }, Ke = function(I) {
                  var se;
                  return I.length > 1 && Ce(I.slice(0, 2)) && (I.length == 2 || (se = I.charAt(2)) === "/" || se === "\\" || se === "?" || se === "#");
                }, qe = function(I) {
                  var se = I.path, oe = se.length;
                  oe && (I.scheme != "file" || oe != 1 || !Ce(se[0], !0)) && se.pop();
                }, Ze = function(I) {
                  return I === "." || I.toLowerCase() === "%2e";
                }, G = function(I) {
                  return I = I.toLowerCase(), I === ".." || I === "%2e." || I === ".%2e" || I === "%2e%2e";
                }, K = {}, ee = {}, ce = {}, Se = {}, Fe = {}, Ae = {}, Ee = {}, Ve = {}, Oe = {}, we = {}, Ie = {}, $e = {}, je = {}, tt = {}, zt = {}, Fn = {}, Bt = {}, Gt = {}, ir = {}, rn = {}, bt = {}, Wt = function(I, se, oe, pe) {
                  var me = oe || K, He = 0, Pe = "", Qe = !1, at = !1, it = !1, Ft, ve, vt, qt;
                  for (oe || (I.scheme = "", I.username = "", I.password = "", I.host = null, I.port = null, I.path = [], I.query = null, I.fragment = null, I.cannotBeABaseURL = !1, se = se.replace(O, "")), se = se.replace(R, ""), Ft = y(se); He <= Ft.length; ) {
                    switch (ve = Ft[He], me) {
                      case K:
                        if (ve && he.test(ve))
                          Pe += ve.toLowerCase(), me = ee;
                        else {
                          if (oe)
                            return W;
                          me = ce;
                          continue;
                        }
                        break;
                      case ee:
                        if (ve && (fe.test(ve) || ve == "+" || ve == "-" || ve == "."))
                          Pe += ve.toLowerCase();
                        else if (ve == ":") {
                          if (oe && (te(I) != m(q, Pe) || Pe == "file" && (ie(I) || I.port !== null) || I.scheme == "file" && !I.host)) return;
                          if (I.scheme = Pe, oe) {
                            te(I) && q[I.scheme] == I.port && (I.port = null);
                            return;
                          }
                          Pe = "", I.scheme == "file" ? me = tt : te(I) && pe && pe.scheme == I.scheme ? me = Se : te(I) ? me = Ve : Ft[He + 1] == "/" ? (me = Fe, He++) : (I.cannotBeABaseURL = !0, I.path.push(""), me = ir);
                        } else {
                          if (oe)
                            return W;
                          Pe = "", me = ce, He = 0;
                          continue;
                        }
                        break;
                      case ce:
                        if (!pe || pe.cannotBeABaseURL && ve != "#") return W;
                        if (pe.cannotBeABaseURL && ve == "#") {
                          I.scheme = pe.scheme, I.path = pe.path.slice(), I.query = pe.query, I.fragment = "", I.cannotBeABaseURL = !0, me = bt;
                          break;
                        }
                        me = pe.scheme == "file" ? tt : Ae;
                        continue;
                      case Se:
                        if (ve == "/" && Ft[He + 1] == "/")
                          me = Oe, He++;
                        else {
                          me = Ae;
                          continue;
                        }
                        break;
                      case Fe:
                        if (ve == "/") {
                          me = we;
                          break;
                        } else {
                          me = Gt;
                          continue;
                        }
                      case Ae:
                        if (I.scheme = pe.scheme, ve == T)
                          I.username = pe.username, I.password = pe.password, I.host = pe.host, I.port = pe.port, I.path = pe.path.slice(), I.query = pe.query;
                        else if (ve == "/" || ve == "\\" && te(I))
                          me = Ee;
                        else if (ve == "?")
                          I.username = pe.username, I.password = pe.password, I.host = pe.host, I.port = pe.port, I.path = pe.path.slice(), I.query = "", me = rn;
                        else if (ve == "#")
                          I.username = pe.username, I.password = pe.password, I.host = pe.host, I.port = pe.port, I.path = pe.path.slice(), I.query = pe.query, I.fragment = "", me = bt;
                        else {
                          I.username = pe.username, I.password = pe.password, I.host = pe.host, I.port = pe.port, I.path = pe.path.slice(), I.path.pop(), me = Gt;
                          continue;
                        }
                        break;
                      case Ee:
                        if (te(I) && (ve == "/" || ve == "\\"))
                          me = Oe;
                        else if (ve == "/")
                          me = we;
                        else {
                          I.username = pe.username, I.password = pe.password, I.host = pe.host, I.port = pe.port, me = Gt;
                          continue;
                        }
                        break;
                      case Ve:
                        if (me = Oe, ve != "/" || Pe.charAt(He + 1) != "/") continue;
                        He++;
                        break;
                      case Oe:
                        if (ve != "/" && ve != "\\") {
                          me = we;
                          continue;
                        }
                        break;
                      case we:
                        if (ve == "@") {
                          Qe && (Pe = "%40" + Pe), Qe = !0, vt = y(Pe);
                          for (var lr = 0; lr < vt.length; lr++) {
                            var Wr = vt[lr];
                            if (Wr == ":" && !it) {
                              it = !0;
                              continue;
                            }
                            var Wn = J(Wr, Z);
                            it ? I.password += Wn : I.username += Wn;
                          }
                          Pe = "";
                        } else if (ve == T || ve == "/" || ve == "?" || ve == "#" || ve == "\\" && te(I)) {
                          if (Qe && Pe == "") return Y;
                          He -= y(Pe).length + 1, Pe = "", me = Ie;
                        } else Pe += ve;
                        break;
                      case Ie:
                      case $e:
                        if (oe && I.scheme == "file") {
                          me = Fn;
                          continue;
                        } else if (ve == ":" && !at) {
                          if (Pe == "") return re;
                          if (qt = D(I, Pe), qt) return qt;
                          if (Pe = "", me = je, oe == $e) return;
                        } else if (ve == T || ve == "/" || ve == "?" || ve == "#" || ve == "\\" && te(I)) {
                          if (te(I) && Pe == "") return re;
                          if (oe && Pe == "" && (ie(I) || I.port !== null)) return;
                          if (qt = D(I, Pe), qt) return qt;
                          if (Pe = "", me = Bt, oe) return;
                          continue;
                        } else
                          ve == "[" ? at = !0 : ve == "]" && (at = !1), Pe += ve;
                        break;
                      case je:
                        if (Te.test(ve))
                          Pe += ve;
                        else if (ve == T || ve == "/" || ve == "?" || ve == "#" || ve == "\\" && te(I) || oe) {
                          if (Pe != "") {
                            var ur = parseInt(Pe, 10);
                            if (ur > 65535) return X;
                            I.port = te(I) && ur === q[I.scheme] ? null : ur, Pe = "";
                          }
                          if (oe) return;
                          me = Bt;
                          continue;
                        } else return X;
                        break;
                      case tt:
                        if (I.scheme = "file", ve == "/" || ve == "\\") me = zt;
                        else if (pe && pe.scheme == "file")
                          if (ve == T)
                            I.host = pe.host, I.path = pe.path.slice(), I.query = pe.query;
                          else if (ve == "?")
                            I.host = pe.host, I.path = pe.path.slice(), I.query = "", me = rn;
                          else if (ve == "#")
                            I.host = pe.host, I.path = pe.path.slice(), I.query = pe.query, I.fragment = "", me = bt;
                          else {
                            Ke(Ft.slice(He).join("")) || (I.host = pe.host, I.path = pe.path.slice(), qe(I)), me = Gt;
                            continue;
                          }
                        else {
                          me = Gt;
                          continue;
                        }
                        break;
                      case zt:
                        if (ve == "/" || ve == "\\") {
                          me = Fn;
                          break;
                        }
                        pe && pe.scheme == "file" && !Ke(Ft.slice(He).join("")) && (Ce(pe.path[0], !0) ? I.path.push(pe.path[0]) : I.host = pe.host), me = Gt;
                        continue;
                      case Fn:
                        if (ve == T || ve == "/" || ve == "\\" || ve == "?" || ve == "#") {
                          if (!oe && Ce(Pe))
                            me = Gt;
                          else if (Pe == "") {
                            if (I.host = "", oe) return;
                            me = Bt;
                          } else {
                            if (qt = D(I, Pe), qt) return qt;
                            if (I.host == "localhost" && (I.host = ""), oe) return;
                            Pe = "", me = Bt;
                          }
                          continue;
                        } else Pe += ve;
                        break;
                      case Bt:
                        if (te(I)) {
                          if (me = Gt, ve != "/" && ve != "\\") continue;
                        } else if (!oe && ve == "?")
                          I.query = "", me = rn;
                        else if (!oe && ve == "#")
                          I.fragment = "", me = bt;
                        else if (ve != T && (me = Gt, ve != "/"))
                          continue;
                        break;
                      case Gt:
                        if (ve == T || ve == "/" || ve == "\\" && te(I) || !oe && (ve == "?" || ve == "#")) {
                          if (G(Pe) ? (qe(I), ve != "/" && !(ve == "\\" && te(I)) && I.path.push("")) : Ze(Pe) ? ve != "/" && !(ve == "\\" && te(I)) && I.path.push("") : (I.scheme == "file" && !I.path.length && Ce(Pe) && (I.host && (I.host = ""), Pe = Pe.charAt(0) + ":"), I.path.push(Pe)), Pe = "", I.scheme == "file" && (ve == T || ve == "?" || ve == "#"))
                            for (; I.path.length > 1 && I.path[0] === ""; )
                              I.path.shift();
                          ve == "?" ? (I.query = "", me = rn) : ve == "#" && (I.fragment = "", me = bt);
                        } else
                          Pe += J(ve, Q);
                        break;
                      case ir:
                        ve == "?" ? (I.query = "", me = rn) : ve == "#" ? (I.fragment = "", me = bt) : ve != T && (I.path[0] += J(ve, B));
                        break;
                      case rn:
                        !oe && ve == "#" ? (I.fragment = "", me = bt) : ve != T && (ve == "'" && te(I) ? I.query += "%27" : ve == "#" ? I.query += "%23" : I.query += J(ve, B));
                        break;
                      case bt:
                        ve != T && (I.fragment += J(ve, V));
                        break;
                    }
                    He++;
                  }
                }, cn = function(se) {
                  var oe = v(this, cn, "URL"), pe = arguments.length > 1 ? arguments[1] : void 0, me = String(se), He = $(oe, { type: "URL" }), Pe, Qe;
                  if (pe !== void 0) {
                    if (pe instanceof cn) Pe = H(pe);
                    else if (Qe = Wt(Pe = {}, String(pe)), Qe) throw TypeError(Qe);
                  }
                  if (Qe = Wt(He, me, null, Pe), Qe) throw TypeError(Qe);
                  var at = He.searchParams = new U(), it = N(at);
                  it.updateSearchParams(He.query), it.updateURL = function() {
                    He.query = String(at) || null;
                  }, l || (oe.href = Gn.call(oe), oe.origin = Ur.call(oe), oe.protocol = Yt.call(oe), oe.username = Nr.call(oe), oe.password = jr.call(oe), oe.host = kr.call(oe), oe.hostname = Br.call(oe), oe.port = $r.call(oe), oe.pathname = dn.call(oe), oe.search = Vr.call(oe), oe.searchParams = Hr.call(oe), oe.hash = zr.call(oe));
                }, sr = cn.prototype, Gn = function() {
                  var I = H(this), se = I.scheme, oe = I.username, pe = I.password, me = I.host, He = I.port, Pe = I.path, Qe = I.query, at = I.fragment, it = se + ":";
                  return me !== null ? (it += "//", ie(I) && (it += oe + (pe ? ":" + pe : "") + "@"), it += M(me), He !== null && (it += ":" + He)) : se == "file" && (it += "//"), it += I.cannotBeABaseURL ? Pe[0] : Pe.length ? "/" + Pe.join("/") : "", Qe !== null && (it += "?" + Qe), at !== null && (it += "#" + at), it;
                }, Ur = function() {
                  var I = H(this), se = I.scheme, oe = I.port;
                  if (se == "blob") try {
                    return new URL(se.path[0]).origin;
                  } catch {
                    return "null";
                  }
                  return se == "file" || !te(I) ? "null" : se + "://" + M(I.host) + (oe !== null ? ":" + oe : "");
                }, Yt = function() {
                  return H(this).scheme + ":";
                }, Nr = function() {
                  return H(this).username;
                }, jr = function() {
                  return H(this).password;
                }, kr = function() {
                  var I = H(this), se = I.host, oe = I.port;
                  return se === null ? "" : oe === null ? M(se) : M(se) + ":" + oe;
                }, Br = function() {
                  var I = H(this).host;
                  return I === null ? "" : M(I);
                }, $r = function() {
                  var I = H(this).port;
                  return I === null ? "" : String(I);
                }, dn = function() {
                  var I = H(this), se = I.path;
                  return I.cannotBeABaseURL ? se[0] : se.length ? "/" + se.join("/") : "";
                }, Vr = function() {
                  var I = H(this).query;
                  return I ? "?" + I : "";
                }, Hr = function() {
                  return H(this).searchParams;
                }, zr = function() {
                  var I = H(this).fragment;
                  return I ? "#" + I : "";
                }, Dt = function(I, se) {
                  return { get: I, set: se, configurable: !0, enumerable: !0 };
                };
                if (l && p(sr, {
                  // `URL.prototype.href` accessors pair
                  // https://url.spec.whatwg.org/#dom-url-href
                  href: Dt(Gn, function(I) {
                    var se = H(this), oe = String(I), pe = Wt(se, oe);
                    if (pe) throw TypeError(pe);
                    N(se.searchParams).updateSearchParams(se.query);
                  }),
                  // `URL.prototype.origin` getter
                  // https://url.spec.whatwg.org/#dom-url-origin
                  origin: Dt(Ur),
                  // `URL.prototype.protocol` accessors pair
                  // https://url.spec.whatwg.org/#dom-url-protocol
                  protocol: Dt(Yt, function(I) {
                    var se = H(this);
                    Wt(se, String(I) + ":", K);
                  }),
                  // `URL.prototype.username` accessors pair
                  // https://url.spec.whatwg.org/#dom-url-username
                  username: Dt(Nr, function(I) {
                    var se = H(this), oe = y(String(I));
                    if (!ge(se)) {
                      se.username = "";
                      for (var pe = 0; pe < oe.length; pe++)
                        se.username += J(oe[pe], Z);
                    }
                  }),
                  // `URL.prototype.password` accessors pair
                  // https://url.spec.whatwg.org/#dom-url-password
                  password: Dt(jr, function(I) {
                    var se = H(this), oe = y(String(I));
                    if (!ge(se)) {
                      se.password = "";
                      for (var pe = 0; pe < oe.length; pe++)
                        se.password += J(oe[pe], Z);
                    }
                  }),
                  // `URL.prototype.host` accessors pair
                  // https://url.spec.whatwg.org/#dom-url-host
                  host: Dt(kr, function(I) {
                    var se = H(this);
                    se.cannotBeABaseURL || Wt(se, String(I), Ie);
                  }),
                  // `URL.prototype.hostname` accessors pair
                  // https://url.spec.whatwg.org/#dom-url-hostname
                  hostname: Dt(Br, function(I) {
                    var se = H(this);
                    se.cannotBeABaseURL || Wt(se, String(I), $e);
                  }),
                  // `URL.prototype.port` accessors pair
                  // https://url.spec.whatwg.org/#dom-url-port
                  port: Dt($r, function(I) {
                    var se = H(this);
                    ge(se) || (I = String(I), I == "" ? se.port = null : Wt(se, I, je));
                  }),
                  // `URL.prototype.pathname` accessors pair
                  // https://url.spec.whatwg.org/#dom-url-pathname
                  pathname: Dt(dn, function(I) {
                    var se = H(this);
                    se.cannotBeABaseURL || (se.path = [], Wt(se, I + "", Bt));
                  }),
                  // `URL.prototype.search` accessors pair
                  // https://url.spec.whatwg.org/#dom-url-search
                  search: Dt(Vr, function(I) {
                    var se = H(this);
                    I = String(I), I == "" ? se.query = null : (I.charAt(0) == "?" && (I = I.slice(1)), se.query = "", Wt(se, I, rn)), N(se.searchParams).updateSearchParams(se.query);
                  }),
                  // `URL.prototype.searchParams` getter
                  // https://url.spec.whatwg.org/#dom-url-searchparams
                  searchParams: Dt(Hr),
                  // `URL.prototype.hash` accessors pair
                  // https://url.spec.whatwg.org/#dom-url-hash
                  hash: Dt(zr, function(I) {
                    var se = H(this);
                    if (I = String(I), I == "") {
                      se.fragment = null;
                      return;
                    }
                    I.charAt(0) == "#" && (I = I.slice(1)), se.fragment = "", Wt(se, I, bt);
                  })
                }), h(sr, "toJSON", function() {
                  return Gn.call(this);
                }, { enumerable: !0 }), h(sr, "toString", function() {
                  return Gn.call(this);
                }, { enumerable: !0 }), j) {
                  var Gr = j.createObjectURL, fn = j.revokeObjectURL;
                  Gr && h(cn, "createObjectURL", function(se) {
                    return Gr.apply(j, arguments);
                  }), fn && h(cn, "revokeObjectURL", function(se) {
                    return fn.apply(j, arguments);
                  });
                }
                A(cn, "URL"), s({ global: !0, forced: !d, sham: !l }, {
                  URL: cn
                });
              }
            )
            /******/
          }, a = {};
          function i(n) {
            if (a[n])
              return a[n].exports;
            var u = a[n] = {
              /******/
              // no module.id needed
              /******/
              // no module.loaded needed
              /******/
              exports: {}
              /******/
            };
            return r[n](u, u.exports, i), u.exports;
          }
          (function() {
            i.d = function(n, u) {
              for (var o in u)
                i.o(u, o) && !i.o(n, o) && Object.defineProperty(n, o, { enumerable: !0, get: u[o] });
            };
          })(), function() {
            i.g = function() {
              if (typeof globalThis == "object") return globalThis;
              try {
                return this || new Function("return this")();
              } catch {
                if (typeof window == "object") return window;
              }
            }();
          }(), function() {
            i.o = function(n, u) {
              return Object.prototype.hasOwnProperty.call(n, u);
            };
          }(), function() {
            i.r = function(n) {
              typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n, "__esModule", { value: !0 });
            };
          }();
          var c = {};
          return function() {
            i.r(c), i.d(c, {
              Dropzone: function() {
                return (
                  /* reexport */
                  X
                );
              },
              default: function() {
                return (
                  /* binding */
                  be
                );
              }
            }), i(2222), i(7327), i(2772), i(6992), i(1249), i(7042), i(561), i(8264), i(8309), i(489), i(1539), i(4916), i(9714), i(8783), i(4723), i(5306), i(3123), i(3210), i(2472), i(2990), i(8927), i(3105), i(5035), i(4345), i(7174), i(2846), i(4731), i(7209), i(6319), i(8867), i(7789), i(3739), i(9368), i(4483), i(2056), i(3462), i(678), i(7462), i(3824), i(5021), i(2974), i(5016), i(4747), i(3948), i(285);
            function n(O, R) {
              var T;
              if (typeof Symbol > "u" || O[Symbol.iterator] == null) {
                if (Array.isArray(O) || (T = u(O)) || O && typeof O.length == "number") {
                  T && (O = T);
                  var D = 0, b = function() {
                  };
                  return { s: b, n: function() {
                    return D >= O.length ? { done: !0 } : { done: !1, value: O[D++] };
                  }, e: function(V) {
                    throw V;
                  }, f: b };
                }
                throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
              }
              var x = !0, P = !1, M;
              return { s: function() {
                T = O[Symbol.iterator]();
              }, n: function() {
                var V = T.next();
                return x = V.done, V;
              }, e: function(V) {
                P = !0, M = V;
              }, f: function() {
                try {
                  !x && T.return != null && T.return();
                } finally {
                  if (P) throw M;
                }
              } };
            }
            function u(O, R) {
              if (O) {
                if (typeof O == "string") return o(O, R);
                var T = Object.prototype.toString.call(O).slice(8, -1);
                if (T === "Object" && O.constructor && (T = O.constructor.name), T === "Map" || T === "Set") return Array.from(O);
                if (T === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T)) return o(O, R);
              }
            }
            function o(O, R) {
              (R == null || R > O.length) && (R = O.length);
              for (var T = 0, D = new Array(R); T < R; T++)
                D[T] = O[T];
              return D;
            }
            function s(O, R) {
              if (!(O instanceof R))
                throw new TypeError("Cannot call a class as a function");
            }
            function l(O, R) {
              for (var T = 0; T < R.length; T++) {
                var D = R[T];
                D.enumerable = D.enumerable || !1, D.configurable = !0, "value" in D && (D.writable = !0), Object.defineProperty(O, D.key, D);
              }
            }
            function d(O, R, T) {
              return R && l(O.prototype, R), O;
            }
            var f = /* @__PURE__ */ function() {
              function O() {
                s(this, O);
              }
              return d(O, [{
                key: "on",
                value: (
                  // Add an event listener for given event
                  function(T, D) {
                    return this._callbacks = this._callbacks || {}, this._callbacks[T] || (this._callbacks[T] = []), this._callbacks[T].push(D), this;
                  }
                )
              }, {
                key: "emit",
                value: function(T) {
                  this._callbacks = this._callbacks || {};
                  for (var D = this._callbacks[T], b = arguments.length, x = new Array(b > 1 ? b - 1 : 0), P = 1; P < b; P++)
                    x[P - 1] = arguments[P];
                  if (D) {
                    var M = n(D), B;
                    try {
                      for (M.s(); !(B = M.n()).done; ) {
                        var V = B.value;
                        V.apply(this, x);
                      }
                    } catch (Q) {
                      M.e(Q);
                    } finally {
                      M.f();
                    }
                  }
                  return this.element && this.element.dispatchEvent(this.makeEvent("dropzone:" + T, {
                    args: x
                  })), this;
                }
              }, {
                key: "makeEvent",
                value: function(T, D) {
                  var b = {
                    bubbles: !0,
                    cancelable: !0,
                    detail: D
                  };
                  if (typeof window.CustomEvent == "function")
                    return new CustomEvent(T, b);
                  var x = document.createEvent("CustomEvent");
                  return x.initCustomEvent(T, b.bubbles, b.cancelable, b.detail), x;
                }
                // Remove event listener for given event. If fn is not provided, all event
                // listeners for that event will be removed. If neither is provided, all
                // event listeners will be removed.
              }, {
                key: "off",
                value: function(T, D) {
                  if (!this._callbacks || arguments.length === 0)
                    return this._callbacks = {}, this;
                  var b = this._callbacks[T];
                  if (!b)
                    return this;
                  if (arguments.length === 1)
                    return delete this._callbacks[T], this;
                  for (var x = 0; x < b.length; x++) {
                    var P = b[x];
                    if (P === D) {
                      b.splice(x, 1);
                      break;
                    }
                  }
                  return this;
                }
              }]), O;
            }(), p = '<div class="dz-preview dz-file-preview"> <div class="dz-image"><img data-dz-thumbnail/></div> <div class="dz-details"> <div class="dz-size"><span data-dz-size></span></div> <div class="dz-filename"><span data-dz-name></span></div> </div> <div class="dz-progress"> <span class="dz-upload" data-dz-uploadprogress></span> </div> <div class="dz-error-message"><span data-dz-errormessage></span></div> <div class="dz-success-mark"> <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>Check</title> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF"></path> </g> </svg> </div> <div class="dz-error-mark"> <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>Error</title> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475"> <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z"></path> </g> </g> </svg> </div> </div> ', h = p;
            function v(O, R) {
              var T;
              if (typeof Symbol > "u" || O[Symbol.iterator] == null) {
                if (Array.isArray(O) || (T = m(O)) || O && typeof O.length == "number") {
                  T && (O = T);
                  var D = 0, b = function() {
                  };
                  return { s: b, n: function() {
                    return D >= O.length ? { done: !0 } : { done: !1, value: O[D++] };
                  }, e: function(V) {
                    throw V;
                  }, f: b };
                }
                throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
              }
              var x = !0, P = !1, M;
              return { s: function() {
                T = O[Symbol.iterator]();
              }, n: function() {
                var V = T.next();
                return x = V.done, V;
              }, e: function(V) {
                P = !0, M = V;
              }, f: function() {
                try {
                  !x && T.return != null && T.return();
                } finally {
                  if (P) throw M;
                }
              } };
            }
            function m(O, R) {
              if (O) {
                if (typeof O == "string") return g(O, R);
                var T = Object.prototype.toString.call(O).slice(8, -1);
                if (T === "Object" && O.constructor && (T = O.constructor.name), T === "Map" || T === "Set") return Array.from(O);
                if (T === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T)) return g(O, R);
              }
            }
            function g(O, R) {
              (R == null || R > O.length) && (R = O.length);
              for (var T = 0, D = new Array(R); T < R; T++)
                D[T] = O[T];
              return D;
            }
            var y = {
              /**
               * Has to be specified on elements other than form (or when the form
               * doesn't have an `action` attribute). You can also
               * provide a function that will be called with `files` and
               * must return the url (since `v3.12.0`)
               */
              url: null,
              /**
               * Can be changed to `"put"` if necessary. You can also provide a function
               * that will be called with `files` and must return the method (since `v3.12.0`).
               */
              method: "post",
              /**
               * Will be set on the XHRequest.
               */
              withCredentials: !1,
              /**
               * The timeout for the XHR requests in milliseconds (since `v4.4.0`).
               * If set to null or 0, no timeout is going to be set.
               */
              timeout: null,
              /**
               * How many file uploads to process in parallel (See the
               * Enqueuing file uploads documentation section for more info)
               */
              parallelUploads: 2,
              /**
               * Whether to send multiple files in one request. If
               * this it set to true, then the fallback file input element will
               * have the `multiple` attribute as well. This option will
               * also trigger additional events (like `processingmultiple`). See the events
               * documentation section for more information.
               */
              uploadMultiple: !1,
              /**
               * Whether you want files to be uploaded in chunks to your server. This can't be
               * used in combination with `uploadMultiple`.
               *
               * See [chunksUploaded](#config-chunksUploaded) for the callback to finalise an upload.
               */
              chunking: !1,
              /**
               * If `chunking` is enabled, this defines whether **every** file should be chunked,
               * even if the file size is below chunkSize. This means, that the additional chunk
               * form data will be submitted and the `chunksUploaded` callback will be invoked.
               */
              forceChunking: !1,
              /**
               * If `chunking` is `true`, then this defines the chunk size in bytes.
               */
              chunkSize: 2e6,
              /**
               * If `true`, the individual chunks of a file are being uploaded simultaneously.
               */
              parallelChunkUploads: !1,
              /**
               * Whether a chunk should be retried if it fails.
               */
              retryChunks: !1,
              /**
               * If `retryChunks` is true, how many times should it be retried.
               */
              retryChunksLimit: 3,
              /**
               * The maximum filesize (in bytes) that is allowed to be uploaded.
               */
              maxFilesize: 256,
              /**
               * The name of the file param that gets transferred.
               * **NOTE**: If you have the option  `uploadMultiple` set to `true`, then
               * Dropzone will append `[]` to the name.
               */
              paramName: "file",
              /**
               * Whether thumbnails for images should be generated
               */
              createImageThumbnails: !0,
              /**
               * In MB. When the filename exceeds this limit, the thumbnail will not be generated.
               */
              maxThumbnailFilesize: 10,
              /**
               * If `null`, the ratio of the image will be used to calculate it.
               */
              thumbnailWidth: 120,
              /**
               * The same as `thumbnailWidth`. If both are null, images will not be resized.
               */
              thumbnailHeight: 120,
              /**
               * How the images should be scaled down in case both, `thumbnailWidth` and `thumbnailHeight` are provided.
               * Can be either `contain` or `crop`.
               */
              thumbnailMethod: "crop",
              /**
               * If set, images will be resized to these dimensions before being **uploaded**.
               * If only one, `resizeWidth` **or** `resizeHeight` is provided, the original aspect
               * ratio of the file will be preserved.
               *
               * The `options.transformFile` function uses these options, so if the `transformFile` function
               * is overridden, these options don't do anything.
               */
              resizeWidth: null,
              /**
               * See `resizeWidth`.
               */
              resizeHeight: null,
              /**
               * The mime type of the resized image (before it gets uploaded to the server).
               * If `null` the original mime type will be used. To force jpeg, for example, use `image/jpeg`.
               * See `resizeWidth` for more information.
               */
              resizeMimeType: null,
              /**
               * The quality of the resized images. See `resizeWidth`.
               */
              resizeQuality: 0.8,
              /**
               * How the images should be scaled down in case both, `resizeWidth` and `resizeHeight` are provided.
               * Can be either `contain` or `crop`.
               */
              resizeMethod: "contain",
              /**
               * The base that is used to calculate the **displayed** filesize. You can
               * change this to 1024 if you would rather display kibibytes, mebibytes,
               * etc... 1024 is technically incorrect, because `1024 bytes` are `1 kibibyte`
               * not `1 kilobyte`. You can change this to `1024` if you don't care about
               * validity.
               */
              filesizeBase: 1e3,
              /**
               * If not `null` defines how many files this Dropzone handles. If it exceeds,
               * the event `maxfilesexceeded` will be called. The dropzone element gets the
               * class `dz-max-files-reached` accordingly so you can provide visual
               * feedback.
               */
              maxFiles: null,
              /**
               * An optional object to send additional headers to the server. Eg:
               * `{ "My-Awesome-Header": "header value" }`
               */
              headers: null,
              /**
               * If `true`, the dropzone element itself will be clickable, if `false`
               * nothing will be clickable.
               *
               * You can also pass an HTML element, a CSS selector (for multiple elements)
               * or an array of those. In that case, all of those elements will trigger an
               * upload when clicked.
               */
              clickable: !0,
              /**
               * Whether hidden files in directories should be ignored.
               */
              ignoreHiddenFiles: !0,
              /**
               * The default implementation of `accept` checks the file's mime type or
               * extension against this list. This is a comma separated list of mime
               * types or file extensions.
               *
               * Eg.: `image/*,application/pdf,.psd`
               *
               * If the Dropzone is `clickable` this option will also be used as
               * [`accept`](https://developer.mozilla.org/en-US/docs/HTML/Element/input#attr-accept)
               * parameter on the hidden file input as well.
               */
              acceptedFiles: null,
              /**
               * **Deprecated!**
               * Use acceptedFiles instead.
               */
              acceptedMimeTypes: null,
              /**
               * If false, files will be added to the queue but the queue will not be
               * processed automatically.
               * This can be useful if you need some additional user input before sending
               * files (or if you want want all files sent at once).
               * If you're ready to send the file simply call `myDropzone.processQueue()`.
               *
               * See the [enqueuing file uploads](#enqueuing-file-uploads) documentation
               * section for more information.
               */
              autoProcessQueue: !0,
              /**
               * If false, files added to the dropzone will not be queued by default.
               * You'll have to call `enqueueFile(file)` manually.
               */
              autoQueue: !0,
              /**
               * If `true`, this will add a link to every file preview to remove or cancel (if
               * already uploading) the file. The `dictCancelUpload`, `dictCancelUploadConfirmation`
               * and `dictRemoveFile` options are used for the wording.
               */
              addRemoveLinks: !1,
              /**
               * Defines where to display the file previews – if `null` the
               * Dropzone element itself is used. Can be a plain `HTMLElement` or a CSS
               * selector. The element should have the `dropzone-previews` class so
               * the previews are displayed properly.
               */
              previewsContainer: null,
              /**
               * Set this to `true` if you don't want previews to be shown.
               */
              disablePreviews: !1,
              /**
               * This is the element the hidden input field (which is used when clicking on the
               * dropzone to trigger file selection) will be appended to. This might
               * be important in case you use frameworks to switch the content of your page.
               *
               * Can be a selector string, or an element directly.
               */
              hiddenInputContainer: "body",
              /**
               * If null, no capture type will be specified
               * If camera, mobile devices will skip the file selection and choose camera
               * If microphone, mobile devices will skip the file selection and choose the microphone
               * If camcorder, mobile devices will skip the file selection and choose the camera in video mode
               * On apple devices multiple must be set to false.  AcceptedFiles may need to
               * be set to an appropriate mime type (e.g. "image/*", "audio/*", or "video/*").
               */
              capture: null,
              /**
               * **Deprecated**. Use `renameFile` instead.
               */
              renameFilename: null,
              /**
               * A function that is invoked before the file is uploaded to the server and renames the file.
               * This function gets the `File` as argument and can use the `file.name`. The actual name of the
               * file that gets used during the upload can be accessed through `file.upload.filename`.
               */
              renameFile: null,
              /**
               * If `true` the fallback will be forced. This is very useful to test your server
               * implementations first and make sure that everything works as
               * expected without dropzone if you experience problems, and to test
               * how your fallbacks will look.
               */
              forceFallback: !1,
              /**
               * The text used before any files are dropped.
               */
              dictDefaultMessage: "Drop files here to upload",
              /**
               * The text that replaces the default message text it the browser is not supported.
               */
              dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
              /**
               * The text that will be added before the fallback form.
               * If you provide a  fallback element yourself, or if this option is `null` this will
               * be ignored.
               */
              dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
              /**
               * If the filesize is too big.
               * `{{filesize}}` and `{{maxFilesize}}` will be replaced with the respective configuration values.
               */
              dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
              /**
               * If the file doesn't match the file type.
               */
              dictInvalidFileType: "You can't upload files of this type.",
              /**
               * If the server response was invalid.
               * `{{statusCode}}` will be replaced with the servers status code.
               */
              dictResponseError: "Server responded with {{statusCode}} code.",
              /**
               * If `addRemoveLinks` is true, the text to be used for the cancel upload link.
               */
              dictCancelUpload: "Cancel upload",
              /**
               * The text that is displayed if an upload was manually canceled
               */
              dictUploadCanceled: "Upload canceled.",
              /**
               * If `addRemoveLinks` is true, the text to be used for confirmation when cancelling upload.
               */
              dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
              /**
               * If `addRemoveLinks` is true, the text to be used to remove a file.
               */
              dictRemoveFile: "Remove file",
              /**
               * If this is not null, then the user will be prompted before removing a file.
               */
              dictRemoveFileConfirmation: null,
              /**
               * Displayed if `maxFiles` is st and exceeded.
               * The string `{{maxFiles}}` will be replaced by the configuration value.
               */
              dictMaxFilesExceeded: "You can not upload any more files.",
              /**
               * Allows you to translate the different units. Starting with `tb` for terabytes and going down to
               * `b` for bytes.
               */
              dictFileSizeUnits: {
                tb: "TB",
                gb: "GB",
                mb: "MB",
                kb: "KB",
                b: "b"
              },
              /**
               * Called when dropzone initialized
               * You can add event listeners here
               */
              init: function() {
              },
              /**
               * Can be an **object** of additional parameters to transfer to the server, **or** a `Function`
               * that gets invoked with the `files`, `xhr` and, if it's a chunked upload, `chunk` arguments. In case
               * of a function, this needs to return a map.
               *
               * The default implementation does nothing for normal uploads, but adds relevant information for
               * chunked uploads.
               *
               * This is the same as adding hidden input fields in the form element.
               */
              params: function(R, T, D) {
                if (D)
                  return {
                    dzuuid: D.file.upload.uuid,
                    dzchunkindex: D.index,
                    dztotalfilesize: D.file.size,
                    dzchunksize: this.options.chunkSize,
                    dztotalchunkcount: D.file.upload.totalChunkCount,
                    dzchunkbyteoffset: D.index * this.options.chunkSize
                  };
              },
              /**
               * A function that gets a [file](https://developer.mozilla.org/en-US/docs/DOM/File)
               * and a `done` function as parameters.
               *
               * If the done function is invoked without arguments, the file is "accepted" and will
               * be processed. If you pass an error message, the file is rejected, and the error
               * message will be displayed.
               * This function will not be called if the file is too big or doesn't match the mime types.
               */
              accept: function(R, T) {
                return T();
              },
              /**
               * The callback that will be invoked when all chunks have been uploaded for a file.
               * It gets the file for which the chunks have been uploaded as the first parameter,
               * and the `done` function as second. `done()` needs to be invoked when everything
               * needed to finish the upload process is done.
               */
              chunksUploaded: function(R, T) {
                T();
              },
              /**
               * Gets called when the browser is not supported.
               * The default implementation shows the fallback input field and adds
               * a text.
               */
              fallback: function() {
                var R;
                this.element.className = "".concat(this.element.className, " dz-browser-not-supported");
                var T = v(this.element.getElementsByTagName("div")), D;
                try {
                  for (T.s(); !(D = T.n()).done; ) {
                    var b = D.value;
                    if (/(^| )dz-message($| )/.test(b.className)) {
                      R = b, b.className = "dz-message";
                      break;
                    }
                  }
                } catch (P) {
                  T.e(P);
                } finally {
                  T.f();
                }
                R || (R = X.createElement('<div class="dz-message"><span></span></div>'), this.element.appendChild(R));
                var x = R.getElementsByTagName("span")[0];
                return x && (x.textContent != null ? x.textContent = this.options.dictFallbackMessage : x.innerText != null && (x.innerText = this.options.dictFallbackMessage)), this.element.appendChild(this.getFallbackForm());
              },
              /**
               * Gets called to calculate the thumbnail dimensions.
               *
               * It gets `file`, `width` and `height` (both may be `null`) as parameters and must return an object containing:
               *
               *  - `srcWidth` & `srcHeight` (required)
               *  - `trgWidth` & `trgHeight` (required)
               *  - `srcX` & `srcY` (optional, default `0`)
               *  - `trgX` & `trgY` (optional, default `0`)
               *
               * Those values are going to be used by `ctx.drawImage()`.
               */
              resize: function(R, T, D, b) {
                var x = {
                  srcX: 0,
                  srcY: 0,
                  srcWidth: R.width,
                  srcHeight: R.height
                }, P = R.width / R.height;
                T == null && D == null ? (T = x.srcWidth, D = x.srcHeight) : T == null ? T = D * P : D == null && (D = T / P), T = Math.min(T, x.srcWidth), D = Math.min(D, x.srcHeight);
                var M = T / D;
                if (x.srcWidth > T || x.srcHeight > D)
                  if (b === "crop")
                    P > M ? (x.srcHeight = R.height, x.srcWidth = x.srcHeight * M) : (x.srcWidth = R.width, x.srcHeight = x.srcWidth / M);
                  else if (b === "contain")
                    P > M ? D = T / P : T = D * P;
                  else
                    throw new Error("Unknown resizeMethod '".concat(b, "'"));
                return x.srcX = (R.width - x.srcWidth) / 2, x.srcY = (R.height - x.srcHeight) / 2, x.trgWidth = T, x.trgHeight = D, x;
              },
              /**
               * Can be used to transform the file (for example, resize an image if necessary).
               *
               * The default implementation uses `resizeWidth` and `resizeHeight` (if provided) and resizes
               * images according to those dimensions.
               *
               * Gets the `file` as the first parameter, and a `done()` function as the second, that needs
               * to be invoked with the file when the transformation is done.
               */
              transformFile: function(R, T) {
                return (this.options.resizeWidth || this.options.resizeHeight) && R.type.match(/image.*/) ? this.resizeImage(R, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, T) : T(R);
              },
              /**
               * A string that contains the template used for each dropped
               * file. Change it to fulfill your needs but make sure to properly
               * provide all elements.
               *
               * If you want to use an actual HTML element instead of providing a String
               * as a config option, you could create a div with the id `tpl`,
               * put the template inside it and provide the element like this:
               *
               *     document
               *       .querySelector('#tpl')
               *       .innerHTML
               *
               */
              previewTemplate: h,
              /*
               Those functions register themselves to the events on init and handle all
               the user interface specific stuff. Overwriting them won't break the upload
               but can break the way it's displayed.
               You can overwrite them if you don't like the default behavior. If you just
               want to add an additional event handler, register it on the dropzone object
               and don't overwrite those options.
               */
              // Those are self explanatory and simply concern the DragnDrop.
              drop: function(R) {
                return this.element.classList.remove("dz-drag-hover");
              },
              dragstart: function(R) {
              },
              dragend: function(R) {
                return this.element.classList.remove("dz-drag-hover");
              },
              dragenter: function(R) {
                return this.element.classList.add("dz-drag-hover");
              },
              dragover: function(R) {
                return this.element.classList.add("dz-drag-hover");
              },
              dragleave: function(R) {
                return this.element.classList.remove("dz-drag-hover");
              },
              paste: function(R) {
              },
              // Called whenever there are no files left in the dropzone anymore, and the
              // dropzone should be displayed as if in the initial state.
              reset: function() {
                return this.element.classList.remove("dz-started");
              },
              // Called when a file is added to the queue
              // Receives `file`
              addedfile: function(R) {
                var T = this;
                if (this.element === this.previewsContainer && this.element.classList.add("dz-started"), this.previewsContainer && !this.options.disablePreviews) {
                  R.previewElement = X.createElement(this.options.previewTemplate.trim()), R.previewTemplate = R.previewElement, this.previewsContainer.appendChild(R.previewElement);
                  var D = v(R.previewElement.querySelectorAll("[data-dz-name]")), b;
                  try {
                    for (D.s(); !(b = D.n()).done; ) {
                      var x = b.value;
                      x.textContent = R.name;
                    }
                  } catch (J) {
                    D.e(J);
                  } finally {
                    D.f();
                  }
                  var P = v(R.previewElement.querySelectorAll("[data-dz-size]")), M;
                  try {
                    for (P.s(); !(M = P.n()).done; )
                      x = M.value, x.innerHTML = this.filesize(R.size);
                  } catch (J) {
                    P.e(J);
                  } finally {
                    P.f();
                  }
                  this.options.addRemoveLinks && (R._removeLink = X.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'.concat(this.options.dictRemoveFile, "</a>")), R.previewElement.appendChild(R._removeLink));
                  var B = function(q) {
                    return q.preventDefault(), q.stopPropagation(), R.status === X.UPLOADING ? X.confirm(T.options.dictCancelUploadConfirmation, function() {
                      return T.removeFile(R);
                    }) : T.options.dictRemoveFileConfirmation ? X.confirm(T.options.dictRemoveFileConfirmation, function() {
                      return T.removeFile(R);
                    }) : T.removeFile(R);
                  }, V = v(R.previewElement.querySelectorAll("[data-dz-remove]")), Q;
                  try {
                    for (V.s(); !(Q = V.n()).done; ) {
                      var Z = Q.value;
                      Z.addEventListener("click", B);
                    }
                  } catch (J) {
                    V.e(J);
                  } finally {
                    V.f();
                  }
                }
              },
              // Called whenever a file is removed.
              removedfile: function(R) {
                return R.previewElement != null && R.previewElement.parentNode != null && R.previewElement.parentNode.removeChild(R.previewElement), this._updateMaxFilesReachedClass();
              },
              // Called when a thumbnail has been generated
              // Receives `file` and `dataUrl`
              thumbnail: function(R, T) {
                if (R.previewElement) {
                  R.previewElement.classList.remove("dz-file-preview");
                  var D = v(R.previewElement.querySelectorAll("[data-dz-thumbnail]")), b;
                  try {
                    for (D.s(); !(b = D.n()).done; ) {
                      var x = b.value;
                      x.alt = R.name, x.src = T;
                    }
                  } catch (P) {
                    D.e(P);
                  } finally {
                    D.f();
                  }
                  return setTimeout(function() {
                    return R.previewElement.classList.add("dz-image-preview");
                  }, 1);
                }
              },
              // Called whenever an error occurs
              // Receives `file` and `message`
              error: function(R, T) {
                if (R.previewElement) {
                  R.previewElement.classList.add("dz-error"), typeof T != "string" && T.error && (T = T.error);
                  var D = v(R.previewElement.querySelectorAll("[data-dz-errormessage]")), b;
                  try {
                    for (D.s(); !(b = D.n()).done; ) {
                      var x = b.value;
                      x.textContent = T;
                    }
                  } catch (P) {
                    D.e(P);
                  } finally {
                    D.f();
                  }
                }
              },
              errormultiple: function() {
              },
              // Called when a file gets processed. Since there is a cue, not all added
              // files are processed immediately.
              // Receives `file`
              processing: function(R) {
                if (R.previewElement && (R.previewElement.classList.add("dz-processing"), R._removeLink))
                  return R._removeLink.innerHTML = this.options.dictCancelUpload;
              },
              processingmultiple: function() {
              },
              // Called whenever the upload progress gets updated.
              // Receives `file`, `progress` (percentage 0-100) and `bytesSent`.
              // To get the total number of bytes of the file, use `file.size`
              uploadprogress: function(R, T, D) {
                if (R.previewElement) {
                  var b = v(R.previewElement.querySelectorAll("[data-dz-uploadprogress]")), x;
                  try {
                    for (b.s(); !(x = b.n()).done; ) {
                      var P = x.value;
                      P.nodeName === "PROGRESS" ? P.value = T : P.style.width = "".concat(T, "%");
                    }
                  } catch (M) {
                    b.e(M);
                  } finally {
                    b.f();
                  }
                }
              },
              // Called whenever the total upload progress gets updated.
              // Called with totalUploadProgress (0-100), totalBytes and totalBytesSent
              totaluploadprogress: function() {
              },
              // Called just before the file is sent. Gets the `xhr` object as second
              // parameter, so you can modify it (for example to add a CSRF token) and a
              // `formData` object to add additional information.
              sending: function() {
              },
              sendingmultiple: function() {
              },
              // When the complete upload is finished and successful
              // Receives `file`
              success: function(R) {
                if (R.previewElement)
                  return R.previewElement.classList.add("dz-success");
              },
              successmultiple: function() {
              },
              // When the upload is canceled.
              canceled: function(R) {
                return this.emit("error", R, this.options.dictUploadCanceled);
              },
              canceledmultiple: function() {
              },
              // When the upload is finished, either with success or an error.
              // Receives `file`
              complete: function(R) {
                if (R._removeLink && (R._removeLink.innerHTML = this.options.dictRemoveFile), R.previewElement)
                  return R.previewElement.classList.add("dz-complete");
              },
              completemultiple: function() {
              },
              maxfilesexceeded: function() {
              },
              maxfilesreached: function() {
              },
              queuecomplete: function() {
              },
              addedfiles: function() {
              }
            }, S = y;
            function E(O) {
              "@babel/helpers - typeof";
              return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? E = function(T) {
                return typeof T;
              } : E = function(T) {
                return T && typeof Symbol == "function" && T.constructor === Symbol && T !== Symbol.prototype ? "symbol" : typeof T;
              }, E(O);
            }
            function A(O, R) {
              var T;
              if (typeof Symbol > "u" || O[Symbol.iterator] == null) {
                if (Array.isArray(O) || (T = w(O)) || O && typeof O.length == "number") {
                  T && (O = T);
                  var D = 0, b = function() {
                  };
                  return { s: b, n: function() {
                    return D >= O.length ? { done: !0 } : { done: !1, value: O[D++] };
                  }, e: function(V) {
                    throw V;
                  }, f: b };
                }
                throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
              }
              var x = !0, P = !1, M;
              return { s: function() {
                T = O[Symbol.iterator]();
              }, n: function() {
                var V = T.next();
                return x = V.done, V;
              }, e: function(V) {
                P = !0, M = V;
              }, f: function() {
                try {
                  !x && T.return != null && T.return();
                } finally {
                  if (P) throw M;
                }
              } };
            }
            function w(O, R) {
              if (O) {
                if (typeof O == "string") return L(O, R);
                var T = Object.prototype.toString.call(O).slice(8, -1);
                if (T === "Object" && O.constructor && (T = O.constructor.name), T === "Map" || T === "Set") return Array.from(O);
                if (T === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T)) return L(O, R);
              }
            }
            function L(O, R) {
              (R == null || R > O.length) && (R = O.length);
              for (var T = 0, D = new Array(R); T < R; T++)
                D[T] = O[T];
              return D;
            }
            function j(O, R) {
              if (!(O instanceof R))
                throw new TypeError("Cannot call a class as a function");
            }
            function U(O, R) {
              for (var T = 0; T < R.length; T++) {
                var D = R[T];
                D.enumerable = D.enumerable || !1, D.configurable = !0, "value" in D && (D.writable = !0), Object.defineProperty(O, D.key, D);
              }
            }
            function N(O, R, T) {
              return R && U(O.prototype, R), T && U(O, T), O;
            }
            function $(O, R) {
              if (typeof R != "function" && R !== null)
                throw new TypeError("Super expression must either be null or a function");
              O.prototype = Object.create(R && R.prototype, { constructor: { value: O, writable: !0, configurable: !0 } }), R && H(O, R);
            }
            function H(O, R) {
              return H = Object.setPrototypeOf || function(D, b) {
                return D.__proto__ = b, D;
              }, H(O, R);
            }
            function k(O) {
              var R = W();
              return function() {
                var D = re(O), b;
                if (R) {
                  var x = re(this).constructor;
                  b = Reflect.construct(D, arguments, x);
                } else
                  b = D.apply(this, arguments);
                return z(this, b);
              };
            }
            function z(O, R) {
              return R && (E(R) === "object" || typeof R == "function") ? R : Y(O);
            }
            function Y(O) {
              if (O === void 0)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return O;
            }
            function W() {
              if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
              if (typeof Proxy == "function") return !0;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), !0;
              } catch {
                return !1;
              }
            }
            function re(O) {
              return re = Object.setPrototypeOf ? Object.getPrototypeOf : function(T) {
                return T.__proto__ || Object.getPrototypeOf(T);
              }, re(O);
            }
            var X = /* @__PURE__ */ function(O) {
              $(T, O);
              var R = k(T);
              function T(D, b) {
                var x;
                j(this, T), x = R.call(this);
                var P, M;
                if (x.element = D, x.version = T.version, x.clickableElements = [], x.listeners = [], x.files = [], typeof x.element == "string" && (x.element = document.querySelector(x.element)), !x.element || x.element.nodeType == null)
                  throw new Error("Invalid dropzone element.");
                if (x.element.dropzone)
                  throw new Error("Dropzone already attached.");
                T.instances.push(Y(x)), x.element.dropzone = Y(x);
                var B = (M = T.optionsForElement(x.element)) != null ? M : {};
                if (x.options = T.extend({}, S, B, b ?? {}), x.options.previewTemplate = x.options.previewTemplate.replace(/\n*/g, ""), x.options.forceFallback || !T.isBrowserSupported())
                  return z(x, x.options.fallback.call(Y(x)));
                if (x.options.url == null && (x.options.url = x.element.getAttribute("action")), !x.options.url)
                  throw new Error("No URL provided.");
                if (x.options.acceptedFiles && x.options.acceptedMimeTypes)
                  throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
                if (x.options.uploadMultiple && x.options.chunking)
                  throw new Error("You cannot set both: uploadMultiple and chunking.");
                return x.options.acceptedMimeTypes && (x.options.acceptedFiles = x.options.acceptedMimeTypes, delete x.options.acceptedMimeTypes), x.options.renameFilename != null && (x.options.renameFile = function(V) {
                  return x.options.renameFilename.call(Y(x), V.name, V);
                }), typeof x.options.method == "string" && (x.options.method = x.options.method.toUpperCase()), (P = x.getExistingFallback()) && P.parentNode && P.parentNode.removeChild(P), x.options.previewsContainer !== !1 && (x.options.previewsContainer ? x.previewsContainer = T.getElement(x.options.previewsContainer, "previewsContainer") : x.previewsContainer = x.element), x.options.clickable && (x.options.clickable === !0 ? x.clickableElements = [x.element] : x.clickableElements = T.getElements(x.options.clickable, "clickable")), x.init(), x;
              }
              return N(T, [{
                key: "getAcceptedFiles",
                value: function() {
                  return this.files.filter(function(b) {
                    return b.accepted;
                  }).map(function(b) {
                    return b;
                  });
                }
                // Returns all files that have been rejected
                // Not sure when that's going to be useful, but added for completeness.
              }, {
                key: "getRejectedFiles",
                value: function() {
                  return this.files.filter(function(b) {
                    return !b.accepted;
                  }).map(function(b) {
                    return b;
                  });
                }
              }, {
                key: "getFilesWithStatus",
                value: function(b) {
                  return this.files.filter(function(x) {
                    return x.status === b;
                  }).map(function(x) {
                    return x;
                  });
                }
                // Returns all files that are in the queue
              }, {
                key: "getQueuedFiles",
                value: function() {
                  return this.getFilesWithStatus(T.QUEUED);
                }
              }, {
                key: "getUploadingFiles",
                value: function() {
                  return this.getFilesWithStatus(T.UPLOADING);
                }
              }, {
                key: "getAddedFiles",
                value: function() {
                  return this.getFilesWithStatus(T.ADDED);
                }
                // Files that are either queued or uploading
              }, {
                key: "getActiveFiles",
                value: function() {
                  return this.files.filter(function(b) {
                    return b.status === T.UPLOADING || b.status === T.QUEUED;
                  }).map(function(b) {
                    return b;
                  });
                }
                // The function that gets called when Dropzone is initialized. You
                // can (and should) setup event listeners inside this function.
              }, {
                key: "init",
                value: function() {
                  var b = this;
                  if (this.element.tagName === "form" && this.element.setAttribute("enctype", "multipart/form-data"), this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message") && this.element.appendChild(T.createElement('<div class="dz-default dz-message"><button class="dz-button" type="button">'.concat(this.options.dictDefaultMessage, "</button></div>"))), this.clickableElements.length) {
                    var x = function Z() {
                      b.hiddenFileInput && b.hiddenFileInput.parentNode.removeChild(b.hiddenFileInput), b.hiddenFileInput = document.createElement("input"), b.hiddenFileInput.setAttribute("type", "file"), (b.options.maxFiles === null || b.options.maxFiles > 1) && b.hiddenFileInput.setAttribute("multiple", "multiple"), b.hiddenFileInput.className = "dz-hidden-input", b.options.acceptedFiles !== null && b.hiddenFileInput.setAttribute("accept", b.options.acceptedFiles), b.options.capture !== null && b.hiddenFileInput.setAttribute("capture", b.options.capture), b.hiddenFileInput.setAttribute("tabindex", "-1"), b.hiddenFileInput.style.visibility = "hidden", b.hiddenFileInput.style.position = "absolute", b.hiddenFileInput.style.top = "0", b.hiddenFileInput.style.left = "0", b.hiddenFileInput.style.height = "0", b.hiddenFileInput.style.width = "0", T.getElement(b.options.hiddenInputContainer, "hiddenInputContainer").appendChild(b.hiddenFileInput), b.hiddenFileInput.addEventListener("change", function() {
                        var J = b.hiddenFileInput.files;
                        if (J.length) {
                          var q = A(J), te;
                          try {
                            for (q.s(); !(te = q.n()).done; ) {
                              var ie = te.value;
                              b.addFile(ie);
                            }
                          } catch (ge) {
                            q.e(ge);
                          } finally {
                            q.f();
                          }
                        }
                        b.emit("addedfiles", J), Z();
                      });
                    };
                    x();
                  }
                  this.URL = window.URL !== null ? window.URL : window.webkitURL;
                  var P = A(this.events), M;
                  try {
                    for (P.s(); !(M = P.n()).done; ) {
                      var B = M.value;
                      this.on(B, this.options[B]);
                    }
                  } catch (Z) {
                    P.e(Z);
                  } finally {
                    P.f();
                  }
                  this.on("uploadprogress", function() {
                    return b.updateTotalUploadProgress();
                  }), this.on("removedfile", function() {
                    return b.updateTotalUploadProgress();
                  }), this.on("canceled", function(Z) {
                    return b.emit("complete", Z);
                  }), this.on("complete", function(Z) {
                    if (b.getAddedFiles().length === 0 && b.getUploadingFiles().length === 0 && b.getQueuedFiles().length === 0)
                      return setTimeout(function() {
                        return b.emit("queuecomplete");
                      }, 0);
                  });
                  var V = function(J) {
                    if (J.dataTransfer.types) {
                      for (var q = 0; q < J.dataTransfer.types.length; q++)
                        if (J.dataTransfer.types[q] === "Files") return !0;
                    }
                    return !1;
                  }, Q = function(J) {
                    if (V(J))
                      return J.stopPropagation(), J.preventDefault ? J.preventDefault() : J.returnValue = !1;
                  };
                  return this.listeners = [{
                    element: this.element,
                    events: {
                      dragstart: function(J) {
                        return b.emit("dragstart", J);
                      },
                      dragenter: function(J) {
                        return Q(J), b.emit("dragenter", J);
                      },
                      dragover: function(J) {
                        var q;
                        try {
                          q = J.dataTransfer.effectAllowed;
                        } catch {
                        }
                        return J.dataTransfer.dropEffect = q === "move" || q === "linkMove" ? "move" : "copy", Q(J), b.emit("dragover", J);
                      },
                      dragleave: function(J) {
                        return b.emit("dragleave", J);
                      },
                      drop: function(J) {
                        return Q(J), b.drop(J);
                      },
                      dragend: function(J) {
                        return b.emit("dragend", J);
                      }
                    }
                    // This is disabled right now, because the browsers don't implement it properly.
                    // "paste": (e) =>
                    //   noPropagation e
                    //   @paste e
                  }], this.clickableElements.forEach(function(Z) {
                    return b.listeners.push({
                      element: Z,
                      events: {
                        click: function(q) {
                          return (Z !== b.element || q.target === b.element || T.elementInside(q.target, b.element.querySelector(".dz-message"))) && b.hiddenFileInput.click(), !0;
                        }
                      }
                    });
                  }), this.enable(), this.options.init.call(this);
                }
                // Not fully tested yet
              }, {
                key: "destroy",
                value: function() {
                  return this.disable(), this.removeAllFiles(!0), this.hiddenFileInput != null && this.hiddenFileInput.parentNode && (this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput), this.hiddenFileInput = null), delete this.element.dropzone, T.instances.splice(T.instances.indexOf(this), 1);
                }
              }, {
                key: "updateTotalUploadProgress",
                value: function() {
                  var b, x = 0, P = 0, M = this.getActiveFiles();
                  if (M.length) {
                    var B = A(this.getActiveFiles()), V;
                    try {
                      for (B.s(); !(V = B.n()).done; ) {
                        var Q = V.value;
                        x += Q.upload.bytesSent, P += Q.upload.total;
                      }
                    } catch (Z) {
                      B.e(Z);
                    } finally {
                      B.f();
                    }
                    b = 100 * x / P;
                  } else
                    b = 100;
                  return this.emit("totaluploadprogress", b, P, x);
                }
                // @options.paramName can be a function taking one parameter rather than a string.
                // A parameter name for a file is obtained simply by calling this with an index number.
              }, {
                key: "_getParamName",
                value: function(b) {
                  return typeof this.options.paramName == "function" ? this.options.paramName(b) : "".concat(this.options.paramName).concat(this.options.uploadMultiple ? "[".concat(b, "]") : "");
                }
                // If @options.renameFile is a function,
                // the function will be used to rename the file.name before appending it to the formData
              }, {
                key: "_renameFile",
                value: function(b) {
                  return typeof this.options.renameFile != "function" ? b.name : this.options.renameFile(b);
                }
                // Returns a form that can be used as fallback if the browser does not support DragnDrop
                //
                // If the dropzone is already a form, only the input field and button are returned. Otherwise a complete form element is provided.
                // This code has to pass in IE7 :(
              }, {
                key: "getFallbackForm",
                value: function() {
                  var b, x;
                  if (b = this.getExistingFallback())
                    return b;
                  var P = '<div class="dz-fallback">';
                  this.options.dictFallbackText && (P += "<p>".concat(this.options.dictFallbackText, "</p>")), P += '<input type="file" name="'.concat(this._getParamName(0), '" ').concat(this.options.uploadMultiple ? 'multiple="multiple"' : void 0, ' /><input type="submit" value="Upload!"></div>');
                  var M = T.createElement(P);
                  return this.element.tagName !== "FORM" ? (x = T.createElement('<form action="'.concat(this.options.url, '" enctype="multipart/form-data" method="').concat(this.options.method, '"></form>')), x.appendChild(M)) : (this.element.setAttribute("enctype", "multipart/form-data"), this.element.setAttribute("method", this.options.method)), x ?? M;
                }
                // Returns the fallback elements if they exist already
                //
                // This code has to pass in IE7 :(
              }, {
                key: "getExistingFallback",
                value: function() {
                  for (var b = function(Q) {
                    var Z = A(Q), J;
                    try {
                      for (Z.s(); !(J = Z.n()).done; ) {
                        var q = J.value;
                        if (/(^| )fallback($| )/.test(q.className))
                          return q;
                      }
                    } catch (te) {
                      Z.e(te);
                    } finally {
                      Z.f();
                    }
                  }, x = 0, P = ["div", "form"]; x < P.length; x++) {
                    var M = P[x], B;
                    if (B = b(this.element.getElementsByTagName(M)))
                      return B;
                  }
                }
                // Activates all listeners stored in @listeners
              }, {
                key: "setupEventListeners",
                value: function() {
                  return this.listeners.map(function(b) {
                    return function() {
                      var x = [];
                      for (var P in b.events) {
                        var M = b.events[P];
                        x.push(b.element.addEventListener(P, M, !1));
                      }
                      return x;
                    }();
                  });
                }
                // Deactivates all listeners stored in @listeners
              }, {
                key: "removeEventListeners",
                value: function() {
                  return this.listeners.map(function(b) {
                    return function() {
                      var x = [];
                      for (var P in b.events) {
                        var M = b.events[P];
                        x.push(b.element.removeEventListener(P, M, !1));
                      }
                      return x;
                    }();
                  });
                }
                // Removes all event listeners and cancels all files in the queue or being processed.
              }, {
                key: "disable",
                value: function() {
                  var b = this;
                  return this.clickableElements.forEach(function(x) {
                    return x.classList.remove("dz-clickable");
                  }), this.removeEventListeners(), this.disabled = !0, this.files.map(function(x) {
                    return b.cancelUpload(x);
                  });
                }
              }, {
                key: "enable",
                value: function() {
                  return delete this.disabled, this.clickableElements.forEach(function(b) {
                    return b.classList.add("dz-clickable");
                  }), this.setupEventListeners();
                }
                // Returns a nicely formatted filesize
              }, {
                key: "filesize",
                value: function(b) {
                  var x = 0, P = "b";
                  if (b > 0) {
                    for (var M = ["tb", "gb", "mb", "kb", "b"], B = 0; B < M.length; B++) {
                      var V = M[B], Q = Math.pow(this.options.filesizeBase, 4 - B) / 10;
                      if (b >= Q) {
                        x = b / Math.pow(this.options.filesizeBase, 4 - B), P = V;
                        break;
                      }
                    }
                    x = Math.round(10 * x) / 10;
                  }
                  return "<strong>".concat(x, "</strong> ").concat(this.options.dictFileSizeUnits[P]);
                }
                // Adds or removes the `dz-max-files-reached` class from the form.
              }, {
                key: "_updateMaxFilesReachedClass",
                value: function() {
                  return this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles ? (this.getAcceptedFiles().length === this.options.maxFiles && this.emit("maxfilesreached", this.files), this.element.classList.add("dz-max-files-reached")) : this.element.classList.remove("dz-max-files-reached");
                }
              }, {
                key: "drop",
                value: function(b) {
                  if (b.dataTransfer) {
                    this.emit("drop", b);
                    for (var x = [], P = 0; P < b.dataTransfer.files.length; P++)
                      x[P] = b.dataTransfer.files[P];
                    if (x.length) {
                      var M = b.dataTransfer.items;
                      M && M.length && M[0].webkitGetAsEntry != null ? this._addFilesFromItems(M) : this.handleFiles(x);
                    }
                    this.emit("addedfiles", x);
                  }
                }
              }, {
                key: "paste",
                value: function(b) {
                  if (Ue(b != null ? b.clipboardData : void 0, function(P) {
                    return P.items;
                  }) != null) {
                    this.emit("paste", b);
                    var x = b.clipboardData.items;
                    if (x.length)
                      return this._addFilesFromItems(x);
                  }
                }
              }, {
                key: "handleFiles",
                value: function(b) {
                  var x = A(b), P;
                  try {
                    for (x.s(); !(P = x.n()).done; ) {
                      var M = P.value;
                      this.addFile(M);
                    }
                  } catch (B) {
                    x.e(B);
                  } finally {
                    x.f();
                  }
                }
                // When a folder is dropped (or files are pasted), items must be handled
                // instead of files.
              }, {
                key: "_addFilesFromItems",
                value: function(b) {
                  var x = this;
                  return function() {
                    var P = [], M = A(b), B;
                    try {
                      for (M.s(); !(B = M.n()).done; ) {
                        var V = B.value, Q;
                        V.webkitGetAsEntry != null && (Q = V.webkitGetAsEntry()) ? Q.isFile ? P.push(x.addFile(V.getAsFile())) : Q.isDirectory ? P.push(x._addFilesFromDirectory(Q, Q.name)) : P.push(void 0) : V.getAsFile != null && (V.kind == null || V.kind === "file") ? P.push(x.addFile(V.getAsFile())) : P.push(void 0);
                      }
                    } catch (Z) {
                      M.e(Z);
                    } finally {
                      M.f();
                    }
                    return P;
                  }();
                }
                // Goes through the directory, and adds each file it finds recursively
              }, {
                key: "_addFilesFromDirectory",
                value: function(b, x) {
                  var P = this, M = b.createReader(), B = function(Z) {
                    return Me(console, "log", function(J) {
                      return J.log(Z);
                    });
                  }, V = function Q() {
                    return M.readEntries(function(Z) {
                      if (Z.length > 0) {
                        var J = A(Z), q;
                        try {
                          for (J.s(); !(q = J.n()).done; ) {
                            var te = q.value;
                            te.isFile ? te.file(function(ie) {
                              if (!(P.options.ignoreHiddenFiles && ie.name.substring(0, 1) === "."))
                                return ie.fullPath = "".concat(x, "/").concat(ie.name), P.addFile(ie);
                            }) : te.isDirectory && P._addFilesFromDirectory(te, "".concat(x, "/").concat(te.name));
                          }
                        } catch (ie) {
                          J.e(ie);
                        } finally {
                          J.f();
                        }
                        Q();
                      }
                      return null;
                    }, B);
                  };
                  return V();
                }
                // If `done()` is called without argument the file is accepted
                // If you call it with an error message, the file is rejected
                // (This allows for asynchronous validation)
                //
                // This function checks the filesize, and if the file.type passes the
                // `acceptedFiles` check.
              }, {
                key: "accept",
                value: function(b, x) {
                  this.options.maxFilesize && b.size > this.options.maxFilesize * 1024 * 1024 ? x(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(b.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize)) : T.isValidFile(b, this.options.acceptedFiles) ? this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles ? (x(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles)), this.emit("maxfilesexceeded", b)) : this.options.accept.call(this, b, x) : x(this.options.dictInvalidFileType);
                }
              }, {
                key: "addFile",
                value: function(b) {
                  var x = this;
                  b.upload = {
                    uuid: T.uuidv4(),
                    progress: 0,
                    // Setting the total upload size to file.size for the beginning
                    // It's actual different than the size to be transmitted.
                    total: b.size,
                    bytesSent: 0,
                    filename: this._renameFile(b)
                    // Not setting chunking information here, because the acutal data — and
                    // thus the chunks — might change if `options.transformFile` is set
                    // and does something to the data.
                  }, this.files.push(b), b.status = T.ADDED, this.emit("addedfile", b), this._enqueueThumbnail(b), this.accept(b, function(P) {
                    P ? (b.accepted = !1, x._errorProcessing([b], P)) : (b.accepted = !0, x.options.autoQueue && x.enqueueFile(b)), x._updateMaxFilesReachedClass();
                  });
                }
                // Wrapper for enqueueFile
              }, {
                key: "enqueueFiles",
                value: function(b) {
                  var x = A(b), P;
                  try {
                    for (x.s(); !(P = x.n()).done; ) {
                      var M = P.value;
                      this.enqueueFile(M);
                    }
                  } catch (B) {
                    x.e(B);
                  } finally {
                    x.f();
                  }
                  return null;
                }
              }, {
                key: "enqueueFile",
                value: function(b) {
                  var x = this;
                  if (b.status === T.ADDED && b.accepted === !0) {
                    if (b.status = T.QUEUED, this.options.autoProcessQueue)
                      return setTimeout(function() {
                        return x.processQueue();
                      }, 0);
                  } else
                    throw new Error("This file can't be queued because it has already been processed or was rejected.");
                }
              }, {
                key: "_enqueueThumbnail",
                value: function(b) {
                  var x = this;
                  if (this.options.createImageThumbnails && b.type.match(/image.*/) && b.size <= this.options.maxThumbnailFilesize * 1024 * 1024)
                    return this._thumbnailQueue.push(b), setTimeout(function() {
                      return x._processThumbnailQueue();
                    }, 0);
                }
              }, {
                key: "_processThumbnailQueue",
                value: function() {
                  var b = this;
                  if (!(this._processingThumbnail || this._thumbnailQueue.length === 0)) {
                    this._processingThumbnail = !0;
                    var x = this._thumbnailQueue.shift();
                    return this.createThumbnail(x, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, !0, function(P) {
                      return b.emit("thumbnail", x, P), b._processingThumbnail = !1, b._processThumbnailQueue();
                    });
                  }
                }
                // Can be called by the user to remove a file
              }, {
                key: "removeFile",
                value: function(b) {
                  if (b.status === T.UPLOADING && this.cancelUpload(b), this.files = he(this.files, b), this.emit("removedfile", b), this.files.length === 0)
                    return this.emit("reset");
                }
                // Removes all files that aren't currently processed from the list
              }, {
                key: "removeAllFiles",
                value: function(b) {
                  b == null && (b = !1);
                  var x = A(this.files.slice()), P;
                  try {
                    for (x.s(); !(P = x.n()).done; ) {
                      var M = P.value;
                      (M.status !== T.UPLOADING || b) && this.removeFile(M);
                    }
                  } catch (B) {
                    x.e(B);
                  } finally {
                    x.f();
                  }
                  return null;
                }
                // Resizes an image before it gets sent to the server. This function is the default behavior of
                // `options.transformFile` if `resizeWidth` or `resizeHeight` are set. The callback is invoked with
                // the resized blob.
              }, {
                key: "resizeImage",
                value: function(b, x, P, M, B) {
                  var V = this;
                  return this.createThumbnail(b, x, P, M, !0, function(Q, Z) {
                    if (Z == null)
                      return B(b);
                    var J = V.options.resizeMimeType;
                    J == null && (J = b.type);
                    var q = Z.toDataURL(J, V.options.resizeQuality);
                    return (J === "image/jpeg" || J === "image/jpg") && (q = xe.restore(b.dataURL, q)), B(T.dataURItoBlob(q));
                  });
                }
              }, {
                key: "createThumbnail",
                value: function(b, x, P, M, B, V) {
                  var Q = this, Z = new FileReader();
                  Z.onload = function() {
                    if (b.dataURL = Z.result, b.type === "image/svg+xml") {
                      V != null && V(Z.result);
                      return;
                    }
                    Q.createThumbnailFromUrl(b, x, P, M, B, V);
                  }, Z.readAsDataURL(b);
                }
                // `mockFile` needs to have these attributes:
                //
                //     { name: 'name', size: 12345, imageUrl: '' }
                //
                // `callback` will be invoked when the image has been downloaded and displayed.
                // `crossOrigin` will be added to the `img` tag when accessing the file.
              }, {
                key: "displayExistingFile",
                value: function(b, x, P, M) {
                  var B = this, V = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0;
                  if (this.emit("addedfile", b), this.emit("complete", b), !V)
                    this.emit("thumbnail", b, x), P && P();
                  else {
                    var Q = function(J) {
                      B.emit("thumbnail", b, J), P && P();
                    };
                    b.dataURL = x, this.createThumbnailFromUrl(b, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, this.options.fixOrientation, Q, M);
                  }
                }
              }, {
                key: "createThumbnailFromUrl",
                value: function(b, x, P, M, B, V, Q) {
                  var Z = this, J = document.createElement("img");
                  return Q && (J.crossOrigin = Q), B = getComputedStyle(document.body).imageOrientation == "from-image" ? !1 : B, J.onload = function() {
                    var q = function(ie) {
                      return ie(1);
                    };
                    return typeof EXIF < "u" && EXIF !== null && B && (q = function(ie) {
                      return EXIF.getData(J, function() {
                        return ie(EXIF.getTag(this, "Orientation"));
                      });
                    }), q(function(te) {
                      b.width = J.width, b.height = J.height;
                      var ie = Z.options.resize.call(Z, b, x, P, M), ge = document.createElement("canvas"), Ce = ge.getContext("2d");
                      switch (ge.width = ie.trgWidth, ge.height = ie.trgHeight, te > 4 && (ge.width = ie.trgHeight, ge.height = ie.trgWidth), te) {
                        case 2:
                          Ce.translate(ge.width, 0), Ce.scale(-1, 1);
                          break;
                        case 3:
                          Ce.translate(ge.width, ge.height), Ce.rotate(Math.PI);
                          break;
                        case 4:
                          Ce.translate(0, ge.height), Ce.scale(1, -1);
                          break;
                        case 5:
                          Ce.rotate(0.5 * Math.PI), Ce.scale(1, -1);
                          break;
                        case 6:
                          Ce.rotate(0.5 * Math.PI), Ce.translate(0, -ge.width);
                          break;
                        case 7:
                          Ce.rotate(0.5 * Math.PI), Ce.translate(ge.height, -ge.width), Ce.scale(-1, 1);
                          break;
                        case 8:
                          Ce.rotate(-0.5 * Math.PI), Ce.translate(-ge.height, 0);
                          break;
                      }
                      Re(Ce, J, ie.srcX != null ? ie.srcX : 0, ie.srcY != null ? ie.srcY : 0, ie.srcWidth, ie.srcHeight, ie.trgX != null ? ie.trgX : 0, ie.trgY != null ? ie.trgY : 0, ie.trgWidth, ie.trgHeight);
                      var Ke = ge.toDataURL("image/png");
                      if (V != null)
                        return V(Ke, ge);
                    });
                  }, V != null && (J.onerror = V), J.src = b.dataURL;
                }
                // Goes through the queue and processes files if there aren't too many already.
              }, {
                key: "processQueue",
                value: function() {
                  var b = this.options.parallelUploads, x = this.getUploadingFiles().length, P = x;
                  if (!(x >= b)) {
                    var M = this.getQueuedFiles();
                    if (M.length > 0) {
                      if (this.options.uploadMultiple)
                        return this.processFiles(M.slice(0, b - x));
                      for (; P < b; ) {
                        if (!M.length)
                          return;
                        this.processFile(M.shift()), P++;
                      }
                    }
                  }
                }
                // Wrapper for `processFiles`
              }, {
                key: "processFile",
                value: function(b) {
                  return this.processFiles([b]);
                }
                // Loads the file, then calls finishedLoading()
              }, {
                key: "processFiles",
                value: function(b) {
                  var x = A(b), P;
                  try {
                    for (x.s(); !(P = x.n()).done; ) {
                      var M = P.value;
                      M.processing = !0, M.status = T.UPLOADING, this.emit("processing", M);
                    }
                  } catch (B) {
                    x.e(B);
                  } finally {
                    x.f();
                  }
                  return this.options.uploadMultiple && this.emit("processingmultiple", b), this.uploadFiles(b);
                }
              }, {
                key: "_getFilesWithXhr",
                value: function(b) {
                  return this.files.filter(function(x) {
                    return x.xhr === b;
                  }).map(function(x) {
                    return x;
                  });
                }
                // Cancels the file upload and sets the status to CANCELED
                // **if** the file is actually being uploaded.
                // If it's still in the queue, the file is being removed from it and the status
                // set to CANCELED.
              }, {
                key: "cancelUpload",
                value: function(b) {
                  if (b.status === T.UPLOADING) {
                    var x = this._getFilesWithXhr(b.xhr), P = A(x), M;
                    try {
                      for (P.s(); !(M = P.n()).done; ) {
                        var B = M.value;
                        B.status = T.CANCELED;
                      }
                    } catch (J) {
                      P.e(J);
                    } finally {
                      P.f();
                    }
                    typeof b.xhr < "u" && b.xhr.abort();
                    var V = A(x), Q;
                    try {
                      for (V.s(); !(Q = V.n()).done; ) {
                        var Z = Q.value;
                        this.emit("canceled", Z);
                      }
                    } catch (J) {
                      V.e(J);
                    } finally {
                      V.f();
                    }
                    this.options.uploadMultiple && this.emit("canceledmultiple", x);
                  } else (b.status === T.ADDED || b.status === T.QUEUED) && (b.status = T.CANCELED, this.emit("canceled", b), this.options.uploadMultiple && this.emit("canceledmultiple", [b]));
                  if (this.options.autoProcessQueue)
                    return this.processQueue();
                }
              }, {
                key: "resolveOption",
                value: function(b) {
                  if (typeof b == "function") {
                    for (var x = arguments.length, P = new Array(x > 1 ? x - 1 : 0), M = 1; M < x; M++)
                      P[M - 1] = arguments[M];
                    return b.apply(this, P);
                  }
                  return b;
                }
              }, {
                key: "uploadFile",
                value: function(b) {
                  return this.uploadFiles([b]);
                }
              }, {
                key: "uploadFiles",
                value: function(b) {
                  var x = this;
                  this._transformFiles(b, function(P) {
                    if (x.options.chunking) {
                      var M = P[0];
                      b[0].upload.chunked = x.options.chunking && (x.options.forceChunking || M.size > x.options.chunkSize), b[0].upload.totalChunkCount = Math.ceil(M.size / x.options.chunkSize);
                    }
                    if (b[0].upload.chunked) {
                      var B = b[0], V = P[0];
                      B.upload.chunks = [];
                      var Q = function() {
                        for (var ie = 0; B.upload.chunks[ie] !== void 0; )
                          ie++;
                        if (!(ie >= B.upload.totalChunkCount)) {
                          var ge = ie * x.options.chunkSize, Ce = Math.min(ge + x.options.chunkSize, V.size), Ke = {
                            name: x._getParamName(0),
                            data: V.webkitSlice ? V.webkitSlice(ge, Ce) : V.slice(ge, Ce),
                            filename: B.upload.filename,
                            chunkIndex: ie
                          };
                          B.upload.chunks[ie] = {
                            file: B,
                            index: ie,
                            dataBlock: Ke,
                            // In case we want to retry.
                            status: T.UPLOADING,
                            progress: 0,
                            retries: 0
                            // The number of times this block has been retried.
                          }, x._uploadData(b, [Ke]);
                        }
                      };
                      if (B.upload.finishedChunkUpload = function(te, ie) {
                        var ge = !0;
                        te.status = T.SUCCESS, te.dataBlock = null, te.xhr = null;
                        for (var Ce = 0; Ce < B.upload.totalChunkCount; Ce++) {
                          if (B.upload.chunks[Ce] === void 0)
                            return Q();
                          B.upload.chunks[Ce].status !== T.SUCCESS && (ge = !1);
                        }
                        ge && x.options.chunksUploaded(B, function() {
                          x._finished(b, ie, null);
                        });
                      }, x.options.parallelChunkUploads)
                        for (var Z = 0; Z < B.upload.totalChunkCount; Z++)
                          Q();
                      else
                        Q();
                    } else {
                      for (var J = [], q = 0; q < b.length; q++)
                        J[q] = {
                          name: x._getParamName(q),
                          data: P[q],
                          filename: b[q].upload.filename
                        };
                      x._uploadData(b, J);
                    }
                  });
                }
                /// Returns the right chunk for given file and xhr
              }, {
                key: "_getChunk",
                value: function(b, x) {
                  for (var P = 0; P < b.upload.totalChunkCount; P++)
                    if (b.upload.chunks[P] !== void 0 && b.upload.chunks[P].xhr === x)
                      return b.upload.chunks[P];
                }
                // This function actually uploads the file(s) to the server.
                // If dataBlocks contains the actual data to upload (meaning, that this could either be transformed
                // files, or individual chunks for chunked upload).
              }, {
                key: "_uploadData",
                value: function(b, x) {
                  var P = this, M = new XMLHttpRequest(), B = A(b), V;
                  try {
                    for (B.s(); !(V = B.n()).done; ) {
                      var Q = V.value;
                      Q.xhr = M;
                    }
                  } catch (Ee) {
                    B.e(Ee);
                  } finally {
                    B.f();
                  }
                  b[0].upload.chunked && (b[0].upload.chunks[x[0].chunkIndex].xhr = M);
                  var Z = this.resolveOption(this.options.method, b), J = this.resolveOption(this.options.url, b);
                  M.open(Z, J, !0);
                  var q = this.resolveOption(this.options.timeout, b);
                  q && (M.timeout = this.resolveOption(this.options.timeout, b)), M.withCredentials = !!this.options.withCredentials, M.onload = function(Ee) {
                    P._finishedUploading(b, M, Ee);
                  }, M.ontimeout = function() {
                    P._handleUploadError(b, M, "Request timedout after ".concat(P.options.timeout / 1e3, " seconds"));
                  }, M.onerror = function() {
                    P._handleUploadError(b, M);
                  };
                  var te = M.upload != null ? M.upload : M;
                  te.onprogress = function(Ee) {
                    return P._updateFilesUploadProgress(b, M, Ee);
                  };
                  var ie = {
                    Accept: "application/json",
                    "Cache-Control": "no-cache",
                    "X-Requested-With": "XMLHttpRequest"
                  };
                  this.options.headers && T.extend(ie, this.options.headers);
                  for (var ge in ie) {
                    var Ce = ie[ge];
                    Ce && M.setRequestHeader(ge, Ce);
                  }
                  var Ke = new FormData();
                  if (this.options.params) {
                    var qe = this.options.params;
                    typeof qe == "function" && (qe = qe.call(this, b, M, b[0].upload.chunked ? this._getChunk(b[0], M) : null));
                    for (var Ze in qe) {
                      var G = qe[Ze];
                      if (Array.isArray(G))
                        for (var K = 0; K < G.length; K++)
                          Ke.append(Ze, G[K]);
                      else
                        Ke.append(Ze, G);
                    }
                  }
                  var ee = A(b), ce;
                  try {
                    for (ee.s(); !(ce = ee.n()).done; ) {
                      var Se = ce.value;
                      this.emit("sending", Se, M, Ke);
                    }
                  } catch (Ee) {
                    ee.e(Ee);
                  } finally {
                    ee.f();
                  }
                  this.options.uploadMultiple && this.emit("sendingmultiple", b, M, Ke), this._addFormElementData(Ke);
                  for (var Fe = 0; Fe < x.length; Fe++) {
                    var Ae = x[Fe];
                    Ke.append(Ae.name, Ae.data, Ae.filename);
                  }
                  this.submitRequest(M, Ke, b);
                }
                // Transforms all files with this.options.transformFile and invokes done with the transformed files when done.
              }, {
                key: "_transformFiles",
                value: function(b, x) {
                  for (var P = this, M = [], B = 0, V = function(J) {
                    P.options.transformFile.call(P, b[J], function(q) {
                      M[J] = q, ++B === b.length && x(M);
                    });
                  }, Q = 0; Q < b.length; Q++)
                    V(Q);
                }
                // Takes care of adding other input elements of the form to the AJAX request
              }, {
                key: "_addFormElementData",
                value: function(b) {
                  if (this.element.tagName === "FORM") {
                    var x = A(this.element.querySelectorAll("input, textarea, select, button")), P;
                    try {
                      for (x.s(); !(P = x.n()).done; ) {
                        var M = P.value, B = M.getAttribute("name"), V = M.getAttribute("type");
                        if (V && (V = V.toLowerCase()), !(typeof B > "u" || B === null))
                          if (M.tagName === "SELECT" && M.hasAttribute("multiple")) {
                            var Q = A(M.options, !0), Z;
                            try {
                              for (Q.s(); !(Z = Q.n()).done; ) {
                                var J = Z.value;
                                J.selected && b.append(B, J.value);
                              }
                            } catch (q) {
                              Q.e(q);
                            } finally {
                              Q.f();
                            }
                          } else (!V || V !== "checkbox" && V !== "radio" || M.checked) && b.append(B, M.value);
                      }
                    } catch (q) {
                      x.e(q);
                    } finally {
                      x.f();
                    }
                  }
                }
                // Invoked when there is new progress information about given files.
                // If e is not provided, it is assumed that the upload is finished.
              }, {
                key: "_updateFilesUploadProgress",
                value: function(b, x, P) {
                  if (b[0].upload.chunked) {
                    var Q = b[0], Z = this._getChunk(Q, x);
                    P ? (Z.progress = 100 * P.loaded / P.total, Z.total = P.total, Z.bytesSent = P.loaded) : (Z.progress = 100, Z.bytesSent = Z.total), Q.upload.progress = 0, Q.upload.total = 0, Q.upload.bytesSent = 0;
                    for (var J = 0; J < Q.upload.totalChunkCount; J++)
                      Q.upload.chunks[J] && typeof Q.upload.chunks[J].progress < "u" && (Q.upload.progress += Q.upload.chunks[J].progress, Q.upload.total += Q.upload.chunks[J].total, Q.upload.bytesSent += Q.upload.chunks[J].bytesSent);
                    Q.upload.progress = Q.upload.progress / Q.upload.totalChunkCount, this.emit("uploadprogress", Q, Q.upload.progress, Q.upload.bytesSent);
                  } else {
                    var M = A(b), B;
                    try {
                      for (M.s(); !(B = M.n()).done; ) {
                        var V = B.value;
                        V.upload.total && V.upload.bytesSent && V.upload.bytesSent == V.upload.total || (P ? (V.upload.progress = 100 * P.loaded / P.total, V.upload.total = P.total, V.upload.bytesSent = P.loaded) : (V.upload.progress = 100, V.upload.bytesSent = V.upload.total), this.emit("uploadprogress", V, V.upload.progress, V.upload.bytesSent));
                      }
                    } catch (q) {
                      M.e(q);
                    } finally {
                      M.f();
                    }
                  }
                }
              }, {
                key: "_finishedUploading",
                value: function(b, x, P) {
                  var M;
                  if (b[0].status !== T.CANCELED && x.readyState === 4) {
                    if (x.responseType !== "arraybuffer" && x.responseType !== "blob" && (M = x.responseText, x.getResponseHeader("content-type") && ~x.getResponseHeader("content-type").indexOf("application/json")))
                      try {
                        M = JSON.parse(M);
                      } catch (B) {
                        P = B, M = "Invalid JSON response from server.";
                      }
                    this._updateFilesUploadProgress(b, x), 200 <= x.status && x.status < 300 ? b[0].upload.chunked ? b[0].upload.finishedChunkUpload(this._getChunk(b[0], x), M) : this._finished(b, M, P) : this._handleUploadError(b, x, M);
                  }
                }
              }, {
                key: "_handleUploadError",
                value: function(b, x, P) {
                  if (b[0].status !== T.CANCELED) {
                    if (b[0].upload.chunked && this.options.retryChunks) {
                      var M = this._getChunk(b[0], x);
                      if (M.retries++ < this.options.retryChunksLimit) {
                        this._uploadData(b, [M.dataBlock]);
                        return;
                      } else
                        console.warn("Retried this chunk too often. Giving up.");
                    }
                    this._errorProcessing(b, P || this.options.dictResponseError.replace("{{statusCode}}", x.status), x);
                  }
                }
              }, {
                key: "submitRequest",
                value: function(b, x, P) {
                  if (b.readyState != 1) {
                    console.warn("Cannot send this request because the XMLHttpRequest.readyState is not OPENED.");
                    return;
                  }
                  b.send(x);
                }
                // Called internally when processing is finished.
                // Individual callbacks have to be called in the appropriate sections.
              }, {
                key: "_finished",
                value: function(b, x, P) {
                  var M = A(b), B;
                  try {
                    for (M.s(); !(B = M.n()).done; ) {
                      var V = B.value;
                      V.status = T.SUCCESS, this.emit("success", V, x, P), this.emit("complete", V);
                    }
                  } catch (Q) {
                    M.e(Q);
                  } finally {
                    M.f();
                  }
                  if (this.options.uploadMultiple && (this.emit("successmultiple", b, x, P), this.emit("completemultiple", b)), this.options.autoProcessQueue)
                    return this.processQueue();
                }
                // Called internally when processing is finished.
                // Individual callbacks have to be called in the appropriate sections.
              }, {
                key: "_errorProcessing",
                value: function(b, x, P) {
                  var M = A(b), B;
                  try {
                    for (M.s(); !(B = M.n()).done; ) {
                      var V = B.value;
                      V.status = T.ERROR, this.emit("error", V, x, P), this.emit("complete", V);
                    }
                  } catch (Q) {
                    M.e(Q);
                  } finally {
                    M.f();
                  }
                  if (this.options.uploadMultiple && (this.emit("errormultiple", b, x, P), this.emit("completemultiple", b)), this.options.autoProcessQueue)
                    return this.processQueue();
                }
              }], [{
                key: "initClass",
                value: function() {
                  this.prototype.Emitter = f, this.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"], this.prototype._thumbnailQueue = [], this.prototype._processingThumbnail = !1;
                }
                // global utility
              }, {
                key: "extend",
                value: function(b) {
                  for (var x = arguments.length, P = new Array(x > 1 ? x - 1 : 0), M = 1; M < x; M++)
                    P[M - 1] = arguments[M];
                  for (var B = 0, V = P; B < V.length; B++) {
                    var Q = V[B];
                    for (var Z in Q) {
                      var J = Q[Z];
                      b[Z] = J;
                    }
                  }
                  return b;
                }
              }, {
                key: "uuidv4",
                value: function() {
                  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(b) {
                    var x = Math.random() * 16 | 0, P = b === "x" ? x : x & 3 | 8;
                    return P.toString(16);
                  });
                }
              }]), T;
            }(f);
            X.initClass(), X.version = "5.9.3", X.options = {}, X.optionsForElement = function(O) {
              if (O.getAttribute("id"))
                return X.options[fe(O.getAttribute("id"))];
            }, X.instances = [], X.forElement = function(O) {
              if (typeof O == "string" && (O = document.querySelector(O)), (O != null ? O.dropzone : void 0) == null)
                throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
              return O.dropzone;
            }, X.autoDiscover = !0, X.discover = function() {
              var O;
              if (document.querySelectorAll)
                O = document.querySelectorAll(".dropzone");
              else {
                O = [];
                var R = function(D) {
                  return function() {
                    var b = [], x = A(D), P;
                    try {
                      for (x.s(); !(P = x.n()).done; ) {
                        var M = P.value;
                        /(^| )dropzone($| )/.test(M.className) ? b.push(O.push(M)) : b.push(void 0);
                      }
                    } catch (B) {
                      x.e(B);
                    } finally {
                      x.f();
                    }
                    return b;
                  }();
                };
                R(document.getElementsByTagName("div")), R(document.getElementsByTagName("form"));
              }
              return function() {
                var T = [], D = A(O), b;
                try {
                  for (D.s(); !(b = D.n()).done; ) {
                    var x = b.value;
                    X.optionsForElement(x) !== !1 ? T.push(new X(x)) : T.push(void 0);
                  }
                } catch (P) {
                  D.e(P);
                } finally {
                  D.f();
                }
                return T;
              }();
            }, X.blockedBrowsers = [
              // The mac os and windows phone version of opera 12 seems to have a problem with the File drag'n'drop API.
              /opera.*(Macintosh|Windows Phone).*version\/12/i
            ], X.isBrowserSupported = function() {
              var O = !0;
              if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector)
                if (!("classList" in document.createElement("a")))
                  O = !1;
                else {
                  X.blacklistedBrowsers !== void 0 && (X.blockedBrowsers = X.blacklistedBrowsers);
                  var R = A(X.blockedBrowsers), T;
                  try {
                    for (R.s(); !(T = R.n()).done; ) {
                      var D = T.value;
                      if (D.test(navigator.userAgent)) {
                        O = !1;
                        continue;
                      }
                    }
                  } catch (b) {
                    R.e(b);
                  } finally {
                    R.f();
                  }
                }
              else
                O = !1;
              return O;
            }, X.dataURItoBlob = function(O) {
              for (var R = atob(O.split(",")[1]), T = O.split(",")[0].split(":")[1].split(";")[0], D = new ArrayBuffer(R.length), b = new Uint8Array(D), x = 0, P = R.length, M = 0 <= P; M ? x <= P : x >= P; M ? x++ : x--)
                b[x] = R.charCodeAt(x);
              return new Blob([D], {
                type: T
              });
            };
            var he = function(R, T) {
              return R.filter(function(D) {
                return D !== T;
              }).map(function(D) {
                return D;
              });
            }, fe = function(R) {
              return R.replace(/[\-_](\w)/g, function(T) {
                return T.charAt(1).toUpperCase();
              });
            };
            X.createElement = function(O) {
              var R = document.createElement("div");
              return R.innerHTML = O, R.childNodes[0];
            }, X.elementInside = function(O, R) {
              if (O === R)
                return !0;
              for (; O = O.parentNode; )
                if (O === R)
                  return !0;
              return !1;
            }, X.getElement = function(O, R) {
              var T;
              if (typeof O == "string" ? T = document.querySelector(O) : O.nodeType != null && (T = O), T == null)
                throw new Error("Invalid `".concat(R, "` option provided. Please provide a CSS selector or a plain HTML element."));
              return T;
            }, X.getElements = function(O, R) {
              var T, D;
              if (O instanceof Array) {
                D = [];
                try {
                  var b = A(O, !0), x;
                  try {
                    for (b.s(); !(x = b.n()).done; )
                      T = x.value, D.push(this.getElement(T, R));
                  } catch (B) {
                    b.e(B);
                  } finally {
                    b.f();
                  }
                } catch {
                  D = null;
                }
              } else if (typeof O == "string") {
                D = [];
                var P = A(document.querySelectorAll(O)), M;
                try {
                  for (P.s(); !(M = P.n()).done; )
                    T = M.value, D.push(T);
                } catch (B) {
                  P.e(B);
                } finally {
                  P.f();
                }
              } else O.nodeType != null && (D = [O]);
              if (D == null || !D.length)
                throw new Error("Invalid `".concat(R, "` option provided. Please provide a CSS selector, a plain HTML element or a list of those."));
              return D;
            }, X.confirm = function(O, R, T) {
              if (window.confirm(O))
                return R();
              if (T != null)
                return T();
            }, X.isValidFile = function(O, R) {
              if (!R)
                return !0;
              R = R.split(",");
              var T = O.type, D = T.replace(/\/.*$/, ""), b = A(R), x;
              try {
                for (b.s(); !(x = b.n()).done; ) {
                  var P = x.value;
                  if (P = P.trim(), P.charAt(0) === ".") {
                    if (O.name.toLowerCase().indexOf(P.toLowerCase(), O.name.length - P.length) !== -1)
                      return !0;
                  } else if (/\/\*$/.test(P)) {
                    if (D === P.replace(/\/.*$/, ""))
                      return !0;
                  } else if (T === P)
                    return !0;
                }
              } catch (M) {
                b.e(M);
              } finally {
                b.f();
              }
              return !1;
            }, typeof jQuery < "u" && jQuery !== null && (jQuery.fn.dropzone = function(O) {
              return this.each(function() {
                return new X(this, O);
              });
            }), X.ADDED = "added", X.QUEUED = "queued", X.ACCEPTED = X.QUEUED, X.UPLOADING = "uploading", X.PROCESSING = X.UPLOADING, X.CANCELED = "canceled", X.ERROR = "error", X.SUCCESS = "success";
            var Te = function(R) {
              R.naturalWidth;
              var T = R.naturalHeight, D = document.createElement("canvas");
              D.width = 1, D.height = T;
              var b = D.getContext("2d");
              b.drawImage(R, 0, 0);
              for (var x = b.getImageData(1, 0, 1, T), P = x.data, M = 0, B = T, V = T; V > M; ) {
                var Q = P[(V - 1) * 4 + 3];
                Q === 0 ? B = V : M = V, V = B + M >> 1;
              }
              var Z = V / T;
              return Z === 0 ? 1 : Z;
            }, Re = function(R, T, D, b, x, P, M, B, V, Q) {
              var Z = Te(T);
              return R.drawImage(T, D, b, x, P, M, B, V, Q / Z);
            }, xe = /* @__PURE__ */ function() {
              function O() {
                j(this, O);
              }
              return N(O, null, [{
                key: "initClass",
                value: function() {
                  this.KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                }
              }, {
                key: "encode64",
                value: function(T) {
                  for (var D = "", b = void 0, x = void 0, P = "", M = void 0, B = void 0, V = void 0, Q = "", Z = 0; b = T[Z++], x = T[Z++], P = T[Z++], M = b >> 2, B = (b & 3) << 4 | x >> 4, V = (x & 15) << 2 | P >> 6, Q = P & 63, isNaN(x) ? V = Q = 64 : isNaN(P) && (Q = 64), D = D + this.KEY_STR.charAt(M) + this.KEY_STR.charAt(B) + this.KEY_STR.charAt(V) + this.KEY_STR.charAt(Q), b = x = P = "", M = B = V = Q = "", Z < T.length; )
                    ;
                  return D;
                }
              }, {
                key: "restore",
                value: function(T, D) {
                  if (!T.match("data:image/jpeg;base64,"))
                    return D;
                  var b = this.decode64(T.replace("data:image/jpeg;base64,", "")), x = this.slice2Segments(b), P = this.exifManipulation(D, x);
                  return "data:image/jpeg;base64,".concat(this.encode64(P));
                }
              }, {
                key: "exifManipulation",
                value: function(T, D) {
                  var b = this.getExifArray(D), x = this.insertExif(T, b), P = new Uint8Array(x);
                  return P;
                }
              }, {
                key: "getExifArray",
                value: function(T) {
                  for (var D = void 0, b = 0; b < T.length; ) {
                    if (D = T[b], D[0] === 255 & D[1] === 225)
                      return D;
                    b++;
                  }
                  return [];
                }
              }, {
                key: "insertExif",
                value: function(T, D) {
                  var b = T.replace("data:image/jpeg;base64,", ""), x = this.decode64(b), P = x.indexOf(255, 3), M = x.slice(0, P), B = x.slice(P), V = M;
                  return V = V.concat(D), V = V.concat(B), V;
                }
              }, {
                key: "slice2Segments",
                value: function(T) {
                  for (var D = 0, b = []; ; ) {
                    var x;
                    if (T[D] === 255 & T[D + 1] === 218)
                      break;
                    if (T[D] === 255 & T[D + 1] === 216)
                      D += 2;
                    else {
                      x = T[D + 2] * 256 + T[D + 3];
                      var P = D + x + 2, M = T.slice(D, P);
                      b.push(M), D = P;
                    }
                    if (D > T.length)
                      break;
                  }
                  return b;
                }
              }, {
                key: "decode64",
                value: function(T) {
                  var D = void 0, b = void 0, x = "", P = void 0, M = void 0, B = void 0, V = "", Q = 0, Z = [], J = /[^A-Za-z0-9\+\/\=]/g;
                  for (J.exec(T) && console.warn(`There were invalid base64 characters in the input text.
Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='
Expect errors in decoding.`), T = T.replace(/[^A-Za-z0-9\+\/\=]/g, ""); P = this.KEY_STR.indexOf(T.charAt(Q++)), M = this.KEY_STR.indexOf(T.charAt(Q++)), B = this.KEY_STR.indexOf(T.charAt(Q++)), V = this.KEY_STR.indexOf(T.charAt(Q++)), D = P << 2 | M >> 4, b = (M & 15) << 4 | B >> 2, x = (B & 3) << 6 | V, Z.push(D), B !== 64 && Z.push(b), V !== 64 && Z.push(x), D = b = x = "", P = M = B = V = "", Q < T.length; )
                    ;
                  return Z;
                }
              }]), O;
            }();
            xe.initClass();
            var Ne = function(R, T) {
              var D = !1, b = !0, x = R.document, P = x.documentElement, M = x.addEventListener ? "addEventListener" : "attachEvent", B = x.addEventListener ? "removeEventListener" : "detachEvent", V = x.addEventListener ? "" : "on", Q = function J(q) {
                if (!(q.type === "readystatechange" && x.readyState !== "complete") && ((q.type === "load" ? R : x)[B](V + q.type, J, !1), !D && (D = !0)))
                  return T.call(R, q.type || q);
              }, Z = function J() {
                try {
                  P.doScroll("left");
                } catch {
                  setTimeout(J, 50);
                  return;
                }
                return Q("poll");
              };
              if (x.readyState !== "complete") {
                if (x.createEventObject && P.doScroll) {
                  try {
                    b = !R.frameElement;
                  } catch {
                  }
                  b && Z();
                }
                return x[M](V + "DOMContentLoaded", Q, !1), x[M](V + "readystatechange", Q, !1), R[M](V + "load", Q, !1);
              }
            };
            X._autoDiscoverFunction = function() {
              if (X.autoDiscover)
                return X.discover();
            }, Ne(window, X._autoDiscoverFunction);
            function Ue(O, R) {
              return typeof O < "u" && O !== null ? R(O) : void 0;
            }
            function Me(O, R, T) {
              if (typeof O < "u" && O !== null && typeof O[R] == "function")
                return T(O, R);
            }
            window.Dropzone = X;
            var be = X;
          }(), c;
        }()
      );
    });
  }(Xo)), Xo.exports;
}
var Rc = Ic();
const bs = /* @__PURE__ */ Ia(Rc);
bs.autoDiscover = !1;
const Dc = {
  name: "FileUpload",
  mixins: [un],
  props: {
    name: String,
    modelValue: {},
    field: {}
  },
  data() {
    return {
      files: [],
      dropzone: null,
      formData: null,
      placeholder: ""
    };
  },
  mounted() {
    var e;
    this.formData = this.$parent._.parent.props.formData;
    const t = this.$parent._.parent.data.csrf;
    (this.editable && this.formData || this.preview) && (this.dropzone = new bs(this.$refs.dropzone, {
      url: `/api/generic/form-data/media/upload?id=${(e = this.formData) == null ? void 0 : e.id}`,
      addRemoveLinks: !0,
      dictDefaultMessage: "",
      sending: (r, a, i) => {
        i.append("_token", t), i.append("field", this.name);
      },
      success: (r, a) => {
        this.files.push(a);
      },
      complete: (r) => {
        this.dropzone.removeFile(r);
      }
    }));
  },
  created() {
    let t = typeof this.modelValue == "string" ? JSON.parse(this.modelValue) : this.modelValue;
    t && (this.files = Object.values(t));
  },
  methods: {
    deleteFile(t, e) {
      ht.delete(`/api/generic/form-data/${this.formData.id}/media/${e.id}`).then((r) => {
        this.files.splice(t, 1);
      }).catch(console.error);
    },
    isImage(t) {
      return [
        "image/gif",
        "image/jpeg",
        "image/png",
        "image/tiff"
      ].includes(t);
    }
  },
  computed: {
    valueJson() {
      let t = this.files.map((e) => ({
        id: e.id,
        url: e.url,
        file_name: e.file_name,
        mime_type: e.mime_type
      }));
      return JSON.stringify(t);
    }
  }
}, Fc = { class: "file-upload" }, Mc = ["name", "value"], Lc = { class: "preview" }, Uc = { class: "file-upload-preview" }, Nc = ["src", "title"], jc = {
  key: 1,
  class: "svg",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true"
}, kc = ["href"], Bc = { class: "file-upload-title" }, $c = ["onClick"], Vc = {
  key: 1,
  class: "inline-block text-sm text-gray-600 mt-1.5 brand-200"
};
function Hc(t, e, r, a, i, c) {
  var n;
  return ae(), le("div", Fc, [
    F("input", {
      type: "hidden",
      name: r.name,
      value: c.valueJson
    }, null, 8, Mc),
    i.files.length ? (ae(!0), le(At, { key: 0 }, Cn(i.files, (u, o) => (ae(), le("div", {
      key: `file_${u.id}_${o}`,
      class: "file-upload-file"
    }, [
      F("div", Lc, [
        F("span", Uc, [
          c.isImage(u.mime_type) ? (ae(), le("img", {
            key: 0,
            class: "img",
            src: u.url,
            title: u.file_name
          }, null, 8, Nc)) : (ae(), le("svg", jc, e[0] || (e[0] = [
            F("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            }, null, -1)
          ])))
        ]),
        F("a", {
          href: u.url,
          target: "_blank",
          class: "link"
        }, [
          F("div", Bc, Ge(u.file_name), 1)
        ], 8, kc),
        t.editable ? (ae(), le("a", {
          key: 0,
          class: "file-upload-file-remove",
          onClick: (s) => c.deleteFile(o, u)
        }, e[1] || (e[1] = [
          F("svg", {
            width: "14",
            height: "16",
            viewBox: "0 0 14 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            F("path", {
              d: "M9.66667 3.99992V3.46659C9.66667 2.71985 9.66667 2.34648 9.52134 2.06126C9.39351 1.81038 9.18954 1.60641 8.93865 1.47858C8.65344 1.33325 8.28007 1.33325 7.53333 1.33325H6.46667C5.71993 1.33325 5.34656 1.33325 5.06135 1.47858C4.81046 1.60641 4.60649 1.81038 4.47866 2.06126C4.33333 2.34648 4.33333 2.71985 4.33333 3.46659V3.99992M5.66667 7.66659V10.9999M8.33333 7.66659V10.9999M1 3.99992H13M11.6667 3.99992V11.4666C11.6667 12.5867 11.6667 13.1467 11.4487 13.5746C11.2569 13.9509 10.951 14.2569 10.5746 14.4486C10.1468 14.6666 9.58677 14.6666 8.46667 14.6666H5.53333C4.41323 14.6666 3.85318 14.6666 3.42535 14.4486C3.04903 14.2569 2.74307 13.9509 2.55132 13.5746C2.33333 13.1467 2.33333 12.5867 2.33333 11.4666V3.99992",
              stroke: "#667085",
              "stroke-width": "1.5",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            })
          ], -1)
        ]), 8, $c)) : ke("", !0)
      ])
    ]))), 128)) : ke("", !0),
    F("div", {
      class: et(["dropzone", r.field.class]),
      ref: "dropzone"
    }, e[2] || (e[2] = [
      F("div", { class: "placeholder" }, [
        F("div", null, [
          F("svg", {
            width: "20",
            height: "18",
            viewBox: "0 0 20 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            F("path", {
              d: "M6.66602 12.3333L9.99935 9M9.99935 9L13.3327 12.3333M9.99935 9V16.5M16.666 12.9524C17.6839 12.1117 18.3327 10.8399 18.3327 9.41667C18.3327 6.88536 16.2807 4.83333 13.7493 4.83333C13.5673 4.83333 13.3969 4.73833 13.3044 4.58145C12.2177 2.73736 10.2114 1.5 7.91602 1.5C4.46424 1.5 1.66602 4.29822 1.66602 7.75C1.66602 9.47175 2.36222 11.0309 3.48847 12.1613",
              stroke: "#475467",
              "stroke-width": "1.66667",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            })
          ])
        ]),
        F("div", null, [
          F("p", null, [
            F("span", null, "Click to upload"),
            F("span", null, " or drag and drop")
          ]),
          F("span", null, "(max. 20MB)")
        ])
      ], -1)
    ]), 2),
    (n = r.field) != null && n.hint ? (ae(), le("p", Vc, Ge(r.field.hint), 1)) : ke("", !0)
  ]);
}
const xs = /* @__PURE__ */ pt(Dc, [["render", Hc]]);
var pr = { exports: {} };
pr.exports;
var wi;
function zc() {
  return wi || (wi = 1, function(t, e) {
    var r = 200, a = "__lodash_hash_undefined__", i = 9007199254740991, c = "[object Arguments]", n = "[object Array]", u = "[object Boolean]", o = "[object Date]", s = "[object Error]", l = "[object Function]", d = "[object GeneratorFunction]", f = "[object Map]", p = "[object Number]", h = "[object Object]", v = "[object Promise]", m = "[object RegExp]", g = "[object Set]", y = "[object String]", S = "[object Symbol]", E = "[object WeakMap]", A = "[object ArrayBuffer]", w = "[object DataView]", L = "[object Float32Array]", j = "[object Float64Array]", U = "[object Int8Array]", N = "[object Int16Array]", $ = "[object Int32Array]", H = "[object Uint8Array]", k = "[object Uint8ClampedArray]", z = "[object Uint16Array]", Y = "[object Uint32Array]", W = /[\\^$.*+?()[\]{}|]/g, re = /\w*$/, X = /^\[object .+?Constructor\]$/, he = /^(?:0|[1-9]\d*)$/, fe = {};
    fe[c] = fe[n] = fe[A] = fe[w] = fe[u] = fe[o] = fe[L] = fe[j] = fe[U] = fe[N] = fe[$] = fe[f] = fe[p] = fe[h] = fe[m] = fe[g] = fe[y] = fe[S] = fe[H] = fe[k] = fe[z] = fe[Y] = !0, fe[s] = fe[l] = fe[E] = !1;
    var Te = typeof Qr == "object" && Qr && Qr.Object === Object && Qr, Re = typeof self == "object" && self && self.Object === Object && self, xe = Te || Re || Function("return this")(), Ne = e && !e.nodeType && e, Ue = Ne && !0 && t && !t.nodeType && t, Me = Ue && Ue.exports === Ne;
    function be(C, _) {
      return C.set(_[0], _[1]), C;
    }
    function O(C, _) {
      return C.add(_), C;
    }
    function R(C, _) {
      for (var de = -1, Le = C ? C.length : 0; ++de < Le && _(C[de], de, C) !== !1; )
        ;
      return C;
    }
    function T(C, _) {
      for (var de = -1, Le = _.length, xt = C.length; ++de < Le; )
        C[xt + de] = _[de];
      return C;
    }
    function D(C, _, de, Le) {
      for (var xt = -1, Mt = C ? C.length : 0; ++xt < Mt; )
        de = _(de, C[xt], xt, C);
      return de;
    }
    function b(C, _) {
      for (var de = -1, Le = Array(C); ++de < C; )
        Le[de] = _(de);
      return Le;
    }
    function x(C, _) {
      return C == null ? void 0 : C[_];
    }
    function P(C) {
      var _ = !1;
      if (C != null && typeof C.toString != "function")
        try {
          _ = !!(C + "");
        } catch {
        }
      return _;
    }
    function M(C) {
      var _ = -1, de = Array(C.size);
      return C.forEach(function(Le, xt) {
        de[++_] = [xt, Le];
      }), de;
    }
    function B(C, _) {
      return function(de) {
        return C(_(de));
      };
    }
    function V(C) {
      var _ = -1, de = Array(C.size);
      return C.forEach(function(Le) {
        de[++_] = Le;
      }), de;
    }
    var Q = Array.prototype, Z = Function.prototype, J = Object.prototype, q = xe["__core-js_shared__"], te = function() {
      var C = /[^.]+$/.exec(q && q.keys && q.keys.IE_PROTO || "");
      return C ? "Symbol(src)_1." + C : "";
    }(), ie = Z.toString, ge = J.hasOwnProperty, Ce = J.toString, Ke = RegExp(
      "^" + ie.call(ge).replace(W, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    ), qe = Me ? xe.Buffer : void 0, Ze = xe.Symbol, G = xe.Uint8Array, K = B(Object.getPrototypeOf, Object), ee = Object.create, ce = J.propertyIsEnumerable, Se = Q.splice, Fe = Object.getOwnPropertySymbols, Ae = qe ? qe.isBuffer : void 0, Ee = B(Object.keys, Object), Ve = Yn(xe, "DataView"), Oe = Yn(xe, "Map"), we = Yn(xe, "Promise"), Ie = Yn(xe, "Set"), $e = Yn(xe, "WeakMap"), je = Yn(Object, "create"), tt = Ln(Ve), zt = Ln(Oe), Fn = Ln(we), Bt = Ln(Ie), Gt = Ln($e), ir = Ze ? Ze.prototype : void 0, rn = ir ? ir.valueOf : void 0;
    function bt(C) {
      var _ = -1, de = C ? C.length : 0;
      for (this.clear(); ++_ < de; ) {
        var Le = C[_];
        this.set(Le[0], Le[1]);
      }
    }
    function Wt() {
      this.__data__ = je ? je(null) : {};
    }
    function cn(C) {
      return this.has(C) && delete this.__data__[C];
    }
    function sr(C) {
      var _ = this.__data__;
      if (je) {
        var de = _[C];
        return de === a ? void 0 : de;
      }
      return ge.call(_, C) ? _[C] : void 0;
    }
    function Gn(C) {
      var _ = this.__data__;
      return je ? _[C] !== void 0 : ge.call(_, C);
    }
    function Ur(C, _) {
      var de = this.__data__;
      return de[C] = je && _ === void 0 ? a : _, this;
    }
    bt.prototype.clear = Wt, bt.prototype.delete = cn, bt.prototype.get = sr, bt.prototype.has = Gn, bt.prototype.set = Ur;
    function Yt(C) {
      var _ = -1, de = C ? C.length : 0;
      for (this.clear(); ++_ < de; ) {
        var Le = C[_];
        this.set(Le[0], Le[1]);
      }
    }
    function Nr() {
      this.__data__ = [];
    }
    function jr(C) {
      var _ = this.__data__, de = Qe(_, C);
      if (de < 0)
        return !1;
      var Le = _.length - 1;
      return de == Le ? _.pop() : Se.call(_, de, 1), !0;
    }
    function kr(C) {
      var _ = this.__data__, de = Qe(_, C);
      return de < 0 ? void 0 : _[de][1];
    }
    function Br(C) {
      return Qe(this.__data__, C) > -1;
    }
    function $r(C, _) {
      var de = this.__data__, Le = Qe(de, C);
      return Le < 0 ? de.push([C, _]) : de[Le][1] = _, this;
    }
    Yt.prototype.clear = Nr, Yt.prototype.delete = jr, Yt.prototype.get = kr, Yt.prototype.has = Br, Yt.prototype.set = $r;
    function dn(C) {
      var _ = -1, de = C ? C.length : 0;
      for (this.clear(); ++_ < de; ) {
        var Le = C[_];
        this.set(Le[0], Le[1]);
      }
    }
    function Vr() {
      this.__data__ = {
        hash: new bt(),
        map: new (Oe || Yt)(),
        string: new bt()
      };
    }
    function Hr(C) {
      return Yr(this, C).delete(C);
    }
    function zr(C) {
      return Yr(this, C).get(C);
    }
    function Dt(C) {
      return Yr(this, C).has(C);
    }
    function Gr(C, _) {
      return Yr(this, C).set(C, _), this;
    }
    dn.prototype.clear = Vr, dn.prototype.delete = Hr, dn.prototype.get = zr, dn.prototype.has = Dt, dn.prototype.set = Gr;
    function fn(C) {
      this.__data__ = new Yt(C);
    }
    function I() {
      this.__data__ = new Yt();
    }
    function se(C) {
      return this.__data__.delete(C);
    }
    function oe(C) {
      return this.__data__.get(C);
    }
    function pe(C) {
      return this.__data__.has(C);
    }
    function me(C, _) {
      var de = this.__data__;
      if (de instanceof Yt) {
        var Le = de.__data__;
        if (!Oe || Le.length < r - 1)
          return Le.push([C, _]), this;
        de = this.__data__ = new dn(Le);
      }
      return de.set(C, _), this;
    }
    fn.prototype.clear = I, fn.prototype.delete = se, fn.prototype.get = oe, fn.prototype.has = pe, fn.prototype.set = me;
    function He(C, _) {
      var de = Ho(C) || Ol(C) ? b(C.length, String) : [], Le = de.length, xt = !!Le;
      for (var Mt in C)
        ge.call(C, Mt) && !(xt && (Mt == "length" || wl(Mt, Le))) && de.push(Mt);
      return de;
    }
    function Pe(C, _, de) {
      var Le = C[_];
      (!(ge.call(C, _) && ei(Le, de)) || de === void 0 && !(_ in C)) && (C[_] = de);
    }
    function Qe(C, _) {
      for (var de = C.length; de--; )
        if (ei(C[de][0], _))
          return de;
      return -1;
    }
    function at(C, _) {
      return C && Za(_, zo(_), C);
    }
    function it(C, _, de, Le, xt, Mt, hn) {
      var Lt;
      if (Le && (Lt = Mt ? Le(C, xt, Mt, hn) : Le(C)), Lt !== void 0)
        return Lt;
      if (!Kr(C))
        return C;
      var ri = Ho(C);
      if (ri) {
        if (Lt = xl(C), !_)
          return gl(C, Lt);
      } else {
        var Kn = Mn(C), oi = Kn == l || Kn == d;
        if (Il(C))
          return Wr(C, _);
        if (Kn == h || Kn == c || oi && !Mt) {
          if (P(C))
            return Mt ? C : {};
          if (Lt = Sl(oi ? {} : C), !_)
            return yl(C, at(Lt, C));
        } else {
          if (!fe[Kn])
            return Mt ? C : {};
          Lt = El(C, Kn, it, _);
        }
      }
      hn || (hn = new fn());
      var ai = hn.get(C);
      if (ai)
        return ai;
      if (hn.set(C, Lt), !ri)
        var ii = de ? bl(C) : zo(C);
      return R(ii || C, function(Go, Xr) {
        ii && (Xr = Go, Go = C[Xr]), Pe(Lt, Xr, it(Go, _, de, Le, Xr, C, hn));
      }), Lt;
    }
    function Ft(C) {
      return Kr(C) ? ee(C) : {};
    }
    function ve(C, _, de) {
      var Le = _(C);
      return Ho(C) ? Le : T(Le, de(C));
    }
    function vt(C) {
      return Ce.call(C);
    }
    function qt(C) {
      if (!Kr(C) || Al(C))
        return !1;
      var _ = ni(C) || P(C) ? Ke : X;
      return _.test(Ln(C));
    }
    function lr(C) {
      if (!_a(C))
        return Ee(C);
      var _ = [];
      for (var de in Object(C))
        ge.call(C, de) && de != "constructor" && _.push(de);
      return _;
    }
    function Wr(C, _) {
      if (_)
        return C.slice();
      var de = new C.constructor(C.length);
      return C.copy(de), de;
    }
    function Wn(C) {
      var _ = new C.constructor(C.byteLength);
      return new G(_).set(new G(C)), _;
    }
    function ur(C, _) {
      var de = _ ? Wn(C.buffer) : C.buffer;
      return new C.constructor(de, C.byteOffset, C.byteLength);
    }
    function fl(C, _, de) {
      var Le = _ ? de(M(C), !0) : M(C);
      return D(Le, be, new C.constructor());
    }
    function hl(C) {
      var _ = new C.constructor(C.source, re.exec(C));
      return _.lastIndex = C.lastIndex, _;
    }
    function pl(C, _, de) {
      var Le = _ ? de(V(C), !0) : V(C);
      return D(Le, O, new C.constructor());
    }
    function vl(C) {
      return rn ? Object(rn.call(C)) : {};
    }
    function ml(C, _) {
      var de = _ ? Wn(C.buffer) : C.buffer;
      return new C.constructor(de, C.byteOffset, C.length);
    }
    function gl(C, _) {
      var de = -1, Le = C.length;
      for (_ || (_ = Array(Le)); ++de < Le; )
        _[de] = C[de];
      return _;
    }
    function Za(C, _, de, Le) {
      de || (de = {});
      for (var xt = -1, Mt = _.length; ++xt < Mt; ) {
        var hn = _[xt], Lt = void 0;
        Pe(de, hn, Lt === void 0 ? C[hn] : Lt);
      }
      return de;
    }
    function yl(C, _) {
      return Za(C, qa(C), _);
    }
    function bl(C) {
      return ve(C, zo, qa);
    }
    function Yr(C, _) {
      var de = C.__data__;
      return Tl(_) ? de[typeof _ == "string" ? "string" : "hash"] : de.map;
    }
    function Yn(C, _) {
      var de = x(C, _);
      return qt(de) ? de : void 0;
    }
    var qa = Fe ? B(Fe, Object) : Fl, Mn = vt;
    (Ve && Mn(new Ve(new ArrayBuffer(1))) != w || Oe && Mn(new Oe()) != f || we && Mn(we.resolve()) != v || Ie && Mn(new Ie()) != g || $e && Mn(new $e()) != E) && (Mn = function(C) {
      var _ = Ce.call(C), de = _ == h ? C.constructor : void 0, Le = de ? Ln(de) : void 0;
      if (Le)
        switch (Le) {
          case tt:
            return w;
          case zt:
            return f;
          case Fn:
            return v;
          case Bt:
            return g;
          case Gt:
            return E;
        }
      return _;
    });
    function xl(C) {
      var _ = C.length, de = C.constructor(_);
      return _ && typeof C[0] == "string" && ge.call(C, "index") && (de.index = C.index, de.input = C.input), de;
    }
    function Sl(C) {
      return typeof C.constructor == "function" && !_a(C) ? Ft(K(C)) : {};
    }
    function El(C, _, de, Le) {
      var xt = C.constructor;
      switch (_) {
        case A:
          return Wn(C);
        case u:
        case o:
          return new xt(+C);
        case w:
          return ur(C, Le);
        case L:
        case j:
        case U:
        case N:
        case $:
        case H:
        case k:
        case z:
        case Y:
          return ml(C, Le);
        case f:
          return fl(C, Le, de);
        case p:
        case y:
          return new xt(C);
        case m:
          return hl(C);
        case g:
          return pl(C, Le, de);
        case S:
          return vl(C);
      }
    }
    function wl(C, _) {
      return _ = _ ?? i, !!_ && (typeof C == "number" || he.test(C)) && C > -1 && C % 1 == 0 && C < _;
    }
    function Tl(C) {
      var _ = typeof C;
      return _ == "string" || _ == "number" || _ == "symbol" || _ == "boolean" ? C !== "__proto__" : C === null;
    }
    function Al(C) {
      return !!te && te in C;
    }
    function _a(C) {
      var _ = C && C.constructor, de = typeof _ == "function" && _.prototype || J;
      return C === de;
    }
    function Ln(C) {
      if (C != null) {
        try {
          return ie.call(C);
        } catch {
        }
        try {
          return C + "";
        } catch {
        }
      }
      return "";
    }
    function Cl(C) {
      return it(C, !0, !0);
    }
    function ei(C, _) {
      return C === _ || C !== C && _ !== _;
    }
    function Ol(C) {
      return Pl(C) && ge.call(C, "callee") && (!ce.call(C, "callee") || Ce.call(C) == c);
    }
    var Ho = Array.isArray;
    function ti(C) {
      return C != null && Rl(C.length) && !ni(C);
    }
    function Pl(C) {
      return Dl(C) && ti(C);
    }
    var Il = Ae || Ml;
    function ni(C) {
      var _ = Kr(C) ? Ce.call(C) : "";
      return _ == l || _ == d;
    }
    function Rl(C) {
      return typeof C == "number" && C > -1 && C % 1 == 0 && C <= i;
    }
    function Kr(C) {
      var _ = typeof C;
      return !!C && (_ == "object" || _ == "function");
    }
    function Dl(C) {
      return !!C && typeof C == "object";
    }
    function zo(C) {
      return ti(C) ? He(C) : lr(C);
    }
    function Fl() {
      return [];
    }
    function Ml() {
      return !1;
    }
    t.exports = Cl;
  }(pr, pr.exports)), pr.exports;
}
var Gc = zc();
const pn = /* @__PURE__ */ Ia(Gc), Wc = {
  name: "Input",
  mixins: [un],
  props: {
    name: {},
    type: {},
    field: {},
    modelValue: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      input: null
    };
  },
  created() {
    this.input = pn(this.modelValue);
  },
  watch: {
    input(t) {
      this.$emit("update:modelValue", t);
    }
  }
}, Yc = ["name", "type", "placeholder"], Kc = ["textContent"], Xc = {
  key: 2,
  class: "inline-block text-sm text-gray-600 mt-1.5 brand-200"
};
function Jc(t, e, r, a, i, c) {
  var n, u, o;
  return ae(), le("div", {
    class: et((n = r.field) == null ? void 0 : n.class)
  }, [
    t.editable ? rt((ae(), le("input", {
      key: 0,
      name: r.name,
      type: r.type,
      "onUpdate:modelValue": e[0] || (e[0] = (s) => i.input = s),
      placeholder: (u = r.field) == null ? void 0 : u.placeholder
    }, null, 8, Yc)), [
      [Ea, i.input]
    ]) : (ae(), le("p", {
      key: 1,
      textContent: Ge(r.modelValue)
    }, null, 8, Kc)),
    (o = r.field) != null && o.hint ? (ae(), le("p", Xc, Ge(r.field.hint), 1)) : ke("", !0)
  ], 2);
}
const yo = /* @__PURE__ */ pt(Wc, [["render", Jc]]), Qc = {
  name: "Select",
  mixins: [un],
  props: {
    modelValue: {},
    name: {},
    type: {},
    field: {},
    options: { default: () => [] }
  },
  data() {
    return {
      isOpen: !1,
      selectedLabel: null
    };
  },
  created() {
    this.selectedLabel = this.modelValue;
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(t) {
      this.selectedLabel = t, this.isOpen = !1, this.$emit("update:modelValue", t);
    }
  },
  watch: {
    modelValue(t) {
      this.selectedLabel = t;
    }
  }
}, Zc = ["name", "id", "value"], qc = {
  key: 0,
  class: "absolute z-50 bg-white border border-gray-300 rounded-lg mt-1 w-full max-h-60 overflow-auto"
}, _c = ["onClick"], ed = {
  key: 1,
  class: "inline-block text-sm text-gray-600 mt-1.5 brand-200"
};
function td(t, e, r, a, i, c) {
  var n, u, o, s;
  return ae(), le("div", {
    class: et([(n = r.field) == null ? void 0 : n.class, "relative"])
  }, [
    F("input", {
      type: "hidden",
      name: r.name,
      id: r.name,
      value: i.selectedLabel
    }, null, 8, Zc),
    F("div", {
      class: et(["input-base cursor-pointer", { "text-gray-400": !i.selectedLabel && ((u = r.field) == null ? void 0 : u.placeholder) }]),
      onClick: e[0] || (e[0] = (...l) => c.toggleDropdown && c.toggleDropdown(...l))
    }, Ge(i.selectedLabel || ((o = r.field) == null ? void 0 : o.placeholder) || "Select an option"), 3),
    i.isOpen ? (ae(), le("ul", qc, [
      (ae(!0), le(At, null, Cn(r.options, (l, d) => (ae(), le("li", {
        key: d,
        onClick: (f) => c.selectOption(l),
        class: "px-4 py-2 hover:bg-gray-100 cursor-pointer"
      }, Ge(l), 9, _c))), 128))
    ])) : ke("", !0),
    (s = r.field) != null && s.hint ? (ae(), le("p", ed, Ge(r.field.hint), 1)) : ke("", !0)
  ], 2);
}
const Ss = /* @__PURE__ */ pt(Qc, [["render", td]]);
/*!
 * Signature Pad v3.0.0-beta.4 | https://github.com/szimek/signature_pad
 * (c) 2020 Szymon Nowak | Released under the MIT license
 */
class bo {
  constructor(e, r, a) {
    this.x = e, this.y = r, this.time = a || Date.now();
  }
  distanceTo(e) {
    return Math.sqrt(Math.pow(this.x - e.x, 2) + Math.pow(this.y - e.y, 2));
  }
  equals(e) {
    return this.x === e.x && this.y === e.y && this.time === e.time;
  }
  velocityFrom(e) {
    return this.time !== e.time ? this.distanceTo(e) / (this.time - e.time) : 0;
  }
}
class Ra {
  constructor(e, r, a, i, c, n) {
    this.startPoint = e, this.control2 = r, this.control1 = a, this.endPoint = i, this.startWidth = c, this.endWidth = n;
  }
  static fromPoints(e, r) {
    const a = this.calculateControlPoints(e[0], e[1], e[2]).c2, i = this.calculateControlPoints(e[1], e[2], e[3]).c1;
    return new Ra(e[1], a, i, e[2], r.start, r.end);
  }
  static calculateControlPoints(e, r, a) {
    const i = e.x - r.x, c = e.y - r.y, n = r.x - a.x, u = r.y - a.y, o = { x: (e.x + r.x) / 2, y: (e.y + r.y) / 2 }, s = { x: (r.x + a.x) / 2, y: (r.y + a.y) / 2 }, l = Math.sqrt(i * i + c * c), d = Math.sqrt(n * n + u * u), f = o.x - s.x, p = o.y - s.y, h = d / (l + d), v = { x: s.x + f * h, y: s.y + p * h }, m = r.x - v.x, g = r.y - v.y;
    return {
      c1: new bo(o.x + m, o.y + g),
      c2: new bo(s.x + m, s.y + g)
    };
  }
  length() {
    let r = 0, a, i;
    for (let c = 0; c <= 10; c += 1) {
      const n = c / 10, u = this.point(n, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x), o = this.point(n, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y);
      if (c > 0) {
        const s = u - a, l = o - i;
        r += Math.sqrt(s * s + l * l);
      }
      a = u, i = o;
    }
    return r;
  }
  point(e, r, a, i, c) {
    return r * (1 - e) * (1 - e) * (1 - e) + 3 * a * (1 - e) * (1 - e) * e + 3 * i * (1 - e) * e * e + c * e * e * e;
  }
}
function nd(t, e = 250) {
  let r = 0, a = null, i, c, n;
  const u = () => {
    r = Date.now(), a = null, i = t.apply(c, n), a || (c = null, n = []);
  };
  return function(...s) {
    const l = Date.now(), d = e - (l - r);
    return c = this, n = s, d <= 0 || d > e ? (a && (clearTimeout(a), a = null), r = l, i = t.apply(c, n), a || (c = null, n = [])) : a || (a = window.setTimeout(u, d)), i;
  };
}
let rd = class va {
  constructor(e, r = {}) {
    this.canvas = e, this.options = r, this._handleMouseDown = (a) => {
      a.which === 1 && (this._mouseButtonDown = !0, this._strokeBegin(a));
    }, this._handleMouseMove = (a) => {
      this._mouseButtonDown && this._strokeMoveUpdate(a);
    }, this._handleMouseUp = (a) => {
      a.which === 1 && this._mouseButtonDown && (this._mouseButtonDown = !1, this._strokeEnd(a));
    }, this._handleTouchStart = (a) => {
      if (a.preventDefault(), a.targetTouches.length === 1) {
        const i = a.changedTouches[0];
        this._strokeBegin(i);
      }
    }, this._handleTouchMove = (a) => {
      a.preventDefault();
      const i = a.targetTouches[0];
      this._strokeMoveUpdate(i);
    }, this._handleTouchEnd = (a) => {
      if (a.target === this.canvas) {
        a.preventDefault();
        const c = a.changedTouches[0];
        this._strokeEnd(c);
      }
    }, this.velocityFilterWeight = r.velocityFilterWeight || 0.7, this.minWidth = r.minWidth || 0.5, this.maxWidth = r.maxWidth || 2.5, this.throttle = "throttle" in r ? r.throttle : 16, this.minDistance = "minDistance" in r ? r.minDistance : 5, this.dotSize = r.dotSize || function() {
      return (this.minWidth + this.maxWidth) / 2;
    }, this.penColor = r.penColor || "black", this.backgroundColor = r.backgroundColor || "rgba(0,0,0,0)", this.onBegin = r.onBegin, this.onEnd = r.onEnd, this._strokeMoveUpdate = this.throttle ? nd(va.prototype._strokeUpdate, this.throttle) : va.prototype._strokeUpdate, this._ctx = e.getContext("2d"), this.clear(), this.on();
  }
  clear() {
    const { _ctx: e, canvas: r } = this;
    e.fillStyle = this.backgroundColor, e.clearRect(0, 0, r.width, r.height), e.fillRect(0, 0, r.width, r.height), this._data = [], this._reset(), this._isEmpty = !0;
  }
  fromDataURL(e, r = {}, a) {
    const i = new Image(), c = r.ratio || window.devicePixelRatio || 1, n = r.width || this.canvas.width / c, u = r.height || this.canvas.height / c;
    this._reset(), i.onload = () => {
      this._ctx.drawImage(i, 0, 0, n, u), a && a();
    }, i.onerror = (o) => {
      a && a(o);
    }, i.src = e, this._isEmpty = !1;
  }
  toDataURL(e = "image/png", r) {
    switch (e) {
      case "image/svg+xml":
        return this._toSVG();
      default:
        return this.canvas.toDataURL(e, r);
    }
  }
  on() {
    this.canvas.style.touchAction = "none", this.canvas.style.msTouchAction = "none", window.PointerEvent ? this._handlePointerEvents() : (this._handleMouseEvents(), "ontouchstart" in window && this._handleTouchEvents());
  }
  off() {
    this.canvas.style.touchAction = "auto", this.canvas.style.msTouchAction = "auto", this.canvas.removeEventListener("pointerdown", this._handleMouseDown), this.canvas.removeEventListener("pointermove", this._handleMouseMove), document.removeEventListener("pointerup", this._handleMouseUp), this.canvas.removeEventListener("mousedown", this._handleMouseDown), this.canvas.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), this.canvas.removeEventListener("touchstart", this._handleTouchStart), this.canvas.removeEventListener("touchmove", this._handleTouchMove), this.canvas.removeEventListener("touchend", this._handleTouchEnd);
  }
  isEmpty() {
    return this._isEmpty;
  }
  fromData(e) {
    this.clear(), this._fromData(e, ({ color: r, curve: a }) => this._drawCurve({ color: r, curve: a }), ({ color: r, point: a }) => this._drawDot({ color: r, point: a })), this._data = e;
  }
  toData() {
    return this._data;
  }
  _strokeBegin(e) {
    const r = {
      color: this.penColor,
      points: []
    };
    typeof this.onBegin == "function" && this.onBegin(e), this._data.push(r), this._reset(), this._strokeUpdate(e);
  }
  _strokeUpdate(e) {
    if (this._data.length === 0) {
      this._strokeBegin(e);
      return;
    }
    const r = e.clientX, a = e.clientY, i = this._createPoint(r, a), c = this._data[this._data.length - 1], n = c.points, u = n.length > 0 && n[n.length - 1], o = u ? i.distanceTo(u) <= this.minDistance : !1, s = c.color;
    if (!u || !(u && o)) {
      const l = this._addPoint(i);
      u ? l && this._drawCurve({ color: s, curve: l }) : this._drawDot({ color: s, point: i }), n.push({
        time: i.time,
        x: i.x,
        y: i.y
      });
    }
  }
  _strokeEnd(e) {
    this._strokeUpdate(e), typeof this.onEnd == "function" && this.onEnd(e);
  }
  _handlePointerEvents() {
    this._mouseButtonDown = !1, this.canvas.addEventListener("pointerdown", this._handleMouseDown), this.canvas.addEventListener("pointermove", this._handleMouseMove), document.addEventListener("pointerup", this._handleMouseUp);
  }
  _handleMouseEvents() {
    this._mouseButtonDown = !1, this.canvas.addEventListener("mousedown", this._handleMouseDown), this.canvas.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
  }
  _handleTouchEvents() {
    this.canvas.addEventListener("touchstart", this._handleTouchStart), this.canvas.addEventListener("touchmove", this._handleTouchMove), this.canvas.addEventListener("touchend", this._handleTouchEnd);
  }
  _reset() {
    this._lastPoints = [], this._lastVelocity = 0, this._lastWidth = (this.minWidth + this.maxWidth) / 2, this._ctx.fillStyle = this.penColor;
  }
  _createPoint(e, r) {
    const a = this.canvas.getBoundingClientRect();
    return new bo(e - a.left, r - a.top, (/* @__PURE__ */ new Date()).getTime());
  }
  _addPoint(e) {
    const { _lastPoints: r } = this;
    if (r.push(e), r.length > 2) {
      r.length === 3 && r.unshift(r[0]);
      const a = this._calculateCurveWidths(r[1], r[2]), i = Ra.fromPoints(r, a);
      return r.shift(), i;
    }
    return null;
  }
  _calculateCurveWidths(e, r) {
    const a = this.velocityFilterWeight * r.velocityFrom(e) + (1 - this.velocityFilterWeight) * this._lastVelocity, i = this._strokeWidth(a), c = {
      end: i,
      start: this._lastWidth
    };
    return this._lastVelocity = a, this._lastWidth = i, c;
  }
  _strokeWidth(e) {
    return Math.max(this.maxWidth / (e + 1), this.minWidth);
  }
  _drawCurveSegment(e, r, a) {
    const i = this._ctx;
    i.moveTo(e, r), i.arc(e, r, a, 0, 2 * Math.PI, !1), this._isEmpty = !1;
  }
  _drawCurve({ color: e, curve: r }) {
    const a = this._ctx, i = r.endWidth - r.startWidth, c = Math.floor(r.length()) * 2;
    a.beginPath(), a.fillStyle = e;
    for (let n = 0; n < c; n += 1) {
      const u = n / c, o = u * u, s = o * u, l = 1 - u, d = l * l, f = d * l;
      let p = f * r.startPoint.x;
      p += 3 * d * u * r.control1.x, p += 3 * l * o * r.control2.x, p += s * r.endPoint.x;
      let h = f * r.startPoint.y;
      h += 3 * d * u * r.control1.y, h += 3 * l * o * r.control2.y, h += s * r.endPoint.y;
      const v = Math.min(r.startWidth + s * i, this.maxWidth);
      this._drawCurveSegment(p, h, v);
    }
    a.closePath(), a.fill();
  }
  _drawDot({ color: e, point: r }) {
    const a = this._ctx, i = typeof this.dotSize == "function" ? this.dotSize() : this.dotSize;
    a.beginPath(), this._drawCurveSegment(r.x, r.y, i), a.closePath(), a.fillStyle = e, a.fill();
  }
  _fromData(e, r, a) {
    for (const i of e) {
      const { color: c, points: n } = i;
      if (n.length > 1)
        for (let u = 0; u < n.length; u += 1) {
          const o = n[u], s = new bo(o.x, o.y, o.time);
          this.penColor = c, u === 0 && this._reset();
          const l = this._addPoint(s);
          l && r({ color: c, curve: l });
        }
      else
        this._reset(), a({
          color: c,
          point: n[0]
        });
    }
  }
  _toSVG() {
    const e = this._data, r = Math.max(window.devicePixelRatio || 1, 1), a = 0, i = 0, c = this.canvas.width / r, n = this.canvas.height / r, u = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    u.setAttribute("width", this.canvas.width.toString()), u.setAttribute("height", this.canvas.height.toString()), this._fromData(e, ({ color: p, curve: h }) => {
      const v = document.createElement("path");
      if (!isNaN(h.control1.x) && !isNaN(h.control1.y) && !isNaN(h.control2.x) && !isNaN(h.control2.y)) {
        const m = `M ${h.startPoint.x.toFixed(3)},${h.startPoint.y.toFixed(3)} C ${h.control1.x.toFixed(3)},${h.control1.y.toFixed(3)} ${h.control2.x.toFixed(3)},${h.control2.y.toFixed(3)} ${h.endPoint.x.toFixed(3)},${h.endPoint.y.toFixed(3)}`;
        v.setAttribute("d", m), v.setAttribute("stroke-width", (h.endWidth * 2.25).toFixed(3)), v.setAttribute("stroke", p), v.setAttribute("fill", "none"), v.setAttribute("stroke-linecap", "round"), u.appendChild(v);
      }
    }, ({ color: p, point: h }) => {
      const v = document.createElement("circle"), m = typeof this.dotSize == "function" ? this.dotSize() : this.dotSize;
      v.setAttribute("r", m.toString()), v.setAttribute("cx", h.x.toString()), v.setAttribute("cy", h.y.toString()), v.setAttribute("fill", p), u.appendChild(v);
    });
    const o = "data:image/svg+xml;base64,", s = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${a} ${i} ${c} ${n}" width="${c}" height="${n}">`;
    let l = u.innerHTML;
    if (l === void 0) {
      const p = document.createElement("dummy"), h = u.childNodes;
      p.innerHTML = "";
      for (let v = 0; v < h.length; v += 1)
        p.appendChild(h[v].cloneNode(!0));
      l = p.innerHTML;
    }
    const f = s + l + "</svg>";
    return o + btoa(f);
  }
};
const od = {
  name: "SignaturePad",
  mixins: [un],
  props: {
    name: {
      type: String,
      required: !0
    },
    field: {},
    modelValue: String
  },
  data() {
    return {
      input: null,
      signaturePad: null
    };
  },
  mounted() {
    let t = this.$refs.signaturePadCanvas;
    t.style.width = "100%", t.style.height = "100%", t.width = t.offsetWidth, t.height = t.offsetHeight, this.signaturePad = new rd(t), this.signaturePad.onEnd = () => {
      this.signaturePad.isEmpty() || (this.input = this.signaturePad.toDataURL());
    }, this.modelValue && (this.input = this.modelValue, this.signaturePad.fromDataURL(this.input)), this.editable || this.signaturePad.off();
  },
  watch: {
    input() {
      this.$emit("update:modelValue", this.input);
    }
  },
  methods: {
    clear() {
      this.input = null, this.signaturePad.clear();
    }
  }
}, ad = ["name", "value"], id = { class: "signature-pad-body rounded-lg border border-dashed border-gray-300 shadow-sm h-[160px]" }, sd = { ref: "signaturePadCanvas" }, ld = { class: "signature-pad-actions" }, ud = {
  key: 0,
  class: "inline-block text-sm text-gray-600 mt-1.5 brand-200"
};
function cd(t, e, r, a, i, c) {
  var n, u;
  return ae(), le("div", {
    class: et(["signature-pad", (n = r.field) == null ? void 0 : n.class])
  }, [
    F("input", {
      type: "hidden",
      class: "signature-input",
      name: r.name,
      value: i.input
    }, null, 8, ad),
    F("div", id, [
      F("canvas", sd, null, 512),
      F("div", ld, [
        i.input && t.editable ? (ae(), le("button", {
          key: 0,
          "data-action": "clear",
          type: "button",
          class: "p-1",
          onClick: e[0] || (e[0] = (...o) => c.clear && c.clear(...o))
        }, e[1] || (e[1] = [
          F("i", { class: "fa fa-times primary-text" }, null, -1)
        ]))) : ke("", !0)
      ])
    ]),
    (u = r.field) != null && u.hint ? (ae(), le("p", ud, Ge(r.field.hint), 1)) : ke("", !0)
  ], 2);
}
const Es = /* @__PURE__ */ pt(od, [["render", cd]]), dd = {
  name: "Textarea",
  mixins: [un],
  props: {
    name: {},
    type: {},
    field: {},
    modelValue: { default: null }
  },
  data() {
    return {
      input: null
    };
  },
  created() {
    this.input = this.modelValue;
  },
  watch: {
    modelValue() {
      this.input = this.modelValue;
    },
    input() {
      this.$emit("update:modelValue", this.input);
    }
  }
}, fd = ["name", "disabled", "placeholder"], hd = {
  key: 0,
  class: "inline-block text-sm text-gray-600 mt-1.5 brand-200"
};
function pd(t, e, r, a, i, c) {
  var n, u, o;
  return ae(), le("div", {
    class: et((n = r.field) == null ? void 0 : n.class)
  }, [
    rt(F("textarea", {
      name: r.name,
      "onUpdate:modelValue": e[0] || (e[0] = (s) => i.input = s),
      rows: "4",
      disabled: !t.editable,
      placeholder: (u = r.field) == null ? void 0 : u.placeholder
    }, null, 8, fd), [
      [Et, i.input]
    ]),
    (o = r.field) != null && o.hint ? (ae(), le("p", hd, Ge(r.field.hint), 1)) : ke("", !0)
  ], 2);
}
const ws = /* @__PURE__ */ pt(dd, [["render", pd]]), vd = {
  name: "VParagraph",
  mixins: [un],
  props: {
    field: {
      type: Object,
      default: () => ({})
    }
  }
}, md = ["innerHTML"], gd = { key: 1 }, yd = ["innerHTML"], bd = ["innerHTML"];
function xd(t, e, r, a, i, c) {
  var n;
  return ae(), le("div", {
    class: et(["paragraph text-gray-600", (n = r.field) == null ? void 0 : n.class])
  }, [
    r.field.content_type === "p" ? (ae(), le("p", {
      key: 0,
      innerHTML: r.field.content
    }, null, 8, md)) : ke("", !0),
    r.field.content_type === "blockquote" ? (ae(), le("blockquote", gd, [
      F("q", {
        innerHTML: r.field.content
      }, null, 8, yd)
    ])) : ke("", !0),
    r.field.content_type === "address" ? (ae(), le("address", {
      key: 2,
      innerHTML: r.field.content
    }, null, 8, bd)) : ke("", !0)
  ], 2);
}
const Ts = /* @__PURE__ */ pt(vd, [["render", xd]]);
function As(t) {
  return t instanceof Date || Object.prototype.toString.call(t) === "[object Date]";
}
function Uo(t) {
  return As(t) ? new Date(t.getTime()) : t == null ? /* @__PURE__ */ new Date(NaN) : new Date(t);
}
function Sd(t) {
  return As(t) && !isNaN(t.getTime());
}
function Cs(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (!(e >= 0 && e <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6");
  var r = Uo(t), a = r.getDay(), i = (a + 7 - e) % 7;
  return r.setDate(r.getDate() - i), r.setHours(0, 0, 0, 0), r;
}
function Os(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.firstDayOfWeek, a = r === void 0 ? 0 : r, i = e.firstWeekContainsDate, c = i === void 0 ? 1 : i;
  if (!(c >= 1 && c <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7");
  for (var n = Uo(t), u = n.getFullYear(), o = /* @__PURE__ */ new Date(0), s = u + 1; s >= u - 1 && (o.setFullYear(s, 0, c), o.setHours(0, 0, 0, 0), o = Cs(o, a), !(n.getTime() >= o.getTime())); s--)
    ;
  return o;
}
function Da(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.firstDayOfWeek, a = r === void 0 ? 0 : r, i = e.firstWeekContainsDate, c = i === void 0 ? 1 : i, n = Uo(t), u = Cs(n, a), o = Os(n, {
    firstDayOfWeek: a,
    firstWeekContainsDate: c
  }), s = u.getTime() - o.getTime();
  return Math.round(s / (7 * 24 * 3600 * 1e3)) + 1;
}
var Fa = {
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  weekdaysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  firstDayOfWeek: 0,
  firstWeekContainsDate: 1
}, Ed = /\[([^\]]+)]|YYYY|YY?|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|Z{1,2}|S{1,3}|w{1,2}|x|X|a|A/g;
function Vt(t) {
  for (var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2, r = "".concat(Math.abs(t)), a = t < 0 ? "-" : ""; r.length < e; )
    r = "0".concat(r);
  return a + r;
}
function Ti(t) {
  return Math.round(t.getTimezoneOffset() / 15) * 15;
}
function Ai(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = t > 0 ? "-" : "+", a = Math.abs(t), i = Math.floor(a / 60), c = a % 60;
  return r + Vt(i, 2) + e + Vt(c, 2);
}
var Ci = function(e, r, a) {
  var i = e < 12 ? "AM" : "PM";
  return a ? i.toLocaleLowerCase() : i;
}, xr = {
  Y: function(e) {
    var r = e.getFullYear();
    return r <= 9999 ? "".concat(r) : "+".concat(r);
  },
  // Year: 00, 01, ..., 99
  YY: function(e) {
    return Vt(e.getFullYear(), 4).substr(2);
  },
  // Year: 1900, 1901, ..., 2099
  YYYY: function(e) {
    return Vt(e.getFullYear(), 4);
  },
  // Month: 1, 2, ..., 12
  M: function(e) {
    return e.getMonth() + 1;
  },
  // Month: 01, 02, ..., 12
  MM: function(e) {
    return Vt(e.getMonth() + 1, 2);
  },
  MMM: function(e, r) {
    return r.monthsShort[e.getMonth()];
  },
  MMMM: function(e, r) {
    return r.months[e.getMonth()];
  },
  // Day of month: 1, 2, ..., 31
  D: function(e) {
    return e.getDate();
  },
  // Day of month: 01, 02, ..., 31
  DD: function(e) {
    return Vt(e.getDate(), 2);
  },
  // Hour: 0, 1, ... 23
  H: function(e) {
    return e.getHours();
  },
  // Hour: 00, 01, ..., 23
  HH: function(e) {
    return Vt(e.getHours(), 2);
  },
  // Hour: 1, 2, ..., 12
  h: function(e) {
    var r = e.getHours();
    return r === 0 ? 12 : r > 12 ? r % 12 : r;
  },
  // Hour: 01, 02, ..., 12
  hh: function() {
    var e = xr.h.apply(xr, arguments);
    return Vt(e, 2);
  },
  // Minute: 0, 1, ..., 59
  m: function(e) {
    return e.getMinutes();
  },
  // Minute: 00, 01, ..., 59
  mm: function(e) {
    return Vt(e.getMinutes(), 2);
  },
  // Second: 0, 1, ..., 59
  s: function(e) {
    return e.getSeconds();
  },
  // Second: 00, 01, ..., 59
  ss: function(e) {
    return Vt(e.getSeconds(), 2);
  },
  // 1/10 of second: 0, 1, ..., 9
  S: function(e) {
    return Math.floor(e.getMilliseconds() / 100);
  },
  // 1/100 of second: 00, 01, ..., 99
  SS: function(e) {
    return Vt(Math.floor(e.getMilliseconds() / 10), 2);
  },
  // Millisecond: 000, 001, ..., 999
  SSS: function(e) {
    return Vt(e.getMilliseconds(), 3);
  },
  // Day of week: 0, 1, ..., 6
  d: function(e) {
    return e.getDay();
  },
  // Day of week: 'Su', 'Mo', ..., 'Sa'
  dd: function(e, r) {
    return r.weekdaysMin[e.getDay()];
  },
  // Day of week: 'Sun', 'Mon',..., 'Sat'
  ddd: function(e, r) {
    return r.weekdaysShort[e.getDay()];
  },
  // Day of week: 'Sunday', 'Monday', ...,'Saturday'
  dddd: function(e, r) {
    return r.weekdays[e.getDay()];
  },
  // AM, PM
  A: function(e, r) {
    var a = r.meridiem || Ci;
    return a(e.getHours(), e.getMinutes(), !1);
  },
  // am, pm
  a: function(e, r) {
    var a = r.meridiem || Ci;
    return a(e.getHours(), e.getMinutes(), !0);
  },
  // Timezone: -01:00, +00:00, ... +12:00
  Z: function(e) {
    return Ai(Ti(e), ":");
  },
  // Timezone: -0100, +0000, ... +1200
  ZZ: function(e) {
    return Ai(Ti(e));
  },
  // Seconds timestamp: 512969520
  X: function(e) {
    return Math.floor(e.getTime() / 1e3);
  },
  // Milliseconds timestamp: 512969520900
  x: function(e) {
    return e.getTime();
  },
  w: function(e, r) {
    return Da(e, {
      firstDayOfWeek: r.firstDayOfWeek,
      firstWeekContainsDate: r.firstWeekContainsDate
    });
  },
  ww: function(e, r) {
    return Vt(xr.w(e, r), 2);
  }
};
function Ma(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = e ? String(e) : "YYYY-MM-DDTHH:mm:ss.SSSZ", i = Uo(t);
  if (!Sd(i))
    return "Invalid Date";
  var c = r.locale || Fa;
  return a.replace(Ed, function(n, u) {
    return u || (typeof xr[n] == "function" ? "".concat(xr[n](i, c)) : n);
  });
}
function Oi(t) {
  return Ad(t) || Td(t) || wd();
}
function wd() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function Td(t) {
  if (Symbol.iterator in Object(t) || Object.prototype.toString.call(t) === "[object Arguments]") return Array.from(t);
}
function Ad(t) {
  if (Array.isArray(t)) {
    for (var e = 0, r = new Array(t.length); e < t.length; e++)
      r[e] = t[e];
    return r;
  }
}
function Pi(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    e && (a = a.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function Cd(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Pi(r, !0).forEach(function(a) {
      In(t, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Pi(r).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return t;
}
function Od(t, e) {
  return Rd(t) || Id(t, e) || Pd();
}
function Pd() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function Id(t, e) {
  if (Symbol.iterator in Object(t) || Object.prototype.toString.call(t) === "[object Arguments]") {
    var r = [], a = !0, i = !1, c = void 0;
    try {
      for (var n = t[Symbol.iterator](), u; !(a = (u = n.next()).done) && (r.push(u.value), !(e && r.length === e)); a = !0)
        ;
    } catch (o) {
      i = !0, c = o;
    } finally {
      try {
        !a && n.return != null && n.return();
      } finally {
        if (i) throw c;
      }
    }
    return r;
  }
}
function Rd(t) {
  if (Array.isArray(t)) return t;
}
function In(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var Dd = /(\[[^\[]*\])|(MM?M?M?|Do|DD?|ddd?d?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|S{1,3}|x|X|ZZ?|.)/g, Ps = /\d/, Rn = /\d\d/, Fd = /\d{3}/, Md = /\d{4}/, ar = /\d\d?/, Ld = /[+-]\d\d:?\d\d/, Is = /[+-]?\d+/, Ud = /[+-]?\d+(\.\d{1,3})?/, La = "year", No = "month", Rs = "day", Ds = "hour", Fs = "minute", Ms = "second", Ua = "millisecond", Ls = {}, _e = function(e, r, a) {
  var i = Array.isArray(e) ? e : [e], c;
  typeof a == "string" ? c = function(u) {
    var o = parseInt(u, 10);
    return In({}, a, o);
  } : c = a, i.forEach(function(n) {
    Ls[n] = [r, c];
  });
}, Nd = function(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
}, Dr = function(e) {
  return function(r) {
    var a = r[e];
    if (!Array.isArray(a))
      throw new Error("Locale[".concat(e, "] need an array"));
    return new RegExp(a.map(Nd).join("|"));
  };
}, Fr = function(e, r) {
  return function(a, i) {
    var c = i[e];
    if (!Array.isArray(c))
      throw new Error("Locale[".concat(e, "] need an array"));
    var n = c.indexOf(a);
    if (n < 0)
      throw new Error("Invalid Word");
    return In({}, r, n);
  };
};
_e("Y", Is, La);
_e("YY", Rn, function(t) {
  var e = (/* @__PURE__ */ new Date()).getFullYear(), r = Math.floor(e / 100), a = parseInt(t, 10);
  return a = (a > 68 ? r - 1 : r) * 100 + a, In({}, La, a);
});
_e("YYYY", Md, La);
_e("M", ar, function(t) {
  return In({}, No, parseInt(t, 10) - 1);
});
_e("MM", Rn, function(t) {
  return In({}, No, parseInt(t, 10) - 1);
});
_e("MMM", Dr("monthsShort"), Fr("monthsShort", No));
_e("MMMM", Dr("months"), Fr("months", No));
_e("D", ar, Rs);
_e("DD", Rn, Rs);
_e(["H", "h"], ar, Ds);
_e(["HH", "hh"], Rn, Ds);
_e("m", ar, Fs);
_e("mm", Rn, Fs);
_e("s", ar, Ms);
_e("ss", Rn, Ms);
_e("S", Ps, function(t) {
  return In({}, Ua, parseInt(t, 10) * 100);
});
_e("SS", Rn, function(t) {
  return In({}, Ua, parseInt(t, 10) * 10);
});
_e("SSS", Fd, Ua);
function jd(t) {
  return t.meridiemParse || /[ap]\.?m?\.?/i;
}
function kd(t) {
  return "".concat(t).toLowerCase().charAt(0) === "p";
}
_e(["A", "a"], jd, function(t, e) {
  var r = typeof e.isPM == "function" ? e.isPM(t) : kd(t);
  return {
    isPM: r
  };
});
function Bd(t) {
  var e = t.match(/([+-]|\d\d)/g) || ["-", "0", "0"], r = Od(e, 3), a = r[0], i = r[1], c = r[2], n = parseInt(i, 10) * 60 + parseInt(c, 10);
  return n === 0 ? 0 : a === "+" ? -n : +n;
}
_e(["Z", "ZZ"], Ld, function(t) {
  return {
    offset: Bd(t)
  };
});
_e("x", Is, function(t) {
  return {
    date: new Date(parseInt(t, 10))
  };
});
_e("X", Ud, function(t) {
  return {
    date: new Date(parseFloat(t) * 1e3)
  };
});
_e("d", Ps, "weekday");
_e("dd", Dr("weekdaysMin"), Fr("weekdaysMin", "weekday"));
_e("ddd", Dr("weekdaysShort"), Fr("weekdaysShort", "weekday"));
_e("dddd", Dr("weekdays"), Fr("weekdays", "weekday"));
_e("w", ar, "week");
_e("ww", Rn, "week");
function $d(t, e) {
  if (t !== void 0 && e !== void 0) {
    if (e) {
      if (t < 12)
        return t + 12;
    } else if (t === 12)
      return 0;
  }
  return t;
}
function Vd(t) {
  for (var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Date(), r = [0, 0, 1, 0, 0, 0, 0], a = [e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()], i = !0, c = 0; c < 7; c++)
    t[c] === void 0 ? r[c] = i ? a[c] : r[c] : (r[c] = t[c], i = !1);
  return r;
}
function Hd(t, e, r, a, i, c, n) {
  var u;
  return t < 100 && t >= 0 ? (u = new Date(t + 400, e, r, a, i, c, n), isFinite(u.getFullYear()) && u.setFullYear(t)) : u = new Date(t, e, r, a, i, c, n), u;
}
function zd() {
  for (var t, e = arguments.length, r = new Array(e), a = 0; a < e; a++)
    r[a] = arguments[a];
  var i = r[0];
  return i < 100 && i >= 0 ? (r[0] += 400, t = new Date(Date.UTC.apply(Date, r)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(i)) : t = new Date(Date.UTC.apply(Date, r)), t;
}
function Gd(t, e, r) {
  var a = e.match(Dd);
  if (!a)
    throw new Error();
  for (var i = a.length, c = {}, n = 0; n < i; n += 1) {
    var u = a[n], o = Ls[u];
    if (o) {
      var l = typeof o[0] == "function" ? o[0](r) : o[0], d = o[1], f = (l.exec(t) || [])[0], p = d(f, r);
      c = Cd({}, c, {}, p), t = t.replace(f, "");
    } else {
      var s = u.replace(/^\[|\]$/g, "");
      if (t.indexOf(s) === 0)
        t = t.substr(s.length);
      else
        throw new Error("not match");
    }
  }
  return c;
}
function Wd(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  try {
    var a = r.locale, i = a === void 0 ? Fa : a, c = r.backupDate, n = c === void 0 ? /* @__PURE__ */ new Date() : c, u = Gd(t, e, i), o = u.year, s = u.month, l = u.day, d = u.hour, f = u.minute, p = u.second, h = u.millisecond, v = u.isPM, m = u.date, g = u.offset, y = u.weekday, S = u.week;
    if (m)
      return m;
    var E = [o, s, l, d, f, p, h];
    if (E[3] = $d(E[3], v), S !== void 0 && s === void 0 && l === void 0) {
      var A = Os(o === void 0 ? n : new Date(o, 3), {
        firstDayOfWeek: i.firstDayOfWeek,
        firstWeekContainsDate: i.firstWeekContainsDate
      });
      return new Date(A.getTime() + (S - 1) * 7 * 24 * 3600 * 1e3);
    }
    var w, L = Vd(E, n);
    return g !== void 0 ? (L[6] += g * 60 * 1e3, w = zd.apply(void 0, Oi(L))) : w = Hd.apply(void 0, Oi(L)), y !== void 0 && w.getDay() !== y ? /* @__PURE__ */ new Date(NaN) : w;
  } catch {
    return /* @__PURE__ */ new Date(NaN);
  }
}
var Yd = Object.defineProperty, Kd = Object.defineProperties, Xd = Object.getOwnPropertyDescriptors, xo = Object.getOwnPropertySymbols, Us = Object.prototype.hasOwnProperty, Ns = Object.prototype.propertyIsEnumerable, Ii = (t, e, r) => e in t ? Yd(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, yt = (t, e) => {
  for (var r in e || (e = {}))
    Us.call(e, r) && Ii(t, r, e[r]);
  if (xo)
    for (var r of xo(e))
      Ns.call(e, r) && Ii(t, r, e[r]);
  return t;
}, Qt = (t, e) => Kd(t, Xd(e)), Jd = (t, e) => {
  var r = {};
  for (var a in t)
    Us.call(t, a) && e.indexOf(a) < 0 && (r[a] = t[a]);
  if (t != null && xo)
    for (var a of xo(t))
      e.indexOf(a) < 0 && Ns.call(t, a) && (r[a] = t[a]);
  return r;
};
const Qd = {
  formatLocale: Fa,
  yearFormat: "YYYY",
  monthFormat: "MMM",
  monthBeforeYear: !0
};
let vr = "en";
const Zn = {};
Zn[vr] = Qd;
function js(t, e, r = !1) {
  if (typeof t != "string")
    return Zn[vr];
  let a = vr;
  return Zn[t] && (a = t), e && (Zn[t] = e, a = t), r || (vr = a), Zn[t] || Zn[vr];
}
function ma(t) {
  return js(t, void 0, !0);
}
function Na(t, e) {
  if (!Array.isArray(t))
    return [];
  const r = [], a = t.length;
  let i = 0;
  for (e = e || a; i < a; )
    r.push(t.slice(i, i += e));
  return r;
}
function Ri(t) {
  return Array.isArray(t) ? t[t.length - 1] : void 0;
}
function Tn(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function vn(t, e) {
  const r = {};
  return Tn(t) && (Array.isArray(e) || (e = [e]), e.forEach((a) => {
    Object.prototype.hasOwnProperty.call(t, a) && (r[a] = t[a]);
  })), r;
}
function ks(t, e) {
  if (!Tn(t))
    return {};
  let r = t;
  return Tn(e) && Object.keys(e).forEach((a) => {
    let i = e[a];
    const c = t[a];
    Tn(i) && Tn(c) && (i = ks(c, i)), r = Qt(yt({}, r), { [a]: i });
  }), r;
}
function Jo(t) {
  const e = parseInt(String(t), 10);
  return e < 10 ? `0${e}` : `${e}`;
}
function Zd(t) {
  const e = /-(\w)/g;
  return t.replace(e, (r, a) => a ? a.toUpperCase() : "");
}
const Bs = "datepicker_locale", $s = "datepicker_prefixClass", Vs = "datepicker_getWeek";
function ja() {
  return wa(Bs, Bl(ma()));
}
function qd(t) {
  const e = an(() => Tn(t.value) ? ks(ma(), t.value) : ma(t.value));
  return Ta(Bs, e), e;
}
function _d(t) {
  Ta($s, t);
}
function Rt() {
  return wa($s, "mx");
}
function ef(t) {
  Ta(Vs, t);
}
function tf() {
  return wa(Vs, Da);
}
function nf(t) {
  const e = t.style.display, r = t.style.visibility;
  t.style.display = "block", t.style.visibility = "hidden";
  const a = window.getComputedStyle(t), i = t.offsetWidth + parseInt(a.marginLeft, 10) + parseInt(a.marginRight, 10), c = t.offsetHeight + parseInt(a.marginTop, 10) + parseInt(a.marginBottom, 10);
  return t.style.display = e, t.style.visibility = r, { width: i, height: c };
}
function rf(t, e, r, a) {
  let i = 0, c = 0, n = 0, u = 0;
  const o = t.getBoundingClientRect(), s = document.documentElement.clientWidth, l = document.documentElement.clientHeight;
  return a && (n = window.pageXOffset + o.left, u = window.pageYOffset + o.top), s - o.left < e && o.right < e ? i = n - o.left + 1 : o.left + o.width / 2 <= s / 2 ? i = n : i = n + o.width - e, o.top <= r && l - o.bottom <= r ? c = u + l - o.top - r : o.top + o.height / 2 <= l / 2 ? c = u + o.height : c = u - r, { left: `${i}px`, top: `${c}px` };
}
function ka(t, e = document.body) {
  if (!t || t === e)
    return null;
  const r = (c, n) => getComputedStyle(c, null).getPropertyValue(n);
  return /(auto|scroll)/.test(r(t, "overflow") + r(t, "overflow-y") + r(t, "overflow-x")) ? t : ka(t.parentElement, e);
}
let Zr;
function of() {
  if (typeof window > "u")
    return 0;
  if (Zr !== void 0)
    return Zr;
  const t = document.createElement("div");
  t.style.visibility = "hidden", t.style.overflow = "scroll", t.style.width = "100px", t.style.position = "absolute", t.style.top = "-9999px", document.body.appendChild(t);
  const e = document.createElement("div");
  return e.style.width = "100%", t.appendChild(e), Zr = t.offsetWidth - e.offsetWidth, t.parentNode.removeChild(t), Zr;
}
const Di = "ontouchend" in document ? "touchstart" : "mousedown";
function af(t) {
  let e = !1;
  return function(...a) {
    e || (e = !0, requestAnimationFrame(() => {
      e = !1, t.apply(this, a);
    }));
  };
}
function bn(t, e) {
  return { setup: t, name: t.name, props: e };
}
function xn(t, e) {
  return new Proxy(t, {
    get(a, i) {
      const c = a[i];
      return c !== void 0 ? c : e[i];
    }
  });
}
const Dn = () => (t) => t, sf = (t, e) => {
  const r = {};
  for (const a in t)
    if (Object.prototype.hasOwnProperty.call(t, a)) {
      const i = Zd(a);
      let c = t[a];
      e.indexOf(i) !== -1 && c === "" && (c = !0), r[i] = c;
    }
  return r;
};
function lf(t, {
  slots: e
}) {
  const r = xn(t, {
    appendToBody: !0
  }), a = Rt(), i = gt(null), c = gt({
    left: "",
    top: ""
  }), n = () => {
    if (!r.visible || !i.value)
      return;
    const o = r.getRelativeElement();
    if (!o)
      return;
    const {
      width: s,
      height: l
    } = nf(i.value);
    c.value = rf(o, s, l, r.appendToBody);
  };
  Jt(n, {
    flush: "post"
  }), Jt((o) => {
    const s = r.getRelativeElement();
    if (!s)
      return;
    const l = ka(s) || window, d = af(n);
    l.addEventListener("scroll", d), window.addEventListener("resize", d), o(() => {
      l.removeEventListener("scroll", d), window.removeEventListener("resize", d);
    });
  }, {
    flush: "post"
  });
  const u = (o) => {
    if (!r.visible)
      return;
    const s = o.target, l = i.value, d = r.getRelativeElement();
    l && !l.contains(s) && d && !d.contains(s) && r.onClickOutside(o);
  };
  return Jt((o) => {
    document.addEventListener(Di, u), o(() => {
      document.removeEventListener(Di, u);
    });
  }), () => ue(Vl, {
    to: "body",
    disabled: !r.appendToBody
  }, {
    default: () => [ue(Aa, {
      name: `${a}-zoom-in-down`
    }, {
      default: () => {
        var o;
        return [r.visible && ue("div", {
          ref: i,
          class: `${a}-datepicker-main ${a}-datepicker-popup ${r.className}`,
          style: [yt({
            position: "absolute"
          }, c.value), r.style || {}]
        }, [(o = e.default) == null ? void 0 : o.call(e)])];
      }
    })]
  });
}
const uf = Dn()(["style", "className", "visible", "appendToBody", "onClickOutside", "getRelativeElement"]);
var cf = bn(lf, uf);
const df = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024",
  width: "1em",
  height: "1em"
}, ff = /* @__PURE__ */ F("path", { d: "M940.218 107.055H730.764v-60.51H665.6v60.51H363.055v-60.51H297.89v60.51H83.78c-18.617 0-32.581 13.963-32.581 32.581v805.237c0 18.618 13.964 32.582 32.582 32.582h861.09c18.619 0 32.583-13.964 32.583-32.582V139.636c-4.655-18.618-18.619-32.581-37.237-32.581zm-642.327 65.163v60.51h65.164v-60.51h307.2v60.51h65.163v-60.51h176.873v204.8H116.364v-204.8H297.89zM116.364 912.291V442.18H912.29v470.11H116.364z" }, null, -1), hf = [
  ff
];
function Hs(t, e) {
  return ae(), le("svg", df, hf);
}
const pf = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024",
  width: "1em",
  height: "1em"
}, vf = /* @__PURE__ */ F("path", { d: "M810.005 274.005 572.011 512l237.994 237.995-60.01 60.01L512 572.011 274.005 810.005l-60.01-60.01L451.989 512 213.995 274.005l60.01-60.01L512 451.989l237.995-237.994z" }, null, -1), mf = [
  vf
];
function gf(t, e) {
  return ae(), le("svg", pf, mf);
}
const yf = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em"
}, bf = /* @__PURE__ */ F("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}, null, -1), xf = /* @__PURE__ */ F("path", { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }, null, -1), Sf = /* @__PURE__ */ F("path", { d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" }, null, -1), Ef = [
  bf,
  xf,
  Sf
];
function wf(t, e) {
  return ae(), le("svg", yf, Ef);
}
function Bn(t, e = 0, r = 1, a = 0, i = 0, c = 0, n = 0) {
  const u = new Date(t, e, r, a, i, c, n);
  return t < 100 && t >= 0 && u.setFullYear(t), u;
}
function yn(t) {
  return t instanceof Date && !isNaN(t.getTime());
}
function $n(t) {
  return Array.isArray(t) && t.length === 2 && t.every(yn) && t[0] <= t[1];
}
function Tf(t) {
  return Array.isArray(t) && t.every(yn);
}
function jo(...t) {
  if (t[0] !== void 0 && t[0] !== null) {
    const r = new Date(t[0]);
    if (yn(r))
      return r;
  }
  const e = t.slice(1);
  return e.length ? jo(...e) : /* @__PURE__ */ new Date();
}
function Af(t) {
  const e = new Date(t);
  return e.setMonth(0, 1), e.setHours(0, 0, 0, 0), e;
}
function Fi(t) {
  const e = new Date(t);
  return e.setDate(1), e.setHours(0, 0, 0, 0), e;
}
function Pn(t) {
  const e = new Date(t);
  return e.setHours(0, 0, 0, 0), e;
}
function Cf({
  firstDayOfWeek: t,
  year: e,
  month: r
}) {
  const a = [], i = Bn(e, r, 0), c = i.getDate(), n = c - (i.getDay() + 7 - t) % 7;
  for (let l = n; l <= c; l++)
    a.push(Bn(e, r, l - c));
  i.setMonth(r + 1, 0);
  const u = i.getDate();
  for (let l = 1; l <= u; l++)
    a.push(Bn(e, r, l));
  const o = c - n + 1, s = 6 * 7 - o - u;
  for (let l = 1; l <= s; l++)
    a.push(Bn(e, r, u + l));
  return a;
}
function So(t, e) {
  const r = new Date(t), a = typeof e == "function" ? e(r.getMonth()) : Number(e), i = r.getFullYear(), c = Bn(i, a + 1, 0).getDate(), n = r.getDate();
  return r.setMonth(a, Math.min(n, c)), r;
}
function _n(t, e) {
  const r = new Date(t), a = typeof e == "function" ? e(r.getFullYear()) : e;
  return r.setFullYear(a), r;
}
function Of(t, e) {
  const r = new Date(e), a = new Date(t), i = r.getFullYear() - a.getFullYear(), c = r.getMonth() - a.getMonth();
  return i * 12 + c;
}
function Eo(t, e) {
  const r = new Date(t), a = new Date(e);
  return r.setHours(a.getHours(), a.getMinutes(), a.getSeconds()), r;
}
function Pf(t, {
  slots: e
}) {
  const r = xn(t, {
    editable: !0,
    disabled: !1,
    clearable: !0,
    range: !1,
    multiple: !1
  }), a = Rt(), i = gt(null), c = an(() => r.separator || (r.range ? " ~ " : ",")), n = (p) => r.range ? $n(p) : r.multiple ? Tf(p) : yn(p), u = (p) => Array.isArray(p) ? p.some((h) => r.disabledDate(h)) : r.disabledDate(p), o = an(() => i.value !== null ? i.value : typeof r.renderInputText == "function" ? r.renderInputText(r.value) : n(r.value) ? Array.isArray(r.value) ? r.value.map((p) => r.formatDate(p)).join(c.value) : r.formatDate(r.value) : ""), s = (p) => {
    var h;
    p && p.stopPropagation(), r.onChange(r.range ? [null, null] : null), (h = r.onClear) == null || h.call(r);
  }, l = () => {
    var p;
    if (!r.editable || i.value === null)
      return;
    const h = i.value.trim();
    if (i.value = null, h === "") {
      s();
      return;
    }
    let v;
    if (r.range) {
      let m = h.split(c.value);
      m.length !== 2 && (m = h.split(c.value.trim())), v = m.map((g) => r.parseDate(g.trim()));
    } else r.multiple ? v = h.split(c.value).map((m) => r.parseDate(m.trim())) : v = r.parseDate(h);
    n(v) && !u(v) ? r.onChange(v) : (p = r.onInputError) == null || p.call(r, h);
  }, d = (p) => {
    i.value = typeof p == "string" ? p : p.target.value;
  }, f = (p) => {
    const {
      keyCode: h
    } = p;
    h === 9 ? r.onBlur() : h === 13 && l();
  };
  return () => {
    var p, h, v;
    const m = !r.disabled && r.clearable && o.value, g = Qt(yt({
      name: "date",
      type: "text",
      autocomplete: "off",
      value: o.value,
      class: r.inputClass || `${a}-input`,
      readonly: !r.editable,
      disabled: r.disabled,
      placeholder: r.placeholder
    }, r.inputAttr), {
      onFocus: r.onFocus,
      onKeydown: f,
      onInput: d,
      onChange: l
    });
    return ue("div", {
      class: `${a}-input-wrapper`,
      onClick: r.onClick
    }, [((p = e.input) == null ? void 0 : p.call(e, g)) || ue("input", g, null), m ? ue("i", {
      class: `${a}-icon-clear`,
      onClick: s
    }, [((h = e["icon-clear"]) == null ? void 0 : h.call(e)) || ue(gf, null, null)]) : null, ue("i", {
      class: `${a}-icon-calendar`
    }, [((v = e["icon-calendar"]) == null ? void 0 : v.call(e)) || ue(Hs, null, null)])]);
  };
}
const Ba = Dn()(["placeholder", "editable", "disabled", "clearable", "inputClass", "inputAttr", "range", "multiple", "separator", "renderInputText", "onInputError", "onClear"]), If = Dn()(["value", "formatDate", "parseDate", "disabledDate", "onChange", "onFocus", "onBlur", "onClick", ...Ba]);
var Rf = bn(Pf, If);
function Df(t, {
  slots: e
}) {
  var r;
  const a = xn(t, {
    prefixClass: "mx",
    valueType: "date",
    format: "YYYY-MM-DD",
    type: "date",
    disabledDate: () => !1,
    disabledTime: () => !1,
    confirmText: "OK"
  });
  _d(a.prefixClass), ef(((r = a.formatter) == null ? void 0 : r.getWeek) || Da);
  const i = qd(kl(t, "lang")), c = gt(), n = () => c.value, u = gt(!1), o = an(() => !a.disabled && (typeof a.open == "boolean" ? a.open : u.value)), s = () => {
    var w, L;
    a.disabled || o.value || (u.value = !0, (w = a["onUpdate:open"]) == null || w.call(a, !0), (L = a.onOpen) == null || L.call(a));
  }, l = () => {
    var w, L;
    o.value && (u.value = !1, (w = a["onUpdate:open"]) == null || w.call(a, !1), (L = a.onClose) == null || L.call(a));
  }, d = (w, L) => (L = L || a.format, Tn(a.formatter) && typeof a.formatter.stringify == "function" ? a.formatter.stringify(w, L) : Ma(w, L, {
    locale: i.value.formatLocale
  })), f = (w, L) => {
    if (L = L || a.format, Tn(a.formatter) && typeof a.formatter.parse == "function")
      return a.formatter.parse(w, L);
    const j = /* @__PURE__ */ new Date();
    return Wd(w, L, {
      locale: i.value.formatLocale,
      backupDate: j
    });
  }, p = (w) => {
    switch (a.valueType) {
      case "date":
        return w instanceof Date ? new Date(w.getTime()) : /* @__PURE__ */ new Date(NaN);
      case "timestamp":
        return typeof w == "number" ? new Date(w) : /* @__PURE__ */ new Date(NaN);
      case "format":
        return typeof w == "string" ? f(w) : /* @__PURE__ */ new Date(NaN);
      default:
        return typeof w == "string" ? f(w, a.valueType) : /* @__PURE__ */ new Date(NaN);
    }
  }, h = (w) => {
    if (!yn(w))
      return null;
    switch (a.valueType) {
      case "date":
        return w;
      case "timestamp":
        return w.getTime();
      case "format":
        return d(w);
      default:
        return d(w, a.valueType);
    }
  }, v = an(() => {
    const w = a.value;
    return a.range ? (Array.isArray(w) ? w.slice(0, 2) : [null, null]).map(p) : a.multiple ? (Array.isArray(w) ? w : []).map(p) : p(w);
  }), m = (w, L, j = !0) => {
    var U, N;
    const $ = Array.isArray(w) ? w.map(h) : h(w);
    return (U = a["onUpdate:value"]) == null || U.call(a, $), (N = a.onChange) == null || N.call(a, $, L), j && l(), $;
  }, g = gt(/* @__PURE__ */ new Date());
  Jt(() => {
    o.value && (g.value = v.value);
  });
  const y = (w, L) => {
    a.confirm ? g.value = w : m(w, L, !a.multiple && (L === a.type || L === "time"));
  }, S = () => {
    var w;
    const L = m(g.value);
    (w = a.onConfirm) == null || w.call(a, L);
  }, E = (w) => a.disabledDate(w) || a.disabledTime(w), A = (w) => {
    var L;
    const {
      prefixClass: j
    } = a;
    return ue("div", {
      class: `${j}-datepicker-sidebar`
    }, [(L = e.sidebar) == null ? void 0 : L.call(e, w), (a.shortcuts || []).map((U, N) => ue("button", {
      key: N,
      "data-index": N,
      type: "button",
      class: `${j}-btn ${j}-btn-text ${j}-btn-shortcut`,
      onClick: () => {
        var $;
        const H = ($ = U.onClick) == null ? void 0 : $.call(U);
        H && m(H);
      }
    }, [U.text]))]);
  };
  return () => {
    var w, L;
    const {
      prefixClass: j,
      disabled: U,
      confirm: N,
      range: $,
      popupClass: H,
      popupStyle: k,
      appendToBody: z
    } = a, Y = {
      value: g.value,
      "onUpdate:value": y,
      emit: m
    }, W = e.header && ue("div", {
      class: `${j}-datepicker-header`
    }, [e.header(Y)]), re = (e.footer || N) && ue("div", {
      class: `${j}-datepicker-footer`
    }, [(w = e.footer) == null ? void 0 : w.call(e, Y), N && ue("button", {
      type: "button",
      class: `${j}-btn ${j}-datepicker-btn-confirm`,
      onClick: S
    }, [a.confirmText])]), X = (L = e.content) == null ? void 0 : L.call(e, Y), he = (e.sidebar || a.shortcuts) && A(Y);
    return ue("div", {
      ref: c,
      class: {
        [`${j}-datepicker`]: !0,
        [`${j}-datepicker-range`]: $,
        disabled: U
      }
    }, [ue(Rf, Qt(yt({}, vn(a, Ba)), {
      value: v.value,
      formatDate: d,
      parseDate: f,
      disabledDate: E,
      onChange: m,
      onClick: s,
      onFocus: s,
      onBlur: l
    }), vn(e, ["icon-calendar", "icon-clear", "input"])), ue(cf, {
      className: H,
      style: k,
      visible: o.value,
      appendToBody: z,
      getRelativeElement: n,
      onClickOutside: l
    }, {
      default: () => [he, ue("div", {
        class: `${j}-datepicker-content`
      }, [W, X, re])]
    })]);
  };
}
const Ff = Dn()(["value", "valueType", "type", "format", "formatter", "lang", "prefixClass", "appendToBody", "open", "popupClass", "popupStyle", "confirm", "confirmText", "shortcuts", "disabledDate", "disabledTime", "onOpen", "onClose", "onConfirm", "onChange", "onUpdate:open", "onUpdate:value"]), Mf = [...Ff, ...Ba];
var Mi = bn(Df, Mf);
function qr(t) {
  var e = t, {
    value: r
  } = e, a = Jd(e, [
    "value"
  ]);
  const i = Rt();
  return ue("button", Qt(yt({}, a), {
    type: "button",
    class: `${i}-btn ${i}-btn-text ${i}-btn-icon-${r}`
  }), [ue("i", {
    class: `${i}-icon-${r}`
  }, null)]);
}
function $a({
  type: t,
  calendar: e,
  onUpdateCalendar: r
}, {
  slots: a
}) {
  var i;
  const c = Rt(), n = () => {
    r(So(e, (f) => f - 1));
  }, u = () => {
    r(So(e, (f) => f + 1));
  }, o = () => {
    r(_n(e, (f) => f - 1));
  }, s = () => {
    r(_n(e, (f) => f + 1));
  }, l = () => {
    r(_n(e, (f) => f - 10));
  }, d = () => {
    r(_n(e, (f) => f + 10));
  };
  return ue("div", {
    class: `${c}-calendar-header`
  }, [ue(qr, {
    value: "double-left",
    onClick: t === "year" ? l : o
  }, null), t === "date" && ue(qr, {
    value: "left",
    onClick: n
  }, null), ue(qr, {
    value: "double-right",
    onClick: t === "year" ? d : s
  }, null), t === "date" && ue(qr, {
    value: "right",
    onClick: u
  }, null), ue("span", {
    class: `${c}-calendar-header-label`
  }, [(i = a.default) == null ? void 0 : i.call(a)])]);
}
function Lf({
  calendar: t,
  isWeekMode: e,
  showWeekNumber: r,
  titleFormat: a,
  getWeekActive: i,
  getCellClasses: c,
  onSelect: n,
  onUpdatePanel: u,
  onUpdateCalendar: o,
  onDateMouseEnter: s,
  onDateMouseLeave: l
}) {
  const d = Rt(), f = tf(), p = ja().value, {
    yearFormat: h,
    monthBeforeYear: v,
    monthFormat: m = "MMM",
    formatLocale: g
  } = p, y = g.firstDayOfWeek || 0;
  let S = p.days || g.weekdaysMin;
  S = S.concat(S).slice(y, y + 7);
  const E = t.getFullYear(), A = t.getMonth(), w = Na(Cf({
    firstDayOfWeek: y,
    year: E,
    month: A
  }), 7), L = (Y, W) => Ma(Y, W, {
    locale: p.formatLocale
  }), j = (Y) => {
    u(Y);
  }, U = (Y) => {
    const W = Y.getAttribute("data-index"), [re, X] = W.split(",").map((fe) => parseInt(fe, 10)), he = w[re][X];
    return new Date(he);
  }, N = (Y) => {
    n(U(Y.currentTarget));
  }, $ = (Y) => {
    s && s(U(Y.currentTarget));
  }, H = (Y) => {
    l && l(U(Y.currentTarget));
  }, k = ue("button", {
    type: "button",
    class: `${d}-btn ${d}-btn-text ${d}-btn-current-year`,
    onClick: () => j("year")
  }, [L(t, h)]), z = ue("button", {
    type: "button",
    class: `${d}-btn ${d}-btn-text ${d}-btn-current-month`,
    onClick: () => j("month")
  }, [L(t, m)]);
  return r = typeof r == "boolean" ? r : e, ue("div", {
    class: [`${d}-calendar ${d}-calendar-panel-date`, {
      [`${d}-calendar-week-mode`]: e
    }]
  }, [ue($a, {
    type: "date",
    calendar: t,
    onUpdateCalendar: o
  }, {
    default: () => [v ? [z, k] : [k, z]]
  }), ue("div", {
    class: `${d}-calendar-content`
  }, [ue("table", {
    class: `${d}-table ${d}-table-date`
  }, [ue("thead", null, [ue("tr", null, [r && ue("th", {
    class: `${d}-week-number-header`
  }, null), S.map((Y) => ue("th", {
    key: Y
  }, [Y]))])]), ue("tbody", null, [w.map((Y, W) => ue("tr", {
    key: W,
    class: [`${d}-date-row`, {
      [`${d}-active-week`]: i(Y)
    }]
  }, [r && ue("td", {
    class: `${d}-week-number`,
    "data-index": `${W},0`,
    onClick: N
  }, [ue("div", null, [f(Y[0])])]), Y.map((re, X) => ue("td", {
    key: X,
    class: ["cell", c(re)],
    title: L(re, a),
    "data-index": `${W},${X}`,
    onClick: N,
    onMouseenter: $,
    onMouseleave: H
  }, [ue("div", null, [re.getDate()])]))]))])])])]);
}
function Uf({
  calendar: t,
  getCellClasses: e,
  onSelect: r,
  onUpdateCalendar: a,
  onUpdatePanel: i
}) {
  const c = Rt(), n = ja().value, u = n.months || n.formatLocale.monthsShort, o = (l) => Bn(t.getFullYear(), l), s = (l) => {
    const f = l.currentTarget.getAttribute("data-month");
    r(o(parseInt(f, 10)));
  };
  return ue("div", {
    class: `${c}-calendar ${c}-calendar-panel-month`
  }, [ue($a, {
    type: "month",
    calendar: t,
    onUpdateCalendar: a
  }, {
    default: () => [ue("button", {
      type: "button",
      class: `${c}-btn ${c}-btn-text ${c}-btn-current-year`,
      onClick: () => i("year")
    }, [t.getFullYear()])]
  }), ue("div", {
    class: `${c}-calendar-content`
  }, [ue("table", {
    class: `${c}-table ${c}-table-month`
  }, [Na(u, 3).map((l, d) => ue("tr", {
    key: d
  }, [l.map((f, p) => {
    const h = d * 3 + p;
    return ue("td", {
      key: p,
      class: ["cell", e(o(h))],
      "data-month": h,
      onClick: s
    }, [ue("div", null, [f])]);
  })]))])])]);
}
const Nf = (t) => {
  const e = Math.floor(t.getFullYear() / 10) * 10, r = [];
  for (let a = 0; a < 10; a++)
    r.push(e + a);
  return Na(r, 2);
};
function jf({
  calendar: t,
  getCellClasses: e = () => [],
  getYearPanel: r = Nf,
  onSelect: a,
  onUpdateCalendar: i
}) {
  const c = Rt(), n = (d) => Bn(d, 0), u = (d) => {
    const p = d.currentTarget.getAttribute("data-year");
    a(n(parseInt(p, 10)));
  }, o = r(new Date(t)), s = o[0][0], l = Ri(Ri(o));
  return ue("div", {
    class: `${c}-calendar ${c}-calendar-panel-year`
  }, [ue($a, {
    type: "year",
    calendar: t,
    onUpdateCalendar: i
  }, {
    default: () => [ue("span", null, [s]), ue("span", {
      class: `${c}-calendar-decade-separator`
    }, null), ue("span", null, [l])]
  }), ue("div", {
    class: `${c}-calendar-content`
  }, [ue("table", {
    class: `${c}-table ${c}-table-year`
  }, [o.map((d, f) => ue("tr", {
    key: f
  }, [d.map((p, h) => ue("td", {
    key: h,
    class: ["cell", e(n(p))],
    "data-year": p,
    onClick: u
  }, [ue("div", null, [p])]))]))])])]);
}
function kf(t) {
  const e = xn(t, {
    defaultValue: Pn(/* @__PURE__ */ new Date()),
    type: "date",
    disabledDate: () => !1,
    getClasses: () => [],
    titleFormat: "YYYY-MM-DD"
  }), r = an(() => (Array.isArray(e.value) ? e.value : [e.value]).filter(yn).map((y) => e.type === "year" ? Af(y) : e.type === "month" ? Fi(y) : Pn(y))), a = gt(/* @__PURE__ */ new Date());
  Jt(() => {
    let g = e.calendar;
    if (!yn(g)) {
      const {
        length: y
      } = r.value;
      g = jo(y > 0 ? r.value[y - 1] : e.defaultValue);
    }
    a.value = Fi(g);
  });
  const i = (g) => {
    var y;
    a.value = g, (y = e.onCalendarChange) == null || y.call(e, g);
  }, c = gt("date");
  Jt(() => {
    const g = ["date", "month", "year"], y = Math.max(g.indexOf(e.type), g.indexOf(e.defaultPanel));
    c.value = y !== -1 ? g[y] : "date";
  });
  const n = (g) => {
    var y;
    const S = c.value;
    c.value = g, (y = e.onPanelChange) == null || y.call(e, g, S);
  }, u = (g) => e.disabledDate(new Date(g), r.value), o = (g, y) => {
    var S, E, A;
    if (!u(g))
      if ((S = e.onPick) == null || S.call(e, g), e.multiple === !0) {
        const w = r.value.filter((L) => L.getTime() !== g.getTime());
        w.length === r.value.length && w.push(g), (E = e["onUpdate:value"]) == null || E.call(e, w, y);
      } else
        (A = e["onUpdate:value"]) == null || A.call(e, g, y);
  }, s = (g) => {
    o(g, e.type === "week" ? "week" : "date");
  }, l = (g) => {
    if (e.type === "year")
      o(g, "year");
    else if (i(g), n("month"), e.partialUpdate && r.value.length === 1) {
      const y = _n(r.value[0], g.getFullYear());
      o(y, "year");
    }
  }, d = (g) => {
    if (e.type === "month")
      o(g, "month");
    else if (i(g), n("date"), e.partialUpdate && r.value.length === 1) {
      const y = So(_n(r.value[0], g.getFullYear()), g.getMonth());
      o(y, "month");
    }
  }, f = (g, y = []) => (u(g) ? y.push("disabled") : r.value.some((S) => S.getTime() === g.getTime()) && y.push("active"), y.concat(e.getClasses(g, r.value, y.join(" ")))), p = (g) => {
    const y = g.getMonth() !== a.value.getMonth(), S = [];
    return g.getTime() === (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0) && S.push("today"), y && S.push("not-current-month"), f(g, S);
  }, h = (g) => e.type !== "month" ? a.value.getMonth() === g.getMonth() ? "active" : "" : f(g), v = (g) => e.type !== "year" ? a.value.getFullYear() === g.getFullYear() ? "active" : "" : f(g), m = (g) => {
    if (e.type !== "week")
      return !1;
    const y = g[0].getTime(), S = g[6].getTime();
    return r.value.some((E) => {
      const A = E.getTime();
      return A >= y && A <= S;
    });
  };
  return () => c.value === "year" ? ue(jf, {
    calendar: a.value,
    getCellClasses: v,
    getYearPanel: e.getYearPanel,
    onSelect: l,
    onUpdateCalendar: i
  }, null) : c.value === "month" ? ue(Uf, {
    calendar: a.value,
    getCellClasses: h,
    onSelect: d,
    onUpdatePanel: n,
    onUpdateCalendar: i
  }, null) : ue(Lf, {
    isWeekMode: e.type === "week",
    showWeekNumber: e.showWeekNumber,
    titleFormat: e.titleFormat,
    calendar: a.value,
    getCellClasses: p,
    getWeekActive: m,
    onSelect: s,
    onUpdatePanel: n,
    onUpdateCalendar: i,
    onDateMouseEnter: e.onDateMouseEnter,
    onDateMouseLeave: e.onDateMouseLeave
  }, null);
}
const ko = Dn()(["type", "value", "defaultValue", "defaultPanel", "disabledDate", "getClasses", "calendar", "multiple", "partialUpdate", "showWeekNumber", "titleFormat", "getYearPanel", "onDateMouseEnter", "onDateMouseLeave", "onCalendarChange", "onPanelChange", "onUpdate:value", "onPick"]);
var Bo = bn(kf, ko);
const Li = (t, e) => {
  const r = t.getTime();
  let [a, i] = e.map((c) => c.getTime());
  return a > i && ([a, i] = [i, a]), r > a && r < i;
};
function Bf(t) {
  const e = xn(t, {
    defaultValue: /* @__PURE__ */ new Date(),
    type: "date"
  }), r = Rt(), a = an(() => {
    let m = Array.isArray(e.defaultValue) ? e.defaultValue : [e.defaultValue, e.defaultValue];
    return m = m.map((g) => Pn(g)), $n(m) ? m : [/* @__PURE__ */ new Date(), /* @__PURE__ */ new Date()].map((g) => Pn(g));
  }), i = gt([/* @__PURE__ */ new Date(NaN), /* @__PURE__ */ new Date(NaN)]);
  Jt(() => {
    $n(e.value) && (i.value = e.value);
  });
  const c = (m, g) => {
    var y;
    const [S, E] = i.value;
    yn(S) && !yn(E) ? (S.getTime() > m.getTime() ? i.value = [m, S] : i.value = [S, m], (y = e["onUpdate:value"]) == null || y.call(e, i.value, g)) : i.value = [m, /* @__PURE__ */ new Date(NaN)];
  }, n = gt([/* @__PURE__ */ new Date(), /* @__PURE__ */ new Date()]), u = an(() => $n(e.calendar) ? e.calendar : n.value), o = an(() => e.type === "year" ? 10 * 12 : e.type === "month" ? 1 * 12 : 1), s = (m, g) => {
    var y;
    const S = Of(m[0], m[1]), E = o.value - S;
    if (E > 0) {
      const A = g === 1 ? 0 : 1;
      m[A] = So(m[A], (w) => w + (A === 0 ? -E : E));
    }
    n.value = m, (y = e.onCalendarChange) == null || y.call(e, m, g);
  }, l = (m) => {
    s([m, u.value[1]], 0);
  }, d = (m) => {
    s([u.value[0], m], 1);
  };
  Jt(() => {
    const m = $n(e.value) ? e.value : a.value;
    s(m.slice(0, 2));
  });
  const f = gt(null), p = (m) => f.value = m, h = () => f.value = null, v = (m, g, y) => {
    const S = e.getClasses ? e.getClasses(m, g, y) : [], E = Array.isArray(S) ? S : [S];
    return /disabled|active/.test(y) ? E : (g.length === 2 && Li(m, g) && E.push("in-range"), g.length === 1 && f.value && Li(m, [g[0], f.value]) ? E.concat("hover-in-range") : E);
  };
  return () => {
    const m = u.value.map((g, y) => {
      const S = Qt(yt({}, e), {
        calendar: g,
        value: i.value,
        defaultValue: a.value[y],
        getClasses: v,
        partialUpdate: !1,
        multiple: !1,
        "onUpdate:value": c,
        onCalendarChange: y === 0 ? l : d,
        onDateMouseLeave: h,
        onDateMouseEnter: p
      });
      return ue(Bo, S, null);
    });
    return ue("div", {
      class: `${r}-calendar-range`
    }, [m]);
  };
}
const Va = ko;
var Ha = bn(Bf, Va);
const zs = Ul({
  setup(t, {
    slots: e
  }) {
    const r = Rt(), a = gt(), i = gt(""), c = gt("");
    la(() => {
      if (!a.value)
        return;
      const h = a.value, v = h.clientHeight * 100 / h.scrollHeight;
      i.value = v < 100 ? `${v}%` : "";
    });
    const u = of(), o = (h) => {
      const v = h.currentTarget, {
        scrollHeight: m,
        scrollTop: g
      } = v;
      c.value = `${g * 100 / m}%`;
    };
    let s = !1, l = 0;
    const d = (h) => {
      h.stopImmediatePropagation();
      const v = h.currentTarget, {
        offsetTop: m
      } = v;
      s = !0, l = h.clientY - m;
    }, f = (h) => {
      if (!s || !a.value)
        return;
      const {
        clientY: v
      } = h, {
        scrollHeight: m,
        clientHeight: g
      } = a.value, S = (v - l) * m / g;
      a.value.scrollTop = S;
    }, p = () => {
      s = !1;
    };
    return la(() => {
      document.addEventListener("mousemove", f), document.addEventListener("mouseup", p);
    }), Nl(() => {
      document.addEventListener("mousemove", f), document.addEventListener("mouseup", p);
    }), () => {
      var h;
      return ue("div", {
        class: `${r}-scrollbar`,
        style: {
          position: "relative",
          overflow: "hidden"
        }
      }, [ue("div", {
        ref: a,
        class: `${r}-scrollbar-wrap`,
        style: {
          marginRight: `-${u}px`
        },
        onScroll: o
      }, [(h = e.default) == null ? void 0 : h.call(e)]), ue("div", {
        class: `${r}-scrollbar-track`
      }, [ue("div", {
        class: `${r}-scrollbar-thumb`,
        style: {
          height: i.value,
          top: c.value
        },
        onMousedown: d
      }, null)])]);
    };
  }
});
function $f({
  options: t,
  getClasses: e,
  onSelect: r
}) {
  const a = Rt(), i = (c) => {
    const n = c.target, u = c.currentTarget;
    if (n.tagName.toUpperCase() !== "LI")
      return;
    const o = u.getAttribute("data-type"), s = parseInt(u.getAttribute("data-index"), 10), l = parseInt(n.getAttribute("data-index"), 10), d = t[s].list[l].value;
    r(d, o);
  };
  return ue("div", {
    class: `${a}-time-columns`
  }, [t.map((c, n) => ue(zs, {
    key: c.type,
    class: `${a}-time-column`
  }, {
    default: () => [ue("ul", {
      class: `${a}-time-list`,
      "data-index": n,
      "data-type": c.type,
      onClick: i
    }, [c.list.map((u, o) => ue("li", {
      key: u.text,
      "data-index": o,
      class: [`${a}-time-item`, e(u.value, c.type)]
    }, [u.text]))])]
  }))]);
}
function Vf(t) {
  return typeof t == "function" || Object.prototype.toString.call(t) === "[object Object]" && !$l(t);
}
function Hf(t) {
  let e;
  const r = Rt();
  return ue(zs, null, Vf(e = t.options.map((a) => ue("div", {
    key: a.text,
    class: [`${r}-time-option`, t.getClasses(a.value, "time")],
    onClick: () => t.onSelect(a.value, "time")
  }, [a.text]))) ? e : {
    default: () => [e]
  });
}
function Qo({
  length: t,
  step: e = 1,
  options: r
}) {
  if (Array.isArray(r))
    return r.filter((i) => i >= 0 && i < t);
  e <= 0 && (e = 1);
  const a = [];
  for (let i = 0; i < t; i += e)
    a.push(i);
  return a;
}
function zf(t, e) {
  let { showHour: r, showMinute: a, showSecond: i, use12h: c } = e;
  const n = e.format || "HH:mm:ss";
  r = typeof r == "boolean" ? r : /[HhKk]/.test(n), a = typeof a == "boolean" ? a : /m/.test(n), i = typeof i == "boolean" ? i : /s/.test(n), c = typeof c == "boolean" ? c : /a/i.test(n);
  const u = [], o = c && t.getHours() >= 12;
  return r && u.push({
    type: "hour",
    list: Qo({
      length: c ? 12 : 24,
      step: e.hourStep,
      options: e.hourOptions
    }).map((s) => {
      const l = s === 0 && c ? "12" : Jo(s), d = new Date(t);
      return d.setHours(o ? s + 12 : s), { value: d, text: l };
    })
  }), a && u.push({
    type: "minute",
    list: Qo({
      length: 60,
      step: e.minuteStep,
      options: e.minuteOptions
    }).map((s) => {
      const l = new Date(t);
      return l.setMinutes(s), { value: l, text: Jo(s) };
    })
  }), i && u.push({
    type: "second",
    list: Qo({
      length: 60,
      step: e.secondStep,
      options: e.secondOptions
    }).map((s) => {
      const l = new Date(t);
      return l.setSeconds(s), { value: l, text: Jo(s) };
    })
  }), c && u.push({
    type: "ampm",
    list: ["AM", "PM"].map((s, l) => {
      const d = new Date(t);
      return d.setHours(d.getHours() % 12 + l * 12), { text: s, value: d };
    })
  }), u;
}
function Zo(t = "") {
  const e = t.split(":");
  if (e.length >= 2) {
    const r = parseInt(e[0], 10), a = parseInt(e[1], 10);
    return {
      hours: r,
      minutes: a
    };
  }
  return null;
}
function Gf({
  date: t,
  option: e,
  format: r,
  formatDate: a
}) {
  const i = [];
  if (typeof e == "function")
    return e() || [];
  const c = Zo(e.start), n = Zo(e.end), u = Zo(e.step), o = e.format || r;
  if (c && n && u) {
    const s = c.minutes + c.hours * 60, l = n.minutes + n.hours * 60, d = u.minutes + u.hours * 60, f = Math.floor((l - s) / d);
    for (let p = 0; p <= f; p++) {
      const h = s + p * d, v = Math.floor(h / 60), m = h % 60, g = new Date(t);
      g.setHours(v, m, 0), i.push({
        value: g,
        text: a(g, o)
      });
    }
  }
  return i;
}
const Gs = (t, e, r = 0) => {
  if (r <= 0) {
    requestAnimationFrame(() => {
      t.scrollTop = e;
    });
    return;
  }
  const i = (e - t.scrollTop) / r * 10;
  requestAnimationFrame(() => {
    const c = t.scrollTop + i;
    if (c >= e) {
      t.scrollTop = e;
      return;
    }
    t.scrollTop = c, Gs(t, e, r - 10);
  });
};
function Wf(t) {
  const e = xn(t, {
    defaultValue: Pn(/* @__PURE__ */ new Date()),
    format: "HH:mm:ss",
    timeTitleFormat: "YYYY-MM-DD",
    disabledTime: () => !1,
    scrollDuration: 100
  }), r = Rt(), a = ja(), i = (v, m) => Ma(v, m, {
    locale: a.value.formatLocale
  }), c = gt(/* @__PURE__ */ new Date());
  Jt(() => {
    c.value = jo(e.value, e.defaultValue);
  });
  const n = (v) => Array.isArray(v) ? v.every((m) => e.disabledTime(new Date(m))) : e.disabledTime(new Date(v)), u = (v) => {
    const m = new Date(v);
    return n([m.getTime(), m.setMinutes(0, 0, 0), m.setMinutes(59, 59, 999)]);
  }, o = (v) => {
    const m = new Date(v);
    return n([m.getTime(), m.setSeconds(0, 0), m.setSeconds(59, 999)]);
  }, s = (v) => {
    const m = new Date(v), g = m.getHours() < 12 ? 0 : 12, y = g + 11;
    return n([m.getTime(), m.setHours(g, 0, 0, 0), m.setHours(y, 59, 59, 999)]);
  }, l = (v, m) => m === "hour" ? u(v) : m === "minute" ? o(v) : m === "ampm" ? s(v) : n(v), d = (v, m) => {
    var g;
    if (!l(v, m)) {
      const y = new Date(v);
      c.value = y, n(y) || (g = e["onUpdate:value"]) == null || g.call(e, y, m);
    }
  }, f = (v, m) => l(v, m) ? "disabled" : v.getTime() === c.value.getTime() ? "active" : "", p = gt(), h = (v) => {
    if (!p.value)
      return;
    const m = p.value.querySelectorAll(".active");
    for (let g = 0; g < m.length; g++) {
      const y = m[g], S = ka(y, p.value);
      if (S) {
        const E = y.offsetTop;
        Gs(S, E, v);
      }
    }
  };
  return la(() => h(0)), jl(c, () => h(e.scrollDuration), {
    flush: "post"
  }), () => {
    let v;
    return e.timePickerOptions ? v = ue(Hf, {
      onSelect: d,
      getClasses: f,
      options: Gf({
        date: c.value,
        format: e.format,
        option: e.timePickerOptions,
        formatDate: i
      })
    }, null) : v = ue($f, {
      options: zf(c.value, e),
      onSelect: d,
      getClasses: f
    }, null), ue("div", {
      class: `${r}-time`,
      ref: p
    }, [e.showTimeHeader && ue("div", {
      class: `${r}-time-header`
    }, [ue("button", {
      type: "button",
      class: `${r}-btn ${r}-btn-text ${r}-time-header-title`,
      onClick: e.onClickTitle
    }, [i(c.value, e.timeTitleFormat)])]), ue("div", {
      class: `${r}-time-content`
    }, [v])]);
  };
}
const $o = Dn()(["value", "defaultValue", "format", "timeTitleFormat", "showTimeHeader", "disabledTime", "timePickerOptions", "hourOptions", "minuteOptions", "secondOptions", "hourStep", "minuteStep", "secondStep", "showHour", "showMinute", "showSecond", "use12h", "scrollDuration", "onClickTitle", "onUpdate:value"]);
var Pr = bn(Wf, $o);
function Yf(t) {
  const e = xn(t, {
    defaultValue: Pn(/* @__PURE__ */ new Date()),
    disabledTime: () => !1
  }), r = Rt(), a = gt([/* @__PURE__ */ new Date(NaN), /* @__PURE__ */ new Date(NaN)]);
  Jt(() => {
    $n(e.value) ? a.value = e.value : a.value = [/* @__PURE__ */ new Date(NaN), /* @__PURE__ */ new Date(NaN)];
  });
  const i = (s, l) => {
    var d;
    (d = e["onUpdate:value"]) == null || d.call(e, a.value, s === "time" ? "time-range" : s, l);
  }, c = (s, l) => {
    a.value[0] = s, a.value[1].getTime() >= s.getTime() || (a.value[1] = s), i(l, 0);
  }, n = (s, l) => {
    a.value[1] = s, a.value[0].getTime() <= s.getTime() || (a.value[0] = s), i(l, 1);
  }, u = (s) => e.disabledTime(s, 0), o = (s) => s.getTime() < a.value[0].getTime() || e.disabledTime(s, 1);
  return () => {
    const s = Array.isArray(e.defaultValue) ? e.defaultValue : [e.defaultValue, e.defaultValue];
    return ue("div", {
      class: `${r}-time-range`
    }, [ue(Pr, Qt(yt({}, e), {
      "onUpdate:value": c,
      value: a.value[0],
      defaultValue: s[0],
      disabledTime: u
    }), null), ue(Pr, Qt(yt({}, e), {
      "onUpdate:value": n,
      value: a.value[1],
      defaultValue: s[1],
      disabledTime: o
    }), null)]);
  };
}
const za = $o;
var Ga = bn(Yf, za);
function Ws(t) {
  const e = gt(!1), r = () => {
    var c;
    e.value = !1, (c = t.onShowTimePanelChange) == null || c.call(t, !1);
  }, a = () => {
    var c;
    e.value = !0, (c = t.onShowTimePanelChange) == null || c.call(t, !0);
  };
  return { timeVisible: an(() => typeof t.showTimePanel == "boolean" ? t.showTimePanel : e.value), openTimePanel: a, closeTimePanel: r };
}
function Kf(t) {
  const e = xn(t, {
    disabledTime: () => !1,
    defaultValue: Pn(/* @__PURE__ */ new Date())
  }), r = gt(e.value);
  Jt(() => {
    r.value = e.value;
  });
  const {
    openTimePanel: a,
    closeTimePanel: i,
    timeVisible: c
  } = Ws(e), n = (u, o) => {
    var s;
    o === "date" && a();
    let l = Eo(u, jo(e.value, e.defaultValue));
    if (e.disabledTime(new Date(l)) && (l = Eo(u, e.defaultValue), e.disabledTime(new Date(l)))) {
      r.value = l;
      return;
    }
    (s = e["onUpdate:value"]) == null || s.call(e, l, o);
  };
  return () => {
    const u = Rt(), o = Qt(yt({}, vn(e, ko)), {
      multiple: !1,
      type: "date",
      value: r.value,
      "onUpdate:value": n
    }), s = Qt(yt({}, vn(e, $o)), {
      showTimeHeader: !0,
      value: r.value,
      "onUpdate:value": e["onUpdate:value"],
      onClickTitle: i
    });
    return ue("div", {
      class: `${u}-date-time`
    }, [ue(Bo, o, null), c.value && ue(Pr, s, null)]);
  };
}
const Ys = Dn()(["showTimePanel", "onShowTimePanelChange"]), Xf = [...Ys, ...ko, ...$o];
var Ks = bn(Kf, Xf);
function Jf(t) {
  const e = xn(t, {
    defaultValue: Pn(/* @__PURE__ */ new Date()),
    disabledTime: () => !1
  }), r = gt(e.value);
  Jt(() => {
    r.value = e.value;
  });
  const {
    openTimePanel: a,
    closeTimePanel: i,
    timeVisible: c
  } = Ws(e), n = (u, o) => {
    var s;
    o === "date" && a();
    const l = Array.isArray(e.defaultValue) ? e.defaultValue : [e.defaultValue, e.defaultValue];
    let d = u.map((f, p) => {
      const h = $n(e.value) ? e.value[p] : l[p];
      return Eo(f, h);
    });
    if (d[1].getTime() < d[0].getTime() && (d = [d[0], d[0]]), d.some(e.disabledTime) && (d = u.map((f, p) => Eo(f, l[p])), d.some(e.disabledTime))) {
      r.value = d;
      return;
    }
    (s = e["onUpdate:value"]) == null || s.call(e, d, o);
  };
  return () => {
    const u = Rt(), o = Qt(yt({}, vn(e, Va)), {
      type: "date",
      value: r.value,
      "onUpdate:value": n
    }), s = Qt(yt({}, vn(e, za)), {
      showTimeHeader: !0,
      value: r.value,
      "onUpdate:value": e["onUpdate:value"],
      onClickTitle: i
    });
    return ue("div", {
      class: `${u}-date-time-range`
    }, [ue(Ha, o, null), c.value && ue(Ga, s, null)]);
  };
}
const Qf = [...Ys, ...za, ...Va];
var Xs = bn(Jf, Qf);
const Zf = Dn()(["range", "open", "appendToBody", "clearable", "confirm", "disabled", "editable", "multiple", "partialUpdate", "showHour", "showMinute", "showSecond", "showTimeHeader", "showTimePanel", "showWeekNumber", "use12h"]), Ui = {
  date: "YYYY-MM-DD",
  datetime: "YYYY-MM-DD HH:mm:ss",
  year: "YYYY",
  month: "YYYY-MM",
  time: "HH:mm:ss",
  week: "w"
};
function Js(t, {
  slots: e
}) {
  const r = t.type || "date", a = t.format || Ui[r] || Ui.date, i = Qt(yt({}, sf(t, Zf)), {
    type: r,
    format: a
  });
  return ue(Mi, vn(i, Mi.props), yt({
    content: (c) => {
      if (i.range) {
        const n = r === "time" ? Ga : r === "datetime" ? Xs : Ha;
        return si(n, vn(yt(yt({}, i), c), n.props));
      } else {
        const n = r === "time" ? Pr : r === "datetime" ? Ks : Bo;
        return si(n, vn(yt(yt({}, i), c), n.props));
      }
    },
    "icon-calendar": () => r === "time" ? ue(wf, null, null) : ue(Hs, null, null)
  }, e));
}
const qf = {
  locale: js,
  install: (t) => {
    t.component("DatePicker", Js);
  }
};
var _f = Object.assign(Js, qf, {
  Calendar: Bo,
  CalendarRange: Ha,
  TimePanel: Pr,
  TimeRange: Ga,
  DateTime: Ks,
  DateTimeRange: Xs
});
const eh = {
  name: "VDatepicker",
  components: { DatePicker: _f },
  mixins: [un],
  props: {
    name: {
      type: String,
      required: !0
    },
    field: {},
    modelValue: {
      type: String,
      default: null
    },
    placeholder: String
  },
  data() {
    return {
      date: null
    };
  },
  created() {
    this.modelValue && (this.date = this.modelValue);
  },
  watch: {
    date() {
      this.$emit("update:modelValue", this.date);
    }
  }
}, th = ["name", "id", "value"], nh = ["textContent"], rh = {
  key: 2,
  class: "inline-block text-sm text-gray-600 mt-1.5 brand-200"
};
function oh(t, e, r, a, i, c) {
  var u, o;
  const n = Pt("date-picker");
  return ae(), le("div", {
    class: et(["v-datepicker", (u = r.field) == null ? void 0 : u.class])
  }, [
    F("input", {
      type: "hidden",
      name: r.name,
      id: r.name,
      value: i.date
    }, null, 8, th),
    t.editable ? (ae(), On(n, {
      key: 0,
      value: i.date,
      "onUpdate:value": e[0] || (e[0] = (s) => i.date = s),
      format: "DD/MM/YYYY",
      "value-type": "format",
      type: "date",
      class: "w-full h-[40px]",
      placeholder: r.placeholder
    }, null, 8, ["value", "placeholder"])) : (ae(), le("p", {
      key: 1,
      textContent: Ge(r.modelValue)
    }, null, 8, nh)),
    (o = r.field) != null && o.hint ? (ae(), le("p", rh, Ge(r.field.hint), 1)) : ke("", !0)
  ], 2);
}
const Qs = /* @__PURE__ */ pt(eh, [["render", oh]]), ah = {
  name: "Input",
  mixins: [un],
  props: {
    name: {},
    type: {},
    field: {},
    modelValue: { default: null }
  },
  data() {
    return {
      input: null
    };
  },
  created() {
    this.input = this.modelValue;
  },
  watch: {
    modelValue() {
      this.input = this.modelValue;
    },
    input() {
      this.$emit("update:modelValue", this.input);
    }
  }
}, ih = { class: "flex flex-row-reverse gap-2 items-center justify-end" }, sh = { class: "inline-block text-base text-gray-700" }, lh = ["name", "type", "disabled"], uh = ["textContent"], ch = {
  key: 0,
  class: "inline-block text-sm text-gray-600 mt-1.5 pl-[28px]"
};
function dh(t, e, r, a, i, c) {
  var n;
  return ae(), le("div", null, [
    F("div", ih, [
      F("span", sh, Ge(r.field.label), 1),
      F("div", null, [
        t.editable ? rt((ae(), le("input", {
          key: 0,
          name: r.name,
          type: r.type,
          "onUpdate:modelValue": e[0] || (e[0] = (u) => i.input = u),
          disabled: !t.editable,
          class: "h-5 w-5 text-brand-700 border-gray-300 rounded focus:ring-brand-700 focus:ring-2"
        }, null, 8, lh)), [
          [Ea, i.input]
        ]) : (ae(), le("p", {
          key: 1,
          textContent: Ge(r.modelValue)
        }, null, 8, uh))
      ])
    ]),
    (n = r.field) != null && n.hint ? (ae(), le("p", ch, Ge(r.field.hint), 1)) : ke("", !0)
  ]);
}
const Zs = /* @__PURE__ */ pt(ah, [["render", dh]]), fh = {
  name: "InputWrapper",
  props: {
    field: {
      type: String,
      required: !0
    },
    labelText: {
      type: String
    },
    darkTheme: {
      type: Boolean,
      required: !1
    },
    isRequired: {
      type: Boolean,
      required: !1
    }
  }
}, hh = ["for"], ph = {
  key: 0,
  class: "v-field-label inline-block mb-2"
}, vh = { key: 0 };
function mh(t, e, r, a, i, c) {
  return ae(), le("label", {
    for: r.field,
    class: "block space-y-2xsSpace text-sm font-medium leading-none text-tertiary-700"
  }, [
    r.labelText || t.$slots.label ? (ae(), le("span", ph, [
      t.$slots.label ? gn(t.$slots, "label", { key: 0 }) : (ae(), le(At, { key: 1 }, [
        Xt(Ge(r.labelText) + " ", 1),
        r.isRequired ? (ae(), le("span", vh, " *")) : ke("", !0)
      ], 64))
    ])) : ke("", !0),
    gn(t.$slots, "default")
  ], 8, hh);
}
const gh = /* @__PURE__ */ pt(fh, [["render", mh]]), yh = {
  props: {
    modelValue: {
      type: [Boolean, Number],
      required: !0
    },
    title: {
      type: String,
      required: !1
    },
    isDisabled: {
      type: [Boolean],
      required: !1
    },
    small: {
      type: [Boolean],
      required: !1
    },
    ring: {
      type: [Boolean],
      default: !0,
      required: !1
    }
  },
  computed: {
    classes() {
      return {
        "!bg-brand-700 !hover:bg-brand-700": this.modelValue,
        "!h-3 !w-6": this.small,
        "focus:outline-none focus:ring-2 focus:ring-brand-700 focus:ring-offset-2": this.ring
      };
    }
  },
  methods: {
    toggle() {
      this.isDisabled || this.$emit("update:modelValue", !this.modelValue);
    }
  }
}, bh = { class: "flex items-center gap-2" }, xh = ["aria-checked"], Sh = {
  key: 0,
  class: "text-sm text-gray-700 font-medium"
};
function Eh(t, e, r, a, i, c) {
  return ae(), le("div", bh, [
    F("button", {
      type: "button",
      class: et(["relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-300 transition-colors duration-200 ease-in-out", c.classes]),
      role: "switch",
      "aria-checked": r.modelValue,
      onClick: e[0] || (e[0] = (...n) => c.toggle && c.toggle(...n))
    }, [
      F("span", {
        "aria-hidden": "true",
        class: et(["pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out", {
          "translate-x-5": r.modelValue,
          "translate-x-0": !r.modelValue,
          "!translate-x-3": r.small && r.modelValue,
          "!h-2 !w-2": r.small
        }])
      }, null, 2)
    ], 10, xh),
    r.title ? (ae(), le("span", Sh, Ge(r.title), 1)) : ke("", !0)
  ]);
}
const Wa = /* @__PURE__ */ pt(yh, [["render", Eh]]), wh = {
  name: "VAddress",
  components: { InputWrapper: gh, VToggle: Wa },
  props: {
    modelValue: {
      required: !1
    },
    name: {},
    field: {}
  },
  data() {
    return {
      form: {
        address: null,
        city: null,
        state: null,
        postcode: null,
        lat: null,
        lng: null
      },
      isManual: !1,
      copy: !1
    };
  },
  computed: {
    fullAddress() {
      var t, e, r, a;
      return [(t = this.form) == null ? void 0 : t.address, (e = this.form) == null ? void 0 : e.city, (r = this.form) == null ? void 0 : r.state, (a = this.form) == null ? void 0 : a.postcode].filter(Boolean).join(", ");
    }
  },
  watch: {
    form: {
      handler(t) {
        Object.keys(t).length && this.$emit("update:modelValue", {
          address: t == null ? void 0 : t.address,
          city: t == null ? void 0 : t.city,
          state: t == null ? void 0 : t.state,
          postcode: t == null ? void 0 : t.postcode,
          lat: t == null ? void 0 : t.lat,
          lng: t == null ? void 0 : t.lng
        });
      },
      deep: !0
    },
    isManual(t) {
      t && this.copy && (this.copy = !1, this.form.reset());
    }
  },
  methods: {
    loadGoogleMapsScript() {
      return new Promise((t, e) => {
        if (document.getElementById("google-maps-script")) {
          t();
          return;
        }
        const r = document.createElement("script");
        r.id = "google-maps-script", r.src = `https://maps.googleapis.com/maps/api/js?key=${this.$googleMapsApiKey}&libraries=places`, r.async = !0, r.defer = !0, r.onload = t, r.onerror = e, document.head.appendChild(r);
      });
    },
    initializeAutocomplete() {
      const t = new google.maps.places.Autocomplete(
        document.getElementById(this.name),
        {
          fields: ["address_components", "geometry"],
          strictBounds: !1,
          types: ["address"]
        }
      );
      t.addListener("place_changed", () => {
        var a, i;
        const e = t.getPlace();
        this.form.lat = (a = e.geometry.location) == null ? void 0 : a.lat(), this.form.lng = (i = e.geometry.location) == null ? void 0 : i.lng();
        const r = {};
        for (const c of e.address_components)
          switch (c.types[0]) {
            case "street_number":
              r.streetNumber = c.long_name;
              break;
            case "route":
              r.streetName = c.long_name;
              break;
            case "locality":
              this.form.city = c.long_name;
              break;
            case "administrative_area_level_1":
              this.form.state = c.short_name;
              break;
            case "postal_code":
              this.form.postcode = c.long_name;
              break;
          }
        this.form.address = "", r.streetNumber && (this.form.address = r.streetNumber + " "), r.streetName && (this.form.address += r.streetName);
      });
    },
    resetAddressInput(t) {
      t.target.value || (this.form.address = null, this.form.city = null, this.form.state = null, this.form.lat = null, this.form.lng = null, this.form.postcode = null, this.form.addressInput = "");
    }
  },
  mounted() {
    this.loadGoogleMapsScript().then(() => {
      setTimeout(() => {
        this.initializeAutocomplete();
      }, 1e3);
    }).catch((t) => {
      console.error("Failed to load Google Maps script: " + this.$googleMapsApiKey, t);
    }), this.form = Object.keys(this.modelValue ?? []).length ? this.modelValue : this.form;
  }
}, Th = ["id", "name", "disabled", "value", "placeholder"], Ah = {
  key: 0,
  class: "inline-block text-sm text-gray-600 mt-1.5 brand-200"
}, Ch = { class: "flex cursor-pointer items-center space-y-1" }, Oh = {
  key: 1,
  class: "relative space-y-2"
}, Ph = { class: "flex flex-row space-x-3" }, Ih = { class: "basis-1/3" }, Rh = { class: "basis-1/3" }, Dh = { class: "basis-1/3" };
function Fh(t, e, r, a, i, c) {
  var o, s;
  const n = Pt("input-wrapper"), u = Pt("v-toggle");
  return ae(), le("div", {
    class: et(["grid space-y-2", (o = r.field) == null ? void 0 : o.class])
  }, [
    ue(n, {
      field: "full_address",
      class: "space-y-0 [&_label]:mx-0 [&_div.w-full]:pt-0"
    }, {
      default: wt(() => {
        var l;
        return [
          F("input", {
            id: r.name,
            name: r.name,
            type: "text",
            disabled: i.isManual,
            class: "border-1 border-solid border-gray-300 rounded-lg bg-white",
            value: c.fullAddress,
            placeholder: (l = r.field) == null ? void 0 : l.placeholder,
            onInput: e[0] || (e[0] = (...d) => c.resetAddressInput && c.resetAddressInput(...d))
          }, null, 40, Th)
        ];
      }),
      _: 1
    }),
    (s = r.field) != null && s.hint ? (ae(), le("p", Ah, Ge(r.field.hint), 1)) : ke("", !0),
    F("label", Ch, [
      ue(u, {
        modelValue: i.isManual,
        "onUpdate:modelValue": e[1] || (e[1] = (l) => i.isManual = l),
        ring: !1
      }, null, 8, ["modelValue"]),
      e[6] || (e[6] = F("span", { class: "text-xs inline-block" }, "Manual Address", -1))
    ]),
    i.isManual ? (ae(), le("div", Oh, [
      ue(n, {
        "is-vertical": "",
        field: "address",
        "label-text": "Address",
        class: "w-full"
      }, {
        default: wt(() => [
          rt(F("input", {
            type: "text",
            class: "border-1 border-solid border-gray-300 rounded-lg bg-white",
            "onUpdate:modelValue": e[2] || (e[2] = (l) => i.form.address = l),
            placeholder: "Address"
          }, null, 512), [
            [Et, i.form.address]
          ])
        ]),
        _: 1
      }),
      F("div", Ph, [
        F("div", Ih, [
          ue(n, {
            "is-vertical": "",
            field: "city",
            "label-text": "Suburb",
            class: "w-full"
          }, {
            default: wt(() => [
              rt(F("input", {
                type: "text",
                class: "border-1 border-solid border-gray-300 rounded-lg bg-white w-full",
                "onUpdate:modelValue": e[3] || (e[3] = (l) => i.form.city = l),
                placeholder: "Suburb"
              }, null, 512), [
                [Et, i.form.city]
              ])
            ]),
            _: 1
          })
        ]),
        F("div", Rh, [
          ue(n, {
            "is-vertical": "",
            field: "state",
            "label-text": "State",
            class: "w-full"
          }, {
            default: wt(() => [
              rt(F("input", {
                "onUpdate:modelValue": e[4] || (e[4] = (l) => i.form.state = l),
                type: "text",
                placeholder: "State",
                class: "border-1 border-solid border-gray-300 rounded-lg bg-white w-full"
              }, null, 512), [
                [Et, i.form.state]
              ])
            ]),
            _: 1
          })
        ]),
        F("div", Dh, [
          ue(n, {
            "is-vertical": "",
            field: "postcode",
            "label-text": "Postcode",
            class: "w-full"
          }, {
            default: wt(() => [
              rt(F("input", {
                type: "text",
                class: "border-1 border-solid border-gray-300 rounded-lg bg-white w-full",
                "onUpdate:modelValue": e[5] || (e[5] = (l) => i.form.postcode = l),
                placeholder: "Postcode"
              }, null, 512), [
                [Et, i.form.postcode]
              ])
            ]),
            _: 1
          })
        ])
      ])
    ])) : ke("", !0)
  ], 2);
}
const qs = /* @__PURE__ */ pt(wh, [["render", Fh]]), Mh = {
  name: "VGridInput",
  mixins: [un],
  props: {
    name: {},
    type: {},
    field: {},
    modelValue: { default: {} }
  },
  data() {
    return {
      inputs: pn(this.modelValue),
      processing: !1,
      localField: {},
      componentTypes: {
        checkbox: ot(Zs),
        "check-group": ot(vo),
        datepicker: ot(Qs),
        "file-upload": ot(xs),
        number: ot(yo),
        "radio-group": ot(vo),
        select: ot(Ss),
        signature: ot(Es),
        text: ot(yo),
        textarea: ot(ws),
        paragraph: ot(Ts),
        address: ot(qs)
      }
    };
  },
  computed: {
    grid() {
      return this.localField.grid;
    },
    getLatestColumnIndex() {
      return Math.max(...this.grid.map((t) => t.length)) - 1;
    },
    isLatestColumnEmpty() {
      return this.grid.every((t) => {
        const e = t[t.length - 1];
        return !e || e.length === 0;
      });
    }
  },
  created() {
    var t;
    this.localField = pn(this.field), this.initiateGrid(((t = this.inputs) == null ? void 0 : t.length) > this.grid.length);
  },
  watch: {
    inputs: {
      handler: function(e) {
        this.$emit("update:modelValue", e);
      },
      deep: !0
    }
  },
  methods: {
    initiateGrid(t = !1) {
      if (this.grid.forEach((e, r) => {
        e.forEach((a, i) => {
          var c;
          (c = a[0]) != null && c.name && (this.inputs || (this.inputs = {}), this.inputs.hasOwnProperty(r) || (this.inputs[r] = {}), this.inputs[r].hasOwnProperty(a[0].name) || (this.inputs[r][a[0].name] = null));
        });
      }), t) {
        this.processing = !0;
        const e = this.grid.filter(
          (r) => r.some((a) => a.some((i) => !(i != null && i.on_flight)))
        );
        this.inputs.filter((r, a) => a + 1 > this.grid.length).forEach((r) => {
          e.forEach((a) => {
            const i = pn(a.map((c) => li(c))).map((c) => (Object.keys(r).forEach((n) => {
              c[0].name === this.getTemplateFieldName(n) && (c[0].name = n);
            }), c));
            this.grid.push(i.map((c) => {
              var u;
              const n = Math.floor(Math.random() * Date.now());
              return (u = c[0]) != null && u.id && (c[0].id = n, c[0].on_flight = !0), c;
            }));
          });
        }), this.processing = !1;
      }
    },
    getTemplateFieldName(t) {
      const e = t.lastIndexOf("_");
      return e === -1 ? t : t.substring(0, e);
    },
    addRow() {
      this.localField.allow_add_row && this.grid && this.grid.length && (this.processing = !0, this.grid.filter(
        (e) => e.some((r) => r.some((a) => !(a != null && a.on_flight)))
      ).forEach((e) => {
        const r = pn(e.map((a) => li(a)));
        this.grid.push(r.map((a) => {
          var c;
          const i = Math.floor(Math.random() * Date.now());
          return (c = a[0]) != null && c.id && (a[0].id = i, a[0].on_flight = !0, a[0].name = `${a[0].name}_${i}`), a;
        }));
      }), this.initiateGrid(), this.processing = !1);
    },
    fieldLabel(t) {
      return (t == null ? void 0 : t.type) === "heading" ? "h4" : "span";
    },
    fieldClass(t) {
      return ["cell", `-type-${t == null ? void 0 : t.type}`].join(" ");
    },
    fieldComponent(t) {
      return t != null && t.type ? this.componentTypes[t.type] : "";
    },
    getClassForItem(t, e) {
      const r = t[e].some((a) => a.hasOwnProperty("label"));
      return !r && e === !this.getLatestColumnIndex ? "relative flex items-center justify-center rounded-lg w-full" : !r && e === this.getLatestColumnIndex && this.isLatestColumnEmpty ? "" : "relative rounded-lg w-full";
    }
  }
}, Lh = {
  key: 0,
  class: "mb-4 font-regular text-gray-600"
}, Uh = { class: "grid gap-4 w-full" }, Nh = {
  key: 0,
  class: "flex gap-2 relative"
}, jh = ["for"], kh = ["for"], Bh = { key: 1 }, $h = {
  key: 1,
  class: "mt-2 flex gap-2"
};
function Vh(t, e, r, a, i, c) {
  return ae(), le("div", null, [
    r.field.hint ? (ae(), le("p", Lh, Ge(r.field.hint), 1)) : ke("", !0),
    F("div", Uh, [
      (ae(!0), le(At, null, Cn(c.grid, (n, u) => (ae(), le(At, {
        key: "row-" + u
      }, [
        n.filter((o) => o.length).length ? (ae(), le("div", Nh, [
          (ae(!0), le(At, null, Cn(n, (o, s) => {
            var l, d, f, p, h, v, m, g, y, S, E, A;
            return ae(), le("div", {
              key: "cell-" + u + "-" + s + "-" + ((l = o[0]) == null ? void 0 : l.name),
              class: et(c.getClassForItem(c.grid[u], s))
            }, [
              (d = o[0]) != null && d.type ? (ae(), le("div", {
                key: 0,
                class: et(["v-field", c.fieldClass(o[0])])
              }, [
                o[0].type === "heading" && !((f = o[0]) != null && f.on_flight) ? (ae(), le("label", {
                  key: 0,
                  for: r.name,
                  class: "text-lg font-semibold !text-gray-900"
                }, Ge((p = o[0]) == null ? void 0 : p.label), 9, jh)) : !["paragraph", "checkbox"].includes((h = o[0]) == null ? void 0 : h.type) && !((v = o[0]) != null && v.on_flight) ? (ae(), le("label", {
                  key: 1,
                  class: "text-sm text-gray-700",
                  for: r.name
                }, [
                  (m = o[0]) != null && m.label ? (ae(), On(Cr(c.fieldLabel(o[0])), { key: 0 }, {
                    default: wt(() => {
                      var w, L;
                      return [
                        Xt(Ge((w = o[0]) == null ? void 0 : w.label) + " " + Ge((L = o[0]) != null && L.required ? "*" : ""), 1)
                      ];
                    }),
                    _: 2
                  }, 1024)) : (ae(), le("span", Bh, " "))
                ], 8, kh)) : ke("", !0),
                c.fieldComponent(o[0]) && ((g = o[0]) != null && g.name) && !i.processing ? (ae(), On(Cr(c.fieldComponent(o[0])), {
                  key: r.name + ((y = o[0]) == null ? void 0 : y.name),
                  modelValue: i.inputs[u][(S = o[0]) == null ? void 0 : S.name],
                  "onUpdate:modelValue": (w) => {
                    var L;
                    return i.inputs[u][(L = o[0]) == null ? void 0 : L.name] = w;
                  },
                  name: `${r.name}[${u}][${o[0].name}]`,
                  type: o[0].type,
                  options: (E = o[0]) == null ? void 0 : E.options,
                  placeholder: (A = o[0]) == null ? void 0 : A.placeholder,
                  field: o[0],
                  required: o[0].hasOwnProperty("required") && o[0].required,
                  editable: t.editable
                }, null, 8, ["modelValue", "onUpdate:modelValue", "name", "type", "options", "placeholder", "field", "required", "editable"])) : ke("", !0),
                gn(t.$slots, "default")
              ], 2)) : ke("", !0)
            ], 2);
          }), 128))
        ])) : ke("", !0)
      ], 64))), 128))
    ]),
    r.field.allow_add_row ? (ae(), le("div", $h, [
      F("a", {
        onClick: e[0] || (e[0] = (...n) => c.addRow && c.addRow(...n)),
        class: "cursor-pointer text-brand-700 flex items-center text-sm font-semibold hover:bg-brand-50 p-1 gap-1 rounded"
      }, e[1] || (e[1] = [
        F("svg", {
          width: "14",
          height: "14",
          viewBox: "0 0 14 14",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, [
          F("path", {
            d: "M6.99935 1.1665V12.8332M1.16602 6.99984H12.8327",
            stroke: "#931C61",
            "stroke-width": "1.66667",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          })
        ], -1),
        Xt(" Add Row ")
      ]))
    ])) : ke("", !0)
  ]);
}
const Hh = /* @__PURE__ */ pt(Mh, [["render", Vh]]), zh = {
  name: "VField",
  props: {
    name: String,
    type: String,
    label: String,
    modelValue: {},
    options: { default: () => [] },
    placeholder: { default: null },
    field: {
      type: Object,
      default: () => ({})
    },
    /**
     * Form data can be editable after its complete
     */
    editable: {
      type: Boolean,
      default: !1
    },
    preview: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      input: null,
      componentTypes: {
        checkbox: ot(Zs),
        "check-group": ot(vo),
        datepicker: ot(Qs),
        "file-upload": ot(xs),
        number: ot(yo),
        "radio-group": ot(vo),
        select: ot(Ss),
        signature: ot(Es),
        text: ot(yo),
        textarea: ot(ws),
        paragraph: ot(Ts),
        grid: ot(Hh),
        address: ot(qs)
      }
    };
  },
  created() {
    this.input = pn(this.modelValue);
  },
  watch: {
    input: {
      handler(t) {
        this.$emit("update:modelValue", t);
      },
      deep: !0
    }
  },
  computed: {
    fieldComponent() {
      return this.componentTypes[this.type];
    },
    fieldLabel() {
      return this.type === "heading" ? "h4" : "span";
    },
    fieldClass() {
      return ["cell", `-type-${this.type}`].join(" ");
    }
  }
}, Gh = ["for"], Wh = ["for"], Yh = { key: 1 };
function Kh(t, e, r, a, i, c) {
  return ae(), le("div", {
    class: et(["v-field", c.fieldClass])
  }, [
    r.field.type === "heading" ? (ae(), le("label", {
      key: 0,
      for: r.name,
      class: "text-lg font-semibold !text-gray-900"
    }, Ge(r.label), 9, Gh)) : ["paragraph", "checkbox"].includes(r.field.type) ? ke("", !0) : (ae(), le("label", {
      key: 1,
      for: r.name
    }, [
      r.label ? (ae(), On(Cr(c.fieldLabel), { key: 0 }, {
        default: wt(() => [
          Xt(Ge(r.label) + " " + Ge(r.field.required ? "*" : ""), 1)
        ]),
        _: 1
      })) : (ae(), le("span", Yh, " "))
    ], 8, Wh)),
    c.fieldComponent ? (ae(), On(Cr(c.fieldComponent), {
      key: r.name,
      modelValue: i.input,
      "onUpdate:modelValue": e[0] || (e[0] = (n) => i.input = n),
      name: r.name,
      type: r.type,
      options: r.options,
      placeholder: r.placeholder,
      field: r.field,
      required: r.field.hasOwnProperty("required") && r.field.required,
      editable: r.editable,
      preview: r.preview
    }, null, 8, ["modelValue", "name", "type", "options", "placeholder", "field", "required", "editable", "preview"])) : ke("", !0),
    gn(t.$slots, "default")
  ], 2);
}
const Xh = /* @__PURE__ */ pt(zh, [["render", Kh]]), Jh = {
  name: "VForm",
  components: {
    VField: Xh
  },
  props: {
    action: { required: !0 },
    method: { required: !0 },
    /**
     * Form data can be editable after its complete
     */
    editable: {
      type: Boolean,
      default: !1
    },
    preview: {
      type: Boolean,
      default: !1
    },
    canInteract: {
      type: Boolean,
      default: !0
    },
    name: String,
    title: String,
    form: {
      type: [Object, String],
      default: () => ({})
    },
    formData: {
      type: [Object, String],
      default: () => ({})
    },
    validationErrors: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    var t, e;
    return {
      inputs: {},
      fields: typeof this.form == "string" ? (t = JSON.parse(this.form)) == null ? void 0 : t.fields : this.form.fields,
      csrf: (e = document.head.querySelector('meta[name="csrf-token"]')) == null ? void 0 : e.content
    };
  },
  created() {
    if (typeof this.formData == "string" && this.formData !== "{}") {
      const t = JSON.parse(this.formData);
      t.hasOwnProperty("id") && (this.inputs.id = t.id), Object.keys((t == null ? void 0 : t.values) ?? []).forEach((e) => {
        this.updateInputValue(e, t == null ? void 0 : t.values[e]);
      });
    } else
      this.fields.forEach((t) => {
        this.updateInputValue(t.name, this.getDefaultValue(t));
      });
  },
  watch: {
    inputs: {
      handler(t) {
        const e = new CustomEvent("formUpdated", { detail: t });
        window.dispatchEvent(e);
      },
      deep: !0
    }
  },
  methods: {
    getDefaultValue(t) {
      switch (t.type) {
        case "text":
        case "datepicker":
        case "textarea":
          return "";
        case "grid":
          return {};
        default:
          return null;
      }
    },
    updateInputValue(t, e) {
      this.inputs[t] = e;
    },
    fieldName(t) {
      return this.name ? `${this.name}[${t.name}]` : t.name;
    },
    validationKey(t) {
      return this.name ? `${this.name}.${t.name}` : t.name;
    },
    getValidationMessage(t) {
      return this.validationErrors.hasOwnProperty(this.validationKey(t)) ? this.validationErrors[this.validationKey(t)].join("|") : "";
    }
  }
}, Qh = ["action", "method", "name"], Zh = ["value"], qh = ["value"], _h = ["name", "value"], ep = { key: 0 }, tp = ["textContent"];
function np(t, e, r, a, i, c) {
  const n = Pt("v-field");
  return ae(), le("form", {
    class: "v-form",
    action: r.action,
    method: r.method !== "get" ? "post" : "get",
    name: r.name
  }, [
    F("input", {
      type: "hidden",
      name: "_token",
      value: i.csrf
    }, null, 8, Zh),
    F("input", {
      type: "hidden",
      name: "_method",
      value: r.method
    }, null, 8, qh),
    F("input", {
      type: "hidden",
      name: r.name,
      value: JSON.stringify(i.inputs)
    }, null, 8, _h),
    F("div", {
      class: "fields",
      style: Hl({
        "pointer-events": r.canInteract ? "auto" : "none",
        "user-select": r.canInteract ? "auto" : "none"
      })
    }, [
      r.title ? (ae(), le("div", ep, [
        F("h3", null, Ge(r.title), 1),
        e[0] || (e[0] = F("hr", null, null, -1))
      ])) : ke("", !0),
      i.fields.length ? (ae(!0), le(At, { key: 1 }, Cn(i.fields, (u) => (ae(), le("div", {
        key: u.id
      }, [
        (ae(), On(n, {
          key: r.name + u.name,
          modelValue: i.inputs[u.name],
          "onUpdate:modelValue": (o) => i.inputs[u.name] = o,
          name: c.fieldName(u),
          label: u.label,
          type: u.type,
          options: u.options,
          placeholder: u.placeholder,
          field: u,
          editable: r.editable,
          preview: r.preview
        }, {
          default: wt(() => [
            F("span", {
              class: "error",
              textContent: Ge(c.getValidationMessage(u))
            }, null, 8, tp)
          ]),
          _: 2
        }, 1032, ["modelValue", "onUpdate:modelValue", "name", "label", "type", "options", "placeholder", "field", "editable", "preview"]))
      ]))), 128)) : ke("", !0)
    ], 4),
    r.editable ? gn(t.$slots, "default", { key: 0 }) : ke("", !0)
  ], 8, Qh);
}
const rp = /* @__PURE__ */ pt(Jh, [["render", np]]), op = {
  inject: ["bus"],
  data() {
    return {
      isOpen: !1,
      componentName: null,
      componentData: {},
      cancelTitle: null,
      confirmTitle: null,
      scrollable: !1,
      isAsyncCallBack: !1,
      callback: () => {
      },
      cancelCallback: () => {
      }
    };
  },
  created() {
    var t, e;
    (t = this.bus) == null || t.$on("openModal", (r) => {
      this.open(), this.componentName = r.componentName, this.componentData = r.componentData, this.cancelTitle = r == null ? void 0 : r.cancelTitle, this.confirmTitle = r == null ? void 0 : r.confirmTitle, this.scrollable = (r == null ? void 0 : r.scrollable) === void 0 ? !0 : r.scrollable, this.isAsyncCallback = (r == null ? void 0 : r.isAsyncCallback) ?? !1, this.callback = r.callback, this.cancelCallback = r.cancelCallback;
    }), (e = this.bus) == null || e.$on("closeModal", () => {
      this.close();
    });
  },
  computed: {
    cancelButton() {
      return this.cancelTitle ? this.cancelTitle : this.$t("generic.buttons.cancel");
    },
    confirmButton() {
      return this.confirmTitle ? this.confirmTitle : this.$t("generic.buttons.confirm");
    }
  },
  methods: {
    open() {
      this.isOpen = !0;
    },
    close() {
      this.cancelCallback && this.cancelCallback(), this.isOpen = !1;
    },
    async confirm(t = null) {
      this.isAsyncCallback && this.callback ? await this.callback(t) : this.callback && this.callback(t), this.isOpen = !1;
    }
  }
}, ap = {
  key: 0,
  class: "fixed left-1/2 top-1/2 z-50 flex max-h-screen -translate-x-1/2 -translate-y-1/2 transform flex-col rounded-xl border-tertiary-500 bg-white"
}, ip = {
  key: 1,
  class: "p-smSpace"
}, sp = ["innerHTML"], lp = { class: "flex justify-center space-x-xsSpace pt-xsSpace" }, up = ["textContent"], cp = ["textContent"];
function dp(t, e, r, a, i, c) {
  return ae(), le("div", {
    class: et([{ "-open": i.isOpen }, "v-modal"])
  }, [
    ue(Aa, { name: "fade" }, {
      default: wt(() => [
        i.isOpen ? (ae(), le("div", ap, [
          gn(t.$slots, "default", {}, () => [
            F("div", {
              class: et(["relative max-h-[720px] overflow-y-auto", { "overflow-y-visible": !i.scrollable }])
            }, [
              i.componentName ? (ae(), On(Cr(i.componentName), zl({ key: 0 }, i.componentData, {
                onConfirm: c.confirm,
                onCloseModal: c.close
              }), null, 16, ["onConfirm", "onCloseModal"])) : (ae(), le("div", ip, [
                F("div", {
                  innerHTML: i.componentData,
                  class: "py-mdSpace"
                }, null, 8, sp),
                F("div", lp, [
                  F("a", {
                    onClick: e[0] || (e[0] = (...n) => c.close && c.close(...n)),
                    class: "btn-secondary btn-sm",
                    textContent: Ge(c.cancelButton)
                  }, null, 8, up),
                  F("a", {
                    onClick: e[1] || (e[1] = tr((...n) => c.confirm && c.confirm(...n), ["prevent"])),
                    class: "btn-primary btn-sm",
                    textContent: Ge(c.confirmButton)
                  }, null, 8, cp)
                ])
              ]))
            ], 2)
          ], !0)
        ])) : ke("", !0)
      ]),
      _: 3
    })
  ], 2);
}
const fp = /* @__PURE__ */ pt(op, [["render", dp], ["__scopeId", "data-v-552b6cab"]]);
var lo = { exports: {} };
/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Ni(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    e && (a = a.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function ln(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ni(Object(r), !0).forEach(function(a) {
      hp(t, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Ni(Object(r)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return t;
}
function uo(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? uo = function(e) {
    return typeof e;
  } : uo = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, uo(t);
}
function hp(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function Zt() {
  return Zt = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, Zt.apply(this, arguments);
}
function pp(t, e) {
  if (t == null) return {};
  var r = {}, a = Object.keys(t), i, c;
  for (c = 0; c < a.length; c++)
    i = a[c], !(e.indexOf(i) >= 0) && (r[i] = t[i]);
  return r;
}
function vp(t, e) {
  if (t == null) return {};
  var r = pp(t, e), a, i;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(t);
    for (i = 0; i < c.length; i++)
      a = c[i], !(e.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(t, a) && (r[a] = t[a]);
  }
  return r;
}
function mp(t) {
  return gp(t) || yp(t) || bp(t) || xp();
}
function gp(t) {
  if (Array.isArray(t)) return ga(t);
}
function yp(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function bp(t, e) {
  if (t) {
    if (typeof t == "string") return ga(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ga(t, e);
  }
}
function ga(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, a = new Array(e); r < e; r++) a[r] = t[r];
  return a;
}
function xp() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Sp = "1.14.0";
function mn(t) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(t);
}
var Sn = mn(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Mr = mn(/Edge/i), ji = mn(/firefox/i), Sr = mn(/safari/i) && !mn(/chrome/i) && !mn(/android/i), _s = mn(/iP(ad|od|hone)/i), Ep = mn(/chrome/i) && mn(/android/i), el = {
  capture: !1,
  passive: !1
};
function Je(t, e, r) {
  t.addEventListener(e, r, !Sn && el);
}
function Xe(t, e, r) {
  t.removeEventListener(e, r, !Sn && el);
}
function wo(t, e) {
  if (e) {
    if (e[0] === ">" && (e = e.substring(1)), t)
      try {
        if (t.matches)
          return t.matches(e);
        if (t.msMatchesSelector)
          return t.msMatchesSelector(e);
        if (t.webkitMatchesSelector)
          return t.webkitMatchesSelector(e);
      } catch {
        return !1;
      }
    return !1;
  }
}
function wp(t) {
  return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
}
function tn(t, e, r, a) {
  if (t) {
    r = r || document;
    do {
      if (e != null && (e[0] === ">" ? t.parentNode === r && wo(t, e) : wo(t, e)) || a && t === r)
        return t;
      if (t === r) break;
    } while (t = wp(t));
  }
  return null;
}
var ki = /\s+/g;
function ut(t, e, r) {
  if (t && e)
    if (t.classList)
      t.classList[r ? "add" : "remove"](e);
    else {
      var a = (" " + t.className + " ").replace(ki, " ").replace(" " + e + " ", " ");
      t.className = (a + (r ? " " + e : "")).replace(ki, " ");
    }
}
function De(t, e, r) {
  var a = t && t.style;
  if (a) {
    if (r === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? r = document.defaultView.getComputedStyle(t, "") : t.currentStyle && (r = t.currentStyle), e === void 0 ? r : r[e];
    !(e in a) && e.indexOf("webkit") === -1 && (e = "-webkit-" + e), a[e] = r + (typeof r == "string" ? "" : "px");
  }
}
function Hn(t, e) {
  var r = "";
  if (typeof t == "string")
    r = t;
  else
    do {
      var a = De(t, "transform");
      a && a !== "none" && (r = a + " " + r);
    } while (!e && (t = t.parentNode));
  var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return i && new i(r);
}
function tl(t, e, r) {
  if (t) {
    var a = t.getElementsByTagName(e), i = 0, c = a.length;
    if (r)
      for (; i < c; i++)
        r(a[i], i);
    return a;
  }
  return [];
}
function sn() {
  var t = document.scrollingElement;
  return t || document.documentElement;
}
function lt(t, e, r, a, i) {
  if (!(!t.getBoundingClientRect && t !== window)) {
    var c, n, u, o, s, l, d;
    if (t !== window && t.parentNode && t !== sn() ? (c = t.getBoundingClientRect(), n = c.top, u = c.left, o = c.bottom, s = c.right, l = c.height, d = c.width) : (n = 0, u = 0, o = window.innerHeight, s = window.innerWidth, l = window.innerHeight, d = window.innerWidth), (e || r) && t !== window && (i = i || t.parentNode, !Sn))
      do
        if (i && i.getBoundingClientRect && (De(i, "transform") !== "none" || r && De(i, "position") !== "static")) {
          var f = i.getBoundingClientRect();
          n -= f.top + parseInt(De(i, "border-top-width")), u -= f.left + parseInt(De(i, "border-left-width")), o = n + c.height, s = u + c.width;
          break;
        }
      while (i = i.parentNode);
    if (a && t !== window) {
      var p = Hn(i || t), h = p && p.a, v = p && p.d;
      p && (n /= v, u /= h, d /= h, l /= v, o = n + l, s = u + d);
    }
    return {
      top: n,
      left: u,
      bottom: o,
      right: s,
      width: d,
      height: l
    };
  }
}
function Bi(t, e, r) {
  for (var a = An(t, !0), i = lt(t)[e]; a; ) {
    var c = lt(a)[r], n = void 0;
    if (n = i >= c, !n) return a;
    if (a === sn()) break;
    a = An(a, !1);
  }
  return !1;
}
function nr(t, e, r, a) {
  for (var i = 0, c = 0, n = t.children; c < n.length; ) {
    if (n[c].style.display !== "none" && n[c] !== Be.ghost && (a || n[c] !== Be.dragged) && tn(n[c], r.draggable, t, !1)) {
      if (i === e)
        return n[c];
      i++;
    }
    c++;
  }
  return null;
}
function Ya(t, e) {
  for (var r = t.lastElementChild; r && (r === Be.ghost || De(r, "display") === "none" || e && !wo(r, e)); )
    r = r.previousElementSibling;
  return r || null;
}
function ft(t, e) {
  var r = 0;
  if (!t || !t.parentNode)
    return -1;
  for (; t = t.previousElementSibling; )
    t.nodeName.toUpperCase() !== "TEMPLATE" && t !== Be.clone && (!e || wo(t, e)) && r++;
  return r;
}
function $i(t) {
  var e = 0, r = 0, a = sn();
  if (t)
    do {
      var i = Hn(t), c = i.a, n = i.d;
      e += t.scrollLeft * c, r += t.scrollTop * n;
    } while (t !== a && (t = t.parentNode));
  return [e, r];
}
function Tp(t, e) {
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      for (var a in e)
        if (e.hasOwnProperty(a) && e[a] === t[r][a]) return Number(r);
    }
  return -1;
}
function An(t, e) {
  if (!t || !t.getBoundingClientRect) return sn();
  var r = t, a = !1;
  do
    if (r.clientWidth < r.scrollWidth || r.clientHeight < r.scrollHeight) {
      var i = De(r);
      if (r.clientWidth < r.scrollWidth && (i.overflowX == "auto" || i.overflowX == "scroll") || r.clientHeight < r.scrollHeight && (i.overflowY == "auto" || i.overflowY == "scroll")) {
        if (!r.getBoundingClientRect || r === document.body) return sn();
        if (a || e) return r;
        a = !0;
      }
    }
  while (r = r.parentNode);
  return sn();
}
function Ap(t, e) {
  if (t && e)
    for (var r in e)
      e.hasOwnProperty(r) && (t[r] = e[r]);
  return t;
}
function qo(t, e) {
  return Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width);
}
var Er;
function nl(t, e) {
  return function() {
    if (!Er) {
      var r = arguments, a = this;
      r.length === 1 ? t.call(a, r[0]) : t.apply(a, r), Er = setTimeout(function() {
        Er = void 0;
      }, e);
    }
  };
}
function Cp() {
  clearTimeout(Er), Er = void 0;
}
function rl(t, e, r) {
  t.scrollLeft += e, t.scrollTop += r;
}
function Ka(t) {
  var e = window.Polymer, r = window.jQuery || window.Zepto;
  return e && e.dom ? e.dom(t).cloneNode(!0) : r ? r(t).clone(!0)[0] : t.cloneNode(!0);
}
function Vi(t, e) {
  De(t, "position", "absolute"), De(t, "top", e.top), De(t, "left", e.left), De(t, "width", e.width), De(t, "height", e.height);
}
function _o(t) {
  De(t, "position", ""), De(t, "top", ""), De(t, "left", ""), De(t, "width", ""), De(t, "height", "");
}
var Ot = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function Op() {
  var t = [], e;
  return {
    captureAnimationState: function() {
      if (t = [], !!this.options.animation) {
        var a = [].slice.call(this.el.children);
        a.forEach(function(i) {
          if (!(De(i, "display") === "none" || i === Be.ghost)) {
            t.push({
              target: i,
              rect: lt(i)
            });
            var c = ln({}, t[t.length - 1].rect);
            if (i.thisAnimationDuration) {
              var n = Hn(i, !0);
              n && (c.top -= n.f, c.left -= n.e);
            }
            i.fromRect = c;
          }
        });
      }
    },
    addAnimationState: function(a) {
      t.push(a);
    },
    removeAnimationState: function(a) {
      t.splice(Tp(t, {
        target: a
      }), 1);
    },
    animateAll: function(a) {
      var i = this;
      if (!this.options.animation) {
        clearTimeout(e), typeof a == "function" && a();
        return;
      }
      var c = !1, n = 0;
      t.forEach(function(u) {
        var o = 0, s = u.target, l = s.fromRect, d = lt(s), f = s.prevFromRect, p = s.prevToRect, h = u.rect, v = Hn(s, !0);
        v && (d.top -= v.f, d.left -= v.e), s.toRect = d, s.thisAnimationDuration && qo(f, d) && !qo(l, d) && // Make sure animatingRect is on line between toRect & fromRect
        (h.top - d.top) / (h.left - d.left) === (l.top - d.top) / (l.left - d.left) && (o = Ip(h, f, p, i.options)), qo(d, l) || (s.prevFromRect = l, s.prevToRect = d, o || (o = i.options.animation), i.animate(s, h, d, o)), o && (c = !0, n = Math.max(n, o), clearTimeout(s.animationResetTimer), s.animationResetTimer = setTimeout(function() {
          s.animationTime = 0, s.prevFromRect = null, s.fromRect = null, s.prevToRect = null, s.thisAnimationDuration = null;
        }, o), s.thisAnimationDuration = o);
      }), clearTimeout(e), c ? e = setTimeout(function() {
        typeof a == "function" && a();
      }, n) : typeof a == "function" && a(), t = [];
    },
    animate: function(a, i, c, n) {
      if (n) {
        De(a, "transition", ""), De(a, "transform", "");
        var u = Hn(this.el), o = u && u.a, s = u && u.d, l = (i.left - c.left) / (o || 1), d = (i.top - c.top) / (s || 1);
        a.animatingX = !!l, a.animatingY = !!d, De(a, "transform", "translate3d(" + l + "px," + d + "px,0)"), this.forRepaintDummy = Pp(a), De(a, "transition", "transform " + n + "ms" + (this.options.easing ? " " + this.options.easing : "")), De(a, "transform", "translate3d(0,0,0)"), typeof a.animated == "number" && clearTimeout(a.animated), a.animated = setTimeout(function() {
          De(a, "transition", ""), De(a, "transform", ""), a.animated = !1, a.animatingX = !1, a.animatingY = !1;
        }, n);
      }
    }
  };
}
function Pp(t) {
  return t.offsetWidth;
}
function Ip(t, e, r, a) {
  return Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) / Math.sqrt(Math.pow(e.top - r.top, 2) + Math.pow(e.left - r.left, 2)) * a.animation;
}
var Xn = [], ea = {
  initializeByDefault: !0
}, Lr = {
  mount: function(e) {
    for (var r in ea)
      ea.hasOwnProperty(r) && !(r in e) && (e[r] = ea[r]);
    Xn.forEach(function(a) {
      if (a.pluginName === e.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once");
    }), Xn.push(e);
  },
  pluginEvent: function(e, r, a) {
    var i = this;
    this.eventCanceled = !1, a.cancel = function() {
      i.eventCanceled = !0;
    };
    var c = e + "Global";
    Xn.forEach(function(n) {
      r[n.pluginName] && (r[n.pluginName][c] && r[n.pluginName][c](ln({
        sortable: r
      }, a)), r.options[n.pluginName] && r[n.pluginName][e] && r[n.pluginName][e](ln({
        sortable: r
      }, a)));
    });
  },
  initializePlugins: function(e, r, a, i) {
    Xn.forEach(function(u) {
      var o = u.pluginName;
      if (!(!e.options[o] && !u.initializeByDefault)) {
        var s = new u(e, r, e.options);
        s.sortable = e, s.options = e.options, e[o] = s, Zt(a, s.defaults);
      }
    });
    for (var c in e.options)
      if (e.options.hasOwnProperty(c)) {
        var n = this.modifyOption(e, c, e.options[c]);
        typeof n < "u" && (e.options[c] = n);
      }
  },
  getEventProperties: function(e, r) {
    var a = {};
    return Xn.forEach(function(i) {
      typeof i.eventProperties == "function" && Zt(a, i.eventProperties.call(r[i.pluginName], e));
    }), a;
  },
  modifyOption: function(e, r, a) {
    var i;
    return Xn.forEach(function(c) {
      e[c.pluginName] && c.optionListeners && typeof c.optionListeners[r] == "function" && (i = c.optionListeners[r].call(e[c.pluginName], a));
    }), i;
  }
};
function mr(t) {
  var e = t.sortable, r = t.rootEl, a = t.name, i = t.targetEl, c = t.cloneEl, n = t.toEl, u = t.fromEl, o = t.oldIndex, s = t.newIndex, l = t.oldDraggableIndex, d = t.newDraggableIndex, f = t.originalEvent, p = t.putSortable, h = t.extraEventProperties;
  if (e = e || r && r[Ot], !!e) {
    var v, m = e.options, g = "on" + a.charAt(0).toUpperCase() + a.substr(1);
    window.CustomEvent && !Sn && !Mr ? v = new CustomEvent(a, {
      bubbles: !0,
      cancelable: !0
    }) : (v = document.createEvent("Event"), v.initEvent(a, !0, !0)), v.to = n || r, v.from = u || r, v.item = i || r, v.clone = c, v.oldIndex = o, v.newIndex = s, v.oldDraggableIndex = l, v.newDraggableIndex = d, v.originalEvent = f, v.pullMode = p ? p.lastPutMode : void 0;
    var y = ln(ln({}, h), Lr.getEventProperties(a, e));
    for (var S in y)
      v[S] = y[S];
    r && r.dispatchEvent(v), m[g] && m[g].call(e, v);
  }
}
var Rp = ["evt"], Ut = function(e, r) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = a.evt, c = vp(a, Rp);
  Lr.pluginEvent.bind(Be)(e, r, ln({
    dragEl: ye,
    parentEl: ct,
    ghostEl: We,
    rootEl: st,
    nextEl: jn,
    lastDownEl: co,
    cloneEl: dt,
    cloneHidden: wn,
    dragStarted: gr,
    putSortable: St,
    activeSortable: Be.active,
    originalEvent: i,
    oldIndex: er,
    oldDraggableIndex: wr,
    newIndex: Ht,
    newDraggableIndex: En,
    hideGhostForTarget: sl,
    unhideGhostForTarget: ll,
    cloneNowHidden: function() {
      wn = !0;
    },
    cloneNowShown: function() {
      wn = !1;
    },
    dispatchSortableEvent: function(u) {
      It({
        sortable: r,
        name: u,
        originalEvent: i
      });
    }
  }, c));
};
function It(t) {
  mr(ln({
    putSortable: St,
    cloneEl: dt,
    targetEl: ye,
    rootEl: st,
    oldIndex: er,
    oldDraggableIndex: wr,
    newIndex: Ht,
    newDraggableIndex: En
  }, t));
}
var ye, ct, We, st, jn, co, dt, wn, er, Ht, wr, En, _r, St, qn = !1, To = !1, Ao = [], Un, _t, ta, na, Hi, zi, gr, Jn, Tr, Ar = !1, eo = !1, fo, Tt, ra = [], ya = !1, Co = [], Vo = typeof document < "u", to = _s, Gi = Mr || Sn ? "cssFloat" : "float", Dp = Vo && !Ep && !_s && "draggable" in document.createElement("div"), ol = function() {
  if (Vo) {
    if (Sn)
      return !1;
    var t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
  }
}(), al = function(e, r) {
  var a = De(e), i = parseInt(a.width) - parseInt(a.paddingLeft) - parseInt(a.paddingRight) - parseInt(a.borderLeftWidth) - parseInt(a.borderRightWidth), c = nr(e, 0, r), n = nr(e, 1, r), u = c && De(c), o = n && De(n), s = u && parseInt(u.marginLeft) + parseInt(u.marginRight) + lt(c).width, l = o && parseInt(o.marginLeft) + parseInt(o.marginRight) + lt(n).width;
  if (a.display === "flex")
    return a.flexDirection === "column" || a.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (a.display === "grid")
    return a.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (c && u.float && u.float !== "none") {
    var d = u.float === "left" ? "left" : "right";
    return n && (o.clear === "both" || o.clear === d) ? "vertical" : "horizontal";
  }
  return c && (u.display === "block" || u.display === "flex" || u.display === "table" || u.display === "grid" || s >= i && a[Gi] === "none" || n && a[Gi] === "none" && s + l > i) ? "vertical" : "horizontal";
}, Fp = function(e, r, a) {
  var i = a ? e.left : e.top, c = a ? e.right : e.bottom, n = a ? e.width : e.height, u = a ? r.left : r.top, o = a ? r.right : r.bottom, s = a ? r.width : r.height;
  return i === u || c === o || i + n / 2 === u + s / 2;
}, Mp = function(e, r) {
  var a;
  return Ao.some(function(i) {
    var c = i[Ot].options.emptyInsertThreshold;
    if (!(!c || Ya(i))) {
      var n = lt(i), u = e >= n.left - c && e <= n.right + c, o = r >= n.top - c && r <= n.bottom + c;
      if (u && o)
        return a = i;
    }
  }), a;
}, il = function(e) {
  function r(c, n) {
    return function(u, o, s, l) {
      var d = u.options.group.name && o.options.group.name && u.options.group.name === o.options.group.name;
      if (c == null && (n || d))
        return !0;
      if (c == null || c === !1)
        return !1;
      if (n && c === "clone")
        return c;
      if (typeof c == "function")
        return r(c(u, o, s, l), n)(u, o, s, l);
      var f = (n ? u : o).options.group.name;
      return c === !0 || typeof c == "string" && c === f || c.join && c.indexOf(f) > -1;
    };
  }
  var a = {}, i = e.group;
  (!i || uo(i) != "object") && (i = {
    name: i
  }), a.name = i.name, a.checkPull = r(i.pull, !0), a.checkPut = r(i.put), a.revertClone = i.revertClone, e.group = a;
}, sl = function() {
  !ol && We && De(We, "display", "none");
}, ll = function() {
  !ol && We && De(We, "display", "");
};
Vo && document.addEventListener("click", function(t) {
  if (To)
    return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), To = !1, !1;
}, !0);
var Nn = function(e) {
  if (ye) {
    e = e.touches ? e.touches[0] : e;
    var r = Mp(e.clientX, e.clientY);
    if (r) {
      var a = {};
      for (var i in e)
        e.hasOwnProperty(i) && (a[i] = e[i]);
      a.target = a.rootEl = r, a.preventDefault = void 0, a.stopPropagation = void 0, r[Ot]._onDragOver(a);
    }
  }
}, Lp = function(e) {
  ye && ye.parentNode[Ot]._isOutsideThisEl(e.target);
};
function Be(t, e) {
  if (!(t && t.nodeType && t.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
  this.el = t, this.options = e = Zt({}, e), t[Ot] = this;
  var r = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(t.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return al(t, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(n, u) {
      n.setData("Text", u.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Be.supportPointer !== !1 && "PointerEvent" in window && !Sr,
    emptyInsertThreshold: 5
  };
  Lr.initializePlugins(this, t, r);
  for (var a in r)
    !(a in e) && (e[a] = r[a]);
  il(e);
  for (var i in this)
    i.charAt(0) === "_" && typeof this[i] == "function" && (this[i] = this[i].bind(this));
  this.nativeDraggable = e.forceFallback ? !1 : Dp, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? Je(t, "pointerdown", this._onTapStart) : (Je(t, "mousedown", this._onTapStart), Je(t, "touchstart", this._onTapStart)), this.nativeDraggable && (Je(t, "dragover", this), Je(t, "dragenter", this)), Ao.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), Zt(this, Op());
}
Be.prototype = /** @lends Sortable.prototype */
{
  constructor: Be,
  _isOutsideThisEl: function(e) {
    !this.el.contains(e) && e !== this.el && (Jn = null);
  },
  _getDirection: function(e, r) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, e, r, ye) : this.options.direction;
  },
  _onTapStart: function(e) {
    if (e.cancelable) {
      var r = this, a = this.el, i = this.options, c = i.preventOnFilter, n = e.type, u = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e, o = (u || e).target, s = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || o, l = i.filter;
      if (Hp(a), !ye && !(/mousedown|pointerdown/.test(n) && e.button !== 0 || i.disabled) && !s.isContentEditable && !(!this.nativeDraggable && Sr && o && o.tagName.toUpperCase() === "SELECT") && (o = tn(o, i.draggable, a, !1), !(o && o.animated) && co !== o)) {
        if (er = ft(o), wr = ft(o, i.draggable), typeof l == "function") {
          if (l.call(this, e, o, this)) {
            It({
              sortable: r,
              rootEl: s,
              name: "filter",
              targetEl: o,
              toEl: a,
              fromEl: a
            }), Ut("filter", r, {
              evt: e
            }), c && e.cancelable && e.preventDefault();
            return;
          }
        } else if (l && (l = l.split(",").some(function(d) {
          if (d = tn(s, d.trim(), a, !1), d)
            return It({
              sortable: r,
              rootEl: d,
              name: "filter",
              targetEl: o,
              fromEl: a,
              toEl: a
            }), Ut("filter", r, {
              evt: e
            }), !0;
        }), l)) {
          c && e.cancelable && e.preventDefault();
          return;
        }
        i.handle && !tn(s, i.handle, a, !1) || this._prepareDragStart(e, u, o);
      }
    }
  },
  _prepareDragStart: function(e, r, a) {
    var i = this, c = i.el, n = i.options, u = c.ownerDocument, o;
    if (a && !ye && a.parentNode === c) {
      var s = lt(a);
      if (st = c, ye = a, ct = ye.parentNode, jn = ye.nextSibling, co = a, _r = n.group, Be.dragged = ye, Un = {
        target: ye,
        clientX: (r || e).clientX,
        clientY: (r || e).clientY
      }, Hi = Un.clientX - s.left, zi = Un.clientY - s.top, this._lastX = (r || e).clientX, this._lastY = (r || e).clientY, ye.style["will-change"] = "all", o = function() {
        if (Ut("delayEnded", i, {
          evt: e
        }), Be.eventCanceled) {
          i._onDrop();
          return;
        }
        i._disableDelayedDragEvents(), !ji && i.nativeDraggable && (ye.draggable = !0), i._triggerDragStart(e, r), It({
          sortable: i,
          name: "choose",
          originalEvent: e
        }), ut(ye, n.chosenClass, !0);
      }, n.ignore.split(",").forEach(function(l) {
        tl(ye, l.trim(), oa);
      }), Je(u, "dragover", Nn), Je(u, "mousemove", Nn), Je(u, "touchmove", Nn), Je(u, "mouseup", i._onDrop), Je(u, "touchend", i._onDrop), Je(u, "touchcancel", i._onDrop), ji && this.nativeDraggable && (this.options.touchStartThreshold = 4, ye.draggable = !0), Ut("delayStart", this, {
        evt: e
      }), n.delay && (!n.delayOnTouchOnly || r) && (!this.nativeDraggable || !(Mr || Sn))) {
        if (Be.eventCanceled) {
          this._onDrop();
          return;
        }
        Je(u, "mouseup", i._disableDelayedDrag), Je(u, "touchend", i._disableDelayedDrag), Je(u, "touchcancel", i._disableDelayedDrag), Je(u, "mousemove", i._delayedDragTouchMoveHandler), Je(u, "touchmove", i._delayedDragTouchMoveHandler), n.supportPointer && Je(u, "pointermove", i._delayedDragTouchMoveHandler), i._dragStartTimer = setTimeout(o, n.delay);
      } else
        o();
    }
  },
  _delayedDragTouchMoveHandler: function(e) {
    var r = e.touches ? e.touches[0] : e;
    Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    ye && oa(ye), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var e = this.el.ownerDocument;
    Xe(e, "mouseup", this._disableDelayedDrag), Xe(e, "touchend", this._disableDelayedDrag), Xe(e, "touchcancel", this._disableDelayedDrag), Xe(e, "mousemove", this._delayedDragTouchMoveHandler), Xe(e, "touchmove", this._delayedDragTouchMoveHandler), Xe(e, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(e, r) {
    r = r || e.pointerType == "touch" && e, !this.nativeDraggable || r ? this.options.supportPointer ? Je(document, "pointermove", this._onTouchMove) : r ? Je(document, "touchmove", this._onTouchMove) : Je(document, "mousemove", this._onTouchMove) : (Je(ye, "dragend", this), Je(st, "dragstart", this._onDragStart));
    try {
      document.selection ? ho(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(e, r) {
    if (qn = !1, st && ye) {
      Ut("dragStarted", this, {
        evt: r
      }), this.nativeDraggable && Je(document, "dragover", Lp);
      var a = this.options;
      !e && ut(ye, a.dragClass, !1), ut(ye, a.ghostClass, !0), Be.active = this, e && this._appendGhost(), It({
        sortable: this,
        name: "start",
        originalEvent: r
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (_t) {
      this._lastX = _t.clientX, this._lastY = _t.clientY, sl();
      for (var e = document.elementFromPoint(_t.clientX, _t.clientY), r = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(_t.clientX, _t.clientY), e !== r); )
        r = e;
      if (ye.parentNode[Ot]._isOutsideThisEl(e), r)
        do {
          if (r[Ot]) {
            var a = void 0;
            if (a = r[Ot]._onDragOver({
              clientX: _t.clientX,
              clientY: _t.clientY,
              target: e,
              rootEl: r
            }), a && !this.options.dragoverBubble)
              break;
          }
          e = r;
        } while (r = r.parentNode);
      ll();
    }
  },
  _onTouchMove: function(e) {
    if (Un) {
      var r = this.options, a = r.fallbackTolerance, i = r.fallbackOffset, c = e.touches ? e.touches[0] : e, n = We && Hn(We, !0), u = We && n && n.a, o = We && n && n.d, s = to && Tt && $i(Tt), l = (c.clientX - Un.clientX + i.x) / (u || 1) + (s ? s[0] - ra[0] : 0) / (u || 1), d = (c.clientY - Un.clientY + i.y) / (o || 1) + (s ? s[1] - ra[1] : 0) / (o || 1);
      if (!Be.active && !qn) {
        if (a && Math.max(Math.abs(c.clientX - this._lastX), Math.abs(c.clientY - this._lastY)) < a)
          return;
        this._onDragStart(e, !0);
      }
      if (We) {
        n ? (n.e += l - (ta || 0), n.f += d - (na || 0)) : n = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: l,
          f: d
        };
        var f = "matrix(".concat(n.a, ",").concat(n.b, ",").concat(n.c, ",").concat(n.d, ",").concat(n.e, ",").concat(n.f, ")");
        De(We, "webkitTransform", f), De(We, "mozTransform", f), De(We, "msTransform", f), De(We, "transform", f), ta = l, na = d, _t = c;
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!We) {
      var e = this.options.fallbackOnBody ? document.body : st, r = lt(ye, !0, to, !0, e), a = this.options;
      if (to) {
        for (Tt = e; De(Tt, "position") === "static" && De(Tt, "transform") === "none" && Tt !== document; )
          Tt = Tt.parentNode;
        Tt !== document.body && Tt !== document.documentElement ? (Tt === document && (Tt = sn()), r.top += Tt.scrollTop, r.left += Tt.scrollLeft) : Tt = sn(), ra = $i(Tt);
      }
      We = ye.cloneNode(!0), ut(We, a.ghostClass, !1), ut(We, a.fallbackClass, !0), ut(We, a.dragClass, !0), De(We, "transition", ""), De(We, "transform", ""), De(We, "box-sizing", "border-box"), De(We, "margin", 0), De(We, "top", r.top), De(We, "left", r.left), De(We, "width", r.width), De(We, "height", r.height), De(We, "opacity", "0.8"), De(We, "position", to ? "absolute" : "fixed"), De(We, "zIndex", "100000"), De(We, "pointerEvents", "none"), Be.ghost = We, e.appendChild(We), De(We, "transform-origin", Hi / parseInt(We.style.width) * 100 + "% " + zi / parseInt(We.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(e, r) {
    var a = this, i = e.dataTransfer, c = a.options;
    if (Ut("dragStart", this, {
      evt: e
    }), Be.eventCanceled) {
      this._onDrop();
      return;
    }
    Ut("setupClone", this), Be.eventCanceled || (dt = Ka(ye), dt.draggable = !1, dt.style["will-change"] = "", this._hideClone(), ut(dt, this.options.chosenClass, !1), Be.clone = dt), a.cloneId = ho(function() {
      Ut("clone", a), !Be.eventCanceled && (a.options.removeCloneOnHide || st.insertBefore(dt, ye), a._hideClone(), It({
        sortable: a,
        name: "clone"
      }));
    }), !r && ut(ye, c.dragClass, !0), r ? (To = !0, a._loopId = setInterval(a._emulateDragOver, 50)) : (Xe(document, "mouseup", a._onDrop), Xe(document, "touchend", a._onDrop), Xe(document, "touchcancel", a._onDrop), i && (i.effectAllowed = "move", c.setData && c.setData.call(a, i, ye)), Je(document, "drop", a), De(ye, "transform", "translateZ(0)")), qn = !0, a._dragStartId = ho(a._dragStarted.bind(a, r, e)), Je(document, "selectstart", a), gr = !0, Sr && De(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(e) {
    var r = this.el, a = e.target, i, c, n, u = this.options, o = u.group, s = Be.active, l = _r === o, d = u.sort, f = St || s, p, h = this, v = !1;
    if (ya) return;
    function m(X, he) {
      Ut(X, h, ln({
        evt: e,
        isOwner: l,
        axis: p ? "vertical" : "horizontal",
        revert: n,
        dragRect: i,
        targetRect: c,
        canSort: d,
        fromSortable: f,
        target: a,
        completed: y,
        onMove: function(Te, Re) {
          return no(st, r, ye, i, Te, lt(Te), e, Re);
        },
        changed: S
      }, he));
    }
    function g() {
      m("dragOverAnimationCapture"), h.captureAnimationState(), h !== f && f.captureAnimationState();
    }
    function y(X) {
      return m("dragOverCompleted", {
        insertion: X
      }), X && (l ? s._hideClone() : s._showClone(h), h !== f && (ut(ye, St ? St.options.ghostClass : s.options.ghostClass, !1), ut(ye, u.ghostClass, !0)), St !== h && h !== Be.active ? St = h : h === Be.active && St && (St = null), f === h && (h._ignoreWhileAnimating = a), h.animateAll(function() {
        m("dragOverAnimationComplete"), h._ignoreWhileAnimating = null;
      }), h !== f && (f.animateAll(), f._ignoreWhileAnimating = null)), (a === ye && !ye.animated || a === r && !a.animated) && (Jn = null), !u.dragoverBubble && !e.rootEl && a !== document && (ye.parentNode[Ot]._isOutsideThisEl(e.target), !X && Nn(e)), !u.dragoverBubble && e.stopPropagation && e.stopPropagation(), v = !0;
    }
    function S() {
      Ht = ft(ye), En = ft(ye, u.draggable), It({
        sortable: h,
        name: "change",
        toEl: r,
        newIndex: Ht,
        newDraggableIndex: En,
        originalEvent: e
      });
    }
    if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), a = tn(a, u.draggable, r, !0), m("dragOver"), Be.eventCanceled) return v;
    if (ye.contains(e.target) || a.animated && a.animatingX && a.animatingY || h._ignoreWhileAnimating === a)
      return y(!1);
    if (To = !1, s && !u.disabled && (l ? d || (n = ct !== st) : St === this || (this.lastPutMode = _r.checkPull(this, s, ye, e)) && o.checkPut(this, s, ye, e))) {
      if (p = this._getDirection(e, a) === "vertical", i = lt(ye), m("dragOverValid"), Be.eventCanceled) return v;
      if (n)
        return ct = st, g(), this._hideClone(), m("revert"), Be.eventCanceled || (jn ? st.insertBefore(ye, jn) : st.appendChild(ye)), y(!0);
      var E = Ya(r, u.draggable);
      if (!E || kp(e, p, this) && !E.animated) {
        if (E === ye)
          return y(!1);
        if (E && r === e.target && (a = E), a && (c = lt(a)), no(st, r, ye, i, a, c, e, !!a) !== !1)
          return g(), r.appendChild(ye), ct = r, S(), y(!0);
      } else if (E && jp(e, p, this)) {
        var A = nr(r, 0, u, !0);
        if (A === ye)
          return y(!1);
        if (a = A, c = lt(a), no(st, r, ye, i, a, c, e, !1) !== !1)
          return g(), r.insertBefore(ye, A), ct = r, S(), y(!0);
      } else if (a.parentNode === r) {
        c = lt(a);
        var w = 0, L, j = ye.parentNode !== r, U = !Fp(ye.animated && ye.toRect || i, a.animated && a.toRect || c, p), N = p ? "top" : "left", $ = Bi(a, "top", "top") || Bi(ye, "top", "top"), H = $ ? $.scrollTop : void 0;
        Jn !== a && (L = c[N], Ar = !1, eo = !U && u.invertSwap || j), w = Bp(e, a, c, p, U ? 1 : u.swapThreshold, u.invertedSwapThreshold == null ? u.swapThreshold : u.invertedSwapThreshold, eo, Jn === a);
        var k;
        if (w !== 0) {
          var z = ft(ye);
          do
            z -= w, k = ct.children[z];
          while (k && (De(k, "display") === "none" || k === We));
        }
        if (w === 0 || k === a)
          return y(!1);
        Jn = a, Tr = w;
        var Y = a.nextElementSibling, W = !1;
        W = w === 1;
        var re = no(st, r, ye, i, a, c, e, W);
        if (re !== !1)
          return (re === 1 || re === -1) && (W = re === 1), ya = !0, setTimeout(Np, 30), g(), W && !Y ? r.appendChild(ye) : a.parentNode.insertBefore(ye, W ? Y : a), $ && rl($, 0, H - $.scrollTop), ct = ye.parentNode, L !== void 0 && !eo && (fo = Math.abs(L - lt(a)[N])), S(), y(!0);
      }
      if (r.contains(ye))
        return y(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    Xe(document, "mousemove", this._onTouchMove), Xe(document, "touchmove", this._onTouchMove), Xe(document, "pointermove", this._onTouchMove), Xe(document, "dragover", Nn), Xe(document, "mousemove", Nn), Xe(document, "touchmove", Nn);
  },
  _offUpEvents: function() {
    var e = this.el.ownerDocument;
    Xe(e, "mouseup", this._onDrop), Xe(e, "touchend", this._onDrop), Xe(e, "pointerup", this._onDrop), Xe(e, "touchcancel", this._onDrop), Xe(document, "selectstart", this);
  },
  _onDrop: function(e) {
    var r = this.el, a = this.options;
    if (Ht = ft(ye), En = ft(ye, a.draggable), Ut("drop", this, {
      evt: e
    }), ct = ye && ye.parentNode, Ht = ft(ye), En = ft(ye, a.draggable), Be.eventCanceled) {
      this._nulling();
      return;
    }
    qn = !1, eo = !1, Ar = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), ba(this.cloneId), ba(this._dragStartId), this.nativeDraggable && (Xe(document, "drop", this), Xe(r, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Sr && De(document.body, "user-select", ""), De(ye, "transform", ""), e && (gr && (e.cancelable && e.preventDefault(), !a.dropBubble && e.stopPropagation()), We && We.parentNode && We.parentNode.removeChild(We), (st === ct || St && St.lastPutMode !== "clone") && dt && dt.parentNode && dt.parentNode.removeChild(dt), ye && (this.nativeDraggable && Xe(ye, "dragend", this), oa(ye), ye.style["will-change"] = "", gr && !qn && ut(ye, St ? St.options.ghostClass : this.options.ghostClass, !1), ut(ye, this.options.chosenClass, !1), It({
      sortable: this,
      name: "unchoose",
      toEl: ct,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: e
    }), st !== ct ? (Ht >= 0 && (It({
      rootEl: ct,
      name: "add",
      toEl: ct,
      fromEl: st,
      originalEvent: e
    }), It({
      sortable: this,
      name: "remove",
      toEl: ct,
      originalEvent: e
    }), It({
      rootEl: ct,
      name: "sort",
      toEl: ct,
      fromEl: st,
      originalEvent: e
    }), It({
      sortable: this,
      name: "sort",
      toEl: ct,
      originalEvent: e
    })), St && St.save()) : Ht !== er && Ht >= 0 && (It({
      sortable: this,
      name: "update",
      toEl: ct,
      originalEvent: e
    }), It({
      sortable: this,
      name: "sort",
      toEl: ct,
      originalEvent: e
    })), Be.active && ((Ht == null || Ht === -1) && (Ht = er, En = wr), It({
      sortable: this,
      name: "end",
      toEl: ct,
      originalEvent: e
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    Ut("nulling", this), st = ye = ct = We = jn = dt = co = wn = Un = _t = gr = Ht = En = er = wr = Jn = Tr = St = _r = Be.dragged = Be.ghost = Be.clone = Be.active = null, Co.forEach(function(e) {
      e.checked = !0;
    }), Co.length = ta = na = 0;
  },
  handleEvent: function(e) {
    switch (e.type) {
      case "drop":
      case "dragend":
        this._onDrop(e);
        break;
      case "dragenter":
      case "dragover":
        ye && (this._onDragOver(e), Up(e));
        break;
      case "selectstart":
        e.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var e = [], r, a = this.el.children, i = 0, c = a.length, n = this.options; i < c; i++)
      r = a[i], tn(r, n.draggable, this.el, !1) && e.push(r.getAttribute(n.dataIdAttr) || Vp(r));
    return e;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(e, r) {
    var a = {}, i = this.el;
    this.toArray().forEach(function(c, n) {
      var u = i.children[n];
      tn(u, this.options.draggable, i, !1) && (a[c] = u);
    }, this), r && this.captureAnimationState(), e.forEach(function(c) {
      a[c] && (i.removeChild(a[c]), i.appendChild(a[c]));
    }), r && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var e = this.options.store;
    e && e.set && e.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(e, r) {
    return tn(e, r || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(e, r) {
    var a = this.options;
    if (r === void 0)
      return a[e];
    var i = Lr.modifyOption(this, e, r);
    typeof i < "u" ? a[e] = i : a[e] = r, e === "group" && il(a);
  },
  /**
   * Destroy
   */
  destroy: function() {
    Ut("destroy", this);
    var e = this.el;
    e[Ot] = null, Xe(e, "mousedown", this._onTapStart), Xe(e, "touchstart", this._onTapStart), Xe(e, "pointerdown", this._onTapStart), this.nativeDraggable && (Xe(e, "dragover", this), Xe(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(r) {
      r.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Ao.splice(Ao.indexOf(this.el), 1), this.el = e = null;
  },
  _hideClone: function() {
    if (!wn) {
      if (Ut("hideClone", this), Be.eventCanceled) return;
      De(dt, "display", "none"), this.options.removeCloneOnHide && dt.parentNode && dt.parentNode.removeChild(dt), wn = !0;
    }
  },
  _showClone: function(e) {
    if (e.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (wn) {
      if (Ut("showClone", this), Be.eventCanceled) return;
      ye.parentNode == st && !this.options.group.revertClone ? st.insertBefore(dt, ye) : jn ? st.insertBefore(dt, jn) : st.appendChild(dt), this.options.group.revertClone && this.animate(ye, dt), De(dt, "display", ""), wn = !1;
    }
  }
};
function Up(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function no(t, e, r, a, i, c, n, u) {
  var o, s = t[Ot], l = s.options.onMove, d;
  return window.CustomEvent && !Sn && !Mr ? o = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (o = document.createEvent("Event"), o.initEvent("move", !0, !0)), o.to = e, o.from = t, o.dragged = r, o.draggedRect = a, o.related = i || e, o.relatedRect = c || lt(e), o.willInsertAfter = u, o.originalEvent = n, t.dispatchEvent(o), l && (d = l.call(s, o, n)), d;
}
function oa(t) {
  t.draggable = !1;
}
function Np() {
  ya = !1;
}
function jp(t, e, r) {
  var a = lt(nr(r.el, 0, r.options, !0)), i = 10;
  return e ? t.clientX < a.left - i || t.clientY < a.top && t.clientX < a.right : t.clientY < a.top - i || t.clientY < a.bottom && t.clientX < a.left;
}
function kp(t, e, r) {
  var a = lt(Ya(r.el, r.options.draggable)), i = 10;
  return e ? t.clientX > a.right + i || t.clientX <= a.right && t.clientY > a.bottom && t.clientX >= a.left : t.clientX > a.right && t.clientY > a.top || t.clientX <= a.right && t.clientY > a.bottom + i;
}
function Bp(t, e, r, a, i, c, n, u) {
  var o = a ? t.clientY : t.clientX, s = a ? r.height : r.width, l = a ? r.top : r.left, d = a ? r.bottom : r.right, f = !1;
  if (!n) {
    if (u && fo < s * i) {
      if (!Ar && (Tr === 1 ? o > l + s * c / 2 : o < d - s * c / 2) && (Ar = !0), Ar)
        f = !0;
      else if (Tr === 1 ? o < l + fo : o > d - fo)
        return -Tr;
    } else if (o > l + s * (1 - i) / 2 && o < d - s * (1 - i) / 2)
      return $p(e);
  }
  return f = f || n, f && (o < l + s * c / 2 || o > d - s * c / 2) ? o > l + s / 2 ? 1 : -1 : 0;
}
function $p(t) {
  return ft(ye) < ft(t) ? 1 : -1;
}
function Vp(t) {
  for (var e = t.tagName + t.className + t.src + t.href + t.textContent, r = e.length, a = 0; r--; )
    a += e.charCodeAt(r);
  return a.toString(36);
}
function Hp(t) {
  Co.length = 0;
  for (var e = t.getElementsByTagName("input"), r = e.length; r--; ) {
    var a = e[r];
    a.checked && Co.push(a);
  }
}
function ho(t) {
  return setTimeout(t, 0);
}
function ba(t) {
  return clearTimeout(t);
}
Vo && Je(document, "touchmove", function(t) {
  (Be.active || qn) && t.cancelable && t.preventDefault();
});
Be.utils = {
  on: Je,
  off: Xe,
  css: De,
  find: tl,
  is: function(e, r) {
    return !!tn(e, r, e, !1);
  },
  extend: Ap,
  throttle: nl,
  closest: tn,
  toggleClass: ut,
  clone: Ka,
  index: ft,
  nextTick: ho,
  cancelNextTick: ba,
  detectDirection: al,
  getChild: nr
};
Be.get = function(t) {
  return t[Ot];
};
Be.mount = function() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  e[0].constructor === Array && (e = e[0]), e.forEach(function(a) {
    if (!a.prototype || !a.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(a));
    a.utils && (Be.utils = ln(ln({}, Be.utils), a.utils)), Lr.mount(a);
  });
};
Be.create = function(t, e) {
  return new Be(t, e);
};
Be.version = Sp;
var mt = [], yr, xa, Sa = !1, aa, ia, Oo, br;
function zp() {
  function t() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var e in this)
      e.charAt(0) === "_" && typeof this[e] == "function" && (this[e] = this[e].bind(this));
  }
  return t.prototype = {
    dragStarted: function(r) {
      var a = r.originalEvent;
      this.sortable.nativeDraggable ? Je(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Je(document, "pointermove", this._handleFallbackAutoScroll) : a.touches ? Je(document, "touchmove", this._handleFallbackAutoScroll) : Je(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(r) {
      var a = r.originalEvent;
      !this.options.dragOverBubble && !a.rootEl && this._handleAutoScroll(a);
    },
    drop: function() {
      this.sortable.nativeDraggable ? Xe(document, "dragover", this._handleAutoScroll) : (Xe(document, "pointermove", this._handleFallbackAutoScroll), Xe(document, "touchmove", this._handleFallbackAutoScroll), Xe(document, "mousemove", this._handleFallbackAutoScroll)), Wi(), po(), Cp();
    },
    nulling: function() {
      Oo = xa = yr = Sa = br = aa = ia = null, mt.length = 0;
    },
    _handleFallbackAutoScroll: function(r) {
      this._handleAutoScroll(r, !0);
    },
    _handleAutoScroll: function(r, a) {
      var i = this, c = (r.touches ? r.touches[0] : r).clientX, n = (r.touches ? r.touches[0] : r).clientY, u = document.elementFromPoint(c, n);
      if (Oo = r, a || this.options.forceAutoScrollFallback || Mr || Sn || Sr) {
        sa(r, this.options, u, a);
        var o = An(u, !0);
        Sa && (!br || c !== aa || n !== ia) && (br && Wi(), br = setInterval(function() {
          var s = An(document.elementFromPoint(c, n), !0);
          s !== o && (o = s, po()), sa(r, i.options, s, a);
        }, 10), aa = c, ia = n);
      } else {
        if (!this.options.bubbleScroll || An(u, !0) === sn()) {
          po();
          return;
        }
        sa(r, this.options, An(u, !1), !1);
      }
    }
  }, Zt(t, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function po() {
  mt.forEach(function(t) {
    clearInterval(t.pid);
  }), mt = [];
}
function Wi() {
  clearInterval(br);
}
var sa = nl(function(t, e, r, a) {
  if (e.scroll) {
    var i = (t.touches ? t.touches[0] : t).clientX, c = (t.touches ? t.touches[0] : t).clientY, n = e.scrollSensitivity, u = e.scrollSpeed, o = sn(), s = !1, l;
    xa !== r && (xa = r, po(), yr = e.scroll, l = e.scrollFn, yr === !0 && (yr = An(r, !0)));
    var d = 0, f = yr;
    do {
      var p = f, h = lt(p), v = h.top, m = h.bottom, g = h.left, y = h.right, S = h.width, E = h.height, A = void 0, w = void 0, L = p.scrollWidth, j = p.scrollHeight, U = De(p), N = p.scrollLeft, $ = p.scrollTop;
      p === o ? (A = S < L && (U.overflowX === "auto" || U.overflowX === "scroll" || U.overflowX === "visible"), w = E < j && (U.overflowY === "auto" || U.overflowY === "scroll" || U.overflowY === "visible")) : (A = S < L && (U.overflowX === "auto" || U.overflowX === "scroll"), w = E < j && (U.overflowY === "auto" || U.overflowY === "scroll"));
      var H = A && (Math.abs(y - i) <= n && N + S < L) - (Math.abs(g - i) <= n && !!N), k = w && (Math.abs(m - c) <= n && $ + E < j) - (Math.abs(v - c) <= n && !!$);
      if (!mt[d])
        for (var z = 0; z <= d; z++)
          mt[z] || (mt[z] = {});
      (mt[d].vx != H || mt[d].vy != k || mt[d].el !== p) && (mt[d].el = p, mt[d].vx = H, mt[d].vy = k, clearInterval(mt[d].pid), (H != 0 || k != 0) && (s = !0, mt[d].pid = setInterval((function() {
        a && this.layer === 0 && Be.active._onTouchMove(Oo);
        var Y = mt[this.layer].vy ? mt[this.layer].vy * u : 0, W = mt[this.layer].vx ? mt[this.layer].vx * u : 0;
        typeof l == "function" && l.call(Be.dragged.parentNode[Ot], W, Y, t, Oo, mt[this.layer].el) !== "continue" || rl(mt[this.layer].el, W, Y);
      }).bind({
        layer: d
      }), 24))), d++;
    } while (e.bubbleScroll && f !== o && (f = An(f, !1)));
    Sa = s;
  }
}, 30), ul = function(e) {
  var r = e.originalEvent, a = e.putSortable, i = e.dragEl, c = e.activeSortable, n = e.dispatchSortableEvent, u = e.hideGhostForTarget, o = e.unhideGhostForTarget;
  if (r) {
    var s = a || c;
    u();
    var l = r.changedTouches && r.changedTouches.length ? r.changedTouches[0] : r, d = document.elementFromPoint(l.clientX, l.clientY);
    o(), s && !s.el.contains(d) && (n("spill"), this.onSpill({
      dragEl: i,
      putSortable: a
    }));
  }
};
function Xa() {
}
Xa.prototype = {
  startIndex: null,
  dragStart: function(e) {
    var r = e.oldDraggableIndex;
    this.startIndex = r;
  },
  onSpill: function(e) {
    var r = e.dragEl, a = e.putSortable;
    this.sortable.captureAnimationState(), a && a.captureAnimationState();
    var i = nr(this.sortable.el, this.startIndex, this.options);
    i ? this.sortable.el.insertBefore(r, i) : this.sortable.el.appendChild(r), this.sortable.animateAll(), a && a.animateAll();
  },
  drop: ul
};
Zt(Xa, {
  pluginName: "revertOnSpill"
});
function Ja() {
}
Ja.prototype = {
  onSpill: function(e) {
    var r = e.dragEl, a = e.putSortable, i = a || this.sortable;
    i.captureAnimationState(), r.parentNode && r.parentNode.removeChild(r), i.animateAll();
  },
  drop: ul
};
Zt(Ja, {
  pluginName: "removeOnSpill"
});
var Kt;
function Gp() {
  function t() {
    this.defaults = {
      swapClass: "sortable-swap-highlight"
    };
  }
  return t.prototype = {
    dragStart: function(r) {
      var a = r.dragEl;
      Kt = a;
    },
    dragOverValid: function(r) {
      var a = r.completed, i = r.target, c = r.onMove, n = r.activeSortable, u = r.changed, o = r.cancel;
      if (n.options.swap) {
        var s = this.sortable.el, l = this.options;
        if (i && i !== s) {
          var d = Kt;
          c(i) !== !1 ? (ut(i, l.swapClass, !0), Kt = i) : Kt = null, d && d !== Kt && ut(d, l.swapClass, !1);
        }
        u(), a(!0), o();
      }
    },
    drop: function(r) {
      var a = r.activeSortable, i = r.putSortable, c = r.dragEl, n = i || this.sortable, u = this.options;
      Kt && ut(Kt, u.swapClass, !1), Kt && (u.swap || i && i.options.swap) && c !== Kt && (n.captureAnimationState(), n !== a && a.captureAnimationState(), Wp(c, Kt), n.animateAll(), n !== a && a.animateAll());
    },
    nulling: function() {
      Kt = null;
    }
  }, Zt(t, {
    pluginName: "swap",
    eventProperties: function() {
      return {
        swapItem: Kt
      };
    }
  });
}
function Wp(t, e) {
  var r = t.parentNode, a = e.parentNode, i, c;
  !r || !a || r.isEqualNode(e) || a.isEqualNode(t) || (i = ft(t), c = ft(e), r.isEqualNode(a) && i < c && c++, r.insertBefore(e, r.children[i]), a.insertBefore(t, a.children[c]));
}
var ze = [], $t = [], dr, en, fr = !1, Nt = !1, Qn = !1, nt, hr, ro;
function Yp() {
  function t(e) {
    for (var r in this)
      r.charAt(0) === "_" && typeof this[r] == "function" && (this[r] = this[r].bind(this));
    e.options.supportPointer ? Je(document, "pointerup", this._deselectMultiDrag) : (Je(document, "mouseup", this._deselectMultiDrag), Je(document, "touchend", this._deselectMultiDrag)), Je(document, "keydown", this._checkKeyDown), Je(document, "keyup", this._checkKeyUp), this.defaults = {
      selectedClass: "sortable-selected",
      multiDragKey: null,
      setData: function(i, c) {
        var n = "";
        ze.length && en === e ? ze.forEach(function(u, o) {
          n += (o ? ", " : "") + u.textContent;
        }) : n = c.textContent, i.setData("Text", n);
      }
    };
  }
  return t.prototype = {
    multiDragKeyDown: !1,
    isMultiDrag: !1,
    delayStartGlobal: function(r) {
      var a = r.dragEl;
      nt = a;
    },
    delayEnded: function() {
      this.isMultiDrag = ~ze.indexOf(nt);
    },
    setupClone: function(r) {
      var a = r.sortable, i = r.cancel;
      if (this.isMultiDrag) {
        for (var c = 0; c < ze.length; c++)
          $t.push(Ka(ze[c])), $t[c].sortableIndex = ze[c].sortableIndex, $t[c].draggable = !1, $t[c].style["will-change"] = "", ut($t[c], this.options.selectedClass, !1), ze[c] === nt && ut($t[c], this.options.chosenClass, !1);
        a._hideClone(), i();
      }
    },
    clone: function(r) {
      var a = r.sortable, i = r.rootEl, c = r.dispatchSortableEvent, n = r.cancel;
      this.isMultiDrag && (this.options.removeCloneOnHide || ze.length && en === a && (Yi(!0, i), c("clone"), n()));
    },
    showClone: function(r) {
      var a = r.cloneNowShown, i = r.rootEl, c = r.cancel;
      this.isMultiDrag && (Yi(!1, i), $t.forEach(function(n) {
        De(n, "display", "");
      }), a(), ro = !1, c());
    },
    hideClone: function(r) {
      var a = this;
      r.sortable;
      var i = r.cloneNowHidden, c = r.cancel;
      this.isMultiDrag && ($t.forEach(function(n) {
        De(n, "display", "none"), a.options.removeCloneOnHide && n.parentNode && n.parentNode.removeChild(n);
      }), i(), ro = !0, c());
    },
    dragStartGlobal: function(r) {
      r.sortable, !this.isMultiDrag && en && en.multiDrag._deselectMultiDrag(), ze.forEach(function(a) {
        a.sortableIndex = ft(a);
      }), ze = ze.sort(function(a, i) {
        return a.sortableIndex - i.sortableIndex;
      }), Qn = !0;
    },
    dragStarted: function(r) {
      var a = this, i = r.sortable;
      if (this.isMultiDrag) {
        if (this.options.sort && (i.captureAnimationState(), this.options.animation)) {
          ze.forEach(function(n) {
            n !== nt && De(n, "position", "absolute");
          });
          var c = lt(nt, !1, !0, !0);
          ze.forEach(function(n) {
            n !== nt && Vi(n, c);
          }), Nt = !0, fr = !0;
        }
        i.animateAll(function() {
          Nt = !1, fr = !1, a.options.animation && ze.forEach(function(n) {
            _o(n);
          }), a.options.sort && oo();
        });
      }
    },
    dragOver: function(r) {
      var a = r.target, i = r.completed, c = r.cancel;
      Nt && ~ze.indexOf(a) && (i(!1), c());
    },
    revert: function(r) {
      var a = r.fromSortable, i = r.rootEl, c = r.sortable, n = r.dragRect;
      ze.length > 1 && (ze.forEach(function(u) {
        c.addAnimationState({
          target: u,
          rect: Nt ? lt(u) : n
        }), _o(u), u.fromRect = n, a.removeAnimationState(u);
      }), Nt = !1, Kp(!this.options.removeCloneOnHide, i));
    },
    dragOverCompleted: function(r) {
      var a = r.sortable, i = r.isOwner, c = r.insertion, n = r.activeSortable, u = r.parentEl, o = r.putSortable, s = this.options;
      if (c) {
        if (i && n._hideClone(), fr = !1, s.animation && ze.length > 1 && (Nt || !i && !n.options.sort && !o)) {
          var l = lt(nt, !1, !0, !0);
          ze.forEach(function(f) {
            f !== nt && (Vi(f, l), u.appendChild(f));
          }), Nt = !0;
        }
        if (!i)
          if (Nt || oo(), ze.length > 1) {
            var d = ro;
            n._showClone(a), n.options.animation && !ro && d && $t.forEach(function(f) {
              n.addAnimationState({
                target: f,
                rect: hr
              }), f.fromRect = hr, f.thisAnimationDuration = null;
            });
          } else
            n._showClone(a);
      }
    },
    dragOverAnimationCapture: function(r) {
      var a = r.dragRect, i = r.isOwner, c = r.activeSortable;
      if (ze.forEach(function(u) {
        u.thisAnimationDuration = null;
      }), c.options.animation && !i && c.multiDrag.isMultiDrag) {
        hr = Zt({}, a);
        var n = Hn(nt, !0);
        hr.top -= n.f, hr.left -= n.e;
      }
    },
    dragOverAnimationComplete: function() {
      Nt && (Nt = !1, oo());
    },
    drop: function(r) {
      var a = r.originalEvent, i = r.rootEl, c = r.parentEl, n = r.sortable, u = r.dispatchSortableEvent, o = r.oldIndex, s = r.putSortable, l = s || this.sortable;
      if (a) {
        var d = this.options, f = c.children;
        if (!Qn)
          if (d.multiDragKey && !this.multiDragKeyDown && this._deselectMultiDrag(), ut(nt, d.selectedClass, !~ze.indexOf(nt)), ~ze.indexOf(nt))
            ze.splice(ze.indexOf(nt), 1), dr = null, mr({
              sortable: n,
              rootEl: i,
              name: "deselect",
              targetEl: nt
            });
          else {
            if (ze.push(nt), mr({
              sortable: n,
              rootEl: i,
              name: "select",
              targetEl: nt
            }), a.shiftKey && dr && n.el.contains(dr)) {
              var p = ft(dr), h = ft(nt);
              if (~p && ~h && p !== h) {
                var v, m;
                for (h > p ? (m = p, v = h) : (m = h, v = p + 1); m < v; m++)
                  ~ze.indexOf(f[m]) || (ut(f[m], d.selectedClass, !0), ze.push(f[m]), mr({
                    sortable: n,
                    rootEl: i,
                    name: "select",
                    targetEl: f[m]
                  }));
              }
            } else
              dr = nt;
            en = l;
          }
        if (Qn && this.isMultiDrag) {
          if (Nt = !1, (c[Ot].options.sort || c !== i) && ze.length > 1) {
            var g = lt(nt), y = ft(nt, ":not(." + this.options.selectedClass + ")");
            if (!fr && d.animation && (nt.thisAnimationDuration = null), l.captureAnimationState(), !fr && (d.animation && (nt.fromRect = g, ze.forEach(function(E) {
              if (E.thisAnimationDuration = null, E !== nt) {
                var A = Nt ? lt(E) : g;
                E.fromRect = A, l.addAnimationState({
                  target: E,
                  rect: A
                });
              }
            })), oo(), ze.forEach(function(E) {
              f[y] ? c.insertBefore(E, f[y]) : c.appendChild(E), y++;
            }), o === ft(nt))) {
              var S = !1;
              ze.forEach(function(E) {
                if (E.sortableIndex !== ft(E)) {
                  S = !0;
                  return;
                }
              }), S && u("update");
            }
            ze.forEach(function(E) {
              _o(E);
            }), l.animateAll();
          }
          en = l;
        }
        (i === c || s && s.lastPutMode !== "clone") && $t.forEach(function(E) {
          E.parentNode && E.parentNode.removeChild(E);
        });
      }
    },
    nullingGlobal: function() {
      this.isMultiDrag = Qn = !1, $t.length = 0;
    },
    destroyGlobal: function() {
      this._deselectMultiDrag(), Xe(document, "pointerup", this._deselectMultiDrag), Xe(document, "mouseup", this._deselectMultiDrag), Xe(document, "touchend", this._deselectMultiDrag), Xe(document, "keydown", this._checkKeyDown), Xe(document, "keyup", this._checkKeyUp);
    },
    _deselectMultiDrag: function(r) {
      if (!(typeof Qn < "u" && Qn) && en === this.sortable && !(r && tn(r.target, this.options.draggable, this.sortable.el, !1)) && !(r && r.button !== 0))
        for (; ze.length; ) {
          var a = ze[0];
          ut(a, this.options.selectedClass, !1), ze.shift(), mr({
            sortable: this.sortable,
            rootEl: this.sortable.el,
            name: "deselect",
            targetEl: a
          });
        }
    },
    _checkKeyDown: function(r) {
      r.key === this.options.multiDragKey && (this.multiDragKeyDown = !0);
    },
    _checkKeyUp: function(r) {
      r.key === this.options.multiDragKey && (this.multiDragKeyDown = !1);
    }
  }, Zt(t, {
    // Static methods & properties
    pluginName: "multiDrag",
    utils: {
      /**
       * Selects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be selected
       */
      select: function(r) {
        var a = r.parentNode[Ot];
        !a || !a.options.multiDrag || ~ze.indexOf(r) || (en && en !== a && (en.multiDrag._deselectMultiDrag(), en = a), ut(r, a.options.selectedClass, !0), ze.push(r));
      },
      /**
       * Deselects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be deselected
       */
      deselect: function(r) {
        var a = r.parentNode[Ot], i = ze.indexOf(r);
        !a || !a.options.multiDrag || !~i || (ut(r, a.options.selectedClass, !1), ze.splice(i, 1));
      }
    },
    eventProperties: function() {
      var r = this, a = [], i = [];
      return ze.forEach(function(c) {
        a.push({
          multiDragElement: c,
          index: c.sortableIndex
        });
        var n;
        Nt && c !== nt ? n = -1 : Nt ? n = ft(c, ":not(." + r.options.selectedClass + ")") : n = ft(c), i.push({
          multiDragElement: c,
          index: n
        });
      }), {
        items: mp(ze),
        clones: [].concat($t),
        oldIndicies: a,
        newIndicies: i
      };
    },
    optionListeners: {
      multiDragKey: function(r) {
        return r = r.toLowerCase(), r === "ctrl" ? r = "Control" : r.length > 1 && (r = r.charAt(0).toUpperCase() + r.substr(1)), r;
      }
    }
  });
}
function Kp(t, e) {
  ze.forEach(function(r, a) {
    var i = e.children[r.sortableIndex + (t ? Number(a) : 0)];
    i ? e.insertBefore(r, i) : e.appendChild(r);
  });
}
function Yi(t, e) {
  $t.forEach(function(r, a) {
    var i = e.children[r.sortableIndex + (t ? Number(a) : 0)];
    i ? e.insertBefore(r, i) : e.appendChild(r);
  });
}
function oo() {
  ze.forEach(function(t) {
    t !== nt && t.parentNode && t.parentNode.removeChild(t);
  });
}
Be.mount(new zp());
Be.mount(Ja, Xa);
const Xp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MultiDrag: Yp,
  Sortable: Be,
  Swap: Gp,
  default: Be
}, Symbol.toStringTag, { value: "Module" })), Jp = /* @__PURE__ */ Pc(Xp);
var Qp = lo.exports, Ki;
function Zp() {
  return Ki || (Ki = 1, function(t, e) {
    (function(a, i) {
      t.exports = i(Ll, Jp);
    })(typeof self < "u" ? self : Qp, function(r, a) {
      return (
        /******/
        function(i) {
          var c = {};
          function n(u) {
            if (c[u])
              return c[u].exports;
            var o = c[u] = {
              /******/
              i: u,
              /******/
              l: !1,
              /******/
              exports: {}
              /******/
            };
            return i[u].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
          }
          return n.m = i, n.c = c, n.d = function(u, o, s) {
            n.o(u, o) || Object.defineProperty(u, o, { enumerable: !0, get: s });
          }, n.r = function(u) {
            typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(u, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(u, "__esModule", { value: !0 });
          }, n.t = function(u, o) {
            if (o & 1 && (u = n(u)), o & 8 || o & 4 && typeof u == "object" && u && u.__esModule) return u;
            var s = /* @__PURE__ */ Object.create(null);
            if (n.r(s), Object.defineProperty(s, "default", { enumerable: !0, value: u }), o & 2 && typeof u != "string") for (var l in u) n.d(s, l, (function(d) {
              return u[d];
            }).bind(null, l));
            return s;
          }, n.n = function(u) {
            var o = u && u.__esModule ? (
              /******/
              function() {
                return u.default;
              }
            ) : (
              /******/
              function() {
                return u;
              }
            );
            return n.d(o, "a", o), o;
          }, n.o = function(u, o) {
            return Object.prototype.hasOwnProperty.call(u, o);
          }, n.p = "", n(n.s = "fb15");
        }({
          /***/
          "00ee": (
            /***/
            function(i, c, n) {
              var u = n("b622"), o = u("toStringTag"), s = {};
              s[o] = "z", i.exports = String(s) === "[object z]";
            }
          ),
          /***/
          "0366": (
            /***/
            function(i, c, n) {
              var u = n("1c0b");
              i.exports = function(o, s, l) {
                if (u(o), s === void 0) return o;
                switch (l) {
                  case 0:
                    return function() {
                      return o.call(s);
                    };
                  case 1:
                    return function(d) {
                      return o.call(s, d);
                    };
                  case 2:
                    return function(d, f) {
                      return o.call(s, d, f);
                    };
                  case 3:
                    return function(d, f, p) {
                      return o.call(s, d, f, p);
                    };
                }
                return function() {
                  return o.apply(s, arguments);
                };
              };
            }
          ),
          /***/
          "057f": (
            /***/
            function(i, c, n) {
              var u = n("fc6a"), o = n("241c").f, s = {}.toString, l = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], d = function(f) {
                try {
                  return o(f);
                } catch {
                  return l.slice();
                }
              };
              i.exports.f = function(p) {
                return l && s.call(p) == "[object Window]" ? d(p) : o(u(p));
              };
            }
          ),
          /***/
          "06cf": (
            /***/
            function(i, c, n) {
              var u = n("83ab"), o = n("d1e7"), s = n("5c6c"), l = n("fc6a"), d = n("c04e"), f = n("5135"), p = n("0cfb"), h = Object.getOwnPropertyDescriptor;
              c.f = u ? h : function(m, g) {
                if (m = l(m), g = d(g, !0), p) try {
                  return h(m, g);
                } catch {
                }
                if (f(m, g)) return s(!o.f.call(m, g), m[g]);
              };
            }
          ),
          /***/
          "0cfb": (
            /***/
            function(i, c, n) {
              var u = n("83ab"), o = n("d039"), s = n("cc12");
              i.exports = !u && !o(function() {
                return Object.defineProperty(s("div"), "a", {
                  get: function() {
                    return 7;
                  }
                }).a != 7;
              });
            }
          ),
          /***/
          "13d5": (
            /***/
            function(i, c, n) {
              var u = n("23e7"), o = n("d58f").left, s = n("a640"), l = n("ae40"), d = s("reduce"), f = l("reduce", { 1: 0 });
              u({ target: "Array", proto: !0, forced: !d || !f }, {
                reduce: function(h) {
                  return o(this, h, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
                }
              });
            }
          ),
          /***/
          "14c3": (
            /***/
            function(i, c, n) {
              var u = n("c6b6"), o = n("9263");
              i.exports = function(s, l) {
                var d = s.exec;
                if (typeof d == "function") {
                  var f = d.call(s, l);
                  if (typeof f != "object")
                    throw TypeError("RegExp exec method returned something other than an Object or null");
                  return f;
                }
                if (u(s) !== "RegExp")
                  throw TypeError("RegExp#exec called on incompatible receiver");
                return o.call(s, l);
              };
            }
          ),
          /***/
          "159b": (
            /***/
            function(i, c, n) {
              var u = n("da84"), o = n("fdbc"), s = n("17c2"), l = n("9112");
              for (var d in o) {
                var f = u[d], p = f && f.prototype;
                if (p && p.forEach !== s) try {
                  l(p, "forEach", s);
                } catch {
                  p.forEach = s;
                }
              }
            }
          ),
          /***/
          "17c2": (
            /***/
            function(i, c, n) {
              var u = n("b727").forEach, o = n("a640"), s = n("ae40"), l = o("forEach"), d = s("forEach");
              i.exports = !l || !d ? function(p) {
                return u(this, p, arguments.length > 1 ? arguments[1] : void 0);
              } : [].forEach;
            }
          ),
          /***/
          "1be4": (
            /***/
            function(i, c, n) {
              var u = n("d066");
              i.exports = u("document", "documentElement");
            }
          ),
          /***/
          "1c0b": (
            /***/
            function(i, c) {
              i.exports = function(n) {
                if (typeof n != "function")
                  throw TypeError(String(n) + " is not a function");
                return n;
              };
            }
          ),
          /***/
          "1c7e": (
            /***/
            function(i, c, n) {
              var u = n("b622"), o = u("iterator"), s = !1;
              try {
                var l = 0, d = {
                  next: function() {
                    return { done: !!l++ };
                  },
                  return: function() {
                    s = !0;
                  }
                };
                d[o] = function() {
                  return this;
                }, Array.from(d, function() {
                  throw 2;
                });
              } catch {
              }
              i.exports = function(f, p) {
                if (!p && !s) return !1;
                var h = !1;
                try {
                  var v = {};
                  v[o] = function() {
                    return {
                      next: function() {
                        return { done: h = !0 };
                      }
                    };
                  }, f(v);
                } catch {
                }
                return h;
              };
            }
          ),
          /***/
          "1d80": (
            /***/
            function(i, c) {
              i.exports = function(n) {
                if (n == null) throw TypeError("Can't call method on " + n);
                return n;
              };
            }
          ),
          /***/
          "1dde": (
            /***/
            function(i, c, n) {
              var u = n("d039"), o = n("b622"), s = n("2d00"), l = o("species");
              i.exports = function(d) {
                return s >= 51 || !u(function() {
                  var f = [], p = f.constructor = {};
                  return p[l] = function() {
                    return { foo: 1 };
                  }, f[d](Boolean).foo !== 1;
                });
              };
            }
          ),
          /***/
          "23cb": (
            /***/
            function(i, c, n) {
              var u = n("a691"), o = Math.max, s = Math.min;
              i.exports = function(l, d) {
                var f = u(l);
                return f < 0 ? o(f + d, 0) : s(f, d);
              };
            }
          ),
          /***/
          "23e7": (
            /***/
            function(i, c, n) {
              var u = n("da84"), o = n("06cf").f, s = n("9112"), l = n("6eeb"), d = n("ce4e"), f = n("e893"), p = n("94ca");
              i.exports = function(h, v) {
                var m = h.target, g = h.global, y = h.stat, S, E, A, w, L, j;
                if (g ? E = u : y ? E = u[m] || d(m, {}) : E = (u[m] || {}).prototype, E) for (A in v) {
                  if (L = v[A], h.noTargetGet ? (j = o(E, A), w = j && j.value) : w = E[A], S = p(g ? A : m + (y ? "." : "#") + A, h.forced), !S && w !== void 0) {
                    if (typeof L == typeof w) continue;
                    f(L, w);
                  }
                  (h.sham || w && w.sham) && s(L, "sham", !0), l(E, A, L, h);
                }
              };
            }
          ),
          /***/
          "241c": (
            /***/
            function(i, c, n) {
              var u = n("ca84"), o = n("7839"), s = o.concat("length", "prototype");
              c.f = Object.getOwnPropertyNames || function(d) {
                return u(d, s);
              };
            }
          ),
          /***/
          "25f0": (
            /***/
            function(i, c, n) {
              var u = n("6eeb"), o = n("825a"), s = n("d039"), l = n("ad6d"), d = "toString", f = RegExp.prototype, p = f[d], h = s(function() {
                return p.call({ source: "a", flags: "b" }) != "/a/b";
              }), v = p.name != d;
              (h || v) && u(RegExp.prototype, d, function() {
                var g = o(this), y = String(g.source), S = g.flags, E = String(S === void 0 && g instanceof RegExp && !("flags" in f) ? l.call(g) : S);
                return "/" + y + "/" + E;
              }, { unsafe: !0 });
            }
          ),
          /***/
          "2ca0": (
            /***/
            function(i, c, n) {
              var u = n("23e7"), o = n("06cf").f, s = n("50c4"), l = n("5a34"), d = n("1d80"), f = n("ab13"), p = n("c430"), h = "".startsWith, v = Math.min, m = f("startsWith"), g = !p && !m && !!function() {
                var y = o(String.prototype, "startsWith");
                return y && !y.writable;
              }();
              u({ target: "String", proto: !0, forced: !g && !m }, {
                startsWith: function(S) {
                  var E = String(d(this));
                  l(S);
                  var A = s(v(arguments.length > 1 ? arguments[1] : void 0, E.length)), w = String(S);
                  return h ? h.call(E, w, A) : E.slice(A, A + w.length) === w;
                }
              });
            }
          ),
          /***/
          "2d00": (
            /***/
            function(i, c, n) {
              var u = n("da84"), o = n("342f"), s = u.process, l = s && s.versions, d = l && l.v8, f, p;
              d ? (f = d.split("."), p = f[0] + f[1]) : o && (f = o.match(/Edge\/(\d+)/), (!f || f[1] >= 74) && (f = o.match(/Chrome\/(\d+)/), f && (p = f[1]))), i.exports = p && +p;
            }
          ),
          /***/
          "342f": (
            /***/
            function(i, c, n) {
              var u = n("d066");
              i.exports = u("navigator", "userAgent") || "";
            }
          ),
          /***/
          "35a1": (
            /***/
            function(i, c, n) {
              var u = n("f5df"), o = n("3f8c"), s = n("b622"), l = s("iterator");
              i.exports = function(d) {
                if (d != null) return d[l] || d["@@iterator"] || o[u(d)];
              };
            }
          ),
          /***/
          "37e8": (
            /***/
            function(i, c, n) {
              var u = n("83ab"), o = n("9bf2"), s = n("825a"), l = n("df75");
              i.exports = u ? Object.defineProperties : function(f, p) {
                s(f);
                for (var h = l(p), v = h.length, m = 0, g; v > m; ) o.f(f, g = h[m++], p[g]);
                return f;
              };
            }
          ),
          /***/
          "3bbe": (
            /***/
            function(i, c, n) {
              var u = n("861d");
              i.exports = function(o) {
                if (!u(o) && o !== null)
                  throw TypeError("Can't set " + String(o) + " as a prototype");
                return o;
              };
            }
          ),
          /***/
          "3ca3": (
            /***/
            function(i, c, n) {
              var u = n("6547").charAt, o = n("69f3"), s = n("7dd0"), l = "String Iterator", d = o.set, f = o.getterFor(l);
              s(String, "String", function(p) {
                d(this, {
                  type: l,
                  string: String(p),
                  index: 0
                });
              }, function() {
                var h = f(this), v = h.string, m = h.index, g;
                return m >= v.length ? { value: void 0, done: !0 } : (g = u(v, m), h.index += g.length, { value: g, done: !1 });
              });
            }
          ),
          /***/
          "3f8c": (
            /***/
            function(i, c) {
              i.exports = {};
            }
          ),
          /***/
          4160: (
            /***/
            function(i, c, n) {
              var u = n("23e7"), o = n("17c2");
              u({ target: "Array", proto: !0, forced: [].forEach != o }, {
                forEach: o
              });
            }
          ),
          /***/
          "428f": (
            /***/
            function(i, c, n) {
              var u = n("da84");
              i.exports = u;
            }
          ),
          /***/
          "44ad": (
            /***/
            function(i, c, n) {
              var u = n("d039"), o = n("c6b6"), s = "".split;
              i.exports = u(function() {
                return !Object("z").propertyIsEnumerable(0);
              }) ? function(l) {
                return o(l) == "String" ? s.call(l, "") : Object(l);
              } : Object;
            }
          ),
          /***/
          "44d2": (
            /***/
            function(i, c, n) {
              var u = n("b622"), o = n("7c73"), s = n("9bf2"), l = u("unscopables"), d = Array.prototype;
              d[l] == null && s.f(d, l, {
                configurable: !0,
                value: o(null)
              }), i.exports = function(f) {
                d[l][f] = !0;
              };
            }
          ),
          /***/
          "44e7": (
            /***/
            function(i, c, n) {
              var u = n("861d"), o = n("c6b6"), s = n("b622"), l = s("match");
              i.exports = function(d) {
                var f;
                return u(d) && ((f = d[l]) !== void 0 ? !!f : o(d) == "RegExp");
              };
            }
          ),
          /***/
          4930: (
            /***/
            function(i, c, n) {
              var u = n("d039");
              i.exports = !!Object.getOwnPropertySymbols && !u(function() {
                return !String(Symbol());
              });
            }
          ),
          /***/
          "4d64": (
            /***/
            function(i, c, n) {
              var u = n("fc6a"), o = n("50c4"), s = n("23cb"), l = function(d) {
                return function(f, p, h) {
                  var v = u(f), m = o(v.length), g = s(h, m), y;
                  if (d && p != p) {
                    for (; m > g; )
                      if (y = v[g++], y != y) return !0;
                  } else for (; m > g; g++)
                    if ((d || g in v) && v[g] === p) return d || g || 0;
                  return !d && -1;
                };
              };
              i.exports = {
                // `Array.prototype.includes` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.includes
                includes: l(!0),
                // `Array.prototype.indexOf` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
                indexOf: l(!1)
              };
            }
          ),
          /***/
          "4de4": (
            /***/
            function(i, c, n) {
              var u = n("23e7"), o = n("b727").filter, s = n("1dde"), l = n("ae40"), d = s("filter"), f = l("filter");
              u({ target: "Array", proto: !0, forced: !d || !f }, {
                filter: function(h) {
                  return o(this, h, arguments.length > 1 ? arguments[1] : void 0);
                }
              });
            }
          ),
          /***/
          "4df4": (
            /***/
            function(i, c, n) {
              var u = n("0366"), o = n("7b0b"), s = n("9bdd"), l = n("e95a"), d = n("50c4"), f = n("8418"), p = n("35a1");
              i.exports = function(v) {
                var m = o(v), g = typeof this == "function" ? this : Array, y = arguments.length, S = y > 1 ? arguments[1] : void 0, E = S !== void 0, A = p(m), w = 0, L, j, U, N, $, H;
                if (E && (S = u(S, y > 2 ? arguments[2] : void 0, 2)), A != null && !(g == Array && l(A)))
                  for (N = A.call(m), $ = N.next, j = new g(); !(U = $.call(N)).done; w++)
                    H = E ? s(N, S, [U.value, w], !0) : U.value, f(j, w, H);
                else
                  for (L = d(m.length), j = new g(L); L > w; w++)
                    H = E ? S(m[w], w) : m[w], f(j, w, H);
                return j.length = w, j;
              };
            }
          ),
          /***/
          "4fad": (
            /***/
            function(i, c, n) {
              var u = n("23e7"), o = n("6f53").entries;
              u({ target: "Object", stat: !0 }, {
                entries: function(l) {
                  return o(l);
                }
              });
            }
          ),
          /***/
          "50c4": (
            /***/
            function(i, c, n) {
              var u = n("a691"), o = Math.min;
              i.exports = function(s) {
                return s > 0 ? o(u(s), 9007199254740991) : 0;
              };
            }
          ),
          /***/
          5135: (
            /***/
            function(i, c) {
              var n = {}.hasOwnProperty;
              i.exports = function(u, o) {
                return n.call(u, o);
              };
            }
          ),
          /***/
          5319: (
            /***/
            function(i, c, n) {
              var u = n("d784"), o = n("825a"), s = n("7b0b"), l = n("50c4"), d = n("a691"), f = n("1d80"), p = n("8aa5"), h = n("14c3"), v = Math.max, m = Math.min, g = Math.floor, y = /\$([$&'`]|\d\d?|<[^>]*>)/g, S = /\$([$&'`]|\d\d?)/g, E = function(A) {
                return A === void 0 ? A : String(A);
              };
              u("replace", 2, function(A, w, L, j) {
                var U = j.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE, N = j.REPLACE_KEEPS_$0, $ = U ? "$" : "$0";
                return [
                  // `String.prototype.replace` method
                  // https://tc39.github.io/ecma262/#sec-string.prototype.replace
                  function(z, Y) {
                    var W = f(this), re = z == null ? void 0 : z[A];
                    return re !== void 0 ? re.call(z, W, Y) : w.call(String(W), z, Y);
                  },
                  // `RegExp.prototype[@@replace]` method
                  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
                  function(k, z) {
                    if (!U && N || typeof z == "string" && z.indexOf($) === -1) {
                      var Y = L(w, k, this, z);
                      if (Y.done) return Y.value;
                    }
                    var W = o(k), re = String(this), X = typeof z == "function";
                    X || (z = String(z));
                    var he = W.global;
                    if (he) {
                      var fe = W.unicode;
                      W.lastIndex = 0;
                    }
                    for (var Te = []; ; ) {
                      var Re = h(W, re);
                      if (Re === null || (Te.push(Re), !he)) break;
                      var xe = String(Re[0]);
                      xe === "" && (W.lastIndex = p(re, l(W.lastIndex), fe));
                    }
                    for (var Ne = "", Ue = 0, Me = 0; Me < Te.length; Me++) {
                      Re = Te[Me];
                      for (var be = String(Re[0]), O = v(m(d(Re.index), re.length), 0), R = [], T = 1; T < Re.length; T++) R.push(E(Re[T]));
                      var D = Re.groups;
                      if (X) {
                        var b = [be].concat(R, O, re);
                        D !== void 0 && b.push(D);
                        var x = String(z.apply(void 0, b));
                      } else
                        x = H(be, re, O, R, D, z);
                      O >= Ue && (Ne += re.slice(Ue, O) + x, Ue = O + be.length);
                    }
                    return Ne + re.slice(Ue);
                  }
                ];
                function H(k, z, Y, W, re, X) {
                  var he = Y + k.length, fe = W.length, Te = S;
                  return re !== void 0 && (re = s(re), Te = y), w.call(X, Te, function(Re, xe) {
                    var Ne;
                    switch (xe.charAt(0)) {
                      case "$":
                        return "$";
                      case "&":
                        return k;
                      case "`":
                        return z.slice(0, Y);
                      case "'":
                        return z.slice(he);
                      case "<":
                        Ne = re[xe.slice(1, -1)];
                        break;
                      default:
                        var Ue = +xe;
                        if (Ue === 0) return Re;
                        if (Ue > fe) {
                          var Me = g(Ue / 10);
                          return Me === 0 ? Re : Me <= fe ? W[Me - 1] === void 0 ? xe.charAt(1) : W[Me - 1] + xe.charAt(1) : Re;
                        }
                        Ne = W[Ue - 1];
                    }
                    return Ne === void 0 ? "" : Ne;
                  });
                }
              });
            }
          ),
          /***/
          5692: (
            /***/
            function(i, c, n) {
              var u = n("c430"), o = n("c6cd");
              (i.exports = function(s, l) {
                return o[s] || (o[s] = l !== void 0 ? l : {});
              })("versions", []).push({
                version: "3.6.5",
                mode: u ? "pure" : "global",
                copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
              });
            }
          ),
          /***/
          "56ef": (
            /***/
            function(i, c, n) {
              var u = n("d066"), o = n("241c"), s = n("7418"), l = n("825a");
              i.exports = u("Reflect", "ownKeys") || function(f) {
                var p = o.f(l(f)), h = s.f;
                return h ? p.concat(h(f)) : p;
              };
            }
          ),
          /***/
          "5a34": (
            /***/
            function(i, c, n) {
              var u = n("44e7");
              i.exports = function(o) {
                if (u(o))
                  throw TypeError("The method doesn't accept regular expressions");
                return o;
              };
            }
          ),
          /***/
          "5c6c": (
            /***/
            function(i, c) {
              i.exports = function(n, u) {
                return {
                  enumerable: !(n & 1),
                  configurable: !(n & 2),
                  writable: !(n & 4),
                  value: u
                };
              };
            }
          ),
          /***/
          "5db7": (
            /***/
            function(i, c, n) {
              var u = n("23e7"), o = n("a2bf"), s = n("7b0b"), l = n("50c4"), d = n("1c0b"), f = n("65f0");
              u({ target: "Array", proto: !0 }, {
                flatMap: function(h) {
                  var v = s(this), m = l(v.length), g;
                  return d(h), g = f(v, 0), g.length = o(g, v, v, m, 0, 1, h, arguments.length > 1 ? arguments[1] : void 0), g;
                }
              });
            }
          ),
          /***/
          6547: (
            /***/
            function(i, c, n) {
              var u = n("a691"), o = n("1d80"), s = function(l) {
                return function(d, f) {
                  var p = String(o(d)), h = u(f), v = p.length, m, g;
                  return h < 0 || h >= v ? l ? "" : void 0 : (m = p.charCodeAt(h), m < 55296 || m > 56319 || h + 1 === v || (g = p.charCodeAt(h + 1)) < 56320 || g > 57343 ? l ? p.charAt(h) : m : l ? p.slice(h, h + 2) : (m - 55296 << 10) + (g - 56320) + 65536);
                };
              };
              i.exports = {
                // `String.prototype.codePointAt` method
                // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
                codeAt: s(!1),
                // `String.prototype.at` method
                // https://github.com/mathiasbynens/String.prototype.at
                charAt: s(!0)
              };
            }
          ),
          /***/
          "65f0": (
            /***/
            function(i, c, n) {
              var u = n("861d"), o = n("e8b5"), s = n("b622"), l = s("species");
              i.exports = function(d, f) {
                var p;
                return o(d) && (p = d.constructor, typeof p == "function" && (p === Array || o(p.prototype)) ? p = void 0 : u(p) && (p = p[l], p === null && (p = void 0))), new (p === void 0 ? Array : p)(f === 0 ? 0 : f);
              };
            }
          ),
          /***/
          "69f3": (
            /***/
            function(i, c, n) {
              var u = n("7f9a"), o = n("da84"), s = n("861d"), l = n("9112"), d = n("5135"), f = n("f772"), p = n("d012"), h = o.WeakMap, v, m, g, y = function(U) {
                return g(U) ? m(U) : v(U, {});
              }, S = function(U) {
                return function(N) {
                  var $;
                  if (!s(N) || ($ = m(N)).type !== U)
                    throw TypeError("Incompatible receiver, " + U + " required");
                  return $;
                };
              };
              if (u) {
                var E = new h(), A = E.get, w = E.has, L = E.set;
                v = function(U, N) {
                  return L.call(E, U, N), N;
                }, m = function(U) {
                  return A.call(E, U) || {};
                }, g = function(U) {
                  return w.call(E, U);
                };
              } else {
                var j = f("state");
                p[j] = !0, v = function(U, N) {
                  return l(U, j, N), N;
                }, m = function(U) {
                  return d(U, j) ? U[j] : {};
                }, g = function(U) {
                  return d(U, j);
                };
              }
              i.exports = {
                set: v,
                get: m,
                has: g,
                enforce: y,
                getterFor: S
              };
            }
          ),
          /***/
          "6eeb": (
            /***/
            function(i, c, n) {
              var u = n("da84"), o = n("9112"), s = n("5135"), l = n("ce4e"), d = n("8925"), f = n("69f3"), p = f.get, h = f.enforce, v = String(String).split("String");
              (i.exports = function(m, g, y, S) {
                var E = S ? !!S.unsafe : !1, A = S ? !!S.enumerable : !1, w = S ? !!S.noTargetGet : !1;
                if (typeof y == "function" && (typeof g == "string" && !s(y, "name") && o(y, "name", g), h(y).source = v.join(typeof g == "string" ? g : "")), m === u) {
                  A ? m[g] = y : l(g, y);
                  return;
                } else E ? !w && m[g] && (A = !0) : delete m[g];
                A ? m[g] = y : o(m, g, y);
              })(Function.prototype, "toString", function() {
                return typeof this == "function" && p(this).source || d(this);
              });
            }
          ),
          /***/
          "6f53": (
            /***/
            function(i, c, n) {
              var u = n("83ab"), o = n("df75"), s = n("fc6a"), l = n("d1e7").f, d = function(f) {
                return function(p) {
                  for (var h = s(p), v = o(h), m = v.length, g = 0, y = [], S; m > g; )
                    S = v[g++], (!u || l.call(h, S)) && y.push(f ? [S, h[S]] : h[S]);
                  return y;
                };
              };
              i.exports = {
                // `Object.entries` method
                // https://tc39.github.io/ecma262/#sec-object.entries
                entries: d(!0),
                // `Object.values` method
                // https://tc39.github.io/ecma262/#sec-object.values
                values: d(!1)
              };
            }
          ),
          /***/
          "73d9": (
            /***/
            function(i, c, n) {
              var u = n("44d2");
              u("flatMap");
            }
          ),
          /***/
          7418: (
            /***/
            function(i, c) {
              c.f = Object.getOwnPropertySymbols;
            }
          ),
          /***/
          "746f": (
            /***/
            function(i, c, n) {
              var u = n("428f"), o = n("5135"), s = n("e538"), l = n("9bf2").f;
              i.exports = function(d) {
                var f = u.Symbol || (u.Symbol = {});
                o(f, d) || l(f, d, {
                  value: s.f(d)
                });
              };
            }
          ),
          /***/
          7839: (
            /***/
            function(i, c) {
              i.exports = [
                "constructor",
                "hasOwnProperty",
                "isPrototypeOf",
                "propertyIsEnumerable",
                "toLocaleString",
                "toString",
                "valueOf"
              ];
            }
          ),
          /***/
          "7b0b": (
            /***/
            function(i, c, n) {
              var u = n("1d80");
              i.exports = function(o) {
                return Object(u(o));
              };
            }
          ),
          /***/
          "7c73": (
            /***/
            function(i, c, n) {
              var u = n("825a"), o = n("37e8"), s = n("7839"), l = n("d012"), d = n("1be4"), f = n("cc12"), p = n("f772"), h = ">", v = "<", m = "prototype", g = "script", y = p("IE_PROTO"), S = function() {
              }, E = function(U) {
                return v + g + h + U + v + "/" + g + h;
              }, A = function(U) {
                U.write(E("")), U.close();
                var N = U.parentWindow.Object;
                return U = null, N;
              }, w = function() {
                var U = f("iframe"), N = "java" + g + ":", $;
                return U.style.display = "none", d.appendChild(U), U.src = String(N), $ = U.contentWindow.document, $.open(), $.write(E("document.F=Object")), $.close(), $.F;
              }, L, j = function() {
                try {
                  L = document.domain && new ActiveXObject("htmlfile");
                } catch {
                }
                j = L ? A(L) : w();
                for (var U = s.length; U--; ) delete j[m][s[U]];
                return j();
              };
              l[y] = !0, i.exports = Object.create || function(N, $) {
                var H;
                return N !== null ? (S[m] = u(N), H = new S(), S[m] = null, H[y] = N) : H = j(), $ === void 0 ? H : o(H, $);
              };
            }
          ),
          /***/
          "7dd0": (
            /***/
            function(i, c, n) {
              var u = n("23e7"), o = n("9ed3"), s = n("e163"), l = n("d2bb"), d = n("d44e"), f = n("9112"), p = n("6eeb"), h = n("b622"), v = n("c430"), m = n("3f8c"), g = n("ae93"), y = g.IteratorPrototype, S = g.BUGGY_SAFARI_ITERATORS, E = h("iterator"), A = "keys", w = "values", L = "entries", j = function() {
                return this;
              };
              i.exports = function(U, N, $, H, k, z, Y) {
                o($, N, H);
                var W = function(Me) {
                  if (Me === k && Te) return Te;
                  if (!S && Me in he) return he[Me];
                  switch (Me) {
                    case A:
                      return function() {
                        return new $(this, Me);
                      };
                    case w:
                      return function() {
                        return new $(this, Me);
                      };
                    case L:
                      return function() {
                        return new $(this, Me);
                      };
                  }
                  return function() {
                    return new $(this);
                  };
                }, re = N + " Iterator", X = !1, he = U.prototype, fe = he[E] || he["@@iterator"] || k && he[k], Te = !S && fe || W(k), Re = N == "Array" && he.entries || fe, xe, Ne, Ue;
                if (Re && (xe = s(Re.call(new U())), y !== Object.prototype && xe.next && (!v && s(xe) !== y && (l ? l(xe, y) : typeof xe[E] != "function" && f(xe, E, j)), d(xe, re, !0, !0), v && (m[re] = j))), k == w && fe && fe.name !== w && (X = !0, Te = function() {
                  return fe.call(this);
                }), (!v || Y) && he[E] !== Te && f(he, E, Te), m[N] = Te, k)
                  if (Ne = {
                    values: W(w),
                    keys: z ? Te : W(A),
                    entries: W(L)
                  }, Y) for (Ue in Ne)
                    (S || X || !(Ue in he)) && p(he, Ue, Ne[Ue]);
                  else u({ target: N, proto: !0, forced: S || X }, Ne);
                return Ne;
              };
            }
          ),
          /***/
          "7f9a": (
            /***/
            function(i, c, n) {
              var u = n("da84"), o = n("8925"), s = u.WeakMap;
              i.exports = typeof s == "function" && /native code/.test(o(s));
            }
          ),
          /***/
          "825a": (
            /***/
            function(i, c, n) {
              var u = n("861d");
              i.exports = function(o) {
                if (!u(o))
                  throw TypeError(String(o) + " is not an object");
                return o;
              };
            }
          ),
          /***/
          "83ab": (
            /***/
            function(i, c, n) {
              var u = n("d039");
              i.exports = !u(function() {
                return Object.defineProperty({}, 1, { get: function() {
                  return 7;
                } })[1] != 7;
              });
            }
          ),
          /***/
          8418: (
            /***/
            function(i, c, n) {
              var u = n("c04e"), o = n("9bf2"), s = n("5c6c");
              i.exports = function(l, d, f) {
                var p = u(d);
                p in l ? o.f(l, p, s(0, f)) : l[p] = f;
              };
            }
          ),
          /***/
          "861d": (
            /***/
            function(i, c) {
              i.exports = function(n) {
                return typeof n == "object" ? n !== null : typeof n == "function";
              };
            }
          ),
          /***/
          8875: (
            /***/
            function(i, c, n) {
              var u, o, s;
              (function(l, d) {
                o = [], u = d, s = typeof u == "function" ? u.apply(c, o) : u, s !== void 0 && (i.exports = s);
              })(typeof self < "u" ? self : this, function() {
                function l() {
                  var d = Object.getOwnPropertyDescriptor(document, "currentScript");
                  if (!d && "currentScript" in document && document.currentScript || d && d.get !== l && document.currentScript)
                    return document.currentScript;
                  try {
                    throw new Error();
                  } catch (L) {
                    var f = /.*at [^(]*\((.*):(.+):(.+)\)$/ig, p = /@([^@]*):(\d+):(\d+)\s*$/ig, h = f.exec(L.stack) || p.exec(L.stack), v = h && h[1] || !1, m = h && h[2] || !1, g = document.location.href.replace(document.location.hash, ""), y, S, E, A = document.getElementsByTagName("script");
                    v === g && (y = document.documentElement.outerHTML, S = new RegExp("(?:[^\\n]+?\\n){0," + (m - 2) + "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*", "i"), E = y.replace(S, "$1").trim());
                    for (var w = 0; w < A.length; w++)
                      if (A[w].readyState === "interactive" || A[w].src === v || v === g && A[w].innerHTML && A[w].innerHTML.trim() === E)
                        return A[w];
                    return null;
                  }
                }
                return l;
              });
            }
          ),
          /***/
          8925: (
            /***/
            function(i, c, n) {
              var u = n("c6cd"), o = Function.toString;
              typeof u.inspectSource != "function" && (u.inspectSource = function(s) {
                return o.call(s);
              }), i.exports = u.inspectSource;
            }
          ),
          /***/
          "8aa5": (
            /***/
            function(i, c, n) {
              var u = n("6547").charAt;
              i.exports = function(o, s, l) {
                return s + (l ? u(o, s).length : 1);
              };
            }
          ),
          /***/
          "8bbf": (
            /***/
            function(i, c) {
              i.exports = r;
            }
          ),
          /***/
          "90e3": (
            /***/
            function(i, c) {
              var n = 0, u = Math.random();
              i.exports = function(o) {
                return "Symbol(" + String(o === void 0 ? "" : o) + ")_" + (++n + u).toString(36);
              };
            }
          ),
          /***/
          9112: (
            /***/
            function(i, c, n) {
              var u = n("83ab"), o = n("9bf2"), s = n("5c6c");
              i.exports = u ? function(l, d, f) {
                return o.f(l, d, s(1, f));
              } : function(l, d, f) {
                return l[d] = f, l;
              };
            }
          ),
          /***/
          9263: (
            /***/
            function(i, c, n) {
              var u = n("ad6d"), o = n("9f7f"), s = RegExp.prototype.exec, l = String.prototype.replace, d = s, f = function() {
                var m = /a/, g = /b*/g;
                return s.call(m, "a"), s.call(g, "a"), m.lastIndex !== 0 || g.lastIndex !== 0;
              }(), p = o.UNSUPPORTED_Y || o.BROKEN_CARET, h = /()??/.exec("")[1] !== void 0, v = f || h || p;
              v && (d = function(g) {
                var y = this, S, E, A, w, L = p && y.sticky, j = u.call(y), U = y.source, N = 0, $ = g;
                return L && (j = j.replace("y", ""), j.indexOf("g") === -1 && (j += "g"), $ = String(g).slice(y.lastIndex), y.lastIndex > 0 && (!y.multiline || y.multiline && g[y.lastIndex - 1] !== `
`) && (U = "(?: " + U + ")", $ = " " + $, N++), E = new RegExp("^(?:" + U + ")", j)), h && (E = new RegExp("^" + U + "$(?!\\s)", j)), f && (S = y.lastIndex), A = s.call(L ? E : y, $), L ? A ? (A.input = A.input.slice(N), A[0] = A[0].slice(N), A.index = y.lastIndex, y.lastIndex += A[0].length) : y.lastIndex = 0 : f && A && (y.lastIndex = y.global ? A.index + A[0].length : S), h && A && A.length > 1 && l.call(A[0], E, function() {
                  for (w = 1; w < arguments.length - 2; w++)
                    arguments[w] === void 0 && (A[w] = void 0);
                }), A;
              }), i.exports = d;
            }
          ),
          /***/
          "94ca": (
            /***/
            function(i, c, n) {
              var u = n("d039"), o = /#|\.prototype\./, s = function(h, v) {
                var m = d[l(h)];
                return m == p ? !0 : m == f ? !1 : typeof v == "function" ? u(v) : !!v;
              }, l = s.normalize = function(h) {
                return String(h).replace(o, ".").toLowerCase();
              }, d = s.data = {}, f = s.NATIVE = "N", p = s.POLYFILL = "P";
              i.exports = s;
            }
          ),
          /***/
          "99af": (
            /***/
            function(i, c, n) {
              var u = n("23e7"), o = n("d039"), s = n("e8b5"), l = n("861d"), d = n("7b0b"), f = n("50c4"), p = n("8418"), h = n("65f0"), v = n("1dde"), m = n("b622"), g = n("2d00"), y = m("isConcatSpreadable"), S = 9007199254740991, E = "Maximum allowed index exceeded", A = g >= 51 || !o(function() {
                var U = [];
                return U[y] = !1, U.concat()[0] !== U;
              }), w = v("concat"), L = function(U) {
                if (!l(U)) return !1;
                var N = U[y];
                return N !== void 0 ? !!N : s(U);
              }, j = !A || !w;
              u({ target: "Array", proto: !0, forced: j }, {
                concat: function(N) {
                  var $ = d(this), H = h($, 0), k = 0, z, Y, W, re, X;
                  for (z = -1, W = arguments.length; z < W; z++)
                    if (X = z === -1 ? $ : arguments[z], L(X)) {
                      if (re = f(X.length), k + re > S) throw TypeError(E);
                      for (Y = 0; Y < re; Y++, k++) Y in X && p(H, k, X[Y]);
                    } else {
                      if (k >= S) throw TypeError(E);
                      p(H, k++, X);
                    }
                  return H.length = k, H;
                }
              });
            }
          ),
          /***/
          "9bdd": (
            /***/
            function(i, c, n) {
              var u = n("825a");
              i.exports = function(o, s, l, d) {
                try {
                  return d ? s(u(l)[0], l[1]) : s(l);
                } catch (p) {
                  var f = o.return;
                  throw f !== void 0 && u(f.call(o)), p;
                }
              };
            }
          ),
          /***/
          "9bf2": (
            /***/
            function(i, c, n) {
              var u = n("83ab"), o = n("0cfb"), s = n("825a"), l = n("c04e"), d = Object.defineProperty;
              c.f = u ? d : function(p, h, v) {
                if (s(p), h = l(h, !0), s(v), o) try {
                  return d(p, h, v);
                } catch {
                }
                if ("get" in v || "set" in v) throw TypeError("Accessors not supported");
                return "value" in v && (p[h] = v.value), p;
              };
            }
          ),
          /***/
          "9ed3": (
            /***/
            function(i, c, n) {
              var u = n("ae93").IteratorPrototype, o = n("7c73"), s = n("5c6c"), l = n("d44e"), d = n("3f8c"), f = function() {
                return this;
              };
              i.exports = function(p, h, v) {
                var m = h + " Iterator";
                return p.prototype = o(u, { next: s(1, v) }), l(p, m, !1, !0), d[m] = f, p;
              };
            }
          ),
          /***/
          "9f7f": (
            /***/
            function(i, c, n) {
              var u = n("d039");
              function o(s, l) {
                return RegExp(s, l);
              }
              c.UNSUPPORTED_Y = u(function() {
                var s = o("a", "y");
                return s.lastIndex = 2, s.exec("abcd") != null;
              }), c.BROKEN_CARET = u(function() {
                var s = o("^r", "gy");
                return s.lastIndex = 2, s.exec("str") != null;
              });
            }
          ),
          /***/
          a2bf: (
            /***/
            function(i, c, n) {
              var u = n("e8b5"), o = n("50c4"), s = n("0366"), l = function(d, f, p, h, v, m, g, y) {
                for (var S = v, E = 0, A = g ? s(g, y, 3) : !1, w; E < h; ) {
                  if (E in p) {
                    if (w = A ? A(p[E], E, f) : p[E], m > 0 && u(w))
                      S = l(d, f, w, o(w.length), S, m - 1) - 1;
                    else {
                      if (S >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
                      d[S] = w;
                    }
                    S++;
                  }
                  E++;
                }
                return S;
              };
              i.exports = l;
            }
          ),
          /***/
          a352: (
            /***/
            function(i, c) {
              i.exports = a;
            }
          ),
          /***/
          a434: (
            /***/
            function(i, c, n) {
              var u = n("23e7"), o = n("23cb"), s = n("a691"), l = n("50c4"), d = n("7b0b"), f = n("65f0"), p = n("8418"), h = n("1dde"), v = n("ae40"), m = h("splice"), g = v("splice", { ACCESSORS: !0, 0: 0, 1: 2 }), y = Math.max, S = Math.min, E = 9007199254740991, A = "Maximum allowed length exceeded";
              u({ target: "Array", proto: !0, forced: !m || !g }, {
                splice: function(L, j) {
                  var U = d(this), N = l(U.length), $ = o(L, N), H = arguments.length, k, z, Y, W, re, X;
                  if (H === 0 ? k = z = 0 : H === 1 ? (k = 0, z = N - $) : (k = H - 2, z = S(y(s(j), 0), N - $)), N + k - z > E)
                    throw TypeError(A);
                  for (Y = f(U, z), W = 0; W < z; W++)
                    re = $ + W, re in U && p(Y, W, U[re]);
                  if (Y.length = z, k < z) {
                    for (W = $; W < N - z; W++)
                      re = W + z, X = W + k, re in U ? U[X] = U[re] : delete U[X];
                    for (W = N; W > N - z + k; W--) delete U[W - 1];
                  } else if (k > z)
                    for (W = N - z; W > $; W--)
                      re = W + z - 1, X = W + k - 1, re in U ? U[X] = U[re] : delete U[X];
                  for (W = 0; W < k; W++)
                    U[W + $] = arguments[W + 2];
                  return U.length = N - z + k, Y;
                }
              });
            }
          ),
          /***/
          a4d3: (
            /***/
            function(i, c, n) {
              var u = n("23e7"), o = n("da84"), s = n("d066"), l = n("c430"), d = n("83ab"), f = n("4930"), p = n("fdbf"), h = n("d039"), v = n("5135"), m = n("e8b5"), g = n("861d"), y = n("825a"), S = n("7b0b"), E = n("fc6a"), A = n("c04e"), w = n("5c6c"), L = n("7c73"), j = n("df75"), U = n("241c"), N = n("057f"), $ = n("7418"), H = n("06cf"), k = n("9bf2"), z = n("d1e7"), Y = n("9112"), W = n("6eeb"), re = n("5692"), X = n("f772"), he = n("d012"), fe = n("90e3"), Te = n("b622"), Re = n("e538"), xe = n("746f"), Ne = n("d44e"), Ue = n("69f3"), Me = n("b727").forEach, be = X("hidden"), O = "Symbol", R = "prototype", T = Te("toPrimitive"), D = Ue.set, b = Ue.getterFor(O), x = Object[R], P = o.Symbol, M = s("JSON", "stringify"), B = H.f, V = k.f, Q = N.f, Z = z.f, J = re("symbols"), q = re("op-symbols"), te = re("string-to-symbol-registry"), ie = re("symbol-to-string-registry"), ge = re("wks"), Ce = o.QObject, Ke = !Ce || !Ce[R] || !Ce[R].findChild, qe = d && h(function() {
                return L(V({}, "a", {
                  get: function() {
                    return V(this, "a", { value: 7 }).a;
                  }
                })).a != 7;
              }) ? function(Oe, we, Ie) {
                var $e = B(x, we);
                $e && delete x[we], V(Oe, we, Ie), $e && Oe !== x && V(x, we, $e);
              } : V, Ze = function(Oe, we) {
                var Ie = J[Oe] = L(P[R]);
                return D(Ie, {
                  type: O,
                  tag: Oe,
                  description: we
                }), d || (Ie.description = we), Ie;
              }, G = p ? function(Oe) {
                return typeof Oe == "symbol";
              } : function(Oe) {
                return Object(Oe) instanceof P;
              }, K = function(we, Ie, $e) {
                we === x && K(q, Ie, $e), y(we);
                var je = A(Ie, !0);
                return y($e), v(J, je) ? ($e.enumerable ? (v(we, be) && we[be][je] && (we[be][je] = !1), $e = L($e, { enumerable: w(0, !1) })) : (v(we, be) || V(we, be, w(1, {})), we[be][je] = !0), qe(we, je, $e)) : V(we, je, $e);
              }, ee = function(we, Ie) {
                y(we);
                var $e = E(Ie), je = j($e).concat(Ee($e));
                return Me(je, function(tt) {
                  (!d || Se.call($e, tt)) && K(we, tt, $e[tt]);
                }), we;
              }, ce = function(we, Ie) {
                return Ie === void 0 ? L(we) : ee(L(we), Ie);
              }, Se = function(we) {
                var Ie = A(we, !0), $e = Z.call(this, Ie);
                return this === x && v(J, Ie) && !v(q, Ie) ? !1 : $e || !v(this, Ie) || !v(J, Ie) || v(this, be) && this[be][Ie] ? $e : !0;
              }, Fe = function(we, Ie) {
                var $e = E(we), je = A(Ie, !0);
                if (!($e === x && v(J, je) && !v(q, je))) {
                  var tt = B($e, je);
                  return tt && v(J, je) && !(v($e, be) && $e[be][je]) && (tt.enumerable = !0), tt;
                }
              }, Ae = function(we) {
                var Ie = Q(E(we)), $e = [];
                return Me(Ie, function(je) {
                  !v(J, je) && !v(he, je) && $e.push(je);
                }), $e;
              }, Ee = function(we) {
                var Ie = we === x, $e = Q(Ie ? q : E(we)), je = [];
                return Me($e, function(tt) {
                  v(J, tt) && (!Ie || v(x, tt)) && je.push(J[tt]);
                }), je;
              };
              if (f || (P = function() {
                if (this instanceof P) throw TypeError("Symbol is not a constructor");
                var we = !arguments.length || arguments[0] === void 0 ? void 0 : String(arguments[0]), Ie = fe(we), $e = function(je) {
                  this === x && $e.call(q, je), v(this, be) && v(this[be], Ie) && (this[be][Ie] = !1), qe(this, Ie, w(1, je));
                };
                return d && Ke && qe(x, Ie, { configurable: !0, set: $e }), Ze(Ie, we);
              }, W(P[R], "toString", function() {
                return b(this).tag;
              }), W(P, "withoutSetter", function(Oe) {
                return Ze(fe(Oe), Oe);
              }), z.f = Se, k.f = K, H.f = Fe, U.f = N.f = Ae, $.f = Ee, Re.f = function(Oe) {
                return Ze(Te(Oe), Oe);
              }, d && (V(P[R], "description", {
                configurable: !0,
                get: function() {
                  return b(this).description;
                }
              }), l || W(x, "propertyIsEnumerable", Se, { unsafe: !0 }))), u({ global: !0, wrap: !0, forced: !f, sham: !f }, {
                Symbol: P
              }), Me(j(ge), function(Oe) {
                xe(Oe);
              }), u({ target: O, stat: !0, forced: !f }, {
                // `Symbol.for` method
                // https://tc39.github.io/ecma262/#sec-symbol.for
                for: function(Oe) {
                  var we = String(Oe);
                  if (v(te, we)) return te[we];
                  var Ie = P(we);
                  return te[we] = Ie, ie[Ie] = we, Ie;
                },
                // `Symbol.keyFor` method
                // https://tc39.github.io/ecma262/#sec-symbol.keyfor
                keyFor: function(we) {
                  if (!G(we)) throw TypeError(we + " is not a symbol");
                  if (v(ie, we)) return ie[we];
                },
                useSetter: function() {
                  Ke = !0;
                },
                useSimple: function() {
                  Ke = !1;
                }
              }), u({ target: "Object", stat: !0, forced: !f, sham: !d }, {
                // `Object.create` method
                // https://tc39.github.io/ecma262/#sec-object.create
                create: ce,
                // `Object.defineProperty` method
                // https://tc39.github.io/ecma262/#sec-object.defineproperty
                defineProperty: K,
                // `Object.defineProperties` method
                // https://tc39.github.io/ecma262/#sec-object.defineproperties
                defineProperties: ee,
                // `Object.getOwnPropertyDescriptor` method
                // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
                getOwnPropertyDescriptor: Fe
              }), u({ target: "Object", stat: !0, forced: !f }, {
                // `Object.getOwnPropertyNames` method
                // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
                getOwnPropertyNames: Ae,
                // `Object.getOwnPropertySymbols` method
                // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
                getOwnPropertySymbols: Ee
              }), u({ target: "Object", stat: !0, forced: h(function() {
                $.f(1);
              }) }, {
                getOwnPropertySymbols: function(we) {
                  return $.f(S(we));
                }
              }), M) {
                var Ve = !f || h(function() {
                  var Oe = P();
                  return M([Oe]) != "[null]" || M({ a: Oe }) != "{}" || M(Object(Oe)) != "{}";
                });
                u({ target: "JSON", stat: !0, forced: Ve }, {
                  // eslint-disable-next-line no-unused-vars
                  stringify: function(we, Ie, $e) {
                    for (var je = [we], tt = 1, zt; arguments.length > tt; ) je.push(arguments[tt++]);
                    if (zt = Ie, !(!g(Ie) && we === void 0 || G(we)))
                      return m(Ie) || (Ie = function(Fn, Bt) {
                        if (typeof zt == "function" && (Bt = zt.call(this, Fn, Bt)), !G(Bt)) return Bt;
                      }), je[1] = Ie, M.apply(null, je);
                  }
                });
              }
              P[R][T] || Y(P[R], T, P[R].valueOf), Ne(P, O), he[be] = !0;
            }
          ),
          /***/
          a630: (
            /***/
            function(i, c, n) {
              var u = n("23e7"), o = n("4df4"), s = n("1c7e"), l = !s(function(d) {
                Array.from(d);
              });
              u({ target: "Array", stat: !0, forced: l }, {
                from: o
              });
            }
          ),
          /***/
          a640: (
            /***/
            function(i, c, n) {
              var u = n("d039");
              i.exports = function(o, s) {
                var l = [][o];
                return !!l && u(function() {
                  l.call(null, s || function() {
                    throw 1;
                  }, 1);
                });
              };
            }
          ),
          /***/
          a691: (
            /***/
            function(i, c) {
              var n = Math.ceil, u = Math.floor;
              i.exports = function(o) {
                return isNaN(o = +o) ? 0 : (o > 0 ? u : n)(o);
              };
            }
          ),
          /***/
          ab13: (
            /***/
            function(i, c, n) {
              var u = n("b622"), o = u("match");
              i.exports = function(s) {
                var l = /./;
                try {
                  "/./"[s](l);
                } catch {
                  try {
                    return l[o] = !1, "/./"[s](l);
                  } catch {
                  }
                }
                return !1;
              };
            }
          ),
          /***/
          ac1f: (
            /***/
            function(i, c, n) {
              var u = n("23e7"), o = n("9263");
              u({ target: "RegExp", proto: !0, forced: /./.exec !== o }, {
                exec: o
              });
            }
          ),
          /***/
          ad6d: (
            /***/
            function(i, c, n) {
              var u = n("825a");
              i.exports = function() {
                var o = u(this), s = "";
                return o.global && (s += "g"), o.ignoreCase && (s += "i"), o.multiline && (s += "m"), o.dotAll && (s += "s"), o.unicode && (s += "u"), o.sticky && (s += "y"), s;
              };
            }
          ),
          /***/
          ae40: (
            /***/
            function(i, c, n) {
              var u = n("83ab"), o = n("d039"), s = n("5135"), l = Object.defineProperty, d = {}, f = function(p) {
                throw p;
              };
              i.exports = function(p, h) {
                if (s(d, p)) return d[p];
                h || (h = {});
                var v = [][p], m = s(h, "ACCESSORS") ? h.ACCESSORS : !1, g = s(h, 0) ? h[0] : f, y = s(h, 1) ? h[1] : void 0;
                return d[p] = !!v && !o(function() {
                  if (m && !u) return !0;
                  var S = { length: -1 };
                  m ? l(S, 1, { enumerable: !0, get: f }) : S[1] = 1, v.call(S, g, y);
                });
              };
            }
          ),
          /***/
          ae93: (
            /***/
            function(i, c, n) {
              var u = n("e163"), o = n("9112"), s = n("5135"), l = n("b622"), d = n("c430"), f = l("iterator"), p = !1, h = function() {
                return this;
              }, v, m, g;
              [].keys && (g = [].keys(), "next" in g ? (m = u(u(g)), m !== Object.prototype && (v = m)) : p = !0), v == null && (v = {}), !d && !s(v, f) && o(v, f, h), i.exports = {
                IteratorPrototype: v,
                BUGGY_SAFARI_ITERATORS: p
              };
            }
          ),
          /***/
          b041: (
            /***/
            function(i, c, n) {
              var u = n("00ee"), o = n("f5df");
              i.exports = u ? {}.toString : function() {
                return "[object " + o(this) + "]";
              };
            }
          ),
          /***/
          b0c0: (
            /***/
            function(i, c, n) {
              var u = n("83ab"), o = n("9bf2").f, s = Function.prototype, l = s.toString, d = /^\s*function ([^ (]*)/, f = "name";
              u && !(f in s) && o(s, f, {
                configurable: !0,
                get: function() {
                  try {
                    return l.call(this).match(d)[1];
                  } catch {
                    return "";
                  }
                }
              });
            }
          ),
          /***/
          b622: (
            /***/
            function(i, c, n) {
              var u = n("da84"), o = n("5692"), s = n("5135"), l = n("90e3"), d = n("4930"), f = n("fdbf"), p = o("wks"), h = u.Symbol, v = f ? h : h && h.withoutSetter || l;
              i.exports = function(m) {
                return s(p, m) || (d && s(h, m) ? p[m] = h[m] : p[m] = v("Symbol." + m)), p[m];
              };
            }
          ),
          /***/
          b64b: (
            /***/
            function(i, c, n) {
              var u = n("23e7"), o = n("7b0b"), s = n("df75"), l = n("d039"), d = l(function() {
                s(1);
              });
              u({ target: "Object", stat: !0, forced: d }, {
                keys: function(p) {
                  return s(o(p));
                }
              });
            }
          ),
          /***/
          b727: (
            /***/
            function(i, c, n) {
              var u = n("0366"), o = n("44ad"), s = n("7b0b"), l = n("50c4"), d = n("65f0"), f = [].push, p = function(h) {
                var v = h == 1, m = h == 2, g = h == 3, y = h == 4, S = h == 6, E = h == 5 || S;
                return function(A, w, L, j) {
                  for (var U = s(A), N = o(U), $ = u(w, L, 3), H = l(N.length), k = 0, z = j || d, Y = v ? z(A, H) : m ? z(A, 0) : void 0, W, re; H > k; k++) if ((E || k in N) && (W = N[k], re = $(W, k, U), h)) {
                    if (v) Y[k] = re;
                    else if (re) switch (h) {
                      case 3:
                        return !0;
                      // some
                      case 5:
                        return W;
                      // find
                      case 6:
                        return k;
                      // findIndex
                      case 2:
                        f.call(Y, W);
                    }
                    else if (y) return !1;
                  }
                  return S ? -1 : g || y ? y : Y;
                };
              };
              i.exports = {
                // `Array.prototype.forEach` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
                forEach: p(0),
                // `Array.prototype.map` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.map
                map: p(1),
                // `Array.prototype.filter` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.filter
                filter: p(2),
                // `Array.prototype.some` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.some
                some: p(3),
                // `Array.prototype.every` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.every
                every: p(4),
                // `Array.prototype.find` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.find
                find: p(5),
                // `Array.prototype.findIndex` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
                findIndex: p(6)
              };
            }
          ),
          /***/
          c04e: (
            /***/
            function(i, c, n) {
              var u = n("861d");
              i.exports = function(o, s) {
                if (!u(o)) return o;
                var l, d;
                if (s && typeof (l = o.toString) == "function" && !u(d = l.call(o)) || typeof (l = o.valueOf) == "function" && !u(d = l.call(o)) || !s && typeof (l = o.toString) == "function" && !u(d = l.call(o))) return d;
                throw TypeError("Can't convert object to primitive value");
              };
            }
          ),
          /***/
          c430: (
            /***/
            function(i, c) {
              i.exports = !1;
            }
          ),
          /***/
          c6b6: (
            /***/
            function(i, c) {
              var n = {}.toString;
              i.exports = function(u) {
                return n.call(u).slice(8, -1);
              };
            }
          ),
          /***/
          c6cd: (
            /***/
            function(i, c, n) {
              var u = n("da84"), o = n("ce4e"), s = "__core-js_shared__", l = u[s] || o(s, {});
              i.exports = l;
            }
          ),
          /***/
          c740: (
            /***/
            function(i, c, n) {
              var u = n("23e7"), o = n("b727").findIndex, s = n("44d2"), l = n("ae40"), d = "findIndex", f = !0, p = l(d);
              d in [] && Array(1)[d](function() {
                f = !1;
              }), u({ target: "Array", proto: !0, forced: f || !p }, {
                findIndex: function(v) {
                  return o(this, v, arguments.length > 1 ? arguments[1] : void 0);
                }
              }), s(d);
            }
          ),
          /***/
          c8ba: (
            /***/
            function(i, c) {
              var n;
              n = /* @__PURE__ */ function() {
                return this;
              }();
              try {
                n = n || new Function("return this")();
              } catch {
                typeof window == "object" && (n = window);
              }
              i.exports = n;
            }
          ),
          /***/
          c975: (
            /***/
            function(i, c, n) {
              var u = n("23e7"), o = n("4d64").indexOf, s = n("a640"), l = n("ae40"), d = [].indexOf, f = !!d && 1 / [1].indexOf(1, -0) < 0, p = s("indexOf"), h = l("indexOf", { ACCESSORS: !0, 1: 0 });
              u({ target: "Array", proto: !0, forced: f || !p || !h }, {
                indexOf: function(m) {
                  return f ? d.apply(this, arguments) || 0 : o(this, m, arguments.length > 1 ? arguments[1] : void 0);
                }
              });
            }
          ),
          /***/
          ca84: (
            /***/
            function(i, c, n) {
              var u = n("5135"), o = n("fc6a"), s = n("4d64").indexOf, l = n("d012");
              i.exports = function(d, f) {
                var p = o(d), h = 0, v = [], m;
                for (m in p) !u(l, m) && u(p, m) && v.push(m);
                for (; f.length > h; ) u(p, m = f[h++]) && (~s(v, m) || v.push(m));
                return v;
              };
            }
          ),
          /***/
          caad: (
            /***/
            function(i, c, n) {
              var u = n("23e7"), o = n("4d64").includes, s = n("44d2"), l = n("ae40"), d = l("indexOf", { ACCESSORS: !0, 1: 0 });
              u({ target: "Array", proto: !0, forced: !d }, {
                includes: function(p) {
                  return o(this, p, arguments.length > 1 ? arguments[1] : void 0);
                }
              }), s("includes");
            }
          ),
          /***/
          cc12: (
            /***/
            function(i, c, n) {
              var u = n("da84"), o = n("861d"), s = u.document, l = o(s) && o(s.createElement);
              i.exports = function(d) {
                return l ? s.createElement(d) : {};
              };
            }
          ),
          /***/
          ce4e: (
            /***/
            function(i, c, n) {
              var u = n("da84"), o = n("9112");
              i.exports = function(s, l) {
                try {
                  o(u, s, l);
                } catch {
                  u[s] = l;
                }
                return l;
              };
            }
          ),
          /***/
          d012: (
            /***/
            function(i, c) {
              i.exports = {};
            }
          ),
          /***/
          d039: (
            /***/
            function(i, c) {
              i.exports = function(n) {
                try {
                  return !!n();
                } catch {
                  return !0;
                }
              };
            }
          ),
          /***/
          d066: (
            /***/
            function(i, c, n) {
              var u = n("428f"), o = n("da84"), s = function(l) {
                return typeof l == "function" ? l : void 0;
              };
              i.exports = function(l, d) {
                return arguments.length < 2 ? s(u[l]) || s(o[l]) : u[l] && u[l][d] || o[l] && o[l][d];
              };
            }
          ),
          /***/
          d1e7: (
            /***/
            function(i, c, n) {
              var u = {}.propertyIsEnumerable, o = Object.getOwnPropertyDescriptor, s = o && !u.call({ 1: 2 }, 1);
              c.f = s ? function(d) {
                var f = o(this, d);
                return !!f && f.enumerable;
              } : u;
            }
          ),
          /***/
          d28b: (
            /***/
            function(i, c, n) {
              var u = n("746f");
              u("iterator");
            }
          ),
          /***/
          d2bb: (
            /***/
            function(i, c, n) {
              var u = n("825a"), o = n("3bbe");
              i.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                var s = !1, l = {}, d;
                try {
                  d = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set, d.call(l, []), s = l instanceof Array;
                } catch {
                }
                return function(p, h) {
                  return u(p), o(h), s ? d.call(p, h) : p.__proto__ = h, p;
                };
              }() : void 0);
            }
          ),
          /***/
          d3b7: (
            /***/
            function(i, c, n) {
              var u = n("00ee"), o = n("6eeb"), s = n("b041");
              u || o(Object.prototype, "toString", s, { unsafe: !0 });
            }
          ),
          /***/
          d44e: (
            /***/
            function(i, c, n) {
              var u = n("9bf2").f, o = n("5135"), s = n("b622"), l = s("toStringTag");
              i.exports = function(d, f, p) {
                d && !o(d = p ? d : d.prototype, l) && u(d, l, { configurable: !0, value: f });
              };
            }
          ),
          /***/
          d58f: (
            /***/
            function(i, c, n) {
              var u = n("1c0b"), o = n("7b0b"), s = n("44ad"), l = n("50c4"), d = function(f) {
                return function(p, h, v, m) {
                  u(h);
                  var g = o(p), y = s(g), S = l(g.length), E = f ? S - 1 : 0, A = f ? -1 : 1;
                  if (v < 2) for (; ; ) {
                    if (E in y) {
                      m = y[E], E += A;
                      break;
                    }
                    if (E += A, f ? E < 0 : S <= E)
                      throw TypeError("Reduce of empty array with no initial value");
                  }
                  for (; f ? E >= 0 : S > E; E += A) E in y && (m = h(m, y[E], E, g));
                  return m;
                };
              };
              i.exports = {
                // `Array.prototype.reduce` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
                left: d(!1),
                // `Array.prototype.reduceRight` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
                right: d(!0)
              };
            }
          ),
          /***/
          d784: (
            /***/
            function(i, c, n) {
              n("ac1f");
              var u = n("6eeb"), o = n("d039"), s = n("b622"), l = n("9263"), d = n("9112"), f = s("species"), p = !o(function() {
                var y = /./;
                return y.exec = function() {
                  var S = [];
                  return S.groups = { a: "7" }, S;
                }, "".replace(y, "$<a>") !== "7";
              }), h = function() {
                return "a".replace(/./, "$0") === "$0";
              }(), v = s("replace"), m = function() {
                return /./[v] ? /./[v]("a", "$0") === "" : !1;
              }(), g = !o(function() {
                var y = /(?:)/, S = y.exec;
                y.exec = function() {
                  return S.apply(this, arguments);
                };
                var E = "ab".split(y);
                return E.length !== 2 || E[0] !== "a" || E[1] !== "b";
              });
              i.exports = function(y, S, E, A) {
                var w = s(y), L = !o(function() {
                  var k = {};
                  return k[w] = function() {
                    return 7;
                  }, ""[y](k) != 7;
                }), j = L && !o(function() {
                  var k = !1, z = /a/;
                  return y === "split" && (z = {}, z.constructor = {}, z.constructor[f] = function() {
                    return z;
                  }, z.flags = "", z[w] = /./[w]), z.exec = function() {
                    return k = !0, null;
                  }, z[w](""), !k;
                });
                if (!L || !j || y === "replace" && !(p && h && !m) || y === "split" && !g) {
                  var U = /./[w], N = E(w, ""[y], function(k, z, Y, W, re) {
                    return z.exec === l ? L && !re ? { done: !0, value: U.call(z, Y, W) } : { done: !0, value: k.call(Y, z, W) } : { done: !1 };
                  }, {
                    REPLACE_KEEPS_$0: h,
                    REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: m
                  }), $ = N[0], H = N[1];
                  u(String.prototype, y, $), u(
                    RegExp.prototype,
                    w,
                    S == 2 ? function(k, z) {
                      return H.call(k, this, z);
                    } : function(k) {
                      return H.call(k, this);
                    }
                  );
                }
                A && d(RegExp.prototype[w], "sham", !0);
              };
            }
          ),
          /***/
          d81d: (
            /***/
            function(i, c, n) {
              var u = n("23e7"), o = n("b727").map, s = n("1dde"), l = n("ae40"), d = s("map"), f = l("map");
              u({ target: "Array", proto: !0, forced: !d || !f }, {
                map: function(h) {
                  return o(this, h, arguments.length > 1 ? arguments[1] : void 0);
                }
              });
            }
          ),
          /***/
          da84: (
            /***/
            function(i, c, n) {
              (function(u) {
                var o = function(s) {
                  return s && s.Math == Math && s;
                };
                i.exports = // eslint-disable-next-line no-undef
                o(typeof globalThis == "object" && globalThis) || o(typeof window == "object" && window) || o(typeof self == "object" && self) || o(typeof u == "object" && u) || // eslint-disable-next-line no-new-func
                Function("return this")();
              }).call(this, n("c8ba"));
            }
          ),
          /***/
          dbb4: (
            /***/
            function(i, c, n) {
              var u = n("23e7"), o = n("83ab"), s = n("56ef"), l = n("fc6a"), d = n("06cf"), f = n("8418");
              u({ target: "Object", stat: !0, sham: !o }, {
                getOwnPropertyDescriptors: function(h) {
                  for (var v = l(h), m = d.f, g = s(v), y = {}, S = 0, E, A; g.length > S; )
                    A = m(v, E = g[S++]), A !== void 0 && f(y, E, A);
                  return y;
                }
              });
            }
          ),
          /***/
          dbf1: (
            /***/
            function(i, c, n) {
              (function(u) {
                n.d(c, "a", function() {
                  return s;
                });
                function o() {
                  return typeof window < "u" ? window.console : u.console;
                }
                var s = o();
              }).call(this, n("c8ba"));
            }
          ),
          /***/
          ddb0: (
            /***/
            function(i, c, n) {
              var u = n("da84"), o = n("fdbc"), s = n("e260"), l = n("9112"), d = n("b622"), f = d("iterator"), p = d("toStringTag"), h = s.values;
              for (var v in o) {
                var m = u[v], g = m && m.prototype;
                if (g) {
                  if (g[f] !== h) try {
                    l(g, f, h);
                  } catch {
                    g[f] = h;
                  }
                  if (g[p] || l(g, p, v), o[v]) {
                    for (var y in s)
                      if (g[y] !== s[y]) try {
                        l(g, y, s[y]);
                      } catch {
                        g[y] = s[y];
                      }
                  }
                }
              }
            }
          ),
          /***/
          df75: (
            /***/
            function(i, c, n) {
              var u = n("ca84"), o = n("7839");
              i.exports = Object.keys || function(l) {
                return u(l, o);
              };
            }
          ),
          /***/
          e01a: (
            /***/
            function(i, c, n) {
              var u = n("23e7"), o = n("83ab"), s = n("da84"), l = n("5135"), d = n("861d"), f = n("9bf2").f, p = n("e893"), h = s.Symbol;
              if (o && typeof h == "function" && (!("description" in h.prototype) || // Safari 12 bug
              h().description !== void 0)) {
                var v = {}, m = function() {
                  var w = arguments.length < 1 || arguments[0] === void 0 ? void 0 : String(arguments[0]), L = this instanceof m ? new h(w) : w === void 0 ? h() : h(w);
                  return w === "" && (v[L] = !0), L;
                };
                p(m, h);
                var g = m.prototype = h.prototype;
                g.constructor = m;
                var y = g.toString, S = String(h("test")) == "Symbol(test)", E = /^Symbol\((.*)\)[^)]+$/;
                f(g, "description", {
                  configurable: !0,
                  get: function() {
                    var w = d(this) ? this.valueOf() : this, L = y.call(w);
                    if (l(v, w)) return "";
                    var j = S ? L.slice(7, -1) : L.replace(E, "$1");
                    return j === "" ? void 0 : j;
                  }
                }), u({ global: !0, forced: !0 }, {
                  Symbol: m
                });
              }
            }
          ),
          /***/
          e163: (
            /***/
            function(i, c, n) {
              var u = n("5135"), o = n("7b0b"), s = n("f772"), l = n("e177"), d = s("IE_PROTO"), f = Object.prototype;
              i.exports = l ? Object.getPrototypeOf : function(p) {
                return p = o(p), u(p, d) ? p[d] : typeof p.constructor == "function" && p instanceof p.constructor ? p.constructor.prototype : p instanceof Object ? f : null;
              };
            }
          ),
          /***/
          e177: (
            /***/
            function(i, c, n) {
              var u = n("d039");
              i.exports = !u(function() {
                function o() {
                }
                return o.prototype.constructor = null, Object.getPrototypeOf(new o()) !== o.prototype;
              });
            }
          ),
          /***/
          e260: (
            /***/
            function(i, c, n) {
              var u = n("fc6a"), o = n("44d2"), s = n("3f8c"), l = n("69f3"), d = n("7dd0"), f = "Array Iterator", p = l.set, h = l.getterFor(f);
              i.exports = d(Array, "Array", function(v, m) {
                p(this, {
                  type: f,
                  target: u(v),
                  // target
                  index: 0,
                  // next index
                  kind: m
                  // kind
                });
              }, function() {
                var v = h(this), m = v.target, g = v.kind, y = v.index++;
                return !m || y >= m.length ? (v.target = void 0, { value: void 0, done: !0 }) : g == "keys" ? { value: y, done: !1 } : g == "values" ? { value: m[y], done: !1 } : { value: [y, m[y]], done: !1 };
              }, "values"), s.Arguments = s.Array, o("keys"), o("values"), o("entries");
            }
          ),
          /***/
          e439: (
            /***/
            function(i, c, n) {
              var u = n("23e7"), o = n("d039"), s = n("fc6a"), l = n("06cf").f, d = n("83ab"), f = o(function() {
                l(1);
              }), p = !d || f;
              u({ target: "Object", stat: !0, forced: p, sham: !d }, {
                getOwnPropertyDescriptor: function(v, m) {
                  return l(s(v), m);
                }
              });
            }
          ),
          /***/
          e538: (
            /***/
            function(i, c, n) {
              var u = n("b622");
              c.f = u;
            }
          ),
          /***/
          e893: (
            /***/
            function(i, c, n) {
              var u = n("5135"), o = n("56ef"), s = n("06cf"), l = n("9bf2");
              i.exports = function(d, f) {
                for (var p = o(f), h = l.f, v = s.f, m = 0; m < p.length; m++) {
                  var g = p[m];
                  u(d, g) || h(d, g, v(f, g));
                }
              };
            }
          ),
          /***/
          e8b5: (
            /***/
            function(i, c, n) {
              var u = n("c6b6");
              i.exports = Array.isArray || function(s) {
                return u(s) == "Array";
              };
            }
          ),
          /***/
          e95a: (
            /***/
            function(i, c, n) {
              var u = n("b622"), o = n("3f8c"), s = u("iterator"), l = Array.prototype;
              i.exports = function(d) {
                return d !== void 0 && (o.Array === d || l[s] === d);
              };
            }
          ),
          /***/
          f5df: (
            /***/
            function(i, c, n) {
              var u = n("00ee"), o = n("c6b6"), s = n("b622"), l = s("toStringTag"), d = o(/* @__PURE__ */ function() {
                return arguments;
              }()) == "Arguments", f = function(p, h) {
                try {
                  return p[h];
                } catch {
                }
              };
              i.exports = u ? o : function(p) {
                var h, v, m;
                return p === void 0 ? "Undefined" : p === null ? "Null" : typeof (v = f(h = Object(p), l)) == "string" ? v : d ? o(h) : (m = o(h)) == "Object" && typeof h.callee == "function" ? "Arguments" : m;
              };
            }
          ),
          /***/
          f772: (
            /***/
            function(i, c, n) {
              var u = n("5692"), o = n("90e3"), s = u("keys");
              i.exports = function(l) {
                return s[l] || (s[l] = o(l));
              };
            }
          ),
          /***/
          fb15: (
            /***/
            function(i, c, n) {
              if (n.r(c), typeof window < "u") {
                var u = window.document.currentScript;
                {
                  var o = n("8875");
                  u = o(), "currentScript" in document || Object.defineProperty(document, "currentScript", { get: o });
                }
                var s = u && u.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
                s && (n.p = s[1]);
              }
              n("99af"), n("4de4"), n("4160"), n("c975"), n("d81d"), n("a434"), n("159b"), n("a4d3"), n("e439"), n("dbb4"), n("b64b");
              function l(G, K, ee) {
                return K in G ? Object.defineProperty(G, K, {
                  value: ee,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                }) : G[K] = ee, G;
              }
              function d(G, K) {
                var ee = Object.keys(G);
                if (Object.getOwnPropertySymbols) {
                  var ce = Object.getOwnPropertySymbols(G);
                  K && (ce = ce.filter(function(Se) {
                    return Object.getOwnPropertyDescriptor(G, Se).enumerable;
                  })), ee.push.apply(ee, ce);
                }
                return ee;
              }
              function f(G) {
                for (var K = 1; K < arguments.length; K++) {
                  var ee = arguments[K] != null ? arguments[K] : {};
                  K % 2 ? d(Object(ee), !0).forEach(function(ce) {
                    l(G, ce, ee[ce]);
                  }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(G, Object.getOwnPropertyDescriptors(ee)) : d(Object(ee)).forEach(function(ce) {
                    Object.defineProperty(G, ce, Object.getOwnPropertyDescriptor(ee, ce));
                  });
                }
                return G;
              }
              function p(G) {
                if (Array.isArray(G)) return G;
              }
              n("e01a"), n("d28b"), n("e260"), n("d3b7"), n("3ca3"), n("ddb0");
              function h(G, K) {
                if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(G)))) {
                  var ee = [], ce = !0, Se = !1, Fe = void 0;
                  try {
                    for (var Ae = G[Symbol.iterator](), Ee; !(ce = (Ee = Ae.next()).done) && (ee.push(Ee.value), !(K && ee.length === K)); ce = !0)
                      ;
                  } catch (Ve) {
                    Se = !0, Fe = Ve;
                  } finally {
                    try {
                      !ce && Ae.return != null && Ae.return();
                    } finally {
                      if (Se) throw Fe;
                    }
                  }
                  return ee;
                }
              }
              n("a630"), n("fb6a"), n("b0c0"), n("25f0");
              function v(G, K) {
                (K == null || K > G.length) && (K = G.length);
                for (var ee = 0, ce = new Array(K); ee < K; ee++)
                  ce[ee] = G[ee];
                return ce;
              }
              function m(G, K) {
                if (G) {
                  if (typeof G == "string") return v(G, K);
                  var ee = Object.prototype.toString.call(G).slice(8, -1);
                  if (ee === "Object" && G.constructor && (ee = G.constructor.name), ee === "Map" || ee === "Set") return Array.from(G);
                  if (ee === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ee)) return v(G, K);
                }
              }
              function g() {
                throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
              }
              function y(G, K) {
                return p(G) || h(G, K) || m(G, K) || g();
              }
              function S(G) {
                if (Array.isArray(G)) return v(G);
              }
              function E(G) {
                if (typeof Symbol < "u" && Symbol.iterator in Object(G)) return Array.from(G);
              }
              function A() {
                throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
              }
              function w(G) {
                return S(G) || E(G) || m(G) || A();
              }
              var L = n("a352"), j = /* @__PURE__ */ n.n(L);
              function U(G) {
                G.parentElement !== null && G.parentElement.removeChild(G);
              }
              function N(G, K, ee) {
                var ce = ee === 0 ? G.children[0] : G.children[ee - 1].nextSibling;
                G.insertBefore(K, ce);
              }
              var $ = n("dbf1");
              n("13d5"), n("4fad"), n("ac1f"), n("5319");
              function H(G) {
                var K = /* @__PURE__ */ Object.create(null);
                return function(ce) {
                  var Se = K[ce];
                  return Se || (K[ce] = G(ce));
                };
              }
              var k = /-(\w)/g, z = H(function(G) {
                return G.replace(k, function(K, ee) {
                  return ee.toUpperCase();
                });
              });
              n("5db7"), n("73d9");
              var Y = ["Start", "Add", "Remove", "Update", "End"], W = ["Choose", "Unchoose", "Sort", "Filter", "Clone"], re = ["Move"], X = [re, Y, W].flatMap(function(G) {
                return G;
              }).map(function(G) {
                return "on".concat(G);
              }), he = {
                manage: re,
                manageAndEmit: Y,
                emit: W
              };
              function fe(G) {
                return X.indexOf(G) !== -1;
              }
              n("caad"), n("2ca0");
              var Te = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "link", "main", "map", "mark", "math", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "slot", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"];
              function Re(G) {
                return Te.includes(G);
              }
              function xe(G) {
                return ["transition-group", "TransitionGroup"].includes(G);
              }
              function Ne(G) {
                return ["id", "class", "role", "style"].includes(G) || G.startsWith("data-") || G.startsWith("aria-") || G.startsWith("on");
              }
              function Ue(G) {
                return G.reduce(function(K, ee) {
                  var ce = y(ee, 2), Se = ce[0], Fe = ce[1];
                  return K[Se] = Fe, K;
                }, {});
              }
              function Me(G) {
                var K = G.$attrs, ee = G.componentData, ce = ee === void 0 ? {} : ee, Se = Ue(Object.entries(K).filter(function(Fe) {
                  var Ae = y(Fe, 2), Ee = Ae[0];
                  return Ae[1], Ne(Ee);
                }));
                return f(f({}, Se), ce);
              }
              function be(G) {
                var K = G.$attrs, ee = G.callBackBuilder, ce = Ue(O(K));
                Object.entries(ee).forEach(function(Fe) {
                  var Ae = y(Fe, 2), Ee = Ae[0], Ve = Ae[1];
                  he[Ee].forEach(function(Oe) {
                    ce["on".concat(Oe)] = Ve(Oe);
                  });
                });
                var Se = "[data-draggable]".concat(ce.draggable || "");
                return f(f({}, ce), {}, {
                  draggable: Se
                });
              }
              function O(G) {
                return Object.entries(G).filter(function(K) {
                  var ee = y(K, 2), ce = ee[0];
                  return ee[1], !Ne(ce);
                }).map(function(K) {
                  var ee = y(K, 2), ce = ee[0], Se = ee[1];
                  return [z(ce), Se];
                }).filter(function(K) {
                  var ee = y(K, 2), ce = ee[0];
                  return ee[1], !fe(ce);
                });
              }
              n("c740");
              function R(G, K) {
                if (!(G instanceof K))
                  throw new TypeError("Cannot call a class as a function");
              }
              function T(G, K) {
                for (var ee = 0; ee < K.length; ee++) {
                  var ce = K[ee];
                  ce.enumerable = ce.enumerable || !1, ce.configurable = !0, "value" in ce && (ce.writable = !0), Object.defineProperty(G, ce.key, ce);
                }
              }
              function D(G, K, ee) {
                return K && T(G.prototype, K), G;
              }
              var b = function(K) {
                var ee = K.el;
                return ee;
              }, x = function(K, ee) {
                return K.__draggable_context = ee;
              }, P = function(K) {
                return K.__draggable_context;
              }, M = /* @__PURE__ */ function() {
                function G(K) {
                  var ee = K.nodes, ce = ee.header, Se = ee.default, Fe = ee.footer, Ae = K.root, Ee = K.realList;
                  R(this, G), this.defaultNodes = Se, this.children = [].concat(w(ce), w(Se), w(Fe)), this.externalComponent = Ae.externalComponent, this.rootTransition = Ae.transition, this.tag = Ae.tag, this.realList = Ee;
                }
                return D(G, [{
                  key: "render",
                  value: function(ee, ce) {
                    var Se = this.tag, Fe = this.children, Ae = this._isRootComponent, Ee = Ae ? {
                      default: function() {
                        return Fe;
                      }
                    } : Fe;
                    return ee(Se, ce, Ee);
                  }
                }, {
                  key: "updated",
                  value: function() {
                    var ee = this.defaultNodes, ce = this.realList;
                    ee.forEach(function(Se, Fe) {
                      x(b(Se), {
                        element: ce[Fe],
                        index: Fe
                      });
                    });
                  }
                }, {
                  key: "getUnderlyingVm",
                  value: function(ee) {
                    return P(ee);
                  }
                }, {
                  key: "getVmIndexFromDomIndex",
                  value: function(ee, ce) {
                    var Se = this.defaultNodes, Fe = Se.length, Ae = ce.children, Ee = Ae.item(ee);
                    if (Ee === null)
                      return Fe;
                    var Ve = P(Ee);
                    if (Ve)
                      return Ve.index;
                    if (Fe === 0)
                      return 0;
                    var Oe = b(Se[0]), we = w(Ae).findIndex(function(Ie) {
                      return Ie === Oe;
                    });
                    return ee < we ? 0 : Fe;
                  }
                }, {
                  key: "_isRootComponent",
                  get: function() {
                    return this.externalComponent || this.rootTransition;
                  }
                }]), G;
              }(), B = n("8bbf");
              function V(G, K) {
                var ee = G[K];
                return ee ? ee() : [];
              }
              function Q(G) {
                var K = G.$slots, ee = G.realList, ce = G.getKey, Se = ee || [], Fe = ["header", "footer"].map(function(Ie) {
                  return V(K, Ie);
                }), Ae = y(Fe, 2), Ee = Ae[0], Ve = Ae[1], Oe = K.item;
                if (!Oe)
                  throw new Error("draggable element must have an item slot");
                var we = Se.flatMap(function(Ie, $e) {
                  return Oe({
                    element: Ie,
                    index: $e
                  }).map(function(je) {
                    return je.key = ce(Ie), je.props = f(f({}, je.props || {}), {}, {
                      "data-draggable": !0
                    }), je;
                  });
                });
                if (we.length !== Se.length)
                  throw new Error("Item slot must have only one child");
                return {
                  header: Ee,
                  footer: Ve,
                  default: we
                };
              }
              function Z(G) {
                var K = xe(G), ee = !Re(G) && !K;
                return {
                  transition: K,
                  externalComponent: ee,
                  tag: ee ? Object(B.resolveComponent)(G) : K ? B.TransitionGroup : G
                };
              }
              function J(G) {
                var K = G.$slots, ee = G.tag, ce = G.realList, Se = G.getKey, Fe = Q({
                  $slots: K,
                  realList: ce,
                  getKey: Se
                }), Ae = Z(ee);
                return new M({
                  nodes: Fe,
                  root: Ae,
                  realList: ce
                });
              }
              function q(G, K) {
                var ee = this;
                Object(B.nextTick)(function() {
                  return ee.$emit(G.toLowerCase(), K);
                });
              }
              function te(G) {
                var K = this;
                return function(ee, ce) {
                  if (K.realList !== null)
                    return K["onDrag".concat(G)](ee, ce);
                };
              }
              function ie(G) {
                var K = this, ee = te.call(this, G);
                return function(ce, Se) {
                  ee.call(K, ce, Se), q.call(K, G, ce);
                };
              }
              var ge = null, Ce = {
                list: {
                  type: Array,
                  required: !1,
                  default: null
                },
                modelValue: {
                  type: Array,
                  required: !1,
                  default: null
                },
                itemKey: {
                  type: [String, Function],
                  required: !0
                },
                clone: {
                  type: Function,
                  default: function(K) {
                    return K;
                  }
                },
                tag: {
                  type: String,
                  default: "div"
                },
                move: {
                  type: Function,
                  default: null
                },
                componentData: {
                  type: Object,
                  required: !1,
                  default: null
                }
              }, Ke = ["update:modelValue", "change"].concat(w([].concat(w(he.manageAndEmit), w(he.emit)).map(function(G) {
                return G.toLowerCase();
              }))), qe = Object(B.defineComponent)({
                name: "draggable",
                inheritAttrs: !1,
                props: Ce,
                emits: Ke,
                data: function() {
                  return {
                    error: !1
                  };
                },
                render: function() {
                  try {
                    this.error = !1;
                    var K = this.$slots, ee = this.$attrs, ce = this.tag, Se = this.componentData, Fe = this.realList, Ae = this.getKey, Ee = J({
                      $slots: K,
                      tag: ce,
                      realList: Fe,
                      getKey: Ae
                    });
                    this.componentStructure = Ee;
                    var Ve = Me({
                      $attrs: ee,
                      componentData: Se
                    });
                    return Ee.render(B.h, Ve);
                  } catch (Oe) {
                    return this.error = !0, Object(B.h)("pre", {
                      style: {
                        color: "red"
                      }
                    }, Oe.stack);
                  }
                },
                created: function() {
                  this.list !== null && this.modelValue !== null && $.a.error("modelValue and list props are mutually exclusive! Please set one or another.");
                },
                mounted: function() {
                  var K = this;
                  if (!this.error) {
                    var ee = this.$attrs, ce = this.$el, Se = this.componentStructure;
                    Se.updated();
                    var Fe = be({
                      $attrs: ee,
                      callBackBuilder: {
                        manageAndEmit: function(Ve) {
                          return ie.call(K, Ve);
                        },
                        emit: function(Ve) {
                          return q.bind(K, Ve);
                        },
                        manage: function(Ve) {
                          return te.call(K, Ve);
                        }
                      }
                    }), Ae = ce.nodeType === 1 ? ce : ce.parentElement;
                    this._sortable = new j.a(Ae, Fe), this.targetDomElement = Ae, Ae.__draggable_component__ = this;
                  }
                },
                updated: function() {
                  this.componentStructure.updated();
                },
                beforeUnmount: function() {
                  this._sortable !== void 0 && this._sortable.destroy();
                },
                computed: {
                  realList: function() {
                    var K = this.list;
                    return K || this.modelValue;
                  },
                  getKey: function() {
                    var K = this.itemKey;
                    return typeof K == "function" ? K : function(ee) {
                      return ee[K];
                    };
                  }
                },
                watch: {
                  $attrs: {
                    handler: function(K) {
                      var ee = this._sortable;
                      ee && O(K).forEach(function(ce) {
                        var Se = y(ce, 2), Fe = Se[0], Ae = Se[1];
                        ee.option(Fe, Ae);
                      });
                    },
                    deep: !0
                  }
                },
                methods: {
                  getUnderlyingVm: function(K) {
                    return this.componentStructure.getUnderlyingVm(K) || null;
                  },
                  getUnderlyingPotencialDraggableComponent: function(K) {
                    return K.__draggable_component__;
                  },
                  emitChanges: function(K) {
                    var ee = this;
                    Object(B.nextTick)(function() {
                      return ee.$emit("change", K);
                    });
                  },
                  alterList: function(K) {
                    if (this.list) {
                      K(this.list);
                      return;
                    }
                    var ee = w(this.modelValue);
                    K(ee), this.$emit("update:modelValue", ee);
                  },
                  spliceList: function() {
                    var K = arguments, ee = function(Se) {
                      return Se.splice.apply(Se, w(K));
                    };
                    this.alterList(ee);
                  },
                  updatePosition: function(K, ee) {
                    var ce = function(Fe) {
                      return Fe.splice(ee, 0, Fe.splice(K, 1)[0]);
                    };
                    this.alterList(ce);
                  },
                  getRelatedContextFromMoveEvent: function(K) {
                    var ee = K.to, ce = K.related, Se = this.getUnderlyingPotencialDraggableComponent(ee);
                    if (!Se)
                      return {
                        component: Se
                      };
                    var Fe = Se.realList, Ae = {
                      list: Fe,
                      component: Se
                    };
                    if (ee !== ce && Fe) {
                      var Ee = Se.getUnderlyingVm(ce) || {};
                      return f(f({}, Ee), Ae);
                    }
                    return Ae;
                  },
                  getVmIndexFromDomIndex: function(K) {
                    return this.componentStructure.getVmIndexFromDomIndex(K, this.targetDomElement);
                  },
                  onDragStart: function(K) {
                    this.context = this.getUnderlyingVm(K.item), K.item._underlying_vm_ = this.clone(this.context.element), ge = K.item;
                  },
                  onDragAdd: function(K) {
                    var ee = K.item._underlying_vm_;
                    if (ee !== void 0) {
                      U(K.item);
                      var ce = this.getVmIndexFromDomIndex(K.newIndex);
                      this.spliceList(ce, 0, ee);
                      var Se = {
                        element: ee,
                        newIndex: ce
                      };
                      this.emitChanges({
                        added: Se
                      });
                    }
                  },
                  onDragRemove: function(K) {
                    if (N(this.$el, K.item, K.oldIndex), K.pullMode === "clone") {
                      U(K.clone);
                      return;
                    }
                    var ee = this.context, ce = ee.index, Se = ee.element;
                    this.spliceList(ce, 1);
                    var Fe = {
                      element: Se,
                      oldIndex: ce
                    };
                    this.emitChanges({
                      removed: Fe
                    });
                  },
                  onDragUpdate: function(K) {
                    U(K.item), N(K.from, K.item, K.oldIndex);
                    var ee = this.context.index, ce = this.getVmIndexFromDomIndex(K.newIndex);
                    this.updatePosition(ee, ce);
                    var Se = {
                      element: this.context.element,
                      oldIndex: ee,
                      newIndex: ce
                    };
                    this.emitChanges({
                      moved: Se
                    });
                  },
                  computeFutureIndex: function(K, ee) {
                    if (!K.element)
                      return 0;
                    var ce = w(ee.to.children).filter(function(Ee) {
                      return Ee.style.display !== "none";
                    }), Se = ce.indexOf(ee.related), Fe = K.component.getVmIndexFromDomIndex(Se), Ae = ce.indexOf(ge) !== -1;
                    return Ae || !ee.willInsertAfter ? Fe : Fe + 1;
                  },
                  onDragMove: function(K, ee) {
                    var ce = this.move, Se = this.realList;
                    if (!ce || !Se)
                      return !0;
                    var Fe = this.getRelatedContextFromMoveEvent(K), Ae = this.computeFutureIndex(Fe, K), Ee = f(f({}, this.context), {}, {
                      futureIndex: Ae
                    }), Ve = f(f({}, K), {}, {
                      relatedContext: Fe,
                      draggedContext: Ee
                    });
                    return ce(Ve, ee);
                  },
                  onDragEnd: function() {
                    ge = null;
                  }
                }
              }), Ze = qe;
              c.default = Ze;
            }
          ),
          /***/
          fb6a: (
            /***/
            function(i, c, n) {
              var u = n("23e7"), o = n("861d"), s = n("e8b5"), l = n("23cb"), d = n("50c4"), f = n("fc6a"), p = n("8418"), h = n("b622"), v = n("1dde"), m = n("ae40"), g = v("slice"), y = m("slice", { ACCESSORS: !0, 0: 0, 1: 2 }), S = h("species"), E = [].slice, A = Math.max;
              u({ target: "Array", proto: !0, forced: !g || !y }, {
                slice: function(L, j) {
                  var U = f(this), N = d(U.length), $ = l(L, N), H = l(j === void 0 ? N : j, N), k, z, Y;
                  if (s(U) && (k = U.constructor, typeof k == "function" && (k === Array || s(k.prototype)) ? k = void 0 : o(k) && (k = k[S], k === null && (k = void 0)), k === Array || k === void 0))
                    return E.call(U, $, H);
                  for (z = new (k === void 0 ? Array : k)(A(H - $, 0)), Y = 0; $ < H; $++, Y++) $ in U && p(z, Y, U[$]);
                  return z.length = Y, z;
                }
              });
            }
          ),
          /***/
          fc6a: (
            /***/
            function(i, c, n) {
              var u = n("44ad"), o = n("1d80");
              i.exports = function(s) {
                return u(o(s));
              };
            }
          ),
          /***/
          fdbc: (
            /***/
            function(i, c) {
              i.exports = {
                CSSRuleList: 0,
                CSSStyleDeclaration: 0,
                CSSValueList: 0,
                ClientRectList: 0,
                DOMRectList: 0,
                DOMStringList: 0,
                DOMTokenList: 1,
                DataTransferItemList: 0,
                FileList: 0,
                HTMLAllCollection: 0,
                HTMLCollection: 0,
                HTMLFormElement: 0,
                HTMLSelectElement: 0,
                MediaList: 0,
                MimeTypeArray: 0,
                NamedNodeMap: 0,
                NodeList: 1,
                PaintRequestList: 0,
                Plugin: 0,
                PluginArray: 0,
                SVGLengthList: 0,
                SVGNumberList: 0,
                SVGPathSegList: 0,
                SVGPointList: 0,
                SVGStringList: 0,
                SVGTransformList: 0,
                SourceBufferList: 0,
                StyleSheetList: 0,
                TextTrackCueList: 0,
                TextTrackList: 0,
                TouchList: 0
              };
            }
          ),
          /***/
          fdbf: (
            /***/
            function(i, c, n) {
              var u = n("4930");
              i.exports = u && !Symbol.sham && typeof Symbol.iterator == "symbol";
            }
          )
          /******/
        }).default
      );
    });
  }(lo)), lo.exports;
}
var qp = Zp();
const Qa = /* @__PURE__ */ Ia(qp), _p = {
  beforeMount(t, e) {
    t.clickOutsideEvent = (r) => {
      t === r.target || t.contains(r.target) || e.value(r);
    }, document.addEventListener("click", t.clickOutsideEvent);
  },
  unmounted(t) {
    document.removeEventListener("click", t.clickOutsideEvent);
  }
}, ev = {
  name: "VActions",
  directives: {
    clickOutside: _p
  },
  props: {
    classes: {
      type: String,
      default: ""
    },
    showActionIcon: {
      type: Boolean,
      default: !0
    }
  },
  watch: {
    active(t) {
      t ? this.$emit("open") : this.$emit("close");
    }
  },
  data() {
    return {
      active: !1
    };
  }
}, tv = { class: "flex items-center" }, nv = { class: "relative flex items-center" }, rv = {
  key: 0,
  width: "16",
  height: "4",
  viewBox: "0 0 16 4",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function ov(t, e, r, a, i, c) {
  const n = Gl("click-outside");
  return rt((ae(), le("div", tv, [
    F("div", nv, [
      F("div", {
        ref: "button",
        class: et([{ active: i.active }, "relative flex cursor-pointer hover:bg-gray-200 w-5 h-5 items-center justify-center rounded-lg"]),
        onClick: e[0] || (e[0] = tr((u) => i.active = !i.active, ["prevent"]))
      }, [
        r.showActionIcon ? (ae(), le("svg", rv, e[1] || (e[1] = [
          F("path", {
            d: "M8.00065 2.83341C8.46089 2.83341 8.83398 2.46032 8.83398 2.00008C8.83398 1.53984 8.46089 1.16675 8.00065 1.16675C7.54041 1.16675 7.16732 1.53984 7.16732 2.00008C7.16732 2.46032 7.54041 2.83341 8.00065 2.83341Z",
            stroke: "#98A2B3",
            "stroke-width": "1.66667",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1),
          F("path", {
            d: "M13.834 2.83341C14.2942 2.83341 14.6673 2.46032 14.6673 2.00008C14.6673 1.53984 14.2942 1.16675 13.834 1.16675C13.3737 1.16675 13.0007 1.53984 13.0007 2.00008C13.0007 2.46032 13.3737 2.83341 13.834 2.83341Z",
            stroke: "#98A2B3",
            "stroke-width": "1.66667",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1),
          F("path", {
            d: "M2.16732 2.83341C2.62755 2.83341 3.00065 2.46032 3.00065 2.00008C3.00065 1.53984 2.62755 1.16675 2.16732 1.16675C1.70708 1.16675 1.33398 1.53984 1.33398 2.00008C1.33398 2.46032 1.70708 2.83341 2.16732 2.83341Z",
            stroke: "#98A2B3",
            "stroke-width": "1.66667",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ]))) : ke("", !0),
        gn(t.$slots, "button")
      ], 2),
      ue(Aa, { name: "fade" }, {
        default: wt(() => [
          i.active ? (ae(), le("div", {
            key: 0,
            class: et(["absolute right-0 top-full z-20 w-[200px] rounded bg-white shadow-xl ring-1 ring-neutral-100", r.classes])
          }, [
            gn(t.$slots, "dropdown")
          ], 2)) : ke("", !0)
        ]),
        _: 3
      })
    ])
  ])), [
    [n, () => this.active = !1]
  ]);
}
const cl = /* @__PURE__ */ pt(ev, [["render", ov]]), av = {
  name: "VGrid",
  inject: ["bus"],
  components: { VActions: cl, VToggle: Wa, draggable: Qa },
  props: {
    modelValue: {
      type: Array,
      default: () => [
        [[], []]
      ]
    },
    allowAddRow: {
      type: Boolean,
      default: !0
    },
    allowAddRowAsTemplate: {
      type: Boolean,
      default: !1
    },
    isDragging: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      grid: JSON.parse(JSON.stringify(this.modelValue)),
      previousGrid: JSON.parse(JSON.stringify(this.modelValue)),
      localAllowToAdd: this.allowAddRow
    };
  },
  computed: {
    canAddColumn() {
      return this.grid[0].length < 7;
    }
  },
  methods: {
    getClassForItem(t, e) {
      return t[e].some((a) => a.hasOwnProperty("label")) ? "relative text-center border-gray-300 rounded-lg w-full" : "relative text-center flex items-center justify-center border border-dashed border-gray-300 rounded-lg w-full min-h-[150px]";
    },
    edit(t) {
      var e;
      (e = this.bus) == null || e.$emit("openModal", {
        componentName: "EditFieldGrid",
        componentData: {
          fields: this.grid[t],
          index: t
        },
        scrollable: !0,
        isAsyncCallback: !0,
        callback: async (r) => {
          this.grid[t] = r;
        },
        cancelCallback: () => {
        }
      });
    },
    removeField(t, e) {
      this.grid[t][e] = [];
    },
    removeColumn(t, e) {
      this.grid.forEach((r) => {
        r.splice(e, 1);
      });
    },
    findFieldPosition(t) {
      for (let e = 0; e < this.previousGrid.length; e++)
        for (let r = 0; r < this.previousGrid[e].length; r++) {
          const a = this.previousGrid[e][r];
          if (Array.isArray(a) && a.some((i) => i.id === t.id))
            return { rowIndex: e, colIndex: r };
        }
      return null;
    },
    onDrag() {
      this.previousGrid = pn(this.grid);
    },
    handleAdd(t, e, r) {
      const a = pn(t.item._underlying_vm_), i = this.findFieldPosition(a), c = this.previousGrid[e][r];
      if (a.type === "grid") {
        this.grid[e][r] = [];
        return;
      }
      this.grid[e][r].length > 1 && (i && Object.keys(i).length && c[0].id !== a.id && (this.grid[i.rowIndex][i.colIndex] = [], this.grid[i.rowIndex][i.colIndex].push(c[0])), this.grid[e][r] = [], this.grid[e][r].push(a)), this.previousGrid = pn(this.grid);
    },
    item(t, e) {
      return this.grid[t][e];
    },
    addRow() {
      const t = Array(this.grid[0].length).fill([]);
      this.grid.push(t);
    },
    addColumn() {
      this.canAddColumn && this.grid.forEach((t) => {
        t.push([]);
      });
    }
  },
  watch: {
    grid: {
      deep: !0,
      handler(t) {
        this.$emit("update:modelValue", t);
      }
    },
    localAllowToAdd: {
      handler(t) {
        this.$emit("update:allowAddRow", t);
      }
    }
  }
}, iv = { class: "flex justify-between py-2" }, sv = { class: "grid gap-2 w-full" }, lv = { class: "pl-1 pr-3 py-2.5 w-full bg-white rounded-lg flex items-center gap-2" }, uv = { class: "flex flex-row justify-between items-center w-full" }, cv = { class: "text-sm text-gray-900" }, dv = { class: "divide-y text-sm text-gray-700" }, fv = ["onClick"], hv = ["onClick"], pv = ["onClick"], vv = { class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm text-gray-600 z-0" }, mv = { key: 0 }, gv = {
  key: 0,
  class: "mt-2 flex gap-2"
};
function yv(t, e, r, a, i, c) {
  const n = Pt("v-toggle"), u = Pt("v-actions"), o = Pt("draggable");
  return ae(), le("div", null, [
    ue(n, {
      class: "mt-3 mb-1",
      title: "Allow form users to add rows when filling out the form",
      modelValue: i.localAllowToAdd,
      "onUpdate:modelValue": e[0] || (e[0] = (s) => i.localAllowToAdd = s)
    }, null, 8, ["modelValue"]),
    F("div", iv, [
      e[4] || (e[4] = F("h4", { class: "text-base font-semibold text-gray-900" }, "Define columns/rows", -1)),
      F("div", null, [
        F("a", {
          onClick: e[1] || (e[1] = (...s) => c.addColumn && c.addColumn(...s)),
          class: "cursor-pointer text-brand-700 flex items-center text-sm font-semibold hover:bg-brand-50 p-1 gap-1 rounded"
        }, e[3] || (e[3] = [
          F("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            F("path", {
              d: "M6.99935 1.1665V12.8332M1.16602 6.99984H12.8327",
              stroke: "#931C61",
              "stroke-width": "1.66667",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            })
          ], -1),
          Xt(" Add Column ")
        ]))
      ])
    ]),
    F("div", sv, [
      (ae(!0), le(At, null, Cn(i.grid, (s, l) => (ae(), le("div", {
        key: "row-" + l,
        class: "flex gap-2 relative"
      }, [
        (ae(!0), le(At, null, Cn(s, (d, f) => (ae(), le("div", {
          key: "cell-" + l + "-" + f,
          class: et(c.getClassForItem(i.grid[l], f))
        }, [
          ue(o, {
            "item-key": "id",
            modelValue: i.grid[l][f],
            "onUpdate:modelValue": (p) => i.grid[l][f] = p,
            onAdd: (p) => c.handleAdd(p, l, f),
            onDrag: c.onDrag,
            "swap-threshold": "0.65",
            group: { name: `${l} - ${f}`, pull: !0, put: !0 },
            class: et(["w-full h-full items-center justify-center", { flex: !i.grid[l][f].length }]),
            "ghost-class": "dragging-item"
          }, {
            item: wt(({ element: p }) => [
              F("div", lv, [
                e[8] || (e[8] = F("svg", {
                  class: "cursor-pointer",
                  width: "8",
                  height: "13",
                  viewBox: "0 0 7 13",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  F("rect", {
                    x: "1",
                    y: "1",
                    width: "2",
                    height: "2",
                    fill: "#667085"
                  }),
                  F("rect", {
                    x: "4",
                    y: "1",
                    width: "2",
                    height: "2",
                    fill: "#667085"
                  }),
                  F("rect", {
                    x: "1",
                    y: "4",
                    width: "2",
                    height: "2",
                    fill: "#667085"
                  }),
                  F("rect", {
                    x: "4",
                    y: "4",
                    width: "2",
                    height: "2",
                    fill: "#667085"
                  }),
                  F("rect", {
                    x: "1",
                    y: "7",
                    width: "2",
                    height: "2",
                    fill: "#667085"
                  }),
                  F("rect", {
                    x: "1",
                    y: "10",
                    width: "2",
                    height: "2",
                    fill: "#667085"
                  }),
                  F("rect", {
                    x: "4",
                    y: "7",
                    width: "2",
                    height: "2",
                    fill: "#667085"
                  }),
                  F("rect", {
                    x: "4",
                    y: "10",
                    width: "2",
                    height: "2",
                    fill: "#667085"
                  })
                ], -1)),
                F("div", uv, [
                  F("span", cv, Ge(p.label), 1),
                  ue(u, null, {
                    dropdown: wt(() => [
                      F("ul", dv, [
                        F("li", {
                          onClick: (h) => c.edit(l),
                          class: "cursor-pointer flex items-center p-2 hover:bg-brand-50 gap-2 rounded-t"
                        }, e[5] || (e[5] = [
                          F("svg", {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 16 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                          }, [
                            F("path", {
                              d: "M1.66602 14.3334L5.36553 12.9105C5.60216 12.8195 5.72047 12.774 5.83116 12.7146C5.92948 12.6618 6.02322 12.6009 6.11138 12.5324C6.21063 12.4554 6.30027 12.3658 6.47954 12.1865L13.9994 4.66671C14.7357 3.93033 14.7357 2.73642 13.9994 2.00004C13.263 1.26366 12.0691 1.26366 11.3327 2.00004L3.81287 9.51985C3.6336 9.69912 3.54396 9.78876 3.46694 9.88801C3.39853 9.97617 3.33762 10.0699 3.28484 10.1682C3.22542 10.2789 3.17991 10.3972 3.0889 10.6339L1.66602 14.3334ZM1.66602 14.3334L3.0381 10.766C3.13628 10.5107 3.18537 10.3831 3.26958 10.3246C3.34316 10.2735 3.43422 10.2542 3.52221 10.271C3.6229 10.2902 3.7196 10.3869 3.913 10.5803L5.41906 12.0864C5.61246 12.2798 5.70916 12.3765 5.72839 12.4772C5.7452 12.5652 5.72587 12.6562 5.67478 12.7298C5.61631 12.814 5.48867 12.8631 5.2334 12.9613L1.66602 14.3334Z",
                              stroke: "#667085",
                              "stroke-width": "1.5",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            })
                          ], -1),
                          F("span", null, "Edit", -1)
                        ]), 8, fv),
                        F("li", {
                          onClick: (h) => c.removeField(l, f),
                          class: "cursor-pointer flex items-center gap-2 p-2 hover:bg-brand-200"
                        }, e[6] || (e[6] = [
                          F("svg", {
                            width: "14",
                            height: "16",
                            viewBox: "0 0 14 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                          }, [
                            F("path", {
                              d: "M9.66667 3.99992V3.46659C9.66667 2.71985 9.66667 2.34648 9.52134 2.06126C9.39351 1.81038 9.18954 1.60641 8.93865 1.47858C8.65344 1.33325 8.28007 1.33325 7.53333 1.33325H6.46667C5.71993 1.33325 5.34656 1.33325 5.06135 1.47858C4.81046 1.60641 4.60649 1.81038 4.47866 2.06126C4.33333 2.34648 4.33333 2.71985 4.33333 3.46659V3.99992M5.66667 7.66659V10.9999M8.33333 7.66659V10.9999M1 3.99992H13M11.6667 3.99992V11.4666C11.6667 12.5867 11.6667 13.1467 11.4487 13.5746C11.2569 13.9509 10.951 14.2569 10.5746 14.4486C10.1468 14.6666 9.58677 14.6666 8.46667 14.6666H5.53333C4.41323 14.6666 3.85318 14.6666 3.42535 14.4486C3.04903 14.2569 2.74307 13.9509 2.55132 13.5746C2.33333 13.1467 2.33333 12.5867 2.33333 11.4666V3.99992",
                              stroke: "#667085",
                              "stroke-width": "1.5",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            })
                          ], -1),
                          F("span", null, "Remove this cell", -1)
                        ]), 8, hv),
                        F("li", {
                          onClick: (h) => c.removeColumn(l, f),
                          class: "cursor-pointer flex items-center gap-2 p-2 hover:bg-brand-50 rounded-b"
                        }, e[7] || (e[7] = [
                          F("svg", {
                            width: "14",
                            height: "16",
                            viewBox: "0 0 14 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                          }, [
                            F("path", {
                              d: "M9.66667 3.99992V3.46659C9.66667 2.71985 9.66667 2.34648 9.52134 2.06126C9.39351 1.81038 9.18954 1.60641 8.93865 1.47858C8.65344 1.33325 8.28007 1.33325 7.53333 1.33325H6.46667C5.71993 1.33325 5.34656 1.33325 5.06135 1.47858C4.81046 1.60641 4.60649 1.81038 4.47866 2.06126C4.33333 2.34648 4.33333 2.71985 4.33333 3.46659V3.99992M5.66667 7.66659V10.9999M8.33333 7.66659V10.9999M1 3.99992H13M11.6667 3.99992V11.4666C11.6667 12.5867 11.6667 13.1467 11.4487 13.5746C11.2569 13.9509 10.951 14.2569 10.5746 14.4486C10.1468 14.6666 9.58677 14.6666 8.46667 14.6666H5.53333C4.41323 14.6666 3.85318 14.6666 3.42535 14.4486C3.04903 14.2569 2.74307 13.9509 2.55132 13.5746C2.33333 13.1467 2.33333 12.5867 2.33333 11.4666V3.99992",
                              stroke: "#667085",
                              "stroke-width": "1.5",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            })
                          ], -1),
                          F("span", null, "Remove whole column", -1)
                        ]), 8, pv)
                      ])
                    ]),
                    _: 2
                  }, 1024)
                ])
              ])
            ]),
            _: 2
          }, 1032, ["modelValue", "onUpdate:modelValue", "onAdd", "onDrag", "group", "class"]),
          rt(F("p", vv, [
            r.isDragging ? ke("", !0) : (ae(), le("span", mv, "Drag a layout/component in"))
          ], 512), [
            [Wl, !i.grid[l][f].length]
          ])
        ], 2))), 128))
      ]))), 128))
    ]),
    r.allowAddRowAsTemplate ? (ae(), le("div", gv, [
      F("a", {
        onClick: e[2] || (e[2] = (...s) => c.addRow && c.addRow(...s)),
        class: "cursor-pointer text-brand-700 flex items-center text-sm font-semibold hover:bg-brand-50 p-1 gap-1 rounded"
      }, e[9] || (e[9] = [
        F("svg", {
          width: "14",
          height: "14",
          viewBox: "0 0 14 14",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, [
          F("path", {
            d: "M6.99935 1.1665V12.8332M1.16602 6.99984H12.8327",
            stroke: "#931C61",
            "stroke-width": "1.66667",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          })
        ], -1),
        Xt(" Add Row ")
      ]))
    ])) : ke("", !0)
  ]);
}
const bv = /* @__PURE__ */ pt(av, [["render", yv]]), xv = {
  name: "FieldDraggable",
  components: { VToggle: Wa, VActions: cl, VGrid: bv, draggable: Qa },
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    disableDropzone: {
      type: Boolean,
      default: !1
    },
    isDragging: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      localFields: this.modelValue,
      hasOptionsFieldTypes: ["select", "check-group", "radio-group"]
    };
  },
  watch: {
    localFields: {
      deep: !0,
      handler(t) {
        this.$emit("update:modelValue", t);
      }
    }
  },
  methods: {
    getFieldTypeTitle(t) {
      var e;
      switch (t.type) {
        case "datepicker":
          return "Date Picker";
        case "text":
          return "Input Field";
        case "file-upload":
          return "File Upload";
        case "textarea":
          return "Text Area";
        case "radio-group":
          return "Radio Button Group";
        case "check-group":
          return "Checkbox Group";
        case "address":
          return "Address";
        default:
          return ((e = t.type) == null ? void 0 : e.charAt(0).toUpperCase()) + (t == null ? void 0 : t.type.slice(1));
      }
    },
    removeField(t) {
      this.localFields.splice(t, 1);
    },
    onAddOption(t) {
      t.options.push("Option " + (t.options.length + 1));
    },
    removeFieldOption(t, e) {
      t.options.splice(e, 1);
    }
  }
}, Sv = { class: "-field-title handle" }, Ev = ["onClick"], wv = { class: "-title" }, Tv = { class: "-type-title" }, Av = { class: "flex gap-6 items-center" }, Cv = {
  key: 0,
  class: "-prop -options"
}, Ov = { class: "divide-y text-sm text-gray-700" }, Pv = ["onClick"], Iv = { class: "-field-properties" }, Rv = { class: "-prop" }, Dv = ["onUpdate:modelValue"], Fv = { class: "-prop" }, Mv = ["onUpdate:modelValue"], Lv = { class: "-prop" }, Uv = ["onUpdate:modelValue", "placeholder"], Nv = { class: "-two-columns" }, jv = { class: "-prop" }, kv = ["onUpdate:modelValue"], Bv = { class: "-prop -width" }, $v = ["onUpdate:modelValue"], Vv = { class: "-prop" }, Hv = ["onUpdate:modelValue"], zv = {
  key: 0,
  class: "-prop"
}, Gv = ["onUpdate:modelValue"], Wv = {
  key: 1,
  class: "-prop -width"
}, Yv = ["onUpdate:modelValue"], Kv = {
  key: 0,
  class: "-two-columns"
}, Xv = { class: "-prop" }, Jv = ["onUpdate:modelValue"], Qv = {
  key: 0,
  class: "-prop -width"
}, Zv = ["onUpdate:modelValue"], qv = { class: "-prop" }, _v = { class: "-label" }, em = ["onUpdate:modelValue"], tm = { class: "-two-columns" }, nm = {
  key: 0,
  class: "-prop"
}, rm = ["onUpdate:modelValue"], om = {
  key: 1,
  class: "-prop -width"
}, am = ["onUpdate:modelValue"], im = {
  key: 2,
  class: "-prop"
}, sm = ["onUpdate:modelValue"], lm = {
  key: 3,
  class: "-prop -options"
}, um = { class: "flex justify-between" }, cm = { class: "-new" }, dm = ["onClick"], fm = { class: "-option" }, hm = ["onUpdate:modelValue"], pm = ["onClick"], vm = { key: 0 };
function mm(t, e, r, a, i, c) {
  const n = Pt("v-toggle"), u = Pt("v-actions"), o = Pt("v-grid"), s = Pt("draggable");
  return ae(), On(s, {
    class: et(["pb-60 relative z-10", { "!pb-4": r.disableDropzone }]),
    modelValue: i.localFields,
    "onUpdate:modelValue": e[0] || (e[0] = (l) => i.localFields = l),
    "item-key": "id",
    "ghost-class": "dragging-item",
    sort: !0,
    "empty-insert-threshold": 0,
    "inverted-swap-threshold": 0,
    group: { name: "fields", pull: !1, put: !0 },
    handle: ".handle"
  }, {
    item: wt(({ element: l, index: d }) => [
      F("div", {
        class: et(["relative -field", ["-type-" + l.type]])
      }, [
        F("div", Sv, [
          F("h2", {
            onClick: (f) => l.isShowing = !l.isShowing,
            class: "relative cursor-pointer"
          }, [
            e[1] || (e[1] = F("svg", {
              class: "absolute top-[6px] -left-[20px]",
              width: "8",
              height: "13",
              viewBox: "0 0 7 13",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, [
              F("rect", {
                x: "1",
                y: "1",
                width: "2",
                height: "2",
                fill: "#667085"
              }),
              F("rect", {
                x: "4",
                y: "1",
                width: "2",
                height: "2",
                fill: "#667085"
              }),
              F("rect", {
                x: "1",
                y: "4",
                width: "2",
                height: "2",
                fill: "#667085"
              }),
              F("rect", {
                x: "4",
                y: "4",
                width: "2",
                height: "2",
                fill: "#667085"
              }),
              F("rect", {
                x: "1",
                y: "7",
                width: "2",
                height: "2",
                fill: "#667085"
              }),
              F("rect", {
                x: "1",
                y: "10",
                width: "2",
                height: "2",
                fill: "#667085"
              }),
              F("rect", {
                x: "4",
                y: "7",
                width: "2",
                height: "2",
                fill: "#667085"
              }),
              F("rect", {
                x: "4",
                y: "10",
                width: "2",
                height: "2",
                fill: "#667085"
              })
            ], -1)),
            F("span", wv, [
              F("span", Tv, Ge(c.getFieldTypeTitle(l)), 1)
            ])
          ], 8, Ev),
          F("div", Av, [
            l.hasOwnProperty("required") ? (ae(), le("div", Cv, [
              ue(n, {
                title: "Required",
                modelValue: l.required,
                "onUpdate:modelValue": (f) => l.required = f
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ])) : ke("", !0),
            ue(u, null, {
              dropdown: wt(() => [
                F("ul", Ov, [
                  F("li", {
                    onClick: (f) => c.removeField(d),
                    class: "cursor-pointer flex items-center gap-2 p-2 hover:bg-brand-50 rounded"
                  }, e[2] || (e[2] = [
                    F("svg", {
                      width: "14",
                      height: "16",
                      viewBox: "0 0 14 16",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      F("path", {
                        d: "M9.66667 3.99992V3.46659C9.66667 2.71985 9.66667 2.34648 9.52134 2.06126C9.39351 1.81038 9.18954 1.60641 8.93865 1.47858C8.65344 1.33325 8.28007 1.33325 7.53333 1.33325H6.46667C5.71993 1.33325 5.34656 1.33325 5.06135 1.47858C4.81046 1.60641 4.60649 1.81038 4.47866 2.06126C4.33333 2.34648 4.33333 2.71985 4.33333 3.46659V3.99992M5.66667 7.66659V10.9999M8.33333 7.66659V10.9999M1 3.99992H13M11.6667 3.99992V11.4666C11.6667 12.5867 11.6667 13.1467 11.4487 13.5746C11.2569 13.9509 10.951 14.2569 10.5746 14.4486C10.1468 14.6666 9.58677 14.6666 8.46667 14.6666H5.53333C4.41323 14.6666 3.85318 14.6666 3.42535 14.4486C3.04903 14.2569 2.74307 13.9509 2.55132 13.5746C2.33333 13.1467 2.33333 12.5867 2.33333 11.4666V3.99992",
                        stroke: "#667085",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ], -1),
                    F("span", null, "Remove", -1)
                  ]), 8, Pv)
                ])
              ]),
              _: 2
            }, 1024)
          ])
        ]),
        F("div", Iv, [
          l.type === "grid" ? (ae(), le(At, { key: 0 }, [
            F("div", Rv, [
              e[3] || (e[3] = F("span", { class: "-label" }, "Label", -1)),
              rt(F("input", {
                type: "text",
                "onUpdate:modelValue": (f) => l.label = f
              }, null, 8, Dv), [
                [Et, l.label]
              ])
            ]),
            F("div", Fv, [
              e[4] || (e[4] = F("span", { class: "-label" }, "Supporting Text", -1)),
              rt(F("input", {
                type: "text",
                "onUpdate:modelValue": (f) => l.hint = f
              }, null, 8, Mv), [
                [Et, l.hint]
              ])
            ]),
            ue(o, {
              modelValue: l.grid,
              "onUpdate:modelValue": (f) => l.grid = f,
              "is-dragging": r.isDragging,
              "allow-add-row": l.allow_add_row,
              "onUpdate:allowAddRow": (f) => l.allow_add_row = f
            }, null, 8, ["modelValue", "onUpdate:modelValue", "is-dragging", "allow-add-row", "onUpdate:allowAddRow"])
          ], 64)) : l.type === "paragraph" ? (ae(), le(At, { key: 1 }, [
            F("div", Lv, [
              e[5] || (e[5] = F("span", null, "Content", -1)),
              rt(F("textarea", {
                cols: "30",
                rows: "3",
                "onUpdate:modelValue": (f) => l.content = f,
                placeholder: l.placeholder
              }, "                          ", 8, Uv), [
                [Et, l.content]
              ])
            ]),
            F("div", Nv, [
              F("div", jv, [
                e[7] || (e[7] = F("span", null, "Type", -1)),
                rt(F("select", {
                  "onUpdate:modelValue": (f) => l.content_type = f
                }, e[6] || (e[6] = [
                  F("option", { value: "p" }, "p", -1),
                  F("option", { value: "blockquote" }, "blockquote", -1),
                  F("option", { value: "address" }, "address", -1)
                ]), 8, kv), [
                  [Jr, l.content_type]
                ])
              ]),
              F("div", Bv, [
                e[8] || (e[8] = F("span", { class: "-label" }, "Classes", -1)),
                rt(F("input", {
                  "onUpdate:modelValue": (f) => l.class = f,
                  type: "text",
                  name: "classes",
                  placeholder: "Input space separated classes"
                }, null, 8, $v), [
                  [Et, l.class]
                ])
              ])
            ])
          ], 64)) : l.type === "checkbox" ? (ae(), le(At, { key: 2 }, [
            F("div", Vv, [
              e[9] || (e[9] = F("span", { class: "-label" }, "Label", -1)),
              rt(F("input", {
                type: "text",
                "onUpdate:modelValue": (f) => l.label = f
              }, null, 8, Hv), [
                [Et, l.label]
              ])
            ]),
            l.hasOwnProperty("hint") ? (ae(), le("div", zv, [
              e[10] || (e[10] = F("span", { class: "-label" }, "Supporting Text", -1)),
              rt(F("textarea", {
                cols: "30",
                rows: "3",
                "onUpdate:modelValue": (f) => l.hint = f,
                placeholder: "Supporting text"
              }, null, 8, Gv), [
                [Et, l.hint]
              ])
            ])) : ke("", !0),
            l.class ? (ae(), le("div", Wv, [
              e[12] || (e[12] = F("span", { class: "-label" }, "Width", -1)),
              rt(F("select", {
                "onUpdate:modelValue": (f) => l.class = f
              }, e[11] || (e[11] = [
                F("option", { value: "w-full" }, "Full", -1),
                F("option", { value: "w-1/2" }, "Half", -1)
              ]), 8, Yv), [
                [Jr, l.class]
              ])
            ])) : ke("", !0)
          ], 64)) : (ae(), le(At, { key: 3 }, [
            ["check-group", "radio-group", "signature", "file-upload"].includes(l.type) ? (ae(), le("div", Kv, [
              F("div", Xv, [
                e[13] || (e[13] = F("span", { class: "-label" }, "Label", -1)),
                rt(F("input", {
                  type: "text",
                  "onUpdate:modelValue": (f) => l.label = f
                }, null, 8, Jv), [
                  [Et, l.label]
                ])
              ]),
              l.class ? (ae(), le("div", Qv, [
                e[15] || (e[15] = F("span", { class: "-label" }, "Width", -1)),
                rt(F("select", {
                  "onUpdate:modelValue": (f) => l.class = f
                }, e[14] || (e[14] = [
                  F("option", { value: "w-full" }, "Full", -1),
                  F("option", { value: "w-1/2" }, "Half", -1)
                ]), 8, Zv), [
                  [Jr, l.class]
                ])
              ])) : ke("", !0)
            ])) : (ae(), le(At, { key: 1 }, [
              F("div", qv, [
                F("span", _v, Ge(l.type === "heading" ? "Heading" : "Label"), 1),
                rt(F("input", {
                  type: "text",
                  "onUpdate:modelValue": (f) => l.label = f
                }, null, 8, em), [
                  [Et, l.label]
                ])
              ]),
              F("div", tm, [
                l.placeholder !== null ? (ae(), le("div", nm, [
                  e[16] || (e[16] = F("span", { class: "-label" }, "Placeholder", -1)),
                  rt(F("input", {
                    type: "text",
                    "onUpdate:modelValue": (f) => l.placeholder = f
                  }, null, 8, rm), [
                    [Et, l.placeholder]
                  ])
                ])) : ke("", !0),
                l.class ? (ae(), le("div", om, [
                  e[18] || (e[18] = F("span", { class: "-label" }, "Width", -1)),
                  rt(F("select", {
                    "onUpdate:modelValue": (f) => l.class = f
                  }, e[17] || (e[17] = [
                    F("option", { value: "w-full" }, "Full", -1),
                    F("option", { value: "w-1/2" }, "Half", -1)
                  ]), 8, am), [
                    [Jr, l.class]
                  ])
                ])) : ke("", !0)
              ])
            ], 64)),
            l.hasOwnProperty("hint") ? (ae(), le("div", im, [
              e[19] || (e[19] = F("span", { class: "-label" }, "Hint Text", -1)),
              rt(F("input", {
                type: "text",
                "onUpdate:modelValue": (f) => l.hint = f
              }, null, 8, sm), [
                [Et, l.hint]
              ])
            ])) : ke("", !0),
            i.hasOptionsFieldTypes.includes(l.type) && l.options ? (ae(), le("div", lm, [
              F("div", um, [
                e[21] || (e[21] = F("span", { class: "-label mb-2 text-base font-semibold text-gray-900" }, "Options", -1)),
                F("div", cm, [
                  F("a", {
                    class: "cursor-pointer text-brand-700 flex items-center text-sm font-semibold mr-3.5 hover:bg-brand-50 py-1 px-2 gap-1 rounded",
                    onClick: tr((f) => c.onAddOption(l), ["prevent"])
                  }, e[20] || (e[20] = [
                    F("svg", {
                      width: "14",
                      height: "14",
                      viewBox: "0 0 14 14",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      F("path", {
                        d: "M6.99935 1.1665V12.8332M1.16602 6.99984H12.8327",
                        stroke: "#931C61",
                        "stroke-width": "1.66667",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ], -1),
                    Xt(" Add ")
                  ]), 8, dm)
                ])
              ]),
              ue(s, {
                list: l.options,
                class: "-added",
                "item-key": "id",
                group: { name: l.id, pull: !1, put: !1 },
                handle: ".option-handle"
              }, {
                item: wt(({ option: f, index: p }) => [
                  F("div", fm, [
                    e[23] || (e[23] = F("div", { class: "option-handle relative cursor-pointer" }, [
                      F("svg", {
                        class: "",
                        width: "8",
                        height: "13",
                        viewBox: "0 0 7 13",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        F("rect", {
                          x: "1",
                          y: "1",
                          width: "2",
                          height: "2",
                          fill: "#667085"
                        }),
                        F("rect", {
                          x: "4",
                          y: "1",
                          width: "2",
                          height: "2",
                          fill: "#667085"
                        }),
                        F("rect", {
                          x: "1",
                          y: "4",
                          width: "2",
                          height: "2",
                          fill: "#667085"
                        }),
                        F("rect", {
                          x: "4",
                          y: "4",
                          width: "2",
                          height: "2",
                          fill: "#667085"
                        }),
                        F("rect", {
                          x: "1",
                          y: "7",
                          width: "2",
                          height: "2",
                          fill: "#667085"
                        }),
                        F("rect", {
                          x: "1",
                          y: "10",
                          width: "2",
                          height: "2",
                          fill: "#667085"
                        }),
                        F("rect", {
                          x: "4",
                          y: "7",
                          width: "2",
                          height: "2",
                          fill: "#667085"
                        }),
                        F("rect", {
                          x: "4",
                          y: "10",
                          width: "2",
                          height: "2",
                          fill: "#667085"
                        })
                      ])
                    ], -1)),
                    rt(F("input", {
                      "onUpdate:modelValue": (h) => l.options[p] = h,
                      type: "text",
                      class: "mx-2 text-base text-gray-900"
                    }, null, 8, hm), [
                      [Et, l.options[p]]
                    ]),
                    F("a", {
                      class: "hover:bg-brand-50 rounded cursor-pointer py-1",
                      onClick: (h) => c.removeFieldOption(l, p)
                    }, e[22] || (e[22] = [
                      F("svg", {
                        width: "18",
                        height: "20",
                        viewBox: "0 0 14 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        F("path", {
                          d: "M9.66667 3.99992V3.46659C9.66667 2.71985 9.66667 2.34648 9.52134 2.06126C9.39351 1.81038 9.18954 1.60641 8.93865 1.47858C8.65344 1.33325 8.28007 1.33325 7.53333 1.33325H6.46667C5.71993 1.33325 5.34656 1.33325 5.06135 1.47858C4.81046 1.60641 4.60649 1.81038 4.47866 2.06126C4.33333 2.34648 4.33333 2.71985 4.33333 3.46659V3.99992M5.66667 7.66659V10.9999M8.33333 7.66659V10.9999M1 3.99992H13M11.6667 3.99992V11.4666C11.6667 12.5867 11.6667 13.1467 11.4487 13.5746C11.2569 13.9509 10.951 14.2569 10.5746 14.4486C10.1468 14.6666 9.58677 14.6666 8.46667 14.6666H5.53333C4.41323 14.6666 3.85318 14.6666 3.42535 14.4486C3.04903 14.2569 2.74307 13.9509 2.55132 13.5746C2.33333 13.1467 2.33333 12.5867 2.33333 11.4666V3.99992",
                          stroke: "#667085",
                          "stroke-width": "1.5",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ], -1)
                    ]), 8, pm)
                  ])
                ]),
                _: 2
              }, 1032, ["list", "group"])
            ])) : ke("", !0)
          ], 64))
        ])
      ], 2)
    ]),
    footer: wt(() => [
      r.disableDropzone ? ke("", !0) : (ae(), le("p", {
        key: 0,
        class: et(["absolute shadow-sm border border-dashed border-gray-300 border-spacing-96 mb-[96px] rounded-xl w-full h-36 bottom-0 z-0 flex items-center justify-center text-sm text-gray-600", { "h-[638px] !top-0": !i.localFields.length }])
      }, [
        r.isDragging ? ke("", !0) : (ae(), le("span", vm, "Drag a layout/component in"))
      ], 2))
    ]),
    _: 1
  }, 8, ["class", "modelValue"]);
}
const dl = /* @__PURE__ */ pt(xv, [["render", mm]]), gm = {
  name: "FormBuilder",
  inject: ["bus"],
  components: {
    FieldDraggable: dl,
    VForm: rp,
    draggable: Qa,
    VModal: fp
  },
  props: {
    name: String,
    form: {
      type: String,
      default: () => "{}"
    },
    redirectUrl: String,
    storeUrl: String
  },
  created() {
    this.localForm = JSON.parse(this.form), this.localForm.hasOwnProperty("id") && (this.title = this.localForm.title, this.id = this.localForm.id, this.fields = this.localForm.fields);
  },
  data() {
    return {
      isDragging: !1,
      loading: !1,
      localForm: {},
      id: null,
      title: null,
      fields: [],
      errors: [],
      showPreview: !1,
      hasOptionsFieldTypes: ["select", "check-group", "radio-group"],
      templates: [
        {
          name: "grid",
          type: "grid",
          label: "Grid",
          hint: "Input your supporting text here",
          icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.06065 5.99992C6.21739 5.55436 6.52675 5.17866 6.93395 4.93934C7.34116 4.70002 7.81991 4.61254 8.28544 4.69239C8.75096 4.77224 9.1732 5.01427 9.47737 5.3756C9.78154 5.73694 9.94802 6.19427 9.94732 6.66659C9.94732 7.99992 7.94732 8.66659 7.94732 8.66659M8.00065 11.3333H8.00732M14.6673 7.99992C14.6673 11.6818 11.6826 14.6666 8.00065 14.6666C4.31875 14.6666 1.33398 11.6818 1.33398 7.99992C1.33398 4.31802 4.31875 1.33325 8.00065 1.33325C11.6826 1.33325 14.6673 4.31802 14.6673 7.99992Z" stroke="#98A2B3" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
          tooltip_text: "Use a grid for multiple columns and/or rows.",
          allow_add_row: !0
        },
        {
          name: "heading",
          type: "heading",
          label: "Heading",
          placeholder: null
        },
        {
          name: "paragraph",
          type: "paragraph",
          label: "Paragraph",
          content: "Paragraph",
          content_type: "p",
          class: ""
        },
        {
          name: "text",
          type: "text",
          label: "Input Field",
          hint: null,
          class: "w-full",
          placeholder: "Text",
          required: !0
        },
        {
          name: "textarea",
          type: "textarea",
          label: "Text Area",
          hint: null,
          class: "w-full",
          placeholder: "Textarea",
          required: !0
        },
        {
          name: "number",
          type: "number",
          label: "Number",
          hint: null,
          class: "w-full",
          placeholder: "Number",
          required: !0
        },
        {
          name: "address",
          type: "address",
          label: "Address",
          hint: null,
          class: "w-full",
          placeholder: "Enter your address",
          required: !0
        },
        {
          name: "datepicker",
          type: "datepicker",
          label: "Date Picker",
          hint: null,
          class: "w-full",
          placeholder: "Select date",
          required: !0
        },
        {
          name: "select",
          type: "select",
          label: "Select",
          hint: null,
          class: "w-full",
          placeholder: "Select an Option",
          options: ["Option 1"],
          required: !0
        },
        {
          name: "checkbox",
          type: "checkbox",
          label: "Single Checkbox",
          hint: null,
          class: "w-full",
          placeholder: null,
          required: !0
        },
        {
          name: "check-group",
          type: "check-group",
          label: "Checkbox Group",
          class: "w-full",
          placeholder: null,
          options: ["Option 1"],
          required: !0
        },
        {
          name: "radio-group",
          type: "radio-group",
          label: "Radio Button Group",
          class: "w-full",
          placeholder: null,
          options: ["Option 1"],
          required: !0
        },
        {
          name: "signature",
          type: "signature",
          label: "Signature",
          class: "w-full",
          placeholder: null,
          required: !0
        },
        {
          name: "file-upload",
          type: "file-upload",
          label: "File Upload",
          class: "w-full",
          required: !0
        }
      ]
    };
  },
  watch: {
    title(t, e) {
      t !== e && (this.errors = []);
    }
  },
  methods: {
    close() {
      window.location.href = this.redirectUrl;
    },
    save(t = null) {
      this.loading || (this.loading = !0, console.log(JSON.stringify(this.fields)), ht.post(this.storeUrl, this.formPayload(t)).then((e) => {
        setTimeout(() => {
          window.location.href = this.redirectUrl;
        }, 500);
      }).catch((e) => {
        var r, a;
        this.loading = !1, this.errors = (a = (r = e.response) == null ? void 0 : r.data) == null ? void 0 : a.errors;
      }));
    },
    onDragStart() {
      this.isDragging = !0;
    },
    onDragEnd() {
      this.isDragging = !1;
    },
    handleShowPreview() {
      this.showPreview = !this.showPreview;
    },
    uniqueId() {
      return Math.floor(Math.random() * Date.now());
    },
    cloneTemplate(t) {
      let e = this.uniqueId(), r = {
        id: e,
        name: `${t.type}_${e}`,
        type: t.type,
        label: t.label,
        options: t.options
      };
      return ["hint", "placeholder", "class", "content", "content_type", "allow_add_row"].forEach((i) => {
        t.hasOwnProperty(i) && (r[i] = t[i]);
      }), t.hasOwnProperty("content") && (r.content = t.content, r.content_type = t.content_type), t.hasOwnProperty("required") && (r.required = t.required), r;
    },
    addFieldToBottom(t) {
      let e = this.cloneTemplate(t);
      this.fields.push(e);
    },
    formPayload(t = null) {
      return {
        title: this.title,
        fields: this.fields,
        ...this.id && { id: this.id },
        ...t && { status: t }
      };
    },
    cFirst(t) {
      return t ? t.charAt(0).toUpperCase() + t.slice(1) : "";
    }
  },
  computed: {
    valueJson() {
      var t;
      return JSON.stringify({
        title: this.title,
        status: (t = this.form) == null ? void 0 : t.status,
        fields: this.fields.map((e) => {
          let r = {
            id: e.id,
            name: e.name,
            type: e.type,
            label: e.label,
            placeholder: e.placeholder,
            class: e.class,
            options: [...e.options || []]
          };
          return e.hasOwnProperty("content") && (r.content = e.content, r.content_type = e.content_type), e.hasOwnProperty("required") && (r.required = e.required), r;
        })
      });
    }
  }
}, ym = { class: "flex gap-4 mb-1 px-6 items-center" }, bm = ["href"], xm = ["textContent"], Sm = { class: "flex justify-between items-center mb-6 px-6" }, Em = { class: "text-gray-900 text-[30px] font-semibold" }, wm = {
  key: 0,
  class: "flex gap-1 items-center"
}, Tm = {
  key: 1,
  class: "flex gap-1 items-center"
}, Am = ["name", "value"], Cm = {
  key: 0,
  class: "form-builder-preview-container px-6"
}, Om = {
  key: 0,
  class: "pb-6 text-xl font-semibold text-gray-900"
}, Pm = { class: "form-builder-preview" }, Im = {
  key: 1,
  class: "form-builder-container px-6"
}, Rm = { class: "flex" }, Dm = { class: "form-builder" }, Fm = { class: "form-builder-fields" }, Mm = { class: "settings" }, Lm = {
  key: 0,
  class: "text-red-600 text-sm mt-0.5 inline-block"
}, Um = { class: "flex w-1/3 flex-col" }, Nm = {
  key: 0,
  class: "p-6 mb-4 bg-gray-50 shadow-sm rounded-xl"
}, jm = { class: "space-y-3" }, km = {
  width: "6",
  height: "6",
  viewBox: "0 0 6 6",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Bm = ["fill"], $m = {
  key: 0,
  class: "flex flex-col text-sm font-regular text-gray-900 gap-1"
}, Vm = { class: "text-base" }, Hm = { class: "flex flex-col text-sm font-regular text-gray-900 gap-1" }, zm = { class: "text-base" }, Gm = { class: "form-builder-templates overflow-y-auto" }, Wm = ["onClick"], Ym = { class: "relative group" }, Km = ["innerHTML"], Xm = { class: "absolute hidden group-hover:block bg-black text-white text-sm rounded px-4 py-2 -top-16 left-0 w-[200px]" }, Jm = {
  key: 2,
  class: "fixed bottom-0 flex justify-between text-sm font-semibold w-fill py-2 px-6 z-50 bg-gray-200"
}, Qm = { class: "flex justify-end gap-2" }, Zm = { key: 0 }, qm = {
  key: 1,
  class: "flex items-center gap-2"
}, _m = { key: 0 }, eg = {
  key: 1,
  class: "flex items-center gap-2"
};
function tg(t, e, r, a, i, c) {
  var l;
  const n = Pt("v-modal"), u = Pt("v-form"), o = Pt("field-draggable"), s = Pt("draggable");
  return ae(), le(At, null, [
    ue(n),
    F("div", ym, [
      F("a", {
        href: r.redirectUrl,
        class: "cursor-pointer"
      }, " Form ", 8, bm),
      e[7] || (e[7] = Xt(" / ")),
      F("span", {
        class: "text-sm font-semibold",
        textContent: Ge(i.title ? i.title : i.showPreview ? "Preview" : "Add New Form")
      }, null, 8, xm)
    ]),
    F("div", Sm, [
      F("h4", Em, Ge(i.showPreview ? "Preview" : i.title ? i.title : "Add New Form"), 1),
      F("a", {
        class: "inline-block rounded-full px-3 py-2 cursor-pointer text-sm text-gray-700 font-semibold border border-gray-300 hover:bg-gray-200",
        onClick: e[0] || (e[0] = (...d) => c.handleShowPreview && c.handleShowPreview(...d))
      }, [
        i.showPreview ? (ae(), le("span", Tm, e[9] || (e[9] = [
          F("svg", {
            width: "19",
            height: "19",
            viewBox: "0 0 19 19",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            F("path", {
              d: "M1.08398 17.9166L5.70838 16.138C6.00416 16.0242 6.15205 15.9673 6.29042 15.8931C6.41332 15.8271 6.53048 15.751 6.64068 15.6654C6.76475 15.5692 6.8768 15.4571 7.10088 15.233L16.5007 5.83326C17.4211 4.91279 17.4211 3.4204 16.5007 2.49993C15.5802 1.57945 14.0878 1.57945 13.1673 2.49992L3.76755 11.8997C3.54346 12.1238 3.43142 12.2358 3.33514 12.3599C3.24963 12.4701 3.17349 12.5873 3.10751 12.7102C3.03324 12.8485 2.97636 12.9964 2.86259 13.2922L1.08398 17.9166ZM1.08398 17.9166L2.79908 13.4574C2.92182 13.1383 2.98318 12.9787 3.08843 12.9057C3.18042 12.8418 3.29424 12.8176 3.40423 12.8386C3.5301 12.8627 3.65097 12.9836 3.89272 13.2253L5.7753 15.1079C6.01704 15.3496 6.13792 15.4705 6.16196 15.5964C6.18296 15.7064 6.15881 15.8202 6.09494 15.9122C6.02186 16.0174 5.86231 16.0788 5.54321 16.2015L1.08398 17.9166Z",
              stroke: "#344054",
              "stroke-width": "1.66667",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            })
          ], -1),
          Xt(" Edit ")
        ]))) : (ae(), le("span", wm, e[8] || (e[8] = [
          F("svg", {
            width: "20",
            height: "14",
            viewBox: "0 0 20 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            F("path", {
              d: "M2.01677 7.5944C1.90328 7.4147 1.84654 7.32485 1.81477 7.18626C1.79091 7.08216 1.79091 6.918 1.81477 6.8139C1.84654 6.67532 1.90328 6.58547 2.01677 6.40577C2.95461 4.92078 5.74617 1.16675 10.0003 1.16675C14.2545 1.16675 17.0461 4.92078 17.9839 6.40577C18.0974 6.58547 18.1541 6.67532 18.1859 6.8139C18.2098 6.918 18.2098 7.08216 18.1859 7.18626C18.1541 7.32485 18.0974 7.4147 17.9839 7.5944C17.0461 9.07938 14.2545 12.8334 10.0003 12.8334C5.74617 12.8334 2.95461 9.07938 2.01677 7.5944Z",
              stroke: "#344054",
              "stroke-width": "1.66667",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }),
            F("path", {
              d: "M10.0003 9.50008C11.381 9.50008 12.5003 8.38079 12.5003 7.00008C12.5003 5.61937 11.381 4.50008 10.0003 4.50008C8.61962 4.50008 7.50034 5.61937 7.50034 7.00008C7.50034 8.38079 8.61962 9.50008 10.0003 9.50008Z",
              stroke: "#344054",
              "stroke-width": "1.66667",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            })
          ], -1),
          Xt(" Preview ")
        ])))
      ])
    ]),
    F("input", {
      type: "hidden",
      name: r.name,
      value: c.valueJson
    }, null, 8, Am),
    i.showPreview ? (ae(), le("div", Cm, [
      i.title ? (ae(), le("p", Om, Ge(i.title), 1)) : ke("", !0),
      F("div", Pm, [
        ue(u, {
          action: "#",
          method: "get",
          form: { fields: i.fields },
          preview: !0,
          editable: !0,
          "can-interact": i.showPreview
        }, null, 8, ["form", "can-interact"])
      ])
    ])) : (ae(), le("div", Im, [
      F("div", Rm, [
        F("div", Dm, [
          F("div", Fm, [
            F("div", Mm, [
              e[11] || (e[11] = F("h3", null, "Settings", -1)),
              F("div", null, [
                e[10] || (e[10] = F("p", { class: "mb-1" }, "Form Title *", -1)),
                rt(F("input", {
                  type: "text",
                  placeholder: "Enter your form name",
                  "onUpdate:modelValue": e[1] || (e[1] = (d) => i.title = d)
                }, null, 512), [
                  [Et, i.title]
                ]),
                (l = i.errors) != null && l.title ? (ae(), le("span", Lm, Ge(i.errors.title[0]), 1)) : ke("", !0)
              ])
            ]),
            F("div", {
              class: et(["fields", { "overflow-y-auto": !i.showPreview }])
            }, [
              e[12] || (e[12] = F("h3", null, "Form", -1)),
              F("div", {
                class: et(["draggable", { "!border-none !shadow-none": i.fields.length }])
              }, [
                ue(o, {
                  modelValue: i.fields,
                  "onUpdate:modelValue": e[2] || (e[2] = (d) => i.fields = d),
                  "is-dragging": i.isDragging
                }, null, 8, ["modelValue", "is-dragging"])
              ], 2)
            ], 2)
          ]),
          F("div", Um, [
            i.id ? (ae(), le("div", Nm, [
              e[15] || (e[15] = F("p", { class: "mb-5" }, "Status", -1)),
              F("div", jm, [
                F("div", {
                  class: et(["pr-3 py-1 text-sm text-gray-700 border font-medium border-warning-200 bg-warning-50 text-warning-700 rounded-full flex w-fit items-center", { "!text-success-700 !bg-success-50 !border-success-200": i.localForm.status === "published" }])
                }, [
                  (ae(), le("svg", km, [
                    F("circle", {
                      cx: "3",
                      cy: "3",
                      r: "3",
                      fill: i.localForm.status === "published" ? "#17B26A" : "#F79009"
                    }, null, 8, Bm)
                  ])),
                  Xt(" " + Ge(c.cFirst(i.localForm.status)), 1)
                ], 2),
                i.localForm.status === "published" ? (ae(), le("div", $m, [
                  e[13] || (e[13] = F("label", null, " Published ", -1)),
                  F("label", Vm, Ge(i.localForm.formatted_published_at), 1)
                ])) : ke("", !0),
                F("div", Hm, [
                  e[14] || (e[14] = F("label", null, " Last Modified ", -1)),
                  F("label", zm, Ge(i.localForm.last_modified), 1)
                ])
              ])
            ])) : ke("", !0),
            F("div", Gm, [
              e[16] || (e[16] = F("div", { class: "heading" }, [
                F("h3", null, "Select layouts/components"),
                F("p", null, "Click and/or drag a field to the left")
              ], -1)),
              ue(s, {
                "item-key": "id",
                modelValue: i.templates,
                "onUpdate:modelValue": e[3] || (e[3] = (d) => i.templates = d),
                clone: c.cloneTemplate,
                group: { name: "fields", pull: "clone", put: !1 },
                onStart: c.onDragStart,
                onEnd: c.onDragEnd,
                class: "components"
              }, {
                item: wt(({ element: d }) => [
                  (ae(), le("li", {
                    class: "flex gap-1 flex-row items-center",
                    key: d.name,
                    onClick: (f) => c.addFieldToBottom(d)
                  }, [
                    Xt(Ge(d.label) + " ", 1),
                    F("div", Ym, [
                      d.icon ? (ae(), le("span", {
                        key: 0,
                        innerHTML: d.icon
                      }, null, 8, Km)) : ke("", !0),
                      F("div", Xm, Ge(d.tooltip_text), 1)
                    ])
                  ], 8, Wm))
                ]),
                _: 1
              }, 8, ["modelValue", "clone", "onStart", "onEnd"]),
              gn(t.$slots, "default", {}, void 0, !0)
            ])
          ])
        ])
      ])
    ])),
    i.showPreview ? ke("", !0) : (ae(), le("div", Jm, [
      F("a", {
        onClick: e[4] || (e[4] = (...d) => c.close && c.close(...d)),
        class: "cursor-pointer text-error-500 hover:text-error-700 flex items-center"
      }, "Discard"),
      F("div", Qm, [
        F("a", {
          onClick: e[5] || (e[5] = tr((d) => c.save("draft"), ["prevent"])),
          class: "rounded-full cursor-pointer border border-brand-300 text-brand-700 hover:bg-brand-700 hover:text-white px-3 py-2"
        }, [
          i.loading ? (ae(), le("span", qm, e[17] || (e[17] = [
            F("svg", {
              class: "animate-spin h-5 w-5 text-white",
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24"
            }, [
              F("circle", {
                class: "opacity-25",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                "stroke-width": "4"
              }),
              F("path", {
                class: "opacity-75",
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              })
            ], -1)
          ]))) : (ae(), le("span", Zm, " Save as draft "))
        ]),
        F("a", {
          onClick: e[6] || (e[6] = tr((d) => c.save("published"), ["prevent"])),
          class: "rounded-full cursor-pointer bg-brand-400 hover:bg-brand-700 text-white px-3 py-2"
        }, [
          i.loading ? (ae(), le("span", eg, e[18] || (e[18] = [
            F("svg", {
              class: "animate-spin h-5 w-5 text-white",
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24"
            }, [
              F("circle", {
                class: "opacity-25",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                "stroke-width": "4"
              }),
              F("path", {
                class: "opacity-75",
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              })
            ], -1)
          ]))) : (ae(), le("span", _m, " Publish "))
        ])
      ])
    ]))
  ], 64);
}
const Pg = /* @__PURE__ */ pt(gm, [["render", tg], ["__scopeId", "data-v-732600da"]]), ng = {
  name: "EditFieldGrid",
  inject: ["bus"],
  components: { FieldDraggable: dl },
  props: {
    fields: {
      type: Array,
      default: () => []
    },
    index: {
      type: Number,
      required: !0
    }
  },
  watch: {},
  data() {
    return {
      localFields: this.fields.flat(),
      active: !1
    };
  },
  methods: {
    close() {
      var t;
      (t = this.bus) == null || t.$emit("closeModal");
    },
    confirm() {
      const t = this.fields.map(
        (e) => e.filter(
          (r) => this.localFields.some((a) => a.id === r.id)
        )
      );
      this.$emit("confirm", t);
    }
  }
}, rg = { class: "p-6 w-[776px]" }, og = { class: "fields" }, ag = { class: "draggable" }, ig = { class: "mb-[20px] text-lg font-semibold text-gray-900" }, sg = { class: "fixed -bottom-8 right-0 flex justify-end gap-2 text-sm font-semibold bg-white w-full py-2 px-6 rounded-b-lg z-50" };
function lg(t, e, r, a, i, c) {
  const n = Pt("field-draggable");
  return ae(), le("div", rg, [
    F("div", og, [
      F("div", ag, [
        F("h4", ig, "Row " + Ge(r.index + 1) + ": multiple columns", 1),
        ue(n, {
          modelValue: i.localFields,
          "onUpdate:modelValue": e[0] || (e[0] = (u) => i.localFields = u),
          "disable-dropzone": ""
        }, null, 8, ["modelValue"])
      ]),
      F("div", sg, [
        F("a", {
          onClick: e[1] || (e[1] = (...u) => c.close && c.close(...u)),
          class: "rounded-full cursor-pointer px-3 py-2 border hover:bg-gray-200"
        }, "Cancel"),
        F("a", {
          onClick: e[2] || (e[2] = tr((...u) => c.confirm && c.confirm(...u), ["prevent"])),
          class: "rounded-full cursor-pointer bg-brand-400 hover:bg-brand-700 text-white px-3 py-2"
        }, "Save changes")
      ])
    ])
  ]);
}
const Ig = /* @__PURE__ */ pt(ng, [["render", lg]]);
export {
  Ig as EditFieldGrid,
  Pg as FormBuilder,
  rp as VForm
};
