(function () {
  const l = document.createElement("link").relList;
  if (l && l.supports && l.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) o(c);
  new MutationObserver((c) => {
    for (const h of c)
      if (h.type === "childList")
        for (const f of h.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && o(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(c) {
    const h = {};
    return (
      c.integrity && (h.integrity = c.integrity),
      c.referrerPolicy && (h.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (h.credentials = "include")
        : c.crossOrigin === "anonymous"
        ? (h.credentials = "omit")
        : (h.credentials = "same-origin"),
      h
    );
  }
  function o(c) {
    if (c.ep) return;
    c.ep = !0;
    const h = s(c);
    fetch(c.href, h);
  }
})();
var Yu = { exports: {} },
  El = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gp;
function b1() {
  if (gp) return El;
  gp = 1;
  var a = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.fragment");
  function s(o, c, h) {
    var f = null;
    if (
      (h !== void 0 && (f = "" + h),
      c.key !== void 0 && (f = "" + c.key),
      "key" in c)
    ) {
      h = {};
      for (var p in c) p !== "key" && (h[p] = c[p]);
    } else h = c;
    return (
      (c = h.ref),
      { $$typeof: a, type: o, key: f, ref: c !== void 0 ? c : null, props: h }
    );
  }
  return (El.Fragment = l), (El.jsx = s), (El.jsxs = s), El;
}
var yp;
function S1() {
  return yp || ((yp = 1), (Yu.exports = b1())), Yu.exports;
}
var d = S1(),
  Xu = { exports: {} },
  ot = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vp;
function T1() {
  if (vp) return ot;
  vp = 1;
  var a = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    h = Symbol.for("react.consumer"),
    f = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    y = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    v = Symbol.for("react.lazy"),
    b = Symbol.iterator;
  function S(j) {
    return j === null || typeof j != "object"
      ? null
      : ((j = (b && j[b]) || j["@@iterator"]),
        typeof j == "function" ? j : null);
  }
  var E = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    z = Object.assign,
    U = {};
  function Z(j, B, P) {
    (this.props = j),
      (this.context = B),
      (this.refs = U),
      (this.updater = P || E);
  }
  (Z.prototype.isReactComponent = {}),
    (Z.prototype.setState = function (j, B) {
      if (typeof j != "object" && typeof j != "function" && j != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, j, B, "setState");
    }),
    (Z.prototype.forceUpdate = function (j) {
      this.updater.enqueueForceUpdate(this, j, "forceUpdate");
    });
  function X() {}
  X.prototype = Z.prototype;
  function q(j, B, P) {
    (this.props = j),
      (this.context = B),
      (this.refs = U),
      (this.updater = P || E);
  }
  var Q = (q.prototype = new X());
  (Q.constructor = q), z(Q, Z.prototype), (Q.isPureReactComponent = !0);
  var et = Array.isArray,
    G = { H: null, A: null, T: null, S: null, V: null },
    I = Object.prototype.hasOwnProperty;
  function nt(j, B, P, K, J, mt) {
    return (
      (P = mt.ref),
      { $$typeof: a, type: j, key: B, ref: P !== void 0 ? P : null, props: mt }
    );
  }
  function L(j, B) {
    return nt(j.type, B, void 0, void 0, void 0, j.props);
  }
  function ut(j) {
    return typeof j == "object" && j !== null && j.$$typeof === a;
  }
  function Ct(j) {
    var B = { "=": "=0", ":": "=2" };
    return (
      "$" +
      j.replace(/[=:]/g, function (P) {
        return B[P];
      })
    );
  }
  var Ht = /\/+/g;
  function zt(j, B) {
    return typeof j == "object" && j !== null && j.key != null
      ? Ct("" + j.key)
      : B.toString(36);
  }
  function Me() {}
  function ce(j) {
    switch (j.status) {
      case "fulfilled":
        return j.value;
      case "rejected":
        throw j.reason;
      default:
        switch (
          (typeof j.status == "string"
            ? j.then(Me, Me)
            : ((j.status = "pending"),
              j.then(
                function (B) {
                  j.status === "pending" &&
                    ((j.status = "fulfilled"), (j.value = B));
                },
                function (B) {
                  j.status === "pending" &&
                    ((j.status = "rejected"), (j.reason = B));
                }
              )),
          j.status)
        ) {
          case "fulfilled":
            return j.value;
          case "rejected":
            throw j.reason;
        }
    }
    throw j;
  }
  function Dt(j, B, P, K, J) {
    var mt = typeof j;
    (mt === "undefined" || mt === "boolean") && (j = null);
    var rt = !1;
    if (j === null) rt = !0;
    else
      switch (mt) {
        case "bigint":
        case "string":
        case "number":
          rt = !0;
          break;
        case "object":
          switch (j.$$typeof) {
            case a:
            case l:
              rt = !0;
              break;
            case v:
              return (rt = j._init), Dt(rt(j._payload), B, P, K, J);
          }
      }
    if (rt)
      return (
        (J = J(j)),
        (rt = K === "" ? "." + zt(j, 0) : K),
        et(J)
          ? ((P = ""),
            rt != null && (P = rt.replace(Ht, "$&/") + "/"),
            Dt(J, B, P, "", function (ye) {
              return ye;
            }))
          : J != null &&
            (ut(J) &&
              (J = L(
                J,
                P +
                  (J.key == null || (j && j.key === J.key)
                    ? ""
                    : ("" + J.key).replace(Ht, "$&/") + "/") +
                  rt
              )),
            B.push(J)),
        1
      );
    rt = 0;
    var xt = K === "" ? "." : K + ":";
    if (et(j))
      for (var Mt = 0; Mt < j.length; Mt++)
        (K = j[Mt]), (mt = xt + zt(K, Mt)), (rt += Dt(K, B, P, mt, J));
    else if (((Mt = S(j)), typeof Mt == "function"))
      for (j = Mt.call(j), Mt = 0; !(K = j.next()).done; )
        (K = K.value), (mt = xt + zt(K, Mt++)), (rt += Dt(K, B, P, mt, J));
    else if (mt === "object") {
      if (typeof j.then == "function") return Dt(ce(j), B, P, K, J);
      throw (
        ((B = String(j)),
        Error(
          "Objects are not valid as a React child (found: " +
            (B === "[object Object]"
              ? "object with keys {" + Object.keys(j).join(", ") + "}"
              : B) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return rt;
  }
  function C(j, B, P) {
    if (j == null) return j;
    var K = [],
      J = 0;
    return (
      Dt(j, K, "", "", function (mt) {
        return B.call(P, mt, J++);
      }),
      K
    );
  }
  function H(j) {
    if (j._status === -1) {
      var B = j._result;
      (B = B()),
        B.then(
          function (P) {
            (j._status === 0 || j._status === -1) &&
              ((j._status = 1), (j._result = P));
          },
          function (P) {
            (j._status === 0 || j._status === -1) &&
              ((j._status = 2), (j._result = P));
          }
        ),
        j._status === -1 && ((j._status = 0), (j._result = B));
    }
    if (j._status === 1) return j._result.default;
    throw j._result;
  }
  var k =
    typeof reportError == "function"
      ? reportError
      : function (j) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var B = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof j == "object" &&
                j !== null &&
                typeof j.message == "string"
                  ? String(j.message)
                  : String(j),
              error: j,
            });
            if (!window.dispatchEvent(B)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", j);
            return;
          }
          console.error(j);
        };
  function dt() {}
  return (
    (ot.Children = {
      map: C,
      forEach: function (j, B, P) {
        C(
          j,
          function () {
            B.apply(this, arguments);
          },
          P
        );
      },
      count: function (j) {
        var B = 0;
        return (
          C(j, function () {
            B++;
          }),
          B
        );
      },
      toArray: function (j) {
        return (
          C(j, function (B) {
            return B;
          }) || []
        );
      },
      only: function (j) {
        if (!ut(j))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return j;
      },
    }),
    (ot.Component = Z),
    (ot.Fragment = s),
    (ot.Profiler = c),
    (ot.PureComponent = q),
    (ot.StrictMode = o),
    (ot.Suspense = y),
    (ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = G),
    (ot.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (j) {
        return G.H.useMemoCache(j);
      },
    }),
    (ot.cache = function (j) {
      return function () {
        return j.apply(null, arguments);
      };
    }),
    (ot.cloneElement = function (j, B, P) {
      if (j == null)
        throw Error(
          "The argument must be a React element, but you passed " + j + "."
        );
      var K = z({}, j.props),
        J = j.key,
        mt = void 0;
      if (B != null)
        for (rt in (B.ref !== void 0 && (mt = void 0),
        B.key !== void 0 && (J = "" + B.key),
        B))
          !I.call(B, rt) ||
            rt === "key" ||
            rt === "__self" ||
            rt === "__source" ||
            (rt === "ref" && B.ref === void 0) ||
            (K[rt] = B[rt]);
      var rt = arguments.length - 2;
      if (rt === 1) K.children = P;
      else if (1 < rt) {
        for (var xt = Array(rt), Mt = 0; Mt < rt; Mt++)
          xt[Mt] = arguments[Mt + 2];
        K.children = xt;
      }
      return nt(j.type, J, void 0, void 0, mt, K);
    }),
    (ot.createContext = function (j) {
      return (
        (j = {
          $$typeof: f,
          _currentValue: j,
          _currentValue2: j,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (j.Provider = j),
        (j.Consumer = { $$typeof: h, _context: j }),
        j
      );
    }),
    (ot.createElement = function (j, B, P) {
      var K,
        J = {},
        mt = null;
      if (B != null)
        for (K in (B.key !== void 0 && (mt = "" + B.key), B))
          I.call(B, K) &&
            K !== "key" &&
            K !== "__self" &&
            K !== "__source" &&
            (J[K] = B[K]);
      var rt = arguments.length - 2;
      if (rt === 1) J.children = P;
      else if (1 < rt) {
        for (var xt = Array(rt), Mt = 0; Mt < rt; Mt++)
          xt[Mt] = arguments[Mt + 2];
        J.children = xt;
      }
      if (j && j.defaultProps)
        for (K in ((rt = j.defaultProps), rt))
          J[K] === void 0 && (J[K] = rt[K]);
      return nt(j, mt, void 0, void 0, null, J);
    }),
    (ot.createRef = function () {
      return { current: null };
    }),
    (ot.forwardRef = function (j) {
      return { $$typeof: p, render: j };
    }),
    (ot.isValidElement = ut),
    (ot.lazy = function (j) {
      return { $$typeof: v, _payload: { _status: -1, _result: j }, _init: H };
    }),
    (ot.memo = function (j, B) {
      return { $$typeof: g, type: j, compare: B === void 0 ? null : B };
    }),
    (ot.startTransition = function (j) {
      var B = G.T,
        P = {};
      G.T = P;
      try {
        var K = j(),
          J = G.S;
        J !== null && J(P, K),
          typeof K == "object" &&
            K !== null &&
            typeof K.then == "function" &&
            K.then(dt, k);
      } catch (mt) {
        k(mt);
      } finally {
        G.T = B;
      }
    }),
    (ot.unstable_useCacheRefresh = function () {
      return G.H.useCacheRefresh();
    }),
    (ot.use = function (j) {
      return G.H.use(j);
    }),
    (ot.useActionState = function (j, B, P) {
      return G.H.useActionState(j, B, P);
    }),
    (ot.useCallback = function (j, B) {
      return G.H.useCallback(j, B);
    }),
    (ot.useContext = function (j) {
      return G.H.useContext(j);
    }),
    (ot.useDebugValue = function () {}),
    (ot.useDeferredValue = function (j, B) {
      return G.H.useDeferredValue(j, B);
    }),
    (ot.useEffect = function (j, B, P) {
      var K = G.H;
      if (typeof P == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return K.useEffect(j, B);
    }),
    (ot.useId = function () {
      return G.H.useId();
    }),
    (ot.useImperativeHandle = function (j, B, P) {
      return G.H.useImperativeHandle(j, B, P);
    }),
    (ot.useInsertionEffect = function (j, B) {
      return G.H.useInsertionEffect(j, B);
    }),
    (ot.useLayoutEffect = function (j, B) {
      return G.H.useLayoutEffect(j, B);
    }),
    (ot.useMemo = function (j, B) {
      return G.H.useMemo(j, B);
    }),
    (ot.useOptimistic = function (j, B) {
      return G.H.useOptimistic(j, B);
    }),
    (ot.useReducer = function (j, B, P) {
      return G.H.useReducer(j, B, P);
    }),
    (ot.useRef = function (j) {
      return G.H.useRef(j);
    }),
    (ot.useState = function (j) {
      return G.H.useState(j);
    }),
    (ot.useSyncExternalStore = function (j, B, P) {
      return G.H.useSyncExternalStore(j, B, P);
    }),
    (ot.useTransition = function () {
      return G.H.useTransition();
    }),
    (ot.version = "19.1.1"),
    ot
  );
}
var xp;
function Lc() {
  return xp || ((xp = 1), (Xu.exports = T1())), Xu.exports;
}
var Y = Lc(),
  Zu = { exports: {} },
  Dl = {},
  Ku = { exports: {} },
  Qu = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bp;
function j1() {
  return (
    bp ||
      ((bp = 1),
      (function (a) {
        function l(C, H) {
          var k = C.length;
          C.push(H);
          t: for (; 0 < k; ) {
            var dt = (k - 1) >>> 1,
              j = C[dt];
            if (0 < c(j, H)) (C[dt] = H), (C[k] = j), (k = dt);
            else break t;
          }
        }
        function s(C) {
          return C.length === 0 ? null : C[0];
        }
        function o(C) {
          if (C.length === 0) return null;
          var H = C[0],
            k = C.pop();
          if (k !== H) {
            C[0] = k;
            t: for (var dt = 0, j = C.length, B = j >>> 1; dt < B; ) {
              var P = 2 * (dt + 1) - 1,
                K = C[P],
                J = P + 1,
                mt = C[J];
              if (0 > c(K, k))
                J < j && 0 > c(mt, K)
                  ? ((C[dt] = mt), (C[J] = k), (dt = J))
                  : ((C[dt] = K), (C[P] = k), (dt = P));
              else if (J < j && 0 > c(mt, k))
                (C[dt] = mt), (C[J] = k), (dt = J);
              else break t;
            }
          }
          return H;
        }
        function c(C, H) {
          var k = C.sortIndex - H.sortIndex;
          return k !== 0 ? k : C.id - H.id;
        }
        if (
          ((a.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var h = performance;
          a.unstable_now = function () {
            return h.now();
          };
        } else {
          var f = Date,
            p = f.now();
          a.unstable_now = function () {
            return f.now() - p;
          };
        }
        var y = [],
          g = [],
          v = 1,
          b = null,
          S = 3,
          E = !1,
          z = !1,
          U = !1,
          Z = !1,
          X = typeof setTimeout == "function" ? setTimeout : null,
          q = typeof clearTimeout == "function" ? clearTimeout : null,
          Q = typeof setImmediate < "u" ? setImmediate : null;
        function et(C) {
          for (var H = s(g); H !== null; ) {
            if (H.callback === null) o(g);
            else if (H.startTime <= C)
              o(g), (H.sortIndex = H.expirationTime), l(y, H);
            else break;
            H = s(g);
          }
        }
        function G(C) {
          if (((U = !1), et(C), !z))
            if (s(y) !== null) (z = !0), I || ((I = !0), zt());
            else {
              var H = s(g);
              H !== null && Dt(G, H.startTime - C);
            }
        }
        var I = !1,
          nt = -1,
          L = 5,
          ut = -1;
        function Ct() {
          return Z ? !0 : !(a.unstable_now() - ut < L);
        }
        function Ht() {
          if (((Z = !1), I)) {
            var C = a.unstable_now();
            ut = C;
            var H = !0;
            try {
              t: {
                (z = !1), U && ((U = !1), q(nt), (nt = -1)), (E = !0);
                var k = S;
                try {
                  e: {
                    for (
                      et(C), b = s(y);
                      b !== null && !(b.expirationTime > C && Ct());

                    ) {
                      var dt = b.callback;
                      if (typeof dt == "function") {
                        (b.callback = null), (S = b.priorityLevel);
                        var j = dt(b.expirationTime <= C);
                        if (((C = a.unstable_now()), typeof j == "function")) {
                          (b.callback = j), et(C), (H = !0);
                          break e;
                        }
                        b === s(y) && o(y), et(C);
                      } else o(y);
                      b = s(y);
                    }
                    if (b !== null) H = !0;
                    else {
                      var B = s(g);
                      B !== null && Dt(G, B.startTime - C), (H = !1);
                    }
                  }
                  break t;
                } finally {
                  (b = null), (S = k), (E = !1);
                }
                H = void 0;
              }
            } finally {
              H ? zt() : (I = !1);
            }
          }
        }
        var zt;
        if (typeof Q == "function")
          zt = function () {
            Q(Ht);
          };
        else if (typeof MessageChannel < "u") {
          var Me = new MessageChannel(),
            ce = Me.port2;
          (Me.port1.onmessage = Ht),
            (zt = function () {
              ce.postMessage(null);
            });
        } else
          zt = function () {
            X(Ht, 0);
          };
        function Dt(C, H) {
          nt = X(function () {
            C(a.unstable_now());
          }, H);
        }
        (a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (C) {
            C.callback = null;
          }),
          (a.unstable_forceFrameRate = function (C) {
            0 > C || 125 < C
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (L = 0 < C ? Math.floor(1e3 / C) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return S;
          }),
          (a.unstable_next = function (C) {
            switch (S) {
              case 1:
              case 2:
              case 3:
                var H = 3;
                break;
              default:
                H = S;
            }
            var k = S;
            S = H;
            try {
              return C();
            } finally {
              S = k;
            }
          }),
          (a.unstable_requestPaint = function () {
            Z = !0;
          }),
          (a.unstable_runWithPriority = function (C, H) {
            switch (C) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                C = 3;
            }
            var k = S;
            S = C;
            try {
              return H();
            } finally {
              S = k;
            }
          }),
          (a.unstable_scheduleCallback = function (C, H, k) {
            var dt = a.unstable_now();
            switch (
              (typeof k == "object" && k !== null
                ? ((k = k.delay),
                  (k = typeof k == "number" && 0 < k ? dt + k : dt))
                : (k = dt),
              C)
            ) {
              case 1:
                var j = -1;
                break;
              case 2:
                j = 250;
                break;
              case 5:
                j = 1073741823;
                break;
              case 4:
                j = 1e4;
                break;
              default:
                j = 5e3;
            }
            return (
              (j = k + j),
              (C = {
                id: v++,
                callback: H,
                priorityLevel: C,
                startTime: k,
                expirationTime: j,
                sortIndex: -1,
              }),
              k > dt
                ? ((C.sortIndex = k),
                  l(g, C),
                  s(y) === null &&
                    C === s(g) &&
                    (U ? (q(nt), (nt = -1)) : (U = !0), Dt(G, k - dt)))
                : ((C.sortIndex = j),
                  l(y, C),
                  z || E || ((z = !0), I || ((I = !0), zt()))),
              C
            );
          }),
          (a.unstable_shouldYield = Ct),
          (a.unstable_wrapCallback = function (C) {
            var H = S;
            return function () {
              var k = S;
              S = H;
              try {
                return C.apply(this, arguments);
              } finally {
                S = k;
              }
            };
          });
      })(Qu)),
    Qu
  );
}
var Sp;
function A1() {
  return Sp || ((Sp = 1), (Ku.exports = j1())), Ku.exports;
}
var Pu = { exports: {} },
  se = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tp;
function N1() {
  if (Tp) return se;
  Tp = 1;
  var a = Lc();
  function l(y) {
    var g = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        g += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return (
      "Minified React error #" +
      y +
      "; visit " +
      g +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s() {}
  var o = {
      d: {
        f: s,
        r: function () {
          throw Error(l(522));
        },
        D: s,
        C: s,
        L: s,
        m: s,
        X: s,
        S: s,
        M: s,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for("react.portal");
  function h(y, g, v) {
    var b =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: b == null ? null : "" + b,
      children: y,
      containerInfo: g,
      implementation: v,
    };
  }
  var f = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(y, g) {
    if (y === "font") return "";
    if (typeof g == "string") return g === "use-credentials" ? g : "";
  }
  return (
    (se.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
    (se.createPortal = function (y, g) {
      var v =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11))
        throw Error(l(299));
      return h(y, g, null, v);
    }),
    (se.flushSync = function (y) {
      var g = f.T,
        v = o.p;
      try {
        if (((f.T = null), (o.p = 2), y)) return y();
      } finally {
        (f.T = g), (o.p = v), o.d.f();
      }
    }),
    (se.preconnect = function (y, g) {
      typeof y == "string" &&
        (g
          ? ((g = g.crossOrigin),
            (g =
              typeof g == "string"
                ? g === "use-credentials"
                  ? g
                  : ""
                : void 0))
          : (g = null),
        o.d.C(y, g));
    }),
    (se.prefetchDNS = function (y) {
      typeof y == "string" && o.d.D(y);
    }),
    (se.preinit = function (y, g) {
      if (typeof y == "string" && g && typeof g.as == "string") {
        var v = g.as,
          b = p(v, g.crossOrigin),
          S = typeof g.integrity == "string" ? g.integrity : void 0,
          E = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
        v === "style"
          ? o.d.S(y, typeof g.precedence == "string" ? g.precedence : void 0, {
              crossOrigin: b,
              integrity: S,
              fetchPriority: E,
            })
          : v === "script" &&
            o.d.X(y, {
              crossOrigin: b,
              integrity: S,
              fetchPriority: E,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
      }
    }),
    (se.preinitModule = function (y, g) {
      if (typeof y == "string")
        if (typeof g == "object" && g !== null) {
          if (g.as == null || g.as === "script") {
            var v = p(g.as, g.crossOrigin);
            o.d.M(y, {
              crossOrigin: v,
              integrity: typeof g.integrity == "string" ? g.integrity : void 0,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
          }
        } else g == null && o.d.M(y);
    }),
    (se.preload = function (y, g) {
      if (
        typeof y == "string" &&
        typeof g == "object" &&
        g !== null &&
        typeof g.as == "string"
      ) {
        var v = g.as,
          b = p(v, g.crossOrigin);
        o.d.L(y, v, {
          crossOrigin: b,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0,
          type: typeof g.type == "string" ? g.type : void 0,
          fetchPriority:
            typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
          referrerPolicy:
            typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
          imageSrcSet:
            typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
          media: typeof g.media == "string" ? g.media : void 0,
        });
      }
    }),
    (se.preloadModule = function (y, g) {
      if (typeof y == "string")
        if (g) {
          var v = p(g.as, g.crossOrigin);
          o.d.m(y, {
            as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
            crossOrigin: v,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          });
        } else o.d.m(y);
    }),
    (se.requestFormReset = function (y) {
      o.d.r(y);
    }),
    (se.unstable_batchedUpdates = function (y, g) {
      return y(g);
    }),
    (se.useFormState = function (y, g, v) {
      return f.H.useFormState(y, g, v);
    }),
    (se.useFormStatus = function () {
      return f.H.useHostTransitionStatus();
    }),
    (se.version = "19.1.1"),
    se
  );
}
var jp;
function w1() {
  if (jp) return Pu.exports;
  jp = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (l) {
        console.error(l);
      }
  }
  return a(), (Pu.exports = N1()), Pu.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ap;
function M1() {
  if (Ap) return Dl;
  Ap = 1;
  var a = A1(),
    l = Lc(),
    s = w1();
  function o(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function h(t) {
    var e = t,
      n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do (e = t), (e.flags & 4098) !== 0 && (n = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function f(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function p(t) {
    if (h(t) !== t) throw Error(o(188));
  }
  function y(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = h(t)), e === null)) throw Error(o(188));
      return e !== t ? null : t;
    }
    for (var n = t, i = e; ; ) {
      var r = n.return;
      if (r === null) break;
      var u = r.alternate;
      if (u === null) {
        if (((i = r.return), i !== null)) {
          n = i;
          continue;
        }
        break;
      }
      if (r.child === u.child) {
        for (u = r.child; u; ) {
          if (u === n) return p(r), t;
          if (u === i) return p(r), e;
          u = u.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== i.return) (n = r), (i = u);
      else {
        for (var m = !1, x = r.child; x; ) {
          if (x === n) {
            (m = !0), (n = r), (i = u);
            break;
          }
          if (x === i) {
            (m = !0), (i = r), (n = u);
            break;
          }
          x = x.sibling;
        }
        if (!m) {
          for (x = u.child; x; ) {
            if (x === n) {
              (m = !0), (n = u), (i = r);
              break;
            }
            if (x === i) {
              (m = !0), (i = u), (n = r);
              break;
            }
            x = x.sibling;
          }
          if (!m) throw Error(o(189));
        }
      }
      if (n.alternate !== i) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? t : e;
  }
  function g(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = g(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var v = Object.assign,
    b = Symbol.for("react.element"),
    S = Symbol.for("react.transitional.element"),
    E = Symbol.for("react.portal"),
    z = Symbol.for("react.fragment"),
    U = Symbol.for("react.strict_mode"),
    Z = Symbol.for("react.profiler"),
    X = Symbol.for("react.provider"),
    q = Symbol.for("react.consumer"),
    Q = Symbol.for("react.context"),
    et = Symbol.for("react.forward_ref"),
    G = Symbol.for("react.suspense"),
    I = Symbol.for("react.suspense_list"),
    nt = Symbol.for("react.memo"),
    L = Symbol.for("react.lazy"),
    ut = Symbol.for("react.activity"),
    Ct = Symbol.for("react.memo_cache_sentinel"),
    Ht = Symbol.iterator;
  function zt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (Ht && t[Ht]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var Me = Symbol.for("react.client.reference");
  function ce(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Me ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case z:
        return "Fragment";
      case Z:
        return "Profiler";
      case U:
        return "StrictMode";
      case G:
        return "Suspense";
      case I:
        return "SuspenseList";
      case ut:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case E:
          return "Portal";
        case Q:
          return (t.displayName || "Context") + ".Provider";
        case q:
          return (t._context.displayName || "Context") + ".Consumer";
        case et:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case nt:
          return (
            (e = t.displayName || null), e !== null ? e : ce(t.type) || "Memo"
          );
        case L:
          (e = t._payload), (t = t._init);
          try {
            return ce(t(e));
          } catch {}
      }
    return null;
  }
  var Dt = Array.isArray,
    C = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    H = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    k = { pending: !1, data: null, method: null, action: null },
    dt = [],
    j = -1;
  function B(t) {
    return { current: t };
  }
  function P(t) {
    0 > j || ((t.current = dt[j]), (dt[j] = null), j--);
  }
  function K(t, e) {
    j++, (dt[j] = t.current), (t.current = e);
  }
  var J = B(null),
    mt = B(null),
    rt = B(null),
    xt = B(null);
  function Mt(t, e) {
    switch ((K(rt, e), K(mt, t), K(J, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Xm(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          (e = Xm(e)), (t = Zm(e, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    P(J), K(J, t);
  }
  function ye() {
    P(J), P(mt), P(rt);
  }
  function jn(t) {
    t.memoizedState !== null && K(xt, t);
    var e = J.current,
      n = Zm(e, t.type);
    e !== n && (K(mt, t), K(J, n));
  }
  function An(t) {
    mt.current === t && (P(J), P(mt)),
      xt.current === t && (P(xt), (jl._currentValue = k));
  }
  var Nn = Object.prototype.hasOwnProperty,
    Dr = a.unstable_scheduleCallback,
    Rr = a.unstable_cancelCallback,
    Wy = a.unstable_shouldYield,
    Iy = a.unstable_requestPaint,
    Xe = a.unstable_now,
    tv = a.unstable_getCurrentPriorityLevel,
    Af = a.unstable_ImmediatePriority,
    Nf = a.unstable_UserBlockingPriority,
    Pl = a.unstable_NormalPriority,
    ev = a.unstable_LowPriority,
    wf = a.unstable_IdlePriority,
    nv = a.log,
    av = a.unstable_setDisableYieldValue,
    Ci = null,
    ve = null;
  function wn(t) {
    if (
      (typeof nv == "function" && av(t),
      ve && typeof ve.setStrictMode == "function")
    )
      try {
        ve.setStrictMode(Ci, t);
      } catch {}
  }
  var xe = Math.clz32 ? Math.clz32 : sv,
    iv = Math.log,
    lv = Math.LN2;
  function sv(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((iv(t) / lv) | 0)) | 0;
  }
  var Jl = 256,
    Fl = 4194304;
  function la(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function $l(t, e, n) {
    var i = t.pendingLanes;
    if (i === 0) return 0;
    var r = 0,
      u = t.suspendedLanes,
      m = t.pingedLanes;
    t = t.warmLanes;
    var x = i & 134217727;
    return (
      x !== 0
        ? ((i = x & ~u),
          i !== 0
            ? (r = la(i))
            : ((m &= x),
              m !== 0
                ? (r = la(m))
                : n || ((n = x & ~t), n !== 0 && (r = la(n)))))
        : ((x = i & ~u),
          x !== 0
            ? (r = la(x))
            : m !== 0
            ? (r = la(m))
            : n || ((n = i & ~t), n !== 0 && (r = la(n)))),
      r === 0
        ? 0
        : e !== 0 &&
          e !== r &&
          (e & u) === 0 &&
          ((u = r & -r),
          (n = e & -e),
          u >= n || (u === 32 && (n & 4194048) !== 0))
        ? e
        : r
    );
  }
  function zi(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function rv(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Mf() {
    var t = Jl;
    return (Jl <<= 1), (Jl & 4194048) === 0 && (Jl = 256), t;
  }
  function Ef() {
    var t = Fl;
    return (Fl <<= 1), (Fl & 62914560) === 0 && (Fl = 4194304), t;
  }
  function Cr(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function Oi(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function ov(t, e, n, i, r, u) {
    var m = t.pendingLanes;
    (t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= n),
      (t.entangledLanes &= n),
      (t.errorRecoveryDisabledLanes &= n),
      (t.shellSuspendCounter = 0);
    var x = t.entanglements,
      T = t.expirationTimes,
      M = t.hiddenUpdates;
    for (n = m & ~n; 0 < n; ) {
      var O = 31 - xe(n),
        V = 1 << O;
      (x[O] = 0), (T[O] = -1);
      var D = M[O];
      if (D !== null)
        for (M[O] = null, O = 0; O < D.length; O++) {
          var R = D[O];
          R !== null && (R.lane &= -536870913);
        }
      n &= ~V;
    }
    i !== 0 && Df(t, i, 0),
      u !== 0 && r === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(m & ~e));
  }
  function Df(t, e, n) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var i = 31 - xe(e);
    (t.entangledLanes |= e),
      (t.entanglements[i] = t.entanglements[i] | 1073741824 | (n & 4194090));
  }
  function Rf(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
      var i = 31 - xe(n),
        r = 1 << i;
      (r & e) | (t[i] & e) && (t[i] |= e), (n &= ~r);
    }
  }
  function zr(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Or(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Cf() {
    var t = H.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : cp(t.type));
  }
  function uv(t, e) {
    var n = H.p;
    try {
      return (H.p = t), e();
    } finally {
      H.p = n;
    }
  }
  var Mn = Math.random().toString(36).slice(2),
    ie = "__reactFiber$" + Mn,
    fe = "__reactProps$" + Mn,
    Ca = "__reactContainer$" + Mn,
    _r = "__reactEvents$" + Mn,
    cv = "__reactListeners$" + Mn,
    fv = "__reactHandles$" + Mn,
    zf = "__reactResources$" + Mn,
    _i = "__reactMarker$" + Mn;
  function Vr(t) {
    delete t[ie], delete t[fe], delete t[_r], delete t[cv], delete t[fv];
  }
  function za(t) {
    var e = t[ie];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if ((e = n[Ca] || n[ie])) {
        if (
          ((n = e.alternate),
          e.child !== null || (n !== null && n.child !== null))
        )
          for (t = Jm(t); t !== null; ) {
            if ((n = t[ie])) return n;
            t = Jm(t);
          }
        return e;
      }
      (t = n), (n = t.parentNode);
    }
    return null;
  }
  function Oa(t) {
    if ((t = t[ie] || t[Ca])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Vi(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(o(33));
  }
  function _a(t) {
    var e = t[zf];
    return (
      e ||
        (e = t[zf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Ft(t) {
    t[_i] = !0;
  }
  var Of = new Set(),
    _f = {};
  function sa(t, e) {
    Va(t, e), Va(t + "Capture", e);
  }
  function Va(t, e) {
    for (_f[t] = e, t = 0; t < e.length; t++) Of.add(e[t]);
  }
  var dv = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Vf = {},
    Uf = {};
  function hv(t) {
    return Nn.call(Uf, t)
      ? !0
      : Nn.call(Vf, t)
      ? !1
      : dv.test(t)
      ? (Uf[t] = !0)
      : ((Vf[t] = !0), !1);
  }
  function Wl(t, e, n) {
    if (hv(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var i = e.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function Il(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function Ie(t, e, n, i) {
    if (i === null) t.removeAttribute(n);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + i);
    }
  }
  var Ur, kf;
  function Ua(t) {
    if (Ur === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        (Ur = (e && e[1]) || ""),
          (kf =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Ur +
      t +
      kf
    );
  }
  var kr = !1;
  function Br(t, e) {
    if (!t || kr) return "";
    kr = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var V = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(V.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(V, []);
                } catch (R) {
                  var D = R;
                }
                Reflect.construct(t, [], V);
              } else {
                try {
                  V.call();
                } catch (R) {
                  D = R;
                }
                t.call(V.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (R) {
                D = R;
              }
              (V = t()) &&
                typeof V.catch == "function" &&
                V.catch(function () {});
            }
          } catch (R) {
            if (R && D && typeof R.stack == "string") return [R.stack, D.stack];
          }
          return [null, null];
        },
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var r = Object.getOwnPropertyDescriptor(
        i.DetermineComponentFrameRoot,
        "name"
      );
      r &&
        r.configurable &&
        Object.defineProperty(i.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = i.DetermineComponentFrameRoot(),
        m = u[0],
        x = u[1];
      if (m && x) {
        var T = m.split(`
`),
          M = x.split(`
`);
        for (
          r = i = 0;
          i < T.length && !T[i].includes("DetermineComponentFrameRoot");

        )
          i++;
        for (; r < M.length && !M[r].includes("DetermineComponentFrameRoot"); )
          r++;
        if (i === T.length || r === M.length)
          for (
            i = T.length - 1, r = M.length - 1;
            1 <= i && 0 <= r && T[i] !== M[r];

          )
            r--;
        for (; 1 <= i && 0 <= r; i--, r--)
          if (T[i] !== M[r]) {
            if (i !== 1 || r !== 1)
              do
                if ((i--, r--, 0 > r || T[i] !== M[r])) {
                  var O =
                    `
` + T[i].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      O.includes("<anonymous>") &&
                      (O = O.replace("<anonymous>", t.displayName)),
                    O
                  );
                }
              while (1 <= i && 0 <= r);
            break;
          }
      }
    } finally {
      (kr = !1), (Error.prepareStackTrace = n);
    }
    return (n = t ? t.displayName || t.name : "") ? Ua(n) : "";
  }
  function mv(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Ua(t.type);
      case 16:
        return Ua("Lazy");
      case 13:
        return Ua("Suspense");
      case 19:
        return Ua("SuspenseList");
      case 0:
      case 15:
        return Br(t.type, !1);
      case 11:
        return Br(t.type.render, !1);
      case 1:
        return Br(t.type, !0);
      case 31:
        return Ua("Activity");
      default:
        return "";
    }
  }
  function Bf(t) {
    try {
      var e = "";
      do (e += mv(t)), (t = t.return);
      while (t);
      return e;
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      );
    }
  }
  function Ee(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Lf(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function pv(t) {
    var e = Lf(t) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      i = "" + t[e];
    if (
      !t.hasOwnProperty(e) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var r = n.get,
        u = n.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return r.call(this);
          },
          set: function (m) {
            (i = "" + m), u.call(this, m);
          },
        }),
        Object.defineProperty(t, e, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return i;
          },
          setValue: function (m) {
            i = "" + m;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function ts(t) {
    t._valueTracker || (t._valueTracker = pv(t));
  }
  function Hf(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      i = "";
    return (
      t && (i = Lf(t) ? (t.checked ? "true" : "false") : t.value),
      (t = i),
      t !== n ? (e.setValue(t), !0) : !1
    );
  }
  function es(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var gv = /[\n"\\]/g;
  function De(t) {
    return t.replace(gv, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Lr(t, e, n, i, r, u, m, x) {
    (t.name = ""),
      m != null &&
      typeof m != "function" &&
      typeof m != "symbol" &&
      typeof m != "boolean"
        ? (t.type = m)
        : t.removeAttribute("type"),
      e != null
        ? m === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + Ee(e))
          : t.value !== "" + Ee(e) && (t.value = "" + Ee(e))
        : (m !== "submit" && m !== "reset") || t.removeAttribute("value"),
      e != null
        ? Hr(t, m, Ee(e))
        : n != null
        ? Hr(t, m, Ee(n))
        : i != null && t.removeAttribute("value"),
      r == null && u != null && (t.defaultChecked = !!u),
      r != null &&
        (t.checked = r && typeof r != "function" && typeof r != "symbol"),
      x != null &&
      typeof x != "function" &&
      typeof x != "symbol" &&
      typeof x != "boolean"
        ? (t.name = "" + Ee(x))
        : t.removeAttribute("name");
  }
  function qf(t, e, n, i, r, u, m, x) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (t.type = u),
      e != null || n != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || e != null)) return;
      (n = n != null ? "" + Ee(n) : ""),
        (e = e != null ? "" + Ee(e) : n),
        x || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (i = i ?? r),
      (i = typeof i != "function" && typeof i != "symbol" && !!i),
      (t.checked = x ? t.checked : !!i),
      (t.defaultChecked = !!i),
      m != null &&
        typeof m != "function" &&
        typeof m != "symbol" &&
        typeof m != "boolean" &&
        (t.name = m);
  }
  function Hr(t, e, n) {
    (e === "number" && es(t.ownerDocument) === t) ||
      t.defaultValue === "" + n ||
      (t.defaultValue = "" + n);
  }
  function ka(t, e, n, i) {
    if (((t = t.options), e)) {
      e = {};
      for (var r = 0; r < n.length; r++) e["$" + n[r]] = !0;
      for (n = 0; n < t.length; n++)
        (r = e.hasOwnProperty("$" + t[n].value)),
          t[n].selected !== r && (t[n].selected = r),
          r && i && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + Ee(n), e = null, r = 0; r < t.length; r++) {
        if (t[r].value === n) {
          (t[r].selected = !0), i && (t[r].defaultSelected = !0);
          return;
        }
        e !== null || t[r].disabled || (e = t[r]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Gf(t, e, n) {
    if (
      e != null &&
      ((e = "" + Ee(e)), e !== t.value && (t.value = e), n == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Ee(n) : "";
  }
  function Yf(t, e, n, i) {
    if (e == null) {
      if (i != null) {
        if (n != null) throw Error(o(92));
        if (Dt(i)) {
          if (1 < i.length) throw Error(o(93));
          i = i[0];
        }
        n = i;
      }
      n == null && (n = ""), (e = n);
    }
    (n = Ee(e)),
      (t.defaultValue = n),
      (i = t.textContent),
      i === n && i !== "" && i !== null && (t.value = i);
  }
  function Ba(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var yv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Xf(t, e, n) {
    var i = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? i
        ? t.setProperty(e, "")
        : e === "float"
        ? (t.cssFloat = "")
        : (t[e] = "")
      : i
      ? t.setProperty(e, n)
      : typeof n != "number" || n === 0 || yv.has(e)
      ? e === "float"
        ? (t.cssFloat = n)
        : (t[e] = ("" + n).trim())
      : (t[e] = n + "px");
  }
  function Zf(t, e, n) {
    if (e != null && typeof e != "object") throw Error(o(62));
    if (((t = t.style), n != null)) {
      for (var i in n)
        !n.hasOwnProperty(i) ||
          (e != null && e.hasOwnProperty(i)) ||
          (i.indexOf("--") === 0
            ? t.setProperty(i, "")
            : i === "float"
            ? (t.cssFloat = "")
            : (t[i] = ""));
      for (var r in e)
        (i = e[r]), e.hasOwnProperty(r) && n[r] !== i && Xf(t, r, i);
    } else for (var u in e) e.hasOwnProperty(u) && Xf(t, u, e[u]);
  }
  function qr(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var vv = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    xv =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ns(t) {
    return xv.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var Gr = null;
  function Yr(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var La = null,
    Ha = null;
  function Kf(t) {
    var e = Oa(t);
    if (e && (t = e.stateNode)) {
      var n = t[fe] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (Lr(
              t,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name
            ),
            (e = n.name),
            n.type === "radio" && e != null)
          ) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + De("" + e) + '"][type="radio"]'
              ),
                e = 0;
              e < n.length;
              e++
            ) {
              var i = n[e];
              if (i !== t && i.form === t.form) {
                var r = i[fe] || null;
                if (!r) throw Error(o(90));
                Lr(
                  i,
                  r.value,
                  r.defaultValue,
                  r.defaultValue,
                  r.checked,
                  r.defaultChecked,
                  r.type,
                  r.name
                );
              }
            }
            for (e = 0; e < n.length; e++)
              (i = n[e]), i.form === t.form && Hf(i);
          }
          break t;
        case "textarea":
          Gf(t, n.value, n.defaultValue);
          break t;
        case "select":
          (e = n.value), e != null && ka(t, !!n.multiple, e, !1);
      }
    }
  }
  var Xr = !1;
  function Qf(t, e, n) {
    if (Xr) return t(e, n);
    Xr = !0;
    try {
      var i = t(e);
      return i;
    } finally {
      if (
        ((Xr = !1),
        (La !== null || Ha !== null) &&
          (qs(), La && ((e = La), (t = Ha), (Ha = La = null), Kf(e), t)))
      )
        for (e = 0; e < t.length; e++) Kf(t[e]);
    }
  }
  function Ui(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var i = n[fe] || null;
    if (i === null) return null;
    n = i[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (i = !i.disabled) ||
          ((t = t.type),
          (i = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !i);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(o(231, e, typeof n));
    return n;
  }
  var tn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Zr = !1;
  if (tn)
    try {
      var ki = {};
      Object.defineProperty(ki, "passive", {
        get: function () {
          Zr = !0;
        },
      }),
        window.addEventListener("test", ki, ki),
        window.removeEventListener("test", ki, ki);
    } catch {
      Zr = !1;
    }
  var En = null,
    Kr = null,
    as = null;
  function Pf() {
    if (as) return as;
    var t,
      e = Kr,
      n = e.length,
      i,
      r = "value" in En ? En.value : En.textContent,
      u = r.length;
    for (t = 0; t < n && e[t] === r[t]; t++);
    var m = n - t;
    for (i = 1; i <= m && e[n - i] === r[u - i]; i++);
    return (as = r.slice(t, 1 < i ? 1 - i : void 0));
  }
  function is(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function ls() {
    return !0;
  }
  function Jf() {
    return !1;
  }
  function de(t) {
    function e(n, i, r, u, m) {
      (this._reactName = n),
        (this._targetInst = r),
        (this.type = i),
        (this.nativeEvent = u),
        (this.target = m),
        (this.currentTarget = null);
      for (var x in t)
        t.hasOwnProperty(x) && ((n = t[x]), (this[x] = n ? n(u) : u[x]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? ls
          : Jf),
        (this.isPropagationStopped = Jf),
        this
      );
    }
    return (
      v(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = ls));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = ls));
        },
        persist: function () {},
        isPersistent: ls,
      }),
      e
    );
  }
  var ra = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ss = de(ra),
    Bi = v({}, ra, { view: 0, detail: 0 }),
    bv = de(Bi),
    Qr,
    Pr,
    Li,
    rs = v({}, Bi, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Fr,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Li &&
              (Li && t.type === "mousemove"
                ? ((Qr = t.screenX - Li.screenX), (Pr = t.screenY - Li.screenY))
                : (Pr = Qr = 0),
              (Li = t)),
            Qr);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Pr;
      },
    }),
    Ff = de(rs),
    Sv = v({}, rs, { dataTransfer: 0 }),
    Tv = de(Sv),
    jv = v({}, Bi, { relatedTarget: 0 }),
    Jr = de(jv),
    Av = v({}, ra, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Nv = de(Av),
    wv = v({}, ra, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    Mv = de(wv),
    Ev = v({}, ra, { data: 0 }),
    $f = de(Ev),
    Dv = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Rv = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Cv = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function zv(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = Cv[t])
      ? !!e[t]
      : !1;
  }
  function Fr() {
    return zv;
  }
  var Ov = v({}, Bi, {
      key: function (t) {
        if (t.key) {
          var e = Dv[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = is(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? Rv[t.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Fr,
      charCode: function (t) {
        return t.type === "keypress" ? is(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? is(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    _v = de(Ov),
    Vv = v({}, rs, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Wf = de(Vv),
    Uv = v({}, Bi, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Fr,
    }),
    kv = de(Uv),
    Bv = v({}, ra, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Lv = de(Bv),
    Hv = v({}, rs, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    qv = de(Hv),
    Gv = v({}, ra, { newState: 0, oldState: 0 }),
    Yv = de(Gv),
    Xv = [9, 13, 27, 32],
    $r = tn && "CompositionEvent" in window,
    Hi = null;
  tn && "documentMode" in document && (Hi = document.documentMode);
  var Zv = tn && "TextEvent" in window && !Hi,
    If = tn && (!$r || (Hi && 8 < Hi && 11 >= Hi)),
    td = " ",
    ed = !1;
  function nd(t, e) {
    switch (t) {
      case "keyup":
        return Xv.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ad(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var qa = !1;
  function Kv(t, e) {
    switch (t) {
      case "compositionend":
        return ad(e);
      case "keypress":
        return e.which !== 32 ? null : ((ed = !0), td);
      case "textInput":
        return (t = e.data), t === td && ed ? null : t;
      default:
        return null;
    }
  }
  function Qv(t, e) {
    if (qa)
      return t === "compositionend" || (!$r && nd(t, e))
        ? ((t = Pf()), (as = Kr = En = null), (qa = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return If && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Pv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function id(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Pv[t.type] : e === "textarea";
  }
  function ld(t, e, n, i) {
    La ? (Ha ? Ha.push(i) : (Ha = [i])) : (La = i),
      (e = Qs(e, "onChange")),
      0 < e.length &&
        ((n = new ss("onChange", "change", null, n, i)),
        t.push({ event: n, listeners: e }));
  }
  var qi = null,
    Gi = null;
  function Jv(t) {
    Lm(t, 0);
  }
  function os(t) {
    var e = Vi(t);
    if (Hf(e)) return t;
  }
  function sd(t, e) {
    if (t === "change") return e;
  }
  var rd = !1;
  if (tn) {
    var Wr;
    if (tn) {
      var Ir = "oninput" in document;
      if (!Ir) {
        var od = document.createElement("div");
        od.setAttribute("oninput", "return;"),
          (Ir = typeof od.oninput == "function");
      }
      Wr = Ir;
    } else Wr = !1;
    rd = Wr && (!document.documentMode || 9 < document.documentMode);
  }
  function ud() {
    qi && (qi.detachEvent("onpropertychange", cd), (Gi = qi = null));
  }
  function cd(t) {
    if (t.propertyName === "value" && os(Gi)) {
      var e = [];
      ld(e, Gi, t, Yr(t)), Qf(Jv, e);
    }
  }
  function Fv(t, e, n) {
    t === "focusin"
      ? (ud(), (qi = e), (Gi = n), qi.attachEvent("onpropertychange", cd))
      : t === "focusout" && ud();
  }
  function $v(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return os(Gi);
  }
  function Wv(t, e) {
    if (t === "click") return os(e);
  }
  function Iv(t, e) {
    if (t === "input" || t === "change") return os(e);
  }
  function tx(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var be = typeof Object.is == "function" ? Object.is : tx;
  function Yi(t, e) {
    if (be(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var n = Object.keys(t),
      i = Object.keys(e);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var r = n[i];
      if (!Nn.call(e, r) || !be(t[r], e[r])) return !1;
    }
    return !0;
  }
  function fd(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function dd(t, e) {
    var n = fd(t);
    t = 0;
    for (var i; n; ) {
      if (n.nodeType === 3) {
        if (((i = t + n.textContent.length), t <= e && i >= e))
          return { node: n, offset: e - t };
        t = i;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = fd(n);
    }
  }
  function hd(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
        ? hd(t, e.parentNode)
        : "contains" in t
        ? t.contains(e)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(e) & 16)
        : !1
      : !1;
  }
  function md(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = es(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = es(t.document);
    }
    return e;
  }
  function to(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var ex = tn && "documentMode" in document && 11 >= document.documentMode,
    Ga = null,
    eo = null,
    Xi = null,
    no = !1;
  function pd(t, e, n) {
    var i =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    no ||
      Ga == null ||
      Ga !== es(i) ||
      ((i = Ga),
      "selectionStart" in i && to(i)
        ? (i = { start: i.selectionStart, end: i.selectionEnd })
        : ((i = (
            (i.ownerDocument && i.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset,
          })),
      (Xi && Yi(Xi, i)) ||
        ((Xi = i),
        (i = Qs(eo, "onSelect")),
        0 < i.length &&
          ((e = new ss("onSelect", "select", null, e, n)),
          t.push({ event: e, listeners: i }),
          (e.target = Ga))));
  }
  function oa(t, e) {
    var n = {};
    return (
      (n[t.toLowerCase()] = e.toLowerCase()),
      (n["Webkit" + t] = "webkit" + e),
      (n["Moz" + t] = "moz" + e),
      n
    );
  }
  var Ya = {
      animationend: oa("Animation", "AnimationEnd"),
      animationiteration: oa("Animation", "AnimationIteration"),
      animationstart: oa("Animation", "AnimationStart"),
      transitionrun: oa("Transition", "TransitionRun"),
      transitionstart: oa("Transition", "TransitionStart"),
      transitioncancel: oa("Transition", "TransitionCancel"),
      transitionend: oa("Transition", "TransitionEnd"),
    },
    ao = {},
    gd = {};
  tn &&
    ((gd = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ya.animationend.animation,
      delete Ya.animationiteration.animation,
      delete Ya.animationstart.animation),
    "TransitionEvent" in window || delete Ya.transitionend.transition);
  function ua(t) {
    if (ao[t]) return ao[t];
    if (!Ya[t]) return t;
    var e = Ya[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in gd) return (ao[t] = e[n]);
    return t;
  }
  var yd = ua("animationend"),
    vd = ua("animationiteration"),
    xd = ua("animationstart"),
    nx = ua("transitionrun"),
    ax = ua("transitionstart"),
    ix = ua("transitioncancel"),
    bd = ua("transitionend"),
    Sd = new Map(),
    io =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  io.push("scrollEnd");
  function He(t, e) {
    Sd.set(t, e), sa(e, [t]);
  }
  var Td = new WeakMap();
  function Re(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = Td.get(t);
      return n !== void 0
        ? n
        : ((e = { value: t, source: e, stack: Bf(e) }), Td.set(t, e), e);
    }
    return { value: t, source: e, stack: Bf(e) };
  }
  var Ce = [],
    Xa = 0,
    lo = 0;
  function us() {
    for (var t = Xa, e = (lo = Xa = 0); e < t; ) {
      var n = Ce[e];
      Ce[e++] = null;
      var i = Ce[e];
      Ce[e++] = null;
      var r = Ce[e];
      Ce[e++] = null;
      var u = Ce[e];
      if (((Ce[e++] = null), i !== null && r !== null)) {
        var m = i.pending;
        m === null ? (r.next = r) : ((r.next = m.next), (m.next = r)),
          (i.pending = r);
      }
      u !== 0 && jd(n, r, u);
    }
  }
  function cs(t, e, n, i) {
    (Ce[Xa++] = t),
      (Ce[Xa++] = e),
      (Ce[Xa++] = n),
      (Ce[Xa++] = i),
      (lo |= i),
      (t.lanes |= i),
      (t = t.alternate),
      t !== null && (t.lanes |= i);
  }
  function so(t, e, n, i) {
    return cs(t, e, n, i), fs(t);
  }
  function Za(t, e) {
    return cs(t, null, null, e), fs(t);
  }
  function jd(t, e, n) {
    t.lanes |= n;
    var i = t.alternate;
    i !== null && (i.lanes |= n);
    for (var r = !1, u = t.return; u !== null; )
      (u.childLanes |= n),
        (i = u.alternate),
        i !== null && (i.childLanes |= n),
        u.tag === 22 &&
          ((t = u.stateNode), t === null || t._visibility & 1 || (r = !0)),
        (t = u),
        (u = u.return);
    return t.tag === 3
      ? ((u = t.stateNode),
        r &&
          e !== null &&
          ((r = 31 - xe(n)),
          (t = u.hiddenUpdates),
          (i = t[r]),
          i === null ? (t[r] = [e]) : i.push(e),
          (e.lane = n | 536870912)),
        u)
      : null;
  }
  function fs(t) {
    if (50 < pl) throw ((pl = 0), (hu = null), Error(o(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ka = {};
  function lx(t, e, n, i) {
    (this.tag = t),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = i),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Se(t, e, n, i) {
    return new lx(t, e, n, i);
  }
  function ro(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function en(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = Se(t.tag, e, t.key, t.mode)),
          (n.elementType = t.elementType),
          (n.type = t.type),
          (n.stateNode = t.stateNode),
          (n.alternate = t),
          (t.alternate = n))
        : ((n.pendingProps = e),
          (n.type = t.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = t.flags & 65011712),
      (n.childLanes = t.childLanes),
      (n.lanes = t.lanes),
      (n.child = t.child),
      (n.memoizedProps = t.memoizedProps),
      (n.memoizedState = t.memoizedState),
      (n.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (n.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (n.sibling = t.sibling),
      (n.index = t.index),
      (n.ref = t.ref),
      (n.refCleanup = t.refCleanup),
      n
    );
  }
  function Ad(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return (
      n === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = n.childLanes),
          (t.lanes = n.lanes),
          (t.child = n.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = n.memoizedProps),
          (t.memoizedState = n.memoizedState),
          (t.updateQueue = n.updateQueue),
          (t.type = n.type),
          (e = n.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function ds(t, e, n, i, r, u) {
    var m = 0;
    if (((i = t), typeof t == "function")) ro(t) && (m = 1);
    else if (typeof t == "string")
      m = r1(t, n, J.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case ut:
          return (t = Se(31, n, e, r)), (t.elementType = ut), (t.lanes = u), t;
        case z:
          return ca(n.children, r, u, e);
        case U:
          (m = 8), (r |= 24);
          break;
        case Z:
          return (
            (t = Se(12, n, e, r | 2)), (t.elementType = Z), (t.lanes = u), t
          );
        case G:
          return (t = Se(13, n, e, r)), (t.elementType = G), (t.lanes = u), t;
        case I:
          return (t = Se(19, n, e, r)), (t.elementType = I), (t.lanes = u), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case X:
              case Q:
                m = 10;
                break t;
              case q:
                m = 9;
                break t;
              case et:
                m = 11;
                break t;
              case nt:
                m = 14;
                break t;
              case L:
                (m = 16), (i = null);
                break t;
            }
          (m = 29),
            (n = Error(o(130, t === null ? "null" : typeof t, ""))),
            (i = null);
      }
    return (
      (e = Se(m, n, e, r)), (e.elementType = t), (e.type = i), (e.lanes = u), e
    );
  }
  function ca(t, e, n, i) {
    return (t = Se(7, t, i, e)), (t.lanes = n), t;
  }
  function oo(t, e, n) {
    return (t = Se(6, t, null, e)), (t.lanes = n), t;
  }
  function uo(t, e, n) {
    return (
      (e = Se(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var Qa = [],
    Pa = 0,
    hs = null,
    ms = 0,
    ze = [],
    Oe = 0,
    fa = null,
    nn = 1,
    an = "";
  function da(t, e) {
    (Qa[Pa++] = ms), (Qa[Pa++] = hs), (hs = t), (ms = e);
  }
  function Nd(t, e, n) {
    (ze[Oe++] = nn), (ze[Oe++] = an), (ze[Oe++] = fa), (fa = t);
    var i = nn;
    t = an;
    var r = 32 - xe(i) - 1;
    (i &= ~(1 << r)), (n += 1);
    var u = 32 - xe(e) + r;
    if (30 < u) {
      var m = r - (r % 5);
      (u = (i & ((1 << m) - 1)).toString(32)),
        (i >>= m),
        (r -= m),
        (nn = (1 << (32 - xe(e) + r)) | (n << r) | i),
        (an = u + t);
    } else (nn = (1 << u) | (n << r) | i), (an = t);
  }
  function co(t) {
    t.return !== null && (da(t, 1), Nd(t, 1, 0));
  }
  function fo(t) {
    for (; t === hs; )
      (hs = Qa[--Pa]), (Qa[Pa] = null), (ms = Qa[--Pa]), (Qa[Pa] = null);
    for (; t === fa; )
      (fa = ze[--Oe]),
        (ze[Oe] = null),
        (an = ze[--Oe]),
        (ze[Oe] = null),
        (nn = ze[--Oe]),
        (ze[Oe] = null);
  }
  var oe = null,
    kt = null,
    St = !1,
    ha = null,
    Ze = !1,
    ho = Error(o(519));
  function ma(t) {
    var e = Error(o(418, ""));
    throw (Qi(Re(e, t)), ho);
  }
  function wd(t) {
    var e = t.stateNode,
      n = t.type,
      i = t.memoizedProps;
    switch (((e[ie] = t), (e[fe] = i), n)) {
      case "dialog":
        gt("cancel", e), gt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        gt("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < yl.length; n++) gt(yl[n], e);
        break;
      case "source":
        gt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        gt("error", e), gt("load", e);
        break;
      case "details":
        gt("toggle", e);
        break;
      case "input":
        gt("invalid", e),
          qf(
            e,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          ),
          ts(e);
        break;
      case "select":
        gt("invalid", e);
        break;
      case "textarea":
        gt("invalid", e), Yf(e, i.value, i.defaultValue, i.children), ts(e);
    }
    (n = i.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      e.textContent === "" + n ||
      i.suppressHydrationWarning === !0 ||
      Ym(e.textContent, n)
        ? (i.popover != null && (gt("beforetoggle", e), gt("toggle", e)),
          i.onScroll != null && gt("scroll", e),
          i.onScrollEnd != null && gt("scrollend", e),
          i.onClick != null && (e.onclick = Ps),
          (e = !0))
        : (e = !1),
      e || ma(t);
  }
  function Md(t) {
    for (oe = t.return; oe; )
      switch (oe.tag) {
        case 5:
        case 13:
          Ze = !1;
          return;
        case 27:
        case 3:
          Ze = !0;
          return;
        default:
          oe = oe.return;
      }
  }
  function Zi(t) {
    if (t !== oe) return !1;
    if (!St) return Md(t), (St = !0), !1;
    var e = t.tag,
      n;
    if (
      ((n = e !== 3 && e !== 27) &&
        ((n = e === 5) &&
          ((n = t.type),
          (n =
            !(n !== "form" && n !== "button") || Du(t.type, t.memoizedProps))),
        (n = !n)),
      n && kt && ma(t),
      Md(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(o(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((n = t.data), n === "/$")) {
              if (e === 0) {
                kt = Ge(t.nextSibling);
                break t;
              }
              e--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
          t = t.nextSibling;
        }
        kt = null;
      }
    } else
      e === 27
        ? ((e = kt), Xn(t.type) ? ((t = Ou), (Ou = null), (kt = t)) : (kt = e))
        : (kt = oe ? Ge(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Ki() {
    (kt = oe = null), (St = !1);
  }
  function Ed() {
    var t = ha;
    return (
      t !== null &&
        (pe === null ? (pe = t) : pe.push.apply(pe, t), (ha = null)),
      t
    );
  }
  function Qi(t) {
    ha === null ? (ha = [t]) : ha.push(t);
  }
  var mo = B(null),
    pa = null,
    ln = null;
  function Dn(t, e, n) {
    K(mo, e._currentValue), (e._currentValue = n);
  }
  function sn(t) {
    (t._currentValue = mo.current), P(mo);
  }
  function po(t, e, n) {
    for (; t !== null; ) {
      var i = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), i !== null && (i.childLanes |= e))
          : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function go(t, e, n, i) {
    var r = t.child;
    for (r !== null && (r.return = t); r !== null; ) {
      var u = r.dependencies;
      if (u !== null) {
        var m = r.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var x = u;
          u = r;
          for (var T = 0; T < e.length; T++)
            if (x.context === e[T]) {
              (u.lanes |= n),
                (x = u.alternate),
                x !== null && (x.lanes |= n),
                po(u.return, n, t),
                i || (m = null);
              break t;
            }
          u = x.next;
        }
      } else if (r.tag === 18) {
        if (((m = r.return), m === null)) throw Error(o(341));
        (m.lanes |= n),
          (u = m.alternate),
          u !== null && (u.lanes |= n),
          po(m, n, t),
          (m = null);
      } else m = r.child;
      if (m !== null) m.return = r;
      else
        for (m = r; m !== null; ) {
          if (m === t) {
            m = null;
            break;
          }
          if (((r = m.sibling), r !== null)) {
            (r.return = m.return), (m = r);
            break;
          }
          m = m.return;
        }
      r = m;
    }
  }
  function Pi(t, e, n, i) {
    t = null;
    for (var r = e, u = !1; r !== null; ) {
      if (!u) {
        if ((r.flags & 524288) !== 0) u = !0;
        else if ((r.flags & 262144) !== 0) break;
      }
      if (r.tag === 10) {
        var m = r.alternate;
        if (m === null) throw Error(o(387));
        if (((m = m.memoizedProps), m !== null)) {
          var x = r.type;
          be(r.pendingProps.value, m.value) ||
            (t !== null ? t.push(x) : (t = [x]));
        }
      } else if (r === xt.current) {
        if (((m = r.alternate), m === null)) throw Error(o(387));
        m.memoizedState.memoizedState !== r.memoizedState.memoizedState &&
          (t !== null ? t.push(jl) : (t = [jl]));
      }
      r = r.return;
    }
    t !== null && go(e, t, n, i), (e.flags |= 262144);
  }
  function ps(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!be(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function ga(t) {
    (pa = t),
      (ln = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function le(t) {
    return Dd(pa, t);
  }
  function gs(t, e) {
    return pa === null && ga(t), Dd(t, e);
  }
  function Dd(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), ln === null)) {
      if (t === null) throw Error(o(308));
      (ln = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288);
    } else ln = ln.next = e;
    return n;
  }
  var sx =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (n, i) {
                  t.push(i);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                t.forEach(function (n) {
                  return n();
                });
            };
          },
    rx = a.unstable_scheduleCallback,
    ox = a.unstable_NormalPriority,
    Qt = {
      $$typeof: Q,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function yo() {
    return { controller: new sx(), data: new Map(), refCount: 0 };
  }
  function Ji(t) {
    t.refCount--,
      t.refCount === 0 &&
        rx(ox, function () {
          t.controller.abort();
        });
  }
  var Fi = null,
    vo = 0,
    Ja = 0,
    Fa = null;
  function ux(t, e) {
    if (Fi === null) {
      var n = (Fi = []);
      (vo = 0),
        (Ja = bu()),
        (Fa = {
          status: "pending",
          value: void 0,
          then: function (i) {
            n.push(i);
          },
        });
    }
    return vo++, e.then(Rd, Rd), e;
  }
  function Rd() {
    if (--vo === 0 && Fi !== null) {
      Fa !== null && (Fa.status = "fulfilled");
      var t = Fi;
      (Fi = null), (Ja = 0), (Fa = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function cx(t, e) {
    var n = [],
      i = {
        status: "pending",
        value: null,
        reason: null,
        then: function (r) {
          n.push(r);
        },
      };
    return (
      t.then(
        function () {
          (i.status = "fulfilled"), (i.value = e);
          for (var r = 0; r < n.length; r++) (0, n[r])(e);
        },
        function (r) {
          for (i.status = "rejected", i.reason = r, r = 0; r < n.length; r++)
            (0, n[r])(void 0);
        }
      ),
      i
    );
  }
  var Cd = C.S;
  C.S = function (t, e) {
    typeof e == "object" &&
      e !== null &&
      typeof e.then == "function" &&
      ux(t, e),
      Cd !== null && Cd(t, e);
  };
  var ya = B(null);
  function xo() {
    var t = ya.current;
    return t !== null ? t : Rt.pooledCache;
  }
  function ys(t, e) {
    e === null ? K(ya, ya.current) : K(ya, e.pool);
  }
  function zd() {
    var t = xo();
    return t === null ? null : { parent: Qt._currentValue, pool: t };
  }
  var $i = Error(o(460)),
    Od = Error(o(474)),
    vs = Error(o(542)),
    bo = { then: function () {} };
  function _d(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function xs() {}
  function Vd(t, e, n) {
    switch (
      ((n = t[n]),
      n === void 0 ? t.push(e) : n !== e && (e.then(xs, xs), (e = n)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), kd(t), t);
      default:
        if (typeof e.status == "string") e.then(xs, xs);
        else {
          if (((t = Rt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(o(482));
          (t = e),
            (t.status = "pending"),
            t.then(
              function (i) {
                if (e.status === "pending") {
                  var r = e;
                  (r.status = "fulfilled"), (r.value = i);
                }
              },
              function (i) {
                if (e.status === "pending") {
                  var r = e;
                  (r.status = "rejected"), (r.reason = i);
                }
              }
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), kd(t), t);
        }
        throw ((Wi = e), $i);
    }
  }
  var Wi = null;
  function Ud() {
    if (Wi === null) throw Error(o(459));
    var t = Wi;
    return (Wi = null), t;
  }
  function kd(t) {
    if (t === $i || t === vs) throw Error(o(483));
  }
  var Rn = !1;
  function So(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function To(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function Cn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function zn(t, e, n) {
    var i = t.updateQueue;
    if (i === null) return null;
    if (((i = i.shared), (Tt & 2) !== 0)) {
      var r = i.pending;
      return (
        r === null ? (e.next = e) : ((e.next = r.next), (r.next = e)),
        (i.pending = e),
        (e = fs(t)),
        jd(t, null, n),
        e
      );
    }
    return cs(t, i, e, n), fs(t);
  }
  function Ii(t, e, n) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194048) !== 0))
    ) {
      var i = e.lanes;
      (i &= t.pendingLanes), (n |= i), (e.lanes = n), Rf(t, n);
    }
  }
  function jo(t, e) {
    var n = t.updateQueue,
      i = t.alternate;
    if (i !== null && ((i = i.updateQueue), n === i)) {
      var r = null,
        u = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var m = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          u === null ? (r = u = m) : (u = u.next = m), (n = n.next);
        } while (n !== null);
        u === null ? (r = u = e) : (u = u.next = e);
      } else r = u = e;
      (n = {
        baseState: i.baseState,
        firstBaseUpdate: r,
        lastBaseUpdate: u,
        shared: i.shared,
        callbacks: i.callbacks,
      }),
        (t.updateQueue = n);
      return;
    }
    (t = n.lastBaseUpdate),
      t === null ? (n.firstBaseUpdate = e) : (t.next = e),
      (n.lastBaseUpdate = e);
  }
  var Ao = !1;
  function tl() {
    if (Ao) {
      var t = Fa;
      if (t !== null) throw t;
    }
  }
  function el(t, e, n, i) {
    Ao = !1;
    var r = t.updateQueue;
    Rn = !1;
    var u = r.firstBaseUpdate,
      m = r.lastBaseUpdate,
      x = r.shared.pending;
    if (x !== null) {
      r.shared.pending = null;
      var T = x,
        M = T.next;
      (T.next = null), m === null ? (u = M) : (m.next = M), (m = T);
      var O = t.alternate;
      O !== null &&
        ((O = O.updateQueue),
        (x = O.lastBaseUpdate),
        x !== m &&
          (x === null ? (O.firstBaseUpdate = M) : (x.next = M),
          (O.lastBaseUpdate = T)));
    }
    if (u !== null) {
      var V = r.baseState;
      (m = 0), (O = M = T = null), (x = u);
      do {
        var D = x.lane & -536870913,
          R = D !== x.lane;
        if (R ? (vt & D) === D : (i & D) === D) {
          D !== 0 && D === Ja && (Ao = !0),
            O !== null &&
              (O = O.next =
                {
                  lane: 0,
                  tag: x.tag,
                  payload: x.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var lt = t,
              at = x;
            D = e;
            var wt = n;
            switch (at.tag) {
              case 1:
                if (((lt = at.payload), typeof lt == "function")) {
                  V = lt.call(wt, V, D);
                  break t;
                }
                V = lt;
                break t;
              case 3:
                lt.flags = (lt.flags & -65537) | 128;
              case 0:
                if (
                  ((lt = at.payload),
                  (D = typeof lt == "function" ? lt.call(wt, V, D) : lt),
                  D == null)
                )
                  break t;
                V = v({}, V, D);
                break t;
              case 2:
                Rn = !0;
            }
          }
          (D = x.callback),
            D !== null &&
              ((t.flags |= 64),
              R && (t.flags |= 8192),
              (R = r.callbacks),
              R === null ? (r.callbacks = [D]) : R.push(D));
        } else
          (R = {
            lane: D,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null,
          }),
            O === null ? ((M = O = R), (T = V)) : (O = O.next = R),
            (m |= D);
        if (((x = x.next), x === null)) {
          if (((x = r.shared.pending), x === null)) break;
          (R = x),
            (x = R.next),
            (R.next = null),
            (r.lastBaseUpdate = R),
            (r.shared.pending = null);
        }
      } while (!0);
      O === null && (T = V),
        (r.baseState = T),
        (r.firstBaseUpdate = M),
        (r.lastBaseUpdate = O),
        u === null && (r.shared.lanes = 0),
        (Hn |= m),
        (t.lanes = m),
        (t.memoizedState = V);
    }
  }
  function Bd(t, e) {
    if (typeof t != "function") throw Error(o(191, t));
    t.call(e);
  }
  function Ld(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++) Bd(n[t], e);
  }
  var $a = B(null),
    bs = B(0);
  function Hd(t, e) {
    (t = hn), K(bs, t), K($a, e), (hn = t | e.baseLanes);
  }
  function No() {
    K(bs, hn), K($a, $a.current);
  }
  function wo() {
    (hn = bs.current), P($a), P(bs);
  }
  var On = 0,
    ct = null,
    At = null,
    Xt = null,
    Ss = !1,
    Wa = !1,
    va = !1,
    Ts = 0,
    nl = 0,
    Ia = null,
    fx = 0;
  function qt() {
    throw Error(o(321));
  }
  function Mo(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!be(t[n], e[n])) return !1;
    return !0;
  }
  function Eo(t, e, n, i, r, u) {
    return (
      (On = u),
      (ct = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (C.H = t === null || t.memoizedState === null ? jh : Ah),
      (va = !1),
      (u = n(i, r)),
      (va = !1),
      Wa && (u = Gd(e, n, i, r)),
      qd(t),
      u
    );
  }
  function qd(t) {
    C.H = Es;
    var e = At !== null && At.next !== null;
    if (((On = 0), (Xt = At = ct = null), (Ss = !1), (nl = 0), (Ia = null), e))
      throw Error(o(300));
    t === null ||
      $t ||
      ((t = t.dependencies), t !== null && ps(t) && ($t = !0));
  }
  function Gd(t, e, n, i) {
    ct = t;
    var r = 0;
    do {
      if ((Wa && (Ia = null), (nl = 0), (Wa = !1), 25 <= r))
        throw Error(o(301));
      if (((r += 1), (Xt = At = null), t.updateQueue != null)) {
        var u = t.updateQueue;
        (u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0);
      }
      (C.H = vx), (u = e(n, i));
    } while (Wa);
    return u;
  }
  function dx() {
    var t = C.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? al(e) : e),
      (t = t.useState()[0]),
      (At !== null ? At.memoizedState : null) !== t && (ct.flags |= 1024),
      e
    );
  }
  function Do() {
    var t = Ts !== 0;
    return (Ts = 0), t;
  }
  function Ro(t, e, n) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n);
  }
  function Co(t) {
    if (Ss) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      Ss = !1;
    }
    (On = 0), (Xt = At = ct = null), (Wa = !1), (nl = Ts = 0), (Ia = null);
  }
  function he() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Xt === null ? (ct.memoizedState = Xt = t) : (Xt = Xt.next = t), Xt;
  }
  function Zt() {
    if (At === null) {
      var t = ct.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = At.next;
    var e = Xt === null ? ct.memoizedState : Xt.next;
    if (e !== null) (Xt = e), (At = t);
    else {
      if (t === null)
        throw ct.alternate === null ? Error(o(467)) : Error(o(310));
      (At = t),
        (t = {
          memoizedState: At.memoizedState,
          baseState: At.baseState,
          baseQueue: At.baseQueue,
          queue: At.queue,
          next: null,
        }),
        Xt === null ? (ct.memoizedState = Xt = t) : (Xt = Xt.next = t);
    }
    return Xt;
  }
  function zo() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function al(t) {
    var e = nl;
    return (
      (nl += 1),
      Ia === null && (Ia = []),
      (t = Vd(Ia, t, e)),
      (e = ct),
      (Xt === null ? e.memoizedState : Xt.next) === null &&
        ((e = e.alternate),
        (C.H = e === null || e.memoizedState === null ? jh : Ah)),
      t
    );
  }
  function js(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return al(t);
      if (t.$$typeof === Q) return le(t);
    }
    throw Error(o(438, String(t)));
  }
  function Oo(t) {
    var e = null,
      n = ct.updateQueue;
    if ((n !== null && (e = n.memoCache), e == null)) {
      var i = ct.alternate;
      i !== null &&
        ((i = i.updateQueue),
        i !== null &&
          ((i = i.memoCache),
          i != null &&
            (e = {
              data: i.data.map(function (r) {
                return r.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      n === null && ((n = zo()), (ct.updateQueue = n)),
      (n.memoCache = e),
      (n = e.data[e.index]),
      n === void 0)
    )
      for (n = e.data[e.index] = Array(t), i = 0; i < t; i++) n[i] = Ct;
    return e.index++, n;
  }
  function rn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function As(t) {
    var e = Zt();
    return _o(e, At, t);
  }
  function _o(t, e, n) {
    var i = t.queue;
    if (i === null) throw Error(o(311));
    i.lastRenderedReducer = n;
    var r = t.baseQueue,
      u = i.pending;
    if (u !== null) {
      if (r !== null) {
        var m = r.next;
        (r.next = u.next), (u.next = m);
      }
      (e.baseQueue = r = u), (i.pending = null);
    }
    if (((u = t.baseState), r === null)) t.memoizedState = u;
    else {
      e = r.next;
      var x = (m = null),
        T = null,
        M = e,
        O = !1;
      do {
        var V = M.lane & -536870913;
        if (V !== M.lane ? (vt & V) === V : (On & V) === V) {
          var D = M.revertLane;
          if (D === 0)
            T !== null &&
              (T = T.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: M.action,
                  hasEagerState: M.hasEagerState,
                  eagerState: M.eagerState,
                  next: null,
                }),
              V === Ja && (O = !0);
          else if ((On & D) === D) {
            (M = M.next), D === Ja && (O = !0);
            continue;
          } else
            (V = {
              lane: 0,
              revertLane: M.revertLane,
              action: M.action,
              hasEagerState: M.hasEagerState,
              eagerState: M.eagerState,
              next: null,
            }),
              T === null ? ((x = T = V), (m = u)) : (T = T.next = V),
              (ct.lanes |= D),
              (Hn |= D);
          (V = M.action),
            va && n(u, V),
            (u = M.hasEagerState ? M.eagerState : n(u, V));
        } else
          (D = {
            lane: V,
            revertLane: M.revertLane,
            action: M.action,
            hasEagerState: M.hasEagerState,
            eagerState: M.eagerState,
            next: null,
          }),
            T === null ? ((x = T = D), (m = u)) : (T = T.next = D),
            (ct.lanes |= V),
            (Hn |= V);
        M = M.next;
      } while (M !== null && M !== e);
      if (
        (T === null ? (m = u) : (T.next = x),
        !be(u, t.memoizedState) && (($t = !0), O && ((n = Fa), n !== null)))
      )
        throw n;
      (t.memoizedState = u),
        (t.baseState = m),
        (t.baseQueue = T),
        (i.lastRenderedState = u);
    }
    return r === null && (i.lanes = 0), [t.memoizedState, i.dispatch];
  }
  function Vo(t) {
    var e = Zt(),
      n = e.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = t;
    var i = n.dispatch,
      r = n.pending,
      u = e.memoizedState;
    if (r !== null) {
      n.pending = null;
      var m = (r = r.next);
      do (u = t(u, m.action)), (m = m.next);
      while (m !== r);
      be(u, e.memoizedState) || ($t = !0),
        (e.memoizedState = u),
        e.baseQueue === null && (e.baseState = u),
        (n.lastRenderedState = u);
    }
    return [u, i];
  }
  function Yd(t, e, n) {
    var i = ct,
      r = Zt(),
      u = St;
    if (u) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else n = e();
    var m = !be((At || r).memoizedState, n);
    m && ((r.memoizedState = n), ($t = !0)), (r = r.queue);
    var x = Kd.bind(null, i, r, t);
    if (
      (il(2048, 8, x, [t]),
      r.getSnapshot !== e || m || (Xt !== null && Xt.memoizedState.tag & 1))
    ) {
      if (
        ((i.flags |= 2048),
        ti(9, Ns(), Zd.bind(null, i, r, n, e), null),
        Rt === null)
      )
        throw Error(o(349));
      u || (On & 124) !== 0 || Xd(i, e, n);
    }
    return n;
  }
  function Xd(t, e, n) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = ct.updateQueue),
      e === null
        ? ((e = zo()), (ct.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
  }
  function Zd(t, e, n, i) {
    (e.value = n), (e.getSnapshot = i), Qd(e) && Pd(t);
  }
  function Kd(t, e, n) {
    return n(function () {
      Qd(e) && Pd(t);
    });
  }
  function Qd(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !be(t, n);
    } catch {
      return !0;
    }
  }
  function Pd(t) {
    var e = Za(t, 2);
    e !== null && we(e, t, 2);
  }
  function Uo(t) {
    var e = he();
    if (typeof t == "function") {
      var n = t;
      if (((t = n()), va)) {
        wn(!0);
        try {
          n();
        } finally {
          wn(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: rn,
        lastRenderedState: t,
      }),
      e
    );
  }
  function Jd(t, e, n, i) {
    return (t.baseState = n), _o(t, At, typeof i == "function" ? i : rn);
  }
  function hx(t, e, n, i, r) {
    if (Ms(t)) throw Error(o(485));
    if (((t = e.action), t !== null)) {
      var u = {
        payload: r,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (m) {
          u.listeners.push(m);
        },
      };
      C.T !== null ? n(!0) : (u.isTransition = !1),
        i(u),
        (n = e.pending),
        n === null
          ? ((u.next = e.pending = u), Fd(e, u))
          : ((u.next = n.next), (e.pending = n.next = u));
    }
  }
  function Fd(t, e) {
    var n = e.action,
      i = e.payload,
      r = t.state;
    if (e.isTransition) {
      var u = C.T,
        m = {};
      C.T = m;
      try {
        var x = n(r, i),
          T = C.S;
        T !== null && T(m, x), $d(t, e, x);
      } catch (M) {
        ko(t, e, M);
      } finally {
        C.T = u;
      }
    } else
      try {
        (u = n(r, i)), $d(t, e, u);
      } catch (M) {
        ko(t, e, M);
      }
  }
  function $d(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (i) {
            Wd(t, e, i);
          },
          function (i) {
            return ko(t, e, i);
          }
        )
      : Wd(t, e, n);
  }
  function Wd(t, e, n) {
    (e.status = "fulfilled"),
      (e.value = n),
      Id(e),
      (t.state = n),
      (e = t.pending),
      e !== null &&
        ((n = e.next),
        n === e ? (t.pending = null) : ((n = n.next), (e.next = n), Fd(t, n)));
  }
  function ko(t, e, n) {
    var i = t.pending;
    if (((t.pending = null), i !== null)) {
      i = i.next;
      do (e.status = "rejected"), (e.reason = n), Id(e), (e = e.next);
      while (e !== i);
    }
    t.action = null;
  }
  function Id(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function th(t, e) {
    return e;
  }
  function eh(t, e) {
    if (St) {
      var n = Rt.formState;
      if (n !== null) {
        t: {
          var i = ct;
          if (St) {
            if (kt) {
              e: {
                for (var r = kt, u = Ze; r.nodeType !== 8; ) {
                  if (!u) {
                    r = null;
                    break e;
                  }
                  if (((r = Ge(r.nextSibling)), r === null)) {
                    r = null;
                    break e;
                  }
                }
                (u = r.data), (r = u === "F!" || u === "F" ? r : null);
              }
              if (r) {
                (kt = Ge(r.nextSibling)), (i = r.data === "F!");
                break t;
              }
            }
            ma(i);
          }
          i = !1;
        }
        i && (e = n[0]);
      }
    }
    return (
      (n = he()),
      (n.memoizedState = n.baseState = e),
      (i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: th,
        lastRenderedState: e,
      }),
      (n.queue = i),
      (n = bh.bind(null, ct, i)),
      (i.dispatch = n),
      (i = Uo(!1)),
      (u = Go.bind(null, ct, !1, i.queue)),
      (i = he()),
      (r = { state: e, dispatch: null, action: t, pending: null }),
      (i.queue = r),
      (n = hx.bind(null, ct, r, u, n)),
      (r.dispatch = n),
      (i.memoizedState = t),
      [e, n, !1]
    );
  }
  function nh(t) {
    var e = Zt();
    return ah(e, At, t);
  }
  function ah(t, e, n) {
    if (
      ((e = _o(t, e, th)[0]),
      (t = As(rn)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var i = al(e);
      } catch (m) {
        throw m === $i ? vs : m;
      }
    else i = e;
    e = Zt();
    var r = e.queue,
      u = r.dispatch;
    return (
      n !== e.memoizedState &&
        ((ct.flags |= 2048), ti(9, Ns(), mx.bind(null, r, n), null)),
      [i, u, t]
    );
  }
  function mx(t, e) {
    t.action = e;
  }
  function ih(t) {
    var e = Zt(),
      n = At;
    if (n !== null) return ah(e, n, t);
    Zt(), (e = e.memoizedState), (n = Zt());
    var i = n.queue.dispatch;
    return (n.memoizedState = t), [e, i, !1];
  }
  function ti(t, e, n, i) {
    return (
      (t = { tag: t, create: n, deps: i, inst: e, next: null }),
      (e = ct.updateQueue),
      e === null && ((e = zo()), (ct.updateQueue = e)),
      (n = e.lastEffect),
      n === null
        ? (e.lastEffect = t.next = t)
        : ((i = n.next), (n.next = t), (t.next = i), (e.lastEffect = t)),
      t
    );
  }
  function Ns() {
    return { destroy: void 0, resource: void 0 };
  }
  function lh() {
    return Zt().memoizedState;
  }
  function ws(t, e, n, i) {
    var r = he();
    (i = i === void 0 ? null : i),
      (ct.flags |= t),
      (r.memoizedState = ti(1 | e, Ns(), n, i));
  }
  function il(t, e, n, i) {
    var r = Zt();
    i = i === void 0 ? null : i;
    var u = r.memoizedState.inst;
    At !== null && i !== null && Mo(i, At.memoizedState.deps)
      ? (r.memoizedState = ti(e, u, n, i))
      : ((ct.flags |= t), (r.memoizedState = ti(1 | e, u, n, i)));
  }
  function sh(t, e) {
    ws(8390656, 8, t, e);
  }
  function rh(t, e) {
    il(2048, 8, t, e);
  }
  function oh(t, e) {
    return il(4, 2, t, e);
  }
  function uh(t, e) {
    return il(4, 4, t, e);
  }
  function ch(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function () {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function fh(t, e, n) {
    (n = n != null ? n.concat([t]) : null), il(4, 4, ch.bind(null, e, t), n);
  }
  function Bo() {}
  function dh(t, e) {
    var n = Zt();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    return e !== null && Mo(e, i[1]) ? i[0] : ((n.memoizedState = [t, e]), t);
  }
  function hh(t, e) {
    var n = Zt();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    if (e !== null && Mo(e, i[1])) return i[0];
    if (((i = t()), va)) {
      wn(!0);
      try {
        t();
      } finally {
        wn(!1);
      }
    }
    return (n.memoizedState = [i, e]), i;
  }
  function Lo(t, e, n) {
    return n === void 0 || (On & 1073741824) !== 0
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = gm()), (ct.lanes |= t), (Hn |= t), n);
  }
  function mh(t, e, n, i) {
    return be(n, e)
      ? n
      : $a.current !== null
      ? ((t = Lo(t, n, i)), be(t, e) || ($t = !0), t)
      : (On & 42) === 0
      ? (($t = !0), (t.memoizedState = n))
      : ((t = gm()), (ct.lanes |= t), (Hn |= t), e);
  }
  function ph(t, e, n, i, r) {
    var u = H.p;
    H.p = u !== 0 && 8 > u ? u : 8;
    var m = C.T,
      x = {};
    (C.T = x), Go(t, !1, e, n);
    try {
      var T = r(),
        M = C.S;
      if (
        (M !== null && M(x, T),
        T !== null && typeof T == "object" && typeof T.then == "function")
      ) {
        var O = cx(T, i);
        ll(t, e, O, Ne(t));
      } else ll(t, e, i, Ne(t));
    } catch (V) {
      ll(t, e, { then: function () {}, status: "rejected", reason: V }, Ne());
    } finally {
      (H.p = u), (C.T = m);
    }
  }
  function px() {}
  function Ho(t, e, n, i) {
    if (t.tag !== 5) throw Error(o(476));
    var r = gh(t).queue;
    ph(
      t,
      r,
      e,
      k,
      n === null
        ? px
        : function () {
            return yh(t), n(i);
          }
    );
  }
  function gh(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: k,
      baseState: k,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: rn,
        lastRenderedState: k,
      },
      next: null,
    };
    var n = {};
    return (
      (e.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: rn,
          lastRenderedState: n,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function yh(t) {
    var e = gh(t).next.queue;
    ll(t, e, {}, Ne());
  }
  function qo() {
    return le(jl);
  }
  function vh() {
    return Zt().memoizedState;
  }
  function xh() {
    return Zt().memoizedState;
  }
  function gx(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Ne();
          t = Cn(n);
          var i = zn(e, t, n);
          i !== null && (we(i, e, n), Ii(i, e, n)),
            (e = { cache: yo() }),
            (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function yx(t, e, n) {
    var i = Ne();
    (n = {
      lane: i,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Ms(t)
        ? Sh(e, n)
        : ((n = so(t, e, n, i)), n !== null && (we(n, t, i), Th(n, e, i)));
  }
  function bh(t, e, n) {
    var i = Ne();
    ll(t, e, n, i);
  }
  function ll(t, e, n, i) {
    var r = {
      lane: i,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Ms(t)) Sh(e, r);
    else {
      var u = t.alternate;
      if (
        t.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = e.lastRenderedReducer), u !== null)
      )
        try {
          var m = e.lastRenderedState,
            x = u(m, n);
          if (((r.hasEagerState = !0), (r.eagerState = x), be(x, m)))
            return cs(t, e, r, 0), Rt === null && us(), !1;
        } catch {
        } finally {
        }
      if (((n = so(t, e, r, i)), n !== null))
        return we(n, t, i), Th(n, e, i), !0;
    }
    return !1;
  }
  function Go(t, e, n, i) {
    if (
      ((i = {
        lane: 2,
        revertLane: bu(),
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Ms(t))
    ) {
      if (e) throw Error(o(479));
    } else (e = so(t, n, i, 2)), e !== null && we(e, t, 2);
  }
  function Ms(t) {
    var e = t.alternate;
    return t === ct || (e !== null && e === ct);
  }
  function Sh(t, e) {
    Wa = Ss = !0;
    var n = t.pending;
    n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
      (t.pending = e);
  }
  function Th(t, e, n) {
    if ((n & 4194048) !== 0) {
      var i = e.lanes;
      (i &= t.pendingLanes), (n |= i), (e.lanes = n), Rf(t, n);
    }
  }
  var Es = {
      readContext: le,
      use: js,
      useCallback: qt,
      useContext: qt,
      useEffect: qt,
      useImperativeHandle: qt,
      useLayoutEffect: qt,
      useInsertionEffect: qt,
      useMemo: qt,
      useReducer: qt,
      useRef: qt,
      useState: qt,
      useDebugValue: qt,
      useDeferredValue: qt,
      useTransition: qt,
      useSyncExternalStore: qt,
      useId: qt,
      useHostTransitionStatus: qt,
      useFormState: qt,
      useActionState: qt,
      useOptimistic: qt,
      useMemoCache: qt,
      useCacheRefresh: qt,
    },
    jh = {
      readContext: le,
      use: js,
      useCallback: function (t, e) {
        return (he().memoizedState = [t, e === void 0 ? null : e]), t;
      },
      useContext: le,
      useEffect: sh,
      useImperativeHandle: function (t, e, n) {
        (n = n != null ? n.concat([t]) : null),
          ws(4194308, 4, ch.bind(null, e, t), n);
      },
      useLayoutEffect: function (t, e) {
        return ws(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        ws(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var n = he();
        e = e === void 0 ? null : e;
        var i = t();
        if (va) {
          wn(!0);
          try {
            t();
          } finally {
            wn(!1);
          }
        }
        return (n.memoizedState = [i, e]), i;
      },
      useReducer: function (t, e, n) {
        var i = he();
        if (n !== void 0) {
          var r = n(e);
          if (va) {
            wn(!0);
            try {
              n(e);
            } finally {
              wn(!1);
            }
          }
        } else r = e;
        return (
          (i.memoizedState = i.baseState = r),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: r,
          }),
          (i.queue = t),
          (t = t.dispatch = yx.bind(null, ct, t)),
          [i.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = he();
        return (t = { current: t }), (e.memoizedState = t);
      },
      useState: function (t) {
        t = Uo(t);
        var e = t.queue,
          n = bh.bind(null, ct, e);
        return (e.dispatch = n), [t.memoizedState, n];
      },
      useDebugValue: Bo,
      useDeferredValue: function (t, e) {
        var n = he();
        return Lo(n, t, e);
      },
      useTransition: function () {
        var t = Uo(!1);
        return (
          (t = ph.bind(null, ct, t.queue, !0, !1)),
          (he().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, n) {
        var i = ct,
          r = he();
        if (St) {
          if (n === void 0) throw Error(o(407));
          n = n();
        } else {
          if (((n = e()), Rt === null)) throw Error(o(349));
          (vt & 124) !== 0 || Xd(i, e, n);
        }
        r.memoizedState = n;
        var u = { value: n, getSnapshot: e };
        return (
          (r.queue = u),
          sh(Kd.bind(null, i, u, t), [t]),
          (i.flags |= 2048),
          ti(9, Ns(), Zd.bind(null, i, u, n, e), null),
          n
        );
      },
      useId: function () {
        var t = he(),
          e = Rt.identifierPrefix;
        if (St) {
          var n = an,
            i = nn;
          (n = (i & ~(1 << (32 - xe(i) - 1))).toString(32) + n),
            (e = "«" + e + "R" + n),
            (n = Ts++),
            0 < n && (e += "H" + n.toString(32)),
            (e += "»");
        } else (n = fx++), (e = "«" + e + "r" + n.toString(32) + "»");
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: qo,
      useFormState: eh,
      useActionState: eh,
      useOptimistic: function (t) {
        var e = he();
        e.memoizedState = e.baseState = t;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = n),
          (e = Go.bind(null, ct, !0, n)),
          (n.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: Oo,
      useCacheRefresh: function () {
        return (he().memoizedState = gx.bind(null, ct));
      },
    },
    Ah = {
      readContext: le,
      use: js,
      useCallback: dh,
      useContext: le,
      useEffect: rh,
      useImperativeHandle: fh,
      useInsertionEffect: oh,
      useLayoutEffect: uh,
      useMemo: hh,
      useReducer: As,
      useRef: lh,
      useState: function () {
        return As(rn);
      },
      useDebugValue: Bo,
      useDeferredValue: function (t, e) {
        var n = Zt();
        return mh(n, At.memoizedState, t, e);
      },
      useTransition: function () {
        var t = As(rn)[0],
          e = Zt().memoizedState;
        return [typeof t == "boolean" ? t : al(t), e];
      },
      useSyncExternalStore: Yd,
      useId: vh,
      useHostTransitionStatus: qo,
      useFormState: nh,
      useActionState: nh,
      useOptimistic: function (t, e) {
        var n = Zt();
        return Jd(n, At, t, e);
      },
      useMemoCache: Oo,
      useCacheRefresh: xh,
    },
    vx = {
      readContext: le,
      use: js,
      useCallback: dh,
      useContext: le,
      useEffect: rh,
      useImperativeHandle: fh,
      useInsertionEffect: oh,
      useLayoutEffect: uh,
      useMemo: hh,
      useReducer: Vo,
      useRef: lh,
      useState: function () {
        return Vo(rn);
      },
      useDebugValue: Bo,
      useDeferredValue: function (t, e) {
        var n = Zt();
        return At === null ? Lo(n, t, e) : mh(n, At.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Vo(rn)[0],
          e = Zt().memoizedState;
        return [typeof t == "boolean" ? t : al(t), e];
      },
      useSyncExternalStore: Yd,
      useId: vh,
      useHostTransitionStatus: qo,
      useFormState: ih,
      useActionState: ih,
      useOptimistic: function (t, e) {
        var n = Zt();
        return At !== null
          ? Jd(n, At, t, e)
          : ((n.baseState = t), [t, n.queue.dispatch]);
      },
      useMemoCache: Oo,
      useCacheRefresh: xh,
    },
    ei = null,
    sl = 0;
  function Ds(t) {
    var e = sl;
    return (sl += 1), ei === null && (ei = []), Vd(ei, t, e);
  }
  function rl(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function Rs(t, e) {
    throw e.$$typeof === b
      ? Error(o(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          o(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t
          )
        ));
  }
  function Nh(t) {
    var e = t._init;
    return e(t._payload);
  }
  function wh(t) {
    function e(N, A) {
      if (t) {
        var w = N.deletions;
        w === null ? ((N.deletions = [A]), (N.flags |= 16)) : w.push(A);
      }
    }
    function n(N, A) {
      if (!t) return null;
      for (; A !== null; ) e(N, A), (A = A.sibling);
      return null;
    }
    function i(N) {
      for (var A = new Map(); N !== null; )
        N.key !== null ? A.set(N.key, N) : A.set(N.index, N), (N = N.sibling);
      return A;
    }
    function r(N, A) {
      return (N = en(N, A)), (N.index = 0), (N.sibling = null), N;
    }
    function u(N, A, w) {
      return (
        (N.index = w),
        t
          ? ((w = N.alternate),
            w !== null
              ? ((w = w.index), w < A ? ((N.flags |= 67108866), A) : w)
              : ((N.flags |= 67108866), A))
          : ((N.flags |= 1048576), A)
      );
    }
    function m(N) {
      return t && N.alternate === null && (N.flags |= 67108866), N;
    }
    function x(N, A, w, _) {
      return A === null || A.tag !== 6
        ? ((A = oo(w, N.mode, _)), (A.return = N), A)
        : ((A = r(A, w)), (A.return = N), A);
    }
    function T(N, A, w, _) {
      var F = w.type;
      return F === z
        ? O(N, A, w.props.children, _, w.key)
        : A !== null &&
          (A.elementType === F ||
            (typeof F == "object" &&
              F !== null &&
              F.$$typeof === L &&
              Nh(F) === A.type))
        ? ((A = r(A, w.props)), rl(A, w), (A.return = N), A)
        : ((A = ds(w.type, w.key, w.props, null, N.mode, _)),
          rl(A, w),
          (A.return = N),
          A);
    }
    function M(N, A, w, _) {
      return A === null ||
        A.tag !== 4 ||
        A.stateNode.containerInfo !== w.containerInfo ||
        A.stateNode.implementation !== w.implementation
        ? ((A = uo(w, N.mode, _)), (A.return = N), A)
        : ((A = r(A, w.children || [])), (A.return = N), A);
    }
    function O(N, A, w, _, F) {
      return A === null || A.tag !== 7
        ? ((A = ca(w, N.mode, _, F)), (A.return = N), A)
        : ((A = r(A, w)), (A.return = N), A);
    }
    function V(N, A, w) {
      if (
        (typeof A == "string" && A !== "") ||
        typeof A == "number" ||
        typeof A == "bigint"
      )
        return (A = oo("" + A, N.mode, w)), (A.return = N), A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case S:
            return (
              (w = ds(A.type, A.key, A.props, null, N.mode, w)),
              rl(w, A),
              (w.return = N),
              w
            );
          case E:
            return (A = uo(A, N.mode, w)), (A.return = N), A;
          case L:
            var _ = A._init;
            return (A = _(A._payload)), V(N, A, w);
        }
        if (Dt(A) || zt(A))
          return (A = ca(A, N.mode, w, null)), (A.return = N), A;
        if (typeof A.then == "function") return V(N, Ds(A), w);
        if (A.$$typeof === Q) return V(N, gs(N, A), w);
        Rs(N, A);
      }
      return null;
    }
    function D(N, A, w, _) {
      var F = A !== null ? A.key : null;
      if (
        (typeof w == "string" && w !== "") ||
        typeof w == "number" ||
        typeof w == "bigint"
      )
        return F !== null ? null : x(N, A, "" + w, _);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case S:
            return w.key === F ? T(N, A, w, _) : null;
          case E:
            return w.key === F ? M(N, A, w, _) : null;
          case L:
            return (F = w._init), (w = F(w._payload)), D(N, A, w, _);
        }
        if (Dt(w) || zt(w)) return F !== null ? null : O(N, A, w, _, null);
        if (typeof w.then == "function") return D(N, A, Ds(w), _);
        if (w.$$typeof === Q) return D(N, A, gs(N, w), _);
        Rs(N, w);
      }
      return null;
    }
    function R(N, A, w, _, F) {
      if (
        (typeof _ == "string" && _ !== "") ||
        typeof _ == "number" ||
        typeof _ == "bigint"
      )
        return (N = N.get(w) || null), x(A, N, "" + _, F);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case S:
            return (
              (N = N.get(_.key === null ? w : _.key) || null), T(A, N, _, F)
            );
          case E:
            return (
              (N = N.get(_.key === null ? w : _.key) || null), M(A, N, _, F)
            );
          case L:
            var ht = _._init;
            return (_ = ht(_._payload)), R(N, A, w, _, F);
        }
        if (Dt(_) || zt(_)) return (N = N.get(w) || null), O(A, N, _, F, null);
        if (typeof _.then == "function") return R(N, A, w, Ds(_), F);
        if (_.$$typeof === Q) return R(N, A, w, gs(A, _), F);
        Rs(A, _);
      }
      return null;
    }
    function lt(N, A, w, _) {
      for (
        var F = null, ht = null, tt = A, it = (A = 0), It = null;
        tt !== null && it < w.length;
        it++
      ) {
        tt.index > it ? ((It = tt), (tt = null)) : (It = tt.sibling);
        var bt = D(N, tt, w[it], _);
        if (bt === null) {
          tt === null && (tt = It);
          break;
        }
        t && tt && bt.alternate === null && e(N, tt),
          (A = u(bt, A, it)),
          ht === null ? (F = bt) : (ht.sibling = bt),
          (ht = bt),
          (tt = It);
      }
      if (it === w.length) return n(N, tt), St && da(N, it), F;
      if (tt === null) {
        for (; it < w.length; it++)
          (tt = V(N, w[it], _)),
            tt !== null &&
              ((A = u(tt, A, it)),
              ht === null ? (F = tt) : (ht.sibling = tt),
              (ht = tt));
        return St && da(N, it), F;
      }
      for (tt = i(tt); it < w.length; it++)
        (It = R(tt, N, it, w[it], _)),
          It !== null &&
            (t &&
              It.alternate !== null &&
              tt.delete(It.key === null ? it : It.key),
            (A = u(It, A, it)),
            ht === null ? (F = It) : (ht.sibling = It),
            (ht = It));
      return (
        t &&
          tt.forEach(function (Jn) {
            return e(N, Jn);
          }),
        St && da(N, it),
        F
      );
    }
    function at(N, A, w, _) {
      if (w == null) throw Error(o(151));
      for (
        var F = null, ht = null, tt = A, it = (A = 0), It = null, bt = w.next();
        tt !== null && !bt.done;
        it++, bt = w.next()
      ) {
        tt.index > it ? ((It = tt), (tt = null)) : (It = tt.sibling);
        var Jn = D(N, tt, bt.value, _);
        if (Jn === null) {
          tt === null && (tt = It);
          break;
        }
        t && tt && Jn.alternate === null && e(N, tt),
          (A = u(Jn, A, it)),
          ht === null ? (F = Jn) : (ht.sibling = Jn),
          (ht = Jn),
          (tt = It);
      }
      if (bt.done) return n(N, tt), St && da(N, it), F;
      if (tt === null) {
        for (; !bt.done; it++, bt = w.next())
          (bt = V(N, bt.value, _)),
            bt !== null &&
              ((A = u(bt, A, it)),
              ht === null ? (F = bt) : (ht.sibling = bt),
              (ht = bt));
        return St && da(N, it), F;
      }
      for (tt = i(tt); !bt.done; it++, bt = w.next())
        (bt = R(tt, N, it, bt.value, _)),
          bt !== null &&
            (t &&
              bt.alternate !== null &&
              tt.delete(bt.key === null ? it : bt.key),
            (A = u(bt, A, it)),
            ht === null ? (F = bt) : (ht.sibling = bt),
            (ht = bt));
      return (
        t &&
          tt.forEach(function (x1) {
            return e(N, x1);
          }),
        St && da(N, it),
        F
      );
    }
    function wt(N, A, w, _) {
      if (
        (typeof w == "object" &&
          w !== null &&
          w.type === z &&
          w.key === null &&
          (w = w.props.children),
        typeof w == "object" && w !== null)
      ) {
        switch (w.$$typeof) {
          case S:
            t: {
              for (var F = w.key; A !== null; ) {
                if (A.key === F) {
                  if (((F = w.type), F === z)) {
                    if (A.tag === 7) {
                      n(N, A.sibling),
                        (_ = r(A, w.props.children)),
                        (_.return = N),
                        (N = _);
                      break t;
                    }
                  } else if (
                    A.elementType === F ||
                    (typeof F == "object" &&
                      F !== null &&
                      F.$$typeof === L &&
                      Nh(F) === A.type)
                  ) {
                    n(N, A.sibling),
                      (_ = r(A, w.props)),
                      rl(_, w),
                      (_.return = N),
                      (N = _);
                    break t;
                  }
                  n(N, A);
                  break;
                } else e(N, A);
                A = A.sibling;
              }
              w.type === z
                ? ((_ = ca(w.props.children, N.mode, _, w.key)),
                  (_.return = N),
                  (N = _))
                : ((_ = ds(w.type, w.key, w.props, null, N.mode, _)),
                  rl(_, w),
                  (_.return = N),
                  (N = _));
            }
            return m(N);
          case E:
            t: {
              for (F = w.key; A !== null; ) {
                if (A.key === F)
                  if (
                    A.tag === 4 &&
                    A.stateNode.containerInfo === w.containerInfo &&
                    A.stateNode.implementation === w.implementation
                  ) {
                    n(N, A.sibling),
                      (_ = r(A, w.children || [])),
                      (_.return = N),
                      (N = _);
                    break t;
                  } else {
                    n(N, A);
                    break;
                  }
                else e(N, A);
                A = A.sibling;
              }
              (_ = uo(w, N.mode, _)), (_.return = N), (N = _);
            }
            return m(N);
          case L:
            return (F = w._init), (w = F(w._payload)), wt(N, A, w, _);
        }
        if (Dt(w)) return lt(N, A, w, _);
        if (zt(w)) {
          if (((F = zt(w)), typeof F != "function")) throw Error(o(150));
          return (w = F.call(w)), at(N, A, w, _);
        }
        if (typeof w.then == "function") return wt(N, A, Ds(w), _);
        if (w.$$typeof === Q) return wt(N, A, gs(N, w), _);
        Rs(N, w);
      }
      return (typeof w == "string" && w !== "") ||
        typeof w == "number" ||
        typeof w == "bigint"
        ? ((w = "" + w),
          A !== null && A.tag === 6
            ? (n(N, A.sibling), (_ = r(A, w)), (_.return = N), (N = _))
            : (n(N, A), (_ = oo(w, N.mode, _)), (_.return = N), (N = _)),
          m(N))
        : n(N, A);
    }
    return function (N, A, w, _) {
      try {
        sl = 0;
        var F = wt(N, A, w, _);
        return (ei = null), F;
      } catch (tt) {
        if (tt === $i || tt === vs) throw tt;
        var ht = Se(29, tt, null, N.mode);
        return (ht.lanes = _), (ht.return = N), ht;
      } finally {
      }
    };
  }
  var ni = wh(!0),
    Mh = wh(!1),
    _e = B(null),
    Ke = null;
  function _n(t) {
    var e = t.alternate;
    K(Pt, Pt.current & 1),
      K(_e, t),
      Ke === null &&
        (e === null || $a.current !== null || e.memoizedState !== null) &&
        (Ke = t);
  }
  function Eh(t) {
    if (t.tag === 22) {
      if ((K(Pt, Pt.current), K(_e, t), Ke === null)) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (Ke = t);
      }
    } else Vn();
  }
  function Vn() {
    K(Pt, Pt.current), K(_e, _e.current);
  }
  function on(t) {
    P(_e), Ke === t && (Ke = null), P(Pt);
  }
  var Pt = B(0);
  function Cs(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || zu(n))
        )
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  function Yo(t, e, n, i) {
    (e = t.memoizedState),
      (n = n(i, e)),
      (n = n == null ? e : v({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var Xo = {
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var i = Ne(),
        r = Cn(i);
      (r.payload = e),
        n != null && (r.callback = n),
        (e = zn(t, r, i)),
        e !== null && (we(e, t, i), Ii(e, t, i));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var i = Ne(),
        r = Cn(i);
      (r.tag = 1),
        (r.payload = e),
        n != null && (r.callback = n),
        (e = zn(t, r, i)),
        e !== null && (we(e, t, i), Ii(e, t, i));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = Ne(),
        i = Cn(n);
      (i.tag = 2),
        e != null && (i.callback = e),
        (e = zn(t, i, n)),
        e !== null && (we(e, t, n), Ii(e, t, n));
    },
  };
  function Dh(t, e, n, i, r, u, m) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(i, u, m)
        : e.prototype && e.prototype.isPureReactComponent
        ? !Yi(n, i) || !Yi(r, u)
        : !0
    );
  }
  function Rh(t, e, n, i) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(n, i),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(n, i),
      e.state !== t && Xo.enqueueReplaceState(e, e.state, null);
  }
  function xa(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var i in e) i !== "ref" && (n[i] = e[i]);
    }
    if ((t = t.defaultProps)) {
      n === e && (n = v({}, n));
      for (var r in t) n[r] === void 0 && (n[r] = t[r]);
    }
    return n;
  }
  var zs =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var e = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(e)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function Ch(t) {
    zs(t);
  }
  function zh(t) {
    console.error(t);
  }
  function Oh(t) {
    zs(t);
  }
  function Os(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function _h(t, e, n) {
    try {
      var i = t.onCaughtError;
      i(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  function Zo(t, e, n) {
    return (
      (n = Cn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        Os(t, e);
      }),
      n
    );
  }
  function Vh(t) {
    return (t = Cn(t)), (t.tag = 3), t;
  }
  function Uh(t, e, n, i) {
    var r = n.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var u = i.value;
      (t.payload = function () {
        return r(u);
      }),
        (t.callback = function () {
          _h(e, n, i);
        });
    }
    var m = n.stateNode;
    m !== null &&
      typeof m.componentDidCatch == "function" &&
      (t.callback = function () {
        _h(e, n, i),
          typeof r != "function" &&
            (qn === null ? (qn = new Set([this])) : qn.add(this));
        var x = i.stack;
        this.componentDidCatch(i.value, {
          componentStack: x !== null ? x : "",
        });
      });
  }
  function xx(t, e, n, i, r) {
    if (
      ((n.flags |= 32768),
      i !== null && typeof i == "object" && typeof i.then == "function")
    ) {
      if (
        ((e = n.alternate),
        e !== null && Pi(e, n, r, !0),
        (n = _e.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 13:
            return (
              Ke === null ? pu() : n.alternate === null && Bt === 0 && (Bt = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = r),
              i === bo
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null ? (n.updateQueue = new Set([i])) : e.add(i),
                  yu(t, i, r)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              i === bo
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([i]),
                      }),
                      (n.updateQueue = e))
                    : ((n = e.retryQueue),
                      n === null ? (e.retryQueue = new Set([i])) : n.add(i)),
                  yu(t, i, r)),
              !1
            );
        }
        throw Error(o(435, n.tag));
      }
      return yu(t, i, r), pu(), !1;
    }
    if (St)
      return (
        (e = _e.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = r),
            i !== ho && ((t = Error(o(422), { cause: i })), Qi(Re(t, n))))
          : (i !== ho && ((e = Error(o(423), { cause: i })), Qi(Re(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (r &= -r),
            (t.lanes |= r),
            (i = Re(i, n)),
            (r = Zo(t.stateNode, i, r)),
            jo(t, r),
            Bt !== 4 && (Bt = 2)),
        !1
      );
    var u = Error(o(520), { cause: i });
    if (
      ((u = Re(u, n)),
      ml === null ? (ml = [u]) : ml.push(u),
      Bt !== 4 && (Bt = 2),
      e === null)
    )
      return !0;
    (i = Re(i, n)), (n = e);
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (t = r & -r),
            (n.lanes |= t),
            (t = Zo(n.stateNode, i, t)),
            jo(n, t),
            !1
          );
        case 1:
          if (
            ((e = n.type),
            (u = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (qn === null || !qn.has(u)))))
          )
            return (
              (n.flags |= 65536),
              (r &= -r),
              (n.lanes |= r),
              (r = Vh(r)),
              Uh(r, t, n, i),
              jo(n, r),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var kh = Error(o(461)),
    $t = !1;
  function te(t, e, n, i) {
    e.child = t === null ? Mh(e, null, n, i) : ni(e, t.child, n, i);
  }
  function Bh(t, e, n, i, r) {
    n = n.render;
    var u = e.ref;
    if ("ref" in i) {
      var m = {};
      for (var x in i) x !== "ref" && (m[x] = i[x]);
    } else m = i;
    return (
      ga(e),
      (i = Eo(t, e, n, m, u, r)),
      (x = Do()),
      t !== null && !$t
        ? (Ro(t, e, r), un(t, e, r))
        : (St && x && co(e), (e.flags |= 1), te(t, e, i, r), e.child)
    );
  }
  function Lh(t, e, n, i, r) {
    if (t === null) {
      var u = n.type;
      return typeof u == "function" &&
        !ro(u) &&
        u.defaultProps === void 0 &&
        n.compare === null
        ? ((e.tag = 15), (e.type = u), Hh(t, e, u, i, r))
        : ((t = ds(n.type, null, i, e, e.mode, r)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((u = t.child), !Io(t, r))) {
      var m = u.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Yi), n(m, i) && t.ref === e.ref)
      )
        return un(t, e, r);
    }
    return (
      (e.flags |= 1),
      (t = en(u, i)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function Hh(t, e, n, i, r) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Yi(u, i) && t.ref === e.ref)
        if ((($t = !1), (e.pendingProps = i = u), Io(t, r)))
          (t.flags & 131072) !== 0 && ($t = !0);
        else return (e.lanes = t.lanes), un(t, e, r);
    }
    return Ko(t, e, n, i, r);
  }
  function qh(t, e, n) {
    var i = e.pendingProps,
      r = i.children,
      u = t !== null ? t.memoizedState : null;
    if (i.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (((i = u !== null ? u.baseLanes | n : n), t !== null)) {
          for (r = e.child = t.child, u = 0; r !== null; )
            (u = u | r.lanes | r.childLanes), (r = r.sibling);
          e.childLanes = u & ~i;
        } else (e.childLanes = 0), (e.child = null);
        return Gh(t, e, i, n);
      }
      if ((n & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && ys(e, u !== null ? u.cachePool : null),
          u !== null ? Hd(e, u) : No(),
          Eh(e);
      else
        return (
          (e.lanes = e.childLanes = 536870912),
          Gh(t, e, u !== null ? u.baseLanes | n : n, n)
        );
    } else
      u !== null
        ? (ys(e, u.cachePool), Hd(e, u), Vn(), (e.memoizedState = null))
        : (t !== null && ys(e, null), No(), Vn());
    return te(t, e, r, n), e.child;
  }
  function Gh(t, e, n, i) {
    var r = xo();
    return (
      (r = r === null ? null : { parent: Qt._currentValue, pool: r }),
      (e.memoizedState = { baseLanes: n, cachePool: r }),
      t !== null && ys(e, null),
      No(),
      Eh(e),
      t !== null && Pi(t, e, i, !0),
      null
    );
  }
  function _s(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(o(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function Ko(t, e, n, i, r) {
    return (
      ga(e),
      (n = Eo(t, e, n, i, void 0, r)),
      (i = Do()),
      t !== null && !$t
        ? (Ro(t, e, r), un(t, e, r))
        : (St && i && co(e), (e.flags |= 1), te(t, e, n, r), e.child)
    );
  }
  function Yh(t, e, n, i, r, u) {
    return (
      ga(e),
      (e.updateQueue = null),
      (n = Gd(e, i, n, r)),
      qd(t),
      (i = Do()),
      t !== null && !$t
        ? (Ro(t, e, u), un(t, e, u))
        : (St && i && co(e), (e.flags |= 1), te(t, e, n, u), e.child)
    );
  }
  function Xh(t, e, n, i, r) {
    if ((ga(e), e.stateNode === null)) {
      var u = Ka,
        m = n.contextType;
      typeof m == "object" && m !== null && (u = le(m)),
        (u = new n(i, u)),
        (e.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Xo),
        (e.stateNode = u),
        (u._reactInternals = e),
        (u = e.stateNode),
        (u.props = i),
        (u.state = e.memoizedState),
        (u.refs = {}),
        So(e),
        (m = n.contextType),
        (u.context = typeof m == "object" && m !== null ? le(m) : Ka),
        (u.state = e.memoizedState),
        (m = n.getDerivedStateFromProps),
        typeof m == "function" && (Yo(e, n, m, i), (u.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((m = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          m !== u.state && Xo.enqueueReplaceState(u, u.state, null),
          el(e, i, u, r),
          tl(),
          (u.state = e.memoizedState)),
        typeof u.componentDidMount == "function" && (e.flags |= 4194308),
        (i = !0);
    } else if (t === null) {
      u = e.stateNode;
      var x = e.memoizedProps,
        T = xa(n, x);
      u.props = T;
      var M = u.context,
        O = n.contextType;
      (m = Ka), typeof O == "object" && O !== null && (m = le(O));
      var V = n.getDerivedStateFromProps;
      (O =
        typeof V == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (x = e.pendingProps !== x),
        O ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((x || M !== m) && Rh(e, u, i, m)),
        (Rn = !1);
      var D = e.memoizedState;
      (u.state = D),
        el(e, i, u, r),
        tl(),
        (M = e.memoizedState),
        x || D !== M || Rn
          ? (typeof V == "function" && (Yo(e, n, V, i), (M = e.memoizedState)),
            (T = Rn || Dh(e, n, T, i, D, M, m))
              ? (O ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = i),
                (e.memoizedState = M)),
            (u.props = i),
            (u.state = M),
            (u.context = m),
            (i = T))
          : (typeof u.componentDidMount == "function" && (e.flags |= 4194308),
            (i = !1));
    } else {
      (u = e.stateNode),
        To(t, e),
        (m = e.memoizedProps),
        (O = xa(n, m)),
        (u.props = O),
        (V = e.pendingProps),
        (D = u.context),
        (M = n.contextType),
        (T = Ka),
        typeof M == "object" && M !== null && (T = le(M)),
        (x = n.getDerivedStateFromProps),
        (M =
          typeof x == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((m !== V || D !== T) && Rh(e, u, i, T)),
        (Rn = !1),
        (D = e.memoizedState),
        (u.state = D),
        el(e, i, u, r),
        tl();
      var R = e.memoizedState;
      m !== V ||
      D !== R ||
      Rn ||
      (t !== null && t.dependencies !== null && ps(t.dependencies))
        ? (typeof x == "function" && (Yo(e, n, x, i), (R = e.memoizedState)),
          (O =
            Rn ||
            Dh(e, n, O, i, D, R, T) ||
            (t !== null && t.dependencies !== null && ps(t.dependencies)))
            ? (M ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(i, R, T),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(i, R, T)),
              typeof u.componentDidUpdate == "function" && (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (m === t.memoizedProps && D === t.memoizedState) ||
                (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (m === t.memoizedProps && D === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = i),
              (e.memoizedState = R)),
          (u.props = i),
          (u.state = R),
          (u.context = T),
          (i = O))
        : (typeof u.componentDidUpdate != "function" ||
            (m === t.memoizedProps && D === t.memoizedState) ||
            (e.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (m === t.memoizedProps && D === t.memoizedState) ||
            (e.flags |= 1024),
          (i = !1));
    }
    return (
      (u = i),
      _s(t, e),
      (i = (e.flags & 128) !== 0),
      u || i
        ? ((u = e.stateNode),
          (n =
            i && typeof n.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (e.flags |= 1),
          t !== null && i
            ? ((e.child = ni(e, t.child, null, r)),
              (e.child = ni(e, null, n, r)))
            : te(t, e, n, r),
          (e.memoizedState = u.state),
          (t = e.child))
        : (t = un(t, e, r)),
      t
    );
  }
  function Zh(t, e, n, i) {
    return Ki(), (e.flags |= 256), te(t, e, n, i), e.child;
  }
  var Qo = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Po(t) {
    return { baseLanes: t, cachePool: zd() };
  }
  function Jo(t, e, n) {
    return (t = t !== null ? t.childLanes & ~n : 0), e && (t |= Ve), t;
  }
  function Kh(t, e, n) {
    var i = e.pendingProps,
      r = !1,
      u = (e.flags & 128) !== 0,
      m;
    if (
      ((m = u) ||
        (m =
          t !== null && t.memoizedState === null ? !1 : (Pt.current & 2) !== 0),
      m && ((r = !0), (e.flags &= -129)),
      (m = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (St) {
        if ((r ? _n(e) : Vn(), St)) {
          var x = kt,
            T;
          if ((T = x)) {
            t: {
              for (T = x, x = Ze; T.nodeType !== 8; ) {
                if (!x) {
                  x = null;
                  break t;
                }
                if (((T = Ge(T.nextSibling)), T === null)) {
                  x = null;
                  break t;
                }
              }
              x = T;
            }
            x !== null
              ? ((e.memoizedState = {
                  dehydrated: x,
                  treeContext: fa !== null ? { id: nn, overflow: an } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (T = Se(18, null, null, 0)),
                (T.stateNode = x),
                (T.return = e),
                (e.child = T),
                (oe = e),
                (kt = null),
                (T = !0))
              : (T = !1);
          }
          T || ma(e);
        }
        if (
          ((x = e.memoizedState),
          x !== null && ((x = x.dehydrated), x !== null))
        )
          return zu(x) ? (e.lanes = 32) : (e.lanes = 536870912), null;
        on(e);
      }
      return (
        (x = i.children),
        (i = i.fallback),
        r
          ? (Vn(),
            (r = e.mode),
            (x = Vs({ mode: "hidden", children: x }, r)),
            (i = ca(i, r, n, null)),
            (x.return = e),
            (i.return = e),
            (x.sibling = i),
            (e.child = x),
            (r = e.child),
            (r.memoizedState = Po(n)),
            (r.childLanes = Jo(t, m, n)),
            (e.memoizedState = Qo),
            i)
          : (_n(e), Fo(e, x))
      );
    }
    if (
      ((T = t.memoizedState), T !== null && ((x = T.dehydrated), x !== null))
    ) {
      if (u)
        e.flags & 256
          ? (_n(e), (e.flags &= -257), (e = $o(t, e, n)))
          : e.memoizedState !== null
          ? (Vn(), (e.child = t.child), (e.flags |= 128), (e = null))
          : (Vn(),
            (r = i.fallback),
            (x = e.mode),
            (i = Vs({ mode: "visible", children: i.children }, x)),
            (r = ca(r, x, n, null)),
            (r.flags |= 2),
            (i.return = e),
            (r.return = e),
            (i.sibling = r),
            (e.child = i),
            ni(e, t.child, null, n),
            (i = e.child),
            (i.memoizedState = Po(n)),
            (i.childLanes = Jo(t, m, n)),
            (e.memoizedState = Qo),
            (e = r));
      else if ((_n(e), zu(x))) {
        if (((m = x.nextSibling && x.nextSibling.dataset), m)) var M = m.dgst;
        (m = M),
          (i = Error(o(419))),
          (i.stack = ""),
          (i.digest = m),
          Qi({ value: i, source: null, stack: null }),
          (e = $o(t, e, n));
      } else if (
        ($t || Pi(t, e, n, !1), (m = (n & t.childLanes) !== 0), $t || m)
      ) {
        if (
          ((m = Rt),
          m !== null &&
            ((i = n & -n),
            (i = (i & 42) !== 0 ? 1 : zr(i)),
            (i = (i & (m.suspendedLanes | n)) !== 0 ? 0 : i),
            i !== 0 && i !== T.retryLane))
        )
          throw ((T.retryLane = i), Za(t, i), we(m, t, i), kh);
        x.data === "$?" || pu(), (e = $o(t, e, n));
      } else
        x.data === "$?"
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = T.treeContext),
            (kt = Ge(x.nextSibling)),
            (oe = e),
            (St = !0),
            (ha = null),
            (Ze = !1),
            t !== null &&
              ((ze[Oe++] = nn),
              (ze[Oe++] = an),
              (ze[Oe++] = fa),
              (nn = t.id),
              (an = t.overflow),
              (fa = e)),
            (e = Fo(e, i.children)),
            (e.flags |= 4096));
      return e;
    }
    return r
      ? (Vn(),
        (r = i.fallback),
        (x = e.mode),
        (T = t.child),
        (M = T.sibling),
        (i = en(T, { mode: "hidden", children: i.children })),
        (i.subtreeFlags = T.subtreeFlags & 65011712),
        M !== null ? (r = en(M, r)) : ((r = ca(r, x, n, null)), (r.flags |= 2)),
        (r.return = e),
        (i.return = e),
        (i.sibling = r),
        (e.child = i),
        (i = r),
        (r = e.child),
        (x = t.child.memoizedState),
        x === null
          ? (x = Po(n))
          : ((T = x.cachePool),
            T !== null
              ? ((M = Qt._currentValue),
                (T = T.parent !== M ? { parent: M, pool: M } : T))
              : (T = zd()),
            (x = { baseLanes: x.baseLanes | n, cachePool: T })),
        (r.memoizedState = x),
        (r.childLanes = Jo(t, m, n)),
        (e.memoizedState = Qo),
        i)
      : (_n(e),
        (n = t.child),
        (t = n.sibling),
        (n = en(n, { mode: "visible", children: i.children })),
        (n.return = e),
        (n.sibling = null),
        t !== null &&
          ((m = e.deletions),
          m === null ? ((e.deletions = [t]), (e.flags |= 16)) : m.push(t)),
        (e.child = n),
        (e.memoizedState = null),
        n);
  }
  function Fo(t, e) {
    return (
      (e = Vs({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function Vs(t, e) {
    return (
      (t = Se(22, t, null, e)),
      (t.lanes = 0),
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      t
    );
  }
  function $o(t, e, n) {
    return (
      ni(e, t.child, null, n),
      (t = Fo(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Qh(t, e, n) {
    t.lanes |= e;
    var i = t.alternate;
    i !== null && (i.lanes |= e), po(t.return, e, n);
  }
  function Wo(t, e, n, i, r) {
    var u = t.memoizedState;
    u === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: i,
          tail: n,
          tailMode: r,
        })
      : ((u.isBackwards = e),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = i),
        (u.tail = n),
        (u.tailMode = r));
  }
  function Ph(t, e, n) {
    var i = e.pendingProps,
      r = i.revealOrder,
      u = i.tail;
    if ((te(t, e, i.children, n), (i = Pt.current), (i & 2) !== 0))
      (i = (i & 1) | 2), (e.flags |= 128);
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && Qh(t, n, e);
          else if (t.tag === 19) Qh(t, n, e);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break t;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      i &= 1;
    }
    switch ((K(Pt, i), r)) {
      case "forwards":
        for (n = e.child, r = null; n !== null; )
          (t = n.alternate),
            t !== null && Cs(t) === null && (r = n),
            (n = n.sibling);
        (n = r),
          n === null
            ? ((r = e.child), (e.child = null))
            : ((r = n.sibling), (n.sibling = null)),
          Wo(e, !1, r, n, u);
        break;
      case "backwards":
        for (n = null, r = e.child, e.child = null; r !== null; ) {
          if (((t = r.alternate), t !== null && Cs(t) === null)) {
            e.child = r;
            break;
          }
          (t = r.sibling), (r.sibling = n), (n = r), (r = t);
        }
        Wo(e, !0, n, null, u);
        break;
      case "together":
        Wo(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function un(t, e, n) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (Hn |= e.lanes),
      (n & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((Pi(t, e, n, !1), (n & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(o(153));
    if (e.child !== null) {
      for (
        t = e.child, n = en(t, t.pendingProps), e.child = n, n.return = e;
        t.sibling !== null;

      )
        (t = t.sibling),
          (n = n.sibling = en(t, t.pendingProps)),
          (n.return = e);
      n.sibling = null;
    }
    return e.child;
  }
  function Io(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && ps(t)));
  }
  function bx(t, e, n) {
    switch (e.tag) {
      case 3:
        Mt(e, e.stateNode.containerInfo),
          Dn(e, Qt, t.memoizedState.cache),
          Ki();
        break;
      case 27:
      case 5:
        jn(e);
        break;
      case 4:
        Mt(e, e.stateNode.containerInfo);
        break;
      case 10:
        Dn(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var i = e.memoizedState;
        if (i !== null)
          return i.dehydrated !== null
            ? (_n(e), (e.flags |= 128), null)
            : (n & e.child.childLanes) !== 0
            ? Kh(t, e, n)
            : (_n(e), (t = un(t, e, n)), t !== null ? t.sibling : null);
        _n(e);
        break;
      case 19:
        var r = (t.flags & 128) !== 0;
        if (
          ((i = (n & e.childLanes) !== 0),
          i || (Pi(t, e, n, !1), (i = (n & e.childLanes) !== 0)),
          r)
        ) {
          if (i) return Ph(t, e, n);
          e.flags |= 128;
        }
        if (
          ((r = e.memoizedState),
          r !== null &&
            ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
          K(Pt, Pt.current),
          i)
        )
          break;
        return null;
      case 22:
      case 23:
        return (e.lanes = 0), qh(t, e, n);
      case 24:
        Dn(e, Qt, t.memoizedState.cache);
    }
    return un(t, e, n);
  }
  function Jh(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) $t = !0;
      else {
        if (!Io(t, n) && (e.flags & 128) === 0) return ($t = !1), bx(t, e, n);
        $t = (t.flags & 131072) !== 0;
      }
    else ($t = !1), St && (e.flags & 1048576) !== 0 && Nd(e, ms, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps;
          var i = e.elementType,
            r = i._init;
          if (((i = r(i._payload)), (e.type = i), typeof i == "function"))
            ro(i)
              ? ((t = xa(i, t)), (e.tag = 1), (e = Xh(null, e, i, t, n)))
              : ((e.tag = 0), (e = Ko(null, e, i, t, n)));
          else {
            if (i != null) {
              if (((r = i.$$typeof), r === et)) {
                (e.tag = 11), (e = Bh(null, e, i, t, n));
                break t;
              } else if (r === nt) {
                (e.tag = 14), (e = Lh(null, e, i, t, n));
                break t;
              }
            }
            throw ((e = ce(i) || i), Error(o(306, e, "")));
          }
        }
        return e;
      case 0:
        return Ko(t, e, e.type, e.pendingProps, n);
      case 1:
        return (i = e.type), (r = xa(i, e.pendingProps)), Xh(t, e, i, r, n);
      case 3:
        t: {
          if ((Mt(e, e.stateNode.containerInfo), t === null))
            throw Error(o(387));
          i = e.pendingProps;
          var u = e.memoizedState;
          (r = u.element), To(t, e), el(e, i, null, n);
          var m = e.memoizedState;
          if (
            ((i = m.cache),
            Dn(e, Qt, i),
            i !== u.cache && go(e, [Qt], n, !0),
            tl(),
            (i = m.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: i, isDehydrated: !1, cache: m.cache }),
              (e.updateQueue.baseState = u),
              (e.memoizedState = u),
              e.flags & 256)
            ) {
              e = Zh(t, e, i, n);
              break t;
            } else if (i !== r) {
              (r = Re(Error(o(424)), e)), Qi(r), (e = Zh(t, e, i, n));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                kt = Ge(t.firstChild),
                  oe = e,
                  St = !0,
                  ha = null,
                  Ze = !0,
                  n = Mh(e, null, i, n),
                  e.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
            }
          else {
            if ((Ki(), i === r)) {
              e = un(t, e, n);
              break t;
            }
            te(t, e, i, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          _s(t, e),
          t === null
            ? (n = Im(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : St ||
                ((n = e.type),
                (t = e.pendingProps),
                (i = Js(rt.current).createElement(n)),
                (i[ie] = e),
                (i[fe] = t),
                ne(i, n, t),
                Ft(i),
                (e.stateNode = i))
            : (e.memoizedState = Im(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          jn(e),
          t === null &&
            St &&
            ((i = e.stateNode = Fm(e.type, e.pendingProps, rt.current)),
            (oe = e),
            (Ze = !0),
            (r = kt),
            Xn(e.type) ? ((Ou = r), (kt = Ge(i.firstChild))) : (kt = r)),
          te(t, e, e.pendingProps.children, n),
          _s(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            St &&
            ((r = i = kt) &&
              ((i = Px(i, e.type, e.pendingProps, Ze)),
              i !== null
                ? ((e.stateNode = i),
                  (oe = e),
                  (kt = Ge(i.firstChild)),
                  (Ze = !1),
                  (r = !0))
                : (r = !1)),
            r || ma(e)),
          jn(e),
          (r = e.type),
          (u = e.pendingProps),
          (m = t !== null ? t.memoizedProps : null),
          (i = u.children),
          Du(r, u) ? (i = null) : m !== null && Du(r, m) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((r = Eo(t, e, dx, null, null, n)), (jl._currentValue = r)),
          _s(t, e),
          te(t, e, i, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            St &&
            ((t = n = kt) &&
              ((n = Jx(n, e.pendingProps, Ze)),
              n !== null
                ? ((e.stateNode = n), (oe = e), (kt = null), (t = !0))
                : (t = !1)),
            t || ma(e)),
          null
        );
      case 13:
        return Kh(t, e, n);
      case 4:
        return (
          Mt(e, e.stateNode.containerInfo),
          (i = e.pendingProps),
          t === null ? (e.child = ni(e, null, i, n)) : te(t, e, i, n),
          e.child
        );
      case 11:
        return Bh(t, e, e.type, e.pendingProps, n);
      case 7:
        return te(t, e, e.pendingProps, n), e.child;
      case 8:
        return te(t, e, e.pendingProps.children, n), e.child;
      case 12:
        return te(t, e, e.pendingProps.children, n), e.child;
      case 10:
        return (
          (i = e.pendingProps),
          Dn(e, e.type, i.value),
          te(t, e, i.children, n),
          e.child
        );
      case 9:
        return (
          (r = e.type._context),
          (i = e.pendingProps.children),
          ga(e),
          (r = le(r)),
          (i = i(r)),
          (e.flags |= 1),
          te(t, e, i, n),
          e.child
        );
      case 14:
        return Lh(t, e, e.type, e.pendingProps, n);
      case 15:
        return Hh(t, e, e.type, e.pendingProps, n);
      case 19:
        return Ph(t, e, n);
      case 31:
        return (
          (i = e.pendingProps),
          (n = e.mode),
          (i = { mode: i.mode, children: i.children }),
          t === null
            ? ((n = Vs(i, n)),
              (n.ref = e.ref),
              (e.child = n),
              (n.return = e),
              (e = n))
            : ((n = en(t.child, i)),
              (n.ref = e.ref),
              (e.child = n),
              (n.return = e),
              (e = n)),
          e
        );
      case 22:
        return qh(t, e, n);
      case 24:
        return (
          ga(e),
          (i = le(Qt)),
          t === null
            ? ((r = xo()),
              r === null &&
                ((r = Rt),
                (u = yo()),
                (r.pooledCache = u),
                u.refCount++,
                u !== null && (r.pooledCacheLanes |= n),
                (r = u)),
              (e.memoizedState = { parent: i, cache: r }),
              So(e),
              Dn(e, Qt, r))
            : ((t.lanes & n) !== 0 && (To(t, e), el(e, null, null, n), tl()),
              (r = t.memoizedState),
              (u = e.memoizedState),
              r.parent !== i
                ? ((r = { parent: i, cache: i }),
                  (e.memoizedState = r),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = r),
                  Dn(e, Qt, i))
                : ((i = u.cache),
                  Dn(e, Qt, i),
                  i !== r.cache && go(e, [Qt], n, !0))),
          te(t, e, e.pendingProps.children, n),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(o(156, e.tag));
  }
  function cn(t) {
    t.flags |= 4;
  }
  function Fh(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !ip(e))) {
      if (
        ((e = _e.current),
        e !== null &&
          ((vt & 4194048) === vt
            ? Ke !== null
            : ((vt & 62914560) !== vt && (vt & 536870912) === 0) || e !== Ke))
      )
        throw ((Wi = bo), Od);
      t.flags |= 8192;
    }
  }
  function Us(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? Ef() : 536870912), (t.lanes |= e), (si |= e));
  }
  function ol(t, e) {
    if (!St)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            e.alternate !== null && (n = e), (e = e.sibling);
          n === null ? (t.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = t.tail;
          for (var i = null; n !== null; )
            n.alternate !== null && (i = n), (n = n.sibling);
          i === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (i.sibling = null);
      }
  }
  function Vt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      i = 0;
    if (e)
      for (var r = t.child; r !== null; )
        (n |= r.lanes | r.childLanes),
          (i |= r.subtreeFlags & 65011712),
          (i |= r.flags & 65011712),
          (r.return = t),
          (r = r.sibling);
    else
      for (r = t.child; r !== null; )
        (n |= r.lanes | r.childLanes),
          (i |= r.subtreeFlags),
          (i |= r.flags),
          (r.return = t),
          (r = r.sibling);
    return (t.subtreeFlags |= i), (t.childLanes = n), e;
  }
  function Sx(t, e, n) {
    var i = e.pendingProps;
    switch ((fo(e), e.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Vt(e), null;
      case 1:
        return Vt(e), null;
      case 3:
        return (
          (n = e.stateNode),
          (i = null),
          t !== null && (i = t.memoizedState.cache),
          e.memoizedState.cache !== i && (e.flags |= 2048),
          sn(Qt),
          ye(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (Zi(e)
              ? cn(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), Ed())),
          Vt(e),
          null
        );
      case 26:
        return (
          (n = e.memoizedState),
          t === null
            ? (cn(e),
              n !== null ? (Vt(e), Fh(e, n)) : (Vt(e), (e.flags &= -16777217)))
            : n
            ? n !== t.memoizedState
              ? (cn(e), Vt(e), Fh(e, n))
              : (Vt(e), (e.flags &= -16777217))
            : (t.memoizedProps !== i && cn(e), Vt(e), (e.flags &= -16777217)),
          null
        );
      case 27:
        An(e), (n = rt.current);
        var r = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== i && cn(e);
        else {
          if (!i) {
            if (e.stateNode === null) throw Error(o(166));
            return Vt(e), null;
          }
          (t = J.current),
            Zi(e) ? wd(e) : ((t = Fm(r, i, n)), (e.stateNode = t), cn(e));
        }
        return Vt(e), null;
      case 5:
        if ((An(e), (n = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== i && cn(e);
        else {
          if (!i) {
            if (e.stateNode === null) throw Error(o(166));
            return Vt(e), null;
          }
          if (((t = J.current), Zi(e))) wd(e);
          else {
            switch (((r = Js(rt.current)), t)) {
              case 1:
                t = r.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                t = r.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    t = r.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    t = r.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    (t = r.createElement("div")),
                      (t.innerHTML = "<script></script>"),
                      (t = t.removeChild(t.firstChild));
                    break;
                  case "select":
                    (t =
                      typeof i.is == "string"
                        ? r.createElement("select", { is: i.is })
                        : r.createElement("select")),
                      i.multiple
                        ? (t.multiple = !0)
                        : i.size && (t.size = i.size);
                    break;
                  default:
                    t =
                      typeof i.is == "string"
                        ? r.createElement(n, { is: i.is })
                        : r.createElement(n);
                }
            }
            (t[ie] = e), (t[fe] = i);
            t: for (r = e.child; r !== null; ) {
              if (r.tag === 5 || r.tag === 6) t.appendChild(r.stateNode);
              else if (r.tag !== 4 && r.tag !== 27 && r.child !== null) {
                (r.child.return = r), (r = r.child);
                continue;
              }
              if (r === e) break t;
              for (; r.sibling === null; ) {
                if (r.return === null || r.return === e) break t;
                r = r.return;
              }
              (r.sibling.return = r.return), (r = r.sibling);
            }
            e.stateNode = t;
            t: switch ((ne(t, n, i), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!i.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && cn(e);
          }
        }
        return Vt(e), (e.flags &= -16777217), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== i && cn(e);
        else {
          if (typeof i != "string" && e.stateNode === null) throw Error(o(166));
          if (((t = rt.current), Zi(e))) {
            if (
              ((t = e.stateNode),
              (n = e.memoizedProps),
              (i = null),
              (r = oe),
              r !== null)
            )
              switch (r.tag) {
                case 27:
                case 5:
                  i = r.memoizedProps;
              }
            (t[ie] = e),
              (t = !!(
                t.nodeValue === n ||
                (i !== null && i.suppressHydrationWarning === !0) ||
                Ym(t.nodeValue, n)
              )),
              t || ma(e);
          } else (t = Js(t).createTextNode(i)), (t[ie] = e), (e.stateNode = t);
        }
        return Vt(e), null;
      case 13:
        if (
          ((i = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((r = Zi(e)), i !== null && i.dehydrated !== null)) {
            if (t === null) {
              if (!r) throw Error(o(318));
              if (
                ((r = e.memoizedState),
                (r = r !== null ? r.dehydrated : null),
                !r)
              )
                throw Error(o(317));
              r[ie] = e;
            } else
              Ki(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            Vt(e), (r = !1);
          } else
            (r = Ed()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = r),
              (r = !0);
          if (!r) return e.flags & 256 ? (on(e), e) : (on(e), null);
        }
        if ((on(e), (e.flags & 128) !== 0)) return (e.lanes = n), e;
        if (
          ((n = i !== null), (t = t !== null && t.memoizedState !== null), n)
        ) {
          (i = e.child),
            (r = null),
            i.alternate !== null &&
              i.alternate.memoizedState !== null &&
              i.alternate.memoizedState.cachePool !== null &&
              (r = i.alternate.memoizedState.cachePool.pool);
          var u = null;
          i.memoizedState !== null &&
            i.memoizedState.cachePool !== null &&
            (u = i.memoizedState.cachePool.pool),
            u !== r && (i.flags |= 2048);
        }
        return (
          n !== t && n && (e.child.flags |= 8192),
          Us(e, e.updateQueue),
          Vt(e),
          null
        );
      case 4:
        return ye(), t === null && Au(e.stateNode.containerInfo), Vt(e), null;
      case 10:
        return sn(e.type), Vt(e), null;
      case 19:
        if ((P(Pt), (r = e.memoizedState), r === null)) return Vt(e), null;
        if (((i = (e.flags & 128) !== 0), (u = r.rendering), u === null))
          if (i) ol(r, !1);
          else {
            if (Bt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((u = Cs(t)), u !== null)) {
                  for (
                    e.flags |= 128,
                      ol(r, !1),
                      t = u.updateQueue,
                      e.updateQueue = t,
                      Us(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;

                  )
                    Ad(n, t), (n = n.sibling);
                  return K(Pt, (Pt.current & 1) | 2), e.child;
                }
                t = t.sibling;
              }
            r.tail !== null &&
              Xe() > Ls &&
              ((e.flags |= 128), (i = !0), ol(r, !1), (e.lanes = 4194304));
          }
        else {
          if (!i)
            if (((t = Cs(u)), t !== null)) {
              if (
                ((e.flags |= 128),
                (i = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                Us(e, t),
                ol(r, !0),
                r.tail === null &&
                  r.tailMode === "hidden" &&
                  !u.alternate &&
                  !St)
              )
                return Vt(e), null;
            } else
              2 * Xe() - r.renderingStartTime > Ls &&
                n !== 536870912 &&
                ((e.flags |= 128), (i = !0), ol(r, !1), (e.lanes = 4194304));
          r.isBackwards
            ? ((u.sibling = e.child), (e.child = u))
            : ((t = r.last),
              t !== null ? (t.sibling = u) : (e.child = u),
              (r.last = u));
        }
        return r.tail !== null
          ? ((e = r.tail),
            (r.rendering = e),
            (r.tail = e.sibling),
            (r.renderingStartTime = Xe()),
            (e.sibling = null),
            (t = Pt.current),
            K(Pt, i ? (t & 1) | 2 : t & 1),
            e)
          : (Vt(e), null);
      case 22:
      case 23:
        return (
          on(e),
          wo(),
          (i = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== i && (e.flags |= 8192)
            : i && (e.flags |= 8192),
          i
            ? (n & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Vt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Vt(e),
          (n = e.updateQueue),
          n !== null && Us(e, n.retryQueue),
          (n = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          (i = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (i = e.memoizedState.cachePool.pool),
          i !== n && (e.flags |= 2048),
          t !== null && P(ya),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          sn(Qt),
          Vt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, e.tag));
  }
  function Tx(t, e) {
    switch ((fo(e), e.tag)) {
      case 1:
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          sn(Qt),
          ye(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return An(e), null;
      case 13:
        if (
          (on(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(o(340));
          Ki();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return P(Pt), null;
      case 4:
        return ye(), null;
      case 10:
        return sn(e.type), null;
      case 22:
      case 23:
        return (
          on(e),
          wo(),
          t !== null && P(ya),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return sn(Qt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function $h(t, e) {
    switch ((fo(e), e.tag)) {
      case 3:
        sn(Qt), ye();
        break;
      case 26:
      case 27:
      case 5:
        An(e);
        break;
      case 4:
        ye();
        break;
      case 13:
        on(e);
        break;
      case 19:
        P(Pt);
        break;
      case 10:
        sn(e.type);
        break;
      case 22:
      case 23:
        on(e), wo(), t !== null && P(ya);
        break;
      case 24:
        sn(Qt);
    }
  }
  function ul(t, e) {
    try {
      var n = e.updateQueue,
        i = n !== null ? n.lastEffect : null;
      if (i !== null) {
        var r = i.next;
        n = r;
        do {
          if ((n.tag & t) === t) {
            i = void 0;
            var u = n.create,
              m = n.inst;
            (i = u()), (m.destroy = i);
          }
          n = n.next;
        } while (n !== r);
      }
    } catch (x) {
      Et(e, e.return, x);
    }
  }
  function Un(t, e, n) {
    try {
      var i = e.updateQueue,
        r = i !== null ? i.lastEffect : null;
      if (r !== null) {
        var u = r.next;
        i = u;
        do {
          if ((i.tag & t) === t) {
            var m = i.inst,
              x = m.destroy;
            if (x !== void 0) {
              (m.destroy = void 0), (r = e);
              var T = n,
                M = x;
              try {
                M();
              } catch (O) {
                Et(r, T, O);
              }
            }
          }
          i = i.next;
        } while (i !== u);
      }
    } catch (O) {
      Et(e, e.return, O);
    }
  }
  function Wh(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        Ld(e, n);
      } catch (i) {
        Et(t, t.return, i);
      }
    }
  }
  function Ih(t, e, n) {
    (n.props = xa(t.type, t.memoizedProps)), (n.state = t.memoizedState);
    try {
      n.componentWillUnmount();
    } catch (i) {
      Et(t, e, i);
    }
  }
  function cl(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var i = t.stateNode;
            break;
          case 30:
            i = t.stateNode;
            break;
          default:
            i = t.stateNode;
        }
        typeof n == "function" ? (t.refCleanup = n(i)) : (n.current = i);
      }
    } catch (r) {
      Et(t, e, r);
    }
  }
  function Qe(t, e) {
    var n = t.ref,
      i = t.refCleanup;
    if (n !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (r) {
          Et(t, e, r);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          Et(t, e, r);
        }
      else n.current = null;
  }
  function tm(t) {
    var e = t.type,
      n = t.memoizedProps,
      i = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && i.focus();
          break t;
        case "img":
          n.src ? (i.src = n.src) : n.srcSet && (i.srcset = n.srcSet);
      }
    } catch (r) {
      Et(t, t.return, r);
    }
  }
  function tu(t, e, n) {
    try {
      var i = t.stateNode;
      Yx(i, t.type, n, e), (i[fe] = e);
    } catch (r) {
      Et(t, t.return, r);
    }
  }
  function em(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && Xn(t.type)) ||
      t.tag === 4
    );
  }
  function eu(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || em(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && Xn(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function nu(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6)
      (t = t.stateNode),
        e
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
              ? n.ownerDocument.body
              : n
            ).insertBefore(t, e)
          : ((e =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n),
            e.appendChild(t),
            (n = n._reactRootContainer),
            n != null || e.onclick !== null || (e.onclick = Ps));
    else if (
      i !== 4 &&
      (i === 27 && Xn(t.type) && ((n = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (nu(t, e, n), t = t.sibling; t !== null; )
        nu(t, e, n), (t = t.sibling);
  }
  function ks(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6)
      (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (
      i !== 4 &&
      (i === 27 && Xn(t.type) && (n = t.stateNode), (t = t.child), t !== null)
    )
      for (ks(t, e, n), t = t.sibling; t !== null; )
        ks(t, e, n), (t = t.sibling);
  }
  function nm(t) {
    var e = t.stateNode,
      n = t.memoizedProps;
    try {
      for (var i = t.type, r = e.attributes; r.length; )
        e.removeAttributeNode(r[0]);
      ne(e, i, n), (e[ie] = t), (e[fe] = n);
    } catch (u) {
      Et(t, t.return, u);
    }
  }
  var fn = !1,
    Gt = !1,
    au = !1,
    am = typeof WeakSet == "function" ? WeakSet : Set,
    Wt = null;
  function jx(t, e) {
    if (((t = t.containerInfo), (Mu = er), (t = md(t)), to(t))) {
      if ("selectionStart" in t)
        var n = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          n = ((n = t.ownerDocument) && n.defaultView) || window;
          var i = n.getSelection && n.getSelection();
          if (i && i.rangeCount !== 0) {
            n = i.anchorNode;
            var r = i.anchorOffset,
              u = i.focusNode;
            i = i.focusOffset;
            try {
              n.nodeType, u.nodeType;
            } catch {
              n = null;
              break t;
            }
            var m = 0,
              x = -1,
              T = -1,
              M = 0,
              O = 0,
              V = t,
              D = null;
            e: for (;;) {
              for (
                var R;
                V !== n || (r !== 0 && V.nodeType !== 3) || (x = m + r),
                  V !== u || (i !== 0 && V.nodeType !== 3) || (T = m + i),
                  V.nodeType === 3 && (m += V.nodeValue.length),
                  (R = V.firstChild) !== null;

              )
                (D = V), (V = R);
              for (;;) {
                if (V === t) break e;
                if (
                  (D === n && ++M === r && (x = m),
                  D === u && ++O === i && (T = m),
                  (R = V.nextSibling) !== null)
                )
                  break;
                (V = D), (D = V.parentNode);
              }
              V = R;
            }
            n = x === -1 || T === -1 ? null : { start: x, end: T };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Eu = { focusedElem: t, selectionRange: n }, er = !1, Wt = e;
      Wt !== null;

    )
      if (
        ((e = Wt), (t = e.child), (e.subtreeFlags & 1024) !== 0 && t !== null)
      )
        (t.return = e), (Wt = t);
      else
        for (; Wt !== null; ) {
          switch (((e = Wt), (u = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && u !== null) {
                (t = void 0),
                  (n = e),
                  (r = u.memoizedProps),
                  (u = u.memoizedState),
                  (i = n.stateNode);
                try {
                  var lt = xa(n.type, r, n.elementType === n.type);
                  (t = i.getSnapshotBeforeUpdate(lt, u)),
                    (i.__reactInternalSnapshotBeforeUpdate = t);
                } catch (at) {
                  Et(n, n.return, at);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9)
                )
                  Cu(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Cu(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(o(163));
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (Wt = t);
            break;
          }
          Wt = e.return;
        }
  }
  function im(t, e, n) {
    var i = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        kn(t, n), i & 4 && ul(5, n);
        break;
      case 1:
        if ((kn(t, n), i & 4))
          if (((t = n.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (m) {
              Et(n, n.return, m);
            }
          else {
            var r = xa(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(r, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (m) {
              Et(n, n.return, m);
            }
          }
        i & 64 && Wh(n), i & 512 && cl(n, n.return);
        break;
      case 3:
        if ((kn(t, n), i & 64 && ((t = n.updateQueue), t !== null))) {
          if (((e = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            Ld(t, e);
          } catch (m) {
            Et(n, n.return, m);
          }
        }
        break;
      case 27:
        e === null && i & 4 && nm(n);
      case 26:
      case 5:
        kn(t, n), e === null && i & 4 && tm(n), i & 512 && cl(n, n.return);
        break;
      case 12:
        kn(t, n);
        break;
      case 13:
        kn(t, n),
          i & 4 && rm(t, n),
          i & 64 &&
            ((t = n.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((n = zx.bind(null, n)), Fx(t, n))));
        break;
      case 22:
        if (((i = n.memoizedState !== null || fn), !i)) {
          (e = (e !== null && e.memoizedState !== null) || Gt), (r = fn);
          var u = Gt;
          (fn = i),
            (Gt = e) && !u ? Bn(t, n, (n.subtreeFlags & 8772) !== 0) : kn(t, n),
            (fn = r),
            (Gt = u);
        }
        break;
      case 30:
        break;
      default:
        kn(t, n);
    }
  }
  function lm(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), lm(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Vr(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var Ot = null,
    me = !1;
  function dn(t, e, n) {
    for (n = n.child; n !== null; ) sm(t, e, n), (n = n.sibling);
  }
  function sm(t, e, n) {
    if (ve && typeof ve.onCommitFiberUnmount == "function")
      try {
        ve.onCommitFiberUnmount(Ci, n);
      } catch {}
    switch (n.tag) {
      case 26:
        Gt || Qe(n, e),
          dn(t, e, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
        break;
      case 27:
        Gt || Qe(n, e);
        var i = Ot,
          r = me;
        Xn(n.type) && ((Ot = n.stateNode), (me = !1)),
          dn(t, e, n),
          xl(n.stateNode),
          (Ot = i),
          (me = r);
        break;
      case 5:
        Gt || Qe(n, e);
      case 6:
        if (
          ((i = Ot),
          (r = me),
          (Ot = null),
          dn(t, e, n),
          (Ot = i),
          (me = r),
          Ot !== null)
        )
          if (me)
            try {
              (Ot.nodeType === 9
                ? Ot.body
                : Ot.nodeName === "HTML"
                ? Ot.ownerDocument.body
                : Ot
              ).removeChild(n.stateNode);
            } catch (u) {
              Et(n, e, u);
            }
          else
            try {
              Ot.removeChild(n.stateNode);
            } catch (u) {
              Et(n, e, u);
            }
        break;
      case 18:
        Ot !== null &&
          (me
            ? ((t = Ot),
              Pm(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t,
                n.stateNode
              ),
              Ml(t))
            : Pm(Ot, n.stateNode));
        break;
      case 4:
        (i = Ot),
          (r = me),
          (Ot = n.stateNode.containerInfo),
          (me = !0),
          dn(t, e, n),
          (Ot = i),
          (me = r);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Gt || Un(2, n, e), Gt || Un(4, n, e), dn(t, e, n);
        break;
      case 1:
        Gt ||
          (Qe(n, e),
          (i = n.stateNode),
          typeof i.componentWillUnmount == "function" && Ih(n, e, i)),
          dn(t, e, n);
        break;
      case 21:
        dn(t, e, n);
        break;
      case 22:
        (Gt = (i = Gt) || n.memoizedState !== null), dn(t, e, n), (Gt = i);
        break;
      default:
        dn(t, e, n);
    }
  }
  function rm(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Ml(t);
      } catch (n) {
        Et(e, e.return, n);
      }
  }
  function Ax(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new am()), e;
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new am()),
          e
        );
      default:
        throw Error(o(435, t.tag));
    }
  }
  function iu(t, e) {
    var n = Ax(t);
    e.forEach(function (i) {
      var r = Ox.bind(null, t, i);
      n.has(i) || (n.add(i), i.then(r, r));
    });
  }
  function Te(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var r = n[i],
          u = t,
          m = e,
          x = m;
        t: for (; x !== null; ) {
          switch (x.tag) {
            case 27:
              if (Xn(x.type)) {
                (Ot = x.stateNode), (me = !1);
                break t;
              }
              break;
            case 5:
              (Ot = x.stateNode), (me = !1);
              break t;
            case 3:
            case 4:
              (Ot = x.stateNode.containerInfo), (me = !0);
              break t;
          }
          x = x.return;
        }
        if (Ot === null) throw Error(o(160));
        sm(u, m, r),
          (Ot = null),
          (me = !1),
          (u = r.alternate),
          u !== null && (u.return = null),
          (r.return = null);
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; ) om(e, t), (e = e.sibling);
  }
  var qe = null;
  function om(t, e) {
    var n = t.alternate,
      i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Te(e, t),
          je(t),
          i & 4 && (Un(3, t, t.return), ul(3, t), Un(5, t, t.return));
        break;
      case 1:
        Te(e, t),
          je(t),
          i & 512 && (Gt || n === null || Qe(n, n.return)),
          i & 64 &&
            fn &&
            ((t = t.updateQueue),
            t !== null &&
              ((i = t.callbacks),
              i !== null &&
                ((n = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = n === null ? i : n.concat(i)))));
        break;
      case 26:
        var r = qe;
        if (
          (Te(e, t),
          je(t),
          i & 512 && (Gt || n === null || Qe(n, n.return)),
          i & 4)
        ) {
          var u = n !== null ? n.memoizedState : null;
          if (((i = t.memoizedState), n === null))
            if (i === null)
              if (t.stateNode === null) {
                t: {
                  (i = t.type),
                    (n = t.memoizedProps),
                    (r = r.ownerDocument || r);
                  e: switch (i) {
                    case "title":
                      (u = r.getElementsByTagName("title")[0]),
                        (!u ||
                          u[_i] ||
                          u[ie] ||
                          u.namespaceURI === "http://www.w3.org/2000/svg" ||
                          u.hasAttribute("itemprop")) &&
                          ((u = r.createElement(i)),
                          r.head.insertBefore(
                            u,
                            r.querySelector("head > title")
                          )),
                        ne(u, i, n),
                        (u[ie] = t),
                        Ft(u),
                        (i = u);
                      break t;
                    case "link":
                      var m = np("link", "href", r).get(i + (n.href || ""));
                      if (m) {
                        for (var x = 0; x < m.length; x++)
                          if (
                            ((u = m[x]),
                            u.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              u.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              u.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              u.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            m.splice(x, 1);
                            break e;
                          }
                      }
                      (u = r.createElement(i)),
                        ne(u, i, n),
                        r.head.appendChild(u);
                      break;
                    case "meta":
                      if (
                        (m = np("meta", "content", r).get(
                          i + (n.content || "")
                        ))
                      ) {
                        for (x = 0; x < m.length; x++)
                          if (
                            ((u = m[x]),
                            u.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              u.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              u.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              u.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              u.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            m.splice(x, 1);
                            break e;
                          }
                      }
                      (u = r.createElement(i)),
                        ne(u, i, n),
                        r.head.appendChild(u);
                      break;
                    default:
                      throw Error(o(468, i));
                  }
                  (u[ie] = t), Ft(u), (i = u);
                }
                t.stateNode = i;
              } else ap(r, t.type, t.stateNode);
            else t.stateNode = ep(r, i, t.memoizedProps);
          else
            u !== i
              ? (u === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : u.count--,
                i === null
                  ? ap(r, t.type, t.stateNode)
                  : ep(r, i, t.memoizedProps))
              : i === null &&
                t.stateNode !== null &&
                tu(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        Te(e, t),
          je(t),
          i & 512 && (Gt || n === null || Qe(n, n.return)),
          n !== null && i & 4 && tu(t, t.memoizedProps, n.memoizedProps);
        break;
      case 5:
        if (
          (Te(e, t),
          je(t),
          i & 512 && (Gt || n === null || Qe(n, n.return)),
          t.flags & 32)
        ) {
          r = t.stateNode;
          try {
            Ba(r, "");
          } catch (R) {
            Et(t, t.return, R);
          }
        }
        i & 4 &&
          t.stateNode != null &&
          ((r = t.memoizedProps), tu(t, r, n !== null ? n.memoizedProps : r)),
          i & 1024 && (au = !0);
        break;
      case 6:
        if ((Te(e, t), je(t), i & 4)) {
          if (t.stateNode === null) throw Error(o(162));
          (i = t.memoizedProps), (n = t.stateNode);
          try {
            n.nodeValue = i;
          } catch (R) {
            Et(t, t.return, R);
          }
        }
        break;
      case 3:
        if (
          ((Ws = null),
          (r = qe),
          (qe = Fs(e.containerInfo)),
          Te(e, t),
          (qe = r),
          je(t),
          i & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Ml(e.containerInfo);
          } catch (R) {
            Et(t, t.return, R);
          }
        au && ((au = !1), um(t));
        break;
      case 4:
        (i = qe),
          (qe = Fs(t.stateNode.containerInfo)),
          Te(e, t),
          je(t),
          (qe = i);
        break;
      case 12:
        Te(e, t), je(t);
        break;
      case 13:
        Te(e, t),
          je(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (cu = Xe()),
          i & 4 &&
            ((i = t.updateQueue),
            i !== null && ((t.updateQueue = null), iu(t, i)));
        break;
      case 22:
        r = t.memoizedState !== null;
        var T = n !== null && n.memoizedState !== null,
          M = fn,
          O = Gt;
        if (
          ((fn = M || r),
          (Gt = O || T),
          Te(e, t),
          (Gt = O),
          (fn = M),
          je(t),
          i & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = r ? e._visibility & -2 : e._visibility | 1,
              r && (n === null || T || fn || Gt || ba(t)),
              n = null,
              e = t;
            ;

          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                T = n = e;
                try {
                  if (((u = T.stateNode), r))
                    (m = u.style),
                      typeof m.setProperty == "function"
                        ? m.setProperty("display", "none", "important")
                        : (m.display = "none");
                  else {
                    x = T.stateNode;
                    var V = T.memoizedProps.style,
                      D =
                        V != null && V.hasOwnProperty("display")
                          ? V.display
                          : null;
                    x.style.display =
                      D == null || typeof D == "boolean" ? "" : ("" + D).trim();
                  }
                } catch (R) {
                  Et(T, T.return, R);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                T = e;
                try {
                  T.stateNode.nodeValue = r ? "" : T.memoizedProps;
                } catch (R) {
                  Et(T, T.return, R);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              n === e && (n = null), (e = e.return);
            }
            n === e && (n = null),
              (e.sibling.return = e.return),
              (e = e.sibling);
          }
        i & 4 &&
          ((i = t.updateQueue),
          i !== null &&
            ((n = i.retryQueue),
            n !== null && ((i.retryQueue = null), iu(t, n))));
        break;
      case 19:
        Te(e, t),
          je(t),
          i & 4 &&
            ((i = t.updateQueue),
            i !== null && ((t.updateQueue = null), iu(t, i)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Te(e, t), je(t);
    }
  }
  function je(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, i = t.return; i !== null; ) {
          if (em(i)) {
            n = i;
            break;
          }
          i = i.return;
        }
        if (n == null) throw Error(o(160));
        switch (n.tag) {
          case 27:
            var r = n.stateNode,
              u = eu(t);
            ks(t, u, r);
            break;
          case 5:
            var m = n.stateNode;
            n.flags & 32 && (Ba(m, ""), (n.flags &= -33));
            var x = eu(t);
            ks(t, x, m);
            break;
          case 3:
          case 4:
            var T = n.stateNode.containerInfo,
              M = eu(t);
            nu(t, M, T);
            break;
          default:
            throw Error(o(161));
        }
      } catch (O) {
        Et(t, t.return, O);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function um(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        um(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function kn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) im(t, e.alternate, e), (e = e.sibling);
  }
  function ba(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Un(4, e, e.return), ba(e);
          break;
        case 1:
          Qe(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && Ih(e, e.return, n),
            ba(e);
          break;
        case 27:
          xl(e.stateNode);
        case 26:
        case 5:
          Qe(e, e.return), ba(e);
          break;
        case 22:
          e.memoizedState === null && ba(e);
          break;
        case 30:
          ba(e);
          break;
        default:
          ba(e);
      }
      t = t.sibling;
    }
  }
  function Bn(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var i = e.alternate,
        r = t,
        u = e,
        m = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Bn(r, u, n), ul(4, u);
          break;
        case 1:
          if (
            (Bn(r, u, n),
            (i = u),
            (r = i.stateNode),
            typeof r.componentDidMount == "function")
          )
            try {
              r.componentDidMount();
            } catch (M) {
              Et(i, i.return, M);
            }
          if (((i = u), (r = i.updateQueue), r !== null)) {
            var x = i.stateNode;
            try {
              var T = r.shared.hiddenCallbacks;
              if (T !== null)
                for (r.shared.hiddenCallbacks = null, r = 0; r < T.length; r++)
                  Bd(T[r], x);
            } catch (M) {
              Et(i, i.return, M);
            }
          }
          n && m & 64 && Wh(u), cl(u, u.return);
          break;
        case 27:
          nm(u);
        case 26:
        case 5:
          Bn(r, u, n), n && i === null && m & 4 && tm(u), cl(u, u.return);
          break;
        case 12:
          Bn(r, u, n);
          break;
        case 13:
          Bn(r, u, n), n && m & 4 && rm(r, u);
          break;
        case 22:
          u.memoizedState === null && Bn(r, u, n), cl(u, u.return);
          break;
        case 30:
          break;
        default:
          Bn(r, u, n);
      }
      e = e.sibling;
    }
  }
  function lu(t, e) {
    var n = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && Ji(n));
  }
  function su(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Ji(t));
  }
  function Pe(t, e, n, i) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) cm(t, e, n, i), (e = e.sibling);
  }
  function cm(t, e, n, i) {
    var r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Pe(t, e, n, i), r & 2048 && ul(9, e);
        break;
      case 1:
        Pe(t, e, n, i);
        break;
      case 3:
        Pe(t, e, n, i),
          r & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Ji(t)));
        break;
      case 12:
        if (r & 2048) {
          Pe(t, e, n, i), (t = e.stateNode);
          try {
            var u = e.memoizedProps,
              m = u.id,
              x = u.onPostCommit;
            typeof x == "function" &&
              x(
                m,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (T) {
            Et(e, e.return, T);
          }
        } else Pe(t, e, n, i);
        break;
      case 13:
        Pe(t, e, n, i);
        break;
      case 23:
        break;
      case 22:
        (u = e.stateNode),
          (m = e.alternate),
          e.memoizedState !== null
            ? u._visibility & 2
              ? Pe(t, e, n, i)
              : fl(t, e)
            : u._visibility & 2
            ? Pe(t, e, n, i)
            : ((u._visibility |= 2),
              ai(t, e, n, i, (e.subtreeFlags & 10256) !== 0)),
          r & 2048 && lu(m, e);
        break;
      case 24:
        Pe(t, e, n, i), r & 2048 && su(e.alternate, e);
        break;
      default:
        Pe(t, e, n, i);
    }
  }
  function ai(t, e, n, i, r) {
    for (r = r && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var u = t,
        m = e,
        x = n,
        T = i,
        M = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          ai(u, m, x, T, r), ul(8, m);
          break;
        case 23:
          break;
        case 22:
          var O = m.stateNode;
          m.memoizedState !== null
            ? O._visibility & 2
              ? ai(u, m, x, T, r)
              : fl(u, m)
            : ((O._visibility |= 2), ai(u, m, x, T, r)),
            r && M & 2048 && lu(m.alternate, m);
          break;
        case 24:
          ai(u, m, x, T, r), r && M & 2048 && su(m.alternate, m);
          break;
        default:
          ai(u, m, x, T, r);
      }
      e = e.sibling;
    }
  }
  function fl(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t,
          i = e,
          r = i.flags;
        switch (i.tag) {
          case 22:
            fl(n, i), r & 2048 && lu(i.alternate, i);
            break;
          case 24:
            fl(n, i), r & 2048 && su(i.alternate, i);
            break;
          default:
            fl(n, i);
        }
        e = e.sibling;
      }
  }
  var dl = 8192;
  function ii(t) {
    if (t.subtreeFlags & dl)
      for (t = t.child; t !== null; ) fm(t), (t = t.sibling);
  }
  function fm(t) {
    switch (t.tag) {
      case 26:
        ii(t),
          t.flags & dl &&
            t.memoizedState !== null &&
            u1(qe, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        ii(t);
        break;
      case 3:
      case 4:
        var e = qe;
        (qe = Fs(t.stateNode.containerInfo)), ii(t), (qe = e);
        break;
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = dl), (dl = 16777216), ii(t), (dl = e))
            : ii(t));
        break;
      default:
        ii(t);
    }
  }
  function dm(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function hl(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (Wt = i), mm(i, t);
        }
      dm(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) hm(t), (t = t.sibling);
  }
  function hm(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        hl(t), t.flags & 2048 && Un(9, t, t.return);
        break;
      case 3:
        hl(t);
        break;
      case 12:
        hl(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), Bs(t))
          : hl(t);
        break;
      default:
        hl(t);
    }
  }
  function Bs(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (Wt = i), mm(i, t);
        }
      dm(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          Un(8, e, e.return), Bs(e);
          break;
        case 22:
          (n = e.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), Bs(e));
          break;
        default:
          Bs(e);
      }
      t = t.sibling;
    }
  }
  function mm(t, e) {
    for (; Wt !== null; ) {
      var n = Wt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Un(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var i = n.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          Ji(n.memoizedState.cache);
      }
      if (((i = n.child), i !== null)) (i.return = n), (Wt = i);
      else
        t: for (n = t; Wt !== null; ) {
          i = Wt;
          var r = i.sibling,
            u = i.return;
          if ((lm(i), i === n)) {
            Wt = null;
            break t;
          }
          if (r !== null) {
            (r.return = u), (Wt = r);
            break t;
          }
          Wt = u;
        }
    }
  }
  var Nx = {
      getCacheForType: function (t) {
        var e = le(Qt),
          n = e.data.get(t);
        return n === void 0 && ((n = t()), e.data.set(t, n)), n;
      },
    },
    wx = typeof WeakMap == "function" ? WeakMap : Map,
    Tt = 0,
    Rt = null,
    pt = null,
    vt = 0,
    jt = 0,
    Ae = null,
    Ln = !1,
    li = !1,
    ru = !1,
    hn = 0,
    Bt = 0,
    Hn = 0,
    Sa = 0,
    ou = 0,
    Ve = 0,
    si = 0,
    ml = null,
    pe = null,
    uu = !1,
    cu = 0,
    Ls = 1 / 0,
    Hs = null,
    qn = null,
    ee = 0,
    Gn = null,
    ri = null,
    oi = 0,
    fu = 0,
    du = null,
    pm = null,
    pl = 0,
    hu = null;
  function Ne() {
    if ((Tt & 2) !== 0 && vt !== 0) return vt & -vt;
    if (C.T !== null) {
      var t = Ja;
      return t !== 0 ? t : bu();
    }
    return Cf();
  }
  function gm() {
    Ve === 0 && (Ve = (vt & 536870912) === 0 || St ? Mf() : 536870912);
    var t = _e.current;
    return t !== null && (t.flags |= 32), Ve;
  }
  function we(t, e, n) {
    ((t === Rt && (jt === 2 || jt === 9)) || t.cancelPendingCommit !== null) &&
      (ui(t, 0), Yn(t, vt, Ve, !1)),
      Oi(t, n),
      ((Tt & 2) === 0 || t !== Rt) &&
        (t === Rt &&
          ((Tt & 2) === 0 && (Sa |= n), Bt === 4 && Yn(t, vt, Ve, !1)),
        Je(t));
  }
  function ym(t, e, n) {
    if ((Tt & 6) !== 0) throw Error(o(327));
    var i = (!n && (e & 124) === 0 && (e & t.expiredLanes) === 0) || zi(t, e),
      r = i ? Dx(t, e) : gu(t, e, !0),
      u = i;
    do {
      if (r === 0) {
        li && !i && Yn(t, e, 0, !1);
        break;
      } else {
        if (((n = t.current.alternate), u && !Mx(n))) {
          (r = gu(t, e, !1)), (u = !1);
          continue;
        }
        if (r === 2) {
          if (((u = e), t.errorRecoveryDisabledLanes & u)) var m = 0;
          else
            (m = t.pendingLanes & -536870913),
              (m = m !== 0 ? m : m & 536870912 ? 536870912 : 0);
          if (m !== 0) {
            e = m;
            t: {
              var x = t;
              r = ml;
              var T = x.current.memoizedState.isDehydrated;
              if ((T && (ui(x, m).flags |= 256), (m = gu(x, m, !1)), m !== 2)) {
                if (ru && !T) {
                  (x.errorRecoveryDisabledLanes |= u), (Sa |= u), (r = 4);
                  break t;
                }
                (u = pe),
                  (pe = r),
                  u !== null && (pe === null ? (pe = u) : pe.push.apply(pe, u));
              }
              r = m;
            }
            if (((u = !1), r !== 2)) continue;
          }
        }
        if (r === 1) {
          ui(t, 0), Yn(t, e, 0, !0);
          break;
        }
        t: {
          switch (((i = t), (u = r), u)) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Yn(i, e, Ve, !Ln);
              break t;
            case 2:
              pe = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((e & 62914560) === e && ((r = cu + 300 - Xe()), 10 < r)) {
            if ((Yn(i, e, Ve, !Ln), $l(i, 0, !0) !== 0)) break t;
            i.timeoutHandle = Km(
              vm.bind(null, i, n, pe, Hs, uu, e, Ve, Sa, si, Ln, u, 2, -0, 0),
              r
            );
            break t;
          }
          vm(i, n, pe, Hs, uu, e, Ve, Sa, si, Ln, u, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Je(t);
  }
  function vm(t, e, n, i, r, u, m, x, T, M, O, V, D, R) {
    if (
      ((t.timeoutHandle = -1),
      (V = e.subtreeFlags),
      (V & 8192 || (V & 16785408) === 16785408) &&
        ((Tl = { stylesheets: null, count: 0, unsuspend: o1 }),
        fm(e),
        (V = c1()),
        V !== null))
    ) {
      (t.cancelPendingCommit = V(
        Nm.bind(null, t, e, u, n, i, r, m, x, T, O, 1, D, R)
      )),
        Yn(t, u, m, !M);
      return;
    }
    Nm(t, e, u, n, i, r, m, x, T);
  }
  function Mx(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        e.flags & 16384 &&
        ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var i = 0; i < n.length; i++) {
          var r = n[i],
            u = r.getSnapshot;
          r = r.value;
          try {
            if (!be(u(), r)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
        (n.return = e), (e = n);
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function Yn(t, e, n, i) {
    (e &= ~ou),
      (e &= ~Sa),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      i && (t.warmLanes |= e),
      (i = t.expirationTimes);
    for (var r = e; 0 < r; ) {
      var u = 31 - xe(r),
        m = 1 << u;
      (i[u] = -1), (r &= ~m);
    }
    n !== 0 && Df(t, n, e);
  }
  function qs() {
    return (Tt & 6) === 0 ? (gl(0), !1) : !0;
  }
  function mu() {
    if (pt !== null) {
      if (jt === 0) var t = pt.return;
      else (t = pt), (ln = pa = null), Co(t), (ei = null), (sl = 0), (t = pt);
      for (; t !== null; ) $h(t.alternate, t), (t = t.return);
      pt = null;
    }
  }
  function ui(t, e) {
    var n = t.timeoutHandle;
    n !== -1 && ((t.timeoutHandle = -1), Zx(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      mu(),
      (Rt = t),
      (pt = n = en(t.current, null)),
      (vt = e),
      (jt = 0),
      (Ae = null),
      (Ln = !1),
      (li = zi(t, e)),
      (ru = !1),
      (si = Ve = ou = Sa = Hn = Bt = 0),
      (pe = ml = null),
      (uu = !1),
      (e & 8) !== 0 && (e |= e & 32);
    var i = t.entangledLanes;
    if (i !== 0)
      for (t = t.entanglements, i &= e; 0 < i; ) {
        var r = 31 - xe(i),
          u = 1 << r;
        (e |= t[r]), (i &= ~u);
      }
    return (hn = e), us(), n;
  }
  function xm(t, e) {
    (ct = null),
      (C.H = Es),
      e === $i || e === vs
        ? ((e = Ud()), (jt = 3))
        : e === Od
        ? ((e = Ud()), (jt = 4))
        : (jt =
            e === kh
              ? 8
              : e !== null &&
                typeof e == "object" &&
                typeof e.then == "function"
              ? 6
              : 1),
      (Ae = e),
      pt === null && ((Bt = 1), Os(t, Re(e, t.current)));
  }
  function bm() {
    var t = C.H;
    return (C.H = Es), t === null ? Es : t;
  }
  function Sm() {
    var t = C.A;
    return (C.A = Nx), t;
  }
  function pu() {
    (Bt = 4),
      Ln || ((vt & 4194048) !== vt && _e.current !== null) || (li = !0),
      ((Hn & 134217727) === 0 && (Sa & 134217727) === 0) ||
        Rt === null ||
        Yn(Rt, vt, Ve, !1);
  }
  function gu(t, e, n) {
    var i = Tt;
    Tt |= 2;
    var r = bm(),
      u = Sm();
    (Rt !== t || vt !== e) && ((Hs = null), ui(t, e)), (e = !1);
    var m = Bt;
    t: do
      try {
        if (jt !== 0 && pt !== null) {
          var x = pt,
            T = Ae;
          switch (jt) {
            case 8:
              mu(), (m = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              _e.current === null && (e = !0);
              var M = jt;
              if (((jt = 0), (Ae = null), ci(t, x, T, M), n && li)) {
                m = 0;
                break t;
              }
              break;
            default:
              (M = jt), (jt = 0), (Ae = null), ci(t, x, T, M);
          }
        }
        Ex(), (m = Bt);
        break;
      } catch (O) {
        xm(t, O);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (ln = pa = null),
      (Tt = i),
      (C.H = r),
      (C.A = u),
      pt === null && ((Rt = null), (vt = 0), us()),
      m
    );
  }
  function Ex() {
    for (; pt !== null; ) Tm(pt);
  }
  function Dx(t, e) {
    var n = Tt;
    Tt |= 2;
    var i = bm(),
      r = Sm();
    Rt !== t || vt !== e
      ? ((Hs = null), (Ls = Xe() + 500), ui(t, e))
      : (li = zi(t, e));
    t: do
      try {
        if (jt !== 0 && pt !== null) {
          e = pt;
          var u = Ae;
          e: switch (jt) {
            case 1:
              (jt = 0), (Ae = null), ci(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (_d(u)) {
                (jt = 0), (Ae = null), jm(e);
                break;
              }
              (e = function () {
                (jt !== 2 && jt !== 9) || Rt !== t || (jt = 7), Je(t);
              }),
                u.then(e, e);
              break t;
            case 3:
              jt = 7;
              break t;
            case 4:
              jt = 5;
              break t;
            case 7:
              _d(u)
                ? ((jt = 0), (Ae = null), jm(e))
                : ((jt = 0), (Ae = null), ci(t, e, u, 7));
              break;
            case 5:
              var m = null;
              switch (pt.tag) {
                case 26:
                  m = pt.memoizedState;
                case 5:
                case 27:
                  var x = pt;
                  if (!m || ip(m)) {
                    (jt = 0), (Ae = null);
                    var T = x.sibling;
                    if (T !== null) pt = T;
                    else {
                      var M = x.return;
                      M !== null ? ((pt = M), Gs(M)) : (pt = null);
                    }
                    break e;
                  }
              }
              (jt = 0), (Ae = null), ci(t, e, u, 5);
              break;
            case 6:
              (jt = 0), (Ae = null), ci(t, e, u, 6);
              break;
            case 8:
              mu(), (Bt = 6);
              break t;
            default:
              throw Error(o(462));
          }
        }
        Rx();
        break;
      } catch (O) {
        xm(t, O);
      }
    while (!0);
    return (
      (ln = pa = null),
      (C.H = i),
      (C.A = r),
      (Tt = n),
      pt !== null ? 0 : ((Rt = null), (vt = 0), us(), Bt)
    );
  }
  function Rx() {
    for (; pt !== null && !Wy(); ) Tm(pt);
  }
  function Tm(t) {
    var e = Jh(t.alternate, t, hn);
    (t.memoizedProps = t.pendingProps), e === null ? Gs(t) : (pt = e);
  }
  function jm(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Yh(n, e, e.pendingProps, e.type, void 0, vt);
        break;
      case 11:
        e = Yh(n, e, e.pendingProps, e.type.render, e.ref, vt);
        break;
      case 5:
        Co(e);
      default:
        $h(n, e), (e = pt = Ad(e, hn)), (e = Jh(n, e, hn));
    }
    (t.memoizedProps = t.pendingProps), e === null ? Gs(t) : (pt = e);
  }
  function ci(t, e, n, i) {
    (ln = pa = null), Co(e), (ei = null), (sl = 0);
    var r = e.return;
    try {
      if (xx(t, r, e, n, vt)) {
        (Bt = 1), Os(t, Re(n, t.current)), (pt = null);
        return;
      }
    } catch (u) {
      if (r !== null) throw ((pt = r), u);
      (Bt = 1), Os(t, Re(n, t.current)), (pt = null);
      return;
    }
    e.flags & 32768
      ? (St || i === 1
          ? (t = !0)
          : li || (vt & 536870912) !== 0
          ? (t = !1)
          : ((Ln = t = !0),
            (i === 2 || i === 9 || i === 3 || i === 6) &&
              ((i = _e.current),
              i !== null && i.tag === 13 && (i.flags |= 16384))),
        Am(e, t))
      : Gs(e);
  }
  function Gs(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Am(e, Ln);
        return;
      }
      t = e.return;
      var n = Sx(e.alternate, e, hn);
      if (n !== null) {
        pt = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        pt = e;
        return;
      }
      pt = e = t;
    } while (e !== null);
    Bt === 0 && (Bt = 5);
  }
  function Am(t, e) {
    do {
      var n = Tx(t.alternate, t);
      if (n !== null) {
        (n.flags &= 32767), (pt = n);
        return;
      }
      if (
        ((n = t.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        pt = t;
        return;
      }
      pt = t = n;
    } while (t !== null);
    (Bt = 6), (pt = null);
  }
  function Nm(t, e, n, i, r, u, m, x, T) {
    t.cancelPendingCommit = null;
    do Ys();
    while (ee !== 0);
    if ((Tt & 6) !== 0) throw Error(o(327));
    if (e !== null) {
      if (e === t.current) throw Error(o(177));
      if (
        ((u = e.lanes | e.childLanes),
        (u |= lo),
        ov(t, n, u, m, x, T),
        t === Rt && ((pt = Rt = null), (vt = 0)),
        (ri = e),
        (Gn = t),
        (oi = n),
        (fu = u),
        (du = r),
        (pm = i),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            _x(Pl, function () {
              return Rm(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (i = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || i)
      ) {
        (i = C.T), (C.T = null), (r = H.p), (H.p = 2), (m = Tt), (Tt |= 4);
        try {
          jx(t, e, n);
        } finally {
          (Tt = m), (H.p = r), (C.T = i);
        }
      }
      (ee = 1), wm(), Mm(), Em();
    }
  }
  function wm() {
    if (ee === 1) {
      ee = 0;
      var t = Gn,
        e = ri,
        n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        (n = C.T), (C.T = null);
        var i = H.p;
        H.p = 2;
        var r = Tt;
        Tt |= 4;
        try {
          om(e, t);
          var u = Eu,
            m = md(t.containerInfo),
            x = u.focusedElem,
            T = u.selectionRange;
          if (
            m !== x &&
            x &&
            x.ownerDocument &&
            hd(x.ownerDocument.documentElement, x)
          ) {
            if (T !== null && to(x)) {
              var M = T.start,
                O = T.end;
              if ((O === void 0 && (O = M), "selectionStart" in x))
                (x.selectionStart = M),
                  (x.selectionEnd = Math.min(O, x.value.length));
              else {
                var V = x.ownerDocument || document,
                  D = (V && V.defaultView) || window;
                if (D.getSelection) {
                  var R = D.getSelection(),
                    lt = x.textContent.length,
                    at = Math.min(T.start, lt),
                    wt = T.end === void 0 ? at : Math.min(T.end, lt);
                  !R.extend && at > wt && ((m = wt), (wt = at), (at = m));
                  var N = dd(x, at),
                    A = dd(x, wt);
                  if (
                    N &&
                    A &&
                    (R.rangeCount !== 1 ||
                      R.anchorNode !== N.node ||
                      R.anchorOffset !== N.offset ||
                      R.focusNode !== A.node ||
                      R.focusOffset !== A.offset)
                  ) {
                    var w = V.createRange();
                    w.setStart(N.node, N.offset),
                      R.removeAllRanges(),
                      at > wt
                        ? (R.addRange(w), R.extend(A.node, A.offset))
                        : (w.setEnd(A.node, A.offset), R.addRange(w));
                  }
                }
              }
            }
            for (V = [], R = x; (R = R.parentNode); )
              R.nodeType === 1 &&
                V.push({ element: R, left: R.scrollLeft, top: R.scrollTop });
            for (
              typeof x.focus == "function" && x.focus(), x = 0;
              x < V.length;
              x++
            ) {
              var _ = V[x];
              (_.element.scrollLeft = _.left), (_.element.scrollTop = _.top);
            }
          }
          (er = !!Mu), (Eu = Mu = null);
        } finally {
          (Tt = r), (H.p = i), (C.T = n);
        }
      }
      (t.current = e), (ee = 2);
    }
  }
  function Mm() {
    if (ee === 2) {
      ee = 0;
      var t = Gn,
        e = ri,
        n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        (n = C.T), (C.T = null);
        var i = H.p;
        H.p = 2;
        var r = Tt;
        Tt |= 4;
        try {
          im(t, e.alternate, e);
        } finally {
          (Tt = r), (H.p = i), (C.T = n);
        }
      }
      ee = 3;
    }
  }
  function Em() {
    if (ee === 4 || ee === 3) {
      (ee = 0), Iy();
      var t = Gn,
        e = ri,
        n = oi,
        i = pm;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (ee = 5)
        : ((ee = 0), (ri = Gn = null), Dm(t, t.pendingLanes));
      var r = t.pendingLanes;
      if (
        (r === 0 && (qn = null),
        Or(n),
        (e = e.stateNode),
        ve && typeof ve.onCommitFiberRoot == "function")
      )
        try {
          ve.onCommitFiberRoot(Ci, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (i !== null) {
        (e = C.T), (r = H.p), (H.p = 2), (C.T = null);
        try {
          for (var u = t.onRecoverableError, m = 0; m < i.length; m++) {
            var x = i[m];
            u(x.value, { componentStack: x.stack });
          }
        } finally {
          (C.T = e), (H.p = r);
        }
      }
      (oi & 3) !== 0 && Ys(),
        Je(t),
        (r = t.pendingLanes),
        (n & 4194090) !== 0 && (r & 42) !== 0
          ? t === hu
            ? pl++
            : ((pl = 0), (hu = t))
          : (pl = 0),
        gl(0);
    }
  }
  function Dm(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), Ji(e)));
  }
  function Ys(t) {
    return wm(), Mm(), Em(), Rm();
  }
  function Rm() {
    if (ee !== 5) return !1;
    var t = Gn,
      e = fu;
    fu = 0;
    var n = Or(oi),
      i = C.T,
      r = H.p;
    try {
      (H.p = 32 > n ? 32 : n), (C.T = null), (n = du), (du = null);
      var u = Gn,
        m = oi;
      if (((ee = 0), (ri = Gn = null), (oi = 0), (Tt & 6) !== 0))
        throw Error(o(331));
      var x = Tt;
      if (
        ((Tt |= 4),
        hm(u.current),
        cm(u, u.current, m, n),
        (Tt = x),
        gl(0, !1),
        ve && typeof ve.onPostCommitFiberRoot == "function")
      )
        try {
          ve.onPostCommitFiberRoot(Ci, u);
        } catch {}
      return !0;
    } finally {
      (H.p = r), (C.T = i), Dm(t, e);
    }
  }
  function Cm(t, e, n) {
    (e = Re(n, e)),
      (e = Zo(t.stateNode, e, 2)),
      (t = zn(t, e, 2)),
      t !== null && (Oi(t, 2), Je(t));
  }
  function Et(t, e, n) {
    if (t.tag === 3) Cm(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Cm(e, t, n);
          break;
        } else if (e.tag === 1) {
          var i = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof i.componentDidCatch == "function" &&
              (qn === null || !qn.has(i)))
          ) {
            (t = Re(n, t)),
              (n = Vh(2)),
              (i = zn(e, n, 2)),
              i !== null && (Uh(n, i, e, t), Oi(i, 2), Je(i));
            break;
          }
        }
        e = e.return;
      }
  }
  function yu(t, e, n) {
    var i = t.pingCache;
    if (i === null) {
      i = t.pingCache = new wx();
      var r = new Set();
      i.set(e, r);
    } else (r = i.get(e)), r === void 0 && ((r = new Set()), i.set(e, r));
    r.has(n) ||
      ((ru = !0), r.add(n), (t = Cx.bind(null, t, e, n)), e.then(t, t));
  }
  function Cx(t, e, n) {
    var i = t.pingCache;
    i !== null && i.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      Rt === t &&
        (vt & n) === n &&
        (Bt === 4 || (Bt === 3 && (vt & 62914560) === vt && 300 > Xe() - cu)
          ? (Tt & 2) === 0 && ui(t, 0)
          : (ou |= n),
        si === vt && (si = 0)),
      Je(t);
  }
  function zm(t, e) {
    e === 0 && (e = Ef()), (t = Za(t, e)), t !== null && (Oi(t, e), Je(t));
  }
  function zx(t) {
    var e = t.memoizedState,
      n = 0;
    e !== null && (n = e.retryLane), zm(t, n);
  }
  function Ox(t, e) {
    var n = 0;
    switch (t.tag) {
      case 13:
        var i = t.stateNode,
          r = t.memoizedState;
        r !== null && (n = r.retryLane);
        break;
      case 19:
        i = t.stateNode;
        break;
      case 22:
        i = t.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    i !== null && i.delete(e), zm(t, n);
  }
  function _x(t, e) {
    return Dr(t, e);
  }
  var Xs = null,
    fi = null,
    vu = !1,
    Zs = !1,
    xu = !1,
    Ta = 0;
  function Je(t) {
    t !== fi &&
      t.next === null &&
      (fi === null ? (Xs = fi = t) : (fi = fi.next = t)),
      (Zs = !0),
      vu || ((vu = !0), Ux());
  }
  function gl(t, e) {
    if (!xu && Zs) {
      xu = !0;
      do
        for (var n = !1, i = Xs; i !== null; ) {
          if (t !== 0) {
            var r = i.pendingLanes;
            if (r === 0) var u = 0;
            else {
              var m = i.suspendedLanes,
                x = i.pingedLanes;
              (u = (1 << (31 - xe(42 | t) + 1)) - 1),
                (u &= r & ~(m & ~x)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0);
            }
            u !== 0 && ((n = !0), Um(i, u));
          } else
            (u = vt),
              (u = $l(
                i,
                i === Rt ? u : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== -1
              )),
              (u & 3) === 0 || zi(i, u) || ((n = !0), Um(i, u));
          i = i.next;
        }
      while (n);
      xu = !1;
    }
  }
  function Vx() {
    Om();
  }
  function Om() {
    Zs = vu = !1;
    var t = 0;
    Ta !== 0 && (Xx() && (t = Ta), (Ta = 0));
    for (var e = Xe(), n = null, i = Xs; i !== null; ) {
      var r = i.next,
        u = _m(i, e);
      u === 0
        ? ((i.next = null),
          n === null ? (Xs = r) : (n.next = r),
          r === null && (fi = n))
        : ((n = i), (t !== 0 || (u & 3) !== 0) && (Zs = !0)),
        (i = r);
    }
    gl(t);
  }
  function _m(t, e) {
    for (
      var n = t.suspendedLanes,
        i = t.pingedLanes,
        r = t.expirationTimes,
        u = t.pendingLanes & -62914561;
      0 < u;

    ) {
      var m = 31 - xe(u),
        x = 1 << m,
        T = r[m];
      T === -1
        ? ((x & n) === 0 || (x & i) !== 0) && (r[m] = rv(x, e))
        : T <= e && (t.expiredLanes |= x),
        (u &= ~x);
    }
    if (
      ((e = Rt),
      (n = vt),
      (n = $l(
        t,
        t === e ? n : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      (i = t.callbackNode),
      n === 0 ||
        (t === e && (jt === 2 || jt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        i !== null && i !== null && Rr(i),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((n & 3) === 0 || zi(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((i !== null && Rr(i), Or(n))) {
        case 2:
        case 8:
          n = Nf;
          break;
        case 32:
          n = Pl;
          break;
        case 268435456:
          n = wf;
          break;
        default:
          n = Pl;
      }
      return (
        (i = Vm.bind(null, t)),
        (n = Dr(n, i)),
        (t.callbackPriority = e),
        (t.callbackNode = n),
        e
      );
    }
    return (
      i !== null && i !== null && Rr(i),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Vm(t, e) {
    if (ee !== 0 && ee !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var n = t.callbackNode;
    if (Ys() && t.callbackNode !== n) return null;
    var i = vt;
    return (
      (i = $l(
        t,
        t === Rt ? i : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      i === 0
        ? null
        : (ym(t, i, e),
          _m(t, Xe()),
          t.callbackNode != null && t.callbackNode === n
            ? Vm.bind(null, t)
            : null)
    );
  }
  function Um(t, e) {
    if (Ys()) return null;
    ym(t, e, !0);
  }
  function Ux() {
    Kx(function () {
      (Tt & 6) !== 0 ? Dr(Af, Vx) : Om();
    });
  }
  function bu() {
    return Ta === 0 && (Ta = Mf()), Ta;
  }
  function km(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : ns("" + t);
  }
  function Bm(t, e) {
    var n = e.ownerDocument.createElement("input");
    return (
      (n.name = e.name),
      (n.value = e.value),
      t.id && n.setAttribute("form", t.id),
      e.parentNode.insertBefore(n, e),
      (t = new FormData(t)),
      n.parentNode.removeChild(n),
      t
    );
  }
  function kx(t, e, n, i, r) {
    if (e === "submit" && n && n.stateNode === r) {
      var u = km((r[fe] || null).action),
        m = i.submitter;
      m &&
        ((e = (e = m[fe] || null)
          ? km(e.formAction)
          : m.getAttribute("formAction")),
        e !== null && ((u = e), (m = null)));
      var x = new ss("action", "action", null, i, r);
      t.push({
        event: x,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (i.defaultPrevented) {
                if (Ta !== 0) {
                  var T = m ? Bm(r, m) : new FormData(r);
                  Ho(
                    n,
                    { pending: !0, data: T, method: r.method, action: u },
                    null,
                    T
                  );
                }
              } else
                typeof u == "function" &&
                  (x.preventDefault(),
                  (T = m ? Bm(r, m) : new FormData(r)),
                  Ho(
                    n,
                    { pending: !0, data: T, method: r.method, action: u },
                    u,
                    T
                  ));
            },
            currentTarget: r,
          },
        ],
      });
    }
  }
  for (var Su = 0; Su < io.length; Su++) {
    var Tu = io[Su],
      Bx = Tu.toLowerCase(),
      Lx = Tu[0].toUpperCase() + Tu.slice(1);
    He(Bx, "on" + Lx);
  }
  He(yd, "onAnimationEnd"),
    He(vd, "onAnimationIteration"),
    He(xd, "onAnimationStart"),
    He("dblclick", "onDoubleClick"),
    He("focusin", "onFocus"),
    He("focusout", "onBlur"),
    He(nx, "onTransitionRun"),
    He(ax, "onTransitionStart"),
    He(ix, "onTransitionCancel"),
    He(bd, "onTransitionEnd"),
    Va("onMouseEnter", ["mouseout", "mouseover"]),
    Va("onMouseLeave", ["mouseout", "mouseover"]),
    Va("onPointerEnter", ["pointerout", "pointerover"]),
    Va("onPointerLeave", ["pointerout", "pointerover"]),
    sa(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    sa(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    sa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    sa(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    sa(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    sa(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var yl =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Hx = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(yl)
    );
  function Lm(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var i = t[n],
        r = i.event;
      i = i.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var m = i.length - 1; 0 <= m; m--) {
            var x = i[m],
              T = x.instance,
              M = x.currentTarget;
            if (((x = x.listener), T !== u && r.isPropagationStopped()))
              break t;
            (u = x), (r.currentTarget = M);
            try {
              u(r);
            } catch (O) {
              zs(O);
            }
            (r.currentTarget = null), (u = T);
          }
        else
          for (m = 0; m < i.length; m++) {
            if (
              ((x = i[m]),
              (T = x.instance),
              (M = x.currentTarget),
              (x = x.listener),
              T !== u && r.isPropagationStopped())
            )
              break t;
            (u = x), (r.currentTarget = M);
            try {
              u(r);
            } catch (O) {
              zs(O);
            }
            (r.currentTarget = null), (u = T);
          }
      }
    }
  }
  function gt(t, e) {
    var n = e[_r];
    n === void 0 && (n = e[_r] = new Set());
    var i = t + "__bubble";
    n.has(i) || (Hm(e, t, 2, !1), n.add(i));
  }
  function ju(t, e, n) {
    var i = 0;
    e && (i |= 4), Hm(n, t, i, e);
  }
  var Ks = "_reactListening" + Math.random().toString(36).slice(2);
  function Au(t) {
    if (!t[Ks]) {
      (t[Ks] = !0),
        Of.forEach(function (n) {
          n !== "selectionchange" && (Hx.has(n) || ju(n, !1, t), ju(n, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Ks] || ((e[Ks] = !0), ju("selectionchange", !1, e));
    }
  }
  function Hm(t, e, n, i) {
    switch (cp(e)) {
      case 2:
        var r = h1;
        break;
      case 8:
        r = m1;
        break;
      default:
        r = Bu;
    }
    (n = r.bind(null, e, n, t)),
      (r = void 0),
      !Zr ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (r = !0),
      i
        ? r !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: r })
          : t.addEventListener(e, n, !0)
        : r !== void 0
        ? t.addEventListener(e, n, { passive: r })
        : t.addEventListener(e, n, !1);
  }
  function Nu(t, e, n, i, r) {
    var u = i;
    if ((e & 1) === 0 && (e & 2) === 0 && i !== null)
      t: for (;;) {
        if (i === null) return;
        var m = i.tag;
        if (m === 3 || m === 4) {
          var x = i.stateNode.containerInfo;
          if (x === r) break;
          if (m === 4)
            for (m = i.return; m !== null; ) {
              var T = m.tag;
              if ((T === 3 || T === 4) && m.stateNode.containerInfo === r)
                return;
              m = m.return;
            }
          for (; x !== null; ) {
            if (((m = za(x)), m === null)) return;
            if (((T = m.tag), T === 5 || T === 6 || T === 26 || T === 27)) {
              i = u = m;
              continue t;
            }
            x = x.parentNode;
          }
        }
        i = i.return;
      }
    Qf(function () {
      var M = u,
        O = Yr(n),
        V = [];
      t: {
        var D = Sd.get(t);
        if (D !== void 0) {
          var R = ss,
            lt = t;
          switch (t) {
            case "keypress":
              if (is(n) === 0) break t;
            case "keydown":
            case "keyup":
              R = _v;
              break;
            case "focusin":
              (lt = "focus"), (R = Jr);
              break;
            case "focusout":
              (lt = "blur"), (R = Jr);
              break;
            case "beforeblur":
            case "afterblur":
              R = Jr;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              R = Ff;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              R = Tv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              R = kv;
              break;
            case yd:
            case vd:
            case xd:
              R = Nv;
              break;
            case bd:
              R = Lv;
              break;
            case "scroll":
            case "scrollend":
              R = bv;
              break;
            case "wheel":
              R = qv;
              break;
            case "copy":
            case "cut":
            case "paste":
              R = Mv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              R = Wf;
              break;
            case "toggle":
            case "beforetoggle":
              R = Yv;
          }
          var at = (e & 4) !== 0,
            wt = !at && (t === "scroll" || t === "scrollend"),
            N = at ? (D !== null ? D + "Capture" : null) : D;
          at = [];
          for (var A = M, w; A !== null; ) {
            var _ = A;
            if (
              ((w = _.stateNode),
              (_ = _.tag),
              (_ !== 5 && _ !== 26 && _ !== 27) ||
                w === null ||
                N === null ||
                ((_ = Ui(A, N)), _ != null && at.push(vl(A, _, w))),
              wt)
            )
              break;
            A = A.return;
          }
          0 < at.length &&
            ((D = new R(D, lt, null, n, O)),
            V.push({ event: D, listeners: at }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((D = t === "mouseover" || t === "pointerover"),
            (R = t === "mouseout" || t === "pointerout"),
            D &&
              n !== Gr &&
              (lt = n.relatedTarget || n.fromElement) &&
              (za(lt) || lt[Ca]))
          )
            break t;
          if (
            (R || D) &&
            ((D =
              O.window === O
                ? O
                : (D = O.ownerDocument)
                ? D.defaultView || D.parentWindow
                : window),
            R
              ? ((lt = n.relatedTarget || n.toElement),
                (R = M),
                (lt = lt ? za(lt) : null),
                lt !== null &&
                  ((wt = h(lt)),
                  (at = lt.tag),
                  lt !== wt || (at !== 5 && at !== 27 && at !== 6)) &&
                  (lt = null))
              : ((R = null), (lt = M)),
            R !== lt)
          ) {
            if (
              ((at = Ff),
              (_ = "onMouseLeave"),
              (N = "onMouseEnter"),
              (A = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((at = Wf),
                (_ = "onPointerLeave"),
                (N = "onPointerEnter"),
                (A = "pointer")),
              (wt = R == null ? D : Vi(R)),
              (w = lt == null ? D : Vi(lt)),
              (D = new at(_, A + "leave", R, n, O)),
              (D.target = wt),
              (D.relatedTarget = w),
              (_ = null),
              za(O) === M &&
                ((at = new at(N, A + "enter", lt, n, O)),
                (at.target = w),
                (at.relatedTarget = wt),
                (_ = at)),
              (wt = _),
              R && lt)
            )
              e: {
                for (at = R, N = lt, A = 0, w = at; w; w = di(w)) A++;
                for (w = 0, _ = N; _; _ = di(_)) w++;
                for (; 0 < A - w; ) (at = di(at)), A--;
                for (; 0 < w - A; ) (N = di(N)), w--;
                for (; A--; ) {
                  if (at === N || (N !== null && at === N.alternate)) break e;
                  (at = di(at)), (N = di(N));
                }
                at = null;
              }
            else at = null;
            R !== null && qm(V, D, R, at, !1),
              lt !== null && wt !== null && qm(V, wt, lt, at, !0);
          }
        }
        t: {
          if (
            ((D = M ? Vi(M) : window),
            (R = D.nodeName && D.nodeName.toLowerCase()),
            R === "select" || (R === "input" && D.type === "file"))
          )
            var F = sd;
          else if (id(D))
            if (rd) F = Iv;
            else {
              F = $v;
              var ht = Fv;
            }
          else
            (R = D.nodeName),
              !R ||
              R.toLowerCase() !== "input" ||
              (D.type !== "checkbox" && D.type !== "radio")
                ? M && qr(M.elementType) && (F = sd)
                : (F = Wv);
          if (F && (F = F(t, M))) {
            ld(V, F, n, O);
            break t;
          }
          ht && ht(t, D, M),
            t === "focusout" &&
              M &&
              D.type === "number" &&
              M.memoizedProps.value != null &&
              Hr(D, "number", D.value);
        }
        switch (((ht = M ? Vi(M) : window), t)) {
          case "focusin":
            (id(ht) || ht.contentEditable === "true") &&
              ((Ga = ht), (eo = M), (Xi = null));
            break;
          case "focusout":
            Xi = eo = Ga = null;
            break;
          case "mousedown":
            no = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (no = !1), pd(V, n, O);
            break;
          case "selectionchange":
            if (ex) break;
          case "keydown":
          case "keyup":
            pd(V, n, O);
        }
        var tt;
        if ($r)
          t: {
            switch (t) {
              case "compositionstart":
                var it = "onCompositionStart";
                break t;
              case "compositionend":
                it = "onCompositionEnd";
                break t;
              case "compositionupdate":
                it = "onCompositionUpdate";
                break t;
            }
            it = void 0;
          }
        else
          qa
            ? nd(t, n) && (it = "onCompositionEnd")
            : t === "keydown" &&
              n.keyCode === 229 &&
              (it = "onCompositionStart");
        it &&
          (If &&
            n.locale !== "ko" &&
            (qa || it !== "onCompositionStart"
              ? it === "onCompositionEnd" && qa && (tt = Pf())
              : ((En = O),
                (Kr = "value" in En ? En.value : En.textContent),
                (qa = !0))),
          (ht = Qs(M, it)),
          0 < ht.length &&
            ((it = new $f(it, t, null, n, O)),
            V.push({ event: it, listeners: ht }),
            tt
              ? (it.data = tt)
              : ((tt = ad(n)), tt !== null && (it.data = tt)))),
          (tt = Zv ? Kv(t, n) : Qv(t, n)) &&
            ((it = Qs(M, "onBeforeInput")),
            0 < it.length &&
              ((ht = new $f("onBeforeInput", "beforeinput", null, n, O)),
              V.push({ event: ht, listeners: it }),
              (ht.data = tt))),
          kx(V, t, M, n, O);
      }
      Lm(V, e);
    });
  }
  function vl(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function Qs(t, e) {
    for (var n = e + "Capture", i = []; t !== null; ) {
      var r = t,
        u = r.stateNode;
      if (
        ((r = r.tag),
        (r !== 5 && r !== 26 && r !== 27) ||
          u === null ||
          ((r = Ui(t, n)),
          r != null && i.unshift(vl(t, r, u)),
          (r = Ui(t, e)),
          r != null && i.push(vl(t, r, u))),
        t.tag === 3)
      )
        return i;
      t = t.return;
    }
    return [];
  }
  function di(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function qm(t, e, n, i, r) {
    for (var u = e._reactName, m = []; n !== null && n !== i; ) {
      var x = n,
        T = x.alternate,
        M = x.stateNode;
      if (((x = x.tag), T !== null && T === i)) break;
      (x !== 5 && x !== 26 && x !== 27) ||
        M === null ||
        ((T = M),
        r
          ? ((M = Ui(n, u)), M != null && m.unshift(vl(n, M, T)))
          : r || ((M = Ui(n, u)), M != null && m.push(vl(n, M, T)))),
        (n = n.return);
    }
    m.length !== 0 && t.push({ event: e, listeners: m });
  }
  var qx = /\r\n?/g,
    Gx = /\u0000|\uFFFD/g;
  function Gm(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        qx,
        `
`
      )
      .replace(Gx, "");
  }
  function Ym(t, e) {
    return (e = Gm(e)), Gm(t) === e;
  }
  function Ps() {}
  function Nt(t, e, n, i, r, u) {
    switch (n) {
      case "children":
        typeof i == "string"
          ? e === "body" || (e === "textarea" && i === "") || Ba(t, i)
          : (typeof i == "number" || typeof i == "bigint") &&
            e !== "body" &&
            Ba(t, "" + i);
        break;
      case "className":
        Il(t, "class", i);
        break;
      case "tabIndex":
        Il(t, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Il(t, n, i);
        break;
      case "style":
        Zf(t, i, u);
        break;
      case "data":
        if (e !== "object") {
          Il(t, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "symbol" ||
          typeof i == "boolean"
        ) {
          t.removeAttribute(n);
          break;
        }
        (i = ns("" + i)), t.setAttribute(n, i);
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" &&
            (n === "formAction"
              ? (e !== "input" && Nt(t, e, "name", r.name, r, null),
                Nt(t, e, "formEncType", r.formEncType, r, null),
                Nt(t, e, "formMethod", r.formMethod, r, null),
                Nt(t, e, "formTarget", r.formTarget, r, null))
              : (Nt(t, e, "encType", r.encType, r, null),
                Nt(t, e, "method", r.method, r, null),
                Nt(t, e, "target", r.target, r, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          t.removeAttribute(n);
          break;
        }
        (i = ns("" + i)), t.setAttribute(n, i);
        break;
      case "onClick":
        i != null && (t.onclick = Ps);
        break;
      case "onScroll":
        i != null && gt("scroll", t);
        break;
      case "onScrollEnd":
        i != null && gt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(o(61));
          if (((n = i.__html), n != null)) {
            if (r.children != null) throw Error(o(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        t.muted = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "boolean" ||
          typeof i == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (n = ns("" + i)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        i != null && typeof i != "function" && typeof i != "symbol"
          ? t.setAttribute(n, "" + i)
          : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        i && typeof i != "function" && typeof i != "symbol"
          ? t.setAttribute(n, "")
          : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        i === !0
          ? t.setAttribute(n, "")
          : i !== !1 &&
            i != null &&
            typeof i != "function" &&
            typeof i != "symbol"
          ? t.setAttribute(n, i)
          : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        !isNaN(i) &&
        1 <= i
          ? t.setAttribute(n, i)
          : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i)
          ? t.removeAttribute(n)
          : t.setAttribute(n, i);
        break;
      case "popover":
        gt("beforetoggle", t), gt("toggle", t), Wl(t, "popover", i);
        break;
      case "xlinkActuate":
        Ie(t, "http://www.w3.org/1999/xlink", "xlink:actuate", i);
        break;
      case "xlinkArcrole":
        Ie(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", i);
        break;
      case "xlinkRole":
        Ie(t, "http://www.w3.org/1999/xlink", "xlink:role", i);
        break;
      case "xlinkShow":
        Ie(t, "http://www.w3.org/1999/xlink", "xlink:show", i);
        break;
      case "xlinkTitle":
        Ie(t, "http://www.w3.org/1999/xlink", "xlink:title", i);
        break;
      case "xlinkType":
        Ie(t, "http://www.w3.org/1999/xlink", "xlink:type", i);
        break;
      case "xmlBase":
        Ie(t, "http://www.w3.org/XML/1998/namespace", "xml:base", i);
        break;
      case "xmlLang":
        Ie(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", i);
        break;
      case "xmlSpace":
        Ie(t, "http://www.w3.org/XML/1998/namespace", "xml:space", i);
        break;
      case "is":
        Wl(t, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = vv.get(n) || n), Wl(t, n, i));
    }
  }
  function wu(t, e, n, i, r, u) {
    switch (n) {
      case "style":
        Zf(t, i, u);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(o(61));
          if (((n = i.__html), n != null)) {
            if (r.children != null) throw Error(o(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof i == "string"
          ? Ba(t, i)
          : (typeof i == "number" || typeof i == "bigint") && Ba(t, "" + i);
        break;
      case "onScroll":
        i != null && gt("scroll", t);
        break;
      case "onScrollEnd":
        i != null && gt("scrollend", t);
        break;
      case "onClick":
        i != null && (t.onclick = Ps);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!_f.hasOwnProperty(n))
          t: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((r = n.endsWith("Capture")),
              (e = n.slice(2, r ? n.length - 7 : void 0)),
              (u = t[fe] || null),
              (u = u != null ? u[n] : null),
              typeof u == "function" && t.removeEventListener(e, u, r),
              typeof i == "function")
            ) {
              typeof u != "function" &&
                u !== null &&
                (n in t
                  ? (t[n] = null)
                  : t.hasAttribute(n) && t.removeAttribute(n)),
                t.addEventListener(e, i, r);
              break t;
            }
            n in t
              ? (t[n] = i)
              : i === !0
              ? t.setAttribute(n, "")
              : Wl(t, n, i);
          }
    }
  }
  function ne(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        gt("error", t), gt("load", t);
        var i = !1,
          r = !1,
          u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var m = n[u];
            if (m != null)
              switch (u) {
                case "src":
                  i = !0;
                  break;
                case "srcSet":
                  r = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, e));
                default:
                  Nt(t, e, u, m, n, null);
              }
          }
        r && Nt(t, e, "srcSet", n.srcSet, n, null),
          i && Nt(t, e, "src", n.src, n, null);
        return;
      case "input":
        gt("invalid", t);
        var x = (u = m = r = null),
          T = null,
          M = null;
        for (i in n)
          if (n.hasOwnProperty(i)) {
            var O = n[i];
            if (O != null)
              switch (i) {
                case "name":
                  r = O;
                  break;
                case "type":
                  m = O;
                  break;
                case "checked":
                  T = O;
                  break;
                case "defaultChecked":
                  M = O;
                  break;
                case "value":
                  u = O;
                  break;
                case "defaultValue":
                  x = O;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (O != null) throw Error(o(137, e));
                  break;
                default:
                  Nt(t, e, i, O, n, null);
              }
          }
        qf(t, u, x, T, M, m, r, !1), ts(t);
        return;
      case "select":
        gt("invalid", t), (i = m = u = null);
        for (r in n)
          if (n.hasOwnProperty(r) && ((x = n[r]), x != null))
            switch (r) {
              case "value":
                u = x;
                break;
              case "defaultValue":
                m = x;
                break;
              case "multiple":
                i = x;
              default:
                Nt(t, e, r, x, n, null);
            }
        (e = u),
          (n = m),
          (t.multiple = !!i),
          e != null ? ka(t, !!i, e, !1) : n != null && ka(t, !!i, n, !0);
        return;
      case "textarea":
        gt("invalid", t), (u = r = i = null);
        for (m in n)
          if (n.hasOwnProperty(m) && ((x = n[m]), x != null))
            switch (m) {
              case "value":
                i = x;
                break;
              case "defaultValue":
                r = x;
                break;
              case "children":
                u = x;
                break;
              case "dangerouslySetInnerHTML":
                if (x != null) throw Error(o(91));
                break;
              default:
                Nt(t, e, m, x, n, null);
            }
        Yf(t, i, r, u), ts(t);
        return;
      case "option":
        for (T in n)
          if (n.hasOwnProperty(T) && ((i = n[T]), i != null))
            switch (T) {
              case "selected":
                t.selected =
                  i && typeof i != "function" && typeof i != "symbol";
                break;
              default:
                Nt(t, e, T, i, n, null);
            }
        return;
      case "dialog":
        gt("beforetoggle", t), gt("toggle", t), gt("cancel", t), gt("close", t);
        break;
      case "iframe":
      case "object":
        gt("load", t);
        break;
      case "video":
      case "audio":
        for (i = 0; i < yl.length; i++) gt(yl[i], t);
        break;
      case "image":
        gt("error", t), gt("load", t);
        break;
      case "details":
        gt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        gt("error", t), gt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (M in n)
          if (n.hasOwnProperty(M) && ((i = n[M]), i != null))
            switch (M) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, e));
              default:
                Nt(t, e, M, i, n, null);
            }
        return;
      default:
        if (qr(e)) {
          for (O in n)
            n.hasOwnProperty(O) &&
              ((i = n[O]), i !== void 0 && wu(t, e, O, i, n, void 0));
          return;
        }
    }
    for (x in n)
      n.hasOwnProperty(x) && ((i = n[x]), i != null && Nt(t, e, x, i, n, null));
  }
  function Yx(t, e, n, i) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var r = null,
          u = null,
          m = null,
          x = null,
          T = null,
          M = null,
          O = null;
        for (R in n) {
          var V = n[R];
          if (n.hasOwnProperty(R) && V != null)
            switch (R) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = V;
              default:
                i.hasOwnProperty(R) || Nt(t, e, R, null, i, V);
            }
        }
        for (var D in i) {
          var R = i[D];
          if (((V = n[D]), i.hasOwnProperty(D) && (R != null || V != null)))
            switch (D) {
              case "type":
                u = R;
                break;
              case "name":
                r = R;
                break;
              case "checked":
                M = R;
                break;
              case "defaultChecked":
                O = R;
                break;
              case "value":
                m = R;
                break;
              case "defaultValue":
                x = R;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (R != null) throw Error(o(137, e));
                break;
              default:
                R !== V && Nt(t, e, D, R, i, V);
            }
        }
        Lr(t, m, x, T, M, O, u, r);
        return;
      case "select":
        R = m = x = D = null;
        for (u in n)
          if (((T = n[u]), n.hasOwnProperty(u) && T != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                R = T;
              default:
                i.hasOwnProperty(u) || Nt(t, e, u, null, i, T);
            }
        for (r in i)
          if (
            ((u = i[r]),
            (T = n[r]),
            i.hasOwnProperty(r) && (u != null || T != null))
          )
            switch (r) {
              case "value":
                D = u;
                break;
              case "defaultValue":
                x = u;
                break;
              case "multiple":
                m = u;
              default:
                u !== T && Nt(t, e, r, u, i, T);
            }
        (e = x),
          (n = m),
          (i = R),
          D != null
            ? ka(t, !!n, D, !1)
            : !!i != !!n &&
              (e != null ? ka(t, !!n, e, !0) : ka(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        R = D = null;
        for (x in n)
          if (
            ((r = n[x]),
            n.hasOwnProperty(x) && r != null && !i.hasOwnProperty(x))
          )
            switch (x) {
              case "value":
                break;
              case "children":
                break;
              default:
                Nt(t, e, x, null, i, r);
            }
        for (m in i)
          if (
            ((r = i[m]),
            (u = n[m]),
            i.hasOwnProperty(m) && (r != null || u != null))
          )
            switch (m) {
              case "value":
                D = r;
                break;
              case "defaultValue":
                R = r;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(o(91));
                break;
              default:
                r !== u && Nt(t, e, m, r, i, u);
            }
        Gf(t, D, R);
        return;
      case "option":
        for (var lt in n)
          if (
            ((D = n[lt]),
            n.hasOwnProperty(lt) && D != null && !i.hasOwnProperty(lt))
          )
            switch (lt) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Nt(t, e, lt, null, i, D);
            }
        for (T in i)
          if (
            ((D = i[T]),
            (R = n[T]),
            i.hasOwnProperty(T) && D !== R && (D != null || R != null))
          )
            switch (T) {
              case "selected":
                t.selected =
                  D && typeof D != "function" && typeof D != "symbol";
                break;
              default:
                Nt(t, e, T, D, i, R);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var at in n)
          (D = n[at]),
            n.hasOwnProperty(at) &&
              D != null &&
              !i.hasOwnProperty(at) &&
              Nt(t, e, at, null, i, D);
        for (M in i)
          if (
            ((D = i[M]),
            (R = n[M]),
            i.hasOwnProperty(M) && D !== R && (D != null || R != null))
          )
            switch (M) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (D != null) throw Error(o(137, e));
                break;
              default:
                Nt(t, e, M, D, i, R);
            }
        return;
      default:
        if (qr(e)) {
          for (var wt in n)
            (D = n[wt]),
              n.hasOwnProperty(wt) &&
                D !== void 0 &&
                !i.hasOwnProperty(wt) &&
                wu(t, e, wt, void 0, i, D);
          for (O in i)
            (D = i[O]),
              (R = n[O]),
              !i.hasOwnProperty(O) ||
                D === R ||
                (D === void 0 && R === void 0) ||
                wu(t, e, O, D, i, R);
          return;
        }
    }
    for (var N in n)
      (D = n[N]),
        n.hasOwnProperty(N) &&
          D != null &&
          !i.hasOwnProperty(N) &&
          Nt(t, e, N, null, i, D);
    for (V in i)
      (D = i[V]),
        (R = n[V]),
        !i.hasOwnProperty(V) ||
          D === R ||
          (D == null && R == null) ||
          Nt(t, e, V, D, i, R);
  }
  var Mu = null,
    Eu = null;
  function Js(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Xm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Zm(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Du(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Ru = null;
  function Xx() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === Ru
        ? !1
        : ((Ru = t), !0)
      : ((Ru = null), !1);
  }
  var Km = typeof setTimeout == "function" ? setTimeout : void 0,
    Zx = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Qm = typeof Promise == "function" ? Promise : void 0,
    Kx =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Qm < "u"
        ? function (t) {
            return Qm.resolve(null).then(t).catch(Qx);
          }
        : Km;
  function Qx(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Xn(t) {
    return t === "head";
  }
  function Pm(t, e) {
    var n = e,
      i = 0,
      r = 0;
    do {
      var u = n.nextSibling;
      if ((t.removeChild(n), u && u.nodeType === 8))
        if (((n = u.data), n === "/$")) {
          if (0 < i && 8 > i) {
            n = i;
            var m = t.ownerDocument;
            if ((n & 1 && xl(m.documentElement), n & 2 && xl(m.body), n & 4))
              for (n = m.head, xl(n), m = n.firstChild; m; ) {
                var x = m.nextSibling,
                  T = m.nodeName;
                m[_i] ||
                  T === "SCRIPT" ||
                  T === "STYLE" ||
                  (T === "LINK" && m.rel.toLowerCase() === "stylesheet") ||
                  n.removeChild(m),
                  (m = x);
              }
          }
          if (r === 0) {
            t.removeChild(u), Ml(e);
            return;
          }
          r--;
        } else
          n === "$" || n === "$?" || n === "$!"
            ? r++
            : (i = n.charCodeAt(0) - 48);
      else i = 0;
      n = u;
    } while (n);
    Ml(e);
  }
  function Cu(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Cu(n), Vr(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function Px(t, e, n, i) {
    for (; t.nodeType === 1; ) {
      var r = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!i && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (i) {
        if (!t[_i])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((u = t.getAttribute("rel")),
                u === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== r.rel ||
                t.getAttribute("href") !==
                  (r.href == null || r.href === "" ? null : r.href) ||
                t.getAttribute("crossorigin") !==
                  (r.crossOrigin == null ? null : r.crossOrigin) ||
                t.getAttribute("title") !== (r.title == null ? null : r.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((u = t.getAttribute("src")),
                (u !== (r.src == null ? null : r.src) ||
                  t.getAttribute("type") !== (r.type == null ? null : r.type) ||
                  t.getAttribute("crossorigin") !==
                    (r.crossOrigin == null ? null : r.crossOrigin)) &&
                  u &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var u = r.name == null ? null : "" + r.name;
        if (r.type === "hidden" && t.getAttribute("name") === u) return t;
      } else return t;
      if (((t = Ge(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Jx(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !n) ||
        ((t = Ge(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function zu(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState === "complete")
    );
  }
  function Fx(t, e) {
    var n = t.ownerDocument;
    if (t.data !== "$?" || n.readyState === "complete") e();
    else {
      var i = function () {
        e(), n.removeEventListener("DOMContentLoaded", i);
      };
      n.addEventListener("DOMContentLoaded", i), (t._reactRetry = i);
    }
  }
  function Ge(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
        )
          break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  var Ou = null;
  function Jm(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (e === 0) return t;
          e--;
        } else n === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Fm(t, e, n) {
    switch (((e = Js(n)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(o(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(o(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(o(454));
        return t;
      default:
        throw Error(o(451));
    }
  }
  function xl(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Vr(t);
  }
  var Ue = new Map(),
    $m = new Set();
  function Fs(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
      ? t
      : t.ownerDocument;
  }
  var mn = H.d;
  H.d = { f: $x, r: Wx, D: Ix, C: t1, L: e1, m: n1, X: i1, S: a1, M: l1 };
  function $x() {
    var t = mn.f(),
      e = qs();
    return t || e;
  }
  function Wx(t) {
    var e = Oa(t);
    e !== null && e.tag === 5 && e.type === "form" ? yh(e) : mn.r(t);
  }
  var hi = typeof document > "u" ? null : document;
  function Wm(t, e, n) {
    var i = hi;
    if (i && typeof e == "string" && e) {
      var r = De(e);
      (r = 'link[rel="' + t + '"][href="' + r + '"]'),
        typeof n == "string" && (r += '[crossorigin="' + n + '"]'),
        $m.has(r) ||
          ($m.add(r),
          (t = { rel: t, crossOrigin: n, href: e }),
          i.querySelector(r) === null &&
            ((e = i.createElement("link")),
            ne(e, "link", t),
            Ft(e),
            i.head.appendChild(e)));
    }
  }
  function Ix(t) {
    mn.D(t), Wm("dns-prefetch", t, null);
  }
  function t1(t, e) {
    mn.C(t, e), Wm("preconnect", t, e);
  }
  function e1(t, e, n) {
    mn.L(t, e, n);
    var i = hi;
    if (i && t && e) {
      var r = 'link[rel="preload"][as="' + De(e) + '"]';
      e === "image" && n && n.imageSrcSet
        ? ((r += '[imagesrcset="' + De(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (r += '[imagesizes="' + De(n.imageSizes) + '"]'))
        : (r += '[href="' + De(t) + '"]');
      var u = r;
      switch (e) {
        case "style":
          u = mi(t);
          break;
        case "script":
          u = pi(t);
      }
      Ue.has(u) ||
        ((t = v(
          {
            rel: "preload",
            href: e === "image" && n && n.imageSrcSet ? void 0 : t,
            as: e,
          },
          n
        )),
        Ue.set(u, t),
        i.querySelector(r) !== null ||
          (e === "style" && i.querySelector(bl(u))) ||
          (e === "script" && i.querySelector(Sl(u))) ||
          ((e = i.createElement("link")),
          ne(e, "link", t),
          Ft(e),
          i.head.appendChild(e)));
    }
  }
  function n1(t, e) {
    mn.m(t, e);
    var n = hi;
    if (n && t) {
      var i = e && typeof e.as == "string" ? e.as : "script",
        r =
          'link[rel="modulepreload"][as="' + De(i) + '"][href="' + De(t) + '"]',
        u = r;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = pi(t);
      }
      if (
        !Ue.has(u) &&
        ((t = v({ rel: "modulepreload", href: t }, e)),
        Ue.set(u, t),
        n.querySelector(r) === null)
      ) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Sl(u))) return;
        }
        (i = n.createElement("link")),
          ne(i, "link", t),
          Ft(i),
          n.head.appendChild(i);
      }
    }
  }
  function a1(t, e, n) {
    mn.S(t, e, n);
    var i = hi;
    if (i && t) {
      var r = _a(i).hoistableStyles,
        u = mi(t);
      e = e || "default";
      var m = r.get(u);
      if (!m) {
        var x = { loading: 0, preload: null };
        if ((m = i.querySelector(bl(u)))) x.loading = 5;
        else {
          (t = v({ rel: "stylesheet", href: t, "data-precedence": e }, n)),
            (n = Ue.get(u)) && _u(t, n);
          var T = (m = i.createElement("link"));
          Ft(T),
            ne(T, "link", t),
            (T._p = new Promise(function (M, O) {
              (T.onload = M), (T.onerror = O);
            })),
            T.addEventListener("load", function () {
              x.loading |= 1;
            }),
            T.addEventListener("error", function () {
              x.loading |= 2;
            }),
            (x.loading |= 4),
            $s(m, e, i);
        }
        (m = { type: "stylesheet", instance: m, count: 1, state: x }),
          r.set(u, m);
      }
    }
  }
  function i1(t, e) {
    mn.X(t, e);
    var n = hi;
    if (n && t) {
      var i = _a(n).hoistableScripts,
        r = pi(t),
        u = i.get(r);
      u ||
        ((u = n.querySelector(Sl(r))),
        u ||
          ((t = v({ src: t, async: !0 }, e)),
          (e = Ue.get(r)) && Vu(t, e),
          (u = n.createElement("script")),
          Ft(u),
          ne(u, "link", t),
          n.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        i.set(r, u));
    }
  }
  function l1(t, e) {
    mn.M(t, e);
    var n = hi;
    if (n && t) {
      var i = _a(n).hoistableScripts,
        r = pi(t),
        u = i.get(r);
      u ||
        ((u = n.querySelector(Sl(r))),
        u ||
          ((t = v({ src: t, async: !0, type: "module" }, e)),
          (e = Ue.get(r)) && Vu(t, e),
          (u = n.createElement("script")),
          Ft(u),
          ne(u, "link", t),
          n.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        i.set(r, u));
    }
  }
  function Im(t, e, n, i) {
    var r = (r = rt.current) ? Fs(r) : null;
    if (!r) throw Error(o(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((e = mi(n.href)),
            (n = _a(r).hoistableStyles),
            (i = n.get(e)),
            i ||
              ((i = { type: "style", instance: null, count: 0, state: null }),
              n.set(e, i)),
            i)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          t = mi(n.href);
          var u = _a(r).hoistableStyles,
            m = u.get(t);
          if (
            (m ||
              ((r = r.ownerDocument || r),
              (m = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(t, m),
              (u = r.querySelector(bl(t))) &&
                !u._p &&
                ((m.instance = u), (m.state.loading = 5)),
              Ue.has(t) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                Ue.set(t, n),
                u || s1(r, t, n, m.state))),
            e && i === null)
          )
            throw Error(o(528, ""));
          return m;
        }
        if (e && i !== null) throw Error(o(529, ""));
        return null;
      case "script":
        return (
          (e = n.async),
          (n = n.src),
          typeof n == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = pi(n)),
              (n = _a(r).hoistableScripts),
              (i = n.get(e)),
              i ||
                ((i = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(e, i)),
              i)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(o(444, t));
    }
  }
  function mi(t) {
    return 'href="' + De(t) + '"';
  }
  function bl(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function tp(t) {
    return v({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function s1(t, e, n, i) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (i.loading = 1)
      : ((e = t.createElement("link")),
        (i.preload = e),
        e.addEventListener("load", function () {
          return (i.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (i.loading |= 2);
        }),
        ne(e, "link", n),
        Ft(e),
        t.head.appendChild(e));
  }
  function pi(t) {
    return '[src="' + De(t) + '"]';
  }
  function Sl(t) {
    return "script[async]" + t;
  }
  function ep(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var i = t.querySelector('style[data-href~="' + De(n.href) + '"]');
          if (i) return (e.instance = i), Ft(i), i;
          var r = v({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (i = (t.ownerDocument || t).createElement("style")),
            Ft(i),
            ne(i, "style", r),
            $s(i, n.precedence, t),
            (e.instance = i)
          );
        case "stylesheet":
          r = mi(n.href);
          var u = t.querySelector(bl(r));
          if (u) return (e.state.loading |= 4), (e.instance = u), Ft(u), u;
          (i = tp(n)),
            (r = Ue.get(r)) && _u(i, r),
            (u = (t.ownerDocument || t).createElement("link")),
            Ft(u);
          var m = u;
          return (
            (m._p = new Promise(function (x, T) {
              (m.onload = x), (m.onerror = T);
            })),
            ne(u, "link", i),
            (e.state.loading |= 4),
            $s(u, n.precedence, t),
            (e.instance = u)
          );
        case "script":
          return (
            (u = pi(n.src)),
            (r = t.querySelector(Sl(u)))
              ? ((e.instance = r), Ft(r), r)
              : ((i = n),
                (r = Ue.get(u)) && ((i = v({}, n)), Vu(i, r)),
                (t = t.ownerDocument || t),
                (r = t.createElement("script")),
                Ft(r),
                ne(r, "link", i),
                t.head.appendChild(r),
                (e.instance = r))
          );
        case "void":
          return null;
        default:
          throw Error(o(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((i = e.instance), (e.state.loading |= 4), $s(i, n.precedence, t));
    return e.instance;
  }
  function $s(t, e, n) {
    for (
      var i = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        r = i.length ? i[i.length - 1] : null,
        u = r,
        m = 0;
      m < i.length;
      m++
    ) {
      var x = i[m];
      if (x.dataset.precedence === e) u = x;
      else if (u !== r) break;
    }
    u
      ? u.parentNode.insertBefore(t, u.nextSibling)
      : ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
  }
  function _u(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function Vu(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var Ws = null;
  function np(t, e, n) {
    if (Ws === null) {
      var i = new Map(),
        r = (Ws = new Map());
      r.set(n, i);
    } else (r = Ws), (i = r.get(n)), i || ((i = new Map()), r.set(n, i));
    if (i.has(t)) return i;
    for (
      i.set(t, null), n = n.getElementsByTagName(t), r = 0;
      r < n.length;
      r++
    ) {
      var u = n[r];
      if (
        !(
          u[_i] ||
          u[ie] ||
          (t === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var m = u.getAttribute(e) || "";
        m = t + m;
        var x = i.get(m);
        x ? x.push(u) : i.set(m, [u]);
      }
    }
    return i;
  }
  function ap(t, e, n) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        n,
        e === "title" ? t.querySelector("head > title") : null
      );
  }
  function r1(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled), typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function ip(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var Tl = null;
  function o1() {}
  function u1(t, e, n) {
    if (Tl === null) throw Error(o(475));
    var i = Tl;
    if (
      e.type === "stylesheet" &&
      (typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var r = mi(n.href),
          u = t.querySelector(bl(r));
        if (u) {
          (t = u._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (i.count++, (i = Is.bind(i)), t.then(i, i)),
            (e.state.loading |= 4),
            (e.instance = u),
            Ft(u);
          return;
        }
        (u = t.ownerDocument || t),
          (n = tp(n)),
          (r = Ue.get(r)) && _u(n, r),
          (u = u.createElement("link")),
          Ft(u);
        var m = u;
        (m._p = new Promise(function (x, T) {
          (m.onload = x), (m.onerror = T);
        })),
          ne(u, "link", n),
          (e.instance = u);
      }
      i.stylesheets === null && (i.stylesheets = new Map()),
        i.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (i.count++,
          (e = Is.bind(i)),
          t.addEventListener("load", e),
          t.addEventListener("error", e));
    }
  }
  function c1() {
    if (Tl === null) throw Error(o(475));
    var t = Tl;
    return (
      t.stylesheets && t.count === 0 && Uu(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var n = setTimeout(function () {
              if ((t.stylesheets && Uu(t, t.stylesheets), t.unsuspend)) {
                var i = t.unsuspend;
                (t.unsuspend = null), i();
              }
            }, 6e4);
            return (
              (t.unsuspend = e),
              function () {
                (t.unsuspend = null), clearTimeout(n);
              }
            );
          }
        : null
    );
  }
  function Is() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Uu(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var tr = null;
  function Uu(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (tr = new Map()),
        e.forEach(f1, t),
        (tr = null),
        Is.call(t));
  }
  function f1(t, e) {
    if (!(e.state.loading & 4)) {
      var n = tr.get(t);
      if (n) var i = n.get(null);
      else {
        (n = new Map()), tr.set(t, n);
        for (
          var r = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            u = 0;
          u < r.length;
          u++
        ) {
          var m = r[u];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") &&
            (n.set(m.dataset.precedence, m), (i = m));
        }
        i && n.set(null, i);
      }
      (r = e.instance),
        (m = r.getAttribute("data-precedence")),
        (u = n.get(m) || i),
        u === i && n.set(null, r),
        n.set(m, r),
        this.count++,
        (i = Is.bind(this)),
        r.addEventListener("load", i),
        r.addEventListener("error", i),
        u
          ? u.parentNode.insertBefore(r, u.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(r, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var jl = {
    $$typeof: Q,
    Provider: null,
    Consumer: null,
    _currentValue: k,
    _currentValue2: k,
    _threadCount: 0,
  };
  function d1(t, e, n, i, r, u, m, x) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Cr(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Cr(0)),
      (this.hiddenUpdates = Cr(null)),
      (this.identifierPrefix = i),
      (this.onUncaughtError = r),
      (this.onCaughtError = u),
      (this.onRecoverableError = m),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = x),
      (this.incompleteTransitions = new Map());
  }
  function lp(t, e, n, i, r, u, m, x, T, M, O, V) {
    return (
      (t = new d1(t, e, n, m, x, T, M, V)),
      (e = 1),
      u === !0 && (e |= 24),
      (u = Se(3, null, null, e)),
      (t.current = u),
      (u.stateNode = t),
      (e = yo()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (u.memoizedState = { element: i, isDehydrated: n, cache: e }),
      So(u),
      t
    );
  }
  function sp(t) {
    return t ? ((t = Ka), t) : Ka;
  }
  function rp(t, e, n, i, r, u) {
    (r = sp(r)),
      i.context === null ? (i.context = r) : (i.pendingContext = r),
      (i = Cn(e)),
      (i.payload = { element: n }),
      (u = u === void 0 ? null : u),
      u !== null && (i.callback = u),
      (n = zn(t, i, e)),
      n !== null && (we(n, t, e), Ii(n, t, e));
  }
  function op(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function ku(t, e) {
    op(t, e), (t = t.alternate) && op(t, e);
  }
  function up(t) {
    if (t.tag === 13) {
      var e = Za(t, 67108864);
      e !== null && we(e, t, 67108864), ku(t, 67108864);
    }
  }
  var er = !0;
  function h1(t, e, n, i) {
    var r = C.T;
    C.T = null;
    var u = H.p;
    try {
      (H.p = 2), Bu(t, e, n, i);
    } finally {
      (H.p = u), (C.T = r);
    }
  }
  function m1(t, e, n, i) {
    var r = C.T;
    C.T = null;
    var u = H.p;
    try {
      (H.p = 8), Bu(t, e, n, i);
    } finally {
      (H.p = u), (C.T = r);
    }
  }
  function Bu(t, e, n, i) {
    if (er) {
      var r = Lu(i);
      if (r === null) Nu(t, e, i, nr, n), fp(t, i);
      else if (g1(r, t, e, n, i)) i.stopPropagation();
      else if ((fp(t, i), e & 4 && -1 < p1.indexOf(t))) {
        for (; r !== null; ) {
          var u = Oa(r);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var m = la(u.pendingLanes);
                  if (m !== 0) {
                    var x = u;
                    for (x.pendingLanes |= 2, x.entangledLanes |= 2; m; ) {
                      var T = 1 << (31 - xe(m));
                      (x.entanglements[1] |= T), (m &= ~T);
                    }
                    Je(u), (Tt & 6) === 0 && ((Ls = Xe() + 500), gl(0));
                  }
                }
                break;
              case 13:
                (x = Za(u, 2)), x !== null && we(x, u, 2), qs(), ku(u, 2);
            }
          if (((u = Lu(i)), u === null && Nu(t, e, i, nr, n), u === r)) break;
          r = u;
        }
        r !== null && i.stopPropagation();
      } else Nu(t, e, i, null, n);
    }
  }
  function Lu(t) {
    return (t = Yr(t)), Hu(t);
  }
  var nr = null;
  function Hu(t) {
    if (((nr = null), (t = za(t)), t !== null)) {
      var e = h(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (((t = f(e)), t !== null)) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (nr = t), null;
  }
  function cp(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (tv()) {
          case Af:
            return 2;
          case Nf:
            return 8;
          case Pl:
          case ev:
            return 32;
          case wf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var qu = !1,
    Zn = null,
    Kn = null,
    Qn = null,
    Al = new Map(),
    Nl = new Map(),
    Pn = [],
    p1 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function fp(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Zn = null;
        break;
      case "dragenter":
      case "dragleave":
        Kn = null;
        break;
      case "mouseover":
      case "mouseout":
        Qn = null;
        break;
      case "pointerover":
      case "pointerout":
        Al.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Nl.delete(e.pointerId);
    }
  }
  function wl(t, e, n, i, r, u) {
    return t === null || t.nativeEvent !== u
      ? ((t = {
          blockedOn: e,
          domEventName: n,
          eventSystemFlags: i,
          nativeEvent: u,
          targetContainers: [r],
        }),
        e !== null && ((e = Oa(e)), e !== null && up(e)),
        t)
      : ((t.eventSystemFlags |= i),
        (e = t.targetContainers),
        r !== null && e.indexOf(r) === -1 && e.push(r),
        t);
  }
  function g1(t, e, n, i, r) {
    switch (e) {
      case "focusin":
        return (Zn = wl(Zn, t, e, n, i, r)), !0;
      case "dragenter":
        return (Kn = wl(Kn, t, e, n, i, r)), !0;
      case "mouseover":
        return (Qn = wl(Qn, t, e, n, i, r)), !0;
      case "pointerover":
        var u = r.pointerId;
        return Al.set(u, wl(Al.get(u) || null, t, e, n, i, r)), !0;
      case "gotpointercapture":
        return (
          (u = r.pointerId), Nl.set(u, wl(Nl.get(u) || null, t, e, n, i, r)), !0
        );
    }
    return !1;
  }
  function dp(t) {
    var e = za(t.target);
    if (e !== null) {
      var n = h(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = f(n)), e !== null)) {
            (t.blockedOn = e),
              uv(t.priority, function () {
                if (n.tag === 13) {
                  var i = Ne();
                  i = zr(i);
                  var r = Za(n, i);
                  r !== null && we(r, n, i), ku(n, i);
                }
              });
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function ar(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = Lu(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var i = new n.constructor(n.type, n);
        (Gr = i), n.target.dispatchEvent(i), (Gr = null);
      } else return (e = Oa(n)), e !== null && up(e), (t.blockedOn = n), !1;
      e.shift();
    }
    return !0;
  }
  function hp(t, e, n) {
    ar(t) && n.delete(e);
  }
  function y1() {
    (qu = !1),
      Zn !== null && ar(Zn) && (Zn = null),
      Kn !== null && ar(Kn) && (Kn = null),
      Qn !== null && ar(Qn) && (Qn = null),
      Al.forEach(hp),
      Nl.forEach(hp);
  }
  function ir(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      qu ||
        ((qu = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, y1)));
  }
  var lr = null;
  function mp(t) {
    lr !== t &&
      ((lr = t),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        lr === t && (lr = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            i = t[e + 1],
            r = t[e + 2];
          if (typeof i != "function") {
            if (Hu(i || n) === null) continue;
            break;
          }
          var u = Oa(n);
          u !== null &&
            (t.splice(e, 3),
            (e -= 3),
            Ho(u, { pending: !0, data: r, method: n.method, action: i }, i, r));
        }
      }));
  }
  function Ml(t) {
    function e(T) {
      return ir(T, t);
    }
    Zn !== null && ir(Zn, t),
      Kn !== null && ir(Kn, t),
      Qn !== null && ir(Qn, t),
      Al.forEach(e),
      Nl.forEach(e);
    for (var n = 0; n < Pn.length; n++) {
      var i = Pn[n];
      i.blockedOn === t && (i.blockedOn = null);
    }
    for (; 0 < Pn.length && ((n = Pn[0]), n.blockedOn === null); )
      dp(n), n.blockedOn === null && Pn.shift();
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (i = 0; i < n.length; i += 3) {
        var r = n[i],
          u = n[i + 1],
          m = r[fe] || null;
        if (typeof u == "function") m || mp(n);
        else if (m) {
          var x = null;
          if (u && u.hasAttribute("formAction")) {
            if (((r = u), (m = u[fe] || null))) x = m.formAction;
            else if (Hu(r) !== null) continue;
          } else x = m.action;
          typeof x == "function" ? (n[i + 1] = x) : (n.splice(i, 3), (i -= 3)),
            mp(n);
        }
      }
  }
  function Gu(t) {
    this._internalRoot = t;
  }
  (sr.prototype.render = Gu.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(o(409));
      var n = e.current,
        i = Ne();
      rp(n, i, t, e, null, null);
    }),
    (sr.prototype.unmount = Gu.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          rp(t.current, 2, null, t, null, null), qs(), (e[Ca] = null);
        }
      });
  function sr(t) {
    this._internalRoot = t;
  }
  sr.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Cf();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Pn.length && e !== 0 && e < Pn[n].priority; n++);
      Pn.splice(n, 0, t), n === 0 && dp(t);
    }
  };
  var pp = l.version;
  if (pp !== "19.1.1") throw Error(o(527, pp, "19.1.1"));
  H.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(o(188))
        : ((t = Object.keys(t).join(",")), Error(o(268, t)));
    return (
      (t = y(e)),
      (t = t !== null ? g(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var v1 = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: C,
    reconcilerVersion: "19.1.1",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var rr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!rr.isDisabled && rr.supportsFiber)
      try {
        (Ci = rr.inject(v1)), (ve = rr);
      } catch {}
  }
  return (
    (Dl.createRoot = function (t, e) {
      if (!c(t)) throw Error(o(299));
      var n = !1,
        i = "",
        r = Ch,
        u = zh,
        m = Oh,
        x = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (i = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (r = e.onUncaughtError),
          e.onCaughtError !== void 0 && (u = e.onCaughtError),
          e.onRecoverableError !== void 0 && (m = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (x = e.unstable_transitionCallbacks)),
        (e = lp(t, 1, !1, null, null, n, i, r, u, m, x, null)),
        (t[Ca] = e.current),
        Au(t),
        new Gu(e)
      );
    }),
    (Dl.hydrateRoot = function (t, e, n) {
      if (!c(t)) throw Error(o(299));
      var i = !1,
        r = "",
        u = Ch,
        m = zh,
        x = Oh,
        T = null,
        M = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (i = !0),
          n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (u = n.onUncaughtError),
          n.onCaughtError !== void 0 && (m = n.onCaughtError),
          n.onRecoverableError !== void 0 && (x = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (T = n.unstable_transitionCallbacks),
          n.formState !== void 0 && (M = n.formState)),
        (e = lp(t, 1, !0, e, n ?? null, i, r, u, m, x, T, M)),
        (e.context = sp(null)),
        (n = e.current),
        (i = Ne()),
        (i = zr(i)),
        (r = Cn(i)),
        (r.callback = null),
        zn(n, r, i),
        (n = i),
        (e.current.lanes = n),
        Oi(e, n),
        Je(e),
        (t[Ca] = e.current),
        Au(t),
        new sr(e)
      );
    }),
    (Dl.version = "19.1.1"),
    Dl
  );
}
var Np;
function E1() {
  if (Np) return Zu.exports;
  Np = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (l) {
        console.error(l);
      }
  }
  return a(), (Zu.exports = M1()), Zu.exports;
}
var D1 = E1();
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const R1 = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  C1 = (a) =>
    a.replace(/^([A-Z])|[\s-_]+(\w)/g, (l, s, o) =>
      o ? o.toUpperCase() : s.toLowerCase()
    ),
  wp = (a) => {
    const l = C1(a);
    return l.charAt(0).toUpperCase() + l.slice(1);
  },
  W0 = (...a) =>
    a
      .filter((l, s, o) => !!l && l.trim() !== "" && o.indexOf(l) === s)
      .join(" ")
      .trim(),
  z1 = (a) => {
    for (const l in a)
      if (l.startsWith("aria-") || l === "role" || l === "title") return !0;
  };
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var O1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _1 = Y.forwardRef(
  (
    {
      color: a = "currentColor",
      size: l = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: o,
      className: c = "",
      children: h,
      iconNode: f,
      ...p
    },
    y
  ) =>
    Y.createElement(
      "svg",
      {
        ref: y,
        ...O1,
        width: l,
        height: l,
        stroke: a,
        strokeWidth: o ? (Number(s) * 24) / Number(l) : s,
        className: W0("lucide", c),
        ...(!h && !z1(p) && { "aria-hidden": "true" }),
        ...p,
      },
      [
        ...f.map(([g, v]) => Y.createElement(g, v)),
        ...(Array.isArray(h) ? h : [h]),
      ]
    )
);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yt = (a, l) => {
  const s = Y.forwardRef(({ className: o, ...c }, h) =>
    Y.createElement(_1, {
      ref: h,
      iconNode: l,
      className: W0(`lucide-${R1(wp(a))}`, `lucide-${a}`, o),
      ...c,
    })
  );
  return (s.displayName = wp(a)), s;
};
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const V1 = [
    ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
    ["path", { d: "M19 12H5", key: "x3x0zl" }],
  ],
  I0 = yt("arrow-left", V1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const U1 = [
    [
      "path",
      {
        d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
        key: "1yiouv",
      },
    ],
    ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
  ],
  k1 = yt("award", U1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const B1 = [
    ["path", { d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5", key: "1u7htd" }],
    ["path", { d: "M15 12h.01", key: "1k8ypt" }],
    [
      "path",
      {
        d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",
        key: "11xh7x",
      },
    ],
    ["path", { d: "M9 12h.01", key: "157uk2" }],
  ],
  L1 = yt("baby", B1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const H1 = [
    ["path", { d: "M12 7v14", key: "1akyts" }],
    [
      "path",
      {
        d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
        key: "ruj8y",
      },
    ],
  ],
  mc = yt("book-open", H1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const q1 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]],
  G1 = yt("chevron-down", q1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Y1 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]],
  X1 = yt("chevron-up", Y1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Z1 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
  ],
  K1 = yt("circle-alert", Z1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Q1 = [
    ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
    ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ],
  P1 = yt("circle-check-big", Q1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const J1 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }],
  ],
  F1 = yt("circle-help", J1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $1 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
  ],
  Hc = yt("clock", $1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const W1 = [
    [
      "rect",
      { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" },
    ],
    ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }],
  ],
  Ju = yt("credit-card", W1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const I1 = [
    ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
    [
      "path",
      { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" },
    ],
  ],
  tb = yt("dollar-sign", I1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eb = [
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
    ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
  ],
  Mp = yt("download", eb);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nb = [
    [
      "path",
      {
        d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
        key: "1jg4f8",
      },
    ],
  ],
  tg = yt("facebook", nb);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ab = [
    [
      "path",
      {
        d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
        key: "1rqfz7",
      },
    ],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
    ["path", { d: "M10 9H8", key: "b1mrlr" }],
    ["path", { d: "M16 13H8", key: "t4e002" }],
    ["path", { d: "M16 17H8", key: "z1uh3a" }],
  ],
  Ep = yt("file-text", ab);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ib = [
    [
      "path",
      {
        d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
        key: "j76jl0",
      },
    ],
    ["path", { d: "M22 10v6", key: "1lu8f3" }],
    ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }],
  ],
  Dp = yt("graduation-cap", ib);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lb = [
    [
      "rect",
      { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
    ],
    ["path", { d: "M3 9h18", key: "1pudct" }],
    ["path", { d: "M3 15h18", key: "5xshup" }],
    ["path", { d: "M9 3v18", key: "fh3hqa" }],
    ["path", { d: "M15 3v18", key: "14nvp0" }],
  ],
  Fn = yt("grid-3x3", lb);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sb = [
    [
      "path",
      {
        d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
        key: "c3ymky",
      },
    ],
  ],
  ta = yt("heart", sb);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rb = [
    [
      "rect",
      {
        width: "20",
        height: "20",
        x: "2",
        y: "2",
        rx: "5",
        ry: "5",
        key: "2e1cvw",
      },
    ],
    [
      "path",
      { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
    ],
    ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
  ],
  eg = yt("instagram", rb);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ob = [
    [
      "path",
      {
        d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
        key: "1gvzjb",
      },
    ],
    ["path", { d: "M9 18h6", key: "x1upvd" }],
    ["path", { d: "M10 22h4", key: "ceow96" }],
  ],
  ub = yt("lightbulb", ob);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cb = [
    ["path", { d: "M3 12h.01", key: "nlz23k" }],
    ["path", { d: "M3 18h.01", key: "1tta3j" }],
    ["path", { d: "M3 6h.01", key: "1rqtza" }],
    ["path", { d: "M8 12h13", key: "1za7za" }],
    ["path", { d: "M8 18h13", key: "1lx6n3" }],
    ["path", { d: "M8 6h13", key: "ik3vkj" }],
  ],
  fb = yt("list", cb);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const db = [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
    [
      "rect",
      { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
    ],
  ],
  vr = yt("mail", db);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hb = [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z",
      },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ],
  xr = yt("map-pin", hb);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mb = [
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 18h16", key: "19g7jn" }],
    ["path", { d: "M4 6h16", key: "1o0s65" }],
  ],
  pb = yt("menu", mb);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gb = [
    [
      "path",
      {
        d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
        key: "1lielz",
      },
    ],
  ],
  yb = yt("message-square", gb);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vb = [
    ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
    ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
    ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }],
  ],
  xb = yt("music", vb);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bb = [
    [
      "path",
      {
        d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
        key: "e79jfc",
      },
    ],
    [
      "circle",
      { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" },
    ],
    [
      "circle",
      { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" },
    ],
    [
      "circle",
      { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" },
    ],
    [
      "circle",
      { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" },
    ],
  ],
  Sb = yt("palette", bb);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tb = [
    [
      "path",
      {
        d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
        key: "9njp5v",
      },
    ],
  ],
  ea = yt("phone", Tb);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jb = [
    [
      "path",
      {
        d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
        key: "1ffxy3",
      },
    ],
    ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
  ],
  Ab = yt("send", jb);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nb = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
  ],
  Rp = yt("shield", Nb);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wb = [
    [
      "path",
      {
        d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
        key: "4pj2yx",
      },
    ],
    ["path", { d: "M20 3v4", key: "1olli1" }],
    ["path", { d: "M22 5h-4", key: "1gvqau" }],
    ["path", { d: "M4 17v2", key: "vumght" }],
    ["path", { d: "M5 18H3", key: "zchphs" }],
  ],
  Cp = yt("sparkles", wb);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mb = [
    [
      "path",
      {
        d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
        key: "r04s7s",
      },
    ],
  ],
  Ra = yt("star", Mb);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Eb = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
    ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ],
  Db = yt("target", Eb);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rb = [
    [
      "path",
      {
        d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
        key: "pff0z6",
      },
    ],
  ],
  ng = yt("twitter", Rb);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cb = [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
    ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
  ],
  ag = yt("user", Cb);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zb = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ],
  qc = yt("users", zb);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ob = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  ig = yt("x", Ob),
  _b = () => {
    const [a, l] = Y.useState(!1),
      s = [
        {
          name: "الرئيسية",
          href: "#home",
          icon: d.jsx(ta, { className: "w-4 h-4" }),
        },
        {
          name: "خدماتنا",
          href: "#services",
          icon: d.jsx(Ra, { className: "w-4 h-4" }),
        },
        {
          name: "عن الحضانة",
          href: "#about",
          icon: d.jsx(qc, { className: "w-4 h-4" }),
        },
        {
          name: "اتصل بنا",
          href: "#contact",
          icon: d.jsx(ea, { className: "w-4 h-4" }),
        },
      ];
    return d.jsxs("nav", {
      className:
        "fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-lg border-b-4 border-gradient-to-r from-pink-400 to-purple-500",
      children: [
        d.jsx("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: d.jsxs("div", {
            className: "flex justify-between items-center h-16",
            children: [
              d.jsxs("div", {
                className: "flex items-center space-x-3 rtl:space-x-reverse",
                children: [
                  d.jsx("div", {
                    className:
                      "w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center ",
                    children: d.jsx(ta, { className: "w-6 h-6 text-white" }),
                  }),
                  d.jsxs("div", {
                    className: "text-right",
                    children: [
                      d.jsx("h1", {
                        className: "text-xl font-bold text-[#023047]",
                        children: " براعم المستقبل",
                      }),
                      d.jsx("p", {
                        className: "text-xs text-gray-600",
                        children: "رعاية وتعليم بحب",
                      }),
                    ],
                  }),
                ],
              }),
              d.jsx("div", {
                className: "hidden md:block",
                children: d.jsx("div", {
                  className: "flex items-center space-x-8 rtl:space-x-reverse",
                  children: s.map((o, c) =>
                    d.jsxs(
                      "a",
                      {
                        href: o.href,
                        className:
                          "flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 rounded-lg text-gray-700 hover:bg-[#149c8c] hover:bg-purple-50 transition-all duration-300 hover-lift group",
                        children: [
                          d.jsx("span", {
                            className: "group-hover:wiggle",
                            children: o.icon,
                          }),
                          d.jsx("span", {
                            className: "font-medium",
                            children: o.name,
                          }),
                        ],
                      },
                      c
                    )
                  ),
                }),
              }),
              d.jsx("div", {
                className: "hidden md:block",
                children: d.jsx("button", {
                  className:
                    "bg-[#149c8c] text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover-lift shadow-lg",
                  children: "احجز زيارة",
                }),
              }),
              d.jsx("div", {
                className: "md:hidden",
                children: d.jsx("button", {
                  onClick: () => l(!a),
                  className:
                    "inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-300",
                  children: a
                    ? d.jsx(ig, { className: "w-6 h-6" })
                    : d.jsx(pb, { className: "w-6 h-6" }),
                }),
              }),
            ],
          }),
        }),
        a &&
          d.jsx("div", {
            className: "md:hidden bg-white border-t border-gray-200 shadow-lg",
            children: d.jsxs("div", {
              className: "px-2 pt-2 pb-3 space-y-1",
              children: [
                s.map((o, c) =>
                  d.jsxs(
                    "a",
                    {
                      href: o.href,
                      className:
                        "flex items-center space-x-3 rtl:space-x-reverse px-3 py-3 rounded-md text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300",
                      onClick: () => l(!1),
                      children: [
                        o.icon,
                        d.jsx("span", {
                          className: "font-medium",
                          children: o.name,
                        }),
                      ],
                    },
                    c
                  )
                ),
                d.jsx("div", {
                  className: "pt-4",
                  children: d.jsx("button", {
                    className:
                      "w-full bg-gradient-to-r from-pink-400 to-purple-500 text-white px-6 py-3 rounded-full font-medium hover:from-pink-500 hover:to-purple-600 transition-all duration-300 shadow-lg",
                    children: "احجز زيارة",
                  }),
                }),
              ],
            }),
          }),
      ],
    });
  },
  Vb = "/assets/hero-1-C1ZOZaw9.jpg",
  Ub = "/assets/hero-2-DcA-84p_.jpg",
  kb = () =>
    d.jsxs("section", {
      id: "home",
      className:
        "relative min-h-screen flex items-center justify-center overflow-hidden pb-5",
      children: [
        d.jsx("div", {
          className:
            "absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100",
        }),
        d.jsx("div", {
          className:
            "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20",
          children: d.jsxs("div", {
            className: "grid lg:grid-cols-2 gap-12 items-center",
            children: [
              d.jsxs("div", {
                className: "text-center lg:text-right space-y-8",
                children: [
                  d.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      d.jsxs("div", {
                        className:
                          "flex items-center justify-center lg:justify-end space-x-2 rtl:space-x-reverse",
                        children: [
                          d.jsx(Cp, { className: "w-6 h-6 text-yellow-500 " }),
                          d.jsx("span", {
                            className: "text-[#023047] font-semibold text-lg",
                            children: "مرحباً بكم في",
                          }),
                          d.jsx(Cp, {
                            className: "w-6 h-6 text-yellow-500 wiggle",
                          }),
                        ],
                      }),
                      d.jsxs("h1", {
                        className:
                          "text-5xl lg:text-7xl font-bold leading-tight",
                        children: [
                          d.jsx("span", {
                            className: "text-[#023047]",
                            children: "حضانة",
                          }),
                          d.jsx("br", {}),
                          d.jsx("span", {
                            className: "text-purple-800",
                            children: "براعم المستقبل",
                          }),
                        ],
                      }),
                      d.jsx("div", {
                        className:
                          "flex items-center justify-center lg:justify-start space-x-1 rtl:space-x-reverse",
                        children: [...Array(5)].map((a, l) =>
                          d.jsx(
                            Ra,
                            {
                              className:
                                "w-6 h-6 text-yellow-400 fill-current ",
                              style: { animationDelay: `${l * 0.2}s` },
                            },
                            l
                          )
                        ),
                      }),
                    ],
                  }),
                  d.jsx("p", {
                    className:
                      "text-xl lg:text-2xl text-[#023047] leading-relaxed max-w-3xl mx-auto lg:mx-0",
                    children:
                      "نوفر بيئة آمنة ومحفزة لنمو طفلك وتطوير مهاراته الاجتماعية والتعليمية، حيث نهتم بكل جانب من جوانب نموه العقلي والعاطفي. نعتمد على وسائل تعليمية حديثة وألعاب تفاعلية تدمج بين المرح والتعلم، تحت إشراف فريق متخصص من المربيات المؤهلات اللاتي يقدمن الرعاية بكل حب واهتمام.",
                  }),
                  d.jsxs("div", {
                    className:
                      "flex flex-col sm:flex-row gap-4 justify-center lg:justify-end",
                    children: [
                      d.jsxs("button", {
                        className:
                          "bg-[#149c8c] text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover-lift shadow-xl flex items-center justify-center space-x-2 rtl:space-x-reverse",
                        children: [
                          d.jsx("span", { children: "احجز جولة مجانية" }),
                          d.jsx(I0, { className: "w-5 h-5 rotate-180" }),
                        ],
                      }),
                      d.jsx("button", {
                        className:
                          "border-2 border-[#023047] text-[#023047] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#149c8c] hover:text-white  transition-all duration-300 hover-lift",
                        children: "تعرف على خدماتنا",
                      }),
                    ],
                  }),
                  d.jsxs("div", {
                    className: "grid grid-cols-3 gap-6 pt-8",
                    children: [
                      d.jsxs("div", {
                        className: "text-center",
                        children: [
                          d.jsx("div", {
                            className: "text-3xl font-bold text-[#023047]",
                            children: "+200",
                          }),
                          d.jsx("div", {
                            className: "text-gray-600",
                            children: "طفل سعيد",
                          }),
                        ],
                      }),
                      d.jsxs("div", {
                        className: "text-center",
                        children: [
                          d.jsx("div", {
                            className: "text-3xl font-bold text-[#023047]",
                            children: "15",
                          }),
                          d.jsx("div", {
                            className: "text-gray-600",
                            children: "سنة خبرة",
                          }),
                        ],
                      }),
                      d.jsxs("div", {
                        className: "text-center",
                        children: [
                          d.jsx("div", {
                            className: "text-3xl font-bold text-[#023047]",
                            children: "24/7",
                          }),
                          d.jsx("div", {
                            className: "text-gray-600",
                            children: "رعاية مستمرة",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              d.jsxs("div", {
                className: "relative",
                children: [
                  d.jsxs("div", {
                    className: "grid grid-cols-2 gap-6",
                    children: [
                      d.jsx("div", {
                        className: "col-span-2 relative",
                        children: d.jsx("div", {
                          className:
                            "relative overflow-hidden rounded-3xl shadow-2xl hover-lift",
                          children: d.jsx("img", {
                            src: Vb,
                            alt: "أطفال في الحضانة",
                            className: "w-full h-80 object-cover",
                          }),
                        }),
                      }),
                      d.jsx("div", {
                        className: "col-span-2 relative",
                        children: d.jsxs("div", {
                          className:
                            "relative overflow-hidden rounded-3xl shadow-xl hover-lift",
                          children: [
                            d.jsx("img", {
                              src: Ub,
                              alt: "منطقة اللعب",
                              className: "w-full h-60 object-cover",
                            }),
                            d.jsx("div", {
                              className:
                                "absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent",
                            }),
                            d.jsx("div", {
                              className:
                                "absolute top-4 left-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold",
                              children: "منطقة آمنة 100%",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  d.jsx("div", {
                    className:
                      "absolute -top-6 -right-6 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center bounce-gentle",
                    children: d.jsx(Ra, {
                      className: "w-6 h-6 text-yellow-800",
                    }),
                  }),
                  d.jsx("div", {
                    className:
                      "absolute -bottom-6 -left-6 w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center float",
                    children: d.jsx(ta, { className: "w-8 h-8 text-pink-800" }),
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  Bb = () => {
    const a = [
        { name: "الرئيسية", href: "#home" },
        { name: "خدماتنا", href: "#services" },
        { name: "عن الحضانة", href: "#about" },
        { name: "اتصل بنا", href: "#contact" },
        { name: "سياسة الخصوصية", href: "#privacy" },
        { name: "الشروط والأحكام", href: "#terms" },
      ],
      l = [
        "التعليم المبكر",
        "الأنشطة الاجتماعية",
        "الفنون والإبداع",
        "الموسيقى والحركة",
        "التغذية الصحية",
        "الرعاية الطبية",
      ];
    return d.jsx("footer", {
      className: "bg-[#149c8c] text-white",
      children: d.jsx("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",
        children: d.jsxs("div", {
          className: "grid lg:grid-cols-4 md:grid-cols-2 gap-8",
          children: [
            d.jsxs("div", {
              className: "lg:col-span-1",
              children: [
                d.jsxs("div", {
                  className:
                    "flex items-center space-x-3 rtl:space-x-reverse mb-6",
                  children: [
                    d.jsx("div", {
                      className:
                        "w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center bounce-gentle",
                      children: d.jsx(ta, { className: "w-7 h-7 text-white" }),
                    }),
                    d.jsxs("div", {
                      children: [
                        d.jsx("h3", {
                          className: "text-2xl font-bold",
                          children: "حضانة براعم المستقبل",
                        }),
                        d.jsx("p", {
                          className: "text-purple-200 text-sm",
                          children: "رعاية وتعليم بحب",
                        }),
                      ],
                    }),
                  ],
                }),
                d.jsx("p", {
                  className: "text-purple-100 leading-relaxed mb-6",
                  children:
                    "نحن ملتزمون بتوفير أفضل رعاية وتعليم لأطفالكم في بيئة آمنة ومحفزة للنمو والتطور.",
                }),
                d.jsxs("div", {
                  className: "flex space-x-4 rtl:space-x-reverse",
                  children: [
                    d.jsx("a", {
                      href: "#",
                      className:
                        "w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover-lift",
                      children: d.jsx(tg, { className: "w-5 h-5" }),
                    }),
                    d.jsx("a", {
                      href: "#",
                      className:
                        "w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover-lift",
                      children: d.jsx(eg, { className: "w-5 h-5" }),
                    }),
                    d.jsx("a", {
                      href: "#",
                      className:
                        "w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover-lift",
                      children: d.jsx(ng, { className: "w-5 h-5" }),
                    }),
                  ],
                }),
              ],
            }),
            d.jsxs("div", {
              children: [
                d.jsxs("h4", {
                  className:
                    "text-xl font-bold mb-6 flex items-center space-x-2 rtl:space-x-reverse",
                  children: [
                    d.jsx(Ra, { className: "w-5 h-5 text-yellow-400" }),
                    d.jsx("span", { children: "روابط سريعة" }),
                  ],
                }),
                d.jsx("ul", {
                  className: "space-y-3",
                  children: a.map((s, o) =>
                    d.jsx(
                      "li",
                      {
                        children: d.jsx("a", {
                          href: s.href,
                          className:
                            "text-purple-100 hover:text-white transition-colors duration-300 hover:translate-x-2 rtl:hover:-translate-x-2 inline-block",
                          children: s.name,
                        }),
                      },
                      o
                    )
                  ),
                }),
              ],
            }),
            d.jsxs("div", {
              children: [
                d.jsxs("h4", {
                  className:
                    "text-xl font-bold mb-6 flex items-center space-x-2 rtl:space-x-reverse",
                  children: [
                    d.jsx(L1, { className: "w-5 h-5 text-pink-400" }),
                    d.jsx("span", { children: "خدماتنا" }),
                  ],
                }),
                d.jsx("ul", {
                  className: "space-y-3",
                  children: l.map((s, o) =>
                    d.jsx(
                      "li",
                      {
                        className:
                          "text-purple-100 hover:text-white transition-colors duration-300",
                        children: s,
                      },
                      o
                    )
                  ),
                }),
              ],
            }),
            d.jsxs("div", {
              children: [
                d.jsxs("h4", {
                  className:
                    "text-xl font-bold mb-6 flex items-center space-x-2 rtl:space-x-reverse",
                  children: [
                    d.jsx(ea, { className: "w-5 h-5 text-green-400" }),
                    d.jsx("span", { children: "تواصل معنا" }),
                  ],
                }),
                d.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    d.jsxs("div", {
                      className:
                        "flex items-start space-x-3 rtl:space-x-reverse",
                      children: [
                        d.jsx(xr, {
                          className: "w-5 h-5 text-red-400 mt-1 flex-shrink-0",
                        }),
                        d.jsx("div", {
                          children: d.jsxs("p", {
                            className: "text-purple-100",
                            children: [
                              "الرياض، حي النرجس",
                              d.jsx("br", {}),
                              "شارع الأمير محمد بن عبدالعزيز",
                            ],
                          }),
                        }),
                      ],
                    }),
                    d.jsxs("div", {
                      className:
                        "flex items-center space-x-3 rtl:space-x-reverse",
                      children: [
                        d.jsx(ea, { className: "w-5 h-5 text-green-400" }),
                        d.jsx("p", {
                          className: "text-purple-100",
                          dir: "ltr",
                          children: "+966 11 123 4567",
                        }),
                      ],
                    }),
                    d.jsxs("div", {
                      className:
                        "flex items-center space-x-3 rtl:space-x-reverse",
                      children: [
                        d.jsx(vr, { className: "w-5 h-5 text-blue-400" }),
                        d.jsx("p", {
                          className: "text-purple-100",
                          children: "info@baraem-future.sa",
                        }),
                      ],
                    }),
                    d.jsxs("div", {
                      className:
                        "flex items-start space-x-3 rtl:space-x-reverse",
                      children: [
                        d.jsx(Hc, {
                          className: "w-5 h-5 text-yellow-400 mt-1",
                        }),
                        d.jsx("div", {
                          children: d.jsxs("p", {
                            className: "text-purple-100",
                            children: [
                              "السبت - الخميس: 6:30 ص - 6:00 م",
                              d.jsx("br", {}),
                              "الجمعة: مغلق",
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  Lb = "/assets/about-DJrtDB6c.jpg",
  Hb = () => {
    const a = [
        {
          icon: d.jsx(qc, { className: "w-8 h-8" }),
          number: "200+",
          label: "طفل سعيد",
          color: "bg-[#149c8c]",
        },
        {
          icon: d.jsx(k1, { className: "w-8 h-8" }),
          number: "15",
          label: "سنة خبرة",
          color: "bg-[#149c8c]",
        },
        {
          icon: d.jsx(Rp, { className: "w-8 h-8" }),
          number: "100%",
          label: "بيئة آمنة",
          color: "bg-[#149c8c]",
        },
        {
          icon: d.jsx(Ra, { className: "w-8 h-8" }),
          number: "4.9",
          label: "تقييم الأهالي",
          color: "bg-[#149c8c]",
        },
      ],
      l = [
        {
          icon: d.jsx(ta, { className: "w-6 h-6" }),
          title: "الحب والرعاية",
          description: "نؤمن بأن الحب هو أساس التربية السليمة",
        },
        {
          icon: d.jsx(Db, { className: "w-6 h-6" }),
          title: "التميز في التعليم",
          description: "نسعى لتقديم أفضل البرامج التعليمية المطورة",
        },
        {
          icon: d.jsx(Rp, { className: "w-6 h-6" }),
          title: "الأمان أولاً",
          description: "سلامة أطفالكم هي أولويتنا القصوى",
        },
        {
          icon: d.jsx(ub, { className: "w-6 h-6" }),
          title: "الإبداع والابتكار",
          description: "نحفز الأطفال على التفكير الإبداعي والمبتكر",
        },
      ];
    return d.jsx("section", {
      id: "about",
      className:
        "py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden",
      children: d.jsxs("div", {
        className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [
          d.jsxs("div", {
            className: "text-center mb-16",
            children: [
              d.jsx("div", {
                className:
                  "flex items-center justify-center space-x-2 rtl:space-x-reverse mb-4",
                children: d.jsx("span", {
                  className: "text font-bold font-semibold text-lg",
                  children: "تعرف علينا",
                }),
              }),
              d.jsxs("h2", {
                className: "text-4xl lg:text-5xl font-bold text-[#023047] mb-6",
                children: [
                  "من نحن؟ ",
                  d.jsx("span", {
                    className: "text-yellow-500",
                    children: "حضانة براعم المستقبل",
                  }),
                ],
              }),
              d.jsx("p", {
                className:
                  "text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed",
                children:
                  "نحن أكثر من مجرد حضانة، نحن شركاء في رحلة نمو وتطور أطفالكم",
              }),
            ],
          }),
          d.jsxs("div", {
            className: "grid lg:grid-cols-2 gap-16 items-center mb-20",
            children: [
              d.jsxs("div", {
                className: "space-y-8",
                children: [
                  d.jsxs("div", {
                    children: [
                      d.jsxs("h3", {
                        className:
                          "text-3xl font-bold text-gray-800 mb-6 flex items-center space-x-3 rtl:space-x-reverse",
                        children: [
                          d.jsx(ta, { className: "w-8 h-8 text-red-600" }),
                          d.jsx("span", { children: "رسالتنا" }),
                        ],
                      }),
                      d.jsx("p", {
                        className: "text-lg text-gray-700 leading-relaxed mb-6",
                        children:
                          "في حضانة براعم المستقبل، نؤمن بأن كل طفل هو كنز ثمين يحتاج إلى رعاية خاصة وحب لا محدود. نحن ملتزمون بتوفير بيئة تعليمية آمنة ومحفزة تساعد الأطفال على النمو والازدهار في جميع جوانب شخصيتهم.",
                      }),
                      d.jsx("p", {
                        className: "text-lg text-gray-700 leading-relaxed",
                        children:
                          "منذ تأسيسنا قبل 15 عاماً، نفخر بكوننا البيت الثاني لأكثر من 200 طفل، حيث نقدم لهم أفضل الخدمات التعليمية والترفيهية مع فريق متخصص من المربيات المؤهلات.",
                      }),
                    ],
                  }),
                  d.jsxs("div", {
                    className: "bg-white rounded-3xl p-8 shadow-lg hover-lift",
                    children: [
                      d.jsxs("h4", {
                        className:
                          "text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-3 rtl:space-x-reverse",
                        children: [
                          d.jsx(ea, { className: "w-6 h-6 text-green-500" }),
                          d.jsx("span", { children: "تواصل معنا" }),
                        ],
                      }),
                      d.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          d.jsxs("div", {
                            className:
                              "flex items-center space-x-4 rtl:space-x-reverse",
                            children: [
                              d.jsx("div", {
                                className:
                                  "w-12 h-12 bg-[#149c8c] rounded-full flex items-center justify-center",
                                children: d.jsx(ea, {
                                  className: "w-6 h-6 text-white",
                                }),
                              }),
                              d.jsxs("div", {
                                children: [
                                  d.jsx("p", {
                                    className: "font-semibold text-gray-800",
                                    children: "هاتف الحضانة",
                                  }),
                                  d.jsx("p", {
                                    className: "text-gray-600",
                                    dir: "ltr",
                                    children: "+966 11 123 4567",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          d.jsxs("div", {
                            className:
                              "flex items-center space-x-4 rtl:space-x-reverse",
                            children: [
                              d.jsx("div", {
                                className:
                                  "w-12 h-12 bg-[#149c8c] rounded-full flex items-center justify-center",
                                children: d.jsx(vr, {
                                  className: "w-6 h-6 text-white",
                                }),
                              }),
                              d.jsxs("div", {
                                children: [
                                  d.jsx("p", {
                                    className: "font-semibold text-gray-800",
                                    children: "البريد الإلكتروني",
                                  }),
                                  d.jsx("p", {
                                    className: "text-gray-600",
                                    children: "info@baraem-future.sa",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          d.jsxs("div", {
                            className:
                              "flex items-start space-x-4 rtl:space-x-reverse",
                            children: [
                              d.jsx("div", {
                                className:
                                  "w-12 h-12 bg-[#149c8c] rounded-full flex items-center justify-center",
                                children: d.jsx(xr, {
                                  className: "w-6 h-6 text-white",
                                }),
                              }),
                              d.jsxs("div", {
                                children: [
                                  d.jsx("p", {
                                    className: "font-semibold text-gray-800",
                                    children: "العنوان",
                                  }),
                                  d.jsxs("p", {
                                    className: "text-gray-600",
                                    children: [
                                      "الرياض، حي النرجس",
                                      d.jsx("br", {}),
                                      "شارع الأمير محمد بن عبدالعزيز",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          d.jsxs("div", {
                            className:
                              "flex items-start space-x-4 rtl:space-x-reverse",
                            children: [
                              d.jsx("div", {
                                className:
                                  "w-12 h-12 bg-[#149c8c] rounded-full flex items-center justify-center",
                                children: d.jsx(Hc, {
                                  className: "w-6 h-6 text-white",
                                }),
                              }),
                              d.jsxs("div", {
                                children: [
                                  d.jsx("p", {
                                    className: "font-semibold text-gray-800",
                                    children: "ساعات العمل",
                                  }),
                                  d.jsx("p", {
                                    className: "text-gray-600",
                                    children: "السبت - الخميس: 6:30 ص - 6:00 م",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              d.jsxs("div", {
                className: "space-y-8",
                children: [
                  d.jsx("div", {
                    className: "relative",
                    children: d.jsxs("div", {
                      className:
                        "relative overflow-hidden rounded-3xl shadow-2xl hover-lift",
                      children: [
                        d.jsx("img", {
                          src: Lb,
                          alt: "فريق حضانة براعم المستقبل",
                          className: "w-full h-96 object-cover",
                        }),
                        d.jsx("div", {
                          className:
                            "absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent",
                        }),
                        d.jsxs("div", {
                          className:
                            "absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4",
                          children: [
                            d.jsx("p", {
                              className: "text-purple-800 font-bold text-lg",
                              children: "فريقنا المتخصص",
                            }),
                            d.jsx("p", {
                              className: "text-purple-600",
                              children: "مربيات مؤهلات ومدربات",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  d.jsx("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: a.map((s, o) =>
                      d.jsxs(
                        "div",
                        {
                          className:
                            "bg-white rounded-2xl p-6 shadow-lg hover-lift text-center",
                          children: [
                            d.jsx("div", {
                              className: `w-16 h-16 bg-gradient-to-r ${s.color} rounded-2xl flex items-center justify-center mx-auto mb-4 `,
                              children: d.jsx("div", {
                                className: "text-white",
                                children: s.icon,
                              }),
                            }),
                            d.jsx("div", {
                              className:
                                "text-3xl font-bold text-gray-800 mb-2",
                              children: s.number,
                            }),
                            d.jsx("div", {
                              className: "text-gray-600",
                              children: s.label,
                            }),
                          ],
                        },
                        o
                      )
                    ),
                  }),
                ],
              }),
            ],
          }),
          d.jsxs("div", {
            className: "mb-20",
            children: [
              d.jsxs("div", {
                className: "text-center mb-12",
                children: [
                  d.jsxs("h3", {
                    className: "text-3xl font-bold text-gray-800 mb-4",
                    children: [
                      "قيمنا ",
                      d.jsx("span", {
                        className: "text-yellow-500",
                        children: "ومبادئنا",
                      }),
                    ],
                  }),
                  d.jsx("p", {
                    className: "text-lg text-gray-600",
                    children: "المبادئ التي نؤمن بها ونطبقها في رعاية أطفالكم",
                  }),
                ],
              }),
              d.jsx("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
                children: l.map((s, o) =>
                  d.jsxs(
                    "div",
                    {
                      className:
                        "bg-white rounded-2xl p-6 shadow-lg hover-lift text-center group",
                      children: [
                        d.jsx("div", {
                          className:
                            "w-16 h-16 bg-[#149c8c] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:wiggle",
                          children: d.jsx("div", {
                            className: "text-white",
                            children: s.icon,
                          }),
                        }),
                        d.jsx("h4", {
                          className: "text-xl font-bold text-gray-800 mb-3",
                          children: s.title,
                        }),
                        d.jsx("p", {
                          className: "text-gray-600 text-sm leading-relaxed",
                          children: s.description,
                        }),
                      ],
                    },
                    o
                  )
                ),
              }),
            ],
          }),
        ],
      }),
    });
  };
function lg(a) {
  var l,
    s,
    o = "";
  if (typeof a == "string" || typeof a == "number") o += a;
  else if (typeof a == "object")
    if (Array.isArray(a)) {
      var c = a.length;
      for (l = 0; l < c; l++)
        a[l] && (s = lg(a[l])) && (o && (o += " "), (o += s));
    } else for (s in a) a[s] && (o && (o += " "), (o += s));
  return o;
}
function sg() {
  for (var a, l, s = 0, o = "", c = arguments.length; s < c; s++)
    (a = arguments[s]) && (l = lg(a)) && (o && (o += " "), (o += l));
  return o;
}
const Gc = "-",
  qb = (a) => {
    const l = Yb(a),
      { conflictingClassGroups: s, conflictingClassGroupModifiers: o } = a;
    return {
      getClassGroupId: (f) => {
        const p = f.split(Gc);
        return p[0] === "" && p.length !== 1 && p.shift(), rg(p, l) || Gb(f);
      },
      getConflictingClassGroupIds: (f, p) => {
        const y = s[f] || [];
        return p && o[f] ? [...y, ...o[f]] : y;
      },
    };
  },
  rg = (a, l) => {
    var f;
    if (a.length === 0) return l.classGroupId;
    const s = a[0],
      o = l.nextPart.get(s),
      c = o ? rg(a.slice(1), o) : void 0;
    if (c) return c;
    if (l.validators.length === 0) return;
    const h = a.join(Gc);
    return (f = l.validators.find(({ validator: p }) => p(h))) == null
      ? void 0
      : f.classGroupId;
  },
  zp = /^\[(.+)\]$/,
  Gb = (a) => {
    if (zp.test(a)) {
      const l = zp.exec(a)[1],
        s = l == null ? void 0 : l.substring(0, l.indexOf(":"));
      if (s) return "arbitrary.." + s;
    }
  },
  Yb = (a) => {
    const { theme: l, classGroups: s } = a,
      o = { nextPart: new Map(), validators: [] };
    for (const c in s) pc(s[c], o, c, l);
    return o;
  },
  pc = (a, l, s, o) => {
    a.forEach((c) => {
      if (typeof c == "string") {
        const h = c === "" ? l : Op(l, c);
        h.classGroupId = s;
        return;
      }
      if (typeof c == "function") {
        if (Xb(c)) {
          pc(c(o), l, s, o);
          return;
        }
        l.validators.push({ validator: c, classGroupId: s });
        return;
      }
      Object.entries(c).forEach(([h, f]) => {
        pc(f, Op(l, h), s, o);
      });
    });
  },
  Op = (a, l) => {
    let s = a;
    return (
      l.split(Gc).forEach((o) => {
        s.nextPart.has(o) ||
          s.nextPart.set(o, { nextPart: new Map(), validators: [] }),
          (s = s.nextPart.get(o));
      }),
      s
    );
  },
  Xb = (a) => a.isThemeGetter,
  Zb = (a) => {
    if (a < 1) return { get: () => {}, set: () => {} };
    let l = 0,
      s = new Map(),
      o = new Map();
    const c = (h, f) => {
      s.set(h, f), l++, l > a && ((l = 0), (o = s), (s = new Map()));
    };
    return {
      get(h) {
        let f = s.get(h);
        if (f !== void 0) return f;
        if ((f = o.get(h)) !== void 0) return c(h, f), f;
      },
      set(h, f) {
        s.has(h) ? s.set(h, f) : c(h, f);
      },
    };
  },
  gc = "!",
  yc = ":",
  Kb = yc.length,
  Qb = (a) => {
    const { prefix: l, experimentalParseClassName: s } = a;
    let o = (c) => {
      const h = [];
      let f = 0,
        p = 0,
        y = 0,
        g;
      for (let z = 0; z < c.length; z++) {
        let U = c[z];
        if (f === 0 && p === 0) {
          if (U === yc) {
            h.push(c.slice(y, z)), (y = z + Kb);
            continue;
          }
          if (U === "/") {
            g = z;
            continue;
          }
        }
        U === "[" ? f++ : U === "]" ? f-- : U === "(" ? p++ : U === ")" && p--;
      }
      const v = h.length === 0 ? c : c.substring(y),
        b = Pb(v),
        S = b !== v,
        E = g && g > y ? g - y : void 0;
      return {
        modifiers: h,
        hasImportantModifier: S,
        baseClassName: b,
        maybePostfixModifierPosition: E,
      };
    };
    if (l) {
      const c = l + yc,
        h = o;
      o = (f) =>
        f.startsWith(c)
          ? h(f.substring(c.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: f,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (s) {
      const c = o;
      o = (h) => s({ className: h, parseClassName: c });
    }
    return o;
  },
  Pb = (a) =>
    a.endsWith(gc)
      ? a.substring(0, a.length - 1)
      : a.startsWith(gc)
      ? a.substring(1)
      : a,
  Jb = (a) => {
    const l = Object.fromEntries(a.orderSensitiveModifiers.map((o) => [o, !0]));
    return (o) => {
      if (o.length <= 1) return o;
      const c = [];
      let h = [];
      return (
        o.forEach((f) => {
          f[0] === "[" || l[f] ? (c.push(...h.sort(), f), (h = [])) : h.push(f);
        }),
        c.push(...h.sort()),
        c
      );
    };
  },
  Fb = (a) => ({
    cache: Zb(a.cacheSize),
    parseClassName: Qb(a),
    sortModifiers: Jb(a),
    ...qb(a),
  }),
  $b = /\s+/,
  Wb = (a, l) => {
    const {
        parseClassName: s,
        getClassGroupId: o,
        getConflictingClassGroupIds: c,
        sortModifiers: h,
      } = l,
      f = [],
      p = a.trim().split($b);
    let y = "";
    for (let g = p.length - 1; g >= 0; g -= 1) {
      const v = p[g],
        {
          isExternal: b,
          modifiers: S,
          hasImportantModifier: E,
          baseClassName: z,
          maybePostfixModifierPosition: U,
        } = s(v);
      if (b) {
        y = v + (y.length > 0 ? " " + y : y);
        continue;
      }
      let Z = !!U,
        X = o(Z ? z.substring(0, U) : z);
      if (!X) {
        if (!Z) {
          y = v + (y.length > 0 ? " " + y : y);
          continue;
        }
        if (((X = o(z)), !X)) {
          y = v + (y.length > 0 ? " " + y : y);
          continue;
        }
        Z = !1;
      }
      const q = h(S).join(":"),
        Q = E ? q + gc : q,
        et = Q + X;
      if (f.includes(et)) continue;
      f.push(et);
      const G = c(X, Z);
      for (let I = 0; I < G.length; ++I) {
        const nt = G[I];
        f.push(Q + nt);
      }
      y = v + (y.length > 0 ? " " + y : y);
    }
    return y;
  };
function Ib() {
  let a = 0,
    l,
    s,
    o = "";
  for (; a < arguments.length; )
    (l = arguments[a++]) && (s = og(l)) && (o && (o += " "), (o += s));
  return o;
}
const og = (a) => {
  if (typeof a == "string") return a;
  let l,
    s = "";
  for (let o = 0; o < a.length; o++)
    a[o] && (l = og(a[o])) && (s && (s += " "), (s += l));
  return s;
};
function t2(a, ...l) {
  let s,
    o,
    c,
    h = f;
  function f(y) {
    const g = l.reduce((v, b) => b(v), a());
    return (s = Fb(g)), (o = s.cache.get), (c = s.cache.set), (h = p), p(y);
  }
  function p(y) {
    const g = o(y);
    if (g) return g;
    const v = Wb(y, s);
    return c(y, v), v;
  }
  return function () {
    return h(Ib.apply(null, arguments));
  };
}
const Jt = (a) => {
    const l = (s) => s[a] || [];
    return (l.isThemeGetter = !0), l;
  },
  ug = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  cg = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  e2 = /^\d+\/\d+$/,
  n2 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  a2 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  i2 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  l2 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  s2 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  gi = (a) => e2.test(a),
  ft = (a) => !!a && !Number.isNaN(Number(a)),
  $n = (a) => !!a && Number.isInteger(Number(a)),
  Fu = (a) => a.endsWith("%") && ft(a.slice(0, -1)),
  pn = (a) => n2.test(a),
  r2 = () => !0,
  o2 = (a) => a2.test(a) && !i2.test(a),
  fg = () => !1,
  u2 = (a) => l2.test(a),
  c2 = (a) => s2.test(a),
  f2 = (a) => !$(a) && !W(a),
  d2 = (a) => wi(a, mg, fg),
  $ = (a) => ug.test(a),
  ja = (a) => wi(a, pg, o2),
  $u = (a) => wi(a, y2, ft),
  _p = (a) => wi(a, dg, fg),
  h2 = (a) => wi(a, hg, c2),
  or = (a) => wi(a, gg, u2),
  W = (a) => cg.test(a),
  Rl = (a) => Mi(a, pg),
  m2 = (a) => Mi(a, v2),
  Vp = (a) => Mi(a, dg),
  p2 = (a) => Mi(a, mg),
  g2 = (a) => Mi(a, hg),
  ur = (a) => Mi(a, gg, !0),
  wi = (a, l, s) => {
    const o = ug.exec(a);
    return o ? (o[1] ? l(o[1]) : s(o[2])) : !1;
  },
  Mi = (a, l, s = !1) => {
    const o = cg.exec(a);
    return o ? (o[1] ? l(o[1]) : s) : !1;
  },
  dg = (a) => a === "position" || a === "percentage",
  hg = (a) => a === "image" || a === "url",
  mg = (a) => a === "length" || a === "size" || a === "bg-size",
  pg = (a) => a === "length",
  y2 = (a) => a === "number",
  v2 = (a) => a === "family-name",
  gg = (a) => a === "shadow",
  x2 = () => {
    const a = Jt("color"),
      l = Jt("font"),
      s = Jt("text"),
      o = Jt("font-weight"),
      c = Jt("tracking"),
      h = Jt("leading"),
      f = Jt("breakpoint"),
      p = Jt("container"),
      y = Jt("spacing"),
      g = Jt("radius"),
      v = Jt("shadow"),
      b = Jt("inset-shadow"),
      S = Jt("text-shadow"),
      E = Jt("drop-shadow"),
      z = Jt("blur"),
      U = Jt("perspective"),
      Z = Jt("aspect"),
      X = Jt("ease"),
      q = Jt("animate"),
      Q = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      et = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      G = () => [...et(), W, $],
      I = () => ["auto", "hidden", "clip", "visible", "scroll"],
      nt = () => ["auto", "contain", "none"],
      L = () => [W, $, y],
      ut = () => [gi, "full", "auto", ...L()],
      Ct = () => [$n, "none", "subgrid", W, $],
      Ht = () => ["auto", { span: ["full", $n, W, $] }, $n, W, $],
      zt = () => [$n, "auto", W, $],
      Me = () => ["auto", "min", "max", "fr", W, $],
      ce = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      Dt = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      C = () => ["auto", ...L()],
      H = () => [
        gi,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...L(),
      ],
      k = () => [a, W, $],
      dt = () => [...et(), Vp, _p, { position: [W, $] }],
      j = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      B = () => ["auto", "cover", "contain", p2, d2, { size: [W, $] }],
      P = () => [Fu, Rl, ja],
      K = () => ["", "none", "full", g, W, $],
      J = () => ["", ft, Rl, ja],
      mt = () => ["solid", "dashed", "dotted", "double"],
      rt = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      xt = () => [ft, Fu, Vp, _p],
      Mt = () => ["", "none", z, W, $],
      ye = () => ["none", ft, W, $],
      jn = () => ["none", ft, W, $],
      An = () => [ft, W, $],
      Nn = () => [gi, "full", ...L()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [pn],
        breakpoint: [pn],
        color: [r2],
        container: [pn],
        "drop-shadow": [pn],
        ease: ["in", "out", "in-out"],
        font: [f2],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [pn],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [pn],
        shadow: [pn],
        spacing: ["px", ft],
        text: [pn],
        "text-shadow": [pn],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", gi, $, W, Z] }],
        container: ["container"],
        columns: [{ columns: [ft, $, W, p] }],
        "break-after": [{ "break-after": Q() }],
        "break-before": [{ "break-before": Q() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: G() }],
        overflow: [{ overflow: I() }],
        "overflow-x": [{ "overflow-x": I() }],
        "overflow-y": [{ "overflow-y": I() }],
        overscroll: [{ overscroll: nt() }],
        "overscroll-x": [{ "overscroll-x": nt() }],
        "overscroll-y": [{ "overscroll-y": nt() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: ut() }],
        "inset-x": [{ "inset-x": ut() }],
        "inset-y": [{ "inset-y": ut() }],
        start: [{ start: ut() }],
        end: [{ end: ut() }],
        top: [{ top: ut() }],
        right: [{ right: ut() }],
        bottom: [{ bottom: ut() }],
        left: [{ left: ut() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [$n, "auto", W, $] }],
        basis: [{ basis: [gi, "full", "auto", p, ...L()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [ft, gi, "auto", "initial", "none", $] }],
        grow: [{ grow: ["", ft, W, $] }],
        shrink: [{ shrink: ["", ft, W, $] }],
        order: [{ order: [$n, "first", "last", "none", W, $] }],
        "grid-cols": [{ "grid-cols": Ct() }],
        "col-start-end": [{ col: Ht() }],
        "col-start": [{ "col-start": zt() }],
        "col-end": [{ "col-end": zt() }],
        "grid-rows": [{ "grid-rows": Ct() }],
        "row-start-end": [{ row: Ht() }],
        "row-start": [{ "row-start": zt() }],
        "row-end": [{ "row-end": zt() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": Me() }],
        "auto-rows": [{ "auto-rows": Me() }],
        gap: [{ gap: L() }],
        "gap-x": [{ "gap-x": L() }],
        "gap-y": [{ "gap-y": L() }],
        "justify-content": [{ justify: [...ce(), "normal"] }],
        "justify-items": [{ "justify-items": [...Dt(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...Dt()] }],
        "align-content": [{ content: ["normal", ...ce()] }],
        "align-items": [{ items: [...Dt(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...Dt(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": ce() }],
        "place-items": [{ "place-items": [...Dt(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...Dt()] }],
        p: [{ p: L() }],
        px: [{ px: L() }],
        py: [{ py: L() }],
        ps: [{ ps: L() }],
        pe: [{ pe: L() }],
        pt: [{ pt: L() }],
        pr: [{ pr: L() }],
        pb: [{ pb: L() }],
        pl: [{ pl: L() }],
        m: [{ m: C() }],
        mx: [{ mx: C() }],
        my: [{ my: C() }],
        ms: [{ ms: C() }],
        me: [{ me: C() }],
        mt: [{ mt: C() }],
        mr: [{ mr: C() }],
        mb: [{ mb: C() }],
        ml: [{ ml: C() }],
        "space-x": [{ "space-x": L() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": L() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: H() }],
        w: [{ w: [p, "screen", ...H()] }],
        "min-w": [{ "min-w": [p, "screen", "none", ...H()] }],
        "max-w": [
          { "max-w": [p, "screen", "none", "prose", { screen: [f] }, ...H()] },
        ],
        h: [{ h: ["screen", "lh", ...H()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...H()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...H()] }],
        "font-size": [{ text: ["base", s, Rl, ja] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [o, W, $u] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              Fu,
              $,
            ],
          },
        ],
        "font-family": [{ font: [m2, $, l] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [c, W, $] }],
        "line-clamp": [{ "line-clamp": [ft, "none", W, $u] }],
        leading: [{ leading: [h, ...L()] }],
        "list-image": [{ "list-image": ["none", W, $] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", W, $] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: k() }],
        "text-color": [{ text: k() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...mt(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [ft, "from-font", "auto", W, ja] },
        ],
        "text-decoration-color": [{ decoration: k() }],
        "underline-offset": [{ "underline-offset": [ft, "auto", W, $] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: L() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              W,
              $,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", W, $] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: dt() }],
        "bg-repeat": [{ bg: j() }],
        "bg-size": [{ bg: B() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  $n,
                  W,
                  $,
                ],
                radial: ["", W, $],
                conic: [$n, W, $],
              },
              g2,
              h2,
            ],
          },
        ],
        "bg-color": [{ bg: k() }],
        "gradient-from-pos": [{ from: P() }],
        "gradient-via-pos": [{ via: P() }],
        "gradient-to-pos": [{ to: P() }],
        "gradient-from": [{ from: k() }],
        "gradient-via": [{ via: k() }],
        "gradient-to": [{ to: k() }],
        rounded: [{ rounded: K() }],
        "rounded-s": [{ "rounded-s": K() }],
        "rounded-e": [{ "rounded-e": K() }],
        "rounded-t": [{ "rounded-t": K() }],
        "rounded-r": [{ "rounded-r": K() }],
        "rounded-b": [{ "rounded-b": K() }],
        "rounded-l": [{ "rounded-l": K() }],
        "rounded-ss": [{ "rounded-ss": K() }],
        "rounded-se": [{ "rounded-se": K() }],
        "rounded-ee": [{ "rounded-ee": K() }],
        "rounded-es": [{ "rounded-es": K() }],
        "rounded-tl": [{ "rounded-tl": K() }],
        "rounded-tr": [{ "rounded-tr": K() }],
        "rounded-br": [{ "rounded-br": K() }],
        "rounded-bl": [{ "rounded-bl": K() }],
        "border-w": [{ border: J() }],
        "border-w-x": [{ "border-x": J() }],
        "border-w-y": [{ "border-y": J() }],
        "border-w-s": [{ "border-s": J() }],
        "border-w-e": [{ "border-e": J() }],
        "border-w-t": [{ "border-t": J() }],
        "border-w-r": [{ "border-r": J() }],
        "border-w-b": [{ "border-b": J() }],
        "border-w-l": [{ "border-l": J() }],
        "divide-x": [{ "divide-x": J() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": J() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...mt(), "hidden", "none"] }],
        "divide-style": [{ divide: [...mt(), "hidden", "none"] }],
        "border-color": [{ border: k() }],
        "border-color-x": [{ "border-x": k() }],
        "border-color-y": [{ "border-y": k() }],
        "border-color-s": [{ "border-s": k() }],
        "border-color-e": [{ "border-e": k() }],
        "border-color-t": [{ "border-t": k() }],
        "border-color-r": [{ "border-r": k() }],
        "border-color-b": [{ "border-b": k() }],
        "border-color-l": [{ "border-l": k() }],
        "divide-color": [{ divide: k() }],
        "outline-style": [{ outline: [...mt(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [ft, W, $] }],
        "outline-w": [{ outline: ["", ft, Rl, ja] }],
        "outline-color": [{ outline: k() }],
        shadow: [{ shadow: ["", "none", v, ur, or] }],
        "shadow-color": [{ shadow: k() }],
        "inset-shadow": [{ "inset-shadow": ["none", b, ur, or] }],
        "inset-shadow-color": [{ "inset-shadow": k() }],
        "ring-w": [{ ring: J() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: k() }],
        "ring-offset-w": [{ "ring-offset": [ft, ja] }],
        "ring-offset-color": [{ "ring-offset": k() }],
        "inset-ring-w": [{ "inset-ring": J() }],
        "inset-ring-color": [{ "inset-ring": k() }],
        "text-shadow": [{ "text-shadow": ["none", S, ur, or] }],
        "text-shadow-color": [{ "text-shadow": k() }],
        opacity: [{ opacity: [ft, W, $] }],
        "mix-blend": [
          { "mix-blend": [...rt(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": rt() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [ft] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": xt() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": xt() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": k() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": k() }],
        "mask-image-t-from-pos": [{ "mask-t-from": xt() }],
        "mask-image-t-to-pos": [{ "mask-t-to": xt() }],
        "mask-image-t-from-color": [{ "mask-t-from": k() }],
        "mask-image-t-to-color": [{ "mask-t-to": k() }],
        "mask-image-r-from-pos": [{ "mask-r-from": xt() }],
        "mask-image-r-to-pos": [{ "mask-r-to": xt() }],
        "mask-image-r-from-color": [{ "mask-r-from": k() }],
        "mask-image-r-to-color": [{ "mask-r-to": k() }],
        "mask-image-b-from-pos": [{ "mask-b-from": xt() }],
        "mask-image-b-to-pos": [{ "mask-b-to": xt() }],
        "mask-image-b-from-color": [{ "mask-b-from": k() }],
        "mask-image-b-to-color": [{ "mask-b-to": k() }],
        "mask-image-l-from-pos": [{ "mask-l-from": xt() }],
        "mask-image-l-to-pos": [{ "mask-l-to": xt() }],
        "mask-image-l-from-color": [{ "mask-l-from": k() }],
        "mask-image-l-to-color": [{ "mask-l-to": k() }],
        "mask-image-x-from-pos": [{ "mask-x-from": xt() }],
        "mask-image-x-to-pos": [{ "mask-x-to": xt() }],
        "mask-image-x-from-color": [{ "mask-x-from": k() }],
        "mask-image-x-to-color": [{ "mask-x-to": k() }],
        "mask-image-y-from-pos": [{ "mask-y-from": xt() }],
        "mask-image-y-to-pos": [{ "mask-y-to": xt() }],
        "mask-image-y-from-color": [{ "mask-y-from": k() }],
        "mask-image-y-to-color": [{ "mask-y-to": k() }],
        "mask-image-radial": [{ "mask-radial": [W, $] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": xt() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": xt() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": k() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": k() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": et() }],
        "mask-image-conic-pos": [{ "mask-conic": [ft] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": xt() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": xt() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": k() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": k() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: dt() }],
        "mask-repeat": [{ mask: j() }],
        "mask-size": [{ mask: B() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", W, $] }],
        filter: [{ filter: ["", "none", W, $] }],
        blur: [{ blur: Mt() }],
        brightness: [{ brightness: [ft, W, $] }],
        contrast: [{ contrast: [ft, W, $] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", E, ur, or] }],
        "drop-shadow-color": [{ "drop-shadow": k() }],
        grayscale: [{ grayscale: ["", ft, W, $] }],
        "hue-rotate": [{ "hue-rotate": [ft, W, $] }],
        invert: [{ invert: ["", ft, W, $] }],
        saturate: [{ saturate: [ft, W, $] }],
        sepia: [{ sepia: ["", ft, W, $] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", W, $] }],
        "backdrop-blur": [{ "backdrop-blur": Mt() }],
        "backdrop-brightness": [{ "backdrop-brightness": [ft, W, $] }],
        "backdrop-contrast": [{ "backdrop-contrast": [ft, W, $] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", ft, W, $] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [ft, W, $] }],
        "backdrop-invert": [{ "backdrop-invert": ["", ft, W, $] }],
        "backdrop-opacity": [{ "backdrop-opacity": [ft, W, $] }],
        "backdrop-saturate": [{ "backdrop-saturate": [ft, W, $] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", ft, W, $] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": L() }],
        "border-spacing-x": [{ "border-spacing-x": L() }],
        "border-spacing-y": [{ "border-spacing-y": L() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              W,
              $,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [ft, "initial", W, $] }],
        ease: [{ ease: ["linear", "initial", X, W, $] }],
        delay: [{ delay: [ft, W, $] }],
        animate: [{ animate: ["none", q, W, $] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [U, W, $] }],
        "perspective-origin": [{ "perspective-origin": G() }],
        rotate: [{ rotate: ye() }],
        "rotate-x": [{ "rotate-x": ye() }],
        "rotate-y": [{ "rotate-y": ye() }],
        "rotate-z": [{ "rotate-z": ye() }],
        scale: [{ scale: jn() }],
        "scale-x": [{ "scale-x": jn() }],
        "scale-y": [{ "scale-y": jn() }],
        "scale-z": [{ "scale-z": jn() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: An() }],
        "skew-x": [{ "skew-x": An() }],
        "skew-y": [{ "skew-y": An() }],
        transform: [{ transform: [W, $, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: G() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: Nn() }],
        "translate-x": [{ "translate-x": Nn() }],
        "translate-y": [{ "translate-y": Nn() }],
        "translate-z": [{ "translate-z": Nn() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: k() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: k() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              W,
              $,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": L() }],
        "scroll-mx": [{ "scroll-mx": L() }],
        "scroll-my": [{ "scroll-my": L() }],
        "scroll-ms": [{ "scroll-ms": L() }],
        "scroll-me": [{ "scroll-me": L() }],
        "scroll-mt": [{ "scroll-mt": L() }],
        "scroll-mr": [{ "scroll-mr": L() }],
        "scroll-mb": [{ "scroll-mb": L() }],
        "scroll-ml": [{ "scroll-ml": L() }],
        "scroll-p": [{ "scroll-p": L() }],
        "scroll-px": [{ "scroll-px": L() }],
        "scroll-py": [{ "scroll-py": L() }],
        "scroll-ps": [{ "scroll-ps": L() }],
        "scroll-pe": [{ "scroll-pe": L() }],
        "scroll-pt": [{ "scroll-pt": L() }],
        "scroll-pr": [{ "scroll-pr": L() }],
        "scroll-pb": [{ "scroll-pb": L() }],
        "scroll-pl": [{ "scroll-pl": L() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", W, $] },
        ],
        fill: [{ fill: ["none", ...k()] }],
        "stroke-w": [{ stroke: [ft, Rl, ja, $u] }],
        stroke: [{ stroke: ["none", ...k()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  b2 = t2(x2);
function Tn(...a) {
  return b2(sg(a));
}
function gn({ className: a, ...l }) {
  return d.jsx("div", {
    "data-slot": "card",
    className: Tn(
      "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
      a
    ),
    ...l,
  });
}
function yn({ className: a, ...l }) {
  return d.jsx("div", {
    "data-slot": "card-header",
    className: Tn(
      "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
      a
    ),
    ...l,
  });
}
function vn({ className: a, ...l }) {
  return d.jsx("div", {
    "data-slot": "card-title",
    className: Tn("leading-none font-semibold", a),
    ...l,
  });
}
function S2({ className: a, ...l }) {
  return d.jsx("div", {
    "data-slot": "card-description",
    className: Tn("text-muted-foreground text-sm", a),
    ...l,
  });
}
function xn({ className: a, ...l }) {
  return d.jsx("div", {
    "data-slot": "card-content",
    className: Tn("px-6", a),
    ...l,
  });
}
function Up(a, l) {
  if (typeof a == "function") return a(l);
  a != null && (a.current = l);
}
function T2(...a) {
  return (l) => {
    let s = !1;
    const o = a.map((c) => {
      const h = Up(c, l);
      return !s && typeof h == "function" && (s = !0), h;
    });
    if (s)
      return () => {
        for (let c = 0; c < o.length; c++) {
          const h = o[c];
          typeof h == "function" ? h() : Up(a[c], null);
        }
      };
  };
}
function j2(a) {
  const l = A2(a),
    s = Y.forwardRef((o, c) => {
      const { children: h, ...f } = o,
        p = Y.Children.toArray(h),
        y = p.find(w2);
      if (y) {
        const g = y.props.children,
          v = p.map((b) =>
            b === y
              ? Y.Children.count(g) > 1
                ? Y.Children.only(null)
                : Y.isValidElement(g)
                ? g.props.children
                : null
              : b
          );
        return d.jsx(l, {
          ...f,
          ref: c,
          children: Y.isValidElement(g) ? Y.cloneElement(g, void 0, v) : null,
        });
      }
      return d.jsx(l, { ...f, ref: c, children: h });
    });
  return (s.displayName = `${a}.Slot`), s;
}
var yg = j2("Slot");
function A2(a) {
  const l = Y.forwardRef((s, o) => {
    const { children: c, ...h } = s;
    if (Y.isValidElement(c)) {
      const f = E2(c),
        p = M2(h, c.props);
      return (
        c.type !== Y.Fragment && (p.ref = o ? T2(o, f) : f),
        Y.cloneElement(c, p)
      );
    }
    return Y.Children.count(c) > 1 ? Y.Children.only(null) : null;
  });
  return (l.displayName = `${a}.SlotClone`), l;
}
var N2 = Symbol("radix.slottable");
function w2(a) {
  return (
    Y.isValidElement(a) &&
    typeof a.type == "function" &&
    "__radixId" in a.type &&
    a.type.__radixId === N2
  );
}
function M2(a, l) {
  const s = { ...l };
  for (const o in l) {
    const c = a[o],
      h = l[o];
    /^on[A-Z]/.test(o)
      ? c && h
        ? (s[o] = (...p) => {
            const y = h(...p);
            return c(...p), y;
          })
        : c && (s[o] = c)
      : o === "style"
      ? (s[o] = { ...c, ...h })
      : o === "className" && (s[o] = [c, h].filter(Boolean).join(" "));
  }
  return { ...a, ...s };
}
function E2(a) {
  var o, c;
  let l =
      (o = Object.getOwnPropertyDescriptor(a.props, "ref")) == null
        ? void 0
        : o.get,
    s = l && "isReactWarning" in l && l.isReactWarning;
  return s
    ? a.ref
    : ((l =
        (c = Object.getOwnPropertyDescriptor(a, "ref")) == null
          ? void 0
          : c.get),
      (s = l && "isReactWarning" in l && l.isReactWarning),
      s ? a.props.ref : a.props.ref || a.ref);
}
const kp = (a) => (typeof a == "boolean" ? `${a}` : a === 0 ? "0" : a),
  Bp = sg,
  vg = (a, l) => (s) => {
    var o;
    if ((l == null ? void 0 : l.variants) == null)
      return Bp(
        a,
        s == null ? void 0 : s.class,
        s == null ? void 0 : s.className
      );
    const { variants: c, defaultVariants: h } = l,
      f = Object.keys(c).map((g) => {
        const v = s == null ? void 0 : s[g],
          b = h == null ? void 0 : h[g];
        if (v === null) return null;
        const S = kp(v) || kp(b);
        return c[g][S];
      }),
      p =
        s &&
        Object.entries(s).reduce((g, v) => {
          let [b, S] = v;
          return S === void 0 || (g[b] = S), g;
        }, {}),
      y =
        l == null || (o = l.compoundVariants) === null || o === void 0
          ? void 0
          : o.reduce((g, v) => {
              let { class: b, className: S, ...E } = v;
              return Object.entries(E).every((z) => {
                let [U, Z] = z;
                return Array.isArray(Z)
                  ? Z.includes({ ...h, ...p }[U])
                  : { ...h, ...p }[U] === Z;
              })
                ? [...g, b, S]
                : g;
            }, []);
    return Bp(
      a,
      f,
      y,
      s == null ? void 0 : s.class,
      s == null ? void 0 : s.className
    );
  },
  D2 = vg(
    "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
    {
      variants: {
        variant: {
          default:
            "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
          secondary:
            "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
          destructive:
            "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
          outline:
            "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    }
  );
function xg({ className: a, variant: l, asChild: s = !1, ...o }) {
  const c = s ? yg : "span";
  return d.jsx(c, {
    "data-slot": "badge",
    className: Tn(D2({ variant: l }), a),
    ...o,
  });
}
const R2 = "/assets/services-1-DtpSKrHf.jpg",
  C2 = "/assets/services-2-QcnE6Soq.jpg",
  z2 = "/assets/services-3-DNby-8z_.jpg",
  O2 = "/assets/services-4-BF3YtzC7.jpg",
  _2 = () => {
    const a = [
      {
        id: 1,
        title: "الرعاية اليومية المتكاملة",
        description:
          "رعاية شاملة للأطفال في بيئة آمنة ومحفزة مع فريق مؤهل من المربيات المتخصصات",
        image: R2,
        icon: ta,
        features: ["رعاية طبية", "وجبات صحية", "بيئة آمنة"],
      },
      {
        id: 2,
        title: "الأنشطة التعليمية التفاعلية",
        description:
          "برامج تعليمية متنوعة تساعد على تنمية المهارات الأساسية والإبداعية للطفل",
        image: C2,
        icon: mc,
        features: ["تعلم الحروف", "الأرقام", "المهارات الحركية"],
      },
      {
        id: 3,
        title: "الفنون والحرف اليدوية",
        description:
          "ورش فنية متخصصة لتنمية الإبداع والمهارات الحركية الدقيقة لدى الأطفال",
        image: z2,
        icon: Sb,
        features: ["الرسم", "الأشغال اليدوية", "النحت"],
      },
      {
        id: 4,
        title: "الموسيقى والحركة",
        description:
          "جلسات موسيقية تفاعلية تساعد على تطوير الحس الموسيقي والتعبير الحركي",
        image: O2,
        icon: xb,
        features: ["الغناء", "الآلات الموسيقية", "الرقص"],
      },
    ];
    return d.jsx("div", {
      className:
        "min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50",
      children: d.jsxs("div", {
        className: "container mx-auto px-4 py-16",
        children: [
          d.jsxs("div", {
            className: "text-center mb-16",
            children: [
              d.jsxs("h1", {
                className:
                  "text-5xl font-bold text-gray-800 mb-6 leading-tight",
                children: [
                  "خدماتنا المتميزة",
                  d.jsx("span", {
                    className: "block  bg-clip-text text-yellow-500",
                    children: "لرعاية أطفالكم",
                  }),
                ],
              }),
              d.jsx("p", {
                className:
                  "text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed",
                children:
                  "نقدم أفضل الخدمات التعليمية والترفيهية في بيئة آمنة ومحفزة تساعد على نمو طفلكم بشكل صحي ومتوازن",
              }),
            ],
          }),
          d.jsx("div", {
            className:
              "grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-7xl mx-auto",
            children: a.map((l) => {
              const s = l.icon;
              return d.jsxs(
                gn,
                {
                  className:
                    "group bg-white/80 backdrop-blur-sm border-2 border-blue-100 hover:border-[#023047] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3",
                  children: [
                    d.jsxs("div", {
                      className: "relative overflow-hidden",
                      children: [
                        d.jsx("div", {
                          className:
                            "absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10",
                        }),
                        d.jsx("img", {
                          src: l.image,
                          alt: l.title,
                          className:
                            "w-full h-56 object-cover group-hover:scale-125 group-hover:rotate-2 transition-all duration-700 ease-out",
                        }),
                        d.jsx("div", {
                          className: "absolute top-4 right-4 z-20",
                          children: d.jsx("div", {
                            className:
                              "p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300",
                            children: d.jsx(s, {
                              className: "w-6 h-6 text-blue-600",
                            }),
                          }),
                        }),
                        d.jsx("div", {
                          className:
                            "absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                        }),
                      ],
                    }),
                    d.jsxs(yn, {
                      className: "pb-4 px-6 pt-6",
                      children: [
                        d.jsx(vn, {
                          className:
                            "text-2xl font-bold text-gray-800 text-right mb-3 group-hover:text-[#023047] transition-colors duration-300",
                          children: l.title,
                        }),
                        d.jsx(S2, {
                          className:
                            "text-gray-600 text-right text-base leading-relaxed",
                          children: l.description,
                        }),
                      ],
                    }),
                    d.jsx(xn, {
                      className: "px-6 pb-6",
                      children: d.jsx("div", {
                        className: "flex flex-wrap gap-2 justify-end",
                        children: l.features.map((o, c) =>
                          d.jsx(
                            xg,
                            {
                              className:
                                "bg-[#149c8c] text-white p-2 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-md",
                              children: o,
                            },
                            c
                          )
                        ),
                      }),
                    }),
                  ],
                },
                l.id
              );
            }),
          }),
          d.jsxs("div", {
            className:
              "text-center bg-[#149c8c] rounded-3xl p-12 text-white shadow-2xl",
            children: [
              d.jsx("h2", {
                className: "text-3xl font-bold mb-4",
                children: "ابدأ رحلة طفلك التعليمية معنا اليوم",
              }),
              d.jsx("p", {
                className: "text-xl mb-8 opacity-90",
                children:
                  "انضم إلى عائلة حضانتنا واكتشف الفرق في رعاية وتعليم طفلك",
              }),
              d.jsxs("div", {
                className: "flex flex-col sm:flex-row gap-4 justify-center",
                children: [
                  d.jsx("button", {
                    className:
                      "bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl",
                    children: "احجز زيارة مجانية",
                  }),
                  d.jsx("button", {
                    className:
                      "border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300",
                    children: "تواصل معنا",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  Yc = Y.createContext({});
function Xc(a) {
  const l = Y.useRef(null);
  return l.current === null && (l.current = a()), l.current;
}
const Zc = typeof window < "u",
  bg = Zc ? Y.useLayoutEffect : Y.useEffect,
  Nr = Y.createContext(null);
function Kc(a, l) {
  a.indexOf(l) === -1 && a.push(l);
}
function Qc(a, l) {
  const s = a.indexOf(l);
  s > -1 && a.splice(s, 1);
}
const bn = (a, l, s) => (s > l ? l : s < a ? a : s);
let Pc = () => {};
const Sn = {},
  Sg = (a) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a);
function Tg(a) {
  return typeof a == "object" && a !== null;
}
const jg = (a) => /^0[^.\s]+$/u.test(a);
function Jc(a) {
  let l;
  return () => (l === void 0 && (l = a()), l);
}
const Le = (a) => a,
  V2 = (a, l) => (s) => l(a(s)),
  Xl = (...a) => a.reduce(V2),
  Bl = (a, l, s) => {
    const o = l - a;
    return o === 0 ? 1 : (s - a) / o;
  };
class Fc {
  constructor() {
    this.subscriptions = [];
  }
  add(l) {
    return Kc(this.subscriptions, l), () => Qc(this.subscriptions, l);
  }
  notify(l, s, o) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1) this.subscriptions[0](l, s, o);
      else
        for (let h = 0; h < c; h++) {
          const f = this.subscriptions[h];
          f && f(l, s, o);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Fe = (a) => a * 1e3,
  $e = (a) => a / 1e3;
function Ag(a, l) {
  return l ? a * (1e3 / l) : 0;
}
const Ng = (a, l, s) =>
    (((1 - 3 * s + 3 * l) * a + (3 * s - 6 * l)) * a + 3 * l) * a,
  U2 = 1e-7,
  k2 = 12;
function B2(a, l, s, o, c) {
  let h,
    f,
    p = 0;
  do (f = l + (s - l) / 2), (h = Ng(f, o, c) - a), h > 0 ? (s = f) : (l = f);
  while (Math.abs(h) > U2 && ++p < k2);
  return f;
}
function Zl(a, l, s, o) {
  if (a === l && s === o) return Le;
  const c = (h) => B2(h, 0, 1, a, s);
  return (h) => (h === 0 || h === 1 ? h : Ng(c(h), l, o));
}
const wg = (a) => (l) => l <= 0.5 ? a(2 * l) / 2 : (2 - a(2 * (1 - l))) / 2,
  Mg = (a) => (l) => 1 - a(1 - l),
  Eg = Zl(0.33, 1.53, 0.69, 0.99),
  $c = Mg(Eg),
  Dg = wg($c),
  Rg = (a) =>
    (a *= 2) < 1 ? 0.5 * $c(a) : 0.5 * (2 - Math.pow(2, -10 * (a - 1))),
  Wc = (a) => 1 - Math.sin(Math.acos(a)),
  Cg = Mg(Wc),
  zg = wg(Wc),
  L2 = Zl(0.42, 0, 1, 1),
  H2 = Zl(0, 0, 0.58, 1),
  Og = Zl(0.42, 0, 0.58, 1),
  q2 = (a) => Array.isArray(a) && typeof a[0] != "number",
  _g = (a) => Array.isArray(a) && typeof a[0] == "number",
  G2 = {
    linear: Le,
    easeIn: L2,
    easeInOut: Og,
    easeOut: H2,
    circIn: Wc,
    circInOut: zg,
    circOut: Cg,
    backIn: $c,
    backInOut: Dg,
    backOut: Eg,
    anticipate: Rg,
  },
  Y2 = (a) => typeof a == "string",
  Lp = (a) => {
    if (_g(a)) {
      Pc(a.length === 4);
      const [l, s, o, c] = a;
      return Zl(l, s, o, c);
    } else if (Y2(a)) return G2[a];
    return a;
  },
  cr = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function X2(a, l) {
  let s = new Set(),
    o = new Set(),
    c = !1,
    h = !1;
  const f = new WeakSet();
  let p = { delta: 0, timestamp: 0, isProcessing: !1 };
  function y(v) {
    f.has(v) && (g.schedule(v), a()), v(p);
  }
  const g = {
    schedule: (v, b = !1, S = !1) => {
      const z = S && c ? s : o;
      return b && f.add(v), z.has(v) || z.add(v), v;
    },
    cancel: (v) => {
      o.delete(v), f.delete(v);
    },
    process: (v) => {
      if (((p = v), c)) {
        h = !0;
        return;
      }
      (c = !0),
        ([s, o] = [o, s]),
        s.forEach(y),
        s.clear(),
        (c = !1),
        h && ((h = !1), g.process(v));
    },
  };
  return g;
}
const Z2 = 40;
function Vg(a, l) {
  let s = !1,
    o = !0;
  const c = { delta: 0, timestamp: 0, isProcessing: !1 },
    h = () => (s = !0),
    f = cr.reduce((Q, et) => ((Q[et] = X2(h)), Q), {}),
    {
      setup: p,
      read: y,
      resolveKeyframes: g,
      preUpdate: v,
      update: b,
      preRender: S,
      render: E,
      postRender: z,
    } = f,
    U = () => {
      const Q = Sn.useManualTiming ? c.timestamp : performance.now();
      (s = !1),
        Sn.useManualTiming ||
          (c.delta = o ? 1e3 / 60 : Math.max(Math.min(Q - c.timestamp, Z2), 1)),
        (c.timestamp = Q),
        (c.isProcessing = !0),
        p.process(c),
        y.process(c),
        g.process(c),
        v.process(c),
        b.process(c),
        S.process(c),
        E.process(c),
        z.process(c),
        (c.isProcessing = !1),
        s && l && ((o = !1), a(U));
    },
    Z = () => {
      (s = !0), (o = !0), c.isProcessing || a(U);
    };
  return {
    schedule: cr.reduce((Q, et) => {
      const G = f[et];
      return (
        (Q[et] = (I, nt = !1, L = !1) => (s || Z(), G.schedule(I, nt, L))), Q
      );
    }, {}),
    cancel: (Q) => {
      for (let et = 0; et < cr.length; et++) f[cr[et]].cancel(Q);
    },
    state: c,
    steps: f,
  };
}
const {
  schedule: _t,
  cancel: na,
  state: ae,
  steps: Wu,
} = Vg(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Le, !0);
let mr;
function K2() {
  mr = void 0;
}
const ge = {
    now: () => (
      mr === void 0 &&
        ge.set(
          ae.isProcessing || Sn.useManualTiming
            ? ae.timestamp
            : performance.now()
        ),
      mr
    ),
    set: (a) => {
      (mr = a), queueMicrotask(K2);
    },
  },
  Ug = (a) => (l) => typeof l == "string" && l.startsWith(a),
  Ic = Ug("--"),
  Q2 = Ug("var(--"),
  tf = (a) => (Q2(a) ? P2.test(a.split("/*")[0].trim()) : !1),
  P2 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Ei = {
    test: (a) => typeof a == "number",
    parse: parseFloat,
    transform: (a) => a,
  },
  Ll = { ...Ei, transform: (a) => bn(0, 1, a) },
  fr = { ...Ei, default: 1 },
  Ol = (a) => Math.round(a * 1e5) / 1e5,
  ef = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function J2(a) {
  return a == null;
}
const F2 =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  nf = (a, l) => (s) =>
    !!(
      (typeof s == "string" && F2.test(s) && s.startsWith(a)) ||
      (l && !J2(s) && Object.prototype.hasOwnProperty.call(s, l))
    ),
  kg = (a, l, s) => (o) => {
    if (typeof o != "string") return o;
    const [c, h, f, p] = o.match(ef);
    return {
      [a]: parseFloat(c),
      [l]: parseFloat(h),
      [s]: parseFloat(f),
      alpha: p !== void 0 ? parseFloat(p) : 1,
    };
  },
  $2 = (a) => bn(0, 255, a),
  Iu = { ...Ei, transform: (a) => Math.round($2(a)) },
  wa = {
    test: nf("rgb", "red"),
    parse: kg("red", "green", "blue"),
    transform: ({ red: a, green: l, blue: s, alpha: o = 1 }) =>
      "rgba(" +
      Iu.transform(a) +
      ", " +
      Iu.transform(l) +
      ", " +
      Iu.transform(s) +
      ", " +
      Ol(Ll.transform(o)) +
      ")",
  };
function W2(a) {
  let l = "",
    s = "",
    o = "",
    c = "";
  return (
    a.length > 5
      ? ((l = a.substring(1, 3)),
        (s = a.substring(3, 5)),
        (o = a.substring(5, 7)),
        (c = a.substring(7, 9)))
      : ((l = a.substring(1, 2)),
        (s = a.substring(2, 3)),
        (o = a.substring(3, 4)),
        (c = a.substring(4, 5)),
        (l += l),
        (s += s),
        (o += o),
        (c += c)),
    {
      red: parseInt(l, 16),
      green: parseInt(s, 16),
      blue: parseInt(o, 16),
      alpha: c ? parseInt(c, 16) / 255 : 1,
    }
  );
}
const vc = { test: nf("#"), parse: W2, transform: wa.transform },
  Kl = (a) => ({
    test: (l) =>
      typeof l == "string" && l.endsWith(a) && l.split(" ").length === 1,
    parse: parseFloat,
    transform: (l) => `${l}${a}`,
  }),
  In = Kl("deg"),
  We = Kl("%"),
  st = Kl("px"),
  I2 = Kl("vh"),
  tS = Kl("vw"),
  Hp = {
    ...We,
    parse: (a) => We.parse(a) / 100,
    transform: (a) => We.transform(a * 100),
  },
  yi = {
    test: nf("hsl", "hue"),
    parse: kg("hue", "saturation", "lightness"),
    transform: ({ hue: a, saturation: l, lightness: s, alpha: o = 1 }) =>
      "hsla(" +
      Math.round(a) +
      ", " +
      We.transform(Ol(l)) +
      ", " +
      We.transform(Ol(s)) +
      ", " +
      Ol(Ll.transform(o)) +
      ")",
  },
  Kt = {
    test: (a) => wa.test(a) || vc.test(a) || yi.test(a),
    parse: (a) =>
      wa.test(a) ? wa.parse(a) : yi.test(a) ? yi.parse(a) : vc.parse(a),
    transform: (a) =>
      typeof a == "string"
        ? a
        : a.hasOwnProperty("red")
        ? wa.transform(a)
        : yi.transform(a),
    getAnimatableNone: (a) => {
      const l = Kt.parse(a);
      return (l.alpha = 0), Kt.transform(l);
    },
  },
  eS =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function nS(a) {
  var l, s;
  return (
    isNaN(a) &&
    typeof a == "string" &&
    (((l = a.match(ef)) == null ? void 0 : l.length) || 0) +
      (((s = a.match(eS)) == null ? void 0 : s.length) || 0) >
      0
  );
}
const Bg = "number",
  Lg = "color",
  aS = "var",
  iS = "var(",
  qp = "${}",
  lS =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Hl(a) {
  const l = a.toString(),
    s = [],
    o = { color: [], number: [], var: [] },
    c = [];
  let h = 0;
  const p = l
    .replace(
      lS,
      (y) => (
        Kt.test(y)
          ? (o.color.push(h), c.push(Lg), s.push(Kt.parse(y)))
          : y.startsWith(iS)
          ? (o.var.push(h), c.push(aS), s.push(y))
          : (o.number.push(h), c.push(Bg), s.push(parseFloat(y))),
        ++h,
        qp
      )
    )
    .split(qp);
  return { values: s, split: p, indexes: o, types: c };
}
function Hg(a) {
  return Hl(a).values;
}
function qg(a) {
  const { split: l, types: s } = Hl(a),
    o = l.length;
  return (c) => {
    let h = "";
    for (let f = 0; f < o; f++)
      if (((h += l[f]), c[f] !== void 0)) {
        const p = s[f];
        p === Bg
          ? (h += Ol(c[f]))
          : p === Lg
          ? (h += Kt.transform(c[f]))
          : (h += c[f]);
      }
    return h;
  };
}
const sS = (a) =>
  typeof a == "number" ? 0 : Kt.test(a) ? Kt.getAnimatableNone(a) : a;
function rS(a) {
  const l = Hg(a);
  return qg(a)(l.map(sS));
}
const aa = {
  test: nS,
  parse: Hg,
  createTransformer: qg,
  getAnimatableNone: rS,
};
function tc(a, l, s) {
  return (
    s < 0 && (s += 1),
    s > 1 && (s -= 1),
    s < 1 / 6
      ? a + (l - a) * 6 * s
      : s < 1 / 2
      ? l
      : s < 2 / 3
      ? a + (l - a) * (2 / 3 - s) * 6
      : a
  );
}
function oS({ hue: a, saturation: l, lightness: s, alpha: o }) {
  (a /= 360), (l /= 100), (s /= 100);
  let c = 0,
    h = 0,
    f = 0;
  if (!l) c = h = f = s;
  else {
    const p = s < 0.5 ? s * (1 + l) : s + l - s * l,
      y = 2 * s - p;
    (c = tc(y, p, a + 1 / 3)), (h = tc(y, p, a)), (f = tc(y, p, a - 1 / 3));
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(h * 255),
    blue: Math.round(f * 255),
    alpha: o,
  };
}
function br(a, l) {
  return (s) => (s > 0 ? l : a);
}
const Ut = (a, l, s) => a + (l - a) * s,
  ec = (a, l, s) => {
    const o = a * a,
      c = s * (l * l - o) + o;
    return c < 0 ? 0 : Math.sqrt(c);
  },
  uS = [vc, wa, yi],
  cS = (a) => uS.find((l) => l.test(a));
function Gp(a) {
  const l = cS(a);
  if (!l) return !1;
  let s = l.parse(a);
  return l === yi && (s = oS(s)), s;
}
const Yp = (a, l) => {
    const s = Gp(a),
      o = Gp(l);
    if (!s || !o) return br(a, l);
    const c = { ...s };
    return (h) => (
      (c.red = ec(s.red, o.red, h)),
      (c.green = ec(s.green, o.green, h)),
      (c.blue = ec(s.blue, o.blue, h)),
      (c.alpha = Ut(s.alpha, o.alpha, h)),
      wa.transform(c)
    );
  },
  xc = new Set(["none", "hidden"]);
function fS(a, l) {
  return xc.has(a) ? (s) => (s <= 0 ? a : l) : (s) => (s >= 1 ? l : a);
}
function dS(a, l) {
  return (s) => Ut(a, l, s);
}
function af(a) {
  return typeof a == "number"
    ? dS
    : typeof a == "string"
    ? tf(a)
      ? br
      : Kt.test(a)
      ? Yp
      : pS
    : Array.isArray(a)
    ? Gg
    : typeof a == "object"
    ? Kt.test(a)
      ? Yp
      : hS
    : br;
}
function Gg(a, l) {
  const s = [...a],
    o = s.length,
    c = a.map((h, f) => af(h)(h, l[f]));
  return (h) => {
    for (let f = 0; f < o; f++) s[f] = c[f](h);
    return s;
  };
}
function hS(a, l) {
  const s = { ...a, ...l },
    o = {};
  for (const c in s)
    a[c] !== void 0 && l[c] !== void 0 && (o[c] = af(a[c])(a[c], l[c]));
  return (c) => {
    for (const h in o) s[h] = o[h](c);
    return s;
  };
}
function mS(a, l) {
  const s = [],
    o = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < l.values.length; c++) {
    const h = l.types[c],
      f = a.indexes[h][o[h]],
      p = a.values[f] ?? 0;
    (s[c] = p), o[h]++;
  }
  return s;
}
const pS = (a, l) => {
  const s = aa.createTransformer(l),
    o = Hl(a),
    c = Hl(l);
  return o.indexes.var.length === c.indexes.var.length &&
    o.indexes.color.length === c.indexes.color.length &&
    o.indexes.number.length >= c.indexes.number.length
    ? (xc.has(a) && !c.values.length) || (xc.has(l) && !o.values.length)
      ? fS(a, l)
      : Xl(Gg(mS(o, c), c.values), s)
    : br(a, l);
};
function Yg(a, l, s) {
  return typeof a == "number" && typeof l == "number" && typeof s == "number"
    ? Ut(a, l, s)
    : af(a)(a, l);
}
const gS = (a) => {
    const l = ({ timestamp: s }) => a(s);
    return {
      start: (s = !0) => _t.update(l, s),
      stop: () => na(l),
      now: () => (ae.isProcessing ? ae.timestamp : ge.now()),
    };
  },
  Xg = (a, l, s = 10) => {
    let o = "";
    const c = Math.max(Math.round(l / s), 2);
    for (let h = 0; h < c; h++)
      o += Math.round(a(h / (c - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${o.substring(0, o.length - 2)})`;
  },
  Sr = 2e4;
function lf(a) {
  let l = 0;
  const s = 50;
  let o = a.next(l);
  for (; !o.done && l < Sr; ) (l += s), (o = a.next(l));
  return l >= Sr ? 1 / 0 : l;
}
function yS(a, l = 100, s) {
  const o = s({ ...a, keyframes: [0, l] }),
    c = Math.min(lf(o), Sr);
  return {
    type: "keyframes",
    ease: (h) => o.next(c * h).value / l,
    duration: $e(c),
  };
}
const vS = 5;
function Zg(a, l, s) {
  const o = Math.max(l - vS, 0);
  return Ag(s - a(o), l - o);
}
const Lt = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  nc = 0.001;
function xS({
  duration: a = Lt.duration,
  bounce: l = Lt.bounce,
  velocity: s = Lt.velocity,
  mass: o = Lt.mass,
}) {
  let c,
    h,
    f = 1 - l;
  (f = bn(Lt.minDamping, Lt.maxDamping, f)),
    (a = bn(Lt.minDuration, Lt.maxDuration, $e(a))),
    f < 1
      ? ((c = (g) => {
          const v = g * f,
            b = v * a,
            S = v - s,
            E = bc(g, f),
            z = Math.exp(-b);
          return nc - (S / E) * z;
        }),
        (h = (g) => {
          const b = g * f * a,
            S = b * s + s,
            E = Math.pow(f, 2) * Math.pow(g, 2) * a,
            z = Math.exp(-b),
            U = bc(Math.pow(g, 2), f);
          return ((-c(g) + nc > 0 ? -1 : 1) * ((S - E) * z)) / U;
        }))
      : ((c = (g) => {
          const v = Math.exp(-g * a),
            b = (g - s) * a + 1;
          return -nc + v * b;
        }),
        (h = (g) => {
          const v = Math.exp(-g * a),
            b = (s - g) * (a * a);
          return v * b;
        }));
  const p = 5 / a,
    y = SS(c, h, p);
  if (((a = Fe(a)), isNaN(y)))
    return { stiffness: Lt.stiffness, damping: Lt.damping, duration: a };
  {
    const g = Math.pow(y, 2) * o;
    return { stiffness: g, damping: f * 2 * Math.sqrt(o * g), duration: a };
  }
}
const bS = 12;
function SS(a, l, s) {
  let o = s;
  for (let c = 1; c < bS; c++) o = o - a(o) / l(o);
  return o;
}
function bc(a, l) {
  return a * Math.sqrt(1 - l * l);
}
const TS = ["duration", "bounce"],
  jS = ["stiffness", "damping", "mass"];
function Xp(a, l) {
  return l.some((s) => a[s] !== void 0);
}
function AS(a) {
  let l = {
    velocity: Lt.velocity,
    stiffness: Lt.stiffness,
    damping: Lt.damping,
    mass: Lt.mass,
    isResolvedFromDuration: !1,
    ...a,
  };
  if (!Xp(a, jS) && Xp(a, TS))
    if (a.visualDuration) {
      const s = a.visualDuration,
        o = (2 * Math.PI) / (s * 1.2),
        c = o * o,
        h = 2 * bn(0.05, 1, 1 - (a.bounce || 0)) * Math.sqrt(c);
      l = { ...l, mass: Lt.mass, stiffness: c, damping: h };
    } else {
      const s = xS(a);
      (l = { ...l, ...s, mass: Lt.mass }), (l.isResolvedFromDuration = !0);
    }
  return l;
}
function Tr(a = Lt.visualDuration, l = Lt.bounce) {
  const s =
    typeof a != "object"
      ? { visualDuration: a, keyframes: [0, 1], bounce: l }
      : a;
  let { restSpeed: o, restDelta: c } = s;
  const h = s.keyframes[0],
    f = s.keyframes[s.keyframes.length - 1],
    p = { done: !1, value: h },
    {
      stiffness: y,
      damping: g,
      mass: v,
      duration: b,
      velocity: S,
      isResolvedFromDuration: E,
    } = AS({ ...s, velocity: -$e(s.velocity || 0) }),
    z = S || 0,
    U = g / (2 * Math.sqrt(y * v)),
    Z = f - h,
    X = $e(Math.sqrt(y / v)),
    q = Math.abs(Z) < 5;
  o || (o = q ? Lt.restSpeed.granular : Lt.restSpeed.default),
    c || (c = q ? Lt.restDelta.granular : Lt.restDelta.default);
  let Q;
  if (U < 1) {
    const G = bc(X, U);
    Q = (I) => {
      const nt = Math.exp(-U * X * I);
      return (
        f - nt * (((z + U * X * Z) / G) * Math.sin(G * I) + Z * Math.cos(G * I))
      );
    };
  } else if (U === 1) Q = (G) => f - Math.exp(-X * G) * (Z + (z + X * Z) * G);
  else {
    const G = X * Math.sqrt(U * U - 1);
    Q = (I) => {
      const nt = Math.exp(-U * X * I),
        L = Math.min(G * I, 300);
      return (
        f - (nt * ((z + U * X * Z) * Math.sinh(L) + G * Z * Math.cosh(L))) / G
      );
    };
  }
  const et = {
    calculatedDuration: (E && b) || null,
    next: (G) => {
      const I = Q(G);
      if (E) p.done = G >= b;
      else {
        let nt = G === 0 ? z : 0;
        U < 1 && (nt = G === 0 ? Fe(z) : Zg(Q, G, I));
        const L = Math.abs(nt) <= o,
          ut = Math.abs(f - I) <= c;
        p.done = L && ut;
      }
      return (p.value = p.done ? f : I), p;
    },
    toString: () => {
      const G = Math.min(lf(et), Sr),
        I = Xg((nt) => et.next(G * nt).value, G, 30);
      return G + "ms " + I;
    },
    toTransition: () => {},
  };
  return et;
}
Tr.applyToOptions = (a) => {
  const l = yS(a, 100, Tr);
  return (
    (a.ease = l.ease), (a.duration = Fe(l.duration)), (a.type = "keyframes"), a
  );
};
function Sc({
  keyframes: a,
  velocity: l = 0,
  power: s = 0.8,
  timeConstant: o = 325,
  bounceDamping: c = 10,
  bounceStiffness: h = 500,
  modifyTarget: f,
  min: p,
  max: y,
  restDelta: g = 0.5,
  restSpeed: v,
}) {
  const b = a[0],
    S = { done: !1, value: b },
    E = (L) => (p !== void 0 && L < p) || (y !== void 0 && L > y),
    z = (L) =>
      p === void 0
        ? y
        : y === void 0 || Math.abs(p - L) < Math.abs(y - L)
        ? p
        : y;
  let U = s * l;
  const Z = b + U,
    X = f === void 0 ? Z : f(Z);
  X !== Z && (U = X - b);
  const q = (L) => -U * Math.exp(-L / o),
    Q = (L) => X + q(L),
    et = (L) => {
      const ut = q(L),
        Ct = Q(L);
      (S.done = Math.abs(ut) <= g), (S.value = S.done ? X : Ct);
    };
  let G, I;
  const nt = (L) => {
    E(S.value) &&
      ((G = L),
      (I = Tr({
        keyframes: [S.value, z(S.value)],
        velocity: Zg(Q, L, S.value),
        damping: c,
        stiffness: h,
        restDelta: g,
        restSpeed: v,
      })));
  };
  return (
    nt(0),
    {
      calculatedDuration: null,
      next: (L) => {
        let ut = !1;
        return (
          !I && G === void 0 && ((ut = !0), et(L), nt(L)),
          G !== void 0 && L >= G ? I.next(L - G) : (!ut && et(L), S)
        );
      },
    }
  );
}
function NS(a, l, s) {
  const o = [],
    c = s || Sn.mix || Yg,
    h = a.length - 1;
  for (let f = 0; f < h; f++) {
    let p = c(a[f], a[f + 1]);
    if (l) {
      const y = Array.isArray(l) ? l[f] || Le : l;
      p = Xl(y, p);
    }
    o.push(p);
  }
  return o;
}
function wS(a, l, { clamp: s = !0, ease: o, mixer: c } = {}) {
  const h = a.length;
  if ((Pc(h === l.length), h === 1)) return () => l[0];
  if (h === 2 && l[0] === l[1]) return () => l[1];
  const f = a[0] === a[1];
  a[0] > a[h - 1] && ((a = [...a].reverse()), (l = [...l].reverse()));
  const p = NS(l, o, c),
    y = p.length,
    g = (v) => {
      if (f && v < a[0]) return l[0];
      let b = 0;
      if (y > 1) for (; b < a.length - 2 && !(v < a[b + 1]); b++);
      const S = Bl(a[b], a[b + 1], v);
      return p[b](S);
    };
  return s ? (v) => g(bn(a[0], a[h - 1], v)) : g;
}
function MS(a, l) {
  const s = a[a.length - 1];
  for (let o = 1; o <= l; o++) {
    const c = Bl(0, l, o);
    a.push(Ut(s, 1, c));
  }
}
function ES(a) {
  const l = [0];
  return MS(l, a.length - 1), l;
}
function DS(a, l) {
  return a.map((s) => s * l);
}
function RS(a, l) {
  return a.map(() => l || Og).splice(0, a.length - 1);
}
function _l({
  duration: a = 300,
  keyframes: l,
  times: s,
  ease: o = "easeInOut",
}) {
  const c = q2(o) ? o.map(Lp) : Lp(o),
    h = { done: !1, value: l[0] },
    f = DS(s && s.length === l.length ? s : ES(l), a),
    p = wS(f, l, { ease: Array.isArray(c) ? c : RS(l, c) });
  return {
    calculatedDuration: a,
    next: (y) => ((h.value = p(y)), (h.done = y >= a), h),
  };
}
const CS = (a) => a !== null;
function sf(a, { repeat: l, repeatType: s = "loop" }, o, c = 1) {
  const h = a.filter(CS),
    p = c < 0 || (l && s !== "loop" && l % 2 === 1) ? 0 : h.length - 1;
  return !p || o === void 0 ? h[p] : o;
}
const zS = { decay: Sc, inertia: Sc, tween: _l, keyframes: _l, spring: Tr };
function Kg(a) {
  typeof a.type == "string" && (a.type = zS[a.type]);
}
class rf {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((l) => {
      this.resolve = l;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(l, s) {
    return this.finished.then(l, s);
  }
}
const OS = (a) => a / 100;
class of extends rf {
  constructor(l) {
    super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        var o, c;
        const { motionValue: s } = this.options;
        s && s.updatedAt !== ge.now() && this.tick(ge.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
            (this.teardown(),
            (c = (o = this.options).onStop) == null || c.call(o));
      }),
      (this.options = l),
      this.initAnimation(),
      this.play(),
      l.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: l } = this;
    Kg(l);
    const {
      type: s = _l,
      repeat: o = 0,
      repeatDelay: c = 0,
      repeatType: h,
      velocity: f = 0,
    } = l;
    let { keyframes: p } = l;
    const y = s || _l;
    y !== _l &&
      typeof p[0] != "number" &&
      ((this.mixKeyframes = Xl(OS, Yg(p[0], p[1]))), (p = [0, 100]));
    const g = y({ ...l, keyframes: p });
    h === "mirror" &&
      (this.mirroredGenerator = y({
        ...l,
        keyframes: [...p].reverse(),
        velocity: -f,
      })),
      g.calculatedDuration === null && (g.calculatedDuration = lf(g));
    const { calculatedDuration: v } = g;
    (this.calculatedDuration = v),
      (this.resolvedDuration = v + c),
      (this.totalDuration = this.resolvedDuration * (o + 1) - c),
      (this.generator = g);
  }
  updateTime(l) {
    const s = Math.round(l - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = s);
  }
  tick(l, s = !1) {
    const {
      generator: o,
      totalDuration: c,
      mixKeyframes: h,
      mirroredGenerator: f,
      resolvedDuration: p,
      calculatedDuration: y,
    } = this;
    if (this.startTime === null) return o.next(0);
    const {
      delay: g = 0,
      keyframes: v,
      repeat: b,
      repeatType: S,
      repeatDelay: E,
      type: z,
      onUpdate: U,
      finalKeyframe: Z,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, l))
      : this.speed < 0 &&
        (this.startTime = Math.min(l - c / this.speed, this.startTime)),
      s ? (this.currentTime = l) : this.updateTime(l);
    const X = this.currentTime - g * (this.playbackSpeed >= 0 ? 1 : -1),
      q = this.playbackSpeed >= 0 ? X < 0 : X > c;
    (this.currentTime = Math.max(X, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let Q = this.currentTime,
      et = o;
    if (b) {
      const L = Math.min(this.currentTime, c) / p;
      let ut = Math.floor(L),
        Ct = L % 1;
      !Ct && L >= 1 && (Ct = 1),
        Ct === 1 && ut--,
        (ut = Math.min(ut, b + 1)),
        !!(ut % 2) &&
          (S === "reverse"
            ? ((Ct = 1 - Ct), E && (Ct -= E / p))
            : S === "mirror" && (et = f)),
        (Q = bn(0, 1, Ct) * p);
    }
    const G = q ? { done: !1, value: v[0] } : et.next(Q);
    h && (G.value = h(G.value));
    let { done: I } = G;
    !q &&
      y !== null &&
      (I =
        this.playbackSpeed >= 0
          ? this.currentTime >= c
          : this.currentTime <= 0);
    const nt =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && I));
    return (
      nt && z !== Sc && (G.value = sf(v, this.options, Z, this.speed)),
      U && U(G.value),
      nt && this.finish(),
      G
    );
  }
  then(l, s) {
    return this.finished.then(l, s);
  }
  get duration() {
    return $e(this.calculatedDuration);
  }
  get time() {
    return $e(this.currentTime);
  }
  set time(l) {
    var s;
    (l = Fe(l)),
      (this.currentTime = l),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = l)
        : this.driver &&
          (this.startTime = this.driver.now() - l / this.playbackSpeed),
      (s = this.driver) == null || s.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(l) {
    this.updateTime(ge.now());
    const s = this.playbackSpeed !== l;
    (this.playbackSpeed = l), s && (this.time = $e(this.currentTime));
  }
  play() {
    var c, h;
    if (this.isStopped) return;
    const { driver: l = gS, startTime: s } = this.options;
    this.driver || (this.driver = l((f) => this.tick(f))),
      (h = (c = this.options).onPlay) == null || h.call(c);
    const o = this.driver.now();
    this.state === "finished"
      ? (this.updateFinished(), (this.startTime = o))
      : this.holdTime !== null
      ? (this.startTime = o - this.holdTime)
      : this.startTime || (this.startTime = s ?? o),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    (this.state = "paused"),
      this.updateTime(ge.now()),
      (this.holdTime = this.currentTime);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    var l, s;
    this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (s = (l = this.options).onComplete) == null || s.call(l);
  }
  cancel() {
    var l, s;
    (this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (s = (l = this.options).onCancel) == null || s.call(l);
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null);
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(l) {
    return (this.startTime = 0), this.tick(l, !0);
  }
  attachTimeline(l) {
    var s;
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      (s = this.driver) == null || s.stop(),
      l.observe(this)
    );
  }
}
function _S(a) {
  for (let l = 1; l < a.length; l++) a[l] ?? (a[l] = a[l - 1]);
}
const Ma = (a) => (a * 180) / Math.PI,
  Tc = (a) => {
    const l = Ma(Math.atan2(a[1], a[0]));
    return jc(l);
  },
  VS = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (a) => (Math.abs(a[0]) + Math.abs(a[3])) / 2,
    rotate: Tc,
    rotateZ: Tc,
    skewX: (a) => Ma(Math.atan(a[1])),
    skewY: (a) => Ma(Math.atan(a[2])),
    skew: (a) => (Math.abs(a[1]) + Math.abs(a[2])) / 2,
  },
  jc = (a) => ((a = a % 360), a < 0 && (a += 360), a),
  Zp = Tc,
  Kp = (a) => Math.sqrt(a[0] * a[0] + a[1] * a[1]),
  Qp = (a) => Math.sqrt(a[4] * a[4] + a[5] * a[5]),
  US = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Kp,
    scaleY: Qp,
    scale: (a) => (Kp(a) + Qp(a)) / 2,
    rotateX: (a) => jc(Ma(Math.atan2(a[6], a[5]))),
    rotateY: (a) => jc(Ma(Math.atan2(-a[2], a[0]))),
    rotateZ: Zp,
    rotate: Zp,
    skewX: (a) => Ma(Math.atan(a[4])),
    skewY: (a) => Ma(Math.atan(a[1])),
    skew: (a) => (Math.abs(a[1]) + Math.abs(a[4])) / 2,
  };
function Ac(a) {
  return a.includes("scale") ? 1 : 0;
}
function Nc(a, l) {
  if (!a || a === "none") return Ac(l);
  const s = a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let o, c;
  if (s) (o = US), (c = s);
  else {
    const p = a.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    (o = VS), (c = p);
  }
  if (!c) return Ac(l);
  const h = o[l],
    f = c[1].split(",").map(BS);
  return typeof h == "function" ? h(f) : f[h];
}
const kS = (a, l) => {
  const { transform: s = "none" } = getComputedStyle(a);
  return Nc(s, l);
};
function BS(a) {
  return parseFloat(a.trim());
}
const Di = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Ri = new Set(Di),
  Pp = (a) => a === Ei || a === st,
  LS = new Set(["x", "y", "z"]),
  HS = Di.filter((a) => !LS.has(a));
function qS(a) {
  const l = [];
  return (
    HS.forEach((s) => {
      const o = a.getValue(s);
      o !== void 0 &&
        (l.push([s, o.get()]), o.set(s.startsWith("scale") ? 1 : 0));
    }),
    l
  );
}
const Ea = {
  width: ({ x: a }, { paddingLeft: l = "0", paddingRight: s = "0" }) =>
    a.max - a.min - parseFloat(l) - parseFloat(s),
  height: ({ y: a }, { paddingTop: l = "0", paddingBottom: s = "0" }) =>
    a.max - a.min - parseFloat(l) - parseFloat(s),
  top: (a, { top: l }) => parseFloat(l),
  left: (a, { left: l }) => parseFloat(l),
  bottom: ({ y: a }, { top: l }) => parseFloat(l) + (a.max - a.min),
  right: ({ x: a }, { left: l }) => parseFloat(l) + (a.max - a.min),
  x: (a, { transform: l }) => Nc(l, "x"),
  y: (a, { transform: l }) => Nc(l, "y"),
};
Ea.translateX = Ea.x;
Ea.translateY = Ea.y;
const Da = new Set();
let wc = !1,
  Mc = !1,
  Ec = !1;
function Qg() {
  if (Mc) {
    const a = Array.from(Da).filter((o) => o.needsMeasurement),
      l = new Set(a.map((o) => o.element)),
      s = new Map();
    l.forEach((o) => {
      const c = qS(o);
      c.length && (s.set(o, c), o.render());
    }),
      a.forEach((o) => o.measureInitialState()),
      l.forEach((o) => {
        o.render();
        const c = s.get(o);
        c &&
          c.forEach(([h, f]) => {
            var p;
            (p = o.getValue(h)) == null || p.set(f);
          });
      }),
      a.forEach((o) => o.measureEndState()),
      a.forEach((o) => {
        o.suspendedScrollY !== void 0 && window.scrollTo(0, o.suspendedScrollY);
      });
  }
  (Mc = !1), (wc = !1), Da.forEach((a) => a.complete(Ec)), Da.clear();
}
function Pg() {
  Da.forEach((a) => {
    a.readKeyframes(), a.needsMeasurement && (Mc = !0);
  });
}
function GS() {
  (Ec = !0), Pg(), Qg(), (Ec = !1);
}
class uf {
  constructor(l, s, o, c, h, f = !1) {
    (this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...l]),
      (this.onComplete = s),
      (this.name = o),
      (this.motionValue = c),
      (this.element = h),
      (this.isAsync = f);
  }
  scheduleResolve() {
    (this.state = "scheduled"),
      this.isAsync
        ? (Da.add(this),
          wc || ((wc = !0), _t.read(Pg), _t.resolveKeyframes(Qg)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: l,
      name: s,
      element: o,
      motionValue: c,
    } = this;
    if (l[0] === null) {
      const h = c == null ? void 0 : c.get(),
        f = l[l.length - 1];
      if (h !== void 0) l[0] = h;
      else if (o && s) {
        const p = o.readValue(s, f);
        p != null && (l[0] = p);
      }
      l[0] === void 0 && (l[0] = f), c && h === void 0 && c.set(l[0]);
    }
    _S(l);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(l = !1) {
    (this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, l),
      Da.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Da.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const YS = (a) => a.startsWith("--");
function XS(a, l, s) {
  YS(l) ? a.style.setProperty(l, s) : (a.style[l] = s);
}
const ZS = Jc(() => window.ScrollTimeline !== void 0),
  KS = {};
function QS(a, l) {
  const s = Jc(a);
  return () => KS[l] ?? s();
}
const Jg = QS(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  zl = ([a, l, s, o]) => `cubic-bezier(${a}, ${l}, ${s}, ${o})`,
  Jp = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: zl([0, 0.65, 0.55, 1]),
    circOut: zl([0.55, 0, 1, 0.45]),
    backIn: zl([0.31, 0.01, 0.66, -0.59]),
    backOut: zl([0.33, 1.53, 0.69, 0.99]),
  };
function Fg(a, l) {
  if (a)
    return typeof a == "function"
      ? Jg()
        ? Xg(a, l)
        : "ease-out"
      : _g(a)
      ? zl(a)
      : Array.isArray(a)
      ? a.map((s) => Fg(s, l) || Jp.easeOut)
      : Jp[a];
}
function PS(
  a,
  l,
  s,
  {
    delay: o = 0,
    duration: c = 300,
    repeat: h = 0,
    repeatType: f = "loop",
    ease: p = "easeOut",
    times: y,
  } = {},
  g = void 0
) {
  const v = { [l]: s };
  y && (v.offset = y);
  const b = Fg(p, c);
  Array.isArray(b) && (v.easing = b);
  const S = {
    delay: o,
    duration: c,
    easing: Array.isArray(b) ? "linear" : b,
    fill: "both",
    iterations: h + 1,
    direction: f === "reverse" ? "alternate" : "normal",
  };
  return g && (S.pseudoElement = g), a.animate(v, S);
}
function $g(a) {
  return typeof a == "function" && "applyToOptions" in a;
}
function JS({ type: a, ...l }) {
  return $g(a) && Jg()
    ? a.applyToOptions(l)
    : (l.duration ?? (l.duration = 300), l.ease ?? (l.ease = "easeOut"), l);
}
class FS extends rf {
  constructor(l) {
    if ((super(), (this.finishedTime = null), (this.isStopped = !1), !l))
      return;
    const {
      element: s,
      name: o,
      keyframes: c,
      pseudoElement: h,
      allowFlatten: f = !1,
      finalKeyframe: p,
      onComplete: y,
    } = l;
    (this.isPseudoElement = !!h),
      (this.allowFlatten = f),
      (this.options = l),
      Pc(typeof l.type != "string");
    const g = JS(l);
    (this.animation = PS(s, o, c, g, h)),
      g.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !h)) {
          const v = sf(c, this.options, p, this.speed);
          this.updateMotionValue ? this.updateMotionValue(v) : XS(s, o, v),
            this.animation.cancel();
        }
        y == null || y(), this.notifyFinished();
      });
  }
  play() {
    this.isStopped ||
      (this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var l, s;
    (s = (l = this.animation).finish) == null || s.call(l);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: l } = this;
    l === "idle" ||
      l === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var l, s;
    this.isPseudoElement ||
      (s = (l = this.animation).commitStyles) == null ||
      s.call(l);
  }
  get duration() {
    var s, o;
    const l =
      ((o =
        (s = this.animation.effect) == null ? void 0 : s.getComputedTiming) ==
      null
        ? void 0
        : o.call(s).duration) || 0;
    return $e(Number(l));
  }
  get time() {
    return $e(Number(this.animation.currentTime) || 0);
  }
  set time(l) {
    (this.finishedTime = null), (this.animation.currentTime = Fe(l));
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(l) {
    l < 0 && (this.finishedTime = null), (this.animation.playbackRate = l);
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(l) {
    this.animation.startTime = l;
  }
  attachTimeline({ timeline: l, observe: s }) {
    var o;
    return (
      this.allowFlatten &&
        ((o = this.animation.effect) == null ||
          o.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      l && ZS() ? ((this.animation.timeline = l), Le) : s(this)
    );
  }
}
const Wg = { anticipate: Rg, backInOut: Dg, circInOut: zg };
function $S(a) {
  return a in Wg;
}
function WS(a) {
  typeof a.ease == "string" && $S(a.ease) && (a.ease = Wg[a.ease]);
}
const Fp = 10;
class IS extends FS {
  constructor(l) {
    WS(l),
      Kg(l),
      super(l),
      l.startTime && (this.startTime = l.startTime),
      (this.options = l);
  }
  updateMotionValue(l) {
    const {
      motionValue: s,
      onUpdate: o,
      onComplete: c,
      element: h,
      ...f
    } = this.options;
    if (!s) return;
    if (l !== void 0) {
      s.set(l);
      return;
    }
    const p = new of({ ...f, autoplay: !1 }),
      y = Fe(this.finishedTime ?? this.time);
    s.setWithVelocity(p.sample(y - Fp).value, p.sample(y).value, Fp), p.stop();
  }
}
const $p = (a, l) =>
  l === "zIndex"
    ? !1
    : !!(
        typeof a == "number" ||
        Array.isArray(a) ||
        (typeof a == "string" &&
          (aa.test(a) || a === "0") &&
          !a.startsWith("url("))
      );
function t3(a) {
  const l = a[0];
  if (a.length === 1) return !0;
  for (let s = 0; s < a.length; s++) if (a[s] !== l) return !0;
}
function e3(a, l, s, o) {
  const c = a[0];
  if (c === null) return !1;
  if (l === "display" || l === "visibility") return !0;
  const h = a[a.length - 1],
    f = $p(c, l),
    p = $p(h, l);
  return !f || !p ? !1 : t3(a) || ((s === "spring" || $g(s)) && o);
}
function Dc(a) {
  (a.duration = 0), a.type;
}
const n3 = new Set(["opacity", "clipPath", "filter", "transform"]),
  a3 = Jc(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function i3(a) {
  var v;
  const {
    motionValue: l,
    name: s,
    repeatDelay: o,
    repeatType: c,
    damping: h,
    type: f,
  } = a;
  if (
    !(
      ((v = l == null ? void 0 : l.owner) == null
        ? void 0
        : v.current) instanceof HTMLElement
    )
  )
    return !1;
  const { onUpdate: y, transformTemplate: g } = l.owner.getProps();
  return (
    a3() &&
    s &&
    n3.has(s) &&
    (s !== "transform" || !g) &&
    !y &&
    !o &&
    c !== "mirror" &&
    h !== 0 &&
    f !== "inertia"
  );
}
const l3 = 40;
class s3 extends rf {
  constructor({
    autoplay: l = !0,
    delay: s = 0,
    type: o = "keyframes",
    repeat: c = 0,
    repeatDelay: h = 0,
    repeatType: f = "loop",
    keyframes: p,
    name: y,
    motionValue: g,
    element: v,
    ...b
  }) {
    var z;
    super(),
      (this.stop = () => {
        var U, Z;
        this._animation &&
          (this._animation.stop(),
          (U = this.stopTimeline) == null || U.call(this)),
          (Z = this.keyframeResolver) == null || Z.cancel();
      }),
      (this.createdAt = ge.now());
    const S = {
        autoplay: l,
        delay: s,
        type: o,
        repeat: c,
        repeatDelay: h,
        repeatType: f,
        name: y,
        motionValue: g,
        element: v,
        ...b,
      },
      E = (v == null ? void 0 : v.KeyframeResolver) || uf;
    (this.keyframeResolver = new E(
      p,
      (U, Z, X) => this.onKeyframesResolved(U, Z, S, !X),
      y,
      g,
      v
    )),
      (z = this.keyframeResolver) == null || z.scheduleResolve();
  }
  onKeyframesResolved(l, s, o, c) {
    this.keyframeResolver = void 0;
    const {
      name: h,
      type: f,
      velocity: p,
      delay: y,
      isHandoff: g,
      onUpdate: v,
    } = o;
    (this.resolvedAt = ge.now()),
      e3(l, h, f, p) ||
        ((Sn.instantAnimations || !y) && (v == null || v(sf(l, o, s))),
        (l[0] = l[l.length - 1]),
        Dc(o),
        (o.repeat = 0));
    const S = {
        startTime: c
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > l3
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: s,
        ...o,
        keyframes: l,
      },
      E =
        !g && i3(S)
          ? new IS({ ...S, element: S.motionValue.owner.current })
          : new of(S);
    E.finished.then(() => this.notifyFinished()).catch(Le),
      this.pendingTimeline &&
        ((this.stopTimeline = E.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = E);
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(l, s) {
    return this.finished.finally(l).then(() => {});
  }
  get animation() {
    var l;
    return (
      this._animation ||
        ((l = this.keyframeResolver) == null || l.resume(), GS()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get time() {
    return this.animation.time;
  }
  set time(l) {
    this.animation.time = l;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(l) {
    this.animation.speed = l;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(l) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(l))
        : (this.pendingTimeline = l),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var l;
    this._animation && this.animation.cancel(),
      (l = this.keyframeResolver) == null || l.cancel();
  }
}
const r3 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function o3(a) {
  const l = r3.exec(a);
  if (!l) return [,];
  const [, s, o, c] = l;
  return [`--${s ?? o}`, c];
}
function Ig(a, l, s = 1) {
  const [o, c] = o3(a);
  if (!o) return;
  const h = window.getComputedStyle(l).getPropertyValue(o);
  if (h) {
    const f = h.trim();
    return Sg(f) ? parseFloat(f) : f;
  }
  return tf(c) ? Ig(c, l, s + 1) : c;
}
function cf(a, l) {
  return (a == null ? void 0 : a[l]) ?? (a == null ? void 0 : a.default) ?? a;
}
const ty = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...Di,
  ]),
  u3 = { test: (a) => a === "auto", parse: (a) => a },
  ey = (a) => (l) => l.test(a),
  ny = [Ei, st, We, In, tS, I2, u3],
  Wp = (a) => ny.find(ey(a));
function c3(a) {
  return typeof a == "number"
    ? a === 0
    : a !== null
    ? a === "none" || a === "0" || jg(a)
    : !0;
}
const f3 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function d3(a) {
  const [l, s] = a.slice(0, -1).split("(");
  if (l === "drop-shadow") return a;
  const [o] = s.match(ef) || [];
  if (!o) return a;
  const c = s.replace(o, "");
  let h = f3.has(l) ? 1 : 0;
  return o !== s && (h *= 100), l + "(" + h + c + ")";
}
const h3 = /\b([a-z-]*)\(.*?\)/gu,
  Rc = {
    ...aa,
    getAnimatableNone: (a) => {
      const l = a.match(h3);
      return l ? l.map(d3).join(" ") : a;
    },
  },
  Ip = { ...Ei, transform: Math.round },
  m3 = {
    rotate: In,
    rotateX: In,
    rotateY: In,
    rotateZ: In,
    scale: fr,
    scaleX: fr,
    scaleY: fr,
    scaleZ: fr,
    skew: In,
    skewX: In,
    skewY: In,
    distance: st,
    translateX: st,
    translateY: st,
    translateZ: st,
    x: st,
    y: st,
    z: st,
    perspective: st,
    transformPerspective: st,
    opacity: Ll,
    originX: Hp,
    originY: Hp,
    originZ: st,
  },
  ff = {
    borderWidth: st,
    borderTopWidth: st,
    borderRightWidth: st,
    borderBottomWidth: st,
    borderLeftWidth: st,
    borderRadius: st,
    radius: st,
    borderTopLeftRadius: st,
    borderTopRightRadius: st,
    borderBottomRightRadius: st,
    borderBottomLeftRadius: st,
    width: st,
    maxWidth: st,
    height: st,
    maxHeight: st,
    top: st,
    right: st,
    bottom: st,
    left: st,
    padding: st,
    paddingTop: st,
    paddingRight: st,
    paddingBottom: st,
    paddingLeft: st,
    margin: st,
    marginTop: st,
    marginRight: st,
    marginBottom: st,
    marginLeft: st,
    backgroundPositionX: st,
    backgroundPositionY: st,
    ...m3,
    zIndex: Ip,
    fillOpacity: Ll,
    strokeOpacity: Ll,
    numOctaves: Ip,
  },
  p3 = {
    ...ff,
    color: Kt,
    backgroundColor: Kt,
    outlineColor: Kt,
    fill: Kt,
    stroke: Kt,
    borderColor: Kt,
    borderTopColor: Kt,
    borderRightColor: Kt,
    borderBottomColor: Kt,
    borderLeftColor: Kt,
    filter: Rc,
    WebkitFilter: Rc,
  },
  ay = (a) => p3[a];
function iy(a, l) {
  let s = ay(a);
  return (
    s !== Rc && (s = aa), s.getAnimatableNone ? s.getAnimatableNone(l) : void 0
  );
}
const g3 = new Set(["auto", "none", "0"]);
function y3(a, l, s) {
  let o = 0,
    c;
  for (; o < a.length && !c; ) {
    const h = a[o];
    typeof h == "string" && !g3.has(h) && Hl(h).values.length && (c = a[o]),
      o++;
  }
  if (c && s) for (const h of l) a[h] = iy(s, c);
}
class v3 extends uf {
  constructor(l, s, o, c, h) {
    super(l, s, o, c, h, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, element: s, name: o } = this;
    if (!s || !s.current) return;
    super.readKeyframes();
    for (let y = 0; y < l.length; y++) {
      let g = l[y];
      if (typeof g == "string" && ((g = g.trim()), tf(g))) {
        const v = Ig(g, s.current);
        v !== void 0 && (l[y] = v),
          y === l.length - 1 && (this.finalKeyframe = g);
      }
    }
    if ((this.resolveNoneKeyframes(), !ty.has(o) || l.length !== 2)) return;
    const [c, h] = l,
      f = Wp(c),
      p = Wp(h);
    if (f !== p)
      if (Pp(f) && Pp(p))
        for (let y = 0; y < l.length; y++) {
          const g = l[y];
          typeof g == "string" && (l[y] = parseFloat(g));
        }
      else Ea[o] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: l, name: s } = this,
      o = [];
    for (let c = 0; c < l.length; c++) (l[c] === null || c3(l[c])) && o.push(c);
    o.length && y3(l, o, s);
  }
  measureInitialState() {
    const { element: l, unresolvedKeyframes: s, name: o } = this;
    if (!l || !l.current) return;
    o === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Ea[o](
        l.measureViewportBox(),
        window.getComputedStyle(l.current)
      )),
      (s[0] = this.measuredOrigin);
    const c = s[s.length - 1];
    c !== void 0 && l.getValue(o, c).jump(c, !1);
  }
  measureEndState() {
    var p;
    const { element: l, name: s, unresolvedKeyframes: o } = this;
    if (!l || !l.current) return;
    const c = l.getValue(s);
    c && c.jump(this.measuredOrigin, !1);
    const h = o.length - 1,
      f = o[h];
    (o[h] = Ea[s](l.measureViewportBox(), window.getComputedStyle(l.current))),
      f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f),
      (p = this.removedTransforms) != null &&
        p.length &&
        this.removedTransforms.forEach(([y, g]) => {
          l.getValue(y).set(g);
        }),
      this.resolveNoneKeyframes();
  }
}
function x3(a, l, s) {
  if (a instanceof EventTarget) return [a];
  if (typeof a == "string") {
    let o = document;
    const c = (s == null ? void 0 : s[a]) ?? o.querySelectorAll(a);
    return c ? Array.from(c) : [];
  }
  return Array.from(a);
}
const ly = (a, l) => (l && typeof a == "number" ? l.transform(a) : a);
function sy(a) {
  return Tg(a) && "offsetHeight" in a;
}
const t0 = 30,
  b3 = (a) => !isNaN(parseFloat(a));
class S3 {
  constructor(l, s = {}) {
    (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (o) => {
        var h;
        const c = ge.now();
        if (
          (this.updatedAt !== c && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(o),
          this.current !== this.prev &&
            ((h = this.events.change) == null || h.notify(this.current),
            this.dependents))
        )
          for (const f of this.dependents) f.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(l),
      (this.owner = s.owner);
  }
  setCurrent(l) {
    (this.current = l),
      (this.updatedAt = ge.now()),
      this.canTrackVelocity === null &&
        l !== void 0 &&
        (this.canTrackVelocity = b3(this.current));
  }
  setPrevFrameValue(l = this.current) {
    (this.prevFrameValue = l), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(l) {
    return this.on("change", l);
  }
  on(l, s) {
    this.events[l] || (this.events[l] = new Fc());
    const o = this.events[l].add(s);
    return l === "change"
      ? () => {
          o(),
            _t.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : o;
  }
  clearListeners() {
    for (const l in this.events) this.events[l].clear();
  }
  attach(l, s) {
    (this.passiveEffect = l), (this.stopPassiveEffect = s);
  }
  set(l) {
    this.passiveEffect
      ? this.passiveEffect(l, this.updateAndNotify)
      : this.updateAndNotify(l);
  }
  setWithVelocity(l, s, o) {
    this.set(s),
      (this.prev = void 0),
      (this.prevFrameValue = l),
      (this.prevUpdatedAt = this.updatedAt - o);
  }
  jump(l, s = !0) {
    this.updateAndNotify(l),
      (this.prev = l),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      s && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    var l;
    (l = this.events.change) == null || l.notify(this.current);
  }
  addDependent(l) {
    this.dependents || (this.dependents = new Set()), this.dependents.add(l);
  }
  removeDependent(l) {
    this.dependents && this.dependents.delete(l);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const l = ge.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      l - this.updatedAt > t0
    )
      return 0;
    const s = Math.min(this.updatedAt - this.prevUpdatedAt, t0);
    return Ag(parseFloat(this.current) - parseFloat(this.prevFrameValue), s);
  }
  start(l) {
    return (
      this.stop(),
      new Promise((s) => {
        (this.hasAnimated = !0),
          (this.animation = l(s)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var l, s;
    (l = this.dependents) == null || l.clear(),
      (s = this.events.destroy) == null || s.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Ai(a, l) {
  return new S3(a, l);
}
const { schedule: df } = Vg(queueMicrotask, !1),
  Ye = { x: !1, y: !1 };
function ry() {
  return Ye.x || Ye.y;
}
function T3(a) {
  return a === "x" || a === "y"
    ? Ye[a]
      ? null
      : ((Ye[a] = !0),
        () => {
          Ye[a] = !1;
        })
    : Ye.x || Ye.y
    ? null
    : ((Ye.x = Ye.y = !0),
      () => {
        Ye.x = Ye.y = !1;
      });
}
function oy(a, l) {
  const s = x3(a),
    o = new AbortController(),
    c = { passive: !0, ...l, signal: o.signal };
  return [s, c, () => o.abort()];
}
function e0(a) {
  return !(a.pointerType === "touch" || ry());
}
function j3(a, l, s = {}) {
  const [o, c, h] = oy(a, s),
    f = (p) => {
      if (!e0(p)) return;
      const { target: y } = p,
        g = l(y, p);
      if (typeof g != "function" || !y) return;
      const v = (b) => {
        e0(b) && (g(b), y.removeEventListener("pointerleave", v));
      };
      y.addEventListener("pointerleave", v, c);
    };
  return (
    o.forEach((p) => {
      p.addEventListener("pointerenter", f, c);
    }),
    h
  );
}
const uy = (a, l) => (l ? (a === l ? !0 : uy(a, l.parentElement)) : !1),
  hf = (a) =>
    a.pointerType === "mouse"
      ? typeof a.button != "number" || a.button <= 0
      : a.isPrimary !== !1,
  A3 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function N3(a) {
  return A3.has(a.tagName) || a.tabIndex !== -1;
}
const pr = new WeakSet();
function n0(a) {
  return (l) => {
    l.key === "Enter" && a(l);
  };
}
function ac(a, l) {
  a.dispatchEvent(
    new PointerEvent("pointer" + l, { isPrimary: !0, bubbles: !0 })
  );
}
const w3 = (a, l) => {
  const s = a.currentTarget;
  if (!s) return;
  const o = n0(() => {
    if (pr.has(s)) return;
    ac(s, "down");
    const c = n0(() => {
        ac(s, "up");
      }),
      h = () => ac(s, "cancel");
    s.addEventListener("keyup", c, l), s.addEventListener("blur", h, l);
  });
  s.addEventListener("keydown", o, l),
    s.addEventListener("blur", () => s.removeEventListener("keydown", o), l);
};
function a0(a) {
  return hf(a) && !ry();
}
function M3(a, l, s = {}) {
  const [o, c, h] = oy(a, s),
    f = (p) => {
      const y = p.currentTarget;
      if (!a0(p)) return;
      pr.add(y);
      const g = l(y, p),
        v = (E, z) => {
          window.removeEventListener("pointerup", b),
            window.removeEventListener("pointercancel", S),
            pr.has(y) && pr.delete(y),
            a0(E) && typeof g == "function" && g(E, { success: z });
        },
        b = (E) => {
          v(
            E,
            y === window ||
              y === document ||
              s.useGlobalTarget ||
              uy(y, E.target)
          );
        },
        S = (E) => {
          v(E, !1);
        };
      window.addEventListener("pointerup", b, c),
        window.addEventListener("pointercancel", S, c);
    };
  return (
    o.forEach((p) => {
      (s.useGlobalTarget ? window : p).addEventListener("pointerdown", f, c),
        sy(p) &&
          (p.addEventListener("focus", (g) => w3(g, c)),
          !N3(p) && !p.hasAttribute("tabindex") && (p.tabIndex = 0));
    }),
    h
  );
}
function cy(a) {
  return Tg(a) && "ownerSVGElement" in a;
}
function E3(a) {
  return cy(a) && a.tagName === "svg";
}
const re = (a) => !!(a && a.getVelocity),
  D3 = [...ny, Kt, aa],
  R3 = (a) => D3.find(ey(a)),
  mf = Y.createContext({
    transformPagePoint: (a) => a,
    isStatic: !1,
    reducedMotion: "never",
  });
class C3 extends Y.Component {
  getSnapshotBeforeUpdate(l) {
    const s = this.props.childRef.current;
    if (s && l.isPresent && !this.props.isPresent) {
      const o = s.offsetParent,
        c = (sy(o) && o.offsetWidth) || 0,
        h = this.props.sizeRef.current;
      (h.height = s.offsetHeight || 0),
        (h.width = s.offsetWidth || 0),
        (h.top = s.offsetTop),
        (h.left = s.offsetLeft),
        (h.right = c - h.width - h.left);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function z3({ children: a, isPresent: l, anchorX: s, root: o }) {
  const c = Y.useId(),
    h = Y.useRef(null),
    f = Y.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
    { nonce: p } = Y.useContext(mf);
  return (
    Y.useInsertionEffect(() => {
      const { width: y, height: g, top: v, left: b, right: S } = f.current;
      if (l || !h.current || !y || !g) return;
      const E = s === "left" ? `left: ${b}` : `right: ${S}`;
      h.current.dataset.motionPopId = c;
      const z = document.createElement("style");
      p && (z.nonce = p);
      const U = o ?? document.head;
      return (
        U.appendChild(z),
        z.sheet &&
          z.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${y}px !important;
            height: ${g}px !important;
            ${E}px !important;
            top: ${v}px !important;
          }
        `),
        () => {
          U.contains(z) && U.removeChild(z);
        }
      );
    }, [l]),
    d.jsx(C3, {
      isPresent: l,
      childRef: h,
      sizeRef: f,
      children: Y.cloneElement(a, { ref: h }),
    })
  );
}
const O3 = ({
  children: a,
  initial: l,
  isPresent: s,
  onExitComplete: o,
  custom: c,
  presenceAffectsLayout: h,
  mode: f,
  anchorX: p,
  root: y,
}) => {
  const g = Xc(_3),
    v = Y.useId();
  let b = !0,
    S = Y.useMemo(
      () => (
        (b = !1),
        {
          id: v,
          initial: l,
          isPresent: s,
          custom: c,
          onExitComplete: (E) => {
            g.set(E, !0);
            for (const z of g.values()) if (!z) return;
            o && o();
          },
          register: (E) => (g.set(E, !1), () => g.delete(E)),
        }
      ),
      [s, g, o]
    );
  return (
    h && b && (S = { ...S }),
    Y.useMemo(() => {
      g.forEach((E, z) => g.set(z, !1));
    }, [s]),
    Y.useEffect(() => {
      !s && !g.size && o && o();
    }, [s]),
    f === "popLayout" &&
      (a = d.jsx(z3, { isPresent: s, anchorX: p, root: y, children: a })),
    d.jsx(Nr.Provider, { value: S, children: a })
  );
};
function _3() {
  return new Map();
}
function fy(a = !0) {
  const l = Y.useContext(Nr);
  if (l === null) return [!0, null];
  const { isPresent: s, onExitComplete: o, register: c } = l,
    h = Y.useId();
  Y.useEffect(() => {
    if (a) return c(h);
  }, [a]);
  const f = Y.useCallback(() => a && o && o(h), [h, o, a]);
  return !s && o ? [!1, f] : [!0];
}
const dr = (a) => a.key || "";
function i0(a) {
  const l = [];
  return (
    Y.Children.forEach(a, (s) => {
      Y.isValidElement(s) && l.push(s);
    }),
    l
  );
}
const l0 = ({
    children: a,
    custom: l,
    initial: s = !0,
    onExitComplete: o,
    presenceAffectsLayout: c = !0,
    mode: h = "sync",
    propagate: f = !1,
    anchorX: p = "left",
    root: y,
  }) => {
    const [g, v] = fy(f),
      b = Y.useMemo(() => i0(a), [a]),
      S = f && !g ? [] : b.map(dr),
      E = Y.useRef(!0),
      z = Y.useRef(b),
      U = Xc(() => new Map()),
      [Z, X] = Y.useState(b),
      [q, Q] = Y.useState(b);
    bg(() => {
      (E.current = !1), (z.current = b);
      for (let I = 0; I < q.length; I++) {
        const nt = dr(q[I]);
        S.includes(nt) ? U.delete(nt) : U.get(nt) !== !0 && U.set(nt, !1);
      }
    }, [q, S.length, S.join("-")]);
    const et = [];
    if (b !== Z) {
      let I = [...b];
      for (let nt = 0; nt < q.length; nt++) {
        const L = q[nt],
          ut = dr(L);
        S.includes(ut) || (I.splice(nt, 0, L), et.push(L));
      }
      return h === "wait" && et.length && (I = et), Q(i0(I)), X(b), null;
    }
    const { forceRender: G } = Y.useContext(Yc);
    return d.jsx(d.Fragment, {
      children: q.map((I) => {
        const nt = dr(I),
          L = f && !g ? !1 : b === q || S.includes(nt),
          ut = () => {
            if (U.has(nt)) U.set(nt, !0);
            else return;
            let Ct = !0;
            U.forEach((Ht) => {
              Ht || (Ct = !1);
            }),
              Ct &&
                (G == null || G(),
                Q(z.current),
                f && (v == null || v()),
                o && o());
          };
        return d.jsx(
          O3,
          {
            isPresent: L,
            initial: !E.current || s ? void 0 : !1,
            custom: l,
            presenceAffectsLayout: c,
            mode: h,
            root: y,
            onExitComplete: L ? void 0 : ut,
            anchorX: p,
            children: I,
          },
          nt
        );
      }),
    });
  },
  dy = Y.createContext({ strict: !1 }),
  s0 = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Ni = {};
for (const a in s0) Ni[a] = { isEnabled: (l) => s0[a].some((s) => !!l[s]) };
function V3(a) {
  for (const l in a) Ni[l] = { ...Ni[l], ...a[l] };
}
const U3 = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function jr(a) {
  return (
    a.startsWith("while") ||
    (a.startsWith("drag") && a !== "draggable") ||
    a.startsWith("layout") ||
    a.startsWith("onTap") ||
    a.startsWith("onPan") ||
    a.startsWith("onLayout") ||
    U3.has(a)
  );
}
let hy = (a) => !jr(a);
function k3(a) {
  typeof a == "function" && (hy = (l) => (l.startsWith("on") ? !jr(l) : a(l)));
}
try {
  k3(require("@emotion/is-prop-valid").default);
} catch {}
function B3(a, l, s) {
  const o = {};
  for (const c in a)
    (c === "values" && typeof a.values == "object") ||
      ((hy(c) ||
        (s === !0 && jr(c)) ||
        (!l && !jr(c)) ||
        (a.draggable && c.startsWith("onDrag"))) &&
        (o[c] = a[c]));
  return o;
}
const wr = Y.createContext({});
function Mr(a) {
  return a !== null && typeof a == "object" && typeof a.start == "function";
}
function ql(a) {
  return typeof a == "string" || Array.isArray(a);
}
const pf = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  gf = ["initial", ...pf];
function Er(a) {
  return Mr(a.animate) || gf.some((l) => ql(a[l]));
}
function my(a) {
  return !!(Er(a) || a.variants);
}
function L3(a, l) {
  if (Er(a)) {
    const { initial: s, animate: o } = a;
    return {
      initial: s === !1 || ql(s) ? s : void 0,
      animate: ql(o) ? o : void 0,
    };
  }
  return a.inherit !== !1 ? l : {};
}
function H3(a) {
  const { initial: l, animate: s } = L3(a, Y.useContext(wr));
  return Y.useMemo(() => ({ initial: l, animate: s }), [r0(l), r0(s)]);
}
function r0(a) {
  return Array.isArray(a) ? a.join(" ") : a;
}
const Gl = {};
function q3(a) {
  for (const l in a) (Gl[l] = a[l]), Ic(l) && (Gl[l].isCSSVariable = !0);
}
function py(a, { layout: l, layoutId: s }) {
  return (
    Ri.has(a) ||
    a.startsWith("origin") ||
    ((l || s !== void 0) && (!!Gl[a] || a === "opacity"))
  );
}
const G3 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  Y3 = Di.length;
function X3(a, l, s) {
  let o = "",
    c = !0;
  for (let h = 0; h < Y3; h++) {
    const f = Di[h],
      p = a[f];
    if (p === void 0) continue;
    let y = !0;
    if (
      (typeof p == "number"
        ? (y = p === (f.startsWith("scale") ? 1 : 0))
        : (y = parseFloat(p) === 0),
      !y || s)
    ) {
      const g = ly(p, ff[f]);
      if (!y) {
        c = !1;
        const v = G3[f] || f;
        o += `${v}(${g}) `;
      }
      s && (l[f] = g);
    }
  }
  return (o = o.trim()), s ? (o = s(l, c ? "" : o)) : c && (o = "none"), o;
}
function yf(a, l, s) {
  const { style: o, vars: c, transformOrigin: h } = a;
  let f = !1,
    p = !1;
  for (const y in l) {
    const g = l[y];
    if (Ri.has(y)) {
      f = !0;
      continue;
    } else if (Ic(y)) {
      c[y] = g;
      continue;
    } else {
      const v = ly(g, ff[y]);
      y.startsWith("origin") ? ((p = !0), (h[y] = v)) : (o[y] = v);
    }
  }
  if (
    (l.transform ||
      (f || s
        ? (o.transform = X3(l, a.transform, s))
        : o.transform && (o.transform = "none")),
    p)
  ) {
    const { originX: y = "50%", originY: g = "50%", originZ: v = 0 } = h;
    o.transformOrigin = `${y} ${g} ${v}`;
  }
}
const vf = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function gy(a, l, s) {
  for (const o in l) !re(l[o]) && !py(o, s) && (a[o] = l[o]);
}
function Z3({ transformTemplate: a }, l) {
  return Y.useMemo(() => {
    const s = vf();
    return yf(s, l, a), Object.assign({}, s.vars, s.style);
  }, [l]);
}
function K3(a, l) {
  const s = a.style || {},
    o = {};
  return gy(o, s, a), Object.assign(o, Z3(a, l)), o;
}
function Q3(a, l) {
  const s = {},
    o = K3(a, l);
  return (
    a.drag &&
      a.dragListener !== !1 &&
      ((s.draggable = !1),
      (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none"),
      (o.touchAction =
        a.drag === !0 ? "none" : `pan-${a.drag === "x" ? "y" : "x"}`)),
    a.tabIndex === void 0 &&
      (a.onTap || a.onTapStart || a.whileTap) &&
      (s.tabIndex = 0),
    (s.style = o),
    s
  );
}
const P3 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  J3 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function F3(a, l, s = 1, o = 0, c = !0) {
  a.pathLength = 1;
  const h = c ? P3 : J3;
  a[h.offset] = st.transform(-o);
  const f = st.transform(l),
    p = st.transform(s);
  a[h.array] = `${f} ${p}`;
}
function yy(
  a,
  {
    attrX: l,
    attrY: s,
    attrScale: o,
    pathLength: c,
    pathSpacing: h = 1,
    pathOffset: f = 0,
    ...p
  },
  y,
  g,
  v
) {
  if ((yf(a, p, g), y)) {
    a.style.viewBox && (a.attrs.viewBox = a.style.viewBox);
    return;
  }
  (a.attrs = a.style), (a.style = {});
  const { attrs: b, style: S } = a;
  b.transform && ((S.transform = b.transform), delete b.transform),
    (S.transform || b.transformOrigin) &&
      ((S.transformOrigin = b.transformOrigin ?? "50% 50%"),
      delete b.transformOrigin),
    S.transform &&
      ((S.transformBox = (v == null ? void 0 : v.transformBox) ?? "fill-box"),
      delete b.transformBox),
    l !== void 0 && (b.x = l),
    s !== void 0 && (b.y = s),
    o !== void 0 && (b.scale = o),
    c !== void 0 && F3(b, c, h, f, !1);
}
const vy = () => ({ ...vf(), attrs: {} }),
  xy = (a) => typeof a == "string" && a.toLowerCase() === "svg";
function $3(a, l, s, o) {
  const c = Y.useMemo(() => {
    const h = vy();
    return (
      yy(h, l, xy(o), a.transformTemplate, a.style),
      { ...h.attrs, style: { ...h.style } }
    );
  }, [l]);
  if (a.style) {
    const h = {};
    gy(h, a.style, a), (c.style = { ...h, ...c.style });
  }
  return c;
}
const W3 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function xf(a) {
  return typeof a != "string" || a.includes("-")
    ? !1
    : !!(W3.indexOf(a) > -1 || /[A-Z]/u.test(a));
}
function I3(a, l, s, { latestValues: o }, c, h = !1) {
  const p = (xf(a) ? $3 : Q3)(l, o, c, a),
    y = B3(l, typeof a == "string", h),
    g = a !== Y.Fragment ? { ...y, ...p, ref: s } : {},
    { children: v } = l,
    b = Y.useMemo(() => (re(v) ? v.get() : v), [v]);
  return Y.createElement(a, { ...g, children: b });
}
function o0(a) {
  const l = [{}, {}];
  return (
    a == null ||
      a.values.forEach((s, o) => {
        (l[0][o] = s.get()), (l[1][o] = s.getVelocity());
      }),
    l
  );
}
function bf(a, l, s, o) {
  if (typeof l == "function") {
    const [c, h] = o0(o);
    l = l(s !== void 0 ? s : a.custom, c, h);
  }
  if (
    (typeof l == "string" && (l = a.variants && a.variants[l]),
    typeof l == "function")
  ) {
    const [c, h] = o0(o);
    l = l(s !== void 0 ? s : a.custom, c, h);
  }
  return l;
}
function gr(a) {
  return re(a) ? a.get() : a;
}
function tT({ scrapeMotionValuesFromProps: a, createRenderState: l }, s, o, c) {
  return { latestValues: eT(s, o, c, a), renderState: l() };
}
function eT(a, l, s, o) {
  const c = {},
    h = o(a, {});
  for (const S in h) c[S] = gr(h[S]);
  let { initial: f, animate: p } = a;
  const y = Er(a),
    g = my(a);
  l &&
    g &&
    !y &&
    a.inherit !== !1 &&
    (f === void 0 && (f = l.initial), p === void 0 && (p = l.animate));
  let v = s ? s.initial === !1 : !1;
  v = v || f === !1;
  const b = v ? p : f;
  if (b && typeof b != "boolean" && !Mr(b)) {
    const S = Array.isArray(b) ? b : [b];
    for (let E = 0; E < S.length; E++) {
      const z = bf(a, S[E]);
      if (z) {
        const { transitionEnd: U, transition: Z, ...X } = z;
        for (const q in X) {
          let Q = X[q];
          if (Array.isArray(Q)) {
            const et = v ? Q.length - 1 : 0;
            Q = Q[et];
          }
          Q !== null && (c[q] = Q);
        }
        for (const q in U) c[q] = U[q];
      }
    }
  }
  return c;
}
const by = (a) => (l, s) => {
  const o = Y.useContext(wr),
    c = Y.useContext(Nr),
    h = () => tT(a, l, o, c);
  return s ? h() : Xc(h);
};
function Sf(a, l, s) {
  var h;
  const { style: o } = a,
    c = {};
  for (const f in o)
    (re(o[f]) ||
      (l.style && re(l.style[f])) ||
      py(f, a) ||
      ((h = s == null ? void 0 : s.getValue(f)) == null
        ? void 0
        : h.liveStyle) !== void 0) &&
      (c[f] = o[f]);
  return c;
}
const nT = by({ scrapeMotionValuesFromProps: Sf, createRenderState: vf });
function Sy(a, l, s) {
  const o = Sf(a, l, s);
  for (const c in a)
    if (re(a[c]) || re(l[c])) {
      const h =
        Di.indexOf(c) !== -1
          ? "attr" + c.charAt(0).toUpperCase() + c.substring(1)
          : c;
      o[h] = a[c];
    }
  return o;
}
const aT = by({ scrapeMotionValuesFromProps: Sy, createRenderState: vy }),
  iT = Symbol.for("motionComponentSymbol");
function vi(a) {
  return (
    a &&
    typeof a == "object" &&
    Object.prototype.hasOwnProperty.call(a, "current")
  );
}
function lT(a, l, s) {
  return Y.useCallback(
    (o) => {
      o && a.onMount && a.onMount(o),
        l && (o ? l.mount(o) : l.unmount()),
        s && (typeof s == "function" ? s(o) : vi(s) && (s.current = o));
    },
    [l]
  );
}
const Tf = (a) => a.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  sT = "framerAppearId",
  Ty = "data-" + Tf(sT),
  jy = Y.createContext({});
function rT(a, l, s, o, c) {
  var U, Z;
  const { visualElement: h } = Y.useContext(wr),
    f = Y.useContext(dy),
    p = Y.useContext(Nr),
    y = Y.useContext(mf).reducedMotion,
    g = Y.useRef(null);
  (o = o || f.renderer),
    !g.current &&
      o &&
      (g.current = o(a, {
        visualState: l,
        parent: h,
        props: s,
        presenceContext: p,
        blockInitialAnimation: p ? p.initial === !1 : !1,
        reducedMotionConfig: y,
      }));
  const v = g.current,
    b = Y.useContext(jy);
  v &&
    !v.projection &&
    c &&
    (v.type === "html" || v.type === "svg") &&
    oT(g.current, s, c, b);
  const S = Y.useRef(!1);
  Y.useInsertionEffect(() => {
    v && S.current && v.update(s, p);
  });
  const E = s[Ty],
    z = Y.useRef(
      !!E &&
        !((U = window.MotionHandoffIsComplete) != null && U.call(window, E)) &&
        ((Z = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : Z.call(window, E))
    );
  return (
    bg(() => {
      v &&
        ((S.current = !0),
        (window.MotionIsMounted = !0),
        v.updateFeatures(),
        v.scheduleRenderMicrotask(),
        z.current && v.animationState && v.animationState.animateChanges());
    }),
    Y.useEffect(() => {
      v &&
        (!z.current && v.animationState && v.animationState.animateChanges(),
        z.current &&
          (queueMicrotask(() => {
            var X;
            (X = window.MotionHandoffMarkAsComplete) == null ||
              X.call(window, E);
          }),
          (z.current = !1)),
        (v.enteringChildren = void 0));
    }),
    v
  );
}
function oT(a, l, s, o) {
  const {
    layoutId: c,
    layout: h,
    drag: f,
    dragConstraints: p,
    layoutScroll: y,
    layoutRoot: g,
    layoutCrossfade: v,
  } = l;
  (a.projection = new s(
    a.latestValues,
    l["data-framer-portal-id"] ? void 0 : Ay(a.parent)
  )),
    a.projection.setOptions({
      layoutId: c,
      layout: h,
      alwaysMeasureLayout: !!f || (p && vi(p)),
      visualElement: a,
      animationType: typeof h == "string" ? h : "both",
      initialPromotionConfig: o,
      crossfade: v,
      layoutScroll: y,
      layoutRoot: g,
    });
}
function Ay(a) {
  if (a) return a.options.allowProjection !== !1 ? a.projection : Ay(a.parent);
}
function ic(a, { forwardMotionProps: l = !1 } = {}, s, o) {
  s && V3(s);
  const c = xf(a) ? aT : nT;
  function h(p, y) {
    let g;
    const v = { ...Y.useContext(mf), ...p, layoutId: uT(p) },
      { isStatic: b } = v,
      S = H3(p),
      E = c(p, b);
    if (!b && Zc) {
      cT();
      const z = fT(v);
      (g = z.MeasureLayout),
        (S.visualElement = rT(a, E, v, o, z.ProjectionNode));
    }
    return d.jsxs(wr.Provider, {
      value: S,
      children: [
        g && S.visualElement
          ? d.jsx(g, { visualElement: S.visualElement, ...v })
          : null,
        I3(a, p, lT(E, S.visualElement, y), E, b, l),
      ],
    });
  }
  h.displayName = `motion.${
    typeof a == "string" ? a : `create(${a.displayName ?? a.name ?? ""})`
  }`;
  const f = Y.forwardRef(h);
  return (f[iT] = a), f;
}
function uT({ layoutId: a }) {
  const l = Y.useContext(Yc).id;
  return l && a !== void 0 ? l + "-" + a : a;
}
function cT(a, l) {
  Y.useContext(dy).strict;
}
function fT(a) {
  const { drag: l, layout: s } = Ni;
  if (!l && !s) return {};
  const o = { ...l, ...s };
  return {
    MeasureLayout:
      (l != null && l.isEnabled(a)) || (s != null && s.isEnabled(a))
        ? o.MeasureLayout
        : void 0,
    ProjectionNode: o.ProjectionNode,
  };
}
function dT(a, l) {
  if (typeof Proxy > "u") return ic;
  const s = new Map(),
    o = (h, f) => ic(h, f, a, l),
    c = (h, f) => o(h, f);
  return new Proxy(c, {
    get: (h, f) =>
      f === "create"
        ? o
        : (s.has(f) || s.set(f, ic(f, void 0, a, l)), s.get(f)),
  });
}
function Ny({ top: a, left: l, right: s, bottom: o }) {
  return { x: { min: l, max: s }, y: { min: a, max: o } };
}
function hT({ x: a, y: l }) {
  return { top: l.min, right: a.max, bottom: l.max, left: a.min };
}
function mT(a, l) {
  if (!l) return a;
  const s = l({ x: a.left, y: a.top }),
    o = l({ x: a.right, y: a.bottom });
  return { top: s.y, left: s.x, bottom: o.y, right: o.x };
}
function lc(a) {
  return a === void 0 || a === 1;
}
function Cc({ scale: a, scaleX: l, scaleY: s }) {
  return !lc(a) || !lc(l) || !lc(s);
}
function Na(a) {
  return (
    Cc(a) ||
    wy(a) ||
    a.z ||
    a.rotate ||
    a.rotateX ||
    a.rotateY ||
    a.skewX ||
    a.skewY
  );
}
function wy(a) {
  return u0(a.x) || u0(a.y);
}
function u0(a) {
  return a && a !== "0%";
}
function Ar(a, l, s) {
  const o = a - s,
    c = l * o;
  return s + c;
}
function c0(a, l, s, o, c) {
  return c !== void 0 && (a = Ar(a, c, o)), Ar(a, s, o) + l;
}
function zc(a, l = 0, s = 1, o, c) {
  (a.min = c0(a.min, l, s, o, c)), (a.max = c0(a.max, l, s, o, c));
}
function My(a, { x: l, y: s }) {
  zc(a.x, l.translate, l.scale, l.originPoint),
    zc(a.y, s.translate, s.scale, s.originPoint);
}
const f0 = 0.999999999999,
  d0 = 1.0000000000001;
function pT(a, l, s, o = !1) {
  const c = s.length;
  if (!c) return;
  l.x = l.y = 1;
  let h, f;
  for (let p = 0; p < c; p++) {
    (h = s[p]), (f = h.projectionDelta);
    const { visualElement: y } = h.options;
    (y && y.props.style && y.props.style.display === "contents") ||
      (o &&
        h.options.layoutScroll &&
        h.scroll &&
        h !== h.root &&
        bi(a, { x: -h.scroll.offset.x, y: -h.scroll.offset.y }),
      f && ((l.x *= f.x.scale), (l.y *= f.y.scale), My(a, f)),
      o && Na(h.latestValues) && bi(a, h.latestValues));
  }
  l.x < d0 && l.x > f0 && (l.x = 1), l.y < d0 && l.y > f0 && (l.y = 1);
}
function xi(a, l) {
  (a.min = a.min + l), (a.max = a.max + l);
}
function h0(a, l, s, o, c = 0.5) {
  const h = Ut(a.min, a.max, c);
  zc(a, l, s, h, o);
}
function bi(a, l) {
  h0(a.x, l.x, l.scaleX, l.scale, l.originX),
    h0(a.y, l.y, l.scaleY, l.scale, l.originY);
}
function Ey(a, l) {
  return Ny(mT(a.getBoundingClientRect(), l));
}
function gT(a, l, s) {
  const o = Ey(a, s),
    { scroll: c } = l;
  return c && (xi(o.x, c.offset.x), xi(o.y, c.offset.y)), o;
}
const m0 = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Si = () => ({ x: m0(), y: m0() }),
  p0 = () => ({ min: 0, max: 0 }),
  Yt = () => ({ x: p0(), y: p0() }),
  Oc = { current: null },
  Dy = { current: !1 };
function yT() {
  if (((Dy.current = !0), !!Zc))
    if (window.matchMedia) {
      const a = window.matchMedia("(prefers-reduced-motion)"),
        l = () => (Oc.current = a.matches);
      a.addEventListener("change", l), l();
    } else Oc.current = !1;
}
const vT = new WeakMap();
function xT(a, l, s) {
  for (const o in l) {
    const c = l[o],
      h = s[o];
    if (re(c)) a.addValue(o, c);
    else if (re(h)) a.addValue(o, Ai(c, { owner: a }));
    else if (h !== c)
      if (a.hasValue(o)) {
        const f = a.getValue(o);
        f.liveStyle === !0 ? f.jump(c) : f.hasAnimated || f.set(c);
      } else {
        const f = a.getStaticValue(o);
        a.addValue(o, Ai(f !== void 0 ? f : c, { owner: a }));
      }
  }
  for (const o in s) l[o] === void 0 && a.removeValue(o);
  return l;
}
const g0 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class bT {
  scrapeMotionValuesFromProps(l, s, o) {
    return {};
  }
  constructor(
    {
      parent: l,
      props: s,
      presenceContext: o,
      reducedMotionConfig: c,
      blockInitialAnimation: h,
      visualState: f,
    },
    p = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = uf),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const S = ge.now();
        this.renderScheduledAt < S &&
          ((this.renderScheduledAt = S), _t.render(this.render, !1, !0));
      });
    const { latestValues: y, renderState: g } = f;
    (this.latestValues = y),
      (this.baseTarget = { ...y }),
      (this.initialValues = s.initial ? { ...y } : {}),
      (this.renderState = g),
      (this.parent = l),
      (this.props = s),
      (this.presenceContext = o),
      (this.depth = l ? l.depth + 1 : 0),
      (this.reducedMotionConfig = c),
      (this.options = p),
      (this.blockInitialAnimation = !!h),
      (this.isControllingVariants = Er(s)),
      (this.isVariantNode = my(s)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(l && l.current));
    const { willChange: v, ...b } = this.scrapeMotionValuesFromProps(
      s,
      {},
      this
    );
    for (const S in b) {
      const E = b[S];
      y[S] !== void 0 && re(E) && E.set(y[S]);
    }
  }
  mount(l) {
    var s;
    (this.current = l),
      vT.set(l, this),
      this.projection && !this.projection.instance && this.projection.mount(l),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((o, c) => this.bindToMotionValue(c, o)),
      Dy.current || yT(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Oc.current),
      (s = this.parent) == null || s.addChild(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    var l;
    this.projection && this.projection.unmount(),
      na(this.notifyUpdate),
      na(this.render),
      this.valueSubscriptions.forEach((s) => s()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      (l = this.parent) == null || l.removeChild(this);
    for (const s in this.events) this.events[s].clear();
    for (const s in this.features) {
      const o = this.features[s];
      o && (o.unmount(), (o.isMounted = !1));
    }
    this.current = null;
  }
  addChild(l) {
    this.children.add(l),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(l);
  }
  removeChild(l) {
    this.children.delete(l),
      this.enteringChildren && this.enteringChildren.delete(l);
  }
  bindToMotionValue(l, s) {
    this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)();
    const o = Ri.has(l);
    o && this.onBindTransform && this.onBindTransform();
    const c = s.on("change", (f) => {
      (this.latestValues[l] = f),
        this.props.onUpdate && _t.preRender(this.notifyUpdate),
        o && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender();
    });
    let h;
    window.MotionCheckAppearSync &&
      (h = window.MotionCheckAppearSync(this, l, s)),
      this.valueSubscriptions.set(l, () => {
        c(), h && h(), s.owner && s.stop();
      });
  }
  sortNodePosition(l) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== l.type
      ? 0
      : this.sortInstanceNodePosition(this.current, l.current);
  }
  updateFeatures() {
    let l = "animation";
    for (l in Ni) {
      const s = Ni[l];
      if (!s) continue;
      const { isEnabled: o, Feature: c } = s;
      if (
        (!this.features[l] &&
          c &&
          o(this.props) &&
          (this.features[l] = new c(this)),
        this.features[l])
      ) {
        const h = this.features[l];
        h.isMounted ? h.update() : (h.mount(), (h.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Yt();
  }
  getStaticValue(l) {
    return this.latestValues[l];
  }
  setStaticValue(l, s) {
    this.latestValues[l] = s;
  }
  update(l, s) {
    (l.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = l),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = s);
    for (let o = 0; o < g0.length; o++) {
      const c = g0[o];
      this.propEventSubscriptions[c] &&
        (this.propEventSubscriptions[c](),
        delete this.propEventSubscriptions[c]);
      const h = "on" + c,
        f = l[h];
      f && (this.propEventSubscriptions[c] = this.on(c, f));
    }
    (this.prevMotionValues = xT(
      this,
      this.scrapeMotionValuesFromProps(l, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(l) {
    return this.props.variants ? this.props.variants[l] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(l) {
    const s = this.getClosestVariantNode();
    if (s)
      return (
        s.variantChildren && s.variantChildren.add(l),
        () => s.variantChildren.delete(l)
      );
  }
  addValue(l, s) {
    const o = this.values.get(l);
    s !== o &&
      (o && this.removeValue(l),
      this.bindToMotionValue(l, s),
      this.values.set(l, s),
      (this.latestValues[l] = s.get()));
  }
  removeValue(l) {
    this.values.delete(l);
    const s = this.valueSubscriptions.get(l);
    s && (s(), this.valueSubscriptions.delete(l)),
      delete this.latestValues[l],
      this.removeValueFromRenderState(l, this.renderState);
  }
  hasValue(l) {
    return this.values.has(l);
  }
  getValue(l, s) {
    if (this.props.values && this.props.values[l]) return this.props.values[l];
    let o = this.values.get(l);
    return (
      o === void 0 &&
        s !== void 0 &&
        ((o = Ai(s === null ? void 0 : s, { owner: this })),
        this.addValue(l, o)),
      o
    );
  }
  readValue(l, s) {
    let o =
      this.latestValues[l] !== void 0 || !this.current
        ? this.latestValues[l]
        : this.getBaseTargetFromProps(this.props, l) ??
          this.readValueFromInstance(this.current, l, this.options);
    return (
      o != null &&
        (typeof o == "string" && (Sg(o) || jg(o))
          ? (o = parseFloat(o))
          : !R3(o) && aa.test(s) && (o = iy(l, s)),
        this.setBaseTarget(l, re(o) ? o.get() : o)),
      re(o) ? o.get() : o
    );
  }
  setBaseTarget(l, s) {
    this.baseTarget[l] = s;
  }
  getBaseTarget(l) {
    var h;
    const { initial: s } = this.props;
    let o;
    if (typeof s == "string" || typeof s == "object") {
      const f = bf(
        this.props,
        s,
        (h = this.presenceContext) == null ? void 0 : h.custom
      );
      f && (o = f[l]);
    }
    if (s && o !== void 0) return o;
    const c = this.getBaseTargetFromProps(this.props, l);
    return c !== void 0 && !re(c)
      ? c
      : this.initialValues[l] !== void 0 && o === void 0
      ? void 0
      : this.baseTarget[l];
  }
  on(l, s) {
    return this.events[l] || (this.events[l] = new Fc()), this.events[l].add(s);
  }
  notify(l, ...s) {
    this.events[l] && this.events[l].notify(...s);
  }
  scheduleRenderMicrotask() {
    df.render(this.render);
  }
}
class Ry extends bT {
  constructor() {
    super(...arguments), (this.KeyframeResolver = v3);
  }
  sortInstanceNodePosition(l, s) {
    return l.compareDocumentPosition(s) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(l, s) {
    return l.style ? l.style[s] : void 0;
  }
  removeValueFromRenderState(l, { vars: s, style: o }) {
    delete s[l], delete o[l];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: l } = this.props;
    re(l) &&
      (this.childSubscription = l.on("change", (s) => {
        this.current && (this.current.textContent = `${s}`);
      }));
  }
}
function Cy(a, { style: l, vars: s }, o, c) {
  const h = a.style;
  let f;
  for (f in l) h[f] = l[f];
  c == null || c.applyProjectionStyles(h, o);
  for (f in s) h.setProperty(f, s[f]);
}
function ST(a) {
  return window.getComputedStyle(a);
}
class TT extends Ry {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = Cy);
  }
  readValueFromInstance(l, s) {
    var o;
    if (Ri.has(s))
      return (o = this.projection) != null && o.isProjecting ? Ac(s) : kS(l, s);
    {
      const c = ST(l),
        h = (Ic(s) ? c.getPropertyValue(s) : c[s]) || 0;
      return typeof h == "string" ? h.trim() : h;
    }
  }
  measureInstanceViewportBox(l, { transformPagePoint: s }) {
    return Ey(l, s);
  }
  build(l, s, o) {
    yf(l, s, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(l, s, o) {
    return Sf(l, s, o);
  }
}
const zy = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function jT(a, l, s, o) {
  Cy(a, l, void 0, o);
  for (const c in l.attrs) a.setAttribute(zy.has(c) ? c : Tf(c), l.attrs[c]);
}
class AT extends Ry {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Yt);
  }
  getBaseTargetFromProps(l, s) {
    return l[s];
  }
  readValueFromInstance(l, s) {
    if (Ri.has(s)) {
      const o = ay(s);
      return (o && o.default) || 0;
    }
    return (s = zy.has(s) ? s : Tf(s)), l.getAttribute(s);
  }
  scrapeMotionValuesFromProps(l, s, o) {
    return Sy(l, s, o);
  }
  build(l, s, o) {
    yy(l, s, this.isSVGTag, o.transformTemplate, o.style);
  }
  renderInstance(l, s, o, c) {
    jT(l, s, o, c);
  }
  mount(l) {
    (this.isSVGTag = xy(l.tagName)), super.mount(l);
  }
}
const NT = (a, l) =>
  xf(a) ? new AT(l) : new TT(l, { allowProjection: a !== Y.Fragment });
function ji(a, l, s) {
  const o = a.getProps();
  return bf(o, l, s !== void 0 ? s : o.custom, a);
}
const _c = (a) => Array.isArray(a);
function wT(a, l, s) {
  a.hasValue(l) ? a.getValue(l).set(s) : a.addValue(l, Ai(s));
}
function MT(a) {
  return _c(a) ? a[a.length - 1] || 0 : a;
}
function ET(a, l) {
  const s = ji(a, l);
  let { transitionEnd: o = {}, transition: c = {}, ...h } = s || {};
  h = { ...h, ...o };
  for (const f in h) {
    const p = MT(h[f]);
    wT(a, f, p);
  }
}
function DT(a) {
  return !!(re(a) && a.add);
}
function Vc(a, l) {
  const s = a.getValue("willChange");
  if (DT(s)) return s.add(l);
  if (!s && Sn.WillChange) {
    const o = new Sn.WillChange("auto");
    a.addValue("willChange", o), o.add(l);
  }
}
function Oy(a) {
  return a.props[Ty];
}
const RT = (a) => a !== null;
function CT(a, { repeat: l, repeatType: s = "loop" }, o) {
  const c = a.filter(RT),
    h = l && s !== "loop" && l % 2 === 1 ? 0 : c.length - 1;
  return c[h];
}
const zT = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  OT = (a) => ({
    type: "spring",
    stiffness: 550,
    damping: a === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  _T = { type: "keyframes", duration: 0.8 },
  VT = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  UT = (a, { keyframes: l }) =>
    l.length > 2
      ? _T
      : Ri.has(a)
      ? a.startsWith("scale")
        ? OT(l[1])
        : zT
      : VT;
function kT({
  when: a,
  delay: l,
  delayChildren: s,
  staggerChildren: o,
  staggerDirection: c,
  repeat: h,
  repeatType: f,
  repeatDelay: p,
  from: y,
  elapsed: g,
  ...v
}) {
  return !!Object.keys(v).length;
}
const jf =
  (a, l, s, o = {}, c, h) =>
  (f) => {
    const p = cf(o, a) || {},
      y = p.delay || o.delay || 0;
    let { elapsed: g = 0 } = o;
    g = g - Fe(y);
    const v = {
      keyframes: Array.isArray(s) ? s : [null, s],
      ease: "easeOut",
      velocity: l.getVelocity(),
      ...p,
      delay: -g,
      onUpdate: (S) => {
        l.set(S), p.onUpdate && p.onUpdate(S);
      },
      onComplete: () => {
        f(), p.onComplete && p.onComplete();
      },
      name: a,
      motionValue: l,
      element: h ? void 0 : c,
    };
    kT(p) || Object.assign(v, UT(a, v)),
      v.duration && (v.duration = Fe(v.duration)),
      v.repeatDelay && (v.repeatDelay = Fe(v.repeatDelay)),
      v.from !== void 0 && (v.keyframes[0] = v.from);
    let b = !1;
    if (
      ((v.type === !1 || (v.duration === 0 && !v.repeatDelay)) &&
        (Dc(v), v.delay === 0 && (b = !0)),
      (Sn.instantAnimations || Sn.skipAnimations) &&
        ((b = !0), Dc(v), (v.delay = 0)),
      (v.allowFlatten = !p.type && !p.ease),
      b && !h && l.get() !== void 0)
    ) {
      const S = CT(v.keyframes, p);
      if (S !== void 0) {
        _t.update(() => {
          v.onUpdate(S), v.onComplete();
        });
        return;
      }
    }
    return p.isSync ? new of(v) : new s3(v);
  };
function BT({ protectedKeys: a, needsAnimating: l }, s) {
  const o = a.hasOwnProperty(s) && l[s] !== !0;
  return (l[s] = !1), o;
}
function _y(a, l, { delay: s = 0, transitionOverride: o, type: c } = {}) {
  let { transition: h = a.getDefaultTransition(), transitionEnd: f, ...p } = l;
  o && (h = o);
  const y = [],
    g = c && a.animationState && a.animationState.getState()[c];
  for (const v in p) {
    const b = a.getValue(v, a.latestValues[v] ?? null),
      S = p[v];
    if (S === void 0 || (g && BT(g, v))) continue;
    const E = { delay: s, ...cf(h || {}, v) },
      z = b.get();
    if (
      z !== void 0 &&
      !b.isAnimating &&
      !Array.isArray(S) &&
      S === z &&
      !E.velocity
    )
      continue;
    let U = !1;
    if (window.MotionHandoffAnimation) {
      const X = Oy(a);
      if (X) {
        const q = window.MotionHandoffAnimation(X, v, _t);
        q !== null && ((E.startTime = q), (U = !0));
      }
    }
    Vc(a, v),
      b.start(
        jf(v, b, S, a.shouldReduceMotion && ty.has(v) ? { type: !1 } : E, a, U)
      );
    const Z = b.animation;
    Z && y.push(Z);
  }
  return (
    f &&
      Promise.all(y).then(() => {
        _t.update(() => {
          f && ET(a, f);
        });
      }),
    y
  );
}
function Vy(a, l, s, o = 0, c = 1) {
  const h = Array.from(a)
      .sort((g, v) => g.sortNodePosition(v))
      .indexOf(l),
    f = a.size,
    p = (f - 1) * o;
  return typeof s == "function" ? s(h, f) : c === 1 ? h * o : p - h * o;
}
function Uc(a, l, s = {}) {
  var y;
  const o = ji(
    a,
    l,
    s.type === "exit"
      ? (y = a.presenceContext) == null
        ? void 0
        : y.custom
      : void 0
  );
  let { transition: c = a.getDefaultTransition() || {} } = o || {};
  s.transitionOverride && (c = s.transitionOverride);
  const h = o ? () => Promise.all(_y(a, o, s)) : () => Promise.resolve(),
    f =
      a.variantChildren && a.variantChildren.size
        ? (g = 0) => {
            const {
              delayChildren: v = 0,
              staggerChildren: b,
              staggerDirection: S,
            } = c;
            return LT(a, l, g, v, b, S, s);
          }
        : () => Promise.resolve(),
    { when: p } = c;
  if (p) {
    const [g, v] = p === "beforeChildren" ? [h, f] : [f, h];
    return g().then(() => v());
  } else return Promise.all([h(), f(s.delay)]);
}
function LT(a, l, s = 0, o = 0, c = 0, h = 1, f) {
  const p = [];
  for (const y of a.variantChildren)
    y.notify("AnimationStart", l),
      p.push(
        Uc(y, l, {
          ...f,
          delay:
            s +
            (typeof o == "function" ? 0 : o) +
            Vy(a.variantChildren, y, o, c, h),
        }).then(() => y.notify("AnimationComplete", l))
      );
  return Promise.all(p);
}
function HT(a, l, s = {}) {
  a.notify("AnimationStart", l);
  let o;
  if (Array.isArray(l)) {
    const c = l.map((h) => Uc(a, h, s));
    o = Promise.all(c);
  } else if (typeof l == "string") o = Uc(a, l, s);
  else {
    const c = typeof l == "function" ? ji(a, l, s.custom) : l;
    o = Promise.all(_y(a, c, s));
  }
  return o.then(() => {
    a.notify("AnimationComplete", l);
  });
}
function Uy(a, l) {
  if (!Array.isArray(l)) return !1;
  const s = l.length;
  if (s !== a.length) return !1;
  for (let o = 0; o < s; o++) if (l[o] !== a[o]) return !1;
  return !0;
}
const qT = gf.length;
function ky(a) {
  if (!a) return;
  if (!a.isControllingVariants) {
    const s = a.parent ? ky(a.parent) || {} : {};
    return a.props.initial !== void 0 && (s.initial = a.props.initial), s;
  }
  const l = {};
  for (let s = 0; s < qT; s++) {
    const o = gf[s],
      c = a.props[o];
    (ql(c) || c === !1) && (l[o] = c);
  }
  return l;
}
const GT = [...pf].reverse(),
  YT = pf.length;
function XT(a) {
  return (l) =>
    Promise.all(l.map(({ animation: s, options: o }) => HT(a, s, o)));
}
function ZT(a) {
  let l = XT(a),
    s = y0(),
    o = !0;
  const c = (y) => (g, v) => {
    var S;
    const b = ji(
      a,
      v,
      y === "exit"
        ? (S = a.presenceContext) == null
          ? void 0
          : S.custom
        : void 0
    );
    if (b) {
      const { transition: E, transitionEnd: z, ...U } = b;
      g = { ...g, ...U, ...z };
    }
    return g;
  };
  function h(y) {
    l = y(a);
  }
  function f(y) {
    const { props: g } = a,
      v = ky(a.parent) || {},
      b = [],
      S = new Set();
    let E = {},
      z = 1 / 0;
    for (let Z = 0; Z < YT; Z++) {
      const X = GT[Z],
        q = s[X],
        Q = g[X] !== void 0 ? g[X] : v[X],
        et = ql(Q),
        G = X === y ? q.isActive : null;
      G === !1 && (z = Z);
      let I = Q === v[X] && Q !== g[X] && et;
      if (
        (I && o && a.manuallyAnimateOnMount && (I = !1),
        (q.protectedKeys = { ...E }),
        (!q.isActive && G === null) ||
          (!Q && !q.prevProp) ||
          Mr(Q) ||
          typeof Q == "boolean")
      )
        continue;
      const nt = KT(q.prevProp, Q);
      let L = nt || (X === y && q.isActive && !I && et) || (Z > z && et),
        ut = !1;
      const Ct = Array.isArray(Q) ? Q : [Q];
      let Ht = Ct.reduce(c(X), {});
      G === !1 && (Ht = {});
      const { prevResolvedValues: zt = {} } = q,
        Me = { ...zt, ...Ht },
        ce = (H) => {
          (L = !0),
            S.has(H) && ((ut = !0), S.delete(H)),
            (q.needsAnimating[H] = !0);
          const k = a.getValue(H);
          k && (k.liveStyle = !1);
        };
      for (const H in Me) {
        const k = Ht[H],
          dt = zt[H];
        if (E.hasOwnProperty(H)) continue;
        let j = !1;
        _c(k) && _c(dt) ? (j = !Uy(k, dt)) : (j = k !== dt),
          j
            ? k != null
              ? ce(H)
              : S.add(H)
            : k !== void 0 && S.has(H)
            ? ce(H)
            : (q.protectedKeys[H] = !0);
      }
      (q.prevProp = Q),
        (q.prevResolvedValues = Ht),
        q.isActive && (E = { ...E, ...Ht }),
        o && a.blockInitialAnimation && (L = !1);
      const Dt = I && nt;
      L &&
        (!Dt || ut) &&
        b.push(
          ...Ct.map((H) => {
            const k = { type: X };
            if (
              typeof H == "string" &&
              o &&
              !Dt &&
              a.manuallyAnimateOnMount &&
              a.parent
            ) {
              const { parent: dt } = a,
                j = ji(dt, H);
              if (dt.enteringChildren && j) {
                const { delayChildren: B } = j.transition || {};
                k.delay = Vy(dt.enteringChildren, a, B);
              }
            }
            return { animation: H, options: k };
          })
        );
    }
    if (S.size) {
      const Z = {};
      if (typeof g.initial != "boolean") {
        const X = ji(a, Array.isArray(g.initial) ? g.initial[0] : g.initial);
        X && X.transition && (Z.transition = X.transition);
      }
      S.forEach((X) => {
        const q = a.getBaseTarget(X),
          Q = a.getValue(X);
        Q && (Q.liveStyle = !0), (Z[X] = q ?? null);
      }),
        b.push({ animation: Z });
    }
    let U = !!b.length;
    return (
      o &&
        (g.initial === !1 || g.initial === g.animate) &&
        !a.manuallyAnimateOnMount &&
        (U = !1),
      (o = !1),
      U ? l(b) : Promise.resolve()
    );
  }
  function p(y, g) {
    var b;
    if (s[y].isActive === g) return Promise.resolve();
    (b = a.variantChildren) == null ||
      b.forEach((S) => {
        var E;
        return (E = S.animationState) == null ? void 0 : E.setActive(y, g);
      }),
      (s[y].isActive = g);
    const v = f(y);
    for (const S in s) s[S].protectedKeys = {};
    return v;
  }
  return {
    animateChanges: f,
    setActive: p,
    setAnimateFunction: h,
    getState: () => s,
    reset: () => {
      (s = y0()), (o = !0);
    },
  };
}
function KT(a, l) {
  return typeof l == "string" ? l !== a : Array.isArray(l) ? !Uy(l, a) : !1;
}
function Aa(a = !1) {
  return {
    isActive: a,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function y0() {
  return {
    animate: Aa(!0),
    whileInView: Aa(),
    whileHover: Aa(),
    whileTap: Aa(),
    whileDrag: Aa(),
    whileFocus: Aa(),
    exit: Aa(),
  };
}
class ia {
  constructor(l) {
    (this.isMounted = !1), (this.node = l);
  }
  update() {}
}
class QT extends ia {
  constructor(l) {
    super(l), l.animationState || (l.animationState = ZT(l));
  }
  updateAnimationControlsSubscription() {
    const { animate: l } = this.node.getProps();
    Mr(l) && (this.unmountControls = l.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: l } = this.node.getProps(),
      { animate: s } = this.node.prevProps || {};
    l !== s && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var l;
    this.node.animationState.reset(),
      (l = this.unmountControls) == null || l.call(this);
  }
}
let PT = 0;
class JT extends ia {
  constructor() {
    super(...arguments), (this.id = PT++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: l, onExitComplete: s } = this.node.presenceContext,
      { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || l === o) return;
    const c = this.node.animationState.setActive("exit", !l);
    s &&
      !l &&
      c.then(() => {
        s(this.id);
      });
  }
  mount() {
    const { register: l, onExitComplete: s } = this.node.presenceContext || {};
    s && s(this.id), l && (this.unmount = l(this.id));
  }
  unmount() {}
}
const FT = { animation: { Feature: QT }, exit: { Feature: JT } };
function Yl(a, l, s, o = { passive: !0 }) {
  return a.addEventListener(l, s, o), () => a.removeEventListener(l, s);
}
function Ql(a) {
  return { point: { x: a.pageX, y: a.pageY } };
}
const $T = (a) => (l) => hf(l) && a(l, Ql(l));
function Vl(a, l, s, o) {
  return Yl(a, l, $T(s), o);
}
const By = 1e-4,
  WT = 1 - By,
  IT = 1 + By,
  Ly = 0.01,
  tj = 0 - Ly,
  ej = 0 + Ly;
function ue(a) {
  return a.max - a.min;
}
function nj(a, l, s) {
  return Math.abs(a - l) <= s;
}
function v0(a, l, s, o = 0.5) {
  (a.origin = o),
    (a.originPoint = Ut(l.min, l.max, a.origin)),
    (a.scale = ue(s) / ue(l)),
    (a.translate = Ut(s.min, s.max, a.origin) - a.originPoint),
    ((a.scale >= WT && a.scale <= IT) || isNaN(a.scale)) && (a.scale = 1),
    ((a.translate >= tj && a.translate <= ej) || isNaN(a.translate)) &&
      (a.translate = 0);
}
function Ul(a, l, s, o) {
  v0(a.x, l.x, s.x, o ? o.originX : void 0),
    v0(a.y, l.y, s.y, o ? o.originY : void 0);
}
function x0(a, l, s) {
  (a.min = s.min + l.min), (a.max = a.min + ue(l));
}
function aj(a, l, s) {
  x0(a.x, l.x, s.x), x0(a.y, l.y, s.y);
}
function b0(a, l, s) {
  (a.min = l.min - s.min), (a.max = a.min + ue(l));
}
function kl(a, l, s) {
  b0(a.x, l.x, s.x), b0(a.y, l.y, s.y);
}
function Be(a) {
  return [a("x"), a("y")];
}
const Hy = ({ current: a }) => (a ? a.ownerDocument.defaultView : null),
  S0 = (a, l) => Math.abs(a - l);
function ij(a, l) {
  const s = S0(a.x, l.x),
    o = S0(a.y, l.y);
  return Math.sqrt(s ** 2 + o ** 2);
}
class qy {
  constructor(
    l,
    s,
    {
      transformPagePoint: o,
      contextWindow: c = window,
      dragSnapToOrigin: h = !1,
      distanceThreshold: f = 3,
    } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const S = rc(this.lastMoveEventInfo, this.history),
          E = this.startEvent !== null,
          z = ij(S.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!E && !z) return;
        const { point: U } = S,
          { timestamp: Z } = ae;
        this.history.push({ ...U, timestamp: Z });
        const { onStart: X, onMove: q } = this.handlers;
        E ||
          (X && X(this.lastMoveEvent, S),
          (this.startEvent = this.lastMoveEvent)),
          q && q(this.lastMoveEvent, S);
      }),
      (this.handlePointerMove = (S, E) => {
        (this.lastMoveEvent = S),
          (this.lastMoveEventInfo = sc(E, this.transformPagePoint)),
          _t.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (S, E) => {
        this.end();
        const { onEnd: z, onSessionEnd: U, resumeAnimation: Z } = this.handlers;
        if (
          (this.dragSnapToOrigin && Z && Z(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const X = rc(
          S.type === "pointercancel"
            ? this.lastMoveEventInfo
            : sc(E, this.transformPagePoint),
          this.history
        );
        this.startEvent && z && z(S, X), U && U(S, X);
      }),
      !hf(l))
    )
      return;
    (this.dragSnapToOrigin = h),
      (this.handlers = s),
      (this.transformPagePoint = o),
      (this.distanceThreshold = f),
      (this.contextWindow = c || window);
    const p = Ql(l),
      y = sc(p, this.transformPagePoint),
      { point: g } = y,
      { timestamp: v } = ae;
    this.history = [{ ...g, timestamp: v }];
    const { onSessionStart: b } = s;
    b && b(l, rc(y, this.history)),
      (this.removeListeners = Xl(
        Vl(this.contextWindow, "pointermove", this.handlePointerMove),
        Vl(this.contextWindow, "pointerup", this.handlePointerUp),
        Vl(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(l) {
    this.handlers = l;
  }
  end() {
    this.removeListeners && this.removeListeners(), na(this.updatePoint);
  }
}
function sc(a, l) {
  return l ? { point: l(a.point) } : a;
}
function T0(a, l) {
  return { x: a.x - l.x, y: a.y - l.y };
}
function rc({ point: a }, l) {
  return {
    point: a,
    delta: T0(a, Gy(l)),
    offset: T0(a, lj(l)),
    velocity: sj(l, 0.1),
  };
}
function lj(a) {
  return a[0];
}
function Gy(a) {
  return a[a.length - 1];
}
function sj(a, l) {
  if (a.length < 2) return { x: 0, y: 0 };
  let s = a.length - 1,
    o = null;
  const c = Gy(a);
  for (; s >= 0 && ((o = a[s]), !(c.timestamp - o.timestamp > Fe(l))); ) s--;
  if (!o) return { x: 0, y: 0 };
  const h = $e(c.timestamp - o.timestamp);
  if (h === 0) return { x: 0, y: 0 };
  const f = { x: (c.x - o.x) / h, y: (c.y - o.y) / h };
  return f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f;
}
function rj(a, { min: l, max: s }, o) {
  return (
    l !== void 0 && a < l
      ? (a = o ? Ut(l, a, o.min) : Math.max(a, l))
      : s !== void 0 && a > s && (a = o ? Ut(s, a, o.max) : Math.min(a, s)),
    a
  );
}
function j0(a, l, s) {
  return {
    min: l !== void 0 ? a.min + l : void 0,
    max: s !== void 0 ? a.max + s - (a.max - a.min) : void 0,
  };
}
function oj(a, { top: l, left: s, bottom: o, right: c }) {
  return { x: j0(a.x, s, c), y: j0(a.y, l, o) };
}
function A0(a, l) {
  let s = l.min - a.min,
    o = l.max - a.max;
  return l.max - l.min < a.max - a.min && ([s, o] = [o, s]), { min: s, max: o };
}
function uj(a, l) {
  return { x: A0(a.x, l.x), y: A0(a.y, l.y) };
}
function cj(a, l) {
  let s = 0.5;
  const o = ue(a),
    c = ue(l);
  return (
    c > o
      ? (s = Bl(l.min, l.max - o, a.min))
      : o > c && (s = Bl(a.min, a.max - c, l.min)),
    bn(0, 1, s)
  );
}
function fj(a, l) {
  const s = {};
  return (
    l.min !== void 0 && (s.min = l.min - a.min),
    l.max !== void 0 && (s.max = l.max - a.min),
    s
  );
}
const kc = 0.35;
function dj(a = kc) {
  return (
    a === !1 ? (a = 0) : a === !0 && (a = kc),
    { x: N0(a, "left", "right"), y: N0(a, "top", "bottom") }
  );
}
function N0(a, l, s) {
  return { min: w0(a, l), max: w0(a, s) };
}
function w0(a, l) {
  return typeof a == "number" ? a : a[l] || 0;
}
const hj = new WeakMap();
class mj {
  constructor(l) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Yt()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = l);
  }
  start(l, { snapToCursor: s = !1, distanceThreshold: o } = {}) {
    const { presenceContext: c } = this.visualElement;
    if (c && c.isPresent === !1) return;
    const h = (b) => {
        const { dragSnapToOrigin: S } = this.getProps();
        S ? this.pauseAnimation() : this.stopAnimation(),
          s && this.snapToCursor(Ql(b).point);
      },
      f = (b, S) => {
        const { drag: E, dragPropagation: z, onDragStart: U } = this.getProps();
        if (
          E &&
          !z &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = T3(E)),
          !this.openDragLock)
        )
          return;
        (this.latestPointerEvent = b),
          (this.latestPanInfo = S),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Be((X) => {
            let q = this.getAxisMotionValue(X).get() || 0;
            if (We.test(q)) {
              const { projection: Q } = this.visualElement;
              if (Q && Q.layout) {
                const et = Q.layout.layoutBox[X];
                et && (q = ue(et) * (parseFloat(q) / 100));
              }
            }
            this.originPoint[X] = q;
          }),
          U && _t.postRender(() => U(b, S)),
          Vc(this.visualElement, "transform");
        const { animationState: Z } = this.visualElement;
        Z && Z.setActive("whileDrag", !0);
      },
      p = (b, S) => {
        (this.latestPointerEvent = b), (this.latestPanInfo = S);
        const {
          dragPropagation: E,
          dragDirectionLock: z,
          onDirectionLock: U,
          onDrag: Z,
        } = this.getProps();
        if (!E && !this.openDragLock) return;
        const { offset: X } = S;
        if (z && this.currentDirection === null) {
          (this.currentDirection = pj(X)),
            this.currentDirection !== null && U && U(this.currentDirection);
          return;
        }
        this.updateAxis("x", S.point, X),
          this.updateAxis("y", S.point, X),
          this.visualElement.render(),
          Z && Z(b, S);
      },
      y = (b, S) => {
        (this.latestPointerEvent = b),
          (this.latestPanInfo = S),
          this.stop(b, S),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null);
      },
      g = () =>
        Be((b) => {
          var S;
          return (
            this.getAnimationState(b) === "paused" &&
            ((S = this.getAxisMotionValue(b).animation) == null
              ? void 0
              : S.play())
          );
        }),
      { dragSnapToOrigin: v } = this.getProps();
    this.panSession = new qy(
      l,
      {
        onSessionStart: h,
        onStart: f,
        onMove: p,
        onSessionEnd: y,
        resumeAnimation: g,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: v,
        distanceThreshold: o,
        contextWindow: Hy(this.visualElement),
      }
    );
  }
  stop(l, s) {
    const o = l || this.latestPointerEvent,
      c = s || this.latestPanInfo,
      h = this.isDragging;
    if ((this.cancel(), !h || !c || !o)) return;
    const { velocity: f } = c;
    this.startAnimation(f);
    const { onDragEnd: p } = this.getProps();
    p && _t.postRender(() => p(o, c));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: l, animationState: s } = this.visualElement;
    l && (l.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: o } = this.getProps();
    !o &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      s && s.setActive("whileDrag", !1);
  }
  updateAxis(l, s, o) {
    const { drag: c } = this.getProps();
    if (!o || !hr(l, c, this.currentDirection)) return;
    const h = this.getAxisMotionValue(l);
    let f = this.originPoint[l] + o[l];
    this.constraints &&
      this.constraints[l] &&
      (f = rj(f, this.constraints[l], this.elastic[l])),
      h.set(f);
  }
  resolveConstraints() {
    var h;
    const { dragConstraints: l, dragElastic: s } = this.getProps(),
      o =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (h = this.visualElement.projection) == null
          ? void 0
          : h.layout,
      c = this.constraints;
    l && vi(l)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : l && o
      ? (this.constraints = oj(o.layoutBox, l))
      : (this.constraints = !1),
      (this.elastic = dj(s)),
      c !== this.constraints &&
        o &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Be((f) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(f) &&
            (this.constraints[f] = fj(o.layoutBox[f], this.constraints[f]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: l, onMeasureDragConstraints: s } = this.getProps();
    if (!l || !vi(l)) return !1;
    const o = l.current,
      { projection: c } = this.visualElement;
    if (!c || !c.layout) return !1;
    const h = gT(o, c.root, this.visualElement.getTransformPagePoint());
    let f = uj(c.layout.layoutBox, h);
    if (s) {
      const p = s(hT(f));
      (this.hasMutatedConstraints = !!p), p && (f = Ny(p));
    }
    return f;
  }
  startAnimation(l) {
    const {
        drag: s,
        dragMomentum: o,
        dragElastic: c,
        dragTransition: h,
        dragSnapToOrigin: f,
        onDragTransitionEnd: p,
      } = this.getProps(),
      y = this.constraints || {},
      g = Be((v) => {
        if (!hr(v, s, this.currentDirection)) return;
        let b = (y && y[v]) || {};
        f && (b = { min: 0, max: 0 });
        const S = c ? 200 : 1e6,
          E = c ? 40 : 1e7,
          z = {
            type: "inertia",
            velocity: o ? l[v] : 0,
            bounceStiffness: S,
            bounceDamping: E,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...h,
            ...b,
          };
        return this.startAxisValueAnimation(v, z);
      });
    return Promise.all(g).then(p);
  }
  startAxisValueAnimation(l, s) {
    const o = this.getAxisMotionValue(l);
    return (
      Vc(this.visualElement, l), o.start(jf(l, o, 0, s, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Be((l) => this.getAxisMotionValue(l).stop());
  }
  pauseAnimation() {
    Be((l) => {
      var s;
      return (s = this.getAxisMotionValue(l).animation) == null
        ? void 0
        : s.pause();
    });
  }
  getAnimationState(l) {
    var s;
    return (s = this.getAxisMotionValue(l).animation) == null
      ? void 0
      : s.state;
  }
  getAxisMotionValue(l) {
    const s = `_drag${l.toUpperCase()}`,
      o = this.visualElement.getProps(),
      c = o[s];
    return (
      c ||
      this.visualElement.getValue(l, (o.initial ? o.initial[l] : void 0) || 0)
    );
  }
  snapToCursor(l) {
    Be((s) => {
      const { drag: o } = this.getProps();
      if (!hr(s, o, this.currentDirection)) return;
      const { projection: c } = this.visualElement,
        h = this.getAxisMotionValue(s);
      if (c && c.layout) {
        const { min: f, max: p } = c.layout.layoutBox[s];
        h.set(l[s] - Ut(f, p, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: l, dragConstraints: s } = this.getProps(),
      { projection: o } = this.visualElement;
    if (!vi(s) || !o || !this.constraints) return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    Be((f) => {
      const p = this.getAxisMotionValue(f);
      if (p && this.constraints !== !1) {
        const y = p.get();
        c[f] = cj({ min: y, max: y }, this.constraints[f]);
      }
    });
    const { transformTemplate: h } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = h ? h({}, "") : "none"),
      o.root && o.root.updateScroll(),
      o.updateLayout(),
      this.resolveConstraints(),
      Be((f) => {
        if (!hr(f, l, null)) return;
        const p = this.getAxisMotionValue(f),
          { min: y, max: g } = this.constraints[f];
        p.set(Ut(y, g, c[f]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    hj.set(this.visualElement, this);
    const l = this.visualElement.current,
      s = Vl(l, "pointerdown", (y) => {
        const { drag: g, dragListener: v = !0 } = this.getProps();
        g && v && this.start(y);
      }),
      o = () => {
        const { dragConstraints: y } = this.getProps();
        vi(y) && y.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: c } = this.visualElement,
      h = c.addEventListener("measure", o);
    c && !c.layout && (c.root && c.root.updateScroll(), c.updateLayout()),
      _t.read(o);
    const f = Yl(window, "resize", () => this.scalePositionWithinConstraints()),
      p = c.addEventListener(
        "didUpdate",
        ({ delta: y, hasLayoutChanged: g }) => {
          this.isDragging &&
            g &&
            (Be((v) => {
              const b = this.getAxisMotionValue(v);
              b &&
                ((this.originPoint[v] += y[v].translate),
                b.set(b.get() + y[v].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      f(), s(), h(), p && p();
    };
  }
  getProps() {
    const l = this.visualElement.getProps(),
      {
        drag: s = !1,
        dragDirectionLock: o = !1,
        dragPropagation: c = !1,
        dragConstraints: h = !1,
        dragElastic: f = kc,
        dragMomentum: p = !0,
      } = l;
    return {
      ...l,
      drag: s,
      dragDirectionLock: o,
      dragPropagation: c,
      dragConstraints: h,
      dragElastic: f,
      dragMomentum: p,
    };
  }
}
function hr(a, l, s) {
  return (l === !0 || l === a) && (s === null || s === a);
}
function pj(a, l = 10) {
  let s = null;
  return Math.abs(a.y) > l ? (s = "y") : Math.abs(a.x) > l && (s = "x"), s;
}
class gj extends ia {
  constructor(l) {
    super(l),
      (this.removeGroupControls = Le),
      (this.removeListeners = Le),
      (this.controls = new mj(l));
  }
  mount() {
    const { dragControls: l } = this.node.getProps();
    l && (this.removeGroupControls = l.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Le);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const M0 = (a) => (l, s) => {
  a && _t.postRender(() => a(l, s));
};
class yj extends ia {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Le);
  }
  onPointerDown(l) {
    this.session = new qy(l, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Hy(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: l,
      onPanStart: s,
      onPan: o,
      onPanEnd: c,
    } = this.node.getProps();
    return {
      onSessionStart: M0(l),
      onStart: M0(s),
      onMove: o,
      onEnd: (h, f) => {
        delete this.session, c && _t.postRender(() => c(h, f));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Vl(this.node.current, "pointerdown", (l) =>
      this.onPointerDown(l)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const yr = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function E0(a, l) {
  return l.max === l.min ? 0 : (a / (l.max - l.min)) * 100;
}
const Cl = {
    correct: (a, l) => {
      if (!l.target) return a;
      if (typeof a == "string")
        if (st.test(a)) a = parseFloat(a);
        else return a;
      const s = E0(a, l.target.x),
        o = E0(a, l.target.y);
      return `${s}% ${o}%`;
    },
  },
  vj = {
    correct: (a, { treeScale: l, projectionDelta: s }) => {
      const o = a,
        c = aa.parse(a);
      if (c.length > 5) return o;
      const h = aa.createTransformer(a),
        f = typeof c[0] != "number" ? 1 : 0,
        p = s.x.scale * l.x,
        y = s.y.scale * l.y;
      (c[0 + f] /= p), (c[1 + f] /= y);
      const g = Ut(p, y, 0.5);
      return (
        typeof c[2 + f] == "number" && (c[2 + f] /= g),
        typeof c[3 + f] == "number" && (c[3 + f] /= g),
        h(c)
      );
    },
  };
let oc = !1;
class xj extends Y.Component {
  componentDidMount() {
    const {
        visualElement: l,
        layoutGroup: s,
        switchLayoutGroup: o,
        layoutId: c,
      } = this.props,
      { projection: h } = l;
    q3(bj),
      h &&
        (s.group && s.group.add(h),
        o && o.register && c && o.register(h),
        oc && h.root.didUpdate(),
        h.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        h.setOptions({
          ...h.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (yr.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(l) {
    const {
        layoutDependency: s,
        visualElement: o,
        drag: c,
        isPresent: h,
      } = this.props,
      { projection: f } = o;
    return (
      f &&
        ((f.isPresent = h),
        (oc = !0),
        c || l.layoutDependency !== s || s === void 0 || l.isPresent !== h
          ? f.willUpdate()
          : this.safeToRemove(),
        l.isPresent !== h &&
          (h
            ? f.promote()
            : f.relegate() ||
              _t.postRender(() => {
                const p = f.getStack();
                (!p || !p.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: l } = this.props.visualElement;
    l &&
      (l.root.didUpdate(),
      df.postRender(() => {
        !l.currentAnimation && l.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: l,
        layoutGroup: s,
        switchLayoutGroup: o,
      } = this.props,
      { projection: c } = l;
    (oc = !0),
      c &&
        (c.scheduleCheckAfterUnmount(),
        s && s.group && s.group.remove(c),
        o && o.deregister && o.deregister(c));
  }
  safeToRemove() {
    const { safeToRemove: l } = this.props;
    l && l();
  }
  render() {
    return null;
  }
}
function Yy(a) {
  const [l, s] = fy(),
    o = Y.useContext(Yc);
  return d.jsx(xj, {
    ...a,
    layoutGroup: o,
    switchLayoutGroup: Y.useContext(jy),
    isPresent: l,
    safeToRemove: s,
  });
}
const bj = {
  borderRadius: {
    ...Cl,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: Cl,
  borderTopRightRadius: Cl,
  borderBottomLeftRadius: Cl,
  borderBottomRightRadius: Cl,
  boxShadow: vj,
};
function Sj(a, l, s) {
  const o = re(a) ? a : Ai(a);
  return o.start(jf("", o, l, s)), o.animation;
}
const Tj = (a, l) => a.depth - l.depth;
class jj {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(l) {
    Kc(this.children, l), (this.isDirty = !0);
  }
  remove(l) {
    Qc(this.children, l), (this.isDirty = !0);
  }
  forEach(l) {
    this.isDirty && this.children.sort(Tj),
      (this.isDirty = !1),
      this.children.forEach(l);
  }
}
function Aj(a, l) {
  const s = ge.now(),
    o = ({ timestamp: c }) => {
      const h = c - s;
      h >= l && (na(o), a(h - l));
    };
  return _t.setup(o, !0), () => na(o);
}
const Xy = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  Nj = Xy.length,
  D0 = (a) => (typeof a == "string" ? parseFloat(a) : a),
  R0 = (a) => typeof a == "number" || st.test(a);
function wj(a, l, s, o, c, h) {
  c
    ? ((a.opacity = Ut(0, s.opacity ?? 1, Mj(o))),
      (a.opacityExit = Ut(l.opacity ?? 1, 0, Ej(o))))
    : h && (a.opacity = Ut(l.opacity ?? 1, s.opacity ?? 1, o));
  for (let f = 0; f < Nj; f++) {
    const p = `border${Xy[f]}Radius`;
    let y = C0(l, p),
      g = C0(s, p);
    if (y === void 0 && g === void 0) continue;
    y || (y = 0),
      g || (g = 0),
      y === 0 || g === 0 || R0(y) === R0(g)
        ? ((a[p] = Math.max(Ut(D0(y), D0(g), o), 0)),
          (We.test(g) || We.test(y)) && (a[p] += "%"))
        : (a[p] = g);
  }
  (l.rotate || s.rotate) && (a.rotate = Ut(l.rotate || 0, s.rotate || 0, o));
}
function C0(a, l) {
  return a[l] !== void 0 ? a[l] : a.borderRadius;
}
const Mj = Zy(0, 0.5, Cg),
  Ej = Zy(0.5, 0.95, Le);
function Zy(a, l, s) {
  return (o) => (o < a ? 0 : o > l ? 1 : s(Bl(a, l, o)));
}
function z0(a, l) {
  (a.min = l.min), (a.max = l.max);
}
function ke(a, l) {
  z0(a.x, l.x), z0(a.y, l.y);
}
function O0(a, l) {
  (a.translate = l.translate),
    (a.scale = l.scale),
    (a.originPoint = l.originPoint),
    (a.origin = l.origin);
}
function _0(a, l, s, o, c) {
  return (
    (a -= l), (a = Ar(a, 1 / s, o)), c !== void 0 && (a = Ar(a, 1 / c, o)), a
  );
}
function Dj(a, l = 0, s = 1, o = 0.5, c, h = a, f = a) {
  if (
    (We.test(l) &&
      ((l = parseFloat(l)), (l = Ut(f.min, f.max, l / 100) - f.min)),
    typeof l != "number")
  )
    return;
  let p = Ut(h.min, h.max, o);
  a === h && (p -= l),
    (a.min = _0(a.min, l, s, p, c)),
    (a.max = _0(a.max, l, s, p, c));
}
function V0(a, l, [s, o, c], h, f) {
  Dj(a, l[s], l[o], l[c], l.scale, h, f);
}
const Rj = ["x", "scaleX", "originX"],
  Cj = ["y", "scaleY", "originY"];
function U0(a, l, s, o) {
  V0(a.x, l, Rj, s ? s.x : void 0, o ? o.x : void 0),
    V0(a.y, l, Cj, s ? s.y : void 0, o ? o.y : void 0);
}
function k0(a) {
  return a.translate === 0 && a.scale === 1;
}
function Ky(a) {
  return k0(a.x) && k0(a.y);
}
function B0(a, l) {
  return a.min === l.min && a.max === l.max;
}
function zj(a, l) {
  return B0(a.x, l.x) && B0(a.y, l.y);
}
function L0(a, l) {
  return (
    Math.round(a.min) === Math.round(l.min) &&
    Math.round(a.max) === Math.round(l.max)
  );
}
function Qy(a, l) {
  return L0(a.x, l.x) && L0(a.y, l.y);
}
function H0(a) {
  return ue(a.x) / ue(a.y);
}
function q0(a, l) {
  return (
    a.translate === l.translate &&
    a.scale === l.scale &&
    a.originPoint === l.originPoint
  );
}
class Oj {
  constructor() {
    this.members = [];
  }
  add(l) {
    Kc(this.members, l), l.scheduleRender();
  }
  remove(l) {
    if (
      (Qc(this.members, l),
      l === this.prevLead && (this.prevLead = void 0),
      l === this.lead)
    ) {
      const s = this.members[this.members.length - 1];
      s && this.promote(s);
    }
  }
  relegate(l) {
    const s = this.members.findIndex((c) => l === c);
    if (s === 0) return !1;
    let o;
    for (let c = s; c >= 0; c--) {
      const h = this.members[c];
      if (h.isPresent !== !1) {
        o = h;
        break;
      }
    }
    return o ? (this.promote(o), !0) : !1;
  }
  promote(l, s) {
    const o = this.lead;
    if (l !== o && ((this.prevLead = o), (this.lead = l), l.show(), o)) {
      o.instance && o.scheduleRender(),
        l.scheduleRender(),
        (l.resumeFrom = o),
        s && (l.resumeFrom.preserveOpacity = !0),
        o.snapshot &&
          ((l.snapshot = o.snapshot),
          (l.snapshot.latestValues = o.animationValues || o.latestValues)),
        l.root && l.root.isUpdating && (l.isLayoutDirty = !0);
      const { crossfade: c } = l.options;
      c === !1 && o.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((l) => {
      const { options: s, resumingFrom: o } = l;
      s.onExitComplete && s.onExitComplete(),
        o && o.options.onExitComplete && o.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((l) => {
      l.instance && l.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function _j(a, l, s) {
  let o = "";
  const c = a.x.translate / l.x,
    h = a.y.translate / l.y,
    f = (s == null ? void 0 : s.z) || 0;
  if (
    ((c || h || f) && (o = `translate3d(${c}px, ${h}px, ${f}px) `),
    (l.x !== 1 || l.y !== 1) && (o += `scale(${1 / l.x}, ${1 / l.y}) `),
    s)
  ) {
    const {
      transformPerspective: g,
      rotate: v,
      rotateX: b,
      rotateY: S,
      skewX: E,
      skewY: z,
    } = s;
    g && (o = `perspective(${g}px) ${o}`),
      v && (o += `rotate(${v}deg) `),
      b && (o += `rotateX(${b}deg) `),
      S && (o += `rotateY(${S}deg) `),
      E && (o += `skewX(${E}deg) `),
      z && (o += `skewY(${z}deg) `);
  }
  const p = a.x.scale * l.x,
    y = a.y.scale * l.y;
  return (p !== 1 || y !== 1) && (o += `scale(${p}, ${y})`), o || "none";
}
const uc = ["", "X", "Y", "Z"],
  Vj = 1e3;
let Uj = 0;
function cc(a, l, s, o) {
  const { latestValues: c } = l;
  c[a] && ((s[a] = c[a]), l.setStaticValue(a, 0), o && (o[a] = 0));
}
function Py(a) {
  if (((a.hasCheckedOptimisedAppear = !0), a.root === a)) return;
  const { visualElement: l } = a.options;
  if (!l) return;
  const s = Oy(l);
  if (window.MotionHasOptimisedAnimation(s, "transform")) {
    const { layout: c, layoutId: h } = a.options;
    window.MotionCancelOptimisedAnimation(s, "transform", _t, !(c || h));
  }
  const { parent: o } = a;
  o && !o.hasCheckedOptimisedAppear && Py(o);
}
function Jy({
  attachResizeListener: a,
  defaultParent: l,
  measureScroll: s,
  checkIsScrollRoot: o,
  resetTransform: c,
}) {
  return class {
    constructor(f = {}, p = l == null ? void 0 : l()) {
      (this.id = Uj++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            this.nodes.forEach(Lj),
            this.nodes.forEach(Yj),
            this.nodes.forEach(Xj),
            this.nodes.forEach(Hj);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = f),
        (this.root = p ? p.root || p : this),
        (this.path = p ? [...p.path, p] : []),
        (this.parent = p),
        (this.depth = p ? p.depth + 1 : 0);
      for (let y = 0; y < this.path.length; y++)
        this.path[y].shouldResetTransform = !0;
      this.root === this && (this.nodes = new jj());
    }
    addEventListener(f, p) {
      return (
        this.eventHandlers.has(f) || this.eventHandlers.set(f, new Fc()),
        this.eventHandlers.get(f).add(p)
      );
    }
    notifyListeners(f, ...p) {
      const y = this.eventHandlers.get(f);
      y && y.notify(...p);
    }
    hasListeners(f) {
      return this.eventHandlers.has(f);
    }
    mount(f) {
      if (this.instance) return;
      (this.isSVG = cy(f) && !E3(f)), (this.instance = f);
      const { layoutId: p, layout: y, visualElement: g } = this.options;
      if (
        (g && !g.current && g.mount(f),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (y || p) && (this.isLayoutDirty = !0),
        a)
      ) {
        let v,
          b = 0;
        const S = () => (this.root.updateBlockedByResize = !1);
        _t.read(() => {
          b = window.innerWidth;
        }),
          a(f, () => {
            const E = window.innerWidth;
            E !== b &&
              ((b = E),
              (this.root.updateBlockedByResize = !0),
              v && v(),
              (v = Aj(S, 250)),
              yr.hasAnimatedSinceResize &&
                ((yr.hasAnimatedSinceResize = !1), this.nodes.forEach(X0)));
          });
      }
      p && this.root.registerSharedNode(p, this),
        this.options.animate !== !1 &&
          g &&
          (p || y) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: v,
              hasLayoutChanged: b,
              hasRelativeLayoutChanged: S,
              layout: E,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const z =
                  this.options.transition || g.getDefaultTransition() || Jj,
                { onLayoutAnimationStart: U, onLayoutAnimationComplete: Z } =
                  g.getProps(),
                X = !this.targetLayout || !Qy(this.targetLayout, E),
                q = !b && S;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                q ||
                (b && (X || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const Q = { ...cf(z, "layout"), onPlay: U, onComplete: Z };
                (g.shouldReduceMotion || this.options.layoutRoot) &&
                  ((Q.delay = 0), (Q.type = !1)),
                  this.startAnimation(Q),
                  this.setAnimationOrigin(v, q);
              } else
                b || X0(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = E;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const f = this.getStack();
      f && f.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        na(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(Zj),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: f } = this.options;
      return f && f.getProps().transformTemplate;
    }
    willUpdate(f = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Py(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let v = 0; v < this.path.length; v++) {
        const b = this.path[v];
        (b.shouldResetTransform = !0),
          b.updateScroll("snapshot"),
          b.options.layoutRoot && b.willUpdate(!1);
      }
      const { layoutId: p, layout: y } = this.options;
      if (p === void 0 && !y) return;
      const g = this.getTransformTemplate();
      (this.prevTransformTemplateValue = g ? g(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        f && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(G0);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Y0);
        return;
      }
      (this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(Gj),
            this.nodes.forEach(kj),
            this.nodes.forEach(Bj))
          : this.nodes.forEach(Y0),
        this.clearAllSnapshots();
      const p = ge.now();
      (ae.delta = bn(0, 1e3 / 60, p - ae.timestamp)),
        (ae.timestamp = p),
        (ae.isProcessing = !0),
        Wu.update.process(ae),
        Wu.preRender.process(ae),
        Wu.render.process(ae),
        (ae.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), df.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(qj), this.sharedNodes.forEach(Kj);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        _t.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      _t.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !ue(this.snapshot.measuredBox.x) &&
          !ue(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let y = 0; y < this.path.length; y++) this.path[y].updateScroll();
      const f = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Yt()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: p } = this.options;
      p &&
        p.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          f ? f.layoutBox : void 0
        );
    }
    updateScroll(f = "measure") {
      let p = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === f &&
          (p = !1),
        p && this.instance)
      ) {
        const y = o(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: f,
          isRoot: y,
          offset: s(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : y,
        };
      }
    }
    resetTransform() {
      if (!c) return;
      const f =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        p = this.projectionDelta && !Ky(this.projectionDelta),
        y = this.getTransformTemplate(),
        g = y ? y(this.latestValues, "") : void 0,
        v = g !== this.prevTransformTemplateValue;
      f &&
        this.instance &&
        (p || Na(this.latestValues) || v) &&
        (c(this.instance, g),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(f = !0) {
      const p = this.measurePageBox();
      let y = this.removeElementScroll(p);
      return (
        f && (y = this.removeTransform(y)),
        Fj(y),
        {
          animationId: this.root.animationId,
          measuredBox: p,
          layoutBox: y,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var g;
      const { visualElement: f } = this.options;
      if (!f) return Yt();
      const p = f.measureViewportBox();
      if (
        !(
          ((g = this.scroll) == null ? void 0 : g.wasRoot) || this.path.some($j)
        )
      ) {
        const { scroll: v } = this.root;
        v && (xi(p.x, v.offset.x), xi(p.y, v.offset.y));
      }
      return p;
    }
    removeElementScroll(f) {
      var y;
      const p = Yt();
      if ((ke(p, f), (y = this.scroll) != null && y.wasRoot)) return p;
      for (let g = 0; g < this.path.length; g++) {
        const v = this.path[g],
          { scroll: b, options: S } = v;
        v !== this.root &&
          b &&
          S.layoutScroll &&
          (b.wasRoot && ke(p, f), xi(p.x, b.offset.x), xi(p.y, b.offset.y));
      }
      return p;
    }
    applyTransform(f, p = !1) {
      const y = Yt();
      ke(y, f);
      for (let g = 0; g < this.path.length; g++) {
        const v = this.path[g];
        !p &&
          v.options.layoutScroll &&
          v.scroll &&
          v !== v.root &&
          bi(y, { x: -v.scroll.offset.x, y: -v.scroll.offset.y }),
          Na(v.latestValues) && bi(y, v.latestValues);
      }
      return Na(this.latestValues) && bi(y, this.latestValues), y;
    }
    removeTransform(f) {
      const p = Yt();
      ke(p, f);
      for (let y = 0; y < this.path.length; y++) {
        const g = this.path[y];
        if (!g.instance || !Na(g.latestValues)) continue;
        Cc(g.latestValues) && g.updateSnapshot();
        const v = Yt(),
          b = g.measurePageBox();
        ke(v, b),
          U0(p, g.latestValues, g.snapshot ? g.snapshot.layoutBox : void 0, v);
      }
      return Na(this.latestValues) && U0(p, this.latestValues), p;
    }
    setTargetDelta(f) {
      (this.targetDelta = f),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(f) {
      this.options = {
        ...this.options,
        ...f,
        crossfade: f.crossfade !== void 0 ? f.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== ae.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(f = !1) {
      var S;
      const p = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = p.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = p.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = p.isSharedProjectionDirty);
      const y = !!this.resumingFrom || this !== p;
      if (
        !(
          f ||
          (y && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((S = this.parent) != null && S.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: v, layoutId: b } = this.options;
      if (!(!this.layout || !(v || b))) {
        if (
          ((this.resolvedRelativeTargetAt = ae.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const E = this.getClosestProjectingParent();
          E && E.layout && this.animationProgress !== 1
            ? ((this.relativeParent = E),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Yt()),
              (this.relativeTargetOrigin = Yt()),
              kl(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                E.layout.layoutBox
              ),
              ke(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (
          !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = Yt()), (this.targetWithTransforms = Yt())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              aj(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
            ? (this.resumingFrom
                ? (this.target = this.applyTransform(this.layout.layoutBox))
                : ke(this.target, this.layout.layoutBox),
              My(this.target, this.targetDelta))
            : ke(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget)
        ) {
          this.attemptToResolveRelativeTarget = !1;
          const E = this.getClosestProjectingParent();
          E &&
          !!E.resumingFrom == !!this.resumingFrom &&
          !E.options.layoutScroll &&
          E.target &&
          this.animationProgress !== 1
            ? ((this.relativeParent = E),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Yt()),
              (this.relativeTargetOrigin = Yt()),
              kl(this.relativeTargetOrigin, this.target, E.target),
              ke(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Cc(this.parent.latestValues) ||
          wy(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var z;
      const f = this.getLead(),
        p = !!this.resumingFrom || this !== f;
      let y = !0;
      if (
        ((this.isProjectionDirty ||
          ((z = this.parent) != null && z.isProjectionDirty)) &&
          (y = !1),
        p &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (y = !1),
        this.resolvedRelativeTargetAt === ae.timestamp && (y = !1),
        y)
      )
        return;
      const { layout: g, layoutId: v } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(g || v))
      )
        return;
      ke(this.layoutCorrected, this.layout.layoutBox);
      const b = this.treeScale.x,
        S = this.treeScale.y;
      pT(this.layoutCorrected, this.treeScale, this.path, p),
        f.layout &&
          !f.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((f.target = f.layout.layoutBox), (f.targetWithTransforms = Yt()));
      const { target: E } = f;
      if (!E) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (O0(this.prevProjectionDelta.x, this.projectionDelta.x),
          O0(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Ul(this.projectionDelta, this.layoutCorrected, E, this.latestValues),
        (this.treeScale.x !== b ||
          this.treeScale.y !== S ||
          !q0(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !q0(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", E));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(f = !0) {
      var p;
      if (((p = this.options.visualElement) == null || p.scheduleRender(), f)) {
        const y = this.getStack();
        y && y.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = Si()),
        (this.projectionDelta = Si()),
        (this.projectionDeltaWithTransform = Si());
    }
    setAnimationOrigin(f, p = !1) {
      const y = this.snapshot,
        g = y ? y.latestValues : {},
        v = { ...this.latestValues },
        b = Si();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !p);
      const S = Yt(),
        E = y ? y.source : void 0,
        z = this.layout ? this.layout.source : void 0,
        U = E !== z,
        Z = this.getStack(),
        X = !Z || Z.members.length <= 1,
        q = !!(U && !X && this.options.crossfade === !0 && !this.path.some(Pj));
      this.animationProgress = 0;
      let Q;
      (this.mixTargetDelta = (et) => {
        const G = et / 1e3;
        Z0(b.x, f.x, G),
          Z0(b.y, f.y, G),
          this.setTargetDelta(b),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (kl(S, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            Qj(this.relativeTarget, this.relativeTargetOrigin, S, G),
            Q && zj(this.relativeTarget, Q) && (this.isProjectionDirty = !1),
            Q || (Q = Yt()),
            ke(Q, this.relativeTarget)),
          U &&
            ((this.animationValues = v), wj(v, g, this.latestValues, G, q, X)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = G);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(f) {
      var p, y, g;
      this.notifyListeners("animationStart"),
        (p = this.currentAnimation) == null || p.stop(),
        (g = (y = this.resumingFrom) == null ? void 0 : y.currentAnimation) ==
          null || g.stop(),
        this.pendingAnimation &&
          (na(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = _t.update(() => {
          (yr.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = Ai(0)),
            (this.currentAnimation = Sj(this.motionValue, [0, 1e3], {
              ...f,
              velocity: 0,
              isSync: !0,
              onUpdate: (v) => {
                this.mixTargetDelta(v), f.onUpdate && f.onUpdate(v);
              },
              onStop: () => {},
              onComplete: () => {
                f.onComplete && f.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const f = this.getStack();
      f && f.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Vj),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const f = this.getLead();
      let {
        targetWithTransforms: p,
        target: y,
        layout: g,
        latestValues: v,
      } = f;
      if (!(!p || !y || !g)) {
        if (
          this !== f &&
          this.layout &&
          g &&
          Fy(this.options.animationType, this.layout.layoutBox, g.layoutBox)
        ) {
          y = this.target || Yt();
          const b = ue(this.layout.layoutBox.x);
          (y.x.min = f.target.x.min), (y.x.max = y.x.min + b);
          const S = ue(this.layout.layoutBox.y);
          (y.y.min = f.target.y.min), (y.y.max = y.y.min + S);
        }
        ke(p, y),
          bi(p, v),
          Ul(this.projectionDeltaWithTransform, this.layoutCorrected, p, v);
      }
    }
    registerSharedNode(f, p) {
      this.sharedNodes.has(f) || this.sharedNodes.set(f, new Oj()),
        this.sharedNodes.get(f).add(p);
      const g = p.options.initialPromotionConfig;
      p.promote({
        transition: g ? g.transition : void 0,
        preserveFollowOpacity:
          g && g.shouldPreserveFollowOpacity
            ? g.shouldPreserveFollowOpacity(p)
            : void 0,
      });
    }
    isLead() {
      const f = this.getStack();
      return f ? f.lead === this : !0;
    }
    getLead() {
      var p;
      const { layoutId: f } = this.options;
      return f
        ? ((p = this.getStack()) == null ? void 0 : p.lead) || this
        : this;
    }
    getPrevLead() {
      var p;
      const { layoutId: f } = this.options;
      return f ? ((p = this.getStack()) == null ? void 0 : p.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: f } = this.options;
      if (f) return this.root.sharedNodes.get(f);
    }
    promote({ needsReset: f, transition: p, preserveFollowOpacity: y } = {}) {
      const g = this.getStack();
      g && g.promote(this, y),
        f && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        p && this.setOptions({ transition: p });
    }
    relegate() {
      const f = this.getStack();
      return f ? f.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: f } = this.options;
      if (!f) return;
      let p = !1;
      const { latestValues: y } = f;
      if (
        ((y.z ||
          y.rotate ||
          y.rotateX ||
          y.rotateY ||
          y.rotateZ ||
          y.skewX ||
          y.skewY) &&
          (p = !0),
        !p)
      )
        return;
      const g = {};
      y.z && cc("z", f, g, this.animationValues);
      for (let v = 0; v < uc.length; v++)
        cc(`rotate${uc[v]}`, f, g, this.animationValues),
          cc(`skew${uc[v]}`, f, g, this.animationValues);
      f.render();
      for (const v in g)
        f.setStaticValue(v, g[v]),
          this.animationValues && (this.animationValues[v] = g[v]);
      f.scheduleRender();
    }
    applyProjectionStyles(f, p) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        f.visibility = "hidden";
        return;
      }
      const y = this.getTransformTemplate();
      if (this.needsReset) {
        (this.needsReset = !1),
          (f.visibility = ""),
          (f.opacity = ""),
          (f.pointerEvents = gr(p == null ? void 0 : p.pointerEvents) || ""),
          (f.transform = y ? y(this.latestValues, "") : "none");
        return;
      }
      const g = this.getLead();
      if (!this.projectionDelta || !this.layout || !g.target) {
        this.options.layoutId &&
          ((f.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (f.pointerEvents = gr(p == null ? void 0 : p.pointerEvents) || "")),
          this.hasProjected &&
            !Na(this.latestValues) &&
            ((f.transform = y ? y({}, "") : "none"), (this.hasProjected = !1));
        return;
      }
      f.visibility = "";
      const v = g.animationValues || g.latestValues;
      this.applyTransformsToTarget();
      let b = _j(this.projectionDeltaWithTransform, this.treeScale, v);
      y && (b = y(v, b)), (f.transform = b);
      const { x: S, y: E } = this.projectionDelta;
      (f.transformOrigin = `${S.origin * 100}% ${E.origin * 100}% 0`),
        g.animationValues
          ? (f.opacity =
              g === this
                ? v.opacity ?? this.latestValues.opacity ?? 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : v.opacityExit)
          : (f.opacity =
              g === this
                ? v.opacity !== void 0
                  ? v.opacity
                  : ""
                : v.opacityExit !== void 0
                ? v.opacityExit
                : 0);
      for (const z in Gl) {
        if (v[z] === void 0) continue;
        const { correct: U, applyTo: Z, isCSSVariable: X } = Gl[z],
          q = b === "none" ? v[z] : U(v[z], g);
        if (Z) {
          const Q = Z.length;
          for (let et = 0; et < Q; et++) f[Z[et]] = q;
        } else
          X ? (this.options.visualElement.renderState.vars[z] = q) : (f[z] = q);
      }
      this.options.layoutId &&
        (f.pointerEvents =
          g === this ? gr(p == null ? void 0 : p.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((f) => {
        var p;
        return (p = f.currentAnimation) == null ? void 0 : p.stop();
      }),
        this.root.nodes.forEach(G0),
        this.root.sharedNodes.clear();
    }
  };
}
function kj(a) {
  a.updateLayout();
}
function Bj(a) {
  var s;
  const l = ((s = a.resumeFrom) == null ? void 0 : s.snapshot) || a.snapshot;
  if (a.isLead() && a.layout && l && a.hasListeners("didUpdate")) {
    const { layoutBox: o, measuredBox: c } = a.layout,
      { animationType: h } = a.options,
      f = l.source !== a.layout.source;
    h === "size"
      ? Be((b) => {
          const S = f ? l.measuredBox[b] : l.layoutBox[b],
            E = ue(S);
          (S.min = o[b].min), (S.max = S.min + E);
        })
      : Fy(h, l.layoutBox, o) &&
        Be((b) => {
          const S = f ? l.measuredBox[b] : l.layoutBox[b],
            E = ue(o[b]);
          (S.max = S.min + E),
            a.relativeTarget &&
              !a.currentAnimation &&
              ((a.isProjectionDirty = !0),
              (a.relativeTarget[b].max = a.relativeTarget[b].min + E));
        });
    const p = Si();
    Ul(p, o, l.layoutBox);
    const y = Si();
    f ? Ul(y, a.applyTransform(c, !0), l.measuredBox) : Ul(y, o, l.layoutBox);
    const g = !Ky(p);
    let v = !1;
    if (!a.resumeFrom) {
      const b = a.getClosestProjectingParent();
      if (b && !b.resumeFrom) {
        const { snapshot: S, layout: E } = b;
        if (S && E) {
          const z = Yt();
          kl(z, l.layoutBox, S.layoutBox);
          const U = Yt();
          kl(U, o, E.layoutBox),
            Qy(z, U) || (v = !0),
            b.options.layoutRoot &&
              ((a.relativeTarget = U),
              (a.relativeTargetOrigin = z),
              (a.relativeParent = b));
        }
      }
    }
    a.notifyListeners("didUpdate", {
      layout: o,
      snapshot: l,
      delta: y,
      layoutDelta: p,
      hasLayoutChanged: g,
      hasRelativeLayoutChanged: v,
    });
  } else if (a.isLead()) {
    const { onExitComplete: o } = a.options;
    o && o();
  }
  a.options.transition = void 0;
}
function Lj(a) {
  a.parent &&
    (a.isProjecting() || (a.isProjectionDirty = a.parent.isProjectionDirty),
    a.isSharedProjectionDirty ||
      (a.isSharedProjectionDirty = !!(
        a.isProjectionDirty ||
        a.parent.isProjectionDirty ||
        a.parent.isSharedProjectionDirty
      )),
    a.isTransformDirty || (a.isTransformDirty = a.parent.isTransformDirty));
}
function Hj(a) {
  a.isProjectionDirty = a.isSharedProjectionDirty = a.isTransformDirty = !1;
}
function qj(a) {
  a.clearSnapshot();
}
function G0(a) {
  a.clearMeasurements();
}
function Y0(a) {
  a.isLayoutDirty = !1;
}
function Gj(a) {
  const { visualElement: l } = a.options;
  l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"),
    a.resetTransform();
}
function X0(a) {
  a.finishAnimation(),
    (a.targetDelta = a.relativeTarget = a.target = void 0),
    (a.isProjectionDirty = !0);
}
function Yj(a) {
  a.resolveTargetDelta();
}
function Xj(a) {
  a.calcProjection();
}
function Zj(a) {
  a.resetSkewAndRotation();
}
function Kj(a) {
  a.removeLeadSnapshot();
}
function Z0(a, l, s) {
  (a.translate = Ut(l.translate, 0, s)),
    (a.scale = Ut(l.scale, 1, s)),
    (a.origin = l.origin),
    (a.originPoint = l.originPoint);
}
function K0(a, l, s, o) {
  (a.min = Ut(l.min, s.min, o)), (a.max = Ut(l.max, s.max, o));
}
function Qj(a, l, s, o) {
  K0(a.x, l.x, s.x, o), K0(a.y, l.y, s.y, o);
}
function Pj(a) {
  return a.animationValues && a.animationValues.opacityExit !== void 0;
}
const Jj = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Q0 = (a) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(a),
  P0 = Q0("applewebkit/") && !Q0("chrome/") ? Math.round : Le;
function J0(a) {
  (a.min = P0(a.min)), (a.max = P0(a.max));
}
function Fj(a) {
  J0(a.x), J0(a.y);
}
function Fy(a, l, s) {
  return (
    a === "position" || (a === "preserve-aspect" && !nj(H0(l), H0(s), 0.2))
  );
}
function $j(a) {
  var l;
  return a !== a.root && ((l = a.scroll) == null ? void 0 : l.wasRoot);
}
const Wj = Jy({
    attachResizeListener: (a, l) => Yl(a, "resize", l),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  fc = { current: void 0 },
  $y = Jy({
    measureScroll: (a) => ({ x: a.scrollLeft, y: a.scrollTop }),
    defaultParent: () => {
      if (!fc.current) {
        const a = new Wj({});
        a.mount(window), a.setOptions({ layoutScroll: !0 }), (fc.current = a);
      }
      return fc.current;
    },
    resetTransform: (a, l) => {
      a.style.transform = l !== void 0 ? l : "none";
    },
    checkIsScrollRoot: (a) => window.getComputedStyle(a).position === "fixed",
  }),
  Ij = {
    pan: { Feature: yj },
    drag: { Feature: gj, ProjectionNode: $y, MeasureLayout: Yy },
  };
function F0(a, l, s) {
  const { props: o } = a;
  a.animationState &&
    o.whileHover &&
    a.animationState.setActive("whileHover", s === "Start");
  const c = "onHover" + s,
    h = o[c];
  h && _t.postRender(() => h(l, Ql(l)));
}
class t6 extends ia {
  mount() {
    const { current: l } = this.node;
    l &&
      (this.unmount = j3(
        l,
        (s, o) => (F0(this.node, o, "Start"), (c) => F0(this.node, c, "End"))
      ));
  }
  unmount() {}
}
class e6 extends ia {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let l = !1;
    try {
      l = this.node.current.matches(":focus-visible");
    } catch {
      l = !0;
    }
    !l ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Xl(
      Yl(this.node.current, "focus", () => this.onFocus()),
      Yl(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
function $0(a, l, s) {
  const { props: o } = a;
  if (a.current instanceof HTMLButtonElement && a.current.disabled) return;
  a.animationState &&
    o.whileTap &&
    a.animationState.setActive("whileTap", s === "Start");
  const c = "onTap" + (s === "End" ? "" : s),
    h = o[c];
  h && _t.postRender(() => h(l, Ql(l)));
}
class n6 extends ia {
  mount() {
    const { current: l } = this.node;
    l &&
      (this.unmount = M3(
        l,
        (s, o) => (
          $0(this.node, o, "Start"),
          (c, { success: h }) => $0(this.node, c, h ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const Bc = new WeakMap(),
  dc = new WeakMap(),
  a6 = (a) => {
    const l = Bc.get(a.target);
    l && l(a);
  },
  i6 = (a) => {
    a.forEach(a6);
  };
function l6({ root: a, ...l }) {
  const s = a || document;
  dc.has(s) || dc.set(s, {});
  const o = dc.get(s),
    c = JSON.stringify(l);
  return o[c] || (o[c] = new IntersectionObserver(i6, { root: a, ...l })), o[c];
}
function s6(a, l, s) {
  const o = l6(l);
  return (
    Bc.set(a, s),
    o.observe(a),
    () => {
      Bc.delete(a), o.unobserve(a);
    }
  );
}
const r6 = { some: 0, all: 1 };
class o6 extends ia {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: l = {} } = this.node.getProps(),
      { root: s, margin: o, amount: c = "some", once: h } = l,
      f = {
        root: s ? s.current : void 0,
        rootMargin: o,
        threshold: typeof c == "number" ? c : r6[c],
      },
      p = (y) => {
        const { isIntersecting: g } = y;
        if (
          this.isInView === g ||
          ((this.isInView = g), h && !g && this.hasEnteredView)
        )
          return;
        g && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", g);
        const { onViewportEnter: v, onViewportLeave: b } = this.node.getProps(),
          S = g ? v : b;
        S && S(y);
      };
    return s6(this.node.current, f, p);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: l, prevProps: s } = this.node;
    ["amount", "margin", "root"].some(u6(l, s)) && this.startObserver();
  }
  unmount() {}
}
function u6({ viewport: a = {} }, { viewport: l = {} } = {}) {
  return (s) => a[s] !== l[s];
}
const c6 = {
    inView: { Feature: o6 },
    tap: { Feature: n6 },
    focus: { Feature: e6 },
    hover: { Feature: t6 },
  },
  f6 = { layout: { ProjectionNode: $y, MeasureLayout: Yy } },
  d6 = { ...FT, ...c6, ...Ij, ...f6 },
  Wn = dT(d6, NT),
  h6 = vg(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    {
      variants: {
        variant: {
          default:
            "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
          destructive:
            "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
          outline:
            "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
          secondary:
            "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
          ghost:
            "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-9 px-4 py-2 has-[>svg]:px-3",
          sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
          lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
          icon: "size-9",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  );
function Ti({ className: a, variant: l, size: s, asChild: o = !1, ...c }) {
  const h = o ? yg : "button";
  return d.jsx(h, {
    "data-slot": "button",
    className: Tn(h6({ variant: l, size: s, className: a })),
    ...c,
  });
}
const m6 = ({
    images: a = [],
    title: l = "معرض صور حضانتنا",
    subtitle:
      s = "اكتشف بيئة التعلم الآمنة والمحفزة التي نوفرها لأطفالكم الأعزاء",
  }) => {
    const [o, c] = Y.useState(null),
      [h, f] = Y.useState("all"),
      [p, y] = Y.useState("grid"),
      [g, v] = Y.useState([]),
      b = [
        {
          id: 1,
          src: "../public/assets/galary-1.jpg",
          alt: "مركز رعاية الأطفال",
          category: "facilities",
          title: "مرافق الحضانة",
        },
        {
          id: 2,
          src: "../public/assets/galary-2.jpg",
          alt: "أطفال يتعلمون مع المعلم",
          category: "learning",
          title: "أنشطة التعلم",
        },
        {
          id: 3,
          src: "../public/assets/galary-3.jpg",
          alt: "فصل دراسي للأطفال",
          category: "classroom",
          title: "الفصول الدراسية",
        },
        {
          id: 4,
          src: "./public/assets/galary-4.webp",
          alt: "أطفال في الزي السعودي",
          category: "culture",
          title: "الثقافة السعودية",
        },
        {
          id: 5,
          src: "./public/assets/galary-5.jpg",
          alt: "طلاب المرحلة الابتدائية",
          category: "students",
          title: "طلابنا",
        },
        {
          id: 6,
          src: "./public/assets/galary-6.jpg",
          alt: "أطفال في الفصل",
          category: "classroom",
          title: "بيئة التعلم",
        },
        {
          id: 7,
          src: "./public/assets/galary-7.jpg",
          alt: "غرفة اللعب",
          category: "playroom",
          title: "غرفة اللعب",
        },
        {
          id: 8,
          src: "./public/assets/galary-8.jpg",
          alt: "منطقة اللعب الداخلية",
          category: "playroom",
          title: "أنشطة اللعب",
        },
      ],
      S = a.length > 0 ? a : b,
      E = [
        { key: "all", label: "جميع الصور", icon: Fn },
        { key: "facilities", label: "المرافق", icon: Fn },
        { key: "learning", label: "التعلم", icon: Fn },
        { key: "classroom", label: "الفصول", icon: Fn },
        { key: "culture", label: "الثقافة", icon: Fn },
        { key: "students", label: "الطلاب", icon: Fn },
        { key: "playroom", label: "اللعب", icon: Fn },
      ];
    Y.useEffect(() => {
      v(h === "all" ? S : S.filter((q) => q.category === h));
    }, [h, S]);
    const z = (q) => {
        c(q);
      },
      U = () => {
        c(null);
      },
      Z = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
      },
      X = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
      };
    return d.jsxs("div", {
      className:
        "w-full max-w-7xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-green-50 min-h-screen",
      dir: "rtl",
      children: [
        d.jsxs("div", {
          className: "text-center mb-12",
          children: [
            d.jsx(Wn.h1, {
              initial: { opacity: 0, y: -30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              className: "text-4xl md:text-5xl font-bold text-gray-800 mb-4",
              children: l,
            }),
            d.jsx(Wn.p, {
              initial: { opacity: 0, y: -20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.2 },
              className: "text-lg text-gray-600 max-w-2xl mx-auto",
              children: s,
            }),
          ],
        }),
        d.jsx(Wn.div, {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.3 },
          className: "flex flex-wrap justify-center gap-3 mb-8",
          children: E.map((q) =>
            d.jsxs(
              Ti,
              {
                onClick: () => f(q.key),
                variant: h === q.key ? "default" : "outline",
                className: `px-6 py-3 rounded-full transition-all duration-300 ${
                  h === q.key
                    ? "bg-blue-600 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`,
                children: [
                  d.jsx(q.icon, { className: "w-4 h-4 ml-2" }),
                  q.label,
                ],
              },
              q.key
            )
          ),
        }),
        d.jsx(Wn.div, {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.5, delay: 0.4 },
          className: "flex justify-center mb-8",
          children: d.jsxs("div", {
            className: "bg-white rounded-full p-1 shadow-md",
            children: [
              d.jsx(Ti, {
                onClick: () => y("grid"),
                variant: p === "grid" ? "default" : "ghost",
                size: "sm",
                className: "rounded-full",
                children: d.jsx(Fn, { className: "w-4 h-4" }),
              }),
              d.jsx(Ti, {
                onClick: () => y("list"),
                variant: p === "list" ? "default" : "ghost",
                size: "sm",
                className: "rounded-full",
                children: d.jsx(fb, { className: "w-4 h-4" }),
              }),
            ],
          }),
        }),
        d.jsx(Wn.div, {
          variants: Z,
          initial: "hidden",
          animate: "visible",
          className: `grid gap-6 ${
            p === "grid"
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              : "grid-cols-1 sm:grid-cols-2"
          }`,
          children: d.jsx(l0, {
            children: g.map((q) =>
              d.jsx(
                Wn.div,
                {
                  variants: X,
                  layout: !0,
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  className: "group cursor-pointer",
                  onClick: () => z(q),
                  children: d.jsxs("div", {
                    className:
                      "relative overflow-hidden rounded-2xl shadow-lg bg-white",
                    children: [
                      d.jsx("div", {
                        className: "aspect-square overflow-hidden",
                        children: d.jsx("img", {
                          src: q.src,
                          alt: q.alt,
                          className:
                            "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                        }),
                      }),
                      d.jsx("div", {
                        className:
                          "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                      }),
                      d.jsxs("div", {
                        className:
                          "absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300",
                        children: [
                          d.jsx("h3", {
                            className: "font-semibold text-lg",
                            children: q.title,
                          }),
                          d.jsx("p", {
                            className: "text-sm opacity-90",
                            children: q.alt,
                          }),
                        ],
                      }),
                    ],
                  }),
                },
                q.id
              )
            ),
          }),
        }),
        d.jsx(l0, {
          children:
            o &&
            d.jsx(Wn.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              className:
                "fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4",
              onClick: U,
              children: d.jsxs(Wn.div, {
                initial: { scale: 0.5, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                exit: { scale: 0.5, opacity: 0 },
                transition: { type: "spring", damping: 25, stiffness: 300 },
                className:
                  "relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden",
                onClick: (q) => q.stopPropagation(),
                children: [
                  d.jsx(Ti, {
                    onClick: U,
                    variant: "ghost",
                    size: "sm",
                    className:
                      "absolute top-4 left-4 z-10 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30",
                    children: d.jsx(ig, { className: "w-5 h-5" }),
                  }),
                  d.jsx("img", {
                    src: o.src,
                    alt: o.alt,
                    className: "w-full h-auto max-h-[70vh] object-contain",
                  }),
                  d.jsxs("div", {
                    className: "p-6 bg-white",
                    children: [
                      d.jsx("h3", {
                        className: "text-2xl font-bold text-gray-800 mb-2",
                        children: o.title,
                      }),
                      d.jsx("p", {
                        className: "text-gray-600",
                        children: o.alt,
                      }),
                    ],
                  }),
                ],
              }),
            }),
        }),
      ],
    });
  },
  p6 = () => {
    const a = [
        {
          id: 1,
          title: "نصائح مهمة لتحضير طفلك لأول يوم في الحضانة",
          excerpt:
            "كيف تساعدين طفلك على التأقلم مع البيئة الجديدة والاستمتاع بتجربة التعلم الأولى",
          category: "نصائح الأبوة",
          image: "../public/assets/kindergarten_education.jpg",
          tags: ["تربية", "نصائح", "أطفال"],
        },
        {
          id: 2,
          title: "فعاليات الأسبوع الثقافي في حضانة الأمل",
          excerpt:
            "شاهدوا أجمل اللحظات من فعاليات الأسبوع الثقافي وأنشطة الأطفال المتنوعة",
          category: "أخبار الحضانة",
          image: "../public/assets/kindergarten_activity1.jpeg",
          tags: ["فعاليات", "ثقافة", "أنشطة"],
        },
        {
          id: 3,
          title: "أهمية اللعب في تنمية مهارات الطفل",
          excerpt:
            "تعرفي على كيفية استخدام اللعب كوسيلة تعليمية فعالة لتطوير قدرات طفلك",
          category: "تعليم وتطوير",
          image: "../public/assets/kindergarten_classroom.jpg",
          tags: ["تعليم", "لعب", "تطوير"],
        },
        {
          id: 4,
          title: "احتفالية اليوم الوطني في حضانتنا",
          excerpt:
            "صور وذكريات جميلة من احتفالنا باليوم الوطني السعودي مع أطفالنا الأعزاء",
          category: "أخبار الحضانة",
          image: "../public/assets/kindergarten_activity2.jpg",
          tags: ["وطني", "احتفال", "تراث"],
        },
        {
          id: 5,
          title: "كيفية اختيار الحضانة المناسبة لطفلك",
          excerpt:
            "دليل شامل للأهل لاختيار أفضل حضانة تناسب احتياجات طفلهم وتوقعاتهم",
          category: "نصائح الأبوة",
          image: "../public/assets/kindergarten_building.webp",
          tags: ["اختيار", "حضانة", "نصائح"],
        },
        {
          id: 6,
          title: "ورشة الفنون والحرف اليدوية للأطفال",
          excerpt:
            "تفاصيل ورشة الفنون الجديدة وكيف تساهم في تنمية الإبداع لدى الأطفال",
          category: "أنشطة وفعاليات",
          image: "../public/assets/kindergarten_education.jpg",
          tags: ["فنون", "إبداع", "ورشة"],
        },
      ],
      l = [
        { name: "نصائح الأبوة" },
        { name: "أخبار الحضانة" },
        { name: "تعليم وتطوير" },
        { name: "أنشطة وفعاليات" },
      ];
    return d.jsx("section", {
      className:
        "py-16 bg-gradient-to-br from-blue-50 via-white to-green-50 min-h-screen",
      dir: "rtl",
      children: d.jsxs("div", {
        className: "container mx-auto px-4 max-w-7xl",
        children: [
          d.jsxs("div", {
            className: "text-center mb-12",
            children: [
              d.jsx("div", {
                className:
                  "inline-flex items-center justify-center w-16 h-16 bg-[#149c8c] rounded-full mb-6",
                children: d.jsx(mc, { className: "w-8 h-8 text-white" }),
              }),
              d.jsx("h2", {
                className: "text-4xl md:text-5xl font-bold text-gray-800 mb-4",
                children: "المدونة والأخبار",
              }),
              d.jsx("p", {
                className:
                  "text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed",
                children:
                  "اكتشفي أحدث النصائح في تربية الأطفال، وتابعي أخبار حضانتنا وفعالياتها المميزة",
              }),
            ],
          }),
          d.jsx("div", {
            className: "flex flex-wrap justify-center gap-3 mb-12",
            children: l.map((s, o) =>
              d.jsx(
                "button",
                {
                  className: `px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    s
                      ? "bg-[#149c8c] text-white shadow-lg"
                      : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-[#023047]"
                  }`,
                  children: s.name,
                },
                o
              )
            ),
          }),
          d.jsx("div", {
            className:
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12",
            children: a.map((s) =>
              d.jsxs(
                "article",
                {
                  className:
                    "bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group",
                  children: [
                    d.jsxs("div", {
                      className: "relative overflow-hidden h-48",
                      children: [
                        d.jsx("img", {
                          src: s.image,
                          alt: s.title,
                          className:
                            "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                        }),
                        d.jsx("div", {
                          className: "absolute top-4 right-4",
                          children: d.jsx("span", {
                            className:
                              "bg-gradient-to-r from-blue-500 to-green-500 text-white px-3 py-1 rounded-full text-xs font-medium",
                            children: s.category,
                          }),
                        }),
                        d.jsx("div", {
                          className:
                            "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                        }),
                      ],
                    }),
                    d.jsxs("div", {
                      className: "p-6",
                      children: [
                        d.jsx("h3", {
                          className:
                            "text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300",
                          children: s.title,
                        }),
                        d.jsx("p", {
                          className:
                            "text-gray-600 mb-4 line-clamp-3 leading-relaxed",
                          children: s.excerpt,
                        }),
                        d.jsx("div", {
                          className: "flex flex-wrap gap-2 mb-4",
                          children: s.tags.map((o, c) =>
                            d.jsxs(
                              "span",
                              {
                                className:
                                  "bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200",
                                children: ["#", o],
                              },
                              c
                            )
                          ),
                        }),
                        d.jsxs("button", {
                          className:
                            "w-full bg-[#149c8c] text-white py-3 px-4 rounded-xl font-medium hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group",
                          children: [
                            d.jsx(I0, {
                              className:
                                "w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1",
                            }),
                            d.jsx("span", { children: "اقرأ المزيد" }),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                s.id
              )
            ),
          }),
          d.jsx("div", {
            className: "bg-white rounded-2xl shadow-lg p-8 mb-12",
            children: d.jsxs("div", {
              className: "grid grid-cols-1 md:grid-cols-4 gap-6",
              children: [
                d.jsxs("div", {
                  className: "text-center",
                  children: [
                    d.jsx("div", {
                      className:
                        "inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3",
                      children: d.jsx(mc, {
                        className: "w-6 h-6 text-blue-600",
                      }),
                    }),
                    d.jsx("h4", {
                      className: "text-2xl font-bold text-gray-800 mb-1",
                      children: "150+",
                    }),
                    d.jsx("p", {
                      className: "text-gray-600",
                      children: "مقال تعليمي",
                    }),
                  ],
                }),
                d.jsxs("div", {
                  className: "text-center",
                  children: [
                    d.jsx("div", {
                      className:
                        "inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3",
                      children: d.jsx(qc, {
                        className: "w-6 h-6 text-green-600",
                      }),
                    }),
                    d.jsx("h4", {
                      className: "text-2xl font-bold text-gray-800 mb-1",
                      children: "5000+",
                    }),
                    d.jsx("p", {
                      className: "text-gray-600",
                      children: "أولياء أمور",
                    }),
                  ],
                }),
                d.jsxs("div", {
                  className: "text-center",
                  children: [
                    d.jsx("div", {
                      className:
                        "inline-flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mb-3",
                      children: d.jsx(Ra, {
                        className: "w-6 h-6 text-yellow-600",
                      }),
                    }),
                    d.jsx("h4", {
                      className: "text-2xl font-bold text-gray-800 mb-1",
                      children: "4.9",
                    }),
                    d.jsx("p", {
                      className: "text-gray-600",
                      children: "تقييم المحتوى",
                    }),
                  ],
                }),
                d.jsxs("div", {
                  className: "text-center",
                  children: [
                    d.jsx("div", {
                      className:
                        "inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-3",
                      children: d.jsx(ta, {
                        className: "w-6 h-6 text-red-600",
                      }),
                    }),
                    d.jsx("h4", {
                      className: "text-2xl font-bold text-gray-800 mb-1",
                      children: "98%",
                    }),
                    d.jsx("p", {
                      className: "text-gray-600",
                      children: "رضا الأهالي",
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  g6 = () => {
    const [a, l] = Y.useState({}),
      s = (c) => {
        l((h) => ({ ...h, [c]: !h[c] }));
      },
      o = [
        {
          question: "ما هي الفئة العمرية التي تستقبلها الحضانة؟",
          answer: "تستقبل حضانتنا الأطفال من عمر 3 أشهر وحتى 4 سنوات.",
        },
        {
          question: "ما هي ساعات عمل الحضانة؟",
          answer:
            "تعمل الحضانة من الأحد إلى الخميس، من الساعة 7:00 صباحًا وحتى 4:00 مساءً. تتوفر ساعات إضافية حتى الساعة 6:00 مساءً برسوم إضافية.",
        },
        {
          question: "هل توفر الحضانة وجبات طعام للأطفال؟",
          answer:
            "نعم، توفر الحضانة وجبتين صحيتين (فطور وغداء) ووجبة خفيفة، مع مراعاة أي حساسيات أو احتياجات غذائية خاصة للأطفال.",
        },
        {
          question: "ما هي الأنشطة التعليمية والترفيهية المقدمة؟",
          answer:
            "نقدم مجموعة متنوعة من الأنشطة التي تشمل اللعب الحر، الأنشطة الفنية والحرفية، القصص، الأغاني، الألعاب التعليمية، والأنشطة الحركية في الأماكن المخصصة للعب الداخلي والخارجي.",
        },
        {
          question: "كيف تتواصلون مع أولياء الأمور بخصوص تقدم أطفالهم؟",
          answer:
            "نتواصل مع أولياء الأمور بشكل يومي من خلال تقارير موجزة، بالإضافة إلى اجتماعات دورية لمناقشة تقدم الطفل وتطوره. كما يمكن التواصل معنا في أي وقت عبر الهاتف أو البريد الإلكتروني.",
        },
        {
          question: "ما هي إجراءات السلامة المتبعة في الحضانة؟",
          answer:
            "نتبع أعلى معايير السلامة والنظافة، حيث يتم تعقيم الألعاب والمرافق بانتظام. جميع موظفينا مدربون على الإسعافات الأولية، وتوجد كاميرات مراقبة في جميع أنحاء الحضانة لضمان سلامة الأطفال.",
        },
        {
          question: "هل يمكنني زيارة الحضانة قبل تسجيل طفلي؟",
          answer:
            "نرحب بزيارات أولياء الأمور للتعرف على مرافق الحضانة والبيئة التعليمية. يرجى الاتصال بنا لتحديد موعد للزيارة.",
        },
        {
          question: "ما هي المستندات المطلوبة للتسجيل؟",
          answer:
            "المستندات المطلوبة تشمل: صورة من شهادة ميلاد الطفل، صورة من سجل الأسرة، صور شخصية للطفل، وصورة من بطاقة هوية ولي الأمر، بالإضافة إلى تعبئة نموذج التسجيل الصحي.",
        },
        {
          question:
            "هل تقدمون برامج تعليمية خاصة للأطفال ذوي الاحتياجات الخاصة؟",
          answer:
            "يرجى التواصل معنا لمناقشة احتياجات طفلك الخاصة، وسنعمل على توفير الدعم المناسب قدر الإمكان.",
        },
        {
          question: "ما هي رسوم التسجيل والدفع؟",
          answer:
            "تختلف الرسوم حسب الفئة العمرية وساعات الحضور. يرجى الاتصال بنا للحصول على تفاصيل كاملة حول الرسوم وخيارات الدفع المتاحة.",
        },
      ];
    return d.jsx("section", {
      className:
        "py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen",
      dir: "rtl",
      children: d.jsxs("div", {
        className: "max-w-4xl mx-auto",
        children: [
          d.jsxs("div", {
            className: "text-center mb-12",
            children: [
              d.jsxs("div", {
                className: "flex justify-center items-center mb-4",
                children: [
                  d.jsx(F1, { className: "w-12 h-12 text-blue-600 ml-3" }),
                  d.jsx("h1", {
                    className: "text-4xl font-bold text-gray-800",
                    children: "الأسئلة الشائعة",
                  }),
                ],
              }),
              d.jsx("p", {
                className: "text-xl text-gray-600 max-w-2xl mx-auto",
                children: "إجابات على الأسئلة المتكررة من أولياء الأمور",
              }),
              d.jsx("div", {
                className:
                  "w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full",
              }),
            ],
          }),
          d.jsx("div", {
            className: "space-y-4",
            children: o.map((c, h) =>
              d.jsxs(
                "div",
                {
                  className:
                    "bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100",
                  children: [
                    d.jsxs("button", {
                      onClick: () => s(h),
                      className:
                        "w-full px-6 py-5 text-right flex items-center justify-between hover:bg-gray-50 transition-colors duration-200",
                      children: [
                        d.jsx("div", {
                          className: "flex items-center",
                          children: a[h]
                            ? d.jsx(X1, {
                                className: "w-6 h-6 text-blue-600 ml-3",
                              })
                            : d.jsx(G1, {
                                className: "w-6 h-6 text-blue-600 ml-3",
                              }),
                        }),
                        d.jsx("h3", {
                          className:
                            "text-lg font-semibold text-gray-800 flex-1",
                          children: c.question,
                        }),
                      ],
                    }),
                    a[h] &&
                      d.jsx("div", {
                        className: "px-6 pb-5 animate-fadeIn",
                        children: d.jsx("div", {
                          className: "border-t border-gray-100 pt-4",
                          children: d.jsx("p", {
                            className:
                              "text-gray-700 leading-relaxed text-base",
                            children: c.answer,
                          }),
                        }),
                      }),
                  ],
                },
                h
              )
            ),
          }),
          d.jsxs("div", {
            className:
              "mt-12 text-center bg-white rounded-xl shadow-lg p-8 border border-gray-100",
            children: [
              d.jsx("h3", {
                className: "text-2xl font-bold text-gray-800 mb-4",
                children: "لم تجد إجابة لسؤالك؟",
              }),
              d.jsx("p", {
                className: "text-gray-600 mb-6",
                children: "لا تتردد في التواصل معنا، فريقنا جاهز لمساعدتك",
              }),
              d.jsxs("div", {
                className: "flex flex-col sm:flex-row gap-4 justify-center",
                children: [
                  d.jsx("button", {
                    className:
                      "bg-[#149c8c] bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#072838] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl border border-black",
                    children: "اتصل بنا",
                  }),
                  d.jsx("button", {
                    className:
                      "border-2 text-white bg-[#149c8c] px-8 py-3 rounded-lg font-semibold hover:bg-[#072838] hover:text-white transition-all duration-300",
                    children: "احجز زيارة",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  };
function hc({ className: a, type: l, ...s }) {
  return d.jsx("input", {
    type: l,
    "data-slot": "input",
    className: Tn(
      "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
      "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
      a
    ),
    ...s,
  });
}
function y6({ className: a, ...l }) {
  return d.jsx("textarea", {
    "data-slot": "textarea",
    className: Tn(
      "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      a
    ),
    ...l,
  });
}
const v6 = () => {
    const [a, l] = Y.useState({ name: "", email: "", phone: "", message: "" }),
      [s, o] = Y.useState({}),
      [c, h] = Y.useState(!1),
      f = (S) => {
        const { name: E, value: z } = S.target;
        l((U) => ({ ...U, [E]: z })), s[E] && o((U) => ({ ...U, [E]: "" }));
      },
      p = () => {
        const S = {};
        return (
          a.name.trim() || (S.name = "الاسم مطلوب"),
          a.email.trim()
            ? /\S+@\S+\.\S+/.test(a.email) ||
              (S.email = "البريد الإلكتروني غير صحيح")
            : (S.email = "البريد الإلكتروني مطلوب"),
          a.phone.trim() || (S.phone = "رقم الهاتف مطلوب"),
          a.message.trim() || (S.message = "الرسالة مطلوبة"),
          S
        );
      },
      y = async (S) => {
        S.preventDefault();
        const E = p();
        if (Object.keys(E).length > 0) {
          o(E);
          return;
        }
        h(!0),
          setTimeout(() => {
            alert("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً."),
              l({ name: "", email: "", phone: "", message: "" }),
              h(!1);
          }, 1e3);
      },
      g = [
        {
          icon: ea,
          title: "الهاتف",
          details: ["+966 11 234 5678", "+966 50 123 4567"],
          color: "text-green-600",
        },
        {
          icon: vr,
          title: "البريد الإلكتروني",
          details: ["info@nursery.com", "contact@nursery.com"],
          color: "text-blue-600",
        },
        {
          icon: xr,
          title: "العنوان",
          details: [
            "شارع الملك فهد، حي النخيل",
            "الرياض، المملكة العربية السعودية",
          ],
          color: "text-red-600",
        },
      ],
      v = [
        { day: "الأحد - الخميس", hours: "7:00 ص - 6:00 م" },
        { day: "الجمعة", hours: "8:00 ص - 4:00 م" },
        { day: "السبت", hours: "مغلق" },
      ],
      b = [
        { icon: tg, name: "فيسبوك", url: "#", color: "hover:text-blue-600" },
        { icon: eg, name: "إنستغرام", url: "#", color: "hover:text-pink-600" },
        { icon: ng, name: "تويتر", url: "#", color: "hover:text-blue-400" },
      ];
    return d.jsx("section", {
      className:
        "py-16 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen",
      children: d.jsxs("div", {
        className: "container mx-auto px-4 max-w-7xl",
        children: [
          d.jsxs("div", {
            className: "text-center mb-16",
            children: [
              d.jsx("h2", {
                className: "text-4xl md:text-5xl font-bold text-gray-800 mb-4",
                children: "تواصل معنا",
              }),
              d.jsx("p", {
                className: "text-xl text-gray-600 max-w-2xl mx-auto",
                children:
                  "نحن هنا للإجابة على جميع استفساراتك وتقديم أفضل رعاية لأطفالكم",
              }),
            ],
          }),
          d.jsxs("div", {
            className: "grid lg:grid-cols-2 gap-12",
            children: [
              d.jsxs(gn, {
                className: "shadow-xl border-0 bg-white/80 backdrop-blur-sm",
                children: [
                  d.jsx(yn, {
                    className: "text-center pb-6",
                    children: d.jsxs(vn, {
                      className:
                        "text-2xl font-bold text-gray-800 flex items-center justify-center gap-2",
                      children: [
                        d.jsx(yb, { className: "w-6 h-6 text-blue-600" }),
                        "أرسل لنا رسالة",
                      ],
                    }),
                  }),
                  d.jsx(xn, {
                    children: d.jsxs("form", {
                      onSubmit: y,
                      className: "space-y-6",
                      children: [
                        d.jsxs("div", {
                          children: [
                            d.jsx("label", {
                              className:
                                "block text-sm font-medium text-gray-700 mb-2",
                              children: "الاسم الكامل *",
                            }),
                            d.jsxs("div", {
                              className: "relative",
                              children: [
                                d.jsx(ag, {
                                  className:
                                    "absolute right-3 top-3 w-5 h-5 text-gray-400",
                                }),
                                d.jsx(hc, {
                                  type: "text",
                                  name: "name",
                                  value: a.name,
                                  onChange: f,
                                  className: `pr-10 ${
                                    s.name ? "border-red-500" : ""
                                  }`,
                                  placeholder: "أدخل اسمك الكامل",
                                }),
                              ],
                            }),
                            s.name &&
                              d.jsx("p", {
                                className: "text-red-500 text-sm mt-1",
                                children: s.name,
                              }),
                          ],
                        }),
                        d.jsxs("div", {
                          children: [
                            d.jsx("label", {
                              className:
                                "block text-sm font-medium text-gray-700 mb-2",
                              children: "البريد الإلكتروني *",
                            }),
                            d.jsxs("div", {
                              className: "relative",
                              children: [
                                d.jsx(vr, {
                                  className:
                                    "absolute right-3 top-3 w-5 h-5 text-gray-400",
                                }),
                                d.jsx(hc, {
                                  type: "email",
                                  name: "email",
                                  value: a.email,
                                  onChange: f,
                                  className: `pr-10 ${
                                    s.email ? "border-red-500" : ""
                                  }`,
                                  placeholder: "example@email.com",
                                }),
                              ],
                            }),
                            s.email &&
                              d.jsx("p", {
                                className: "text-red-500 text-sm mt-1",
                                children: s.email,
                              }),
                          ],
                        }),
                        d.jsxs("div", {
                          children: [
                            d.jsx("label", {
                              className:
                                "block text-sm font-medium text-gray-700 mb-2",
                              children: "رقم الهاتف *",
                            }),
                            d.jsxs("div", {
                              className: "relative",
                              children: [
                                d.jsx(ea, {
                                  className:
                                    "absolute right-3 top-3 w-5 h-5 text-gray-400",
                                }),
                                d.jsx(hc, {
                                  type: "tel",
                                  name: "phone",
                                  value: a.phone,
                                  onChange: f,
                                  className: `pr-10 ${
                                    s.phone ? "border-red-500" : ""
                                  }`,
                                  placeholder: "+966 50 123 4567",
                                }),
                              ],
                            }),
                            s.phone &&
                              d.jsx("p", {
                                className: "text-red-500 text-sm mt-1",
                                children: s.phone,
                              }),
                          ],
                        }),
                        d.jsxs("div", {
                          children: [
                            d.jsx("label", {
                              className:
                                "block text-sm font-medium text-gray-700 mb-2",
                              children: "الرسالة *",
                            }),
                            d.jsx(y6, {
                              name: "message",
                              value: a.message,
                              onChange: f,
                              className: `min-h-32 ${
                                s.message ? "border-red-500" : ""
                              }`,
                              placeholder: "اكتب رسالتك هنا...",
                            }),
                            s.message &&
                              d.jsx("p", {
                                className: "text-red-500 text-sm mt-1",
                                children: s.message,
                              }),
                          ],
                        }),
                        d.jsx(Ti, {
                          type: "submit",
                          className:
                            "w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg font-semibold",
                          disabled: c,
                          children: c
                            ? "جاري الإرسال..."
                            : d.jsxs(d.Fragment, {
                                children: [
                                  d.jsx(Ab, { className: "w-5 h-5 ml-2" }),
                                  "إرسال الرسالة",
                                ],
                              }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              d.jsxs("div", {
                className: "space-y-8",
                children: [
                  d.jsxs(gn, {
                    className:
                      "shadow-xl border-0 bg-white/80 backdrop-blur-sm",
                    children: [
                      d.jsx(yn, {
                        children: d.jsx(vn, {
                          className: "text-2xl font-bold text-gray-800",
                          children: "معلومات الاتصال",
                        }),
                      }),
                      d.jsx(xn, {
                        className: "space-y-6",
                        children: g.map((S, E) =>
                          d.jsxs(
                            "div",
                            {
                              className: "flex items-start gap-4",
                              children: [
                                d.jsx("div", {
                                  className: `p-3 rounded-full bg-gray-100 ${S.color}`,
                                  children: d.jsx(S.icon, {
                                    className: "w-6 h-6",
                                  }),
                                }),
                                d.jsxs("div", {
                                  children: [
                                    d.jsx("h4", {
                                      className:
                                        "font-semibold text-gray-800 mb-1",
                                      children: S.title,
                                    }),
                                    S.details.map((z, U) =>
                                      d.jsx(
                                        "p",
                                        {
                                          className: "text-gray-600",
                                          children: z,
                                        },
                                        U
                                      )
                                    ),
                                  ],
                                }),
                              ],
                            },
                            E
                          )
                        ),
                      }),
                    ],
                  }),
                  d.jsxs(gn, {
                    className:
                      "shadow-xl border-0 bg-white/80 backdrop-blur-sm",
                    children: [
                      d.jsx(yn, {
                        children: d.jsxs(vn, {
                          className:
                            "text-2xl font-bold text-gray-800 flex items-center gap-2",
                          children: [
                            d.jsx(Hc, { className: "w-6 h-6 text-blue-600" }),
                            "ساعات العمل",
                          ],
                        }),
                      }),
                      d.jsx(xn, {
                        children: d.jsx("div", {
                          className: "space-y-3",
                          children: v.map((S, E) =>
                            d.jsxs(
                              "div",
                              {
                                className:
                                  "flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0",
                                children: [
                                  d.jsx("span", {
                                    className: "font-medium text-gray-800",
                                    children: S.day,
                                  }),
                                  d.jsx("span", {
                                    className: "text-gray-600",
                                    children: S.hours,
                                  }),
                                ],
                              },
                              E
                            )
                          ),
                        }),
                      }),
                    ],
                  }),
                  d.jsxs(gn, {
                    className:
                      "shadow-xl border-0 bg-white/80 backdrop-blur-sm",
                    children: [
                      d.jsx(yn, {
                        children: d.jsx(vn, {
                          className: "text-2xl font-bold text-gray-800",
                          children: "تابعونا على",
                        }),
                      }),
                      d.jsx(xn, {
                        children: d.jsx("div", {
                          className: "flex gap-4",
                          children: b.map((S, E) =>
                            d.jsx(
                              "a",
                              {
                                href: S.url,
                                className: `p-3 rounded-full bg-gray-100 text-gray-600 transition-colors duration-300 ${S.color}`,
                                title: S.name,
                                children: d.jsx(S.icon, {
                                  className: "w-6 h-6",
                                }),
                              },
                              E
                            )
                          ),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          d.jsxs(gn, {
            className: "mt-12 shadow-xl border-0 bg-white/80 backdrop-blur-sm",
            children: [
              d.jsx(yn, {
                children: d.jsxs(vn, {
                  className:
                    "text-2xl font-bold text-gray-800 flex items-center gap-2",
                  children: [
                    d.jsx(xr, { className: "w-6 h-6 text-red-600" }),
                    "موقعنا على الخريطة",
                  ],
                }),
              }),
              d.jsx(xn, {
                children: d.jsx("div", {
                  className: "w-full h-96 rounded-lg overflow-hidden",
                  children: d.jsx("iframe", {
                    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.2!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1635000000000!5m2!1sen!2s",
                    width: "100%",
                    height: "100%",
                    style: { border: 0 },
                    allowFullScreen: "",
                    loading: "lazy",
                    referrerPolicy: "no-referrer-when-downgrade",
                    title: "موقع الحضانة",
                  }),
                }),
              }),
            ],
          }),
        ],
      }),
    });
  },
  x6 = () => {
    const a = [
        {
          step: 1,
          title: "تقديم الطلب",
          description: "ملء نموذج التسجيل الإلكتروني أو زيارة الحضانة",
          icon: Ep,
          color: "bg-blue-500",
        },
        {
          step: 2,
          title: "تقديم الأوراق",
          description: "إحضار جميع الوثائق والأوراق المطلوبة",
          icon: P1,
          color: "bg-green-500",
        },
        {
          step: 3,
          title: "المقابلة الشخصية",
          description: "لقاء مع إدارة الحضانة لمناقشة احتياجات الطفل",
          icon: ag,
          color: "bg-purple-500",
        },
        {
          step: 4,
          title: "دفع الرسوم",
          description: "سداد رسوم التسجيل والشهر الأول",
          icon: Ju,
          color: "bg-orange-500",
        },
        {
          step: 5,
          title: "بداية الدراسة",
          description: "استقبال الطفل وبداية رحلته التعليمية",
          icon: Dp,
          color: "bg-pink-500",
        },
      ],
      l = [
        {
          title: "شهادة ميلاد الطفل",
          description: "نسخة أصلية ونسخة مصورة",
          required: !0,
        },
        {
          title: "صور شخصية للطفل",
          description: "4 صور حديثة مقاس 4×6",
          required: !0,
        },
        {
          title: "التقرير الطبي",
          description: "فحص طبي شامل وشهادة التطعيمات",
          required: !0,
        },
        {
          title: "هوية ولي الأمر",
          description: "نسخة من الهوية الوطنية أو الإقامة",
          required: !0,
        },
        {
          title: "إثبات السكن",
          description: "عقد إيجار أو فاتورة خدمات",
          required: !1,
        },
        {
          title: "شهادة راتب ولي الأمر",
          description: "لتحديد الرسوم المناسبة",
          required: !1,
        },
      ],
      s = [
        {
          category: "رسوم التسجيل",
          amount: "500 ريال",
          description: "تدفع مرة واحدة عند التسجيل (غير قابلة للاسترداد)",
          color: "bg-blue-50 border-blue-200",
        },
        {
          category: "الرسوم الشهرية",
          amount: "1,200 - 1,800 ريال",
          description: "حسب العمر والبرنامج المختار",
          color: "bg-green-50 border-green-200",
        },
        {
          category: "رسوم الوجبات",
          amount: "300 ريال شهرياً",
          description: "وجبات صحية ومتوازنة (اختيارية)",
          color: "bg-orange-50 border-orange-200",
        },
        {
          category: "رسوم النقل",
          amount: "400 ريال شهرياً",
          description: "خدمة النقل من وإلى المنزل (اختيارية)",
          color: "bg-purple-50 border-purple-200",
        },
      ],
      o = [
        {
          method: "التحويل البنكي",
          details: "البنك الأهلي السعودي - رقم الحساب: 123456789",
          icon: Ju,
        },
        {
          method: "الدفع النقدي",
          details: "في مكتب الإدارة خلال ساعات العمل الرسمية",
          icon: tb,
        },
        {
          method: "الدفع الإلكتروني",
          details: "عبر تطبيق البنك أو منصة مدى",
          icon: ea,
        },
      ];
    return d.jsx("section", {
      className:
        "py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen",
      children: d.jsxs("div", {
        className: "container mx-auto px-4 max-w-7xl",
        children: [
          d.jsxs("div", {
            className: "text-center mb-16",
            children: [
              d.jsx("h1", {
                className: "text-4xl md:text-5xl font-bold text-gray-800 mb-4",
                children: "التسجيل والقبول",
              }),
              d.jsx("p", {
                className: "text-xl text-gray-600 max-w-3xl mx-auto",
                children:
                  "انضم إلى عائلة حضانتنا واحصل على أفضل رعاية تعليمية لطفلك في بيئة آمنة ومحفزة للإبداع والنمو",
              }),
            ],
          }),
          d.jsxs(gn, {
            className: "mb-16 shadow-xl border-0 bg-white/80 backdrop-blur-sm",
            children: [
              d.jsx(yn, {
                className: "text-center pb-6",
                children: d.jsxs(vn, {
                  className:
                    "text-3xl font-bold text-gray-800 flex items-center justify-center gap-3",
                  children: [
                    d.jsx(Dp, { className: "w-8 h-8 text-blue-600" }),
                    "خطوات عملية التسجيل",
                  ],
                }),
              }),
              d.jsx(xn, {
                children: d.jsx("div", {
                  className: "grid md:grid-cols-5 gap-6",
                  children: a.map((c, h) =>
                    d.jsxs(
                      "div",
                      {
                        className: "text-center",
                        children: [
                          d.jsx("div", {
                            className: `w-16 h-16 ${c.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`,
                            children: d.jsx(c.icon, {
                              className: "w-8 h-8 text-white",
                            }),
                          }),
                          d.jsxs("div", {
                            className:
                              "bg-white rounded-lg p-4 shadow-md border border-gray-100",
                            children: [
                              d.jsx("div", {
                                className:
                                  "text-2xl font-bold text-gray-800 mb-2",
                                children: c.step,
                              }),
                              d.jsx("h3", {
                                className: "font-semibold text-gray-800 mb-2",
                                children: c.title,
                              }),
                              d.jsx("p", {
                                className: "text-sm text-gray-600",
                                children: c.description,
                              }),
                            ],
                          }),
                        ],
                      },
                      h
                    )
                  ),
                }),
              }),
            ],
          }),
          d.jsxs("div", {
            className: "grid lg:grid-cols-2 gap-12 mb-16",
            children: [
              d.jsxs(gn, {
                className: "shadow-xl border-0 bg-white/80 backdrop-blur-sm",
                children: [
                  d.jsx(yn, {
                    children: d.jsxs(vn, {
                      className:
                        "text-2xl font-bold text-gray-800 flex items-center gap-3",
                      children: [
                        d.jsx(Ep, { className: "w-6 h-6 text-green-600" }),
                        "المتطلبات والأوراق المطلوبة",
                      ],
                    }),
                  }),
                  d.jsxs(xn, {
                    className: "space-y-4",
                    children: [
                      l.map((c, h) =>
                        d.jsxs(
                          "div",
                          {
                            className:
                              "flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200",
                            children: [
                              d.jsx("div", {
                                className: "flex-shrink-0",
                                children: c.required
                                  ? d.jsx(K1, {
                                      className: "w-5 h-5 text-red-500 mt-1",
                                    })
                                  : d.jsx(Ra, {
                                      className: "w-5 h-5 text-yellow-500 mt-1",
                                    }),
                              }),
                              d.jsxs("div", {
                                className: "flex-1",
                                children: [
                                  d.jsxs("div", {
                                    className: "flex items-center gap-2 mb-1",
                                    children: [
                                      d.jsx("h4", {
                                        className:
                                          "font-semibold text-gray-800",
                                        children: c.title,
                                      }),
                                      d.jsx(xg, {
                                        variant: c.required
                                          ? "destructive"
                                          : "secondary",
                                        className: "text-xs",
                                        children: c.required
                                          ? "مطلوب"
                                          : "اختياري",
                                      }),
                                    ],
                                  }),
                                  d.jsx("p", {
                                    className: "text-sm text-gray-600",
                                    children: c.description,
                                  }),
                                ],
                              }),
                            ],
                          },
                          h
                        )
                      ),
                      d.jsxs("div", {
                        className:
                          "mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200",
                        children: [
                          d.jsxs("div", {
                            className: "flex items-center gap-2 mb-2",
                            children: [
                              d.jsx(Mp, { className: "w-5 h-5 text-blue-600" }),
                              d.jsx("span", {
                                className: "font-semibold text-blue-800",
                                children: "تحميل النماذج",
                              }),
                            ],
                          }),
                          d.jsx("p", {
                            className: "text-sm text-blue-700 mb-3",
                            children:
                              "يمكنك تحميل جميع النماذج المطلوبة وملؤها مسبقاً لتوفير الوقت",
                          }),
                          d.jsxs(Ti, {
                            className:
                              "bg-blue-600 hover:bg-blue-700 text-white",
                            children: [
                              d.jsx(Mp, { className: "w-4 h-4 ml-2" }),
                              "تحميل النماذج",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              d.jsxs(gn, {
                className: "shadow-xl border-0 bg-white/80 backdrop-blur-sm",
                children: [
                  d.jsx(yn, {
                    children: d.jsxs(vn, {
                      className:
                        "text-2xl font-bold text-gray-800 flex items-center gap-3",
                      children: [
                        d.jsx(Ju, { className: "w-6 h-6 text-purple-600" }),
                        "الرسوم الدراسية",
                      ],
                    }),
                  }),
                  d.jsxs(xn, {
                    className: "space-y-4",
                    children: [
                      s.map((c, h) =>
                        d.jsxs(
                          "div",
                          {
                            className: `p-4 rounded-lg border-2 ${c.color}`,
                            children: [
                              d.jsxs("div", {
                                className:
                                  "flex justify-between items-start mb-2",
                                children: [
                                  d.jsx("h4", {
                                    className: "font-semibold text-gray-800",
                                    children: c.category,
                                  }),
                                  d.jsx("span", {
                                    className:
                                      "text-lg font-bold text-gray-800",
                                    children: c.amount,
                                  }),
                                ],
                              }),
                              d.jsx("p", {
                                className: "text-sm text-gray-600",
                                children: c.description,
                              }),
                            ],
                          },
                          h
                        )
                      ),
                      d.jsxs("div", {
                        className:
                          "mt-6 p-4 bg-green-50 rounded-lg border border-green-200",
                        children: [
                          d.jsx("h4", {
                            className: "font-semibold text-green-800 mb-2",
                            children: "طرق الدفع المتاحة",
                          }),
                          d.jsx("div", {
                            className: "space-y-3",
                            children: o.map((c, h) =>
                              d.jsxs(
                                "div",
                                {
                                  className: "flex items-start gap-3",
                                  children: [
                                    d.jsx(c.icon, {
                                      className: "w-5 h-5 text-green-600 mt-1",
                                    }),
                                    d.jsxs("div", {
                                      children: [
                                        d.jsx("div", {
                                          className:
                                            "font-medium text-green-800",
                                          children: c.method,
                                        }),
                                        d.jsx("div", {
                                          className: "text-sm text-green-700",
                                          children: c.details,
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                h
                              )
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  };
function b6() {
  return d.jsxs("div", {
    className: "min-h-screen",
    children: [
      d.jsx(_b, {}),
      d.jsx(kb, {}),
      d.jsx(Hb, {}),
      d.jsx(_2, {}),
      d.jsx(m6, {}),
      d.jsx(x6, {}),
      d.jsx(p6, {}),
      d.jsx(g6, {}),
      d.jsx(v6, {}),
      d.jsx(Bb, {}),
      d.jsx("img", { src: "../public/assets/about.jpg", alt: "" }),
    ],
  });
}
D1.createRoot(document.getElementById("root")).render(
  d.jsx(Y.StrictMode, { children: d.jsx(b6, {}) })
);
