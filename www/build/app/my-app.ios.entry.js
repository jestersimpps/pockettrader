/*! Built with http://stenciljs.com */
const { h } = window.App;

import { l as commonjsGlobal, m as commonjsRequire, n as unwrapExports, o as createCommonjsModule, k as TypeKeys, d as appSetExchanges, a as appSetBaseCurrency, e as appSetCurrencies, f as appSetTickers, g as appSetTotalBalances, c as appSetWallets, j as appSetToken, h as appSetBalances, i as appSetOrders, b as appSetDust } from './chunk-917ac8f0.js';
import { c as BALANCESERVICE, h as TOKENSERVICE, e as TRADESERVICE, i as EXCHANGESERVICE, a as CURRENCYSERVICE, b as TICKERSERVICE, g as WALLETSERVICE } from './chunk-811498d8.js';
import { d as DefaultExchanges } from './chunk-7affb05f.js';
import { e as rIC, f as assert, g as debounce, n as isPlatform, m as createThemedClasses, j as createColorClasses } from './chunk-cb94efc7.js';

var global$1 = (typeof global !== "undefined" ? global :
            typeof self !== "undefined" ? self :
            typeof window !== "undefined" ? window : {});

if (typeof global$1.setTimeout === 'function') ;
if (typeof global$1.clearTimeout === 'function') ;

// from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
var performance$1 = global$1.performance || {};
var performanceNow =
  performance$1.now        ||
  performance$1.mozNow     ||
  performance$1.msNow      ||
  performance$1.oNow       ||
  performance$1.webkitNow  ||
  function(){ return (new Date()).getTime() };

function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
}

var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global$1 !== 'undefined') {
  root = global$1;
} else if (typeof module !== 'undefined') {
  root = module;
} else {
  root = Function('return this')();
}

var result = symbolObservablePonyfill(root);

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT' + Math.random().toString(36).substring(7).split('').join('.'),
  REPLACE: '@@redux/REPLACE' + Math.random().toString(36).substring(7).split('').join('.')
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj === null) return false;

  var proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.REPLACE });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if ((typeof observer === 'undefined' ? 'undefined' : _typeof(observer)) !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[result] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[result] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty
}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && 'action "' + String(actionType) + '"' || 'an action';

  return 'Given ' + actionDescription + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: ActionTypes.INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    {
      if (typeof reducers[key] === 'undefined') {
        warning('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var store = createStore.apply(undefined, args);
      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(undefined, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */
function isCrushed() {}

if (typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning("You are currently using minified code outside of NODE_ENV === 'production'. " + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}

function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

var reduxLogger = createCommonjsModule(function (module, exports) {
!function(e,t){t(exports);}(commonjsGlobal,function(e){function t(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}});}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0});}function n(e,t,r){n.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0});}function o(e,t){o.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0});}function i(e,t){i.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0});}function a(e,t,r){a.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0});}function f(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function u(e){var t="undefined"==typeof e?"undefined":N(e);return "object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function l(e,t,r,c,s,d,p){s=s||[],p=p||[];var g=s.slice(0);if("undefined"!=typeof d){if(c){if("function"==typeof c&&c(g,d))return;if("object"===("undefined"==typeof c?"undefined":N(c))){if(c.prefilter&&c.prefilter(g,d))return;if(c.normalize){var h=c.normalize(g,d,e,t);h&&(e=h[0],t=h[1]);}}}g.push(d);}"regexp"===u(e)&&"regexp"===u(t)&&(e=e.toString(),t=t.toString());var y="undefined"==typeof e?"undefined":N(e),v="undefined"==typeof t?"undefined":N(t),b="undefined"!==y||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),m="undefined"!==v||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!b&&m)r(new o(g,t));else if(!m&&b)r(new i(g,e));else if(u(e)!==u(t))r(new n(g,e,t));else if("date"===u(e)&&e-t!==0)r(new n(g,e,t));else if("object"===y&&null!==e&&null!==t)if(p.filter(function(t){return t.lhs===e}).length)e!==t&&r(new n(g,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var w;e.length;for(w=0;w<e.length;w++)w>=t.length?r(new a(g,w,new i(void 0,e[w]))):l(e[w],t[w],r,c,g,w,p);for(;w<t.length;)r(new a(g,w,new o(void 0,t[w++])));}else{var x=Object.keys(e),S=Object.keys(t);x.forEach(function(n,o){var i=S.indexOf(n);i>=0?(l(e[n],t[n],r,c,g,n,p),S=f(S,i)):l(e[n],void 0,r,c,g,n,p);}),S.forEach(function(e){l(void 0,t[e],r,c,g,e,p);});}p.length=p.length-1;}else e!==t&&("number"===y&&isNaN(e)&&isNaN(t)||r(new n(g,e,t)));}function c(e,t,r,n){return n=n||[],l(e,t,function(e){e&&n.push(e);},r),n.length?n:void 0}function s(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":s(o[r.path[n]],r.index,r.item);break;case"D":delete o[r.path[n]];break;case"E":case"N":o[r.path[n]]=r.rhs;}}else switch(r.kind){case"A":s(e[t],r.index,r.item);break;case"D":e=f(e,t);break;case"E":case"N":e[t]=r.rhs;}return e}function d(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)"undefined"==typeof n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":s(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs;}}}function p(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":p(o[r.path[n]],r.index,r.item);break;case"D":o[r.path[n]]=r.lhs;break;case"E":o[r.path[n]]=r.lhs;break;case"N":delete o[r.path[n]];}}else switch(r.kind){case"A":p(e[t],r.index,r.item);break;case"D":e[t]=r.lhs;break;case"E":e[t]=r.lhs;break;case"N":e=f(e,t);}return e}function g(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)"undefined"==typeof i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":p(i[r.path[n]],r.index,r.item);break;case"D":i[r.path[n]]=r.lhs;break;case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]];}}}function h(e,t,r){if(e&&t){var n=function(n){r&&!r(e,t,n)||d(e,t,n);};l(e,t,n);}}function y(e){return "color: "+F[e].color+"; font-weight: bold"}function v(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return [r.join("."),n,"→",o];case"N":return [r.join("."),o];case"D":return [r.join(".")];case"A":return [r.join(".")+"["+i+"]",a];default:return []}}function b(e,t,r,n){var o=c(e,t);try{n?r.groupCollapsed("diff"):r.group("diff");}catch(e){r.log("diff");}o?o.forEach(function(e){var t=e.kind,n=v(e);r.log.apply(r,["%c "+F[t].text,y(t)].concat(P(n)));}):r.log("—— no diff ——");try{r.groupEnd();}catch(e){r.log("—— diff end —— ");}}function m(e,t,r,n){switch("undefined"==typeof e?"undefined":N(e)){case"object":return "function"==typeof e[n]?e[n].apply(e,P(r)):e[n];case"function":return e(t);default:return e}}function w(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}function x(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?w(t):o,a=t.collapsed,f=t.colors,u=t.level,l=t.diff,c="undefined"==typeof t.titleFormatter;e.forEach(function(o,s){var d=o.started,p=o.startedTime,g=o.action,h=o.prevState,y=o.error,v=o.took,w=o.nextState,x=e[s+1];x&&(w=x.prevState,v=x.started-d);var S=n(g),k="function"==typeof a?a(function(){return w},g,o):a,j=D(p),E=f.title?"color: "+f.title(S)+";":"",A=["color: gray; font-weight: lighter;"];A.push(E),t.timestamp&&A.push("color: gray; font-weight: lighter;"),t.duration&&A.push("color: gray; font-weight: lighter;");var O=i(S,j,v);try{k?f.title&&c?r.groupCollapsed.apply(r,["%c "+O].concat(A)):r.groupCollapsed(O):f.title&&c?r.group.apply(r,["%c "+O].concat(A)):r.group(O);}catch(e){r.log(O);}var N=m(u,S,[h],"prevState"),P=m(u,S,[S],"action"),C=m(u,S,[y,h],"error"),F=m(u,S,[w],"nextState");if(N)if(f.prevState){var L="color: "+f.prevState(h)+"; font-weight: bold";r[N]("%c prev state",L,h);}else r[N]("prev state",h);if(P)if(f.action){var T="color: "+f.action(S)+"; font-weight: bold";r[P]("%c action    ",T,S);}else r[P]("action    ",S);if(y&&C)if(f.error){var M="color: "+f.error(y,h)+"; font-weight: bold;";r[C]("%c error     ",M,y);}else r[C]("error     ",y);if(F)if(f.nextState){var _="color: "+f.nextState(w)+"; font-weight: bold";r[F]("%c next state",_,w);}else r[F]("next state",w);l&&b(h,w,r,k);try{r.groupEnd();}catch(e){r.log("—— log end ——");}});}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},L,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,f=t.diffPredicate;if("undefined"==typeof r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var u=[];return function(e){var r=e.getState;return function(e){return function(l){if("function"==typeof i&&!i(r,l))return e(l);var c={};u.push(c),c.started=O.now(),c.startedTime=new Date,c.prevState=n(r()),c.action=l;var s=void 0;if(a)try{s=e(l);}catch(e){c.error=o(e);}else s=e(l);c.took=O.now()-c.started,c.nextState=n(r());var d=t.diff&&"function"==typeof f?f(r,l):t.diff;if(x(u,Object.assign({},t,{diff:d})),u.length=0,c.error)throw c.error;return s}}}}var k,j,E=function(e,t){return new Array(t+1).join(e)},A=function(e,t){return E("0",t-e.toString().length)+e},D=function(e){return A(e.getHours(),2)+":"+A(e.getMinutes(),2)+":"+A(e.getSeconds(),2)+"."+A(e.getMilliseconds(),3)},O="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},C=[];k="object"===("undefined"==typeof commonjsGlobal?"undefined":N(commonjsGlobal))&&commonjsGlobal?commonjsGlobal:"undefined"!=typeof window?window:{},j=k.DeepDiff,j&&C.push(function(){"undefined"!=typeof j&&k.DeepDiff===c&&(k.DeepDiff=j,j=void 0);}),t(n,r),t(o,r),t(i,r),t(a,r),Object.defineProperties(c,{diff:{value:c,enumerable:!0},observableDiff:{value:l,enumerable:!0},applyDiff:{value:h,enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:g,enumerable:!0},isConflict:{value:function(){return "undefined"!=typeof j},enumerable:!0},noConflict:{value:function(){return C&&(C.forEach(function(e){e();}),C=null),c},enumerable:!0}});var F={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},L={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return "inherit"},prevState:function(){return "#9E9E9E"},action:function(){return "#03A9F4"},nextState:function(){return "#4CAF50"},error:function(){return "#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return "function"==typeof t||"function"==typeof r?S()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};e.defaults=L,e.createLogger=S,e.logger=T,e.default=T,Object.defineProperty(e,"__esModule",{value:!0});});
});

var logger = unwrapExports(reduxLogger);

const getInitialState = () => {
    return {
        exchanges: [],
        baseCurrency: CURRENCYSERVICE.currencies[0],
        totalBalances: [],
        currencies: [],
        tickers: [],
        wallets: [],
        token: null,
        balances: null,
        orders: [],
        dust: 0.1,
    };
};
const app = (state = getInitialState(), action) => {
    switch (action.type) {
        case TypeKeys.APP_SET_EXCHANGES: {
            EXCHANGESERVICE.setExchanges(action.data);
            return Object.assign({}, state, { exchanges: action.data });
        }
        case TypeKeys.APP_SET_BASECURRENCY: {
            CURRENCYSERVICE.setBaseCurrency(action.data);
            return Object.assign({}, state, { baseCurrency: action.data });
        }
        case TypeKeys.APP_SET_CURRENCIES: {
            return Object.assign({}, state, { conversionRates: action.data });
        }
        case TypeKeys.APP_SET_TICKERS: {
            TICKERSERVICE.setTickers(action.data);
            return Object.assign({}, state, { tickers: action.data });
        }
        case TypeKeys.APP_SET_TOTALBALANCES: {
            BALANCESERVICE.setTotalBalances(action.data);
            return Object.assign({}, state, { totalBalances: action.data });
        }
        case TypeKeys.APP_SET_WALLETS: {
            WALLETSERVICE.setWallets(action.data);
            return Object.assign({}, state, { wallets: action.data });
        }
        case TypeKeys.APP_SET_TOKEN: {
            TOKENSERVICE.setToken(action.data);
            return Object.assign({}, state, { token: action.data });
        }
        case TypeKeys.APP_SET_BALANCES: {
            BALANCESERVICE.setBalances(action.data);
            return Object.assign({}, state, { balances: action.data });
        }
        case TypeKeys.APP_SET_ORDERS: {
            TRADESERVICE.setOrders(action.data);
            return Object.assign({}, state, { orders: action.data });
        }
        case TypeKeys.APP_SET_DUST: {
            EXCHANGESERVICE.setDust(action.data);
            return Object.assign({}, state, { dust: action.data });
        }
    }
    return state;
};

const rootReducer = combineReducers({
    app,
});

const configureStore = (preloadedState) => createStore(rootReducer, preloadedState, applyMiddleware(logger, thunk));

