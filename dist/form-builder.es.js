import * as Wl from "vue";
import { createElementBlock as se, openBlock as oe, createCommentVNode as je, Fragment as Ot, renderList as Pn, withDirectives as nt, createElementVNode as N, normalizeClass as et, vModelDynamic as Aa, toDisplayString as We, resolveDirective as es, vModelText as St, defineComponent as Yl, ref as _e, onMounted as mo, onUnmounted as Kl, createVNode as ie, inject as Ca, watchEffect as Kt, watch as Oa, computed as rn, toRef as Xl, shallowRef as Jl, provide as Do, isVNode as Ql, Teleport as Zl, Transition as Pa, h as ci, resolveComponent as ln, createBlock as un, renderSlot as bn, withCtx as Et, resolveDynamicComponent as Hn, createTextVNode as tn, toRaw as di, markRaw as kt, normalizeProps as ts, mergeProps as Ra, normalizeStyle as ql, withModifiers as rr, vShow as _l, unref as _t, vModelSelect as Qr, reactive as eu, getCurrentInstance as tu } from "vue";
const fn = {
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
}, mt = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [a, i] of e)
    r[a] = i;
  return r;
}, nu = {
  name: "CheckGroup",
  mixins: [fn],
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
}, ru = { class: "-options" }, ou = { class: "cursor-pointer" }, au = ["type", "name", "value", "disabled"], iu = {
  key: 0,
  class: "inline-block text-sm text-gray-600 mt-1.5 brand-200"
};
function su(t, e, r, a, i, d) {
  var n;
  return oe(), se("div", ru, [
    (oe(!0), se(Ot, null, Pn(r.options, (l) => (oe(), se("label", ou, [
      nt(N("input", {
        type: d.inputType,
        name: d.inputName,
        value: l,
        "onUpdate:modelValue": e[0] || (e[0] = (o) => i.input = o),
        disabled: !t.editable,
        class: et({ "[&]:checked:bg-brand-600 [&]:hover:bg-brand-600 [&]:checked:hover:bg-brand-600 [&]:focus:bg-brand-600 [&]:focus:ring-brand-600 [&]:focus:checked:bg-brand-600 !rounded-full": r.type === "radio-group" })
      }, null, 10, au), [
        [Aa, i.input]
      ]),
      N("span", null, We(l), 1)
    ]))), 256)),
    (n = r.field) != null && n.hint ? (oe(), se("p", iu, We(r.field.hint), 1)) : je("", !0)
  ]);
}
const go = /* @__PURE__ */ mt(nu, [["render", su]]);
function ns(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: lu } = Object.prototype, { getPrototypeOf: Ia } = Object, { iterator: Fo, toStringTag: rs } = Symbol, Mo = /* @__PURE__ */ ((t) => (e) => {
  const r = lu.call(e);
  return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), on = (t) => (t = t.toLowerCase(), (e) => Mo(e) === t), Lo = (t) => (e) => typeof e === t, { isArray: ar } = Array, Pr = Lo("undefined");
function uu(t) {
  return t !== null && !Pr(t) && t.constructor !== null && !Pr(t.constructor) && Ut(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const os = on("ArrayBuffer");
function cu(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && os(t.buffer), e;
}
const du = Lo("string"), Ut = Lo("function"), as = Lo("number"), Uo = (t) => t !== null && typeof t == "object", fu = (t) => t === !0 || t === !1, io = (t) => {
  if (Mo(t) !== "object")
    return !1;
  const e = Ia(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(rs in t) && !(Fo in t);
}, hu = on("Date"), pu = on("File"), vu = on("Blob"), mu = on("FileList"), gu = (t) => Uo(t) && Ut(t.pipe), yu = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || Ut(t.append) && ((e = Mo(t)) === "formdata" || // detect form-data instance
  e === "object" && Ut(t.toString) && t.toString() === "[object FormData]"));
}, bu = on("URLSearchParams"), [xu, Su, Eu, wu] = ["ReadableStream", "Request", "Response", "Headers"].map(on), Tu = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ir(t, e, { allOwnKeys: r = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let a, i;
  if (typeof t != "object" && (t = [t]), ar(t))
    for (a = 0, i = t.length; a < i; a++)
      e.call(null, t[a], a, t);
  else {
    const d = r ? Object.getOwnPropertyNames(t) : Object.keys(t), n = d.length;
    let l;
    for (a = 0; a < n; a++)
      l = d[a], e.call(null, t[l], l, t);
  }
}
function is(t, e) {
  e = e.toLowerCase();
  const r = Object.keys(t);
  let a = r.length, i;
  for (; a-- > 0; )
    if (i = r[a], e === i.toLowerCase())
      return i;
  return null;
}
const $n = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, ss = (t) => !Pr(t) && t !== $n;
function fa() {
  const { caseless: t } = ss(this) && this || {}, e = {}, r = (a, i) => {
    const d = t && is(e, i) || i;
    io(e[d]) && io(a) ? e[d] = fa(e[d], a) : io(a) ? e[d] = fa({}, a) : ar(a) ? e[d] = a.slice() : e[d] = a;
  };
  for (let a = 0, i = arguments.length; a < i; a++)
    arguments[a] && Ir(arguments[a], r);
  return e;
}
const Au = (t, e, r, { allOwnKeys: a } = {}) => (Ir(e, (i, d) => {
  r && Ut(i) ? t[d] = ns(i, r) : t[d] = i;
}, { allOwnKeys: a }), t), Cu = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), Ou = (t, e, r, a) => {
  t.prototype = Object.create(e.prototype, a), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), r && Object.assign(t.prototype, r);
}, Pu = (t, e, r, a) => {
  let i, d, n;
  const l = {};
  if (e = e || {}, t == null) return e;
  do {
    for (i = Object.getOwnPropertyNames(t), d = i.length; d-- > 0; )
      n = i[d], (!a || a(n, t, e)) && !l[n] && (e[n] = t[n], l[n] = !0);
    t = r !== !1 && Ia(t);
  } while (t && (!r || r(t, e)) && t !== Object.prototype);
  return e;
}, Ru = (t, e, r) => {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
  const a = t.indexOf(e, r);
  return a !== -1 && a === r;
}, Iu = (t) => {
  if (!t) return null;
  if (ar(t)) return t;
  let e = t.length;
  if (!as(e)) return null;
  const r = new Array(e);
  for (; e-- > 0; )
    r[e] = t[e];
  return r;
}, Du = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && Ia(Uint8Array)), Fu = (t, e) => {
  const a = (t && t[Fo]).call(t);
  let i;
  for (; (i = a.next()) && !i.done; ) {
    const d = i.value;
    e.call(t, d[0], d[1]);
  }
}, Mu = (t, e) => {
  let r;
  const a = [];
  for (; (r = t.exec(e)) !== null; )
    a.push(r);
  return a;
}, Lu = on("HTMLFormElement"), Uu = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, a, i) {
    return a.toUpperCase() + i;
  }
), fi = (({ hasOwnProperty: t }) => (e, r) => t.call(e, r))(Object.prototype), Nu = on("RegExp"), ls = (t, e) => {
  const r = Object.getOwnPropertyDescriptors(t), a = {};
  Ir(r, (i, d) => {
    let n;
    (n = e(i, d, t)) !== !1 && (a[d] = n || i);
  }), Object.defineProperties(t, a);
}, ju = (t) => {
  ls(t, (e, r) => {
    if (Ut(t) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const a = t[r];
    if (Ut(a)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, ku = (t, e) => {
  const r = {}, a = (i) => {
    i.forEach((d) => {
      r[d] = !0;
    });
  };
  return ar(t) ? a(t) : a(String(t).split(e)), r;
}, $u = () => {
}, Bu = (t, e) => t != null && Number.isFinite(t = +t) ? t : e;
function Vu(t) {
  return !!(t && Ut(t.append) && t[rs] === "FormData" && t[Fo]);
}
const Hu = (t) => {
  const e = new Array(10), r = (a, i) => {
    if (Uo(a)) {
      if (e.indexOf(a) >= 0)
        return;
      if (!("toJSON" in a)) {
        e[i] = a;
        const d = ar(a) ? [] : {};
        return Ir(a, (n, l) => {
          const o = r(n, i + 1);
          !Pr(o) && (d[l] = o);
        }), e[i] = void 0, d;
      }
    }
    return a;
  };
  return r(t, 0);
}, zu = on("AsyncFunction"), Gu = (t) => t && (Uo(t) || Ut(t)) && Ut(t.then) && Ut(t.catch), us = ((t, e) => t ? setImmediate : e ? ((r, a) => ($n.addEventListener("message", ({ source: i, data: d }) => {
  i === $n && d === r && a.length && a.shift()();
}, !1), (i) => {
  a.push(i), $n.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  Ut($n.postMessage)
), Wu = typeof queueMicrotask < "u" ? queueMicrotask.bind($n) : typeof process < "u" && process.nextTick || us, Yu = (t) => t != null && Ut(t[Fo]), ne = {
  isArray: ar,
  isArrayBuffer: os,
  isBuffer: uu,
  isFormData: yu,
  isArrayBufferView: cu,
  isString: du,
  isNumber: as,
  isBoolean: fu,
  isObject: Uo,
  isPlainObject: io,
  isReadableStream: xu,
  isRequest: Su,
  isResponse: Eu,
  isHeaders: wu,
  isUndefined: Pr,
  isDate: hu,
  isFile: pu,
  isBlob: vu,
  isRegExp: Nu,
  isFunction: Ut,
  isStream: gu,
  isURLSearchParams: bu,
  isTypedArray: Du,
  isFileList: mu,
  forEach: Ir,
  merge: fa,
  extend: Au,
  trim: Tu,
  stripBOM: Cu,
  inherits: Ou,
  toFlatObject: Pu,
  kindOf: Mo,
  kindOfTest: on,
  endsWith: Ru,
  toArray: Iu,
  forEachEntry: Fu,
  matchAll: Mu,
  isHTMLForm: Lu,
  hasOwnProperty: fi,
  hasOwnProp: fi,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ls,
  freezeMethods: ju,
  toObjectSet: ku,
  toCamelCase: Uu,
  noop: $u,
  toFiniteNumber: Bu,
  findKey: is,
  global: $n,
  isContextDefined: ss,
  isSpecCompliantForm: Vu,
  toJSONObject: Hu,
  isAsyncFn: zu,
  isThenable: Gu,
  setImmediate: us,
  asap: Wu,
  isIterable: Yu
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
const cs = Ye.prototype, ds = {};
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
  ds[t] = { value: t };
});
Object.defineProperties(Ye, ds);
Object.defineProperty(cs, "isAxiosError", { value: !0 });
Ye.from = (t, e, r, a, i, d) => {
  const n = Object.create(cs);
  return ne.toFlatObject(t, n, function(o) {
    return o !== Error.prototype;
  }, (l) => l !== "isAxiosError"), Ye.call(n, t.message, e, r, a, i), n.cause = t, n.name = t.name, d && Object.assign(n, d), n;
};
const Ku = null;
function ha(t) {
  return ne.isPlainObject(t) || ne.isArray(t);
}
function fs(t) {
  return ne.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function hi(t, e, r) {
  return t ? t.concat(e).map(function(i, d) {
    return i = fs(i), !r && d ? "[" + i + "]" : i;
  }).join(r ? "." : "") : e;
}
function Xu(t) {
  return ne.isArray(t) && !t.some(ha);
}
const Ju = ne.toFlatObject(ne, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function No(t, e, r) {
  if (!ne.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), r = ne.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(v, m) {
    return !ne.isUndefined(m[v]);
  });
  const a = r.metaTokens, i = r.visitor || u, d = r.dots, n = r.indexes, o = (r.Blob || typeof Blob < "u" && Blob) && ne.isSpecCompliantForm(e);
  if (!ne.isFunction(i))
    throw new TypeError("visitor must be a function");
  function s(h) {
    if (h === null) return "";
    if (ne.isDate(h))
      return h.toISOString();
    if (ne.isBoolean(h))
      return h.toString();
    if (!o && ne.isBlob(h))
      throw new Ye("Blob is not supported. Use a Buffer instead.");
    return ne.isArrayBuffer(h) || ne.isTypedArray(h) ? o && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function u(h, v, m) {
    let g = h;
    if (h && !m && typeof h == "object") {
      if (ne.endsWith(v, "{}"))
        v = a ? v : v.slice(0, -2), h = JSON.stringify(h);
      else if (ne.isArray(h) && Xu(h) || (ne.isFileList(h) || ne.endsWith(v, "[]")) && (g = ne.toArray(h)))
        return v = fs(v), g.forEach(function(E, w) {
          !(ne.isUndefined(E) || E === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            n === !0 ? hi([v], w, d) : n === null ? v : v + "[]",
            s(E)
          );
        }), !1;
    }
    return ha(h) ? !0 : (e.append(hi(m, v, d), s(h)), !1);
  }
  const c = [], f = Object.assign(Ju, {
    defaultVisitor: u,
    convertValue: s,
    isVisitable: ha
  });
  function p(h, v) {
    if (!ne.isUndefined(h)) {
      if (c.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      c.push(h), ne.forEach(h, function(g, y) {
        (!(ne.isUndefined(g) || g === null) && i.call(
          e,
          g,
          ne.isString(y) ? y.trim() : y,
          v,
          f
        )) === !0 && p(g, v ? v.concat(y) : [y]);
      }), c.pop();
    }
  }
  if (!ne.isObject(t))
    throw new TypeError("data must be an object");
  return p(t), e;
}
function pi(t) {
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
function Da(t, e) {
  this._pairs = [], t && No(t, this, e);
}
const hs = Da.prototype;
hs.append = function(e, r) {
  this._pairs.push([e, r]);
};
hs.toString = function(e) {
  const r = e ? function(a) {
    return e.call(this, a, pi);
  } : pi;
  return this._pairs.map(function(i) {
    return r(i[0]) + "=" + r(i[1]);
  }, "").join("&");
};
function Qu(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ps(t, e, r) {
  if (!e)
    return t;
  const a = r && r.encode || Qu;
  ne.isFunction(r) && (r = {
    serialize: r
  });
  const i = r && r.serialize;
  let d;
  if (i ? d = i(e, r) : d = ne.isURLSearchParams(e) ? e.toString() : new Da(e, r).toString(a), d) {
    const n = t.indexOf("#");
    n !== -1 && (t = t.slice(0, n)), t += (t.indexOf("?") === -1 ? "?" : "&") + d;
  }
  return t;
}
class vi {
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
const vs = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Zu = typeof URLSearchParams < "u" ? URLSearchParams : Da, qu = typeof FormData < "u" ? FormData : null, _u = typeof Blob < "u" ? Blob : null, ec = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Zu,
    FormData: qu,
    Blob: _u
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Fa = typeof window < "u" && typeof document < "u", pa = typeof navigator == "object" && navigator || void 0, tc = Fa && (!pa || ["ReactNative", "NativeScript", "NS"].indexOf(pa.product) < 0), nc = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", rc = Fa && window.location.href || "http://localhost", oc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Fa,
  hasStandardBrowserEnv: tc,
  hasStandardBrowserWebWorkerEnv: nc,
  navigator: pa,
  origin: rc
}, Symbol.toStringTag, { value: "Module" })), Tt = {
  ...oc,
  ...ec
};
function ac(t, e) {
  return No(t, new Tt.classes.URLSearchParams(), Object.assign({
    visitor: function(r, a, i, d) {
      return Tt.isNode && ne.isBuffer(r) ? (this.append(a, r.toString("base64")), !1) : d.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function ic(t) {
  return ne.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function sc(t) {
  const e = {}, r = Object.keys(t);
  let a;
  const i = r.length;
  let d;
  for (a = 0; a < i; a++)
    d = r[a], e[d] = t[d];
  return e;
}
function ms(t) {
  function e(r, a, i, d) {
    let n = r[d++];
    if (n === "__proto__") return !0;
    const l = Number.isFinite(+n), o = d >= r.length;
    return n = !n && ne.isArray(i) ? i.length : n, o ? (ne.hasOwnProp(i, n) ? i[n] = [i[n], a] : i[n] = a, !l) : ((!i[n] || !ne.isObject(i[n])) && (i[n] = []), e(r, a, i[n], d) && ne.isArray(i[n]) && (i[n] = sc(i[n])), !l);
  }
  if (ne.isFormData(t) && ne.isFunction(t.entries)) {
    const r = {};
    return ne.forEachEntry(t, (a, i) => {
      e(ic(a), i, r, 0);
    }), r;
  }
  return null;
}
function lc(t, e, r) {
  if (ne.isString(t))
    try {
      return (e || JSON.parse)(t), ne.trim(t);
    } catch (a) {
      if (a.name !== "SyntaxError")
        throw a;
    }
  return (r || JSON.stringify)(t);
}
const Dr = {
  transitional: vs,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, r) {
    const a = r.getContentType() || "", i = a.indexOf("application/json") > -1, d = ne.isObject(e);
    if (d && ne.isHTMLForm(e) && (e = new FormData(e)), ne.isFormData(e))
      return i ? JSON.stringify(ms(e)) : e;
    if (ne.isArrayBuffer(e) || ne.isBuffer(e) || ne.isStream(e) || ne.isFile(e) || ne.isBlob(e) || ne.isReadableStream(e))
      return e;
    if (ne.isArrayBufferView(e))
      return e.buffer;
    if (ne.isURLSearchParams(e))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let l;
    if (d) {
      if (a.indexOf("application/x-www-form-urlencoded") > -1)
        return ac(e, this.formSerializer).toString();
      if ((l = ne.isFileList(e)) || a.indexOf("multipart/form-data") > -1) {
        const o = this.env && this.env.FormData;
        return No(
          l ? { "files[]": e } : e,
          o && new o(),
          this.formSerializer
        );
      }
    }
    return d || i ? (r.setContentType("application/json", !1), lc(e)) : e;
  }],
  transformResponse: [function(e) {
    const r = this.transitional || Dr.transitional, a = r && r.forcedJSONParsing, i = this.responseType === "json";
    if (ne.isResponse(e) || ne.isReadableStream(e))
      return e;
    if (e && ne.isString(e) && (a && !this.responseType || i)) {
      const n = !(r && r.silentJSONParsing) && i;
      try {
        return JSON.parse(e);
      } catch (l) {
        if (n)
          throw l.name === "SyntaxError" ? Ye.from(l, Ye.ERR_BAD_RESPONSE, this, null, this.response) : l;
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
    FormData: Tt.classes.FormData,
    Blob: Tt.classes.Blob
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
  Dr.headers[t] = {};
});
const uc = ne.toObjectSet([
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
]), cc = (t) => {
  const e = {};
  let r, a, i;
  return t && t.split(`
`).forEach(function(n) {
    i = n.indexOf(":"), r = n.substring(0, i).trim().toLowerCase(), a = n.substring(i + 1).trim(), !(!r || e[r] && uc[r]) && (r === "set-cookie" ? e[r] ? e[r].push(a) : e[r] = [a] : e[r] = e[r] ? e[r] + ", " + a : a);
  }), e;
}, mi = Symbol("internals");
function fr(t) {
  return t && String(t).trim().toLowerCase();
}
function so(t) {
  return t === !1 || t == null ? t : ne.isArray(t) ? t.map(so) : String(t);
}
function dc(t) {
  const e = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let a;
  for (; a = r.exec(t); )
    e[a[1]] = a[2];
  return e;
}
const fc = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function Jo(t, e, r, a, i) {
  if (ne.isFunction(a))
    return a.call(this, e, r);
  if (i && (e = r), !!ne.isString(e)) {
    if (ne.isString(a))
      return e.indexOf(a) !== -1;
    if (ne.isRegExp(a))
      return a.test(e);
  }
}
function hc(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, a) => r.toUpperCase() + a);
}
function pc(t, e) {
  const r = ne.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((a) => {
    Object.defineProperty(t, a + r, {
      value: function(i, d, n) {
        return this[a].call(this, e, i, d, n);
      },
      configurable: !0
    });
  });
}
let Nt = class {
  constructor(e) {
    e && this.set(e);
  }
  set(e, r, a) {
    const i = this;
    function d(l, o, s) {
      const u = fr(o);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const c = ne.findKey(i, u);
      (!c || i[c] === void 0 || s === !0 || s === void 0 && i[c] !== !1) && (i[c || o] = so(l));
    }
    const n = (l, o) => ne.forEach(l, (s, u) => d(s, u, o));
    if (ne.isPlainObject(e) || e instanceof this.constructor)
      n(e, r);
    else if (ne.isString(e) && (e = e.trim()) && !fc(e))
      n(cc(e), r);
    else if (ne.isObject(e) && ne.isIterable(e)) {
      let l = {}, o, s;
      for (const u of e) {
        if (!ne.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        l[s = u[0]] = (o = l[s]) ? ne.isArray(o) ? [...o, u[1]] : [o, u[1]] : u[1];
      }
      n(l, r);
    } else
      e != null && d(r, e, a);
    return this;
  }
  get(e, r) {
    if (e = fr(e), e) {
      const a = ne.findKey(this, e);
      if (a) {
        const i = this[a];
        if (!r)
          return i;
        if (r === !0)
          return dc(i);
        if (ne.isFunction(r))
          return r.call(this, i, a);
        if (ne.isRegExp(r))
          return r.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, r) {
    if (e = fr(e), e) {
      const a = ne.findKey(this, e);
      return !!(a && this[a] !== void 0 && (!r || Jo(this, this[a], a, r)));
    }
    return !1;
  }
  delete(e, r) {
    const a = this;
    let i = !1;
    function d(n) {
      if (n = fr(n), n) {
        const l = ne.findKey(a, n);
        l && (!r || Jo(a, a[l], l, r)) && (delete a[l], i = !0);
      }
    }
    return ne.isArray(e) ? e.forEach(d) : d(e), i;
  }
  clear(e) {
    const r = Object.keys(this);
    let a = r.length, i = !1;
    for (; a--; ) {
      const d = r[a];
      (!e || Jo(this, this[d], d, e, !0)) && (delete this[d], i = !0);
    }
    return i;
  }
  normalize(e) {
    const r = this, a = {};
    return ne.forEach(this, (i, d) => {
      const n = ne.findKey(a, d);
      if (n) {
        r[n] = so(i), delete r[d];
        return;
      }
      const l = e ? hc(d) : String(d).trim();
      l !== d && delete r[d], r[l] = so(i), a[l] = !0;
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
    const a = (this[mi] = this[mi] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function d(n) {
      const l = fr(n);
      a[l] || (pc(i, n), a[l] = !0);
    }
    return ne.isArray(e) ? e.forEach(d) : d(e), this;
  }
};
Nt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
ne.reduceDescriptors(Nt.prototype, ({ value: t }, e) => {
  let r = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(a) {
      this[r] = a;
    }
  };
});
ne.freezeMethods(Nt);
function Qo(t, e) {
  const r = this || Dr, a = e || r, i = Nt.from(a.headers);
  let d = a.data;
  return ne.forEach(t, function(l) {
    d = l.call(r, d, i.normalize(), e ? e.status : void 0);
  }), i.normalize(), d;
}
function gs(t) {
  return !!(t && t.__CANCEL__);
}
function ir(t, e, r) {
  Ye.call(this, t ?? "canceled", Ye.ERR_CANCELED, e, r), this.name = "CanceledError";
}
ne.inherits(ir, Ye, {
  __CANCEL__: !0
});
function ys(t, e, r) {
  const a = r.config.validateStatus;
  !r.status || !a || a(r.status) ? t(r) : e(new Ye(
    "Request failed with status code " + r.status,
    [Ye.ERR_BAD_REQUEST, Ye.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function vc(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function mc(t, e) {
  t = t || 10;
  const r = new Array(t), a = new Array(t);
  let i = 0, d = 0, n;
  return e = e !== void 0 ? e : 1e3, function(o) {
    const s = Date.now(), u = a[d];
    n || (n = s), r[i] = o, a[i] = s;
    let c = d, f = 0;
    for (; c !== i; )
      f += r[c++], c = c % t;
    if (i = (i + 1) % t, i === d && (d = (d + 1) % t), s - n < e)
      return;
    const p = u && s - u;
    return p ? Math.round(f * 1e3 / p) : void 0;
  };
}
function gc(t, e) {
  let r = 0, a = 1e3 / e, i, d;
  const n = (s, u = Date.now()) => {
    r = u, i = null, d && (clearTimeout(d), d = null), t.apply(null, s);
  };
  return [(...s) => {
    const u = Date.now(), c = u - r;
    c >= a ? n(s, u) : (i = s, d || (d = setTimeout(() => {
      d = null, n(i);
    }, a - c)));
  }, () => i && n(i)];
}
const yo = (t, e, r = 3) => {
  let a = 0;
  const i = mc(50, 250);
  return gc((d) => {
    const n = d.loaded, l = d.lengthComputable ? d.total : void 0, o = n - a, s = i(o), u = n <= l;
    a = n;
    const c = {
      loaded: n,
      total: l,
      progress: l ? n / l : void 0,
      bytes: o,
      rate: s || void 0,
      estimated: s && l && u ? (l - n) / s : void 0,
      event: d,
      lengthComputable: l != null,
      [e ? "download" : "upload"]: !0
    };
    t(c);
  }, r);
}, gi = (t, e) => {
  const r = t != null;
  return [(a) => e[0]({
    lengthComputable: r,
    total: t,
    loaded: a
  }), e[1]];
}, yi = (t) => (...e) => ne.asap(() => t(...e)), yc = Tt.hasStandardBrowserEnv ? /* @__PURE__ */ ((t, e) => (r) => (r = new URL(r, Tt.origin), t.protocol === r.protocol && t.host === r.host && (e || t.port === r.port)))(
  new URL(Tt.origin),
  Tt.navigator && /(msie|trident)/i.test(Tt.navigator.userAgent)
) : () => !0, bc = Tt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, r, a, i, d) {
      const n = [t + "=" + encodeURIComponent(e)];
      ne.isNumber(r) && n.push("expires=" + new Date(r).toGMTString()), ne.isString(a) && n.push("path=" + a), ne.isString(i) && n.push("domain=" + i), d === !0 && n.push("secure"), document.cookie = n.join("; ");
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
function xc(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Sc(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function bs(t, e, r) {
  let a = !xc(e);
  return t && (a || r == !1) ? Sc(t, e) : e;
}
const bi = (t) => t instanceof Nt ? { ...t } : t;
function Wn(t, e) {
  e = e || {};
  const r = {};
  function a(s, u, c, f) {
    return ne.isPlainObject(s) && ne.isPlainObject(u) ? ne.merge.call({ caseless: f }, s, u) : ne.isPlainObject(u) ? ne.merge({}, u) : ne.isArray(u) ? u.slice() : u;
  }
  function i(s, u, c, f) {
    if (ne.isUndefined(u)) {
      if (!ne.isUndefined(s))
        return a(void 0, s, c, f);
    } else return a(s, u, c, f);
  }
  function d(s, u) {
    if (!ne.isUndefined(u))
      return a(void 0, u);
  }
  function n(s, u) {
    if (ne.isUndefined(u)) {
      if (!ne.isUndefined(s))
        return a(void 0, s);
    } else return a(void 0, u);
  }
  function l(s, u, c) {
    if (c in e)
      return a(s, u);
    if (c in t)
      return a(void 0, s);
  }
  const o = {
    url: d,
    method: d,
    data: d,
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
    validateStatus: l,
    headers: (s, u, c) => i(bi(s), bi(u), c, !0)
  };
  return ne.forEach(Object.keys(Object.assign({}, t, e)), function(u) {
    const c = o[u] || i, f = c(t[u], e[u], u);
    ne.isUndefined(f) && c !== l || (r[u] = f);
  }), r;
}
const xs = (t) => {
  const e = Wn({}, t);
  let { data: r, withXSRFToken: a, xsrfHeaderName: i, xsrfCookieName: d, headers: n, auth: l } = e;
  e.headers = n = Nt.from(n), e.url = ps(bs(e.baseURL, e.url, e.allowAbsoluteUrls), t.params, t.paramsSerializer), l && n.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let o;
  if (ne.isFormData(r)) {
    if (Tt.hasStandardBrowserEnv || Tt.hasStandardBrowserWebWorkerEnv)
      n.setContentType(void 0);
    else if ((o = n.getContentType()) !== !1) {
      const [s, ...u] = o ? o.split(";").map((c) => c.trim()).filter(Boolean) : [];
      n.setContentType([s || "multipart/form-data", ...u].join("; "));
    }
  }
  if (Tt.hasStandardBrowserEnv && (a && ne.isFunction(a) && (a = a(e)), a || a !== !1 && yc(e.url))) {
    const s = i && d && bc.read(d);
    s && n.set(i, s);
  }
  return e;
}, Ec = typeof XMLHttpRequest < "u", wc = Ec && function(t) {
  return new Promise(function(r, a) {
    const i = xs(t);
    let d = i.data;
    const n = Nt.from(i.headers).normalize();
    let { responseType: l, onUploadProgress: o, onDownloadProgress: s } = i, u, c, f, p, h;
    function v() {
      p && p(), h && h(), i.cancelToken && i.cancelToken.unsubscribe(u), i.signal && i.signal.removeEventListener("abort", u);
    }
    let m = new XMLHttpRequest();
    m.open(i.method.toUpperCase(), i.url, !0), m.timeout = i.timeout;
    function g() {
      if (!m)
        return;
      const E = Nt.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), T = {
        data: !l || l === "text" || l === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: E,
        config: t,
        request: m
      };
      ys(function(D) {
        r(D), v();
      }, function(D) {
        a(D), v();
      }, T), m = null;
    }
    "onloadend" in m ? m.onloadend = g : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(g);
    }, m.onabort = function() {
      m && (a(new Ye("Request aborted", Ye.ECONNABORTED, t, m)), m = null);
    }, m.onerror = function() {
      a(new Ye("Network Error", Ye.ERR_NETWORK, t, m)), m = null;
    }, m.ontimeout = function() {
      let w = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
      const T = i.transitional || vs;
      i.timeoutErrorMessage && (w = i.timeoutErrorMessage), a(new Ye(
        w,
        T.clarifyTimeoutError ? Ye.ETIMEDOUT : Ye.ECONNABORTED,
        t,
        m
      )), m = null;
    }, d === void 0 && n.setContentType(null), "setRequestHeader" in m && ne.forEach(n.toJSON(), function(w, T) {
      m.setRequestHeader(T, w);
    }), ne.isUndefined(i.withCredentials) || (m.withCredentials = !!i.withCredentials), l && l !== "json" && (m.responseType = i.responseType), s && ([f, h] = yo(s, !0), m.addEventListener("progress", f)), o && m.upload && ([c, p] = yo(o), m.upload.addEventListener("progress", c), m.upload.addEventListener("loadend", p)), (i.cancelToken || i.signal) && (u = (E) => {
      m && (a(!E || E.type ? new ir(null, t, m) : E), m.abort(), m = null);
    }, i.cancelToken && i.cancelToken.subscribe(u), i.signal && (i.signal.aborted ? u() : i.signal.addEventListener("abort", u)));
    const y = vc(i.url);
    if (y && Tt.protocols.indexOf(y) === -1) {
      a(new Ye("Unsupported protocol " + y + ":", Ye.ERR_BAD_REQUEST, t));
      return;
    }
    m.send(d || null);
  });
}, Tc = (t, e) => {
  const { length: r } = t = t ? t.filter(Boolean) : [];
  if (e || r) {
    let a = new AbortController(), i;
    const d = function(s) {
      if (!i) {
        i = !0, l();
        const u = s instanceof Error ? s : this.reason;
        a.abort(u instanceof Ye ? u : new ir(u instanceof Error ? u.message : u));
      }
    };
    let n = e && setTimeout(() => {
      n = null, d(new Ye(`timeout ${e} of ms exceeded`, Ye.ETIMEDOUT));
    }, e);
    const l = () => {
      t && (n && clearTimeout(n), n = null, t.forEach((s) => {
        s.unsubscribe ? s.unsubscribe(d) : s.removeEventListener("abort", d);
      }), t = null);
    };
    t.forEach((s) => s.addEventListener("abort", d));
    const { signal: o } = a;
    return o.unsubscribe = () => ne.asap(l), o;
  }
}, Ac = function* (t, e) {
  let r = t.byteLength;
  if (r < e) {
    yield t;
    return;
  }
  let a = 0, i;
  for (; a < r; )
    i = a + e, yield t.slice(a, i), a = i;
}, Cc = async function* (t, e) {
  for await (const r of Oc(t))
    yield* Ac(r, e);
}, Oc = async function* (t) {
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
}, xi = (t, e, r, a) => {
  const i = Cc(t, e);
  let d = 0, n, l = (o) => {
    n || (n = !0, a && a(o));
  };
  return new ReadableStream({
    async pull(o) {
      try {
        const { done: s, value: u } = await i.next();
        if (s) {
          l(), o.close();
          return;
        }
        let c = u.byteLength;
        if (r) {
          let f = d += c;
          r(f);
        }
        o.enqueue(new Uint8Array(u));
      } catch (s) {
        throw l(s), s;
      }
    },
    cancel(o) {
      return l(o), i.return();
    }
  }, {
    highWaterMark: 2
  });
}, jo = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Ss = jo && typeof ReadableStream == "function", Pc = jo && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((t) => (e) => t.encode(e))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), Es = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, Rc = Ss && Es(() => {
  let t = !1;
  const e = new Request(Tt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !e;
}), Si = 64 * 1024, va = Ss && Es(() => ne.isReadableStream(new Response("").body)), bo = {
  stream: va && ((t) => t.body)
};
jo && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !bo[e] && (bo[e] = ne.isFunction(t[e]) ? (r) => r[e]() : (r, a) => {
      throw new Ye(`Response type '${e}' is not supported`, Ye.ERR_NOT_SUPPORT, a);
    });
  });
})(new Response());
const Ic = async (t) => {
  if (t == null)
    return 0;
  if (ne.isBlob(t))
    return t.size;
  if (ne.isSpecCompliantForm(t))
    return (await new Request(Tt.origin, {
      method: "POST",
      body: t
    }).arrayBuffer()).byteLength;
  if (ne.isArrayBufferView(t) || ne.isArrayBuffer(t))
    return t.byteLength;
  if (ne.isURLSearchParams(t) && (t = t + ""), ne.isString(t))
    return (await Pc(t)).byteLength;
}, Dc = async (t, e) => {
  const r = ne.toFiniteNumber(t.getContentLength());
  return r ?? Ic(e);
}, Fc = jo && (async (t) => {
  let {
    url: e,
    method: r,
    data: a,
    signal: i,
    cancelToken: d,
    timeout: n,
    onDownloadProgress: l,
    onUploadProgress: o,
    responseType: s,
    headers: u,
    withCredentials: c = "same-origin",
    fetchOptions: f
  } = xs(t);
  s = s ? (s + "").toLowerCase() : "text";
  let p = Tc([i, d && d.toAbortSignal()], n), h;
  const v = p && p.unsubscribe && (() => {
    p.unsubscribe();
  });
  let m;
  try {
    if (o && Rc && r !== "get" && r !== "head" && (m = await Dc(u, a)) !== 0) {
      let T = new Request(e, {
        method: "POST",
        body: a,
        duplex: "half"
      }), S;
      if (ne.isFormData(a) && (S = T.headers.get("content-type")) && u.setContentType(S), T.body) {
        const [D, L] = gi(
          m,
          yo(yi(o))
        );
        a = xi(T.body, Si, D, L);
      }
    }
    ne.isString(c) || (c = c ? "include" : "omit");
    const g = "credentials" in Request.prototype;
    h = new Request(e, {
      ...f,
      signal: p,
      method: r.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: a,
      duplex: "half",
      credentials: g ? c : void 0
    });
    let y = await fetch(h, f);
    const E = va && (s === "stream" || s === "response");
    if (va && (l || E && v)) {
      const T = {};
      ["status", "statusText", "headers"].forEach((U) => {
        T[U] = y[U];
      });
      const S = ne.toFiniteNumber(y.headers.get("content-length")), [D, L] = l && gi(
        S,
        yo(yi(l), !0)
      ) || [];
      y = new Response(
        xi(y.body, Si, D, () => {
          L && L(), v && v();
        }),
        T
      );
    }
    s = s || "text";
    let w = await bo[ne.findKey(bo, s) || "text"](y, t);
    return !E && v && v(), await new Promise((T, S) => {
      ys(T, S, {
        data: w,
        headers: Nt.from(y.headers),
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
}), ma = {
  http: Ku,
  xhr: wc,
  fetch: Fc
};
ne.forEach(ma, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Ei = (t) => `- ${t}`, Mc = (t) => ne.isFunction(t) || t === null || t === !1, ws = {
  getAdapter: (t) => {
    t = ne.isArray(t) ? t : [t];
    const { length: e } = t;
    let r, a;
    const i = {};
    for (let d = 0; d < e; d++) {
      r = t[d];
      let n;
      if (a = r, !Mc(r) && (a = ma[(n = String(r)).toLowerCase()], a === void 0))
        throw new Ye(`Unknown adapter '${n}'`);
      if (a)
        break;
      i[n || "#" + d] = a;
    }
    if (!a) {
      const d = Object.entries(i).map(
        ([l, o]) => `adapter ${l} ` + (o === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let n = e ? d.length > 1 ? `since :
` + d.map(Ei).join(`
`) : " " + Ei(d[0]) : "as no adapter specified";
      throw new Ye(
        "There is no suitable adapter to dispatch the request " + n,
        "ERR_NOT_SUPPORT"
      );
    }
    return a;
  },
  adapters: ma
};
function Zo(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new ir(null, t);
}
function wi(t) {
  return Zo(t), t.headers = Nt.from(t.headers), t.data = Qo.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), ws.getAdapter(t.adapter || Dr.adapter)(t).then(function(a) {
    return Zo(t), a.data = Qo.call(
      t,
      t.transformResponse,
      a
    ), a.headers = Nt.from(a.headers), a;
  }, function(a) {
    return gs(a) || (Zo(t), a && a.response && (a.response.data = Qo.call(
      t,
      t.transformResponse,
      a.response
    ), a.response.headers = Nt.from(a.response.headers))), Promise.reject(a);
  });
}
const Ts = "1.10.0", ko = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  ko[t] = function(a) {
    return typeof a === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const Ti = {};
ko.transitional = function(e, r, a) {
  function i(d, n) {
    return "[Axios v" + Ts + "] Transitional option '" + d + "'" + n + (a ? ". " + a : "");
  }
  return (d, n, l) => {
    if (e === !1)
      throw new Ye(
        i(n, " has been removed" + (r ? " in " + r : "")),
        Ye.ERR_DEPRECATED
      );
    return r && !Ti[n] && (Ti[n] = !0, console.warn(
      i(
        n,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), e ? e(d, n, l) : !0;
  };
};
ko.spelling = function(e) {
  return (r, a) => (console.warn(`${a} is likely a misspelling of ${e}`), !0);
};
function Lc(t, e, r) {
  if (typeof t != "object")
    throw new Ye("options must be an object", Ye.ERR_BAD_OPTION_VALUE);
  const a = Object.keys(t);
  let i = a.length;
  for (; i-- > 0; ) {
    const d = a[i], n = e[d];
    if (n) {
      const l = t[d], o = l === void 0 || n(l, d, t);
      if (o !== !0)
        throw new Ye("option " + d + " must be " + o, Ye.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new Ye("Unknown option " + d, Ye.ERR_BAD_OPTION);
  }
}
const lo = {
  assertOptions: Lc,
  validators: ko
}, sn = lo.validators;
let zn = class {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new vi(),
      response: new vi()
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
        const d = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        try {
          a.stack ? d && !String(a.stack).endsWith(d.replace(/^.+\n.+\n/, "")) && (a.stack += `
` + d) : a.stack = d;
        } catch {
        }
      }
      throw a;
    }
  }
  _request(e, r) {
    typeof e == "string" ? (r = r || {}, r.url = e) : r = e || {}, r = Wn(this.defaults, r);
    const { transitional: a, paramsSerializer: i, headers: d } = r;
    a !== void 0 && lo.assertOptions(a, {
      silentJSONParsing: sn.transitional(sn.boolean),
      forcedJSONParsing: sn.transitional(sn.boolean),
      clarifyTimeoutError: sn.transitional(sn.boolean)
    }, !1), i != null && (ne.isFunction(i) ? r.paramsSerializer = {
      serialize: i
    } : lo.assertOptions(i, {
      encode: sn.function,
      serialize: sn.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), lo.assertOptions(r, {
      baseUrl: sn.spelling("baseURL"),
      withXsrfToken: sn.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let n = d && ne.merge(
      d.common,
      d[r.method]
    );
    d && ne.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete d[h];
      }
    ), r.headers = Nt.concat(n, d);
    const l = [];
    let o = !0;
    this.interceptors.request.forEach(function(v) {
      typeof v.runWhen == "function" && v.runWhen(r) === !1 || (o = o && v.synchronous, l.unshift(v.fulfilled, v.rejected));
    });
    const s = [];
    this.interceptors.response.forEach(function(v) {
      s.push(v.fulfilled, v.rejected);
    });
    let u, c = 0, f;
    if (!o) {
      const h = [wi.bind(this), void 0];
      for (h.unshift.apply(h, l), h.push.apply(h, s), f = h.length, u = Promise.resolve(r); c < f; )
        u = u.then(h[c++], h[c++]);
      return u;
    }
    f = l.length;
    let p = r;
    for (c = 0; c < f; ) {
      const h = l[c++], v = l[c++];
      try {
        p = h(p);
      } catch (m) {
        v.call(this, m);
        break;
      }
    }
    try {
      u = wi.call(this, p);
    } catch (h) {
      return Promise.reject(h);
    }
    for (c = 0, f = s.length; c < f; )
      u = u.then(s[c++], s[c++]);
    return u;
  }
  getUri(e) {
    e = Wn(this.defaults, e);
    const r = bs(e.baseURL, e.url, e.allowAbsoluteUrls);
    return ps(r, e.params, e.paramsSerializer);
  }
};
ne.forEach(["delete", "get", "head", "options"], function(e) {
  zn.prototype[e] = function(r, a) {
    return this.request(Wn(a || {}, {
      method: e,
      url: r,
      data: (a || {}).data
    }));
  };
});
ne.forEach(["post", "put", "patch"], function(e) {
  function r(a) {
    return function(d, n, l) {
      return this.request(Wn(l || {}, {
        method: e,
        headers: a ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: d,
        data: n
      }));
    };
  }
  zn.prototype[e] = r(), zn.prototype[e + "Form"] = r(!0);
});
let Uc = class As {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(d) {
      r = d;
    });
    const a = this;
    this.promise.then((i) => {
      if (!a._listeners) return;
      let d = a._listeners.length;
      for (; d-- > 0; )
        a._listeners[d](i);
      a._listeners = null;
    }), this.promise.then = (i) => {
      let d;
      const n = new Promise((l) => {
        a.subscribe(l), d = l;
      }).then(i);
      return n.cancel = function() {
        a.unsubscribe(d);
      }, n;
    }, e(function(d, n, l) {
      a.reason || (a.reason = new ir(d, n, l), r(a.reason));
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
      token: new As(function(i) {
        e = i;
      }),
      cancel: e
    };
  }
};
function Nc(t) {
  return function(r) {
    return t.apply(null, r);
  };
}
function jc(t) {
  return ne.isObject(t) && t.isAxiosError === !0;
}
const ga = {
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
Object.entries(ga).forEach(([t, e]) => {
  ga[e] = t;
});
function Cs(t) {
  const e = new zn(t), r = ns(zn.prototype.request, e);
  return ne.extend(r, zn.prototype, e, { allOwnKeys: !0 }), ne.extend(r, e, null, { allOwnKeys: !0 }), r.create = function(i) {
    return Cs(Wn(t, i));
  }, r;
}
const ht = Cs(Dr);
ht.Axios = zn;
ht.CanceledError = ir;
ht.CancelToken = Uc;
ht.isCancel = gs;
ht.VERSION = Ts;
ht.toFormData = No;
ht.AxiosError = Ye;
ht.Cancel = ht.CanceledError;
ht.all = function(e) {
  return Promise.all(e);
};
ht.spread = Nc;
ht.isAxiosError = jc;
ht.mergeConfig = Wn;
ht.AxiosHeaders = Nt;
ht.formToJSON = (t) => ms(ne.isHTMLForm(t) ? new FormData(t) : t);
ht.getAdapter = ws.getAdapter;
ht.HttpStatusCode = ga;
ht.default = ht;
const {
  Axios: jg,
  AxiosError: kg,
  CanceledError: $g,
  isCancel: Bg,
  CancelToken: Vg,
  VERSION: Hg,
  all: zg,
  Cancel: Gg,
  isAxiosError: Wg,
  spread: Yg,
  toFormData: Kg,
  AxiosHeaders: Xg,
  HttpStatusCode: Jg,
  formToJSON: Qg,
  getAdapter: Zg,
  mergeConfig: qg
} = ht;
var Zr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ma(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Os(t) {
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
var qo = { exports: {} }, Ai;
function kc() {
  return Ai || (Ai = 1, function(t, e) {
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
                n.exports = function(l) {
                  if (typeof l != "function")
                    throw TypeError(String(l) + " is not a function");
                  return l;
                };
              }
            ),
            /***/
            6077: (
              /***/
              function(n, l, o) {
                var s = o(111);
                n.exports = function(u) {
                  if (!s(u) && u !== null)
                    throw TypeError("Can't set " + String(u) + " as a prototype");
                  return u;
                };
              }
            ),
            /***/
            1223: (
              /***/
              function(n, l, o) {
                var s = o(5112), u = o(30), c = o(3070), f = s("unscopables"), p = Array.prototype;
                p[f] == null && c.f(p, f, {
                  configurable: !0,
                  value: u(null)
                }), n.exports = function(h) {
                  p[f][h] = !0;
                };
              }
            ),
            /***/
            1530: (
              /***/
              function(n, l, o) {
                var s = o(8710).charAt;
                n.exports = function(u, c, f) {
                  return c + (f ? s(u, c).length : 1);
                };
              }
            ),
            /***/
            5787: (
              /***/
              function(n) {
                n.exports = function(l, o, s) {
                  if (!(l instanceof o))
                    throw TypeError("Incorrect " + (s ? s + " " : "") + "invocation");
                  return l;
                };
              }
            ),
            /***/
            9670: (
              /***/
              function(n, l, o) {
                var s = o(111);
                n.exports = function(u) {
                  if (!s(u))
                    throw TypeError(String(u) + " is not an object");
                  return u;
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
              function(n, l, o) {
                var s = o(4019), u = o(9781), c = o(7854), f = o(111), p = o(6656), h = o(648), v = o(8880), m = o(1320), g = o(3070).f, y = o(9518), E = o(7674), w = o(5112), T = o(9711), S = c.Int8Array, D = S && S.prototype, L = c.Uint8ClampedArray, U = L && L.prototype, j = S && y(S), B = D && y(D), H = Object.prototype, k = H.isPrototypeOf, z = w("toStringTag"), Y = T("TYPED_ARRAY_TAG"), W = s && !!E && h(c.opera) !== "Opera", re = !1, X, he = {
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
                  var I = h(O);
                  return I === "DataView" || p(he, I) || p(fe, I);
                }, Ie = function(be) {
                  if (!f(be)) return !1;
                  var O = h(be);
                  return p(he, O) || p(fe, O);
                }, xe = function(be) {
                  if (Ie(be)) return be;
                  throw TypeError("Target is not a typed array");
                }, Ne = function(be) {
                  if (E) {
                    if (k.call(j, be)) return be;
                  } else for (var O in he) if (p(he, X)) {
                    var I = c[O];
                    if (I && (be === I || k.call(I, be)))
                      return be;
                  }
                  throw TypeError("Target is not a typed array constructor");
                }, Ue = function(be, O, I) {
                  if (u) {
                    if (I) for (var A in he) {
                      var F = c[A];
                      F && p(F.prototype, be) && delete F.prototype[be];
                    }
                    (!B[be] || I) && m(B, be, I ? O : W && D[be] || O);
                  }
                }, Me = function(be, O, I) {
                  var A, F;
                  if (u) {
                    if (E) {
                      if (I) for (A in he)
                        F = c[A], F && p(F, be) && delete F[be];
                      if (!j[be] || I)
                        try {
                          return m(j, be, I ? O : W && S[be] || O);
                        } catch {
                        }
                      else return;
                    }
                    for (A in he)
                      F = c[A], F && (!F[be] || I) && m(F, be, O);
                  }
                };
                for (X in he)
                  c[X] || (W = !1);
                if ((!W || typeof j != "function" || j === Function.prototype) && (j = function() {
                  throw TypeError("Incorrect invocation");
                }, W))
                  for (X in he)
                    c[X] && E(c[X], j);
                if ((!W || !B || B === H) && (B = j.prototype, W))
                  for (X in he)
                    c[X] && E(c[X].prototype, B);
                if (W && y(U) !== B && E(U, B), u && !p(B, z)) {
                  re = !0, g(B, z, { get: function() {
                    return f(this) ? this[Y] : void 0;
                  } });
                  for (X in he) c[X] && v(c[X], Y, X);
                }
                n.exports = {
                  NATIVE_ARRAY_BUFFER_VIEWS: W,
                  TYPED_ARRAY_TAG: re && Y,
                  aTypedArray: xe,
                  aTypedArrayConstructor: Ne,
                  exportTypedArrayMethod: Ue,
                  exportTypedArrayStaticMethod: Me,
                  isView: Te,
                  isTypedArray: Ie,
                  TypedArray: j,
                  TypedArrayPrototype: B
                };
              }
            ),
            /***/
            3331: (
              /***/
              function(n, l, o) {
                var s = o(7854), u = o(9781), c = o(4019), f = o(8880), p = o(2248), h = o(7293), v = o(5787), m = o(9958), g = o(7466), y = o(7067), E = o(1179), w = o(9518), T = o(7674), S = o(8006).f, D = o(3070).f, L = o(1285), U = o(8003), j = o(9909), B = j.get, H = j.set, k = "ArrayBuffer", z = "DataView", Y = "prototype", W = "Wrong length", re = "Wrong index", X = s[k], he = X, fe = s[z], Te = fe && fe[Y], Ie = Object.prototype, xe = s.RangeError, Ne = E.pack, Ue = E.unpack, Me = function(q) {
                  return [q & 255];
                }, be = function(q) {
                  return [q & 255, q >> 8 & 255];
                }, O = function(q) {
                  return [q & 255, q >> 8 & 255, q >> 16 & 255, q >> 24 & 255];
                }, I = function(q) {
                  return q[3] << 24 | q[2] << 16 | q[1] << 8 | q[0];
                }, A = function(q) {
                  return Ne(q, 23, 4);
                }, F = function(q) {
                  return Ne(q, 52, 8);
                }, b = function(q, te) {
                  D(q[Y], te, { get: function() {
                    return B(this)[te];
                  } });
                }, x = function(q, te, le, ge) {
                  var Ce = y(le), Ke = B(q);
                  if (Ce + te > Ke.byteLength) throw xe(re);
                  var qe = B(Ke.buffer).bytes, Ze = Ce + Ke.byteOffset, G = qe.slice(Ze, Ze + te);
                  return ge ? G : G.reverse();
                }, P = function(q, te, le, ge, Ce, Ke) {
                  var qe = y(le), Ze = B(q);
                  if (qe + te > Ze.byteLength) throw xe(re);
                  for (var G = B(Ze.buffer).bytes, K = qe + Ze.byteOffset, ee = ge(+Ce), ce = 0; ce < te; ce++) G[K + ce] = ee[Ke ? ce : te - ce - 1];
                };
                if (!c)
                  he = function(te) {
                    v(this, he, k);
                    var le = y(te);
                    H(this, {
                      bytes: L.call(new Array(le), 0),
                      byteLength: le
                    }), u || (this.byteLength = le);
                  }, fe = function(te, le, ge) {
                    v(this, fe, z), v(te, he, z);
                    var Ce = B(te).byteLength, Ke = m(le);
                    if (Ke < 0 || Ke > Ce) throw xe("Wrong offset");
                    if (ge = ge === void 0 ? Ce - Ke : g(ge), Ke + ge > Ce) throw xe(W);
                    H(this, {
                      buffer: te,
                      byteLength: ge,
                      byteOffset: Ke
                    }), u || (this.buffer = te, this.byteLength = ge, this.byteOffset = Ke);
                  }, u && (b(he, "byteLength"), b(fe, "buffer"), b(fe, "byteLength"), b(fe, "byteOffset")), p(fe[Y], {
                    getInt8: function(te) {
                      return x(this, 1, te)[0] << 24 >> 24;
                    },
                    getUint8: function(te) {
                      return x(this, 1, te)[0];
                    },
                    getInt16: function(te) {
                      var le = x(this, 2, te, arguments.length > 1 ? arguments[1] : void 0);
                      return (le[1] << 8 | le[0]) << 16 >> 16;
                    },
                    getUint16: function(te) {
                      var le = x(this, 2, te, arguments.length > 1 ? arguments[1] : void 0);
                      return le[1] << 8 | le[0];
                    },
                    getInt32: function(te) {
                      return I(x(this, 4, te, arguments.length > 1 ? arguments[1] : void 0));
                    },
                    getUint32: function(te) {
                      return I(x(this, 4, te, arguments.length > 1 ? arguments[1] : void 0)) >>> 0;
                    },
                    getFloat32: function(te) {
                      return Ue(x(this, 4, te, arguments.length > 1 ? arguments[1] : void 0), 23);
                    },
                    getFloat64: function(te) {
                      return Ue(x(this, 8, te, arguments.length > 1 ? arguments[1] : void 0), 52);
                    },
                    setInt8: function(te, le) {
                      P(this, 1, te, Me, le);
                    },
                    setUint8: function(te, le) {
                      P(this, 1, te, Me, le);
                    },
                    setInt16: function(te, le) {
                      P(this, 2, te, be, le, arguments.length > 2 ? arguments[2] : void 0);
                    },
                    setUint16: function(te, le) {
                      P(this, 2, te, be, le, arguments.length > 2 ? arguments[2] : void 0);
                    },
                    setInt32: function(te, le) {
                      P(this, 4, te, O, le, arguments.length > 2 ? arguments[2] : void 0);
                    },
                    setUint32: function(te, le) {
                      P(this, 4, te, O, le, arguments.length > 2 ? arguments[2] : void 0);
                    },
                    setFloat32: function(te, le) {
                      P(this, 4, te, A, le, arguments.length > 2 ? arguments[2] : void 0);
                    },
                    setFloat64: function(te, le) {
                      P(this, 8, te, F, le, arguments.length > 2 ? arguments[2] : void 0);
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
                    for (var M = he[Y] = X[Y], $ = S(X), V = 0, Q; $.length > V; )
                      (Q = $[V++]) in he || f(he, Q, X[Q]);
                    M.constructor = he;
                  }
                  T && w(Te) !== Ie && T(Te, Ie);
                  var Z = new fe(new he(2)), J = Te.setInt8;
                  Z.setInt8(0, 2147483648), Z.setInt8(1, 2147483649), (Z.getInt8(0) || !Z.getInt8(1)) && p(Te, {
                    setInt8: function(te, le) {
                      J.call(this, te, le << 24 >> 24);
                    },
                    setUint8: function(te, le) {
                      J.call(this, te, le << 24 >> 24);
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
              function(n, l, o) {
                var s = o(7908), u = o(1400), c = o(7466), f = Math.min;
                n.exports = [].copyWithin || function(h, v) {
                  var m = s(this), g = c(m.length), y = u(h, g), E = u(v, g), w = arguments.length > 2 ? arguments[2] : void 0, T = f((w === void 0 ? g : u(w, g)) - E, g - y), S = 1;
                  for (E < y && y < E + T && (S = -1, E += T - 1, y += T - 1); T-- > 0; )
                    E in m ? m[y] = m[E] : delete m[y], y += S, E += S;
                  return m;
                };
              }
            ),
            /***/
            1285: (
              /***/
              function(n, l, o) {
                var s = o(7908), u = o(1400), c = o(7466);
                n.exports = function(p) {
                  for (var h = s(this), v = c(h.length), m = arguments.length, g = u(m > 1 ? arguments[1] : void 0, v), y = m > 2 ? arguments[2] : void 0, E = y === void 0 ? v : u(y, v); E > g; ) h[g++] = p;
                  return h;
                };
              }
            ),
            /***/
            8533: (
              /***/
              function(n, l, o) {
                var s = o(2092).forEach, u = o(9341), c = u("forEach");
                n.exports = c ? [].forEach : function(p) {
                  return s(this, p, arguments.length > 1 ? arguments[1] : void 0);
                };
              }
            ),
            /***/
            8457: (
              /***/
              function(n, l, o) {
                var s = o(9974), u = o(7908), c = o(3411), f = o(7659), p = o(7466), h = o(6135), v = o(1246);
                n.exports = function(g) {
                  var y = u(g), E = typeof this == "function" ? this : Array, w = arguments.length, T = w > 1 ? arguments[1] : void 0, S = T !== void 0, D = v(y), L = 0, U, j, B, H, k, z;
                  if (S && (T = s(T, w > 2 ? arguments[2] : void 0, 2)), D != null && !(E == Array && f(D)))
                    for (H = D.call(y), k = H.next, j = new E(); !(B = k.call(H)).done; L++)
                      z = S ? c(H, T, [B.value, L], !0) : B.value, h(j, L, z);
                  else
                    for (U = p(y.length), j = new E(U); U > L; L++)
                      z = S ? T(y[L], L) : y[L], h(j, L, z);
                  return j.length = L, j;
                };
              }
            ),
            /***/
            1318: (
              /***/
              function(n, l, o) {
                var s = o(5656), u = o(7466), c = o(1400), f = function(p) {
                  return function(h, v, m) {
                    var g = s(h), y = u(g.length), E = c(m, y), w;
                    if (p && v != v) {
                      for (; y > E; )
                        if (w = g[E++], w != w) return !0;
                    } else for (; y > E; E++)
                      if ((p || E in g) && g[E] === v) return p || E || 0;
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
              function(n, l, o) {
                var s = o(9974), u = o(8361), c = o(7908), f = o(7466), p = o(5417), h = [].push, v = function(m) {
                  var g = m == 1, y = m == 2, E = m == 3, w = m == 4, T = m == 6, S = m == 7, D = m == 5 || T;
                  return function(L, U, j, B) {
                    for (var H = c(L), k = u(H), z = s(U, j, 3), Y = f(k.length), W = 0, re = B || p, X = g ? re(L, Y) : y || S ? re(L, 0) : void 0, he, fe; Y > W; W++) if ((D || W in k) && (he = k[W], fe = z(he, W, H), m))
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
                    return T ? -1 : E || w ? w : X;
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
              function(n, l, o) {
                var s = o(5656), u = o(9958), c = o(7466), f = o(9341), p = Math.min, h = [].lastIndexOf, v = !!h && 1 / [1].lastIndexOf(1, -0) < 0, m = f("lastIndexOf"), g = v || !m;
                n.exports = g ? function(E) {
                  if (v) return h.apply(this, arguments) || 0;
                  var w = s(this), T = c(w.length), S = T - 1;
                  for (arguments.length > 1 && (S = p(S, u(arguments[1]))), S < 0 && (S = T + S); S >= 0; S--) if (S in w && w[S] === E) return S || 0;
                  return -1;
                } : h;
              }
            ),
            /***/
            1194: (
              /***/
              function(n, l, o) {
                var s = o(7293), u = o(5112), c = o(7392), f = u("species");
                n.exports = function(p) {
                  return c >= 51 || !s(function() {
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
              function(n, l, o) {
                var s = o(7293);
                n.exports = function(u, c) {
                  var f = [][u];
                  return !!f && s(function() {
                    f.call(null, c || function() {
                      throw 1;
                    }, 1);
                  });
                };
              }
            ),
            /***/
            3671: (
              /***/
              function(n, l, o) {
                var s = o(3099), u = o(7908), c = o(8361), f = o(7466), p = function(h) {
                  return function(v, m, g, y) {
                    s(m);
                    var E = u(v), w = c(E), T = f(E.length), S = h ? T - 1 : 0, D = h ? -1 : 1;
                    if (g < 2) for (; ; ) {
                      if (S in w) {
                        y = w[S], S += D;
                        break;
                      }
                      if (S += D, h ? S < 0 : T <= S)
                        throw TypeError("Reduce of empty array with no initial value");
                    }
                    for (; h ? S >= 0 : T > S; S += D) S in w && (y = m(y, w[S], S, E));
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
              function(n, l, o) {
                var s = o(111), u = o(3157), c = o(5112), f = c("species");
                n.exports = function(p, h) {
                  var v;
                  return u(p) && (v = p.constructor, typeof v == "function" && (v === Array || u(v.prototype)) ? v = void 0 : s(v) && (v = v[f], v === null && (v = void 0))), new (v === void 0 ? Array : v)(h === 0 ? 0 : h);
                };
              }
            ),
            /***/
            3411: (
              /***/
              function(n, l, o) {
                var s = o(9670), u = o(9212);
                n.exports = function(c, f, p, h) {
                  try {
                    return h ? f(s(p)[0], p[1]) : f(p);
                  } catch (v) {
                    throw u(c), v;
                  }
                };
              }
            ),
            /***/
            7072: (
              /***/
              function(n, l, o) {
                var s = o(5112), u = s("iterator"), c = !1;
                try {
                  var f = 0, p = {
                    next: function() {
                      return { done: !!f++ };
                    },
                    return: function() {
                      c = !0;
                    }
                  };
                  p[u] = function() {
                    return this;
                  }, Array.from(p, function() {
                    throw 2;
                  });
                } catch {
                }
                n.exports = function(h, v) {
                  if (!v && !c) return !1;
                  var m = !1;
                  try {
                    var g = {};
                    g[u] = function() {
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
                var l = {}.toString;
                n.exports = function(o) {
                  return l.call(o).slice(8, -1);
                };
              }
            ),
            /***/
            648: (
              /***/
              function(n, l, o) {
                var s = o(1694), u = o(4326), c = o(5112), f = c("toStringTag"), p = u(/* @__PURE__ */ function() {
                  return arguments;
                }()) == "Arguments", h = function(v, m) {
                  try {
                    return v[m];
                  } catch {
                  }
                };
                n.exports = s ? u : function(v) {
                  var m, g, y;
                  return v === void 0 ? "Undefined" : v === null ? "Null" : typeof (g = h(m = Object(v), f)) == "string" ? g : p ? u(m) : (y = u(m)) == "Object" && typeof m.callee == "function" ? "Arguments" : y;
                };
              }
            ),
            /***/
            9920: (
              /***/
              function(n, l, o) {
                var s = o(6656), u = o(3887), c = o(1236), f = o(3070);
                n.exports = function(p, h) {
                  for (var v = u(h), m = f.f, g = c.f, y = 0; y < v.length; y++) {
                    var E = v[y];
                    s(p, E) || m(p, E, g(h, E));
                  }
                };
              }
            ),
            /***/
            8544: (
              /***/
              function(n, l, o) {
                var s = o(7293);
                n.exports = !s(function() {
                  function u() {
                  }
                  return u.prototype.constructor = null, Object.getPrototypeOf(new u()) !== u.prototype;
                });
              }
            ),
            /***/
            4994: (
              /***/
              function(n, l, o) {
                var s = o(3383).IteratorPrototype, u = o(30), c = o(9114), f = o(8003), p = o(7497), h = function() {
                  return this;
                };
                n.exports = function(v, m, g) {
                  var y = m + " Iterator";
                  return v.prototype = u(s, { next: c(1, g) }), f(v, y, !1, !0), p[y] = h, v;
                };
              }
            ),
            /***/
            8880: (
              /***/
              function(n, l, o) {
                var s = o(9781), u = o(3070), c = o(9114);
                n.exports = s ? function(f, p, h) {
                  return u.f(f, p, c(1, h));
                } : function(f, p, h) {
                  return f[p] = h, f;
                };
              }
            ),
            /***/
            9114: (
              /***/
              function(n) {
                n.exports = function(l, o) {
                  return {
                    enumerable: !(l & 1),
                    configurable: !(l & 2),
                    writable: !(l & 4),
                    value: o
                  };
                };
              }
            ),
            /***/
            6135: (
              /***/
              function(n, l, o) {
                var s = o(7593), u = o(3070), c = o(9114);
                n.exports = function(f, p, h) {
                  var v = s(p);
                  v in f ? u.f(f, v, c(0, h)) : f[v] = h;
                };
              }
            ),
            /***/
            654: (
              /***/
              function(n, l, o) {
                var s = o(2109), u = o(4994), c = o(9518), f = o(7674), p = o(8003), h = o(8880), v = o(1320), m = o(5112), g = o(1913), y = o(7497), E = o(3383), w = E.IteratorPrototype, T = E.BUGGY_SAFARI_ITERATORS, S = m("iterator"), D = "keys", L = "values", U = "entries", j = function() {
                  return this;
                };
                n.exports = function(B, H, k, z, Y, W, re) {
                  u(k, H, z);
                  var X = function(O) {
                    if (O === Y && xe) return xe;
                    if (!T && O in Te) return Te[O];
                    switch (O) {
                      case D:
                        return function() {
                          return new k(this, O);
                        };
                      case L:
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
                  }, he = H + " Iterator", fe = !1, Te = B.prototype, Ie = Te[S] || Te["@@iterator"] || Y && Te[Y], xe = !T && Ie || X(Y), Ne = H == "Array" && Te.entries || Ie, Ue, Me, be;
                  if (Ne && (Ue = c(Ne.call(new B())), w !== Object.prototype && Ue.next && (!g && c(Ue) !== w && (f ? f(Ue, w) : typeof Ue[S] != "function" && h(Ue, S, j)), p(Ue, he, !0, !0), g && (y[he] = j))), Y == L && Ie && Ie.name !== L && (fe = !0, xe = function() {
                    return Ie.call(this);
                  }), (!g || re) && Te[S] !== xe && h(Te, S, xe), y[H] = xe, Y)
                    if (Me = {
                      values: X(L),
                      keys: W ? xe : X(D),
                      entries: X(U)
                    }, re) for (be in Me)
                      (T || fe || !(be in Te)) && v(Te, be, Me[be]);
                    else s({ target: H, proto: !0, forced: T || fe }, Me);
                  return Me;
                };
              }
            ),
            /***/
            9781: (
              /***/
              function(n, l, o) {
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
              function(n, l, o) {
                var s = o(7854), u = o(111), c = s.document, f = u(c) && u(c.createElement);
                n.exports = function(p) {
                  return f ? c.createElement(p) : {};
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
              function(n, l, o) {
                var s = o(5005);
                n.exports = s("navigator", "userAgent") || "";
              }
            ),
            /***/
            7392: (
              /***/
              function(n, l, o) {
                var s = o(7854), u = o(8113), c = s.process, f = c && c.versions, p = f && f.v8, h, v;
                p ? (h = p.split("."), v = h[0] + h[1]) : u && (h = u.match(/Edge\/(\d+)/), (!h || h[1] >= 74) && (h = u.match(/Chrome\/(\d+)/), h && (v = h[1]))), n.exports = v && +v;
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
              function(n, l, o) {
                var s = o(7854), u = o(1236).f, c = o(8880), f = o(1320), p = o(3505), h = o(9920), v = o(4705);
                n.exports = function(m, g) {
                  var y = m.target, E = m.global, w = m.stat, T, S, D, L, U, j;
                  if (E ? S = s : w ? S = s[y] || p(y, {}) : S = (s[y] || {}).prototype, S) for (D in g) {
                    if (U = g[D], m.noTargetGet ? (j = u(S, D), L = j && j.value) : L = S[D], T = v(E ? D : y + (w ? "." : "#") + D, m.forced), !T && L !== void 0) {
                      if (typeof U == typeof L) continue;
                      h(U, L);
                    }
                    (m.sham || L && L.sham) && c(U, "sham", !0), f(S, D, U, m);
                  }
                };
              }
            ),
            /***/
            7293: (
              /***/
              function(n) {
                n.exports = function(l) {
                  try {
                    return !!l();
                  } catch {
                    return !0;
                  }
                };
              }
            ),
            /***/
            7007: (
              /***/
              function(n, l, o) {
                o(4916);
                var s = o(1320), u = o(7293), c = o(5112), f = o(2261), p = o(8880), h = c("species"), v = !u(function() {
                  var w = /./;
                  return w.exec = function() {
                    var T = [];
                    return T.groups = { a: "7" }, T;
                  }, "".replace(w, "$<a>") !== "7";
                }), m = function() {
                  return "a".replace(/./, "$0") === "$0";
                }(), g = c("replace"), y = function() {
                  return /./[g] ? /./[g]("a", "$0") === "" : !1;
                }(), E = !u(function() {
                  var w = /(?:)/, T = w.exec;
                  w.exec = function() {
                    return T.apply(this, arguments);
                  };
                  var S = "ab".split(w);
                  return S.length !== 2 || S[0] !== "a" || S[1] !== "b";
                });
                n.exports = function(w, T, S, D) {
                  var L = c(w), U = !u(function() {
                    var Y = {};
                    return Y[L] = function() {
                      return 7;
                    }, ""[w](Y) != 7;
                  }), j = U && !u(function() {
                    var Y = !1, W = /a/;
                    return w === "split" && (W = {}, W.constructor = {}, W.constructor[h] = function() {
                      return W;
                    }, W.flags = "", W[L] = /./[L]), W.exec = function() {
                      return Y = !0, null;
                    }, W[L](""), !Y;
                  });
                  if (!U || !j || w === "replace" && !(v && m && !y) || w === "split" && !E) {
                    var B = /./[L], H = S(L, ""[w], function(Y, W, re, X, he) {
                      return W.exec === f ? U && !he ? { done: !0, value: B.call(W, re, X) } : { done: !0, value: Y.call(re, W, X) } : { done: !1 };
                    }, {
                      REPLACE_KEEPS_$0: m,
                      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: y
                    }), k = H[0], z = H[1];
                    s(String.prototype, w, k), s(
                      RegExp.prototype,
                      L,
                      T == 2 ? function(Y, W) {
                        return z.call(Y, this, W);
                      } : function(Y) {
                        return z.call(Y, this);
                      }
                    );
                  }
                  D && p(RegExp.prototype[L], "sham", !0);
                };
              }
            ),
            /***/
            9974: (
              /***/
              function(n, l, o) {
                var s = o(3099);
                n.exports = function(u, c, f) {
                  if (s(u), c === void 0) return u;
                  switch (f) {
                    case 0:
                      return function() {
                        return u.call(c);
                      };
                    case 1:
                      return function(p) {
                        return u.call(c, p);
                      };
                    case 2:
                      return function(p, h) {
                        return u.call(c, p, h);
                      };
                    case 3:
                      return function(p, h, v) {
                        return u.call(c, p, h, v);
                      };
                  }
                  return function() {
                    return u.apply(c, arguments);
                  };
                };
              }
            ),
            /***/
            5005: (
              /***/
              function(n, l, o) {
                var s = o(857), u = o(7854), c = function(f) {
                  return typeof f == "function" ? f : void 0;
                };
                n.exports = function(f, p) {
                  return arguments.length < 2 ? c(s[f]) || c(u[f]) : s[f] && s[f][p] || u[f] && u[f][p];
                };
              }
            ),
            /***/
            1246: (
              /***/
              function(n, l, o) {
                var s = o(648), u = o(7497), c = o(5112), f = c("iterator");
                n.exports = function(p) {
                  if (p != null) return p[f] || p["@@iterator"] || u[s(p)];
                };
              }
            ),
            /***/
            8554: (
              /***/
              function(n, l, o) {
                var s = o(9670), u = o(1246);
                n.exports = function(c) {
                  var f = u(c);
                  if (typeof f != "function")
                    throw TypeError(String(c) + " is not iterable");
                  return s(f.call(c));
                };
              }
            ),
            /***/
            647: (
              /***/
              function(n, l, o) {
                var s = o(7908), u = Math.floor, c = "".replace, f = /\$([$&'`]|\d\d?|<[^>]*>)/g, p = /\$([$&'`]|\d\d?)/g;
                n.exports = function(h, v, m, g, y, E) {
                  var w = m + h.length, T = g.length, S = p;
                  return y !== void 0 && (y = s(y), S = f), c.call(E, S, function(D, L) {
                    var U;
                    switch (L.charAt(0)) {
                      case "$":
                        return "$";
                      case "&":
                        return h;
                      case "`":
                        return v.slice(0, m);
                      case "'":
                        return v.slice(w);
                      case "<":
                        U = y[L.slice(1, -1)];
                        break;
                      default:
                        var j = +L;
                        if (j === 0) return D;
                        if (j > T) {
                          var B = u(j / 10);
                          return B === 0 ? D : B <= T ? g[B - 1] === void 0 ? L.charAt(1) : g[B - 1] + L.charAt(1) : D;
                        }
                        U = g[j - 1];
                    }
                    return U === void 0 ? "" : U;
                  });
                };
              }
            ),
            /***/
            7854: (
              /***/
              function(n, l, o) {
                var s = function(u) {
                  return u && u.Math == Math && u;
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
                var l = {}.hasOwnProperty;
                n.exports = function(o, s) {
                  return l.call(o, s);
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
              function(n, l, o) {
                var s = o(5005);
                n.exports = s("document", "documentElement");
              }
            ),
            /***/
            4664: (
              /***/
              function(n, l, o) {
                var s = o(9781), u = o(7293), c = o(317);
                n.exports = !s && !u(function() {
                  return Object.defineProperty(c("div"), "a", {
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
                var l = Math.abs, o = Math.pow, s = Math.floor, u = Math.log, c = Math.LN2, f = function(h, v, m) {
                  var g = new Array(m), y = m * 8 - v - 1, E = (1 << y) - 1, w = E >> 1, T = v === 23 ? o(2, -24) - o(2, -77) : 0, S = h < 0 || h === 0 && 1 / h < 0 ? 1 : 0, D = 0, L, U, j;
                  for (h = l(h), h != h || h === 1 / 0 ? (U = h != h ? 1 : 0, L = E) : (L = s(u(h) / c), h * (j = o(2, -L)) < 1 && (L--, j *= 2), L + w >= 1 ? h += T / j : h += T * o(2, 1 - w), h * j >= 2 && (L++, j /= 2), L + w >= E ? (U = 0, L = E) : L + w >= 1 ? (U = (h * j - 1) * o(2, v), L = L + w) : (U = h * o(2, w - 1) * o(2, v), L = 0)); v >= 8; g[D++] = U & 255, U /= 256, v -= 8) ;
                  for (L = L << v | U, y += v; y > 0; g[D++] = L & 255, L /= 256, y -= 8) ;
                  return g[--D] |= S * 128, g;
                }, p = function(h, v) {
                  var m = h.length, g = m * 8 - v - 1, y = (1 << g) - 1, E = y >> 1, w = g - 7, T = m - 1, S = h[T--], D = S & 127, L;
                  for (S >>= 7; w > 0; D = D * 256 + h[T], T--, w -= 8) ;
                  for (L = D & (1 << -w) - 1, D >>= -w, w += v; w > 0; L = L * 256 + h[T], T--, w -= 8) ;
                  if (D === 0)
                    D = 1 - E;
                  else {
                    if (D === y)
                      return L ? NaN : S ? -1 / 0 : 1 / 0;
                    L = L + o(2, v), D = D - E;
                  }
                  return (S ? -1 : 1) * L * o(2, D - v);
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
              function(n, l, o) {
                var s = o(7293), u = o(4326), c = "".split;
                n.exports = s(function() {
                  return !Object("z").propertyIsEnumerable(0);
                }) ? function(f) {
                  return u(f) == "String" ? c.call(f, "") : Object(f);
                } : Object;
              }
            ),
            /***/
            9587: (
              /***/
              function(n, l, o) {
                var s = o(111), u = o(7674);
                n.exports = function(c, f, p) {
                  var h, v;
                  return (
                    // it can work only with native `setPrototypeOf`
                    u && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
                    typeof (h = f.constructor) == "function" && h !== p && s(v = h.prototype) && v !== p.prototype && u(c, v), c
                  );
                };
              }
            ),
            /***/
            2788: (
              /***/
              function(n, l, o) {
                var s = o(5465), u = Function.toString;
                typeof s.inspectSource != "function" && (s.inspectSource = function(c) {
                  return u.call(c);
                }), n.exports = s.inspectSource;
              }
            ),
            /***/
            9909: (
              /***/
              function(n, l, o) {
                var s = o(8536), u = o(7854), c = o(111), f = o(8880), p = o(6656), h = o(5465), v = o(6200), m = o(3501), g = u.WeakMap, y, E, w, T = function(H) {
                  return w(H) ? E(H) : y(H, {});
                }, S = function(H) {
                  return function(k) {
                    var z;
                    if (!c(k) || (z = E(k)).type !== H)
                      throw TypeError("Incompatible receiver, " + H + " required");
                    return z;
                  };
                };
                if (s) {
                  var D = h.state || (h.state = new g()), L = D.get, U = D.has, j = D.set;
                  y = function(H, k) {
                    return k.facade = H, j.call(D, H, k), k;
                  }, E = function(H) {
                    return L.call(D, H) || {};
                  }, w = function(H) {
                    return U.call(D, H);
                  };
                } else {
                  var B = v("state");
                  m[B] = !0, y = function(H, k) {
                    return k.facade = H, f(H, B, k), k;
                  }, E = function(H) {
                    return p(H, B) ? H[B] : {};
                  }, w = function(H) {
                    return p(H, B);
                  };
                }
                n.exports = {
                  set: y,
                  get: E,
                  has: w,
                  enforce: T,
                  getterFor: S
                };
              }
            ),
            /***/
            7659: (
              /***/
              function(n, l, o) {
                var s = o(5112), u = o(7497), c = s("iterator"), f = Array.prototype;
                n.exports = function(p) {
                  return p !== void 0 && (u.Array === p || f[c] === p);
                };
              }
            ),
            /***/
            3157: (
              /***/
              function(n, l, o) {
                var s = o(4326);
                n.exports = Array.isArray || function(c) {
                  return s(c) == "Array";
                };
              }
            ),
            /***/
            4705: (
              /***/
              function(n, l, o) {
                var s = o(7293), u = /#|\.prototype\./, c = function(m, g) {
                  var y = p[f(m)];
                  return y == v ? !0 : y == h ? !1 : typeof g == "function" ? s(g) : !!g;
                }, f = c.normalize = function(m) {
                  return String(m).replace(u, ".").toLowerCase();
                }, p = c.data = {}, h = c.NATIVE = "N", v = c.POLYFILL = "P";
                n.exports = c;
              }
            ),
            /***/
            111: (
              /***/
              function(n) {
                n.exports = function(l) {
                  return typeof l == "object" ? l !== null : typeof l == "function";
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
              function(n, l, o) {
                var s = o(111), u = o(4326), c = o(5112), f = c("match");
                n.exports = function(p) {
                  var h;
                  return s(p) && ((h = p[f]) !== void 0 ? !!h : u(p) == "RegExp");
                };
              }
            ),
            /***/
            9212: (
              /***/
              function(n, l, o) {
                var s = o(9670);
                n.exports = function(u) {
                  var c = u.return;
                  if (c !== void 0)
                    return s(c.call(u)).value;
                };
              }
            ),
            /***/
            3383: (
              /***/
              function(n, l, o) {
                var s = o(7293), u = o(9518), c = o(8880), f = o(6656), p = o(5112), h = o(1913), v = p("iterator"), m = !1, g = function() {
                  return this;
                }, y, E, w;
                [].keys && (w = [].keys(), "next" in w ? (E = u(u(w)), E !== Object.prototype && (y = E)) : m = !0);
                var T = y == null || s(function() {
                  var S = {};
                  return y[v].call(S) !== S;
                });
                T && (y = {}), (!h || T) && !f(y, v) && c(y, v, g), n.exports = {
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
              function(n, l, o) {
                var s = o(7293);
                n.exports = !!Object.getOwnPropertySymbols && !s(function() {
                  return !String(Symbol());
                });
              }
            ),
            /***/
            590: (
              /***/
              function(n, l, o) {
                var s = o(7293), u = o(5112), c = o(1913), f = u("iterator");
                n.exports = !s(function() {
                  var p = new URL("b?a=1&b=2&c=3", "http://a"), h = p.searchParams, v = "";
                  return p.pathname = "c%20d", h.forEach(function(m, g) {
                    h.delete("b"), v += g + m;
                  }), c && !p.toJSON || !h.sort || p.href !== "http://a/c%20d?a=1&c=3" || h.get("c") !== "3" || String(new URLSearchParams("?a=1")) !== "a=1" || !h[f] || new URL("https://a@b").username !== "a" || new URLSearchParams(new URLSearchParams("a=b")).get("a") !== "b" || new URL("http://тест").host !== "xn--e1aybc" || new URL("http://a#б").hash !== "#%D0%B1" || v !== "a1c3" || new URL("http://x", void 0).host !== "x";
                });
              }
            ),
            /***/
            8536: (
              /***/
              function(n, l, o) {
                var s = o(7854), u = o(2788), c = s.WeakMap;
                n.exports = typeof c == "function" && /native code/.test(u(c));
              }
            ),
            /***/
            1574: (
              /***/
              function(n, l, o) {
                var s = o(9781), u = o(7293), c = o(1956), f = o(5181), p = o(5296), h = o(7908), v = o(8361), m = Object.assign, g = Object.defineProperty;
                n.exports = !m || u(function() {
                  if (s && m({ b: 1 }, m(g({}, "a", {
                    enumerable: !0,
                    get: function() {
                      g(this, "b", {
                        value: 3,
                        enumerable: !1
                      });
                    }
                  }), { b: 2 })).b !== 1) return !0;
                  var y = {}, E = {}, w = Symbol(), T = "abcdefghijklmnopqrst";
                  return y[w] = 7, T.split("").forEach(function(S) {
                    E[S] = S;
                  }), m({}, y)[w] != 7 || c(m({}, E)).join("") != T;
                }) ? function(E, w) {
                  for (var T = h(E), S = arguments.length, D = 1, L = f.f, U = p.f; S > D; )
                    for (var j = v(arguments[D++]), B = L ? c(j).concat(L(j)) : c(j), H = B.length, k = 0, z; H > k; )
                      z = B[k++], (!s || U.call(j, z)) && (T[z] = j[z]);
                  return T;
                } : m;
              }
            ),
            /***/
            30: (
              /***/
              function(n, l, o) {
                var s = o(9670), u = o(6048), c = o(748), f = o(3501), p = o(490), h = o(317), v = o(6200), m = ">", g = "<", y = "prototype", E = "script", w = v("IE_PROTO"), T = function() {
                }, S = function(B) {
                  return g + E + m + B + g + "/" + E + m;
                }, D = function(B) {
                  B.write(S("")), B.close();
                  var H = B.parentWindow.Object;
                  return B = null, H;
                }, L = function() {
                  var B = h("iframe"), H = "java" + E + ":", k;
                  return B.style.display = "none", p.appendChild(B), B.src = String(H), k = B.contentWindow.document, k.open(), k.write(S("document.F=Object")), k.close(), k.F;
                }, U, j = function() {
                  try {
                    U = document.domain && new ActiveXObject("htmlfile");
                  } catch {
                  }
                  j = U ? D(U) : L();
                  for (var B = c.length; B--; ) delete j[y][c[B]];
                  return j();
                };
                f[w] = !0, n.exports = Object.create || function(H, k) {
                  var z;
                  return H !== null ? (T[y] = s(H), z = new T(), T[y] = null, z[w] = H) : z = j(), k === void 0 ? z : u(z, k);
                };
              }
            ),
            /***/
            6048: (
              /***/
              function(n, l, o) {
                var s = o(9781), u = o(3070), c = o(9670), f = o(1956);
                n.exports = s ? Object.defineProperties : function(h, v) {
                  c(h);
                  for (var m = f(v), g = m.length, y = 0, E; g > y; ) u.f(h, E = m[y++], v[E]);
                  return h;
                };
              }
            ),
            /***/
            3070: (
              /***/
              function(n, l, o) {
                var s = o(9781), u = o(4664), c = o(9670), f = o(7593), p = Object.defineProperty;
                l.f = s ? p : function(v, m, g) {
                  if (c(v), m = f(m, !0), c(g), u) try {
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
              function(n, l, o) {
                var s = o(9781), u = o(5296), c = o(9114), f = o(5656), p = o(7593), h = o(6656), v = o(4664), m = Object.getOwnPropertyDescriptor;
                l.f = s ? m : function(y, E) {
                  if (y = f(y), E = p(E, !0), v) try {
                    return m(y, E);
                  } catch {
                  }
                  if (h(y, E)) return c(!u.f.call(y, E), y[E]);
                };
              }
            ),
            /***/
            8006: (
              /***/
              function(n, l, o) {
                var s = o(6324), u = o(748), c = u.concat("length", "prototype");
                l.f = Object.getOwnPropertyNames || function(p) {
                  return s(p, c);
                };
              }
            ),
            /***/
            5181: (
              /***/
              function(n, l) {
                l.f = Object.getOwnPropertySymbols;
              }
            ),
            /***/
            9518: (
              /***/
              function(n, l, o) {
                var s = o(6656), u = o(7908), c = o(6200), f = o(8544), p = c("IE_PROTO"), h = Object.prototype;
                n.exports = f ? Object.getPrototypeOf : function(v) {
                  return v = u(v), s(v, p) ? v[p] : typeof v.constructor == "function" && v instanceof v.constructor ? v.constructor.prototype : v instanceof Object ? h : null;
                };
              }
            ),
            /***/
            6324: (
              /***/
              function(n, l, o) {
                var s = o(6656), u = o(5656), c = o(1318).indexOf, f = o(3501);
                n.exports = function(p, h) {
                  var v = u(p), m = 0, g = [], y;
                  for (y in v) !s(f, y) && s(v, y) && g.push(y);
                  for (; h.length > m; ) s(v, y = h[m++]) && (~c(g, y) || g.push(y));
                  return g;
                };
              }
            ),
            /***/
            1956: (
              /***/
              function(n, l, o) {
                var s = o(6324), u = o(748);
                n.exports = Object.keys || function(f) {
                  return s(f, u);
                };
              }
            ),
            /***/
            5296: (
              /***/
              function(n, l) {
                var o = {}.propertyIsEnumerable, s = Object.getOwnPropertyDescriptor, u = s && !o.call({ 1: 2 }, 1);
                l.f = u ? function(f) {
                  var p = s(this, f);
                  return !!p && p.enumerable;
                } : o;
              }
            ),
            /***/
            7674: (
              /***/
              function(n, l, o) {
                var s = o(9670), u = o(6077);
                n.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                  var c = !1, f = {}, p;
                  try {
                    p = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set, p.call(f, []), c = f instanceof Array;
                  } catch {
                  }
                  return function(v, m) {
                    return s(v), u(m), c ? p.call(v, m) : v.__proto__ = m, v;
                  };
                }() : void 0);
              }
            ),
            /***/
            288: (
              /***/
              function(n, l, o) {
                var s = o(1694), u = o(648);
                n.exports = s ? {}.toString : function() {
                  return "[object " + u(this) + "]";
                };
              }
            ),
            /***/
            3887: (
              /***/
              function(n, l, o) {
                var s = o(5005), u = o(8006), c = o(5181), f = o(9670);
                n.exports = s("Reflect", "ownKeys") || function(h) {
                  var v = u.f(f(h)), m = c.f;
                  return m ? v.concat(m(h)) : v;
                };
              }
            ),
            /***/
            857: (
              /***/
              function(n, l, o) {
                var s = o(7854);
                n.exports = s;
              }
            ),
            /***/
            2248: (
              /***/
              function(n, l, o) {
                var s = o(1320);
                n.exports = function(u, c, f) {
                  for (var p in c) s(u, p, c[p], f);
                  return u;
                };
              }
            ),
            /***/
            1320: (
              /***/
              function(n, l, o) {
                var s = o(7854), u = o(8880), c = o(6656), f = o(3505), p = o(2788), h = o(9909), v = h.get, m = h.enforce, g = String(String).split("String");
                (n.exports = function(y, E, w, T) {
                  var S = T ? !!T.unsafe : !1, D = T ? !!T.enumerable : !1, L = T ? !!T.noTargetGet : !1, U;
                  if (typeof w == "function" && (typeof E == "string" && !c(w, "name") && u(w, "name", E), U = m(w), U.source || (U.source = g.join(typeof E == "string" ? E : ""))), y === s) {
                    D ? y[E] = w : f(E, w);
                    return;
                  } else S ? !L && y[E] && (D = !0) : delete y[E];
                  D ? y[E] = w : u(y, E, w);
                })(Function.prototype, "toString", function() {
                  return typeof this == "function" && v(this).source || p(this);
                });
              }
            ),
            /***/
            7651: (
              /***/
              function(n, l, o) {
                var s = o(4326), u = o(2261);
                n.exports = function(c, f) {
                  var p = c.exec;
                  if (typeof p == "function") {
                    var h = p.call(c, f);
                    if (typeof h != "object")
                      throw TypeError("RegExp exec method returned something other than an Object or null");
                    return h;
                  }
                  if (s(c) !== "RegExp")
                    throw TypeError("RegExp#exec called on incompatible receiver");
                  return u.call(c, f);
                };
              }
            ),
            /***/
            2261: (
              /***/
              function(n, l, o) {
                var s = o(7066), u = o(2999), c = RegExp.prototype.exec, f = String.prototype.replace, p = c, h = function() {
                  var y = /a/, E = /b*/g;
                  return c.call(y, "a"), c.call(E, "a"), y.lastIndex !== 0 || E.lastIndex !== 0;
                }(), v = u.UNSUPPORTED_Y || u.BROKEN_CARET, m = /()??/.exec("")[1] !== void 0, g = h || m || v;
                g && (p = function(E) {
                  var w = this, T, S, D, L, U = v && w.sticky, j = s.call(w), B = w.source, H = 0, k = E;
                  return U && (j = j.replace("y", ""), j.indexOf("g") === -1 && (j += "g"), k = String(E).slice(w.lastIndex), w.lastIndex > 0 && (!w.multiline || w.multiline && E[w.lastIndex - 1] !== `
`) && (B = "(?: " + B + ")", k = " " + k, H++), S = new RegExp("^(?:" + B + ")", j)), m && (S = new RegExp("^" + B + "$(?!\\s)", j)), h && (T = w.lastIndex), D = c.call(U ? S : w, k), U ? D ? (D.input = D.input.slice(H), D[0] = D[0].slice(H), D.index = w.lastIndex, w.lastIndex += D[0].length) : w.lastIndex = 0 : h && D && (w.lastIndex = w.global ? D.index + D[0].length : T), m && D && D.length > 1 && f.call(D[0], S, function() {
                    for (L = 1; L < arguments.length - 2; L++)
                      arguments[L] === void 0 && (D[L] = void 0);
                  }), D;
                }), n.exports = p;
              }
            ),
            /***/
            7066: (
              /***/
              function(n, l, o) {
                var s = o(9670);
                n.exports = function() {
                  var u = s(this), c = "";
                  return u.global && (c += "g"), u.ignoreCase && (c += "i"), u.multiline && (c += "m"), u.dotAll && (c += "s"), u.unicode && (c += "u"), u.sticky && (c += "y"), c;
                };
              }
            ),
            /***/
            2999: (
              /***/
              function(n, l, o) {
                var s = o(7293);
                function u(c, f) {
                  return RegExp(c, f);
                }
                l.UNSUPPORTED_Y = s(function() {
                  var c = u("a", "y");
                  return c.lastIndex = 2, c.exec("abcd") != null;
                }), l.BROKEN_CARET = s(function() {
                  var c = u("^r", "gy");
                  return c.lastIndex = 2, c.exec("str") != null;
                });
              }
            ),
            /***/
            4488: (
              /***/
              function(n) {
                n.exports = function(l) {
                  if (l == null) throw TypeError("Can't call method on " + l);
                  return l;
                };
              }
            ),
            /***/
            3505: (
              /***/
              function(n, l, o) {
                var s = o(7854), u = o(8880);
                n.exports = function(c, f) {
                  try {
                    u(s, c, f);
                  } catch {
                    s[c] = f;
                  }
                  return f;
                };
              }
            ),
            /***/
            6340: (
              /***/
              function(n, l, o) {
                var s = o(5005), u = o(3070), c = o(5112), f = o(9781), p = c("species");
                n.exports = function(h) {
                  var v = s(h), m = u.f;
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
              function(n, l, o) {
                var s = o(3070).f, u = o(6656), c = o(5112), f = c("toStringTag");
                n.exports = function(p, h, v) {
                  p && !u(p = v ? p : p.prototype, f) && s(p, f, { configurable: !0, value: h });
                };
              }
            ),
            /***/
            6200: (
              /***/
              function(n, l, o) {
                var s = o(2309), u = o(9711), c = s("keys");
                n.exports = function(f) {
                  return c[f] || (c[f] = u(f));
                };
              }
            ),
            /***/
            5465: (
              /***/
              function(n, l, o) {
                var s = o(7854), u = o(3505), c = "__core-js_shared__", f = s[c] || u(c, {});
                n.exports = f;
              }
            ),
            /***/
            2309: (
              /***/
              function(n, l, o) {
                var s = o(1913), u = o(5465);
                (n.exports = function(c, f) {
                  return u[c] || (u[c] = f !== void 0 ? f : {});
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
              function(n, l, o) {
                var s = o(9670), u = o(3099), c = o(5112), f = c("species");
                n.exports = function(p, h) {
                  var v = s(p).constructor, m;
                  return v === void 0 || (m = s(v)[f]) == null ? h : u(m);
                };
              }
            ),
            /***/
            8710: (
              /***/
              function(n, l, o) {
                var s = o(9958), u = o(4488), c = function(f) {
                  return function(p, h) {
                    var v = String(u(p)), m = s(h), g = v.length, y, E;
                    return m < 0 || m >= g ? f ? "" : void 0 : (y = v.charCodeAt(m), y < 55296 || y > 56319 || m + 1 === g || (E = v.charCodeAt(m + 1)) < 56320 || E > 57343 ? f ? v.charAt(m) : y : f ? v.slice(m, m + 2) : (y - 55296 << 10) + (E - 56320) + 65536);
                  };
                };
                n.exports = {
                  // `String.prototype.codePointAt` method
                  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
                  codeAt: c(!1),
                  // `String.prototype.at` method
                  // https://github.com/mathiasbynens/String.prototype.at
                  charAt: c(!0)
                };
              }
            ),
            /***/
            3197: (
              /***/
              function(n) {
                var l = 2147483647, o = 36, s = 1, u = 26, c = 38, f = 700, p = 72, h = 128, v = "-", m = /[^\0-\u007E]/, g = /[.\u3002\uFF0E\uFF61]/g, y = "Overflow: input needs wider integers to process", E = o - s, w = Math.floor, T = String.fromCharCode, S = function(j) {
                  for (var B = [], H = 0, k = j.length; H < k; ) {
                    var z = j.charCodeAt(H++);
                    if (z >= 55296 && z <= 56319 && H < k) {
                      var Y = j.charCodeAt(H++);
                      (Y & 64512) == 56320 ? B.push(((z & 1023) << 10) + (Y & 1023) + 65536) : (B.push(z), H--);
                    } else
                      B.push(z);
                  }
                  return B;
                }, D = function(j) {
                  return j + 22 + 75 * (j < 26);
                }, L = function(j, B, H) {
                  var k = 0;
                  for (j = H ? w(j / f) : j >> 1, j += w(j / B); j > E * u >> 1; k += o)
                    j = w(j / E);
                  return w(k + (E + 1) * j / (j + c));
                }, U = function(j) {
                  var B = [];
                  j = S(j);
                  var H = j.length, k = h, z = 0, Y = p, W, re;
                  for (W = 0; W < j.length; W++)
                    re = j[W], re < 128 && B.push(T(re));
                  var X = B.length, he = X;
                  for (X && B.push(v); he < H; ) {
                    var fe = l;
                    for (W = 0; W < j.length; W++)
                      re = j[W], re >= k && re < fe && (fe = re);
                    var Te = he + 1;
                    if (fe - k > w((l - z) / Te))
                      throw RangeError(y);
                    for (z += (fe - k) * Te, k = fe, W = 0; W < j.length; W++) {
                      if (re = j[W], re < k && ++z > l)
                        throw RangeError(y);
                      if (re == k) {
                        for (var Ie = z, xe = o; ; xe += o) {
                          var Ne = xe <= Y ? s : xe >= Y + u ? u : xe - Y;
                          if (Ie < Ne) break;
                          var Ue = Ie - Ne, Me = o - Ne;
                          B.push(T(D(Ne + Ue % Me))), Ie = w(Ue / Me);
                        }
                        B.push(T(D(Ie))), Y = L(z, Te, he == X), z = 0, ++he;
                      }
                    }
                    ++z, ++k;
                  }
                  return B.join("");
                };
                n.exports = function(j) {
                  var B = [], H = j.toLowerCase().replace(g, ".").split("."), k, z;
                  for (k = 0; k < H.length; k++)
                    z = H[k], B.push(m.test(z) ? "xn--" + U(z) : z);
                  return B.join(".");
                };
              }
            ),
            /***/
            6091: (
              /***/
              function(n, l, o) {
                var s = o(7293), u = o(1361), c = "​᠎";
                n.exports = function(f) {
                  return s(function() {
                    return !!u[f]() || c[f]() != c || u[f].name !== f;
                  });
                };
              }
            ),
            /***/
            3111: (
              /***/
              function(n, l, o) {
                var s = o(4488), u = o(1361), c = "[" + u + "]", f = RegExp("^" + c + c + "*"), p = RegExp(c + c + "*$"), h = function(v) {
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
              function(n, l, o) {
                var s = o(9958), u = Math.max, c = Math.min;
                n.exports = function(f, p) {
                  var h = s(f);
                  return h < 0 ? u(h + p, 0) : c(h, p);
                };
              }
            ),
            /***/
            7067: (
              /***/
              function(n, l, o) {
                var s = o(9958), u = o(7466);
                n.exports = function(c) {
                  if (c === void 0) return 0;
                  var f = s(c), p = u(f);
                  if (f !== p) throw RangeError("Wrong length or index");
                  return p;
                };
              }
            ),
            /***/
            5656: (
              /***/
              function(n, l, o) {
                var s = o(8361), u = o(4488);
                n.exports = function(c) {
                  return s(u(c));
                };
              }
            ),
            /***/
            9958: (
              /***/
              function(n) {
                var l = Math.ceil, o = Math.floor;
                n.exports = function(s) {
                  return isNaN(s = +s) ? 0 : (s > 0 ? o : l)(s);
                };
              }
            ),
            /***/
            7466: (
              /***/
              function(n, l, o) {
                var s = o(9958), u = Math.min;
                n.exports = function(c) {
                  return c > 0 ? u(s(c), 9007199254740991) : 0;
                };
              }
            ),
            /***/
            7908: (
              /***/
              function(n, l, o) {
                var s = o(4488);
                n.exports = function(u) {
                  return Object(s(u));
                };
              }
            ),
            /***/
            4590: (
              /***/
              function(n, l, o) {
                var s = o(3002);
                n.exports = function(u, c) {
                  var f = s(u);
                  if (f % c) throw RangeError("Wrong offset");
                  return f;
                };
              }
            ),
            /***/
            3002: (
              /***/
              function(n, l, o) {
                var s = o(9958);
                n.exports = function(u) {
                  var c = s(u);
                  if (c < 0) throw RangeError("The argument can't be less than 0");
                  return c;
                };
              }
            ),
            /***/
            7593: (
              /***/
              function(n, l, o) {
                var s = o(111);
                n.exports = function(u, c) {
                  if (!s(u)) return u;
                  var f, p;
                  if (c && typeof (f = u.toString) == "function" && !s(p = f.call(u)) || typeof (f = u.valueOf) == "function" && !s(p = f.call(u)) || !c && typeof (f = u.toString) == "function" && !s(p = f.call(u))) return p;
                  throw TypeError("Can't convert object to primitive value");
                };
              }
            ),
            /***/
            1694: (
              /***/
              function(n, l, o) {
                var s = o(5112), u = s("toStringTag"), c = {};
                c[u] = "z", n.exports = String(c) === "[object z]";
              }
            ),
            /***/
            9843: (
              /***/
              function(n, l, o) {
                var s = o(2109), u = o(7854), c = o(9781), f = o(3832), p = o(260), h = o(3331), v = o(5787), m = o(9114), g = o(8880), y = o(7466), E = o(7067), w = o(4590), T = o(7593), S = o(6656), D = o(648), L = o(111), U = o(30), j = o(7674), B = o(8006).f, H = o(7321), k = o(2092).forEach, z = o(6340), Y = o(3070), W = o(1236), re = o(9909), X = o(9587), he = re.get, fe = re.set, Te = Y.f, Ie = W.f, xe = Math.round, Ne = u.RangeError, Ue = h.ArrayBuffer, Me = h.DataView, be = p.NATIVE_ARRAY_BUFFER_VIEWS, O = p.TYPED_ARRAY_TAG, I = p.TypedArray, A = p.TypedArrayPrototype, F = p.aTypedArrayConstructor, b = p.isTypedArray, x = "BYTES_PER_ELEMENT", P = "Wrong length", M = function(q, te) {
                  for (var le = 0, ge = te.length, Ce = new (F(q))(ge); ge > le; ) Ce[le] = te[le++];
                  return Ce;
                }, $ = function(q, te) {
                  Te(q, te, { get: function() {
                    return he(this)[te];
                  } });
                }, V = function(q) {
                  var te;
                  return q instanceof Ue || (te = D(q)) == "ArrayBuffer" || te == "SharedArrayBuffer";
                }, Q = function(q, te) {
                  return b(q) && typeof te != "symbol" && te in q && String(+te) == String(te);
                }, Z = function(te, le) {
                  return Q(te, le = T(le, !0)) ? m(2, te[le]) : Ie(te, le);
                }, J = function(te, le, ge) {
                  return Q(te, le = T(le, !0)) && L(ge) && S(ge, "value") && !S(ge, "get") && !S(ge, "set") && !ge.configurable && (!S(ge, "writable") || ge.writable) && (!S(ge, "enumerable") || ge.enumerable) ? (te[le] = ge.value, te) : Te(te, le, ge);
                };
                c ? (be || (W.f = Z, Y.f = J, $(A, "buffer"), $(A, "byteOffset"), $(A, "byteLength"), $(A, "length")), s({ target: "Object", stat: !0, forced: !be }, {
                  getOwnPropertyDescriptor: Z,
                  defineProperty: J
                }), n.exports = function(q, te, le) {
                  var ge = q.match(/\d+$/)[0] / 8, Ce = q + (le ? "Clamped" : "") + "Array", Ke = "get" + q, qe = "set" + q, Ze = u[Ce], G = Ze, K = G && G.prototype, ee = {}, ce = function(Ae, Ee) {
                    var Ve = he(Ae);
                    return Ve.view[Ke](Ee * ge + Ve.byteOffset, !0);
                  }, Se = function(Ae, Ee, Ve) {
                    var Oe = he(Ae);
                    le && (Ve = (Ve = xe(Ve)) < 0 ? 0 : Ve > 255 ? 255 : Ve & 255), Oe.view[qe](Ee * ge + Oe.byteOffset, Ve, !0);
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
                      return L(Ee) ? V(Ee) ? Oe !== void 0 ? new Ze(Ee, w(Ve, ge), Oe) : Ve !== void 0 ? new Ze(Ee, w(Ve, ge)) : new Ze(Ee) : b(Ee) ? M(G, Ee) : H.call(G, Ee) : new Ze(E(Ee));
                    }(), Ae, G);
                  }), j && j(G, I), k(B(Ze), function(Ae) {
                    Ae in G || g(G, Ae, Ze[Ae]);
                  }), G.prototype = K) : (G = te(function(Ae, Ee, Ve, Oe) {
                    v(Ae, G, Ce);
                    var we = 0, Re = 0, Be, ke, rt;
                    if (!L(Ee))
                      rt = E(Ee), ke = rt * ge, Be = new Ue(ke);
                    else if (V(Ee)) {
                      Be = Ee, Re = w(Ve, ge);
                      var Ht = Ee.byteLength;
                      if (Oe === void 0) {
                        if (Ht % ge || (ke = Ht - Re, ke < 0)) throw Ne(P);
                      } else if (ke = y(Oe) * ge, ke + Re > Ht) throw Ne(P);
                      rt = ke / ge;
                    } else return b(Ee) ? M(G, Ee) : H.call(G, Ee);
                    for (fe(Ae, {
                      buffer: Be,
                      byteOffset: Re,
                      byteLength: ke,
                      length: rt,
                      view: new Me(Be)
                    }); we < rt; ) Fe(Ae, we++);
                  }), j && j(G, I), K = G.prototype = U(A)), K.constructor !== G && g(K, "constructor", G), O && g(K, O, Ce), ee[Ce] = G, s({
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
              function(n, l, o) {
                var s = o(7854), u = o(7293), c = o(7072), f = o(260).NATIVE_ARRAY_BUFFER_VIEWS, p = s.ArrayBuffer, h = s.Int8Array;
                n.exports = !f || !u(function() {
                  h(1);
                }) || !u(function() {
                  new h(-1);
                }) || !c(function(v) {
                  new h(), new h(null), new h(1.5), new h(v);
                }, !0) || u(function() {
                  return new h(new p(2), 1, void 0).length !== 1;
                });
              }
            ),
            /***/
            3074: (
              /***/
              function(n, l, o) {
                var s = o(260).aTypedArrayConstructor, u = o(6707);
                n.exports = function(c, f) {
                  for (var p = u(c, c.constructor), h = 0, v = f.length, m = new (s(p))(v); v > h; ) m[h] = f[h++];
                  return m;
                };
              }
            ),
            /***/
            7321: (
              /***/
              function(n, l, o) {
                var s = o(7908), u = o(7466), c = o(1246), f = o(7659), p = o(9974), h = o(260).aTypedArrayConstructor;
                n.exports = function(m) {
                  var g = s(m), y = arguments.length, E = y > 1 ? arguments[1] : void 0, w = E !== void 0, T = c(g), S, D, L, U, j, B;
                  if (T != null && !f(T))
                    for (j = T.call(g), B = j.next, g = []; !(U = B.call(j)).done; )
                      g.push(U.value);
                  for (w && y > 2 && (E = p(E, arguments[2], 2)), D = u(g.length), L = new (h(this))(D), S = 0; D > S; S++)
                    L[S] = w ? E(g[S], S) : g[S];
                  return L;
                };
              }
            ),
            /***/
            9711: (
              /***/
              function(n) {
                var l = 0, o = Math.random();
                n.exports = function(s) {
                  return "Symbol(" + String(s === void 0 ? "" : s) + ")_" + (++l + o).toString(36);
                };
              }
            ),
            /***/
            3307: (
              /***/
              function(n, l, o) {
                var s = o(133);
                n.exports = s && !Symbol.sham && typeof Symbol.iterator == "symbol";
              }
            ),
            /***/
            5112: (
              /***/
              function(n, l, o) {
                var s = o(7854), u = o(2309), c = o(6656), f = o(9711), p = o(133), h = o(3307), v = u("wks"), m = s.Symbol, g = h ? m : m && m.withoutSetter || f;
                n.exports = function(y) {
                  return c(v, y) || (p && c(m, y) ? v[y] = m[y] : v[y] = g("Symbol." + y)), v[y];
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
              function(n, l, o) {
                var s = o(2109), u = o(7854), c = o(3331), f = o(6340), p = "ArrayBuffer", h = c[p], v = u[p];
                s({ global: !0, forced: v !== h }, {
                  ArrayBuffer: h
                }), f(p);
              }
            ),
            /***/
            2222: (
              /***/
              function(n, l, o) {
                var s = o(2109), u = o(7293), c = o(3157), f = o(111), p = o(7908), h = o(7466), v = o(6135), m = o(5417), g = o(1194), y = o(5112), E = o(7392), w = y("isConcatSpreadable"), T = 9007199254740991, S = "Maximum allowed index exceeded", D = E >= 51 || !u(function() {
                  var B = [];
                  return B[w] = !1, B.concat()[0] !== B;
                }), L = g("concat"), U = function(B) {
                  if (!f(B)) return !1;
                  var H = B[w];
                  return H !== void 0 ? !!H : c(B);
                }, j = !D || !L;
                s({ target: "Array", proto: !0, forced: j }, {
                  // eslint-disable-next-line no-unused-vars -- required for `.length`
                  concat: function(H) {
                    var k = p(this), z = m(k, 0), Y = 0, W, re, X, he, fe;
                    for (W = -1, X = arguments.length; W < X; W++)
                      if (fe = W === -1 ? k : arguments[W], U(fe)) {
                        if (he = h(fe.length), Y + he > T) throw TypeError(S);
                        for (re = 0; re < he; re++, Y++) re in fe && v(z, Y, fe[re]);
                      } else {
                        if (Y >= T) throw TypeError(S);
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
              function(n, l, o) {
                var s = o(2109), u = o(2092).filter, c = o(1194), f = c("filter");
                s({ target: "Array", proto: !0, forced: !f }, {
                  filter: function(h) {
                    return u(this, h, arguments.length > 1 ? arguments[1] : void 0);
                  }
                });
              }
            ),
            /***/
            2772: (
              /***/
              function(n, l, o) {
                var s = o(2109), u = o(1318).indexOf, c = o(9341), f = [].indexOf, p = !!f && 1 / [1].indexOf(1, -0) < 0, h = c("indexOf");
                s({ target: "Array", proto: !0, forced: p || !h }, {
                  indexOf: function(m) {
                    return p ? f.apply(this, arguments) || 0 : u(this, m, arguments.length > 1 ? arguments[1] : void 0);
                  }
                });
              }
            ),
            /***/
            6992: (
              /***/
              function(n, l, o) {
                var s = o(5656), u = o(1223), c = o(7497), f = o(9909), p = o(654), h = "Array Iterator", v = f.set, m = f.getterFor(h);
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
                  var g = m(this), y = g.target, E = g.kind, w = g.index++;
                  return !y || w >= y.length ? (g.target = void 0, { value: void 0, done: !0 }) : E == "keys" ? { value: w, done: !1 } : E == "values" ? { value: y[w], done: !1 } : { value: [w, y[w]], done: !1 };
                }, "values"), c.Arguments = c.Array, u("keys"), u("values"), u("entries");
              }
            ),
            /***/
            1249: (
              /***/
              function(n, l, o) {
                var s = o(2109), u = o(2092).map, c = o(1194), f = c("map");
                s({ target: "Array", proto: !0, forced: !f }, {
                  map: function(h) {
                    return u(this, h, arguments.length > 1 ? arguments[1] : void 0);
                  }
                });
              }
            ),
            /***/
            7042: (
              /***/
              function(n, l, o) {
                var s = o(2109), u = o(111), c = o(3157), f = o(1400), p = o(7466), h = o(5656), v = o(6135), m = o(5112), g = o(1194), y = g("slice"), E = m("species"), w = [].slice, T = Math.max;
                s({ target: "Array", proto: !0, forced: !y }, {
                  slice: function(D, L) {
                    var U = h(this), j = p(U.length), B = f(D, j), H = f(L === void 0 ? j : L, j), k, z, Y;
                    if (c(U) && (k = U.constructor, typeof k == "function" && (k === Array || c(k.prototype)) ? k = void 0 : u(k) && (k = k[E], k === null && (k = void 0)), k === Array || k === void 0))
                      return w.call(U, B, H);
                    for (z = new (k === void 0 ? Array : k)(T(H - B, 0)), Y = 0; B < H; B++, Y++) B in U && v(z, Y, U[B]);
                    return z.length = Y, z;
                  }
                });
              }
            ),
            /***/
            561: (
              /***/
              function(n, l, o) {
                var s = o(2109), u = o(1400), c = o(9958), f = o(7466), p = o(7908), h = o(5417), v = o(6135), m = o(1194), g = m("splice"), y = Math.max, E = Math.min, w = 9007199254740991, T = "Maximum allowed length exceeded";
                s({ target: "Array", proto: !0, forced: !g }, {
                  splice: function(D, L) {
                    var U = p(this), j = f(U.length), B = u(D, j), H = arguments.length, k, z, Y, W, re, X;
                    if (H === 0 ? k = z = 0 : H === 1 ? (k = 0, z = j - B) : (k = H - 2, z = E(y(c(L), 0), j - B)), j + k - z > w)
                      throw TypeError(T);
                    for (Y = h(U, z), W = 0; W < z; W++)
                      re = B + W, re in U && v(Y, W, U[re]);
                    if (Y.length = z, k < z) {
                      for (W = B; W < j - z; W++)
                        re = W + z, X = W + k, re in U ? U[X] = U[re] : delete U[X];
                      for (W = j; W > j - z + k; W--) delete U[W - 1];
                    } else if (k > z)
                      for (W = j - z; W > B; W--)
                        re = W + z - 1, X = W + k - 1, re in U ? U[X] = U[re] : delete U[X];
                    for (W = 0; W < k; W++)
                      U[W + B] = arguments[W + 2];
                    return U.length = j - z + k, Y;
                  }
                });
              }
            ),
            /***/
            8309: (
              /***/
              function(n, l, o) {
                var s = o(9781), u = o(3070).f, c = Function.prototype, f = c.toString, p = /^\s*function ([^ (]*)/, h = "name";
                s && !(h in c) && u(c, h, {
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
              function(n, l, o) {
                var s = o(2109), u = o(7293), c = o(7908), f = o(9518), p = o(8544), h = u(function() {
                  f(1);
                });
                s({ target: "Object", stat: !0, forced: h, sham: !p }, {
                  getPrototypeOf: function(m) {
                    return f(c(m));
                  }
                });
              }
            ),
            /***/
            1539: (
              /***/
              function(n, l, o) {
                var s = o(1694), u = o(1320), c = o(288);
                s || u(Object.prototype, "toString", c, { unsafe: !0 });
              }
            ),
            /***/
            4916: (
              /***/
              function(n, l, o) {
                var s = o(2109), u = o(2261);
                s({ target: "RegExp", proto: !0, forced: /./.exec !== u }, {
                  exec: u
                });
              }
            ),
            /***/
            9714: (
              /***/
              function(n, l, o) {
                var s = o(1320), u = o(9670), c = o(7293), f = o(7066), p = "toString", h = RegExp.prototype, v = h[p], m = c(function() {
                  return v.call({ source: "a", flags: "b" }) != "/a/b";
                }), g = v.name != p;
                (m || g) && s(RegExp.prototype, p, function() {
                  var E = u(this), w = String(E.source), T = E.flags, S = String(T === void 0 && E instanceof RegExp && !("flags" in h) ? f.call(E) : T);
                  return "/" + w + "/" + S;
                }, { unsafe: !0 });
              }
            ),
            /***/
            8783: (
              /***/
              function(n, l, o) {
                var s = o(8710).charAt, u = o(9909), c = o(654), f = "String Iterator", p = u.set, h = u.getterFor(f);
                c(String, "String", function(v) {
                  p(this, {
                    type: f,
                    string: String(v),
                    index: 0
                  });
                }, function() {
                  var m = h(this), g = m.string, y = m.index, E;
                  return y >= g.length ? { value: void 0, done: !0 } : (E = s(g, y), m.index += E.length, { value: E, done: !1 });
                });
              }
            ),
            /***/
            4723: (
              /***/
              function(n, l, o) {
                var s = o(7007), u = o(9670), c = o(7466), f = o(4488), p = o(1530), h = o(7651);
                s("match", 1, function(v, m, g) {
                  return [
                    // `String.prototype.match` method
                    // https://tc39.es/ecma262/#sec-string.prototype.match
                    function(E) {
                      var w = f(this), T = E == null ? void 0 : E[v];
                      return T !== void 0 ? T.call(E, w) : new RegExp(E)[v](String(w));
                    },
                    // `RegExp.prototype[@@match]` method
                    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
                    function(y) {
                      var E = g(m, y, this);
                      if (E.done) return E.value;
                      var w = u(y), T = String(this);
                      if (!w.global) return h(w, T);
                      var S = w.unicode;
                      w.lastIndex = 0;
                      for (var D = [], L = 0, U; (U = h(w, T)) !== null; ) {
                        var j = String(U[0]);
                        D[L] = j, j === "" && (w.lastIndex = p(T, c(w.lastIndex), S)), L++;
                      }
                      return L === 0 ? null : D;
                    }
                  ];
                });
              }
            ),
            /***/
            5306: (
              /***/
              function(n, l, o) {
                var s = o(7007), u = o(9670), c = o(7466), f = o(9958), p = o(4488), h = o(1530), v = o(647), m = o(7651), g = Math.max, y = Math.min, E = function(w) {
                  return w === void 0 ? w : String(w);
                };
                s("replace", 2, function(w, T, S, D) {
                  var L = D.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE, U = D.REPLACE_KEEPS_$0, j = L ? "$" : "$0";
                  return [
                    // `String.prototype.replace` method
                    // https://tc39.es/ecma262/#sec-string.prototype.replace
                    function(H, k) {
                      var z = p(this), Y = H == null ? void 0 : H[w];
                      return Y !== void 0 ? Y.call(H, z, k) : T.call(String(z), H, k);
                    },
                    // `RegExp.prototype[@@replace]` method
                    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
                    function(B, H) {
                      if (!L && U || typeof H == "string" && H.indexOf(j) === -1) {
                        var k = S(T, B, this, H);
                        if (k.done) return k.value;
                      }
                      var z = u(B), Y = String(this), W = typeof H == "function";
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
                        Te === "" && (z.lastIndex = h(Y, c(z.lastIndex), X));
                      }
                      for (var Ie = "", xe = 0, Ne = 0; Ne < he.length; Ne++) {
                        fe = he[Ne];
                        for (var Ue = String(fe[0]), Me = g(y(f(fe.index), Y.length), 0), be = [], O = 1; O < fe.length; O++) be.push(E(fe[O]));
                        var I = fe.groups;
                        if (W) {
                          var A = [Ue].concat(be, Me, Y);
                          I !== void 0 && A.push(I);
                          var F = String(H.apply(void 0, A));
                        } else
                          F = v(Ue, Y, Me, be, I, H);
                        Me >= xe && (Ie += Y.slice(xe, Me) + F, xe = Me + Ue.length);
                      }
                      return Ie + Y.slice(xe);
                    }
                  ];
                });
              }
            ),
            /***/
            3123: (
              /***/
              function(n, l, o) {
                var s = o(7007), u = o(7850), c = o(9670), f = o(4488), p = o(6707), h = o(1530), v = o(7466), m = o(7651), g = o(2261), y = o(7293), E = [].push, w = Math.min, T = 4294967295, S = !y(function() {
                  return !RegExp(T, "y");
                });
                s("split", 2, function(D, L, U) {
                  var j;
                  return "abbc".split(/(b)*/)[1] == "c" || // eslint-disable-next-line regexp/no-empty-group -- required for testing
                  "test".split(/(?:)/, -1).length != 4 || "ab".split(/(?:ab)*/).length != 2 || ".".split(/(.?)(.?)/).length != 4 || // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
                  ".".split(/()()/).length > 1 || "".split(/.?/).length ? j = function(B, H) {
                    var k = String(f(this)), z = H === void 0 ? T : H >>> 0;
                    if (z === 0) return [];
                    if (B === void 0) return [k];
                    if (!u(B))
                      return L.call(k, B, z);
                    for (var Y = [], W = (B.ignoreCase ? "i" : "") + (B.multiline ? "m" : "") + (B.unicode ? "u" : "") + (B.sticky ? "y" : ""), re = 0, X = new RegExp(B.source, W + "g"), he, fe, Te; (he = g.call(X, k)) && (fe = X.lastIndex, !(fe > re && (Y.push(k.slice(re, he.index)), he.length > 1 && he.index < k.length && E.apply(Y, he.slice(1)), Te = he[0].length, re = fe, Y.length >= z))); )
                      X.lastIndex === he.index && X.lastIndex++;
                    return re === k.length ? (Te || !X.test("")) && Y.push("") : Y.push(k.slice(re)), Y.length > z ? Y.slice(0, z) : Y;
                  } : "0".split(void 0, 0).length ? j = function(B, H) {
                    return B === void 0 && H === 0 ? [] : L.call(this, B, H);
                  } : j = L, [
                    // `String.prototype.split` method
                    // https://tc39.es/ecma262/#sec-string.prototype.split
                    function(H, k) {
                      var z = f(this), Y = H == null ? void 0 : H[D];
                      return Y !== void 0 ? Y.call(H, z, k) : j.call(String(z), H, k);
                    },
                    // `RegExp.prototype[@@split]` method
                    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
                    //
                    // NOTE: This cannot be properly polyfilled in engines that don't support
                    // the 'y' flag.
                    function(B, H) {
                      var k = U(j, B, this, H, j !== L);
                      if (k.done) return k.value;
                      var z = c(B), Y = String(this), W = p(z, RegExp), re = z.unicode, X = (z.ignoreCase ? "i" : "") + (z.multiline ? "m" : "") + (z.unicode ? "u" : "") + (S ? "y" : "g"), he = new W(S ? z : "^(?:" + z.source + ")", X), fe = H === void 0 ? T : H >>> 0;
                      if (fe === 0) return [];
                      if (Y.length === 0) return m(he, Y) === null ? [Y] : [];
                      for (var Te = 0, Ie = 0, xe = []; Ie < Y.length; ) {
                        he.lastIndex = S ? Ie : 0;
                        var Ne = m(he, S ? Y : Y.slice(Ie)), Ue;
                        if (Ne === null || (Ue = w(v(he.lastIndex + (S ? 0 : Ie)), Y.length)) === Te)
                          Ie = h(Y, Ie, re);
                        else {
                          if (xe.push(Y.slice(Te, Ie)), xe.length === fe) return xe;
                          for (var Me = 1; Me <= Ne.length - 1; Me++)
                            if (xe.push(Ne[Me]), xe.length === fe) return xe;
                          Ie = Te = Ue;
                        }
                      }
                      return xe.push(Y.slice(Te)), xe;
                    }
                  ];
                }, !S);
              }
            ),
            /***/
            3210: (
              /***/
              function(n, l, o) {
                var s = o(2109), u = o(3111).trim, c = o(6091);
                s({ target: "String", proto: !0, forced: c("trim") }, {
                  trim: function() {
                    return u(this);
                  }
                });
              }
            ),
            /***/
            2990: (
              /***/
              function(n, l, o) {
                var s = o(260), u = o(1048), c = s.aTypedArray, f = s.exportTypedArrayMethod;
                f("copyWithin", function(h, v) {
                  return u.call(c(this), h, v, arguments.length > 2 ? arguments[2] : void 0);
                });
              }
            ),
            /***/
            8927: (
              /***/
              function(n, l, o) {
                var s = o(260), u = o(2092).every, c = s.aTypedArray, f = s.exportTypedArrayMethod;
                f("every", function(h) {
                  return u(c(this), h, arguments.length > 1 ? arguments[1] : void 0);
                });
              }
            ),
            /***/
            3105: (
              /***/
              function(n, l, o) {
                var s = o(260), u = o(1285), c = s.aTypedArray, f = s.exportTypedArrayMethod;
                f("fill", function(h) {
                  return u.apply(c(this), arguments);
                });
              }
            ),
            /***/
            5035: (
              /***/
              function(n, l, o) {
                var s = o(260), u = o(2092).filter, c = o(3074), f = s.aTypedArray, p = s.exportTypedArrayMethod;
                p("filter", function(v) {
                  var m = u(f(this), v, arguments.length > 1 ? arguments[1] : void 0);
                  return c(this, m);
                });
              }
            ),
            /***/
            7174: (
              /***/
              function(n, l, o) {
                var s = o(260), u = o(2092).findIndex, c = s.aTypedArray, f = s.exportTypedArrayMethod;
                f("findIndex", function(h) {
                  return u(c(this), h, arguments.length > 1 ? arguments[1] : void 0);
                });
              }
            ),
            /***/
            4345: (
              /***/
              function(n, l, o) {
                var s = o(260), u = o(2092).find, c = s.aTypedArray, f = s.exportTypedArrayMethod;
                f("find", function(h) {
                  return u(c(this), h, arguments.length > 1 ? arguments[1] : void 0);
                });
              }
            ),
            /***/
            2846: (
              /***/
              function(n, l, o) {
                var s = o(260), u = o(2092).forEach, c = s.aTypedArray, f = s.exportTypedArrayMethod;
                f("forEach", function(h) {
                  u(c(this), h, arguments.length > 1 ? arguments[1] : void 0);
                });
              }
            ),
            /***/
            4731: (
              /***/
              function(n, l, o) {
                var s = o(260), u = o(1318).includes, c = s.aTypedArray, f = s.exportTypedArrayMethod;
                f("includes", function(h) {
                  return u(c(this), h, arguments.length > 1 ? arguments[1] : void 0);
                });
              }
            ),
            /***/
            7209: (
              /***/
              function(n, l, o) {
                var s = o(260), u = o(1318).indexOf, c = s.aTypedArray, f = s.exportTypedArrayMethod;
                f("indexOf", function(h) {
                  return u(c(this), h, arguments.length > 1 ? arguments[1] : void 0);
                });
              }
            ),
            /***/
            6319: (
              /***/
              function(n, l, o) {
                var s = o(7854), u = o(260), c = o(6992), f = o(5112), p = f("iterator"), h = s.Uint8Array, v = c.values, m = c.keys, g = c.entries, y = u.aTypedArray, E = u.exportTypedArrayMethod, w = h && h.prototype[p], T = !!w && (w.name == "values" || w.name == null), S = function() {
                  return v.call(y(this));
                };
                E("entries", function() {
                  return g.call(y(this));
                }), E("keys", function() {
                  return m.call(y(this));
                }), E("values", S, !T), E(p, S, !T);
              }
            ),
            /***/
            8867: (
              /***/
              function(n, l, o) {
                var s = o(260), u = s.aTypedArray, c = s.exportTypedArrayMethod, f = [].join;
                c("join", function(h) {
                  return f.apply(u(this), arguments);
                });
              }
            ),
            /***/
            7789: (
              /***/
              function(n, l, o) {
                var s = o(260), u = o(6583), c = s.aTypedArray, f = s.exportTypedArrayMethod;
                f("lastIndexOf", function(h) {
                  return u.apply(c(this), arguments);
                });
              }
            ),
            /***/
            3739: (
              /***/
              function(n, l, o) {
                var s = o(260), u = o(2092).map, c = o(6707), f = s.aTypedArray, p = s.aTypedArrayConstructor, h = s.exportTypedArrayMethod;
                h("map", function(m) {
                  return u(f(this), m, arguments.length > 1 ? arguments[1] : void 0, function(g, y) {
                    return new (p(c(g, g.constructor)))(y);
                  });
                });
              }
            ),
            /***/
            4483: (
              /***/
              function(n, l, o) {
                var s = o(260), u = o(3671).right, c = s.aTypedArray, f = s.exportTypedArrayMethod;
                f("reduceRight", function(h) {
                  return u(c(this), h, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
                });
              }
            ),
            /***/
            9368: (
              /***/
              function(n, l, o) {
                var s = o(260), u = o(3671).left, c = s.aTypedArray, f = s.exportTypedArrayMethod;
                f("reduce", function(h) {
                  return u(c(this), h, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
                });
              }
            ),
            /***/
            2056: (
              /***/
              function(n, l, o) {
                var s = o(260), u = s.aTypedArray, c = s.exportTypedArrayMethod, f = Math.floor;
                c("reverse", function() {
                  for (var h = this, v = u(h).length, m = f(v / 2), g = 0, y; g < m; )
                    y = h[g], h[g++] = h[--v], h[v] = y;
                  return h;
                });
              }
            ),
            /***/
            3462: (
              /***/
              function(n, l, o) {
                var s = o(260), u = o(7466), c = o(4590), f = o(7908), p = o(7293), h = s.aTypedArray, v = s.exportTypedArrayMethod, m = p(function() {
                  new Int8Array(1).set({});
                });
                v("set", function(y) {
                  h(this);
                  var E = c(arguments.length > 1 ? arguments[1] : void 0, 1), w = this.length, T = f(y), S = u(T.length), D = 0;
                  if (S + E > w) throw RangeError("Wrong length");
                  for (; D < S; ) this[E + D] = T[D++];
                }, m);
              }
            ),
            /***/
            678: (
              /***/
              function(n, l, o) {
                var s = o(260), u = o(6707), c = o(7293), f = s.aTypedArray, p = s.aTypedArrayConstructor, h = s.exportTypedArrayMethod, v = [].slice, m = c(function() {
                  new Int8Array(1).slice();
                });
                h("slice", function(y, E) {
                  for (var w = v.call(f(this), y, E), T = u(this, this.constructor), S = 0, D = w.length, L = new (p(T))(D); D > S; ) L[S] = w[S++];
                  return L;
                }, m);
              }
            ),
            /***/
            7462: (
              /***/
              function(n, l, o) {
                var s = o(260), u = o(2092).some, c = s.aTypedArray, f = s.exportTypedArrayMethod;
                f("some", function(h) {
                  return u(c(this), h, arguments.length > 1 ? arguments[1] : void 0);
                });
              }
            ),
            /***/
            3824: (
              /***/
              function(n, l, o) {
                var s = o(260), u = s.aTypedArray, c = s.exportTypedArrayMethod, f = [].sort;
                c("sort", function(h) {
                  return f.call(u(this), h);
                });
              }
            ),
            /***/
            5021: (
              /***/
              function(n, l, o) {
                var s = o(260), u = o(7466), c = o(1400), f = o(6707), p = s.aTypedArray, h = s.exportTypedArrayMethod;
                h("subarray", function(m, g) {
                  var y = p(this), E = y.length, w = c(m, E);
                  return new (f(y, y.constructor))(
                    y.buffer,
                    y.byteOffset + w * y.BYTES_PER_ELEMENT,
                    u((g === void 0 ? E : c(g, E)) - w)
                  );
                });
              }
            ),
            /***/
            2974: (
              /***/
              function(n, l, o) {
                var s = o(7854), u = o(260), c = o(7293), f = s.Int8Array, p = u.aTypedArray, h = u.exportTypedArrayMethod, v = [].toLocaleString, m = [].slice, g = !!f && c(function() {
                  v.call(new f(1));
                }), y = c(function() {
                  return [1, 2].toLocaleString() != new f([1, 2]).toLocaleString();
                }) || !c(function() {
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
              function(n, l, o) {
                var s = o(260).exportTypedArrayMethod, u = o(7293), c = o(7854), f = c.Uint8Array, p = f && f.prototype || {}, h = [].toString, v = [].join;
                u(function() {
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
              function(n, l, o) {
                var s = o(9843);
                s("Uint8", function(u) {
                  return function(f, p, h) {
                    return u(this, f, p, h);
                  };
                });
              }
            ),
            /***/
            4747: (
              /***/
              function(n, l, o) {
                var s = o(7854), u = o(8324), c = o(8533), f = o(8880);
                for (var p in u) {
                  var h = s[p], v = h && h.prototype;
                  if (v && v.forEach !== c) try {
                    f(v, "forEach", c);
                  } catch {
                    v.forEach = c;
                  }
                }
              }
            ),
            /***/
            3948: (
              /***/
              function(n, l, o) {
                var s = o(7854), u = o(8324), c = o(6992), f = o(8880), p = o(5112), h = p("iterator"), v = p("toStringTag"), m = c.values;
                for (var g in u) {
                  var y = s[g], E = y && y.prototype;
                  if (E) {
                    if (E[h] !== m) try {
                      f(E, h, m);
                    } catch {
                      E[h] = m;
                    }
                    if (E[v] || f(E, v, g), u[g]) {
                      for (var w in c)
                        if (E[w] !== c[w]) try {
                          f(E, w, c[w]);
                        } catch {
                          E[w] = c[w];
                        }
                    }
                  }
                }
              }
            ),
            /***/
            1637: (
              /***/
              function(n, l, o) {
                o(6992);
                var s = o(2109), u = o(5005), c = o(590), f = o(1320), p = o(2248), h = o(8003), v = o(4994), m = o(9909), g = o(5787), y = o(6656), E = o(9974), w = o(648), T = o(9670), S = o(111), D = o(30), L = o(9114), U = o(8554), j = o(1246), B = o(5112), H = u("fetch"), k = u("Headers"), z = B("iterator"), Y = "URLSearchParams", W = Y + "Iterator", re = m.set, X = m.getterFor(Y), he = m.getterFor(W), fe = /\+/g, Te = Array(4), Ie = function(M) {
                  return Te[M - 1] || (Te[M - 1] = RegExp("((?:%[\\da-f]{2}){" + M + "})", "gi"));
                }, xe = function(M) {
                  try {
                    return decodeURIComponent(M);
                  } catch {
                    return M;
                  }
                }, Ne = function(M) {
                  var $ = M.replace(fe, " "), V = 4;
                  try {
                    return decodeURIComponent($);
                  } catch {
                    for (; V; )
                      $ = $.replace(Ie(V--), xe);
                    return $;
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
                }, I = function(M, $) {
                  if ($)
                    for (var V = $.split("&"), Q = 0, Z, J; Q < V.length; )
                      Z = V[Q++], Z.length && (J = Z.split("="), M.push({
                        key: Ne(J.shift()),
                        value: Ne(J.join("="))
                      }));
                }, A = function(M) {
                  this.entries.length = 0, I(this.entries, M);
                }, F = function(M, $) {
                  if (M < $) throw TypeError("Not enough arguments");
                }, b = v(function($, V) {
                  re(this, {
                    type: W,
                    iterator: U(X($).entries),
                    kind: V
                  });
                }, "Iterator", function() {
                  var $ = he(this), V = $.kind, Q = $.iterator.next(), Z = Q.value;
                  return Q.done || (Q.value = V === "keys" ? Z.key : V === "values" ? Z.value : [Z.key, Z.value]), Q;
                }), x = function() {
                  g(this, x, Y);
                  var $ = arguments.length > 0 ? arguments[0] : void 0, V = this, Q = [], Z, J, q, te, le, ge, Ce, Ke, qe;
                  if (re(V, {
                    type: Y,
                    entries: Q,
                    updateURL: function() {
                    },
                    updateSearchParams: A
                  }), $ !== void 0)
                    if (S($))
                      if (Z = j($), typeof Z == "function")
                        for (J = Z.call($), q = J.next; !(te = q.call(J)).done; ) {
                          if (le = U(T(te.value)), ge = le.next, (Ce = ge.call(le)).done || (Ke = ge.call(le)).done || !ge.call(le).done) throw TypeError("Expected sequence with length 2");
                          Q.push({ key: Ce.value + "", value: Ke.value + "" });
                        }
                      else for (qe in $) y($, qe) && Q.push({ key: qe, value: $[qe] + "" });
                    else
                      I(Q, typeof $ == "string" ? $.charAt(0) === "?" ? $.slice(1) : $ : $ + "");
                }, P = x.prototype;
                p(P, {
                  // `URLSearchParams.prototype.append` method
                  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
                  append: function($, V) {
                    F(arguments.length, 2);
                    var Q = X(this);
                    Q.entries.push({ key: $ + "", value: V + "" }), Q.updateURL();
                  },
                  // `URLSearchParams.prototype.delete` method
                  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
                  delete: function(M) {
                    F(arguments.length, 1);
                    for (var $ = X(this), V = $.entries, Q = M + "", Z = 0; Z < V.length; )
                      V[Z].key === Q ? V.splice(Z, 1) : Z++;
                    $.updateURL();
                  },
                  // `URLSearchParams.prototype.get` method
                  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
                  get: function($) {
                    F(arguments.length, 1);
                    for (var V = X(this).entries, Q = $ + "", Z = 0; Z < V.length; Z++)
                      if (V[Z].key === Q) return V[Z].value;
                    return null;
                  },
                  // `URLSearchParams.prototype.getAll` method
                  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
                  getAll: function($) {
                    F(arguments.length, 1);
                    for (var V = X(this).entries, Q = $ + "", Z = [], J = 0; J < V.length; J++)
                      V[J].key === Q && Z.push(V[J].value);
                    return Z;
                  },
                  // `URLSearchParams.prototype.has` method
                  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
                  has: function($) {
                    F(arguments.length, 1);
                    for (var V = X(this).entries, Q = $ + "", Z = 0; Z < V.length; )
                      if (V[Z++].key === Q) return !0;
                    return !1;
                  },
                  // `URLSearchParams.prototype.set` method
                  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
                  set: function($, V) {
                    F(arguments.length, 1);
                    for (var Q = X(this), Z = Q.entries, J = !1, q = $ + "", te = V + "", le = 0, ge; le < Z.length; le++)
                      ge = Z[le], ge.key === q && (J ? Z.splice(le--, 1) : (J = !0, ge.value = te));
                    J || Z.push({ key: q, value: te }), Q.updateURL();
                  },
                  // `URLSearchParams.prototype.sort` method
                  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
                  sort: function() {
                    var $ = X(this), V = $.entries, Q = V.slice(), Z, J, q;
                    for (V.length = 0, q = 0; q < Q.length; q++) {
                      for (Z = Q[q], J = 0; J < q; J++)
                        if (V[J].key > Z.key) {
                          V.splice(J, 0, Z);
                          break;
                        }
                      J === q && V.push(Z);
                    }
                    $.updateURL();
                  },
                  // `URLSearchParams.prototype.forEach` method
                  forEach: function($) {
                    for (var V = X(this).entries, Q = E($, arguments.length > 1 ? arguments[1] : void 0, 3), Z = 0, J; Z < V.length; )
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
                  for (var $ = X(this).entries, V = [], Q = 0, Z; Q < $.length; )
                    Z = $[Q++], V.push(O(Z.key) + "=" + O(Z.value));
                  return V.join("&");
                }, { enumerable: !0 }), h(x, Y), s({ global: !0, forced: !c }, {
                  URLSearchParams: x
                }), !c && typeof H == "function" && typeof k == "function" && s({ global: !0, enumerable: !0, forced: !0 }, {
                  fetch: function($) {
                    var V = [$], Q, Z, J;
                    return arguments.length > 1 && (Q = arguments[1], S(Q) && (Z = Q.body, w(Z) === Y && (J = Q.headers ? new k(Q.headers) : new k(), J.has("content-type") || J.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"), Q = D(Q, {
                      body: L(0, String(Z)),
                      headers: L(0, J)
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
              function(n, l, o) {
                o(8783);
                var s = o(2109), u = o(9781), c = o(590), f = o(7854), p = o(6048), h = o(1320), v = o(5787), m = o(6656), g = o(1574), y = o(8457), E = o(8710).codeAt, w = o(3197), T = o(8003), S = o(1637), D = o(9909), L = f.URL, U = S.URLSearchParams, j = S.getState, B = D.set, H = D.getterFor("URL"), k = Math.floor, z = Math.pow, Y = "Invalid authority", W = "Invalid scheme", re = "Invalid host", X = "Invalid port", he = /[A-Za-z]/, fe = /[\d+-.A-Za-z]/, Te = /\d/, Ie = /^(0x|0X)/, xe = /^[0-7]+$/, Ne = /^\d+$/, Ue = /^[\dA-Fa-f]+$/, Me = /[\u0000\t\u000A\u000D #%/:?@[\\]]/, be = /[\u0000\t\u000A\u000D #/:?@[\\]]/, O = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g, I = /[\t\u000A\u000D]/g, A, F = function(R, ue) {
                  var ae, pe, me;
                  if (ue.charAt(0) == "[") {
                    if (ue.charAt(ue.length - 1) != "]" || (ae = x(ue.slice(1, -1)), !ae)) return re;
                    R.host = ae;
                  } else if (te(R)) {
                    if (ue = w(ue), Me.test(ue) || (ae = b(ue), ae === null)) return re;
                    R.host = ae;
                  } else {
                    if (be.test(ue)) return re;
                    for (ae = "", pe = y(ue), me = 0; me < pe.length; me++)
                      ae += J(pe[me], $);
                    R.host = ae;
                  }
                }, b = function(R) {
                  var ue = R.split("."), ae, pe, me, He, Pe, Qe, at;
                  if (ue.length && ue[ue.length - 1] == "" && ue.pop(), ae = ue.length, ae > 4) return R;
                  for (pe = [], me = 0; me < ae; me++) {
                    if (He = ue[me], He == "") return R;
                    if (Pe = 10, He.length > 1 && He.charAt(0) == "0" && (Pe = Ie.test(He) ? 16 : 8, He = He.slice(Pe == 8 ? 1 : 2)), He === "")
                      Qe = 0;
                    else {
                      if (!(Pe == 10 ? Ne : Pe == 8 ? xe : Ue).test(He)) return R;
                      Qe = parseInt(He, Pe);
                    }
                    pe.push(Qe);
                  }
                  for (me = 0; me < ae; me++)
                    if (Qe = pe[me], me == ae - 1) {
                      if (Qe >= z(256, 5 - ae)) return null;
                    } else if (Qe > 255) return null;
                  for (at = pe.pop(), me = 0; me < pe.length; me++)
                    at += pe[me] * z(256, 3 - me);
                  return at;
                }, x = function(R) {
                  var ue = [0, 0, 0, 0, 0, 0, 0, 0], ae = 0, pe = null, me = 0, He, Pe, Qe, at, it, It, ve, pt = function() {
                    return R.charAt(me);
                  };
                  if (pt() == ":") {
                    if (R.charAt(1) != ":") return;
                    me += 2, ae++, pe = ae;
                  }
                  for (; pt(); ) {
                    if (ae == 8) return;
                    if (pt() == ":") {
                      if (pe !== null) return;
                      me++, ae++, pe = ae;
                      continue;
                    }
                    for (He = Pe = 0; Pe < 4 && Ue.test(pt()); )
                      He = He * 16 + parseInt(pt(), 16), me++, Pe++;
                    if (pt() == ".") {
                      if (Pe == 0 || (me -= Pe, ae > 6)) return;
                      for (Qe = 0; pt(); ) {
                        if (at = null, Qe > 0)
                          if (pt() == "." && Qe < 4) me++;
                          else return;
                        if (!Te.test(pt())) return;
                        for (; Te.test(pt()); ) {
                          if (it = parseInt(pt(), 10), at === null) at = it;
                          else {
                            if (at == 0) return;
                            at = at * 10 + it;
                          }
                          if (at > 255) return;
                          me++;
                        }
                        ue[ae] = ue[ae] * 256 + at, Qe++, (Qe == 2 || Qe == 4) && ae++;
                      }
                      if (Qe != 4) return;
                      break;
                    } else if (pt() == ":") {
                      if (me++, !pt()) return;
                    } else if (pt()) return;
                    ue[ae++] = He;
                  }
                  if (pe !== null)
                    for (It = ae - pe, ae = 7; ae != 0 && It > 0; )
                      ve = ue[ae], ue[ae--] = ue[pe + It - 1], ue[pe + --It] = ve;
                  else if (ae != 8) return;
                  return ue;
                }, P = function(R) {
                  for (var ue = null, ae = 1, pe = null, me = 0, He = 0; He < 8; He++)
                    R[He] !== 0 ? (me > ae && (ue = pe, ae = me), pe = null, me = 0) : (pe === null && (pe = He), ++me);
                  return me > ae && (ue = pe, ae = me), ue;
                }, M = function(R) {
                  var ue, ae, pe, me;
                  if (typeof R == "number") {
                    for (ue = [], ae = 0; ae < 4; ae++)
                      ue.unshift(R % 256), R = k(R / 256);
                    return ue.join(".");
                  } else if (typeof R == "object") {
                    for (ue = "", pe = P(R), ae = 0; ae < 8; ae++)
                      me && R[ae] === 0 || (me && (me = !1), pe === ae ? (ue += ae ? ":" : "::", me = !0) : (ue += R[ae].toString(16), ae < 7 && (ue += ":")));
                    return "[" + ue + "]";
                  }
                  return R;
                }, $ = {}, V = g({}, $, {
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
                }), J = function(R, ue) {
                  var ae = E(R, 0);
                  return ae > 32 && ae < 127 && !m(ue, R) ? R : encodeURIComponent(R);
                }, q = {
                  ftp: 21,
                  file: null,
                  http: 80,
                  https: 443,
                  ws: 80,
                  wss: 443
                }, te = function(R) {
                  return m(q, R.scheme);
                }, le = function(R) {
                  return R.username != "" || R.password != "";
                }, ge = function(R) {
                  return !R.host || R.cannotBeABaseURL || R.scheme == "file";
                }, Ce = function(R, ue) {
                  var ae;
                  return R.length == 2 && he.test(R.charAt(0)) && ((ae = R.charAt(1)) == ":" || !ue && ae == "|");
                }, Ke = function(R) {
                  var ue;
                  return R.length > 1 && Ce(R.slice(0, 2)) && (R.length == 2 || (ue = R.charAt(2)) === "/" || ue === "\\" || ue === "?" || ue === "#");
                }, qe = function(R) {
                  var ue = R.path, ae = ue.length;
                  ae && (R.scheme != "file" || ae != 1 || !Ce(ue[0], !0)) && ue.pop();
                }, Ze = function(R) {
                  return R === "." || R.toLowerCase() === "%2e";
                }, G = function(R) {
                  return R = R.toLowerCase(), R === ".." || R === "%2e." || R === ".%2e" || R === "%2e%2e";
                }, K = {}, ee = {}, ce = {}, Se = {}, Fe = {}, Ae = {}, Ee = {}, Ve = {}, Oe = {}, we = {}, Re = {}, Be = {}, ke = {}, rt = {}, Ht = {}, Mn = {}, jt = {}, zt = {}, lr = {}, an = {}, yt = {}, Gt = function(R, ue, ae, pe) {
                  var me = ae || K, He = 0, Pe = "", Qe = !1, at = !1, it = !1, It, ve, pt, Qt;
                  for (ae || (R.scheme = "", R.username = "", R.password = "", R.host = null, R.port = null, R.path = [], R.query = null, R.fragment = null, R.cannotBeABaseURL = !1, ue = ue.replace(O, "")), ue = ue.replace(I, ""), It = y(ue); He <= It.length; ) {
                    switch (ve = It[He], me) {
                      case K:
                        if (ve && he.test(ve))
                          Pe += ve.toLowerCase(), me = ee;
                        else {
                          if (ae)
                            return W;
                          me = ce;
                          continue;
                        }
                        break;
                      case ee:
                        if (ve && (fe.test(ve) || ve == "+" || ve == "-" || ve == "."))
                          Pe += ve.toLowerCase();
                        else if (ve == ":") {
                          if (ae && (te(R) != m(q, Pe) || Pe == "file" && (le(R) || R.port !== null) || R.scheme == "file" && !R.host)) return;
                          if (R.scheme = Pe, ae) {
                            te(R) && q[R.scheme] == R.port && (R.port = null);
                            return;
                          }
                          Pe = "", R.scheme == "file" ? me = rt : te(R) && pe && pe.scheme == R.scheme ? me = Se : te(R) ? me = Ve : It[He + 1] == "/" ? (me = Fe, He++) : (R.cannotBeABaseURL = !0, R.path.push(""), me = lr);
                        } else {
                          if (ae)
                            return W;
                          Pe = "", me = ce, He = 0;
                          continue;
                        }
                        break;
                      case ce:
                        if (!pe || pe.cannotBeABaseURL && ve != "#") return W;
                        if (pe.cannotBeABaseURL && ve == "#") {
                          R.scheme = pe.scheme, R.path = pe.path.slice(), R.query = pe.query, R.fragment = "", R.cannotBeABaseURL = !0, me = yt;
                          break;
                        }
                        me = pe.scheme == "file" ? rt : Ae;
                        continue;
                      case Se:
                        if (ve == "/" && It[He + 1] == "/")
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
                          me = zt;
                          continue;
                        }
                      case Ae:
                        if (R.scheme = pe.scheme, ve == A)
                          R.username = pe.username, R.password = pe.password, R.host = pe.host, R.port = pe.port, R.path = pe.path.slice(), R.query = pe.query;
                        else if (ve == "/" || ve == "\\" && te(R))
                          me = Ee;
                        else if (ve == "?")
                          R.username = pe.username, R.password = pe.password, R.host = pe.host, R.port = pe.port, R.path = pe.path.slice(), R.query = "", me = an;
                        else if (ve == "#")
                          R.username = pe.username, R.password = pe.password, R.host = pe.host, R.port = pe.port, R.path = pe.path.slice(), R.query = pe.query, R.fragment = "", me = yt;
                        else {
                          R.username = pe.username, R.password = pe.password, R.host = pe.host, R.port = pe.port, R.path = pe.path.slice(), R.path.pop(), me = zt;
                          continue;
                        }
                        break;
                      case Ee:
                        if (te(R) && (ve == "/" || ve == "\\"))
                          me = Oe;
                        else if (ve == "/")
                          me = we;
                        else {
                          R.username = pe.username, R.password = pe.password, R.host = pe.host, R.port = pe.port, me = zt;
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
                          Qe && (Pe = "%40" + Pe), Qe = !0, pt = y(Pe);
                          for (var cr = 0; cr < pt.length; cr++) {
                            var Yr = pt[cr];
                            if (Yr == ":" && !it) {
                              it = !0;
                              continue;
                            }
                            var Kn = J(Yr, Z);
                            it ? R.password += Kn : R.username += Kn;
                          }
                          Pe = "";
                        } else if (ve == A || ve == "/" || ve == "?" || ve == "#" || ve == "\\" && te(R)) {
                          if (Qe && Pe == "") return Y;
                          He -= y(Pe).length + 1, Pe = "", me = Re;
                        } else Pe += ve;
                        break;
                      case Re:
                      case Be:
                        if (ae && R.scheme == "file") {
                          me = Mn;
                          continue;
                        } else if (ve == ":" && !at) {
                          if (Pe == "") return re;
                          if (Qt = F(R, Pe), Qt) return Qt;
                          if (Pe = "", me = ke, ae == Be) return;
                        } else if (ve == A || ve == "/" || ve == "?" || ve == "#" || ve == "\\" && te(R)) {
                          if (te(R) && Pe == "") return re;
                          if (ae && Pe == "" && (le(R) || R.port !== null)) return;
                          if (Qt = F(R, Pe), Qt) return Qt;
                          if (Pe = "", me = jt, ae) return;
                          continue;
                        } else
                          ve == "[" ? at = !0 : ve == "]" && (at = !1), Pe += ve;
                        break;
                      case ke:
                        if (Te.test(ve))
                          Pe += ve;
                        else if (ve == A || ve == "/" || ve == "?" || ve == "#" || ve == "\\" && te(R) || ae) {
                          if (Pe != "") {
                            var dr = parseInt(Pe, 10);
                            if (dr > 65535) return X;
                            R.port = te(R) && dr === q[R.scheme] ? null : dr, Pe = "";
                          }
                          if (ae) return;
                          me = jt;
                          continue;
                        } else return X;
                        break;
                      case rt:
                        if (R.scheme = "file", ve == "/" || ve == "\\") me = Ht;
                        else if (pe && pe.scheme == "file")
                          if (ve == A)
                            R.host = pe.host, R.path = pe.path.slice(), R.query = pe.query;
                          else if (ve == "?")
                            R.host = pe.host, R.path = pe.path.slice(), R.query = "", me = an;
                          else if (ve == "#")
                            R.host = pe.host, R.path = pe.path.slice(), R.query = pe.query, R.fragment = "", me = yt;
                          else {
                            Ke(It.slice(He).join("")) || (R.host = pe.host, R.path = pe.path.slice(), qe(R)), me = zt;
                            continue;
                          }
                        else {
                          me = zt;
                          continue;
                        }
                        break;
                      case Ht:
                        if (ve == "/" || ve == "\\") {
                          me = Mn;
                          break;
                        }
                        pe && pe.scheme == "file" && !Ke(It.slice(He).join("")) && (Ce(pe.path[0], !0) ? R.path.push(pe.path[0]) : R.host = pe.host), me = zt;
                        continue;
                      case Mn:
                        if (ve == A || ve == "/" || ve == "\\" || ve == "?" || ve == "#") {
                          if (!ae && Ce(Pe))
                            me = zt;
                          else if (Pe == "") {
                            if (R.host = "", ae) return;
                            me = jt;
                          } else {
                            if (Qt = F(R, Pe), Qt) return Qt;
                            if (R.host == "localhost" && (R.host = ""), ae) return;
                            Pe = "", me = jt;
                          }
                          continue;
                        } else Pe += ve;
                        break;
                      case jt:
                        if (te(R)) {
                          if (me = zt, ve != "/" && ve != "\\") continue;
                        } else if (!ae && ve == "?")
                          R.query = "", me = an;
                        else if (!ae && ve == "#")
                          R.fragment = "", me = yt;
                        else if (ve != A && (me = zt, ve != "/"))
                          continue;
                        break;
                      case zt:
                        if (ve == A || ve == "/" || ve == "\\" && te(R) || !ae && (ve == "?" || ve == "#")) {
                          if (G(Pe) ? (qe(R), ve != "/" && !(ve == "\\" && te(R)) && R.path.push("")) : Ze(Pe) ? ve != "/" && !(ve == "\\" && te(R)) && R.path.push("") : (R.scheme == "file" && !R.path.length && Ce(Pe) && (R.host && (R.host = ""), Pe = Pe.charAt(0) + ":"), R.path.push(Pe)), Pe = "", R.scheme == "file" && (ve == A || ve == "?" || ve == "#"))
                            for (; R.path.length > 1 && R.path[0] === ""; )
                              R.path.shift();
                          ve == "?" ? (R.query = "", me = an) : ve == "#" && (R.fragment = "", me = yt);
                        } else
                          Pe += J(ve, Q);
                        break;
                      case lr:
                        ve == "?" ? (R.query = "", me = an) : ve == "#" ? (R.fragment = "", me = yt) : ve != A && (R.path[0] += J(ve, $));
                        break;
                      case an:
                        !ae && ve == "#" ? (R.fragment = "", me = yt) : ve != A && (ve == "'" && te(R) ? R.query += "%27" : ve == "#" ? R.query += "%23" : R.query += J(ve, $));
                        break;
                      case yt:
                        ve != A && (R.fragment += J(ve, V));
                        break;
                    }
                    He++;
                  }
                }, hn = function(ue) {
                  var ae = v(this, hn, "URL"), pe = arguments.length > 1 ? arguments[1] : void 0, me = String(ue), He = B(ae, { type: "URL" }), Pe, Qe;
                  if (pe !== void 0) {
                    if (pe instanceof hn) Pe = H(pe);
                    else if (Qe = Gt(Pe = {}, String(pe)), Qe) throw TypeError(Qe);
                  }
                  if (Qe = Gt(He, me, null, Pe), Qe) throw TypeError(Qe);
                  var at = He.searchParams = new U(), it = j(at);
                  it.updateSearchParams(He.query), it.updateURL = function() {
                    He.query = String(at) || null;
                  }, u || (ae.href = Yn.call(ae), ae.origin = Nr.call(ae), ae.protocol = Wt.call(ae), ae.username = jr.call(ae), ae.password = kr.call(ae), ae.host = $r.call(ae), ae.hostname = Br.call(ae), ae.port = Vr.call(ae), ae.pathname = pn.call(ae), ae.search = Hr.call(ae), ae.searchParams = zr.call(ae), ae.hash = Gr.call(ae));
                }, ur = hn.prototype, Yn = function() {
                  var R = H(this), ue = R.scheme, ae = R.username, pe = R.password, me = R.host, He = R.port, Pe = R.path, Qe = R.query, at = R.fragment, it = ue + ":";
                  return me !== null ? (it += "//", le(R) && (it += ae + (pe ? ":" + pe : "") + "@"), it += M(me), He !== null && (it += ":" + He)) : ue == "file" && (it += "//"), it += R.cannotBeABaseURL ? Pe[0] : Pe.length ? "/" + Pe.join("/") : "", Qe !== null && (it += "?" + Qe), at !== null && (it += "#" + at), it;
                }, Nr = function() {
                  var R = H(this), ue = R.scheme, ae = R.port;
                  if (ue == "blob") try {
                    return new URL(ue.path[0]).origin;
                  } catch {
                    return "null";
                  }
                  return ue == "file" || !te(R) ? "null" : ue + "://" + M(R.host) + (ae !== null ? ":" + ae : "");
                }, Wt = function() {
                  return H(this).scheme + ":";
                }, jr = function() {
                  return H(this).username;
                }, kr = function() {
                  return H(this).password;
                }, $r = function() {
                  var R = H(this), ue = R.host, ae = R.port;
                  return ue === null ? "" : ae === null ? M(ue) : M(ue) + ":" + ae;
                }, Br = function() {
                  var R = H(this).host;
                  return R === null ? "" : M(R);
                }, Vr = function() {
                  var R = H(this).port;
                  return R === null ? "" : String(R);
                }, pn = function() {
                  var R = H(this), ue = R.path;
                  return R.cannotBeABaseURL ? ue[0] : ue.length ? "/" + ue.join("/") : "";
                }, Hr = function() {
                  var R = H(this).query;
                  return R ? "?" + R : "";
                }, zr = function() {
                  return H(this).searchParams;
                }, Gr = function() {
                  var R = H(this).fragment;
                  return R ? "#" + R : "";
                }, Rt = function(R, ue) {
                  return { get: R, set: ue, configurable: !0, enumerable: !0 };
                };
                if (u && p(ur, {
                  // `URL.prototype.href` accessors pair
                  // https://url.spec.whatwg.org/#dom-url-href
                  href: Rt(Yn, function(R) {
                    var ue = H(this), ae = String(R), pe = Gt(ue, ae);
                    if (pe) throw TypeError(pe);
                    j(ue.searchParams).updateSearchParams(ue.query);
                  }),
                  // `URL.prototype.origin` getter
                  // https://url.spec.whatwg.org/#dom-url-origin
                  origin: Rt(Nr),
                  // `URL.prototype.protocol` accessors pair
                  // https://url.spec.whatwg.org/#dom-url-protocol
                  protocol: Rt(Wt, function(R) {
                    var ue = H(this);
                    Gt(ue, String(R) + ":", K);
                  }),
                  // `URL.prototype.username` accessors pair
                  // https://url.spec.whatwg.org/#dom-url-username
                  username: Rt(jr, function(R) {
                    var ue = H(this), ae = y(String(R));
                    if (!ge(ue)) {
                      ue.username = "";
                      for (var pe = 0; pe < ae.length; pe++)
                        ue.username += J(ae[pe], Z);
                    }
                  }),
                  // `URL.prototype.password` accessors pair
                  // https://url.spec.whatwg.org/#dom-url-password
                  password: Rt(kr, function(R) {
                    var ue = H(this), ae = y(String(R));
                    if (!ge(ue)) {
                      ue.password = "";
                      for (var pe = 0; pe < ae.length; pe++)
                        ue.password += J(ae[pe], Z);
                    }
                  }),
                  // `URL.prototype.host` accessors pair
                  // https://url.spec.whatwg.org/#dom-url-host
                  host: Rt($r, function(R) {
                    var ue = H(this);
                    ue.cannotBeABaseURL || Gt(ue, String(R), Re);
                  }),
                  // `URL.prototype.hostname` accessors pair
                  // https://url.spec.whatwg.org/#dom-url-hostname
                  hostname: Rt(Br, function(R) {
                    var ue = H(this);
                    ue.cannotBeABaseURL || Gt(ue, String(R), Be);
                  }),
                  // `URL.prototype.port` accessors pair
                  // https://url.spec.whatwg.org/#dom-url-port
                  port: Rt(Vr, function(R) {
                    var ue = H(this);
                    ge(ue) || (R = String(R), R == "" ? ue.port = null : Gt(ue, R, ke));
                  }),
                  // `URL.prototype.pathname` accessors pair
                  // https://url.spec.whatwg.org/#dom-url-pathname
                  pathname: Rt(pn, function(R) {
                    var ue = H(this);
                    ue.cannotBeABaseURL || (ue.path = [], Gt(ue, R + "", jt));
                  }),
                  // `URL.prototype.search` accessors pair
                  // https://url.spec.whatwg.org/#dom-url-search
                  search: Rt(Hr, function(R) {
                    var ue = H(this);
                    R = String(R), R == "" ? ue.query = null : (R.charAt(0) == "?" && (R = R.slice(1)), ue.query = "", Gt(ue, R, an)), j(ue.searchParams).updateSearchParams(ue.query);
                  }),
                  // `URL.prototype.searchParams` getter
                  // https://url.spec.whatwg.org/#dom-url-searchparams
                  searchParams: Rt(zr),
                  // `URL.prototype.hash` accessors pair
                  // https://url.spec.whatwg.org/#dom-url-hash
                  hash: Rt(Gr, function(R) {
                    var ue = H(this);
                    if (R = String(R), R == "") {
                      ue.fragment = null;
                      return;
                    }
                    R.charAt(0) == "#" && (R = R.slice(1)), ue.fragment = "", Gt(ue, R, yt);
                  })
                }), h(ur, "toJSON", function() {
                  return Yn.call(this);
                }, { enumerable: !0 }), h(ur, "toString", function() {
                  return Yn.call(this);
                }, { enumerable: !0 }), L) {
                  var Wr = L.createObjectURL, vn = L.revokeObjectURL;
                  Wr && h(hn, "createObjectURL", function(ue) {
                    return Wr.apply(L, arguments);
                  }), vn && h(hn, "revokeObjectURL", function(ue) {
                    return vn.apply(L, arguments);
                  });
                }
                T(hn, "URL"), s({ global: !0, forced: !c, sham: !u }, {
                  URL: hn
                });
              }
            )
            /******/
          }, a = {};
          function i(n) {
            if (a[n])
              return a[n].exports;
            var l = a[n] = {
              /******/
              // no module.id needed
              /******/
              // no module.loaded needed
              /******/
              exports: {}
              /******/
            };
            return r[n](l, l.exports, i), l.exports;
          }
          (function() {
            i.d = function(n, l) {
              for (var o in l)
                i.o(l, o) && !i.o(n, o) && Object.defineProperty(n, o, { enumerable: !0, get: l[o] });
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
            i.o = function(n, l) {
              return Object.prototype.hasOwnProperty.call(n, l);
            };
          }(), function() {
            i.r = function(n) {
              typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n, "__esModule", { value: !0 });
            };
          }();
          var d = {};
          return function() {
            i.r(d), i.d(d, {
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
            function n(O, I) {
              var A;
              if (typeof Symbol > "u" || O[Symbol.iterator] == null) {
                if (Array.isArray(O) || (A = l(O)) || O && typeof O.length == "number") {
                  A && (O = A);
                  var F = 0, b = function() {
                  };
                  return { s: b, n: function() {
                    return F >= O.length ? { done: !0 } : { done: !1, value: O[F++] };
                  }, e: function(V) {
                    throw V;
                  }, f: b };
                }
                throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
              }
              var x = !0, P = !1, M;
              return { s: function() {
                A = O[Symbol.iterator]();
              }, n: function() {
                var V = A.next();
                return x = V.done, V;
              }, e: function(V) {
                P = !0, M = V;
              }, f: function() {
                try {
                  !x && A.return != null && A.return();
                } finally {
                  if (P) throw M;
                }
              } };
            }
            function l(O, I) {
              if (O) {
                if (typeof O == "string") return o(O, I);
                var A = Object.prototype.toString.call(O).slice(8, -1);
                if (A === "Object" && O.constructor && (A = O.constructor.name), A === "Map" || A === "Set") return Array.from(O);
                if (A === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A)) return o(O, I);
              }
            }
            function o(O, I) {
              (I == null || I > O.length) && (I = O.length);
              for (var A = 0, F = new Array(I); A < I; A++)
                F[A] = O[A];
              return F;
            }
            function s(O, I) {
              if (!(O instanceof I))
                throw new TypeError("Cannot call a class as a function");
            }
            function u(O, I) {
              for (var A = 0; A < I.length; A++) {
                var F = I[A];
                F.enumerable = F.enumerable || !1, F.configurable = !0, "value" in F && (F.writable = !0), Object.defineProperty(O, F.key, F);
              }
            }
            function c(O, I, A) {
              return I && u(O.prototype, I), O;
            }
            var f = /* @__PURE__ */ function() {
              function O() {
                s(this, O);
              }
              return c(O, [{
                key: "on",
                value: (
                  // Add an event listener for given event
                  function(A, F) {
                    return this._callbacks = this._callbacks || {}, this._callbacks[A] || (this._callbacks[A] = []), this._callbacks[A].push(F), this;
                  }
                )
              }, {
                key: "emit",
                value: function(A) {
                  this._callbacks = this._callbacks || {};
                  for (var F = this._callbacks[A], b = arguments.length, x = new Array(b > 1 ? b - 1 : 0), P = 1; P < b; P++)
                    x[P - 1] = arguments[P];
                  if (F) {
                    var M = n(F), $;
                    try {
                      for (M.s(); !($ = M.n()).done; ) {
                        var V = $.value;
                        V.apply(this, x);
                      }
                    } catch (Q) {
                      M.e(Q);
                    } finally {
                      M.f();
                    }
                  }
                  return this.element && this.element.dispatchEvent(this.makeEvent("dropzone:" + A, {
                    args: x
                  })), this;
                }
              }, {
                key: "makeEvent",
                value: function(A, F) {
                  var b = {
                    bubbles: !0,
                    cancelable: !0,
                    detail: F
                  };
                  if (typeof window.CustomEvent == "function")
                    return new CustomEvent(A, b);
                  var x = document.createEvent("CustomEvent");
                  return x.initCustomEvent(A, b.bubbles, b.cancelable, b.detail), x;
                }
                // Remove event listener for given event. If fn is not provided, all event
                // listeners for that event will be removed. If neither is provided, all
                // event listeners will be removed.
              }, {
                key: "off",
                value: function(A, F) {
                  if (!this._callbacks || arguments.length === 0)
                    return this._callbacks = {}, this;
                  var b = this._callbacks[A];
                  if (!b)
                    return this;
                  if (arguments.length === 1)
                    return delete this._callbacks[A], this;
                  for (var x = 0; x < b.length; x++) {
                    var P = b[x];
                    if (P === F) {
                      b.splice(x, 1);
                      break;
                    }
                  }
                  return this;
                }
              }]), O;
            }(), p = '<div class="dz-preview dz-file-preview"> <div class="dz-image"><img data-dz-thumbnail/></div> <div class="dz-details"> <div class="dz-size"><span data-dz-size></span></div> <div class="dz-filename"><span data-dz-name></span></div> </div> <div class="dz-progress"> <span class="dz-upload" data-dz-uploadprogress></span> </div> <div class="dz-error-message"><span data-dz-errormessage></span></div> <div class="dz-success-mark"> <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>Check</title> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF"></path> </g> </svg> </div> <div class="dz-error-mark"> <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>Error</title> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475"> <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z"></path> </g> </g> </svg> </div> </div> ', h = p;
            function v(O, I) {
              var A;
              if (typeof Symbol > "u" || O[Symbol.iterator] == null) {
                if (Array.isArray(O) || (A = m(O)) || O && typeof O.length == "number") {
                  A && (O = A);
                  var F = 0, b = function() {
                  };
                  return { s: b, n: function() {
                    return F >= O.length ? { done: !0 } : { done: !1, value: O[F++] };
                  }, e: function(V) {
                    throw V;
                  }, f: b };
                }
                throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
              }
              var x = !0, P = !1, M;
              return { s: function() {
                A = O[Symbol.iterator]();
              }, n: function() {
                var V = A.next();
                return x = V.done, V;
              }, e: function(V) {
                P = !0, M = V;
              }, f: function() {
                try {
                  !x && A.return != null && A.return();
                } finally {
                  if (P) throw M;
                }
              } };
            }
            function m(O, I) {
              if (O) {
                if (typeof O == "string") return g(O, I);
                var A = Object.prototype.toString.call(O).slice(8, -1);
                if (A === "Object" && O.constructor && (A = O.constructor.name), A === "Map" || A === "Set") return Array.from(O);
                if (A === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A)) return g(O, I);
              }
            }
            function g(O, I) {
              (I == null || I > O.length) && (I = O.length);
              for (var A = 0, F = new Array(I); A < I; A++)
                F[A] = O[A];
              return F;
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
              params: function(I, A, F) {
                if (F)
                  return {
                    dzuuid: F.file.upload.uuid,
                    dzchunkindex: F.index,
                    dztotalfilesize: F.file.size,
                    dzchunksize: this.options.chunkSize,
                    dztotalchunkcount: F.file.upload.totalChunkCount,
                    dzchunkbyteoffset: F.index * this.options.chunkSize
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
              accept: function(I, A) {
                return A();
              },
              /**
               * The callback that will be invoked when all chunks have been uploaded for a file.
               * It gets the file for which the chunks have been uploaded as the first parameter,
               * and the `done` function as second. `done()` needs to be invoked when everything
               * needed to finish the upload process is done.
               */
              chunksUploaded: function(I, A) {
                A();
              },
              /**
               * Gets called when the browser is not supported.
               * The default implementation shows the fallback input field and adds
               * a text.
               */
              fallback: function() {
                var I;
                this.element.className = "".concat(this.element.className, " dz-browser-not-supported");
                var A = v(this.element.getElementsByTagName("div")), F;
                try {
                  for (A.s(); !(F = A.n()).done; ) {
                    var b = F.value;
                    if (/(^| )dz-message($| )/.test(b.className)) {
                      I = b, b.className = "dz-message";
                      break;
                    }
                  }
                } catch (P) {
                  A.e(P);
                } finally {
                  A.f();
                }
                I || (I = X.createElement('<div class="dz-message"><span></span></div>'), this.element.appendChild(I));
                var x = I.getElementsByTagName("span")[0];
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
              resize: function(I, A, F, b) {
                var x = {
                  srcX: 0,
                  srcY: 0,
                  srcWidth: I.width,
                  srcHeight: I.height
                }, P = I.width / I.height;
                A == null && F == null ? (A = x.srcWidth, F = x.srcHeight) : A == null ? A = F * P : F == null && (F = A / P), A = Math.min(A, x.srcWidth), F = Math.min(F, x.srcHeight);
                var M = A / F;
                if (x.srcWidth > A || x.srcHeight > F)
                  if (b === "crop")
                    P > M ? (x.srcHeight = I.height, x.srcWidth = x.srcHeight * M) : (x.srcWidth = I.width, x.srcHeight = x.srcWidth / M);
                  else if (b === "contain")
                    P > M ? F = A / P : A = F * P;
                  else
                    throw new Error("Unknown resizeMethod '".concat(b, "'"));
                return x.srcX = (I.width - x.srcWidth) / 2, x.srcY = (I.height - x.srcHeight) / 2, x.trgWidth = A, x.trgHeight = F, x;
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
              transformFile: function(I, A) {
                return (this.options.resizeWidth || this.options.resizeHeight) && I.type.match(/image.*/) ? this.resizeImage(I, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, A) : A(I);
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
              drop: function(I) {
                return this.element.classList.remove("dz-drag-hover");
              },
              dragstart: function(I) {
              },
              dragend: function(I) {
                return this.element.classList.remove("dz-drag-hover");
              },
              dragenter: function(I) {
                return this.element.classList.add("dz-drag-hover");
              },
              dragover: function(I) {
                return this.element.classList.add("dz-drag-hover");
              },
              dragleave: function(I) {
                return this.element.classList.remove("dz-drag-hover");
              },
              paste: function(I) {
              },
              // Called whenever there are no files left in the dropzone anymore, and the
              // dropzone should be displayed as if in the initial state.
              reset: function() {
                return this.element.classList.remove("dz-started");
              },
              // Called when a file is added to the queue
              // Receives `file`
              addedfile: function(I) {
                var A = this;
                if (this.element === this.previewsContainer && this.element.classList.add("dz-started"), this.previewsContainer && !this.options.disablePreviews) {
                  I.previewElement = X.createElement(this.options.previewTemplate.trim()), I.previewTemplate = I.previewElement, this.previewsContainer.appendChild(I.previewElement);
                  var F = v(I.previewElement.querySelectorAll("[data-dz-name]")), b;
                  try {
                    for (F.s(); !(b = F.n()).done; ) {
                      var x = b.value;
                      x.textContent = I.name;
                    }
                  } catch (J) {
                    F.e(J);
                  } finally {
                    F.f();
                  }
                  var P = v(I.previewElement.querySelectorAll("[data-dz-size]")), M;
                  try {
                    for (P.s(); !(M = P.n()).done; )
                      x = M.value, x.innerHTML = this.filesize(I.size);
                  } catch (J) {
                    P.e(J);
                  } finally {
                    P.f();
                  }
                  this.options.addRemoveLinks && (I._removeLink = X.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'.concat(this.options.dictRemoveFile, "</a>")), I.previewElement.appendChild(I._removeLink));
                  var $ = function(q) {
                    return q.preventDefault(), q.stopPropagation(), I.status === X.UPLOADING ? X.confirm(A.options.dictCancelUploadConfirmation, function() {
                      return A.removeFile(I);
                    }) : A.options.dictRemoveFileConfirmation ? X.confirm(A.options.dictRemoveFileConfirmation, function() {
                      return A.removeFile(I);
                    }) : A.removeFile(I);
                  }, V = v(I.previewElement.querySelectorAll("[data-dz-remove]")), Q;
                  try {
                    for (V.s(); !(Q = V.n()).done; ) {
                      var Z = Q.value;
                      Z.addEventListener("click", $);
                    }
                  } catch (J) {
                    V.e(J);
                  } finally {
                    V.f();
                  }
                }
              },
              // Called whenever a file is removed.
              removedfile: function(I) {
                return I.previewElement != null && I.previewElement.parentNode != null && I.previewElement.parentNode.removeChild(I.previewElement), this._updateMaxFilesReachedClass();
              },
              // Called when a thumbnail has been generated
              // Receives `file` and `dataUrl`
              thumbnail: function(I, A) {
                if (I.previewElement) {
                  I.previewElement.classList.remove("dz-file-preview");
                  var F = v(I.previewElement.querySelectorAll("[data-dz-thumbnail]")), b;
                  try {
                    for (F.s(); !(b = F.n()).done; ) {
                      var x = b.value;
                      x.alt = I.name, x.src = A;
                    }
                  } catch (P) {
                    F.e(P);
                  } finally {
                    F.f();
                  }
                  return setTimeout(function() {
                    return I.previewElement.classList.add("dz-image-preview");
                  }, 1);
                }
              },
              // Called whenever an error occurs
              // Receives `file` and `message`
              error: function(I, A) {
                if (I.previewElement) {
                  I.previewElement.classList.add("dz-error"), typeof A != "string" && A.error && (A = A.error);
                  var F = v(I.previewElement.querySelectorAll("[data-dz-errormessage]")), b;
                  try {
                    for (F.s(); !(b = F.n()).done; ) {
                      var x = b.value;
                      x.textContent = A;
                    }
                  } catch (P) {
                    F.e(P);
                  } finally {
                    F.f();
                  }
                }
              },
              errormultiple: function() {
              },
              // Called when a file gets processed. Since there is a cue, not all added
              // files are processed immediately.
              // Receives `file`
              processing: function(I) {
                if (I.previewElement && (I.previewElement.classList.add("dz-processing"), I._removeLink))
                  return I._removeLink.innerHTML = this.options.dictCancelUpload;
              },
              processingmultiple: function() {
              },
              // Called whenever the upload progress gets updated.
              // Receives `file`, `progress` (percentage 0-100) and `bytesSent`.
              // To get the total number of bytes of the file, use `file.size`
              uploadprogress: function(I, A, F) {
                if (I.previewElement) {
                  var b = v(I.previewElement.querySelectorAll("[data-dz-uploadprogress]")), x;
                  try {
                    for (b.s(); !(x = b.n()).done; ) {
                      var P = x.value;
                      P.nodeName === "PROGRESS" ? P.value = A : P.style.width = "".concat(A, "%");
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
              success: function(I) {
                if (I.previewElement)
                  return I.previewElement.classList.add("dz-success");
              },
              successmultiple: function() {
              },
              // When the upload is canceled.
              canceled: function(I) {
                return this.emit("error", I, this.options.dictUploadCanceled);
              },
              canceledmultiple: function() {
              },
              // When the upload is finished, either with success or an error.
              // Receives `file`
              complete: function(I) {
                if (I._removeLink && (I._removeLink.innerHTML = this.options.dictRemoveFile), I.previewElement)
                  return I.previewElement.classList.add("dz-complete");
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
            }, E = y;
            function w(O) {
              "@babel/helpers - typeof";
              return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? w = function(A) {
                return typeof A;
              } : w = function(A) {
                return A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A;
              }, w(O);
            }
            function T(O, I) {
              var A;
              if (typeof Symbol > "u" || O[Symbol.iterator] == null) {
                if (Array.isArray(O) || (A = S(O)) || O && typeof O.length == "number") {
                  A && (O = A);
                  var F = 0, b = function() {
                  };
                  return { s: b, n: function() {
                    return F >= O.length ? { done: !0 } : { done: !1, value: O[F++] };
                  }, e: function(V) {
                    throw V;
                  }, f: b };
                }
                throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
              }
              var x = !0, P = !1, M;
              return { s: function() {
                A = O[Symbol.iterator]();
              }, n: function() {
                var V = A.next();
                return x = V.done, V;
              }, e: function(V) {
                P = !0, M = V;
              }, f: function() {
                try {
                  !x && A.return != null && A.return();
                } finally {
                  if (P) throw M;
                }
              } };
            }
            function S(O, I) {
              if (O) {
                if (typeof O == "string") return D(O, I);
                var A = Object.prototype.toString.call(O).slice(8, -1);
                if (A === "Object" && O.constructor && (A = O.constructor.name), A === "Map" || A === "Set") return Array.from(O);
                if (A === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A)) return D(O, I);
              }
            }
            function D(O, I) {
              (I == null || I > O.length) && (I = O.length);
              for (var A = 0, F = new Array(I); A < I; A++)
                F[A] = O[A];
              return F;
            }
            function L(O, I) {
              if (!(O instanceof I))
                throw new TypeError("Cannot call a class as a function");
            }
            function U(O, I) {
              for (var A = 0; A < I.length; A++) {
                var F = I[A];
                F.enumerable = F.enumerable || !1, F.configurable = !0, "value" in F && (F.writable = !0), Object.defineProperty(O, F.key, F);
              }
            }
            function j(O, I, A) {
              return I && U(O.prototype, I), A && U(O, A), O;
            }
            function B(O, I) {
              if (typeof I != "function" && I !== null)
                throw new TypeError("Super expression must either be null or a function");
              O.prototype = Object.create(I && I.prototype, { constructor: { value: O, writable: !0, configurable: !0 } }), I && H(O, I);
            }
            function H(O, I) {
              return H = Object.setPrototypeOf || function(F, b) {
                return F.__proto__ = b, F;
              }, H(O, I);
            }
            function k(O) {
              var I = W();
              return function() {
                var F = re(O), b;
                if (I) {
                  var x = re(this).constructor;
                  b = Reflect.construct(F, arguments, x);
                } else
                  b = F.apply(this, arguments);
                return z(this, b);
              };
            }
            function z(O, I) {
              return I && (w(I) === "object" || typeof I == "function") ? I : Y(O);
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
              return re = Object.setPrototypeOf ? Object.getPrototypeOf : function(A) {
                return A.__proto__ || Object.getPrototypeOf(A);
              }, re(O);
            }
            var X = /* @__PURE__ */ function(O) {
              B(A, O);
              var I = k(A);
              function A(F, b) {
                var x;
                L(this, A), x = I.call(this);
                var P, M;
                if (x.element = F, x.version = A.version, x.clickableElements = [], x.listeners = [], x.files = [], typeof x.element == "string" && (x.element = document.querySelector(x.element)), !x.element || x.element.nodeType == null)
                  throw new Error("Invalid dropzone element.");
                if (x.element.dropzone)
                  throw new Error("Dropzone already attached.");
                A.instances.push(Y(x)), x.element.dropzone = Y(x);
                var $ = (M = A.optionsForElement(x.element)) != null ? M : {};
                if (x.options = A.extend({}, E, $, b ?? {}), x.options.previewTemplate = x.options.previewTemplate.replace(/\n*/g, ""), x.options.forceFallback || !A.isBrowserSupported())
                  return z(x, x.options.fallback.call(Y(x)));
                if (x.options.url == null && (x.options.url = x.element.getAttribute("action")), !x.options.url)
                  throw new Error("No URL provided.");
                if (x.options.acceptedFiles && x.options.acceptedMimeTypes)
                  throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
                if (x.options.uploadMultiple && x.options.chunking)
                  throw new Error("You cannot set both: uploadMultiple and chunking.");
                return x.options.acceptedMimeTypes && (x.options.acceptedFiles = x.options.acceptedMimeTypes, delete x.options.acceptedMimeTypes), x.options.renameFilename != null && (x.options.renameFile = function(V) {
                  return x.options.renameFilename.call(Y(x), V.name, V);
                }), typeof x.options.method == "string" && (x.options.method = x.options.method.toUpperCase()), (P = x.getExistingFallback()) && P.parentNode && P.parentNode.removeChild(P), x.options.previewsContainer !== !1 && (x.options.previewsContainer ? x.previewsContainer = A.getElement(x.options.previewsContainer, "previewsContainer") : x.previewsContainer = x.element), x.options.clickable && (x.options.clickable === !0 ? x.clickableElements = [x.element] : x.clickableElements = A.getElements(x.options.clickable, "clickable")), x.init(), x;
              }
              return j(A, [{
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
                  return this.getFilesWithStatus(A.QUEUED);
                }
              }, {
                key: "getUploadingFiles",
                value: function() {
                  return this.getFilesWithStatus(A.UPLOADING);
                }
              }, {
                key: "getAddedFiles",
                value: function() {
                  return this.getFilesWithStatus(A.ADDED);
                }
                // Files that are either queued or uploading
              }, {
                key: "getActiveFiles",
                value: function() {
                  return this.files.filter(function(b) {
                    return b.status === A.UPLOADING || b.status === A.QUEUED;
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
                  if (this.element.tagName === "form" && this.element.setAttribute("enctype", "multipart/form-data"), this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message") && this.element.appendChild(A.createElement('<div class="dz-default dz-message"><button class="dz-button" type="button">'.concat(this.options.dictDefaultMessage, "</button></div>"))), this.clickableElements.length) {
                    var x = function Z() {
                      b.hiddenFileInput && b.hiddenFileInput.parentNode.removeChild(b.hiddenFileInput), b.hiddenFileInput = document.createElement("input"), b.hiddenFileInput.setAttribute("type", "file"), (b.options.maxFiles === null || b.options.maxFiles > 1) && b.hiddenFileInput.setAttribute("multiple", "multiple"), b.hiddenFileInput.className = "dz-hidden-input", b.options.acceptedFiles !== null && b.hiddenFileInput.setAttribute("accept", b.options.acceptedFiles), b.options.capture !== null && b.hiddenFileInput.setAttribute("capture", b.options.capture), b.hiddenFileInput.setAttribute("tabindex", "-1"), b.hiddenFileInput.style.visibility = "hidden", b.hiddenFileInput.style.position = "absolute", b.hiddenFileInput.style.top = "0", b.hiddenFileInput.style.left = "0", b.hiddenFileInput.style.height = "0", b.hiddenFileInput.style.width = "0", A.getElement(b.options.hiddenInputContainer, "hiddenInputContainer").appendChild(b.hiddenFileInput), b.hiddenFileInput.addEventListener("change", function() {
                        var J = b.hiddenFileInput.files;
                        if (J.length) {
                          var q = T(J), te;
                          try {
                            for (q.s(); !(te = q.n()).done; ) {
                              var le = te.value;
                              b.addFile(le);
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
                  var P = T(this.events), M;
                  try {
                    for (P.s(); !(M = P.n()).done; ) {
                      var $ = M.value;
                      this.on($, this.options[$]);
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
                          return (Z !== b.element || q.target === b.element || A.elementInside(q.target, b.element.querySelector(".dz-message"))) && b.hiddenFileInput.click(), !0;
                        }
                      }
                    });
                  }), this.enable(), this.options.init.call(this);
                }
                // Not fully tested yet
              }, {
                key: "destroy",
                value: function() {
                  return this.disable(), this.removeAllFiles(!0), this.hiddenFileInput != null && this.hiddenFileInput.parentNode && (this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput), this.hiddenFileInput = null), delete this.element.dropzone, A.instances.splice(A.instances.indexOf(this), 1);
                }
              }, {
                key: "updateTotalUploadProgress",
                value: function() {
                  var b, x = 0, P = 0, M = this.getActiveFiles();
                  if (M.length) {
                    var $ = T(this.getActiveFiles()), V;
                    try {
                      for ($.s(); !(V = $.n()).done; ) {
                        var Q = V.value;
                        x += Q.upload.bytesSent, P += Q.upload.total;
                      }
                    } catch (Z) {
                      $.e(Z);
                    } finally {
                      $.f();
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
                  var M = A.createElement(P);
                  return this.element.tagName !== "FORM" ? (x = A.createElement('<form action="'.concat(this.options.url, '" enctype="multipart/form-data" method="').concat(this.options.method, '"></form>')), x.appendChild(M)) : (this.element.setAttribute("enctype", "multipart/form-data"), this.element.setAttribute("method", this.options.method)), x ?? M;
                }
                // Returns the fallback elements if they exist already
                //
                // This code has to pass in IE7 :(
              }, {
                key: "getExistingFallback",
                value: function() {
                  for (var b = function(Q) {
                    var Z = T(Q), J;
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
                    var M = P[x], $;
                    if ($ = b(this.element.getElementsByTagName(M)))
                      return $;
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
                    for (var M = ["tb", "gb", "mb", "kb", "b"], $ = 0; $ < M.length; $++) {
                      var V = M[$], Q = Math.pow(this.options.filesizeBase, 4 - $) / 10;
                      if (b >= Q) {
                        x = b / Math.pow(this.options.filesizeBase, 4 - $), P = V;
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
                  var x = T(b), P;
                  try {
                    for (x.s(); !(P = x.n()).done; ) {
                      var M = P.value;
                      this.addFile(M);
                    }
                  } catch ($) {
                    x.e($);
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
                    var P = [], M = T(b), $;
                    try {
                      for (M.s(); !($ = M.n()).done; ) {
                        var V = $.value, Q;
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
                  var P = this, M = b.createReader(), $ = function(Z) {
                    return Me(console, "log", function(J) {
                      return J.log(Z);
                    });
                  }, V = function Q() {
                    return M.readEntries(function(Z) {
                      if (Z.length > 0) {
                        var J = T(Z), q;
                        try {
                          for (J.s(); !(q = J.n()).done; ) {
                            var te = q.value;
                            te.isFile ? te.file(function(le) {
                              if (!(P.options.ignoreHiddenFiles && le.name.substring(0, 1) === "."))
                                return le.fullPath = "".concat(x, "/").concat(le.name), P.addFile(le);
                            }) : te.isDirectory && P._addFilesFromDirectory(te, "".concat(x, "/").concat(te.name));
                          }
                        } catch (le) {
                          J.e(le);
                        } finally {
                          J.f();
                        }
                        Q();
                      }
                      return null;
                    }, $);
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
                  this.options.maxFilesize && b.size > this.options.maxFilesize * 1024 * 1024 ? x(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(b.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize)) : A.isValidFile(b, this.options.acceptedFiles) ? this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles ? (x(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles)), this.emit("maxfilesexceeded", b)) : this.options.accept.call(this, b, x) : x(this.options.dictInvalidFileType);
                }
              }, {
                key: "addFile",
                value: function(b) {
                  var x = this;
                  b.upload = {
                    uuid: A.uuidv4(),
                    progress: 0,
                    // Setting the total upload size to file.size for the beginning
                    // It's actual different than the size to be transmitted.
                    total: b.size,
                    bytesSent: 0,
                    filename: this._renameFile(b)
                    // Not setting chunking information here, because the acutal data — and
                    // thus the chunks — might change if `options.transformFile` is set
                    // and does something to the data.
                  }, this.files.push(b), b.status = A.ADDED, this.emit("addedfile", b), this._enqueueThumbnail(b), this.accept(b, function(P) {
                    P ? (b.accepted = !1, x._errorProcessing([b], P)) : (b.accepted = !0, x.options.autoQueue && x.enqueueFile(b)), x._updateMaxFilesReachedClass();
                  });
                }
                // Wrapper for enqueueFile
              }, {
                key: "enqueueFiles",
                value: function(b) {
                  var x = T(b), P;
                  try {
                    for (x.s(); !(P = x.n()).done; ) {
                      var M = P.value;
                      this.enqueueFile(M);
                    }
                  } catch ($) {
                    x.e($);
                  } finally {
                    x.f();
                  }
                  return null;
                }
              }, {
                key: "enqueueFile",
                value: function(b) {
                  var x = this;
                  if (b.status === A.ADDED && b.accepted === !0) {
                    if (b.status = A.QUEUED, this.options.autoProcessQueue)
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
                  if (b.status === A.UPLOADING && this.cancelUpload(b), this.files = he(this.files, b), this.emit("removedfile", b), this.files.length === 0)
                    return this.emit("reset");
                }
                // Removes all files that aren't currently processed from the list
              }, {
                key: "removeAllFiles",
                value: function(b) {
                  b == null && (b = !1);
                  var x = T(this.files.slice()), P;
                  try {
                    for (x.s(); !(P = x.n()).done; ) {
                      var M = P.value;
                      (M.status !== A.UPLOADING || b) && this.removeFile(M);
                    }
                  } catch ($) {
                    x.e($);
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
                value: function(b, x, P, M, $) {
                  var V = this;
                  return this.createThumbnail(b, x, P, M, !0, function(Q, Z) {
                    if (Z == null)
                      return $(b);
                    var J = V.options.resizeMimeType;
                    J == null && (J = b.type);
                    var q = Z.toDataURL(J, V.options.resizeQuality);
                    return (J === "image/jpeg" || J === "image/jpg") && (q = xe.restore(b.dataURL, q)), $(A.dataURItoBlob(q));
                  });
                }
              }, {
                key: "createThumbnail",
                value: function(b, x, P, M, $, V) {
                  var Q = this, Z = new FileReader();
                  Z.onload = function() {
                    if (b.dataURL = Z.result, b.type === "image/svg+xml") {
                      V != null && V(Z.result);
                      return;
                    }
                    Q.createThumbnailFromUrl(b, x, P, M, $, V);
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
                  var $ = this, V = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0;
                  if (this.emit("addedfile", b), this.emit("complete", b), !V)
                    this.emit("thumbnail", b, x), P && P();
                  else {
                    var Q = function(J) {
                      $.emit("thumbnail", b, J), P && P();
                    };
                    b.dataURL = x, this.createThumbnailFromUrl(b, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, this.options.fixOrientation, Q, M);
                  }
                }
              }, {
                key: "createThumbnailFromUrl",
                value: function(b, x, P, M, $, V, Q) {
                  var Z = this, J = document.createElement("img");
                  return Q && (J.crossOrigin = Q), $ = getComputedStyle(document.body).imageOrientation == "from-image" ? !1 : $, J.onload = function() {
                    var q = function(le) {
                      return le(1);
                    };
                    return typeof EXIF < "u" && EXIF !== null && $ && (q = function(le) {
                      return EXIF.getData(J, function() {
                        return le(EXIF.getTag(this, "Orientation"));
                      });
                    }), q(function(te) {
                      b.width = J.width, b.height = J.height;
                      var le = Z.options.resize.call(Z, b, x, P, M), ge = document.createElement("canvas"), Ce = ge.getContext("2d");
                      switch (ge.width = le.trgWidth, ge.height = le.trgHeight, te > 4 && (ge.width = le.trgHeight, ge.height = le.trgWidth), te) {
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
                      Ie(Ce, J, le.srcX != null ? le.srcX : 0, le.srcY != null ? le.srcY : 0, le.srcWidth, le.srcHeight, le.trgX != null ? le.trgX : 0, le.trgY != null ? le.trgY : 0, le.trgWidth, le.trgHeight);
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
                  var x = T(b), P;
                  try {
                    for (x.s(); !(P = x.n()).done; ) {
                      var M = P.value;
                      M.processing = !0, M.status = A.UPLOADING, this.emit("processing", M);
                    }
                  } catch ($) {
                    x.e($);
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
                  if (b.status === A.UPLOADING) {
                    var x = this._getFilesWithXhr(b.xhr), P = T(x), M;
                    try {
                      for (P.s(); !(M = P.n()).done; ) {
                        var $ = M.value;
                        $.status = A.CANCELED;
                      }
                    } catch (J) {
                      P.e(J);
                    } finally {
                      P.f();
                    }
                    typeof b.xhr < "u" && b.xhr.abort();
                    var V = T(x), Q;
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
                  } else (b.status === A.ADDED || b.status === A.QUEUED) && (b.status = A.CANCELED, this.emit("canceled", b), this.options.uploadMultiple && this.emit("canceledmultiple", [b]));
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
                      var $ = b[0], V = P[0];
                      $.upload.chunks = [];
                      var Q = function() {
                        for (var le = 0; $.upload.chunks[le] !== void 0; )
                          le++;
                        if (!(le >= $.upload.totalChunkCount)) {
                          var ge = le * x.options.chunkSize, Ce = Math.min(ge + x.options.chunkSize, V.size), Ke = {
                            name: x._getParamName(0),
                            data: V.webkitSlice ? V.webkitSlice(ge, Ce) : V.slice(ge, Ce),
                            filename: $.upload.filename,
                            chunkIndex: le
                          };
                          $.upload.chunks[le] = {
                            file: $,
                            index: le,
                            dataBlock: Ke,
                            // In case we want to retry.
                            status: A.UPLOADING,
                            progress: 0,
                            retries: 0
                            // The number of times this block has been retried.
                          }, x._uploadData(b, [Ke]);
                        }
                      };
                      if ($.upload.finishedChunkUpload = function(te, le) {
                        var ge = !0;
                        te.status = A.SUCCESS, te.dataBlock = null, te.xhr = null;
                        for (var Ce = 0; Ce < $.upload.totalChunkCount; Ce++) {
                          if ($.upload.chunks[Ce] === void 0)
                            return Q();
                          $.upload.chunks[Ce].status !== A.SUCCESS && (ge = !1);
                        }
                        ge && x.options.chunksUploaded($, function() {
                          x._finished(b, le, null);
                        });
                      }, x.options.parallelChunkUploads)
                        for (var Z = 0; Z < $.upload.totalChunkCount; Z++)
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
                  var P = this, M = new XMLHttpRequest(), $ = T(b), V;
                  try {
                    for ($.s(); !(V = $.n()).done; ) {
                      var Q = V.value;
                      Q.xhr = M;
                    }
                  } catch (Ee) {
                    $.e(Ee);
                  } finally {
                    $.f();
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
                  var le = {
                    Accept: "application/json",
                    "Cache-Control": "no-cache",
                    "X-Requested-With": "XMLHttpRequest"
                  };
                  this.options.headers && A.extend(le, this.options.headers);
                  for (var ge in le) {
                    var Ce = le[ge];
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
                  var ee = T(b), ce;
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
                  for (var P = this, M = [], $ = 0, V = function(J) {
                    P.options.transformFile.call(P, b[J], function(q) {
                      M[J] = q, ++$ === b.length && x(M);
                    });
                  }, Q = 0; Q < b.length; Q++)
                    V(Q);
                }
                // Takes care of adding other input elements of the form to the AJAX request
              }, {
                key: "_addFormElementData",
                value: function(b) {
                  if (this.element.tagName === "FORM") {
                    var x = T(this.element.querySelectorAll("input, textarea, select, button")), P;
                    try {
                      for (x.s(); !(P = x.n()).done; ) {
                        var M = P.value, $ = M.getAttribute("name"), V = M.getAttribute("type");
                        if (V && (V = V.toLowerCase()), !(typeof $ > "u" || $ === null))
                          if (M.tagName === "SELECT" && M.hasAttribute("multiple")) {
                            var Q = T(M.options, !0), Z;
                            try {
                              for (Q.s(); !(Z = Q.n()).done; ) {
                                var J = Z.value;
                                J.selected && b.append($, J.value);
                              }
                            } catch (q) {
                              Q.e(q);
                            } finally {
                              Q.f();
                            }
                          } else (!V || V !== "checkbox" && V !== "radio" || M.checked) && b.append($, M.value);
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
                    var M = T(b), $;
                    try {
                      for (M.s(); !($ = M.n()).done; ) {
                        var V = $.value;
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
                  if (b[0].status !== A.CANCELED && x.readyState === 4) {
                    if (x.responseType !== "arraybuffer" && x.responseType !== "blob" && (M = x.responseText, x.getResponseHeader("content-type") && ~x.getResponseHeader("content-type").indexOf("application/json")))
                      try {
                        M = JSON.parse(M);
                      } catch ($) {
                        P = $, M = "Invalid JSON response from server.";
                      }
                    this._updateFilesUploadProgress(b, x), 200 <= x.status && x.status < 300 ? b[0].upload.chunked ? b[0].upload.finishedChunkUpload(this._getChunk(b[0], x), M) : this._finished(b, M, P) : this._handleUploadError(b, x, M);
                  }
                }
              }, {
                key: "_handleUploadError",
                value: function(b, x, P) {
                  if (b[0].status !== A.CANCELED) {
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
                  var M = T(b), $;
                  try {
                    for (M.s(); !($ = M.n()).done; ) {
                      var V = $.value;
                      V.status = A.SUCCESS, this.emit("success", V, x, P), this.emit("complete", V);
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
                  var M = T(b), $;
                  try {
                    for (M.s(); !($ = M.n()).done; ) {
                      var V = $.value;
                      V.status = A.ERROR, this.emit("error", V, x, P), this.emit("complete", V);
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
                  for (var $ = 0, V = P; $ < V.length; $++) {
                    var Q = V[$];
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
              }]), A;
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
                var I = function(F) {
                  return function() {
                    var b = [], x = T(F), P;
                    try {
                      for (x.s(); !(P = x.n()).done; ) {
                        var M = P.value;
                        /(^| )dropzone($| )/.test(M.className) ? b.push(O.push(M)) : b.push(void 0);
                      }
                    } catch ($) {
                      x.e($);
                    } finally {
                      x.f();
                    }
                    return b;
                  }();
                };
                I(document.getElementsByTagName("div")), I(document.getElementsByTagName("form"));
              }
              return function() {
                var A = [], F = T(O), b;
                try {
                  for (F.s(); !(b = F.n()).done; ) {
                    var x = b.value;
                    X.optionsForElement(x) !== !1 ? A.push(new X(x)) : A.push(void 0);
                  }
                } catch (P) {
                  F.e(P);
                } finally {
                  F.f();
                }
                return A;
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
                  var I = T(X.blockedBrowsers), A;
                  try {
                    for (I.s(); !(A = I.n()).done; ) {
                      var F = A.value;
                      if (F.test(navigator.userAgent)) {
                        O = !1;
                        continue;
                      }
                    }
                  } catch (b) {
                    I.e(b);
                  } finally {
                    I.f();
                  }
                }
              else
                O = !1;
              return O;
            }, X.dataURItoBlob = function(O) {
              for (var I = atob(O.split(",")[1]), A = O.split(",")[0].split(":")[1].split(";")[0], F = new ArrayBuffer(I.length), b = new Uint8Array(F), x = 0, P = I.length, M = 0 <= P; M ? x <= P : x >= P; M ? x++ : x--)
                b[x] = I.charCodeAt(x);
              return new Blob([F], {
                type: A
              });
            };
            var he = function(I, A) {
              return I.filter(function(F) {
                return F !== A;
              }).map(function(F) {
                return F;
              });
            }, fe = function(I) {
              return I.replace(/[\-_](\w)/g, function(A) {
                return A.charAt(1).toUpperCase();
              });
            };
            X.createElement = function(O) {
              var I = document.createElement("div");
              return I.innerHTML = O, I.childNodes[0];
            }, X.elementInside = function(O, I) {
              if (O === I)
                return !0;
              for (; O = O.parentNode; )
                if (O === I)
                  return !0;
              return !1;
            }, X.getElement = function(O, I) {
              var A;
              if (typeof O == "string" ? A = document.querySelector(O) : O.nodeType != null && (A = O), A == null)
                throw new Error("Invalid `".concat(I, "` option provided. Please provide a CSS selector or a plain HTML element."));
              return A;
            }, X.getElements = function(O, I) {
              var A, F;
              if (O instanceof Array) {
                F = [];
                try {
                  var b = T(O, !0), x;
                  try {
                    for (b.s(); !(x = b.n()).done; )
                      A = x.value, F.push(this.getElement(A, I));
                  } catch ($) {
                    b.e($);
                  } finally {
                    b.f();
                  }
                } catch {
                  F = null;
                }
              } else if (typeof O == "string") {
                F = [];
                var P = T(document.querySelectorAll(O)), M;
                try {
                  for (P.s(); !(M = P.n()).done; )
                    A = M.value, F.push(A);
                } catch ($) {
                  P.e($);
                } finally {
                  P.f();
                }
              } else O.nodeType != null && (F = [O]);
              if (F == null || !F.length)
                throw new Error("Invalid `".concat(I, "` option provided. Please provide a CSS selector, a plain HTML element or a list of those."));
              return F;
            }, X.confirm = function(O, I, A) {
              if (window.confirm(O))
                return I();
              if (A != null)
                return A();
            }, X.isValidFile = function(O, I) {
              if (!I)
                return !0;
              I = I.split(",");
              var A = O.type, F = A.replace(/\/.*$/, ""), b = T(I), x;
              try {
                for (b.s(); !(x = b.n()).done; ) {
                  var P = x.value;
                  if (P = P.trim(), P.charAt(0) === ".") {
                    if (O.name.toLowerCase().indexOf(P.toLowerCase(), O.name.length - P.length) !== -1)
                      return !0;
                  } else if (/\/\*$/.test(P)) {
                    if (F === P.replace(/\/.*$/, ""))
                      return !0;
                  } else if (A === P)
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
            var Te = function(I) {
              I.naturalWidth;
              var A = I.naturalHeight, F = document.createElement("canvas");
              F.width = 1, F.height = A;
              var b = F.getContext("2d");
              b.drawImage(I, 0, 0);
              for (var x = b.getImageData(1, 0, 1, A), P = x.data, M = 0, $ = A, V = A; V > M; ) {
                var Q = P[(V - 1) * 4 + 3];
                Q === 0 ? $ = V : M = V, V = $ + M >> 1;
              }
              var Z = V / A;
              return Z === 0 ? 1 : Z;
            }, Ie = function(I, A, F, b, x, P, M, $, V, Q) {
              var Z = Te(A);
              return I.drawImage(A, F, b, x, P, M, $, V, Q / Z);
            }, xe = /* @__PURE__ */ function() {
              function O() {
                L(this, O);
              }
              return j(O, null, [{
                key: "initClass",
                value: function() {
                  this.KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                }
              }, {
                key: "encode64",
                value: function(A) {
                  for (var F = "", b = void 0, x = void 0, P = "", M = void 0, $ = void 0, V = void 0, Q = "", Z = 0; b = A[Z++], x = A[Z++], P = A[Z++], M = b >> 2, $ = (b & 3) << 4 | x >> 4, V = (x & 15) << 2 | P >> 6, Q = P & 63, isNaN(x) ? V = Q = 64 : isNaN(P) && (Q = 64), F = F + this.KEY_STR.charAt(M) + this.KEY_STR.charAt($) + this.KEY_STR.charAt(V) + this.KEY_STR.charAt(Q), b = x = P = "", M = $ = V = Q = "", Z < A.length; )
                    ;
                  return F;
                }
              }, {
                key: "restore",
                value: function(A, F) {
                  if (!A.match("data:image/jpeg;base64,"))
                    return F;
                  var b = this.decode64(A.replace("data:image/jpeg;base64,", "")), x = this.slice2Segments(b), P = this.exifManipulation(F, x);
                  return "data:image/jpeg;base64,".concat(this.encode64(P));
                }
              }, {
                key: "exifManipulation",
                value: function(A, F) {
                  var b = this.getExifArray(F), x = this.insertExif(A, b), P = new Uint8Array(x);
                  return P;
                }
              }, {
                key: "getExifArray",
                value: function(A) {
                  for (var F = void 0, b = 0; b < A.length; ) {
                    if (F = A[b], F[0] === 255 & F[1] === 225)
                      return F;
                    b++;
                  }
                  return [];
                }
              }, {
                key: "insertExif",
                value: function(A, F) {
                  var b = A.replace("data:image/jpeg;base64,", ""), x = this.decode64(b), P = x.indexOf(255, 3), M = x.slice(0, P), $ = x.slice(P), V = M;
                  return V = V.concat(F), V = V.concat($), V;
                }
              }, {
                key: "slice2Segments",
                value: function(A) {
                  for (var F = 0, b = []; ; ) {
                    var x;
                    if (A[F] === 255 & A[F + 1] === 218)
                      break;
                    if (A[F] === 255 & A[F + 1] === 216)
                      F += 2;
                    else {
                      x = A[F + 2] * 256 + A[F + 3];
                      var P = F + x + 2, M = A.slice(F, P);
                      b.push(M), F = P;
                    }
                    if (F > A.length)
                      break;
                  }
                  return b;
                }
              }, {
                key: "decode64",
                value: function(A) {
                  var F = void 0, b = void 0, x = "", P = void 0, M = void 0, $ = void 0, V = "", Q = 0, Z = [], J = /[^A-Za-z0-9\+\/\=]/g;
                  for (J.exec(A) && console.warn(`There were invalid base64 characters in the input text.
Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='
Expect errors in decoding.`), A = A.replace(/[^A-Za-z0-9\+\/\=]/g, ""); P = this.KEY_STR.indexOf(A.charAt(Q++)), M = this.KEY_STR.indexOf(A.charAt(Q++)), $ = this.KEY_STR.indexOf(A.charAt(Q++)), V = this.KEY_STR.indexOf(A.charAt(Q++)), F = P << 2 | M >> 4, b = (M & 15) << 4 | $ >> 2, x = ($ & 3) << 6 | V, Z.push(F), $ !== 64 && Z.push(b), V !== 64 && Z.push(x), F = b = x = "", P = M = $ = V = "", Q < A.length; )
                    ;
                  return Z;
                }
              }]), O;
            }();
            xe.initClass();
            var Ne = function(I, A) {
              var F = !1, b = !0, x = I.document, P = x.documentElement, M = x.addEventListener ? "addEventListener" : "attachEvent", $ = x.addEventListener ? "removeEventListener" : "detachEvent", V = x.addEventListener ? "" : "on", Q = function J(q) {
                if (!(q.type === "readystatechange" && x.readyState !== "complete") && ((q.type === "load" ? I : x)[$](V + q.type, J, !1), !F && (F = !0)))
                  return A.call(I, q.type || q);
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
                    b = !I.frameElement;
                  } catch {
                  }
                  b && Z();
                }
                return x[M](V + "DOMContentLoaded", Q, !1), x[M](V + "readystatechange", Q, !1), I[M](V + "load", Q, !1);
              }
            };
            X._autoDiscoverFunction = function() {
              if (X.autoDiscover)
                return X.discover();
            }, Ne(window, X._autoDiscoverFunction);
            function Ue(O, I) {
              return typeof O < "u" && O !== null ? I(O) : void 0;
            }
            function Me(O, I, A) {
              if (typeof O < "u" && O !== null && typeof O[I] == "function")
                return A(O, I);
            }
            window.Dropzone = X;
            var be = X;
          }(), d;
        }()
      );
    });
  }(qo)), qo.exports;
}
var $c = kc();
const Ps = /* @__PURE__ */ Ma($c);
Ps.autoDiscover = !1;
const Bc = {
  name: "FileUpload",
  mixins: [fn],
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
    (this.editable && this.formData || this.preview) && (this.dropzone = new Ps(this.$refs.dropzone, {
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
}, Vc = { class: "file-upload" }, Hc = ["name", "value"], zc = { class: "preview" }, Gc = { class: "file-upload-preview" }, Wc = ["src", "title"], Yc = {
  key: 1,
  class: "svg",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true"
}, Kc = ["href"], Xc = { class: "file-upload-title" }, Jc = ["onClick"], Qc = {
  key: 1,
  class: "inline-block text-sm text-gray-600 mt-1.5 brand-200"
};
function Zc(t, e, r, a, i, d) {
  var n;
  return oe(), se("div", Vc, [
    N("input", {
      type: "hidden",
      name: r.name,
      value: d.valueJson
    }, null, 8, Hc),
    i.files.length ? (oe(!0), se(Ot, { key: 0 }, Pn(i.files, (l, o) => (oe(), se("div", {
      key: `file_${l.id}_${o}`,
      class: "file-upload-file"
    }, [
      N("div", zc, [
        N("span", Gc, [
          d.isImage(l.mime_type) ? (oe(), se("img", {
            key: 0,
            class: "img",
            src: l.url,
            title: l.file_name
          }, null, 8, Wc)) : (oe(), se("svg", Yc, e[0] || (e[0] = [
            N("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            }, null, -1)
          ])))
        ]),
        N("a", {
          href: l.url,
          target: "_blank",
          class: "link"
        }, [
          N("div", Xc, We(l.file_name), 1)
        ], 8, Kc),
        t.editable ? (oe(), se("a", {
          key: 0,
          class: "file-upload-file-remove",
          onClick: (s) => d.deleteFile(o, l)
        }, e[1] || (e[1] = [
          N("svg", {
            width: "14",
            height: "16",
            viewBox: "0 0 14 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            N("path", {
              d: "M9.66667 3.99992V3.46659C9.66667 2.71985 9.66667 2.34648 9.52134 2.06126C9.39351 1.81038 9.18954 1.60641 8.93865 1.47858C8.65344 1.33325 8.28007 1.33325 7.53333 1.33325H6.46667C5.71993 1.33325 5.34656 1.33325 5.06135 1.47858C4.81046 1.60641 4.60649 1.81038 4.47866 2.06126C4.33333 2.34648 4.33333 2.71985 4.33333 3.46659V3.99992M5.66667 7.66659V10.9999M8.33333 7.66659V10.9999M1 3.99992H13M11.6667 3.99992V11.4666C11.6667 12.5867 11.6667 13.1467 11.4487 13.5746C11.2569 13.9509 10.951 14.2569 10.5746 14.4486C10.1468 14.6666 9.58677 14.6666 8.46667 14.6666H5.53333C4.41323 14.6666 3.85318 14.6666 3.42535 14.4486C3.04903 14.2569 2.74307 13.9509 2.55132 13.5746C2.33333 13.1467 2.33333 12.5867 2.33333 11.4666V3.99992",
              stroke: "#667085",
              "stroke-width": "1.5",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            })
          ], -1)
        ]), 8, Jc)) : je("", !0)
      ])
    ]))), 128)) : je("", !0),
    N("div", {
      class: et(["dropzone", r.field.class]),
      ref: "dropzone"
    }, e[2] || (e[2] = [
      N("div", { class: "placeholder" }, [
        N("div", null, [
          N("svg", {
            width: "20",
            height: "18",
            viewBox: "0 0 20 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            N("path", {
              d: "M6.66602 12.3333L9.99935 9M9.99935 9L13.3327 12.3333M9.99935 9V16.5M16.666 12.9524C17.6839 12.1117 18.3327 10.8399 18.3327 9.41667C18.3327 6.88536 16.2807 4.83333 13.7493 4.83333C13.5673 4.83333 13.3969 4.73833 13.3044 4.58145C12.2177 2.73736 10.2114 1.5 7.91602 1.5C4.46424 1.5 1.66602 4.29822 1.66602 7.75C1.66602 9.47175 2.36222 11.0309 3.48847 12.1613",
              stroke: "#475467",
              "stroke-width": "1.66667",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            })
          ])
        ]),
        N("div", null, [
          N("p", null, [
            N("span", null, "Click to upload"),
            N("span", null, " or drag and drop")
          ]),
          N("span", null, "(max. 20MB)")
        ])
      ], -1)
    ]), 2),
    (n = r.field) != null && n.hint ? (oe(), se("p", Qc, We(r.field.hint), 1)) : je("", !0)
  ]);
}
const Rs = /* @__PURE__ */ mt(Bc, [["render", Zc]]);
var mr = { exports: {} };
mr.exports;
var Ci;
function qc() {
  return Ci || (Ci = 1, function(t, e) {
    var r = 200, a = "__lodash_hash_undefined__", i = 9007199254740991, d = "[object Arguments]", n = "[object Array]", l = "[object Boolean]", o = "[object Date]", s = "[object Error]", u = "[object Function]", c = "[object GeneratorFunction]", f = "[object Map]", p = "[object Number]", h = "[object Object]", v = "[object Promise]", m = "[object RegExp]", g = "[object Set]", y = "[object String]", E = "[object Symbol]", w = "[object WeakMap]", T = "[object ArrayBuffer]", S = "[object DataView]", D = "[object Float32Array]", L = "[object Float64Array]", U = "[object Int8Array]", j = "[object Int16Array]", B = "[object Int32Array]", H = "[object Uint8Array]", k = "[object Uint8ClampedArray]", z = "[object Uint16Array]", Y = "[object Uint32Array]", W = /[\\^$.*+?()[\]{}|]/g, re = /\w*$/, X = /^\[object .+?Constructor\]$/, he = /^(?:0|[1-9]\d*)$/, fe = {};
    fe[d] = fe[n] = fe[T] = fe[S] = fe[l] = fe[o] = fe[D] = fe[L] = fe[U] = fe[j] = fe[B] = fe[f] = fe[p] = fe[h] = fe[m] = fe[g] = fe[y] = fe[E] = fe[H] = fe[k] = fe[z] = fe[Y] = !0, fe[s] = fe[u] = fe[w] = !1;
    var Te = typeof Zr == "object" && Zr && Zr.Object === Object && Zr, Ie = typeof self == "object" && self && self.Object === Object && self, xe = Te || Ie || Function("return this")(), Ne = e && !e.nodeType && e, Ue = Ne && !0 && t && !t.nodeType && t, Me = Ue && Ue.exports === Ne;
    function be(C, _) {
      return C.set(_[0], _[1]), C;
    }
    function O(C, _) {
      return C.add(_), C;
    }
    function I(C, _) {
      for (var de = -1, Le = C ? C.length : 0; ++de < Le && _(C[de], de, C) !== !1; )
        ;
      return C;
    }
    function A(C, _) {
      for (var de = -1, Le = _.length, bt = C.length; ++de < Le; )
        C[bt + de] = _[de];
      return C;
    }
    function F(C, _, de, Le) {
      for (var bt = -1, Dt = C ? C.length : 0; ++bt < Dt; )
        de = _(de, C[bt], bt, C);
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
      return C.forEach(function(Le, bt) {
        de[++_] = [bt, Le];
      }), de;
    }
    function $(C, _) {
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
    }(), le = Z.toString, ge = J.hasOwnProperty, Ce = J.toString, Ke = RegExp(
      "^" + le.call(ge).replace(W, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    ), qe = Me ? xe.Buffer : void 0, Ze = xe.Symbol, G = xe.Uint8Array, K = $(Object.getPrototypeOf, Object), ee = Object.create, ce = J.propertyIsEnumerable, Se = Q.splice, Fe = Object.getOwnPropertySymbols, Ae = qe ? qe.isBuffer : void 0, Ee = $(Object.keys, Object), Ve = Xn(xe, "DataView"), Oe = Xn(xe, "Map"), we = Xn(xe, "Promise"), Re = Xn(xe, "Set"), Be = Xn(xe, "WeakMap"), ke = Xn(Object, "create"), rt = Un(Ve), Ht = Un(Oe), Mn = Un(we), jt = Un(Re), zt = Un(Be), lr = Ze ? Ze.prototype : void 0, an = lr ? lr.valueOf : void 0;
    function yt(C) {
      var _ = -1, de = C ? C.length : 0;
      for (this.clear(); ++_ < de; ) {
        var Le = C[_];
        this.set(Le[0], Le[1]);
      }
    }
    function Gt() {
      this.__data__ = ke ? ke(null) : {};
    }
    function hn(C) {
      return this.has(C) && delete this.__data__[C];
    }
    function ur(C) {
      var _ = this.__data__;
      if (ke) {
        var de = _[C];
        return de === a ? void 0 : de;
      }
      return ge.call(_, C) ? _[C] : void 0;
    }
    function Yn(C) {
      var _ = this.__data__;
      return ke ? _[C] !== void 0 : ge.call(_, C);
    }
    function Nr(C, _) {
      var de = this.__data__;
      return de[C] = ke && _ === void 0 ? a : _, this;
    }
    yt.prototype.clear = Gt, yt.prototype.delete = hn, yt.prototype.get = ur, yt.prototype.has = Yn, yt.prototype.set = Nr;
    function Wt(C) {
      var _ = -1, de = C ? C.length : 0;
      for (this.clear(); ++_ < de; ) {
        var Le = C[_];
        this.set(Le[0], Le[1]);
      }
    }
    function jr() {
      this.__data__ = [];
    }
    function kr(C) {
      var _ = this.__data__, de = Qe(_, C);
      if (de < 0)
        return !1;
      var Le = _.length - 1;
      return de == Le ? _.pop() : Se.call(_, de, 1), !0;
    }
    function $r(C) {
      var _ = this.__data__, de = Qe(_, C);
      return de < 0 ? void 0 : _[de][1];
    }
    function Br(C) {
      return Qe(this.__data__, C) > -1;
    }
    function Vr(C, _) {
      var de = this.__data__, Le = Qe(de, C);
      return Le < 0 ? de.push([C, _]) : de[Le][1] = _, this;
    }
    Wt.prototype.clear = jr, Wt.prototype.delete = kr, Wt.prototype.get = $r, Wt.prototype.has = Br, Wt.prototype.set = Vr;
    function pn(C) {
      var _ = -1, de = C ? C.length : 0;
      for (this.clear(); ++_ < de; ) {
        var Le = C[_];
        this.set(Le[0], Le[1]);
      }
    }
    function Hr() {
      this.__data__ = {
        hash: new yt(),
        map: new (Oe || Wt)(),
        string: new yt()
      };
    }
    function zr(C) {
      return Kr(this, C).delete(C);
    }
    function Gr(C) {
      return Kr(this, C).get(C);
    }
    function Rt(C) {
      return Kr(this, C).has(C);
    }
    function Wr(C, _) {
      return Kr(this, C).set(C, _), this;
    }
    pn.prototype.clear = Hr, pn.prototype.delete = zr, pn.prototype.get = Gr, pn.prototype.has = Rt, pn.prototype.set = Wr;
    function vn(C) {
      this.__data__ = new Wt(C);
    }
    function R() {
      this.__data__ = new Wt();
    }
    function ue(C) {
      return this.__data__.delete(C);
    }
    function ae(C) {
      return this.__data__.get(C);
    }
    function pe(C) {
      return this.__data__.has(C);
    }
    function me(C, _) {
      var de = this.__data__;
      if (de instanceof Wt) {
        var Le = de.__data__;
        if (!Oe || Le.length < r - 1)
          return Le.push([C, _]), this;
        de = this.__data__ = new pn(Le);
      }
      return de.set(C, _), this;
    }
    vn.prototype.clear = R, vn.prototype.delete = ue, vn.prototype.get = ae, vn.prototype.has = pe, vn.prototype.set = me;
    function He(C, _) {
      var de = Yo(C) || kl(C) ? b(C.length, String) : [], Le = de.length, bt = !!Le;
      for (var Dt in C)
        ge.call(C, Dt) && !(bt && (Dt == "length" || Ll(Dt, Le))) && de.push(Dt);
      return de;
    }
    function Pe(C, _, de) {
      var Le = C[_];
      (!(ge.call(C, _) && ri(Le, de)) || de === void 0 && !(_ in C)) && (C[_] = de);
    }
    function Qe(C, _) {
      for (var de = C.length; de--; )
        if (ri(C[de][0], _))
          return de;
      return -1;
    }
    function at(C, _) {
      return C && ei(_, Ko(_), C);
    }
    function it(C, _, de, Le, bt, Dt, mn) {
      var Ft;
      if (Le && (Ft = Dt ? Le(C, bt, Dt, mn) : Le(C)), Ft !== void 0)
        return Ft;
      if (!Xr(C))
        return C;
      var ii = Yo(C);
      if (ii) {
        if (Ft = Dl(C), !_)
          return Pl(C, Ft);
      } else {
        var Jn = Ln(C), si = Jn == u || Jn == c;
        if (Bl(C))
          return Yr(C, _);
        if (Jn == h || Jn == d || si && !Dt) {
          if (P(C))
            return Dt ? C : {};
          if (Ft = Fl(si ? {} : C), !_)
            return Rl(C, at(Ft, C));
        } else {
          if (!fe[Jn])
            return Dt ? C : {};
          Ft = Ml(C, Jn, it, _);
        }
      }
      mn || (mn = new vn());
      var li = mn.get(C);
      if (li)
        return li;
      if (mn.set(C, Ft), !ii)
        var ui = de ? Il(C) : Ko(C);
      return I(ui || C, function(Xo, Jr) {
        ui && (Jr = Xo, Xo = C[Jr]), Pe(Ft, Jr, it(Xo, _, de, Le, Jr, C, mn));
      }), Ft;
    }
    function It(C) {
      return Xr(C) ? ee(C) : {};
    }
    function ve(C, _, de) {
      var Le = _(C);
      return Yo(C) ? Le : A(Le, de(C));
    }
    function pt(C) {
      return Ce.call(C);
    }
    function Qt(C) {
      if (!Xr(C) || Nl(C))
        return !1;
      var _ = ai(C) || P(C) ? Ke : X;
      return _.test(Un(C));
    }
    function cr(C) {
      if (!ni(C))
        return Ee(C);
      var _ = [];
      for (var de in Object(C))
        ge.call(C, de) && de != "constructor" && _.push(de);
      return _;
    }
    function Yr(C, _) {
      if (_)
        return C.slice();
      var de = new C.constructor(C.length);
      return C.copy(de), de;
    }
    function Kn(C) {
      var _ = new C.constructor(C.byteLength);
      return new G(_).set(new G(C)), _;
    }
    function dr(C, _) {
      var de = _ ? Kn(C.buffer) : C.buffer;
      return new C.constructor(de, C.byteOffset, C.byteLength);
    }
    function wl(C, _, de) {
      var Le = _ ? de(M(C), !0) : M(C);
      return F(Le, be, new C.constructor());
    }
    function Tl(C) {
      var _ = new C.constructor(C.source, re.exec(C));
      return _.lastIndex = C.lastIndex, _;
    }
    function Al(C, _, de) {
      var Le = _ ? de(V(C), !0) : V(C);
      return F(Le, O, new C.constructor());
    }
    function Cl(C) {
      return an ? Object(an.call(C)) : {};
    }
    function Ol(C, _) {
      var de = _ ? Kn(C.buffer) : C.buffer;
      return new C.constructor(de, C.byteOffset, C.length);
    }
    function Pl(C, _) {
      var de = -1, Le = C.length;
      for (_ || (_ = Array(Le)); ++de < Le; )
        _[de] = C[de];
      return _;
    }
    function ei(C, _, de, Le) {
      de || (de = {});
      for (var bt = -1, Dt = _.length; ++bt < Dt; ) {
        var mn = _[bt], Ft = void 0;
        Pe(de, mn, Ft === void 0 ? C[mn] : Ft);
      }
      return de;
    }
    function Rl(C, _) {
      return ei(C, ti(C), _);
    }
    function Il(C) {
      return ve(C, Ko, ti);
    }
    function Kr(C, _) {
      var de = C.__data__;
      return Ul(_) ? de[typeof _ == "string" ? "string" : "hash"] : de.map;
    }
    function Xn(C, _) {
      var de = x(C, _);
      return Qt(de) ? de : void 0;
    }
    var ti = Fe ? $(Fe, Object) : zl, Ln = pt;
    (Ve && Ln(new Ve(new ArrayBuffer(1))) != S || Oe && Ln(new Oe()) != f || we && Ln(we.resolve()) != v || Re && Ln(new Re()) != g || Be && Ln(new Be()) != w) && (Ln = function(C) {
      var _ = Ce.call(C), de = _ == h ? C.constructor : void 0, Le = de ? Un(de) : void 0;
      if (Le)
        switch (Le) {
          case rt:
            return S;
          case Ht:
            return f;
          case Mn:
            return v;
          case jt:
            return g;
          case zt:
            return w;
        }
      return _;
    });
    function Dl(C) {
      var _ = C.length, de = C.constructor(_);
      return _ && typeof C[0] == "string" && ge.call(C, "index") && (de.index = C.index, de.input = C.input), de;
    }
    function Fl(C) {
      return typeof C.constructor == "function" && !ni(C) ? It(K(C)) : {};
    }
    function Ml(C, _, de, Le) {
      var bt = C.constructor;
      switch (_) {
        case T:
          return Kn(C);
        case l:
        case o:
          return new bt(+C);
        case S:
          return dr(C, Le);
        case D:
        case L:
        case U:
        case j:
        case B:
        case H:
        case k:
        case z:
        case Y:
          return Ol(C, Le);
        case f:
          return wl(C, Le, de);
        case p:
        case y:
          return new bt(C);
        case m:
          return Tl(C);
        case g:
          return Al(C, Le, de);
        case E:
          return Cl(C);
      }
    }
    function Ll(C, _) {
      return _ = _ ?? i, !!_ && (typeof C == "number" || he.test(C)) && C > -1 && C % 1 == 0 && C < _;
    }
    function Ul(C) {
      var _ = typeof C;
      return _ == "string" || _ == "number" || _ == "symbol" || _ == "boolean" ? C !== "__proto__" : C === null;
    }
    function Nl(C) {
      return !!te && te in C;
    }
    function ni(C) {
      var _ = C && C.constructor, de = typeof _ == "function" && _.prototype || J;
      return C === de;
    }
    function Un(C) {
      if (C != null) {
        try {
          return le.call(C);
        } catch {
        }
        try {
          return C + "";
        } catch {
        }
      }
      return "";
    }
    function jl(C) {
      return it(C, !0, !0);
    }
    function ri(C, _) {
      return C === _ || C !== C && _ !== _;
    }
    function kl(C) {
      return $l(C) && ge.call(C, "callee") && (!ce.call(C, "callee") || Ce.call(C) == d);
    }
    var Yo = Array.isArray;
    function oi(C) {
      return C != null && Vl(C.length) && !ai(C);
    }
    function $l(C) {
      return Hl(C) && oi(C);
    }
    var Bl = Ae || Gl;
    function ai(C) {
      var _ = Xr(C) ? Ce.call(C) : "";
      return _ == u || _ == c;
    }
    function Vl(C) {
      return typeof C == "number" && C > -1 && C % 1 == 0 && C <= i;
    }
    function Xr(C) {
      var _ = typeof C;
      return !!C && (_ == "object" || _ == "function");
    }
    function Hl(C) {
      return !!C && typeof C == "object";
    }
    function Ko(C) {
      return oi(C) ? He(C) : cr(C);
    }
    function zl() {
      return [];
    }
    function Gl() {
      return !1;
    }
    t.exports = jl;
  }(mr, mr.exports)), mr.exports;
}
var _c = qc();
const nn = /* @__PURE__ */ Ma(_c), ed = {
  name: "Input",
  mixins: [fn],
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
    this.input = nn(this.modelValue);
  },
  watch: {
    input(t) {
      this.$emit("update:modelValue", t);
    },
    modelValue(t) {
      this.input = t;
    }
  }
}, td = ["name", "type", "placeholder"], nd = ["textContent"], rd = {
  key: 2,
  class: "inline-block text-sm text-gray-600 mt-1.5 brand-200"
};
function od(t, e, r, a, i, d) {
  var n, l, o;
  return oe(), se("div", {
    class: et((n = r.field) == null ? void 0 : n.class)
  }, [
    t.editable ? nt((oe(), se("input", {
      key: 0,
      name: r.name,
      type: r.type,
      "onUpdate:modelValue": e[0] || (e[0] = (s) => i.input = s),
      placeholder: (l = r.field) == null ? void 0 : l.placeholder
    }, null, 8, td)), [
      [Aa, i.input]
    ]) : (oe(), se("p", {
      key: 1,
      textContent: We(r.modelValue)
    }, null, 8, nd)),
    (o = r.field) != null && o.hint ? (oe(), se("p", rd, We(r.field.hint), 1)) : je("", !0)
  ], 2);
}
const xo = /* @__PURE__ */ mt(ed, [["render", od]]), Is = {
  beforeMount(t, e) {
    t.clickOutsideEvent = (r) => {
      t === r.target || t.contains(r.target) || e.value(r);
    }, document.addEventListener("click", t.clickOutsideEvent);
  },
  unmounted(t) {
    document.removeEventListener("click", t.clickOutsideEvent);
  }
}, ad = {
  name: "Select",
  mixins: [fn],
  directives: {
    clickOutside: Is
  },
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
}, id = ["name", "id", "value"], sd = {
  key: 0,
  class: "absolute z-50 bg-white border border-gray-300 rounded-lg mt-1 w-full max-h-60 overflow-auto"
}, ld = ["onClick"], ud = {
  key: 1,
  class: "inline-block text-sm text-gray-600 mt-1.5 brand-200"
};
function cd(t, e, r, a, i, d) {
  var l, o, s, u;
  const n = es("click-outside");
  return nt((oe(), se("div", {
    class: et([(l = r.field) == null ? void 0 : l.class, "relative"])
  }, [
    N("input", {
      type: "hidden",
      name: r.name,
      id: r.name,
      value: i.selectedLabel
    }, null, 8, id),
    N("div", {
      class: et(["input-base bg-white cursor-pointer", { "text-gray-400": !i.selectedLabel && ((o = r.field) == null ? void 0 : o.placeholder) }]),
      onClick: e[0] || (e[0] = (...c) => d.toggleDropdown && d.toggleDropdown(...c))
    }, We(i.selectedLabel || ((s = r.field) == null ? void 0 : s.placeholder) || "Select an option"), 3),
    i.isOpen ? (oe(), se("ul", sd, [
      (oe(!0), se(Ot, null, Pn(r.options, (c, f) => (oe(), se("li", {
        key: f,
        onClick: (p) => d.selectOption(c),
        class: "px-4 py-2 hover:bg-gray-100 cursor-pointer"
      }, We(c), 9, ld))), 128))
    ])) : je("", !0),
    (u = r.field) != null && u.hint ? (oe(), se("p", ud, We(r.field.hint), 1)) : je("", !0)
  ], 2)), [
    [n, () => this.isOpen && (this.isOpen = !1)]
  ]);
}
const Ds = /* @__PURE__ */ mt(ad, [["render", cd]]);
/*!
 * Signature Pad v3.0.0-beta.4 | https://github.com/szimek/signature_pad
 * (c) 2020 Szymon Nowak | Released under the MIT license
 */
class So {
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
class La {
  constructor(e, r, a, i, d, n) {
    this.startPoint = e, this.control2 = r, this.control1 = a, this.endPoint = i, this.startWidth = d, this.endWidth = n;
  }
  static fromPoints(e, r) {
    const a = this.calculateControlPoints(e[0], e[1], e[2]).c2, i = this.calculateControlPoints(e[1], e[2], e[3]).c1;
    return new La(e[1], a, i, e[2], r.start, r.end);
  }
  static calculateControlPoints(e, r, a) {
    const i = e.x - r.x, d = e.y - r.y, n = r.x - a.x, l = r.y - a.y, o = { x: (e.x + r.x) / 2, y: (e.y + r.y) / 2 }, s = { x: (r.x + a.x) / 2, y: (r.y + a.y) / 2 }, u = Math.sqrt(i * i + d * d), c = Math.sqrt(n * n + l * l), f = o.x - s.x, p = o.y - s.y, h = c / (u + c), v = { x: s.x + f * h, y: s.y + p * h }, m = r.x - v.x, g = r.y - v.y;
    return {
      c1: new So(o.x + m, o.y + g),
      c2: new So(s.x + m, s.y + g)
    };
  }
  length() {
    let r = 0, a, i;
    for (let d = 0; d <= 10; d += 1) {
      const n = d / 10, l = this.point(n, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x), o = this.point(n, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y);
      if (d > 0) {
        const s = l - a, u = o - i;
        r += Math.sqrt(s * s + u * u);
      }
      a = l, i = o;
    }
    return r;
  }
  point(e, r, a, i, d) {
    return r * (1 - e) * (1 - e) * (1 - e) + 3 * a * (1 - e) * (1 - e) * e + 3 * i * (1 - e) * e * e + d * e * e * e;
  }
}
function dd(t, e = 250) {
  let r = 0, a = null, i, d, n;
  const l = () => {
    r = Date.now(), a = null, i = t.apply(d, n), a || (d = null, n = []);
  };
  return function(...s) {
    const u = Date.now(), c = e - (u - r);
    return d = this, n = s, c <= 0 || c > e ? (a && (clearTimeout(a), a = null), r = u, i = t.apply(d, n), a || (d = null, n = [])) : a || (a = window.setTimeout(l, c)), i;
  };
}
let fd = class ya {
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
        const d = a.changedTouches[0];
        this._strokeEnd(d);
      }
    }, this.velocityFilterWeight = r.velocityFilterWeight || 0.7, this.minWidth = r.minWidth || 0.5, this.maxWidth = r.maxWidth || 2.5, this.throttle = "throttle" in r ? r.throttle : 16, this.minDistance = "minDistance" in r ? r.minDistance : 5, this.dotSize = r.dotSize || function() {
      return (this.minWidth + this.maxWidth) / 2;
    }, this.penColor = r.penColor || "black", this.backgroundColor = r.backgroundColor || "rgba(0,0,0,0)", this.onBegin = r.onBegin, this.onEnd = r.onEnd, this._strokeMoveUpdate = this.throttle ? dd(ya.prototype._strokeUpdate, this.throttle) : ya.prototype._strokeUpdate, this._ctx = e.getContext("2d"), this.clear(), this.on();
  }
  clear() {
    const { _ctx: e, canvas: r } = this;
    e.fillStyle = this.backgroundColor, e.clearRect(0, 0, r.width, r.height), e.fillRect(0, 0, r.width, r.height), this._data = [], this._reset(), this._isEmpty = !0;
  }
  fromDataURL(e, r = {}, a) {
    const i = new Image(), d = r.ratio || window.devicePixelRatio || 1, n = r.width || this.canvas.width / d, l = r.height || this.canvas.height / d;
    this._reset(), i.onload = () => {
      this._ctx.drawImage(i, 0, 0, n, l), a && a();
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
    const r = e.clientX, a = e.clientY, i = this._createPoint(r, a), d = this._data[this._data.length - 1], n = d.points, l = n.length > 0 && n[n.length - 1], o = l ? i.distanceTo(l) <= this.minDistance : !1, s = d.color;
    if (!l || !(l && o)) {
      const u = this._addPoint(i);
      l ? u && this._drawCurve({ color: s, curve: u }) : this._drawDot({ color: s, point: i }), n.push({
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
    return new So(e - a.left, r - a.top, (/* @__PURE__ */ new Date()).getTime());
  }
  _addPoint(e) {
    const { _lastPoints: r } = this;
    if (r.push(e), r.length > 2) {
      r.length === 3 && r.unshift(r[0]);
      const a = this._calculateCurveWidths(r[1], r[2]), i = La.fromPoints(r, a);
      return r.shift(), i;
    }
    return null;
  }
  _calculateCurveWidths(e, r) {
    const a = this.velocityFilterWeight * r.velocityFrom(e) + (1 - this.velocityFilterWeight) * this._lastVelocity, i = this._strokeWidth(a), d = {
      end: i,
      start: this._lastWidth
    };
    return this._lastVelocity = a, this._lastWidth = i, d;
  }
  _strokeWidth(e) {
    return Math.max(this.maxWidth / (e + 1), this.minWidth);
  }
  _drawCurveSegment(e, r, a) {
    const i = this._ctx;
    i.moveTo(e, r), i.arc(e, r, a, 0, 2 * Math.PI, !1), this._isEmpty = !1;
  }
  _drawCurve({ color: e, curve: r }) {
    const a = this._ctx, i = r.endWidth - r.startWidth, d = Math.floor(r.length()) * 2;
    a.beginPath(), a.fillStyle = e;
    for (let n = 0; n < d; n += 1) {
      const l = n / d, o = l * l, s = o * l, u = 1 - l, c = u * u, f = c * u;
      let p = f * r.startPoint.x;
      p += 3 * c * l * r.control1.x, p += 3 * u * o * r.control2.x, p += s * r.endPoint.x;
      let h = f * r.startPoint.y;
      h += 3 * c * l * r.control1.y, h += 3 * u * o * r.control2.y, h += s * r.endPoint.y;
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
      const { color: d, points: n } = i;
      if (n.length > 1)
        for (let l = 0; l < n.length; l += 1) {
          const o = n[l], s = new So(o.x, o.y, o.time);
          this.penColor = d, l === 0 && this._reset();
          const u = this._addPoint(s);
          u && r({ color: d, curve: u });
        }
      else
        this._reset(), a({
          color: d,
          point: n[0]
        });
    }
  }
  _toSVG() {
    const e = this._data, r = Math.max(window.devicePixelRatio || 1, 1), a = 0, i = 0, d = this.canvas.width / r, n = this.canvas.height / r, l = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    l.setAttribute("width", this.canvas.width.toString()), l.setAttribute("height", this.canvas.height.toString()), this._fromData(e, ({ color: p, curve: h }) => {
      const v = document.createElement("path");
      if (!isNaN(h.control1.x) && !isNaN(h.control1.y) && !isNaN(h.control2.x) && !isNaN(h.control2.y)) {
        const m = `M ${h.startPoint.x.toFixed(3)},${h.startPoint.y.toFixed(3)} C ${h.control1.x.toFixed(3)},${h.control1.y.toFixed(3)} ${h.control2.x.toFixed(3)},${h.control2.y.toFixed(3)} ${h.endPoint.x.toFixed(3)},${h.endPoint.y.toFixed(3)}`;
        v.setAttribute("d", m), v.setAttribute("stroke-width", (h.endWidth * 2.25).toFixed(3)), v.setAttribute("stroke", p), v.setAttribute("fill", "none"), v.setAttribute("stroke-linecap", "round"), l.appendChild(v);
      }
    }, ({ color: p, point: h }) => {
      const v = document.createElement("circle"), m = typeof this.dotSize == "function" ? this.dotSize() : this.dotSize;
      v.setAttribute("r", m.toString()), v.setAttribute("cx", h.x.toString()), v.setAttribute("cy", h.y.toString()), v.setAttribute("fill", p), l.appendChild(v);
    });
    const o = "data:image/svg+xml;base64,", s = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${a} ${i} ${d} ${n}" width="${d}" height="${n}">`;
    let u = l.innerHTML;
    if (u === void 0) {
      const p = document.createElement("dummy"), h = l.childNodes;
      p.innerHTML = "";
      for (let v = 0; v < h.length; v += 1)
        p.appendChild(h[v].cloneNode(!0));
      u = p.innerHTML;
    }
    const f = s + u + "</svg>";
    return o + btoa(f);
  }
};
const hd = {
  name: "SignaturePad",
  mixins: [fn],
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
    t.style.width = "100%", t.style.height = "100%", t.width = t.offsetWidth, t.height = t.offsetHeight, this.signaturePad = new fd(t), this.signaturePad.onEnd = () => {
      this.signaturePad.isEmpty() || (this.input = this.signaturePad.toDataURL());
    }, this.modelValue && (this.input = this.modelValue, this.signaturePad.fromDataURL(this.input)), this.editable || this.signaturePad.off();
  },
  watch: {
    input() {
      this.$emit("update:modelValue", this.input);
    },
    modelValue: {
      handler: function(e) {
        this.input = this.modelValue, this.signaturePad.fromDataURL(this.input);
      },
      deep: !0
    }
  },
  methods: {
    clear() {
      this.input = null, this.signaturePad.clear();
    }
  }
}, pd = ["name", "value"], vd = { class: "signature-pad-body rounded-lg border border-dashed border-gray-300 shadow-sm h-[160px]" }, md = { ref: "signaturePadCanvas" }, gd = { class: "signature-pad-actions" }, yd = {
  key: 0,
  class: "inline-block text-sm text-gray-600 mt-1.5 brand-200"
};
function bd(t, e, r, a, i, d) {
  var n, l;
  return oe(), se("div", {
    class: et(["signature-pad", (n = r.field) == null ? void 0 : n.class])
  }, [
    N("input", {
      type: "hidden",
      class: "signature-input",
      name: r.name,
      value: i.input
    }, null, 8, pd),
    N("div", vd, [
      N("canvas", md, null, 512),
      N("div", gd, [
        i.input && t.editable ? (oe(), se("button", {
          key: 0,
          "data-action": "clear",
          type: "button",
          class: "p-1",
          onClick: e[0] || (e[0] = (...o) => d.clear && d.clear(...o))
        }, e[1] || (e[1] = [
          N("i", { class: "fa fa-times primary-text" }, null, -1)
        ]))) : je("", !0)
      ])
    ]),
    (l = r.field) != null && l.hint ? (oe(), se("p", yd, We(r.field.hint), 1)) : je("", !0)
  ], 2);
}
const Fs = /* @__PURE__ */ mt(hd, [["render", bd]]), xd = {
  name: "Textarea",
  mixins: [fn],
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
}, Sd = ["name", "disabled", "placeholder"], Ed = {
  key: 0,
  class: "inline-block text-sm text-gray-600 mt-1.5 brand-200"
};
function wd(t, e, r, a, i, d) {
  var n, l, o;
  return oe(), se("div", {
    class: et((n = r.field) == null ? void 0 : n.class)
  }, [
    nt(N("textarea", {
      name: r.name,
      "onUpdate:modelValue": e[0] || (e[0] = (s) => i.input = s),
      rows: "4",
      disabled: !t.editable,
      placeholder: (l = r.field) == null ? void 0 : l.placeholder
    }, null, 8, Sd), [
      [St, i.input]
    ]),
    (o = r.field) != null && o.hint ? (oe(), se("p", Ed, We(r.field.hint), 1)) : je("", !0)
  ], 2);
}
const Ms = /* @__PURE__ */ mt(xd, [["render", wd]]), Td = {
  name: "VParagraph",
  mixins: [fn],
  props: {
    field: {
      type: Object,
      default: () => ({})
    }
  }
}, Ad = ["innerHTML"], Cd = { key: 1 }, Od = ["innerHTML"], Pd = ["innerHTML"];
function Rd(t, e, r, a, i, d) {
  var n;
  return oe(), se("div", {
    class: et(["paragraph text-gray-600", (n = r.field) == null ? void 0 : n.class])
  }, [
    r.field.content_type === "p" ? (oe(), se("p", {
      key: 0,
      innerHTML: r.field.content
    }, null, 8, Ad)) : je("", !0),
    r.field.content_type === "blockquote" ? (oe(), se("blockquote", Cd, [
      N("q", {
        innerHTML: r.field.content
      }, null, 8, Od)
    ])) : je("", !0),
    r.field.content_type === "address" ? (oe(), se("address", {
      key: 2,
      innerHTML: r.field.content
    }, null, 8, Pd)) : je("", !0)
  ], 2);
}
const Ls = /* @__PURE__ */ mt(Td, [["render", Rd]]);
function Us(t) {
  return t instanceof Date || Object.prototype.toString.call(t) === "[object Date]";
}
function $o(t) {
  return Us(t) ? new Date(t.getTime()) : t == null ? /* @__PURE__ */ new Date(NaN) : new Date(t);
}
function Id(t) {
  return Us(t) && !isNaN(t.getTime());
}
function Ns(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (!(e >= 0 && e <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6");
  var r = $o(t), a = r.getDay(), i = (a + 7 - e) % 7;
  return r.setDate(r.getDate() - i), r.setHours(0, 0, 0, 0), r;
}
function js(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.firstDayOfWeek, a = r === void 0 ? 0 : r, i = e.firstWeekContainsDate, d = i === void 0 ? 1 : i;
  if (!(d >= 1 && d <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7");
  for (var n = $o(t), l = n.getFullYear(), o = /* @__PURE__ */ new Date(0), s = l + 1; s >= l - 1 && (o.setFullYear(s, 0, d), o.setHours(0, 0, 0, 0), o = Ns(o, a), !(n.getTime() >= o.getTime())); s--)
    ;
  return o;
}
function Ua(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.firstDayOfWeek, a = r === void 0 ? 0 : r, i = e.firstWeekContainsDate, d = i === void 0 ? 1 : i, n = $o(t), l = Ns(n, a), o = js(n, {
    firstDayOfWeek: a,
    firstWeekContainsDate: d
  }), s = l.getTime() - o.getTime();
  return Math.round(s / (7 * 24 * 3600 * 1e3)) + 1;
}
var Na = {
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  weekdaysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  firstDayOfWeek: 0,
  firstWeekContainsDate: 1
}, Dd = /\[([^\]]+)]|YYYY|YY?|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|Z{1,2}|S{1,3}|w{1,2}|x|X|a|A/g;
function Bt(t) {
  for (var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2, r = "".concat(Math.abs(t)), a = t < 0 ? "-" : ""; r.length < e; )
    r = "0".concat(r);
  return a + r;
}
function Oi(t) {
  return Math.round(t.getTimezoneOffset() / 15) * 15;
}
function Pi(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = t > 0 ? "-" : "+", a = Math.abs(t), i = Math.floor(a / 60), d = a % 60;
  return r + Bt(i, 2) + e + Bt(d, 2);
}
var Ri = function(e, r, a) {
  var i = e < 12 ? "AM" : "PM";
  return a ? i.toLocaleLowerCase() : i;
}, Er = {
  Y: function(e) {
    var r = e.getFullYear();
    return r <= 9999 ? "".concat(r) : "+".concat(r);
  },
  // Year: 00, 01, ..., 99
  YY: function(e) {
    return Bt(e.getFullYear(), 4).substr(2);
  },
  // Year: 1900, 1901, ..., 2099
  YYYY: function(e) {
    return Bt(e.getFullYear(), 4);
  },
  // Month: 1, 2, ..., 12
  M: function(e) {
    return e.getMonth() + 1;
  },
  // Month: 01, 02, ..., 12
  MM: function(e) {
    return Bt(e.getMonth() + 1, 2);
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
    return Bt(e.getDate(), 2);
  },
  // Hour: 0, 1, ... 23
  H: function(e) {
    return e.getHours();
  },
  // Hour: 00, 01, ..., 23
  HH: function(e) {
    return Bt(e.getHours(), 2);
  },
  // Hour: 1, 2, ..., 12
  h: function(e) {
    var r = e.getHours();
    return r === 0 ? 12 : r > 12 ? r % 12 : r;
  },
  // Hour: 01, 02, ..., 12
  hh: function() {
    var e = Er.h.apply(Er, arguments);
    return Bt(e, 2);
  },
  // Minute: 0, 1, ..., 59
  m: function(e) {
    return e.getMinutes();
  },
  // Minute: 00, 01, ..., 59
  mm: function(e) {
    return Bt(e.getMinutes(), 2);
  },
  // Second: 0, 1, ..., 59
  s: function(e) {
    return e.getSeconds();
  },
  // Second: 00, 01, ..., 59
  ss: function(e) {
    return Bt(e.getSeconds(), 2);
  },
  // 1/10 of second: 0, 1, ..., 9
  S: function(e) {
    return Math.floor(e.getMilliseconds() / 100);
  },
  // 1/100 of second: 00, 01, ..., 99
  SS: function(e) {
    return Bt(Math.floor(e.getMilliseconds() / 10), 2);
  },
  // Millisecond: 000, 001, ..., 999
  SSS: function(e) {
    return Bt(e.getMilliseconds(), 3);
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
    var a = r.meridiem || Ri;
    return a(e.getHours(), e.getMinutes(), !1);
  },
  // am, pm
  a: function(e, r) {
    var a = r.meridiem || Ri;
    return a(e.getHours(), e.getMinutes(), !0);
  },
  // Timezone: -01:00, +00:00, ... +12:00
  Z: function(e) {
    return Pi(Oi(e), ":");
  },
  // Timezone: -0100, +0000, ... +1200
  ZZ: function(e) {
    return Pi(Oi(e));
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
    return Ua(e, {
      firstDayOfWeek: r.firstDayOfWeek,
      firstWeekContainsDate: r.firstWeekContainsDate
    });
  },
  ww: function(e, r) {
    return Bt(Er.w(e, r), 2);
  }
};
function ja(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = e ? String(e) : "YYYY-MM-DDTHH:mm:ss.SSSZ", i = $o(t);
  if (!Id(i))
    return "Invalid Date";
  var d = r.locale || Na;
  return a.replace(Dd, function(n, l) {
    return l || (typeof Er[n] == "function" ? "".concat(Er[n](i, d)) : n);
  });
}
function Ii(t) {
  return Ld(t) || Md(t) || Fd();
}
function Fd() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function Md(t) {
  if (Symbol.iterator in Object(t) || Object.prototype.toString.call(t) === "[object Arguments]") return Array.from(t);
}
function Ld(t) {
  if (Array.isArray(t)) {
    for (var e = 0, r = new Array(t.length); e < t.length; e++)
      r[e] = t[e];
    return r;
  }
}
function Di(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    e && (a = a.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function Ud(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Di(r, !0).forEach(function(a) {
      In(t, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Di(r).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return t;
}
function Nd(t, e) {
  return $d(t) || kd(t, e) || jd();
}
function jd() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function kd(t, e) {
  if (Symbol.iterator in Object(t) || Object.prototype.toString.call(t) === "[object Arguments]") {
    var r = [], a = !0, i = !1, d = void 0;
    try {
      for (var n = t[Symbol.iterator](), l; !(a = (l = n.next()).done) && (r.push(l.value), !(e && r.length === e)); a = !0)
        ;
    } catch (o) {
      i = !0, d = o;
    } finally {
      try {
        !a && n.return != null && n.return();
      } finally {
        if (i) throw d;
      }
    }
    return r;
  }
}
function $d(t) {
  if (Array.isArray(t)) return t;
}
function In(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var Bd = /(\[[^\[]*\])|(MM?M?M?|Do|DD?|ddd?d?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|S{1,3}|x|X|ZZ?|.)/g, ks = /\d/, Dn = /\d\d/, Vd = /\d{3}/, Hd = /\d{4}/, sr = /\d\d?/, zd = /[+-]\d\d:?\d\d/, $s = /[+-]?\d+/, Gd = /[+-]?\d+(\.\d{1,3})?/, ka = "year", Bo = "month", Bs = "day", Vs = "hour", Hs = "minute", zs = "second", $a = "millisecond", Gs = {}, tt = function(e, r, a) {
  var i = Array.isArray(e) ? e : [e], d;
  typeof a == "string" ? d = function(l) {
    var o = parseInt(l, 10);
    return In({}, a, o);
  } : d = a, i.forEach(function(n) {
    Gs[n] = [r, d];
  });
}, Wd = function(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
}, Fr = function(e) {
  return function(r) {
    var a = r[e];
    if (!Array.isArray(a))
      throw new Error("Locale[".concat(e, "] need an array"));
    return new RegExp(a.map(Wd).join("|"));
  };
}, Mr = function(e, r) {
  return function(a, i) {
    var d = i[e];
    if (!Array.isArray(d))
      throw new Error("Locale[".concat(e, "] need an array"));
    var n = d.indexOf(a);
    if (n < 0)
      throw new Error("Invalid Word");
    return In({}, r, n);
  };
};
tt("Y", $s, ka);
tt("YY", Dn, function(t) {
  var e = (/* @__PURE__ */ new Date()).getFullYear(), r = Math.floor(e / 100), a = parseInt(t, 10);
  return a = (a > 68 ? r - 1 : r) * 100 + a, In({}, ka, a);
});
tt("YYYY", Hd, ka);
tt("M", sr, function(t) {
  return In({}, Bo, parseInt(t, 10) - 1);
});
tt("MM", Dn, function(t) {
  return In({}, Bo, parseInt(t, 10) - 1);
});
tt("MMM", Fr("monthsShort"), Mr("monthsShort", Bo));
tt("MMMM", Fr("months"), Mr("months", Bo));
tt("D", sr, Bs);
tt("DD", Dn, Bs);
tt(["H", "h"], sr, Vs);
tt(["HH", "hh"], Dn, Vs);
tt("m", sr, Hs);
tt("mm", Dn, Hs);
tt("s", sr, zs);
tt("ss", Dn, zs);
tt("S", ks, function(t) {
  return In({}, $a, parseInt(t, 10) * 100);
});
tt("SS", Dn, function(t) {
  return In({}, $a, parseInt(t, 10) * 10);
});
tt("SSS", Vd, $a);
function Yd(t) {
  return t.meridiemParse || /[ap]\.?m?\.?/i;
}
function Kd(t) {
  return "".concat(t).toLowerCase().charAt(0) === "p";
}
tt(["A", "a"], Yd, function(t, e) {
  var r = typeof e.isPM == "function" ? e.isPM(t) : Kd(t);
  return {
    isPM: r
  };
});
function Xd(t) {
  var e = t.match(/([+-]|\d\d)/g) || ["-", "0", "0"], r = Nd(e, 3), a = r[0], i = r[1], d = r[2], n = parseInt(i, 10) * 60 + parseInt(d, 10);
  return n === 0 ? 0 : a === "+" ? -n : +n;
}
tt(["Z", "ZZ"], zd, function(t) {
  return {
    offset: Xd(t)
  };
});
tt("x", $s, function(t) {
  return {
    date: new Date(parseInt(t, 10))
  };
});
tt("X", Gd, function(t) {
  return {
    date: new Date(parseFloat(t) * 1e3)
  };
});
tt("d", ks, "weekday");
tt("dd", Fr("weekdaysMin"), Mr("weekdaysMin", "weekday"));
tt("ddd", Fr("weekdaysShort"), Mr("weekdaysShort", "weekday"));
tt("dddd", Fr("weekdays"), Mr("weekdays", "weekday"));
tt("w", sr, "week");
tt("ww", Dn, "week");
function Jd(t, e) {
  if (t !== void 0 && e !== void 0) {
    if (e) {
      if (t < 12)
        return t + 12;
    } else if (t === 12)
      return 0;
  }
  return t;
}
function Qd(t) {
  for (var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Date(), r = [0, 0, 1, 0, 0, 0, 0], a = [e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()], i = !0, d = 0; d < 7; d++)
    t[d] === void 0 ? r[d] = i ? a[d] : r[d] : (r[d] = t[d], i = !1);
  return r;
}
function Zd(t, e, r, a, i, d, n) {
  var l;
  return t < 100 && t >= 0 ? (l = new Date(t + 400, e, r, a, i, d, n), isFinite(l.getFullYear()) && l.setFullYear(t)) : l = new Date(t, e, r, a, i, d, n), l;
}
function qd() {
  for (var t, e = arguments.length, r = new Array(e), a = 0; a < e; a++)
    r[a] = arguments[a];
  var i = r[0];
  return i < 100 && i >= 0 ? (r[0] += 400, t = new Date(Date.UTC.apply(Date, r)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(i)) : t = new Date(Date.UTC.apply(Date, r)), t;
}
function _d(t, e, r) {
  var a = e.match(Bd);
  if (!a)
    throw new Error();
  for (var i = a.length, d = {}, n = 0; n < i; n += 1) {
    var l = a[n], o = Gs[l];
    if (o) {
      var u = typeof o[0] == "function" ? o[0](r) : o[0], c = o[1], f = (u.exec(t) || [])[0], p = c(f, r);
      d = Ud({}, d, {}, p), t = t.replace(f, "");
    } else {
      var s = l.replace(/^\[|\]$/g, "");
      if (t.indexOf(s) === 0)
        t = t.substr(s.length);
      else
        throw new Error("not match");
    }
  }
  return d;
}
function ef(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  try {
    var a = r.locale, i = a === void 0 ? Na : a, d = r.backupDate, n = d === void 0 ? /* @__PURE__ */ new Date() : d, l = _d(t, e, i), o = l.year, s = l.month, u = l.day, c = l.hour, f = l.minute, p = l.second, h = l.millisecond, v = l.isPM, m = l.date, g = l.offset, y = l.weekday, E = l.week;
    if (m)
      return m;
    var w = [o, s, u, c, f, p, h];
    if (w[3] = Jd(w[3], v), E !== void 0 && s === void 0 && u === void 0) {
      var T = js(o === void 0 ? n : new Date(o, 3), {
        firstDayOfWeek: i.firstDayOfWeek,
        firstWeekContainsDate: i.firstWeekContainsDate
      });
      return new Date(T.getTime() + (E - 1) * 7 * 24 * 3600 * 1e3);
    }
    var S, D = Qd(w, n);
    return g !== void 0 ? (D[6] += g * 60 * 1e3, S = qd.apply(void 0, Ii(D))) : S = Zd.apply(void 0, Ii(D)), y !== void 0 && S.getDay() !== y ? /* @__PURE__ */ new Date(NaN) : S;
  } catch {
    return /* @__PURE__ */ new Date(NaN);
  }
}
var tf = Object.defineProperty, nf = Object.defineProperties, rf = Object.getOwnPropertyDescriptors, Eo = Object.getOwnPropertySymbols, Ws = Object.prototype.hasOwnProperty, Ys = Object.prototype.propertyIsEnumerable, Fi = (t, e, r) => e in t ? tf(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, gt = (t, e) => {
  for (var r in e || (e = {}))
    Ws.call(e, r) && Fi(t, r, e[r]);
  if (Eo)
    for (var r of Eo(e))
      Ys.call(e, r) && Fi(t, r, e[r]);
  return t;
}, Xt = (t, e) => nf(t, rf(e)), of = (t, e) => {
  var r = {};
  for (var a in t)
    Ws.call(t, a) && e.indexOf(a) < 0 && (r[a] = t[a]);
  if (t != null && Eo)
    for (var a of Eo(t))
      e.indexOf(a) < 0 && Ys.call(t, a) && (r[a] = t[a]);
  return r;
};
const af = {
  formatLocale: Na,
  yearFormat: "YYYY",
  monthFormat: "MMM",
  monthBeforeYear: !0
};
let gr = "en";
const _n = {};
_n[gr] = af;
function Ks(t, e, r = !1) {
  if (typeof t != "string")
    return _n[gr];
  let a = gr;
  return _n[t] && (a = t), e && (_n[t] = e, a = t), r || (gr = a), _n[t] || _n[gr];
}
function ba(t) {
  return Ks(t, void 0, !0);
}
function Ba(t, e) {
  if (!Array.isArray(t))
    return [];
  const r = [], a = t.length;
  let i = 0;
  for (e = e || a; i < a; )
    r.push(t.slice(i, i += e));
  return r;
}
function Mi(t) {
  return Array.isArray(t) ? t[t.length - 1] : void 0;
}
function Cn(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function gn(t, e) {
  const r = {};
  return Cn(t) && (Array.isArray(e) || (e = [e]), e.forEach((a) => {
    Object.prototype.hasOwnProperty.call(t, a) && (r[a] = t[a]);
  })), r;
}
function Xs(t, e) {
  if (!Cn(t))
    return {};
  let r = t;
  return Cn(e) && Object.keys(e).forEach((a) => {
    let i = e[a];
    const d = t[a];
    Cn(i) && Cn(d) && (i = Xs(d, i)), r = Xt(gt({}, r), { [a]: i });
  }), r;
}
function _o(t) {
  const e = parseInt(String(t), 10);
  return e < 10 ? `0${e}` : `${e}`;
}
function sf(t) {
  const e = /-(\w)/g;
  return t.replace(e, (r, a) => a ? a.toUpperCase() : "");
}
const Js = "datepicker_locale", Qs = "datepicker_prefixClass", Zs = "datepicker_getWeek";
function Va() {
  return Ca(Js, Jl(ba()));
}
function lf(t) {
  const e = rn(() => Cn(t.value) ? Xs(ba(), t.value) : ba(t.value));
  return Do(Js, e), e;
}
function uf(t) {
  Do(Qs, t);
}
function Pt() {
  return Ca(Qs, "mx");
}
function cf(t) {
  Do(Zs, t);
}
function df() {
  return Ca(Zs, Ua);
}
function ff(t) {
  const e = t.style.display, r = t.style.visibility;
  t.style.display = "block", t.style.visibility = "hidden";
  const a = window.getComputedStyle(t), i = t.offsetWidth + parseInt(a.marginLeft, 10) + parseInt(a.marginRight, 10), d = t.offsetHeight + parseInt(a.marginTop, 10) + parseInt(a.marginBottom, 10);
  return t.style.display = e, t.style.visibility = r, { width: i, height: d };
}
function hf(t, e, r, a) {
  let i = 0, d = 0, n = 0, l = 0;
  const o = t.getBoundingClientRect(), s = document.documentElement.clientWidth, u = document.documentElement.clientHeight;
  return a && (n = window.pageXOffset + o.left, l = window.pageYOffset + o.top), s - o.left < e && o.right < e ? i = n - o.left + 1 : o.left + o.width / 2 <= s / 2 ? i = n : i = n + o.width - e, o.top <= r && u - o.bottom <= r ? d = l + u - o.top - r : o.top + o.height / 2 <= u / 2 ? d = l + o.height : d = l - r, { left: `${i}px`, top: `${d}px` };
}
function Ha(t, e = document.body) {
  if (!t || t === e)
    return null;
  const r = (d, n) => getComputedStyle(d, null).getPropertyValue(n);
  return /(auto|scroll)/.test(r(t, "overflow") + r(t, "overflow-y") + r(t, "overflow-x")) ? t : Ha(t.parentElement, e);
}
let qr;
function pf() {
  if (typeof window > "u")
    return 0;
  if (qr !== void 0)
    return qr;
  const t = document.createElement("div");
  t.style.visibility = "hidden", t.style.overflow = "scroll", t.style.width = "100px", t.style.position = "absolute", t.style.top = "-9999px", document.body.appendChild(t);
  const e = document.createElement("div");
  return e.style.width = "100%", t.appendChild(e), qr = t.offsetWidth - e.offsetWidth, t.parentNode.removeChild(t), qr;
}
const Li = "ontouchend" in document ? "touchstart" : "mousedown";
function vf(t) {
  let e = !1;
  return function(...a) {
    e || (e = !0, requestAnimationFrame(() => {
      e = !1, t.apply(this, a);
    }));
  };
}
function Sn(t, e) {
  return { setup: t, name: t.name, props: e };
}
function En(t, e) {
  return new Proxy(t, {
    get(a, i) {
      const d = a[i];
      return d !== void 0 ? d : e[i];
    }
  });
}
const Fn = () => (t) => t, mf = (t, e) => {
  const r = {};
  for (const a in t)
    if (Object.prototype.hasOwnProperty.call(t, a)) {
      const i = sf(a);
      let d = t[a];
      e.indexOf(i) !== -1 && d === "" && (d = !0), r[i] = d;
    }
  return r;
};
function gf(t, {
  slots: e
}) {
  const r = En(t, {
    appendToBody: !0
  }), a = Pt(), i = _e(null), d = _e({
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
      height: u
    } = ff(i.value);
    d.value = hf(o, s, u, r.appendToBody);
  };
  Kt(n, {
    flush: "post"
  }), Kt((o) => {
    const s = r.getRelativeElement();
    if (!s)
      return;
    const u = Ha(s) || window, c = vf(n);
    u.addEventListener("scroll", c), window.addEventListener("resize", c), o(() => {
      u.removeEventListener("scroll", c), window.removeEventListener("resize", c);
    });
  }, {
    flush: "post"
  });
  const l = (o) => {
    if (!r.visible)
      return;
    const s = o.target, u = i.value, c = r.getRelativeElement();
    u && !u.contains(s) && c && !c.contains(s) && r.onClickOutside(o);
  };
  return Kt((o) => {
    document.addEventListener(Li, l), o(() => {
      document.removeEventListener(Li, l);
    });
  }), () => ie(Zl, {
    to: "body",
    disabled: !r.appendToBody
  }, {
    default: () => [ie(Pa, {
      name: `${a}-zoom-in-down`
    }, {
      default: () => {
        var o;
        return [r.visible && ie("div", {
          ref: i,
          class: `${a}-datepicker-main ${a}-datepicker-popup ${r.className}`,
          style: [gt({
            position: "absolute"
          }, d.value), r.style || {}]
        }, [(o = e.default) == null ? void 0 : o.call(e)])];
      }
    })]
  });
}
const yf = Fn()(["style", "className", "visible", "appendToBody", "onClickOutside", "getRelativeElement"]);
var bf = Sn(gf, yf);
const xf = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024",
  width: "1em",
  height: "1em"
}, Sf = /* @__PURE__ */ N("path", { d: "M940.218 107.055H730.764v-60.51H665.6v60.51H363.055v-60.51H297.89v60.51H83.78c-18.617 0-32.581 13.963-32.581 32.581v805.237c0 18.618 13.964 32.582 32.582 32.582h861.09c18.619 0 32.583-13.964 32.583-32.582V139.636c-4.655-18.618-18.619-32.581-37.237-32.581zm-642.327 65.163v60.51h65.164v-60.51h307.2v60.51h65.163v-60.51h176.873v204.8H116.364v-204.8H297.89zM116.364 912.291V442.18H912.29v470.11H116.364z" }, null, -1), Ef = [
  Sf
];
function qs(t, e) {
  return oe(), se("svg", xf, Ef);
}
const wf = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024",
  width: "1em",
  height: "1em"
}, Tf = /* @__PURE__ */ N("path", { d: "M810.005 274.005 572.011 512l237.994 237.995-60.01 60.01L512 572.011 274.005 810.005l-60.01-60.01L451.989 512 213.995 274.005l60.01-60.01L512 451.989l237.995-237.994z" }, null, -1), Af = [
  Tf
];
function Cf(t, e) {
  return oe(), se("svg", wf, Af);
}
const Of = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em"
}, Pf = /* @__PURE__ */ N("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}, null, -1), Rf = /* @__PURE__ */ N("path", { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }, null, -1), If = /* @__PURE__ */ N("path", { d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" }, null, -1), Df = [
  Pf,
  Rf,
  If
];
function Ff(t, e) {
  return oe(), se("svg", Of, Df);
}
function Bn(t, e = 0, r = 1, a = 0, i = 0, d = 0, n = 0) {
  const l = new Date(t, e, r, a, i, d, n);
  return t < 100 && t >= 0 && l.setFullYear(t), l;
}
function xn(t) {
  return t instanceof Date && !isNaN(t.getTime());
}
function Vn(t) {
  return Array.isArray(t) && t.length === 2 && t.every(xn) && t[0] <= t[1];
}
function Mf(t) {
  return Array.isArray(t) && t.every(xn);
}
function Vo(...t) {
  if (t[0] !== void 0 && t[0] !== null) {
    const r = new Date(t[0]);
    if (xn(r))
      return r;
  }
  const e = t.slice(1);
  return e.length ? Vo(...e) : /* @__PURE__ */ new Date();
}
function Lf(t) {
  const e = new Date(t);
  return e.setMonth(0, 1), e.setHours(0, 0, 0, 0), e;
}
function Ui(t) {
  const e = new Date(t);
  return e.setDate(1), e.setHours(0, 0, 0, 0), e;
}
function Rn(t) {
  const e = new Date(t);
  return e.setHours(0, 0, 0, 0), e;
}
function Uf({
  firstDayOfWeek: t,
  year: e,
  month: r
}) {
  const a = [], i = Bn(e, r, 0), d = i.getDate(), n = d - (i.getDay() + 7 - t) % 7;
  for (let u = n; u <= d; u++)
    a.push(Bn(e, r, u - d));
  i.setMonth(r + 1, 0);
  const l = i.getDate();
  for (let u = 1; u <= l; u++)
    a.push(Bn(e, r, u));
  const o = d - n + 1, s = 6 * 7 - o - l;
  for (let u = 1; u <= s; u++)
    a.push(Bn(e, r, l + u));
  return a;
}
function wo(t, e) {
  const r = new Date(t), a = typeof e == "function" ? e(r.getMonth()) : Number(e), i = r.getFullYear(), d = Bn(i, a + 1, 0).getDate(), n = r.getDate();
  return r.setMonth(a, Math.min(n, d)), r;
}
function tr(t, e) {
  const r = new Date(t), a = typeof e == "function" ? e(r.getFullYear()) : e;
  return r.setFullYear(a), r;
}
function Nf(t, e) {
  const r = new Date(e), a = new Date(t), i = r.getFullYear() - a.getFullYear(), d = r.getMonth() - a.getMonth();
  return i * 12 + d;
}
function To(t, e) {
  const r = new Date(t), a = new Date(e);
  return r.setHours(a.getHours(), a.getMinutes(), a.getSeconds()), r;
}
function jf(t, {
  slots: e
}) {
  const r = En(t, {
    editable: !0,
    disabled: !1,
    clearable: !0,
    range: !1,
    multiple: !1
  }), a = Pt(), i = _e(null), d = rn(() => r.separator || (r.range ? " ~ " : ",")), n = (p) => r.range ? Vn(p) : r.multiple ? Mf(p) : xn(p), l = (p) => Array.isArray(p) ? p.some((h) => r.disabledDate(h)) : r.disabledDate(p), o = rn(() => i.value !== null ? i.value : typeof r.renderInputText == "function" ? r.renderInputText(r.value) : n(r.value) ? Array.isArray(r.value) ? r.value.map((p) => r.formatDate(p)).join(d.value) : r.formatDate(r.value) : ""), s = (p) => {
    var h;
    p && p.stopPropagation(), r.onChange(r.range ? [null, null] : null), (h = r.onClear) == null || h.call(r);
  }, u = () => {
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
      let m = h.split(d.value);
      m.length !== 2 && (m = h.split(d.value.trim())), v = m.map((g) => r.parseDate(g.trim()));
    } else r.multiple ? v = h.split(d.value).map((m) => r.parseDate(m.trim())) : v = r.parseDate(h);
    n(v) && !l(v) ? r.onChange(v) : (p = r.onInputError) == null || p.call(r, h);
  }, c = (p) => {
    i.value = typeof p == "string" ? p : p.target.value;
  }, f = (p) => {
    const {
      keyCode: h
    } = p;
    h === 9 ? r.onBlur() : h === 13 && u();
  };
  return () => {
    var p, h, v;
    const m = !r.disabled && r.clearable && o.value, g = Xt(gt({
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
      onInput: c,
      onChange: u
    });
    return ie("div", {
      class: `${a}-input-wrapper`,
      onClick: r.onClick
    }, [((p = e.input) == null ? void 0 : p.call(e, g)) || ie("input", g, null), m ? ie("i", {
      class: `${a}-icon-clear`,
      onClick: s
    }, [((h = e["icon-clear"]) == null ? void 0 : h.call(e)) || ie(Cf, null, null)]) : null, ie("i", {
      class: `${a}-icon-calendar`
    }, [((v = e["icon-calendar"]) == null ? void 0 : v.call(e)) || ie(qs, null, null)])]);
  };
}
const za = Fn()(["placeholder", "editable", "disabled", "clearable", "inputClass", "inputAttr", "range", "multiple", "separator", "renderInputText", "onInputError", "onClear"]), kf = Fn()(["value", "formatDate", "parseDate", "disabledDate", "onChange", "onFocus", "onBlur", "onClick", ...za]);
var $f = Sn(jf, kf);
function Bf(t, {
  slots: e
}) {
  var r;
  const a = En(t, {
    prefixClass: "mx",
    valueType: "date",
    format: "YYYY-MM-DD",
    type: "date",
    disabledDate: () => !1,
    disabledTime: () => !1,
    confirmText: "OK"
  });
  uf(a.prefixClass), cf(((r = a.formatter) == null ? void 0 : r.getWeek) || Ua);
  const i = lf(Xl(t, "lang")), d = _e(), n = () => d.value, l = _e(!1), o = rn(() => !a.disabled && (typeof a.open == "boolean" ? a.open : l.value)), s = () => {
    var S, D;
    a.disabled || o.value || (l.value = !0, (S = a["onUpdate:open"]) == null || S.call(a, !0), (D = a.onOpen) == null || D.call(a));
  }, u = () => {
    var S, D;
    o.value && (l.value = !1, (S = a["onUpdate:open"]) == null || S.call(a, !1), (D = a.onClose) == null || D.call(a));
  }, c = (S, D) => (D = D || a.format, Cn(a.formatter) && typeof a.formatter.stringify == "function" ? a.formatter.stringify(S, D) : ja(S, D, {
    locale: i.value.formatLocale
  })), f = (S, D) => {
    if (D = D || a.format, Cn(a.formatter) && typeof a.formatter.parse == "function")
      return a.formatter.parse(S, D);
    const L = /* @__PURE__ */ new Date();
    return ef(S, D, {
      locale: i.value.formatLocale,
      backupDate: L
    });
  }, p = (S) => {
    switch (a.valueType) {
      case "date":
        return S instanceof Date ? new Date(S.getTime()) : /* @__PURE__ */ new Date(NaN);
      case "timestamp":
        return typeof S == "number" ? new Date(S) : /* @__PURE__ */ new Date(NaN);
      case "format":
        return typeof S == "string" ? f(S) : /* @__PURE__ */ new Date(NaN);
      default:
        return typeof S == "string" ? f(S, a.valueType) : /* @__PURE__ */ new Date(NaN);
    }
  }, h = (S) => {
    if (!xn(S))
      return null;
    switch (a.valueType) {
      case "date":
        return S;
      case "timestamp":
        return S.getTime();
      case "format":
        return c(S);
      default:
        return c(S, a.valueType);
    }
  }, v = rn(() => {
    const S = a.value;
    return a.range ? (Array.isArray(S) ? S.slice(0, 2) : [null, null]).map(p) : a.multiple ? (Array.isArray(S) ? S : []).map(p) : p(S);
  }), m = (S, D, L = !0) => {
    var U, j;
    const B = Array.isArray(S) ? S.map(h) : h(S);
    return (U = a["onUpdate:value"]) == null || U.call(a, B), (j = a.onChange) == null || j.call(a, B, D), L && u(), B;
  }, g = _e(/* @__PURE__ */ new Date());
  Kt(() => {
    o.value && (g.value = v.value);
  });
  const y = (S, D) => {
    a.confirm ? g.value = S : m(S, D, !a.multiple && (D === a.type || D === "time"));
  }, E = () => {
    var S;
    const D = m(g.value);
    (S = a.onConfirm) == null || S.call(a, D);
  }, w = (S) => a.disabledDate(S) || a.disabledTime(S), T = (S) => {
    var D;
    const {
      prefixClass: L
    } = a;
    return ie("div", {
      class: `${L}-datepicker-sidebar`
    }, [(D = e.sidebar) == null ? void 0 : D.call(e, S), (a.shortcuts || []).map((U, j) => ie("button", {
      key: j,
      "data-index": j,
      type: "button",
      class: `${L}-btn ${L}-btn-text ${L}-btn-shortcut`,
      onClick: () => {
        var B;
        const H = (B = U.onClick) == null ? void 0 : B.call(U);
        H && m(H);
      }
    }, [U.text]))]);
  };
  return () => {
    var S, D;
    const {
      prefixClass: L,
      disabled: U,
      confirm: j,
      range: B,
      popupClass: H,
      popupStyle: k,
      appendToBody: z
    } = a, Y = {
      value: g.value,
      "onUpdate:value": y,
      emit: m
    }, W = e.header && ie("div", {
      class: `${L}-datepicker-header`
    }, [e.header(Y)]), re = (e.footer || j) && ie("div", {
      class: `${L}-datepicker-footer`
    }, [(S = e.footer) == null ? void 0 : S.call(e, Y), j && ie("button", {
      type: "button",
      class: `${L}-btn ${L}-datepicker-btn-confirm`,
      onClick: E
    }, [a.confirmText])]), X = (D = e.content) == null ? void 0 : D.call(e, Y), he = (e.sidebar || a.shortcuts) && T(Y);
    return ie("div", {
      ref: d,
      class: {
        [`${L}-datepicker`]: !0,
        [`${L}-datepicker-range`]: B,
        disabled: U
      }
    }, [ie($f, Xt(gt({}, gn(a, za)), {
      value: v.value,
      formatDate: c,
      parseDate: f,
      disabledDate: w,
      onChange: m,
      onClick: s,
      onFocus: s,
      onBlur: u
    }), gn(e, ["icon-calendar", "icon-clear", "input"])), ie(bf, {
      className: H,
      style: k,
      visible: o.value,
      appendToBody: z,
      getRelativeElement: n,
      onClickOutside: u
    }, {
      default: () => [he, ie("div", {
        class: `${L}-datepicker-content`
      }, [W, X, re])]
    })]);
  };
}
const Vf = Fn()(["value", "valueType", "type", "format", "formatter", "lang", "prefixClass", "appendToBody", "open", "popupClass", "popupStyle", "confirm", "confirmText", "shortcuts", "disabledDate", "disabledTime", "onOpen", "onClose", "onConfirm", "onChange", "onUpdate:open", "onUpdate:value"]), Hf = [...Vf, ...za];
var Ni = Sn(Bf, Hf);
function _r(t) {
  var e = t, {
    value: r
  } = e, a = of(e, [
    "value"
  ]);
  const i = Pt();
  return ie("button", Xt(gt({}, a), {
    type: "button",
    class: `${i}-btn ${i}-btn-text ${i}-btn-icon-${r}`
  }), [ie("i", {
    class: `${i}-icon-${r}`
  }, null)]);
}
function Ga({
  type: t,
  calendar: e,
  onUpdateCalendar: r
}, {
  slots: a
}) {
  var i;
  const d = Pt(), n = () => {
    r(wo(e, (f) => f - 1));
  }, l = () => {
    r(wo(e, (f) => f + 1));
  }, o = () => {
    r(tr(e, (f) => f - 1));
  }, s = () => {
    r(tr(e, (f) => f + 1));
  }, u = () => {
    r(tr(e, (f) => f - 10));
  }, c = () => {
    r(tr(e, (f) => f + 10));
  };
  return ie("div", {
    class: `${d}-calendar-header`
  }, [ie(_r, {
    value: "double-left",
    onClick: t === "year" ? u : o
  }, null), t === "date" && ie(_r, {
    value: "left",
    onClick: n
  }, null), ie(_r, {
    value: "double-right",
    onClick: t === "year" ? c : s
  }, null), t === "date" && ie(_r, {
    value: "right",
    onClick: l
  }, null), ie("span", {
    class: `${d}-calendar-header-label`
  }, [(i = a.default) == null ? void 0 : i.call(a)])]);
}
function zf({
  calendar: t,
  isWeekMode: e,
  showWeekNumber: r,
  titleFormat: a,
  getWeekActive: i,
  getCellClasses: d,
  onSelect: n,
  onUpdatePanel: l,
  onUpdateCalendar: o,
  onDateMouseEnter: s,
  onDateMouseLeave: u
}) {
  const c = Pt(), f = df(), p = Va().value, {
    yearFormat: h,
    monthBeforeYear: v,
    monthFormat: m = "MMM",
    formatLocale: g
  } = p, y = g.firstDayOfWeek || 0;
  let E = p.days || g.weekdaysMin;
  E = E.concat(E).slice(y, y + 7);
  const w = t.getFullYear(), T = t.getMonth(), S = Ba(Uf({
    firstDayOfWeek: y,
    year: w,
    month: T
  }), 7), D = (Y, W) => ja(Y, W, {
    locale: p.formatLocale
  }), L = (Y) => {
    l(Y);
  }, U = (Y) => {
    const W = Y.getAttribute("data-index"), [re, X] = W.split(",").map((fe) => parseInt(fe, 10)), he = S[re][X];
    return new Date(he);
  }, j = (Y) => {
    n(U(Y.currentTarget));
  }, B = (Y) => {
    s && s(U(Y.currentTarget));
  }, H = (Y) => {
    u && u(U(Y.currentTarget));
  }, k = ie("button", {
    type: "button",
    class: `${c}-btn ${c}-btn-text ${c}-btn-current-year`,
    onClick: () => L("year")
  }, [D(t, h)]), z = ie("button", {
    type: "button",
    class: `${c}-btn ${c}-btn-text ${c}-btn-current-month`,
    onClick: () => L("month")
  }, [D(t, m)]);
  return r = typeof r == "boolean" ? r : e, ie("div", {
    class: [`${c}-calendar ${c}-calendar-panel-date`, {
      [`${c}-calendar-week-mode`]: e
    }]
  }, [ie(Ga, {
    type: "date",
    calendar: t,
    onUpdateCalendar: o
  }, {
    default: () => [v ? [z, k] : [k, z]]
  }), ie("div", {
    class: `${c}-calendar-content`
  }, [ie("table", {
    class: `${c}-table ${c}-table-date`
  }, [ie("thead", null, [ie("tr", null, [r && ie("th", {
    class: `${c}-week-number-header`
  }, null), E.map((Y) => ie("th", {
    key: Y
  }, [Y]))])]), ie("tbody", null, [S.map((Y, W) => ie("tr", {
    key: W,
    class: [`${c}-date-row`, {
      [`${c}-active-week`]: i(Y)
    }]
  }, [r && ie("td", {
    class: `${c}-week-number`,
    "data-index": `${W},0`,
    onClick: j
  }, [ie("div", null, [f(Y[0])])]), Y.map((re, X) => ie("td", {
    key: X,
    class: ["cell", d(re)],
    title: D(re, a),
    "data-index": `${W},${X}`,
    onClick: j,
    onMouseenter: B,
    onMouseleave: H
  }, [ie("div", null, [re.getDate()])]))]))])])])]);
}
function Gf({
  calendar: t,
  getCellClasses: e,
  onSelect: r,
  onUpdateCalendar: a,
  onUpdatePanel: i
}) {
  const d = Pt(), n = Va().value, l = n.months || n.formatLocale.monthsShort, o = (u) => Bn(t.getFullYear(), u), s = (u) => {
    const f = u.currentTarget.getAttribute("data-month");
    r(o(parseInt(f, 10)));
  };
  return ie("div", {
    class: `${d}-calendar ${d}-calendar-panel-month`
  }, [ie(Ga, {
    type: "month",
    calendar: t,
    onUpdateCalendar: a
  }, {
    default: () => [ie("button", {
      type: "button",
      class: `${d}-btn ${d}-btn-text ${d}-btn-current-year`,
      onClick: () => i("year")
    }, [t.getFullYear()])]
  }), ie("div", {
    class: `${d}-calendar-content`
  }, [ie("table", {
    class: `${d}-table ${d}-table-month`
  }, [Ba(l, 3).map((u, c) => ie("tr", {
    key: c
  }, [u.map((f, p) => {
    const h = c * 3 + p;
    return ie("td", {
      key: p,
      class: ["cell", e(o(h))],
      "data-month": h,
      onClick: s
    }, [ie("div", null, [f])]);
  })]))])])]);
}
const Wf = (t) => {
  const e = Math.floor(t.getFullYear() / 10) * 10, r = [];
  for (let a = 0; a < 10; a++)
    r.push(e + a);
  return Ba(r, 2);
};
function Yf({
  calendar: t,
  getCellClasses: e = () => [],
  getYearPanel: r = Wf,
  onSelect: a,
  onUpdateCalendar: i
}) {
  const d = Pt(), n = (c) => Bn(c, 0), l = (c) => {
    const p = c.currentTarget.getAttribute("data-year");
    a(n(parseInt(p, 10)));
  }, o = r(new Date(t)), s = o[0][0], u = Mi(Mi(o));
  return ie("div", {
    class: `${d}-calendar ${d}-calendar-panel-year`
  }, [ie(Ga, {
    type: "year",
    calendar: t,
    onUpdateCalendar: i
  }, {
    default: () => [ie("span", null, [s]), ie("span", {
      class: `${d}-calendar-decade-separator`
    }, null), ie("span", null, [u])]
  }), ie("div", {
    class: `${d}-calendar-content`
  }, [ie("table", {
    class: `${d}-table ${d}-table-year`
  }, [o.map((c, f) => ie("tr", {
    key: f
  }, [c.map((p, h) => ie("td", {
    key: h,
    class: ["cell", e(n(p))],
    "data-year": p,
    onClick: l
  }, [ie("div", null, [p])]))]))])])]);
}
function Kf(t) {
  const e = En(t, {
    defaultValue: Rn(/* @__PURE__ */ new Date()),
    type: "date",
    disabledDate: () => !1,
    getClasses: () => [],
    titleFormat: "YYYY-MM-DD"
  }), r = rn(() => (Array.isArray(e.value) ? e.value : [e.value]).filter(xn).map((y) => e.type === "year" ? Lf(y) : e.type === "month" ? Ui(y) : Rn(y))), a = _e(/* @__PURE__ */ new Date());
  Kt(() => {
    let g = e.calendar;
    if (!xn(g)) {
      const {
        length: y
      } = r.value;
      g = Vo(y > 0 ? r.value[y - 1] : e.defaultValue);
    }
    a.value = Ui(g);
  });
  const i = (g) => {
    var y;
    a.value = g, (y = e.onCalendarChange) == null || y.call(e, g);
  }, d = _e("date");
  Kt(() => {
    const g = ["date", "month", "year"], y = Math.max(g.indexOf(e.type), g.indexOf(e.defaultPanel));
    d.value = y !== -1 ? g[y] : "date";
  });
  const n = (g) => {
    var y;
    const E = d.value;
    d.value = g, (y = e.onPanelChange) == null || y.call(e, g, E);
  }, l = (g) => e.disabledDate(new Date(g), r.value), o = (g, y) => {
    var E, w, T;
    if (!l(g))
      if ((E = e.onPick) == null || E.call(e, g), e.multiple === !0) {
        const S = r.value.filter((D) => D.getTime() !== g.getTime());
        S.length === r.value.length && S.push(g), (w = e["onUpdate:value"]) == null || w.call(e, S, y);
      } else
        (T = e["onUpdate:value"]) == null || T.call(e, g, y);
  }, s = (g) => {
    o(g, e.type === "week" ? "week" : "date");
  }, u = (g) => {
    if (e.type === "year")
      o(g, "year");
    else if (i(g), n("month"), e.partialUpdate && r.value.length === 1) {
      const y = tr(r.value[0], g.getFullYear());
      o(y, "year");
    }
  }, c = (g) => {
    if (e.type === "month")
      o(g, "month");
    else if (i(g), n("date"), e.partialUpdate && r.value.length === 1) {
      const y = wo(tr(r.value[0], g.getFullYear()), g.getMonth());
      o(y, "month");
    }
  }, f = (g, y = []) => (l(g) ? y.push("disabled") : r.value.some((E) => E.getTime() === g.getTime()) && y.push("active"), y.concat(e.getClasses(g, r.value, y.join(" ")))), p = (g) => {
    const y = g.getMonth() !== a.value.getMonth(), E = [];
    return g.getTime() === (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0) && E.push("today"), y && E.push("not-current-month"), f(g, E);
  }, h = (g) => e.type !== "month" ? a.value.getMonth() === g.getMonth() ? "active" : "" : f(g), v = (g) => e.type !== "year" ? a.value.getFullYear() === g.getFullYear() ? "active" : "" : f(g), m = (g) => {
    if (e.type !== "week")
      return !1;
    const y = g[0].getTime(), E = g[6].getTime();
    return r.value.some((w) => {
      const T = w.getTime();
      return T >= y && T <= E;
    });
  };
  return () => d.value === "year" ? ie(Yf, {
    calendar: a.value,
    getCellClasses: v,
    getYearPanel: e.getYearPanel,
    onSelect: u,
    onUpdateCalendar: i
  }, null) : d.value === "month" ? ie(Gf, {
    calendar: a.value,
    getCellClasses: h,
    onSelect: c,
    onUpdatePanel: n,
    onUpdateCalendar: i
  }, null) : ie(zf, {
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
const Ho = Fn()(["type", "value", "defaultValue", "defaultPanel", "disabledDate", "getClasses", "calendar", "multiple", "partialUpdate", "showWeekNumber", "titleFormat", "getYearPanel", "onDateMouseEnter", "onDateMouseLeave", "onCalendarChange", "onPanelChange", "onUpdate:value", "onPick"]);
var zo = Sn(Kf, Ho);
const ji = (t, e) => {
  const r = t.getTime();
  let [a, i] = e.map((d) => d.getTime());
  return a > i && ([a, i] = [i, a]), r > a && r < i;
};
function Xf(t) {
  const e = En(t, {
    defaultValue: /* @__PURE__ */ new Date(),
    type: "date"
  }), r = Pt(), a = rn(() => {
    let m = Array.isArray(e.defaultValue) ? e.defaultValue : [e.defaultValue, e.defaultValue];
    return m = m.map((g) => Rn(g)), Vn(m) ? m : [/* @__PURE__ */ new Date(), /* @__PURE__ */ new Date()].map((g) => Rn(g));
  }), i = _e([/* @__PURE__ */ new Date(NaN), /* @__PURE__ */ new Date(NaN)]);
  Kt(() => {
    Vn(e.value) && (i.value = e.value);
  });
  const d = (m, g) => {
    var y;
    const [E, w] = i.value;
    xn(E) && !xn(w) ? (E.getTime() > m.getTime() ? i.value = [m, E] : i.value = [E, m], (y = e["onUpdate:value"]) == null || y.call(e, i.value, g)) : i.value = [m, /* @__PURE__ */ new Date(NaN)];
  }, n = _e([/* @__PURE__ */ new Date(), /* @__PURE__ */ new Date()]), l = rn(() => Vn(e.calendar) ? e.calendar : n.value), o = rn(() => e.type === "year" ? 10 * 12 : e.type === "month" ? 1 * 12 : 1), s = (m, g) => {
    var y;
    const E = Nf(m[0], m[1]), w = o.value - E;
    if (w > 0) {
      const T = g === 1 ? 0 : 1;
      m[T] = wo(m[T], (S) => S + (T === 0 ? -w : w));
    }
    n.value = m, (y = e.onCalendarChange) == null || y.call(e, m, g);
  }, u = (m) => {
    s([m, l.value[1]], 0);
  }, c = (m) => {
    s([l.value[0], m], 1);
  };
  Kt(() => {
    const m = Vn(e.value) ? e.value : a.value;
    s(m.slice(0, 2));
  });
  const f = _e(null), p = (m) => f.value = m, h = () => f.value = null, v = (m, g, y) => {
    const E = e.getClasses ? e.getClasses(m, g, y) : [], w = Array.isArray(E) ? E : [E];
    return /disabled|active/.test(y) ? w : (g.length === 2 && ji(m, g) && w.push("in-range"), g.length === 1 && f.value && ji(m, [g[0], f.value]) ? w.concat("hover-in-range") : w);
  };
  return () => {
    const m = l.value.map((g, y) => {
      const E = Xt(gt({}, e), {
        calendar: g,
        value: i.value,
        defaultValue: a.value[y],
        getClasses: v,
        partialUpdate: !1,
        multiple: !1,
        "onUpdate:value": d,
        onCalendarChange: y === 0 ? u : c,
        onDateMouseLeave: h,
        onDateMouseEnter: p
      });
      return ie(zo, E, null);
    });
    return ie("div", {
      class: `${r}-calendar-range`
    }, [m]);
  };
}
const Wa = Ho;
var Ya = Sn(Xf, Wa);
const _s = Yl({
  setup(t, {
    slots: e
  }) {
    const r = Pt(), a = _e(), i = _e(""), d = _e("");
    mo(() => {
      if (!a.value)
        return;
      const h = a.value, v = h.clientHeight * 100 / h.scrollHeight;
      i.value = v < 100 ? `${v}%` : "";
    });
    const l = pf(), o = (h) => {
      const v = h.currentTarget, {
        scrollHeight: m,
        scrollTop: g
      } = v;
      d.value = `${g * 100 / m}%`;
    };
    let s = !1, u = 0;
    const c = (h) => {
      h.stopImmediatePropagation();
      const v = h.currentTarget, {
        offsetTop: m
      } = v;
      s = !0, u = h.clientY - m;
    }, f = (h) => {
      if (!s || !a.value)
        return;
      const {
        clientY: v
      } = h, {
        scrollHeight: m,
        clientHeight: g
      } = a.value, E = (v - u) * m / g;
      a.value.scrollTop = E;
    }, p = () => {
      s = !1;
    };
    return mo(() => {
      document.addEventListener("mousemove", f), document.addEventListener("mouseup", p);
    }), Kl(() => {
      document.addEventListener("mousemove", f), document.addEventListener("mouseup", p);
    }), () => {
      var h;
      return ie("div", {
        class: `${r}-scrollbar`,
        style: {
          position: "relative",
          overflow: "hidden"
        }
      }, [ie("div", {
        ref: a,
        class: `${r}-scrollbar-wrap`,
        style: {
          marginRight: `-${l}px`
        },
        onScroll: o
      }, [(h = e.default) == null ? void 0 : h.call(e)]), ie("div", {
        class: `${r}-scrollbar-track`
      }, [ie("div", {
        class: `${r}-scrollbar-thumb`,
        style: {
          height: i.value,
          top: d.value
        },
        onMousedown: c
      }, null)])]);
    };
  }
});
function Jf({
  options: t,
  getClasses: e,
  onSelect: r
}) {
  const a = Pt(), i = (d) => {
    const n = d.target, l = d.currentTarget;
    if (n.tagName.toUpperCase() !== "LI")
      return;
    const o = l.getAttribute("data-type"), s = parseInt(l.getAttribute("data-index"), 10), u = parseInt(n.getAttribute("data-index"), 10), c = t[s].list[u].value;
    r(c, o);
  };
  return ie("div", {
    class: `${a}-time-columns`
  }, [t.map((d, n) => ie(_s, {
    key: d.type,
    class: `${a}-time-column`
  }, {
    default: () => [ie("ul", {
      class: `${a}-time-list`,
      "data-index": n,
      "data-type": d.type,
      onClick: i
    }, [d.list.map((l, o) => ie("li", {
      key: l.text,
      "data-index": o,
      class: [`${a}-time-item`, e(l.value, d.type)]
    }, [l.text]))])]
  }))]);
}
function Qf(t) {
  return typeof t == "function" || Object.prototype.toString.call(t) === "[object Object]" && !Ql(t);
}
function Zf(t) {
  let e;
  const r = Pt();
  return ie(_s, null, Qf(e = t.options.map((a) => ie("div", {
    key: a.text,
    class: [`${r}-time-option`, t.getClasses(a.value, "time")],
    onClick: () => t.onSelect(a.value, "time")
  }, [a.text]))) ? e : {
    default: () => [e]
  });
}
function ea({
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
function qf(t, e) {
  let { showHour: r, showMinute: a, showSecond: i, use12h: d } = e;
  const n = e.format || "HH:mm:ss";
  r = typeof r == "boolean" ? r : /[HhKk]/.test(n), a = typeof a == "boolean" ? a : /m/.test(n), i = typeof i == "boolean" ? i : /s/.test(n), d = typeof d == "boolean" ? d : /a/i.test(n);
  const l = [], o = d && t.getHours() >= 12;
  return r && l.push({
    type: "hour",
    list: ea({
      length: d ? 12 : 24,
      step: e.hourStep,
      options: e.hourOptions
    }).map((s) => {
      const u = s === 0 && d ? "12" : _o(s), c = new Date(t);
      return c.setHours(o ? s + 12 : s), { value: c, text: u };
    })
  }), a && l.push({
    type: "minute",
    list: ea({
      length: 60,
      step: e.minuteStep,
      options: e.minuteOptions
    }).map((s) => {
      const u = new Date(t);
      return u.setMinutes(s), { value: u, text: _o(s) };
    })
  }), i && l.push({
    type: "second",
    list: ea({
      length: 60,
      step: e.secondStep,
      options: e.secondOptions
    }).map((s) => {
      const u = new Date(t);
      return u.setSeconds(s), { value: u, text: _o(s) };
    })
  }), d && l.push({
    type: "ampm",
    list: ["AM", "PM"].map((s, u) => {
      const c = new Date(t);
      return c.setHours(c.getHours() % 12 + u * 12), { text: s, value: c };
    })
  }), l;
}
function ta(t = "") {
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
function _f({
  date: t,
  option: e,
  format: r,
  formatDate: a
}) {
  const i = [];
  if (typeof e == "function")
    return e() || [];
  const d = ta(e.start), n = ta(e.end), l = ta(e.step), o = e.format || r;
  if (d && n && l) {
    const s = d.minutes + d.hours * 60, u = n.minutes + n.hours * 60, c = l.minutes + l.hours * 60, f = Math.floor((u - s) / c);
    for (let p = 0; p <= f; p++) {
      const h = s + p * c, v = Math.floor(h / 60), m = h % 60, g = new Date(t);
      g.setHours(v, m, 0), i.push({
        value: g,
        text: a(g, o)
      });
    }
  }
  return i;
}
const el = (t, e, r = 0) => {
  if (r <= 0) {
    requestAnimationFrame(() => {
      t.scrollTop = e;
    });
    return;
  }
  const i = (e - t.scrollTop) / r * 10;
  requestAnimationFrame(() => {
    const d = t.scrollTop + i;
    if (d >= e) {
      t.scrollTop = e;
      return;
    }
    t.scrollTop = d, el(t, e, r - 10);
  });
};
function eh(t) {
  const e = En(t, {
    defaultValue: Rn(/* @__PURE__ */ new Date()),
    format: "HH:mm:ss",
    timeTitleFormat: "YYYY-MM-DD",
    disabledTime: () => !1,
    scrollDuration: 100
  }), r = Pt(), a = Va(), i = (v, m) => ja(v, m, {
    locale: a.value.formatLocale
  }), d = _e(/* @__PURE__ */ new Date());
  Kt(() => {
    d.value = Vo(e.value, e.defaultValue);
  });
  const n = (v) => Array.isArray(v) ? v.every((m) => e.disabledTime(new Date(m))) : e.disabledTime(new Date(v)), l = (v) => {
    const m = new Date(v);
    return n([m.getTime(), m.setMinutes(0, 0, 0), m.setMinutes(59, 59, 999)]);
  }, o = (v) => {
    const m = new Date(v);
    return n([m.getTime(), m.setSeconds(0, 0), m.setSeconds(59, 999)]);
  }, s = (v) => {
    const m = new Date(v), g = m.getHours() < 12 ? 0 : 12, y = g + 11;
    return n([m.getTime(), m.setHours(g, 0, 0, 0), m.setHours(y, 59, 59, 999)]);
  }, u = (v, m) => m === "hour" ? l(v) : m === "minute" ? o(v) : m === "ampm" ? s(v) : n(v), c = (v, m) => {
    var g;
    if (!u(v, m)) {
      const y = new Date(v);
      d.value = y, n(y) || (g = e["onUpdate:value"]) == null || g.call(e, y, m);
    }
  }, f = (v, m) => u(v, m) ? "disabled" : v.getTime() === d.value.getTime() ? "active" : "", p = _e(), h = (v) => {
    if (!p.value)
      return;
    const m = p.value.querySelectorAll(".active");
    for (let g = 0; g < m.length; g++) {
      const y = m[g], E = Ha(y, p.value);
      if (E) {
        const w = y.offsetTop;
        el(E, w, v);
      }
    }
  };
  return mo(() => h(0)), Oa(d, () => h(e.scrollDuration), {
    flush: "post"
  }), () => {
    let v;
    return e.timePickerOptions ? v = ie(Zf, {
      onSelect: c,
      getClasses: f,
      options: _f({
        date: d.value,
        format: e.format,
        option: e.timePickerOptions,
        formatDate: i
      })
    }, null) : v = ie(Jf, {
      options: qf(d.value, e),
      onSelect: c,
      getClasses: f
    }, null), ie("div", {
      class: `${r}-time`,
      ref: p
    }, [e.showTimeHeader && ie("div", {
      class: `${r}-time-header`
    }, [ie("button", {
      type: "button",
      class: `${r}-btn ${r}-btn-text ${r}-time-header-title`,
      onClick: e.onClickTitle
    }, [i(d.value, e.timeTitleFormat)])]), ie("div", {
      class: `${r}-time-content`
    }, [v])]);
  };
}
const Go = Fn()(["value", "defaultValue", "format", "timeTitleFormat", "showTimeHeader", "disabledTime", "timePickerOptions", "hourOptions", "minuteOptions", "secondOptions", "hourStep", "minuteStep", "secondStep", "showHour", "showMinute", "showSecond", "use12h", "scrollDuration", "onClickTitle", "onUpdate:value"]);
var Rr = Sn(eh, Go);
function th(t) {
  const e = En(t, {
    defaultValue: Rn(/* @__PURE__ */ new Date()),
    disabledTime: () => !1
  }), r = Pt(), a = _e([/* @__PURE__ */ new Date(NaN), /* @__PURE__ */ new Date(NaN)]);
  Kt(() => {
    Vn(e.value) ? a.value = e.value : a.value = [/* @__PURE__ */ new Date(NaN), /* @__PURE__ */ new Date(NaN)];
  });
  const i = (s, u) => {
    var c;
    (c = e["onUpdate:value"]) == null || c.call(e, a.value, s === "time" ? "time-range" : s, u);
  }, d = (s, u) => {
    a.value[0] = s, a.value[1].getTime() >= s.getTime() || (a.value[1] = s), i(u, 0);
  }, n = (s, u) => {
    a.value[1] = s, a.value[0].getTime() <= s.getTime() || (a.value[0] = s), i(u, 1);
  }, l = (s) => e.disabledTime(s, 0), o = (s) => s.getTime() < a.value[0].getTime() || e.disabledTime(s, 1);
  return () => {
    const s = Array.isArray(e.defaultValue) ? e.defaultValue : [e.defaultValue, e.defaultValue];
    return ie("div", {
      class: `${r}-time-range`
    }, [ie(Rr, Xt(gt({}, e), {
      "onUpdate:value": d,
      value: a.value[0],
      defaultValue: s[0],
      disabledTime: l
    }), null), ie(Rr, Xt(gt({}, e), {
      "onUpdate:value": n,
      value: a.value[1],
      defaultValue: s[1],
      disabledTime: o
    }), null)]);
  };
}
const Ka = Go;
var Xa = Sn(th, Ka);
function tl(t) {
  const e = _e(!1), r = () => {
    var d;
    e.value = !1, (d = t.onShowTimePanelChange) == null || d.call(t, !1);
  }, a = () => {
    var d;
    e.value = !0, (d = t.onShowTimePanelChange) == null || d.call(t, !0);
  };
  return { timeVisible: rn(() => typeof t.showTimePanel == "boolean" ? t.showTimePanel : e.value), openTimePanel: a, closeTimePanel: r };
}
function nh(t) {
  const e = En(t, {
    disabledTime: () => !1,
    defaultValue: Rn(/* @__PURE__ */ new Date())
  }), r = _e(e.value);
  Kt(() => {
    r.value = e.value;
  });
  const {
    openTimePanel: a,
    closeTimePanel: i,
    timeVisible: d
  } = tl(e), n = (l, o) => {
    var s;
    o === "date" && a();
    let u = To(l, Vo(e.value, e.defaultValue));
    if (e.disabledTime(new Date(u)) && (u = To(l, e.defaultValue), e.disabledTime(new Date(u)))) {
      r.value = u;
      return;
    }
    (s = e["onUpdate:value"]) == null || s.call(e, u, o);
  };
  return () => {
    const l = Pt(), o = Xt(gt({}, gn(e, Ho)), {
      multiple: !1,
      type: "date",
      value: r.value,
      "onUpdate:value": n
    }), s = Xt(gt({}, gn(e, Go)), {
      showTimeHeader: !0,
      value: r.value,
      "onUpdate:value": e["onUpdate:value"],
      onClickTitle: i
    });
    return ie("div", {
      class: `${l}-date-time`
    }, [ie(zo, o, null), d.value && ie(Rr, s, null)]);
  };
}
const nl = Fn()(["showTimePanel", "onShowTimePanelChange"]), rh = [...nl, ...Ho, ...Go];
var rl = Sn(nh, rh);
function oh(t) {
  const e = En(t, {
    defaultValue: Rn(/* @__PURE__ */ new Date()),
    disabledTime: () => !1
  }), r = _e(e.value);
  Kt(() => {
    r.value = e.value;
  });
  const {
    openTimePanel: a,
    closeTimePanel: i,
    timeVisible: d
  } = tl(e), n = (l, o) => {
    var s;
    o === "date" && a();
    const u = Array.isArray(e.defaultValue) ? e.defaultValue : [e.defaultValue, e.defaultValue];
    let c = l.map((f, p) => {
      const h = Vn(e.value) ? e.value[p] : u[p];
      return To(f, h);
    });
    if (c[1].getTime() < c[0].getTime() && (c = [c[0], c[0]]), c.some(e.disabledTime) && (c = l.map((f, p) => To(f, u[p])), c.some(e.disabledTime))) {
      r.value = c;
      return;
    }
    (s = e["onUpdate:value"]) == null || s.call(e, c, o);
  };
  return () => {
    const l = Pt(), o = Xt(gt({}, gn(e, Wa)), {
      type: "date",
      value: r.value,
      "onUpdate:value": n
    }), s = Xt(gt({}, gn(e, Ka)), {
      showTimeHeader: !0,
      value: r.value,
      "onUpdate:value": e["onUpdate:value"],
      onClickTitle: i
    });
    return ie("div", {
      class: `${l}-date-time-range`
    }, [ie(Ya, o, null), d.value && ie(Xa, s, null)]);
  };
}
const ah = [...nl, ...Ka, ...Wa];
var ol = Sn(oh, ah);
const ih = Fn()(["range", "open", "appendToBody", "clearable", "confirm", "disabled", "editable", "multiple", "partialUpdate", "showHour", "showMinute", "showSecond", "showTimeHeader", "showTimePanel", "showWeekNumber", "use12h"]), ki = {
  date: "YYYY-MM-DD",
  datetime: "YYYY-MM-DD HH:mm:ss",
  year: "YYYY",
  month: "YYYY-MM",
  time: "HH:mm:ss",
  week: "w"
};
function al(t, {
  slots: e
}) {
  const r = t.type || "date", a = t.format || ki[r] || ki.date, i = Xt(gt({}, mf(t, ih)), {
    type: r,
    format: a
  });
  return ie(Ni, gn(i, Ni.props), gt({
    content: (d) => {
      if (i.range) {
        const n = r === "time" ? Xa : r === "datetime" ? ol : Ya;
        return ci(n, gn(gt(gt({}, i), d), n.props));
      } else {
        const n = r === "time" ? Rr : r === "datetime" ? rl : zo;
        return ci(n, gn(gt(gt({}, i), d), n.props));
      }
    },
    "icon-calendar": () => r === "time" ? ie(Ff, null, null) : ie(qs, null, null)
  }, e));
}
const sh = {
  locale: Ks,
  install: (t) => {
    t.component("DatePicker", al);
  }
};
var lh = Object.assign(al, sh, {
  Calendar: zo,
  CalendarRange: Ya,
  TimePanel: Rr,
  TimeRange: Xa,
  DateTime: rl,
  DateTimeRange: ol
});
const uh = {
  name: "VDatepicker",
  components: { DatePicker: lh },
  mixins: [fn],
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
    },
    modelValue: {
      handler: function(e) {
        this.date = nn(e);
      },
      deep: !0
    }
  }
}, ch = ["name", "id", "value"], dh = ["textContent"], fh = {
  key: 2,
  class: "inline-block text-sm text-gray-600 mt-1.5 brand-200"
};
function hh(t, e, r, a, i, d) {
  var l, o;
  const n = ln("date-picker");
  return oe(), se("div", {
    class: et(["v-datepicker", (l = r.field) == null ? void 0 : l.class])
  }, [
    N("input", {
      type: "hidden",
      name: r.name,
      id: r.name,
      value: i.date
    }, null, 8, ch),
    t.editable ? (oe(), un(n, {
      key: 0,
      value: i.date,
      "onUpdate:value": e[0] || (e[0] = (s) => i.date = s),
      format: "DD/MM/YYYY",
      "value-type": "format",
      type: "date",
      class: "!w-full h-[40px]",
      placeholder: r.placeholder
    }, null, 8, ["value", "placeholder"])) : (oe(), se("p", {
      key: 1,
      textContent: We(r.modelValue)
    }, null, 8, dh)),
    (o = r.field) != null && o.hint ? (oe(), se("p", fh, We(r.field.hint), 1)) : je("", !0)
  ], 2);
}
const il = /* @__PURE__ */ mt(uh, [["render", hh]]), ph = {
  name: "Input",
  mixins: [fn],
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
}, vh = { class: "flex flex-row-reverse gap-2 items-center justify-end" }, mh = { class: "inline-block text-base text-gray-700" }, gh = ["name", "type", "disabled"], yh = ["textContent"], bh = {
  key: 0,
  class: "inline-block text-sm text-gray-600 mt-1.5 pl-[28px]"
};
function xh(t, e, r, a, i, d) {
  var n;
  return oe(), se("div", null, [
    N("div", vh, [
      N("span", mh, We(r.field.label), 1),
      N("div", null, [
        t.editable ? nt((oe(), se("input", {
          key: 0,
          name: r.name,
          type: r.type,
          "onUpdate:modelValue": e[0] || (e[0] = (l) => i.input = l),
          disabled: !t.editable,
          class: "h-5 w-5 text-brand-700 border-gray-300 rounded focus:ring-brand-700 focus:ring-2"
        }, null, 8, gh)), [
          [Aa, i.input]
        ]) : (oe(), se("p", {
          key: 1,
          textContent: We(r.modelValue)
        }, null, 8, yh))
      ])
    ]),
    (n = r.field) != null && n.hint ? (oe(), se("p", bh, We(r.field.hint), 1)) : je("", !0)
  ]);
}
const sl = /* @__PURE__ */ mt(ph, [["render", xh]]), Sh = {
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
}, Eh = ["for"], wh = {
  key: 0,
  class: "v-field-label inline-block mb-2"
}, Th = ["innerHTML"], Ah = { key: 0 };
function Ch(t, e, r, a, i, d) {
  return oe(), se("label", {
    for: r.field,
    class: "block space-y-2xsSpace text-sm font-medium leading-none text-tertiary-700"
  }, [
    r.labelText || t.$slots.label ? (oe(), se("span", wh, [
      t.$slots.label ? bn(t.$slots, "label", { key: 0 }) : (oe(), se(Ot, { key: 1 }, [
        N("span", { innerHTML: r.labelText }, null, 8, Th),
        r.isRequired ? (oe(), se("span", Ah, " *")) : je("", !0)
      ], 64))
    ])) : je("", !0),
    bn(t.$slots, "default")
  ], 8, Eh);
}
const Oh = /* @__PURE__ */ mt(Sh, [["render", Ch]]), Ph = {
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
}, Rh = { class: "flex items-center gap-2" }, Ih = ["aria-checked"], Dh = {
  key: 0,
  class: "text-sm text-gray-700 font-medium"
};
function Fh(t, e, r, a, i, d) {
  return oe(), se("div", Rh, [
    N("button", {
      type: "button",
      class: et(["relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-300 transition-colors duration-200 ease-in-out", d.classes]),
      role: "switch",
      "aria-checked": r.modelValue,
      onClick: e[0] || (e[0] = (...n) => d.toggle && d.toggle(...n))
    }, [
      N("span", {
        "aria-hidden": "true",
        class: et(["pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out", {
          "translate-x-5": r.modelValue,
          "translate-x-0": !r.modelValue,
          "!translate-x-3": r.small && r.modelValue,
          "!h-2 !w-2": r.small
        }])
      }, null, 2)
    ], 10, Ih),
    r.title ? (oe(), se("span", Dh, We(r.title), 1)) : je("", !0)
  ]);
}
const Ja = /* @__PURE__ */ mt(Ph, [["render", Fh]]), Mh = {
  name: "VAddress",
  components: { InputWrapper: Oh, VToggle: Ja },
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
    },
    modelValue: {
      handler: function(e) {
        this.form = Object.keys(this.modelValue ?? []).length ? this.modelValue : this.form;
      },
      deep: !0
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
        for (const d of e.address_components)
          switch (d.types[0]) {
            case "street_number":
              r.streetNumber = d.long_name;
              break;
            case "route":
              r.streetName = d.long_name;
              break;
            case "locality":
              this.form.city = d.long_name;
              break;
            case "administrative_area_level_1":
              this.form.state = d.short_name;
              break;
            case "postal_code":
              this.form.postcode = d.long_name;
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
}, Lh = ["id", "name", "disabled", "value", "placeholder"], Uh = {
  key: 0,
  class: "inline-block text-sm text-gray-600 mt-1.5 brand-200"
}, Nh = { class: "flex cursor-pointer items-center space-y-1" }, jh = {
  key: 1,
  class: "relative space-y-2"
}, kh = { class: "flex flex-row space-x-3" }, $h = { class: "basis-1/3" }, Bh = { class: "basis-1/3" }, Vh = { class: "basis-1/3" };
function Hh(t, e, r, a, i, d) {
  var o, s;
  const n = ln("input-wrapper"), l = ln("v-toggle");
  return oe(), se("div", {
    class: et(["grid space-y-2", (o = r.field) == null ? void 0 : o.class])
  }, [
    ie(n, {
      field: "full_address",
      class: "space-y-0 [&_label]:mx-0 [&_div.w-full]:pt-0"
    }, {
      default: Et(() => {
        var u;
        return [
          N("input", {
            id: r.name,
            name: r.name,
            type: "text",
            disabled: i.isManual,
            class: "border-1 border-solid border-gray-300 rounded-lg bg-white",
            value: d.fullAddress,
            placeholder: (u = r.field) == null ? void 0 : u.placeholder,
            onInput: e[0] || (e[0] = (...c) => d.resetAddressInput && d.resetAddressInput(...c))
          }, null, 40, Lh)
        ];
      }),
      _: 1
    }),
    (s = r.field) != null && s.hint ? (oe(), se("p", Uh, We(r.field.hint), 1)) : je("", !0),
    N("label", Nh, [
      ie(l, {
        modelValue: i.isManual,
        "onUpdate:modelValue": e[1] || (e[1] = (u) => i.isManual = u),
        ring: !1
      }, null, 8, ["modelValue"]),
      e[6] || (e[6] = N("span", { class: "text-xs inline-block" }, "Manual Address", -1))
    ]),
    i.isManual ? (oe(), se("div", jh, [
      ie(n, {
        "is-vertical": "",
        field: "address",
        "label-text": "Address",
        class: "w-full"
      }, {
        default: Et(() => [
          nt(N("input", {
            type: "text",
            class: "border-1 border-solid border-gray-300 rounded-lg bg-white",
            "onUpdate:modelValue": e[2] || (e[2] = (u) => i.form.address = u),
            placeholder: "Address"
          }, null, 512), [
            [St, i.form.address]
          ])
        ]),
        _: 1
      }),
      N("div", kh, [
        N("div", $h, [
          ie(n, {
            "is-vertical": "",
            field: "city",
            "label-text": "Suburb",
            class: "w-full"
          }, {
            default: Et(() => [
              nt(N("input", {
                type: "text",
                class: "border-1 border-solid border-gray-300 rounded-lg bg-white w-full",
                "onUpdate:modelValue": e[3] || (e[3] = (u) => i.form.city = u),
                placeholder: "Suburb"
              }, null, 512), [
                [St, i.form.city]
              ])
            ]),
            _: 1
          })
        ]),
        N("div", Bh, [
          ie(n, {
            "is-vertical": "",
            field: "state",
            "label-text": "State",
            class: "w-full"
          }, {
            default: Et(() => [
              nt(N("input", {
                "onUpdate:modelValue": e[4] || (e[4] = (u) => i.form.state = u),
                type: "text",
                placeholder: "State",
                class: "border-1 border-solid border-gray-300 rounded-lg bg-white w-full"
              }, null, 512), [
                [St, i.form.state]
              ])
            ]),
            _: 1
          })
        ]),
        N("div", Vh, [
          ie(n, {
            "is-vertical": "",
            field: "postcode",
            "label-text": "Postcode",
            class: "w-full"
          }, {
            default: Et(() => [
              nt(N("input", {
                type: "text",
                class: "border-1 border-solid border-gray-300 rounded-lg bg-white w-full",
                "onUpdate:modelValue": e[5] || (e[5] = (u) => i.form.postcode = u),
                placeholder: "Postcode"
              }, null, 512), [
                [St, i.form.postcode]
              ])
            ]),
            _: 1
          })
        ])
      ])
    ])) : je("", !0)
  ], 2);
}
const ll = /* @__PURE__ */ mt(Mh, [["render", Hh]]), zh = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
};
function Gh(t, e) {
  return oe(), se("svg", zh, e[0] || (e[0] = [
    N("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M8 12h8m6 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
    }, null, -1)
  ]));
}
const Wh = { render: Gh }, Yh = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
};
function Kh(t, e) {
  return oe(), se("svg", Yh, e[0] || (e[0] = [
    N("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 5v14m-7-7h14"
    }, null, -1)
  ]));
}
const ul = { render: Kh }, Xh = {
  name: "VGridInput",
  mixins: [fn],
  components: {
    MinusCircle: Wh,
    Plus: ul
  },
  props: {
    name: {},
    type: {},
    field: {},
    modelValue: { default: [] }
  },
  data() {
    return {
      inputs: nn(this.modelValue),
      processing: !1,
      localField: {},
      componentTypes: {
        checkbox: kt(sl),
        "check-group": kt(go),
        datepicker: kt(il),
        "file-upload": kt(Rs),
        number: kt(xo),
        "radio-group": kt(go),
        select: kt(Ds),
        signature: kt(Fs),
        text: kt(xo),
        textarea: kt(Ms),
        paragraph: kt(Ls),
        address: kt(ll)
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
    },
    originalGrid() {
      return this.grid.filter(
        (t) => t.some((e) => e.some((r) => !(r != null && r.on_flight)))
      );
    },
    canRemove() {
      return this.grid.some((t, e) => this.canRemoveRow(e));
    }
  },
  created() {
    var t;
    this.localField = nn(this.field), this.initiateGrid(this.grid && ((t = this.inputs) == null ? void 0 : t.length) > this.grid.length);
  },
  watch: {
    inputs: {
      handler: function(e) {
        this.$emit("update:modelValue", nn(e));
      },
      deep: !0
    }
  },
  methods: {
    canRemoveRow(t) {
      return (t + this.originalGrid.length) % this.originalGrid.length === 0 && this.field.allow_add_row && this.grid.length > this.originalGrid.length;
    },
    initiateGrid(t = !1) {
      var e;
      (e = this.grid) == null || e.forEach((r, a) => {
        r.forEach((i, d) => {
          var n;
          (n = i[0]) != null && n.name && (this.inputs || (this.inputs = []), this.inputs.hasOwnProperty(a) || (this.inputs[a] = {}), this.inputs[a].hasOwnProperty(i[0].name) || (this.inputs[a][i[0].name] = null));
        });
      }), t && (this.processing = !0, this.inputs.filter((r, a) => a + 1 > this.grid.length).forEach((r) => {
        this.originalGrid.forEach((a) => {
          const i = nn(a.map((d) => di(d))).map((d) => (Object.keys(r).forEach((n) => {
            d[0].name === this.getTemplateFieldName(n) && (d[0].name = n);
          }), d));
          this.grid.push(i.map((d) => {
            var l;
            const n = Math.floor(Math.random() * Date.now());
            return (l = d[0]) != null && l.id && (d[0].id = n, d[0].on_flight = !0), d;
          }));
        });
      }), this.processing = !1);
    },
    getTemplateFieldName(t) {
      const e = t.lastIndexOf("_");
      return e === -1 ? t : t.substring(0, e);
    },
    removeRow(t) {
      if (t >= 0 && t < this.grid.length) {
        const e = this.grid[t].some(
          (a) => a.some((i) => !i.hasOwnProperty("on_flight") || !i.on_flight)
        ), r = this.originalGrid.length;
        if (this.grid.splice(t, r), e)
          for (let a = 0; a < r; a++)
            this.grid[a].forEach((i) => {
              i.forEach((d) => {
                d.on_flight = !1;
              });
            });
        this.inputs.hasOwnProperty(t) && this.inputs.splice(t, r);
      }
    },
    addRow() {
      this.localField.allow_add_row && this.grid && this.grid.length && (this.processing = !0, this.grid.filter(
        (e) => e.some((r) => r.some((a) => !(a != null && a.on_flight)))
      ).forEach((e) => {
        const r = nn(e.map((a) => di(a)));
        this.grid.push(r.map((a) => {
          var d;
          const i = Math.floor(Math.random() * Date.now());
          return (d = a[0]) != null && d.id && (a[0].id = i, a[0].on_flight = !0, a[0].name = `${a[0].name}_${i}`), a;
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
}, Jh = {
  key: 0,
  class: "mb-4 font-regular text-gray-600"
}, Qh = { class: "grid gap-4 w-full" }, Zh = {
  key: 0,
  class: "flex gap-2 relative"
}, qh = ["for"], _h = ["for"], ep = { key: 1 }, tp = ["onClick"], np = {
  key: 1,
  class: "mt-2 flex gap-2"
};
function rp(t, e, r, a, i, d) {
  const n = ln("MinusCircle"), l = ln("Plus");
  return oe(), se("div", null, [
    r.field.hint ? (oe(), se("p", Jh, We(r.field.hint), 1)) : je("", !0),
    N("div", Qh, [
      (oe(!0), se(Ot, null, Pn(d.grid, (o, s) => (oe(), se("div", {
        key: "row-" + s
      }, [
        o.filter((u) => u.length).length ? (oe(), se("div", Zh, [
          (oe(!0), se(Ot, null, Pn(o, (u, c) => {
            var f, p, h, v, m, g, y, E, w, T, S, D;
            return oe(), se("div", {
              key: "cell-" + s + "-" + c + "-" + ((f = u[0]) == null ? void 0 : f.name),
              class: et(d.getClassForItem(d.grid[s], c) + (d.canRemove ? " pr-[40px]" : ""))
            }, [
              (p = u[0]) != null && p.type ? (oe(), se("div", {
                key: 0,
                class: et(["v-field", d.fieldClass(u[0])])
              }, [
                u[0].type === "heading" && !((h = u[0]) != null && h.on_flight) ? (oe(), se("label", {
                  key: 0,
                  for: r.name,
                  class: "text-lg font-semibold !text-gray-900"
                }, We((v = u[0]) == null ? void 0 : v.label), 9, qh)) : !["paragraph", "checkbox"].includes((m = u[0]) == null ? void 0 : m.type) && !((g = u[0]) != null && g.on_flight) ? (oe(), se("label", {
                  key: 1,
                  class: "text-sm text-gray-700",
                  for: r.name
                }, [
                  (y = u[0]) != null && y.label ? (oe(), un(Hn(d.fieldLabel(u[0])), { key: 0 }, {
                    default: Et(() => {
                      var L, U;
                      return [
                        tn(We((L = u[0]) == null ? void 0 : L.label) + " " + We((U = u[0]) != null && U.required ? "*" : ""), 1)
                      ];
                    }),
                    _: 2
                  }, 1024)) : (oe(), se("span", ep, " "))
                ], 8, _h)) : je("", !0),
                d.fieldComponent(u[0]) && ((E = u[0]) != null && E.name) && !i.processing ? (oe(), un(Hn(d.fieldComponent(u[0])), {
                  key: r.name + ((w = u[0]) == null ? void 0 : w.name),
                  modelValue: i.inputs[s][(T = u[0]) == null ? void 0 : T.name],
                  "onUpdate:modelValue": (L) => {
                    var U;
                    return i.inputs[s][(U = u[0]) == null ? void 0 : U.name] = L;
                  },
                  name: `${r.name}[${s}][${u[0].name}]`,
                  type: u[0].type,
                  options: (S = u[0]) == null ? void 0 : S.options,
                  placeholder: (D = u[0]) == null ? void 0 : D.placeholder,
                  field: u[0],
                  required: u[0].hasOwnProperty("required") && u[0].required,
                  editable: t.editable
                }, null, 8, ["modelValue", "onUpdate:modelValue", "name", "type", "options", "placeholder", "field", "required", "editable"])) : je("", !0),
                bn(t.$slots, "default")
              ], 2)) : je("", !0)
            ], 2);
          }), 128)),
          d.canRemoveRow(s) && d.originalGrid ? (oe(), se("a", {
            key: 0,
            class: et(["cursor-pointer absolute top-2.5 right-[12px]", { "!top-[38px]": s === 0 }]),
            onClick: (u) => d.removeRow(s)
          }, [
            ie(n, { class: "w-5 h-5 text-brand-700 hover:text-brand-800" })
          ], 10, tp)) : je("", !0)
        ])) : je("", !0)
      ]))), 128))
    ]),
    r.field.allow_add_row ? (oe(), se("div", np, [
      N("a", {
        onClick: e[0] || (e[0] = (...o) => d.addRow && d.addRow(...o)),
        class: "cursor-pointer text-brand-700 flex items-center text-sm font-semibold hover:bg-brand-50 p-1 gap-1 rounded"
      }, [
        ie(l, { class: "w-5 h-5" }),
        e[1] || (e[1] = tn(" Add Row "))
      ])
    ])) : je("", !0)
  ]);
}
const op = /* @__PURE__ */ mt(Xh, [["render", rp]]), ap = {
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
      componentTypes: kt({
        checkbox: sl,
        "check-group": go,
        datepicker: il,
        "file-upload": Rs,
        number: xo,
        "radio-group": go,
        select: Ds,
        signature: Fs,
        text: xo,
        textarea: Ms,
        paragraph: Ls,
        grid: op,
        address: ll
      })
    };
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
}, ip = ["for"], sp = ["for"], lp = { key: 1 };
function up(t, e, r, a, i, d) {
  var n;
  return oe(), se("div", {
    class: et(["v-field", d.fieldClass])
  }, [
    r.field.type === "heading" ? (oe(), se("label", {
      key: 0,
      for: r.name,
      class: "text-lg font-semibold !text-gray-900"
    }, We(r.label), 9, ip)) : !["paragraph", "checkbox"].includes(r.field.type) && !((n = r.field) != null && n.presenter) ? (oe(), se("label", {
      key: 1,
      for: r.name
    }, [
      r.label ? (oe(), un(Hn(d.fieldLabel), { key: 0 }, {
        default: Et(() => [
          tn(We(r.label) + " " + We(r.field.required ? "*" : ""), 1)
        ]),
        _: 1
      })) : (oe(), se("span", lp, " "))
    ], 8, sp)) : je("", !0),
    d.fieldComponent ? (oe(), un(Hn(d.fieldComponent), {
      key: r.name,
      "model-value": r.modelValue,
      "onUpdate:modelValue": e[0] || (e[0] = (l) => t.$emit("update:modelValue", l)),
      name: r.name,
      type: r.type,
      options: r.options,
      placeholder: r.placeholder,
      field: r.field,
      required: r.field.hasOwnProperty("required") && r.field.required,
      editable: r.editable,
      preview: r.preview
    }, null, 8, ["model-value", "name", "type", "options", "placeholder", "field", "required", "editable", "preview"])) : r.field.presenter ? (oe(), un(Hn(r.field.presenter), ts(Ra({ key: 3 }, { field: r.field })), null, 16)) : je("", !0),
    bn(t.$slots, "default")
  ], 2);
}
const cp = /* @__PURE__ */ mt(ap, [["render", up]]), dp = {
  name: "VForm",
  components: {
    VField: cp
  },
  props: {
    action: {
      required: !1,
      default: () => "#"
    },
    method: {
      required: !1,
      default: () => "get"
    },
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
      type: [Object],
      default: () => ({})
    },
    formData: {
      type: [Object],
      default: () => ({})
    },
    validationErrors: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    var t;
    return {
      fields: this.form.fields,
      csrf: (t = document.head.querySelector('meta[name="csrf-token"]')) == null ? void 0 : t.content
    };
  },
  watch: {
    form: {
      handler(t) {
        this.fields = this.form.fields;
      },
      deep: !0
    }
  },
  methods: {
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
}, fp = ["action", "method", "name"], hp = ["value"], pp = ["value"], vp = ["name", "value"], mp = { key: 0 }, gp = ["textContent"];
function yp(t, e, r, a, i, d) {
  const n = ln("v-field");
  return oe(), se("form", {
    class: "v-form",
    action: r.action,
    method: r.method !== "get" ? "post" : "get",
    name: r.name
  }, [
    N("input", {
      type: "hidden",
      name: "_token",
      value: i.csrf
    }, null, 8, hp),
    N("input", {
      type: "hidden",
      name: "_method",
      value: r.method
    }, null, 8, pp),
    N("input", {
      type: "hidden",
      name: r.name,
      value: JSON.stringify(r.formData)
    }, null, 8, vp),
    N("div", {
      class: "fields",
      style: ql({
        "pointer-events": r.canInteract ? "auto" : "none",
        "user-select": r.canInteract ? "auto" : "none"
      })
    }, [
      r.title ? (oe(), se("div", mp, [
        N("h3", null, We(r.title), 1),
        e[0] || (e[0] = N("hr", null, null, -1))
      ])) : je("", !0),
      i.fields.length ? (oe(!0), se(Ot, { key: 1 }, Pn(i.fields, (l) => (oe(), se("div", {
        key: l.id
      }, [
        (oe(), un(n, {
          key: r.name + l.name,
          modelValue: r.formData[l.name],
          "onUpdate:modelValue": (o) => r.formData[l.name] = o,
          name: d.fieldName(l),
          label: l.label,
          type: l.type,
          options: l.options,
          placeholder: l.placeholder,
          field: l,
          editable: r.editable,
          preview: r.preview
        }, {
          default: Et(() => [
            N("span", {
              class: "error",
              textContent: We(d.getValidationMessage(l))
            }, null, 8, gp)
          ]),
          _: 2
        }, 1032, ["modelValue", "onUpdate:modelValue", "name", "label", "type", "options", "placeholder", "field", "editable", "preview"]))
      ]))), 128)) : je("", !0)
    ], 4),
    r.editable ? bn(t.$slots, "default", { key: 0 }) : je("", !0)
  ], 8, fp);
}
const bp = /* @__PURE__ */ mt(dp, [["render", yp]]);
class xp {
  constructor() {
    this.events = {};
  }
  $on(e, r) {
    this.events[e] = this.events[e] || [], this.events[e].push(r);
  }
  $off(e, r) {
    if (this.events[e]) {
      for (let a = 0; a < this.events[e].length; a++)
        if (this.events[e][a] === r) {
          this.events[e].splice(a, 1);
          break;
        }
    }
  }
  $emit(e, r) {
    this.events[e] && this.events[e].forEach(function(a) {
      a(r);
    });
  }
}
const Sp = new xp();
var uo = { exports: {} };
const Ep = /* @__PURE__ */ Os(Wl);
/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function $i(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    e && (a = a.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function dn(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? $i(Object(r), !0).forEach(function(a) {
      wp(t, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : $i(Object(r)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return t;
}
function co(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? co = function(e) {
    return typeof e;
  } : co = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, co(t);
}
function wp(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function Jt() {
  return Jt = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, Jt.apply(this, arguments);
}
function Tp(t, e) {
  if (t == null) return {};
  var r = {}, a = Object.keys(t), i, d;
  for (d = 0; d < a.length; d++)
    i = a[d], !(e.indexOf(i) >= 0) && (r[i] = t[i]);
  return r;
}
function Ap(t, e) {
  if (t == null) return {};
  var r = Tp(t, e), a, i;
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(t);
    for (i = 0; i < d.length; i++)
      a = d[i], !(e.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(t, a) && (r[a] = t[a]);
  }
  return r;
}
function Cp(t) {
  return Op(t) || Pp(t) || Rp(t) || Ip();
}
function Op(t) {
  if (Array.isArray(t)) return xa(t);
}
function Pp(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Rp(t, e) {
  if (t) {
    if (typeof t == "string") return xa(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return xa(t, e);
  }
}
function xa(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, a = new Array(e); r < e; r++) a[r] = t[r];
  return a;
}
function Ip() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Dp = "1.14.0";
function yn(t) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(t);
}
var wn = yn(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Lr = yn(/Edge/i), Bi = yn(/firefox/i), wr = yn(/safari/i) && !yn(/chrome/i) && !yn(/android/i), cl = yn(/iP(ad|od|hone)/i), Fp = yn(/chrome/i) && yn(/android/i), dl = {
  capture: !1,
  passive: !1
};
function Je(t, e, r) {
  t.addEventListener(e, r, !wn && dl);
}
function Xe(t, e, r) {
  t.removeEventListener(e, r, !wn && dl);
}
function Ao(t, e) {
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
function Mp(t) {
  return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
}
function en(t, e, r, a) {
  if (t) {
    r = r || document;
    do {
      if (e != null && (e[0] === ">" ? t.parentNode === r && Ao(t, e) : Ao(t, e)) || a && t === r)
        return t;
      if (t === r) break;
    } while (t = Mp(t));
  }
  return null;
}
var Vi = /\s+/g;
function ut(t, e, r) {
  if (t && e)
    if (t.classList)
      t.classList[r ? "add" : "remove"](e);
    else {
      var a = (" " + t.className + " ").replace(Vi, " ").replace(" " + e + " ", " ");
      t.className = (a + (r ? " " + e : "")).replace(Vi, " ");
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
function Gn(t, e) {
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
function fl(t, e, r) {
  if (t) {
    var a = t.getElementsByTagName(e), i = 0, d = a.length;
    if (r)
      for (; i < d; i++)
        r(a[i], i);
    return a;
  }
  return [];
}
function cn() {
  var t = document.scrollingElement;
  return t || document.documentElement;
}
function lt(t, e, r, a, i) {
  if (!(!t.getBoundingClientRect && t !== window)) {
    var d, n, l, o, s, u, c;
    if (t !== window && t.parentNode && t !== cn() ? (d = t.getBoundingClientRect(), n = d.top, l = d.left, o = d.bottom, s = d.right, u = d.height, c = d.width) : (n = 0, l = 0, o = window.innerHeight, s = window.innerWidth, u = window.innerHeight, c = window.innerWidth), (e || r) && t !== window && (i = i || t.parentNode, !wn))
      do
        if (i && i.getBoundingClientRect && (De(i, "transform") !== "none" || r && De(i, "position") !== "static")) {
          var f = i.getBoundingClientRect();
          n -= f.top + parseInt(De(i, "border-top-width")), l -= f.left + parseInt(De(i, "border-left-width")), o = n + d.height, s = l + d.width;
          break;
        }
      while (i = i.parentNode);
    if (a && t !== window) {
      var p = Gn(i || t), h = p && p.a, v = p && p.d;
      p && (n /= v, l /= h, c /= h, u /= v, o = n + u, s = l + c);
    }
    return {
      top: n,
      left: l,
      bottom: o,
      right: s,
      width: c,
      height: u
    };
  }
}
function Hi(t, e, r) {
  for (var a = On(t, !0), i = lt(t)[e]; a; ) {
    var d = lt(a)[r], n = void 0;
    if (n = i >= d, !n) return a;
    if (a === cn()) break;
    a = On(a, !1);
  }
  return !1;
}
function or(t, e, r, a) {
  for (var i = 0, d = 0, n = t.children; d < n.length; ) {
    if (n[d].style.display !== "none" && n[d] !== $e.ghost && (a || n[d] !== $e.dragged) && en(n[d], r.draggable, t, !1)) {
      if (i === e)
        return n[d];
      i++;
    }
    d++;
  }
  return null;
}
function Qa(t, e) {
  for (var r = t.lastElementChild; r && (r === $e.ghost || De(r, "display") === "none" || e && !Ao(r, e)); )
    r = r.previousElementSibling;
  return r || null;
}
function ft(t, e) {
  var r = 0;
  if (!t || !t.parentNode)
    return -1;
  for (; t = t.previousElementSibling; )
    t.nodeName.toUpperCase() !== "TEMPLATE" && t !== $e.clone && (!e || Ao(t, e)) && r++;
  return r;
}
function zi(t) {
  var e = 0, r = 0, a = cn();
  if (t)
    do {
      var i = Gn(t), d = i.a, n = i.d;
      e += t.scrollLeft * d, r += t.scrollTop * n;
    } while (t !== a && (t = t.parentNode));
  return [e, r];
}
function Lp(t, e) {
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      for (var a in e)
        if (e.hasOwnProperty(a) && e[a] === t[r][a]) return Number(r);
    }
  return -1;
}
function On(t, e) {
  if (!t || !t.getBoundingClientRect) return cn();
  var r = t, a = !1;
  do
    if (r.clientWidth < r.scrollWidth || r.clientHeight < r.scrollHeight) {
      var i = De(r);
      if (r.clientWidth < r.scrollWidth && (i.overflowX == "auto" || i.overflowX == "scroll") || r.clientHeight < r.scrollHeight && (i.overflowY == "auto" || i.overflowY == "scroll")) {
        if (!r.getBoundingClientRect || r === document.body) return cn();
        if (a || e) return r;
        a = !0;
      }
    }
  while (r = r.parentNode);
  return cn();
}
function Up(t, e) {
  if (t && e)
    for (var r in e)
      e.hasOwnProperty(r) && (t[r] = e[r]);
  return t;
}
function na(t, e) {
  return Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width);
}
var Tr;
function hl(t, e) {
  return function() {
    if (!Tr) {
      var r = arguments, a = this;
      r.length === 1 ? t.call(a, r[0]) : t.apply(a, r), Tr = setTimeout(function() {
        Tr = void 0;
      }, e);
    }
  };
}
function Np() {
  clearTimeout(Tr), Tr = void 0;
}
function pl(t, e, r) {
  t.scrollLeft += e, t.scrollTop += r;
}
function Za(t) {
  var e = window.Polymer, r = window.jQuery || window.Zepto;
  return e && e.dom ? e.dom(t).cloneNode(!0) : r ? r(t).clone(!0)[0] : t.cloneNode(!0);
}
function Gi(t, e) {
  De(t, "position", "absolute"), De(t, "top", e.top), De(t, "left", e.left), De(t, "width", e.width), De(t, "height", e.height);
}
function ra(t) {
  De(t, "position", ""), De(t, "top", ""), De(t, "left", ""), De(t, "width", ""), De(t, "height", "");
}
var At = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function jp() {
  var t = [], e;
  return {
    captureAnimationState: function() {
      if (t = [], !!this.options.animation) {
        var a = [].slice.call(this.el.children);
        a.forEach(function(i) {
          if (!(De(i, "display") === "none" || i === $e.ghost)) {
            t.push({
              target: i,
              rect: lt(i)
            });
            var d = dn({}, t[t.length - 1].rect);
            if (i.thisAnimationDuration) {
              var n = Gn(i, !0);
              n && (d.top -= n.f, d.left -= n.e);
            }
            i.fromRect = d;
          }
        });
      }
    },
    addAnimationState: function(a) {
      t.push(a);
    },
    removeAnimationState: function(a) {
      t.splice(Lp(t, {
        target: a
      }), 1);
    },
    animateAll: function(a) {
      var i = this;
      if (!this.options.animation) {
        clearTimeout(e), typeof a == "function" && a();
        return;
      }
      var d = !1, n = 0;
      t.forEach(function(l) {
        var o = 0, s = l.target, u = s.fromRect, c = lt(s), f = s.prevFromRect, p = s.prevToRect, h = l.rect, v = Gn(s, !0);
        v && (c.top -= v.f, c.left -= v.e), s.toRect = c, s.thisAnimationDuration && na(f, c) && !na(u, c) && // Make sure animatingRect is on line between toRect & fromRect
        (h.top - c.top) / (h.left - c.left) === (u.top - c.top) / (u.left - c.left) && (o = $p(h, f, p, i.options)), na(c, u) || (s.prevFromRect = u, s.prevToRect = c, o || (o = i.options.animation), i.animate(s, h, c, o)), o && (d = !0, n = Math.max(n, o), clearTimeout(s.animationResetTimer), s.animationResetTimer = setTimeout(function() {
          s.animationTime = 0, s.prevFromRect = null, s.fromRect = null, s.prevToRect = null, s.thisAnimationDuration = null;
        }, o), s.thisAnimationDuration = o);
      }), clearTimeout(e), d ? e = setTimeout(function() {
        typeof a == "function" && a();
      }, n) : typeof a == "function" && a(), t = [];
    },
    animate: function(a, i, d, n) {
      if (n) {
        De(a, "transition", ""), De(a, "transform", "");
        var l = Gn(this.el), o = l && l.a, s = l && l.d, u = (i.left - d.left) / (o || 1), c = (i.top - d.top) / (s || 1);
        a.animatingX = !!u, a.animatingY = !!c, De(a, "transform", "translate3d(" + u + "px," + c + "px,0)"), this.forRepaintDummy = kp(a), De(a, "transition", "transform " + n + "ms" + (this.options.easing ? " " + this.options.easing : "")), De(a, "transform", "translate3d(0,0,0)"), typeof a.animated == "number" && clearTimeout(a.animated), a.animated = setTimeout(function() {
          De(a, "transition", ""), De(a, "transform", ""), a.animated = !1, a.animatingX = !1, a.animatingY = !1;
        }, n);
      }
    }
  };
}
function kp(t) {
  return t.offsetWidth;
}
function $p(t, e, r, a) {
  return Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) / Math.sqrt(Math.pow(e.top - r.top, 2) + Math.pow(e.left - r.left, 2)) * a.animation;
}
var Qn = [], oa = {
  initializeByDefault: !0
}, Ur = {
  mount: function(e) {
    for (var r in oa)
      oa.hasOwnProperty(r) && !(r in e) && (e[r] = oa[r]);
    Qn.forEach(function(a) {
      if (a.pluginName === e.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once");
    }), Qn.push(e);
  },
  pluginEvent: function(e, r, a) {
    var i = this;
    this.eventCanceled = !1, a.cancel = function() {
      i.eventCanceled = !0;
    };
    var d = e + "Global";
    Qn.forEach(function(n) {
      r[n.pluginName] && (r[n.pluginName][d] && r[n.pluginName][d](dn({
        sortable: r
      }, a)), r.options[n.pluginName] && r[n.pluginName][e] && r[n.pluginName][e](dn({
        sortable: r
      }, a)));
    });
  },
  initializePlugins: function(e, r, a, i) {
    Qn.forEach(function(l) {
      var o = l.pluginName;
      if (!(!e.options[o] && !l.initializeByDefault)) {
        var s = new l(e, r, e.options);
        s.sortable = e, s.options = e.options, e[o] = s, Jt(a, s.defaults);
      }
    });
    for (var d in e.options)
      if (e.options.hasOwnProperty(d)) {
        var n = this.modifyOption(e, d, e.options[d]);
        typeof n < "u" && (e.options[d] = n);
      }
  },
  getEventProperties: function(e, r) {
    var a = {};
    return Qn.forEach(function(i) {
      typeof i.eventProperties == "function" && Jt(a, i.eventProperties.call(r[i.pluginName], e));
    }), a;
  },
  modifyOption: function(e, r, a) {
    var i;
    return Qn.forEach(function(d) {
      e[d.pluginName] && d.optionListeners && typeof d.optionListeners[r] == "function" && (i = d.optionListeners[r].call(e[d.pluginName], a));
    }), i;
  }
};
function yr(t) {
  var e = t.sortable, r = t.rootEl, a = t.name, i = t.targetEl, d = t.cloneEl, n = t.toEl, l = t.fromEl, o = t.oldIndex, s = t.newIndex, u = t.oldDraggableIndex, c = t.newDraggableIndex, f = t.originalEvent, p = t.putSortable, h = t.extraEventProperties;
  if (e = e || r && r[At], !!e) {
    var v, m = e.options, g = "on" + a.charAt(0).toUpperCase() + a.substr(1);
    window.CustomEvent && !wn && !Lr ? v = new CustomEvent(a, {
      bubbles: !0,
      cancelable: !0
    }) : (v = document.createEvent("Event"), v.initEvent(a, !0, !0)), v.to = n || r, v.from = l || r, v.item = i || r, v.clone = d, v.oldIndex = o, v.newIndex = s, v.oldDraggableIndex = u, v.newDraggableIndex = c, v.originalEvent = f, v.pullMode = p ? p.lastPutMode : void 0;
    var y = dn(dn({}, h), Ur.getEventProperties(a, e));
    for (var E in y)
      v[E] = y[E];
    r && r.dispatchEvent(v), m[g] && m[g].call(e, v);
  }
}
var Bp = ["evt"], Mt = function(e, r) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = a.evt, d = Ap(a, Bp);
  Ur.pluginEvent.bind($e)(e, r, dn({
    dragEl: ye,
    parentEl: ct,
    ghostEl: Ge,
    rootEl: st,
    nextEl: kn,
    lastDownEl: fo,
    cloneEl: dt,
    cloneHidden: An,
    dragStarted: br,
    putSortable: xt,
    activeSortable: $e.active,
    originalEvent: i,
    oldIndex: nr,
    oldDraggableIndex: Ar,
    newIndex: Vt,
    newDraggableIndex: Tn,
    hideGhostForTarget: yl,
    unhideGhostForTarget: bl,
    cloneNowHidden: function() {
      An = !0;
    },
    cloneNowShown: function() {
      An = !1;
    },
    dispatchSortableEvent: function(l) {
      Ct({
        sortable: r,
        name: l,
        originalEvent: i
      });
    }
  }, d));
};
function Ct(t) {
  yr(dn({
    putSortable: xt,
    cloneEl: dt,
    targetEl: ye,
    rootEl: st,
    oldIndex: nr,
    oldDraggableIndex: Ar,
    newIndex: Vt,
    newDraggableIndex: Tn
  }, t));
}
var ye, ct, Ge, st, kn, fo, dt, An, nr, Vt, Ar, Tn, eo, xt, er = !1, Co = !1, Oo = [], Nn, Zt, aa, ia, Wi, Yi, br, Zn, Cr, Or = !1, to = !1, ho, wt, sa = [], Sa = !1, Po = [], Wo = typeof document < "u", no = cl, Ki = Lr || wn ? "cssFloat" : "float", Vp = Wo && !Fp && !cl && "draggable" in document.createElement("div"), vl = function() {
  if (Wo) {
    if (wn)
      return !1;
    var t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
  }
}(), ml = function(e, r) {
  var a = De(e), i = parseInt(a.width) - parseInt(a.paddingLeft) - parseInt(a.paddingRight) - parseInt(a.borderLeftWidth) - parseInt(a.borderRightWidth), d = or(e, 0, r), n = or(e, 1, r), l = d && De(d), o = n && De(n), s = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + lt(d).width, u = o && parseInt(o.marginLeft) + parseInt(o.marginRight) + lt(n).width;
  if (a.display === "flex")
    return a.flexDirection === "column" || a.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (a.display === "grid")
    return a.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (d && l.float && l.float !== "none") {
    var c = l.float === "left" ? "left" : "right";
    return n && (o.clear === "both" || o.clear === c) ? "vertical" : "horizontal";
  }
  return d && (l.display === "block" || l.display === "flex" || l.display === "table" || l.display === "grid" || s >= i && a[Ki] === "none" || n && a[Ki] === "none" && s + u > i) ? "vertical" : "horizontal";
}, Hp = function(e, r, a) {
  var i = a ? e.left : e.top, d = a ? e.right : e.bottom, n = a ? e.width : e.height, l = a ? r.left : r.top, o = a ? r.right : r.bottom, s = a ? r.width : r.height;
  return i === l || d === o || i + n / 2 === l + s / 2;
}, zp = function(e, r) {
  var a;
  return Oo.some(function(i) {
    var d = i[At].options.emptyInsertThreshold;
    if (!(!d || Qa(i))) {
      var n = lt(i), l = e >= n.left - d && e <= n.right + d, o = r >= n.top - d && r <= n.bottom + d;
      if (l && o)
        return a = i;
    }
  }), a;
}, gl = function(e) {
  function r(d, n) {
    return function(l, o, s, u) {
      var c = l.options.group.name && o.options.group.name && l.options.group.name === o.options.group.name;
      if (d == null && (n || c))
        return !0;
      if (d == null || d === !1)
        return !1;
      if (n && d === "clone")
        return d;
      if (typeof d == "function")
        return r(d(l, o, s, u), n)(l, o, s, u);
      var f = (n ? l : o).options.group.name;
      return d === !0 || typeof d == "string" && d === f || d.join && d.indexOf(f) > -1;
    };
  }
  var a = {}, i = e.group;
  (!i || co(i) != "object") && (i = {
    name: i
  }), a.name = i.name, a.checkPull = r(i.pull, !0), a.checkPut = r(i.put), a.revertClone = i.revertClone, e.group = a;
}, yl = function() {
  !vl && Ge && De(Ge, "display", "none");
}, bl = function() {
  !vl && Ge && De(Ge, "display", "");
};
Wo && document.addEventListener("click", function(t) {
  if (Co)
    return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), Co = !1, !1;
}, !0);
var jn = function(e) {
  if (ye) {
    e = e.touches ? e.touches[0] : e;
    var r = zp(e.clientX, e.clientY);
    if (r) {
      var a = {};
      for (var i in e)
        e.hasOwnProperty(i) && (a[i] = e[i]);
      a.target = a.rootEl = r, a.preventDefault = void 0, a.stopPropagation = void 0, r[At]._onDragOver(a);
    }
  }
}, Gp = function(e) {
  ye && ye.parentNode[At]._isOutsideThisEl(e.target);
};
function $e(t, e) {
  if (!(t && t.nodeType && t.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
  this.el = t, this.options = e = Jt({}, e), t[At] = this;
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
      return ml(t, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(n, l) {
      n.setData("Text", l.textContent);
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
    supportPointer: $e.supportPointer !== !1 && "PointerEvent" in window && !wr,
    emptyInsertThreshold: 5
  };
  Ur.initializePlugins(this, t, r);
  for (var a in r)
    !(a in e) && (e[a] = r[a]);
  gl(e);
  for (var i in this)
    i.charAt(0) === "_" && typeof this[i] == "function" && (this[i] = this[i].bind(this));
  this.nativeDraggable = e.forceFallback ? !1 : Vp, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? Je(t, "pointerdown", this._onTapStart) : (Je(t, "mousedown", this._onTapStart), Je(t, "touchstart", this._onTapStart)), this.nativeDraggable && (Je(t, "dragover", this), Je(t, "dragenter", this)), Oo.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), Jt(this, jp());
}
$e.prototype = /** @lends Sortable.prototype */
{
  constructor: $e,
  _isOutsideThisEl: function(e) {
    !this.el.contains(e) && e !== this.el && (Zn = null);
  },
  _getDirection: function(e, r) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, e, r, ye) : this.options.direction;
  },
  _onTapStart: function(e) {
    if (e.cancelable) {
      var r = this, a = this.el, i = this.options, d = i.preventOnFilter, n = e.type, l = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e, o = (l || e).target, s = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || o, u = i.filter;
      if (qp(a), !ye && !(/mousedown|pointerdown/.test(n) && e.button !== 0 || i.disabled) && !s.isContentEditable && !(!this.nativeDraggable && wr && o && o.tagName.toUpperCase() === "SELECT") && (o = en(o, i.draggable, a, !1), !(o && o.animated) && fo !== o)) {
        if (nr = ft(o), Ar = ft(o, i.draggable), typeof u == "function") {
          if (u.call(this, e, o, this)) {
            Ct({
              sortable: r,
              rootEl: s,
              name: "filter",
              targetEl: o,
              toEl: a,
              fromEl: a
            }), Mt("filter", r, {
              evt: e
            }), d && e.cancelable && e.preventDefault();
            return;
          }
        } else if (u && (u = u.split(",").some(function(c) {
          if (c = en(s, c.trim(), a, !1), c)
            return Ct({
              sortable: r,
              rootEl: c,
              name: "filter",
              targetEl: o,
              fromEl: a,
              toEl: a
            }), Mt("filter", r, {
              evt: e
            }), !0;
        }), u)) {
          d && e.cancelable && e.preventDefault();
          return;
        }
        i.handle && !en(s, i.handle, a, !1) || this._prepareDragStart(e, l, o);
      }
    }
  },
  _prepareDragStart: function(e, r, a) {
    var i = this, d = i.el, n = i.options, l = d.ownerDocument, o;
    if (a && !ye && a.parentNode === d) {
      var s = lt(a);
      if (st = d, ye = a, ct = ye.parentNode, kn = ye.nextSibling, fo = a, eo = n.group, $e.dragged = ye, Nn = {
        target: ye,
        clientX: (r || e).clientX,
        clientY: (r || e).clientY
      }, Wi = Nn.clientX - s.left, Yi = Nn.clientY - s.top, this._lastX = (r || e).clientX, this._lastY = (r || e).clientY, ye.style["will-change"] = "all", o = function() {
        if (Mt("delayEnded", i, {
          evt: e
        }), $e.eventCanceled) {
          i._onDrop();
          return;
        }
        i._disableDelayedDragEvents(), !Bi && i.nativeDraggable && (ye.draggable = !0), i._triggerDragStart(e, r), Ct({
          sortable: i,
          name: "choose",
          originalEvent: e
        }), ut(ye, n.chosenClass, !0);
      }, n.ignore.split(",").forEach(function(u) {
        fl(ye, u.trim(), la);
      }), Je(l, "dragover", jn), Je(l, "mousemove", jn), Je(l, "touchmove", jn), Je(l, "mouseup", i._onDrop), Je(l, "touchend", i._onDrop), Je(l, "touchcancel", i._onDrop), Bi && this.nativeDraggable && (this.options.touchStartThreshold = 4, ye.draggable = !0), Mt("delayStart", this, {
        evt: e
      }), n.delay && (!n.delayOnTouchOnly || r) && (!this.nativeDraggable || !(Lr || wn))) {
        if ($e.eventCanceled) {
          this._onDrop();
          return;
        }
        Je(l, "mouseup", i._disableDelayedDrag), Je(l, "touchend", i._disableDelayedDrag), Je(l, "touchcancel", i._disableDelayedDrag), Je(l, "mousemove", i._delayedDragTouchMoveHandler), Je(l, "touchmove", i._delayedDragTouchMoveHandler), n.supportPointer && Je(l, "pointermove", i._delayedDragTouchMoveHandler), i._dragStartTimer = setTimeout(o, n.delay);
      } else
        o();
    }
  },
  _delayedDragTouchMoveHandler: function(e) {
    var r = e.touches ? e.touches[0] : e;
    Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    ye && la(ye), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var e = this.el.ownerDocument;
    Xe(e, "mouseup", this._disableDelayedDrag), Xe(e, "touchend", this._disableDelayedDrag), Xe(e, "touchcancel", this._disableDelayedDrag), Xe(e, "mousemove", this._delayedDragTouchMoveHandler), Xe(e, "touchmove", this._delayedDragTouchMoveHandler), Xe(e, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(e, r) {
    r = r || e.pointerType == "touch" && e, !this.nativeDraggable || r ? this.options.supportPointer ? Je(document, "pointermove", this._onTouchMove) : r ? Je(document, "touchmove", this._onTouchMove) : Je(document, "mousemove", this._onTouchMove) : (Je(ye, "dragend", this), Je(st, "dragstart", this._onDragStart));
    try {
      document.selection ? po(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(e, r) {
    if (er = !1, st && ye) {
      Mt("dragStarted", this, {
        evt: r
      }), this.nativeDraggable && Je(document, "dragover", Gp);
      var a = this.options;
      !e && ut(ye, a.dragClass, !1), ut(ye, a.ghostClass, !0), $e.active = this, e && this._appendGhost(), Ct({
        sortable: this,
        name: "start",
        originalEvent: r
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Zt) {
      this._lastX = Zt.clientX, this._lastY = Zt.clientY, yl();
      for (var e = document.elementFromPoint(Zt.clientX, Zt.clientY), r = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(Zt.clientX, Zt.clientY), e !== r); )
        r = e;
      if (ye.parentNode[At]._isOutsideThisEl(e), r)
        do {
          if (r[At]) {
            var a = void 0;
            if (a = r[At]._onDragOver({
              clientX: Zt.clientX,
              clientY: Zt.clientY,
              target: e,
              rootEl: r
            }), a && !this.options.dragoverBubble)
              break;
          }
          e = r;
        } while (r = r.parentNode);
      bl();
    }
  },
  _onTouchMove: function(e) {
    if (Nn) {
      var r = this.options, a = r.fallbackTolerance, i = r.fallbackOffset, d = e.touches ? e.touches[0] : e, n = Ge && Gn(Ge, !0), l = Ge && n && n.a, o = Ge && n && n.d, s = no && wt && zi(wt), u = (d.clientX - Nn.clientX + i.x) / (l || 1) + (s ? s[0] - sa[0] : 0) / (l || 1), c = (d.clientY - Nn.clientY + i.y) / (o || 1) + (s ? s[1] - sa[1] : 0) / (o || 1);
      if (!$e.active && !er) {
        if (a && Math.max(Math.abs(d.clientX - this._lastX), Math.abs(d.clientY - this._lastY)) < a)
          return;
        this._onDragStart(e, !0);
      }
      if (Ge) {
        n ? (n.e += u - (aa || 0), n.f += c - (ia || 0)) : n = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: u,
          f: c
        };
        var f = "matrix(".concat(n.a, ",").concat(n.b, ",").concat(n.c, ",").concat(n.d, ",").concat(n.e, ",").concat(n.f, ")");
        De(Ge, "webkitTransform", f), De(Ge, "mozTransform", f), De(Ge, "msTransform", f), De(Ge, "transform", f), aa = u, ia = c, Zt = d;
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!Ge) {
      var e = this.options.fallbackOnBody ? document.body : st, r = lt(ye, !0, no, !0, e), a = this.options;
      if (no) {
        for (wt = e; De(wt, "position") === "static" && De(wt, "transform") === "none" && wt !== document; )
          wt = wt.parentNode;
        wt !== document.body && wt !== document.documentElement ? (wt === document && (wt = cn()), r.top += wt.scrollTop, r.left += wt.scrollLeft) : wt = cn(), sa = zi(wt);
      }
      Ge = ye.cloneNode(!0), ut(Ge, a.ghostClass, !1), ut(Ge, a.fallbackClass, !0), ut(Ge, a.dragClass, !0), De(Ge, "transition", ""), De(Ge, "transform", ""), De(Ge, "box-sizing", "border-box"), De(Ge, "margin", 0), De(Ge, "top", r.top), De(Ge, "left", r.left), De(Ge, "width", r.width), De(Ge, "height", r.height), De(Ge, "opacity", "0.8"), De(Ge, "position", no ? "absolute" : "fixed"), De(Ge, "zIndex", "100000"), De(Ge, "pointerEvents", "none"), $e.ghost = Ge, e.appendChild(Ge), De(Ge, "transform-origin", Wi / parseInt(Ge.style.width) * 100 + "% " + Yi / parseInt(Ge.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(e, r) {
    var a = this, i = e.dataTransfer, d = a.options;
    if (Mt("dragStart", this, {
      evt: e
    }), $e.eventCanceled) {
      this._onDrop();
      return;
    }
    Mt("setupClone", this), $e.eventCanceled || (dt = Za(ye), dt.draggable = !1, dt.style["will-change"] = "", this._hideClone(), ut(dt, this.options.chosenClass, !1), $e.clone = dt), a.cloneId = po(function() {
      Mt("clone", a), !$e.eventCanceled && (a.options.removeCloneOnHide || st.insertBefore(dt, ye), a._hideClone(), Ct({
        sortable: a,
        name: "clone"
      }));
    }), !r && ut(ye, d.dragClass, !0), r ? (Co = !0, a._loopId = setInterval(a._emulateDragOver, 50)) : (Xe(document, "mouseup", a._onDrop), Xe(document, "touchend", a._onDrop), Xe(document, "touchcancel", a._onDrop), i && (i.effectAllowed = "move", d.setData && d.setData.call(a, i, ye)), Je(document, "drop", a), De(ye, "transform", "translateZ(0)")), er = !0, a._dragStartId = po(a._dragStarted.bind(a, r, e)), Je(document, "selectstart", a), br = !0, wr && De(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(e) {
    var r = this.el, a = e.target, i, d, n, l = this.options, o = l.group, s = $e.active, u = eo === o, c = l.sort, f = xt || s, p, h = this, v = !1;
    if (Sa) return;
    function m(X, he) {
      Mt(X, h, dn({
        evt: e,
        isOwner: u,
        axis: p ? "vertical" : "horizontal",
        revert: n,
        dragRect: i,
        targetRect: d,
        canSort: c,
        fromSortable: f,
        target: a,
        completed: y,
        onMove: function(Te, Ie) {
          return ro(st, r, ye, i, Te, lt(Te), e, Ie);
        },
        changed: E
      }, he));
    }
    function g() {
      m("dragOverAnimationCapture"), h.captureAnimationState(), h !== f && f.captureAnimationState();
    }
    function y(X) {
      return m("dragOverCompleted", {
        insertion: X
      }), X && (u ? s._hideClone() : s._showClone(h), h !== f && (ut(ye, xt ? xt.options.ghostClass : s.options.ghostClass, !1), ut(ye, l.ghostClass, !0)), xt !== h && h !== $e.active ? xt = h : h === $e.active && xt && (xt = null), f === h && (h._ignoreWhileAnimating = a), h.animateAll(function() {
        m("dragOverAnimationComplete"), h._ignoreWhileAnimating = null;
      }), h !== f && (f.animateAll(), f._ignoreWhileAnimating = null)), (a === ye && !ye.animated || a === r && !a.animated) && (Zn = null), !l.dragoverBubble && !e.rootEl && a !== document && (ye.parentNode[At]._isOutsideThisEl(e.target), !X && jn(e)), !l.dragoverBubble && e.stopPropagation && e.stopPropagation(), v = !0;
    }
    function E() {
      Vt = ft(ye), Tn = ft(ye, l.draggable), Ct({
        sortable: h,
        name: "change",
        toEl: r,
        newIndex: Vt,
        newDraggableIndex: Tn,
        originalEvent: e
      });
    }
    if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), a = en(a, l.draggable, r, !0), m("dragOver"), $e.eventCanceled) return v;
    if (ye.contains(e.target) || a.animated && a.animatingX && a.animatingY || h._ignoreWhileAnimating === a)
      return y(!1);
    if (Co = !1, s && !l.disabled && (u ? c || (n = ct !== st) : xt === this || (this.lastPutMode = eo.checkPull(this, s, ye, e)) && o.checkPut(this, s, ye, e))) {
      if (p = this._getDirection(e, a) === "vertical", i = lt(ye), m("dragOverValid"), $e.eventCanceled) return v;
      if (n)
        return ct = st, g(), this._hideClone(), m("revert"), $e.eventCanceled || (kn ? st.insertBefore(ye, kn) : st.appendChild(ye)), y(!0);
      var w = Qa(r, l.draggable);
      if (!w || Xp(e, p, this) && !w.animated) {
        if (w === ye)
          return y(!1);
        if (w && r === e.target && (a = w), a && (d = lt(a)), ro(st, r, ye, i, a, d, e, !!a) !== !1)
          return g(), r.appendChild(ye), ct = r, E(), y(!0);
      } else if (w && Kp(e, p, this)) {
        var T = or(r, 0, l, !0);
        if (T === ye)
          return y(!1);
        if (a = T, d = lt(a), ro(st, r, ye, i, a, d, e, !1) !== !1)
          return g(), r.insertBefore(ye, T), ct = r, E(), y(!0);
      } else if (a.parentNode === r) {
        d = lt(a);
        var S = 0, D, L = ye.parentNode !== r, U = !Hp(ye.animated && ye.toRect || i, a.animated && a.toRect || d, p), j = p ? "top" : "left", B = Hi(a, "top", "top") || Hi(ye, "top", "top"), H = B ? B.scrollTop : void 0;
        Zn !== a && (D = d[j], Or = !1, to = !U && l.invertSwap || L), S = Jp(e, a, d, p, U ? 1 : l.swapThreshold, l.invertedSwapThreshold == null ? l.swapThreshold : l.invertedSwapThreshold, to, Zn === a);
        var k;
        if (S !== 0) {
          var z = ft(ye);
          do
            z -= S, k = ct.children[z];
          while (k && (De(k, "display") === "none" || k === Ge));
        }
        if (S === 0 || k === a)
          return y(!1);
        Zn = a, Cr = S;
        var Y = a.nextElementSibling, W = !1;
        W = S === 1;
        var re = ro(st, r, ye, i, a, d, e, W);
        if (re !== !1)
          return (re === 1 || re === -1) && (W = re === 1), Sa = !0, setTimeout(Yp, 30), g(), W && !Y ? r.appendChild(ye) : a.parentNode.insertBefore(ye, W ? Y : a), B && pl(B, 0, H - B.scrollTop), ct = ye.parentNode, D !== void 0 && !to && (ho = Math.abs(D - lt(a)[j])), E(), y(!0);
      }
      if (r.contains(ye))
        return y(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    Xe(document, "mousemove", this._onTouchMove), Xe(document, "touchmove", this._onTouchMove), Xe(document, "pointermove", this._onTouchMove), Xe(document, "dragover", jn), Xe(document, "mousemove", jn), Xe(document, "touchmove", jn);
  },
  _offUpEvents: function() {
    var e = this.el.ownerDocument;
    Xe(e, "mouseup", this._onDrop), Xe(e, "touchend", this._onDrop), Xe(e, "pointerup", this._onDrop), Xe(e, "touchcancel", this._onDrop), Xe(document, "selectstart", this);
  },
  _onDrop: function(e) {
    var r = this.el, a = this.options;
    if (Vt = ft(ye), Tn = ft(ye, a.draggable), Mt("drop", this, {
      evt: e
    }), ct = ye && ye.parentNode, Vt = ft(ye), Tn = ft(ye, a.draggable), $e.eventCanceled) {
      this._nulling();
      return;
    }
    er = !1, to = !1, Or = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Ea(this.cloneId), Ea(this._dragStartId), this.nativeDraggable && (Xe(document, "drop", this), Xe(r, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), wr && De(document.body, "user-select", ""), De(ye, "transform", ""), e && (br && (e.cancelable && e.preventDefault(), !a.dropBubble && e.stopPropagation()), Ge && Ge.parentNode && Ge.parentNode.removeChild(Ge), (st === ct || xt && xt.lastPutMode !== "clone") && dt && dt.parentNode && dt.parentNode.removeChild(dt), ye && (this.nativeDraggable && Xe(ye, "dragend", this), la(ye), ye.style["will-change"] = "", br && !er && ut(ye, xt ? xt.options.ghostClass : this.options.ghostClass, !1), ut(ye, this.options.chosenClass, !1), Ct({
      sortable: this,
      name: "unchoose",
      toEl: ct,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: e
    }), st !== ct ? (Vt >= 0 && (Ct({
      rootEl: ct,
      name: "add",
      toEl: ct,
      fromEl: st,
      originalEvent: e
    }), Ct({
      sortable: this,
      name: "remove",
      toEl: ct,
      originalEvent: e
    }), Ct({
      rootEl: ct,
      name: "sort",
      toEl: ct,
      fromEl: st,
      originalEvent: e
    }), Ct({
      sortable: this,
      name: "sort",
      toEl: ct,
      originalEvent: e
    })), xt && xt.save()) : Vt !== nr && Vt >= 0 && (Ct({
      sortable: this,
      name: "update",
      toEl: ct,
      originalEvent: e
    }), Ct({
      sortable: this,
      name: "sort",
      toEl: ct,
      originalEvent: e
    })), $e.active && ((Vt == null || Vt === -1) && (Vt = nr, Tn = Ar), Ct({
      sortable: this,
      name: "end",
      toEl: ct,
      originalEvent: e
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    Mt("nulling", this), st = ye = ct = Ge = kn = dt = fo = An = Nn = Zt = br = Vt = Tn = nr = Ar = Zn = Cr = xt = eo = $e.dragged = $e.ghost = $e.clone = $e.active = null, Po.forEach(function(e) {
      e.checked = !0;
    }), Po.length = aa = ia = 0;
  },
  handleEvent: function(e) {
    switch (e.type) {
      case "drop":
      case "dragend":
        this._onDrop(e);
        break;
      case "dragenter":
      case "dragover":
        ye && (this._onDragOver(e), Wp(e));
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
    for (var e = [], r, a = this.el.children, i = 0, d = a.length, n = this.options; i < d; i++)
      r = a[i], en(r, n.draggable, this.el, !1) && e.push(r.getAttribute(n.dataIdAttr) || Zp(r));
    return e;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(e, r) {
    var a = {}, i = this.el;
    this.toArray().forEach(function(d, n) {
      var l = i.children[n];
      en(l, this.options.draggable, i, !1) && (a[d] = l);
    }, this), r && this.captureAnimationState(), e.forEach(function(d) {
      a[d] && (i.removeChild(a[d]), i.appendChild(a[d]));
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
    return en(e, r || this.options.draggable, this.el, !1);
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
    var i = Ur.modifyOption(this, e, r);
    typeof i < "u" ? a[e] = i : a[e] = r, e === "group" && gl(a);
  },
  /**
   * Destroy
   */
  destroy: function() {
    Mt("destroy", this);
    var e = this.el;
    e[At] = null, Xe(e, "mousedown", this._onTapStart), Xe(e, "touchstart", this._onTapStart), Xe(e, "pointerdown", this._onTapStart), this.nativeDraggable && (Xe(e, "dragover", this), Xe(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(r) {
      r.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Oo.splice(Oo.indexOf(this.el), 1), this.el = e = null;
  },
  _hideClone: function() {
    if (!An) {
      if (Mt("hideClone", this), $e.eventCanceled) return;
      De(dt, "display", "none"), this.options.removeCloneOnHide && dt.parentNode && dt.parentNode.removeChild(dt), An = !0;
    }
  },
  _showClone: function(e) {
    if (e.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (An) {
      if (Mt("showClone", this), $e.eventCanceled) return;
      ye.parentNode == st && !this.options.group.revertClone ? st.insertBefore(dt, ye) : kn ? st.insertBefore(dt, kn) : st.appendChild(dt), this.options.group.revertClone && this.animate(ye, dt), De(dt, "display", ""), An = !1;
    }
  }
};
function Wp(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function ro(t, e, r, a, i, d, n, l) {
  var o, s = t[At], u = s.options.onMove, c;
  return window.CustomEvent && !wn && !Lr ? o = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (o = document.createEvent("Event"), o.initEvent("move", !0, !0)), o.to = e, o.from = t, o.dragged = r, o.draggedRect = a, o.related = i || e, o.relatedRect = d || lt(e), o.willInsertAfter = l, o.originalEvent = n, t.dispatchEvent(o), u && (c = u.call(s, o, n)), c;
}
function la(t) {
  t.draggable = !1;
}
function Yp() {
  Sa = !1;
}
function Kp(t, e, r) {
  var a = lt(or(r.el, 0, r.options, !0)), i = 10;
  return e ? t.clientX < a.left - i || t.clientY < a.top && t.clientX < a.right : t.clientY < a.top - i || t.clientY < a.bottom && t.clientX < a.left;
}
function Xp(t, e, r) {
  var a = lt(Qa(r.el, r.options.draggable)), i = 10;
  return e ? t.clientX > a.right + i || t.clientX <= a.right && t.clientY > a.bottom && t.clientX >= a.left : t.clientX > a.right && t.clientY > a.top || t.clientX <= a.right && t.clientY > a.bottom + i;
}
function Jp(t, e, r, a, i, d, n, l) {
  var o = a ? t.clientY : t.clientX, s = a ? r.height : r.width, u = a ? r.top : r.left, c = a ? r.bottom : r.right, f = !1;
  if (!n) {
    if (l && ho < s * i) {
      if (!Or && (Cr === 1 ? o > u + s * d / 2 : o < c - s * d / 2) && (Or = !0), Or)
        f = !0;
      else if (Cr === 1 ? o < u + ho : o > c - ho)
        return -Cr;
    } else if (o > u + s * (1 - i) / 2 && o < c - s * (1 - i) / 2)
      return Qp(e);
  }
  return f = f || n, f && (o < u + s * d / 2 || o > c - s * d / 2) ? o > u + s / 2 ? 1 : -1 : 0;
}
function Qp(t) {
  return ft(ye) < ft(t) ? 1 : -1;
}
function Zp(t) {
  for (var e = t.tagName + t.className + t.src + t.href + t.textContent, r = e.length, a = 0; r--; )
    a += e.charCodeAt(r);
  return a.toString(36);
}
function qp(t) {
  Po.length = 0;
  for (var e = t.getElementsByTagName("input"), r = e.length; r--; ) {
    var a = e[r];
    a.checked && Po.push(a);
  }
}
function po(t) {
  return setTimeout(t, 0);
}
function Ea(t) {
  return clearTimeout(t);
}
Wo && Je(document, "touchmove", function(t) {
  ($e.active || er) && t.cancelable && t.preventDefault();
});
$e.utils = {
  on: Je,
  off: Xe,
  css: De,
  find: fl,
  is: function(e, r) {
    return !!en(e, r, e, !1);
  },
  extend: Up,
  throttle: hl,
  closest: en,
  toggleClass: ut,
  clone: Za,
  index: ft,
  nextTick: po,
  cancelNextTick: Ea,
  detectDirection: ml,
  getChild: or
};
$e.get = function(t) {
  return t[At];
};
$e.mount = function() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  e[0].constructor === Array && (e = e[0]), e.forEach(function(a) {
    if (!a.prototype || !a.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(a));
    a.utils && ($e.utils = dn(dn({}, $e.utils), a.utils)), Ur.mount(a);
  });
};
$e.create = function(t, e) {
  return new $e(t, e);
};
$e.version = Dp;
var vt = [], xr, wa, Ta = !1, ua, ca, Ro, Sr;
function _p() {
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
      this.sortable.nativeDraggable ? Xe(document, "dragover", this._handleAutoScroll) : (Xe(document, "pointermove", this._handleFallbackAutoScroll), Xe(document, "touchmove", this._handleFallbackAutoScroll), Xe(document, "mousemove", this._handleFallbackAutoScroll)), Xi(), vo(), Np();
    },
    nulling: function() {
      Ro = wa = xr = Ta = Sr = ua = ca = null, vt.length = 0;
    },
    _handleFallbackAutoScroll: function(r) {
      this._handleAutoScroll(r, !0);
    },
    _handleAutoScroll: function(r, a) {
      var i = this, d = (r.touches ? r.touches[0] : r).clientX, n = (r.touches ? r.touches[0] : r).clientY, l = document.elementFromPoint(d, n);
      if (Ro = r, a || this.options.forceAutoScrollFallback || Lr || wn || wr) {
        da(r, this.options, l, a);
        var o = On(l, !0);
        Ta && (!Sr || d !== ua || n !== ca) && (Sr && Xi(), Sr = setInterval(function() {
          var s = On(document.elementFromPoint(d, n), !0);
          s !== o && (o = s, vo()), da(r, i.options, s, a);
        }, 10), ua = d, ca = n);
      } else {
        if (!this.options.bubbleScroll || On(l, !0) === cn()) {
          vo();
          return;
        }
        da(r, this.options, On(l, !1), !1);
      }
    }
  }, Jt(t, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function vo() {
  vt.forEach(function(t) {
    clearInterval(t.pid);
  }), vt = [];
}
function Xi() {
  clearInterval(Sr);
}
var da = hl(function(t, e, r, a) {
  if (e.scroll) {
    var i = (t.touches ? t.touches[0] : t).clientX, d = (t.touches ? t.touches[0] : t).clientY, n = e.scrollSensitivity, l = e.scrollSpeed, o = cn(), s = !1, u;
    wa !== r && (wa = r, vo(), xr = e.scroll, u = e.scrollFn, xr === !0 && (xr = On(r, !0)));
    var c = 0, f = xr;
    do {
      var p = f, h = lt(p), v = h.top, m = h.bottom, g = h.left, y = h.right, E = h.width, w = h.height, T = void 0, S = void 0, D = p.scrollWidth, L = p.scrollHeight, U = De(p), j = p.scrollLeft, B = p.scrollTop;
      p === o ? (T = E < D && (U.overflowX === "auto" || U.overflowX === "scroll" || U.overflowX === "visible"), S = w < L && (U.overflowY === "auto" || U.overflowY === "scroll" || U.overflowY === "visible")) : (T = E < D && (U.overflowX === "auto" || U.overflowX === "scroll"), S = w < L && (U.overflowY === "auto" || U.overflowY === "scroll"));
      var H = T && (Math.abs(y - i) <= n && j + E < D) - (Math.abs(g - i) <= n && !!j), k = S && (Math.abs(m - d) <= n && B + w < L) - (Math.abs(v - d) <= n && !!B);
      if (!vt[c])
        for (var z = 0; z <= c; z++)
          vt[z] || (vt[z] = {});
      (vt[c].vx != H || vt[c].vy != k || vt[c].el !== p) && (vt[c].el = p, vt[c].vx = H, vt[c].vy = k, clearInterval(vt[c].pid), (H != 0 || k != 0) && (s = !0, vt[c].pid = setInterval((function() {
        a && this.layer === 0 && $e.active._onTouchMove(Ro);
        var Y = vt[this.layer].vy ? vt[this.layer].vy * l : 0, W = vt[this.layer].vx ? vt[this.layer].vx * l : 0;
        typeof u == "function" && u.call($e.dragged.parentNode[At], W, Y, t, Ro, vt[this.layer].el) !== "continue" || pl(vt[this.layer].el, W, Y);
      }).bind({
        layer: c
      }), 24))), c++;
    } while (e.bubbleScroll && f !== o && (f = On(f, !1)));
    Ta = s;
  }
}, 30), xl = function(e) {
  var r = e.originalEvent, a = e.putSortable, i = e.dragEl, d = e.activeSortable, n = e.dispatchSortableEvent, l = e.hideGhostForTarget, o = e.unhideGhostForTarget;
  if (r) {
    var s = a || d;
    l();
    var u = r.changedTouches && r.changedTouches.length ? r.changedTouches[0] : r, c = document.elementFromPoint(u.clientX, u.clientY);
    o(), s && !s.el.contains(c) && (n("spill"), this.onSpill({
      dragEl: i,
      putSortable: a
    }));
  }
};
function qa() {
}
qa.prototype = {
  startIndex: null,
  dragStart: function(e) {
    var r = e.oldDraggableIndex;
    this.startIndex = r;
  },
  onSpill: function(e) {
    var r = e.dragEl, a = e.putSortable;
    this.sortable.captureAnimationState(), a && a.captureAnimationState();
    var i = or(this.sortable.el, this.startIndex, this.options);
    i ? this.sortable.el.insertBefore(r, i) : this.sortable.el.appendChild(r), this.sortable.animateAll(), a && a.animateAll();
  },
  drop: xl
};
Jt(qa, {
  pluginName: "revertOnSpill"
});
function _a() {
}
_a.prototype = {
  onSpill: function(e) {
    var r = e.dragEl, a = e.putSortable, i = a || this.sortable;
    i.captureAnimationState(), r.parentNode && r.parentNode.removeChild(r), i.animateAll();
  },
  drop: xl
};
Jt(_a, {
  pluginName: "removeOnSpill"
});
var Yt;
function ev() {
  function t() {
    this.defaults = {
      swapClass: "sortable-swap-highlight"
    };
  }
  return t.prototype = {
    dragStart: function(r) {
      var a = r.dragEl;
      Yt = a;
    },
    dragOverValid: function(r) {
      var a = r.completed, i = r.target, d = r.onMove, n = r.activeSortable, l = r.changed, o = r.cancel;
      if (n.options.swap) {
        var s = this.sortable.el, u = this.options;
        if (i && i !== s) {
          var c = Yt;
          d(i) !== !1 ? (ut(i, u.swapClass, !0), Yt = i) : Yt = null, c && c !== Yt && ut(c, u.swapClass, !1);
        }
        l(), a(!0), o();
      }
    },
    drop: function(r) {
      var a = r.activeSortable, i = r.putSortable, d = r.dragEl, n = i || this.sortable, l = this.options;
      Yt && ut(Yt, l.swapClass, !1), Yt && (l.swap || i && i.options.swap) && d !== Yt && (n.captureAnimationState(), n !== a && a.captureAnimationState(), tv(d, Yt), n.animateAll(), n !== a && a.animateAll());
    },
    nulling: function() {
      Yt = null;
    }
  }, Jt(t, {
    pluginName: "swap",
    eventProperties: function() {
      return {
        swapItem: Yt
      };
    }
  });
}
function tv(t, e) {
  var r = t.parentNode, a = e.parentNode, i, d;
  !r || !a || r.isEqualNode(e) || a.isEqualNode(t) || (i = ft(t), d = ft(e), r.isEqualNode(a) && i < d && d++, r.insertBefore(e, r.children[i]), a.insertBefore(t, a.children[d]));
}
var ze = [], $t = [], hr, qt, pr = !1, Lt = !1, qn = !1, ot, vr, oo;
function nv() {
  function t(e) {
    for (var r in this)
      r.charAt(0) === "_" && typeof this[r] == "function" && (this[r] = this[r].bind(this));
    e.options.supportPointer ? Je(document, "pointerup", this._deselectMultiDrag) : (Je(document, "mouseup", this._deselectMultiDrag), Je(document, "touchend", this._deselectMultiDrag)), Je(document, "keydown", this._checkKeyDown), Je(document, "keyup", this._checkKeyUp), this.defaults = {
      selectedClass: "sortable-selected",
      multiDragKey: null,
      setData: function(i, d) {
        var n = "";
        ze.length && qt === e ? ze.forEach(function(l, o) {
          n += (o ? ", " : "") + l.textContent;
        }) : n = d.textContent, i.setData("Text", n);
      }
    };
  }
  return t.prototype = {
    multiDragKeyDown: !1,
    isMultiDrag: !1,
    delayStartGlobal: function(r) {
      var a = r.dragEl;
      ot = a;
    },
    delayEnded: function() {
      this.isMultiDrag = ~ze.indexOf(ot);
    },
    setupClone: function(r) {
      var a = r.sortable, i = r.cancel;
      if (this.isMultiDrag) {
        for (var d = 0; d < ze.length; d++)
          $t.push(Za(ze[d])), $t[d].sortableIndex = ze[d].sortableIndex, $t[d].draggable = !1, $t[d].style["will-change"] = "", ut($t[d], this.options.selectedClass, !1), ze[d] === ot && ut($t[d], this.options.chosenClass, !1);
        a._hideClone(), i();
      }
    },
    clone: function(r) {
      var a = r.sortable, i = r.rootEl, d = r.dispatchSortableEvent, n = r.cancel;
      this.isMultiDrag && (this.options.removeCloneOnHide || ze.length && qt === a && (Ji(!0, i), d("clone"), n()));
    },
    showClone: function(r) {
      var a = r.cloneNowShown, i = r.rootEl, d = r.cancel;
      this.isMultiDrag && (Ji(!1, i), $t.forEach(function(n) {
        De(n, "display", "");
      }), a(), oo = !1, d());
    },
    hideClone: function(r) {
      var a = this;
      r.sortable;
      var i = r.cloneNowHidden, d = r.cancel;
      this.isMultiDrag && ($t.forEach(function(n) {
        De(n, "display", "none"), a.options.removeCloneOnHide && n.parentNode && n.parentNode.removeChild(n);
      }), i(), oo = !0, d());
    },
    dragStartGlobal: function(r) {
      r.sortable, !this.isMultiDrag && qt && qt.multiDrag._deselectMultiDrag(), ze.forEach(function(a) {
        a.sortableIndex = ft(a);
      }), ze = ze.sort(function(a, i) {
        return a.sortableIndex - i.sortableIndex;
      }), qn = !0;
    },
    dragStarted: function(r) {
      var a = this, i = r.sortable;
      if (this.isMultiDrag) {
        if (this.options.sort && (i.captureAnimationState(), this.options.animation)) {
          ze.forEach(function(n) {
            n !== ot && De(n, "position", "absolute");
          });
          var d = lt(ot, !1, !0, !0);
          ze.forEach(function(n) {
            n !== ot && Gi(n, d);
          }), Lt = !0, pr = !0;
        }
        i.animateAll(function() {
          Lt = !1, pr = !1, a.options.animation && ze.forEach(function(n) {
            ra(n);
          }), a.options.sort && ao();
        });
      }
    },
    dragOver: function(r) {
      var a = r.target, i = r.completed, d = r.cancel;
      Lt && ~ze.indexOf(a) && (i(!1), d());
    },
    revert: function(r) {
      var a = r.fromSortable, i = r.rootEl, d = r.sortable, n = r.dragRect;
      ze.length > 1 && (ze.forEach(function(l) {
        d.addAnimationState({
          target: l,
          rect: Lt ? lt(l) : n
        }), ra(l), l.fromRect = n, a.removeAnimationState(l);
      }), Lt = !1, rv(!this.options.removeCloneOnHide, i));
    },
    dragOverCompleted: function(r) {
      var a = r.sortable, i = r.isOwner, d = r.insertion, n = r.activeSortable, l = r.parentEl, o = r.putSortable, s = this.options;
      if (d) {
        if (i && n._hideClone(), pr = !1, s.animation && ze.length > 1 && (Lt || !i && !n.options.sort && !o)) {
          var u = lt(ot, !1, !0, !0);
          ze.forEach(function(f) {
            f !== ot && (Gi(f, u), l.appendChild(f));
          }), Lt = !0;
        }
        if (!i)
          if (Lt || ao(), ze.length > 1) {
            var c = oo;
            n._showClone(a), n.options.animation && !oo && c && $t.forEach(function(f) {
              n.addAnimationState({
                target: f,
                rect: vr
              }), f.fromRect = vr, f.thisAnimationDuration = null;
            });
          } else
            n._showClone(a);
      }
    },
    dragOverAnimationCapture: function(r) {
      var a = r.dragRect, i = r.isOwner, d = r.activeSortable;
      if (ze.forEach(function(l) {
        l.thisAnimationDuration = null;
      }), d.options.animation && !i && d.multiDrag.isMultiDrag) {
        vr = Jt({}, a);
        var n = Gn(ot, !0);
        vr.top -= n.f, vr.left -= n.e;
      }
    },
    dragOverAnimationComplete: function() {
      Lt && (Lt = !1, ao());
    },
    drop: function(r) {
      var a = r.originalEvent, i = r.rootEl, d = r.parentEl, n = r.sortable, l = r.dispatchSortableEvent, o = r.oldIndex, s = r.putSortable, u = s || this.sortable;
      if (a) {
        var c = this.options, f = d.children;
        if (!qn)
          if (c.multiDragKey && !this.multiDragKeyDown && this._deselectMultiDrag(), ut(ot, c.selectedClass, !~ze.indexOf(ot)), ~ze.indexOf(ot))
            ze.splice(ze.indexOf(ot), 1), hr = null, yr({
              sortable: n,
              rootEl: i,
              name: "deselect",
              targetEl: ot
            });
          else {
            if (ze.push(ot), yr({
              sortable: n,
              rootEl: i,
              name: "select",
              targetEl: ot
            }), a.shiftKey && hr && n.el.contains(hr)) {
              var p = ft(hr), h = ft(ot);
              if (~p && ~h && p !== h) {
                var v, m;
                for (h > p ? (m = p, v = h) : (m = h, v = p + 1); m < v; m++)
                  ~ze.indexOf(f[m]) || (ut(f[m], c.selectedClass, !0), ze.push(f[m]), yr({
                    sortable: n,
                    rootEl: i,
                    name: "select",
                    targetEl: f[m]
                  }));
              }
            } else
              hr = ot;
            qt = u;
          }
        if (qn && this.isMultiDrag) {
          if (Lt = !1, (d[At].options.sort || d !== i) && ze.length > 1) {
            var g = lt(ot), y = ft(ot, ":not(." + this.options.selectedClass + ")");
            if (!pr && c.animation && (ot.thisAnimationDuration = null), u.captureAnimationState(), !pr && (c.animation && (ot.fromRect = g, ze.forEach(function(w) {
              if (w.thisAnimationDuration = null, w !== ot) {
                var T = Lt ? lt(w) : g;
                w.fromRect = T, u.addAnimationState({
                  target: w,
                  rect: T
                });
              }
            })), ao(), ze.forEach(function(w) {
              f[y] ? d.insertBefore(w, f[y]) : d.appendChild(w), y++;
            }), o === ft(ot))) {
              var E = !1;
              ze.forEach(function(w) {
                if (w.sortableIndex !== ft(w)) {
                  E = !0;
                  return;
                }
              }), E && l("update");
            }
            ze.forEach(function(w) {
              ra(w);
            }), u.animateAll();
          }
          qt = u;
        }
        (i === d || s && s.lastPutMode !== "clone") && $t.forEach(function(w) {
          w.parentNode && w.parentNode.removeChild(w);
        });
      }
    },
    nullingGlobal: function() {
      this.isMultiDrag = qn = !1, $t.length = 0;
    },
    destroyGlobal: function() {
      this._deselectMultiDrag(), Xe(document, "pointerup", this._deselectMultiDrag), Xe(document, "mouseup", this._deselectMultiDrag), Xe(document, "touchend", this._deselectMultiDrag), Xe(document, "keydown", this._checkKeyDown), Xe(document, "keyup", this._checkKeyUp);
    },
    _deselectMultiDrag: function(r) {
      if (!(typeof qn < "u" && qn) && qt === this.sortable && !(r && en(r.target, this.options.draggable, this.sortable.el, !1)) && !(r && r.button !== 0))
        for (; ze.length; ) {
          var a = ze[0];
          ut(a, this.options.selectedClass, !1), ze.shift(), yr({
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
  }, Jt(t, {
    // Static methods & properties
    pluginName: "multiDrag",
    utils: {
      /**
       * Selects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be selected
       */
      select: function(r) {
        var a = r.parentNode[At];
        !a || !a.options.multiDrag || ~ze.indexOf(r) || (qt && qt !== a && (qt.multiDrag._deselectMultiDrag(), qt = a), ut(r, a.options.selectedClass, !0), ze.push(r));
      },
      /**
       * Deselects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be deselected
       */
      deselect: function(r) {
        var a = r.parentNode[At], i = ze.indexOf(r);
        !a || !a.options.multiDrag || !~i || (ut(r, a.options.selectedClass, !1), ze.splice(i, 1));
      }
    },
    eventProperties: function() {
      var r = this, a = [], i = [];
      return ze.forEach(function(d) {
        a.push({
          multiDragElement: d,
          index: d.sortableIndex
        });
        var n;
        Lt && d !== ot ? n = -1 : Lt ? n = ft(d, ":not(." + r.options.selectedClass + ")") : n = ft(d), i.push({
          multiDragElement: d,
          index: n
        });
      }), {
        items: Cp(ze),
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
function rv(t, e) {
  ze.forEach(function(r, a) {
    var i = e.children[r.sortableIndex + (t ? Number(a) : 0)];
    i ? e.insertBefore(r, i) : e.appendChild(r);
  });
}
function Ji(t, e) {
  $t.forEach(function(r, a) {
    var i = e.children[r.sortableIndex + (t ? Number(a) : 0)];
    i ? e.insertBefore(r, i) : e.appendChild(r);
  });
}
function ao() {
  ze.forEach(function(t) {
    t !== ot && t.parentNode && t.parentNode.removeChild(t);
  });
}
$e.mount(new _p());
$e.mount(_a, qa);
const ov = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MultiDrag: nv,
  Sortable: $e,
  Swap: ev,
  default: $e
}, Symbol.toStringTag, { value: "Module" })), av = /* @__PURE__ */ Os(ov);
var iv = uo.exports, Qi;
function sv() {
  return Qi || (Qi = 1, function(t, e) {
    (function(a, i) {
      t.exports = i(Ep, av);
    })(typeof self < "u" ? self : iv, function(r, a) {
      return (
        /******/
        function(i) {
          var d = {};
          function n(l) {
            if (d[l])
              return d[l].exports;
            var o = d[l] = {
              /******/
              i: l,
              /******/
              l: !1,
              /******/
              exports: {}
              /******/
            };
            return i[l].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
          }
          return n.m = i, n.c = d, n.d = function(l, o, s) {
            n.o(l, o) || Object.defineProperty(l, o, { enumerable: !0, get: s });
          }, n.r = function(l) {
            typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(l, "__esModule", { value: !0 });
          }, n.t = function(l, o) {
            if (o & 1 && (l = n(l)), o & 8 || o & 4 && typeof l == "object" && l && l.__esModule) return l;
            var s = /* @__PURE__ */ Object.create(null);
            if (n.r(s), Object.defineProperty(s, "default", { enumerable: !0, value: l }), o & 2 && typeof l != "string") for (var u in l) n.d(s, u, (function(c) {
              return l[c];
            }).bind(null, u));
            return s;
          }, n.n = function(l) {
            var o = l && l.__esModule ? (
              /******/
              function() {
                return l.default;
              }
            ) : (
              /******/
              function() {
                return l;
              }
            );
            return n.d(o, "a", o), o;
          }, n.o = function(l, o) {
            return Object.prototype.hasOwnProperty.call(l, o);
          }, n.p = "", n(n.s = "fb15");
        }({
          /***/
          "00ee": (
            /***/
            function(i, d, n) {
              var l = n("b622"), o = l("toStringTag"), s = {};
              s[o] = "z", i.exports = String(s) === "[object z]";
            }
          ),
          /***/
          "0366": (
            /***/
            function(i, d, n) {
              var l = n("1c0b");
              i.exports = function(o, s, u) {
                if (l(o), s === void 0) return o;
                switch (u) {
                  case 0:
                    return function() {
                      return o.call(s);
                    };
                  case 1:
                    return function(c) {
                      return o.call(s, c);
                    };
                  case 2:
                    return function(c, f) {
                      return o.call(s, c, f);
                    };
                  case 3:
                    return function(c, f, p) {
                      return o.call(s, c, f, p);
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
            function(i, d, n) {
              var l = n("fc6a"), o = n("241c").f, s = {}.toString, u = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], c = function(f) {
                try {
                  return o(f);
                } catch {
                  return u.slice();
                }
              };
              i.exports.f = function(p) {
                return u && s.call(p) == "[object Window]" ? c(p) : o(l(p));
              };
            }
          ),
          /***/
          "06cf": (
            /***/
            function(i, d, n) {
              var l = n("83ab"), o = n("d1e7"), s = n("5c6c"), u = n("fc6a"), c = n("c04e"), f = n("5135"), p = n("0cfb"), h = Object.getOwnPropertyDescriptor;
              d.f = l ? h : function(m, g) {
                if (m = u(m), g = c(g, !0), p) try {
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
            function(i, d, n) {
              var l = n("83ab"), o = n("d039"), s = n("cc12");
              i.exports = !l && !o(function() {
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
            function(i, d, n) {
              var l = n("23e7"), o = n("d58f").left, s = n("a640"), u = n("ae40"), c = s("reduce"), f = u("reduce", { 1: 0 });
              l({ target: "Array", proto: !0, forced: !c || !f }, {
                reduce: function(h) {
                  return o(this, h, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
                }
              });
            }
          ),
          /***/
          "14c3": (
            /***/
            function(i, d, n) {
              var l = n("c6b6"), o = n("9263");
              i.exports = function(s, u) {
                var c = s.exec;
                if (typeof c == "function") {
                  var f = c.call(s, u);
                  if (typeof f != "object")
                    throw TypeError("RegExp exec method returned something other than an Object or null");
                  return f;
                }
                if (l(s) !== "RegExp")
                  throw TypeError("RegExp#exec called on incompatible receiver");
                return o.call(s, u);
              };
            }
          ),
          /***/
          "159b": (
            /***/
            function(i, d, n) {
              var l = n("da84"), o = n("fdbc"), s = n("17c2"), u = n("9112");
              for (var c in o) {
                var f = l[c], p = f && f.prototype;
                if (p && p.forEach !== s) try {
                  u(p, "forEach", s);
                } catch {
                  p.forEach = s;
                }
              }
            }
          ),
          /***/
          "17c2": (
            /***/
            function(i, d, n) {
              var l = n("b727").forEach, o = n("a640"), s = n("ae40"), u = o("forEach"), c = s("forEach");
              i.exports = !u || !c ? function(p) {
                return l(this, p, arguments.length > 1 ? arguments[1] : void 0);
              } : [].forEach;
            }
          ),
          /***/
          "1be4": (
            /***/
            function(i, d, n) {
              var l = n("d066");
              i.exports = l("document", "documentElement");
            }
          ),
          /***/
          "1c0b": (
            /***/
            function(i, d) {
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
            function(i, d, n) {
              var l = n("b622"), o = l("iterator"), s = !1;
              try {
                var u = 0, c = {
                  next: function() {
                    return { done: !!u++ };
                  },
                  return: function() {
                    s = !0;
                  }
                };
                c[o] = function() {
                  return this;
                }, Array.from(c, function() {
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
            function(i, d) {
              i.exports = function(n) {
                if (n == null) throw TypeError("Can't call method on " + n);
                return n;
              };
            }
          ),
          /***/
          "1dde": (
            /***/
            function(i, d, n) {
              var l = n("d039"), o = n("b622"), s = n("2d00"), u = o("species");
              i.exports = function(c) {
                return s >= 51 || !l(function() {
                  var f = [], p = f.constructor = {};
                  return p[u] = function() {
                    return { foo: 1 };
                  }, f[c](Boolean).foo !== 1;
                });
              };
            }
          ),
          /***/
          "23cb": (
            /***/
            function(i, d, n) {
              var l = n("a691"), o = Math.max, s = Math.min;
              i.exports = function(u, c) {
                var f = l(u);
                return f < 0 ? o(f + c, 0) : s(f, c);
              };
            }
          ),
          /***/
          "23e7": (
            /***/
            function(i, d, n) {
              var l = n("da84"), o = n("06cf").f, s = n("9112"), u = n("6eeb"), c = n("ce4e"), f = n("e893"), p = n("94ca");
              i.exports = function(h, v) {
                var m = h.target, g = h.global, y = h.stat, E, w, T, S, D, L;
                if (g ? w = l : y ? w = l[m] || c(m, {}) : w = (l[m] || {}).prototype, w) for (T in v) {
                  if (D = v[T], h.noTargetGet ? (L = o(w, T), S = L && L.value) : S = w[T], E = p(g ? T : m + (y ? "." : "#") + T, h.forced), !E && S !== void 0) {
                    if (typeof D == typeof S) continue;
                    f(D, S);
                  }
                  (h.sham || S && S.sham) && s(D, "sham", !0), u(w, T, D, h);
                }
              };
            }
          ),
          /***/
          "241c": (
            /***/
            function(i, d, n) {
              var l = n("ca84"), o = n("7839"), s = o.concat("length", "prototype");
              d.f = Object.getOwnPropertyNames || function(c) {
                return l(c, s);
              };
            }
          ),
          /***/
          "25f0": (
            /***/
            function(i, d, n) {
              var l = n("6eeb"), o = n("825a"), s = n("d039"), u = n("ad6d"), c = "toString", f = RegExp.prototype, p = f[c], h = s(function() {
                return p.call({ source: "a", flags: "b" }) != "/a/b";
              }), v = p.name != c;
              (h || v) && l(RegExp.prototype, c, function() {
                var g = o(this), y = String(g.source), E = g.flags, w = String(E === void 0 && g instanceof RegExp && !("flags" in f) ? u.call(g) : E);
                return "/" + y + "/" + w;
              }, { unsafe: !0 });
            }
          ),
          /***/
          "2ca0": (
            /***/
            function(i, d, n) {
              var l = n("23e7"), o = n("06cf").f, s = n("50c4"), u = n("5a34"), c = n("1d80"), f = n("ab13"), p = n("c430"), h = "".startsWith, v = Math.min, m = f("startsWith"), g = !p && !m && !!function() {
                var y = o(String.prototype, "startsWith");
                return y && !y.writable;
              }();
              l({ target: "String", proto: !0, forced: !g && !m }, {
                startsWith: function(E) {
                  var w = String(c(this));
                  u(E);
                  var T = s(v(arguments.length > 1 ? arguments[1] : void 0, w.length)), S = String(E);
                  return h ? h.call(w, S, T) : w.slice(T, T + S.length) === S;
                }
              });
            }
          ),
          /***/
          "2d00": (
            /***/
            function(i, d, n) {
              var l = n("da84"), o = n("342f"), s = l.process, u = s && s.versions, c = u && u.v8, f, p;
              c ? (f = c.split("."), p = f[0] + f[1]) : o && (f = o.match(/Edge\/(\d+)/), (!f || f[1] >= 74) && (f = o.match(/Chrome\/(\d+)/), f && (p = f[1]))), i.exports = p && +p;
            }
          ),
          /***/
          "342f": (
            /***/
            function(i, d, n) {
              var l = n("d066");
              i.exports = l("navigator", "userAgent") || "";
            }
          ),
          /***/
          "35a1": (
            /***/
            function(i, d, n) {
              var l = n("f5df"), o = n("3f8c"), s = n("b622"), u = s("iterator");
              i.exports = function(c) {
                if (c != null) return c[u] || c["@@iterator"] || o[l(c)];
              };
            }
          ),
          /***/
          "37e8": (
            /***/
            function(i, d, n) {
              var l = n("83ab"), o = n("9bf2"), s = n("825a"), u = n("df75");
              i.exports = l ? Object.defineProperties : function(f, p) {
                s(f);
                for (var h = u(p), v = h.length, m = 0, g; v > m; ) o.f(f, g = h[m++], p[g]);
                return f;
              };
            }
          ),
          /***/
          "3bbe": (
            /***/
            function(i, d, n) {
              var l = n("861d");
              i.exports = function(o) {
                if (!l(o) && o !== null)
                  throw TypeError("Can't set " + String(o) + " as a prototype");
                return o;
              };
            }
          ),
          /***/
          "3ca3": (
            /***/
            function(i, d, n) {
              var l = n("6547").charAt, o = n("69f3"), s = n("7dd0"), u = "String Iterator", c = o.set, f = o.getterFor(u);
              s(String, "String", function(p) {
                c(this, {
                  type: u,
                  string: String(p),
                  index: 0
                });
              }, function() {
                var h = f(this), v = h.string, m = h.index, g;
                return m >= v.length ? { value: void 0, done: !0 } : (g = l(v, m), h.index += g.length, { value: g, done: !1 });
              });
            }
          ),
          /***/
          "3f8c": (
            /***/
            function(i, d) {
              i.exports = {};
            }
          ),
          /***/
          4160: (
            /***/
            function(i, d, n) {
              var l = n("23e7"), o = n("17c2");
              l({ target: "Array", proto: !0, forced: [].forEach != o }, {
                forEach: o
              });
            }
          ),
          /***/
          "428f": (
            /***/
            function(i, d, n) {
              var l = n("da84");
              i.exports = l;
            }
          ),
          /***/
          "44ad": (
            /***/
            function(i, d, n) {
              var l = n("d039"), o = n("c6b6"), s = "".split;
              i.exports = l(function() {
                return !Object("z").propertyIsEnumerable(0);
              }) ? function(u) {
                return o(u) == "String" ? s.call(u, "") : Object(u);
              } : Object;
            }
          ),
          /***/
          "44d2": (
            /***/
            function(i, d, n) {
              var l = n("b622"), o = n("7c73"), s = n("9bf2"), u = l("unscopables"), c = Array.prototype;
              c[u] == null && s.f(c, u, {
                configurable: !0,
                value: o(null)
              }), i.exports = function(f) {
                c[u][f] = !0;
              };
            }
          ),
          /***/
          "44e7": (
            /***/
            function(i, d, n) {
              var l = n("861d"), o = n("c6b6"), s = n("b622"), u = s("match");
              i.exports = function(c) {
                var f;
                return l(c) && ((f = c[u]) !== void 0 ? !!f : o(c) == "RegExp");
              };
            }
          ),
          /***/
          4930: (
            /***/
            function(i, d, n) {
              var l = n("d039");
              i.exports = !!Object.getOwnPropertySymbols && !l(function() {
                return !String(Symbol());
              });
            }
          ),
          /***/
          "4d64": (
            /***/
            function(i, d, n) {
              var l = n("fc6a"), o = n("50c4"), s = n("23cb"), u = function(c) {
                return function(f, p, h) {
                  var v = l(f), m = o(v.length), g = s(h, m), y;
                  if (c && p != p) {
                    for (; m > g; )
                      if (y = v[g++], y != y) return !0;
                  } else for (; m > g; g++)
                    if ((c || g in v) && v[g] === p) return c || g || 0;
                  return !c && -1;
                };
              };
              i.exports = {
                // `Array.prototype.includes` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.includes
                includes: u(!0),
                // `Array.prototype.indexOf` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
                indexOf: u(!1)
              };
            }
          ),
          /***/
          "4de4": (
            /***/
            function(i, d, n) {
              var l = n("23e7"), o = n("b727").filter, s = n("1dde"), u = n("ae40"), c = s("filter"), f = u("filter");
              l({ target: "Array", proto: !0, forced: !c || !f }, {
                filter: function(h) {
                  return o(this, h, arguments.length > 1 ? arguments[1] : void 0);
                }
              });
            }
          ),
          /***/
          "4df4": (
            /***/
            function(i, d, n) {
              var l = n("0366"), o = n("7b0b"), s = n("9bdd"), u = n("e95a"), c = n("50c4"), f = n("8418"), p = n("35a1");
              i.exports = function(v) {
                var m = o(v), g = typeof this == "function" ? this : Array, y = arguments.length, E = y > 1 ? arguments[1] : void 0, w = E !== void 0, T = p(m), S = 0, D, L, U, j, B, H;
                if (w && (E = l(E, y > 2 ? arguments[2] : void 0, 2)), T != null && !(g == Array && u(T)))
                  for (j = T.call(m), B = j.next, L = new g(); !(U = B.call(j)).done; S++)
                    H = w ? s(j, E, [U.value, S], !0) : U.value, f(L, S, H);
                else
                  for (D = c(m.length), L = new g(D); D > S; S++)
                    H = w ? E(m[S], S) : m[S], f(L, S, H);
                return L.length = S, L;
              };
            }
          ),
          /***/
          "4fad": (
            /***/
            function(i, d, n) {
              var l = n("23e7"), o = n("6f53").entries;
              l({ target: "Object", stat: !0 }, {
                entries: function(u) {
                  return o(u);
                }
              });
            }
          ),
          /***/
          "50c4": (
            /***/
            function(i, d, n) {
              var l = n("a691"), o = Math.min;
              i.exports = function(s) {
                return s > 0 ? o(l(s), 9007199254740991) : 0;
              };
            }
          ),
          /***/
          5135: (
            /***/
            function(i, d) {
              var n = {}.hasOwnProperty;
              i.exports = function(l, o) {
                return n.call(l, o);
              };
            }
          ),
          /***/
          5319: (
            /***/
            function(i, d, n) {
              var l = n("d784"), o = n("825a"), s = n("7b0b"), u = n("50c4"), c = n("a691"), f = n("1d80"), p = n("8aa5"), h = n("14c3"), v = Math.max, m = Math.min, g = Math.floor, y = /\$([$&'`]|\d\d?|<[^>]*>)/g, E = /\$([$&'`]|\d\d?)/g, w = function(T) {
                return T === void 0 ? T : String(T);
              };
              l("replace", 2, function(T, S, D, L) {
                var U = L.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE, j = L.REPLACE_KEEPS_$0, B = U ? "$" : "$0";
                return [
                  // `String.prototype.replace` method
                  // https://tc39.github.io/ecma262/#sec-string.prototype.replace
                  function(z, Y) {
                    var W = f(this), re = z == null ? void 0 : z[T];
                    return re !== void 0 ? re.call(z, W, Y) : S.call(String(W), z, Y);
                  },
                  // `RegExp.prototype[@@replace]` method
                  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
                  function(k, z) {
                    if (!U && j || typeof z == "string" && z.indexOf(B) === -1) {
                      var Y = D(S, k, this, z);
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
                      var Ie = h(W, re);
                      if (Ie === null || (Te.push(Ie), !he)) break;
                      var xe = String(Ie[0]);
                      xe === "" && (W.lastIndex = p(re, u(W.lastIndex), fe));
                    }
                    for (var Ne = "", Ue = 0, Me = 0; Me < Te.length; Me++) {
                      Ie = Te[Me];
                      for (var be = String(Ie[0]), O = v(m(c(Ie.index), re.length), 0), I = [], A = 1; A < Ie.length; A++) I.push(w(Ie[A]));
                      var F = Ie.groups;
                      if (X) {
                        var b = [be].concat(I, O, re);
                        F !== void 0 && b.push(F);
                        var x = String(z.apply(void 0, b));
                      } else
                        x = H(be, re, O, I, F, z);
                      O >= Ue && (Ne += re.slice(Ue, O) + x, Ue = O + be.length);
                    }
                    return Ne + re.slice(Ue);
                  }
                ];
                function H(k, z, Y, W, re, X) {
                  var he = Y + k.length, fe = W.length, Te = E;
                  return re !== void 0 && (re = s(re), Te = y), S.call(X, Te, function(Ie, xe) {
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
                        if (Ue === 0) return Ie;
                        if (Ue > fe) {
                          var Me = g(Ue / 10);
                          return Me === 0 ? Ie : Me <= fe ? W[Me - 1] === void 0 ? xe.charAt(1) : W[Me - 1] + xe.charAt(1) : Ie;
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
            function(i, d, n) {
              var l = n("c430"), o = n("c6cd");
              (i.exports = function(s, u) {
                return o[s] || (o[s] = u !== void 0 ? u : {});
              })("versions", []).push({
                version: "3.6.5",
                mode: l ? "pure" : "global",
                copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
              });
            }
          ),
          /***/
          "56ef": (
            /***/
            function(i, d, n) {
              var l = n("d066"), o = n("241c"), s = n("7418"), u = n("825a");
              i.exports = l("Reflect", "ownKeys") || function(f) {
                var p = o.f(u(f)), h = s.f;
                return h ? p.concat(h(f)) : p;
              };
            }
          ),
          /***/
          "5a34": (
            /***/
            function(i, d, n) {
              var l = n("44e7");
              i.exports = function(o) {
                if (l(o))
                  throw TypeError("The method doesn't accept regular expressions");
                return o;
              };
            }
          ),
          /***/
          "5c6c": (
            /***/
            function(i, d) {
              i.exports = function(n, l) {
                return {
                  enumerable: !(n & 1),
                  configurable: !(n & 2),
                  writable: !(n & 4),
                  value: l
                };
              };
            }
          ),
          /***/
          "5db7": (
            /***/
            function(i, d, n) {
              var l = n("23e7"), o = n("a2bf"), s = n("7b0b"), u = n("50c4"), c = n("1c0b"), f = n("65f0");
              l({ target: "Array", proto: !0 }, {
                flatMap: function(h) {
                  var v = s(this), m = u(v.length), g;
                  return c(h), g = f(v, 0), g.length = o(g, v, v, m, 0, 1, h, arguments.length > 1 ? arguments[1] : void 0), g;
                }
              });
            }
          ),
          /***/
          6547: (
            /***/
            function(i, d, n) {
              var l = n("a691"), o = n("1d80"), s = function(u) {
                return function(c, f) {
                  var p = String(o(c)), h = l(f), v = p.length, m, g;
                  return h < 0 || h >= v ? u ? "" : void 0 : (m = p.charCodeAt(h), m < 55296 || m > 56319 || h + 1 === v || (g = p.charCodeAt(h + 1)) < 56320 || g > 57343 ? u ? p.charAt(h) : m : u ? p.slice(h, h + 2) : (m - 55296 << 10) + (g - 56320) + 65536);
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
            function(i, d, n) {
              var l = n("861d"), o = n("e8b5"), s = n("b622"), u = s("species");
              i.exports = function(c, f) {
                var p;
                return o(c) && (p = c.constructor, typeof p == "function" && (p === Array || o(p.prototype)) ? p = void 0 : l(p) && (p = p[u], p === null && (p = void 0))), new (p === void 0 ? Array : p)(f === 0 ? 0 : f);
              };
            }
          ),
          /***/
          "69f3": (
            /***/
            function(i, d, n) {
              var l = n("7f9a"), o = n("da84"), s = n("861d"), u = n("9112"), c = n("5135"), f = n("f772"), p = n("d012"), h = o.WeakMap, v, m, g, y = function(U) {
                return g(U) ? m(U) : v(U, {});
              }, E = function(U) {
                return function(j) {
                  var B;
                  if (!s(j) || (B = m(j)).type !== U)
                    throw TypeError("Incompatible receiver, " + U + " required");
                  return B;
                };
              };
              if (l) {
                var w = new h(), T = w.get, S = w.has, D = w.set;
                v = function(U, j) {
                  return D.call(w, U, j), j;
                }, m = function(U) {
                  return T.call(w, U) || {};
                }, g = function(U) {
                  return S.call(w, U);
                };
              } else {
                var L = f("state");
                p[L] = !0, v = function(U, j) {
                  return u(U, L, j), j;
                }, m = function(U) {
                  return c(U, L) ? U[L] : {};
                }, g = function(U) {
                  return c(U, L);
                };
              }
              i.exports = {
                set: v,
                get: m,
                has: g,
                enforce: y,
                getterFor: E
              };
            }
          ),
          /***/
          "6eeb": (
            /***/
            function(i, d, n) {
              var l = n("da84"), o = n("9112"), s = n("5135"), u = n("ce4e"), c = n("8925"), f = n("69f3"), p = f.get, h = f.enforce, v = String(String).split("String");
              (i.exports = function(m, g, y, E) {
                var w = E ? !!E.unsafe : !1, T = E ? !!E.enumerable : !1, S = E ? !!E.noTargetGet : !1;
                if (typeof y == "function" && (typeof g == "string" && !s(y, "name") && o(y, "name", g), h(y).source = v.join(typeof g == "string" ? g : "")), m === l) {
                  T ? m[g] = y : u(g, y);
                  return;
                } else w ? !S && m[g] && (T = !0) : delete m[g];
                T ? m[g] = y : o(m, g, y);
              })(Function.prototype, "toString", function() {
                return typeof this == "function" && p(this).source || c(this);
              });
            }
          ),
          /***/
          "6f53": (
            /***/
            function(i, d, n) {
              var l = n("83ab"), o = n("df75"), s = n("fc6a"), u = n("d1e7").f, c = function(f) {
                return function(p) {
                  for (var h = s(p), v = o(h), m = v.length, g = 0, y = [], E; m > g; )
                    E = v[g++], (!l || u.call(h, E)) && y.push(f ? [E, h[E]] : h[E]);
                  return y;
                };
              };
              i.exports = {
                // `Object.entries` method
                // https://tc39.github.io/ecma262/#sec-object.entries
                entries: c(!0),
                // `Object.values` method
                // https://tc39.github.io/ecma262/#sec-object.values
                values: c(!1)
              };
            }
          ),
          /***/
          "73d9": (
            /***/
            function(i, d, n) {
              var l = n("44d2");
              l("flatMap");
            }
          ),
          /***/
          7418: (
            /***/
            function(i, d) {
              d.f = Object.getOwnPropertySymbols;
            }
          ),
          /***/
          "746f": (
            /***/
            function(i, d, n) {
              var l = n("428f"), o = n("5135"), s = n("e538"), u = n("9bf2").f;
              i.exports = function(c) {
                var f = l.Symbol || (l.Symbol = {});
                o(f, c) || u(f, c, {
                  value: s.f(c)
                });
              };
            }
          ),
          /***/
          7839: (
            /***/
            function(i, d) {
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
            function(i, d, n) {
              var l = n("1d80");
              i.exports = function(o) {
                return Object(l(o));
              };
            }
          ),
          /***/
          "7c73": (
            /***/
            function(i, d, n) {
              var l = n("825a"), o = n("37e8"), s = n("7839"), u = n("d012"), c = n("1be4"), f = n("cc12"), p = n("f772"), h = ">", v = "<", m = "prototype", g = "script", y = p("IE_PROTO"), E = function() {
              }, w = function(U) {
                return v + g + h + U + v + "/" + g + h;
              }, T = function(U) {
                U.write(w("")), U.close();
                var j = U.parentWindow.Object;
                return U = null, j;
              }, S = function() {
                var U = f("iframe"), j = "java" + g + ":", B;
                return U.style.display = "none", c.appendChild(U), U.src = String(j), B = U.contentWindow.document, B.open(), B.write(w("document.F=Object")), B.close(), B.F;
              }, D, L = function() {
                try {
                  D = document.domain && new ActiveXObject("htmlfile");
                } catch {
                }
                L = D ? T(D) : S();
                for (var U = s.length; U--; ) delete L[m][s[U]];
                return L();
              };
              u[y] = !0, i.exports = Object.create || function(j, B) {
                var H;
                return j !== null ? (E[m] = l(j), H = new E(), E[m] = null, H[y] = j) : H = L(), B === void 0 ? H : o(H, B);
              };
            }
          ),
          /***/
          "7dd0": (
            /***/
            function(i, d, n) {
              var l = n("23e7"), o = n("9ed3"), s = n("e163"), u = n("d2bb"), c = n("d44e"), f = n("9112"), p = n("6eeb"), h = n("b622"), v = n("c430"), m = n("3f8c"), g = n("ae93"), y = g.IteratorPrototype, E = g.BUGGY_SAFARI_ITERATORS, w = h("iterator"), T = "keys", S = "values", D = "entries", L = function() {
                return this;
              };
              i.exports = function(U, j, B, H, k, z, Y) {
                o(B, j, H);
                var W = function(Me) {
                  if (Me === k && Te) return Te;
                  if (!E && Me in he) return he[Me];
                  switch (Me) {
                    case T:
                      return function() {
                        return new B(this, Me);
                      };
                    case S:
                      return function() {
                        return new B(this, Me);
                      };
                    case D:
                      return function() {
                        return new B(this, Me);
                      };
                  }
                  return function() {
                    return new B(this);
                  };
                }, re = j + " Iterator", X = !1, he = U.prototype, fe = he[w] || he["@@iterator"] || k && he[k], Te = !E && fe || W(k), Ie = j == "Array" && he.entries || fe, xe, Ne, Ue;
                if (Ie && (xe = s(Ie.call(new U())), y !== Object.prototype && xe.next && (!v && s(xe) !== y && (u ? u(xe, y) : typeof xe[w] != "function" && f(xe, w, L)), c(xe, re, !0, !0), v && (m[re] = L))), k == S && fe && fe.name !== S && (X = !0, Te = function() {
                  return fe.call(this);
                }), (!v || Y) && he[w] !== Te && f(he, w, Te), m[j] = Te, k)
                  if (Ne = {
                    values: W(S),
                    keys: z ? Te : W(T),
                    entries: W(D)
                  }, Y) for (Ue in Ne)
                    (E || X || !(Ue in he)) && p(he, Ue, Ne[Ue]);
                  else l({ target: j, proto: !0, forced: E || X }, Ne);
                return Ne;
              };
            }
          ),
          /***/
          "7f9a": (
            /***/
            function(i, d, n) {
              var l = n("da84"), o = n("8925"), s = l.WeakMap;
              i.exports = typeof s == "function" && /native code/.test(o(s));
            }
          ),
          /***/
          "825a": (
            /***/
            function(i, d, n) {
              var l = n("861d");
              i.exports = function(o) {
                if (!l(o))
                  throw TypeError(String(o) + " is not an object");
                return o;
              };
            }
          ),
          /***/
          "83ab": (
            /***/
            function(i, d, n) {
              var l = n("d039");
              i.exports = !l(function() {
                return Object.defineProperty({}, 1, { get: function() {
                  return 7;
                } })[1] != 7;
              });
            }
          ),
          /***/
          8418: (
            /***/
            function(i, d, n) {
              var l = n("c04e"), o = n("9bf2"), s = n("5c6c");
              i.exports = function(u, c, f) {
                var p = l(c);
                p in u ? o.f(u, p, s(0, f)) : u[p] = f;
              };
            }
          ),
          /***/
          "861d": (
            /***/
            function(i, d) {
              i.exports = function(n) {
                return typeof n == "object" ? n !== null : typeof n == "function";
              };
            }
          ),
          /***/
          8875: (
            /***/
            function(i, d, n) {
              var l, o, s;
              (function(u, c) {
                o = [], l = c, s = typeof l == "function" ? l.apply(d, o) : l, s !== void 0 && (i.exports = s);
              })(typeof self < "u" ? self : this, function() {
                function u() {
                  var c = Object.getOwnPropertyDescriptor(document, "currentScript");
                  if (!c && "currentScript" in document && document.currentScript || c && c.get !== u && document.currentScript)
                    return document.currentScript;
                  try {
                    throw new Error();
                  } catch (D) {
                    var f = /.*at [^(]*\((.*):(.+):(.+)\)$/ig, p = /@([^@]*):(\d+):(\d+)\s*$/ig, h = f.exec(D.stack) || p.exec(D.stack), v = h && h[1] || !1, m = h && h[2] || !1, g = document.location.href.replace(document.location.hash, ""), y, E, w, T = document.getElementsByTagName("script");
                    v === g && (y = document.documentElement.outerHTML, E = new RegExp("(?:[^\\n]+?\\n){0," + (m - 2) + "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*", "i"), w = y.replace(E, "$1").trim());
                    for (var S = 0; S < T.length; S++)
                      if (T[S].readyState === "interactive" || T[S].src === v || v === g && T[S].innerHTML && T[S].innerHTML.trim() === w)
                        return T[S];
                    return null;
                  }
                }
                return u;
              });
            }
          ),
          /***/
          8925: (
            /***/
            function(i, d, n) {
              var l = n("c6cd"), o = Function.toString;
              typeof l.inspectSource != "function" && (l.inspectSource = function(s) {
                return o.call(s);
              }), i.exports = l.inspectSource;
            }
          ),
          /***/
          "8aa5": (
            /***/
            function(i, d, n) {
              var l = n("6547").charAt;
              i.exports = function(o, s, u) {
                return s + (u ? l(o, s).length : 1);
              };
            }
          ),
          /***/
          "8bbf": (
            /***/
            function(i, d) {
              i.exports = r;
            }
          ),
          /***/
          "90e3": (
            /***/
            function(i, d) {
              var n = 0, l = Math.random();
              i.exports = function(o) {
                return "Symbol(" + String(o === void 0 ? "" : o) + ")_" + (++n + l).toString(36);
              };
            }
          ),
          /***/
          9112: (
            /***/
            function(i, d, n) {
              var l = n("83ab"), o = n("9bf2"), s = n("5c6c");
              i.exports = l ? function(u, c, f) {
                return o.f(u, c, s(1, f));
              } : function(u, c, f) {
                return u[c] = f, u;
              };
            }
          ),
          /***/
          9263: (
            /***/
            function(i, d, n) {
              var l = n("ad6d"), o = n("9f7f"), s = RegExp.prototype.exec, u = String.prototype.replace, c = s, f = function() {
                var m = /a/, g = /b*/g;
                return s.call(m, "a"), s.call(g, "a"), m.lastIndex !== 0 || g.lastIndex !== 0;
              }(), p = o.UNSUPPORTED_Y || o.BROKEN_CARET, h = /()??/.exec("")[1] !== void 0, v = f || h || p;
              v && (c = function(g) {
                var y = this, E, w, T, S, D = p && y.sticky, L = l.call(y), U = y.source, j = 0, B = g;
                return D && (L = L.replace("y", ""), L.indexOf("g") === -1 && (L += "g"), B = String(g).slice(y.lastIndex), y.lastIndex > 0 && (!y.multiline || y.multiline && g[y.lastIndex - 1] !== `
`) && (U = "(?: " + U + ")", B = " " + B, j++), w = new RegExp("^(?:" + U + ")", L)), h && (w = new RegExp("^" + U + "$(?!\\s)", L)), f && (E = y.lastIndex), T = s.call(D ? w : y, B), D ? T ? (T.input = T.input.slice(j), T[0] = T[0].slice(j), T.index = y.lastIndex, y.lastIndex += T[0].length) : y.lastIndex = 0 : f && T && (y.lastIndex = y.global ? T.index + T[0].length : E), h && T && T.length > 1 && u.call(T[0], w, function() {
                  for (S = 1; S < arguments.length - 2; S++)
                    arguments[S] === void 0 && (T[S] = void 0);
                }), T;
              }), i.exports = c;
            }
          ),
          /***/
          "94ca": (
            /***/
            function(i, d, n) {
              var l = n("d039"), o = /#|\.prototype\./, s = function(h, v) {
                var m = c[u(h)];
                return m == p ? !0 : m == f ? !1 : typeof v == "function" ? l(v) : !!v;
              }, u = s.normalize = function(h) {
                return String(h).replace(o, ".").toLowerCase();
              }, c = s.data = {}, f = s.NATIVE = "N", p = s.POLYFILL = "P";
              i.exports = s;
            }
          ),
          /***/
          "99af": (
            /***/
            function(i, d, n) {
              var l = n("23e7"), o = n("d039"), s = n("e8b5"), u = n("861d"), c = n("7b0b"), f = n("50c4"), p = n("8418"), h = n("65f0"), v = n("1dde"), m = n("b622"), g = n("2d00"), y = m("isConcatSpreadable"), E = 9007199254740991, w = "Maximum allowed index exceeded", T = g >= 51 || !o(function() {
                var U = [];
                return U[y] = !1, U.concat()[0] !== U;
              }), S = v("concat"), D = function(U) {
                if (!u(U)) return !1;
                var j = U[y];
                return j !== void 0 ? !!j : s(U);
              }, L = !T || !S;
              l({ target: "Array", proto: !0, forced: L }, {
                concat: function(j) {
                  var B = c(this), H = h(B, 0), k = 0, z, Y, W, re, X;
                  for (z = -1, W = arguments.length; z < W; z++)
                    if (X = z === -1 ? B : arguments[z], D(X)) {
                      if (re = f(X.length), k + re > E) throw TypeError(w);
                      for (Y = 0; Y < re; Y++, k++) Y in X && p(H, k, X[Y]);
                    } else {
                      if (k >= E) throw TypeError(w);
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
            function(i, d, n) {
              var l = n("825a");
              i.exports = function(o, s, u, c) {
                try {
                  return c ? s(l(u)[0], u[1]) : s(u);
                } catch (p) {
                  var f = o.return;
                  throw f !== void 0 && l(f.call(o)), p;
                }
              };
            }
          ),
          /***/
          "9bf2": (
            /***/
            function(i, d, n) {
              var l = n("83ab"), o = n("0cfb"), s = n("825a"), u = n("c04e"), c = Object.defineProperty;
              d.f = l ? c : function(p, h, v) {
                if (s(p), h = u(h, !0), s(v), o) try {
                  return c(p, h, v);
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
            function(i, d, n) {
              var l = n("ae93").IteratorPrototype, o = n("7c73"), s = n("5c6c"), u = n("d44e"), c = n("3f8c"), f = function() {
                return this;
              };
              i.exports = function(p, h, v) {
                var m = h + " Iterator";
                return p.prototype = o(l, { next: s(1, v) }), u(p, m, !1, !0), c[m] = f, p;
              };
            }
          ),
          /***/
          "9f7f": (
            /***/
            function(i, d, n) {
              var l = n("d039");
              function o(s, u) {
                return RegExp(s, u);
              }
              d.UNSUPPORTED_Y = l(function() {
                var s = o("a", "y");
                return s.lastIndex = 2, s.exec("abcd") != null;
              }), d.BROKEN_CARET = l(function() {
                var s = o("^r", "gy");
                return s.lastIndex = 2, s.exec("str") != null;
              });
            }
          ),
          /***/
          a2bf: (
            /***/
            function(i, d, n) {
              var l = n("e8b5"), o = n("50c4"), s = n("0366"), u = function(c, f, p, h, v, m, g, y) {
                for (var E = v, w = 0, T = g ? s(g, y, 3) : !1, S; w < h; ) {
                  if (w in p) {
                    if (S = T ? T(p[w], w, f) : p[w], m > 0 && l(S))
                      E = u(c, f, S, o(S.length), E, m - 1) - 1;
                    else {
                      if (E >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
                      c[E] = S;
                    }
                    E++;
                  }
                  w++;
                }
                return E;
              };
              i.exports = u;
            }
          ),
          /***/
          a352: (
            /***/
            function(i, d) {
              i.exports = a;
            }
          ),
          /***/
          a434: (
            /***/
            function(i, d, n) {
              var l = n("23e7"), o = n("23cb"), s = n("a691"), u = n("50c4"), c = n("7b0b"), f = n("65f0"), p = n("8418"), h = n("1dde"), v = n("ae40"), m = h("splice"), g = v("splice", { ACCESSORS: !0, 0: 0, 1: 2 }), y = Math.max, E = Math.min, w = 9007199254740991, T = "Maximum allowed length exceeded";
              l({ target: "Array", proto: !0, forced: !m || !g }, {
                splice: function(D, L) {
                  var U = c(this), j = u(U.length), B = o(D, j), H = arguments.length, k, z, Y, W, re, X;
                  if (H === 0 ? k = z = 0 : H === 1 ? (k = 0, z = j - B) : (k = H - 2, z = E(y(s(L), 0), j - B)), j + k - z > w)
                    throw TypeError(T);
                  for (Y = f(U, z), W = 0; W < z; W++)
                    re = B + W, re in U && p(Y, W, U[re]);
                  if (Y.length = z, k < z) {
                    for (W = B; W < j - z; W++)
                      re = W + z, X = W + k, re in U ? U[X] = U[re] : delete U[X];
                    for (W = j; W > j - z + k; W--) delete U[W - 1];
                  } else if (k > z)
                    for (W = j - z; W > B; W--)
                      re = W + z - 1, X = W + k - 1, re in U ? U[X] = U[re] : delete U[X];
                  for (W = 0; W < k; W++)
                    U[W + B] = arguments[W + 2];
                  return U.length = j - z + k, Y;
                }
              });
            }
          ),
          /***/
          a4d3: (
            /***/
            function(i, d, n) {
              var l = n("23e7"), o = n("da84"), s = n("d066"), u = n("c430"), c = n("83ab"), f = n("4930"), p = n("fdbf"), h = n("d039"), v = n("5135"), m = n("e8b5"), g = n("861d"), y = n("825a"), E = n("7b0b"), w = n("fc6a"), T = n("c04e"), S = n("5c6c"), D = n("7c73"), L = n("df75"), U = n("241c"), j = n("057f"), B = n("7418"), H = n("06cf"), k = n("9bf2"), z = n("d1e7"), Y = n("9112"), W = n("6eeb"), re = n("5692"), X = n("f772"), he = n("d012"), fe = n("90e3"), Te = n("b622"), Ie = n("e538"), xe = n("746f"), Ne = n("d44e"), Ue = n("69f3"), Me = n("b727").forEach, be = X("hidden"), O = "Symbol", I = "prototype", A = Te("toPrimitive"), F = Ue.set, b = Ue.getterFor(O), x = Object[I], P = o.Symbol, M = s("JSON", "stringify"), $ = H.f, V = k.f, Q = j.f, Z = z.f, J = re("symbols"), q = re("op-symbols"), te = re("string-to-symbol-registry"), le = re("symbol-to-string-registry"), ge = re("wks"), Ce = o.QObject, Ke = !Ce || !Ce[I] || !Ce[I].findChild, qe = c && h(function() {
                return D(V({}, "a", {
                  get: function() {
                    return V(this, "a", { value: 7 }).a;
                  }
                })).a != 7;
              }) ? function(Oe, we, Re) {
                var Be = $(x, we);
                Be && delete x[we], V(Oe, we, Re), Be && Oe !== x && V(x, we, Be);
              } : V, Ze = function(Oe, we) {
                var Re = J[Oe] = D(P[I]);
                return F(Re, {
                  type: O,
                  tag: Oe,
                  description: we
                }), c || (Re.description = we), Re;
              }, G = p ? function(Oe) {
                return typeof Oe == "symbol";
              } : function(Oe) {
                return Object(Oe) instanceof P;
              }, K = function(we, Re, Be) {
                we === x && K(q, Re, Be), y(we);
                var ke = T(Re, !0);
                return y(Be), v(J, ke) ? (Be.enumerable ? (v(we, be) && we[be][ke] && (we[be][ke] = !1), Be = D(Be, { enumerable: S(0, !1) })) : (v(we, be) || V(we, be, S(1, {})), we[be][ke] = !0), qe(we, ke, Be)) : V(we, ke, Be);
              }, ee = function(we, Re) {
                y(we);
                var Be = w(Re), ke = L(Be).concat(Ee(Be));
                return Me(ke, function(rt) {
                  (!c || Se.call(Be, rt)) && K(we, rt, Be[rt]);
                }), we;
              }, ce = function(we, Re) {
                return Re === void 0 ? D(we) : ee(D(we), Re);
              }, Se = function(we) {
                var Re = T(we, !0), Be = Z.call(this, Re);
                return this === x && v(J, Re) && !v(q, Re) ? !1 : Be || !v(this, Re) || !v(J, Re) || v(this, be) && this[be][Re] ? Be : !0;
              }, Fe = function(we, Re) {
                var Be = w(we), ke = T(Re, !0);
                if (!(Be === x && v(J, ke) && !v(q, ke))) {
                  var rt = $(Be, ke);
                  return rt && v(J, ke) && !(v(Be, be) && Be[be][ke]) && (rt.enumerable = !0), rt;
                }
              }, Ae = function(we) {
                var Re = Q(w(we)), Be = [];
                return Me(Re, function(ke) {
                  !v(J, ke) && !v(he, ke) && Be.push(ke);
                }), Be;
              }, Ee = function(we) {
                var Re = we === x, Be = Q(Re ? q : w(we)), ke = [];
                return Me(Be, function(rt) {
                  v(J, rt) && (!Re || v(x, rt)) && ke.push(J[rt]);
                }), ke;
              };
              if (f || (P = function() {
                if (this instanceof P) throw TypeError("Symbol is not a constructor");
                var we = !arguments.length || arguments[0] === void 0 ? void 0 : String(arguments[0]), Re = fe(we), Be = function(ke) {
                  this === x && Be.call(q, ke), v(this, be) && v(this[be], Re) && (this[be][Re] = !1), qe(this, Re, S(1, ke));
                };
                return c && Ke && qe(x, Re, { configurable: !0, set: Be }), Ze(Re, we);
              }, W(P[I], "toString", function() {
                return b(this).tag;
              }), W(P, "withoutSetter", function(Oe) {
                return Ze(fe(Oe), Oe);
              }), z.f = Se, k.f = K, H.f = Fe, U.f = j.f = Ae, B.f = Ee, Ie.f = function(Oe) {
                return Ze(Te(Oe), Oe);
              }, c && (V(P[I], "description", {
                configurable: !0,
                get: function() {
                  return b(this).description;
                }
              }), u || W(x, "propertyIsEnumerable", Se, { unsafe: !0 }))), l({ global: !0, wrap: !0, forced: !f, sham: !f }, {
                Symbol: P
              }), Me(L(ge), function(Oe) {
                xe(Oe);
              }), l({ target: O, stat: !0, forced: !f }, {
                // `Symbol.for` method
                // https://tc39.github.io/ecma262/#sec-symbol.for
                for: function(Oe) {
                  var we = String(Oe);
                  if (v(te, we)) return te[we];
                  var Re = P(we);
                  return te[we] = Re, le[Re] = we, Re;
                },
                // `Symbol.keyFor` method
                // https://tc39.github.io/ecma262/#sec-symbol.keyfor
                keyFor: function(we) {
                  if (!G(we)) throw TypeError(we + " is not a symbol");
                  if (v(le, we)) return le[we];
                },
                useSetter: function() {
                  Ke = !0;
                },
                useSimple: function() {
                  Ke = !1;
                }
              }), l({ target: "Object", stat: !0, forced: !f, sham: !c }, {
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
              }), l({ target: "Object", stat: !0, forced: !f }, {
                // `Object.getOwnPropertyNames` method
                // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
                getOwnPropertyNames: Ae,
                // `Object.getOwnPropertySymbols` method
                // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
                getOwnPropertySymbols: Ee
              }), l({ target: "Object", stat: !0, forced: h(function() {
                B.f(1);
              }) }, {
                getOwnPropertySymbols: function(we) {
                  return B.f(E(we));
                }
              }), M) {
                var Ve = !f || h(function() {
                  var Oe = P();
                  return M([Oe]) != "[null]" || M({ a: Oe }) != "{}" || M(Object(Oe)) != "{}";
                });
                l({ target: "JSON", stat: !0, forced: Ve }, {
                  // eslint-disable-next-line no-unused-vars
                  stringify: function(we, Re, Be) {
                    for (var ke = [we], rt = 1, Ht; arguments.length > rt; ) ke.push(arguments[rt++]);
                    if (Ht = Re, !(!g(Re) && we === void 0 || G(we)))
                      return m(Re) || (Re = function(Mn, jt) {
                        if (typeof Ht == "function" && (jt = Ht.call(this, Mn, jt)), !G(jt)) return jt;
                      }), ke[1] = Re, M.apply(null, ke);
                  }
                });
              }
              P[I][A] || Y(P[I], A, P[I].valueOf), Ne(P, O), he[be] = !0;
            }
          ),
          /***/
          a630: (
            /***/
            function(i, d, n) {
              var l = n("23e7"), o = n("4df4"), s = n("1c7e"), u = !s(function(c) {
                Array.from(c);
              });
              l({ target: "Array", stat: !0, forced: u }, {
                from: o
              });
            }
          ),
          /***/
          a640: (
            /***/
            function(i, d, n) {
              var l = n("d039");
              i.exports = function(o, s) {
                var u = [][o];
                return !!u && l(function() {
                  u.call(null, s || function() {
                    throw 1;
                  }, 1);
                });
              };
            }
          ),
          /***/
          a691: (
            /***/
            function(i, d) {
              var n = Math.ceil, l = Math.floor;
              i.exports = function(o) {
                return isNaN(o = +o) ? 0 : (o > 0 ? l : n)(o);
              };
            }
          ),
          /***/
          ab13: (
            /***/
            function(i, d, n) {
              var l = n("b622"), o = l("match");
              i.exports = function(s) {
                var u = /./;
                try {
                  "/./"[s](u);
                } catch {
                  try {
                    return u[o] = !1, "/./"[s](u);
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
            function(i, d, n) {
              var l = n("23e7"), o = n("9263");
              l({ target: "RegExp", proto: !0, forced: /./.exec !== o }, {
                exec: o
              });
            }
          ),
          /***/
          ad6d: (
            /***/
            function(i, d, n) {
              var l = n("825a");
              i.exports = function() {
                var o = l(this), s = "";
                return o.global && (s += "g"), o.ignoreCase && (s += "i"), o.multiline && (s += "m"), o.dotAll && (s += "s"), o.unicode && (s += "u"), o.sticky && (s += "y"), s;
              };
            }
          ),
          /***/
          ae40: (
            /***/
            function(i, d, n) {
              var l = n("83ab"), o = n("d039"), s = n("5135"), u = Object.defineProperty, c = {}, f = function(p) {
                throw p;
              };
              i.exports = function(p, h) {
                if (s(c, p)) return c[p];
                h || (h = {});
                var v = [][p], m = s(h, "ACCESSORS") ? h.ACCESSORS : !1, g = s(h, 0) ? h[0] : f, y = s(h, 1) ? h[1] : void 0;
                return c[p] = !!v && !o(function() {
                  if (m && !l) return !0;
                  var E = { length: -1 };
                  m ? u(E, 1, { enumerable: !0, get: f }) : E[1] = 1, v.call(E, g, y);
                });
              };
            }
          ),
          /***/
          ae93: (
            /***/
            function(i, d, n) {
              var l = n("e163"), o = n("9112"), s = n("5135"), u = n("b622"), c = n("c430"), f = u("iterator"), p = !1, h = function() {
                return this;
              }, v, m, g;
              [].keys && (g = [].keys(), "next" in g ? (m = l(l(g)), m !== Object.prototype && (v = m)) : p = !0), v == null && (v = {}), !c && !s(v, f) && o(v, f, h), i.exports = {
                IteratorPrototype: v,
                BUGGY_SAFARI_ITERATORS: p
              };
            }
          ),
          /***/
          b041: (
            /***/
            function(i, d, n) {
              var l = n("00ee"), o = n("f5df");
              i.exports = l ? {}.toString : function() {
                return "[object " + o(this) + "]";
              };
            }
          ),
          /***/
          b0c0: (
            /***/
            function(i, d, n) {
              var l = n("83ab"), o = n("9bf2").f, s = Function.prototype, u = s.toString, c = /^\s*function ([^ (]*)/, f = "name";
              l && !(f in s) && o(s, f, {
                configurable: !0,
                get: function() {
                  try {
                    return u.call(this).match(c)[1];
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
            function(i, d, n) {
              var l = n("da84"), o = n("5692"), s = n("5135"), u = n("90e3"), c = n("4930"), f = n("fdbf"), p = o("wks"), h = l.Symbol, v = f ? h : h && h.withoutSetter || u;
              i.exports = function(m) {
                return s(p, m) || (c && s(h, m) ? p[m] = h[m] : p[m] = v("Symbol." + m)), p[m];
              };
            }
          ),
          /***/
          b64b: (
            /***/
            function(i, d, n) {
              var l = n("23e7"), o = n("7b0b"), s = n("df75"), u = n("d039"), c = u(function() {
                s(1);
              });
              l({ target: "Object", stat: !0, forced: c }, {
                keys: function(p) {
                  return s(o(p));
                }
              });
            }
          ),
          /***/
          b727: (
            /***/
            function(i, d, n) {
              var l = n("0366"), o = n("44ad"), s = n("7b0b"), u = n("50c4"), c = n("65f0"), f = [].push, p = function(h) {
                var v = h == 1, m = h == 2, g = h == 3, y = h == 4, E = h == 6, w = h == 5 || E;
                return function(T, S, D, L) {
                  for (var U = s(T), j = o(U), B = l(S, D, 3), H = u(j.length), k = 0, z = L || c, Y = v ? z(T, H) : m ? z(T, 0) : void 0, W, re; H > k; k++) if ((w || k in j) && (W = j[k], re = B(W, k, U), h)) {
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
                  return E ? -1 : g || y ? y : Y;
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
            function(i, d, n) {
              var l = n("861d");
              i.exports = function(o, s) {
                if (!l(o)) return o;
                var u, c;
                if (s && typeof (u = o.toString) == "function" && !l(c = u.call(o)) || typeof (u = o.valueOf) == "function" && !l(c = u.call(o)) || !s && typeof (u = o.toString) == "function" && !l(c = u.call(o))) return c;
                throw TypeError("Can't convert object to primitive value");
              };
            }
          ),
          /***/
          c430: (
            /***/
            function(i, d) {
              i.exports = !1;
            }
          ),
          /***/
          c6b6: (
            /***/
            function(i, d) {
              var n = {}.toString;
              i.exports = function(l) {
                return n.call(l).slice(8, -1);
              };
            }
          ),
          /***/
          c6cd: (
            /***/
            function(i, d, n) {
              var l = n("da84"), o = n("ce4e"), s = "__core-js_shared__", u = l[s] || o(s, {});
              i.exports = u;
            }
          ),
          /***/
          c740: (
            /***/
            function(i, d, n) {
              var l = n("23e7"), o = n("b727").findIndex, s = n("44d2"), u = n("ae40"), c = "findIndex", f = !0, p = u(c);
              c in [] && Array(1)[c](function() {
                f = !1;
              }), l({ target: "Array", proto: !0, forced: f || !p }, {
                findIndex: function(v) {
                  return o(this, v, arguments.length > 1 ? arguments[1] : void 0);
                }
              }), s(c);
            }
          ),
          /***/
          c8ba: (
            /***/
            function(i, d) {
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
            function(i, d, n) {
              var l = n("23e7"), o = n("4d64").indexOf, s = n("a640"), u = n("ae40"), c = [].indexOf, f = !!c && 1 / [1].indexOf(1, -0) < 0, p = s("indexOf"), h = u("indexOf", { ACCESSORS: !0, 1: 0 });
              l({ target: "Array", proto: !0, forced: f || !p || !h }, {
                indexOf: function(m) {
                  return f ? c.apply(this, arguments) || 0 : o(this, m, arguments.length > 1 ? arguments[1] : void 0);
                }
              });
            }
          ),
          /***/
          ca84: (
            /***/
            function(i, d, n) {
              var l = n("5135"), o = n("fc6a"), s = n("4d64").indexOf, u = n("d012");
              i.exports = function(c, f) {
                var p = o(c), h = 0, v = [], m;
                for (m in p) !l(u, m) && l(p, m) && v.push(m);
                for (; f.length > h; ) l(p, m = f[h++]) && (~s(v, m) || v.push(m));
                return v;
              };
            }
          ),
          /***/
          caad: (
            /***/
            function(i, d, n) {
              var l = n("23e7"), o = n("4d64").includes, s = n("44d2"), u = n("ae40"), c = u("indexOf", { ACCESSORS: !0, 1: 0 });
              l({ target: "Array", proto: !0, forced: !c }, {
                includes: function(p) {
                  return o(this, p, arguments.length > 1 ? arguments[1] : void 0);
                }
              }), s("includes");
            }
          ),
          /***/
          cc12: (
            /***/
            function(i, d, n) {
              var l = n("da84"), o = n("861d"), s = l.document, u = o(s) && o(s.createElement);
              i.exports = function(c) {
                return u ? s.createElement(c) : {};
              };
            }
          ),
          /***/
          ce4e: (
            /***/
            function(i, d, n) {
              var l = n("da84"), o = n("9112");
              i.exports = function(s, u) {
                try {
                  o(l, s, u);
                } catch {
                  l[s] = u;
                }
                return u;
              };
            }
          ),
          /***/
          d012: (
            /***/
            function(i, d) {
              i.exports = {};
            }
          ),
          /***/
          d039: (
            /***/
            function(i, d) {
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
            function(i, d, n) {
              var l = n("428f"), o = n("da84"), s = function(u) {
                return typeof u == "function" ? u : void 0;
              };
              i.exports = function(u, c) {
                return arguments.length < 2 ? s(l[u]) || s(o[u]) : l[u] && l[u][c] || o[u] && o[u][c];
              };
            }
          ),
          /***/
          d1e7: (
            /***/
            function(i, d, n) {
              var l = {}.propertyIsEnumerable, o = Object.getOwnPropertyDescriptor, s = o && !l.call({ 1: 2 }, 1);
              d.f = s ? function(c) {
                var f = o(this, c);
                return !!f && f.enumerable;
              } : l;
            }
          ),
          /***/
          d28b: (
            /***/
            function(i, d, n) {
              var l = n("746f");
              l("iterator");
            }
          ),
          /***/
          d2bb: (
            /***/
            function(i, d, n) {
              var l = n("825a"), o = n("3bbe");
              i.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                var s = !1, u = {}, c;
                try {
                  c = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set, c.call(u, []), s = u instanceof Array;
                } catch {
                }
                return function(p, h) {
                  return l(p), o(h), s ? c.call(p, h) : p.__proto__ = h, p;
                };
              }() : void 0);
            }
          ),
          /***/
          d3b7: (
            /***/
            function(i, d, n) {
              var l = n("00ee"), o = n("6eeb"), s = n("b041");
              l || o(Object.prototype, "toString", s, { unsafe: !0 });
            }
          ),
          /***/
          d44e: (
            /***/
            function(i, d, n) {
              var l = n("9bf2").f, o = n("5135"), s = n("b622"), u = s("toStringTag");
              i.exports = function(c, f, p) {
                c && !o(c = p ? c : c.prototype, u) && l(c, u, { configurable: !0, value: f });
              };
            }
          ),
          /***/
          d58f: (
            /***/
            function(i, d, n) {
              var l = n("1c0b"), o = n("7b0b"), s = n("44ad"), u = n("50c4"), c = function(f) {
                return function(p, h, v, m) {
                  l(h);
                  var g = o(p), y = s(g), E = u(g.length), w = f ? E - 1 : 0, T = f ? -1 : 1;
                  if (v < 2) for (; ; ) {
                    if (w in y) {
                      m = y[w], w += T;
                      break;
                    }
                    if (w += T, f ? w < 0 : E <= w)
                      throw TypeError("Reduce of empty array with no initial value");
                  }
                  for (; f ? w >= 0 : E > w; w += T) w in y && (m = h(m, y[w], w, g));
                  return m;
                };
              };
              i.exports = {
                // `Array.prototype.reduce` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
                left: c(!1),
                // `Array.prototype.reduceRight` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
                right: c(!0)
              };
            }
          ),
          /***/
          d784: (
            /***/
            function(i, d, n) {
              n("ac1f");
              var l = n("6eeb"), o = n("d039"), s = n("b622"), u = n("9263"), c = n("9112"), f = s("species"), p = !o(function() {
                var y = /./;
                return y.exec = function() {
                  var E = [];
                  return E.groups = { a: "7" }, E;
                }, "".replace(y, "$<a>") !== "7";
              }), h = function() {
                return "a".replace(/./, "$0") === "$0";
              }(), v = s("replace"), m = function() {
                return /./[v] ? /./[v]("a", "$0") === "" : !1;
              }(), g = !o(function() {
                var y = /(?:)/, E = y.exec;
                y.exec = function() {
                  return E.apply(this, arguments);
                };
                var w = "ab".split(y);
                return w.length !== 2 || w[0] !== "a" || w[1] !== "b";
              });
              i.exports = function(y, E, w, T) {
                var S = s(y), D = !o(function() {
                  var k = {};
                  return k[S] = function() {
                    return 7;
                  }, ""[y](k) != 7;
                }), L = D && !o(function() {
                  var k = !1, z = /a/;
                  return y === "split" && (z = {}, z.constructor = {}, z.constructor[f] = function() {
                    return z;
                  }, z.flags = "", z[S] = /./[S]), z.exec = function() {
                    return k = !0, null;
                  }, z[S](""), !k;
                });
                if (!D || !L || y === "replace" && !(p && h && !m) || y === "split" && !g) {
                  var U = /./[S], j = w(S, ""[y], function(k, z, Y, W, re) {
                    return z.exec === u ? D && !re ? { done: !0, value: U.call(z, Y, W) } : { done: !0, value: k.call(Y, z, W) } : { done: !1 };
                  }, {
                    REPLACE_KEEPS_$0: h,
                    REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: m
                  }), B = j[0], H = j[1];
                  l(String.prototype, y, B), l(
                    RegExp.prototype,
                    S,
                    E == 2 ? function(k, z) {
                      return H.call(k, this, z);
                    } : function(k) {
                      return H.call(k, this);
                    }
                  );
                }
                T && c(RegExp.prototype[S], "sham", !0);
              };
            }
          ),
          /***/
          d81d: (
            /***/
            function(i, d, n) {
              var l = n("23e7"), o = n("b727").map, s = n("1dde"), u = n("ae40"), c = s("map"), f = u("map");
              l({ target: "Array", proto: !0, forced: !c || !f }, {
                map: function(h) {
                  return o(this, h, arguments.length > 1 ? arguments[1] : void 0);
                }
              });
            }
          ),
          /***/
          da84: (
            /***/
            function(i, d, n) {
              (function(l) {
                var o = function(s) {
                  return s && s.Math == Math && s;
                };
                i.exports = // eslint-disable-next-line no-undef
                o(typeof globalThis == "object" && globalThis) || o(typeof window == "object" && window) || o(typeof self == "object" && self) || o(typeof l == "object" && l) || // eslint-disable-next-line no-new-func
                Function("return this")();
              }).call(this, n("c8ba"));
            }
          ),
          /***/
          dbb4: (
            /***/
            function(i, d, n) {
              var l = n("23e7"), o = n("83ab"), s = n("56ef"), u = n("fc6a"), c = n("06cf"), f = n("8418");
              l({ target: "Object", stat: !0, sham: !o }, {
                getOwnPropertyDescriptors: function(h) {
                  for (var v = u(h), m = c.f, g = s(v), y = {}, E = 0, w, T; g.length > E; )
                    T = m(v, w = g[E++]), T !== void 0 && f(y, w, T);
                  return y;
                }
              });
            }
          ),
          /***/
          dbf1: (
            /***/
            function(i, d, n) {
              (function(l) {
                n.d(d, "a", function() {
                  return s;
                });
                function o() {
                  return typeof window < "u" ? window.console : l.console;
                }
                var s = o();
              }).call(this, n("c8ba"));
            }
          ),
          /***/
          ddb0: (
            /***/
            function(i, d, n) {
              var l = n("da84"), o = n("fdbc"), s = n("e260"), u = n("9112"), c = n("b622"), f = c("iterator"), p = c("toStringTag"), h = s.values;
              for (var v in o) {
                var m = l[v], g = m && m.prototype;
                if (g) {
                  if (g[f] !== h) try {
                    u(g, f, h);
                  } catch {
                    g[f] = h;
                  }
                  if (g[p] || u(g, p, v), o[v]) {
                    for (var y in s)
                      if (g[y] !== s[y]) try {
                        u(g, y, s[y]);
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
            function(i, d, n) {
              var l = n("ca84"), o = n("7839");
              i.exports = Object.keys || function(u) {
                return l(u, o);
              };
            }
          ),
          /***/
          e01a: (
            /***/
            function(i, d, n) {
              var l = n("23e7"), o = n("83ab"), s = n("da84"), u = n("5135"), c = n("861d"), f = n("9bf2").f, p = n("e893"), h = s.Symbol;
              if (o && typeof h == "function" && (!("description" in h.prototype) || // Safari 12 bug
              h().description !== void 0)) {
                var v = {}, m = function() {
                  var S = arguments.length < 1 || arguments[0] === void 0 ? void 0 : String(arguments[0]), D = this instanceof m ? new h(S) : S === void 0 ? h() : h(S);
                  return S === "" && (v[D] = !0), D;
                };
                p(m, h);
                var g = m.prototype = h.prototype;
                g.constructor = m;
                var y = g.toString, E = String(h("test")) == "Symbol(test)", w = /^Symbol\((.*)\)[^)]+$/;
                f(g, "description", {
                  configurable: !0,
                  get: function() {
                    var S = c(this) ? this.valueOf() : this, D = y.call(S);
                    if (u(v, S)) return "";
                    var L = E ? D.slice(7, -1) : D.replace(w, "$1");
                    return L === "" ? void 0 : L;
                  }
                }), l({ global: !0, forced: !0 }, {
                  Symbol: m
                });
              }
            }
          ),
          /***/
          e163: (
            /***/
            function(i, d, n) {
              var l = n("5135"), o = n("7b0b"), s = n("f772"), u = n("e177"), c = s("IE_PROTO"), f = Object.prototype;
              i.exports = u ? Object.getPrototypeOf : function(p) {
                return p = o(p), l(p, c) ? p[c] : typeof p.constructor == "function" && p instanceof p.constructor ? p.constructor.prototype : p instanceof Object ? f : null;
              };
            }
          ),
          /***/
          e177: (
            /***/
            function(i, d, n) {
              var l = n("d039");
              i.exports = !l(function() {
                function o() {
                }
                return o.prototype.constructor = null, Object.getPrototypeOf(new o()) !== o.prototype;
              });
            }
          ),
          /***/
          e260: (
            /***/
            function(i, d, n) {
              var l = n("fc6a"), o = n("44d2"), s = n("3f8c"), u = n("69f3"), c = n("7dd0"), f = "Array Iterator", p = u.set, h = u.getterFor(f);
              i.exports = c(Array, "Array", function(v, m) {
                p(this, {
                  type: f,
                  target: l(v),
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
            function(i, d, n) {
              var l = n("23e7"), o = n("d039"), s = n("fc6a"), u = n("06cf").f, c = n("83ab"), f = o(function() {
                u(1);
              }), p = !c || f;
              l({ target: "Object", stat: !0, forced: p, sham: !c }, {
                getOwnPropertyDescriptor: function(v, m) {
                  return u(s(v), m);
                }
              });
            }
          ),
          /***/
          e538: (
            /***/
            function(i, d, n) {
              var l = n("b622");
              d.f = l;
            }
          ),
          /***/
          e893: (
            /***/
            function(i, d, n) {
              var l = n("5135"), o = n("56ef"), s = n("06cf"), u = n("9bf2");
              i.exports = function(c, f) {
                for (var p = o(f), h = u.f, v = s.f, m = 0; m < p.length; m++) {
                  var g = p[m];
                  l(c, g) || h(c, g, v(f, g));
                }
              };
            }
          ),
          /***/
          e8b5: (
            /***/
            function(i, d, n) {
              var l = n("c6b6");
              i.exports = Array.isArray || function(s) {
                return l(s) == "Array";
              };
            }
          ),
          /***/
          e95a: (
            /***/
            function(i, d, n) {
              var l = n("b622"), o = n("3f8c"), s = l("iterator"), u = Array.prototype;
              i.exports = function(c) {
                return c !== void 0 && (o.Array === c || u[s] === c);
              };
            }
          ),
          /***/
          f5df: (
            /***/
            function(i, d, n) {
              var l = n("00ee"), o = n("c6b6"), s = n("b622"), u = s("toStringTag"), c = o(/* @__PURE__ */ function() {
                return arguments;
              }()) == "Arguments", f = function(p, h) {
                try {
                  return p[h];
                } catch {
                }
              };
              i.exports = l ? o : function(p) {
                var h, v, m;
                return p === void 0 ? "Undefined" : p === null ? "Null" : typeof (v = f(h = Object(p), u)) == "string" ? v : c ? o(h) : (m = o(h)) == "Object" && typeof h.callee == "function" ? "Arguments" : m;
              };
            }
          ),
          /***/
          f772: (
            /***/
            function(i, d, n) {
              var l = n("5692"), o = n("90e3"), s = l("keys");
              i.exports = function(u) {
                return s[u] || (s[u] = o(u));
              };
            }
          ),
          /***/
          fb15: (
            /***/
            function(i, d, n) {
              if (n.r(d), typeof window < "u") {
                var l = window.document.currentScript;
                {
                  var o = n("8875");
                  l = o(), "currentScript" in document || Object.defineProperty(document, "currentScript", { get: o });
                }
                var s = l && l.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
                s && (n.p = s[1]);
              }
              n("99af"), n("4de4"), n("4160"), n("c975"), n("d81d"), n("a434"), n("159b"), n("a4d3"), n("e439"), n("dbb4"), n("b64b");
              function u(G, K, ee) {
                return K in G ? Object.defineProperty(G, K, {
                  value: ee,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                }) : G[K] = ee, G;
              }
              function c(G, K) {
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
                  K % 2 ? c(Object(ee), !0).forEach(function(ce) {
                    u(G, ce, ee[ce]);
                  }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(G, Object.getOwnPropertyDescriptors(ee)) : c(Object(ee)).forEach(function(ce) {
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
              function E(G) {
                if (Array.isArray(G)) return v(G);
              }
              function w(G) {
                if (typeof Symbol < "u" && Symbol.iterator in Object(G)) return Array.from(G);
              }
              function T() {
                throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
              }
              function S(G) {
                return E(G) || w(G) || m(G) || T();
              }
              var D = n("a352"), L = /* @__PURE__ */ n.n(D);
              function U(G) {
                G.parentElement !== null && G.parentElement.removeChild(G);
              }
              function j(G, K, ee) {
                var ce = ee === 0 ? G.children[0] : G.children[ee - 1].nextSibling;
                G.insertBefore(K, ce);
              }
              var B = n("dbf1");
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
              function Ie(G) {
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
              function I(G, K) {
                if (!(G instanceof K))
                  throw new TypeError("Cannot call a class as a function");
              }
              function A(G, K) {
                for (var ee = 0; ee < K.length; ee++) {
                  var ce = K[ee];
                  ce.enumerable = ce.enumerable || !1, ce.configurable = !0, "value" in ce && (ce.writable = !0), Object.defineProperty(G, ce.key, ce);
                }
              }
              function F(G, K, ee) {
                return K && A(G.prototype, K), G;
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
                  I(this, G), this.defaultNodes = Se, this.children = [].concat(S(ce), S(Se), S(Fe)), this.externalComponent = Ae.externalComponent, this.rootTransition = Ae.transition, this.tag = Ae.tag, this.realList = Ee;
                }
                return F(G, [{
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
                    var Oe = b(Se[0]), we = S(Ae).findIndex(function(Re) {
                      return Re === Oe;
                    });
                    return ee < we ? 0 : Fe;
                  }
                }, {
                  key: "_isRootComponent",
                  get: function() {
                    return this.externalComponent || this.rootTransition;
                  }
                }]), G;
              }(), $ = n("8bbf");
              function V(G, K) {
                var ee = G[K];
                return ee ? ee() : [];
              }
              function Q(G) {
                var K = G.$slots, ee = G.realList, ce = G.getKey, Se = ee || [], Fe = ["header", "footer"].map(function(Re) {
                  return V(K, Re);
                }), Ae = y(Fe, 2), Ee = Ae[0], Ve = Ae[1], Oe = K.item;
                if (!Oe)
                  throw new Error("draggable element must have an item slot");
                var we = Se.flatMap(function(Re, Be) {
                  return Oe({
                    element: Re,
                    index: Be
                  }).map(function(ke) {
                    return ke.key = ce(Re), ke.props = f(f({}, ke.props || {}), {}, {
                      "data-draggable": !0
                    }), ke;
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
                var K = xe(G), ee = !Ie(G) && !K;
                return {
                  transition: K,
                  externalComponent: ee,
                  tag: ee ? Object($.resolveComponent)(G) : K ? $.TransitionGroup : G
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
                Object($.nextTick)(function() {
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
              function le(G) {
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
              }, Ke = ["update:modelValue", "change"].concat(S([].concat(S(he.manageAndEmit), S(he.emit)).map(function(G) {
                return G.toLowerCase();
              }))), qe = Object($.defineComponent)({
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
                    return Ee.render($.h, Ve);
                  } catch (Oe) {
                    return this.error = !0, Object($.h)("pre", {
                      style: {
                        color: "red"
                      }
                    }, Oe.stack);
                  }
                },
                created: function() {
                  this.list !== null && this.modelValue !== null && B.a.error("modelValue and list props are mutually exclusive! Please set one or another.");
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
                          return le.call(K, Ve);
                        },
                        emit: function(Ve) {
                          return q.bind(K, Ve);
                        },
                        manage: function(Ve) {
                          return te.call(K, Ve);
                        }
                      }
                    }), Ae = ce.nodeType === 1 ? ce : ce.parentElement;
                    this._sortable = new L.a(Ae, Fe), this.targetDomElement = Ae, Ae.__draggable_component__ = this;
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
                    Object($.nextTick)(function() {
                      return ee.$emit("change", K);
                    });
                  },
                  alterList: function(K) {
                    if (this.list) {
                      K(this.list);
                      return;
                    }
                    var ee = S(this.modelValue);
                    K(ee), this.$emit("update:modelValue", ee);
                  },
                  spliceList: function() {
                    var K = arguments, ee = function(Se) {
                      return Se.splice.apply(Se, S(K));
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
                    if (j(this.$el, K.item, K.oldIndex), K.pullMode === "clone") {
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
                    U(K.item), j(K.from, K.item, K.oldIndex);
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
                    var ce = S(ee.to.children).filter(function(Ee) {
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
              d.default = Ze;
            }
          ),
          /***/
          fb6a: (
            /***/
            function(i, d, n) {
              var l = n("23e7"), o = n("861d"), s = n("e8b5"), u = n("23cb"), c = n("50c4"), f = n("fc6a"), p = n("8418"), h = n("b622"), v = n("1dde"), m = n("ae40"), g = v("slice"), y = m("slice", { ACCESSORS: !0, 0: 0, 1: 2 }), E = h("species"), w = [].slice, T = Math.max;
              l({ target: "Array", proto: !0, forced: !g || !y }, {
                slice: function(D, L) {
                  var U = f(this), j = c(U.length), B = u(D, j), H = u(L === void 0 ? j : L, j), k, z, Y;
                  if (s(U) && (k = U.constructor, typeof k == "function" && (k === Array || s(k.prototype)) ? k = void 0 : o(k) && (k = k[E], k === null && (k = void 0)), k === Array || k === void 0))
                    return w.call(U, B, H);
                  for (z = new (k === void 0 ? Array : k)(T(H - B, 0)), Y = 0; B < H; B++, Y++) B in U && p(z, Y, U[B]);
                  return z.length = Y, z;
                }
              });
            }
          ),
          /***/
          fc6a: (
            /***/
            function(i, d, n) {
              var l = n("44ad"), o = n("1d80");
              i.exports = function(s) {
                return l(o(s));
              };
            }
          ),
          /***/
          fdbc: (
            /***/
            function(i, d) {
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
            function(i, d, n) {
              var l = n("4930");
              i.exports = l && !Symbol.sham && typeof Symbol.iterator == "symbol";
            }
          )
          /******/
        }).default
      );
    });
  }(uo)), uo.exports;
}
var lv = sv();
const Io = /* @__PURE__ */ Ma(lv), uv = {
  name: "VActions",
  directives: {
    clickOutside: Is
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
}, cv = { class: "flex items-center" }, dv = { class: "relative flex items-center" }, fv = {
  key: 0,
  width: "16",
  height: "4",
  viewBox: "0 0 16 4",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function hv(t, e, r, a, i, d) {
  const n = es("click-outside");
  return nt((oe(), se("div", cv, [
    N("div", dv, [
      N("div", {
        ref: "button",
        class: et([{ active: i.active }, "relative flex cursor-pointer hover:bg-gray-200 w-5 h-5 items-center justify-center rounded-lg"]),
        onClick: e[0] || (e[0] = rr((l) => i.active = !i.active, ["prevent"]))
      }, [
        r.showActionIcon ? (oe(), se("svg", fv, e[1] || (e[1] = [
          N("path", {
            d: "M8.00065 2.83341C8.46089 2.83341 8.83398 2.46032 8.83398 2.00008C8.83398 1.53984 8.46089 1.16675 8.00065 1.16675C7.54041 1.16675 7.16732 1.53984 7.16732 2.00008C7.16732 2.46032 7.54041 2.83341 8.00065 2.83341Z",
            stroke: "#98A2B3",
            "stroke-width": "1.66667",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1),
          N("path", {
            d: "M13.834 2.83341C14.2942 2.83341 14.6673 2.46032 14.6673 2.00008C14.6673 1.53984 14.2942 1.16675 13.834 1.16675C13.3737 1.16675 13.0007 1.53984 13.0007 2.00008C13.0007 2.46032 13.3737 2.83341 13.834 2.83341Z",
            stroke: "#98A2B3",
            "stroke-width": "1.66667",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1),
          N("path", {
            d: "M2.16732 2.83341C2.62755 2.83341 3.00065 2.46032 3.00065 2.00008C3.00065 1.53984 2.62755 1.16675 2.16732 1.16675C1.70708 1.16675 1.33398 1.53984 1.33398 2.00008C1.33398 2.46032 1.70708 2.83341 2.16732 2.83341Z",
            stroke: "#98A2B3",
            "stroke-width": "1.66667",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ]))) : je("", !0),
        bn(t.$slots, "button")
      ], 2),
      ie(Pa, { name: "fade" }, {
        default: Et(() => [
          i.active ? (oe(), se("div", {
            key: 0,
            class: et(["absolute right-0 top-full z-20 w-[200px] rounded bg-white shadow-xl ring-1 ring-neutral-100", r.classes])
          }, [
            bn(t.$slots, "dropdown")
          ], 2)) : je("", !0)
        ]),
        _: 3
      })
    ])
  ])), [
    [n, () => this.active = !1]
  ]);
}
const Sl = /* @__PURE__ */ mt(uv, [["render", hv]]), pv = {
  name: "VGrid",
  inject: ["bus"],
  components: { VActions: Sl, VToggle: Ja, draggable: Io },
  props: {
    modelValue: {
      type: Array,
      default: () => [
        [[]]
      ]
    },
    allowAddRow: {
      type: Boolean,
      default: !0
    },
    allowAddRowAsTemplate: {
      type: Boolean,
      default: !0
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
      this.previousGrid = nn(this.grid);
    },
    handleAdd(t, e, r) {
      const a = nn(t.item._underlying_vm_), i = this.findFieldPosition(a), d = this.previousGrid[e][r];
      if (a.type === "grid") {
        this.grid[e][r] = [];
        return;
      }
      this.grid[e][r].length > 1 && (i && Object.keys(i).length && d[0].id !== a.id && (this.grid[i.rowIndex][i.colIndex] = [], this.grid[i.rowIndex][i.colIndex].push(d[0])), this.grid[e][r] = [], this.grid[e][r].push(a)), this.previousGrid = nn(this.grid);
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
}, vv = { class: "flex justify-between py-2" }, mv = { class: "grid gap-2 w-full" }, gv = { class: "pl-1 pr-3 py-2.5 w-full bg-white rounded-lg flex items-center gap-2" }, yv = { class: "flex flex-row justify-between items-center w-full" }, bv = { class: "text-sm text-gray-900" }, xv = { class: "divide-y text-sm text-gray-700" }, Sv = ["onClick"], Ev = ["onClick"], wv = ["onClick"], Tv = { class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm text-gray-600 z-0" }, Av = { key: 0 }, Cv = {
  key: 0,
  class: "mt-2 flex gap-2"
};
function Ov(t, e, r, a, i, d) {
  const n = ln("v-toggle"), l = ln("v-actions"), o = ln("draggable");
  return oe(), se("div", null, [
    ie(n, {
      class: "mt-3 mb-1",
      title: "Allow form users to add rows when filling out the form",
      modelValue: i.localAllowToAdd,
      "onUpdate:modelValue": e[0] || (e[0] = (s) => i.localAllowToAdd = s)
    }, null, 8, ["modelValue"]),
    N("div", vv, [
      e[4] || (e[4] = N("h4", { class: "text-base font-semibold text-gray-900" }, "Define columns/rows", -1)),
      N("div", null, [
        N("a", {
          onClick: e[1] || (e[1] = (...s) => d.addColumn && d.addColumn(...s)),
          class: "cursor-pointer text-brand-700 flex items-center text-sm font-semibold hover:bg-brand-50 p-1 gap-1 rounded"
        }, e[3] || (e[3] = [
          N("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            N("path", {
              d: "M6.99935 1.1665V12.8332M1.16602 6.99984H12.8327",
              stroke: "#931C61",
              "stroke-width": "1.66667",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            })
          ], -1),
          tn(" Add Column ")
        ]))
      ])
    ]),
    N("div", mv, [
      (oe(!0), se(Ot, null, Pn(i.grid, (s, u) => (oe(), se("div", {
        key: "row-" + u,
        class: "flex gap-2 relative"
      }, [
        (oe(!0), se(Ot, null, Pn(s, (c, f) => (oe(), se("div", {
          key: "cell-" + u + "-" + f,
          class: et(d.getClassForItem(i.grid[u], f))
        }, [
          ie(o, {
            "item-key": "id",
            modelValue: i.grid[u][f],
            "onUpdate:modelValue": (p) => i.grid[u][f] = p,
            onAdd: (p) => d.handleAdd(p, u, f),
            onDrag: d.onDrag,
            "swap-threshold": "0.65",
            group: { name: `${u} - ${f}`, pull: !0, put: !0 },
            class: et(["w-full h-full items-center justify-center", { flex: !i.grid[u][f].length }]),
            "ghost-class": "dragging-item"
          }, {
            item: Et(({ element: p }) => [
              N("div", gv, [
                e[8] || (e[8] = N("svg", {
                  class: "cursor-pointer",
                  width: "8",
                  height: "13",
                  viewBox: "0 0 7 13",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  N("rect", {
                    x: "1",
                    y: "1",
                    width: "2",
                    height: "2",
                    fill: "#667085"
                  }),
                  N("rect", {
                    x: "4",
                    y: "1",
                    width: "2",
                    height: "2",
                    fill: "#667085"
                  }),
                  N("rect", {
                    x: "1",
                    y: "4",
                    width: "2",
                    height: "2",
                    fill: "#667085"
                  }),
                  N("rect", {
                    x: "4",
                    y: "4",
                    width: "2",
                    height: "2",
                    fill: "#667085"
                  }),
                  N("rect", {
                    x: "1",
                    y: "7",
                    width: "2",
                    height: "2",
                    fill: "#667085"
                  }),
                  N("rect", {
                    x: "1",
                    y: "10",
                    width: "2",
                    height: "2",
                    fill: "#667085"
                  }),
                  N("rect", {
                    x: "4",
                    y: "7",
                    width: "2",
                    height: "2",
                    fill: "#667085"
                  }),
                  N("rect", {
                    x: "4",
                    y: "10",
                    width: "2",
                    height: "2",
                    fill: "#667085"
                  })
                ], -1)),
                N("div", yv, [
                  N("span", bv, We(p.label), 1),
                  ie(l, null, {
                    dropdown: Et(() => [
                      N("ul", xv, [
                        N("li", {
                          onClick: (h) => d.edit(u),
                          class: "cursor-pointer flex items-center p-2 hover:bg-brand-50 gap-2 rounded-t"
                        }, e[5] || (e[5] = [
                          N("svg", {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 16 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                          }, [
                            N("path", {
                              d: "M1.66602 14.3334L5.36553 12.9105C5.60216 12.8195 5.72047 12.774 5.83116 12.7146C5.92948 12.6618 6.02322 12.6009 6.11138 12.5324C6.21063 12.4554 6.30027 12.3658 6.47954 12.1865L13.9994 4.66671C14.7357 3.93033 14.7357 2.73642 13.9994 2.00004C13.263 1.26366 12.0691 1.26366 11.3327 2.00004L3.81287 9.51985C3.6336 9.69912 3.54396 9.78876 3.46694 9.88801C3.39853 9.97617 3.33762 10.0699 3.28484 10.1682C3.22542 10.2789 3.17991 10.3972 3.0889 10.6339L1.66602 14.3334ZM1.66602 14.3334L3.0381 10.766C3.13628 10.5107 3.18537 10.3831 3.26958 10.3246C3.34316 10.2735 3.43422 10.2542 3.52221 10.271C3.6229 10.2902 3.7196 10.3869 3.913 10.5803L5.41906 12.0864C5.61246 12.2798 5.70916 12.3765 5.72839 12.4772C5.7452 12.5652 5.72587 12.6562 5.67478 12.7298C5.61631 12.814 5.48867 12.8631 5.2334 12.9613L1.66602 14.3334Z",
                              stroke: "#667085",
                              "stroke-width": "1.5",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            })
                          ], -1),
                          N("span", null, "Edit", -1)
                        ]), 8, Sv),
                        N("li", {
                          onClick: (h) => d.removeField(u, f),
                          class: "cursor-pointer flex items-center gap-2 p-2 hover:bg-brand-200"
                        }, e[6] || (e[6] = [
                          N("svg", {
                            width: "14",
                            height: "16",
                            viewBox: "0 0 14 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                          }, [
                            N("path", {
                              d: "M9.66667 3.99992V3.46659C9.66667 2.71985 9.66667 2.34648 9.52134 2.06126C9.39351 1.81038 9.18954 1.60641 8.93865 1.47858C8.65344 1.33325 8.28007 1.33325 7.53333 1.33325H6.46667C5.71993 1.33325 5.34656 1.33325 5.06135 1.47858C4.81046 1.60641 4.60649 1.81038 4.47866 2.06126C4.33333 2.34648 4.33333 2.71985 4.33333 3.46659V3.99992M5.66667 7.66659V10.9999M8.33333 7.66659V10.9999M1 3.99992H13M11.6667 3.99992V11.4666C11.6667 12.5867 11.6667 13.1467 11.4487 13.5746C11.2569 13.9509 10.951 14.2569 10.5746 14.4486C10.1468 14.6666 9.58677 14.6666 8.46667 14.6666H5.53333C4.41323 14.6666 3.85318 14.6666 3.42535 14.4486C3.04903 14.2569 2.74307 13.9509 2.55132 13.5746C2.33333 13.1467 2.33333 12.5867 2.33333 11.4666V3.99992",
                              stroke: "#667085",
                              "stroke-width": "1.5",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            })
                          ], -1),
                          N("span", null, "Remove this cell", -1)
                        ]), 8, Ev),
                        N("li", {
                          onClick: (h) => d.removeColumn(u, f),
                          class: "cursor-pointer flex items-center gap-2 p-2 hover:bg-brand-50 rounded-b"
                        }, e[7] || (e[7] = [
                          N("svg", {
                            width: "14",
                            height: "16",
                            viewBox: "0 0 14 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                          }, [
                            N("path", {
                              d: "M9.66667 3.99992V3.46659C9.66667 2.71985 9.66667 2.34648 9.52134 2.06126C9.39351 1.81038 9.18954 1.60641 8.93865 1.47858C8.65344 1.33325 8.28007 1.33325 7.53333 1.33325H6.46667C5.71993 1.33325 5.34656 1.33325 5.06135 1.47858C4.81046 1.60641 4.60649 1.81038 4.47866 2.06126C4.33333 2.34648 4.33333 2.71985 4.33333 3.46659V3.99992M5.66667 7.66659V10.9999M8.33333 7.66659V10.9999M1 3.99992H13M11.6667 3.99992V11.4666C11.6667 12.5867 11.6667 13.1467 11.4487 13.5746C11.2569 13.9509 10.951 14.2569 10.5746 14.4486C10.1468 14.6666 9.58677 14.6666 8.46667 14.6666H5.53333C4.41323 14.6666 3.85318 14.6666 3.42535 14.4486C3.04903 14.2569 2.74307 13.9509 2.55132 13.5746C2.33333 13.1467 2.33333 12.5867 2.33333 11.4666V3.99992",
                              stroke: "#667085",
                              "stroke-width": "1.5",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            })
                          ], -1),
                          N("span", null, "Remove whole column", -1)
                        ]), 8, wv)
                      ])
                    ]),
                    _: 2
                  }, 1024)
                ])
              ])
            ]),
            _: 2
          }, 1032, ["modelValue", "onUpdate:modelValue", "onAdd", "onDrag", "group", "class"]),
          nt(N("p", Tv, [
            r.isDragging ? je("", !0) : (oe(), se("span", Av, "Drag a layout/component in"))
          ], 512), [
            [_l, !i.grid[u][f].length]
          ])
        ], 2))), 128))
      ]))), 128))
    ]),
    r.allowAddRowAsTemplate ? (oe(), se("div", Cv, [
      N("a", {
        onClick: e[2] || (e[2] = (...s) => d.addRow && d.addRow(...s)),
        class: "cursor-pointer text-brand-700 flex items-center text-sm font-semibold hover:bg-brand-50 p-1 gap-1 rounded"
      }, e[9] || (e[9] = [
        N("svg", {
          width: "14",
          height: "14",
          viewBox: "0 0 14 14",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, [
          N("path", {
            d: "M6.99935 1.1665V12.8332M1.16602 6.99984H12.8327",
            stroke: "#931C61",
            "stroke-width": "1.66667",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          })
        ], -1),
        tn(" Add Row ")
      ]))
    ])) : je("", !0)
  ]);
}
const Pv = /* @__PURE__ */ mt(pv, [["render", Ov]]), Rv = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
};
function Iv(t, e) {
  return oe(), se("svg", Rv, e[0] || (e[0] = [
    N("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M16 6v-.8c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C14.48 2 13.92 2 12.8 2h-1.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C8 3.52 8 4.08 8 5.2V6m2 5.5v5m4-5v5M3 6h18m-2 0v11.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C16.72 22 15.88 22 14.2 22H9.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C5 19.72 5 18.88 5 17.2V6"
    }, null, -1)
  ]));
}
const Zi = { render: Iv }, Dv = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "8",
  height: "13",
  fill: "none",
  viewBox: "0 0 7 13"
};
function Fv(t, e) {
  return oe(), se("svg", Dv, e[0] || (e[0] = [
    N("path", {
      fill: "#667085",
      d: "M1 1h2v2H1zM4 1h2v2H4zM1 4h2v2H1zM4 4h2v2H4zM1 7h2v2H1zM1 10h2v2H1zM4 7h2v2H4zM4 10h2v2H4z"
    }, null, -1)
  ]));
}
const qi = { render: Fv }, Mv = { class: "-field-title handle" }, Lv = ["onClick"], Uv = { class: "-title" }, Nv = { class: "-type-title" }, jv = { class: "flex gap-6 items-center" }, kv = {
  key: 0,
  class: "-prop -options"
}, $v = { class: "divide-y text-sm text-gray-700" }, Bv = ["onClick"], Vv = { class: "-field-properties" }, Hv = { class: "-prop" }, zv = ["onUpdate:modelValue"], Gv = { class: "-prop" }, Wv = ["onUpdate:modelValue"], Yv = { class: "-prop" }, Kv = ["onUpdate:modelValue", "placeholder"], Xv = { class: "-two-columns" }, Jv = { class: "-prop" }, Qv = ["onUpdate:modelValue"], Zv = { class: "-prop -width" }, qv = ["onUpdate:modelValue"], _v = { class: "-prop" }, em = ["onUpdate:modelValue"], tm = {
  key: 0,
  class: "-prop"
}, nm = ["onUpdate:modelValue"], rm = {
  key: 1,
  class: "-prop -width"
}, om = ["onUpdate:modelValue"], am = {
  key: 0,
  class: "-two-columns"
}, im = { class: "-prop" }, sm = ["onUpdate:modelValue"], lm = {
  key: 0,
  class: "-prop -width"
}, um = ["onUpdate:modelValue"], cm = { class: "-prop" }, dm = { class: "-label" }, fm = ["onUpdate:modelValue"], hm = { class: "-two-columns" }, pm = {
  key: 0,
  class: "-prop"
}, vm = ["onUpdate:modelValue"], mm = {
  key: 1,
  class: "-prop -width"
}, gm = ["onUpdate:modelValue"], ym = {
  key: 2,
  class: "-prop"
}, bm = ["onUpdate:modelValue"], xm = {
  key: 3,
  class: "-prop -options"
}, Sm = { class: "flex justify-between" }, Em = { class: "-new" }, wm = ["onClick"], Tm = { class: "-option" }, Am = ["onUpdate:modelValue"], Cm = ["onClick"], Om = { key: 0 }, El = {
  __name: "FieldDraggable",
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
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const r = t, a = e, i = _e([...r.modelValue]), d = ["select", "check-group", "radio-group"];
    Oa(
      i,
      (u) => {
        a("update:modelValue", u);
      },
      { deep: !0 }
    );
    const n = (u) => {
      switch (u.type) {
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
          return u.type.split("_").map((c) => c.charAt(0).toUpperCase() + c.slice(1)).join(" ");
      }
    }, l = (u) => {
      i.value.splice(u, 1);
    }, o = (u) => {
      u.options.push("Option " + (u.options.length + 1));
    }, s = (u, c) => {
      u.options.splice(c, 1);
    };
    return (u, c) => (oe(), un(_t(Io), {
      class: et(["pb-60 relative z-10", { "!pb-4": t.disableDropzone }]),
      modelValue: i.value,
      "onUpdate:modelValue": c[0] || (c[0] = (f) => i.value = f),
      "item-key": "id",
      "ghost-class": "dragging-item",
      sort: !0,
      "empty-insert-threshold": 0,
      "inverted-swap-threshold": 0,
      group: { name: "fields", pull: !1, put: !0 },
      handle: ".handle"
    }, {
      item: Et(({ element: f, index: p }) => [
        N("div", {
          class: et(["relative -field", ["-type-" + f.type]])
        }, [
          N("div", Mv, [
            N("h2", {
              onClick: (h) => f.isShowing = !f.isShowing,
              class: "relative cursor-pointer"
            }, [
              ie(_t(qi), { class: "w-5 h-5 absolute top-[6px] -left-[20px]" }),
              N("span", Uv, [
                N("span", Nv, We(n(f)), 1)
              ])
            ], 8, Lv),
            N("div", jv, [
              f.hasOwnProperty("required") ? (oe(), se("div", kv, [
                ie(Ja, {
                  title: "Required",
                  modelValue: f.required,
                  "onUpdate:modelValue": (h) => f.required = h
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ])) : je("", !0),
              ie(Sl, null, {
                dropdown: Et(() => [
                  N("ul", $v, [
                    N("li", {
                      onClick: (h) => l(p),
                      class: "cursor-pointer flex items-center gap-2 p-2 hover:bg-brand-50 rounded"
                    }, [
                      ie(_t(Zi), { class: "w-5 h-5" }),
                      c[1] || (c[1] = N("span", null, "Remove", -1))
                    ], 8, Bv)
                  ])
                ]),
                _: 2
              }, 1024)
            ])
          ]),
          N("div", Vv, [
            f != null && f.builder ? (oe(), un(Hn(f.builder), ts(Ra({ key: 0 }, { data: f == null ? void 0 : f.data })), null, 16)) : f.type === "grid" ? (oe(), se(Ot, { key: 1 }, [
              N("div", Hv, [
                c[2] || (c[2] = N("span", { class: "-label" }, "Label", -1)),
                nt(N("input", {
                  type: "text",
                  "onUpdate:modelValue": (h) => f.label = h
                }, null, 8, zv), [
                  [St, f.label]
                ])
              ]),
              N("div", Gv, [
                c[3] || (c[3] = N("span", { class: "-label" }, "Supporting Text", -1)),
                nt(N("input", {
                  type: "text",
                  "onUpdate:modelValue": (h) => f.hint = h
                }, null, 8, Wv), [
                  [St, f.hint]
                ])
              ]),
              ie(Pv, {
                modelValue: f.grid,
                "onUpdate:modelValue": (h) => f.grid = h,
                "is-dragging": t.isDragging,
                "allow-add-row": f.allow_add_row,
                "onUpdate:allowAddRow": (h) => f.allow_add_row = h
              }, null, 8, ["modelValue", "onUpdate:modelValue", "is-dragging", "allow-add-row", "onUpdate:allowAddRow"])
            ], 64)) : f.type === "paragraph" ? (oe(), se(Ot, { key: 2 }, [
              N("div", Yv, [
                c[4] || (c[4] = N("span", null, "Content", -1)),
                nt(N("textarea", {
                  cols: "30",
                  rows: "3",
                  "onUpdate:modelValue": (h) => f.content = h,
                  placeholder: f.placeholder
                }, null, 8, Kv), [
                  [St, f.content]
                ])
              ]),
              N("div", Xv, [
                N("div", Jv, [
                  c[6] || (c[6] = N("span", null, "Type", -1)),
                  nt(N("select", {
                    "onUpdate:modelValue": (h) => f.content_type = h
                  }, c[5] || (c[5] = [
                    N("option", { value: "p" }, "p", -1),
                    N("option", { value: "blockquote" }, "blockquote", -1),
                    N("option", { value: "address" }, "address", -1)
                  ]), 8, Qv), [
                    [Qr, f.content_type]
                  ])
                ]),
                N("div", Zv, [
                  c[7] || (c[7] = N("span", { class: "-label" }, "Classes", -1)),
                  nt(N("input", {
                    "onUpdate:modelValue": (h) => f.class = h,
                    type: "text",
                    name: "classes",
                    placeholder: "Input space separated classes"
                  }, null, 8, qv), [
                    [St, f.class]
                  ])
                ])
              ])
            ], 64)) : f.type === "checkbox" ? (oe(), se(Ot, { key: 3 }, [
              N("div", _v, [
                c[8] || (c[8] = N("span", { class: "-label" }, "Label", -1)),
                nt(N("input", {
                  type: "text",
                  "onUpdate:modelValue": (h) => f.label = h
                }, null, 8, em), [
                  [St, f.label]
                ])
              ]),
              f.hasOwnProperty("hint") ? (oe(), se("div", tm, [
                c[9] || (c[9] = N("span", { class: "-label" }, "Supporting Text", -1)),
                nt(N("textarea", {
                  cols: "30",
                  rows: "3",
                  "onUpdate:modelValue": (h) => f.hint = h,
                  placeholder: "Supporting text"
                }, null, 8, nm), [
                  [St, f.hint]
                ])
              ])) : je("", !0),
              f.class ? (oe(), se("div", rm, [
                c[11] || (c[11] = N("span", { class: "-label" }, "Width", -1)),
                nt(N("select", {
                  "onUpdate:modelValue": (h) => f.class = h
                }, c[10] || (c[10] = [
                  N("option", { value: "w-full" }, "Full", -1),
                  N("option", { value: "w-1/2" }, "Half", -1)
                ]), 8, om), [
                  [Qr, f.class]
                ])
              ])) : je("", !0)
            ], 64)) : (oe(), se(Ot, { key: 4 }, [
              ["check-group", "radio-group", "signature", "file-upload"].includes(f.type) ? (oe(), se("div", am, [
                N("div", im, [
                  c[12] || (c[12] = N("span", { class: "-label" }, "Label", -1)),
                  nt(N("input", {
                    type: "text",
                    "onUpdate:modelValue": (h) => f.label = h
                  }, null, 8, sm), [
                    [St, f.label]
                  ])
                ]),
                f.class ? (oe(), se("div", lm, [
                  c[14] || (c[14] = N("span", { class: "-label" }, "Width", -1)),
                  nt(N("select", {
                    "onUpdate:modelValue": (h) => f.class = h
                  }, c[13] || (c[13] = [
                    N("option", { value: "w-full" }, "Full", -1),
                    N("option", { value: "w-1/2" }, "Half", -1)
                  ]), 8, um), [
                    [Qr, f.class]
                  ])
                ])) : je("", !0)
              ])) : (oe(), se(Ot, { key: 1 }, [
                N("div", cm, [
                  N("span", dm, We(f.type === "heading" ? "Heading" : "Label"), 1),
                  nt(N("input", {
                    type: "text",
                    "onUpdate:modelValue": (h) => f.label = h
                  }, null, 8, fm), [
                    [St, f.label]
                  ])
                ]),
                N("div", hm, [
                  f.placeholder !== null ? (oe(), se("div", pm, [
                    c[15] || (c[15] = N("span", { class: "-label" }, "Placeholder", -1)),
                    nt(N("input", {
                      type: "text",
                      name: "placeholder",
                      "onUpdate:modelValue": (h) => f.placeholder = h
                    }, null, 8, vm), [
                      [St, f.placeholder]
                    ])
                  ])) : je("", !0),
                  f.class ? (oe(), se("div", mm, [
                    c[17] || (c[17] = N("span", { class: "-label" }, "Width", -1)),
                    nt(N("select", {
                      "onUpdate:modelValue": (h) => f.class = h
                    }, c[16] || (c[16] = [
                      N("option", { value: "w-full" }, "Full", -1),
                      N("option", { value: "w-1/2" }, "Half", -1)
                    ]), 8, gm), [
                      [Qr, f.class]
                    ])
                  ])) : je("", !0)
                ])
              ], 64)),
              f.hasOwnProperty("hint") ? (oe(), se("div", ym, [
                c[18] || (c[18] = N("span", { class: "-label" }, "Hint Text", -1)),
                nt(N("input", {
                  type: "text",
                  "onUpdate:modelValue": (h) => f.hint = h
                }, null, 8, bm), [
                  [St, f.hint]
                ])
              ])) : je("", !0),
              d.includes(f.type) && f.options ? (oe(), se("div", xm, [
                N("div", Sm, [
                  c[20] || (c[20] = N("span", { class: "-label mb-2 text-base font-semibold text-gray-900" }, "Options", -1)),
                  N("div", Em, [
                    N("a", {
                      class: "cursor-pointer text-brand-700 flex items-center text-sm font-semibold mr-3.5 hover:bg-brand-50 py-1 px-2 gap-1 rounded",
                      onClick: rr((h) => o(f), ["prevent"])
                    }, [
                      ie(_t(ul), { class: "w-5 h-5" }),
                      c[19] || (c[19] = tn(" Add "))
                    ], 8, wm)
                  ])
                ]),
                ie(_t(Io), {
                  list: f.options,
                  class: "-added",
                  "item-key": "id",
                  group: { name: f.id, pull: !1, put: !1 },
                  handle: ".option-handle"
                }, {
                  item: Et(({ option: h, index: v }) => [
                    N("div", Tm, [
                      ie(_t(qi), { class: "w-5 h-5" }),
                      nt(N("input", {
                        "onUpdate:modelValue": (m) => f.options[v] = m,
                        type: "text",
                        class: "mx-2 text-base text-gray-900"
                      }, null, 8, Am), [
                        [St, f.options[v]]
                      ]),
                      N("a", {
                        class: "hover:bg-brand-50 rounded cursor-pointer py-1",
                        onClick: (m) => s(f, v)
                      }, [
                        ie(_t(Zi), { class: "w-5 h-5" })
                      ], 8, Cm)
                    ])
                  ]),
                  _: 2
                }, 1032, ["list", "group"])
              ])) : je("", !0)
            ], 64))
          ])
        ], 2)
      ]),
      footer: Et(() => [
        t.disableDropzone ? je("", !0) : (oe(), se("p", {
          key: 0,
          class: et(["absolute shadow-sm border border-dashed border-gray-300 border-spacing-96 mb-[96px] rounded-xl w-full h-36 bottom-0 z-0 flex items-center justify-center text-sm text-gray-600", { "h-[638px] !top-0": !i.value.length }])
        }, [
          t.isDragging ? je("", !0) : (oe(), se("span", Om, "Drag a layout/component in"))
        ], 2))
      ]),
      _: 1
    }, 8, ["class", "modelValue"]));
  }
}, Pm = {
  name: "EditFieldGrid",
  inject: ["bus"],
  components: { FieldDraggable: El },
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
}, Rm = { class: "p-6 w-[776px]" }, Im = { class: "fields" }, Dm = { class: "draggable" }, Fm = { class: "mb-[20px] text-lg font-semibold text-gray-900" }, Mm = { class: "fixed -bottom-8 right-0 flex justify-end gap-2 text-sm font-semibold bg-white w-full py-2 px-6 rounded-b-lg z-50" };
function Lm(t, e, r, a, i, d) {
  const n = ln("field-draggable");
  return oe(), se("div", Rm, [
    N("div", Im, [
      N("div", Dm, [
        N("h4", Fm, "Row " + We(r.index + 1) + ": multiple columns", 1),
        ie(n, {
          modelValue: i.localFields,
          "onUpdate:modelValue": e[0] || (e[0] = (l) => i.localFields = l),
          "disable-dropzone": ""
        }, null, 8, ["modelValue"])
      ]),
      N("div", Mm, [
        N("a", {
          onClick: e[1] || (e[1] = (...l) => d.close && d.close(...l)),
          class: "rounded-full cursor-pointer px-3 py-2 border hover:bg-gray-200"
        }, "Cancel"),
        N("a", {
          onClick: e[2] || (e[2] = rr((...l) => d.confirm && d.confirm(...l), ["prevent"])),
          class: "rounded-full cursor-pointer bg-brand-400 hover:bg-brand-700 text-white px-3 py-2"
        }, "Save changes")
      ])
    ])
  ]);
}
const Um = /* @__PURE__ */ mt(Pm, [["render", Lm]]), Nm = {
  inject: ["bus"],
  components: {
    EditFieldGrid: Um
  },
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
}, jm = {
  key: 0,
  class: "fixed left-1/2 top-1/2 z-50 flex max-h-screen -translate-x-1/2 -translate-y-1/2 transform flex-col rounded-xl border-tertiary-500 bg-white"
}, km = {
  key: 1,
  class: "p-smSpace"
}, $m = ["innerHTML"], Bm = { class: "flex justify-center space-x-xsSpace pt-xsSpace" }, Vm = ["textContent"], Hm = ["textContent"];
function zm(t, e, r, a, i, d) {
  return oe(), se("div", {
    class: et([{ "-open": i.isOpen }, "v-modal"])
  }, [
    ie(Pa, { name: "fade" }, {
      default: Et(() => [
        i.isOpen ? (oe(), se("div", jm, [
          bn(t.$slots, "default", {}, () => [
            N("div", {
              class: et(["relative max-h-[720px] overflow-y-auto", { "overflow-y-visible": !i.scrollable }])
            }, [
              i.componentName ? (oe(), un(Hn(i.componentName), Ra({ key: 0 }, i.componentData, {
                onConfirm: d.confirm,
                onCloseModal: d.close
              }), null, 16, ["onConfirm", "onCloseModal"])) : (oe(), se("div", km, [
                N("div", {
                  innerHTML: i.componentData,
                  class: "py-mdSpace"
                }, null, 8, $m),
                N("div", Bm, [
                  N("a", {
                    onClick: e[0] || (e[0] = (...n) => d.close && d.close(...n)),
                    class: "btn-secondary btn-sm",
                    textContent: We(d.cancelButton)
                  }, null, 8, Vm),
                  N("a", {
                    onClick: e[1] || (e[1] = rr((...n) => d.confirm && d.confirm(...n), ["prevent"])),
                    class: "btn-primary btn-sm",
                    textContent: We(d.confirmButton)
                  }, null, 8, Hm)
                ])
              ]))
            ], 2)
          ], !0)
        ])) : je("", !0)
      ]),
      _: 3
    })
  ], 2);
}
const Gm = /* @__PURE__ */ mt(Nm, [["render", zm], ["__scopeId", "data-v-88cae789"]]), Wm = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
};
function Ym(t, e) {
  return oe(), se("svg", Wm, e[0] || (e[0] = [
    N("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M2.42 12.713c-.136-.215-.204-.323-.242-.49a1.2 1.2 0 0 1 0-.446c.038-.167.106-.274.242-.49C3.546 9.505 6.895 5 12 5s8.455 4.505 9.58 6.287c.137.215.205.323.243.49.029.125.029.322 0 .446-.038.167-.106.274-.242.49C20.455 14.495 17.105 19 12 19c-5.106 0-8.455-4.505-9.58-6.287"
    }, null, -1),
    N("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
    }, null, -1)
  ]));
}
const Km = { render: Ym }, Xm = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
};
function Jm(t, e) {
  return oe(), se("svg", Xm, e[0] || (e[0] = [
    N("circle", {
      cx: "12",
      cy: "12",
      r: "10",
      stroke: "currentColor",
      "stroke-width": "4",
      class: "opacity-25"
    }, null, -1),
    N("path", {
      fill: "currentColor",
      d: "M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4z",
      class: "opacity-75"
    }, null, -1)
  ]));
}
const _i = { render: Jm };
function Qm() {
  return [
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
  ];
}
const Zm = { class: "flex gap-4 mb-1 px-6 items-center" }, qm = ["href"], _m = ["textContent"], eg = { class: "flex justify-between items-center mb-6 px-6" }, tg = { class: "text-gray-900 text-[30px] font-semibold" }, ng = {
  key: 0,
  class: "flex gap-1 items-center"
}, rg = {
  key: 1,
  class: "flex gap-1 items-center"
}, og = ["name", "value"], ag = {
  key: 0,
  class: "form-builder-preview-container px-6"
}, ig = {
  key: 0,
  class: "pb-6 text-xl font-semibold text-gray-900"
}, sg = { class: "form-builder-preview" }, lg = {
  key: 1,
  class: "form-builder-container mb-1 px-6"
}, ug = { class: "flex" }, cg = { class: "form-builder" }, dg = { class: "form-builder-fields" }, fg = { class: "settings" }, hg = {
  key: 0,
  class: "text-red-600 text-sm mt-0.5 inline-block"
}, pg = { class: "flex w-1/3 flex-col" }, vg = {
  key: 0,
  class: "p-6 mb-4 bg-gray-50 shadow-sm rounded-xl"
}, mg = { class: "space-y-3" }, gg = {
  width: "6",
  height: "6",
  viewBox: "0 0 6 6",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, yg = ["fill"], bg = {
  key: 0,
  class: "flex flex-col text-sm font-regular text-gray-900 gap-1"
}, xg = { class: "text-base" }, Sg = { class: "flex flex-col text-sm font-regular text-gray-900 gap-1" }, Eg = { class: "text-base" }, wg = { class: "form-builder-templates overflow-y-auto" }, Tg = ["onClick"], Ag = { class: "relative group" }, Cg = ["innerHTML"], Og = { class: "absolute hidden group-hover:block bg-black text-white text-sm rounded px-4 py-2 -top-16 left-0 w-[200px]" }, Pg = {
  key: 2,
  class: "sticky bottom-0 flex justify-between text-sm font-semibold w-fill py-2 px-6 z-50 bg-gray-200"
}, Rg = { class: "flex justify-end gap-2" }, Ig = { key: 0 }, Dg = {
  key: 1,
  class: "flex items-center gap-2"
}, Fg = { key: 0 }, Mg = {
  key: 1,
  class: "flex items-center gap-2"
}, _g = {
  __name: "FormBuilder",
  props: {
    name: String,
    form: {
      type: Object,
      default: () => ({})
    },
    redirectUrl: String,
    storeUrl: String
  },
  setup(t) {
    const e = t;
    Do("bus", Sp);
    const r = eu(e.form), a = _e(r.id || null), i = _e(r.title || null), d = _e(r.fields || []), n = _e([]), l = _e(!1), o = _e(!1), s = _e(!1), u = _e(Qm());
    mo(() => {
      const T = tu();
      (T == null ? void 0 : T.appContext.config.globalProperties.$customFormComponents).forEach((D) => {
        u.value.push(D);
      });
    });
    const c = rn(() => {
      var T;
      return JSON.stringify({
        title: i.value,
        status: (T = r.value) == null ? void 0 : T.status,
        fields: d.value.map((S) => {
          let D = {
            id: S.id,
            name: S.name,
            type: S.type,
            label: S.label,
            placeholder: S.placeholder,
            class: S.class,
            options: [...S.options || []]
          };
          return S.hasOwnProperty("content") && (D.content = S.content, D.content_type = S.content_type), S.hasOwnProperty("required") && (D.required = S.required), D;
        })
      });
    });
    Oa(i, (T, S) => {
      T !== S && (n.value = []);
    });
    const f = () => {
      window.location.href = e.redirectUrl;
    }, p = async (T = null) => {
      var D, L;
      if (s.value) return;
      s.value = !0;
      const S = {
        title: i.value,
        fields: d.value,
        ...a.value && { id: a.value },
        ...T && { status: T }
      };
      try {
        await ht.post(e.storeUrl, S), window.location.href = e.redirectUrl;
      } catch (U) {
        s.value = !1, n.value = ((L = (D = U.response) == null ? void 0 : D.data) == null ? void 0 : L.errors) || [];
      }
    }, h = () => {
      l.value = !l.value;
    }, v = () => Math.floor(Math.random() * Date.now()), m = (T) => {
      let S = v(), D = {
        id: S,
        name: `${T.type}_${S}`,
        type: T.type,
        label: T.label,
        options: nn(T.options)
      };
      return ["hint", "placeholder", "class", "content", "content_type", "allow_add_row"].forEach((U) => {
        T.hasOwnProperty(U) && (D[U] = T[U]);
      }), T.hasOwnProperty("content") && (D.content = T.content, D.content_type = T.content_type), T.hasOwnProperty("required") && (D.required = T.required), T.hasOwnProperty("builder") && (D.builder = T.builder, D.presenter = T.presenter, D.data = T.data), D;
    }, g = (T) => {
      const S = m(T);
      d.value.push(S);
    }, y = () => {
      o.value = !0;
    }, E = () => {
      o.value = !1;
    }, w = (T) => T ? T.charAt(0).toUpperCase() + T.slice(1) : "";
    return (T, S) => {
      var D;
      return oe(), se(Ot, null, [
        ie(Gm),
        N("div", Zm, [
          N("a", {
            href: t.redirectUrl,
            class: "cursor-pointer"
          }, " Form ", 8, qm),
          S[5] || (S[5] = tn(" / ")),
          N("span", {
            class: "text-sm font-semibold",
            textContent: We(i.value ? i.value : l.value ? "Preview" : "Add New Form")
          }, null, 8, _m)
        ]),
        N("div", eg, [
          N("h4", tg, We(l.value ? "Preview" : i.value ? i.value : "Add New Form"), 1),
          N("a", {
            class: "inline-block rounded-full px-3 py-2 cursor-pointer text-sm text-gray-700 font-semibold border border-gray-300 hover:bg-gray-200",
            onClick: h
          }, [
            l.value ? (oe(), se("span", rg, S[7] || (S[7] = [
              N("svg", {
                width: "19",
                height: "19",
                viewBox: "0 0 19 19",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                N("path", {
                  d: "M1.08398 17.9166L5.70838 16.138C6.00416 16.0242 6.15205 15.9673 6.29042 15.8931C6.41332 15.8271 6.53048 15.751 6.64068 15.6654C6.76475 15.5692 6.8768 15.4571 7.10088 15.233L16.5007 5.83326C17.4211 4.91279 17.4211 3.4204 16.5007 2.49993C15.5802 1.57945 14.0878 1.57945 13.1673 2.49992L3.76755 11.8997C3.54346 12.1238 3.43142 12.2358 3.33514 12.3599C3.24963 12.4701 3.17349 12.5873 3.10751 12.7102C3.03324 12.8485 2.97636 12.9964 2.86259 13.2922L1.08398 17.9166ZM1.08398 17.9166L2.79908 13.4574C2.92182 13.1383 2.98318 12.9787 3.08843 12.9057C3.18042 12.8418 3.29424 12.8176 3.40423 12.8386C3.5301 12.8627 3.65097 12.9836 3.89272 13.2253L5.7753 15.1079C6.01704 15.3496 6.13792 15.4705 6.16196 15.5964C6.18296 15.7064 6.15881 15.8202 6.09494 15.9122C6.02186 16.0174 5.86231 16.0788 5.54321 16.2015L1.08398 17.9166Z",
                  stroke: "#344054",
                  "stroke-width": "1.66667",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ], -1),
              tn(" Edit ")
            ]))) : (oe(), se("span", ng, [
              ie(_t(Km), { class: "w-5 h-5" }),
              S[6] || (S[6] = tn(" Preview "))
            ]))
          ])
        ]),
        N("input", {
          type: "hidden",
          name: t.name,
          value: c.value
        }, null, 8, og),
        l.value ? (oe(), se("div", ag, [
          i.value ? (oe(), se("p", ig, We(i.value), 1)) : je("", !0),
          N("div", sg, [
            ie(bp, {
              action: "#",
              method: "get",
              form: { fields: d.value },
              preview: !0,
              editable: !0,
              "can-interact": l.value
            }, null, 8, ["form", "can-interact"])
          ])
        ])) : (oe(), se("div", lg, [
          N("div", ug, [
            N("div", cg, [
              N("div", dg, [
                N("div", fg, [
                  S[9] || (S[9] = N("h3", null, "Settings", -1)),
                  N("div", null, [
                    S[8] || (S[8] = N("p", { class: "mb-1" }, "Form Title *", -1)),
                    nt(N("input", {
                      type: "text",
                      placeholder: "Enter your form name",
                      "onUpdate:modelValue": S[0] || (S[0] = (L) => i.value = L)
                    }, null, 512), [
                      [St, i.value]
                    ]),
                    (D = n.value) != null && D.title ? (oe(), se("span", hg, We(n.value.title[0]), 1)) : je("", !0)
                  ])
                ]),
                N("div", {
                  class: et(["fields", { "overflow-y-auto": !l.value }])
                }, [
                  S[10] || (S[10] = N("h3", null, "Form", -1)),
                  N("div", {
                    class: et(["draggable", { "!border-none !shadow-none": d.value.length }])
                  }, [
                    ie(El, {
                      modelValue: d.value,
                      "onUpdate:modelValue": S[1] || (S[1] = (L) => d.value = L),
                      "is-dragging": o.value
                    }, null, 8, ["modelValue", "is-dragging"])
                  ], 2)
                ], 2)
              ]),
              N("div", pg, [
                a.value ? (oe(), se("div", vg, [
                  S[13] || (S[13] = N("p", { class: "mb-5" }, "Status", -1)),
                  N("div", mg, [
                    N("div", {
                      class: et(["pr-3 py-1 text-sm text-gray-700 border font-medium border-warning-200 bg-warning-50 text-warning-700 rounded-full flex w-fit items-center", { "!text-success-700 !bg-success-50 !border-success-200": r.status === "published" }])
                    }, [
                      (oe(), se("svg", gg, [
                        N("circle", {
                          cx: "3",
                          cy: "3",
                          r: "3",
                          fill: r.status === "published" ? "#17B26A" : "#F79009"
                        }, null, 8, yg)
                      ])),
                      tn(" " + We(w(r.status)), 1)
                    ], 2),
                    r.status === "published" ? (oe(), se("div", bg, [
                      S[11] || (S[11] = N("label", null, " Published ", -1)),
                      N("label", xg, We(r.formatted_published_at), 1)
                    ])) : je("", !0),
                    N("div", Sg, [
                      S[12] || (S[12] = N("label", null, " Last Modified ", -1)),
                      N("label", Eg, We(r.last_modified), 1)
                    ])
                  ])
                ])) : je("", !0),
                N("div", wg, [
                  S[14] || (S[14] = N("div", { class: "heading" }, [
                    N("h3", null, "Select layouts/components"),
                    N("p", null, "Click and/or drag a field to the left")
                  ], -1)),
                  ie(_t(Io), {
                    "item-key": "id",
                    modelValue: u.value,
                    "onUpdate:modelValue": S[2] || (S[2] = (L) => u.value = L),
                    clone: m,
                    group: { name: "fields", pull: "clone", put: !1 },
                    onStart: y,
                    onEnd: E,
                    class: "components"
                  }, {
                    item: Et(({ element: L }) => [
                      (oe(), se("li", {
                        class: "flex gap-1 flex-row items-center cursor-pointer",
                        key: L.name,
                        onClick: (U) => g(L)
                      }, [
                        tn(We(L.label) + " ", 1),
                        N("div", Ag, [
                          L.icon ? (oe(), se("span", {
                            key: 0,
                            innerHTML: L.icon
                          }, null, 8, Cg)) : je("", !0),
                          N("div", Og, We(L.tooltip_text), 1)
                        ])
                      ], 8, Tg))
                    ]),
                    _: 1
                  }, 8, ["modelValue"]),
                  bn(T.$slots, "default")
                ])
              ])
            ])
          ])
        ])),
        l.value ? je("", !0) : (oe(), se("div", Pg, [
          N("a", {
            onClick: f,
            class: "cursor-pointer text-error-500 hover:text-error-700 flex items-center"
          }, "Discard"),
          N("div", Rg, [
            N("a", {
              onClick: S[3] || (S[3] = rr((L) => p("draft"), ["prevent"])),
              class: "rounded-full cursor-pointer border border-brand-300 text-brand-700 hover:bg-brand-700 hover:text-white px-3 py-2"
            }, [
              s.value ? (oe(), se("span", Dg, [
                ie(_t(_i), { class: "w-5 h-5 animate-spin text-white" })
              ])) : (oe(), se("span", Ig, " Save as draft "))
            ]),
            N("a", {
              onClick: S[4] || (S[4] = rr((L) => p("published"), ["prevent"])),
              class: "rounded-full cursor-pointer bg-brand-400 hover:bg-brand-700 text-white px-3 py-2"
            }, [
              s.value ? (oe(), se("span", Mg, [
                ie(_t(_i), { class: "w-5 h-5 animate-spin text-white" })
              ])) : (oe(), se("span", Fg, " Publish "))
            ])
          ])
        ]))
      ], 64);
    };
  }
};
export {
  _g as FormBuilder,
  bp as VForm
};
