import * as Yl from "vue";
import { createElementBlock as ne, openBlock as Z, createCommentVNode as De, Fragment as Ct, renderList as bn, withDirectives as et, createElementVNode as k, normalizeClass as nt, vModelDynamic as Oa, toDisplayString as Ve, resolveDirective as ts, resolveComponent as rn, createVNode as ie, vModelText as yt, defineComponent as Kl, ref as qe, onMounted as Pr, onUnmounted as Xl, inject as Pa, watchEffect as Qt, watch as go, computed as on, toRef as Jl, shallowRef as Ql, provide as Fo, isVNode as Zl, Teleport as ql, Transition as Ra, h as di, createBlock as Jt, renderSlot as xn, withCtx as Tt, resolveDynamicComponent as Hn, createTextVNode as Xt, toRaw as fi, markRaw as rt, mergeProps as Ia, normalizeStyle as _l, getCurrentInstance as ns, withModifiers as rr, vShow as eu, unref as Ze, normalizeProps as tu, vModelSelect as Zr, reactive as nu, isRef as Qo } from "vue";
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
    },
    index: {
      type: [Number, String],
      default: null
    },
    validationErrors: {
      type: [Object, null],
      default: () => ({})
    }
  }
}, bt = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [a, i] of e)
    r[a] = i;
  return r;
}, ru = {
  name: "CheckGroup",
  mixins: [fn],
  props: {
    modelValue: { default: () => [] }
  },
  data() {
    return {
      input: []
    };
  },
  created() {
    var t;
    this.input = ((t = this.modelValue) == null ? void 0 : t.value) ?? [];
  },
  watch: {
    input(t) {
      this.modelValue.value = t;
    }
  },
  computed: {
    inputName() {
      return this.modelValue.type === "check-group" ? `${this.modelValue.name}[]` : this.name;
    },
    inputType() {
      if (this.modelValue.type === "check-group")
        return "checkbox";
      if (this.modelValue.type === "radio-group")
        return "radio";
    }
  }
}, ou = { class: "-options" }, au = { class: "cursor-pointer" }, iu = ["type", "name", "value", "disabled"], su = {
  key: 0,
  class: "inline-block text-sm text-gray-600 mt-1.5 brand-200"
};
function lu(t, e, r, a, i, c) {
  var n, l;
  return Z(), ne("div", ou, [
    (Z(!0), ne(Ct, null, bn(((n = r.modelValue) == null ? void 0 : n.options) ?? [], (o) => (Z(), ne("label", au, [
      et(k("input", {
        type: c.inputType,
        name: c.inputName,
        value: o,
        "onUpdate:modelValue": e[0] || (e[0] = (s) => i.input = s),
        disabled: !t.editable,
        class: nt({ "[&]:checked:bg-brand-600 [&]:hover:bg-brand-600 [&]:checked:hover:bg-brand-600 [&]:focus:bg-brand-600 [&]:focus:ring-brand-600 [&]:focus:checked:bg-brand-600 !rounded-full": t.type === "radio-group" })
      }, null, 10, iu), [
        [Oa, i.input]
      ]),
      k("span", null, Ve(o), 1)
    ]))), 256)),
    (l = r.modelValue) != null && l.hint ? (Z(), ne("p", su, Ve(r.modelValue.hint), 1)) : De("", !0)
  ]);
}
const yo = /* @__PURE__ */ bt(ru, [["render", lu]]);
function rs(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: uu } = Object.prototype, { getPrototypeOf: Da } = Object, { iterator: Mo, toStringTag: os } = Symbol, Lo = /* @__PURE__ */ ((t) => (e) => {
  const r = uu.call(e);
  return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), sn = (t) => (t = t.toLowerCase(), (e) => Lo(e) === t), Uo = (t) => (e) => typeof e === t, { isArray: ar } = Array, Rr = Uo("undefined");
function cu(t) {
  return t !== null && !Rr(t) && t.constructor !== null && !Rr(t.constructor) && jt(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const as = sn("ArrayBuffer");
function du(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && as(t.buffer), e;
}
const fu = Uo("string"), jt = Uo("function"), is = Uo("number"), No = (t) => t !== null && typeof t == "object", hu = (t) => t === !0 || t === !1, so = (t) => {
  if (Lo(t) !== "object")
    return !1;
  const e = Da(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(os in t) && !(Mo in t);
}, pu = sn("Date"), vu = sn("File"), mu = sn("Blob"), gu = sn("FileList"), yu = (t) => No(t) && jt(t.pipe), bu = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || jt(t.append) && ((e = Lo(t)) === "formdata" || // detect form-data instance
  e === "object" && jt(t.toString) && t.toString() === "[object FormData]"));
}, xu = sn("URLSearchParams"), [Su, Eu, wu, Tu] = ["ReadableStream", "Request", "Response", "Headers"].map(sn), Au = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Dr(t, e, { allOwnKeys: r = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let a, i;
  if (typeof t != "object" && (t = [t]), ar(t))
    for (a = 0, i = t.length; a < i; a++)
      e.call(null, t[a], a, t);
  else {
    const c = r ? Object.getOwnPropertyNames(t) : Object.keys(t), n = c.length;
    let l;
    for (a = 0; a < n; a++)
      l = c[a], e.call(null, t[l], l, t);
  }
}
function ss(t, e) {
  e = e.toLowerCase();
  const r = Object.keys(t);
  let a = r.length, i;
  for (; a-- > 0; )
    if (i = r[a], e === i.toLowerCase())
      return i;
  return null;
}
const Vn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, ls = (t) => !Rr(t) && t !== Vn;
function pa() {
  const { caseless: t } = ls(this) && this || {}, e = {}, r = (a, i) => {
    const c = t && ss(e, i) || i;
    so(e[c]) && so(a) ? e[c] = pa(e[c], a) : so(a) ? e[c] = pa({}, a) : ar(a) ? e[c] = a.slice() : e[c] = a;
  };
  for (let a = 0, i = arguments.length; a < i; a++)
    arguments[a] && Dr(arguments[a], r);
  return e;
}
const Cu = (t, e, r, { allOwnKeys: a } = {}) => (Dr(e, (i, c) => {
  r && jt(i) ? t[c] = rs(i, r) : t[c] = i;
}, { allOwnKeys: a }), t), Ou = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), Pu = (t, e, r, a) => {
  t.prototype = Object.create(e.prototype, a), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), r && Object.assign(t.prototype, r);
}, Ru = (t, e, r, a) => {
  let i, c, n;
  const l = {};
  if (e = e || {}, t == null) return e;
  do {
    for (i = Object.getOwnPropertyNames(t), c = i.length; c-- > 0; )
      n = i[c], (!a || a(n, t, e)) && !l[n] && (e[n] = t[n], l[n] = !0);
    t = r !== !1 && Da(t);
  } while (t && (!r || r(t, e)) && t !== Object.prototype);
  return e;
}, Iu = (t, e, r) => {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
  const a = t.indexOf(e, r);
  return a !== -1 && a === r;
}, Du = (t) => {
  if (!t) return null;
  if (ar(t)) return t;
  let e = t.length;
  if (!is(e)) return null;
  const r = new Array(e);
  for (; e-- > 0; )
    r[e] = t[e];
  return r;
}, Fu = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && Da(Uint8Array)), Mu = (t, e) => {
  const a = (t && t[Mo]).call(t);
  let i;
  for (; (i = a.next()) && !i.done; ) {
    const c = i.value;
    e.call(t, c[0], c[1]);
  }
}, Lu = (t, e) => {
  let r;
  const a = [];
  for (; (r = t.exec(e)) !== null; )
    a.push(r);
  return a;
}, Uu = sn("HTMLFormElement"), Nu = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, a, i) {
    return a.toUpperCase() + i;
  }
), hi = (({ hasOwnProperty: t }) => (e, r) => t.call(e, r))(Object.prototype), ju = sn("RegExp"), us = (t, e) => {
  const r = Object.getOwnPropertyDescriptors(t), a = {};
  Dr(r, (i, c) => {
    let n;
    (n = e(i, c, t)) !== !1 && (a[c] = n || i);
  }), Object.defineProperties(t, a);
}, ku = (t) => {
  us(t, (e, r) => {
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
}, Vu = (t, e) => {
  const r = {}, a = (i) => {
    i.forEach((c) => {
      r[c] = !0;
    });
  };
  return ar(t) ? a(t) : a(String(t).split(e)), r;
}, $u = () => {
}, Bu = (t, e) => t != null && Number.isFinite(t = +t) ? t : e;
function Hu(t) {
  return !!(t && jt(t.append) && t[os] === "FormData" && t[Mo]);
}
const zu = (t) => {
  const e = new Array(10), r = (a, i) => {
    if (No(a)) {
      if (e.indexOf(a) >= 0)
        return;
      if (!("toJSON" in a)) {
        e[i] = a;
        const c = ar(a) ? [] : {};
        return Dr(a, (n, l) => {
          const o = r(n, i + 1);
          !Rr(o) && (c[l] = o);
        }), e[i] = void 0, c;
      }
    }
    return a;
  };
  return r(t, 0);
}, Gu = sn("AsyncFunction"), Wu = (t) => t && (No(t) || jt(t)) && jt(t.then) && jt(t.catch), cs = ((t, e) => t ? setImmediate : e ? ((r, a) => (Vn.addEventListener("message", ({ source: i, data: c }) => {
  i === Vn && c === r && a.length && a.shift()();
}, !1), (i) => {
  a.push(i), Vn.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  jt(Vn.postMessage)
), Yu = typeof queueMicrotask < "u" ? queueMicrotask.bind(Vn) : typeof process < "u" && process.nextTick || cs, Ku = (t) => t != null && jt(t[Mo]), oe = {
  isArray: ar,
  isArrayBuffer: as,
  isBuffer: cu,
  isFormData: bu,
  isArrayBufferView: du,
  isString: fu,
  isNumber: is,
  isBoolean: hu,
  isObject: No,
  isPlainObject: so,
  isReadableStream: Su,
  isRequest: Eu,
  isResponse: wu,
  isHeaders: Tu,
  isUndefined: Rr,
  isDate: pu,
  isFile: vu,
  isBlob: mu,
  isRegExp: ju,
  isFunction: jt,
  isStream: yu,
  isURLSearchParams: xu,
  isTypedArray: Fu,
  isFileList: gu,
  forEach: Dr,
  merge: pa,
  extend: Cu,
  trim: Au,
  stripBOM: Ou,
  inherits: Pu,
  toFlatObject: Ru,
  kindOf: Lo,
  kindOfTest: sn,
  endsWith: Iu,
  toArray: Du,
  forEachEntry: Mu,
  matchAll: Lu,
  isHTMLForm: Uu,
  hasOwnProperty: hi,
  hasOwnProp: hi,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: us,
  freezeMethods: ku,
  toObjectSet: Vu,
  toCamelCase: Nu,
  noop: $u,
  toFiniteNumber: Bu,
  findKey: ss,
  global: Vn,
  isContextDefined: ls,
  isSpecCompliantForm: Hu,
  toJSONObject: zu,
  isAsyncFn: Gu,
  isThenable: Wu,
  setImmediate: cs,
  asap: Yu,
  isIterable: Ku
};
function Ye(t, e, r, a, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), r && (this.config = r), a && (this.request = a), i && (this.response = i, this.status = i.status ? i.status : null);
}
oe.inherits(Ye, Error, {
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
      config: oe.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const ds = Ye.prototype, fs = {};
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
  fs[t] = { value: t };
});
Object.defineProperties(Ye, fs);
Object.defineProperty(ds, "isAxiosError", { value: !0 });
Ye.from = (t, e, r, a, i, c) => {
  const n = Object.create(ds);
  return oe.toFlatObject(t, n, function(o) {
    return o !== Error.prototype;
  }, (l) => l !== "isAxiosError"), Ye.call(n, t.message, e, r, a, i), n.cause = t, n.name = t.name, c && Object.assign(n, c), n;
};
const Xu = null;
function va(t) {
  return oe.isPlainObject(t) || oe.isArray(t);
}
function hs(t) {
  return oe.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function pi(t, e, r) {
  return t ? t.concat(e).map(function(i, c) {
    return i = hs(i), !r && c ? "[" + i + "]" : i;
  }).join(r ? "." : "") : e;
}
function Ju(t) {
  return oe.isArray(t) && !t.some(va);
}
const Qu = oe.toFlatObject(oe, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function jo(t, e, r) {
  if (!oe.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), r = oe.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(v, m) {
    return !oe.isUndefined(m[v]);
  });
  const a = r.metaTokens, i = r.visitor || u, c = r.dots, n = r.indexes, o = (r.Blob || typeof Blob < "u" && Blob) && oe.isSpecCompliantForm(e);
  if (!oe.isFunction(i))
    throw new TypeError("visitor must be a function");
  function s(f) {
    if (f === null) return "";
    if (oe.isDate(f))
      return f.toISOString();
    if (oe.isBoolean(f))
      return f.toString();
    if (!o && oe.isBlob(f))
      throw new Ye("Blob is not supported. Use a Buffer instead.");
    return oe.isArrayBuffer(f) || oe.isTypedArray(f) ? o && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function u(f, v, m) {
    let g = f;
    if (f && !m && typeof f == "object") {
      if (oe.endsWith(v, "{}"))
        v = a ? v : v.slice(0, -2), f = JSON.stringify(f);
      else if (oe.isArray(f) && Ju(f) || (oe.isFileList(f) || oe.endsWith(v, "[]")) && (g = oe.toArray(f)))
        return v = hs(v), g.forEach(function(S, E) {
          !(oe.isUndefined(S) || S === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            n === !0 ? pi([v], E, c) : n === null ? v : v + "[]",
            s(S)
          );
        }), !1;
    }
    return va(f) ? !0 : (e.append(pi(m, v, c), s(f)), !1);
  }
  const d = [], h = Object.assign(Qu, {
    defaultVisitor: u,
    convertValue: s,
    isVisitable: va
  });
  function p(f, v) {
    if (!oe.isUndefined(f)) {
      if (d.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      d.push(f), oe.forEach(f, function(g, y) {
        (!(oe.isUndefined(g) || g === null) && i.call(
          e,
          g,
          oe.isString(y) ? y.trim() : y,
          v,
          h
        )) === !0 && p(g, v ? v.concat(y) : [y]);
      }), d.pop();
    }
  }
  if (!oe.isObject(t))
    throw new TypeError("data must be an object");
  return p(t), e;
}
function vi(t) {
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
function Fa(t, e) {
  this._pairs = [], t && jo(t, this, e);
}
const ps = Fa.prototype;
ps.append = function(e, r) {
  this._pairs.push([e, r]);
};
ps.toString = function(e) {
  const r = e ? function(a) {
    return e.call(this, a, vi);
  } : vi;
  return this._pairs.map(function(i) {
    return r(i[0]) + "=" + r(i[1]);
  }, "").join("&");
};
function Zu(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function vs(t, e, r) {
  if (!e)
    return t;
  const a = r && r.encode || Zu;
  oe.isFunction(r) && (r = {
    serialize: r
  });
  const i = r && r.serialize;
  let c;
  if (i ? c = i(e, r) : c = oe.isURLSearchParams(e) ? e.toString() : new Fa(e, r).toString(a), c) {
    const n = t.indexOf("#");
    n !== -1 && (t = t.slice(0, n)), t += (t.indexOf("?") === -1 ? "?" : "&") + c;
  }
  return t;
}
class mi {
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
    oe.forEach(this.handlers, function(a) {
      a !== null && e(a);
    });
  }
}
const ms = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, qu = typeof URLSearchParams < "u" ? URLSearchParams : Fa, _u = typeof FormData < "u" ? FormData : null, ec = typeof Blob < "u" ? Blob : null, tc = {
  isBrowser: !0,
  classes: {
    URLSearchParams: qu,
    FormData: _u,
    Blob: ec
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ma = typeof window < "u" && typeof document < "u", ma = typeof navigator == "object" && navigator || void 0, nc = Ma && (!ma || ["ReactNative", "NativeScript", "NS"].indexOf(ma.product) < 0), rc = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", oc = Ma && window.location.href || "http://localhost", ac = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ma,
  hasStandardBrowserEnv: nc,
  hasStandardBrowserWebWorkerEnv: rc,
  navigator: ma,
  origin: oc
}, Symbol.toStringTag, { value: "Module" })), Ot = {
  ...ac,
  ...tc
};
function ic(t, e) {
  return jo(t, new Ot.classes.URLSearchParams(), Object.assign({
    visitor: function(r, a, i, c) {
      return Ot.isNode && oe.isBuffer(r) ? (this.append(a, r.toString("base64")), !1) : c.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function sc(t) {
  return oe.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function lc(t) {
  const e = {}, r = Object.keys(t);
  let a;
  const i = r.length;
  let c;
  for (a = 0; a < i; a++)
    c = r[a], e[c] = t[c];
  return e;
}
function gs(t) {
  function e(r, a, i, c) {
    let n = r[c++];
    if (n === "__proto__") return !0;
    const l = Number.isFinite(+n), o = c >= r.length;
    return n = !n && oe.isArray(i) ? i.length : n, o ? (oe.hasOwnProp(i, n) ? i[n] = [i[n], a] : i[n] = a, !l) : ((!i[n] || !oe.isObject(i[n])) && (i[n] = []), e(r, a, i[n], c) && oe.isArray(i[n]) && (i[n] = lc(i[n])), !l);
  }
  if (oe.isFormData(t) && oe.isFunction(t.entries)) {
    const r = {};
    return oe.forEachEntry(t, (a, i) => {
      e(sc(a), i, r, 0);
    }), r;
  }
  return null;
}
function uc(t, e, r) {
  if (oe.isString(t))
    try {
      return (e || JSON.parse)(t), oe.trim(t);
    } catch (a) {
      if (a.name !== "SyntaxError")
        throw a;
    }
  return (r || JSON.stringify)(t);
}
const Fr = {
  transitional: ms,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, r) {
    const a = r.getContentType() || "", i = a.indexOf("application/json") > -1, c = oe.isObject(e);
    if (c && oe.isHTMLForm(e) && (e = new FormData(e)), oe.isFormData(e))
      return i ? JSON.stringify(gs(e)) : e;
    if (oe.isArrayBuffer(e) || oe.isBuffer(e) || oe.isStream(e) || oe.isFile(e) || oe.isBlob(e) || oe.isReadableStream(e))
      return e;
    if (oe.isArrayBufferView(e))
      return e.buffer;
    if (oe.isURLSearchParams(e))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let l;
    if (c) {
      if (a.indexOf("application/x-www-form-urlencoded") > -1)
        return ic(e, this.formSerializer).toString();
      if ((l = oe.isFileList(e)) || a.indexOf("multipart/form-data") > -1) {
        const o = this.env && this.env.FormData;
        return jo(
          l ? { "files[]": e } : e,
          o && new o(),
          this.formSerializer
        );
      }
    }
    return c || i ? (r.setContentType("application/json", !1), uc(e)) : e;
  }],
  transformResponse: [function(e) {
    const r = this.transitional || Fr.transitional, a = r && r.forcedJSONParsing, i = this.responseType === "json";
    if (oe.isResponse(e) || oe.isReadableStream(e))
      return e;
    if (e && oe.isString(e) && (a && !this.responseType || i)) {
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
    FormData: Ot.classes.FormData,
    Blob: Ot.classes.Blob
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
oe.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  Fr.headers[t] = {};
});
const cc = oe.toObjectSet([
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
]), dc = (t) => {
  const e = {};
  let r, a, i;
  return t && t.split(`
`).forEach(function(n) {
    i = n.indexOf(":"), r = n.substring(0, i).trim().toLowerCase(), a = n.substring(i + 1).trim(), !(!r || e[r] && cc[r]) && (r === "set-cookie" ? e[r] ? e[r].push(a) : e[r] = [a] : e[r] = e[r] ? e[r] + ", " + a : a);
  }), e;
}, gi = Symbol("internals");
function fr(t) {
  return t && String(t).trim().toLowerCase();
}
function lo(t) {
  return t === !1 || t == null ? t : oe.isArray(t) ? t.map(lo) : String(t);
}
function fc(t) {
  const e = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let a;
  for (; a = r.exec(t); )
    e[a[1]] = a[2];
  return e;
}
const hc = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function Zo(t, e, r, a, i) {
  if (oe.isFunction(a))
    return a.call(this, e, r);
  if (i && (e = r), !!oe.isString(e)) {
    if (oe.isString(a))
      return e.indexOf(a) !== -1;
    if (oe.isRegExp(a))
      return a.test(e);
  }
}
function pc(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, a) => r.toUpperCase() + a);
}
function vc(t, e) {
  const r = oe.toCamelCase(" " + e);
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
    function c(l, o, s) {
      const u = fr(o);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = oe.findKey(i, u);
      (!d || i[d] === void 0 || s === !0 || s === void 0 && i[d] !== !1) && (i[d || o] = lo(l));
    }
    const n = (l, o) => oe.forEach(l, (s, u) => c(s, u, o));
    if (oe.isPlainObject(e) || e instanceof this.constructor)
      n(e, r);
    else if (oe.isString(e) && (e = e.trim()) && !hc(e))
      n(dc(e), r);
    else if (oe.isObject(e) && oe.isIterable(e)) {
      let l = {}, o, s;
      for (const u of e) {
        if (!oe.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        l[s = u[0]] = (o = l[s]) ? oe.isArray(o) ? [...o, u[1]] : [o, u[1]] : u[1];
      }
      n(l, r);
    } else
      e != null && c(r, e, a);
    return this;
  }
  get(e, r) {
    if (e = fr(e), e) {
      const a = oe.findKey(this, e);
      if (a) {
        const i = this[a];
        if (!r)
          return i;
        if (r === !0)
          return fc(i);
        if (oe.isFunction(r))
          return r.call(this, i, a);
        if (oe.isRegExp(r))
          return r.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, r) {
    if (e = fr(e), e) {
      const a = oe.findKey(this, e);
      return !!(a && this[a] !== void 0 && (!r || Zo(this, this[a], a, r)));
    }
    return !1;
  }
  delete(e, r) {
    const a = this;
    let i = !1;
    function c(n) {
      if (n = fr(n), n) {
        const l = oe.findKey(a, n);
        l && (!r || Zo(a, a[l], l, r)) && (delete a[l], i = !0);
      }
    }
    return oe.isArray(e) ? e.forEach(c) : c(e), i;
  }
  clear(e) {
    const r = Object.keys(this);
    let a = r.length, i = !1;
    for (; a--; ) {
      const c = r[a];
      (!e || Zo(this, this[c], c, e, !0)) && (delete this[c], i = !0);
    }
    return i;
  }
  normalize(e) {
    const r = this, a = {};
    return oe.forEach(this, (i, c) => {
      const n = oe.findKey(a, c);
      if (n) {
        r[n] = lo(i), delete r[c];
        return;
      }
      const l = e ? pc(c) : String(c).trim();
      l !== c && delete r[c], r[l] = lo(i), a[l] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const r = /* @__PURE__ */ Object.create(null);
    return oe.forEach(this, (a, i) => {
      a != null && a !== !1 && (r[i] = e && oe.isArray(a) ? a.join(", ") : a);
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
    const a = (this[gi] = this[gi] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function c(n) {
      const l = fr(n);
      a[l] || (vc(i, n), a[l] = !0);
    }
    return oe.isArray(e) ? e.forEach(c) : c(e), this;
  }
};
kt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
oe.reduceDescriptors(kt.prototype, ({ value: t }, e) => {
  let r = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(a) {
      this[r] = a;
    }
  };
});
oe.freezeMethods(kt);
function qo(t, e) {
  const r = this || Fr, a = e || r, i = kt.from(a.headers);
  let c = a.data;
  return oe.forEach(t, function(l) {
    c = l.call(r, c, i.normalize(), e ? e.status : void 0);
  }), i.normalize(), c;
}
function ys(t) {
  return !!(t && t.__CANCEL__);
}
function ir(t, e, r) {
  Ye.call(this, t ?? "canceled", Ye.ERR_CANCELED, e, r), this.name = "CanceledError";
}
oe.inherits(ir, Ye, {
  __CANCEL__: !0
});
function bs(t, e, r) {
  const a = r.config.validateStatus;
  !r.status || !a || a(r.status) ? t(r) : e(new Ye(
    "Request failed with status code " + r.status,
    [Ye.ERR_BAD_REQUEST, Ye.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function mc(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function gc(t, e) {
  t = t || 10;
  const r = new Array(t), a = new Array(t);
  let i = 0, c = 0, n;
  return e = e !== void 0 ? e : 1e3, function(o) {
    const s = Date.now(), u = a[c];
    n || (n = s), r[i] = o, a[i] = s;
    let d = c, h = 0;
    for (; d !== i; )
      h += r[d++], d = d % t;
    if (i = (i + 1) % t, i === c && (c = (c + 1) % t), s - n < e)
      return;
    const p = u && s - u;
    return p ? Math.round(h * 1e3 / p) : void 0;
  };
}
function yc(t, e) {
  let r = 0, a = 1e3 / e, i, c;
  const n = (s, u = Date.now()) => {
    r = u, i = null, c && (clearTimeout(c), c = null), t.apply(null, s);
  };
  return [(...s) => {
    const u = Date.now(), d = u - r;
    d >= a ? n(s, u) : (i = s, c || (c = setTimeout(() => {
      c = null, n(i);
    }, a - d)));
  }, () => i && n(i)];
}
const bo = (t, e, r = 3) => {
  let a = 0;
  const i = gc(50, 250);
  return yc((c) => {
    const n = c.loaded, l = c.lengthComputable ? c.total : void 0, o = n - a, s = i(o), u = n <= l;
    a = n;
    const d = {
      loaded: n,
      total: l,
      progress: l ? n / l : void 0,
      bytes: o,
      rate: s || void 0,
      estimated: s && l && u ? (l - n) / s : void 0,
      event: c,
      lengthComputable: l != null,
      [e ? "download" : "upload"]: !0
    };
    t(d);
  }, r);
}, yi = (t, e) => {
  const r = t != null;
  return [(a) => e[0]({
    lengthComputable: r,
    total: t,
    loaded: a
  }), e[1]];
}, bi = (t) => (...e) => oe.asap(() => t(...e)), bc = Ot.hasStandardBrowserEnv ? /* @__PURE__ */ ((t, e) => (r) => (r = new URL(r, Ot.origin), t.protocol === r.protocol && t.host === r.host && (e || t.port === r.port)))(
  new URL(Ot.origin),
  Ot.navigator && /(msie|trident)/i.test(Ot.navigator.userAgent)
) : () => !0, xc = Ot.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, r, a, i, c) {
      const n = [t + "=" + encodeURIComponent(e)];
      oe.isNumber(r) && n.push("expires=" + new Date(r).toGMTString()), oe.isString(a) && n.push("path=" + a), oe.isString(i) && n.push("domain=" + i), c === !0 && n.push("secure"), document.cookie = n.join("; ");
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
function Sc(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Ec(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function xs(t, e, r) {
  let a = !Sc(e);
  return t && (a || r == !1) ? Ec(t, e) : e;
}
const xi = (t) => t instanceof kt ? { ...t } : t;
function Wn(t, e) {
  e = e || {};
  const r = {};
  function a(s, u, d, h) {
    return oe.isPlainObject(s) && oe.isPlainObject(u) ? oe.merge.call({ caseless: h }, s, u) : oe.isPlainObject(u) ? oe.merge({}, u) : oe.isArray(u) ? u.slice() : u;
  }
  function i(s, u, d, h) {
    if (oe.isUndefined(u)) {
      if (!oe.isUndefined(s))
        return a(void 0, s, d, h);
    } else return a(s, u, d, h);
  }
  function c(s, u) {
    if (!oe.isUndefined(u))
      return a(void 0, u);
  }
  function n(s, u) {
    if (oe.isUndefined(u)) {
      if (!oe.isUndefined(s))
        return a(void 0, s);
    } else return a(void 0, u);
  }
  function l(s, u, d) {
    if (d in e)
      return a(s, u);
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
    validateStatus: l,
    headers: (s, u, d) => i(xi(s), xi(u), d, !0)
  };
  return oe.forEach(Object.keys(Object.assign({}, t, e)), function(u) {
    const d = o[u] || i, h = d(t[u], e[u], u);
    oe.isUndefined(h) && d !== l || (r[u] = h);
  }), r;
}
const Ss = (t) => {
  const e = Wn({}, t);
  let { data: r, withXSRFToken: a, xsrfHeaderName: i, xsrfCookieName: c, headers: n, auth: l } = e;
  e.headers = n = kt.from(n), e.url = vs(xs(e.baseURL, e.url, e.allowAbsoluteUrls), t.params, t.paramsSerializer), l && n.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let o;
  if (oe.isFormData(r)) {
    if (Ot.hasStandardBrowserEnv || Ot.hasStandardBrowserWebWorkerEnv)
      n.setContentType(void 0);
    else if ((o = n.getContentType()) !== !1) {
      const [s, ...u] = o ? o.split(";").map((d) => d.trim()).filter(Boolean) : [];
      n.setContentType([s || "multipart/form-data", ...u].join("; "));
    }
  }
  if (Ot.hasStandardBrowserEnv && (a && oe.isFunction(a) && (a = a(e)), a || a !== !1 && bc(e.url))) {
    const s = i && c && xc.read(c);
    s && n.set(i, s);
  }
  return e;
}, wc = typeof XMLHttpRequest < "u", Tc = wc && function(t) {
  return new Promise(function(r, a) {
    const i = Ss(t);
    let c = i.data;
    const n = kt.from(i.headers).normalize();
    let { responseType: l, onUploadProgress: o, onDownloadProgress: s } = i, u, d, h, p, f;
    function v() {
      p && p(), f && f(), i.cancelToken && i.cancelToken.unsubscribe(u), i.signal && i.signal.removeEventListener("abort", u);
    }
    let m = new XMLHttpRequest();
    m.open(i.method.toUpperCase(), i.url, !0), m.timeout = i.timeout;
    function g() {
      if (!m)
        return;
      const S = kt.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), A = {
        data: !l || l === "text" || l === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: S,
        config: t,
        request: m
      };
      bs(function(P) {
        r(P), v();
      }, function(P) {
        a(P), v();
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
      const A = i.transitional || ms;
      i.timeoutErrorMessage && (E = i.timeoutErrorMessage), a(new Ye(
        E,
        A.clarifyTimeoutError ? Ye.ETIMEDOUT : Ye.ECONNABORTED,
        t,
        m
      )), m = null;
    }, c === void 0 && n.setContentType(null), "setRequestHeader" in m && oe.forEach(n.toJSON(), function(E, A) {
      m.setRequestHeader(A, E);
    }), oe.isUndefined(i.withCredentials) || (m.withCredentials = !!i.withCredentials), l && l !== "json" && (m.responseType = i.responseType), s && ([h, f] = bo(s, !0), m.addEventListener("progress", h)), o && m.upload && ([d, p] = bo(o), m.upload.addEventListener("progress", d), m.upload.addEventListener("loadend", p)), (i.cancelToken || i.signal) && (u = (S) => {
      m && (a(!S || S.type ? new ir(null, t, m) : S), m.abort(), m = null);
    }, i.cancelToken && i.cancelToken.subscribe(u), i.signal && (i.signal.aborted ? u() : i.signal.addEventListener("abort", u)));
    const y = mc(i.url);
    if (y && Ot.protocols.indexOf(y) === -1) {
      a(new Ye("Unsupported protocol " + y + ":", Ye.ERR_BAD_REQUEST, t));
      return;
    }
    m.send(c || null);
  });
}, Ac = (t, e) => {
  const { length: r } = t = t ? t.filter(Boolean) : [];
  if (e || r) {
    let a = new AbortController(), i;
    const c = function(s) {
      if (!i) {
        i = !0, l();
        const u = s instanceof Error ? s : this.reason;
        a.abort(u instanceof Ye ? u : new ir(u instanceof Error ? u.message : u));
      }
    };
    let n = e && setTimeout(() => {
      n = null, c(new Ye(`timeout ${e} of ms exceeded`, Ye.ETIMEDOUT));
    }, e);
    const l = () => {
      t && (n && clearTimeout(n), n = null, t.forEach((s) => {
        s.unsubscribe ? s.unsubscribe(c) : s.removeEventListener("abort", c);
      }), t = null);
    };
    t.forEach((s) => s.addEventListener("abort", c));
    const { signal: o } = a;
    return o.unsubscribe = () => oe.asap(l), o;
  }
}, Cc = function* (t, e) {
  let r = t.byteLength;
  if (r < e) {
    yield t;
    return;
  }
  let a = 0, i;
  for (; a < r; )
    i = a + e, yield t.slice(a, i), a = i;
}, Oc = async function* (t, e) {
  for await (const r of Pc(t))
    yield* Cc(r, e);
}, Pc = async function* (t) {
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
}, Si = (t, e, r, a) => {
  const i = Oc(t, e);
  let c = 0, n, l = (o) => {
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
        let d = u.byteLength;
        if (r) {
          let h = c += d;
          r(h);
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
}, ko = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Es = ko && typeof ReadableStream == "function", Rc = ko && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((t) => (e) => t.encode(e))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), ws = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, Ic = Es && ws(() => {
  let t = !1;
  const e = new Request(Ot.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !e;
}), Ei = 64 * 1024, ga = Es && ws(() => oe.isReadableStream(new Response("").body)), xo = {
  stream: ga && ((t) => t.body)
};
ko && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !xo[e] && (xo[e] = oe.isFunction(t[e]) ? (r) => r[e]() : (r, a) => {
      throw new Ye(`Response type '${e}' is not supported`, Ye.ERR_NOT_SUPPORT, a);
    });
  });
})(new Response());
const Dc = async (t) => {
  if (t == null)
    return 0;
  if (oe.isBlob(t))
    return t.size;
  if (oe.isSpecCompliantForm(t))
    return (await new Request(Ot.origin, {
      method: "POST",
      body: t
    }).arrayBuffer()).byteLength;
  if (oe.isArrayBufferView(t) || oe.isArrayBuffer(t))
    return t.byteLength;
  if (oe.isURLSearchParams(t) && (t = t + ""), oe.isString(t))
    return (await Rc(t)).byteLength;
}, Fc = async (t, e) => {
  const r = oe.toFiniteNumber(t.getContentLength());
  return r ?? Dc(e);
}, Mc = ko && (async (t) => {
  let {
    url: e,
    method: r,
    data: a,
    signal: i,
    cancelToken: c,
    timeout: n,
    onDownloadProgress: l,
    onUploadProgress: o,
    responseType: s,
    headers: u,
    withCredentials: d = "same-origin",
    fetchOptions: h
  } = Ss(t);
  s = s ? (s + "").toLowerCase() : "text";
  let p = Ac([i, c && c.toAbortSignal()], n), f;
  const v = p && p.unsubscribe && (() => {
    p.unsubscribe();
  });
  let m;
  try {
    if (o && Ic && r !== "get" && r !== "head" && (m = await Fc(u, a)) !== 0) {
      let A = new Request(e, {
        method: "POST",
        body: a,
        duplex: "half"
      }), w;
      if (oe.isFormData(a) && (w = A.headers.get("content-type")) && u.setContentType(w), A.body) {
        const [P, O] = yi(
          m,
          bo(bi(o))
        );
        a = Si(A.body, Ei, P, O);
      }
    }
    oe.isString(d) || (d = d ? "include" : "omit");
    const g = "credentials" in Request.prototype;
    f = new Request(e, {
      ...h,
      signal: p,
      method: r.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: a,
      duplex: "half",
      credentials: g ? d : void 0
    });
    let y = await fetch(f, h);
    const S = ga && (s === "stream" || s === "response");
    if (ga && (l || S && v)) {
      const A = {};
      ["status", "statusText", "headers"].forEach((D) => {
        A[D] = y[D];
      });
      const w = oe.toFiniteNumber(y.headers.get("content-length")), [P, O] = l && yi(
        w,
        bo(bi(l), !0)
      ) || [];
      y = new Response(
        Si(y.body, Ei, P, () => {
          O && O(), v && v();
        }),
        A
      );
    }
    s = s || "text";
    let E = await xo[oe.findKey(xo, s) || "text"](y, t);
    return !S && v && v(), await new Promise((A, w) => {
      bs(A, w, {
        data: E,
        headers: kt.from(y.headers),
        status: y.status,
        statusText: y.statusText,
        config: t,
        request: f
      });
    });
  } catch (g) {
    throw v && v(), g && g.name === "TypeError" && /Load failed|fetch/i.test(g.message) ? Object.assign(
      new Ye("Network Error", Ye.ERR_NETWORK, t, f),
      {
        cause: g.cause || g
      }
    ) : Ye.from(g, g && g.code, t, f);
  }
}), ya = {
  http: Xu,
  xhr: Tc,
  fetch: Mc
};
oe.forEach(ya, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const wi = (t) => `- ${t}`, Lc = (t) => oe.isFunction(t) || t === null || t === !1, Ts = {
  getAdapter: (t) => {
    t = oe.isArray(t) ? t : [t];
    const { length: e } = t;
    let r, a;
    const i = {};
    for (let c = 0; c < e; c++) {
      r = t[c];
      let n;
      if (a = r, !Lc(r) && (a = ya[(n = String(r)).toLowerCase()], a === void 0))
        throw new Ye(`Unknown adapter '${n}'`);
      if (a)
        break;
      i[n || "#" + c] = a;
    }
    if (!a) {
      const c = Object.entries(i).map(
        ([l, o]) => `adapter ${l} ` + (o === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let n = e ? c.length > 1 ? `since :
` + c.map(wi).join(`
`) : " " + wi(c[0]) : "as no adapter specified";
      throw new Ye(
        "There is no suitable adapter to dispatch the request " + n,
        "ERR_NOT_SUPPORT"
      );
    }
    return a;
  },
  adapters: ya
};
function _o(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new ir(null, t);
}
function Ti(t) {
  return _o(t), t.headers = kt.from(t.headers), t.data = qo.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Ts.getAdapter(t.adapter || Fr.adapter)(t).then(function(a) {
    return _o(t), a.data = qo.call(
      t,
      t.transformResponse,
      a
    ), a.headers = kt.from(a.headers), a;
  }, function(a) {
    return ys(a) || (_o(t), a && a.response && (a.response.data = qo.call(
      t,
      t.transformResponse,
      a.response
    ), a.response.headers = kt.from(a.response.headers))), Promise.reject(a);
  });
}
const As = "1.10.0", Vo = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  Vo[t] = function(a) {
    return typeof a === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const Ai = {};
Vo.transitional = function(e, r, a) {
  function i(c, n) {
    return "[Axios v" + As + "] Transitional option '" + c + "'" + n + (a ? ". " + a : "");
  }
  return (c, n, l) => {
    if (e === !1)
      throw new Ye(
        i(n, " has been removed" + (r ? " in " + r : "")),
        Ye.ERR_DEPRECATED
      );
    return r && !Ai[n] && (Ai[n] = !0, console.warn(
      i(
        n,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), e ? e(c, n, l) : !0;
  };
};
Vo.spelling = function(e) {
  return (r, a) => (console.warn(`${a} is likely a misspelling of ${e}`), !0);
};
function Uc(t, e, r) {
  if (typeof t != "object")
    throw new Ye("options must be an object", Ye.ERR_BAD_OPTION_VALUE);
  const a = Object.keys(t);
  let i = a.length;
  for (; i-- > 0; ) {
    const c = a[i], n = e[c];
    if (n) {
      const l = t[c], o = l === void 0 || n(l, c, t);
      if (o !== !0)
        throw new Ye("option " + c + " must be " + o, Ye.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new Ye("Unknown option " + c, Ye.ERR_BAD_OPTION);
  }
}
const uo = {
  assertOptions: Uc,
  validators: Vo
}, un = uo.validators;
let zn = class {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new mi(),
      response: new mi()
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
    typeof e == "string" ? (r = r || {}, r.url = e) : r = e || {}, r = Wn(this.defaults, r);
    const { transitional: a, paramsSerializer: i, headers: c } = r;
    a !== void 0 && uo.assertOptions(a, {
      silentJSONParsing: un.transitional(un.boolean),
      forcedJSONParsing: un.transitional(un.boolean),
      clarifyTimeoutError: un.transitional(un.boolean)
    }, !1), i != null && (oe.isFunction(i) ? r.paramsSerializer = {
      serialize: i
    } : uo.assertOptions(i, {
      encode: un.function,
      serialize: un.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), uo.assertOptions(r, {
      baseUrl: un.spelling("baseURL"),
      withXsrfToken: un.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let n = c && oe.merge(
      c.common,
      c[r.method]
    );
    c && oe.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (f) => {
        delete c[f];
      }
    ), r.headers = kt.concat(n, c);
    const l = [];
    let o = !0;
    this.interceptors.request.forEach(function(v) {
      typeof v.runWhen == "function" && v.runWhen(r) === !1 || (o = o && v.synchronous, l.unshift(v.fulfilled, v.rejected));
    });
    const s = [];
    this.interceptors.response.forEach(function(v) {
      s.push(v.fulfilled, v.rejected);
    });
    let u, d = 0, h;
    if (!o) {
      const f = [Ti.bind(this), void 0];
      for (f.unshift.apply(f, l), f.push.apply(f, s), h = f.length, u = Promise.resolve(r); d < h; )
        u = u.then(f[d++], f[d++]);
      return u;
    }
    h = l.length;
    let p = r;
    for (d = 0; d < h; ) {
      const f = l[d++], v = l[d++];
      try {
        p = f(p);
      } catch (m) {
        v.call(this, m);
        break;
      }
    }
    try {
      u = Ti.call(this, p);
    } catch (f) {
      return Promise.reject(f);
    }
    for (d = 0, h = s.length; d < h; )
      u = u.then(s[d++], s[d++]);
    return u;
  }
  getUri(e) {
    e = Wn(this.defaults, e);
    const r = xs(e.baseURL, e.url, e.allowAbsoluteUrls);
    return vs(r, e.params, e.paramsSerializer);
  }
};
oe.forEach(["delete", "get", "head", "options"], function(e) {
  zn.prototype[e] = function(r, a) {
    return this.request(Wn(a || {}, {
      method: e,
      url: r,
      data: (a || {}).data
    }));
  };
});
oe.forEach(["post", "put", "patch"], function(e) {
  function r(a) {
    return function(c, n, l) {
      return this.request(Wn(l || {}, {
        method: e,
        headers: a ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: c,
        data: n
      }));
    };
  }
  zn.prototype[e] = r(), zn.prototype[e + "Form"] = r(!0);
});
let Nc = class Cs {
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
      const n = new Promise((l) => {
        a.subscribe(l), c = l;
      }).then(i);
      return n.cancel = function() {
        a.unsubscribe(c);
      }, n;
    }, e(function(c, n, l) {
      a.reason || (a.reason = new ir(c, n, l), r(a.reason));
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
      token: new Cs(function(i) {
        e = i;
      }),
      cancel: e
    };
  }
};
function jc(t) {
  return function(r) {
    return t.apply(null, r);
  };
}
function kc(t) {
  return oe.isObject(t) && t.isAxiosError === !0;
}
const ba = {
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
Object.entries(ba).forEach(([t, e]) => {
  ba[e] = t;
});
function Os(t) {
  const e = new zn(t), r = rs(zn.prototype.request, e);
  return oe.extend(r, zn.prototype, e, { allOwnKeys: !0 }), oe.extend(r, e, null, { allOwnKeys: !0 }), r.create = function(i) {
    return Os(Wn(t, i));
  }, r;
}
const vt = Os(Fr);
vt.Axios = zn;
vt.CanceledError = ir;
vt.CancelToken = Nc;
vt.isCancel = ys;
vt.VERSION = As;
vt.toFormData = jo;
vt.AxiosError = Ye;
vt.Cancel = vt.CanceledError;
vt.all = function(e) {
  return Promise.all(e);
};
vt.spread = jc;
vt.isAxiosError = kc;
vt.mergeConfig = Wn;
vt.AxiosHeaders = kt;
vt.formToJSON = (t) => gs(oe.isHTMLForm(t) ? new FormData(t) : t);
vt.getAdapter = Ts.getAdapter;
vt.HttpStatusCode = ba;
vt.default = vt;
const {
  Axios: hy,
  AxiosError: py,
  CanceledError: vy,
  isCancel: my,
  CancelToken: gy,
  VERSION: yy,
  all: by,
  Cancel: xy,
  isAxiosError: Sy,
  spread: Ey,
  toFormData: wy,
  AxiosHeaders: Ty,
  HttpStatusCode: Ay,
  formToJSON: Cy,
  getAdapter: Oy,
  mergeConfig: Py
} = vt;
var qr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function La(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Ps(t) {
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
var ea = { exports: {} }, Ci;
function Vc() {
  return Ci || (Ci = 1, function(t, e) {
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
                var s = o(5112), u = o(30), d = o(3070), h = s("unscopables"), p = Array.prototype;
                p[h] == null && d.f(p, h, {
                  configurable: !0,
                  value: u(null)
                }), n.exports = function(f) {
                  p[h][f] = !0;
                };
              }
            ),
            /***/
            1530: (
              /***/
              function(n, l, o) {
                var s = o(8710).charAt;
                n.exports = function(u, d, h) {
                  return d + (h ? s(u, d).length : 1);
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
                var s = o(4019), u = o(9781), d = o(7854), h = o(111), p = o(6656), f = o(648), v = o(8880), m = o(1320), g = o(3070).f, y = o(9518), S = o(7674), E = o(5112), A = o(9711), w = d.Int8Array, P = w && w.prototype, O = d.Uint8ClampedArray, D = O && O.prototype, N = w && y(w), j = P && y(P), H = Object.prototype, V = H.isPrototypeOf, z = E("toStringTag"), Y = A("TYPED_ARRAY_TAG"), W = s && !!S && f(d.opera) !== "Opera", ae = !1, X, he = {
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
                }, Te = function(R) {
                  if (!h(R)) return !1;
                  var M = f(R);
                  return M === "DataView" || p(he, M) || p(fe, M);
                }, Ie = function(be) {
                  if (!h(be)) return !1;
                  var R = f(be);
                  return p(he, R) || p(fe, R);
                }, xe = function(be) {
                  if (Ie(be)) return be;
                  throw TypeError("Target is not a typed array");
                }, je = function(be) {
                  if (S) {
                    if (V.call(N, be)) return be;
                  } else for (var R in he) if (p(he, X)) {
                    var M = d[R];
                    if (M && (be === M || V.call(M, be)))
                      return be;
                  }
                  throw TypeError("Target is not a typed array constructor");
                }, Ne = function(be, R, M) {
                  if (u) {
                    if (M) for (var T in he) {
                      var L = d[T];
                      L && p(L.prototype, be) && delete L.prototype[be];
                    }
                    (!j[be] || M) && m(j, be, M ? R : W && P[be] || R);
                  }
                }, Le = function(be, R, M) {
                  var T, L;
                  if (u) {
                    if (S) {
                      if (M) for (T in he)
                        L = d[T], L && p(L, be) && delete L[be];
                      if (!N[be] || M)
                        try {
                          return m(N, be, M ? R : W && w[be] || R);
                        } catch {
                        }
                      else return;
                    }
                    for (T in he)
                      L = d[T], L && (!L[be] || M) && m(L, be, R);
                  }
                };
                for (X in he)
                  d[X] || (W = !1);
                if ((!W || typeof N != "function" || N === Function.prototype) && (N = function() {
                  throw TypeError("Incorrect invocation");
                }, W))
                  for (X in he)
                    d[X] && S(d[X], N);
                if ((!W || !j || j === H) && (j = N.prototype, W))
                  for (X in he)
                    d[X] && S(d[X].prototype, j);
                if (W && y(D) !== j && S(D, j), u && !p(j, z)) {
                  ae = !0, g(j, z, { get: function() {
                    return h(this) ? this[Y] : void 0;
                  } });
                  for (X in he) d[X] && v(d[X], Y, X);
                }
                n.exports = {
                  NATIVE_ARRAY_BUFFER_VIEWS: W,
                  TYPED_ARRAY_TAG: ae && Y,
                  aTypedArray: xe,
                  aTypedArrayConstructor: je,
                  exportTypedArrayMethod: Ne,
                  exportTypedArrayStaticMethod: Le,
                  isView: Te,
                  isTypedArray: Ie,
                  TypedArray: N,
                  TypedArrayPrototype: j
                };
              }
            ),
            /***/
            3331: (
              /***/
              function(n, l, o) {
                var s = o(7854), u = o(9781), d = o(4019), h = o(8880), p = o(2248), f = o(7293), v = o(5787), m = o(9958), g = o(7466), y = o(7067), S = o(1179), E = o(9518), A = o(7674), w = o(8006).f, P = o(3070).f, O = o(1285), D = o(8003), N = o(9909), j = N.get, H = N.set, V = "ArrayBuffer", z = "DataView", Y = "prototype", W = "Wrong length", ae = "Wrong index", X = s[V], he = X, fe = s[z], Te = fe && fe[Y], Ie = Object.prototype, xe = s.RangeError, je = S.pack, Ne = S.unpack, Le = function(_) {
                  return [_ & 255];
                }, be = function(_) {
                  return [_ & 255, _ >> 8 & 255];
                }, R = function(_) {
                  return [_ & 255, _ >> 8 & 255, _ >> 16 & 255, _ >> 24 & 255];
                }, M = function(_) {
                  return _[3] << 24 | _[2] << 16 | _[1] << 8 | _[0];
                }, T = function(_) {
                  return je(_, 23, 4);
                }, L = function(_) {
                  return je(_, 52, 8);
                }, b = function(_, re) {
                  P(_[Y], re, { get: function() {
                    return j(this)[re];
                  } });
                }, x = function(_, re, le, ge) {
                  var Ce = y(le), Ke = j(_);
                  if (Ce + re > Ke.byteLength) throw xe(ae);
                  var tt = j(Ke.buffer).bytes, _e = Ce + Ke.byteOffset, G = tt.slice(_e, _e + re);
                  return ge ? G : G.reverse();
                }, I = function(_, re, le, ge, Ce, Ke) {
                  var tt = y(le), _e = j(_);
                  if (tt + re > _e.byteLength) throw xe(ae);
                  for (var G = j(_e.buffer).bytes, K = tt + _e.byteOffset, te = ge(+Ce), ce = 0; ce < re; ce++) G[K + ce] = te[Ke ? ce : re - ce - 1];
                };
                if (!d)
                  he = function(re) {
                    v(this, he, V);
                    var le = y(re);
                    H(this, {
                      bytes: O.call(new Array(le), 0),
                      byteLength: le
                    }), u || (this.byteLength = le);
                  }, fe = function(re, le, ge) {
                    v(this, fe, z), v(re, he, z);
                    var Ce = j(re).byteLength, Ke = m(le);
                    if (Ke < 0 || Ke > Ce) throw xe("Wrong offset");
                    if (ge = ge === void 0 ? Ce - Ke : g(ge), Ke + ge > Ce) throw xe(W);
                    H(this, {
                      buffer: re,
                      byteLength: ge,
                      byteOffset: Ke
                    }), u || (this.buffer = re, this.byteLength = ge, this.byteOffset = Ke);
                  }, u && (b(he, "byteLength"), b(fe, "buffer"), b(fe, "byteLength"), b(fe, "byteOffset")), p(fe[Y], {
                    getInt8: function(re) {
                      return x(this, 1, re)[0] << 24 >> 24;
                    },
                    getUint8: function(re) {
                      return x(this, 1, re)[0];
                    },
                    getInt16: function(re) {
                      var le = x(this, 2, re, arguments.length > 1 ? arguments[1] : void 0);
                      return (le[1] << 8 | le[0]) << 16 >> 16;
                    },
                    getUint16: function(re) {
                      var le = x(this, 2, re, arguments.length > 1 ? arguments[1] : void 0);
                      return le[1] << 8 | le[0];
                    },
                    getInt32: function(re) {
                      return M(x(this, 4, re, arguments.length > 1 ? arguments[1] : void 0));
                    },
                    getUint32: function(re) {
                      return M(x(this, 4, re, arguments.length > 1 ? arguments[1] : void 0)) >>> 0;
                    },
                    getFloat32: function(re) {
                      return Ne(x(this, 4, re, arguments.length > 1 ? arguments[1] : void 0), 23);
                    },
                    getFloat64: function(re) {
                      return Ne(x(this, 8, re, arguments.length > 1 ? arguments[1] : void 0), 52);
                    },
                    setInt8: function(re, le) {
                      I(this, 1, re, Le, le);
                    },
                    setUint8: function(re, le) {
                      I(this, 1, re, Le, le);
                    },
                    setInt16: function(re, le) {
                      I(this, 2, re, be, le, arguments.length > 2 ? arguments[2] : void 0);
                    },
                    setUint16: function(re, le) {
                      I(this, 2, re, be, le, arguments.length > 2 ? arguments[2] : void 0);
                    },
                    setInt32: function(re, le) {
                      I(this, 4, re, R, le, arguments.length > 2 ? arguments[2] : void 0);
                    },
                    setUint32: function(re, le) {
                      I(this, 4, re, R, le, arguments.length > 2 ? arguments[2] : void 0);
                    },
                    setFloat32: function(re, le) {
                      I(this, 4, re, T, le, arguments.length > 2 ? arguments[2] : void 0);
                    },
                    setFloat64: function(re, le) {
                      I(this, 8, re, L, le, arguments.length > 2 ? arguments[2] : void 0);
                    }
                  });
                else {
                  if (!f(function() {
                    X(1);
                  }) || !f(function() {
                    new X(-1);
                  }) || f(function() {
                    return new X(), new X(1.5), new X(NaN), X.name != V;
                  })) {
                    he = function(re) {
                      return v(this, he), new X(y(re));
                    };
                    for (var U = he[Y] = X[Y], $ = w(X), B = 0, Q; $.length > B; )
                      (Q = $[B++]) in he || h(he, Q, X[Q]);
                    U.constructor = he;
                  }
                  A && E(Te) !== Ie && A(Te, Ie);
                  var q = new fe(new he(2)), J = Te.setInt8;
                  q.setInt8(0, 2147483648), q.setInt8(1, 2147483649), (q.getInt8(0) || !q.getInt8(1)) && p(Te, {
                    setInt8: function(re, le) {
                      J.call(this, re, le << 24 >> 24);
                    },
                    setUint8: function(re, le) {
                      J.call(this, re, le << 24 >> 24);
                    }
                  }, { unsafe: !0 });
                }
                D(he, V), D(fe, z), n.exports = {
                  ArrayBuffer: he,
                  DataView: fe
                };
              }
            ),
            /***/
            1048: (
              /***/
              function(n, l, o) {
                var s = o(7908), u = o(1400), d = o(7466), h = Math.min;
                n.exports = [].copyWithin || function(f, v) {
                  var m = s(this), g = d(m.length), y = u(f, g), S = u(v, g), E = arguments.length > 2 ? arguments[2] : void 0, A = h((E === void 0 ? g : u(E, g)) - S, g - y), w = 1;
                  for (S < y && y < S + A && (w = -1, S += A - 1, y += A - 1); A-- > 0; )
                    S in m ? m[y] = m[S] : delete m[y], y += w, S += w;
                  return m;
                };
              }
            ),
            /***/
            1285: (
              /***/
              function(n, l, o) {
                var s = o(7908), u = o(1400), d = o(7466);
                n.exports = function(p) {
                  for (var f = s(this), v = d(f.length), m = arguments.length, g = u(m > 1 ? arguments[1] : void 0, v), y = m > 2 ? arguments[2] : void 0, S = y === void 0 ? v : u(y, v); S > g; ) f[g++] = p;
                  return f;
                };
              }
            ),
            /***/
            8533: (
              /***/
              function(n, l, o) {
                var s = o(2092).forEach, u = o(9341), d = u("forEach");
                n.exports = d ? [].forEach : function(p) {
                  return s(this, p, arguments.length > 1 ? arguments[1] : void 0);
                };
              }
            ),
            /***/
            8457: (
              /***/
              function(n, l, o) {
                var s = o(9974), u = o(7908), d = o(3411), h = o(7659), p = o(7466), f = o(6135), v = o(1246);
                n.exports = function(g) {
                  var y = u(g), S = typeof this == "function" ? this : Array, E = arguments.length, A = E > 1 ? arguments[1] : void 0, w = A !== void 0, P = v(y), O = 0, D, N, j, H, V, z;
                  if (w && (A = s(A, E > 2 ? arguments[2] : void 0, 2)), P != null && !(S == Array && h(P)))
                    for (H = P.call(y), V = H.next, N = new S(); !(j = V.call(H)).done; O++)
                      z = w ? d(H, A, [j.value, O], !0) : j.value, f(N, O, z);
                  else
                    for (D = p(y.length), N = new S(D); D > O; O++)
                      z = w ? A(y[O], O) : y[O], f(N, O, z);
                  return N.length = O, N;
                };
              }
            ),
            /***/
            1318: (
              /***/
              function(n, l, o) {
                var s = o(5656), u = o(7466), d = o(1400), h = function(p) {
                  return function(f, v, m) {
                    var g = s(f), y = u(g.length), S = d(m, y), E;
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
                  includes: h(!0),
                  // `Array.prototype.indexOf` method
                  // https://tc39.es/ecma262/#sec-array.prototype.indexof
                  indexOf: h(!1)
                };
              }
            ),
            /***/
            2092: (
              /***/
              function(n, l, o) {
                var s = o(9974), u = o(8361), d = o(7908), h = o(7466), p = o(5417), f = [].push, v = function(m) {
                  var g = m == 1, y = m == 2, S = m == 3, E = m == 4, A = m == 6, w = m == 7, P = m == 5 || A;
                  return function(O, D, N, j) {
                    for (var H = d(O), V = u(H), z = s(D, N, 3), Y = h(V.length), W = 0, ae = j || p, X = g ? ae(O, Y) : y || w ? ae(O, 0) : void 0, he, fe; Y > W; W++) if ((P || W in V) && (he = V[W], fe = z(he, W, H), m))
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
                          f.call(X, he);
                      }
                      else switch (m) {
                        case 4:
                          return !1;
                        // every
                        case 7:
                          f.call(X, he);
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
              function(n, l, o) {
                var s = o(5656), u = o(9958), d = o(7466), h = o(9341), p = Math.min, f = [].lastIndexOf, v = !!f && 1 / [1].lastIndexOf(1, -0) < 0, m = h("lastIndexOf"), g = v || !m;
                n.exports = g ? function(S) {
                  if (v) return f.apply(this, arguments) || 0;
                  var E = s(this), A = d(E.length), w = A - 1;
                  for (arguments.length > 1 && (w = p(w, u(arguments[1]))), w < 0 && (w = A + w); w >= 0; w--) if (w in E && E[w] === S) return w || 0;
                  return -1;
                } : f;
              }
            ),
            /***/
            1194: (
              /***/
              function(n, l, o) {
                var s = o(7293), u = o(5112), d = o(7392), h = u("species");
                n.exports = function(p) {
                  return d >= 51 || !s(function() {
                    var f = [], v = f.constructor = {};
                    return v[h] = function() {
                      return { foo: 1 };
                    }, f[p](Boolean).foo !== 1;
                  });
                };
              }
            ),
            /***/
            9341: (
              /***/
              function(n, l, o) {
                var s = o(7293);
                n.exports = function(u, d) {
                  var h = [][u];
                  return !!h && s(function() {
                    h.call(null, d || function() {
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
                var s = o(3099), u = o(7908), d = o(8361), h = o(7466), p = function(f) {
                  return function(v, m, g, y) {
                    s(m);
                    var S = u(v), E = d(S), A = h(S.length), w = f ? A - 1 : 0, P = f ? -1 : 1;
                    if (g < 2) for (; ; ) {
                      if (w in E) {
                        y = E[w], w += P;
                        break;
                      }
                      if (w += P, f ? w < 0 : A <= w)
                        throw TypeError("Reduce of empty array with no initial value");
                    }
                    for (; f ? w >= 0 : A > w; w += P) w in E && (y = m(y, E[w], w, S));
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
                var s = o(111), u = o(3157), d = o(5112), h = d("species");
                n.exports = function(p, f) {
                  var v;
                  return u(p) && (v = p.constructor, typeof v == "function" && (v === Array || u(v.prototype)) ? v = void 0 : s(v) && (v = v[h], v === null && (v = void 0))), new (v === void 0 ? Array : v)(f === 0 ? 0 : f);
                };
              }
            ),
            /***/
            3411: (
              /***/
              function(n, l, o) {
                var s = o(9670), u = o(9212);
                n.exports = function(d, h, p, f) {
                  try {
                    return f ? h(s(p)[0], p[1]) : h(p);
                  } catch (v) {
                    throw u(d), v;
                  }
                };
              }
            ),
            /***/
            7072: (
              /***/
              function(n, l, o) {
                var s = o(5112), u = s("iterator"), d = !1;
                try {
                  var h = 0, p = {
                    next: function() {
                      return { done: !!h++ };
                    },
                    return: function() {
                      d = !0;
                    }
                  };
                  p[u] = function() {
                    return this;
                  }, Array.from(p, function() {
                    throw 2;
                  });
                } catch {
                }
                n.exports = function(f, v) {
                  if (!v && !d) return !1;
                  var m = !1;
                  try {
                    var g = {};
                    g[u] = function() {
                      return {
                        next: function() {
                          return { done: m = !0 };
                        }
                      };
                    }, f(g);
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
                var s = o(1694), u = o(4326), d = o(5112), h = d("toStringTag"), p = u(/* @__PURE__ */ function() {
                  return arguments;
                }()) == "Arguments", f = function(v, m) {
                  try {
                    return v[m];
                  } catch {
                  }
                };
                n.exports = s ? u : function(v) {
                  var m, g, y;
                  return v === void 0 ? "Undefined" : v === null ? "Null" : typeof (g = f(m = Object(v), h)) == "string" ? g : p ? u(m) : (y = u(m)) == "Object" && typeof m.callee == "function" ? "Arguments" : y;
                };
              }
            ),
            /***/
            9920: (
              /***/
              function(n, l, o) {
                var s = o(6656), u = o(3887), d = o(1236), h = o(3070);
                n.exports = function(p, f) {
                  for (var v = u(f), m = h.f, g = d.f, y = 0; y < v.length; y++) {
                    var S = v[y];
                    s(p, S) || m(p, S, g(f, S));
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
                var s = o(3383).IteratorPrototype, u = o(30), d = o(9114), h = o(8003), p = o(7497), f = function() {
                  return this;
                };
                n.exports = function(v, m, g) {
                  var y = m + " Iterator";
                  return v.prototype = u(s, { next: d(1, g) }), h(v, y, !1, !0), p[y] = f, v;
                };
              }
            ),
            /***/
            8880: (
              /***/
              function(n, l, o) {
                var s = o(9781), u = o(3070), d = o(9114);
                n.exports = s ? function(h, p, f) {
                  return u.f(h, p, d(1, f));
                } : function(h, p, f) {
                  return h[p] = f, h;
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
                var s = o(7593), u = o(3070), d = o(9114);
                n.exports = function(h, p, f) {
                  var v = s(p);
                  v in h ? u.f(h, v, d(0, f)) : h[v] = f;
                };
              }
            ),
            /***/
            654: (
              /***/
              function(n, l, o) {
                var s = o(2109), u = o(4994), d = o(9518), h = o(7674), p = o(8003), f = o(8880), v = o(1320), m = o(5112), g = o(1913), y = o(7497), S = o(3383), E = S.IteratorPrototype, A = S.BUGGY_SAFARI_ITERATORS, w = m("iterator"), P = "keys", O = "values", D = "entries", N = function() {
                  return this;
                };
                n.exports = function(j, H, V, z, Y, W, ae) {
                  u(V, H, z);
                  var X = function(R) {
                    if (R === Y && xe) return xe;
                    if (!A && R in Te) return Te[R];
                    switch (R) {
                      case P:
                        return function() {
                          return new V(this, R);
                        };
                      case O:
                        return function() {
                          return new V(this, R);
                        };
                      case D:
                        return function() {
                          return new V(this, R);
                        };
                    }
                    return function() {
                      return new V(this);
                    };
                  }, he = H + " Iterator", fe = !1, Te = j.prototype, Ie = Te[w] || Te["@@iterator"] || Y && Te[Y], xe = !A && Ie || X(Y), je = H == "Array" && Te.entries || Ie, Ne, Le, be;
                  if (je && (Ne = d(je.call(new j())), E !== Object.prototype && Ne.next && (!g && d(Ne) !== E && (h ? h(Ne, E) : typeof Ne[w] != "function" && f(Ne, w, N)), p(Ne, he, !0, !0), g && (y[he] = N))), Y == O && Ie && Ie.name !== O && (fe = !0, xe = function() {
                    return Ie.call(this);
                  }), (!g || ae) && Te[w] !== xe && f(Te, w, xe), y[H] = xe, Y)
                    if (Le = {
                      values: X(O),
                      keys: W ? xe : X(P),
                      entries: X(D)
                    }, ae) for (be in Le)
                      (A || fe || !(be in Te)) && v(Te, be, Le[be]);
                    else s({ target: H, proto: !0, forced: A || fe }, Le);
                  return Le;
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
                var s = o(7854), u = o(111), d = s.document, h = u(d) && u(d.createElement);
                n.exports = function(p) {
                  return h ? d.createElement(p) : {};
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
                var s = o(7854), u = o(8113), d = s.process, h = d && d.versions, p = h && h.v8, f, v;
                p ? (f = p.split("."), v = f[0] + f[1]) : u && (f = u.match(/Edge\/(\d+)/), (!f || f[1] >= 74) && (f = u.match(/Chrome\/(\d+)/), f && (v = f[1]))), n.exports = v && +v;
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
                var s = o(7854), u = o(1236).f, d = o(8880), h = o(1320), p = o(3505), f = o(9920), v = o(4705);
                n.exports = function(m, g) {
                  var y = m.target, S = m.global, E = m.stat, A, w, P, O, D, N;
                  if (S ? w = s : E ? w = s[y] || p(y, {}) : w = (s[y] || {}).prototype, w) for (P in g) {
                    if (D = g[P], m.noTargetGet ? (N = u(w, P), O = N && N.value) : O = w[P], A = v(S ? P : y + (E ? "." : "#") + P, m.forced), !A && O !== void 0) {
                      if (typeof D == typeof O) continue;
                      f(D, O);
                    }
                    (m.sham || O && O.sham) && d(D, "sham", !0), h(w, P, D, m);
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
                var s = o(1320), u = o(7293), d = o(5112), h = o(2261), p = o(8880), f = d("species"), v = !u(function() {
                  var E = /./;
                  return E.exec = function() {
                    var A = [];
                    return A.groups = { a: "7" }, A;
                  }, "".replace(E, "$<a>") !== "7";
                }), m = function() {
                  return "a".replace(/./, "$0") === "$0";
                }(), g = d("replace"), y = function() {
                  return /./[g] ? /./[g]("a", "$0") === "" : !1;
                }(), S = !u(function() {
                  var E = /(?:)/, A = E.exec;
                  E.exec = function() {
                    return A.apply(this, arguments);
                  };
                  var w = "ab".split(E);
                  return w.length !== 2 || w[0] !== "a" || w[1] !== "b";
                });
                n.exports = function(E, A, w, P) {
                  var O = d(E), D = !u(function() {
                    var Y = {};
                    return Y[O] = function() {
                      return 7;
                    }, ""[E](Y) != 7;
                  }), N = D && !u(function() {
                    var Y = !1, W = /a/;
                    return E === "split" && (W = {}, W.constructor = {}, W.constructor[f] = function() {
                      return W;
                    }, W.flags = "", W[O] = /./[O]), W.exec = function() {
                      return Y = !0, null;
                    }, W[O](""), !Y;
                  });
                  if (!D || !N || E === "replace" && !(v && m && !y) || E === "split" && !S) {
                    var j = /./[O], H = w(O, ""[E], function(Y, W, ae, X, he) {
                      return W.exec === h ? D && !he ? { done: !0, value: j.call(W, ae, X) } : { done: !0, value: Y.call(ae, W, X) } : { done: !1 };
                    }, {
                      REPLACE_KEEPS_$0: m,
                      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: y
                    }), V = H[0], z = H[1];
                    s(String.prototype, E, V), s(
                      RegExp.prototype,
                      O,
                      A == 2 ? function(Y, W) {
                        return z.call(Y, this, W);
                      } : function(Y) {
                        return z.call(Y, this);
                      }
                    );
                  }
                  P && p(RegExp.prototype[O], "sham", !0);
                };
              }
            ),
            /***/
            9974: (
              /***/
              function(n, l, o) {
                var s = o(3099);
                n.exports = function(u, d, h) {
                  if (s(u), d === void 0) return u;
                  switch (h) {
                    case 0:
                      return function() {
                        return u.call(d);
                      };
                    case 1:
                      return function(p) {
                        return u.call(d, p);
                      };
                    case 2:
                      return function(p, f) {
                        return u.call(d, p, f);
                      };
                    case 3:
                      return function(p, f, v) {
                        return u.call(d, p, f, v);
                      };
                  }
                  return function() {
                    return u.apply(d, arguments);
                  };
                };
              }
            ),
            /***/
            5005: (
              /***/
              function(n, l, o) {
                var s = o(857), u = o(7854), d = function(h) {
                  return typeof h == "function" ? h : void 0;
                };
                n.exports = function(h, p) {
                  return arguments.length < 2 ? d(s[h]) || d(u[h]) : s[h] && s[h][p] || u[h] && u[h][p];
                };
              }
            ),
            /***/
            1246: (
              /***/
              function(n, l, o) {
                var s = o(648), u = o(7497), d = o(5112), h = d("iterator");
                n.exports = function(p) {
                  if (p != null) return p[h] || p["@@iterator"] || u[s(p)];
                };
              }
            ),
            /***/
            8554: (
              /***/
              function(n, l, o) {
                var s = o(9670), u = o(1246);
                n.exports = function(d) {
                  var h = u(d);
                  if (typeof h != "function")
                    throw TypeError(String(d) + " is not iterable");
                  return s(h.call(d));
                };
              }
            ),
            /***/
            647: (
              /***/
              function(n, l, o) {
                var s = o(7908), u = Math.floor, d = "".replace, h = /\$([$&'`]|\d\d?|<[^>]*>)/g, p = /\$([$&'`]|\d\d?)/g;
                n.exports = function(f, v, m, g, y, S) {
                  var E = m + f.length, A = g.length, w = p;
                  return y !== void 0 && (y = s(y), w = h), d.call(S, w, function(P, O) {
                    var D;
                    switch (O.charAt(0)) {
                      case "$":
                        return "$";
                      case "&":
                        return f;
                      case "`":
                        return v.slice(0, m);
                      case "'":
                        return v.slice(E);
                      case "<":
                        D = y[O.slice(1, -1)];
                        break;
                      default:
                        var N = +O;
                        if (N === 0) return P;
                        if (N > A) {
                          var j = u(N / 10);
                          return j === 0 ? P : j <= A ? g[j - 1] === void 0 ? O.charAt(1) : g[j - 1] + O.charAt(1) : P;
                        }
                        D = g[N - 1];
                    }
                    return D === void 0 ? "" : D;
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
                var s = o(9781), u = o(7293), d = o(317);
                n.exports = !s && !u(function() {
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
                var l = Math.abs, o = Math.pow, s = Math.floor, u = Math.log, d = Math.LN2, h = function(f, v, m) {
                  var g = new Array(m), y = m * 8 - v - 1, S = (1 << y) - 1, E = S >> 1, A = v === 23 ? o(2, -24) - o(2, -77) : 0, w = f < 0 || f === 0 && 1 / f < 0 ? 1 : 0, P = 0, O, D, N;
                  for (f = l(f), f != f || f === 1 / 0 ? (D = f != f ? 1 : 0, O = S) : (O = s(u(f) / d), f * (N = o(2, -O)) < 1 && (O--, N *= 2), O + E >= 1 ? f += A / N : f += A * o(2, 1 - E), f * N >= 2 && (O++, N /= 2), O + E >= S ? (D = 0, O = S) : O + E >= 1 ? (D = (f * N - 1) * o(2, v), O = O + E) : (D = f * o(2, E - 1) * o(2, v), O = 0)); v >= 8; g[P++] = D & 255, D /= 256, v -= 8) ;
                  for (O = O << v | D, y += v; y > 0; g[P++] = O & 255, O /= 256, y -= 8) ;
                  return g[--P] |= w * 128, g;
                }, p = function(f, v) {
                  var m = f.length, g = m * 8 - v - 1, y = (1 << g) - 1, S = y >> 1, E = g - 7, A = m - 1, w = f[A--], P = w & 127, O;
                  for (w >>= 7; E > 0; P = P * 256 + f[A], A--, E -= 8) ;
                  for (O = P & (1 << -E) - 1, P >>= -E, E += v; E > 0; O = O * 256 + f[A], A--, E -= 8) ;
                  if (P === 0)
                    P = 1 - S;
                  else {
                    if (P === y)
                      return O ? NaN : w ? -1 / 0 : 1 / 0;
                    O = O + o(2, v), P = P - S;
                  }
                  return (w ? -1 : 1) * O * o(2, P - v);
                };
                n.exports = {
                  pack: h,
                  unpack: p
                };
              }
            ),
            /***/
            8361: (
              /***/
              function(n, l, o) {
                var s = o(7293), u = o(4326), d = "".split;
                n.exports = s(function() {
                  return !Object("z").propertyIsEnumerable(0);
                }) ? function(h) {
                  return u(h) == "String" ? d.call(h, "") : Object(h);
                } : Object;
              }
            ),
            /***/
            9587: (
              /***/
              function(n, l, o) {
                var s = o(111), u = o(7674);
                n.exports = function(d, h, p) {
                  var f, v;
                  return (
                    // it can work only with native `setPrototypeOf`
                    u && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
                    typeof (f = h.constructor) == "function" && f !== p && s(v = f.prototype) && v !== p.prototype && u(d, v), d
                  );
                };
              }
            ),
            /***/
            2788: (
              /***/
              function(n, l, o) {
                var s = o(5465), u = Function.toString;
                typeof s.inspectSource != "function" && (s.inspectSource = function(d) {
                  return u.call(d);
                }), n.exports = s.inspectSource;
              }
            ),
            /***/
            9909: (
              /***/
              function(n, l, o) {
                var s = o(8536), u = o(7854), d = o(111), h = o(8880), p = o(6656), f = o(5465), v = o(6200), m = o(3501), g = u.WeakMap, y, S, E, A = function(H) {
                  return E(H) ? S(H) : y(H, {});
                }, w = function(H) {
                  return function(V) {
                    var z;
                    if (!d(V) || (z = S(V)).type !== H)
                      throw TypeError("Incompatible receiver, " + H + " required");
                    return z;
                  };
                };
                if (s) {
                  var P = f.state || (f.state = new g()), O = P.get, D = P.has, N = P.set;
                  y = function(H, V) {
                    return V.facade = H, N.call(P, H, V), V;
                  }, S = function(H) {
                    return O.call(P, H) || {};
                  }, E = function(H) {
                    return D.call(P, H);
                  };
                } else {
                  var j = v("state");
                  m[j] = !0, y = function(H, V) {
                    return V.facade = H, h(H, j, V), V;
                  }, S = function(H) {
                    return p(H, j) ? H[j] : {};
                  }, E = function(H) {
                    return p(H, j);
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
              function(n, l, o) {
                var s = o(5112), u = o(7497), d = s("iterator"), h = Array.prototype;
                n.exports = function(p) {
                  return p !== void 0 && (u.Array === p || h[d] === p);
                };
              }
            ),
            /***/
            3157: (
              /***/
              function(n, l, o) {
                var s = o(4326);
                n.exports = Array.isArray || function(d) {
                  return s(d) == "Array";
                };
              }
            ),
            /***/
            4705: (
              /***/
              function(n, l, o) {
                var s = o(7293), u = /#|\.prototype\./, d = function(m, g) {
                  var y = p[h(m)];
                  return y == v ? !0 : y == f ? !1 : typeof g == "function" ? s(g) : !!g;
                }, h = d.normalize = function(m) {
                  return String(m).replace(u, ".").toLowerCase();
                }, p = d.data = {}, f = d.NATIVE = "N", v = d.POLYFILL = "P";
                n.exports = d;
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
                var s = o(111), u = o(4326), d = o(5112), h = d("match");
                n.exports = function(p) {
                  var f;
                  return s(p) && ((f = p[h]) !== void 0 ? !!f : u(p) == "RegExp");
                };
              }
            ),
            /***/
            9212: (
              /***/
              function(n, l, o) {
                var s = o(9670);
                n.exports = function(u) {
                  var d = u.return;
                  if (d !== void 0)
                    return s(d.call(u)).value;
                };
              }
            ),
            /***/
            3383: (
              /***/
              function(n, l, o) {
                var s = o(7293), u = o(9518), d = o(8880), h = o(6656), p = o(5112), f = o(1913), v = p("iterator"), m = !1, g = function() {
                  return this;
                }, y, S, E;
                [].keys && (E = [].keys(), "next" in E ? (S = u(u(E)), S !== Object.prototype && (y = S)) : m = !0);
                var A = y == null || s(function() {
                  var w = {};
                  return y[v].call(w) !== w;
                });
                A && (y = {}), (!f || A) && !h(y, v) && d(y, v, g), n.exports = {
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
                var s = o(7293), u = o(5112), d = o(1913), h = u("iterator");
                n.exports = !s(function() {
                  var p = new URL("b?a=1&b=2&c=3", "http://a"), f = p.searchParams, v = "";
                  return p.pathname = "c%20d", f.forEach(function(m, g) {
                    f.delete("b"), v += g + m;
                  }), d && !p.toJSON || !f.sort || p.href !== "http://a/c%20d?a=1&c=3" || f.get("c") !== "3" || String(new URLSearchParams("?a=1")) !== "a=1" || !f[h] || new URL("https://a@b").username !== "a" || new URLSearchParams(new URLSearchParams("a=b")).get("a") !== "b" || new URL("http://тест").host !== "xn--e1aybc" || new URL("http://a#б").hash !== "#%D0%B1" || v !== "a1c3" || new URL("http://x", void 0).host !== "x";
                });
              }
            ),
            /***/
            8536: (
              /***/
              function(n, l, o) {
                var s = o(7854), u = o(2788), d = s.WeakMap;
                n.exports = typeof d == "function" && /native code/.test(u(d));
              }
            ),
            /***/
            1574: (
              /***/
              function(n, l, o) {
                var s = o(9781), u = o(7293), d = o(1956), h = o(5181), p = o(5296), f = o(7908), v = o(8361), m = Object.assign, g = Object.defineProperty;
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
                  var y = {}, S = {}, E = Symbol(), A = "abcdefghijklmnopqrst";
                  return y[E] = 7, A.split("").forEach(function(w) {
                    S[w] = w;
                  }), m({}, y)[E] != 7 || d(m({}, S)).join("") != A;
                }) ? function(S, E) {
                  for (var A = f(S), w = arguments.length, P = 1, O = h.f, D = p.f; w > P; )
                    for (var N = v(arguments[P++]), j = O ? d(N).concat(O(N)) : d(N), H = j.length, V = 0, z; H > V; )
                      z = j[V++], (!s || D.call(N, z)) && (A[z] = N[z]);
                  return A;
                } : m;
              }
            ),
            /***/
            30: (
              /***/
              function(n, l, o) {
                var s = o(9670), u = o(6048), d = o(748), h = o(3501), p = o(490), f = o(317), v = o(6200), m = ">", g = "<", y = "prototype", S = "script", E = v("IE_PROTO"), A = function() {
                }, w = function(j) {
                  return g + S + m + j + g + "/" + S + m;
                }, P = function(j) {
                  j.write(w("")), j.close();
                  var H = j.parentWindow.Object;
                  return j = null, H;
                }, O = function() {
                  var j = f("iframe"), H = "java" + S + ":", V;
                  return j.style.display = "none", p.appendChild(j), j.src = String(H), V = j.contentWindow.document, V.open(), V.write(w("document.F=Object")), V.close(), V.F;
                }, D, N = function() {
                  try {
                    D = document.domain && new ActiveXObject("htmlfile");
                  } catch {
                  }
                  N = D ? P(D) : O();
                  for (var j = d.length; j--; ) delete N[y][d[j]];
                  return N();
                };
                h[E] = !0, n.exports = Object.create || function(H, V) {
                  var z;
                  return H !== null ? (A[y] = s(H), z = new A(), A[y] = null, z[E] = H) : z = N(), V === void 0 ? z : u(z, V);
                };
              }
            ),
            /***/
            6048: (
              /***/
              function(n, l, o) {
                var s = o(9781), u = o(3070), d = o(9670), h = o(1956);
                n.exports = s ? Object.defineProperties : function(f, v) {
                  d(f);
                  for (var m = h(v), g = m.length, y = 0, S; g > y; ) u.f(f, S = m[y++], v[S]);
                  return f;
                };
              }
            ),
            /***/
            3070: (
              /***/
              function(n, l, o) {
                var s = o(9781), u = o(4664), d = o(9670), h = o(7593), p = Object.defineProperty;
                l.f = s ? p : function(v, m, g) {
                  if (d(v), m = h(m, !0), d(g), u) try {
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
                var s = o(9781), u = o(5296), d = o(9114), h = o(5656), p = o(7593), f = o(6656), v = o(4664), m = Object.getOwnPropertyDescriptor;
                l.f = s ? m : function(y, S) {
                  if (y = h(y), S = p(S, !0), v) try {
                    return m(y, S);
                  } catch {
                  }
                  if (f(y, S)) return d(!u.f.call(y, S), y[S]);
                };
              }
            ),
            /***/
            8006: (
              /***/
              function(n, l, o) {
                var s = o(6324), u = o(748), d = u.concat("length", "prototype");
                l.f = Object.getOwnPropertyNames || function(p) {
                  return s(p, d);
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
                var s = o(6656), u = o(7908), d = o(6200), h = o(8544), p = d("IE_PROTO"), f = Object.prototype;
                n.exports = h ? Object.getPrototypeOf : function(v) {
                  return v = u(v), s(v, p) ? v[p] : typeof v.constructor == "function" && v instanceof v.constructor ? v.constructor.prototype : v instanceof Object ? f : null;
                };
              }
            ),
            /***/
            6324: (
              /***/
              function(n, l, o) {
                var s = o(6656), u = o(5656), d = o(1318).indexOf, h = o(3501);
                n.exports = function(p, f) {
                  var v = u(p), m = 0, g = [], y;
                  for (y in v) !s(h, y) && s(v, y) && g.push(y);
                  for (; f.length > m; ) s(v, y = f[m++]) && (~d(g, y) || g.push(y));
                  return g;
                };
              }
            ),
            /***/
            1956: (
              /***/
              function(n, l, o) {
                var s = o(6324), u = o(748);
                n.exports = Object.keys || function(h) {
                  return s(h, u);
                };
              }
            ),
            /***/
            5296: (
              /***/
              function(n, l) {
                var o = {}.propertyIsEnumerable, s = Object.getOwnPropertyDescriptor, u = s && !o.call({ 1: 2 }, 1);
                l.f = u ? function(h) {
                  var p = s(this, h);
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
                  var d = !1, h = {}, p;
                  try {
                    p = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set, p.call(h, []), d = h instanceof Array;
                  } catch {
                  }
                  return function(v, m) {
                    return s(v), u(m), d ? p.call(v, m) : v.__proto__ = m, v;
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
                var s = o(5005), u = o(8006), d = o(5181), h = o(9670);
                n.exports = s("Reflect", "ownKeys") || function(f) {
                  var v = u.f(h(f)), m = d.f;
                  return m ? v.concat(m(f)) : v;
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
                n.exports = function(u, d, h) {
                  for (var p in d) s(u, p, d[p], h);
                  return u;
                };
              }
            ),
            /***/
            1320: (
              /***/
              function(n, l, o) {
                var s = o(7854), u = o(8880), d = o(6656), h = o(3505), p = o(2788), f = o(9909), v = f.get, m = f.enforce, g = String(String).split("String");
                (n.exports = function(y, S, E, A) {
                  var w = A ? !!A.unsafe : !1, P = A ? !!A.enumerable : !1, O = A ? !!A.noTargetGet : !1, D;
                  if (typeof E == "function" && (typeof S == "string" && !d(E, "name") && u(E, "name", S), D = m(E), D.source || (D.source = g.join(typeof S == "string" ? S : ""))), y === s) {
                    P ? y[S] = E : h(S, E);
                    return;
                  } else w ? !O && y[S] && (P = !0) : delete y[S];
                  P ? y[S] = E : u(y, S, E);
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
                n.exports = function(d, h) {
                  var p = d.exec;
                  if (typeof p == "function") {
                    var f = p.call(d, h);
                    if (typeof f != "object")
                      throw TypeError("RegExp exec method returned something other than an Object or null");
                    return f;
                  }
                  if (s(d) !== "RegExp")
                    throw TypeError("RegExp#exec called on incompatible receiver");
                  return u.call(d, h);
                };
              }
            ),
            /***/
            2261: (
              /***/
              function(n, l, o) {
                var s = o(7066), u = o(2999), d = RegExp.prototype.exec, h = String.prototype.replace, p = d, f = function() {
                  var y = /a/, S = /b*/g;
                  return d.call(y, "a"), d.call(S, "a"), y.lastIndex !== 0 || S.lastIndex !== 0;
                }(), v = u.UNSUPPORTED_Y || u.BROKEN_CARET, m = /()??/.exec("")[1] !== void 0, g = f || m || v;
                g && (p = function(S) {
                  var E = this, A, w, P, O, D = v && E.sticky, N = s.call(E), j = E.source, H = 0, V = S;
                  return D && (N = N.replace("y", ""), N.indexOf("g") === -1 && (N += "g"), V = String(S).slice(E.lastIndex), E.lastIndex > 0 && (!E.multiline || E.multiline && S[E.lastIndex - 1] !== `
`) && (j = "(?: " + j + ")", V = " " + V, H++), w = new RegExp("^(?:" + j + ")", N)), m && (w = new RegExp("^" + j + "$(?!\\s)", N)), f && (A = E.lastIndex), P = d.call(D ? w : E, V), D ? P ? (P.input = P.input.slice(H), P[0] = P[0].slice(H), P.index = E.lastIndex, E.lastIndex += P[0].length) : E.lastIndex = 0 : f && P && (E.lastIndex = E.global ? P.index + P[0].length : A), m && P && P.length > 1 && h.call(P[0], w, function() {
                    for (O = 1; O < arguments.length - 2; O++)
                      arguments[O] === void 0 && (P[O] = void 0);
                  }), P;
                }), n.exports = p;
              }
            ),
            /***/
            7066: (
              /***/
              function(n, l, o) {
                var s = o(9670);
                n.exports = function() {
                  var u = s(this), d = "";
                  return u.global && (d += "g"), u.ignoreCase && (d += "i"), u.multiline && (d += "m"), u.dotAll && (d += "s"), u.unicode && (d += "u"), u.sticky && (d += "y"), d;
                };
              }
            ),
            /***/
            2999: (
              /***/
              function(n, l, o) {
                var s = o(7293);
                function u(d, h) {
                  return RegExp(d, h);
                }
                l.UNSUPPORTED_Y = s(function() {
                  var d = u("a", "y");
                  return d.lastIndex = 2, d.exec("abcd") != null;
                }), l.BROKEN_CARET = s(function() {
                  var d = u("^r", "gy");
                  return d.lastIndex = 2, d.exec("str") != null;
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
                n.exports = function(d, h) {
                  try {
                    u(s, d, h);
                  } catch {
                    s[d] = h;
                  }
                  return h;
                };
              }
            ),
            /***/
            6340: (
              /***/
              function(n, l, o) {
                var s = o(5005), u = o(3070), d = o(5112), h = o(9781), p = d("species");
                n.exports = function(f) {
                  var v = s(f), m = u.f;
                  h && v && !v[p] && m(v, p, {
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
                var s = o(3070).f, u = o(6656), d = o(5112), h = d("toStringTag");
                n.exports = function(p, f, v) {
                  p && !u(p = v ? p : p.prototype, h) && s(p, h, { configurable: !0, value: f });
                };
              }
            ),
            /***/
            6200: (
              /***/
              function(n, l, o) {
                var s = o(2309), u = o(9711), d = s("keys");
                n.exports = function(h) {
                  return d[h] || (d[h] = u(h));
                };
              }
            ),
            /***/
            5465: (
              /***/
              function(n, l, o) {
                var s = o(7854), u = o(3505), d = "__core-js_shared__", h = s[d] || u(d, {});
                n.exports = h;
              }
            ),
            /***/
            2309: (
              /***/
              function(n, l, o) {
                var s = o(1913), u = o(5465);
                (n.exports = function(d, h) {
                  return u[d] || (u[d] = h !== void 0 ? h : {});
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
                var s = o(9670), u = o(3099), d = o(5112), h = d("species");
                n.exports = function(p, f) {
                  var v = s(p).constructor, m;
                  return v === void 0 || (m = s(v)[h]) == null ? f : u(m);
                };
              }
            ),
            /***/
            8710: (
              /***/
              function(n, l, o) {
                var s = o(9958), u = o(4488), d = function(h) {
                  return function(p, f) {
                    var v = String(u(p)), m = s(f), g = v.length, y, S;
                    return m < 0 || m >= g ? h ? "" : void 0 : (y = v.charCodeAt(m), y < 55296 || y > 56319 || m + 1 === g || (S = v.charCodeAt(m + 1)) < 56320 || S > 57343 ? h ? v.charAt(m) : y : h ? v.slice(m, m + 2) : (y - 55296 << 10) + (S - 56320) + 65536);
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
                var l = 2147483647, o = 36, s = 1, u = 26, d = 38, h = 700, p = 72, f = 128, v = "-", m = /[^\0-\u007E]/, g = /[.\u3002\uFF0E\uFF61]/g, y = "Overflow: input needs wider integers to process", S = o - s, E = Math.floor, A = String.fromCharCode, w = function(N) {
                  for (var j = [], H = 0, V = N.length; H < V; ) {
                    var z = N.charCodeAt(H++);
                    if (z >= 55296 && z <= 56319 && H < V) {
                      var Y = N.charCodeAt(H++);
                      (Y & 64512) == 56320 ? j.push(((z & 1023) << 10) + (Y & 1023) + 65536) : (j.push(z), H--);
                    } else
                      j.push(z);
                  }
                  return j;
                }, P = function(N) {
                  return N + 22 + 75 * (N < 26);
                }, O = function(N, j, H) {
                  var V = 0;
                  for (N = H ? E(N / h) : N >> 1, N += E(N / j); N > S * u >> 1; V += o)
                    N = E(N / S);
                  return E(V + (S + 1) * N / (N + d));
                }, D = function(N) {
                  var j = [];
                  N = w(N);
                  var H = N.length, V = f, z = 0, Y = p, W, ae;
                  for (W = 0; W < N.length; W++)
                    ae = N[W], ae < 128 && j.push(A(ae));
                  var X = j.length, he = X;
                  for (X && j.push(v); he < H; ) {
                    var fe = l;
                    for (W = 0; W < N.length; W++)
                      ae = N[W], ae >= V && ae < fe && (fe = ae);
                    var Te = he + 1;
                    if (fe - V > E((l - z) / Te))
                      throw RangeError(y);
                    for (z += (fe - V) * Te, V = fe, W = 0; W < N.length; W++) {
                      if (ae = N[W], ae < V && ++z > l)
                        throw RangeError(y);
                      if (ae == V) {
                        for (var Ie = z, xe = o; ; xe += o) {
                          var je = xe <= Y ? s : xe >= Y + u ? u : xe - Y;
                          if (Ie < je) break;
                          var Ne = Ie - je, Le = o - je;
                          j.push(A(P(je + Ne % Le))), Ie = E(Ne / Le);
                        }
                        j.push(A(P(Ie))), Y = O(z, Te, he == X), z = 0, ++he;
                      }
                    }
                    ++z, ++V;
                  }
                  return j.join("");
                };
                n.exports = function(N) {
                  var j = [], H = N.toLowerCase().replace(g, ".").split("."), V, z;
                  for (V = 0; V < H.length; V++)
                    z = H[V], j.push(m.test(z) ? "xn--" + D(z) : z);
                  return j.join(".");
                };
              }
            ),
            /***/
            6091: (
              /***/
              function(n, l, o) {
                var s = o(7293), u = o(1361), d = "​᠎";
                n.exports = function(h) {
                  return s(function() {
                    return !!u[h]() || d[h]() != d || u[h].name !== h;
                  });
                };
              }
            ),
            /***/
            3111: (
              /***/
              function(n, l, o) {
                var s = o(4488), u = o(1361), d = "[" + u + "]", h = RegExp("^" + d + d + "*"), p = RegExp(d + d + "*$"), f = function(v) {
                  return function(m) {
                    var g = String(s(m));
                    return v & 1 && (g = g.replace(h, "")), v & 2 && (g = g.replace(p, "")), g;
                  };
                };
                n.exports = {
                  // `String.prototype.{ trimLeft, trimStart }` methods
                  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
                  start: f(1),
                  // `String.prototype.{ trimRight, trimEnd }` methods
                  // https://tc39.es/ecma262/#sec-string.prototype.trimend
                  end: f(2),
                  // `String.prototype.trim` method
                  // https://tc39.es/ecma262/#sec-string.prototype.trim
                  trim: f(3)
                };
              }
            ),
            /***/
            1400: (
              /***/
              function(n, l, o) {
                var s = o(9958), u = Math.max, d = Math.min;
                n.exports = function(h, p) {
                  var f = s(h);
                  return f < 0 ? u(f + p, 0) : d(f, p);
                };
              }
            ),
            /***/
            7067: (
              /***/
              function(n, l, o) {
                var s = o(9958), u = o(7466);
                n.exports = function(d) {
                  if (d === void 0) return 0;
                  var h = s(d), p = u(h);
                  if (h !== p) throw RangeError("Wrong length or index");
                  return p;
                };
              }
            ),
            /***/
            5656: (
              /***/
              function(n, l, o) {
                var s = o(8361), u = o(4488);
                n.exports = function(d) {
                  return s(u(d));
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
                n.exports = function(d) {
                  return d > 0 ? u(s(d), 9007199254740991) : 0;
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
                n.exports = function(u, d) {
                  var h = s(u);
                  if (h % d) throw RangeError("Wrong offset");
                  return h;
                };
              }
            ),
            /***/
            3002: (
              /***/
              function(n, l, o) {
                var s = o(9958);
                n.exports = function(u) {
                  var d = s(u);
                  if (d < 0) throw RangeError("The argument can't be less than 0");
                  return d;
                };
              }
            ),
            /***/
            7593: (
              /***/
              function(n, l, o) {
                var s = o(111);
                n.exports = function(u, d) {
                  if (!s(u)) return u;
                  var h, p;
                  if (d && typeof (h = u.toString) == "function" && !s(p = h.call(u)) || typeof (h = u.valueOf) == "function" && !s(p = h.call(u)) || !d && typeof (h = u.toString) == "function" && !s(p = h.call(u))) return p;
                  throw TypeError("Can't convert object to primitive value");
                };
              }
            ),
            /***/
            1694: (
              /***/
              function(n, l, o) {
                var s = o(5112), u = s("toStringTag"), d = {};
                d[u] = "z", n.exports = String(d) === "[object z]";
              }
            ),
            /***/
            9843: (
              /***/
              function(n, l, o) {
                var s = o(2109), u = o(7854), d = o(9781), h = o(3832), p = o(260), f = o(3331), v = o(5787), m = o(9114), g = o(8880), y = o(7466), S = o(7067), E = o(4590), A = o(7593), w = o(6656), P = o(648), O = o(111), D = o(30), N = o(7674), j = o(8006).f, H = o(7321), V = o(2092).forEach, z = o(6340), Y = o(3070), W = o(1236), ae = o(9909), X = o(9587), he = ae.get, fe = ae.set, Te = Y.f, Ie = W.f, xe = Math.round, je = u.RangeError, Ne = f.ArrayBuffer, Le = f.DataView, be = p.NATIVE_ARRAY_BUFFER_VIEWS, R = p.TYPED_ARRAY_TAG, M = p.TypedArray, T = p.TypedArrayPrototype, L = p.aTypedArrayConstructor, b = p.isTypedArray, x = "BYTES_PER_ELEMENT", I = "Wrong length", U = function(_, re) {
                  for (var le = 0, ge = re.length, Ce = new (L(_))(ge); ge > le; ) Ce[le] = re[le++];
                  return Ce;
                }, $ = function(_, re) {
                  Te(_, re, { get: function() {
                    return he(this)[re];
                  } });
                }, B = function(_) {
                  var re;
                  return _ instanceof Ne || (re = P(_)) == "ArrayBuffer" || re == "SharedArrayBuffer";
                }, Q = function(_, re) {
                  return b(_) && typeof re != "symbol" && re in _ && String(+re) == String(re);
                }, q = function(re, le) {
                  return Q(re, le = A(le, !0)) ? m(2, re[le]) : Ie(re, le);
                }, J = function(re, le, ge) {
                  return Q(re, le = A(le, !0)) && O(ge) && w(ge, "value") && !w(ge, "get") && !w(ge, "set") && !ge.configurable && (!w(ge, "writable") || ge.writable) && (!w(ge, "enumerable") || ge.enumerable) ? (re[le] = ge.value, re) : Te(re, le, ge);
                };
                d ? (be || (W.f = q, Y.f = J, $(T, "buffer"), $(T, "byteOffset"), $(T, "byteLength"), $(T, "length")), s({ target: "Object", stat: !0, forced: !be }, {
                  getOwnPropertyDescriptor: q,
                  defineProperty: J
                }), n.exports = function(_, re, le) {
                  var ge = _.match(/\d+$/)[0] / 8, Ce = _ + (le ? "Clamped" : "") + "Array", Ke = "get" + _, tt = "set" + _, _e = u[Ce], G = _e, K = G && G.prototype, te = {}, ce = function(Ae, Ee) {
                    var He = he(Ae);
                    return He.view[Ke](Ee * ge + He.byteOffset, !0);
                  }, Se = function(Ae, Ee, He) {
                    var Oe = he(Ae);
                    le && (He = (He = xe(He)) < 0 ? 0 : He > 255 ? 255 : He & 255), Oe.view[tt](Ee * ge + Oe.byteOffset, He, !0);
                  }, Me = function(Ae, Ee) {
                    Te(Ae, Ee, {
                      get: function() {
                        return ce(this, Ee);
                      },
                      set: function(He) {
                        return Se(this, Ee, He);
                      },
                      enumerable: !0
                    });
                  };
                  be ? h && (G = re(function(Ae, Ee, He, Oe) {
                    return v(Ae, G, Ce), X(function() {
                      return O(Ee) ? B(Ee) ? Oe !== void 0 ? new _e(Ee, E(He, ge), Oe) : He !== void 0 ? new _e(Ee, E(He, ge)) : new _e(Ee) : b(Ee) ? U(G, Ee) : H.call(G, Ee) : new _e(S(Ee));
                    }(), Ae, G);
                  }), N && N(G, M), V(j(_e), function(Ae) {
                    Ae in G || g(G, Ae, _e[Ae]);
                  }), G.prototype = K) : (G = re(function(Ae, Ee, He, Oe) {
                    v(Ae, G, Ce);
                    var we = 0, Re = 0, Be, ke, at;
                    if (!O(Ee))
                      at = S(Ee), ke = at * ge, Be = new Ne(ke);
                    else if (B(Ee)) {
                      Be = Ee, Re = E(He, ge);
                      var zt = Ee.byteLength;
                      if (Oe === void 0) {
                        if (zt % ge || (ke = zt - Re, ke < 0)) throw je(I);
                      } else if (ke = y(Oe) * ge, ke + Re > zt) throw je(I);
                      at = ke / ge;
                    } else return b(Ee) ? U(G, Ee) : H.call(G, Ee);
                    for (fe(Ae, {
                      buffer: Be,
                      byteOffset: Re,
                      byteLength: ke,
                      length: at,
                      view: new Le(Be)
                    }); we < at; ) Me(Ae, we++);
                  }), N && N(G, M), K = G.prototype = D(T)), K.constructor !== G && g(K, "constructor", G), R && g(K, R, Ce), te[Ce] = G, s({
                    global: !0,
                    forced: G != _e,
                    sham: !be
                  }, te), x in G || g(G, x, ge), x in K || g(K, x, ge), z(Ce);
                }) : n.exports = function() {
                };
              }
            ),
            /***/
            3832: (
              /***/
              function(n, l, o) {
                var s = o(7854), u = o(7293), d = o(7072), h = o(260).NATIVE_ARRAY_BUFFER_VIEWS, p = s.ArrayBuffer, f = s.Int8Array;
                n.exports = !h || !u(function() {
                  f(1);
                }) || !u(function() {
                  new f(-1);
                }) || !d(function(v) {
                  new f(), new f(null), new f(1.5), new f(v);
                }, !0) || u(function() {
                  return new f(new p(2), 1, void 0).length !== 1;
                });
              }
            ),
            /***/
            3074: (
              /***/
              function(n, l, o) {
                var s = o(260).aTypedArrayConstructor, u = o(6707);
                n.exports = function(d, h) {
                  for (var p = u(d, d.constructor), f = 0, v = h.length, m = new (s(p))(v); v > f; ) m[f] = h[f++];
                  return m;
                };
              }
            ),
            /***/
            7321: (
              /***/
              function(n, l, o) {
                var s = o(7908), u = o(7466), d = o(1246), h = o(7659), p = o(9974), f = o(260).aTypedArrayConstructor;
                n.exports = function(m) {
                  var g = s(m), y = arguments.length, S = y > 1 ? arguments[1] : void 0, E = S !== void 0, A = d(g), w, P, O, D, N, j;
                  if (A != null && !h(A))
                    for (N = A.call(g), j = N.next, g = []; !(D = j.call(N)).done; )
                      g.push(D.value);
                  for (E && y > 2 && (S = p(S, arguments[2], 2)), P = u(g.length), O = new (f(this))(P), w = 0; P > w; w++)
                    O[w] = E ? S(g[w], w) : g[w];
                  return O;
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
                var s = o(7854), u = o(2309), d = o(6656), h = o(9711), p = o(133), f = o(3307), v = u("wks"), m = s.Symbol, g = f ? m : m && m.withoutSetter || h;
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
              function(n, l, o) {
                var s = o(2109), u = o(7854), d = o(3331), h = o(6340), p = "ArrayBuffer", f = d[p], v = u[p];
                s({ global: !0, forced: v !== f }, {
                  ArrayBuffer: f
                }), h(p);
              }
            ),
            /***/
            2222: (
              /***/
              function(n, l, o) {
                var s = o(2109), u = o(7293), d = o(3157), h = o(111), p = o(7908), f = o(7466), v = o(6135), m = o(5417), g = o(1194), y = o(5112), S = o(7392), E = y("isConcatSpreadable"), A = 9007199254740991, w = "Maximum allowed index exceeded", P = S >= 51 || !u(function() {
                  var j = [];
                  return j[E] = !1, j.concat()[0] !== j;
                }), O = g("concat"), D = function(j) {
                  if (!h(j)) return !1;
                  var H = j[E];
                  return H !== void 0 ? !!H : d(j);
                }, N = !P || !O;
                s({ target: "Array", proto: !0, forced: N }, {
                  // eslint-disable-next-line no-unused-vars -- required for `.length`
                  concat: function(H) {
                    var V = p(this), z = m(V, 0), Y = 0, W, ae, X, he, fe;
                    for (W = -1, X = arguments.length; W < X; W++)
                      if (fe = W === -1 ? V : arguments[W], D(fe)) {
                        if (he = f(fe.length), Y + he > A) throw TypeError(w);
                        for (ae = 0; ae < he; ae++, Y++) ae in fe && v(z, Y, fe[ae]);
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
              function(n, l, o) {
                var s = o(2109), u = o(2092).filter, d = o(1194), h = d("filter");
                s({ target: "Array", proto: !0, forced: !h }, {
                  filter: function(f) {
                    return u(this, f, arguments.length > 1 ? arguments[1] : void 0);
                  }
                });
              }
            ),
            /***/
            2772: (
              /***/
              function(n, l, o) {
                var s = o(2109), u = o(1318).indexOf, d = o(9341), h = [].indexOf, p = !!h && 1 / [1].indexOf(1, -0) < 0, f = d("indexOf");
                s({ target: "Array", proto: !0, forced: p || !f }, {
                  indexOf: function(m) {
                    return p ? h.apply(this, arguments) || 0 : u(this, m, arguments.length > 1 ? arguments[1] : void 0);
                  }
                });
              }
            ),
            /***/
            6992: (
              /***/
              function(n, l, o) {
                var s = o(5656), u = o(1223), d = o(7497), h = o(9909), p = o(654), f = "Array Iterator", v = h.set, m = h.getterFor(f);
                n.exports = p(Array, "Array", function(g, y) {
                  v(this, {
                    type: f,
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
                }, "values"), d.Arguments = d.Array, u("keys"), u("values"), u("entries");
              }
            ),
            /***/
            1249: (
              /***/
              function(n, l, o) {
                var s = o(2109), u = o(2092).map, d = o(1194), h = d("map");
                s({ target: "Array", proto: !0, forced: !h }, {
                  map: function(f) {
                    return u(this, f, arguments.length > 1 ? arguments[1] : void 0);
                  }
                });
              }
            ),
            /***/
            7042: (
              /***/
              function(n, l, o) {
                var s = o(2109), u = o(111), d = o(3157), h = o(1400), p = o(7466), f = o(5656), v = o(6135), m = o(5112), g = o(1194), y = g("slice"), S = m("species"), E = [].slice, A = Math.max;
                s({ target: "Array", proto: !0, forced: !y }, {
                  slice: function(P, O) {
                    var D = f(this), N = p(D.length), j = h(P, N), H = h(O === void 0 ? N : O, N), V, z, Y;
                    if (d(D) && (V = D.constructor, typeof V == "function" && (V === Array || d(V.prototype)) ? V = void 0 : u(V) && (V = V[S], V === null && (V = void 0)), V === Array || V === void 0))
                      return E.call(D, j, H);
                    for (z = new (V === void 0 ? Array : V)(A(H - j, 0)), Y = 0; j < H; j++, Y++) j in D && v(z, Y, D[j]);
                    return z.length = Y, z;
                  }
                });
              }
            ),
            /***/
            561: (
              /***/
              function(n, l, o) {
                var s = o(2109), u = o(1400), d = o(9958), h = o(7466), p = o(7908), f = o(5417), v = o(6135), m = o(1194), g = m("splice"), y = Math.max, S = Math.min, E = 9007199254740991, A = "Maximum allowed length exceeded";
                s({ target: "Array", proto: !0, forced: !g }, {
                  splice: function(P, O) {
                    var D = p(this), N = h(D.length), j = u(P, N), H = arguments.length, V, z, Y, W, ae, X;
                    if (H === 0 ? V = z = 0 : H === 1 ? (V = 0, z = N - j) : (V = H - 2, z = S(y(d(O), 0), N - j)), N + V - z > E)
                      throw TypeError(A);
                    for (Y = f(D, z), W = 0; W < z; W++)
                      ae = j + W, ae in D && v(Y, W, D[ae]);
                    if (Y.length = z, V < z) {
                      for (W = j; W < N - z; W++)
                        ae = W + z, X = W + V, ae in D ? D[X] = D[ae] : delete D[X];
                      for (W = N; W > N - z + V; W--) delete D[W - 1];
                    } else if (V > z)
                      for (W = N - z; W > j; W--)
                        ae = W + z - 1, X = W + V - 1, ae in D ? D[X] = D[ae] : delete D[X];
                    for (W = 0; W < V; W++)
                      D[W + j] = arguments[W + 2];
                    return D.length = N - z + V, Y;
                  }
                });
              }
            ),
            /***/
            8309: (
              /***/
              function(n, l, o) {
                var s = o(9781), u = o(3070).f, d = Function.prototype, h = d.toString, p = /^\s*function ([^ (]*)/, f = "name";
                s && !(f in d) && u(d, f, {
                  configurable: !0,
                  get: function() {
                    try {
                      return h.call(this).match(p)[1];
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
                var s = o(2109), u = o(7293), d = o(7908), h = o(9518), p = o(8544), f = u(function() {
                  h(1);
                });
                s({ target: "Object", stat: !0, forced: f, sham: !p }, {
                  getPrototypeOf: function(m) {
                    return h(d(m));
                  }
                });
              }
            ),
            /***/
            1539: (
              /***/
              function(n, l, o) {
                var s = o(1694), u = o(1320), d = o(288);
                s || u(Object.prototype, "toString", d, { unsafe: !0 });
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
                var s = o(1320), u = o(9670), d = o(7293), h = o(7066), p = "toString", f = RegExp.prototype, v = f[p], m = d(function() {
                  return v.call({ source: "a", flags: "b" }) != "/a/b";
                }), g = v.name != p;
                (m || g) && s(RegExp.prototype, p, function() {
                  var S = u(this), E = String(S.source), A = S.flags, w = String(A === void 0 && S instanceof RegExp && !("flags" in f) ? h.call(S) : A);
                  return "/" + E + "/" + w;
                }, { unsafe: !0 });
              }
            ),
            /***/
            8783: (
              /***/
              function(n, l, o) {
                var s = o(8710).charAt, u = o(9909), d = o(654), h = "String Iterator", p = u.set, f = u.getterFor(h);
                d(String, "String", function(v) {
                  p(this, {
                    type: h,
                    string: String(v),
                    index: 0
                  });
                }, function() {
                  var m = f(this), g = m.string, y = m.index, S;
                  return y >= g.length ? { value: void 0, done: !0 } : (S = s(g, y), m.index += S.length, { value: S, done: !1 });
                });
              }
            ),
            /***/
            4723: (
              /***/
              function(n, l, o) {
                var s = o(7007), u = o(9670), d = o(7466), h = o(4488), p = o(1530), f = o(7651);
                s("match", 1, function(v, m, g) {
                  return [
                    // `String.prototype.match` method
                    // https://tc39.es/ecma262/#sec-string.prototype.match
                    function(S) {
                      var E = h(this), A = S == null ? void 0 : S[v];
                      return A !== void 0 ? A.call(S, E) : new RegExp(S)[v](String(E));
                    },
                    // `RegExp.prototype[@@match]` method
                    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
                    function(y) {
                      var S = g(m, y, this);
                      if (S.done) return S.value;
                      var E = u(y), A = String(this);
                      if (!E.global) return f(E, A);
                      var w = E.unicode;
                      E.lastIndex = 0;
                      for (var P = [], O = 0, D; (D = f(E, A)) !== null; ) {
                        var N = String(D[0]);
                        P[O] = N, N === "" && (E.lastIndex = p(A, d(E.lastIndex), w)), O++;
                      }
                      return O === 0 ? null : P;
                    }
                  ];
                });
              }
            ),
            /***/
            5306: (
              /***/
              function(n, l, o) {
                var s = o(7007), u = o(9670), d = o(7466), h = o(9958), p = o(4488), f = o(1530), v = o(647), m = o(7651), g = Math.max, y = Math.min, S = function(E) {
                  return E === void 0 ? E : String(E);
                };
                s("replace", 2, function(E, A, w, P) {
                  var O = P.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE, D = P.REPLACE_KEEPS_$0, N = O ? "$" : "$0";
                  return [
                    // `String.prototype.replace` method
                    // https://tc39.es/ecma262/#sec-string.prototype.replace
                    function(H, V) {
                      var z = p(this), Y = H == null ? void 0 : H[E];
                      return Y !== void 0 ? Y.call(H, z, V) : A.call(String(z), H, V);
                    },
                    // `RegExp.prototype[@@replace]` method
                    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
                    function(j, H) {
                      if (!O && D || typeof H == "string" && H.indexOf(N) === -1) {
                        var V = w(A, j, this, H);
                        if (V.done) return V.value;
                      }
                      var z = u(j), Y = String(this), W = typeof H == "function";
                      W || (H = String(H));
                      var ae = z.global;
                      if (ae) {
                        var X = z.unicode;
                        z.lastIndex = 0;
                      }
                      for (var he = []; ; ) {
                        var fe = m(z, Y);
                        if (fe === null || (he.push(fe), !ae)) break;
                        var Te = String(fe[0]);
                        Te === "" && (z.lastIndex = f(Y, d(z.lastIndex), X));
                      }
                      for (var Ie = "", xe = 0, je = 0; je < he.length; je++) {
                        fe = he[je];
                        for (var Ne = String(fe[0]), Le = g(y(h(fe.index), Y.length), 0), be = [], R = 1; R < fe.length; R++) be.push(S(fe[R]));
                        var M = fe.groups;
                        if (W) {
                          var T = [Ne].concat(be, Le, Y);
                          M !== void 0 && T.push(M);
                          var L = String(H.apply(void 0, T));
                        } else
                          L = v(Ne, Y, Le, be, M, H);
                        Le >= xe && (Ie += Y.slice(xe, Le) + L, xe = Le + Ne.length);
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
                var s = o(7007), u = o(7850), d = o(9670), h = o(4488), p = o(6707), f = o(1530), v = o(7466), m = o(7651), g = o(2261), y = o(7293), S = [].push, E = Math.min, A = 4294967295, w = !y(function() {
                  return !RegExp(A, "y");
                });
                s("split", 2, function(P, O, D) {
                  var N;
                  return "abbc".split(/(b)*/)[1] == "c" || // eslint-disable-next-line regexp/no-empty-group -- required for testing
                  "test".split(/(?:)/, -1).length != 4 || "ab".split(/(?:ab)*/).length != 2 || ".".split(/(.?)(.?)/).length != 4 || // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
                  ".".split(/()()/).length > 1 || "".split(/.?/).length ? N = function(j, H) {
                    var V = String(h(this)), z = H === void 0 ? A : H >>> 0;
                    if (z === 0) return [];
                    if (j === void 0) return [V];
                    if (!u(j))
                      return O.call(V, j, z);
                    for (var Y = [], W = (j.ignoreCase ? "i" : "") + (j.multiline ? "m" : "") + (j.unicode ? "u" : "") + (j.sticky ? "y" : ""), ae = 0, X = new RegExp(j.source, W + "g"), he, fe, Te; (he = g.call(X, V)) && (fe = X.lastIndex, !(fe > ae && (Y.push(V.slice(ae, he.index)), he.length > 1 && he.index < V.length && S.apply(Y, he.slice(1)), Te = he[0].length, ae = fe, Y.length >= z))); )
                      X.lastIndex === he.index && X.lastIndex++;
                    return ae === V.length ? (Te || !X.test("")) && Y.push("") : Y.push(V.slice(ae)), Y.length > z ? Y.slice(0, z) : Y;
                  } : "0".split(void 0, 0).length ? N = function(j, H) {
                    return j === void 0 && H === 0 ? [] : O.call(this, j, H);
                  } : N = O, [
                    // `String.prototype.split` method
                    // https://tc39.es/ecma262/#sec-string.prototype.split
                    function(H, V) {
                      var z = h(this), Y = H == null ? void 0 : H[P];
                      return Y !== void 0 ? Y.call(H, z, V) : N.call(String(z), H, V);
                    },
                    // `RegExp.prototype[@@split]` method
                    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
                    //
                    // NOTE: This cannot be properly polyfilled in engines that don't support
                    // the 'y' flag.
                    function(j, H) {
                      var V = D(N, j, this, H, N !== O);
                      if (V.done) return V.value;
                      var z = d(j), Y = String(this), W = p(z, RegExp), ae = z.unicode, X = (z.ignoreCase ? "i" : "") + (z.multiline ? "m" : "") + (z.unicode ? "u" : "") + (w ? "y" : "g"), he = new W(w ? z : "^(?:" + z.source + ")", X), fe = H === void 0 ? A : H >>> 0;
                      if (fe === 0) return [];
                      if (Y.length === 0) return m(he, Y) === null ? [Y] : [];
                      for (var Te = 0, Ie = 0, xe = []; Ie < Y.length; ) {
                        he.lastIndex = w ? Ie : 0;
                        var je = m(he, w ? Y : Y.slice(Ie)), Ne;
                        if (je === null || (Ne = E(v(he.lastIndex + (w ? 0 : Ie)), Y.length)) === Te)
                          Ie = f(Y, Ie, ae);
                        else {
                          if (xe.push(Y.slice(Te, Ie)), xe.length === fe) return xe;
                          for (var Le = 1; Le <= je.length - 1; Le++)
                            if (xe.push(je[Le]), xe.length === fe) return xe;
                          Ie = Te = Ne;
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
              function(n, l, o) {
                var s = o(2109), u = o(3111).trim, d = o(6091);
                s({ target: "String", proto: !0, forced: d("trim") }, {
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
                var s = o(260), u = o(1048), d = s.aTypedArray, h = s.exportTypedArrayMethod;
                h("copyWithin", function(f, v) {
                  return u.call(d(this), f, v, arguments.length > 2 ? arguments[2] : void 0);
                });
              }
            ),
            /***/
            8927: (
              /***/
              function(n, l, o) {
                var s = o(260), u = o(2092).every, d = s.aTypedArray, h = s.exportTypedArrayMethod;
                h("every", function(f) {
                  return u(d(this), f, arguments.length > 1 ? arguments[1] : void 0);
                });
              }
            ),
            /***/
            3105: (
              /***/
              function(n, l, o) {
                var s = o(260), u = o(1285), d = s.aTypedArray, h = s.exportTypedArrayMethod;
                h("fill", function(f) {
                  return u.apply(d(this), arguments);
                });
              }
            ),
            /***/
            5035: (
              /***/
              function(n, l, o) {
                var s = o(260), u = o(2092).filter, d = o(3074), h = s.aTypedArray, p = s.exportTypedArrayMethod;
                p("filter", function(v) {
                  var m = u(h(this), v, arguments.length > 1 ? arguments[1] : void 0);
                  return d(this, m);
                });
              }
            ),
            /***/
            7174: (
              /***/
              function(n, l, o) {
                var s = o(260), u = o(2092).findIndex, d = s.aTypedArray, h = s.exportTypedArrayMethod;
                h("findIndex", function(f) {
                  return u(d(this), f, arguments.length > 1 ? arguments[1] : void 0);
                });
              }
            ),
            /***/
            4345: (
              /***/
              function(n, l, o) {
                var s = o(260), u = o(2092).find, d = s.aTypedArray, h = s.exportTypedArrayMethod;
                h("find", function(f) {
                  return u(d(this), f, arguments.length > 1 ? arguments[1] : void 0);
                });
              }
            ),
            /***/
            2846: (
              /***/
              function(n, l, o) {
                var s = o(260), u = o(2092).forEach, d = s.aTypedArray, h = s.exportTypedArrayMethod;
                h("forEach", function(f) {
                  u(d(this), f, arguments.length > 1 ? arguments[1] : void 0);
                });
              }
            ),
            /***/
            4731: (
              /***/
              function(n, l, o) {
                var s = o(260), u = o(1318).includes, d = s.aTypedArray, h = s.exportTypedArrayMethod;
                h("includes", function(f) {
                  return u(d(this), f, arguments.length > 1 ? arguments[1] : void 0);
                });
              }
            ),
            /***/
            7209: (
              /***/
              function(n, l, o) {
                var s = o(260), u = o(1318).indexOf, d = s.aTypedArray, h = s.exportTypedArrayMethod;
                h("indexOf", function(f) {
                  return u(d(this), f, arguments.length > 1 ? arguments[1] : void 0);
                });
              }
            ),
            /***/
            6319: (
              /***/
              function(n, l, o) {
                var s = o(7854), u = o(260), d = o(6992), h = o(5112), p = h("iterator"), f = s.Uint8Array, v = d.values, m = d.keys, g = d.entries, y = u.aTypedArray, S = u.exportTypedArrayMethod, E = f && f.prototype[p], A = !!E && (E.name == "values" || E.name == null), w = function() {
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
              function(n, l, o) {
                var s = o(260), u = s.aTypedArray, d = s.exportTypedArrayMethod, h = [].join;
                d("join", function(f) {
                  return h.apply(u(this), arguments);
                });
              }
            ),
            /***/
            7789: (
              /***/
              function(n, l, o) {
                var s = o(260), u = o(6583), d = s.aTypedArray, h = s.exportTypedArrayMethod;
                h("lastIndexOf", function(f) {
                  return u.apply(d(this), arguments);
                });
              }
            ),
            /***/
            3739: (
              /***/
              function(n, l, o) {
                var s = o(260), u = o(2092).map, d = o(6707), h = s.aTypedArray, p = s.aTypedArrayConstructor, f = s.exportTypedArrayMethod;
                f("map", function(m) {
                  return u(h(this), m, arguments.length > 1 ? arguments[1] : void 0, function(g, y) {
                    return new (p(d(g, g.constructor)))(y);
                  });
                });
              }
            ),
            /***/
            4483: (
              /***/
              function(n, l, o) {
                var s = o(260), u = o(3671).right, d = s.aTypedArray, h = s.exportTypedArrayMethod;
                h("reduceRight", function(f) {
                  return u(d(this), f, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
                });
              }
            ),
            /***/
            9368: (
              /***/
              function(n, l, o) {
                var s = o(260), u = o(3671).left, d = s.aTypedArray, h = s.exportTypedArrayMethod;
                h("reduce", function(f) {
                  return u(d(this), f, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
                });
              }
            ),
            /***/
            2056: (
              /***/
              function(n, l, o) {
                var s = o(260), u = s.aTypedArray, d = s.exportTypedArrayMethod, h = Math.floor;
                d("reverse", function() {
                  for (var f = this, v = u(f).length, m = h(v / 2), g = 0, y; g < m; )
                    y = f[g], f[g++] = f[--v], f[v] = y;
                  return f;
                });
              }
            ),
            /***/
            3462: (
              /***/
              function(n, l, o) {
                var s = o(260), u = o(7466), d = o(4590), h = o(7908), p = o(7293), f = s.aTypedArray, v = s.exportTypedArrayMethod, m = p(function() {
                  new Int8Array(1).set({});
                });
                v("set", function(y) {
                  f(this);
                  var S = d(arguments.length > 1 ? arguments[1] : void 0, 1), E = this.length, A = h(y), w = u(A.length), P = 0;
                  if (w + S > E) throw RangeError("Wrong length");
                  for (; P < w; ) this[S + P] = A[P++];
                }, m);
              }
            ),
            /***/
            678: (
              /***/
              function(n, l, o) {
                var s = o(260), u = o(6707), d = o(7293), h = s.aTypedArray, p = s.aTypedArrayConstructor, f = s.exportTypedArrayMethod, v = [].slice, m = d(function() {
                  new Int8Array(1).slice();
                });
                f("slice", function(y, S) {
                  for (var E = v.call(h(this), y, S), A = u(this, this.constructor), w = 0, P = E.length, O = new (p(A))(P); P > w; ) O[w] = E[w++];
                  return O;
                }, m);
              }
            ),
            /***/
            7462: (
              /***/
              function(n, l, o) {
                var s = o(260), u = o(2092).some, d = s.aTypedArray, h = s.exportTypedArrayMethod;
                h("some", function(f) {
                  return u(d(this), f, arguments.length > 1 ? arguments[1] : void 0);
                });
              }
            ),
            /***/
            3824: (
              /***/
              function(n, l, o) {
                var s = o(260), u = s.aTypedArray, d = s.exportTypedArrayMethod, h = [].sort;
                d("sort", function(f) {
                  return h.call(u(this), f);
                });
              }
            ),
            /***/
            5021: (
              /***/
              function(n, l, o) {
                var s = o(260), u = o(7466), d = o(1400), h = o(6707), p = s.aTypedArray, f = s.exportTypedArrayMethod;
                f("subarray", function(m, g) {
                  var y = p(this), S = y.length, E = d(m, S);
                  return new (h(y, y.constructor))(
                    y.buffer,
                    y.byteOffset + E * y.BYTES_PER_ELEMENT,
                    u((g === void 0 ? S : d(g, S)) - E)
                  );
                });
              }
            ),
            /***/
            2974: (
              /***/
              function(n, l, o) {
                var s = o(7854), u = o(260), d = o(7293), h = s.Int8Array, p = u.aTypedArray, f = u.exportTypedArrayMethod, v = [].toLocaleString, m = [].slice, g = !!h && d(function() {
                  v.call(new h(1));
                }), y = d(function() {
                  return [1, 2].toLocaleString() != new h([1, 2]).toLocaleString();
                }) || !d(function() {
                  h.prototype.toLocaleString.call([1, 2]);
                });
                f("toLocaleString", function() {
                  return v.apply(g ? m.call(p(this)) : p(this), arguments);
                }, y);
              }
            ),
            /***/
            5016: (
              /***/
              function(n, l, o) {
                var s = o(260).exportTypedArrayMethod, u = o(7293), d = o(7854), h = d.Uint8Array, p = h && h.prototype || {}, f = [].toString, v = [].join;
                u(function() {
                  f.call({});
                }) && (f = function() {
                  return v.call(this);
                });
                var m = p.toString != f;
                s("toString", f, m);
              }
            ),
            /***/
            2472: (
              /***/
              function(n, l, o) {
                var s = o(9843);
                s("Uint8", function(u) {
                  return function(h, p, f) {
                    return u(this, h, p, f);
                  };
                });
              }
            ),
            /***/
            4747: (
              /***/
              function(n, l, o) {
                var s = o(7854), u = o(8324), d = o(8533), h = o(8880);
                for (var p in u) {
                  var f = s[p], v = f && f.prototype;
                  if (v && v.forEach !== d) try {
                    h(v, "forEach", d);
                  } catch {
                    v.forEach = d;
                  }
                }
              }
            ),
            /***/
            3948: (
              /***/
              function(n, l, o) {
                var s = o(7854), u = o(8324), d = o(6992), h = o(8880), p = o(5112), f = p("iterator"), v = p("toStringTag"), m = d.values;
                for (var g in u) {
                  var y = s[g], S = y && y.prototype;
                  if (S) {
                    if (S[f] !== m) try {
                      h(S, f, m);
                    } catch {
                      S[f] = m;
                    }
                    if (S[v] || h(S, v, g), u[g]) {
                      for (var E in d)
                        if (S[E] !== d[E]) try {
                          h(S, E, d[E]);
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
              function(n, l, o) {
                o(6992);
                var s = o(2109), u = o(5005), d = o(590), h = o(1320), p = o(2248), f = o(8003), v = o(4994), m = o(9909), g = o(5787), y = o(6656), S = o(9974), E = o(648), A = o(9670), w = o(111), P = o(30), O = o(9114), D = o(8554), N = o(1246), j = o(5112), H = u("fetch"), V = u("Headers"), z = j("iterator"), Y = "URLSearchParams", W = Y + "Iterator", ae = m.set, X = m.getterFor(Y), he = m.getterFor(W), fe = /\+/g, Te = Array(4), Ie = function(U) {
                  return Te[U - 1] || (Te[U - 1] = RegExp("((?:%[\\da-f]{2}){" + U + "})", "gi"));
                }, xe = function(U) {
                  try {
                    return decodeURIComponent(U);
                  } catch {
                    return U;
                  }
                }, je = function(U) {
                  var $ = U.replace(fe, " "), B = 4;
                  try {
                    return decodeURIComponent($);
                  } catch {
                    for (; B; )
                      $ = $.replace(Ie(B--), xe);
                    return $;
                  }
                }, Ne = /[!'()~]|%20/g, Le = {
                  "!": "%21",
                  "'": "%27",
                  "(": "%28",
                  ")": "%29",
                  "~": "%7E",
                  "%20": "+"
                }, be = function(U) {
                  return Le[U];
                }, R = function(U) {
                  return encodeURIComponent(U).replace(Ne, be);
                }, M = function(U, $) {
                  if ($)
                    for (var B = $.split("&"), Q = 0, q, J; Q < B.length; )
                      q = B[Q++], q.length && (J = q.split("="), U.push({
                        key: je(J.shift()),
                        value: je(J.join("="))
                      }));
                }, T = function(U) {
                  this.entries.length = 0, M(this.entries, U);
                }, L = function(U, $) {
                  if (U < $) throw TypeError("Not enough arguments");
                }, b = v(function($, B) {
                  ae(this, {
                    type: W,
                    iterator: D(X($).entries),
                    kind: B
                  });
                }, "Iterator", function() {
                  var $ = he(this), B = $.kind, Q = $.iterator.next(), q = Q.value;
                  return Q.done || (Q.value = B === "keys" ? q.key : B === "values" ? q.value : [q.key, q.value]), Q;
                }), x = function() {
                  g(this, x, Y);
                  var $ = arguments.length > 0 ? arguments[0] : void 0, B = this, Q = [], q, J, _, re, le, ge, Ce, Ke, tt;
                  if (ae(B, {
                    type: Y,
                    entries: Q,
                    updateURL: function() {
                    },
                    updateSearchParams: T
                  }), $ !== void 0)
                    if (w($))
                      if (q = N($), typeof q == "function")
                        for (J = q.call($), _ = J.next; !(re = _.call(J)).done; ) {
                          if (le = D(A(re.value)), ge = le.next, (Ce = ge.call(le)).done || (Ke = ge.call(le)).done || !ge.call(le).done) throw TypeError("Expected sequence with length 2");
                          Q.push({ key: Ce.value + "", value: Ke.value + "" });
                        }
                      else for (tt in $) y($, tt) && Q.push({ key: tt, value: $[tt] + "" });
                    else
                      M(Q, typeof $ == "string" ? $.charAt(0) === "?" ? $.slice(1) : $ : $ + "");
                }, I = x.prototype;
                p(I, {
                  // `URLSearchParams.prototype.append` method
                  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
                  append: function($, B) {
                    L(arguments.length, 2);
                    var Q = X(this);
                    Q.entries.push({ key: $ + "", value: B + "" }), Q.updateURL();
                  },
                  // `URLSearchParams.prototype.delete` method
                  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
                  delete: function(U) {
                    L(arguments.length, 1);
                    for (var $ = X(this), B = $.entries, Q = U + "", q = 0; q < B.length; )
                      B[q].key === Q ? B.splice(q, 1) : q++;
                    $.updateURL();
                  },
                  // `URLSearchParams.prototype.get` method
                  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
                  get: function($) {
                    L(arguments.length, 1);
                    for (var B = X(this).entries, Q = $ + "", q = 0; q < B.length; q++)
                      if (B[q].key === Q) return B[q].value;
                    return null;
                  },
                  // `URLSearchParams.prototype.getAll` method
                  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
                  getAll: function($) {
                    L(arguments.length, 1);
                    for (var B = X(this).entries, Q = $ + "", q = [], J = 0; J < B.length; J++)
                      B[J].key === Q && q.push(B[J].value);
                    return q;
                  },
                  // `URLSearchParams.prototype.has` method
                  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
                  has: function($) {
                    L(arguments.length, 1);
                    for (var B = X(this).entries, Q = $ + "", q = 0; q < B.length; )
                      if (B[q++].key === Q) return !0;
                    return !1;
                  },
                  // `URLSearchParams.prototype.set` method
                  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
                  set: function($, B) {
                    L(arguments.length, 1);
                    for (var Q = X(this), q = Q.entries, J = !1, _ = $ + "", re = B + "", le = 0, ge; le < q.length; le++)
                      ge = q[le], ge.key === _ && (J ? q.splice(le--, 1) : (J = !0, ge.value = re));
                    J || q.push({ key: _, value: re }), Q.updateURL();
                  },
                  // `URLSearchParams.prototype.sort` method
                  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
                  sort: function() {
                    var $ = X(this), B = $.entries, Q = B.slice(), q, J, _;
                    for (B.length = 0, _ = 0; _ < Q.length; _++) {
                      for (q = Q[_], J = 0; J < _; J++)
                        if (B[J].key > q.key) {
                          B.splice(J, 0, q);
                          break;
                        }
                      J === _ && B.push(q);
                    }
                    $.updateURL();
                  },
                  // `URLSearchParams.prototype.forEach` method
                  forEach: function($) {
                    for (var B = X(this).entries, Q = S($, arguments.length > 1 ? arguments[1] : void 0, 3), q = 0, J; q < B.length; )
                      J = B[q++], Q(J.value, J.key, this);
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
                }, { enumerable: !0 }), h(I, z, I.entries), h(I, "toString", function() {
                  for (var $ = X(this).entries, B = [], Q = 0, q; Q < $.length; )
                    q = $[Q++], B.push(R(q.key) + "=" + R(q.value));
                  return B.join("&");
                }, { enumerable: !0 }), f(x, Y), s({ global: !0, forced: !d }, {
                  URLSearchParams: x
                }), !d && typeof H == "function" && typeof V == "function" && s({ global: !0, enumerable: !0, forced: !0 }, {
                  fetch: function($) {
                    var B = [$], Q, q, J;
                    return arguments.length > 1 && (Q = arguments[1], w(Q) && (q = Q.body, E(q) === Y && (J = Q.headers ? new V(Q.headers) : new V(), J.has("content-type") || J.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"), Q = P(Q, {
                      body: O(0, String(q)),
                      headers: O(0, J)
                    }))), B.push(Q)), H.apply(this, B);
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
                var s = o(2109), u = o(9781), d = o(590), h = o(7854), p = o(6048), f = o(1320), v = o(5787), m = o(6656), g = o(1574), y = o(8457), S = o(8710).codeAt, E = o(3197), A = o(8003), w = o(1637), P = o(9909), O = h.URL, D = w.URLSearchParams, N = w.getState, j = P.set, H = P.getterFor("URL"), V = Math.floor, z = Math.pow, Y = "Invalid authority", W = "Invalid scheme", ae = "Invalid host", X = "Invalid port", he = /[A-Za-z]/, fe = /[\d+-.A-Za-z]/, Te = /\d/, Ie = /^(0x|0X)/, xe = /^[0-7]+$/, je = /^\d+$/, Ne = /^[\dA-Fa-f]+$/, Le = /[\u0000\t\u000A\u000D #%/:?@[\\]]/, be = /[\u0000\t\u000A\u000D #/:?@[\\]]/, R = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g, M = /[\t\u000A\u000D]/g, T, L = function(F, ue) {
                  var se, pe, me;
                  if (ue.charAt(0) == "[") {
                    if (ue.charAt(ue.length - 1) != "]" || (se = x(ue.slice(1, -1)), !se)) return ae;
                    F.host = se;
                  } else if (re(F)) {
                    if (ue = E(ue), Le.test(ue) || (se = b(ue), se === null)) return ae;
                    F.host = se;
                  } else {
                    if (be.test(ue)) return ae;
                    for (se = "", pe = y(ue), me = 0; me < pe.length; me++)
                      se += J(pe[me], $);
                    F.host = se;
                  }
                }, b = function(F) {
                  var ue = F.split("."), se, pe, me, ze, Pe, Qe, st;
                  if (ue.length && ue[ue.length - 1] == "" && ue.pop(), se = ue.length, se > 4) return F;
                  for (pe = [], me = 0; me < se; me++) {
                    if (ze = ue[me], ze == "") return F;
                    if (Pe = 10, ze.length > 1 && ze.charAt(0) == "0" && (Pe = Ie.test(ze) ? 16 : 8, ze = ze.slice(Pe == 8 ? 1 : 2)), ze === "")
                      Qe = 0;
                    else {
                      if (!(Pe == 10 ? je : Pe == 8 ? xe : Ne).test(ze)) return F;
                      Qe = parseInt(ze, Pe);
                    }
                    pe.push(Qe);
                  }
                  for (me = 0; me < se; me++)
                    if (Qe = pe[me], me == se - 1) {
                      if (Qe >= z(256, 5 - se)) return null;
                    } else if (Qe > 255) return null;
                  for (st = pe.pop(), me = 0; me < pe.length; me++)
                    st += pe[me] * z(256, 3 - me);
                  return st;
                }, x = function(F) {
                  var ue = [0, 0, 0, 0, 0, 0, 0, 0], se = 0, pe = null, me = 0, ze, Pe, Qe, st, lt, Ft, ve, mt = function() {
                    return F.charAt(me);
                  };
                  if (mt() == ":") {
                    if (F.charAt(1) != ":") return;
                    me += 2, se++, pe = se;
                  }
                  for (; mt(); ) {
                    if (se == 8) return;
                    if (mt() == ":") {
                      if (pe !== null) return;
                      me++, se++, pe = se;
                      continue;
                    }
                    for (ze = Pe = 0; Pe < 4 && Ne.test(mt()); )
                      ze = ze * 16 + parseInt(mt(), 16), me++, Pe++;
                    if (mt() == ".") {
                      if (Pe == 0 || (me -= Pe, se > 6)) return;
                      for (Qe = 0; mt(); ) {
                        if (st = null, Qe > 0)
                          if (mt() == "." && Qe < 4) me++;
                          else return;
                        if (!Te.test(mt())) return;
                        for (; Te.test(mt()); ) {
                          if (lt = parseInt(mt(), 10), st === null) st = lt;
                          else {
                            if (st == 0) return;
                            st = st * 10 + lt;
                          }
                          if (st > 255) return;
                          me++;
                        }
                        ue[se] = ue[se] * 256 + st, Qe++, (Qe == 2 || Qe == 4) && se++;
                      }
                      if (Qe != 4) return;
                      break;
                    } else if (mt() == ":") {
                      if (me++, !mt()) return;
                    } else if (mt()) return;
                    ue[se++] = ze;
                  }
                  if (pe !== null)
                    for (Ft = se - pe, se = 7; se != 0 && Ft > 0; )
                      ve = ue[se], ue[se--] = ue[pe + Ft - 1], ue[pe + --Ft] = ve;
                  else if (se != 8) return;
                  return ue;
                }, I = function(F) {
                  for (var ue = null, se = 1, pe = null, me = 0, ze = 0; ze < 8; ze++)
                    F[ze] !== 0 ? (me > se && (ue = pe, se = me), pe = null, me = 0) : (pe === null && (pe = ze), ++me);
                  return me > se && (ue = pe, se = me), ue;
                }, U = function(F) {
                  var ue, se, pe, me;
                  if (typeof F == "number") {
                    for (ue = [], se = 0; se < 4; se++)
                      ue.unshift(F % 256), F = V(F / 256);
                    return ue.join(".");
                  } else if (typeof F == "object") {
                    for (ue = "", pe = I(F), se = 0; se < 8; se++)
                      me && F[se] === 0 || (me && (me = !1), pe === se ? (ue += se ? ":" : "::", me = !0) : (ue += F[se].toString(16), se < 7 && (ue += ":")));
                    return "[" + ue + "]";
                  }
                  return F;
                }, $ = {}, B = g({}, $, {
                  " ": 1,
                  '"': 1,
                  "<": 1,
                  ">": 1,
                  "`": 1
                }), Q = g({}, B, {
                  "#": 1,
                  "?": 1,
                  "{": 1,
                  "}": 1
                }), q = g({}, Q, {
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
                }), J = function(F, ue) {
                  var se = S(F, 0);
                  return se > 32 && se < 127 && !m(ue, F) ? F : encodeURIComponent(F);
                }, _ = {
                  ftp: 21,
                  file: null,
                  http: 80,
                  https: 443,
                  ws: 80,
                  wss: 443
                }, re = function(F) {
                  return m(_, F.scheme);
                }, le = function(F) {
                  return F.username != "" || F.password != "";
                }, ge = function(F) {
                  return !F.host || F.cannotBeABaseURL || F.scheme == "file";
                }, Ce = function(F, ue) {
                  var se;
                  return F.length == 2 && he.test(F.charAt(0)) && ((se = F.charAt(1)) == ":" || !ue && se == "|");
                }, Ke = function(F) {
                  var ue;
                  return F.length > 1 && Ce(F.slice(0, 2)) && (F.length == 2 || (ue = F.charAt(2)) === "/" || ue === "\\" || ue === "?" || ue === "#");
                }, tt = function(F) {
                  var ue = F.path, se = ue.length;
                  se && (F.scheme != "file" || se != 1 || !Ce(ue[0], !0)) && ue.pop();
                }, _e = function(F) {
                  return F === "." || F.toLowerCase() === "%2e";
                }, G = function(F) {
                  return F = F.toLowerCase(), F === ".." || F === "%2e." || F === ".%2e" || F === "%2e%2e";
                }, K = {}, te = {}, ce = {}, Se = {}, Me = {}, Ae = {}, Ee = {}, He = {}, Oe = {}, we = {}, Re = {}, Be = {}, ke = {}, at = {}, zt = {}, Mn = {}, Vt = {}, Gt = {}, lr = {}, ln = {}, St = {}, Wt = function(F, ue, se, pe) {
                  var me = se || K, ze = 0, Pe = "", Qe = !1, st = !1, lt = !1, Ft, ve, mt, _t;
                  for (se || (F.scheme = "", F.username = "", F.password = "", F.host = null, F.port = null, F.path = [], F.query = null, F.fragment = null, F.cannotBeABaseURL = !1, ue = ue.replace(R, "")), ue = ue.replace(M, ""), Ft = y(ue); ze <= Ft.length; ) {
                    switch (ve = Ft[ze], me) {
                      case K:
                        if (ve && he.test(ve))
                          Pe += ve.toLowerCase(), me = te;
                        else {
                          if (se)
                            return W;
                          me = ce;
                          continue;
                        }
                        break;
                      case te:
                        if (ve && (fe.test(ve) || ve == "+" || ve == "-" || ve == "."))
                          Pe += ve.toLowerCase();
                        else if (ve == ":") {
                          if (se && (re(F) != m(_, Pe) || Pe == "file" && (le(F) || F.port !== null) || F.scheme == "file" && !F.host)) return;
                          if (F.scheme = Pe, se) {
                            re(F) && _[F.scheme] == F.port && (F.port = null);
                            return;
                          }
                          Pe = "", F.scheme == "file" ? me = at : re(F) && pe && pe.scheme == F.scheme ? me = Se : re(F) ? me = He : Ft[ze + 1] == "/" ? (me = Me, ze++) : (F.cannotBeABaseURL = !0, F.path.push(""), me = lr);
                        } else {
                          if (se)
                            return W;
                          Pe = "", me = ce, ze = 0;
                          continue;
                        }
                        break;
                      case ce:
                        if (!pe || pe.cannotBeABaseURL && ve != "#") return W;
                        if (pe.cannotBeABaseURL && ve == "#") {
                          F.scheme = pe.scheme, F.path = pe.path.slice(), F.query = pe.query, F.fragment = "", F.cannotBeABaseURL = !0, me = St;
                          break;
                        }
                        me = pe.scheme == "file" ? at : Ae;
                        continue;
                      case Se:
                        if (ve == "/" && Ft[ze + 1] == "/")
                          me = Oe, ze++;
                        else {
                          me = Ae;
                          continue;
                        }
                        break;
                      case Me:
                        if (ve == "/") {
                          me = we;
                          break;
                        } else {
                          me = Gt;
                          continue;
                        }
                      case Ae:
                        if (F.scheme = pe.scheme, ve == T)
                          F.username = pe.username, F.password = pe.password, F.host = pe.host, F.port = pe.port, F.path = pe.path.slice(), F.query = pe.query;
                        else if (ve == "/" || ve == "\\" && re(F))
                          me = Ee;
                        else if (ve == "?")
                          F.username = pe.username, F.password = pe.password, F.host = pe.host, F.port = pe.port, F.path = pe.path.slice(), F.query = "", me = ln;
                        else if (ve == "#")
                          F.username = pe.username, F.password = pe.password, F.host = pe.host, F.port = pe.port, F.path = pe.path.slice(), F.query = pe.query, F.fragment = "", me = St;
                        else {
                          F.username = pe.username, F.password = pe.password, F.host = pe.host, F.port = pe.port, F.path = pe.path.slice(), F.path.pop(), me = Gt;
                          continue;
                        }
                        break;
                      case Ee:
                        if (re(F) && (ve == "/" || ve == "\\"))
                          me = Oe;
                        else if (ve == "/")
                          me = we;
                        else {
                          F.username = pe.username, F.password = pe.password, F.host = pe.host, F.port = pe.port, me = Gt;
                          continue;
                        }
                        break;
                      case He:
                        if (me = Oe, ve != "/" || Pe.charAt(ze + 1) != "/") continue;
                        ze++;
                        break;
                      case Oe:
                        if (ve != "/" && ve != "\\") {
                          me = we;
                          continue;
                        }
                        break;
                      case we:
                        if (ve == "@") {
                          Qe && (Pe = "%40" + Pe), Qe = !0, mt = y(Pe);
                          for (var cr = 0; cr < mt.length; cr++) {
                            var Kr = mt[cr];
                            if (Kr == ":" && !lt) {
                              lt = !0;
                              continue;
                            }
                            var Kn = J(Kr, q);
                            lt ? F.password += Kn : F.username += Kn;
                          }
                          Pe = "";
                        } else if (ve == T || ve == "/" || ve == "?" || ve == "#" || ve == "\\" && re(F)) {
                          if (Qe && Pe == "") return Y;
                          ze -= y(Pe).length + 1, Pe = "", me = Re;
                        } else Pe += ve;
                        break;
                      case Re:
                      case Be:
                        if (se && F.scheme == "file") {
                          me = Mn;
                          continue;
                        } else if (ve == ":" && !st) {
                          if (Pe == "") return ae;
                          if (_t = L(F, Pe), _t) return _t;
                          if (Pe = "", me = ke, se == Be) return;
                        } else if (ve == T || ve == "/" || ve == "?" || ve == "#" || ve == "\\" && re(F)) {
                          if (re(F) && Pe == "") return ae;
                          if (se && Pe == "" && (le(F) || F.port !== null)) return;
                          if (_t = L(F, Pe), _t) return _t;
                          if (Pe = "", me = Vt, se) return;
                          continue;
                        } else
                          ve == "[" ? st = !0 : ve == "]" && (st = !1), Pe += ve;
                        break;
                      case ke:
                        if (Te.test(ve))
                          Pe += ve;
                        else if (ve == T || ve == "/" || ve == "?" || ve == "#" || ve == "\\" && re(F) || se) {
                          if (Pe != "") {
                            var dr = parseInt(Pe, 10);
                            if (dr > 65535) return X;
                            F.port = re(F) && dr === _[F.scheme] ? null : dr, Pe = "";
                          }
                          if (se) return;
                          me = Vt;
                          continue;
                        } else return X;
                        break;
                      case at:
                        if (F.scheme = "file", ve == "/" || ve == "\\") me = zt;
                        else if (pe && pe.scheme == "file")
                          if (ve == T)
                            F.host = pe.host, F.path = pe.path.slice(), F.query = pe.query;
                          else if (ve == "?")
                            F.host = pe.host, F.path = pe.path.slice(), F.query = "", me = ln;
                          else if (ve == "#")
                            F.host = pe.host, F.path = pe.path.slice(), F.query = pe.query, F.fragment = "", me = St;
                          else {
                            Ke(Ft.slice(ze).join("")) || (F.host = pe.host, F.path = pe.path.slice(), tt(F)), me = Gt;
                            continue;
                          }
                        else {
                          me = Gt;
                          continue;
                        }
                        break;
                      case zt:
                        if (ve == "/" || ve == "\\") {
                          me = Mn;
                          break;
                        }
                        pe && pe.scheme == "file" && !Ke(Ft.slice(ze).join("")) && (Ce(pe.path[0], !0) ? F.path.push(pe.path[0]) : F.host = pe.host), me = Gt;
                        continue;
                      case Mn:
                        if (ve == T || ve == "/" || ve == "\\" || ve == "?" || ve == "#") {
                          if (!se && Ce(Pe))
                            me = Gt;
                          else if (Pe == "") {
                            if (F.host = "", se) return;
                            me = Vt;
                          } else {
                            if (_t = L(F, Pe), _t) return _t;
                            if (F.host == "localhost" && (F.host = ""), se) return;
                            Pe = "", me = Vt;
                          }
                          continue;
                        } else Pe += ve;
                        break;
                      case Vt:
                        if (re(F)) {
                          if (me = Gt, ve != "/" && ve != "\\") continue;
                        } else if (!se && ve == "?")
                          F.query = "", me = ln;
                        else if (!se && ve == "#")
                          F.fragment = "", me = St;
                        else if (ve != T && (me = Gt, ve != "/"))
                          continue;
                        break;
                      case Gt:
                        if (ve == T || ve == "/" || ve == "\\" && re(F) || !se && (ve == "?" || ve == "#")) {
                          if (G(Pe) ? (tt(F), ve != "/" && !(ve == "\\" && re(F)) && F.path.push("")) : _e(Pe) ? ve != "/" && !(ve == "\\" && re(F)) && F.path.push("") : (F.scheme == "file" && !F.path.length && Ce(Pe) && (F.host && (F.host = ""), Pe = Pe.charAt(0) + ":"), F.path.push(Pe)), Pe = "", F.scheme == "file" && (ve == T || ve == "?" || ve == "#"))
                            for (; F.path.length > 1 && F.path[0] === ""; )
                              F.path.shift();
                          ve == "?" ? (F.query = "", me = ln) : ve == "#" && (F.fragment = "", me = St);
                        } else
                          Pe += J(ve, Q);
                        break;
                      case lr:
                        ve == "?" ? (F.query = "", me = ln) : ve == "#" ? (F.fragment = "", me = St) : ve != T && (F.path[0] += J(ve, $));
                        break;
                      case ln:
                        !se && ve == "#" ? (F.fragment = "", me = St) : ve != T && (ve == "'" && re(F) ? F.query += "%27" : ve == "#" ? F.query += "%23" : F.query += J(ve, $));
                        break;
                      case St:
                        ve != T && (F.fragment += J(ve, B));
                        break;
                    }
                    ze++;
                  }
                }, hn = function(ue) {
                  var se = v(this, hn, "URL"), pe = arguments.length > 1 ? arguments[1] : void 0, me = String(ue), ze = j(se, { type: "URL" }), Pe, Qe;
                  if (pe !== void 0) {
                    if (pe instanceof hn) Pe = H(pe);
                    else if (Qe = Wt(Pe = {}, String(pe)), Qe) throw TypeError(Qe);
                  }
                  if (Qe = Wt(ze, me, null, Pe), Qe) throw TypeError(Qe);
                  var st = ze.searchParams = new D(), lt = N(st);
                  lt.updateSearchParams(ze.query), lt.updateURL = function() {
                    ze.query = String(st) || null;
                  }, u || (se.href = Yn.call(se), se.origin = jr.call(se), se.protocol = Yt.call(se), se.username = kr.call(se), se.password = Vr.call(se), se.host = $r.call(se), se.hostname = Br.call(se), se.port = Hr.call(se), se.pathname = pn.call(se), se.search = zr.call(se), se.searchParams = Gr.call(se), se.hash = Wr.call(se));
                }, ur = hn.prototype, Yn = function() {
                  var F = H(this), ue = F.scheme, se = F.username, pe = F.password, me = F.host, ze = F.port, Pe = F.path, Qe = F.query, st = F.fragment, lt = ue + ":";
                  return me !== null ? (lt += "//", le(F) && (lt += se + (pe ? ":" + pe : "") + "@"), lt += U(me), ze !== null && (lt += ":" + ze)) : ue == "file" && (lt += "//"), lt += F.cannotBeABaseURL ? Pe[0] : Pe.length ? "/" + Pe.join("/") : "", Qe !== null && (lt += "?" + Qe), st !== null && (lt += "#" + st), lt;
                }, jr = function() {
                  var F = H(this), ue = F.scheme, se = F.port;
                  if (ue == "blob") try {
                    return new URL(ue.path[0]).origin;
                  } catch {
                    return "null";
                  }
                  return ue == "file" || !re(F) ? "null" : ue + "://" + U(F.host) + (se !== null ? ":" + se : "");
                }, Yt = function() {
                  return H(this).scheme + ":";
                }, kr = function() {
                  return H(this).username;
                }, Vr = function() {
                  return H(this).password;
                }, $r = function() {
                  var F = H(this), ue = F.host, se = F.port;
                  return ue === null ? "" : se === null ? U(ue) : U(ue) + ":" + se;
                }, Br = function() {
                  var F = H(this).host;
                  return F === null ? "" : U(F);
                }, Hr = function() {
                  var F = H(this).port;
                  return F === null ? "" : String(F);
                }, pn = function() {
                  var F = H(this), ue = F.path;
                  return F.cannotBeABaseURL ? ue[0] : ue.length ? "/" + ue.join("/") : "";
                }, zr = function() {
                  var F = H(this).query;
                  return F ? "?" + F : "";
                }, Gr = function() {
                  return H(this).searchParams;
                }, Wr = function() {
                  var F = H(this).fragment;
                  return F ? "#" + F : "";
                }, Dt = function(F, ue) {
                  return { get: F, set: ue, configurable: !0, enumerable: !0 };
                };
                if (u && p(ur, {
                  // `URL.prototype.href` accessors pair
                  // https://url.spec.whatwg.org/#dom-url-href
                  href: Dt(Yn, function(F) {
                    var ue = H(this), se = String(F), pe = Wt(ue, se);
                    if (pe) throw TypeError(pe);
                    N(ue.searchParams).updateSearchParams(ue.query);
                  }),
                  // `URL.prototype.origin` getter
                  // https://url.spec.whatwg.org/#dom-url-origin
                  origin: Dt(jr),
                  // `URL.prototype.protocol` accessors pair
                  // https://url.spec.whatwg.org/#dom-url-protocol
                  protocol: Dt(Yt, function(F) {
                    var ue = H(this);
                    Wt(ue, String(F) + ":", K);
                  }),
                  // `URL.prototype.username` accessors pair
                  // https://url.spec.whatwg.org/#dom-url-username
                  username: Dt(kr, function(F) {
                    var ue = H(this), se = y(String(F));
                    if (!ge(ue)) {
                      ue.username = "";
                      for (var pe = 0; pe < se.length; pe++)
                        ue.username += J(se[pe], q);
                    }
                  }),
                  // `URL.prototype.password` accessors pair
                  // https://url.spec.whatwg.org/#dom-url-password
                  password: Dt(Vr, function(F) {
                    var ue = H(this), se = y(String(F));
                    if (!ge(ue)) {
                      ue.password = "";
                      for (var pe = 0; pe < se.length; pe++)
                        ue.password += J(se[pe], q);
                    }
                  }),
                  // `URL.prototype.host` accessors pair
                  // https://url.spec.whatwg.org/#dom-url-host
                  host: Dt($r, function(F) {
                    var ue = H(this);
                    ue.cannotBeABaseURL || Wt(ue, String(F), Re);
                  }),
                  // `URL.prototype.hostname` accessors pair
                  // https://url.spec.whatwg.org/#dom-url-hostname
                  hostname: Dt(Br, function(F) {
                    var ue = H(this);
                    ue.cannotBeABaseURL || Wt(ue, String(F), Be);
                  }),
                  // `URL.prototype.port` accessors pair
                  // https://url.spec.whatwg.org/#dom-url-port
                  port: Dt(Hr, function(F) {
                    var ue = H(this);
                    ge(ue) || (F = String(F), F == "" ? ue.port = null : Wt(ue, F, ke));
                  }),
                  // `URL.prototype.pathname` accessors pair
                  // https://url.spec.whatwg.org/#dom-url-pathname
                  pathname: Dt(pn, function(F) {
                    var ue = H(this);
                    ue.cannotBeABaseURL || (ue.path = [], Wt(ue, F + "", Vt));
                  }),
                  // `URL.prototype.search` accessors pair
                  // https://url.spec.whatwg.org/#dom-url-search
                  search: Dt(zr, function(F) {
                    var ue = H(this);
                    F = String(F), F == "" ? ue.query = null : (F.charAt(0) == "?" && (F = F.slice(1)), ue.query = "", Wt(ue, F, ln)), N(ue.searchParams).updateSearchParams(ue.query);
                  }),
                  // `URL.prototype.searchParams` getter
                  // https://url.spec.whatwg.org/#dom-url-searchparams
                  searchParams: Dt(Gr),
                  // `URL.prototype.hash` accessors pair
                  // https://url.spec.whatwg.org/#dom-url-hash
                  hash: Dt(Wr, function(F) {
                    var ue = H(this);
                    if (F = String(F), F == "") {
                      ue.fragment = null;
                      return;
                    }
                    F.charAt(0) == "#" && (F = F.slice(1)), ue.fragment = "", Wt(ue, F, St);
                  })
                }), f(ur, "toJSON", function() {
                  return Yn.call(this);
                }, { enumerable: !0 }), f(ur, "toString", function() {
                  return Yn.call(this);
                }, { enumerable: !0 }), O) {
                  var Yr = O.createObjectURL, vn = O.revokeObjectURL;
                  Yr && f(hn, "createObjectURL", function(ue) {
                    return Yr.apply(O, arguments);
                  }), vn && f(hn, "revokeObjectURL", function(ue) {
                    return vn.apply(O, arguments);
                  });
                }
                A(hn, "URL"), s({ global: !0, forced: !d, sham: !u }, {
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
            function n(R, M) {
              var T;
              if (typeof Symbol > "u" || R[Symbol.iterator] == null) {
                if (Array.isArray(R) || (T = l(R)) || R && typeof R.length == "number") {
                  T && (R = T);
                  var L = 0, b = function() {
                  };
                  return { s: b, n: function() {
                    return L >= R.length ? { done: !0 } : { done: !1, value: R[L++] };
                  }, e: function(B) {
                    throw B;
                  }, f: b };
                }
                throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
              }
              var x = !0, I = !1, U;
              return { s: function() {
                T = R[Symbol.iterator]();
              }, n: function() {
                var B = T.next();
                return x = B.done, B;
              }, e: function(B) {
                I = !0, U = B;
              }, f: function() {
                try {
                  !x && T.return != null && T.return();
                } finally {
                  if (I) throw U;
                }
              } };
            }
            function l(R, M) {
              if (R) {
                if (typeof R == "string") return o(R, M);
                var T = Object.prototype.toString.call(R).slice(8, -1);
                if (T === "Object" && R.constructor && (T = R.constructor.name), T === "Map" || T === "Set") return Array.from(R);
                if (T === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T)) return o(R, M);
              }
            }
            function o(R, M) {
              (M == null || M > R.length) && (M = R.length);
              for (var T = 0, L = new Array(M); T < M; T++)
                L[T] = R[T];
              return L;
            }
            function s(R, M) {
              if (!(R instanceof M))
                throw new TypeError("Cannot call a class as a function");
            }
            function u(R, M) {
              for (var T = 0; T < M.length; T++) {
                var L = M[T];
                L.enumerable = L.enumerable || !1, L.configurable = !0, "value" in L && (L.writable = !0), Object.defineProperty(R, L.key, L);
              }
            }
            function d(R, M, T) {
              return M && u(R.prototype, M), R;
            }
            var h = /* @__PURE__ */ function() {
              function R() {
                s(this, R);
              }
              return d(R, [{
                key: "on",
                value: (
                  // Add an event listener for given event
                  function(T, L) {
                    return this._callbacks = this._callbacks || {}, this._callbacks[T] || (this._callbacks[T] = []), this._callbacks[T].push(L), this;
                  }
                )
              }, {
                key: "emit",
                value: function(T) {
                  this._callbacks = this._callbacks || {};
                  for (var L = this._callbacks[T], b = arguments.length, x = new Array(b > 1 ? b - 1 : 0), I = 1; I < b; I++)
                    x[I - 1] = arguments[I];
                  if (L) {
                    var U = n(L), $;
                    try {
                      for (U.s(); !($ = U.n()).done; ) {
                        var B = $.value;
                        B.apply(this, x);
                      }
                    } catch (Q) {
                      U.e(Q);
                    } finally {
                      U.f();
                    }
                  }
                  return this.element && this.element.dispatchEvent(this.makeEvent("dropzone:" + T, {
                    args: x
                  })), this;
                }
              }, {
                key: "makeEvent",
                value: function(T, L) {
                  var b = {
                    bubbles: !0,
                    cancelable: !0,
                    detail: L
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
                value: function(T, L) {
                  if (!this._callbacks || arguments.length === 0)
                    return this._callbacks = {}, this;
                  var b = this._callbacks[T];
                  if (!b)
                    return this;
                  if (arguments.length === 1)
                    return delete this._callbacks[T], this;
                  for (var x = 0; x < b.length; x++) {
                    var I = b[x];
                    if (I === L) {
                      b.splice(x, 1);
                      break;
                    }
                  }
                  return this;
                }
              }]), R;
            }(), p = '<div class="dz-preview dz-file-preview"> <div class="dz-image"><img data-dz-thumbnail/></div> <div class="dz-details"> <div class="dz-size"><span data-dz-size></span></div> <div class="dz-filename"><span data-dz-name></span></div> </div> <div class="dz-progress"> <span class="dz-upload" data-dz-uploadprogress></span> </div> <div class="dz-error-message"><span data-dz-errormessage></span></div> <div class="dz-success-mark"> <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>Check</title> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF"></path> </g> </svg> </div> <div class="dz-error-mark"> <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>Error</title> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475"> <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z"></path> </g> </g> </svg> </div> </div> ', f = p;
            function v(R, M) {
              var T;
              if (typeof Symbol > "u" || R[Symbol.iterator] == null) {
                if (Array.isArray(R) || (T = m(R)) || R && typeof R.length == "number") {
                  T && (R = T);
                  var L = 0, b = function() {
                  };
                  return { s: b, n: function() {
                    return L >= R.length ? { done: !0 } : { done: !1, value: R[L++] };
                  }, e: function(B) {
                    throw B;
                  }, f: b };
                }
                throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
              }
              var x = !0, I = !1, U;
              return { s: function() {
                T = R[Symbol.iterator]();
              }, n: function() {
                var B = T.next();
                return x = B.done, B;
              }, e: function(B) {
                I = !0, U = B;
              }, f: function() {
                try {
                  !x && T.return != null && T.return();
                } finally {
                  if (I) throw U;
                }
              } };
            }
            function m(R, M) {
              if (R) {
                if (typeof R == "string") return g(R, M);
                var T = Object.prototype.toString.call(R).slice(8, -1);
                if (T === "Object" && R.constructor && (T = R.constructor.name), T === "Map" || T === "Set") return Array.from(R);
                if (T === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T)) return g(R, M);
              }
            }
            function g(R, M) {
              (M == null || M > R.length) && (M = R.length);
              for (var T = 0, L = new Array(M); T < M; T++)
                L[T] = R[T];
              return L;
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
              params: function(M, T, L) {
                if (L)
                  return {
                    dzuuid: L.file.upload.uuid,
                    dzchunkindex: L.index,
                    dztotalfilesize: L.file.size,
                    dzchunksize: this.options.chunkSize,
                    dztotalchunkcount: L.file.upload.totalChunkCount,
                    dzchunkbyteoffset: L.index * this.options.chunkSize
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
              accept: function(M, T) {
                return T();
              },
              /**
               * The callback that will be invoked when all chunks have been uploaded for a file.
               * It gets the file for which the chunks have been uploaded as the first parameter,
               * and the `done` function as second. `done()` needs to be invoked when everything
               * needed to finish the upload process is done.
               */
              chunksUploaded: function(M, T) {
                T();
              },
              /**
               * Gets called when the browser is not supported.
               * The default implementation shows the fallback input field and adds
               * a text.
               */
              fallback: function() {
                var M;
                this.element.className = "".concat(this.element.className, " dz-browser-not-supported");
                var T = v(this.element.getElementsByTagName("div")), L;
                try {
                  for (T.s(); !(L = T.n()).done; ) {
                    var b = L.value;
                    if (/(^| )dz-message($| )/.test(b.className)) {
                      M = b, b.className = "dz-message";
                      break;
                    }
                  }
                } catch (I) {
                  T.e(I);
                } finally {
                  T.f();
                }
                M || (M = X.createElement('<div class="dz-message"><span></span></div>'), this.element.appendChild(M));
                var x = M.getElementsByTagName("span")[0];
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
              resize: function(M, T, L, b) {
                var x = {
                  srcX: 0,
                  srcY: 0,
                  srcWidth: M.width,
                  srcHeight: M.height
                }, I = M.width / M.height;
                T == null && L == null ? (T = x.srcWidth, L = x.srcHeight) : T == null ? T = L * I : L == null && (L = T / I), T = Math.min(T, x.srcWidth), L = Math.min(L, x.srcHeight);
                var U = T / L;
                if (x.srcWidth > T || x.srcHeight > L)
                  if (b === "crop")
                    I > U ? (x.srcHeight = M.height, x.srcWidth = x.srcHeight * U) : (x.srcWidth = M.width, x.srcHeight = x.srcWidth / U);
                  else if (b === "contain")
                    I > U ? L = T / I : T = L * I;
                  else
                    throw new Error("Unknown resizeMethod '".concat(b, "'"));
                return x.srcX = (M.width - x.srcWidth) / 2, x.srcY = (M.height - x.srcHeight) / 2, x.trgWidth = T, x.trgHeight = L, x;
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
              transformFile: function(M, T) {
                return (this.options.resizeWidth || this.options.resizeHeight) && M.type.match(/image.*/) ? this.resizeImage(M, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, T) : T(M);
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
              previewTemplate: f,
              /*
               Those functions register themselves to the events on init and handle all
               the user interface specific stuff. Overwriting them won't break the upload
               but can break the way it's displayed.
               You can overwrite them if you don't like the default behavior. If you just
               want to add an additional event handler, register it on the dropzone object
               and don't overwrite those options.
               */
              // Those are self explanatory and simply concern the DragnDrop.
              drop: function(M) {
                return this.element.classList.remove("dz-drag-hover");
              },
              dragstart: function(M) {
              },
              dragend: function(M) {
                return this.element.classList.remove("dz-drag-hover");
              },
              dragenter: function(M) {
                return this.element.classList.add("dz-drag-hover");
              },
              dragover: function(M) {
                return this.element.classList.add("dz-drag-hover");
              },
              dragleave: function(M) {
                return this.element.classList.remove("dz-drag-hover");
              },
              paste: function(M) {
              },
              // Called whenever there are no files left in the dropzone anymore, and the
              // dropzone should be displayed as if in the initial state.
              reset: function() {
                return this.element.classList.remove("dz-started");
              },
              // Called when a file is added to the queue
              // Receives `file`
              addedfile: function(M) {
                var T = this;
                if (this.element === this.previewsContainer && this.element.classList.add("dz-started"), this.previewsContainer && !this.options.disablePreviews) {
                  M.previewElement = X.createElement(this.options.previewTemplate.trim()), M.previewTemplate = M.previewElement, this.previewsContainer.appendChild(M.previewElement);
                  var L = v(M.previewElement.querySelectorAll("[data-dz-name]")), b;
                  try {
                    for (L.s(); !(b = L.n()).done; ) {
                      var x = b.value;
                      x.textContent = M.name;
                    }
                  } catch (J) {
                    L.e(J);
                  } finally {
                    L.f();
                  }
                  var I = v(M.previewElement.querySelectorAll("[data-dz-size]")), U;
                  try {
                    for (I.s(); !(U = I.n()).done; )
                      x = U.value, x.innerHTML = this.filesize(M.size);
                  } catch (J) {
                    I.e(J);
                  } finally {
                    I.f();
                  }
                  this.options.addRemoveLinks && (M._removeLink = X.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'.concat(this.options.dictRemoveFile, "</a>")), M.previewElement.appendChild(M._removeLink));
                  var $ = function(_) {
                    return _.preventDefault(), _.stopPropagation(), M.status === X.UPLOADING ? X.confirm(T.options.dictCancelUploadConfirmation, function() {
                      return T.removeFile(M);
                    }) : T.options.dictRemoveFileConfirmation ? X.confirm(T.options.dictRemoveFileConfirmation, function() {
                      return T.removeFile(M);
                    }) : T.removeFile(M);
                  }, B = v(M.previewElement.querySelectorAll("[data-dz-remove]")), Q;
                  try {
                    for (B.s(); !(Q = B.n()).done; ) {
                      var q = Q.value;
                      q.addEventListener("click", $);
                    }
                  } catch (J) {
                    B.e(J);
                  } finally {
                    B.f();
                  }
                }
              },
              // Called whenever a file is removed.
              removedfile: function(M) {
                return M.previewElement != null && M.previewElement.parentNode != null && M.previewElement.parentNode.removeChild(M.previewElement), this._updateMaxFilesReachedClass();
              },
              // Called when a thumbnail has been generated
              // Receives `file` and `dataUrl`
              thumbnail: function(M, T) {
                if (M.previewElement) {
                  M.previewElement.classList.remove("dz-file-preview");
                  var L = v(M.previewElement.querySelectorAll("[data-dz-thumbnail]")), b;
                  try {
                    for (L.s(); !(b = L.n()).done; ) {
                      var x = b.value;
                      x.alt = M.name, x.src = T;
                    }
                  } catch (I) {
                    L.e(I);
                  } finally {
                    L.f();
                  }
                  return setTimeout(function() {
                    return M.previewElement.classList.add("dz-image-preview");
                  }, 1);
                }
              },
              // Called whenever an error occurs
              // Receives `file` and `message`
              error: function(M, T) {
                if (M.previewElement) {
                  M.previewElement.classList.add("dz-error"), typeof T != "string" && T.error && (T = T.error);
                  var L = v(M.previewElement.querySelectorAll("[data-dz-errormessage]")), b;
                  try {
                    for (L.s(); !(b = L.n()).done; ) {
                      var x = b.value;
                      x.textContent = T;
                    }
                  } catch (I) {
                    L.e(I);
                  } finally {
                    L.f();
                  }
                }
              },
              errormultiple: function() {
              },
              // Called when a file gets processed. Since there is a cue, not all added
              // files are processed immediately.
              // Receives `file`
              processing: function(M) {
                if (M.previewElement && (M.previewElement.classList.add("dz-processing"), M._removeLink))
                  return M._removeLink.innerHTML = this.options.dictCancelUpload;
              },
              processingmultiple: function() {
              },
              // Called whenever the upload progress gets updated.
              // Receives `file`, `progress` (percentage 0-100) and `bytesSent`.
              // To get the total number of bytes of the file, use `file.size`
              uploadprogress: function(M, T, L) {
                if (M.previewElement) {
                  var b = v(M.previewElement.querySelectorAll("[data-dz-uploadprogress]")), x;
                  try {
                    for (b.s(); !(x = b.n()).done; ) {
                      var I = x.value;
                      I.nodeName === "PROGRESS" ? I.value = T : I.style.width = "".concat(T, "%");
                    }
                  } catch (U) {
                    b.e(U);
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
              success: function(M) {
                if (M.previewElement)
                  return M.previewElement.classList.add("dz-success");
              },
              successmultiple: function() {
              },
              // When the upload is canceled.
              canceled: function(M) {
                return this.emit("error", M, this.options.dictUploadCanceled);
              },
              canceledmultiple: function() {
              },
              // When the upload is finished, either with success or an error.
              // Receives `file`
              complete: function(M) {
                if (M._removeLink && (M._removeLink.innerHTML = this.options.dictRemoveFile), M.previewElement)
                  return M.previewElement.classList.add("dz-complete");
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
            function E(R) {
              "@babel/helpers - typeof";
              return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? E = function(T) {
                return typeof T;
              } : E = function(T) {
                return T && typeof Symbol == "function" && T.constructor === Symbol && T !== Symbol.prototype ? "symbol" : typeof T;
              }, E(R);
            }
            function A(R, M) {
              var T;
              if (typeof Symbol > "u" || R[Symbol.iterator] == null) {
                if (Array.isArray(R) || (T = w(R)) || R && typeof R.length == "number") {
                  T && (R = T);
                  var L = 0, b = function() {
                  };
                  return { s: b, n: function() {
                    return L >= R.length ? { done: !0 } : { done: !1, value: R[L++] };
                  }, e: function(B) {
                    throw B;
                  }, f: b };
                }
                throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
              }
              var x = !0, I = !1, U;
              return { s: function() {
                T = R[Symbol.iterator]();
              }, n: function() {
                var B = T.next();
                return x = B.done, B;
              }, e: function(B) {
                I = !0, U = B;
              }, f: function() {
                try {
                  !x && T.return != null && T.return();
                } finally {
                  if (I) throw U;
                }
              } };
            }
            function w(R, M) {
              if (R) {
                if (typeof R == "string") return P(R, M);
                var T = Object.prototype.toString.call(R).slice(8, -1);
                if (T === "Object" && R.constructor && (T = R.constructor.name), T === "Map" || T === "Set") return Array.from(R);
                if (T === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T)) return P(R, M);
              }
            }
            function P(R, M) {
              (M == null || M > R.length) && (M = R.length);
              for (var T = 0, L = new Array(M); T < M; T++)
                L[T] = R[T];
              return L;
            }
            function O(R, M) {
              if (!(R instanceof M))
                throw new TypeError("Cannot call a class as a function");
            }
            function D(R, M) {
              for (var T = 0; T < M.length; T++) {
                var L = M[T];
                L.enumerable = L.enumerable || !1, L.configurable = !0, "value" in L && (L.writable = !0), Object.defineProperty(R, L.key, L);
              }
            }
            function N(R, M, T) {
              return M && D(R.prototype, M), T && D(R, T), R;
            }
            function j(R, M) {
              if (typeof M != "function" && M !== null)
                throw new TypeError("Super expression must either be null or a function");
              R.prototype = Object.create(M && M.prototype, { constructor: { value: R, writable: !0, configurable: !0 } }), M && H(R, M);
            }
            function H(R, M) {
              return H = Object.setPrototypeOf || function(L, b) {
                return L.__proto__ = b, L;
              }, H(R, M);
            }
            function V(R) {
              var M = W();
              return function() {
                var L = ae(R), b;
                if (M) {
                  var x = ae(this).constructor;
                  b = Reflect.construct(L, arguments, x);
                } else
                  b = L.apply(this, arguments);
                return z(this, b);
              };
            }
            function z(R, M) {
              return M && (E(M) === "object" || typeof M == "function") ? M : Y(R);
            }
            function Y(R) {
              if (R === void 0)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return R;
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
            function ae(R) {
              return ae = Object.setPrototypeOf ? Object.getPrototypeOf : function(T) {
                return T.__proto__ || Object.getPrototypeOf(T);
              }, ae(R);
            }
            var X = /* @__PURE__ */ function(R) {
              j(T, R);
              var M = V(T);
              function T(L, b) {
                var x;
                O(this, T), x = M.call(this);
                var I, U;
                if (x.element = L, x.version = T.version, x.clickableElements = [], x.listeners = [], x.files = [], typeof x.element == "string" && (x.element = document.querySelector(x.element)), !x.element || x.element.nodeType == null)
                  throw new Error("Invalid dropzone element.");
                if (x.element.dropzone)
                  throw new Error("Dropzone already attached.");
                T.instances.push(Y(x)), x.element.dropzone = Y(x);
                var $ = (U = T.optionsForElement(x.element)) != null ? U : {};
                if (x.options = T.extend({}, S, $, b ?? {}), x.options.previewTemplate = x.options.previewTemplate.replace(/\n*/g, ""), x.options.forceFallback || !T.isBrowserSupported())
                  return z(x, x.options.fallback.call(Y(x)));
                if (x.options.url == null && (x.options.url = x.element.getAttribute("action")), !x.options.url)
                  throw new Error("No URL provided.");
                if (x.options.acceptedFiles && x.options.acceptedMimeTypes)
                  throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
                if (x.options.uploadMultiple && x.options.chunking)
                  throw new Error("You cannot set both: uploadMultiple and chunking.");
                return x.options.acceptedMimeTypes && (x.options.acceptedFiles = x.options.acceptedMimeTypes, delete x.options.acceptedMimeTypes), x.options.renameFilename != null && (x.options.renameFile = function(B) {
                  return x.options.renameFilename.call(Y(x), B.name, B);
                }), typeof x.options.method == "string" && (x.options.method = x.options.method.toUpperCase()), (I = x.getExistingFallback()) && I.parentNode && I.parentNode.removeChild(I), x.options.previewsContainer !== !1 && (x.options.previewsContainer ? x.previewsContainer = T.getElement(x.options.previewsContainer, "previewsContainer") : x.previewsContainer = x.element), x.options.clickable && (x.options.clickable === !0 ? x.clickableElements = [x.element] : x.clickableElements = T.getElements(x.options.clickable, "clickable")), x.init(), x;
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
                    var x = function q() {
                      b.hiddenFileInput && b.hiddenFileInput.parentNode.removeChild(b.hiddenFileInput), b.hiddenFileInput = document.createElement("input"), b.hiddenFileInput.setAttribute("type", "file"), (b.options.maxFiles === null || b.options.maxFiles > 1) && b.hiddenFileInput.setAttribute("multiple", "multiple"), b.hiddenFileInput.className = "dz-hidden-input", b.options.acceptedFiles !== null && b.hiddenFileInput.setAttribute("accept", b.options.acceptedFiles), b.options.capture !== null && b.hiddenFileInput.setAttribute("capture", b.options.capture), b.hiddenFileInput.setAttribute("tabindex", "-1"), b.hiddenFileInput.style.visibility = "hidden", b.hiddenFileInput.style.position = "absolute", b.hiddenFileInput.style.top = "0", b.hiddenFileInput.style.left = "0", b.hiddenFileInput.style.height = "0", b.hiddenFileInput.style.width = "0", T.getElement(b.options.hiddenInputContainer, "hiddenInputContainer").appendChild(b.hiddenFileInput), b.hiddenFileInput.addEventListener("change", function() {
                        var J = b.hiddenFileInput.files;
                        if (J.length) {
                          var _ = A(J), re;
                          try {
                            for (_.s(); !(re = _.n()).done; ) {
                              var le = re.value;
                              b.addFile(le);
                            }
                          } catch (ge) {
                            _.e(ge);
                          } finally {
                            _.f();
                          }
                        }
                        b.emit("addedfiles", J), q();
                      });
                    };
                    x();
                  }
                  this.URL = window.URL !== null ? window.URL : window.webkitURL;
                  var I = A(this.events), U;
                  try {
                    for (I.s(); !(U = I.n()).done; ) {
                      var $ = U.value;
                      this.on($, this.options[$]);
                    }
                  } catch (q) {
                    I.e(q);
                  } finally {
                    I.f();
                  }
                  this.on("uploadprogress", function() {
                    return b.updateTotalUploadProgress();
                  }), this.on("removedfile", function() {
                    return b.updateTotalUploadProgress();
                  }), this.on("canceled", function(q) {
                    return b.emit("complete", q);
                  }), this.on("complete", function(q) {
                    if (b.getAddedFiles().length === 0 && b.getUploadingFiles().length === 0 && b.getQueuedFiles().length === 0)
                      return setTimeout(function() {
                        return b.emit("queuecomplete");
                      }, 0);
                  });
                  var B = function(J) {
                    if (J.dataTransfer.types) {
                      for (var _ = 0; _ < J.dataTransfer.types.length; _++)
                        if (J.dataTransfer.types[_] === "Files") return !0;
                    }
                    return !1;
                  }, Q = function(J) {
                    if (B(J))
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
                        var _;
                        try {
                          _ = J.dataTransfer.effectAllowed;
                        } catch {
                        }
                        return J.dataTransfer.dropEffect = _ === "move" || _ === "linkMove" ? "move" : "copy", Q(J), b.emit("dragover", J);
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
                  }], this.clickableElements.forEach(function(q) {
                    return b.listeners.push({
                      element: q,
                      events: {
                        click: function(_) {
                          return (q !== b.element || _.target === b.element || T.elementInside(_.target, b.element.querySelector(".dz-message"))) && b.hiddenFileInput.click(), !0;
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
                  var b, x = 0, I = 0, U = this.getActiveFiles();
                  if (U.length) {
                    var $ = A(this.getActiveFiles()), B;
                    try {
                      for ($.s(); !(B = $.n()).done; ) {
                        var Q = B.value;
                        x += Q.upload.bytesSent, I += Q.upload.total;
                      }
                    } catch (q) {
                      $.e(q);
                    } finally {
                      $.f();
                    }
                    b = 100 * x / I;
                  } else
                    b = 100;
                  return this.emit("totaluploadprogress", b, I, x);
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
                  var I = '<div class="dz-fallback">';
                  this.options.dictFallbackText && (I += "<p>".concat(this.options.dictFallbackText, "</p>")), I += '<input type="file" name="'.concat(this._getParamName(0), '" ').concat(this.options.uploadMultiple ? 'multiple="multiple"' : void 0, ' /><input type="submit" value="Upload!"></div>');
                  var U = T.createElement(I);
                  return this.element.tagName !== "FORM" ? (x = T.createElement('<form action="'.concat(this.options.url, '" enctype="multipart/form-data" method="').concat(this.options.method, '"></form>')), x.appendChild(U)) : (this.element.setAttribute("enctype", "multipart/form-data"), this.element.setAttribute("method", this.options.method)), x ?? U;
                }
                // Returns the fallback elements if they exist already
                //
                // This code has to pass in IE7 :(
              }, {
                key: "getExistingFallback",
                value: function() {
                  for (var b = function(Q) {
                    var q = A(Q), J;
                    try {
                      for (q.s(); !(J = q.n()).done; ) {
                        var _ = J.value;
                        if (/(^| )fallback($| )/.test(_.className))
                          return _;
                      }
                    } catch (re) {
                      q.e(re);
                    } finally {
                      q.f();
                    }
                  }, x = 0, I = ["div", "form"]; x < I.length; x++) {
                    var U = I[x], $;
                    if ($ = b(this.element.getElementsByTagName(U)))
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
                      for (var I in b.events) {
                        var U = b.events[I];
                        x.push(b.element.addEventListener(I, U, !1));
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
                      for (var I in b.events) {
                        var U = b.events[I];
                        x.push(b.element.removeEventListener(I, U, !1));
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
                  var x = 0, I = "b";
                  if (b > 0) {
                    for (var U = ["tb", "gb", "mb", "kb", "b"], $ = 0; $ < U.length; $++) {
                      var B = U[$], Q = Math.pow(this.options.filesizeBase, 4 - $) / 10;
                      if (b >= Q) {
                        x = b / Math.pow(this.options.filesizeBase, 4 - $), I = B;
                        break;
                      }
                    }
                    x = Math.round(10 * x) / 10;
                  }
                  return "<strong>".concat(x, "</strong> ").concat(this.options.dictFileSizeUnits[I]);
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
                    for (var x = [], I = 0; I < b.dataTransfer.files.length; I++)
                      x[I] = b.dataTransfer.files[I];
                    if (x.length) {
                      var U = b.dataTransfer.items;
                      U && U.length && U[0].webkitGetAsEntry != null ? this._addFilesFromItems(U) : this.handleFiles(x);
                    }
                    this.emit("addedfiles", x);
                  }
                }
              }, {
                key: "paste",
                value: function(b) {
                  if (Ne(b != null ? b.clipboardData : void 0, function(I) {
                    return I.items;
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
                  var x = A(b), I;
                  try {
                    for (x.s(); !(I = x.n()).done; ) {
                      var U = I.value;
                      this.addFile(U);
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
                    var I = [], U = A(b), $;
                    try {
                      for (U.s(); !($ = U.n()).done; ) {
                        var B = $.value, Q;
                        B.webkitGetAsEntry != null && (Q = B.webkitGetAsEntry()) ? Q.isFile ? I.push(x.addFile(B.getAsFile())) : Q.isDirectory ? I.push(x._addFilesFromDirectory(Q, Q.name)) : I.push(void 0) : B.getAsFile != null && (B.kind == null || B.kind === "file") ? I.push(x.addFile(B.getAsFile())) : I.push(void 0);
                      }
                    } catch (q) {
                      U.e(q);
                    } finally {
                      U.f();
                    }
                    return I;
                  }();
                }
                // Goes through the directory, and adds each file it finds recursively
              }, {
                key: "_addFilesFromDirectory",
                value: function(b, x) {
                  var I = this, U = b.createReader(), $ = function(q) {
                    return Le(console, "log", function(J) {
                      return J.log(q);
                    });
                  }, B = function Q() {
                    return U.readEntries(function(q) {
                      if (q.length > 0) {
                        var J = A(q), _;
                        try {
                          for (J.s(); !(_ = J.n()).done; ) {
                            var re = _.value;
                            re.isFile ? re.file(function(le) {
                              if (!(I.options.ignoreHiddenFiles && le.name.substring(0, 1) === "."))
                                return le.fullPath = "".concat(x, "/").concat(le.name), I.addFile(le);
                            }) : re.isDirectory && I._addFilesFromDirectory(re, "".concat(x, "/").concat(re.name));
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
                  return B();
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
                  }, this.files.push(b), b.status = T.ADDED, this.emit("addedfile", b), this._enqueueThumbnail(b), this.accept(b, function(I) {
                    I ? (b.accepted = !1, x._errorProcessing([b], I)) : (b.accepted = !0, x.options.autoQueue && x.enqueueFile(b)), x._updateMaxFilesReachedClass();
                  });
                }
                // Wrapper for enqueueFile
              }, {
                key: "enqueueFiles",
                value: function(b) {
                  var x = A(b), I;
                  try {
                    for (x.s(); !(I = x.n()).done; ) {
                      var U = I.value;
                      this.enqueueFile(U);
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
                    return this.createThumbnail(x, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, !0, function(I) {
                      return b.emit("thumbnail", x, I), b._processingThumbnail = !1, b._processThumbnailQueue();
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
                  var x = A(this.files.slice()), I;
                  try {
                    for (x.s(); !(I = x.n()).done; ) {
                      var U = I.value;
                      (U.status !== T.UPLOADING || b) && this.removeFile(U);
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
                value: function(b, x, I, U, $) {
                  var B = this;
                  return this.createThumbnail(b, x, I, U, !0, function(Q, q) {
                    if (q == null)
                      return $(b);
                    var J = B.options.resizeMimeType;
                    J == null && (J = b.type);
                    var _ = q.toDataURL(J, B.options.resizeQuality);
                    return (J === "image/jpeg" || J === "image/jpg") && (_ = xe.restore(b.dataURL, _)), $(T.dataURItoBlob(_));
                  });
                }
              }, {
                key: "createThumbnail",
                value: function(b, x, I, U, $, B) {
                  var Q = this, q = new FileReader();
                  q.onload = function() {
                    if (b.dataURL = q.result, b.type === "image/svg+xml") {
                      B != null && B(q.result);
                      return;
                    }
                    Q.createThumbnailFromUrl(b, x, I, U, $, B);
                  }, q.readAsDataURL(b);
                }
                // `mockFile` needs to have these attributes:
                //
                //     { name: 'name', size: 12345, imageUrl: '' }
                //
                // `callback` will be invoked when the image has been downloaded and displayed.
                // `crossOrigin` will be added to the `img` tag when accessing the file.
              }, {
                key: "displayExistingFile",
                value: function(b, x, I, U) {
                  var $ = this, B = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0;
                  if (this.emit("addedfile", b), this.emit("complete", b), !B)
                    this.emit("thumbnail", b, x), I && I();
                  else {
                    var Q = function(J) {
                      $.emit("thumbnail", b, J), I && I();
                    };
                    b.dataURL = x, this.createThumbnailFromUrl(b, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, this.options.fixOrientation, Q, U);
                  }
                }
              }, {
                key: "createThumbnailFromUrl",
                value: function(b, x, I, U, $, B, Q) {
                  var q = this, J = document.createElement("img");
                  return Q && (J.crossOrigin = Q), $ = getComputedStyle(document.body).imageOrientation == "from-image" ? !1 : $, J.onload = function() {
                    var _ = function(le) {
                      return le(1);
                    };
                    return typeof EXIF < "u" && EXIF !== null && $ && (_ = function(le) {
                      return EXIF.getData(J, function() {
                        return le(EXIF.getTag(this, "Orientation"));
                      });
                    }), _(function(re) {
                      b.width = J.width, b.height = J.height;
                      var le = q.options.resize.call(q, b, x, I, U), ge = document.createElement("canvas"), Ce = ge.getContext("2d");
                      switch (ge.width = le.trgWidth, ge.height = le.trgHeight, re > 4 && (ge.width = le.trgHeight, ge.height = le.trgWidth), re) {
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
                      if (B != null)
                        return B(Ke, ge);
                    });
                  }, B != null && (J.onerror = B), J.src = b.dataURL;
                }
                // Goes through the queue and processes files if there aren't too many already.
              }, {
                key: "processQueue",
                value: function() {
                  var b = this.options.parallelUploads, x = this.getUploadingFiles().length, I = x;
                  if (!(x >= b)) {
                    var U = this.getQueuedFiles();
                    if (U.length > 0) {
                      if (this.options.uploadMultiple)
                        return this.processFiles(U.slice(0, b - x));
                      for (; I < b; ) {
                        if (!U.length)
                          return;
                        this.processFile(U.shift()), I++;
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
                  var x = A(b), I;
                  try {
                    for (x.s(); !(I = x.n()).done; ) {
                      var U = I.value;
                      U.processing = !0, U.status = T.UPLOADING, this.emit("processing", U);
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
                  if (b.status === T.UPLOADING) {
                    var x = this._getFilesWithXhr(b.xhr), I = A(x), U;
                    try {
                      for (I.s(); !(U = I.n()).done; ) {
                        var $ = U.value;
                        $.status = T.CANCELED;
                      }
                    } catch (J) {
                      I.e(J);
                    } finally {
                      I.f();
                    }
                    typeof b.xhr < "u" && b.xhr.abort();
                    var B = A(x), Q;
                    try {
                      for (B.s(); !(Q = B.n()).done; ) {
                        var q = Q.value;
                        this.emit("canceled", q);
                      }
                    } catch (J) {
                      B.e(J);
                    } finally {
                      B.f();
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
                    for (var x = arguments.length, I = new Array(x > 1 ? x - 1 : 0), U = 1; U < x; U++)
                      I[U - 1] = arguments[U];
                    return b.apply(this, I);
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
                  this._transformFiles(b, function(I) {
                    if (x.options.chunking) {
                      var U = I[0];
                      b[0].upload.chunked = x.options.chunking && (x.options.forceChunking || U.size > x.options.chunkSize), b[0].upload.totalChunkCount = Math.ceil(U.size / x.options.chunkSize);
                    }
                    if (b[0].upload.chunked) {
                      var $ = b[0], B = I[0];
                      $.upload.chunks = [];
                      var Q = function() {
                        for (var le = 0; $.upload.chunks[le] !== void 0; )
                          le++;
                        if (!(le >= $.upload.totalChunkCount)) {
                          var ge = le * x.options.chunkSize, Ce = Math.min(ge + x.options.chunkSize, B.size), Ke = {
                            name: x._getParamName(0),
                            data: B.webkitSlice ? B.webkitSlice(ge, Ce) : B.slice(ge, Ce),
                            filename: $.upload.filename,
                            chunkIndex: le
                          };
                          $.upload.chunks[le] = {
                            file: $,
                            index: le,
                            dataBlock: Ke,
                            // In case we want to retry.
                            status: T.UPLOADING,
                            progress: 0,
                            retries: 0
                            // The number of times this block has been retried.
                          }, x._uploadData(b, [Ke]);
                        }
                      };
                      if ($.upload.finishedChunkUpload = function(re, le) {
                        var ge = !0;
                        re.status = T.SUCCESS, re.dataBlock = null, re.xhr = null;
                        for (var Ce = 0; Ce < $.upload.totalChunkCount; Ce++) {
                          if ($.upload.chunks[Ce] === void 0)
                            return Q();
                          $.upload.chunks[Ce].status !== T.SUCCESS && (ge = !1);
                        }
                        ge && x.options.chunksUploaded($, function() {
                          x._finished(b, le, null);
                        });
                      }, x.options.parallelChunkUploads)
                        for (var q = 0; q < $.upload.totalChunkCount; q++)
                          Q();
                      else
                        Q();
                    } else {
                      for (var J = [], _ = 0; _ < b.length; _++)
                        J[_] = {
                          name: x._getParamName(_),
                          data: I[_],
                          filename: b[_].upload.filename
                        };
                      x._uploadData(b, J);
                    }
                  });
                }
                /// Returns the right chunk for given file and xhr
              }, {
                key: "_getChunk",
                value: function(b, x) {
                  for (var I = 0; I < b.upload.totalChunkCount; I++)
                    if (b.upload.chunks[I] !== void 0 && b.upload.chunks[I].xhr === x)
                      return b.upload.chunks[I];
                }
                // This function actually uploads the file(s) to the server.
                // If dataBlocks contains the actual data to upload (meaning, that this could either be transformed
                // files, or individual chunks for chunked upload).
              }, {
                key: "_uploadData",
                value: function(b, x) {
                  var I = this, U = new XMLHttpRequest(), $ = A(b), B;
                  try {
                    for ($.s(); !(B = $.n()).done; ) {
                      var Q = B.value;
                      Q.xhr = U;
                    }
                  } catch (Ee) {
                    $.e(Ee);
                  } finally {
                    $.f();
                  }
                  b[0].upload.chunked && (b[0].upload.chunks[x[0].chunkIndex].xhr = U);
                  var q = this.resolveOption(this.options.method, b), J = this.resolveOption(this.options.url, b);
                  U.open(q, J, !0);
                  var _ = this.resolveOption(this.options.timeout, b);
                  _ && (U.timeout = this.resolveOption(this.options.timeout, b)), U.withCredentials = !!this.options.withCredentials, U.onload = function(Ee) {
                    I._finishedUploading(b, U, Ee);
                  }, U.ontimeout = function() {
                    I._handleUploadError(b, U, "Request timedout after ".concat(I.options.timeout / 1e3, " seconds"));
                  }, U.onerror = function() {
                    I._handleUploadError(b, U);
                  };
                  var re = U.upload != null ? U.upload : U;
                  re.onprogress = function(Ee) {
                    return I._updateFilesUploadProgress(b, U, Ee);
                  };
                  var le = {
                    Accept: "application/json",
                    "Cache-Control": "no-cache",
                    "X-Requested-With": "XMLHttpRequest"
                  };
                  this.options.headers && T.extend(le, this.options.headers);
                  for (var ge in le) {
                    var Ce = le[ge];
                    Ce && U.setRequestHeader(ge, Ce);
                  }
                  var Ke = new FormData();
                  if (this.options.params) {
                    var tt = this.options.params;
                    typeof tt == "function" && (tt = tt.call(this, b, U, b[0].upload.chunked ? this._getChunk(b[0], U) : null));
                    for (var _e in tt) {
                      var G = tt[_e];
                      if (Array.isArray(G))
                        for (var K = 0; K < G.length; K++)
                          Ke.append(_e, G[K]);
                      else
                        Ke.append(_e, G);
                    }
                  }
                  var te = A(b), ce;
                  try {
                    for (te.s(); !(ce = te.n()).done; ) {
                      var Se = ce.value;
                      this.emit("sending", Se, U, Ke);
                    }
                  } catch (Ee) {
                    te.e(Ee);
                  } finally {
                    te.f();
                  }
                  this.options.uploadMultiple && this.emit("sendingmultiple", b, U, Ke), this._addFormElementData(Ke);
                  for (var Me = 0; Me < x.length; Me++) {
                    var Ae = x[Me];
                    Ke.append(Ae.name, Ae.data, Ae.filename);
                  }
                  this.submitRequest(U, Ke, b);
                }
                // Transforms all files with this.options.transformFile and invokes done with the transformed files when done.
              }, {
                key: "_transformFiles",
                value: function(b, x) {
                  for (var I = this, U = [], $ = 0, B = function(J) {
                    I.options.transformFile.call(I, b[J], function(_) {
                      U[J] = _, ++$ === b.length && x(U);
                    });
                  }, Q = 0; Q < b.length; Q++)
                    B(Q);
                }
                // Takes care of adding other input elements of the form to the AJAX request
              }, {
                key: "_addFormElementData",
                value: function(b) {
                  if (this.element.tagName === "FORM") {
                    var x = A(this.element.querySelectorAll("input, textarea, select, button")), I;
                    try {
                      for (x.s(); !(I = x.n()).done; ) {
                        var U = I.value, $ = U.getAttribute("name"), B = U.getAttribute("type");
                        if (B && (B = B.toLowerCase()), !(typeof $ > "u" || $ === null))
                          if (U.tagName === "SELECT" && U.hasAttribute("multiple")) {
                            var Q = A(U.options, !0), q;
                            try {
                              for (Q.s(); !(q = Q.n()).done; ) {
                                var J = q.value;
                                J.selected && b.append($, J.value);
                              }
                            } catch (_) {
                              Q.e(_);
                            } finally {
                              Q.f();
                            }
                          } else (!B || B !== "checkbox" && B !== "radio" || U.checked) && b.append($, U.value);
                      }
                    } catch (_) {
                      x.e(_);
                    } finally {
                      x.f();
                    }
                  }
                }
                // Invoked when there is new progress information about given files.
                // If e is not provided, it is assumed that the upload is finished.
              }, {
                key: "_updateFilesUploadProgress",
                value: function(b, x, I) {
                  if (b[0].upload.chunked) {
                    var Q = b[0], q = this._getChunk(Q, x);
                    I ? (q.progress = 100 * I.loaded / I.total, q.total = I.total, q.bytesSent = I.loaded) : (q.progress = 100, q.bytesSent = q.total), Q.upload.progress = 0, Q.upload.total = 0, Q.upload.bytesSent = 0;
                    for (var J = 0; J < Q.upload.totalChunkCount; J++)
                      Q.upload.chunks[J] && typeof Q.upload.chunks[J].progress < "u" && (Q.upload.progress += Q.upload.chunks[J].progress, Q.upload.total += Q.upload.chunks[J].total, Q.upload.bytesSent += Q.upload.chunks[J].bytesSent);
                    Q.upload.progress = Q.upload.progress / Q.upload.totalChunkCount, this.emit("uploadprogress", Q, Q.upload.progress, Q.upload.bytesSent);
                  } else {
                    var U = A(b), $;
                    try {
                      for (U.s(); !($ = U.n()).done; ) {
                        var B = $.value;
                        B.upload.total && B.upload.bytesSent && B.upload.bytesSent == B.upload.total || (I ? (B.upload.progress = 100 * I.loaded / I.total, B.upload.total = I.total, B.upload.bytesSent = I.loaded) : (B.upload.progress = 100, B.upload.bytesSent = B.upload.total), this.emit("uploadprogress", B, B.upload.progress, B.upload.bytesSent));
                      }
                    } catch (_) {
                      U.e(_);
                    } finally {
                      U.f();
                    }
                  }
                }
              }, {
                key: "_finishedUploading",
                value: function(b, x, I) {
                  var U;
                  if (b[0].status !== T.CANCELED && x.readyState === 4) {
                    if (x.responseType !== "arraybuffer" && x.responseType !== "blob" && (U = x.responseText, x.getResponseHeader("content-type") && ~x.getResponseHeader("content-type").indexOf("application/json")))
                      try {
                        U = JSON.parse(U);
                      } catch ($) {
                        I = $, U = "Invalid JSON response from server.";
                      }
                    this._updateFilesUploadProgress(b, x), 200 <= x.status && x.status < 300 ? b[0].upload.chunked ? b[0].upload.finishedChunkUpload(this._getChunk(b[0], x), U) : this._finished(b, U, I) : this._handleUploadError(b, x, U);
                  }
                }
              }, {
                key: "_handleUploadError",
                value: function(b, x, I) {
                  if (b[0].status !== T.CANCELED) {
                    if (b[0].upload.chunked && this.options.retryChunks) {
                      var U = this._getChunk(b[0], x);
                      if (U.retries++ < this.options.retryChunksLimit) {
                        this._uploadData(b, [U.dataBlock]);
                        return;
                      } else
                        console.warn("Retried this chunk too often. Giving up.");
                    }
                    this._errorProcessing(b, I || this.options.dictResponseError.replace("{{statusCode}}", x.status), x);
                  }
                }
              }, {
                key: "submitRequest",
                value: function(b, x, I) {
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
                value: function(b, x, I) {
                  var U = A(b), $;
                  try {
                    for (U.s(); !($ = U.n()).done; ) {
                      var B = $.value;
                      B.status = T.SUCCESS, this.emit("success", B, x, I), this.emit("complete", B);
                    }
                  } catch (Q) {
                    U.e(Q);
                  } finally {
                    U.f();
                  }
                  if (this.options.uploadMultiple && (this.emit("successmultiple", b, x, I), this.emit("completemultiple", b)), this.options.autoProcessQueue)
                    return this.processQueue();
                }
                // Called internally when processing is finished.
                // Individual callbacks have to be called in the appropriate sections.
              }, {
                key: "_errorProcessing",
                value: function(b, x, I) {
                  var U = A(b), $;
                  try {
                    for (U.s(); !($ = U.n()).done; ) {
                      var B = $.value;
                      B.status = T.ERROR, this.emit("error", B, x, I), this.emit("complete", B);
                    }
                  } catch (Q) {
                    U.e(Q);
                  } finally {
                    U.f();
                  }
                  if (this.options.uploadMultiple && (this.emit("errormultiple", b, x, I), this.emit("completemultiple", b)), this.options.autoProcessQueue)
                    return this.processQueue();
                }
              }], [{
                key: "initClass",
                value: function() {
                  this.prototype.Emitter = h, this.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"], this.prototype._thumbnailQueue = [], this.prototype._processingThumbnail = !1;
                }
                // global utility
              }, {
                key: "extend",
                value: function(b) {
                  for (var x = arguments.length, I = new Array(x > 1 ? x - 1 : 0), U = 1; U < x; U++)
                    I[U - 1] = arguments[U];
                  for (var $ = 0, B = I; $ < B.length; $++) {
                    var Q = B[$];
                    for (var q in Q) {
                      var J = Q[q];
                      b[q] = J;
                    }
                  }
                  return b;
                }
              }, {
                key: "uuidv4",
                value: function() {
                  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(b) {
                    var x = Math.random() * 16 | 0, I = b === "x" ? x : x & 3 | 8;
                    return I.toString(16);
                  });
                }
              }]), T;
            }(h);
            X.initClass(), X.version = "5.9.3", X.options = {}, X.optionsForElement = function(R) {
              if (R.getAttribute("id"))
                return X.options[fe(R.getAttribute("id"))];
            }, X.instances = [], X.forElement = function(R) {
              if (typeof R == "string" && (R = document.querySelector(R)), (R != null ? R.dropzone : void 0) == null)
                throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
              return R.dropzone;
            }, X.autoDiscover = !0, X.discover = function() {
              var R;
              if (document.querySelectorAll)
                R = document.querySelectorAll(".dropzone");
              else {
                R = [];
                var M = function(L) {
                  return function() {
                    var b = [], x = A(L), I;
                    try {
                      for (x.s(); !(I = x.n()).done; ) {
                        var U = I.value;
                        /(^| )dropzone($| )/.test(U.className) ? b.push(R.push(U)) : b.push(void 0);
                      }
                    } catch ($) {
                      x.e($);
                    } finally {
                      x.f();
                    }
                    return b;
                  }();
                };
                M(document.getElementsByTagName("div")), M(document.getElementsByTagName("form"));
              }
              return function() {
                var T = [], L = A(R), b;
                try {
                  for (L.s(); !(b = L.n()).done; ) {
                    var x = b.value;
                    X.optionsForElement(x) !== !1 ? T.push(new X(x)) : T.push(void 0);
                  }
                } catch (I) {
                  L.e(I);
                } finally {
                  L.f();
                }
                return T;
              }();
            }, X.blockedBrowsers = [
              // The mac os and windows phone version of opera 12 seems to have a problem with the File drag'n'drop API.
              /opera.*(Macintosh|Windows Phone).*version\/12/i
            ], X.isBrowserSupported = function() {
              var R = !0;
              if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector)
                if (!("classList" in document.createElement("a")))
                  R = !1;
                else {
                  X.blacklistedBrowsers !== void 0 && (X.blockedBrowsers = X.blacklistedBrowsers);
                  var M = A(X.blockedBrowsers), T;
                  try {
                    for (M.s(); !(T = M.n()).done; ) {
                      var L = T.value;
                      if (L.test(navigator.userAgent)) {
                        R = !1;
                        continue;
                      }
                    }
                  } catch (b) {
                    M.e(b);
                  } finally {
                    M.f();
                  }
                }
              else
                R = !1;
              return R;
            }, X.dataURItoBlob = function(R) {
              for (var M = atob(R.split(",")[1]), T = R.split(",")[0].split(":")[1].split(";")[0], L = new ArrayBuffer(M.length), b = new Uint8Array(L), x = 0, I = M.length, U = 0 <= I; U ? x <= I : x >= I; U ? x++ : x--)
                b[x] = M.charCodeAt(x);
              return new Blob([L], {
                type: T
              });
            };
            var he = function(M, T) {
              return M.filter(function(L) {
                return L !== T;
              }).map(function(L) {
                return L;
              });
            }, fe = function(M) {
              return M.replace(/[\-_](\w)/g, function(T) {
                return T.charAt(1).toUpperCase();
              });
            };
            X.createElement = function(R) {
              var M = document.createElement("div");
              return M.innerHTML = R, M.childNodes[0];
            }, X.elementInside = function(R, M) {
              if (R === M)
                return !0;
              for (; R = R.parentNode; )
                if (R === M)
                  return !0;
              return !1;
            }, X.getElement = function(R, M) {
              var T;
              if (typeof R == "string" ? T = document.querySelector(R) : R.nodeType != null && (T = R), T == null)
                throw new Error("Invalid `".concat(M, "` option provided. Please provide a CSS selector or a plain HTML element."));
              return T;
            }, X.getElements = function(R, M) {
              var T, L;
              if (R instanceof Array) {
                L = [];
                try {
                  var b = A(R, !0), x;
                  try {
                    for (b.s(); !(x = b.n()).done; )
                      T = x.value, L.push(this.getElement(T, M));
                  } catch ($) {
                    b.e($);
                  } finally {
                    b.f();
                  }
                } catch {
                  L = null;
                }
              } else if (typeof R == "string") {
                L = [];
                var I = A(document.querySelectorAll(R)), U;
                try {
                  for (I.s(); !(U = I.n()).done; )
                    T = U.value, L.push(T);
                } catch ($) {
                  I.e($);
                } finally {
                  I.f();
                }
              } else R.nodeType != null && (L = [R]);
              if (L == null || !L.length)
                throw new Error("Invalid `".concat(M, "` option provided. Please provide a CSS selector, a plain HTML element or a list of those."));
              return L;
            }, X.confirm = function(R, M, T) {
              if (window.confirm(R))
                return M();
              if (T != null)
                return T();
            }, X.isValidFile = function(R, M) {
              if (!M)
                return !0;
              M = M.split(",");
              var T = R.type, L = T.replace(/\/.*$/, ""), b = A(M), x;
              try {
                for (b.s(); !(x = b.n()).done; ) {
                  var I = x.value;
                  if (I = I.trim(), I.charAt(0) === ".") {
                    if (R.name.toLowerCase().indexOf(I.toLowerCase(), R.name.length - I.length) !== -1)
                      return !0;
                  } else if (/\/\*$/.test(I)) {
                    if (L === I.replace(/\/.*$/, ""))
                      return !0;
                  } else if (T === I)
                    return !0;
                }
              } catch (U) {
                b.e(U);
              } finally {
                b.f();
              }
              return !1;
            }, typeof jQuery < "u" && jQuery !== null && (jQuery.fn.dropzone = function(R) {
              return this.each(function() {
                return new X(this, R);
              });
            }), X.ADDED = "added", X.QUEUED = "queued", X.ACCEPTED = X.QUEUED, X.UPLOADING = "uploading", X.PROCESSING = X.UPLOADING, X.CANCELED = "canceled", X.ERROR = "error", X.SUCCESS = "success";
            var Te = function(M) {
              M.naturalWidth;
              var T = M.naturalHeight, L = document.createElement("canvas");
              L.width = 1, L.height = T;
              var b = L.getContext("2d");
              b.drawImage(M, 0, 0);
              for (var x = b.getImageData(1, 0, 1, T), I = x.data, U = 0, $ = T, B = T; B > U; ) {
                var Q = I[(B - 1) * 4 + 3];
                Q === 0 ? $ = B : U = B, B = $ + U >> 1;
              }
              var q = B / T;
              return q === 0 ? 1 : q;
            }, Ie = function(M, T, L, b, x, I, U, $, B, Q) {
              var q = Te(T);
              return M.drawImage(T, L, b, x, I, U, $, B, Q / q);
            }, xe = /* @__PURE__ */ function() {
              function R() {
                O(this, R);
              }
              return N(R, null, [{
                key: "initClass",
                value: function() {
                  this.KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                }
              }, {
                key: "encode64",
                value: function(T) {
                  for (var L = "", b = void 0, x = void 0, I = "", U = void 0, $ = void 0, B = void 0, Q = "", q = 0; b = T[q++], x = T[q++], I = T[q++], U = b >> 2, $ = (b & 3) << 4 | x >> 4, B = (x & 15) << 2 | I >> 6, Q = I & 63, isNaN(x) ? B = Q = 64 : isNaN(I) && (Q = 64), L = L + this.KEY_STR.charAt(U) + this.KEY_STR.charAt($) + this.KEY_STR.charAt(B) + this.KEY_STR.charAt(Q), b = x = I = "", U = $ = B = Q = "", q < T.length; )
                    ;
                  return L;
                }
              }, {
                key: "restore",
                value: function(T, L) {
                  if (!T.match("data:image/jpeg;base64,"))
                    return L;
                  var b = this.decode64(T.replace("data:image/jpeg;base64,", "")), x = this.slice2Segments(b), I = this.exifManipulation(L, x);
                  return "data:image/jpeg;base64,".concat(this.encode64(I));
                }
              }, {
                key: "exifManipulation",
                value: function(T, L) {
                  var b = this.getExifArray(L), x = this.insertExif(T, b), I = new Uint8Array(x);
                  return I;
                }
              }, {
                key: "getExifArray",
                value: function(T) {
                  for (var L = void 0, b = 0; b < T.length; ) {
                    if (L = T[b], L[0] === 255 & L[1] === 225)
                      return L;
                    b++;
                  }
                  return [];
                }
              }, {
                key: "insertExif",
                value: function(T, L) {
                  var b = T.replace("data:image/jpeg;base64,", ""), x = this.decode64(b), I = x.indexOf(255, 3), U = x.slice(0, I), $ = x.slice(I), B = U;
                  return B = B.concat(L), B = B.concat($), B;
                }
              }, {
                key: "slice2Segments",
                value: function(T) {
                  for (var L = 0, b = []; ; ) {
                    var x;
                    if (T[L] === 255 & T[L + 1] === 218)
                      break;
                    if (T[L] === 255 & T[L + 1] === 216)
                      L += 2;
                    else {
                      x = T[L + 2] * 256 + T[L + 3];
                      var I = L + x + 2, U = T.slice(L, I);
                      b.push(U), L = I;
                    }
                    if (L > T.length)
                      break;
                  }
                  return b;
                }
              }, {
                key: "decode64",
                value: function(T) {
                  var L = void 0, b = void 0, x = "", I = void 0, U = void 0, $ = void 0, B = "", Q = 0, q = [], J = /[^A-Za-z0-9\+\/\=]/g;
                  for (J.exec(T) && console.warn(`There were invalid base64 characters in the input text.
Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='
Expect errors in decoding.`), T = T.replace(/[^A-Za-z0-9\+\/\=]/g, ""); I = this.KEY_STR.indexOf(T.charAt(Q++)), U = this.KEY_STR.indexOf(T.charAt(Q++)), $ = this.KEY_STR.indexOf(T.charAt(Q++)), B = this.KEY_STR.indexOf(T.charAt(Q++)), L = I << 2 | U >> 4, b = (U & 15) << 4 | $ >> 2, x = ($ & 3) << 6 | B, q.push(L), $ !== 64 && q.push(b), B !== 64 && q.push(x), L = b = x = "", I = U = $ = B = "", Q < T.length; )
                    ;
                  return q;
                }
              }]), R;
            }();
            xe.initClass();
            var je = function(M, T) {
              var L = !1, b = !0, x = M.document, I = x.documentElement, U = x.addEventListener ? "addEventListener" : "attachEvent", $ = x.addEventListener ? "removeEventListener" : "detachEvent", B = x.addEventListener ? "" : "on", Q = function J(_) {
                if (!(_.type === "readystatechange" && x.readyState !== "complete") && ((_.type === "load" ? M : x)[$](B + _.type, J, !1), !L && (L = !0)))
                  return T.call(M, _.type || _);
              }, q = function J() {
                try {
                  I.doScroll("left");
                } catch {
                  setTimeout(J, 50);
                  return;
                }
                return Q("poll");
              };
              if (x.readyState !== "complete") {
                if (x.createEventObject && I.doScroll) {
                  try {
                    b = !M.frameElement;
                  } catch {
                  }
                  b && q();
                }
                return x[U](B + "DOMContentLoaded", Q, !1), x[U](B + "readystatechange", Q, !1), M[U](B + "load", Q, !1);
              }
            };
            X._autoDiscoverFunction = function() {
              if (X.autoDiscover)
                return X.discover();
            }, je(window, X._autoDiscoverFunction);
            function Ne(R, M) {
              return typeof R < "u" && R !== null ? M(R) : void 0;
            }
            function Le(R, M, T) {
              if (typeof R < "u" && R !== null && typeof R[M] == "function")
                return T(R, M);
            }
            window.Dropzone = X;
            var be = X;
          }(), c;
        }()
      );
    });
  }(ea)), ea.exports;
}
var $c = Vc();
const Rs = /* @__PURE__ */ La($c);
Rs.autoDiscover = !1;
const Bc = {
  name: "FileUpload",
  mixins: [fn],
  props: {
    name: String,
    modelValue: {}
  },
  data() {
    return {
      files: [],
      dropzone: null,
      placeholder: ""
    };
  },
  mounted() {
    const t = this.$parent._.parent.data.csrf;
    (this.editable || this.preview) && (this.dropzone = new Rs(this.$refs.dropzone, {
      url: "/api/generic/media/upload",
      addRemoveLinks: !0,
      dictDefaultMessage: "",
      sending: (e, r, a) => {
        a.append("_token", t);
      },
      success: (e, r) => {
        this.files.push(r);
      },
      complete: (e) => {
        this.dropzone.removeFile(e);
      }
    }));
  },
  created() {
    var e;
    const t = (e = this.modelValue) == null ? void 0 : e.value;
    if (Array.isArray(t))
      this.files = [...t];
    else if (t && typeof t == "object") {
      const r = Object.keys(t).length ? Object.values(t) : [];
      this.files = [...r];
    } else t ? this.files = [t] : this.files = [];
  },
  watch: {
    files: {
      handler(t) {
        this.$emit("update:modelValue", {
          ...this.modelValue,
          value: [...t]
        });
      },
      deep: !0
    }
  },
  methods: {
    deleteFile(t, e) {
      vt.delete(`/api/generic/media?path=${e.path}`).then((r) => {
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
      return JSON.stringify(this.files.map((t) => ({
        path: t.path,
        url: t.url,
        name: t.file_name,
        mime_type: t.mime_type
      })));
    }
  }
}, Hc = { class: "file-upload flex-col" }, zc = ["name", "value"], Gc = {
  key: 0,
  class: "flex flex-row gap-4 mt-1 mb-[55px]"
}, Wc = { class: "preview" }, Yc = { class: "file-upload-preview" }, Kc = ["src", "title"], Xc = {
  key: 1,
  class: "svg",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true"
}, Jc = ["href"], Qc = { class: "file-upload-title line-clamp-2 hover:text-blue-500" }, Zc = ["onClick"], qc = {
  key: 1,
  class: "inline-block text-sm text-gray-600 mt-1.5 brand-200"
};
function _c(t, e, r, a, i, c) {
  var n;
  return Z(), ne("div", Hc, [
    k("input", {
      type: "hidden",
      name: r.name,
      value: c.valueJson
    }, null, 8, zc),
    i.files.length ? (Z(), ne("div", Gc, [
      (Z(!0), ne(Ct, null, bn(i.files, (l, o) => (Z(), ne("div", {
        key: `file_${l == null ? void 0 : l.id}_${o}`,
        class: "file-upload-file"
      }, [
        k("div", Wc, [
          k("span", Yc, [
            c.isImage(l.mime_type) ? (Z(), ne("img", {
              key: 0,
              class: "img",
              src: l.url,
              title: l.name
            }, null, 8, Kc)) : (Z(), ne("svg", Xc, e[0] || (e[0] = [
              k("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              }, null, -1)
            ])))
          ]),
          k("a", {
            href: l.url,
            target: "_blank",
            class: "link"
          }, [
            k("div", Qc, Ve(l.name), 1)
          ], 8, Jc),
          t.editable ? (Z(), ne("a", {
            key: 0,
            class: "file-upload-file-remove",
            onClick: (s) => c.deleteFile(o, l)
          }, e[1] || (e[1] = [
            k("svg", {
              width: "14",
              height: "16",
              viewBox: "0 0 14 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, [
              k("path", {
                d: "M9.66667 3.99992V3.46659C9.66667 2.71985 9.66667 2.34648 9.52134 2.06126C9.39351 1.81038 9.18954 1.60641 8.93865 1.47858C8.65344 1.33325 8.28007 1.33325 7.53333 1.33325H6.46667C5.71993 1.33325 5.34656 1.33325 5.06135 1.47858C4.81046 1.60641 4.60649 1.81038 4.47866 2.06126C4.33333 2.34648 4.33333 2.71985 4.33333 3.46659V3.99992M5.66667 7.66659V10.9999M8.33333 7.66659V10.9999M1 3.99992H13M11.6667 3.99992V11.4666C11.6667 12.5867 11.6667 13.1467 11.4487 13.5746C11.2569 13.9509 10.951 14.2569 10.5746 14.4486C10.1468 14.6666 9.58677 14.6666 8.46667 14.6666H5.53333C4.41323 14.6666 3.85318 14.6666 3.42535 14.4486C3.04903 14.2569 2.74307 13.9509 2.55132 13.5746C2.33333 13.1467 2.33333 12.5867 2.33333 11.4666V3.99992",
                stroke: "#667085",
                "stroke-width": "1.5",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              })
            ], -1)
          ]), 8, Zc)) : De("", !0)
        ])
      ]))), 128))
    ])) : De("", !0),
    k("div", {
      class: nt(["dropzone", r.modelValue.class]),
      ref: "dropzone"
    }, e[2] || (e[2] = [
      k("div", { class: "placeholder" }, [
        k("div", null, [
          k("svg", {
            width: "20",
            height: "18",
            viewBox: "0 0 20 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            k("path", {
              d: "M6.66602 12.3333L9.99935 9M9.99935 9L13.3327 12.3333M9.99935 9V16.5M16.666 12.9524C17.6839 12.1117 18.3327 10.8399 18.3327 9.41667C18.3327 6.88536 16.2807 4.83333 13.7493 4.83333C13.5673 4.83333 13.3969 4.73833 13.3044 4.58145C12.2177 2.73736 10.2114 1.5 7.91602 1.5C4.46424 1.5 1.66602 4.29822 1.66602 7.75C1.66602 9.47175 2.36222 11.0309 3.48847 12.1613",
              stroke: "#475467",
              "stroke-width": "1.66667",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            })
          ])
        ]),
        k("div", null, [
          k("p", null, [
            k("span", null, "Click to upload"),
            k("span", null, " or drag and drop")
          ]),
          k("span", null, "(max. 20MB)")
        ])
      ], -1)
    ]), 2),
    (n = r.modelValue) != null && n.hint ? (Z(), ne("p", qc, Ve(r.modelValue.hint), 1)) : De("", !0)
  ]);
}
const Is = /* @__PURE__ */ bt(Bc, [["render", _c]]);
var mr = { exports: {} };
mr.exports;
var Oi;
function ed() {
  return Oi || (Oi = 1, function(t, e) {
    var r = 200, a = "__lodash_hash_undefined__", i = 9007199254740991, c = "[object Arguments]", n = "[object Array]", l = "[object Boolean]", o = "[object Date]", s = "[object Error]", u = "[object Function]", d = "[object GeneratorFunction]", h = "[object Map]", p = "[object Number]", f = "[object Object]", v = "[object Promise]", m = "[object RegExp]", g = "[object Set]", y = "[object String]", S = "[object Symbol]", E = "[object WeakMap]", A = "[object ArrayBuffer]", w = "[object DataView]", P = "[object Float32Array]", O = "[object Float64Array]", D = "[object Int8Array]", N = "[object Int16Array]", j = "[object Int32Array]", H = "[object Uint8Array]", V = "[object Uint8ClampedArray]", z = "[object Uint16Array]", Y = "[object Uint32Array]", W = /[\\^$.*+?()[\]{}|]/g, ae = /\w*$/, X = /^\[object .+?Constructor\]$/, he = /^(?:0|[1-9]\d*)$/, fe = {};
    fe[c] = fe[n] = fe[A] = fe[w] = fe[l] = fe[o] = fe[P] = fe[O] = fe[D] = fe[N] = fe[j] = fe[h] = fe[p] = fe[f] = fe[m] = fe[g] = fe[y] = fe[S] = fe[H] = fe[V] = fe[z] = fe[Y] = !0, fe[s] = fe[u] = fe[E] = !1;
    var Te = typeof qr == "object" && qr && qr.Object === Object && qr, Ie = typeof self == "object" && self && self.Object === Object && self, xe = Te || Ie || Function("return this")(), je = e && !e.nodeType && e, Ne = je && !0 && t && !t.nodeType && t, Le = Ne && Ne.exports === je;
    function be(C, ee) {
      return C.set(ee[0], ee[1]), C;
    }
    function R(C, ee) {
      return C.add(ee), C;
    }
    function M(C, ee) {
      for (var de = -1, Ue = C ? C.length : 0; ++de < Ue && ee(C[de], de, C) !== !1; )
        ;
      return C;
    }
    function T(C, ee) {
      for (var de = -1, Ue = ee.length, Et = C.length; ++de < Ue; )
        C[Et + de] = ee[de];
      return C;
    }
    function L(C, ee, de, Ue) {
      for (var Et = -1, Mt = C ? C.length : 0; ++Et < Mt; )
        de = ee(de, C[Et], Et, C);
      return de;
    }
    function b(C, ee) {
      for (var de = -1, Ue = Array(C); ++de < C; )
        Ue[de] = ee(de);
      return Ue;
    }
    function x(C, ee) {
      return C == null ? void 0 : C[ee];
    }
    function I(C) {
      var ee = !1;
      if (C != null && typeof C.toString != "function")
        try {
          ee = !!(C + "");
        } catch {
        }
      return ee;
    }
    function U(C) {
      var ee = -1, de = Array(C.size);
      return C.forEach(function(Ue, Et) {
        de[++ee] = [Et, Ue];
      }), de;
    }
    function $(C, ee) {
      return function(de) {
        return C(ee(de));
      };
    }
    function B(C) {
      var ee = -1, de = Array(C.size);
      return C.forEach(function(Ue) {
        de[++ee] = Ue;
      }), de;
    }
    var Q = Array.prototype, q = Function.prototype, J = Object.prototype, _ = xe["__core-js_shared__"], re = function() {
      var C = /[^.]+$/.exec(_ && _.keys && _.keys.IE_PROTO || "");
      return C ? "Symbol(src)_1." + C : "";
    }(), le = q.toString, ge = J.hasOwnProperty, Ce = J.toString, Ke = RegExp(
      "^" + le.call(ge).replace(W, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    ), tt = Le ? xe.Buffer : void 0, _e = xe.Symbol, G = xe.Uint8Array, K = $(Object.getPrototypeOf, Object), te = Object.create, ce = J.propertyIsEnumerable, Se = Q.splice, Me = Object.getOwnPropertySymbols, Ae = tt ? tt.isBuffer : void 0, Ee = $(Object.keys, Object), He = Xn(xe, "DataView"), Oe = Xn(xe, "Map"), we = Xn(xe, "Promise"), Re = Xn(xe, "Set"), Be = Xn(xe, "WeakMap"), ke = Xn(Object, "create"), at = Un(He), zt = Un(Oe), Mn = Un(we), Vt = Un(Re), Gt = Un(Be), lr = _e ? _e.prototype : void 0, ln = lr ? lr.valueOf : void 0;
    function St(C) {
      var ee = -1, de = C ? C.length : 0;
      for (this.clear(); ++ee < de; ) {
        var Ue = C[ee];
        this.set(Ue[0], Ue[1]);
      }
    }
    function Wt() {
      this.__data__ = ke ? ke(null) : {};
    }
    function hn(C) {
      return this.has(C) && delete this.__data__[C];
    }
    function ur(C) {
      var ee = this.__data__;
      if (ke) {
        var de = ee[C];
        return de === a ? void 0 : de;
      }
      return ge.call(ee, C) ? ee[C] : void 0;
    }
    function Yn(C) {
      var ee = this.__data__;
      return ke ? ee[C] !== void 0 : ge.call(ee, C);
    }
    function jr(C, ee) {
      var de = this.__data__;
      return de[C] = ke && ee === void 0 ? a : ee, this;
    }
    St.prototype.clear = Wt, St.prototype.delete = hn, St.prototype.get = ur, St.prototype.has = Yn, St.prototype.set = jr;
    function Yt(C) {
      var ee = -1, de = C ? C.length : 0;
      for (this.clear(); ++ee < de; ) {
        var Ue = C[ee];
        this.set(Ue[0], Ue[1]);
      }
    }
    function kr() {
      this.__data__ = [];
    }
    function Vr(C) {
      var ee = this.__data__, de = Qe(ee, C);
      if (de < 0)
        return !1;
      var Ue = ee.length - 1;
      return de == Ue ? ee.pop() : Se.call(ee, de, 1), !0;
    }
    function $r(C) {
      var ee = this.__data__, de = Qe(ee, C);
      return de < 0 ? void 0 : ee[de][1];
    }
    function Br(C) {
      return Qe(this.__data__, C) > -1;
    }
    function Hr(C, ee) {
      var de = this.__data__, Ue = Qe(de, C);
      return Ue < 0 ? de.push([C, ee]) : de[Ue][1] = ee, this;
    }
    Yt.prototype.clear = kr, Yt.prototype.delete = Vr, Yt.prototype.get = $r, Yt.prototype.has = Br, Yt.prototype.set = Hr;
    function pn(C) {
      var ee = -1, de = C ? C.length : 0;
      for (this.clear(); ++ee < de; ) {
        var Ue = C[ee];
        this.set(Ue[0], Ue[1]);
      }
    }
    function zr() {
      this.__data__ = {
        hash: new St(),
        map: new (Oe || Yt)(),
        string: new St()
      };
    }
    function Gr(C) {
      return Xr(this, C).delete(C);
    }
    function Wr(C) {
      return Xr(this, C).get(C);
    }
    function Dt(C) {
      return Xr(this, C).has(C);
    }
    function Yr(C, ee) {
      return Xr(this, C).set(C, ee), this;
    }
    pn.prototype.clear = zr, pn.prototype.delete = Gr, pn.prototype.get = Wr, pn.prototype.has = Dt, pn.prototype.set = Yr;
    function vn(C) {
      this.__data__ = new Yt(C);
    }
    function F() {
      this.__data__ = new Yt();
    }
    function ue(C) {
      return this.__data__.delete(C);
    }
    function se(C) {
      return this.__data__.get(C);
    }
    function pe(C) {
      return this.__data__.has(C);
    }
    function me(C, ee) {
      var de = this.__data__;
      if (de instanceof Yt) {
        var Ue = de.__data__;
        if (!Oe || Ue.length < r - 1)
          return Ue.push([C, ee]), this;
        de = this.__data__ = new pn(Ue);
      }
      return de.set(C, ee), this;
    }
    vn.prototype.clear = F, vn.prototype.delete = ue, vn.prototype.get = se, vn.prototype.has = pe, vn.prototype.set = me;
    function ze(C, ee) {
      var de = Ko(C) || Vl(C) ? b(C.length, String) : [], Ue = de.length, Et = !!Ue;
      for (var Mt in C)
        ge.call(C, Mt) && !(Et && (Mt == "length" || Ul(Mt, Ue))) && de.push(Mt);
      return de;
    }
    function Pe(C, ee, de) {
      var Ue = C[ee];
      (!(ge.call(C, ee) && oi(Ue, de)) || de === void 0 && !(ee in C)) && (C[ee] = de);
    }
    function Qe(C, ee) {
      for (var de = C.length; de--; )
        if (oi(C[de][0], ee))
          return de;
      return -1;
    }
    function st(C, ee) {
      return C && ti(ee, Xo(ee), C);
    }
    function lt(C, ee, de, Ue, Et, Mt, mn) {
      var Lt;
      if (Ue && (Lt = Mt ? Ue(C, Et, Mt, mn) : Ue(C)), Lt !== void 0)
        return Lt;
      if (!Jr(C))
        return C;
      var si = Ko(C);
      if (si) {
        if (Lt = Fl(C), !ee)
          return Rl(C, Lt);
      } else {
        var Jn = Ln(C), li = Jn == u || Jn == d;
        if (Bl(C))
          return Kr(C, ee);
        if (Jn == f || Jn == c || li && !Mt) {
          if (I(C))
            return Mt ? C : {};
          if (Lt = Ml(li ? {} : C), !ee)
            return Il(C, st(Lt, C));
        } else {
          if (!fe[Jn])
            return Mt ? C : {};
          Lt = Ll(C, Jn, lt, ee);
        }
      }
      mn || (mn = new vn());
      var ui = mn.get(C);
      if (ui)
        return ui;
      if (mn.set(C, Lt), !si)
        var ci = de ? Dl(C) : Xo(C);
      return M(ci || C, function(Jo, Qr) {
        ci && (Qr = Jo, Jo = C[Qr]), Pe(Lt, Qr, lt(Jo, ee, de, Ue, Qr, C, mn));
      }), Lt;
    }
    function Ft(C) {
      return Jr(C) ? te(C) : {};
    }
    function ve(C, ee, de) {
      var Ue = ee(C);
      return Ko(C) ? Ue : T(Ue, de(C));
    }
    function mt(C) {
      return Ce.call(C);
    }
    function _t(C) {
      if (!Jr(C) || jl(C))
        return !1;
      var ee = ii(C) || I(C) ? Ke : X;
      return ee.test(Un(C));
    }
    function cr(C) {
      if (!ri(C))
        return Ee(C);
      var ee = [];
      for (var de in Object(C))
        ge.call(C, de) && de != "constructor" && ee.push(de);
      return ee;
    }
    function Kr(C, ee) {
      if (ee)
        return C.slice();
      var de = new C.constructor(C.length);
      return C.copy(de), de;
    }
    function Kn(C) {
      var ee = new C.constructor(C.byteLength);
      return new G(ee).set(new G(C)), ee;
    }
    function dr(C, ee) {
      var de = ee ? Kn(C.buffer) : C.buffer;
      return new C.constructor(de, C.byteOffset, C.byteLength);
    }
    function Tl(C, ee, de) {
      var Ue = ee ? de(U(C), !0) : U(C);
      return L(Ue, be, new C.constructor());
    }
    function Al(C) {
      var ee = new C.constructor(C.source, ae.exec(C));
      return ee.lastIndex = C.lastIndex, ee;
    }
    function Cl(C, ee, de) {
      var Ue = ee ? de(B(C), !0) : B(C);
      return L(Ue, R, new C.constructor());
    }
    function Ol(C) {
      return ln ? Object(ln.call(C)) : {};
    }
    function Pl(C, ee) {
      var de = ee ? Kn(C.buffer) : C.buffer;
      return new C.constructor(de, C.byteOffset, C.length);
    }
    function Rl(C, ee) {
      var de = -1, Ue = C.length;
      for (ee || (ee = Array(Ue)); ++de < Ue; )
        ee[de] = C[de];
      return ee;
    }
    function ti(C, ee, de, Ue) {
      de || (de = {});
      for (var Et = -1, Mt = ee.length; ++Et < Mt; ) {
        var mn = ee[Et], Lt = void 0;
        Pe(de, mn, Lt === void 0 ? C[mn] : Lt);
      }
      return de;
    }
    function Il(C, ee) {
      return ti(C, ni(C), ee);
    }
    function Dl(C) {
      return ve(C, Xo, ni);
    }
    function Xr(C, ee) {
      var de = C.__data__;
      return Nl(ee) ? de[typeof ee == "string" ? "string" : "hash"] : de.map;
    }
    function Xn(C, ee) {
      var de = x(C, ee);
      return _t(de) ? de : void 0;
    }
    var ni = Me ? $(Me, Object) : Gl, Ln = mt;
    (He && Ln(new He(new ArrayBuffer(1))) != w || Oe && Ln(new Oe()) != h || we && Ln(we.resolve()) != v || Re && Ln(new Re()) != g || Be && Ln(new Be()) != E) && (Ln = function(C) {
      var ee = Ce.call(C), de = ee == f ? C.constructor : void 0, Ue = de ? Un(de) : void 0;
      if (Ue)
        switch (Ue) {
          case at:
            return w;
          case zt:
            return h;
          case Mn:
            return v;
          case Vt:
            return g;
          case Gt:
            return E;
        }
      return ee;
    });
    function Fl(C) {
      var ee = C.length, de = C.constructor(ee);
      return ee && typeof C[0] == "string" && ge.call(C, "index") && (de.index = C.index, de.input = C.input), de;
    }
    function Ml(C) {
      return typeof C.constructor == "function" && !ri(C) ? Ft(K(C)) : {};
    }
    function Ll(C, ee, de, Ue) {
      var Et = C.constructor;
      switch (ee) {
        case A:
          return Kn(C);
        case l:
        case o:
          return new Et(+C);
        case w:
          return dr(C, Ue);
        case P:
        case O:
        case D:
        case N:
        case j:
        case H:
        case V:
        case z:
        case Y:
          return Pl(C, Ue);
        case h:
          return Tl(C, Ue, de);
        case p:
        case y:
          return new Et(C);
        case m:
          return Al(C);
        case g:
          return Cl(C, Ue, de);
        case S:
          return Ol(C);
      }
    }
    function Ul(C, ee) {
      return ee = ee ?? i, !!ee && (typeof C == "number" || he.test(C)) && C > -1 && C % 1 == 0 && C < ee;
    }
    function Nl(C) {
      var ee = typeof C;
      return ee == "string" || ee == "number" || ee == "symbol" || ee == "boolean" ? C !== "__proto__" : C === null;
    }
    function jl(C) {
      return !!re && re in C;
    }
    function ri(C) {
      var ee = C && C.constructor, de = typeof ee == "function" && ee.prototype || J;
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
    function kl(C) {
      return lt(C, !0, !0);
    }
    function oi(C, ee) {
      return C === ee || C !== C && ee !== ee;
    }
    function Vl(C) {
      return $l(C) && ge.call(C, "callee") && (!ce.call(C, "callee") || Ce.call(C) == c);
    }
    var Ko = Array.isArray;
    function ai(C) {
      return C != null && Hl(C.length) && !ii(C);
    }
    function $l(C) {
      return zl(C) && ai(C);
    }
    var Bl = Ae || Wl;
    function ii(C) {
      var ee = Jr(C) ? Ce.call(C) : "";
      return ee == u || ee == d;
    }
    function Hl(C) {
      return typeof C == "number" && C > -1 && C % 1 == 0 && C <= i;
    }
    function Jr(C) {
      var ee = typeof C;
      return !!C && (ee == "object" || ee == "function");
    }
    function zl(C) {
      return !!C && typeof C == "object";
    }
    function Xo(C) {
      return ai(C) ? ze(C) : cr(C);
    }
    function Gl() {
      return [];
    }
    function Wl() {
      return !1;
    }
    t.exports = kl;
  }(mr, mr.exports)), mr.exports;
}
var td = ed();
const an = /* @__PURE__ */ La(td), nd = {
  name: "Input",
  mixins: [fn],
  inject: ["possibleFormValues", "getFormValue"],
  props: {
    modelValue: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      input: null
    };
  },
  created() {
    var e, r, a, i, c;
    let t = an((e = this.modelValue) == null ? void 0 : e.value) ?? this.getFormValue(this.possibleFormValues, (r = this.modelValue) == null ? void 0 : r.defined_key);
    ((a = this.modelValue.label) != null && a.includes("signature") || (c = (i = this.modelValue) == null ? void 0 : i.defined_key) != null && c.includes("signature")) && (t == null ? void 0 : t.length) > 0 && (t = t.length > 0 ? "Yes" : "No"), this.input = t;
  },
  watch: {
    input(t) {
      this.modelValue.value = t;
    }
  }
}, rd = ["name", "type", "placeholder"], od = ["textContent"], ad = {
  key: 2,
  class: "inline-block text-sm text-gray-600 mt-1.5 brand-200"
};
function id(t, e, r, a, i, c) {
  var n, l, o;
  return Z(), ne("div", {
    class: nt((n = r.modelValue) == null ? void 0 : n.class)
  }, [
    t.editable ? et((Z(), ne("input", {
      key: 0,
      name: r.modelValue.name,
      type: r.modelValue.type,
      "onUpdate:modelValue": e[0] || (e[0] = (s) => i.input = s),
      placeholder: (l = r.modelValue) == null ? void 0 : l.placeholder
    }, null, 8, rd)), [
      [Oa, i.input]
    ]) : (Z(), ne("p", {
      key: 1,
      textContent: Ve(i.input)
    }, null, 8, od)),
    (o = r.modelValue) != null && o.hint ? (Z(), ne("p", ad, Ve(r.modelValue.hint), 1)) : De("", !0)
  ], 2);
}
const So = /* @__PURE__ */ bt(nd, [["render", id]]), Ds = {
  beforeMount(t, e) {
    t.clickOutsideEvent = (r) => {
      t === r.target || t.contains(r.target) || e.value(r);
    }, document.addEventListener("click", t.clickOutsideEvent);
  },
  unmounted(t) {
    document.removeEventListener("click", t.clickOutsideEvent);
  }
}, sd = {
  name: "Select",
  mixins: [fn],
  directives: {
    clickOutside: Ds
  },
  props: {
    modelValue: {}
  },
  data() {
    return {
      isOpen: !1,
      selectedLabel: null
    };
  },
  created() {
    var t;
    this.selectedLabel = (t = this.modelValue) == null ? void 0 : t.value;
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(t) {
      this.selectedLabel = t, this.isOpen = !1, this.modelValue.value = t;
    }
  },
  watch: {
    modelValue(t) {
      this.selectedLabel = t;
    }
  }
}, ld = ["name", "id", "value"], ud = {
  key: 0,
  class: "absolute z-50 bg-white border border-gray-300 rounded-lg mt-1 w-full max-h-60 overflow-auto"
}, cd = ["onClick"], dd = {
  key: 1,
  class: "inline-block text-sm text-gray-600 mt-1.5 brand-200"
};
function fd(t, e, r, a, i, c) {
  var l, o, s, u, d;
  const n = ts("click-outside");
  return et((Z(), ne("div", {
    class: nt([(l = r.modelValue) == null ? void 0 : l.class, "relative"])
  }, [
    k("input", {
      type: "hidden",
      name: r.modelValue.type,
      id: r.modelValue.name,
      value: i.selectedLabel
    }, null, 8, ld),
    k("div", {
      class: nt(["input-base bg-white cursor-pointer", { "text-gray-400": !i.selectedLabel && ((o = r.modelValue) == null ? void 0 : o.placeholder) }]),
      onClick: e[0] || (e[0] = (...h) => c.toggleDropdown && c.toggleDropdown(...h))
    }, Ve(i.selectedLabel || ((s = r.modelValue) == null ? void 0 : s.placeholder) || "Select an option"), 3),
    i.isOpen ? (Z(), ne("ul", ud, [
      (Z(!0), ne(Ct, null, bn(((u = r.modelValue) == null ? void 0 : u.options) ?? [], (h, p) => (Z(), ne("li", {
        key: p,
        onClick: (f) => c.selectOption(h),
        class: "px-4 py-2 hover:bg-gray-100 cursor-pointer"
      }, Ve(h), 9, cd))), 128))
    ])) : De("", !0),
    (d = r.modelValue) != null && d.hint ? (Z(), ne("p", dd, Ve(r.modelValue.hint), 1)) : De("", !0)
  ], 2)), [
    [n, () => this.isOpen && (this.isOpen = !1)]
  ]);
}
const Fs = /* @__PURE__ */ bt(sd, [["render", fd]]);
/*!
 * Signature Pad v3.0.0-beta.4 | https://github.com/szimek/signature_pad
 * (c) 2020 Szymon Nowak | Released under the MIT license
 */
class Eo {
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
class Ua {
  constructor(e, r, a, i, c, n) {
    this.startPoint = e, this.control2 = r, this.control1 = a, this.endPoint = i, this.startWidth = c, this.endWidth = n;
  }
  static fromPoints(e, r) {
    const a = this.calculateControlPoints(e[0], e[1], e[2]).c2, i = this.calculateControlPoints(e[1], e[2], e[3]).c1;
    return new Ua(e[1], a, i, e[2], r.start, r.end);
  }
  static calculateControlPoints(e, r, a) {
    const i = e.x - r.x, c = e.y - r.y, n = r.x - a.x, l = r.y - a.y, o = { x: (e.x + r.x) / 2, y: (e.y + r.y) / 2 }, s = { x: (r.x + a.x) / 2, y: (r.y + a.y) / 2 }, u = Math.sqrt(i * i + c * c), d = Math.sqrt(n * n + l * l), h = o.x - s.x, p = o.y - s.y, f = d / (u + d), v = { x: s.x + h * f, y: s.y + p * f }, m = r.x - v.x, g = r.y - v.y;
    return {
      c1: new Eo(o.x + m, o.y + g),
      c2: new Eo(s.x + m, s.y + g)
    };
  }
  length() {
    let r = 0, a, i;
    for (let c = 0; c <= 10; c += 1) {
      const n = c / 10, l = this.point(n, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x), o = this.point(n, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y);
      if (c > 0) {
        const s = l - a, u = o - i;
        r += Math.sqrt(s * s + u * u);
      }
      a = l, i = o;
    }
    return r;
  }
  point(e, r, a, i, c) {
    return r * (1 - e) * (1 - e) * (1 - e) + 3 * a * (1 - e) * (1 - e) * e + 3 * i * (1 - e) * e * e + c * e * e * e;
  }
}
function hd(t, e = 250) {
  let r = 0, a = null, i, c, n;
  const l = () => {
    r = Date.now(), a = null, i = t.apply(c, n), a || (c = null, n = []);
  };
  return function(...s) {
    const u = Date.now(), d = e - (u - r);
    return c = this, n = s, d <= 0 || d > e ? (a && (clearTimeout(a), a = null), r = u, i = t.apply(c, n), a || (c = null, n = [])) : a || (a = window.setTimeout(l, d)), i;
  };
}
let pd = class xa {
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
    }, this.penColor = r.penColor || "black", this.backgroundColor = r.backgroundColor || "rgba(0,0,0,0)", this.onBegin = r.onBegin, this.onEnd = r.onEnd, this._strokeMoveUpdate = this.throttle ? hd(xa.prototype._strokeUpdate, this.throttle) : xa.prototype._strokeUpdate, this._ctx = e.getContext("2d"), this.clear(), this.on();
  }
  clear() {
    const { _ctx: e, canvas: r } = this;
    e.fillStyle = this.backgroundColor, e.clearRect(0, 0, r.width, r.height), e.fillRect(0, 0, r.width, r.height), this._data = [], this._reset(), this._isEmpty = !0;
  }
  fromDataURL(e, r = {}, a) {
    const i = new Image(), c = r.ratio || window.devicePixelRatio || 1, n = r.width || this.canvas.width / c, l = r.height || this.canvas.height / c;
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
    const r = e.clientX, a = e.clientY, i = this._createPoint(r, a), c = this._data[this._data.length - 1], n = c.points, l = n.length > 0 && n[n.length - 1], o = l ? i.distanceTo(l) <= this.minDistance : !1, s = c.color;
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
    return new Eo(e - a.left, r - a.top, (/* @__PURE__ */ new Date()).getTime());
  }
  _addPoint(e) {
    const { _lastPoints: r } = this;
    if (r.push(e), r.length > 2) {
      r.length === 3 && r.unshift(r[0]);
      const a = this._calculateCurveWidths(r[1], r[2]), i = Ua.fromPoints(r, a);
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
      const l = n / c, o = l * l, s = o * l, u = 1 - l, d = u * u, h = d * u;
      let p = h * r.startPoint.x;
      p += 3 * d * l * r.control1.x, p += 3 * u * o * r.control2.x, p += s * r.endPoint.x;
      let f = h * r.startPoint.y;
      f += 3 * d * l * r.control1.y, f += 3 * u * o * r.control2.y, f += s * r.endPoint.y;
      const v = Math.min(r.startWidth + s * i, this.maxWidth);
      this._drawCurveSegment(p, f, v);
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
        for (let l = 0; l < n.length; l += 1) {
          const o = n[l], s = new Eo(o.x, o.y, o.time);
          this.penColor = c, l === 0 && this._reset();
          const u = this._addPoint(s);
          u && r({ color: c, curve: u });
        }
      else
        this._reset(), a({
          color: c,
          point: n[0]
        });
    }
  }
  _toSVG() {
    const e = this._data, r = Math.max(window.devicePixelRatio || 1, 1), a = 0, i = 0, c = this.canvas.width / r, n = this.canvas.height / r, l = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    l.setAttribute("width", this.canvas.width.toString()), l.setAttribute("height", this.canvas.height.toString()), this._fromData(e, ({ color: p, curve: f }) => {
      const v = document.createElement("path");
      if (!isNaN(f.control1.x) && !isNaN(f.control1.y) && !isNaN(f.control2.x) && !isNaN(f.control2.y)) {
        const m = `M ${f.startPoint.x.toFixed(3)},${f.startPoint.y.toFixed(3)} C ${f.control1.x.toFixed(3)},${f.control1.y.toFixed(3)} ${f.control2.x.toFixed(3)},${f.control2.y.toFixed(3)} ${f.endPoint.x.toFixed(3)},${f.endPoint.y.toFixed(3)}`;
        v.setAttribute("d", m), v.setAttribute("stroke-width", (f.endWidth * 2.25).toFixed(3)), v.setAttribute("stroke", p), v.setAttribute("fill", "none"), v.setAttribute("stroke-linecap", "round"), l.appendChild(v);
      }
    }, ({ color: p, point: f }) => {
      const v = document.createElement("circle"), m = typeof this.dotSize == "function" ? this.dotSize() : this.dotSize;
      v.setAttribute("r", m.toString()), v.setAttribute("cx", f.x.toString()), v.setAttribute("cy", f.y.toString()), v.setAttribute("fill", p), l.appendChild(v);
    });
    const o = "data:image/svg+xml;base64,", s = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${a} ${i} ${c} ${n}" width="${c}" height="${n}">`;
    let u = l.innerHTML;
    if (u === void 0) {
      const p = document.createElement("dummy"), f = l.childNodes;
      p.innerHTML = "";
      for (let v = 0; v < f.length; v += 1)
        p.appendChild(f[v].cloneNode(!0));
      u = p.innerHTML;
    }
    const h = s + u + "</svg>";
    return o + btoa(h);
  }
};
const vd = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
};
function md(t, e) {
  return Z(), ne("svg", vd, e[0] || (e[0] = [
    k("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M18 6 6 18M6 6l12 12"
    }, null, -1)
  ]));
}
const gd = { render: md }, yd = {
  name: "SignaturePad",
  components: { XClose: gd },
  mixins: [fn],
  props: {
    name: {
      type: String,
      required: !0
    },
    modelValue: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      input: {},
      signaturePad: null,
      updatingFromCanvas: !1
    };
  },
  mounted() {
    let t = this.$refs.signaturePadCanvas;
    t.style.width = "100%", t.style.height = "100%", this.$nextTick(() => {
      var e, r;
      this.resizeCanvas(t), this.signaturePad = new pd(t), this.signaturePad.onEnd = () => {
        this.signaturePad.isEmpty() || (this.updatingFromCanvas = !0, this.input.value = this.signaturePad.toDataURL());
      }, this.modelValue && (this.input = this.modelValue, (e = this.input) != null && e.value && this.signaturePad.fromDataURL((r = this.input) == null ? void 0 : r.value)), this.editable || this.signaturePad.off();
    });
  },
  watch: {
    input: {
      handler: function(e) {
        this.$emit("update:modelValue", this.input);
      },
      deep: !0
    },
    modelValue: {
      handler: function(e) {
        var r;
        if (this.updatingFromCanvas) {
          this.updatingFromCanvas = !1;
          return;
        }
        this.input = this.modelValue, (r = this.input) != null && r.value && this.signaturePad.fromDataURL(this.input.value);
      },
      deep: !0
    }
  },
  methods: {
    resizeCanvas(t) {
      const e = Math.max(window.devicePixelRatio || 1, 1);
      t.width = t.offsetWidth * e, t.height = t.offsetHeight * e, t.getContext("2d").scale(e, e);
    },
    clear() {
      this.input.value = null, this.signaturePad.clear();
    }
  }
}, bd = ["name", "value"], xd = { class: "signature-pad-body rounded-lg border border-dashed border-gray-300 shadow-sm h-[160px] relative" }, Sd = { ref: "signaturePadCanvas" }, Ed = { class: "signature-pad-actions absolute top-2 right-2" }, wd = {
  key: 0,
  class: "inline-block text-sm text-gray-600 mt-1.5 brand-200"
};
function Td(t, e, r, a, i, c) {
  var l, o;
  const n = rn("XClose");
  return Z(), ne("div", {
    class: nt(["signature-pad", (l = r.modelValue) == null ? void 0 : l.class])
  }, [
    k("input", {
      type: "hidden",
      class: "signature-input",
      name: r.name,
      value: i.input
    }, null, 8, bd),
    k("div", xd, [
      k("canvas", Sd, null, 512),
      k("div", Ed, [
        i.input && t.editable ? (Z(), ne("button", {
          key: 0,
          "data-action": "clear",
          type: "button",
          class: "p-1",
          onClick: e[0] || (e[0] = (...s) => c.clear && c.clear(...s))
        }, [
          ie(n, { class: "w-5 h-5 hover:text-red-500" })
        ])) : De("", !0)
      ])
    ]),
    (o = r.modelValue) != null && o.hint ? (Z(), ne("p", wd, Ve(r.modelValue.hint), 1)) : De("", !0)
  ], 2);
}
const Ms = /* @__PURE__ */ bt(yd, [["render", Td]]), Ad = {
  name: "Textarea",
  mixins: [fn],
  props: {
    modelValue: { default: null }
  },
  data() {
    return {
      input: null
    };
  },
  created() {
    this.input = this.modelValue.value;
  },
  watch: {
    input(t) {
      this.modelValue.value = t;
    }
  }
}, Cd = ["name", "placeholder"], Od = { key: 1 }, Pd = {
  key: 2,
  class: "inline-block text-sm text-gray-600 mt-1.5 brand-200"
};
function Rd(t, e, r, a, i, c) {
  var n, l, o;
  return Z(), ne("div", {
    class: nt((n = r.modelValue) == null ? void 0 : n.class)
  }, [
    t.editable ? et((Z(), ne("textarea", {
      key: 0,
      name: r.modelValue.name,
      "onUpdate:modelValue": e[0] || (e[0] = (s) => i.input = s),
      rows: "4",
      placeholder: (l = r.modelValue) == null ? void 0 : l.placeholder
    }, "    ", 8, Cd)), [
      [yt, i.input]
    ]) : (Z(), ne("p", Od, Ve(i.input), 1)),
    (o = r.modelValue) != null && o.hint ? (Z(), ne("p", Pd, Ve(r.modelValue.hint), 1)) : De("", !0)
  ], 2);
}
const Ls = /* @__PURE__ */ bt(Ad, [["render", Rd]]), Id = {
  name: "VParagraph",
  mixins: [fn],
  props: {
    modelValue: {
      type: String,
      default: null
    }
  }
}, Dd = ["innerHTML"], Fd = { key: 1 }, Md = ["innerHTML"], Ld = ["innerHTML"];
function Ud(t, e, r, a, i, c) {
  var n;
  return Z(), ne("div", {
    class: nt(["paragraph text-gray-600", (n = r.modelValue) == null ? void 0 : n.class])
  }, [
    r.modelValue.content_type === "p" ? (Z(), ne("p", {
      key: 0,
      innerHTML: r.modelValue.content
    }, null, 8, Dd)) : De("", !0),
    r.modelValue.content_type === "blockquote" ? (Z(), ne("blockquote", Fd, [
      k("q", {
        innerHTML: r.modelValue.content
      }, null, 8, Md)
    ])) : De("", !0),
    r.modelValue.content_type === "address" ? (Z(), ne("address", {
      key: 2,
      innerHTML: r.modelValue.content
    }, null, 8, Ld)) : De("", !0)
  ], 2);
}
const Us = /* @__PURE__ */ bt(Id, [["render", Ud]]);
function Ns(t) {
  return t instanceof Date || Object.prototype.toString.call(t) === "[object Date]";
}
function $o(t) {
  return Ns(t) ? new Date(t.getTime()) : t == null ? /* @__PURE__ */ new Date(NaN) : new Date(t);
}
function Nd(t) {
  return Ns(t) && !isNaN(t.getTime());
}
function js(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (!(e >= 0 && e <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6");
  var r = $o(t), a = r.getDay(), i = (a + 7 - e) % 7;
  return r.setDate(r.getDate() - i), r.setHours(0, 0, 0, 0), r;
}
function ks(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.firstDayOfWeek, a = r === void 0 ? 0 : r, i = e.firstWeekContainsDate, c = i === void 0 ? 1 : i;
  if (!(c >= 1 && c <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7");
  for (var n = $o(t), l = n.getFullYear(), o = /* @__PURE__ */ new Date(0), s = l + 1; s >= l - 1 && (o.setFullYear(s, 0, c), o.setHours(0, 0, 0, 0), o = js(o, a), !(n.getTime() >= o.getTime())); s--)
    ;
  return o;
}
function Na(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.firstDayOfWeek, a = r === void 0 ? 0 : r, i = e.firstWeekContainsDate, c = i === void 0 ? 1 : i, n = $o(t), l = js(n, a), o = ks(n, {
    firstDayOfWeek: a,
    firstWeekContainsDate: c
  }), s = l.getTime() - o.getTime();
  return Math.round(s / (7 * 24 * 3600 * 1e3)) + 1;
}
var ja = {
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  weekdaysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  firstDayOfWeek: 0,
  firstWeekContainsDate: 1
}, jd = /\[([^\]]+)]|YYYY|YY?|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|Z{1,2}|S{1,3}|w{1,2}|x|X|a|A/g;
function Bt(t) {
  for (var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2, r = "".concat(Math.abs(t)), a = t < 0 ? "-" : ""; r.length < e; )
    r = "0".concat(r);
  return a + r;
}
function Pi(t) {
  return Math.round(t.getTimezoneOffset() / 15) * 15;
}
function Ri(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = t > 0 ? "-" : "+", a = Math.abs(t), i = Math.floor(a / 60), c = a % 60;
  return r + Bt(i, 2) + e + Bt(c, 2);
}
var Ii = function(e, r, a) {
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
    var a = r.meridiem || Ii;
    return a(e.getHours(), e.getMinutes(), !1);
  },
  // am, pm
  a: function(e, r) {
    var a = r.meridiem || Ii;
    return a(e.getHours(), e.getMinutes(), !0);
  },
  // Timezone: -01:00, +00:00, ... +12:00
  Z: function(e) {
    return Ri(Pi(e), ":");
  },
  // Timezone: -0100, +0000, ... +1200
  ZZ: function(e) {
    return Ri(Pi(e));
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
    return Na(e, {
      firstDayOfWeek: r.firstDayOfWeek,
      firstWeekContainsDate: r.firstWeekContainsDate
    });
  },
  ww: function(e, r) {
    return Bt(Er.w(e, r), 2);
  }
};
function ka(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = e ? String(e) : "YYYY-MM-DDTHH:mm:ss.SSSZ", i = $o(t);
  if (!Nd(i))
    return "Invalid Date";
  var c = r.locale || ja;
  return a.replace(jd, function(n, l) {
    return l || (typeof Er[n] == "function" ? "".concat(Er[n](i, c)) : n);
  });
}
function Di(t) {
  return $d(t) || Vd(t) || kd();
}
function kd() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function Vd(t) {
  if (Symbol.iterator in Object(t) || Object.prototype.toString.call(t) === "[object Arguments]") return Array.from(t);
}
function $d(t) {
  if (Array.isArray(t)) {
    for (var e = 0, r = new Array(t.length); e < t.length; e++)
      r[e] = t[e];
    return r;
  }
}
function Fi(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    e && (a = a.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function Bd(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Fi(r, !0).forEach(function(a) {
      In(t, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Fi(r).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return t;
}
function Hd(t, e) {
  return Wd(t) || Gd(t, e) || zd();
}
function zd() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function Gd(t, e) {
  if (Symbol.iterator in Object(t) || Object.prototype.toString.call(t) === "[object Arguments]") {
    var r = [], a = !0, i = !1, c = void 0;
    try {
      for (var n = t[Symbol.iterator](), l; !(a = (l = n.next()).done) && (r.push(l.value), !(e && r.length === e)); a = !0)
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
function Wd(t) {
  if (Array.isArray(t)) return t;
}
function In(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var Yd = /(\[[^\[]*\])|(MM?M?M?|Do|DD?|ddd?d?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|S{1,3}|x|X|ZZ?|.)/g, Vs = /\d/, Dn = /\d\d/, Kd = /\d{3}/, Xd = /\d{4}/, sr = /\d\d?/, Jd = /[+-]\d\d:?\d\d/, $s = /[+-]?\d+/, Qd = /[+-]?\d+(\.\d{1,3})?/, Va = "year", Bo = "month", Bs = "day", Hs = "hour", zs = "minute", Gs = "second", $a = "millisecond", Ws = {}, ot = function(e, r, a) {
  var i = Array.isArray(e) ? e : [e], c;
  typeof a == "string" ? c = function(l) {
    var o = parseInt(l, 10);
    return In({}, a, o);
  } : c = a, i.forEach(function(n) {
    Ws[n] = [r, c];
  });
}, Zd = function(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
}, Mr = function(e) {
  return function(r) {
    var a = r[e];
    if (!Array.isArray(a))
      throw new Error("Locale[".concat(e, "] need an array"));
    return new RegExp(a.map(Zd).join("|"));
  };
}, Lr = function(e, r) {
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
ot("Y", $s, Va);
ot("YY", Dn, function(t) {
  var e = (/* @__PURE__ */ new Date()).getFullYear(), r = Math.floor(e / 100), a = parseInt(t, 10);
  return a = (a > 68 ? r - 1 : r) * 100 + a, In({}, Va, a);
});
ot("YYYY", Xd, Va);
ot("M", sr, function(t) {
  return In({}, Bo, parseInt(t, 10) - 1);
});
ot("MM", Dn, function(t) {
  return In({}, Bo, parseInt(t, 10) - 1);
});
ot("MMM", Mr("monthsShort"), Lr("monthsShort", Bo));
ot("MMMM", Mr("months"), Lr("months", Bo));
ot("D", sr, Bs);
ot("DD", Dn, Bs);
ot(["H", "h"], sr, Hs);
ot(["HH", "hh"], Dn, Hs);
ot("m", sr, zs);
ot("mm", Dn, zs);
ot("s", sr, Gs);
ot("ss", Dn, Gs);
ot("S", Vs, function(t) {
  return In({}, $a, parseInt(t, 10) * 100);
});
ot("SS", Dn, function(t) {
  return In({}, $a, parseInt(t, 10) * 10);
});
ot("SSS", Kd, $a);
function qd(t) {
  return t.meridiemParse || /[ap]\.?m?\.?/i;
}
function _d(t) {
  return "".concat(t).toLowerCase().charAt(0) === "p";
}
ot(["A", "a"], qd, function(t, e) {
  var r = typeof e.isPM == "function" ? e.isPM(t) : _d(t);
  return {
    isPM: r
  };
});
function ef(t) {
  var e = t.match(/([+-]|\d\d)/g) || ["-", "0", "0"], r = Hd(e, 3), a = r[0], i = r[1], c = r[2], n = parseInt(i, 10) * 60 + parseInt(c, 10);
  return n === 0 ? 0 : a === "+" ? -n : +n;
}
ot(["Z", "ZZ"], Jd, function(t) {
  return {
    offset: ef(t)
  };
});
ot("x", $s, function(t) {
  return {
    date: new Date(parseInt(t, 10))
  };
});
ot("X", Qd, function(t) {
  return {
    date: new Date(parseFloat(t) * 1e3)
  };
});
ot("d", Vs, "weekday");
ot("dd", Mr("weekdaysMin"), Lr("weekdaysMin", "weekday"));
ot("ddd", Mr("weekdaysShort"), Lr("weekdaysShort", "weekday"));
ot("dddd", Mr("weekdays"), Lr("weekdays", "weekday"));
ot("w", sr, "week");
ot("ww", Dn, "week");
function tf(t, e) {
  if (t !== void 0 && e !== void 0) {
    if (e) {
      if (t < 12)
        return t + 12;
    } else if (t === 12)
      return 0;
  }
  return t;
}
function nf(t) {
  for (var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Date(), r = [0, 0, 1, 0, 0, 0, 0], a = [e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()], i = !0, c = 0; c < 7; c++)
    t[c] === void 0 ? r[c] = i ? a[c] : r[c] : (r[c] = t[c], i = !1);
  return r;
}
function rf(t, e, r, a, i, c, n) {
  var l;
  return t < 100 && t >= 0 ? (l = new Date(t + 400, e, r, a, i, c, n), isFinite(l.getFullYear()) && l.setFullYear(t)) : l = new Date(t, e, r, a, i, c, n), l;
}
function of() {
  for (var t, e = arguments.length, r = new Array(e), a = 0; a < e; a++)
    r[a] = arguments[a];
  var i = r[0];
  return i < 100 && i >= 0 ? (r[0] += 400, t = new Date(Date.UTC.apply(Date, r)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(i)) : t = new Date(Date.UTC.apply(Date, r)), t;
}
function af(t, e, r) {
  var a = e.match(Yd);
  if (!a)
    throw new Error();
  for (var i = a.length, c = {}, n = 0; n < i; n += 1) {
    var l = a[n], o = Ws[l];
    if (o) {
      var u = typeof o[0] == "function" ? o[0](r) : o[0], d = o[1], h = (u.exec(t) || [])[0], p = d(h, r);
      c = Bd({}, c, {}, p), t = t.replace(h, "");
    } else {
      var s = l.replace(/^\[|\]$/g, "");
      if (t.indexOf(s) === 0)
        t = t.substr(s.length);
      else
        throw new Error("not match");
    }
  }
  return c;
}
function sf(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  try {
    var a = r.locale, i = a === void 0 ? ja : a, c = r.backupDate, n = c === void 0 ? /* @__PURE__ */ new Date() : c, l = af(t, e, i), o = l.year, s = l.month, u = l.day, d = l.hour, h = l.minute, p = l.second, f = l.millisecond, v = l.isPM, m = l.date, g = l.offset, y = l.weekday, S = l.week;
    if (m)
      return m;
    var E = [o, s, u, d, h, p, f];
    if (E[3] = tf(E[3], v), S !== void 0 && s === void 0 && u === void 0) {
      var A = ks(o === void 0 ? n : new Date(o, 3), {
        firstDayOfWeek: i.firstDayOfWeek,
        firstWeekContainsDate: i.firstWeekContainsDate
      });
      return new Date(A.getTime() + (S - 1) * 7 * 24 * 3600 * 1e3);
    }
    var w, P = nf(E, n);
    return g !== void 0 ? (P[6] += g * 60 * 1e3, w = of.apply(void 0, Di(P))) : w = rf.apply(void 0, Di(P)), y !== void 0 && w.getDay() !== y ? /* @__PURE__ */ new Date(NaN) : w;
  } catch {
    return /* @__PURE__ */ new Date(NaN);
  }
}
var lf = Object.defineProperty, uf = Object.defineProperties, cf = Object.getOwnPropertyDescriptors, wo = Object.getOwnPropertySymbols, Ys = Object.prototype.hasOwnProperty, Ks = Object.prototype.propertyIsEnumerable, Mi = (t, e, r) => e in t ? lf(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, xt = (t, e) => {
  for (var r in e || (e = {}))
    Ys.call(e, r) && Mi(t, r, e[r]);
  if (wo)
    for (var r of wo(e))
      Ks.call(e, r) && Mi(t, r, e[r]);
  return t;
}, Zt = (t, e) => uf(t, cf(e)), df = (t, e) => {
  var r = {};
  for (var a in t)
    Ys.call(t, a) && e.indexOf(a) < 0 && (r[a] = t[a]);
  if (t != null && wo)
    for (var a of wo(t))
      e.indexOf(a) < 0 && Ks.call(t, a) && (r[a] = t[a]);
  return r;
};
const ff = {
  formatLocale: ja,
  yearFormat: "YYYY",
  monthFormat: "MMM",
  monthBeforeYear: !0
};
let gr = "en";
const _n = {};
_n[gr] = ff;
function Xs(t, e, r = !1) {
  if (typeof t != "string")
    return _n[gr];
  let a = gr;
  return _n[t] && (a = t), e && (_n[t] = e, a = t), r || (gr = a), _n[t] || _n[gr];
}
function Sa(t) {
  return Xs(t, void 0, !0);
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
function Li(t) {
  return Array.isArray(t) ? t[t.length - 1] : void 0;
}
function On(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function gn(t, e) {
  const r = {};
  return On(t) && (Array.isArray(e) || (e = [e]), e.forEach((a) => {
    Object.prototype.hasOwnProperty.call(t, a) && (r[a] = t[a]);
  })), r;
}
function Js(t, e) {
  if (!On(t))
    return {};
  let r = t;
  return On(e) && Object.keys(e).forEach((a) => {
    let i = e[a];
    const c = t[a];
    On(i) && On(c) && (i = Js(c, i)), r = Zt(xt({}, r), { [a]: i });
  }), r;
}
function ta(t) {
  const e = parseInt(String(t), 10);
  return e < 10 ? `0${e}` : `${e}`;
}
function hf(t) {
  const e = /-(\w)/g;
  return t.replace(e, (r, a) => a ? a.toUpperCase() : "");
}
const Qs = "datepicker_locale", Zs = "datepicker_prefixClass", qs = "datepicker_getWeek";
function Ha() {
  return Pa(Qs, Ql(Sa()));
}
function pf(t) {
  const e = on(() => On(t.value) ? Js(Sa(), t.value) : Sa(t.value));
  return Fo(Qs, e), e;
}
function vf(t) {
  Fo(Zs, t);
}
function It() {
  return Pa(Zs, "mx");
}
function mf(t) {
  Fo(qs, t);
}
function gf() {
  return Pa(qs, Na);
}
function yf(t) {
  const e = t.style.display, r = t.style.visibility;
  t.style.display = "block", t.style.visibility = "hidden";
  const a = window.getComputedStyle(t), i = t.offsetWidth + parseInt(a.marginLeft, 10) + parseInt(a.marginRight, 10), c = t.offsetHeight + parseInt(a.marginTop, 10) + parseInt(a.marginBottom, 10);
  return t.style.display = e, t.style.visibility = r, { width: i, height: c };
}
function bf(t, e, r, a) {
  let i = 0, c = 0, n = 0, l = 0;
  const o = t.getBoundingClientRect(), s = document.documentElement.clientWidth, u = document.documentElement.clientHeight;
  return a && (n = window.pageXOffset + o.left, l = window.pageYOffset + o.top), s - o.left < e && o.right < e ? i = n - o.left + 1 : o.left + o.width / 2 <= s / 2 ? i = n : i = n + o.width - e, o.top <= r && u - o.bottom <= r ? c = l + u - o.top - r : o.top + o.height / 2 <= u / 2 ? c = l + o.height : c = l - r, { left: `${i}px`, top: `${c}px` };
}
function za(t, e = document.body) {
  if (!t || t === e)
    return null;
  const r = (c, n) => getComputedStyle(c, null).getPropertyValue(n);
  return /(auto|scroll)/.test(r(t, "overflow") + r(t, "overflow-y") + r(t, "overflow-x")) ? t : za(t.parentElement, e);
}
let _r;
function xf() {
  if (typeof window > "u")
    return 0;
  if (_r !== void 0)
    return _r;
  const t = document.createElement("div");
  t.style.visibility = "hidden", t.style.overflow = "scroll", t.style.width = "100px", t.style.position = "absolute", t.style.top = "-9999px", document.body.appendChild(t);
  const e = document.createElement("div");
  return e.style.width = "100%", t.appendChild(e), _r = t.offsetWidth - e.offsetWidth, t.parentNode.removeChild(t), _r;
}
const Ui = "ontouchend" in document ? "touchstart" : "mousedown";
function Sf(t) {
  let e = !1;
  return function(...a) {
    e || (e = !0, requestAnimationFrame(() => {
      e = !1, t.apply(this, a);
    }));
  };
}
function En(t, e) {
  return { setup: t, name: t.name, props: e };
}
function wn(t, e) {
  return new Proxy(t, {
    get(a, i) {
      const c = a[i];
      return c !== void 0 ? c : e[i];
    }
  });
}
const Fn = () => (t) => t, Ef = (t, e) => {
  const r = {};
  for (const a in t)
    if (Object.prototype.hasOwnProperty.call(t, a)) {
      const i = hf(a);
      let c = t[a];
      e.indexOf(i) !== -1 && c === "" && (c = !0), r[i] = c;
    }
  return r;
};
function wf(t, {
  slots: e
}) {
  const r = wn(t, {
    appendToBody: !0
  }), a = It(), i = qe(null), c = qe({
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
    } = yf(i.value);
    c.value = bf(o, s, u, r.appendToBody);
  };
  Qt(n, {
    flush: "post"
  }), Qt((o) => {
    const s = r.getRelativeElement();
    if (!s)
      return;
    const u = za(s) || window, d = Sf(n);
    u.addEventListener("scroll", d), window.addEventListener("resize", d), o(() => {
      u.removeEventListener("scroll", d), window.removeEventListener("resize", d);
    });
  }, {
    flush: "post"
  });
  const l = (o) => {
    if (!r.visible)
      return;
    const s = o.target, u = i.value, d = r.getRelativeElement();
    u && !u.contains(s) && d && !d.contains(s) && r.onClickOutside(o);
  };
  return Qt((o) => {
    document.addEventListener(Ui, l), o(() => {
      document.removeEventListener(Ui, l);
    });
  }), () => ie(ql, {
    to: "body",
    disabled: !r.appendToBody
  }, {
    default: () => [ie(Ra, {
      name: `${a}-zoom-in-down`
    }, {
      default: () => {
        var o;
        return [r.visible && ie("div", {
          ref: i,
          class: `${a}-datepicker-main ${a}-datepicker-popup ${r.className}`,
          style: [xt({
            position: "absolute"
          }, c.value), r.style || {}]
        }, [(o = e.default) == null ? void 0 : o.call(e)])];
      }
    })]
  });
}
const Tf = Fn()(["style", "className", "visible", "appendToBody", "onClickOutside", "getRelativeElement"]);
var Af = En(wf, Tf);
const Cf = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024",
  width: "1em",
  height: "1em"
}, Of = /* @__PURE__ */ k("path", { d: "M940.218 107.055H730.764v-60.51H665.6v60.51H363.055v-60.51H297.89v60.51H83.78c-18.617 0-32.581 13.963-32.581 32.581v805.237c0 18.618 13.964 32.582 32.582 32.582h861.09c18.619 0 32.583-13.964 32.583-32.582V139.636c-4.655-18.618-18.619-32.581-37.237-32.581zm-642.327 65.163v60.51h65.164v-60.51h307.2v60.51h65.163v-60.51h176.873v204.8H116.364v-204.8H297.89zM116.364 912.291V442.18H912.29v470.11H116.364z" }, null, -1), Pf = [
  Of
];
function _s(t, e) {
  return Z(), ne("svg", Cf, Pf);
}
const Rf = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024",
  width: "1em",
  height: "1em"
}, If = /* @__PURE__ */ k("path", { d: "M810.005 274.005 572.011 512l237.994 237.995-60.01 60.01L512 572.011 274.005 810.005l-60.01-60.01L451.989 512 213.995 274.005l60.01-60.01L512 451.989l237.995-237.994z" }, null, -1), Df = [
  If
];
function Ff(t, e) {
  return Z(), ne("svg", Rf, Df);
}
const Mf = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em"
}, Lf = /* @__PURE__ */ k("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}, null, -1), Uf = /* @__PURE__ */ k("path", { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }, null, -1), Nf = /* @__PURE__ */ k("path", { d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" }, null, -1), jf = [
  Lf,
  Uf,
  Nf
];
function kf(t, e) {
  return Z(), ne("svg", Mf, jf);
}
function $n(t, e = 0, r = 1, a = 0, i = 0, c = 0, n = 0) {
  const l = new Date(t, e, r, a, i, c, n);
  return t < 100 && t >= 0 && l.setFullYear(t), l;
}
function Sn(t) {
  return t instanceof Date && !isNaN(t.getTime());
}
function Bn(t) {
  return Array.isArray(t) && t.length === 2 && t.every(Sn) && t[0] <= t[1];
}
function Vf(t) {
  return Array.isArray(t) && t.every(Sn);
}
function Ho(...t) {
  if (t[0] !== void 0 && t[0] !== null) {
    const r = new Date(t[0]);
    if (Sn(r))
      return r;
  }
  const e = t.slice(1);
  return e.length ? Ho(...e) : /* @__PURE__ */ new Date();
}
function $f(t) {
  const e = new Date(t);
  return e.setMonth(0, 1), e.setHours(0, 0, 0, 0), e;
}
function Ni(t) {
  const e = new Date(t);
  return e.setDate(1), e.setHours(0, 0, 0, 0), e;
}
function Rn(t) {
  const e = new Date(t);
  return e.setHours(0, 0, 0, 0), e;
}
function Bf({
  firstDayOfWeek: t,
  year: e,
  month: r
}) {
  const a = [], i = $n(e, r, 0), c = i.getDate(), n = c - (i.getDay() + 7 - t) % 7;
  for (let u = n; u <= c; u++)
    a.push($n(e, r, u - c));
  i.setMonth(r + 1, 0);
  const l = i.getDate();
  for (let u = 1; u <= l; u++)
    a.push($n(e, r, u));
  const o = c - n + 1, s = 6 * 7 - o - l;
  for (let u = 1; u <= s; u++)
    a.push($n(e, r, l + u));
  return a;
}
function To(t, e) {
  const r = new Date(t), a = typeof e == "function" ? e(r.getMonth()) : Number(e), i = r.getFullYear(), c = $n(i, a + 1, 0).getDate(), n = r.getDate();
  return r.setMonth(a, Math.min(n, c)), r;
}
function tr(t, e) {
  const r = new Date(t), a = typeof e == "function" ? e(r.getFullYear()) : e;
  return r.setFullYear(a), r;
}
function Hf(t, e) {
  const r = new Date(e), a = new Date(t), i = r.getFullYear() - a.getFullYear(), c = r.getMonth() - a.getMonth();
  return i * 12 + c;
}
function Ao(t, e) {
  const r = new Date(t), a = new Date(e);
  return r.setHours(a.getHours(), a.getMinutes(), a.getSeconds()), r;
}
function zf(t, {
  slots: e
}) {
  const r = wn(t, {
    editable: !0,
    disabled: !1,
    clearable: !0,
    range: !1,
    multiple: !1
  }), a = It(), i = qe(null), c = on(() => r.separator || (r.range ? " ~ " : ",")), n = (p) => r.range ? Bn(p) : r.multiple ? Vf(p) : Sn(p), l = (p) => Array.isArray(p) ? p.some((f) => r.disabledDate(f)) : r.disabledDate(p), o = on(() => i.value !== null ? i.value : typeof r.renderInputText == "function" ? r.renderInputText(r.value) : n(r.value) ? Array.isArray(r.value) ? r.value.map((p) => r.formatDate(p)).join(c.value) : r.formatDate(r.value) : ""), s = (p) => {
    var f;
    p && p.stopPropagation(), r.onChange(r.range ? [null, null] : null), (f = r.onClear) == null || f.call(r);
  }, u = () => {
    var p;
    if (!r.editable || i.value === null)
      return;
    const f = i.value.trim();
    if (i.value = null, f === "") {
      s();
      return;
    }
    let v;
    if (r.range) {
      let m = f.split(c.value);
      m.length !== 2 && (m = f.split(c.value.trim())), v = m.map((g) => r.parseDate(g.trim()));
    } else r.multiple ? v = f.split(c.value).map((m) => r.parseDate(m.trim())) : v = r.parseDate(f);
    n(v) && !l(v) ? r.onChange(v) : (p = r.onInputError) == null || p.call(r, f);
  }, d = (p) => {
    i.value = typeof p == "string" ? p : p.target.value;
  }, h = (p) => {
    const {
      keyCode: f
    } = p;
    f === 9 ? r.onBlur() : f === 13 && u();
  };
  return () => {
    var p, f, v;
    const m = !r.disabled && r.clearable && o.value, g = Zt(xt({
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
      onKeydown: h,
      onInput: d,
      onChange: u
    });
    return ie("div", {
      class: `${a}-input-wrapper`,
      onClick: r.onClick
    }, [((p = e.input) == null ? void 0 : p.call(e, g)) || ie("input", g, null), m ? ie("i", {
      class: `${a}-icon-clear`,
      onClick: s
    }, [((f = e["icon-clear"]) == null ? void 0 : f.call(e)) || ie(Ff, null, null)]) : null, ie("i", {
      class: `${a}-icon-calendar`
    }, [((v = e["icon-calendar"]) == null ? void 0 : v.call(e)) || ie(_s, null, null)])]);
  };
}
const Ga = Fn()(["placeholder", "editable", "disabled", "clearable", "inputClass", "inputAttr", "range", "multiple", "separator", "renderInputText", "onInputError", "onClear"]), Gf = Fn()(["value", "formatDate", "parseDate", "disabledDate", "onChange", "onFocus", "onBlur", "onClick", ...Ga]);
var Wf = En(zf, Gf);
function Yf(t, {
  slots: e
}) {
  var r;
  const a = wn(t, {
    prefixClass: "mx",
    valueType: "date",
    format: "YYYY-MM-DD",
    type: "date",
    disabledDate: () => !1,
    disabledTime: () => !1,
    confirmText: "OK"
  });
  vf(a.prefixClass), mf(((r = a.formatter) == null ? void 0 : r.getWeek) || Na);
  const i = pf(Jl(t, "lang")), c = qe(), n = () => c.value, l = qe(!1), o = on(() => !a.disabled && (typeof a.open == "boolean" ? a.open : l.value)), s = () => {
    var w, P;
    a.disabled || o.value || (l.value = !0, (w = a["onUpdate:open"]) == null || w.call(a, !0), (P = a.onOpen) == null || P.call(a));
  }, u = () => {
    var w, P;
    o.value && (l.value = !1, (w = a["onUpdate:open"]) == null || w.call(a, !1), (P = a.onClose) == null || P.call(a));
  }, d = (w, P) => (P = P || a.format, On(a.formatter) && typeof a.formatter.stringify == "function" ? a.formatter.stringify(w, P) : ka(w, P, {
    locale: i.value.formatLocale
  })), h = (w, P) => {
    if (P = P || a.format, On(a.formatter) && typeof a.formatter.parse == "function")
      return a.formatter.parse(w, P);
    const O = /* @__PURE__ */ new Date();
    return sf(w, P, {
      locale: i.value.formatLocale,
      backupDate: O
    });
  }, p = (w) => {
    switch (a.valueType) {
      case "date":
        return w instanceof Date ? new Date(w.getTime()) : /* @__PURE__ */ new Date(NaN);
      case "timestamp":
        return typeof w == "number" ? new Date(w) : /* @__PURE__ */ new Date(NaN);
      case "format":
        return typeof w == "string" ? h(w) : /* @__PURE__ */ new Date(NaN);
      default:
        return typeof w == "string" ? h(w, a.valueType) : /* @__PURE__ */ new Date(NaN);
    }
  }, f = (w) => {
    if (!Sn(w))
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
  }, v = on(() => {
    const w = a.value;
    return a.range ? (Array.isArray(w) ? w.slice(0, 2) : [null, null]).map(p) : a.multiple ? (Array.isArray(w) ? w : []).map(p) : p(w);
  }), m = (w, P, O = !0) => {
    var D, N;
    const j = Array.isArray(w) ? w.map(f) : f(w);
    return (D = a["onUpdate:value"]) == null || D.call(a, j), (N = a.onChange) == null || N.call(a, j, P), O && u(), j;
  }, g = qe(/* @__PURE__ */ new Date());
  Qt(() => {
    o.value && (g.value = v.value);
  });
  const y = (w, P) => {
    a.confirm ? g.value = w : m(w, P, !a.multiple && (P === a.type || P === "time"));
  }, S = () => {
    var w;
    const P = m(g.value);
    (w = a.onConfirm) == null || w.call(a, P);
  }, E = (w) => a.disabledDate(w) || a.disabledTime(w), A = (w) => {
    var P;
    const {
      prefixClass: O
    } = a;
    return ie("div", {
      class: `${O}-datepicker-sidebar`
    }, [(P = e.sidebar) == null ? void 0 : P.call(e, w), (a.shortcuts || []).map((D, N) => ie("button", {
      key: N,
      "data-index": N,
      type: "button",
      class: `${O}-btn ${O}-btn-text ${O}-btn-shortcut`,
      onClick: () => {
        var j;
        const H = (j = D.onClick) == null ? void 0 : j.call(D);
        H && m(H);
      }
    }, [D.text]))]);
  };
  return () => {
    var w, P;
    const {
      prefixClass: O,
      disabled: D,
      confirm: N,
      range: j,
      popupClass: H,
      popupStyle: V,
      appendToBody: z
    } = a, Y = {
      value: g.value,
      "onUpdate:value": y,
      emit: m
    }, W = e.header && ie("div", {
      class: `${O}-datepicker-header`
    }, [e.header(Y)]), ae = (e.footer || N) && ie("div", {
      class: `${O}-datepicker-footer`
    }, [(w = e.footer) == null ? void 0 : w.call(e, Y), N && ie("button", {
      type: "button",
      class: `${O}-btn ${O}-datepicker-btn-confirm`,
      onClick: S
    }, [a.confirmText])]), X = (P = e.content) == null ? void 0 : P.call(e, Y), he = (e.sidebar || a.shortcuts) && A(Y);
    return ie("div", {
      ref: c,
      class: {
        [`${O}-datepicker`]: !0,
        [`${O}-datepicker-range`]: j,
        disabled: D
      }
    }, [ie(Wf, Zt(xt({}, gn(a, Ga)), {
      value: v.value,
      formatDate: d,
      parseDate: h,
      disabledDate: E,
      onChange: m,
      onClick: s,
      onFocus: s,
      onBlur: u
    }), gn(e, ["icon-calendar", "icon-clear", "input"])), ie(Af, {
      className: H,
      style: V,
      visible: o.value,
      appendToBody: z,
      getRelativeElement: n,
      onClickOutside: u
    }, {
      default: () => [he, ie("div", {
        class: `${O}-datepicker-content`
      }, [W, X, ae])]
    })]);
  };
}
const Kf = Fn()(["value", "valueType", "type", "format", "formatter", "lang", "prefixClass", "appendToBody", "open", "popupClass", "popupStyle", "confirm", "confirmText", "shortcuts", "disabledDate", "disabledTime", "onOpen", "onClose", "onConfirm", "onChange", "onUpdate:open", "onUpdate:value"]), Xf = [...Kf, ...Ga];
var ji = En(Yf, Xf);
function eo(t) {
  var e = t, {
    value: r
  } = e, a = df(e, [
    "value"
  ]);
  const i = It();
  return ie("button", Zt(xt({}, a), {
    type: "button",
    class: `${i}-btn ${i}-btn-text ${i}-btn-icon-${r}`
  }), [ie("i", {
    class: `${i}-icon-${r}`
  }, null)]);
}
function Wa({
  type: t,
  calendar: e,
  onUpdateCalendar: r
}, {
  slots: a
}) {
  var i;
  const c = It(), n = () => {
    r(To(e, (h) => h - 1));
  }, l = () => {
    r(To(e, (h) => h + 1));
  }, o = () => {
    r(tr(e, (h) => h - 1));
  }, s = () => {
    r(tr(e, (h) => h + 1));
  }, u = () => {
    r(tr(e, (h) => h - 10));
  }, d = () => {
    r(tr(e, (h) => h + 10));
  };
  return ie("div", {
    class: `${c}-calendar-header`
  }, [ie(eo, {
    value: "double-left",
    onClick: t === "year" ? u : o
  }, null), t === "date" && ie(eo, {
    value: "left",
    onClick: n
  }, null), ie(eo, {
    value: "double-right",
    onClick: t === "year" ? d : s
  }, null), t === "date" && ie(eo, {
    value: "right",
    onClick: l
  }, null), ie("span", {
    class: `${c}-calendar-header-label`
  }, [(i = a.default) == null ? void 0 : i.call(a)])]);
}
function Jf({
  calendar: t,
  isWeekMode: e,
  showWeekNumber: r,
  titleFormat: a,
  getWeekActive: i,
  getCellClasses: c,
  onSelect: n,
  onUpdatePanel: l,
  onUpdateCalendar: o,
  onDateMouseEnter: s,
  onDateMouseLeave: u
}) {
  const d = It(), h = gf(), p = Ha().value, {
    yearFormat: f,
    monthBeforeYear: v,
    monthFormat: m = "MMM",
    formatLocale: g
  } = p, y = g.firstDayOfWeek || 0;
  let S = p.days || g.weekdaysMin;
  S = S.concat(S).slice(y, y + 7);
  const E = t.getFullYear(), A = t.getMonth(), w = Ba(Bf({
    firstDayOfWeek: y,
    year: E,
    month: A
  }), 7), P = (Y, W) => ka(Y, W, {
    locale: p.formatLocale
  }), O = (Y) => {
    l(Y);
  }, D = (Y) => {
    const W = Y.getAttribute("data-index"), [ae, X] = W.split(",").map((fe) => parseInt(fe, 10)), he = w[ae][X];
    return new Date(he);
  }, N = (Y) => {
    n(D(Y.currentTarget));
  }, j = (Y) => {
    s && s(D(Y.currentTarget));
  }, H = (Y) => {
    u && u(D(Y.currentTarget));
  }, V = ie("button", {
    type: "button",
    class: `${d}-btn ${d}-btn-text ${d}-btn-current-year`,
    onClick: () => O("year")
  }, [P(t, f)]), z = ie("button", {
    type: "button",
    class: `${d}-btn ${d}-btn-text ${d}-btn-current-month`,
    onClick: () => O("month")
  }, [P(t, m)]);
  return r = typeof r == "boolean" ? r : e, ie("div", {
    class: [`${d}-calendar ${d}-calendar-panel-date`, {
      [`${d}-calendar-week-mode`]: e
    }]
  }, [ie(Wa, {
    type: "date",
    calendar: t,
    onUpdateCalendar: o
  }, {
    default: () => [v ? [z, V] : [V, z]]
  }), ie("div", {
    class: `${d}-calendar-content`
  }, [ie("table", {
    class: `${d}-table ${d}-table-date`
  }, [ie("thead", null, [ie("tr", null, [r && ie("th", {
    class: `${d}-week-number-header`
  }, null), S.map((Y) => ie("th", {
    key: Y
  }, [Y]))])]), ie("tbody", null, [w.map((Y, W) => ie("tr", {
    key: W,
    class: [`${d}-date-row`, {
      [`${d}-active-week`]: i(Y)
    }]
  }, [r && ie("td", {
    class: `${d}-week-number`,
    "data-index": `${W},0`,
    onClick: N
  }, [ie("div", null, [h(Y[0])])]), Y.map((ae, X) => ie("td", {
    key: X,
    class: ["cell", c(ae)],
    title: P(ae, a),
    "data-index": `${W},${X}`,
    onClick: N,
    onMouseenter: j,
    onMouseleave: H
  }, [ie("div", null, [ae.getDate()])]))]))])])])]);
}
function Qf({
  calendar: t,
  getCellClasses: e,
  onSelect: r,
  onUpdateCalendar: a,
  onUpdatePanel: i
}) {
  const c = It(), n = Ha().value, l = n.months || n.formatLocale.monthsShort, o = (u) => $n(t.getFullYear(), u), s = (u) => {
    const h = u.currentTarget.getAttribute("data-month");
    r(o(parseInt(h, 10)));
  };
  return ie("div", {
    class: `${c}-calendar ${c}-calendar-panel-month`
  }, [ie(Wa, {
    type: "month",
    calendar: t,
    onUpdateCalendar: a
  }, {
    default: () => [ie("button", {
      type: "button",
      class: `${c}-btn ${c}-btn-text ${c}-btn-current-year`,
      onClick: () => i("year")
    }, [t.getFullYear()])]
  }), ie("div", {
    class: `${c}-calendar-content`
  }, [ie("table", {
    class: `${c}-table ${c}-table-month`
  }, [Ba(l, 3).map((u, d) => ie("tr", {
    key: d
  }, [u.map((h, p) => {
    const f = d * 3 + p;
    return ie("td", {
      key: p,
      class: ["cell", e(o(f))],
      "data-month": f,
      onClick: s
    }, [ie("div", null, [h])]);
  })]))])])]);
}
const Zf = (t) => {
  const e = Math.floor(t.getFullYear() / 10) * 10, r = [];
  for (let a = 0; a < 10; a++)
    r.push(e + a);
  return Ba(r, 2);
};
function qf({
  calendar: t,
  getCellClasses: e = () => [],
  getYearPanel: r = Zf,
  onSelect: a,
  onUpdateCalendar: i
}) {
  const c = It(), n = (d) => $n(d, 0), l = (d) => {
    const p = d.currentTarget.getAttribute("data-year");
    a(n(parseInt(p, 10)));
  }, o = r(new Date(t)), s = o[0][0], u = Li(Li(o));
  return ie("div", {
    class: `${c}-calendar ${c}-calendar-panel-year`
  }, [ie(Wa, {
    type: "year",
    calendar: t,
    onUpdateCalendar: i
  }, {
    default: () => [ie("span", null, [s]), ie("span", {
      class: `${c}-calendar-decade-separator`
    }, null), ie("span", null, [u])]
  }), ie("div", {
    class: `${c}-calendar-content`
  }, [ie("table", {
    class: `${c}-table ${c}-table-year`
  }, [o.map((d, h) => ie("tr", {
    key: h
  }, [d.map((p, f) => ie("td", {
    key: f,
    class: ["cell", e(n(p))],
    "data-year": p,
    onClick: l
  }, [ie("div", null, [p])]))]))])])]);
}
function _f(t) {
  const e = wn(t, {
    defaultValue: Rn(/* @__PURE__ */ new Date()),
    type: "date",
    disabledDate: () => !1,
    getClasses: () => [],
    titleFormat: "YYYY-MM-DD"
  }), r = on(() => (Array.isArray(e.value) ? e.value : [e.value]).filter(Sn).map((y) => e.type === "year" ? $f(y) : e.type === "month" ? Ni(y) : Rn(y))), a = qe(/* @__PURE__ */ new Date());
  Qt(() => {
    let g = e.calendar;
    if (!Sn(g)) {
      const {
        length: y
      } = r.value;
      g = Ho(y > 0 ? r.value[y - 1] : e.defaultValue);
    }
    a.value = Ni(g);
  });
  const i = (g) => {
    var y;
    a.value = g, (y = e.onCalendarChange) == null || y.call(e, g);
  }, c = qe("date");
  Qt(() => {
    const g = ["date", "month", "year"], y = Math.max(g.indexOf(e.type), g.indexOf(e.defaultPanel));
    c.value = y !== -1 ? g[y] : "date";
  });
  const n = (g) => {
    var y;
    const S = c.value;
    c.value = g, (y = e.onPanelChange) == null || y.call(e, g, S);
  }, l = (g) => e.disabledDate(new Date(g), r.value), o = (g, y) => {
    var S, E, A;
    if (!l(g))
      if ((S = e.onPick) == null || S.call(e, g), e.multiple === !0) {
        const w = r.value.filter((P) => P.getTime() !== g.getTime());
        w.length === r.value.length && w.push(g), (E = e["onUpdate:value"]) == null || E.call(e, w, y);
      } else
        (A = e["onUpdate:value"]) == null || A.call(e, g, y);
  }, s = (g) => {
    o(g, e.type === "week" ? "week" : "date");
  }, u = (g) => {
    if (e.type === "year")
      o(g, "year");
    else if (i(g), n("month"), e.partialUpdate && r.value.length === 1) {
      const y = tr(r.value[0], g.getFullYear());
      o(y, "year");
    }
  }, d = (g) => {
    if (e.type === "month")
      o(g, "month");
    else if (i(g), n("date"), e.partialUpdate && r.value.length === 1) {
      const y = To(tr(r.value[0], g.getFullYear()), g.getMonth());
      o(y, "month");
    }
  }, h = (g, y = []) => (l(g) ? y.push("disabled") : r.value.some((S) => S.getTime() === g.getTime()) && y.push("active"), y.concat(e.getClasses(g, r.value, y.join(" ")))), p = (g) => {
    const y = g.getMonth() !== a.value.getMonth(), S = [];
    return g.getTime() === (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0) && S.push("today"), y && S.push("not-current-month"), h(g, S);
  }, f = (g) => e.type !== "month" ? a.value.getMonth() === g.getMonth() ? "active" : "" : h(g), v = (g) => e.type !== "year" ? a.value.getFullYear() === g.getFullYear() ? "active" : "" : h(g), m = (g) => {
    if (e.type !== "week")
      return !1;
    const y = g[0].getTime(), S = g[6].getTime();
    return r.value.some((E) => {
      const A = E.getTime();
      return A >= y && A <= S;
    });
  };
  return () => c.value === "year" ? ie(qf, {
    calendar: a.value,
    getCellClasses: v,
    getYearPanel: e.getYearPanel,
    onSelect: u,
    onUpdateCalendar: i
  }, null) : c.value === "month" ? ie(Qf, {
    calendar: a.value,
    getCellClasses: f,
    onSelect: d,
    onUpdatePanel: n,
    onUpdateCalendar: i
  }, null) : ie(Jf, {
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
const zo = Fn()(["type", "value", "defaultValue", "defaultPanel", "disabledDate", "getClasses", "calendar", "multiple", "partialUpdate", "showWeekNumber", "titleFormat", "getYearPanel", "onDateMouseEnter", "onDateMouseLeave", "onCalendarChange", "onPanelChange", "onUpdate:value", "onPick"]);
var Go = En(_f, zo);
const ki = (t, e) => {
  const r = t.getTime();
  let [a, i] = e.map((c) => c.getTime());
  return a > i && ([a, i] = [i, a]), r > a && r < i;
};
function eh(t) {
  const e = wn(t, {
    defaultValue: /* @__PURE__ */ new Date(),
    type: "date"
  }), r = It(), a = on(() => {
    let m = Array.isArray(e.defaultValue) ? e.defaultValue : [e.defaultValue, e.defaultValue];
    return m = m.map((g) => Rn(g)), Bn(m) ? m : [/* @__PURE__ */ new Date(), /* @__PURE__ */ new Date()].map((g) => Rn(g));
  }), i = qe([/* @__PURE__ */ new Date(NaN), /* @__PURE__ */ new Date(NaN)]);
  Qt(() => {
    Bn(e.value) && (i.value = e.value);
  });
  const c = (m, g) => {
    var y;
    const [S, E] = i.value;
    Sn(S) && !Sn(E) ? (S.getTime() > m.getTime() ? i.value = [m, S] : i.value = [S, m], (y = e["onUpdate:value"]) == null || y.call(e, i.value, g)) : i.value = [m, /* @__PURE__ */ new Date(NaN)];
  }, n = qe([/* @__PURE__ */ new Date(), /* @__PURE__ */ new Date()]), l = on(() => Bn(e.calendar) ? e.calendar : n.value), o = on(() => e.type === "year" ? 10 * 12 : e.type === "month" ? 1 * 12 : 1), s = (m, g) => {
    var y;
    const S = Hf(m[0], m[1]), E = o.value - S;
    if (E > 0) {
      const A = g === 1 ? 0 : 1;
      m[A] = To(m[A], (w) => w + (A === 0 ? -E : E));
    }
    n.value = m, (y = e.onCalendarChange) == null || y.call(e, m, g);
  }, u = (m) => {
    s([m, l.value[1]], 0);
  }, d = (m) => {
    s([l.value[0], m], 1);
  };
  Qt(() => {
    const m = Bn(e.value) ? e.value : a.value;
    s(m.slice(0, 2));
  });
  const h = qe(null), p = (m) => h.value = m, f = () => h.value = null, v = (m, g, y) => {
    const S = e.getClasses ? e.getClasses(m, g, y) : [], E = Array.isArray(S) ? S : [S];
    return /disabled|active/.test(y) ? E : (g.length === 2 && ki(m, g) && E.push("in-range"), g.length === 1 && h.value && ki(m, [g[0], h.value]) ? E.concat("hover-in-range") : E);
  };
  return () => {
    const m = l.value.map((g, y) => {
      const S = Zt(xt({}, e), {
        calendar: g,
        value: i.value,
        defaultValue: a.value[y],
        getClasses: v,
        partialUpdate: !1,
        multiple: !1,
        "onUpdate:value": c,
        onCalendarChange: y === 0 ? u : d,
        onDateMouseLeave: f,
        onDateMouseEnter: p
      });
      return ie(Go, S, null);
    });
    return ie("div", {
      class: `${r}-calendar-range`
    }, [m]);
  };
}
const Ya = zo;
var Ka = En(eh, Ya);
const el = Kl({
  setup(t, {
    slots: e
  }) {
    const r = It(), a = qe(), i = qe(""), c = qe("");
    Pr(() => {
      if (!a.value)
        return;
      const f = a.value, v = f.clientHeight * 100 / f.scrollHeight;
      i.value = v < 100 ? `${v}%` : "";
    });
    const l = xf(), o = (f) => {
      const v = f.currentTarget, {
        scrollHeight: m,
        scrollTop: g
      } = v;
      c.value = `${g * 100 / m}%`;
    };
    let s = !1, u = 0;
    const d = (f) => {
      f.stopImmediatePropagation();
      const v = f.currentTarget, {
        offsetTop: m
      } = v;
      s = !0, u = f.clientY - m;
    }, h = (f) => {
      if (!s || !a.value)
        return;
      const {
        clientY: v
      } = f, {
        scrollHeight: m,
        clientHeight: g
      } = a.value, S = (v - u) * m / g;
      a.value.scrollTop = S;
    }, p = () => {
      s = !1;
    };
    return Pr(() => {
      document.addEventListener("mousemove", h), document.addEventListener("mouseup", p);
    }), Xl(() => {
      document.addEventListener("mousemove", h), document.addEventListener("mouseup", p);
    }), () => {
      var f;
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
      }, [(f = e.default) == null ? void 0 : f.call(e)]), ie("div", {
        class: `${r}-scrollbar-track`
      }, [ie("div", {
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
function th({
  options: t,
  getClasses: e,
  onSelect: r
}) {
  const a = It(), i = (c) => {
    const n = c.target, l = c.currentTarget;
    if (n.tagName.toUpperCase() !== "LI")
      return;
    const o = l.getAttribute("data-type"), s = parseInt(l.getAttribute("data-index"), 10), u = parseInt(n.getAttribute("data-index"), 10), d = t[s].list[u].value;
    r(d, o);
  };
  return ie("div", {
    class: `${a}-time-columns`
  }, [t.map((c, n) => ie(el, {
    key: c.type,
    class: `${a}-time-column`
  }, {
    default: () => [ie("ul", {
      class: `${a}-time-list`,
      "data-index": n,
      "data-type": c.type,
      onClick: i
    }, [c.list.map((l, o) => ie("li", {
      key: l.text,
      "data-index": o,
      class: [`${a}-time-item`, e(l.value, c.type)]
    }, [l.text]))])]
  }))]);
}
function nh(t) {
  return typeof t == "function" || Object.prototype.toString.call(t) === "[object Object]" && !Zl(t);
}
function rh(t) {
  let e;
  const r = It();
  return ie(el, null, nh(e = t.options.map((a) => ie("div", {
    key: a.text,
    class: [`${r}-time-option`, t.getClasses(a.value, "time")],
    onClick: () => t.onSelect(a.value, "time")
  }, [a.text]))) ? e : {
    default: () => [e]
  });
}
function na({
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
function oh(t, e) {
  let { showHour: r, showMinute: a, showSecond: i, use12h: c } = e;
  const n = e.format || "HH:mm:ss";
  r = typeof r == "boolean" ? r : /[HhKk]/.test(n), a = typeof a == "boolean" ? a : /m/.test(n), i = typeof i == "boolean" ? i : /s/.test(n), c = typeof c == "boolean" ? c : /a/i.test(n);
  const l = [], o = c && t.getHours() >= 12;
  return r && l.push({
    type: "hour",
    list: na({
      length: c ? 12 : 24,
      step: e.hourStep,
      options: e.hourOptions
    }).map((s) => {
      const u = s === 0 && c ? "12" : ta(s), d = new Date(t);
      return d.setHours(o ? s + 12 : s), { value: d, text: u };
    })
  }), a && l.push({
    type: "minute",
    list: na({
      length: 60,
      step: e.minuteStep,
      options: e.minuteOptions
    }).map((s) => {
      const u = new Date(t);
      return u.setMinutes(s), { value: u, text: ta(s) };
    })
  }), i && l.push({
    type: "second",
    list: na({
      length: 60,
      step: e.secondStep,
      options: e.secondOptions
    }).map((s) => {
      const u = new Date(t);
      return u.setSeconds(s), { value: u, text: ta(s) };
    })
  }), c && l.push({
    type: "ampm",
    list: ["AM", "PM"].map((s, u) => {
      const d = new Date(t);
      return d.setHours(d.getHours() % 12 + u * 12), { text: s, value: d };
    })
  }), l;
}
function ra(t = "") {
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
function ah({
  date: t,
  option: e,
  format: r,
  formatDate: a
}) {
  const i = [];
  if (typeof e == "function")
    return e() || [];
  const c = ra(e.start), n = ra(e.end), l = ra(e.step), o = e.format || r;
  if (c && n && l) {
    const s = c.minutes + c.hours * 60, u = n.minutes + n.hours * 60, d = l.minutes + l.hours * 60, h = Math.floor((u - s) / d);
    for (let p = 0; p <= h; p++) {
      const f = s + p * d, v = Math.floor(f / 60), m = f % 60, g = new Date(t);
      g.setHours(v, m, 0), i.push({
        value: g,
        text: a(g, o)
      });
    }
  }
  return i;
}
const tl = (t, e, r = 0) => {
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
    t.scrollTop = c, tl(t, e, r - 10);
  });
};
function ih(t) {
  const e = wn(t, {
    defaultValue: Rn(/* @__PURE__ */ new Date()),
    format: "HH:mm:ss",
    timeTitleFormat: "YYYY-MM-DD",
    disabledTime: () => !1,
    scrollDuration: 100
  }), r = It(), a = Ha(), i = (v, m) => ka(v, m, {
    locale: a.value.formatLocale
  }), c = qe(/* @__PURE__ */ new Date());
  Qt(() => {
    c.value = Ho(e.value, e.defaultValue);
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
  }, u = (v, m) => m === "hour" ? l(v) : m === "minute" ? o(v) : m === "ampm" ? s(v) : n(v), d = (v, m) => {
    var g;
    if (!u(v, m)) {
      const y = new Date(v);
      c.value = y, n(y) || (g = e["onUpdate:value"]) == null || g.call(e, y, m);
    }
  }, h = (v, m) => u(v, m) ? "disabled" : v.getTime() === c.value.getTime() ? "active" : "", p = qe(), f = (v) => {
    if (!p.value)
      return;
    const m = p.value.querySelectorAll(".active");
    for (let g = 0; g < m.length; g++) {
      const y = m[g], S = za(y, p.value);
      if (S) {
        const E = y.offsetTop;
        tl(S, E, v);
      }
    }
  };
  return Pr(() => f(0)), go(c, () => f(e.scrollDuration), {
    flush: "post"
  }), () => {
    let v;
    return e.timePickerOptions ? v = ie(rh, {
      onSelect: d,
      getClasses: h,
      options: ah({
        date: c.value,
        format: e.format,
        option: e.timePickerOptions,
        formatDate: i
      })
    }, null) : v = ie(th, {
      options: oh(c.value, e),
      onSelect: d,
      getClasses: h
    }, null), ie("div", {
      class: `${r}-time`,
      ref: p
    }, [e.showTimeHeader && ie("div", {
      class: `${r}-time-header`
    }, [ie("button", {
      type: "button",
      class: `${r}-btn ${r}-btn-text ${r}-time-header-title`,
      onClick: e.onClickTitle
    }, [i(c.value, e.timeTitleFormat)])]), ie("div", {
      class: `${r}-time-content`
    }, [v])]);
  };
}
const Wo = Fn()(["value", "defaultValue", "format", "timeTitleFormat", "showTimeHeader", "disabledTime", "timePickerOptions", "hourOptions", "minuteOptions", "secondOptions", "hourStep", "minuteStep", "secondStep", "showHour", "showMinute", "showSecond", "use12h", "scrollDuration", "onClickTitle", "onUpdate:value"]);
var Ir = En(ih, Wo);
function sh(t) {
  const e = wn(t, {
    defaultValue: Rn(/* @__PURE__ */ new Date()),
    disabledTime: () => !1
  }), r = It(), a = qe([/* @__PURE__ */ new Date(NaN), /* @__PURE__ */ new Date(NaN)]);
  Qt(() => {
    Bn(e.value) ? a.value = e.value : a.value = [/* @__PURE__ */ new Date(NaN), /* @__PURE__ */ new Date(NaN)];
  });
  const i = (s, u) => {
    var d;
    (d = e["onUpdate:value"]) == null || d.call(e, a.value, s === "time" ? "time-range" : s, u);
  }, c = (s, u) => {
    a.value[0] = s, a.value[1].getTime() >= s.getTime() || (a.value[1] = s), i(u, 0);
  }, n = (s, u) => {
    a.value[1] = s, a.value[0].getTime() <= s.getTime() || (a.value[0] = s), i(u, 1);
  }, l = (s) => e.disabledTime(s, 0), o = (s) => s.getTime() < a.value[0].getTime() || e.disabledTime(s, 1);
  return () => {
    const s = Array.isArray(e.defaultValue) ? e.defaultValue : [e.defaultValue, e.defaultValue];
    return ie("div", {
      class: `${r}-time-range`
    }, [ie(Ir, Zt(xt({}, e), {
      "onUpdate:value": c,
      value: a.value[0],
      defaultValue: s[0],
      disabledTime: l
    }), null), ie(Ir, Zt(xt({}, e), {
      "onUpdate:value": n,
      value: a.value[1],
      defaultValue: s[1],
      disabledTime: o
    }), null)]);
  };
}
const Xa = Wo;
var Ja = En(sh, Xa);
function nl(t) {
  const e = qe(!1), r = () => {
    var c;
    e.value = !1, (c = t.onShowTimePanelChange) == null || c.call(t, !1);
  }, a = () => {
    var c;
    e.value = !0, (c = t.onShowTimePanelChange) == null || c.call(t, !0);
  };
  return { timeVisible: on(() => typeof t.showTimePanel == "boolean" ? t.showTimePanel : e.value), openTimePanel: a, closeTimePanel: r };
}
function lh(t) {
  const e = wn(t, {
    disabledTime: () => !1,
    defaultValue: Rn(/* @__PURE__ */ new Date())
  }), r = qe(e.value);
  Qt(() => {
    r.value = e.value;
  });
  const {
    openTimePanel: a,
    closeTimePanel: i,
    timeVisible: c
  } = nl(e), n = (l, o) => {
    var s;
    o === "date" && a();
    let u = Ao(l, Ho(e.value, e.defaultValue));
    if (e.disabledTime(new Date(u)) && (u = Ao(l, e.defaultValue), e.disabledTime(new Date(u)))) {
      r.value = u;
      return;
    }
    (s = e["onUpdate:value"]) == null || s.call(e, u, o);
  };
  return () => {
    const l = It(), o = Zt(xt({}, gn(e, zo)), {
      multiple: !1,
      type: "date",
      value: r.value,
      "onUpdate:value": n
    }), s = Zt(xt({}, gn(e, Wo)), {
      showTimeHeader: !0,
      value: r.value,
      "onUpdate:value": e["onUpdate:value"],
      onClickTitle: i
    });
    return ie("div", {
      class: `${l}-date-time`
    }, [ie(Go, o, null), c.value && ie(Ir, s, null)]);
  };
}
const rl = Fn()(["showTimePanel", "onShowTimePanelChange"]), uh = [...rl, ...zo, ...Wo];
var ol = En(lh, uh);
function ch(t) {
  const e = wn(t, {
    defaultValue: Rn(/* @__PURE__ */ new Date()),
    disabledTime: () => !1
  }), r = qe(e.value);
  Qt(() => {
    r.value = e.value;
  });
  const {
    openTimePanel: a,
    closeTimePanel: i,
    timeVisible: c
  } = nl(e), n = (l, o) => {
    var s;
    o === "date" && a();
    const u = Array.isArray(e.defaultValue) ? e.defaultValue : [e.defaultValue, e.defaultValue];
    let d = l.map((h, p) => {
      const f = Bn(e.value) ? e.value[p] : u[p];
      return Ao(h, f);
    });
    if (d[1].getTime() < d[0].getTime() && (d = [d[0], d[0]]), d.some(e.disabledTime) && (d = l.map((h, p) => Ao(h, u[p])), d.some(e.disabledTime))) {
      r.value = d;
      return;
    }
    (s = e["onUpdate:value"]) == null || s.call(e, d, o);
  };
  return () => {
    const l = It(), o = Zt(xt({}, gn(e, Ya)), {
      type: "date",
      value: r.value,
      "onUpdate:value": n
    }), s = Zt(xt({}, gn(e, Xa)), {
      showTimeHeader: !0,
      value: r.value,
      "onUpdate:value": e["onUpdate:value"],
      onClickTitle: i
    });
    return ie("div", {
      class: `${l}-date-time-range`
    }, [ie(Ka, o, null), c.value && ie(Ja, s, null)]);
  };
}
const dh = [...rl, ...Xa, ...Ya];
var al = En(ch, dh);
const fh = Fn()(["range", "open", "appendToBody", "clearable", "confirm", "disabled", "editable", "multiple", "partialUpdate", "showHour", "showMinute", "showSecond", "showTimeHeader", "showTimePanel", "showWeekNumber", "use12h"]), Vi = {
  date: "YYYY-MM-DD",
  datetime: "YYYY-MM-DD HH:mm:ss",
  year: "YYYY",
  month: "YYYY-MM",
  time: "HH:mm:ss",
  week: "w"
};
function il(t, {
  slots: e
}) {
  const r = t.type || "date", a = t.format || Vi[r] || Vi.date, i = Zt(xt({}, Ef(t, fh)), {
    type: r,
    format: a
  });
  return ie(ji, gn(i, ji.props), xt({
    content: (c) => {
      if (i.range) {
        const n = r === "time" ? Ja : r === "datetime" ? al : Ka;
        return di(n, gn(xt(xt({}, i), c), n.props));
      } else {
        const n = r === "time" ? Ir : r === "datetime" ? ol : Go;
        return di(n, gn(xt(xt({}, i), c), n.props));
      }
    },
    "icon-calendar": () => r === "time" ? ie(kf, null, null) : ie(_s, null, null)
  }, e));
}
const hh = {
  locale: Xs,
  install: (t) => {
    t.component("DatePicker", il);
  }
};
var ph = Object.assign(il, hh, {
  Calendar: Go,
  CalendarRange: Ka,
  TimePanel: Ir,
  TimeRange: Ja,
  DateTime: ol,
  DateTimeRange: al
});
const vh = {
  name: "VDatepicker",
  components: { DatePicker: ph },
  inject: ["possibleFormValues", "getFormValue"],
  mixins: [fn],
  props: {
    modelValue: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      dateFullYear: !1,
      date: null
    };
  },
  created() {
    var t, e, r;
    this.dateFullYear = (r = (e = (t = this.$parent) == null ? void 0 : t.$parent) == null ? void 0 : e.$props) == null ? void 0 : r.dateFullYear, this.date = this.formatValue();
  },
  watch: {
    date() {
      Object.assign(this.modelValue, { value: this.date });
    }
  },
  computed: {
    formatTimeString() {
      var t;
      if (((t = this.modelValue) == null ? void 0 : t.sub_type) === "time")
        return "hh:mm";
      if (typeof this.modelValue.value == "string") {
        let e = !1;
        if ([":", "am", "pm", "AM", "PM"].forEach((r) => {
          this.modelValue.value.includes(r) && (e = !0);
        }), this.modelValue.value.length <= 5 && this.modelValue.value.includes(".") && (e = !0), e)
          return "hh:mm";
      }
      return this.dateFullYear ? "DD/MM/YYYY" : "DD/MM/YY";
    }
  },
  methods: {
    formatValue() {
      var e;
      const t = this.modelValue.value ?? this.getFormValue(this.possibleFormValues, (e = this.modelValue) == null ? void 0 : e.defined_key);
      return this.formatTimeString === "hh:mm" ? this.detectAndFormatToHHMM(t) : this.detectAndFormatToDDMMYY(t);
    },
    /**
     * detectAndFormatToHHMM("7.57")   -> "07:57"
     * detectAndFormatToHHMM("7:5")    -> "07:05"
     * detectAndFormatToHHMM("07:57")  -> "07:57"
     * detectAndFormatToHHMM("07.57")  -> "07:57"
     * detectAndFormatToHHMM("0757")   -> "07:57"
     * detectAndFormatToHHMM("757")    -> "07:57"
     * detectAndFormatToHHMM("7")      -> "07:00"
     * detectAndFormatToHHMM("12am")   -> "00:00"
     * detectAndFormatToHHMM("12:30pm")-> "12:30"
     * detectAndFormatToHHMM("1pm")    -> "13:00"
     * detectAndFormatToHHMM("23:59")  -> "23:59"
     * detectAndFormatToHHMM("24:00")  -> null
     * @param input
     * @returns {string|null}
     */
    detectAndFormatToHHMM(t) {
      if (!t || typeof t != "string") return null;
      let e = t.trim();
      const r = e.match(/(am|pm)\.?$/i);
      let a = null;
      r && (a = r[1].toLowerCase(), e = e.slice(0, r.index).trim());
      let i = e.match(/^(\d{1,2})\s*[:.\-]\s*(\d{1,2})(?:\s*[:.\-]\s*\d{1,2})?$/), c, n;
      if (i)
        c = i[1], n = i[2];
      else if (i = e.match(/^(\d{3,4})$/), i) {
        const d = i[1];
        d.length === 3 ? (c = d.slice(0, 1), n = d.slice(1)) : (c = d.slice(0, 2), n = d.slice(2));
      } else if (i = e.match(/^(\d{1,2})$/), i)
        c = i[1], n = "0";
      else {
        const d = e.split(/[^0-9]+/).filter(Boolean);
        if (d.length >= 2)
          c = d[0], n = d[1];
        else
          return null;
      }
      const l = parseInt(c, 10), o = parseInt(n, 10);
      if (Number.isNaN(l) || Number.isNaN(o) || o < 0 || o > 59) return null;
      let s = l;
      if (a) {
        if (s < 1 || s > 12) return null;
        a === "pm" ? s !== 12 && (s += 12) : s === 12 && (s = 0);
      } else if (s < 0 || s > 23) return null;
      const u = (d) => String(d).padStart(2, "0");
      return `${u(s)}:${u(o)}`;
    },
    detectAndFormatToDDMMYY(t) {
      if (!t || typeof t != "string") return null;
      const r = t.trim().replace(/[^\d]/g, "/").replace(/\/+/g, "/").split("/").filter(Boolean);
      if (r.length < 3) return null;
      let [a, i, c] = r;
      c = c.slice(0, 4);
      const n = parseInt(a, 10), l = parseInt(i, 10);
      if (Number.isNaN(n) || Number.isNaN(l)) return null;
      let o;
      if (/^\d{4}$/.test(c))
        o = parseInt(c, 10);
      else if (/^\d{1,2}$/.test(c))
        o = 2e3 + parseInt(c, 10);
      else {
        const v = parseInt(c, 10);
        if (Number.isNaN(v)) return null;
        o = v < 100 ? 2e3 + v : v;
      }
      const s = (v, m, g) => {
        if (m < 1 || m > 12 || v < 1 || v > 31) return !1;
        const y = new Date(g, m - 1, v);
        return y.getFullYear() === g && y.getMonth() === m - 1 && y.getDate() === v;
      };
      if (n > 31 || l > 31) return null;
      let u = null, d = null;
      if (n > 12 && l <= 12)
        u = n, d = l;
      else if (l > 12 && n <= 12)
        u = l, d = n;
      else if (s(n, l, o))
        u = n, d = l;
      else if (s(l, n, o))
        u = l, d = n;
      else
        return null;
      if (!s(u, d, o)) return null;
      const h = String(u).padStart(2, "0"), p = String(d).padStart(2, "0"), f = this.dateFullYear ? String(o) : String(o).slice(-2);
      return `${h}/${p}/${f}`;
    }
  }
}, mh = ["name", "id", "value"], gh = ["textContent"], yh = {
  key: 2,
  class: "inline-block text-sm text-gray-600 mt-1.5 brand-200"
};
function bh(t, e, r, a, i, c) {
  var l, o;
  const n = rn("date-picker");
  return Z(), ne("div", {
    class: nt(["v-datepicker", (l = r.modelValue) == null ? void 0 : l.class])
  }, [
    k("input", {
      type: "hidden",
      name: r.modelValue.name,
      id: r.modelValue.name,
      value: i.date
    }, null, 8, mh),
    t.editable ? (Z(), Jt(n, {
      key: 0,
      value: i.date,
      "onUpdate:value": e[0] || (e[0] = (s) => i.date = s),
      format: c.formatTimeString,
      "value-type": "format",
      type: c.formatTimeString === "hh:mm" ? "time" : "date",
      class: "!w-full h-[40px]",
      placeholder: r.modelValue.placeholder
    }, null, 8, ["value", "format", "type", "placeholder"])) : (Z(), ne("p", {
      key: 1,
      textContent: Ve(r.modelValue.value)
    }, null, 8, gh)),
    (o = r.modelValue) != null && o.hint ? (Z(), ne("p", yh, Ve(r.modelValue.hint), 1)) : De("", !0)
  ], 2);
}
const sl = /* @__PURE__ */ bt(vh, [["render", bh]]), xh = {
  name: "Input",
  mixins: [fn],
  inject: ["possibleFormValues", "getFormValue"],
  props: {
    modelValue: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      input: null
    };
  },
  created() {
    var t;
    this.input = an(this.modelValue.value) ?? this.getFormValue(this.possibleFormValues, (t = this.modelValue) == null ? void 0 : t.defined_key);
  },
  watch: {
    input(t) {
      this.modelValue.value = t;
    }
  }
}, Sh = { class: "flex flex-row-reverse gap-2 items-center justify-end" }, Eh = { class: "inline-block text-base text-gray-700" }, wh = ["name", "type", "disabled"], Th = ["textContent"], Ah = {
  key: 0,
  class: "inline-block text-sm text-gray-600 mt-1.5 pl-[28px]"
};
function Ch(t, e, r, a, i, c) {
  var n, l, o;
  return Z(), ne("div", null, [
    k("div", Sh, [
      k("span", Eh, Ve((n = r.modelValue) == null ? void 0 : n.label), 1),
      k("div", null, [
        t.editable ? et((Z(), ne("input", {
          key: 0,
          name: r.modelValue.name,
          type: r.modelValue.type,
          "onUpdate:modelValue": e[0] || (e[0] = (s) => i.input = s),
          disabled: !t.editable,
          class: "h-5 w-5 text-brand-700 border-gray-300 rounded focus:ring-brand-700 focus:ring-2"
        }, null, 8, wh)), [
          [Oa, i.input]
        ]) : (Z(), ne("p", {
          key: 1,
          textContent: Ve((l = r.modelValue) == null ? void 0 : l.value)
        }, null, 8, Th))
      ])
    ]),
    (o = r.modelValue) != null && o.hint ? (Z(), ne("p", Ah, Ve(r.modelValue.hint), 1)) : De("", !0)
  ]);
}
const ll = /* @__PURE__ */ bt(xh, [["render", Ch]]), Oh = {
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
}, Ph = ["for"], Rh = {
  key: 0,
  class: "v-field-label inline-block mb-2"
}, Ih = ["innerHTML"], Dh = { key: 0 };
function Fh(t, e, r, a, i, c) {
  return Z(), ne("label", {
    for: r.field,
    class: "block space-y-2xsSpace text-sm font-medium leading-none text-tertiary-700"
  }, [
    r.labelText || t.$slots.label ? (Z(), ne("span", Rh, [
      t.$slots.label ? xn(t.$slots, "label", { key: 0 }) : (Z(), ne(Ct, { key: 1 }, [
        k("span", { innerHTML: r.labelText }, null, 8, Ih),
        r.isRequired ? (Z(), ne("span", Dh, " *")) : De("", !0)
      ], 64))
    ])) : De("", !0),
    xn(t.$slots, "default")
  ], 8, Ph);
}
const Mh = /* @__PURE__ */ bt(Oh, [["render", Fh]]), Lh = {
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
}, Uh = { class: "flex items-center gap-2" }, Nh = ["aria-checked"], jh = {
  key: 0,
  class: "text-sm text-gray-700 font-medium"
};
function kh(t, e, r, a, i, c) {
  return Z(), ne("div", Uh, [
    k("button", {
      type: "button",
      class: nt(["relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-300 transition-colors duration-200 ease-in-out", c.classes]),
      role: "switch",
      "aria-checked": r.modelValue,
      onClick: e[0] || (e[0] = (...n) => c.toggle && c.toggle(...n))
    }, [
      k("span", {
        "aria-hidden": "true",
        class: nt(["pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out", {
          "translate-x-5": r.modelValue,
          "translate-x-0": !r.modelValue,
          "!translate-x-3": r.small && r.modelValue,
          "!h-2 !w-2": r.small
        }])
      }, null, 2)
    ], 10, Nh),
    r.title ? (Z(), ne("span", jh, Ve(r.title), 1)) : De("", !0)
  ]);
}
const Qa = /* @__PURE__ */ bt(Lh, [["render", kh]]), Vh = {
  name: "VAddress",
  components: { InputWrapper: Mh, VToggle: Qa },
  inject: ["possibleFormValues", "getFormValue"],
  props: {
    modelValue: {
      type: Object,
      required: !1
    },
    editable: {
      type: Boolean,
      default: !0
    },
    index: {
      type: [Number, String],
      default: null
    },
    validationErrors: {
      type: [Object, null],
      default: () => ({})
    }
  },
  data() {
    var t;
    return {
      googleApiKey: null,
      name: (t = this.modelValue) == null ? void 0 : t.name,
      form: {
        address: null,
        city: null,
        state: null,
        postcode: null,
        lat: null,
        lng: null
      },
      isManual: !1
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
          ...this.modelValue,
          address: t.address,
          value: this.fullAddress,
          city: t == null ? void 0 : t.city,
          state: t == null ? void 0 : t.state,
          postcode: t == null ? void 0 : t.postcode,
          lat: t == null ? void 0 : t.lat,
          lng: t == null ? void 0 : t.lng,
          is_manual: this.isManual
        });
      },
      deep: !0
    },
    isManual: {
      handler(t) {
        this.$emit("update:modelValue", {
          ...this.modelValue,
          is_manual: t
        });
      },
      deep: !0
    }
  },
  methods: {
    getValidationMessage(t) {
      const e = `fields.${this.index}.${t}`;
      return this.validationErrors.hasOwnProperty(e) ? this.validationErrors[e].join("|") : "";
    },
    loadGoogleMapsScript() {
      return new Promise((t, e) => {
        if (document.getElementById("google-maps-script")) {
          t();
          return;
        }
        const r = document.createElement("script");
        r.id = "google-maps-script", r.src = `https://maps.googleapis.com/maps/api/js?key=${this.googleApiKey}&libraries=places`, r.async = !0, r.defer = !0, r.onload = t, r.onerror = e, document.head.appendChild(r);
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
        this.resetAddressInput(), this.form.lat = (a = e.geometry.location) == null ? void 0 : a.lat(), this.form.lng = (i = e.geometry.location) == null ? void 0 : i.lng();
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
      const e = t == null ? void 0 : t.target;
      e != null && e.value || (this.form.address = null, this.form.value = null, this.form.city = null, this.form.state = null, this.form.lat = null, this.form.lng = null, this.form.postcode = null, this.form.addressInput = "");
    }
  },
  mounted() {
    var t, e, r, a, i;
    this.googleApiKey = (r = (e = (t = this.$parent) == null ? void 0 : t.$parent) == null ? void 0 : e.$props) == null ? void 0 : r.googleApiKey, this.loadGoogleMapsScript().then(() => {
      setTimeout(() => {
        this.initializeAutocomplete();
      }, 1e3);
    }).catch((c) => {
      console.error("Failed to load Google Maps script: " + this.googleApiKey, c);
    }), this.form = Object.keys(this.modelValue).length ? this.modelValue : this.form, this.form.address || (this.form.address = ((a = this.modelValue) == null ? void 0 : a.value) ?? this.getFormValue(this.possibleFormValues, (i = this.modelValue) == null ? void 0 : i.defined_key));
  }
}, $h = {
  key: 0,
  class: "text-md text-gray-900"
}, Bh = ["id", "name", "disabled", "value", "placeholder"], Hh = {
  key: 0,
  class: "inline-block text-sm text-gray-600 mt-1.5 brand-200"
}, zh = {
  key: 1,
  class: "flex cursor-pointer items-center space-y-1"
}, Gh = {
  key: 2,
  class: "relative space-y-2"
}, Wh = ["textContent"], Yh = { class: "flex flex-row space-x-3" }, Kh = { class: "basis-1/3" }, Xh = ["textContent"], Jh = { class: "basis-1/3" }, Qh = ["textContent"], Zh = { class: "basis-1/3" }, qh = ["textContent"];
function _h(t, e, r, a, i, c) {
  var o, s;
  const n = rn("input-wrapper"), l = rn("v-toggle");
  return Z(), ne("div", {
    class: nt(["grid space-y-2", (o = r.modelValue) == null ? void 0 : o.class])
  }, [
    ie(n, {
      field: "full_address",
      class: "space-y-0 [&_label]:mx-0 [&_div.w-full]:pt-0"
    }, {
      default: Tt(() => {
        var u;
        return [
          r.editable ? (Z(), ne("input", {
            key: 1,
            id: i.name,
            name: i.name,
            type: "text",
            disabled: i.isManual,
            class: "border-1 border-solid border-gray-300 rounded-lg bg-white",
            value: r.modelValue.value,
            placeholder: (u = r.modelValue) == null ? void 0 : u.placeholder,
            onInput: e[0] || (e[0] = (...d) => c.resetAddressInput && c.resetAddressInput(...d))
          }, null, 40, Bh)) : (Z(), ne("p", $h, Ve(c.fullAddress), 1))
        ];
      }),
      _: 1
    }),
    (s = r.modelValue) != null && s.hint ? (Z(), ne("p", Hh, Ve(r.modelValue.hint), 1)) : De("", !0),
    r.editable ? (Z(), ne("label", zh, [
      ie(l, {
        modelValue: i.isManual,
        "onUpdate:modelValue": e[1] || (e[1] = (u) => i.isManual = u),
        ring: !1
      }, null, 8, ["modelValue"]),
      e[6] || (e[6] = k("span", { class: "text-xs inline-block" }, "Manual Address", -1))
    ])) : De("", !0),
    i.isManual ? (Z(), ne("div", Gh, [
      ie(n, {
        "is-vertical": "",
        field: "address",
        "label-text": "Address",
        class: "w-full"
      }, {
        default: Tt(() => [
          et(k("input", {
            type: "text",
            class: "border-1 border-solid border-gray-300 rounded-lg bg-white",
            "onUpdate:modelValue": e[2] || (e[2] = (u) => i.form.address = u),
            placeholder: "Address"
          }, null, 512), [
            [yt, i.form.address]
          ]),
          k("p", {
            class: "text-red-700 text-xs mt-1",
            textContent: Ve(c.getValidationMessage("address"))
          }, null, 8, Wh)
        ]),
        _: 1
      }),
      k("div", Yh, [
        k("div", Kh, [
          ie(n, {
            "is-vertical": "",
            field: "city",
            "label-text": "Suburb",
            class: "w-full"
          }, {
            default: Tt(() => [
              et(k("input", {
                type: "text",
                class: "border-1 border-solid border-gray-300 rounded-lg bg-white w-full",
                "onUpdate:modelValue": e[3] || (e[3] = (u) => i.form.city = u),
                placeholder: "Suburb"
              }, null, 512), [
                [yt, i.form.city]
              ]),
              k("p", {
                class: "text-red-700 text-xs mt-1",
                textContent: Ve(c.getValidationMessage("city"))
              }, null, 8, Xh)
            ]),
            _: 1
          })
        ]),
        k("div", Jh, [
          ie(n, {
            "is-vertical": "",
            field: "state",
            "label-text": "State",
            class: "w-full"
          }, {
            default: Tt(() => [
              et(k("input", {
                "onUpdate:modelValue": e[4] || (e[4] = (u) => i.form.state = u),
                type: "text",
                placeholder: "State",
                class: "border-1 border-solid border-gray-300 rounded-lg bg-white w-full"
              }, null, 512), [
                [yt, i.form.state]
              ]),
              k("p", {
                class: "text-red-700 text-xs mt-1",
                textContent: Ve(c.getValidationMessage("state"))
              }, null, 8, Qh)
            ]),
            _: 1
          })
        ]),
        k("div", Zh, [
          ie(n, {
            "is-vertical": "",
            field: "postcode",
            "label-text": "Postcode",
            class: "w-full"
          }, {
            default: Tt(() => [
              et(k("input", {
                type: "text",
                class: "border-1 border-solid border-gray-300 rounded-lg bg-white w-full",
                "onUpdate:modelValue": e[5] || (e[5] = (u) => i.form.postcode = u),
                placeholder: "Postcode"
              }, null, 512), [
                [yt, i.form.postcode]
              ]),
              k("p", {
                class: "text-red-700 text-xs mt-1",
                textContent: Ve(c.getValidationMessage("postcode"))
              }, null, 8, qh)
            ]),
            _: 1
          })
        ])
      ])
    ])) : De("", !0)
  ], 2);
}
const ul = /* @__PURE__ */ bt(Vh, [["render", _h]]), ep = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
};
function tp(t, e) {
  return Z(), ne("svg", ep, e[0] || (e[0] = [
    k("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M8 12h8m6 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
    }, null, -1)
  ]));
}
const np = { render: tp }, rp = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
};
function op(t, e) {
  return Z(), ne("svg", rp, e[0] || (e[0] = [
    k("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 5v14m-7-7h14"
    }, null, -1)
  ]));
}
const cl = { render: op }, ap = {
  name: "VGridInput",
  mixins: [fn],
  components: {
    MinusCircle: np,
    Plus: cl
  },
  props: {
    modelValue: { default: [] }
  },
  data() {
    return {
      localField: this.modelValue,
      processing: !1,
      componentTypes: {
        checkbox: rt(ll),
        "check-group": rt(yo),
        datepicker: rt(sl),
        "file-upload": rt(Is),
        number: rt(So),
        "radio-group": rt(yo),
        select: rt(Fs),
        signature: rt(Ms),
        text: rt(So),
        textarea: rt(Ls),
        paragraph: rt(Us),
        address: rt(ul)
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
    this.localField = this.modelValue;
  },
  methods: {
    canRemoveRow(t) {
      return this.editable && (t + this.originalGrid.length) % this.originalGrid.length === 0 && this.modelValue.allow_add_row && this.grid.length > this.originalGrid.length;
    },
    initiateGrid(t = !1) {
      var e;
      (e = this.grid) == null || e.forEach((r, a) => {
        r.forEach((i, c) => {
          var n;
          (n = i[0]) != null && n.name && (this.localField || (this.localField = {
            grid: []
          }), this.localField.hasOwnProperty("grid") || (this.localField.grid = []), this.localField.grid.hasOwnProperty(a) || (this.localField.grid[a] = {}));
        });
      }), t && (this.processing = !0, this.localField.filter((r, a) => a + 1 > this.grid.length).forEach((r) => {
        this.originalGrid.forEach((a) => {
          const i = an(a.map((c) => fi(c))).map((c) => (Object.keys(r).forEach((n) => {
            c[0].name === this.getTemplateFieldName(n) && (c[0].name = n);
          }), c));
          this.grid.push(i.map((c) => {
            var l;
            const n = Math.floor(Math.random() * Date.now());
            return (l = c[0]) != null && l.id && (c[0].id = n, c[0].on_flight = !0), c;
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
              i.forEach((c) => {
                c.on_flight = !1;
              });
            });
        this.localField.hasOwnProperty(t) && this.localField.splice(t, r);
      }
    },
    addRow() {
      this.localField.allow_add_row && this.grid && this.grid.length && (this.processing = !0, an(this.grid.filter(
        (e) => e.some((r) => r.some((a) => !(a != null && a.on_flight)))
      )).forEach((e) => {
        const r = an(e.map((a) => fi(a)));
        this.grid.push(r.map((a) => {
          var c;
          const i = Math.floor(Math.random() * Date.now());
          return a[0].value = null, (c = a[0]) != null && c.id && (a[0].id = i, a[0].on_flight = !0, a[0].name = `${a[0].name}_${i}`), a;
        }));
      }), this.initiateGrid(), this.processing = !1);
    },
    fieldLabel(t) {
      return (t == null ? void 0 : t.type) === "heading" ? "h4" : "span";
    },
    fieldClass(t) {
      return ["cell", `-type-${t == null ? void 0 : t.type}`].join(" ");
    },
    getError(t, e) {
      const r = `fields.${this.index}.grid.${t}.${e}.0.value`;
      return this.validationErrors.hasOwnProperty(r) ? this.validationErrors[r][0] : null;
    },
    fieldComponent(t) {
      return t != null && t.type ? this.componentTypes[t.type] : "";
    },
    getClassForItem(t, e) {
      const r = t[e].some((a) => a.hasOwnProperty("label"));
      return !r && e === !this.getLatestColumnIndex ? "relative flex items-center justify-center rounded-lg w-full" : !r && e === this.getLatestColumnIndex && this.isLatestColumnEmpty ? "" : "relative rounded-lg w-full";
    }
  }
}, ip = {
  key: 0,
  class: "mb-4 font-regular text-gray-600"
}, sp = { class: "grid gap-4 w-full" }, lp = {
  key: 0,
  class: "flex gap-2 relative"
}, up = ["for"], cp = ["for"], dp = { key: 1 }, fp = {
  key: 3,
  class: "text-red-700 text-xs mt-1"
}, hp = ["onClick"], pp = {
  key: 1,
  class: "mt-2 flex gap-2"
};
function vp(t, e, r, a, i, c) {
  const n = rn("MinusCircle"), l = rn("Plus");
  return Z(), ne("div", null, [
    r.modelValue.hint ? (Z(), ne("p", ip, Ve(r.modelValue.hint), 1)) : De("", !0),
    k("div", sp, [
      (Z(!0), ne(Ct, null, bn(c.grid, (o, s) => (Z(), ne("div", {
        key: "row-" + s
      }, [
        o.filter((u) => u.length).length ? (Z(), ne("div", lp, [
          (Z(!0), ne(Ct, null, bn(o, (u, d) => {
            var h, p, f, v, m, g, y, S, E;
            return Z(), ne("div", {
              key: "cell-" + s + "-" + d + "-" + ((h = u[0]) == null ? void 0 : h.name),
              class: nt(c.getClassForItem(c.grid[s], d) + (c.canRemove ? " pr-[40px]" : ""))
            }, [
              (p = u[0]) != null && p.type ? (Z(), ne("div", {
                key: 0,
                class: nt(["v-field", c.fieldClass(u[0])])
              }, [
                u[0].type === "heading" && !((f = u[0]) != null && f.on_flight) ? (Z(), ne("label", {
                  key: 0,
                  for: r.modelValue.name,
                  class: "text-lg font-semibold !text-gray-900"
                }, Ve((v = u[0]) == null ? void 0 : v.label), 9, up)) : !["paragraph", "checkbox"].includes((m = u[0]) == null ? void 0 : m.type) && !((g = u[0]) != null && g.on_flight) ? (Z(), ne("label", {
                  key: 1,
                  class: "text-sm text-gray-700",
                  for: r.modelValue.name
                }, [
                  (y = u[0]) != null && y.label ? (Z(), Jt(Hn(c.fieldLabel(u[0])), { key: 0 }, {
                    default: Tt(() => {
                      var A, w;
                      return [
                        Xt(Ve((A = u[0]) == null ? void 0 : A.label) + " " + Ve((w = u[0]) != null && w.required ? "*" : ""), 1)
                      ];
                    }),
                    _: 2
                  }, 1024)) : (Z(), ne("span", dp, " "))
                ], 8, cp)) : De("", !0),
                c.fieldComponent(u[0]) && ((S = u[0]) != null && S.name) && !i.processing ? (Z(), Jt(Hn(c.fieldComponent(u[0])), {
                  key: r.modelValue.name + ((E = u[0]) == null ? void 0 : E.name),
                  modelValue: c.grid[s][d][0],
                  "onUpdate:modelValue": (A) => c.grid[s][d][0] = A,
                  editable: t.editable
                }, null, 8, ["modelValue", "onUpdate:modelValue", "editable"])) : De("", !0),
                c.getError(s, d) ? (Z(), ne("p", fp, Ve(c.getError(s, d)), 1)) : De("", !0),
                xn(t.$slots, "default")
              ], 2)) : De("", !0)
            ], 2);
          }), 128)),
          c.canRemoveRow(s) && c.originalGrid ? (Z(), ne("a", {
            key: 0,
            class: nt(["cursor-pointer absolute top-2.5 right-[12px]", { "!top-[38px]": s === 0 }]),
            onClick: (u) => c.removeRow(s)
          }, [
            ie(n, { class: "w-5 h-5 text-brand-700 hover:text-brand-800" })
          ], 10, hp)) : De("", !0)
        ])) : De("", !0)
      ]))), 128))
    ]),
    r.modelValue.allow_add_row && t.editable ? (Z(), ne("div", pp, [
      k("a", {
        onClick: e[0] || (e[0] = (...o) => c.addRow && c.addRow(...o)),
        class: "cursor-pointer text-brand-700 flex items-center text-sm font-semibold hover:bg-brand-50 p-1 gap-1 rounded"
      }, [
        ie(l, { class: "w-5 h-5" }),
        e[1] || (e[1] = Xt(" Add Row "))
      ])
    ])) : De("", !0)
  ]);
}
const mp = /* @__PURE__ */ bt(ap, [["render", vp]]), gp = {
  name: "VField",
  props: {
    modelValue: {},
    editable: {
      type: Boolean,
      default: !1
    },
    preview: {
      type: Boolean,
      default: !1
    },
    possibleValues: {
      type: [Object, null],
      default: () => ({})
    },
    index: {
      type: [Number, String],
      default: null
    },
    validationErrors: {
      type: [Object, null],
      default: () => ({})
    }
  },
  data() {
    return {
      componentTypes: rt({
        checkbox: rt(ll),
        "check-group": rt(yo),
        datepicker: rt(sl),
        "file-upload": rt(Is),
        number: rt(So),
        "radio-group": rt(yo),
        select: rt(Fs),
        signature: rt(Ms),
        text: rt(So),
        textarea: rt(Ls),
        paragraph: rt(Us),
        grid: rt(mp),
        address: rt(ul)
      }),
      localModelValue: this.modelValue
    };
  },
  watch: {
    localModelValue: {
      handler(t) {
        this.$emit("update:modelValue", {
          ...t
        });
      },
      deep: !0
    }
  },
  computed: {
    fieldComponent() {
      return this.componentTypes[this.localModelValue.type];
    },
    fieldLabel() {
      return this.localModelValue.type === "heading" ? "h4" : "span";
    },
    fieldClass() {
      return ["cell", `-type-${this.localModelValue.type}`].join(" ");
    }
  }
}, yp = ["for"], bp = ["for"], xp = { key: 1 };
function Sp(t, e, r, a, i, c) {
  var n;
  return Z(), ne("div", {
    class: nt(["v-field", c.fieldClass])
  }, [
    i.localModelValue.type === "heading" ? (Z(), ne("label", {
      key: 0,
      for: i.localModelValue.name,
      class: "text-lg font-semibold !text-gray-900"
    }, Ve(i.localModelValue.label), 9, yp)) : !["paragraph", "checkbox"].includes(i.localModelValue.type) && !((n = i.localModelValue) != null && n.presenter) ? (Z(), ne("label", {
      key: 1,
      for: i.localModelValue.name
    }, [
      i.localModelValue.label ? (Z(), Jt(Hn(c.fieldLabel), { key: 0 }, {
        default: Tt(() => [
          Xt(Ve(i.localModelValue.label) + " " + Ve(i.localModelValue.required ? "*" : ""), 1)
        ]),
        _: 1
      })) : (Z(), ne("span", xp, " "))
    ], 8, bp)) : De("", !0),
    (Z(), Jt(Hn(c.fieldComponent), {
      key: i.localModelValue.name,
      modelValue: i.localModelValue,
      "onUpdate:modelValue": e[0] || (e[0] = (l) => i.localModelValue = l),
      index: r.index,
      editable: r.editable,
      preview: r.preview,
      "validation-errors": r.validationErrors
    }, null, 8, ["modelValue", "index", "editable", "preview", "validation-errors"])),
    r.modelValue.presenter ? (Z(), Jt(Hn(r.modelValue.presenter), Ia({
      key: 2,
      "model-value": r.modelValue,
      "validation-errors": r.validationErrors,
      editable: r.editable
    }, { possibleValues: r.possibleValues }), null, 16, ["model-value", "validation-errors", "editable"])) : De("", !0),
    xn(t.$slots, "default")
  ], 2);
}
const Ep = /* @__PURE__ */ bt(gp, [["render", Sp]]), wp = {
  name: "VForm",
  components: {
    VField: Ep
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
    modelValue: {
      type: [Object],
      default: () => ({})
    },
    possibleValues: {
      type: [Object],
      default: () => ({})
    },
    validationErrors: {
      type: Object,
      default: () => ({})
    },
    googleApiKey: {
      type: String,
      default: null
    },
    dateFullYear: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    var t;
    return {
      csrf: (t = document.head.querySelector('meta[name="csrf-token"]')) == null ? void 0 : t.content,
      updatedData: an(this.modelValue)
    };
  },
  provide() {
    return {
      possibleFormValues: this.possibleValues,
      getFormValue: (t, e) => e == null ? void 0 : e.split(".").reduce((r, a) => r && r[a], t)
    };
  },
  mounted() {
    console.log("Mounted VForm", this.googleApiKey);
    const t = ns(), e = (t == null ? void 0 : t.appContext.config.globalProperties.$customFormComponents) ?? [];
    this.populateCustomComponents(e);
  },
  methods: {
    updateField(t, e) {
      this.modelValue.fields[t] = e, this.updatedData = an(this.modelValue);
    },
    populateCustomComponents(t) {
      this.modelValue.fields = this.modelValue.fields.map((e) => (["builder", "presenter"].forEach((r) => {
        if (e[r]) {
          const a = t.find((i) => {
            var c, n;
            return ((c = i[r]) == null ? void 0 : c.__name) === ((n = e[r]) == null ? void 0 : n.__name);
          });
          a && (e[r] = rt(a[r]));
        }
      }), e));
    },
    getValidationMessage(t) {
      const e = `fields.${t}.value`;
      return this.validationErrors.hasOwnProperty(e) ? this.validationErrors[e].join("|") : "";
    }
  }
}, Tp = ["action", "method", "name"], Ap = ["value"], Cp = ["value"], Op = ["name", "value"], Pp = { key: 0 }, Rp = ["textContent"];
function Ip(t, e, r, a, i, c) {
  var l, o;
  const n = rn("v-field");
  return Z(), ne("form", {
    class: "v-form",
    action: r.action,
    method: r.method !== "get" ? "post" : "get",
    name: r.name
  }, [
    k("input", {
      type: "hidden",
      name: "_token",
      value: i.csrf
    }, null, 8, Ap),
    k("input", {
      type: "hidden",
      name: "_method",
      value: r.method
    }, null, 8, Cp),
    k("input", {
      type: "hidden",
      name: r.name,
      value: JSON.stringify(i.updatedData)
    }, null, 8, Op),
    k("div", {
      class: "fields",
      style: _l({
        "pointer-events": r.canInteract ? "auto" : "none",
        "user-select": r.canInteract ? "auto" : "none"
      })
    }, [
      r.title ? (Z(), ne("div", Pp, [
        k("h3", null, Ve(r.title), 1),
        e[0] || (e[0] = k("hr", null, null, -1))
      ])) : De("", !0),
      (o = (l = r.modelValue) == null ? void 0 : l.fields) != null && o.length ? (Z(!0), ne(Ct, { key: 1 }, bn(r.modelValue.fields, (s, u) => (Z(), ne("div", {
        key: s.id
      }, [
        (Z(), Jt(n, {
          key: s.name,
          index: u,
          "model-value": s,
          "onUpdate:modelValue": (d) => c.updateField(u, d),
          editable: r.editable,
          preview: r.preview,
          "validation-errors": r.validationErrors,
          "possible-values": r.possibleValues
        }, {
          default: Tt(() => [
            s.hasOwnProperty("presenter") ? De("", !0) : (Z(), ne("p", {
              key: 0,
              class: "text-red-700 text-xs mt-1",
              textContent: Ve(c.getValidationMessage(u))
            }, null, 8, Rp))
          ]),
          _: 2
        }, 1032, ["index", "model-value", "onUpdate:modelValue", "editable", "preview", "validation-errors", "possible-values"]))
      ]))), 128)) : De("", !0)
    ], 4),
    r.editable ? xn(t.$slots, "default", { key: 0 }) : De("", !0)
  ], 8, Tp);
}
const Dp = /* @__PURE__ */ bt(wp, [["render", Ip]]);
class Fp {
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
const Mp = new Fp();
var co = { exports: {} };
const Lp = /* @__PURE__ */ Ps(Yl);
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
      Up(t, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : $i(Object(r)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return t;
}
function fo(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? fo = function(e) {
    return typeof e;
  } : fo = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, fo(t);
}
function Up(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function qt() {
  return qt = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, qt.apply(this, arguments);
}
function Np(t, e) {
  if (t == null) return {};
  var r = {}, a = Object.keys(t), i, c;
  for (c = 0; c < a.length; c++)
    i = a[c], !(e.indexOf(i) >= 0) && (r[i] = t[i]);
  return r;
}
function jp(t, e) {
  if (t == null) return {};
  var r = Np(t, e), a, i;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(t);
    for (i = 0; i < c.length; i++)
      a = c[i], !(e.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(t, a) && (r[a] = t[a]);
  }
  return r;
}
function kp(t) {
  return Vp(t) || $p(t) || Bp(t) || Hp();
}
function Vp(t) {
  if (Array.isArray(t)) return Ea(t);
}
function $p(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Bp(t, e) {
  if (t) {
    if (typeof t == "string") return Ea(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ea(t, e);
  }
}
function Ea(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, a = new Array(e); r < e; r++) a[r] = t[r];
  return a;
}
function Hp() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var zp = "1.14.0";
function yn(t) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(t);
}
var Tn = yn(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Ur = yn(/Edge/i), Bi = yn(/firefox/i), wr = yn(/safari/i) && !yn(/chrome/i) && !yn(/android/i), dl = yn(/iP(ad|od|hone)/i), Gp = yn(/chrome/i) && yn(/android/i), fl = {
  capture: !1,
  passive: !1
};
function Je(t, e, r) {
  t.addEventListener(e, r, !Tn && fl);
}
function Xe(t, e, r) {
  t.removeEventListener(e, r, !Tn && fl);
}
function Co(t, e) {
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
function Wp(t) {
  return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
}
function nn(t, e, r, a) {
  if (t) {
    r = r || document;
    do {
      if (e != null && (e[0] === ">" ? t.parentNode === r && Co(t, e) : Co(t, e)) || a && t === r)
        return t;
      if (t === r) break;
    } while (t = Wp(t));
  }
  return null;
}
var Hi = /\s+/g;
function dt(t, e, r) {
  if (t && e)
    if (t.classList)
      t.classList[r ? "add" : "remove"](e);
    else {
      var a = (" " + t.className + " ").replace(Hi, " ").replace(" " + e + " ", " ");
      t.className = (a + (r ? " " + e : "")).replace(Hi, " ");
    }
}
function Fe(t, e, r) {
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
      var a = Fe(t, "transform");
      a && a !== "none" && (r = a + " " + r);
    } while (!e && (t = t.parentNode));
  var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return i && new i(r);
}
function hl(t, e, r) {
  if (t) {
    var a = t.getElementsByTagName(e), i = 0, c = a.length;
    if (r)
      for (; i < c; i++)
        r(a[i], i);
    return a;
  }
  return [];
}
function cn() {
  var t = document.scrollingElement;
  return t || document.documentElement;
}
function ct(t, e, r, a, i) {
  if (!(!t.getBoundingClientRect && t !== window)) {
    var c, n, l, o, s, u, d;
    if (t !== window && t.parentNode && t !== cn() ? (c = t.getBoundingClientRect(), n = c.top, l = c.left, o = c.bottom, s = c.right, u = c.height, d = c.width) : (n = 0, l = 0, o = window.innerHeight, s = window.innerWidth, u = window.innerHeight, d = window.innerWidth), (e || r) && t !== window && (i = i || t.parentNode, !Tn))
      do
        if (i && i.getBoundingClientRect && (Fe(i, "transform") !== "none" || r && Fe(i, "position") !== "static")) {
          var h = i.getBoundingClientRect();
          n -= h.top + parseInt(Fe(i, "border-top-width")), l -= h.left + parseInt(Fe(i, "border-left-width")), o = n + c.height, s = l + c.width;
          break;
        }
      while (i = i.parentNode);
    if (a && t !== window) {
      var p = Gn(i || t), f = p && p.a, v = p && p.d;
      p && (n /= v, l /= f, d /= f, u /= v, o = n + u, s = l + d);
    }
    return {
      top: n,
      left: l,
      bottom: o,
      right: s,
      width: d,
      height: u
    };
  }
}
function zi(t, e, r) {
  for (var a = Pn(t, !0), i = ct(t)[e]; a; ) {
    var c = ct(a)[r], n = void 0;
    if (n = i >= c, !n) return a;
    if (a === cn()) break;
    a = Pn(a, !1);
  }
  return !1;
}
function or(t, e, r, a) {
  for (var i = 0, c = 0, n = t.children; c < n.length; ) {
    if (n[c].style.display !== "none" && n[c] !== $e.ghost && (a || n[c] !== $e.dragged) && nn(n[c], r.draggable, t, !1)) {
      if (i === e)
        return n[c];
      i++;
    }
    c++;
  }
  return null;
}
function Za(t, e) {
  for (var r = t.lastElementChild; r && (r === $e.ghost || Fe(r, "display") === "none" || e && !Co(r, e)); )
    r = r.previousElementSibling;
  return r || null;
}
function pt(t, e) {
  var r = 0;
  if (!t || !t.parentNode)
    return -1;
  for (; t = t.previousElementSibling; )
    t.nodeName.toUpperCase() !== "TEMPLATE" && t !== $e.clone && (!e || Co(t, e)) && r++;
  return r;
}
function Gi(t) {
  var e = 0, r = 0, a = cn();
  if (t)
    do {
      var i = Gn(t), c = i.a, n = i.d;
      e += t.scrollLeft * c, r += t.scrollTop * n;
    } while (t !== a && (t = t.parentNode));
  return [e, r];
}
function Yp(t, e) {
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      for (var a in e)
        if (e.hasOwnProperty(a) && e[a] === t[r][a]) return Number(r);
    }
  return -1;
}
function Pn(t, e) {
  if (!t || !t.getBoundingClientRect) return cn();
  var r = t, a = !1;
  do
    if (r.clientWidth < r.scrollWidth || r.clientHeight < r.scrollHeight) {
      var i = Fe(r);
      if (r.clientWidth < r.scrollWidth && (i.overflowX == "auto" || i.overflowX == "scroll") || r.clientHeight < r.scrollHeight && (i.overflowY == "auto" || i.overflowY == "scroll")) {
        if (!r.getBoundingClientRect || r === document.body) return cn();
        if (a || e) return r;
        a = !0;
      }
    }
  while (r = r.parentNode);
  return cn();
}
function Kp(t, e) {
  if (t && e)
    for (var r in e)
      e.hasOwnProperty(r) && (t[r] = e[r]);
  return t;
}
function oa(t, e) {
  return Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width);
}
var Tr;
function pl(t, e) {
  return function() {
    if (!Tr) {
      var r = arguments, a = this;
      r.length === 1 ? t.call(a, r[0]) : t.apply(a, r), Tr = setTimeout(function() {
        Tr = void 0;
      }, e);
    }
  };
}
function Xp() {
  clearTimeout(Tr), Tr = void 0;
}
function vl(t, e, r) {
  t.scrollLeft += e, t.scrollTop += r;
}
function qa(t) {
  var e = window.Polymer, r = window.jQuery || window.Zepto;
  return e && e.dom ? e.dom(t).cloneNode(!0) : r ? r(t).clone(!0)[0] : t.cloneNode(!0);
}
function Wi(t, e) {
  Fe(t, "position", "absolute"), Fe(t, "top", e.top), Fe(t, "left", e.left), Fe(t, "width", e.width), Fe(t, "height", e.height);
}
function aa(t) {
  Fe(t, "position", ""), Fe(t, "top", ""), Fe(t, "left", ""), Fe(t, "width", ""), Fe(t, "height", "");
}
var Pt = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function Jp() {
  var t = [], e;
  return {
    captureAnimationState: function() {
      if (t = [], !!this.options.animation) {
        var a = [].slice.call(this.el.children);
        a.forEach(function(i) {
          if (!(Fe(i, "display") === "none" || i === $e.ghost)) {
            t.push({
              target: i,
              rect: ct(i)
            });
            var c = dn({}, t[t.length - 1].rect);
            if (i.thisAnimationDuration) {
              var n = Gn(i, !0);
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
      t.splice(Yp(t, {
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
      t.forEach(function(l) {
        var o = 0, s = l.target, u = s.fromRect, d = ct(s), h = s.prevFromRect, p = s.prevToRect, f = l.rect, v = Gn(s, !0);
        v && (d.top -= v.f, d.left -= v.e), s.toRect = d, s.thisAnimationDuration && oa(h, d) && !oa(u, d) && // Make sure animatingRect is on line between toRect & fromRect
        (f.top - d.top) / (f.left - d.left) === (u.top - d.top) / (u.left - d.left) && (o = Zp(f, h, p, i.options)), oa(d, u) || (s.prevFromRect = u, s.prevToRect = d, o || (o = i.options.animation), i.animate(s, f, d, o)), o && (c = !0, n = Math.max(n, o), clearTimeout(s.animationResetTimer), s.animationResetTimer = setTimeout(function() {
          s.animationTime = 0, s.prevFromRect = null, s.fromRect = null, s.prevToRect = null, s.thisAnimationDuration = null;
        }, o), s.thisAnimationDuration = o);
      }), clearTimeout(e), c ? e = setTimeout(function() {
        typeof a == "function" && a();
      }, n) : typeof a == "function" && a(), t = [];
    },
    animate: function(a, i, c, n) {
      if (n) {
        Fe(a, "transition", ""), Fe(a, "transform", "");
        var l = Gn(this.el), o = l && l.a, s = l && l.d, u = (i.left - c.left) / (o || 1), d = (i.top - c.top) / (s || 1);
        a.animatingX = !!u, a.animatingY = !!d, Fe(a, "transform", "translate3d(" + u + "px," + d + "px,0)"), this.forRepaintDummy = Qp(a), Fe(a, "transition", "transform " + n + "ms" + (this.options.easing ? " " + this.options.easing : "")), Fe(a, "transform", "translate3d(0,0,0)"), typeof a.animated == "number" && clearTimeout(a.animated), a.animated = setTimeout(function() {
          Fe(a, "transition", ""), Fe(a, "transform", ""), a.animated = !1, a.animatingX = !1, a.animatingY = !1;
        }, n);
      }
    }
  };
}
function Qp(t) {
  return t.offsetWidth;
}
function Zp(t, e, r, a) {
  return Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) / Math.sqrt(Math.pow(e.top - r.top, 2) + Math.pow(e.left - r.left, 2)) * a.animation;
}
var Qn = [], ia = {
  initializeByDefault: !0
}, Nr = {
  mount: function(e) {
    for (var r in ia)
      ia.hasOwnProperty(r) && !(r in e) && (e[r] = ia[r]);
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
    var c = e + "Global";
    Qn.forEach(function(n) {
      r[n.pluginName] && (r[n.pluginName][c] && r[n.pluginName][c](dn({
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
        s.sortable = e, s.options = e.options, e[o] = s, qt(a, s.defaults);
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
    return Qn.forEach(function(i) {
      typeof i.eventProperties == "function" && qt(a, i.eventProperties.call(r[i.pluginName], e));
    }), a;
  },
  modifyOption: function(e, r, a) {
    var i;
    return Qn.forEach(function(c) {
      e[c.pluginName] && c.optionListeners && typeof c.optionListeners[r] == "function" && (i = c.optionListeners[r].call(e[c.pluginName], a));
    }), i;
  }
};
function yr(t) {
  var e = t.sortable, r = t.rootEl, a = t.name, i = t.targetEl, c = t.cloneEl, n = t.toEl, l = t.fromEl, o = t.oldIndex, s = t.newIndex, u = t.oldDraggableIndex, d = t.newDraggableIndex, h = t.originalEvent, p = t.putSortable, f = t.extraEventProperties;
  if (e = e || r && r[Pt], !!e) {
    var v, m = e.options, g = "on" + a.charAt(0).toUpperCase() + a.substr(1);
    window.CustomEvent && !Tn && !Ur ? v = new CustomEvent(a, {
      bubbles: !0,
      cancelable: !0
    }) : (v = document.createEvent("Event"), v.initEvent(a, !0, !0)), v.to = n || r, v.from = l || r, v.item = i || r, v.clone = c, v.oldIndex = o, v.newIndex = s, v.oldDraggableIndex = u, v.newDraggableIndex = d, v.originalEvent = h, v.pullMode = p ? p.lastPutMode : void 0;
    var y = dn(dn({}, f), Nr.getEventProperties(a, e));
    for (var S in y)
      v[S] = y[S];
    r && r.dispatchEvent(v), m[g] && m[g].call(e, v);
  }
}
var qp = ["evt"], Ut = function(e, r) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = a.evt, c = jp(a, qp);
  Nr.pluginEvent.bind($e)(e, r, dn({
    dragEl: ye,
    parentEl: ft,
    ghostEl: We,
    rootEl: ut,
    nextEl: kn,
    lastDownEl: ho,
    cloneEl: ht,
    cloneHidden: Cn,
    dragStarted: br,
    putSortable: wt,
    activeSortable: $e.active,
    originalEvent: i,
    oldIndex: nr,
    oldDraggableIndex: Ar,
    newIndex: Ht,
    newDraggableIndex: An,
    hideGhostForTarget: bl,
    unhideGhostForTarget: xl,
    cloneNowHidden: function() {
      Cn = !0;
    },
    cloneNowShown: function() {
      Cn = !1;
    },
    dispatchSortableEvent: function(l) {
      Rt({
        sortable: r,
        name: l,
        originalEvent: i
      });
    }
  }, c));
};
function Rt(t) {
  yr(dn({
    putSortable: wt,
    cloneEl: ht,
    targetEl: ye,
    rootEl: ut,
    oldIndex: nr,
    oldDraggableIndex: Ar,
    newIndex: Ht,
    newDraggableIndex: An
  }, t));
}
var ye, ft, We, ut, kn, ho, ht, Cn, nr, Ht, Ar, An, to, wt, er = !1, Oo = !1, Po = [], Nn, en, sa, la, Yi, Ki, br, Zn, Cr, Or = !1, no = !1, po, At, ua = [], wa = !1, Ro = [], Yo = typeof document < "u", ro = dl, Xi = Ur || Tn ? "cssFloat" : "float", _p = Yo && !Gp && !dl && "draggable" in document.createElement("div"), ml = function() {
  if (Yo) {
    if (Tn)
      return !1;
    var t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
  }
}(), gl = function(e, r) {
  var a = Fe(e), i = parseInt(a.width) - parseInt(a.paddingLeft) - parseInt(a.paddingRight) - parseInt(a.borderLeftWidth) - parseInt(a.borderRightWidth), c = or(e, 0, r), n = or(e, 1, r), l = c && Fe(c), o = n && Fe(n), s = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + ct(c).width, u = o && parseInt(o.marginLeft) + parseInt(o.marginRight) + ct(n).width;
  if (a.display === "flex")
    return a.flexDirection === "column" || a.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (a.display === "grid")
    return a.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (c && l.float && l.float !== "none") {
    var d = l.float === "left" ? "left" : "right";
    return n && (o.clear === "both" || o.clear === d) ? "vertical" : "horizontal";
  }
  return c && (l.display === "block" || l.display === "flex" || l.display === "table" || l.display === "grid" || s >= i && a[Xi] === "none" || n && a[Xi] === "none" && s + u > i) ? "vertical" : "horizontal";
}, ev = function(e, r, a) {
  var i = a ? e.left : e.top, c = a ? e.right : e.bottom, n = a ? e.width : e.height, l = a ? r.left : r.top, o = a ? r.right : r.bottom, s = a ? r.width : r.height;
  return i === l || c === o || i + n / 2 === l + s / 2;
}, tv = function(e, r) {
  var a;
  return Po.some(function(i) {
    var c = i[Pt].options.emptyInsertThreshold;
    if (!(!c || Za(i))) {
      var n = ct(i), l = e >= n.left - c && e <= n.right + c, o = r >= n.top - c && r <= n.bottom + c;
      if (l && o)
        return a = i;
    }
  }), a;
}, yl = function(e) {
  function r(c, n) {
    return function(l, o, s, u) {
      var d = l.options.group.name && o.options.group.name && l.options.group.name === o.options.group.name;
      if (c == null && (n || d))
        return !0;
      if (c == null || c === !1)
        return !1;
      if (n && c === "clone")
        return c;
      if (typeof c == "function")
        return r(c(l, o, s, u), n)(l, o, s, u);
      var h = (n ? l : o).options.group.name;
      return c === !0 || typeof c == "string" && c === h || c.join && c.indexOf(h) > -1;
    };
  }
  var a = {}, i = e.group;
  (!i || fo(i) != "object") && (i = {
    name: i
  }), a.name = i.name, a.checkPull = r(i.pull, !0), a.checkPut = r(i.put), a.revertClone = i.revertClone, e.group = a;
}, bl = function() {
  !ml && We && Fe(We, "display", "none");
}, xl = function() {
  !ml && We && Fe(We, "display", "");
};
Yo && document.addEventListener("click", function(t) {
  if (Oo)
    return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), Oo = !1, !1;
}, !0);
var jn = function(e) {
  if (ye) {
    e = e.touches ? e.touches[0] : e;
    var r = tv(e.clientX, e.clientY);
    if (r) {
      var a = {};
      for (var i in e)
        e.hasOwnProperty(i) && (a[i] = e[i]);
      a.target = a.rootEl = r, a.preventDefault = void 0, a.stopPropagation = void 0, r[Pt]._onDragOver(a);
    }
  }
}, nv = function(e) {
  ye && ye.parentNode[Pt]._isOutsideThisEl(e.target);
};
function $e(t, e) {
  if (!(t && t.nodeType && t.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
  this.el = t, this.options = e = qt({}, e), t[Pt] = this;
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
      return gl(t, this.options);
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
  Nr.initializePlugins(this, t, r);
  for (var a in r)
    !(a in e) && (e[a] = r[a]);
  yl(e);
  for (var i in this)
    i.charAt(0) === "_" && typeof this[i] == "function" && (this[i] = this[i].bind(this));
  this.nativeDraggable = e.forceFallback ? !1 : _p, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? Je(t, "pointerdown", this._onTapStart) : (Je(t, "mousedown", this._onTapStart), Je(t, "touchstart", this._onTapStart)), this.nativeDraggable && (Je(t, "dragover", this), Je(t, "dragenter", this)), Po.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), qt(this, Jp());
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
      var r = this, a = this.el, i = this.options, c = i.preventOnFilter, n = e.type, l = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e, o = (l || e).target, s = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || o, u = i.filter;
      if (cv(a), !ye && !(/mousedown|pointerdown/.test(n) && e.button !== 0 || i.disabled) && !s.isContentEditable && !(!this.nativeDraggable && wr && o && o.tagName.toUpperCase() === "SELECT") && (o = nn(o, i.draggable, a, !1), !(o && o.animated) && ho !== o)) {
        if (nr = pt(o), Ar = pt(o, i.draggable), typeof u == "function") {
          if (u.call(this, e, o, this)) {
            Rt({
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
        } else if (u && (u = u.split(",").some(function(d) {
          if (d = nn(s, d.trim(), a, !1), d)
            return Rt({
              sortable: r,
              rootEl: d,
              name: "filter",
              targetEl: o,
              fromEl: a,
              toEl: a
            }), Ut("filter", r, {
              evt: e
            }), !0;
        }), u)) {
          c && e.cancelable && e.preventDefault();
          return;
        }
        i.handle && !nn(s, i.handle, a, !1) || this._prepareDragStart(e, l, o);
      }
    }
  },
  _prepareDragStart: function(e, r, a) {
    var i = this, c = i.el, n = i.options, l = c.ownerDocument, o;
    if (a && !ye && a.parentNode === c) {
      var s = ct(a);
      if (ut = c, ye = a, ft = ye.parentNode, kn = ye.nextSibling, ho = a, to = n.group, $e.dragged = ye, Nn = {
        target: ye,
        clientX: (r || e).clientX,
        clientY: (r || e).clientY
      }, Yi = Nn.clientX - s.left, Ki = Nn.clientY - s.top, this._lastX = (r || e).clientX, this._lastY = (r || e).clientY, ye.style["will-change"] = "all", o = function() {
        if (Ut("delayEnded", i, {
          evt: e
        }), $e.eventCanceled) {
          i._onDrop();
          return;
        }
        i._disableDelayedDragEvents(), !Bi && i.nativeDraggable && (ye.draggable = !0), i._triggerDragStart(e, r), Rt({
          sortable: i,
          name: "choose",
          originalEvent: e
        }), dt(ye, n.chosenClass, !0);
      }, n.ignore.split(",").forEach(function(u) {
        hl(ye, u.trim(), ca);
      }), Je(l, "dragover", jn), Je(l, "mousemove", jn), Je(l, "touchmove", jn), Je(l, "mouseup", i._onDrop), Je(l, "touchend", i._onDrop), Je(l, "touchcancel", i._onDrop), Bi && this.nativeDraggable && (this.options.touchStartThreshold = 4, ye.draggable = !0), Ut("delayStart", this, {
        evt: e
      }), n.delay && (!n.delayOnTouchOnly || r) && (!this.nativeDraggable || !(Ur || Tn))) {
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
    ye && ca(ye), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var e = this.el.ownerDocument;
    Xe(e, "mouseup", this._disableDelayedDrag), Xe(e, "touchend", this._disableDelayedDrag), Xe(e, "touchcancel", this._disableDelayedDrag), Xe(e, "mousemove", this._delayedDragTouchMoveHandler), Xe(e, "touchmove", this._delayedDragTouchMoveHandler), Xe(e, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(e, r) {
    r = r || e.pointerType == "touch" && e, !this.nativeDraggable || r ? this.options.supportPointer ? Je(document, "pointermove", this._onTouchMove) : r ? Je(document, "touchmove", this._onTouchMove) : Je(document, "mousemove", this._onTouchMove) : (Je(ye, "dragend", this), Je(ut, "dragstart", this._onDragStart));
    try {
      document.selection ? vo(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(e, r) {
    if (er = !1, ut && ye) {
      Ut("dragStarted", this, {
        evt: r
      }), this.nativeDraggable && Je(document, "dragover", nv);
      var a = this.options;
      !e && dt(ye, a.dragClass, !1), dt(ye, a.ghostClass, !0), $e.active = this, e && this._appendGhost(), Rt({
        sortable: this,
        name: "start",
        originalEvent: r
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (en) {
      this._lastX = en.clientX, this._lastY = en.clientY, bl();
      for (var e = document.elementFromPoint(en.clientX, en.clientY), r = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(en.clientX, en.clientY), e !== r); )
        r = e;
      if (ye.parentNode[Pt]._isOutsideThisEl(e), r)
        do {
          if (r[Pt]) {
            var a = void 0;
            if (a = r[Pt]._onDragOver({
              clientX: en.clientX,
              clientY: en.clientY,
              target: e,
              rootEl: r
            }), a && !this.options.dragoverBubble)
              break;
          }
          e = r;
        } while (r = r.parentNode);
      xl();
    }
  },
  _onTouchMove: function(e) {
    if (Nn) {
      var r = this.options, a = r.fallbackTolerance, i = r.fallbackOffset, c = e.touches ? e.touches[0] : e, n = We && Gn(We, !0), l = We && n && n.a, o = We && n && n.d, s = ro && At && Gi(At), u = (c.clientX - Nn.clientX + i.x) / (l || 1) + (s ? s[0] - ua[0] : 0) / (l || 1), d = (c.clientY - Nn.clientY + i.y) / (o || 1) + (s ? s[1] - ua[1] : 0) / (o || 1);
      if (!$e.active && !er) {
        if (a && Math.max(Math.abs(c.clientX - this._lastX), Math.abs(c.clientY - this._lastY)) < a)
          return;
        this._onDragStart(e, !0);
      }
      if (We) {
        n ? (n.e += u - (sa || 0), n.f += d - (la || 0)) : n = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: u,
          f: d
        };
        var h = "matrix(".concat(n.a, ",").concat(n.b, ",").concat(n.c, ",").concat(n.d, ",").concat(n.e, ",").concat(n.f, ")");
        Fe(We, "webkitTransform", h), Fe(We, "mozTransform", h), Fe(We, "msTransform", h), Fe(We, "transform", h), sa = u, la = d, en = c;
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!We) {
      var e = this.options.fallbackOnBody ? document.body : ut, r = ct(ye, !0, ro, !0, e), a = this.options;
      if (ro) {
        for (At = e; Fe(At, "position") === "static" && Fe(At, "transform") === "none" && At !== document; )
          At = At.parentNode;
        At !== document.body && At !== document.documentElement ? (At === document && (At = cn()), r.top += At.scrollTop, r.left += At.scrollLeft) : At = cn(), ua = Gi(At);
      }
      We = ye.cloneNode(!0), dt(We, a.ghostClass, !1), dt(We, a.fallbackClass, !0), dt(We, a.dragClass, !0), Fe(We, "transition", ""), Fe(We, "transform", ""), Fe(We, "box-sizing", "border-box"), Fe(We, "margin", 0), Fe(We, "top", r.top), Fe(We, "left", r.left), Fe(We, "width", r.width), Fe(We, "height", r.height), Fe(We, "opacity", "0.8"), Fe(We, "position", ro ? "absolute" : "fixed"), Fe(We, "zIndex", "100000"), Fe(We, "pointerEvents", "none"), $e.ghost = We, e.appendChild(We), Fe(We, "transform-origin", Yi / parseInt(We.style.width) * 100 + "% " + Ki / parseInt(We.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(e, r) {
    var a = this, i = e.dataTransfer, c = a.options;
    if (Ut("dragStart", this, {
      evt: e
    }), $e.eventCanceled) {
      this._onDrop();
      return;
    }
    Ut("setupClone", this), $e.eventCanceled || (ht = qa(ye), ht.draggable = !1, ht.style["will-change"] = "", this._hideClone(), dt(ht, this.options.chosenClass, !1), $e.clone = ht), a.cloneId = vo(function() {
      Ut("clone", a), !$e.eventCanceled && (a.options.removeCloneOnHide || ut.insertBefore(ht, ye), a._hideClone(), Rt({
        sortable: a,
        name: "clone"
      }));
    }), !r && dt(ye, c.dragClass, !0), r ? (Oo = !0, a._loopId = setInterval(a._emulateDragOver, 50)) : (Xe(document, "mouseup", a._onDrop), Xe(document, "touchend", a._onDrop), Xe(document, "touchcancel", a._onDrop), i && (i.effectAllowed = "move", c.setData && c.setData.call(a, i, ye)), Je(document, "drop", a), Fe(ye, "transform", "translateZ(0)")), er = !0, a._dragStartId = vo(a._dragStarted.bind(a, r, e)), Je(document, "selectstart", a), br = !0, wr && Fe(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(e) {
    var r = this.el, a = e.target, i, c, n, l = this.options, o = l.group, s = $e.active, u = to === o, d = l.sort, h = wt || s, p, f = this, v = !1;
    if (wa) return;
    function m(X, he) {
      Ut(X, f, dn({
        evt: e,
        isOwner: u,
        axis: p ? "vertical" : "horizontal",
        revert: n,
        dragRect: i,
        targetRect: c,
        canSort: d,
        fromSortable: h,
        target: a,
        completed: y,
        onMove: function(Te, Ie) {
          return oo(ut, r, ye, i, Te, ct(Te), e, Ie);
        },
        changed: S
      }, he));
    }
    function g() {
      m("dragOverAnimationCapture"), f.captureAnimationState(), f !== h && h.captureAnimationState();
    }
    function y(X) {
      return m("dragOverCompleted", {
        insertion: X
      }), X && (u ? s._hideClone() : s._showClone(f), f !== h && (dt(ye, wt ? wt.options.ghostClass : s.options.ghostClass, !1), dt(ye, l.ghostClass, !0)), wt !== f && f !== $e.active ? wt = f : f === $e.active && wt && (wt = null), h === f && (f._ignoreWhileAnimating = a), f.animateAll(function() {
        m("dragOverAnimationComplete"), f._ignoreWhileAnimating = null;
      }), f !== h && (h.animateAll(), h._ignoreWhileAnimating = null)), (a === ye && !ye.animated || a === r && !a.animated) && (Zn = null), !l.dragoverBubble && !e.rootEl && a !== document && (ye.parentNode[Pt]._isOutsideThisEl(e.target), !X && jn(e)), !l.dragoverBubble && e.stopPropagation && e.stopPropagation(), v = !0;
    }
    function S() {
      Ht = pt(ye), An = pt(ye, l.draggable), Rt({
        sortable: f,
        name: "change",
        toEl: r,
        newIndex: Ht,
        newDraggableIndex: An,
        originalEvent: e
      });
    }
    if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), a = nn(a, l.draggable, r, !0), m("dragOver"), $e.eventCanceled) return v;
    if (ye.contains(e.target) || a.animated && a.animatingX && a.animatingY || f._ignoreWhileAnimating === a)
      return y(!1);
    if (Oo = !1, s && !l.disabled && (u ? d || (n = ft !== ut) : wt === this || (this.lastPutMode = to.checkPull(this, s, ye, e)) && o.checkPut(this, s, ye, e))) {
      if (p = this._getDirection(e, a) === "vertical", i = ct(ye), m("dragOverValid"), $e.eventCanceled) return v;
      if (n)
        return ft = ut, g(), this._hideClone(), m("revert"), $e.eventCanceled || (kn ? ut.insertBefore(ye, kn) : ut.appendChild(ye)), y(!0);
      var E = Za(r, l.draggable);
      if (!E || iv(e, p, this) && !E.animated) {
        if (E === ye)
          return y(!1);
        if (E && r === e.target && (a = E), a && (c = ct(a)), oo(ut, r, ye, i, a, c, e, !!a) !== !1)
          return g(), r.appendChild(ye), ft = r, S(), y(!0);
      } else if (E && av(e, p, this)) {
        var A = or(r, 0, l, !0);
        if (A === ye)
          return y(!1);
        if (a = A, c = ct(a), oo(ut, r, ye, i, a, c, e, !1) !== !1)
          return g(), r.insertBefore(ye, A), ft = r, S(), y(!0);
      } else if (a.parentNode === r) {
        c = ct(a);
        var w = 0, P, O = ye.parentNode !== r, D = !ev(ye.animated && ye.toRect || i, a.animated && a.toRect || c, p), N = p ? "top" : "left", j = zi(a, "top", "top") || zi(ye, "top", "top"), H = j ? j.scrollTop : void 0;
        Zn !== a && (P = c[N], Or = !1, no = !D && l.invertSwap || O), w = sv(e, a, c, p, D ? 1 : l.swapThreshold, l.invertedSwapThreshold == null ? l.swapThreshold : l.invertedSwapThreshold, no, Zn === a);
        var V;
        if (w !== 0) {
          var z = pt(ye);
          do
            z -= w, V = ft.children[z];
          while (V && (Fe(V, "display") === "none" || V === We));
        }
        if (w === 0 || V === a)
          return y(!1);
        Zn = a, Cr = w;
        var Y = a.nextElementSibling, W = !1;
        W = w === 1;
        var ae = oo(ut, r, ye, i, a, c, e, W);
        if (ae !== !1)
          return (ae === 1 || ae === -1) && (W = ae === 1), wa = !0, setTimeout(ov, 30), g(), W && !Y ? r.appendChild(ye) : a.parentNode.insertBefore(ye, W ? Y : a), j && vl(j, 0, H - j.scrollTop), ft = ye.parentNode, P !== void 0 && !no && (po = Math.abs(P - ct(a)[N])), S(), y(!0);
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
    if (Ht = pt(ye), An = pt(ye, a.draggable), Ut("drop", this, {
      evt: e
    }), ft = ye && ye.parentNode, Ht = pt(ye), An = pt(ye, a.draggable), $e.eventCanceled) {
      this._nulling();
      return;
    }
    er = !1, no = !1, Or = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Ta(this.cloneId), Ta(this._dragStartId), this.nativeDraggable && (Xe(document, "drop", this), Xe(r, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), wr && Fe(document.body, "user-select", ""), Fe(ye, "transform", ""), e && (br && (e.cancelable && e.preventDefault(), !a.dropBubble && e.stopPropagation()), We && We.parentNode && We.parentNode.removeChild(We), (ut === ft || wt && wt.lastPutMode !== "clone") && ht && ht.parentNode && ht.parentNode.removeChild(ht), ye && (this.nativeDraggable && Xe(ye, "dragend", this), ca(ye), ye.style["will-change"] = "", br && !er && dt(ye, wt ? wt.options.ghostClass : this.options.ghostClass, !1), dt(ye, this.options.chosenClass, !1), Rt({
      sortable: this,
      name: "unchoose",
      toEl: ft,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: e
    }), ut !== ft ? (Ht >= 0 && (Rt({
      rootEl: ft,
      name: "add",
      toEl: ft,
      fromEl: ut,
      originalEvent: e
    }), Rt({
      sortable: this,
      name: "remove",
      toEl: ft,
      originalEvent: e
    }), Rt({
      rootEl: ft,
      name: "sort",
      toEl: ft,
      fromEl: ut,
      originalEvent: e
    }), Rt({
      sortable: this,
      name: "sort",
      toEl: ft,
      originalEvent: e
    })), wt && wt.save()) : Ht !== nr && Ht >= 0 && (Rt({
      sortable: this,
      name: "update",
      toEl: ft,
      originalEvent: e
    }), Rt({
      sortable: this,
      name: "sort",
      toEl: ft,
      originalEvent: e
    })), $e.active && ((Ht == null || Ht === -1) && (Ht = nr, An = Ar), Rt({
      sortable: this,
      name: "end",
      toEl: ft,
      originalEvent: e
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    Ut("nulling", this), ut = ye = ft = We = kn = ht = ho = Cn = Nn = en = br = Ht = An = nr = Ar = Zn = Cr = wt = to = $e.dragged = $e.ghost = $e.clone = $e.active = null, Ro.forEach(function(e) {
      e.checked = !0;
    }), Ro.length = sa = la = 0;
  },
  handleEvent: function(e) {
    switch (e.type) {
      case "drop":
      case "dragend":
        this._onDrop(e);
        break;
      case "dragenter":
      case "dragover":
        ye && (this._onDragOver(e), rv(e));
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
      r = a[i], nn(r, n.draggable, this.el, !1) && e.push(r.getAttribute(n.dataIdAttr) || uv(r));
    return e;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(e, r) {
    var a = {}, i = this.el;
    this.toArray().forEach(function(c, n) {
      var l = i.children[n];
      nn(l, this.options.draggable, i, !1) && (a[c] = l);
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
    return nn(e, r || this.options.draggable, this.el, !1);
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
    var i = Nr.modifyOption(this, e, r);
    typeof i < "u" ? a[e] = i : a[e] = r, e === "group" && yl(a);
  },
  /**
   * Destroy
   */
  destroy: function() {
    Ut("destroy", this);
    var e = this.el;
    e[Pt] = null, Xe(e, "mousedown", this._onTapStart), Xe(e, "touchstart", this._onTapStart), Xe(e, "pointerdown", this._onTapStart), this.nativeDraggable && (Xe(e, "dragover", this), Xe(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(r) {
      r.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Po.splice(Po.indexOf(this.el), 1), this.el = e = null;
  },
  _hideClone: function() {
    if (!Cn) {
      if (Ut("hideClone", this), $e.eventCanceled) return;
      Fe(ht, "display", "none"), this.options.removeCloneOnHide && ht.parentNode && ht.parentNode.removeChild(ht), Cn = !0;
    }
  },
  _showClone: function(e) {
    if (e.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Cn) {
      if (Ut("showClone", this), $e.eventCanceled) return;
      ye.parentNode == ut && !this.options.group.revertClone ? ut.insertBefore(ht, ye) : kn ? ut.insertBefore(ht, kn) : ut.appendChild(ht), this.options.group.revertClone && this.animate(ye, ht), Fe(ht, "display", ""), Cn = !1;
    }
  }
};
function rv(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function oo(t, e, r, a, i, c, n, l) {
  var o, s = t[Pt], u = s.options.onMove, d;
  return window.CustomEvent && !Tn && !Ur ? o = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (o = document.createEvent("Event"), o.initEvent("move", !0, !0)), o.to = e, o.from = t, o.dragged = r, o.draggedRect = a, o.related = i || e, o.relatedRect = c || ct(e), o.willInsertAfter = l, o.originalEvent = n, t.dispatchEvent(o), u && (d = u.call(s, o, n)), d;
}
function ca(t) {
  t.draggable = !1;
}
function ov() {
  wa = !1;
}
function av(t, e, r) {
  var a = ct(or(r.el, 0, r.options, !0)), i = 10;
  return e ? t.clientX < a.left - i || t.clientY < a.top && t.clientX < a.right : t.clientY < a.top - i || t.clientY < a.bottom && t.clientX < a.left;
}
function iv(t, e, r) {
  var a = ct(Za(r.el, r.options.draggable)), i = 10;
  return e ? t.clientX > a.right + i || t.clientX <= a.right && t.clientY > a.bottom && t.clientX >= a.left : t.clientX > a.right && t.clientY > a.top || t.clientX <= a.right && t.clientY > a.bottom + i;
}
function sv(t, e, r, a, i, c, n, l) {
  var o = a ? t.clientY : t.clientX, s = a ? r.height : r.width, u = a ? r.top : r.left, d = a ? r.bottom : r.right, h = !1;
  if (!n) {
    if (l && po < s * i) {
      if (!Or && (Cr === 1 ? o > u + s * c / 2 : o < d - s * c / 2) && (Or = !0), Or)
        h = !0;
      else if (Cr === 1 ? o < u + po : o > d - po)
        return -Cr;
    } else if (o > u + s * (1 - i) / 2 && o < d - s * (1 - i) / 2)
      return lv(e);
  }
  return h = h || n, h && (o < u + s * c / 2 || o > d - s * c / 2) ? o > u + s / 2 ? 1 : -1 : 0;
}
function lv(t) {
  return pt(ye) < pt(t) ? 1 : -1;
}
function uv(t) {
  for (var e = t.tagName + t.className + t.src + t.href + t.textContent, r = e.length, a = 0; r--; )
    a += e.charCodeAt(r);
  return a.toString(36);
}
function cv(t) {
  Ro.length = 0;
  for (var e = t.getElementsByTagName("input"), r = e.length; r--; ) {
    var a = e[r];
    a.checked && Ro.push(a);
  }
}
function vo(t) {
  return setTimeout(t, 0);
}
function Ta(t) {
  return clearTimeout(t);
}
Yo && Je(document, "touchmove", function(t) {
  ($e.active || er) && t.cancelable && t.preventDefault();
});
$e.utils = {
  on: Je,
  off: Xe,
  css: Fe,
  find: hl,
  is: function(e, r) {
    return !!nn(e, r, e, !1);
  },
  extend: Kp,
  throttle: pl,
  closest: nn,
  toggleClass: dt,
  clone: qa,
  index: pt,
  nextTick: vo,
  cancelNextTick: Ta,
  detectDirection: gl,
  getChild: or
};
$e.get = function(t) {
  return t[Pt];
};
$e.mount = function() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  e[0].constructor === Array && (e = e[0]), e.forEach(function(a) {
    if (!a.prototype || !a.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(a));
    a.utils && ($e.utils = dn(dn({}, $e.utils), a.utils)), Nr.mount(a);
  });
};
$e.create = function(t, e) {
  return new $e(t, e);
};
$e.version = zp;
var gt = [], xr, Aa, Ca = !1, da, fa, Io, Sr;
function dv() {
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
      this.sortable.nativeDraggable ? Xe(document, "dragover", this._handleAutoScroll) : (Xe(document, "pointermove", this._handleFallbackAutoScroll), Xe(document, "touchmove", this._handleFallbackAutoScroll), Xe(document, "mousemove", this._handleFallbackAutoScroll)), Ji(), mo(), Xp();
    },
    nulling: function() {
      Io = Aa = xr = Ca = Sr = da = fa = null, gt.length = 0;
    },
    _handleFallbackAutoScroll: function(r) {
      this._handleAutoScroll(r, !0);
    },
    _handleAutoScroll: function(r, a) {
      var i = this, c = (r.touches ? r.touches[0] : r).clientX, n = (r.touches ? r.touches[0] : r).clientY, l = document.elementFromPoint(c, n);
      if (Io = r, a || this.options.forceAutoScrollFallback || Ur || Tn || wr) {
        ha(r, this.options, l, a);
        var o = Pn(l, !0);
        Ca && (!Sr || c !== da || n !== fa) && (Sr && Ji(), Sr = setInterval(function() {
          var s = Pn(document.elementFromPoint(c, n), !0);
          s !== o && (o = s, mo()), ha(r, i.options, s, a);
        }, 10), da = c, fa = n);
      } else {
        if (!this.options.bubbleScroll || Pn(l, !0) === cn()) {
          mo();
          return;
        }
        ha(r, this.options, Pn(l, !1), !1);
      }
    }
  }, qt(t, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function mo() {
  gt.forEach(function(t) {
    clearInterval(t.pid);
  }), gt = [];
}
function Ji() {
  clearInterval(Sr);
}
var ha = pl(function(t, e, r, a) {
  if (e.scroll) {
    var i = (t.touches ? t.touches[0] : t).clientX, c = (t.touches ? t.touches[0] : t).clientY, n = e.scrollSensitivity, l = e.scrollSpeed, o = cn(), s = !1, u;
    Aa !== r && (Aa = r, mo(), xr = e.scroll, u = e.scrollFn, xr === !0 && (xr = Pn(r, !0)));
    var d = 0, h = xr;
    do {
      var p = h, f = ct(p), v = f.top, m = f.bottom, g = f.left, y = f.right, S = f.width, E = f.height, A = void 0, w = void 0, P = p.scrollWidth, O = p.scrollHeight, D = Fe(p), N = p.scrollLeft, j = p.scrollTop;
      p === o ? (A = S < P && (D.overflowX === "auto" || D.overflowX === "scroll" || D.overflowX === "visible"), w = E < O && (D.overflowY === "auto" || D.overflowY === "scroll" || D.overflowY === "visible")) : (A = S < P && (D.overflowX === "auto" || D.overflowX === "scroll"), w = E < O && (D.overflowY === "auto" || D.overflowY === "scroll"));
      var H = A && (Math.abs(y - i) <= n && N + S < P) - (Math.abs(g - i) <= n && !!N), V = w && (Math.abs(m - c) <= n && j + E < O) - (Math.abs(v - c) <= n && !!j);
      if (!gt[d])
        for (var z = 0; z <= d; z++)
          gt[z] || (gt[z] = {});
      (gt[d].vx != H || gt[d].vy != V || gt[d].el !== p) && (gt[d].el = p, gt[d].vx = H, gt[d].vy = V, clearInterval(gt[d].pid), (H != 0 || V != 0) && (s = !0, gt[d].pid = setInterval((function() {
        a && this.layer === 0 && $e.active._onTouchMove(Io);
        var Y = gt[this.layer].vy ? gt[this.layer].vy * l : 0, W = gt[this.layer].vx ? gt[this.layer].vx * l : 0;
        typeof u == "function" && u.call($e.dragged.parentNode[Pt], W, Y, t, Io, gt[this.layer].el) !== "continue" || vl(gt[this.layer].el, W, Y);
      }).bind({
        layer: d
      }), 24))), d++;
    } while (e.bubbleScroll && h !== o && (h = Pn(h, !1)));
    Ca = s;
  }
}, 30), Sl = function(e) {
  var r = e.originalEvent, a = e.putSortable, i = e.dragEl, c = e.activeSortable, n = e.dispatchSortableEvent, l = e.hideGhostForTarget, o = e.unhideGhostForTarget;
  if (r) {
    var s = a || c;
    l();
    var u = r.changedTouches && r.changedTouches.length ? r.changedTouches[0] : r, d = document.elementFromPoint(u.clientX, u.clientY);
    o(), s && !s.el.contains(d) && (n("spill"), this.onSpill({
      dragEl: i,
      putSortable: a
    }));
  }
};
function _a() {
}
_a.prototype = {
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
  drop: Sl
};
qt(_a, {
  pluginName: "revertOnSpill"
});
function ei() {
}
ei.prototype = {
  onSpill: function(e) {
    var r = e.dragEl, a = e.putSortable, i = a || this.sortable;
    i.captureAnimationState(), r.parentNode && r.parentNode.removeChild(r), i.animateAll();
  },
  drop: Sl
};
qt(ei, {
  pluginName: "removeOnSpill"
});
var Kt;
function fv() {
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
      var a = r.completed, i = r.target, c = r.onMove, n = r.activeSortable, l = r.changed, o = r.cancel;
      if (n.options.swap) {
        var s = this.sortable.el, u = this.options;
        if (i && i !== s) {
          var d = Kt;
          c(i) !== !1 ? (dt(i, u.swapClass, !0), Kt = i) : Kt = null, d && d !== Kt && dt(d, u.swapClass, !1);
        }
        l(), a(!0), o();
      }
    },
    drop: function(r) {
      var a = r.activeSortable, i = r.putSortable, c = r.dragEl, n = i || this.sortable, l = this.options;
      Kt && dt(Kt, l.swapClass, !1), Kt && (l.swap || i && i.options.swap) && c !== Kt && (n.captureAnimationState(), n !== a && a.captureAnimationState(), hv(c, Kt), n.animateAll(), n !== a && a.animateAll());
    },
    nulling: function() {
      Kt = null;
    }
  }, qt(t, {
    pluginName: "swap",
    eventProperties: function() {
      return {
        swapItem: Kt
      };
    }
  });
}
function hv(t, e) {
  var r = t.parentNode, a = e.parentNode, i, c;
  !r || !a || r.isEqualNode(e) || a.isEqualNode(t) || (i = pt(t), c = pt(e), r.isEqualNode(a) && i < c && c++, r.insertBefore(e, r.children[i]), a.insertBefore(t, a.children[c]));
}
var Ge = [], $t = [], hr, tn, pr = !1, Nt = !1, qn = !1, it, vr, ao;
function pv() {
  function t(e) {
    for (var r in this)
      r.charAt(0) === "_" && typeof this[r] == "function" && (this[r] = this[r].bind(this));
    e.options.supportPointer ? Je(document, "pointerup", this._deselectMultiDrag) : (Je(document, "mouseup", this._deselectMultiDrag), Je(document, "touchend", this._deselectMultiDrag)), Je(document, "keydown", this._checkKeyDown), Je(document, "keyup", this._checkKeyUp), this.defaults = {
      selectedClass: "sortable-selected",
      multiDragKey: null,
      setData: function(i, c) {
        var n = "";
        Ge.length && tn === e ? Ge.forEach(function(l, o) {
          n += (o ? ", " : "") + l.textContent;
        }) : n = c.textContent, i.setData("Text", n);
      }
    };
  }
  return t.prototype = {
    multiDragKeyDown: !1,
    isMultiDrag: !1,
    delayStartGlobal: function(r) {
      var a = r.dragEl;
      it = a;
    },
    delayEnded: function() {
      this.isMultiDrag = ~Ge.indexOf(it);
    },
    setupClone: function(r) {
      var a = r.sortable, i = r.cancel;
      if (this.isMultiDrag) {
        for (var c = 0; c < Ge.length; c++)
          $t.push(qa(Ge[c])), $t[c].sortableIndex = Ge[c].sortableIndex, $t[c].draggable = !1, $t[c].style["will-change"] = "", dt($t[c], this.options.selectedClass, !1), Ge[c] === it && dt($t[c], this.options.chosenClass, !1);
        a._hideClone(), i();
      }
    },
    clone: function(r) {
      var a = r.sortable, i = r.rootEl, c = r.dispatchSortableEvent, n = r.cancel;
      this.isMultiDrag && (this.options.removeCloneOnHide || Ge.length && tn === a && (Qi(!0, i), c("clone"), n()));
    },
    showClone: function(r) {
      var a = r.cloneNowShown, i = r.rootEl, c = r.cancel;
      this.isMultiDrag && (Qi(!1, i), $t.forEach(function(n) {
        Fe(n, "display", "");
      }), a(), ao = !1, c());
    },
    hideClone: function(r) {
      var a = this;
      r.sortable;
      var i = r.cloneNowHidden, c = r.cancel;
      this.isMultiDrag && ($t.forEach(function(n) {
        Fe(n, "display", "none"), a.options.removeCloneOnHide && n.parentNode && n.parentNode.removeChild(n);
      }), i(), ao = !0, c());
    },
    dragStartGlobal: function(r) {
      r.sortable, !this.isMultiDrag && tn && tn.multiDrag._deselectMultiDrag(), Ge.forEach(function(a) {
        a.sortableIndex = pt(a);
      }), Ge = Ge.sort(function(a, i) {
        return a.sortableIndex - i.sortableIndex;
      }), qn = !0;
    },
    dragStarted: function(r) {
      var a = this, i = r.sortable;
      if (this.isMultiDrag) {
        if (this.options.sort && (i.captureAnimationState(), this.options.animation)) {
          Ge.forEach(function(n) {
            n !== it && Fe(n, "position", "absolute");
          });
          var c = ct(it, !1, !0, !0);
          Ge.forEach(function(n) {
            n !== it && Wi(n, c);
          }), Nt = !0, pr = !0;
        }
        i.animateAll(function() {
          Nt = !1, pr = !1, a.options.animation && Ge.forEach(function(n) {
            aa(n);
          }), a.options.sort && io();
        });
      }
    },
    dragOver: function(r) {
      var a = r.target, i = r.completed, c = r.cancel;
      Nt && ~Ge.indexOf(a) && (i(!1), c());
    },
    revert: function(r) {
      var a = r.fromSortable, i = r.rootEl, c = r.sortable, n = r.dragRect;
      Ge.length > 1 && (Ge.forEach(function(l) {
        c.addAnimationState({
          target: l,
          rect: Nt ? ct(l) : n
        }), aa(l), l.fromRect = n, a.removeAnimationState(l);
      }), Nt = !1, vv(!this.options.removeCloneOnHide, i));
    },
    dragOverCompleted: function(r) {
      var a = r.sortable, i = r.isOwner, c = r.insertion, n = r.activeSortable, l = r.parentEl, o = r.putSortable, s = this.options;
      if (c) {
        if (i && n._hideClone(), pr = !1, s.animation && Ge.length > 1 && (Nt || !i && !n.options.sort && !o)) {
          var u = ct(it, !1, !0, !0);
          Ge.forEach(function(h) {
            h !== it && (Wi(h, u), l.appendChild(h));
          }), Nt = !0;
        }
        if (!i)
          if (Nt || io(), Ge.length > 1) {
            var d = ao;
            n._showClone(a), n.options.animation && !ao && d && $t.forEach(function(h) {
              n.addAnimationState({
                target: h,
                rect: vr
              }), h.fromRect = vr, h.thisAnimationDuration = null;
            });
          } else
            n._showClone(a);
      }
    },
    dragOverAnimationCapture: function(r) {
      var a = r.dragRect, i = r.isOwner, c = r.activeSortable;
      if (Ge.forEach(function(l) {
        l.thisAnimationDuration = null;
      }), c.options.animation && !i && c.multiDrag.isMultiDrag) {
        vr = qt({}, a);
        var n = Gn(it, !0);
        vr.top -= n.f, vr.left -= n.e;
      }
    },
    dragOverAnimationComplete: function() {
      Nt && (Nt = !1, io());
    },
    drop: function(r) {
      var a = r.originalEvent, i = r.rootEl, c = r.parentEl, n = r.sortable, l = r.dispatchSortableEvent, o = r.oldIndex, s = r.putSortable, u = s || this.sortable;
      if (a) {
        var d = this.options, h = c.children;
        if (!qn)
          if (d.multiDragKey && !this.multiDragKeyDown && this._deselectMultiDrag(), dt(it, d.selectedClass, !~Ge.indexOf(it)), ~Ge.indexOf(it))
            Ge.splice(Ge.indexOf(it), 1), hr = null, yr({
              sortable: n,
              rootEl: i,
              name: "deselect",
              targetEl: it
            });
          else {
            if (Ge.push(it), yr({
              sortable: n,
              rootEl: i,
              name: "select",
              targetEl: it
            }), a.shiftKey && hr && n.el.contains(hr)) {
              var p = pt(hr), f = pt(it);
              if (~p && ~f && p !== f) {
                var v, m;
                for (f > p ? (m = p, v = f) : (m = f, v = p + 1); m < v; m++)
                  ~Ge.indexOf(h[m]) || (dt(h[m], d.selectedClass, !0), Ge.push(h[m]), yr({
                    sortable: n,
                    rootEl: i,
                    name: "select",
                    targetEl: h[m]
                  }));
              }
            } else
              hr = it;
            tn = u;
          }
        if (qn && this.isMultiDrag) {
          if (Nt = !1, (c[Pt].options.sort || c !== i) && Ge.length > 1) {
            var g = ct(it), y = pt(it, ":not(." + this.options.selectedClass + ")");
            if (!pr && d.animation && (it.thisAnimationDuration = null), u.captureAnimationState(), !pr && (d.animation && (it.fromRect = g, Ge.forEach(function(E) {
              if (E.thisAnimationDuration = null, E !== it) {
                var A = Nt ? ct(E) : g;
                E.fromRect = A, u.addAnimationState({
                  target: E,
                  rect: A
                });
              }
            })), io(), Ge.forEach(function(E) {
              h[y] ? c.insertBefore(E, h[y]) : c.appendChild(E), y++;
            }), o === pt(it))) {
              var S = !1;
              Ge.forEach(function(E) {
                if (E.sortableIndex !== pt(E)) {
                  S = !0;
                  return;
                }
              }), S && l("update");
            }
            Ge.forEach(function(E) {
              aa(E);
            }), u.animateAll();
          }
          tn = u;
        }
        (i === c || s && s.lastPutMode !== "clone") && $t.forEach(function(E) {
          E.parentNode && E.parentNode.removeChild(E);
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
      if (!(typeof qn < "u" && qn) && tn === this.sortable && !(r && nn(r.target, this.options.draggable, this.sortable.el, !1)) && !(r && r.button !== 0))
        for (; Ge.length; ) {
          var a = Ge[0];
          dt(a, this.options.selectedClass, !1), Ge.shift(), yr({
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
  }, qt(t, {
    // Static methods & properties
    pluginName: "multiDrag",
    utils: {
      /**
       * Selects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be selected
       */
      select: function(r) {
        var a = r.parentNode[Pt];
        !a || !a.options.multiDrag || ~Ge.indexOf(r) || (tn && tn !== a && (tn.multiDrag._deselectMultiDrag(), tn = a), dt(r, a.options.selectedClass, !0), Ge.push(r));
      },
      /**
       * Deselects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be deselected
       */
      deselect: function(r) {
        var a = r.parentNode[Pt], i = Ge.indexOf(r);
        !a || !a.options.multiDrag || !~i || (dt(r, a.options.selectedClass, !1), Ge.splice(i, 1));
      }
    },
    eventProperties: function() {
      var r = this, a = [], i = [];
      return Ge.forEach(function(c) {
        a.push({
          multiDragElement: c,
          index: c.sortableIndex
        });
        var n;
        Nt && c !== it ? n = -1 : Nt ? n = pt(c, ":not(." + r.options.selectedClass + ")") : n = pt(c), i.push({
          multiDragElement: c,
          index: n
        });
      }), {
        items: kp(Ge),
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
function vv(t, e) {
  Ge.forEach(function(r, a) {
    var i = e.children[r.sortableIndex + (t ? Number(a) : 0)];
    i ? e.insertBefore(r, i) : e.appendChild(r);
  });
}
function Qi(t, e) {
  $t.forEach(function(r, a) {
    var i = e.children[r.sortableIndex + (t ? Number(a) : 0)];
    i ? e.insertBefore(r, i) : e.appendChild(r);
  });
}
function io() {
  Ge.forEach(function(t) {
    t !== it && t.parentNode && t.parentNode.removeChild(t);
  });
}
$e.mount(new dv());
$e.mount(ei, _a);
const mv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MultiDrag: pv,
  Sortable: $e,
  Swap: fv,
  default: $e
}, Symbol.toStringTag, { value: "Module" })), gv = /* @__PURE__ */ Ps(mv);
var yv = co.exports, Zi;
function bv() {
  return Zi || (Zi = 1, function(t, e) {
    (function(a, i) {
      t.exports = i(Lp, gv);
    })(typeof self < "u" ? self : yv, function(r, a) {
      return (
        /******/
        function(i) {
          var c = {};
          function n(l) {
            if (c[l])
              return c[l].exports;
            var o = c[l] = {
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
          return n.m = i, n.c = c, n.d = function(l, o, s) {
            n.o(l, o) || Object.defineProperty(l, o, { enumerable: !0, get: s });
          }, n.r = function(l) {
            typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(l, "__esModule", { value: !0 });
          }, n.t = function(l, o) {
            if (o & 1 && (l = n(l)), o & 8 || o & 4 && typeof l == "object" && l && l.__esModule) return l;
            var s = /* @__PURE__ */ Object.create(null);
            if (n.r(s), Object.defineProperty(s, "default", { enumerable: !0, value: l }), o & 2 && typeof l != "string") for (var u in l) n.d(s, u, (function(d) {
              return l[d];
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
            function(i, c, n) {
              var l = n("b622"), o = l("toStringTag"), s = {};
              s[o] = "z", i.exports = String(s) === "[object z]";
            }
          ),
          /***/
          "0366": (
            /***/
            function(i, c, n) {
              var l = n("1c0b");
              i.exports = function(o, s, u) {
                if (l(o), s === void 0) return o;
                switch (u) {
                  case 0:
                    return function() {
                      return o.call(s);
                    };
                  case 1:
                    return function(d) {
                      return o.call(s, d);
                    };
                  case 2:
                    return function(d, h) {
                      return o.call(s, d, h);
                    };
                  case 3:
                    return function(d, h, p) {
                      return o.call(s, d, h, p);
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
              var l = n("fc6a"), o = n("241c").f, s = {}.toString, u = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], d = function(h) {
                try {
                  return o(h);
                } catch {
                  return u.slice();
                }
              };
              i.exports.f = function(p) {
                return u && s.call(p) == "[object Window]" ? d(p) : o(l(p));
              };
            }
          ),
          /***/
          "06cf": (
            /***/
            function(i, c, n) {
              var l = n("83ab"), o = n("d1e7"), s = n("5c6c"), u = n("fc6a"), d = n("c04e"), h = n("5135"), p = n("0cfb"), f = Object.getOwnPropertyDescriptor;
              c.f = l ? f : function(m, g) {
                if (m = u(m), g = d(g, !0), p) try {
                  return f(m, g);
                } catch {
                }
                if (h(m, g)) return s(!o.f.call(m, g), m[g]);
              };
            }
          ),
          /***/
          "0cfb": (
            /***/
            function(i, c, n) {
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
            function(i, c, n) {
              var l = n("23e7"), o = n("d58f").left, s = n("a640"), u = n("ae40"), d = s("reduce"), h = u("reduce", { 1: 0 });
              l({ target: "Array", proto: !0, forced: !d || !h }, {
                reduce: function(f) {
                  return o(this, f, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
                }
              });
            }
          ),
          /***/
          "14c3": (
            /***/
            function(i, c, n) {
              var l = n("c6b6"), o = n("9263");
              i.exports = function(s, u) {
                var d = s.exec;
                if (typeof d == "function") {
                  var h = d.call(s, u);
                  if (typeof h != "object")
                    throw TypeError("RegExp exec method returned something other than an Object or null");
                  return h;
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
            function(i, c, n) {
              var l = n("da84"), o = n("fdbc"), s = n("17c2"), u = n("9112");
              for (var d in o) {
                var h = l[d], p = h && h.prototype;
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
            function(i, c, n) {
              var l = n("b727").forEach, o = n("a640"), s = n("ae40"), u = o("forEach"), d = s("forEach");
              i.exports = !u || !d ? function(p) {
                return l(this, p, arguments.length > 1 ? arguments[1] : void 0);
              } : [].forEach;
            }
          ),
          /***/
          "1be4": (
            /***/
            function(i, c, n) {
              var l = n("d066");
              i.exports = l("document", "documentElement");
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
              var l = n("b622"), o = l("iterator"), s = !1;
              try {
                var u = 0, d = {
                  next: function() {
                    return { done: !!u++ };
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
              i.exports = function(h, p) {
                if (!p && !s) return !1;
                var f = !1;
                try {
                  var v = {};
                  v[o] = function() {
                    return {
                      next: function() {
                        return { done: f = !0 };
                      }
                    };
                  }, h(v);
                } catch {
                }
                return f;
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
              var l = n("d039"), o = n("b622"), s = n("2d00"), u = o("species");
              i.exports = function(d) {
                return s >= 51 || !l(function() {
                  var h = [], p = h.constructor = {};
                  return p[u] = function() {
                    return { foo: 1 };
                  }, h[d](Boolean).foo !== 1;
                });
              };
            }
          ),
          /***/
          "23cb": (
            /***/
            function(i, c, n) {
              var l = n("a691"), o = Math.max, s = Math.min;
              i.exports = function(u, d) {
                var h = l(u);
                return h < 0 ? o(h + d, 0) : s(h, d);
              };
            }
          ),
          /***/
          "23e7": (
            /***/
            function(i, c, n) {
              var l = n("da84"), o = n("06cf").f, s = n("9112"), u = n("6eeb"), d = n("ce4e"), h = n("e893"), p = n("94ca");
              i.exports = function(f, v) {
                var m = f.target, g = f.global, y = f.stat, S, E, A, w, P, O;
                if (g ? E = l : y ? E = l[m] || d(m, {}) : E = (l[m] || {}).prototype, E) for (A in v) {
                  if (P = v[A], f.noTargetGet ? (O = o(E, A), w = O && O.value) : w = E[A], S = p(g ? A : m + (y ? "." : "#") + A, f.forced), !S && w !== void 0) {
                    if (typeof P == typeof w) continue;
                    h(P, w);
                  }
                  (f.sham || w && w.sham) && s(P, "sham", !0), u(E, A, P, f);
                }
              };
            }
          ),
          /***/
          "241c": (
            /***/
            function(i, c, n) {
              var l = n("ca84"), o = n("7839"), s = o.concat("length", "prototype");
              c.f = Object.getOwnPropertyNames || function(d) {
                return l(d, s);
              };
            }
          ),
          /***/
          "25f0": (
            /***/
            function(i, c, n) {
              var l = n("6eeb"), o = n("825a"), s = n("d039"), u = n("ad6d"), d = "toString", h = RegExp.prototype, p = h[d], f = s(function() {
                return p.call({ source: "a", flags: "b" }) != "/a/b";
              }), v = p.name != d;
              (f || v) && l(RegExp.prototype, d, function() {
                var g = o(this), y = String(g.source), S = g.flags, E = String(S === void 0 && g instanceof RegExp && !("flags" in h) ? u.call(g) : S);
                return "/" + y + "/" + E;
              }, { unsafe: !0 });
            }
          ),
          /***/
          "2ca0": (
            /***/
            function(i, c, n) {
              var l = n("23e7"), o = n("06cf").f, s = n("50c4"), u = n("5a34"), d = n("1d80"), h = n("ab13"), p = n("c430"), f = "".startsWith, v = Math.min, m = h("startsWith"), g = !p && !m && !!function() {
                var y = o(String.prototype, "startsWith");
                return y && !y.writable;
              }();
              l({ target: "String", proto: !0, forced: !g && !m }, {
                startsWith: function(S) {
                  var E = String(d(this));
                  u(S);
                  var A = s(v(arguments.length > 1 ? arguments[1] : void 0, E.length)), w = String(S);
                  return f ? f.call(E, w, A) : E.slice(A, A + w.length) === w;
                }
              });
            }
          ),
          /***/
          "2d00": (
            /***/
            function(i, c, n) {
              var l = n("da84"), o = n("342f"), s = l.process, u = s && s.versions, d = u && u.v8, h, p;
              d ? (h = d.split("."), p = h[0] + h[1]) : o && (h = o.match(/Edge\/(\d+)/), (!h || h[1] >= 74) && (h = o.match(/Chrome\/(\d+)/), h && (p = h[1]))), i.exports = p && +p;
            }
          ),
          /***/
          "342f": (
            /***/
            function(i, c, n) {
              var l = n("d066");
              i.exports = l("navigator", "userAgent") || "";
            }
          ),
          /***/
          "35a1": (
            /***/
            function(i, c, n) {
              var l = n("f5df"), o = n("3f8c"), s = n("b622"), u = s("iterator");
              i.exports = function(d) {
                if (d != null) return d[u] || d["@@iterator"] || o[l(d)];
              };
            }
          ),
          /***/
          "37e8": (
            /***/
            function(i, c, n) {
              var l = n("83ab"), o = n("9bf2"), s = n("825a"), u = n("df75");
              i.exports = l ? Object.defineProperties : function(h, p) {
                s(h);
                for (var f = u(p), v = f.length, m = 0, g; v > m; ) o.f(h, g = f[m++], p[g]);
                return h;
              };
            }
          ),
          /***/
          "3bbe": (
            /***/
            function(i, c, n) {
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
            function(i, c, n) {
              var l = n("6547").charAt, o = n("69f3"), s = n("7dd0"), u = "String Iterator", d = o.set, h = o.getterFor(u);
              s(String, "String", function(p) {
                d(this, {
                  type: u,
                  string: String(p),
                  index: 0
                });
              }, function() {
                var f = h(this), v = f.string, m = f.index, g;
                return m >= v.length ? { value: void 0, done: !0 } : (g = l(v, m), f.index += g.length, { value: g, done: !1 });
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
              var l = n("23e7"), o = n("17c2");
              l({ target: "Array", proto: !0, forced: [].forEach != o }, {
                forEach: o
              });
            }
          ),
          /***/
          "428f": (
            /***/
            function(i, c, n) {
              var l = n("da84");
              i.exports = l;
            }
          ),
          /***/
          "44ad": (
            /***/
            function(i, c, n) {
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
            function(i, c, n) {
              var l = n("b622"), o = n("7c73"), s = n("9bf2"), u = l("unscopables"), d = Array.prototype;
              d[u] == null && s.f(d, u, {
                configurable: !0,
                value: o(null)
              }), i.exports = function(h) {
                d[u][h] = !0;
              };
            }
          ),
          /***/
          "44e7": (
            /***/
            function(i, c, n) {
              var l = n("861d"), o = n("c6b6"), s = n("b622"), u = s("match");
              i.exports = function(d) {
                var h;
                return l(d) && ((h = d[u]) !== void 0 ? !!h : o(d) == "RegExp");
              };
            }
          ),
          /***/
          4930: (
            /***/
            function(i, c, n) {
              var l = n("d039");
              i.exports = !!Object.getOwnPropertySymbols && !l(function() {
                return !String(Symbol());
              });
            }
          ),
          /***/
          "4d64": (
            /***/
            function(i, c, n) {
              var l = n("fc6a"), o = n("50c4"), s = n("23cb"), u = function(d) {
                return function(h, p, f) {
                  var v = l(h), m = o(v.length), g = s(f, m), y;
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
            function(i, c, n) {
              var l = n("23e7"), o = n("b727").filter, s = n("1dde"), u = n("ae40"), d = s("filter"), h = u("filter");
              l({ target: "Array", proto: !0, forced: !d || !h }, {
                filter: function(f) {
                  return o(this, f, arguments.length > 1 ? arguments[1] : void 0);
                }
              });
            }
          ),
          /***/
          "4df4": (
            /***/
            function(i, c, n) {
              var l = n("0366"), o = n("7b0b"), s = n("9bdd"), u = n("e95a"), d = n("50c4"), h = n("8418"), p = n("35a1");
              i.exports = function(v) {
                var m = o(v), g = typeof this == "function" ? this : Array, y = arguments.length, S = y > 1 ? arguments[1] : void 0, E = S !== void 0, A = p(m), w = 0, P, O, D, N, j, H;
                if (E && (S = l(S, y > 2 ? arguments[2] : void 0, 2)), A != null && !(g == Array && u(A)))
                  for (N = A.call(m), j = N.next, O = new g(); !(D = j.call(N)).done; w++)
                    H = E ? s(N, S, [D.value, w], !0) : D.value, h(O, w, H);
                else
                  for (P = d(m.length), O = new g(P); P > w; w++)
                    H = E ? S(m[w], w) : m[w], h(O, w, H);
                return O.length = w, O;
              };
            }
          ),
          /***/
          "4fad": (
            /***/
            function(i, c, n) {
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
            function(i, c, n) {
              var l = n("a691"), o = Math.min;
              i.exports = function(s) {
                return s > 0 ? o(l(s), 9007199254740991) : 0;
              };
            }
          ),
          /***/
          5135: (
            /***/
            function(i, c) {
              var n = {}.hasOwnProperty;
              i.exports = function(l, o) {
                return n.call(l, o);
              };
            }
          ),
          /***/
          5319: (
            /***/
            function(i, c, n) {
              var l = n("d784"), o = n("825a"), s = n("7b0b"), u = n("50c4"), d = n("a691"), h = n("1d80"), p = n("8aa5"), f = n("14c3"), v = Math.max, m = Math.min, g = Math.floor, y = /\$([$&'`]|\d\d?|<[^>]*>)/g, S = /\$([$&'`]|\d\d?)/g, E = function(A) {
                return A === void 0 ? A : String(A);
              };
              l("replace", 2, function(A, w, P, O) {
                var D = O.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE, N = O.REPLACE_KEEPS_$0, j = D ? "$" : "$0";
                return [
                  // `String.prototype.replace` method
                  // https://tc39.github.io/ecma262/#sec-string.prototype.replace
                  function(z, Y) {
                    var W = h(this), ae = z == null ? void 0 : z[A];
                    return ae !== void 0 ? ae.call(z, W, Y) : w.call(String(W), z, Y);
                  },
                  // `RegExp.prototype[@@replace]` method
                  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
                  function(V, z) {
                    if (!D && N || typeof z == "string" && z.indexOf(j) === -1) {
                      var Y = P(w, V, this, z);
                      if (Y.done) return Y.value;
                    }
                    var W = o(V), ae = String(this), X = typeof z == "function";
                    X || (z = String(z));
                    var he = W.global;
                    if (he) {
                      var fe = W.unicode;
                      W.lastIndex = 0;
                    }
                    for (var Te = []; ; ) {
                      var Ie = f(W, ae);
                      if (Ie === null || (Te.push(Ie), !he)) break;
                      var xe = String(Ie[0]);
                      xe === "" && (W.lastIndex = p(ae, u(W.lastIndex), fe));
                    }
                    for (var je = "", Ne = 0, Le = 0; Le < Te.length; Le++) {
                      Ie = Te[Le];
                      for (var be = String(Ie[0]), R = v(m(d(Ie.index), ae.length), 0), M = [], T = 1; T < Ie.length; T++) M.push(E(Ie[T]));
                      var L = Ie.groups;
                      if (X) {
                        var b = [be].concat(M, R, ae);
                        L !== void 0 && b.push(L);
                        var x = String(z.apply(void 0, b));
                      } else
                        x = H(be, ae, R, M, L, z);
                      R >= Ne && (je += ae.slice(Ne, R) + x, Ne = R + be.length);
                    }
                    return je + ae.slice(Ne);
                  }
                ];
                function H(V, z, Y, W, ae, X) {
                  var he = Y + V.length, fe = W.length, Te = S;
                  return ae !== void 0 && (ae = s(ae), Te = y), w.call(X, Te, function(Ie, xe) {
                    var je;
                    switch (xe.charAt(0)) {
                      case "$":
                        return "$";
                      case "&":
                        return V;
                      case "`":
                        return z.slice(0, Y);
                      case "'":
                        return z.slice(he);
                      case "<":
                        je = ae[xe.slice(1, -1)];
                        break;
                      default:
                        var Ne = +xe;
                        if (Ne === 0) return Ie;
                        if (Ne > fe) {
                          var Le = g(Ne / 10);
                          return Le === 0 ? Ie : Le <= fe ? W[Le - 1] === void 0 ? xe.charAt(1) : W[Le - 1] + xe.charAt(1) : Ie;
                        }
                        je = W[Ne - 1];
                    }
                    return je === void 0 ? "" : je;
                  });
                }
              });
            }
          ),
          /***/
          5692: (
            /***/
            function(i, c, n) {
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
            function(i, c, n) {
              var l = n("d066"), o = n("241c"), s = n("7418"), u = n("825a");
              i.exports = l("Reflect", "ownKeys") || function(h) {
                var p = o.f(u(h)), f = s.f;
                return f ? p.concat(f(h)) : p;
              };
            }
          ),
          /***/
          "5a34": (
            /***/
            function(i, c, n) {
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
            function(i, c) {
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
            function(i, c, n) {
              var l = n("23e7"), o = n("a2bf"), s = n("7b0b"), u = n("50c4"), d = n("1c0b"), h = n("65f0");
              l({ target: "Array", proto: !0 }, {
                flatMap: function(f) {
                  var v = s(this), m = u(v.length), g;
                  return d(f), g = h(v, 0), g.length = o(g, v, v, m, 0, 1, f, arguments.length > 1 ? arguments[1] : void 0), g;
                }
              });
            }
          ),
          /***/
          6547: (
            /***/
            function(i, c, n) {
              var l = n("a691"), o = n("1d80"), s = function(u) {
                return function(d, h) {
                  var p = String(o(d)), f = l(h), v = p.length, m, g;
                  return f < 0 || f >= v ? u ? "" : void 0 : (m = p.charCodeAt(f), m < 55296 || m > 56319 || f + 1 === v || (g = p.charCodeAt(f + 1)) < 56320 || g > 57343 ? u ? p.charAt(f) : m : u ? p.slice(f, f + 2) : (m - 55296 << 10) + (g - 56320) + 65536);
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
              var l = n("861d"), o = n("e8b5"), s = n("b622"), u = s("species");
              i.exports = function(d, h) {
                var p;
                return o(d) && (p = d.constructor, typeof p == "function" && (p === Array || o(p.prototype)) ? p = void 0 : l(p) && (p = p[u], p === null && (p = void 0))), new (p === void 0 ? Array : p)(h === 0 ? 0 : h);
              };
            }
          ),
          /***/
          "69f3": (
            /***/
            function(i, c, n) {
              var l = n("7f9a"), o = n("da84"), s = n("861d"), u = n("9112"), d = n("5135"), h = n("f772"), p = n("d012"), f = o.WeakMap, v, m, g, y = function(D) {
                return g(D) ? m(D) : v(D, {});
              }, S = function(D) {
                return function(N) {
                  var j;
                  if (!s(N) || (j = m(N)).type !== D)
                    throw TypeError("Incompatible receiver, " + D + " required");
                  return j;
                };
              };
              if (l) {
                var E = new f(), A = E.get, w = E.has, P = E.set;
                v = function(D, N) {
                  return P.call(E, D, N), N;
                }, m = function(D) {
                  return A.call(E, D) || {};
                }, g = function(D) {
                  return w.call(E, D);
                };
              } else {
                var O = h("state");
                p[O] = !0, v = function(D, N) {
                  return u(D, O, N), N;
                }, m = function(D) {
                  return d(D, O) ? D[O] : {};
                }, g = function(D) {
                  return d(D, O);
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
              var l = n("da84"), o = n("9112"), s = n("5135"), u = n("ce4e"), d = n("8925"), h = n("69f3"), p = h.get, f = h.enforce, v = String(String).split("String");
              (i.exports = function(m, g, y, S) {
                var E = S ? !!S.unsafe : !1, A = S ? !!S.enumerable : !1, w = S ? !!S.noTargetGet : !1;
                if (typeof y == "function" && (typeof g == "string" && !s(y, "name") && o(y, "name", g), f(y).source = v.join(typeof g == "string" ? g : "")), m === l) {
                  A ? m[g] = y : u(g, y);
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
              var l = n("83ab"), o = n("df75"), s = n("fc6a"), u = n("d1e7").f, d = function(h) {
                return function(p) {
                  for (var f = s(p), v = o(f), m = v.length, g = 0, y = [], S; m > g; )
                    S = v[g++], (!l || u.call(f, S)) && y.push(h ? [S, f[S]] : f[S]);
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
              var l = n("44d2");
              l("flatMap");
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
              var l = n("428f"), o = n("5135"), s = n("e538"), u = n("9bf2").f;
              i.exports = function(d) {
                var h = l.Symbol || (l.Symbol = {});
                o(h, d) || u(h, d, {
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
              var l = n("1d80");
              i.exports = function(o) {
                return Object(l(o));
              };
            }
          ),
          /***/
          "7c73": (
            /***/
            function(i, c, n) {
              var l = n("825a"), o = n("37e8"), s = n("7839"), u = n("d012"), d = n("1be4"), h = n("cc12"), p = n("f772"), f = ">", v = "<", m = "prototype", g = "script", y = p("IE_PROTO"), S = function() {
              }, E = function(D) {
                return v + g + f + D + v + "/" + g + f;
              }, A = function(D) {
                D.write(E("")), D.close();
                var N = D.parentWindow.Object;
                return D = null, N;
              }, w = function() {
                var D = h("iframe"), N = "java" + g + ":", j;
                return D.style.display = "none", d.appendChild(D), D.src = String(N), j = D.contentWindow.document, j.open(), j.write(E("document.F=Object")), j.close(), j.F;
              }, P, O = function() {
                try {
                  P = document.domain && new ActiveXObject("htmlfile");
                } catch {
                }
                O = P ? A(P) : w();
                for (var D = s.length; D--; ) delete O[m][s[D]];
                return O();
              };
              u[y] = !0, i.exports = Object.create || function(N, j) {
                var H;
                return N !== null ? (S[m] = l(N), H = new S(), S[m] = null, H[y] = N) : H = O(), j === void 0 ? H : o(H, j);
              };
            }
          ),
          /***/
          "7dd0": (
            /***/
            function(i, c, n) {
              var l = n("23e7"), o = n("9ed3"), s = n("e163"), u = n("d2bb"), d = n("d44e"), h = n("9112"), p = n("6eeb"), f = n("b622"), v = n("c430"), m = n("3f8c"), g = n("ae93"), y = g.IteratorPrototype, S = g.BUGGY_SAFARI_ITERATORS, E = f("iterator"), A = "keys", w = "values", P = "entries", O = function() {
                return this;
              };
              i.exports = function(D, N, j, H, V, z, Y) {
                o(j, N, H);
                var W = function(Le) {
                  if (Le === V && Te) return Te;
                  if (!S && Le in he) return he[Le];
                  switch (Le) {
                    case A:
                      return function() {
                        return new j(this, Le);
                      };
                    case w:
                      return function() {
                        return new j(this, Le);
                      };
                    case P:
                      return function() {
                        return new j(this, Le);
                      };
                  }
                  return function() {
                    return new j(this);
                  };
                }, ae = N + " Iterator", X = !1, he = D.prototype, fe = he[E] || he["@@iterator"] || V && he[V], Te = !S && fe || W(V), Ie = N == "Array" && he.entries || fe, xe, je, Ne;
                if (Ie && (xe = s(Ie.call(new D())), y !== Object.prototype && xe.next && (!v && s(xe) !== y && (u ? u(xe, y) : typeof xe[E] != "function" && h(xe, E, O)), d(xe, ae, !0, !0), v && (m[ae] = O))), V == w && fe && fe.name !== w && (X = !0, Te = function() {
                  return fe.call(this);
                }), (!v || Y) && he[E] !== Te && h(he, E, Te), m[N] = Te, V)
                  if (je = {
                    values: W(w),
                    keys: z ? Te : W(A),
                    entries: W(P)
                  }, Y) for (Ne in je)
                    (S || X || !(Ne in he)) && p(he, Ne, je[Ne]);
                  else l({ target: N, proto: !0, forced: S || X }, je);
                return je;
              };
            }
          ),
          /***/
          "7f9a": (
            /***/
            function(i, c, n) {
              var l = n("da84"), o = n("8925"), s = l.WeakMap;
              i.exports = typeof s == "function" && /native code/.test(o(s));
            }
          ),
          /***/
          "825a": (
            /***/
            function(i, c, n) {
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
            function(i, c, n) {
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
            function(i, c, n) {
              var l = n("c04e"), o = n("9bf2"), s = n("5c6c");
              i.exports = function(u, d, h) {
                var p = l(d);
                p in u ? o.f(u, p, s(0, h)) : u[p] = h;
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
              var l, o, s;
              (function(u, d) {
                o = [], l = d, s = typeof l == "function" ? l.apply(c, o) : l, s !== void 0 && (i.exports = s);
              })(typeof self < "u" ? self : this, function() {
                function u() {
                  var d = Object.getOwnPropertyDescriptor(document, "currentScript");
                  if (!d && "currentScript" in document && document.currentScript || d && d.get !== u && document.currentScript)
                    return document.currentScript;
                  try {
                    throw new Error();
                  } catch (P) {
                    var h = /.*at [^(]*\((.*):(.+):(.+)\)$/ig, p = /@([^@]*):(\d+):(\d+)\s*$/ig, f = h.exec(P.stack) || p.exec(P.stack), v = f && f[1] || !1, m = f && f[2] || !1, g = document.location.href.replace(document.location.hash, ""), y, S, E, A = document.getElementsByTagName("script");
                    v === g && (y = document.documentElement.outerHTML, S = new RegExp("(?:[^\\n]+?\\n){0," + (m - 2) + "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*", "i"), E = y.replace(S, "$1").trim());
                    for (var w = 0; w < A.length; w++)
                      if (A[w].readyState === "interactive" || A[w].src === v || v === g && A[w].innerHTML && A[w].innerHTML.trim() === E)
                        return A[w];
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
            function(i, c, n) {
              var l = n("c6cd"), o = Function.toString;
              typeof l.inspectSource != "function" && (l.inspectSource = function(s) {
                return o.call(s);
              }), i.exports = l.inspectSource;
            }
          ),
          /***/
          "8aa5": (
            /***/
            function(i, c, n) {
              var l = n("6547").charAt;
              i.exports = function(o, s, u) {
                return s + (u ? l(o, s).length : 1);
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
              var n = 0, l = Math.random();
              i.exports = function(o) {
                return "Symbol(" + String(o === void 0 ? "" : o) + ")_" + (++n + l).toString(36);
              };
            }
          ),
          /***/
          9112: (
            /***/
            function(i, c, n) {
              var l = n("83ab"), o = n("9bf2"), s = n("5c6c");
              i.exports = l ? function(u, d, h) {
                return o.f(u, d, s(1, h));
              } : function(u, d, h) {
                return u[d] = h, u;
              };
            }
          ),
          /***/
          9263: (
            /***/
            function(i, c, n) {
              var l = n("ad6d"), o = n("9f7f"), s = RegExp.prototype.exec, u = String.prototype.replace, d = s, h = function() {
                var m = /a/, g = /b*/g;
                return s.call(m, "a"), s.call(g, "a"), m.lastIndex !== 0 || g.lastIndex !== 0;
              }(), p = o.UNSUPPORTED_Y || o.BROKEN_CARET, f = /()??/.exec("")[1] !== void 0, v = h || f || p;
              v && (d = function(g) {
                var y = this, S, E, A, w, P = p && y.sticky, O = l.call(y), D = y.source, N = 0, j = g;
                return P && (O = O.replace("y", ""), O.indexOf("g") === -1 && (O += "g"), j = String(g).slice(y.lastIndex), y.lastIndex > 0 && (!y.multiline || y.multiline && g[y.lastIndex - 1] !== `
`) && (D = "(?: " + D + ")", j = " " + j, N++), E = new RegExp("^(?:" + D + ")", O)), f && (E = new RegExp("^" + D + "$(?!\\s)", O)), h && (S = y.lastIndex), A = s.call(P ? E : y, j), P ? A ? (A.input = A.input.slice(N), A[0] = A[0].slice(N), A.index = y.lastIndex, y.lastIndex += A[0].length) : y.lastIndex = 0 : h && A && (y.lastIndex = y.global ? A.index + A[0].length : S), f && A && A.length > 1 && u.call(A[0], E, function() {
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
              var l = n("d039"), o = /#|\.prototype\./, s = function(f, v) {
                var m = d[u(f)];
                return m == p ? !0 : m == h ? !1 : typeof v == "function" ? l(v) : !!v;
              }, u = s.normalize = function(f) {
                return String(f).replace(o, ".").toLowerCase();
              }, d = s.data = {}, h = s.NATIVE = "N", p = s.POLYFILL = "P";
              i.exports = s;
            }
          ),
          /***/
          "99af": (
            /***/
            function(i, c, n) {
              var l = n("23e7"), o = n("d039"), s = n("e8b5"), u = n("861d"), d = n("7b0b"), h = n("50c4"), p = n("8418"), f = n("65f0"), v = n("1dde"), m = n("b622"), g = n("2d00"), y = m("isConcatSpreadable"), S = 9007199254740991, E = "Maximum allowed index exceeded", A = g >= 51 || !o(function() {
                var D = [];
                return D[y] = !1, D.concat()[0] !== D;
              }), w = v("concat"), P = function(D) {
                if (!u(D)) return !1;
                var N = D[y];
                return N !== void 0 ? !!N : s(D);
              }, O = !A || !w;
              l({ target: "Array", proto: !0, forced: O }, {
                concat: function(N) {
                  var j = d(this), H = f(j, 0), V = 0, z, Y, W, ae, X;
                  for (z = -1, W = arguments.length; z < W; z++)
                    if (X = z === -1 ? j : arguments[z], P(X)) {
                      if (ae = h(X.length), V + ae > S) throw TypeError(E);
                      for (Y = 0; Y < ae; Y++, V++) Y in X && p(H, V, X[Y]);
                    } else {
                      if (V >= S) throw TypeError(E);
                      p(H, V++, X);
                    }
                  return H.length = V, H;
                }
              });
            }
          ),
          /***/
          "9bdd": (
            /***/
            function(i, c, n) {
              var l = n("825a");
              i.exports = function(o, s, u, d) {
                try {
                  return d ? s(l(u)[0], u[1]) : s(u);
                } catch (p) {
                  var h = o.return;
                  throw h !== void 0 && l(h.call(o)), p;
                }
              };
            }
          ),
          /***/
          "9bf2": (
            /***/
            function(i, c, n) {
              var l = n("83ab"), o = n("0cfb"), s = n("825a"), u = n("c04e"), d = Object.defineProperty;
              c.f = l ? d : function(p, f, v) {
                if (s(p), f = u(f, !0), s(v), o) try {
                  return d(p, f, v);
                } catch {
                }
                if ("get" in v || "set" in v) throw TypeError("Accessors not supported");
                return "value" in v && (p[f] = v.value), p;
              };
            }
          ),
          /***/
          "9ed3": (
            /***/
            function(i, c, n) {
              var l = n("ae93").IteratorPrototype, o = n("7c73"), s = n("5c6c"), u = n("d44e"), d = n("3f8c"), h = function() {
                return this;
              };
              i.exports = function(p, f, v) {
                var m = f + " Iterator";
                return p.prototype = o(l, { next: s(1, v) }), u(p, m, !1, !0), d[m] = h, p;
              };
            }
          ),
          /***/
          "9f7f": (
            /***/
            function(i, c, n) {
              var l = n("d039");
              function o(s, u) {
                return RegExp(s, u);
              }
              c.UNSUPPORTED_Y = l(function() {
                var s = o("a", "y");
                return s.lastIndex = 2, s.exec("abcd") != null;
              }), c.BROKEN_CARET = l(function() {
                var s = o("^r", "gy");
                return s.lastIndex = 2, s.exec("str") != null;
              });
            }
          ),
          /***/
          a2bf: (
            /***/
            function(i, c, n) {
              var l = n("e8b5"), o = n("50c4"), s = n("0366"), u = function(d, h, p, f, v, m, g, y) {
                for (var S = v, E = 0, A = g ? s(g, y, 3) : !1, w; E < f; ) {
                  if (E in p) {
                    if (w = A ? A(p[E], E, h) : p[E], m > 0 && l(w))
                      S = u(d, h, w, o(w.length), S, m - 1) - 1;
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
              i.exports = u;
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
              var l = n("23e7"), o = n("23cb"), s = n("a691"), u = n("50c4"), d = n("7b0b"), h = n("65f0"), p = n("8418"), f = n("1dde"), v = n("ae40"), m = f("splice"), g = v("splice", { ACCESSORS: !0, 0: 0, 1: 2 }), y = Math.max, S = Math.min, E = 9007199254740991, A = "Maximum allowed length exceeded";
              l({ target: "Array", proto: !0, forced: !m || !g }, {
                splice: function(P, O) {
                  var D = d(this), N = u(D.length), j = o(P, N), H = arguments.length, V, z, Y, W, ae, X;
                  if (H === 0 ? V = z = 0 : H === 1 ? (V = 0, z = N - j) : (V = H - 2, z = S(y(s(O), 0), N - j)), N + V - z > E)
                    throw TypeError(A);
                  for (Y = h(D, z), W = 0; W < z; W++)
                    ae = j + W, ae in D && p(Y, W, D[ae]);
                  if (Y.length = z, V < z) {
                    for (W = j; W < N - z; W++)
                      ae = W + z, X = W + V, ae in D ? D[X] = D[ae] : delete D[X];
                    for (W = N; W > N - z + V; W--) delete D[W - 1];
                  } else if (V > z)
                    for (W = N - z; W > j; W--)
                      ae = W + z - 1, X = W + V - 1, ae in D ? D[X] = D[ae] : delete D[X];
                  for (W = 0; W < V; W++)
                    D[W + j] = arguments[W + 2];
                  return D.length = N - z + V, Y;
                }
              });
            }
          ),
          /***/
          a4d3: (
            /***/
            function(i, c, n) {
              var l = n("23e7"), o = n("da84"), s = n("d066"), u = n("c430"), d = n("83ab"), h = n("4930"), p = n("fdbf"), f = n("d039"), v = n("5135"), m = n("e8b5"), g = n("861d"), y = n("825a"), S = n("7b0b"), E = n("fc6a"), A = n("c04e"), w = n("5c6c"), P = n("7c73"), O = n("df75"), D = n("241c"), N = n("057f"), j = n("7418"), H = n("06cf"), V = n("9bf2"), z = n("d1e7"), Y = n("9112"), W = n("6eeb"), ae = n("5692"), X = n("f772"), he = n("d012"), fe = n("90e3"), Te = n("b622"), Ie = n("e538"), xe = n("746f"), je = n("d44e"), Ne = n("69f3"), Le = n("b727").forEach, be = X("hidden"), R = "Symbol", M = "prototype", T = Te("toPrimitive"), L = Ne.set, b = Ne.getterFor(R), x = Object[M], I = o.Symbol, U = s("JSON", "stringify"), $ = H.f, B = V.f, Q = N.f, q = z.f, J = ae("symbols"), _ = ae("op-symbols"), re = ae("string-to-symbol-registry"), le = ae("symbol-to-string-registry"), ge = ae("wks"), Ce = o.QObject, Ke = !Ce || !Ce[M] || !Ce[M].findChild, tt = d && f(function() {
                return P(B({}, "a", {
                  get: function() {
                    return B(this, "a", { value: 7 }).a;
                  }
                })).a != 7;
              }) ? function(Oe, we, Re) {
                var Be = $(x, we);
                Be && delete x[we], B(Oe, we, Re), Be && Oe !== x && B(x, we, Be);
              } : B, _e = function(Oe, we) {
                var Re = J[Oe] = P(I[M]);
                return L(Re, {
                  type: R,
                  tag: Oe,
                  description: we
                }), d || (Re.description = we), Re;
              }, G = p ? function(Oe) {
                return typeof Oe == "symbol";
              } : function(Oe) {
                return Object(Oe) instanceof I;
              }, K = function(we, Re, Be) {
                we === x && K(_, Re, Be), y(we);
                var ke = A(Re, !0);
                return y(Be), v(J, ke) ? (Be.enumerable ? (v(we, be) && we[be][ke] && (we[be][ke] = !1), Be = P(Be, { enumerable: w(0, !1) })) : (v(we, be) || B(we, be, w(1, {})), we[be][ke] = !0), tt(we, ke, Be)) : B(we, ke, Be);
              }, te = function(we, Re) {
                y(we);
                var Be = E(Re), ke = O(Be).concat(Ee(Be));
                return Le(ke, function(at) {
                  (!d || Se.call(Be, at)) && K(we, at, Be[at]);
                }), we;
              }, ce = function(we, Re) {
                return Re === void 0 ? P(we) : te(P(we), Re);
              }, Se = function(we) {
                var Re = A(we, !0), Be = q.call(this, Re);
                return this === x && v(J, Re) && !v(_, Re) ? !1 : Be || !v(this, Re) || !v(J, Re) || v(this, be) && this[be][Re] ? Be : !0;
              }, Me = function(we, Re) {
                var Be = E(we), ke = A(Re, !0);
                if (!(Be === x && v(J, ke) && !v(_, ke))) {
                  var at = $(Be, ke);
                  return at && v(J, ke) && !(v(Be, be) && Be[be][ke]) && (at.enumerable = !0), at;
                }
              }, Ae = function(we) {
                var Re = Q(E(we)), Be = [];
                return Le(Re, function(ke) {
                  !v(J, ke) && !v(he, ke) && Be.push(ke);
                }), Be;
              }, Ee = function(we) {
                var Re = we === x, Be = Q(Re ? _ : E(we)), ke = [];
                return Le(Be, function(at) {
                  v(J, at) && (!Re || v(x, at)) && ke.push(J[at]);
                }), ke;
              };
              if (h || (I = function() {
                if (this instanceof I) throw TypeError("Symbol is not a constructor");
                var we = !arguments.length || arguments[0] === void 0 ? void 0 : String(arguments[0]), Re = fe(we), Be = function(ke) {
                  this === x && Be.call(_, ke), v(this, be) && v(this[be], Re) && (this[be][Re] = !1), tt(this, Re, w(1, ke));
                };
                return d && Ke && tt(x, Re, { configurable: !0, set: Be }), _e(Re, we);
              }, W(I[M], "toString", function() {
                return b(this).tag;
              }), W(I, "withoutSetter", function(Oe) {
                return _e(fe(Oe), Oe);
              }), z.f = Se, V.f = K, H.f = Me, D.f = N.f = Ae, j.f = Ee, Ie.f = function(Oe) {
                return _e(Te(Oe), Oe);
              }, d && (B(I[M], "description", {
                configurable: !0,
                get: function() {
                  return b(this).description;
                }
              }), u || W(x, "propertyIsEnumerable", Se, { unsafe: !0 }))), l({ global: !0, wrap: !0, forced: !h, sham: !h }, {
                Symbol: I
              }), Le(O(ge), function(Oe) {
                xe(Oe);
              }), l({ target: R, stat: !0, forced: !h }, {
                // `Symbol.for` method
                // https://tc39.github.io/ecma262/#sec-symbol.for
                for: function(Oe) {
                  var we = String(Oe);
                  if (v(re, we)) return re[we];
                  var Re = I(we);
                  return re[we] = Re, le[Re] = we, Re;
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
              }), l({ target: "Object", stat: !0, forced: !h, sham: !d }, {
                // `Object.create` method
                // https://tc39.github.io/ecma262/#sec-object.create
                create: ce,
                // `Object.defineProperty` method
                // https://tc39.github.io/ecma262/#sec-object.defineproperty
                defineProperty: K,
                // `Object.defineProperties` method
                // https://tc39.github.io/ecma262/#sec-object.defineproperties
                defineProperties: te,
                // `Object.getOwnPropertyDescriptor` method
                // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
                getOwnPropertyDescriptor: Me
              }), l({ target: "Object", stat: !0, forced: !h }, {
                // `Object.getOwnPropertyNames` method
                // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
                getOwnPropertyNames: Ae,
                // `Object.getOwnPropertySymbols` method
                // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
                getOwnPropertySymbols: Ee
              }), l({ target: "Object", stat: !0, forced: f(function() {
                j.f(1);
              }) }, {
                getOwnPropertySymbols: function(we) {
                  return j.f(S(we));
                }
              }), U) {
                var He = !h || f(function() {
                  var Oe = I();
                  return U([Oe]) != "[null]" || U({ a: Oe }) != "{}" || U(Object(Oe)) != "{}";
                });
                l({ target: "JSON", stat: !0, forced: He }, {
                  // eslint-disable-next-line no-unused-vars
                  stringify: function(we, Re, Be) {
                    for (var ke = [we], at = 1, zt; arguments.length > at; ) ke.push(arguments[at++]);
                    if (zt = Re, !(!g(Re) && we === void 0 || G(we)))
                      return m(Re) || (Re = function(Mn, Vt) {
                        if (typeof zt == "function" && (Vt = zt.call(this, Mn, Vt)), !G(Vt)) return Vt;
                      }), ke[1] = Re, U.apply(null, ke);
                  }
                });
              }
              I[M][T] || Y(I[M], T, I[M].valueOf), je(I, R), he[be] = !0;
            }
          ),
          /***/
          a630: (
            /***/
            function(i, c, n) {
              var l = n("23e7"), o = n("4df4"), s = n("1c7e"), u = !s(function(d) {
                Array.from(d);
              });
              l({ target: "Array", stat: !0, forced: u }, {
                from: o
              });
            }
          ),
          /***/
          a640: (
            /***/
            function(i, c, n) {
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
            function(i, c) {
              var n = Math.ceil, l = Math.floor;
              i.exports = function(o) {
                return isNaN(o = +o) ? 0 : (o > 0 ? l : n)(o);
              };
            }
          ),
          /***/
          ab13: (
            /***/
            function(i, c, n) {
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
            function(i, c, n) {
              var l = n("23e7"), o = n("9263");
              l({ target: "RegExp", proto: !0, forced: /./.exec !== o }, {
                exec: o
              });
            }
          ),
          /***/
          ad6d: (
            /***/
            function(i, c, n) {
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
            function(i, c, n) {
              var l = n("83ab"), o = n("d039"), s = n("5135"), u = Object.defineProperty, d = {}, h = function(p) {
                throw p;
              };
              i.exports = function(p, f) {
                if (s(d, p)) return d[p];
                f || (f = {});
                var v = [][p], m = s(f, "ACCESSORS") ? f.ACCESSORS : !1, g = s(f, 0) ? f[0] : h, y = s(f, 1) ? f[1] : void 0;
                return d[p] = !!v && !o(function() {
                  if (m && !l) return !0;
                  var S = { length: -1 };
                  m ? u(S, 1, { enumerable: !0, get: h }) : S[1] = 1, v.call(S, g, y);
                });
              };
            }
          ),
          /***/
          ae93: (
            /***/
            function(i, c, n) {
              var l = n("e163"), o = n("9112"), s = n("5135"), u = n("b622"), d = n("c430"), h = u("iterator"), p = !1, f = function() {
                return this;
              }, v, m, g;
              [].keys && (g = [].keys(), "next" in g ? (m = l(l(g)), m !== Object.prototype && (v = m)) : p = !0), v == null && (v = {}), !d && !s(v, h) && o(v, h, f), i.exports = {
                IteratorPrototype: v,
                BUGGY_SAFARI_ITERATORS: p
              };
            }
          ),
          /***/
          b041: (
            /***/
            function(i, c, n) {
              var l = n("00ee"), o = n("f5df");
              i.exports = l ? {}.toString : function() {
                return "[object " + o(this) + "]";
              };
            }
          ),
          /***/
          b0c0: (
            /***/
            function(i, c, n) {
              var l = n("83ab"), o = n("9bf2").f, s = Function.prototype, u = s.toString, d = /^\s*function ([^ (]*)/, h = "name";
              l && !(h in s) && o(s, h, {
                configurable: !0,
                get: function() {
                  try {
                    return u.call(this).match(d)[1];
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
              var l = n("da84"), o = n("5692"), s = n("5135"), u = n("90e3"), d = n("4930"), h = n("fdbf"), p = o("wks"), f = l.Symbol, v = h ? f : f && f.withoutSetter || u;
              i.exports = function(m) {
                return s(p, m) || (d && s(f, m) ? p[m] = f[m] : p[m] = v("Symbol." + m)), p[m];
              };
            }
          ),
          /***/
          b64b: (
            /***/
            function(i, c, n) {
              var l = n("23e7"), o = n("7b0b"), s = n("df75"), u = n("d039"), d = u(function() {
                s(1);
              });
              l({ target: "Object", stat: !0, forced: d }, {
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
              var l = n("0366"), o = n("44ad"), s = n("7b0b"), u = n("50c4"), d = n("65f0"), h = [].push, p = function(f) {
                var v = f == 1, m = f == 2, g = f == 3, y = f == 4, S = f == 6, E = f == 5 || S;
                return function(A, w, P, O) {
                  for (var D = s(A), N = o(D), j = l(w, P, 3), H = u(N.length), V = 0, z = O || d, Y = v ? z(A, H) : m ? z(A, 0) : void 0, W, ae; H > V; V++) if ((E || V in N) && (W = N[V], ae = j(W, V, D), f)) {
                    if (v) Y[V] = ae;
                    else if (ae) switch (f) {
                      case 3:
                        return !0;
                      // some
                      case 5:
                        return W;
                      // find
                      case 6:
                        return V;
                      // findIndex
                      case 2:
                        h.call(Y, W);
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
              var l = n("861d");
              i.exports = function(o, s) {
                if (!l(o)) return o;
                var u, d;
                if (s && typeof (u = o.toString) == "function" && !l(d = u.call(o)) || typeof (u = o.valueOf) == "function" && !l(d = u.call(o)) || !s && typeof (u = o.toString) == "function" && !l(d = u.call(o))) return d;
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
              i.exports = function(l) {
                return n.call(l).slice(8, -1);
              };
            }
          ),
          /***/
          c6cd: (
            /***/
            function(i, c, n) {
              var l = n("da84"), o = n("ce4e"), s = "__core-js_shared__", u = l[s] || o(s, {});
              i.exports = u;
            }
          ),
          /***/
          c740: (
            /***/
            function(i, c, n) {
              var l = n("23e7"), o = n("b727").findIndex, s = n("44d2"), u = n("ae40"), d = "findIndex", h = !0, p = u(d);
              d in [] && Array(1)[d](function() {
                h = !1;
              }), l({ target: "Array", proto: !0, forced: h || !p }, {
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
              var l = n("23e7"), o = n("4d64").indexOf, s = n("a640"), u = n("ae40"), d = [].indexOf, h = !!d && 1 / [1].indexOf(1, -0) < 0, p = s("indexOf"), f = u("indexOf", { ACCESSORS: !0, 1: 0 });
              l({ target: "Array", proto: !0, forced: h || !p || !f }, {
                indexOf: function(m) {
                  return h ? d.apply(this, arguments) || 0 : o(this, m, arguments.length > 1 ? arguments[1] : void 0);
                }
              });
            }
          ),
          /***/
          ca84: (
            /***/
            function(i, c, n) {
              var l = n("5135"), o = n("fc6a"), s = n("4d64").indexOf, u = n("d012");
              i.exports = function(d, h) {
                var p = o(d), f = 0, v = [], m;
                for (m in p) !l(u, m) && l(p, m) && v.push(m);
                for (; h.length > f; ) l(p, m = h[f++]) && (~s(v, m) || v.push(m));
                return v;
              };
            }
          ),
          /***/
          caad: (
            /***/
            function(i, c, n) {
              var l = n("23e7"), o = n("4d64").includes, s = n("44d2"), u = n("ae40"), d = u("indexOf", { ACCESSORS: !0, 1: 0 });
              l({ target: "Array", proto: !0, forced: !d }, {
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
              var l = n("da84"), o = n("861d"), s = l.document, u = o(s) && o(s.createElement);
              i.exports = function(d) {
                return u ? s.createElement(d) : {};
              };
            }
          ),
          /***/
          ce4e: (
            /***/
            function(i, c, n) {
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
              var l = n("428f"), o = n("da84"), s = function(u) {
                return typeof u == "function" ? u : void 0;
              };
              i.exports = function(u, d) {
                return arguments.length < 2 ? s(l[u]) || s(o[u]) : l[u] && l[u][d] || o[u] && o[u][d];
              };
            }
          ),
          /***/
          d1e7: (
            /***/
            function(i, c, n) {
              var l = {}.propertyIsEnumerable, o = Object.getOwnPropertyDescriptor, s = o && !l.call({ 1: 2 }, 1);
              c.f = s ? function(d) {
                var h = o(this, d);
                return !!h && h.enumerable;
              } : l;
            }
          ),
          /***/
          d28b: (
            /***/
            function(i, c, n) {
              var l = n("746f");
              l("iterator");
            }
          ),
          /***/
          d2bb: (
            /***/
            function(i, c, n) {
              var l = n("825a"), o = n("3bbe");
              i.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                var s = !1, u = {}, d;
                try {
                  d = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set, d.call(u, []), s = u instanceof Array;
                } catch {
                }
                return function(p, f) {
                  return l(p), o(f), s ? d.call(p, f) : p.__proto__ = f, p;
                };
              }() : void 0);
            }
          ),
          /***/
          d3b7: (
            /***/
            function(i, c, n) {
              var l = n("00ee"), o = n("6eeb"), s = n("b041");
              l || o(Object.prototype, "toString", s, { unsafe: !0 });
            }
          ),
          /***/
          d44e: (
            /***/
            function(i, c, n) {
              var l = n("9bf2").f, o = n("5135"), s = n("b622"), u = s("toStringTag");
              i.exports = function(d, h, p) {
                d && !o(d = p ? d : d.prototype, u) && l(d, u, { configurable: !0, value: h });
              };
            }
          ),
          /***/
          d58f: (
            /***/
            function(i, c, n) {
              var l = n("1c0b"), o = n("7b0b"), s = n("44ad"), u = n("50c4"), d = function(h) {
                return function(p, f, v, m) {
                  l(f);
                  var g = o(p), y = s(g), S = u(g.length), E = h ? S - 1 : 0, A = h ? -1 : 1;
                  if (v < 2) for (; ; ) {
                    if (E in y) {
                      m = y[E], E += A;
                      break;
                    }
                    if (E += A, h ? E < 0 : S <= E)
                      throw TypeError("Reduce of empty array with no initial value");
                  }
                  for (; h ? E >= 0 : S > E; E += A) E in y && (m = f(m, y[E], E, g));
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
              var l = n("6eeb"), o = n("d039"), s = n("b622"), u = n("9263"), d = n("9112"), h = s("species"), p = !o(function() {
                var y = /./;
                return y.exec = function() {
                  var S = [];
                  return S.groups = { a: "7" }, S;
                }, "".replace(y, "$<a>") !== "7";
              }), f = function() {
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
                var w = s(y), P = !o(function() {
                  var V = {};
                  return V[w] = function() {
                    return 7;
                  }, ""[y](V) != 7;
                }), O = P && !o(function() {
                  var V = !1, z = /a/;
                  return y === "split" && (z = {}, z.constructor = {}, z.constructor[h] = function() {
                    return z;
                  }, z.flags = "", z[w] = /./[w]), z.exec = function() {
                    return V = !0, null;
                  }, z[w](""), !V;
                });
                if (!P || !O || y === "replace" && !(p && f && !m) || y === "split" && !g) {
                  var D = /./[w], N = E(w, ""[y], function(V, z, Y, W, ae) {
                    return z.exec === u ? P && !ae ? { done: !0, value: D.call(z, Y, W) } : { done: !0, value: V.call(Y, z, W) } : { done: !1 };
                  }, {
                    REPLACE_KEEPS_$0: f,
                    REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: m
                  }), j = N[0], H = N[1];
                  l(String.prototype, y, j), l(
                    RegExp.prototype,
                    w,
                    S == 2 ? function(V, z) {
                      return H.call(V, this, z);
                    } : function(V) {
                      return H.call(V, this);
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
              var l = n("23e7"), o = n("b727").map, s = n("1dde"), u = n("ae40"), d = s("map"), h = u("map");
              l({ target: "Array", proto: !0, forced: !d || !h }, {
                map: function(f) {
                  return o(this, f, arguments.length > 1 ? arguments[1] : void 0);
                }
              });
            }
          ),
          /***/
          da84: (
            /***/
            function(i, c, n) {
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
            function(i, c, n) {
              var l = n("23e7"), o = n("83ab"), s = n("56ef"), u = n("fc6a"), d = n("06cf"), h = n("8418");
              l({ target: "Object", stat: !0, sham: !o }, {
                getOwnPropertyDescriptors: function(f) {
                  for (var v = u(f), m = d.f, g = s(v), y = {}, S = 0, E, A; g.length > S; )
                    A = m(v, E = g[S++]), A !== void 0 && h(y, E, A);
                  return y;
                }
              });
            }
          ),
          /***/
          dbf1: (
            /***/
            function(i, c, n) {
              (function(l) {
                n.d(c, "a", function() {
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
            function(i, c, n) {
              var l = n("da84"), o = n("fdbc"), s = n("e260"), u = n("9112"), d = n("b622"), h = d("iterator"), p = d("toStringTag"), f = s.values;
              for (var v in o) {
                var m = l[v], g = m && m.prototype;
                if (g) {
                  if (g[h] !== f) try {
                    u(g, h, f);
                  } catch {
                    g[h] = f;
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
            function(i, c, n) {
              var l = n("ca84"), o = n("7839");
              i.exports = Object.keys || function(u) {
                return l(u, o);
              };
            }
          ),
          /***/
          e01a: (
            /***/
            function(i, c, n) {
              var l = n("23e7"), o = n("83ab"), s = n("da84"), u = n("5135"), d = n("861d"), h = n("9bf2").f, p = n("e893"), f = s.Symbol;
              if (o && typeof f == "function" && (!("description" in f.prototype) || // Safari 12 bug
              f().description !== void 0)) {
                var v = {}, m = function() {
                  var w = arguments.length < 1 || arguments[0] === void 0 ? void 0 : String(arguments[0]), P = this instanceof m ? new f(w) : w === void 0 ? f() : f(w);
                  return w === "" && (v[P] = !0), P;
                };
                p(m, f);
                var g = m.prototype = f.prototype;
                g.constructor = m;
                var y = g.toString, S = String(f("test")) == "Symbol(test)", E = /^Symbol\((.*)\)[^)]+$/;
                h(g, "description", {
                  configurable: !0,
                  get: function() {
                    var w = d(this) ? this.valueOf() : this, P = y.call(w);
                    if (u(v, w)) return "";
                    var O = S ? P.slice(7, -1) : P.replace(E, "$1");
                    return O === "" ? void 0 : O;
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
            function(i, c, n) {
              var l = n("5135"), o = n("7b0b"), s = n("f772"), u = n("e177"), d = s("IE_PROTO"), h = Object.prototype;
              i.exports = u ? Object.getPrototypeOf : function(p) {
                return p = o(p), l(p, d) ? p[d] : typeof p.constructor == "function" && p instanceof p.constructor ? p.constructor.prototype : p instanceof Object ? h : null;
              };
            }
          ),
          /***/
          e177: (
            /***/
            function(i, c, n) {
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
            function(i, c, n) {
              var l = n("fc6a"), o = n("44d2"), s = n("3f8c"), u = n("69f3"), d = n("7dd0"), h = "Array Iterator", p = u.set, f = u.getterFor(h);
              i.exports = d(Array, "Array", function(v, m) {
                p(this, {
                  type: h,
                  target: l(v),
                  // target
                  index: 0,
                  // next index
                  kind: m
                  // kind
                });
              }, function() {
                var v = f(this), m = v.target, g = v.kind, y = v.index++;
                return !m || y >= m.length ? (v.target = void 0, { value: void 0, done: !0 }) : g == "keys" ? { value: y, done: !1 } : g == "values" ? { value: m[y], done: !1 } : { value: [y, m[y]], done: !1 };
              }, "values"), s.Arguments = s.Array, o("keys"), o("values"), o("entries");
            }
          ),
          /***/
          e439: (
            /***/
            function(i, c, n) {
              var l = n("23e7"), o = n("d039"), s = n("fc6a"), u = n("06cf").f, d = n("83ab"), h = o(function() {
                u(1);
              }), p = !d || h;
              l({ target: "Object", stat: !0, forced: p, sham: !d }, {
                getOwnPropertyDescriptor: function(v, m) {
                  return u(s(v), m);
                }
              });
            }
          ),
          /***/
          e538: (
            /***/
            function(i, c, n) {
              var l = n("b622");
              c.f = l;
            }
          ),
          /***/
          e893: (
            /***/
            function(i, c, n) {
              var l = n("5135"), o = n("56ef"), s = n("06cf"), u = n("9bf2");
              i.exports = function(d, h) {
                for (var p = o(h), f = u.f, v = s.f, m = 0; m < p.length; m++) {
                  var g = p[m];
                  l(d, g) || f(d, g, v(h, g));
                }
              };
            }
          ),
          /***/
          e8b5: (
            /***/
            function(i, c, n) {
              var l = n("c6b6");
              i.exports = Array.isArray || function(s) {
                return l(s) == "Array";
              };
            }
          ),
          /***/
          e95a: (
            /***/
            function(i, c, n) {
              var l = n("b622"), o = n("3f8c"), s = l("iterator"), u = Array.prototype;
              i.exports = function(d) {
                return d !== void 0 && (o.Array === d || u[s] === d);
              };
            }
          ),
          /***/
          f5df: (
            /***/
            function(i, c, n) {
              var l = n("00ee"), o = n("c6b6"), s = n("b622"), u = s("toStringTag"), d = o(/* @__PURE__ */ function() {
                return arguments;
              }()) == "Arguments", h = function(p, f) {
                try {
                  return p[f];
                } catch {
                }
              };
              i.exports = l ? o : function(p) {
                var f, v, m;
                return p === void 0 ? "Undefined" : p === null ? "Null" : typeof (v = h(f = Object(p), u)) == "string" ? v : d ? o(f) : (m = o(f)) == "Object" && typeof f.callee == "function" ? "Arguments" : m;
              };
            }
          ),
          /***/
          f772: (
            /***/
            function(i, c, n) {
              var l = n("5692"), o = n("90e3"), s = l("keys");
              i.exports = function(u) {
                return s[u] || (s[u] = o(u));
              };
            }
          ),
          /***/
          fb15: (
            /***/
            function(i, c, n) {
              if (n.r(c), typeof window < "u") {
                var l = window.document.currentScript;
                {
                  var o = n("8875");
                  l = o(), "currentScript" in document || Object.defineProperty(document, "currentScript", { get: o });
                }
                var s = l && l.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
                s && (n.p = s[1]);
              }
              n("99af"), n("4de4"), n("4160"), n("c975"), n("d81d"), n("a434"), n("159b"), n("a4d3"), n("e439"), n("dbb4"), n("b64b");
              function u(G, K, te) {
                return K in G ? Object.defineProperty(G, K, {
                  value: te,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                }) : G[K] = te, G;
              }
              function d(G, K) {
                var te = Object.keys(G);
                if (Object.getOwnPropertySymbols) {
                  var ce = Object.getOwnPropertySymbols(G);
                  K && (ce = ce.filter(function(Se) {
                    return Object.getOwnPropertyDescriptor(G, Se).enumerable;
                  })), te.push.apply(te, ce);
                }
                return te;
              }
              function h(G) {
                for (var K = 1; K < arguments.length; K++) {
                  var te = arguments[K] != null ? arguments[K] : {};
                  K % 2 ? d(Object(te), !0).forEach(function(ce) {
                    u(G, ce, te[ce]);
                  }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(G, Object.getOwnPropertyDescriptors(te)) : d(Object(te)).forEach(function(ce) {
                    Object.defineProperty(G, ce, Object.getOwnPropertyDescriptor(te, ce));
                  });
                }
                return G;
              }
              function p(G) {
                if (Array.isArray(G)) return G;
              }
              n("e01a"), n("d28b"), n("e260"), n("d3b7"), n("3ca3"), n("ddb0");
              function f(G, K) {
                if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(G)))) {
                  var te = [], ce = !0, Se = !1, Me = void 0;
                  try {
                    for (var Ae = G[Symbol.iterator](), Ee; !(ce = (Ee = Ae.next()).done) && (te.push(Ee.value), !(K && te.length === K)); ce = !0)
                      ;
                  } catch (He) {
                    Se = !0, Me = He;
                  } finally {
                    try {
                      !ce && Ae.return != null && Ae.return();
                    } finally {
                      if (Se) throw Me;
                    }
                  }
                  return te;
                }
              }
              n("a630"), n("fb6a"), n("b0c0"), n("25f0");
              function v(G, K) {
                (K == null || K > G.length) && (K = G.length);
                for (var te = 0, ce = new Array(K); te < K; te++)
                  ce[te] = G[te];
                return ce;
              }
              function m(G, K) {
                if (G) {
                  if (typeof G == "string") return v(G, K);
                  var te = Object.prototype.toString.call(G).slice(8, -1);
                  if (te === "Object" && G.constructor && (te = G.constructor.name), te === "Map" || te === "Set") return Array.from(G);
                  if (te === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(te)) return v(G, K);
                }
              }
              function g() {
                throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
              }
              function y(G, K) {
                return p(G) || f(G, K) || m(G, K) || g();
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
              var P = n("a352"), O = /* @__PURE__ */ n.n(P);
              function D(G) {
                G.parentElement !== null && G.parentElement.removeChild(G);
              }
              function N(G, K, te) {
                var ce = te === 0 ? G.children[0] : G.children[te - 1].nextSibling;
                G.insertBefore(K, ce);
              }
              var j = n("dbf1");
              n("13d5"), n("4fad"), n("ac1f"), n("5319");
              function H(G) {
                var K = /* @__PURE__ */ Object.create(null);
                return function(ce) {
                  var Se = K[ce];
                  return Se || (K[ce] = G(ce));
                };
              }
              var V = /-(\w)/g, z = H(function(G) {
                return G.replace(V, function(K, te) {
                  return te.toUpperCase();
                });
              });
              n("5db7"), n("73d9");
              var Y = ["Start", "Add", "Remove", "Update", "End"], W = ["Choose", "Unchoose", "Sort", "Filter", "Clone"], ae = ["Move"], X = [ae, Y, W].flatMap(function(G) {
                return G;
              }).map(function(G) {
                return "on".concat(G);
              }), he = {
                manage: ae,
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
              function je(G) {
                return ["id", "class", "role", "style"].includes(G) || G.startsWith("data-") || G.startsWith("aria-") || G.startsWith("on");
              }
              function Ne(G) {
                return G.reduce(function(K, te) {
                  var ce = y(te, 2), Se = ce[0], Me = ce[1];
                  return K[Se] = Me, K;
                }, {});
              }
              function Le(G) {
                var K = G.$attrs, te = G.componentData, ce = te === void 0 ? {} : te, Se = Ne(Object.entries(K).filter(function(Me) {
                  var Ae = y(Me, 2), Ee = Ae[0];
                  return Ae[1], je(Ee);
                }));
                return h(h({}, Se), ce);
              }
              function be(G) {
                var K = G.$attrs, te = G.callBackBuilder, ce = Ne(R(K));
                Object.entries(te).forEach(function(Me) {
                  var Ae = y(Me, 2), Ee = Ae[0], He = Ae[1];
                  he[Ee].forEach(function(Oe) {
                    ce["on".concat(Oe)] = He(Oe);
                  });
                });
                var Se = "[data-draggable]".concat(ce.draggable || "");
                return h(h({}, ce), {}, {
                  draggable: Se
                });
              }
              function R(G) {
                return Object.entries(G).filter(function(K) {
                  var te = y(K, 2), ce = te[0];
                  return te[1], !je(ce);
                }).map(function(K) {
                  var te = y(K, 2), ce = te[0], Se = te[1];
                  return [z(ce), Se];
                }).filter(function(K) {
                  var te = y(K, 2), ce = te[0];
                  return te[1], !fe(ce);
                });
              }
              n("c740");
              function M(G, K) {
                if (!(G instanceof K))
                  throw new TypeError("Cannot call a class as a function");
              }
              function T(G, K) {
                for (var te = 0; te < K.length; te++) {
                  var ce = K[te];
                  ce.enumerable = ce.enumerable || !1, ce.configurable = !0, "value" in ce && (ce.writable = !0), Object.defineProperty(G, ce.key, ce);
                }
              }
              function L(G, K, te) {
                return K && T(G.prototype, K), G;
              }
              var b = function(K) {
                var te = K.el;
                return te;
              }, x = function(K, te) {
                return K.__draggable_context = te;
              }, I = function(K) {
                return K.__draggable_context;
              }, U = /* @__PURE__ */ function() {
                function G(K) {
                  var te = K.nodes, ce = te.header, Se = te.default, Me = te.footer, Ae = K.root, Ee = K.realList;
                  M(this, G), this.defaultNodes = Se, this.children = [].concat(w(ce), w(Se), w(Me)), this.externalComponent = Ae.externalComponent, this.rootTransition = Ae.transition, this.tag = Ae.tag, this.realList = Ee;
                }
                return L(G, [{
                  key: "render",
                  value: function(te, ce) {
                    var Se = this.tag, Me = this.children, Ae = this._isRootComponent, Ee = Ae ? {
                      default: function() {
                        return Me;
                      }
                    } : Me;
                    return te(Se, ce, Ee);
                  }
                }, {
                  key: "updated",
                  value: function() {
                    var te = this.defaultNodes, ce = this.realList;
                    te.forEach(function(Se, Me) {
                      x(b(Se), {
                        element: ce[Me],
                        index: Me
                      });
                    });
                  }
                }, {
                  key: "getUnderlyingVm",
                  value: function(te) {
                    return I(te);
                  }
                }, {
                  key: "getVmIndexFromDomIndex",
                  value: function(te, ce) {
                    var Se = this.defaultNodes, Me = Se.length, Ae = ce.children, Ee = Ae.item(te);
                    if (Ee === null)
                      return Me;
                    var He = I(Ee);
                    if (He)
                      return He.index;
                    if (Me === 0)
                      return 0;
                    var Oe = b(Se[0]), we = w(Ae).findIndex(function(Re) {
                      return Re === Oe;
                    });
                    return te < we ? 0 : Me;
                  }
                }, {
                  key: "_isRootComponent",
                  get: function() {
                    return this.externalComponent || this.rootTransition;
                  }
                }]), G;
              }(), $ = n("8bbf");
              function B(G, K) {
                var te = G[K];
                return te ? te() : [];
              }
              function Q(G) {
                var K = G.$slots, te = G.realList, ce = G.getKey, Se = te || [], Me = ["header", "footer"].map(function(Re) {
                  return B(K, Re);
                }), Ae = y(Me, 2), Ee = Ae[0], He = Ae[1], Oe = K.item;
                if (!Oe)
                  throw new Error("draggable element must have an item slot");
                var we = Se.flatMap(function(Re, Be) {
                  return Oe({
                    element: Re,
                    index: Be
                  }).map(function(ke) {
                    return ke.key = ce(Re), ke.props = h(h({}, ke.props || {}), {}, {
                      "data-draggable": !0
                    }), ke;
                  });
                });
                if (we.length !== Se.length)
                  throw new Error("Item slot must have only one child");
                return {
                  header: Ee,
                  footer: He,
                  default: we
                };
              }
              function q(G) {
                var K = xe(G), te = !Ie(G) && !K;
                return {
                  transition: K,
                  externalComponent: te,
                  tag: te ? Object($.resolveComponent)(G) : K ? $.TransitionGroup : G
                };
              }
              function J(G) {
                var K = G.$slots, te = G.tag, ce = G.realList, Se = G.getKey, Me = Q({
                  $slots: K,
                  realList: ce,
                  getKey: Se
                }), Ae = q(te);
                return new U({
                  nodes: Me,
                  root: Ae,
                  realList: ce
                });
              }
              function _(G, K) {
                var te = this;
                Object($.nextTick)(function() {
                  return te.$emit(G.toLowerCase(), K);
                });
              }
              function re(G) {
                var K = this;
                return function(te, ce) {
                  if (K.realList !== null)
                    return K["onDrag".concat(G)](te, ce);
                };
              }
              function le(G) {
                var K = this, te = re.call(this, G);
                return function(ce, Se) {
                  te.call(K, ce, Se), _.call(K, G, ce);
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
              }))), tt = Object($.defineComponent)({
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
                    var K = this.$slots, te = this.$attrs, ce = this.tag, Se = this.componentData, Me = this.realList, Ae = this.getKey, Ee = J({
                      $slots: K,
                      tag: ce,
                      realList: Me,
                      getKey: Ae
                    });
                    this.componentStructure = Ee;
                    var He = Le({
                      $attrs: te,
                      componentData: Se
                    });
                    return Ee.render($.h, He);
                  } catch (Oe) {
                    return this.error = !0, Object($.h)("pre", {
                      style: {
                        color: "red"
                      }
                    }, Oe.stack);
                  }
                },
                created: function() {
                  this.list !== null && this.modelValue !== null && j.a.error("modelValue and list props are mutually exclusive! Please set one or another.");
                },
                mounted: function() {
                  var K = this;
                  if (!this.error) {
                    var te = this.$attrs, ce = this.$el, Se = this.componentStructure;
                    Se.updated();
                    var Me = be({
                      $attrs: te,
                      callBackBuilder: {
                        manageAndEmit: function(He) {
                          return le.call(K, He);
                        },
                        emit: function(He) {
                          return _.bind(K, He);
                        },
                        manage: function(He) {
                          return re.call(K, He);
                        }
                      }
                    }), Ae = ce.nodeType === 1 ? ce : ce.parentElement;
                    this._sortable = new O.a(Ae, Me), this.targetDomElement = Ae, Ae.__draggable_component__ = this;
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
                    return typeof K == "function" ? K : function(te) {
                      return te[K];
                    };
                  }
                },
                watch: {
                  $attrs: {
                    handler: function(K) {
                      var te = this._sortable;
                      te && R(K).forEach(function(ce) {
                        var Se = y(ce, 2), Me = Se[0], Ae = Se[1];
                        te.option(Me, Ae);
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
                    var te = this;
                    Object($.nextTick)(function() {
                      return te.$emit("change", K);
                    });
                  },
                  alterList: function(K) {
                    if (this.list) {
                      K(this.list);
                      return;
                    }
                    var te = w(this.modelValue);
                    K(te), this.$emit("update:modelValue", te);
                  },
                  spliceList: function() {
                    var K = arguments, te = function(Se) {
                      return Se.splice.apply(Se, w(K));
                    };
                    this.alterList(te);
                  },
                  updatePosition: function(K, te) {
                    var ce = function(Me) {
                      return Me.splice(te, 0, Me.splice(K, 1)[0]);
                    };
                    this.alterList(ce);
                  },
                  getRelatedContextFromMoveEvent: function(K) {
                    var te = K.to, ce = K.related, Se = this.getUnderlyingPotencialDraggableComponent(te);
                    if (!Se)
                      return {
                        component: Se
                      };
                    var Me = Se.realList, Ae = {
                      list: Me,
                      component: Se
                    };
                    if (te !== ce && Me) {
                      var Ee = Se.getUnderlyingVm(ce) || {};
                      return h(h({}, Ee), Ae);
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
                    var te = K.item._underlying_vm_;
                    if (te !== void 0) {
                      D(K.item);
                      var ce = this.getVmIndexFromDomIndex(K.newIndex);
                      this.spliceList(ce, 0, te);
                      var Se = {
                        element: te,
                        newIndex: ce
                      };
                      this.emitChanges({
                        added: Se
                      });
                    }
                  },
                  onDragRemove: function(K) {
                    if (N(this.$el, K.item, K.oldIndex), K.pullMode === "clone") {
                      D(K.clone);
                      return;
                    }
                    var te = this.context, ce = te.index, Se = te.element;
                    this.spliceList(ce, 1);
                    var Me = {
                      element: Se,
                      oldIndex: ce
                    };
                    this.emitChanges({
                      removed: Me
                    });
                  },
                  onDragUpdate: function(K) {
                    D(K.item), N(K.from, K.item, K.oldIndex);
                    var te = this.context.index, ce = this.getVmIndexFromDomIndex(K.newIndex);
                    this.updatePosition(te, ce);
                    var Se = {
                      element: this.context.element,
                      oldIndex: te,
                      newIndex: ce
                    };
                    this.emitChanges({
                      moved: Se
                    });
                  },
                  computeFutureIndex: function(K, te) {
                    if (!K.element)
                      return 0;
                    var ce = w(te.to.children).filter(function(Ee) {
                      return Ee.style.display !== "none";
                    }), Se = ce.indexOf(te.related), Me = K.component.getVmIndexFromDomIndex(Se), Ae = ce.indexOf(ge) !== -1;
                    return Ae || !te.willInsertAfter ? Me : Me + 1;
                  },
                  onDragMove: function(K, te) {
                    var ce = this.move, Se = this.realList;
                    if (!ce || !Se)
                      return !0;
                    var Me = this.getRelatedContextFromMoveEvent(K), Ae = this.computeFutureIndex(Me, K), Ee = h(h({}, this.context), {}, {
                      futureIndex: Ae
                    }), He = h(h({}, K), {}, {
                      relatedContext: Me,
                      draggedContext: Ee
                    });
                    return ce(He, te);
                  },
                  onDragEnd: function() {
                    ge = null;
                  }
                }
              }), _e = tt;
              c.default = _e;
            }
          ),
          /***/
          fb6a: (
            /***/
            function(i, c, n) {
              var l = n("23e7"), o = n("861d"), s = n("e8b5"), u = n("23cb"), d = n("50c4"), h = n("fc6a"), p = n("8418"), f = n("b622"), v = n("1dde"), m = n("ae40"), g = v("slice"), y = m("slice", { ACCESSORS: !0, 0: 0, 1: 2 }), S = f("species"), E = [].slice, A = Math.max;
              l({ target: "Array", proto: !0, forced: !g || !y }, {
                slice: function(P, O) {
                  var D = h(this), N = d(D.length), j = u(P, N), H = u(O === void 0 ? N : O, N), V, z, Y;
                  if (s(D) && (V = D.constructor, typeof V == "function" && (V === Array || s(V.prototype)) ? V = void 0 : o(V) && (V = V[S], V === null && (V = void 0)), V === Array || V === void 0))
                    return E.call(D, j, H);
                  for (z = new (V === void 0 ? Array : V)(A(H - j, 0)), Y = 0; j < H; j++, Y++) j in D && p(z, Y, D[j]);
                  return z.length = Y, z;
                }
              });
            }
          ),
          /***/
          fc6a: (
            /***/
            function(i, c, n) {
              var l = n("44ad"), o = n("1d80");
              i.exports = function(s) {
                return l(o(s));
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
              var l = n("4930");
              i.exports = l && !Symbol.sham && typeof Symbol.iterator == "symbol";
            }
          )
          /******/
        }).default
      );
    });
  }(co)), co.exports;
}
var xv = bv();
const Do = /* @__PURE__ */ La(xv), Sv = {
  name: "VActions",
  directives: {
    clickOutside: Ds
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
}, Ev = { class: "flex items-center" }, wv = { class: "relative flex items-center" }, Tv = {
  key: 0,
  width: "16",
  height: "4",
  viewBox: "0 0 16 4",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function Av(t, e, r, a, i, c) {
  const n = ts("click-outside");
  return et((Z(), ne("div", Ev, [
    k("div", wv, [
      k("div", {
        ref: "button",
        class: nt([{ active: i.active }, "relative flex cursor-pointer hover:bg-gray-200 w-5 h-5 items-center justify-center rounded-lg"]),
        onClick: e[0] || (e[0] = rr((l) => i.active = !i.active, ["prevent"]))
      }, [
        r.showActionIcon ? (Z(), ne("svg", Tv, e[1] || (e[1] = [
          k("path", {
            d: "M8.00065 2.83341C8.46089 2.83341 8.83398 2.46032 8.83398 2.00008C8.83398 1.53984 8.46089 1.16675 8.00065 1.16675C7.54041 1.16675 7.16732 1.53984 7.16732 2.00008C7.16732 2.46032 7.54041 2.83341 8.00065 2.83341Z",
            stroke: "#98A2B3",
            "stroke-width": "1.66667",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1),
          k("path", {
            d: "M13.834 2.83341C14.2942 2.83341 14.6673 2.46032 14.6673 2.00008C14.6673 1.53984 14.2942 1.16675 13.834 1.16675C13.3737 1.16675 13.0007 1.53984 13.0007 2.00008C13.0007 2.46032 13.3737 2.83341 13.834 2.83341Z",
            stroke: "#98A2B3",
            "stroke-width": "1.66667",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1),
          k("path", {
            d: "M2.16732 2.83341C2.62755 2.83341 3.00065 2.46032 3.00065 2.00008C3.00065 1.53984 2.62755 1.16675 2.16732 1.16675C1.70708 1.16675 1.33398 1.53984 1.33398 2.00008C1.33398 2.46032 1.70708 2.83341 2.16732 2.83341Z",
            stroke: "#98A2B3",
            "stroke-width": "1.66667",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ]))) : De("", !0),
        xn(t.$slots, "button")
      ], 2),
      ie(Ra, { name: "fade" }, {
        default: Tt(() => [
          i.active ? (Z(), ne("div", {
            key: 0,
            class: nt(["absolute right-0 top-full z-20 w-[200px] rounded bg-white shadow-xl ring-1 ring-neutral-100", r.classes])
          }, [
            xn(t.$slots, "dropdown")
          ], 2)) : De("", !0)
        ]),
        _: 3
      })
    ])
  ])), [
    [n, () => this.active = !1]
  ]);
}
const El = /* @__PURE__ */ bt(Sv, [["render", Av]]), Cv = {
  name: "VGrid",
  inject: ["bus"],
  components: { VActions: El, VToggle: Qa, draggable: Do },
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
      this.previousGrid = an(this.grid);
    },
    handleAdd(t, e, r) {
      const a = an(t.item._underlying_vm_), i = this.findFieldPosition(a), c = this.previousGrid[e][r];
      if (a.type === "grid") {
        this.grid[e][r] = [];
        return;
      }
      this.grid[e][r].length > 1 && (i && Object.keys(i).length && c[0].id !== a.id && (this.grid[i.rowIndex][i.colIndex] = [], this.grid[i.rowIndex][i.colIndex].push(c[0])), this.grid[e][r] = [], this.grid[e][r].push(a)), this.previousGrid = an(this.grid);
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
}, Ov = { class: "flex justify-between py-2" }, Pv = { class: "grid gap-2 w-full" }, Rv = { class: "pl-1 pr-3 py-2.5 w-full bg-white rounded-lg flex items-center gap-2" }, Iv = { class: "flex flex-row justify-between items-center w-full" }, Dv = { class: "text-sm text-gray-900" }, Fv = { class: "divide-y text-sm text-gray-700" }, Mv = ["onClick"], Lv = ["onClick"], Uv = ["onClick"], Nv = { class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm text-gray-600 z-0" }, jv = { key: 0 }, kv = {
  key: 0,
  class: "mt-2 flex gap-2"
};
function Vv(t, e, r, a, i, c) {
  const n = rn("v-toggle"), l = rn("v-actions"), o = rn("draggable");
  return Z(), ne("div", null, [
    ie(n, {
      class: "mt-3 mb-1",
      title: "Allow form users to add rows when filling out the form",
      modelValue: i.localAllowToAdd,
      "onUpdate:modelValue": e[0] || (e[0] = (s) => i.localAllowToAdd = s)
    }, null, 8, ["modelValue"]),
    k("div", Ov, [
      e[4] || (e[4] = k("h4", { class: "text-base font-semibold text-gray-900" }, "Define columns/rows", -1)),
      k("div", null, [
        k("a", {
          onClick: e[1] || (e[1] = (...s) => c.addColumn && c.addColumn(...s)),
          class: "cursor-pointer text-brand-700 flex items-center text-sm font-semibold hover:bg-brand-50 p-1 gap-1 rounded"
        }, e[3] || (e[3] = [
          k("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            k("path", {
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
    k("div", Pv, [
      (Z(!0), ne(Ct, null, bn(i.grid, (s, u) => (Z(), ne("div", {
        key: "row-" + u,
        class: "flex gap-2 relative"
      }, [
        (Z(!0), ne(Ct, null, bn(s, (d, h) => (Z(), ne("div", {
          key: "cell-" + u + "-" + h,
          class: nt(c.getClassForItem(i.grid[u], h))
        }, [
          ie(o, {
            "item-key": "id",
            modelValue: i.grid[u][h],
            "onUpdate:modelValue": (p) => i.grid[u][h] = p,
            onAdd: (p) => c.handleAdd(p, u, h),
            onDrag: c.onDrag,
            "swap-threshold": "0.65",
            group: { name: `${u} - ${h}`, pull: !0, put: !0 },
            class: nt(["w-full h-full items-center justify-center", { flex: !i.grid[u][h].length }]),
            "ghost-class": "dragging-item"
          }, {
            item: Tt(({ element: p }) => [
              k("div", Rv, [
                e[8] || (e[8] = k("svg", {
                  class: "cursor-pointer",
                  width: "8",
                  height: "13",
                  viewBox: "0 0 7 13",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  k("rect", {
                    x: "1",
                    y: "1",
                    width: "2",
                    height: "2",
                    fill: "#667085"
                  }),
                  k("rect", {
                    x: "4",
                    y: "1",
                    width: "2",
                    height: "2",
                    fill: "#667085"
                  }),
                  k("rect", {
                    x: "1",
                    y: "4",
                    width: "2",
                    height: "2",
                    fill: "#667085"
                  }),
                  k("rect", {
                    x: "4",
                    y: "4",
                    width: "2",
                    height: "2",
                    fill: "#667085"
                  }),
                  k("rect", {
                    x: "1",
                    y: "7",
                    width: "2",
                    height: "2",
                    fill: "#667085"
                  }),
                  k("rect", {
                    x: "1",
                    y: "10",
                    width: "2",
                    height: "2",
                    fill: "#667085"
                  }),
                  k("rect", {
                    x: "4",
                    y: "7",
                    width: "2",
                    height: "2",
                    fill: "#667085"
                  }),
                  k("rect", {
                    x: "4",
                    y: "10",
                    width: "2",
                    height: "2",
                    fill: "#667085"
                  })
                ], -1)),
                k("div", Iv, [
                  k("span", Dv, Ve(p.label), 1),
                  ie(l, null, {
                    dropdown: Tt(() => [
                      k("ul", Fv, [
                        k("li", {
                          onClick: (f) => c.edit(u),
                          class: "cursor-pointer flex items-center p-2 hover:bg-brand-50 gap-2 rounded-t"
                        }, e[5] || (e[5] = [
                          k("svg", {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 16 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                          }, [
                            k("path", {
                              d: "M1.66602 14.3334L5.36553 12.9105C5.60216 12.8195 5.72047 12.774 5.83116 12.7146C5.92948 12.6618 6.02322 12.6009 6.11138 12.5324C6.21063 12.4554 6.30027 12.3658 6.47954 12.1865L13.9994 4.66671C14.7357 3.93033 14.7357 2.73642 13.9994 2.00004C13.263 1.26366 12.0691 1.26366 11.3327 2.00004L3.81287 9.51985C3.6336 9.69912 3.54396 9.78876 3.46694 9.88801C3.39853 9.97617 3.33762 10.0699 3.28484 10.1682C3.22542 10.2789 3.17991 10.3972 3.0889 10.6339L1.66602 14.3334ZM1.66602 14.3334L3.0381 10.766C3.13628 10.5107 3.18537 10.3831 3.26958 10.3246C3.34316 10.2735 3.43422 10.2542 3.52221 10.271C3.6229 10.2902 3.7196 10.3869 3.913 10.5803L5.41906 12.0864C5.61246 12.2798 5.70916 12.3765 5.72839 12.4772C5.7452 12.5652 5.72587 12.6562 5.67478 12.7298C5.61631 12.814 5.48867 12.8631 5.2334 12.9613L1.66602 14.3334Z",
                              stroke: "#667085",
                              "stroke-width": "1.5",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            })
                          ], -1),
                          k("span", null, "Edit", -1)
                        ]), 8, Mv),
                        k("li", {
                          onClick: (f) => c.removeField(u, h),
                          class: "cursor-pointer flex items-center gap-2 p-2 hover:bg-brand-200"
                        }, e[6] || (e[6] = [
                          k("svg", {
                            width: "14",
                            height: "16",
                            viewBox: "0 0 14 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                          }, [
                            k("path", {
                              d: "M9.66667 3.99992V3.46659C9.66667 2.71985 9.66667 2.34648 9.52134 2.06126C9.39351 1.81038 9.18954 1.60641 8.93865 1.47858C8.65344 1.33325 8.28007 1.33325 7.53333 1.33325H6.46667C5.71993 1.33325 5.34656 1.33325 5.06135 1.47858C4.81046 1.60641 4.60649 1.81038 4.47866 2.06126C4.33333 2.34648 4.33333 2.71985 4.33333 3.46659V3.99992M5.66667 7.66659V10.9999M8.33333 7.66659V10.9999M1 3.99992H13M11.6667 3.99992V11.4666C11.6667 12.5867 11.6667 13.1467 11.4487 13.5746C11.2569 13.9509 10.951 14.2569 10.5746 14.4486C10.1468 14.6666 9.58677 14.6666 8.46667 14.6666H5.53333C4.41323 14.6666 3.85318 14.6666 3.42535 14.4486C3.04903 14.2569 2.74307 13.9509 2.55132 13.5746C2.33333 13.1467 2.33333 12.5867 2.33333 11.4666V3.99992",
                              stroke: "#667085",
                              "stroke-width": "1.5",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            })
                          ], -1),
                          k("span", null, "Remove this cell", -1)
                        ]), 8, Lv),
                        k("li", {
                          onClick: (f) => c.removeColumn(u, h),
                          class: "cursor-pointer flex items-center gap-2 p-2 hover:bg-brand-50 rounded-b"
                        }, e[7] || (e[7] = [
                          k("svg", {
                            width: "14",
                            height: "16",
                            viewBox: "0 0 14 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                          }, [
                            k("path", {
                              d: "M9.66667 3.99992V3.46659C9.66667 2.71985 9.66667 2.34648 9.52134 2.06126C9.39351 1.81038 9.18954 1.60641 8.93865 1.47858C8.65344 1.33325 8.28007 1.33325 7.53333 1.33325H6.46667C5.71993 1.33325 5.34656 1.33325 5.06135 1.47858C4.81046 1.60641 4.60649 1.81038 4.47866 2.06126C4.33333 2.34648 4.33333 2.71985 4.33333 3.46659V3.99992M5.66667 7.66659V10.9999M8.33333 7.66659V10.9999M1 3.99992H13M11.6667 3.99992V11.4666C11.6667 12.5867 11.6667 13.1467 11.4487 13.5746C11.2569 13.9509 10.951 14.2569 10.5746 14.4486C10.1468 14.6666 9.58677 14.6666 8.46667 14.6666H5.53333C4.41323 14.6666 3.85318 14.6666 3.42535 14.4486C3.04903 14.2569 2.74307 13.9509 2.55132 13.5746C2.33333 13.1467 2.33333 12.5867 2.33333 11.4666V3.99992",
                              stroke: "#667085",
                              "stroke-width": "1.5",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            })
                          ], -1),
                          k("span", null, "Remove whole column", -1)
                        ]), 8, Uv)
                      ])
                    ]),
                    _: 2
                  }, 1024)
                ])
              ])
            ]),
            _: 2
          }, 1032, ["modelValue", "onUpdate:modelValue", "onAdd", "onDrag", "group", "class"]),
          et(k("p", Nv, [
            r.isDragging ? De("", !0) : (Z(), ne("span", jv, "Drag a layout/component in"))
          ], 512), [
            [eu, !i.grid[u][h].length]
          ])
        ], 2))), 128))
      ]))), 128))
    ]),
    r.allowAddRowAsTemplate ? (Z(), ne("div", kv, [
      k("a", {
        onClick: e[2] || (e[2] = (...s) => c.addRow && c.addRow(...s)),
        class: "cursor-pointer text-brand-700 flex items-center text-sm font-semibold hover:bg-brand-50 p-1 gap-1 rounded"
      }, e[9] || (e[9] = [
        k("svg", {
          width: "14",
          height: "14",
          viewBox: "0 0 14 14",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, [
          k("path", {
            d: "M6.99935 1.1665V12.8332M1.16602 6.99984H12.8327",
            stroke: "#931C61",
            "stroke-width": "1.66667",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          })
        ], -1),
        Xt(" Add Row ")
      ]))
    ])) : De("", !0)
  ]);
}
const $v = /* @__PURE__ */ bt(Cv, [["render", Vv]]), Bv = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
};
function Hv(t, e) {
  return Z(), ne("svg", Bv, e[0] || (e[0] = [
    k("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M16 6v-.8c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C14.48 2 13.92 2 12.8 2h-1.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C8 3.52 8 4.08 8 5.2V6m2 5.5v5m4-5v5M3 6h18m-2 0v11.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C16.72 22 15.88 22 14.2 22H9.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C5 19.72 5 18.88 5 17.2V6"
    }, null, -1)
  ]));
}
const qi = { render: Hv }, zv = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "8",
  height: "13",
  fill: "none",
  viewBox: "0 0 7 13"
};
function Gv(t, e) {
  return Z(), ne("svg", zv, e[0] || (e[0] = [
    k("path", {
      fill: "#667085",
      d: "M1 1h2v2H1zM4 1h2v2H4zM1 4h2v2H1zM4 4h2v2H4zM1 7h2v2H1zM1 10h2v2H1zM4 7h2v2H4zM4 10h2v2H4z"
    }, null, -1)
  ]));
}
const _i = { render: Gv }, Wv = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
};
function Yv(t, e) {
  return Z(), ne("svg", Wv, e[0] || (e[0] = [
    k("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m18 15-6-6-6 6"
    }, null, -1)
  ]));
}
const Kv = { render: Yv }, Xv = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
};
function Jv(t, e) {
  return Z(), ne("svg", Xv, e[0] || (e[0] = [
    k("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m6 9 6 6 6-6"
    }, null, -1)
  ]));
}
const Qv = { render: Jv }, Zv = { class: "-field-title handle" }, qv = ["onClick"], _v = { class: "-title" }, em = { class: "-type-title" }, tm = { class: "flex gap-6 items-center" }, nm = {
  key: 0,
  class: "-prop -options"
}, rm = { class: "divide-y text-sm text-gray-700" }, om = ["onClick"], am = { class: "-field-properties" }, im = { class: "-prop" }, sm = ["onUpdate:modelValue"], lm = { class: "-prop" }, um = ["onUpdate:modelValue"], cm = { class: "-prop" }, dm = ["onUpdate:modelValue", "placeholder"], fm = { class: "-two-columns" }, hm = { class: "-prop" }, pm = ["onUpdate:modelValue"], vm = { class: "-prop -width" }, mm = ["onUpdate:modelValue"], gm = { class: "-prop" }, ym = ["onUpdate:modelValue"], bm = {
  key: 0,
  class: "-prop"
}, xm = ["onUpdate:modelValue"], Sm = { class: "flex w-full gap-2" }, Em = {
  key: 0,
  class: "-prop -width w-full"
}, wm = ["onUpdate:modelValue"], Tm = {
  key: 1,
  class: "-prop w-full"
}, Am = ["onUpdate:modelValue"], Cm = {
  key: 0,
  class: "-two-columns"
}, Om = { class: "-prop" }, Pm = ["onUpdate:modelValue"], Rm = {
  key: 0,
  class: "-prop -width"
}, Im = ["onUpdate:modelValue"], Dm = { class: "-prop" }, Fm = { class: "-label" }, Mm = ["onUpdate:modelValue"], Lm = { class: "-two-columns" }, Um = {
  key: 0,
  class: "-prop"
}, Nm = ["onUpdate:modelValue"], jm = {
  key: 1,
  class: "-prop -width"
}, km = ["onUpdate:modelValue"], Vm = { class: "flex w-full gap-2" }, $m = {
  key: 0,
  class: "-prop w-full"
}, Bm = ["onUpdate:modelValue"], Hm = {
  key: 1,
  class: "-prop w-full"
}, zm = ["onUpdate:modelValue"], Gm = {
  key: 2,
  class: "-prop -options"
}, Wm = { class: "flex justify-between" }, Ym = { class: "-new" }, Km = ["onClick"], Xm = { class: "-option" }, Jm = ["onUpdate:modelValue"], Qm = ["onClick"], Zm = { key: 5 }, qm = ["onClick"], _m = {
  key: 0,
  class: "bg-gray-100 py-2 px-3 flex gap-2 rounded-lg mt-2"
}, eg = ["onClick"], tg = { key: 0 }, wl = {
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
    actions: {
      type: Array,
      default: () => []
    },
    isDragging: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const r = t, a = qe({}), i = e, c = qe([...r.modelValue]), n = ["select", "check-group", "radio-group"];
    go(
      c,
      (h) => {
        i("update:modelValue", h);
      },
      { deep: !0 }
    ), Pr(() => {
      c.value.forEach((h, p) => {
        var f;
        a.value[p] = !!((f = h.actions) != null && f.length);
      });
    });
    const l = (h, p) => {
      h.hasOwnProperty("actions") || (h = Object.assign(h, { actions: [] })), Array.isArray(h.actions) || (h.actions = []);
      const f = h.actions.indexOf(p);
      f === -1 ? h.actions.push(p) : h.actions.splice(f, 1);
    }, o = (h) => {
      switch (h.type) {
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
          return h.type.split("_").map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join(" ");
      }
    }, s = (h) => {
      c.value.splice(h, 1);
    }, u = (h) => {
      h.options.push("Option " + (h.options.length + 1));
    }, d = (h, p) => {
      h.options.splice(p, 1);
    };
    return (h, p) => (Z(), Jt(Ze(Do), {
      class: nt(["pb-60 relative z-10", { "!pb-4": t.disableDropzone }]),
      modelValue: c.value,
      "onUpdate:modelValue": p[0] || (p[0] = (f) => c.value = f),
      "item-key": "id",
      "ghost-class": "dragging-item",
      sort: !0,
      "empty-insert-threshold": 0,
      "inverted-swap-threshold": 0,
      group: { name: "fields", pull: !1, put: !0 },
      handle: ".handle"
    }, {
      item: Tt(({ element: f, index: v }) => [
        k("div", {
          class: nt(["relative -field", ["-type-" + f.type]])
        }, [
          k("div", Zv, [
            k("h2", {
              onClick: (m) => f.isShowing = !f.isShowing,
              class: "relative cursor-pointer"
            }, [
              ie(Ze(_i), { class: "w-5 h-5 absolute top-[6px] -left-[20px]" }),
              k("span", _v, [
                k("span", em, Ve(o(f)), 1)
              ])
            ], 8, qv),
            k("div", tm, [
              f.hasOwnProperty("required") ? (Z(), ne("div", nm, [
                ie(Qa, {
                  title: "Required",
                  modelValue: f.required,
                  "onUpdate:modelValue": (m) => f.required = m
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ])) : De("", !0),
              ie(El, null, {
                dropdown: Tt(() => [
                  k("ul", rm, [
                    k("li", {
                      onClick: (m) => s(v),
                      class: "cursor-pointer flex items-center gap-2 p-2 hover:bg-brand-50 rounded"
                    }, [
                      ie(Ze(qi), { class: "w-5 h-5" }),
                      p[1] || (p[1] = k("span", null, "Remove", -1))
                    ], 8, om)
                  ])
                ]),
                _: 2
              }, 1024)
            ])
          ]),
          k("div", am, [
            f != null && f.builder ? (Z(), Jt(Hn(f.builder), tu(Ia({ key: 0 }, { component: f })), null, 16)) : f.type === "grid" ? (Z(), ne(Ct, { key: 1 }, [
              k("div", im, [
                p[2] || (p[2] = k("span", { class: "-label" }, "Label", -1)),
                et(k("input", {
                  type: "text",
                  "onUpdate:modelValue": (m) => f.label = m
                }, null, 8, sm), [
                  [yt, f.label]
                ])
              ]),
              k("div", lm, [
                p[3] || (p[3] = k("span", { class: "-label" }, "Supporting Text", -1)),
                et(k("input", {
                  type: "text",
                  "onUpdate:modelValue": (m) => f.hint = m
                }, null, 8, um), [
                  [yt, f.hint]
                ])
              ]),
              ie($v, {
                modelValue: f.grid,
                "onUpdate:modelValue": (m) => f.grid = m,
                "is-dragging": t.isDragging,
                "allow-add-row": f.allow_add_row,
                "onUpdate:allowAddRow": (m) => f.allow_add_row = m
              }, null, 8, ["modelValue", "onUpdate:modelValue", "is-dragging", "allow-add-row", "onUpdate:allowAddRow"])
            ], 64)) : f.type === "paragraph" ? (Z(), ne(Ct, { key: 2 }, [
              k("div", cm, [
                p[4] || (p[4] = k("span", null, "Content", -1)),
                et(k("textarea", {
                  cols: "30",
                  rows: "3",
                  "onUpdate:modelValue": (m) => f.content = m,
                  placeholder: f.placeholder
                }, null, 8, dm), [
                  [yt, f.content]
                ])
              ]),
              k("div", fm, [
                k("div", hm, [
                  p[6] || (p[6] = k("span", null, "Type", -1)),
                  et(k("select", {
                    "onUpdate:modelValue": (m) => f.content_type = m
                  }, p[5] || (p[5] = [
                    k("option", { value: "p" }, "p", -1),
                    k("option", { value: "blockquote" }, "blockquote", -1),
                    k("option", { value: "address" }, "address", -1)
                  ]), 8, pm), [
                    [Zr, f.content_type]
                  ])
                ]),
                k("div", vm, [
                  p[7] || (p[7] = k("span", { class: "-label" }, "Classes", -1)),
                  et(k("input", {
                    "onUpdate:modelValue": (m) => f.class = m,
                    type: "text",
                    name: "classes",
                    placeholder: "Input space separated classes"
                  }, null, 8, mm), [
                    [yt, f.class]
                  ])
                ])
              ])
            ], 64)) : f.type === "checkbox" ? (Z(), ne(Ct, { key: 3 }, [
              k("div", gm, [
                p[8] || (p[8] = k("span", { class: "-label" }, "Label", -1)),
                et(k("input", {
                  type: "text",
                  "onUpdate:modelValue": (m) => f.label = m
                }, null, 8, ym), [
                  [yt, f.label]
                ])
              ]),
              f.hasOwnProperty("hint") ? (Z(), ne("div", bm, [
                p[9] || (p[9] = k("span", { class: "-label" }, "Supporting Text", -1)),
                et(k("textarea", {
                  cols: "30",
                  rows: "3",
                  "onUpdate:modelValue": (m) => f.hint = m,
                  placeholder: "Supporting text"
                }, null, 8, xm), [
                  [yt, f.hint]
                ])
              ])) : De("", !0),
              k("div", Sm, [
                f.class ? (Z(), ne("div", Em, [
                  p[11] || (p[11] = k("span", { class: "-label" }, "Width", -1)),
                  et(k("select", {
                    "onUpdate:modelValue": (m) => f.class = m
                  }, p[10] || (p[10] = [
                    k("option", { value: "w-full" }, "Full", -1),
                    k("option", { value: "w-1/2" }, "Half", -1)
                  ]), 8, wm), [
                    [Zr, f.class]
                  ])
                ])) : De("", !0),
                f.hasOwnProperty("defined_key") ? (Z(), ne("div", Tm, [
                  p[12] || (p[12] = k("span", { class: "-label" }, "Defined Key", -1)),
                  et(k("input", {
                    type: "text",
                    name: "defined_key",
                    "onUpdate:modelValue": (m) => f.defined_key = m
                  }, null, 8, Am), [
                    [yt, f.defined_key]
                  ])
                ])) : De("", !0)
              ])
            ], 64)) : (Z(), ne(Ct, { key: 4 }, [
              ["check-group", "radio-group", "signature", "file-upload"].includes(f.type) ? (Z(), ne("div", Cm, [
                k("div", Om, [
                  p[13] || (p[13] = k("span", { class: "-label" }, "Label", -1)),
                  et(k("input", {
                    type: "text",
                    "onUpdate:modelValue": (m) => f.label = m
                  }, null, 8, Pm), [
                    [yt, f.label]
                  ])
                ]),
                f.class ? (Z(), ne("div", Rm, [
                  p[15] || (p[15] = k("span", { class: "-label" }, "Width", -1)),
                  et(k("select", {
                    "onUpdate:modelValue": (m) => f.class = m
                  }, p[14] || (p[14] = [
                    k("option", { value: "w-full" }, "Full", -1),
                    k("option", { value: "w-1/2" }, "Half", -1)
                  ]), 8, Im), [
                    [Zr, f.class]
                  ])
                ])) : De("", !0)
              ])) : (Z(), ne(Ct, { key: 1 }, [
                k("div", Dm, [
                  k("span", Fm, Ve(f.type === "heading" ? "Heading" : "Label"), 1),
                  et(k("input", {
                    type: "text",
                    "onUpdate:modelValue": (m) => f.label = m
                  }, null, 8, Mm), [
                    [yt, f.label]
                  ])
                ]),
                k("div", Lm, [
                  f.placeholder !== null ? (Z(), ne("div", Um, [
                    p[16] || (p[16] = k("span", { class: "-label" }, "Placeholder", -1)),
                    et(k("input", {
                      type: "text",
                      name: "placeholder",
                      "onUpdate:modelValue": (m) => f.placeholder = m
                    }, null, 8, Nm), [
                      [yt, f.placeholder]
                    ])
                  ])) : De("", !0),
                  f.class ? (Z(), ne("div", jm, [
                    p[18] || (p[18] = k("span", { class: "-label" }, "Width", -1)),
                    et(k("select", {
                      "onUpdate:modelValue": (m) => f.class = m
                    }, p[17] || (p[17] = [
                      k("option", { value: "w-full" }, "Full", -1),
                      k("option", { value: "w-1/2" }, "Half", -1)
                    ]), 8, km), [
                      [Zr, f.class]
                    ])
                  ])) : De("", !0)
                ])
              ], 64)),
              k("div", Vm, [
                f.hasOwnProperty("hint") ? (Z(), ne("div", $m, [
                  p[19] || (p[19] = k("span", { class: "-label" }, "Hint Text", -1)),
                  et(k("input", {
                    type: "text",
                    name: "hint",
                    "onUpdate:modelValue": (m) => f.hint = m
                  }, null, 8, Bm), [
                    [yt, f.hint]
                  ])
                ])) : De("", !0),
                f.hasOwnProperty("defined_key") ? (Z(), ne("div", Hm, [
                  p[20] || (p[20] = k("span", { class: "-label" }, "Defined Key", -1)),
                  et(k("input", {
                    type: "text",
                    name: "defined_key",
                    "onUpdate:modelValue": (m) => f.defined_key = m
                  }, null, 8, zm), [
                    [yt, f.defined_key]
                  ])
                ])) : De("", !0)
              ]),
              n.includes(f.type) && f.options ? (Z(), ne("div", Gm, [
                k("div", Wm, [
                  p[22] || (p[22] = k("span", { class: "-label mb-2 text-base font-semibold text-gray-900" }, "Options", -1)),
                  k("div", Ym, [
                    k("a", {
                      class: "cursor-pointer text-brand-700 flex items-center text-sm font-semibold mr-3.5 hover:bg-brand-50 py-1 px-2 gap-1 rounded",
                      onClick: rr((m) => u(f), ["prevent"])
                    }, [
                      ie(Ze(cl), { class: "w-5 h-5" }),
                      p[21] || (p[21] = Xt(" Add "))
                    ], 8, Km)
                  ])
                ]),
                ie(Ze(Do), {
                  list: f.options,
                  class: "-added",
                  "item-key": "id",
                  group: { name: f.id, pull: !1, put: !1 },
                  handle: ".option-handle"
                }, {
                  item: Tt(({ option: m, index: g }) => [
                    k("div", Xm, [
                      ie(Ze(_i), { class: "w-5 h-5" }),
                      et(k("input", {
                        "onUpdate:modelValue": (y) => f.options[g] = y,
                        type: "text",
                        class: "mx-2 text-base text-gray-900"
                      }, null, 8, Jm), [
                        [yt, f.options[g]]
                      ]),
                      k("a", {
                        class: "hover:bg-brand-50 rounded cursor-pointer py-1",
                        onClick: (y) => d(f, g)
                      }, [
                        ie(Ze(qi), { class: "w-5 h-5" })
                      ], 8, Qm)
                    ])
                  ]),
                  _: 2
                }, 1032, ["list", "group"])
              ])) : De("", !0)
            ], 64)),
            t.actions.length ? (Z(), ne("div", Zm, [
              k("a", {
                class: "rounded-full text-brand-600 hover:text-brand-900 py-1 cursor-pointer text-sm inline-flex gap-1",
                onClick: (m) => a.value[v] = !a.value[v]
              }, [
                p[23] || (p[23] = Xt(" Actions ")),
                a.value[v] ? (Z(), Jt(Ze(Kv), {
                  key: 0,
                  class: "w-5 h-5"
                })) : (Z(), Jt(Ze(Qv), {
                  key: 1,
                  class: "w-5 h-5"
                }))
              ], 8, qm),
              a.value[v] ? (Z(), ne("div", _m, [
                (Z(!0), ne(Ct, null, bn(t.actions, (m) => {
                  var g;
                  return Z(), ne("a", {
                    class: nt(["cursor-pointer hover:bg-brand-400 px-2 py-1 bg-brand-200 rounded-lg text-white", { "!bg-brand-700": (g = f == null ? void 0 : f.actions) == null ? void 0 : g.includes(m.value) }]),
                    onClick: (y) => l(f, m.value)
                  }, Ve(m.label), 11, eg);
                }), 256))
              ])) : De("", !0)
            ])) : De("", !0)
          ])
        ], 2)
      ]),
      footer: Tt(() => [
        t.disableDropzone ? De("", !0) : (Z(), ne("p", {
          key: 0,
          class: nt(["absolute shadow-sm border border-dashed border-gray-300 border-spacing-96 mb-[96px] rounded-xl w-full h-36 bottom-0 z-0 flex items-center justify-center text-sm text-gray-600", { "h-[638px] !top-0": !c.value.length }])
        }, [
          t.isDragging ? De("", !0) : (Z(), ne("span", tg, "Drag a layout/component in"))
        ], 2))
      ]),
      _: 1
    }, 8, ["class", "modelValue"]));
  }
}, ng = {
  name: "EditFieldGrid",
  inject: ["bus"],
  components: { FieldDraggable: wl },
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
  const n = rn("field-draggable");
  return Z(), ne("div", rg, [
    k("div", og, [
      k("div", ag, [
        k("h4", ig, "Row " + Ve(r.index + 1) + ": multiple columns", 1),
        ie(n, {
          modelValue: i.localFields,
          "onUpdate:modelValue": e[0] || (e[0] = (l) => i.localFields = l),
          "disable-dropzone": ""
        }, null, 8, ["modelValue"])
      ]),
      k("div", sg, [
        k("a", {
          onClick: e[1] || (e[1] = (...l) => c.close && c.close(...l)),
          class: "rounded-full cursor-pointer px-3 py-2 border hover:bg-gray-200"
        }, "Cancel"),
        k("a", {
          onClick: e[2] || (e[2] = rr((...l) => c.confirm && c.confirm(...l), ["prevent"])),
          class: "rounded-full cursor-pointer bg-brand-400 hover:bg-brand-700 text-white px-3 py-2"
        }, "Save changes")
      ])
    ])
  ]);
}
const ug = /* @__PURE__ */ bt(ng, [["render", lg]]), cg = {
  inject: ["bus"],
  components: {
    EditFieldGrid: ug
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
}, dg = {
  key: 0,
  class: "fixed left-1/2 top-1/2 z-50 flex max-h-screen -translate-x-1/2 -translate-y-1/2 transform flex-col rounded-xl border-tertiary-500 bg-white"
}, fg = {
  key: 1,
  class: "p-smSpace"
}, hg = ["innerHTML"], pg = { class: "flex justify-center space-x-xsSpace pt-xsSpace" }, vg = ["textContent"], mg = ["textContent"];
function gg(t, e, r, a, i, c) {
  return Z(), ne("div", {
    class: nt([{ "-open": i.isOpen }, "v-modal"])
  }, [
    ie(Ra, { name: "fade" }, {
      default: Tt(() => [
        i.isOpen ? (Z(), ne("div", dg, [
          xn(t.$slots, "default", {}, () => [
            k("div", {
              class: nt(["relative max-h-[720px] overflow-y-auto", { "overflow-y-visible": !i.scrollable }])
            }, [
              i.componentName ? (Z(), Jt(Hn(i.componentName), Ia({ key: 0 }, i.componentData, {
                onConfirm: c.confirm,
                onCloseModal: c.close
              }), null, 16, ["onConfirm", "onCloseModal"])) : (Z(), ne("div", fg, [
                k("div", {
                  innerHTML: i.componentData,
                  class: "py-mdSpace"
                }, null, 8, hg),
                k("div", pg, [
                  k("a", {
                    onClick: e[0] || (e[0] = (...n) => c.close && c.close(...n)),
                    class: "btn-secondary btn-sm",
                    textContent: Ve(c.cancelButton)
                  }, null, 8, vg),
                  k("a", {
                    onClick: e[1] || (e[1] = rr((...n) => c.confirm && c.confirm(...n), ["prevent"])),
                    class: "btn-primary btn-sm",
                    textContent: Ve(c.confirmButton)
                  }, null, 8, mg)
                ])
              ]))
            ], 2)
          ], !0)
        ])) : De("", !0)
      ]),
      _: 3
    })
  ], 2);
}
const yg = /* @__PURE__ */ bt(cg, [["render", gg], ["__scopeId", "data-v-88cae789"]]), bg = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
};
function xg(t, e) {
  return Z(), ne("svg", bg, e[0] || (e[0] = [
    k("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M2.42 12.713c-.136-.215-.204-.323-.242-.49a1.2 1.2 0 0 1 0-.446c.038-.167.106-.274.242-.49C3.546 9.505 6.895 5 12 5s8.455 4.505 9.58 6.287c.137.215.205.323.243.49.029.125.029.322 0 .446-.038.167-.106.274-.242.49C20.455 14.495 17.105 19 12 19c-5.106 0-8.455-4.505-9.58-6.287"
    }, null, -1),
    k("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
    }, null, -1)
  ]));
}
const Sg = { render: xg }, Eg = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
};
function wg(t, e) {
  return Z(), ne("svg", Eg, e[0] || (e[0] = [
    k("circle", {
      cx: "12",
      cy: "12",
      r: "10",
      stroke: "currentColor",
      "stroke-width": "4",
      class: "opacity-25"
    }, null, -1),
    k("path", {
      fill: "currentColor",
      d: "M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4z",
      class: "opacity-75"
    }, null, -1)
  ]));
}
const es = { render: wg };
function Tg() {
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
const Ag = { class: "flex gap-4 mb-1 px-6 items-center" }, Cg = ["href"], Og = ["textContent"], Pg = { class: "flex justify-between items-center mb-6 px-6" }, Rg = { class: "text-gray-900 text-[30px] font-semibold" }, Ig = {
  key: 0,
  class: "flex gap-1 items-center"
}, Dg = {
  key: 1,
  class: "flex gap-1 items-center"
}, Fg = ["name", "value"], Mg = {
  key: 0,
  class: "form-builder-preview-container px-6"
}, Lg = {
  key: 0,
  class: "pb-6 text-xl font-semibold text-gray-900"
}, Ug = { class: "form-builder-preview" }, Ng = {
  key: 1,
  class: "form-builder-container mb-1 px-6"
}, jg = { class: "flex" }, kg = { class: "form-builder" }, Vg = { class: "form-builder-fields" }, $g = { class: "settings" }, Bg = {
  key: 0,
  class: "text-red-600 text-sm mt-0.5 inline-block"
}, Hg = {
  key: 0,
  class: "mt-2"
}, zg = {
  key: 0,
  class: "text-red-600 text-sm mt-0.5 inline-block"
}, Gg = { class: "flex w-1/3 flex-col" }, Wg = {
  key: 0,
  class: "p-6 mb-4 bg-gray-50 shadow-sm rounded-xl"
}, Yg = { class: "space-y-3" }, Kg = {
  width: "6",
  height: "6",
  viewBox: "0 0 6 6",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Xg = ["fill"], Jg = {
  key: 0,
  class: "flex flex-col text-sm font-regular text-gray-900 gap-1"
}, Qg = { class: "text-base" }, Zg = { class: "flex flex-col text-sm font-regular text-gray-900 gap-1" }, qg = { class: "text-base" }, _g = { class: "form-builder-templates overflow-y-auto" }, ey = ["onClick"], ty = { class: "relative group" }, ny = ["innerHTML"], ry = { class: "absolute hidden group-hover:block bg-black text-white text-sm rounded px-4 py-2 -top-16 left-0 w-[200px]" }, oy = {
  key: 2,
  class: "sticky bottom-0 flex justify-between items-center text-sm font-semibold w-fill h-[56px] py-2 px-6 z-50 mt-[22px] bg-gray-200"
}, ay = { class: "flex gap-2" }, iy = { key: 0 }, sy = {
  key: 1,
  class: "flex items-center gap-2"
}, ly = { key: 0 }, uy = {
  key: 1,
  class: "flex items-center gap-2"
}, Ry = {
  __name: "FormBuilder",
  props: {
    name: String,
    form: {
      type: Object,
      default: () => ({})
    },
    hasRecipient: {
      type: Boolean,
      default: !1
    },
    actions: {
      type: Array,
      default: () => []
    },
    redirectUrl: String,
    storeUrl: String
  },
  setup(t) {
    const e = t;
    Fo("bus", Mp);
    let r = nu(e.form), a = qe(r.id || null), i = qe(r.title || null), c = qe((r == null ? void 0 : r.recipients) ?? ""), n = qe(r.fields || []);
    const l = qe([]), o = qe(!1), s = qe(!1), u = qe(!1), d = qe(Tg()), h = (P) => {
      n.value.map((O) => (["builder", "presenter"].forEach((D) => {
        const N = P == null ? void 0 : P.find((j) => O.hasOwnProperty(D) && j[D].__name === O[D].__name);
        N && (O[D] = rt(N[D]));
      }), O));
    };
    Pr(() => {
      var D;
      const P = ns(), O = (D = P == null ? void 0 : P.appContext.config.globalProperties) == null ? void 0 : D.$customFormComponents;
      O == null || O.forEach((N) => {
        d.value.push(N);
      }), h(O);
    });
    const p = on(() => {
      var O;
      let P = {
        title: i.value,
        recipients: c.value,
        status: (O = r.value) == null ? void 0 : O.status,
        fields: n.value.map((D) => {
          let N = {
            id: D.id,
            name: D.name,
            type: D.type,
            label: D.label,
            placeholder: D.placeholder,
            class: D.class,
            options: [...D.options || []]
          };
          return D.hasOwnProperty("content") && (N.content = D.content, N.content_type = D.content_type), D.hasOwnProperty("required") && (N.required = D.required), N;
        })
      };
      return e.hasRecipient && (P.recipients = c.value), JSON.stringify(P);
    });
    go(i, (P, O) => {
      P !== O && (l.value = []);
    }), go(c, (P, O) => {
      P !== O && (l.value = []);
    });
    const f = () => {
      window.location.href = e.redirectUrl;
    }, v = async (P = null) => {
      var D, N;
      if (u.value) return;
      u.value = !0;
      let O = {
        title: i.value,
        fields: n.value,
        ...a.value && { id: a.value },
        ...P && { status: P }
      };
      e.hasRecipient && (O.recipients = c.value);
      try {
        await vt.post(e.storeUrl, O), window.location.href = e.redirectUrl;
      } catch (j) {
        u.value = !1, l.value = ((N = (D = j.response) == null ? void 0 : D.data) == null ? void 0 : N.errors) || [];
      }
    }, m = () => {
      o.value = !o.value;
    }, g = () => Math.floor(Math.random() * Date.now()), y = (P) => {
      let O = g(), D = {
        id: O,
        name: `${P.type}_${O}`,
        type: P.type,
        label: P.label,
        options: an(P.options)
      };
      return ["hint", "placeholder", "class", "content", "content_type", "allow_add_row"].forEach((j) => {
        P.hasOwnProperty(j) && (D[j] = P[j]);
      }), P.hasOwnProperty("content") && (D.content = P.content, D.content_type = P.content_type), P.hasOwnProperty("required") && (D.required = P.required), P.hasOwnProperty("builder") && (D.builder = P.builder, D.presenter = P.presenter, D.data = P.data), D;
    }, S = (P) => {
      const O = y(P);
      n.value.push(O);
    }, E = () => {
      s.value = !0;
    }, A = () => {
      s.value = !1;
    }, w = (P) => P ? P.charAt(0).toUpperCase() + P.slice(1) : "";
    return (P, O) => {
      var D, N;
      return Z(), ne(Ct, null, [
        ie(yg),
        k("div", Ag, [
          k("a", {
            href: t.redirectUrl,
            class: "cursor-pointer"
          }, " Form ", 8, Cg),
          O[6] || (O[6] = Xt(" / ")),
          k("span", {
            class: "text-sm font-semibold",
            textContent: Ve(Ze(i) ? Ze(i) : o.value ? "Preview" : "Add New Form")
          }, null, 8, Og)
        ]),
        k("div", Pg, [
          k("h4", Rg, Ve(o.value ? "Preview" : Ze(i) ? Ze(i) : "Add New Form"), 1),
          k("a", {
            class: "inline-block rounded-full px-3 py-2 cursor-pointer text-sm text-gray-700 font-semibold border border-gray-300 hover:bg-gray-200",
            onClick: m
          }, [
            o.value ? (Z(), ne("span", Dg, O[8] || (O[8] = [
              k("svg", {
                width: "19",
                height: "19",
                viewBox: "0 0 19 19",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                k("path", {
                  d: "M1.08398 17.9166L5.70838 16.138C6.00416 16.0242 6.15205 15.9673 6.29042 15.8931C6.41332 15.8271 6.53048 15.751 6.64068 15.6654C6.76475 15.5692 6.8768 15.4571 7.10088 15.233L16.5007 5.83326C17.4211 4.91279 17.4211 3.4204 16.5007 2.49993C15.5802 1.57945 14.0878 1.57945 13.1673 2.49992L3.76755 11.8997C3.54346 12.1238 3.43142 12.2358 3.33514 12.3599C3.24963 12.4701 3.17349 12.5873 3.10751 12.7102C3.03324 12.8485 2.97636 12.9964 2.86259 13.2922L1.08398 17.9166ZM1.08398 17.9166L2.79908 13.4574C2.92182 13.1383 2.98318 12.9787 3.08843 12.9057C3.18042 12.8418 3.29424 12.8176 3.40423 12.8386C3.5301 12.8627 3.65097 12.9836 3.89272 13.2253L5.7753 15.1079C6.01704 15.3496 6.13792 15.4705 6.16196 15.5964C6.18296 15.7064 6.15881 15.8202 6.09494 15.9122C6.02186 16.0174 5.86231 16.0788 5.54321 16.2015L1.08398 17.9166Z",
                  stroke: "#344054",
                  "stroke-width": "1.66667",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ], -1),
              Xt(" Edit ")
            ]))) : (Z(), ne("span", Ig, [
              ie(Ze(Sg), { class: "w-5 h-5" }),
              O[7] || (O[7] = Xt(" Preview "))
            ]))
          ])
        ]),
        k("input", {
          type: "hidden",
          name: t.name,
          value: p.value
        }, null, 8, Fg),
        o.value ? (Z(), ne("div", Mg, [
          Ze(i) ? (Z(), ne("p", Lg, Ve(Ze(i)), 1)) : De("", !0),
          k("div", Ug, [
            ie(Dp, {
              "model-value": { fields: Ze(n) },
              preview: !0,
              editable: !0,
              "can-interact": o.value
            }, null, 8, ["model-value", "can-interact"])
          ])
        ])) : (Z(), ne("div", Ng, [
          k("div", jg, [
            k("div", kg, [
              k("div", Vg, [
                k("div", $g, [
                  O[12] || (O[12] = k("h3", null, "Settings", -1)),
                  k("div", null, [
                    O[9] || (O[9] = k("p", { class: "mb-1" }, "Form Title *", -1)),
                    et(k("input", {
                      type: "text",
                      placeholder: "Enter your form name",
                      "onUpdate:modelValue": O[0] || (O[0] = (j) => Qo(i) ? i.value = j : i = j)
                    }, null, 512), [
                      [yt, Ze(i)]
                    ]),
                    (D = l.value) != null && D.title ? (Z(), ne("span", Bg, Ve(l.value.title[0]), 1)) : De("", !0)
                  ]),
                  t.hasRecipient ? (Z(), ne("div", Hg, [
                    O[10] || (O[10] = k("p", { class: "mb-1" }, "Submission Recipients", -1)),
                    et(k("input", {
                      type: "text",
                      placeholder: "Emails separated by comma to have multiple recipients",
                      "onUpdate:modelValue": O[1] || (O[1] = (j) => Qo(c) ? c.value = j : c = j)
                    }, null, 512), [
                      [yt, Ze(c)]
                    ]),
                    O[11] || (O[11] = k("span", { class: "text-gray-600 text-sm mt-0.5 inline-block" }, "Notification emails will be sent to the specified address(es) upon form submission. Use commas to separate multiple addresses.", -1)),
                    (N = l.value) != null && N.recipients ? (Z(), ne("span", zg, Ve(l.value.recipients[0]), 1)) : De("", !0)
                  ])) : De("", !0)
                ]),
                k("div", {
                  class: nt(["fields", { "overflow-y-auto": !o.value }])
                }, [
                  O[13] || (O[13] = k("h3", null, "Form", -1)),
                  k("div", {
                    class: nt(["draggable", { "!border-none !shadow-none": Ze(n).length }])
                  }, [
                    ie(wl, {
                      modelValue: Ze(n),
                      "onUpdate:modelValue": O[2] || (O[2] = (j) => Qo(n) ? n.value = j : n = j),
                      "is-dragging": s.value,
                      actions: t.actions
                    }, null, 8, ["modelValue", "is-dragging", "actions"])
                  ], 2)
                ], 2)
              ]),
              k("div", Gg, [
                Ze(a) ? (Z(), ne("div", Wg, [
                  O[16] || (O[16] = k("p", { class: "mb-5" }, "Status", -1)),
                  k("div", Yg, [
                    k("div", {
                      class: nt(["px-3 py-1 text-sm text-gray-700 border font-medium border-warning-200 bg-warning-50 text-warning-700 rounded-full flex w-fit items-center gap-2", { "!text-success-700 !bg-success-50 !border-success-200": Ze(r).status === "published" }])
                    }, [
                      (Z(), ne("svg", Kg, [
                        k("circle", {
                          cx: "3",
                          cy: "3",
                          r: "3",
                          fill: Ze(r).status === "published" ? "#17B26A" : "#F79009"
                        }, null, 8, Xg)
                      ])),
                      Xt(" " + Ve(w(Ze(r).status)), 1)
                    ], 2),
                    Ze(r).status === "published" ? (Z(), ne("div", Jg, [
                      O[14] || (O[14] = k("label", null, " Published ", -1)),
                      k("label", Qg, Ve(Ze(r).formatted_published_at), 1)
                    ])) : De("", !0),
                    k("div", Zg, [
                      O[15] || (O[15] = k("label", null, " Last Modified ", -1)),
                      k("label", qg, Ve(Ze(r).last_modified), 1)
                    ])
                  ])
                ])) : De("", !0),
                k("div", _g, [
                  O[17] || (O[17] = k("div", { class: "heading" }, [
                    k("h3", null, "Select layouts/components"),
                    k("p", null, "Click and/or drag a field to the left")
                  ], -1)),
                  ie(Ze(Do), {
                    "item-key": "id",
                    modelValue: d.value,
                    "onUpdate:modelValue": O[3] || (O[3] = (j) => d.value = j),
                    clone: y,
                    group: { name: "fields", pull: "clone", put: !1 },
                    onStart: E,
                    onEnd: A,
                    class: "components"
                  }, {
                    item: Tt(({ element: j }) => [
                      (Z(), ne("li", {
                        class: "flex gap-1 flex-row items-center cursor-pointer",
                        key: j.name,
                        onClick: (H) => S(j)
                      }, [
                        Xt(Ve(j.label) + " ", 1),
                        k("div", ty, [
                          j.icon ? (Z(), ne("span", {
                            key: 0,
                            innerHTML: j.icon
                          }, null, 8, ny)) : De("", !0),
                          k("div", ry, Ve(j.tooltip_text), 1)
                        ])
                      ], 8, ey))
                    ]),
                    _: 1
                  }, 8, ["modelValue"]),
                  xn(P.$slots, "default")
                ])
              ])
            ])
          ])
        ])),
        o.value ? De("", !0) : (Z(), ne("div", oy, [
          k("a", {
            onClick: f,
            class: "cursor-pointer text-error-500 hover:text-error-700 inline-block"
          }, "Discard"),
          k("div", ay, [
            k("a", {
              onClick: O[4] || (O[4] = rr((j) => v("draft"), ["prevent"])),
              class: "rounded-full cursor-pointer border border-brand-300 text-brand-700 hover:bg-brand-700 hover:text-white px-3 py-[7px]"
            }, [
              u.value ? (Z(), ne("span", sy, [
                ie(Ze(es), { class: "w-5 h-5 animate-spin text-white" })
              ])) : (Z(), ne("span", iy, " Save as draft "))
            ]),
            k("a", {
              onClick: O[5] || (O[5] = rr((j) => v("published"), ["prevent"])),
              class: "rounded-full cursor-pointer bg-brand-400 hover:bg-brand-700 text-white px-3 py-[7px]"
            }, [
              u.value ? (Z(), ne("span", uy, [
                ie(Ze(es), { class: "w-5 h-5 animate-spin text-white" })
              ])) : (Z(), ne("span", ly, " Publish "))
            ])
          ])
        ]))
      ], 64);
    };
  }
};
export {
  Ry as FormBuilder,
  Dp as VForm
};