class MyApp {
    constructor() {
        this.loading = true;
    }
    componentWillLoad() {
        // Only do this once, in the root component
        this.store.setStore(configureStore({}));
        this.store.mapDispatchToProps(this, {
            appSetExchanges,
            appSetBaseCurrency,
            appSetCurrencies,
            appSetTickers,
            appSetTotalBalances,
            appSetWallets,
            appSetToken,
            appSetBalances,
            appSetOrders,
            appSetDust,
        });
        // Load in app state from storage
        EXCHANGESERVICE.getExchangesFromStorage()
            .then((exchanges) => {
            exchanges ? this.appSetExchanges(exchanges) : this.appSetExchanges(DefaultExchanges);
            return CURRENCYSERVICE.getBaseCurrencyFromStorage();
        })
            .then((baseCurrency) => {
            baseCurrency ? this.appSetBaseCurrency(baseCurrency) : this.appSetBaseCurrency(CURRENCYSERVICE.currencies[0]);
            return WALLETSERVICE.getWalletsFromStorage();
        })
            .then((wallets) => {
            wallets ? this.appSetWallets(wallets) : this.appSetWallets([]);
            return CURRENCYSERVICE.getConversionRates();
        })
            .then((currencies) => {
            this.appSetCurrencies(currencies);
            return TICKERSERVICE.getTickersFromStorage();
        })
            .then((tickers) => {
            tickers ? this.appSetTickers(tickers) : this.appSetTickers([]);
            return BALANCESERVICE.getTotalBalancesFromStorage();
        })
            .then((totalBalances) => {
            totalBalances ? this.appSetTotalBalances(totalBalances) : this.appSetTotalBalances([]);
            return BALANCESERVICE.getBalancesFromStorage();
        })
            .then((balances) => {
            balances ? this.appSetBalances(balances) : this.appSetBalances({ overview: 0, exchnges: 0, wallets: 0 });
            return TRADESERVICE.getOrdersFromStorage();
        })
            .then((orders) => {
            orders ? this.appSetOrders(orders) : this.appSetOrders([]);
            return EXCHANGESERVICE.getDustFromStorage();
        })
            .then((dust) => {
            dust ? this.appSetDust(dust) : this.appSetDust(0.000002);
            return TOKENSERVICE.getTokenFromStorage();
        })
            .then((token) => {
            token ? this.appSetToken(token) : this.appSetToken(TOKENSERVICE.generateNewToken());
            this.loading = false;
        });
    }
    setNav() {
        this.nav = document.querySelector('ion-nav');
    }
    render() {
        return !this.loading ? (h("ion-app", null,
            h("script", { type: "text/javascript", src: "https://s3.tradingview.com/tv.js" }),
            h("ion-content", null,
                h("ion-router", { useHash: false },
                    h("ion-route", { url: "/", component: "app-overview" }),
                    h("ion-route", { url: "/pair/:exchangeId/:pair", component: "app-pair" }),
                    h("ion-route", { url: "/exchanges", component: "app-exchanges" }),
                    h("ion-route", { url: "/wallets", component: "app-wallets" }),
                    h("ion-route", { url: "/trade", component: "app-trade" }),
                    h("ion-route", { url: "/orders", component: "app-orders" }),
                    h("ion-route", { url: "/orders/:orderId", component: "app-order" }),
                    h("ion-route", { url: "/settings", component: "app-settings" }),
                    h("ion-route", { url: "/settings/tutorial", component: "app-tutorial" }),
                    h("ion-route", { url: "/settings/keys", component: "app-keys" }),
                    h("ion-route", { url: "/settings/keys/:exchangeId", component: "app-exchangekeys" }),
                    h("ion-route", { url: "/settings/basecurrency", component: "app-basecurrency" }),
                    h("ion-route", { url: "/settings/holdings", component: "app-holdings" }),
                    h("ion-route", { url: "/settings/holdings/:walletId", component: "app-editwallet" }),
                    h("ion-route", { url: "/settings/premium", component: "app-premium" }),
                    h("ion-route", { url: "/settings/dust", component: "app-dust" }),
                    h("ion-route", { url: "/panic", component: "app-panic" })),
                h("ion-nav", { animated: true, "margin-bottom": true, onIonNavDidChange: () => this.setNav() })),
            h("ion-footer", { class: "footerHeight" },
                h("ion-tabs", { color: "light", useRouter: false },
                    h("ion-tab", { icon: "swap", label: "Trade", onIonSelect: () => this.nav.setRoot('app-trade') }),
                    h("ion-tab", { icon: "time", label: "Orders", onIonSelect: () => this.nav.setRoot('app-orders') }),
                    h("ion-tab", { icon: "pie", label: "Overview", onIonSelect: () => this.nav.setRoot('app-overview') }),
                    h("ion-tab", { icon: "list-box", label: "Exchanges", onIonSelect: () => this.nav.setRoot('app-exchanges') }),
                    h("ion-tab", { icon: "wallet", label: "Wallets", onIonSelect: () => this.nav.setRoot('app-wallets') }))))) : ([
            h("div", { class: "progress", "text-center": true },
                h("ion-icon", { name: "sync", class: "spin" }))
        ]);
    }
    static get is() { return "my-app"; }
    static get properties() { return {
        "loading": {
            "state": true
        },
        "nav": {
            "state": true
        },
        "store": {
            "context": "store"
        }
    }; }
    static get style() { return ".footerHeight {\n  min-height: 50px;\n}"; }
}

function transitionEnd(el, callback) {
    let unRegTrans;
    const opts = { passive: true };
    function unregister() {
        if (unRegTrans) {
            unRegTrans();
        }
    }
    function onTransitionEnd(ev) {
        if (el === ev.target) {
            unregister();
            callback(ev);
        }
    }
    if (el) {
        el.addEventListener('webkitTransitionEnd', onTransitionEnd, opts);
        el.addEventListener('transitionend', onTransitionEnd, opts);
        unRegTrans = () => {
            el.removeEventListener('webkitTransitionEnd', onTransitionEnd, opts);
            el.removeEventListener('transitionend', onTransitionEnd, opts);
        };
    }
    return unregister;
}

