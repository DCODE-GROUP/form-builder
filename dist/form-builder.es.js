import * as ru from "vue";
import { openBlock as _, createElementBlock as re, Fragment as Dt, renderList as bn, withDirectives as et, createElementVNode as j, normalizeClass as rt, vModelDynamic as Da, toDisplayString as $e, createCommentVNode as Fe, resolveDirective as fs, resolveComponent as Zt, createVNode as ie, vModelText as yt, defineComponent as ou, ref as Ze, onMounted as Fr, onUnmounted as au, inject as Fa, watchEffect as _t, watch as To, computed as sn, toRef as iu, shallowRef as su, provide as $o, isVNode as lu, Teleport as uu, Transition as Ma, h as bi, createBlock as qt, renderSlot as xn, withCtx as Tt, resolveDynamicComponent as Hn, createTextVNode as Qt, toRaw as xi, markRaw as nt, mergeProps as La, normalizeStyle as cu, getCurrentInstance as hs, withModifiers as ar, vShow as du, unref as _e, normalizeProps as fu, vModelSelect as ro, reactive as hu, isRef as ea } from "vue";
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
  const n = t.__vccOpts || t;
  for (const [a, i] of e)
    n[a] = i;
  return n;
}, pu = {
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
}, vu = { class: "-options" }, mu = { class: "cursor-pointer" }, gu = ["type", "name", "value", "disabled"], yu = {
  key: 0,
  class: "inline-block text-sm text-gray-600 mt-1.5 brand-200"
};
function bu(t, e, n, a, i, u) {
  var r, s;
  return _(), re("div", vu, [
    (_(!0), re(Dt, null, bn(((r = n.modelValue) == null ? void 0 : r.options) ?? [], (o) => (_(), re("label", mu, [
      et(j("input", {
        type: u.inputType,
        name: u.inputName,
        value: o,
        "onUpdate:modelValue": e[0] || (e[0] = (l) => i.input = l),
        disabled: !t.editable,
        class: rt({ "[&]:checked:bg-brand-600 [&]:hover:bg-brand-600 [&]:checked:hover:bg-brand-600 [&]:focus:bg-brand-600 [&]:focus:ring-brand-600 [&]:focus:checked:bg-brand-600 !rounded-full": t.type === "radio-group" })
      }, null, 10, gu), [
        [Da, i.input]
      ]),
      j("span", null, $e(o), 1)
    ]))), 256)),
    (s = n.modelValue) != null && s.hint ? (_(), re("p", yu, $e(n.modelValue.hint), 1)) : Fe("", !0)
  ]);
}
const Ao = /* @__PURE__ */ bt(pu, [["render", bu]]);
function ps(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: xu } = Object.prototype, { getPrototypeOf: ir } = Object, { iterator: Ur, toStringTag: vs } = Symbol, Co = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype), Mr = (t, e) => {
  let n = t;
  const a = [];
  for (; n != null && n !== Object.prototype; ) {
    if (a.indexOf(n) !== -1)
      return !1;
    if (a.push(n), Co(n, e))
      return !0;
    n = ir(n);
  }
  return !1;
}, Su = (t, e) => t != null && Mr(t, e) ? t[e] : void 0, Ua = /* @__PURE__ */ ((t) => (e) => {
  const n = xu.call(e);
  return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ln = (t) => (t = t.toLowerCase(), (e) => Ua(e) === t), Bo = (t) => (e) => typeof e === t, { isArray: Wn } = Array, sr = Bo("undefined");
function ur(t) {
  return t !== null && !sr(t) && t.constructor !== null && !sr(t.constructor) && $t(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const ms = ln("ArrayBuffer");
function Eu(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && ms(t.buffer), e;
}
const wu = Bo("string"), $t = Bo("function"), gs = Bo("number"), cr = (t) => t !== null && typeof t == "object", Tu = (t) => t === !0 || t === !1, vo = (t) => {
  if (!cr(t))
    return !1;
  const e = ir(t);
  return (e === null || e === Object.prototype || ir(e) === null) && // Treat any genuine (non-Object.prototype-polluted) Symbol.toStringTag or
  // Symbol.iterator as evidence the value is a tagged/iterable type rather
  // than a plain object, while ignoring keys injected onto Object.prototype.
  !Mr(t, vs) && !Mr(t, Ur);
}, Au = (t) => {
  if (!cr(t) || ur(t))
    return !1;
  try {
    return Object.keys(t).length === 0 && Object.getPrototypeOf(t) === Object.prototype;
  } catch {
    return !1;
  }
}, Cu = ln("Date"), Ou = ln("File"), Ru = (t) => !!(t && typeof t.uri < "u"), Pu = (t) => t && typeof t.getParts < "u", Iu = ln("Blob"), Du = ln("FileList"), Fu = (t) => cr(t) && $t(t.pipe);
function Mu() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Si = Mu(), Ei = typeof Si.FormData < "u" ? Si.FormData : void 0, Lu = (t) => {
  if (!t) return !1;
  if (Ei && t instanceof Ei) return !0;
  const e = ir(t);
  if (!e || e === Object.prototype || !$t(t.append)) return !1;
  const n = Ua(t);
  return n === "formdata" || // detect form-data instance
  n === "object" && $t(t.toString) && t.toString() === "[object FormData]";
}, Uu = ln("URLSearchParams"), [Nu, ju, ku, Vu] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(ln), $u = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Nr(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let a, i;
  if (typeof t != "object" && (t = [t]), Wn(t))
    for (a = 0, i = t.length; a < i; a++)
      e.call(null, t[a], a, t);
  else {
    if (ur(t))
      return;
    const u = n ? Object.getOwnPropertyNames(t) : Object.keys(t), r = u.length;
    let s;
    for (a = 0; a < r; a++)
      s = u[a], e.call(null, t[s], s, t);
  }
}
function ys(t, e) {
  if (ur(t))
    return null;
  e = e.toLowerCase();
  const n = Object.keys(t);
  let a = n.length, i;
  for (; a-- > 0; )
    if (i = n[a], e === i.toLowerCase())
      return i;
  return null;
}
const Vn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, bs = (t) => !sr(t) && t !== Vn;
function ba(...t) {
  const { caseless: e, skipUndefined: n } = bs(this) && this || {}, a = {}, i = (u, r) => {
    if (r === "__proto__" || r === "constructor" || r === "prototype")
      return;
    const s = e && typeof r == "string" && ys(a, r) || r, o = Co(a, s) ? a[s] : void 0;
    vo(o) && vo(u) ? a[s] = ba(o, u) : vo(u) ? a[s] = ba({}, u) : Wn(u) ? a[s] = u.slice() : (!n || !sr(u)) && (a[s] = u);
  };
  for (let u = 0, r = t.length; u < r; u++) {
    const s = t[u];
    if (!s || ur(s) || (Nr(s, i), typeof s != "object" || Wn(s)))
      continue;
    const o = Object.getOwnPropertySymbols(s);
    for (let l = 0; l < o.length; l++) {
      const c = o[l];
      qu.call(s, c) && i(s[c], c);
    }
  }
  return a;
}
const Bu = (t, e, n, { allOwnKeys: a } = {}) => (Nr(
  e,
  (i, u) => {
    n && $t(i) ? Object.defineProperty(t, u, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot
      // hijack defineProperty's accessor-vs-data resolution.
      __proto__: null,
      value: ps(i, n),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : Object.defineProperty(t, u, {
      __proto__: null,
      value: i,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  },
  { allOwnKeys: a }
), t), Hu = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), zu = (t, e, n, a) => {
  t.prototype = Object.create(e.prototype, a), Object.defineProperty(t.prototype, "constructor", {
    __proto__: null,
    value: t,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t, "super", {
    __proto__: null,
    value: e.prototype
  }), n && Object.assign(t.prototype, n);
}, Gu = (t, e, n, a) => {
  let i, u, r;
  const s = {};
  if (e = e || {}, t == null) return e;
  do {
    for (i = Object.getOwnPropertyNames(t), u = i.length; u-- > 0; )
      r = i[u], (!a || a(r, t, e)) && !s[r] && (e[r] = t[r], s[r] = !0);
    t = n !== !1 && ir(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}, Wu = (t, e, n) => {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  const a = t.indexOf(e, n);
  return a !== -1 && a === n;
}, Yu = (t) => {
  if (!t) return null;
  if (Wn(t)) return t;
  let e = t.length;
  if (!gs(e)) return null;
  const n = new Array(e);
  for (; e-- > 0; )
    n[e] = t[e];
  return n;
}, Ku = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && ir(Uint8Array)), Xu = (t, e) => {
  const a = (t && t[Ur]).call(t);
  let i;
  for (; (i = a.next()) && !i.done; ) {
    const u = i.value;
    e.call(t, u[0], u[1]);
  }
}, Ju = (t, e) => {
  let n;
  const a = [];
  for (; (n = t.exec(e)) !== null; )
    a.push(n);
  return a;
}, Qu = ln("HTMLFormElement"), Zu = (t) => t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, a, i) {
  return a.toUpperCase() + i;
}), { propertyIsEnumerable: qu } = Object.prototype, _u = ln("RegExp"), xs = (t, e) => {
  const n = Object.getOwnPropertyDescriptors(t), a = {};
  Nr(n, (i, u) => {
    let r;
    (r = e(i, u, t)) !== !1 && (a[u] = r || i);
  }), Object.defineProperties(t, a);
}, ec = (t) => {
  xs(t, (e, n) => {
    if ($t(t) && ["arguments", "caller", "callee"].includes(n))
      return !1;
    const a = t[n];
    if ($t(a)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, tc = (t, e) => {
  const n = {}, a = (i) => {
    i.forEach((u) => {
      n[u] = !0;
    });
  };
  return Wn(t) ? a(t) : a(String(t).split(e)), n;
}, nc = () => {
}, rc = (t, e) => t != null && Number.isFinite(t = +t) ? t : e;
function oc(t) {
  return !!(t && $t(t.append) && t[vs] === "FormData" && t[Ur]);
}
const ac = (t) => {
  const e = /* @__PURE__ */ new WeakSet(), n = (a) => {
    if (cr(a)) {
      if (e.has(a))
        return;
      if (ur(a))
        return a;
      if (!("toJSON" in a)) {
        e.add(a);
        const i = Wn(a) ? [] : {};
        return Nr(a, (u, r) => {
          const s = n(u);
          !sr(s) && (i[r] = s);
        }), e.delete(a), i;
      }
    }
    return a;
  };
  return n(t);
}, ic = ln("AsyncFunction"), sc = (t) => t && (cr(t) || $t(t)) && $t(t.then) && $t(t.catch), Ss = ((t, e) => t ? setImmediate : e ? ((n, a) => (Vn.addEventListener(
  "message",
  ({ source: i, data: u }) => {
    i === Vn && u === n && a.length && a.shift()();
  },
  !1
), (i) => {
  a.push(i), Vn.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", $t(Vn.postMessage)), lc = typeof queueMicrotask < "u" ? queueMicrotask.bind(Vn) : typeof process < "u" && process.nextTick || Ss, Es = (t) => t != null && $t(t[Ur]), uc = (t) => t != null && Mr(t, Ur) && Es(t), W = {
  isArray: Wn,
  isArrayBuffer: ms,
  isBuffer: ur,
  isFormData: Lu,
  isArrayBufferView: Eu,
  isString: wu,
  isNumber: gs,
  isBoolean: Tu,
  isObject: cr,
  isPlainObject: vo,
  isEmptyObject: Au,
  isReadableStream: Nu,
  isRequest: ju,
  isResponse: ku,
  isHeaders: Vu,
  isUndefined: sr,
  isDate: Cu,
  isFile: Ou,
  isReactNativeBlob: Ru,
  isReactNative: Pu,
  isBlob: Iu,
  isRegExp: _u,
  isFunction: $t,
  isStream: Fu,
  isURLSearchParams: Uu,
  isTypedArray: Ku,
  isFileList: Du,
  forEach: Nr,
  merge: ba,
  extend: Bu,
  trim: $u,
  stripBOM: Hu,
  inherits: zu,
  toFlatObject: Gu,
  kindOf: Ua,
  kindOfTest: ln,
  endsWith: Wu,
  toArray: Yu,
  forEachEntry: Xu,
  matchAll: Ju,
  isHTMLForm: Qu,
  hasOwnProperty: Co,
  hasOwnProp: Co,
  // an alias to avoid ESLint no-prototype-builtins detection
  hasOwnInPrototypeChain: Mr,
  getSafeProp: Su,
  reduceDescriptors: xs,
  freezeMethods: ec,
  toObjectSet: tc,
  toCamelCase: Zu,
  noop: nc,
  toFiniteNumber: rc,
  findKey: ys,
  global: Vn,
  isContextDefined: bs,
  isSpecCompliantForm: oc,
  toJSONObject: ac,
  isAsyncFn: ic,
  isThenable: sc,
  setImmediate: Ss,
  asap: lc,
  isIterable: Es,
  isSafeIterable: uc
}, cc = W.toObjectSet([
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
  let n, a, i;
  return t && t.split(`
`).forEach(function(r) {
    i = r.indexOf(":"), n = r.substring(0, i).trim().toLowerCase(), a = r.substring(i + 1).trim(), !(!n || e[n] && cc[n]) && (n === "set-cookie" ? e[n] ? e[n].push(a) : e[n] = [a] : e[n] = e[n] ? e[n] + ", " + a : a);
  }), e;
};
function fc(t) {
  let e = 0, n = t.length;
  for (; e < n; ) {
    const a = t.charCodeAt(e);
    if (a !== 9 && a !== 32)
      break;
    e += 1;
  }
  for (; n > e; ) {
    const a = t.charCodeAt(n - 1);
    if (a !== 9 && a !== 32)
      break;
    n -= 1;
  }
  return e === 0 && n === t.length ? t : t.slice(e, n);
}
const hc = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), pc = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function Na(t, e) {
  return W.isArray(t) ? t.map((n) => Na(n, e)) : fc(String(t).replace(e, ""));
}
const vc = (t) => Na(t, hc), mc = (t) => Na(t, pc);
function ws(t) {
  const e = /* @__PURE__ */ Object.create(null);
  return W.forEach(t.toJSON(), (n, a) => {
    e[a] = mc(n);
  }), e;
}
const wi = Symbol("internals");
function mr(t) {
  return t && String(t).trim().toLowerCase();
}
function mo(t) {
  return t === !1 || t == null ? t : W.isArray(t) ? t.map(mo) : vc(String(t));
}
function gc(t) {
  const e = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let a;
  for (; a = n.exec(t); )
    e[a[1]] = a[2];
  return e;
}
const yc = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function ta(t, e, n, a, i) {
  if (W.isFunction(a))
    return a.call(this, e, n);
  if (i && (e = n), !!W.isString(e)) {
    if (W.isString(a))
      return e.indexOf(a) !== -1;
    if (W.isRegExp(a))
      return a.test(e);
  }
}
function bc(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, a) => n.toUpperCase() + a);
}
function xc(t, e) {
  const n = W.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((a) => {
    Object.defineProperty(t, a + n, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: function(i, u, r) {
        return this[a].call(this, e, i, u, r);
      },
      configurable: !0
    });
  });
}
let Pt = class {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, a) {
    const i = this;
    function u(s, o, l) {
      const c = mr(o);
      if (!c)
        return;
      const d = W.findKey(i, c);
      (!d || i[d] === void 0 || l === !0 || l === void 0 && i[d] !== !1) && (i[d || o] = mo(s));
    }
    const r = (s, o) => W.forEach(s, (l, c) => u(l, c, o));
    if (W.isPlainObject(e) || e instanceof this.constructor)
      r(e, n);
    else if (W.isString(e) && (e = e.trim()) && !yc(e))
      r(dc(e), n);
    else if (W.isObject(e) && W.isSafeIterable(e)) {
      let s = /* @__PURE__ */ Object.create(null), o, l;
      for (const c of e) {
        if (!W.isArray(c))
          throw new TypeError("Object iterator must return a key-value pair");
        l = c[0], W.hasOwnProp(s, l) ? (o = s[l], s[l] = W.isArray(o) ? [...o, c[1]] : [o, c[1]]) : s[l] = c[1];
      }
      r(s, n);
    } else
      e != null && u(n, e, a);
    return this;
  }
  get(e, n) {
    if (e = mr(e), e) {
      const a = W.findKey(this, e);
      if (a) {
        const i = this[a];
        if (!n)
          return i;
        if (n === !0)
          return gc(i);
        if (W.isFunction(n))
          return n.call(this, i, a);
        if (W.isRegExp(n))
          return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (e = mr(e), e) {
      const a = W.findKey(this, e);
      return !!(a && this[a] !== void 0 && (!n || ta(this, this[a], a, n)));
    }
    return !1;
  }
  delete(e, n) {
    const a = this;
    let i = !1;
    function u(r) {
      if (r = mr(r), r) {
        const s = W.findKey(a, r);
        s && (!n || ta(a, a[s], s, n)) && (delete a[s], i = !0);
      }
    }
    return W.isArray(e) ? e.forEach(u) : u(e), i;
  }
  clear(e) {
    const n = Object.keys(this);
    let a = n.length, i = !1;
    for (; a--; ) {
      const u = n[a];
      (!e || ta(this, this[u], u, e, !0)) && (delete this[u], i = !0);
    }
    return i;
  }
  normalize(e) {
    const n = this, a = {};
    return W.forEach(this, (i, u) => {
      const r = W.findKey(a, u);
      if (r) {
        n[r] = mo(i), delete n[u];
        return;
      }
      const s = e ? bc(u) : String(u).trim();
      s !== u && delete n[u], n[s] = mo(i), a[s] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const n = /* @__PURE__ */ Object.create(null);
    return W.forEach(this, (a, i) => {
      a != null && a !== !1 && (n[i] = e && W.isArray(a) ? a.join(", ") : a);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, n]) => e + ": " + n).join(`
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
  static concat(e, ...n) {
    const a = new this(e);
    return n.forEach((i) => a.set(i)), a;
  }
  static accessor(e) {
    const a = (this[wi] = this[wi] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function u(r) {
      const s = mr(r);
      a[s] || (xc(i, r), a[s] = !0);
    }
    return W.isArray(e) ? e.forEach(u) : u(e), this;
  }
};
Pt.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
W.reduceDescriptors(Pt.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(a) {
      this[n] = a;
    }
  };
});
W.freezeMethods(Pt);
const Sc = "[REDACTED ****]";
function Ec(t) {
  if (W.hasOwnProp(t, "toJSON"))
    return !0;
  let e = Object.getPrototypeOf(t);
  for (; e && e !== Object.prototype; ) {
    if (W.hasOwnProp(e, "toJSON"))
      return !0;
    e = Object.getPrototypeOf(e);
  }
  return !1;
}
function wc(t, e) {
  const n = new Set(e.map((u) => String(u).toLowerCase())), a = [], i = (u) => {
    if (u === null || typeof u != "object" || W.isBuffer(u)) return u;
    if (a.indexOf(u) !== -1) return;
    u instanceof Pt && (u = u.toJSON()), a.push(u);
    let r;
    if (W.isArray(u))
      r = [], u.forEach((s, o) => {
        const l = i(s);
        W.isUndefined(l) || (r[o] = l);
      });
    else {
      if (!W.isPlainObject(u) && Ec(u))
        return a.pop(), u;
      r = /* @__PURE__ */ Object.create(null);
      for (const [s, o] of Object.entries(u)) {
        const l = n.has(s.toLowerCase()) ? Sc : i(o);
        W.isUndefined(l) || (r[s] = l);
      }
    }
    return a.pop(), r;
  };
  return i(t);
}
let Oe = class Ts extends Error {
  static from(e, n, a, i, u, r) {
    const s = new Ts(e.message, n || e.code, a, i, u);
    return s.cause = e, s.name = e.name, e.status != null && s.status == null && (s.status = e.status), r && Object.assign(s, r), s;
  }
  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [config] The config.
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   *
   * @returns {Error} The created error.
   */
  constructor(e, n, a, i, u) {
    super(e), Object.defineProperty(this, "message", {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: e,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }), this.name = "AxiosError", this.isAxiosError = !0, n && (this.code = n), a && (this.config = a), i && (this.request = i), u && (this.response = u, this.status = u.status);
  }
  toJSON() {
    const e = this.config, n = e && W.hasOwnProp(e, "redact") ? e.redact : void 0, a = W.isArray(n) && n.length > 0 ? wc(e, n) : W.toJSONObject(e);
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
      config: a,
      code: this.code,
      status: this.status
    };
  }
};
Oe.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
Oe.ERR_BAD_OPTION = "ERR_BAD_OPTION";
Oe.ECONNABORTED = "ECONNABORTED";
Oe.ETIMEDOUT = "ETIMEDOUT";
Oe.ECONNREFUSED = "ECONNREFUSED";
Oe.ERR_NETWORK = "ERR_NETWORK";
Oe.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
Oe.ERR_DEPRECATED = "ERR_DEPRECATED";
Oe.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
Oe.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
Oe.ERR_CANCELED = "ERR_CANCELED";
Oe.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
Oe.ERR_INVALID_URL = "ERR_INVALID_URL";
Oe.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
const Tc = null, As = 100;
function xa(t) {
  return W.isPlainObject(t) || W.isArray(t);
}
function Cs(t) {
  return W.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function na(t, e, n) {
  return t ? t.concat(e).map(function(i, u) {
    return i = Cs(i), !n && u ? "[" + i + "]" : i;
  }).join(n ? "." : "") : e;
}
function Ac(t) {
  return W.isArray(t) && !t.some(xa);
}
const Cc = W.toFlatObject(W, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Ho(t, e, n) {
  if (!W.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), n = W.toFlatObject(
    n,
    {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    },
    !1,
    function(y, S) {
      return !W.isUndefined(S[y]);
    }
  );
  const a = n.metaTokens, i = n.visitor || f, u = n.dots, r = n.indexes, s = n.Blob || typeof Blob < "u" && Blob, o = n.maxDepth === void 0 ? As : n.maxDepth, l = s && W.isSpecCompliantForm(e), c = [];
  if (!W.isFunction(i))
    throw new TypeError("visitor must be a function");
  function d(g) {
    if (g === null) return "";
    if (W.isDate(g))
      return g.toISOString();
    if (W.isBoolean(g))
      return g.toString();
    if (!l && W.isBlob(g))
      throw new Oe("Blob is not supported. Use a Buffer instead.");
    return W.isArrayBuffer(g) || W.isTypedArray(g) ? l && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function p(g) {
    if (g > o)
      throw new Oe(
        "Object is too deeply nested (" + g + " levels). Max depth: " + o,
        Oe.ERR_FORM_DATA_DEPTH_EXCEEDED
      );
  }
  function h(g, y) {
    if (o === 1 / 0)
      return JSON.stringify(g);
    const S = [];
    return JSON.stringify(g, function(A, w) {
      if (!W.isObject(w))
        return w;
      for (; S.length && S[S.length - 1] !== this; )
        S.pop();
      return S.push(w), p(y + S.length - 1), w;
    });
  }
  function f(g, y, S) {
    let E = g;
    if (W.isReactNative(e) && W.isReactNativeBlob(g))
      return e.append(na(S, y, u), d(g)), !1;
    if (g && !S && typeof g == "object") {
      if (W.endsWith(y, "{}"))
        y = a ? y : y.slice(0, -2), g = h(g, 1);
      else if (W.isArray(g) && Ac(g) || (W.isFileList(g) || W.endsWith(y, "[]")) && (E = W.toArray(g)))
        return y = Cs(y), E.forEach(function(w, V) {
          !(W.isUndefined(w) || w === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            r === !0 ? na([y], V, u) : r === null ? y : y + "[]",
            d(w)
          );
        }), !1;
    }
    return xa(g) ? !0 : (e.append(na(S, y, u), d(g)), !1);
  }
  const m = Object.assign(Cc, {
    defaultVisitor: f,
    convertValue: d,
    isVisitable: xa
  });
  function v(g, y, S = 0) {
    if (!W.isUndefined(g)) {
      if (p(S), c.indexOf(g) !== -1)
        throw new Error("Circular reference detected in " + y.join("."));
      c.push(g), W.forEach(g, function(A, w) {
        (!(W.isUndefined(A) || A === null) && i.call(e, A, W.isString(w) ? w.trim() : w, y, m)) === !0 && v(A, y ? y.concat(w) : [w], S + 1);
      }), c.pop();
    }
  }
  if (!W.isObject(t))
    throw new TypeError("data must be an object");
  return v(t), e;
}
function Ti(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20/g, function(a) {
    return e[a];
  });
}
function ja(t, e) {
  this._pairs = [], t && Ho(t, this, e);
}
const Os = ja.prototype;
Os.append = function(e, n) {
  this._pairs.push([e, n]);
};
Os.toString = function(e) {
  const n = e ? function(a) {
    return e.call(this, a, Ti);
  } : Ti;
  return this._pairs.map(function(i) {
    return n(i[0]) + "=" + n(i[1]);
  }, "").join("&");
};
function Oc(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Rs(t, e, n) {
  if (!e)
    return t;
  const a = W.isFunction(n) ? {
    serialize: n
  } : n, i = W.getSafeProp(a, "encode") || Oc, u = W.getSafeProp(a, "serialize");
  let r;
  if (u ? r = u(e, a) : r = W.isURLSearchParams(e) ? e.toString() : new ja(e, a).toString(i), r) {
    const s = t.indexOf("#");
    s !== -1 && (t = t.slice(0, s)), t += (t.indexOf("?") === -1 ? "?" : "&") + r;
  }
  return t;
}
class Ai {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   * @param {Object} options The options for the interceptor, synchronous and runWhen
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(e, n, a) {
    return this.handlers.push({
      fulfilled: e,
      rejected: n,
      synchronous: a ? a.synchronous : !1,
      runWhen: a ? a.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
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
    W.forEach(this.handlers, function(a) {
      a !== null && e(a);
    });
  }
}
const ka = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0,
  advertiseZstdAcceptEncoding: !1,
  validateStatusUndefinedResolves: !0
}, Rc = typeof URLSearchParams < "u" ? URLSearchParams : ja, Pc = typeof FormData < "u" ? FormData : null, Ic = typeof Blob < "u" ? Blob : null, Dc = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Rc,
    FormData: Pc,
    Blob: Ic
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Va = typeof window < "u" && typeof document < "u", Sa = typeof navigator == "object" && navigator || void 0, Fc = Va && (!Sa || ["ReactNative", "NativeScript", "NS"].indexOf(Sa.product) < 0), Mc = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Lc = Va && window.location.href || "http://localhost", Uc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Va,
  hasStandardBrowserEnv: Fc,
  hasStandardBrowserWebWorkerEnv: Mc,
  navigator: Sa,
  origin: Lc
}, Symbol.toStringTag, { value: "Module" })), At = {
  ...Uc,
  ...Dc
};
function Nc(t, e) {
  return Ho(t, new At.classes.URLSearchParams(), {
    visitor: function(n, a, i, u) {
      return At.isNode && W.isBuffer(n) ? (this.append(a, n.toString("base64")), !1) : u.defaultVisitor.apply(this, arguments);
    },
    ...e
  });
}
const Ci = As;
function Ps(t) {
  if (t > Ci)
    throw new Oe(
      "FormData field is too deeply nested (" + t + " levels). Max depth: " + Ci,
      Oe.ERR_FORM_DATA_DEPTH_EXCEEDED
    );
}
function jc(t) {
  const e = [], n = /\w+|\[(\w*)]/g;
  let a;
  for (; (a = n.exec(t)) !== null; )
    Ps(e.length), e.push(a[0] === "[]" ? "" : a[1] || a[0]);
  return e;
}
function kc(t) {
  const e = {}, n = Object.keys(t);
  let a;
  const i = n.length;
  let u;
  for (a = 0; a < i; a++)
    u = n[a], e[u] = t[u];
  return e;
}
function Is(t) {
  function e(n, a, i, u) {
    Ps(u);
    let r = n[u++];
    if (r === "__proto__") return !0;
    const s = Number.isFinite(+r), o = u >= n.length;
    return r = !r && W.isArray(i) ? i.length : r, o ? (W.hasOwnProp(i, r) ? i[r] = W.isArray(i[r]) ? i[r].concat(a) : [i[r], a] : i[r] = a, !s) : ((!W.hasOwnProp(i, r) || !W.isObject(i[r])) && (i[r] = []), e(n, a, i[r], u) && W.isArray(i[r]) && (i[r] = kc(i[r])), !s);
  }
  if (W.isFormData(t) && W.isFunction(t.entries)) {
    const n = {};
    return W.forEachEntry(t, (a, i) => {
      e(jc(a), i, n, 0);
    }), n;
  }
  return null;
}
const Zn = (t, e) => t != null && W.hasOwnProp(t, e) ? t[e] : void 0;
function Vc(t, e, n) {
  if (W.isString(t))
    try {
      return (e || JSON.parse)(t), W.trim(t);
    } catch (a) {
      if (a.name !== "SyntaxError")
        throw a;
    }
  return (n || JSON.stringify)(t);
}
const jr = {
  transitional: ka,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(e, n) {
      const a = n.getContentType() || "", i = a.indexOf("application/json") > -1, u = W.isObject(e);
      if (u && W.isHTMLForm(e) && (e = new FormData(e)), W.isFormData(e))
        return i ? JSON.stringify(Is(e)) : e;
      if (W.isArrayBuffer(e) || W.isBuffer(e) || W.isStream(e) || W.isFile(e) || W.isBlob(e) || W.isReadableStream(e))
        return e;
      if (W.isArrayBufferView(e))
        return e.buffer;
      if (W.isURLSearchParams(e))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
      let s;
      if (u) {
        const o = Zn(this, "formSerializer");
        if (a.indexOf("application/x-www-form-urlencoded") > -1)
          return Nc(e, o).toString();
        if ((s = W.isFileList(e)) || a.indexOf("multipart/form-data") > -1) {
          const l = Zn(this, "env"), c = l && l.FormData;
          return Ho(
            s ? { "files[]": e } : e,
            c && new c(),
            o
          );
        }
      }
      return u || i ? (n.setContentType("application/json", !1), Vc(e)) : e;
    }
  ],
  transformResponse: [
    function(e) {
      const n = Zn(this, "transitional") || jr.transitional, a = n && n.forcedJSONParsing, i = Zn(this, "responseType"), u = i === "json";
      if (W.isResponse(e) || W.isReadableStream(e))
        return e;
      if (e && W.isString(e) && (a && !i || u)) {
        const s = !(n && n.silentJSONParsing) && u;
        try {
          return JSON.parse(e, Zn(this, "parseReviver"));
        } catch (o) {
          if (s)
            throw o.name === "SyntaxError" ? Oe.from(o, Oe.ERR_BAD_RESPONSE, this, null, Zn(this, "response")) : o;
        }
      }
      return e;
    }
  ],
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
    FormData: At.classes.FormData,
    Blob: At.classes.Blob
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
W.forEach(["delete", "get", "head", "post", "put", "patch", "query"], (t) => {
  jr.headers[t] = {};
});
function ra(t, e) {
  const n = this || jr, a = e || n, i = Pt.from(a.headers);
  let u = a.data;
  return W.forEach(t, function(s) {
    u = s.call(n, u, i.normalize(), e ? e.status : void 0);
  }), i.normalize(), u;
}
function Ds(t) {
  return !!(t && t.__CANCEL__);
}
let kr = class extends Oe {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(e, n, a) {
    super(e ?? "canceled", Oe.ERR_CANCELED, n, a), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function Fs(t, e, n) {
  const a = n.config.validateStatus;
  !n.status || !a || a(n.status) ? t(n) : e(new Oe(
    "Request failed with status code " + n.status,
    n.status >= 400 && n.status < 500 ? Oe.ERR_BAD_REQUEST : Oe.ERR_BAD_RESPONSE,
    n.config,
    n.request,
    n
  ));
}
function $c(t) {
  const e = /^([-+\w]{1,25}):(?:\/\/)?/.exec(t);
  return e && e[1] || "";
}
function Bc(t, e) {
  t = t || 10;
  const n = new Array(t), a = new Array(t);
  let i = 0, u = 0, r;
  return e = e !== void 0 ? e : 1e3, function(o) {
    const l = Date.now(), c = a[u];
    r || (r = l), n[i] = o, a[i] = l;
    let d = u, p = 0;
    for (; d !== i; )
      p += n[d++], d = d % t;
    if (i = (i + 1) % t, i === u && (u = (u + 1) % t), l - r < e)
      return;
    const h = c && l - c;
    return h ? Math.round(p * 1e3 / h) : void 0;
  };
}
function Hc(t, e) {
  let n = 0, a = 1e3 / e, i, u;
  const r = (l, c = Date.now()) => {
    n = c, i = null, u && (clearTimeout(u), u = null), t(...l);
  };
  return [(...l) => {
    const c = Date.now(), d = c - n;
    d >= a ? r(l, c) : (i = l, u || (u = setTimeout(() => {
      u = null, r(i);
    }, a - d)));
  }, () => i && r(i)];
}
const Oo = (t, e, n = 3) => {
  let a = 0;
  const i = Bc(50, 250);
  return Hc((u) => {
    if (!u || typeof u.loaded != "number")
      return;
    const r = u.loaded, s = u.lengthComputable ? u.total : void 0, o = s != null ? Math.min(r, s) : r, l = Math.max(0, o - a), c = i(l);
    a = Math.max(a, o);
    const d = {
      loaded: o,
      total: s,
      progress: s ? o / s : void 0,
      bytes: l,
      rate: c || void 0,
      estimated: c && s ? (s - o) / c : void 0,
      event: u,
      lengthComputable: s != null,
      [e ? "download" : "upload"]: !0
    };
    t(d);
  }, n);
}, Oi = (t, e) => {
  const n = t != null;
  return [
    (a) => e[0]({
      lengthComputable: n,
      total: t,
      loaded: a
    }),
    e[1]
  ];
}, Ri = (t) => (...e) => W.asap(() => t(...e)), zc = At.hasStandardBrowserEnv ? /* @__PURE__ */ ((t, e) => (n) => (n = new URL(n, At.origin), t.protocol === n.protocol && t.host === n.host && (e || t.port === n.port)))(
  new URL(At.origin),
  At.navigator && /(msie|trident)/i.test(At.navigator.userAgent)
) : () => !0, Gc = At.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, n, a, i, u, r) {
      if (typeof document > "u") return;
      const s = [`${t}=${encodeURIComponent(e)}`];
      W.isNumber(n) && s.push(`expires=${new Date(n).toUTCString()}`), W.isString(a) && s.push(`path=${a}`), W.isString(i) && s.push(`domain=${i}`), u === !0 && s.push("secure"), W.isString(r) && s.push(`SameSite=${r}`), document.cookie = s.join("; ");
    },
    read(t) {
      if (typeof document > "u") return null;
      const e = document.cookie.split(";");
      for (let n = 0; n < e.length; n++) {
        const a = e[n].replace(/^\s+/, ""), i = a.indexOf("=");
        if (i !== -1 && a.slice(0, i) === t)
          return decodeURIComponent(a.slice(i + 1));
      }
      return null;
    },
    remove(t) {
      this.write(t, "", Date.now() - 864e5, "/");
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
function Wc(t) {
  return typeof t != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Yc(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
const Kc = /^https?:(?!\/\/)/i, Xc = /[\t\n\r]/g;
function Jc(t) {
  let e = 0;
  for (; e < t.length && t.charCodeAt(e) <= 32; )
    e++;
  return t.slice(e);
}
function Qc(t) {
  return Jc(t).replace(Xc, "");
}
function Pi(t, e) {
  if (typeof t == "string" && Kc.test(Qc(t)))
    throw new Oe(
      'Invalid URL: missing "//" after protocol',
      Oe.ERR_INVALID_URL,
      e
    );
}
function Ms(t, e, n, a) {
  Pi(e, a);
  let i = !Wc(e);
  return t && (i || n === !1) ? (Pi(t, a), Yc(t, e)) : e;
}
const Ii = (t) => t instanceof Pt ? { ...t } : t;
function Yn(t, e) {
  e = e || {};
  const n = /* @__PURE__ */ Object.create(null);
  Object.defineProperty(n, "hasOwnProperty", {
    // Null-proto descriptor so a polluted Object.prototype.get cannot turn
    // this data descriptor into an accessor descriptor on the way in.
    __proto__: null,
    value: Object.prototype.hasOwnProperty,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
  function a(c, d, p, h) {
    return W.isPlainObject(c) && W.isPlainObject(d) ? W.merge.call({ caseless: h }, c, d) : W.isPlainObject(d) ? W.merge({}, d) : W.isArray(d) ? d.slice() : d;
  }
  function i(c, d, p, h) {
    if (W.isUndefined(d)) {
      if (!W.isUndefined(c))
        return a(void 0, c, p, h);
    } else return a(c, d, p, h);
  }
  function u(c, d) {
    if (!W.isUndefined(d))
      return a(void 0, d);
  }
  function r(c, d) {
    if (W.isUndefined(d)) {
      if (!W.isUndefined(c))
        return a(void 0, c);
    } else return a(void 0, d);
  }
  function s(c) {
    const d = W.hasOwnProp(e, "transitional") ? e.transitional : void 0;
    if (!W.isUndefined(d))
      if (W.isPlainObject(d)) {
        if (W.hasOwnProp(d, c))
          return d[c];
      } else
        return;
    const p = W.hasOwnProp(t, "transitional") ? t.transitional : void 0;
    if (W.isPlainObject(p) && W.hasOwnProp(p, c))
      return p[c];
  }
  function o(c, d, p) {
    if (W.hasOwnProp(e, p))
      return a(c, d);
    if (W.hasOwnProp(t, p))
      return a(void 0, c);
  }
  const l = {
    url: u,
    method: u,
    data: u,
    baseURL: r,
    transformRequest: r,
    transformResponse: r,
    paramsSerializer: r,
    timeout: r,
    timeoutMessage: r,
    withCredentials: r,
    withXSRFToken: r,
    adapter: r,
    responseType: r,
    xsrfCookieName: r,
    xsrfHeaderName: r,
    onUploadProgress: r,
    onDownloadProgress: r,
    decompress: r,
    maxContentLength: r,
    maxBodyLength: r,
    beforeRedirect: r,
    transport: r,
    httpAgent: r,
    httpsAgent: r,
    cancelToken: r,
    socketPath: r,
    allowedSocketPaths: r,
    responseEncoding: r,
    validateStatus: o,
    headers: (c, d, p) => i(Ii(c), Ii(d), p, !0)
  };
  return W.forEach(Object.keys({ ...t, ...e }), function(d) {
    if (d === "__proto__" || d === "constructor" || d === "prototype") return;
    const p = W.hasOwnProp(l, d) ? l[d] : i, h = W.hasOwnProp(t, d) ? t[d] : void 0, f = W.hasOwnProp(e, d) ? e[d] : void 0, m = p(h, f, d);
    W.isUndefined(m) && p !== o || (n[d] = m);
  }), W.hasOwnProp(e, "validateStatus") && W.isUndefined(e.validateStatus) && s("validateStatusUndefinedResolves") === !1 && (W.hasOwnProp(t, "validateStatus") ? n.validateStatus = a(void 0, t.validateStatus) : delete n.validateStatus), n;
}
const Zc = ["content-type", "content-length"];
function qc(t, e, n) {
  if (n !== "content-only") {
    t.set(e);
    return;
  }
  Object.entries(e).forEach(([a, i]) => {
    Zc.includes(a.toLowerCase()) && t.set(a, i);
  });
}
const _c = (t) => encodeURIComponent(t).replace(
  /%([0-9A-F]{2})/gi,
  (e, n) => String.fromCharCode(parseInt(n, 16))
);
function Ls(t) {
  const e = Yn({}, t), n = (p) => W.hasOwnProp(e, p) ? e[p] : void 0, a = n("data");
  let i = n("withXSRFToken");
  const u = n("xsrfHeaderName"), r = n("xsrfCookieName");
  let s = n("headers");
  const o = n("auth"), l = n("baseURL"), c = n("allowAbsoluteUrls"), d = n("url");
  if (e.headers = s = Pt.from(s), e.url = Rs(
    Ms(l, d, c, e),
    n("params"),
    n("paramsSerializer")
  ), o) {
    const p = W.getSafeProp(o, "username") || "", h = W.getSafeProp(o, "password") || "";
    s.set(
      "Authorization",
      "Basic " + btoa(p + ":" + (h ? _c(h) : ""))
    );
  }
  if (W.isFormData(a) && (At.hasStandardBrowserEnv || At.hasStandardBrowserWebWorkerEnv || W.isReactNative(a) ? s.setContentType(void 0) : W.isFunction(a.getHeaders) && qc(s, a.getHeaders(), n("formDataHeaderPolicy"))), At.hasStandardBrowserEnv && (W.isFunction(i) && (i = i(e)), i === !0 || i == null && zc(e.url))) {
    const h = u && r && Gc.read(r);
    h && s.set(u, h);
  }
  return e;
}
const ed = typeof XMLHttpRequest < "u", td = ed && function(t) {
  return new Promise(function(n, a) {
    const i = Ls(t);
    let u = i.data;
    const r = Pt.from(i.headers).normalize();
    let { responseType: s, onUploadProgress: o, onDownloadProgress: l } = i, c, d, p, h, f;
    function m() {
      h && h(), f && f(), i.cancelToken && i.cancelToken.unsubscribe(c), i.signal && i.signal.removeEventListener("abort", c);
    }
    let v = new XMLHttpRequest();
    v.open(i.method.toUpperCase(), i.url, !0), v.timeout = i.timeout;
    function g() {
      if (!v)
        return;
      const S = Pt.from(
        "getAllResponseHeaders" in v && v.getAllResponseHeaders()
      ), A = {
        data: !s || s === "text" || s === "json" ? v.responseText : v.response,
        status: v.status,
        statusText: v.statusText,
        headers: S,
        config: t,
        request: v
      };
      Fs(
        function(V) {
          n(V), m();
        },
        function(V) {
          a(V), m();
        },
        A
      ), v = null;
    }
    "onloadend" in v ? v.onloadend = g : v.onreadystatechange = function() {
      !v || v.readyState !== 4 || v.status === 0 && !(v.responseURL && v.responseURL.startsWith("file:")) || setTimeout(g);
    }, v.onabort = function() {
      v && (a(new Oe("Request aborted", Oe.ECONNABORTED, t, v)), m(), v = null);
    }, v.onerror = function(E) {
      const A = E && E.message ? E.message : "Network Error", w = new Oe(A, Oe.ERR_NETWORK, t, v);
      w.event = E || null, a(w), m(), v = null;
    }, v.ontimeout = function() {
      let E = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
      const A = i.transitional || ka;
      i.timeoutErrorMessage && (E = i.timeoutErrorMessage), a(
        new Oe(
          E,
          A.clarifyTimeoutError ? Oe.ETIMEDOUT : Oe.ECONNABORTED,
          t,
          v
        )
      ), m(), v = null;
    }, u === void 0 && r.setContentType(null), "setRequestHeader" in v && W.forEach(ws(r), function(E, A) {
      v.setRequestHeader(A, E);
    }), W.isUndefined(i.withCredentials) || (v.withCredentials = !!i.withCredentials), s && s !== "json" && (v.responseType = i.responseType), l && ([p, f] = Oo(l, !0), v.addEventListener("progress", p)), o && v.upload && ([d, h] = Oo(o), v.upload.addEventListener("progress", d), v.upload.addEventListener("loadend", h)), (i.cancelToken || i.signal) && (c = (S) => {
      v && (a(!S || S.type ? new kr(null, t, v) : S), v.abort(), m(), v = null);
    }, i.cancelToken && i.cancelToken.subscribe(c), i.signal && (i.signal.aborted ? c() : i.signal.addEventListener("abort", c)));
    const y = $c(i.url);
    if (y && !At.protocols.includes(y)) {
      a(
        new Oe(
          "Unsupported protocol " + y + ":",
          Oe.ERR_BAD_REQUEST,
          t
        )
      );
      return;
    }
    v.send(u || null);
  });
}, nd = (t, e) => {
  if (t = t ? t.filter(Boolean) : [], !e && !t.length)
    return;
  const n = new AbortController();
  let a = !1;
  const i = function(o) {
    if (!a) {
      a = !0, r();
      const l = o instanceof Error ? o : this.reason;
      n.abort(
        l instanceof Oe ? l : new kr(l instanceof Error ? l.message : l)
      );
    }
  };
  let u = e && setTimeout(() => {
    u = null, i(new Oe(`timeout of ${e}ms exceeded`, Oe.ETIMEDOUT));
  }, e);
  const r = () => {
    t && (u && clearTimeout(u), u = null, t.forEach((o) => {
      o.unsubscribe ? o.unsubscribe(i) : o.removeEventListener("abort", i);
    }), t = null);
  };
  t.forEach((o) => o.addEventListener("abort", i));
  const { signal: s } = n;
  return s.unsubscribe = () => W.asap(r), s;
}, rd = function* (t, e) {
  let n = t.byteLength;
  if (n < e) {
    yield t;
    return;
  }
  let a = 0, i;
  for (; a < n; )
    i = a + e, yield t.slice(a, i), a = i;
}, od = async function* (t, e) {
  for await (const n of ad(t))
    yield* rd(n, e);
}, ad = async function* (t) {
  if (t[Symbol.asyncIterator]) {
    yield* t;
    return;
  }
  const e = t.getReader();
  try {
    for (; ; ) {
      const { done: n, value: a } = await e.read();
      if (n)
        break;
      yield a;
    }
  } finally {
    await e.cancel();
  }
}, Di = (t, e, n, a) => {
  const i = od(t, e);
  let u = 0, r, s = (o) => {
    r || (r = !0, a && a(o));
  };
  return new ReadableStream(
    {
      async pull(o) {
        try {
          const { done: l, value: c } = await i.next();
          if (l) {
            s(), o.close();
            return;
          }
          let d = c.byteLength;
          if (n) {
            let p = u += d;
            n(p);
          }
          o.enqueue(new Uint8Array(c));
        } catch (l) {
          throw s(l), l;
        }
      },
      cancel(o) {
        return s(o), i.return();
      }
    },
    {
      highWaterMark: 2
    }
  );
}, Ro = (t) => t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102, id = (t, e, n) => e + 2 < n && Ro(t.charCodeAt(e + 1)) && Ro(t.charCodeAt(e + 2));
function sd(t) {
  if (!t || typeof t != "string" || !t.startsWith("data:")) return 0;
  const e = t.indexOf(",");
  if (e < 0) return 0;
  const n = t.slice(5, e), a = t.slice(e + 1);
  if (/;base64/i.test(n)) {
    let r = a.length;
    const s = a.length;
    for (let h = 0; h < s; h++)
      if (a.charCodeAt(h) === 37 && h + 2 < s) {
        const f = a.charCodeAt(h + 1), m = a.charCodeAt(h + 2);
        Ro(f) && Ro(m) && (r -= 2, h += 2);
      }
    let o = 0, l = s - 1;
    const c = (h) => h >= 2 && a.charCodeAt(h - 2) === 37 && // '%'
    a.charCodeAt(h - 1) === 51 && // '3'
    (a.charCodeAt(h) === 68 || a.charCodeAt(h) === 100);
    l >= 0 && (a.charCodeAt(l) === 61 ? (o++, l--) : c(l) && (o++, l -= 3)), o === 1 && l >= 0 && (a.charCodeAt(l) === 61 || c(l)) && o++;
    const p = Math.floor(r / 4) * 3 - (o || 0);
    return p > 0 ? p : 0;
  }
  let u = 0;
  for (let r = 0, s = a.length; r < s; r++) {
    const o = a.charCodeAt(r);
    if (o === 37 && id(a, r, s))
      u += 1, r += 2;
    else if (o < 128)
      u += 1;
    else if (o < 2048)
      u += 2;
    else if (o >= 55296 && o <= 56319 && r + 1 < s) {
      const l = a.charCodeAt(r + 1);
      l >= 56320 && l <= 57343 ? (u += 4, r++) : u += 3;
    } else
      u += 3;
  }
  return u;
}
const $a = "1.18.0", Fi = 64 * 1024, { isFunction: oo } = W, ld = (t) => encodeURIComponent(t).replace(
  /%([0-9A-F]{2})/gi,
  (e, n) => String.fromCharCode(parseInt(n, 16))
), Mi = (t) => {
  if (!W.isString(t))
    return t;
  try {
    return decodeURIComponent(t);
  } catch {
    return t;
  }
}, Li = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, ud = (t) => {
  const e = t.indexOf("://");
  let n = t;
  return e !== -1 && (n = n.slice(e + 3)), n.includes("@") || n.includes(":");
}, cd = (t) => {
  const e = W.global !== void 0 && W.global !== null ? W.global : globalThis, { ReadableStream: n, TextEncoder: a } = e;
  t = W.merge.call(
    {
      skipUndefined: !0
    },
    {
      Request: e.Request,
      Response: e.Response
    },
    t
  );
  const { fetch: i, Request: u, Response: r } = t, s = i ? oo(i) : typeof fetch == "function", o = oo(u), l = oo(r);
  if (!s)
    return !1;
  const c = s && oo(n), d = s && (typeof a == "function" ? /* @__PURE__ */ ((g) => (y) => g.encode(y))(new a()) : async (g) => new Uint8Array(await new u(g).arrayBuffer())), p = o && c && Li(() => {
    let g = !1;
    const y = new u(At.origin, {
      body: new n(),
      method: "POST",
      get duplex() {
        return g = !0, "half";
      }
    }), S = y.headers.has("Content-Type");
    return y.body != null && y.body.cancel(), g && !S;
  }), h = l && c && Li(() => W.isReadableStream(new r("").body)), f = {
    stream: h && ((g) => g.body)
  };
  s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((g) => {
    !f[g] && (f[g] = (y, S) => {
      let E = y && y[g];
      if (E)
        return E.call(y);
      throw new Oe(
        `Response type '${g}' is not supported`,
        Oe.ERR_NOT_SUPPORT,
        S
      );
    });
  });
  const m = async (g) => {
    if (g == null)
      return 0;
    if (W.isBlob(g))
      return g.size;
    if (W.isSpecCompliantForm(g))
      return (await new u(At.origin, {
        method: "POST",
        body: g
      }).arrayBuffer()).byteLength;
    if (W.isArrayBufferView(g) || W.isArrayBuffer(g))
      return g.byteLength;
    if (W.isURLSearchParams(g) && (g = g + ""), W.isString(g))
      return (await d(g)).byteLength;
  }, v = async (g, y) => {
    const S = W.toFiniteNumber(g.getContentLength());
    return S ?? m(y);
  };
  return async (g) => {
    let {
      url: y,
      method: S,
      data: E,
      signal: A,
      cancelToken: w,
      timeout: V,
      onDownloadProgress: M,
      onUploadProgress: C,
      responseType: R,
      headers: k,
      withCredentials: $ = "same-origin",
      fetchOptions: B,
      maxContentLength: z,
      maxBodyLength: K
    } = Ls(g);
    const Y = W.isNumber(z) && z > -1, ae = W.isNumber(K) && K > -1, J = (be) => W.hasOwnProp(g, be) ? g[be] : void 0;
    let he = i || fetch;
    R = R ? (R + "").toLowerCase() : "text";
    let ce = nd(
      [A, w && w.toAbortSignal()],
      V
    ), ye = null;
    const Ce = ce && ce.unsubscribe && (() => {
      ce.unsubscribe();
    });
    let Ee, Ue = null;
    const Ne = () => new Oe(
      "Request body larger than maxBodyLength limit",
      Oe.ERR_BAD_REQUEST,
      g,
      ye
    );
    try {
      let be;
      const xe = J("auth");
      if (xe) {
        const U = W.getSafeProp(xe, "username") || "", H = W.getSafeProp(xe, "password") || "";
        be = {
          username: U,
          password: H
        };
      }
      if (ud(y)) {
        const U = new URL(y, At.origin);
        if (!be && (U.username || U.password)) {
          const H = Mi(U.username), Q = Mi(U.password);
          be = {
            username: H,
            password: Q
          };
        }
        (U.username || U.password) && (U.username = "", U.password = "", y = U.href);
      }
      if (be && (k.delete("authorization"), k.set(
        "Authorization",
        "Basic " + btoa(ld((be.username || "") + ":" + (be.password || "")))
      )), Y && typeof y == "string" && y.startsWith("data:") && sd(y) > z)
        throw new Oe(
          "maxContentLength size of " + z + " exceeded",
          Oe.ERR_BAD_RESPONSE,
          g,
          ye
        );
      if (ae && S !== "get" && S !== "head") {
        const U = await m(E);
        if (typeof U == "number" && isFinite(U) && (Ee = U, U > K))
          throw Ne();
      }
      const P = ae && (W.isReadableStream(E) || W.isStream(E)), D = (U, H, Q) => Di(
        U,
        Fi,
        (q) => {
          if (ae && q > K)
            throw Ue = Ne();
          H && H(q);
        },
        Q
      );
      if (p && S !== "get" && S !== "head" && (C || P)) {
        if (Ee = Ee ?? await v(k, E), Ee !== 0 || P) {
          let U = new u(y, {
            method: "POST",
            body: E,
            duplex: "half"
          }), H;
          if (W.isFormData(E) && (H = U.headers.get("content-type")) && k.setContentType(H), U.body) {
            const [Q, q] = C && Oi(
              Ee,
              Oo(Ri(C))
            ) || [];
            E = D(U.body, Q, q);
          }
        }
      } else if (P && !o && c && S !== "get" && S !== "head")
        E = D(E);
      else if (P && o && !p && S !== "get" && S !== "head")
        throw new Oe(
          "Stream request bodies are not supported by the current fetch implementation",
          Oe.ERR_NOT_SUPPORT,
          g,
          ye
        );
      W.isString($) || ($ = $ ? "include" : "omit");
      const T = o && "credentials" in u.prototype;
      if (W.isFormData(E)) {
        const U = k.getContentType();
        U && /^multipart\/form-data/i.test(U) && !/boundary=/i.test(U) && k.delete("content-type");
      }
      k.set("User-Agent", "axios/" + $a, !1);
      const L = {
        ...B,
        signal: ce,
        method: S.toUpperCase(),
        headers: ws(k.normalize()),
        body: E,
        duplex: "half",
        credentials: T ? $ : void 0
      };
      ye = o && new u(y, L);
      let b = await (o ? he(ye, B) : he(y, L));
      const x = Pt.from(b.headers);
      if (Y) {
        const U = W.toFiniteNumber(x.getContentLength());
        if (U != null && U > z)
          throw new Oe(
            "maxContentLength size of " + z + " exceeded",
            Oe.ERR_BAD_RESPONSE,
            g,
            ye
          );
      }
      const I = h && (R === "stream" || R === "response");
      if (h && b.body && (M || Y || I && Ce)) {
        const U = {};
        ["status", "statusText", "headers"].forEach((ne) => {
          U[ne] = b[ne];
        });
        const H = W.toFiniteNumber(x.getContentLength()), [Q, q] = M && Oi(
          H,
          Oo(Ri(M), !0)
        ) || [];
        let Z = 0;
        const ee = (ne) => {
          if (Y && (Z = ne, Z > z))
            throw new Oe(
              "maxContentLength size of " + z + " exceeded",
              Oe.ERR_BAD_RESPONSE,
              g,
              ye
            );
          Q && Q(ne);
        };
        b = new r(
          Di(b.body, Fi, ee, () => {
            q && q(), Ce && Ce();
          }),
          U
        );
      }
      R = R || "text";
      let N = await f[W.findKey(f, R) || "text"](
        b,
        g
      );
      if (Y && !h && !I) {
        let U;
        if (N != null && (typeof N.byteLength == "number" ? U = N.byteLength : typeof N.size == "number" ? U = N.size : typeof N == "string" && (U = typeof a == "function" ? new a().encode(N).byteLength : N.length)), typeof U == "number" && U > z)
          throw new Oe(
            "maxContentLength size of " + z + " exceeded",
            Oe.ERR_BAD_RESPONSE,
            g,
            ye
          );
      }
      return !I && Ce && Ce(), await new Promise((U, H) => {
        Fs(U, H, {
          data: N,
          headers: Pt.from(b.headers),
          status: b.status,
          statusText: b.statusText,
          config: g,
          request: ye
        });
      });
    } catch (be) {
      if (Ce && Ce(), ce && ce.aborted && ce.reason instanceof Oe) {
        const xe = ce.reason;
        throw xe.config = g, ye && (xe.request = ye), be !== xe && (xe.cause = be), xe;
      }
      throw Ue ? (ye && !Ue.request && (Ue.request = ye), Ue) : be instanceof Oe ? (ye && !be.request && (be.request = ye), be) : be && be.name === "TypeError" && /Load failed|fetch/i.test(be.message) ? Object.assign(
        new Oe(
          "Network Error",
          Oe.ERR_NETWORK,
          g,
          ye,
          be && be.response
        ),
        {
          cause: be.cause || be
        }
      ) : Oe.from(be, be && be.code, g, ye, be && be.response);
    }
  };
}, dd = /* @__PURE__ */ new Map(), Us = (t) => {
  let e = t && t.env || {};
  const { fetch: n, Request: a, Response: i } = e, u = [a, i, n];
  let r = u.length, s = r, o, l, c = dd;
  for (; s--; )
    o = u[s], l = c.get(o), l === void 0 && c.set(o, l = s ? /* @__PURE__ */ new Map() : cd(e)), c = l;
  return l;
};
Us();
const Ba = {
  http: Tc,
  xhr: td,
  fetch: {
    get: Us
  }
};
W.forEach(Ba, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { __proto__: null, value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { __proto__: null, value: e });
  }
});
const Ui = (t) => `- ${t}`, fd = (t) => W.isFunction(t) || t === null || t === !1;
function hd(t, e) {
  t = W.isArray(t) ? t : [t];
  const { length: n } = t;
  let a, i;
  const u = {};
  for (let r = 0; r < n; r++) {
    a = t[r];
    let s;
    if (i = a, !fd(a) && (i = Ba[(s = String(a)).toLowerCase()], i === void 0))
      throw new Oe(`Unknown adapter '${s}'`);
    if (i && (W.isFunction(i) || (i = i.get(e))))
      break;
    u[s || "#" + r] = i;
  }
  if (!i) {
    const r = Object.entries(u).map(
      ([o, l]) => `adapter ${o} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let s = n ? r.length > 1 ? `since :
` + r.map(Ui).join(`
`) : " " + Ui(r[0]) : "as no adapter specified";
    throw new Oe(
      "There is no suitable adapter to dispatch the request " + s,
      "ERR_NOT_SUPPORT"
    );
  }
  return i;
}
const Ns = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: hd,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Ba
};
function oa(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new kr(null, t);
}
function Ni(t) {
  return oa(t), t.headers = Pt.from(t.headers), t.data = ra.call(t, t.transformRequest), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Ns.getAdapter(t.adapter || jr.adapter, t)(t).then(
    function(a) {
      oa(t), t.response = a;
      try {
        a.data = ra.call(t, t.transformResponse, a);
      } finally {
        delete t.response;
      }
      return a.headers = Pt.from(a.headers), a;
    },
    function(a) {
      if (!Ds(a) && (oa(t), a && a.response)) {
        t.response = a.response;
        try {
          a.response.data = ra.call(
            t,
            t.transformResponse,
            a.response
          );
        } finally {
          delete t.response;
        }
        a.response.headers = Pt.from(a.response.headers);
      }
      return Promise.reject(a);
    }
  );
}
const zo = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  zo[t] = function(a) {
    return typeof a === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const ji = {};
zo.transitional = function(e, n, a) {
  function i(u, r) {
    return "[Axios v" + $a + "] Transitional option '" + u + "'" + r + (a ? ". " + a : "");
  }
  return (u, r, s) => {
    if (e === !1)
      throw new Oe(
        i(r, " has been removed" + (n ? " in " + n : "")),
        Oe.ERR_DEPRECATED
      );
    return n && !ji[r] && (ji[r] = !0, console.warn(
      i(
        r,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), e ? e(u, r, s) : !0;
  };
};
zo.spelling = function(e) {
  return (n, a) => (console.warn(`${a} is likely a misspelling of ${e}`), !0);
};
function pd(t, e, n) {
  if (typeof t != "object")
    throw new Oe("options must be an object", Oe.ERR_BAD_OPTION_VALUE);
  const a = Object.keys(t);
  let i = a.length;
  for (; i-- > 0; ) {
    const u = a[i], r = Object.prototype.hasOwnProperty.call(e, u) ? e[u] : void 0;
    if (r) {
      const s = t[u], o = s === void 0 || r(s, u, t);
      if (o !== !0)
        throw new Oe(
          "option " + u + " must be " + o,
          Oe.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (n !== !0)
      throw new Oe("Unknown option " + u, Oe.ERR_BAD_OPTION);
  }
}
const go = {
  assertOptions: pd,
  validators: zo
}, Ct = go.validators;
let zn = class {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new Ai(),
      response: new Ai()
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
  async request(e, n) {
    try {
      return await this._request(e, n);
    } catch (a) {
      if (a instanceof Error) {
        let i = {};
        Error.captureStackTrace ? Error.captureStackTrace(i) : i = new Error();
        const u = (() => {
          if (!i.stack)
            return "";
          const r = i.stack.indexOf(`
`);
          return r === -1 ? "" : i.stack.slice(r + 1);
        })();
        try {
          if (!a.stack)
            a.stack = u;
          else if (u) {
            const r = u.indexOf(`
`), s = r === -1 ? -1 : u.indexOf(`
`, r + 1), o = s === -1 ? "" : u.slice(s + 1);
            String(a.stack).endsWith(o) || (a.stack += `
` + u);
          }
        } catch {
        }
      }
      throw a;
    }
  }
  _request(e, n) {
    typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = Yn(this.defaults, n);
    const { transitional: a, paramsSerializer: i, headers: u } = n;
    a !== void 0 && go.assertOptions(
      a,
      {
        silentJSONParsing: Ct.transitional(Ct.boolean),
        forcedJSONParsing: Ct.transitional(Ct.boolean),
        clarifyTimeoutError: Ct.transitional(Ct.boolean),
        legacyInterceptorReqResOrdering: Ct.transitional(Ct.boolean),
        advertiseZstdAcceptEncoding: Ct.transitional(Ct.boolean),
        validateStatusUndefinedResolves: Ct.transitional(Ct.boolean)
      },
      !1
    ), i != null && (W.isFunction(i) ? n.paramsSerializer = {
      serialize: i
    } : go.assertOptions(
      i,
      {
        encode: Ct.function,
        serialize: Ct.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), go.assertOptions(
      n,
      {
        baseUrl: Ct.spelling("baseURL"),
        withXsrfToken: Ct.spelling("withXSRFToken")
      },
      !0
    ), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let r = u && W.merge(u.common, u[n.method]);
    u && W.forEach(["delete", "get", "head", "post", "put", "patch", "query", "common"], (f) => {
      delete u[f];
    }), n.headers = Pt.concat(r, u);
    const s = [];
    let o = !0;
    this.interceptors.request.forEach(function(m) {
      if (typeof m.runWhen == "function" && m.runWhen(n) === !1)
        return;
      o = o && m.synchronous;
      const v = n.transitional || ka;
      v && v.legacyInterceptorReqResOrdering ? s.unshift(m.fulfilled, m.rejected) : s.push(m.fulfilled, m.rejected);
    });
    const l = [];
    this.interceptors.response.forEach(function(m) {
      l.push(m.fulfilled, m.rejected);
    });
    let c, d = 0, p;
    if (!o) {
      const f = [Ni.bind(this), void 0];
      for (f.unshift(...s), f.push(...l), p = f.length, c = Promise.resolve(n); d < p; )
        c = c.then(f[d++], f[d++]);
      return c;
    }
    p = s.length;
    let h = n;
    for (; d < p; ) {
      const f = s[d++], m = s[d++];
      try {
        h = f(h);
      } catch (v) {
        m.call(this, v);
        break;
      }
    }
    try {
      c = Ni.call(this, h);
    } catch (f) {
      return Promise.reject(f);
    }
    for (d = 0, p = l.length; d < p; )
      c = c.then(l[d++], l[d++]);
    return c;
  }
  getUri(e) {
    e = Yn(this.defaults, e);
    const n = Ms(e.baseURL, e.url, e.allowAbsoluteUrls, e);
    return Rs(n, e.params, e.paramsSerializer);
  }
};
W.forEach(["delete", "get", "head", "options"], function(e) {
  zn.prototype[e] = function(n, a) {
    return this.request(
      Yn(a || {}, {
        method: e,
        url: n,
        data: a && W.hasOwnProp(a, "data") ? a.data : void 0
      })
    );
  };
});
W.forEach(["post", "put", "patch", "query"], function(e) {
  function n(a) {
    return function(u, r, s) {
      return this.request(
        Yn(s || {}, {
          method: e,
          headers: a ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: u,
          data: r
        })
      );
    };
  }
  zn.prototype[e] = n(), e !== "query" && (zn.prototype[e + "Form"] = n(!0));
});
let vd = class js {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(u) {
      n = u;
    });
    const a = this;
    this.promise.then((i) => {
      if (!a._listeners) return;
      let u = a._listeners.length;
      for (; u-- > 0; )
        a._listeners[u](i);
      a._listeners = null;
    }), this.promise.then = (i) => {
      let u;
      const r = new Promise((s) => {
        a.subscribe(s), u = s;
      }).then(i);
      return r.cancel = function() {
        a.unsubscribe(u);
      }, r;
    }, e(function(u, r, s) {
      a.reason || (a.reason = new kr(u, r, s), n(a.reason));
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
    const n = this._listeners.indexOf(e);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const e = new AbortController(), n = (a) => {
      e.abort(a);
    };
    return this.subscribe(n), e.signal.unsubscribe = () => this.unsubscribe(n), e.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new js(function(i) {
        e = i;
      }),
      cancel: e
    };
  }
};
function md(t) {
  return function(n) {
    return t.apply(null, n);
  };
}
function gd(t) {
  return W.isObject(t) && t.isAxiosError === !0;
}
const Ea = {
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
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(Ea).forEach(([t, e]) => {
  Ea[e] = t;
});
function ks(t) {
  const e = new zn(t), n = ps(zn.prototype.request, e);
  return W.extend(n, zn.prototype, e, { allOwnKeys: !0 }), W.extend(n, e, null, { allOwnKeys: !0 }), n.create = function(i) {
    return ks(Yn(t, i));
  }, n;
}
const vt = ks(jr);
vt.Axios = zn;
vt.CanceledError = kr;
vt.CancelToken = vd;
vt.isCancel = Ds;
vt.VERSION = $a;
vt.toFormData = Ho;
vt.AxiosError = Oe;
vt.Cancel = vt.CanceledError;
vt.all = function(e) {
  return Promise.all(e);
};
vt.spread = md;
vt.isAxiosError = gd;
vt.mergeConfig = Yn;
vt.AxiosHeaders = Pt;
vt.formToJSON = (t) => Is(W.isHTMLForm(t) ? new FormData(t) : t);
vt.getAdapter = Ns.getAdapter;
vt.HttpStatusCode = Ea;
vt.default = vt;
const {
  Axios: Qy,
  AxiosError: Zy,
  CanceledError: qy,
  isCancel: _y,
  CancelToken: e1,
  VERSION: t1,
  all: n1,
  Cancel: r1,
  isAxiosError: o1,
  spread: a1,
  toFormData: i1,
  AxiosHeaders: s1,
  HttpStatusCode: l1,
  formToJSON: u1,
  getAdapter: c1,
  mergeConfig: d1,
  create: f1
} = vt;
var ao = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ha(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Vs(t) {
  if (Object.prototype.hasOwnProperty.call(t, "__esModule")) return t;
  var e = t.default;
  if (typeof e == "function") {
    var n = function a() {
      return this instanceof a ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    n.prototype = e.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(t).forEach(function(a) {
    var i = Object.getOwnPropertyDescriptor(t, a);
    Object.defineProperty(n, a, i.get ? i : {
      enumerable: !0,
      get: function() {
        return t[a];
      }
    });
  }), n;
}
var aa = { exports: {} }, ki;
function yd() {
  return ki || (ki = 1, (function(t, e) {
    (function(a, i) {
      t.exports = i();
    })(self, function() {
      return (
        /******/
        (function() {
          var n = {
            /***/
            3099: (
              /***/
              (function(r) {
                r.exports = function(s) {
                  if (typeof s != "function")
                    throw TypeError(String(s) + " is not a function");
                  return s;
                };
              })
            ),
            /***/
            6077: (
              /***/
              (function(r, s, o) {
                var l = o(111);
                r.exports = function(c) {
                  if (!l(c) && c !== null)
                    throw TypeError("Can't set " + String(c) + " as a prototype");
                  return c;
                };
              })
            ),
            /***/
            1223: (
              /***/
              (function(r, s, o) {
                var l = o(5112), c = o(30), d = o(3070), p = l("unscopables"), h = Array.prototype;
                h[p] == null && d.f(h, p, {
                  configurable: !0,
                  value: c(null)
                }), r.exports = function(f) {
                  h[p][f] = !0;
                };
              })
            ),
            /***/
            1530: (
              /***/
              (function(r, s, o) {
                var l = o(8710).charAt;
                r.exports = function(c, d, p) {
                  return d + (p ? l(c, d).length : 1);
                };
              })
            ),
            /***/
            5787: (
              /***/
              (function(r) {
                r.exports = function(s, o, l) {
                  if (!(s instanceof o))
                    throw TypeError("Incorrect " + (l ? l + " " : "") + "invocation");
                  return s;
                };
              })
            ),
            /***/
            9670: (
              /***/
              (function(r, s, o) {
                var l = o(111);
                r.exports = function(c) {
                  if (!l(c))
                    throw TypeError(String(c) + " is not an object");
                  return c;
                };
              })
            ),
            /***/
            4019: (
              /***/
              (function(r) {
                r.exports = typeof ArrayBuffer < "u" && typeof DataView < "u";
              })
            ),
            /***/
            260: (
              /***/
              (function(r, s, o) {
                var l = o(4019), c = o(9781), d = o(7854), p = o(111), h = o(6656), f = o(648), m = o(8880), v = o(1320), g = o(3070).f, y = o(9518), S = o(7674), E = o(5112), A = o(9711), w = d.Int8Array, V = w && w.prototype, M = d.Uint8ClampedArray, C = M && M.prototype, R = w && y(w), k = V && y(V), $ = Object.prototype, B = $.isPrototypeOf, z = E("toStringTag"), K = A("TYPED_ARRAY_TAG"), Y = l && !!S && f(d.opera) !== "Opera", ae = !1, J, he = {
                  Int8Array: 1,
                  Uint8Array: 1,
                  Uint8ClampedArray: 1,
                  Int16Array: 2,
                  Uint16Array: 2,
                  Int32Array: 4,
                  Uint32Array: 4,
                  Float32Array: 4,
                  Float64Array: 8
                }, ce = {
                  BigInt64Array: 8,
                  BigUint64Array: 8
                }, ye = function(P) {
                  if (!p(P)) return !1;
                  var D = f(P);
                  return D === "DataView" || h(he, D) || h(ce, D);
                }, Ce = function(xe) {
                  if (!p(xe)) return !1;
                  var P = f(xe);
                  return h(he, P) || h(ce, P);
                }, Ee = function(xe) {
                  if (Ce(xe)) return xe;
                  throw TypeError("Target is not a typed array");
                }, Ue = function(xe) {
                  if (S) {
                    if (B.call(R, xe)) return xe;
                  } else for (var P in he) if (h(he, J)) {
                    var D = d[P];
                    if (D && (xe === D || B.call(D, xe)))
                      return xe;
                  }
                  throw TypeError("Target is not a typed array constructor");
                }, Ne = function(xe, P, D) {
                  if (c) {
                    if (D) for (var T in he) {
                      var L = d[T];
                      L && h(L.prototype, xe) && delete L.prototype[xe];
                    }
                    (!k[xe] || D) && v(k, xe, D ? P : Y && V[xe] || P);
                  }
                }, be = function(xe, P, D) {
                  var T, L;
                  if (c) {
                    if (S) {
                      if (D) for (T in he)
                        L = d[T], L && h(L, xe) && delete L[xe];
                      if (!R[xe] || D)
                        try {
                          return v(R, xe, D ? P : Y && w[xe] || P);
                        } catch {
                        }
                      else return;
                    }
                    for (T in he)
                      L = d[T], L && (!L[xe] || D) && v(L, xe, P);
                  }
                };
                for (J in he)
                  d[J] || (Y = !1);
                if ((!Y || typeof R != "function" || R === Function.prototype) && (R = function() {
                  throw TypeError("Incorrect invocation");
                }, Y))
                  for (J in he)
                    d[J] && S(d[J], R);
                if ((!Y || !k || k === $) && (k = R.prototype, Y))
                  for (J in he)
                    d[J] && S(d[J].prototype, k);
                if (Y && y(C) !== k && S(C, k), c && !h(k, z)) {
                  ae = !0, g(k, z, { get: function() {
                    return p(this) ? this[K] : void 0;
                  } });
                  for (J in he) d[J] && m(d[J], K, J);
                }
                r.exports = {
                  NATIVE_ARRAY_BUFFER_VIEWS: Y,
                  TYPED_ARRAY_TAG: ae && K,
                  aTypedArray: Ee,
                  aTypedArrayConstructor: Ue,
                  exportTypedArrayMethod: Ne,
                  exportTypedArrayStaticMethod: be,
                  isView: ye,
                  isTypedArray: Ce,
                  TypedArray: R,
                  TypedArrayPrototype: k
                };
              })
            ),
            /***/
            3331: (
              /***/
              (function(r, s, o) {
                var l = o(7854), c = o(9781), d = o(4019), p = o(8880), h = o(2248), f = o(7293), m = o(5787), v = o(9958), g = o(7466), y = o(7067), S = o(1179), E = o(9518), A = o(7674), w = o(8006).f, V = o(3070).f, M = o(1285), C = o(8003), R = o(9909), k = R.get, $ = R.set, B = "ArrayBuffer", z = "DataView", K = "prototype", Y = "Wrong length", ae = "Wrong index", J = l[B], he = J, ce = l[z], ye = ce && ce[K], Ce = Object.prototype, Ee = l.RangeError, Ue = S.pack, Ne = S.unpack, be = function(ee) {
                  return [ee & 255];
                }, xe = function(ee) {
                  return [ee & 255, ee >> 8 & 255];
                }, P = function(ee) {
                  return [ee & 255, ee >> 8 & 255, ee >> 16 & 255, ee >> 24 & 255];
                }, D = function(ee) {
                  return ee[3] << 24 | ee[2] << 16 | ee[1] << 8 | ee[0];
                }, T = function(ee) {
                  return Ue(ee, 23, 4);
                }, L = function(ee) {
                  return Ue(ee, 52, 8);
                }, b = function(ee, ne) {
                  V(ee[K], ne, { get: function() {
                    return k(this)[ne];
                  } });
                }, x = function(ee, ne, le, ge) {
                  var Pe = y(le), Ke = k(ee);
                  if (Pe + ne > Ke.byteLength) throw Ee(ae);
                  var tt = k(Ke.buffer).bytes, qe = Pe + Ke.byteOffset, G = tt.slice(qe, qe + ne);
                  return ge ? G : G.reverse();
                }, I = function(ee, ne, le, ge, Pe, Ke) {
                  var tt = y(le), qe = k(ee);
                  if (tt + ne > qe.byteLength) throw Ee(ae);
                  for (var G = k(qe.buffer).bytes, X = tt + qe.byteOffset, oe = ge(+Pe), de = 0; de < ne; de++) G[X + de] = oe[Ke ? de : ne - de - 1];
                };
                if (!d)
                  he = function(ne) {
                    m(this, he, B);
                    var le = y(ne);
                    $(this, {
                      bytes: M.call(new Array(le), 0),
                      byteLength: le
                    }), c || (this.byteLength = le);
                  }, ce = function(ne, le, ge) {
                    m(this, ce, z), m(ne, he, z);
                    var Pe = k(ne).byteLength, Ke = v(le);
                    if (Ke < 0 || Ke > Pe) throw Ee("Wrong offset");
                    if (ge = ge === void 0 ? Pe - Ke : g(ge), Ke + ge > Pe) throw Ee(Y);
                    $(this, {
                      buffer: ne,
                      byteLength: ge,
                      byteOffset: Ke
                    }), c || (this.buffer = ne, this.byteLength = ge, this.byteOffset = Ke);
                  }, c && (b(he, "byteLength"), b(ce, "buffer"), b(ce, "byteLength"), b(ce, "byteOffset")), h(ce[K], {
                    getInt8: function(ne) {
                      return x(this, 1, ne)[0] << 24 >> 24;
                    },
                    getUint8: function(ne) {
                      return x(this, 1, ne)[0];
                    },
                    getInt16: function(ne) {
                      var le = x(this, 2, ne, arguments.length > 1 ? arguments[1] : void 0);
                      return (le[1] << 8 | le[0]) << 16 >> 16;
                    },
                    getUint16: function(ne) {
                      var le = x(this, 2, ne, arguments.length > 1 ? arguments[1] : void 0);
                      return le[1] << 8 | le[0];
                    },
                    getInt32: function(ne) {
                      return D(x(this, 4, ne, arguments.length > 1 ? arguments[1] : void 0));
                    },
                    getUint32: function(ne) {
                      return D(x(this, 4, ne, arguments.length > 1 ? arguments[1] : void 0)) >>> 0;
                    },
                    getFloat32: function(ne) {
                      return Ne(x(this, 4, ne, arguments.length > 1 ? arguments[1] : void 0), 23);
                    },
                    getFloat64: function(ne) {
                      return Ne(x(this, 8, ne, arguments.length > 1 ? arguments[1] : void 0), 52);
                    },
                    setInt8: function(ne, le) {
                      I(this, 1, ne, be, le);
                    },
                    setUint8: function(ne, le) {
                      I(this, 1, ne, be, le);
                    },
                    setInt16: function(ne, le) {
                      I(this, 2, ne, xe, le, arguments.length > 2 ? arguments[2] : void 0);
                    },
                    setUint16: function(ne, le) {
                      I(this, 2, ne, xe, le, arguments.length > 2 ? arguments[2] : void 0);
                    },
                    setInt32: function(ne, le) {
                      I(this, 4, ne, P, le, arguments.length > 2 ? arguments[2] : void 0);
                    },
                    setUint32: function(ne, le) {
                      I(this, 4, ne, P, le, arguments.length > 2 ? arguments[2] : void 0);
                    },
                    setFloat32: function(ne, le) {
                      I(this, 4, ne, T, le, arguments.length > 2 ? arguments[2] : void 0);
                    },
                    setFloat64: function(ne, le) {
                      I(this, 8, ne, L, le, arguments.length > 2 ? arguments[2] : void 0);
                    }
                  });
                else {
                  if (!f(function() {
                    J(1);
                  }) || !f(function() {
                    new J(-1);
                  }) || f(function() {
                    return new J(), new J(1.5), new J(NaN), J.name != B;
                  })) {
                    he = function(ne) {
                      return m(this, he), new J(y(ne));
                    };
                    for (var N = he[K] = J[K], U = w(J), H = 0, Q; U.length > H; )
                      (Q = U[H++]) in he || p(he, Q, J[Q]);
                    N.constructor = he;
                  }
                  A && E(ye) !== Ce && A(ye, Ce);
                  var q = new ce(new he(2)), Z = ye.setInt8;
                  q.setInt8(0, 2147483648), q.setInt8(1, 2147483649), (q.getInt8(0) || !q.getInt8(1)) && h(ye, {
                    setInt8: function(ne, le) {
                      Z.call(this, ne, le << 24 >> 24);
                    },
                    setUint8: function(ne, le) {
                      Z.call(this, ne, le << 24 >> 24);
                    }
                  }, { unsafe: !0 });
                }
                C(he, B), C(ce, z), r.exports = {
                  ArrayBuffer: he,
                  DataView: ce
                };
              })
            ),
            /***/
            1048: (
              /***/
              (function(r, s, o) {
                var l = o(7908), c = o(1400), d = o(7466), p = Math.min;
                r.exports = [].copyWithin || function(f, m) {
                  var v = l(this), g = d(v.length), y = c(f, g), S = c(m, g), E = arguments.length > 2 ? arguments[2] : void 0, A = p((E === void 0 ? g : c(E, g)) - S, g - y), w = 1;
                  for (S < y && y < S + A && (w = -1, S += A - 1, y += A - 1); A-- > 0; )
                    S in v ? v[y] = v[S] : delete v[y], y += w, S += w;
                  return v;
                };
              })
            ),
            /***/
            1285: (
              /***/
              (function(r, s, o) {
                var l = o(7908), c = o(1400), d = o(7466);
                r.exports = function(h) {
                  for (var f = l(this), m = d(f.length), v = arguments.length, g = c(v > 1 ? arguments[1] : void 0, m), y = v > 2 ? arguments[2] : void 0, S = y === void 0 ? m : c(y, m); S > g; ) f[g++] = h;
                  return f;
                };
              })
            ),
            /***/
            8533: (
              /***/
              (function(r, s, o) {
                var l = o(2092).forEach, c = o(9341), d = c("forEach");
                r.exports = d ? [].forEach : function(h) {
                  return l(this, h, arguments.length > 1 ? arguments[1] : void 0);
                };
              })
            ),
            /***/
            8457: (
              /***/
              (function(r, s, o) {
                var l = o(9974), c = o(7908), d = o(3411), p = o(7659), h = o(7466), f = o(6135), m = o(1246);
                r.exports = function(g) {
                  var y = c(g), S = typeof this == "function" ? this : Array, E = arguments.length, A = E > 1 ? arguments[1] : void 0, w = A !== void 0, V = m(y), M = 0, C, R, k, $, B, z;
                  if (w && (A = l(A, E > 2 ? arguments[2] : void 0, 2)), V != null && !(S == Array && p(V)))
                    for ($ = V.call(y), B = $.next, R = new S(); !(k = B.call($)).done; M++)
                      z = w ? d($, A, [k.value, M], !0) : k.value, f(R, M, z);
                  else
                    for (C = h(y.length), R = new S(C); C > M; M++)
                      z = w ? A(y[M], M) : y[M], f(R, M, z);
                  return R.length = M, R;
                };
              })
            ),
            /***/
            1318: (
              /***/
              (function(r, s, o) {
                var l = o(5656), c = o(7466), d = o(1400), p = function(h) {
                  return function(f, m, v) {
                    var g = l(f), y = c(g.length), S = d(v, y), E;
                    if (h && m != m) {
                      for (; y > S; )
                        if (E = g[S++], E != E) return !0;
                    } else for (; y > S; S++)
                      if ((h || S in g) && g[S] === m) return h || S || 0;
                    return !h && -1;
                  };
                };
                r.exports = {
                  // `Array.prototype.includes` method
                  // https://tc39.es/ecma262/#sec-array.prototype.includes
                  includes: p(!0),
                  // `Array.prototype.indexOf` method
                  // https://tc39.es/ecma262/#sec-array.prototype.indexof
                  indexOf: p(!1)
                };
              })
            ),
            /***/
            2092: (
              /***/
              (function(r, s, o) {
                var l = o(9974), c = o(8361), d = o(7908), p = o(7466), h = o(5417), f = [].push, m = function(v) {
                  var g = v == 1, y = v == 2, S = v == 3, E = v == 4, A = v == 6, w = v == 7, V = v == 5 || A;
                  return function(M, C, R, k) {
                    for (var $ = d(M), B = c($), z = l(C, R, 3), K = p(B.length), Y = 0, ae = k || h, J = g ? ae(M, K) : y || w ? ae(M, 0) : void 0, he, ce; K > Y; Y++) if ((V || Y in B) && (he = B[Y], ce = z(he, Y, $), v))
                      if (g) J[Y] = ce;
                      else if (ce) switch (v) {
                        case 3:
                          return !0;
                        // some
                        case 5:
                          return he;
                        // find
                        case 6:
                          return Y;
                        // findIndex
                        case 2:
                          f.call(J, he);
                      }
                      else switch (v) {
                        case 4:
                          return !1;
                        // every
                        case 7:
                          f.call(J, he);
                      }
                    return A ? -1 : S || E ? E : J;
                  };
                };
                r.exports = {
                  // `Array.prototype.forEach` method
                  // https://tc39.es/ecma262/#sec-array.prototype.foreach
                  forEach: m(0),
                  // `Array.prototype.map` method
                  // https://tc39.es/ecma262/#sec-array.prototype.map
                  map: m(1),
                  // `Array.prototype.filter` method
                  // https://tc39.es/ecma262/#sec-array.prototype.filter
                  filter: m(2),
                  // `Array.prototype.some` method
                  // https://tc39.es/ecma262/#sec-array.prototype.some
                  some: m(3),
                  // `Array.prototype.every` method
                  // https://tc39.es/ecma262/#sec-array.prototype.every
                  every: m(4),
                  // `Array.prototype.find` method
                  // https://tc39.es/ecma262/#sec-array.prototype.find
                  find: m(5),
                  // `Array.prototype.findIndex` method
                  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
                  findIndex: m(6),
                  // `Array.prototype.filterOut` method
                  // https://github.com/tc39/proposal-array-filtering
                  filterOut: m(7)
                };
              })
            ),
            /***/
            6583: (
              /***/
              (function(r, s, o) {
                var l = o(5656), c = o(9958), d = o(7466), p = o(9341), h = Math.min, f = [].lastIndexOf, m = !!f && 1 / [1].lastIndexOf(1, -0) < 0, v = p("lastIndexOf"), g = m || !v;
                r.exports = g ? function(S) {
                  if (m) return f.apply(this, arguments) || 0;
                  var E = l(this), A = d(E.length), w = A - 1;
                  for (arguments.length > 1 && (w = h(w, c(arguments[1]))), w < 0 && (w = A + w); w >= 0; w--) if (w in E && E[w] === S) return w || 0;
                  return -1;
                } : f;
              })
            ),
            /***/
            1194: (
              /***/
              (function(r, s, o) {
                var l = o(7293), c = o(5112), d = o(7392), p = c("species");
                r.exports = function(h) {
                  return d >= 51 || !l(function() {
                    var f = [], m = f.constructor = {};
                    return m[p] = function() {
                      return { foo: 1 };
                    }, f[h](Boolean).foo !== 1;
                  });
                };
              })
            ),
            /***/
            9341: (
              /***/
              (function(r, s, o) {
                var l = o(7293);
                r.exports = function(c, d) {
                  var p = [][c];
                  return !!p && l(function() {
                    p.call(null, d || function() {
                      throw 1;
                    }, 1);
                  });
                };
              })
            ),
            /***/
            3671: (
              /***/
              (function(r, s, o) {
                var l = o(3099), c = o(7908), d = o(8361), p = o(7466), h = function(f) {
                  return function(m, v, g, y) {
                    l(v);
                    var S = c(m), E = d(S), A = p(S.length), w = f ? A - 1 : 0, V = f ? -1 : 1;
                    if (g < 2) for (; ; ) {
                      if (w in E) {
                        y = E[w], w += V;
                        break;
                      }
                      if (w += V, f ? w < 0 : A <= w)
                        throw TypeError("Reduce of empty array with no initial value");
                    }
                    for (; f ? w >= 0 : A > w; w += V) w in E && (y = v(y, E[w], w, S));
                    return y;
                  };
                };
                r.exports = {
                  // `Array.prototype.reduce` method
                  // https://tc39.es/ecma262/#sec-array.prototype.reduce
                  left: h(!1),
                  // `Array.prototype.reduceRight` method
                  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
                  right: h(!0)
                };
              })
            ),
            /***/
            5417: (
              /***/
              (function(r, s, o) {
                var l = o(111), c = o(3157), d = o(5112), p = d("species");
                r.exports = function(h, f) {
                  var m;
                  return c(h) && (m = h.constructor, typeof m == "function" && (m === Array || c(m.prototype)) ? m = void 0 : l(m) && (m = m[p], m === null && (m = void 0))), new (m === void 0 ? Array : m)(f === 0 ? 0 : f);
                };
              })
            ),
            /***/
            3411: (
              /***/
              (function(r, s, o) {
                var l = o(9670), c = o(9212);
                r.exports = function(d, p, h, f) {
                  try {
                    return f ? p(l(h)[0], h[1]) : p(h);
                  } catch (m) {
                    throw c(d), m;
                  }
                };
              })
            ),
            /***/
            7072: (
              /***/
              (function(r, s, o) {
                var l = o(5112), c = l("iterator"), d = !1;
                try {
                  var p = 0, h = {
                    next: function() {
                      return { done: !!p++ };
                    },
                    return: function() {
                      d = !0;
                    }
                  };
                  h[c] = function() {
                    return this;
                  }, Array.from(h, function() {
                    throw 2;
                  });
                } catch {
                }
                r.exports = function(f, m) {
                  if (!m && !d) return !1;
                  var v = !1;
                  try {
                    var g = {};
                    g[c] = function() {
                      return {
                        next: function() {
                          return { done: v = !0 };
                        }
                      };
                    }, f(g);
                  } catch {
                  }
                  return v;
                };
              })
            ),
            /***/
            4326: (
              /***/
              (function(r) {
                var s = {}.toString;
                r.exports = function(o) {
                  return s.call(o).slice(8, -1);
                };
              })
            ),
            /***/
            648: (
              /***/
              (function(r, s, o) {
                var l = o(1694), c = o(4326), d = o(5112), p = d("toStringTag"), h = c(/* @__PURE__ */ (function() {
                  return arguments;
                })()) == "Arguments", f = function(m, v) {
                  try {
                    return m[v];
                  } catch {
                  }
                };
                r.exports = l ? c : function(m) {
                  var v, g, y;
                  return m === void 0 ? "Undefined" : m === null ? "Null" : typeof (g = f(v = Object(m), p)) == "string" ? g : h ? c(v) : (y = c(v)) == "Object" && typeof v.callee == "function" ? "Arguments" : y;
                };
              })
            ),
            /***/
            9920: (
              /***/
              (function(r, s, o) {
                var l = o(6656), c = o(3887), d = o(1236), p = o(3070);
                r.exports = function(h, f) {
                  for (var m = c(f), v = p.f, g = d.f, y = 0; y < m.length; y++) {
                    var S = m[y];
                    l(h, S) || v(h, S, g(f, S));
                  }
                };
              })
            ),
            /***/
            8544: (
              /***/
              (function(r, s, o) {
                var l = o(7293);
                r.exports = !l(function() {
                  function c() {
                  }
                  return c.prototype.constructor = null, Object.getPrototypeOf(new c()) !== c.prototype;
                });
              })
            ),
            /***/
            4994: (
              /***/
              (function(r, s, o) {
                var l = o(3383).IteratorPrototype, c = o(30), d = o(9114), p = o(8003), h = o(7497), f = function() {
                  return this;
                };
                r.exports = function(m, v, g) {
                  var y = v + " Iterator";
                  return m.prototype = c(l, { next: d(1, g) }), p(m, y, !1, !0), h[y] = f, m;
                };
              })
            ),
            /***/
            8880: (
              /***/
              (function(r, s, o) {
                var l = o(9781), c = o(3070), d = o(9114);
                r.exports = l ? function(p, h, f) {
                  return c.f(p, h, d(1, f));
                } : function(p, h, f) {
                  return p[h] = f, p;
                };
              })
            ),
            /***/
            9114: (
              /***/
              (function(r) {
                r.exports = function(s, o) {
                  return {
                    enumerable: !(s & 1),
                    configurable: !(s & 2),
                    writable: !(s & 4),
                    value: o
                  };
                };
              })
            ),
            /***/
            6135: (
              /***/
              (function(r, s, o) {
                var l = o(7593), c = o(3070), d = o(9114);
                r.exports = function(p, h, f) {
                  var m = l(h);
                  m in p ? c.f(p, m, d(0, f)) : p[m] = f;
                };
              })
            ),
            /***/
            654: (
              /***/
              (function(r, s, o) {
                var l = o(2109), c = o(4994), d = o(9518), p = o(7674), h = o(8003), f = o(8880), m = o(1320), v = o(5112), g = o(1913), y = o(7497), S = o(3383), E = S.IteratorPrototype, A = S.BUGGY_SAFARI_ITERATORS, w = v("iterator"), V = "keys", M = "values", C = "entries", R = function() {
                  return this;
                };
                r.exports = function(k, $, B, z, K, Y, ae) {
                  c(B, $, z);
                  var J = function(P) {
                    if (P === K && Ee) return Ee;
                    if (!A && P in ye) return ye[P];
                    switch (P) {
                      case V:
                        return function() {
                          return new B(this, P);
                        };
                      case M:
                        return function() {
                          return new B(this, P);
                        };
                      case C:
                        return function() {
                          return new B(this, P);
                        };
                    }
                    return function() {
                      return new B(this);
                    };
                  }, he = $ + " Iterator", ce = !1, ye = k.prototype, Ce = ye[w] || ye["@@iterator"] || K && ye[K], Ee = !A && Ce || J(K), Ue = $ == "Array" && ye.entries || Ce, Ne, be, xe;
                  if (Ue && (Ne = d(Ue.call(new k())), E !== Object.prototype && Ne.next && (!g && d(Ne) !== E && (p ? p(Ne, E) : typeof Ne[w] != "function" && f(Ne, w, R)), h(Ne, he, !0, !0), g && (y[he] = R))), K == M && Ce && Ce.name !== M && (ce = !0, Ee = function() {
                    return Ce.call(this);
                  }), (!g || ae) && ye[w] !== Ee && f(ye, w, Ee), y[$] = Ee, K)
                    if (be = {
                      values: J(M),
                      keys: Y ? Ee : J(V),
                      entries: J(C)
                    }, ae) for (xe in be)
                      (A || ce || !(xe in ye)) && m(ye, xe, be[xe]);
                    else l({ target: $, proto: !0, forced: A || ce }, be);
                  return be;
                };
              })
            ),
            /***/
            9781: (
              /***/
              (function(r, s, o) {
                var l = o(7293);
                r.exports = !l(function() {
                  return Object.defineProperty({}, 1, { get: function() {
                    return 7;
                  } })[1] != 7;
                });
              })
            ),
            /***/
            317: (
              /***/
              (function(r, s, o) {
                var l = o(7854), c = o(111), d = l.document, p = c(d) && c(d.createElement);
                r.exports = function(h) {
                  return p ? d.createElement(h) : {};
                };
              })
            ),
            /***/
            8324: (
              /***/
              (function(r) {
                r.exports = {
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
              })
            ),
            /***/
            8113: (
              /***/
              (function(r, s, o) {
                var l = o(5005);
                r.exports = l("navigator", "userAgent") || "";
              })
            ),
            /***/
            7392: (
              /***/
              (function(r, s, o) {
                var l = o(7854), c = o(8113), d = l.process, p = d && d.versions, h = p && p.v8, f, m;
                h ? (f = h.split("."), m = f[0] + f[1]) : c && (f = c.match(/Edge\/(\d+)/), (!f || f[1] >= 74) && (f = c.match(/Chrome\/(\d+)/), f && (m = f[1]))), r.exports = m && +m;
              })
            ),
            /***/
            748: (
              /***/
              (function(r) {
                r.exports = [
                  "constructor",
                  "hasOwnProperty",
                  "isPrototypeOf",
                  "propertyIsEnumerable",
                  "toLocaleString",
                  "toString",
                  "valueOf"
                ];
              })
            ),
            /***/
            2109: (
              /***/
              (function(r, s, o) {
                var l = o(7854), c = o(1236).f, d = o(8880), p = o(1320), h = o(3505), f = o(9920), m = o(4705);
                r.exports = function(v, g) {
                  var y = v.target, S = v.global, E = v.stat, A, w, V, M, C, R;
                  if (S ? w = l : E ? w = l[y] || h(y, {}) : w = (l[y] || {}).prototype, w) for (V in g) {
                    if (C = g[V], v.noTargetGet ? (R = c(w, V), M = R && R.value) : M = w[V], A = m(S ? V : y + (E ? "." : "#") + V, v.forced), !A && M !== void 0) {
                      if (typeof C == typeof M) continue;
                      f(C, M);
                    }
                    (v.sham || M && M.sham) && d(C, "sham", !0), p(w, V, C, v);
                  }
                };
              })
            ),
            /***/
            7293: (
              /***/
              (function(r) {
                r.exports = function(s) {
                  try {
                    return !!s();
                  } catch {
                    return !0;
                  }
                };
              })
            ),
            /***/
            7007: (
              /***/
              (function(r, s, o) {
                o(4916);
                var l = o(1320), c = o(7293), d = o(5112), p = o(2261), h = o(8880), f = d("species"), m = !c(function() {
                  var E = /./;
                  return E.exec = function() {
                    var A = [];
                    return A.groups = { a: "7" }, A;
                  }, "".replace(E, "$<a>") !== "7";
                }), v = (function() {
                  return "a".replace(/./, "$0") === "$0";
                })(), g = d("replace"), y = (function() {
                  return /./[g] ? /./[g]("a", "$0") === "" : !1;
                })(), S = !c(function() {
                  var E = /(?:)/, A = E.exec;
                  E.exec = function() {
                    return A.apply(this, arguments);
                  };
                  var w = "ab".split(E);
                  return w.length !== 2 || w[0] !== "a" || w[1] !== "b";
                });
                r.exports = function(E, A, w, V) {
                  var M = d(E), C = !c(function() {
                    var K = {};
                    return K[M] = function() {
                      return 7;
                    }, ""[E](K) != 7;
                  }), R = C && !c(function() {
                    var K = !1, Y = /a/;
                    return E === "split" && (Y = {}, Y.constructor = {}, Y.constructor[f] = function() {
                      return Y;
                    }, Y.flags = "", Y[M] = /./[M]), Y.exec = function() {
                      return K = !0, null;
                    }, Y[M](""), !K;
                  });
                  if (!C || !R || E === "replace" && !(m && v && !y) || E === "split" && !S) {
                    var k = /./[M], $ = w(M, ""[E], function(K, Y, ae, J, he) {
                      return Y.exec === p ? C && !he ? { done: !0, value: k.call(Y, ae, J) } : { done: !0, value: K.call(ae, Y, J) } : { done: !1 };
                    }, {
                      REPLACE_KEEPS_$0: v,
                      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: y
                    }), B = $[0], z = $[1];
                    l(String.prototype, E, B), l(
                      RegExp.prototype,
                      M,
                      A == 2 ? function(K, Y) {
                        return z.call(K, this, Y);
                      } : function(K) {
                        return z.call(K, this);
                      }
                    );
                  }
                  V && h(RegExp.prototype[M], "sham", !0);
                };
              })
            ),
            /***/
            9974: (
              /***/
              (function(r, s, o) {
                var l = o(3099);
                r.exports = function(c, d, p) {
                  if (l(c), d === void 0) return c;
                  switch (p) {
                    case 0:
                      return function() {
                        return c.call(d);
                      };
                    case 1:
                      return function(h) {
                        return c.call(d, h);
                      };
                    case 2:
                      return function(h, f) {
                        return c.call(d, h, f);
                      };
                    case 3:
                      return function(h, f, m) {
                        return c.call(d, h, f, m);
                      };
                  }
                  return function() {
                    return c.apply(d, arguments);
                  };
                };
              })
            ),
            /***/
            5005: (
              /***/
              (function(r, s, o) {
                var l = o(857), c = o(7854), d = function(p) {
                  return typeof p == "function" ? p : void 0;
                };
                r.exports = function(p, h) {
                  return arguments.length < 2 ? d(l[p]) || d(c[p]) : l[p] && l[p][h] || c[p] && c[p][h];
                };
              })
            ),
            /***/
            1246: (
              /***/
              (function(r, s, o) {
                var l = o(648), c = o(7497), d = o(5112), p = d("iterator");
                r.exports = function(h) {
                  if (h != null) return h[p] || h["@@iterator"] || c[l(h)];
                };
              })
            ),
            /***/
            8554: (
              /***/
              (function(r, s, o) {
                var l = o(9670), c = o(1246);
                r.exports = function(d) {
                  var p = c(d);
                  if (typeof p != "function")
                    throw TypeError(String(d) + " is not iterable");
                  return l(p.call(d));
                };
              })
            ),
            /***/
            647: (
              /***/
              (function(r, s, o) {
                var l = o(7908), c = Math.floor, d = "".replace, p = /\$([$&'`]|\d\d?|<[^>]*>)/g, h = /\$([$&'`]|\d\d?)/g;
                r.exports = function(f, m, v, g, y, S) {
                  var E = v + f.length, A = g.length, w = h;
                  return y !== void 0 && (y = l(y), w = p), d.call(S, w, function(V, M) {
                    var C;
                    switch (M.charAt(0)) {
                      case "$":
                        return "$";
                      case "&":
                        return f;
                      case "`":
                        return m.slice(0, v);
                      case "'":
                        return m.slice(E);
                      case "<":
                        C = y[M.slice(1, -1)];
                        break;
                      default:
                        var R = +M;
                        if (R === 0) return V;
                        if (R > A) {
                          var k = c(R / 10);
                          return k === 0 ? V : k <= A ? g[k - 1] === void 0 ? M.charAt(1) : g[k - 1] + M.charAt(1) : V;
                        }
                        C = g[R - 1];
                    }
                    return C === void 0 ? "" : C;
                  });
                };
              })
            ),
            /***/
            7854: (
              /***/
              (function(r, s, o) {
                var l = function(c) {
                  return c && c.Math == Math && c;
                };
                r.exports = /* global globalThis -- safe */
                l(typeof globalThis == "object" && globalThis) || l(typeof window == "object" && window) || l(typeof self == "object" && self) || l(typeof o.g == "object" && o.g) || // eslint-disable-next-line no-new-func -- fallback
                /* @__PURE__ */ (function() {
                  return this;
                })() || Function("return this")();
              })
            ),
            /***/
            6656: (
              /***/
              (function(r) {
                var s = {}.hasOwnProperty;
                r.exports = function(o, l) {
                  return s.call(o, l);
                };
              })
            ),
            /***/
            3501: (
              /***/
              (function(r) {
                r.exports = {};
              })
            ),
            /***/
            490: (
              /***/
              (function(r, s, o) {
                var l = o(5005);
                r.exports = l("document", "documentElement");
              })
            ),
            /***/
            4664: (
              /***/
              (function(r, s, o) {
                var l = o(9781), c = o(7293), d = o(317);
                r.exports = !l && !c(function() {
                  return Object.defineProperty(d("div"), "a", {
                    get: function() {
                      return 7;
                    }
                  }).a != 7;
                });
              })
            ),
            /***/
            1179: (
              /***/
              (function(r) {
                var s = Math.abs, o = Math.pow, l = Math.floor, c = Math.log, d = Math.LN2, p = function(f, m, v) {
                  var g = new Array(v), y = v * 8 - m - 1, S = (1 << y) - 1, E = S >> 1, A = m === 23 ? o(2, -24) - o(2, -77) : 0, w = f < 0 || f === 0 && 1 / f < 0 ? 1 : 0, V = 0, M, C, R;
                  for (f = s(f), f != f || f === 1 / 0 ? (C = f != f ? 1 : 0, M = S) : (M = l(c(f) / d), f * (R = o(2, -M)) < 1 && (M--, R *= 2), M + E >= 1 ? f += A / R : f += A * o(2, 1 - E), f * R >= 2 && (M++, R /= 2), M + E >= S ? (C = 0, M = S) : M + E >= 1 ? (C = (f * R - 1) * o(2, m), M = M + E) : (C = f * o(2, E - 1) * o(2, m), M = 0)); m >= 8; g[V++] = C & 255, C /= 256, m -= 8) ;
                  for (M = M << m | C, y += m; y > 0; g[V++] = M & 255, M /= 256, y -= 8) ;
                  return g[--V] |= w * 128, g;
                }, h = function(f, m) {
                  var v = f.length, g = v * 8 - m - 1, y = (1 << g) - 1, S = y >> 1, E = g - 7, A = v - 1, w = f[A--], V = w & 127, M;
                  for (w >>= 7; E > 0; V = V * 256 + f[A], A--, E -= 8) ;
                  for (M = V & (1 << -E) - 1, V >>= -E, E += m; E > 0; M = M * 256 + f[A], A--, E -= 8) ;
                  if (V === 0)
                    V = 1 - S;
                  else {
                    if (V === y)
                      return M ? NaN : w ? -1 / 0 : 1 / 0;
                    M = M + o(2, m), V = V - S;
                  }
                  return (w ? -1 : 1) * M * o(2, V - m);
                };
                r.exports = {
                  pack: p,
                  unpack: h
                };
              })
            ),
            /***/
            8361: (
              /***/
              (function(r, s, o) {
                var l = o(7293), c = o(4326), d = "".split;
                r.exports = l(function() {
                  return !Object("z").propertyIsEnumerable(0);
                }) ? function(p) {
                  return c(p) == "String" ? d.call(p, "") : Object(p);
                } : Object;
              })
            ),
            /***/
            9587: (
              /***/
              (function(r, s, o) {
                var l = o(111), c = o(7674);
                r.exports = function(d, p, h) {
                  var f, m;
                  return (
                    // it can work only with native `setPrototypeOf`
                    c && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
                    typeof (f = p.constructor) == "function" && f !== h && l(m = f.prototype) && m !== h.prototype && c(d, m), d
                  );
                };
              })
            ),
            /***/
            2788: (
              /***/
              (function(r, s, o) {
                var l = o(5465), c = Function.toString;
                typeof l.inspectSource != "function" && (l.inspectSource = function(d) {
                  return c.call(d);
                }), r.exports = l.inspectSource;
              })
            ),
            /***/
            9909: (
              /***/
              (function(r, s, o) {
                var l = o(8536), c = o(7854), d = o(111), p = o(8880), h = o(6656), f = o(5465), m = o(6200), v = o(3501), g = c.WeakMap, y, S, E, A = function($) {
                  return E($) ? S($) : y($, {});
                }, w = function($) {
                  return function(B) {
                    var z;
                    if (!d(B) || (z = S(B)).type !== $)
                      throw TypeError("Incompatible receiver, " + $ + " required");
                    return z;
                  };
                };
                if (l) {
                  var V = f.state || (f.state = new g()), M = V.get, C = V.has, R = V.set;
                  y = function($, B) {
                    return B.facade = $, R.call(V, $, B), B;
                  }, S = function($) {
                    return M.call(V, $) || {};
                  }, E = function($) {
                    return C.call(V, $);
                  };
                } else {
                  var k = m("state");
                  v[k] = !0, y = function($, B) {
                    return B.facade = $, p($, k, B), B;
                  }, S = function($) {
                    return h($, k) ? $[k] : {};
                  }, E = function($) {
                    return h($, k);
                  };
                }
                r.exports = {
                  set: y,
                  get: S,
                  has: E,
                  enforce: A,
                  getterFor: w
                };
              })
            ),
            /***/
            7659: (
              /***/
              (function(r, s, o) {
                var l = o(5112), c = o(7497), d = l("iterator"), p = Array.prototype;
                r.exports = function(h) {
                  return h !== void 0 && (c.Array === h || p[d] === h);
                };
              })
            ),
            /***/
            3157: (
              /***/
              (function(r, s, o) {
                var l = o(4326);
                r.exports = Array.isArray || function(d) {
                  return l(d) == "Array";
                };
              })
            ),
            /***/
            4705: (
              /***/
              (function(r, s, o) {
                var l = o(7293), c = /#|\.prototype\./, d = function(v, g) {
                  var y = h[p(v)];
                  return y == m ? !0 : y == f ? !1 : typeof g == "function" ? l(g) : !!g;
                }, p = d.normalize = function(v) {
                  return String(v).replace(c, ".").toLowerCase();
                }, h = d.data = {}, f = d.NATIVE = "N", m = d.POLYFILL = "P";
                r.exports = d;
              })
            ),
            /***/
            111: (
              /***/
              (function(r) {
                r.exports = function(s) {
                  return typeof s == "object" ? s !== null : typeof s == "function";
                };
              })
            ),
            /***/
            1913: (
              /***/
              (function(r) {
                r.exports = !1;
              })
            ),
            /***/
            7850: (
              /***/
              (function(r, s, o) {
                var l = o(111), c = o(4326), d = o(5112), p = d("match");
                r.exports = function(h) {
                  var f;
                  return l(h) && ((f = h[p]) !== void 0 ? !!f : c(h) == "RegExp");
                };
              })
            ),
            /***/
            9212: (
              /***/
              (function(r, s, o) {
                var l = o(9670);
                r.exports = function(c) {
                  var d = c.return;
                  if (d !== void 0)
                    return l(d.call(c)).value;
                };
              })
            ),
            /***/
            3383: (
              /***/
              (function(r, s, o) {
                var l = o(7293), c = o(9518), d = o(8880), p = o(6656), h = o(5112), f = o(1913), m = h("iterator"), v = !1, g = function() {
                  return this;
                }, y, S, E;
                [].keys && (E = [].keys(), "next" in E ? (S = c(c(E)), S !== Object.prototype && (y = S)) : v = !0);
                var A = y == null || l(function() {
                  var w = {};
                  return y[m].call(w) !== w;
                });
                A && (y = {}), (!f || A) && !p(y, m) && d(y, m, g), r.exports = {
                  IteratorPrototype: y,
                  BUGGY_SAFARI_ITERATORS: v
                };
              })
            ),
            /***/
            7497: (
              /***/
              (function(r) {
                r.exports = {};
              })
            ),
            /***/
            133: (
              /***/
              (function(r, s, o) {
                var l = o(7293);
                r.exports = !!Object.getOwnPropertySymbols && !l(function() {
                  return !String(Symbol());
                });
              })
            ),
            /***/
            590: (
              /***/
              (function(r, s, o) {
                var l = o(7293), c = o(5112), d = o(1913), p = c("iterator");
                r.exports = !l(function() {
                  var h = new URL("b?a=1&b=2&c=3", "http://a"), f = h.searchParams, m = "";
                  return h.pathname = "c%20d", f.forEach(function(v, g) {
                    f.delete("b"), m += g + v;
                  }), d && !h.toJSON || !f.sort || h.href !== "http://a/c%20d?a=1&c=3" || f.get("c") !== "3" || String(new URLSearchParams("?a=1")) !== "a=1" || !f[p] || new URL("https://a@b").username !== "a" || new URLSearchParams(new URLSearchParams("a=b")).get("a") !== "b" || new URL("http://тест").host !== "xn--e1aybc" || new URL("http://a#б").hash !== "#%D0%B1" || m !== "a1c3" || new URL("http://x", void 0).host !== "x";
                });
              })
            ),
            /***/
            8536: (
              /***/
              (function(r, s, o) {
                var l = o(7854), c = o(2788), d = l.WeakMap;
                r.exports = typeof d == "function" && /native code/.test(c(d));
              })
            ),
            /***/
            1574: (
              /***/
              (function(r, s, o) {
                var l = o(9781), c = o(7293), d = o(1956), p = o(5181), h = o(5296), f = o(7908), m = o(8361), v = Object.assign, g = Object.defineProperty;
                r.exports = !v || c(function() {
                  if (l && v({ b: 1 }, v(g({}, "a", {
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
                  }), v({}, y)[E] != 7 || d(v({}, S)).join("") != A;
                }) ? function(S, E) {
                  for (var A = f(S), w = arguments.length, V = 1, M = p.f, C = h.f; w > V; )
                    for (var R = m(arguments[V++]), k = M ? d(R).concat(M(R)) : d(R), $ = k.length, B = 0, z; $ > B; )
                      z = k[B++], (!l || C.call(R, z)) && (A[z] = R[z]);
                  return A;
                } : v;
              })
            ),
            /***/
            30: (
              /***/
              (function(r, s, o) {
                var l = o(9670), c = o(6048), d = o(748), p = o(3501), h = o(490), f = o(317), m = o(6200), v = ">", g = "<", y = "prototype", S = "script", E = m("IE_PROTO"), A = function() {
                }, w = function(k) {
                  return g + S + v + k + g + "/" + S + v;
                }, V = function(k) {
                  k.write(w("")), k.close();
                  var $ = k.parentWindow.Object;
                  return k = null, $;
                }, M = function() {
                  var k = f("iframe"), $ = "java" + S + ":", B;
                  return k.style.display = "none", h.appendChild(k), k.src = String($), B = k.contentWindow.document, B.open(), B.write(w("document.F=Object")), B.close(), B.F;
                }, C, R = function() {
                  try {
                    C = document.domain && new ActiveXObject("htmlfile");
                  } catch {
                  }
                  R = C ? V(C) : M();
                  for (var k = d.length; k--; ) delete R[y][d[k]];
                  return R();
                };
                p[E] = !0, r.exports = Object.create || function($, B) {
                  var z;
                  return $ !== null ? (A[y] = l($), z = new A(), A[y] = null, z[E] = $) : z = R(), B === void 0 ? z : c(z, B);
                };
              })
            ),
            /***/
            6048: (
              /***/
              (function(r, s, o) {
                var l = o(9781), c = o(3070), d = o(9670), p = o(1956);
                r.exports = l ? Object.defineProperties : function(f, m) {
                  d(f);
                  for (var v = p(m), g = v.length, y = 0, S; g > y; ) c.f(f, S = v[y++], m[S]);
                  return f;
                };
              })
            ),
            /***/
            3070: (
              /***/
              (function(r, s, o) {
                var l = o(9781), c = o(4664), d = o(9670), p = o(7593), h = Object.defineProperty;
                s.f = l ? h : function(m, v, g) {
                  if (d(m), v = p(v, !0), d(g), c) try {
                    return h(m, v, g);
                  } catch {
                  }
                  if ("get" in g || "set" in g) throw TypeError("Accessors not supported");
                  return "value" in g && (m[v] = g.value), m;
                };
              })
            ),
            /***/
            1236: (
              /***/
              (function(r, s, o) {
                var l = o(9781), c = o(5296), d = o(9114), p = o(5656), h = o(7593), f = o(6656), m = o(4664), v = Object.getOwnPropertyDescriptor;
                s.f = l ? v : function(y, S) {
                  if (y = p(y), S = h(S, !0), m) try {
                    return v(y, S);
                  } catch {
                  }
                  if (f(y, S)) return d(!c.f.call(y, S), y[S]);
                };
              })
            ),
            /***/
            8006: (
              /***/
              (function(r, s, o) {
                var l = o(6324), c = o(748), d = c.concat("length", "prototype");
                s.f = Object.getOwnPropertyNames || function(h) {
                  return l(h, d);
                };
              })
            ),
            /***/
            5181: (
              /***/
              (function(r, s) {
                s.f = Object.getOwnPropertySymbols;
              })
            ),
            /***/
            9518: (
              /***/
              (function(r, s, o) {
                var l = o(6656), c = o(7908), d = o(6200), p = o(8544), h = d("IE_PROTO"), f = Object.prototype;
                r.exports = p ? Object.getPrototypeOf : function(m) {
                  return m = c(m), l(m, h) ? m[h] : typeof m.constructor == "function" && m instanceof m.constructor ? m.constructor.prototype : m instanceof Object ? f : null;
                };
              })
            ),
            /***/
            6324: (
              /***/
              (function(r, s, o) {
                var l = o(6656), c = o(5656), d = o(1318).indexOf, p = o(3501);
                r.exports = function(h, f) {
                  var m = c(h), v = 0, g = [], y;
                  for (y in m) !l(p, y) && l(m, y) && g.push(y);
                  for (; f.length > v; ) l(m, y = f[v++]) && (~d(g, y) || g.push(y));
                  return g;
                };
              })
            ),
            /***/
            1956: (
              /***/
              (function(r, s, o) {
                var l = o(6324), c = o(748);
                r.exports = Object.keys || function(p) {
                  return l(p, c);
                };
              })
            ),
            /***/
            5296: (
              /***/
              (function(r, s) {
                var o = {}.propertyIsEnumerable, l = Object.getOwnPropertyDescriptor, c = l && !o.call({ 1: 2 }, 1);
                s.f = c ? function(p) {
                  var h = l(this, p);
                  return !!h && h.enumerable;
                } : o;
              })
            ),
            /***/
            7674: (
              /***/
              (function(r, s, o) {
                var l = o(9670), c = o(6077);
                r.exports = Object.setPrototypeOf || ("__proto__" in {} ? (function() {
                  var d = !1, p = {}, h;
                  try {
                    h = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set, h.call(p, []), d = p instanceof Array;
                  } catch {
                  }
                  return function(m, v) {
                    return l(m), c(v), d ? h.call(m, v) : m.__proto__ = v, m;
                  };
                })() : void 0);
              })
            ),
            /***/
            288: (
              /***/
              (function(r, s, o) {
                var l = o(1694), c = o(648);
                r.exports = l ? {}.toString : function() {
                  return "[object " + c(this) + "]";
                };
              })
            ),
            /***/
            3887: (
              /***/
              (function(r, s, o) {
                var l = o(5005), c = o(8006), d = o(5181), p = o(9670);
                r.exports = l("Reflect", "ownKeys") || function(f) {
                  var m = c.f(p(f)), v = d.f;
                  return v ? m.concat(v(f)) : m;
                };
              })
            ),
            /***/
            857: (
              /***/
              (function(r, s, o) {
                var l = o(7854);
                r.exports = l;
              })
            ),
            /***/
            2248: (
              /***/
              (function(r, s, o) {
                var l = o(1320);
                r.exports = function(c, d, p) {
                  for (var h in d) l(c, h, d[h], p);
                  return c;
                };
              })
            ),
            /***/
            1320: (
              /***/
              (function(r, s, o) {
                var l = o(7854), c = o(8880), d = o(6656), p = o(3505), h = o(2788), f = o(9909), m = f.get, v = f.enforce, g = String(String).split("String");
                (r.exports = function(y, S, E, A) {
                  var w = A ? !!A.unsafe : !1, V = A ? !!A.enumerable : !1, M = A ? !!A.noTargetGet : !1, C;
                  if (typeof E == "function" && (typeof S == "string" && !d(E, "name") && c(E, "name", S), C = v(E), C.source || (C.source = g.join(typeof S == "string" ? S : ""))), y === l) {
                    V ? y[S] = E : p(S, E);
                    return;
                  } else w ? !M && y[S] && (V = !0) : delete y[S];
                  V ? y[S] = E : c(y, S, E);
                })(Function.prototype, "toString", function() {
                  return typeof this == "function" && m(this).source || h(this);
                });
              })
            ),
            /***/
            7651: (
              /***/
              (function(r, s, o) {
                var l = o(4326), c = o(2261);
                r.exports = function(d, p) {
                  var h = d.exec;
                  if (typeof h == "function") {
                    var f = h.call(d, p);
                    if (typeof f != "object")
                      throw TypeError("RegExp exec method returned something other than an Object or null");
                    return f;
                  }
                  if (l(d) !== "RegExp")
                    throw TypeError("RegExp#exec called on incompatible receiver");
                  return c.call(d, p);
                };
              })
            ),
            /***/
            2261: (
              /***/
              (function(r, s, o) {
                var l = o(7066), c = o(2999), d = RegExp.prototype.exec, p = String.prototype.replace, h = d, f = (function() {
                  var y = /a/, S = /b*/g;
                  return d.call(y, "a"), d.call(S, "a"), y.lastIndex !== 0 || S.lastIndex !== 0;
                })(), m = c.UNSUPPORTED_Y || c.BROKEN_CARET, v = /()??/.exec("")[1] !== void 0, g = f || v || m;
                g && (h = function(S) {
                  var E = this, A, w, V, M, C = m && E.sticky, R = l.call(E), k = E.source, $ = 0, B = S;
                  return C && (R = R.replace("y", ""), R.indexOf("g") === -1 && (R += "g"), B = String(S).slice(E.lastIndex), E.lastIndex > 0 && (!E.multiline || E.multiline && S[E.lastIndex - 1] !== `
`) && (k = "(?: " + k + ")", B = " " + B, $++), w = new RegExp("^(?:" + k + ")", R)), v && (w = new RegExp("^" + k + "$(?!\\s)", R)), f && (A = E.lastIndex), V = d.call(C ? w : E, B), C ? V ? (V.input = V.input.slice($), V[0] = V[0].slice($), V.index = E.lastIndex, E.lastIndex += V[0].length) : E.lastIndex = 0 : f && V && (E.lastIndex = E.global ? V.index + V[0].length : A), v && V && V.length > 1 && p.call(V[0], w, function() {
                    for (M = 1; M < arguments.length - 2; M++)
                      arguments[M] === void 0 && (V[M] = void 0);
                  }), V;
                }), r.exports = h;
              })
            ),
            /***/
            7066: (
              /***/
              (function(r, s, o) {
                var l = o(9670);
                r.exports = function() {
                  var c = l(this), d = "";
                  return c.global && (d += "g"), c.ignoreCase && (d += "i"), c.multiline && (d += "m"), c.dotAll && (d += "s"), c.unicode && (d += "u"), c.sticky && (d += "y"), d;
                };
              })
            ),
            /***/
            2999: (
              /***/
              (function(r, s, o) {
                var l = o(7293);
                function c(d, p) {
                  return RegExp(d, p);
                }
                s.UNSUPPORTED_Y = l(function() {
                  var d = c("a", "y");
                  return d.lastIndex = 2, d.exec("abcd") != null;
                }), s.BROKEN_CARET = l(function() {
                  var d = c("^r", "gy");
                  return d.lastIndex = 2, d.exec("str") != null;
                });
              })
            ),
            /***/
            4488: (
              /***/
              (function(r) {
                r.exports = function(s) {
                  if (s == null) throw TypeError("Can't call method on " + s);
                  return s;
                };
              })
            ),
            /***/
            3505: (
              /***/
              (function(r, s, o) {
                var l = o(7854), c = o(8880);
                r.exports = function(d, p) {
                  try {
                    c(l, d, p);
                  } catch {
                    l[d] = p;
                  }
                  return p;
                };
              })
            ),
            /***/
            6340: (
              /***/
              (function(r, s, o) {
                var l = o(5005), c = o(3070), d = o(5112), p = o(9781), h = d("species");
                r.exports = function(f) {
                  var m = l(f), v = c.f;
                  p && m && !m[h] && v(m, h, {
                    configurable: !0,
                    get: function() {
                      return this;
                    }
                  });
                };
              })
            ),
            /***/
            8003: (
              /***/
              (function(r, s, o) {
                var l = o(3070).f, c = o(6656), d = o(5112), p = d("toStringTag");
                r.exports = function(h, f, m) {
                  h && !c(h = m ? h : h.prototype, p) && l(h, p, { configurable: !0, value: f });
                };
              })
            ),
            /***/
            6200: (
              /***/
              (function(r, s, o) {
                var l = o(2309), c = o(9711), d = l("keys");
                r.exports = function(p) {
                  return d[p] || (d[p] = c(p));
                };
              })
            ),
            /***/
            5465: (
              /***/
              (function(r, s, o) {
                var l = o(7854), c = o(3505), d = "__core-js_shared__", p = l[d] || c(d, {});
                r.exports = p;
              })
            ),
            /***/
            2309: (
              /***/
              (function(r, s, o) {
                var l = o(1913), c = o(5465);
                (r.exports = function(d, p) {
                  return c[d] || (c[d] = p !== void 0 ? p : {});
                })("versions", []).push({
                  version: "3.9.0",
                  mode: l ? "pure" : "global",
                  copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
                });
              })
            ),
            /***/
            6707: (
              /***/
              (function(r, s, o) {
                var l = o(9670), c = o(3099), d = o(5112), p = d("species");
                r.exports = function(h, f) {
                  var m = l(h).constructor, v;
                  return m === void 0 || (v = l(m)[p]) == null ? f : c(v);
                };
              })
            ),
            /***/
            8710: (
              /***/
              (function(r, s, o) {
                var l = o(9958), c = o(4488), d = function(p) {
                  return function(h, f) {
                    var m = String(c(h)), v = l(f), g = m.length, y, S;
                    return v < 0 || v >= g ? p ? "" : void 0 : (y = m.charCodeAt(v), y < 55296 || y > 56319 || v + 1 === g || (S = m.charCodeAt(v + 1)) < 56320 || S > 57343 ? p ? m.charAt(v) : y : p ? m.slice(v, v + 2) : (y - 55296 << 10) + (S - 56320) + 65536);
                  };
                };
                r.exports = {
                  // `String.prototype.codePointAt` method
                  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
                  codeAt: d(!1),
                  // `String.prototype.at` method
                  // https://github.com/mathiasbynens/String.prototype.at
                  charAt: d(!0)
                };
              })
            ),
            /***/
            3197: (
              /***/
              (function(r) {
                var s = 2147483647, o = 36, l = 1, c = 26, d = 38, p = 700, h = 72, f = 128, m = "-", v = /[^\0-\u007E]/, g = /[.\u3002\uFF0E\uFF61]/g, y = "Overflow: input needs wider integers to process", S = o - l, E = Math.floor, A = String.fromCharCode, w = function(R) {
                  for (var k = [], $ = 0, B = R.length; $ < B; ) {
                    var z = R.charCodeAt($++);
                    if (z >= 55296 && z <= 56319 && $ < B) {
                      var K = R.charCodeAt($++);
                      (K & 64512) == 56320 ? k.push(((z & 1023) << 10) + (K & 1023) + 65536) : (k.push(z), $--);
                    } else
                      k.push(z);
                  }
                  return k;
                }, V = function(R) {
                  return R + 22 + 75 * (R < 26);
                }, M = function(R, k, $) {
                  var B = 0;
                  for (R = $ ? E(R / p) : R >> 1, R += E(R / k); R > S * c >> 1; B += o)
                    R = E(R / S);
                  return E(B + (S + 1) * R / (R + d));
                }, C = function(R) {
                  var k = [];
                  R = w(R);
                  var $ = R.length, B = f, z = 0, K = h, Y, ae;
                  for (Y = 0; Y < R.length; Y++)
                    ae = R[Y], ae < 128 && k.push(A(ae));
                  var J = k.length, he = J;
                  for (J && k.push(m); he < $; ) {
                    var ce = s;
                    for (Y = 0; Y < R.length; Y++)
                      ae = R[Y], ae >= B && ae < ce && (ce = ae);
                    var ye = he + 1;
                    if (ce - B > E((s - z) / ye))
                      throw RangeError(y);
                    for (z += (ce - B) * ye, B = ce, Y = 0; Y < R.length; Y++) {
                      if (ae = R[Y], ae < B && ++z > s)
                        throw RangeError(y);
                      if (ae == B) {
                        for (var Ce = z, Ee = o; ; Ee += o) {
                          var Ue = Ee <= K ? l : Ee >= K + c ? c : Ee - K;
                          if (Ce < Ue) break;
                          var Ne = Ce - Ue, be = o - Ue;
                          k.push(A(V(Ue + Ne % be))), Ce = E(Ne / be);
                        }
                        k.push(A(V(Ce))), K = M(z, ye, he == J), z = 0, ++he;
                      }
                    }
                    ++z, ++B;
                  }
                  return k.join("");
                };
                r.exports = function(R) {
                  var k = [], $ = R.toLowerCase().replace(g, ".").split("."), B, z;
                  for (B = 0; B < $.length; B++)
                    z = $[B], k.push(v.test(z) ? "xn--" + C(z) : z);
                  return k.join(".");
                };
              })
            ),
            /***/
            6091: (
              /***/
              (function(r, s, o) {
                var l = o(7293), c = o(1361), d = "​᠎";
                r.exports = function(p) {
                  return l(function() {
                    return !!c[p]() || d[p]() != d || c[p].name !== p;
                  });
                };
              })
            ),
            /***/
            3111: (
              /***/
              (function(r, s, o) {
                var l = o(4488), c = o(1361), d = "[" + c + "]", p = RegExp("^" + d + d + "*"), h = RegExp(d + d + "*$"), f = function(m) {
                  return function(v) {
                    var g = String(l(v));
                    return m & 1 && (g = g.replace(p, "")), m & 2 && (g = g.replace(h, "")), g;
                  };
                };
                r.exports = {
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
              })
            ),
            /***/
            1400: (
              /***/
              (function(r, s, o) {
                var l = o(9958), c = Math.max, d = Math.min;
                r.exports = function(p, h) {
                  var f = l(p);
                  return f < 0 ? c(f + h, 0) : d(f, h);
                };
              })
            ),
            /***/
            7067: (
              /***/
              (function(r, s, o) {
                var l = o(9958), c = o(7466);
                r.exports = function(d) {
                  if (d === void 0) return 0;
                  var p = l(d), h = c(p);
                  if (p !== h) throw RangeError("Wrong length or index");
                  return h;
                };
              })
            ),
            /***/
            5656: (
              /***/
              (function(r, s, o) {
                var l = o(8361), c = o(4488);
                r.exports = function(d) {
                  return l(c(d));
                };
              })
            ),
            /***/
            9958: (
              /***/
              (function(r) {
                var s = Math.ceil, o = Math.floor;
                r.exports = function(l) {
                  return isNaN(l = +l) ? 0 : (l > 0 ? o : s)(l);
                };
              })
            ),
            /***/
            7466: (
              /***/
              (function(r, s, o) {
                var l = o(9958), c = Math.min;
                r.exports = function(d) {
                  return d > 0 ? c(l(d), 9007199254740991) : 0;
                };
              })
            ),
            /***/
            7908: (
              /***/
              (function(r, s, o) {
                var l = o(4488);
                r.exports = function(c) {
                  return Object(l(c));
                };
              })
            ),
            /***/
            4590: (
              /***/
              (function(r, s, o) {
                var l = o(3002);
                r.exports = function(c, d) {
                  var p = l(c);
                  if (p % d) throw RangeError("Wrong offset");
                  return p;
                };
              })
            ),
            /***/
            3002: (
              /***/
              (function(r, s, o) {
                var l = o(9958);
                r.exports = function(c) {
                  var d = l(c);
                  if (d < 0) throw RangeError("The argument can't be less than 0");
                  return d;
                };
              })
            ),
            /***/
            7593: (
              /***/
              (function(r, s, o) {
                var l = o(111);
                r.exports = function(c, d) {
                  if (!l(c)) return c;
                  var p, h;
                  if (d && typeof (p = c.toString) == "function" && !l(h = p.call(c)) || typeof (p = c.valueOf) == "function" && !l(h = p.call(c)) || !d && typeof (p = c.toString) == "function" && !l(h = p.call(c))) return h;
                  throw TypeError("Can't convert object to primitive value");
                };
              })
            ),
            /***/
            1694: (
              /***/
              (function(r, s, o) {
                var l = o(5112), c = l("toStringTag"), d = {};
                d[c] = "z", r.exports = String(d) === "[object z]";
              })
            ),
            /***/
            9843: (
              /***/
              (function(r, s, o) {
                var l = o(2109), c = o(7854), d = o(9781), p = o(3832), h = o(260), f = o(3331), m = o(5787), v = o(9114), g = o(8880), y = o(7466), S = o(7067), E = o(4590), A = o(7593), w = o(6656), V = o(648), M = o(111), C = o(30), R = o(7674), k = o(8006).f, $ = o(7321), B = o(2092).forEach, z = o(6340), K = o(3070), Y = o(1236), ae = o(9909), J = o(9587), he = ae.get, ce = ae.set, ye = K.f, Ce = Y.f, Ee = Math.round, Ue = c.RangeError, Ne = f.ArrayBuffer, be = f.DataView, xe = h.NATIVE_ARRAY_BUFFER_VIEWS, P = h.TYPED_ARRAY_TAG, D = h.TypedArray, T = h.TypedArrayPrototype, L = h.aTypedArrayConstructor, b = h.isTypedArray, x = "BYTES_PER_ELEMENT", I = "Wrong length", N = function(ee, ne) {
                  for (var le = 0, ge = ne.length, Pe = new (L(ee))(ge); ge > le; ) Pe[le] = ne[le++];
                  return Pe;
                }, U = function(ee, ne) {
                  ye(ee, ne, { get: function() {
                    return he(this)[ne];
                  } });
                }, H = function(ee) {
                  var ne;
                  return ee instanceof Ne || (ne = V(ee)) == "ArrayBuffer" || ne == "SharedArrayBuffer";
                }, Q = function(ee, ne) {
                  return b(ee) && typeof ne != "symbol" && ne in ee && String(+ne) == String(ne);
                }, q = function(ne, le) {
                  return Q(ne, le = A(le, !0)) ? v(2, ne[le]) : Ce(ne, le);
                }, Z = function(ne, le, ge) {
                  return Q(ne, le = A(le, !0)) && M(ge) && w(ge, "value") && !w(ge, "get") && !w(ge, "set") && !ge.configurable && (!w(ge, "writable") || ge.writable) && (!w(ge, "enumerable") || ge.enumerable) ? (ne[le] = ge.value, ne) : ye(ne, le, ge);
                };
                d ? (xe || (Y.f = q, K.f = Z, U(T, "buffer"), U(T, "byteOffset"), U(T, "byteLength"), U(T, "length")), l({ target: "Object", stat: !0, forced: !xe }, {
                  getOwnPropertyDescriptor: q,
                  defineProperty: Z
                }), r.exports = function(ee, ne, le) {
                  var ge = ee.match(/\d+$/)[0] / 8, Pe = ee + (le ? "Clamped" : "") + "Array", Ke = "get" + ee, tt = "set" + ee, qe = c[Pe], G = qe, X = G && G.prototype, oe = {}, de = function(Re, Te) {
                    var ze = he(Re);
                    return ze.view[Ke](Te * ge + ze.byteOffset, !0);
                  }, we = function(Re, Te, ze) {
                    var Ie = he(Re);
                    le && (ze = (ze = Ee(ze)) < 0 ? 0 : ze > 255 ? 255 : ze & 255), Ie.view[tt](Te * ge + Ie.byteOffset, ze, !0);
                  }, je = function(Re, Te) {
                    ye(Re, Te, {
                      get: function() {
                        return de(this, Te);
                      },
                      set: function(ze) {
                        return we(this, Te, ze);
                      },
                      enumerable: !0
                    });
                  };
                  xe ? p && (G = ne(function(Re, Te, ze, Ie) {
                    return m(Re, G, Pe), J((function() {
                      return M(Te) ? H(Te) ? Ie !== void 0 ? new qe(Te, E(ze, ge), Ie) : ze !== void 0 ? new qe(Te, E(ze, ge)) : new qe(Te) : b(Te) ? N(G, Te) : $.call(G, Te) : new qe(S(Te));
                    })(), Re, G);
                  }), R && R(G, D), B(k(qe), function(Re) {
                    Re in G || g(G, Re, qe[Re]);
                  }), G.prototype = X) : (G = ne(function(Re, Te, ze, Ie) {
                    m(Re, G, Pe);
                    var Ae = 0, Me = 0, He, Ve, at;
                    if (!M(Te))
                      at = S(Te), Ve = at * ge, He = new Ne(Ve);
                    else if (H(Te)) {
                      He = Te, Me = E(ze, ge);
                      var Wt = Te.byteLength;
                      if (Ie === void 0) {
                        if (Wt % ge || (Ve = Wt - Me, Ve < 0)) throw Ue(I);
                      } else if (Ve = y(Ie) * ge, Ve + Me > Wt) throw Ue(I);
                      at = Ve / ge;
                    } else return b(Te) ? N(G, Te) : $.call(G, Te);
                    for (ce(Re, {
                      buffer: He,
                      byteOffset: Me,
                      byteLength: Ve,
                      length: at,
                      view: new be(He)
                    }); Ae < at; ) je(Re, Ae++);
                  }), R && R(G, D), X = G.prototype = C(T)), X.constructor !== G && g(X, "constructor", G), P && g(X, P, Pe), oe[Pe] = G, l({
                    global: !0,
                    forced: G != qe,
                    sham: !xe
                  }, oe), x in G || g(G, x, ge), x in X || g(X, x, ge), z(Pe);
                }) : r.exports = function() {
                };
              })
            ),
            /***/
            3832: (
              /***/
              (function(r, s, o) {
                var l = o(7854), c = o(7293), d = o(7072), p = o(260).NATIVE_ARRAY_BUFFER_VIEWS, h = l.ArrayBuffer, f = l.Int8Array;
                r.exports = !p || !c(function() {
                  f(1);
                }) || !c(function() {
                  new f(-1);
                }) || !d(function(m) {
                  new f(), new f(null), new f(1.5), new f(m);
                }, !0) || c(function() {
                  return new f(new h(2), 1, void 0).length !== 1;
                });
              })
            ),
            /***/
            3074: (
              /***/
              (function(r, s, o) {
                var l = o(260).aTypedArrayConstructor, c = o(6707);
                r.exports = function(d, p) {
                  for (var h = c(d, d.constructor), f = 0, m = p.length, v = new (l(h))(m); m > f; ) v[f] = p[f++];
                  return v;
                };
              })
            ),
            /***/
            7321: (
              /***/
              (function(r, s, o) {
                var l = o(7908), c = o(7466), d = o(1246), p = o(7659), h = o(9974), f = o(260).aTypedArrayConstructor;
                r.exports = function(v) {
                  var g = l(v), y = arguments.length, S = y > 1 ? arguments[1] : void 0, E = S !== void 0, A = d(g), w, V, M, C, R, k;
                  if (A != null && !p(A))
                    for (R = A.call(g), k = R.next, g = []; !(C = k.call(R)).done; )
                      g.push(C.value);
                  for (E && y > 2 && (S = h(S, arguments[2], 2)), V = c(g.length), M = new (f(this))(V), w = 0; V > w; w++)
                    M[w] = E ? S(g[w], w) : g[w];
                  return M;
                };
              })
            ),
            /***/
            9711: (
              /***/
              (function(r) {
                var s = 0, o = Math.random();
                r.exports = function(l) {
                  return "Symbol(" + String(l === void 0 ? "" : l) + ")_" + (++s + o).toString(36);
                };
              })
            ),
            /***/
            3307: (
              /***/
              (function(r, s, o) {
                var l = o(133);
                r.exports = l && !Symbol.sham && typeof Symbol.iterator == "symbol";
              })
            ),
            /***/
            5112: (
              /***/
              (function(r, s, o) {
                var l = o(7854), c = o(2309), d = o(6656), p = o(9711), h = o(133), f = o(3307), m = c("wks"), v = l.Symbol, g = f ? v : v && v.withoutSetter || p;
                r.exports = function(y) {
                  return d(m, y) || (h && d(v, y) ? m[y] = v[y] : m[y] = g("Symbol." + y)), m[y];
                };
              })
            ),
            /***/
            1361: (
              /***/
              (function(r) {
                r.exports = `	
\v\f\r                　\u2028\u2029\uFEFF`;
              })
            ),
            /***/
            8264: (
              /***/
              (function(r, s, o) {
                var l = o(2109), c = o(7854), d = o(3331), p = o(6340), h = "ArrayBuffer", f = d[h], m = c[h];
                l({ global: !0, forced: m !== f }, {
                  ArrayBuffer: f
                }), p(h);
              })
            ),
            /***/
            2222: (
              /***/
              (function(r, s, o) {
                var l = o(2109), c = o(7293), d = o(3157), p = o(111), h = o(7908), f = o(7466), m = o(6135), v = o(5417), g = o(1194), y = o(5112), S = o(7392), E = y("isConcatSpreadable"), A = 9007199254740991, w = "Maximum allowed index exceeded", V = S >= 51 || !c(function() {
                  var k = [];
                  return k[E] = !1, k.concat()[0] !== k;
                }), M = g("concat"), C = function(k) {
                  if (!p(k)) return !1;
                  var $ = k[E];
                  return $ !== void 0 ? !!$ : d(k);
                }, R = !V || !M;
                l({ target: "Array", proto: !0, forced: R }, {
                  // eslint-disable-next-line no-unused-vars -- required for `.length`
                  concat: function($) {
                    var B = h(this), z = v(B, 0), K = 0, Y, ae, J, he, ce;
                    for (Y = -1, J = arguments.length; Y < J; Y++)
                      if (ce = Y === -1 ? B : arguments[Y], C(ce)) {
                        if (he = f(ce.length), K + he > A) throw TypeError(w);
                        for (ae = 0; ae < he; ae++, K++) ae in ce && m(z, K, ce[ae]);
                      } else {
                        if (K >= A) throw TypeError(w);
                        m(z, K++, ce);
                      }
                    return z.length = K, z;
                  }
                });
              })
            ),
            /***/
            7327: (
              /***/
              (function(r, s, o) {
                var l = o(2109), c = o(2092).filter, d = o(1194), p = d("filter");
                l({ target: "Array", proto: !0, forced: !p }, {
                  filter: function(f) {
                    return c(this, f, arguments.length > 1 ? arguments[1] : void 0);
                  }
                });
              })
            ),
            /***/
            2772: (
              /***/
              (function(r, s, o) {
                var l = o(2109), c = o(1318).indexOf, d = o(9341), p = [].indexOf, h = !!p && 1 / [1].indexOf(1, -0) < 0, f = d("indexOf");
                l({ target: "Array", proto: !0, forced: h || !f }, {
                  indexOf: function(v) {
                    return h ? p.apply(this, arguments) || 0 : c(this, v, arguments.length > 1 ? arguments[1] : void 0);
                  }
                });
              })
            ),
            /***/
            6992: (
              /***/
              (function(r, s, o) {
                var l = o(5656), c = o(1223), d = o(7497), p = o(9909), h = o(654), f = "Array Iterator", m = p.set, v = p.getterFor(f);
                r.exports = h(Array, "Array", function(g, y) {
                  m(this, {
                    type: f,
                    target: l(g),
                    // target
                    index: 0,
                    // next index
                    kind: y
                    // kind
                  });
                }, function() {
                  var g = v(this), y = g.target, S = g.kind, E = g.index++;
                  return !y || E >= y.length ? (g.target = void 0, { value: void 0, done: !0 }) : S == "keys" ? { value: E, done: !1 } : S == "values" ? { value: y[E], done: !1 } : { value: [E, y[E]], done: !1 };
                }, "values"), d.Arguments = d.Array, c("keys"), c("values"), c("entries");
              })
            ),
            /***/
            1249: (
              /***/
              (function(r, s, o) {
                var l = o(2109), c = o(2092).map, d = o(1194), p = d("map");
                l({ target: "Array", proto: !0, forced: !p }, {
                  map: function(f) {
                    return c(this, f, arguments.length > 1 ? arguments[1] : void 0);
                  }
                });
              })
            ),
            /***/
            7042: (
              /***/
              (function(r, s, o) {
                var l = o(2109), c = o(111), d = o(3157), p = o(1400), h = o(7466), f = o(5656), m = o(6135), v = o(5112), g = o(1194), y = g("slice"), S = v("species"), E = [].slice, A = Math.max;
                l({ target: "Array", proto: !0, forced: !y }, {
                  slice: function(V, M) {
                    var C = f(this), R = h(C.length), k = p(V, R), $ = p(M === void 0 ? R : M, R), B, z, K;
                    if (d(C) && (B = C.constructor, typeof B == "function" && (B === Array || d(B.prototype)) ? B = void 0 : c(B) && (B = B[S], B === null && (B = void 0)), B === Array || B === void 0))
                      return E.call(C, k, $);
                    for (z = new (B === void 0 ? Array : B)(A($ - k, 0)), K = 0; k < $; k++, K++) k in C && m(z, K, C[k]);
                    return z.length = K, z;
                  }
                });
              })
            ),
            /***/
            561: (
              /***/
              (function(r, s, o) {
                var l = o(2109), c = o(1400), d = o(9958), p = o(7466), h = o(7908), f = o(5417), m = o(6135), v = o(1194), g = v("splice"), y = Math.max, S = Math.min, E = 9007199254740991, A = "Maximum allowed length exceeded";
                l({ target: "Array", proto: !0, forced: !g }, {
                  splice: function(V, M) {
                    var C = h(this), R = p(C.length), k = c(V, R), $ = arguments.length, B, z, K, Y, ae, J;
                    if ($ === 0 ? B = z = 0 : $ === 1 ? (B = 0, z = R - k) : (B = $ - 2, z = S(y(d(M), 0), R - k)), R + B - z > E)
                      throw TypeError(A);
                    for (K = f(C, z), Y = 0; Y < z; Y++)
                      ae = k + Y, ae in C && m(K, Y, C[ae]);
                    if (K.length = z, B < z) {
                      for (Y = k; Y < R - z; Y++)
                        ae = Y + z, J = Y + B, ae in C ? C[J] = C[ae] : delete C[J];
                      for (Y = R; Y > R - z + B; Y--) delete C[Y - 1];
                    } else if (B > z)
                      for (Y = R - z; Y > k; Y--)
                        ae = Y + z - 1, J = Y + B - 1, ae in C ? C[J] = C[ae] : delete C[J];
                    for (Y = 0; Y < B; Y++)
                      C[Y + k] = arguments[Y + 2];
                    return C.length = R - z + B, K;
                  }
                });
              })
            ),
            /***/
            8309: (
              /***/
              (function(r, s, o) {
                var l = o(9781), c = o(3070).f, d = Function.prototype, p = d.toString, h = /^\s*function ([^ (]*)/, f = "name";
                l && !(f in d) && c(d, f, {
                  configurable: !0,
                  get: function() {
                    try {
                      return p.call(this).match(h)[1];
                    } catch {
                      return "";
                    }
                  }
                });
              })
            ),
            /***/
            489: (
              /***/
              (function(r, s, o) {
                var l = o(2109), c = o(7293), d = o(7908), p = o(9518), h = o(8544), f = c(function() {
                  p(1);
                });
                l({ target: "Object", stat: !0, forced: f, sham: !h }, {
                  getPrototypeOf: function(v) {
                    return p(d(v));
                  }
                });
              })
            ),
            /***/
            1539: (
              /***/
              (function(r, s, o) {
                var l = o(1694), c = o(1320), d = o(288);
                l || c(Object.prototype, "toString", d, { unsafe: !0 });
              })
            ),
            /***/
            4916: (
              /***/
              (function(r, s, o) {
                var l = o(2109), c = o(2261);
                l({ target: "RegExp", proto: !0, forced: /./.exec !== c }, {
                  exec: c
                });
              })
            ),
            /***/
            9714: (
              /***/
              (function(r, s, o) {
                var l = o(1320), c = o(9670), d = o(7293), p = o(7066), h = "toString", f = RegExp.prototype, m = f[h], v = d(function() {
                  return m.call({ source: "a", flags: "b" }) != "/a/b";
                }), g = m.name != h;
                (v || g) && l(RegExp.prototype, h, function() {
                  var S = c(this), E = String(S.source), A = S.flags, w = String(A === void 0 && S instanceof RegExp && !("flags" in f) ? p.call(S) : A);
                  return "/" + E + "/" + w;
                }, { unsafe: !0 });
              })
            ),
            /***/
            8783: (
              /***/
              (function(r, s, o) {
                var l = o(8710).charAt, c = o(9909), d = o(654), p = "String Iterator", h = c.set, f = c.getterFor(p);
                d(String, "String", function(m) {
                  h(this, {
                    type: p,
                    string: String(m),
                    index: 0
                  });
                }, function() {
                  var v = f(this), g = v.string, y = v.index, S;
                  return y >= g.length ? { value: void 0, done: !0 } : (S = l(g, y), v.index += S.length, { value: S, done: !1 });
                });
              })
            ),
            /***/
            4723: (
              /***/
              (function(r, s, o) {
                var l = o(7007), c = o(9670), d = o(7466), p = o(4488), h = o(1530), f = o(7651);
                l("match", 1, function(m, v, g) {
                  return [
                    // `String.prototype.match` method
                    // https://tc39.es/ecma262/#sec-string.prototype.match
                    function(S) {
                      var E = p(this), A = S == null ? void 0 : S[m];
                      return A !== void 0 ? A.call(S, E) : new RegExp(S)[m](String(E));
                    },
                    // `RegExp.prototype[@@match]` method
                    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
                    function(y) {
                      var S = g(v, y, this);
                      if (S.done) return S.value;
                      var E = c(y), A = String(this);
                      if (!E.global) return f(E, A);
                      var w = E.unicode;
                      E.lastIndex = 0;
                      for (var V = [], M = 0, C; (C = f(E, A)) !== null; ) {
                        var R = String(C[0]);
                        V[M] = R, R === "" && (E.lastIndex = h(A, d(E.lastIndex), w)), M++;
                      }
                      return M === 0 ? null : V;
                    }
                  ];
                });
              })
            ),
            /***/
            5306: (
              /***/
              (function(r, s, o) {
                var l = o(7007), c = o(9670), d = o(7466), p = o(9958), h = o(4488), f = o(1530), m = o(647), v = o(7651), g = Math.max, y = Math.min, S = function(E) {
                  return E === void 0 ? E : String(E);
                };
                l("replace", 2, function(E, A, w, V) {
                  var M = V.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE, C = V.REPLACE_KEEPS_$0, R = M ? "$" : "$0";
                  return [
                    // `String.prototype.replace` method
                    // https://tc39.es/ecma262/#sec-string.prototype.replace
                    function($, B) {
                      var z = h(this), K = $ == null ? void 0 : $[E];
                      return K !== void 0 ? K.call($, z, B) : A.call(String(z), $, B);
                    },
                    // `RegExp.prototype[@@replace]` method
                    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
                    function(k, $) {
                      if (!M && C || typeof $ == "string" && $.indexOf(R) === -1) {
                        var B = w(A, k, this, $);
                        if (B.done) return B.value;
                      }
                      var z = c(k), K = String(this), Y = typeof $ == "function";
                      Y || ($ = String($));
                      var ae = z.global;
                      if (ae) {
                        var J = z.unicode;
                        z.lastIndex = 0;
                      }
                      for (var he = []; ; ) {
                        var ce = v(z, K);
                        if (ce === null || (he.push(ce), !ae)) break;
                        var ye = String(ce[0]);
                        ye === "" && (z.lastIndex = f(K, d(z.lastIndex), J));
                      }
                      for (var Ce = "", Ee = 0, Ue = 0; Ue < he.length; Ue++) {
                        ce = he[Ue];
                        for (var Ne = String(ce[0]), be = g(y(p(ce.index), K.length), 0), xe = [], P = 1; P < ce.length; P++) xe.push(S(ce[P]));
                        var D = ce.groups;
                        if (Y) {
                          var T = [Ne].concat(xe, be, K);
                          D !== void 0 && T.push(D);
                          var L = String($.apply(void 0, T));
                        } else
                          L = m(Ne, K, be, xe, D, $);
                        be >= Ee && (Ce += K.slice(Ee, be) + L, Ee = be + Ne.length);
                      }
                      return Ce + K.slice(Ee);
                    }
                  ];
                });
              })
            ),
            /***/
            3123: (
              /***/
              (function(r, s, o) {
                var l = o(7007), c = o(7850), d = o(9670), p = o(4488), h = o(6707), f = o(1530), m = o(7466), v = o(7651), g = o(2261), y = o(7293), S = [].push, E = Math.min, A = 4294967295, w = !y(function() {
                  return !RegExp(A, "y");
                });
                l("split", 2, function(V, M, C) {
                  var R;
                  return "abbc".split(/(b)*/)[1] == "c" || // eslint-disable-next-line regexp/no-empty-group -- required for testing
                  "test".split(/(?:)/, -1).length != 4 || "ab".split(/(?:ab)*/).length != 2 || ".".split(/(.?)(.?)/).length != 4 || // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
                  ".".split(/()()/).length > 1 || "".split(/.?/).length ? R = function(k, $) {
                    var B = String(p(this)), z = $ === void 0 ? A : $ >>> 0;
                    if (z === 0) return [];
                    if (k === void 0) return [B];
                    if (!c(k))
                      return M.call(B, k, z);
                    for (var K = [], Y = (k.ignoreCase ? "i" : "") + (k.multiline ? "m" : "") + (k.unicode ? "u" : "") + (k.sticky ? "y" : ""), ae = 0, J = new RegExp(k.source, Y + "g"), he, ce, ye; (he = g.call(J, B)) && (ce = J.lastIndex, !(ce > ae && (K.push(B.slice(ae, he.index)), he.length > 1 && he.index < B.length && S.apply(K, he.slice(1)), ye = he[0].length, ae = ce, K.length >= z))); )
                      J.lastIndex === he.index && J.lastIndex++;
                    return ae === B.length ? (ye || !J.test("")) && K.push("") : K.push(B.slice(ae)), K.length > z ? K.slice(0, z) : K;
                  } : "0".split(void 0, 0).length ? R = function(k, $) {
                    return k === void 0 && $ === 0 ? [] : M.call(this, k, $);
                  } : R = M, [
                    // `String.prototype.split` method
                    // https://tc39.es/ecma262/#sec-string.prototype.split
                    function($, B) {
                      var z = p(this), K = $ == null ? void 0 : $[V];
                      return K !== void 0 ? K.call($, z, B) : R.call(String(z), $, B);
                    },
                    // `RegExp.prototype[@@split]` method
                    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
                    //
                    // NOTE: This cannot be properly polyfilled in engines that don't support
                    // the 'y' flag.
                    function(k, $) {
                      var B = C(R, k, this, $, R !== M);
                      if (B.done) return B.value;
                      var z = d(k), K = String(this), Y = h(z, RegExp), ae = z.unicode, J = (z.ignoreCase ? "i" : "") + (z.multiline ? "m" : "") + (z.unicode ? "u" : "") + (w ? "y" : "g"), he = new Y(w ? z : "^(?:" + z.source + ")", J), ce = $ === void 0 ? A : $ >>> 0;
                      if (ce === 0) return [];
                      if (K.length === 0) return v(he, K) === null ? [K] : [];
                      for (var ye = 0, Ce = 0, Ee = []; Ce < K.length; ) {
                        he.lastIndex = w ? Ce : 0;
                        var Ue = v(he, w ? K : K.slice(Ce)), Ne;
                        if (Ue === null || (Ne = E(m(he.lastIndex + (w ? 0 : Ce)), K.length)) === ye)
                          Ce = f(K, Ce, ae);
                        else {
                          if (Ee.push(K.slice(ye, Ce)), Ee.length === ce) return Ee;
                          for (var be = 1; be <= Ue.length - 1; be++)
                            if (Ee.push(Ue[be]), Ee.length === ce) return Ee;
                          Ce = ye = Ne;
                        }
                      }
                      return Ee.push(K.slice(ye)), Ee;
                    }
                  ];
                }, !w);
              })
            ),
            /***/
            3210: (
              /***/
              (function(r, s, o) {
                var l = o(2109), c = o(3111).trim, d = o(6091);
                l({ target: "String", proto: !0, forced: d("trim") }, {
                  trim: function() {
                    return c(this);
                  }
                });
              })
            ),
            /***/
            2990: (
              /***/
              (function(r, s, o) {
                var l = o(260), c = o(1048), d = l.aTypedArray, p = l.exportTypedArrayMethod;
                p("copyWithin", function(f, m) {
                  return c.call(d(this), f, m, arguments.length > 2 ? arguments[2] : void 0);
                });
              })
            ),
            /***/
            8927: (
              /***/
              (function(r, s, o) {
                var l = o(260), c = o(2092).every, d = l.aTypedArray, p = l.exportTypedArrayMethod;
                p("every", function(f) {
                  return c(d(this), f, arguments.length > 1 ? arguments[1] : void 0);
                });
              })
            ),
            /***/
            3105: (
              /***/
              (function(r, s, o) {
                var l = o(260), c = o(1285), d = l.aTypedArray, p = l.exportTypedArrayMethod;
                p("fill", function(f) {
                  return c.apply(d(this), arguments);
                });
              })
            ),
            /***/
            5035: (
              /***/
              (function(r, s, o) {
                var l = o(260), c = o(2092).filter, d = o(3074), p = l.aTypedArray, h = l.exportTypedArrayMethod;
                h("filter", function(m) {
                  var v = c(p(this), m, arguments.length > 1 ? arguments[1] : void 0);
                  return d(this, v);
                });
              })
            ),
            /***/
            7174: (
              /***/
              (function(r, s, o) {
                var l = o(260), c = o(2092).findIndex, d = l.aTypedArray, p = l.exportTypedArrayMethod;
                p("findIndex", function(f) {
                  return c(d(this), f, arguments.length > 1 ? arguments[1] : void 0);
                });
              })
            ),
            /***/
            4345: (
              /***/
              (function(r, s, o) {
                var l = o(260), c = o(2092).find, d = l.aTypedArray, p = l.exportTypedArrayMethod;
                p("find", function(f) {
                  return c(d(this), f, arguments.length > 1 ? arguments[1] : void 0);
                });
              })
            ),
            /***/
            2846: (
              /***/
              (function(r, s, o) {
                var l = o(260), c = o(2092).forEach, d = l.aTypedArray, p = l.exportTypedArrayMethod;
                p("forEach", function(f) {
                  c(d(this), f, arguments.length > 1 ? arguments[1] : void 0);
                });
              })
            ),
            /***/
            4731: (
              /***/
              (function(r, s, o) {
                var l = o(260), c = o(1318).includes, d = l.aTypedArray, p = l.exportTypedArrayMethod;
                p("includes", function(f) {
                  return c(d(this), f, arguments.length > 1 ? arguments[1] : void 0);
                });
              })
            ),
            /***/
            7209: (
              /***/
              (function(r, s, o) {
                var l = o(260), c = o(1318).indexOf, d = l.aTypedArray, p = l.exportTypedArrayMethod;
                p("indexOf", function(f) {
                  return c(d(this), f, arguments.length > 1 ? arguments[1] : void 0);
                });
              })
            ),
            /***/
            6319: (
              /***/
              (function(r, s, o) {
                var l = o(7854), c = o(260), d = o(6992), p = o(5112), h = p("iterator"), f = l.Uint8Array, m = d.values, v = d.keys, g = d.entries, y = c.aTypedArray, S = c.exportTypedArrayMethod, E = f && f.prototype[h], A = !!E && (E.name == "values" || E.name == null), w = function() {
                  return m.call(y(this));
                };
                S("entries", function() {
                  return g.call(y(this));
                }), S("keys", function() {
                  return v.call(y(this));
                }), S("values", w, !A), S(h, w, !A);
              })
            ),
            /***/
            8867: (
              /***/
              (function(r, s, o) {
                var l = o(260), c = l.aTypedArray, d = l.exportTypedArrayMethod, p = [].join;
                d("join", function(f) {
                  return p.apply(c(this), arguments);
                });
              })
            ),
            /***/
            7789: (
              /***/
              (function(r, s, o) {
                var l = o(260), c = o(6583), d = l.aTypedArray, p = l.exportTypedArrayMethod;
                p("lastIndexOf", function(f) {
                  return c.apply(d(this), arguments);
                });
              })
            ),
            /***/
            3739: (
              /***/
              (function(r, s, o) {
                var l = o(260), c = o(2092).map, d = o(6707), p = l.aTypedArray, h = l.aTypedArrayConstructor, f = l.exportTypedArrayMethod;
                f("map", function(v) {
                  return c(p(this), v, arguments.length > 1 ? arguments[1] : void 0, function(g, y) {
                    return new (h(d(g, g.constructor)))(y);
                  });
                });
              })
            ),
            /***/
            4483: (
              /***/
              (function(r, s, o) {
                var l = o(260), c = o(3671).right, d = l.aTypedArray, p = l.exportTypedArrayMethod;
                p("reduceRight", function(f) {
                  return c(d(this), f, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
                });
              })
            ),
            /***/
            9368: (
              /***/
              (function(r, s, o) {
                var l = o(260), c = o(3671).left, d = l.aTypedArray, p = l.exportTypedArrayMethod;
                p("reduce", function(f) {
                  return c(d(this), f, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
                });
              })
            ),
            /***/
            2056: (
              /***/
              (function(r, s, o) {
                var l = o(260), c = l.aTypedArray, d = l.exportTypedArrayMethod, p = Math.floor;
                d("reverse", function() {
                  for (var f = this, m = c(f).length, v = p(m / 2), g = 0, y; g < v; )
                    y = f[g], f[g++] = f[--m], f[m] = y;
                  return f;
                });
              })
            ),
            /***/
            3462: (
              /***/
              (function(r, s, o) {
                var l = o(260), c = o(7466), d = o(4590), p = o(7908), h = o(7293), f = l.aTypedArray, m = l.exportTypedArrayMethod, v = h(function() {
                  new Int8Array(1).set({});
                });
                m("set", function(y) {
                  f(this);
                  var S = d(arguments.length > 1 ? arguments[1] : void 0, 1), E = this.length, A = p(y), w = c(A.length), V = 0;
                  if (w + S > E) throw RangeError("Wrong length");
                  for (; V < w; ) this[S + V] = A[V++];
                }, v);
              })
            ),
            /***/
            678: (
              /***/
              (function(r, s, o) {
                var l = o(260), c = o(6707), d = o(7293), p = l.aTypedArray, h = l.aTypedArrayConstructor, f = l.exportTypedArrayMethod, m = [].slice, v = d(function() {
                  new Int8Array(1).slice();
                });
                f("slice", function(y, S) {
                  for (var E = m.call(p(this), y, S), A = c(this, this.constructor), w = 0, V = E.length, M = new (h(A))(V); V > w; ) M[w] = E[w++];
                  return M;
                }, v);
              })
            ),
            /***/
            7462: (
              /***/
              (function(r, s, o) {
                var l = o(260), c = o(2092).some, d = l.aTypedArray, p = l.exportTypedArrayMethod;
                p("some", function(f) {
                  return c(d(this), f, arguments.length > 1 ? arguments[1] : void 0);
                });
              })
            ),
            /***/
            3824: (
              /***/
              (function(r, s, o) {
                var l = o(260), c = l.aTypedArray, d = l.exportTypedArrayMethod, p = [].sort;
                d("sort", function(f) {
                  return p.call(c(this), f);
                });
              })
            ),
            /***/
            5021: (
              /***/
              (function(r, s, o) {
                var l = o(260), c = o(7466), d = o(1400), p = o(6707), h = l.aTypedArray, f = l.exportTypedArrayMethod;
                f("subarray", function(v, g) {
                  var y = h(this), S = y.length, E = d(v, S);
                  return new (p(y, y.constructor))(
                    y.buffer,
                    y.byteOffset + E * y.BYTES_PER_ELEMENT,
                    c((g === void 0 ? S : d(g, S)) - E)
                  );
                });
              })
            ),
            /***/
            2974: (
              /***/
              (function(r, s, o) {
                var l = o(7854), c = o(260), d = o(7293), p = l.Int8Array, h = c.aTypedArray, f = c.exportTypedArrayMethod, m = [].toLocaleString, v = [].slice, g = !!p && d(function() {
                  m.call(new p(1));
                }), y = d(function() {
                  return [1, 2].toLocaleString() != new p([1, 2]).toLocaleString();
                }) || !d(function() {
                  p.prototype.toLocaleString.call([1, 2]);
                });
                f("toLocaleString", function() {
                  return m.apply(g ? v.call(h(this)) : h(this), arguments);
                }, y);
              })
            ),
            /***/
            5016: (
              /***/
              (function(r, s, o) {
                var l = o(260).exportTypedArrayMethod, c = o(7293), d = o(7854), p = d.Uint8Array, h = p && p.prototype || {}, f = [].toString, m = [].join;
                c(function() {
                  f.call({});
                }) && (f = function() {
                  return m.call(this);
                });
                var v = h.toString != f;
                l("toString", f, v);
              })
            ),
            /***/
            2472: (
              /***/
              (function(r, s, o) {
                var l = o(9843);
                l("Uint8", function(c) {
                  return function(p, h, f) {
                    return c(this, p, h, f);
                  };
                });
              })
            ),
            /***/
            4747: (
              /***/
              (function(r, s, o) {
                var l = o(7854), c = o(8324), d = o(8533), p = o(8880);
                for (var h in c) {
                  var f = l[h], m = f && f.prototype;
                  if (m && m.forEach !== d) try {
                    p(m, "forEach", d);
                  } catch {
                    m.forEach = d;
                  }
                }
              })
            ),
            /***/
            3948: (
              /***/
              (function(r, s, o) {
                var l = o(7854), c = o(8324), d = o(6992), p = o(8880), h = o(5112), f = h("iterator"), m = h("toStringTag"), v = d.values;
                for (var g in c) {
                  var y = l[g], S = y && y.prototype;
                  if (S) {
                    if (S[f] !== v) try {
                      p(S, f, v);
                    } catch {
                      S[f] = v;
                    }
                    if (S[m] || p(S, m, g), c[g]) {
                      for (var E in d)
                        if (S[E] !== d[E]) try {
                          p(S, E, d[E]);
                        } catch {
                          S[E] = d[E];
                        }
                    }
                  }
                }
              })
            ),
            /***/
            1637: (
              /***/
              (function(r, s, o) {
                o(6992);
                var l = o(2109), c = o(5005), d = o(590), p = o(1320), h = o(2248), f = o(8003), m = o(4994), v = o(9909), g = o(5787), y = o(6656), S = o(9974), E = o(648), A = o(9670), w = o(111), V = o(30), M = o(9114), C = o(8554), R = o(1246), k = o(5112), $ = c("fetch"), B = c("Headers"), z = k("iterator"), K = "URLSearchParams", Y = K + "Iterator", ae = v.set, J = v.getterFor(K), he = v.getterFor(Y), ce = /\+/g, ye = Array(4), Ce = function(N) {
                  return ye[N - 1] || (ye[N - 1] = RegExp("((?:%[\\da-f]{2}){" + N + "})", "gi"));
                }, Ee = function(N) {
                  try {
                    return decodeURIComponent(N);
                  } catch {
                    return N;
                  }
                }, Ue = function(N) {
                  var U = N.replace(ce, " "), H = 4;
                  try {
                    return decodeURIComponent(U);
                  } catch {
                    for (; H; )
                      U = U.replace(Ce(H--), Ee);
                    return U;
                  }
                }, Ne = /[!'()~]|%20/g, be = {
                  "!": "%21",
                  "'": "%27",
                  "(": "%28",
                  ")": "%29",
                  "~": "%7E",
                  "%20": "+"
                }, xe = function(N) {
                  return be[N];
                }, P = function(N) {
                  return encodeURIComponent(N).replace(Ne, xe);
                }, D = function(N, U) {
                  if (U)
                    for (var H = U.split("&"), Q = 0, q, Z; Q < H.length; )
                      q = H[Q++], q.length && (Z = q.split("="), N.push({
                        key: Ue(Z.shift()),
                        value: Ue(Z.join("="))
                      }));
                }, T = function(N) {
                  this.entries.length = 0, D(this.entries, N);
                }, L = function(N, U) {
                  if (N < U) throw TypeError("Not enough arguments");
                }, b = m(function(U, H) {
                  ae(this, {
                    type: Y,
                    iterator: C(J(U).entries),
                    kind: H
                  });
                }, "Iterator", function() {
                  var U = he(this), H = U.kind, Q = U.iterator.next(), q = Q.value;
                  return Q.done || (Q.value = H === "keys" ? q.key : H === "values" ? q.value : [q.key, q.value]), Q;
                }), x = function() {
                  g(this, x, K);
                  var U = arguments.length > 0 ? arguments[0] : void 0, H = this, Q = [], q, Z, ee, ne, le, ge, Pe, Ke, tt;
                  if (ae(H, {
                    type: K,
                    entries: Q,
                    updateURL: function() {
                    },
                    updateSearchParams: T
                  }), U !== void 0)
                    if (w(U))
                      if (q = R(U), typeof q == "function")
                        for (Z = q.call(U), ee = Z.next; !(ne = ee.call(Z)).done; ) {
                          if (le = C(A(ne.value)), ge = le.next, (Pe = ge.call(le)).done || (Ke = ge.call(le)).done || !ge.call(le).done) throw TypeError("Expected sequence with length 2");
                          Q.push({ key: Pe.value + "", value: Ke.value + "" });
                        }
                      else for (tt in U) y(U, tt) && Q.push({ key: tt, value: U[tt] + "" });
                    else
                      D(Q, typeof U == "string" ? U.charAt(0) === "?" ? U.slice(1) : U : U + "");
                }, I = x.prototype;
                h(I, {
                  // `URLSearchParams.prototype.append` method
                  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
                  append: function(U, H) {
                    L(arguments.length, 2);
                    var Q = J(this);
                    Q.entries.push({ key: U + "", value: H + "" }), Q.updateURL();
                  },
                  // `URLSearchParams.prototype.delete` method
                  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
                  delete: function(N) {
                    L(arguments.length, 1);
                    for (var U = J(this), H = U.entries, Q = N + "", q = 0; q < H.length; )
                      H[q].key === Q ? H.splice(q, 1) : q++;
                    U.updateURL();
                  },
                  // `URLSearchParams.prototype.get` method
                  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
                  get: function(U) {
                    L(arguments.length, 1);
                    for (var H = J(this).entries, Q = U + "", q = 0; q < H.length; q++)
                      if (H[q].key === Q) return H[q].value;
                    return null;
                  },
                  // `URLSearchParams.prototype.getAll` method
                  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
                  getAll: function(U) {
                    L(arguments.length, 1);
                    for (var H = J(this).entries, Q = U + "", q = [], Z = 0; Z < H.length; Z++)
                      H[Z].key === Q && q.push(H[Z].value);
                    return q;
                  },
                  // `URLSearchParams.prototype.has` method
                  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
                  has: function(U) {
                    L(arguments.length, 1);
                    for (var H = J(this).entries, Q = U + "", q = 0; q < H.length; )
                      if (H[q++].key === Q) return !0;
                    return !1;
                  },
                  // `URLSearchParams.prototype.set` method
                  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
                  set: function(U, H) {
                    L(arguments.length, 1);
                    for (var Q = J(this), q = Q.entries, Z = !1, ee = U + "", ne = H + "", le = 0, ge; le < q.length; le++)
                      ge = q[le], ge.key === ee && (Z ? q.splice(le--, 1) : (Z = !0, ge.value = ne));
                    Z || q.push({ key: ee, value: ne }), Q.updateURL();
                  },
                  // `URLSearchParams.prototype.sort` method
                  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
                  sort: function() {
                    var U = J(this), H = U.entries, Q = H.slice(), q, Z, ee;
                    for (H.length = 0, ee = 0; ee < Q.length; ee++) {
                      for (q = Q[ee], Z = 0; Z < ee; Z++)
                        if (H[Z].key > q.key) {
                          H.splice(Z, 0, q);
                          break;
                        }
                      Z === ee && H.push(q);
                    }
                    U.updateURL();
                  },
                  // `URLSearchParams.prototype.forEach` method
                  forEach: function(U) {
                    for (var H = J(this).entries, Q = S(U, arguments.length > 1 ? arguments[1] : void 0, 3), q = 0, Z; q < H.length; )
                      Z = H[q++], Q(Z.value, Z.key, this);
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
                }, { enumerable: !0 }), p(I, z, I.entries), p(I, "toString", function() {
                  for (var U = J(this).entries, H = [], Q = 0, q; Q < U.length; )
                    q = U[Q++], H.push(P(q.key) + "=" + P(q.value));
                  return H.join("&");
                }, { enumerable: !0 }), f(x, K), l({ global: !0, forced: !d }, {
                  URLSearchParams: x
                }), !d && typeof $ == "function" && typeof B == "function" && l({ global: !0, enumerable: !0, forced: !0 }, {
                  fetch: function(U) {
                    var H = [U], Q, q, Z;
                    return arguments.length > 1 && (Q = arguments[1], w(Q) && (q = Q.body, E(q) === K && (Z = Q.headers ? new B(Q.headers) : new B(), Z.has("content-type") || Z.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"), Q = V(Q, {
                      body: M(0, String(q)),
                      headers: M(0, Z)
                    }))), H.push(Q)), $.apply(this, H);
                  }
                }), r.exports = {
                  URLSearchParams: x,
                  getState: J
                };
              })
            ),
            /***/
            285: (
              /***/
              (function(r, s, o) {
                o(8783);
                var l = o(2109), c = o(9781), d = o(590), p = o(7854), h = o(6048), f = o(1320), m = o(5787), v = o(6656), g = o(1574), y = o(8457), S = o(8710).codeAt, E = o(3197), A = o(8003), w = o(1637), V = o(9909), M = p.URL, C = w.URLSearchParams, R = w.getState, k = V.set, $ = V.getterFor("URL"), B = Math.floor, z = Math.pow, K = "Invalid authority", Y = "Invalid scheme", ae = "Invalid host", J = "Invalid port", he = /[A-Za-z]/, ce = /[\d+-.A-Za-z]/, ye = /\d/, Ce = /^(0x|0X)/, Ee = /^[0-7]+$/, Ue = /^\d+$/, Ne = /^[\dA-Fa-f]+$/, be = /[\u0000\t\u000A\u000D #%/:?@[\\]]/, xe = /[\u0000\t\u000A\u000D #/:?@[\\]]/, P = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g, D = /[\t\u000A\u000D]/g, T, L = function(F, ue) {
                  var se, pe, me;
                  if (ue.charAt(0) == "[") {
                    if (ue.charAt(ue.length - 1) != "]" || (se = x(ue.slice(1, -1)), !se)) return ae;
                    F.host = se;
                  } else if (ne(F)) {
                    if (ue = E(ue), be.test(ue) || (se = b(ue), se === null)) return ae;
                    F.host = se;
                  } else {
                    if (xe.test(ue)) return ae;
                    for (se = "", pe = y(ue), me = 0; me < pe.length; me++)
                      se += Z(pe[me], U);
                    F.host = se;
                  }
                }, b = function(F) {
                  var ue = F.split("."), se, pe, me, Ge, De, Qe, st;
                  if (ue.length && ue[ue.length - 1] == "" && ue.pop(), se = ue.length, se > 4) return F;
                  for (pe = [], me = 0; me < se; me++) {
                    if (Ge = ue[me], Ge == "") return F;
                    if (De = 10, Ge.length > 1 && Ge.charAt(0) == "0" && (De = Ce.test(Ge) ? 16 : 8, Ge = Ge.slice(De == 8 ? 1 : 2)), Ge === "")
                      Qe = 0;
                    else {
                      if (!(De == 10 ? Ue : De == 8 ? Ee : Ne).test(Ge)) return F;
                      Qe = parseInt(Ge, De);
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
                  var ue = [0, 0, 0, 0, 0, 0, 0, 0], se = 0, pe = null, me = 0, Ge, De, Qe, st, lt, Lt, ve, mt = function() {
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
                    for (Ge = De = 0; De < 4 && Ne.test(mt()); )
                      Ge = Ge * 16 + parseInt(mt(), 16), me++, De++;
                    if (mt() == ".") {
                      if (De == 0 || (me -= De, se > 6)) return;
                      for (Qe = 0; mt(); ) {
                        if (st = null, Qe > 0)
                          if (mt() == "." && Qe < 4) me++;
                          else return;
                        if (!ye.test(mt())) return;
                        for (; ye.test(mt()); ) {
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
                    ue[se++] = Ge;
                  }
                  if (pe !== null)
                    for (Lt = se - pe, se = 7; se != 0 && Lt > 0; )
                      ve = ue[se], ue[se--] = ue[pe + Lt - 1], ue[pe + --Lt] = ve;
                  else if (se != 8) return;
                  return ue;
                }, I = function(F) {
                  for (var ue = null, se = 1, pe = null, me = 0, Ge = 0; Ge < 8; Ge++)
                    F[Ge] !== 0 ? (me > se && (ue = pe, se = me), pe = null, me = 0) : (pe === null && (pe = Ge), ++me);
                  return me > se && (ue = pe, se = me), ue;
                }, N = function(F) {
                  var ue, se, pe, me;
                  if (typeof F == "number") {
                    for (ue = [], se = 0; se < 4; se++)
                      ue.unshift(F % 256), F = B(F / 256);
                    return ue.join(".");
                  } else if (typeof F == "object") {
                    for (ue = "", pe = I(F), se = 0; se < 8; se++)
                      me && F[se] === 0 || (me && (me = !1), pe === se ? (ue += se ? ":" : "::", me = !0) : (ue += F[se].toString(16), se < 7 && (ue += ":")));
                    return "[" + ue + "]";
                  }
                  return F;
                }, U = {}, H = g({}, U, {
                  " ": 1,
                  '"': 1,
                  "<": 1,
                  ">": 1,
                  "`": 1
                }), Q = g({}, H, {
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
                }), Z = function(F, ue) {
                  var se = S(F, 0);
                  return se > 32 && se < 127 && !v(ue, F) ? F : encodeURIComponent(F);
                }, ee = {
                  ftp: 21,
                  file: null,
                  http: 80,
                  https: 443,
                  ws: 80,
                  wss: 443
                }, ne = function(F) {
                  return v(ee, F.scheme);
                }, le = function(F) {
                  return F.username != "" || F.password != "";
                }, ge = function(F) {
                  return !F.host || F.cannotBeABaseURL || F.scheme == "file";
                }, Pe = function(F, ue) {
                  var se;
                  return F.length == 2 && he.test(F.charAt(0)) && ((se = F.charAt(1)) == ":" || !ue && se == "|");
                }, Ke = function(F) {
                  var ue;
                  return F.length > 1 && Pe(F.slice(0, 2)) && (F.length == 2 || (ue = F.charAt(2)) === "/" || ue === "\\" || ue === "?" || ue === "#");
                }, tt = function(F) {
                  var ue = F.path, se = ue.length;
                  se && (F.scheme != "file" || se != 1 || !Pe(ue[0], !0)) && ue.pop();
                }, qe = function(F) {
                  return F === "." || F.toLowerCase() === "%2e";
                }, G = function(F) {
                  return F = F.toLowerCase(), F === ".." || F === "%2e." || F === ".%2e" || F === "%2e%2e";
                }, X = {}, oe = {}, de = {}, we = {}, je = {}, Re = {}, Te = {}, ze = {}, Ie = {}, Ae = {}, Me = {}, He = {}, Ve = {}, at = {}, Wt = {}, Mn = {}, Bt = {}, Yt = {}, fr = {}, un = {}, St = {}, Kt = function(F, ue, se, pe) {
                  var me = se || X, Ge = 0, De = "", Qe = !1, st = !1, lt = !1, Lt, ve, mt, nn;
                  for (se || (F.scheme = "", F.username = "", F.password = "", F.host = null, F.port = null, F.path = [], F.query = null, F.fragment = null, F.cannotBeABaseURL = !1, ue = ue.replace(P, "")), ue = ue.replace(D, ""), Lt = y(ue); Ge <= Lt.length; ) {
                    switch (ve = Lt[Ge], me) {
                      case X:
                        if (ve && he.test(ve))
                          De += ve.toLowerCase(), me = oe;
                        else {
                          if (se)
                            return Y;
                          me = de;
                          continue;
                        }
                        break;
                      case oe:
                        if (ve && (ce.test(ve) || ve == "+" || ve == "-" || ve == "."))
                          De += ve.toLowerCase();
                        else if (ve == ":") {
                          if (se && (ne(F) != v(ee, De) || De == "file" && (le(F) || F.port !== null) || F.scheme == "file" && !F.host)) return;
                          if (F.scheme = De, se) {
                            ne(F) && ee[F.scheme] == F.port && (F.port = null);
                            return;
                          }
                          De = "", F.scheme == "file" ? me = at : ne(F) && pe && pe.scheme == F.scheme ? me = we : ne(F) ? me = ze : Lt[Ge + 1] == "/" ? (me = je, Ge++) : (F.cannotBeABaseURL = !0, F.path.push(""), me = fr);
                        } else {
                          if (se)
                            return Y;
                          De = "", me = de, Ge = 0;
                          continue;
                        }
                        break;
                      case de:
                        if (!pe || pe.cannotBeABaseURL && ve != "#") return Y;
                        if (pe.cannotBeABaseURL && ve == "#") {
                          F.scheme = pe.scheme, F.path = pe.path.slice(), F.query = pe.query, F.fragment = "", F.cannotBeABaseURL = !0, me = St;
                          break;
                        }
                        me = pe.scheme == "file" ? at : Re;
                        continue;
                      case we:
                        if (ve == "/" && Lt[Ge + 1] == "/")
                          me = Ie, Ge++;
                        else {
                          me = Re;
                          continue;
                        }
                        break;
                      case je:
                        if (ve == "/") {
                          me = Ae;
                          break;
                        } else {
                          me = Yt;
                          continue;
                        }
                      case Re:
                        if (F.scheme = pe.scheme, ve == T)
                          F.username = pe.username, F.password = pe.password, F.host = pe.host, F.port = pe.port, F.path = pe.path.slice(), F.query = pe.query;
                        else if (ve == "/" || ve == "\\" && ne(F))
                          me = Te;
                        else if (ve == "?")
                          F.username = pe.username, F.password = pe.password, F.host = pe.host, F.port = pe.port, F.path = pe.path.slice(), F.query = "", me = un;
                        else if (ve == "#")
                          F.username = pe.username, F.password = pe.password, F.host = pe.host, F.port = pe.port, F.path = pe.path.slice(), F.query = pe.query, F.fragment = "", me = St;
                        else {
                          F.username = pe.username, F.password = pe.password, F.host = pe.host, F.port = pe.port, F.path = pe.path.slice(), F.path.pop(), me = Yt;
                          continue;
                        }
                        break;
                      case Te:
                        if (ne(F) && (ve == "/" || ve == "\\"))
                          me = Ie;
                        else if (ve == "/")
                          me = Ae;
                        else {
                          F.username = pe.username, F.password = pe.password, F.host = pe.host, F.port = pe.port, me = Yt;
                          continue;
                        }
                        break;
                      case ze:
                        if (me = Ie, ve != "/" || De.charAt(Ge + 1) != "/") continue;
                        Ge++;
                        break;
                      case Ie:
                        if (ve != "/" && ve != "\\") {
                          me = Ae;
                          continue;
                        }
                        break;
                      case Ae:
                        if (ve == "@") {
                          Qe && (De = "%40" + De), Qe = !0, mt = y(De);
                          for (var pr = 0; pr < mt.length; pr++) {
                            var _r = mt[pr];
                            if (_r == ":" && !lt) {
                              lt = !0;
                              continue;
                            }
                            var Xn = Z(_r, q);
                            lt ? F.password += Xn : F.username += Xn;
                          }
                          De = "";
                        } else if (ve == T || ve == "/" || ve == "?" || ve == "#" || ve == "\\" && ne(F)) {
                          if (Qe && De == "") return K;
                          Ge -= y(De).length + 1, De = "", me = Me;
                        } else De += ve;
                        break;
                      case Me:
                      case He:
                        if (se && F.scheme == "file") {
                          me = Mn;
                          continue;
                        } else if (ve == ":" && !st) {
                          if (De == "") return ae;
                          if (nn = L(F, De), nn) return nn;
                          if (De = "", me = Ve, se == He) return;
                        } else if (ve == T || ve == "/" || ve == "?" || ve == "#" || ve == "\\" && ne(F)) {
                          if (ne(F) && De == "") return ae;
                          if (se && De == "" && (le(F) || F.port !== null)) return;
                          if (nn = L(F, De), nn) return nn;
                          if (De = "", me = Bt, se) return;
                          continue;
                        } else
                          ve == "[" ? st = !0 : ve == "]" && (st = !1), De += ve;
                        break;
                      case Ve:
                        if (ye.test(ve))
                          De += ve;
                        else if (ve == T || ve == "/" || ve == "?" || ve == "#" || ve == "\\" && ne(F) || se) {
                          if (De != "") {
                            var vr = parseInt(De, 10);
                            if (vr > 65535) return J;
                            F.port = ne(F) && vr === ee[F.scheme] ? null : vr, De = "";
                          }
                          if (se) return;
                          me = Bt;
                          continue;
                        } else return J;
                        break;
                      case at:
                        if (F.scheme = "file", ve == "/" || ve == "\\") me = Wt;
                        else if (pe && pe.scheme == "file")
                          if (ve == T)
                            F.host = pe.host, F.path = pe.path.slice(), F.query = pe.query;
                          else if (ve == "?")
                            F.host = pe.host, F.path = pe.path.slice(), F.query = "", me = un;
                          else if (ve == "#")
                            F.host = pe.host, F.path = pe.path.slice(), F.query = pe.query, F.fragment = "", me = St;
                          else {
                            Ke(Lt.slice(Ge).join("")) || (F.host = pe.host, F.path = pe.path.slice(), tt(F)), me = Yt;
                            continue;
                          }
                        else {
                          me = Yt;
                          continue;
                        }
                        break;
                      case Wt:
                        if (ve == "/" || ve == "\\") {
                          me = Mn;
                          break;
                        }
                        pe && pe.scheme == "file" && !Ke(Lt.slice(Ge).join("")) && (Pe(pe.path[0], !0) ? F.path.push(pe.path[0]) : F.host = pe.host), me = Yt;
                        continue;
                      case Mn:
                        if (ve == T || ve == "/" || ve == "\\" || ve == "?" || ve == "#") {
                          if (!se && Pe(De))
                            me = Yt;
                          else if (De == "") {
                            if (F.host = "", se) return;
                            me = Bt;
                          } else {
                            if (nn = L(F, De), nn) return nn;
                            if (F.host == "localhost" && (F.host = ""), se) return;
                            De = "", me = Bt;
                          }
                          continue;
                        } else De += ve;
                        break;
                      case Bt:
                        if (ne(F)) {
                          if (me = Yt, ve != "/" && ve != "\\") continue;
                        } else if (!se && ve == "?")
                          F.query = "", me = un;
                        else if (!se && ve == "#")
                          F.fragment = "", me = St;
                        else if (ve != T && (me = Yt, ve != "/"))
                          continue;
                        break;
                      case Yt:
                        if (ve == T || ve == "/" || ve == "\\" && ne(F) || !se && (ve == "?" || ve == "#")) {
                          if (G(De) ? (tt(F), ve != "/" && !(ve == "\\" && ne(F)) && F.path.push("")) : qe(De) ? ve != "/" && !(ve == "\\" && ne(F)) && F.path.push("") : (F.scheme == "file" && !F.path.length && Pe(De) && (F.host && (F.host = ""), De = De.charAt(0) + ":"), F.path.push(De)), De = "", F.scheme == "file" && (ve == T || ve == "?" || ve == "#"))
                            for (; F.path.length > 1 && F.path[0] === ""; )
                              F.path.shift();
                          ve == "?" ? (F.query = "", me = un) : ve == "#" && (F.fragment = "", me = St);
                        } else
                          De += Z(ve, Q);
                        break;
                      case fr:
                        ve == "?" ? (F.query = "", me = un) : ve == "#" ? (F.fragment = "", me = St) : ve != T && (F.path[0] += Z(ve, U));
                        break;
                      case un:
                        !se && ve == "#" ? (F.fragment = "", me = St) : ve != T && (ve == "'" && ne(F) ? F.query += "%27" : ve == "#" ? F.query += "%23" : F.query += Z(ve, U));
                        break;
                      case St:
                        ve != T && (F.fragment += Z(ve, H));
                        break;
                    }
                    Ge++;
                  }
                }, hn = function(ue) {
                  var se = m(this, hn, "URL"), pe = arguments.length > 1 ? arguments[1] : void 0, me = String(ue), Ge = k(se, { type: "URL" }), De, Qe;
                  if (pe !== void 0) {
                    if (pe instanceof hn) De = $(pe);
                    else if (Qe = Kt(De = {}, String(pe)), Qe) throw TypeError(Qe);
                  }
                  if (Qe = Kt(Ge, me, null, De), Qe) throw TypeError(Qe);
                  var st = Ge.searchParams = new C(), lt = R(st);
                  lt.updateSearchParams(Ge.query), lt.updateURL = function() {
                    Ge.query = String(st) || null;
                  }, c || (se.href = Kn.call(se), se.origin = zr.call(se), se.protocol = Xt.call(se), se.username = Gr.call(se), se.password = Wr.call(se), se.host = Yr.call(se), se.hostname = Kr.call(se), se.port = Xr.call(se), se.pathname = pn.call(se), se.search = Jr.call(se), se.searchParams = Qr.call(se), se.hash = Zr.call(se));
                }, hr = hn.prototype, Kn = function() {
                  var F = $(this), ue = F.scheme, se = F.username, pe = F.password, me = F.host, Ge = F.port, De = F.path, Qe = F.query, st = F.fragment, lt = ue + ":";
                  return me !== null ? (lt += "//", le(F) && (lt += se + (pe ? ":" + pe : "") + "@"), lt += N(me), Ge !== null && (lt += ":" + Ge)) : ue == "file" && (lt += "//"), lt += F.cannotBeABaseURL ? De[0] : De.length ? "/" + De.join("/") : "", Qe !== null && (lt += "?" + Qe), st !== null && (lt += "#" + st), lt;
                }, zr = function() {
                  var F = $(this), ue = F.scheme, se = F.port;
                  if (ue == "blob") try {
                    return new URL(ue.path[0]).origin;
                  } catch {
                    return "null";
                  }
                  return ue == "file" || !ne(F) ? "null" : ue + "://" + N(F.host) + (se !== null ? ":" + se : "");
                }, Xt = function() {
                  return $(this).scheme + ":";
                }, Gr = function() {
                  return $(this).username;
                }, Wr = function() {
                  return $(this).password;
                }, Yr = function() {
                  var F = $(this), ue = F.host, se = F.port;
                  return ue === null ? "" : se === null ? N(ue) : N(ue) + ":" + se;
                }, Kr = function() {
                  var F = $(this).host;
                  return F === null ? "" : N(F);
                }, Xr = function() {
                  var F = $(this).port;
                  return F === null ? "" : String(F);
                }, pn = function() {
                  var F = $(this), ue = F.path;
                  return F.cannotBeABaseURL ? ue[0] : ue.length ? "/" + ue.join("/") : "";
                }, Jr = function() {
                  var F = $(this).query;
                  return F ? "?" + F : "";
                }, Qr = function() {
                  return $(this).searchParams;
                }, Zr = function() {
                  var F = $(this).fragment;
                  return F ? "#" + F : "";
                }, Mt = function(F, ue) {
                  return { get: F, set: ue, configurable: !0, enumerable: !0 };
                };
                if (c && h(hr, {
                  // `URL.prototype.href` accessors pair
                  // https://url.spec.whatwg.org/#dom-url-href
                  href: Mt(Kn, function(F) {
                    var ue = $(this), se = String(F), pe = Kt(ue, se);
                    if (pe) throw TypeError(pe);
                    R(ue.searchParams).updateSearchParams(ue.query);
                  }),
                  // `URL.prototype.origin` getter
                  // https://url.spec.whatwg.org/#dom-url-origin
                  origin: Mt(zr),
                  // `URL.prototype.protocol` accessors pair
                  // https://url.spec.whatwg.org/#dom-url-protocol
                  protocol: Mt(Xt, function(F) {
                    var ue = $(this);
                    Kt(ue, String(F) + ":", X);
                  }),
                  // `URL.prototype.username` accessors pair
                  // https://url.spec.whatwg.org/#dom-url-username
                  username: Mt(Gr, function(F) {
                    var ue = $(this), se = y(String(F));
                    if (!ge(ue)) {
                      ue.username = "";
                      for (var pe = 0; pe < se.length; pe++)
                        ue.username += Z(se[pe], q);
                    }
                  }),
                  // `URL.prototype.password` accessors pair
                  // https://url.spec.whatwg.org/#dom-url-password
                  password: Mt(Wr, function(F) {
                    var ue = $(this), se = y(String(F));
                    if (!ge(ue)) {
                      ue.password = "";
                      for (var pe = 0; pe < se.length; pe++)
                        ue.password += Z(se[pe], q);
                    }
                  }),
                  // `URL.prototype.host` accessors pair
                  // https://url.spec.whatwg.org/#dom-url-host
                  host: Mt(Yr, function(F) {
                    var ue = $(this);
                    ue.cannotBeABaseURL || Kt(ue, String(F), Me);
                  }),
                  // `URL.prototype.hostname` accessors pair
                  // https://url.spec.whatwg.org/#dom-url-hostname
                  hostname: Mt(Kr, function(F) {
                    var ue = $(this);
                    ue.cannotBeABaseURL || Kt(ue, String(F), He);
                  }),
                  // `URL.prototype.port` accessors pair
                  // https://url.spec.whatwg.org/#dom-url-port
                  port: Mt(Xr, function(F) {
                    var ue = $(this);
                    ge(ue) || (F = String(F), F == "" ? ue.port = null : Kt(ue, F, Ve));
                  }),
                  // `URL.prototype.pathname` accessors pair
                  // https://url.spec.whatwg.org/#dom-url-pathname
                  pathname: Mt(pn, function(F) {
                    var ue = $(this);
                    ue.cannotBeABaseURL || (ue.path = [], Kt(ue, F + "", Bt));
                  }),
                  // `URL.prototype.search` accessors pair
                  // https://url.spec.whatwg.org/#dom-url-search
                  search: Mt(Jr, function(F) {
                    var ue = $(this);
                    F = String(F), F == "" ? ue.query = null : (F.charAt(0) == "?" && (F = F.slice(1)), ue.query = "", Kt(ue, F, un)), R(ue.searchParams).updateSearchParams(ue.query);
                  }),
                  // `URL.prototype.searchParams` getter
                  // https://url.spec.whatwg.org/#dom-url-searchparams
                  searchParams: Mt(Qr),
                  // `URL.prototype.hash` accessors pair
                  // https://url.spec.whatwg.org/#dom-url-hash
                  hash: Mt(Zr, function(F) {
                    var ue = $(this);
                    if (F = String(F), F == "") {
                      ue.fragment = null;
                      return;
                    }
                    F.charAt(0) == "#" && (F = F.slice(1)), ue.fragment = "", Kt(ue, F, St);
                  })
                }), f(hr, "toJSON", function() {
                  return Kn.call(this);
                }, { enumerable: !0 }), f(hr, "toString", function() {
                  return Kn.call(this);
                }, { enumerable: !0 }), M) {
                  var qr = M.createObjectURL, vn = M.revokeObjectURL;
                  qr && f(hn, "createObjectURL", function(ue) {
                    return qr.apply(M, arguments);
                  }), vn && f(hn, "revokeObjectURL", function(ue) {
                    return vn.apply(M, arguments);
                  });
                }
                A(hn, "URL"), l({ global: !0, forced: !d, sham: !c }, {
                  URL: hn
                });
              })
            )
            /******/
          }, a = {};
          function i(r) {
            if (a[r])
              return a[r].exports;
            var s = a[r] = {
              /******/
              // no module.id needed
              /******/
              // no module.loaded needed
              /******/
              exports: {}
              /******/
            };
            return n[r](s, s.exports, i), s.exports;
          }
          (function() {
            i.d = function(r, s) {
              for (var o in s)
                i.o(s, o) && !i.o(r, o) && Object.defineProperty(r, o, { enumerable: !0, get: s[o] });
            };
          })(), (function() {
            i.g = (function() {
              if (typeof globalThis == "object") return globalThis;
              try {
                return this || new Function("return this")();
              } catch {
                if (typeof window == "object") return window;
              }
            })();
          })(), (function() {
            i.o = function(r, s) {
              return Object.prototype.hasOwnProperty.call(r, s);
            };
          })(), (function() {
            i.r = function(r) {
              typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(r, "__esModule", { value: !0 });
            };
          })();
          var u = {};
          return (function() {
            i.r(u), i.d(u, {
              Dropzone: function() {
                return (
                  /* reexport */
                  J
                );
              },
              default: function() {
                return (
                  /* binding */
                  xe
                );
              }
            }), i(2222), i(7327), i(2772), i(6992), i(1249), i(7042), i(561), i(8264), i(8309), i(489), i(1539), i(4916), i(9714), i(8783), i(4723), i(5306), i(3123), i(3210), i(2472), i(2990), i(8927), i(3105), i(5035), i(4345), i(7174), i(2846), i(4731), i(7209), i(6319), i(8867), i(7789), i(3739), i(9368), i(4483), i(2056), i(3462), i(678), i(7462), i(3824), i(5021), i(2974), i(5016), i(4747), i(3948), i(285);
            function r(P, D) {
              var T;
              if (typeof Symbol > "u" || P[Symbol.iterator] == null) {
                if (Array.isArray(P) || (T = s(P)) || P && typeof P.length == "number") {
                  T && (P = T);
                  var L = 0, b = function() {
                  };
                  return { s: b, n: function() {
                    return L >= P.length ? { done: !0 } : { done: !1, value: P[L++] };
                  }, e: function(H) {
                    throw H;
                  }, f: b };
                }
                throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
              }
              var x = !0, I = !1, N;
              return { s: function() {
                T = P[Symbol.iterator]();
              }, n: function() {
                var H = T.next();
                return x = H.done, H;
              }, e: function(H) {
                I = !0, N = H;
              }, f: function() {
                try {
                  !x && T.return != null && T.return();
                } finally {
                  if (I) throw N;
                }
              } };
            }
            function s(P, D) {
              if (P) {
                if (typeof P == "string") return o(P, D);
                var T = Object.prototype.toString.call(P).slice(8, -1);
                if (T === "Object" && P.constructor && (T = P.constructor.name), T === "Map" || T === "Set") return Array.from(P);
                if (T === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T)) return o(P, D);
              }
            }
            function o(P, D) {
              (D == null || D > P.length) && (D = P.length);
              for (var T = 0, L = new Array(D); T < D; T++)
                L[T] = P[T];
              return L;
            }
            function l(P, D) {
              if (!(P instanceof D))
                throw new TypeError("Cannot call a class as a function");
            }
            function c(P, D) {
              for (var T = 0; T < D.length; T++) {
                var L = D[T];
                L.enumerable = L.enumerable || !1, L.configurable = !0, "value" in L && (L.writable = !0), Object.defineProperty(P, L.key, L);
              }
            }
            function d(P, D, T) {
              return D && c(P.prototype, D), P;
            }
            var p = /* @__PURE__ */ (function() {
              function P() {
                l(this, P);
              }
              return d(P, [{
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
                    var N = r(L), U;
                    try {
                      for (N.s(); !(U = N.n()).done; ) {
                        var H = U.value;
                        H.apply(this, x);
                      }
                    } catch (Q) {
                      N.e(Q);
                    } finally {
                      N.f();
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
              }]), P;
            })(), h = '<div class="dz-preview dz-file-preview"> <div class="dz-image"><img data-dz-thumbnail/></div> <div class="dz-details"> <div class="dz-size"><span data-dz-size></span></div> <div class="dz-filename"><span data-dz-name></span></div> </div> <div class="dz-progress"> <span class="dz-upload" data-dz-uploadprogress></span> </div> <div class="dz-error-message"><span data-dz-errormessage></span></div> <div class="dz-success-mark"> <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>Check</title> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF"></path> </g> </svg> </div> <div class="dz-error-mark"> <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>Error</title> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475"> <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z"></path> </g> </g> </svg> </div> </div> ', f = h;
            function m(P, D) {
              var T;
              if (typeof Symbol > "u" || P[Symbol.iterator] == null) {
                if (Array.isArray(P) || (T = v(P)) || P && typeof P.length == "number") {
                  T && (P = T);
                  var L = 0, b = function() {
                  };
                  return { s: b, n: function() {
                    return L >= P.length ? { done: !0 } : { done: !1, value: P[L++] };
                  }, e: function(H) {
                    throw H;
                  }, f: b };
                }
                throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
              }
              var x = !0, I = !1, N;
              return { s: function() {
                T = P[Symbol.iterator]();
              }, n: function() {
                var H = T.next();
                return x = H.done, H;
              }, e: function(H) {
                I = !0, N = H;
              }, f: function() {
                try {
                  !x && T.return != null && T.return();
                } finally {
                  if (I) throw N;
                }
              } };
            }
            function v(P, D) {
              if (P) {
                if (typeof P == "string") return g(P, D);
                var T = Object.prototype.toString.call(P).slice(8, -1);
                if (T === "Object" && P.constructor && (T = P.constructor.name), T === "Map" || T === "Set") return Array.from(P);
                if (T === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T)) return g(P, D);
              }
            }
            function g(P, D) {
              (D == null || D > P.length) && (D = P.length);
              for (var T = 0, L = new Array(D); T < D; T++)
                L[T] = P[T];
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
              params: function(D, T, L) {
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
              accept: function(D, T) {
                return T();
              },
              /**
               * The callback that will be invoked when all chunks have been uploaded for a file.
               * It gets the file for which the chunks have been uploaded as the first parameter,
               * and the `done` function as second. `done()` needs to be invoked when everything
               * needed to finish the upload process is done.
               */
              chunksUploaded: function(D, T) {
                T();
              },
              /**
               * Gets called when the browser is not supported.
               * The default implementation shows the fallback input field and adds
               * a text.
               */
              fallback: function() {
                var D;
                this.element.className = "".concat(this.element.className, " dz-browser-not-supported");
                var T = m(this.element.getElementsByTagName("div")), L;
                try {
                  for (T.s(); !(L = T.n()).done; ) {
                    var b = L.value;
                    if (/(^| )dz-message($| )/.test(b.className)) {
                      D = b, b.className = "dz-message";
                      break;
                    }
                  }
                } catch (I) {
                  T.e(I);
                } finally {
                  T.f();
                }
                D || (D = J.createElement('<div class="dz-message"><span></span></div>'), this.element.appendChild(D));
                var x = D.getElementsByTagName("span")[0];
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
              resize: function(D, T, L, b) {
                var x = {
                  srcX: 0,
                  srcY: 0,
                  srcWidth: D.width,
                  srcHeight: D.height
                }, I = D.width / D.height;
                T == null && L == null ? (T = x.srcWidth, L = x.srcHeight) : T == null ? T = L * I : L == null && (L = T / I), T = Math.min(T, x.srcWidth), L = Math.min(L, x.srcHeight);
                var N = T / L;
                if (x.srcWidth > T || x.srcHeight > L)
                  if (b === "crop")
                    I > N ? (x.srcHeight = D.height, x.srcWidth = x.srcHeight * N) : (x.srcWidth = D.width, x.srcHeight = x.srcWidth / N);
                  else if (b === "contain")
                    I > N ? L = T / I : T = L * I;
                  else
                    throw new Error("Unknown resizeMethod '".concat(b, "'"));
                return x.srcX = (D.width - x.srcWidth) / 2, x.srcY = (D.height - x.srcHeight) / 2, x.trgWidth = T, x.trgHeight = L, x;
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
              transformFile: function(D, T) {
                return (this.options.resizeWidth || this.options.resizeHeight) && D.type.match(/image.*/) ? this.resizeImage(D, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, T) : T(D);
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
              drop: function(D) {
                return this.element.classList.remove("dz-drag-hover");
              },
              dragstart: function(D) {
              },
              dragend: function(D) {
                return this.element.classList.remove("dz-drag-hover");
              },
              dragenter: function(D) {
                return this.element.classList.add("dz-drag-hover");
              },
              dragover: function(D) {
                return this.element.classList.add("dz-drag-hover");
              },
              dragleave: function(D) {
                return this.element.classList.remove("dz-drag-hover");
              },
              paste: function(D) {
              },
              // Called whenever there are no files left in the dropzone anymore, and the
              // dropzone should be displayed as if in the initial state.
              reset: function() {
                return this.element.classList.remove("dz-started");
              },
              // Called when a file is added to the queue
              // Receives `file`
              addedfile: function(D) {
                var T = this;
                if (this.element === this.previewsContainer && this.element.classList.add("dz-started"), this.previewsContainer && !this.options.disablePreviews) {
                  D.previewElement = J.createElement(this.options.previewTemplate.trim()), D.previewTemplate = D.previewElement, this.previewsContainer.appendChild(D.previewElement);
                  var L = m(D.previewElement.querySelectorAll("[data-dz-name]")), b;
                  try {
                    for (L.s(); !(b = L.n()).done; ) {
                      var x = b.value;
                      x.textContent = D.name;
                    }
                  } catch (Z) {
                    L.e(Z);
                  } finally {
                    L.f();
                  }
                  var I = m(D.previewElement.querySelectorAll("[data-dz-size]")), N;
                  try {
                    for (I.s(); !(N = I.n()).done; )
                      x = N.value, x.innerHTML = this.filesize(D.size);
                  } catch (Z) {
                    I.e(Z);
                  } finally {
                    I.f();
                  }
                  this.options.addRemoveLinks && (D._removeLink = J.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'.concat(this.options.dictRemoveFile, "</a>")), D.previewElement.appendChild(D._removeLink));
                  var U = function(ee) {
                    return ee.preventDefault(), ee.stopPropagation(), D.status === J.UPLOADING ? J.confirm(T.options.dictCancelUploadConfirmation, function() {
                      return T.removeFile(D);
                    }) : T.options.dictRemoveFileConfirmation ? J.confirm(T.options.dictRemoveFileConfirmation, function() {
                      return T.removeFile(D);
                    }) : T.removeFile(D);
                  }, H = m(D.previewElement.querySelectorAll("[data-dz-remove]")), Q;
                  try {
                    for (H.s(); !(Q = H.n()).done; ) {
                      var q = Q.value;
                      q.addEventListener("click", U);
                    }
                  } catch (Z) {
                    H.e(Z);
                  } finally {
                    H.f();
                  }
                }
              },
              // Called whenever a file is removed.
              removedfile: function(D) {
                return D.previewElement != null && D.previewElement.parentNode != null && D.previewElement.parentNode.removeChild(D.previewElement), this._updateMaxFilesReachedClass();
              },
              // Called when a thumbnail has been generated
              // Receives `file` and `dataUrl`
              thumbnail: function(D, T) {
                if (D.previewElement) {
                  D.previewElement.classList.remove("dz-file-preview");
                  var L = m(D.previewElement.querySelectorAll("[data-dz-thumbnail]")), b;
                  try {
                    for (L.s(); !(b = L.n()).done; ) {
                      var x = b.value;
                      x.alt = D.name, x.src = T;
                    }
                  } catch (I) {
                    L.e(I);
                  } finally {
                    L.f();
                  }
                  return setTimeout(function() {
                    return D.previewElement.classList.add("dz-image-preview");
                  }, 1);
                }
              },
              // Called whenever an error occurs
              // Receives `file` and `message`
              error: function(D, T) {
                if (D.previewElement) {
                  D.previewElement.classList.add("dz-error"), typeof T != "string" && T.error && (T = T.error);
                  var L = m(D.previewElement.querySelectorAll("[data-dz-errormessage]")), b;
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
              processing: function(D) {
                if (D.previewElement && (D.previewElement.classList.add("dz-processing"), D._removeLink))
                  return D._removeLink.innerHTML = this.options.dictCancelUpload;
              },
              processingmultiple: function() {
              },
              // Called whenever the upload progress gets updated.
              // Receives `file`, `progress` (percentage 0-100) and `bytesSent`.
              // To get the total number of bytes of the file, use `file.size`
              uploadprogress: function(D, T, L) {
                if (D.previewElement) {
                  var b = m(D.previewElement.querySelectorAll("[data-dz-uploadprogress]")), x;
                  try {
                    for (b.s(); !(x = b.n()).done; ) {
                      var I = x.value;
                      I.nodeName === "PROGRESS" ? I.value = T : I.style.width = "".concat(T, "%");
                    }
                  } catch (N) {
                    b.e(N);
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
              success: function(D) {
                if (D.previewElement)
                  return D.previewElement.classList.add("dz-success");
              },
              successmultiple: function() {
              },
              // When the upload is canceled.
              canceled: function(D) {
                return this.emit("error", D, this.options.dictUploadCanceled);
              },
              canceledmultiple: function() {
              },
              // When the upload is finished, either with success or an error.
              // Receives `file`
              complete: function(D) {
                if (D._removeLink && (D._removeLink.innerHTML = this.options.dictRemoveFile), D.previewElement)
                  return D.previewElement.classList.add("dz-complete");
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
            function E(P) {
              "@babel/helpers - typeof";
              return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? E = function(T) {
                return typeof T;
              } : E = function(T) {
                return T && typeof Symbol == "function" && T.constructor === Symbol && T !== Symbol.prototype ? "symbol" : typeof T;
              }, E(P);
            }
            function A(P, D) {
              var T;
              if (typeof Symbol > "u" || P[Symbol.iterator] == null) {
                if (Array.isArray(P) || (T = w(P)) || P && typeof P.length == "number") {
                  T && (P = T);
                  var L = 0, b = function() {
                  };
                  return { s: b, n: function() {
                    return L >= P.length ? { done: !0 } : { done: !1, value: P[L++] };
                  }, e: function(H) {
                    throw H;
                  }, f: b };
                }
                throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
              }
              var x = !0, I = !1, N;
              return { s: function() {
                T = P[Symbol.iterator]();
              }, n: function() {
                var H = T.next();
                return x = H.done, H;
              }, e: function(H) {
                I = !0, N = H;
              }, f: function() {
                try {
                  !x && T.return != null && T.return();
                } finally {
                  if (I) throw N;
                }
              } };
            }
            function w(P, D) {
              if (P) {
                if (typeof P == "string") return V(P, D);
                var T = Object.prototype.toString.call(P).slice(8, -1);
                if (T === "Object" && P.constructor && (T = P.constructor.name), T === "Map" || T === "Set") return Array.from(P);
                if (T === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T)) return V(P, D);
              }
            }
            function V(P, D) {
              (D == null || D > P.length) && (D = P.length);
              for (var T = 0, L = new Array(D); T < D; T++)
                L[T] = P[T];
              return L;
            }
            function M(P, D) {
              if (!(P instanceof D))
                throw new TypeError("Cannot call a class as a function");
            }
            function C(P, D) {
              for (var T = 0; T < D.length; T++) {
                var L = D[T];
                L.enumerable = L.enumerable || !1, L.configurable = !0, "value" in L && (L.writable = !0), Object.defineProperty(P, L.key, L);
              }
            }
            function R(P, D, T) {
              return D && C(P.prototype, D), T && C(P, T), P;
            }
            function k(P, D) {
              if (typeof D != "function" && D !== null)
                throw new TypeError("Super expression must either be null or a function");
              P.prototype = Object.create(D && D.prototype, { constructor: { value: P, writable: !0, configurable: !0 } }), D && $(P, D);
            }
            function $(P, D) {
              return $ = Object.setPrototypeOf || function(L, b) {
                return L.__proto__ = b, L;
              }, $(P, D);
            }
            function B(P) {
              var D = Y();
              return function() {
                var L = ae(P), b;
                if (D) {
                  var x = ae(this).constructor;
                  b = Reflect.construct(L, arguments, x);
                } else
                  b = L.apply(this, arguments);
                return z(this, b);
              };
            }
            function z(P, D) {
              return D && (E(D) === "object" || typeof D == "function") ? D : K(P);
            }
            function K(P) {
              if (P === void 0)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return P;
            }
            function Y() {
              if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
              if (typeof Proxy == "function") return !0;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), !0;
              } catch {
                return !1;
              }
            }
            function ae(P) {
              return ae = Object.setPrototypeOf ? Object.getPrototypeOf : function(T) {
                return T.__proto__ || Object.getPrototypeOf(T);
              }, ae(P);
            }
            var J = /* @__PURE__ */ (function(P) {
              k(T, P);
              var D = B(T);
              function T(L, b) {
                var x;
                M(this, T), x = D.call(this);
                var I, N;
                if (x.element = L, x.version = T.version, x.clickableElements = [], x.listeners = [], x.files = [], typeof x.element == "string" && (x.element = document.querySelector(x.element)), !x.element || x.element.nodeType == null)
                  throw new Error("Invalid dropzone element.");
                if (x.element.dropzone)
                  throw new Error("Dropzone already attached.");
                T.instances.push(K(x)), x.element.dropzone = K(x);
                var U = (N = T.optionsForElement(x.element)) != null ? N : {};
                if (x.options = T.extend({}, S, U, b ?? {}), x.options.previewTemplate = x.options.previewTemplate.replace(/\n*/g, ""), x.options.forceFallback || !T.isBrowserSupported())
                  return z(x, x.options.fallback.call(K(x)));
                if (x.options.url == null && (x.options.url = x.element.getAttribute("action")), !x.options.url)
                  throw new Error("No URL provided.");
                if (x.options.acceptedFiles && x.options.acceptedMimeTypes)
                  throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
                if (x.options.uploadMultiple && x.options.chunking)
                  throw new Error("You cannot set both: uploadMultiple and chunking.");
                return x.options.acceptedMimeTypes && (x.options.acceptedFiles = x.options.acceptedMimeTypes, delete x.options.acceptedMimeTypes), x.options.renameFilename != null && (x.options.renameFile = function(H) {
                  return x.options.renameFilename.call(K(x), H.name, H);
                }), typeof x.options.method == "string" && (x.options.method = x.options.method.toUpperCase()), (I = x.getExistingFallback()) && I.parentNode && I.parentNode.removeChild(I), x.options.previewsContainer !== !1 && (x.options.previewsContainer ? x.previewsContainer = T.getElement(x.options.previewsContainer, "previewsContainer") : x.previewsContainer = x.element), x.options.clickable && (x.options.clickable === !0 ? x.clickableElements = [x.element] : x.clickableElements = T.getElements(x.options.clickable, "clickable")), x.init(), x;
              }
              return R(T, [{
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
                        var Z = b.hiddenFileInput.files;
                        if (Z.length) {
                          var ee = A(Z), ne;
                          try {
                            for (ee.s(); !(ne = ee.n()).done; ) {
                              var le = ne.value;
                              b.addFile(le);
                            }
                          } catch (ge) {
                            ee.e(ge);
                          } finally {
                            ee.f();
                          }
                        }
                        b.emit("addedfiles", Z), q();
                      });
                    };
                    x();
                  }
                  this.URL = window.URL !== null ? window.URL : window.webkitURL;
                  var I = A(this.events), N;
                  try {
                    for (I.s(); !(N = I.n()).done; ) {
                      var U = N.value;
                      this.on(U, this.options[U]);
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
                  var H = function(Z) {
                    if (Z.dataTransfer.types) {
                      for (var ee = 0; ee < Z.dataTransfer.types.length; ee++)
                        if (Z.dataTransfer.types[ee] === "Files") return !0;
                    }
                    return !1;
                  }, Q = function(Z) {
                    if (H(Z))
                      return Z.stopPropagation(), Z.preventDefault ? Z.preventDefault() : Z.returnValue = !1;
                  };
                  return this.listeners = [{
                    element: this.element,
                    events: {
                      dragstart: function(Z) {
                        return b.emit("dragstart", Z);
                      },
                      dragenter: function(Z) {
                        return Q(Z), b.emit("dragenter", Z);
                      },
                      dragover: function(Z) {
                        var ee;
                        try {
                          ee = Z.dataTransfer.effectAllowed;
                        } catch {
                        }
                        return Z.dataTransfer.dropEffect = ee === "move" || ee === "linkMove" ? "move" : "copy", Q(Z), b.emit("dragover", Z);
                      },
                      dragleave: function(Z) {
                        return b.emit("dragleave", Z);
                      },
                      drop: function(Z) {
                        return Q(Z), b.drop(Z);
                      },
                      dragend: function(Z) {
                        return b.emit("dragend", Z);
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
                        click: function(ee) {
                          return (q !== b.element || ee.target === b.element || T.elementInside(ee.target, b.element.querySelector(".dz-message"))) && b.hiddenFileInput.click(), !0;
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
                  var b, x = 0, I = 0, N = this.getActiveFiles();
                  if (N.length) {
                    var U = A(this.getActiveFiles()), H;
                    try {
                      for (U.s(); !(H = U.n()).done; ) {
                        var Q = H.value;
                        x += Q.upload.bytesSent, I += Q.upload.total;
                      }
                    } catch (q) {
                      U.e(q);
                    } finally {
                      U.f();
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
                  var N = T.createElement(I);
                  return this.element.tagName !== "FORM" ? (x = T.createElement('<form action="'.concat(this.options.url, '" enctype="multipart/form-data" method="').concat(this.options.method, '"></form>')), x.appendChild(N)) : (this.element.setAttribute("enctype", "multipart/form-data"), this.element.setAttribute("method", this.options.method)), x ?? N;
                }
                // Returns the fallback elements if they exist already
                //
                // This code has to pass in IE7 :(
              }, {
                key: "getExistingFallback",
                value: function() {
                  for (var b = function(Q) {
                    var q = A(Q), Z;
                    try {
                      for (q.s(); !(Z = q.n()).done; ) {
                        var ee = Z.value;
                        if (/(^| )fallback($| )/.test(ee.className))
                          return ee;
                      }
                    } catch (ne) {
                      q.e(ne);
                    } finally {
                      q.f();
                    }
                  }, x = 0, I = ["div", "form"]; x < I.length; x++) {
                    var N = I[x], U;
                    if (U = b(this.element.getElementsByTagName(N)))
                      return U;
                  }
                }
                // Activates all listeners stored in @listeners
              }, {
                key: "setupEventListeners",
                value: function() {
                  return this.listeners.map(function(b) {
                    return (function() {
                      var x = [];
                      for (var I in b.events) {
                        var N = b.events[I];
                        x.push(b.element.addEventListener(I, N, !1));
                      }
                      return x;
                    })();
                  });
                }
                // Deactivates all listeners stored in @listeners
              }, {
                key: "removeEventListeners",
                value: function() {
                  return this.listeners.map(function(b) {
                    return (function() {
                      var x = [];
                      for (var I in b.events) {
                        var N = b.events[I];
                        x.push(b.element.removeEventListener(I, N, !1));
                      }
                      return x;
                    })();
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
                    for (var N = ["tb", "gb", "mb", "kb", "b"], U = 0; U < N.length; U++) {
                      var H = N[U], Q = Math.pow(this.options.filesizeBase, 4 - U) / 10;
                      if (b >= Q) {
                        x = b / Math.pow(this.options.filesizeBase, 4 - U), I = H;
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
                      var N = b.dataTransfer.items;
                      N && N.length && N[0].webkitGetAsEntry != null ? this._addFilesFromItems(N) : this.handleFiles(x);
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
                      var N = I.value;
                      this.addFile(N);
                    }
                  } catch (U) {
                    x.e(U);
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
                  return (function() {
                    var I = [], N = A(b), U;
                    try {
                      for (N.s(); !(U = N.n()).done; ) {
                        var H = U.value, Q;
                        H.webkitGetAsEntry != null && (Q = H.webkitGetAsEntry()) ? Q.isFile ? I.push(x.addFile(H.getAsFile())) : Q.isDirectory ? I.push(x._addFilesFromDirectory(Q, Q.name)) : I.push(void 0) : H.getAsFile != null && (H.kind == null || H.kind === "file") ? I.push(x.addFile(H.getAsFile())) : I.push(void 0);
                      }
                    } catch (q) {
                      N.e(q);
                    } finally {
                      N.f();
                    }
                    return I;
                  })();
                }
                // Goes through the directory, and adds each file it finds recursively
              }, {
                key: "_addFilesFromDirectory",
                value: function(b, x) {
                  var I = this, N = b.createReader(), U = function(q) {
                    return be(console, "log", function(Z) {
                      return Z.log(q);
                    });
                  }, H = function Q() {
                    return N.readEntries(function(q) {
                      if (q.length > 0) {
                        var Z = A(q), ee;
                        try {
                          for (Z.s(); !(ee = Z.n()).done; ) {
                            var ne = ee.value;
                            ne.isFile ? ne.file(function(le) {
                              if (!(I.options.ignoreHiddenFiles && le.name.substring(0, 1) === "."))
                                return le.fullPath = "".concat(x, "/").concat(le.name), I.addFile(le);
                            }) : ne.isDirectory && I._addFilesFromDirectory(ne, "".concat(x, "/").concat(ne.name));
                          }
                        } catch (le) {
                          Z.e(le);
                        } finally {
                          Z.f();
                        }
                        Q();
                      }
                      return null;
                    }, U);
                  };
                  return H();
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
                      var N = I.value;
                      this.enqueueFile(N);
                    }
                  } catch (U) {
                    x.e(U);
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
                      var N = I.value;
                      (N.status !== T.UPLOADING || b) && this.removeFile(N);
                    }
                  } catch (U) {
                    x.e(U);
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
                value: function(b, x, I, N, U) {
                  var H = this;
                  return this.createThumbnail(b, x, I, N, !0, function(Q, q) {
                    if (q == null)
                      return U(b);
                    var Z = H.options.resizeMimeType;
                    Z == null && (Z = b.type);
                    var ee = q.toDataURL(Z, H.options.resizeQuality);
                    return (Z === "image/jpeg" || Z === "image/jpg") && (ee = Ee.restore(b.dataURL, ee)), U(T.dataURItoBlob(ee));
                  });
                }
              }, {
                key: "createThumbnail",
                value: function(b, x, I, N, U, H) {
                  var Q = this, q = new FileReader();
                  q.onload = function() {
                    if (b.dataURL = q.result, b.type === "image/svg+xml") {
                      H != null && H(q.result);
                      return;
                    }
                    Q.createThumbnailFromUrl(b, x, I, N, U, H);
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
                value: function(b, x, I, N) {
                  var U = this, H = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0;
                  if (this.emit("addedfile", b), this.emit("complete", b), !H)
                    this.emit("thumbnail", b, x), I && I();
                  else {
                    var Q = function(Z) {
                      U.emit("thumbnail", b, Z), I && I();
                    };
                    b.dataURL = x, this.createThumbnailFromUrl(b, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, this.options.fixOrientation, Q, N);
                  }
                }
              }, {
                key: "createThumbnailFromUrl",
                value: function(b, x, I, N, U, H, Q) {
                  var q = this, Z = document.createElement("img");
                  return Q && (Z.crossOrigin = Q), U = getComputedStyle(document.body).imageOrientation == "from-image" ? !1 : U, Z.onload = function() {
                    var ee = function(le) {
                      return le(1);
                    };
                    return typeof EXIF < "u" && EXIF !== null && U && (ee = function(le) {
                      return EXIF.getData(Z, function() {
                        return le(EXIF.getTag(this, "Orientation"));
                      });
                    }), ee(function(ne) {
                      b.width = Z.width, b.height = Z.height;
                      var le = q.options.resize.call(q, b, x, I, N), ge = document.createElement("canvas"), Pe = ge.getContext("2d");
                      switch (ge.width = le.trgWidth, ge.height = le.trgHeight, ne > 4 && (ge.width = le.trgHeight, ge.height = le.trgWidth), ne) {
                        case 2:
                          Pe.translate(ge.width, 0), Pe.scale(-1, 1);
                          break;
                        case 3:
                          Pe.translate(ge.width, ge.height), Pe.rotate(Math.PI);
                          break;
                        case 4:
                          Pe.translate(0, ge.height), Pe.scale(1, -1);
                          break;
                        case 5:
                          Pe.rotate(0.5 * Math.PI), Pe.scale(1, -1);
                          break;
                        case 6:
                          Pe.rotate(0.5 * Math.PI), Pe.translate(0, -ge.width);
                          break;
                        case 7:
                          Pe.rotate(0.5 * Math.PI), Pe.translate(ge.height, -ge.width), Pe.scale(-1, 1);
                          break;
                        case 8:
                          Pe.rotate(-0.5 * Math.PI), Pe.translate(-ge.height, 0);
                          break;
                      }
                      Ce(Pe, Z, le.srcX != null ? le.srcX : 0, le.srcY != null ? le.srcY : 0, le.srcWidth, le.srcHeight, le.trgX != null ? le.trgX : 0, le.trgY != null ? le.trgY : 0, le.trgWidth, le.trgHeight);
                      var Ke = ge.toDataURL("image/png");
                      if (H != null)
                        return H(Ke, ge);
                    });
                  }, H != null && (Z.onerror = H), Z.src = b.dataURL;
                }
                // Goes through the queue and processes files if there aren't too many already.
              }, {
                key: "processQueue",
                value: function() {
                  var b = this.options.parallelUploads, x = this.getUploadingFiles().length, I = x;
                  if (!(x >= b)) {
                    var N = this.getQueuedFiles();
                    if (N.length > 0) {
                      if (this.options.uploadMultiple)
                        return this.processFiles(N.slice(0, b - x));
                      for (; I < b; ) {
                        if (!N.length)
                          return;
                        this.processFile(N.shift()), I++;
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
                      var N = I.value;
                      N.processing = !0, N.status = T.UPLOADING, this.emit("processing", N);
                    }
                  } catch (U) {
                    x.e(U);
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
                    var x = this._getFilesWithXhr(b.xhr), I = A(x), N;
                    try {
                      for (I.s(); !(N = I.n()).done; ) {
                        var U = N.value;
                        U.status = T.CANCELED;
                      }
                    } catch (Z) {
                      I.e(Z);
                    } finally {
                      I.f();
                    }
                    typeof b.xhr < "u" && b.xhr.abort();
                    var H = A(x), Q;
                    try {
                      for (H.s(); !(Q = H.n()).done; ) {
                        var q = Q.value;
                        this.emit("canceled", q);
                      }
                    } catch (Z) {
                      H.e(Z);
                    } finally {
                      H.f();
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
                    for (var x = arguments.length, I = new Array(x > 1 ? x - 1 : 0), N = 1; N < x; N++)
                      I[N - 1] = arguments[N];
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
                      var N = I[0];
                      b[0].upload.chunked = x.options.chunking && (x.options.forceChunking || N.size > x.options.chunkSize), b[0].upload.totalChunkCount = Math.ceil(N.size / x.options.chunkSize);
                    }
                    if (b[0].upload.chunked) {
                      var U = b[0], H = I[0];
                      U.upload.chunks = [];
                      var Q = function() {
                        for (var le = 0; U.upload.chunks[le] !== void 0; )
                          le++;
                        if (!(le >= U.upload.totalChunkCount)) {
                          var ge = le * x.options.chunkSize, Pe = Math.min(ge + x.options.chunkSize, H.size), Ke = {
                            name: x._getParamName(0),
                            data: H.webkitSlice ? H.webkitSlice(ge, Pe) : H.slice(ge, Pe),
                            filename: U.upload.filename,
                            chunkIndex: le
                          };
                          U.upload.chunks[le] = {
                            file: U,
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
                      if (U.upload.finishedChunkUpload = function(ne, le) {
                        var ge = !0;
                        ne.status = T.SUCCESS, ne.dataBlock = null, ne.xhr = null;
                        for (var Pe = 0; Pe < U.upload.totalChunkCount; Pe++) {
                          if (U.upload.chunks[Pe] === void 0)
                            return Q();
                          U.upload.chunks[Pe].status !== T.SUCCESS && (ge = !1);
                        }
                        ge && x.options.chunksUploaded(U, function() {
                          x._finished(b, le, null);
                        });
                      }, x.options.parallelChunkUploads)
                        for (var q = 0; q < U.upload.totalChunkCount; q++)
                          Q();
                      else
                        Q();
                    } else {
                      for (var Z = [], ee = 0; ee < b.length; ee++)
                        Z[ee] = {
                          name: x._getParamName(ee),
                          data: I[ee],
                          filename: b[ee].upload.filename
                        };
                      x._uploadData(b, Z);
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
                  var I = this, N = new XMLHttpRequest(), U = A(b), H;
                  try {
                    for (U.s(); !(H = U.n()).done; ) {
                      var Q = H.value;
                      Q.xhr = N;
                    }
                  } catch (Te) {
                    U.e(Te);
                  } finally {
                    U.f();
                  }
                  b[0].upload.chunked && (b[0].upload.chunks[x[0].chunkIndex].xhr = N);
                  var q = this.resolveOption(this.options.method, b), Z = this.resolveOption(this.options.url, b);
                  N.open(q, Z, !0);
                  var ee = this.resolveOption(this.options.timeout, b);
                  ee && (N.timeout = this.resolveOption(this.options.timeout, b)), N.withCredentials = !!this.options.withCredentials, N.onload = function(Te) {
                    I._finishedUploading(b, N, Te);
                  }, N.ontimeout = function() {
                    I._handleUploadError(b, N, "Request timedout after ".concat(I.options.timeout / 1e3, " seconds"));
                  }, N.onerror = function() {
                    I._handleUploadError(b, N);
                  };
                  var ne = N.upload != null ? N.upload : N;
                  ne.onprogress = function(Te) {
                    return I._updateFilesUploadProgress(b, N, Te);
                  };
                  var le = {
                    Accept: "application/json",
                    "Cache-Control": "no-cache",
                    "X-Requested-With": "XMLHttpRequest"
                  };
                  this.options.headers && T.extend(le, this.options.headers);
                  for (var ge in le) {
                    var Pe = le[ge];
                    Pe && N.setRequestHeader(ge, Pe);
                  }
                  var Ke = new FormData();
                  if (this.options.params) {
                    var tt = this.options.params;
                    typeof tt == "function" && (tt = tt.call(this, b, N, b[0].upload.chunked ? this._getChunk(b[0], N) : null));
                    for (var qe in tt) {
                      var G = tt[qe];
                      if (Array.isArray(G))
                        for (var X = 0; X < G.length; X++)
                          Ke.append(qe, G[X]);
                      else
                        Ke.append(qe, G);
                    }
                  }
                  var oe = A(b), de;
                  try {
                    for (oe.s(); !(de = oe.n()).done; ) {
                      var we = de.value;
                      this.emit("sending", we, N, Ke);
                    }
                  } catch (Te) {
                    oe.e(Te);
                  } finally {
                    oe.f();
                  }
                  this.options.uploadMultiple && this.emit("sendingmultiple", b, N, Ke), this._addFormElementData(Ke);
                  for (var je = 0; je < x.length; je++) {
                    var Re = x[je];
                    Ke.append(Re.name, Re.data, Re.filename);
                  }
                  this.submitRequest(N, Ke, b);
                }
                // Transforms all files with this.options.transformFile and invokes done with the transformed files when done.
              }, {
                key: "_transformFiles",
                value: function(b, x) {
                  for (var I = this, N = [], U = 0, H = function(Z) {
                    I.options.transformFile.call(I, b[Z], function(ee) {
                      N[Z] = ee, ++U === b.length && x(N);
                    });
                  }, Q = 0; Q < b.length; Q++)
                    H(Q);
                }
                // Takes care of adding other input elements of the form to the AJAX request
              }, {
                key: "_addFormElementData",
                value: function(b) {
                  if (this.element.tagName === "FORM") {
                    var x = A(this.element.querySelectorAll("input, textarea, select, button")), I;
                    try {
                      for (x.s(); !(I = x.n()).done; ) {
                        var N = I.value, U = N.getAttribute("name"), H = N.getAttribute("type");
                        if (H && (H = H.toLowerCase()), !(typeof U > "u" || U === null))
                          if (N.tagName === "SELECT" && N.hasAttribute("multiple")) {
                            var Q = A(N.options, !0), q;
                            try {
                              for (Q.s(); !(q = Q.n()).done; ) {
                                var Z = q.value;
                                Z.selected && b.append(U, Z.value);
                              }
                            } catch (ee) {
                              Q.e(ee);
                            } finally {
                              Q.f();
                            }
                          } else (!H || H !== "checkbox" && H !== "radio" || N.checked) && b.append(U, N.value);
                      }
                    } catch (ee) {
                      x.e(ee);
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
                    for (var Z = 0; Z < Q.upload.totalChunkCount; Z++)
                      Q.upload.chunks[Z] && typeof Q.upload.chunks[Z].progress < "u" && (Q.upload.progress += Q.upload.chunks[Z].progress, Q.upload.total += Q.upload.chunks[Z].total, Q.upload.bytesSent += Q.upload.chunks[Z].bytesSent);
                    Q.upload.progress = Q.upload.progress / Q.upload.totalChunkCount, this.emit("uploadprogress", Q, Q.upload.progress, Q.upload.bytesSent);
                  } else {
                    var N = A(b), U;
                    try {
                      for (N.s(); !(U = N.n()).done; ) {
                        var H = U.value;
                        H.upload.total && H.upload.bytesSent && H.upload.bytesSent == H.upload.total || (I ? (H.upload.progress = 100 * I.loaded / I.total, H.upload.total = I.total, H.upload.bytesSent = I.loaded) : (H.upload.progress = 100, H.upload.bytesSent = H.upload.total), this.emit("uploadprogress", H, H.upload.progress, H.upload.bytesSent));
                      }
                    } catch (ee) {
                      N.e(ee);
                    } finally {
                      N.f();
                    }
                  }
                }
              }, {
                key: "_finishedUploading",
                value: function(b, x, I) {
                  var N;
                  if (b[0].status !== T.CANCELED && x.readyState === 4) {
                    if (x.responseType !== "arraybuffer" && x.responseType !== "blob" && (N = x.responseText, x.getResponseHeader("content-type") && ~x.getResponseHeader("content-type").indexOf("application/json")))
                      try {
                        N = JSON.parse(N);
                      } catch (U) {
                        I = U, N = "Invalid JSON response from server.";
                      }
                    this._updateFilesUploadProgress(b, x), 200 <= x.status && x.status < 300 ? b[0].upload.chunked ? b[0].upload.finishedChunkUpload(this._getChunk(b[0], x), N) : this._finished(b, N, I) : this._handleUploadError(b, x, N);
                  }
                }
              }, {
                key: "_handleUploadError",
                value: function(b, x, I) {
                  if (b[0].status !== T.CANCELED) {
                    if (b[0].upload.chunked && this.options.retryChunks) {
                      var N = this._getChunk(b[0], x);
                      if (N.retries++ < this.options.retryChunksLimit) {
                        this._uploadData(b, [N.dataBlock]);
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
                  var N = A(b), U;
                  try {
                    for (N.s(); !(U = N.n()).done; ) {
                      var H = U.value;
                      H.status = T.SUCCESS, this.emit("success", H, x, I), this.emit("complete", H);
                    }
                  } catch (Q) {
                    N.e(Q);
                  } finally {
                    N.f();
                  }
                  if (this.options.uploadMultiple && (this.emit("successmultiple", b, x, I), this.emit("completemultiple", b)), this.options.autoProcessQueue)
                    return this.processQueue();
                }
                // Called internally when processing is finished.
                // Individual callbacks have to be called in the appropriate sections.
              }, {
                key: "_errorProcessing",
                value: function(b, x, I) {
                  var N = A(b), U;
                  try {
                    for (N.s(); !(U = N.n()).done; ) {
                      var H = U.value;
                      H.status = T.ERROR, this.emit("error", H, x, I), this.emit("complete", H);
                    }
                  } catch (Q) {
                    N.e(Q);
                  } finally {
                    N.f();
                  }
                  if (this.options.uploadMultiple && (this.emit("errormultiple", b, x, I), this.emit("completemultiple", b)), this.options.autoProcessQueue)
                    return this.processQueue();
                }
              }], [{
                key: "initClass",
                value: function() {
                  this.prototype.Emitter = p, this.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"], this.prototype._thumbnailQueue = [], this.prototype._processingThumbnail = !1;
                }
                // global utility
              }, {
                key: "extend",
                value: function(b) {
                  for (var x = arguments.length, I = new Array(x > 1 ? x - 1 : 0), N = 1; N < x; N++)
                    I[N - 1] = arguments[N];
                  for (var U = 0, H = I; U < H.length; U++) {
                    var Q = H[U];
                    for (var q in Q) {
                      var Z = Q[q];
                      b[q] = Z;
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
            })(p);
            J.initClass(), J.version = "5.9.3", J.options = {}, J.optionsForElement = function(P) {
              if (P.getAttribute("id"))
                return J.options[ce(P.getAttribute("id"))];
            }, J.instances = [], J.forElement = function(P) {
              if (typeof P == "string" && (P = document.querySelector(P)), (P != null ? P.dropzone : void 0) == null)
                throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
              return P.dropzone;
            }, J.autoDiscover = !0, J.discover = function() {
              var P;
              if (document.querySelectorAll)
                P = document.querySelectorAll(".dropzone");
              else {
                P = [];
                var D = function(L) {
                  return (function() {
                    var b = [], x = A(L), I;
                    try {
                      for (x.s(); !(I = x.n()).done; ) {
                        var N = I.value;
                        /(^| )dropzone($| )/.test(N.className) ? b.push(P.push(N)) : b.push(void 0);
                      }
                    } catch (U) {
                      x.e(U);
                    } finally {
                      x.f();
                    }
                    return b;
                  })();
                };
                D(document.getElementsByTagName("div")), D(document.getElementsByTagName("form"));
              }
              return (function() {
                var T = [], L = A(P), b;
                try {
                  for (L.s(); !(b = L.n()).done; ) {
                    var x = b.value;
                    J.optionsForElement(x) !== !1 ? T.push(new J(x)) : T.push(void 0);
                  }
                } catch (I) {
                  L.e(I);
                } finally {
                  L.f();
                }
                return T;
              })();
            }, J.blockedBrowsers = [
              // The mac os and windows phone version of opera 12 seems to have a problem with the File drag'n'drop API.
              /opera.*(Macintosh|Windows Phone).*version\/12/i
            ], J.isBrowserSupported = function() {
              var P = !0;
              if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector)
                if (!("classList" in document.createElement("a")))
                  P = !1;
                else {
                  J.blacklistedBrowsers !== void 0 && (J.blockedBrowsers = J.blacklistedBrowsers);
                  var D = A(J.blockedBrowsers), T;
                  try {
                    for (D.s(); !(T = D.n()).done; ) {
                      var L = T.value;
                      if (L.test(navigator.userAgent)) {
                        P = !1;
                        continue;
                      }
                    }
                  } catch (b) {
                    D.e(b);
                  } finally {
                    D.f();
                  }
                }
              else
                P = !1;
              return P;
            }, J.dataURItoBlob = function(P) {
              for (var D = atob(P.split(",")[1]), T = P.split(",")[0].split(":")[1].split(";")[0], L = new ArrayBuffer(D.length), b = new Uint8Array(L), x = 0, I = D.length, N = 0 <= I; N ? x <= I : x >= I; N ? x++ : x--)
                b[x] = D.charCodeAt(x);
              return new Blob([L], {
                type: T
              });
            };
            var he = function(D, T) {
              return D.filter(function(L) {
                return L !== T;
              }).map(function(L) {
                return L;
              });
            }, ce = function(D) {
              return D.replace(/[\-_](\w)/g, function(T) {
                return T.charAt(1).toUpperCase();
              });
            };
            J.createElement = function(P) {
              var D = document.createElement("div");
              return D.innerHTML = P, D.childNodes[0];
            }, J.elementInside = function(P, D) {
              if (P === D)
                return !0;
              for (; P = P.parentNode; )
                if (P === D)
                  return !0;
              return !1;
            }, J.getElement = function(P, D) {
              var T;
              if (typeof P == "string" ? T = document.querySelector(P) : P.nodeType != null && (T = P), T == null)
                throw new Error("Invalid `".concat(D, "` option provided. Please provide a CSS selector or a plain HTML element."));
              return T;
            }, J.getElements = function(P, D) {
              var T, L;
              if (P instanceof Array) {
                L = [];
                try {
                  var b = A(P, !0), x;
                  try {
                    for (b.s(); !(x = b.n()).done; )
                      T = x.value, L.push(this.getElement(T, D));
                  } catch (U) {
                    b.e(U);
                  } finally {
                    b.f();
                  }
                } catch {
                  L = null;
                }
              } else if (typeof P == "string") {
                L = [];
                var I = A(document.querySelectorAll(P)), N;
                try {
                  for (I.s(); !(N = I.n()).done; )
                    T = N.value, L.push(T);
                } catch (U) {
                  I.e(U);
                } finally {
                  I.f();
                }
              } else P.nodeType != null && (L = [P]);
              if (L == null || !L.length)
                throw new Error("Invalid `".concat(D, "` option provided. Please provide a CSS selector, a plain HTML element or a list of those."));
              return L;
            }, J.confirm = function(P, D, T) {
              if (window.confirm(P))
                return D();
              if (T != null)
                return T();
            }, J.isValidFile = function(P, D) {
              if (!D)
                return !0;
              D = D.split(",");
              var T = P.type, L = T.replace(/\/.*$/, ""), b = A(D), x;
              try {
                for (b.s(); !(x = b.n()).done; ) {
                  var I = x.value;
                  if (I = I.trim(), I.charAt(0) === ".") {
                    if (P.name.toLowerCase().indexOf(I.toLowerCase(), P.name.length - I.length) !== -1)
                      return !0;
                  } else if (/\/\*$/.test(I)) {
                    if (L === I.replace(/\/.*$/, ""))
                      return !0;
                  } else if (T === I)
                    return !0;
                }
              } catch (N) {
                b.e(N);
              } finally {
                b.f();
              }
              return !1;
            }, typeof jQuery < "u" && jQuery !== null && (jQuery.fn.dropzone = function(P) {
              return this.each(function() {
                return new J(this, P);
              });
            }), J.ADDED = "added", J.QUEUED = "queued", J.ACCEPTED = J.QUEUED, J.UPLOADING = "uploading", J.PROCESSING = J.UPLOADING, J.CANCELED = "canceled", J.ERROR = "error", J.SUCCESS = "success";
            var ye = function(D) {
              D.naturalWidth;
              var T = D.naturalHeight, L = document.createElement("canvas");
              L.width = 1, L.height = T;
              var b = L.getContext("2d");
              b.drawImage(D, 0, 0);
              for (var x = b.getImageData(1, 0, 1, T), I = x.data, N = 0, U = T, H = T; H > N; ) {
                var Q = I[(H - 1) * 4 + 3];
                Q === 0 ? U = H : N = H, H = U + N >> 1;
              }
              var q = H / T;
              return q === 0 ? 1 : q;
            }, Ce = function(D, T, L, b, x, I, N, U, H, Q) {
              var q = ye(T);
              return D.drawImage(T, L, b, x, I, N, U, H, Q / q);
            }, Ee = /* @__PURE__ */ (function() {
              function P() {
                M(this, P);
              }
              return R(P, null, [{
                key: "initClass",
                value: function() {
                  this.KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                }
              }, {
                key: "encode64",
                value: function(T) {
                  for (var L = "", b = void 0, x = void 0, I = "", N = void 0, U = void 0, H = void 0, Q = "", q = 0; b = T[q++], x = T[q++], I = T[q++], N = b >> 2, U = (b & 3) << 4 | x >> 4, H = (x & 15) << 2 | I >> 6, Q = I & 63, isNaN(x) ? H = Q = 64 : isNaN(I) && (Q = 64), L = L + this.KEY_STR.charAt(N) + this.KEY_STR.charAt(U) + this.KEY_STR.charAt(H) + this.KEY_STR.charAt(Q), b = x = I = "", N = U = H = Q = "", q < T.length; )
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
                  var b = T.replace("data:image/jpeg;base64,", ""), x = this.decode64(b), I = x.indexOf(255, 3), N = x.slice(0, I), U = x.slice(I), H = N;
                  return H = H.concat(L), H = H.concat(U), H;
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
                      var I = L + x + 2, N = T.slice(L, I);
                      b.push(N), L = I;
                    }
                    if (L > T.length)
                      break;
                  }
                  return b;
                }
              }, {
                key: "decode64",
                value: function(T) {
                  var L = void 0, b = void 0, x = "", I = void 0, N = void 0, U = void 0, H = "", Q = 0, q = [], Z = /[^A-Za-z0-9\+\/\=]/g;
                  for (Z.exec(T) && console.warn(`There were invalid base64 characters in the input text.
Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='
Expect errors in decoding.`), T = T.replace(/[^A-Za-z0-9\+\/\=]/g, ""); I = this.KEY_STR.indexOf(T.charAt(Q++)), N = this.KEY_STR.indexOf(T.charAt(Q++)), U = this.KEY_STR.indexOf(T.charAt(Q++)), H = this.KEY_STR.indexOf(T.charAt(Q++)), L = I << 2 | N >> 4, b = (N & 15) << 4 | U >> 2, x = (U & 3) << 6 | H, q.push(L), U !== 64 && q.push(b), H !== 64 && q.push(x), L = b = x = "", I = N = U = H = "", Q < T.length; )
                    ;
                  return q;
                }
              }]), P;
            })();
            Ee.initClass();
            var Ue = function(D, T) {
              var L = !1, b = !0, x = D.document, I = x.documentElement, N = x.addEventListener ? "addEventListener" : "attachEvent", U = x.addEventListener ? "removeEventListener" : "detachEvent", H = x.addEventListener ? "" : "on", Q = function Z(ee) {
                if (!(ee.type === "readystatechange" && x.readyState !== "complete") && ((ee.type === "load" ? D : x)[U](H + ee.type, Z, !1), !L && (L = !0)))
                  return T.call(D, ee.type || ee);
              }, q = function Z() {
                try {
                  I.doScroll("left");
                } catch {
                  setTimeout(Z, 50);
                  return;
                }
                return Q("poll");
              };
              if (x.readyState !== "complete") {
                if (x.createEventObject && I.doScroll) {
                  try {
                    b = !D.frameElement;
                  } catch {
                  }
                  b && q();
                }
                return x[N](H + "DOMContentLoaded", Q, !1), x[N](H + "readystatechange", Q, !1), D[N](H + "load", Q, !1);
              }
            };
            J._autoDiscoverFunction = function() {
              if (J.autoDiscover)
                return J.discover();
            }, Ue(window, J._autoDiscoverFunction);
            function Ne(P, D) {
              return typeof P < "u" && P !== null ? D(P) : void 0;
            }
            function be(P, D, T) {
              if (typeof P < "u" && P !== null && typeof P[D] == "function")
                return T(P, D);
            }
            window.Dropzone = J;
            var xe = J;
          })(), u;
        })()
      );
    });
  })(aa)), aa.exports;
}
var bd = yd();
const $s = /* @__PURE__ */ Ha(bd);
$s.autoDiscover = !1;
const xd = {
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
      placeholder: "",
      uploadUrl: ""
    };
  },
  mounted() {
    var e, n, a;
    const t = this.$parent._.parent.data.csrf;
    (this.editable || this.preview) && (this.uploadUrl = ((a = (n = (e = this.$parent) == null ? void 0 : e.$parent) == null ? void 0 : n.$props) == null ? void 0 : a.uploadUrl) || "/api/generic/media/upload", this.dropzone = new $s(this.$refs.dropzone, {
      url: this.uploadUrl,
      addRemoveLinks: !0,
      dictDefaultMessage: "",
      sending: (i, u, r) => {
        r.append("_token", t);
      },
      success: (i, u) => {
        this.files.push(u);
      },
      complete: (i) => {
        this.dropzone.removeFile(i);
      }
    }));
  },
  created() {
    var e;
    const t = (e = this.modelValue) == null ? void 0 : e.value;
    if (Array.isArray(t))
      this.files = [...t];
    else if (t && typeof t == "object") {
      const n = Object.keys(t).length ? Object.values(t) : [];
      this.files = [...n];
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
      vt.delete(`/api/generic/media?path=${e.path}`).then((n) => {
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
}, Sd = { class: "file-upload flex-col" }, Ed = ["name", "value"], wd = {
  key: 0,
  class: "flex flex-row gap-4 mt-1 mb-[55px]"
}, Td = { class: "preview" }, Ad = { class: "file-upload-preview" }, Cd = ["src", "title"], Od = {
  key: 1,
  class: "svg",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true"
}, Rd = ["href"], Pd = { class: "file-upload-title line-clamp-2 hover:text-blue-500" }, Id = ["onClick"], Dd = {
  key: 1,
  class: "inline-block text-sm text-gray-600 mt-1.5 brand-200"
};
function Fd(t, e, n, a, i, u) {
  var r;
  return _(), re("div", Sd, [
    j("input", {
      type: "hidden",
      name: n.name,
      value: u.valueJson
    }, null, 8, Ed),
    i.files.length ? (_(), re("div", wd, [
      (_(!0), re(Dt, null, bn(i.files, (s, o) => (_(), re("div", {
        key: `file_${s == null ? void 0 : s.id}_${o}`,
        class: "file-upload-file"
      }, [
        j("div", Td, [
          j("span", Ad, [
            u.isImage(s.mime_type) ? (_(), re("img", {
              key: 0,
              class: "img",
              src: s.url,
              title: s.name
            }, null, 8, Cd)) : (_(), re("svg", Od, [...e[0] || (e[0] = [
              j("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              }, null, -1)
            ])]))
          ]),
          j("a", {
            href: s.url,
            target: "_blank",
            class: "link"
          }, [
            j("div", Pd, $e(s.name), 1)
          ], 8, Rd),
          t.editable ? (_(), re("a", {
            key: 0,
            class: "file-upload-file-remove",
            onClick: (l) => u.deleteFile(o, s)
          }, [...e[1] || (e[1] = [
            j("svg", {
              width: "14",
              height: "16",
              viewBox: "0 0 14 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, [
              j("path", {
                d: "M9.66667 3.99992V3.46659C9.66667 2.71985 9.66667 2.34648 9.52134 2.06126C9.39351 1.81038 9.18954 1.60641 8.93865 1.47858C8.65344 1.33325 8.28007 1.33325 7.53333 1.33325H6.46667C5.71993 1.33325 5.34656 1.33325 5.06135 1.47858C4.81046 1.60641 4.60649 1.81038 4.47866 2.06126C4.33333 2.34648 4.33333 2.71985 4.33333 3.46659V3.99992M5.66667 7.66659V10.9999M8.33333 7.66659V10.9999M1 3.99992H13M11.6667 3.99992V11.4666C11.6667 12.5867 11.6667 13.1467 11.4487 13.5746C11.2569 13.9509 10.951 14.2569 10.5746 14.4486C10.1468 14.6666 9.58677 14.6666 8.46667 14.6666H5.53333C4.41323 14.6666 3.85318 14.6666 3.42535 14.4486C3.04903 14.2569 2.74307 13.9509 2.55132 13.5746C2.33333 13.1467 2.33333 12.5867 2.33333 11.4666V3.99992",
                stroke: "#667085",
                "stroke-width": "1.5",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              })
            ], -1)
          ])], 8, Id)) : Fe("", !0)
        ])
      ]))), 128))
    ])) : Fe("", !0),
    j("div", {
      class: rt(["dropzone", n.modelValue.class]),
      ref: "dropzone"
    }, [...e[2] || (e[2] = [
      j("div", { class: "placeholder" }, [
        j("div", null, [
          j("svg", {
            width: "20",
            height: "18",
            viewBox: "0 0 20 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            j("path", {
              d: "M6.66602 12.3333L9.99935 9M9.99935 9L13.3327 12.3333M9.99935 9V16.5M16.666 12.9524C17.6839 12.1117 18.3327 10.8399 18.3327 9.41667C18.3327 6.88536 16.2807 4.83333 13.7493 4.83333C13.5673 4.83333 13.3969 4.73833 13.3044 4.58145C12.2177 2.73736 10.2114 1.5 7.91602 1.5C4.46424 1.5 1.66602 4.29822 1.66602 7.75C1.66602 9.47175 2.36222 11.0309 3.48847 12.1613",
              stroke: "#475467",
              "stroke-width": "1.66667",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            })
          ])
        ]),
        j("div", null, [
          j("p", null, [
            j("span", null, "Click to upload"),
            j("span", null, " or drag and drop")
          ]),
          j("span", null, "(max. 20MB)")
        ])
      ], -1)
    ])], 2),
    (r = n.modelValue) != null && r.hint ? (_(), re("p", Dd, $e(n.modelValue.hint), 1)) : Fe("", !0)
  ]);
}
const Bs = /* @__PURE__ */ bt(xd, [["render", Fd]]);
var xr = { exports: {} };
xr.exports;
var Vi;
function Md() {
  return Vi || (Vi = 1, (function(t, e) {
    var n = 200, a = "__lodash_hash_undefined__", i = 9007199254740991, u = "[object Arguments]", r = "[object Array]", s = "[object Boolean]", o = "[object Date]", l = "[object Error]", c = "[object Function]", d = "[object GeneratorFunction]", p = "[object Map]", h = "[object Number]", f = "[object Object]", m = "[object Promise]", v = "[object RegExp]", g = "[object Set]", y = "[object String]", S = "[object Symbol]", E = "[object WeakMap]", A = "[object ArrayBuffer]", w = "[object DataView]", V = "[object Float32Array]", M = "[object Float64Array]", C = "[object Int8Array]", R = "[object Int16Array]", k = "[object Int32Array]", $ = "[object Uint8Array]", B = "[object Uint8ClampedArray]", z = "[object Uint16Array]", K = "[object Uint32Array]", Y = /[\\^$.*+?()[\]{}|]/g, ae = /\w*$/, J = /^\[object .+?Constructor\]$/, he = /^(?:0|[1-9]\d*)$/, ce = {};
    ce[u] = ce[r] = ce[A] = ce[w] = ce[s] = ce[o] = ce[V] = ce[M] = ce[C] = ce[R] = ce[k] = ce[p] = ce[h] = ce[f] = ce[v] = ce[g] = ce[y] = ce[S] = ce[$] = ce[B] = ce[z] = ce[K] = !0, ce[l] = ce[c] = ce[E] = !1;
    var ye = typeof ao == "object" && ao && ao.Object === Object && ao, Ce = typeof self == "object" && self && self.Object === Object && self, Ee = ye || Ce || Function("return this")(), Ue = e && !e.nodeType && e, Ne = Ue && !0 && t && !t.nodeType && t, be = Ne && Ne.exports === Ue;
    function xe(O, te) {
      return O.set(te[0], te[1]), O;
    }
    function P(O, te) {
      return O.add(te), O;
    }
    function D(O, te) {
      for (var fe = -1, ke = O ? O.length : 0; ++fe < ke && te(O[fe], fe, O) !== !1; )
        ;
      return O;
    }
    function T(O, te) {
      for (var fe = -1, ke = te.length, Et = O.length; ++fe < ke; )
        O[Et + fe] = te[fe];
      return O;
    }
    function L(O, te, fe, ke) {
      for (var Et = -1, Ut = O ? O.length : 0; ++Et < Ut; )
        fe = te(fe, O[Et], Et, O);
      return fe;
    }
    function b(O, te) {
      for (var fe = -1, ke = Array(O); ++fe < O; )
        ke[fe] = te(fe);
      return ke;
    }
    function x(O, te) {
      return O == null ? void 0 : O[te];
    }
    function I(O) {
      var te = !1;
      if (O != null && typeof O.toString != "function")
        try {
          te = !!(O + "");
        } catch {
        }
      return te;
    }
    function N(O) {
      var te = -1, fe = Array(O.size);
      return O.forEach(function(ke, Et) {
        fe[++te] = [Et, ke];
      }), fe;
    }
    function U(O, te) {
      return function(fe) {
        return O(te(fe));
      };
    }
    function H(O) {
      var te = -1, fe = Array(O.size);
      return O.forEach(function(ke) {
        fe[++te] = ke;
      }), fe;
    }
    var Q = Array.prototype, q = Function.prototype, Z = Object.prototype, ee = Ee["__core-js_shared__"], ne = (function() {
      var O = /[^.]+$/.exec(ee && ee.keys && ee.keys.IE_PROTO || "");
      return O ? "Symbol(src)_1." + O : "";
    })(), le = q.toString, ge = Z.hasOwnProperty, Pe = Z.toString, Ke = RegExp(
      "^" + le.call(ge).replace(Y, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    ), tt = be ? Ee.Buffer : void 0, qe = Ee.Symbol, G = Ee.Uint8Array, X = U(Object.getPrototypeOf, Object), oe = Object.create, de = Z.propertyIsEnumerable, we = Q.splice, je = Object.getOwnPropertySymbols, Re = tt ? tt.isBuffer : void 0, Te = U(Object.keys, Object), ze = Jn(Ee, "DataView"), Ie = Jn(Ee, "Map"), Ae = Jn(Ee, "Promise"), Me = Jn(Ee, "Set"), He = Jn(Ee, "WeakMap"), Ve = Jn(Object, "create"), at = Un(ze), Wt = Un(Ie), Mn = Un(Ae), Bt = Un(Me), Yt = Un(He), fr = qe ? qe.prototype : void 0, un = fr ? fr.valueOf : void 0;
    function St(O) {
      var te = -1, fe = O ? O.length : 0;
      for (this.clear(); ++te < fe; ) {
        var ke = O[te];
        this.set(ke[0], ke[1]);
      }
    }
    function Kt() {
      this.__data__ = Ve ? Ve(null) : {};
    }
    function hn(O) {
      return this.has(O) && delete this.__data__[O];
    }
    function hr(O) {
      var te = this.__data__;
      if (Ve) {
        var fe = te[O];
        return fe === a ? void 0 : fe;
      }
      return ge.call(te, O) ? te[O] : void 0;
    }
    function Kn(O) {
      var te = this.__data__;
      return Ve ? te[O] !== void 0 : ge.call(te, O);
    }
    function zr(O, te) {
      var fe = this.__data__;
      return fe[O] = Ve && te === void 0 ? a : te, this;
    }
    St.prototype.clear = Kt, St.prototype.delete = hn, St.prototype.get = hr, St.prototype.has = Kn, St.prototype.set = zr;
    function Xt(O) {
      var te = -1, fe = O ? O.length : 0;
      for (this.clear(); ++te < fe; ) {
        var ke = O[te];
        this.set(ke[0], ke[1]);
      }
    }
    function Gr() {
      this.__data__ = [];
    }
    function Wr(O) {
      var te = this.__data__, fe = Qe(te, O);
      if (fe < 0)
        return !1;
      var ke = te.length - 1;
      return fe == ke ? te.pop() : we.call(te, fe, 1), !0;
    }
    function Yr(O) {
      var te = this.__data__, fe = Qe(te, O);
      return fe < 0 ? void 0 : te[fe][1];
    }
    function Kr(O) {
      return Qe(this.__data__, O) > -1;
    }
    function Xr(O, te) {
      var fe = this.__data__, ke = Qe(fe, O);
      return ke < 0 ? fe.push([O, te]) : fe[ke][1] = te, this;
    }
    Xt.prototype.clear = Gr, Xt.prototype.delete = Wr, Xt.prototype.get = Yr, Xt.prototype.has = Kr, Xt.prototype.set = Xr;
    function pn(O) {
      var te = -1, fe = O ? O.length : 0;
      for (this.clear(); ++te < fe; ) {
        var ke = O[te];
        this.set(ke[0], ke[1]);
      }
    }
    function Jr() {
      this.__data__ = {
        hash: new St(),
        map: new (Ie || Xt)(),
        string: new St()
      };
    }
    function Qr(O) {
      return eo(this, O).delete(O);
    }
    function Zr(O) {
      return eo(this, O).get(O);
    }
    function Mt(O) {
      return eo(this, O).has(O);
    }
    function qr(O, te) {
      return eo(this, O).set(O, te), this;
    }
    pn.prototype.clear = Jr, pn.prototype.delete = Qr, pn.prototype.get = Zr, pn.prototype.has = Mt, pn.prototype.set = qr;
    function vn(O) {
      this.__data__ = new Xt(O);
    }
    function F() {
      this.__data__ = new Xt();
    }
    function ue(O) {
      return this.__data__.delete(O);
    }
    function se(O) {
      return this.__data__.get(O);
    }
    function pe(O) {
      return this.__data__.has(O);
    }
    function me(O, te) {
      var fe = this.__data__;
      if (fe instanceof Xt) {
        var ke = fe.__data__;
        if (!Ie || ke.length < n - 1)
          return ke.push([O, te]), this;
        fe = this.__data__ = new pn(ke);
      }
      return fe.set(O, te), this;
    }
    vn.prototype.clear = F, vn.prototype.delete = ue, vn.prototype.get = se, vn.prototype.has = pe, vn.prototype.set = me;
    function Ge(O, te) {
      var fe = Zo(O) || Ql(O) ? b(O.length, String) : [], ke = fe.length, Et = !!ke;
      for (var Ut in O)
        ge.call(O, Ut) && !(Et && (Ut == "length" || Yl(Ut, ke))) && fe.push(Ut);
      return fe;
    }
    function De(O, te, fe) {
      var ke = O[te];
      (!(ge.call(O, te) && fi(ke, fe)) || fe === void 0 && !(te in O)) && (O[te] = fe);
    }
    function Qe(O, te) {
      for (var fe = O.length; fe--; )
        if (fi(O[fe][0], te))
          return fe;
      return -1;
    }
    function st(O, te) {
      return O && ui(te, qo(te), O);
    }
    function lt(O, te, fe, ke, Et, Ut, mn) {
      var Nt;
      if (ke && (Nt = Ut ? ke(O, Et, Ut, mn) : ke(O)), Nt !== void 0)
        return Nt;
      if (!to(O))
        return O;
      var vi = Zo(O);
      if (vi) {
        if (Nt = zl(O), !te)
          return $l(O, Nt);
      } else {
        var Qn = Ln(O), mi = Qn == c || Qn == d;
        if (ql(O))
          return _r(O, te);
        if (Qn == f || Qn == u || mi && !Ut) {
          if (I(O))
            return Ut ? O : {};
          if (Nt = Gl(mi ? {} : O), !te)
            return Bl(O, st(Nt, O));
        } else {
          if (!ce[Qn])
            return Ut ? O : {};
          Nt = Wl(O, Qn, lt, te);
        }
      }
      mn || (mn = new vn());
      var gi = mn.get(O);
      if (gi)
        return gi;
      if (mn.set(O, Nt), !vi)
        var yi = fe ? Hl(O) : qo(O);
      return D(yi || O, function(_o, no) {
        yi && (no = _o, _o = O[no]), De(Nt, no, lt(_o, te, fe, ke, no, O, mn));
      }), Nt;
    }
    function Lt(O) {
      return to(O) ? oe(O) : {};
    }
    function ve(O, te, fe) {
      var ke = te(O);
      return Zo(O) ? ke : T(ke, fe(O));
    }
    function mt(O) {
      return Pe.call(O);
    }
    function nn(O) {
      if (!to(O) || Xl(O))
        return !1;
      var te = pi(O) || I(O) ? Ke : J;
      return te.test(Un(O));
    }
    function pr(O) {
      if (!di(O))
        return Te(O);
      var te = [];
      for (var fe in Object(O))
        ge.call(O, fe) && fe != "constructor" && te.push(fe);
      return te;
    }
    function _r(O, te) {
      if (te)
        return O.slice();
      var fe = new O.constructor(O.length);
      return O.copy(fe), fe;
    }
    function Xn(O) {
      var te = new O.constructor(O.byteLength);
      return new G(te).set(new G(O)), te;
    }
    function vr(O, te) {
      var fe = te ? Xn(O.buffer) : O.buffer;
      return new O.constructor(fe, O.byteOffset, O.byteLength);
    }
    function Ul(O, te, fe) {
      var ke = te ? fe(N(O), !0) : N(O);
      return L(ke, xe, new O.constructor());
    }
    function Nl(O) {
      var te = new O.constructor(O.source, ae.exec(O));
      return te.lastIndex = O.lastIndex, te;
    }
    function jl(O, te, fe) {
      var ke = te ? fe(H(O), !0) : H(O);
      return L(ke, P, new O.constructor());
    }
    function kl(O) {
      return un ? Object(un.call(O)) : {};
    }
    function Vl(O, te) {
      var fe = te ? Xn(O.buffer) : O.buffer;
      return new O.constructor(fe, O.byteOffset, O.length);
    }
    function $l(O, te) {
      var fe = -1, ke = O.length;
      for (te || (te = Array(ke)); ++fe < ke; )
        te[fe] = O[fe];
      return te;
    }
    function ui(O, te, fe, ke) {
      fe || (fe = {});
      for (var Et = -1, Ut = te.length; ++Et < Ut; ) {
        var mn = te[Et], Nt = void 0;
        De(fe, mn, Nt === void 0 ? O[mn] : Nt);
      }
      return fe;
    }
    function Bl(O, te) {
      return ui(O, ci(O), te);
    }
    function Hl(O) {
      return ve(O, qo, ci);
    }
    function eo(O, te) {
      var fe = O.__data__;
      return Kl(te) ? fe[typeof te == "string" ? "string" : "hash"] : fe.map;
    }
    function Jn(O, te) {
      var fe = x(O, te);
      return nn(fe) ? fe : void 0;
    }
    var ci = je ? U(je, Object) : tu, Ln = mt;
    (ze && Ln(new ze(new ArrayBuffer(1))) != w || Ie && Ln(new Ie()) != p || Ae && Ln(Ae.resolve()) != m || Me && Ln(new Me()) != g || He && Ln(new He()) != E) && (Ln = function(O) {
      var te = Pe.call(O), fe = te == f ? O.constructor : void 0, ke = fe ? Un(fe) : void 0;
      if (ke)
        switch (ke) {
          case at:
            return w;
          case Wt:
            return p;
          case Mn:
            return m;
          case Bt:
            return g;
          case Yt:
            return E;
        }
      return te;
    });
    function zl(O) {
      var te = O.length, fe = O.constructor(te);
      return te && typeof O[0] == "string" && ge.call(O, "index") && (fe.index = O.index, fe.input = O.input), fe;
    }
    function Gl(O) {
      return typeof O.constructor == "function" && !di(O) ? Lt(X(O)) : {};
    }
    function Wl(O, te, fe, ke) {
      var Et = O.constructor;
      switch (te) {
        case A:
          return Xn(O);
        case s:
        case o:
          return new Et(+O);
        case w:
          return vr(O, ke);
        case V:
        case M:
        case C:
        case R:
        case k:
        case $:
        case B:
        case z:
        case K:
          return Vl(O, ke);
        case p:
          return Ul(O, ke, fe);
        case h:
        case y:
          return new Et(O);
        case v:
          return Nl(O);
        case g:
          return jl(O, ke, fe);
        case S:
          return kl(O);
      }
    }
    function Yl(O, te) {
      return te = te ?? i, !!te && (typeof O == "number" || he.test(O)) && O > -1 && O % 1 == 0 && O < te;
    }
    function Kl(O) {
      var te = typeof O;
      return te == "string" || te == "number" || te == "symbol" || te == "boolean" ? O !== "__proto__" : O === null;
    }
    function Xl(O) {
      return !!ne && ne in O;
    }
    function di(O) {
      var te = O && O.constructor, fe = typeof te == "function" && te.prototype || Z;
      return O === fe;
    }
    function Un(O) {
      if (O != null) {
        try {
          return le.call(O);
        } catch {
        }
        try {
          return O + "";
        } catch {
        }
      }
      return "";
    }
    function Jl(O) {
      return lt(O, !0, !0);
    }
    function fi(O, te) {
      return O === te || O !== O && te !== te;
    }
    function Ql(O) {
      return Zl(O) && ge.call(O, "callee") && (!de.call(O, "callee") || Pe.call(O) == u);
    }
    var Zo = Array.isArray;
    function hi(O) {
      return O != null && _l(O.length) && !pi(O);
    }
    function Zl(O) {
      return eu(O) && hi(O);
    }
    var ql = Re || nu;
    function pi(O) {
      var te = to(O) ? Pe.call(O) : "";
      return te == c || te == d;
    }
    function _l(O) {
      return typeof O == "number" && O > -1 && O % 1 == 0 && O <= i;
    }
    function to(O) {
      var te = typeof O;
      return !!O && (te == "object" || te == "function");
    }
    function eu(O) {
      return !!O && typeof O == "object";
    }
    function qo(O) {
      return hi(O) ? Ge(O) : pr(O);
    }
    function tu() {
      return [];
    }
    function nu() {
      return !1;
    }
    t.exports = Jl;
  })(xr, xr.exports)), xr.exports;
}
var Ld = Md();
const Vt = /* @__PURE__ */ Ha(Ld), Ud = {
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
    var e, n, a, i, u;
    let t = Vt((e = this.modelValue) == null ? void 0 : e.value) ?? this.getFormValue(this.possibleFormValues, (n = this.modelValue) == null ? void 0 : n.defined_key);
    ((a = this.modelValue.label) != null && a.includes("signature") || (u = (i = this.modelValue) == null ? void 0 : i.defined_key) != null && u.includes("signature")) && (t == null ? void 0 : t.length) > 0 && (t = t.length > 0 ? "Yes" : "No"), this.input = t;
  },
  watch: {
    input(t) {
      this.modelValue.value = t;
    }
  }
}, Nd = ["name", "type", "placeholder"], jd = ["textContent"], kd = {
  key: 2,
  class: "inline-block text-sm text-gray-600 mt-1.5 brand-200"
};
function Vd(t, e, n, a, i, u) {
  var r, s, o;
  return _(), re("div", {
    class: rt((r = n.modelValue) == null ? void 0 : r.class)
  }, [
    t.editable ? et((_(), re("input", {
      key: 0,
      name: n.modelValue.name,
      type: n.modelValue.type,
      "onUpdate:modelValue": e[0] || (e[0] = (l) => i.input = l),
      placeholder: (s = n.modelValue) == null ? void 0 : s.placeholder
    }, null, 8, Nd)), [
      [Da, i.input]
    ]) : (_(), re("p", {
      key: 1,
      textContent: $e(i.input)
    }, null, 8, jd)),
    (o = n.modelValue) != null && o.hint ? (_(), re("p", kd, $e(n.modelValue.hint), 1)) : Fe("", !0)
  ], 2);
}
const Po = /* @__PURE__ */ bt(Ud, [["render", Vd]]), Hs = {
  beforeMount(t, e) {
    t.clickOutsideEvent = (n) => {
      t === n.target || t.contains(n.target) || e.value(n);
    }, document.addEventListener("click", t.clickOutsideEvent);
  },
  unmounted(t) {
    document.removeEventListener("click", t.clickOutsideEvent);
  }
}, $d = {
  name: "Select",
  mixins: [fn],
  directives: {
    clickOutside: Hs
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
}, Bd = ["name", "id", "value"], Hd = {
  key: 0,
  class: "absolute z-50 bg-white border border-gray-300 rounded-lg mt-1 w-full max-h-60 overflow-auto"
}, zd = ["onClick"], Gd = {
  key: 1,
  class: "inline-block text-sm text-gray-600 mt-1.5 brand-200"
};
function Wd(t, e, n, a, i, u) {
  var s, o, l, c, d;
  const r = fs("click-outside");
  return et((_(), re("div", {
    class: rt([(s = n.modelValue) == null ? void 0 : s.class, "relative"])
  }, [
    j("input", {
      type: "hidden",
      name: n.modelValue.type,
      id: n.modelValue.name,
      value: i.selectedLabel
    }, null, 8, Bd),
    j("div", {
      class: rt(["input-base bg-white cursor-pointer", { "text-gray-400": !i.selectedLabel && ((o = n.modelValue) == null ? void 0 : o.placeholder) }]),
      onClick: e[0] || (e[0] = (...p) => u.toggleDropdown && u.toggleDropdown(...p))
    }, $e(i.selectedLabel || ((l = n.modelValue) == null ? void 0 : l.placeholder) || "Select an option"), 3),
    i.isOpen ? (_(), re("ul", Hd, [
      (_(!0), re(Dt, null, bn(((c = n.modelValue) == null ? void 0 : c.options) ?? [], (p, h) => (_(), re("li", {
        key: h,
        onClick: (f) => u.selectOption(p),
        class: "px-4 py-2 hover:bg-gray-100 cursor-pointer"
      }, $e(p), 9, zd))), 128))
    ])) : Fe("", !0),
    (d = n.modelValue) != null && d.hint ? (_(), re("p", Gd, $e(n.modelValue.hint), 1)) : Fe("", !0)
  ], 2)), [
    [r, () => this.isOpen && (this.isOpen = !1)]
  ]);
}
const zs = /* @__PURE__ */ bt($d, [["render", Wd]]);
/*!
 * Signature Pad v3.0.0-beta.4 | https://github.com/szimek/signature_pad
 * (c) 2020 Szymon Nowak | Released under the MIT license
 */
class Io {
  constructor(e, n, a) {
    this.x = e, this.y = n, this.time = a || Date.now();
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
class za {
  constructor(e, n, a, i, u, r) {
    this.startPoint = e, this.control2 = n, this.control1 = a, this.endPoint = i, this.startWidth = u, this.endWidth = r;
  }
  static fromPoints(e, n) {
    const a = this.calculateControlPoints(e[0], e[1], e[2]).c2, i = this.calculateControlPoints(e[1], e[2], e[3]).c1;
    return new za(e[1], a, i, e[2], n.start, n.end);
  }
  static calculateControlPoints(e, n, a) {
    const i = e.x - n.x, u = e.y - n.y, r = n.x - a.x, s = n.y - a.y, o = { x: (e.x + n.x) / 2, y: (e.y + n.y) / 2 }, l = { x: (n.x + a.x) / 2, y: (n.y + a.y) / 2 }, c = Math.sqrt(i * i + u * u), d = Math.sqrt(r * r + s * s), p = o.x - l.x, h = o.y - l.y, f = d / (c + d), m = { x: l.x + p * f, y: l.y + h * f }, v = n.x - m.x, g = n.y - m.y;
    return {
      c1: new Io(o.x + v, o.y + g),
      c2: new Io(l.x + v, l.y + g)
    };
  }
  length() {
    let n = 0, a, i;
    for (let u = 0; u <= 10; u += 1) {
      const r = u / 10, s = this.point(r, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x), o = this.point(r, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y);
      if (u > 0) {
        const l = s - a, c = o - i;
        n += Math.sqrt(l * l + c * c);
      }
      a = s, i = o;
    }
    return n;
  }
  point(e, n, a, i, u) {
    return n * (1 - e) * (1 - e) * (1 - e) + 3 * a * (1 - e) * (1 - e) * e + 3 * i * (1 - e) * e * e + u * e * e * e;
  }
}
function Yd(t, e = 250) {
  let n = 0, a = null, i, u, r;
  const s = () => {
    n = Date.now(), a = null, i = t.apply(u, r), a || (u = null, r = []);
  };
  return function(...l) {
    const c = Date.now(), d = e - (c - n);
    return u = this, r = l, d <= 0 || d > e ? (a && (clearTimeout(a), a = null), n = c, i = t.apply(u, r), a || (u = null, r = [])) : a || (a = window.setTimeout(s, d)), i;
  };
}
let Kd = class wa {
  constructor(e, n = {}) {
    this.canvas = e, this.options = n, this._handleMouseDown = (a) => {
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
        const u = a.changedTouches[0];
        this._strokeEnd(u);
      }
    }, this.velocityFilterWeight = n.velocityFilterWeight || 0.7, this.minWidth = n.minWidth || 0.5, this.maxWidth = n.maxWidth || 2.5, this.throttle = "throttle" in n ? n.throttle : 16, this.minDistance = "minDistance" in n ? n.minDistance : 5, this.dotSize = n.dotSize || function() {
      return (this.minWidth + this.maxWidth) / 2;
    }, this.penColor = n.penColor || "black", this.backgroundColor = n.backgroundColor || "rgba(0,0,0,0)", this.onBegin = n.onBegin, this.onEnd = n.onEnd, this._strokeMoveUpdate = this.throttle ? Yd(wa.prototype._strokeUpdate, this.throttle) : wa.prototype._strokeUpdate, this._ctx = e.getContext("2d"), this.clear(), this.on();
  }
  clear() {
    const { _ctx: e, canvas: n } = this;
    e.fillStyle = this.backgroundColor, e.clearRect(0, 0, n.width, n.height), e.fillRect(0, 0, n.width, n.height), this._data = [], this._reset(), this._isEmpty = !0;
  }
  fromDataURL(e, n = {}, a) {
    const i = new Image(), u = n.ratio || window.devicePixelRatio || 1, r = n.width || this.canvas.width / u, s = n.height || this.canvas.height / u;
    this._reset(), i.onload = () => {
      this._ctx.drawImage(i, 0, 0, r, s), a && a();
    }, i.onerror = (o) => {
      a && a(o);
    }, i.src = e, this._isEmpty = !1;
  }
  toDataURL(e = "image/png", n) {
    switch (e) {
      case "image/svg+xml":
        return this._toSVG();
      default:
        return this.canvas.toDataURL(e, n);
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
    this.clear(), this._fromData(e, ({ color: n, curve: a }) => this._drawCurve({ color: n, curve: a }), ({ color: n, point: a }) => this._drawDot({ color: n, point: a })), this._data = e;
  }
  toData() {
    return this._data;
  }
  _strokeBegin(e) {
    const n = {
      color: this.penColor,
      points: []
    };
    typeof this.onBegin == "function" && this.onBegin(e), this._data.push(n), this._reset(), this._strokeUpdate(e);
  }
  _strokeUpdate(e) {
    if (this._data.length === 0) {
      this._strokeBegin(e);
      return;
    }
    const n = e.clientX, a = e.clientY, i = this._createPoint(n, a), u = this._data[this._data.length - 1], r = u.points, s = r.length > 0 && r[r.length - 1], o = s ? i.distanceTo(s) <= this.minDistance : !1, l = u.color;
    if (!s || !(s && o)) {
      const c = this._addPoint(i);
      s ? c && this._drawCurve({ color: l, curve: c }) : this._drawDot({ color: l, point: i }), r.push({
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
  _createPoint(e, n) {
    const a = this.canvas.getBoundingClientRect();
    return new Io(e - a.left, n - a.top, (/* @__PURE__ */ new Date()).getTime());
  }
  _addPoint(e) {
    const { _lastPoints: n } = this;
    if (n.push(e), n.length > 2) {
      n.length === 3 && n.unshift(n[0]);
      const a = this._calculateCurveWidths(n[1], n[2]), i = za.fromPoints(n, a);
      return n.shift(), i;
    }
    return null;
  }
  _calculateCurveWidths(e, n) {
    const a = this.velocityFilterWeight * n.velocityFrom(e) + (1 - this.velocityFilterWeight) * this._lastVelocity, i = this._strokeWidth(a), u = {
      end: i,
      start: this._lastWidth
    };
    return this._lastVelocity = a, this._lastWidth = i, u;
  }
  _strokeWidth(e) {
    return Math.max(this.maxWidth / (e + 1), this.minWidth);
  }
  _drawCurveSegment(e, n, a) {
    const i = this._ctx;
    i.moveTo(e, n), i.arc(e, n, a, 0, 2 * Math.PI, !1), this._isEmpty = !1;
  }
  _drawCurve({ color: e, curve: n }) {
    const a = this._ctx, i = n.endWidth - n.startWidth, u = Math.floor(n.length()) * 2;
    a.beginPath(), a.fillStyle = e;
    for (let r = 0; r < u; r += 1) {
      const s = r / u, o = s * s, l = o * s, c = 1 - s, d = c * c, p = d * c;
      let h = p * n.startPoint.x;
      h += 3 * d * s * n.control1.x, h += 3 * c * o * n.control2.x, h += l * n.endPoint.x;
      let f = p * n.startPoint.y;
      f += 3 * d * s * n.control1.y, f += 3 * c * o * n.control2.y, f += l * n.endPoint.y;
      const m = Math.min(n.startWidth + l * i, this.maxWidth);
      this._drawCurveSegment(h, f, m);
    }
    a.closePath(), a.fill();
  }
  _drawDot({ color: e, point: n }) {
    const a = this._ctx, i = typeof this.dotSize == "function" ? this.dotSize() : this.dotSize;
    a.beginPath(), this._drawCurveSegment(n.x, n.y, i), a.closePath(), a.fillStyle = e, a.fill();
  }
  _fromData(e, n, a) {
    for (const i of e) {
      const { color: u, points: r } = i;
      if (r.length > 1)
        for (let s = 0; s < r.length; s += 1) {
          const o = r[s], l = new Io(o.x, o.y, o.time);
          this.penColor = u, s === 0 && this._reset();
          const c = this._addPoint(l);
          c && n({ color: u, curve: c });
        }
      else
        this._reset(), a({
          color: u,
          point: r[0]
        });
    }
  }
  _toSVG() {
    const e = this._data, n = Math.max(window.devicePixelRatio || 1, 1), a = 0, i = 0, u = this.canvas.width / n, r = this.canvas.height / n, s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    s.setAttribute("width", this.canvas.width.toString()), s.setAttribute("height", this.canvas.height.toString()), this._fromData(e, ({ color: h, curve: f }) => {
      const m = document.createElement("path");
      if (!isNaN(f.control1.x) && !isNaN(f.control1.y) && !isNaN(f.control2.x) && !isNaN(f.control2.y)) {
        const v = `M ${f.startPoint.x.toFixed(3)},${f.startPoint.y.toFixed(3)} C ${f.control1.x.toFixed(3)},${f.control1.y.toFixed(3)} ${f.control2.x.toFixed(3)},${f.control2.y.toFixed(3)} ${f.endPoint.x.toFixed(3)},${f.endPoint.y.toFixed(3)}`;
        m.setAttribute("d", v), m.setAttribute("stroke-width", (f.endWidth * 2.25).toFixed(3)), m.setAttribute("stroke", h), m.setAttribute("fill", "none"), m.setAttribute("stroke-linecap", "round"), s.appendChild(m);
      }
    }, ({ color: h, point: f }) => {
      const m = document.createElement("circle"), v = typeof this.dotSize == "function" ? this.dotSize() : this.dotSize;
      m.setAttribute("r", v.toString()), m.setAttribute("cx", f.x.toString()), m.setAttribute("cy", f.y.toString()), m.setAttribute("fill", h), s.appendChild(m);
    });
    const o = "data:image/svg+xml;base64,", l = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${a} ${i} ${u} ${r}" width="${u}" height="${r}">`;
    let c = s.innerHTML;
    if (c === void 0) {
      const h = document.createElement("dummy"), f = s.childNodes;
      h.innerHTML = "";
      for (let m = 0; m < f.length; m += 1)
        h.appendChild(f[m].cloneNode(!0));
      c = h.innerHTML;
    }
    const p = l + c + "</svg>";
    return o + btoa(p);
  }
};
const Xd = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
};
function Jd(t, e) {
  return _(), re("svg", Xd, [...e[0] || (e[0] = [
    j("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M18 6 6 18M6 6l12 12"
    }, null, -1)
  ])]);
}
const Qd = { render: Jd }, Zd = {
  name: "SignaturePad",
  components: { XClose: Qd },
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
      var e, n;
      this.resizeCanvas(t), this.signaturePad = new Kd(t), this.signaturePad.onEnd = () => {
        this.signaturePad.isEmpty() || (this.updatingFromCanvas = !0, this.input.value = this.signaturePad.toDataURL());
      }, this.modelValue && (this.input = this.modelValue, (e = this.input) != null && e.value && this.signaturePad.fromDataURL((n = this.input) == null ? void 0 : n.value)), this.editable || this.signaturePad.off();
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
        var n;
        if (this.updatingFromCanvas) {
          this.updatingFromCanvas = !1;
          return;
        }
        this.input = this.modelValue, (n = this.input) != null && n.value && this.signaturePad.fromDataURL(this.input.value);
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
}, qd = ["name", "value"], _d = { class: "signature-pad-body rounded-lg border border-dashed border-gray-300 shadow-sm h-[160px] relative" }, ef = { ref: "signaturePadCanvas" }, tf = { class: "signature-pad-actions absolute top-2 right-2" }, nf = {
  key: 0,
  class: "inline-block text-sm text-gray-600 mt-1.5 brand-200"
};
function rf(t, e, n, a, i, u) {
  var s, o;
  const r = Zt("XClose");
  return _(), re("div", {
    class: rt(["signature-pad", (s = n.modelValue) == null ? void 0 : s.class])
  }, [
    j("input", {
      type: "hidden",
      class: "signature-input",
      name: n.name,
      value: i.input
    }, null, 8, qd),
    j("div", _d, [
      j("canvas", ef, null, 512),
      j("div", tf, [
        i.input && t.editable ? (_(), re("button", {
          key: 0,
          "data-action": "clear",
          type: "button",
          class: "p-1",
          onClick: e[0] || (e[0] = (...l) => u.clear && u.clear(...l))
        }, [
          ie(r, { class: "w-5 h-5 hover:text-red-500" })
        ])) : Fe("", !0)
      ])
    ]),
    (o = n.modelValue) != null && o.hint ? (_(), re("p", nf, $e(n.modelValue.hint), 1)) : Fe("", !0)
  ], 2);
}
const Gs = /* @__PURE__ */ bt(Zd, [["render", rf]]), of = {
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
}, af = ["name", "placeholder"], sf = { key: 1 }, lf = {
  key: 2,
  class: "inline-block text-sm text-gray-600 mt-1.5 brand-200"
};
function uf(t, e, n, a, i, u) {
  var r, s, o;
  return _(), re("div", {
    class: rt((r = n.modelValue) == null ? void 0 : r.class)
  }, [
    t.editable ? et((_(), re("textarea", {
      key: 0,
      name: n.modelValue.name,
      "onUpdate:modelValue": e[0] || (e[0] = (l) => i.input = l),
      rows: "4",
      placeholder: (s = n.modelValue) == null ? void 0 : s.placeholder
    }, "    ", 8, af)), [
      [yt, i.input]
    ]) : (_(), re("p", sf, $e(i.input), 1)),
    (o = n.modelValue) != null && o.hint ? (_(), re("p", lf, $e(n.modelValue.hint), 1)) : Fe("", !0)
  ], 2);
}
const Ws = /* @__PURE__ */ bt(of, [["render", uf]]), cf = {
  name: "VParagraph",
  mixins: [fn],
  props: {
    modelValue: {
      type: String,
      default: null
    }
  }
}, df = ["innerHTML"], ff = { key: 1 }, hf = ["innerHTML"], pf = ["innerHTML"];
function vf(t, e, n, a, i, u) {
  var r;
  return _(), re("div", {
    class: rt(["paragraph text-gray-600", (r = n.modelValue) == null ? void 0 : r.class])
  }, [
    n.modelValue.content_type === "p" ? (_(), re("p", {
      key: 0,
      innerHTML: n.modelValue.content
    }, null, 8, df)) : Fe("", !0),
    n.modelValue.content_type === "blockquote" ? (_(), re("blockquote", ff, [
      j("q", {
        innerHTML: n.modelValue.content
      }, null, 8, hf)
    ])) : Fe("", !0),
    n.modelValue.content_type === "address" ? (_(), re("address", {
      key: 2,
      innerHTML: n.modelValue.content
    }, null, 8, pf)) : Fe("", !0)
  ], 2);
}
const Ys = /* @__PURE__ */ bt(cf, [["render", vf]]);
function Ks(t) {
  return t instanceof Date || Object.prototype.toString.call(t) === "[object Date]";
}
function Go(t) {
  return Ks(t) ? new Date(t.getTime()) : t == null ? /* @__PURE__ */ new Date(NaN) : new Date(t);
}
function mf(t) {
  return Ks(t) && !isNaN(t.getTime());
}
function Xs(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (!(e >= 0 && e <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6");
  var n = Go(t), a = n.getDay(), i = (a + 7 - e) % 7;
  return n.setDate(n.getDate() - i), n.setHours(0, 0, 0, 0), n;
}
function Js(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = e.firstDayOfWeek, a = n === void 0 ? 0 : n, i = e.firstWeekContainsDate, u = i === void 0 ? 1 : i;
  if (!(u >= 1 && u <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7");
  for (var r = Go(t), s = r.getFullYear(), o = /* @__PURE__ */ new Date(0), l = s + 1; l >= s - 1 && (o.setFullYear(l, 0, u), o.setHours(0, 0, 0, 0), o = Xs(o, a), !(r.getTime() >= o.getTime())); l--)
    ;
  return o;
}
function Ga(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = e.firstDayOfWeek, a = n === void 0 ? 0 : n, i = e.firstWeekContainsDate, u = i === void 0 ? 1 : i, r = Go(t), s = Xs(r, a), o = Js(r, {
    firstDayOfWeek: a,
    firstWeekContainsDate: u
  }), l = s.getTime() - o.getTime();
  return Math.round(l / (168 * 3600 * 1e3)) + 1;
}
var Wa = {
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  weekdaysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  firstDayOfWeek: 0,
  firstWeekContainsDate: 1
}, gf = /\[([^\]]+)]|YYYY|YY?|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|Z{1,2}|S{1,3}|w{1,2}|x|X|a|A/g;
function zt(t) {
  for (var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2, n = "".concat(Math.abs(t)), a = t < 0 ? "-" : ""; n.length < e; )
    n = "0".concat(n);
  return a + n;
}
function $i(t) {
  return Math.round(t.getTimezoneOffset() / 15) * 15;
}
function Bi(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", n = t > 0 ? "-" : "+", a = Math.abs(t), i = Math.floor(a / 60), u = a % 60;
  return n + zt(i, 2) + e + zt(u, 2);
}
var Hi = function(e, n, a) {
  var i = e < 12 ? "AM" : "PM";
  return a ? i.toLocaleLowerCase() : i;
}, Cr = {
  Y: function(e) {
    var n = e.getFullYear();
    return n <= 9999 ? "".concat(n) : "+".concat(n);
  },
  // Year: 00, 01, ..., 99
  YY: function(e) {
    return zt(e.getFullYear(), 4).substr(2);
  },
  // Year: 1900, 1901, ..., 2099
  YYYY: function(e) {
    return zt(e.getFullYear(), 4);
  },
  // Month: 1, 2, ..., 12
  M: function(e) {
    return e.getMonth() + 1;
  },
  // Month: 01, 02, ..., 12
  MM: function(e) {
    return zt(e.getMonth() + 1, 2);
  },
  MMM: function(e, n) {
    return n.monthsShort[e.getMonth()];
  },
  MMMM: function(e, n) {
    return n.months[e.getMonth()];
  },
  // Day of month: 1, 2, ..., 31
  D: function(e) {
    return e.getDate();
  },
  // Day of month: 01, 02, ..., 31
  DD: function(e) {
    return zt(e.getDate(), 2);
  },
  // Hour: 0, 1, ... 23
  H: function(e) {
    return e.getHours();
  },
  // Hour: 00, 01, ..., 23
  HH: function(e) {
    return zt(e.getHours(), 2);
  },
  // Hour: 1, 2, ..., 12
  h: function(e) {
    var n = e.getHours();
    return n === 0 ? 12 : n > 12 ? n % 12 : n;
  },
  // Hour: 01, 02, ..., 12
  hh: function() {
    var e = Cr.h.apply(Cr, arguments);
    return zt(e, 2);
  },
  // Minute: 0, 1, ..., 59
  m: function(e) {
    return e.getMinutes();
  },
  // Minute: 00, 01, ..., 59
  mm: function(e) {
    return zt(e.getMinutes(), 2);
  },
  // Second: 0, 1, ..., 59
  s: function(e) {
    return e.getSeconds();
  },
  // Second: 00, 01, ..., 59
  ss: function(e) {
    return zt(e.getSeconds(), 2);
  },
  // 1/10 of second: 0, 1, ..., 9
  S: function(e) {
    return Math.floor(e.getMilliseconds() / 100);
  },
  // 1/100 of second: 00, 01, ..., 99
  SS: function(e) {
    return zt(Math.floor(e.getMilliseconds() / 10), 2);
  },
  // Millisecond: 000, 001, ..., 999
  SSS: function(e) {
    return zt(e.getMilliseconds(), 3);
  },
  // Day of week: 0, 1, ..., 6
  d: function(e) {
    return e.getDay();
  },
  // Day of week: 'Su', 'Mo', ..., 'Sa'
  dd: function(e, n) {
    return n.weekdaysMin[e.getDay()];
  },
  // Day of week: 'Sun', 'Mon',..., 'Sat'
  ddd: function(e, n) {
    return n.weekdaysShort[e.getDay()];
  },
  // Day of week: 'Sunday', 'Monday', ...,'Saturday'
  dddd: function(e, n) {
    return n.weekdays[e.getDay()];
  },
  // AM, PM
  A: function(e, n) {
    var a = n.meridiem || Hi;
    return a(e.getHours(), e.getMinutes(), !1);
  },
  // am, pm
  a: function(e, n) {
    var a = n.meridiem || Hi;
    return a(e.getHours(), e.getMinutes(), !0);
  },
  // Timezone: -01:00, +00:00, ... +12:00
  Z: function(e) {
    return Bi($i(e), ":");
  },
  // Timezone: -0100, +0000, ... +1200
  ZZ: function(e) {
    return Bi($i(e));
  },
  // Seconds timestamp: 512969520
  X: function(e) {
    return Math.floor(e.getTime() / 1e3);
  },
  // Milliseconds timestamp: 512969520900
  x: function(e) {
    return e.getTime();
  },
  w: function(e, n) {
    return Ga(e, {
      firstDayOfWeek: n.firstDayOfWeek,
      firstWeekContainsDate: n.firstWeekContainsDate
    });
  },
  ww: function(e, n) {
    return zt(Cr.w(e, n), 2);
  }
};
function Ya(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = e ? String(e) : "YYYY-MM-DDTHH:mm:ss.SSSZ", i = Go(t);
  if (!mf(i))
    return "Invalid Date";
  var u = n.locale || Wa;
  return a.replace(gf, function(r, s) {
    return s || (typeof Cr[r] == "function" ? "".concat(Cr[r](i, u)) : r);
  });
}
function zi(t) {
  return xf(t) || bf(t) || yf();
}
function yf() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function bf(t) {
  if (Symbol.iterator in Object(t) || Object.prototype.toString.call(t) === "[object Arguments]") return Array.from(t);
}
function xf(t) {
  if (Array.isArray(t)) {
    for (var e = 0, n = new Array(t.length); e < t.length; e++)
      n[e] = t[e];
    return n;
  }
}
function Gi(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    e && (a = a.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function Sf(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Gi(n, !0).forEach(function(a) {
      In(t, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Gi(n).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return t;
}
function Ef(t, e) {
  return Af(t) || Tf(t, e) || wf();
}
function wf() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function Tf(t, e) {
  if (Symbol.iterator in Object(t) || Object.prototype.toString.call(t) === "[object Arguments]") {
    var n = [], a = !0, i = !1, u = void 0;
    try {
      for (var r = t[Symbol.iterator](), s; !(a = (s = r.next()).done) && (n.push(s.value), !(e && n.length === e)); a = !0)
        ;
    } catch (o) {
      i = !0, u = o;
    } finally {
      try {
        !a && r.return != null && r.return();
      } finally {
        if (i) throw u;
      }
    }
    return n;
  }
}
function Af(t) {
  if (Array.isArray(t)) return t;
}
function In(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var Cf = /(\[[^\[]*\])|(MM?M?M?|Do|DD?|ddd?d?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|S{1,3}|x|X|ZZ?|.)/g, Qs = /\d/, Dn = /\d\d/, Of = /\d{3}/, Rf = /\d{4}/, dr = /\d\d?/, Pf = /[+-]\d\d:?\d\d/, Zs = /[+-]?\d+/, If = /[+-]?\d+(\.\d{1,3})?/, Ka = "year", Wo = "month", qs = "day", _s = "hour", el = "minute", tl = "second", Xa = "millisecond", nl = {}, ot = function(e, n, a) {
  var i = Array.isArray(e) ? e : [e], u;
  typeof a == "string" ? u = function(s) {
    var o = parseInt(s, 10);
    return In({}, a, o);
  } : u = a, i.forEach(function(r) {
    nl[r] = [n, u];
  });
}, Df = function(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
}, Vr = function(e) {
  return function(n) {
    var a = n[e];
    if (!Array.isArray(a))
      throw new Error("Locale[".concat(e, "] need an array"));
    return new RegExp(a.map(Df).join("|"));
  };
}, $r = function(e, n) {
  return function(a, i) {
    var u = i[e];
    if (!Array.isArray(u))
      throw new Error("Locale[".concat(e, "] need an array"));
    var r = u.indexOf(a);
    if (r < 0)
      throw new Error("Invalid Word");
    return In({}, n, r);
  };
};
ot("Y", Zs, Ka);
ot("YY", Dn, function(t) {
  var e = (/* @__PURE__ */ new Date()).getFullYear(), n = Math.floor(e / 100), a = parseInt(t, 10);
  return a = (a > 68 ? n - 1 : n) * 100 + a, In({}, Ka, a);
});
ot("YYYY", Rf, Ka);
ot("M", dr, function(t) {
  return In({}, Wo, parseInt(t, 10) - 1);
});
ot("MM", Dn, function(t) {
  return In({}, Wo, parseInt(t, 10) - 1);
});
ot("MMM", Vr("monthsShort"), $r("monthsShort", Wo));
ot("MMMM", Vr("months"), $r("months", Wo));
ot("D", dr, qs);
ot("DD", Dn, qs);
ot(["H", "h"], dr, _s);
ot(["HH", "hh"], Dn, _s);
ot("m", dr, el);
ot("mm", Dn, el);
ot("s", dr, tl);
ot("ss", Dn, tl);
ot("S", Qs, function(t) {
  return In({}, Xa, parseInt(t, 10) * 100);
});
ot("SS", Dn, function(t) {
  return In({}, Xa, parseInt(t, 10) * 10);
});
ot("SSS", Of, Xa);
function Ff(t) {
  return t.meridiemParse || /[ap]\.?m?\.?/i;
}
function Mf(t) {
  return "".concat(t).toLowerCase().charAt(0) === "p";
}
ot(["A", "a"], Ff, function(t, e) {
  var n = typeof e.isPM == "function" ? e.isPM(t) : Mf(t);
  return {
    isPM: n
  };
});
function Lf(t) {
  var e = t.match(/([+-]|\d\d)/g) || ["-", "0", "0"], n = Ef(e, 3), a = n[0], i = n[1], u = n[2], r = parseInt(i, 10) * 60 + parseInt(u, 10);
  return r === 0 ? 0 : a === "+" ? -r : +r;
}
ot(["Z", "ZZ"], Pf, function(t) {
  return {
    offset: Lf(t)
  };
});
ot("x", Zs, function(t) {
  return {
    date: new Date(parseInt(t, 10))
  };
});
ot("X", If, function(t) {
  return {
    date: new Date(parseFloat(t) * 1e3)
  };
});
ot("d", Qs, "weekday");
ot("dd", Vr("weekdaysMin"), $r("weekdaysMin", "weekday"));
ot("ddd", Vr("weekdaysShort"), $r("weekdaysShort", "weekday"));
ot("dddd", Vr("weekdays"), $r("weekdays", "weekday"));
ot("w", dr, "week");
ot("ww", Dn, "week");
function Uf(t, e) {
  if (t !== void 0 && e !== void 0) {
    if (e) {
      if (t < 12)
        return t + 12;
    } else if (t === 12)
      return 0;
  }
  return t;
}
function Nf(t) {
  for (var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Date(), n = [0, 0, 1, 0, 0, 0, 0], a = [e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()], i = !0, u = 0; u < 7; u++)
    t[u] === void 0 ? n[u] = i ? a[u] : n[u] : (n[u] = t[u], i = !1);
  return n;
}
function jf(t, e, n, a, i, u, r) {
  var s;
  return t < 100 && t >= 0 ? (s = new Date(t + 400, e, n, a, i, u, r), isFinite(s.getFullYear()) && s.setFullYear(t)) : s = new Date(t, e, n, a, i, u, r), s;
}
function kf() {
  for (var t, e = arguments.length, n = new Array(e), a = 0; a < e; a++)
    n[a] = arguments[a];
  var i = n[0];
  return i < 100 && i >= 0 ? (n[0] += 400, t = new Date(Date.UTC.apply(Date, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(i)) : t = new Date(Date.UTC.apply(Date, n)), t;
}
function Vf(t, e, n) {
  var a = e.match(Cf);
  if (!a)
    throw new Error();
  for (var i = a.length, u = {}, r = 0; r < i; r += 1) {
    var s = a[r], o = nl[s];
    if (o) {
      var c = typeof o[0] == "function" ? o[0](n) : o[0], d = o[1], p = (c.exec(t) || [])[0], h = d(p, n);
      u = Sf({}, u, {}, h), t = t.replace(p, "");
    } else {
      var l = s.replace(/^\[|\]$/g, "");
      if (t.indexOf(l) === 0)
        t = t.substr(l.length);
      else
        throw new Error("not match");
    }
  }
  return u;
}
function $f(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  try {
    var a = n.locale, i = a === void 0 ? Wa : a, u = n.backupDate, r = u === void 0 ? /* @__PURE__ */ new Date() : u, s = Vf(t, e, i), o = s.year, l = s.month, c = s.day, d = s.hour, p = s.minute, h = s.second, f = s.millisecond, m = s.isPM, v = s.date, g = s.offset, y = s.weekday, S = s.week;
    if (v)
      return v;
    var E = [o, l, c, d, p, h, f];
    if (E[3] = Uf(E[3], m), S !== void 0 && l === void 0 && c === void 0) {
      var A = Js(o === void 0 ? r : new Date(o, 3), {
        firstDayOfWeek: i.firstDayOfWeek,
        firstWeekContainsDate: i.firstWeekContainsDate
      });
      return new Date(A.getTime() + (S - 1) * 7 * 24 * 3600 * 1e3);
    }
    var w, V = Nf(E, r);
    return g !== void 0 ? (V[6] += g * 60 * 1e3, w = kf.apply(void 0, zi(V))) : w = jf.apply(void 0, zi(V)), y !== void 0 && w.getDay() !== y ? /* @__PURE__ */ new Date(NaN) : w;
  } catch {
    return /* @__PURE__ */ new Date(NaN);
  }
}
var Bf = Object.defineProperty, Hf = Object.defineProperties, zf = Object.getOwnPropertyDescriptors, Do = Object.getOwnPropertySymbols, rl = Object.prototype.hasOwnProperty, ol = Object.prototype.propertyIsEnumerable, Wi = (t, e, n) => e in t ? Bf(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, xt = (t, e) => {
  for (var n in e || (e = {}))
    rl.call(e, n) && Wi(t, n, e[n]);
  if (Do)
    for (var n of Do(e))
      ol.call(e, n) && Wi(t, n, e[n]);
  return t;
}, en = (t, e) => Hf(t, zf(e)), Gf = (t, e) => {
  var n = {};
  for (var a in t)
    rl.call(t, a) && e.indexOf(a) < 0 && (n[a] = t[a]);
  if (t != null && Do)
    for (var a of Do(t))
      e.indexOf(a) < 0 && ol.call(t, a) && (n[a] = t[a]);
  return n;
};
const Wf = {
  formatLocale: Wa,
  yearFormat: "YYYY",
  monthFormat: "MMM",
  monthBeforeYear: !0
};
let Sr = "en";
const tr = {};
tr[Sr] = Wf;
function al(t, e, n = !1) {
  if (typeof t != "string")
    return tr[Sr];
  let a = Sr;
  return tr[t] && (a = t), e && (tr[t] = e, a = t), n || (Sr = a), tr[t] || tr[Sr];
}
function Ta(t) {
  return al(t, void 0, !0);
}
function Ja(t, e) {
  if (!Array.isArray(t))
    return [];
  const n = [], a = t.length;
  let i = 0;
  for (e = e || a; i < a; )
    n.push(t.slice(i, i += e));
  return n;
}
function Yi(t) {
  return Array.isArray(t) ? t[t.length - 1] : void 0;
}
function On(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function gn(t, e) {
  const n = {};
  return On(t) && (Array.isArray(e) || (e = [e]), e.forEach((a) => {
    Object.prototype.hasOwnProperty.call(t, a) && (n[a] = t[a]);
  })), n;
}
function il(t, e) {
  if (!On(t))
    return {};
  let n = t;
  return On(e) && Object.keys(e).forEach((a) => {
    let i = e[a];
    const u = t[a];
    On(i) && On(u) && (i = il(u, i)), n = en(xt({}, n), { [a]: i });
  }), n;
}
function ia(t) {
  const e = parseInt(String(t), 10);
  return e < 10 ? `0${e}` : `${e}`;
}
function Yf(t) {
  const e = /-(\w)/g;
  return t.replace(e, (n, a) => a ? a.toUpperCase() : "");
}
const sl = "datepicker_locale", ll = "datepicker_prefixClass", ul = "datepicker_getWeek";
function Qa() {
  return Fa(sl, su(Ta()));
}
function Kf(t) {
  const e = sn(() => On(t.value) ? il(Ta(), t.value) : Ta(t.value));
  return $o(sl, e), e;
}
function Xf(t) {
  $o(ll, t);
}
function Ft() {
  return Fa(ll, "mx");
}
function Jf(t) {
  $o(ul, t);
}
function Qf() {
  return Fa(ul, Ga);
}
function Zf(t) {
  const e = t.style.display, n = t.style.visibility;
  t.style.display = "block", t.style.visibility = "hidden";
  const a = window.getComputedStyle(t), i = t.offsetWidth + parseInt(a.marginLeft, 10) + parseInt(a.marginRight, 10), u = t.offsetHeight + parseInt(a.marginTop, 10) + parseInt(a.marginBottom, 10);
  return t.style.display = e, t.style.visibility = n, { width: i, height: u };
}
function qf(t, e, n, a) {
  let i = 0, u = 0, r = 0, s = 0;
  const o = t.getBoundingClientRect(), l = document.documentElement.clientWidth, c = document.documentElement.clientHeight;
  return a && (r = window.pageXOffset + o.left, s = window.pageYOffset + o.top), l - o.left < e && o.right < e ? i = r - o.left + 1 : o.left + o.width / 2 <= l / 2 ? i = r : i = r + o.width - e, o.top <= n && c - o.bottom <= n ? u = s + c - o.top - n : o.top + o.height / 2 <= c / 2 ? u = s + o.height : u = s - n, { left: `${i}px`, top: `${u}px` };
}
function Za(t, e = document.body) {
  if (!t || t === e)
    return null;
  const n = (u, r) => getComputedStyle(u, null).getPropertyValue(r);
  return /(auto|scroll)/.test(n(t, "overflow") + n(t, "overflow-y") + n(t, "overflow-x")) ? t : Za(t.parentElement, e);
}
let io;
function _f() {
  if (typeof window > "u")
    return 0;
  if (io !== void 0)
    return io;
  const t = document.createElement("div");
  t.style.visibility = "hidden", t.style.overflow = "scroll", t.style.width = "100px", t.style.position = "absolute", t.style.top = "-9999px", document.body.appendChild(t);
  const e = document.createElement("div");
  return e.style.width = "100%", t.appendChild(e), io = t.offsetWidth - e.offsetWidth, t.parentNode.removeChild(t), io;
}
const Ki = "ontouchend" in document ? "touchstart" : "mousedown";
function eh(t) {
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
      const u = a[i];
      return u !== void 0 ? u : e[i];
    }
  });
}
const Fn = () => (t) => t, th = (t, e) => {
  const n = {};
  for (const a in t)
    if (Object.prototype.hasOwnProperty.call(t, a)) {
      const i = Yf(a);
      let u = t[a];
      e.indexOf(i) !== -1 && u === "" && (u = !0), n[i] = u;
    }
  return n;
};
function nh(t, {
  slots: e
}) {
  const n = wn(t, {
    appendToBody: !0
  }), a = Ft(), i = Ze(null), u = Ze({
    left: "",
    top: ""
  }), r = () => {
    if (!n.visible || !i.value)
      return;
    const o = n.getRelativeElement();
    if (!o)
      return;
    const {
      width: l,
      height: c
    } = Zf(i.value);
    u.value = qf(o, l, c, n.appendToBody);
  };
  _t(r, {
    flush: "post"
  }), _t((o) => {
    const l = n.getRelativeElement();
    if (!l)
      return;
    const c = Za(l) || window, d = eh(r);
    c.addEventListener("scroll", d), window.addEventListener("resize", d), o(() => {
      c.removeEventListener("scroll", d), window.removeEventListener("resize", d);
    });
  }, {
    flush: "post"
  });
  const s = (o) => {
    if (!n.visible)
      return;
    const l = o.target, c = i.value, d = n.getRelativeElement();
    c && !c.contains(l) && d && !d.contains(l) && n.onClickOutside(o);
  };
  return _t((o) => {
    document.addEventListener(Ki, s), o(() => {
      document.removeEventListener(Ki, s);
    });
  }), () => ie(uu, {
    to: "body",
    disabled: !n.appendToBody
  }, {
    default: () => [ie(Ma, {
      name: `${a}-zoom-in-down`
    }, {
      default: () => {
        var o;
        return [n.visible && ie("div", {
          ref: i,
          class: `${a}-datepicker-main ${a}-datepicker-popup ${n.className}`,
          style: [xt({
            position: "absolute"
          }, u.value), n.style || {}]
        }, [(o = e.default) == null ? void 0 : o.call(e)])];
      }
    })]
  });
}
const rh = Fn()(["style", "className", "visible", "appendToBody", "onClickOutside", "getRelativeElement"]);
var oh = En(nh, rh);
const ah = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024",
  width: "1em",
  height: "1em"
}, ih = /* @__PURE__ */ j("path", { d: "M940.218 107.055H730.764v-60.51H665.6v60.51H363.055v-60.51H297.89v60.51H83.78c-18.617 0-32.581 13.963-32.581 32.581v805.237c0 18.618 13.964 32.582 32.582 32.582h861.09c18.619 0 32.583-13.964 32.583-32.582V139.636c-4.655-18.618-18.619-32.581-37.237-32.581zm-642.327 65.163v60.51h65.164v-60.51h307.2v60.51h65.163v-60.51h176.873v204.8H116.364v-204.8H297.89zM116.364 912.291V442.18H912.29v470.11H116.364z" }, null, -1), sh = [
  ih
];
function cl(t, e) {
  return _(), re("svg", ah, sh);
}
const lh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024",
  width: "1em",
  height: "1em"
}, uh = /* @__PURE__ */ j("path", { d: "M810.005 274.005 572.011 512l237.994 237.995-60.01 60.01L512 572.011 274.005 810.005l-60.01-60.01L451.989 512 213.995 274.005l60.01-60.01L512 451.989l237.995-237.994z" }, null, -1), ch = [
  uh
];
function dh(t, e) {
  return _(), re("svg", lh, ch);
}
const fh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em"
}, hh = /* @__PURE__ */ j("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}, null, -1), ph = /* @__PURE__ */ j("path", { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }, null, -1), vh = /* @__PURE__ */ j("path", { d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" }, null, -1), mh = [
  hh,
  ph,
  vh
];
function gh(t, e) {
  return _(), re("svg", fh, mh);
}
function $n(t, e = 0, n = 1, a = 0, i = 0, u = 0, r = 0) {
  const s = new Date(t, e, n, a, i, u, r);
  return t < 100 && t >= 0 && s.setFullYear(t), s;
}
function Sn(t) {
  return t instanceof Date && !isNaN(t.getTime());
}
function Bn(t) {
  return Array.isArray(t) && t.length === 2 && t.every(Sn) && t[0] <= t[1];
}
function yh(t) {
  return Array.isArray(t) && t.every(Sn);
}
function Yo(...t) {
  if (t[0] !== void 0 && t[0] !== null) {
    const n = new Date(t[0]);
    if (Sn(n))
      return n;
  }
  const e = t.slice(1);
  return e.length ? Yo(...e) : /* @__PURE__ */ new Date();
}
function bh(t) {
  const e = new Date(t);
  return e.setMonth(0, 1), e.setHours(0, 0, 0, 0), e;
}
function Xi(t) {
  const e = new Date(t);
  return e.setDate(1), e.setHours(0, 0, 0, 0), e;
}
function Pn(t) {
  const e = new Date(t);
  return e.setHours(0, 0, 0, 0), e;
}
function xh({
  firstDayOfWeek: t,
  year: e,
  month: n
}) {
  const a = [], i = $n(e, n, 0), u = i.getDate(), r = u - (i.getDay() + 7 - t) % 7;
  for (let c = r; c <= u; c++)
    a.push($n(e, n, c - u));
  i.setMonth(n + 1, 0);
  const s = i.getDate();
  for (let c = 1; c <= s; c++)
    a.push($n(e, n, c));
  const l = 42 - (u - r + 1) - s;
  for (let c = 1; c <= l; c++)
    a.push($n(e, n, s + c));
  return a;
}
function Fo(t, e) {
  const n = new Date(t), a = typeof e == "function" ? e(n.getMonth()) : Number(e), i = n.getFullYear(), u = $n(i, a + 1, 0).getDate(), r = n.getDate();
  return n.setMonth(a, Math.min(r, u)), n;
}
function rr(t, e) {
  const n = new Date(t), a = typeof e == "function" ? e(n.getFullYear()) : e;
  return n.setFullYear(a), n;
}
function Sh(t, e) {
  const n = new Date(e), a = new Date(t), i = n.getFullYear() - a.getFullYear(), u = n.getMonth() - a.getMonth();
  return i * 12 + u;
}
function Mo(t, e) {
  const n = new Date(t), a = new Date(e);
  return n.setHours(a.getHours(), a.getMinutes(), a.getSeconds()), n;
}
function Eh(t, {
  slots: e
}) {
  const n = wn(t, {
    editable: !0,
    disabled: !1,
    clearable: !0,
    range: !1,
    multiple: !1
  }), a = Ft(), i = Ze(null), u = sn(() => n.separator || (n.range ? " ~ " : ",")), r = (h) => n.range ? Bn(h) : n.multiple ? yh(h) : Sn(h), s = (h) => Array.isArray(h) ? h.some((f) => n.disabledDate(f)) : n.disabledDate(h), o = sn(() => i.value !== null ? i.value : typeof n.renderInputText == "function" ? n.renderInputText(n.value) : r(n.value) ? Array.isArray(n.value) ? n.value.map((h) => n.formatDate(h)).join(u.value) : n.formatDate(n.value) : ""), l = (h) => {
    var f;
    h && h.stopPropagation(), n.onChange(n.range ? [null, null] : null), (f = n.onClear) == null || f.call(n);
  }, c = () => {
    var h;
    if (!n.editable || i.value === null)
      return;
    const f = i.value.trim();
    if (i.value = null, f === "") {
      l();
      return;
    }
    let m;
    if (n.range) {
      let v = f.split(u.value);
      v.length !== 2 && (v = f.split(u.value.trim())), m = v.map((g) => n.parseDate(g.trim()));
    } else n.multiple ? m = f.split(u.value).map((v) => n.parseDate(v.trim())) : m = n.parseDate(f);
    r(m) && !s(m) ? n.onChange(m) : (h = n.onInputError) == null || h.call(n, f);
  }, d = (h) => {
    i.value = typeof h == "string" ? h : h.target.value;
  }, p = (h) => {
    const {
      keyCode: f
    } = h;
    f === 9 ? n.onBlur() : f === 13 && c();
  };
  return () => {
    var h, f, m;
    const v = !n.disabled && n.clearable && o.value, g = en(xt({
      name: "date",
      type: "text",
      autocomplete: "off",
      value: o.value,
      class: n.inputClass || `${a}-input`,
      readonly: !n.editable,
      disabled: n.disabled,
      placeholder: n.placeholder
    }, n.inputAttr), {
      onFocus: n.onFocus,
      onKeydown: p,
      onInput: d,
      onChange: c
    });
    return ie("div", {
      class: `${a}-input-wrapper`,
      onClick: n.onClick
    }, [((h = e.input) == null ? void 0 : h.call(e, g)) || ie("input", g, null), v ? ie("i", {
      class: `${a}-icon-clear`,
      onClick: l
    }, [((f = e["icon-clear"]) == null ? void 0 : f.call(e)) || ie(dh, null, null)]) : null, ie("i", {
      class: `${a}-icon-calendar`
    }, [((m = e["icon-calendar"]) == null ? void 0 : m.call(e)) || ie(cl, null, null)])]);
  };
}
const qa = Fn()(["placeholder", "editable", "disabled", "clearable", "inputClass", "inputAttr", "range", "multiple", "separator", "renderInputText", "onInputError", "onClear"]), wh = Fn()(["value", "formatDate", "parseDate", "disabledDate", "onChange", "onFocus", "onBlur", "onClick", ...qa]);
var Th = En(Eh, wh);
function Ah(t, {
  slots: e
}) {
  var n;
  const a = wn(t, {
    prefixClass: "mx",
    valueType: "date",
    format: "YYYY-MM-DD",
    type: "date",
    disabledDate: () => !1,
    disabledTime: () => !1,
    confirmText: "OK"
  });
  Xf(a.prefixClass), Jf(((n = a.formatter) == null ? void 0 : n.getWeek) || Ga);
  const i = Kf(iu(t, "lang")), u = Ze(), r = () => u.value, s = Ze(!1), o = sn(() => !a.disabled && (typeof a.open == "boolean" ? a.open : s.value)), l = () => {
    var w, V;
    a.disabled || o.value || (s.value = !0, (w = a["onUpdate:open"]) == null || w.call(a, !0), (V = a.onOpen) == null || V.call(a));
  }, c = () => {
    var w, V;
    o.value && (s.value = !1, (w = a["onUpdate:open"]) == null || w.call(a, !1), (V = a.onClose) == null || V.call(a));
  }, d = (w, V) => (V = V || a.format, On(a.formatter) && typeof a.formatter.stringify == "function" ? a.formatter.stringify(w, V) : Ya(w, V, {
    locale: i.value.formatLocale
  })), p = (w, V) => {
    if (V = V || a.format, On(a.formatter) && typeof a.formatter.parse == "function")
      return a.formatter.parse(w, V);
    const M = /* @__PURE__ */ new Date();
    return $f(w, V, {
      locale: i.value.formatLocale,
      backupDate: M
    });
  }, h = (w) => {
    switch (a.valueType) {
      case "date":
        return w instanceof Date ? new Date(w.getTime()) : /* @__PURE__ */ new Date(NaN);
      case "timestamp":
        return typeof w == "number" ? new Date(w) : /* @__PURE__ */ new Date(NaN);
      case "format":
        return typeof w == "string" ? p(w) : /* @__PURE__ */ new Date(NaN);
      default:
        return typeof w == "string" ? p(w, a.valueType) : /* @__PURE__ */ new Date(NaN);
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
  }, m = sn(() => {
    const w = a.value;
    return a.range ? (Array.isArray(w) ? w.slice(0, 2) : [null, null]).map(h) : a.multiple ? (Array.isArray(w) ? w : []).map(h) : h(w);
  }), v = (w, V, M = !0) => {
    var C, R;
    const k = Array.isArray(w) ? w.map(f) : f(w);
    return (C = a["onUpdate:value"]) == null || C.call(a, k), (R = a.onChange) == null || R.call(a, k, V), M && c(), k;
  }, g = Ze(/* @__PURE__ */ new Date());
  _t(() => {
    o.value && (g.value = m.value);
  });
  const y = (w, V) => {
    a.confirm ? g.value = w : v(w, V, !a.multiple && (V === a.type || V === "time"));
  }, S = () => {
    var w;
    const V = v(g.value);
    (w = a.onConfirm) == null || w.call(a, V);
  }, E = (w) => a.disabledDate(w) || a.disabledTime(w), A = (w) => {
    var V;
    const {
      prefixClass: M
    } = a;
    return ie("div", {
      class: `${M}-datepicker-sidebar`
    }, [(V = e.sidebar) == null ? void 0 : V.call(e, w), (a.shortcuts || []).map((C, R) => ie("button", {
      key: R,
      "data-index": R,
      type: "button",
      class: `${M}-btn ${M}-btn-text ${M}-btn-shortcut`,
      onClick: () => {
        var k;
        const $ = (k = C.onClick) == null ? void 0 : k.call(C);
        $ && v($);
      }
    }, [C.text]))]);
  };
  return () => {
    var w, V;
    const {
      prefixClass: M,
      disabled: C,
      confirm: R,
      range: k,
      popupClass: $,
      popupStyle: B,
      appendToBody: z
    } = a, K = {
      value: g.value,
      "onUpdate:value": y,
      emit: v
    }, Y = e.header && ie("div", {
      class: `${M}-datepicker-header`
    }, [e.header(K)]), ae = (e.footer || R) && ie("div", {
      class: `${M}-datepicker-footer`
    }, [(w = e.footer) == null ? void 0 : w.call(e, K), R && ie("button", {
      type: "button",
      class: `${M}-btn ${M}-datepicker-btn-confirm`,
      onClick: S
    }, [a.confirmText])]), J = (V = e.content) == null ? void 0 : V.call(e, K), he = (e.sidebar || a.shortcuts) && A(K);
    return ie("div", {
      ref: u,
      class: {
        [`${M}-datepicker`]: !0,
        [`${M}-datepicker-range`]: k,
        disabled: C
      }
    }, [ie(Th, en(xt({}, gn(a, qa)), {
      value: m.value,
      formatDate: d,
      parseDate: p,
      disabledDate: E,
      onChange: v,
      onClick: l,
      onFocus: l,
      onBlur: c
    }), gn(e, ["icon-calendar", "icon-clear", "input"])), ie(oh, {
      className: $,
      style: B,
      visible: o.value,
      appendToBody: z,
      getRelativeElement: r,
      onClickOutside: c
    }, {
      default: () => [he, ie("div", {
        class: `${M}-datepicker-content`
      }, [Y, J, ae])]
    })]);
  };
}
const Ch = Fn()(["value", "valueType", "type", "format", "formatter", "lang", "prefixClass", "appendToBody", "open", "popupClass", "popupStyle", "confirm", "confirmText", "shortcuts", "disabledDate", "disabledTime", "onOpen", "onClose", "onConfirm", "onChange", "onUpdate:open", "onUpdate:value"]), Oh = [...Ch, ...qa];
var Ji = En(Ah, Oh);
function so(t) {
  var e = t, {
    value: n
  } = e, a = Gf(e, [
    "value"
  ]);
  const i = Ft();
  return ie("button", en(xt({}, a), {
    type: "button",
    class: `${i}-btn ${i}-btn-text ${i}-btn-icon-${n}`
  }), [ie("i", {
    class: `${i}-icon-${n}`
  }, null)]);
}
function _a({
  type: t,
  calendar: e,
  onUpdateCalendar: n
}, {
  slots: a
}) {
  var i;
  const u = Ft(), r = () => {
    n(Fo(e, (p) => p - 1));
  }, s = () => {
    n(Fo(e, (p) => p + 1));
  }, o = () => {
    n(rr(e, (p) => p - 1));
  }, l = () => {
    n(rr(e, (p) => p + 1));
  }, c = () => {
    n(rr(e, (p) => p - 10));
  }, d = () => {
    n(rr(e, (p) => p + 10));
  };
  return ie("div", {
    class: `${u}-calendar-header`
  }, [ie(so, {
    value: "double-left",
    onClick: t === "year" ? c : o
  }, null), t === "date" && ie(so, {
    value: "left",
    onClick: r
  }, null), ie(so, {
    value: "double-right",
    onClick: t === "year" ? d : l
  }, null), t === "date" && ie(so, {
    value: "right",
    onClick: s
  }, null), ie("span", {
    class: `${u}-calendar-header-label`
  }, [(i = a.default) == null ? void 0 : i.call(a)])]);
}
function Rh({
  calendar: t,
  isWeekMode: e,
  showWeekNumber: n,
  titleFormat: a,
  getWeekActive: i,
  getCellClasses: u,
  onSelect: r,
  onUpdatePanel: s,
  onUpdateCalendar: o,
  onDateMouseEnter: l,
  onDateMouseLeave: c
}) {
  const d = Ft(), p = Qf(), h = Qa().value, {
    yearFormat: f,
    monthBeforeYear: m,
    monthFormat: v = "MMM",
    formatLocale: g
  } = h, y = g.firstDayOfWeek || 0;
  let S = h.days || g.weekdaysMin;
  S = S.concat(S).slice(y, y + 7);
  const E = t.getFullYear(), A = t.getMonth(), w = Ja(xh({
    firstDayOfWeek: y,
    year: E,
    month: A
  }), 7), V = (K, Y) => Ya(K, Y, {
    locale: h.formatLocale
  }), M = (K) => {
    s(K);
  }, C = (K) => {
    const Y = K.getAttribute("data-index"), [ae, J] = Y.split(",").map((ce) => parseInt(ce, 10)), he = w[ae][J];
    return new Date(he);
  }, R = (K) => {
    r(C(K.currentTarget));
  }, k = (K) => {
    l && l(C(K.currentTarget));
  }, $ = (K) => {
    c && c(C(K.currentTarget));
  }, B = ie("button", {
    type: "button",
    class: `${d}-btn ${d}-btn-text ${d}-btn-current-year`,
    onClick: () => M("year")
  }, [V(t, f)]), z = ie("button", {
    type: "button",
    class: `${d}-btn ${d}-btn-text ${d}-btn-current-month`,
    onClick: () => M("month")
  }, [V(t, v)]);
  return n = typeof n == "boolean" ? n : e, ie("div", {
    class: [`${d}-calendar ${d}-calendar-panel-date`, {
      [`${d}-calendar-week-mode`]: e
    }]
  }, [ie(_a, {
    type: "date",
    calendar: t,
    onUpdateCalendar: o
  }, {
    default: () => [m ? [z, B] : [B, z]]
  }), ie("div", {
    class: `${d}-calendar-content`
  }, [ie("table", {
    class: `${d}-table ${d}-table-date`
  }, [ie("thead", null, [ie("tr", null, [n && ie("th", {
    class: `${d}-week-number-header`
  }, null), S.map((K) => ie("th", {
    key: K
  }, [K]))])]), ie("tbody", null, [w.map((K, Y) => ie("tr", {
    key: Y,
    class: [`${d}-date-row`, {
      [`${d}-active-week`]: i(K)
    }]
  }, [n && ie("td", {
    class: `${d}-week-number`,
    "data-index": `${Y},0`,
    onClick: R
  }, [ie("div", null, [p(K[0])])]), K.map((ae, J) => ie("td", {
    key: J,
    class: ["cell", u(ae)],
    title: V(ae, a),
    "data-index": `${Y},${J}`,
    onClick: R,
    onMouseenter: k,
    onMouseleave: $
  }, [ie("div", null, [ae.getDate()])]))]))])])])]);
}
function Ph({
  calendar: t,
  getCellClasses: e,
  onSelect: n,
  onUpdateCalendar: a,
  onUpdatePanel: i
}) {
  const u = Ft(), r = Qa().value, s = r.months || r.formatLocale.monthsShort, o = (c) => $n(t.getFullYear(), c), l = (c) => {
    const p = c.currentTarget.getAttribute("data-month");
    n(o(parseInt(p, 10)));
  };
  return ie("div", {
    class: `${u}-calendar ${u}-calendar-panel-month`
  }, [ie(_a, {
    type: "month",
    calendar: t,
    onUpdateCalendar: a
  }, {
    default: () => [ie("button", {
      type: "button",
      class: `${u}-btn ${u}-btn-text ${u}-btn-current-year`,
      onClick: () => i("year")
    }, [t.getFullYear()])]
  }), ie("div", {
    class: `${u}-calendar-content`
  }, [ie("table", {
    class: `${u}-table ${u}-table-month`
  }, [Ja(s, 3).map((c, d) => ie("tr", {
    key: d
  }, [c.map((p, h) => {
    const f = d * 3 + h;
    return ie("td", {
      key: h,
      class: ["cell", e(o(f))],
      "data-month": f,
      onClick: l
    }, [ie("div", null, [p])]);
  })]))])])]);
}
const Ih = (t) => {
  const e = Math.floor(t.getFullYear() / 10) * 10, n = [];
  for (let a = 0; a < 10; a++)
    n.push(e + a);
  return Ja(n, 2);
};
function Dh({
  calendar: t,
  getCellClasses: e = () => [],
  getYearPanel: n = Ih,
  onSelect: a,
  onUpdateCalendar: i
}) {
  const u = Ft(), r = (d) => $n(d, 0), s = (d) => {
    const h = d.currentTarget.getAttribute("data-year");
    a(r(parseInt(h, 10)));
  }, o = n(new Date(t)), l = o[0][0], c = Yi(Yi(o));
  return ie("div", {
    class: `${u}-calendar ${u}-calendar-panel-year`
  }, [ie(_a, {
    type: "year",
    calendar: t,
    onUpdateCalendar: i
  }, {
    default: () => [ie("span", null, [l]), ie("span", {
      class: `${u}-calendar-decade-separator`
    }, null), ie("span", null, [c])]
  }), ie("div", {
    class: `${u}-calendar-content`
  }, [ie("table", {
    class: `${u}-table ${u}-table-year`
  }, [o.map((d, p) => ie("tr", {
    key: p
  }, [d.map((h, f) => ie("td", {
    key: f,
    class: ["cell", e(r(h))],
    "data-year": h,
    onClick: s
  }, [ie("div", null, [h])]))]))])])]);
}
function Fh(t) {
  const e = wn(t, {
    defaultValue: Pn(/* @__PURE__ */ new Date()),
    type: "date",
    disabledDate: () => !1,
    getClasses: () => [],
    titleFormat: "YYYY-MM-DD"
  }), n = sn(() => (Array.isArray(e.value) ? e.value : [e.value]).filter(Sn).map((y) => e.type === "year" ? bh(y) : e.type === "month" ? Xi(y) : Pn(y))), a = Ze(/* @__PURE__ */ new Date());
  _t(() => {
    let g = e.calendar;
    if (!Sn(g)) {
      const {
        length: y
      } = n.value;
      g = Yo(y > 0 ? n.value[y - 1] : e.defaultValue);
    }
    a.value = Xi(g);
  });
  const i = (g) => {
    var y;
    a.value = g, (y = e.onCalendarChange) == null || y.call(e, g);
  }, u = Ze("date");
  _t(() => {
    const g = ["date", "month", "year"], y = Math.max(g.indexOf(e.type), g.indexOf(e.defaultPanel));
    u.value = y !== -1 ? g[y] : "date";
  });
  const r = (g) => {
    var y;
    const S = u.value;
    u.value = g, (y = e.onPanelChange) == null || y.call(e, g, S);
  }, s = (g) => e.disabledDate(new Date(g), n.value), o = (g, y) => {
    var S, E, A;
    if (!s(g))
      if ((S = e.onPick) == null || S.call(e, g), e.multiple === !0) {
        const w = n.value.filter((V) => V.getTime() !== g.getTime());
        w.length === n.value.length && w.push(g), (E = e["onUpdate:value"]) == null || E.call(e, w, y);
      } else
        (A = e["onUpdate:value"]) == null || A.call(e, g, y);
  }, l = (g) => {
    o(g, e.type === "week" ? "week" : "date");
  }, c = (g) => {
    if (e.type === "year")
      o(g, "year");
    else if (i(g), r("month"), e.partialUpdate && n.value.length === 1) {
      const y = rr(n.value[0], g.getFullYear());
      o(y, "year");
    }
  }, d = (g) => {
    if (e.type === "month")
      o(g, "month");
    else if (i(g), r("date"), e.partialUpdate && n.value.length === 1) {
      const y = Fo(rr(n.value[0], g.getFullYear()), g.getMonth());
      o(y, "month");
    }
  }, p = (g, y = []) => (s(g) ? y.push("disabled") : n.value.some((S) => S.getTime() === g.getTime()) && y.push("active"), y.concat(e.getClasses(g, n.value, y.join(" ")))), h = (g) => {
    const y = g.getMonth() !== a.value.getMonth(), S = [];
    return g.getTime() === (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0) && S.push("today"), y && S.push("not-current-month"), p(g, S);
  }, f = (g) => e.type !== "month" ? a.value.getMonth() === g.getMonth() ? "active" : "" : p(g), m = (g) => e.type !== "year" ? a.value.getFullYear() === g.getFullYear() ? "active" : "" : p(g), v = (g) => {
    if (e.type !== "week")
      return !1;
    const y = g[0].getTime(), S = g[6].getTime();
    return n.value.some((E) => {
      const A = E.getTime();
      return A >= y && A <= S;
    });
  };
  return () => u.value === "year" ? ie(Dh, {
    calendar: a.value,
    getCellClasses: m,
    getYearPanel: e.getYearPanel,
    onSelect: c,
    onUpdateCalendar: i
  }, null) : u.value === "month" ? ie(Ph, {
    calendar: a.value,
    getCellClasses: f,
    onSelect: d,
    onUpdatePanel: r,
    onUpdateCalendar: i
  }, null) : ie(Rh, {
    isWeekMode: e.type === "week",
    showWeekNumber: e.showWeekNumber,
    titleFormat: e.titleFormat,
    calendar: a.value,
    getCellClasses: h,
    getWeekActive: v,
    onSelect: l,
    onUpdatePanel: r,
    onUpdateCalendar: i,
    onDateMouseEnter: e.onDateMouseEnter,
    onDateMouseLeave: e.onDateMouseLeave
  }, null);
}
const Ko = Fn()(["type", "value", "defaultValue", "defaultPanel", "disabledDate", "getClasses", "calendar", "multiple", "partialUpdate", "showWeekNumber", "titleFormat", "getYearPanel", "onDateMouseEnter", "onDateMouseLeave", "onCalendarChange", "onPanelChange", "onUpdate:value", "onPick"]);
var Xo = En(Fh, Ko);
const Qi = (t, e) => {
  const n = t.getTime();
  let [a, i] = e.map((u) => u.getTime());
  return a > i && ([a, i] = [i, a]), n > a && n < i;
};
function Mh(t) {
  const e = wn(t, {
    defaultValue: /* @__PURE__ */ new Date(),
    type: "date"
  }), n = Ft(), a = sn(() => {
    let v = Array.isArray(e.defaultValue) ? e.defaultValue : [e.defaultValue, e.defaultValue];
    return v = v.map((g) => Pn(g)), Bn(v) ? v : [/* @__PURE__ */ new Date(), /* @__PURE__ */ new Date()].map((g) => Pn(g));
  }), i = Ze([/* @__PURE__ */ new Date(NaN), /* @__PURE__ */ new Date(NaN)]);
  _t(() => {
    Bn(e.value) && (i.value = e.value);
  });
  const u = (v, g) => {
    var y;
    const [S, E] = i.value;
    Sn(S) && !Sn(E) ? (S.getTime() > v.getTime() ? i.value = [v, S] : i.value = [S, v], (y = e["onUpdate:value"]) == null || y.call(e, i.value, g)) : i.value = [v, /* @__PURE__ */ new Date(NaN)];
  }, r = Ze([/* @__PURE__ */ new Date(), /* @__PURE__ */ new Date()]), s = sn(() => Bn(e.calendar) ? e.calendar : r.value), o = sn(() => e.type === "year" ? 120 : e.type === "month" ? 12 : 1), l = (v, g) => {
    var y;
    const S = Sh(v[0], v[1]), E = o.value - S;
    if (E > 0) {
      const A = g === 1 ? 0 : 1;
      v[A] = Fo(v[A], (w) => w + (A === 0 ? -E : E));
    }
    r.value = v, (y = e.onCalendarChange) == null || y.call(e, v, g);
  }, c = (v) => {
    l([v, s.value[1]], 0);
  }, d = (v) => {
    l([s.value[0], v], 1);
  };
  _t(() => {
    const v = Bn(e.value) ? e.value : a.value;
    l(v.slice(0, 2));
  });
  const p = Ze(null), h = (v) => p.value = v, f = () => p.value = null, m = (v, g, y) => {
    const S = e.getClasses ? e.getClasses(v, g, y) : [], E = Array.isArray(S) ? S : [S];
    return /disabled|active/.test(y) ? E : (g.length === 2 && Qi(v, g) && E.push("in-range"), g.length === 1 && p.value && Qi(v, [g[0], p.value]) ? E.concat("hover-in-range") : E);
  };
  return () => {
    const v = s.value.map((g, y) => {
      const S = en(xt({}, e), {
        calendar: g,
        value: i.value,
        defaultValue: a.value[y],
        getClasses: m,
        partialUpdate: !1,
        multiple: !1,
        "onUpdate:value": u,
        onCalendarChange: y === 0 ? c : d,
        onDateMouseLeave: f,
        onDateMouseEnter: h
      });
      return ie(Xo, S, null);
    });
    return ie("div", {
      class: `${n}-calendar-range`
    }, [v]);
  };
}
const ei = Ko;
var ti = En(Mh, ei);
const dl = ou({
  setup(t, {
    slots: e
  }) {
    const n = Ft(), a = Ze(), i = Ze(""), u = Ze("");
    Fr(() => {
      if (!a.value)
        return;
      const f = a.value, m = f.clientHeight * 100 / f.scrollHeight;
      i.value = m < 100 ? `${m}%` : "";
    });
    const s = _f(), o = (f) => {
      const m = f.currentTarget, {
        scrollHeight: v,
        scrollTop: g
      } = m;
      u.value = `${g * 100 / v}%`;
    };
    let l = !1, c = 0;
    const d = (f) => {
      f.stopImmediatePropagation();
      const m = f.currentTarget, {
        offsetTop: v
      } = m;
      l = !0, c = f.clientY - v;
    }, p = (f) => {
      if (!l || !a.value)
        return;
      const {
        clientY: m
      } = f, {
        scrollHeight: v,
        clientHeight: g
      } = a.value, S = (m - c) * v / g;
      a.value.scrollTop = S;
    }, h = () => {
      l = !1;
    };
    return Fr(() => {
      document.addEventListener("mousemove", p), document.addEventListener("mouseup", h);
    }), au(() => {
      document.addEventListener("mousemove", p), document.addEventListener("mouseup", h);
    }), () => {
      var f;
      return ie("div", {
        class: `${n}-scrollbar`,
        style: {
          position: "relative",
          overflow: "hidden"
        }
      }, [ie("div", {
        ref: a,
        class: `${n}-scrollbar-wrap`,
        style: {
          marginRight: `-${s}px`
        },
        onScroll: o
      }, [(f = e.default) == null ? void 0 : f.call(e)]), ie("div", {
        class: `${n}-scrollbar-track`
      }, [ie("div", {
        class: `${n}-scrollbar-thumb`,
        style: {
          height: i.value,
          top: u.value
        },
        onMousedown: d
      }, null)])]);
    };
  }
});
function Lh({
  options: t,
  getClasses: e,
  onSelect: n
}) {
  const a = Ft(), i = (u) => {
    const r = u.target, s = u.currentTarget;
    if (r.tagName.toUpperCase() !== "LI")
      return;
    const o = s.getAttribute("data-type"), l = parseInt(s.getAttribute("data-index"), 10), c = parseInt(r.getAttribute("data-index"), 10), d = t[l].list[c].value;
    n(d, o);
  };
  return ie("div", {
    class: `${a}-time-columns`
  }, [t.map((u, r) => ie(dl, {
    key: u.type,
    class: `${a}-time-column`
  }, {
    default: () => [ie("ul", {
      class: `${a}-time-list`,
      "data-index": r,
      "data-type": u.type,
      onClick: i
    }, [u.list.map((s, o) => ie("li", {
      key: s.text,
      "data-index": o,
      class: [`${a}-time-item`, e(s.value, u.type)]
    }, [s.text]))])]
  }))]);
}
function Uh(t) {
  return typeof t == "function" || Object.prototype.toString.call(t) === "[object Object]" && !lu(t);
}
function Nh(t) {
  let e;
  const n = Ft();
  return ie(dl, null, Uh(e = t.options.map((a) => ie("div", {
    key: a.text,
    class: [`${n}-time-option`, t.getClasses(a.value, "time")],
    onClick: () => t.onSelect(a.value, "time")
  }, [a.text]))) ? e : {
    default: () => [e]
  });
}
function sa({
  length: t,
  step: e = 1,
  options: n
}) {
  if (Array.isArray(n))
    return n.filter((i) => i >= 0 && i < t);
  e <= 0 && (e = 1);
  const a = [];
  for (let i = 0; i < t; i += e)
    a.push(i);
  return a;
}
function jh(t, e) {
  let { showHour: n, showMinute: a, showSecond: i, use12h: u } = e;
  const r = e.format || "HH:mm:ss";
  n = typeof n == "boolean" ? n : /[HhKk]/.test(r), a = typeof a == "boolean" ? a : /m/.test(r), i = typeof i == "boolean" ? i : /s/.test(r), u = typeof u == "boolean" ? u : /a/i.test(r);
  const s = [], o = u && t.getHours() >= 12;
  return n && s.push({
    type: "hour",
    list: sa({
      length: u ? 12 : 24,
      step: e.hourStep,
      options: e.hourOptions
    }).map((l) => {
      const c = l === 0 && u ? "12" : ia(l), d = new Date(t);
      return d.setHours(o ? l + 12 : l), { value: d, text: c };
    })
  }), a && s.push({
    type: "minute",
    list: sa({
      length: 60,
      step: e.minuteStep,
      options: e.minuteOptions
    }).map((l) => {
      const c = new Date(t);
      return c.setMinutes(l), { value: c, text: ia(l) };
    })
  }), i && s.push({
    type: "second",
    list: sa({
      length: 60,
      step: e.secondStep,
      options: e.secondOptions
    }).map((l) => {
      const c = new Date(t);
      return c.setSeconds(l), { value: c, text: ia(l) };
    })
  }), u && s.push({
    type: "ampm",
    list: ["AM", "PM"].map((l, c) => {
      const d = new Date(t);
      return d.setHours(d.getHours() % 12 + c * 12), { text: l, value: d };
    })
  }), s;
}
function la(t = "") {
  const e = t.split(":");
  if (e.length >= 2) {
    const n = parseInt(e[0], 10), a = parseInt(e[1], 10);
    return {
      hours: n,
      minutes: a
    };
  }
  return null;
}
function kh({
  date: t,
  option: e,
  format: n,
  formatDate: a
}) {
  const i = [];
  if (typeof e == "function")
    return e() || [];
  const u = la(e.start), r = la(e.end), s = la(e.step), o = e.format || n;
  if (u && r && s) {
    const l = u.minutes + u.hours * 60, c = r.minutes + r.hours * 60, d = s.minutes + s.hours * 60, p = Math.floor((c - l) / d);
    for (let h = 0; h <= p; h++) {
      const f = l + h * d, m = Math.floor(f / 60), v = f % 60, g = new Date(t);
      g.setHours(m, v, 0), i.push({
        value: g,
        text: a(g, o)
      });
    }
  }
  return i;
}
const fl = (t, e, n = 0) => {
  if (n <= 0) {
    requestAnimationFrame(() => {
      t.scrollTop = e;
    });
    return;
  }
  const i = (e - t.scrollTop) / n * 10;
  requestAnimationFrame(() => {
    const u = t.scrollTop + i;
    if (u >= e) {
      t.scrollTop = e;
      return;
    }
    t.scrollTop = u, fl(t, e, n - 10);
  });
};
function Vh(t) {
  const e = wn(t, {
    defaultValue: Pn(/* @__PURE__ */ new Date()),
    format: "HH:mm:ss",
    timeTitleFormat: "YYYY-MM-DD",
    disabledTime: () => !1,
    scrollDuration: 100
  }), n = Ft(), a = Qa(), i = (m, v) => Ya(m, v, {
    locale: a.value.formatLocale
  }), u = Ze(/* @__PURE__ */ new Date());
  _t(() => {
    u.value = Yo(e.value, e.defaultValue);
  });
  const r = (m) => Array.isArray(m) ? m.every((v) => e.disabledTime(new Date(v))) : e.disabledTime(new Date(m)), s = (m) => {
    const v = new Date(m);
    return r([v.getTime(), v.setMinutes(0, 0, 0), v.setMinutes(59, 59, 999)]);
  }, o = (m) => {
    const v = new Date(m);
    return r([v.getTime(), v.setSeconds(0, 0), v.setSeconds(59, 999)]);
  }, l = (m) => {
    const v = new Date(m), g = v.getHours() < 12 ? 0 : 12, y = g + 11;
    return r([v.getTime(), v.setHours(g, 0, 0, 0), v.setHours(y, 59, 59, 999)]);
  }, c = (m, v) => v === "hour" ? s(m) : v === "minute" ? o(m) : v === "ampm" ? l(m) : r(m), d = (m, v) => {
    var g;
    if (!c(m, v)) {
      const y = new Date(m);
      u.value = y, r(y) || (g = e["onUpdate:value"]) == null || g.call(e, y, v);
    }
  }, p = (m, v) => c(m, v) ? "disabled" : m.getTime() === u.value.getTime() ? "active" : "", h = Ze(), f = (m) => {
    if (!h.value)
      return;
    const v = h.value.querySelectorAll(".active");
    for (let g = 0; g < v.length; g++) {
      const y = v[g], S = Za(y, h.value);
      if (S) {
        const E = y.offsetTop;
        fl(S, E, m);
      }
    }
  };
  return Fr(() => f(0)), To(u, () => f(e.scrollDuration), {
    flush: "post"
  }), () => {
    let m;
    return e.timePickerOptions ? m = ie(Nh, {
      onSelect: d,
      getClasses: p,
      options: kh({
        date: u.value,
        format: e.format,
        option: e.timePickerOptions,
        formatDate: i
      })
    }, null) : m = ie(Lh, {
      options: jh(u.value, e),
      onSelect: d,
      getClasses: p
    }, null), ie("div", {
      class: `${n}-time`,
      ref: h
    }, [e.showTimeHeader && ie("div", {
      class: `${n}-time-header`
    }, [ie("button", {
      type: "button",
      class: `${n}-btn ${n}-btn-text ${n}-time-header-title`,
      onClick: e.onClickTitle
    }, [i(u.value, e.timeTitleFormat)])]), ie("div", {
      class: `${n}-time-content`
    }, [m])]);
  };
}
const Jo = Fn()(["value", "defaultValue", "format", "timeTitleFormat", "showTimeHeader", "disabledTime", "timePickerOptions", "hourOptions", "minuteOptions", "secondOptions", "hourStep", "minuteStep", "secondStep", "showHour", "showMinute", "showSecond", "use12h", "scrollDuration", "onClickTitle", "onUpdate:value"]);
var Lr = En(Vh, Jo);
function $h(t) {
  const e = wn(t, {
    defaultValue: Pn(/* @__PURE__ */ new Date()),
    disabledTime: () => !1
  }), n = Ft(), a = Ze([/* @__PURE__ */ new Date(NaN), /* @__PURE__ */ new Date(NaN)]);
  _t(() => {
    Bn(e.value) ? a.value = e.value : a.value = [/* @__PURE__ */ new Date(NaN), /* @__PURE__ */ new Date(NaN)];
  });
  const i = (l, c) => {
    var d;
    (d = e["onUpdate:value"]) == null || d.call(e, a.value, l === "time" ? "time-range" : l, c);
  }, u = (l, c) => {
    a.value[0] = l, a.value[1].getTime() >= l.getTime() || (a.value[1] = l), i(c, 0);
  }, r = (l, c) => {
    a.value[1] = l, a.value[0].getTime() <= l.getTime() || (a.value[0] = l), i(c, 1);
  }, s = (l) => e.disabledTime(l, 0), o = (l) => l.getTime() < a.value[0].getTime() || e.disabledTime(l, 1);
  return () => {
    const l = Array.isArray(e.defaultValue) ? e.defaultValue : [e.defaultValue, e.defaultValue];
    return ie("div", {
      class: `${n}-time-range`
    }, [ie(Lr, en(xt({}, e), {
      "onUpdate:value": u,
      value: a.value[0],
      defaultValue: l[0],
      disabledTime: s
    }), null), ie(Lr, en(xt({}, e), {
      "onUpdate:value": r,
      value: a.value[1],
      defaultValue: l[1],
      disabledTime: o
    }), null)]);
  };
}
const ni = Jo;
var ri = En($h, ni);
function hl(t) {
  const e = Ze(!1), n = () => {
    var u;
    e.value = !1, (u = t.onShowTimePanelChange) == null || u.call(t, !1);
  }, a = () => {
    var u;
    e.value = !0, (u = t.onShowTimePanelChange) == null || u.call(t, !0);
  };
  return { timeVisible: sn(() => typeof t.showTimePanel == "boolean" ? t.showTimePanel : e.value), openTimePanel: a, closeTimePanel: n };
}
function Bh(t) {
  const e = wn(t, {
    disabledTime: () => !1,
    defaultValue: Pn(/* @__PURE__ */ new Date())
  }), n = Ze(e.value);
  _t(() => {
    n.value = e.value;
  });
  const {
    openTimePanel: a,
    closeTimePanel: i,
    timeVisible: u
  } = hl(e), r = (s, o) => {
    var l;
    o === "date" && a();
    let c = Mo(s, Yo(e.value, e.defaultValue));
    if (e.disabledTime(new Date(c)) && (c = Mo(s, e.defaultValue), e.disabledTime(new Date(c)))) {
      n.value = c;
      return;
    }
    (l = e["onUpdate:value"]) == null || l.call(e, c, o);
  };
  return () => {
    const s = Ft(), o = en(xt({}, gn(e, Ko)), {
      multiple: !1,
      type: "date",
      value: n.value,
      "onUpdate:value": r
    }), l = en(xt({}, gn(e, Jo)), {
      showTimeHeader: !0,
      value: n.value,
      "onUpdate:value": e["onUpdate:value"],
      onClickTitle: i
    });
    return ie("div", {
      class: `${s}-date-time`
    }, [ie(Xo, o, null), u.value && ie(Lr, l, null)]);
  };
}
const pl = Fn()(["showTimePanel", "onShowTimePanelChange"]), Hh = [...pl, ...Ko, ...Jo];
var vl = En(Bh, Hh);
function zh(t) {
  const e = wn(t, {
    defaultValue: Pn(/* @__PURE__ */ new Date()),
    disabledTime: () => !1
  }), n = Ze(e.value);
  _t(() => {
    n.value = e.value;
  });
  const {
    openTimePanel: a,
    closeTimePanel: i,
    timeVisible: u
  } = hl(e), r = (s, o) => {
    var l;
    o === "date" && a();
    const c = Array.isArray(e.defaultValue) ? e.defaultValue : [e.defaultValue, e.defaultValue];
    let d = s.map((p, h) => {
      const f = Bn(e.value) ? e.value[h] : c[h];
      return Mo(p, f);
    });
    if (d[1].getTime() < d[0].getTime() && (d = [d[0], d[0]]), d.some(e.disabledTime) && (d = s.map((p, h) => Mo(p, c[h])), d.some(e.disabledTime))) {
      n.value = d;
      return;
    }
    (l = e["onUpdate:value"]) == null || l.call(e, d, o);
  };
  return () => {
    const s = Ft(), o = en(xt({}, gn(e, ei)), {
      type: "date",
      value: n.value,
      "onUpdate:value": r
    }), l = en(xt({}, gn(e, ni)), {
      showTimeHeader: !0,
      value: n.value,
      "onUpdate:value": e["onUpdate:value"],
      onClickTitle: i
    });
    return ie("div", {
      class: `${s}-date-time-range`
    }, [ie(ti, o, null), u.value && ie(ri, l, null)]);
  };
}
const Gh = [...pl, ...ni, ...ei];
var ml = En(zh, Gh);
const Wh = Fn()(["range", "open", "appendToBody", "clearable", "confirm", "disabled", "editable", "multiple", "partialUpdate", "showHour", "showMinute", "showSecond", "showTimeHeader", "showTimePanel", "showWeekNumber", "use12h"]), Zi = {
  date: "YYYY-MM-DD",
  datetime: "YYYY-MM-DD HH:mm:ss",
  year: "YYYY",
  month: "YYYY-MM",
  time: "HH:mm:ss",
  week: "w"
};
function gl(t, {
  slots: e
}) {
  const n = t.type || "date", a = t.format || Zi[n] || Zi.date, i = en(xt({}, th(t, Wh)), {
    type: n,
    format: a
  });
  return ie(Ji, gn(i, Ji.props), xt({
    content: (u) => {
      if (i.range) {
        const r = n === "time" ? ri : n === "datetime" ? ml : ti;
        return bi(r, gn(xt(xt({}, i), u), r.props));
      } else {
        const r = n === "time" ? Lr : n === "datetime" ? vl : Xo;
        return bi(r, gn(xt(xt({}, i), u), r.props));
      }
    },
    "icon-calendar": () => n === "time" ? ie(gh, null, null) : ie(cl, null, null)
  }, e));
}
const Yh = {
  locale: al,
  install: (t) => {
    t.component("DatePicker", gl);
  }
};
var Kh = Object.assign(gl, Yh, {
  Calendar: Xo,
  CalendarRange: ti,
  TimePanel: Lr,
  TimeRange: ri,
  DateTime: vl,
  DateTimeRange: ml
});
const Xh = {
  name: "VDatepicker",
  components: { DatePicker: Kh },
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
    var t, e, n;
    this.dateFullYear = (n = (e = (t = this.$parent) == null ? void 0 : t.$parent) == null ? void 0 : e.$props) == null ? void 0 : n.dateFullYear, this.date = this.formatValue();
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
        if ([":", "am", "pm", "AM", "PM"].forEach((n) => {
          this.modelValue.value.includes(n) && (e = !0);
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
      const n = e.match(/(am|pm)\.?$/i);
      let a = null;
      n && (a = n[1].toLowerCase(), e = e.slice(0, n.index).trim());
      let i = e.match(/^(\d{1,2})\s*[:.\-]\s*(\d{1,2})(?:\s*[:.\-]\s*\d{1,2})?$/), u, r;
      if (i)
        u = i[1], r = i[2];
      else if (i = e.match(/^(\d{3,4})$/), i) {
        const d = i[1];
        d.length === 3 ? (u = d.slice(0, 1), r = d.slice(1)) : (u = d.slice(0, 2), r = d.slice(2));
      } else if (i = e.match(/^(\d{1,2})$/), i)
        u = i[1], r = "0";
      else {
        const d = e.split(/[^0-9]+/).filter(Boolean);
        if (d.length >= 2)
          u = d[0], r = d[1];
        else
          return null;
      }
      const s = parseInt(u, 10), o = parseInt(r, 10);
      if (Number.isNaN(s) || Number.isNaN(o) || o < 0 || o > 59) return null;
      let l = s;
      if (a) {
        if (l < 1 || l > 12) return null;
        a === "pm" ? l !== 12 && (l += 12) : l === 12 && (l = 0);
      } else if (l < 0 || l > 23) return null;
      const c = (d) => String(d).padStart(2, "0");
      return `${c(l)}:${c(o)}`;
    },
    detectAndFormatToDDMMYY(t) {
      if (!t || typeof t != "string") return null;
      const n = t.trim().replace(/[^\d]/g, "/").replace(/\/+/g, "/").split("/").filter(Boolean);
      if (n.length < 3) return null;
      let [a, i, u] = n;
      u = u.slice(0, 4);
      const r = parseInt(a, 10), s = parseInt(i, 10);
      if (Number.isNaN(r) || Number.isNaN(s)) return null;
      let o;
      if (/^\d{4}$/.test(u))
        o = parseInt(u, 10);
      else if (/^\d{1,2}$/.test(u))
        o = 2e3 + parseInt(u, 10);
      else {
        const m = parseInt(u, 10);
        if (Number.isNaN(m)) return null;
        o = m < 100 ? 2e3 + m : m;
      }
      const l = (m, v, g) => {
        if (v < 1 || v > 12 || m < 1 || m > 31) return !1;
        const y = new Date(g, v - 1, m);
        return y.getFullYear() === g && y.getMonth() === v - 1 && y.getDate() === m;
      };
      if (r > 31 || s > 31) return null;
      let c = null, d = null;
      if (r > 12 && s <= 12)
        c = r, d = s;
      else if (s > 12 && r <= 12)
        c = s, d = r;
      else if (l(r, s, o))
        c = r, d = s;
      else if (l(s, r, o))
        c = s, d = r;
      else
        return null;
      if (!l(c, d, o)) return null;
      const p = String(c).padStart(2, "0"), h = String(d).padStart(2, "0"), f = this.dateFullYear ? String(o) : String(o).slice(-2);
      return `${p}/${h}/${f}`;
    }
  }
}, Jh = ["name", "id", "value"], Qh = ["textContent"], Zh = {
  key: 2,
  class: "inline-block text-sm text-gray-600 mt-1.5 brand-200"
};
function qh(t, e, n, a, i, u) {
  var s, o;
  const r = Zt("date-picker");
  return _(), re("div", {
    class: rt(["v-datepicker", (s = n.modelValue) == null ? void 0 : s.class])
  }, [
    j("input", {
      type: "hidden",
      name: n.modelValue.name,
      id: n.modelValue.name,
      value: i.date
    }, null, 8, Jh),
    t.editable ? (_(), qt(r, {
      key: 0,
      value: i.date,
      "onUpdate:value": e[0] || (e[0] = (l) => i.date = l),
      format: u.formatTimeString,
      "value-type": "format",
      type: u.formatTimeString === "hh:mm" ? "time" : "date",
      class: "!w-full h-[40px]",
      placeholder: n.modelValue.placeholder
    }, null, 8, ["value", "format", "type", "placeholder"])) : (_(), re("p", {
      key: 1,
      textContent: $e(n.modelValue.value)
    }, null, 8, Qh)),
    (o = n.modelValue) != null && o.hint ? (_(), re("p", Zh, $e(n.modelValue.hint), 1)) : Fe("", !0)
  ], 2);
}
const yl = /* @__PURE__ */ bt(Xh, [["render", qh]]), _h = {
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
    this.input = Vt(this.modelValue.value) ?? this.getFormValue(this.possibleFormValues, (t = this.modelValue) == null ? void 0 : t.defined_key);
  },
  watch: {
    input(t) {
      this.modelValue.value = t;
    }
  }
}, ep = { class: "flex flex-row-reverse gap-2 items-center justify-end" }, tp = { class: "inline-block text-base text-gray-700" }, np = ["name", "type", "disabled"], rp = ["textContent"], op = {
  key: 0,
  class: "inline-block text-sm text-gray-600 mt-1.5 pl-[28px]"
};
function ap(t, e, n, a, i, u) {
  var r, s, o;
  return _(), re("div", null, [
    j("div", ep, [
      j("span", tp, $e((r = n.modelValue) == null ? void 0 : r.label), 1),
      j("div", null, [
        t.editable ? et((_(), re("input", {
          key: 0,
          name: n.modelValue.name,
          type: n.modelValue.type,
          "onUpdate:modelValue": e[0] || (e[0] = (l) => i.input = l),
          disabled: !t.editable,
          class: "h-5 w-5 text-brand-700 border-gray-300 rounded focus:ring-brand-700 focus:ring-2"
        }, null, 8, np)), [
          [Da, i.input]
        ]) : (_(), re("p", {
          key: 1,
          textContent: $e((s = n.modelValue) == null ? void 0 : s.value)
        }, null, 8, rp))
      ])
    ]),
    (o = n.modelValue) != null && o.hint ? (_(), re("p", op, $e(n.modelValue.hint), 1)) : Fe("", !0)
  ]);
}
const bl = /* @__PURE__ */ bt(_h, [["render", ap]]), ip = {
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
}, sp = ["for"], lp = {
  key: 0,
  class: "v-field-label inline-block mb-2"
}, up = ["innerHTML"], cp = { key: 0 };
function dp(t, e, n, a, i, u) {
  return _(), re("label", {
    for: n.field,
    class: "block space-y-2xsSpace text-sm font-medium leading-none text-tertiary-700"
  }, [
    n.labelText || t.$slots.label ? (_(), re("span", lp, [
      t.$slots.label ? xn(t.$slots, "label", { key: 0 }) : (_(), re(Dt, { key: 1 }, [
        j("span", { innerHTML: n.labelText }, null, 8, up),
        n.isRequired ? (_(), re("span", cp, " *")) : Fe("", !0)
      ], 64))
    ])) : Fe("", !0),
    xn(t.$slots, "default")
  ], 8, sp);
}
const fp = /* @__PURE__ */ bt(ip, [["render", dp]]), hp = {
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
      type: [Boolean]
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
  methods: {
    toggle() {
      this.isDisabled || this.$emit("update:modelValue", !this.modelValue);
    }
  }
}, pp = { class: "v-toggle" }, vp = ["aria-checked"], mp = {
  key: 0,
  class: "v-toggle__label"
};
function gp(t, e, n, a, i, u) {
  return _(), re("div", pp, [
    j("button", {
      type: "button",
      class: rt(["v-toggle__track", {
        "v-toggle__track--on": n.modelValue,
        "v-toggle__track--small": n.small,
        "v-toggle__track--ring": n.ring
      }]),
      role: "switch",
      "aria-checked": n.modelValue,
      onClick: e[0] || (e[0] = (...r) => u.toggle && u.toggle(...r))
    }, [
      j("span", {
        "aria-hidden": "true",
        class: rt(["v-toggle__thumb", {
          "v-toggle__thumb--on": n.modelValue,
          "v-toggle__thumb--small": n.small
        }])
      }, null, 2)
    ], 10, vp),
    n.title ? (_(), re("span", mp, $e(n.title), 1)) : Fe("", !0)
  ]);
}
const oi = /* @__PURE__ */ bt(hp, [["render", gp]]), yp = {
  name: "VAddress",
  components: { InputWrapper: fp, VToggle: oi },
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
      var t, e, n, a;
      return [(t = this.form) == null ? void 0 : t.address, (e = this.form) == null ? void 0 : e.city, (n = this.form) == null ? void 0 : n.state, (a = this.form) == null ? void 0 : a.postcode].filter(Boolean).join(", ");
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
        const n = document.createElement("script");
        n.id = "google-maps-script", n.src = `https://maps.googleapis.com/maps/api/js?key=${this.googleApiKey}&libraries=places`, n.async = !0, n.defer = !0, n.onload = t, n.onerror = e, document.head.appendChild(n);
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
        const n = {};
        for (const u of e.address_components)
          switch (u.types[0]) {
            case "street_number":
              n.streetNumber = u.long_name;
              break;
            case "route":
              n.streetName = u.long_name;
              break;
            case "locality":
              this.form.city = u.long_name;
              break;
            case "administrative_area_level_1":
              this.form.state = u.short_name;
              break;
            case "postal_code":
              this.form.postcode = u.long_name;
              break;
          }
        this.form.address = "", n.streetNumber && (this.form.address = n.streetNumber + " "), n.streetName && (this.form.address += n.streetName);
      });
    },
    resetAddressInput(t) {
      const e = t == null ? void 0 : t.target;
      e != null && e.value || (this.form.address = null, this.form.value = null, this.form.city = null, this.form.state = null, this.form.lat = null, this.form.lng = null, this.form.postcode = null, this.form.addressInput = "");
    }
  },
  mounted() {
    var t, e, n, a, i;
    this.googleApiKey = (n = (e = (t = this.$parent) == null ? void 0 : t.$parent) == null ? void 0 : e.$props) == null ? void 0 : n.googleApiKey, this.loadGoogleMapsScript().then(() => {
      setTimeout(() => {
        this.initializeAutocomplete();
      }, 1e3);
    }).catch((u) => {
      console.error("Failed to load Google Maps script: " + this.googleApiKey, u);
    }), this.form = Object.keys(this.modelValue).length ? this.modelValue : this.form, this.form.address || (this.form.address = ((a = this.modelValue) == null ? void 0 : a.value) ?? this.getFormValue(this.possibleFormValues, (i = this.modelValue) == null ? void 0 : i.defined_key));
  }
}, bp = {
  key: 0,
  class: "text-md text-gray-900"
}, xp = ["id", "name", "disabled", "value", "placeholder"], Sp = {
  key: 0,
  class: "inline-block text-sm text-gray-600 mt-1.5 brand-200"
}, Ep = {
  key: 1,
  class: "flex cursor-pointer items-center space-y-1"
}, wp = {
  key: 2,
  class: "relative space-y-2"
}, Tp = ["textContent"], Ap = { class: "flex flex-row space-x-3" }, Cp = { class: "basis-1/3" }, Op = ["textContent"], Rp = { class: "basis-1/3" }, Pp = ["textContent"], Ip = { class: "basis-1/3" }, Dp = ["textContent"];
function Fp(t, e, n, a, i, u) {
  var o, l;
  const r = Zt("input-wrapper"), s = Zt("v-toggle");
  return _(), re("div", {
    class: rt(["grid space-y-2", (o = n.modelValue) == null ? void 0 : o.class])
  }, [
    ie(r, {
      field: "full_address",
      class: "space-y-0 [&_label]:mx-0 [&_div.w-full]:pt-0"
    }, {
      default: Tt(() => {
        var c;
        return [
          n.editable ? (_(), re("input", {
            key: 1,
            id: i.name,
            name: i.name,
            type: "text",
            disabled: i.isManual,
            class: "border-1 border-solid border-gray-300 rounded-lg bg-white",
            value: n.modelValue.value,
            placeholder: (c = n.modelValue) == null ? void 0 : c.placeholder,
            onInput: e[0] || (e[0] = (...d) => u.resetAddressInput && u.resetAddressInput(...d))
          }, null, 40, xp)) : (_(), re("p", bp, $e(u.fullAddress), 1))
        ];
      }),
      _: 1
    }),
    (l = n.modelValue) != null && l.hint ? (_(), re("p", Sp, $e(n.modelValue.hint), 1)) : Fe("", !0),
    n.editable ? (_(), re("label", Ep, [
      ie(s, {
        modelValue: i.isManual,
        "onUpdate:modelValue": e[1] || (e[1] = (c) => i.isManual = c),
        ring: !1
      }, null, 8, ["modelValue"]),
      e[6] || (e[6] = j("span", { class: "text-xs inline-block" }, "Manual Address", -1))
    ])) : Fe("", !0),
    i.isManual ? (_(), re("div", wp, [
      ie(r, {
        "is-vertical": "",
        field: "address",
        "label-text": "Address",
        class: "w-full"
      }, {
        default: Tt(() => [
          et(j("input", {
            type: "text",
            class: "border-1 border-solid border-gray-300 rounded-lg bg-white",
            "onUpdate:modelValue": e[2] || (e[2] = (c) => i.form.address = c),
            placeholder: "Address"
          }, null, 512), [
            [yt, i.form.address]
          ]),
          j("p", {
            class: "text-red-700 text-xs mt-1",
            textContent: $e(u.getValidationMessage("address"))
          }, null, 8, Tp)
        ]),
        _: 1
      }),
      j("div", Ap, [
        j("div", Cp, [
          ie(r, {
            "is-vertical": "",
            field: "city",
            "label-text": "Suburb",
            class: "w-full"
          }, {
            default: Tt(() => [
              et(j("input", {
                type: "text",
                class: "border-1 border-solid border-gray-300 rounded-lg bg-white w-full",
                "onUpdate:modelValue": e[3] || (e[3] = (c) => i.form.city = c),
                placeholder: "Suburb"
              }, null, 512), [
                [yt, i.form.city]
              ]),
              j("p", {
                class: "text-red-700 text-xs mt-1",
                textContent: $e(u.getValidationMessage("city"))
              }, null, 8, Op)
            ]),
            _: 1
          })
        ]),
        j("div", Rp, [
          ie(r, {
            "is-vertical": "",
            field: "state",
            "label-text": "State",
            class: "w-full"
          }, {
            default: Tt(() => [
              et(j("input", {
                "onUpdate:modelValue": e[4] || (e[4] = (c) => i.form.state = c),
                type: "text",
                placeholder: "State",
                class: "border-1 border-solid border-gray-300 rounded-lg bg-white w-full"
              }, null, 512), [
                [yt, i.form.state]
              ]),
              j("p", {
                class: "text-red-700 text-xs mt-1",
                textContent: $e(u.getValidationMessage("state"))
              }, null, 8, Pp)
            ]),
            _: 1
          })
        ]),
        j("div", Ip, [
          ie(r, {
            "is-vertical": "",
            field: "postcode",
            "label-text": "Postcode",
            class: "w-full"
          }, {
            default: Tt(() => [
              et(j("input", {
                type: "text",
                class: "border-1 border-solid border-gray-300 rounded-lg bg-white w-full",
                "onUpdate:modelValue": e[5] || (e[5] = (c) => i.form.postcode = c),
                placeholder: "Postcode"
              }, null, 512), [
                [yt, i.form.postcode]
              ]),
              j("p", {
                class: "text-red-700 text-xs mt-1",
                textContent: $e(u.getValidationMessage("postcode"))
              }, null, 8, Dp)
            ]),
            _: 1
          })
        ])
      ])
    ])) : Fe("", !0)
  ], 2);
}
const xl = /* @__PURE__ */ bt(yp, [["render", Fp]]), Mp = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
};
function Lp(t, e) {
  return _(), re("svg", Mp, [...e[0] || (e[0] = [
    j("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M8 12h8m6 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
    }, null, -1)
  ])]);
}
const Up = { render: Lp }, Np = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
};
function jp(t, e) {
  return _(), re("svg", Np, [...e[0] || (e[0] = [
    j("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 5v14m-7-7h14"
    }, null, -1)
  ])]);
}
const Sl = { render: jp }, kp = {
  name: "VGridInput",
  mixins: [fn],
  components: {
    MinusCircle: Up,
    Plus: Sl
  },
  props: {
    modelValue: { default: [] }
  },
  data() {
    return {
      localField: this.modelValue,
      processing: !1,
      groupSize: 0,
      componentTypes: {
        checkbox: nt(bl),
        "check-group": nt(Ao),
        datepicker: nt(yl),
        "file-upload": nt(Bs),
        number: nt(Po),
        "radio-group": nt(Ao),
        select: nt(zs),
        signature: nt(Gs),
        text: nt(Po),
        textarea: nt(Ws),
        paragraph: nt(Ys),
        address: nt(xl)
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
    this.localField = this.modelValue, this.groupSize = this.calculateGroupSize();
  },
  watch: {
    "localField.template_row_count"(t) {
      t && (this.groupSize = t);
    }
  },
  methods: {
    calculateGroupSize() {
      var e;
      if (!((e = this.grid) != null && e.length))
        return 0;
      if (this.localField.template_row_count)
        return this.localField.template_row_count;
      let t = 0;
      for (const n of this.grid) {
        if (this.isAddedRow(n))
          break;
        t++;
      }
      return t || this.grid.length;
    },
    isAddedRow(t) {
      const e = t.flatMap((n) => n).filter(Boolean);
      return e.length ? e.every((n) => n.on_flight === !0) : !1;
    },
    rowHasContent(t) {
      const e = this.grid[t];
      return e && e.some((n) => n.length > 0);
    },
    getTemplateRows() {
      return this.grid.slice(0, this.groupSize);
    },
    canRemoveRow(t) {
      return !this.editable || !this.modelValue.allow_add_row || !this.groupSize || this.grid.length <= this.groupSize || t < this.groupSize || t >= this.grid.length ? !1 : this.isLastVisibleRowOfGroup(t);
    },
    isLastVisibleRowOfGroup(t) {
      const e = Math.floor(t / this.groupSize) * this.groupSize, n = e + this.groupSize - 1;
      for (let a = n; a >= e; a--)
        if (this.rowHasContent(a))
          return t === a;
      return t === n;
    },
    getGroupStartIndex(t) {
      return Math.floor(t / this.groupSize) * this.groupSize;
    },
    initiateGrid(t = !1) {
      var e;
      (e = this.grid) == null || e.forEach((n, a) => {
        n.forEach((i, u) => {
          var r;
          (r = i[0]) != null && r.name && (this.localField || (this.localField = {
            grid: []
          }), this.localField.hasOwnProperty("grid") || (this.localField.grid = []), this.localField.grid.hasOwnProperty(a) || (this.localField.grid[a] = {}));
        });
      }), t && (this.processing = !0, this.localField.filter((n, a) => a + 1 > this.grid.length).forEach((n) => {
        this.getTemplateRows().forEach((a) => {
          const i = Vt(a.map((u) => xi(u))).map((u) => (Object.keys(n).forEach((r) => {
            u[0].name === this.getTemplateFieldName(r) && (u[0].name = r);
          }), u));
          this.grid.push(i.map((u) => {
            const r = Math.floor(Math.random() * Date.now());
            return u[0] && (u[0].on_flight = !0, u[0].id && (u[0].id = r)), u;
          }));
        });
      }), this.processing = !1);
    },
    getTemplateFieldName(t) {
      const e = t.lastIndexOf("_");
      return e === -1 ? t : t.substring(0, e);
    },
    removeRow(t) {
      if (!this.canRemoveRow(t))
        return;
      const e = this.getGroupStartIndex(t);
      e < 0 || e >= this.grid.length || this.grid.splice(e, this.groupSize);
    },
    addRow() {
      this.localField.allow_add_row && this.grid && this.grid.length && this.groupSize && (this.processing = !0, Vt(this.getTemplateRows().map((e) => e.map((n) => xi(n)))).forEach((e) => {
        const n = Vt(e);
        this.grid.push(n.map((a) => {
          if (!a[0])
            return a;
          const i = Math.floor(Math.random() * Date.now());
          return a[0].value = null, a[0].on_flight = !0, a[0].id && (a[0].id = i, a[0].name = `${a[0].name}_${i}`), a;
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
      const n = `fields.${this.index}.grid.${t}.${e}.0.value`;
      return this.validationErrors.hasOwnProperty(n) ? this.validationErrors[n][0] : null;
    },
    fieldComponent(t) {
      return t != null && t.type ? this.componentTypes[t.type] : "";
    },
    getClassForItem(t, e) {
      const n = t[e].some((a) => a.hasOwnProperty("label"));
      return !n && e === !this.getLatestColumnIndex ? "relative flex items-center justify-center rounded-lg w-full" : !n && e === this.getLatestColumnIndex && this.isLatestColumnEmpty ? "" : "relative rounded-lg w-full";
    }
  }
}, Vp = {
  key: 0,
  class: "mb-4 font-regular text-gray-600"
}, $p = { class: "grid gap-4 w-full" }, Bp = {
  key: 0,
  class: "flex gap-2 relative"
}, Hp = ["for"], zp = ["for"], Gp = { key: 1 }, Wp = {
  key: 3,
  class: "text-red-700 text-xs mt-1"
}, Yp = ["onClick"], Kp = {
  key: 1,
  class: "mt-2 flex gap-2"
};
function Xp(t, e, n, a, i, u) {
  const r = Zt("MinusCircle"), s = Zt("Plus");
  return _(), re("div", null, [
    n.modelValue.hint ? (_(), re("p", Vp, $e(n.modelValue.hint), 1)) : Fe("", !0),
    j("div", $p, [
      (_(!0), re(Dt, null, bn(u.grid, (o, l) => (_(), re("div", {
        key: "row-" + l
      }, [
        o.filter((c) => c.length).length ? (_(), re("div", Bp, [
          (_(!0), re(Dt, null, bn(o, (c, d) => {
            var p, h, f, m, v, g, y, S, E;
            return _(), re("div", {
              key: "cell-" + l + "-" + d + "-" + ((p = c[0]) == null ? void 0 : p.name),
              class: rt(u.getClassForItem(u.grid[l], d) + (u.canRemoveRow(l) ? " pr-[40px]" : ""))
            }, [
              (h = c[0]) != null && h.type ? (_(), re("div", {
                key: 0,
                class: rt(["v-field", u.fieldClass(c[0])])
              }, [
                c[0].type === "heading" && !((f = c[0]) != null && f.on_flight) ? (_(), re("label", {
                  key: 0,
                  for: n.modelValue.name,
                  class: "text-lg font-semibold !text-gray-900"
                }, $e((m = c[0]) == null ? void 0 : m.label), 9, Hp)) : !["paragraph", "checkbox"].includes((v = c[0]) == null ? void 0 : v.type) && !((g = c[0]) != null && g.on_flight) ? (_(), re("label", {
                  key: 1,
                  class: "text-sm text-gray-700",
                  for: n.modelValue.name
                }, [
                  (y = c[0]) != null && y.label ? (_(), qt(Hn(u.fieldLabel(c[0])), { key: 0 }, {
                    default: Tt(() => {
                      var A, w;
                      return [
                        Qt($e((A = c[0]) == null ? void 0 : A.label) + " " + $e((w = c[0]) != null && w.required ? "*" : ""), 1)
                      ];
                    }),
                    _: 2
                  }, 1024)) : (_(), re("span", Gp, " "))
                ], 8, zp)) : Fe("", !0),
                u.fieldComponent(c[0]) && ((S = c[0]) != null && S.name) && !i.processing ? (_(), qt(Hn(u.fieldComponent(c[0])), {
                  key: n.modelValue.name + ((E = c[0]) == null ? void 0 : E.name),
                  modelValue: u.grid[l][d][0],
                  "onUpdate:modelValue": (A) => u.grid[l][d][0] = A,
                  editable: t.editable
                }, null, 8, ["modelValue", "onUpdate:modelValue", "editable"])) : Fe("", !0),
                u.getError(l, d) ? (_(), re("p", Wp, $e(u.getError(l, d)), 1)) : Fe("", !0),
                xn(t.$slots, "default")
              ], 2)) : Fe("", !0)
            ], 2);
          }), 128)),
          u.canRemoveRow(l) ? (_(), re("a", {
            key: 0,
            class: "cursor-pointer absolute top-2.5 right-[12px]",
            onClick: (c) => u.removeRow(l)
          }, [
            ie(r, { class: "w-5 h-5 text-brand-700 hover:text-brand-800" })
          ], 8, Yp)) : Fe("", !0)
        ])) : Fe("", !0)
      ]))), 128))
    ]),
    n.modelValue.allow_add_row && t.editable ? (_(), re("div", Kp, [
      j("a", {
        onClick: e[0] || (e[0] = (...o) => u.addRow && u.addRow(...o)),
        class: "cursor-pointer text-brand-700 flex items-center text-sm font-semibold hover:bg-brand-50 p-1 gap-1 rounded"
      }, [
        ie(s, { class: "w-5 h-5" }),
        e[1] || (e[1] = Qt(" Add Row ", -1))
      ])
    ])) : Fe("", !0)
  ]);
}
const Jp = /* @__PURE__ */ bt(kp, [["render", Xp]]), Qp = {
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
      componentTypes: nt({
        checkbox: nt(bl),
        "check-group": nt(Ao),
        datepicker: nt(yl),
        "file-upload": nt(Bs),
        number: nt(Po),
        "radio-group": nt(Ao),
        select: nt(zs),
        signature: nt(Gs),
        text: nt(Po),
        textarea: nt(Ws),
        paragraph: nt(Ys),
        grid: nt(Jp),
        address: nt(xl)
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
}, Zp = ["for"], qp = ["for"], _p = { key: 1 };
function ev(t, e, n, a, i, u) {
  var r;
  return _(), re("div", {
    class: rt(["v-field", u.fieldClass])
  }, [
    i.localModelValue.type === "heading" ? (_(), re("label", {
      key: 0,
      for: i.localModelValue.name,
      class: "text-lg font-semibold !text-gray-900"
    }, $e(i.localModelValue.label), 9, Zp)) : !["paragraph", "checkbox"].includes(i.localModelValue.type) && !((r = i.localModelValue) != null && r.presenter) ? (_(), re("label", {
      key: 1,
      for: i.localModelValue.name
    }, [
      i.localModelValue.label ? (_(), qt(Hn(u.fieldLabel), { key: 0 }, {
        default: Tt(() => [
          Qt($e(i.localModelValue.label) + " " + $e(i.localModelValue.required ? "*" : ""), 1)
        ]),
        _: 1
      })) : (_(), re("span", _p, " "))
    ], 8, qp)) : Fe("", !0),
    (_(), qt(Hn(u.fieldComponent), {
      key: i.localModelValue.name,
      modelValue: i.localModelValue,
      "onUpdate:modelValue": e[0] || (e[0] = (s) => i.localModelValue = s),
      index: n.index,
      editable: n.editable,
      preview: n.preview,
      "validation-errors": n.validationErrors
    }, null, 8, ["modelValue", "index", "editable", "preview", "validation-errors"])),
    n.modelValue.presenter ? (_(), qt(Hn(n.modelValue.presenter), La({
      key: 2,
      "model-value": n.modelValue,
      "validation-errors": n.validationErrors,
      editable: n.editable
    }, { possibleValues: n.possibleValues }), null, 16, ["model-value", "validation-errors", "editable"])) : Fe("", !0),
    xn(t.$slots, "default")
  ], 2);
}
const tv = /* @__PURE__ */ bt(Qp, [["render", ev]]), nv = {
  name: "VForm",
  components: {
    VField: tv
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
    },
    uploadUrl: {
      type: String,
      default: ""
    }
  },
  data() {
    var t;
    return {
      csrf: (t = document.head.querySelector('meta[name="csrf-token"]')) == null ? void 0 : t.content,
      updatedData: Vt(this.modelValue)
    };
  },
  provide() {
    return {
      possibleFormValues: this.possibleValues,
      getFormValue: (t, e) => e == null ? void 0 : e.split(".").reduce((n, a) => n && n[a], t)
    };
  },
  mounted() {
    const t = hs(), e = (t == null ? void 0 : t.appContext.config.globalProperties.$customFormComponents) ?? [];
    this.populateCustomComponents(e);
  },
  methods: {
    updateField(t, e) {
      this.modelValue.fields[t] = e, this.updatedData = Vt(this.modelValue);
    },
    populateCustomComponents(t) {
      this.modelValue.fields = this.modelValue.fields.map((e) => (["builder", "presenter"].forEach((n) => {
        if (e[n]) {
          const a = t.find((i) => {
            var u, r;
            return ((u = i[n]) == null ? void 0 : u.__name) === ((r = e[n]) == null ? void 0 : r.__name);
          });
          a && (e[n] = nt(a[n]));
        }
      }), e));
    },
    getValidationMessage(t) {
      const e = `fields.${t}.value`;
      return this.validationErrors.hasOwnProperty(e) ? this.validationErrors[e].join("|") : "";
    }
  }
}, rv = ["action", "method", "name"], ov = ["value"], av = ["value"], iv = ["name", "value"], sv = { key: 0 }, lv = ["textContent"];
function uv(t, e, n, a, i, u) {
  var s, o;
  const r = Zt("v-field");
  return _(), re("form", {
    class: "v-form",
    action: n.action,
    method: n.method !== "get" ? "post" : "get",
    name: n.name
  }, [
    j("input", {
      type: "hidden",
      name: "_token",
      value: i.csrf
    }, null, 8, ov),
    j("input", {
      type: "hidden",
      name: "_method",
      value: n.method
    }, null, 8, av),
    j("input", {
      type: "hidden",
      name: n.name,
      value: JSON.stringify(i.updatedData)
    }, null, 8, iv),
    j("div", {
      class: "fields",
      style: cu({
        "pointer-events": n.canInteract ? "auto" : "none",
        "user-select": n.canInteract ? "auto" : "none"
      })
    }, [
      n.title ? (_(), re("div", sv, [
        j("h3", null, $e(n.title), 1),
        e[0] || (e[0] = j("hr", null, null, -1))
      ])) : Fe("", !0),
      (o = (s = n.modelValue) == null ? void 0 : s.fields) != null && o.length ? (_(!0), re(Dt, { key: 1 }, bn(n.modelValue.fields, (l, c) => (_(), re("div", {
        key: l.id
      }, [
        (_(), qt(r, {
          key: l.name,
          index: c,
          "model-value": l,
          "onUpdate:modelValue": (d) => u.updateField(c, d),
          editable: n.editable,
          preview: n.preview,
          "validation-errors": n.validationErrors,
          "possible-values": n.possibleValues
        }, {
          default: Tt(() => [
            l.hasOwnProperty("presenter") ? Fe("", !0) : (_(), re("p", {
              key: 0,
              class: "text-red-700 text-xs mt-1",
              textContent: $e(u.getValidationMessage(c))
            }, null, 8, lv))
          ]),
          _: 2
        }, 1032, ["index", "model-value", "onUpdate:modelValue", "editable", "preview", "validation-errors", "possible-values"]))
      ]))), 128)) : Fe("", !0)
    ], 4),
    n.editable ? xn(t.$slots, "default", { key: 0 }) : Fe("", !0)
  ], 8, rv);
}
const cv = /* @__PURE__ */ bt(nv, [["render", uv]]);
class dv {
  constructor() {
    this.events = {};
  }
  $on(e, n) {
    this.events[e] = this.events[e] || [], this.events[e].push(n);
  }
  $off(e, n) {
    if (this.events[e]) {
      for (let a = 0; a < this.events[e].length; a++)
        if (this.events[e][a] === n) {
          this.events[e].splice(a, 1);
          break;
        }
    }
  }
  $emit(e, n) {
    this.events[e] && this.events[e].forEach(function(a) {
      a(n);
    });
  }
}
const fv = new dv();
var yo = { exports: {} };
const hv = /* @__PURE__ */ Vs(ru);
/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function qi(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    e && (a = a.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function dn(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? qi(Object(n), !0).forEach(function(a) {
      pv(t, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : qi(Object(n)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return t;
}
function bo(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? bo = function(e) {
    return typeof e;
  } : bo = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, bo(t);
}
function pv(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function tn() {
  return tn = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, tn.apply(this, arguments);
}
function vv(t, e) {
  if (t == null) return {};
  var n = {}, a = Object.keys(t), i, u;
  for (u = 0; u < a.length; u++)
    i = a[u], !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
function mv(t, e) {
  if (t == null) return {};
  var n = vv(t, e), a, i;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);
    for (i = 0; i < u.length; i++)
      a = u[i], !(e.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(t, a) && (n[a] = t[a]);
  }
  return n;
}
function gv(t) {
  return yv(t) || bv(t) || xv(t) || Sv();
}
function yv(t) {
  if (Array.isArray(t)) return Aa(t);
}
function bv(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function xv(t, e) {
  if (t) {
    if (typeof t == "string") return Aa(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Aa(t, e);
  }
}
function Aa(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, a = new Array(e); n < e; n++) a[n] = t[n];
  return a;
}
function Sv() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Ev = "1.14.0";
function yn(t) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(t);
}
var Tn = yn(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Br = yn(/Edge/i), _i = yn(/firefox/i), Or = yn(/safari/i) && !yn(/chrome/i) && !yn(/android/i), El = yn(/iP(ad|od|hone)/i), wv = yn(/chrome/i) && yn(/android/i), wl = {
  capture: !1,
  passive: !1
};
function Je(t, e, n) {
  t.addEventListener(e, n, !Tn && wl);
}
function Xe(t, e, n) {
  t.removeEventListener(e, n, !Tn && wl);
}
function Lo(t, e) {
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
function Tv(t) {
  return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
}
function an(t, e, n, a) {
  if (t) {
    n = n || document;
    do {
      if (e != null && (e[0] === ">" ? t.parentNode === n && Lo(t, e) : Lo(t, e)) || a && t === n)
        return t;
      if (t === n) break;
    } while (t = Tv(t));
  }
  return null;
}
var es = /\s+/g;
function dt(t, e, n) {
  if (t && e)
    if (t.classList)
      t.classList[n ? "add" : "remove"](e);
    else {
      var a = (" " + t.className + " ").replace(es, " ").replace(" " + e + " ", " ");
      t.className = (a + (n ? " " + e : "")).replace(es, " ");
    }
}
function Le(t, e, n) {
  var a = t && t.style;
  if (a) {
    if (n === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(t, "") : t.currentStyle && (n = t.currentStyle), e === void 0 ? n : n[e];
    !(e in a) && e.indexOf("webkit") === -1 && (e = "-webkit-" + e), a[e] = n + (typeof n == "string" ? "" : "px");
  }
}
function Gn(t, e) {
  var n = "";
  if (typeof t == "string")
    n = t;
  else
    do {
      var a = Le(t, "transform");
      a && a !== "none" && (n = a + " " + n);
    } while (!e && (t = t.parentNode));
  var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return i && new i(n);
}
function Tl(t, e, n) {
  if (t) {
    var a = t.getElementsByTagName(e), i = 0, u = a.length;
    if (n)
      for (; i < u; i++)
        n(a[i], i);
    return a;
  }
  return [];
}
function cn() {
  var t = document.scrollingElement;
  return t || document.documentElement;
}
function ct(t, e, n, a, i) {
  if (!(!t.getBoundingClientRect && t !== window)) {
    var u, r, s, o, l, c, d;
    if (t !== window && t.parentNode && t !== cn() ? (u = t.getBoundingClientRect(), r = u.top, s = u.left, o = u.bottom, l = u.right, c = u.height, d = u.width) : (r = 0, s = 0, o = window.innerHeight, l = window.innerWidth, c = window.innerHeight, d = window.innerWidth), (e || n) && t !== window && (i = i || t.parentNode, !Tn))
      do
        if (i && i.getBoundingClientRect && (Le(i, "transform") !== "none" || n && Le(i, "position") !== "static")) {
          var p = i.getBoundingClientRect();
          r -= p.top + parseInt(Le(i, "border-top-width")), s -= p.left + parseInt(Le(i, "border-left-width")), o = r + u.height, l = s + u.width;
          break;
        }
      while (i = i.parentNode);
    if (a && t !== window) {
      var h = Gn(i || t), f = h && h.a, m = h && h.d;
      h && (r /= m, s /= f, d /= f, c /= m, o = r + c, l = s + d);
    }
    return {
      top: r,
      left: s,
      bottom: o,
      right: l,
      width: d,
      height: c
    };
  }
}
function ts(t, e, n) {
  for (var a = Rn(t, !0), i = ct(t)[e]; a; ) {
    var u = ct(a)[n], r = void 0;
    if (r = i >= u, !r) return a;
    if (a === cn()) break;
    a = Rn(a, !1);
  }
  return !1;
}
function lr(t, e, n, a) {
  for (var i = 0, u = 0, r = t.children; u < r.length; ) {
    if (r[u].style.display !== "none" && r[u] !== Be.ghost && (a || r[u] !== Be.dragged) && an(r[u], n.draggable, t, !1)) {
      if (i === e)
        return r[u];
      i++;
    }
    u++;
  }
  return null;
}
function ai(t, e) {
  for (var n = t.lastElementChild; n && (n === Be.ghost || Le(n, "display") === "none" || e && !Lo(n, e)); )
    n = n.previousElementSibling;
  return n || null;
}
function pt(t, e) {
  var n = 0;
  if (!t || !t.parentNode)
    return -1;
  for (; t = t.previousElementSibling; )
    t.nodeName.toUpperCase() !== "TEMPLATE" && t !== Be.clone && (!e || Lo(t, e)) && n++;
  return n;
}
function ns(t) {
  var e = 0, n = 0, a = cn();
  if (t)
    do {
      var i = Gn(t), u = i.a, r = i.d;
      e += t.scrollLeft * u, n += t.scrollTop * r;
    } while (t !== a && (t = t.parentNode));
  return [e, n];
}
function Av(t, e) {
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      for (var a in e)
        if (e.hasOwnProperty(a) && e[a] === t[n][a]) return Number(n);
    }
  return -1;
}
function Rn(t, e) {
  if (!t || !t.getBoundingClientRect) return cn();
  var n = t, a = !1;
  do
    if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
      var i = Le(n);
      if (n.clientWidth < n.scrollWidth && (i.overflowX == "auto" || i.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (i.overflowY == "auto" || i.overflowY == "scroll")) {
        if (!n.getBoundingClientRect || n === document.body) return cn();
        if (a || e) return n;
        a = !0;
      }
    }
  while (n = n.parentNode);
  return cn();
}
function Cv(t, e) {
  if (t && e)
    for (var n in e)
      e.hasOwnProperty(n) && (t[n] = e[n]);
  return t;
}
function ua(t, e) {
  return Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width);
}
var Rr;
function Al(t, e) {
  return function() {
    if (!Rr) {
      var n = arguments, a = this;
      n.length === 1 ? t.call(a, n[0]) : t.apply(a, n), Rr = setTimeout(function() {
        Rr = void 0;
      }, e);
    }
  };
}
function Ov() {
  clearTimeout(Rr), Rr = void 0;
}
function Cl(t, e, n) {
  t.scrollLeft += e, t.scrollTop += n;
}
function ii(t) {
  var e = window.Polymer, n = window.jQuery || window.Zepto;
  return e && e.dom ? e.dom(t).cloneNode(!0) : n ? n(t).clone(!0)[0] : t.cloneNode(!0);
}
function rs(t, e) {
  Le(t, "position", "absolute"), Le(t, "top", e.top), Le(t, "left", e.left), Le(t, "width", e.width), Le(t, "height", e.height);
}
function ca(t) {
  Le(t, "position", ""), Le(t, "top", ""), Le(t, "left", ""), Le(t, "width", ""), Le(t, "height", "");
}
var Rt = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function Rv() {
  var t = [], e;
  return {
    captureAnimationState: function() {
      if (t = [], !!this.options.animation) {
        var a = [].slice.call(this.el.children);
        a.forEach(function(i) {
          if (!(Le(i, "display") === "none" || i === Be.ghost)) {
            t.push({
              target: i,
              rect: ct(i)
            });
            var u = dn({}, t[t.length - 1].rect);
            if (i.thisAnimationDuration) {
              var r = Gn(i, !0);
              r && (u.top -= r.f, u.left -= r.e);
            }
            i.fromRect = u;
          }
        });
      }
    },
    addAnimationState: function(a) {
      t.push(a);
    },
    removeAnimationState: function(a) {
      t.splice(Av(t, {
        target: a
      }), 1);
    },
    animateAll: function(a) {
      var i = this;
      if (!this.options.animation) {
        clearTimeout(e), typeof a == "function" && a();
        return;
      }
      var u = !1, r = 0;
      t.forEach(function(s) {
        var o = 0, l = s.target, c = l.fromRect, d = ct(l), p = l.prevFromRect, h = l.prevToRect, f = s.rect, m = Gn(l, !0);
        m && (d.top -= m.f, d.left -= m.e), l.toRect = d, l.thisAnimationDuration && ua(p, d) && !ua(c, d) && // Make sure animatingRect is on line between toRect & fromRect
        (f.top - d.top) / (f.left - d.left) === (c.top - d.top) / (c.left - d.left) && (o = Iv(f, p, h, i.options)), ua(d, c) || (l.prevFromRect = c, l.prevToRect = d, o || (o = i.options.animation), i.animate(l, f, d, o)), o && (u = !0, r = Math.max(r, o), clearTimeout(l.animationResetTimer), l.animationResetTimer = setTimeout(function() {
          l.animationTime = 0, l.prevFromRect = null, l.fromRect = null, l.prevToRect = null, l.thisAnimationDuration = null;
        }, o), l.thisAnimationDuration = o);
      }), clearTimeout(e), u ? e = setTimeout(function() {
        typeof a == "function" && a();
      }, r) : typeof a == "function" && a(), t = [];
    },
    animate: function(a, i, u, r) {
      if (r) {
        Le(a, "transition", ""), Le(a, "transform", "");
        var s = Gn(this.el), o = s && s.a, l = s && s.d, c = (i.left - u.left) / (o || 1), d = (i.top - u.top) / (l || 1);
        a.animatingX = !!c, a.animatingY = !!d, Le(a, "transform", "translate3d(" + c + "px," + d + "px,0)"), this.forRepaintDummy = Pv(a), Le(a, "transition", "transform " + r + "ms" + (this.options.easing ? " " + this.options.easing : "")), Le(a, "transform", "translate3d(0,0,0)"), typeof a.animated == "number" && clearTimeout(a.animated), a.animated = setTimeout(function() {
          Le(a, "transition", ""), Le(a, "transform", ""), a.animated = !1, a.animatingX = !1, a.animatingY = !1;
        }, r);
      }
    }
  };
}
function Pv(t) {
  return t.offsetWidth;
}
function Iv(t, e, n, a) {
  return Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) / Math.sqrt(Math.pow(e.top - n.top, 2) + Math.pow(e.left - n.left, 2)) * a.animation;
}
var qn = [], da = {
  initializeByDefault: !0
}, Hr = {
  mount: function(e) {
    for (var n in da)
      da.hasOwnProperty(n) && !(n in e) && (e[n] = da[n]);
    qn.forEach(function(a) {
      if (a.pluginName === e.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once");
    }), qn.push(e);
  },
  pluginEvent: function(e, n, a) {
    var i = this;
    this.eventCanceled = !1, a.cancel = function() {
      i.eventCanceled = !0;
    };
    var u = e + "Global";
    qn.forEach(function(r) {
      n[r.pluginName] && (n[r.pluginName][u] && n[r.pluginName][u](dn({
        sortable: n
      }, a)), n.options[r.pluginName] && n[r.pluginName][e] && n[r.pluginName][e](dn({
        sortable: n
      }, a)));
    });
  },
  initializePlugins: function(e, n, a, i) {
    qn.forEach(function(s) {
      var o = s.pluginName;
      if (!(!e.options[o] && !s.initializeByDefault)) {
        var l = new s(e, n, e.options);
        l.sortable = e, l.options = e.options, e[o] = l, tn(a, l.defaults);
      }
    });
    for (var u in e.options)
      if (e.options.hasOwnProperty(u)) {
        var r = this.modifyOption(e, u, e.options[u]);
        typeof r < "u" && (e.options[u] = r);
      }
  },
  getEventProperties: function(e, n) {
    var a = {};
    return qn.forEach(function(i) {
      typeof i.eventProperties == "function" && tn(a, i.eventProperties.call(n[i.pluginName], e));
    }), a;
  },
  modifyOption: function(e, n, a) {
    var i;
    return qn.forEach(function(u) {
      e[u.pluginName] && u.optionListeners && typeof u.optionListeners[n] == "function" && (i = u.optionListeners[n].call(e[u.pluginName], a));
    }), i;
  }
};
function Er(t) {
  var e = t.sortable, n = t.rootEl, a = t.name, i = t.targetEl, u = t.cloneEl, r = t.toEl, s = t.fromEl, o = t.oldIndex, l = t.newIndex, c = t.oldDraggableIndex, d = t.newDraggableIndex, p = t.originalEvent, h = t.putSortable, f = t.extraEventProperties;
  if (e = e || n && n[Rt], !!e) {
    var m, v = e.options, g = "on" + a.charAt(0).toUpperCase() + a.substr(1);
    window.CustomEvent && !Tn && !Br ? m = new CustomEvent(a, {
      bubbles: !0,
      cancelable: !0
    }) : (m = document.createEvent("Event"), m.initEvent(a, !0, !0)), m.to = r || n, m.from = s || n, m.item = i || n, m.clone = u, m.oldIndex = o, m.newIndex = l, m.oldDraggableIndex = c, m.newDraggableIndex = d, m.originalEvent = p, m.pullMode = h ? h.lastPutMode : void 0;
    var y = dn(dn({}, f), Hr.getEventProperties(a, e));
    for (var S in y)
      m[S] = y[S];
    n && n.dispatchEvent(m), v[g] && v[g].call(e, m);
  }
}
var Dv = ["evt"], jt = function(e, n) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = a.evt, u = mv(a, Dv);
  Hr.pluginEvent.bind(Be)(e, n, dn({
    dragEl: Se,
    parentEl: ft,
    ghostEl: Ye,
    rootEl: ut,
    nextEl: kn,
    lastDownEl: xo,
    cloneEl: ht,
    cloneHidden: Cn,
    dragStarted: wr,
    putSortable: wt,
    activeSortable: Be.active,
    originalEvent: i,
    oldIndex: or,
    oldDraggableIndex: Pr,
    newIndex: Gt,
    newDraggableIndex: An,
    hideGhostForTarget: Il,
    unhideGhostForTarget: Dl,
    cloneNowHidden: function() {
      Cn = !0;
    },
    cloneNowShown: function() {
      Cn = !1;
    },
    dispatchSortableEvent: function(s) {
      It({
        sortable: n,
        name: s,
        originalEvent: i
      });
    }
  }, u));
};
function It(t) {
  Er(dn({
    putSortable: wt,
    cloneEl: ht,
    targetEl: Se,
    rootEl: ut,
    oldIndex: or,
    oldDraggableIndex: Pr,
    newIndex: Gt,
    newDraggableIndex: An
  }, t));
}
var Se, ft, Ye, ut, kn, xo, ht, Cn, or, Gt, Pr, An, lo, wt, nr = !1, Uo = !1, No = [], Nn, rn, fa, ha, os, as, wr, _n, Ir, Dr = !1, uo = !1, So, Ot, pa = [], Ca = !1, jo = [], Qo = typeof document < "u", co = El, is = Br || Tn ? "cssFloat" : "float", Fv = Qo && !wv && !El && "draggable" in document.createElement("div"), Ol = (function() {
  if (Qo) {
    if (Tn)
      return !1;
    var t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
  }
})(), Rl = function(e, n) {
  var a = Le(e), i = parseInt(a.width) - parseInt(a.paddingLeft) - parseInt(a.paddingRight) - parseInt(a.borderLeftWidth) - parseInt(a.borderRightWidth), u = lr(e, 0, n), r = lr(e, 1, n), s = u && Le(u), o = r && Le(r), l = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + ct(u).width, c = o && parseInt(o.marginLeft) + parseInt(o.marginRight) + ct(r).width;
  if (a.display === "flex")
    return a.flexDirection === "column" || a.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (a.display === "grid")
    return a.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (u && s.float && s.float !== "none") {
    var d = s.float === "left" ? "left" : "right";
    return r && (o.clear === "both" || o.clear === d) ? "vertical" : "horizontal";
  }
  return u && (s.display === "block" || s.display === "flex" || s.display === "table" || s.display === "grid" || l >= i && a[is] === "none" || r && a[is] === "none" && l + c > i) ? "vertical" : "horizontal";
}, Mv = function(e, n, a) {
  var i = a ? e.left : e.top, u = a ? e.right : e.bottom, r = a ? e.width : e.height, s = a ? n.left : n.top, o = a ? n.right : n.bottom, l = a ? n.width : n.height;
  return i === s || u === o || i + r / 2 === s + l / 2;
}, Lv = function(e, n) {
  var a;
  return No.some(function(i) {
    var u = i[Rt].options.emptyInsertThreshold;
    if (!(!u || ai(i))) {
      var r = ct(i), s = e >= r.left - u && e <= r.right + u, o = n >= r.top - u && n <= r.bottom + u;
      if (s && o)
        return a = i;
    }
  }), a;
}, Pl = function(e) {
  function n(u, r) {
    return function(s, o, l, c) {
      var d = s.options.group.name && o.options.group.name && s.options.group.name === o.options.group.name;
      if (u == null && (r || d))
        return !0;
      if (u == null || u === !1)
        return !1;
      if (r && u === "clone")
        return u;
      if (typeof u == "function")
        return n(u(s, o, l, c), r)(s, o, l, c);
      var p = (r ? s : o).options.group.name;
      return u === !0 || typeof u == "string" && u === p || u.join && u.indexOf(p) > -1;
    };
  }
  var a = {}, i = e.group;
  (!i || bo(i) != "object") && (i = {
    name: i
  }), a.name = i.name, a.checkPull = n(i.pull, !0), a.checkPut = n(i.put), a.revertClone = i.revertClone, e.group = a;
}, Il = function() {
  !Ol && Ye && Le(Ye, "display", "none");
}, Dl = function() {
  !Ol && Ye && Le(Ye, "display", "");
};
Qo && document.addEventListener("click", function(t) {
  if (Uo)
    return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), Uo = !1, !1;
}, !0);
var jn = function(e) {
  if (Se) {
    e = e.touches ? e.touches[0] : e;
    var n = Lv(e.clientX, e.clientY);
    if (n) {
      var a = {};
      for (var i in e)
        e.hasOwnProperty(i) && (a[i] = e[i]);
      a.target = a.rootEl = n, a.preventDefault = void 0, a.stopPropagation = void 0, n[Rt]._onDragOver(a);
    }
  }
}, Uv = function(e) {
  Se && Se.parentNode[Rt]._isOutsideThisEl(e.target);
};
function Be(t, e) {
  if (!(t && t.nodeType && t.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
  this.el = t, this.options = e = tn({}, e), t[Rt] = this;
  var n = {
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
      return Rl(t, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(r, s) {
      r.setData("Text", s.textContent);
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
    supportPointer: Be.supportPointer !== !1 && "PointerEvent" in window && !Or,
    emptyInsertThreshold: 5
  };
  Hr.initializePlugins(this, t, n);
  for (var a in n)
    !(a in e) && (e[a] = n[a]);
  Pl(e);
  for (var i in this)
    i.charAt(0) === "_" && typeof this[i] == "function" && (this[i] = this[i].bind(this));
  this.nativeDraggable = e.forceFallback ? !1 : Fv, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? Je(t, "pointerdown", this._onTapStart) : (Je(t, "mousedown", this._onTapStart), Je(t, "touchstart", this._onTapStart)), this.nativeDraggable && (Je(t, "dragover", this), Je(t, "dragenter", this)), No.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), tn(this, Rv());
}
Be.prototype = /** @lends Sortable.prototype */
{
  constructor: Be,
  _isOutsideThisEl: function(e) {
    !this.el.contains(e) && e !== this.el && (_n = null);
  },
  _getDirection: function(e, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, e, n, Se) : this.options.direction;
  },
  _onTapStart: function(e) {
    if (e.cancelable) {
      var n = this, a = this.el, i = this.options, u = i.preventOnFilter, r = e.type, s = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e, o = (s || e).target, l = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || o, c = i.filter;
      if (zv(a), !Se && !(/mousedown|pointerdown/.test(r) && e.button !== 0 || i.disabled) && !l.isContentEditable && !(!this.nativeDraggable && Or && o && o.tagName.toUpperCase() === "SELECT") && (o = an(o, i.draggable, a, !1), !(o && o.animated) && xo !== o)) {
        if (or = pt(o), Pr = pt(o, i.draggable), typeof c == "function") {
          if (c.call(this, e, o, this)) {
            It({
              sortable: n,
              rootEl: l,
              name: "filter",
              targetEl: o,
              toEl: a,
              fromEl: a
            }), jt("filter", n, {
              evt: e
            }), u && e.cancelable && e.preventDefault();
            return;
          }
        } else if (c && (c = c.split(",").some(function(d) {
          if (d = an(l, d.trim(), a, !1), d)
            return It({
              sortable: n,
              rootEl: d,
              name: "filter",
              targetEl: o,
              fromEl: a,
              toEl: a
            }), jt("filter", n, {
              evt: e
            }), !0;
        }), c)) {
          u && e.cancelable && e.preventDefault();
          return;
        }
        i.handle && !an(l, i.handle, a, !1) || this._prepareDragStart(e, s, o);
      }
    }
  },
  _prepareDragStart: function(e, n, a) {
    var i = this, u = i.el, r = i.options, s = u.ownerDocument, o;
    if (a && !Se && a.parentNode === u) {
      var l = ct(a);
      if (ut = u, Se = a, ft = Se.parentNode, kn = Se.nextSibling, xo = a, lo = r.group, Be.dragged = Se, Nn = {
        target: Se,
        clientX: (n || e).clientX,
        clientY: (n || e).clientY
      }, os = Nn.clientX - l.left, as = Nn.clientY - l.top, this._lastX = (n || e).clientX, this._lastY = (n || e).clientY, Se.style["will-change"] = "all", o = function() {
        if (jt("delayEnded", i, {
          evt: e
        }), Be.eventCanceled) {
          i._onDrop();
          return;
        }
        i._disableDelayedDragEvents(), !_i && i.nativeDraggable && (Se.draggable = !0), i._triggerDragStart(e, n), It({
          sortable: i,
          name: "choose",
          originalEvent: e
        }), dt(Se, r.chosenClass, !0);
      }, r.ignore.split(",").forEach(function(c) {
        Tl(Se, c.trim(), va);
      }), Je(s, "dragover", jn), Je(s, "mousemove", jn), Je(s, "touchmove", jn), Je(s, "mouseup", i._onDrop), Je(s, "touchend", i._onDrop), Je(s, "touchcancel", i._onDrop), _i && this.nativeDraggable && (this.options.touchStartThreshold = 4, Se.draggable = !0), jt("delayStart", this, {
        evt: e
      }), r.delay && (!r.delayOnTouchOnly || n) && (!this.nativeDraggable || !(Br || Tn))) {
        if (Be.eventCanceled) {
          this._onDrop();
          return;
        }
        Je(s, "mouseup", i._disableDelayedDrag), Je(s, "touchend", i._disableDelayedDrag), Je(s, "touchcancel", i._disableDelayedDrag), Je(s, "mousemove", i._delayedDragTouchMoveHandler), Je(s, "touchmove", i._delayedDragTouchMoveHandler), r.supportPointer && Je(s, "pointermove", i._delayedDragTouchMoveHandler), i._dragStartTimer = setTimeout(o, r.delay);
      } else
        o();
    }
  },
  _delayedDragTouchMoveHandler: function(e) {
    var n = e.touches ? e.touches[0] : e;
    Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    Se && va(Se), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var e = this.el.ownerDocument;
    Xe(e, "mouseup", this._disableDelayedDrag), Xe(e, "touchend", this._disableDelayedDrag), Xe(e, "touchcancel", this._disableDelayedDrag), Xe(e, "mousemove", this._delayedDragTouchMoveHandler), Xe(e, "touchmove", this._delayedDragTouchMoveHandler), Xe(e, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(e, n) {
    n = n || e.pointerType == "touch" && e, !this.nativeDraggable || n ? this.options.supportPointer ? Je(document, "pointermove", this._onTouchMove) : n ? Je(document, "touchmove", this._onTouchMove) : Je(document, "mousemove", this._onTouchMove) : (Je(Se, "dragend", this), Je(ut, "dragstart", this._onDragStart));
    try {
      document.selection ? Eo(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(e, n) {
    if (nr = !1, ut && Se) {
      jt("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && Je(document, "dragover", Uv);
      var a = this.options;
      !e && dt(Se, a.dragClass, !1), dt(Se, a.ghostClass, !0), Be.active = this, e && this._appendGhost(), It({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (rn) {
      this._lastX = rn.clientX, this._lastY = rn.clientY, Il();
      for (var e = document.elementFromPoint(rn.clientX, rn.clientY), n = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(rn.clientX, rn.clientY), e !== n); )
        n = e;
      if (Se.parentNode[Rt]._isOutsideThisEl(e), n)
        do {
          if (n[Rt]) {
            var a = void 0;
            if (a = n[Rt]._onDragOver({
              clientX: rn.clientX,
              clientY: rn.clientY,
              target: e,
              rootEl: n
            }), a && !this.options.dragoverBubble)
              break;
          }
          e = n;
        } while (n = n.parentNode);
      Dl();
    }
  },
  _onTouchMove: function(e) {
    if (Nn) {
      var n = this.options, a = n.fallbackTolerance, i = n.fallbackOffset, u = e.touches ? e.touches[0] : e, r = Ye && Gn(Ye, !0), s = Ye && r && r.a, o = Ye && r && r.d, l = co && Ot && ns(Ot), c = (u.clientX - Nn.clientX + i.x) / (s || 1) + (l ? l[0] - pa[0] : 0) / (s || 1), d = (u.clientY - Nn.clientY + i.y) / (o || 1) + (l ? l[1] - pa[1] : 0) / (o || 1);
      if (!Be.active && !nr) {
        if (a && Math.max(Math.abs(u.clientX - this._lastX), Math.abs(u.clientY - this._lastY)) < a)
          return;
        this._onDragStart(e, !0);
      }
      if (Ye) {
        r ? (r.e += c - (fa || 0), r.f += d - (ha || 0)) : r = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: c,
          f: d
        };
        var p = "matrix(".concat(r.a, ",").concat(r.b, ",").concat(r.c, ",").concat(r.d, ",").concat(r.e, ",").concat(r.f, ")");
        Le(Ye, "webkitTransform", p), Le(Ye, "mozTransform", p), Le(Ye, "msTransform", p), Le(Ye, "transform", p), fa = c, ha = d, rn = u;
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!Ye) {
      var e = this.options.fallbackOnBody ? document.body : ut, n = ct(Se, !0, co, !0, e), a = this.options;
      if (co) {
        for (Ot = e; Le(Ot, "position") === "static" && Le(Ot, "transform") === "none" && Ot !== document; )
          Ot = Ot.parentNode;
        Ot !== document.body && Ot !== document.documentElement ? (Ot === document && (Ot = cn()), n.top += Ot.scrollTop, n.left += Ot.scrollLeft) : Ot = cn(), pa = ns(Ot);
      }
      Ye = Se.cloneNode(!0), dt(Ye, a.ghostClass, !1), dt(Ye, a.fallbackClass, !0), dt(Ye, a.dragClass, !0), Le(Ye, "transition", ""), Le(Ye, "transform", ""), Le(Ye, "box-sizing", "border-box"), Le(Ye, "margin", 0), Le(Ye, "top", n.top), Le(Ye, "left", n.left), Le(Ye, "width", n.width), Le(Ye, "height", n.height), Le(Ye, "opacity", "0.8"), Le(Ye, "position", co ? "absolute" : "fixed"), Le(Ye, "zIndex", "100000"), Le(Ye, "pointerEvents", "none"), Be.ghost = Ye, e.appendChild(Ye), Le(Ye, "transform-origin", os / parseInt(Ye.style.width) * 100 + "% " + as / parseInt(Ye.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(e, n) {
    var a = this, i = e.dataTransfer, u = a.options;
    if (jt("dragStart", this, {
      evt: e
    }), Be.eventCanceled) {
      this._onDrop();
      return;
    }
    jt("setupClone", this), Be.eventCanceled || (ht = ii(Se), ht.draggable = !1, ht.style["will-change"] = "", this._hideClone(), dt(ht, this.options.chosenClass, !1), Be.clone = ht), a.cloneId = Eo(function() {
      jt("clone", a), !Be.eventCanceled && (a.options.removeCloneOnHide || ut.insertBefore(ht, Se), a._hideClone(), It({
        sortable: a,
        name: "clone"
      }));
    }), !n && dt(Se, u.dragClass, !0), n ? (Uo = !0, a._loopId = setInterval(a._emulateDragOver, 50)) : (Xe(document, "mouseup", a._onDrop), Xe(document, "touchend", a._onDrop), Xe(document, "touchcancel", a._onDrop), i && (i.effectAllowed = "move", u.setData && u.setData.call(a, i, Se)), Je(document, "drop", a), Le(Se, "transform", "translateZ(0)")), nr = !0, a._dragStartId = Eo(a._dragStarted.bind(a, n, e)), Je(document, "selectstart", a), wr = !0, Or && Le(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(e) {
    var n = this.el, a = e.target, i, u, r, s = this.options, o = s.group, l = Be.active, c = lo === o, d = s.sort, p = wt || l, h, f = this, m = !1;
    if (Ca) return;
    function v(J, he) {
      jt(J, f, dn({
        evt: e,
        isOwner: c,
        axis: h ? "vertical" : "horizontal",
        revert: r,
        dragRect: i,
        targetRect: u,
        canSort: d,
        fromSortable: p,
        target: a,
        completed: y,
        onMove: function(ye, Ce) {
          return fo(ut, n, Se, i, ye, ct(ye), e, Ce);
        },
        changed: S
      }, he));
    }
    function g() {
      v("dragOverAnimationCapture"), f.captureAnimationState(), f !== p && p.captureAnimationState();
    }
    function y(J) {
      return v("dragOverCompleted", {
        insertion: J
      }), J && (c ? l._hideClone() : l._showClone(f), f !== p && (dt(Se, wt ? wt.options.ghostClass : l.options.ghostClass, !1), dt(Se, s.ghostClass, !0)), wt !== f && f !== Be.active ? wt = f : f === Be.active && wt && (wt = null), p === f && (f._ignoreWhileAnimating = a), f.animateAll(function() {
        v("dragOverAnimationComplete"), f._ignoreWhileAnimating = null;
      }), f !== p && (p.animateAll(), p._ignoreWhileAnimating = null)), (a === Se && !Se.animated || a === n && !a.animated) && (_n = null), !s.dragoverBubble && !e.rootEl && a !== document && (Se.parentNode[Rt]._isOutsideThisEl(e.target), !J && jn(e)), !s.dragoverBubble && e.stopPropagation && e.stopPropagation(), m = !0;
    }
    function S() {
      Gt = pt(Se), An = pt(Se, s.draggable), It({
        sortable: f,
        name: "change",
        toEl: n,
        newIndex: Gt,
        newDraggableIndex: An,
        originalEvent: e
      });
    }
    if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), a = an(a, s.draggable, n, !0), v("dragOver"), Be.eventCanceled) return m;
    if (Se.contains(e.target) || a.animated && a.animatingX && a.animatingY || f._ignoreWhileAnimating === a)
      return y(!1);
    if (Uo = !1, l && !s.disabled && (c ? d || (r = ft !== ut) : wt === this || (this.lastPutMode = lo.checkPull(this, l, Se, e)) && o.checkPut(this, l, Se, e))) {
      if (h = this._getDirection(e, a) === "vertical", i = ct(Se), v("dragOverValid"), Be.eventCanceled) return m;
      if (r)
        return ft = ut, g(), this._hideClone(), v("revert"), Be.eventCanceled || (kn ? ut.insertBefore(Se, kn) : ut.appendChild(Se)), y(!0);
      var E = ai(n, s.draggable);
      if (!E || Vv(e, h, this) && !E.animated) {
        if (E === Se)
          return y(!1);
        if (E && n === e.target && (a = E), a && (u = ct(a)), fo(ut, n, Se, i, a, u, e, !!a) !== !1)
          return g(), n.appendChild(Se), ft = n, S(), y(!0);
      } else if (E && kv(e, h, this)) {
        var A = lr(n, 0, s, !0);
        if (A === Se)
          return y(!1);
        if (a = A, u = ct(a), fo(ut, n, Se, i, a, u, e, !1) !== !1)
          return g(), n.insertBefore(Se, A), ft = n, S(), y(!0);
      } else if (a.parentNode === n) {
        u = ct(a);
        var w = 0, V, M = Se.parentNode !== n, C = !Mv(Se.animated && Se.toRect || i, a.animated && a.toRect || u, h), R = h ? "top" : "left", k = ts(a, "top", "top") || ts(Se, "top", "top"), $ = k ? k.scrollTop : void 0;
        _n !== a && (V = u[R], Dr = !1, uo = !C && s.invertSwap || M), w = $v(e, a, u, h, C ? 1 : s.swapThreshold, s.invertedSwapThreshold == null ? s.swapThreshold : s.invertedSwapThreshold, uo, _n === a);
        var B;
        if (w !== 0) {
          var z = pt(Se);
          do
            z -= w, B = ft.children[z];
          while (B && (Le(B, "display") === "none" || B === Ye));
        }
        if (w === 0 || B === a)
          return y(!1);
        _n = a, Ir = w;
        var K = a.nextElementSibling, Y = !1;
        Y = w === 1;
        var ae = fo(ut, n, Se, i, a, u, e, Y);
        if (ae !== !1)
          return (ae === 1 || ae === -1) && (Y = ae === 1), Ca = !0, setTimeout(jv, 30), g(), Y && !K ? n.appendChild(Se) : a.parentNode.insertBefore(Se, Y ? K : a), k && Cl(k, 0, $ - k.scrollTop), ft = Se.parentNode, V !== void 0 && !uo && (So = Math.abs(V - ct(a)[R])), S(), y(!0);
      }
      if (n.contains(Se))
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
    var n = this.el, a = this.options;
    if (Gt = pt(Se), An = pt(Se, a.draggable), jt("drop", this, {
      evt: e
    }), ft = Se && Se.parentNode, Gt = pt(Se), An = pt(Se, a.draggable), Be.eventCanceled) {
      this._nulling();
      return;
    }
    nr = !1, uo = !1, Dr = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Oa(this.cloneId), Oa(this._dragStartId), this.nativeDraggable && (Xe(document, "drop", this), Xe(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Or && Le(document.body, "user-select", ""), Le(Se, "transform", ""), e && (wr && (e.cancelable && e.preventDefault(), !a.dropBubble && e.stopPropagation()), Ye && Ye.parentNode && Ye.parentNode.removeChild(Ye), (ut === ft || wt && wt.lastPutMode !== "clone") && ht && ht.parentNode && ht.parentNode.removeChild(ht), Se && (this.nativeDraggable && Xe(Se, "dragend", this), va(Se), Se.style["will-change"] = "", wr && !nr && dt(Se, wt ? wt.options.ghostClass : this.options.ghostClass, !1), dt(Se, this.options.chosenClass, !1), It({
      sortable: this,
      name: "unchoose",
      toEl: ft,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: e
    }), ut !== ft ? (Gt >= 0 && (It({
      rootEl: ft,
      name: "add",
      toEl: ft,
      fromEl: ut,
      originalEvent: e
    }), It({
      sortable: this,
      name: "remove",
      toEl: ft,
      originalEvent: e
    }), It({
      rootEl: ft,
      name: "sort",
      toEl: ft,
      fromEl: ut,
      originalEvent: e
    }), It({
      sortable: this,
      name: "sort",
      toEl: ft,
      originalEvent: e
    })), wt && wt.save()) : Gt !== or && Gt >= 0 && (It({
      sortable: this,
      name: "update",
      toEl: ft,
      originalEvent: e
    }), It({
      sortable: this,
      name: "sort",
      toEl: ft,
      originalEvent: e
    })), Be.active && ((Gt == null || Gt === -1) && (Gt = or, An = Pr), It({
      sortable: this,
      name: "end",
      toEl: ft,
      originalEvent: e
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    jt("nulling", this), ut = Se = ft = Ye = kn = ht = xo = Cn = Nn = rn = wr = Gt = An = or = Pr = _n = Ir = wt = lo = Be.dragged = Be.ghost = Be.clone = Be.active = null, jo.forEach(function(e) {
      e.checked = !0;
    }), jo.length = fa = ha = 0;
  },
  handleEvent: function(e) {
    switch (e.type) {
      case "drop":
      case "dragend":
        this._onDrop(e);
        break;
      case "dragenter":
      case "dragover":
        Se && (this._onDragOver(e), Nv(e));
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
    for (var e = [], n, a = this.el.children, i = 0, u = a.length, r = this.options; i < u; i++)
      n = a[i], an(n, r.draggable, this.el, !1) && e.push(n.getAttribute(r.dataIdAttr) || Hv(n));
    return e;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(e, n) {
    var a = {}, i = this.el;
    this.toArray().forEach(function(u, r) {
      var s = i.children[r];
      an(s, this.options.draggable, i, !1) && (a[u] = s);
    }, this), n && this.captureAnimationState(), e.forEach(function(u) {
      a[u] && (i.removeChild(a[u]), i.appendChild(a[u]));
    }), n && this.animateAll();
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
  closest: function(e, n) {
    return an(e, n || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(e, n) {
    var a = this.options;
    if (n === void 0)
      return a[e];
    var i = Hr.modifyOption(this, e, n);
    typeof i < "u" ? a[e] = i : a[e] = n, e === "group" && Pl(a);
  },
  /**
   * Destroy
   */
  destroy: function() {
    jt("destroy", this);
    var e = this.el;
    e[Rt] = null, Xe(e, "mousedown", this._onTapStart), Xe(e, "touchstart", this._onTapStart), Xe(e, "pointerdown", this._onTapStart), this.nativeDraggable && (Xe(e, "dragover", this), Xe(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), No.splice(No.indexOf(this.el), 1), this.el = e = null;
  },
  _hideClone: function() {
    if (!Cn) {
      if (jt("hideClone", this), Be.eventCanceled) return;
      Le(ht, "display", "none"), this.options.removeCloneOnHide && ht.parentNode && ht.parentNode.removeChild(ht), Cn = !0;
    }
  },
  _showClone: function(e) {
    if (e.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Cn) {
      if (jt("showClone", this), Be.eventCanceled) return;
      Se.parentNode == ut && !this.options.group.revertClone ? ut.insertBefore(ht, Se) : kn ? ut.insertBefore(ht, kn) : ut.appendChild(ht), this.options.group.revertClone && this.animate(Se, ht), Le(ht, "display", ""), Cn = !1;
    }
  }
};
function Nv(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function fo(t, e, n, a, i, u, r, s) {
  var o, l = t[Rt], c = l.options.onMove, d;
  return window.CustomEvent && !Tn && !Br ? o = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (o = document.createEvent("Event"), o.initEvent("move", !0, !0)), o.to = e, o.from = t, o.dragged = n, o.draggedRect = a, o.related = i || e, o.relatedRect = u || ct(e), o.willInsertAfter = s, o.originalEvent = r, t.dispatchEvent(o), c && (d = c.call(l, o, r)), d;
}
function va(t) {
  t.draggable = !1;
}
function jv() {
  Ca = !1;
}
function kv(t, e, n) {
  var a = ct(lr(n.el, 0, n.options, !0)), i = 10;
  return e ? t.clientX < a.left - i || t.clientY < a.top && t.clientX < a.right : t.clientY < a.top - i || t.clientY < a.bottom && t.clientX < a.left;
}
function Vv(t, e, n) {
  var a = ct(ai(n.el, n.options.draggable)), i = 10;
  return e ? t.clientX > a.right + i || t.clientX <= a.right && t.clientY > a.bottom && t.clientX >= a.left : t.clientX > a.right && t.clientY > a.top || t.clientX <= a.right && t.clientY > a.bottom + i;
}
function $v(t, e, n, a, i, u, r, s) {
  var o = a ? t.clientY : t.clientX, l = a ? n.height : n.width, c = a ? n.top : n.left, d = a ? n.bottom : n.right, p = !1;
  if (!r) {
    if (s && So < l * i) {
      if (!Dr && (Ir === 1 ? o > c + l * u / 2 : o < d - l * u / 2) && (Dr = !0), Dr)
        p = !0;
      else if (Ir === 1 ? o < c + So : o > d - So)
        return -Ir;
    } else if (o > c + l * (1 - i) / 2 && o < d - l * (1 - i) / 2)
      return Bv(e);
  }
  return p = p || r, p && (o < c + l * u / 2 || o > d - l * u / 2) ? o > c + l / 2 ? 1 : -1 : 0;
}
function Bv(t) {
  return pt(Se) < pt(t) ? 1 : -1;
}
function Hv(t) {
  for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, a = 0; n--; )
    a += e.charCodeAt(n);
  return a.toString(36);
}
function zv(t) {
  jo.length = 0;
  for (var e = t.getElementsByTagName("input"), n = e.length; n--; ) {
    var a = e[n];
    a.checked && jo.push(a);
  }
}
function Eo(t) {
  return setTimeout(t, 0);
}
function Oa(t) {
  return clearTimeout(t);
}
Qo && Je(document, "touchmove", function(t) {
  (Be.active || nr) && t.cancelable && t.preventDefault();
});
Be.utils = {
  on: Je,
  off: Xe,
  css: Le,
  find: Tl,
  is: function(e, n) {
    return !!an(e, n, e, !1);
  },
  extend: Cv,
  throttle: Al,
  closest: an,
  toggleClass: dt,
  clone: ii,
  index: pt,
  nextTick: Eo,
  cancelNextTick: Oa,
  detectDirection: Rl,
  getChild: lr
};
Be.get = function(t) {
  return t[Rt];
};
Be.mount = function() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  e[0].constructor === Array && (e = e[0]), e.forEach(function(a) {
    if (!a.prototype || !a.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(a));
    a.utils && (Be.utils = dn(dn({}, Be.utils), a.utils)), Hr.mount(a);
  });
};
Be.create = function(t, e) {
  return new Be(t, e);
};
Be.version = Ev;
var gt = [], Tr, Ra, Pa = !1, ma, ga, ko, Ar;
function Gv() {
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
    dragStarted: function(n) {
      var a = n.originalEvent;
      this.sortable.nativeDraggable ? Je(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Je(document, "pointermove", this._handleFallbackAutoScroll) : a.touches ? Je(document, "touchmove", this._handleFallbackAutoScroll) : Je(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(n) {
      var a = n.originalEvent;
      !this.options.dragOverBubble && !a.rootEl && this._handleAutoScroll(a);
    },
    drop: function() {
      this.sortable.nativeDraggable ? Xe(document, "dragover", this._handleAutoScroll) : (Xe(document, "pointermove", this._handleFallbackAutoScroll), Xe(document, "touchmove", this._handleFallbackAutoScroll), Xe(document, "mousemove", this._handleFallbackAutoScroll)), ss(), wo(), Ov();
    },
    nulling: function() {
      ko = Ra = Tr = Pa = Ar = ma = ga = null, gt.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, a) {
      var i = this, u = (n.touches ? n.touches[0] : n).clientX, r = (n.touches ? n.touches[0] : n).clientY, s = document.elementFromPoint(u, r);
      if (ko = n, a || this.options.forceAutoScrollFallback || Br || Tn || Or) {
        ya(n, this.options, s, a);
        var o = Rn(s, !0);
        Pa && (!Ar || u !== ma || r !== ga) && (Ar && ss(), Ar = setInterval(function() {
          var l = Rn(document.elementFromPoint(u, r), !0);
          l !== o && (o = l, wo()), ya(n, i.options, l, a);
        }, 10), ma = u, ga = r);
      } else {
        if (!this.options.bubbleScroll || Rn(s, !0) === cn()) {
          wo();
          return;
        }
        ya(n, this.options, Rn(s, !1), !1);
      }
    }
  }, tn(t, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function wo() {
  gt.forEach(function(t) {
    clearInterval(t.pid);
  }), gt = [];
}
function ss() {
  clearInterval(Ar);
}
var ya = Al(function(t, e, n, a) {
  if (e.scroll) {
    var i = (t.touches ? t.touches[0] : t).clientX, u = (t.touches ? t.touches[0] : t).clientY, r = e.scrollSensitivity, s = e.scrollSpeed, o = cn(), l = !1, c;
    Ra !== n && (Ra = n, wo(), Tr = e.scroll, c = e.scrollFn, Tr === !0 && (Tr = Rn(n, !0)));
    var d = 0, p = Tr;
    do {
      var h = p, f = ct(h), m = f.top, v = f.bottom, g = f.left, y = f.right, S = f.width, E = f.height, A = void 0, w = void 0, V = h.scrollWidth, M = h.scrollHeight, C = Le(h), R = h.scrollLeft, k = h.scrollTop;
      h === o ? (A = S < V && (C.overflowX === "auto" || C.overflowX === "scroll" || C.overflowX === "visible"), w = E < M && (C.overflowY === "auto" || C.overflowY === "scroll" || C.overflowY === "visible")) : (A = S < V && (C.overflowX === "auto" || C.overflowX === "scroll"), w = E < M && (C.overflowY === "auto" || C.overflowY === "scroll"));
      var $ = A && (Math.abs(y - i) <= r && R + S < V) - (Math.abs(g - i) <= r && !!R), B = w && (Math.abs(v - u) <= r && k + E < M) - (Math.abs(m - u) <= r && !!k);
      if (!gt[d])
        for (var z = 0; z <= d; z++)
          gt[z] || (gt[z] = {});
      (gt[d].vx != $ || gt[d].vy != B || gt[d].el !== h) && (gt[d].el = h, gt[d].vx = $, gt[d].vy = B, clearInterval(gt[d].pid), ($ != 0 || B != 0) && (l = !0, gt[d].pid = setInterval((function() {
        a && this.layer === 0 && Be.active._onTouchMove(ko);
        var K = gt[this.layer].vy ? gt[this.layer].vy * s : 0, Y = gt[this.layer].vx ? gt[this.layer].vx * s : 0;
        typeof c == "function" && c.call(Be.dragged.parentNode[Rt], Y, K, t, ko, gt[this.layer].el) !== "continue" || Cl(gt[this.layer].el, Y, K);
      }).bind({
        layer: d
      }), 24))), d++;
    } while (e.bubbleScroll && p !== o && (p = Rn(p, !1)));
    Pa = l;
  }
}, 30), Fl = function(e) {
  var n = e.originalEvent, a = e.putSortable, i = e.dragEl, u = e.activeSortable, r = e.dispatchSortableEvent, s = e.hideGhostForTarget, o = e.unhideGhostForTarget;
  if (n) {
    var l = a || u;
    s();
    var c = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n, d = document.elementFromPoint(c.clientX, c.clientY);
    o(), l && !l.el.contains(d) && (r("spill"), this.onSpill({
      dragEl: i,
      putSortable: a
    }));
  }
};
function si() {
}
si.prototype = {
  startIndex: null,
  dragStart: function(e) {
    var n = e.oldDraggableIndex;
    this.startIndex = n;
  },
  onSpill: function(e) {
    var n = e.dragEl, a = e.putSortable;
    this.sortable.captureAnimationState(), a && a.captureAnimationState();
    var i = lr(this.sortable.el, this.startIndex, this.options);
    i ? this.sortable.el.insertBefore(n, i) : this.sortable.el.appendChild(n), this.sortable.animateAll(), a && a.animateAll();
  },
  drop: Fl
};
tn(si, {
  pluginName: "revertOnSpill"
});
function li() {
}
li.prototype = {
  onSpill: function(e) {
    var n = e.dragEl, a = e.putSortable, i = a || this.sortable;
    i.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), i.animateAll();
  },
  drop: Fl
};
tn(li, {
  pluginName: "removeOnSpill"
});
var Jt;
function Wv() {
  function t() {
    this.defaults = {
      swapClass: "sortable-swap-highlight"
    };
  }
  return t.prototype = {
    dragStart: function(n) {
      var a = n.dragEl;
      Jt = a;
    },
    dragOverValid: function(n) {
      var a = n.completed, i = n.target, u = n.onMove, r = n.activeSortable, s = n.changed, o = n.cancel;
      if (r.options.swap) {
        var l = this.sortable.el, c = this.options;
        if (i && i !== l) {
          var d = Jt;
          u(i) !== !1 ? (dt(i, c.swapClass, !0), Jt = i) : Jt = null, d && d !== Jt && dt(d, c.swapClass, !1);
        }
        s(), a(!0), o();
      }
    },
    drop: function(n) {
      var a = n.activeSortable, i = n.putSortable, u = n.dragEl, r = i || this.sortable, s = this.options;
      Jt && dt(Jt, s.swapClass, !1), Jt && (s.swap || i && i.options.swap) && u !== Jt && (r.captureAnimationState(), r !== a && a.captureAnimationState(), Yv(u, Jt), r.animateAll(), r !== a && a.animateAll());
    },
    nulling: function() {
      Jt = null;
    }
  }, tn(t, {
    pluginName: "swap",
    eventProperties: function() {
      return {
        swapItem: Jt
      };
    }
  });
}
function Yv(t, e) {
  var n = t.parentNode, a = e.parentNode, i, u;
  !n || !a || n.isEqualNode(e) || a.isEqualNode(t) || (i = pt(t), u = pt(e), n.isEqualNode(a) && i < u && u++, n.insertBefore(e, n.children[i]), a.insertBefore(t, a.children[u]));
}
var We = [], Ht = [], gr, on, yr = !1, kt = !1, er = !1, it, br, ho;
function Kv() {
  function t(e) {
    for (var n in this)
      n.charAt(0) === "_" && typeof this[n] == "function" && (this[n] = this[n].bind(this));
    e.options.supportPointer ? Je(document, "pointerup", this._deselectMultiDrag) : (Je(document, "mouseup", this._deselectMultiDrag), Je(document, "touchend", this._deselectMultiDrag)), Je(document, "keydown", this._checkKeyDown), Je(document, "keyup", this._checkKeyUp), this.defaults = {
      selectedClass: "sortable-selected",
      multiDragKey: null,
      setData: function(i, u) {
        var r = "";
        We.length && on === e ? We.forEach(function(s, o) {
          r += (o ? ", " : "") + s.textContent;
        }) : r = u.textContent, i.setData("Text", r);
      }
    };
  }
  return t.prototype = {
    multiDragKeyDown: !1,
    isMultiDrag: !1,
    delayStartGlobal: function(n) {
      var a = n.dragEl;
      it = a;
    },
    delayEnded: function() {
      this.isMultiDrag = ~We.indexOf(it);
    },
    setupClone: function(n) {
      var a = n.sortable, i = n.cancel;
      if (this.isMultiDrag) {
        for (var u = 0; u < We.length; u++)
          Ht.push(ii(We[u])), Ht[u].sortableIndex = We[u].sortableIndex, Ht[u].draggable = !1, Ht[u].style["will-change"] = "", dt(Ht[u], this.options.selectedClass, !1), We[u] === it && dt(Ht[u], this.options.chosenClass, !1);
        a._hideClone(), i();
      }
    },
    clone: function(n) {
      var a = n.sortable, i = n.rootEl, u = n.dispatchSortableEvent, r = n.cancel;
      this.isMultiDrag && (this.options.removeCloneOnHide || We.length && on === a && (ls(!0, i), u("clone"), r()));
    },
    showClone: function(n) {
      var a = n.cloneNowShown, i = n.rootEl, u = n.cancel;
      this.isMultiDrag && (ls(!1, i), Ht.forEach(function(r) {
        Le(r, "display", "");
      }), a(), ho = !1, u());
    },
    hideClone: function(n) {
      var a = this;
      n.sortable;
      var i = n.cloneNowHidden, u = n.cancel;
      this.isMultiDrag && (Ht.forEach(function(r) {
        Le(r, "display", "none"), a.options.removeCloneOnHide && r.parentNode && r.parentNode.removeChild(r);
      }), i(), ho = !0, u());
    },
    dragStartGlobal: function(n) {
      n.sortable, !this.isMultiDrag && on && on.multiDrag._deselectMultiDrag(), We.forEach(function(a) {
        a.sortableIndex = pt(a);
      }), We = We.sort(function(a, i) {
        return a.sortableIndex - i.sortableIndex;
      }), er = !0;
    },
    dragStarted: function(n) {
      var a = this, i = n.sortable;
      if (this.isMultiDrag) {
        if (this.options.sort && (i.captureAnimationState(), this.options.animation)) {
          We.forEach(function(r) {
            r !== it && Le(r, "position", "absolute");
          });
          var u = ct(it, !1, !0, !0);
          We.forEach(function(r) {
            r !== it && rs(r, u);
          }), kt = !0, yr = !0;
        }
        i.animateAll(function() {
          kt = !1, yr = !1, a.options.animation && We.forEach(function(r) {
            ca(r);
          }), a.options.sort && po();
        });
      }
    },
    dragOver: function(n) {
      var a = n.target, i = n.completed, u = n.cancel;
      kt && ~We.indexOf(a) && (i(!1), u());
    },
    revert: function(n) {
      var a = n.fromSortable, i = n.rootEl, u = n.sortable, r = n.dragRect;
      We.length > 1 && (We.forEach(function(s) {
        u.addAnimationState({
          target: s,
          rect: kt ? ct(s) : r
        }), ca(s), s.fromRect = r, a.removeAnimationState(s);
      }), kt = !1, Xv(!this.options.removeCloneOnHide, i));
    },
    dragOverCompleted: function(n) {
      var a = n.sortable, i = n.isOwner, u = n.insertion, r = n.activeSortable, s = n.parentEl, o = n.putSortable, l = this.options;
      if (u) {
        if (i && r._hideClone(), yr = !1, l.animation && We.length > 1 && (kt || !i && !r.options.sort && !o)) {
          var c = ct(it, !1, !0, !0);
          We.forEach(function(p) {
            p !== it && (rs(p, c), s.appendChild(p));
          }), kt = !0;
        }
        if (!i)
          if (kt || po(), We.length > 1) {
            var d = ho;
            r._showClone(a), r.options.animation && !ho && d && Ht.forEach(function(p) {
              r.addAnimationState({
                target: p,
                rect: br
              }), p.fromRect = br, p.thisAnimationDuration = null;
            });
          } else
            r._showClone(a);
      }
    },
    dragOverAnimationCapture: function(n) {
      var a = n.dragRect, i = n.isOwner, u = n.activeSortable;
      if (We.forEach(function(s) {
        s.thisAnimationDuration = null;
      }), u.options.animation && !i && u.multiDrag.isMultiDrag) {
        br = tn({}, a);
        var r = Gn(it, !0);
        br.top -= r.f, br.left -= r.e;
      }
    },
    dragOverAnimationComplete: function() {
      kt && (kt = !1, po());
    },
    drop: function(n) {
      var a = n.originalEvent, i = n.rootEl, u = n.parentEl, r = n.sortable, s = n.dispatchSortableEvent, o = n.oldIndex, l = n.putSortable, c = l || this.sortable;
      if (a) {
        var d = this.options, p = u.children;
        if (!er)
          if (d.multiDragKey && !this.multiDragKeyDown && this._deselectMultiDrag(), dt(it, d.selectedClass, !~We.indexOf(it)), ~We.indexOf(it))
            We.splice(We.indexOf(it), 1), gr = null, Er({
              sortable: r,
              rootEl: i,
              name: "deselect",
              targetEl: it
            });
          else {
            if (We.push(it), Er({
              sortable: r,
              rootEl: i,
              name: "select",
              targetEl: it
            }), a.shiftKey && gr && r.el.contains(gr)) {
              var h = pt(gr), f = pt(it);
              if (~h && ~f && h !== f) {
                var m, v;
                for (f > h ? (v = h, m = f) : (v = f, m = h + 1); v < m; v++)
                  ~We.indexOf(p[v]) || (dt(p[v], d.selectedClass, !0), We.push(p[v]), Er({
                    sortable: r,
                    rootEl: i,
                    name: "select",
                    targetEl: p[v]
                  }));
              }
            } else
              gr = it;
            on = c;
          }
        if (er && this.isMultiDrag) {
          if (kt = !1, (u[Rt].options.sort || u !== i) && We.length > 1) {
            var g = ct(it), y = pt(it, ":not(." + this.options.selectedClass + ")");
            if (!yr && d.animation && (it.thisAnimationDuration = null), c.captureAnimationState(), !yr && (d.animation && (it.fromRect = g, We.forEach(function(E) {
              if (E.thisAnimationDuration = null, E !== it) {
                var A = kt ? ct(E) : g;
                E.fromRect = A, c.addAnimationState({
                  target: E,
                  rect: A
                });
              }
            })), po(), We.forEach(function(E) {
              p[y] ? u.insertBefore(E, p[y]) : u.appendChild(E), y++;
            }), o === pt(it))) {
              var S = !1;
              We.forEach(function(E) {
                if (E.sortableIndex !== pt(E)) {
                  S = !0;
                  return;
                }
              }), S && s("update");
            }
            We.forEach(function(E) {
              ca(E);
            }), c.animateAll();
          }
          on = c;
        }
        (i === u || l && l.lastPutMode !== "clone") && Ht.forEach(function(E) {
          E.parentNode && E.parentNode.removeChild(E);
        });
      }
    },
    nullingGlobal: function() {
      this.isMultiDrag = er = !1, Ht.length = 0;
    },
    destroyGlobal: function() {
      this._deselectMultiDrag(), Xe(document, "pointerup", this._deselectMultiDrag), Xe(document, "mouseup", this._deselectMultiDrag), Xe(document, "touchend", this._deselectMultiDrag), Xe(document, "keydown", this._checkKeyDown), Xe(document, "keyup", this._checkKeyUp);
    },
    _deselectMultiDrag: function(n) {
      if (!(typeof er < "u" && er) && on === this.sortable && !(n && an(n.target, this.options.draggable, this.sortable.el, !1)) && !(n && n.button !== 0))
        for (; We.length; ) {
          var a = We[0];
          dt(a, this.options.selectedClass, !1), We.shift(), Er({
            sortable: this.sortable,
            rootEl: this.sortable.el,
            name: "deselect",
            targetEl: a
          });
        }
    },
    _checkKeyDown: function(n) {
      n.key === this.options.multiDragKey && (this.multiDragKeyDown = !0);
    },
    _checkKeyUp: function(n) {
      n.key === this.options.multiDragKey && (this.multiDragKeyDown = !1);
    }
  }, tn(t, {
    // Static methods & properties
    pluginName: "multiDrag",
    utils: {
      /**
       * Selects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be selected
       */
      select: function(n) {
        var a = n.parentNode[Rt];
        !a || !a.options.multiDrag || ~We.indexOf(n) || (on && on !== a && (on.multiDrag._deselectMultiDrag(), on = a), dt(n, a.options.selectedClass, !0), We.push(n));
      },
      /**
       * Deselects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be deselected
       */
      deselect: function(n) {
        var a = n.parentNode[Rt], i = We.indexOf(n);
        !a || !a.options.multiDrag || !~i || (dt(n, a.options.selectedClass, !1), We.splice(i, 1));
      }
    },
    eventProperties: function() {
      var n = this, a = [], i = [];
      return We.forEach(function(u) {
        a.push({
          multiDragElement: u,
          index: u.sortableIndex
        });
        var r;
        kt && u !== it ? r = -1 : kt ? r = pt(u, ":not(." + n.options.selectedClass + ")") : r = pt(u), i.push({
          multiDragElement: u,
          index: r
        });
      }), {
        items: gv(We),
        clones: [].concat(Ht),
        oldIndicies: a,
        newIndicies: i
      };
    },
    optionListeners: {
      multiDragKey: function(n) {
        return n = n.toLowerCase(), n === "ctrl" ? n = "Control" : n.length > 1 && (n = n.charAt(0).toUpperCase() + n.substr(1)), n;
      }
    }
  });
}
function Xv(t, e) {
  We.forEach(function(n, a) {
    var i = e.children[n.sortableIndex + (t ? Number(a) : 0)];
    i ? e.insertBefore(n, i) : e.appendChild(n);
  });
}
function ls(t, e) {
  Ht.forEach(function(n, a) {
    var i = e.children[n.sortableIndex + (t ? Number(a) : 0)];
    i ? e.insertBefore(n, i) : e.appendChild(n);
  });
}
function po() {
  We.forEach(function(t) {
    t !== it && t.parentNode && t.parentNode.removeChild(t);
  });
}
Be.mount(new Gv());
Be.mount(li, si);
const Jv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MultiDrag: Kv,
  Sortable: Be,
  Swap: Wv,
  default: Be
}, Symbol.toStringTag, { value: "Module" })), Qv = /* @__PURE__ */ Vs(Jv);
var Zv = yo.exports, us;
function qv() {
  return us || (us = 1, (function(t, e) {
    (function(a, i) {
      t.exports = i(hv, Qv);
    })(typeof self < "u" ? self : Zv, function(n, a) {
      return (
        /******/
        (function(i) {
          var u = {};
          function r(s) {
            if (u[s])
              return u[s].exports;
            var o = u[s] = {
              /******/
              i: s,
              /******/
              l: !1,
              /******/
              exports: {}
              /******/
            };
            return i[s].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
          }
          return r.m = i, r.c = u, r.d = function(s, o, l) {
            r.o(s, o) || Object.defineProperty(s, o, { enumerable: !0, get: l });
          }, r.r = function(s) {
            typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s, "__esModule", { value: !0 });
          }, r.t = function(s, o) {
            if (o & 1 && (s = r(s)), o & 8 || o & 4 && typeof s == "object" && s && s.__esModule) return s;
            var l = /* @__PURE__ */ Object.create(null);
            if (r.r(l), Object.defineProperty(l, "default", { enumerable: !0, value: s }), o & 2 && typeof s != "string") for (var c in s) r.d(l, c, (function(d) {
              return s[d];
            }).bind(null, c));
            return l;
          }, r.n = function(s) {
            var o = s && s.__esModule ? (
              /******/
              function() {
                return s.default;
              }
            ) : (
              /******/
              function() {
                return s;
              }
            );
            return r.d(o, "a", o), o;
          }, r.o = function(s, o) {
            return Object.prototype.hasOwnProperty.call(s, o);
          }, r.p = "", r(r.s = "fb15");
        })({
          /***/
          "00ee": (
            /***/
            (function(i, u, r) {
              var s = r("b622"), o = s("toStringTag"), l = {};
              l[o] = "z", i.exports = String(l) === "[object z]";
            })
          ),
          /***/
          "0366": (
            /***/
            (function(i, u, r) {
              var s = r("1c0b");
              i.exports = function(o, l, c) {
                if (s(o), l === void 0) return o;
                switch (c) {
                  case 0:
                    return function() {
                      return o.call(l);
                    };
                  case 1:
                    return function(d) {
                      return o.call(l, d);
                    };
                  case 2:
                    return function(d, p) {
                      return o.call(l, d, p);
                    };
                  case 3:
                    return function(d, p, h) {
                      return o.call(l, d, p, h);
                    };
                }
                return function() {
                  return o.apply(l, arguments);
                };
              };
            })
          ),
          /***/
          "057f": (
            /***/
            (function(i, u, r) {
              var s = r("fc6a"), o = r("241c").f, l = {}.toString, c = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], d = function(p) {
                try {
                  return o(p);
                } catch {
                  return c.slice();
                }
              };
              i.exports.f = function(h) {
                return c && l.call(h) == "[object Window]" ? d(h) : o(s(h));
              };
            })
          ),
          /***/
          "06cf": (
            /***/
            (function(i, u, r) {
              var s = r("83ab"), o = r("d1e7"), l = r("5c6c"), c = r("fc6a"), d = r("c04e"), p = r("5135"), h = r("0cfb"), f = Object.getOwnPropertyDescriptor;
              u.f = s ? f : function(v, g) {
                if (v = c(v), g = d(g, !0), h) try {
                  return f(v, g);
                } catch {
                }
                if (p(v, g)) return l(!o.f.call(v, g), v[g]);
              };
            })
          ),
          /***/
          "0cfb": (
            /***/
            (function(i, u, r) {
              var s = r("83ab"), o = r("d039"), l = r("cc12");
              i.exports = !s && !o(function() {
                return Object.defineProperty(l("div"), "a", {
                  get: function() {
                    return 7;
                  }
                }).a != 7;
              });
            })
          ),
          /***/
          "13d5": (
            /***/
            (function(i, u, r) {
              var s = r("23e7"), o = r("d58f").left, l = r("a640"), c = r("ae40"), d = l("reduce"), p = c("reduce", { 1: 0 });
              s({ target: "Array", proto: !0, forced: !d || !p }, {
                reduce: function(f) {
                  return o(this, f, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
                }
              });
            })
          ),
          /***/
          "14c3": (
            /***/
            (function(i, u, r) {
              var s = r("c6b6"), o = r("9263");
              i.exports = function(l, c) {
                var d = l.exec;
                if (typeof d == "function") {
                  var p = d.call(l, c);
                  if (typeof p != "object")
                    throw TypeError("RegExp exec method returned something other than an Object or null");
                  return p;
                }
                if (s(l) !== "RegExp")
                  throw TypeError("RegExp#exec called on incompatible receiver");
                return o.call(l, c);
              };
            })
          ),
          /***/
          "159b": (
            /***/
            (function(i, u, r) {
              var s = r("da84"), o = r("fdbc"), l = r("17c2"), c = r("9112");
              for (var d in o) {
                var p = s[d], h = p && p.prototype;
                if (h && h.forEach !== l) try {
                  c(h, "forEach", l);
                } catch {
                  h.forEach = l;
                }
              }
            })
          ),
          /***/
          "17c2": (
            /***/
            (function(i, u, r) {
              var s = r("b727").forEach, o = r("a640"), l = r("ae40"), c = o("forEach"), d = l("forEach");
              i.exports = !c || !d ? function(h) {
                return s(this, h, arguments.length > 1 ? arguments[1] : void 0);
              } : [].forEach;
            })
          ),
          /***/
          "1be4": (
            /***/
            (function(i, u, r) {
              var s = r("d066");
              i.exports = s("document", "documentElement");
            })
          ),
          /***/
          "1c0b": (
            /***/
            (function(i, u) {
              i.exports = function(r) {
                if (typeof r != "function")
                  throw TypeError(String(r) + " is not a function");
                return r;
              };
            })
          ),
          /***/
          "1c7e": (
            /***/
            (function(i, u, r) {
              var s = r("b622"), o = s("iterator"), l = !1;
              try {
                var c = 0, d = {
                  next: function() {
                    return { done: !!c++ };
                  },
                  return: function() {
                    l = !0;
                  }
                };
                d[o] = function() {
                  return this;
                }, Array.from(d, function() {
                  throw 2;
                });
              } catch {
              }
              i.exports = function(p, h) {
                if (!h && !l) return !1;
                var f = !1;
                try {
                  var m = {};
                  m[o] = function() {
                    return {
                      next: function() {
                        return { done: f = !0 };
                      }
                    };
                  }, p(m);
                } catch {
                }
                return f;
              };
            })
          ),
          /***/
          "1d80": (
            /***/
            (function(i, u) {
              i.exports = function(r) {
                if (r == null) throw TypeError("Can't call method on " + r);
                return r;
              };
            })
          ),
          /***/
          "1dde": (
            /***/
            (function(i, u, r) {
              var s = r("d039"), o = r("b622"), l = r("2d00"), c = o("species");
              i.exports = function(d) {
                return l >= 51 || !s(function() {
                  var p = [], h = p.constructor = {};
                  return h[c] = function() {
                    return { foo: 1 };
                  }, p[d](Boolean).foo !== 1;
                });
              };
            })
          ),
          /***/
          "23cb": (
            /***/
            (function(i, u, r) {
              var s = r("a691"), o = Math.max, l = Math.min;
              i.exports = function(c, d) {
                var p = s(c);
                return p < 0 ? o(p + d, 0) : l(p, d);
              };
            })
          ),
          /***/
          "23e7": (
            /***/
            (function(i, u, r) {
              var s = r("da84"), o = r("06cf").f, l = r("9112"), c = r("6eeb"), d = r("ce4e"), p = r("e893"), h = r("94ca");
              i.exports = function(f, m) {
                var v = f.target, g = f.global, y = f.stat, S, E, A, w, V, M;
                if (g ? E = s : y ? E = s[v] || d(v, {}) : E = (s[v] || {}).prototype, E) for (A in m) {
                  if (V = m[A], f.noTargetGet ? (M = o(E, A), w = M && M.value) : w = E[A], S = h(g ? A : v + (y ? "." : "#") + A, f.forced), !S && w !== void 0) {
                    if (typeof V == typeof w) continue;
                    p(V, w);
                  }
                  (f.sham || w && w.sham) && l(V, "sham", !0), c(E, A, V, f);
                }
              };
            })
          ),
          /***/
          "241c": (
            /***/
            (function(i, u, r) {
              var s = r("ca84"), o = r("7839"), l = o.concat("length", "prototype");
              u.f = Object.getOwnPropertyNames || function(d) {
                return s(d, l);
              };
            })
          ),
          /***/
          "25f0": (
            /***/
            (function(i, u, r) {
              var s = r("6eeb"), o = r("825a"), l = r("d039"), c = r("ad6d"), d = "toString", p = RegExp.prototype, h = p[d], f = l(function() {
                return h.call({ source: "a", flags: "b" }) != "/a/b";
              }), m = h.name != d;
              (f || m) && s(RegExp.prototype, d, function() {
                var g = o(this), y = String(g.source), S = g.flags, E = String(S === void 0 && g instanceof RegExp && !("flags" in p) ? c.call(g) : S);
                return "/" + y + "/" + E;
              }, { unsafe: !0 });
            })
          ),
          /***/
          "2ca0": (
            /***/
            (function(i, u, r) {
              var s = r("23e7"), o = r("06cf").f, l = r("50c4"), c = r("5a34"), d = r("1d80"), p = r("ab13"), h = r("c430"), f = "".startsWith, m = Math.min, v = p("startsWith"), g = !h && !v && !!(function() {
                var y = o(String.prototype, "startsWith");
                return y && !y.writable;
              })();
              s({ target: "String", proto: !0, forced: !g && !v }, {
                startsWith: function(S) {
                  var E = String(d(this));
                  c(S);
                  var A = l(m(arguments.length > 1 ? arguments[1] : void 0, E.length)), w = String(S);
                  return f ? f.call(E, w, A) : E.slice(A, A + w.length) === w;
                }
              });
            })
          ),
          /***/
          "2d00": (
            /***/
            (function(i, u, r) {
              var s = r("da84"), o = r("342f"), l = s.process, c = l && l.versions, d = c && c.v8, p, h;
              d ? (p = d.split("."), h = p[0] + p[1]) : o && (p = o.match(/Edge\/(\d+)/), (!p || p[1] >= 74) && (p = o.match(/Chrome\/(\d+)/), p && (h = p[1]))), i.exports = h && +h;
            })
          ),
          /***/
          "342f": (
            /***/
            (function(i, u, r) {
              var s = r("d066");
              i.exports = s("navigator", "userAgent") || "";
            })
          ),
          /***/
          "35a1": (
            /***/
            (function(i, u, r) {
              var s = r("f5df"), o = r("3f8c"), l = r("b622"), c = l("iterator");
              i.exports = function(d) {
                if (d != null) return d[c] || d["@@iterator"] || o[s(d)];
              };
            })
          ),
          /***/
          "37e8": (
            /***/
            (function(i, u, r) {
              var s = r("83ab"), o = r("9bf2"), l = r("825a"), c = r("df75");
              i.exports = s ? Object.defineProperties : function(p, h) {
                l(p);
                for (var f = c(h), m = f.length, v = 0, g; m > v; ) o.f(p, g = f[v++], h[g]);
                return p;
              };
            })
          ),
          /***/
          "3bbe": (
            /***/
            (function(i, u, r) {
              var s = r("861d");
              i.exports = function(o) {
                if (!s(o) && o !== null)
                  throw TypeError("Can't set " + String(o) + " as a prototype");
                return o;
              };
            })
          ),
          /***/
          "3ca3": (
            /***/
            (function(i, u, r) {
              var s = r("6547").charAt, o = r("69f3"), l = r("7dd0"), c = "String Iterator", d = o.set, p = o.getterFor(c);
              l(String, "String", function(h) {
                d(this, {
                  type: c,
                  string: String(h),
                  index: 0
                });
              }, function() {
                var f = p(this), m = f.string, v = f.index, g;
                return v >= m.length ? { value: void 0, done: !0 } : (g = s(m, v), f.index += g.length, { value: g, done: !1 });
              });
            })
          ),
          /***/
          "3f8c": (
            /***/
            (function(i, u) {
              i.exports = {};
            })
          ),
          /***/
          4160: (
            /***/
            (function(i, u, r) {
              var s = r("23e7"), o = r("17c2");
              s({ target: "Array", proto: !0, forced: [].forEach != o }, {
                forEach: o
              });
            })
          ),
          /***/
          "428f": (
            /***/
            (function(i, u, r) {
              var s = r("da84");
              i.exports = s;
            })
          ),
          /***/
          "44ad": (
            /***/
            (function(i, u, r) {
              var s = r("d039"), o = r("c6b6"), l = "".split;
              i.exports = s(function() {
                return !Object("z").propertyIsEnumerable(0);
              }) ? function(c) {
                return o(c) == "String" ? l.call(c, "") : Object(c);
              } : Object;
            })
          ),
          /***/
          "44d2": (
            /***/
            (function(i, u, r) {
              var s = r("b622"), o = r("7c73"), l = r("9bf2"), c = s("unscopables"), d = Array.prototype;
              d[c] == null && l.f(d, c, {
                configurable: !0,
                value: o(null)
              }), i.exports = function(p) {
                d[c][p] = !0;
              };
            })
          ),
          /***/
          "44e7": (
            /***/
            (function(i, u, r) {
              var s = r("861d"), o = r("c6b6"), l = r("b622"), c = l("match");
              i.exports = function(d) {
                var p;
                return s(d) && ((p = d[c]) !== void 0 ? !!p : o(d) == "RegExp");
              };
            })
          ),
          /***/
          4930: (
            /***/
            (function(i, u, r) {
              var s = r("d039");
              i.exports = !!Object.getOwnPropertySymbols && !s(function() {
                return !String(Symbol());
              });
            })
          ),
          /***/
          "4d64": (
            /***/
            (function(i, u, r) {
              var s = r("fc6a"), o = r("50c4"), l = r("23cb"), c = function(d) {
                return function(p, h, f) {
                  var m = s(p), v = o(m.length), g = l(f, v), y;
                  if (d && h != h) {
                    for (; v > g; )
                      if (y = m[g++], y != y) return !0;
                  } else for (; v > g; g++)
                    if ((d || g in m) && m[g] === h) return d || g || 0;
                  return !d && -1;
                };
              };
              i.exports = {
                // `Array.prototype.includes` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.includes
                includes: c(!0),
                // `Array.prototype.indexOf` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
                indexOf: c(!1)
              };
            })
          ),
          /***/
          "4de4": (
            /***/
            (function(i, u, r) {
              var s = r("23e7"), o = r("b727").filter, l = r("1dde"), c = r("ae40"), d = l("filter"), p = c("filter");
              s({ target: "Array", proto: !0, forced: !d || !p }, {
                filter: function(f) {
                  return o(this, f, arguments.length > 1 ? arguments[1] : void 0);
                }
              });
            })
          ),
          /***/
          "4df4": (
            /***/
            (function(i, u, r) {
              var s = r("0366"), o = r("7b0b"), l = r("9bdd"), c = r("e95a"), d = r("50c4"), p = r("8418"), h = r("35a1");
              i.exports = function(m) {
                var v = o(m), g = typeof this == "function" ? this : Array, y = arguments.length, S = y > 1 ? arguments[1] : void 0, E = S !== void 0, A = h(v), w = 0, V, M, C, R, k, $;
                if (E && (S = s(S, y > 2 ? arguments[2] : void 0, 2)), A != null && !(g == Array && c(A)))
                  for (R = A.call(v), k = R.next, M = new g(); !(C = k.call(R)).done; w++)
                    $ = E ? l(R, S, [C.value, w], !0) : C.value, p(M, w, $);
                else
                  for (V = d(v.length), M = new g(V); V > w; w++)
                    $ = E ? S(v[w], w) : v[w], p(M, w, $);
                return M.length = w, M;
              };
            })
          ),
          /***/
          "4fad": (
            /***/
            (function(i, u, r) {
              var s = r("23e7"), o = r("6f53").entries;
              s({ target: "Object", stat: !0 }, {
                entries: function(c) {
                  return o(c);
                }
              });
            })
          ),
          /***/
          "50c4": (
            /***/
            (function(i, u, r) {
              var s = r("a691"), o = Math.min;
              i.exports = function(l) {
                return l > 0 ? o(s(l), 9007199254740991) : 0;
              };
            })
          ),
          /***/
          5135: (
            /***/
            (function(i, u) {
              var r = {}.hasOwnProperty;
              i.exports = function(s, o) {
                return r.call(s, o);
              };
            })
          ),
          /***/
          5319: (
            /***/
            (function(i, u, r) {
              var s = r("d784"), o = r("825a"), l = r("7b0b"), c = r("50c4"), d = r("a691"), p = r("1d80"), h = r("8aa5"), f = r("14c3"), m = Math.max, v = Math.min, g = Math.floor, y = /\$([$&'`]|\d\d?|<[^>]*>)/g, S = /\$([$&'`]|\d\d?)/g, E = function(A) {
                return A === void 0 ? A : String(A);
              };
              s("replace", 2, function(A, w, V, M) {
                var C = M.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE, R = M.REPLACE_KEEPS_$0, k = C ? "$" : "$0";
                return [
                  // `String.prototype.replace` method
                  // https://tc39.github.io/ecma262/#sec-string.prototype.replace
                  function(z, K) {
                    var Y = p(this), ae = z == null ? void 0 : z[A];
                    return ae !== void 0 ? ae.call(z, Y, K) : w.call(String(Y), z, K);
                  },
                  // `RegExp.prototype[@@replace]` method
                  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
                  function(B, z) {
                    if (!C && R || typeof z == "string" && z.indexOf(k) === -1) {
                      var K = V(w, B, this, z);
                      if (K.done) return K.value;
                    }
                    var Y = o(B), ae = String(this), J = typeof z == "function";
                    J || (z = String(z));
                    var he = Y.global;
                    if (he) {
                      var ce = Y.unicode;
                      Y.lastIndex = 0;
                    }
                    for (var ye = []; ; ) {
                      var Ce = f(Y, ae);
                      if (Ce === null || (ye.push(Ce), !he)) break;
                      var Ee = String(Ce[0]);
                      Ee === "" && (Y.lastIndex = h(ae, c(Y.lastIndex), ce));
                    }
                    for (var Ue = "", Ne = 0, be = 0; be < ye.length; be++) {
                      Ce = ye[be];
                      for (var xe = String(Ce[0]), P = m(v(d(Ce.index), ae.length), 0), D = [], T = 1; T < Ce.length; T++) D.push(E(Ce[T]));
                      var L = Ce.groups;
                      if (J) {
                        var b = [xe].concat(D, P, ae);
                        L !== void 0 && b.push(L);
                        var x = String(z.apply(void 0, b));
                      } else
                        x = $(xe, ae, P, D, L, z);
                      P >= Ne && (Ue += ae.slice(Ne, P) + x, Ne = P + xe.length);
                    }
                    return Ue + ae.slice(Ne);
                  }
                ];
                function $(B, z, K, Y, ae, J) {
                  var he = K + B.length, ce = Y.length, ye = S;
                  return ae !== void 0 && (ae = l(ae), ye = y), w.call(J, ye, function(Ce, Ee) {
                    var Ue;
                    switch (Ee.charAt(0)) {
                      case "$":
                        return "$";
                      case "&":
                        return B;
                      case "`":
                        return z.slice(0, K);
                      case "'":
                        return z.slice(he);
                      case "<":
                        Ue = ae[Ee.slice(1, -1)];
                        break;
                      default:
                        var Ne = +Ee;
                        if (Ne === 0) return Ce;
                        if (Ne > ce) {
                          var be = g(Ne / 10);
                          return be === 0 ? Ce : be <= ce ? Y[be - 1] === void 0 ? Ee.charAt(1) : Y[be - 1] + Ee.charAt(1) : Ce;
                        }
                        Ue = Y[Ne - 1];
                    }
                    return Ue === void 0 ? "" : Ue;
                  });
                }
              });
            })
          ),
          /***/
          5692: (
            /***/
            (function(i, u, r) {
              var s = r("c430"), o = r("c6cd");
              (i.exports = function(l, c) {
                return o[l] || (o[l] = c !== void 0 ? c : {});
              })("versions", []).push({
                version: "3.6.5",
                mode: s ? "pure" : "global",
                copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
              });
            })
          ),
          /***/
          "56ef": (
            /***/
            (function(i, u, r) {
              var s = r("d066"), o = r("241c"), l = r("7418"), c = r("825a");
              i.exports = s("Reflect", "ownKeys") || function(p) {
                var h = o.f(c(p)), f = l.f;
                return f ? h.concat(f(p)) : h;
              };
            })
          ),
          /***/
          "5a34": (
            /***/
            (function(i, u, r) {
              var s = r("44e7");
              i.exports = function(o) {
                if (s(o))
                  throw TypeError("The method doesn't accept regular expressions");
                return o;
              };
            })
          ),
          /***/
          "5c6c": (
            /***/
            (function(i, u) {
              i.exports = function(r, s) {
                return {
                  enumerable: !(r & 1),
                  configurable: !(r & 2),
                  writable: !(r & 4),
                  value: s
                };
              };
            })
          ),
          /***/
          "5db7": (
            /***/
            (function(i, u, r) {
              var s = r("23e7"), o = r("a2bf"), l = r("7b0b"), c = r("50c4"), d = r("1c0b"), p = r("65f0");
              s({ target: "Array", proto: !0 }, {
                flatMap: function(f) {
                  var m = l(this), v = c(m.length), g;
                  return d(f), g = p(m, 0), g.length = o(g, m, m, v, 0, 1, f, arguments.length > 1 ? arguments[1] : void 0), g;
                }
              });
            })
          ),
          /***/
          6547: (
            /***/
            (function(i, u, r) {
              var s = r("a691"), o = r("1d80"), l = function(c) {
                return function(d, p) {
                  var h = String(o(d)), f = s(p), m = h.length, v, g;
                  return f < 0 || f >= m ? c ? "" : void 0 : (v = h.charCodeAt(f), v < 55296 || v > 56319 || f + 1 === m || (g = h.charCodeAt(f + 1)) < 56320 || g > 57343 ? c ? h.charAt(f) : v : c ? h.slice(f, f + 2) : (v - 55296 << 10) + (g - 56320) + 65536);
                };
              };
              i.exports = {
                // `String.prototype.codePointAt` method
                // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
                codeAt: l(!1),
                // `String.prototype.at` method
                // https://github.com/mathiasbynens/String.prototype.at
                charAt: l(!0)
              };
            })
          ),
          /***/
          "65f0": (
            /***/
            (function(i, u, r) {
              var s = r("861d"), o = r("e8b5"), l = r("b622"), c = l("species");
              i.exports = function(d, p) {
                var h;
                return o(d) && (h = d.constructor, typeof h == "function" && (h === Array || o(h.prototype)) ? h = void 0 : s(h) && (h = h[c], h === null && (h = void 0))), new (h === void 0 ? Array : h)(p === 0 ? 0 : p);
              };
            })
          ),
          /***/
          "69f3": (
            /***/
            (function(i, u, r) {
              var s = r("7f9a"), o = r("da84"), l = r("861d"), c = r("9112"), d = r("5135"), p = r("f772"), h = r("d012"), f = o.WeakMap, m, v, g, y = function(C) {
                return g(C) ? v(C) : m(C, {});
              }, S = function(C) {
                return function(R) {
                  var k;
                  if (!l(R) || (k = v(R)).type !== C)
                    throw TypeError("Incompatible receiver, " + C + " required");
                  return k;
                };
              };
              if (s) {
                var E = new f(), A = E.get, w = E.has, V = E.set;
                m = function(C, R) {
                  return V.call(E, C, R), R;
                }, v = function(C) {
                  return A.call(E, C) || {};
                }, g = function(C) {
                  return w.call(E, C);
                };
              } else {
                var M = p("state");
                h[M] = !0, m = function(C, R) {
                  return c(C, M, R), R;
                }, v = function(C) {
                  return d(C, M) ? C[M] : {};
                }, g = function(C) {
                  return d(C, M);
                };
              }
              i.exports = {
                set: m,
                get: v,
                has: g,
                enforce: y,
                getterFor: S
              };
            })
          ),
          /***/
          "6eeb": (
            /***/
            (function(i, u, r) {
              var s = r("da84"), o = r("9112"), l = r("5135"), c = r("ce4e"), d = r("8925"), p = r("69f3"), h = p.get, f = p.enforce, m = String(String).split("String");
              (i.exports = function(v, g, y, S) {
                var E = S ? !!S.unsafe : !1, A = S ? !!S.enumerable : !1, w = S ? !!S.noTargetGet : !1;
                if (typeof y == "function" && (typeof g == "string" && !l(y, "name") && o(y, "name", g), f(y).source = m.join(typeof g == "string" ? g : "")), v === s) {
                  A ? v[g] = y : c(g, y);
                  return;
                } else E ? !w && v[g] && (A = !0) : delete v[g];
                A ? v[g] = y : o(v, g, y);
              })(Function.prototype, "toString", function() {
                return typeof this == "function" && h(this).source || d(this);
              });
            })
          ),
          /***/
          "6f53": (
            /***/
            (function(i, u, r) {
              var s = r("83ab"), o = r("df75"), l = r("fc6a"), c = r("d1e7").f, d = function(p) {
                return function(h) {
                  for (var f = l(h), m = o(f), v = m.length, g = 0, y = [], S; v > g; )
                    S = m[g++], (!s || c.call(f, S)) && y.push(p ? [S, f[S]] : f[S]);
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
            })
          ),
          /***/
          "73d9": (
            /***/
            (function(i, u, r) {
              var s = r("44d2");
              s("flatMap");
            })
          ),
          /***/
          7418: (
            /***/
            (function(i, u) {
              u.f = Object.getOwnPropertySymbols;
            })
          ),
          /***/
          "746f": (
            /***/
            (function(i, u, r) {
              var s = r("428f"), o = r("5135"), l = r("e538"), c = r("9bf2").f;
              i.exports = function(d) {
                var p = s.Symbol || (s.Symbol = {});
                o(p, d) || c(p, d, {
                  value: l.f(d)
                });
              };
            })
          ),
          /***/
          7839: (
            /***/
            (function(i, u) {
              i.exports = [
                "constructor",
                "hasOwnProperty",
                "isPrototypeOf",
                "propertyIsEnumerable",
                "toLocaleString",
                "toString",
                "valueOf"
              ];
            })
          ),
          /***/
          "7b0b": (
            /***/
            (function(i, u, r) {
              var s = r("1d80");
              i.exports = function(o) {
                return Object(s(o));
              };
            })
          ),
          /***/
          "7c73": (
            /***/
            (function(i, u, r) {
              var s = r("825a"), o = r("37e8"), l = r("7839"), c = r("d012"), d = r("1be4"), p = r("cc12"), h = r("f772"), f = ">", m = "<", v = "prototype", g = "script", y = h("IE_PROTO"), S = function() {
              }, E = function(C) {
                return m + g + f + C + m + "/" + g + f;
              }, A = function(C) {
                C.write(E("")), C.close();
                var R = C.parentWindow.Object;
                return C = null, R;
              }, w = function() {
                var C = p("iframe"), R = "java" + g + ":", k;
                return C.style.display = "none", d.appendChild(C), C.src = String(R), k = C.contentWindow.document, k.open(), k.write(E("document.F=Object")), k.close(), k.F;
              }, V, M = function() {
                try {
                  V = document.domain && new ActiveXObject("htmlfile");
                } catch {
                }
                M = V ? A(V) : w();
                for (var C = l.length; C--; ) delete M[v][l[C]];
                return M();
              };
              c[y] = !0, i.exports = Object.create || function(R, k) {
                var $;
                return R !== null ? (S[v] = s(R), $ = new S(), S[v] = null, $[y] = R) : $ = M(), k === void 0 ? $ : o($, k);
              };
            })
          ),
          /***/
          "7dd0": (
            /***/
            (function(i, u, r) {
              var s = r("23e7"), o = r("9ed3"), l = r("e163"), c = r("d2bb"), d = r("d44e"), p = r("9112"), h = r("6eeb"), f = r("b622"), m = r("c430"), v = r("3f8c"), g = r("ae93"), y = g.IteratorPrototype, S = g.BUGGY_SAFARI_ITERATORS, E = f("iterator"), A = "keys", w = "values", V = "entries", M = function() {
                return this;
              };
              i.exports = function(C, R, k, $, B, z, K) {
                o(k, R, $);
                var Y = function(be) {
                  if (be === B && ye) return ye;
                  if (!S && be in he) return he[be];
                  switch (be) {
                    case A:
                      return function() {
                        return new k(this, be);
                      };
                    case w:
                      return function() {
                        return new k(this, be);
                      };
                    case V:
                      return function() {
                        return new k(this, be);
                      };
                  }
                  return function() {
                    return new k(this);
                  };
                }, ae = R + " Iterator", J = !1, he = C.prototype, ce = he[E] || he["@@iterator"] || B && he[B], ye = !S && ce || Y(B), Ce = R == "Array" && he.entries || ce, Ee, Ue, Ne;
                if (Ce && (Ee = l(Ce.call(new C())), y !== Object.prototype && Ee.next && (!m && l(Ee) !== y && (c ? c(Ee, y) : typeof Ee[E] != "function" && p(Ee, E, M)), d(Ee, ae, !0, !0), m && (v[ae] = M))), B == w && ce && ce.name !== w && (J = !0, ye = function() {
                  return ce.call(this);
                }), (!m || K) && he[E] !== ye && p(he, E, ye), v[R] = ye, B)
                  if (Ue = {
                    values: Y(w),
                    keys: z ? ye : Y(A),
                    entries: Y(V)
                  }, K) for (Ne in Ue)
                    (S || J || !(Ne in he)) && h(he, Ne, Ue[Ne]);
                  else s({ target: R, proto: !0, forced: S || J }, Ue);
                return Ue;
              };
            })
          ),
          /***/
          "7f9a": (
            /***/
            (function(i, u, r) {
              var s = r("da84"), o = r("8925"), l = s.WeakMap;
              i.exports = typeof l == "function" && /native code/.test(o(l));
            })
          ),
          /***/
          "825a": (
            /***/
            (function(i, u, r) {
              var s = r("861d");
              i.exports = function(o) {
                if (!s(o))
                  throw TypeError(String(o) + " is not an object");
                return o;
              };
            })
          ),
          /***/
          "83ab": (
            /***/
            (function(i, u, r) {
              var s = r("d039");
              i.exports = !s(function() {
                return Object.defineProperty({}, 1, { get: function() {
                  return 7;
                } })[1] != 7;
              });
            })
          ),
          /***/
          8418: (
            /***/
            (function(i, u, r) {
              var s = r("c04e"), o = r("9bf2"), l = r("5c6c");
              i.exports = function(c, d, p) {
                var h = s(d);
                h in c ? o.f(c, h, l(0, p)) : c[h] = p;
              };
            })
          ),
          /***/
          "861d": (
            /***/
            (function(i, u) {
              i.exports = function(r) {
                return typeof r == "object" ? r !== null : typeof r == "function";
              };
            })
          ),
          /***/
          8875: (
            /***/
            (function(i, u, r) {
              var s, o, l;
              (function(c, d) {
                o = [], s = d, l = typeof s == "function" ? s.apply(u, o) : s, l !== void 0 && (i.exports = l);
              })(typeof self < "u" ? self : this, function() {
                function c() {
                  var d = Object.getOwnPropertyDescriptor(document, "currentScript");
                  if (!d && "currentScript" in document && document.currentScript || d && d.get !== c && document.currentScript)
                    return document.currentScript;
                  try {
                    throw new Error();
                  } catch (V) {
                    var p = /.*at [^(]*\((.*):(.+):(.+)\)$/ig, h = /@([^@]*):(\d+):(\d+)\s*$/ig, f = p.exec(V.stack) || h.exec(V.stack), m = f && f[1] || !1, v = f && f[2] || !1, g = document.location.href.replace(document.location.hash, ""), y, S, E, A = document.getElementsByTagName("script");
                    m === g && (y = document.documentElement.outerHTML, S = new RegExp("(?:[^\\n]+?\\n){0," + (v - 2) + "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*", "i"), E = y.replace(S, "$1").trim());
                    for (var w = 0; w < A.length; w++)
                      if (A[w].readyState === "interactive" || A[w].src === m || m === g && A[w].innerHTML && A[w].innerHTML.trim() === E)
                        return A[w];
                    return null;
                  }
                }
                return c;
              });
            })
          ),
          /***/
          8925: (
            /***/
            (function(i, u, r) {
              var s = r("c6cd"), o = Function.toString;
              typeof s.inspectSource != "function" && (s.inspectSource = function(l) {
                return o.call(l);
              }), i.exports = s.inspectSource;
            })
          ),
          /***/
          "8aa5": (
            /***/
            (function(i, u, r) {
              var s = r("6547").charAt;
              i.exports = function(o, l, c) {
                return l + (c ? s(o, l).length : 1);
              };
            })
          ),
          /***/
          "8bbf": (
            /***/
            (function(i, u) {
              i.exports = n;
            })
          ),
          /***/
          "90e3": (
            /***/
            (function(i, u) {
              var r = 0, s = Math.random();
              i.exports = function(o) {
                return "Symbol(" + String(o === void 0 ? "" : o) + ")_" + (++r + s).toString(36);
              };
            })
          ),
          /***/
          9112: (
            /***/
            (function(i, u, r) {
              var s = r("83ab"), o = r("9bf2"), l = r("5c6c");
              i.exports = s ? function(c, d, p) {
                return o.f(c, d, l(1, p));
              } : function(c, d, p) {
                return c[d] = p, c;
              };
            })
          ),
          /***/
          9263: (
            /***/
            (function(i, u, r) {
              var s = r("ad6d"), o = r("9f7f"), l = RegExp.prototype.exec, c = String.prototype.replace, d = l, p = (function() {
                var v = /a/, g = /b*/g;
                return l.call(v, "a"), l.call(g, "a"), v.lastIndex !== 0 || g.lastIndex !== 0;
              })(), h = o.UNSUPPORTED_Y || o.BROKEN_CARET, f = /()??/.exec("")[1] !== void 0, m = p || f || h;
              m && (d = function(g) {
                var y = this, S, E, A, w, V = h && y.sticky, M = s.call(y), C = y.source, R = 0, k = g;
                return V && (M = M.replace("y", ""), M.indexOf("g") === -1 && (M += "g"), k = String(g).slice(y.lastIndex), y.lastIndex > 0 && (!y.multiline || y.multiline && g[y.lastIndex - 1] !== `
`) && (C = "(?: " + C + ")", k = " " + k, R++), E = new RegExp("^(?:" + C + ")", M)), f && (E = new RegExp("^" + C + "$(?!\\s)", M)), p && (S = y.lastIndex), A = l.call(V ? E : y, k), V ? A ? (A.input = A.input.slice(R), A[0] = A[0].slice(R), A.index = y.lastIndex, y.lastIndex += A[0].length) : y.lastIndex = 0 : p && A && (y.lastIndex = y.global ? A.index + A[0].length : S), f && A && A.length > 1 && c.call(A[0], E, function() {
                  for (w = 1; w < arguments.length - 2; w++)
                    arguments[w] === void 0 && (A[w] = void 0);
                }), A;
              }), i.exports = d;
            })
          ),
          /***/
          "94ca": (
            /***/
            (function(i, u, r) {
              var s = r("d039"), o = /#|\.prototype\./, l = function(f, m) {
                var v = d[c(f)];
                return v == h ? !0 : v == p ? !1 : typeof m == "function" ? s(m) : !!m;
              }, c = l.normalize = function(f) {
                return String(f).replace(o, ".").toLowerCase();
              }, d = l.data = {}, p = l.NATIVE = "N", h = l.POLYFILL = "P";
              i.exports = l;
            })
          ),
          /***/
          "99af": (
            /***/
            (function(i, u, r) {
              var s = r("23e7"), o = r("d039"), l = r("e8b5"), c = r("861d"), d = r("7b0b"), p = r("50c4"), h = r("8418"), f = r("65f0"), m = r("1dde"), v = r("b622"), g = r("2d00"), y = v("isConcatSpreadable"), S = 9007199254740991, E = "Maximum allowed index exceeded", A = g >= 51 || !o(function() {
                var C = [];
                return C[y] = !1, C.concat()[0] !== C;
              }), w = m("concat"), V = function(C) {
                if (!c(C)) return !1;
                var R = C[y];
                return R !== void 0 ? !!R : l(C);
              }, M = !A || !w;
              s({ target: "Array", proto: !0, forced: M }, {
                concat: function(R) {
                  var k = d(this), $ = f(k, 0), B = 0, z, K, Y, ae, J;
                  for (z = -1, Y = arguments.length; z < Y; z++)
                    if (J = z === -1 ? k : arguments[z], V(J)) {
                      if (ae = p(J.length), B + ae > S) throw TypeError(E);
                      for (K = 0; K < ae; K++, B++) K in J && h($, B, J[K]);
                    } else {
                      if (B >= S) throw TypeError(E);
                      h($, B++, J);
                    }
                  return $.length = B, $;
                }
              });
            })
          ),
          /***/
          "9bdd": (
            /***/
            (function(i, u, r) {
              var s = r("825a");
              i.exports = function(o, l, c, d) {
                try {
                  return d ? l(s(c)[0], c[1]) : l(c);
                } catch (h) {
                  var p = o.return;
                  throw p !== void 0 && s(p.call(o)), h;
                }
              };
            })
          ),
          /***/
          "9bf2": (
            /***/
            (function(i, u, r) {
              var s = r("83ab"), o = r("0cfb"), l = r("825a"), c = r("c04e"), d = Object.defineProperty;
              u.f = s ? d : function(h, f, m) {
                if (l(h), f = c(f, !0), l(m), o) try {
                  return d(h, f, m);
                } catch {
                }
                if ("get" in m || "set" in m) throw TypeError("Accessors not supported");
                return "value" in m && (h[f] = m.value), h;
              };
            })
          ),
          /***/
          "9ed3": (
            /***/
            (function(i, u, r) {
              var s = r("ae93").IteratorPrototype, o = r("7c73"), l = r("5c6c"), c = r("d44e"), d = r("3f8c"), p = function() {
                return this;
              };
              i.exports = function(h, f, m) {
                var v = f + " Iterator";
                return h.prototype = o(s, { next: l(1, m) }), c(h, v, !1, !0), d[v] = p, h;
              };
            })
          ),
          /***/
          "9f7f": (
            /***/
            (function(i, u, r) {
              var s = r("d039");
              function o(l, c) {
                return RegExp(l, c);
              }
              u.UNSUPPORTED_Y = s(function() {
                var l = o("a", "y");
                return l.lastIndex = 2, l.exec("abcd") != null;
              }), u.BROKEN_CARET = s(function() {
                var l = o("^r", "gy");
                return l.lastIndex = 2, l.exec("str") != null;
              });
            })
          ),
          /***/
          a2bf: (
            /***/
            (function(i, u, r) {
              var s = r("e8b5"), o = r("50c4"), l = r("0366"), c = function(d, p, h, f, m, v, g, y) {
                for (var S = m, E = 0, A = g ? l(g, y, 3) : !1, w; E < f; ) {
                  if (E in h) {
                    if (w = A ? A(h[E], E, p) : h[E], v > 0 && s(w))
                      S = c(d, p, w, o(w.length), S, v - 1) - 1;
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
              i.exports = c;
            })
          ),
          /***/
          a352: (
            /***/
            (function(i, u) {
              i.exports = a;
            })
          ),
          /***/
          a434: (
            /***/
            (function(i, u, r) {
              var s = r("23e7"), o = r("23cb"), l = r("a691"), c = r("50c4"), d = r("7b0b"), p = r("65f0"), h = r("8418"), f = r("1dde"), m = r("ae40"), v = f("splice"), g = m("splice", { ACCESSORS: !0, 0: 0, 1: 2 }), y = Math.max, S = Math.min, E = 9007199254740991, A = "Maximum allowed length exceeded";
              s({ target: "Array", proto: !0, forced: !v || !g }, {
                splice: function(V, M) {
                  var C = d(this), R = c(C.length), k = o(V, R), $ = arguments.length, B, z, K, Y, ae, J;
                  if ($ === 0 ? B = z = 0 : $ === 1 ? (B = 0, z = R - k) : (B = $ - 2, z = S(y(l(M), 0), R - k)), R + B - z > E)
                    throw TypeError(A);
                  for (K = p(C, z), Y = 0; Y < z; Y++)
                    ae = k + Y, ae in C && h(K, Y, C[ae]);
                  if (K.length = z, B < z) {
                    for (Y = k; Y < R - z; Y++)
                      ae = Y + z, J = Y + B, ae in C ? C[J] = C[ae] : delete C[J];
                    for (Y = R; Y > R - z + B; Y--) delete C[Y - 1];
                  } else if (B > z)
                    for (Y = R - z; Y > k; Y--)
                      ae = Y + z - 1, J = Y + B - 1, ae in C ? C[J] = C[ae] : delete C[J];
                  for (Y = 0; Y < B; Y++)
                    C[Y + k] = arguments[Y + 2];
                  return C.length = R - z + B, K;
                }
              });
            })
          ),
          /***/
          a4d3: (
            /***/
            (function(i, u, r) {
              var s = r("23e7"), o = r("da84"), l = r("d066"), c = r("c430"), d = r("83ab"), p = r("4930"), h = r("fdbf"), f = r("d039"), m = r("5135"), v = r("e8b5"), g = r("861d"), y = r("825a"), S = r("7b0b"), E = r("fc6a"), A = r("c04e"), w = r("5c6c"), V = r("7c73"), M = r("df75"), C = r("241c"), R = r("057f"), k = r("7418"), $ = r("06cf"), B = r("9bf2"), z = r("d1e7"), K = r("9112"), Y = r("6eeb"), ae = r("5692"), J = r("f772"), he = r("d012"), ce = r("90e3"), ye = r("b622"), Ce = r("e538"), Ee = r("746f"), Ue = r("d44e"), Ne = r("69f3"), be = r("b727").forEach, xe = J("hidden"), P = "Symbol", D = "prototype", T = ye("toPrimitive"), L = Ne.set, b = Ne.getterFor(P), x = Object[D], I = o.Symbol, N = l("JSON", "stringify"), U = $.f, H = B.f, Q = R.f, q = z.f, Z = ae("symbols"), ee = ae("op-symbols"), ne = ae("string-to-symbol-registry"), le = ae("symbol-to-string-registry"), ge = ae("wks"), Pe = o.QObject, Ke = !Pe || !Pe[D] || !Pe[D].findChild, tt = d && f(function() {
                return V(H({}, "a", {
                  get: function() {
                    return H(this, "a", { value: 7 }).a;
                  }
                })).a != 7;
              }) ? function(Ie, Ae, Me) {
                var He = U(x, Ae);
                He && delete x[Ae], H(Ie, Ae, Me), He && Ie !== x && H(x, Ae, He);
              } : H, qe = function(Ie, Ae) {
                var Me = Z[Ie] = V(I[D]);
                return L(Me, {
                  type: P,
                  tag: Ie,
                  description: Ae
                }), d || (Me.description = Ae), Me;
              }, G = h ? function(Ie) {
                return typeof Ie == "symbol";
              } : function(Ie) {
                return Object(Ie) instanceof I;
              }, X = function(Ae, Me, He) {
                Ae === x && X(ee, Me, He), y(Ae);
                var Ve = A(Me, !0);
                return y(He), m(Z, Ve) ? (He.enumerable ? (m(Ae, xe) && Ae[xe][Ve] && (Ae[xe][Ve] = !1), He = V(He, { enumerable: w(0, !1) })) : (m(Ae, xe) || H(Ae, xe, w(1, {})), Ae[xe][Ve] = !0), tt(Ae, Ve, He)) : H(Ae, Ve, He);
              }, oe = function(Ae, Me) {
                y(Ae);
                var He = E(Me), Ve = M(He).concat(Te(He));
                return be(Ve, function(at) {
                  (!d || we.call(He, at)) && X(Ae, at, He[at]);
                }), Ae;
              }, de = function(Ae, Me) {
                return Me === void 0 ? V(Ae) : oe(V(Ae), Me);
              }, we = function(Ae) {
                var Me = A(Ae, !0), He = q.call(this, Me);
                return this === x && m(Z, Me) && !m(ee, Me) ? !1 : He || !m(this, Me) || !m(Z, Me) || m(this, xe) && this[xe][Me] ? He : !0;
              }, je = function(Ae, Me) {
                var He = E(Ae), Ve = A(Me, !0);
                if (!(He === x && m(Z, Ve) && !m(ee, Ve))) {
                  var at = U(He, Ve);
                  return at && m(Z, Ve) && !(m(He, xe) && He[xe][Ve]) && (at.enumerable = !0), at;
                }
              }, Re = function(Ae) {
                var Me = Q(E(Ae)), He = [];
                return be(Me, function(Ve) {
                  !m(Z, Ve) && !m(he, Ve) && He.push(Ve);
                }), He;
              }, Te = function(Ae) {
                var Me = Ae === x, He = Q(Me ? ee : E(Ae)), Ve = [];
                return be(He, function(at) {
                  m(Z, at) && (!Me || m(x, at)) && Ve.push(Z[at]);
                }), Ve;
              };
              if (p || (I = function() {
                if (this instanceof I) throw TypeError("Symbol is not a constructor");
                var Ae = !arguments.length || arguments[0] === void 0 ? void 0 : String(arguments[0]), Me = ce(Ae), He = function(Ve) {
                  this === x && He.call(ee, Ve), m(this, xe) && m(this[xe], Me) && (this[xe][Me] = !1), tt(this, Me, w(1, Ve));
                };
                return d && Ke && tt(x, Me, { configurable: !0, set: He }), qe(Me, Ae);
              }, Y(I[D], "toString", function() {
                return b(this).tag;
              }), Y(I, "withoutSetter", function(Ie) {
                return qe(ce(Ie), Ie);
              }), z.f = we, B.f = X, $.f = je, C.f = R.f = Re, k.f = Te, Ce.f = function(Ie) {
                return qe(ye(Ie), Ie);
              }, d && (H(I[D], "description", {
                configurable: !0,
                get: function() {
                  return b(this).description;
                }
              }), c || Y(x, "propertyIsEnumerable", we, { unsafe: !0 }))), s({ global: !0, wrap: !0, forced: !p, sham: !p }, {
                Symbol: I
              }), be(M(ge), function(Ie) {
                Ee(Ie);
              }), s({ target: P, stat: !0, forced: !p }, {
                // `Symbol.for` method
                // https://tc39.github.io/ecma262/#sec-symbol.for
                for: function(Ie) {
                  var Ae = String(Ie);
                  if (m(ne, Ae)) return ne[Ae];
                  var Me = I(Ae);
                  return ne[Ae] = Me, le[Me] = Ae, Me;
                },
                // `Symbol.keyFor` method
                // https://tc39.github.io/ecma262/#sec-symbol.keyfor
                keyFor: function(Ae) {
                  if (!G(Ae)) throw TypeError(Ae + " is not a symbol");
                  if (m(le, Ae)) return le[Ae];
                },
                useSetter: function() {
                  Ke = !0;
                },
                useSimple: function() {
                  Ke = !1;
                }
              }), s({ target: "Object", stat: !0, forced: !p, sham: !d }, {
                // `Object.create` method
                // https://tc39.github.io/ecma262/#sec-object.create
                create: de,
                // `Object.defineProperty` method
                // https://tc39.github.io/ecma262/#sec-object.defineproperty
                defineProperty: X,
                // `Object.defineProperties` method
                // https://tc39.github.io/ecma262/#sec-object.defineproperties
                defineProperties: oe,
                // `Object.getOwnPropertyDescriptor` method
                // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
                getOwnPropertyDescriptor: je
              }), s({ target: "Object", stat: !0, forced: !p }, {
                // `Object.getOwnPropertyNames` method
                // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
                getOwnPropertyNames: Re,
                // `Object.getOwnPropertySymbols` method
                // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
                getOwnPropertySymbols: Te
              }), s({ target: "Object", stat: !0, forced: f(function() {
                k.f(1);
              }) }, {
                getOwnPropertySymbols: function(Ae) {
                  return k.f(S(Ae));
                }
              }), N) {
                var ze = !p || f(function() {
                  var Ie = I();
                  return N([Ie]) != "[null]" || N({ a: Ie }) != "{}" || N(Object(Ie)) != "{}";
                });
                s({ target: "JSON", stat: !0, forced: ze }, {
                  // eslint-disable-next-line no-unused-vars
                  stringify: function(Ae, Me, He) {
                    for (var Ve = [Ae], at = 1, Wt; arguments.length > at; ) Ve.push(arguments[at++]);
                    if (Wt = Me, !(!g(Me) && Ae === void 0 || G(Ae)))
                      return v(Me) || (Me = function(Mn, Bt) {
                        if (typeof Wt == "function" && (Bt = Wt.call(this, Mn, Bt)), !G(Bt)) return Bt;
                      }), Ve[1] = Me, N.apply(null, Ve);
                  }
                });
              }
              I[D][T] || K(I[D], T, I[D].valueOf), Ue(I, P), he[xe] = !0;
            })
          ),
          /***/
          a630: (
            /***/
            (function(i, u, r) {
              var s = r("23e7"), o = r("4df4"), l = r("1c7e"), c = !l(function(d) {
                Array.from(d);
              });
              s({ target: "Array", stat: !0, forced: c }, {
                from: o
              });
            })
          ),
          /***/
          a640: (
            /***/
            (function(i, u, r) {
              var s = r("d039");
              i.exports = function(o, l) {
                var c = [][o];
                return !!c && s(function() {
                  c.call(null, l || function() {
                    throw 1;
                  }, 1);
                });
              };
            })
          ),
          /***/
          a691: (
            /***/
            (function(i, u) {
              var r = Math.ceil, s = Math.floor;
              i.exports = function(o) {
                return isNaN(o = +o) ? 0 : (o > 0 ? s : r)(o);
              };
            })
          ),
          /***/
          ab13: (
            /***/
            (function(i, u, r) {
              var s = r("b622"), o = s("match");
              i.exports = function(l) {
                var c = /./;
                try {
                  "/./"[l](c);
                } catch {
                  try {
                    return c[o] = !1, "/./"[l](c);
                  } catch {
                  }
                }
                return !1;
              };
            })
          ),
          /***/
          ac1f: (
            /***/
            (function(i, u, r) {
              var s = r("23e7"), o = r("9263");
              s({ target: "RegExp", proto: !0, forced: /./.exec !== o }, {
                exec: o
              });
            })
          ),
          /***/
          ad6d: (
            /***/
            (function(i, u, r) {
              var s = r("825a");
              i.exports = function() {
                var o = s(this), l = "";
                return o.global && (l += "g"), o.ignoreCase && (l += "i"), o.multiline && (l += "m"), o.dotAll && (l += "s"), o.unicode && (l += "u"), o.sticky && (l += "y"), l;
              };
            })
          ),
          /***/
          ae40: (
            /***/
            (function(i, u, r) {
              var s = r("83ab"), o = r("d039"), l = r("5135"), c = Object.defineProperty, d = {}, p = function(h) {
                throw h;
              };
              i.exports = function(h, f) {
                if (l(d, h)) return d[h];
                f || (f = {});
                var m = [][h], v = l(f, "ACCESSORS") ? f.ACCESSORS : !1, g = l(f, 0) ? f[0] : p, y = l(f, 1) ? f[1] : void 0;
                return d[h] = !!m && !o(function() {
                  if (v && !s) return !0;
                  var S = { length: -1 };
                  v ? c(S, 1, { enumerable: !0, get: p }) : S[1] = 1, m.call(S, g, y);
                });
              };
            })
          ),
          /***/
          ae93: (
            /***/
            (function(i, u, r) {
              var s = r("e163"), o = r("9112"), l = r("5135"), c = r("b622"), d = r("c430"), p = c("iterator"), h = !1, f = function() {
                return this;
              }, m, v, g;
              [].keys && (g = [].keys(), "next" in g ? (v = s(s(g)), v !== Object.prototype && (m = v)) : h = !0), m == null && (m = {}), !d && !l(m, p) && o(m, p, f), i.exports = {
                IteratorPrototype: m,
                BUGGY_SAFARI_ITERATORS: h
              };
            })
          ),
          /***/
          b041: (
            /***/
            (function(i, u, r) {
              var s = r("00ee"), o = r("f5df");
              i.exports = s ? {}.toString : function() {
                return "[object " + o(this) + "]";
              };
            })
          ),
          /***/
          b0c0: (
            /***/
            (function(i, u, r) {
              var s = r("83ab"), o = r("9bf2").f, l = Function.prototype, c = l.toString, d = /^\s*function ([^ (]*)/, p = "name";
              s && !(p in l) && o(l, p, {
                configurable: !0,
                get: function() {
                  try {
                    return c.call(this).match(d)[1];
                  } catch {
                    return "";
                  }
                }
              });
            })
          ),
          /***/
          b622: (
            /***/
            (function(i, u, r) {
              var s = r("da84"), o = r("5692"), l = r("5135"), c = r("90e3"), d = r("4930"), p = r("fdbf"), h = o("wks"), f = s.Symbol, m = p ? f : f && f.withoutSetter || c;
              i.exports = function(v) {
                return l(h, v) || (d && l(f, v) ? h[v] = f[v] : h[v] = m("Symbol." + v)), h[v];
              };
            })
          ),
          /***/
          b64b: (
            /***/
            (function(i, u, r) {
              var s = r("23e7"), o = r("7b0b"), l = r("df75"), c = r("d039"), d = c(function() {
                l(1);
              });
              s({ target: "Object", stat: !0, forced: d }, {
                keys: function(h) {
                  return l(o(h));
                }
              });
            })
          ),
          /***/
          b727: (
            /***/
            (function(i, u, r) {
              var s = r("0366"), o = r("44ad"), l = r("7b0b"), c = r("50c4"), d = r("65f0"), p = [].push, h = function(f) {
                var m = f == 1, v = f == 2, g = f == 3, y = f == 4, S = f == 6, E = f == 5 || S;
                return function(A, w, V, M) {
                  for (var C = l(A), R = o(C), k = s(w, V, 3), $ = c(R.length), B = 0, z = M || d, K = m ? z(A, $) : v ? z(A, 0) : void 0, Y, ae; $ > B; B++) if ((E || B in R) && (Y = R[B], ae = k(Y, B, C), f)) {
                    if (m) K[B] = ae;
                    else if (ae) switch (f) {
                      case 3:
                        return !0;
                      // some
                      case 5:
                        return Y;
                      // find
                      case 6:
                        return B;
                      // findIndex
                      case 2:
                        p.call(K, Y);
                    }
                    else if (y) return !1;
                  }
                  return S ? -1 : g || y ? y : K;
                };
              };
              i.exports = {
                // `Array.prototype.forEach` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
                forEach: h(0),
                // `Array.prototype.map` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.map
                map: h(1),
                // `Array.prototype.filter` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.filter
                filter: h(2),
                // `Array.prototype.some` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.some
                some: h(3),
                // `Array.prototype.every` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.every
                every: h(4),
                // `Array.prototype.find` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.find
                find: h(5),
                // `Array.prototype.findIndex` method
                // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
                findIndex: h(6)
              };
            })
          ),
          /***/
          c04e: (
            /***/
            (function(i, u, r) {
              var s = r("861d");
              i.exports = function(o, l) {
                if (!s(o)) return o;
                var c, d;
                if (l && typeof (c = o.toString) == "function" && !s(d = c.call(o)) || typeof (c = o.valueOf) == "function" && !s(d = c.call(o)) || !l && typeof (c = o.toString) == "function" && !s(d = c.call(o))) return d;
                throw TypeError("Can't convert object to primitive value");
              };
            })
          ),
          /***/
          c430: (
            /***/
            (function(i, u) {
              i.exports = !1;
            })
          ),
          /***/
          c6b6: (
            /***/
            (function(i, u) {
              var r = {}.toString;
              i.exports = function(s) {
                return r.call(s).slice(8, -1);
              };
            })
          ),
          /***/
          c6cd: (
            /***/
            (function(i, u, r) {
              var s = r("da84"), o = r("ce4e"), l = "__core-js_shared__", c = s[l] || o(l, {});
              i.exports = c;
            })
          ),
          /***/
          c740: (
            /***/
            (function(i, u, r) {
              var s = r("23e7"), o = r("b727").findIndex, l = r("44d2"), c = r("ae40"), d = "findIndex", p = !0, h = c(d);
              d in [] && Array(1)[d](function() {
                p = !1;
              }), s({ target: "Array", proto: !0, forced: p || !h }, {
                findIndex: function(m) {
                  return o(this, m, arguments.length > 1 ? arguments[1] : void 0);
                }
              }), l(d);
            })
          ),
          /***/
          c8ba: (
            /***/
            (function(i, u) {
              var r;
              r = /* @__PURE__ */ (function() {
                return this;
              })();
              try {
                r = r || new Function("return this")();
              } catch {
                typeof window == "object" && (r = window);
              }
              i.exports = r;
            })
          ),
          /***/
          c975: (
            /***/
            (function(i, u, r) {
              var s = r("23e7"), o = r("4d64").indexOf, l = r("a640"), c = r("ae40"), d = [].indexOf, p = !!d && 1 / [1].indexOf(1, -0) < 0, h = l("indexOf"), f = c("indexOf", { ACCESSORS: !0, 1: 0 });
              s({ target: "Array", proto: !0, forced: p || !h || !f }, {
                indexOf: function(v) {
                  return p ? d.apply(this, arguments) || 0 : o(this, v, arguments.length > 1 ? arguments[1] : void 0);
                }
              });
            })
          ),
          /***/
          ca84: (
            /***/
            (function(i, u, r) {
              var s = r("5135"), o = r("fc6a"), l = r("4d64").indexOf, c = r("d012");
              i.exports = function(d, p) {
                var h = o(d), f = 0, m = [], v;
                for (v in h) !s(c, v) && s(h, v) && m.push(v);
                for (; p.length > f; ) s(h, v = p[f++]) && (~l(m, v) || m.push(v));
                return m;
              };
            })
          ),
          /***/
          caad: (
            /***/
            (function(i, u, r) {
              var s = r("23e7"), o = r("4d64").includes, l = r("44d2"), c = r("ae40"), d = c("indexOf", { ACCESSORS: !0, 1: 0 });
              s({ target: "Array", proto: !0, forced: !d }, {
                includes: function(h) {
                  return o(this, h, arguments.length > 1 ? arguments[1] : void 0);
                }
              }), l("includes");
            })
          ),
          /***/
          cc12: (
            /***/
            (function(i, u, r) {
              var s = r("da84"), o = r("861d"), l = s.document, c = o(l) && o(l.createElement);
              i.exports = function(d) {
                return c ? l.createElement(d) : {};
              };
            })
          ),
          /***/
          ce4e: (
            /***/
            (function(i, u, r) {
              var s = r("da84"), o = r("9112");
              i.exports = function(l, c) {
                try {
                  o(s, l, c);
                } catch {
                  s[l] = c;
                }
                return c;
              };
            })
          ),
          /***/
          d012: (
            /***/
            (function(i, u) {
              i.exports = {};
            })
          ),
          /***/
          d039: (
            /***/
            (function(i, u) {
              i.exports = function(r) {
                try {
                  return !!r();
                } catch {
                  return !0;
                }
              };
            })
          ),
          /***/
          d066: (
            /***/
            (function(i, u, r) {
              var s = r("428f"), o = r("da84"), l = function(c) {
                return typeof c == "function" ? c : void 0;
              };
              i.exports = function(c, d) {
                return arguments.length < 2 ? l(s[c]) || l(o[c]) : s[c] && s[c][d] || o[c] && o[c][d];
              };
            })
          ),
          /***/
          d1e7: (
            /***/
            (function(i, u, r) {
              var s = {}.propertyIsEnumerable, o = Object.getOwnPropertyDescriptor, l = o && !s.call({ 1: 2 }, 1);
              u.f = l ? function(d) {
                var p = o(this, d);
                return !!p && p.enumerable;
              } : s;
            })
          ),
          /***/
          d28b: (
            /***/
            (function(i, u, r) {
              var s = r("746f");
              s("iterator");
            })
          ),
          /***/
          d2bb: (
            /***/
            (function(i, u, r) {
              var s = r("825a"), o = r("3bbe");
              i.exports = Object.setPrototypeOf || ("__proto__" in {} ? (function() {
                var l = !1, c = {}, d;
                try {
                  d = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set, d.call(c, []), l = c instanceof Array;
                } catch {
                }
                return function(h, f) {
                  return s(h), o(f), l ? d.call(h, f) : h.__proto__ = f, h;
                };
              })() : void 0);
            })
          ),
          /***/
          d3b7: (
            /***/
            (function(i, u, r) {
              var s = r("00ee"), o = r("6eeb"), l = r("b041");
              s || o(Object.prototype, "toString", l, { unsafe: !0 });
            })
          ),
          /***/
          d44e: (
            /***/
            (function(i, u, r) {
              var s = r("9bf2").f, o = r("5135"), l = r("b622"), c = l("toStringTag");
              i.exports = function(d, p, h) {
                d && !o(d = h ? d : d.prototype, c) && s(d, c, { configurable: !0, value: p });
              };
            })
          ),
          /***/
          d58f: (
            /***/
            (function(i, u, r) {
              var s = r("1c0b"), o = r("7b0b"), l = r("44ad"), c = r("50c4"), d = function(p) {
                return function(h, f, m, v) {
                  s(f);
                  var g = o(h), y = l(g), S = c(g.length), E = p ? S - 1 : 0, A = p ? -1 : 1;
                  if (m < 2) for (; ; ) {
                    if (E in y) {
                      v = y[E], E += A;
                      break;
                    }
                    if (E += A, p ? E < 0 : S <= E)
                      throw TypeError("Reduce of empty array with no initial value");
                  }
                  for (; p ? E >= 0 : S > E; E += A) E in y && (v = f(v, y[E], E, g));
                  return v;
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
            })
          ),
          /***/
          d784: (
            /***/
            (function(i, u, r) {
              r("ac1f");
              var s = r("6eeb"), o = r("d039"), l = r("b622"), c = r("9263"), d = r("9112"), p = l("species"), h = !o(function() {
                var y = /./;
                return y.exec = function() {
                  var S = [];
                  return S.groups = { a: "7" }, S;
                }, "".replace(y, "$<a>") !== "7";
              }), f = (function() {
                return "a".replace(/./, "$0") === "$0";
              })(), m = l("replace"), v = (function() {
                return /./[m] ? /./[m]("a", "$0") === "" : !1;
              })(), g = !o(function() {
                var y = /(?:)/, S = y.exec;
                y.exec = function() {
                  return S.apply(this, arguments);
                };
                var E = "ab".split(y);
                return E.length !== 2 || E[0] !== "a" || E[1] !== "b";
              });
              i.exports = function(y, S, E, A) {
                var w = l(y), V = !o(function() {
                  var B = {};
                  return B[w] = function() {
                    return 7;
                  }, ""[y](B) != 7;
                }), M = V && !o(function() {
                  var B = !1, z = /a/;
                  return y === "split" && (z = {}, z.constructor = {}, z.constructor[p] = function() {
                    return z;
                  }, z.flags = "", z[w] = /./[w]), z.exec = function() {
                    return B = !0, null;
                  }, z[w](""), !B;
                });
                if (!V || !M || y === "replace" && !(h && f && !v) || y === "split" && !g) {
                  var C = /./[w], R = E(w, ""[y], function(B, z, K, Y, ae) {
                    return z.exec === c ? V && !ae ? { done: !0, value: C.call(z, K, Y) } : { done: !0, value: B.call(K, z, Y) } : { done: !1 };
                  }, {
                    REPLACE_KEEPS_$0: f,
                    REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: v
                  }), k = R[0], $ = R[1];
                  s(String.prototype, y, k), s(
                    RegExp.prototype,
                    w,
                    S == 2 ? function(B, z) {
                      return $.call(B, this, z);
                    } : function(B) {
                      return $.call(B, this);
                    }
                  );
                }
                A && d(RegExp.prototype[w], "sham", !0);
              };
            })
          ),
          /***/
          d81d: (
            /***/
            (function(i, u, r) {
              var s = r("23e7"), o = r("b727").map, l = r("1dde"), c = r("ae40"), d = l("map"), p = c("map");
              s({ target: "Array", proto: !0, forced: !d || !p }, {
                map: function(f) {
                  return o(this, f, arguments.length > 1 ? arguments[1] : void 0);
                }
              });
            })
          ),
          /***/
          da84: (
            /***/
            (function(i, u, r) {
              (function(s) {
                var o = function(l) {
                  return l && l.Math == Math && l;
                };
                i.exports = // eslint-disable-next-line no-undef
                o(typeof globalThis == "object" && globalThis) || o(typeof window == "object" && window) || o(typeof self == "object" && self) || o(typeof s == "object" && s) || // eslint-disable-next-line no-new-func
                Function("return this")();
              }).call(this, r("c8ba"));
            })
          ),
          /***/
          dbb4: (
            /***/
            (function(i, u, r) {
              var s = r("23e7"), o = r("83ab"), l = r("56ef"), c = r("fc6a"), d = r("06cf"), p = r("8418");
              s({ target: "Object", stat: !0, sham: !o }, {
                getOwnPropertyDescriptors: function(f) {
                  for (var m = c(f), v = d.f, g = l(m), y = {}, S = 0, E, A; g.length > S; )
                    A = v(m, E = g[S++]), A !== void 0 && p(y, E, A);
                  return y;
                }
              });
            })
          ),
          /***/
          dbf1: (
            /***/
            (function(i, u, r) {
              (function(s) {
                r.d(u, "a", function() {
                  return l;
                });
                function o() {
                  return typeof window < "u" ? window.console : s.console;
                }
                var l = o();
              }).call(this, r("c8ba"));
            })
          ),
          /***/
          ddb0: (
            /***/
            (function(i, u, r) {
              var s = r("da84"), o = r("fdbc"), l = r("e260"), c = r("9112"), d = r("b622"), p = d("iterator"), h = d("toStringTag"), f = l.values;
              for (var m in o) {
                var v = s[m], g = v && v.prototype;
                if (g) {
                  if (g[p] !== f) try {
                    c(g, p, f);
                  } catch {
                    g[p] = f;
                  }
                  if (g[h] || c(g, h, m), o[m]) {
                    for (var y in l)
                      if (g[y] !== l[y]) try {
                        c(g, y, l[y]);
                      } catch {
                        g[y] = l[y];
                      }
                  }
                }
              }
            })
          ),
          /***/
          df75: (
            /***/
            (function(i, u, r) {
              var s = r("ca84"), o = r("7839");
              i.exports = Object.keys || function(c) {
                return s(c, o);
              };
            })
          ),
          /***/
          e01a: (
            /***/
            (function(i, u, r) {
              var s = r("23e7"), o = r("83ab"), l = r("da84"), c = r("5135"), d = r("861d"), p = r("9bf2").f, h = r("e893"), f = l.Symbol;
              if (o && typeof f == "function" && (!("description" in f.prototype) || // Safari 12 bug
              f().description !== void 0)) {
                var m = {}, v = function() {
                  var w = arguments.length < 1 || arguments[0] === void 0 ? void 0 : String(arguments[0]), V = this instanceof v ? new f(w) : w === void 0 ? f() : f(w);
                  return w === "" && (m[V] = !0), V;
                };
                h(v, f);
                var g = v.prototype = f.prototype;
                g.constructor = v;
                var y = g.toString, S = String(f("test")) == "Symbol(test)", E = /^Symbol\((.*)\)[^)]+$/;
                p(g, "description", {
                  configurable: !0,
                  get: function() {
                    var w = d(this) ? this.valueOf() : this, V = y.call(w);
                    if (c(m, w)) return "";
                    var M = S ? V.slice(7, -1) : V.replace(E, "$1");
                    return M === "" ? void 0 : M;
                  }
                }), s({ global: !0, forced: !0 }, {
                  Symbol: v
                });
              }
            })
          ),
          /***/
          e163: (
            /***/
            (function(i, u, r) {
              var s = r("5135"), o = r("7b0b"), l = r("f772"), c = r("e177"), d = l("IE_PROTO"), p = Object.prototype;
              i.exports = c ? Object.getPrototypeOf : function(h) {
                return h = o(h), s(h, d) ? h[d] : typeof h.constructor == "function" && h instanceof h.constructor ? h.constructor.prototype : h instanceof Object ? p : null;
              };
            })
          ),
          /***/
          e177: (
            /***/
            (function(i, u, r) {
              var s = r("d039");
              i.exports = !s(function() {
                function o() {
                }
                return o.prototype.constructor = null, Object.getPrototypeOf(new o()) !== o.prototype;
              });
            })
          ),
          /***/
          e260: (
            /***/
            (function(i, u, r) {
              var s = r("fc6a"), o = r("44d2"), l = r("3f8c"), c = r("69f3"), d = r("7dd0"), p = "Array Iterator", h = c.set, f = c.getterFor(p);
              i.exports = d(Array, "Array", function(m, v) {
                h(this, {
                  type: p,
                  target: s(m),
                  // target
                  index: 0,
                  // next index
                  kind: v
                  // kind
                });
              }, function() {
                var m = f(this), v = m.target, g = m.kind, y = m.index++;
                return !v || y >= v.length ? (m.target = void 0, { value: void 0, done: !0 }) : g == "keys" ? { value: y, done: !1 } : g == "values" ? { value: v[y], done: !1 } : { value: [y, v[y]], done: !1 };
              }, "values"), l.Arguments = l.Array, o("keys"), o("values"), o("entries");
            })
          ),
          /***/
          e439: (
            /***/
            (function(i, u, r) {
              var s = r("23e7"), o = r("d039"), l = r("fc6a"), c = r("06cf").f, d = r("83ab"), p = o(function() {
                c(1);
              }), h = !d || p;
              s({ target: "Object", stat: !0, forced: h, sham: !d }, {
                getOwnPropertyDescriptor: function(m, v) {
                  return c(l(m), v);
                }
              });
            })
          ),
          /***/
          e538: (
            /***/
            (function(i, u, r) {
              var s = r("b622");
              u.f = s;
            })
          ),
          /***/
          e893: (
            /***/
            (function(i, u, r) {
              var s = r("5135"), o = r("56ef"), l = r("06cf"), c = r("9bf2");
              i.exports = function(d, p) {
                for (var h = o(p), f = c.f, m = l.f, v = 0; v < h.length; v++) {
                  var g = h[v];
                  s(d, g) || f(d, g, m(p, g));
                }
              };
            })
          ),
          /***/
          e8b5: (
            /***/
            (function(i, u, r) {
              var s = r("c6b6");
              i.exports = Array.isArray || function(l) {
                return s(l) == "Array";
              };
            })
          ),
          /***/
          e95a: (
            /***/
            (function(i, u, r) {
              var s = r("b622"), o = r("3f8c"), l = s("iterator"), c = Array.prototype;
              i.exports = function(d) {
                return d !== void 0 && (o.Array === d || c[l] === d);
              };
            })
          ),
          /***/
          f5df: (
            /***/
            (function(i, u, r) {
              var s = r("00ee"), o = r("c6b6"), l = r("b622"), c = l("toStringTag"), d = o(/* @__PURE__ */ (function() {
                return arguments;
              })()) == "Arguments", p = function(h, f) {
                try {
                  return h[f];
                } catch {
                }
              };
              i.exports = s ? o : function(h) {
                var f, m, v;
                return h === void 0 ? "Undefined" : h === null ? "Null" : typeof (m = p(f = Object(h), c)) == "string" ? m : d ? o(f) : (v = o(f)) == "Object" && typeof f.callee == "function" ? "Arguments" : v;
              };
            })
          ),
          /***/
          f772: (
            /***/
            (function(i, u, r) {
              var s = r("5692"), o = r("90e3"), l = s("keys");
              i.exports = function(c) {
                return l[c] || (l[c] = o(c));
              };
            })
          ),
          /***/
          fb15: (
            /***/
            (function(i, u, r) {
              if (r.r(u), typeof window < "u") {
                var s = window.document.currentScript;
                {
                  var o = r("8875");
                  s = o(), "currentScript" in document || Object.defineProperty(document, "currentScript", { get: o });
                }
                var l = s && s.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
                l && (r.p = l[1]);
              }
              r("99af"), r("4de4"), r("4160"), r("c975"), r("d81d"), r("a434"), r("159b"), r("a4d3"), r("e439"), r("dbb4"), r("b64b");
              function c(G, X, oe) {
                return X in G ? Object.defineProperty(G, X, {
                  value: oe,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                }) : G[X] = oe, G;
              }
              function d(G, X) {
                var oe = Object.keys(G);
                if (Object.getOwnPropertySymbols) {
                  var de = Object.getOwnPropertySymbols(G);
                  X && (de = de.filter(function(we) {
                    return Object.getOwnPropertyDescriptor(G, we).enumerable;
                  })), oe.push.apply(oe, de);
                }
                return oe;
              }
              function p(G) {
                for (var X = 1; X < arguments.length; X++) {
                  var oe = arguments[X] != null ? arguments[X] : {};
                  X % 2 ? d(Object(oe), !0).forEach(function(de) {
                    c(G, de, oe[de]);
                  }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(G, Object.getOwnPropertyDescriptors(oe)) : d(Object(oe)).forEach(function(de) {
                    Object.defineProperty(G, de, Object.getOwnPropertyDescriptor(oe, de));
                  });
                }
                return G;
              }
              function h(G) {
                if (Array.isArray(G)) return G;
              }
              r("e01a"), r("d28b"), r("e260"), r("d3b7"), r("3ca3"), r("ddb0");
              function f(G, X) {
                if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(G)))) {
                  var oe = [], de = !0, we = !1, je = void 0;
                  try {
                    for (var Re = G[Symbol.iterator](), Te; !(de = (Te = Re.next()).done) && (oe.push(Te.value), !(X && oe.length === X)); de = !0)
                      ;
                  } catch (ze) {
                    we = !0, je = ze;
                  } finally {
                    try {
                      !de && Re.return != null && Re.return();
                    } finally {
                      if (we) throw je;
                    }
                  }
                  return oe;
                }
              }
              r("a630"), r("fb6a"), r("b0c0"), r("25f0");
              function m(G, X) {
                (X == null || X > G.length) && (X = G.length);
                for (var oe = 0, de = new Array(X); oe < X; oe++)
                  de[oe] = G[oe];
                return de;
              }
              function v(G, X) {
                if (G) {
                  if (typeof G == "string") return m(G, X);
                  var oe = Object.prototype.toString.call(G).slice(8, -1);
                  if (oe === "Object" && G.constructor && (oe = G.constructor.name), oe === "Map" || oe === "Set") return Array.from(G);
                  if (oe === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(oe)) return m(G, X);
                }
              }
              function g() {
                throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
              }
              function y(G, X) {
                return h(G) || f(G, X) || v(G, X) || g();
              }
              function S(G) {
                if (Array.isArray(G)) return m(G);
              }
              function E(G) {
                if (typeof Symbol < "u" && Symbol.iterator in Object(G)) return Array.from(G);
              }
              function A() {
                throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
              }
              function w(G) {
                return S(G) || E(G) || v(G) || A();
              }
              var V = r("a352"), M = /* @__PURE__ */ r.n(V);
              function C(G) {
                G.parentElement !== null && G.parentElement.removeChild(G);
              }
              function R(G, X, oe) {
                var de = oe === 0 ? G.children[0] : G.children[oe - 1].nextSibling;
                G.insertBefore(X, de);
              }
              var k = r("dbf1");
              r("13d5"), r("4fad"), r("ac1f"), r("5319");
              function $(G) {
                var X = /* @__PURE__ */ Object.create(null);
                return function(de) {
                  var we = X[de];
                  return we || (X[de] = G(de));
                };
              }
              var B = /-(\w)/g, z = $(function(G) {
                return G.replace(B, function(X, oe) {
                  return oe.toUpperCase();
                });
              });
              r("5db7"), r("73d9");
              var K = ["Start", "Add", "Remove", "Update", "End"], Y = ["Choose", "Unchoose", "Sort", "Filter", "Clone"], ae = ["Move"], J = [ae, K, Y].flatMap(function(G) {
                return G;
              }).map(function(G) {
                return "on".concat(G);
              }), he = {
                manage: ae,
                manageAndEmit: K,
                emit: Y
              };
              function ce(G) {
                return J.indexOf(G) !== -1;
              }
              r("caad"), r("2ca0");
              var ye = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "link", "main", "map", "mark", "math", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "slot", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"];
              function Ce(G) {
                return ye.includes(G);
              }
              function Ee(G) {
                return ["transition-group", "TransitionGroup"].includes(G);
              }
              function Ue(G) {
                return ["id", "class", "role", "style"].includes(G) || G.startsWith("data-") || G.startsWith("aria-") || G.startsWith("on");
              }
              function Ne(G) {
                return G.reduce(function(X, oe) {
                  var de = y(oe, 2), we = de[0], je = de[1];
                  return X[we] = je, X;
                }, {});
              }
              function be(G) {
                var X = G.$attrs, oe = G.componentData, de = oe === void 0 ? {} : oe, we = Ne(Object.entries(X).filter(function(je) {
                  var Re = y(je, 2), Te = Re[0];
                  return Re[1], Ue(Te);
                }));
                return p(p({}, we), de);
              }
              function xe(G) {
                var X = G.$attrs, oe = G.callBackBuilder, de = Ne(P(X));
                Object.entries(oe).forEach(function(je) {
                  var Re = y(je, 2), Te = Re[0], ze = Re[1];
                  he[Te].forEach(function(Ie) {
                    de["on".concat(Ie)] = ze(Ie);
                  });
                });
                var we = "[data-draggable]".concat(de.draggable || "");
                return p(p({}, de), {}, {
                  draggable: we
                });
              }
              function P(G) {
                return Object.entries(G).filter(function(X) {
                  var oe = y(X, 2), de = oe[0];
                  return oe[1], !Ue(de);
                }).map(function(X) {
                  var oe = y(X, 2), de = oe[0], we = oe[1];
                  return [z(de), we];
                }).filter(function(X) {
                  var oe = y(X, 2), de = oe[0];
                  return oe[1], !ce(de);
                });
              }
              r("c740");
              function D(G, X) {
                if (!(G instanceof X))
                  throw new TypeError("Cannot call a class as a function");
              }
              function T(G, X) {
                for (var oe = 0; oe < X.length; oe++) {
                  var de = X[oe];
                  de.enumerable = de.enumerable || !1, de.configurable = !0, "value" in de && (de.writable = !0), Object.defineProperty(G, de.key, de);
                }
              }
              function L(G, X, oe) {
                return X && T(G.prototype, X), G;
              }
              var b = function(X) {
                var oe = X.el;
                return oe;
              }, x = function(X, oe) {
                return X.__draggable_context = oe;
              }, I = function(X) {
                return X.__draggable_context;
              }, N = /* @__PURE__ */ (function() {
                function G(X) {
                  var oe = X.nodes, de = oe.header, we = oe.default, je = oe.footer, Re = X.root, Te = X.realList;
                  D(this, G), this.defaultNodes = we, this.children = [].concat(w(de), w(we), w(je)), this.externalComponent = Re.externalComponent, this.rootTransition = Re.transition, this.tag = Re.tag, this.realList = Te;
                }
                return L(G, [{
                  key: "render",
                  value: function(oe, de) {
                    var we = this.tag, je = this.children, Re = this._isRootComponent, Te = Re ? {
                      default: function() {
                        return je;
                      }
                    } : je;
                    return oe(we, de, Te);
                  }
                }, {
                  key: "updated",
                  value: function() {
                    var oe = this.defaultNodes, de = this.realList;
                    oe.forEach(function(we, je) {
                      x(b(we), {
                        element: de[je],
                        index: je
                      });
                    });
                  }
                }, {
                  key: "getUnderlyingVm",
                  value: function(oe) {
                    return I(oe);
                  }
                }, {
                  key: "getVmIndexFromDomIndex",
                  value: function(oe, de) {
                    var we = this.defaultNodes, je = we.length, Re = de.children, Te = Re.item(oe);
                    if (Te === null)
                      return je;
                    var ze = I(Te);
                    if (ze)
                      return ze.index;
                    if (je === 0)
                      return 0;
                    var Ie = b(we[0]), Ae = w(Re).findIndex(function(Me) {
                      return Me === Ie;
                    });
                    return oe < Ae ? 0 : je;
                  }
                }, {
                  key: "_isRootComponent",
                  get: function() {
                    return this.externalComponent || this.rootTransition;
                  }
                }]), G;
              })(), U = r("8bbf");
              function H(G, X) {
                var oe = G[X];
                return oe ? oe() : [];
              }
              function Q(G) {
                var X = G.$slots, oe = G.realList, de = G.getKey, we = oe || [], je = ["header", "footer"].map(function(Me) {
                  return H(X, Me);
                }), Re = y(je, 2), Te = Re[0], ze = Re[1], Ie = X.item;
                if (!Ie)
                  throw new Error("draggable element must have an item slot");
                var Ae = we.flatMap(function(Me, He) {
                  return Ie({
                    element: Me,
                    index: He
                  }).map(function(Ve) {
                    return Ve.key = de(Me), Ve.props = p(p({}, Ve.props || {}), {}, {
                      "data-draggable": !0
                    }), Ve;
                  });
                });
                if (Ae.length !== we.length)
                  throw new Error("Item slot must have only one child");
                return {
                  header: Te,
                  footer: ze,
                  default: Ae
                };
              }
              function q(G) {
                var X = Ee(G), oe = !Ce(G) && !X;
                return {
                  transition: X,
                  externalComponent: oe,
                  tag: oe ? Object(U.resolveComponent)(G) : X ? U.TransitionGroup : G
                };
              }
              function Z(G) {
                var X = G.$slots, oe = G.tag, de = G.realList, we = G.getKey, je = Q({
                  $slots: X,
                  realList: de,
                  getKey: we
                }), Re = q(oe);
                return new N({
                  nodes: je,
                  root: Re,
                  realList: de
                });
              }
              function ee(G, X) {
                var oe = this;
                Object(U.nextTick)(function() {
                  return oe.$emit(G.toLowerCase(), X);
                });
              }
              function ne(G) {
                var X = this;
                return function(oe, de) {
                  if (X.realList !== null)
                    return X["onDrag".concat(G)](oe, de);
                };
              }
              function le(G) {
                var X = this, oe = ne.call(this, G);
                return function(de, we) {
                  oe.call(X, de, we), ee.call(X, G, de);
                };
              }
              var ge = null, Pe = {
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
                  default: function(X) {
                    return X;
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
              }))), tt = Object(U.defineComponent)({
                name: "draggable",
                inheritAttrs: !1,
                props: Pe,
                emits: Ke,
                data: function() {
                  return {
                    error: !1
                  };
                },
                render: function() {
                  try {
                    this.error = !1;
                    var X = this.$slots, oe = this.$attrs, de = this.tag, we = this.componentData, je = this.realList, Re = this.getKey, Te = Z({
                      $slots: X,
                      tag: de,
                      realList: je,
                      getKey: Re
                    });
                    this.componentStructure = Te;
                    var ze = be({
                      $attrs: oe,
                      componentData: we
                    });
                    return Te.render(U.h, ze);
                  } catch (Ie) {
                    return this.error = !0, Object(U.h)("pre", {
                      style: {
                        color: "red"
                      }
                    }, Ie.stack);
                  }
                },
                created: function() {
                  this.list !== null && this.modelValue !== null && k.a.error("modelValue and list props are mutually exclusive! Please set one or another.");
                },
                mounted: function() {
                  var X = this;
                  if (!this.error) {
                    var oe = this.$attrs, de = this.$el, we = this.componentStructure;
                    we.updated();
                    var je = xe({
                      $attrs: oe,
                      callBackBuilder: {
                        manageAndEmit: function(ze) {
                          return le.call(X, ze);
                        },
                        emit: function(ze) {
                          return ee.bind(X, ze);
                        },
                        manage: function(ze) {
                          return ne.call(X, ze);
                        }
                      }
                    }), Re = de.nodeType === 1 ? de : de.parentElement;
                    this._sortable = new M.a(Re, je), this.targetDomElement = Re, Re.__draggable_component__ = this;
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
                    var X = this.list;
                    return X || this.modelValue;
                  },
                  getKey: function() {
                    var X = this.itemKey;
                    return typeof X == "function" ? X : function(oe) {
                      return oe[X];
                    };
                  }
                },
                watch: {
                  $attrs: {
                    handler: function(X) {
                      var oe = this._sortable;
                      oe && P(X).forEach(function(de) {
                        var we = y(de, 2), je = we[0], Re = we[1];
                        oe.option(je, Re);
                      });
                    },
                    deep: !0
                  }
                },
                methods: {
                  getUnderlyingVm: function(X) {
                    return this.componentStructure.getUnderlyingVm(X) || null;
                  },
                  getUnderlyingPotencialDraggableComponent: function(X) {
                    return X.__draggable_component__;
                  },
                  emitChanges: function(X) {
                    var oe = this;
                    Object(U.nextTick)(function() {
                      return oe.$emit("change", X);
                    });
                  },
                  alterList: function(X) {
                    if (this.list) {
                      X(this.list);
                      return;
                    }
                    var oe = w(this.modelValue);
                    X(oe), this.$emit("update:modelValue", oe);
                  },
                  spliceList: function() {
                    var X = arguments, oe = function(we) {
                      return we.splice.apply(we, w(X));
                    };
                    this.alterList(oe);
                  },
                  updatePosition: function(X, oe) {
                    var de = function(je) {
                      return je.splice(oe, 0, je.splice(X, 1)[0]);
                    };
                    this.alterList(de);
                  },
                  getRelatedContextFromMoveEvent: function(X) {
                    var oe = X.to, de = X.related, we = this.getUnderlyingPotencialDraggableComponent(oe);
                    if (!we)
                      return {
                        component: we
                      };
                    var je = we.realList, Re = {
                      list: je,
                      component: we
                    };
                    if (oe !== de && je) {
                      var Te = we.getUnderlyingVm(de) || {};
                      return p(p({}, Te), Re);
                    }
                    return Re;
                  },
                  getVmIndexFromDomIndex: function(X) {
                    return this.componentStructure.getVmIndexFromDomIndex(X, this.targetDomElement);
                  },
                  onDragStart: function(X) {
                    this.context = this.getUnderlyingVm(X.item), X.item._underlying_vm_ = this.clone(this.context.element), ge = X.item;
                  },
                  onDragAdd: function(X) {
                    var oe = X.item._underlying_vm_;
                    if (oe !== void 0) {
                      C(X.item);
                      var de = this.getVmIndexFromDomIndex(X.newIndex);
                      this.spliceList(de, 0, oe);
                      var we = {
                        element: oe,
                        newIndex: de
                      };
                      this.emitChanges({
                        added: we
                      });
                    }
                  },
                  onDragRemove: function(X) {
                    if (R(this.$el, X.item, X.oldIndex), X.pullMode === "clone") {
                      C(X.clone);
                      return;
                    }
                    var oe = this.context, de = oe.index, we = oe.element;
                    this.spliceList(de, 1);
                    var je = {
                      element: we,
                      oldIndex: de
                    };
                    this.emitChanges({
                      removed: je
                    });
                  },
                  onDragUpdate: function(X) {
                    C(X.item), R(X.from, X.item, X.oldIndex);
                    var oe = this.context.index, de = this.getVmIndexFromDomIndex(X.newIndex);
                    this.updatePosition(oe, de);
                    var we = {
                      element: this.context.element,
                      oldIndex: oe,
                      newIndex: de
                    };
                    this.emitChanges({
                      moved: we
                    });
                  },
                  computeFutureIndex: function(X, oe) {
                    if (!X.element)
                      return 0;
                    var de = w(oe.to.children).filter(function(Te) {
                      return Te.style.display !== "none";
                    }), we = de.indexOf(oe.related), je = X.component.getVmIndexFromDomIndex(we), Re = de.indexOf(ge) !== -1;
                    return Re || !oe.willInsertAfter ? je : je + 1;
                  },
                  onDragMove: function(X, oe) {
                    var de = this.move, we = this.realList;
                    if (!de || !we)
                      return !0;
                    var je = this.getRelatedContextFromMoveEvent(X), Re = this.computeFutureIndex(je, X), Te = p(p({}, this.context), {}, {
                      futureIndex: Re
                    }), ze = p(p({}, X), {}, {
                      relatedContext: je,
                      draggedContext: Te
                    });
                    return de(ze, oe);
                  },
                  onDragEnd: function() {
                    ge = null;
                  }
                }
              }), qe = tt;
              u.default = qe;
            })
          ),
          /***/
          fb6a: (
            /***/
            (function(i, u, r) {
              var s = r("23e7"), o = r("861d"), l = r("e8b5"), c = r("23cb"), d = r("50c4"), p = r("fc6a"), h = r("8418"), f = r("b622"), m = r("1dde"), v = r("ae40"), g = m("slice"), y = v("slice", { ACCESSORS: !0, 0: 0, 1: 2 }), S = f("species"), E = [].slice, A = Math.max;
              s({ target: "Array", proto: !0, forced: !g || !y }, {
                slice: function(V, M) {
                  var C = p(this), R = d(C.length), k = c(V, R), $ = c(M === void 0 ? R : M, R), B, z, K;
                  if (l(C) && (B = C.constructor, typeof B == "function" && (B === Array || l(B.prototype)) ? B = void 0 : o(B) && (B = B[S], B === null && (B = void 0)), B === Array || B === void 0))
                    return E.call(C, k, $);
                  for (z = new (B === void 0 ? Array : B)(A($ - k, 0)), K = 0; k < $; k++, K++) k in C && h(z, K, C[k]);
                  return z.length = K, z;
                }
              });
            })
          ),
          /***/
          fc6a: (
            /***/
            (function(i, u, r) {
              var s = r("44ad"), o = r("1d80");
              i.exports = function(l) {
                return s(o(l));
              };
            })
          ),
          /***/
          fdbc: (
            /***/
            (function(i, u) {
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
            })
          ),
          /***/
          fdbf: (
            /***/
            (function(i, u, r) {
              var s = r("4930");
              i.exports = s && !Symbol.sham && typeof Symbol.iterator == "symbol";
            })
          )
          /******/
        }).default
      );
    });
  })(yo)), yo.exports;
}
var _v = qv();
const Vo = /* @__PURE__ */ Ha(_v), em = {
  name: "VActions",
  directives: {
    clickOutside: Hs
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
}, tm = { class: "flex items-center" }, nm = { class: "relative flex items-center" }, rm = {
  key: 0,
  width: "16",
  height: "4",
  viewBox: "0 0 16 4",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function om(t, e, n, a, i, u) {
  const r = fs("click-outside");
  return et((_(), re("div", tm, [
    j("div", nm, [
      j("div", {
        ref: "button",
        class: rt([{ active: i.active }, "relative flex cursor-pointer hover:bg-gray-200 w-5 h-5 items-center justify-center rounded-lg"]),
        onClick: e[0] || (e[0] = ar((s) => i.active = !i.active, ["prevent"]))
      }, [
        n.showActionIcon ? (_(), re("svg", rm, [...e[1] || (e[1] = [
          j("path", {
            d: "M8.00065 2.83341C8.46089 2.83341 8.83398 2.46032 8.83398 2.00008C8.83398 1.53984 8.46089 1.16675 8.00065 1.16675C7.54041 1.16675 7.16732 1.53984 7.16732 2.00008C7.16732 2.46032 7.54041 2.83341 8.00065 2.83341Z",
            stroke: "#98A2B3",
            "stroke-width": "1.66667",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1),
          j("path", {
            d: "M13.834 2.83341C14.2942 2.83341 14.6673 2.46032 14.6673 2.00008C14.6673 1.53984 14.2942 1.16675 13.834 1.16675C13.3737 1.16675 13.0007 1.53984 13.0007 2.00008C13.0007 2.46032 13.3737 2.83341 13.834 2.83341Z",
            stroke: "#98A2B3",
            "stroke-width": "1.66667",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1),
          j("path", {
            d: "M2.16732 2.83341C2.62755 2.83341 3.00065 2.46032 3.00065 2.00008C3.00065 1.53984 2.62755 1.16675 2.16732 1.16675C1.70708 1.16675 1.33398 1.53984 1.33398 2.00008C1.33398 2.46032 1.70708 2.83341 2.16732 2.83341Z",
            stroke: "#98A2B3",
            "stroke-width": "1.66667",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : Fe("", !0),
        xn(t.$slots, "button")
      ], 2),
      ie(Ma, { name: "fade" }, {
        default: Tt(() => [
          i.active ? (_(), re("div", {
            key: 0,
            class: rt(["absolute right-0 top-full z-20 w-[200px] rounded bg-white shadow-xl ring-1 ring-neutral-100", n.classes])
          }, [
            xn(t.$slots, "dropdown")
          ], 2)) : Fe("", !0)
        ]),
        _: 3
      })
    ])
  ])), [
    [r, () => this.active = !1]
  ]);
}
const Ml = /* @__PURE__ */ bt(em, [["render", om]]), am = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
};
function im(t, e) {
  return _(), re("svg", am, [...e[0] || (e[0] = [
    j("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M16 6v-.8c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C14.48 2 13.92 2 12.8 2h-1.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C8 3.52 8 4.08 8 5.2V6m2 5.5v5m4-5v5M3 6h18m-2 0v11.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C16.72 22 15.88 22 14.2 22H9.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C5 19.72 5 18.88 5 17.2V6"
    }, null, -1)
  ])]);
}
const Ia = { render: im }, sm = {
  name: "VGrid",
  inject: ["bus"],
  components: { VActions: Ml, VToggle: oi, draggable: Vo, Trash: Ia },
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
    templateRowCount: {
      type: Number,
      default: null
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
    },
    canRemoveRow() {
      return this.grid.length > 1;
    }
  },
  mounted() {
    this.$emit("update:templateRowCount", this.grid.length);
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
        callback: async (n) => {
          this.grid[t] = n;
        },
        cancelCallback: () => {
        }
      });
    },
    removeField(t, e) {
      this.grid[t][e] = [];
    },
    removeColumn(t, e) {
      this.grid.forEach((n) => {
        n.splice(e, 1);
      }), this.previousGrid = Vt(this.grid);
    },
    removeRow(t) {
      this.canRemoveRow && (this.grid.splice(t, 1), this.previousGrid = Vt(this.grid));
    },
    findFieldPosition(t) {
      for (let e = 0; e < this.previousGrid.length; e++)
        for (let n = 0; n < this.previousGrid[e].length; n++) {
          const a = this.previousGrid[e][n];
          if (Array.isArray(a) && a.some((i) => i.id === t.id))
            return { rowIndex: e, colIndex: n };
        }
      return null;
    },
    onDrag() {
      this.previousGrid = Vt(this.grid);
    },
    handleAdd(t, e, n) {
      const a = Vt(t.item._underlying_vm_), i = this.findFieldPosition(a), u = this.previousGrid[e][n];
      if (a.type === "grid") {
        this.grid[e][n] = [];
        return;
      }
      this.grid[e][n].length > 1 && (i && Object.keys(i).length && u[0].id !== a.id && (this.grid[i.rowIndex][i.colIndex] = [], this.grid[i.rowIndex][i.colIndex].push(u[0])), this.grid[e][n] = [], this.grid[e][n].push(a)), this.previousGrid = Vt(this.grid);
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
        this.$emit("update:modelValue", t), this.$emit("update:templateRowCount", t.length);
      }
    },
    localAllowToAdd: {
      handler(t) {
        this.$emit("update:allowAddRow", t);
      }
    }
  }
}, lm = { class: "flex justify-between py-2" }, um = { class: "grid gap-2 w-full" }, cm = { class: "pl-1 pr-3 py-2.5 w-full bg-white rounded-lg flex items-center gap-2" }, dm = { class: "flex flex-row justify-between items-center w-full" }, fm = { class: "text-sm text-gray-900" }, hm = { class: "divide-y text-sm text-gray-700" }, pm = ["onClick"], vm = ["onClick"], mm = ["onClick"], gm = ["onClick"], ym = { class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm text-gray-600 z-0" }, bm = { key: 0 }, xm = ["onClick"], Sm = {
  key: 0,
  class: "mt-2 flex gap-2"
};
function Em(t, e, n, a, i, u) {
  const r = Zt("v-toggle"), s = Zt("v-actions"), o = Zt("draggable"), l = Zt("Trash");
  return _(), re("div", null, [
    ie(r, {
      class: "mt-3 mb-1",
      title: "Allow form users to add rows when filling out the form",
      modelValue: i.localAllowToAdd,
      "onUpdate:modelValue": e[0] || (e[0] = (c) => i.localAllowToAdd = c)
    }, null, 8, ["modelValue"]),
    j("div", lm, [
      e[4] || (e[4] = j("h4", { class: "text-base font-semibold text-gray-900" }, "Define columns/rows", -1)),
      j("div", null, [
        j("a", {
          onClick: e[1] || (e[1] = (...c) => u.addColumn && u.addColumn(...c)),
          class: "cursor-pointer text-brand-700 flex items-center text-sm font-semibold hover:bg-brand-50 p-1 gap-1 rounded"
        }, [...e[3] || (e[3] = [
          j("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            j("path", {
              d: "M6.99935 1.1665V12.8332M1.16602 6.99984H12.8327",
              stroke: "currentColor",
              "stroke-width": "1.66667",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            })
          ], -1),
          Qt(" Add Column ", -1)
        ])])
      ])
    ]),
    j("div", um, [
      (_(!0), re(Dt, null, bn(i.grid, (c, d) => (_(), re("div", {
        key: "row-" + d,
        class: rt(["flex gap-2 relative", { "pr-10": u.canRemoveRow }])
      }, [
        (_(!0), re(Dt, null, bn(c, (p, h) => (_(), re("div", {
          key: "cell-" + d + "-" + h,
          class: rt(u.getClassForItem(i.grid[d], h))
        }, [
          ie(o, {
            "item-key": "id",
            modelValue: i.grid[d][h],
            "onUpdate:modelValue": (f) => i.grid[d][h] = f,
            onAdd: (f) => u.handleAdd(f, d, h),
            onDrag: u.onDrag,
            "swap-threshold": "0.65",
            group: { name: `${d} - ${h}`, pull: !0, put: !0 },
            class: rt(["w-full h-full items-center justify-center", { flex: !i.grid[d][h].length }]),
            "ghost-class": "dragging-item"
          }, {
            item: Tt(({ element: f }) => [
              j("div", cm, [
                e[9] || (e[9] = j("svg", {
                  class: "cursor-pointer",
                  width: "8",
                  height: "13",
                  viewBox: "0 0 7 13",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  j("rect", {
                    x: "1",
                    y: "1",
                    width: "2",
                    height: "2",
                    fill: "#667085"
                  }),
                  j("rect", {
                    x: "4",
                    y: "1",
                    width: "2",
                    height: "2",
                    fill: "#667085"
                  }),
                  j("rect", {
                    x: "1",
                    y: "4",
                    width: "2",
                    height: "2",
                    fill: "#667085"
                  }),
                  j("rect", {
                    x: "4",
                    y: "4",
                    width: "2",
                    height: "2",
                    fill: "#667085"
                  }),
                  j("rect", {
                    x: "1",
                    y: "7",
                    width: "2",
                    height: "2",
                    fill: "#667085"
                  }),
                  j("rect", {
                    x: "1",
                    y: "10",
                    width: "2",
                    height: "2",
                    fill: "#667085"
                  }),
                  j("rect", {
                    x: "4",
                    y: "7",
                    width: "2",
                    height: "2",
                    fill: "#667085"
                  }),
                  j("rect", {
                    x: "4",
                    y: "10",
                    width: "2",
                    height: "2",
                    fill: "#667085"
                  })
                ], -1)),
                j("div", dm, [
                  j("span", fm, $e(f.label), 1),
                  ie(s, null, {
                    dropdown: Tt(() => [
                      j("ul", hm, [
                        j("li", {
                          onClick: (m) => u.edit(d),
                          class: "cursor-pointer flex items-center p-2 hover:bg-brand-50 gap-2 rounded-t"
                        }, [...e[5] || (e[5] = [
                          j("svg", {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 16 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                          }, [
                            j("path", {
                              d: "M1.66602 14.3334L5.36553 12.9105C5.60216 12.8195 5.72047 12.774 5.83116 12.7146C5.92948 12.6618 6.02322 12.6009 6.11138 12.5324C6.21063 12.4554 6.30027 12.3658 6.47954 12.1865L13.9994 4.66671C14.7357 3.93033 14.7357 2.73642 13.9994 2.00004C13.263 1.26366 12.0691 1.26366 11.3327 2.00004L3.81287 9.51985C3.6336 9.69912 3.54396 9.78876 3.46694 9.88801C3.39853 9.97617 3.33762 10.0699 3.28484 10.1682C3.22542 10.2789 3.17991 10.3972 3.0889 10.6339L1.66602 14.3334ZM1.66602 14.3334L3.0381 10.766C3.13628 10.5107 3.18537 10.3831 3.26958 10.3246C3.34316 10.2735 3.43422 10.2542 3.52221 10.271C3.6229 10.2902 3.7196 10.3869 3.913 10.5803L5.41906 12.0864C5.61246 12.2798 5.70916 12.3765 5.72839 12.4772C5.7452 12.5652 5.72587 12.6562 5.67478 12.7298C5.61631 12.814 5.48867 12.8631 5.2334 12.9613L1.66602 14.3334Z",
                              stroke: "#667085",
                              "stroke-width": "1.5",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            })
                          ], -1),
                          j("span", null, "Edit", -1)
                        ])], 8, pm),
                        j("li", {
                          onClick: (m) => u.removeField(d, h),
                          class: "cursor-pointer flex items-center gap-2 p-2 hover:bg-brand-200"
                        }, [...e[6] || (e[6] = [
                          j("svg", {
                            width: "14",
                            height: "16",
                            viewBox: "0 0 14 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                          }, [
                            j("path", {
                              d: "M9.66667 3.99992V3.46659C9.66667 2.71985 9.66667 2.34648 9.52134 2.06126C9.39351 1.81038 9.18954 1.60641 8.93865 1.47858C8.65344 1.33325 8.28007 1.33325 7.53333 1.33325H6.46667C5.71993 1.33325 5.34656 1.33325 5.06135 1.47858C4.81046 1.60641 4.60649 1.81038 4.47866 2.06126C4.33333 2.34648 4.33333 2.71985 4.33333 3.46659V3.99992M5.66667 7.66659V10.9999M8.33333 7.66659V10.9999M1 3.99992H13M11.6667 3.99992V11.4666C11.6667 12.5867 11.6667 13.1467 11.4487 13.5746C11.2569 13.9509 10.951 14.2569 10.5746 14.4486C10.1468 14.6666 9.58677 14.6666 8.46667 14.6666H5.53333C4.41323 14.6666 3.85318 14.6666 3.42535 14.4486C3.04903 14.2569 2.74307 13.9509 2.55132 13.5746C2.33333 13.1467 2.33333 12.5867 2.33333 11.4666V3.99992",
                              stroke: "#667085",
                              "stroke-width": "1.5",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            })
                          ], -1),
                          j("span", null, "Remove this cell", -1)
                        ])], 8, vm),
                        u.canRemoveRow ? (_(), re("li", {
                          key: 0,
                          onClick: (m) => u.removeRow(d),
                          class: "cursor-pointer flex items-center gap-2 p-2 hover:bg-brand-50"
                        }, [...e[7] || (e[7] = [
                          j("svg", {
                            width: "14",
                            height: "16",
                            viewBox: "0 0 14 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                          }, [
                            j("path", {
                              d: "M9.66667 3.99992V3.46659C9.66667 2.71985 9.66667 2.34648 9.52134 2.06126C9.39351 1.81038 9.18954 1.60641 8.93865 1.47858C8.65344 1.33325 8.28007 1.33325 7.53333 1.33325H6.46667C5.71993 1.33325 5.34656 1.33325 5.06135 1.47858C4.81046 1.60641 4.60649 1.81038 4.47866 2.06126C4.33333 2.34648 4.33333 2.71985 4.33333 3.46659V3.99992M5.66667 7.66659V10.9999M8.33333 7.66659V10.9999M1 3.99992H13M11.6667 3.99992V11.4666C11.6667 12.5867 11.6667 13.1467 11.4487 13.5746C11.2569 13.9509 10.951 14.2569 10.5746 14.4486C10.1468 14.6666 9.58677 14.6666 8.46667 14.6666H5.53333C4.41323 14.6666 3.85318 14.6666 3.42535 14.4486C3.04903 14.2569 2.74307 13.9509 2.55132 13.5746C2.33333 13.1467 2.33333 12.5867 2.33333 11.4666V3.99992",
                              stroke: "#667085",
                              "stroke-width": "1.5",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            })
                          ], -1),
                          j("span", null, "Remove whole row", -1)
                        ])], 8, mm)) : Fe("", !0),
                        j("li", {
                          onClick: (m) => u.removeColumn(d, h),
                          class: "cursor-pointer flex items-center gap-2 p-2 hover:bg-brand-50 rounded-b"
                        }, [...e[8] || (e[8] = [
                          j("svg", {
                            width: "14",
                            height: "16",
                            viewBox: "0 0 14 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                          }, [
                            j("path", {
                              d: "M9.66667 3.99992V3.46659C9.66667 2.71985 9.66667 2.34648 9.52134 2.06126C9.39351 1.81038 9.18954 1.60641 8.93865 1.47858C8.65344 1.33325 8.28007 1.33325 7.53333 1.33325H6.46667C5.71993 1.33325 5.34656 1.33325 5.06135 1.47858C4.81046 1.60641 4.60649 1.81038 4.47866 2.06126C4.33333 2.34648 4.33333 2.71985 4.33333 3.46659V3.99992M5.66667 7.66659V10.9999M8.33333 7.66659V10.9999M1 3.99992H13M11.6667 3.99992V11.4666C11.6667 12.5867 11.6667 13.1467 11.4487 13.5746C11.2569 13.9509 10.951 14.2569 10.5746 14.4486C10.1468 14.6666 9.58677 14.6666 8.46667 14.6666H5.53333C4.41323 14.6666 3.85318 14.6666 3.42535 14.4486C3.04903 14.2569 2.74307 13.9509 2.55132 13.5746C2.33333 13.1467 2.33333 12.5867 2.33333 11.4666V3.99992",
                              stroke: "#667085",
                              "stroke-width": "1.5",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            })
                          ], -1),
                          j("span", null, "Remove whole column", -1)
                        ])], 8, gm)
                      ])
                    ]),
                    _: 2
                  }, 1024)
                ])
              ])
            ]),
            _: 2
          }, 1032, ["modelValue", "onUpdate:modelValue", "onAdd", "onDrag", "group", "class"]),
          et(j("p", ym, [
            n.isDragging ? Fe("", !0) : (_(), re("span", bm, "Drag a layout/component in"))
          ], 512), [
            [du, !i.grid[d][h].length]
          ])
        ], 2))), 128)),
        u.canRemoveRow ? (_(), re("a", {
          key: 0,
          class: "cursor-pointer absolute top-1/2 right-0 -translate-y-1/2",
          title: "Remove whole row",
          onClick: (p) => u.removeRow(d)
        }, [
          ie(l, { class: "w-5 h-5 text-gray-400 hover:text-red-600" })
        ], 8, xm)) : Fe("", !0)
      ], 2))), 128))
    ]),
    n.allowAddRowAsTemplate ? (_(), re("div", Sm, [
      j("a", {
        onClick: e[2] || (e[2] = (...c) => u.addRow && u.addRow(...c)),
        class: "cursor-pointer text-brand-700 flex items-center text-sm font-semibold hover:bg-brand-50 p-1 gap-1 rounded"
      }, [...e[10] || (e[10] = [
        j("svg", {
          width: "14",
          height: "14",
          viewBox: "0 0 14 14",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, [
          j("path", {
            d: "M6.99935 1.1665V12.8332M1.16602 6.99984H12.8327",
            stroke: "currentColor",
            "stroke-width": "1.66667",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          })
        ], -1),
        Qt(" Add Row ", -1)
      ])])
    ])) : Fe("", !0)
  ]);
}
const wm = /* @__PURE__ */ bt(sm, [["render", Em]]), Tm = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "8",
  height: "13",
  fill: "none",
  viewBox: "0 0 7 13"
};
function Am(t, e) {
  return _(), re("svg", Tm, [...e[0] || (e[0] = [
    j("path", {
      fill: "#667085",
      d: "M1 1h2v2H1zM4 1h2v2H4zM1 4h2v2H1zM4 4h2v2H4zM1 7h2v2H1zM1 10h2v2H1zM4 7h2v2H4zM4 10h2v2H4z"
    }, null, -1)
  ])]);
}
const cs = { render: Am }, Cm = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
};
function Om(t, e) {
  return _(), re("svg", Cm, [...e[0] || (e[0] = [
    j("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m18 15-6-6-6 6"
    }, null, -1)
  ])]);
}
const Rm = { render: Om }, Pm = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
};
function Im(t, e) {
  return _(), re("svg", Pm, [...e[0] || (e[0] = [
    j("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m6 9 6 6 6-6"
    }, null, -1)
  ])]);
}
const Dm = { render: Im }, Fm = { class: "form-builder-field__header handle" }, Mm = ["onClick"], Lm = { class: "form-builder-field__type-title" }, Um = { class: "form-builder-field__header-actions" }, Nm = {
  key: 0,
  class: "form-builder-field__prop form-builder-field__options"
}, jm = { class: "form-builder-field__actions-menu" }, km = ["onClick"], Vm = { class: "form-builder-field__body" }, $m = { class: "form-builder-field__prop" }, Bm = ["onUpdate:modelValue"], Hm = { class: "form-builder-field__prop" }, zm = ["onUpdate:modelValue"], Gm = { class: "form-builder-field__prop" }, Wm = ["onUpdate:modelValue", "placeholder"], Ym = { class: "form-builder-field__two-columns" }, Km = { class: "form-builder-field__prop" }, Xm = ["onUpdate:modelValue"], Jm = { class: "form-builder-field__prop form-builder-field__prop--width" }, Qm = ["onUpdate:modelValue"], Zm = { class: "form-builder-field__prop" }, qm = ["onUpdate:modelValue"], _m = {
  key: 0,
  class: "form-builder-field__prop"
}, eg = ["onUpdate:modelValue"], tg = { class: "form-builder-field__row" }, ng = {
  key: 0,
  class: "form-builder-field__prop form-builder-field__prop--grow form-builder-field__prop--width"
}, rg = ["onUpdate:modelValue"], og = {
  key: 1,
  class: "form-builder-field__prop form-builder-field__prop--grow"
}, ag = ["onUpdate:modelValue"], ig = {
  key: 0,
  class: "form-builder-field__two-columns"
}, sg = { class: "form-builder-field__prop" }, lg = ["onUpdate:modelValue"], ug = {
  key: 0,
  class: "form-builder-field__prop form-builder-field__prop--width"
}, cg = ["onUpdate:modelValue"], dg = { class: "form-builder-field__prop" }, fg = { class: "form-builder-field__label" }, hg = ["onUpdate:modelValue"], pg = { class: "form-builder-field__two-columns" }, vg = {
  key: 0,
  class: "form-builder-field__prop"
}, mg = ["onUpdate:modelValue"], gg = {
  key: 1,
  class: "form-builder-field__prop form-builder-field__prop--width"
}, yg = ["onUpdate:modelValue"], bg = { class: "form-builder-field__row" }, xg = {
  key: 0,
  class: "form-builder-field__prop form-builder-field__prop--grow"
}, Sg = ["onUpdate:modelValue"], Eg = {
  key: 1,
  class: "form-builder-field__prop form-builder-field__prop--grow"
}, wg = ["onUpdate:modelValue"], Tg = {
  key: 2,
  class: "form-builder-field__prop form-builder-field__options"
}, Ag = { class: "form-builder-field__options-header" }, Cg = ["onClick"], Og = { class: "form-builder-field__option" }, Rg = ["onUpdate:modelValue"], Pg = ["onClick"], Ig = { key: 5 }, Dg = ["onClick"], Fg = {
  key: 0,
  class: "form-builder-field__custom-actions"
}, Mg = ["onClick"], Lg = { key: 0 }, Ll = {
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
    const n = t, a = Ze({}), i = e, u = Ze([...n.modelValue]), r = ["select", "check-group", "radio-group"];
    To(
      u,
      (p) => {
        i("update:modelValue", p);
      },
      { deep: !0 }
    ), Fr(() => {
      u.value.forEach((p, h) => {
        var f;
        a.value[h] = !!((f = p.actions) != null && f.length);
      });
    });
    const s = (p, h) => {
      p.hasOwnProperty("actions") || (p = Object.assign(p, { actions: [] })), Array.isArray(p.actions) || (p.actions = []);
      const f = p.actions.indexOf(h);
      f === -1 ? p.actions.push(h) : p.actions.splice(f, 1);
    }, o = (p) => {
      switch (p.type) {
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
          return p.type.split("_").map((h) => h.charAt(0).toUpperCase() + h.slice(1)).join(" ");
      }
    }, l = (p) => {
      u.value.splice(p, 1);
    }, c = (p) => {
      p.options.push("Option " + (p.options.length + 1));
    }, d = (p, h) => {
      p.options.splice(h, 1);
    };
    return (p, h) => (_(), qt(_e(Vo), {
      class: rt(["form-builder-draggable__list", { "form-builder-draggable__list--compact": t.disableDropzone }]),
      modelValue: u.value,
      "onUpdate:modelValue": h[0] || (h[0] = (f) => u.value = f),
      "item-key": "id",
      "ghost-class": "dragging-item",
      sort: !0,
      "empty-insert-threshold": 0,
      "inverted-swap-threshold": 0,
      group: { name: "fields", pull: !1, put: !0 },
      handle: ".handle"
    }, {
      item: Tt(({ element: f, index: m }) => [
        j("div", {
          class: rt(["form-builder-field", `form-builder-field--${f.type}`])
        }, [
          j("div", Fm, [
            j("h2", {
              onClick: (v) => f.isShowing = !f.isShowing,
              class: "form-builder-field__heading"
            }, [
              ie(_e(cs), { class: "form-builder-field__handle-icon" }),
              j("span", Lm, $e(o(f)), 1)
            ], 8, Mm),
            j("div", Um, [
              f.hasOwnProperty("required") ? (_(), re("div", Nm, [
                ie(oi, {
                  title: "Required",
                  modelValue: f.required,
                  "onUpdate:modelValue": (v) => f.required = v
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ])) : Fe("", !0),
              ie(Ml, null, {
                dropdown: Tt(() => [
                  j("ul", jm, [
                    j("li", {
                      onClick: (v) => l(m),
                      class: "form-builder-field__actions-item"
                    }, [
                      ie(_e(Ia), { class: "form-builder-field__icon" }),
                      h[1] || (h[1] = j("span", null, "Remove", -1))
                    ], 8, km)
                  ])
                ]),
                _: 2
              }, 1024)
            ])
          ]),
          j("div", Vm, [
            f != null && f.builder ? (_(), qt(Hn(f.builder), fu(La({ key: 0 }, { component: f })), null, 16)) : f.type === "grid" ? (_(), re(Dt, { key: 1 }, [
              j("div", $m, [
                h[2] || (h[2] = j("span", { class: "form-builder-field__label" }, "Label", -1)),
                et(j("input", {
                  type: "text",
                  "onUpdate:modelValue": (v) => f.label = v
                }, null, 8, Bm), [
                  [yt, f.label]
                ])
              ]),
              j("div", Hm, [
                h[3] || (h[3] = j("span", { class: "form-builder-field__label" }, "Supporting Text", -1)),
                et(j("input", {
                  type: "text",
                  "onUpdate:modelValue": (v) => f.hint = v
                }, null, 8, zm), [
                  [yt, f.hint]
                ])
              ]),
              ie(wm, {
                modelValue: f.grid,
                "onUpdate:modelValue": (v) => f.grid = v,
                "is-dragging": t.isDragging,
                "allow-add-row": f.allow_add_row,
                "onUpdate:allowAddRow": (v) => f.allow_add_row = v,
                "template-row-count": f.template_row_count,
                "onUpdate:templateRowCount": (v) => f.template_row_count = v
              }, null, 8, ["modelValue", "onUpdate:modelValue", "is-dragging", "allow-add-row", "onUpdate:allowAddRow", "template-row-count", "onUpdate:templateRowCount"])
            ], 64)) : f.type === "paragraph" ? (_(), re(Dt, { key: 2 }, [
              j("div", Gm, [
                h[4] || (h[4] = j("span", { class: "form-builder-field__label" }, "Content", -1)),
                et(j("textarea", {
                  cols: "30",
                  rows: "3",
                  "onUpdate:modelValue": (v) => f.content = v,
                  placeholder: f.placeholder
                }, null, 8, Wm), [
                  [yt, f.content]
                ])
              ]),
              j("div", Ym, [
                j("div", Km, [
                  h[6] || (h[6] = j("span", { class: "form-builder-field__label" }, "Type", -1)),
                  et(j("select", {
                    "onUpdate:modelValue": (v) => f.content_type = v
                  }, [...h[5] || (h[5] = [
                    j("option", { value: "p" }, "p", -1),
                    j("option", { value: "blockquote" }, "blockquote", -1),
                    j("option", { value: "address" }, "address", -1)
                  ])], 8, Xm), [
                    [ro, f.content_type]
                  ])
                ]),
                j("div", Jm, [
                  h[7] || (h[7] = j("span", { class: "form-builder-field__label" }, "Classes", -1)),
                  et(j("input", {
                    "onUpdate:modelValue": (v) => f.class = v,
                    type: "text",
                    name: "classes",
                    placeholder: "Input space separated classes"
                  }, null, 8, Qm), [
                    [yt, f.class]
                  ])
                ])
              ])
            ], 64)) : f.type === "checkbox" ? (_(), re(Dt, { key: 3 }, [
              j("div", Zm, [
                h[8] || (h[8] = j("span", { class: "form-builder-field__label" }, "Label", -1)),
                et(j("input", {
                  type: "text",
                  "onUpdate:modelValue": (v) => f.label = v
                }, null, 8, qm), [
                  [yt, f.label]
                ])
              ]),
              f.hasOwnProperty("hint") ? (_(), re("div", _m, [
                h[9] || (h[9] = j("span", { class: "form-builder-field__label" }, "Supporting Text", -1)),
                et(j("textarea", {
                  cols: "30",
                  rows: "3",
                  "onUpdate:modelValue": (v) => f.hint = v,
                  placeholder: "Supporting text"
                }, null, 8, eg), [
                  [yt, f.hint]
                ])
              ])) : Fe("", !0),
              j("div", tg, [
                f.class ? (_(), re("div", ng, [
                  h[11] || (h[11] = j("span", { class: "form-builder-field__label" }, "Width", -1)),
                  et(j("select", {
                    "onUpdate:modelValue": (v) => f.class = v
                  }, [...h[10] || (h[10] = [
                    j("option", { value: "w-full" }, "Full", -1),
                    j("option", { value: "w-1/2" }, "Half", -1)
                  ])], 8, rg), [
                    [ro, f.class]
                  ])
                ])) : Fe("", !0),
                f.hasOwnProperty("defined_key") ? (_(), re("div", og, [
                  h[12] || (h[12] = j("span", { class: "form-builder-field__label" }, "Defined Key", -1)),
                  et(j("input", {
                    type: "text",
                    name: "defined_key",
                    "onUpdate:modelValue": (v) => f.defined_key = v
                  }, null, 8, ag), [
                    [yt, f.defined_key]
                  ])
                ])) : Fe("", !0)
              ])
            ], 64)) : (_(), re(Dt, { key: 4 }, [
              ["check-group", "radio-group", "signature", "file-upload"].includes(f.type) ? (_(), re("div", ig, [
                j("div", sg, [
                  h[13] || (h[13] = j("span", { class: "form-builder-field__label" }, "Label", -1)),
                  et(j("input", {
                    type: "text",
                    "onUpdate:modelValue": (v) => f.label = v
                  }, null, 8, lg), [
                    [yt, f.label]
                  ])
                ]),
                f.class ? (_(), re("div", ug, [
                  h[15] || (h[15] = j("span", { class: "form-builder-field__label" }, "Width", -1)),
                  et(j("select", {
                    "onUpdate:modelValue": (v) => f.class = v
                  }, [...h[14] || (h[14] = [
                    j("option", { value: "w-full" }, "Full", -1),
                    j("option", { value: "w-1/2" }, "Half", -1)
                  ])], 8, cg), [
                    [ro, f.class]
                  ])
                ])) : Fe("", !0)
              ])) : (_(), re(Dt, { key: 1 }, [
                j("div", dg, [
                  j("span", fg, $e(f.type === "heading" ? "Heading" : "Label"), 1),
                  et(j("input", {
                    type: "text",
                    "onUpdate:modelValue": (v) => f.label = v
                  }, null, 8, hg), [
                    [yt, f.label]
                  ])
                ]),
                j("div", pg, [
                  f.placeholder !== null ? (_(), re("div", vg, [
                    h[16] || (h[16] = j("span", { class: "form-builder-field__label" }, "Placeholder", -1)),
                    et(j("input", {
                      type: "text",
                      name: "placeholder",
                      "onUpdate:modelValue": (v) => f.placeholder = v
                    }, null, 8, mg), [
                      [yt, f.placeholder]
                    ])
                  ])) : Fe("", !0),
                  f.class ? (_(), re("div", gg, [
                    h[18] || (h[18] = j("span", { class: "form-builder-field__label" }, "Width", -1)),
                    et(j("select", {
                      "onUpdate:modelValue": (v) => f.class = v
                    }, [...h[17] || (h[17] = [
                      j("option", { value: "w-full" }, "Full", -1),
                      j("option", { value: "w-1/2" }, "Half", -1)
                    ])], 8, yg), [
                      [ro, f.class]
                    ])
                  ])) : Fe("", !0)
                ])
              ], 64)),
              j("div", bg, [
                f.hasOwnProperty("hint") ? (_(), re("div", xg, [
                  h[19] || (h[19] = j("span", { class: "form-builder-field__label" }, "Hint Text", -1)),
                  et(j("input", {
                    type: "text",
                    name: "hint",
                    "onUpdate:modelValue": (v) => f.hint = v
                  }, null, 8, Sg), [
                    [yt, f.hint]
                  ])
                ])) : Fe("", !0),
                f.hasOwnProperty("defined_key") ? (_(), re("div", Eg, [
                  h[20] || (h[20] = j("span", { class: "form-builder-field__label" }, "Defined Key", -1)),
                  et(j("input", {
                    type: "text",
                    name: "defined_key",
                    "onUpdate:modelValue": (v) => f.defined_key = v
                  }, null, 8, wg), [
                    [yt, f.defined_key]
                  ])
                ])) : Fe("", !0)
              ]),
              r.includes(f.type) && f.options ? (_(), re("div", Tg, [
                j("div", Ag, [
                  h[22] || (h[22] = j("span", { class: "form-builder-field__label form-builder-field__label--options" }, "Options", -1)),
                  j("div", null, [
                    j("a", {
                      class: "form-builder-field__add-option",
                      onClick: ar((v) => c(f), ["prevent"])
                    }, [
                      ie(_e(Sl), { class: "form-builder-field__icon" }),
                      h[21] || (h[21] = Qt(" Add ", -1))
                    ], 8, Cg)
                  ])
                ]),
                ie(_e(Vo), {
                  list: f.options,
                  class: "form-builder-field__options-list",
                  "item-key": "id",
                  group: { name: f.id, pull: !1, put: !1 },
                  handle: ".option-handle"
                }, {
                  item: Tt(({ option: v, index: g }) => [
                    j("div", Og, [
                      ie(_e(cs), { class: "form-builder-field__icon option-handle" }),
                      et(j("input", {
                        "onUpdate:modelValue": (y) => f.options[g] = y,
                        type: "text",
                        class: "form-builder-field__option-input"
                      }, null, 8, Rg), [
                        [yt, f.options[g]]
                      ]),
                      j("a", {
                        class: "form-builder-field__option-remove",
                        onClick: (y) => d(f, g)
                      }, [
                        ie(_e(Ia), { class: "form-builder-field__icon" })
                      ], 8, Pg)
                    ])
                  ]),
                  _: 2
                }, 1032, ["list", "group"])
              ])) : Fe("", !0)
            ], 64)),
            t.actions.length ? (_(), re("div", Ig, [
              j("a", {
                class: "form-builder-field__custom-actions-toggle",
                onClick: (v) => a.value[m] = !a.value[m]
              }, [
                h[23] || (h[23] = Qt(" Actions ", -1)),
                a.value[m] ? (_(), qt(_e(Rm), {
                  key: 0,
                  class: "form-builder-field__icon"
                })) : (_(), qt(_e(Dm), {
                  key: 1,
                  class: "form-builder-field__icon"
                }))
              ], 8, Dg),
              a.value[m] ? (_(), re("div", Fg, [
                (_(!0), re(Dt, null, bn(t.actions, (v) => {
                  var g;
                  return _(), re("a", {
                    class: rt(["form-builder-field__custom-action", { "form-builder-field__custom-action--active": (g = f == null ? void 0 : f.actions) == null ? void 0 : g.includes(v.value) }]),
                    onClick: (y) => s(f, v.value)
                  }, $e(v.label), 11, Mg);
                }), 256))
              ])) : Fe("", !0)
            ])) : Fe("", !0)
          ])
        ], 2)
      ]),
      footer: Tt(() => [
        t.disableDropzone ? Fe("", !0) : (_(), re("p", {
          key: 0,
          class: rt(["form-builder-draggable__dropzone", { "form-builder-draggable__dropzone--empty": !u.value.length }])
        }, [
          t.isDragging ? Fe("", !0) : (_(), re("span", Lg, "Drag a layout/component in"))
        ], 2))
      ]),
      _: 1
    }, 8, ["class", "modelValue"]));
  }
}, Ug = {
  name: "EditFieldGrid",
  inject: ["bus"],
  components: { FieldDraggable: Ll },
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
          (n) => this.localFields.some((a) => a.id === n.id)
        )
      );
      this.$emit("confirm", t);
    }
  }
}, Ng = { class: "p-6 w-[776px]" }, jg = { class: "fields" }, kg = { class: "form-builder-draggable" }, Vg = { class: "mb-[20px] text-lg font-semibold text-gray-900" }, $g = { class: "fixed -bottom-8 right-0 flex justify-end gap-2 text-sm font-semibold bg-white w-full py-2 px-6 rounded-b-lg z-50" };
function Bg(t, e, n, a, i, u) {
  const r = Zt("field-draggable");
  return _(), re("div", Ng, [
    j("div", jg, [
      j("div", kg, [
        j("h4", Vg, "Row " + $e(n.index + 1) + ": multiple columns", 1),
        ie(r, {
          modelValue: i.localFields,
          "onUpdate:modelValue": e[0] || (e[0] = (s) => i.localFields = s),
          "disable-dropzone": ""
        }, null, 8, ["modelValue"])
      ]),
      j("div", $g, [
        j("a", {
          onClick: e[1] || (e[1] = (...s) => u.close && u.close(...s)),
          class: "rounded-full cursor-pointer px-3 py-2 border hover:bg-gray-200"
        }, "Cancel"),
        j("a", {
          onClick: e[2] || (e[2] = ar((...s) => u.confirm && u.confirm(...s), ["prevent"])),
          class: "rounded-full cursor-pointer bg-brand-400 hover:bg-brand-700 text-white px-3 py-2"
        }, "Save changes")
      ])
    ])
  ]);
}
const Hg = /* @__PURE__ */ bt(Ug, [["render", Bg]]), zg = {
  inject: ["bus"],
  components: {
    EditFieldGrid: Hg
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
    (t = this.bus) == null || t.$on("openModal", (n) => {
      this.open(), this.componentName = n.componentName, this.componentData = n.componentData, this.cancelTitle = n == null ? void 0 : n.cancelTitle, this.confirmTitle = n == null ? void 0 : n.confirmTitle, this.scrollable = (n == null ? void 0 : n.scrollable) === void 0 ? !0 : n.scrollable, this.isAsyncCallback = (n == null ? void 0 : n.isAsyncCallback) ?? !1, this.callback = n.callback, this.cancelCallback = n.cancelCallback;
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
}, Gg = {
  key: 0,
  class: "fixed left-1/2 top-1/2 z-50 flex max-h-screen -translate-x-1/2 -translate-y-1/2 transform flex-col rounded-xl border-tertiary-500 bg-white"
}, Wg = {
  key: 1,
  class: "p-smSpace"
}, Yg = ["innerHTML"], Kg = { class: "flex justify-center space-x-xsSpace pt-xsSpace" }, Xg = ["textContent"], Jg = ["textContent"];
function Qg(t, e, n, a, i, u) {
  return _(), re("div", {
    class: rt([{ "-open": i.isOpen }, "v-modal"])
  }, [
    ie(Ma, { name: "fade" }, {
      default: Tt(() => [
        i.isOpen ? (_(), re("div", Gg, [
          xn(t.$slots, "default", {}, () => [
            j("div", {
              class: rt(["relative max-h-[720px] overflow-y-auto", { "overflow-y-visible": !i.scrollable }])
            }, [
              i.componentName ? (_(), qt(Hn(i.componentName), La({ key: 0 }, i.componentData, {
                onConfirm: u.confirm,
                onCloseModal: u.close
              }), null, 16, ["onConfirm", "onCloseModal"])) : (_(), re("div", Wg, [
                j("div", {
                  innerHTML: i.componentData,
                  class: "py-mdSpace"
                }, null, 8, Yg),
                j("div", Kg, [
                  j("a", {
                    onClick: e[0] || (e[0] = (...r) => u.close && u.close(...r)),
                    class: "btn-secondary btn-sm",
                    textContent: $e(u.cancelButton)
                  }, null, 8, Xg),
                  j("a", {
                    onClick: e[1] || (e[1] = ar((...r) => u.confirm && u.confirm(...r), ["prevent"])),
                    class: "btn-primary btn-sm",
                    textContent: $e(u.confirmButton)
                  }, null, 8, Jg)
                ])
              ]))
            ], 2)
          ], !0)
        ])) : Fe("", !0)
      ]),
      _: 3
    })
  ], 2);
}
const Zg = /* @__PURE__ */ bt(zg, [["render", Qg], ["__scopeId", "data-v-0dbe5a03"]]), qg = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
};
function _g(t, e) {
  return _(), re("svg", qg, [...e[0] || (e[0] = [
    j("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M2.42 12.713c-.136-.215-.204-.323-.242-.49a1.2 1.2 0 0 1 0-.446c.038-.167.106-.274.242-.49C3.546 9.505 6.895 5 12 5s8.455 4.505 9.58 6.287c.137.215.205.323.243.49.029.125.029.322 0 .446-.038.167-.106.274-.242.49C20.455 14.495 17.105 19 12 19c-5.106 0-8.455-4.505-9.58-6.287"
    }, null, -1),
    j("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
    }, null, -1)
  ])]);
}
const ey = { render: _g }, ty = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
};
function ny(t, e) {
  return _(), re("svg", ty, [...e[0] || (e[0] = [
    j("circle", {
      cx: "12",
      cy: "12",
      r: "10",
      stroke: "currentColor",
      "stroke-width": "4",
      class: "opacity-25"
    }, null, -1),
    j("path", {
      fill: "currentColor",
      d: "M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4z",
      class: "opacity-75"
    }, null, -1)
  ])]);
}
const ds = { render: ny };
function ry() {
  return [
    {
      name: "heading",
      type: "heading",
      label: "Heading",
      placeholder: null
    },
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
const oy = { class: "form-builder-page" }, ay = {
  key: 0,
  class: "form-builder__breadcrumbs"
}, iy = ["href"], sy = ["textContent"], ly = { class: "form-builder__header" }, uy = { class: "form-builder__page-title" }, cy = {
  key: 0,
  class: "form-builder__btn-label"
}, dy = {
  key: 1,
  class: "form-builder__btn-label"
}, fy = ["name", "value"], hy = { class: "form-builder-page__body" }, py = {
  key: 0,
  class: "form-builder-preview-container"
}, vy = {
  key: 0,
  class: "form-builder-preview__title"
}, my = { class: "form-builder-preview" }, gy = {
  key: 1,
  class: "form-builder-container"
}, yy = { class: "form-builder__layout" }, by = { class: "form-builder" }, xy = { class: "form-builder-fields" }, Sy = { class: "form-builder__settings settings" }, Ey = {
  key: 0,
  class: "form-builder__field-error"
}, wy = {
  key: 0,
  class: "form-builder__field-group"
}, Ty = {
  key: 0,
  class: "form-builder__field-error"
}, Ay = { class: "fields" }, Cy = { class: "form-builder__sidebar" }, Oy = {
  key: 0,
  class: "form-builder__status-panel"
}, Ry = { class: "form-builder__status-list" }, Py = {
  width: "6",
  height: "6",
  viewBox: "0 0 6 6",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Iy = ["fill"], Dy = {
  key: 0,
  class: "form-builder__meta"
}, Fy = { class: "form-builder__meta-value" }, My = { class: "form-builder__meta" }, Ly = { class: "form-builder__meta-value" }, Uy = { class: "form-builder-templates" }, Ny = ["onClick"], jy = { class: "form-builder__component-icon" }, ky = ["innerHTML"], Vy = { class: "form-builder__tooltip" }, $y = {
  key: 1,
  class: "form-builder__actions"
}, By = { class: "form-builder__actions-group" }, Hy = { key: 0 }, zy = {
  key: 1,
  class: "form-builder__btn-loading"
}, Gy = { key: 0 }, Wy = {
  key: 1,
  class: "form-builder__btn-loading"
}, h1 = {
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
    showBreadcrumbs: {
      type: Boolean,
      default: !0
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
    $o("bus", fv);
    let n = hu(e.form), a = Ze(n.id || null), i = Ze(n.title || null), u = Ze((n == null ? void 0 : n.recipients) ?? ""), r = Ze(n.fields || []);
    const s = Ze([]), o = Ze(!1), l = Ze(null), c = Ze(!1), d = Ze(!1), p = Ze(ry()), h = (M) => {
      r.value.map((C) => (["builder", "presenter"].forEach((R) => {
        const k = M == null ? void 0 : M.find(($) => C.hasOwnProperty(R) && $[R].__name === C[R].__name);
        k && (C[R] = nt(k[R]));
      }), C));
    };
    Fr(() => {
      var R;
      const M = hs(), C = (R = M == null ? void 0 : M.appContext.config.globalProperties) == null ? void 0 : R.$customFormComponents;
      C == null || C.forEach((k) => {
        p.value.push(k);
      }), h(C);
    });
    const f = sn(() => {
      var C;
      let M = {
        title: i.value,
        recipients: u.value,
        status: (C = n.value) == null ? void 0 : C.status,
        fields: r.value.map((R) => {
          let k = {
            id: R.id,
            name: R.name,
            type: R.type,
            label: R.label,
            placeholder: R.placeholder,
            class: R.class,
            options: [...R.options || []]
          };
          return R.hasOwnProperty("content") && (k.content = R.content, k.content_type = R.content_type), R.hasOwnProperty("required") && (k.required = R.required), k;
        })
      };
      return e.hasRecipient && (M.recipients = u.value), JSON.stringify(M);
    });
    To(i, (M, C) => {
      M !== C && (s.value = []);
    }), To(u, (M, C) => {
      M !== C && (s.value = []);
    });
    const m = () => {
      window.location.href = e.redirectUrl;
    }, v = async (M = null) => {
      var R, k;
      if (d.value) return;
      d.value = !0;
      let C = {
        title: i.value,
        fields: r.value,
        ...a.value && { id: a.value },
        ...M && { status: M }
      };
      e.hasRecipient && (C.recipients = u.value);
      try {
        await vt.post(e.storeUrl, C), window.location.href = e.redirectUrl;
      } catch ($) {
        d.value = !1, s.value = ((k = (R = $.response) == null ? void 0 : R.data) == null ? void 0 : k.errors) || [];
      }
    }, g = () => {
      o.value ? l.value = null : l.value = Vt(r.value), o.value = !o.value;
    }, y = () => Math.floor(Math.random() * Date.now()), S = (M) => {
      let C = y(), R = {
        id: C,
        name: `${M.type}_${C}`,
        type: M.type,
        label: M.label,
        options: Vt(M.options)
      };
      return ["hint", "placeholder", "class", "content", "content_type", "allow_add_row", "template_row_count"].forEach(($) => {
        M.hasOwnProperty($) && (R[$] = M[$]);
      }), M.hasOwnProperty("content") && (R.content = M.content, R.content_type = M.content_type), M.hasOwnProperty("required") && (R.required = M.required), M.hasOwnProperty("builder") && (R.builder = M.builder, R.presenter = M.presenter, R.data = M.data), R;
    }, E = (M) => {
      const C = S(M);
      r.value.push(C);
    }, A = () => {
      c.value = !0;
    }, w = () => {
      c.value = !1;
    }, V = (M) => M ? M.charAt(0).toUpperCase() + M.slice(1) : "";
    return (M, C) => {
      var R, k;
      return _(), re("div", oy, [
        ie(Zg),
        t.showBreadcrumbs ? (_(), re("div", ay, [
          j("a", {
            href: t.redirectUrl,
            class: "form-builder__breadcrumb-link"
          }, " Form ", 8, iy),
          C[6] || (C[6] = Qt(" / ", -1)),
          j("span", {
            class: "form-builder__breadcrumb-current",
            textContent: $e(_e(i) ? _e(i) : o.value ? "Preview" : "Add New Form")
          }, null, 8, sy)
        ])) : Fe("", !0),
        j("div", ly, [
          j("h4", uy, $e(o.value ? "Preview" : _e(i) ? _e(i) : "Add New Form"), 1),
          j("a", {
            class: "form-builder__btn form-builder__btn--preview",
            onClick: g
          }, [
            o.value ? (_(), re("span", dy, [...C[8] || (C[8] = [
              j("svg", {
                width: "19",
                height: "19",
                viewBox: "0 0 19 19",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                j("path", {
                  d: "M1.08398 17.9166L5.70838 16.138C6.00416 16.0242 6.15205 15.9673 6.29042 15.8931C6.41332 15.8271 6.53048 15.751 6.64068 15.6654C6.76475 15.5692 6.8768 15.4571 7.10088 15.233L16.5007 5.83326C17.4211 4.91279 17.4211 3.4204 16.5007 2.49993C15.5802 1.57945 14.0878 1.57945 13.1673 2.49992L3.76755 11.8997C3.54346 12.1238 3.43142 12.2358 3.33514 12.3599C3.24963 12.4701 3.17349 12.5873 3.10751 12.7102C3.03324 12.8485 2.97636 12.9964 2.86259 13.2922L1.08398 17.9166ZM1.08398 17.9166L2.79908 13.4574C2.92182 13.1383 2.98318 12.9787 3.08843 12.9057C3.18042 12.8418 3.29424 12.8176 3.40423 12.8386C3.5301 12.8627 3.65097 12.9836 3.89272 13.2253L5.7753 15.1079C6.01704 15.3496 6.13792 15.4705 6.16196 15.5964C6.18296 15.7064 6.15881 15.8202 6.09494 15.9122C6.02186 16.0174 5.86231 16.0788 5.54321 16.2015L1.08398 17.9166Z",
                  stroke: "#344054",
                  "stroke-width": "1.66667",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ], -1),
              Qt(" Edit ", -1)
            ])])) : (_(), re("span", cy, [
              ie(_e(ey), { class: "form-builder__icon" }),
              C[7] || (C[7] = Qt(" Preview ", -1))
            ]))
          ])
        ]),
        j("input", {
          type: "hidden",
          name: t.name,
          value: f.value
        }, null, 8, fy),
        j("div", hy, [
          o.value ? (_(), re("div", py, [
            _e(i) ? (_(), re("p", vy, $e(_e(i)), 1)) : Fe("", !0),
            j("div", my, [
              ie(cv, {
                "model-value": { fields: l.value },
                preview: !0,
                editable: !0,
                "can-interact": o.value
              }, null, 8, ["model-value", "can-interact"])
            ])
          ])) : (_(), re("div", gy, [
            j("div", yy, [
              j("div", by, [
                j("div", xy, [
                  j("div", Sy, [
                    C[12] || (C[12] = j("h3", null, "Settings", -1)),
                    j("div", null, [
                      C[9] || (C[9] = j("p", { class: "form-builder__field-label" }, "Form Title *", -1)),
                      et(j("input", {
                        type: "text",
                        placeholder: "Enter your form name",
                        "onUpdate:modelValue": C[0] || (C[0] = ($) => ea(i) ? i.value = $ : i = $)
                      }, null, 512), [
                        [yt, _e(i)]
                      ]),
                      (R = s.value) != null && R.title ? (_(), re("span", Ey, $e(s.value.title[0]), 1)) : Fe("", !0)
                    ]),
                    t.hasRecipient ? (_(), re("div", wy, [
                      C[10] || (C[10] = j("p", { class: "form-builder__field-label" }, "Submission Recipients", -1)),
                      et(j("input", {
                        type: "text",
                        placeholder: "Emails separated by comma to have multiple recipients",
                        "onUpdate:modelValue": C[1] || (C[1] = ($) => ea(u) ? u.value = $ : u = $)
                      }, null, 512), [
                        [yt, _e(u)]
                      ]),
                      C[11] || (C[11] = j("span", { class: "form-builder__field-hint" }, "Notification emails will be sent to the specified address(es) upon form submission. Use commas to separate multiple addresses.", -1)),
                      (k = s.value) != null && k.recipients ? (_(), re("span", Ty, $e(s.value.recipients[0]), 1)) : Fe("", !0)
                    ])) : Fe("", !0)
                  ]),
                  j("div", Ay, [
                    C[13] || (C[13] = j("h3", null, "Form", -1)),
                    j("div", {
                      class: rt(["form-builder-draggable", { "form-builder-draggable--filled": _e(r).length }])
                    }, [
                      ie(Ll, {
                        modelValue: _e(r),
                        "onUpdate:modelValue": C[2] || (C[2] = ($) => ea(r) ? r.value = $ : r = $),
                        "is-dragging": c.value,
                        actions: t.actions
                      }, null, 8, ["modelValue", "is-dragging", "actions"])
                    ], 2)
                  ])
                ]),
                j("div", Cy, [
                  _e(a) ? (_(), re("div", Oy, [
                    C[16] || (C[16] = j("p", { class: "form-builder__status-heading" }, "Status", -1)),
                    j("div", Ry, [
                      j("div", {
                        class: rt(["form-builder__status-badge", { "form-builder__status-badge--published": _e(n).status === "published" }])
                      }, [
                        (_(), re("svg", Py, [
                          j("circle", {
                            cx: "3",
                            cy: "3",
                            r: "3",
                            fill: _e(n).status === "published" ? "#17B26A" : "#F79009"
                          }, null, 8, Iy)
                        ])),
                        Qt(" " + $e(V(_e(n).status)), 1)
                      ], 2),
                      _e(n).status === "published" ? (_(), re("div", Dy, [
                        C[14] || (C[14] = j("label", null, " Published ", -1)),
                        j("label", Fy, $e(_e(n).formatted_published_at), 1)
                      ])) : Fe("", !0),
                      j("div", My, [
                        C[15] || (C[15] = j("label", null, " Last Modified ", -1)),
                        j("label", Ly, $e(_e(n).last_modified), 1)
                      ])
                    ])
                  ])) : Fe("", !0),
                  j("div", Uy, [
                    C[17] || (C[17] = j("div", { class: "heading" }, [
                      j("h3", null, "Select layouts/components"),
                      j("p", null, "Click and/or drag a field to the left")
                    ], -1)),
                    ie(_e(Vo), {
                      "item-key": "id",
                      modelValue: p.value,
                      "onUpdate:modelValue": C[3] || (C[3] = ($) => p.value = $),
                      clone: S,
                      group: { name: "fields", pull: "clone", put: !1 },
                      onStart: A,
                      onEnd: w,
                      class: "components"
                    }, {
                      item: Tt(({ element: $ }) => [
                        (_(), re("li", {
                          key: $.name,
                          onClick: (B) => E($)
                        }, [
                          Qt($e($.label) + " ", 1),
                          j("div", jy, [
                            $.icon ? (_(), re("span", {
                              key: 0,
                              innerHTML: $.icon
                            }, null, 8, ky)) : Fe("", !0),
                            j("div", Vy, $e($.tooltip_text), 1)
                          ])
                        ], 8, Ny))
                      ]),
                      _: 1
                    }, 8, ["modelValue"]),
                    xn(M.$slots, "default")
                  ])
                ])
              ])
            ])
          ]))
        ]),
        o.value ? Fe("", !0) : (_(), re("div", $y, [
          j("a", {
            onClick: m,
            class: "form-builder__btn form-builder__btn--discard"
          }, "Discard"),
          j("div", By, [
            j("a", {
              onClick: C[4] || (C[4] = ar(($) => v("draft"), ["prevent"])),
              class: "form-builder__btn form-builder__btn--draft"
            }, [
              d.value ? (_(), re("span", zy, [
                ie(_e(ds), { class: "form-builder__icon--spin" })
              ])) : (_(), re("span", Hy, " Save as draft "))
            ]),
            j("a", {
              onClick: C[5] || (C[5] = ar(($) => v("published"), ["prevent"])),
              class: "form-builder__btn form-builder__btn--publish"
            }, [
              d.value ? (_(), re("span", Wy, [
                ie(_e(ds), { class: "form-builder__icon--spin" })
              ])) : (_(), re("span", Gy, " Publish "))
            ])
          ])
        ]))
      ]);
    };
  }
};
export {
  h1 as FormBuilder,
  cv as VForm
};
