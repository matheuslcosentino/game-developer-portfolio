function sh(o, i) {
  for (var l = 0; l < i.length; l++) {
    const c = i[l];
    if (typeof c != 'string' && !Array.isArray(c)) {
      for (const u in c)
        if (u !== 'default' && !(u in o)) {
          const f = Object.getOwnPropertyDescriptor(c, u);
          f &&
            Object.defineProperty(
              o,
              u,
              f.get ? f : { enumerable: !0, get: () => c[u] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(o, Symbol.toStringTag, { value: 'Module' }),
  );
}
(function () {
  const i = document.createElement('link').relList;
  if (i && i.supports && i.supports('modulepreload')) return;
  for (const u of document.querySelectorAll('link[rel="modulepreload"]')) c(u);
  new MutationObserver((u) => {
    for (const f of u)
      if (f.type === 'childList')
        for (const p of f.addedNodes)
          p.tagName === 'LINK' && p.rel === 'modulepreload' && c(p);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(u) {
    const f = {};
    return (
      u.integrity && (f.integrity = u.integrity),
      u.referrerPolicy && (f.referrerPolicy = u.referrerPolicy),
      u.crossOrigin === 'use-credentials'
        ? (f.credentials = 'include')
        : u.crossOrigin === 'anonymous'
          ? (f.credentials = 'omit')
          : (f.credentials = 'same-origin'),
      f
    );
  }
  function c(u) {
    if (u.ep) return;
    u.ep = !0;
    const f = l(u);
    fetch(u.href, f);
  }
})();
function tf(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, 'default')
    ? o.default
    : o;
}
var ta = { exports: {} },
  Oo = {},
  na = { exports: {} },
  ke = {};
var dd;
function lh() {
  if (dd) return ke;
  dd = 1;
  var o = Symbol.for('react.element'),
    i = Symbol.for('react.portal'),
    l = Symbol.for('react.fragment'),
    c = Symbol.for('react.strict_mode'),
    u = Symbol.for('react.profiler'),
    f = Symbol.for('react.provider'),
    p = Symbol.for('react.context'),
    x = Symbol.for('react.forward_ref'),
    h = Symbol.for('react.suspense'),
    g = Symbol.for('react.memo'),
    w = Symbol.for('react.lazy'),
    m = Symbol.iterator;
  function E(S) {
    return S === null || typeof S != 'object'
      ? null
      : ((S = (m && S[m]) || S['@@iterator']),
        typeof S == 'function' ? S : null);
  }
  var _ = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    T = Object.assign,
    O = {};
  function L(S, A, F) {
    ((this.props = S),
      (this.context = A),
      (this.refs = O),
      (this.updater = F || _));
  }
  ((L.prototype.isReactComponent = {}),
    (L.prototype.setState = function (S, A) {
      if (typeof S != 'object' && typeof S != 'function' && S != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
        );
      this.updater.enqueueSetState(this, S, A, 'setState');
    }),
    (L.prototype.forceUpdate = function (S) {
      this.updater.enqueueForceUpdate(this, S, 'forceUpdate');
    }));
  function M() {}
  M.prototype = L.prototype;
  function Z(S, A, F) {
    ((this.props = S),
      (this.context = A),
      (this.refs = O),
      (this.updater = F || _));
  }
  var X = (Z.prototype = new M());
  ((X.constructor = Z), T(X, L.prototype), (X.isPureReactComponent = !0));
  var G = Array.isArray,
    ee = Object.prototype.hasOwnProperty,
    le = { current: null },
    Y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function V(S, A, F) {
    var W,
      oe = {},
      fe = null,
      ce = null;
    if (A != null)
      for (W in (A.ref !== void 0 && (ce = A.ref),
      A.key !== void 0 && (fe = '' + A.key),
      A))
        ee.call(A, W) && !Y.hasOwnProperty(W) && (oe[W] = A[W]);
    var ie = arguments.length - 2;
    if (ie === 1) oe.children = F;
    else if (1 < ie) {
      for (var we = Array(ie), _e = 0; _e < ie; _e++)
        we[_e] = arguments[_e + 2];
      oe.children = we;
    }
    if (S && S.defaultProps)
      for (W in ((ie = S.defaultProps), ie))
        oe[W] === void 0 && (oe[W] = ie[W]);
    return {
      $$typeof: o,
      type: S,
      key: fe,
      ref: ce,
      props: oe,
      _owner: le.current,
    };
  }
  function ve(S, A) {
    return {
      $$typeof: o,
      type: S.type,
      key: A,
      ref: S.ref,
      props: S.props,
      _owner: S._owner,
    };
  }
  function ye(S) {
    return typeof S == 'object' && S !== null && S.$$typeof === o;
  }
  function Ne(S) {
    var A = { '=': '=0', ':': '=2' };
    return (
      '$' +
      S.replace(/[=:]/g, function (F) {
        return A[F];
      })
    );
  }
  var be = /\/+/g;
  function pe(S, A) {
    return typeof S == 'object' && S !== null && S.key != null
      ? Ne('' + S.key)
      : A.toString(36);
  }
  function ge(S, A, F, W, oe) {
    var fe = typeof S;
    (fe === 'undefined' || fe === 'boolean') && (S = null);
    var ce = !1;
    if (S === null) ce = !0;
    else
      switch (fe) {
        case 'string':
        case 'number':
          ce = !0;
          break;
        case 'object':
          switch (S.$$typeof) {
            case o:
            case i:
              ce = !0;
          }
      }
    if (ce)
      return (
        (ce = S),
        (oe = oe(ce)),
        (S = W === '' ? '.' + pe(ce, 0) : W),
        G(oe)
          ? ((F = ''),
            S != null && (F = S.replace(be, '$&/') + '/'),
            ge(oe, A, F, '', function (_e) {
              return _e;
            }))
          : oe != null &&
            (ye(oe) &&
              (oe = ve(
                oe,
                F +
                  (!oe.key || (ce && ce.key === oe.key)
                    ? ''
                    : ('' + oe.key).replace(be, '$&/') + '/') +
                  S,
              )),
            A.push(oe)),
        1
      );
    if (((ce = 0), (W = W === '' ? '.' : W + ':'), G(S)))
      for (var ie = 0; ie < S.length; ie++) {
        fe = S[ie];
        var we = W + pe(fe, ie);
        ce += ge(fe, A, F, we, oe);
      }
    else if (((we = E(S)), typeof we == 'function'))
      for (S = we.call(S), ie = 0; !(fe = S.next()).done; )
        ((fe = fe.value),
          (we = W + pe(fe, ie++)),
          (ce += ge(fe, A, F, we, oe)));
    else if (fe === 'object')
      throw (
        (A = String(S)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (A === '[object Object]'
              ? 'object with keys {' + Object.keys(S).join(', ') + '}'
              : A) +
            '). If you meant to render a collection of children, use an array instead.',
        )
      );
    return ce;
  }
  function Se(S, A, F) {
    if (S == null) return S;
    var W = [],
      oe = 0;
    return (
      ge(S, W, '', '', function (fe) {
        return A.call(F, fe, oe++);
      }),
      W
    );
  }
  function Q(S) {
    if (S._status === -1) {
      var A = S._result;
      ((A = A()),
        A.then(
          function (F) {
            (S._status === 0 || S._status === -1) &&
              ((S._status = 1), (S._result = F));
          },
          function (F) {
            (S._status === 0 || S._status === -1) &&
              ((S._status = 2), (S._result = F));
          },
        ),
        S._status === -1 && ((S._status = 0), (S._result = A)));
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var q = { current: null },
    C = { transition: null },
    $ = {
      ReactCurrentDispatcher: q,
      ReactCurrentBatchConfig: C,
      ReactCurrentOwner: le,
    };
  function I() {
    throw Error('act(...) is not supported in production builds of React.');
  }
  return (
    (ke.Children = {
      map: Se,
      forEach: function (S, A, F) {
        Se(
          S,
          function () {
            A.apply(this, arguments);
          },
          F,
        );
      },
      count: function (S) {
        var A = 0;
        return (
          Se(S, function () {
            A++;
          }),
          A
        );
      },
      toArray: function (S) {
        return (
          Se(S, function (A) {
            return A;
          }) || []
        );
      },
      only: function (S) {
        if (!ye(S))
          throw Error(
            'React.Children.only expected to receive a single React element child.',
          );
        return S;
      },
    }),
    (ke.Component = L),
    (ke.Fragment = l),
    (ke.Profiler = u),
    (ke.PureComponent = Z),
    (ke.StrictMode = c),
    (ke.Suspense = h),
    (ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $),
    (ke.act = I),
    (ke.cloneElement = function (S, A, F) {
      if (S == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' +
            S +
            '.',
        );
      var W = T({}, S.props),
        oe = S.key,
        fe = S.ref,
        ce = S._owner;
      if (A != null) {
        if (
          (A.ref !== void 0 && ((fe = A.ref), (ce = le.current)),
          A.key !== void 0 && (oe = '' + A.key),
          S.type && S.type.defaultProps)
        )
          var ie = S.type.defaultProps;
        for (we in A)
          ee.call(A, we) &&
            !Y.hasOwnProperty(we) &&
            (W[we] = A[we] === void 0 && ie !== void 0 ? ie[we] : A[we]);
      }
      var we = arguments.length - 2;
      if (we === 1) W.children = F;
      else if (1 < we) {
        ie = Array(we);
        for (var _e = 0; _e < we; _e++) ie[_e] = arguments[_e + 2];
        W.children = ie;
      }
      return {
        $$typeof: o,
        type: S.type,
        key: oe,
        ref: fe,
        props: W,
        _owner: ce,
      };
    }),
    (ke.createContext = function (S) {
      return (
        (S = {
          $$typeof: p,
          _currentValue: S,
          _currentValue2: S,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (S.Provider = { $$typeof: f, _context: S }),
        (S.Consumer = S)
      );
    }),
    (ke.createElement = V),
    (ke.createFactory = function (S) {
      var A = V.bind(null, S);
      return ((A.type = S), A);
    }),
    (ke.createRef = function () {
      return { current: null };
    }),
    (ke.forwardRef = function (S) {
      return { $$typeof: x, render: S };
    }),
    (ke.isValidElement = ye),
    (ke.lazy = function (S) {
      return { $$typeof: w, _payload: { _status: -1, _result: S }, _init: Q };
    }),
    (ke.memo = function (S, A) {
      return { $$typeof: g, type: S, compare: A === void 0 ? null : A };
    }),
    (ke.startTransition = function (S) {
      var A = C.transition;
      C.transition = {};
      try {
        S();
      } finally {
        C.transition = A;
      }
    }),
    (ke.unstable_act = I),
    (ke.useCallback = function (S, A) {
      return q.current.useCallback(S, A);
    }),
    (ke.useContext = function (S) {
      return q.current.useContext(S);
    }),
    (ke.useDebugValue = function () {}),
    (ke.useDeferredValue = function (S) {
      return q.current.useDeferredValue(S);
    }),
    (ke.useEffect = function (S, A) {
      return q.current.useEffect(S, A);
    }),
    (ke.useId = function () {
      return q.current.useId();
    }),
    (ke.useImperativeHandle = function (S, A, F) {
      return q.current.useImperativeHandle(S, A, F);
    }),
    (ke.useInsertionEffect = function (S, A) {
      return q.current.useInsertionEffect(S, A);
    }),
    (ke.useLayoutEffect = function (S, A) {
      return q.current.useLayoutEffect(S, A);
    }),
    (ke.useMemo = function (S, A) {
      return q.current.useMemo(S, A);
    }),
    (ke.useReducer = function (S, A, F) {
      return q.current.useReducer(S, A, F);
    }),
    (ke.useRef = function (S) {
      return q.current.useRef(S);
    }),
    (ke.useState = function (S) {
      return q.current.useState(S);
    }),
    (ke.useSyncExternalStore = function (S, A, F) {
      return q.current.useSyncExternalStore(S, A, F);
    }),
    (ke.useTransition = function () {
      return q.current.useTransition();
    }),
    (ke.version = '18.3.1'),
    ke
  );
}
var fd;
function ul() {
  return (fd || ((fd = 1), (na.exports = lh())), na.exports);
}
var pd;
function ih() {
  if (pd) return Oo;
  pd = 1;
  var o = ul(),
    i = Symbol.for('react.element'),
    l = Symbol.for('react.fragment'),
    c = Object.prototype.hasOwnProperty,
    u = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(x, h, g) {
    var w,
      m = {},
      E = null,
      _ = null;
    (g !== void 0 && (E = '' + g),
      h.key !== void 0 && (E = '' + h.key),
      h.ref !== void 0 && (_ = h.ref));
    for (w in h) c.call(h, w) && !f.hasOwnProperty(w) && (m[w] = h[w]);
    if (x && x.defaultProps)
      for (w in ((h = x.defaultProps), h)) m[w] === void 0 && (m[w] = h[w]);
    return {
      $$typeof: i,
      type: x,
      key: E,
      ref: _,
      props: m,
      _owner: u.current,
    };
  }
  return ((Oo.Fragment = l), (Oo.jsx = p), (Oo.jsxs = p), Oo);
}
var md;
function ah() {
  return (md || ((md = 1), (ta.exports = ih())), ta.exports);
}
var v = ah(),
  Xs = {},
  ra = { exports: {} },
  ht = {},
  oa = { exports: {} },
  sa = {};
var hd;
function ch() {
  return (
    hd ||
      ((hd = 1),
      (function (o) {
        function i(C, $) {
          var I = C.length;
          C.push($);
          e: for (; 0 < I; ) {
            var S = (I - 1) >>> 1,
              A = C[S];
            if (0 < u(A, $)) ((C[S] = $), (C[I] = A), (I = S));
            else break e;
          }
        }
        function l(C) {
          return C.length === 0 ? null : C[0];
        }
        function c(C) {
          if (C.length === 0) return null;
          var $ = C[0],
            I = C.pop();
          if (I !== $) {
            C[0] = I;
            e: for (var S = 0, A = C.length, F = A >>> 1; S < F; ) {
              var W = 2 * (S + 1) - 1,
                oe = C[W],
                fe = W + 1,
                ce = C[fe];
              if (0 > u(oe, I))
                fe < A && 0 > u(ce, oe)
                  ? ((C[S] = ce), (C[fe] = I), (S = fe))
                  : ((C[S] = oe), (C[W] = I), (S = W));
              else if (fe < A && 0 > u(ce, I))
                ((C[S] = ce), (C[fe] = I), (S = fe));
              else break e;
            }
          }
          return $;
        }
        function u(C, $) {
          var I = C.sortIndex - $.sortIndex;
          return I !== 0 ? I : C.id - $.id;
        }
        if (
          typeof performance == 'object' &&
          typeof performance.now == 'function'
        ) {
          var f = performance;
          o.unstable_now = function () {
            return f.now();
          };
        } else {
          var p = Date,
            x = p.now();
          o.unstable_now = function () {
            return p.now() - x;
          };
        }
        var h = [],
          g = [],
          w = 1,
          m = null,
          E = 3,
          _ = !1,
          T = !1,
          O = !1,
          L = typeof setTimeout == 'function' ? setTimeout : null,
          M = typeof clearTimeout == 'function' ? clearTimeout : null,
          Z = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function X(C) {
          for (var $ = l(g); $ !== null; ) {
            if ($.callback === null) c(g);
            else if ($.startTime <= C)
              (c(g), ($.sortIndex = $.expirationTime), i(h, $));
            else break;
            $ = l(g);
          }
        }
        function G(C) {
          if (((O = !1), X(C), !T))
            if (l(h) !== null) ((T = !0), Q(ee));
            else {
              var $ = l(g);
              $ !== null && q(G, $.startTime - C);
            }
        }
        function ee(C, $) {
          ((T = !1), O && ((O = !1), M(V), (V = -1)), (_ = !0));
          var I = E;
          try {
            for (
              X($), m = l(h);
              m !== null && (!(m.expirationTime > $) || (C && !Ne()));

            ) {
              var S = m.callback;
              if (typeof S == 'function') {
                ((m.callback = null), (E = m.priorityLevel));
                var A = S(m.expirationTime <= $);
                (($ = o.unstable_now()),
                  typeof A == 'function'
                    ? (m.callback = A)
                    : m === l(h) && c(h),
                  X($));
              } else c(h);
              m = l(h);
            }
            if (m !== null) var F = !0;
            else {
              var W = l(g);
              (W !== null && q(G, W.startTime - $), (F = !1));
            }
            return F;
          } finally {
            ((m = null), (E = I), (_ = !1));
          }
        }
        var le = !1,
          Y = null,
          V = -1,
          ve = 5,
          ye = -1;
        function Ne() {
          return !(o.unstable_now() - ye < ve);
        }
        function be() {
          if (Y !== null) {
            var C = o.unstable_now();
            ye = C;
            var $ = !0;
            try {
              $ = Y(!0, C);
            } finally {
              $ ? pe() : ((le = !1), (Y = null));
            }
          } else le = !1;
        }
        var pe;
        if (typeof Z == 'function')
          pe = function () {
            Z(be);
          };
        else if (typeof MessageChannel < 'u') {
          var ge = new MessageChannel(),
            Se = ge.port2;
          ((ge.port1.onmessage = be),
            (pe = function () {
              Se.postMessage(null);
            }));
        } else
          pe = function () {
            L(be, 0);
          };
        function Q(C) {
          ((Y = C), le || ((le = !0), pe()));
        }
        function q(C, $) {
          V = L(function () {
            C(o.unstable_now());
          }, $);
        }
        ((o.unstable_IdlePriority = 5),
          (o.unstable_ImmediatePriority = 1),
          (o.unstable_LowPriority = 4),
          (o.unstable_NormalPriority = 3),
          (o.unstable_Profiling = null),
          (o.unstable_UserBlockingPriority = 2),
          (o.unstable_cancelCallback = function (C) {
            C.callback = null;
          }),
          (o.unstable_continueExecution = function () {
            T || _ || ((T = !0), Q(ee));
          }),
          (o.unstable_forceFrameRate = function (C) {
            0 > C || 125 < C
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                )
              : (ve = 0 < C ? Math.floor(1e3 / C) : 5);
          }),
          (o.unstable_getCurrentPriorityLevel = function () {
            return E;
          }),
          (o.unstable_getFirstCallbackNode = function () {
            return l(h);
          }),
          (o.unstable_next = function (C) {
            switch (E) {
              case 1:
              case 2:
              case 3:
                var $ = 3;
                break;
              default:
                $ = E;
            }
            var I = E;
            E = $;
            try {
              return C();
            } finally {
              E = I;
            }
          }),
          (o.unstable_pauseExecution = function () {}),
          (o.unstable_requestPaint = function () {}),
          (o.unstable_runWithPriority = function (C, $) {
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
            var I = E;
            E = C;
            try {
              return $();
            } finally {
              E = I;
            }
          }),
          (o.unstable_scheduleCallback = function (C, $, I) {
            var S = o.unstable_now();
            switch (
              (typeof I == 'object' && I !== null
                ? ((I = I.delay),
                  (I = typeof I == 'number' && 0 < I ? S + I : S))
                : (I = S),
              C)
            ) {
              case 1:
                var A = -1;
                break;
              case 2:
                A = 250;
                break;
              case 5:
                A = 1073741823;
                break;
              case 4:
                A = 1e4;
                break;
              default:
                A = 5e3;
            }
            return (
              (A = I + A),
              (C = {
                id: w++,
                callback: $,
                priorityLevel: C,
                startTime: I,
                expirationTime: A,
                sortIndex: -1,
              }),
              I > S
                ? ((C.sortIndex = I),
                  i(g, C),
                  l(h) === null &&
                    C === l(g) &&
                    (O ? (M(V), (V = -1)) : (O = !0), q(G, I - S)))
                : ((C.sortIndex = A), i(h, C), T || _ || ((T = !0), Q(ee))),
              C
            );
          }),
          (o.unstable_shouldYield = Ne),
          (o.unstable_wrapCallback = function (C) {
            var $ = E;
            return function () {
              var I = E;
              E = $;
              try {
                return C.apply(this, arguments);
              } finally {
                E = I;
              }
            };
          }));
      })(sa)),
    sa
  );
}
var gd;
function uh() {
  return (gd || ((gd = 1), (oa.exports = ch())), oa.exports);
}
var vd;
function dh() {
  if (vd) return ht;
  vd = 1;
  var o = ul(),
    i = uh();
  function l(e) {
    for (
      var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += '&args[]=' + encodeURIComponent(arguments[n]);
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  var c = new Set(),
    u = {};
  function f(e, t) {
    (p(e, t), p(e + 'Capture', t));
  }
  function p(e, t) {
    for (u[e] = t, e = 0; e < t.length; e++) c.add(t[e]);
  }
  var x = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    h = Object.prototype.hasOwnProperty,
    g =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    w = {},
    m = {};
  function E(e) {
    return h.call(m, e)
      ? !0
      : h.call(w, e)
        ? !1
        : g.test(e)
          ? (m[e] = !0)
          : ((w[e] = !0), !1);
  }
  function _(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case 'function':
      case 'symbol':
        return !0;
      case 'boolean':
        return r
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== 'data-' && e !== 'aria-');
      default:
        return !1;
    }
  }
  function T(e, t, n, r) {
    if (t === null || typeof t > 'u' || _(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function O(e, t, n, r, s, a, d) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = s),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = a),
      (this.removeEmptyString = d));
  }
  var L = {};
  ('children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      L[e] = new O(e, 0, !1, e, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0];
      L[t] = new O(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
      function (e) {
        L[e] = new O(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      'autoReverse',
      'externalResourcesRequired',
      'focusable',
      'preserveAlpha',
    ].forEach(function (e) {
      L[e] = new O(e, 2, !1, e, null, !1, !1);
    }),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        L[e] = new O(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      L[e] = new O(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      L[e] = new O(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      L[e] = new O(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      L[e] = new O(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var M = /[\-:]([a-z])/g;
  function Z(e) {
    return e[1].toUpperCase();
  }
  ('accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(M, Z);
      L[t] = new O(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(M, Z);
        L[t] = new O(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(M, Z);
      L[t] = new O(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      L[e] = new O(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (L.xlinkHref = new O(
      'xlinkHref',
      1,
      !1,
      'xlink:href',
      'http://www.w3.org/1999/xlink',
      !0,
      !1,
    )),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      L[e] = new O(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function X(e, t, n, r) {
    var s = L.hasOwnProperty(t) ? L[t] : null;
    (s !== null
      ? s.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== 'o' && t[0] !== 'O') ||
        (t[1] !== 'n' && t[1] !== 'N')) &&
      (T(t, n, s, r) && (n = null),
      r || s === null
        ? E(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
        : s.mustUseProperty
          ? (e[s.propertyName] = n === null ? (s.type === 3 ? !1 : '') : n)
          : ((t = s.attributeName),
            (r = s.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((s = s.type),
                (n = s === 3 || (s === 4 && n === !0) ? '' : '' + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var G = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ee = Symbol.for('react.element'),
    le = Symbol.for('react.portal'),
    Y = Symbol.for('react.fragment'),
    V = Symbol.for('react.strict_mode'),
    ve = Symbol.for('react.profiler'),
    ye = Symbol.for('react.provider'),
    Ne = Symbol.for('react.context'),
    be = Symbol.for('react.forward_ref'),
    pe = Symbol.for('react.suspense'),
    ge = Symbol.for('react.suspense_list'),
    Se = Symbol.for('react.memo'),
    Q = Symbol.for('react.lazy'),
    q = Symbol.for('react.offscreen'),
    C = Symbol.iterator;
  function $(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (C && e[C]) || e['@@iterator']),
        typeof e == 'function' ? e : null);
  }
  var I = Object.assign,
    S;
  function A(e) {
    if (S === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        S = (t && t[1]) || '';
      }
    return (
      `
` +
      S +
      e
    );
  }
  var F = !1;
  function W(e, t) {
    if (!e || F) return '';
    F = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, 'props', {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == 'object' && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (R) {
            var r = R;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (R) {
            r = R;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (R) {
          r = R;
        }
        e();
      }
    } catch (R) {
      if (R && r && typeof R.stack == 'string') {
        for (
          var s = R.stack.split(`
`),
            a = r.stack.split(`
`),
            d = s.length - 1,
            y = a.length - 1;
          1 <= d && 0 <= y && s[d] !== a[y];

        )
          y--;
        for (; 1 <= d && 0 <= y; d--, y--)
          if (s[d] !== a[y]) {
            if (d !== 1 || y !== 1)
              do
                if ((d--, y--, 0 > y || s[d] !== a[y])) {
                  var k =
                    `
` + s[d].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      k.includes('<anonymous>') &&
                      (k = k.replace('<anonymous>', e.displayName)),
                    k
                  );
                }
              while (1 <= d && 0 <= y);
            break;
          }
      }
    } finally {
      ((F = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : '') ? A(e) : '';
  }
  function oe(e) {
    switch (e.tag) {
      case 5:
        return A(e.type);
      case 16:
        return A('Lazy');
      case 13:
        return A('Suspense');
      case 19:
        return A('SuspenseList');
      case 0:
      case 2:
      case 15:
        return ((e = W(e.type, !1)), e);
      case 11:
        return ((e = W(e.type.render, !1)), e);
      case 1:
        return ((e = W(e.type, !0)), e);
      default:
        return '';
    }
  }
  function fe(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case Y:
        return 'Fragment';
      case le:
        return 'Portal';
      case ve:
        return 'Profiler';
      case V:
        return 'StrictMode';
      case pe:
        return 'Suspense';
      case ge:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case Ne:
          return (e.displayName || 'Context') + '.Consumer';
        case ye:
          return (e._context.displayName || 'Context') + '.Provider';
        case be:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case Se:
          return (
            (t = e.displayName || null),
            t !== null ? t : fe(e.type) || 'Memo'
          );
        case Q:
          ((t = e._payload), (e = e._init));
          try {
            return fe(e(t));
          } catch {}
      }
    return null;
  }
  function ce(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return 'Cache';
      case 9:
        return (t.displayName || 'Context') + '.Consumer';
      case 10:
        return (t._context.displayName || 'Context') + '.Provider';
      case 18:
        return 'DehydratedFragment';
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ''),
          t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
        );
      case 7:
        return 'Fragment';
      case 5:
        return t;
      case 4:
        return 'Portal';
      case 3:
        return 'Root';
      case 6:
        return 'Text';
      case 16:
        return fe(t);
      case 8:
        return t === V ? 'StrictMode' : 'Mode';
      case 22:
        return 'Offscreen';
      case 12:
        return 'Profiler';
      case 21:
        return 'Scope';
      case 13:
        return 'Suspense';
      case 19:
        return 'SuspenseList';
      case 25:
        return 'TracingMarker';
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == 'function') return t.displayName || t.name || null;
        if (typeof t == 'string') return t;
    }
    return null;
  }
  function ie(e) {
    switch (typeof e) {
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e;
      case 'object':
        return e;
      default:
        return '';
    }
  }
  function we(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === 'input' &&
      (t === 'checkbox' || t === 'radio')
    );
  }
  function _e(e) {
    var t = we(e) ? 'checked' : 'value',
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = '' + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < 'u' &&
      typeof n.get == 'function' &&
      typeof n.set == 'function'
    ) {
      var s = n.get,
        a = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return s.call(this);
          },
          set: function (d) {
            ((r = '' + d), a.call(this, d));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (d) {
            r = '' + d;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function lt(e) {
    e._valueTracker || (e._valueTracker = _e(e));
  }
  function Je(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = '';
    return (
      e && (r = we(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function At(e) {
    if (
      ((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Wn(e, t) {
    var n = t.checked;
    return I({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Io(e, t) {
    var n = t.defaultValue == null ? '' : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = ie(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === 'checkbox' || t.type === 'radio'
            ? t.checked != null
            : t.value != null,
      }));
  }
  function Wr(e, t) {
    ((t = t.checked), t != null && X(e, 'checked', t, !1));
  }
  function en(e, t) {
    Wr(e, t);
    var n = ie(t.value),
      r = t.type;
    if (n != null)
      r === 'number'
        ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
        : e.value !== '' + n && (e.value = '' + n);
    else if (r === 'submit' || r === 'reset') {
      e.removeAttribute('value');
      return;
    }
    (t.hasOwnProperty('value')
      ? vt(e, t.type, n)
      : t.hasOwnProperty('defaultValue') && vt(e, t.type, ie(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked));
  }
  function Gr(e, t, n) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
      var r = t.type;
      if (
        !(
          (r !== 'submit' && r !== 'reset') ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      ((t = '' + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((n = e.name),
      n !== '' && (e.name = ''),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== '' && (e.name = n));
  }
  function vt(e, t, n) {
    (t !== 'number' || At(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
  }
  var Gn = Array.isArray;
  function gn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var s = 0; s < n.length; s++) t['$' + n[s]] = !0;
      for (n = 0; n < e.length; n++)
        ((s = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== s && (e[n].selected = s),
          s && r && (e[n].defaultSelected = !0));
    } else {
      for (n = '' + ie(n), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === n) {
          ((e[s].selected = !0), r && (e[s].defaultSelected = !0));
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ke(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(l(91));
    return I({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    });
  }
  function tn(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(l(92));
        if (Gn(n)) {
          if (1 < n.length) throw Error(l(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ''), (n = t));
    }
    e._wrapperState = { initialValue: ie(n) };
  }
  function Fo(e, t) {
    var n = ie(t.value),
      r = ie(t.defaultValue);
    (n != null &&
      ((n = '' + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = '' + r));
  }
  function Bo(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== '' &&
      t !== null &&
      (e.value = t);
  }
  function Yn(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function Yr(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? Yn(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
  }
  var Qn,
    pr = (function (e) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, s) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, s);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
        e.innerHTML = t;
      else {
        for (
          Qn = Qn || document.createElement('div'),
            Qn.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
            t = Qn.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Ct(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var vn = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    yn = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(vn).forEach(function (e) {
    yn.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (vn[t] = vn[e]));
    });
  });
  function Vo(e, t, n) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : n || typeof t != 'number' || t === 0 || (vn.hasOwnProperty(e) && vn[e])
        ? ('' + t).trim()
        : t + 'px';
  }
  function Uo(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf('--') === 0,
          s = Vo(n, t[n], r);
        (n === 'float' && (n = 'cssFloat'),
          r ? e.setProperty(n, s) : (e[n] = s));
      }
  }
  var $o = I(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function mr(e, t) {
    if (t) {
      if ($o[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(l(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(l(60));
        if (
          typeof t.dangerouslySetInnerHTML != 'object' ||
          !('__html' in t.dangerouslySetInnerHTML)
        )
          throw Error(l(61));
      }
      if (t.style != null && typeof t.style != 'object') throw Error(l(62));
    }
  }
  function Qr(e, t) {
    if (e.indexOf('-') === -1) return typeof t.is == 'string';
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var Kn = null;
  function Nt(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Kr = null,
    xn = null,
    nn = null;
  function Xr(e) {
    if ((e = vo(e))) {
      if (typeof Kr != 'function') throw Error(l(280));
      var t = e.stateNode;
      t && ((t = ds(t)), Kr(e.stateNode, e.type, t));
    }
  }
  function he(e) {
    xn ? (nn ? nn.push(e) : (nn = [e])) : (xn = e);
  }
  function Me() {
    if (xn) {
      var e = xn,
        t = nn;
      if (((nn = xn = null), Xr(e), t)) for (e = 0; e < t.length; e++) Xr(t[e]);
    }
  }
  function Be(e, t) {
    return e(t);
  }
  function et() {}
  var wn = !1;
  function Ie(e, t, n) {
    if (wn) return e(t, n);
    wn = !0;
    try {
      return Be(e, t, n);
    } finally {
      ((wn = !1), (xn !== null || nn !== null) && (et(), Me()));
    }
  }
  function We(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = ds(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        ((r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === 'button' ||
            e === 'input' ||
            e === 'select' ||
            e === 'textarea'
          ))),
          (e = !r));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != 'function') throw Error(l(231, t, typeof n));
    return n;
  }
  var kn = !1;
  if (x)
    try {
      var Xe = {};
      (Object.defineProperty(Xe, 'passive', {
        get: function () {
          kn = !0;
        },
      }),
        window.addEventListener('test', Xe, Xe),
        window.removeEventListener('test', Xe, Xe));
    } catch {
      kn = !1;
    }
  function yt(e, t, n, r, s, a, d, y, k) {
    var R = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, R);
    } catch (D) {
      this.onError(D);
    }
  }
  var bn = !1,
    Pt = null,
    qr = !1,
    wl = null,
    fp = {
      onError: function (e) {
        ((bn = !0), (Pt = e));
      },
    };
  function pp(e, t, n, r, s, a, d, y, k) {
    ((bn = !1), (Pt = null), yt.apply(fp, arguments));
  }
  function mp(e, t, n, r, s, a, d, y, k) {
    if ((pp.apply(this, arguments), bn)) {
      if (bn) {
        var R = Pt;
        ((bn = !1), (Pt = null));
      } else throw Error(l(198));
      qr || ((qr = !0), (wl = R));
    }
  }
  function Xn(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Aa(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function za(e) {
    if (Xn(e) !== e) throw Error(l(188));
  }
  function hp(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Xn(e)), t === null)) throw Error(l(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var s = n.return;
      if (s === null) break;
      var a = s.alternate;
      if (a === null) {
        if (((r = s.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (s.child === a.child) {
        for (a = s.child; a; ) {
          if (a === n) return (za(s), e);
          if (a === r) return (za(s), t);
          a = a.sibling;
        }
        throw Error(l(188));
      }
      if (n.return !== r.return) ((n = s), (r = a));
      else {
        for (var d = !1, y = s.child; y; ) {
          if (y === n) {
            ((d = !0), (n = s), (r = a));
            break;
          }
          if (y === r) {
            ((d = !0), (r = s), (n = a));
            break;
          }
          y = y.sibling;
        }
        if (!d) {
          for (y = a.child; y; ) {
            if (y === n) {
              ((d = !0), (n = a), (r = s));
              break;
            }
            if (y === r) {
              ((d = !0), (r = a), (n = s));
              break;
            }
            y = y.sibling;
          }
          if (!d) throw Error(l(189));
        }
      }
      if (n.alternate !== r) throw Error(l(190));
    }
    if (n.tag !== 3) throw Error(l(188));
    return n.stateNode.current === n ? e : t;
  }
  function Ma(e) {
    return ((e = hp(e)), e !== null ? Da(e) : null);
  }
  function Da(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Da(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Ha = i.unstable_scheduleCallback,
    Ia = i.unstable_cancelCallback,
    gp = i.unstable_shouldYield,
    vp = i.unstable_requestPaint,
    De = i.unstable_now,
    yp = i.unstable_getCurrentPriorityLevel,
    kl = i.unstable_ImmediatePriority,
    Fa = i.unstable_UserBlockingPriority,
    Wo = i.unstable_NormalPriority,
    xp = i.unstable_LowPriority,
    Ba = i.unstable_IdlePriority,
    Go = null,
    $t = null;
  function wp(e) {
    if ($t && typeof $t.onCommitFiberRoot == 'function')
      try {
        $t.onCommitFiberRoot(Go, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var zt = Math.clz32 ? Math.clz32 : Sp,
    kp = Math.log,
    bp = Math.LN2;
  function Sp(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((kp(e) / bp) | 0)) | 0);
  }
  var Yo = 64,
    Qo = 4194304;
  function Zr(e) {
    switch (e & -e) {
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
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Ko(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      s = e.suspendedLanes,
      a = e.pingedLanes,
      d = n & 268435455;
    if (d !== 0) {
      var y = d & ~s;
      y !== 0 ? (r = Zr(y)) : ((a &= d), a !== 0 && (r = Zr(a)));
    } else ((d = n & ~s), d !== 0 ? (r = Zr(d)) : a !== 0 && (r = Zr(a)));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      (t & s) === 0 &&
      ((s = r & -r), (a = t & -t), s >= a || (s === 16 && (a & 4194240) !== 0))
    )
      return t;
    if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        ((n = 31 - zt(t)), (s = 1 << n), (r |= e[n]), (t &= ~s));
    return r;
  }
  function Ep(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
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
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Cp(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        s = e.expirationTimes,
        a = e.pendingLanes;
      0 < a;

    ) {
      var d = 31 - zt(a),
        y = 1 << d,
        k = s[d];
      (k === -1
        ? ((y & n) === 0 || (y & r) !== 0) && (s[d] = Ep(y, t))
        : k <= t && (e.expiredLanes |= y),
        (a &= ~y));
    }
  }
  function bl(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Va() {
    var e = Yo;
    return ((Yo <<= 1), (Yo & 4194240) === 0 && (Yo = 64), e);
  }
  function Sl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Jr(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - zt(t)),
      (e[t] = n));
  }
  function Np(e, t) {
    var n = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements));
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var s = 31 - zt(n),
        a = 1 << s;
      ((t[s] = 0), (r[s] = -1), (e[s] = -1), (n &= ~a));
    }
  }
  function El(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - zt(n),
        s = 1 << r;
      ((s & t) | (e[r] & t) && (e[r] |= t), (n &= ~s));
    }
  }
  var Pe = 0;
  function Ua(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var $a,
    Cl,
    Wa,
    Ga,
    Ya,
    Nl = !1,
    Xo = [],
    Sn = null,
    En = null,
    Cn = null,
    eo = new Map(),
    to = new Map(),
    Nn = [],
    Pp =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' ',
      );
  function Qa(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Sn = null;
        break;
      case 'dragenter':
      case 'dragleave':
        En = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Cn = null;
        break;
      case 'pointerover':
      case 'pointerout':
        eo.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        to.delete(t.pointerId);
    }
  }
  function no(e, t, n, r, s, a) {
    return e === null || e.nativeEvent !== a
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: a,
          targetContainers: [s],
        }),
        t !== null && ((t = vo(t)), t !== null && Cl(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        s !== null && t.indexOf(s) === -1 && t.push(s),
        e);
  }
  function jp(e, t, n, r, s) {
    switch (t) {
      case 'focusin':
        return ((Sn = no(Sn, e, t, n, r, s)), !0);
      case 'dragenter':
        return ((En = no(En, e, t, n, r, s)), !0);
      case 'mouseover':
        return ((Cn = no(Cn, e, t, n, r, s)), !0);
      case 'pointerover':
        var a = s.pointerId;
        return (eo.set(a, no(eo.get(a) || null, e, t, n, r, s)), !0);
      case 'gotpointercapture':
        return (
          (a = s.pointerId),
          to.set(a, no(to.get(a) || null, e, t, n, r, s)),
          !0
        );
    }
    return !1;
  }
  function Ka(e) {
    var t = qn(e.target);
    if (t !== null) {
      var n = Xn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Aa(n)), t !== null)) {
            ((e.blockedOn = t),
              Ya(e.priority, function () {
                Wa(n);
              }));
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function qo(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = jl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((Kn = r), n.target.dispatchEvent(r), (Kn = null));
      } else return ((t = vo(n)), t !== null && Cl(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function Xa(e, t, n) {
    qo(e) && n.delete(t);
  }
  function _p() {
    ((Nl = !1),
      Sn !== null && qo(Sn) && (Sn = null),
      En !== null && qo(En) && (En = null),
      Cn !== null && qo(Cn) && (Cn = null),
      eo.forEach(Xa),
      to.forEach(Xa));
  }
  function ro(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Nl ||
        ((Nl = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, _p)));
  }
  function oo(e) {
    function t(s) {
      return ro(s, e);
    }
    if (0 < Xo.length) {
      ro(Xo[0], e);
      for (var n = 1; n < Xo.length; n++) {
        var r = Xo[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Sn !== null && ro(Sn, e),
        En !== null && ro(En, e),
        Cn !== null && ro(Cn, e),
        eo.forEach(t),
        to.forEach(t),
        n = 0;
      n < Nn.length;
      n++
    )
      ((r = Nn[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Nn.length && ((n = Nn[0]), n.blockedOn === null); )
      (Ka(n), n.blockedOn === null && Nn.shift());
  }
  var hr = G.ReactCurrentBatchConfig,
    Zo = !0;
  function Rp(e, t, n, r) {
    var s = Pe,
      a = hr.transition;
    hr.transition = null;
    try {
      ((Pe = 1), Pl(e, t, n, r));
    } finally {
      ((Pe = s), (hr.transition = a));
    }
  }
  function Tp(e, t, n, r) {
    var s = Pe,
      a = hr.transition;
    hr.transition = null;
    try {
      ((Pe = 4), Pl(e, t, n, r));
    } finally {
      ((Pe = s), (hr.transition = a));
    }
  }
  function Pl(e, t, n, r) {
    if (Zo) {
      var s = jl(e, t, n, r);
      if (s === null) (Wl(e, t, r, Jo, n), Qa(e, r));
      else if (jp(s, e, t, n, r)) r.stopPropagation();
      else if ((Qa(e, r), t & 4 && -1 < Pp.indexOf(e))) {
        for (; s !== null; ) {
          var a = vo(s);
          if (
            (a !== null && $a(a),
            (a = jl(e, t, n, r)),
            a === null && Wl(e, t, r, Jo, n),
            a === s)
          )
            break;
          s = a;
        }
        s !== null && r.stopPropagation();
      } else Wl(e, t, r, null, n);
    }
  }
  var Jo = null;
  function jl(e, t, n, r) {
    if (((Jo = null), (e = Nt(r)), (e = qn(e)), e !== null))
      if (((t = Xn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Aa(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Jo = e), null);
  }
  function qa(e) {
    switch (e) {
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 1;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'toggle':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 4;
      case 'message':
        switch (yp()) {
          case kl:
            return 1;
          case Fa:
            return 4;
          case Wo:
          case xp:
            return 16;
          case Ba:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Pn = null,
    _l = null,
    es = null;
  function Za() {
    if (es) return es;
    var e,
      t = _l,
      n = t.length,
      r,
      s = 'value' in Pn ? Pn.value : Pn.textContent,
      a = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++);
    var d = n - e;
    for (r = 1; r <= d && t[n - r] === s[a - r]; r++);
    return (es = s.slice(e, 1 < r ? 1 - r : void 0));
  }
  function ts(e) {
    var t = e.keyCode;
    return (
      'charCode' in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function ns() {
    return !0;
  }
  function Ja() {
    return !1;
  }
  function xt(e) {
    function t(n, r, s, a, d) {
      ((this._reactName = n),
        (this._targetInst = s),
        (this.type = r),
        (this.nativeEvent = a),
        (this.target = d),
        (this.currentTarget = null));
      for (var y in e)
        e.hasOwnProperty(y) && ((n = e[y]), (this[y] = n ? n(a) : a[y]));
      return (
        (this.isDefaultPrevented = (
          a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
        )
          ? ns
          : Ja),
        (this.isPropagationStopped = Ja),
        this
      );
    }
    return (
      I(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = ns));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = ns));
        },
        persist: function () {},
        isPersistent: ns,
      }),
      t
    );
  }
  var gr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Rl = xt(gr),
    so = I({}, gr, { view: 0, detail: 0 }),
    Op = xt(so),
    Tl,
    Ol,
    lo,
    rs = I({}, so, {
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
      getModifierState: Al,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== lo &&
              (lo && e.type === 'mousemove'
                ? ((Tl = e.screenX - lo.screenX), (Ol = e.screenY - lo.screenY))
                : (Ol = Tl = 0),
              (lo = e)),
            Tl);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Ol;
      },
    }),
    ec = xt(rs),
    Lp = I({}, rs, { dataTransfer: 0 }),
    Ap = xt(Lp),
    zp = I({}, so, { relatedTarget: 0 }),
    Ll = xt(zp),
    Mp = I({}, gr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Dp = xt(Mp),
    Hp = I({}, gr, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Ip = xt(Hp),
    Fp = I({}, gr, { data: 0 }),
    tc = xt(Fp),
    Bp = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    Vp = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    Up = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    };
  function $p(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Up[e])
        ? !!t[e]
        : !1;
  }
  function Al() {
    return $p;
  }
  var Wp = I({}, so, {
      key: function (e) {
        if (e.key) {
          var t = Bp[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = ts(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? Vp[e.keyCode] || 'Unidentified'
            : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Al,
      charCode: function (e) {
        return e.type === 'keypress' ? ts(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? ts(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    Gp = xt(Wp),
    Yp = I({}, rs, {
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
    nc = xt(Yp),
    Qp = I({}, so, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Al,
    }),
    Kp = xt(Qp),
    Xp = I({}, gr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    qp = xt(Xp),
    Zp = I({}, rs, {
      deltaX: function (e) {
        return 'deltaX' in e
          ? e.deltaX
          : 'wheelDeltaX' in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
            ? -e.wheelDeltaY
            : 'wheelDelta' in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Jp = xt(Zp),
    em = [9, 13, 27, 32],
    zl = x && 'CompositionEvent' in window,
    io = null;
  x && 'documentMode' in document && (io = document.documentMode);
  var tm = x && 'TextEvent' in window && !io,
    rc = x && (!zl || (io && 8 < io && 11 >= io)),
    oc = ' ',
    sc = !1;
  function lc(e, t) {
    switch (e) {
      case 'keyup':
        return em.indexOf(t.keyCode) !== -1;
      case 'keydown':
        return t.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function ic(e) {
    return (
      (e = e.detail),
      typeof e == 'object' && 'data' in e ? e.data : null
    );
  }
  var vr = !1;
  function nm(e, t) {
    switch (e) {
      case 'compositionend':
        return ic(t);
      case 'keypress':
        return t.which !== 32 ? null : ((sc = !0), oc);
      case 'textInput':
        return ((e = t.data), e === oc && sc ? null : e);
      default:
        return null;
    }
  }
  function rm(e, t) {
    if (vr)
      return e === 'compositionend' || (!zl && lc(e, t))
        ? ((e = Za()), (es = _l = Pn = null), (vr = !1), e)
        : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case 'compositionend':
        return rc && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var om = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
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
  function ac(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!om[e.type] : t === 'textarea';
  }
  function cc(e, t, n, r) {
    (he(r),
      (t = as(t, 'onChange')),
      0 < t.length &&
        ((n = new Rl('onChange', 'change', null, n, r)),
        e.push({ event: n, listeners: t })));
  }
  var ao = null,
    co = null;
  function sm(e) {
    Pc(e, 0);
  }
  function os(e) {
    var t = br(e);
    if (Je(t)) return e;
  }
  function lm(e, t) {
    if (e === 'change') return t;
  }
  var uc = !1;
  if (x) {
    var Ml;
    if (x) {
      var Dl = 'oninput' in document;
      if (!Dl) {
        var dc = document.createElement('div');
        (dc.setAttribute('oninput', 'return;'),
          (Dl = typeof dc.oninput == 'function'));
      }
      Ml = Dl;
    } else Ml = !1;
    uc = Ml && (!document.documentMode || 9 < document.documentMode);
  }
  function fc() {
    ao && (ao.detachEvent('onpropertychange', pc), (co = ao = null));
  }
  function pc(e) {
    if (e.propertyName === 'value' && os(co)) {
      var t = [];
      (cc(t, co, e, Nt(e)), Ie(sm, t));
    }
  }
  function im(e, t, n) {
    e === 'focusin'
      ? (fc(), (ao = t), (co = n), ao.attachEvent('onpropertychange', pc))
      : e === 'focusout' && fc();
  }
  function am(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
      return os(co);
  }
  function cm(e, t) {
    if (e === 'click') return os(t);
  }
  function um(e, t) {
    if (e === 'input' || e === 'change') return os(t);
  }
  function dm(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Mt = typeof Object.is == 'function' ? Object.is : dm;
  function uo(e, t) {
    if (Mt(e, t)) return !0;
    if (
      typeof e != 'object' ||
      e === null ||
      typeof t != 'object' ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var s = n[r];
      if (!h.call(t, s) || !Mt(e[s], t[s])) return !1;
    }
    return !0;
  }
  function mc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function hc(e, t) {
    var n = mc(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = mc(n);
    }
  }
  function gc(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? gc(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function vc() {
    for (var e = window, t = At(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = At(e.document);
    }
    return t;
  }
  function Hl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  function fm(e) {
    var t = vc(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      gc(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && Hl(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          'selectionStart' in n)
        )
          ((n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length)));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var s = n.textContent.length,
            a = Math.min(r.start, s);
          ((r = r.end === void 0 ? a : Math.min(r.end, s)),
            !e.extend && a > r && ((s = r), (r = a), (a = s)),
            (s = hc(n, a)));
          var d = hc(n, r);
          s &&
            d &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== s.node ||
              e.anchorOffset !== s.offset ||
              e.focusNode !== d.node ||
              e.focusOffset !== d.offset) &&
            ((t = t.createRange()),
            t.setStart(s.node, s.offset),
            e.removeAllRanges(),
            a > r
              ? (e.addRange(t), e.extend(d.node, d.offset))
              : (t.setEnd(d.node, d.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top));
    }
  }
  var pm = x && 'documentMode' in document && 11 >= document.documentMode,
    yr = null,
    Il = null,
    fo = null,
    Fl = !1;
  function yc(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Fl ||
      yr == null ||
      yr !== At(r) ||
      ((r = yr),
      'selectionStart' in r && Hl(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (fo && uo(fo, r)) ||
        ((fo = r),
        (r = as(Il, 'onSelect')),
        0 < r.length &&
          ((t = new Rl('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = yr))));
  }
  function ss(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    );
  }
  var xr = {
      animationend: ss('Animation', 'AnimationEnd'),
      animationiteration: ss('Animation', 'AnimationIteration'),
      animationstart: ss('Animation', 'AnimationStart'),
      transitionend: ss('Transition', 'TransitionEnd'),
    },
    Bl = {},
    xc = {};
  x &&
    ((xc = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete xr.animationend.animation,
      delete xr.animationiteration.animation,
      delete xr.animationstart.animation),
    'TransitionEvent' in window || delete xr.transitionend.transition);
  function ls(e) {
    if (Bl[e]) return Bl[e];
    if (!xr[e]) return e;
    var t = xr[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in xc) return (Bl[e] = t[n]);
    return e;
  }
  var wc = ls('animationend'),
    kc = ls('animationiteration'),
    bc = ls('animationstart'),
    Sc = ls('transitionend'),
    Ec = new Map(),
    Cc =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' ',
      );
  function jn(e, t) {
    (Ec.set(e, t), f(t, [e]));
  }
  for (var Vl = 0; Vl < Cc.length; Vl++) {
    var Ul = Cc[Vl],
      mm = Ul.toLowerCase(),
      hm = Ul[0].toUpperCase() + Ul.slice(1);
    jn(mm, 'on' + hm);
  }
  (jn(wc, 'onAnimationEnd'),
    jn(kc, 'onAnimationIteration'),
    jn(bc, 'onAnimationStart'),
    jn('dblclick', 'onDoubleClick'),
    jn('focusin', 'onFocus'),
    jn('focusout', 'onBlur'),
    jn(Sc, 'onTransitionEnd'),
    p('onMouseEnter', ['mouseout', 'mouseover']),
    p('onMouseLeave', ['mouseout', 'mouseover']),
    p('onPointerEnter', ['pointerout', 'pointerover']),
    p('onPointerLeave', ['pointerout', 'pointerover']),
    f(
      'onChange',
      'change click focusin focusout input keydown keyup selectionchange'.split(
        ' ',
      ),
    ),
    f(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' ',
      ),
    ),
    f('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    f(
      'onCompositionEnd',
      'compositionend focusout keydown keypress keyup mousedown'.split(' '),
    ),
    f(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
    ),
    f(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
    ));
  var po =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' ',
      ),
    gm = new Set(
      'cancel close invalid load scroll toggle'.split(' ').concat(po),
    );
  function Nc(e, t, n) {
    var r = e.type || 'unknown-event';
    ((e.currentTarget = n), mp(r, t, void 0, e), (e.currentTarget = null));
  }
  function Pc(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        s = r.event;
      r = r.listeners;
      e: {
        var a = void 0;
        if (t)
          for (var d = r.length - 1; 0 <= d; d--) {
            var y = r[d],
              k = y.instance,
              R = y.currentTarget;
            if (((y = y.listener), k !== a && s.isPropagationStopped()))
              break e;
            (Nc(s, y, R), (a = k));
          }
        else
          for (d = 0; d < r.length; d++) {
            if (
              ((y = r[d]),
              (k = y.instance),
              (R = y.currentTarget),
              (y = y.listener),
              k !== a && s.isPropagationStopped())
            )
              break e;
            (Nc(s, y, R), (a = k));
          }
      }
    }
    if (qr) throw ((e = wl), (qr = !1), (wl = null), e);
  }
  function Re(e, t) {
    var n = t[ql];
    n === void 0 && (n = t[ql] = new Set());
    var r = e + '__bubble';
    n.has(r) || (jc(t, e, 2, !1), n.add(r));
  }
  function $l(e, t, n) {
    var r = 0;
    (t && (r |= 4), jc(n, e, r, t));
  }
  var is = '_reactListening' + Math.random().toString(36).slice(2);
  function mo(e) {
    if (!e[is]) {
      ((e[is] = !0),
        c.forEach(function (n) {
          n !== 'selectionchange' && (gm.has(n) || $l(n, !1, e), $l(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[is] || ((t[is] = !0), $l('selectionchange', !1, t));
    }
  }
  function jc(e, t, n, r) {
    switch (qa(t)) {
      case 1:
        var s = Rp;
        break;
      case 4:
        s = Tp;
        break;
      default:
        s = Pl;
    }
    ((n = s.bind(null, t, n, e)),
      (s = void 0),
      !kn ||
        (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
        (s = !0),
      r
        ? s !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: s })
          : e.addEventListener(t, n, !0)
        : s !== void 0
          ? e.addEventListener(t, n, { passive: s })
          : e.addEventListener(t, n, !1));
  }
  function Wl(e, t, n, r, s) {
    var a = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var d = r.tag;
        if (d === 3 || d === 4) {
          var y = r.stateNode.containerInfo;
          if (y === s || (y.nodeType === 8 && y.parentNode === s)) break;
          if (d === 4)
            for (d = r.return; d !== null; ) {
              var k = d.tag;
              if (
                (k === 3 || k === 4) &&
                ((k = d.stateNode.containerInfo),
                k === s || (k.nodeType === 8 && k.parentNode === s))
              )
                return;
              d = d.return;
            }
          for (; y !== null; ) {
            if (((d = qn(y)), d === null)) return;
            if (((k = d.tag), k === 5 || k === 6)) {
              r = a = d;
              continue e;
            }
            y = y.parentNode;
          }
        }
        r = r.return;
      }
    Ie(function () {
      var R = a,
        D = Nt(n),
        H = [];
      e: {
        var z = Ec.get(e);
        if (z !== void 0) {
          var K = Rl,
            te = e;
          switch (e) {
            case 'keypress':
              if (ts(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              K = Gp;
              break;
            case 'focusin':
              ((te = 'focus'), (K = Ll));
              break;
            case 'focusout':
              ((te = 'blur'), (K = Ll));
              break;
            case 'beforeblur':
            case 'afterblur':
              K = Ll;
              break;
            case 'click':
              if (n.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              K = ec;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              K = Ap;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              K = Kp;
              break;
            case wc:
            case kc:
            case bc:
              K = Dp;
              break;
            case Sc:
              K = qp;
              break;
            case 'scroll':
              K = Op;
              break;
            case 'wheel':
              K = Jp;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              K = Ip;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              K = nc;
          }
          var se = (t & 4) !== 0,
            He = !se && e === 'scroll',
            N = se ? (z !== null ? z + 'Capture' : null) : z;
          se = [];
          for (var b = R, j; b !== null; ) {
            j = b;
            var B = j.stateNode;
            if (
              (j.tag === 5 &&
                B !== null &&
                ((j = B),
                N !== null &&
                  ((B = We(b, N)), B != null && se.push(ho(b, B, j)))),
              He)
            )
              break;
            b = b.return;
          }
          0 < se.length &&
            ((z = new K(z, te, null, n, D)),
            H.push({ event: z, listeners: se }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((z = e === 'mouseover' || e === 'pointerover'),
            (K = e === 'mouseout' || e === 'pointerout'),
            z &&
              n !== Kn &&
              (te = n.relatedTarget || n.fromElement) &&
              (qn(te) || te[rn]))
          )
            break e;
          if (
            (K || z) &&
            ((z =
              D.window === D
                ? D
                : (z = D.ownerDocument)
                  ? z.defaultView || z.parentWindow
                  : window),
            K
              ? ((te = n.relatedTarget || n.toElement),
                (K = R),
                (te = te ? qn(te) : null),
                te !== null &&
                  ((He = Xn(te)),
                  te !== He || (te.tag !== 5 && te.tag !== 6)) &&
                  (te = null))
              : ((K = null), (te = R)),
            K !== te)
          ) {
            if (
              ((se = ec),
              (B = 'onMouseLeave'),
              (N = 'onMouseEnter'),
              (b = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((se = nc),
                (B = 'onPointerLeave'),
                (N = 'onPointerEnter'),
                (b = 'pointer')),
              (He = K == null ? z : br(K)),
              (j = te == null ? z : br(te)),
              (z = new se(B, b + 'leave', K, n, D)),
              (z.target = He),
              (z.relatedTarget = j),
              (B = null),
              qn(D) === R &&
                ((se = new se(N, b + 'enter', te, n, D)),
                (se.target = j),
                (se.relatedTarget = He),
                (B = se)),
              (He = B),
              K && te)
            )
              t: {
                for (se = K, N = te, b = 0, j = se; j; j = wr(j)) b++;
                for (j = 0, B = N; B; B = wr(B)) j++;
                for (; 0 < b - j; ) ((se = wr(se)), b--);
                for (; 0 < j - b; ) ((N = wr(N)), j--);
                for (; b--; ) {
                  if (se === N || (N !== null && se === N.alternate)) break t;
                  ((se = wr(se)), (N = wr(N)));
                }
                se = null;
              }
            else se = null;
            (K !== null && _c(H, z, K, se, !1),
              te !== null && He !== null && _c(H, He, te, se, !0));
          }
        }
        e: {
          if (
            ((z = R ? br(R) : window),
            (K = z.nodeName && z.nodeName.toLowerCase()),
            K === 'select' || (K === 'input' && z.type === 'file'))
          )
            var ae = lm;
          else if (ac(z))
            if (uc) ae = um;
            else {
              ae = am;
              var ue = im;
            }
          else
            (K = z.nodeName) &&
              K.toLowerCase() === 'input' &&
              (z.type === 'checkbox' || z.type === 'radio') &&
              (ae = cm);
          if (ae && (ae = ae(e, R))) {
            cc(H, ae, n, D);
            break e;
          }
          (ue && ue(e, z, R),
            e === 'focusout' &&
              (ue = z._wrapperState) &&
              ue.controlled &&
              z.type === 'number' &&
              vt(z, 'number', z.value));
        }
        switch (((ue = R ? br(R) : window), e)) {
          case 'focusin':
            (ac(ue) || ue.contentEditable === 'true') &&
              ((yr = ue), (Il = R), (fo = null));
            break;
          case 'focusout':
            fo = Il = yr = null;
            break;
          case 'mousedown':
            Fl = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((Fl = !1), yc(H, n, D));
            break;
          case 'selectionchange':
            if (pm) break;
          case 'keydown':
          case 'keyup':
            yc(H, n, D);
        }
        var de;
        if (zl)
          e: {
            switch (e) {
              case 'compositionstart':
                var me = 'onCompositionStart';
                break e;
              case 'compositionend':
                me = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                me = 'onCompositionUpdate';
                break e;
            }
            me = void 0;
          }
        else
          vr
            ? lc(e, n) && (me = 'onCompositionEnd')
            : e === 'keydown' &&
              n.keyCode === 229 &&
              (me = 'onCompositionStart');
        (me &&
          (rc &&
            n.locale !== 'ko' &&
            (vr || me !== 'onCompositionStart'
              ? me === 'onCompositionEnd' && vr && (de = Za())
              : ((Pn = D),
                (_l = 'value' in Pn ? Pn.value : Pn.textContent),
                (vr = !0))),
          (ue = as(R, me)),
          0 < ue.length &&
            ((me = new tc(me, e, null, n, D)),
            H.push({ event: me, listeners: ue }),
            de
              ? (me.data = de)
              : ((de = ic(n)), de !== null && (me.data = de)))),
          (de = tm ? nm(e, n) : rm(e, n)) &&
            ((R = as(R, 'onBeforeInput')),
            0 < R.length &&
              ((D = new tc('onBeforeInput', 'beforeinput', null, n, D)),
              H.push({ event: D, listeners: R }),
              (D.data = de))));
      }
      Pc(H, t);
    });
  }
  function ho(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function as(e, t) {
    for (var n = t + 'Capture', r = []; e !== null; ) {
      var s = e,
        a = s.stateNode;
      (s.tag === 5 &&
        a !== null &&
        ((s = a),
        (a = We(e, n)),
        a != null && r.unshift(ho(e, a, s)),
        (a = We(e, t)),
        a != null && r.push(ho(e, a, s))),
        (e = e.return));
    }
    return r;
  }
  function wr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function _c(e, t, n, r, s) {
    for (var a = t._reactName, d = []; n !== null && n !== r; ) {
      var y = n,
        k = y.alternate,
        R = y.stateNode;
      if (k !== null && k === r) break;
      (y.tag === 5 &&
        R !== null &&
        ((y = R),
        s
          ? ((k = We(n, a)), k != null && d.unshift(ho(n, k, y)))
          : s || ((k = We(n, a)), k != null && d.push(ho(n, k, y)))),
        (n = n.return));
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var vm = /\r\n?/g,
    ym = /\u0000|\uFFFD/g;
  function Rc(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        vm,
        `
`,
      )
      .replace(ym, '');
  }
  function cs(e, t, n) {
    if (((t = Rc(t)), Rc(e) !== t && n)) throw Error(l(425));
  }
  function us() {}
  var Gl = null,
    Yl = null;
  function Ql(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Kl = typeof setTimeout == 'function' ? setTimeout : void 0,
    xm = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Tc = typeof Promise == 'function' ? Promise : void 0,
    wm =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Tc < 'u'
          ? function (e) {
              return Tc.resolve(null).then(e).catch(km);
            }
          : Kl;
  function km(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Xl(e, t) {
    var n = t,
      r = 0;
    do {
      var s = n.nextSibling;
      if ((e.removeChild(n), s && s.nodeType === 8))
        if (((n = s.data), n === '/$')) {
          if (r === 0) {
            (e.removeChild(s), oo(t));
            return;
          }
          r--;
        } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
      n = s;
    } while (n);
    oo(t);
  }
  function _n(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
        if (t === '/$') return null;
      }
    }
    return e;
  }
  function Oc(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === '$' || n === '$!' || n === '$?') {
          if (t === 0) return e;
          t--;
        } else n === '/$' && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var kr = Math.random().toString(36).slice(2),
    Wt = '__reactFiber$' + kr,
    go = '__reactProps$' + kr,
    rn = '__reactContainer$' + kr,
    ql = '__reactEvents$' + kr,
    bm = '__reactListeners$' + kr,
    Sm = '__reactHandles$' + kr;
  function qn(e) {
    var t = e[Wt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[rn] || n[Wt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Oc(e); e !== null; ) {
            if ((n = e[Wt])) return n;
            e = Oc(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function vo(e) {
    return (
      (e = e[Wt] || e[rn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function br(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(l(33));
  }
  function ds(e) {
    return e[go] || null;
  }
  var Zl = [],
    Sr = -1;
  function Rn(e) {
    return { current: e };
  }
  function Te(e) {
    0 > Sr || ((e.current = Zl[Sr]), (Zl[Sr] = null), Sr--);
  }
  function je(e, t) {
    (Sr++, (Zl[Sr] = e.current), (e.current = t));
  }
  var Tn = {},
    tt = Rn(Tn),
    ut = Rn(!1),
    Zn = Tn;
  function Er(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Tn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var s = {},
      a;
    for (a in n) s[a] = t[a];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = s)),
      s
    );
  }
  function dt(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function fs() {
    (Te(ut), Te(tt));
  }
  function Lc(e, t, n) {
    if (tt.current !== Tn) throw Error(l(168));
    (je(tt, t), je(ut, n));
  }
  function Ac(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
      return n;
    r = r.getChildContext();
    for (var s in r) if (!(s in t)) throw Error(l(108, ce(e) || 'Unknown', s));
    return I({}, n, r);
  }
  function ps(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Tn),
      (Zn = tt.current),
      je(tt, e),
      je(ut, ut.current),
      !0
    );
  }
  function zc(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(l(169));
    (n
      ? ((e = Ac(e, t, Zn)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        Te(ut),
        Te(tt),
        je(tt, e))
      : Te(ut),
      je(ut, n));
  }
  var on = null,
    ms = !1,
    Jl = !1;
  function Mc(e) {
    on === null ? (on = [e]) : on.push(e);
  }
  function Em(e) {
    ((ms = !0), Mc(e));
  }
  function On() {
    if (!Jl && on !== null) {
      Jl = !0;
      var e = 0,
        t = Pe;
      try {
        var n = on;
        for (Pe = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((on = null), (ms = !1));
      } catch (s) {
        throw (on !== null && (on = on.slice(e + 1)), Ha(kl, On), s);
      } finally {
        ((Pe = t), (Jl = !1));
      }
    }
    return null;
  }
  var Cr = [],
    Nr = 0,
    hs = null,
    gs = 0,
    jt = [],
    _t = 0,
    Jn = null,
    sn = 1,
    ln = '';
  function er(e, t) {
    ((Cr[Nr++] = gs), (Cr[Nr++] = hs), (hs = e), (gs = t));
  }
  function Dc(e, t, n) {
    ((jt[_t++] = sn), (jt[_t++] = ln), (jt[_t++] = Jn), (Jn = e));
    var r = sn;
    e = ln;
    var s = 32 - zt(r) - 1;
    ((r &= ~(1 << s)), (n += 1));
    var a = 32 - zt(t) + s;
    if (30 < a) {
      var d = s - (s % 5);
      ((a = (r & ((1 << d) - 1)).toString(32)),
        (r >>= d),
        (s -= d),
        (sn = (1 << (32 - zt(t) + s)) | (n << s) | r),
        (ln = a + e));
    } else ((sn = (1 << a) | (n << s) | r), (ln = e));
  }
  function ei(e) {
    e.return !== null && (er(e, 1), Dc(e, 1, 0));
  }
  function ti(e) {
    for (; e === hs; )
      ((hs = Cr[--Nr]), (Cr[Nr] = null), (gs = Cr[--Nr]), (Cr[Nr] = null));
    for (; e === Jn; )
      ((Jn = jt[--_t]),
        (jt[_t] = null),
        (ln = jt[--_t]),
        (jt[_t] = null),
        (sn = jt[--_t]),
        (jt[_t] = null));
  }
  var wt = null,
    kt = null,
    Oe = !1,
    Dt = null;
  function Hc(e, t) {
    var n = Lt(5, null, null, 0);
    ((n.elementType = 'DELETED'),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function Ic(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (wt = e), (kt = _n(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (wt = e), (kt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Jn !== null ? { id: sn, overflow: ln } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = Lt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (wt = e),
              (kt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function ni(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function ri(e) {
    if (Oe) {
      var t = kt;
      if (t) {
        var n = t;
        if (!Ic(e, t)) {
          if (ni(e)) throw Error(l(418));
          t = _n(n.nextSibling);
          var r = wt;
          t && Ic(e, t)
            ? Hc(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (Oe = !1), (wt = e));
        }
      } else {
        if (ni(e)) throw Error(l(418));
        ((e.flags = (e.flags & -4097) | 2), (Oe = !1), (wt = e));
      }
    }
  }
  function Fc(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    wt = e;
  }
  function vs(e) {
    if (e !== wt) return !1;
    if (!Oe) return (Fc(e), (Oe = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== 'head' && t !== 'body' && !Ql(e.type, e.memoizedProps))),
      t && (t = kt))
    ) {
      if (ni(e)) throw (Bc(), Error(l(418)));
      for (; t; ) (Hc(e, t), (t = _n(t.nextSibling)));
    }
    if ((Fc(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(l(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === '/$') {
              if (t === 0) {
                kt = _n(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
          }
          e = e.nextSibling;
        }
        kt = null;
      }
    } else kt = wt ? _n(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Bc() {
    for (var e = kt; e; ) e = _n(e.nextSibling);
  }
  function Pr() {
    ((kt = wt = null), (Oe = !1));
  }
  function oi(e) {
    Dt === null ? (Dt = [e]) : Dt.push(e);
  }
  var Cm = G.ReactCurrentBatchConfig;
  function yo(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != 'function' && typeof e != 'object')
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(l(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(l(147, e));
        var s = r,
          a = '' + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == 'function' &&
          t.ref._stringRef === a
          ? t.ref
          : ((t = function (d) {
              var y = s.refs;
              d === null ? delete y[a] : (y[a] = d);
            }),
            (t._stringRef = a),
            t);
      }
      if (typeof e != 'string') throw Error(l(284));
      if (!n._owner) throw Error(l(290, e));
    }
    return e;
  }
  function ys(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        l(
          31,
          e === '[object Object]'
            ? 'object with keys {' + Object.keys(t).join(', ') + '}'
            : e,
        ),
      )
    );
  }
  function Vc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Uc(e) {
    function t(N, b) {
      if (e) {
        var j = N.deletions;
        j === null ? ((N.deletions = [b]), (N.flags |= 16)) : j.push(b);
      }
    }
    function n(N, b) {
      if (!e) return null;
      for (; b !== null; ) (t(N, b), (b = b.sibling));
      return null;
    }
    function r(N, b) {
      for (N = new Map(); b !== null; )
        (b.key !== null ? N.set(b.key, b) : N.set(b.index, b), (b = b.sibling));
      return N;
    }
    function s(N, b) {
      return ((N = Fn(N, b)), (N.index = 0), (N.sibling = null), N);
    }
    function a(N, b, j) {
      return (
        (N.index = j),
        e
          ? ((j = N.alternate),
            j !== null
              ? ((j = j.index), j < b ? ((N.flags |= 2), b) : j)
              : ((N.flags |= 2), b))
          : ((N.flags |= 1048576), b)
      );
    }
    function d(N) {
      return (e && N.alternate === null && (N.flags |= 2), N);
    }
    function y(N, b, j, B) {
      return b === null || b.tag !== 6
        ? ((b = Ki(j, N.mode, B)), (b.return = N), b)
        : ((b = s(b, j)), (b.return = N), b);
    }
    function k(N, b, j, B) {
      var ae = j.type;
      return ae === Y
        ? D(N, b, j.props.children, B, j.key)
        : b !== null &&
            (b.elementType === ae ||
              (typeof ae == 'object' &&
                ae !== null &&
                ae.$$typeof === Q &&
                Vc(ae) === b.type))
          ? ((B = s(b, j.props)), (B.ref = yo(N, b, j)), (B.return = N), B)
          : ((B = Vs(j.type, j.key, j.props, null, N.mode, B)),
            (B.ref = yo(N, b, j)),
            (B.return = N),
            B);
    }
    function R(N, b, j, B) {
      return b === null ||
        b.tag !== 4 ||
        b.stateNode.containerInfo !== j.containerInfo ||
        b.stateNode.implementation !== j.implementation
        ? ((b = Xi(j, N.mode, B)), (b.return = N), b)
        : ((b = s(b, j.children || [])), (b.return = N), b);
    }
    function D(N, b, j, B, ae) {
      return b === null || b.tag !== 7
        ? ((b = ar(j, N.mode, B, ae)), (b.return = N), b)
        : ((b = s(b, j)), (b.return = N), b);
    }
    function H(N, b, j) {
      if ((typeof b == 'string' && b !== '') || typeof b == 'number')
        return ((b = Ki('' + b, N.mode, j)), (b.return = N), b);
      if (typeof b == 'object' && b !== null) {
        switch (b.$$typeof) {
          case ee:
            return (
              (j = Vs(b.type, b.key, b.props, null, N.mode, j)),
              (j.ref = yo(N, null, b)),
              (j.return = N),
              j
            );
          case le:
            return ((b = Xi(b, N.mode, j)), (b.return = N), b);
          case Q:
            var B = b._init;
            return H(N, B(b._payload), j);
        }
        if (Gn(b) || $(b))
          return ((b = ar(b, N.mode, j, null)), (b.return = N), b);
        ys(N, b);
      }
      return null;
    }
    function z(N, b, j, B) {
      var ae = b !== null ? b.key : null;
      if ((typeof j == 'string' && j !== '') || typeof j == 'number')
        return ae !== null ? null : y(N, b, '' + j, B);
      if (typeof j == 'object' && j !== null) {
        switch (j.$$typeof) {
          case ee:
            return j.key === ae ? k(N, b, j, B) : null;
          case le:
            return j.key === ae ? R(N, b, j, B) : null;
          case Q:
            return ((ae = j._init), z(N, b, ae(j._payload), B));
        }
        if (Gn(j) || $(j)) return ae !== null ? null : D(N, b, j, B, null);
        ys(N, j);
      }
      return null;
    }
    function K(N, b, j, B, ae) {
      if ((typeof B == 'string' && B !== '') || typeof B == 'number')
        return ((N = N.get(j) || null), y(b, N, '' + B, ae));
      if (typeof B == 'object' && B !== null) {
        switch (B.$$typeof) {
          case ee:
            return (
              (N = N.get(B.key === null ? j : B.key) || null),
              k(b, N, B, ae)
            );
          case le:
            return (
              (N = N.get(B.key === null ? j : B.key) || null),
              R(b, N, B, ae)
            );
          case Q:
            var ue = B._init;
            return K(N, b, j, ue(B._payload), ae);
        }
        if (Gn(B) || $(B))
          return ((N = N.get(j) || null), D(b, N, B, ae, null));
        ys(b, B);
      }
      return null;
    }
    function te(N, b, j, B) {
      for (
        var ae = null, ue = null, de = b, me = (b = 0), Qe = null;
        de !== null && me < j.length;
        me++
      ) {
        de.index > me ? ((Qe = de), (de = null)) : (Qe = de.sibling);
        var Ce = z(N, de, j[me], B);
        if (Ce === null) {
          de === null && (de = Qe);
          break;
        }
        (e && de && Ce.alternate === null && t(N, de),
          (b = a(Ce, b, me)),
          ue === null ? (ae = Ce) : (ue.sibling = Ce),
          (ue = Ce),
          (de = Qe));
      }
      if (me === j.length) return (n(N, de), Oe && er(N, me), ae);
      if (de === null) {
        for (; me < j.length; me++)
          ((de = H(N, j[me], B)),
            de !== null &&
              ((b = a(de, b, me)),
              ue === null ? (ae = de) : (ue.sibling = de),
              (ue = de)));
        return (Oe && er(N, me), ae);
      }
      for (de = r(N, de); me < j.length; me++)
        ((Qe = K(de, N, me, j[me], B)),
          Qe !== null &&
            (e &&
              Qe.alternate !== null &&
              de.delete(Qe.key === null ? me : Qe.key),
            (b = a(Qe, b, me)),
            ue === null ? (ae = Qe) : (ue.sibling = Qe),
            (ue = Qe)));
      return (
        e &&
          de.forEach(function (Bn) {
            return t(N, Bn);
          }),
        Oe && er(N, me),
        ae
      );
    }
    function se(N, b, j, B) {
      var ae = $(j);
      if (typeof ae != 'function') throw Error(l(150));
      if (((j = ae.call(j)), j == null)) throw Error(l(151));
      for (
        var ue = (ae = null), de = b, me = (b = 0), Qe = null, Ce = j.next();
        de !== null && !Ce.done;
        me++, Ce = j.next()
      ) {
        de.index > me ? ((Qe = de), (de = null)) : (Qe = de.sibling);
        var Bn = z(N, de, Ce.value, B);
        if (Bn === null) {
          de === null && (de = Qe);
          break;
        }
        (e && de && Bn.alternate === null && t(N, de),
          (b = a(Bn, b, me)),
          ue === null ? (ae = Bn) : (ue.sibling = Bn),
          (ue = Bn),
          (de = Qe));
      }
      if (Ce.done) return (n(N, de), Oe && er(N, me), ae);
      if (de === null) {
        for (; !Ce.done; me++, Ce = j.next())
          ((Ce = H(N, Ce.value, B)),
            Ce !== null &&
              ((b = a(Ce, b, me)),
              ue === null ? (ae = Ce) : (ue.sibling = Ce),
              (ue = Ce)));
        return (Oe && er(N, me), ae);
      }
      for (de = r(N, de); !Ce.done; me++, Ce = j.next())
        ((Ce = K(de, N, me, Ce.value, B)),
          Ce !== null &&
            (e &&
              Ce.alternate !== null &&
              de.delete(Ce.key === null ? me : Ce.key),
            (b = a(Ce, b, me)),
            ue === null ? (ae = Ce) : (ue.sibling = Ce),
            (ue = Ce)));
      return (
        e &&
          de.forEach(function (oh) {
            return t(N, oh);
          }),
        Oe && er(N, me),
        ae
      );
    }
    function He(N, b, j, B) {
      if (
        (typeof j == 'object' &&
          j !== null &&
          j.type === Y &&
          j.key === null &&
          (j = j.props.children),
        typeof j == 'object' && j !== null)
      ) {
        switch (j.$$typeof) {
          case ee:
            e: {
              for (var ae = j.key, ue = b; ue !== null; ) {
                if (ue.key === ae) {
                  if (((ae = j.type), ae === Y)) {
                    if (ue.tag === 7) {
                      (n(N, ue.sibling),
                        (b = s(ue, j.props.children)),
                        (b.return = N),
                        (N = b));
                      break e;
                    }
                  } else if (
                    ue.elementType === ae ||
                    (typeof ae == 'object' &&
                      ae !== null &&
                      ae.$$typeof === Q &&
                      Vc(ae) === ue.type)
                  ) {
                    (n(N, ue.sibling),
                      (b = s(ue, j.props)),
                      (b.ref = yo(N, ue, j)),
                      (b.return = N),
                      (N = b));
                    break e;
                  }
                  n(N, ue);
                  break;
                } else t(N, ue);
                ue = ue.sibling;
              }
              j.type === Y
                ? ((b = ar(j.props.children, N.mode, B, j.key)),
                  (b.return = N),
                  (N = b))
                : ((B = Vs(j.type, j.key, j.props, null, N.mode, B)),
                  (B.ref = yo(N, b, j)),
                  (B.return = N),
                  (N = B));
            }
            return d(N);
          case le:
            e: {
              for (ue = j.key; b !== null; ) {
                if (b.key === ue)
                  if (
                    b.tag === 4 &&
                    b.stateNode.containerInfo === j.containerInfo &&
                    b.stateNode.implementation === j.implementation
                  ) {
                    (n(N, b.sibling),
                      (b = s(b, j.children || [])),
                      (b.return = N),
                      (N = b));
                    break e;
                  } else {
                    n(N, b);
                    break;
                  }
                else t(N, b);
                b = b.sibling;
              }
              ((b = Xi(j, N.mode, B)), (b.return = N), (N = b));
            }
            return d(N);
          case Q:
            return ((ue = j._init), He(N, b, ue(j._payload), B));
        }
        if (Gn(j)) return te(N, b, j, B);
        if ($(j)) return se(N, b, j, B);
        ys(N, j);
      }
      return (typeof j == 'string' && j !== '') || typeof j == 'number'
        ? ((j = '' + j),
          b !== null && b.tag === 6
            ? (n(N, b.sibling), (b = s(b, j)), (b.return = N), (N = b))
            : (n(N, b), (b = Ki(j, N.mode, B)), (b.return = N), (N = b)),
          d(N))
        : n(N, b);
    }
    return He;
  }
  var jr = Uc(!0),
    $c = Uc(!1),
    xs = Rn(null),
    ws = null,
    _r = null,
    si = null;
  function li() {
    si = _r = ws = null;
  }
  function ii(e) {
    var t = xs.current;
    (Te(xs), (e._currentValue = t));
  }
  function ai(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Rr(e, t) {
    ((ws = e),
      (si = _r = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (ft = !0), (e.firstContext = null)));
  }
  function Rt(e) {
    var t = e._currentValue;
    if (si !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), _r === null)) {
        if (ws === null) throw Error(l(308));
        ((_r = e), (ws.dependencies = { lanes: 0, firstContext: e }));
      } else _r = _r.next = e;
    return t;
  }
  var tr = null;
  function ci(e) {
    tr === null ? (tr = [e]) : tr.push(e);
  }
  function Wc(e, t, n, r) {
    var s = t.interleaved;
    return (
      s === null ? ((n.next = n), ci(t)) : ((n.next = s.next), (s.next = n)),
      (t.interleaved = n),
      an(e, r)
    );
  }
  function an(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      ((e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return));
    return n.tag === 3 ? n.stateNode : null;
  }
  var Ln = !1;
  function ui(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Gc(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        }));
  }
  function cn(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function An(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (Ee & 2) !== 0)) {
      var s = r.pending;
      return (
        s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
        (r.pending = t),
        an(e, n)
      );
    }
    return (
      (s = r.interleaved),
      s === null ? ((t.next = t), ci(r)) : ((t.next = s.next), (s.next = t)),
      (r.interleaved = t),
      an(e, n)
    );
  }
  function ks(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), El(e, n));
    }
  }
  function Yc(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var s = null,
        a = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var d = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          (a === null ? (s = a = d) : (a = a.next = d), (n = n.next));
        } while (n !== null);
        a === null ? (s = a = t) : (a = a.next = t);
      } else s = a = t;
      ((n = {
        baseState: r.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: a,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  function bs(e, t, n, r) {
    var s = e.updateQueue;
    Ln = !1;
    var a = s.firstBaseUpdate,
      d = s.lastBaseUpdate,
      y = s.shared.pending;
    if (y !== null) {
      s.shared.pending = null;
      var k = y,
        R = k.next;
      ((k.next = null), d === null ? (a = R) : (d.next = R), (d = k));
      var D = e.alternate;
      D !== null &&
        ((D = D.updateQueue),
        (y = D.lastBaseUpdate),
        y !== d &&
          (y === null ? (D.firstBaseUpdate = R) : (y.next = R),
          (D.lastBaseUpdate = k)));
    }
    if (a !== null) {
      var H = s.baseState;
      ((d = 0), (D = R = k = null), (y = a));
      do {
        var z = y.lane,
          K = y.eventTime;
        if ((r & z) === z) {
          D !== null &&
            (D = D.next =
              {
                eventTime: K,
                lane: 0,
                tag: y.tag,
                payload: y.payload,
                callback: y.callback,
                next: null,
              });
          e: {
            var te = e,
              se = y;
            switch (((z = t), (K = n), se.tag)) {
              case 1:
                if (((te = se.payload), typeof te == 'function')) {
                  H = te.call(K, H, z);
                  break e;
                }
                H = te;
                break e;
              case 3:
                te.flags = (te.flags & -65537) | 128;
              case 0:
                if (
                  ((te = se.payload),
                  (z = typeof te == 'function' ? te.call(K, H, z) : te),
                  z == null)
                )
                  break e;
                H = I({}, H, z);
                break e;
              case 2:
                Ln = !0;
            }
          }
          y.callback !== null &&
            y.lane !== 0 &&
            ((e.flags |= 64),
            (z = s.effects),
            z === null ? (s.effects = [y]) : z.push(y));
        } else
          ((K = {
            eventTime: K,
            lane: z,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null,
          }),
            D === null ? ((R = D = K), (k = H)) : (D = D.next = K),
            (d |= z));
        if (((y = y.next), y === null)) {
          if (((y = s.shared.pending), y === null)) break;
          ((z = y),
            (y = z.next),
            (z.next = null),
            (s.lastBaseUpdate = z),
            (s.shared.pending = null));
        }
      } while (!0);
      if (
        (D === null && (k = H),
        (s.baseState = k),
        (s.firstBaseUpdate = R),
        (s.lastBaseUpdate = D),
        (t = s.shared.interleaved),
        t !== null)
      ) {
        s = t;
        do ((d |= s.lane), (s = s.next));
        while (s !== t);
      } else a === null && (s.shared.lanes = 0);
      ((or |= d), (e.lanes = d), (e.memoizedState = H));
    }
  }
  function Qc(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          s = r.callback;
        if (s !== null) {
          if (((r.callback = null), (r = n), typeof s != 'function'))
            throw Error(l(191, s));
          s.call(r);
        }
      }
  }
  var xo = {},
    Gt = Rn(xo),
    wo = Rn(xo),
    ko = Rn(xo);
  function nr(e) {
    if (e === xo) throw Error(l(174));
    return e;
  }
  function di(e, t) {
    switch ((je(ko, t), je(wo, e), je(Gt, xo), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Yr(null, '');
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Yr(t, e)));
    }
    (Te(Gt), je(Gt, t));
  }
  function Tr() {
    (Te(Gt), Te(wo), Te(ko));
  }
  function Kc(e) {
    nr(ko.current);
    var t = nr(Gt.current),
      n = Yr(t, e.type);
    t !== n && (je(wo, e), je(Gt, n));
  }
  function fi(e) {
    wo.current === e && (Te(Gt), Te(wo));
  }
  var Le = Rn(0);
  function Ss(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var pi = [];
  function mi() {
    for (var e = 0; e < pi.length; e++)
      pi[e]._workInProgressVersionPrimary = null;
    pi.length = 0;
  }
  var Es = G.ReactCurrentDispatcher,
    hi = G.ReactCurrentBatchConfig,
    rr = 0,
    Ae = null,
    Ve = null,
    Ge = null,
    Cs = !1,
    bo = !1,
    So = 0,
    Nm = 0;
  function nt() {
    throw Error(l(321));
  }
  function gi(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Mt(e[n], t[n])) return !1;
    return !0;
  }
  function vi(e, t, n, r, s, a) {
    if (
      ((rr = a),
      (Ae = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Es.current = e === null || e.memoizedState === null ? Rm : Tm),
      (e = n(r, s)),
      bo)
    ) {
      a = 0;
      do {
        if (((bo = !1), (So = 0), 25 <= a)) throw Error(l(301));
        ((a += 1),
          (Ge = Ve = null),
          (t.updateQueue = null),
          (Es.current = Om),
          (e = n(r, s)));
      } while (bo);
    }
    if (
      ((Es.current = js),
      (t = Ve !== null && Ve.next !== null),
      (rr = 0),
      (Ge = Ve = Ae = null),
      (Cs = !1),
      t)
    )
      throw Error(l(300));
    return e;
  }
  function yi() {
    var e = So !== 0;
    return ((So = 0), e);
  }
  function Yt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Ge === null ? (Ae.memoizedState = Ge = e) : (Ge = Ge.next = e), Ge);
  }
  function Tt() {
    if (Ve === null) {
      var e = Ae.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ve.next;
    var t = Ge === null ? Ae.memoizedState : Ge.next;
    if (t !== null) ((Ge = t), (Ve = e));
    else {
      if (e === null) throw Error(l(310));
      ((Ve = e),
        (e = {
          memoizedState: Ve.memoizedState,
          baseState: Ve.baseState,
          baseQueue: Ve.baseQueue,
          queue: Ve.queue,
          next: null,
        }),
        Ge === null ? (Ae.memoizedState = Ge = e) : (Ge = Ge.next = e));
    }
    return Ge;
  }
  function Eo(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function xi(e) {
    var t = Tt(),
      n = t.queue;
    if (n === null) throw Error(l(311));
    n.lastRenderedReducer = e;
    var r = Ve,
      s = r.baseQueue,
      a = n.pending;
    if (a !== null) {
      if (s !== null) {
        var d = s.next;
        ((s.next = a.next), (a.next = d));
      }
      ((r.baseQueue = s = a), (n.pending = null));
    }
    if (s !== null) {
      ((a = s.next), (r = r.baseState));
      var y = (d = null),
        k = null,
        R = a;
      do {
        var D = R.lane;
        if ((rr & D) === D)
          (k !== null &&
            (k = k.next =
              {
                lane: 0,
                action: R.action,
                hasEagerState: R.hasEagerState,
                eagerState: R.eagerState,
                next: null,
              }),
            (r = R.hasEagerState ? R.eagerState : e(r, R.action)));
        else {
          var H = {
            lane: D,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null,
          };
          (k === null ? ((y = k = H), (d = r)) : (k = k.next = H),
            (Ae.lanes |= D),
            (or |= D));
        }
        R = R.next;
      } while (R !== null && R !== a);
      (k === null ? (d = r) : (k.next = y),
        Mt(r, t.memoizedState) || (ft = !0),
        (t.memoizedState = r),
        (t.baseState = d),
        (t.baseQueue = k),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      s = e;
      do ((a = s.lane), (Ae.lanes |= a), (or |= a), (s = s.next));
      while (s !== e);
    } else s === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function wi(e) {
    var t = Tt(),
      n = t.queue;
    if (n === null) throw Error(l(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      s = n.pending,
      a = t.memoizedState;
    if (s !== null) {
      n.pending = null;
      var d = (s = s.next);
      do ((a = e(a, d.action)), (d = d.next));
      while (d !== s);
      (Mt(a, t.memoizedState) || (ft = !0),
        (t.memoizedState = a),
        t.baseQueue === null && (t.baseState = a),
        (n.lastRenderedState = a));
    }
    return [a, r];
  }
  function Xc() {}
  function qc(e, t) {
    var n = Ae,
      r = Tt(),
      s = t(),
      a = !Mt(r.memoizedState, s);
    if (
      (a && ((r.memoizedState = s), (ft = !0)),
      (r = r.queue),
      ki(eu.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || a || (Ge !== null && Ge.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Co(9, Jc.bind(null, n, r, s, t), void 0, null),
        Ye === null)
      )
        throw Error(l(349));
      (rr & 30) !== 0 || Zc(n, t, s);
    }
    return s;
  }
  function Zc(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Ae.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ae.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function Jc(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), tu(t) && nu(e));
  }
  function eu(e, t, n) {
    return n(function () {
      tu(t) && nu(e);
    });
  }
  function tu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Mt(e, n);
    } catch {
      return !0;
    }
  }
  function nu(e) {
    var t = an(e, 1);
    t !== null && Bt(t, e, 1, -1);
  }
  function ru(e) {
    var t = Yt();
    return (
      typeof e == 'function' && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Eo,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = _m.bind(null, Ae, e)),
      [t.memoizedState, e]
    );
  }
  function Co(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = Ae.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ae.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function ou() {
    return Tt().memoizedState;
  }
  function Ns(e, t, n, r) {
    var s = Yt();
    ((Ae.flags |= e),
      (s.memoizedState = Co(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function Ps(e, t, n, r) {
    var s = Tt();
    r = r === void 0 ? null : r;
    var a = void 0;
    if (Ve !== null) {
      var d = Ve.memoizedState;
      if (((a = d.destroy), r !== null && gi(r, d.deps))) {
        s.memoizedState = Co(t, n, a, r);
        return;
      }
    }
    ((Ae.flags |= e), (s.memoizedState = Co(1 | t, n, a, r)));
  }
  function su(e, t) {
    return Ns(8390656, 8, e, t);
  }
  function ki(e, t) {
    return Ps(2048, 8, e, t);
  }
  function lu(e, t) {
    return Ps(4, 2, e, t);
  }
  function iu(e, t) {
    return Ps(4, 4, e, t);
  }
  function au(e, t) {
    if (typeof t == 'function')
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function cu(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null),
      Ps(4, 4, au.bind(null, t, e), n)
    );
  }
  function bi() {}
  function uu(e, t) {
    var n = Tt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && gi(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function du(e, t) {
    var n = Tt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && gi(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function fu(e, t, n) {
    return (rr & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (ft = !0)), (e.memoizedState = n))
      : (Mt(n, t) ||
          ((n = Va()), (Ae.lanes |= n), (or |= n), (e.baseState = !0)),
        t);
  }
  function Pm(e, t) {
    var n = Pe;
    ((Pe = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = hi.transition;
    hi.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((Pe = n), (hi.transition = r));
    }
  }
  function pu() {
    return Tt().memoizedState;
  }
  function jm(e, t, n) {
    var r = Hn(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      mu(e))
    )
      hu(t, n);
    else if (((n = Wc(e, t, n, r)), n !== null)) {
      var s = at();
      (Bt(n, e, r, s), gu(n, t, r));
    }
  }
  function _m(e, t, n) {
    var r = Hn(e),
      s = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (mu(e)) hu(t, s);
    else {
      var a = e.alternate;
      if (
        e.lanes === 0 &&
        (a === null || a.lanes === 0) &&
        ((a = t.lastRenderedReducer), a !== null)
      )
        try {
          var d = t.lastRenderedState,
            y = a(d, n);
          if (((s.hasEagerState = !0), (s.eagerState = y), Mt(y, d))) {
            var k = t.interleaved;
            (k === null
              ? ((s.next = s), ci(t))
              : ((s.next = k.next), (k.next = s)),
              (t.interleaved = s));
            return;
          }
        } catch {
        } finally {
        }
      ((n = Wc(e, t, s, r)),
        n !== null && ((s = at()), Bt(n, e, r, s), gu(n, t, r)));
    }
  }
  function mu(e) {
    var t = e.alternate;
    return e === Ae || (t !== null && t === Ae);
  }
  function hu(e, t) {
    bo = Cs = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function gu(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), El(e, n));
    }
  }
  var js = {
      readContext: Rt,
      useCallback: nt,
      useContext: nt,
      useEffect: nt,
      useImperativeHandle: nt,
      useInsertionEffect: nt,
      useLayoutEffect: nt,
      useMemo: nt,
      useReducer: nt,
      useRef: nt,
      useState: nt,
      useDebugValue: nt,
      useDeferredValue: nt,
      useTransition: nt,
      useMutableSource: nt,
      useSyncExternalStore: nt,
      useId: nt,
      unstable_isNewReconciler: !1,
    },
    Rm = {
      readContext: Rt,
      useCallback: function (e, t) {
        return ((Yt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Rt,
      useEffect: su,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          Ns(4194308, 4, au.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Ns(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Ns(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Yt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = Yt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = jm.bind(null, Ae, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Yt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: ru,
      useDebugValue: bi,
      useDeferredValue: function (e) {
        return (Yt().memoizedState = e);
      },
      useTransition: function () {
        var e = ru(!1),
          t = e[0];
        return ((e = Pm.bind(null, e[1])), (Yt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = Ae,
          s = Yt();
        if (Oe) {
          if (n === void 0) throw Error(l(407));
          n = n();
        } else {
          if (((n = t()), Ye === null)) throw Error(l(349));
          (rr & 30) !== 0 || Zc(r, t, n);
        }
        s.memoizedState = n;
        var a = { value: n, getSnapshot: t };
        return (
          (s.queue = a),
          su(eu.bind(null, r, a, e), [e]),
          (r.flags |= 2048),
          Co(9, Jc.bind(null, r, a, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Yt(),
          t = Ye.identifierPrefix;
        if (Oe) {
          var n = ln,
            r = sn;
          ((n = (r & ~(1 << (32 - zt(r) - 1))).toString(32) + n),
            (t = ':' + t + 'R' + n),
            (n = So++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += ':'));
        } else ((n = Nm++), (t = ':' + t + 'r' + n.toString(32) + ':'));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Tm = {
      readContext: Rt,
      useCallback: uu,
      useContext: Rt,
      useEffect: ki,
      useImperativeHandle: cu,
      useInsertionEffect: lu,
      useLayoutEffect: iu,
      useMemo: du,
      useReducer: xi,
      useRef: ou,
      useState: function () {
        return xi(Eo);
      },
      useDebugValue: bi,
      useDeferredValue: function (e) {
        var t = Tt();
        return fu(t, Ve.memoizedState, e);
      },
      useTransition: function () {
        var e = xi(Eo)[0],
          t = Tt().memoizedState;
        return [e, t];
      },
      useMutableSource: Xc,
      useSyncExternalStore: qc,
      useId: pu,
      unstable_isNewReconciler: !1,
    },
    Om = {
      readContext: Rt,
      useCallback: uu,
      useContext: Rt,
      useEffect: ki,
      useImperativeHandle: cu,
      useInsertionEffect: lu,
      useLayoutEffect: iu,
      useMemo: du,
      useReducer: wi,
      useRef: ou,
      useState: function () {
        return wi(Eo);
      },
      useDebugValue: bi,
      useDeferredValue: function (e) {
        var t = Tt();
        return Ve === null ? (t.memoizedState = e) : fu(t, Ve.memoizedState, e);
      },
      useTransition: function () {
        var e = wi(Eo)[0],
          t = Tt().memoizedState;
        return [e, t];
      },
      useMutableSource: Xc,
      useSyncExternalStore: qc,
      useId: pu,
      unstable_isNewReconciler: !1,
    };
  function Ht(e, t) {
    if (e && e.defaultProps) {
      ((t = I({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Si(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : I({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var _s = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Xn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = at(),
        s = Hn(e),
        a = cn(r, s);
      ((a.payload = t),
        n != null && (a.callback = n),
        (t = An(e, a, s)),
        t !== null && (Bt(t, e, s, r), ks(t, e, s)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = at(),
        s = Hn(e),
        a = cn(r, s);
      ((a.tag = 1),
        (a.payload = t),
        n != null && (a.callback = n),
        (t = An(e, a, s)),
        t !== null && (Bt(t, e, s, r), ks(t, e, s)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = at(),
        r = Hn(e),
        s = cn(n, r);
      ((s.tag = 2),
        t != null && (s.callback = t),
        (t = An(e, s, r)),
        t !== null && (Bt(t, e, r, n), ks(t, e, r)));
    },
  };
  function vu(e, t, n, r, s, a, d) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(r, a, d)
        : t.prototype && t.prototype.isPureReactComponent
          ? !uo(n, r) || !uo(s, a)
          : !0
    );
  }
  function yu(e, t, n) {
    var r = !1,
      s = Tn,
      a = t.contextType;
    return (
      typeof a == 'object' && a !== null
        ? (a = Rt(a))
        : ((s = dt(t) ? Zn : tt.current),
          (r = t.contextTypes),
          (a = (r = r != null) ? Er(e, s) : Tn)),
      (t = new t(n, a)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = _s),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = s),
        (e.__reactInternalMemoizedMaskedChildContext = a)),
      t
    );
  }
  function xu(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && _s.enqueueReplaceState(t, t.state, null));
  }
  function Ei(e, t, n, r) {
    var s = e.stateNode;
    ((s.props = n), (s.state = e.memoizedState), (s.refs = {}), ui(e));
    var a = t.contextType;
    (typeof a == 'object' && a !== null
      ? (s.context = Rt(a))
      : ((a = dt(t) ? Zn : tt.current), (s.context = Er(e, a))),
      (s.state = e.memoizedState),
      (a = t.getDerivedStateFromProps),
      typeof a == 'function' && (Si(e, t, a, n), (s.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == 'function' ||
        typeof s.getSnapshotBeforeUpdate == 'function' ||
        (typeof s.UNSAFE_componentWillMount != 'function' &&
          typeof s.componentWillMount != 'function') ||
        ((t = s.state),
        typeof s.componentWillMount == 'function' && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == 'function' &&
          s.UNSAFE_componentWillMount(),
        t !== s.state && _s.enqueueReplaceState(s, s.state, null),
        bs(e, n, s, r),
        (s.state = e.memoizedState)),
      typeof s.componentDidMount == 'function' && (e.flags |= 4194308));
  }
  function Or(e, t) {
    try {
      var n = '',
        r = t;
      do ((n += oe(r)), (r = r.return));
      while (r);
      var s = n;
    } catch (a) {
      s =
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack;
    }
    return { value: e, source: t, stack: s, digest: null };
  }
  function Ci(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Ni(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var Lm = typeof WeakMap == 'function' ? WeakMap : Map;
  function wu(e, t, n) {
    ((n = cn(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (Ms || ((Ms = !0), (Bi = r)), Ni(e, t));
      }),
      n
    );
  }
  function ku(e, t, n) {
    ((n = cn(-1, n)), (n.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == 'function') {
      var s = t.value;
      ((n.payload = function () {
        return r(s);
      }),
        (n.callback = function () {
          Ni(e, t);
        }));
    }
    var a = e.stateNode;
    return (
      a !== null &&
        typeof a.componentDidCatch == 'function' &&
        (n.callback = function () {
          (Ni(e, t),
            typeof r != 'function' &&
              (Mn === null ? (Mn = new Set([this])) : Mn.add(this)));
          var d = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: d !== null ? d : '',
          });
        }),
      n
    );
  }
  function bu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Lm();
      var s = new Set();
      r.set(t, s);
    } else ((s = r.get(t)), s === void 0 && ((s = new Set()), r.set(t, s)));
    s.has(n) || (s.add(n), (e = Ym.bind(null, e, t, n)), t.then(e, e));
  }
  function Su(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Eu(e, t, n, r, s) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = cn(-1, 1)), (t.tag = 2), An(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = s), e);
  }
  var Am = G.ReactCurrentOwner,
    ft = !1;
  function it(e, t, n, r) {
    t.child = e === null ? $c(t, null, n, r) : jr(t, e.child, n, r);
  }
  function Cu(e, t, n, r, s) {
    n = n.render;
    var a = t.ref;
    return (
      Rr(t, s),
      (r = vi(e, t, n, r, a, s)),
      (n = yi()),
      e !== null && !ft
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~s),
          un(e, t, s))
        : (Oe && n && ei(t), (t.flags |= 1), it(e, t, r, s), t.child)
    );
  }
  function Nu(e, t, n, r, s) {
    if (e === null) {
      var a = n.type;
      return typeof a == 'function' &&
        !Qi(a) &&
        a.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = a), Pu(e, t, a, r, s))
        : ((e = Vs(n.type, null, r, t, t.mode, s)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((a = e.child), (e.lanes & s) === 0)) {
      var d = a.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : uo), n(d, r) && e.ref === t.ref)
      )
        return un(e, t, s);
    }
    return (
      (t.flags |= 1),
      (e = Fn(a, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Pu(e, t, n, r, s) {
    if (e !== null) {
      var a = e.memoizedProps;
      if (uo(a, r) && e.ref === t.ref)
        if (((ft = !1), (t.pendingProps = r = a), (e.lanes & s) !== 0))
          (e.flags & 131072) !== 0 && (ft = !0);
        else return ((t.lanes = e.lanes), un(e, t, s));
    }
    return Pi(e, t, n, r, s);
  }
  function ju(e, t, n) {
    var r = t.pendingProps,
      s = r.children,
      a = e !== null ? e.memoizedState : null;
    if (r.mode === 'hidden')
      if ((t.mode & 1) === 0)
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          je(Ar, bt),
          (bt |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = a !== null ? a.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            je(Ar, bt),
            (bt |= e),
            null
          );
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = a !== null ? a.baseLanes : n),
          je(Ar, bt),
          (bt |= r));
      }
    else
      (a !== null ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n),
        je(Ar, bt),
        (bt |= r));
    return (it(e, t, s, n), t.child);
  }
  function _u(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Pi(e, t, n, r, s) {
    var a = dt(n) ? Zn : tt.current;
    return (
      (a = Er(t, a)),
      Rr(t, s),
      (n = vi(e, t, n, r, a, s)),
      (r = yi()),
      e !== null && !ft
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~s),
          un(e, t, s))
        : (Oe && r && ei(t), (t.flags |= 1), it(e, t, n, s), t.child)
    );
  }
  function Ru(e, t, n, r, s) {
    if (dt(n)) {
      var a = !0;
      ps(t);
    } else a = !1;
    if ((Rr(t, s), t.stateNode === null))
      (Ts(e, t), yu(t, n, r), Ei(t, n, r, s), (r = !0));
    else if (e === null) {
      var d = t.stateNode,
        y = t.memoizedProps;
      d.props = y;
      var k = d.context,
        R = n.contextType;
      typeof R == 'object' && R !== null
        ? (R = Rt(R))
        : ((R = dt(n) ? Zn : tt.current), (R = Er(t, R)));
      var D = n.getDerivedStateFromProps,
        H =
          typeof D == 'function' ||
          typeof d.getSnapshotBeforeUpdate == 'function';
      (H ||
        (typeof d.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof d.componentWillReceiveProps != 'function') ||
        ((y !== r || k !== R) && xu(t, d, r, R)),
        (Ln = !1));
      var z = t.memoizedState;
      ((d.state = z),
        bs(t, r, d, s),
        (k = t.memoizedState),
        y !== r || z !== k || ut.current || Ln
          ? (typeof D == 'function' && (Si(t, n, D, r), (k = t.memoizedState)),
            (y = Ln || vu(t, n, y, r, z, k, R))
              ? (H ||
                  (typeof d.UNSAFE_componentWillMount != 'function' &&
                    typeof d.componentWillMount != 'function') ||
                  (typeof d.componentWillMount == 'function' &&
                    d.componentWillMount(),
                  typeof d.UNSAFE_componentWillMount == 'function' &&
                    d.UNSAFE_componentWillMount()),
                typeof d.componentDidMount == 'function' &&
                  (t.flags |= 4194308))
              : (typeof d.componentDidMount == 'function' &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = k)),
            (d.props = r),
            (d.state = k),
            (d.context = R),
            (r = y))
          : (typeof d.componentDidMount == 'function' && (t.flags |= 4194308),
            (r = !1)));
    } else {
      ((d = t.stateNode),
        Gc(e, t),
        (y = t.memoizedProps),
        (R = t.type === t.elementType ? y : Ht(t.type, y)),
        (d.props = R),
        (H = t.pendingProps),
        (z = d.context),
        (k = n.contextType),
        typeof k == 'object' && k !== null
          ? (k = Rt(k))
          : ((k = dt(n) ? Zn : tt.current), (k = Er(t, k))));
      var K = n.getDerivedStateFromProps;
      ((D =
        typeof K == 'function' ||
        typeof d.getSnapshotBeforeUpdate == 'function') ||
        (typeof d.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof d.componentWillReceiveProps != 'function') ||
        ((y !== H || z !== k) && xu(t, d, r, k)),
        (Ln = !1),
        (z = t.memoizedState),
        (d.state = z),
        bs(t, r, d, s));
      var te = t.memoizedState;
      y !== H || z !== te || ut.current || Ln
        ? (typeof K == 'function' && (Si(t, n, K, r), (te = t.memoizedState)),
          (R = Ln || vu(t, n, R, r, z, te, k) || !1)
            ? (D ||
                (typeof d.UNSAFE_componentWillUpdate != 'function' &&
                  typeof d.componentWillUpdate != 'function') ||
                (typeof d.componentWillUpdate == 'function' &&
                  d.componentWillUpdate(r, te, k),
                typeof d.UNSAFE_componentWillUpdate == 'function' &&
                  d.UNSAFE_componentWillUpdate(r, te, k)),
              typeof d.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof d.getSnapshotBeforeUpdate == 'function' &&
                (t.flags |= 1024))
            : (typeof d.componentDidUpdate != 'function' ||
                (y === e.memoizedProps && z === e.memoizedState) ||
                (t.flags |= 4),
              typeof d.getSnapshotBeforeUpdate != 'function' ||
                (y === e.memoizedProps && z === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = te)),
          (d.props = r),
          (d.state = te),
          (d.context = k),
          (r = R))
        : (typeof d.componentDidUpdate != 'function' ||
            (y === e.memoizedProps && z === e.memoizedState) ||
            (t.flags |= 4),
          typeof d.getSnapshotBeforeUpdate != 'function' ||
            (y === e.memoizedProps && z === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return ji(e, t, n, r, a, s);
  }
  function ji(e, t, n, r, s, a) {
    _u(e, t);
    var d = (t.flags & 128) !== 0;
    if (!r && !d) return (s && zc(t, n, !1), un(e, t, a));
    ((r = t.stateNode), (Am.current = t));
    var y =
      d && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && d
        ? ((t.child = jr(t, e.child, null, a)), (t.child = jr(t, null, y, a)))
        : it(e, t, y, a),
      (t.memoizedState = r.state),
      s && zc(t, n, !0),
      t.child
    );
  }
  function Tu(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Lc(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Lc(e, t.context, !1),
      di(e, t.containerInfo));
  }
  function Ou(e, t, n, r, s) {
    return (Pr(), oi(s), (t.flags |= 256), it(e, t, n, r), t.child);
  }
  var _i = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ri(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Lu(e, t, n) {
    var r = t.pendingProps,
      s = Le.current,
      a = !1,
      d = (t.flags & 128) !== 0,
      y;
    if (
      ((y = d) ||
        (y = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
      y
        ? ((a = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (s |= 1),
      je(Le, s & 1),
      e === null)
    )
      return (
        ri(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === '$!'
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((d = r.children),
            (e = r.fallback),
            a
              ? ((r = t.mode),
                (a = t.child),
                (d = { mode: 'hidden', children: d }),
                (r & 1) === 0 && a !== null
                  ? ((a.childLanes = 0), (a.pendingProps = d))
                  : (a = Us(d, r, 0, null)),
                (e = ar(e, r, n, null)),
                (a.return = t),
                (e.return = t),
                (a.sibling = e),
                (t.child = a),
                (t.child.memoizedState = Ri(n)),
                (t.memoizedState = _i),
                e)
              : Ti(t, d))
      );
    if (((s = e.memoizedState), s !== null && ((y = s.dehydrated), y !== null)))
      return zm(e, t, d, r, y, s, n);
    if (a) {
      ((a = r.fallback), (d = t.mode), (s = e.child), (y = s.sibling));
      var k = { mode: 'hidden', children: r.children };
      return (
        (d & 1) === 0 && t.child !== s
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = k),
            (t.deletions = null))
          : ((r = Fn(s, k)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
        y !== null ? (a = Fn(y, a)) : ((a = ar(a, d, n, null)), (a.flags |= 2)),
        (a.return = t),
        (r.return = t),
        (r.sibling = a),
        (t.child = r),
        (r = a),
        (a = t.child),
        (d = e.child.memoizedState),
        (d =
          d === null
            ? Ri(n)
            : {
                baseLanes: d.baseLanes | n,
                cachePool: null,
                transitions: d.transitions,
              }),
        (a.memoizedState = d),
        (a.childLanes = e.childLanes & ~n),
        (t.memoizedState = _i),
        r
      );
    }
    return (
      (a = e.child),
      (e = a.sibling),
      (r = Fn(a, { mode: 'visible', children: r.children })),
      (t.mode & 1) === 0 && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function Ti(e, t) {
    return (
      (t = Us({ mode: 'visible', children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Rs(e, t, n, r) {
    return (
      r !== null && oi(r),
      jr(t, e.child, null, n),
      (e = Ti(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function zm(e, t, n, r, s, a, d) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Ci(Error(l(422)))), Rs(e, t, d, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((a = r.fallback),
            (s = t.mode),
            (r = Us({ mode: 'visible', children: r.children }, s, 0, null)),
            (a = ar(a, s, d, null)),
            (a.flags |= 2),
            (r.return = t),
            (a.return = t),
            (r.sibling = a),
            (t.child = r),
            (t.mode & 1) !== 0 && jr(t, e.child, null, d),
            (t.child.memoizedState = Ri(d)),
            (t.memoizedState = _i),
            a);
    if ((t.mode & 1) === 0) return Rs(e, t, d, null);
    if (s.data === '$!') {
      if (((r = s.nextSibling && s.nextSibling.dataset), r)) var y = r.dgst;
      return (
        (r = y),
        (a = Error(l(419))),
        (r = Ci(a, r, void 0)),
        Rs(e, t, d, r)
      );
    }
    if (((y = (d & e.childLanes) !== 0), ft || y)) {
      if (((r = Ye), r !== null)) {
        switch (d & -d) {
          case 4:
            s = 2;
            break;
          case 16:
            s = 8;
            break;
          case 64:
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
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            s = 32;
            break;
          case 536870912:
            s = 268435456;
            break;
          default:
            s = 0;
        }
        ((s = (s & (r.suspendedLanes | d)) !== 0 ? 0 : s),
          s !== 0 &&
            s !== a.retryLane &&
            ((a.retryLane = s), an(e, s), Bt(r, e, s, -1)));
      }
      return (Yi(), (r = Ci(Error(l(421)))), Rs(e, t, d, r));
    }
    return s.data === '$?'
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Qm.bind(null, e)),
        (s._reactRetry = t),
        null)
      : ((e = a.treeContext),
        (kt = _n(s.nextSibling)),
        (wt = t),
        (Oe = !0),
        (Dt = null),
        e !== null &&
          ((jt[_t++] = sn),
          (jt[_t++] = ln),
          (jt[_t++] = Jn),
          (sn = e.id),
          (ln = e.overflow),
          (Jn = t)),
        (t = Ti(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Au(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), ai(e.return, t, n));
  }
  function Oi(e, t, n, r, s) {
    var a = e.memoizedState;
    a === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: s,
        })
      : ((a.isBackwards = t),
        (a.rendering = null),
        (a.renderingStartTime = 0),
        (a.last = r),
        (a.tail = n),
        (a.tailMode = s));
  }
  function zu(e, t, n) {
    var r = t.pendingProps,
      s = r.revealOrder,
      a = r.tail;
    if ((it(e, t, r.children, n), (r = Le.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Au(e, n, t);
          else if (e.tag === 19) Au(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      r &= 1;
    }
    if ((je(Le, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (s) {
        case 'forwards':
          for (n = t.child, s = null; n !== null; )
            ((e = n.alternate),
              e !== null && Ss(e) === null && (s = n),
              (n = n.sibling));
          ((n = s),
            n === null
              ? ((s = t.child), (t.child = null))
              : ((s = n.sibling), (n.sibling = null)),
            Oi(t, !1, s, n, a));
          break;
        case 'backwards':
          for (n = null, s = t.child, t.child = null; s !== null; ) {
            if (((e = s.alternate), e !== null && Ss(e) === null)) {
              t.child = s;
              break;
            }
            ((e = s.sibling), (s.sibling = n), (n = s), (s = e));
          }
          Oi(t, !0, n, null, a);
          break;
        case 'together':
          Oi(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Ts(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function un(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (or |= t.lanes),
      (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(l(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Fn(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        ((e = e.sibling),
          (n = n.sibling = Fn(e, e.pendingProps)),
          (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function Mm(e, t, n) {
    switch (t.tag) {
      case 3:
        (Tu(t), Pr());
        break;
      case 5:
        Kc(t);
        break;
      case 1:
        dt(t.type) && ps(t);
        break;
      case 4:
        di(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          s = t.memoizedProps.value;
        (je(xs, r._currentValue), (r._currentValue = s));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (je(Le, Le.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Lu(e, t, n)
              : (je(Le, Le.current & 1),
                (e = un(e, t, n)),
                e !== null ? e.sibling : null);
        je(Le, Le.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return zu(e, t, n);
          t.flags |= 128;
        }
        if (
          ((s = t.memoizedState),
          s !== null &&
            ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          je(Le, Le.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), ju(e, t, n));
    }
    return un(e, t, n);
  }
  var Mu, Li, Du, Hu;
  ((Mu = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
  }),
    (Li = function () {}),
    (Du = function (e, t, n, r) {
      var s = e.memoizedProps;
      if (s !== r) {
        ((e = t.stateNode), nr(Gt.current));
        var a = null;
        switch (n) {
          case 'input':
            ((s = Wn(e, s)), (r = Wn(e, r)), (a = []));
            break;
          case 'select':
            ((s = I({}, s, { value: void 0 })),
              (r = I({}, r, { value: void 0 })),
              (a = []));
            break;
          case 'textarea':
            ((s = Ke(e, s)), (r = Ke(e, r)), (a = []));
            break;
          default:
            typeof s.onClick != 'function' &&
              typeof r.onClick == 'function' &&
              (e.onclick = us);
        }
        mr(n, r);
        var d;
        n = null;
        for (R in s)
          if (!r.hasOwnProperty(R) && s.hasOwnProperty(R) && s[R] != null)
            if (R === 'style') {
              var y = s[R];
              for (d in y) y.hasOwnProperty(d) && (n || (n = {}), (n[d] = ''));
            } else
              R !== 'dangerouslySetInnerHTML' &&
                R !== 'children' &&
                R !== 'suppressContentEditableWarning' &&
                R !== 'suppressHydrationWarning' &&
                R !== 'autoFocus' &&
                (u.hasOwnProperty(R)
                  ? a || (a = [])
                  : (a = a || []).push(R, null));
        for (R in r) {
          var k = r[R];
          if (
            ((y = s?.[R]),
            r.hasOwnProperty(R) && k !== y && (k != null || y != null))
          )
            if (R === 'style')
              if (y) {
                for (d in y)
                  !y.hasOwnProperty(d) ||
                    (k && k.hasOwnProperty(d)) ||
                    (n || (n = {}), (n[d] = ''));
                for (d in k)
                  k.hasOwnProperty(d) &&
                    y[d] !== k[d] &&
                    (n || (n = {}), (n[d] = k[d]));
              } else (n || (a || (a = []), a.push(R, n)), (n = k));
            else
              R === 'dangerouslySetInnerHTML'
                ? ((k = k ? k.__html : void 0),
                  (y = y ? y.__html : void 0),
                  k != null && y !== k && (a = a || []).push(R, k))
                : R === 'children'
                  ? (typeof k != 'string' && typeof k != 'number') ||
                    (a = a || []).push(R, '' + k)
                  : R !== 'suppressContentEditableWarning' &&
                    R !== 'suppressHydrationWarning' &&
                    (u.hasOwnProperty(R)
                      ? (k != null && R === 'onScroll' && Re('scroll', e),
                        a || y === k || (a = []))
                      : (a = a || []).push(R, k));
        }
        n && (a = a || []).push('style', n);
        var R = a;
        (t.updateQueue = R) && (t.flags |= 4);
      }
    }),
    (Hu = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function No(e, t) {
    if (!Oe)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var n = null; t !== null; )
            (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case 'collapsed':
          n = e.tail;
          for (var r = null; n !== null; )
            (n.alternate !== null && (r = n), (n = n.sibling));
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function rt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var s = e.child; s !== null; )
        ((n |= s.lanes | s.childLanes),
          (r |= s.subtreeFlags & 14680064),
          (r |= s.flags & 14680064),
          (s.return = e),
          (s = s.sibling));
    else
      for (s = e.child; s !== null; )
        ((n |= s.lanes | s.childLanes),
          (r |= s.subtreeFlags),
          (r |= s.flags),
          (s.return = e),
          (s = s.sibling));
    return ((e.subtreeFlags |= r), (e.childLanes = n), t);
  }
  function Dm(e, t, n) {
    var r = t.pendingProps;
    switch ((ti(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (rt(t), null);
      case 1:
        return (dt(t.type) && fs(), rt(t), null);
      case 3:
        return (
          (r = t.stateNode),
          Tr(),
          Te(ut),
          Te(tt),
          mi(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (vs(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Dt !== null && ($i(Dt), (Dt = null)))),
          Li(e, t),
          rt(t),
          null
        );
      case 5:
        fi(t);
        var s = nr(ko.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (Du(e, t, n, r, s),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(l(166));
            return (rt(t), null);
          }
          if (((e = nr(Gt.current)), vs(t))) {
            ((r = t.stateNode), (n = t.type));
            var a = t.memoizedProps;
            switch (((r[Wt] = t), (r[go] = a), (e = (t.mode & 1) !== 0), n)) {
              case 'dialog':
                (Re('cancel', r), Re('close', r));
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                Re('load', r);
                break;
              case 'video':
              case 'audio':
                for (s = 0; s < po.length; s++) Re(po[s], r);
                break;
              case 'source':
                Re('error', r);
                break;
              case 'img':
              case 'image':
              case 'link':
                (Re('error', r), Re('load', r));
                break;
              case 'details':
                Re('toggle', r);
                break;
              case 'input':
                (Io(r, a), Re('invalid', r));
                break;
              case 'select':
                ((r._wrapperState = { wasMultiple: !!a.multiple }),
                  Re('invalid', r));
                break;
              case 'textarea':
                (tn(r, a), Re('invalid', r));
            }
            (mr(n, a), (s = null));
            for (var d in a)
              if (a.hasOwnProperty(d)) {
                var y = a[d];
                d === 'children'
                  ? typeof y == 'string'
                    ? r.textContent !== y &&
                      (a.suppressHydrationWarning !== !0 &&
                        cs(r.textContent, y, e),
                      (s = ['children', y]))
                    : typeof y == 'number' &&
                      r.textContent !== '' + y &&
                      (a.suppressHydrationWarning !== !0 &&
                        cs(r.textContent, y, e),
                      (s = ['children', '' + y]))
                  : u.hasOwnProperty(d) &&
                    y != null &&
                    d === 'onScroll' &&
                    Re('scroll', r);
              }
            switch (n) {
              case 'input':
                (lt(r), Gr(r, a, !0));
                break;
              case 'textarea':
                (lt(r), Bo(r));
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof a.onClick == 'function' && (r.onclick = us);
            }
            ((r = s), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((d = s.nodeType === 9 ? s : s.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = Yn(n)),
              e === 'http://www.w3.org/1999/xhtml'
                ? n === 'script'
                  ? ((e = d.createElement('div')),
                    (e.innerHTML = '<script><\/script>'),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == 'string'
                    ? (e = d.createElement(n, { is: r.is }))
                    : ((e = d.createElement(n)),
                      n === 'select' &&
                        ((d = e),
                        r.multiple
                          ? (d.multiple = !0)
                          : r.size && (d.size = r.size)))
                : (e = d.createElementNS(e, n)),
              (e[Wt] = t),
              (e[go] = r),
              Mu(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((d = Qr(n, r)), n)) {
                case 'dialog':
                  (Re('cancel', e), Re('close', e), (s = r));
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  (Re('load', e), (s = r));
                  break;
                case 'video':
                case 'audio':
                  for (s = 0; s < po.length; s++) Re(po[s], e);
                  s = r;
                  break;
                case 'source':
                  (Re('error', e), (s = r));
                  break;
                case 'img':
                case 'image':
                case 'link':
                  (Re('error', e), Re('load', e), (s = r));
                  break;
                case 'details':
                  (Re('toggle', e), (s = r));
                  break;
                case 'input':
                  (Io(e, r), (s = Wn(e, r)), Re('invalid', e));
                  break;
                case 'option':
                  s = r;
                  break;
                case 'select':
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (s = I({}, r, { value: void 0 })),
                    Re('invalid', e));
                  break;
                case 'textarea':
                  (tn(e, r), (s = Ke(e, r)), Re('invalid', e));
                  break;
                default:
                  s = r;
              }
              (mr(n, s), (y = s));
              for (a in y)
                if (y.hasOwnProperty(a)) {
                  var k = y[a];
                  a === 'style'
                    ? Uo(e, k)
                    : a === 'dangerouslySetInnerHTML'
                      ? ((k = k ? k.__html : void 0), k != null && pr(e, k))
                      : a === 'children'
                        ? typeof k == 'string'
                          ? (n !== 'textarea' || k !== '') && Ct(e, k)
                          : typeof k == 'number' && Ct(e, '' + k)
                        : a !== 'suppressContentEditableWarning' &&
                          a !== 'suppressHydrationWarning' &&
                          a !== 'autoFocus' &&
                          (u.hasOwnProperty(a)
                            ? k != null && a === 'onScroll' && Re('scroll', e)
                            : k != null && X(e, a, k, d));
                }
              switch (n) {
                case 'input':
                  (lt(e), Gr(e, r, !1));
                  break;
                case 'textarea':
                  (lt(e), Bo(e));
                  break;
                case 'option':
                  r.value != null && e.setAttribute('value', '' + ie(r.value));
                  break;
                case 'select':
                  ((e.multiple = !!r.multiple),
                    (a = r.value),
                    a != null
                      ? gn(e, !!r.multiple, a, !1)
                      : r.defaultValue != null &&
                        gn(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof s.onClick == 'function' && (e.onclick = us);
              }
              switch (n) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                  r = !!r.autoFocus;
                  break e;
                case 'img':
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return (rt(t), null);
      case 6:
        if (e && t.stateNode != null) Hu(e, t, e.memoizedProps, r);
        else {
          if (typeof r != 'string' && t.stateNode === null) throw Error(l(166));
          if (((n = nr(ko.current)), nr(Gt.current), vs(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Wt] = t),
              (a = r.nodeValue !== n) && ((e = wt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  cs(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    cs(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            a && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[Wt] = t),
              (t.stateNode = r));
        }
        return (rt(t), null);
      case 13:
        if (
          (Te(Le),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Oe && kt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (Bc(), Pr(), (t.flags |= 98560), (a = !1));
          else if (((a = vs(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!a) throw Error(l(318));
              if (
                ((a = t.memoizedState),
                (a = a !== null ? a.dehydrated : null),
                !a)
              )
                throw Error(l(317));
              a[Wt] = t;
            } else
              (Pr(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (rt(t), (a = !1));
          } else (Dt !== null && ($i(Dt), (Dt = null)), (a = !0));
          if (!a) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Le.current & 1) !== 0
                  ? Ue === 0 && (Ue = 3)
                  : Yi())),
            t.updateQueue !== null && (t.flags |= 4),
            rt(t),
            null);
      case 4:
        return (
          Tr(),
          Li(e, t),
          e === null && mo(t.stateNode.containerInfo),
          rt(t),
          null
        );
      case 10:
        return (ii(t.type._context), rt(t), null);
      case 17:
        return (dt(t.type) && fs(), rt(t), null);
      case 19:
        if ((Te(Le), (a = t.memoizedState), a === null)) return (rt(t), null);
        if (((r = (t.flags & 128) !== 0), (d = a.rendering), d === null))
          if (r) No(a, !1);
          else {
            if (Ue !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((d = Ss(e)), d !== null)) {
                  for (
                    t.flags |= 128,
                      No(a, !1),
                      r = d.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    ((a = n),
                      (e = r),
                      (a.flags &= 14680066),
                      (d = a.alternate),
                      d === null
                        ? ((a.childLanes = 0),
                          (a.lanes = e),
                          (a.child = null),
                          (a.subtreeFlags = 0),
                          (a.memoizedProps = null),
                          (a.memoizedState = null),
                          (a.updateQueue = null),
                          (a.dependencies = null),
                          (a.stateNode = null))
                        : ((a.childLanes = d.childLanes),
                          (a.lanes = d.lanes),
                          (a.child = d.child),
                          (a.subtreeFlags = 0),
                          (a.deletions = null),
                          (a.memoizedProps = d.memoizedProps),
                          (a.memoizedState = d.memoizedState),
                          (a.updateQueue = d.updateQueue),
                          (a.type = d.type),
                          (e = d.dependencies),
                          (a.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling));
                  return (je(Le, (Le.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            a.tail !== null &&
              De() > zr &&
              ((t.flags |= 128), (r = !0), No(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = Ss(d)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                No(a, !0),
                a.tail === null &&
                  a.tailMode === 'hidden' &&
                  !d.alternate &&
                  !Oe)
              )
                return (rt(t), null);
            } else
              2 * De() - a.renderingStartTime > zr &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), No(a, !1), (t.lanes = 4194304));
          a.isBackwards
            ? ((d.sibling = t.child), (t.child = d))
            : ((n = a.last),
              n !== null ? (n.sibling = d) : (t.child = d),
              (a.last = d));
        }
        return a.tail !== null
          ? ((t = a.tail),
            (a.rendering = t),
            (a.tail = t.sibling),
            (a.renderingStartTime = De()),
            (t.sibling = null),
            (n = Le.current),
            je(Le, r ? (n & 1) | 2 : n & 1),
            t)
          : (rt(t), null);
      case 22:
      case 23:
        return (
          Gi(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (bt & 1073741824) !== 0 &&
              (rt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : rt(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(l(156, t.tag));
  }
  function Hm(e, t) {
    switch ((ti(t), t.tag)) {
      case 1:
        return (
          dt(t.type) && fs(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Tr(),
          Te(ut),
          Te(tt),
          mi(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return (fi(t), null);
      case 13:
        if (
          (Te(Le), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(l(340));
          Pr();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (Te(Le), null);
      case 4:
        return (Tr(), null);
      case 10:
        return (ii(t.type._context), null);
      case 22:
      case 23:
        return (Gi(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Os = !1,
    ot = !1,
    Im = typeof WeakSet == 'function' ? WeakSet : Set,
    J = null;
  function Lr(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == 'function')
        try {
          n(null);
        } catch (r) {
          ze(e, t, r);
        }
      else n.current = null;
  }
  function Ai(e, t, n) {
    try {
      n();
    } catch (r) {
      ze(e, t, r);
    }
  }
  var Iu = !1;
  function Fm(e, t) {
    if (((Gl = Zo), (e = vc()), Hl(e))) {
      if ('selectionStart' in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var s = r.anchorOffset,
              a = r.focusNode;
            r = r.focusOffset;
            try {
              (n.nodeType, a.nodeType);
            } catch {
              n = null;
              break e;
            }
            var d = 0,
              y = -1,
              k = -1,
              R = 0,
              D = 0,
              H = e,
              z = null;
            t: for (;;) {
              for (
                var K;
                H !== n || (s !== 0 && H.nodeType !== 3) || (y = d + s),
                  H !== a || (r !== 0 && H.nodeType !== 3) || (k = d + r),
                  H.nodeType === 3 && (d += H.nodeValue.length),
                  (K = H.firstChild) !== null;

              )
                ((z = H), (H = K));
              for (;;) {
                if (H === e) break t;
                if (
                  (z === n && ++R === s && (y = d),
                  z === a && ++D === r && (k = d),
                  (K = H.nextSibling) !== null)
                )
                  break;
                ((H = z), (z = H.parentNode));
              }
              H = K;
            }
            n = y === -1 || k === -1 ? null : { start: y, end: k };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Yl = { focusedElem: e, selectionRange: n }, Zo = !1, J = t;
      J !== null;

    )
      if (((t = J), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (J = e));
      else
        for (; J !== null; ) {
          t = J;
          try {
            var te = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (te !== null) {
                    var se = te.memoizedProps,
                      He = te.memoizedState,
                      N = t.stateNode,
                      b = N.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? se : Ht(t.type, se),
                        He,
                      );
                    N.__reactInternalSnapshotBeforeUpdate = b;
                  }
                  break;
                case 3:
                  var j = t.stateNode.containerInfo;
                  j.nodeType === 1
                    ? (j.textContent = '')
                    : j.nodeType === 9 &&
                      j.documentElement &&
                      j.removeChild(j.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(l(163));
              }
          } catch (B) {
            ze(t, t.return, B);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (J = e));
            break;
          }
          J = t.return;
        }
    return ((te = Iu), (Iu = !1), te);
  }
  function Po(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var s = (r = r.next);
      do {
        if ((s.tag & e) === e) {
          var a = s.destroy;
          ((s.destroy = void 0), a !== void 0 && Ai(t, n, a));
        }
        s = s.next;
      } while (s !== r);
    }
  }
  function Ls(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function zi(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == 'function' ? t(e) : (t.current = e);
    }
  }
  function Fu(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Fu(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Wt],
          delete t[go],
          delete t[ql],
          delete t[bm],
          delete t[Sm])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function Bu(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Vu(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Bu(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Mi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = us)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Mi(e, t, n), e = e.sibling; e !== null; )
        (Mi(e, t, n), (e = e.sibling));
  }
  function Di(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Di(e, t, n), e = e.sibling; e !== null; )
        (Di(e, t, n), (e = e.sibling));
  }
  var qe = null,
    It = !1;
  function zn(e, t, n) {
    for (n = n.child; n !== null; ) (Uu(e, t, n), (n = n.sibling));
  }
  function Uu(e, t, n) {
    if ($t && typeof $t.onCommitFiberUnmount == 'function')
      try {
        $t.onCommitFiberUnmount(Go, n);
      } catch {}
    switch (n.tag) {
      case 5:
        ot || Lr(n, t);
      case 6:
        var r = qe,
          s = It;
        ((qe = null),
          zn(e, t, n),
          (qe = r),
          (It = s),
          qe !== null &&
            (It
              ? ((e = qe),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : qe.removeChild(n.stateNode)));
        break;
      case 18:
        qe !== null &&
          (It
            ? ((e = qe),
              (n = n.stateNode),
              e.nodeType === 8
                ? Xl(e.parentNode, n)
                : e.nodeType === 1 && Xl(e, n),
              oo(e))
            : Xl(qe, n.stateNode));
        break;
      case 4:
        ((r = qe),
          (s = It),
          (qe = n.stateNode.containerInfo),
          (It = !0),
          zn(e, t, n),
          (qe = r),
          (It = s));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !ot &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          s = r = r.next;
          do {
            var a = s,
              d = a.destroy;
            ((a = a.tag),
              d !== void 0 && ((a & 2) !== 0 || (a & 4) !== 0) && Ai(n, t, d),
              (s = s.next));
          } while (s !== r);
        }
        zn(e, t, n);
        break;
      case 1:
        if (
          !ot &&
          (Lr(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == 'function')
        )
          try {
            ((r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount());
          } catch (y) {
            ze(n, t, y);
          }
        zn(e, t, n);
        break;
      case 21:
        zn(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((ot = (r = ot) || n.memoizedState !== null), zn(e, t, n), (ot = r))
          : zn(e, t, n);
        break;
      default:
        zn(e, t, n);
    }
  }
  function $u(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new Im()),
        t.forEach(function (r) {
          var s = Km.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(s, s));
        }));
    }
  }
  function Ft(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var s = n[r];
        try {
          var a = e,
            d = t,
            y = d;
          e: for (; y !== null; ) {
            switch (y.tag) {
              case 5:
                ((qe = y.stateNode), (It = !1));
                break e;
              case 3:
                ((qe = y.stateNode.containerInfo), (It = !0));
                break e;
              case 4:
                ((qe = y.stateNode.containerInfo), (It = !0));
                break e;
            }
            y = y.return;
          }
          if (qe === null) throw Error(l(160));
          (Uu(a, d, s), (qe = null), (It = !1));
          var k = s.alternate;
          (k !== null && (k.return = null), (s.return = null));
        } catch (R) {
          ze(s, t, R);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) (Wu(t, e), (t = t.sibling));
  }
  function Wu(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Ft(t, e), Qt(e), r & 4)) {
          try {
            (Po(3, e, e.return), Ls(3, e));
          } catch (se) {
            ze(e, e.return, se);
          }
          try {
            Po(5, e, e.return);
          } catch (se) {
            ze(e, e.return, se);
          }
        }
        break;
      case 1:
        (Ft(t, e), Qt(e), r & 512 && n !== null && Lr(n, n.return));
        break;
      case 5:
        if (
          (Ft(t, e),
          Qt(e),
          r & 512 && n !== null && Lr(n, n.return),
          e.flags & 32)
        ) {
          var s = e.stateNode;
          try {
            Ct(s, '');
          } catch (se) {
            ze(e, e.return, se);
          }
        }
        if (r & 4 && ((s = e.stateNode), s != null)) {
          var a = e.memoizedProps,
            d = n !== null ? n.memoizedProps : a,
            y = e.type,
            k = e.updateQueue;
          if (((e.updateQueue = null), k !== null))
            try {
              (y === 'input' &&
                a.type === 'radio' &&
                a.name != null &&
                Wr(s, a),
                Qr(y, d));
              var R = Qr(y, a);
              for (d = 0; d < k.length; d += 2) {
                var D = k[d],
                  H = k[d + 1];
                D === 'style'
                  ? Uo(s, H)
                  : D === 'dangerouslySetInnerHTML'
                    ? pr(s, H)
                    : D === 'children'
                      ? Ct(s, H)
                      : X(s, D, H, R);
              }
              switch (y) {
                case 'input':
                  en(s, a);
                  break;
                case 'textarea':
                  Fo(s, a);
                  break;
                case 'select':
                  var z = s._wrapperState.wasMultiple;
                  s._wrapperState.wasMultiple = !!a.multiple;
                  var K = a.value;
                  K != null
                    ? gn(s, !!a.multiple, K, !1)
                    : z !== !!a.multiple &&
                      (a.defaultValue != null
                        ? gn(s, !!a.multiple, a.defaultValue, !0)
                        : gn(s, !!a.multiple, a.multiple ? [] : '', !1));
              }
              s[go] = a;
            } catch (se) {
              ze(e, e.return, se);
            }
        }
        break;
      case 6:
        if ((Ft(t, e), Qt(e), r & 4)) {
          if (e.stateNode === null) throw Error(l(162));
          ((s = e.stateNode), (a = e.memoizedProps));
          try {
            s.nodeValue = a;
          } catch (se) {
            ze(e, e.return, se);
          }
        }
        break;
      case 3:
        if (
          (Ft(t, e), Qt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            oo(t.containerInfo);
          } catch (se) {
            ze(e, e.return, se);
          }
        break;
      case 4:
        (Ft(t, e), Qt(e));
        break;
      case 13:
        (Ft(t, e),
          Qt(e),
          (s = e.child),
          s.flags & 8192 &&
            ((a = s.memoizedState !== null),
            (s.stateNode.isHidden = a),
            !a ||
              (s.alternate !== null && s.alternate.memoizedState !== null) ||
              (Fi = De())),
          r & 4 && $u(e));
        break;
      case 22:
        if (
          ((D = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((ot = (R = ot) || D), Ft(t, e), (ot = R)) : Ft(t, e),
          Qt(e),
          r & 8192)
        ) {
          if (
            ((R = e.memoizedState !== null),
            (e.stateNode.isHidden = R) && !D && (e.mode & 1) !== 0)
          )
            for (J = e, D = e.child; D !== null; ) {
              for (H = J = D; J !== null; ) {
                switch (((z = J), (K = z.child), z.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Po(4, z, z.return);
                    break;
                  case 1:
                    Lr(z, z.return);
                    var te = z.stateNode;
                    if (typeof te.componentWillUnmount == 'function') {
                      ((r = z), (n = z.return));
                      try {
                        ((t = r),
                          (te.props = t.memoizedProps),
                          (te.state = t.memoizedState),
                          te.componentWillUnmount());
                      } catch (se) {
                        ze(r, n, se);
                      }
                    }
                    break;
                  case 5:
                    Lr(z, z.return);
                    break;
                  case 22:
                    if (z.memoizedState !== null) {
                      Qu(H);
                      continue;
                    }
                }
                K !== null ? ((K.return = z), (J = K)) : Qu(H);
              }
              D = D.sibling;
            }
          e: for (D = null, H = e; ; ) {
            if (H.tag === 5) {
              if (D === null) {
                D = H;
                try {
                  ((s = H.stateNode),
                    R
                      ? ((a = s.style),
                        typeof a.setProperty == 'function'
                          ? a.setProperty('display', 'none', 'important')
                          : (a.display = 'none'))
                      : ((y = H.stateNode),
                        (k = H.memoizedProps.style),
                        (d =
                          k != null && k.hasOwnProperty('display')
                            ? k.display
                            : null),
                        (y.style.display = Vo('display', d))));
                } catch (se) {
                  ze(e, e.return, se);
                }
              }
            } else if (H.tag === 6) {
              if (D === null)
                try {
                  H.stateNode.nodeValue = R ? '' : H.memoizedProps;
                } catch (se) {
                  ze(e, e.return, se);
                }
            } else if (
              ((H.tag !== 22 && H.tag !== 23) ||
                H.memoizedState === null ||
                H === e) &&
              H.child !== null
            ) {
              ((H.child.return = H), (H = H.child));
              continue;
            }
            if (H === e) break e;
            for (; H.sibling === null; ) {
              if (H.return === null || H.return === e) break e;
              (D === H && (D = null), (H = H.return));
            }
            (D === H && (D = null),
              (H.sibling.return = H.return),
              (H = H.sibling));
          }
        }
        break;
      case 19:
        (Ft(t, e), Qt(e), r & 4 && $u(e));
        break;
      case 21:
        break;
      default:
        (Ft(t, e), Qt(e));
    }
  }
  function Qt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Bu(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(l(160));
        }
        switch (r.tag) {
          case 5:
            var s = r.stateNode;
            r.flags & 32 && (Ct(s, ''), (r.flags &= -33));
            var a = Vu(e);
            Di(e, a, s);
            break;
          case 3:
          case 4:
            var d = r.stateNode.containerInfo,
              y = Vu(e);
            Mi(e, y, d);
            break;
          default:
            throw Error(l(161));
        }
      } catch (k) {
        ze(e, e.return, k);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Bm(e, t, n) {
    ((J = e), Gu(e));
  }
  function Gu(e, t, n) {
    for (var r = (e.mode & 1) !== 0; J !== null; ) {
      var s = J,
        a = s.child;
      if (s.tag === 22 && r) {
        var d = s.memoizedState !== null || Os;
        if (!d) {
          var y = s.alternate,
            k = (y !== null && y.memoizedState !== null) || ot;
          y = Os;
          var R = ot;
          if (((Os = d), (ot = k) && !R))
            for (J = s; J !== null; )
              ((d = J),
                (k = d.child),
                d.tag === 22 && d.memoizedState !== null
                  ? Ku(s)
                  : k !== null
                    ? ((k.return = d), (J = k))
                    : Ku(s));
          for (; a !== null; ) ((J = a), Gu(a), (a = a.sibling));
          ((J = s), (Os = y), (ot = R));
        }
        Yu(e);
      } else
        (s.subtreeFlags & 8772) !== 0 && a !== null
          ? ((a.return = s), (J = a))
          : Yu(e);
    }
  }
  function Yu(e) {
    for (; J !== null; ) {
      var t = J;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                ot || Ls(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !ot)
                  if (n === null) r.componentDidMount();
                  else {
                    var s =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : Ht(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      s,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var a = t.updateQueue;
                a !== null && Qc(t, a, r);
                break;
              case 3:
                var d = t.updateQueue;
                if (d !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  Qc(t, d, n);
                }
                break;
              case 5:
                var y = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = y;
                  var k = t.memoizedProps;
                  switch (t.type) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      k.autoFocus && n.focus();
                      break;
                    case 'img':
                      k.src && (n.src = k.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var R = t.alternate;
                  if (R !== null) {
                    var D = R.memoizedState;
                    if (D !== null) {
                      var H = D.dehydrated;
                      H !== null && oo(H);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(l(163));
            }
          ot || (t.flags & 512 && zi(t));
        } catch (z) {
          ze(t, t.return, z);
        }
      }
      if (t === e) {
        J = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (J = n));
        break;
      }
      J = t.return;
    }
  }
  function Qu(e) {
    for (; J !== null; ) {
      var t = J;
      if (t === e) {
        J = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (J = n));
        break;
      }
      J = t.return;
    }
  }
  function Ku(e) {
    for (; J !== null; ) {
      var t = J;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Ls(4, t);
            } catch (k) {
              ze(t, n, k);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == 'function') {
              var s = t.return;
              try {
                r.componentDidMount();
              } catch (k) {
                ze(t, s, k);
              }
            }
            var a = t.return;
            try {
              zi(t);
            } catch (k) {
              ze(t, a, k);
            }
            break;
          case 5:
            var d = t.return;
            try {
              zi(t);
            } catch (k) {
              ze(t, d, k);
            }
        }
      } catch (k) {
        ze(t, t.return, k);
      }
      if (t === e) {
        J = null;
        break;
      }
      var y = t.sibling;
      if (y !== null) {
        ((y.return = t.return), (J = y));
        break;
      }
      J = t.return;
    }
  }
  var Vm = Math.ceil,
    As = G.ReactCurrentDispatcher,
    Hi = G.ReactCurrentOwner,
    Ot = G.ReactCurrentBatchConfig,
    Ee = 0,
    Ye = null,
    Fe = null,
    Ze = 0,
    bt = 0,
    Ar = Rn(0),
    Ue = 0,
    jo = null,
    or = 0,
    zs = 0,
    Ii = 0,
    _o = null,
    pt = null,
    Fi = 0,
    zr = 1 / 0,
    dn = null,
    Ms = !1,
    Bi = null,
    Mn = null,
    Ds = !1,
    Dn = null,
    Hs = 0,
    Ro = 0,
    Vi = null,
    Is = -1,
    Fs = 0;
  function at() {
    return (Ee & 6) !== 0 ? De() : Is !== -1 ? Is : (Is = De());
  }
  function Hn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (Ee & 2) !== 0 && Ze !== 0
        ? Ze & -Ze
        : Cm.transition !== null
          ? (Fs === 0 && (Fs = Va()), Fs)
          : ((e = Pe),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : qa(e.type))),
            e);
  }
  function Bt(e, t, n, r) {
    if (50 < Ro) throw ((Ro = 0), (Vi = null), Error(l(185)));
    (Jr(e, n, r),
      ((Ee & 2) === 0 || e !== Ye) &&
        (e === Ye && ((Ee & 2) === 0 && (zs |= n), Ue === 4 && In(e, Ze)),
        mt(e, r),
        n === 1 &&
          Ee === 0 &&
          (t.mode & 1) === 0 &&
          ((zr = De() + 500), ms && On())));
  }
  function mt(e, t) {
    var n = e.callbackNode;
    Cp(e, t);
    var r = Ko(e, e === Ye ? Ze : 0);
    if (r === 0)
      (n !== null && Ia(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && Ia(n), t === 1))
        (e.tag === 0 ? Em(qu.bind(null, e)) : Mc(qu.bind(null, e)),
          wm(function () {
            (Ee & 6) === 0 && On();
          }),
          (n = null));
      else {
        switch (Ua(r)) {
          case 1:
            n = kl;
            break;
          case 4:
            n = Fa;
            break;
          case 16:
            n = Wo;
            break;
          case 536870912:
            n = Ba;
            break;
          default:
            n = Wo;
        }
        n = sd(n, Xu.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function Xu(e, t) {
    if (((Is = -1), (Fs = 0), (Ee & 6) !== 0)) throw Error(l(327));
    var n = e.callbackNode;
    if (Mr() && e.callbackNode !== n) return null;
    var r = Ko(e, e === Ye ? Ze : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Bs(e, r);
    else {
      t = r;
      var s = Ee;
      Ee |= 2;
      var a = Ju();
      (Ye !== e || Ze !== t) && ((dn = null), (zr = De() + 500), lr(e, t));
      do
        try {
          Wm();
          break;
        } catch (y) {
          Zu(e, y);
        }
      while (!0);
      (li(),
        (As.current = a),
        (Ee = s),
        Fe !== null ? (t = 0) : ((Ye = null), (Ze = 0), (t = Ue)));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((s = bl(e)), s !== 0 && ((r = s), (t = Ui(e, s)))),
        t === 1)
      )
        throw ((n = jo), lr(e, 0), In(e, r), mt(e, De()), n);
      if (t === 6) In(e, r);
      else {
        if (
          ((s = e.current.alternate),
          (r & 30) === 0 &&
            !Um(s) &&
            ((t = Bs(e, r)),
            t === 2 && ((a = bl(e)), a !== 0 && ((r = a), (t = Ui(e, a)))),
            t === 1))
        )
          throw ((n = jo), lr(e, 0), In(e, r), mt(e, De()), n);
        switch (((e.finishedWork = s), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(l(345));
          case 2:
            ir(e, pt, dn);
            break;
          case 3:
            if (
              (In(e, r),
              (r & 130023424) === r && ((t = Fi + 500 - De()), 10 < t))
            ) {
              if (Ko(e, 0) !== 0) break;
              if (((s = e.suspendedLanes), (s & r) !== r)) {
                (at(), (e.pingedLanes |= e.suspendedLanes & s));
                break;
              }
              e.timeoutHandle = Kl(ir.bind(null, e, pt, dn), t);
              break;
            }
            ir(e, pt, dn);
            break;
          case 4:
            if ((In(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, s = -1; 0 < r; ) {
              var d = 31 - zt(r);
              ((a = 1 << d), (d = t[d]), d > s && (s = d), (r &= ~a));
            }
            if (
              ((r = s),
              (r = De() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * Vm(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Kl(ir.bind(null, e, pt, dn), r);
              break;
            }
            ir(e, pt, dn);
            break;
          case 5:
            ir(e, pt, dn);
            break;
          default:
            throw Error(l(329));
        }
      }
    }
    return (mt(e, De()), e.callbackNode === n ? Xu.bind(null, e) : null);
  }
  function Ui(e, t) {
    var n = _o;
    return (
      e.current.memoizedState.isDehydrated && (lr(e, t).flags |= 256),
      (e = Bs(e, t)),
      e !== 2 && ((t = pt), (pt = n), t !== null && $i(t)),
      e
    );
  }
  function $i(e) {
    pt === null ? (pt = e) : pt.push.apply(pt, e);
  }
  function Um(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var s = n[r],
              a = s.getSnapshot;
            s = s.value;
            try {
              if (!Mt(a(), s)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        ((n.return = t), (t = n));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function In(e, t) {
    for (
      t &= ~Ii,
        t &= ~zs,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - zt(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function qu(e) {
    if ((Ee & 6) !== 0) throw Error(l(327));
    Mr();
    var t = Ko(e, 0);
    if ((t & 1) === 0) return (mt(e, De()), null);
    var n = Bs(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = bl(e);
      r !== 0 && ((t = r), (n = Ui(e, r)));
    }
    if (n === 1) throw ((n = jo), lr(e, 0), In(e, t), mt(e, De()), n);
    if (n === 6) throw Error(l(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      ir(e, pt, dn),
      mt(e, De()),
      null
    );
  }
  function Wi(e, t) {
    var n = Ee;
    Ee |= 1;
    try {
      return e(t);
    } finally {
      ((Ee = n), Ee === 0 && ((zr = De() + 500), ms && On()));
    }
  }
  function sr(e) {
    Dn !== null && Dn.tag === 0 && (Ee & 6) === 0 && Mr();
    var t = Ee;
    Ee |= 1;
    var n = Ot.transition,
      r = Pe;
    try {
      if (((Ot.transition = null), (Pe = 1), e)) return e();
    } finally {
      ((Pe = r), (Ot.transition = n), (Ee = t), (Ee & 6) === 0 && On());
    }
  }
  function Gi() {
    ((bt = Ar.current), Te(Ar));
  }
  function lr(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), xm(n)), Fe !== null))
      for (n = Fe.return; n !== null; ) {
        var r = n;
        switch ((ti(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && fs());
            break;
          case 3:
            (Tr(), Te(ut), Te(tt), mi());
            break;
          case 5:
            fi(r);
            break;
          case 4:
            Tr();
            break;
          case 13:
            Te(Le);
            break;
          case 19:
            Te(Le);
            break;
          case 10:
            ii(r.type._context);
            break;
          case 22:
          case 23:
            Gi();
        }
        n = n.return;
      }
    if (
      ((Ye = e),
      (Fe = e = Fn(e.current, null)),
      (Ze = bt = t),
      (Ue = 0),
      (jo = null),
      (Ii = zs = or = 0),
      (pt = _o = null),
      tr !== null)
    ) {
      for (t = 0; t < tr.length; t++)
        if (((n = tr[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var s = r.next,
            a = n.pending;
          if (a !== null) {
            var d = a.next;
            ((a.next = s), (r.next = d));
          }
          n.pending = r;
        }
      tr = null;
    }
    return e;
  }
  function Zu(e, t) {
    do {
      var n = Fe;
      try {
        if ((li(), (Es.current = js), Cs)) {
          for (var r = Ae.memoizedState; r !== null; ) {
            var s = r.queue;
            (s !== null && (s.pending = null), (r = r.next));
          }
          Cs = !1;
        }
        if (
          ((rr = 0),
          (Ge = Ve = Ae = null),
          (bo = !1),
          (So = 0),
          (Hi.current = null),
          n === null || n.return === null)
        ) {
          ((Ue = 1), (jo = t), (Fe = null));
          break;
        }
        e: {
          var a = e,
            d = n.return,
            y = n,
            k = t;
          if (
            ((t = Ze),
            (y.flags |= 32768),
            k !== null && typeof k == 'object' && typeof k.then == 'function')
          ) {
            var R = k,
              D = y,
              H = D.tag;
            if ((D.mode & 1) === 0 && (H === 0 || H === 11 || H === 15)) {
              var z = D.alternate;
              z
                ? ((D.updateQueue = z.updateQueue),
                  (D.memoizedState = z.memoizedState),
                  (D.lanes = z.lanes))
                : ((D.updateQueue = null), (D.memoizedState = null));
            }
            var K = Su(d);
            if (K !== null) {
              ((K.flags &= -257),
                Eu(K, d, y, a, t),
                K.mode & 1 && bu(a, R, t),
                (t = K),
                (k = R));
              var te = t.updateQueue;
              if (te === null) {
                var se = new Set();
                (se.add(k), (t.updateQueue = se));
              } else te.add(k);
              break e;
            } else {
              if ((t & 1) === 0) {
                (bu(a, R, t), Yi());
                break e;
              }
              k = Error(l(426));
            }
          } else if (Oe && y.mode & 1) {
            var He = Su(d);
            if (He !== null) {
              ((He.flags & 65536) === 0 && (He.flags |= 256),
                Eu(He, d, y, a, t),
                oi(Or(k, y)));
              break e;
            }
          }
          ((a = k = Or(k, y)),
            Ue !== 4 && (Ue = 2),
            _o === null ? (_o = [a]) : _o.push(a),
            (a = d));
          do {
            switch (a.tag) {
              case 3:
                ((a.flags |= 65536), (t &= -t), (a.lanes |= t));
                var N = wu(a, k, t);
                Yc(a, N);
                break e;
              case 1:
                y = k;
                var b = a.type,
                  j = a.stateNode;
                if (
                  (a.flags & 128) === 0 &&
                  (typeof b.getDerivedStateFromError == 'function' ||
                    (j !== null &&
                      typeof j.componentDidCatch == 'function' &&
                      (Mn === null || !Mn.has(j))))
                ) {
                  ((a.flags |= 65536), (t &= -t), (a.lanes |= t));
                  var B = ku(a, y, t);
                  Yc(a, B);
                  break e;
                }
            }
            a = a.return;
          } while (a !== null);
        }
        td(n);
      } catch (ae) {
        ((t = ae), Fe === n && n !== null && (Fe = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function Ju() {
    var e = As.current;
    return ((As.current = js), e === null ? js : e);
  }
  function Yi() {
    ((Ue === 0 || Ue === 3 || Ue === 2) && (Ue = 4),
      Ye === null ||
        ((or & 268435455) === 0 && (zs & 268435455) === 0) ||
        In(Ye, Ze));
  }
  function Bs(e, t) {
    var n = Ee;
    Ee |= 2;
    var r = Ju();
    (Ye !== e || Ze !== t) && ((dn = null), lr(e, t));
    do
      try {
        $m();
        break;
      } catch (s) {
        Zu(e, s);
      }
    while (!0);
    if ((li(), (Ee = n), (As.current = r), Fe !== null)) throw Error(l(261));
    return ((Ye = null), (Ze = 0), Ue);
  }
  function $m() {
    for (; Fe !== null; ) ed(Fe);
  }
  function Wm() {
    for (; Fe !== null && !gp(); ) ed(Fe);
  }
  function ed(e) {
    var t = od(e.alternate, e, bt);
    ((e.memoizedProps = e.pendingProps),
      t === null ? td(e) : (Fe = t),
      (Hi.current = null));
  }
  function td(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = Dm(n, t, bt)), n !== null)) {
          Fe = n;
          return;
        }
      } else {
        if (((n = Hm(n, t)), n !== null)) {
          ((n.flags &= 32767), (Fe = n));
          return;
        }
        if (e !== null)
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((Ue = 6), (Fe = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Fe = t;
        return;
      }
      Fe = t = e;
    } while (t !== null);
    Ue === 0 && (Ue = 5);
  }
  function ir(e, t, n) {
    var r = Pe,
      s = Ot.transition;
    try {
      ((Ot.transition = null), (Pe = 1), Gm(e, t, n, r));
    } finally {
      ((Ot.transition = s), (Pe = r));
    }
    return null;
  }
  function Gm(e, t, n, r) {
    do Mr();
    while (Dn !== null);
    if ((Ee & 6) !== 0) throw Error(l(327));
    n = e.finishedWork;
    var s = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(l(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var a = n.lanes | n.childLanes;
    if (
      (Np(e, a),
      e === Ye && ((Fe = Ye = null), (Ze = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        Ds ||
        ((Ds = !0),
        sd(Wo, function () {
          return (Mr(), null);
        })),
      (a = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || a)
    ) {
      ((a = Ot.transition), (Ot.transition = null));
      var d = Pe;
      Pe = 1;
      var y = Ee;
      ((Ee |= 4),
        (Hi.current = null),
        Fm(e, n),
        Wu(n, e),
        fm(Yl),
        (Zo = !!Gl),
        (Yl = Gl = null),
        (e.current = n),
        Bm(n),
        vp(),
        (Ee = y),
        (Pe = d),
        (Ot.transition = a));
    } else e.current = n;
    if (
      (Ds && ((Ds = !1), (Dn = e), (Hs = s)),
      (a = e.pendingLanes),
      a === 0 && (Mn = null),
      wp(n.stateNode),
      mt(e, De()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((s = t[n]), r(s.value, { componentStack: s.stack, digest: s.digest }));
    if (Ms) throw ((Ms = !1), (e = Bi), (Bi = null), e);
    return (
      (Hs & 1) !== 0 && e.tag !== 0 && Mr(),
      (a = e.pendingLanes),
      (a & 1) !== 0 ? (e === Vi ? Ro++ : ((Ro = 0), (Vi = e))) : (Ro = 0),
      On(),
      null
    );
  }
  function Mr() {
    if (Dn !== null) {
      var e = Ua(Hs),
        t = Ot.transition,
        n = Pe;
      try {
        if (((Ot.transition = null), (Pe = 16 > e ? 16 : e), Dn === null))
          var r = !1;
        else {
          if (((e = Dn), (Dn = null), (Hs = 0), (Ee & 6) !== 0))
            throw Error(l(331));
          var s = Ee;
          for (Ee |= 4, J = e.current; J !== null; ) {
            var a = J,
              d = a.child;
            if ((J.flags & 16) !== 0) {
              var y = a.deletions;
              if (y !== null) {
                for (var k = 0; k < y.length; k++) {
                  var R = y[k];
                  for (J = R; J !== null; ) {
                    var D = J;
                    switch (D.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Po(8, D, a);
                    }
                    var H = D.child;
                    if (H !== null) ((H.return = D), (J = H));
                    else
                      for (; J !== null; ) {
                        D = J;
                        var z = D.sibling,
                          K = D.return;
                        if ((Fu(D), D === R)) {
                          J = null;
                          break;
                        }
                        if (z !== null) {
                          ((z.return = K), (J = z));
                          break;
                        }
                        J = K;
                      }
                  }
                }
                var te = a.alternate;
                if (te !== null) {
                  var se = te.child;
                  if (se !== null) {
                    te.child = null;
                    do {
                      var He = se.sibling;
                      ((se.sibling = null), (se = He));
                    } while (se !== null);
                  }
                }
                J = a;
              }
            }
            if ((a.subtreeFlags & 2064) !== 0 && d !== null)
              ((d.return = a), (J = d));
            else
              e: for (; J !== null; ) {
                if (((a = J), (a.flags & 2048) !== 0))
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Po(9, a, a.return);
                  }
                var N = a.sibling;
                if (N !== null) {
                  ((N.return = a.return), (J = N));
                  break e;
                }
                J = a.return;
              }
          }
          var b = e.current;
          for (J = b; J !== null; ) {
            d = J;
            var j = d.child;
            if ((d.subtreeFlags & 2064) !== 0 && j !== null)
              ((j.return = d), (J = j));
            else
              e: for (d = b; J !== null; ) {
                if (((y = J), (y.flags & 2048) !== 0))
                  try {
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ls(9, y);
                    }
                  } catch (ae) {
                    ze(y, y.return, ae);
                  }
                if (y === d) {
                  J = null;
                  break e;
                }
                var B = y.sibling;
                if (B !== null) {
                  ((B.return = y.return), (J = B));
                  break e;
                }
                J = y.return;
              }
          }
          if (
            ((Ee = s),
            On(),
            $t && typeof $t.onPostCommitFiberRoot == 'function')
          )
            try {
              $t.onPostCommitFiberRoot(Go, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((Pe = n), (Ot.transition = t));
      }
    }
    return !1;
  }
  function nd(e, t, n) {
    ((t = Or(n, t)),
      (t = wu(e, t, 1)),
      (e = An(e, t, 1)),
      (t = at()),
      e !== null && (Jr(e, 1, t), mt(e, t)));
  }
  function ze(e, t, n) {
    if (e.tag === 3) nd(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          nd(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof r.componentDidCatch == 'function' &&
              (Mn === null || !Mn.has(r)))
          ) {
            ((e = Or(n, e)),
              (e = ku(t, e, 1)),
              (t = An(t, e, 1)),
              (e = at()),
              t !== null && (Jr(t, 1, e), mt(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ym(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = at()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Ye === e &&
        (Ze & n) === n &&
        (Ue === 4 || (Ue === 3 && (Ze & 130023424) === Ze && 500 > De() - Fi)
          ? lr(e, 0)
          : (Ii |= n)),
      mt(e, t));
  }
  function rd(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Qo), (Qo <<= 1), (Qo & 130023424) === 0 && (Qo = 4194304)));
    var n = at();
    ((e = an(e, t)), e !== null && (Jr(e, t, n), mt(e, n)));
  }
  function Qm(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), rd(e, n));
  }
  function Km(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          s = e.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(l(314));
    }
    (r !== null && r.delete(t), rd(e, n));
  }
  var od;
  od = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || ut.current) ft = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
          return ((ft = !1), Mm(e, t, n));
        ft = (e.flags & 131072) !== 0;
      }
    else ((ft = !1), Oe && (t.flags & 1048576) !== 0 && Dc(t, gs, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (Ts(e, t), (e = t.pendingProps));
        var s = Er(t, tt.current);
        (Rr(t, n), (s = vi(null, t, r, e, s, n)));
        var a = yi();
        return (
          (t.flags |= 1),
          typeof s == 'object' &&
          s !== null &&
          typeof s.render == 'function' &&
          s.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              dt(r) ? ((a = !0), ps(t)) : (a = !1),
              (t.memoizedState =
                s.state !== null && s.state !== void 0 ? s.state : null),
              ui(t),
              (s.updater = _s),
              (t.stateNode = s),
              (s._reactInternals = t),
              Ei(t, r, e, n),
              (t = ji(null, t, r, !0, a, n)))
            : ((t.tag = 0), Oe && a && ei(t), it(null, t, s, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Ts(e, t),
            (e = t.pendingProps),
            (s = r._init),
            (r = s(r._payload)),
            (t.type = r),
            (s = t.tag = qm(r)),
            (e = Ht(r, e)),
            s)
          ) {
            case 0:
              t = Pi(null, t, r, e, n);
              break e;
            case 1:
              t = Ru(null, t, r, e, n);
              break e;
            case 11:
              t = Cu(null, t, r, e, n);
              break e;
            case 14:
              t = Nu(null, t, r, Ht(r.type, e), n);
              break e;
          }
          throw Error(l(306, r, ''));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (s = t.pendingProps),
          (s = t.elementType === r ? s : Ht(r, s)),
          Pi(e, t, r, s, n)
        );
      case 1:
        return (
          (r = t.type),
          (s = t.pendingProps),
          (s = t.elementType === r ? s : Ht(r, s)),
          Ru(e, t, r, s, n)
        );
      case 3:
        e: {
          if ((Tu(t), e === null)) throw Error(l(387));
          ((r = t.pendingProps),
            (a = t.memoizedState),
            (s = a.element),
            Gc(e, t),
            bs(t, r, null, n));
          var d = t.memoizedState;
          if (((r = d.element), a.isDehydrated))
            if (
              ((a = {
                element: r,
                isDehydrated: !1,
                cache: d.cache,
                pendingSuspenseBoundaries: d.pendingSuspenseBoundaries,
                transitions: d.transitions,
              }),
              (t.updateQueue.baseState = a),
              (t.memoizedState = a),
              t.flags & 256)
            ) {
              ((s = Or(Error(l(423)), t)), (t = Ou(e, t, r, n, s)));
              break e;
            } else if (r !== s) {
              ((s = Or(Error(l(424)), t)), (t = Ou(e, t, r, n, s)));
              break e;
            } else
              for (
                kt = _n(t.stateNode.containerInfo.firstChild),
                  wt = t,
                  Oe = !0,
                  Dt = null,
                  n = $c(t, null, r, n),
                  t.child = n;
                n;

              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((Pr(), r === s)) {
              t = un(e, t, n);
              break e;
            }
            it(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Kc(t),
          e === null && ri(t),
          (r = t.type),
          (s = t.pendingProps),
          (a = e !== null ? e.memoizedProps : null),
          (d = s.children),
          Ql(r, s) ? (d = null) : a !== null && Ql(r, a) && (t.flags |= 32),
          _u(e, t),
          it(e, t, d, n),
          t.child
        );
      case 6:
        return (e === null && ri(t), null);
      case 13:
        return Lu(e, t, n);
      case 4:
        return (
          di(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = jr(t, null, r, n)) : it(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (s = t.pendingProps),
          (s = t.elementType === r ? s : Ht(r, s)),
          Cu(e, t, r, s, n)
        );
      case 7:
        return (it(e, t, t.pendingProps, n), t.child);
      case 8:
        return (it(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (it(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (s = t.pendingProps),
            (a = t.memoizedProps),
            (d = s.value),
            je(xs, r._currentValue),
            (r._currentValue = d),
            a !== null)
          )
            if (Mt(a.value, d)) {
              if (a.children === s.children && !ut.current) {
                t = un(e, t, n);
                break e;
              }
            } else
              for (a = t.child, a !== null && (a.return = t); a !== null; ) {
                var y = a.dependencies;
                if (y !== null) {
                  d = a.child;
                  for (var k = y.firstContext; k !== null; ) {
                    if (k.context === r) {
                      if (a.tag === 1) {
                        ((k = cn(-1, n & -n)), (k.tag = 2));
                        var R = a.updateQueue;
                        if (R !== null) {
                          R = R.shared;
                          var D = R.pending;
                          (D === null
                            ? (k.next = k)
                            : ((k.next = D.next), (D.next = k)),
                            (R.pending = k));
                        }
                      }
                      ((a.lanes |= n),
                        (k = a.alternate),
                        k !== null && (k.lanes |= n),
                        ai(a.return, n, t),
                        (y.lanes |= n));
                      break;
                    }
                    k = k.next;
                  }
                } else if (a.tag === 10) d = a.type === t.type ? null : a.child;
                else if (a.tag === 18) {
                  if (((d = a.return), d === null)) throw Error(l(341));
                  ((d.lanes |= n),
                    (y = d.alternate),
                    y !== null && (y.lanes |= n),
                    ai(d, n, t),
                    (d = a.sibling));
                } else d = a.child;
                if (d !== null) d.return = a;
                else
                  for (d = a; d !== null; ) {
                    if (d === t) {
                      d = null;
                      break;
                    }
                    if (((a = d.sibling), a !== null)) {
                      ((a.return = d.return), (d = a));
                      break;
                    }
                    d = d.return;
                  }
                a = d;
              }
          (it(e, t, s.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (s = t.type),
          (r = t.pendingProps.children),
          Rr(t, n),
          (s = Rt(s)),
          (r = r(s)),
          (t.flags |= 1),
          it(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (s = Ht(r, t.pendingProps)),
          (s = Ht(r.type, s)),
          Nu(e, t, r, s, n)
        );
      case 15:
        return Pu(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (s = t.pendingProps),
          (s = t.elementType === r ? s : Ht(r, s)),
          Ts(e, t),
          (t.tag = 1),
          dt(r) ? ((e = !0), ps(t)) : (e = !1),
          Rr(t, n),
          yu(t, r, s),
          Ei(t, r, s, n),
          ji(null, t, r, !0, e, n)
        );
      case 19:
        return zu(e, t, n);
      case 22:
        return ju(e, t, n);
    }
    throw Error(l(156, t.tag));
  };
  function sd(e, t) {
    return Ha(e, t);
  }
  function Xm(e, t, n, r) {
    ((this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Lt(e, t, n, r) {
    return new Xm(e, t, n, r);
  }
  function Qi(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function qm(e) {
    if (typeof e == 'function') return Qi(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === be)) return 11;
      if (e === Se) return 14;
    }
    return 2;
  }
  function Fn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Lt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Vs(e, t, n, r, s, a) {
    var d = 2;
    if (((r = e), typeof e == 'function')) Qi(e) && (d = 1);
    else if (typeof e == 'string') d = 5;
    else
      e: switch (e) {
        case Y:
          return ar(n.children, s, a, t);
        case V:
          ((d = 8), (s |= 8));
          break;
        case ve:
          return (
            (e = Lt(12, n, t, s | 2)),
            (e.elementType = ve),
            (e.lanes = a),
            e
          );
        case pe:
          return (
            (e = Lt(13, n, t, s)),
            (e.elementType = pe),
            (e.lanes = a),
            e
          );
        case ge:
          return (
            (e = Lt(19, n, t, s)),
            (e.elementType = ge),
            (e.lanes = a),
            e
          );
        case q:
          return Us(n, s, a, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case ye:
                d = 10;
                break e;
              case Ne:
                d = 9;
                break e;
              case be:
                d = 11;
                break e;
              case Se:
                d = 14;
                break e;
              case Q:
                ((d = 16), (r = null));
                break e;
            }
          throw Error(l(130, e == null ? e : typeof e, ''));
      }
    return (
      (t = Lt(d, n, t, s)),
      (t.elementType = e),
      (t.type = r),
      (t.lanes = a),
      t
    );
  }
  function ar(e, t, n, r) {
    return ((e = Lt(7, e, r, t)), (e.lanes = n), e);
  }
  function Us(e, t, n, r) {
    return (
      (e = Lt(22, e, r, t)),
      (e.elementType = q),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Ki(e, t, n) {
    return ((e = Lt(6, e, null, t)), (e.lanes = n), e);
  }
  function Xi(e, t, n) {
    return (
      (t = Lt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Zm(e, t, n, r, s) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Sl(0)),
      (this.expirationTimes = Sl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Sl(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = s),
      (this.mutableSourceEagerHydrationData = null));
  }
  function qi(e, t, n, r, s, a, d, y, k) {
    return (
      (e = new Zm(e, t, n, y, k)),
      t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
      (a = Lt(3, null, null, t)),
      (e.current = a),
      (a.stateNode = e),
      (a.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      ui(a),
      e
    );
  }
  function Jm(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: le,
      key: r == null ? null : '' + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function ld(e) {
    if (!e) return Tn;
    e = e._reactInternals;
    e: {
      if (Xn(e) !== e || e.tag !== 1) throw Error(l(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (dt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(l(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (dt(n)) return Ac(e, n, t);
    }
    return t;
  }
  function id(e, t, n, r, s, a, d, y, k) {
    return (
      (e = qi(n, r, !0, e, s, a, d, y, k)),
      (e.context = ld(null)),
      (n = e.current),
      (r = at()),
      (s = Hn(n)),
      (a = cn(r, s)),
      (a.callback = t ?? null),
      An(n, a, s),
      (e.current.lanes = s),
      Jr(e, s, r),
      mt(e, r),
      e
    );
  }
  function $s(e, t, n, r) {
    var s = t.current,
      a = at(),
      d = Hn(s);
    return (
      (n = ld(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = cn(a, d)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = An(s, t, d)),
      e !== null && (Bt(e, s, d, a), ks(e, s, d)),
      d
    );
  }
  function Ws(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function ad(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Zi(e, t) {
    (ad(e, t), (e = e.alternate) && ad(e, t));
  }
  function eh() {
    return null;
  }
  var cd =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Ji(e) {
    this._internalRoot = e;
  }
  ((Gs.prototype.render = Ji.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(l(409));
      $s(e, t, null, null);
    }),
    (Gs.prototype.unmount = Ji.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (sr(function () {
            $s(null, e, null, null);
          }),
            (t[rn] = null));
        }
      }));
  function Gs(e) {
    this._internalRoot = e;
  }
  Gs.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Ga();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Nn.length && t !== 0 && t < Nn[n].priority; n++);
      (Nn.splice(n, 0, e), n === 0 && Ka(e));
    }
  };
  function ea(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Ys(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function ud() {}
  function th(e, t, n, r, s) {
    if (s) {
      if (typeof r == 'function') {
        var a = r;
        r = function () {
          var R = Ws(d);
          a.call(R);
        };
      }
      var d = id(t, r, e, 0, null, !1, !1, '', ud);
      return (
        (e._reactRootContainer = d),
        (e[rn] = d.current),
        mo(e.nodeType === 8 ? e.parentNode : e),
        sr(),
        d
      );
    }
    for (; (s = e.lastChild); ) e.removeChild(s);
    if (typeof r == 'function') {
      var y = r;
      r = function () {
        var R = Ws(k);
        y.call(R);
      };
    }
    var k = qi(e, 0, !1, null, null, !1, !1, '', ud);
    return (
      (e._reactRootContainer = k),
      (e[rn] = k.current),
      mo(e.nodeType === 8 ? e.parentNode : e),
      sr(function () {
        $s(t, k, n, r);
      }),
      k
    );
  }
  function Qs(e, t, n, r, s) {
    var a = n._reactRootContainer;
    if (a) {
      var d = a;
      if (typeof s == 'function') {
        var y = s;
        s = function () {
          var k = Ws(d);
          y.call(k);
        };
      }
      $s(t, d, e, s);
    } else d = th(n, t, e, s, r);
    return Ws(d);
  }
  (($a = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Zr(t.pendingLanes);
          n !== 0 &&
            (El(t, n | 1),
            mt(t, De()),
            (Ee & 6) === 0 && ((zr = De() + 500), On()));
        }
        break;
      case 13:
        (sr(function () {
          var r = an(e, 1);
          if (r !== null) {
            var s = at();
            Bt(r, e, 1, s);
          }
        }),
          Zi(e, 1));
    }
  }),
    (Cl = function (e) {
      if (e.tag === 13) {
        var t = an(e, 134217728);
        if (t !== null) {
          var n = at();
          Bt(t, e, 134217728, n);
        }
        Zi(e, 134217728);
      }
    }),
    (Wa = function (e) {
      if (e.tag === 13) {
        var t = Hn(e),
          n = an(e, t);
        if (n !== null) {
          var r = at();
          Bt(n, e, t, r);
        }
        Zi(e, t);
      }
    }),
    (Ga = function () {
      return Pe;
    }),
    (Ya = function (e, t) {
      var n = Pe;
      try {
        return ((Pe = e), t());
      } finally {
        Pe = n;
      }
    }),
    (Kr = function (e, t, n) {
      switch (t) {
        case 'input':
          if ((en(e, n), (t = n.name), n.type === 'radio' && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name=' + JSON.stringify('' + t) + '][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var s = ds(r);
                if (!s) throw Error(l(90));
                (Je(r), en(r, s));
              }
            }
          }
          break;
        case 'textarea':
          Fo(e, n);
          break;
        case 'select':
          ((t = n.value), t != null && gn(e, !!n.multiple, t, !1));
      }
    }),
    (Be = Wi),
    (et = sr));
  var nh = { usingClientEntryPoint: !1, Events: [vo, br, ds, he, Me, Wi] },
    To = {
      findFiberByHostInstance: qn,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    },
    rh = {
      bundleType: To.bundleType,
      version: To.version,
      rendererPackageName: To.rendererPackageName,
      rendererConfig: To.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: G.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = Ma(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: To.findFiberByHostInstance || eh,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Ks = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ks.isDisabled && Ks.supportsFiber)
      try {
        ((Go = Ks.inject(rh)), ($t = Ks));
      } catch {}
  }
  return (
    (ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nh),
    (ht.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ea(t)) throw Error(l(200));
      return Jm(e, t, null, n);
    }),
    (ht.createRoot = function (e, t) {
      if (!ea(e)) throw Error(l(299));
      var n = !1,
        r = '',
        s = cd;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
        (t = qi(e, 1, !1, null, null, n, !1, r, s)),
        (e[rn] = t.current),
        mo(e.nodeType === 8 ? e.parentNode : e),
        new Ji(t)
      );
    }),
    (ht.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == 'function'
          ? Error(l(188))
          : ((e = Object.keys(e).join(',')), Error(l(268, e)));
      return ((e = Ma(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (ht.flushSync = function (e) {
      return sr(e);
    }),
    (ht.hydrate = function (e, t, n) {
      if (!Ys(t)) throw Error(l(200));
      return Qs(null, e, t, !0, n);
    }),
    (ht.hydrateRoot = function (e, t, n) {
      if (!ea(e)) throw Error(l(405));
      var r = (n != null && n.hydratedSources) || null,
        s = !1,
        a = '',
        d = cd;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (s = !0),
          n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (d = n.onRecoverableError)),
        (t = id(t, null, e, 1, n ?? null, s, !1, a, d)),
        (e[rn] = t.current),
        mo(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          ((n = r[e]),
            (s = n._getVersion),
            (s = s(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, s])
              : t.mutableSourceEagerHydrationData.push(n, s));
      return new Gs(t);
    }),
    (ht.render = function (e, t, n) {
      if (!Ys(t)) throw Error(l(200));
      return Qs(null, e, t, !1, n);
    }),
    (ht.unmountComponentAtNode = function (e) {
      if (!Ys(e)) throw Error(l(40));
      return e._reactRootContainer
        ? (sr(function () {
            Qs(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[rn] = null));
            });
          }),
          !0)
        : !1;
    }),
    (ht.unstable_batchedUpdates = Wi),
    (ht.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Ys(n)) throw Error(l(200));
      if (e == null || e._reactInternals === void 0) throw Error(l(38));
      return Qs(e, t, n, !1, r);
    }),
    (ht.version = '18.3.1-next-f1338f8080-20240426'),
    ht
  );
}
var yd;
function nf() {
  if (yd) return ra.exports;
  yd = 1;
  function o() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (i) {
        console.error(i);
      }
  }
  return (o(), (ra.exports = dh()), ra.exports);
}
var xd;
function fh() {
  if (xd) return Xs;
  xd = 1;
  var o = nf();
  return ((Xs.createRoot = o.createRoot), (Xs.hydrateRoot = o.hydrateRoot), Xs);
}
var ph = fh(),
  P = ul();
const U = tf(P),
  rf = sh({ __proto__: null, default: U }, [P]);
var mh = (o, i, l, c, u, f, p, x) => {
    let h = document.documentElement,
      g = ['light', 'dark'];
    function w(_) {
      ((Array.isArray(o) ? o : [o]).forEach((T) => {
        let O = T === 'class',
          L = O && f ? u.map((M) => f[M] || M) : u;
        O
          ? (h.classList.remove(...L), h.classList.add(f && f[_] ? f[_] : _))
          : h.setAttribute(T, _);
      }),
        m(_));
    }
    function m(_) {
      x && g.includes(_) && (h.style.colorScheme = _);
    }
    function E() {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    }
    if (c) w(c);
    else
      try {
        let _ = localStorage.getItem(i) || l,
          T = p && _ === 'system' ? E() : _;
        w(T);
      } catch {}
  },
  hh = P.createContext(void 0),
  gh = { setTheme: (o) => {}, themes: [] },
  vh = () => {
    var o;
    return (o = P.useContext(hh)) != null ? o : gh;
  };
P.memo(
  ({
    forcedTheme: o,
    storageKey: i,
    attribute: l,
    enableSystem: c,
    enableColorScheme: u,
    defaultTheme: f,
    value: p,
    themes: x,
    nonce: h,
    scriptProps: g,
  }) => {
    let w = JSON.stringify([l, i, f, o, x, p, c, u]).slice(1, -1);
    return P.createElement('script', {
      ...g,
      suppressHydrationWarning: !0,
      nonce: typeof window > 'u' ? h : '',
      dangerouslySetInnerHTML: { __html: `(${mh.toString()})(${w})` },
    });
  },
);
var ka = nf();
const yh = tf(ka);
function xh(o) {
  if (typeof document > 'u') return;
  let i = document.head || document.getElementsByTagName('head')[0],
    l = document.createElement('style');
  ((l.type = 'text/css'),
    i.appendChild(l),
    l.styleSheet
      ? (l.styleSheet.cssText = o)
      : l.appendChild(document.createTextNode(o)));
}
const wh = (o) => {
    switch (o) {
      case 'success':
        return Sh;
      case 'info':
        return Ch;
      case 'warning':
        return Eh;
      case 'error':
        return Nh;
      default:
        return null;
    }
  },
  kh = Array(12).fill(0),
  bh = ({ visible: o, className: i }) =>
    U.createElement(
      'div',
      {
        className: ['sonner-loading-wrapper', i].filter(Boolean).join(' '),
        'data-visible': o,
      },
      U.createElement(
        'div',
        { className: 'sonner-spinner' },
        kh.map((l, c) =>
          U.createElement('div', {
            className: 'sonner-loading-bar',
            key: `spinner-bar-${c}`,
          }),
        ),
      ),
    ),
  Sh = U.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 20 20',
      fill: 'currentColor',
      height: '20',
      width: '20',
    },
    U.createElement('path', {
      fillRule: 'evenodd',
      d: 'M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z',
      clipRule: 'evenodd',
    }),
  ),
  Eh = U.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 24 24',
      fill: 'currentColor',
      height: '20',
      width: '20',
    },
    U.createElement('path', {
      fillRule: 'evenodd',
      d: 'M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z',
      clipRule: 'evenodd',
    }),
  ),
  Ch = U.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 20 20',
      fill: 'currentColor',
      height: '20',
      width: '20',
    },
    U.createElement('path', {
      fillRule: 'evenodd',
      d: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z',
      clipRule: 'evenodd',
    }),
  ),
  Nh = U.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 20 20',
      fill: 'currentColor',
      height: '20',
      width: '20',
    },
    U.createElement('path', {
      fillRule: 'evenodd',
      d: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z',
      clipRule: 'evenodd',
    }),
  ),
  Ph = U.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '12',
      height: '12',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '1.5',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    U.createElement('line', { x1: '18', y1: '6', x2: '6', y2: '18' }),
    U.createElement('line', { x1: '6', y1: '6', x2: '18', y2: '18' }),
  ),
  jh = () => {
    const [o, i] = U.useState(document.hidden);
    return (
      U.useEffect(() => {
        const l = () => {
          i(document.hidden);
        };
        return (
          document.addEventListener('visibilitychange', l),
          () => window.removeEventListener('visibilitychange', l)
        );
      }, []),
      o
    );
  };
let ma = 1;
class _h {
  constructor() {
    ((this.subscribe = (i) => (
      this.subscribers.push(i),
      () => {
        const l = this.subscribers.indexOf(i);
        this.subscribers.splice(l, 1);
      }
    )),
      (this.publish = (i) => {
        this.subscribers.forEach((l) => l(i));
      }),
      (this.addToast = (i) => {
        (this.publish(i), (this.toasts = [...this.toasts, i]));
      }),
      (this.create = (i) => {
        var l;
        const { message: c, ...u } = i,
          f =
            typeof i?.id == 'number' ||
            ((l = i.id) == null ? void 0 : l.length) > 0
              ? i.id
              : ma++,
          p = this.toasts.find((h) => h.id === f),
          x = i.dismissible === void 0 ? !0 : i.dismissible;
        return (
          this.dismissedToasts.has(f) && this.dismissedToasts.delete(f),
          p
            ? (this.toasts = this.toasts.map((h) =>
                h.id === f
                  ? (this.publish({ ...h, ...i, id: f, title: c }),
                    { ...h, ...i, id: f, dismissible: x, title: c })
                  : h,
              ))
            : this.addToast({ title: c, ...u, dismissible: x, id: f }),
          f
        );
      }),
      (this.dismiss = (i) => (
        i
          ? (this.dismissedToasts.add(i),
            requestAnimationFrame(() =>
              this.subscribers.forEach((l) => l({ id: i, dismiss: !0 })),
            ))
          : this.toasts.forEach((l) => {
              this.subscribers.forEach((c) => c({ id: l.id, dismiss: !0 }));
            }),
        i
      )),
      (this.message = (i, l) => this.create({ ...l, message: i })),
      (this.error = (i, l) => this.create({ ...l, message: i, type: 'error' })),
      (this.success = (i, l) =>
        this.create({ ...l, type: 'success', message: i })),
      (this.info = (i, l) => this.create({ ...l, type: 'info', message: i })),
      (this.warning = (i, l) =>
        this.create({ ...l, type: 'warning', message: i })),
      (this.loading = (i, l) =>
        this.create({ ...l, type: 'loading', message: i })),
      (this.promise = (i, l) => {
        if (!l) return;
        let c;
        l.loading !== void 0 &&
          (c = this.create({
            ...l,
            promise: i,
            type: 'loading',
            message: l.loading,
            description:
              typeof l.description != 'function' ? l.description : void 0,
          }));
        const u = Promise.resolve(i instanceof Function ? i() : i);
        let f = c !== void 0,
          p;
        const x = u
            .then(async (g) => {
              if (((p = ['resolve', g]), U.isValidElement(g)))
                ((f = !1), this.create({ id: c, type: 'default', message: g }));
              else if (Th(g) && !g.ok) {
                f = !1;
                const m =
                    typeof l.error == 'function'
                      ? await l.error(`HTTP error! status: ${g.status}`)
                      : l.error,
                  E =
                    typeof l.description == 'function'
                      ? await l.description(`HTTP error! status: ${g.status}`)
                      : l.description,
                  T =
                    typeof m == 'object' && !U.isValidElement(m)
                      ? m
                      : { message: m };
                this.create({ id: c, type: 'error', description: E, ...T });
              } else if (g instanceof Error) {
                f = !1;
                const m =
                    typeof l.error == 'function' ? await l.error(g) : l.error,
                  E =
                    typeof l.description == 'function'
                      ? await l.description(g)
                      : l.description,
                  T =
                    typeof m == 'object' && !U.isValidElement(m)
                      ? m
                      : { message: m };
                this.create({ id: c, type: 'error', description: E, ...T });
              } else if (l.success !== void 0) {
                f = !1;
                const m =
                    typeof l.success == 'function'
                      ? await l.success(g)
                      : l.success,
                  E =
                    typeof l.description == 'function'
                      ? await l.description(g)
                      : l.description,
                  T =
                    typeof m == 'object' && !U.isValidElement(m)
                      ? m
                      : { message: m };
                this.create({ id: c, type: 'success', description: E, ...T });
              }
            })
            .catch(async (g) => {
              if (((p = ['reject', g]), l.error !== void 0)) {
                f = !1;
                const w =
                    typeof l.error == 'function' ? await l.error(g) : l.error,
                  m =
                    typeof l.description == 'function'
                      ? await l.description(g)
                      : l.description,
                  _ =
                    typeof w == 'object' && !U.isValidElement(w)
                      ? w
                      : { message: w };
                this.create({ id: c, type: 'error', description: m, ..._ });
              }
            })
            .finally(() => {
              (f && (this.dismiss(c), (c = void 0)),
                l.finally == null || l.finally.call(l));
            }),
          h = () =>
            new Promise((g, w) =>
              x.then(() => (p[0] === 'reject' ? w(p[1]) : g(p[1]))).catch(w),
            );
        return typeof c != 'string' && typeof c != 'number'
          ? { unwrap: h }
          : Object.assign(c, { unwrap: h });
      }),
      (this.custom = (i, l) => {
        const c = l?.id || ma++;
        return (this.create({ jsx: i(c), id: c, ...l }), c);
      }),
      (this.getActiveToasts = () =>
        this.toasts.filter((i) => !this.dismissedToasts.has(i.id))),
      (this.subscribers = []),
      (this.toasts = []),
      (this.dismissedToasts = new Set()));
  }
}
const gt = new _h(),
  Rh = (o, i) => {
    const l = i?.id || ma++;
    return (gt.addToast({ title: o, ...i, id: l }), l);
  },
  Th = (o) =>
    o &&
    typeof o == 'object' &&
    'ok' in o &&
    typeof o.ok == 'boolean' &&
    'status' in o &&
    typeof o.status == 'number',
  Oh = Rh,
  Lh = () => gt.toasts,
  Ah = () => gt.getActiveToasts();
Object.assign(
  Oh,
  {
    success: gt.success,
    info: gt.info,
    warning: gt.warning,
    error: gt.error,
    custom: gt.custom,
    message: gt.message,
    promise: gt.promise,
    dismiss: gt.dismiss,
    loading: gt.loading,
  },
  { getHistory: Lh, getToasts: Ah },
);
xh(
  "[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}",
);
function qs(o) {
  return o.label !== void 0;
}
const zh = 3,
  Mh = '24px',
  Dh = '16px',
  wd = 4e3,
  Hh = 356,
  Ih = 14,
  Fh = 45,
  Bh = 200;
function Kt(...o) {
  return o.filter(Boolean).join(' ');
}
function Vh(o) {
  const [i, l] = o.split('-'),
    c = [];
  return (i && c.push(i), l && c.push(l), c);
}
const Uh = (o) => {
  var i, l, c, u, f, p, x, h, g;
  const {
      invert: w,
      toast: m,
      unstyled: E,
      interacting: _,
      setHeights: T,
      visibleToasts: O,
      heights: L,
      index: M,
      toasts: Z,
      expanded: X,
      removeToast: G,
      defaultRichColors: ee,
      closeButton: le,
      style: Y,
      cancelButtonStyle: V,
      actionButtonStyle: ve,
      className: ye = '',
      descriptionClassName: Ne = '',
      duration: be,
      position: pe,
      gap: ge,
      expandByDefault: Se,
      classNames: Q,
      icons: q,
      closeButtonAriaLabel: C = 'Close toast',
    } = o,
    [$, I] = U.useState(null),
    [S, A] = U.useState(null),
    [F, W] = U.useState(!1),
    [oe, fe] = U.useState(!1),
    [ce, ie] = U.useState(!1),
    [we, _e] = U.useState(!1),
    [lt, Je] = U.useState(!1),
    [At, Wn] = U.useState(0),
    [Io, Wr] = U.useState(0),
    en = U.useRef(m.duration || be || wd),
    Gr = U.useRef(null),
    vt = U.useRef(null),
    Gn = M === 0,
    gn = M + 1 <= O,
    Ke = m.type,
    tn = m.dismissible !== !1,
    Fo = m.className || '',
    Bo = m.descriptionClassName || '',
    Yn = U.useMemo(
      () => L.findIndex((he) => he.toastId === m.id) || 0,
      [L, m.id],
    ),
    Yr = U.useMemo(() => {
      var he;
      return (he = m.closeButton) != null ? he : le;
    }, [m.closeButton, le]),
    Qn = U.useMemo(() => m.duration || be || wd, [m.duration, be]),
    pr = U.useRef(0),
    Ct = U.useRef(0),
    vn = U.useRef(0),
    yn = U.useRef(null),
    [Vo, Uo] = pe.split('-'),
    $o = U.useMemo(
      () => L.reduce((he, Me, Be) => (Be >= Yn ? he : he + Me.height), 0),
      [L, Yn],
    ),
    mr = jh(),
    Qr = m.invert || w,
    Kn = Ke === 'loading';
  ((Ct.current = U.useMemo(() => Yn * ge + $o, [Yn, $o])),
    U.useEffect(() => {
      en.current = Qn;
    }, [Qn]),
    U.useEffect(() => {
      W(!0);
    }, []),
    U.useEffect(() => {
      const he = vt.current;
      if (he) {
        const Me = he.getBoundingClientRect().height;
        return (
          Wr(Me),
          T((Be) => [
            { toastId: m.id, height: Me, position: m.position },
            ...Be,
          ]),
          () => T((Be) => Be.filter((et) => et.toastId !== m.id))
        );
      }
    }, [T, m.id]),
    U.useLayoutEffect(() => {
      if (!F) return;
      const he = vt.current,
        Me = he.style.height;
      he.style.height = 'auto';
      const Be = he.getBoundingClientRect().height;
      ((he.style.height = Me),
        Wr(Be),
        T((et) =>
          et.find((Ie) => Ie.toastId === m.id)
            ? et.map((Ie) => (Ie.toastId === m.id ? { ...Ie, height: Be } : Ie))
            : [{ toastId: m.id, height: Be, position: m.position }, ...et],
        ));
    }, [F, m.title, m.description, T, m.id, m.jsx, m.action, m.cancel]));
  const Nt = U.useCallback(() => {
    (fe(!0),
      Wn(Ct.current),
      T((he) => he.filter((Me) => Me.toastId !== m.id)),
      setTimeout(() => {
        G(m);
      }, Bh));
  }, [m, G, T, Ct]);
  (U.useEffect(() => {
    if (
      (m.promise && Ke === 'loading') ||
      m.duration === 1 / 0 ||
      m.type === 'loading'
    )
      return;
    let he;
    return (
      X || _ || mr
        ? (() => {
            if (vn.current < pr.current) {
              const et = new Date().getTime() - pr.current;
              en.current = en.current - et;
            }
            vn.current = new Date().getTime();
          })()
        : (() => {
            en.current !== 1 / 0 &&
              ((pr.current = new Date().getTime()),
              (he = setTimeout(() => {
                (m.onAutoClose == null || m.onAutoClose.call(m, m), Nt());
              }, en.current)));
          })(),
      () => clearTimeout(he)
    );
  }, [X, _, m, Ke, mr, Nt]),
    U.useEffect(() => {
      m.delete && (Nt(), m.onDismiss == null || m.onDismiss.call(m, m));
    }, [Nt, m.delete]));
  function Kr() {
    var he;
    if (q?.loading) {
      var Me;
      return U.createElement(
        'div',
        {
          className: Kt(
            Q?.loader,
            m == null || (Me = m.classNames) == null ? void 0 : Me.loader,
            'sonner-loader',
          ),
          'data-visible': Ke === 'loading',
        },
        q.loading,
      );
    }
    return U.createElement(bh, {
      className: Kt(
        Q?.loader,
        m == null || (he = m.classNames) == null ? void 0 : he.loader,
      ),
      visible: Ke === 'loading',
    });
  }
  const xn = m.icon || q?.[Ke] || wh(Ke);
  var nn, Xr;
  return U.createElement(
    'li',
    {
      tabIndex: 0,
      ref: vt,
      className: Kt(
        ye,
        Fo,
        Q?.toast,
        m == null || (i = m.classNames) == null ? void 0 : i.toast,
        Q?.default,
        Q?.[Ke],
        m == null || (l = m.classNames) == null ? void 0 : l[Ke],
      ),
      'data-sonner-toast': '',
      'data-rich-colors': (nn = m.richColors) != null ? nn : ee,
      'data-styled': !(m.jsx || m.unstyled || E),
      'data-mounted': F,
      'data-promise': !!m.promise,
      'data-swiped': lt,
      'data-removed': oe,
      'data-visible': gn,
      'data-y-position': Vo,
      'data-x-position': Uo,
      'data-index': M,
      'data-front': Gn,
      'data-swiping': ce,
      'data-dismissible': tn,
      'data-type': Ke,
      'data-invert': Qr,
      'data-swipe-out': we,
      'data-swipe-direction': S,
      'data-expanded': !!(X || (Se && F)),
      'data-testid': m.testId,
      style: {
        '--index': M,
        '--toasts-before': M,
        '--z-index': Z.length - M,
        '--offset': `${oe ? At : Ct.current}px`,
        '--initial-height': Se ? 'auto' : `${Io}px`,
        ...Y,
        ...m.style,
      },
      onDragEnd: () => {
        (ie(!1), I(null), (yn.current = null));
      },
      onPointerDown: (he) => {
        he.button !== 2 &&
          (Kn ||
            !tn ||
            ((Gr.current = new Date()),
            Wn(Ct.current),
            he.target.setPointerCapture(he.pointerId),
            he.target.tagName !== 'BUTTON' &&
              (ie(!0), (yn.current = { x: he.clientX, y: he.clientY }))));
      },
      onPointerUp: () => {
        var he, Me, Be;
        if (we || !tn) return;
        yn.current = null;
        const et = Number(
            ((he = vt.current) == null
              ? void 0
              : he.style
                  .getPropertyValue('--swipe-amount-x')
                  .replace('px', '')) || 0,
          ),
          wn = Number(
            ((Me = vt.current) == null
              ? void 0
              : Me.style
                  .getPropertyValue('--swipe-amount-y')
                  .replace('px', '')) || 0,
          ),
          Ie =
            new Date().getTime() -
            ((Be = Gr.current) == null ? void 0 : Be.getTime()),
          We = $ === 'x' ? et : wn,
          kn = Math.abs(We) / Ie;
        if (Math.abs(We) >= Fh || kn > 0.11) {
          (Wn(Ct.current),
            m.onDismiss == null || m.onDismiss.call(m, m),
            A($ === 'x' ? (et > 0 ? 'right' : 'left') : wn > 0 ? 'down' : 'up'),
            Nt(),
            _e(!0));
          return;
        } else {
          var Xe, yt;
          ((Xe = vt.current) == null ||
            Xe.style.setProperty('--swipe-amount-x', '0px'),
            (yt = vt.current) == null ||
              yt.style.setProperty('--swipe-amount-y', '0px'));
        }
        (Je(!1), ie(!1), I(null));
      },
      onPointerMove: (he) => {
        var Me, Be, et;
        if (
          !yn.current ||
          !tn ||
          ((Me = window.getSelection()) == null
            ? void 0
            : Me.toString().length) > 0
        )
          return;
        const Ie = he.clientY - yn.current.y,
          We = he.clientX - yn.current.x;
        var kn;
        const Xe = (kn = o.swipeDirections) != null ? kn : Vh(pe);
        !$ &&
          (Math.abs(We) > 1 || Math.abs(Ie) > 1) &&
          I(Math.abs(We) > Math.abs(Ie) ? 'x' : 'y');
        let yt = { x: 0, y: 0 };
        const bn = (Pt) => 1 / (1.5 + Math.abs(Pt) / 20);
        if ($ === 'y') {
          if (Xe.includes('top') || Xe.includes('bottom'))
            if (
              (Xe.includes('top') && Ie < 0) ||
              (Xe.includes('bottom') && Ie > 0)
            )
              yt.y = Ie;
            else {
              const Pt = Ie * bn(Ie);
              yt.y = Math.abs(Pt) < Math.abs(Ie) ? Pt : Ie;
            }
        } else if ($ === 'x' && (Xe.includes('left') || Xe.includes('right')))
          if (
            (Xe.includes('left') && We < 0) ||
            (Xe.includes('right') && We > 0)
          )
            yt.x = We;
          else {
            const Pt = We * bn(We);
            yt.x = Math.abs(Pt) < Math.abs(We) ? Pt : We;
          }
        ((Math.abs(yt.x) > 0 || Math.abs(yt.y) > 0) && Je(!0),
          (Be = vt.current) == null ||
            Be.style.setProperty('--swipe-amount-x', `${yt.x}px`),
          (et = vt.current) == null ||
            et.style.setProperty('--swipe-amount-y', `${yt.y}px`));
      },
    },
    Yr && !m.jsx && Ke !== 'loading'
      ? U.createElement(
          'button',
          {
            'aria-label': C,
            'data-disabled': Kn,
            'data-close-button': !0,
            onClick:
              Kn || !tn
                ? () => {}
                : () => {
                    (Nt(), m.onDismiss == null || m.onDismiss.call(m, m));
                  },
            className: Kt(
              Q?.closeButton,
              m == null || (c = m.classNames) == null ? void 0 : c.closeButton,
            ),
          },
          (Xr = q?.close) != null ? Xr : Ph,
        )
      : null,
    (Ke || m.icon || m.promise) &&
      m.icon !== null &&
      (q?.[Ke] !== null || m.icon)
      ? U.createElement(
          'div',
          {
            'data-icon': '',
            className: Kt(
              Q?.icon,
              m == null || (u = m.classNames) == null ? void 0 : u.icon,
            ),
          },
          m.promise || (m.type === 'loading' && !m.icon)
            ? m.icon || Kr()
            : null,
          m.type !== 'loading' ? xn : null,
        )
      : null,
    U.createElement(
      'div',
      {
        'data-content': '',
        className: Kt(
          Q?.content,
          m == null || (f = m.classNames) == null ? void 0 : f.content,
        ),
      },
      U.createElement(
        'div',
        {
          'data-title': '',
          className: Kt(
            Q?.title,
            m == null || (p = m.classNames) == null ? void 0 : p.title,
          ),
        },
        m.jsx ? m.jsx : typeof m.title == 'function' ? m.title() : m.title,
      ),
      m.description
        ? U.createElement(
            'div',
            {
              'data-description': '',
              className: Kt(
                Ne,
                Bo,
                Q?.description,
                m == null || (x = m.classNames) == null
                  ? void 0
                  : x.description,
              ),
            },
            typeof m.description == 'function'
              ? m.description()
              : m.description,
          )
        : null,
    ),
    U.isValidElement(m.cancel)
      ? m.cancel
      : m.cancel && qs(m.cancel)
        ? U.createElement(
            'button',
            {
              'data-button': !0,
              'data-cancel': !0,
              style: m.cancelButtonStyle || V,
              onClick: (he) => {
                qs(m.cancel) &&
                  tn &&
                  (m.cancel.onClick == null ||
                    m.cancel.onClick.call(m.cancel, he),
                  Nt());
              },
              className: Kt(
                Q?.cancelButton,
                m == null || (h = m.classNames) == null
                  ? void 0
                  : h.cancelButton,
              ),
            },
            m.cancel.label,
          )
        : null,
    U.isValidElement(m.action)
      ? m.action
      : m.action && qs(m.action)
        ? U.createElement(
            'button',
            {
              'data-button': !0,
              'data-action': !0,
              style: m.actionButtonStyle || ve,
              onClick: (he) => {
                qs(m.action) &&
                  (m.action.onClick == null ||
                    m.action.onClick.call(m.action, he),
                  !he.defaultPrevented && Nt());
              },
              className: Kt(
                Q?.actionButton,
                m == null || (g = m.classNames) == null
                  ? void 0
                  : g.actionButton,
              ),
            },
            m.action.label,
          )
        : null,
  );
};
function kd() {
  if (typeof window > 'u' || typeof document > 'u') return 'ltr';
  const o = document.documentElement.getAttribute('dir');
  return o === 'auto' || !o
    ? window.getComputedStyle(document.documentElement).direction
    : o;
}
function $h(o, i) {
  const l = {};
  return (
    [o, i].forEach((c, u) => {
      const f = u === 1,
        p = f ? '--mobile-offset' : '--offset',
        x = f ? Dh : Mh;
      function h(g) {
        ['top', 'right', 'bottom', 'left'].forEach((w) => {
          l[`${p}-${w}`] = typeof g == 'number' ? `${g}px` : g;
        });
      }
      typeof c == 'number' || typeof c == 'string'
        ? h(c)
        : typeof c == 'object'
          ? ['top', 'right', 'bottom', 'left'].forEach((g) => {
              c[g] === void 0
                ? (l[`${p}-${g}`] = x)
                : (l[`${p}-${g}`] =
                    typeof c[g] == 'number' ? `${c[g]}px` : c[g]);
            })
          : h(x);
    }),
    l
  );
}
const Wh = U.forwardRef(function (i, l) {
    const {
        id: c,
        invert: u,
        position: f = 'bottom-right',
        hotkey: p = ['altKey', 'KeyT'],
        expand: x,
        closeButton: h,
        className: g,
        offset: w,
        mobileOffset: m,
        theme: E = 'light',
        richColors: _,
        duration: T,
        style: O,
        visibleToasts: L = zh,
        toastOptions: M,
        dir: Z = kd(),
        gap: X = Ih,
        icons: G,
        containerAriaLabel: ee = 'Notifications',
      } = i,
      [le, Y] = U.useState([]),
      V = U.useMemo(
        () =>
          c
            ? le.filter((F) => F.toasterId === c)
            : le.filter((F) => !F.toasterId),
        [le, c],
      ),
      ve = U.useMemo(
        () =>
          Array.from(
            new Set(
              [f].concat(V.filter((F) => F.position).map((F) => F.position)),
            ),
          ),
        [V, f],
      ),
      [ye, Ne] = U.useState([]),
      [be, pe] = U.useState(!1),
      [ge, Se] = U.useState(!1),
      [Q, q] = U.useState(
        E !== 'system'
          ? E
          : typeof window < 'u' &&
              window.matchMedia &&
              window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light',
      ),
      C = U.useRef(null),
      $ = p.join('+').replace(/Key/g, '').replace(/Digit/g, ''),
      I = U.useRef(null),
      S = U.useRef(!1),
      A = U.useCallback((F) => {
        Y((W) => {
          var oe;
          return (
            ((oe = W.find((fe) => fe.id === F.id)) != null && oe.delete) ||
              gt.dismiss(F.id),
            W.filter(({ id: fe }) => fe !== F.id)
          );
        });
      }, []);
    return (
      U.useEffect(
        () =>
          gt.subscribe((F) => {
            if (F.dismiss) {
              requestAnimationFrame(() => {
                Y((W) =>
                  W.map((oe) => (oe.id === F.id ? { ...oe, delete: !0 } : oe)),
                );
              });
              return;
            }
            setTimeout(() => {
              yh.flushSync(() => {
                Y((W) => {
                  const oe = W.findIndex((fe) => fe.id === F.id);
                  return oe !== -1
                    ? [
                        ...W.slice(0, oe),
                        { ...W[oe], ...F },
                        ...W.slice(oe + 1),
                      ]
                    : [F, ...W];
                });
              });
            });
          }),
        [le],
      ),
      U.useEffect(() => {
        if (E !== 'system') {
          q(E);
          return;
        }
        if (
          (E === 'system' &&
            (window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches
              ? q('dark')
              : q('light')),
          typeof window > 'u')
        )
          return;
        const F = window.matchMedia('(prefers-color-scheme: dark)');
        try {
          F.addEventListener('change', ({ matches: W }) => {
            q(W ? 'dark' : 'light');
          });
        } catch {
          F.addListener(({ matches: oe }) => {
            try {
              q(oe ? 'dark' : 'light');
            } catch (fe) {
              console.error(fe);
            }
          });
        }
      }, [E]),
      U.useEffect(() => {
        le.length <= 1 && pe(!1);
      }, [le]),
      U.useEffect(() => {
        const F = (W) => {
          var oe;
          if (p.every((ie) => W[ie] || W.code === ie)) {
            var ce;
            (pe(!0), (ce = C.current) == null || ce.focus());
          }
          W.code === 'Escape' &&
            (document.activeElement === C.current ||
              ((oe = C.current) != null &&
                oe.contains(document.activeElement))) &&
            pe(!1);
        };
        return (
          document.addEventListener('keydown', F),
          () => document.removeEventListener('keydown', F)
        );
      }, [p]),
      U.useEffect(() => {
        if (C.current)
          return () => {
            I.current &&
              (I.current.focus({ preventScroll: !0 }),
              (I.current = null),
              (S.current = !1));
          };
      }, [C.current]),
      U.createElement(
        'section',
        {
          ref: l,
          'aria-label': `${ee} ${$}`,
          tabIndex: -1,
          'aria-live': 'polite',
          'aria-relevant': 'additions text',
          'aria-atomic': 'false',
          suppressHydrationWarning: !0,
        },
        ve.map((F, W) => {
          var oe;
          const [fe, ce] = F.split('-');
          return V.length
            ? U.createElement(
                'ol',
                {
                  key: F,
                  dir: Z === 'auto' ? kd() : Z,
                  tabIndex: -1,
                  ref: C,
                  className: g,
                  'data-sonner-toaster': !0,
                  'data-sonner-theme': Q,
                  'data-y-position': fe,
                  'data-x-position': ce,
                  style: {
                    '--front-toast-height': `${((oe = ye[0]) == null ? void 0 : oe.height) || 0}px`,
                    '--width': `${Hh}px`,
                    '--gap': `${X}px`,
                    ...O,
                    ...$h(w, m),
                  },
                  onBlur: (ie) => {
                    S.current &&
                      !ie.currentTarget.contains(ie.relatedTarget) &&
                      ((S.current = !1),
                      I.current &&
                        (I.current.focus({ preventScroll: !0 }),
                        (I.current = null)));
                  },
                  onFocus: (ie) => {
                    (ie.target instanceof HTMLElement &&
                      ie.target.dataset.dismissible === 'false') ||
                      S.current ||
                      ((S.current = !0), (I.current = ie.relatedTarget));
                  },
                  onMouseEnter: () => pe(!0),
                  onMouseMove: () => pe(!0),
                  onMouseLeave: () => {
                    ge || pe(!1);
                  },
                  onDragEnd: () => pe(!1),
                  onPointerDown: (ie) => {
                    (ie.target instanceof HTMLElement &&
                      ie.target.dataset.dismissible === 'false') ||
                      Se(!0);
                  },
                  onPointerUp: () => Se(!1),
                },
                V.filter(
                  (ie) => (!ie.position && W === 0) || ie.position === F,
                ).map((ie, we) => {
                  var _e, lt;
                  return U.createElement(Uh, {
                    key: ie.id,
                    icons: G,
                    index: we,
                    toast: ie,
                    defaultRichColors: _,
                    duration: (_e = M?.duration) != null ? _e : T,
                    className: M?.className,
                    descriptionClassName: M?.descriptionClassName,
                    invert: u,
                    visibleToasts: L,
                    closeButton: (lt = M?.closeButton) != null ? lt : h,
                    interacting: ge,
                    position: F,
                    style: M?.style,
                    unstyled: M?.unstyled,
                    classNames: M?.classNames,
                    cancelButtonStyle: M?.cancelButtonStyle,
                    actionButtonStyle: M?.actionButtonStyle,
                    closeButtonAriaLabel: M?.closeButtonAriaLabel,
                    removeToast: A,
                    toasts: V.filter((Je) => Je.position == ie.position),
                    heights: ye.filter((Je) => Je.position == ie.position),
                    setHeights: Ne,
                    expandByDefault: x,
                    gap: X,
                    expanded: be,
                    swipeDirections: i.swipeDirections,
                  });
                }),
              )
            : null;
        }),
      )
    );
  }),
  Gh = ({ ...o }) => {
    const { theme: i = 'system' } = vh();
    return v.jsx(Wh, {
      'data-loc': 'client\\src\\components\\ui\\sonner.tsx:8',
      theme: i,
      className: 'toaster group',
      style: {
        '--normal-bg': 'var(--popover)',
        '--normal-text': 'var(--popover-foreground)',
        '--normal-border': 'var(--border)',
      },
      ...o,
    });
  };
function pn(o, i, { checkForDefaultPrevented: l = !0 } = {}) {
  return function (u) {
    if ((o?.(u), l === !1 || !u.defaultPrevented)) return i?.(u);
  };
}
function bd(o, i) {
  if (typeof o == 'function') return o(i);
  o != null && (o.current = i);
}
function ba(...o) {
  return (i) => {
    let l = !1;
    const c = o.map((u) => {
      const f = bd(u, i);
      return (!l && typeof f == 'function' && (l = !0), f);
    });
    if (l)
      return () => {
        for (let u = 0; u < c.length; u++) {
          const f = c[u];
          typeof f == 'function' ? f() : bd(o[u], null);
        }
      };
  };
}
function dr(...o) {
  return P.useCallback(ba(...o), o);
}
function of(o, i = []) {
  let l = [];
  function c(f, p) {
    const x = P.createContext(p),
      h = l.length;
    l = [...l, p];
    const g = (m) => {
      const { scope: E, children: _, ...T } = m,
        O = E?.[o]?.[h] || x,
        L = P.useMemo(() => T, Object.values(T));
      return v.jsx(O.Provider, { value: L, children: _ });
    };
    g.displayName = f + 'Provider';
    function w(m, E) {
      const _ = E?.[o]?.[h] || x,
        T = P.useContext(_);
      if (T) return T;
      if (p !== void 0) return p;
      throw new Error(`\`${m}\` must be used within \`${f}\``);
    }
    return [g, w];
  }
  const u = () => {
    const f = l.map((p) => P.createContext(p));
    return function (x) {
      const h = x?.[o] || f;
      return P.useMemo(() => ({ [`__scope${o}`]: { ...x, [o]: h } }), [x, h]);
    };
  };
  return ((u.scopeName = o), [c, Yh(u, ...i)]);
}
function Yh(...o) {
  const i = o[0];
  if (o.length === 1) return i;
  const l = () => {
    const c = o.map((u) => ({ useScope: u(), scopeName: u.scopeName }));
    return function (f) {
      const p = c.reduce((x, { useScope: h, scopeName: g }) => {
        const m = h(f)[`__scope${g}`];
        return { ...x, ...m };
      }, {});
      return P.useMemo(() => ({ [`__scope${i.scopeName}`]: p }), [p]);
    };
  };
  return ((l.scopeName = i.scopeName), l);
}
function Qh(o) {
  const i = Kh(o),
    l = P.forwardRef((c, u) => {
      const { children: f, ...p } = c,
        x = P.Children.toArray(f),
        h = x.find(qh);
      if (h) {
        const g = h.props.children,
          w = x.map((m) =>
            m === h
              ? P.Children.count(g) > 1
                ? P.Children.only(null)
                : P.isValidElement(g)
                  ? g.props.children
                  : null
              : m,
          );
        return v.jsx(i, {
          ...p,
          ref: u,
          children: P.isValidElement(g) ? P.cloneElement(g, void 0, w) : null,
        });
      }
      return v.jsx(i, { ...p, ref: u, children: f });
    });
  return ((l.displayName = `${o}.Slot`), l);
}
function Kh(o) {
  const i = P.forwardRef((l, c) => {
    const { children: u, ...f } = l;
    if (P.isValidElement(u)) {
      const p = Jh(u),
        x = Zh(f, u.props);
      return (
        u.type !== P.Fragment && (x.ref = c ? ba(c, p) : p),
        P.cloneElement(u, x)
      );
    }
    return P.Children.count(u) > 1 ? P.Children.only(null) : null;
  });
  return ((i.displayName = `${o}.SlotClone`), i);
}
var Xh = Symbol('radix.slottable');
function qh(o) {
  return (
    P.isValidElement(o) &&
    typeof o.type == 'function' &&
    '__radixId' in o.type &&
    o.type.__radixId === Xh
  );
}
function Zh(o, i) {
  const l = { ...i };
  for (const c in i) {
    const u = o[c],
      f = i[c];
    /^on[A-Z]/.test(c)
      ? u && f
        ? (l[c] = (...x) => {
            const h = f(...x);
            return (u(...x), h);
          })
        : u && (l[c] = u)
      : c === 'style'
        ? (l[c] = { ...u, ...f })
        : c === 'className' && (l[c] = [u, f].filter(Boolean).join(' '));
  }
  return { ...o, ...l };
}
function Jh(o) {
  let i = Object.getOwnPropertyDescriptor(o.props, 'ref')?.get,
    l = i && 'isReactWarning' in i && i.isReactWarning;
  return l
    ? o.ref
    : ((i = Object.getOwnPropertyDescriptor(o, 'ref')?.get),
      (l = i && 'isReactWarning' in i && i.isReactWarning),
      l ? o.props.ref : o.props.ref || o.ref);
}
var eg = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'select',
    'span',
    'svg',
    'ul',
  ],
  fr = eg.reduce((o, i) => {
    const l = Qh(`Primitive.${i}`),
      c = P.forwardRef((u, f) => {
        const { asChild: p, ...x } = u,
          h = p ? l : i;
        return (
          typeof window < 'u' && (window[Symbol.for('radix-ui')] = !0),
          v.jsx(h, { ...x, ref: f })
        );
      });
    return ((c.displayName = `Primitive.${i}`), { ...o, [i]: c });
  }, {});
function tg(o, i) {
  o && ka.flushSync(() => o.dispatchEvent(i));
}
function dl(o) {
  const i = P.useRef(o);
  return (
    P.useEffect(() => {
      i.current = o;
    }),
    P.useMemo(
      () =>
        (...l) =>
          i.current?.(...l),
      [],
    )
  );
}
function ng(o, i = globalThis?.document) {
  const l = dl(o);
  P.useEffect(() => {
    const c = (u) => {
      u.key === 'Escape' && l(u);
    };
    return (
      i.addEventListener('keydown', c, { capture: !0 }),
      () => i.removeEventListener('keydown', c, { capture: !0 })
    );
  }, [l, i]);
}
var rg = 'DismissableLayer',
  ha = 'dismissableLayer.update',
  og = 'dismissableLayer.pointerDownOutside',
  sg = 'dismissableLayer.focusOutside',
  Sd,
  sf = P.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  lf = P.forwardRef((o, i) => {
    const {
        disableOutsidePointerEvents: l = !1,
        onEscapeKeyDown: c,
        onPointerDownOutside: u,
        onFocusOutside: f,
        onInteractOutside: p,
        onDismiss: x,
        ...h
      } = o,
      g = P.useContext(sf),
      [w, m] = P.useState(null),
      E = w?.ownerDocument ?? globalThis?.document,
      [, _] = P.useState({}),
      T = dr(i, (Y) => m(Y)),
      O = Array.from(g.layers),
      [L] = [...g.layersWithOutsidePointerEventsDisabled].slice(-1),
      M = O.indexOf(L),
      Z = w ? O.indexOf(w) : -1,
      X = g.layersWithOutsidePointerEventsDisabled.size > 0,
      G = Z >= M,
      ee = ag((Y) => {
        const V = Y.target,
          ve = [...g.branches].some((ye) => ye.contains(V));
        !G || ve || (u?.(Y), p?.(Y), Y.defaultPrevented || x?.());
      }, E),
      le = cg((Y) => {
        const V = Y.target;
        [...g.branches].some((ye) => ye.contains(V)) ||
          (f?.(Y), p?.(Y), Y.defaultPrevented || x?.());
      }, E);
    return (
      ng((Y) => {
        Z === g.layers.size - 1 &&
          (c?.(Y), !Y.defaultPrevented && x && (Y.preventDefault(), x()));
      }, E),
      P.useEffect(() => {
        if (w)
          return (
            l &&
              (g.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Sd = E.body.style.pointerEvents),
                (E.body.style.pointerEvents = 'none')),
              g.layersWithOutsidePointerEventsDisabled.add(w)),
            g.layers.add(w),
            Ed(),
            () => {
              l &&
                g.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (E.body.style.pointerEvents = Sd);
            }
          );
      }, [w, E, l, g]),
      P.useEffect(
        () => () => {
          w &&
            (g.layers.delete(w),
            g.layersWithOutsidePointerEventsDisabled.delete(w),
            Ed());
        },
        [w, g],
      ),
      P.useEffect(() => {
        const Y = () => _({});
        return (
          document.addEventListener(ha, Y),
          () => document.removeEventListener(ha, Y)
        );
      }, []),
      v.jsx(fr.div, {
        ...h,
        ref: T,
        style: {
          pointerEvents: X ? (G ? 'auto' : 'none') : void 0,
          ...o.style,
        },
        onFocusCapture: pn(o.onFocusCapture, le.onFocusCapture),
        onBlurCapture: pn(o.onBlurCapture, le.onBlurCapture),
        onPointerDownCapture: pn(
          o.onPointerDownCapture,
          ee.onPointerDownCapture,
        ),
      })
    );
  });
lf.displayName = rg;
var lg = 'DismissableLayerBranch',
  ig = P.forwardRef((o, i) => {
    const l = P.useContext(sf),
      c = P.useRef(null),
      u = dr(i, c);
    return (
      P.useEffect(() => {
        const f = c.current;
        if (f)
          return (
            l.branches.add(f),
            () => {
              l.branches.delete(f);
            }
          );
      }, [l.branches]),
      v.jsx(fr.div, { ...o, ref: u })
    );
  });
ig.displayName = lg;
function ag(o, i = globalThis?.document) {
  const l = dl(o),
    c = P.useRef(!1),
    u = P.useRef(() => {});
  return (
    P.useEffect(() => {
      const f = (x) => {
          if (x.target && !c.current) {
            let h = function () {
              af(og, l, g, { discrete: !0 });
            };
            const g = { originalEvent: x };
            x.pointerType === 'touch'
              ? (i.removeEventListener('click', u.current),
                (u.current = h),
                i.addEventListener('click', u.current, { once: !0 }))
              : h();
          } else i.removeEventListener('click', u.current);
          c.current = !1;
        },
        p = window.setTimeout(() => {
          i.addEventListener('pointerdown', f);
        }, 0);
      return () => {
        (window.clearTimeout(p),
          i.removeEventListener('pointerdown', f),
          i.removeEventListener('click', u.current));
      };
    }, [i, l]),
    { onPointerDownCapture: () => (c.current = !0) }
  );
}
function cg(o, i = globalThis?.document) {
  const l = dl(o),
    c = P.useRef(!1);
  return (
    P.useEffect(() => {
      const u = (f) => {
        f.target &&
          !c.current &&
          af(sg, l, { originalEvent: f }, { discrete: !1 });
      };
      return (
        i.addEventListener('focusin', u),
        () => i.removeEventListener('focusin', u)
      );
    }, [i, l]),
    {
      onFocusCapture: () => (c.current = !0),
      onBlurCapture: () => (c.current = !1),
    }
  );
}
function Ed() {
  const o = new CustomEvent(ha);
  document.dispatchEvent(o);
}
function af(o, i, l, { discrete: c }) {
  const u = l.originalEvent.target,
    f = new CustomEvent(o, { bubbles: !1, cancelable: !0, detail: l });
  (i && u.addEventListener(o, i, { once: !0 }),
    c ? tg(u, f) : u.dispatchEvent(f));
}
var Ao = globalThis?.document ? P.useLayoutEffect : () => {};
const ug = ['top', 'right', 'bottom', 'left'],
  Un = Math.min,
  St = Math.max,
  ol = Math.round,
  Zs = Math.floor,
  qt = (o) => ({ x: o, y: o }),
  dg = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
  fg = { start: 'end', end: 'start' };
function ga(o, i, l) {
  return St(o, Un(i, l));
}
function mn(o, i) {
  return typeof o == 'function' ? o(i) : o;
}
function hn(o) {
  return o.split('-')[0];
}
function Br(o) {
  return o.split('-')[1];
}
function Sa(o) {
  return o === 'x' ? 'y' : 'x';
}
function Ea(o) {
  return o === 'y' ? 'height' : 'width';
}
const pg = new Set(['top', 'bottom']);
function Xt(o) {
  return pg.has(hn(o)) ? 'y' : 'x';
}
function Ca(o) {
  return Sa(Xt(o));
}
function mg(o, i, l) {
  l === void 0 && (l = !1);
  const c = Br(o),
    u = Ca(o),
    f = Ea(u);
  let p =
    u === 'x'
      ? c === (l ? 'end' : 'start')
        ? 'right'
        : 'left'
      : c === 'start'
        ? 'bottom'
        : 'top';
  return (i.reference[f] > i.floating[f] && (p = sl(p)), [p, sl(p)]);
}
function hg(o) {
  const i = sl(o);
  return [va(o), i, va(i)];
}
function va(o) {
  return o.replace(/start|end/g, (i) => fg[i]);
}
const Cd = ['left', 'right'],
  Nd = ['right', 'left'],
  gg = ['top', 'bottom'],
  vg = ['bottom', 'top'];
function yg(o, i, l) {
  switch (o) {
    case 'top':
    case 'bottom':
      return l ? (i ? Nd : Cd) : i ? Cd : Nd;
    case 'left':
    case 'right':
      return i ? gg : vg;
    default:
      return [];
  }
}
function xg(o, i, l, c) {
  const u = Br(o);
  let f = yg(hn(o), l === 'start', c);
  return (
    u && ((f = f.map((p) => p + '-' + u)), i && (f = f.concat(f.map(va)))),
    f
  );
}
function sl(o) {
  return o.replace(/left|right|bottom|top/g, (i) => dg[i]);
}
function wg(o) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...o };
}
function cf(o) {
  return typeof o != 'number'
    ? wg(o)
    : { top: o, right: o, bottom: o, left: o };
}
function ll(o) {
  const { x: i, y: l, width: c, height: u } = o;
  return {
    width: c,
    height: u,
    top: l,
    left: i,
    right: i + c,
    bottom: l + u,
    x: i,
    y: l,
  };
}
function Pd(o, i, l) {
  let { reference: c, floating: u } = o;
  const f = Xt(i),
    p = Ca(i),
    x = Ea(p),
    h = hn(i),
    g = f === 'y',
    w = c.x + c.width / 2 - u.width / 2,
    m = c.y + c.height / 2 - u.height / 2,
    E = c[x] / 2 - u[x] / 2;
  let _;
  switch (h) {
    case 'top':
      _ = { x: w, y: c.y - u.height };
      break;
    case 'bottom':
      _ = { x: w, y: c.y + c.height };
      break;
    case 'right':
      _ = { x: c.x + c.width, y: m };
      break;
    case 'left':
      _ = { x: c.x - u.width, y: m };
      break;
    default:
      _ = { x: c.x, y: c.y };
  }
  switch (Br(i)) {
    case 'start':
      _[p] -= E * (l && g ? -1 : 1);
      break;
    case 'end':
      _[p] += E * (l && g ? -1 : 1);
      break;
  }
  return _;
}
const kg = async (o, i, l) => {
  const {
      placement: c = 'bottom',
      strategy: u = 'absolute',
      middleware: f = [],
      platform: p,
    } = l,
    x = f.filter(Boolean),
    h = await (p.isRTL == null ? void 0 : p.isRTL(i));
  let g = await p.getElementRects({ reference: o, floating: i, strategy: u }),
    { x: w, y: m } = Pd(g, c, h),
    E = c,
    _ = {},
    T = 0;
  for (let O = 0; O < x.length; O++) {
    const { name: L, fn: M } = x[O],
      {
        x: Z,
        y: X,
        data: G,
        reset: ee,
      } = await M({
        x: w,
        y: m,
        initialPlacement: c,
        placement: E,
        strategy: u,
        middlewareData: _,
        rects: g,
        platform: p,
        elements: { reference: o, floating: i },
      });
    ((w = Z ?? w),
      (m = X ?? m),
      (_ = { ..._, [L]: { ..._[L], ...G } }),
      ee &&
        T <= 50 &&
        (T++,
        typeof ee == 'object' &&
          (ee.placement && (E = ee.placement),
          ee.rects &&
            (g =
              ee.rects === !0
                ? await p.getElementRects({
                    reference: o,
                    floating: i,
                    strategy: u,
                  })
                : ee.rects),
          ({ x: w, y: m } = Pd(g, E, h))),
        (O = -1)));
  }
  return { x: w, y: m, placement: E, strategy: u, middlewareData: _ };
};
async function zo(o, i) {
  var l;
  i === void 0 && (i = {});
  const { x: c, y: u, platform: f, rects: p, elements: x, strategy: h } = o,
    {
      boundary: g = 'clippingAncestors',
      rootBoundary: w = 'viewport',
      elementContext: m = 'floating',
      altBoundary: E = !1,
      padding: _ = 0,
    } = mn(i, o),
    T = cf(_),
    L = x[E ? (m === 'floating' ? 'reference' : 'floating') : m],
    M = ll(
      await f.getClippingRect({
        element:
          (l = await (f.isElement == null ? void 0 : f.isElement(L))) == null ||
          l
            ? L
            : L.contextElement ||
              (await (f.getDocumentElement == null
                ? void 0
                : f.getDocumentElement(x.floating))),
        boundary: g,
        rootBoundary: w,
        strategy: h,
      }),
    ),
    Z =
      m === 'floating'
        ? { x: c, y: u, width: p.floating.width, height: p.floating.height }
        : p.reference,
    X = await (f.getOffsetParent == null
      ? void 0
      : f.getOffsetParent(x.floating)),
    G = (await (f.isElement == null ? void 0 : f.isElement(X)))
      ? (await (f.getScale == null ? void 0 : f.getScale(X))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    ee = ll(
      f.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await f.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: x,
            rect: Z,
            offsetParent: X,
            strategy: h,
          })
        : Z,
    );
  return {
    top: (M.top - ee.top + T.top) / G.y,
    bottom: (ee.bottom - M.bottom + T.bottom) / G.y,
    left: (M.left - ee.left + T.left) / G.x,
    right: (ee.right - M.right + T.right) / G.x,
  };
}
const bg = (o) => ({
    name: 'arrow',
    options: o,
    async fn(i) {
      const {
          x: l,
          y: c,
          placement: u,
          rects: f,
          platform: p,
          elements: x,
          middlewareData: h,
        } = i,
        { element: g, padding: w = 0 } = mn(o, i) || {};
      if (g == null) return {};
      const m = cf(w),
        E = { x: l, y: c },
        _ = Ca(u),
        T = Ea(_),
        O = await p.getDimensions(g),
        L = _ === 'y',
        M = L ? 'top' : 'left',
        Z = L ? 'bottom' : 'right',
        X = L ? 'clientHeight' : 'clientWidth',
        G = f.reference[T] + f.reference[_] - E[_] - f.floating[T],
        ee = E[_] - f.reference[_],
        le = await (p.getOffsetParent == null ? void 0 : p.getOffsetParent(g));
      let Y = le ? le[X] : 0;
      (!Y || !(await (p.isElement == null ? void 0 : p.isElement(le)))) &&
        (Y = x.floating[X] || f.floating[T]);
      const V = G / 2 - ee / 2,
        ve = Y / 2 - O[T] / 2 - 1,
        ye = Un(m[M], ve),
        Ne = Un(m[Z], ve),
        be = ye,
        pe = Y - O[T] - Ne,
        ge = Y / 2 - O[T] / 2 + V,
        Se = ga(be, ge, pe),
        Q =
          !h.arrow &&
          Br(u) != null &&
          ge !== Se &&
          f.reference[T] / 2 - (ge < be ? ye : Ne) - O[T] / 2 < 0,
        q = Q ? (ge < be ? ge - be : ge - pe) : 0;
      return {
        [_]: E[_] + q,
        data: {
          [_]: Se,
          centerOffset: ge - Se - q,
          ...(Q && { alignmentOffset: q }),
        },
        reset: Q,
      };
    },
  }),
  Sg = function (o) {
    return (
      o === void 0 && (o = {}),
      {
        name: 'flip',
        options: o,
        async fn(i) {
          var l, c;
          const {
              placement: u,
              middlewareData: f,
              rects: p,
              initialPlacement: x,
              platform: h,
              elements: g,
            } = i,
            {
              mainAxis: w = !0,
              crossAxis: m = !0,
              fallbackPlacements: E,
              fallbackStrategy: _ = 'bestFit',
              fallbackAxisSideDirection: T = 'none',
              flipAlignment: O = !0,
              ...L
            } = mn(o, i);
          if ((l = f.arrow) != null && l.alignmentOffset) return {};
          const M = hn(u),
            Z = Xt(x),
            X = hn(x) === x,
            G = await (h.isRTL == null ? void 0 : h.isRTL(g.floating)),
            ee = E || (X || !O ? [sl(x)] : hg(x)),
            le = T !== 'none';
          !E && le && ee.push(...xg(x, O, T, G));
          const Y = [x, ...ee],
            V = await zo(i, L),
            ve = [];
          let ye = ((c = f.flip) == null ? void 0 : c.overflows) || [];
          if ((w && ve.push(V[M]), m)) {
            const ge = mg(u, p, G);
            ve.push(V[ge[0]], V[ge[1]]);
          }
          if (
            ((ye = [...ye, { placement: u, overflows: ve }]),
            !ve.every((ge) => ge <= 0))
          ) {
            var Ne, be;
            const ge = (((Ne = f.flip) == null ? void 0 : Ne.index) || 0) + 1,
              Se = Y[ge];
            if (
              Se &&
              (!(m === 'alignment' ? Z !== Xt(Se) : !1) ||
                ye.every((C) =>
                  Xt(C.placement) === Z ? C.overflows[0] > 0 : !0,
                ))
            )
              return {
                data: { index: ge, overflows: ye },
                reset: { placement: Se },
              };
            let Q =
              (be = ye
                .filter((q) => q.overflows[0] <= 0)
                .sort((q, C) => q.overflows[1] - C.overflows[1])[0]) == null
                ? void 0
                : be.placement;
            if (!Q)
              switch (_) {
                case 'bestFit': {
                  var pe;
                  const q =
                    (pe = ye
                      .filter((C) => {
                        if (le) {
                          const $ = Xt(C.placement);
                          return $ === Z || $ === 'y';
                        }
                        return !0;
                      })
                      .map((C) => [
                        C.placement,
                        C.overflows
                          .filter(($) => $ > 0)
                          .reduce(($, I) => $ + I, 0),
                      ])
                      .sort((C, $) => C[1] - $[1])[0]) == null
                      ? void 0
                      : pe[0];
                  q && (Q = q);
                  break;
                }
                case 'initialPlacement':
                  Q = x;
                  break;
              }
            if (u !== Q) return { reset: { placement: Q } };
          }
          return {};
        },
      }
    );
  };
function jd(o, i) {
  return {
    top: o.top - i.height,
    right: o.right - i.width,
    bottom: o.bottom - i.height,
    left: o.left - i.width,
  };
}
function _d(o) {
  return ug.some((i) => o[i] >= 0);
}
const Eg = function (o) {
    return (
      o === void 0 && (o = {}),
      {
        name: 'hide',
        options: o,
        async fn(i) {
          const { rects: l } = i,
            { strategy: c = 'referenceHidden', ...u } = mn(o, i);
          switch (c) {
            case 'referenceHidden': {
              const f = await zo(i, { ...u, elementContext: 'reference' }),
                p = jd(f, l.reference);
              return {
                data: { referenceHiddenOffsets: p, referenceHidden: _d(p) },
              };
            }
            case 'escaped': {
              const f = await zo(i, { ...u, altBoundary: !0 }),
                p = jd(f, l.floating);
              return { data: { escapedOffsets: p, escaped: _d(p) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  uf = new Set(['left', 'top']);
async function Cg(o, i) {
  const { placement: l, platform: c, elements: u } = o,
    f = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)),
    p = hn(l),
    x = Br(l),
    h = Xt(l) === 'y',
    g = uf.has(p) ? -1 : 1,
    w = f && h ? -1 : 1,
    m = mn(i, o);
  let {
    mainAxis: E,
    crossAxis: _,
    alignmentAxis: T,
  } = typeof m == 'number'
    ? { mainAxis: m, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: m.mainAxis || 0,
        crossAxis: m.crossAxis || 0,
        alignmentAxis: m.alignmentAxis,
      };
  return (
    x && typeof T == 'number' && (_ = x === 'end' ? T * -1 : T),
    h ? { x: _ * w, y: E * g } : { x: E * g, y: _ * w }
  );
}
const Ng = function (o) {
    return (
      o === void 0 && (o = 0),
      {
        name: 'offset',
        options: o,
        async fn(i) {
          var l, c;
          const { x: u, y: f, placement: p, middlewareData: x } = i,
            h = await Cg(i, o);
          return p === ((l = x.offset) == null ? void 0 : l.placement) &&
            (c = x.arrow) != null &&
            c.alignmentOffset
            ? {}
            : { x: u + h.x, y: f + h.y, data: { ...h, placement: p } };
        },
      }
    );
  },
  Pg = function (o) {
    return (
      o === void 0 && (o = {}),
      {
        name: 'shift',
        options: o,
        async fn(i) {
          const { x: l, y: c, placement: u } = i,
            {
              mainAxis: f = !0,
              crossAxis: p = !1,
              limiter: x = {
                fn: (L) => {
                  let { x: M, y: Z } = L;
                  return { x: M, y: Z };
                },
              },
              ...h
            } = mn(o, i),
            g = { x: l, y: c },
            w = await zo(i, h),
            m = Xt(hn(u)),
            E = Sa(m);
          let _ = g[E],
            T = g[m];
          if (f) {
            const L = E === 'y' ? 'top' : 'left',
              M = E === 'y' ? 'bottom' : 'right',
              Z = _ + w[L],
              X = _ - w[M];
            _ = ga(Z, _, X);
          }
          if (p) {
            const L = m === 'y' ? 'top' : 'left',
              M = m === 'y' ? 'bottom' : 'right',
              Z = T + w[L],
              X = T - w[M];
            T = ga(Z, T, X);
          }
          const O = x.fn({ ...i, [E]: _, [m]: T });
          return {
            ...O,
            data: { x: O.x - l, y: O.y - c, enabled: { [E]: f, [m]: p } },
          };
        },
      }
    );
  },
  jg = function (o) {
    return (
      o === void 0 && (o = {}),
      {
        options: o,
        fn(i) {
          const { x: l, y: c, placement: u, rects: f, middlewareData: p } = i,
            { offset: x = 0, mainAxis: h = !0, crossAxis: g = !0 } = mn(o, i),
            w = { x: l, y: c },
            m = Xt(u),
            E = Sa(m);
          let _ = w[E],
            T = w[m];
          const O = mn(x, i),
            L =
              typeof O == 'number'
                ? { mainAxis: O, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...O };
          if (h) {
            const X = E === 'y' ? 'height' : 'width',
              G = f.reference[E] - f.floating[X] + L.mainAxis,
              ee = f.reference[E] + f.reference[X] - L.mainAxis;
            _ < G ? (_ = G) : _ > ee && (_ = ee);
          }
          if (g) {
            var M, Z;
            const X = E === 'y' ? 'width' : 'height',
              G = uf.has(hn(u)),
              ee =
                f.reference[m] -
                f.floating[X] +
                ((G && ((M = p.offset) == null ? void 0 : M[m])) || 0) +
                (G ? 0 : L.crossAxis),
              le =
                f.reference[m] +
                f.reference[X] +
                (G ? 0 : ((Z = p.offset) == null ? void 0 : Z[m]) || 0) -
                (G ? L.crossAxis : 0);
            T < ee ? (T = ee) : T > le && (T = le);
          }
          return { [E]: _, [m]: T };
        },
      }
    );
  },
  _g = function (o) {
    return (
      o === void 0 && (o = {}),
      {
        name: 'size',
        options: o,
        async fn(i) {
          var l, c;
          const { placement: u, rects: f, platform: p, elements: x } = i,
            { apply: h = () => {}, ...g } = mn(o, i),
            w = await zo(i, g),
            m = hn(u),
            E = Br(u),
            _ = Xt(u) === 'y',
            { width: T, height: O } = f.floating;
          let L, M;
          m === 'top' || m === 'bottom'
            ? ((L = m),
              (M =
                E ===
                ((await (p.isRTL == null ? void 0 : p.isRTL(x.floating)))
                  ? 'start'
                  : 'end')
                  ? 'left'
                  : 'right'))
            : ((M = m), (L = E === 'end' ? 'top' : 'bottom'));
          const Z = O - w.top - w.bottom,
            X = T - w.left - w.right,
            G = Un(O - w[L], Z),
            ee = Un(T - w[M], X),
            le = !i.middlewareData.shift;
          let Y = G,
            V = ee;
          if (
            ((l = i.middlewareData.shift) != null && l.enabled.x && (V = X),
            (c = i.middlewareData.shift) != null && c.enabled.y && (Y = Z),
            le && !E)
          ) {
            const ye = St(w.left, 0),
              Ne = St(w.right, 0),
              be = St(w.top, 0),
              pe = St(w.bottom, 0);
            _
              ? (V =
                  T -
                  2 * (ye !== 0 || Ne !== 0 ? ye + Ne : St(w.left, w.right)))
              : (Y =
                  O -
                  2 * (be !== 0 || pe !== 0 ? be + pe : St(w.top, w.bottom)));
          }
          await h({ ...i, availableWidth: V, availableHeight: Y });
          const ve = await p.getDimensions(x.floating);
          return T !== ve.width || O !== ve.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function fl() {
  return typeof window < 'u';
}
function Vr(o) {
  return df(o) ? (o.nodeName || '').toLowerCase() : '#document';
}
function Et(o) {
  var i;
  return (
    (o == null || (i = o.ownerDocument) == null ? void 0 : i.defaultView) ||
    window
  );
}
function Jt(o) {
  var i;
  return (i = (df(o) ? o.ownerDocument : o.document) || window.document) == null
    ? void 0
    : i.documentElement;
}
function df(o) {
  return fl() ? o instanceof Node || o instanceof Et(o).Node : !1;
}
function Vt(o) {
  return fl() ? o instanceof Element || o instanceof Et(o).Element : !1;
}
function Zt(o) {
  return fl() ? o instanceof HTMLElement || o instanceof Et(o).HTMLElement : !1;
}
function Rd(o) {
  return !fl() || typeof ShadowRoot > 'u'
    ? !1
    : o instanceof ShadowRoot || o instanceof Et(o).ShadowRoot;
}
const Rg = new Set(['inline', 'contents']);
function Do(o) {
  const { overflow: i, overflowX: l, overflowY: c, display: u } = Ut(o);
  return /auto|scroll|overlay|hidden|clip/.test(i + c + l) && !Rg.has(u);
}
const Tg = new Set(['table', 'td', 'th']);
function Og(o) {
  return Tg.has(Vr(o));
}
const Lg = [':popover-open', ':modal'];
function pl(o) {
  return Lg.some((i) => {
    try {
      return o.matches(i);
    } catch {
      return !1;
    }
  });
}
const Ag = ['transform', 'translate', 'scale', 'rotate', 'perspective'],
  zg = ['transform', 'translate', 'scale', 'rotate', 'perspective', 'filter'],
  Mg = ['paint', 'layout', 'strict', 'content'];
function Na(o) {
  const i = Pa(),
    l = Vt(o) ? Ut(o) : o;
  return (
    Ag.some((c) => (l[c] ? l[c] !== 'none' : !1)) ||
    (l.containerType ? l.containerType !== 'normal' : !1) ||
    (!i && (l.backdropFilter ? l.backdropFilter !== 'none' : !1)) ||
    (!i && (l.filter ? l.filter !== 'none' : !1)) ||
    zg.some((c) => (l.willChange || '').includes(c)) ||
    Mg.some((c) => (l.contain || '').includes(c))
  );
}
function Dg(o) {
  let i = $n(o);
  for (; Zt(i) && !Ir(i); ) {
    if (Na(i)) return i;
    if (pl(i)) return null;
    i = $n(i);
  }
  return null;
}
function Pa() {
  return typeof CSS > 'u' || !CSS.supports
    ? !1
    : CSS.supports('-webkit-backdrop-filter', 'none');
}
const Hg = new Set(['html', 'body', '#document']);
function Ir(o) {
  return Hg.has(Vr(o));
}
function Ut(o) {
  return Et(o).getComputedStyle(o);
}
function ml(o) {
  return Vt(o)
    ? { scrollLeft: o.scrollLeft, scrollTop: o.scrollTop }
    : { scrollLeft: o.scrollX, scrollTop: o.scrollY };
}
function $n(o) {
  if (Vr(o) === 'html') return o;
  const i = o.assignedSlot || o.parentNode || (Rd(o) && o.host) || Jt(o);
  return Rd(i) ? i.host : i;
}
function ff(o) {
  const i = $n(o);
  return Ir(i)
    ? o.ownerDocument
      ? o.ownerDocument.body
      : o.body
    : Zt(i) && Do(i)
      ? i
      : ff(i);
}
function Mo(o, i, l) {
  var c;
  (i === void 0 && (i = []), l === void 0 && (l = !0));
  const u = ff(o),
    f = u === ((c = o.ownerDocument) == null ? void 0 : c.body),
    p = Et(u);
  if (f) {
    const x = ya(p);
    return i.concat(
      p,
      p.visualViewport || [],
      Do(u) ? u : [],
      x && l ? Mo(x) : [],
    );
  }
  return i.concat(u, Mo(u, [], l));
}
function ya(o) {
  return o.parent && Object.getPrototypeOf(o.parent) ? o.frameElement : null;
}
function pf(o) {
  const i = Ut(o);
  let l = parseFloat(i.width) || 0,
    c = parseFloat(i.height) || 0;
  const u = Zt(o),
    f = u ? o.offsetWidth : l,
    p = u ? o.offsetHeight : c,
    x = ol(l) !== f || ol(c) !== p;
  return (x && ((l = f), (c = p)), { width: l, height: c, $: x });
}
function ja(o) {
  return Vt(o) ? o : o.contextElement;
}
function Hr(o) {
  const i = ja(o);
  if (!Zt(i)) return qt(1);
  const l = i.getBoundingClientRect(),
    { width: c, height: u, $: f } = pf(i);
  let p = (f ? ol(l.width) : l.width) / c,
    x = (f ? ol(l.height) : l.height) / u;
  return (
    (!p || !Number.isFinite(p)) && (p = 1),
    (!x || !Number.isFinite(x)) && (x = 1),
    { x: p, y: x }
  );
}
const Ig = qt(0);
function mf(o) {
  const i = Et(o);
  return !Pa() || !i.visualViewport
    ? Ig
    : { x: i.visualViewport.offsetLeft, y: i.visualViewport.offsetTop };
}
function Fg(o, i, l) {
  return (i === void 0 && (i = !1), !l || (i && l !== Et(o)) ? !1 : i);
}
function ur(o, i, l, c) {
  (i === void 0 && (i = !1), l === void 0 && (l = !1));
  const u = o.getBoundingClientRect(),
    f = ja(o);
  let p = qt(1);
  i && (c ? Vt(c) && (p = Hr(c)) : (p = Hr(o)));
  const x = Fg(f, l, c) ? mf(f) : qt(0);
  let h = (u.left + x.x) / p.x,
    g = (u.top + x.y) / p.y,
    w = u.width / p.x,
    m = u.height / p.y;
  if (f) {
    const E = Et(f),
      _ = c && Vt(c) ? Et(c) : c;
    let T = E,
      O = ya(T);
    for (; O && c && _ !== T; ) {
      const L = Hr(O),
        M = O.getBoundingClientRect(),
        Z = Ut(O),
        X = M.left + (O.clientLeft + parseFloat(Z.paddingLeft)) * L.x,
        G = M.top + (O.clientTop + parseFloat(Z.paddingTop)) * L.y;
      ((h *= L.x),
        (g *= L.y),
        (w *= L.x),
        (m *= L.y),
        (h += X),
        (g += G),
        (T = Et(O)),
        (O = ya(T)));
    }
  }
  return ll({ width: w, height: m, x: h, y: g });
}
function hl(o, i) {
  const l = ml(o).scrollLeft;
  return i ? i.left + l : ur(Jt(o)).left + l;
}
function hf(o, i) {
  const l = o.getBoundingClientRect(),
    c = l.left + i.scrollLeft - hl(o, l),
    u = l.top + i.scrollTop;
  return { x: c, y: u };
}
function Bg(o) {
  let { elements: i, rect: l, offsetParent: c, strategy: u } = o;
  const f = u === 'fixed',
    p = Jt(c),
    x = i ? pl(i.floating) : !1;
  if (c === p || (x && f)) return l;
  let h = { scrollLeft: 0, scrollTop: 0 },
    g = qt(1);
  const w = qt(0),
    m = Zt(c);
  if (
    (m || (!m && !f)) &&
    ((Vr(c) !== 'body' || Do(p)) && (h = ml(c)), Zt(c))
  ) {
    const _ = ur(c);
    ((g = Hr(c)), (w.x = _.x + c.clientLeft), (w.y = _.y + c.clientTop));
  }
  const E = p && !m && !f ? hf(p, h) : qt(0);
  return {
    width: l.width * g.x,
    height: l.height * g.y,
    x: l.x * g.x - h.scrollLeft * g.x + w.x + E.x,
    y: l.y * g.y - h.scrollTop * g.y + w.y + E.y,
  };
}
function Vg(o) {
  return Array.from(o.getClientRects());
}
function Ug(o) {
  const i = Jt(o),
    l = ml(o),
    c = o.ownerDocument.body,
    u = St(i.scrollWidth, i.clientWidth, c.scrollWidth, c.clientWidth),
    f = St(i.scrollHeight, i.clientHeight, c.scrollHeight, c.clientHeight);
  let p = -l.scrollLeft + hl(o);
  const x = -l.scrollTop;
  return (
    Ut(c).direction === 'rtl' && (p += St(i.clientWidth, c.clientWidth) - u),
    { width: u, height: f, x: p, y: x }
  );
}
const Td = 25;
function $g(o, i) {
  const l = Et(o),
    c = Jt(o),
    u = l.visualViewport;
  let f = c.clientWidth,
    p = c.clientHeight,
    x = 0,
    h = 0;
  if (u) {
    ((f = u.width), (p = u.height));
    const w = Pa();
    (!w || (w && i === 'fixed')) && ((x = u.offsetLeft), (h = u.offsetTop));
  }
  const g = hl(c);
  if (g <= 0) {
    const w = c.ownerDocument,
      m = w.body,
      E = getComputedStyle(m),
      _ =
        (w.compatMode === 'CSS1Compat' &&
          parseFloat(E.marginLeft) + parseFloat(E.marginRight)) ||
        0,
      T = Math.abs(c.clientWidth - m.clientWidth - _);
    T <= Td && (f -= T);
  } else g <= Td && (f += g);
  return { width: f, height: p, x, y: h };
}
const Wg = new Set(['absolute', 'fixed']);
function Gg(o, i) {
  const l = ur(o, !0, i === 'fixed'),
    c = l.top + o.clientTop,
    u = l.left + o.clientLeft,
    f = Zt(o) ? Hr(o) : qt(1),
    p = o.clientWidth * f.x,
    x = o.clientHeight * f.y,
    h = u * f.x,
    g = c * f.y;
  return { width: p, height: x, x: h, y: g };
}
function Od(o, i, l) {
  let c;
  if (i === 'viewport') c = $g(o, l);
  else if (i === 'document') c = Ug(Jt(o));
  else if (Vt(i)) c = Gg(i, l);
  else {
    const u = mf(o);
    c = { x: i.x - u.x, y: i.y - u.y, width: i.width, height: i.height };
  }
  return ll(c);
}
function gf(o, i) {
  const l = $n(o);
  return l === i || !Vt(l) || Ir(l)
    ? !1
    : Ut(l).position === 'fixed' || gf(l, i);
}
function Yg(o, i) {
  const l = i.get(o);
  if (l) return l;
  let c = Mo(o, [], !1).filter((x) => Vt(x) && Vr(x) !== 'body'),
    u = null;
  const f = Ut(o).position === 'fixed';
  let p = f ? $n(o) : o;
  for (; Vt(p) && !Ir(p); ) {
    const x = Ut(p),
      h = Na(p);
    (!h && x.position === 'fixed' && (u = null),
      (
        f
          ? !h && !u
          : (!h && x.position === 'static' && !!u && Wg.has(u.position)) ||
            (Do(p) && !h && gf(o, p))
      )
        ? (c = c.filter((w) => w !== p))
        : (u = x),
      (p = $n(p)));
  }
  return (i.set(o, c), c);
}
function Qg(o) {
  let { element: i, boundary: l, rootBoundary: c, strategy: u } = o;
  const p = [
      ...(l === 'clippingAncestors'
        ? pl(i)
          ? []
          : Yg(i, this._c)
        : [].concat(l)),
      c,
    ],
    x = p[0],
    h = p.reduce(
      (g, w) => {
        const m = Od(i, w, u);
        return (
          (g.top = St(m.top, g.top)),
          (g.right = Un(m.right, g.right)),
          (g.bottom = Un(m.bottom, g.bottom)),
          (g.left = St(m.left, g.left)),
          g
        );
      },
      Od(i, x, u),
    );
  return {
    width: h.right - h.left,
    height: h.bottom - h.top,
    x: h.left,
    y: h.top,
  };
}
function Kg(o) {
  const { width: i, height: l } = pf(o);
  return { width: i, height: l };
}
function Xg(o, i, l) {
  const c = Zt(i),
    u = Jt(i),
    f = l === 'fixed',
    p = ur(o, !0, f, i);
  let x = { scrollLeft: 0, scrollTop: 0 };
  const h = qt(0);
  function g() {
    h.x = hl(u);
  }
  if (c || (!c && !f))
    if (((Vr(i) !== 'body' || Do(u)) && (x = ml(i)), c)) {
      const _ = ur(i, !0, f, i);
      ((h.x = _.x + i.clientLeft), (h.y = _.y + i.clientTop));
    } else u && g();
  f && !c && u && g();
  const w = u && !c && !f ? hf(u, x) : qt(0),
    m = p.left + x.scrollLeft - h.x - w.x,
    E = p.top + x.scrollTop - h.y - w.y;
  return { x: m, y: E, width: p.width, height: p.height };
}
function la(o) {
  return Ut(o).position === 'static';
}
function Ld(o, i) {
  if (!Zt(o) || Ut(o).position === 'fixed') return null;
  if (i) return i(o);
  let l = o.offsetParent;
  return (Jt(o) === l && (l = l.ownerDocument.body), l);
}
function vf(o, i) {
  const l = Et(o);
  if (pl(o)) return l;
  if (!Zt(o)) {
    let u = $n(o);
    for (; u && !Ir(u); ) {
      if (Vt(u) && !la(u)) return u;
      u = $n(u);
    }
    return l;
  }
  let c = Ld(o, i);
  for (; c && Og(c) && la(c); ) c = Ld(c, i);
  return c && Ir(c) && la(c) && !Na(c) ? l : c || Dg(o) || l;
}
const qg = async function (o) {
  const i = this.getOffsetParent || vf,
    l = this.getDimensions,
    c = await l(o.floating);
  return {
    reference: Xg(o.reference, await i(o.floating), o.strategy),
    floating: { x: 0, y: 0, width: c.width, height: c.height },
  };
};
function Zg(o) {
  return Ut(o).direction === 'rtl';
}
const Jg = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Bg,
  getDocumentElement: Jt,
  getClippingRect: Qg,
  getOffsetParent: vf,
  getElementRects: qg,
  getClientRects: Vg,
  getDimensions: Kg,
  getScale: Hr,
  isElement: Vt,
  isRTL: Zg,
};
function yf(o, i) {
  return (
    o.x === i.x && o.y === i.y && o.width === i.width && o.height === i.height
  );
}
function ev(o, i) {
  let l = null,
    c;
  const u = Jt(o);
  function f() {
    var x;
    (clearTimeout(c), (x = l) == null || x.disconnect(), (l = null));
  }
  function p(x, h) {
    (x === void 0 && (x = !1), h === void 0 && (h = 1), f());
    const g = o.getBoundingClientRect(),
      { left: w, top: m, width: E, height: _ } = g;
    if ((x || i(), !E || !_)) return;
    const T = Zs(m),
      O = Zs(u.clientWidth - (w + E)),
      L = Zs(u.clientHeight - (m + _)),
      M = Zs(w),
      X = {
        rootMargin: -T + 'px ' + -O + 'px ' + -L + 'px ' + -M + 'px',
        threshold: St(0, Un(1, h)) || 1,
      };
    let G = !0;
    function ee(le) {
      const Y = le[0].intersectionRatio;
      if (Y !== h) {
        if (!G) return p();
        Y
          ? p(!1, Y)
          : (c = setTimeout(() => {
              p(!1, 1e-7);
            }, 1e3));
      }
      (Y === 1 && !yf(g, o.getBoundingClientRect()) && p(), (G = !1));
    }
    try {
      l = new IntersectionObserver(ee, { ...X, root: u.ownerDocument });
    } catch {
      l = new IntersectionObserver(ee, X);
    }
    l.observe(o);
  }
  return (p(!0), f);
}
function tv(o, i, l, c) {
  c === void 0 && (c = {});
  const {
      ancestorScroll: u = !0,
      ancestorResize: f = !0,
      elementResize: p = typeof ResizeObserver == 'function',
      layoutShift: x = typeof IntersectionObserver == 'function',
      animationFrame: h = !1,
    } = c,
    g = ja(o),
    w = u || f ? [...(g ? Mo(g) : []), ...Mo(i)] : [];
  w.forEach((M) => {
    (u && M.addEventListener('scroll', l, { passive: !0 }),
      f && M.addEventListener('resize', l));
  });
  const m = g && x ? ev(g, l) : null;
  let E = -1,
    _ = null;
  p &&
    ((_ = new ResizeObserver((M) => {
      let [Z] = M;
      (Z &&
        Z.target === g &&
        _ &&
        (_.unobserve(i),
        cancelAnimationFrame(E),
        (E = requestAnimationFrame(() => {
          var X;
          (X = _) == null || X.observe(i);
        }))),
        l());
    })),
    g && !h && _.observe(g),
    _.observe(i));
  let T,
    O = h ? ur(o) : null;
  h && L();
  function L() {
    const M = ur(o);
    (O && !yf(O, M) && l(), (O = M), (T = requestAnimationFrame(L)));
  }
  return (
    l(),
    () => {
      var M;
      (w.forEach((Z) => {
        (u && Z.removeEventListener('scroll', l),
          f && Z.removeEventListener('resize', l));
      }),
        m?.(),
        (M = _) == null || M.disconnect(),
        (_ = null),
        h && cancelAnimationFrame(T));
    }
  );
}
const nv = Ng,
  rv = Pg,
  ov = Sg,
  sv = _g,
  lv = Eg,
  Ad = bg,
  iv = jg,
  av = (o, i, l) => {
    const c = new Map(),
      u = { platform: Jg, ...l },
      f = { ...u.platform, _c: c };
    return kg(o, i, { ...u, platform: f });
  };
var cv = typeof document < 'u',
  uv = function () {},
  rl = cv ? P.useLayoutEffect : uv;
function il(o, i) {
  if (o === i) return !0;
  if (typeof o != typeof i) return !1;
  if (typeof o == 'function' && o.toString() === i.toString()) return !0;
  let l, c, u;
  if (o && i && typeof o == 'object') {
    if (Array.isArray(o)) {
      if (((l = o.length), l !== i.length)) return !1;
      for (c = l; c-- !== 0; ) if (!il(o[c], i[c])) return !1;
      return !0;
    }
    if (((u = Object.keys(o)), (l = u.length), l !== Object.keys(i).length))
      return !1;
    for (c = l; c-- !== 0; ) if (!{}.hasOwnProperty.call(i, u[c])) return !1;
    for (c = l; c-- !== 0; ) {
      const f = u[c];
      if (!(f === '_owner' && o.$$typeof) && !il(o[f], i[f])) return !1;
    }
    return !0;
  }
  return o !== o && i !== i;
}
function xf(o) {
  return typeof window > 'u'
    ? 1
    : (o.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function zd(o, i) {
  const l = xf(o);
  return Math.round(i * l) / l;
}
function ia(o) {
  const i = P.useRef(o);
  return (
    rl(() => {
      i.current = o;
    }),
    i
  );
}
function dv(o) {
  o === void 0 && (o = {});
  const {
      placement: i = 'bottom',
      strategy: l = 'absolute',
      middleware: c = [],
      platform: u,
      elements: { reference: f, floating: p } = {},
      transform: x = !0,
      whileElementsMounted: h,
      open: g,
    } = o,
    [w, m] = P.useState({
      x: 0,
      y: 0,
      strategy: l,
      placement: i,
      middlewareData: {},
      isPositioned: !1,
    }),
    [E, _] = P.useState(c);
  il(E, c) || _(c);
  const [T, O] = P.useState(null),
    [L, M] = P.useState(null),
    Z = P.useCallback((C) => {
      C !== le.current && ((le.current = C), O(C));
    }, []),
    X = P.useCallback((C) => {
      C !== Y.current && ((Y.current = C), M(C));
    }, []),
    G = f || T,
    ee = p || L,
    le = P.useRef(null),
    Y = P.useRef(null),
    V = P.useRef(w),
    ve = h != null,
    ye = ia(h),
    Ne = ia(u),
    be = ia(g),
    pe = P.useCallback(() => {
      if (!le.current || !Y.current) return;
      const C = { placement: i, strategy: l, middleware: E };
      (Ne.current && (C.platform = Ne.current),
        av(le.current, Y.current, C).then(($) => {
          const I = { ...$, isPositioned: be.current !== !1 };
          ge.current &&
            !il(V.current, I) &&
            ((V.current = I),
            ka.flushSync(() => {
              m(I);
            }));
        }));
    }, [E, i, l, Ne, be]);
  rl(() => {
    g === !1 &&
      V.current.isPositioned &&
      ((V.current.isPositioned = !1), m((C) => ({ ...C, isPositioned: !1 })));
  }, [g]);
  const ge = P.useRef(!1);
  (rl(
    () => (
      (ge.current = !0),
      () => {
        ge.current = !1;
      }
    ),
    [],
  ),
    rl(() => {
      if ((G && (le.current = G), ee && (Y.current = ee), G && ee)) {
        if (ye.current) return ye.current(G, ee, pe);
        pe();
      }
    }, [G, ee, pe, ye, ve]));
  const Se = P.useMemo(
      () => ({ reference: le, floating: Y, setReference: Z, setFloating: X }),
      [Z, X],
    ),
    Q = P.useMemo(() => ({ reference: G, floating: ee }), [G, ee]),
    q = P.useMemo(() => {
      const C = { position: l, left: 0, top: 0 };
      if (!Q.floating) return C;
      const $ = zd(Q.floating, w.x),
        I = zd(Q.floating, w.y);
      return x
        ? {
            ...C,
            transform: 'translate(' + $ + 'px, ' + I + 'px)',
            ...(xf(Q.floating) >= 1.5 && { willChange: 'transform' }),
          }
        : { position: l, left: $, top: I };
    }, [l, x, Q.floating, w.x, w.y]);
  return P.useMemo(
    () => ({ ...w, update: pe, refs: Se, elements: Q, floatingStyles: q }),
    [w, pe, Se, Q, q],
  );
}
const fv = (o) => {
    function i(l) {
      return {}.hasOwnProperty.call(l, 'current');
    }
    return {
      name: 'arrow',
      options: o,
      fn(l) {
        const { element: c, padding: u } = typeof o == 'function' ? o(l) : o;
        return c && i(c)
          ? c.current != null
            ? Ad({ element: c.current, padding: u }).fn(l)
            : {}
          : c
            ? Ad({ element: c, padding: u }).fn(l)
            : {};
      },
    };
  },
  pv = (o, i) => ({ ...nv(o), options: [o, i] }),
  mv = (o, i) => ({ ...rv(o), options: [o, i] }),
  hv = (o, i) => ({ ...iv(o), options: [o, i] }),
  gv = (o, i) => ({ ...ov(o), options: [o, i] }),
  vv = (o, i) => ({ ...sv(o), options: [o, i] }),
  yv = (o, i) => ({ ...lv(o), options: [o, i] }),
  xv = (o, i) => ({ ...fv(o), options: [o, i] });
var wv = 'Arrow',
  wf = P.forwardRef((o, i) => {
    const { children: l, width: c = 10, height: u = 5, ...f } = o;
    return v.jsx(fr.svg, {
      ...f,
      ref: i,
      width: c,
      height: u,
      viewBox: '0 0 30 10',
      preserveAspectRatio: 'none',
      children: o.asChild ? l : v.jsx('polygon', { points: '0,0 30,0 15,10' }),
    });
  });
wf.displayName = wv;
var kv = wf;
function bv(o) {
  const [i, l] = P.useState(void 0);
  return (
    Ao(() => {
      if (o) {
        l({ width: o.offsetWidth, height: o.offsetHeight });
        const c = new ResizeObserver((u) => {
          if (!Array.isArray(u) || !u.length) return;
          const f = u[0];
          let p, x;
          if ('borderBoxSize' in f) {
            const h = f.borderBoxSize,
              g = Array.isArray(h) ? h[0] : h;
            ((p = g.inlineSize), (x = g.blockSize));
          } else ((p = o.offsetWidth), (x = o.offsetHeight));
          l({ width: p, height: x });
        });
        return (c.observe(o, { box: 'border-box' }), () => c.unobserve(o));
      } else l(void 0);
    }, [o]),
    i
  );
}
var kf = 'Popper',
  [bf, Sf] = of(kf),
  [X0, Ef] = bf(kf),
  Cf = 'PopperAnchor',
  Nf = P.forwardRef((o, i) => {
    const { __scopePopper: l, virtualRef: c, ...u } = o,
      f = Ef(Cf, l),
      p = P.useRef(null),
      x = dr(i, p),
      h = P.useRef(null);
    return (
      P.useEffect(() => {
        const g = h.current;
        ((h.current = c?.current || p.current),
          g !== h.current && f.onAnchorChange(h.current));
      }),
      c ? null : v.jsx(fr.div, { ...u, ref: x })
    );
  });
Nf.displayName = Cf;
var _a = 'PopperContent',
  [Sv, Ev] = bf(_a),
  Pf = P.forwardRef((o, i) => {
    const {
        __scopePopper: l,
        side: c = 'bottom',
        sideOffset: u = 0,
        align: f = 'center',
        alignOffset: p = 0,
        arrowPadding: x = 0,
        avoidCollisions: h = !0,
        collisionBoundary: g = [],
        collisionPadding: w = 0,
        sticky: m = 'partial',
        hideWhenDetached: E = !1,
        updatePositionStrategy: _ = 'optimized',
        onPlaced: T,
        ...O
      } = o,
      L = Ef(_a, l),
      [M, Z] = P.useState(null),
      X = dr(i, (ce) => Z(ce)),
      [G, ee] = P.useState(null),
      le = bv(G),
      Y = le?.width ?? 0,
      V = le?.height ?? 0,
      ve = c + (f !== 'center' ? '-' + f : ''),
      ye =
        typeof w == 'number'
          ? w
          : { top: 0, right: 0, bottom: 0, left: 0, ...w },
      Ne = Array.isArray(g) ? g : [g],
      be = Ne.length > 0,
      pe = { padding: ye, boundary: Ne.filter(Nv), altBoundary: be },
      {
        refs: ge,
        floatingStyles: Se,
        placement: Q,
        isPositioned: q,
        middlewareData: C,
      } = dv({
        strategy: 'fixed',
        placement: ve,
        whileElementsMounted: (...ce) =>
          tv(...ce, { animationFrame: _ === 'always' }),
        elements: { reference: L.anchor },
        middleware: [
          pv({ mainAxis: u + V, alignmentAxis: p }),
          h &&
            mv({
              mainAxis: !0,
              crossAxis: !1,
              limiter: m === 'partial' ? hv() : void 0,
              ...pe,
            }),
          h && gv({ ...pe }),
          vv({
            ...pe,
            apply: ({
              elements: ce,
              rects: ie,
              availableWidth: we,
              availableHeight: _e,
            }) => {
              const { width: lt, height: Je } = ie.reference,
                At = ce.floating.style;
              (At.setProperty('--radix-popper-available-width', `${we}px`),
                At.setProperty('--radix-popper-available-height', `${_e}px`),
                At.setProperty('--radix-popper-anchor-width', `${lt}px`),
                At.setProperty('--radix-popper-anchor-height', `${Je}px`));
            },
          }),
          G && xv({ element: G, padding: x }),
          Pv({ arrowWidth: Y, arrowHeight: V }),
          E && yv({ strategy: 'referenceHidden', ...pe }),
        ],
      }),
      [$, I] = Rf(Q),
      S = dl(T);
    Ao(() => {
      q && S?.();
    }, [q, S]);
    const A = C.arrow?.x,
      F = C.arrow?.y,
      W = C.arrow?.centerOffset !== 0,
      [oe, fe] = P.useState();
    return (
      Ao(() => {
        M && fe(window.getComputedStyle(M).zIndex);
      }, [M]),
      v.jsx('div', {
        ref: ge.setFloating,
        'data-radix-popper-content-wrapper': '',
        style: {
          ...Se,
          transform: q ? Se.transform : 'translate(0, -200%)',
          minWidth: 'max-content',
          zIndex: oe,
          '--radix-popper-transform-origin': [
            C.transformOrigin?.x,
            C.transformOrigin?.y,
          ].join(' '),
          ...(C.hide?.referenceHidden && {
            visibility: 'hidden',
            pointerEvents: 'none',
          }),
        },
        dir: o.dir,
        children: v.jsx(Sv, {
          scope: l,
          placedSide: $,
          onArrowChange: ee,
          arrowX: A,
          arrowY: F,
          shouldHideArrow: W,
          children: v.jsx(fr.div, {
            'data-side': $,
            'data-align': I,
            ...O,
            ref: X,
            style: { ...O.style, animation: q ? void 0 : 'none' },
          }),
        }),
      })
    );
  });
Pf.displayName = _a;
var jf = 'PopperArrow',
  Cv = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' },
  _f = P.forwardRef(function (i, l) {
    const { __scopePopper: c, ...u } = i,
      f = Ev(jf, c),
      p = Cv[f.placedSide];
    return v.jsx('span', {
      ref: f.onArrowChange,
      style: {
        position: 'absolute',
        left: f.arrowX,
        top: f.arrowY,
        [p]: 0,
        transformOrigin: {
          top: '',
          right: '0 0',
          bottom: 'center 0',
          left: '100% 0',
        }[f.placedSide],
        transform: {
          top: 'translateY(100%)',
          right: 'translateY(50%) rotate(90deg) translateX(-50%)',
          bottom: 'rotate(180deg)',
          left: 'translateY(50%) rotate(-90deg) translateX(50%)',
        }[f.placedSide],
        visibility: f.shouldHideArrow ? 'hidden' : void 0,
      },
      children: v.jsx(kv, {
        ...u,
        ref: l,
        style: { ...u.style, display: 'block' },
      }),
    });
  });
_f.displayName = jf;
function Nv(o) {
  return o !== null;
}
var Pv = (o) => ({
  name: 'transformOrigin',
  options: o,
  fn(i) {
    const { placement: l, rects: c, middlewareData: u } = i,
      p = u.arrow?.centerOffset !== 0,
      x = p ? 0 : o.arrowWidth,
      h = p ? 0 : o.arrowHeight,
      [g, w] = Rf(l),
      m = { start: '0%', center: '50%', end: '100%' }[w],
      E = (u.arrow?.x ?? 0) + x / 2,
      _ = (u.arrow?.y ?? 0) + h / 2;
    let T = '',
      O = '';
    return (
      g === 'bottom'
        ? ((T = p ? m : `${E}px`), (O = `${-h}px`))
        : g === 'top'
          ? ((T = p ? m : `${E}px`), (O = `${c.floating.height + h}px`))
          : g === 'right'
            ? ((T = `${-h}px`), (O = p ? m : `${_}px`))
            : g === 'left' &&
              ((T = `${c.floating.width + h}px`), (O = p ? m : `${_}px`)),
      { data: { x: T, y: O } }
    );
  },
});
function Rf(o) {
  const [i, l = 'center'] = o.split('-');
  return [i, l];
}
var jv = Nf,
  _v = Pf,
  Rv = _f;
function Tv(o, i) {
  return P.useReducer((l, c) => i[l][c] ?? l, o);
}
var Tf = (o) => {
  const { present: i, children: l } = o,
    c = Ov(i),
    u =
      typeof l == 'function' ? l({ present: c.isPresent }) : P.Children.only(l),
    f = dr(c.ref, Lv(u));
  return typeof l == 'function' || c.isPresent
    ? P.cloneElement(u, { ref: f })
    : null;
};
Tf.displayName = 'Presence';
function Ov(o) {
  const [i, l] = P.useState(),
    c = P.useRef(null),
    u = P.useRef(o),
    f = P.useRef('none'),
    p = o ? 'mounted' : 'unmounted',
    [x, h] = Tv(p, {
      mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
      unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
      unmounted: { MOUNT: 'mounted' },
    });
  return (
    P.useEffect(() => {
      const g = Js(c.current);
      f.current = x === 'mounted' ? g : 'none';
    }, [x]),
    Ao(() => {
      const g = c.current,
        w = u.current;
      if (w !== o) {
        const E = f.current,
          _ = Js(g);
        (o
          ? h('MOUNT')
          : _ === 'none' || g?.display === 'none'
            ? h('UNMOUNT')
            : h(w && E !== _ ? 'ANIMATION_OUT' : 'UNMOUNT'),
          (u.current = o));
      }
    }, [o, h]),
    Ao(() => {
      if (i) {
        let g;
        const w = i.ownerDocument.defaultView ?? window,
          m = (_) => {
            const O = Js(c.current).includes(CSS.escape(_.animationName));
            if (_.target === i && O && (h('ANIMATION_END'), !u.current)) {
              const L = i.style.animationFillMode;
              ((i.style.animationFillMode = 'forwards'),
                (g = w.setTimeout(() => {
                  i.style.animationFillMode === 'forwards' &&
                    (i.style.animationFillMode = L);
                })));
            }
          },
          E = (_) => {
            _.target === i && (f.current = Js(c.current));
          };
        return (
          i.addEventListener('animationstart', E),
          i.addEventListener('animationcancel', m),
          i.addEventListener('animationend', m),
          () => {
            (w.clearTimeout(g),
              i.removeEventListener('animationstart', E),
              i.removeEventListener('animationcancel', m),
              i.removeEventListener('animationend', m));
          }
        );
      } else h('ANIMATION_END');
    }, [i, h]),
    {
      isPresent: ['mounted', 'unmountSuspended'].includes(x),
      ref: P.useCallback((g) => {
        ((c.current = g ? getComputedStyle(g) : null), l(g));
      }, []),
    }
  );
}
function Js(o) {
  return o?.animationName || 'none';
}
function Lv(o) {
  let i = Object.getOwnPropertyDescriptor(o.props, 'ref')?.get,
    l = i && 'isReactWarning' in i && i.isReactWarning;
  return l
    ? o.ref
    : ((i = Object.getOwnPropertyDescriptor(o, 'ref')?.get),
      (l = i && 'isReactWarning' in i && i.isReactWarning),
      l ? o.props.ref : o.props.ref || o.ref);
}
var Av = Symbol('radix.slottable');
function zv(o) {
  const i = ({ children: l }) => v.jsx(v.Fragment, { children: l });
  return ((i.displayName = `${o}.Slottable`), (i.__radixId = Av), i);
}
var Mv = Object.freeze({
    position: 'absolute',
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    wordWrap: 'normal',
  }),
  Dv = 'VisuallyHidden',
  Of = P.forwardRef((o, i) =>
    v.jsx(fr.span, { ...o, ref: i, style: { ...Mv, ...o.style } }),
  );
Of.displayName = Dv;
var Hv = Of,
  [gl] = of('Tooltip', [Sf]),
  Ra = Sf(),
  Lf = 'TooltipProvider',
  Iv = 700,
  Md = 'tooltip.open',
  [Fv, Af] = gl(Lf),
  zf = (o) => {
    const {
        __scopeTooltip: i,
        delayDuration: l = Iv,
        skipDelayDuration: c = 300,
        disableHoverableContent: u = !1,
        children: f,
      } = o,
      p = P.useRef(!0),
      x = P.useRef(!1),
      h = P.useRef(0);
    return (
      P.useEffect(() => {
        const g = h.current;
        return () => window.clearTimeout(g);
      }, []),
      v.jsx(Fv, {
        scope: i,
        isOpenDelayedRef: p,
        delayDuration: l,
        onOpen: P.useCallback(() => {
          (window.clearTimeout(h.current), (p.current = !1));
        }, []),
        onClose: P.useCallback(() => {
          (window.clearTimeout(h.current),
            (h.current = window.setTimeout(() => (p.current = !0), c)));
        }, [c]),
        isPointerInTransitRef: x,
        onPointerInTransitChange: P.useCallback((g) => {
          x.current = g;
        }, []),
        disableHoverableContent: u,
        children: f,
      })
    );
  };
zf.displayName = Lf;
var Mf = 'Tooltip',
  [q0, vl] = gl(Mf),
  xa = 'TooltipTrigger',
  Bv = P.forwardRef((o, i) => {
    const { __scopeTooltip: l, ...c } = o,
      u = vl(xa, l),
      f = Af(xa, l),
      p = Ra(l),
      x = P.useRef(null),
      h = dr(i, x, u.onTriggerChange),
      g = P.useRef(!1),
      w = P.useRef(!1),
      m = P.useCallback(() => (g.current = !1), []);
    return (
      P.useEffect(
        () => () => document.removeEventListener('pointerup', m),
        [m],
      ),
      v.jsx(jv, {
        asChild: !0,
        ...p,
        children: v.jsx(fr.button, {
          'aria-describedby': u.open ? u.contentId : void 0,
          'data-state': u.stateAttribute,
          ...c,
          ref: h,
          onPointerMove: pn(o.onPointerMove, (E) => {
            E.pointerType !== 'touch' &&
              !w.current &&
              !f.isPointerInTransitRef.current &&
              (u.onTriggerEnter(), (w.current = !0));
          }),
          onPointerLeave: pn(o.onPointerLeave, () => {
            (u.onTriggerLeave(), (w.current = !1));
          }),
          onPointerDown: pn(o.onPointerDown, () => {
            (u.open && u.onClose(),
              (g.current = !0),
              document.addEventListener('pointerup', m, { once: !0 }));
          }),
          onFocus: pn(o.onFocus, () => {
            g.current || u.onOpen();
          }),
          onBlur: pn(o.onBlur, u.onClose),
          onClick: pn(o.onClick, u.onClose),
        }),
      })
    );
  });
Bv.displayName = xa;
var Vv = 'TooltipPortal',
  [Z0, Uv] = gl(Vv, { forceMount: void 0 }),
  Fr = 'TooltipContent',
  $v = P.forwardRef((o, i) => {
    const l = Uv(Fr, o.__scopeTooltip),
      { forceMount: c = l.forceMount, side: u = 'top', ...f } = o,
      p = vl(Fr, o.__scopeTooltip);
    return v.jsx(Tf, {
      present: c || p.open,
      children: p.disableHoverableContent
        ? v.jsx(Df, { side: u, ...f, ref: i })
        : v.jsx(Wv, { side: u, ...f, ref: i }),
    });
  }),
  Wv = P.forwardRef((o, i) => {
    const l = vl(Fr, o.__scopeTooltip),
      c = Af(Fr, o.__scopeTooltip),
      u = P.useRef(null),
      f = dr(i, u),
      [p, x] = P.useState(null),
      { trigger: h, onClose: g } = l,
      w = u.current,
      { onPointerInTransitChange: m } = c,
      E = P.useCallback(() => {
        (x(null), m(!1));
      }, [m]),
      _ = P.useCallback(
        (T, O) => {
          const L = T.currentTarget,
            M = { x: T.clientX, y: T.clientY },
            Z = Xv(M, L.getBoundingClientRect()),
            X = qv(M, Z),
            G = Zv(O.getBoundingClientRect()),
            ee = ey([...X, ...G]);
          (x(ee), m(!0));
        },
        [m],
      );
    return (
      P.useEffect(() => () => E(), [E]),
      P.useEffect(() => {
        if (h && w) {
          const T = (L) => _(L, w),
            O = (L) => _(L, h);
          return (
            h.addEventListener('pointerleave', T),
            w.addEventListener('pointerleave', O),
            () => {
              (h.removeEventListener('pointerleave', T),
                w.removeEventListener('pointerleave', O));
            }
          );
        }
      }, [h, w, _, E]),
      P.useEffect(() => {
        if (p) {
          const T = (O) => {
            const L = O.target,
              M = { x: O.clientX, y: O.clientY },
              Z = h?.contains(L) || w?.contains(L),
              X = !Jv(M, p);
            Z ? E() : X && (E(), g());
          };
          return (
            document.addEventListener('pointermove', T),
            () => document.removeEventListener('pointermove', T)
          );
        }
      }, [h, w, p, g, E]),
      v.jsx(Df, { ...o, ref: f })
    );
  }),
  [Gv, Yv] = gl(Mf, { isInside: !1 }),
  Qv = zv('TooltipContent'),
  Df = P.forwardRef((o, i) => {
    const {
        __scopeTooltip: l,
        children: c,
        'aria-label': u,
        onEscapeKeyDown: f,
        onPointerDownOutside: p,
        ...x
      } = o,
      h = vl(Fr, l),
      g = Ra(l),
      { onClose: w } = h;
    return (
      P.useEffect(
        () => (
          document.addEventListener(Md, w),
          () => document.removeEventListener(Md, w)
        ),
        [w],
      ),
      P.useEffect(() => {
        if (h.trigger) {
          const m = (E) => {
            E.target?.contains(h.trigger) && w();
          };
          return (
            window.addEventListener('scroll', m, { capture: !0 }),
            () => window.removeEventListener('scroll', m, { capture: !0 })
          );
        }
      }, [h.trigger, w]),
      v.jsx(lf, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: f,
        onPointerDownOutside: p,
        onFocusOutside: (m) => m.preventDefault(),
        onDismiss: w,
        children: v.jsxs(_v, {
          'data-state': h.stateAttribute,
          ...g,
          ...x,
          ref: i,
          style: {
            ...x.style,
            '--radix-tooltip-content-transform-origin':
              'var(--radix-popper-transform-origin)',
            '--radix-tooltip-content-available-width':
              'var(--radix-popper-available-width)',
            '--radix-tooltip-content-available-height':
              'var(--radix-popper-available-height)',
            '--radix-tooltip-trigger-width': 'var(--radix-popper-anchor-width)',
            '--radix-tooltip-trigger-height':
              'var(--radix-popper-anchor-height)',
          },
          children: [
            v.jsx(Qv, { children: c }),
            v.jsx(Gv, {
              scope: l,
              isInside: !0,
              children: v.jsx(Hv, {
                id: h.contentId,
                role: 'tooltip',
                children: u || c,
              }),
            }),
          ],
        }),
      })
    );
  });
$v.displayName = Fr;
var Hf = 'TooltipArrow',
  Kv = P.forwardRef((o, i) => {
    const { __scopeTooltip: l, ...c } = o,
      u = Ra(l);
    return Yv(Hf, l).isInside ? null : v.jsx(Rv, { ...u, ...c, ref: i });
  });
Kv.displayName = Hf;
function Xv(o, i) {
  const l = Math.abs(i.top - o.y),
    c = Math.abs(i.bottom - o.y),
    u = Math.abs(i.right - o.x),
    f = Math.abs(i.left - o.x);
  switch (Math.min(l, c, u, f)) {
    case f:
      return 'left';
    case u:
      return 'right';
    case l:
      return 'top';
    case c:
      return 'bottom';
    default:
      throw new Error('unreachable');
  }
}
function qv(o, i, l = 5) {
  const c = [];
  switch (i) {
    case 'top':
      c.push({ x: o.x - l, y: o.y + l }, { x: o.x + l, y: o.y + l });
      break;
    case 'bottom':
      c.push({ x: o.x - l, y: o.y - l }, { x: o.x + l, y: o.y - l });
      break;
    case 'left':
      c.push({ x: o.x + l, y: o.y - l }, { x: o.x + l, y: o.y + l });
      break;
    case 'right':
      c.push({ x: o.x - l, y: o.y - l }, { x: o.x - l, y: o.y + l });
      break;
  }
  return c;
}
function Zv(o) {
  const { top: i, right: l, bottom: c, left: u } = o;
  return [
    { x: u, y: i },
    { x: l, y: i },
    { x: l, y: c },
    { x: u, y: c },
  ];
}
function Jv(o, i) {
  const { x: l, y: c } = o;
  let u = !1;
  for (let f = 0, p = i.length - 1; f < i.length; p = f++) {
    const x = i[f],
      h = i[p],
      g = x.x,
      w = x.y,
      m = h.x,
      E = h.y;
    w > c != E > c && l < ((m - g) * (c - w)) / (E - w) + g && (u = !u);
  }
  return u;
}
function ey(o) {
  const i = o.slice();
  return (
    i.sort((l, c) =>
      l.x < c.x ? -1 : l.x > c.x ? 1 : l.y < c.y ? -1 : l.y > c.y ? 1 : 0,
    ),
    ty(i)
  );
}
function ty(o) {
  if (o.length <= 1) return o.slice();
  const i = [];
  for (let c = 0; c < o.length; c++) {
    const u = o[c];
    for (; i.length >= 2; ) {
      const f = i[i.length - 1],
        p = i[i.length - 2];
      if ((f.x - p.x) * (u.y - p.y) >= (f.y - p.y) * (u.x - p.x)) i.pop();
      else break;
    }
    i.push(u);
  }
  i.pop();
  const l = [];
  for (let c = o.length - 1; c >= 0; c--) {
    const u = o[c];
    for (; l.length >= 2; ) {
      const f = l[l.length - 1],
        p = l[l.length - 2];
      if ((f.x - p.x) * (u.y - p.y) >= (f.y - p.y) * (u.x - p.x)) l.pop();
      else break;
    }
    l.push(u);
  }
  return (
    l.pop(),
    i.length === 1 && l.length === 1 && i[0].x === l[0].x && i[0].y === l[0].y
      ? i
      : i.concat(l)
  );
}
var ny = zf;
function If(o) {
  var i,
    l,
    c = '';
  if (typeof o == 'string' || typeof o == 'number') c += o;
  else if (typeof o == 'object')
    if (Array.isArray(o)) {
      var u = o.length;
      for (i = 0; i < u; i++)
        o[i] && (l = If(o[i])) && (c && (c += ' '), (c += l));
    } else for (l in o) o[l] && (c && (c += ' '), (c += l));
  return c;
}
function Ff() {
  for (var o, i, l = 0, c = '', u = arguments.length; l < u; l++)
    (o = arguments[l]) && (i = If(o)) && (c && (c += ' '), (c += i));
  return c;
}
const ry = (o, i) => {
    const l = new Array(o.length + i.length);
    for (let c = 0; c < o.length; c++) l[c] = o[c];
    for (let c = 0; c < i.length; c++) l[o.length + c] = i[c];
    return l;
  },
  oy = (o, i) => ({ classGroupId: o, validator: i }),
  Bf = (o = new Map(), i = null, l) => ({
    nextPart: o,
    validators: i,
    classGroupId: l,
  }),
  al = '-',
  Dd = [],
  sy = 'arbitrary..',
  ly = (o) => {
    const i = ay(o),
      { conflictingClassGroups: l, conflictingClassGroupModifiers: c } = o;
    return {
      getClassGroupId: (p) => {
        if (p.startsWith('[') && p.endsWith(']')) return iy(p);
        const x = p.split(al),
          h = x[0] === '' && x.length > 1 ? 1 : 0;
        return Vf(x, h, i);
      },
      getConflictingClassGroupIds: (p, x) => {
        if (x) {
          const h = c[p],
            g = l[p];
          return h ? (g ? ry(g, h) : h) : g || Dd;
        }
        return l[p] || Dd;
      },
    };
  },
  Vf = (o, i, l) => {
    if (o.length - i === 0) return l.classGroupId;
    const u = o[i],
      f = l.nextPart.get(u);
    if (f) {
      const g = Vf(o, i + 1, f);
      if (g) return g;
    }
    const p = l.validators;
    if (p === null) return;
    const x = i === 0 ? o.join(al) : o.slice(i).join(al),
      h = p.length;
    for (let g = 0; g < h; g++) {
      const w = p[g];
      if (w.validator(x)) return w.classGroupId;
    }
  },
  iy = (o) =>
    o.slice(1, -1).indexOf(':') === -1
      ? void 0
      : (() => {
          const i = o.slice(1, -1),
            l = i.indexOf(':'),
            c = i.slice(0, l);
          return c ? sy + c : void 0;
        })(),
  ay = (o) => {
    const { theme: i, classGroups: l } = o;
    return cy(l, i);
  },
  cy = (o, i) => {
    const l = Bf();
    for (const c in o) {
      const u = o[c];
      Ta(u, l, c, i);
    }
    return l;
  },
  Ta = (o, i, l, c) => {
    const u = o.length;
    for (let f = 0; f < u; f++) {
      const p = o[f];
      uy(p, i, l, c);
    }
  },
  uy = (o, i, l, c) => {
    if (typeof o == 'string') {
      dy(o, i, l);
      return;
    }
    if (typeof o == 'function') {
      fy(o, i, l, c);
      return;
    }
    py(o, i, l, c);
  },
  dy = (o, i, l) => {
    const c = o === '' ? i : Uf(i, o);
    c.classGroupId = l;
  },
  fy = (o, i, l, c) => {
    if (my(o)) {
      Ta(o(c), i, l, c);
      return;
    }
    (i.validators === null && (i.validators = []), i.validators.push(oy(l, o)));
  },
  py = (o, i, l, c) => {
    const u = Object.entries(o),
      f = u.length;
    for (let p = 0; p < f; p++) {
      const [x, h] = u[p];
      Ta(h, Uf(i, x), l, c);
    }
  },
  Uf = (o, i) => {
    let l = o;
    const c = i.split(al),
      u = c.length;
    for (let f = 0; f < u; f++) {
      const p = c[f];
      let x = l.nextPart.get(p);
      (x || ((x = Bf()), l.nextPart.set(p, x)), (l = x));
    }
    return l;
  },
  my = (o) => 'isThemeGetter' in o && o.isThemeGetter === !0,
  hy = (o) => {
    if (o < 1) return { get: () => {}, set: () => {} };
    let i = 0,
      l = Object.create(null),
      c = Object.create(null);
    const u = (f, p) => {
      ((l[f] = p), i++, i > o && ((i = 0), (c = l), (l = Object.create(null))));
    };
    return {
      get(f) {
        let p = l[f];
        if (p !== void 0) return p;
        if ((p = c[f]) !== void 0) return (u(f, p), p);
      },
      set(f, p) {
        f in l ? (l[f] = p) : u(f, p);
      },
    };
  },
  wa = '!',
  Hd = ':',
  gy = [],
  Id = (o, i, l, c, u) => ({
    modifiers: o,
    hasImportantModifier: i,
    baseClassName: l,
    maybePostfixModifierPosition: c,
    isExternal: u,
  }),
  vy = (o) => {
    const { prefix: i, experimentalParseClassName: l } = o;
    let c = (u) => {
      const f = [];
      let p = 0,
        x = 0,
        h = 0,
        g;
      const w = u.length;
      for (let O = 0; O < w; O++) {
        const L = u[O];
        if (p === 0 && x === 0) {
          if (L === Hd) {
            (f.push(u.slice(h, O)), (h = O + 1));
            continue;
          }
          if (L === '/') {
            g = O;
            continue;
          }
        }
        L === '[' ? p++ : L === ']' ? p-- : L === '(' ? x++ : L === ')' && x--;
      }
      const m = f.length === 0 ? u : u.slice(h);
      let E = m,
        _ = !1;
      m.endsWith(wa)
        ? ((E = m.slice(0, -1)), (_ = !0))
        : m.startsWith(wa) && ((E = m.slice(1)), (_ = !0));
      const T = g && g > h ? g - h : void 0;
      return Id(f, _, E, T);
    };
    if (i) {
      const u = i + Hd,
        f = c;
      c = (p) =>
        p.startsWith(u) ? f(p.slice(u.length)) : Id(gy, !1, p, void 0, !0);
    }
    if (l) {
      const u = c;
      c = (f) => l({ className: f, parseClassName: u });
    }
    return c;
  },
  yy = (o) => {
    const i = new Map();
    return (
      o.orderSensitiveModifiers.forEach((l, c) => {
        i.set(l, 1e6 + c);
      }),
      (l) => {
        const c = [];
        let u = [];
        for (let f = 0; f < l.length; f++) {
          const p = l[f],
            x = p[0] === '[',
            h = i.has(p);
          x || h
            ? (u.length > 0 && (u.sort(), c.push(...u), (u = [])), c.push(p))
            : u.push(p);
        }
        return (u.length > 0 && (u.sort(), c.push(...u)), c);
      }
    );
  },
  xy = (o) => ({
    cache: hy(o.cacheSize),
    parseClassName: vy(o),
    sortModifiers: yy(o),
    ...ly(o),
  }),
  wy = /\s+/,
  ky = (o, i) => {
    const {
        parseClassName: l,
        getClassGroupId: c,
        getConflictingClassGroupIds: u,
        sortModifiers: f,
      } = i,
      p = [],
      x = o.trim().split(wy);
    let h = '';
    for (let g = x.length - 1; g >= 0; g -= 1) {
      const w = x[g],
        {
          isExternal: m,
          modifiers: E,
          hasImportantModifier: _,
          baseClassName: T,
          maybePostfixModifierPosition: O,
        } = l(w);
      if (m) {
        h = w + (h.length > 0 ? ' ' + h : h);
        continue;
      }
      let L = !!O,
        M = c(L ? T.substring(0, O) : T);
      if (!M) {
        if (!L) {
          h = w + (h.length > 0 ? ' ' + h : h);
          continue;
        }
        if (((M = c(T)), !M)) {
          h = w + (h.length > 0 ? ' ' + h : h);
          continue;
        }
        L = !1;
      }
      const Z = E.length === 0 ? '' : E.length === 1 ? E[0] : f(E).join(':'),
        X = _ ? Z + wa : Z,
        G = X + M;
      if (p.indexOf(G) > -1) continue;
      p.push(G);
      const ee = u(M, L);
      for (let le = 0; le < ee.length; ++le) {
        const Y = ee[le];
        p.push(X + Y);
      }
      h = w + (h.length > 0 ? ' ' + h : h);
    }
    return h;
  },
  by = (...o) => {
    let i = 0,
      l,
      c,
      u = '';
    for (; i < o.length; )
      (l = o[i++]) && (c = $f(l)) && (u && (u += ' '), (u += c));
    return u;
  },
  $f = (o) => {
    if (typeof o == 'string') return o;
    let i,
      l = '';
    for (let c = 0; c < o.length; c++)
      o[c] && (i = $f(o[c])) && (l && (l += ' '), (l += i));
    return l;
  },
  Sy = (o, ...i) => {
    let l, c, u, f;
    const p = (h) => {
        const g = i.reduce((w, m) => m(w), o());
        return (
          (l = xy(g)),
          (c = l.cache.get),
          (u = l.cache.set),
          (f = x),
          x(h)
        );
      },
      x = (h) => {
        const g = c(h);
        if (g) return g;
        const w = ky(h, l);
        return (u(h, w), w);
      };
    return ((f = p), (...h) => f(by(...h)));
  },
  Ey = [],
  $e = (o) => {
    const i = (l) => l[o] || Ey;
    return ((i.isThemeGetter = !0), i);
  },
  Wf = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  Gf = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  Cy = /^\d+\/\d+$/,
  Ny = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Py =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  jy = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  _y = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Ry =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Dr = (o) => Cy.test(o),
  xe = (o) => !!o && !Number.isNaN(Number(o)),
  Vn = (o) => !!o && Number.isInteger(Number(o)),
  aa = (o) => o.endsWith('%') && xe(o.slice(0, -1)),
  fn = (o) => Ny.test(o),
  Ty = () => !0,
  Oy = (o) => Py.test(o) && !jy.test(o),
  Yf = () => !1,
  Ly = (o) => _y.test(o),
  Ay = (o) => Ry.test(o),
  zy = (o) => !ne(o) && !re(o),
  My = (o) => Ur(o, Xf, Yf),
  ne = (o) => Wf.test(o),
  cr = (o) => Ur(o, qf, Oy),
  ca = (o) => Ur(o, By, xe),
  Fd = (o) => Ur(o, Qf, Yf),
  Dy = (o) => Ur(o, Kf, Ay),
  el = (o) => Ur(o, Zf, Ly),
  re = (o) => Gf.test(o),
  Lo = (o) => $r(o, qf),
  Hy = (o) => $r(o, Vy),
  Bd = (o) => $r(o, Qf),
  Iy = (o) => $r(o, Xf),
  Fy = (o) => $r(o, Kf),
  tl = (o) => $r(o, Zf, !0),
  Ur = (o, i, l) => {
    const c = Wf.exec(o);
    return c ? (c[1] ? i(c[1]) : l(c[2])) : !1;
  },
  $r = (o, i, l = !1) => {
    const c = Gf.exec(o);
    return c ? (c[1] ? i(c[1]) : l) : !1;
  },
  Qf = (o) => o === 'position' || o === 'percentage',
  Kf = (o) => o === 'image' || o === 'url',
  Xf = (o) => o === 'length' || o === 'size' || o === 'bg-size',
  qf = (o) => o === 'length',
  By = (o) => o === 'number',
  Vy = (o) => o === 'family-name',
  Zf = (o) => o === 'shadow',
  Uy = () => {
    const o = $e('color'),
      i = $e('font'),
      l = $e('text'),
      c = $e('font-weight'),
      u = $e('tracking'),
      f = $e('leading'),
      p = $e('breakpoint'),
      x = $e('container'),
      h = $e('spacing'),
      g = $e('radius'),
      w = $e('shadow'),
      m = $e('inset-shadow'),
      E = $e('text-shadow'),
      _ = $e('drop-shadow'),
      T = $e('blur'),
      O = $e('perspective'),
      L = $e('aspect'),
      M = $e('ease'),
      Z = $e('animate'),
      X = () => [
        'auto',
        'avoid',
        'all',
        'avoid-page',
        'page',
        'left',
        'right',
        'column',
      ],
      G = () => [
        'center',
        'top',
        'bottom',
        'left',
        'right',
        'top-left',
        'left-top',
        'top-right',
        'right-top',
        'bottom-right',
        'right-bottom',
        'bottom-left',
        'left-bottom',
      ],
      ee = () => [...G(), re, ne],
      le = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
      Y = () => ['auto', 'contain', 'none'],
      V = () => [re, ne, h],
      ve = () => [Dr, 'full', 'auto', ...V()],
      ye = () => [Vn, 'none', 'subgrid', re, ne],
      Ne = () => ['auto', { span: ['full', Vn, re, ne] }, Vn, re, ne],
      be = () => [Vn, 'auto', re, ne],
      pe = () => ['auto', 'min', 'max', 'fr', re, ne],
      ge = () => [
        'start',
        'end',
        'center',
        'between',
        'around',
        'evenly',
        'stretch',
        'baseline',
        'center-safe',
        'end-safe',
      ],
      Se = () => [
        'start',
        'end',
        'center',
        'stretch',
        'center-safe',
        'end-safe',
      ],
      Q = () => ['auto', ...V()],
      q = () => [
        Dr,
        'auto',
        'full',
        'dvw',
        'dvh',
        'lvw',
        'lvh',
        'svw',
        'svh',
        'min',
        'max',
        'fit',
        ...V(),
      ],
      C = () => [o, re, ne],
      $ = () => [...G(), Bd, Fd, { position: [re, ne] }],
      I = () => ['no-repeat', { repeat: ['', 'x', 'y', 'space', 'round'] }],
      S = () => ['auto', 'cover', 'contain', Iy, My, { size: [re, ne] }],
      A = () => [aa, Lo, cr],
      F = () => ['', 'none', 'full', g, re, ne],
      W = () => ['', xe, Lo, cr],
      oe = () => ['solid', 'dashed', 'dotted', 'double'],
      fe = () => [
        'normal',
        'multiply',
        'screen',
        'overlay',
        'darken',
        'lighten',
        'color-dodge',
        'color-burn',
        'hard-light',
        'soft-light',
        'difference',
        'exclusion',
        'hue',
        'saturation',
        'color',
        'luminosity',
      ],
      ce = () => [xe, aa, Bd, Fd],
      ie = () => ['', 'none', T, re, ne],
      we = () => ['none', xe, re, ne],
      _e = () => ['none', xe, re, ne],
      lt = () => [xe, re, ne],
      Je = () => [Dr, 'full', ...V()];
    return {
      cacheSize: 500,
      theme: {
        animate: ['spin', 'ping', 'pulse', 'bounce'],
        aspect: ['video'],
        blur: [fn],
        breakpoint: [fn],
        color: [Ty],
        container: [fn],
        'drop-shadow': [fn],
        ease: ['in', 'out', 'in-out'],
        font: [zy],
        'font-weight': [
          'thin',
          'extralight',
          'light',
          'normal',
          'medium',
          'semibold',
          'bold',
          'extrabold',
          'black',
        ],
        'inset-shadow': [fn],
        leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose'],
        perspective: [
          'dramatic',
          'near',
          'normal',
          'midrange',
          'distant',
          'none',
        ],
        radius: [fn],
        shadow: [fn],
        spacing: ['px', xe],
        text: [fn],
        'text-shadow': [fn],
        tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest'],
      },
      classGroups: {
        aspect: [{ aspect: ['auto', 'square', Dr, ne, re, L] }],
        container: ['container'],
        columns: [{ columns: [xe, ne, re, x] }],
        'break-after': [{ 'break-after': X() }],
        'break-before': [{ 'break-before': X() }],
        'break-inside': [
          { 'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'] },
        ],
        'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
        box: [{ box: ['border', 'content'] }],
        display: [
          'block',
          'inline-block',
          'inline',
          'flex',
          'inline-flex',
          'table',
          'inline-table',
          'table-caption',
          'table-cell',
          'table-column',
          'table-column-group',
          'table-footer-group',
          'table-header-group',
          'table-row-group',
          'table-row',
          'flow-root',
          'grid',
          'inline-grid',
          'contents',
          'list-item',
          'hidden',
        ],
        sr: ['sr-only', 'not-sr-only'],
        float: [{ float: ['right', 'left', 'none', 'start', 'end'] }],
        clear: [{ clear: ['left', 'right', 'both', 'none', 'start', 'end'] }],
        isolation: ['isolate', 'isolation-auto'],
        'object-fit': [
          { object: ['contain', 'cover', 'fill', 'none', 'scale-down'] },
        ],
        'object-position': [{ object: ee() }],
        overflow: [{ overflow: le() }],
        'overflow-x': [{ 'overflow-x': le() }],
        'overflow-y': [{ 'overflow-y': le() }],
        overscroll: [{ overscroll: Y() }],
        'overscroll-x': [{ 'overscroll-x': Y() }],
        'overscroll-y': [{ 'overscroll-y': Y() }],
        position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
        inset: [{ inset: ve() }],
        'inset-x': [{ 'inset-x': ve() }],
        'inset-y': [{ 'inset-y': ve() }],
        start: [{ start: ve() }],
        end: [{ end: ve() }],
        top: [{ top: ve() }],
        right: [{ right: ve() }],
        bottom: [{ bottom: ve() }],
        left: [{ left: ve() }],
        visibility: ['visible', 'invisible', 'collapse'],
        z: [{ z: [Vn, 'auto', re, ne] }],
        basis: [{ basis: [Dr, 'full', 'auto', x, ...V()] }],
        'flex-direction': [
          { flex: ['row', 'row-reverse', 'col', 'col-reverse'] },
        ],
        'flex-wrap': [{ flex: ['nowrap', 'wrap', 'wrap-reverse'] }],
        flex: [{ flex: [xe, Dr, 'auto', 'initial', 'none', ne] }],
        grow: [{ grow: ['', xe, re, ne] }],
        shrink: [{ shrink: ['', xe, re, ne] }],
        order: [{ order: [Vn, 'first', 'last', 'none', re, ne] }],
        'grid-cols': [{ 'grid-cols': ye() }],
        'col-start-end': [{ col: Ne() }],
        'col-start': [{ 'col-start': be() }],
        'col-end': [{ 'col-end': be() }],
        'grid-rows': [{ 'grid-rows': ye() }],
        'row-start-end': [{ row: Ne() }],
        'row-start': [{ 'row-start': be() }],
        'row-end': [{ 'row-end': be() }],
        'grid-flow': [
          { 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] },
        ],
        'auto-cols': [{ 'auto-cols': pe() }],
        'auto-rows': [{ 'auto-rows': pe() }],
        gap: [{ gap: V() }],
        'gap-x': [{ 'gap-x': V() }],
        'gap-y': [{ 'gap-y': V() }],
        'justify-content': [{ justify: [...ge(), 'normal'] }],
        'justify-items': [{ 'justify-items': [...Se(), 'normal'] }],
        'justify-self': [{ 'justify-self': ['auto', ...Se()] }],
        'align-content': [{ content: ['normal', ...ge()] }],
        'align-items': [{ items: [...Se(), { baseline: ['', 'last'] }] }],
        'align-self': [{ self: ['auto', ...Se(), { baseline: ['', 'last'] }] }],
        'place-content': [{ 'place-content': ge() }],
        'place-items': [{ 'place-items': [...Se(), 'baseline'] }],
        'place-self': [{ 'place-self': ['auto', ...Se()] }],
        p: [{ p: V() }],
        px: [{ px: V() }],
        py: [{ py: V() }],
        ps: [{ ps: V() }],
        pe: [{ pe: V() }],
        pt: [{ pt: V() }],
        pr: [{ pr: V() }],
        pb: [{ pb: V() }],
        pl: [{ pl: V() }],
        m: [{ m: Q() }],
        mx: [{ mx: Q() }],
        my: [{ my: Q() }],
        ms: [{ ms: Q() }],
        me: [{ me: Q() }],
        mt: [{ mt: Q() }],
        mr: [{ mr: Q() }],
        mb: [{ mb: Q() }],
        ml: [{ ml: Q() }],
        'space-x': [{ 'space-x': V() }],
        'space-x-reverse': ['space-x-reverse'],
        'space-y': [{ 'space-y': V() }],
        'space-y-reverse': ['space-y-reverse'],
        size: [{ size: q() }],
        w: [{ w: [x, 'screen', ...q()] }],
        'min-w': [{ 'min-w': [x, 'screen', 'none', ...q()] }],
        'max-w': [
          { 'max-w': [x, 'screen', 'none', 'prose', { screen: [p] }, ...q()] },
        ],
        h: [{ h: ['screen', 'lh', ...q()] }],
        'min-h': [{ 'min-h': ['screen', 'lh', 'none', ...q()] }],
        'max-h': [{ 'max-h': ['screen', 'lh', ...q()] }],
        'font-size': [{ text: ['base', l, Lo, cr] }],
        'font-smoothing': ['antialiased', 'subpixel-antialiased'],
        'font-style': ['italic', 'not-italic'],
        'font-weight': [{ font: [c, re, ca] }],
        'font-stretch': [
          {
            'font-stretch': [
              'ultra-condensed',
              'extra-condensed',
              'condensed',
              'semi-condensed',
              'normal',
              'semi-expanded',
              'expanded',
              'extra-expanded',
              'ultra-expanded',
              aa,
              ne,
            ],
          },
        ],
        'font-family': [{ font: [Hy, ne, i] }],
        'fvn-normal': ['normal-nums'],
        'fvn-ordinal': ['ordinal'],
        'fvn-slashed-zero': ['slashed-zero'],
        'fvn-figure': ['lining-nums', 'oldstyle-nums'],
        'fvn-spacing': ['proportional-nums', 'tabular-nums'],
        'fvn-fraction': ['diagonal-fractions', 'stacked-fractions'],
        tracking: [{ tracking: [u, re, ne] }],
        'line-clamp': [{ 'line-clamp': [xe, 'none', re, ca] }],
        leading: [{ leading: [f, ...V()] }],
        'list-image': [{ 'list-image': ['none', re, ne] }],
        'list-style-position': [{ list: ['inside', 'outside'] }],
        'list-style-type': [{ list: ['disc', 'decimal', 'none', re, ne] }],
        'text-alignment': [
          { text: ['left', 'center', 'right', 'justify', 'start', 'end'] },
        ],
        'placeholder-color': [{ placeholder: C() }],
        'text-color': [{ text: C() }],
        'text-decoration': [
          'underline',
          'overline',
          'line-through',
          'no-underline',
        ],
        'text-decoration-style': [{ decoration: [...oe(), 'wavy'] }],
        'text-decoration-thickness': [
          { decoration: [xe, 'from-font', 'auto', re, cr] },
        ],
        'text-decoration-color': [{ decoration: C() }],
        'underline-offset': [{ 'underline-offset': [xe, 'auto', re, ne] }],
        'text-transform': [
          'uppercase',
          'lowercase',
          'capitalize',
          'normal-case',
        ],
        'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
        'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
        indent: [{ indent: V() }],
        'vertical-align': [
          {
            align: [
              'baseline',
              'top',
              'middle',
              'bottom',
              'text-top',
              'text-bottom',
              'sub',
              'super',
              re,
              ne,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              'normal',
              'nowrap',
              'pre',
              'pre-line',
              'pre-wrap',
              'break-spaces',
            ],
          },
        ],
        break: [{ break: ['normal', 'words', 'all', 'keep'] }],
        wrap: [{ wrap: ['break-word', 'anywhere', 'normal'] }],
        hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
        content: [{ content: ['none', re, ne] }],
        'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
        'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
        'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
        'bg-position': [{ bg: $() }],
        'bg-repeat': [{ bg: I() }],
        'bg-size': [{ bg: S() }],
        'bg-image': [
          {
            bg: [
              'none',
              {
                linear: [
                  { to: ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] },
                  Vn,
                  re,
                  ne,
                ],
                radial: ['', re, ne],
                conic: [Vn, re, ne],
              },
              Fy,
              Dy,
            ],
          },
        ],
        'bg-color': [{ bg: C() }],
        'gradient-from-pos': [{ from: A() }],
        'gradient-via-pos': [{ via: A() }],
        'gradient-to-pos': [{ to: A() }],
        'gradient-from': [{ from: C() }],
        'gradient-via': [{ via: C() }],
        'gradient-to': [{ to: C() }],
        rounded: [{ rounded: F() }],
        'rounded-s': [{ 'rounded-s': F() }],
        'rounded-e': [{ 'rounded-e': F() }],
        'rounded-t': [{ 'rounded-t': F() }],
        'rounded-r': [{ 'rounded-r': F() }],
        'rounded-b': [{ 'rounded-b': F() }],
        'rounded-l': [{ 'rounded-l': F() }],
        'rounded-ss': [{ 'rounded-ss': F() }],
        'rounded-se': [{ 'rounded-se': F() }],
        'rounded-ee': [{ 'rounded-ee': F() }],
        'rounded-es': [{ 'rounded-es': F() }],
        'rounded-tl': [{ 'rounded-tl': F() }],
        'rounded-tr': [{ 'rounded-tr': F() }],
        'rounded-br': [{ 'rounded-br': F() }],
        'rounded-bl': [{ 'rounded-bl': F() }],
        'border-w': [{ border: W() }],
        'border-w-x': [{ 'border-x': W() }],
        'border-w-y': [{ 'border-y': W() }],
        'border-w-s': [{ 'border-s': W() }],
        'border-w-e': [{ 'border-e': W() }],
        'border-w-t': [{ 'border-t': W() }],
        'border-w-r': [{ 'border-r': W() }],
        'border-w-b': [{ 'border-b': W() }],
        'border-w-l': [{ 'border-l': W() }],
        'divide-x': [{ 'divide-x': W() }],
        'divide-x-reverse': ['divide-x-reverse'],
        'divide-y': [{ 'divide-y': W() }],
        'divide-y-reverse': ['divide-y-reverse'],
        'border-style': [{ border: [...oe(), 'hidden', 'none'] }],
        'divide-style': [{ divide: [...oe(), 'hidden', 'none'] }],
        'border-color': [{ border: C() }],
        'border-color-x': [{ 'border-x': C() }],
        'border-color-y': [{ 'border-y': C() }],
        'border-color-s': [{ 'border-s': C() }],
        'border-color-e': [{ 'border-e': C() }],
        'border-color-t': [{ 'border-t': C() }],
        'border-color-r': [{ 'border-r': C() }],
        'border-color-b': [{ 'border-b': C() }],
        'border-color-l': [{ 'border-l': C() }],
        'divide-color': [{ divide: C() }],
        'outline-style': [{ outline: [...oe(), 'none', 'hidden'] }],
        'outline-offset': [{ 'outline-offset': [xe, re, ne] }],
        'outline-w': [{ outline: ['', xe, Lo, cr] }],
        'outline-color': [{ outline: C() }],
        shadow: [{ shadow: ['', 'none', w, tl, el] }],
        'shadow-color': [{ shadow: C() }],
        'inset-shadow': [{ 'inset-shadow': ['none', m, tl, el] }],
        'inset-shadow-color': [{ 'inset-shadow': C() }],
        'ring-w': [{ ring: W() }],
        'ring-w-inset': ['ring-inset'],
        'ring-color': [{ ring: C() }],
        'ring-offset-w': [{ 'ring-offset': [xe, cr] }],
        'ring-offset-color': [{ 'ring-offset': C() }],
        'inset-ring-w': [{ 'inset-ring': W() }],
        'inset-ring-color': [{ 'inset-ring': C() }],
        'text-shadow': [{ 'text-shadow': ['none', E, tl, el] }],
        'text-shadow-color': [{ 'text-shadow': C() }],
        opacity: [{ opacity: [xe, re, ne] }],
        'mix-blend': [
          { 'mix-blend': [...fe(), 'plus-darker', 'plus-lighter'] },
        ],
        'bg-blend': [{ 'bg-blend': fe() }],
        'mask-clip': [
          {
            'mask-clip': [
              'border',
              'padding',
              'content',
              'fill',
              'stroke',
              'view',
            ],
          },
          'mask-no-clip',
        ],
        'mask-composite': [
          { mask: ['add', 'subtract', 'intersect', 'exclude'] },
        ],
        'mask-image-linear-pos': [{ 'mask-linear': [xe] }],
        'mask-image-linear-from-pos': [{ 'mask-linear-from': ce() }],
        'mask-image-linear-to-pos': [{ 'mask-linear-to': ce() }],
        'mask-image-linear-from-color': [{ 'mask-linear-from': C() }],
        'mask-image-linear-to-color': [{ 'mask-linear-to': C() }],
        'mask-image-t-from-pos': [{ 'mask-t-from': ce() }],
        'mask-image-t-to-pos': [{ 'mask-t-to': ce() }],
        'mask-image-t-from-color': [{ 'mask-t-from': C() }],
        'mask-image-t-to-color': [{ 'mask-t-to': C() }],
        'mask-image-r-from-pos': [{ 'mask-r-from': ce() }],
        'mask-image-r-to-pos': [{ 'mask-r-to': ce() }],
        'mask-image-r-from-color': [{ 'mask-r-from': C() }],
        'mask-image-r-to-color': [{ 'mask-r-to': C() }],
        'mask-image-b-from-pos': [{ 'mask-b-from': ce() }],
        'mask-image-b-to-pos': [{ 'mask-b-to': ce() }],
        'mask-image-b-from-color': [{ 'mask-b-from': C() }],
        'mask-image-b-to-color': [{ 'mask-b-to': C() }],
        'mask-image-l-from-pos': [{ 'mask-l-from': ce() }],
        'mask-image-l-to-pos': [{ 'mask-l-to': ce() }],
        'mask-image-l-from-color': [{ 'mask-l-from': C() }],
        'mask-image-l-to-color': [{ 'mask-l-to': C() }],
        'mask-image-x-from-pos': [{ 'mask-x-from': ce() }],
        'mask-image-x-to-pos': [{ 'mask-x-to': ce() }],
        'mask-image-x-from-color': [{ 'mask-x-from': C() }],
        'mask-image-x-to-color': [{ 'mask-x-to': C() }],
        'mask-image-y-from-pos': [{ 'mask-y-from': ce() }],
        'mask-image-y-to-pos': [{ 'mask-y-to': ce() }],
        'mask-image-y-from-color': [{ 'mask-y-from': C() }],
        'mask-image-y-to-color': [{ 'mask-y-to': C() }],
        'mask-image-radial': [{ 'mask-radial': [re, ne] }],
        'mask-image-radial-from-pos': [{ 'mask-radial-from': ce() }],
        'mask-image-radial-to-pos': [{ 'mask-radial-to': ce() }],
        'mask-image-radial-from-color': [{ 'mask-radial-from': C() }],
        'mask-image-radial-to-color': [{ 'mask-radial-to': C() }],
        'mask-image-radial-shape': [{ 'mask-radial': ['circle', 'ellipse'] }],
        'mask-image-radial-size': [
          {
            'mask-radial': [
              { closest: ['side', 'corner'], farthest: ['side', 'corner'] },
            ],
          },
        ],
        'mask-image-radial-pos': [{ 'mask-radial-at': G() }],
        'mask-image-conic-pos': [{ 'mask-conic': [xe] }],
        'mask-image-conic-from-pos': [{ 'mask-conic-from': ce() }],
        'mask-image-conic-to-pos': [{ 'mask-conic-to': ce() }],
        'mask-image-conic-from-color': [{ 'mask-conic-from': C() }],
        'mask-image-conic-to-color': [{ 'mask-conic-to': C() }],
        'mask-mode': [{ mask: ['alpha', 'luminance', 'match'] }],
        'mask-origin': [
          {
            'mask-origin': [
              'border',
              'padding',
              'content',
              'fill',
              'stroke',
              'view',
            ],
          },
        ],
        'mask-position': [{ mask: $() }],
        'mask-repeat': [{ mask: I() }],
        'mask-size': [{ mask: S() }],
        'mask-type': [{ 'mask-type': ['alpha', 'luminance'] }],
        'mask-image': [{ mask: ['none', re, ne] }],
        filter: [{ filter: ['', 'none', re, ne] }],
        blur: [{ blur: ie() }],
        brightness: [{ brightness: [xe, re, ne] }],
        contrast: [{ contrast: [xe, re, ne] }],
        'drop-shadow': [{ 'drop-shadow': ['', 'none', _, tl, el] }],
        'drop-shadow-color': [{ 'drop-shadow': C() }],
        grayscale: [{ grayscale: ['', xe, re, ne] }],
        'hue-rotate': [{ 'hue-rotate': [xe, re, ne] }],
        invert: [{ invert: ['', xe, re, ne] }],
        saturate: [{ saturate: [xe, re, ne] }],
        sepia: [{ sepia: ['', xe, re, ne] }],
        'backdrop-filter': [{ 'backdrop-filter': ['', 'none', re, ne] }],
        'backdrop-blur': [{ 'backdrop-blur': ie() }],
        'backdrop-brightness': [{ 'backdrop-brightness': [xe, re, ne] }],
        'backdrop-contrast': [{ 'backdrop-contrast': [xe, re, ne] }],
        'backdrop-grayscale': [{ 'backdrop-grayscale': ['', xe, re, ne] }],
        'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [xe, re, ne] }],
        'backdrop-invert': [{ 'backdrop-invert': ['', xe, re, ne] }],
        'backdrop-opacity': [{ 'backdrop-opacity': [xe, re, ne] }],
        'backdrop-saturate': [{ 'backdrop-saturate': [xe, re, ne] }],
        'backdrop-sepia': [{ 'backdrop-sepia': ['', xe, re, ne] }],
        'border-collapse': [{ border: ['collapse', 'separate'] }],
        'border-spacing': [{ 'border-spacing': V() }],
        'border-spacing-x': [{ 'border-spacing-x': V() }],
        'border-spacing-y': [{ 'border-spacing-y': V() }],
        'table-layout': [{ table: ['auto', 'fixed'] }],
        caption: [{ caption: ['top', 'bottom'] }],
        transition: [
          {
            transition: [
              '',
              'all',
              'colors',
              'opacity',
              'shadow',
              'transform',
              'none',
              re,
              ne,
            ],
          },
        ],
        'transition-behavior': [{ transition: ['normal', 'discrete'] }],
        duration: [{ duration: [xe, 'initial', re, ne] }],
        ease: [{ ease: ['linear', 'initial', M, re, ne] }],
        delay: [{ delay: [xe, re, ne] }],
        animate: [{ animate: ['none', Z, re, ne] }],
        backface: [{ backface: ['hidden', 'visible'] }],
        perspective: [{ perspective: [O, re, ne] }],
        'perspective-origin': [{ 'perspective-origin': ee() }],
        rotate: [{ rotate: we() }],
        'rotate-x': [{ 'rotate-x': we() }],
        'rotate-y': [{ 'rotate-y': we() }],
        'rotate-z': [{ 'rotate-z': we() }],
        scale: [{ scale: _e() }],
        'scale-x': [{ 'scale-x': _e() }],
        'scale-y': [{ 'scale-y': _e() }],
        'scale-z': [{ 'scale-z': _e() }],
        'scale-3d': ['scale-3d'],
        skew: [{ skew: lt() }],
        'skew-x': [{ 'skew-x': lt() }],
        'skew-y': [{ 'skew-y': lt() }],
        transform: [{ transform: [re, ne, '', 'none', 'gpu', 'cpu'] }],
        'transform-origin': [{ origin: ee() }],
        'transform-style': [{ transform: ['3d', 'flat'] }],
        translate: [{ translate: Je() }],
        'translate-x': [{ 'translate-x': Je() }],
        'translate-y': [{ 'translate-y': Je() }],
        'translate-z': [{ 'translate-z': Je() }],
        'translate-none': ['translate-none'],
        accent: [{ accent: C() }],
        appearance: [{ appearance: ['none', 'auto'] }],
        'caret-color': [{ caret: C() }],
        'color-scheme': [
          {
            scheme: [
              'normal',
              'dark',
              'light',
              'light-dark',
              'only-dark',
              'only-light',
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              'auto',
              'default',
              'pointer',
              'wait',
              'text',
              'move',
              'help',
              'not-allowed',
              'none',
              'context-menu',
              'progress',
              'cell',
              'crosshair',
              'vertical-text',
              'alias',
              'copy',
              'no-drop',
              'grab',
              'grabbing',
              'all-scroll',
              'col-resize',
              'row-resize',
              'n-resize',
              'e-resize',
              's-resize',
              'w-resize',
              'ne-resize',
              'nw-resize',
              'se-resize',
              'sw-resize',
              'ew-resize',
              'ns-resize',
              'nesw-resize',
              'nwse-resize',
              'zoom-in',
              'zoom-out',
              re,
              ne,
            ],
          },
        ],
        'field-sizing': [{ 'field-sizing': ['fixed', 'content'] }],
        'pointer-events': [{ 'pointer-events': ['auto', 'none'] }],
        resize: [{ resize: ['none', '', 'y', 'x'] }],
        'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
        'scroll-m': [{ 'scroll-m': V() }],
        'scroll-mx': [{ 'scroll-mx': V() }],
        'scroll-my': [{ 'scroll-my': V() }],
        'scroll-ms': [{ 'scroll-ms': V() }],
        'scroll-me': [{ 'scroll-me': V() }],
        'scroll-mt': [{ 'scroll-mt': V() }],
        'scroll-mr': [{ 'scroll-mr': V() }],
        'scroll-mb': [{ 'scroll-mb': V() }],
        'scroll-ml': [{ 'scroll-ml': V() }],
        'scroll-p': [{ 'scroll-p': V() }],
        'scroll-px': [{ 'scroll-px': V() }],
        'scroll-py': [{ 'scroll-py': V() }],
        'scroll-ps': [{ 'scroll-ps': V() }],
        'scroll-pe': [{ 'scroll-pe': V() }],
        'scroll-pt': [{ 'scroll-pt': V() }],
        'scroll-pr': [{ 'scroll-pr': V() }],
        'scroll-pb': [{ 'scroll-pb': V() }],
        'scroll-pl': [{ 'scroll-pl': V() }],
        'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
        'snap-stop': [{ snap: ['normal', 'always'] }],
        'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
        'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
        touch: [{ touch: ['auto', 'none', 'manipulation'] }],
        'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
        'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
        'touch-pz': ['touch-pinch-zoom'],
        select: [{ select: ['none', 'text', 'all', 'auto'] }],
        'will-change': [
          {
            'will-change': ['auto', 'scroll', 'contents', 'transform', re, ne],
          },
        ],
        fill: [{ fill: ['none', ...C()] }],
        'stroke-w': [{ stroke: [xe, Lo, cr, ca] }],
        stroke: [{ stroke: ['none', ...C()] }],
        'forced-color-adjust': [{ 'forced-color-adjust': ['auto', 'none'] }],
      },
      conflictingClassGroups: {
        overflow: ['overflow-x', 'overflow-y'],
        overscroll: ['overscroll-x', 'overscroll-y'],
        inset: [
          'inset-x',
          'inset-y',
          'start',
          'end',
          'top',
          'right',
          'bottom',
          'left',
        ],
        'inset-x': ['right', 'left'],
        'inset-y': ['top', 'bottom'],
        flex: ['basis', 'grow', 'shrink'],
        gap: ['gap-x', 'gap-y'],
        p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
        px: ['pr', 'pl'],
        py: ['pt', 'pb'],
        m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
        mx: ['mr', 'ml'],
        my: ['mt', 'mb'],
        size: ['w', 'h'],
        'font-size': ['leading'],
        'fvn-normal': [
          'fvn-ordinal',
          'fvn-slashed-zero',
          'fvn-figure',
          'fvn-spacing',
          'fvn-fraction',
        ],
        'fvn-ordinal': ['fvn-normal'],
        'fvn-slashed-zero': ['fvn-normal'],
        'fvn-figure': ['fvn-normal'],
        'fvn-spacing': ['fvn-normal'],
        'fvn-fraction': ['fvn-normal'],
        'line-clamp': ['display', 'overflow'],
        rounded: [
          'rounded-s',
          'rounded-e',
          'rounded-t',
          'rounded-r',
          'rounded-b',
          'rounded-l',
          'rounded-ss',
          'rounded-se',
          'rounded-ee',
          'rounded-es',
          'rounded-tl',
          'rounded-tr',
          'rounded-br',
          'rounded-bl',
        ],
        'rounded-s': ['rounded-ss', 'rounded-es'],
        'rounded-e': ['rounded-se', 'rounded-ee'],
        'rounded-t': ['rounded-tl', 'rounded-tr'],
        'rounded-r': ['rounded-tr', 'rounded-br'],
        'rounded-b': ['rounded-br', 'rounded-bl'],
        'rounded-l': ['rounded-tl', 'rounded-bl'],
        'border-spacing': ['border-spacing-x', 'border-spacing-y'],
        'border-w': [
          'border-w-x',
          'border-w-y',
          'border-w-s',
          'border-w-e',
          'border-w-t',
          'border-w-r',
          'border-w-b',
          'border-w-l',
        ],
        'border-w-x': ['border-w-r', 'border-w-l'],
        'border-w-y': ['border-w-t', 'border-w-b'],
        'border-color': [
          'border-color-x',
          'border-color-y',
          'border-color-s',
          'border-color-e',
          'border-color-t',
          'border-color-r',
          'border-color-b',
          'border-color-l',
        ],
        'border-color-x': ['border-color-r', 'border-color-l'],
        'border-color-y': ['border-color-t', 'border-color-b'],
        translate: ['translate-x', 'translate-y', 'translate-none'],
        'translate-none': [
          'translate',
          'translate-x',
          'translate-y',
          'translate-z',
        ],
        'scroll-m': [
          'scroll-mx',
          'scroll-my',
          'scroll-ms',
          'scroll-me',
          'scroll-mt',
          'scroll-mr',
          'scroll-mb',
          'scroll-ml',
        ],
        'scroll-mx': ['scroll-mr', 'scroll-ml'],
        'scroll-my': ['scroll-mt', 'scroll-mb'],
        'scroll-p': [
          'scroll-px',
          'scroll-py',
          'scroll-ps',
          'scroll-pe',
          'scroll-pt',
          'scroll-pr',
          'scroll-pb',
          'scroll-pl',
        ],
        'scroll-px': ['scroll-pr', 'scroll-pl'],
        'scroll-py': ['scroll-pt', 'scroll-pb'],
        touch: ['touch-x', 'touch-y', 'touch-pz'],
        'touch-x': ['touch'],
        'touch-y': ['touch'],
        'touch-pz': ['touch'],
      },
      conflictingClassGroupModifiers: { 'font-size': ['leading'] },
      orderSensitiveModifiers: [
        '*',
        '**',
        'after',
        'backdrop',
        'before',
        'details-content',
        'file',
        'first-letter',
        'first-line',
        'marker',
        'placeholder',
        'selection',
      ],
    };
  },
  $y = Sy(Uy);
function yl(...o) {
  return $y(Ff(o));
}
function Wy({ delayDuration: o = 0, ...i }) {
  return v.jsx(ny, {
    'data-loc': 'client\\src\\components\\ui\\tooltip.tsx:11',
    'data-slot': 'tooltip-provider',
    delayDuration: o,
    ...i,
  });
}
var Gy = Symbol.for('react.lazy'),
  cl = rf[' use '.trim().toString()];
function Yy(o) {
  return typeof o == 'object' && o !== null && 'then' in o;
}
function Jf(o) {
  return (
    o != null &&
    typeof o == 'object' &&
    '$$typeof' in o &&
    o.$$typeof === Gy &&
    '_payload' in o &&
    Yy(o._payload)
  );
}
function Qy(o) {
  const i = Xy(o),
    l = P.forwardRef((c, u) => {
      let { children: f, ...p } = c;
      Jf(f) && typeof cl == 'function' && (f = cl(f._payload));
      const x = P.Children.toArray(f),
        h = x.find(Zy);
      if (h) {
        const g = h.props.children,
          w = x.map((m) =>
            m === h
              ? P.Children.count(g) > 1
                ? P.Children.only(null)
                : P.isValidElement(g)
                  ? g.props.children
                  : null
              : m,
          );
        return v.jsx(i, {
          ...p,
          ref: u,
          children: P.isValidElement(g) ? P.cloneElement(g, void 0, w) : null,
        });
      }
      return v.jsx(i, { ...p, ref: u, children: f });
    });
  return ((l.displayName = `${o}.Slot`), l);
}
var Ky = Qy('Slot');
function Xy(o) {
  const i = P.forwardRef((l, c) => {
    let { children: u, ...f } = l;
    if (
      (Jf(u) && typeof cl == 'function' && (u = cl(u._payload)),
      P.isValidElement(u))
    ) {
      const p = e0(u),
        x = Jy(f, u.props);
      return (
        u.type !== P.Fragment && (x.ref = c ? ba(c, p) : p),
        P.cloneElement(u, x)
      );
    }
    return P.Children.count(u) > 1 ? P.Children.only(null) : null;
  });
  return ((i.displayName = `${o}.SlotClone`), i);
}
var qy = Symbol('radix.slottable');
function Zy(o) {
  return (
    P.isValidElement(o) &&
    typeof o.type == 'function' &&
    '__radixId' in o.type &&
    o.type.__radixId === qy
  );
}
function Jy(o, i) {
  const l = { ...i };
  for (const c in i) {
    const u = o[c],
      f = i[c];
    /^on[A-Z]/.test(c)
      ? u && f
        ? (l[c] = (...x) => {
            const h = f(...x);
            return (u(...x), h);
          })
        : u && (l[c] = u)
      : c === 'style'
        ? (l[c] = { ...u, ...f })
        : c === 'className' && (l[c] = [u, f].filter(Boolean).join(' '));
  }
  return { ...o, ...l };
}
function e0(o) {
  let i = Object.getOwnPropertyDescriptor(o.props, 'ref')?.get,
    l = i && 'isReactWarning' in i && i.isReactWarning;
  return l
    ? o.ref
    : ((i = Object.getOwnPropertyDescriptor(o, 'ref')?.get),
      (l = i && 'isReactWarning' in i && i.isReactWarning),
      l ? o.props.ref : o.props.ref || o.ref);
}
const Vd = (o) => (typeof o == 'boolean' ? `${o}` : o === 0 ? '0' : o),
  Ud = Ff,
  t0 = (o, i) => (l) => {
    var c;
    if (i?.variants == null) return Ud(o, l?.class, l?.className);
    const { variants: u, defaultVariants: f } = i,
      p = Object.keys(u).map((g) => {
        const w = l?.[g],
          m = f?.[g];
        if (w === null) return null;
        const E = Vd(w) || Vd(m);
        return u[g][E];
      }),
      x =
        l &&
        Object.entries(l).reduce((g, w) => {
          let [m, E] = w;
          return (E === void 0 || (g[m] = E), g);
        }, {}),
      h =
        i == null || (c = i.compoundVariants) === null || c === void 0
          ? void 0
          : c.reduce((g, w) => {
              let { class: m, className: E, ..._ } = w;
              return Object.entries(_).every((T) => {
                let [O, L] = T;
                return Array.isArray(L)
                  ? L.includes({ ...f, ...x }[O])
                  : { ...f, ...x }[O] === L;
              })
                ? [...g, m, E]
                : g;
            }, []);
    return Ud(o, p, h, l?.class, l?.className);
  },
  n0 = t0(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    {
      variants: {
        variant: {
          default: 'bg-primary text-primary-foreground hover:bg-primary/90',
          destructive:
            'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
          outline:
            'border bg-transparent shadow-xs hover:bg-accent dark:bg-transparent dark:border-input dark:hover:bg-input/50',
          secondary:
            'bg-secondary text-secondary-foreground hover:bg-secondary/80',
          ghost: 'hover:bg-accent dark:hover:bg-accent/50',
          link: 'text-primary underline-offset-4 hover:underline',
        },
        size: {
          default: 'h-9 px-4 py-2 has-[>svg]:px-3',
          sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
          lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
          icon: 'size-9',
          'icon-sm': 'size-8',
          'icon-lg': 'size-10',
        },
      },
      defaultVariants: { variant: 'default', size: 'default' },
    },
  );
function ct({ className: o, variant: i, size: l, asChild: c = !1, ...u }) {
  const f = c ? Ky : 'button';
  return v.jsx(f, {
    'data-loc': 'client\\src\\components\\ui\\button.tsx:52',
    'data-slot': 'button',
    className: yl(n0({ variant: i, size: l, className: o })),
    ...u,
  });
}
function ep({ className: o, ...i }) {
  return v.jsx('div', {
    'data-loc': 'client\\src\\components\\ui\\card.tsx:7',
    'data-slot': 'card',
    className: yl(
      'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm',
      o,
    ),
    ...i,
  });
}
function r0({ className: o, ...i }) {
  return v.jsx('div', {
    'data-loc': 'client\\src\\components\\ui\\card.tsx:66',
    'data-slot': 'card-content',
    className: yl('px-6', o),
    ...i,
  });
}
const o0 = (o) => o.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  tp = (...o) => o.filter((i, l, c) => !!i && c.indexOf(i) === l).join(' ');
var s0 = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};
const l0 = P.forwardRef(
  (
    {
      color: o = 'currentColor',
      size: i = 24,
      strokeWidth: l = 2,
      absoluteStrokeWidth: c,
      className: u = '',
      children: f,
      iconNode: p,
      ...x
    },
    h,
  ) =>
    P.createElement(
      'svg',
      {
        ref: h,
        ...s0,
        width: i,
        height: i,
        stroke: o,
        strokeWidth: c ? (Number(l) * 24) / Number(i) : l,
        className: tp('lucide', u),
        ...x,
      },
      [
        ...p.map(([g, w]) => P.createElement(g, w)),
        ...(Array.isArray(f) ? f : [f]),
      ],
    ),
);
const st = (o, i) => {
  const l = P.forwardRef(({ className: c, ...u }, f) =>
    P.createElement(l0, {
      ref: f,
      iconNode: i,
      className: tp(`lucide-${o0(o)}`, c),
      ...u,
    }),
  );
  return ((l.displayName = `${o}`), l);
};
const i0 = st('ChevronDown', [['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }]]);
const a0 = st('CircleAlert', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['line', { x1: '12', x2: '12', y1: '8', y2: '12', key: '1pkeuh' }],
  ['line', { x1: '12', x2: '12.01', y1: '16', y2: '16', key: '4dfq90' }],
]);
const $d = st('Code', [
  ['polyline', { points: '16 18 22 12 16 6', key: 'z7tu5w' }],
  ['polyline', { points: '8 6 2 12 8 18', key: '1eg1df' }],
]);
const c0 = st('ExternalLink', [
  ['path', { d: 'M15 3h6v6', key: '1q9fwt' }],
  ['path', { d: 'M10 14 21 3', key: 'gplh6r' }],
  [
    'path',
    {
      d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6',
      key: 'a6xqqp',
    },
  ],
]);
const nl = st('Gamepad2', [
  ['line', { x1: '6', x2: '10', y1: '11', y2: '11', key: '1gktln' }],
  ['line', { x1: '8', x2: '8', y1: '9', y2: '13', key: 'qnk9ow' }],
  ['line', { x1: '15', x2: '15.01', y1: '12', y2: '12', key: 'krot7o' }],
  ['line', { x1: '18', x2: '18.01', y1: '10', y2: '10', key: '1lcuu1' }],
  [
    'path',
    {
      d: 'M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z',
      key: 'mfqc10',
    },
  ],
]);
const Wd = st('Github', [
  [
    'path',
    {
      d: 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4',
      key: 'tonef',
    },
  ],
  ['path', { d: 'M9 18c-4.51 2-5-2-7-2', key: '9comsn' }],
]);
const u0 = st('House', [
  ['path', { d: 'M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8', key: '5wwlr5' }],
  [
    'path',
    {
      d: 'M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
      key: '1d0kgt',
    },
  ],
]);
const d0 = st('Instagram', [
  [
    'rect',
    {
      width: '20',
      height: '20',
      x: '2',
      y: '2',
      rx: '5',
      ry: '5',
      key: '2e1cvw',
    },
  ],
  [
    'path',
    { d: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z', key: '9exkf1' },
  ],
  ['line', { x1: '17.5', x2: '17.51', y1: '6.5', y2: '6.5', key: 'r4j83e' }],
]);
const Gd = st('Layers', [
  [
    'path',
    {
      d: 'm12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z',
      key: '8b97xw',
    },
  ],
  [
    'path',
    { d: 'm22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65', key: 'dd6zsq' },
  ],
  [
    'path',
    { d: 'm22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65', key: 'ep9fru' },
  ],
]);
const f0 = st('Linkedin', [
  [
    'path',
    {
      d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z',
      key: 'c2jq9f',
    },
  ],
  ['rect', { width: '4', height: '12', x: '2', y: '9', key: 'mk3on5' }],
  ['circle', { cx: '4', cy: '4', r: '2', key: 'bt5ra8' }],
]);
const p0 = st('Mail', [
  [
    'rect',
    { width: '20', height: '16', x: '2', y: '4', rx: '2', key: '18n3k1' },
  ],
  ['path', { d: 'm22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7', key: '1ocrg3' }],
]);
const m0 = st('Menu', [
  ['line', { x1: '4', x2: '20', y1: '12', y2: '12', key: '1e0a9i' }],
  ['line', { x1: '4', x2: '20', y1: '6', y2: '6', key: '1owob3' }],
  ['line', { x1: '4', x2: '20', y1: '18', y2: '18', key: 'yk5zj1' }],
]);
const h0 = st('MessageCircle', [
  ['path', { d: 'M7.9 20A9 9 0 1 0 4 16.1L2 22Z', key: 'vv11sd' }],
]);
const g0 = st('Play', [
  ['polygon', { points: '6 3 20 12 6 21 6 3', key: '1oa8hb' }],
]);
const v0 = st('RotateCcw', [
  [
    'path',
    { d: 'M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8', key: '1357e3' },
  ],
  ['path', { d: 'M3 3v5h5', key: '1xhq8a' }],
]);
const y0 = st('TriangleAlert', [
  [
    'path',
    {
      d: 'm21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3',
      key: 'wmoenq',
    },
  ],
  ['path', { d: 'M12 9v4', key: 'juzpu7' }],
  ['path', { d: 'M12 17h.01', key: 'p32p05' }],
]);
function x0(o, i) {
  if (o instanceof RegExp) return { keys: !1, pattern: o };
  var l,
    c,
    u,
    f,
    p = [],
    x = '',
    h = o.split('/');
  for (h[0] || h.shift(); (u = h.shift()); )
    ((l = u[0]),
      l === '*'
        ? (p.push(l), (x += u[1] === '?' ? '(?:/(.*))?' : '/(.*)'))
        : l === ':'
          ? ((c = u.indexOf('?', 1)),
            (f = u.indexOf('.', 1)),
            p.push(u.substring(1, ~c ? c : ~f ? f : u.length)),
            (x += ~c && !~f ? '(?:/([^/]+?))?' : '/([^/]+?)'),
            ~f && (x += (~c ? '?' : '') + '\\' + u.substring(f)))
          : (x += '/' + u));
  return {
    keys: p,
    pattern: new RegExp('^' + x + (i ? '(?=$|/)' : '/?$'), 'i'),
  };
}
var ua = { exports: {} },
  da = {};
var Yd;
function w0() {
  if (Yd) return da;
  Yd = 1;
  var o = ul();
  function i(m, E) {
    return (m === E && (m !== 0 || 1 / m === 1 / E)) || (m !== m && E !== E);
  }
  var l = typeof Object.is == 'function' ? Object.is : i,
    c = o.useState,
    u = o.useEffect,
    f = o.useLayoutEffect,
    p = o.useDebugValue;
  function x(m, E) {
    var _ = E(),
      T = c({ inst: { value: _, getSnapshot: E } }),
      O = T[0].inst,
      L = T[1];
    return (
      f(
        function () {
          ((O.value = _), (O.getSnapshot = E), h(O) && L({ inst: O }));
        },
        [m, _, E],
      ),
      u(
        function () {
          return (
            h(O) && L({ inst: O }),
            m(function () {
              h(O) && L({ inst: O });
            })
          );
        },
        [m],
      ),
      p(_),
      _
    );
  }
  function h(m) {
    var E = m.getSnapshot;
    m = m.value;
    try {
      var _ = E();
      return !l(m, _);
    } catch {
      return !0;
    }
  }
  function g(m, E) {
    return E();
  }
  var w =
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
      ? g
      : x;
  return (
    (da.useSyncExternalStore =
      o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : w),
    da
  );
}
var Qd;
function k0() {
  return (Qd || ((Qd = 1), (ua.exports = w0())), ua.exports);
}
var b0 = k0();
const S0 = rf.useInsertionEffect,
  E0 =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  C0 = E0 ? P.useLayoutEffect : P.useEffect,
  N0 = S0 || C0,
  np = (o) => {
    const i = P.useRef([o, (...l) => i[0](...l)]).current;
    return (
      N0(() => {
        i[0] = o;
      }),
      i[1]
    );
  },
  P0 = 'popstate',
  Oa = 'pushState',
  La = 'replaceState',
  j0 = 'hashchange',
  Kd = [P0, Oa, La, j0],
  _0 = (o) => {
    for (const i of Kd) addEventListener(i, o);
    return () => {
      for (const i of Kd) removeEventListener(i, o);
    };
  },
  rp = (o, i) => b0.useSyncExternalStore(_0, o, i),
  R0 = () => location.search,
  T0 = ({ ssrSearch: o = '' } = {}) => rp(R0, () => o),
  Xd = () => location.pathname,
  O0 = ({ ssrPath: o } = {}) => rp(Xd, o ? () => o : Xd),
  L0 = (o, { replace: i = !1, state: l = null } = {}) =>
    history[i ? La : Oa](l, '', o),
  A0 = (o = {}) => [O0(o), L0],
  qd = Symbol.for('wouter_v3');
if (typeof history < 'u' && typeof window[qd] > 'u') {
  for (const o of [Oa, La]) {
    const i = history[o];
    history[o] = function () {
      const l = i.apply(this, arguments),
        c = new Event(o);
      return ((c.arguments = arguments), dispatchEvent(c), l);
    };
  }
  Object.defineProperty(window, qd, { value: !0 });
}
const z0 = (o, i) =>
    i.toLowerCase().indexOf(o.toLowerCase())
      ? '~' + i
      : i.slice(o.length) || '/',
  op = (o = '') => (o === '/' ? '' : o),
  M0 = (o, i) => (o[0] === '~' ? o.slice(1) : op(i) + o),
  D0 = (o = '', i) => z0(Zd(op(o)), Zd(i)),
  Zd = (o) => {
    try {
      return decodeURI(o);
    } catch {
      return o;
    }
  },
  sp = {
    hook: A0,
    searchHook: T0,
    parser: x0,
    base: '',
    ssrPath: void 0,
    ssrSearch: void 0,
    ssrContext: void 0,
    hrefs: (o) => o,
  },
  lp = P.createContext(sp),
  Ho = () => P.useContext(lp),
  ip = {},
  ap = P.createContext(ip),
  H0 = () => P.useContext(ap),
  xl = (o) => {
    const [i, l] = o.hook(o);
    return [D0(o.base, i), np((c, u) => l(M0(c, o.base), u))];
  },
  I0 = () => xl(Ho()),
  cp = (o, i, l, c) => {
    const { pattern: u, keys: f } =
        i instanceof RegExp ? { keys: !1, pattern: i } : o(i || '*', c),
      p = u.exec(l) || [],
      [x, ...h] = p;
    return x !== void 0
      ? [
          !0,
          (() => {
            const g =
              f !== !1
                ? Object.fromEntries(f.map((m, E) => [m, h[E]]))
                : p.groups;
            let w = { ...h };
            return (g && Object.assign(w, g), w);
          })(),
          ...(c ? [x] : []),
        ]
      : [!1, null];
  },
  up = ({ children: o, ...i }) => {
    const l = Ho(),
      c = i.hook ? sp : l;
    let u = c;
    const [f, p] = i.ssrPath?.split('?') ?? [];
    (p && ((i.ssrSearch = p), (i.ssrPath = f)),
      (i.hrefs = i.hrefs ?? i.hook?.hrefs));
    let x = P.useRef({}),
      h = x.current,
      g = h;
    for (let w in c) {
      const m = w === 'base' ? c[w] + (i[w] || '') : i[w] || c[w];
      (h === g && m !== g[w] && (x.current = g = { ...g }),
        (g[w] = m),
        (m !== c[w] || m !== u[w]) && (u = g));
    }
    return P.createElement(lp.Provider, { value: u, children: o });
  },
  Jd = ({ children: o, component: i }, l) =>
    i ? P.createElement(i, { params: l }) : typeof o == 'function' ? o(l) : o,
  F0 = (o) => {
    let i = P.useRef(ip);
    const l = i.current;
    return (i.current =
      Object.keys(o).length !== Object.keys(l).length ||
      Object.entries(o).some(([c, u]) => u !== l[c])
        ? o
        : l);
  },
  fa = ({ path: o, nest: i, match: l, ...c }) => {
    const u = Ho(),
      [f] = xl(u),
      [p, x, h] = l ?? cp(u.parser, o, f, i),
      g = F0({ ...H0(), ...x });
    if (!p) return null;
    const w = h ? P.createElement(up, { base: h }, Jd(c, g)) : Jd(c, g);
    return P.createElement(ap.Provider, { value: g, children: w });
  };
P.forwardRef((o, i) => {
  const l = Ho(),
    [c, u] = xl(l),
    {
      to: f = '',
      href: p = f,
      onClick: x,
      asChild: h,
      children: g,
      className: w,
      replace: m,
      state: E,
      ..._
    } = o,
    T = np((L) => {
      L.ctrlKey ||
        L.metaKey ||
        L.altKey ||
        L.shiftKey ||
        L.button !== 0 ||
        (x?.(L), L.defaultPrevented || (L.preventDefault(), u(p, o)));
    }),
    O = l.hrefs(p[0] === '~' ? p.slice(1) : l.base + p, l);
  return h && P.isValidElement(g)
    ? P.cloneElement(g, { onClick: T, href: O })
    : P.createElement('a', {
        ..._,
        onClick: T,
        href: O,
        className: w?.call ? w(c === p) : w,
        children: g,
        ref: i,
      });
});
const dp = (o) =>
    Array.isArray(o)
      ? o.flatMap((i) => dp(i && i.type === P.Fragment ? i.props.children : i))
      : [o],
  B0 = ({ children: o, location: i }) => {
    const l = Ho(),
      [c] = xl(l);
    for (const u of dp(o)) {
      let f = 0;
      if (
        P.isValidElement(u) &&
        (f = cp(l.parser, u.props.path, i || c, u.props.nest))[0]
      )
        return P.cloneElement(u, { match: f });
    }
    return null;
  };
function ef() {
  const [, o] = I0(),
    i = () => {
      o('/');
    };
  return v.jsx('div', {
    'data-loc': 'client\\src\\pages\\NotFound.tsx:14',
    className:
      'min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100',
    children: v.jsx(ep, {
      'data-loc': 'client\\src\\pages\\NotFound.tsx:15',
      className:
        'w-full max-w-lg mx-4 shadow-lg border-0 bg-white/80 backdrop-blur-sm',
      children: v.jsxs(r0, {
        'data-loc': 'client\\src\\pages\\NotFound.tsx:16',
        className: 'pt-8 pb-8 text-center',
        children: [
          v.jsx('div', {
            'data-loc': 'client\\src\\pages\\NotFound.tsx:17',
            className: 'flex justify-center mb-6',
            children: v.jsxs('div', {
              'data-loc': 'client\\src\\pages\\NotFound.tsx:18',
              className: 'relative',
              children: [
                v.jsx('div', {
                  'data-loc': 'client\\src\\pages\\NotFound.tsx:19',
                  className:
                    'absolute inset-0 bg-red-100 rounded-full animate-pulse',
                }),
                v.jsx(a0, {
                  'data-loc': 'client\\src\\pages\\NotFound.tsx:20',
                  className: 'relative h-16 w-16 text-red-500',
                }),
              ],
            }),
          }),
          v.jsx('h1', {
            'data-loc': 'client\\src\\pages\\NotFound.tsx:24',
            className: 'text-4xl font-bold text-slate-900 mb-2',
            children: '404',
          }),
          v.jsx('h2', {
            'data-loc': 'client\\src\\pages\\NotFound.tsx:26',
            className: 'text-xl font-semibold text-slate-700 mb-4',
            children: 'Page Not Found',
          }),
          v.jsxs('p', {
            'data-loc': 'client\\src\\pages\\NotFound.tsx:30',
            className: 'text-slate-600 mb-8 leading-relaxed',
            children: [
              "Sorry, the page you are looking for doesn't exist.",
              v.jsx('br', {
                'data-loc': 'client\\src\\pages\\NotFound.tsx:32',
              }),
              'It may have been moved or deleted.',
            ],
          }),
          v.jsx('div', {
            'data-loc': 'client\\src\\pages\\NotFound.tsx:36',
            className: 'flex flex-col sm:flex-row gap-3 justify-center',
            children: v.jsxs(ct, {
              'data-loc': 'client\\src\\pages\\NotFound.tsx:37',
              onClick: i,
              className:
                'bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg',
              children: [
                v.jsx(u0, {
                  'data-loc': 'client\\src\\pages\\NotFound.tsx:41',
                  className: 'w-4 h-4 mr-2',
                }),
                'Go Home',
              ],
            }),
          }),
        ],
      }),
    }),
  });
}
class V0 extends P.Component {
  constructor(i) {
    (super(i), (this.state = { hasError: !1, error: null }));
  }
  static getDerivedStateFromError(i) {
    return { hasError: !0, error: i };
  }
  render() {
    return this.state.hasError
      ? v.jsx('div', {
          'data-loc': 'client\\src\\components\\ErrorBoundary.tsx:27',
          className:
            'flex items-center justify-center min-h-screen p-8 bg-background',
          children: v.jsxs('div', {
            'data-loc': 'client\\src\\components\\ErrorBoundary.tsx:28',
            className: 'flex flex-col items-center w-full max-w-2xl p-8',
            children: [
              v.jsx(y0, {
                'data-loc': 'client\\src\\components\\ErrorBoundary.tsx:29',
                size: 48,
                className: 'text-destructive mb-6 flex-shrink-0',
              }),
              v.jsx('h2', {
                'data-loc': 'client\\src\\components\\ErrorBoundary.tsx:34',
                className: 'text-xl mb-4',
                children: 'An unexpected error occurred.',
              }),
              v.jsx('div', {
                'data-loc': 'client\\src\\components\\ErrorBoundary.tsx:36',
                className: 'p-4 w-full rounded bg-muted overflow-auto mb-6',
                children: v.jsx('pre', {
                  'data-loc': 'client\\src\\components\\ErrorBoundary.tsx:37',
                  className:
                    'text-sm text-muted-foreground whitespace-break-spaces',
                  children: this.state.error?.stack,
                }),
              }),
              v.jsxs('button', {
                'data-loc': 'client\\src\\components\\ErrorBoundary.tsx:42',
                onClick: () => window.location.reload(),
                className: yl(
                  'flex items-center gap-2 px-4 py-2 rounded-lg',
                  'bg-primary text-primary-foreground',
                  'hover:opacity-90 cursor-pointer',
                ),
                children: [
                  v.jsx(v0, {
                    'data-loc': 'client\\src\\components\\ErrorBoundary.tsx:50',
                    size: 16,
                  }),
                  'Reload Page',
                ],
              }),
            ],
          }),
        })
      : this.props.children;
  }
}
const U0 = P.createContext(void 0);
function $0({ children: o, defaultTheme: i = 'light', switchable: l = !1 }) {
  const [c, u] = P.useState(() => (l && localStorage.getItem('theme')) || i);
  P.useEffect(() => {
    const p = document.documentElement;
    (c === 'dark' ? p.classList.add('dark') : p.classList.remove('dark'),
      l && localStorage.setItem('theme', c));
  }, [c, l]);
  const f = l
    ? () => {
        u((p) => (p === 'light' ? 'dark' : 'light'));
      }
    : void 0;
  return v.jsx(U0.Provider, {
    'data-loc': 'client\\src\\contexts\\ThemeContext.tsx:52',
    value: { theme: c, toggleTheme: f, switchable: l },
    children: o,
  });
}
function W0({ onNavigate: o }) {
  const [i, l] = P.useState(!1);
  return v.jsx('header', {
    'data-loc': 'client\\src\\components\\Header.tsx:13',
    className:
      'fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/50',
    children: v.jsxs('div', {
      'data-loc': 'client\\src\\components\\Header.tsx:14',
      className: 'container mx-auto px-4 sm:px-6 lg:px-8',
      children: [
        v.jsxs('div', {
          'data-loc': 'client\\src\\components\\Header.tsx:15',
          className: 'flex items-center justify-between h-16',
          children: [
            v.jsxs('button', {
              'data-loc': 'client\\src\\components\\Header.tsx:16',
              onClick: () => o('home'),
              className:
                'text-xl font-bold text-foreground hover:text-primary transition-colors',
              children: [
                'Matheus ',
                v.jsx('span', {
                  'data-loc': 'client\\src\\components\\Header.tsx:20',
                  className: 'text-primary',
                  children: 'Lopes',
                }),
              ],
            }),
            v.jsxs('nav', {
              'data-loc': 'client\\src\\components\\Header.tsx:24',
              className: 'hidden md:flex items-center gap-2',
              children: [
                v.jsx(ct, {
                  'data-loc': 'client\\src\\components\\Header.tsx:25',
                  variant: 'ghost',
                  onClick: () => o('home'),
                  className:
                    'text-foreground hover:text-primary hover:bg-primary/10',
                  children: 'Início',
                }),
                v.jsx(ct, {
                  'data-loc': 'client\\src\\components\\Header.tsx:32',
                  variant: 'ghost',
                  onClick: () => o('about'),
                  className:
                    'text-foreground hover:text-primary hover:bg-primary/10',
                  children: 'Sobre',
                }),
                v.jsx(ct, {
                  'data-loc': 'client\\src\\components\\Header.tsx:39',
                  variant: 'ghost',
                  onClick: () => o('projects'),
                  className:
                    'text-foreground hover:text-primary hover:bg-primary/10',
                  children: 'Projetos',
                }),
                v.jsx(ct, {
                  'data-loc': 'client\\src\\components\\Header.tsx:46',
                  variant: 'ghost',
                  onClick: () => o('contact'),
                  className:
                    'text-foreground hover:text-primary hover:bg-primary/10',
                  children: 'Contato',
                }),
              ],
            }),
            v.jsx(ct, {
              'data-loc': 'client\\src\\components\\Header.tsx:56',
              variant: 'ghost',
              size: 'icon',
              className: 'md:hidden',
              onClick: () => l(!i),
              children: v.jsx(m0, {
                'data-loc': 'client\\src\\components\\Header.tsx:62',
                className: 'w-6 h-6',
              }),
            }),
          ],
        }),
        i &&
          v.jsxs('nav', {
            'data-loc': 'client\\src\\components\\Header.tsx:68',
            className: 'md:hidden py-4 space-y-2 border-t border-border/50',
            children: [
              v.jsx(ct, {
                'data-loc': 'client\\src\\components\\Header.tsx:69',
                variant: 'ghost',
                onClick: () => {
                  (o('home'), l(!1));
                },
                className:
                  'w-full justify-start text-foreground hover:text-primary hover:bg-primary/10',
                children: 'Início',
              }),
              v.jsx(ct, {
                'data-loc': 'client\\src\\components\\Header.tsx:79',
                variant: 'ghost',
                onClick: () => {
                  (o('about'), l(!1));
                },
                className:
                  'w-full justify-start text-foreground hover:text-primary hover:bg-primary/10',
                children: 'Sobre',
              }),
              v.jsx(ct, {
                'data-loc': 'client\\src\\components\\Header.tsx:89',
                variant: 'ghost',
                onClick: () => {
                  (o('projects'), l(!1));
                },
                className:
                  'w-full justify-start text-foreground hover:text-primary hover:bg-primary/10',
                children: 'Projetos',
              }),
              v.jsx(ct, {
                'data-loc': 'client\\src\\components\\Header.tsx:99',
                variant: 'ghost',
                onClick: () => {
                  (o('contact'), l(!1));
                },
                className:
                  'w-full justify-start text-foreground hover:text-primary hover:bg-primary/10',
                children: 'Contato',
              }),
            ],
          }),
      ],
    }),
  });
}
function pa({
  title: o,
  description: i,
  role: l,
  image: c,
  tags: u,
  link: f,
  status: p = 'Concluído',
}) {
  return v.jsxs(ep, {
    'data-loc': 'client\\src\\components\\ProjectCard.tsx:25',
    className:
      'h-full bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-border/50 overflow-hidden group hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500',
    children: [
      v.jsxs('div', {
        'data-loc': 'client\\src\\components\\ProjectCard.tsx:26',
        className: 'relative h-64 overflow-hidden',
        children: [
          v.jsx('img', {
            'data-loc': 'client\\src\\components\\ProjectCard.tsx:27',
            src: c,
            alt: o,
            className:
              'w-full h-full object-cover group-hover:scale-110 transition-transform duration-700',
          }),
          v.jsx('div', {
            'data-loc': 'client\\src\\components\\ProjectCard.tsx:32',
            className:
              'absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity',
          }),
          p &&
            v.jsx('div', {
              'data-loc': 'client\\src\\components\\ProjectCard.tsx:34',
              className:
                'absolute top-4 right-4 bg-background/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold text-foreground border border-primary/30 shadow-lg',
              children: p,
            }),
          v.jsx('div', {
            'data-loc': 'client\\src\\components\\ProjectCard.tsx:38',
            className: 'absolute bottom-4 left-4 right-4',
            children: v.jsx('h3', {
              'data-loc': 'client\\src\\components\\ProjectCard.tsx:39',
              className: 'text-2xl font-bold text-white drop-shadow-lg',
              children: o,
            }),
          }),
        ],
      }),
      v.jsxs('div', {
        'data-loc': 'client\\src\\components\\ProjectCard.tsx:43',
        className: 'p-6 space-y-4',
        children: [
          v.jsx('p', {
            'data-loc': 'client\\src\\components\\ProjectCard.tsx:44',
            className:
              'text-muted-foreground text-sm leading-relaxed line-clamp-3',
            children: i,
          }),
          v.jsxs('div', {
            'data-loc': 'client\\src\\components\\ProjectCard.tsx:48',
            className: 'flex items-center gap-2 text-sm',
            children: [
              v.jsx('span', {
                'data-loc': 'client\\src\\components\\ProjectCard.tsx:49',
                className: 'font-semibold text-primary',
                children: 'Função:',
              }),
              v.jsx('span', {
                'data-loc': 'client\\src\\components\\ProjectCard.tsx:50',
                className: 'text-foreground',
                children: l,
              }),
            ],
          }),
          v.jsx('div', {
            'data-loc': 'client\\src\\components\\ProjectCard.tsx:53',
            className: 'flex flex-wrap gap-2',
            children: u.map((x, h) =>
              v.jsx(
                'span',
                {
                  'data-loc': 'client\\src\\components\\ProjectCard.tsx:55',
                  className:
                    'px-3 py-1 text-xs font-medium bg-primary/10 border border-primary/30 rounded-full text-primary hover:bg-primary/20 transition-colors',
                  children: x,
                },
                h,
              ),
            ),
          }),
          v.jsxs('div', {
            'data-loc': 'client\\src\\components\\ProjectCard.tsx:64',
            className: 'flex gap-3 pt-2',
            children: [
              f &&
                v.jsxs(ct, {
                  'data-loc': 'client\\src\\components\\ProjectCard.tsx:66',
                  variant: 'default',
                  size: 'sm',
                  className:
                    'bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg hover:shadow-primary/20 transition-all',
                  onClick: () => window.open(f, '_blank'),
                  children: [
                    v.jsx(c0, {
                      'data-loc': 'client\\src\\components\\ProjectCard.tsx:72',
                      className: 'w-4 h-4 mr-2',
                    }),
                    'Acessar',
                  ],
                }),
              v.jsxs(ct, {
                'data-loc': 'client\\src\\components\\ProjectCard.tsx:76',
                variant: 'outline',
                size: 'sm',
                className:
                  'text-foreground border-border hover:bg-card/50 hover:border-primary/30',
                onClick: () => (f ? window.open(f, '_blank') : null),
                children: [
                  v.jsx(g0, {
                    'data-loc': 'client\\src\\components\\ProjectCard.tsx:81',
                    className: 'w-4 h-4 mr-2',
                  }),
                  'Play',
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function G0() {
  const o = P.useRef(null),
    i = P.useRef(null),
    l = P.useRef(null),
    c = P.useRef(null),
    [u, f] = P.useState(0);
  P.useEffect(() => {
    const g = () => f(window.scrollY);
    return (
      window.addEventListener('scroll', g),
      () => window.removeEventListener('scroll', g)
    );
  }, []);
  const p = (g) => {
      ({ home: c, about: o, projects: i, contact: l })[
        g
      ]?.current?.scrollIntoView({ behavior: 'smooth' });
    },
    x = [
{
    title: "Delirium",
    description:
    "Jogo de horror psicológico desenvolvido em TCC (Trabalho de Conclusão de Curso), explorando mecânicas de sanidade mental e atmosfera perturbadora.",
    role: "Lead Programmer",
    image: "/game-developer-portfolio/project1.png",
    tags: ["Unity", "C#", "Game Jam", "Psychological Horror"],
    link: "https://unholysaintstudios.itch.io/delirium",
    status: "Concluído",
    },
    {
    title: "Shadow of Memories",
    description:
    "Projeto desenvolvido em Game Jam, explorando mecânicas de memória e atmosfera sombria com narrativa não-linear.",
    role: "Gameplay Programmer",
    image: "/game-developer-portfolio/project2.png",
    tags: ["Unity", "C#", "Game Jam", "Narrative Design"],
    link: "https://uf-team.itch.io/sombra-das-memorias",
    status: "Concluído",
    },
    {
    title: "Visitors",
    description:
    "Jogo de horror independente focado em resolução de enigmas e mecânicas de sobrevivência em ambiente claustrofóbico.",
    role: "Gameplay Programmer",
    image: "/game-developer-portfolio/project3.jpg",
    tags: ["Unity", "C#", "VR"],
    link: "https://uf-team.itch.io/visitors",
    status: "Em Desenvolvimento",
    },
    {
    title: "Horror Story Folks",
    description:
      "Jogo de horror independente em desenvolvimento pela UF Team. Focado em resolução de enigmas e mecânicas de sobrevivência.",
    role: "Gameplay Programmer",
    image: "/game-developer-portfolio/project4.jpg",
    tags: ["Unity", "C#", "Horror", "Puzzle"],
    link: "https://uf-team.itch.io/horrorstoryfolks",
    status: "Em Desenvolvimento",
    },
    ],
    h = [
      'Unity 3D',
      'C#',
      '.NET',
      'Game Design',
      'Gameplay Programming',
      'Git',
    ];
  return v.jsxs('div', {
    'data-loc': 'client\\src\\pages\\Home.tsx:74',
    className: 'min-h-screen bg-background text-foreground overflow-x-hidden',
    children: [
      v.jsx(W0, {
        'data-loc': 'client\\src\\pages\\Home.tsx:75',
        onNavigate: p,
      }),
      v.jsxs('section', {
        'data-loc': 'client\\src\\pages\\Home.tsx:78',
        ref: c,
        className:
          'min-h-screen flex items-center relative px-4 overflow-hidden',
        style: {
          background:
            'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), linear-gradient(135deg, #000000 0%, #0a1929 100%)',
        },
        children: [
          v.jsxs('div', {
            'data-loc': 'client\\src\\pages\\Home.tsx:86',
            className: 'absolute inset-0 overflow-hidden pointer-events-none',
            children: [
              v.jsx('div', {
                'data-loc': 'client\\src\\pages\\Home.tsx:87',
                className:
                  'absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl',
                style: {
                  top: '20%',
                  left: '10%',
                  transform: `translateY(${u * 0.3}px)`,
                },
              }),
              v.jsx('div', {
                'data-loc': 'client\\src\\pages\\Home.tsx:95',
                className:
                  'absolute w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl',
                style: {
                  bottom: '10%',
                  right: '5%',
                  transform: `translateY(${u * -0.2}px)`,
                },
              }),
            ],
          }),
          v.jsxs('div', {
            'data-loc': 'client\\src\\pages\\Home.tsx:105',
            className:
              'container max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10',
            children: [
              v.jsxs('div', {
                'data-loc': 'client\\src\\pages\\Home.tsx:107',
                className: 'space-y-8 lg:pr-12',
                children: [
                  v.jsx('div', {
                    'data-loc': 'client\\src\\pages\\Home.tsx:108',
                    className: 'inline-block',
                    children: v.jsx('span', {
                      'data-loc': 'client\\src\\pages\\Home.tsx:109',
                      className:
                        'text-primary text-sm font-semibold tracking-wider uppercase border border-primary/30 px-4 py-2 rounded-full bg-primary/5 backdrop-blur-sm',
                      children: 'Game Developer Portfolio',
                    }),
                  }),
                  v.jsxs('h1', {
                    'data-loc': 'client\\src\\pages\\Home.tsx:114',
                    className:
                      'text-6xl md:text-7xl lg:text-8xl font-bold leading-tight',
                    children: [
                      'Olá, eu sou o',
                      ' ',
                      v.jsx('span', {
                        'data-loc': 'client\\src\\pages\\Home.tsx:116',
                        className:
                          'bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent animate-pulse',
                        children: 'Matheus',
                      }),
                    ],
                  }),
                  v.jsxs('div', {
                    'data-loc': 'client\\src\\pages\\Home.tsx:121',
                    className:
                      'flex flex-wrap gap-4 text-lg text-muted-foreground',
                    children: [
                      v.jsxs('div', {
                        'data-loc': 'client\\src\\pages\\Home.tsx:122',
                        className:
                          'flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-border/50',
                        children: [
                          v.jsx(nl, {
                            'data-loc': 'client\\src\\pages\\Home.tsx:123',
                            className: 'w-5 h-5 text-primary',
                          }),
                          v.jsx('span', {
                            'data-loc': 'client\\src\\pages\\Home.tsx:124',
                            children: 'Game Developer',
                          }),
                        ],
                      }),
                      v.jsxs('div', {
                        'data-loc': 'client\\src\\pages\\Home.tsx:126',
                        className:
                          'flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-border/50',
                        children: [
                          v.jsx($d, {
                            'data-loc': 'client\\src\\pages\\Home.tsx:127',
                            className: 'w-5 h-5 text-primary',
                          }),
                          v.jsx('span', {
                            'data-loc': 'client\\src\\pages\\Home.tsx:128',
                            children: 'C# Programmer',
                          }),
                        ],
                      }),
                      v.jsxs('div', {
                        'data-loc': 'client\\src\\pages\\Home.tsx:130',
                        className:
                          'flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-border/50',
                        children: [
                          v.jsx(Gd, {
                            'data-loc': 'client\\src\\pages\\Home.tsx:131',
                            className: 'w-5 h-5 text-primary',
                          }),
                          v.jsx('span', {
                            'data-loc': 'client\\src\\pages\\Home.tsx:132',
                            children: 'Unity3D',
                          }),
                        ],
                      }),
                    ],
                  }),
                  v.jsx('p', {
                    'data-loc': 'client\\src\\pages\\Home.tsx:136',
                    className: 'text-xl text-muted-foreground leading-relaxed',
                    children:
                      'Desenvolvendo experiências interativas que combinam complexidade técnica e gameplay envolvente, com paixão por jogos de terror e narrativas imersivas.',
                  }),
                  v.jsxs('div', {
                    'data-loc': 'client\\src\\pages\\Home.tsx:142',
                    className: 'flex flex-wrap gap-4 pt-4',
                    children: [
                      v.jsx(ct, {
                        'data-loc': 'client\\src\\pages\\Home.tsx:143',
                        size: 'lg',
                        className:
                          'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all',
                        onClick: () => p('projects'),
                        children: 'Ver Projetos',
                      }),
                      v.jsx(ct, {
                        'data-loc': 'client\\src\\pages\\Home.tsx:150',
                        size: 'lg',
                        variant: 'outline',
                        onClick: () => p('about'),
                        className:
                          'text-foreground border-border hover:bg-card/50 backdrop-blur-sm',
                        children: 'Sobre Mim',
                      }),
                    ],
                  }),
                ],
              }),
              v.jsx('div', {
                'data-loc': 'client\\src\\pages\\Home.tsx:162',
                className: 'hidden lg:block relative',
                children: v.jsxs('div', {
                  'data-loc': 'client\\src\\pages\\Home.tsx:163',
                  className: 'relative w-full h-[600px]',
                  children: [
                    v.jsx('div', {
                      'data-loc': 'client\\src\\pages\\Home.tsx:165',
                      className:
                        'absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-3xl backdrop-blur-xl border border-white/10 p-8 transform rotate-6 hover:rotate-3 transition-transform duration-500',
                      children: v.jsxs('div', {
                        'data-loc': 'client\\src\\pages\\Home.tsx:166',
                        className: 'space-y-4',
                        children: [
                          v.jsx('div', {
                            'data-loc': 'client\\src\\pages\\Home.tsx:167',
                            className:
                              'w-16 h-16 bg-primary/30 rounded-2xl flex items-center justify-center',
                            children: v.jsx(nl, {
                              'data-loc': 'client\\src\\pages\\Home.tsx:168',
                              className: 'w-8 h-8 text-primary',
                            }),
                          }),
                          v.jsx('h3', {
                            'data-loc': 'client\\src\\pages\\Home.tsx:170',
                            className: 'text-2xl font-bold',
                            children: '4+ Anos',
                          }),
                          v.jsx('p', {
                            'data-loc': 'client\\src\\pages\\Home.tsx:171',
                            className: 'text-muted-foreground',
                            children: 'Experiência em desenvolvimento de jogos',
                          }),
                        ],
                      }),
                    }),
                    v.jsx('div', {
                      'data-loc': 'client\\src\\pages\\Home.tsx:175',
                      className:
                        'absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-primary/20 rounded-3xl backdrop-blur-xl border border-white/10 p-8 transform -rotate-6 hover:-rotate-3 transition-transform duration-500',
                      children: v.jsxs('div', {
                        'data-loc': 'client\\src\\pages\\Home.tsx:176',
                        className: 'space-y-4',
                        children: [
                          v.jsx('div', {
                            'data-loc': 'client\\src\\pages\\Home.tsx:177',
                            className:
                              'w-16 h-16 bg-primary/30 rounded-2xl flex items-center justify-center',
                            children: v.jsx($d, {
                              'data-loc': 'client\\src\\pages\\Home.tsx:178',
                              className: 'w-8 h-8 text-primary',
                            }),
                          }),
                          v.jsx('h3', {
                            'data-loc': 'client\\src\\pages\\Home.tsx:180',
                            className: 'text-2xl font-bold',
                            children: '4 Projetos Publicados',
                          }),
                          v.jsx('p', {
                            'data-loc': 'client\\src\\pages\\Home.tsx:181',
                            className: 'text-muted-foreground',
                            children: '2 Game Jams Vencidas e Jogos Publicados',
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
          v.jsx('button', {
            'data-loc': 'client\\src\\pages\\Home.tsx:188',
            onClick: () => p('about'),
            className:
              'absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-primary',
            'aria-label': 'Scroll para baixo',
            children: v.jsx(i0, {
              'data-loc': 'client\\src\\pages\\Home.tsx:193',
              className: 'w-8 h-8',
            }),
          }),
        ],
      }),
      v.jsxs('section', {
        'data-loc': 'client\\src\\pages\\Home.tsx:198',
        ref: o,
        className:
          'min-h-screen flex items-center py-32 px-4 bg-background relative',
        children: [
          v.jsx('div', {
            'data-loc': 'client\\src\\pages\\Home.tsx:202',
            className:
              'absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none',
          }),
          v.jsxs('div', {
            'data-loc': 'client\\src\\pages\\Home.tsx:204',
            className: 'container max-w-7xl mx-auto relative z-10',
            children: [
              v.jsx('div', {
                'data-loc': 'client\\src\\pages\\Home.tsx:205',
                className: 'flex justify-center mb-12',
                children: v.jsxs('div', {
                  'data-loc': 'client\\src\\pages\\Home.tsx:206',
                  className: 'relative group',
                  children: [
                    v.jsx('div', {
                      'data-loc': 'client\\src\\pages\\Home.tsx:207',
                      className:
                        'absolute -inset-1 bg-gradient-to-r from-primary to-blue-500 rounded-full blur opacity-30 group-hover:opacity-70 transition duration-300',
                    }),
                    v.jsx('img', {
                      'data-loc': 'client\\src\\pages\\Home.tsx:209',
                      src: '/game-developer-portfolio/profile.jpg',
                      alt: 'Foto de Perfil',
                      className:
                        'relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-background shadow-xl',
                    }),
                  ],
                }),
              }),
              v.jsxs('div', {
                'data-loc': 'client\\src\\pages\\Home.tsx:216',
                className: 'text-center mb-16',
                children: [
                  v.jsx('span', {
                    'data-loc': 'client\\src\\pages\\Home.tsx:217',
                    className:
                      'text-primary text-sm font-semibold tracking-wider uppercase',
                    children: 'Conheça mais',
                  }),
                  v.jsx('h2', {
                    'data-loc': 'client\\src\\pages\\Home.tsx:218',
                    className:
                      'text-5xl md:text-6xl font-bold mt-4 mb-6 text-foreground',
                    children: 'Sobre Mim',
                  }),
                  v.jsx('div', {
                    'data-loc': 'client\\src\\pages\\Home.tsx:221',
                    className:
                      'w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto',
                  }),
                ],
              }),
              v.jsxs('div', {
                'data-loc': 'client\\src\\pages\\Home.tsx:224',
                className: 'grid lg:grid-cols-5 gap-8',
                children: [
                  v.jsxs('div', {
                    'data-loc': 'client\\src\\pages\\Home.tsx:226',
                    className: 'lg:col-span-3 space-y-6',
                    children: [
                      v.jsx('div', {
                        'data-loc': 'client\\src\\pages\\Home.tsx:227',
                        className:
                          'bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-8 hover:border-primary/30 transition-all group',
                        children: v.jsxs('div', {
                          'data-loc': 'client\\src\\pages\\Home.tsx:228',
                          className: 'flex items-start gap-4 mb-6',
                          children: [
                            v.jsx('div', {
                              'data-loc': 'client\\src\\pages\\Home.tsx:229',
                              className:
                                'w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform',
                              children: v.jsx('span', {
                                'data-loc': 'client\\src\\pages\\Home.tsx:230',
                                className: 'text-2xl',
                                children: '🧠',
                              }),
                            }),
                            v.jsxs('div', {
                              'data-loc': 'client\\src\\pages\\Home.tsx:232',
                              children: [
                                v.jsx('h3', {
                                  'data-loc':
                                    'client\\src\\pages\\Home.tsx:233',
                                  className:
                                    'text-2xl font-bold text-primary mb-2',
                                  children: 'Desenvolvedor Especializado',
                                }),
                                v.jsx('p', {
                                  'data-loc':
                                    'client\\src\\pages\\Home.tsx:234',
                                  className:
                                    'text-muted-foreground leading-relaxed',
                                  children:
                                    'Desenvolvedor de jogos especializado em C# focado no desenvolvimento e implementação de novas mecânicas. Apaixonado por jogos de terror e com grande amor por contar histórias.',
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      v.jsxs('div', {
                        'data-loc': 'client\\src\\pages\\Home.tsx:241',
                        className: 'grid md:grid-cols-2 gap-6',
                        children: [
                          v.jsxs('div', {
                            'data-loc': 'client\\src\\pages\\Home.tsx:242',
                            className:
                              'bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all',
                            children: [
                              v.jsx('span', {
                                'data-loc': 'client\\src\\pages\\Home.tsx:243',
                                className: 'text-3xl mb-3 block',
                                children: '🎓',
                              }),
                              v.jsx('h4', {
                                'data-loc': 'client\\src\\pages\\Home.tsx:244',
                                className: 'font-bold text-lg mb-2',
                                children: 'Formação',
                              }),
                              v.jsx('p', {
                                'data-loc': 'client\\src\\pages\\Home.tsx:245',
                                className: 'text-sm text-muted-foreground',
                                children:
                                  'Graduação em Game Design na Univali – Balneário Camboriú',
                              }),
                            ],
                          }),
                          v.jsxs('div', {
                            'data-loc': 'client\\src\\pages\\Home.tsx:248',
                            className:
                              'bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all',
                            children: [
                              v.jsx('span', {
                                'data-loc': 'client\\src\\pages\\Home.tsx:249',
                                className: 'text-3xl mb-3 block',
                                children: '🏆',
                              }),
                              v.jsx('h4', {
                                'data-loc': 'client\\src\\pages\\Home.tsx:250',
                                className: 'font-bold text-lg mb-2',
                                children: 'Conquistas',
                              }),
                              v.jsx('p', {
                                'data-loc': 'client\\src\\pages\\Home.tsx:251',
                                className: 'text-sm text-muted-foreground',
                                children:
                                  '2 projetos premiados em Game Jams com equipes multidisciplinares',
                              }),
                            ],
                          }),
                          v.jsxs('div', {
                            'data-loc': 'client\\src\\pages\\Home.tsx:254',
                            className:
                              'bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all',
                            children: [
                              v.jsx('span', {
                                'data-loc': 'client\\src\\pages\\Home.tsx:255',
                                className: 'text-3xl mb-3 block',
                                children: '💻',
                              }),
                              v.jsx('h4', {
                                'data-loc': 'client\\src\\pages\\Home.tsx:256',
                                className: 'font-bold text-lg mb-2',
                                children: 'Especialização',
                              }),
                              v.jsx('p', {
                                'data-loc': 'client\\src\\pages\\Home.tsx:257',
                                className: 'text-sm text-muted-foreground',
                                children:
                                  'C# e Unity com foco em sistemas de gameplay e mecânicas interativas',
                              }),
                            ],
                          }),
                          v.jsxs('div', {
                            'data-loc': 'client\\src\\pages\\Home.tsx:260',
                            className:
                              'bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all',
                            children: [
                              v.jsx('span', {
                                'data-loc': 'client\\src\\pages\\Home.tsx:261',
                                className: 'text-3xl mb-3 block',
                                children: '👻',
                              }),
                              v.jsx('h4', {
                                'data-loc': 'client\\src\\pages\\Home.tsx:262',
                                className: 'font-bold text-lg mb-2',
                                children: 'Paixão',
                              }),
                              v.jsx('p', {
                                'data-loc': 'client\\src\\pages\\Home.tsx:263',
                                className: 'text-sm text-muted-foreground',
                                children:
                                  'Jogos de terror e criação de experiências imersivas e atmosféricas',
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  v.jsx('div', {
                    'data-loc': 'client\\src\\pages\\Home.tsx:269',
                    className: 'lg:col-span-2 space-y-6',
                    children: v.jsxs('div', {
                      'data-loc': 'client\\src\\pages\\Home.tsx:270',
                      className:
                        'bg-gradient-to-br from-primary/10 to-blue-500/10 backdrop-blur-xl border border-primary/30 rounded-2xl p-8 sticky top-24',
                      children: [
                        v.jsxs('h3', {
                          'data-loc': 'client\\src\\pages\\Home.tsx:271',
                          className:
                            'text-2xl font-bold text-primary mb-6 flex items-center gap-2',
                          children: [
                            v.jsx(Gd, {
                              'data-loc': 'client\\src\\pages\\Home.tsx:272',
                              className: 'w-6 h-6',
                            }),
                            'Habilidades',
                          ],
                        }),
                        v.jsx('div', {
                          'data-loc': 'client\\src\\pages\\Home.tsx:275',
                          className: 'space-y-3',
                          children: h.map((g, w) =>
                            v.jsx(
                              'div',
                              {
                                'data-loc': 'client\\src\\pages\\Home.tsx:277',
                                className:
                                  'bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl px-4 py-3 hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default group',
                                children: v.jsx('span', {
                                  'data-loc':
                                    'client\\src\\pages\\Home.tsx:281',
                                  className:
                                    'font-medium group-hover:text-primary transition-colors',
                                  children: g,
                                }),
                              },
                              w,
                            ),
                          ),
                        }),
                        v.jsxs('div', {
                          'data-loc': 'client\\src\\pages\\Home.tsx:286',
                          className: 'mt-8 pt-8 border-t border-border/50',
                          children: [
                            v.jsx('h4', {
                              'data-loc': 'client\\src\\pages\\Home.tsx:287',
                              className:
                                'text-xl font-bold text-foreground mb-4 flex items-center gap-2',
                              children: '🎯 Objetivos',
                            }),
                            v.jsxs('ul', {
                              'data-loc': 'client\\src\\pages\\Home.tsx:290',
                              className:
                                'space-y-3 text-sm text-muted-foreground',
                              children: [
                                v.jsxs('li', {
                                  'data-loc':
                                    'client\\src\\pages\\Home.tsx:291',
                                  className: 'flex items-start gap-2',
                                  children: [
                                    v.jsx('span', {
                                      'data-loc':
                                        'client\\src\\pages\\Home.tsx:292',
                                      className: 'text-primary mt-1',
                                      children: '▸',
                                    }),
                                    v.jsx('span', {
                                      'data-loc':
                                        'client\\src\\pages\\Home.tsx:293',
                                      children:
                                        'Iniciar carreira na indústria de desenvolvimento de jogos',
                                    }),
                                  ],
                                }),
                                v.jsxs('li', {
                                  'data-loc':
                                    'client\\src\\pages\\Home.tsx:295',
                                  className: 'flex items-start gap-2',
                                  children: [
                                    v.jsx('span', {
                                      'data-loc':
                                        'client\\src\\pages\\Home.tsx:296',
                                      className: 'text-primary mt-1',
                                      children: '▸',
                                    }),
                                    v.jsx('span', {
                                      'data-loc':
                                        'client\\src\\pages\\Home.tsx:297',
                                      children:
                                        'Aprender mais sobre C# e outras linguagens',
                                    }),
                                  ],
                                }),
                                v.jsxs('li', {
                                  'data-loc':
                                    'client\\src\\pages\\Home.tsx:299',
                                  className: 'flex items-start gap-2',
                                  children: [
                                    v.jsx('span', {
                                      'data-loc':
                                        'client\\src\\pages\\Home.tsx:300',
                                      className: 'text-primary mt-1',
                                      children: '▸',
                                    }),
                                    v.jsx('span', {
                                      'data-loc':
                                        'client\\src\\pages\\Home.tsx:301',
                                      children:
                                        'Criar experiências de jogo memoráveis e inovadoras',
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
                ],
              }),
            ],
          }),
        ],
      }),
      v.jsx('section', {
        'data-loc': 'client\\src\\pages\\Home.tsx:312',
        ref: i,
        className:
          'min-h-screen flex items-center py-32 px-4 relative overflow-hidden',
        style: {
          background:
            'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%), linear-gradient(180deg, #000000 0%, #0a1929 100%)',
        },
        children: v.jsxs('div', {
          'data-loc': 'client\\src\\pages\\Home.tsx:319',
          className: 'container max-w-7xl mx-auto relative z-10',
          children: [
            v.jsxs('div', {
              'data-loc': 'client\\src\\pages\\Home.tsx:320',
              className: 'text-center mb-16',
              children: [
                v.jsx('span', {
                  'data-loc': 'client\\src\\pages\\Home.tsx:321',
                  className:
                    'text-primary text-sm font-semibold tracking-wider uppercase',
                  children: 'Portfolio',
                }),
                v.jsx('h2', {
                  'data-loc': 'client\\src\\pages\\Home.tsx:322',
                  className:
                    'text-5xl md:text-6xl font-bold mt-4 mb-6 text-foreground',
                  children: 'Meus Projetos',
                }),
                v.jsx('p', {
                  'data-loc': 'client\\src\\pages\\Home.tsx:325',
                  className: 'text-lg text-muted-foreground max-w-2xl mx-auto',
                  children:
                    'Conheça meus projetos com uma seleção dos mais recentes trabalhos em desenvolvimento de jogos.',
                }),
                v.jsx('div', {
                  'data-loc': 'client\\src\\pages\\Home.tsx:328',
                  className:
                    'w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6',
                }),
              ],
            }),
            v.jsxs('div', {
              'data-loc': 'client\\src\\pages\\Home.tsx:332',
              className:
                'grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr',
              children: [
                v.jsx('div', {
                  'data-loc': 'client\\src\\pages\\Home.tsx:334',
                  className: 'lg:col-span-2',
                  children: v.jsx(pa, {
                    'data-loc': 'client\\src\\pages\\Home.tsx:335',
                    ...x[0],
                  }),
                }),
                v.jsx('div', {
                  'data-loc': 'client\\src\\pages\\Home.tsx:339',
                  children: v.jsx(pa, {
                    'data-loc': 'client\\src\\pages\\Home.tsx:340',
                    ...x[1],
                  }),
                }),
                v.jsx('div', {
                  'data-loc': 'client\\src\\pages\\Home.tsx:344',
                  className: 'md:col-span-2 lg:col-span-1',
                  children: v.jsx(pa, {
                    'data-loc': 'client\\src\\pages\\Home.tsx:345',
                    ...x[2],
                  }),
                }),
                v.jsx('div', {
                  'data-loc': 'client\\src\\pages\\Home.tsx:349',
                  className: 'md:col-span-2 lg:col-span-2',
                  children: v.jsx(pa, {
                    'data-loc': 'client\\src\\pages\\Home.tsx:350',
                    ...x[3],
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
      v.jsxs('section', {
        'data-loc': 'client\\src\\pages\\Home.tsx:371',
        ref: l,
        className:
          'min-h-screen flex items-center py-32 px-4 bg-background relative',
        children: [
          v.jsx('div', {
            'data-loc': 'client\\src\\pages\\Home.tsx:375',
            className:
              'absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none',
          }),
          v.jsxs('div', {
            'data-loc': 'client\\src\\pages\\Home.tsx:377',
            className: 'container max-w-5xl mx-auto relative z-10',
            children: [
              v.jsxs('div', {
                'data-loc': 'client\\src\\pages\\Home.tsx:378',
                className: 'text-center mb-16',
                children: [
                  v.jsx('span', {
                    'data-loc': 'client\\src\\pages\\Home.tsx:379',
                    className:
                      'text-primary text-sm font-semibold tracking-wider uppercase',
                    children: 'Entre em contato',
                  }),
                  v.jsx('h2', {
                    'data-loc': 'client\\src\\pages\\Home.tsx:380',
                    className:
                      'text-5xl md:text-6xl font-bold mt-4 mb-6 text-foreground',
                    children: 'Vamos Conversar!',
                  }),
                  v.jsx('p', {
                    'data-loc': 'client\\src\\pages\\Home.tsx:383',
                    className:
                      'text-lg text-muted-foreground max-w-2xl mx-auto',
                    children:
                      'Estou sempre aberto a novas oportunidades e colaborações. Entre em contato através das redes sociais.',
                  }),
                  v.jsx('div', {
                    'data-loc': 'client\\src\\pages\\Home.tsx:386',
                    className:
                      'w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6',
                  }),
                ],
              }),
              v.jsxs('div', {
                'data-loc': 'client\\src\\pages\\Home.tsx:389',
                className: 'grid md:grid-cols-2 lg:grid-cols-3 gap-6',
                children: [
                  v.jsxs('a', {
                    'data-loc': 'client\\src\\pages\\Home.tsx:390',
                    href: 'mailto:contato@example.com',
                    className:
                      'group bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all',
                    children: [
                      v.jsx('div', {
                        'data-loc': 'client\\src\\pages\\Home.tsx:394',
                        className:
                          'w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform',
                        children: v.jsx(p0, {
                          'data-loc': 'client\\src\\pages\\Home.tsx:395',
                          className: 'w-6 h-6 text-primary',
                        }),
                      }),
                      v.jsx('h3', {
                        'data-loc': 'client\\src\\pages\\Home.tsx:397',
                        className: 'text-lg font-bold mb-2',
                        children: 'Email',
                      }),
                      v.jsx('p', {
                        'data-loc': 'client\\src\\pages\\Home.tsx:398',
                        className: 'text-sm text-muted-foreground',
                        children: 'Envie uma mensagem',
                      }),
                    ],
                  }),
                  v.jsxs('a', {
                    'data-loc': 'client\\src\\pages\\Home.tsx:401',
                    href: 'https://linkedin.com',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    className:
                      'group bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all',
                    children: [
                      v.jsx('div', {
                        'data-loc': 'client\\src\\pages\\Home.tsx:407',
                        className:
                          'w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform',
                        children: v.jsx(f0, {
                          'data-loc': 'client\\src\\pages\\Home.tsx:408',
                          className: 'w-6 h-6 text-primary',
                        }),
                      }),
                      v.jsx('h3', {
                        'data-loc': 'client\\src\\pages\\Home.tsx:410',
                        className: 'text-lg font-bold mb-2',
                        children: 'LinkedIn',
                      }),
                      v.jsx('p', {
                        'data-loc': 'client\\src\\pages\\Home.tsx:411',
                        className: 'text-sm text-muted-foreground',
                        children: 'Conecte-se comigo',
                      }),
                    ],
                  }),
                  v.jsxs('a', {
                    'data-loc': 'client\\src\\pages\\Home.tsx:414',
                    href: 'https://github.com/matheuslcosentino',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    className:
                      'group bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all',
                    children: [
                      v.jsx('div', {
                        'data-loc': 'client\\src\\pages\\Home.tsx:420',
                        className:
                          'w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform',
                        children: v.jsx(Wd, {
                          'data-loc': 'client\\src\\pages\\Home.tsx:421',
                          className: 'w-6 h-6 text-primary',
                        }),
                      }),
                      v.jsx('h3', {
                        'data-loc': 'client\\src\\pages\\Home.tsx:423',
                        className: 'text-lg font-bold mb-2',
                        children: 'GitHub',
                      }),
                      v.jsx('p', {
                        'data-loc': 'client\\src\\pages\\Home.tsx:424',
                        className: 'text-sm text-muted-foreground',
                        children: 'Veja meus projetos',
                      }),
                    ],
                  }),
                  v.jsxs('a', {
                    'data-loc': 'client\\src\\pages\\Home.tsx:427',
                    href: 'https://instagram.com',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    className:
                      'group bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all',
                    children: [
                      v.jsx('div', {
                        'data-loc': 'client\\src\\pages\\Home.tsx:433',
                        className:
                          'w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform',
                        children: v.jsx(d0, {
                          'data-loc': 'client\\src\\pages\\Home.tsx:434',
                          className: 'w-6 h-6 text-primary',
                        }),
                      }),
                      v.jsx('h3', {
                        'data-loc': 'client\\src\\pages\\Home.tsx:436',
                        className: 'text-lg font-bold mb-2',
                        children: 'Instagram',
                      }),
                      v.jsx('p', {
                        'data-loc': 'client\\src\\pages\\Home.tsx:437',
                        className: 'text-sm text-muted-foreground',
                        children: 'Siga meu trabalho',
                      }),
                    ],
                  }),
                  v.jsxs('a', {
                    'data-loc': 'client\\src\\pages\\Home.tsx:440',
                    href: 'https://wa.me/',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    className:
                      'group bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all',
                    children: [
                      v.jsx('div', {
                        'data-loc': 'client\\src\\pages\\Home.tsx:446',
                        className:
                          'w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform',
                        children: v.jsx(h0, {
                          'data-loc': 'client\\src\\pages\\Home.tsx:447',
                          className: 'w-6 h-6 text-primary',
                        }),
                      }),
                      v.jsx('h3', {
                        'data-loc': 'client\\src\\pages\\Home.tsx:449',
                        className: 'text-lg font-bold mb-2',
                        children: 'WhatsApp',
                      }),
                      v.jsx('p', {
                        'data-loc': 'client\\src\\pages\\Home.tsx:450',
                        className: 'text-sm text-muted-foreground',
                        children: 'Converse diretamente',
                      }),
                    ],
                  }),
                  v.jsxs('div', {
                    'data-loc': 'client\\src\\pages\\Home.tsx:453',
                    className:
                      'group bg-gradient-to-br from-primary/20 to-blue-500/20 backdrop-blur-xl border border-primary/30 rounded-2xl p-6 hover:border-primary/50 transition-all',
                    children: [
                      v.jsx('div', {
                        'data-loc': 'client\\src\\pages\\Home.tsx:454',
                        className:
                          'w-12 h-12 bg-primary/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform',
                        children: v.jsx(nl, {
                          'data-loc': 'client\\src\\pages\\Home.tsx:455',
                          className: 'w-6 h-6 text-primary',
                        }),
                      }),
                      v.jsx('h3', {
                        'data-loc': 'client\\src\\pages\\Home.tsx:457',
                        className: 'text-lg font-bold mb-2',
                        children: 'Discord',
                      }),
                      v.jsx('p', {
                        'data-loc': 'client\\src\\pages\\Home.tsx:458',
                        className: 'text-sm text-muted-foreground',
                        children: 'Junte-se à comunidade',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      v.jsx('footer', {
        'data-loc': 'client\\src\\pages\\Home.tsx:465',
        className: 'py-8 border-t border-border/50 bg-card/30 backdrop-blur-sm',
        children: v.jsxs('div', {
          'data-loc': 'client\\src\\pages\\Home.tsx:466',
          className: 'container text-center',
          children: [
            v.jsx('p', {
              'data-loc': 'client\\src\\pages\\Home.tsx:467',
              className: 'text-muted-foreground text-sm',
              children: '© 2024 Matheus Lopes. Todos os direitos reservados.',
            }),
            v.jsx('p', {
              'data-loc': 'client\\src\\pages\\Home.tsx:470',
              className: 'text-muted-foreground/60 text-xs mt-2',
              children: 'Desenvolvido com React, Tailwind CSS e muito ☕',
            }),
          ],
        }),
      }),
    ],
  });
}
const Y0 = '/game-developer-portfolio';
function Q0() {
  return v.jsx(up, {
    'data-loc': 'client\\src\\App.tsx:14',
    base: Y0,
    children: v.jsxs(B0, {
      'data-loc': 'client\\src\\App.tsx:15',
      children: [
        v.jsx(fa, {
          'data-loc': 'client\\src\\App.tsx:16',
          path: '/',
          component: G0,
        }),
        v.jsx(fa, {
          'data-loc': 'client\\src\\App.tsx:17',
          path: '/404',
          component: ef,
        }),
        v.jsx(fa, { 'data-loc': 'client\\src\\App.tsx:19', component: ef }),
      ],
    }),
  });
}
function K0() {
  return v.jsx(V0, {
    'data-loc': 'client\\src\\App.tsx:32',
    children: v.jsx($0, {
      'data-loc': 'client\\src\\App.tsx:33',
      defaultTheme: 'dark',
      children: v.jsxs(Wy, {
        'data-loc': 'client\\src\\App.tsx:37',
        children: [
          v.jsx(Gh, { 'data-loc': 'client\\src\\App.tsx:38' }),
          v.jsx(Q0, { 'data-loc': 'client\\src\\App.tsx:39' }),
        ],
      }),
    }),
  });
}
ph.createRoot(document.getElementById('root')).render(
  v.jsx(K0, { 'data-loc': 'client\\src\\main.tsx:5' }),
);