const CSS_VALUE_REGEX = /(^-?\d*\.?\d*)(.*)/;
const DURATION_MIN = 32;
const TRANSITION_END_FALLBACK_PADDING_MS = 400;
const TRANSFORM_PROPS = {
    'translateX': 1,
    'translateY': 1,
    'translateZ': 1,
    'scale': 1,
    'scaleX': 1,
    'scaleY': 1,
    'scaleZ': 1,
    'rotate': 1,
    'rotateX': 1,
    'rotateY': 1,
    'rotateZ': 1,
    'skewX': 1,
    'skewY': 1,
    'perspective': 1
};
const raf = window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : (f) => f(Date.now());
class Animator {
    constructor() {
        this._hasDur = false;
        this._hasTweenEffect = false;
        this._isAsync = false;
        this._isReverse = false;
        this._destroyed = false;
        this.hasChildren = false;
        this.isPlaying = false;
        this.hasCompleted = false;
    }
    addElement(el) {
        if (el != null) {
            if (el.length > 0) {
                for (let i = 0; i < el.length; i++) {
                    this._addEl(el[i]);
                }
            }
            else {
                this._addEl(el);
            }
        }
        return this;
    }
    _addEl(el) {
        if (el.nodeType === 1) {
            (this._elements = this._elements || []).push(el);
        }
    }
    add(childAnimation) {
        childAnimation.parent = this;
        this.hasChildren = true;
        (this._childAnimations = this._childAnimations || []).push(childAnimation);
        return this;
    }
    getDuration(opts) {
        if (Animator.animated) {
            if (opts && opts.duration !== undefined) {
                return opts.duration;
            }
            else if (this._duration !== undefined) {
                return this._duration;
            }
            else if (this.parent) {
                return this.parent.getDuration();
            }
        }
        return 0;
    }
    isRoot() {
        return !this.parent;
    }
    duration(milliseconds) {
        this._duration = milliseconds;
        return this;
    }
    getEasing() {
        if (this._isReverse && this._reversedEasingName !== undefined) {
            return this._reversedEasingName;
        }
        return this._easingName !== undefined ? this._easingName : (this.parent && this.parent.getEasing()) || null;
    }
    easing(name) {
        this._easingName = name;
        return this;
    }
    easingReverse(name) {
        this._reversedEasingName = name;
        return this;
    }
    from(prop, val) {
        this._addProp('from', prop, val);
        return this;
    }
    to(prop, val, clearProperyAfterTransition = false) {
        const fx = this._addProp('to', prop, val);
        if (clearProperyAfterTransition) {
            this.afterClearStyles([fx.trans ? 'transform' : prop]);
        }
        return this;
    }
    fromTo(prop, fromVal, toVal, clearProperyAfterTransition) {
        return this.from(prop, fromVal).to(prop, toVal, clearProperyAfterTransition);
    }
    _getProp(name) {
        if (this._fxProperties) {
            return this._fxProperties.find(prop => prop.effectName === name);
        }
        return undefined;
    }
    _addProp(state, prop, val) {
        let fxProp = this._getProp(prop);
        if (!fxProp) {
            const shouldTrans = (TRANSFORM_PROPS[prop] === 1);
            fxProp = {
                effectName: prop,
                trans: shouldTrans,
                wc: (shouldTrans ? 'transform' : prop)
            };
            (this._fxProperties = this._fxProperties || []).push(fxProp);
        }
        const fxState = {
            val,
            num: 0,
            effectUnit: '',
        };
        fxProp[state] = fxState;
        if (typeof val === 'string' && val.indexOf(' ') < 0) {
            const r = val.match(CSS_VALUE_REGEX);
            if (r) {
                const num = parseFloat(r[1]);
                if (!isNaN(num)) {
                    fxState.num = num;
                }
                fxState.effectUnit = (r[0] !== r[2] ? r[2] : '');
            }
        }
        else if (typeof val === 'number') {
            fxState.num = val;
        }
        return fxProp;
    }
    beforeAddClass(className) {
        (this._beforeAddClasses = this._beforeAddClasses || []).push(className);
        return this;
    }
    beforeRemoveClass(className) {
        (this._beforeRemoveClasses = this._beforeRemoveClasses || []).push(className);
        return this;
    }
    beforeStyles(styles) {
        this._beforeStyles = styles;
        return this;
    }
    beforeClearStyles(propertyNames) {
        this._beforeStyles = this._beforeStyles || {};
        for (const prop of propertyNames) {
            this._beforeStyles[prop] = '';
        }
        return this;
    }
    beforeAddRead(domReadFn) {
        (this._readCallbacks = this._readCallbacks || []).push(domReadFn);
        return this;
    }
    beforeAddWrite(domWriteFn) {
        (this._writeCallbacks = this._writeCallbacks || []).push(domWriteFn);
        return this;
    }
    afterAddClass(className) {
        (this._afterAddClasses = this._afterAddClasses || []).push(className);
        return this;
    }
    afterRemoveClass(className) {
        (this._afterRemoveClasses = this._afterRemoveClasses || []).push(className);
        return this;
    }
    afterStyles(styles) {
        this._afterStyles = styles;
        return this;
    }
    afterClearStyles(propertyNames) {
        this._afterStyles = this._afterStyles || {};
        for (const prop of propertyNames) {
            this._afterStyles[prop] = '';
        }
        return this;
    }
    play(opts) {
        if (this._destroyed) {
            return;
        }
        this._isAsync = this._hasDuration(opts);
        this._clearAsync();
        this._playInit(opts);
        raf(() => {
            raf(() => {
                this._playDomInspect(opts);
            });
        });
    }
    playAsync(opts) {
        return new Promise(resolve => {
            this.onFinish(resolve, { oneTimeCallback: true, clearExistingCallbacks: true });
            this.play(opts);
            return this;
        });
    }
    playSync() {
        if (!this._destroyed) {
            const opts = { duration: 0 };
            this._isAsync = false;
            this._clearAsync();
            this._playInit(opts);
            this._playDomInspect(opts);
        }
    }
    _playInit(opts) {
        this._hasTweenEffect = false;
        this.isPlaying = true;
        this.hasCompleted = false;
        this._hasDur = (this.getDuration(opts) > DURATION_MIN);
        const children = this._childAnimations;
        if (children) {
            for (const child of children) {
                child._playInit(opts);
            }
        }
        if (this._hasDur) {
            this._progress(0);
            this._willChange(true);
        }
    }
    _playDomInspect(opts) {
        this._beforeAnimation();
        const dur = this.getDuration(opts);
        if (this._isAsync) {
            this._asyncEnd(dur, true);
        }
        this._playProgress(opts);
        if (this._isAsync && !this._destroyed) {
            raf(() => {
                this._playToStep(1);
            });
        }
    }
    _playProgress(opts) {
        const children = this._childAnimations;
        if (children) {
            for (const child of children) {
                child._playProgress(opts);
            }
        }
        if (this._hasDur) {
            this._setTrans(this.getDuration(opts), false);
        }
        else {
            this._progress(1);
            this._setAfterStyles();
            this._didFinish(true);
        }
    }
    _playToStep(stepValue) {
        if (!this._destroyed) {
            const children = this._childAnimations;
            if (children) {
                for (const child of children) {
                    child._playToStep(stepValue);
                }
            }
            if (this._hasDur) {
                this._progress(stepValue);
            }
        }
    }
    _asyncEnd(dur, shouldComplete) {
        const self = this;
        function onTransitionEnd() {
            self._clearAsync();
            self._playEnd();
            self._didFinishAll(shouldComplete, true, false);
        }
        function onTransitionFallback() {
            console.debug('Animation onTransitionFallback, CSS onTransitionEnd did not fire!');
            self._timerId = undefined;
            self._clearAsync();
            self._playEnd(shouldComplete ? 1 : 0);
            self._didFinishAll(shouldComplete, true, false);
        }
        self._unregisterTrnsEnd = transitionEnd(self._transEl(), onTransitionEnd);
        self._timerId = setTimeout(onTransitionFallback, (dur + TRANSITION_END_FALLBACK_PADDING_MS));
    }
    _playEnd(stepValue) {
        const children = this._childAnimations;
        if (children) {
            for (const child of children) {
                child._playEnd(stepValue);
            }
        }
        if (this._hasDur) {
            if (stepValue !== undefined) {
                this._setTrans(0, true);
                this._progress(stepValue);
            }
            this._setAfterStyles();
            this._willChange(false);
        }
    }
    _hasDuration(opts) {
        if (this.getDuration(opts) > DURATION_MIN) {
            return true;
        }
        const children = this._childAnimations;
        if (children) {
            for (const child of children) {
                if (child._hasDuration(opts)) {
                    return true;
                }
            }
        }
        return false;
    }
    _hasDomReads() {
        if (this._readCallbacks && this._readCallbacks.length > 0) {
            return true;
        }
        const children = this._childAnimations;
        if (children) {
            for (const child of children) {
                if (child._hasDomReads()) {
                    return true;
                }
            }
        }
        return false;
    }
    stop(stepValue = 1) {
        this._clearAsync();
        this._hasDur = true;
        this._playEnd(stepValue);
    }
    _clearAsync() {
        if (this._unregisterTrnsEnd) {
            this._unregisterTrnsEnd();
        }
        if (this._timerId) {
            clearTimeout(this._timerId);
        }
        this._timerId = this._unregisterTrnsEnd = undefined;
    }
    _progress(stepValue) {
        let val;
        const elements = this._elements;
        const effects = this._fxProperties;
        if (!elements || elements.length === 0 || !effects || this._destroyed) {
            return;
        }
        if (this._isReverse) {
            stepValue = 1 - stepValue;
        }
        let i = 0;
        let j = 0;
        let finalTransform = '';
        let fx;
        for (i = 0; i < effects.length; i++) {
            fx = effects[i];
            if (fx.from && fx.to) {
                const fromNum = fx.from.num;
                const toNum = fx.to.num;
                const tweenEffect = (fromNum !== toNum);
                if (tweenEffect) {
                    this._hasTweenEffect = true;
                }
                if (stepValue === 0) {
                    val = fx.from.val;
                }
                else if (stepValue === 1) {
                    val = fx.to.val;
                }
                else if (tweenEffect) {
                    const valNum = (((toNum - fromNum) * stepValue) + fromNum);
                    const unit = fx.to.effectUnit;
                    val = valNum + unit;
                }
                if (val !== null) {
                    const prop = fx.effectName;
                    if (fx.trans) {
                        finalTransform += prop + '(' + val + ') ';
                    }
                    else {
                        for (j = 0; j < elements.length; j++) {
                            elements[j].style.setProperty(prop, val);
                        }
                    }
                }
            }
        }
        if (finalTransform.length > 0) {
            if (!this._isReverse && stepValue !== 1 || this._isReverse && stepValue !== 0) {
                finalTransform += 'translateZ(0px)';
            }
            for (i = 0; i < elements.length; i++) {
                elements[i].style.setProperty('transform', finalTransform);
            }
        }
    }
    _setTrans(dur, forcedLinearEasing) {
        const elements = this._elements;
        if (!elements || elements.length === 0 || !this._fxProperties) {
            return;
        }
        const easing = (forcedLinearEasing ? 'linear' : this.getEasing());
        const durString = dur + 'ms';
        for (const { style } of elements) {
            if (dur > 0) {
                style.transitionDuration = durString;
                if (easing !== null) {
                    style.transitionTimingFunction = easing;
                }
            }
            else {
                style.transitionDuration = '0';
            }
        }
    }
    _beforeAnimation() {
        this._fireBeforeReadFunc();
        this._fireBeforeWriteFunc();
        this._setBeforeStyles();
    }
    _setBeforeStyles() {
        const children = this._childAnimations;
        if (children) {
            for (const child of children) {
                child._setBeforeStyles();
            }
        }
        const elements = this._elements;
        if (!elements || elements.length === 0 || this._isReverse) {
            return;
        }
        const addClasses = this._beforeAddClasses;
        const removeClasses = this._beforeRemoveClasses;
        for (const el of elements) {
            const elementClassList = el.classList;
            if (addClasses) {
                for (const c of addClasses) {
                    elementClassList.add(c);
                }
            }
            if (removeClasses) {
                for (const c of removeClasses) {
                    elementClassList.remove(c);
                }
            }
            if (this._beforeStyles) {
                for (const [key, value] of Object.entries(this._beforeStyles)) {
                    el.style.setProperty(key, value);
                }
            }
        }
    }
    _fireBeforeReadFunc() {
        const children = this._childAnimations;
        if (children) {
            for (const child of children) {
                child._fireBeforeReadFunc();
            }
        }
        const readFunctions = this._readCallbacks;
        if (readFunctions) {
            for (const callback of readFunctions) {
                callback();
            }
        }
    }
    _fireBeforeWriteFunc() {
        const children = this._childAnimations;
        if (children) {
            for (const child of children) {
                child._fireBeforeWriteFunc();
            }
        }
        const writeFunctions = this._writeCallbacks;
        if (writeFunctions) {
            for (const callback of writeFunctions) {
                callback();
            }
        }
    }
    _setAfterStyles() {
        const elements = this._elements;
        if (!elements) {
            return;
        }
        for (const el of elements) {
            const elementClassList = el.classList;
            el.style.transitionDuration = el.style.transitionTimingFunction = '';
            if (this._isReverse) {
                const beforeAddClasses = this._beforeAddClasses;
                if (beforeAddClasses) {
                    for (const c of beforeAddClasses) {
                        elementClassList.remove(c);
                    }
                }
                const beforeRemoveClasses = this._beforeRemoveClasses;
                if (beforeRemoveClasses) {
                    for (const c of beforeRemoveClasses) {
                        elementClassList.add(c);
                    }
                }
                const beforeStyles = this._beforeStyles;
                if (beforeStyles) {
                    for (const propName of Object.keys(beforeStyles)) {
                        el.style.removeProperty(propName);
                    }
                }
            }
            else {
                const afterAddClasses = this._afterAddClasses;
                if (afterAddClasses) {
                    for (const c of afterAddClasses) {
                        elementClassList.add(c);
                    }
                }
                const afterRemoveClasses = this._afterRemoveClasses;
                if (afterRemoveClasses) {
                    for (const c of afterRemoveClasses) {
                        elementClassList.remove(c);
                    }
                }
                const afterStyles = this._afterStyles;
                if (afterStyles) {
                    for (const [key, value] of Object.entries(afterStyles)) {
                        el.style.setProperty(key, value);
                    }
                }
            }
        }
    }
    _willChange(addWillChange) {
        let wc;
        const effects = this._fxProperties;
        let willChange;
        if (addWillChange && effects) {
            wc = [];
            for (const effect of effects) {
                const propWC = effect.wc;
                if (propWC === 'webkitTransform') {
                    wc.push('transform', '-webkit-transform');
                }
                else if (propWC !== undefined) {
                    wc.push(propWC);
                }
            }
            willChange = wc.join(',');
        }
        else {
            willChange = '';
        }
        const elements = this._elements;
        if (elements) {
            for (const el of elements) {
                el.style.setProperty('will-change', willChange);
            }
        }
    }
    progressStart() {
        this._clearAsync();
        this._beforeAnimation();
        this._progressStart();
    }
    _progressStart() {
        const children = this._childAnimations;
        if (children) {
            for (const child of children) {
                child._progressStart();
            }
        }
        this._setTrans(0, true);
        this._willChange(true);
    }
    progressStep(stepValue) {
        stepValue = Math.min(1, Math.max(0, stepValue));
        const children = this._childAnimations;
        if (children) {
            for (const child of children) {
                child.progressStep(stepValue);
            }
        }
        this._progress(stepValue);
    }
    progressEnd(shouldComplete, currentStepValue, dur = -1) {
        if (this._isReverse) {
            currentStepValue = 1 - currentStepValue;
        }
        const stepValue = shouldComplete ? 1 : 0;
        const diff = Math.abs(currentStepValue - stepValue);
        if (dur < 0) {
            dur = this._duration || 0;
        }
        else if (diff < 0.05) {
            dur = 0;
        }
        this._isAsync = (dur > 30);
        this._progressEnd(shouldComplete, stepValue, dur, this._isAsync);
        if (this._isAsync) {
            this._asyncEnd(dur, shouldComplete);
            if (!this._destroyed) {
                raf(() => {
                    this._playToStep(stepValue);
                });
            }
        }
    }
    _progressEnd(shouldComplete, stepValue, dur, isAsync) {
        const children = this._childAnimations;
        if (children) {
            for (const child of children) {
                child._progressEnd(shouldComplete, stepValue, dur, isAsync);
            }
        }
        if (!isAsync) {
            this._progress(stepValue);
            this._willChange(false);
            this._setAfterStyles();
            this._didFinish(shouldComplete);
        }
        else {
            this.isPlaying = true;
            this.hasCompleted = false;
            this._hasDur = true;
            this._willChange(true);
            this._setTrans(dur, false);
        }
    }
    onFinish(callback, opts) {
        if (opts && opts.clearExistingCallbacks) {
            this._onFinishCallbacks = this._onFinishOneTimeCallbacks = undefined;
        }
        if (opts && opts.oneTimeCallback) {
            this._onFinishOneTimeCallbacks = this._onFinishOneTimeCallbacks || [];
            this._onFinishOneTimeCallbacks.push(callback);
        }
        else {
            this._onFinishCallbacks = this._onFinishCallbacks || [];
            this._onFinishCallbacks.push(callback);
        }
        return this;
    }
    _didFinishAll(hasCompleted, finishAsyncAnimations, finishNoDurationAnimations) {
        const children = this._childAnimations;
        if (children) {
            for (const child of children) {
                child._didFinishAll(hasCompleted, finishAsyncAnimations, finishNoDurationAnimations);
            }
        }
        if (finishAsyncAnimations && this._isAsync || finishNoDurationAnimations && !this._isAsync) {
            this._didFinish(hasCompleted);
        }
    }
    _didFinish(hasCompleted) {
        this.isPlaying = false;
        this.hasCompleted = hasCompleted;
        if (this._onFinishCallbacks) {
            for (const callback of this._onFinishCallbacks) {
                callback(this);
            }
        }
        if (this._onFinishOneTimeCallbacks) {
            for (const callback of this._onFinishOneTimeCallbacks) {
                callback(this);
            }
            this._onFinishOneTimeCallbacks.length = 0;
        }
    }
    reverse(shouldReverse = true) {
        const children = this._childAnimations;
        if (children) {
            for (const child of children) {
                child.reverse(shouldReverse);
            }
        }
        this._isReverse = !!shouldReverse;
        return this;
    }
    destroy() {
        this._didFinish(false);
        this._destroyed = true;
        const children = this._childAnimations;
        if (children) {
            for (const child of children) {
                child.destroy();
            }
        }
        this._clearAsync();
        if (this._elements) {
            this._elements.length = 0;
        }
        if (this._readCallbacks) {
            this._readCallbacks.length = 0;
        }
        if (this._writeCallbacks) {
            this._writeCallbacks.length = 0;
        }
        this.parent = undefined;
        if (this._childAnimations) {
            this._childAnimations.length = 0;
        }
        if (this._onFinishCallbacks) {
            this._onFinishCallbacks.length = 0;
        }
        if (this._onFinishOneTimeCallbacks) {
            this._onFinishOneTimeCallbacks.length = 0;
        }
    }
    _transEl() {
        const children = this._childAnimations;
        if (children) {
            for (const child of children) {
                const targetEl = child._transEl();
                if (targetEl) {
                    return targetEl;
                }
            }
        }
        return (this._hasTweenEffect &&
            this._hasDur &&
            this._elements !== undefined &&
            this._elements.length > 0 ?
            this._elements[0] : null);
    }
}
Animator.animated = true;

class AnimationControllerImpl {
    create(animationBuilder, baseEl, opts) {
        Animator.animated = this.config.getBoolean("animated", true);
        if (animationBuilder) {
            return animationBuilder(Animator, baseEl, opts);
        }
        return Promise.resolve(new Animator());
    }
    static get is() { return "ion-animation-controller"; }
    static get properties() {
        return {
            "config": {
                "context": "config"
            },
            "create": {
                "method": true
            }
        };
    }
}

class App {
    componentDidLoad() {
        rIC(() => {
            const { win, config, queue } = this;
            importTapClick(win);
            importInputShims(win, config);
            importStatusTap(win, config, queue);
            importHardwareBackButton(win, config);
        });
    }
    hostData() {
        return {
            class: {
                "ion-page": true,
                "force-statusbar-padding": this.config.getBoolean("_forceStatusbarPadding")
            }
        };
    }
    static get is() { return "ion-app"; }
    static get properties() {
        return {
            "config": {
                "context": "config"
            },
            "el": {
                "elementRef": true
            },
            "queue": {
                "context": "queue"
            },
            "win": {
                "context": "window"
            }
        };
    }
    static get style() { return "html.plt-mobile ion-app {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\nion-app.force-statusbar-padding {\n  --ion-safe-area-top: 20px; }"; }
}
function importHardwareBackButton(win, config) {
    const hardwareBackConfig = config.getBoolean("hardwareBackButton", isPlatform(win, "hybrid"));
    if (hardwareBackConfig) {
        import("./hardware-back-button.js").then(module => module.startHardwareBackButton(win));
    }
}
function importStatusTap(win, config, queue) {
    const statusTap = config.getBoolean("statusTap", isPlatform(win, "hybrid"));
    if (statusTap) {
        import("./status-tap.js").then(module => module.startStatusTap(win, queue));
    }
}
function importTapClick(win) {
    import("./tap-click.js").then(module => module.startTapClick(win.document));
}
function importInputShims(win, config) {
    const inputShims = config.getBoolean("inputShims", needInputShims(win));
    if (inputShims) {
        import("./input-shims.js").then(module => module.startInputShims(win.document, config));
    }
}
function needInputShims(win) {
    return isPlatform(win, "ios") && isPlatform(win, "mobile");
}

class Footer {
    constructor() {
        this.translucent = false;
    }
    hostData() {
        const themedClasses = createThemedClasses(this.mode, "footer");
        const translucentClasses = this.translucent ? createThemedClasses(this.mode, "footer-translucent") : null;
        return {
            class: Object.assign({}, themedClasses, translucentClasses)
        };
    }
    static get is() { return "ion-footer"; }
    static get properties() {
        return {
            "mode": {
                "type": String,
                "attr": "mode"
            },
            "translucent": {
                "type": Boolean,
                "attr": "translucent"
            }
        };
    }
    static get style() { return "ion-footer {\n  display: block;\n  position: relative;\n  -webkit-box-ordinal-group: 2;\n  -ms-flex-order: 1;\n  order: 1;\n  width: 100%;\n  z-index: 10; }\n\nion-footer ion-toolbar:last-child {\n  padding-bottom: var(--ion-safe-area-bottom, 0); }\n\n.footer-ios ion-toolbar:first-child {\n  --border-width: 0.55px 0 0; }\n\n.footer-ios[no-border] ion-toolbar:first-child {\n  --border-width: 0; }\n\n.footer-translucent-ios {\n  -webkit-backdrop-filter: saturate(180%) blur(20px);\n  backdrop-filter: saturate(180%) blur(20px); }\n\n.footer-translucent-ios ion-toolbar {\n  --opacity: .8;\n  --backdrop-filter: saturate(180%) blur(20px); }"; }
    static get styleMode() { return "ios"; }
}

const iosTransitionAnimation = () => import("./ios.transition.js");
const mdTransitionAnimation = () => import("./md.transition.js");
function transition(opts) {
    return new Promise((resolve, reject) => {
        opts.queue.write(() => {
            beforeTransition(opts);
            runTransition(opts).then(result => {
                if (result.animation) {
                    result.animation.destroy();
                }
                afterTransition(opts);
                resolve(result);
            }, error => {
                afterTransition(opts);
                reject(error);
            });
        });
    });
}
function beforeTransition(opts) {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    setZIndex(enteringEl, leavingEl, opts.direction);
    if (opts.showGoBack) {
        enteringEl.classList.add('can-go-back');
    }
    else {
        enteringEl.classList.remove('can-go-back');
    }
    setPageHidden(enteringEl, false);
    if (leavingEl) {
        setPageHidden(leavingEl, false);
    }
}
async function runTransition(opts) {
    const animationBuilder = await getAnimationBuilder(opts);
    const ani = (animationBuilder)
        ? animation(animationBuilder, opts)
        : noAnimation(opts);
    return ani;
}
function afterTransition(opts) {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    enteringEl.classList.remove('ion-page-invisible');
    if (leavingEl !== undefined) {
        leavingEl.classList.remove('ion-page-invisible');
    }
}
async function getAnimationBuilder(opts) {
    if (!opts.leavingEl || !opts.animated || opts.duration === 0) {
        return undefined;
    }
    if (opts.animationBuilder) {
        return opts.animationBuilder;
    }
    const builder = (opts.mode === 'ios')
        ? (await iosTransitionAnimation()).iosTransitionAnimation
        : (await mdTransitionAnimation()).mdTransitionAnimation;
    return builder;
}
async function animation(animationBuilder, opts) {
    await waitForReady(opts, true);
    const trns = await opts.animationCtrl.create(animationBuilder, opts.baseEl, opts);
    fireWillEvents(opts.window, opts.enteringEl, opts.leavingEl);
    await playTransition(trns, opts);
    if (trns.hasCompleted) {
        fireDidEvents(opts.window, opts.enteringEl, opts.leavingEl);
    }
    return {
        hasCompleted: trns.hasCompleted,
        animation: trns
    };
}
async function noAnimation(opts) {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    await waitForReady(opts, false);
    fireWillEvents(opts.window, enteringEl, leavingEl);
    fireDidEvents(opts.window, enteringEl, leavingEl);
    return {
        hasCompleted: true
    };
}
async function waitForReady(opts, defaultDeep) {
    const deep = opts.deepWait !== undefined ? opts.deepWait : defaultDeep;
    const promises = deep ? [
        deepReady(opts.enteringEl),
        deepReady(opts.leavingEl),
    ] : [
        shallowReady(opts.enteringEl),
        shallowReady(opts.leavingEl),
    ];
    await Promise.all(promises);
    await notifyViewReady(opts.viewIsReady, opts.enteringEl);
}
async function notifyViewReady(viewIsReady, enteringEl) {
    if (viewIsReady) {
        await viewIsReady(enteringEl);
    }
}
function playTransition(trans, opts) {
    const progressCallback = opts.progressCallback;
    const promise = new Promise(resolve => trans.onFinish(resolve));
    if (progressCallback) {
        trans.progressStart();
        progressCallback(trans);
    }
    else {
        trans.play();
    }
    return promise;
}
function fireWillEvents(win, enteringEl, leavingEl) {
    lifecycle(win, leavingEl, "ionViewWillLeave");
    lifecycle(win, enteringEl, "ionViewWillEnter");
}
function fireDidEvents(win, enteringEl, leavingEl) {
    lifecycle(win, enteringEl, "ionViewDidEnter");
    lifecycle(win, leavingEl, "ionViewDidLeave");
}
function lifecycle(win, el, eventName) {
    if (el) {
        const CEvent = win.CustomEvent;
        const event = new CEvent(eventName, {
            bubbles: false,
            cancelable: false,
        });
        el.dispatchEvent(event);
    }
}
function shallowReady(el) {
    if (el && el.componentOnReady) {
        return el.componentOnReady();
    }
    return Promise.resolve();
}
async function deepReady(el) {
    const element = el;
    if (element) {
        if (element.componentOnReady != null) {
            const stencilEl = await element.componentOnReady();
            if (stencilEl != null) {
                return;
            }
        }
        await Promise.all(Array.from(element.children).map(deepReady));
    }
}
function setPageHidden(el, hidden) {
    if (hidden) {
        el.setAttribute('aria-hidden', 'true');
        el.classList.add('ion-page-hidden');
    }
    else {
        el.hidden = false;
        el.removeAttribute('aria-hidden');
        el.classList.remove('ion-page-hidden');
    }
}
function setZIndex(enteringEl, leavingEl, direction) {
    if (enteringEl !== undefined) {
        enteringEl.style.zIndex = (direction === 'back')
            ? '99'
            : '101';
    }
    if (leavingEl !== undefined) {
        leavingEl.style.zIndex = '100';
    }
}

async function attachComponent(delegate, container, component, cssClasses, componentProps) {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
}

class ViewController {
    constructor(component, params) {
        this.component = component;
        this.params = params;
        this.state = 1;
    }
    async init(container) {
        this.state = 2;
        if (!this.element) {
            const component = this.component;
            this.element = await attachComponent(this.delegate, container, component, ['ion-page', 'ion-page-invisible'], this.params);
        }
    }
    _destroy() {
        assert(this.state !== 3, 'view state must be ATTACHED');
        const element = this.element;
        if (element) {
            if (this.delegate) {
                this.delegate.removeViewFromDom(element.parentElement, element);
            }
            else {
                element.remove();
            }
        }
        this.nav = undefined;
        this.state = 3;
    }
}
function matches(view, id, params) {
    if (!view) {
        return false;
    }
    if (view.component !== id) {
        return false;
    }
    const currentParams = view.params;
    if (currentParams === params) {
        return true;
    }
    if (!currentParams && !params) {
        return true;
    }
    if (!currentParams || !params) {
        return false;
    }
    const keysA = Object.keys(currentParams);
    const keysB = Object.keys(params);
    if (keysA.length !== keysB.length) {
        return false;
    }
    for (const key of keysA) {
        if (currentParams[key] !== params[key]) {
            return false;
        }
    }
    return true;
}
function convertToView(page, params) {
    if (!page) {
        return null;
    }
    if (page instanceof ViewController) {
        return page;
    }
    return new ViewController(page, params);
}
function convertToViews(pages) {
    return pages.map(page => {
        if (page instanceof ViewController) {
            return page;
        }
        if ('page' in page) {
            return convertToView(page.page, page.params);
        }
        return convertToView(page, undefined);
    }).filter(v => v !== null);
}

class Nav {
    constructor() {
        this.transInstr = [];
        this.useRouter = false;
        this.isTransitioning = false;
        this.destroyed = false;
        this.views = [];
        this.animated = true;
    }
    swipeGestureChanged() {
        if (this.gesture) {
            this.gesture.setDisabled(this.swipeGesture !== true);
        }
    }
    rootChanged() {
        if (this.root !== undefined) {
            if (!this.useRouter) {
                this.setRoot(this.root, this.rootParams);
            }
            else {
                console.warn("<ion-nav> does not support a root attribute when using ion-router.");
            }
        }
    }
    componentWillLoad() {
        this.useRouter =
            !!this.win.document.querySelector("ion-router") &&
                !this.el.closest("[no-router]");
        if (this.swipeGesture === undefined) {
            this.swipeGesture = this.config.getBoolean("swipeBackEnabled", this.mode === "ios");
        }
        this.ionNavWillLoad.emit();
    }
    async componentDidLoad() {
        this.rootChanged();
        this.gesture = (await import("./gesture.js")).createGesture({
            el: this.win.document.body,
            queue: this.queue,
            gestureName: "goback-swipe",
            gesturePriority: 30,
            threshold: 10,
            canStart: () => this.canStart(),
            onStart: () => this.onStart(),
            onMove: ev => this.onMove(ev),
            onEnd: ev => this.onEnd(ev),
        });
        this.swipeGestureChanged();
    }
    componentDidUnload() {
        for (const view of this.views) {
            lifecycle(this.win, view.element, "ionViewWillUnload");
            view._destroy();
        }
        if (this.gesture) {
            this.gesture.destroy();
        }
        if (this.sbTrns) {
            this.sbTrns.destroy();
        }
        this.transInstr.length = this.views.length = 0;
        this.sbTrns = undefined;
        this.destroyed = true;
    }
    push(component, componentProps, opts, done) {
        return this.queueTrns({
            insertStart: -1,
            insertViews: [{ page: component, params: componentProps }],
            opts
        }, done);
    }
    insert(insertIndex, component, componentProps, opts, done) {
        return this.queueTrns({
            insertStart: insertIndex,
            insertViews: [{ page: component, params: componentProps }],
            opts
        }, done);
    }
    insertPages(insertIndex, insertComponents, opts, done) {
        return this.queueTrns({
            insertStart: insertIndex,
            insertViews: insertComponents,
            opts
        }, done);
    }
    pop(opts, done) {
        return this.queueTrns({
            removeStart: -1,
            removeCount: 1,
            opts
        }, done);
    }
    popTo(indexOrViewCtrl, opts, done) {
        const config = {
            removeStart: -1,
            removeCount: -1,
            opts
        };
        if (typeof indexOrViewCtrl === "object" && indexOrViewCtrl.component) {
            config.removeView = indexOrViewCtrl;
            config.removeStart = 1;
        }
        else if (typeof indexOrViewCtrl === "number") {
            config.removeStart = indexOrViewCtrl + 1;
        }
        return this.queueTrns(config, done);
    }
    popToRoot(opts, done) {
        return this.queueTrns({
            removeStart: 1,
            removeCount: -1,
            opts
        }, done);
    }
    removeIndex(startIndex, removeCount = 1, opts, done) {
        return this.queueTrns({
            removeStart: startIndex,
            removeCount,
            opts
        }, done);
    }
    setRoot(component, componentProps, opts, done) {
        return this.setPages([{ page: component, params: componentProps }], opts, done);
    }
    setPages(views, opts, done) {
        if (opts == null) {
            opts = {};
        }
        if (opts.animated !== true) {
            opts.animated = false;
        }
        return this.queueTrns({
            insertStart: 0,
            insertViews: views,
            removeStart: 0,
            removeCount: -1,
            opts
        }, done);
    }
    setRouteId(id, params, direction) {
        const active = this.getActiveSync();
        if (matches(active, id, params)) {
            return Promise.resolve({
                changed: false,
                element: active.element
            });
        }
        let resolve;
        const promise = new Promise(r => (resolve = r));
        let finish;
        const commonOpts = {
            updateURL: false,
            viewIsReady: enteringEl => {
                let mark;
                const p = new Promise(r => (mark = r));
                resolve({
                    changed: true,
                    element: enteringEl,
                    markVisible: async () => {
                        mark();
                        await finish;
                    }
                });
                return p;
            }
        };
        if (direction === 0) {
            finish = this.setRoot(id, params, commonOpts);
        }
        else {
            const viewController = this.views.find(v => matches(v, id, params));
            if (viewController) {
                finish = this.popTo(viewController, Object.assign({}, commonOpts, { direction: "back" }));
            }
            else if (direction === 1) {
                finish = this.push(id, params, commonOpts);
            }
            else if (direction === -1) {
                finish = this.setRoot(id, params, Object.assign({}, commonOpts, { direction: "back", animated: true }));
            }
        }
        return promise;
    }
    async getRouteId() {
        const active = this.getActiveSync();
        return active
            ? {
                id: active.element.tagName,
                params: active.params,
                element: active.element
            }
            : undefined;
    }
    getActive() {
        return Promise.resolve(this.getActiveSync());
    }
    getByIndex(index) {
        return Promise.resolve(this.views[index]);
    }
    canGoBack(view) {
        return Promise.resolve(this.canGoBackSync(view));
    }
    getPrevious(view) {
        return Promise.resolve(this.getPreviousSync(view));
    }
    getLength() {
        return this.views.length;
    }
    getActiveSync() {
        return this.views[this.views.length - 1];
    }
    canGoBackSync(view = this.getActiveSync()) {
        return !!(view && this.getPreviousSync(view));
    }
    getPreviousSync(view = this.getActiveSync()) {
        if (!view) {
            return undefined;
        }
        const views = this.views;
        const index = views.indexOf(view);
        return index > 0 ? views[index - 1] : undefined;
    }
    queueTrns(ti, done) {
        if (this.isTransitioning && ti.opts != null && ti.opts.skipIfBusy) {
            return Promise.resolve(false);
        }
        const promise = new Promise((resolve, reject) => {
            ti.resolve = resolve;
            ti.reject = reject;
        });
        ti.done = done;
        if (ti.insertViews && ti.insertViews.length === 0) {
            ti.insertViews = undefined;
        }
        this.transInstr.push(ti);
        this.nextTrns();
        return promise;
    }
    success(result, ti) {
        if (this.destroyed) {
            this.fireError("nav controller was destroyed", ti);
            return;
        }
        if (ti.done) {
            ti.done(result.hasCompleted, result.requiresTransition, result.enteringView, result.leavingView, result.direction);
        }
        ti.resolve(result.hasCompleted);
        if (ti.opts.updateURL !== false && this.useRouter) {
            const router = this.win.document.querySelector("ion-router");
            if (router) {
                const direction = result.direction === "back" ? -1 : 1;
                router.navChanged(direction);
            }
        }
    }
    failed(rejectReason, ti) {
        if (this.destroyed) {
            this.fireError("nav controller was destroyed", ti);
            return;
        }
        this.transInstr.length = 0;
        this.fireError(rejectReason, ti);
    }
    fireError(rejectReason, ti) {
        if (ti.done) {
            ti.done(false, false, rejectReason);
        }
        if (ti.reject && !this.destroyed) {
            ti.reject(rejectReason);
        }
        else {
            ti.resolve(false);
        }
    }
    nextTrns() {
        if (this.isTransitioning) {
            return false;
        }
        const ti = this.transInstr.shift();
        if (!ti) {
            return false;
        }
        this.runTransition(ti);
        return true;
    }
    async runTransition(ti) {
        try {
            this.ionNavWillChange.emit();
            this.isTransitioning = true;
            this.prepareTI(ti);
            const leavingView = this.getActiveSync();
            const enteringView = this.getEnteringView(ti, leavingView);
            if (!leavingView && !enteringView) {
                throw new Error("no views in the stack to be removed");
            }
            if (enteringView && enteringView.state === 1) {
                await enteringView.init(this.el);
            }
            this.postViewInit(enteringView, leavingView, ti);
            const requiresTransition = (ti.enteringRequiresTransition || ti.leavingRequiresTransition) &&
                enteringView !== leavingView;
            const result = requiresTransition
                ? await this.transition(enteringView, leavingView, ti)
                : {
                    hasCompleted: true,
                    requiresTransition: false
                };
            this.success(result, ti);
            this.ionNavDidChange.emit();
        }
        catch (rejectReason) {
            this.failed(rejectReason, ti);
        }
        this.isTransitioning = false;
        this.nextTrns();
    }
    prepareTI(ti) {
        const viewsLength = this.views.length;
        ti.opts = ti.opts || {};
        if (ti.opts.delegate === undefined) {
            ti.opts.delegate = this.delegate;
        }
        if (ti.removeView !== undefined) {
            assert(ti.removeStart !== undefined, "removeView needs removeStart");
            assert(ti.removeCount !== undefined, "removeView needs removeCount");
            const index = this.views.indexOf(ti.removeView);
            if (index < 0) {
                throw new Error("removeView was not found");
            }
            ti.removeStart += index;
        }
        if (ti.removeStart !== undefined) {
            if (ti.removeStart < 0) {
                ti.removeStart = viewsLength - 1;
            }
            if (ti.removeCount < 0) {
                ti.removeCount = viewsLength - ti.removeStart;
            }
            ti.leavingRequiresTransition =
                ti.removeCount > 0 && ti.removeStart + ti.removeCount === viewsLength;
        }
        if (ti.insertViews) {
            if (ti.insertStart < 0 || ti.insertStart > viewsLength) {
                ti.insertStart = viewsLength;
            }
            ti.enteringRequiresTransition = ti.insertStart === viewsLength;
        }
        const insertViews = ti.insertViews;
        if (!insertViews) {
            return;
        }
        assert(insertViews.length > 0, "length can not be zero");
        const viewControllers = convertToViews(insertViews);
        if (viewControllers.length === 0) {
            throw new Error("invalid views to insert");
        }
        for (const view of viewControllers) {
            view.delegate = ti.opts.delegate;
            const nav = view.nav;
            if (nav && nav !== this) {
                throw new Error("inserted view was already inserted");
            }
            if (view.state === 3) {
                throw new Error("inserted view was already destroyed");
            }
        }
        ti.insertViews = viewControllers;
    }
    getEnteringView(ti, leavingView) {
        const insertViews = ti.insertViews;
        if (insertViews !== undefined) {
            return insertViews[insertViews.length - 1];
        }
        const removeStart = ti.removeStart;
        if (removeStart !== undefined) {
            const views = this.views;
            const removeEnd = removeStart + ti.removeCount;
            for (let i = views.length - 1; i >= 0; i--) {
                const view = views[i];
                if ((i < removeStart || i >= removeEnd) && view !== leavingView) {
                    return view;
                }
            }
        }
        return undefined;
    }
    postViewInit(enteringView, leavingView, ti) {
        assert(leavingView || enteringView, "Both leavingView and enteringView are null");
        assert(ti.resolve, "resolve must be valid");
        assert(ti.reject, "reject must be valid");
        const opts = ti.opts;
        const insertViews = ti.insertViews;
        const removeStart = ti.removeStart;
        const removeCount = ti.removeCount;
        let destroyQueue;
        if (removeStart !== undefined && removeCount !== undefined) {
            assert(removeStart >= 0, "removeStart can not be negative");
            assert(removeCount >= 0, "removeCount can not be negative");
            destroyQueue = [];
            for (let i = 0; i < removeCount; i++) {
                const view = this.views[i + removeStart];
                if (view && view !== enteringView && view !== leavingView) {
                    destroyQueue.push(view);
                }
            }
            opts.direction = opts.direction || "back";
        }
        const finalBalance = this.views.length +
            (insertViews !== undefined ? insertViews.length : 0) -
            (removeCount !== undefined ? removeCount : 0);
        assert(finalBalance >= 0, "final balance can not be negative");
        if (finalBalance === 0) {
            console.warn(`You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.`, this, this.el);
            throw new Error("navigation stack needs at least one root page");
        }
        if (insertViews) {
            let insertIndex = ti.insertStart;
            for (const view of insertViews) {
                this.insertViewAt(view, insertIndex);
                insertIndex++;
            }
            if (ti.enteringRequiresTransition) {
                opts.direction = opts.direction || "forward";
            }
        }
        if (destroyQueue && destroyQueue.length > 0) {
            for (const view of destroyQueue) {
                lifecycle(this.win, view.element, "ionViewWillLeave");
                lifecycle(this.win, view.element, "ionViewDidLeave");
                lifecycle(this.win, view.element, "ionViewWillUnload");
            }
            for (const view of destroyQueue) {
                this.destroyView(view);
            }
        }
    }
    async transition(enteringView, leavingView, ti) {
        if (this.sbTrns) {
            this.sbTrns.destroy();
            this.sbTrns = undefined;
        }
        const opts = ti.opts;
        const progressCallback = opts.progressAnimation
            ? (animation) => {
                this.sbTrns = animation;
            }
            : undefined;
        const enteringEl = enteringView.element;
        const leavingEl = leavingView && leavingView.element;
        const animationOpts = Object.assign({ mode: this.mode, showGoBack: this.canGoBackSync(enteringView), animationCtrl: this.animationCtrl, queue: this.queue, window: this.win, baseEl: this.el, animationBuilder: this.animation || opts.animationBuilder || this.config.get("navAnimation"), progressCallback, animated: this.animated, enteringEl,
            leavingEl }, opts);
        const { hasCompleted } = await transition(animationOpts);
        return this.transitionFinish(hasCompleted, enteringView, leavingView, opts);
    }
    transitionFinish(hasCompleted, enteringView, leavingView, opts) {
        const cleanupView = hasCompleted ? enteringView : leavingView;
        if (cleanupView) {
            this.cleanup(cleanupView);
        }
        return {
            hasCompleted,
            requiresTransition: true,
            enteringView,
            leavingView,
            direction: opts.direction
        };
    }
    insertViewAt(view, index) {
        const views = this.views;
        const existingIndex = views.indexOf(view);
        if (existingIndex > -1) {
            assert(view.nav === this, "view is not part of the nav");
            views.splice(index, 0, views.splice(existingIndex, 1)[0]);
        }
        else {
            assert(!view.nav, "nav is used");
            view.nav = this;
            views.splice(index, 0, view);
        }
    }
    removeView(view) {
        assert(view.state === 2 || view.state === 3, "view state should be loaded or destroyed");
        const views = this.views;
        const index = views.indexOf(view);
        assert(index > -1, "view must be part of the stack");
        if (index >= 0) {
            views.splice(index, 1);
        }
    }
    destroyView(view) {
        view._destroy();
        this.removeView(view);
    }
    cleanup(activeView) {
        if (this.destroyed) {
            return;
        }
        const views = this.views;
        const activeViewIndex = views.indexOf(activeView);
        for (let i = views.length - 1; i >= 0; i--) {
            const view = views[i];
            const element = view.element;
            if (i > activeViewIndex) {
                lifecycle(this.win, element, "ionViewWillUnload");
                this.destroyView(view);
            }
            else if (i < activeViewIndex) {
                setPageHidden(element, true);
            }
        }
    }
    canStart() {
        return !!this.swipeGesture &&
            !this.isTransitioning &&
            this.canGoBackSync();
    }
    onStart() {
        if (this.isTransitioning || this.transInstr.length > 0) {
            return;
        }
        const opts = {
            direction: "back",
            progressAnimation: true
        };
        this.queueTrns({
            removeStart: -1,
            removeCount: 1,
            opts
        }, undefined);
    }
    onMove(detail) {
        if (this.sbTrns) {
            this.isTransitioning = true;
            const delta = detail.deltaX;
            const stepValue = delta / this.win.innerWidth;
            this.sbTrns.progressStep(stepValue);
        }
    }
    onEnd(detail) {
        if (this.sbTrns) {
            const delta = detail.deltaX;
            const width = this.win.innerWidth;
            const stepValue = delta / width;
            const velocity = detail.velocityX;
            const z = width / 2;
            const shouldComplete = velocity >= 0 && (velocity > 0.2 || detail.deltaX > z);
            const missing = shouldComplete ? 1 - stepValue : stepValue;
            const missingDistance = missing * width;
            let realDur = 0;
            if (missingDistance > 5) {
                const dur = missingDistance / Math.abs(velocity);
                realDur = Math.min(dur, 300);
            }
            this.sbTrns.progressEnd(shouldComplete, stepValue, realDur);
        }
    }
    render() {
        return [
            this.mode === "ios" && h("div", { class: "nav-decor" }),
            h("slot", null)
        ];
    }
    static get is() { return "ion-nav"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "animated": {
                "type": Boolean,
                "attr": "animated"
            },
            "animation": {
                "type": "Any",
                "attr": "animation"
            },
            "animationCtrl": {
                "connect": "ion-animation-controller"
            },
            "canGoBack": {
                "method": true
            },
            "config": {
                "context": "config"
            },
            "delegate": {
                "type": "Any",
                "attr": "delegate"
            },
            "el": {
                "elementRef": true
            },
            "getActive": {
                "method": true
            },
            "getByIndex": {
                "method": true
            },
            "getPrevious": {
                "method": true
            },
            "getRouteId": {
                "method": true
            },
            "insert": {
                "method": true
            },
            "insertPages": {
                "method": true
            },
            "pop": {
                "method": true
            },
            "popTo": {
                "method": true
            },
            "popToRoot": {
                "method": true
            },
            "push": {
                "method": true
            },
            "queue": {
                "context": "queue"
            },
            "removeIndex": {
                "method": true
            },
            "root": {
                "type": String,
                "attr": "root",
                "watchCallbacks": ["rootChanged"]
            },
            "rootParams": {
                "type": "Any",
                "attr": "root-params"
            },
            "setPages": {
                "method": true
            },
            "setRoot": {
                "method": true
            },
            "setRouteId": {
                "method": true
            },
            "swipeGesture": {
                "type": Boolean,
                "attr": "swipe-gesture",
                "mutable": true,
                "watchCallbacks": ["swipeGestureChanged"]
            },
            "win": {
                "context": "window"
            }
        };
    }
    static get events() {
        return [{
                "name": "ionNavWillLoad",
                "method": "ionNavWillLoad",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionNavWillChange",
                "method": "ionNavWillChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionNavDidChange",
                "method": "ionNavDidChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }];
    }
    static get style() { return ":host {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  contain: layout size style;\n  overflow: hidden;\n  z-index: 0; }\n\n.nav-decor {\n  display: none; }\n\n:host(.show-decor) .nav-decor {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: block;\n  position: absolute;\n  background: #000;\n  z-index: 0;\n  pointer-events: none; }"; }
}

class Route {
    constructor() {
        this.url = "";
    }
    onUpdate(newValue) {
        this.ionRouteDataChanged.emit(newValue);
    }
    onComponentProps(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        const keys1 = newValue ? Object.keys(newValue) : [];
        const keys2 = oldValue ? Object.keys(oldValue) : [];
        if (keys1.length !== keys2.length) {
            this.onUpdate(newValue);
            return;
        }
        for (const key of keys1) {
            if (newValue[key] !== oldValue[key]) {
                this.onUpdate(newValue);
                return;
            }
        }
    }
    componentDidLoad() {
        this.ionRouteDataChanged.emit();
    }
    componentDidUnload() {
        this.ionRouteDataChanged.emit();
    }
    static get is() { return "ion-route"; }
    static get properties() {
        return {
            "component": {
                "type": String,
                "attr": "component",
                "watchCallbacks": ["onUpdate"]
            },
            "componentProps": {
                "type": "Any",
                "attr": "component-props",
                "watchCallbacks": ["onComponentProps"]
            },
            "url": {
                "type": String,
                "attr": "url",
                "watchCallbacks": ["onUpdate"]
            }
        };
    }
    static get events() {
        return [{
                "name": "ionRouteDataChanged",
                "method": "ionRouteDataChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }];
    }
}

function generatePath(segments) {
    const path = segments
        .filter(s => s.length > 0)
        .join('/');
    return '/' + path;
}
function chainToPath(chain) {
    const path = [];
    for (const route of chain) {
        for (const segment of route.path) {
            if (segment[0] === ':') {
                const param = route.params && route.params[segment.slice(1)];
                if (!param) {
                    return null;
                }
                path.push(param);
            }
            else if (segment !== '') {
                path.push(segment);
            }
        }
    }
    return path;
}
function writePath(history, root, useHash, path, intent, state) {
    let url = generatePath([
        ...parsePath(root),
        ...path
    ]);
    if (useHash) {
        url = '#' + url;
    }
    if (intent === 1) {
        history.pushState(state, '', url);
    }
    else {
        history.replaceState(state, '', url);
    }
}
function removePrefix(prefix, path) {
    if (prefix.length > path.length) {
        return null;
    }
    if (prefix.length <= 1 && prefix[0] === '') {
        return path;
    }
    for (let i = 0; i < prefix.length; i++) {
        if (prefix[i].length > 0 && prefix[i] !== path[i]) {
            return null;
        }
    }
    if (path.length === prefix.length) {
        return [''];
    }
    return path.slice(prefix.length);
}
function readPath(loc, root, useHash) {
    let pathname = loc.pathname;
    if (useHash) {
        const hash = loc.hash;
        pathname = (hash[0] === '#')
            ? hash.slice(1)
            : '';
    }
    const prefix = parsePath(root);
    const path = parsePath(pathname);
    return removePrefix(prefix, path);
}
function parsePath(path) {
    if (path == null) {
        return [''];
    }
    const segments = path.split('/')
        .map(s => s.trim())
        .filter(s => s.length > 0);
    if (segments.length === 0) {
        return [''];
    }
    else {
        return segments;
    }
}

function printRoutes(routes) {
    console.group(`[ion-core] ROUTES[${routes.length}]`);
    for (const chain of routes) {
        const path = [];
        chain.forEach(r => path.push(...r.path));
        const ids = chain.map(r => r.id);
        console.debug(`%c ${generatePath(path)}`, 'font-weight: bold; padding-left: 20px', '=>\t', `(${ids.join(', ')})`);
    }
    console.groupEnd();
}
function printRedirects(redirects) {
    console.group(`[ion-core] REDIRECTS[${redirects.length}]`);
    for (const redirect of redirects) {
        if (redirect.to) {
            console.debug('FROM: ', `$c ${generatePath(redirect.from)}`, 'font-weight: bold', ' TO: ', `$c ${generatePath(redirect.to)}`, 'font-weight: bold');
        }
    }
    console.groupEnd();
}

async function writeNavState(root, chain, intent, index, changed = false) {
    try {
        const outlet = searchNavNode(root);
        if (index >= chain.length || !outlet) {
            return changed;
        }
        await outlet.componentOnReady();
        const route = chain[index];
        const result = await outlet.setRouteId(route.id, route.params, intent);
        if (result.changed) {
            intent = 0;
            changed = true;
        }
        changed = await writeNavState(result.element, chain, intent, index + 1, changed);
        if (result.markVisible) {
            await result.markVisible();
        }
        return changed;
    }
    catch (e) {
        console.error(e);
        return false;
    }
}
async function readNavState(root) {
    const ids = [];
    let outlet;
    let node = root;
    while (true) {
        outlet = searchNavNode(node);
        if (outlet) {
            const id = await outlet.getRouteId();
            if (id) {
                node = id.element;
                id.element = undefined;
                ids.push(id);
            }
            else {
                break;
            }
        }
        else {
            break;
        }
    }
    return { ids, outlet };
}
function waitUntilNavNode(win) {
    if (searchNavNode(win.document.body)) {
        return Promise.resolve();
    }
    return new Promise(resolve => {
        win.addEventListener('ionNavWillLoad', resolve, { once: true });
    });
}
const QUERY = ':not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet';
function searchNavNode(root) {
    if (!root) {
        return undefined;
    }
    if (root.matches(QUERY)) {
        return root;
    }
    const outlet = root.querySelector(QUERY);
    return outlet ? outlet : undefined;
}

function matchesRedirect(input, route) {
    const { from, to } = route;
    if (to === undefined) {
        return false;
    }
    if (from.length > input.length) {
        return false;
    }
    for (let i = 0; i < from.length; i++) {
        const expected = from[i];
        if (expected === '*') {
            return true;
        }
        if (expected !== input[i]) {
            return false;
        }
    }
    return from.length === input.length;
}
function routeRedirect(path, routes) {
    return routes.find(route => matchesRedirect(path, route));
}
function matchesIDs(ids, chain) {
    const len = Math.min(ids.length, chain.length);
    let i = 0;
    for (; i < len; i++) {
        if (ids[i].toLowerCase() !== chain[i].id) {
            break;
        }
    }
    return i;
}
function matchesPath(inputPath, chain) {
    const segments = new RouterSegments(inputPath);
    let matchesDefault = false;
    let allparams;
    for (let i = 0; i < chain.length; i++) {
        const path = chain[i].path;
        if (path[0] === '') {
            matchesDefault = true;
        }
        else {
            for (const segment of path) {
                const data = segments.next();
                if (segment[0] === ':') {
                    if (data === '') {
                        return null;
                    }
                    allparams = allparams || [];
                    const params = allparams[i] || (allparams[i] = {});
                    params[segment.slice(1)] = data;
                }
                else if (data !== segment) {
                    return null;
                }
            }
            matchesDefault = false;
        }
    }
    const matches = (matchesDefault)
        ? matchesDefault === (segments.next() === '')
        : true;
    if (!matches) {
        return null;
    }
    if (allparams) {
        return chain.map((route, i) => ({
            id: route.id,
            path: route.path,
            params: mergeParams(route.params, allparams[i])
        }));
    }
    return chain;
}
function mergeParams(a, b) {
    if (!a && b) {
        return b;
    }
    else if (a && !b) {
        return a;
    }
    else if (a && b) {
        return Object.assign({}, a, b);
    }
    return undefined;
}
function routerIDsToChain(ids, chains) {
    let match = null;
    let maxMatches = 0;
    const plainIDs = ids.map(i => i.id);
    for (const chain of chains) {
        const score = matchesIDs(plainIDs, chain);
        if (score > maxMatches) {
            match = chain;
            maxMatches = score;
        }
    }
    if (match) {
        return match.map((route, i) => ({
            id: route.id,
            path: route.path,
            params: mergeParams(route.params, ids[i] && ids[i].params)
        }));
    }
    return null;
}
function routerPathToChain(path, chains) {
    let match = null;
    let matches = 0;
    for (const chain of chains) {
        const matchedChain = matchesPath(path, chain);
        if (matchedChain !== null) {
            const score = computePriority(matchedChain);
            if (score > matches) {
                matches = score;
                match = matchedChain;
            }
        }
    }
    return match;
}
function computePriority(chain) {
    let score = 1;
    let level = 1;
    for (const route of chain) {
        for (const path of route.path) {
            if (path[0] === ':') {
                score += Math.pow(1, level);
            }
            else if (path !== '') {
                score += Math.pow(2, level);
            }
            level++;
        }
    }
    return score;
}
class RouterSegments {
    constructor(path) {
        this.path = path.slice();
    }
    next() {
        if (this.path.length > 0) {
            return this.path.shift();
        }
        return '';
    }
}

function readRedirects(root) {
    return Array.from(root.children)
        .filter(el => el.tagName === 'ION-ROUTE-REDIRECT')
        .map(el => {
        const to = readProp(el, 'to');
        return {
            from: parsePath(readProp(el, 'from')),
            to: to == null ? undefined : parsePath(to),
        };
    });
}
function readRoutes(root) {
    return flattenRouterTree(readRouteNodes(root));
}
function readRouteNodes(root, node = root) {
    return Array.from(node.children)
        .filter(el => el.tagName === 'ION-ROUTE' && el.component)
        .map(el => {
        const component = readProp(el, 'component');
        if (component == null) {
            throw new Error('component missing in ion-route');
        }
        return {
            path: parsePath(readProp(el, 'url')),
            id: component.toLowerCase(),
            params: el.componentProps,
            children: readRouteNodes(root, el)
        };
    });
}
function readProp(el, prop) {
    if (prop in el) {
        return el[prop];
    }
    if (el.hasAttribute(prop)) {
        return el.getAttribute(prop);
    }
    return null;
}
function flattenRouterTree(nodes) {
    const routes = [];
    for (const node of nodes) {
        flattenNode([], routes, node);
    }
    return routes;
}
function flattenNode(chain, routes, node) {
    const s = chain.slice();
    s.push({
        id: node.id,
        path: node.path,
        params: node.params
    });
    if (node.children.length === 0) {
        routes.push(s);
        return;
    }
    for (const sub of node.children) {
        flattenNode(s, routes, sub);
    }
}

class Router {
    constructor() {
        this.previousPath = null;
        this.busy = false;
        this.state = 0;
        this.lastState = 0;
        this.root = "/";
        this.useHash = true;
    }
    async componentWillLoad() {
        console.debug("[ion-router] router will load");
        await waitUntilNavNode(this.win);
        console.debug("[ion-router] found nav");
        await this.onRoutesChanged();
    }
    componentDidLoad() {
        this.win.addEventListener("ionRouteRedirectChanged", debounce(this.onRedirectChanged.bind(this), 10));
        this.win.addEventListener("ionRouteDataChanged", debounce(this.onRoutesChanged.bind(this), 100));
    }
    onPopState() {
        const direction = this.historyDirection();
        const path = this.getPath();
        console.debug("[ion-router] URL changed -> update nav", path, direction);
        return this.writeNavStateRoot(path, direction);
    }
    onBackButton(ev) {
        ev.detail.register(0, () => this.goBack());
    }
    push(url, direction = "forward") {
        if (url.startsWith(".")) {
            url = (new URL(url, window.location.href)).pathname;
        }
        console.debug("[ion-router] URL pushed -> updating nav", url, direction);
        const path = parsePath(url);
        const intent = DIRECTION_TO_INTENT[direction];
        this.setPath(path, intent);
        return this.writeNavStateRoot(path, intent);
    }
    goBack() {
        this.win.history.back();
        return Promise.resolve(this.waitPromise);
    }
    printDebug() {
        console.debug("CURRENT PATH", this.getPath());
        console.debug("PREVIOUS PATH", this.previousPath);
        printRoutes(readRoutes(this.el));
        printRedirects(readRedirects(this.el));
    }
    async navChanged(intent) {
        if (this.busy) {
            console.warn("[ion-router] router is busy, navChanged was cancelled");
            return false;
        }
        const { ids, outlet } = await readNavState(this.win.document.body);
        const routes = readRoutes(this.el);
        const chain = routerIDsToChain(ids, routes);
        if (!chain) {
            console.warn("[ion-router] no matching URL for ", ids.map(i => i.id));
            return false;
        }
        const path = chainToPath(chain);
        if (!path) {
            console.warn("[ion-router] router could not match path because some required param is missing");
            return false;
        }
        console.debug("[ion-router] nav changed -> update URL", ids, path);
        this.setPath(path, intent);
        await this.safeWriteNavState(outlet, chain, 0, path, null, ids.length);
        return true;
    }
    onRedirectChanged() {
        const path = this.getPath();
        if (path && routeRedirect(path, readRedirects(this.el))) {
            this.writeNavStateRoot(path, 0);
        }
    }
    onRoutesChanged() {
        return this.writeNavStateRoot(this.getPath(), 0);
    }
    historyDirection() {
        if (this.win.history.state === null) {
            this.state++;
            this.win.history.replaceState(this.state, this.win.document.title, this.win.document.location.href);
        }
        const state = this.win.history.state;
        const lastState = this.lastState;
        this.lastState = state;
        if (state > lastState) {
            return 1;
        }
        else if (state < lastState) {
            return -1;
        }
        else {
            return 0;
        }
    }
    async writeNavStateRoot(path, intent) {
        if (!path) {
            console.error("[ion-router] URL is not part of the routing set");
            return false;
        }
        const redirects = readRedirects(this.el);
        const redirect = routeRedirect(path, redirects);
        let redirectFrom = null;
        if (redirect) {
            this.setPath(redirect.to, intent);
            redirectFrom = redirect.from;
            path = redirect.to;
        }
        const routes = readRoutes(this.el);
        const chain = routerPathToChain(path, routes);
        if (!chain) {
            console.error("[ion-router] the path does not match any route");
            return false;
        }
        return this.safeWriteNavState(this.win.document.body, chain, intent, path, redirectFrom);
    }
    async safeWriteNavState(node, chain, intent, path, redirectFrom, index = 0) {
        const unlock = await this.lock();
        let changed = false;
        try {
            changed = await this.writeNavState(node, chain, intent, path, redirectFrom, index);
        }
        catch (e) {
            console.error(e);
        }
        unlock();
        return changed;
    }
    async lock() {
        const p = this.waitPromise;
        let resolve;
        this.waitPromise = new Promise(r => resolve = r);
        if (p !== undefined) {
            await p;
        }
        return resolve;
    }
    async writeNavState(node, chain, intent, path, redirectFrom, index = 0) {
        if (this.busy) {
            console.warn("[ion-router] router is busy, transition was cancelled");
            return false;
        }
        this.busy = true;
        const routeEvent = this.routeChangeEvent(path, redirectFrom);
        if (routeEvent) {
            this.ionRouteWillChange.emit(routeEvent);
        }
        const changed = await writeNavState(node, chain, intent, index);
        this.busy = false;
        if (changed) {
            console.debug("[ion-router] route changed", path);
        }
        if (routeEvent) {
            this.ionRouteDidChange.emit(routeEvent);
        }
        return changed;
    }
    setPath(path, intent) {
        this.state++;
        writePath(this.win.history, this.root, this.useHash, path, intent, this.state);
    }
    getPath() {
        return readPath(this.win.location, this.root, this.useHash);
    }
    routeChangeEvent(path, redirectFromPath) {
        const from = this.previousPath;
        const to = generatePath(path);
        this.previousPath = to;
        if (to === from) {
            return null;
        }
        const redirectedFrom = redirectFromPath ? generatePath(redirectFromPath) : null;
        return {
            from,
            redirectedFrom,
            to,
        };
    }
    static get is() { return "ion-router"; }
    static get properties() {
        return {
            "config": {
                "context": "config"
            },
            "el": {
                "elementRef": true
            },
            "goBack": {
                "method": true
            },
            "navChanged": {
                "method": true
            },
            "printDebug": {
                "method": true
            },
            "push": {
                "method": true
            },
            "queue": {
                "context": "queue"
            },
            "root": {
                "type": String,
                "attr": "root"
            },
            "useHash": {
                "type": Boolean,
                "attr": "use-hash"
            },
            "win": {
                "context": "window"
            }
        };
    }
    static get events() {
        return [{
                "name": "ionRouteWillChange",
                "method": "ionRouteWillChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionRouteDidChange",
                "method": "ionRouteDidChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }];
    }
    static get listeners() {
        return [{
                "name": "window:popstate",
                "method": "onPopState"
            }, {
                "name": "document:ionBackButton",
                "method": "onBackButton"
            }];
    }
}
const DIRECTION_TO_INTENT = {
    "back": -1,
    "root": 0,
    "forward": 1
};

class Tab {
    constructor() {
        this.loaded = false;
        this.active = false;
        this.disabled = false;
        this.selected = false;
        this.show = true;
        this.tabsHideOnSubPages = false;
    }
    selectedChanged(selected) {
        if (selected) {
            this.ionSelect.emit();
        }
    }
    componentWillLoad() {
        if (this.name === undefined && typeof this.component === "string") {
            this.name = this.component;
        }
        {
            if (this.component !== undefined && this.el.childElementCount > 0) {
                console.error("You can not use a lazy-loaded component in a tab and inlined content at the same time." +
                    `- Remove the component attribute in: <ion-tab component="${this.component}">` +
                    ` or` +
                    `- Remove the embedded content inside the ion-tab: <ion-tab></ion-tab>`);
            }
        }
    }
    onPropChanged() {
        this.ionTabMutated.emit();
    }
    async setActive() {
        await this.prepareLazyLoaded();
        this.active = true;
    }
    prepareLazyLoaded() {
        if (!this.loaded && this.component != null) {
            this.loaded = true;
            return attachComponent(this.delegate, this.el, this.component, ["ion-page"]);
        }
        return Promise.resolve();
    }
    hostData() {
        const { btnId, active, component } = this;
        return {
            "aria-labelledby": btnId,
            "aria-hidden": !active ? "true" : null,
            "role": "tabpanel",
            "class": {
                "ion-page": component === undefined,
                "tab-hidden": !active
            }
        };
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-tab"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "active": {
                "type": Boolean,
                "attr": "active",
                "mutable": true
            },
            "badge": {
                "type": String,
                "attr": "badge",
                "watchCallbacks": ["onPropChanged"]
            },
            "badgeColor": {
                "type": String,
                "attr": "badge-color",
                "watchCallbacks": ["onPropChanged"]
            },
            "btnId": {
                "type": String,
                "attr": "btn-id"
            },
            "component": {
                "type": String,
                "attr": "component"
            },
            "delegate": {
                "type": "Any",
                "attr": "delegate"
            },
            "disabled": {
                "type": Boolean,
                "attr": "disabled",
                "watchCallbacks": ["onPropChanged"]
            },
            "el": {
                "elementRef": true
            },
            "href": {
                "type": String,
                "attr": "href",
                "watchCallbacks": ["onPropChanged"]
            },
            "icon": {
                "type": String,
                "attr": "icon",
                "watchCallbacks": ["onPropChanged"]
            },
            "label": {
                "type": String,
                "attr": "label",
                "watchCallbacks": ["onPropChanged"]
            },
            "name": {
                "type": String,
                "attr": "name",
                "mutable": true
            },
            "selected": {
                "type": Boolean,
                "attr": "selected",
                "watchCallbacks": ["selectedChanged"]
            },
            "setActive": {
                "method": true
            },
            "show": {
                "type": Boolean,
                "attr": "show",
                "watchCallbacks": ["onPropChanged"]
            },
            "tabsHideOnSubPages": {
                "type": Boolean,
                "attr": "tabs-hide-on-sub-pages"
            }
        };
    }
    static get events() {
        return [{
                "name": "ionSelect",
                "method": "ionSelect",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionTabMutated",
                "method": "ionTabMutated",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }];
    }
    static get style() { return ":host(.tab-hidden) {\n  /* stylelint-disable-next-line declaration-no-important */\n  display: none !important; }"; }
}

class Tabbar {
    constructor() {
        this.canScrollLeft = false;
        this.canScrollRight = false;
        this.keyboardVisible = false;
        this.layout = "icon-top";
        this.placement = "bottom";
        this.tabs = [];
        this.highlight = false;
        this.translucent = false;
    }
    onKeyboardWillHide() {
        setTimeout(() => this.keyboardVisible = false, 50);
    }
    onKeyboardWillShow() {
        if (this.placement === "bottom") {
            this.keyboardVisible = true;
        }
    }
    componentDidLoad() {
        this.updateHighlight();
    }
    updateHighlight() {
        if (!this.highlight) {
            return;
        }
        this.queue.read(() => {
            const btn = this.el.shadowRoot.querySelector(".tab-btn-selected");
            const highlight = this.el.shadowRoot.querySelector(".tabbar-highlight");
            if (btn && highlight) {
                highlight.style.transform = `translate3d(${btn.offsetLeft}px,0,0) scaleX(${btn.offsetWidth})`;
            }
        });
    }
    hostData() {
        const { color, translucent, layout, placement, keyboardVisible } = this;
        return {
            role: "tablist",
            "aria-hidden": keyboardVisible ? "true" : null,
            "slot": "tabbar",
            class: Object.assign({}, createColorClasses(color), { "tabbar-translucent": translucent, [`layout-${layout}`]: true, [`placement-${placement}`]: true, "tabbar-hidden": keyboardVisible })
        };
    }
    renderTabButton(tab) {
        const { icon, label, disabled, badge, badgeColor, href } = tab;
        const selected = tab === this.selectedTab;
        const hasLabel = label !== undefined;
        const hasIcon = icon !== undefined;
        return (h("a", { role: "tab", "ion-activatable": true, "aria-selected": selected ? "true" : null, href: href || "#", class: {
                "tab-btn": true,
                "tab-btn-selected": selected,
                "tab-btn-has-label": hasLabel,
                "tab-btn-has-icon": hasIcon,
                "tab-btn-has-label-only": hasLabel && !hasIcon,
                "tab-btn-has-icon-only": hasIcon && !hasLabel,
                "tab-btn-has-badge": badge !== undefined,
                "tab-btn-disabled": disabled,
                "tab-btn-hidden": !tab.show
            }, onClick: ev => {
                if (!tab.disabled) {
                    this.ionTabbarClick.emit(tab);
                }
                ev.preventDefault();
            } }, icon && h("ion-icon", { class: "tab-btn-icon", icon: icon, lazy: false }), label && h("span", { class: "tab-btn-text" }, label), badge && h("ion-badge", { class: "tab-btn-badge", color: badgeColor }, badge), this.mode === "md" && h("ion-ripple-effect", null)));
    }
    render() {
        return [
            this.tabs.map(tab => this.renderTabButton(tab)),
            this.highlight && h("div", { class: "animated tabbar-highlight" })
        ];
    }
    static get is() { return "ion-tabbar"; }
    static get encapsulation() { return "scoped"; }
    static get properties() {
        return {
            "canScrollLeft": {
                "state": true
            },
            "canScrollRight": {
                "state": true
            },
            "color": {
                "type": String,
                "attr": "color"
            },
            "doc": {
                "context": "document"
            },
            "el": {
                "elementRef": true
            },
            "highlight": {
                "type": Boolean,
                "attr": "highlight"
            },
            "keyboardVisible": {
                "state": true
            },
            "layout": {
                "type": String,
                "attr": "layout"
            },
            "mode": {
                "type": String,
                "attr": "mode"
            },
            "placement": {
                "type": String,
                "attr": "placement"
            },
            "queue": {
                "context": "queue"
            },
            "selectedTab": {
                "type": "Any",
                "attr": "selected-tab",
                "watchCallbacks": ["updateHighlight"]
            },
            "tabs": {
                "type": "Any",
                "attr": "tabs"
            },
            "translucent": {
                "type": Boolean,
                "attr": "translucent"
            }
        };
    }
    static get events() {
        return [{
                "name": "ionTabbarClick",
                "method": "ionTabbarClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }];
    }
    static get listeners() {
        return [{
                "name": "body:keyboardWillHide",
                "method": "onKeyboardWillHide"
            }, {
                "name": "body:keyboardWillShow",
                "method": "onKeyboardWillShow"
            }, {
                "name": "window:resize",
                "method": "updateHighlight",
                "passive": true
            }];
    }
    static get style() { return ".sc-ion-tabbar-ios-h {\n  padding-left: var(--ion-safe-area-left);\n  padding-right: var(--ion-safe-area-right);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-ordinal-group: 2;\n  -ms-flex-order: 1;\n  order: 1;\n  width: auto;\n  background: var(--background);\n  color: var(--color);\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 10;\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box; }\n\n.ion-color.sc-ion-tabbar-ios-h {\n  --background: var(--ion-color-base);\n  --color: rgba(var(--ion-color-contrast-rgb), 0.7);\n  --color-selected: var(--ion-color-contrast); }\n\n.tabbar-hidden.sc-ion-tabbar-ios-h {\n  \n  display: none !important; }\n\n.placement-top.sc-ion-tabbar-ios-h {\n  -webkit-box-ordinal-group: 0;\n  -ms-flex-order: -1;\n  order: -1; }\n\n.placement-bottom.sc-ion-tabbar-ios-h {\n  padding-bottom: var(--ion-safe-area-bottom, 0); }\n\n.tabbar-highlight.sc-ion-tabbar-ios {\n  left: 0;\n  bottom: 0;\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n  display: block;\n  position: absolute;\n  width: 1px;\n  height: 2px;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  background: currentColor; }\n  .tabbar-highlight.animated.sc-ion-tabbar-ios {\n    -webkit-transition-duration: 300ms;\n    transition-duration: 300ms;\n    -webkit-transition-property: -webkit-transform;\n    transition-property: -webkit-transform;\n    transition-property: transform;\n    transition-property: transform, -webkit-transform;\n    -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    will-change: transform; }\n\n.placement-top.sc-ion-tabbar-ios-h   .tabbar-highlight.sc-ion-tabbar-ios {\n  bottom: 0; }\n\n.placement-bottom.sc-ion-tabbar-ios-h   .tabbar-highlight.sc-ion-tabbar-ios {\n  top: 0; }\n\n.layout-icon-start.sc-ion-tabbar-ios-h   .tab-btn.sc-ion-tabbar-ios {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row; }\n\n.layout-icon-end.sc-ion-tabbar-ios-h   .tab-btn.sc-ion-tabbar-ios {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n  -ms-flex-direction: row-reverse;\n  flex-direction: row-reverse; }\n\n.layout-icon-bottom.sc-ion-tabbar-ios-h   .tab-btn.sc-ion-tabbar-ios {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n  -ms-flex-direction: column-reverse;\n  flex-direction: column-reverse; }\n\n.layout-icon-start.sc-ion-tabbar-ios-h   .tab-btn.sc-ion-tabbar-ios, .layout-icon-end.sc-ion-tabbar-ios-h   .tab-btn.sc-ion-tabbar-ios, .layout-icon-hide.sc-ion-tabbar-ios-h   .tab-btn.sc-ion-tabbar-ios, .layout-label-hide.sc-ion-tabbar-ios-h   .tab-btn.sc-ion-tabbar-ios {\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center; }\n\n.layout-icon-hide.sc-ion-tabbar-ios-h {\n  --icon-display: none; }\n\n.layout-label-hide.sc-ion-tabbar-ios-h {\n  --label-display: none; }\n\n.layout-icon-top.sc-ion-tabbar-ios-h   .tab-btn.sc-ion-tabbar-ios, .layout-icon-bottom.sc-ion-tabbar-ios-h   .tab-btn.sc-ion-tabbar-ios {\n  --badge-end: calc(50% - 30px); }\n\n.layout-icon-hide.sc-ion-tabbar-ios-h   .tab-btn.sc-ion-tabbar-ios, .layout-icon-start.sc-ion-tabbar-ios-h   .tab-btn.sc-ion-tabbar-ios, .layout-icon-end.sc-ion-tabbar-ios-h   .tab-btn.sc-ion-tabbar-ios {\n  --badge-end: calc(50% - 50px); }\n\n.tab-btn.sc-ion-tabbar-ios {\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-overflow: inherit;\n  text-transform: inherit;\n  text-align: inherit;\n  white-space: inherit;\n  color: inherit;\n  margin: 0;\n  padding: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: start;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  outline: none;\n  background: transparent;\n  text-decoration: none;\n  cursor: pointer;\n  overflow: hidden;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-user-drag: none; }\n\n.tab-btn.sc-ion-tabbar-ios:focus-visible {\n  background: var(--background-focused); }\n\n\@media (any-hover: hover) {\n  .tab-btn.sc-ion-tabbar-ios:hover {\n    color: var(--color-selected); } }\n\n.tab-btn-selected.sc-ion-tabbar-ios {\n  color: var(--color-selected); }\n\n.tab-btn-hidden.sc-ion-tabbar-ios {\n  \n  display: none !important; }\n\n.tab-btn-disabled.sc-ion-tabbar-ios {\n  pointer-events: none;\n  opacity: .4; }\n\n.tab-btn-text.sc-ion-tabbar-ios {\n  margin-top: var(--label-margin-top);\n  margin-bottom: var(--label-margin-bottom);\n  display: var(--label-display, block);\n  font-size: var(--label-font-size);\n  line-height: var(--label-line-height); }\n\n.tab-btn-icon.sc-ion-tabbar-ios {\n  margin-top: var(--icon-margin-top);\n  margin-bottom: var(--icon-margin-bottom);\n  display: var(--icon-display, block);\n  min-width: var(--icon-min-width);\n  height: var(--icon-height, 1em);\n  font-size: var(--icon-font-size); }\n\n.tab-btn-text.sc-ion-tabbar-ios, .tab-btn-icon.sc-ion-tabbar-ios {\n  -ms-flex-item-align: center;\n  align-self: center;\n  min-width: 26px;\n  max-width: 100%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.tab-btn-has-label-only.sc-ion-tabbar-ios   .tab-btn-text.sc-ion-tabbar-ios {\n  white-space: normal; }\n\n.tab-btn-has-icon-only.sc-ion-tabbar-ios, .tab-btn-has-label-only.sc-ion-tabbar-ios {\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center; }\n\n.tab-btn-badge.sc-ion-tabbar-ios {\n  right: 4%;\n  top: 6%;\n  right: calc(50% - 30px);\n  padding: 1px 6px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  position: absolute;\n  height: auto;\n  font-size: 12px;\n  line-height: 16px; }\n\n.tab-btn-has-label-only.sc-ion-tabbar-ios   .tab-btn-badge.sc-ion-tabbar-ios {\n  right: calc(50% - 50px); }\n\n.tab-btn-has-icon-only.sc-ion-tabbar-ios   .tab-btn-badge.sc-ion-tabbar-ios {\n  right: calc(50% - 30px); }\n\n.tab-btn-selected.sc-ion-tabbar-ios   .tab-btn-icon.sc-ion-tabbar-ios {\n  -webkit-transform: var(--icon-transform-selected);\n  transform: var(--icon-transform-selected); }\n\n.tab-btn.sc-ion-tabbar-ios {\n  padding: 0 2px;\n  max-width: 240px; }\n\n.tab-btn-text.sc-ion-tabbar-ios {\n  margin-top: 0;\n  margin-bottom: 1px;\n  min-height: 11px; }\n\n.tab-btn-has-label-only.sc-ion-tabbar-ios   .tab-btn-text.sc-ion-tabbar-ios {\n  margin: 2px 0;\n  font-size: 12px;\n  font-size: 14px;\n  line-height: 1.1; }\n\n.tab-btn-icon.sc-ion-tabbar-ios {\n  margin-top: 4px;\n  font-size: 30px; }\n\n.tab-btn-icon.sc-ion-tabbar-ios::before {\n  vertical-align: top; }\n\n.sc-ion-tabbar-ios-h {\n  --background: var(--ion-tabbar-background-color, #f8f8f8);\n  --background-rgb: var(--ion-tabbar-translucent-background-color-rgb, 248, 248, 248);\n  --color: var(--ion-tabbar-text-color, #8c8c8c);\n  --color-selected: var(--ion-color-primary, #3880ff);\n  --background-focused: var(--ion-tabbar-background-color-focused, #dadada);\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  height: 50px;\n  border-top: 0.55px solid rgba(var(--ion-tabbar-border-color-rgb, 0, 0, 0), 0.2);\n  font-size: 10px;\n  contain: strict; }\n\n.placement-top.sc-ion-tabbar-ios-h {\n  border-top: 0;\n  border-bottom: 0.55px solid rgba(var(--ion-tabbar-border-color-rgb, 0, 0, 0), 0.2); }\n\n.tabbar-translucent.sc-ion-tabbar-ios-h {\n  background-color: rgba(var(--ion-color-base-rgb), 0.8);\n  -webkit-backdrop-filter: saturate(210%) blur(20px);\n  backdrop-filter: saturate(210%) blur(20px); }\n\n.layout-icon-end.sc-ion-tabbar-ios-h, .layout-icon-start.sc-ion-tabbar-ios-h, .layout-icon-hide.sc-ion-tabbar-ios-h {\n  --label-margin-top: 2px;\n  --label-margin-bottom: 2px;\n  --label-font-size: 14px;\n  --label-line-height: 1.1; }\n\n.layout-icon-end.sc-ion-tabbar-ios-h, .layout-icon-start.sc-ion-tabbar-ios-h {\n  --icon-margin-top: 2px;\n  --icon-margin-bottom: 1px;\n  --icon-min-width: 24px;\n  --icon-height: 26px;\n  --icon-font-size: 24px; }\n\n.layout-label-hide.sc-ion-tabbar-ios-h {\n  --icon-margin: 0; }"; }
    static get styleMode() { return "ios"; }
}

class Tabs {
    constructor() {
        this.ids = -1;
        this.transitioning = false;
        this.tabsId = (++tabIds);
        this.tabs = [];
        this.tabbarHidden = false;
        this.useRouter = false;
    }
    async componentWillLoad() {
        if (!this.useRouter) {
            this.useRouter = !!this.doc.querySelector("ion-router") && !this.el.closest("[no-router]");
        }
        this.userTabbarEl = this.el.querySelector("ion-tabbar") || undefined;
        this.initTabs();
        this.ionNavWillLoad.emit();
        this.componentWillUpdate();
    }
    componentDidLoad() {
        this.initSelect();
    }
    componentDidUnload() {
        this.tabs.length = 0;
        this.selectedTab = this.leavingTab = undefined;
    }
    componentWillUpdate() {
        const tabbarEl = this.userTabbarEl;
        if (tabbarEl) {
            tabbarEl.tabs = this.tabs.slice();
            tabbarEl.selectedTab = this.selectedTab;
        }
    }
    onTabMutated() {
        this.el.forceUpdate();
    }
    onTabClicked(ev) {
        const selectedTab = ev.detail;
        const href = selectedTab.href;
        if (this.useRouter && href !== undefined) {
            const router = this.doc.querySelector("ion-router");
            if (router) {
                router.push(href);
            }
        }
        else {
            this.select(selectedTab);
        }
    }
    async select(tabOrIndex) {
        const selectedTab = await this.getTab(tabOrIndex);
        if (!this.shouldSwitch(selectedTab)) {
            return false;
        }
        await this.setActive(selectedTab);
        await this.notifyRouter();
        this.tabSwitch();
        return true;
    }
    async setRouteId(id) {
        const selectedTab = await this.getTab(id);
        if (!this.shouldSwitch(selectedTab)) {
            return { changed: false, element: this.selectedTab };
        }
        await this.setActive(selectedTab);
        return {
            changed: true,
            element: this.selectedTab,
            markVisible: () => this.tabSwitch(),
        };
    }
    async getRouteId() {
        const id = this.selectedTab && this.selectedTab.name;
        return id !== undefined ? { id, element: this.selectedTab } : undefined;
    }
    async getTab(tabOrIndex) {
        if (typeof tabOrIndex === "string") {
            return this.tabs.find(tab => tab.name === tabOrIndex);
        }
        if (typeof tabOrIndex === "number") {
            return this.tabs[tabOrIndex];
        }
        return tabOrIndex;
    }
    getSelected() {
        return Promise.resolve(this.selectedTab);
    }
    initTabs() {
        const tabs = this.tabs = Array.from(this.el.querySelectorAll("ion-tab"));
        tabs.forEach(tab => {
            const id = `t-${this.tabsId}-${++this.ids}`;
            tab.btnId = "tab-" + id;
            tab.id = "tabpanel-" + id;
        });
    }
    async initSelect() {
        const tabs = this.tabs;
        await Promise.all(tabs.map(tab => tab.componentOnReady()));
        if (this.useRouter) {
            {
                const tab = tabs.find(t => t.selected);
                if (tab) {
                    console.warn("When using a router (ion-router) <ion-tab selected=\"true\"> makes no difference" +
                        "Define routes properly the define which tab is selected");
                }
            }
            return;
        }
        const selectedTab = tabs.find(t => t.selected) ||
            tabs.find(t => t.show && !t.disabled);
        for (const tab of tabs) {
            if (tab !== selectedTab) {
                tab.selected = false;
            }
        }
        if (selectedTab) {
            await selectedTab.setActive();
        }
        this.selectedTab = selectedTab;
        if (selectedTab) {
            selectedTab.selected = true;
            selectedTab.active = true;
        }
    }
    setActive(selectedTab) {
        if (this.transitioning) {
            return Promise.reject("transitioning already happening");
        }
        for (const tab of this.tabs) {
            if (selectedTab !== tab) {
                tab.selected = false;
            }
        }
        this.transitioning = true;
        this.leavingTab = this.selectedTab;
        this.selectedTab = selectedTab;
        this.ionNavWillChange.emit();
        return selectedTab.setActive();
    }
    tabSwitch() {
        const selectedTab = this.selectedTab;
        const leavingTab = this.leavingTab;
        this.leavingTab = undefined;
        this.transitioning = false;
        if (!selectedTab) {
            return;
        }
        selectedTab.selected = true;
        if (leavingTab !== selectedTab) {
            if (leavingTab) {
                leavingTab.active = false;
            }
            this.ionChange.emit({ tab: selectedTab });
            this.ionNavDidChange.emit();
        }
    }
    notifyRouter() {
        if (this.useRouter) {
            const router = this.doc.querySelector("ion-router");
            if (router) {
                return router.navChanged(1);
            }
        }
        return Promise.resolve(false);
    }
    shouldSwitch(selectedTab) {
        const leavingTab = this.selectedTab;
        return selectedTab !== undefined && selectedTab !== leavingTab && !this.transitioning;
    }
    hostData() {
        return {
            class: {
                "tabbar-hidden": this.tabbarHidden
            }
        };
    }
    render() {
        return [
            h("div", { class: "tabs-inner" }, h("slot", null)),
            h("slot", { name: "tabbar" }, h("ion-tabbar", { tabs: this.tabs.slice(), selectedTab: this.selectedTab }))
        ];
    }
    static get is() { return "ion-tabs"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "config": {
                "context": "config"
            },
            "doc": {
                "context": "document"
            },
            "el": {
                "elementRef": true
            },
            "getRouteId": {
                "method": true
            },
            "getSelected": {
                "method": true
            },
            "getTab": {
                "method": true
            },
            "name": {
                "type": String,
                "attr": "name"
            },
            "select": {
                "method": true
            },
            "selectedTab": {
                "state": true
            },
            "setRouteId": {
                "method": true
            },
            "tabbarHidden": {
                "type": Boolean,
                "attr": "tabbar-hidden"
            },
            "tabs": {
                "state": true
            },
            "useRouter": {
                "type": Boolean,
                "attr": "use-router",
                "mutable": true
            }
        };
    }
    static get events() {
        return [{
                "name": "ionChange",
                "method": "ionChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionNavWillLoad",
                "method": "ionNavWillLoad",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionNavWillChange",
                "method": "ionNavWillChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionNavDidChange",
                "method": "ionNavDidChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }];
    }
    static get listeners() {
        return [{
                "name": "ionTabMutated",
                "method": "onTabMutated"
            }, {
                "name": "ionTabbarClick",
                "method": "onTabClicked"
            }];
    }
    static get style() { return ":host {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  contain: layout size style;\n  z-index: 0; }\n\n.tabs-inner {\n  position: relative;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  contain: layout size style; }\n\n:host(.tabbar-hidden) ion-tabbar,\n:host(.tabbar-hidden)::slotted(ion-tabbar) {\n  display: none; }"; }
}
let tabIds = -1;

export { MyApp, AnimationControllerImpl as IonAnimationController, App as IonApp, Footer as IonFooter, Nav as IonNav, Route as IonRoute, Router as IonRouter, Tab as IonTab, Tabbar as IonTabbar, Tabs as IonTabs };
