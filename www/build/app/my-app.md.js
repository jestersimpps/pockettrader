/*! Built with http://stenciljs.com */
const { h } = window.App;

import { a as commonjsGlobal, b as commonjsRequire, c as unwrapExports, d as createCommonjsModule } from './chunk-a7525511.js';
import { c as BALANCESERVICE, h as TOKENSERVICE, e as TRADESERVICE, i as EXCHANGESERVICE, a as CURRENCYSERVICE, b as TICKERSERVICE, d as WALLETSERVICE } from './chunk-9f11c581.js';
import { j as TypeKeys, c as appSetExchanges, a as appSetBaseCurrency, d as appSetCurrencies, e as appSetTickers, f as appSetTotalBalances, b as appSetWallets, i as appSetToken, g as appSetBalances, h as appSetOrders } from './chunk-43b312d9.js';
import { d as DefaultExchanges } from './chunk-8b6e0876.js';
import { a as attachComponent } from './chunk-feaa9237.js';
import { b as assert, e as debounce, c as now, f as pointerCoord } from './chunk-63df273d.js';
import { a as createThemedClasses } from './chunk-ea7ac2d5.js';

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
        });
        // Load in app state from storage
        EXCHANGESERVICE.getExchanges()
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
            return TOKENSERVICE.getTokenFromStore();
        })
            .then((token) => {
            token ? this.appSetToken(token) : this.appSetToken(TOKENSERVICE.generateNewToken());
            this.loading = false;
        });
    }
    render() {
        return !this.loading ? (h("ion-app", null,
            h("ion-router", { useHash: false },
                h("ion-route", { url: "/", component: "app-overview" }),
                h("ion-route", { url: "/pair/:exchangeId/:pair", component: "app-pair" }),
                h("ion-route", { url: "/overview", component: "app-overview" }),
                h("ion-route", { url: "/exchanges", component: "app-exchanges" }),
                h("ion-route", { url: "/wallets", component: "app-wallets" }),
                h("ion-route", { url: "/trade", component: "app-trade" }),
                h("ion-route", { url: "/orders", component: "app-orders" }),
                h("ion-route", { url: "/orders/:orderId", component: "app-order" }),
                h("ion-route", { url: "/settings", component: "app-settings" }),
                h("ion-route", { url: "/settings/keys", component: "app-keys" }),
                h("ion-route", { url: "/settings/keys/:exchangeId", component: "app-exchangekeys" }),
                h("ion-route", { url: "/settings/basecurrency", component: "app-basecurrency" }),
                h("ion-route", { url: "/settings/holdings", component: "app-holdings" }),
                h("ion-route", { url: "/settings/holdings/:walletId", component: "app-editwallet" }),
                h("ion-route", { url: "/settings/premium", component: "app-premium" }),
                h("ion-route", { url: "/panic", component: "app-panic" })),
            h("ion-nav", { animated: true, "margin-bottom": true }),
            ",",
            h("ion-footer", { class: "footerHeight" },
                h("ion-tabs", { color: "light", tabbarHighlight: true, useRouter: true },
                    h("ion-tab", { icon: "list-box", label: "Exchanges", href: "/exchanges" }),
                    h("ion-tab", { icon: "wallet", label: "Wallets", href: "/wallets" }),
                    h("ion-tab", { icon: "pie", label: "Overview", href: "/overview" }),
                    h("ion-tab", { icon: "swap", label: "Trade", href: "/trade" }),
                    h("ion-tab", { icon: "time", label: "Orders", href: "/orders" }))),
            ",")) : ([
            h("div", { class: "progress", "text-center": true },
                h("ion-icon", { name: "sync", class: "spin" })),
        ]);
    }
    static get is() { return "my-app"; }
    static get properties() { return {
        "loading": {
            "state": true
        },
        "store": {
            "context": "store"
        }
    }; }
    static get style() { return ".footerHeight {\n  min-height: 50px;\n}"; }
}

const CSS_PROP = function (docEle) {
    // transform
    const transformProp = [
        'webkitTransform',
        '-webkit-transform',
        'webkit-transform',
        'transform'
    ].find(key => docEle.style[key] !== undefined) || 'transform';
    const transitionProp = [
        'webkitTransition',
        'transition'
    ].find(key => docEle.style[key] !== undefined) || 'transition';
    // The only prefix we care about is webkit for transitions.
    const prefix = transitionProp.indexOf('webkit') > -1 ? '-webkit-' : '';
    return {
        transitionDurationProp: prefix + 'transition-duration',
        transitionTimingFnProp: prefix + 'transition-timing-function',
        transformProp,
        transitionProp
    };
}(document.documentElement);
const CSS_VALUE_REGEX = /(^-?\d*\.?\d*)(.*)/;
const DURATION_MIN = 32;
const TRANSITION_END_FALLBACK_PADDING_MS = 400;

function transitionEnd(el, callback) {
    let unRegTrans;
    const opts = { passive: true };
    function unregister() {
        unRegTrans && unRegTrans();
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
        unRegTrans = function () {
            el.removeEventListener('webkitTransitionEnd', onTransitionEnd, opts);
            el.removeEventListener('transitionend', onTransitionEnd, opts);
        };
    }
    return unregister;
}

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
const raf = window.requestAnimationFrame || ((f) => f());
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
        if (el) {
            if (el.length) {
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
    /**
     * NO DOM
     */
    _addEl(el) {
        if (el.nodeType === 1) {
            (this._elements = this._elements || []).push(el);
        }
    }
    /**
     * Add a child animation to this animation.
     */
    add(childAnimation) {
        childAnimation.parent = this;
        this.hasChildren = true;
        (this._childAnimations = this._childAnimations || []).push(childAnimation);
        return this;
    }
    /**
     * Get the duration of this animation. If this animation does
     * not have a duration, then it'll get the duration from its parent.
     */
    getDuration(opts) {
        if (opts && opts.duration != null) {
            return opts.duration;
        }
        else if (this._duration != null) {
            return this._duration;
        }
        else if (this.parent) {
            return this.parent.getDuration();
        }
        return 0;
    }
    /**
     * Returns if the animation is a root one.
     */
    isRoot() {
        return !this.parent;
    }
    /**
     * Set the duration for this animation.
     */
    duration(milliseconds) {
        this._duration = milliseconds;
        return this;
    }
    /**
     * Get the easing of this animation. If this animation does
     * not have an easing, then it'll get the easing from its parent.
     */
    getEasing() {
        if (this._isReverse && this._reversedEasingName) {
            return this._reversedEasingName;
        }
        return this._easingName != null ? this._easingName : (this.parent && this.parent.getEasing()) || null;
    }
    /**
     * Set the easing for this animation.
     */
    easing(name) {
        this._easingName = name;
        return this;
    }
    /**
     * Set the easing for this reversed animation.
     */
    easingReverse(name) {
        this._reversedEasingName = name;
        return this;
    }
    /**
     * Add the "from" value for a specific property.
     */
    from(prop, val) {
        this._addProp('from', prop, val);
        return this;
    }
    /**
     * Add the "to" value for a specific property.
     */
    to(prop, val, clearProperyAfterTransition) {
        const fx = this._addProp('to', prop, val);
        if (clearProperyAfterTransition) {
            // if this effect is a transform then clear the transform effect
            // otherwise just clear the actual property
            this.afterClearStyles([fx.trans ? CSS_PROP.transformProp : prop]);
        }
        return this;
    }
    /**
     * Shortcut to add both the "from" and "to" for the same property.
     */
    fromTo(prop, fromVal, toVal, clearProperyAfterTransition) {
        return this.from(prop, fromVal).to(prop, toVal, clearProperyAfterTransition);
    }
    /**
     * NO DOM
     */
    _getProp(name) {
        if (this._fxProperties) {
            return this._fxProperties.find(prop => prop.effectName === name);
        }
        return undefined;
    }
    _addProp(state, prop, val) {
        let fxProp = this._getProp(prop);
        if (!fxProp) {
            // first time we've see this EffectProperty
            const shouldTrans = (TRANSFORM_PROPS[prop] === 1);
            fxProp = {
                effectName: prop,
                trans: shouldTrans,
                // add the will-change property for transforms or opacity
                wc: (shouldTrans ? CSS_PROP.transformProp : prop)
            };
            (this._fxProperties = this._fxProperties || []).push(fxProp);
        }
        // add from/to EffectState to the EffectProperty
        const fxState = {
            val: val,
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
    /**
     * Add CSS class to this animation's elements
     * before the animation begins.
     */
    beforeAddClass(className) {
        (this._beforeAddClasses = this._beforeAddClasses || []).push(className);
        return this;
    }
    /**
     * Remove CSS class from this animation's elements
     * before the animation begins.
     */
    beforeRemoveClass(className) {
        (this._beforeRemoveClasses = this._beforeRemoveClasses || []).push(className);
        return this;
    }
    /**
     * Sets a CSS class during the duration of the animation.
     */
    duringAddClass(className) {
        this.beforeAddClass(className);
        this.afterRemoveClass(className);
        return this;
    }
    /**
     * Set CSS inline styles to this animation's elements
     * before the animation begins.
     */
    beforeStyles(styles) {
        this._beforeStyles = styles;
        return this;
    }
    /**
     * Clear CSS inline styles from this animation's elements
     * before the animation begins.
     */
    beforeClearStyles(propertyNames) {
        this._beforeStyles = this._beforeStyles || {};
        for (let i = 0; i < propertyNames.length; i++) {
            this._beforeStyles[propertyNames[i]] = '';
        }
        return this;
    }
    /**
     * Add a function which contains DOM reads, which will run
     * before the animation begins.
     */
    beforeAddRead(domReadFn) {
        (this._readCallbacks = this._readCallbacks || []).push(domReadFn);
        return this;
    }
    /**
     * Add a function which contains DOM writes, which will run
     * before the animation begins.
     */
    beforeAddWrite(domWriteFn) {
        (this._writeCallbacks = this._writeCallbacks || []).push(domWriteFn);
        return this;
    }
    /**
     * Add CSS class to this animation's elements
     * after the animation finishes.
     */
    afterAddClass(className) {
        (this._afterAddClasses = this._afterAddClasses || []).push(className);
        return this;
    }
    /**
     * Remove CSS class from this animation's elements
     * after the animation finishes.
     */
    afterRemoveClass(className) {
        (this._afterRemoveClasses = this._afterRemoveClasses || []).push(className);
        return this;
    }
    /**
     * Set CSS inline styles to this animation's elements
     * after the animation finishes.
     */
    afterStyles(styles) {
        this._afterStyles = styles;
        return this;
    }
    /**
     * Clear CSS inline styles from this animation's elements
     * after the animation finishes.
     */
    afterClearStyles(propertyNames) {
        this._afterStyles = this._afterStyles || {};
        for (let i = 0; i < propertyNames.length; i++) {
            this._afterStyles[propertyNames[i]] = '';
        }
        return this;
    }
    /**
     * Play the animation.
     */
    play(opts) {
        const self = this;
        // If the animation was already invalidated (it did finish), do nothing
        if (self._destroyed) {
            return;
        }
        // this is the top level animation and is in full control
        // of when the async play() should actually kick off
        // if there is no duration then it'll set the TO property immediately
        // if there is a duration, then it'll stage all animations at the
        // FROM property and transition duration, wait a few frames, then
        // kick off the animation by setting the TO property for each animation
        self._isAsync = self._hasDuration(opts);
        // ensure all past transition end events have been cleared
        self._clearAsync();
        // recursively kicks off the correct progress step for each child animation
        // ******** DOM WRITE ****************
        self._playInit(opts);
        // doubling up RAFs since this animation was probably triggered
        // from an input event, and just having one RAF would have this code
        // run within the same frame as the triggering input event, and the
        // input event probably already did way too much work for one frame
        raf(() => {
            raf(() => {
                self._playDomInspect(opts);
            });
        });
    }
    playAsync(opts) {
        return new Promise(resolve => {
            this.onFinish(resolve, { oneTimeCallback: true, clearExistingCallacks: true });
            this.play(opts);
            return this;
        });
    }
    playSync() {
        // If the animation was already invalidated (it did finish), do nothing
        if (!this._destroyed) {
            const opts = { duration: 0 };
            this._isAsync = false;
            this._clearAsync();
            this._playInit(opts);
            this._playDomInspect(opts);
        }
    }
    /**
     * DOM WRITE
     * RECURSION
     */
    _playInit(opts) {
        // always default that an animation does not tween
        // a tween requires that an Animation class has an element
        // and that it has at least one FROM/TO effect
        // and that the FROM/TO effect can tween numeric values
        this._hasTweenEffect = false;
        this.isPlaying = true;
        this.hasCompleted = false;
        this._hasDur = (this.getDuration(opts) > DURATION_MIN);
        const children = this._childAnimations;
        if (children) {
            for (let i = 0; i < children.length; i++) {
                // ******** DOM WRITE ****************
                children[i]._playInit(opts);
            }
        }
        if (this._hasDur) {
            // if there is a duration then we want to start at step 0
            // ******** DOM WRITE ****************
            this._progress(0);
            // add the will-change properties
            // ******** DOM WRITE ****************
            this._willChange(true);
        }
    }
    /**
     * DOM WRITE
     * NO RECURSION
     * ROOT ANIMATION
     */
    _playDomInspect(opts) {
        const self = this;
        // fire off all the "before" function that have DOM READS in them
        // elements will be in the DOM, however visibily hidden
        // so we can read their dimensions if need be
        // ******** DOM READ ****************
        // ******** DOM WRITE ****************
        self._beforeAnimation();
        // for the root animation only
        // set the async TRANSITION END event
        // and run onFinishes when the transition ends
        const dur = self.getDuration(opts);
        if (self._isAsync) {
            self._asyncEnd(dur, true);
        }
        // ******** DOM WRITE ****************
        self._playProgress(opts);
        if (self._isAsync && !this._destroyed) {
            // this animation has a duration so we need another RAF
            // for the CSS TRANSITION properties to kick in
            raf(() => {
                self._playToStep(1);
            });
        }
    }
    /**
     * DOM WRITE
     * RECURSION
     */
    _playProgress(opts) {
        const children = this._childAnimations;
        if (children) {
            for (let i = 0; i < children.length; i++) {
                // ******** DOM WRITE ****************
                children[i]._playProgress(opts);
            }
        }
        if (this._hasDur) {
            // set the CSS TRANSITION duration/easing
            // ******** DOM WRITE ****************
            this._setTrans(this.getDuration(opts), false);
        }
        else {
            // this animation does not have a duration, so it should not animate
            // just go straight to the TO properties and call it done
            // ******** DOM WRITE ****************
            this._progress(1);
            // since there was no animation, immediately run the after
            // ******** DOM WRITE ****************
            this._setAfterStyles();
            // this animation has no duration, so it has finished
            // other animations could still be running
            this._didFinish(true);
        }
    }
    /**
     * DOM WRITE
     * RECURSION
     */
    _playToStep(stepValue) {
        if (!this._destroyed) {
            const children = this._childAnimations;
            if (children) {
                for (let i = 0; i < children.length; i++) {
                    // ******** DOM WRITE ****************
                    children[i]._playToStep(stepValue);
                }
            }
            if (this._hasDur) {
                // browser had some time to render everything in place
                // and the transition duration/easing is set
                // now set the TO properties which will trigger the transition to begin
                // ******** DOM WRITE ****************
                this._progress(stepValue);
            }
        }
    }
    /**
     * DOM WRITE
     * NO RECURSION
     * ROOT ANIMATION
     */
    _asyncEnd(dur, shouldComplete) {
        const self = this;
        function onTransitionEnd() {
            // congrats! a successful transition completed!
            // ensure transition end events and timeouts have been cleared
            self._clearAsync();
            // ******** DOM WRITE ****************
            self._playEnd();
            // transition finished
            self._didFinishAll(shouldComplete, true, false);
        }
        function onTransitionFallback() {
            console.debug('Animation onTransitionFallback, CSS onTransitionEnd did not fire!');
            // oh noz! the transition end event didn't fire in time!
            // instead the fallback timer when first
            // if all goes well this fallback should never fire
            // clear the other async end events from firing
            self._timerId = undefined;
            self._clearAsync();
            // set the after styles
            // ******** DOM WRITE ****************
            self._playEnd(shouldComplete ? 1 : 0);
            // transition finished
            self._didFinishAll(shouldComplete, true, false);
        }
        // set the TRANSITION END event on one of the transition elements
        self._unregisterTrnsEnd = transitionEnd(self._transEl(), onTransitionEnd);
        // set a fallback timeout if the transition end event never fires, or is too slow
        // transition end fallback: (animation duration + XXms)
        self._timerId = setTimeout(onTransitionFallback, (dur + TRANSITION_END_FALLBACK_PADDING_MS));
    }
    /**
     * DOM WRITE
     * RECURSION
     */
    _playEnd(stepValue) {
        const children = this._childAnimations;
        if (children) {
            for (let i = 0; i < children.length; i++) {
                // ******** DOM WRITE ****************
                children[i]._playEnd(stepValue);
            }
        }
        if (this._hasDur) {
            if (stepValue !== null && stepValue !== undefined) {
                // too late to have a smooth animation, just finish it
                // ******** DOM WRITE ****************
                this._setTrans(0, true);
                // ensure the ending progress step gets rendered
                // ******** DOM WRITE ****************
                this._progress(stepValue);
            }
            // set the after styles
            // ******** DOM WRITE ****************
            this._setAfterStyles();
            // remove the will-change properties
            // ******** DOM WRITE ****************
            this._willChange(false);
        }
    }
    /**
     * NO DOM
     * RECURSION
     */
    _hasDuration(opts) {
        if (this.getDuration(opts) > DURATION_MIN) {
            return true;
        }
        const children = this._childAnimations;
        if (children) {
            for (let i = 0; i < children.length; i++) {
                if (children[i]._hasDuration(opts)) {
                    return true;
                }
            }
        }
        return false;
    }
    /**
     * NO DOM
     * RECURSION
     */
    _hasDomReads() {
        if (this._readCallbacks && this._readCallbacks.length) {
            return true;
        }
        const children = this._childAnimations;
        if (children) {
            for (let i = 0; i < children.length; i++) {
                if (children[i]._hasDomReads()) {
                    return true;
                }
            }
        }
        return false;
    }
    /**
     * Immediately stop at the end of the animation.
     */
    stop(stepValue) {
        if (stepValue === undefined) {
            stepValue = 1;
        }
        // ensure all past transition end events have been cleared
        this._clearAsync();
        this._hasDur = true;
        this._playEnd(stepValue);
    }
    /**
     * NO DOM
     * NO RECURSION
     */
    _clearAsync() {
        this._unregisterTrnsEnd && this._unregisterTrnsEnd();
        this._timerId && clearTimeout(this._timerId);
        this._timerId = this._unregisterTrnsEnd = undefined;
    }
    /**
     * DOM WRITE
     * NO RECURSION
     */
    _progress(stepValue) {
        // bread 'n butter
        let val;
        const elements = this._elements;
        const effects = this._fxProperties;
        if (!elements || elements.length === 0 || !effects || this._destroyed) {
            return;
        }
        // flip the number if we're going in reverse
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
                    // FROM
                    val = fx.from.val;
                }
                else if (stepValue === 1) {
                    // TO
                    val = fx.to.val;
                }
                else if (tweenEffect) {
                    // EVERYTHING IN BETWEEN
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
                            // ******** DOM WRITE ****************
                            elements[j].style[prop] = val;
                        }
                    }
                }
            }
        }
        // place all transforms on the same property
        if (finalTransform.length) {
            if (!this._isReverse && stepValue !== 1 || this._isReverse && stepValue !== 0) {
                finalTransform += 'translateZ(0px)';
            }
            for (i = 0; i < elements.length; i++) {
                // ******** DOM WRITE ****************
                elements[i].style[CSS_PROP.transformProp] = finalTransform;
            }
        }
    }
    /**
     * DOM WRITE
     * NO RECURSION
     */
    _setTrans(dur, forcedLinearEasing) {
        // Transition is not enabled if there are not effects
        const elements = this._elements;
        if (!elements || elements.length === 0 || !this._fxProperties) {
            return;
        }
        // set the TRANSITION properties inline on the element
        const easing = (forcedLinearEasing ? 'linear' : this.getEasing());
        const durString = dur + 'ms';
        const cssTransform = CSS_PROP.transitionProp;
        const cssTransitionDuration = CSS_PROP.transitionDurationProp;
        const cssTransitionTimingFn = CSS_PROP.transitionTimingFnProp;
        let eleStyle;
        for (let i = 0; i < elements.length; i++) {
            eleStyle = elements[i].style;
            if (dur > 0) {
                // ******** DOM WRITE ****************
                eleStyle[cssTransform] = '';
                eleStyle[cssTransitionDuration] = durString;
                // each animation can have a different easing
                if (easing) {
                    // ******** DOM WRITE ****************
                    eleStyle[cssTransitionTimingFn] = easing;
                }
            }
            else {
                eleStyle[cssTransform] = 'none';
            }
        }
    }
    /**
     * DOM READ
     * DOM WRITE
     * RECURSION
     */
    _beforeAnimation() {
        // fire off all the "before" function that have DOM READS in them
        // elements will be in the DOM, however visibily hidden
        // so we can read their dimensions if need be
        // ******** DOM READ ****************
        this._fireBeforeReadFunc();
        // ******** DOM READS ABOVE / DOM WRITES BELOW ****************
        // fire off all the "before" function that have DOM WRITES in them
        // ******** DOM WRITE ****************
        this._fireBeforeWriteFunc();
        // stage all of the before css classes and inline styles
        // ******** DOM WRITE ****************
        this._setBeforeStyles();
    }
    /**
     * DOM WRITE
     * RECURSION
     */
    _setBeforeStyles() {
        const children = this._childAnimations;
        if (children) {
            for (let i = 0; i < children.length; i++) {
                children[i]._setBeforeStyles();
            }
        }
        const elements = this._elements;
        // before the animations have started
        // only set before styles if animation is not reversed
        if (!elements || elements.length === 0 || this._isReverse) {
            return;
        }
        const addClasses = this._beforeAddClasses;
        const removeClasses = this._beforeRemoveClasses;
        for (let i = 0; i < elements.length; i++) {
            const el = elements[i];
            const elementClassList = el.classList;
            // css classes to add before the animation
            if (addClasses) {
                for (let j = 0; j < addClasses.length; j++) {
                    // ******** DOM WRITE ****************
                    elementClassList.add(addClasses[j]);
                }
            }
            // css classes to remove before the animation
            if (removeClasses) {
                for (let j = 0; j < removeClasses.length; j++) {
                    // ******** DOM WRITE ****************
                    elementClassList.remove(removeClasses[j]);
                }
            }
            // inline styles to add before the animation
            if (this._beforeStyles) {
                for (const prop in this._beforeStyles) {
                    // ******** DOM WRITE ****************
                    el.style[prop] = this._beforeStyles[prop];
                }
            }
        }
    }
    /**
     * DOM READ
     * RECURSION
     */
    _fireBeforeReadFunc() {
        const children = this._childAnimations;
        if (children) {
            for (let i = 0; i < children.length; i++) {
                // ******** DOM READ ****************
                children[i]._fireBeforeReadFunc();
            }
        }
        const readFunctions = this._readCallbacks;
        if (readFunctions) {
            for (let i = 0; i < readFunctions.length; i++) {
                // ******** DOM READ ****************
                readFunctions[i]();
            }
        }
    }
    /**
     * DOM WRITE
     * RECURSION
     */
    _fireBeforeWriteFunc() {
        const children = this._childAnimations;
        if (children) {
            for (let i = 0; i < children.length; i++) {
                // ******** DOM WRITE ****************
                children[i]._fireBeforeWriteFunc();
            }
        }
        const writeFunctions = this._writeCallbacks;
        if (writeFunctions) {
            for (let i = 0; i < writeFunctions.length; i++) {
                // ******** DOM WRITE ****************
                writeFunctions[i]();
            }
        }
    }
    /**
     * DOM WRITE
     */
    _setAfterStyles() {
        let i, j;
        let el;
        let elementClassList;
        const elements = this._elements;
        if (!elements) {
            return;
        }
        let prop;
        for (i = 0; i < elements.length; i++) {
            el = elements[i];
            elementClassList = el.classList;
            // remove the transition duration/easing
            // ******** DOM WRITE ****************
            el.style[CSS_PROP.transitionDurationProp] = el.style[CSS_PROP.transitionTimingFnProp] = '';
            if (this._isReverse) {
                // finished in reverse direction
                // css classes that were added before the animation should be removed
                const beforeAddClasses = this._beforeAddClasses;
                if (beforeAddClasses) {
                    for (j = 0; j < beforeAddClasses.length; j++) {
                        // ******** DOM WRITE ****************
                        elementClassList.remove(beforeAddClasses[j]);
                    }
                }
                // css classes that were removed before the animation should be added
                const beforeRemoveClasses = this._beforeRemoveClasses;
                if (beforeRemoveClasses) {
                    for (j = 0; j < beforeRemoveClasses.length; j++) {
                        // ******** DOM WRITE ****************
                        elementClassList.add(beforeRemoveClasses[j]);
                    }
                }
                // inline styles that were added before the animation should be removed
                const beforeStyles = this._beforeStyles;
                if (beforeStyles) {
                    for (prop in beforeStyles) {
                        // ******** DOM WRITE ****************
                        el.style[prop] = '';
                    }
                }
            }
            else {
                // finished in forward direction
                // css classes to add after the animation
                const afterAddClasses = this._afterAddClasses;
                if (afterAddClasses) {
                    for (j = 0; j < afterAddClasses.length; j++) {
                        // ******** DOM WRITE ****************
                        elementClassList.add(afterAddClasses[j]);
                    }
                }
                // css classes to remove after the animation
                const afterRemoveClasses = this._afterRemoveClasses;
                if (afterRemoveClasses) {
                    for (j = 0; j < afterRemoveClasses.length; j++) {
                        // ******** DOM WRITE ****************
                        elementClassList.remove(afterRemoveClasses[j]);
                    }
                }
                // inline styles to add after the animation
                const afterStyles = this._afterStyles;
                if (afterStyles) {
                    for (prop in afterStyles) {
                        // ******** DOM WRITE ****************
                        el.style[prop] = afterStyles[prop];
                    }
                }
            }
        }
    }
    /**
     * DOM WRITE
     * NO RECURSION
     */
    _willChange(addWillChange) {
        let wc;
        const effects = this._fxProperties;
        let willChange;
        if (addWillChange && effects) {
            wc = [];
            for (let i = 0; i < effects.length; i++) {
                const propWC = effects[i].wc;
                if (propWC === 'webkitTransform') {
                    wc.push('transform', '-webkit-transform');
                }
                else if (propWC) {
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
            for (let i = 0; i < elements.length; i++) {
                // ******** DOM WRITE ****************
                elements[i].style.willChange = willChange;
            }
        }
    }
    /**
     * Start the animation with a user controlled progress.
     */
    progressStart() {
        // ensure all past transition end events have been cleared
        this._clearAsync();
        // ******** DOM READ/WRITE ****************
        this._beforeAnimation();
        // ******** DOM WRITE ****************
        this._progressStart();
    }
    /**
     * DOM WRITE
     * RECURSION
     */
    _progressStart() {
        const children = this._childAnimations;
        if (children) {
            for (let i = 0; i < children.length; i++) {
                // ******** DOM WRITE ****************
                children[i]._progressStart();
            }
        }
        // force no duration, linear easing
        // ******** DOM WRITE ****************
        this._setTrans(0, true);
        // ******** DOM WRITE ****************
        this._willChange(true);
    }
    /**
     * Set the progress step for this animation.
     * progressStep() is not debounced, so it should not be called faster than 60FPS.
     */
    progressStep(stepValue) {
        // only update if the last update was more than 16ms ago
        stepValue = Math.min(1, Math.max(0, stepValue));
        const children = this._childAnimations;
        if (children) {
            for (let i = 0; i < children.length; i++) {
                // ******** DOM WRITE ****************
                children[i].progressStep(stepValue);
            }
        }
        // ******** DOM WRITE ****************
        this._progress(stepValue);
    }
    /**
     * End the progress animation.
     */
    progressEnd(shouldComplete, currentStepValue, dur) {
        if (this._isReverse) {
            // if the animation is going in reverse then
            // flip the step value: 0 becomes 1, 1 becomes 0
            currentStepValue = 1 - currentStepValue;
        }
        const stepValue = shouldComplete ? 1 : 0;
        const diff = Math.abs(currentStepValue - stepValue);
        if (dur === undefined) {
            dur = -1;
        }
        if (dur < 0) {
            dur = this._duration || 0;
        }
        else if (diff < 0.05) {
            dur = 0;
        }
        this._isAsync = (dur > 30);
        this._progressEnd(shouldComplete, stepValue, dur, this._isAsync);
        if (this._isAsync) {
            // for the root animation only
            // set the async TRANSITION END event
            // and run onFinishes when the transition ends
            // ******** DOM WRITE ****************
            this._asyncEnd(dur, shouldComplete);
            // this animation has a duration so we need another RAF
            // for the CSS TRANSITION properties to kick in
            if (!this._destroyed) {
                raf(() => {
                    this._playToStep(stepValue);
                });
            }
        }
    }
    /**
     * DOM WRITE
     * RECURSION
     */
    _progressEnd(shouldComplete, stepValue, dur, isAsync) {
        const children = this._childAnimations;
        if (children) {
            for (let i = 0; i < children.length; i++) {
                // ******** DOM WRITE ****************
                children[i]._progressEnd(shouldComplete, stepValue, dur, isAsync);
            }
        }
        if (!isAsync) {
            // stop immediately
            // set all the animations to their final position
            // ******** DOM WRITE ****************
            this._progress(stepValue);
            this._willChange(false);
            this._setAfterStyles();
            this._didFinish(shouldComplete);
        }
        else {
            // animate it back to it's ending position
            this.isPlaying = true;
            this.hasCompleted = false;
            this._hasDur = true;
            // ******** DOM WRITE ****************
            this._willChange(true);
            this._setTrans(dur, false);
        }
    }
    /**
     * Add a callback to fire when the animation has finished.
     */
    onFinish(callback, opts) {
        if (opts && opts.clearExistingCallacks) {
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
    /**
     * NO DOM
     * RECURSION
     */
    _didFinishAll(hasCompleted, finishAsyncAnimations, finishNoDurationAnimations) {
        const children = this._childAnimations;
        if (children) {
            for (let i = 0; i < children.length; i++) {
                children[i]._didFinishAll(hasCompleted, finishAsyncAnimations, finishNoDurationAnimations);
            }
        }
        if (finishAsyncAnimations && this._isAsync || finishNoDurationAnimations && !this._isAsync) {
            this._didFinish(hasCompleted);
        }
    }
    /**
     * NO RECURSION
     */
    _didFinish(hasCompleted) {
        this.isPlaying = false;
        this.hasCompleted = hasCompleted;
        if (this._onFinishCallbacks) {
            // run all finish callbacks
            for (let i = 0; i < this._onFinishCallbacks.length; i++) {
                this._onFinishCallbacks[i](this);
            }
        }
        if (this._onFinishOneTimeCallbacks) {
            // run all "onetime" finish callbacks
            for (let i = 0; i < this._onFinishOneTimeCallbacks.length; i++) {
                this._onFinishOneTimeCallbacks[i](this);
            }
            this._onFinishOneTimeCallbacks.length = 0;
        }
    }
    /**
     * Reverse the animation.
     */
    reverse(shouldReverse) {
        if (shouldReverse === undefined) {
            shouldReverse = true;
        }
        const children = this._childAnimations;
        if (children) {
            for (let i = 0; i < children.length; i++) {
                children[i].reverse(shouldReverse);
            }
        }
        this._isReverse = !!shouldReverse;
        return this;
    }
    /**
     * Recursively destroy this animation and all child animations.
     */
    destroy() {
        this._destroyed = true;
        const children = this._childAnimations;
        if (children) {
            for (let i = 0; i < children.length; i++) {
                children[i].destroy();
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
    /**
     * NO DOM
     */
    _transEl() {
        // get the lowest level element that has an Animator
        const children = this._childAnimations;
        if (children) {
            for (let i = 0; i < children.length; i++) {
                const targetEl = children[i]._transEl();
                if (targetEl) {
                    return targetEl;
                }
            }
        }
        return (this._hasTweenEffect &&
            this._hasDur &&
            this._elements &&
            this._elements.length > 0 ?
            this._elements[0] : null);
    }
}

class AnimationControllerImpl {
    create(animationBuilder, baseEl, opts) {
        if (animationBuilder) {
            return animationBuilder(Animator, baseEl, opts);
        }
        return Promise.resolve(new Animator());
    }
    static get is() { return "ion-animation-controller"; }
    static get properties() { return {
        "create": {
            "method": true
        }
    }; }
}

function isIOS(win) {
    return testUserAgent(win, /iPad|iPhone|iPod/i);
}
function isDevice(win) {
    return matchMedia(win, '(any-pointer:coarse)');
}
function isHybrid(win) {
    return isCordova(win) || isCapacitorNative(win);
}
function isCordova(window) {
    const win = window;
    return !!(win['cordova'] || win['phonegap'] || win['PhoneGap']);
}
function isCapacitorNative(window) {
    const win = window;
    const capacitor = win['Capacitor'];
    return !!(capacitor && capacitor.isNative);
}
function needInputShims(win) {
    return isIOS(win) && isDevice(win);
}
function testUserAgent(win, expr) {
    return expr.test(win.navigator.userAgent);
}
function matchMedia(win, query, fallback = false) {
    return win.matchMedia
        ? win.matchMedia(query).matches
        : fallback;
}

class App {
    componentDidLoad() {
        loadInputShims(this.win, this.config);
    }
    hostData() {
        const hybrid = isHybrid(this.win);
        const statusBar = this.config.getBoolean('statusbarPadding', hybrid);
        return {
            class: {
                [this.mode]: true,
                'statusbar-padding': statusBar
            }
        };
    }
    render() {
        const device = this.config.getBoolean('isDevice', isDevice(this.win));
        return [
            h("ion-tap-click", null),
            device && h("ion-status-tap", null),
            h("slot", null)
        ];
    }
    static get is() { return "ion-app"; }
    static get host() { return {
        "theme": "app"
    }; }
    static get properties() { return {
        "config": {
            "context": "config"
        },
        "el": {
            "elementRef": true
        },
        "win": {
            "context": "window"
        }
    }; }
    static get style() { return "audio,\ncanvas,\nprogress,\nvideo {\n  vertical-align: baseline; }\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\nb,\nstrong {\n  font-weight: bold; }\n\nimg {\n  max-width: 100%;\n  border: 0; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\nfigure {\n  margin: 1em 40px; }\n\nhr {\n  height: 1px;\n  border-width: 0;\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box; }\n\npre {\n  overflow: auto; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\nlabel,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  line-height: normal; }\n\ntextarea {\n  overflow: auto;\n  height: auto;\n  font: inherit;\n  color: inherit; }\n\ntextarea::-webkit-input-placeholder {\n  padding-left: 2px; }\n\ntextarea:-ms-input-placeholder {\n  padding-left: 2px; }\n\ntextarea::-ms-input-placeholder {\n  padding-left: 2px; }\n\ntextarea::placeholder {\n  padding-left: 2px; }\n\nform,\ninput,\noptgroup,\nselect {\n  margin: 0;\n  font: inherit;\n  color: inherit; }\n\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  cursor: pointer;\n  -webkit-appearance: button; }\n\na,\na div,\na span,\na ion-icon,\na ion-label,\nbutton,\nbutton div,\nbutton span,\nbutton ion-icon,\nbutton ion-label,\n[tappable],\n[tappable] div,\n[tappable] span,\n[tappable] ion-icon,\n[tappable] ion-label,\ninput,\ntextarea {\n  -ms-touch-action: manipulation;\n  touch-action: manipulation; }\n\na ion-label,\nbutton ion-label {\n  pointer-events: none; }\n\nbutton {\n  border: 0;\n  border-radius: 0;\n  font-family: inherit;\n  font-style: inherit;\n  font-variant: inherit;\n  line-height: 1;\n  text-transform: none;\n  cursor: pointer;\n  -webkit-appearance: button; }\n\n[tappable] {\n  cursor: pointer; }\n\na[disabled],\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0; }\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  padding: 0;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\n.hide,\n[hidden],\ntemplate {\n  display: none !important; }\n\n.sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0; }\n\n.click-block {\n  display: none; }\n\n.click-block-enabled {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  -webkit-transform: translate3d(0,  -100%,  0) translateY(1px);\n  transform: translate3d(0,  -100%,  0) translateY(1px);\n  position: absolute;\n  z-index: 99999;\n  display: block;\n  opacity: 0;\n  contain: strict; }\n\n.click-block-active {\n  -webkit-transform: translate3d(0,  0,  0);\n  transform: translate3d(0,  0,  0); }\n\n* {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none; }\n\nhtml {\n  width: 100%;\n  height: 100%;\n  -webkit-text-size-adjust: 100%;\n  -moz-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  text-size-adjust: 100%; }\n\nbody {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  margin: 0;\n  padding: 0;\n  position: fixed;\n  overflow: hidden;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  max-height: 100%;\n  text-rendering: optimizeLegibility;\n  -webkit-user-drag: none;\n  -ms-content-zooming: none;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  word-wrap: break-word;\n  overscroll-behavior-y: contain;\n  -webkit-text-size-adjust: none;\n  -moz-text-size-adjust: none;\n  -ms-text-size-adjust: none;\n  text-size-adjust: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\na {\n  background-color: transparent; }\n\na:not(.button):hover {\n  opacity: .7; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 16px;\n  margin-bottom: 10px;\n  font-weight: 500;\n  line-height: 1.2; }\n\nh1 {\n  margin-top: 20px;\n  font-size: 26px; }\n\nh2 {\n  margin-top: 18px;\n  font-size: 24px; }\n\nh3 {\n  font-size: 22px; }\n\nh4 {\n  font-size: 20px; }\n\nh5 {\n  font-size: 18px; }\n\nh6 {\n  font-size: 16px; }\n\nsmall {\n  font-size: 75%; }\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline; }\n\nsup {\n  top: -.5em; }\n\nsub {\n  bottom: -.25em; }\n\nion-app,\nion-router-outlet,\nion-tab,\nion-tabs,\nion-nav,\n.ion-page {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  z-index: 0;\n  overflow: hidden;\n  contain: layout size style; }\n\nion-app,\n.ion-page {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between; }\n\n.hide-page {\n  opacity: 0; }\n\n.nav-decor {\n  display: none; }\n\n.show-decor > .nav-decor {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  z-index: 0;\n  display: block;\n  background: #000;\n  pointer-events: none; }\n\nion-tap-click,\nion-status-tap,\nion-input-shims,\nion-route,\nion-route-controller,\nion-animation-controller,\nion-nav-controller,\nion-menu-controller,\nion-action-sheet-controller,\nion-alert-controller,\nion-loading-controller,\nion-modal-controller,\nion-picker-controller,\nion-toast-controller,\n[app-viewport],\n[overlay-portal],\n[nav-viewport],\n[tab-portal] {\n  display: none; }\n\n[text-center] {\n  text-align: center !important; }\n\n[text-justify] {\n  text-align: justify !important; }\n\n[text-start] {\n  text-align: left;\n  text-align: start !important; }\n\n[text-end] {\n  text-align: right;\n  text-align: end !important; }\n\n[text-left] {\n  text-align: left !important; }\n\n[text-right] {\n  text-align: right !important; }\n\n[text-nowrap] {\n  white-space: nowrap !important; }\n\n[text-wrap] {\n  white-space: normal !important; }\n\n\@media (min-width: 576px) {\n  [text-sm-center] {\n    text-align: center !important; }\n  [text-sm-justify] {\n    text-align: justify !important; }\n  [text-sm-start] {\n    text-align: left;\n    text-align: start !important; }\n  [text-sm-end] {\n    text-align: right;\n    text-align: end !important; }\n  [text-sm-left] {\n    text-align: left !important; }\n  [text-sm-right] {\n    text-align: right !important; }\n  [text-sm-nowrap] {\n    white-space: nowrap !important; }\n  [text-sm-wrap] {\n    white-space: normal !important; } }\n\n\@media (min-width: 768px) {\n  [text-md-center] {\n    text-align: center !important; }\n  [text-md-justify] {\n    text-align: justify !important; }\n  [text-md-start] {\n    text-align: left;\n    text-align: start !important; }\n  [text-md-end] {\n    text-align: right;\n    text-align: end !important; }\n  [text-md-left] {\n    text-align: left !important; }\n  [text-md-right] {\n    text-align: right !important; }\n  [text-md-nowrap] {\n    white-space: nowrap !important; }\n  [text-md-wrap] {\n    white-space: normal !important; } }\n\n\@media (min-width: 992px) {\n  [text-lg-center] {\n    text-align: center !important; }\n  [text-lg-justify] {\n    text-align: justify !important; }\n  [text-lg-start] {\n    text-align: left;\n    text-align: start !important; }\n  [text-lg-end] {\n    text-align: right;\n    text-align: end !important; }\n  [text-lg-left] {\n    text-align: left !important; }\n  [text-lg-right] {\n    text-align: right !important; }\n  [text-lg-nowrap] {\n    white-space: nowrap !important; }\n  [text-lg-wrap] {\n    white-space: normal !important; } }\n\n\@media (min-width: 1200px) {\n  [text-xl-center] {\n    text-align: center !important; }\n  [text-xl-justify] {\n    text-align: justify !important; }\n  [text-xl-start] {\n    text-align: left;\n    text-align: start !important; }\n  [text-xl-end] {\n    text-align: right;\n    text-align: end !important; }\n  [text-xl-left] {\n    text-align: left !important; }\n  [text-xl-right] {\n    text-align: right !important; }\n  [text-xl-nowrap] {\n    white-space: nowrap !important; }\n  [text-xl-wrap] {\n    white-space: normal !important; } }\n\n[text-uppercase] {\n  text-transform: uppercase !important; }\n\n[text-lowercase] {\n  text-transform: lowercase !important; }\n\n[text-capitalize] {\n  text-transform: capitalize !important; }\n\n\@media (min-width: 576px) {\n  [text-sm-uppercase] {\n    text-transform: uppercase !important; }\n  [text-sm-lowercase] {\n    text-transform: lowercase !important; }\n  [text-sm-capitalize] {\n    text-transform: capitalize !important; } }\n\n\@media (min-width: 768px) {\n  [text-md-uppercase] {\n    text-transform: uppercase !important; }\n  [text-md-lowercase] {\n    text-transform: lowercase !important; }\n  [text-md-capitalize] {\n    text-transform: capitalize !important; } }\n\n\@media (min-width: 992px) {\n  [text-lg-uppercase] {\n    text-transform: uppercase !important; }\n  [text-lg-lowercase] {\n    text-transform: lowercase !important; }\n  [text-lg-capitalize] {\n    text-transform: capitalize !important; } }\n\n\@media (min-width: 1200px) {\n  [text-xl-uppercase] {\n    text-transform: uppercase !important; }\n  [text-xl-lowercase] {\n    text-transform: lowercase !important; }\n  [text-xl-capitalize] {\n    text-transform: capitalize !important; } }\n\n[float-left] {\n  float: left !important; }\n\n[float-right] {\n  float: right !important; }\n\n[float-start] {\n  float: left !important; }\n\n[float-end] {\n  float: right !important; }\n\n\@media (min-width: 576px) {\n  [float-sm-left] {\n    float: left !important; }\n  [float-sm-right] {\n    float: right !important; }\n  [float-sm-start] {\n    float: left !important; }\n  [float-sm-end] {\n    float: right !important; } }\n\n\@media (min-width: 768px) {\n  [float-md-left] {\n    float: left !important; }\n  [float-md-right] {\n    float: right !important; }\n  [float-md-start] {\n    float: left !important; }\n  [float-md-end] {\n    float: right !important; } }\n\n\@media (min-width: 992px) {\n  [float-lg-left] {\n    float: left !important; }\n  [float-lg-right] {\n    float: right !important; }\n  [float-lg-start] {\n    float: left !important; }\n  [float-lg-end] {\n    float: right !important; } }\n\n\@media (min-width: 1200px) {\n  [float-xl-left] {\n    float: left !important; }\n  [float-xl-right] {\n    float: right !important; }\n  [float-xl-start] {\n    float: left !important; }\n  [float-xl-end] {\n    float: right !important; } }\n\nion-app [no-padding],\nion-app [no-padding] .scroll-inner {\n  padding: 0; }\n\nion-app [no-margin],\nion-app [no-margin] ion-scroll {\n  margin: 0; }\n\n.app-md {\n  font-family: \"Roboto\", \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  background-color: var(--ion-background-md-color, var(--ion-background-color, #fff)); }\n  .app-md ion-tabs ion-tabbar:not(.placement-top) {\n    padding-bottom: calc(constant(safe-area-inset-bottom) + 0);\n    padding-bottom: calc(env(safe-area-inset-bottom) + 0);\n    height: calc(56px + constant(safe-area-inset-bottom));\n    height: calc(56px + env(safe-area-inset-bottom)); }\n  .app-md ion-footer .toolbar:last-child {\n    padding-bottom: calc(constant(safe-area-inset-bottom) + 4px);\n    padding-bottom: calc(env(safe-area-inset-bottom) + 4px);\n    min-height: calc(56px + constant(safe-area-inset-bottom));\n    min-height: calc(56px + env(safe-area-inset-bottom)); }\n  .app-md.statusbar-padding .ion-page > .toolbar:first-child,\n  .app-md.statusbar-padding .ion-page > ion-header > .toolbar:first-child,\n  .app-md.statusbar-padding ion-tab ion-nav .ion-page > ion-header > .toolbar:first-child,\n  .app-md.statusbar-padding ion-menu > .menu-inner > .toolbar:first-child,\n  .app-md.statusbar-padding ion-menu > .menu-inner > ion-header > .toolbar:first-child {\n    padding-top: calc(20px + 4px);\n    padding-top: calc(constant(safe-area-inset-top) + 4px);\n    padding-top: calc(env(safe-area-inset-top) + 4px);\n    min-height: calc(56px + 20px);\n    min-height: calc(56px + constant(safe-area-inset-top));\n    min-height: calc(56px + env(safe-area-inset-top)); }\n  .app-md.statusbar-padding .ion-page > ion-content:first-child ion-scroll,\n  .app-md.statusbar-padding .ion-page > ion-header > ion-content:first-child ion-scroll,\n  .app-md.statusbar-padding ion-tab ion-nav .ion-page > ion-header > ion-content:first-child ion-scroll,\n  .app-md.statusbar-padding ion-menu > .menu-inner > ion-content:first-child ion-scroll,\n  .app-md.statusbar-padding ion-menu > .menu-inner > ion-header > ion-content:first-child ion-scroll {\n    padding-top: 20px;\n    padding-top: calc(constant(safe-area-inset-top) + 0px);\n    padding-top: calc(env(safe-area-inset-top) + 0px); }\n\na {\n  color: var(--ion-color-md-primary, var(--ion-color-primary, #3880ff)); }\n\n.app-md [padding],\n.app-md [padding] .scroll-inner {\n  padding: 16px; }\n\n.app-md [padding-top],\n.app-md [padding-top] .scroll-inner {\n  padding-top: 16px; }\n\n.app-md [padding-left],\n.app-md [padding-left] .scroll-inner {\n  padding-left: 16px; }\n\n.app-md [padding-right],\n.app-md [padding-right] .scroll-inner {\n  padding-right: 16px; }\n\n.app-md [padding-bottom],\n.app-md [padding-bottom] .scroll-inner {\n  padding-bottom: 16px; }\n\n.app-md [padding-vertical],\n.app-md [padding-vertical] .scroll-inner {\n  padding-top: 16px;\n  padding-bottom: 16px; }\n\n.app-md [padding-horizontal],\n.app-md [padding-horizontal] .scroll-inner {\n  padding-left: 16px;\n  padding-right: 16px; }\n\n.app-md [margin],\n.app-md [margin] .scroll-inner {\n  margin: 16px; }\n\n.app-md [margin-top],\n.app-md [margin-top] .scroll-inner {\n  margin-top: 16px; }\n\n.app-md [margin-left],\n.app-md [margin-left] .scroll-inner {\n  margin-left: 16px; }\n\n.app-md [margin-start],\n.app-md [margin-start] .scroll-inner {\n  margin-left: 16px; }\n\n.app-md [margin-right],\n.app-md [margin-right] .scroll-inner {\n  margin-right: 16px; }\n\n.app-md [margin-end],\n.app-md [margin-end] .scroll-inner {\n  margin-right: 16px; }\n\n.app-md [margin-bottom],\n.app-md [margin-bottom] .scroll-inner {\n  margin-bottom: 16px; }\n\n.app-md [margin-vertical],\n.app-md [margin-vertical] .scroll-inner {\n  margin-top: 16px;\n  margin-bottom: 16px; }\n\n.app-md [margin-horizontal],\n.app-md [margin-horizontal] .scroll-inner {\n  margin-left: 16px;\n  margin-right: 16px; }"; }
    static get styleMode() { return "md"; }
}
async function loadInputShims(win, config) {
    const inputShims = config.getBoolean('inputShims', needInputShims(win));
    if (inputShims) {
        (await import("./input-shims.js")).startInputShims(win.document, config);
    }
}

const iosTransitionAnimation = () => import("./ios.transition.js");
const mdTransitionAnimation = () => import("./md.transition.js");
async function transition(opts) {
    beforeTransition(opts);
    const animationBuilder = await getAnimationBuilder(opts);
    return (animationBuilder)
        ? animation(animationBuilder, opts)
        : noAnimation(opts); // fast path for no animation
}
async function getAnimationBuilder(opts) {
    if (!opts.leavingEl || opts.animated === false || opts.duration === 0) {
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
    enteringEl.hidden = false;
    if (leavingEl) {
        leavingEl.hidden = false;
    }
}
async function animation(animationBuilder, opts) {
    await waitForReady(opts, true);
    const trns = await opts.animationCtrl.create(animationBuilder, opts.baseEl, opts);
    fireWillEvents(opts.window, opts.enteringEl, opts.leavingEl);
    await playTransition(trns, opts);
    if (trns.hasCompleted) {
        fireDidEvents(opts.window, opts.enteringEl, opts.leavingEl);
    }
    return trns;
}
async function noAnimation(opts) {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    if (enteringEl) {
        enteringEl.classList.remove('hide-page');
    }
    if (leavingEl) {
        leavingEl.classList.remove('hide-page');
    }
    await waitForReady(opts, false);
    fireWillEvents(opts.window, enteringEl, leavingEl);
    fireDidEvents(opts.window, enteringEl, leavingEl);
    return null;
}
async function waitForReady(opts, defaultDeep) {
    const deep = opts.deepWait != null ? opts.deepWait : defaultDeep;
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
function playTransition(transition, opts) {
    const progressCallback = opts.progressCallback;
    const promise = new Promise(resolve => transition.onFinish(resolve));
    // cool, let's do this, start the transition
    if (progressCallback) {
        // this is a swipe to go back, just get the transition progress ready
        // kick off the swipe animation start
        transition.progressStart();
        progressCallback(transition);
    }
    else {
        // only the top level transition should actually start "play"
        // kick it off and let it play through
        // ******** DOM WRITE ****************
        transition.play();
    }
    // create a callback for when the animation is done
    return promise;
}
function fireWillEvents(win, enteringEl, leavingEl) {
    lifecycle(win, leavingEl, "ionViewWillLeave" /* WillLeave */);
    lifecycle(win, enteringEl, "ionViewWillEnter" /* WillEnter */);
}
function fireDidEvents(win, enteringEl, leavingEl) {
    lifecycle(win, enteringEl, "ionViewDidEnter" /* DidEnter */);
    lifecycle(win, leavingEl, "ionViewDidLeave" /* DidLeave */);
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
function deepReady(el) {
    if (!el) {
        return Promise.resolve();
    }
    if (customElements.get) {
        if (customElements.get(el.tagName.toLowerCase())) {
            return componentOnReady(el);
        }
        else {
            return Promise.all(Array.from(el.children).map(deepReady));
        }
    }
    return componentOnReady(el);
}
function componentOnReady(el) {
    if (el.componentOnReady) {
        return el.componentOnReady();
    }
    else {
        return Promise.all(Array.from(el.children).map(deepReady));
    }
}
function setZIndex(enteringEl, leavingEl, direction) {
    if (enteringEl) {
        enteringEl.style.zIndex = (direction === 'back')
            ? '99'
            : '101';
    }
    if (leavingEl) {
        leavingEl.style.zIndex = '100';
    }
}

class ViewController {
    constructor(component, params) {
        this.component = component;
        this.params = params;
        this.state = 1 /* New */;
    }
    /**
     * @hidden
     */
    async init(container) {
        this.state = 2 /* Attached */;
        if (!this.element) {
            const component = this.component;
            this.element = await attachComponent(this.delegate, container, component, ['ion-page', 'hide-page'], this.params);
        }
    }
    /**
     * @hidden
     * DOM WRITE
     */
    _destroy() {
        assert(this.state !== 3 /* Destroyed */, 'view state must be ATTACHED');
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
        this.state = 3 /* Destroyed */;
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
    const null1 = (currentParams == null);
    const null2 = (params == null);
    if (null1 !== null2) {
        return false;
    }
    if (null1 && null2) {
        return true;
    }
    const keysA = Object.keys(currentParams);
    const keysB = Object.keys(params);
    if (keysA.length !== keysB.length) {
        return false;
    }
    // Test for A's keys different from B.
    for (let i = 0; i < keysA.length; i++) {
        const key = keysA[i];
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
    }
    rootChanged() {
        if (this.root) {
            if (!this.useRouter) {
                this.setRoot(this.root, this.rootParams);
            }
        }
    }
    componentWillLoad() {
        this.useRouter = !!this.win.document.querySelector('ion-router') && !this.el.closest('[no-router]');
        if (this.swipeBackEnabled === undefined) {
            this.swipeBackEnabled = this.config.getBoolean('swipeBackEnabled', this.mode === 'ios');
        }
        if (this.animated === undefined) {
            this.animated = this.config.getBoolean('animate', true);
        }
        this.ionNavWillLoad.emit();
    }
    componentDidLoad() {
        this.rootChanged();
    }
    componentDidUnload() {
        for (const view of this.views) {
            lifecycle(this.win, view.element, "ionViewWillUnload" /* WillUnload */);
            view._destroy();
        }
        // release swipe back gesture and transition
        this.sbTrns && this.sbTrns.destroy();
        this.transInstr.length = this.views.length = 0;
        this.sbTrns = undefined;
        this.destroyed = true;
    }
    push(component, componentProps, opts, done) {
        return this.queueTrns({
            insertStart: -1,
            insertViews: [{ page: component, params: componentProps }],
            opts: opts,
        }, done);
    }
    insert(insertIndex, component, componentProps, opts, done) {
        return this.queueTrns({
            insertStart: insertIndex,
            insertViews: [{ page: component, params: componentProps }],
            opts: opts,
        }, done);
    }
    insertPages(insertIndex, insertComponents, opts, done) {
        return this.queueTrns({
            insertStart: insertIndex,
            insertViews: insertComponents,
            opts: opts,
        }, done);
    }
    pop(opts, done) {
        return this.queueTrns({
            removeStart: -1,
            removeCount: 1,
            opts: opts,
        }, done);
    }
    popTo(indexOrViewCtrl, opts, done) {
        const config = {
            removeStart: -1,
            removeCount: -1,
            opts: opts
        };
        if (indexOrViewCtrl instanceof ViewController) {
            config.removeView = indexOrViewCtrl;
            config.removeStart = 1;
        }
        else if (typeof indexOrViewCtrl === 'number') {
            config.removeStart = indexOrViewCtrl + 1;
        }
        return this.queueTrns(config, done);
    }
    popToRoot(opts, done) {
        return this.queueTrns({
            removeStart: 1,
            removeCount: -1,
            opts: opts,
        }, done);
    }
    removeIndex(startIndex, removeCount = 1, opts, done) {
        return this.queueTrns({
            removeStart: startIndex,
            removeCount: removeCount,
            opts: opts,
        }, done);
    }
    setRoot(component, componentProps, opts, done) {
        return this.setPages([{ page: component, params: componentProps }], opts, done);
    }
    setPages(views, opts, done) {
        if (!opts) {
            opts = {};
        }
        // if animation wasn't set to true then default it to NOT animate
        if (opts.animated !== true) {
            opts.animated = false;
        }
        return this.queueTrns({
            insertStart: 0,
            insertViews: views,
            removeStart: 0,
            removeCount: -1,
            opts: opts
        }, done);
    }
    setRouteId(id, params, direction) {
        const active = this.getActive();
        if (matches(active, id, params)) {
            return Promise.resolve({
                changed: false,
                element: active.element
            });
        }
        let resolve;
        const promise = new Promise((r) => resolve = r);
        let finish;
        const commonOpts = {
            updateURL: false,
            viewIsReady: (enteringEl) => {
                let mark;
                const p = new Promise(r => mark = r);
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
                finish = this.popTo(viewController, Object.assign({}, commonOpts, { direction: 'back' }));
            }
            else if (direction === 1) {
                finish = this.push(id, params, commonOpts);
            }
            else if (direction === -1) {
                finish = this.setRoot(id, params, Object.assign({}, commonOpts, { direction: 'back', animated: true }));
            }
        }
        return promise;
    }
    getRouteId() {
        const active = this.getActive();
        return active ? {
            id: active.element.tagName,
            params: active.params,
            element: active.element
        } : undefined;
    }
    canGoBack(view = this.getActive()) {
        return !!(view && this.getPrevious(view));
    }
    getActive() {
        return this.views[this.views.length - 1];
    }
    getByIndex(index) {
        return this.views[index];
    }
    getPrevious(view = this.getActive()) {
        if (!view) {
            return undefined;
        }
        const views = this.views;
        const index = views.indexOf(view);
        return (index > 0) ? views[index - 1] : undefined;
    }
    length() {
        return this.views.length;
    }
    // _queueTrns() adds a navigation stack change to the queue and schedules it to run:
    // 1. _nextTrns(): consumes the next transition in the queue
    // 2. _viewInit(): initializes enteringView if required
    // 3. _viewTest(): ensures canLeave/canEnter returns true, so the operation can continue
    // 4. _postViewInit(): add/remove the views from the navigation stack
    // 5. _transitionInit(): initializes the visual transition if required and schedules it to run
    // 6. _viewAttachToDOM(): attaches the enteringView to the DOM
    // 7. _transitionStart(): called once the transition actually starts, it initializes the Animation underneath.
    // 8. _transitionFinish(): called once the transition finishes
    // 9. _cleanup(): syncs the navigation internal state with the DOM. For example it removes the pages from the DOM or hides/show them.
    queueTrns(ti, done) {
        const promise = new Promise((resolve, reject) => {
            ti.resolve = resolve;
            ti.reject = reject;
        });
        ti.done = done;
        // Normalize empty
        if (ti.insertViews && ti.insertViews.length === 0) {
            ti.insertViews = undefined;
        }
        // Enqueue transition instruction
        this.transInstr.push(ti);
        // if there isn't a transition already happening
        // then this will kick off this transition
        this.nextTrns();
        return promise;
    }
    success(result, ti) {
        if (this.transInstr === null) {
            this.fireError('nav controller was destroyed', ti);
            return;
        }
        if (ti.done) {
            ti.done(result.hasCompleted, result.requiresTransition, result.enteringView, result.leavingView, result.direction);
        }
        ti.resolve(result.hasCompleted);
        if (ti.opts.updateURL !== false && this.useRouter) {
            const router = this.win.document.querySelector('ion-router');
            if (router) {
                const direction = (result.direction === 'back')
                    ? -1
                    : 1;
                router.navChanged(direction);
            }
        }
    }
    failed(rejectReason, ti) {
        if (this.transInstr === null) {
            this.fireError('nav controller was destroyed', ti);
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
        // this is the framework's bread 'n butta function
        // only one transition is allowed at any given time
        if (this.isTransitioning) {
            return false;
        }
        // there is no transition happening right now
        // get the next instruction
        const ti = this.transInstr.shift();
        if (!ti) {
            return false;
        }
        this.runTransition(ti);
        return true;
    }
    async runTransition(ti) {
        try {
            // set that this nav is actively transitioning
            this.ionNavWillChange.emit();
            this.isTransitioning = true;
            this.prepareTI(ti);
            const leavingView = this.getActive();
            const enteringView = this.getEnteringView(ti, leavingView);
            if (!leavingView && !enteringView) {
                throw new Error('no views in the stack to be removed');
            }
            if (enteringView && enteringView.state === 1 /* New */) {
                await enteringView.init(this.el);
            }
            this.postViewInit(enteringView, leavingView, ti);
            // Needs transition?
            const requiresTransition = (ti.enteringRequiresTransition || ti.leavingRequiresTransition) && enteringView !== leavingView;
            const result = requiresTransition
                ? await this.transition(enteringView, leavingView, ti)
                : {
                    // transition is not required, so we are already done!
                    // they're inserting/removing the views somewhere in the middle or
                    // beginning, so visually nothing needs to animate/transition
                    // resolve immediately because there's no animation that's happening
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
        if (ti.removeView != null) {
            assert(ti.removeStart != null, 'removeView needs removeStart');
            assert(ti.removeCount != null, 'removeView needs removeCount');
            const index = this.views.indexOf(ti.removeView);
            if (index < 0) {
                throw new Error('removeView was not found');
            }
            ti.removeStart += index;
        }
        if (ti.removeStart != null) {
            if (ti.removeStart < 0) {
                ti.removeStart = (viewsLength - 1);
            }
            if (ti.removeCount < 0) {
                ti.removeCount = (viewsLength - ti.removeStart);
            }
            ti.leavingRequiresTransition = (ti.removeCount > 0) && ((ti.removeStart + ti.removeCount) === viewsLength);
        }
        if (ti.insertViews) {
            // allow -1 to be passed in to auto push it on the end
            // and clean up the index if it's larger then the size of the stack
            if (ti.insertStart < 0 || ti.insertStart > viewsLength) {
                ti.insertStart = viewsLength;
            }
            ti.enteringRequiresTransition = (ti.insertStart === viewsLength);
        }
        const insertViews = ti.insertViews;
        if (!insertViews) {
            return;
        }
        assert(insertViews.length > 0, 'length can not be zero');
        const viewControllers = convertToViews(insertViews);
        if (viewControllers.length === 0) {
            throw new Error('invalid views to insert');
        }
        // Check all the inserted view are correct
        for (const view of viewControllers) {
            view.delegate = ti.opts.delegate;
            const nav = view.nav;
            if (nav && nav !== this) {
                throw new Error('inserted view was already inserted');
            }
            if (view.state === 3 /* Destroyed */) {
                throw new Error('inserted view was already destroyed');
            }
        }
        ti.insertViews = viewControllers;
    }
    getEnteringView(ti, leavingView) {
        const insertViews = ti.insertViews;
        if (insertViews) {
            // grab the very last view of the views to be inserted
            // and initialize it as the new entering view
            return insertViews[insertViews.length - 1];
        }
        const removeStart = ti.removeStart;
        if (removeStart != null) {
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
        assert(leavingView || enteringView, 'Both leavingView and enteringView are null');
        assert(ti.resolve, 'resolve must be valid');
        assert(ti.reject, 'reject must be valid');
        const opts = ti.opts;
        const insertViews = ti.insertViews;
        const removeStart = ti.removeStart;
        const removeCount = ti.removeCount;
        let destroyQueue = undefined;
        // there are views to remove
        if (removeStart != null && removeCount != null) {
            assert(removeStart >= 0, 'removeStart can not be negative');
            assert(removeCount >= 0, 'removeCount can not be negative');
            destroyQueue = [];
            for (let i = 0; i < removeCount; i++) {
                const view = this.views[i + removeStart];
                if (view && view !== enteringView && view !== leavingView) {
                    destroyQueue.push(view);
                }
            }
            // default the direction to "back"
            opts.direction = opts.direction || 'back';
        }
        const finalBalance = this.views.length + (insertViews ? insertViews.length : 0) - (removeCount ? removeCount : 0);
        assert(finalBalance >= 0, 'final balance can not be negative');
        if (finalBalance === 0) {
            console.warn(`You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.`, this, this.el);
            throw new Error('navigation stack needs at least one root page');
        }
        // At this point the transition can not be rejected, any throw should be an error
        // there are views to insert
        if (insertViews) {
            // add the views to the
            let insertIndex = ti.insertStart;
            for (const view of insertViews) {
                this.insertViewAt(view, insertIndex);
                insertIndex++;
            }
            if (ti.enteringRequiresTransition) {
                // default to forward if not already set
                opts.direction = opts.direction || 'forward';
            }
        }
        // if the views to be removed are in the beginning or middle
        // and there is not a view that needs to visually transition out
        // then just destroy them and don't transition anything
        // batch all of lifecycles together
        // let's make sure, callbacks are zoned
        if (destroyQueue && destroyQueue.length > 0) {
            for (const view of destroyQueue) {
                lifecycle(this.win, view.element, "ionViewWillLeave" /* WillLeave */);
                lifecycle(this.win, view.element, "ionViewDidLeave" /* DidLeave */);
                lifecycle(this.win, view.element, "ionViewWillUnload" /* WillUnload */);
            }
            // once all lifecycle events has been delivered, we can safely detroy the views
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
        // we should animate (duration > 0) if the pushed page is not the first one (startup)
        // or if it is a portal (modal, actionsheet, etc.)
        const opts = ti.opts;
        const progressCallback = opts.progressAnimation
            ? (animation) => { this.sbTrns = animation; }
            : undefined;
        const enteringEl = enteringView.element;
        const leavingEl = leavingView && leavingView.element;
        const animationOpts = Object.assign({ mode: this.mode, animated: this.animated, showGoBack: this.canGoBack(enteringView), animationCtrl: this.animationCtrl, progressCallback, window: this.win, baseEl: this.el, enteringEl,
            leavingEl }, opts);
        const trns = await transition(animationOpts);
        return this.transitionFinish(trns, enteringView, leavingView, opts);
    }
    transitionFinish(transition$$1, enteringView, leavingView, opts) {
        const hasCompleted = transition$$1 ? transition$$1.hasCompleted : true;
        const cleanupView = hasCompleted ? enteringView : leavingView;
        if (cleanupView) {
            this.cleanup(cleanupView);
        }
        // this is the root transition
        // it's safe to destroy this transition
        transition$$1 && transition$$1.destroy();
        return {
            hasCompleted: hasCompleted,
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
            // this view is already in the stack!!
            // move it to its new location
            assert(view.nav === this, 'view is not part of the nav');
            views.splice(index, 0, views.splice(existingIndex, 1)[0]);
        }
        else {
            assert(!view.nav, 'nav is used');
            // this is a new view to add to the stack
            // create the new entering view
            view.nav = this;
            // insert the entering view into the correct index in the stack
            views.splice(index, 0, view);
        }
    }
    removeView(view) {
        assert(view.state === 2 /* Attached */ || view.state === 3 /* Destroyed */, 'view state should be loaded or destroyed');
        const views = this.views;
        const index = views.indexOf(view);
        assert(index > -1, 'view must be part of the stack');
        if (index >= 0) {
            views.splice(index, 1);
        }
    }
    destroyView(view) {
        view._destroy();
        this.removeView(view);
    }
    /**
     * DOM WRITE
     */
    cleanup(activeView) {
        // ok, cleanup time!! Destroy all of the views that are
        // INACTIVE and come after the active view
        // only do this if the views exist, though
        if (this.destroyed) {
            return;
        }
        const views = this.views;
        const activeViewIndex = views.indexOf(activeView);
        for (let i = views.length - 1; i >= 0; i--) {
            const view = views[i];
            if (i > activeViewIndex) {
                // this view comes after the active view
                // let's unload it
                lifecycle(this.win, view.element, "ionViewWillUnload" /* WillUnload */);
                this.destroyView(view);
            }
            else if (i < activeViewIndex) {
                // this view comes before the active view
                // and it is not a portal then ensure it is hidden
                view.element.hidden = true;
            }
        }
    }
    swipeBackStart() {
        if (this.isTransitioning || this.transInstr.length > 0) {
            return;
        }
        // default the direction to "back";
        const opts = {
            direction: 'back',
            progressAnimation: true
        };
        this.queueTrns({
            removeStart: -1,
            removeCount: 1,
            opts: opts,
        }, undefined);
    }
    swipeBackProgress(detail) {
        if (this.sbTrns) {
            // continue to disable the app while actively dragging
            this.isTransitioning = true;
            // set the transition animation's progress
            const delta = detail.deltaX;
            const stepValue = delta / this.win.innerWidth;
            // set the transition animation's progress
            this.sbTrns.progressStep(stepValue);
        }
    }
    swipeBackEnd(detail) {
        if (this.sbTrns) {
            // the swipe back gesture has ended
            const delta = detail.deltaX;
            const width = this.win.innerWidth;
            const stepValue = delta / width;
            const velocity = detail.velocityX;
            const z = width / 2.0;
            const shouldComplete = (velocity >= 0)
                && (velocity > 0.2 || detail.deltaX > z);
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
    canSwipeBack() {
        return (!!this.swipeBackEnabled &&
            !this.isTransitioning &&
            this.canGoBack());
    }
    render() {
        return [
            this.swipeBackEnabled &&
                h("ion-gesture", { canStart: this.canSwipeBack.bind(this), onStart: this.swipeBackStart.bind(this), onMove: this.swipeBackProgress.bind(this), onEnd: this.swipeBackEnd.bind(this), gestureName: "goback-swipe", gesturePriority: 10, direction: "x", threshold: 10, attachTo: "body" }),
            this.mode === 'ios' && h("div", { class: "nav-decor" }),
            h("slot", null)
        ];
    }
    static get is() { return "ion-nav"; }
    static get properties() { return {
        "animated": {
            "type": Boolean,
            "attr": "animated",
            "mutable": true
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
        "length": {
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
        "swipeBackEnabled": {
            "type": Boolean,
            "attr": "swipe-back-enabled",
            "mutable": true
        },
        "win": {
            "context": "window"
        }
    }; }
    static get events() { return [{
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
        }]; }
}

class Route {
    constructor() {
        /**
         * Relative path that needs to match in order for this route to apply.
         *
         * Accepts paths similar to expressjs so that you can define parameters
         * in the url /foo/:bar where bar would be available in incoming props.
         */
        this.url = '';
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
        for (let i = 0; i < keys1.length; i++) {
            const key = keys1[i];
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
    static get properties() { return {
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
    }; }
    static get events() { return [{
            "name": "ionRouteDataChanged",
            "method": "ionRouteDataChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
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
    if (intent === 1 /* Forward */) {
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
        // find next navigation outlet in the DOM
        const outlet = searchNavNode(root);
        // make sure we can continue interating the DOM, otherwise abort
        if (index >= chain.length || !outlet) {
            return changed;
        }
        await outlet.componentOnReady();
        const route = chain[index];
        const result = await outlet.setRouteId(route.id, route.params, intent);
        // if the outlet changed the page, reset navigation to neutral (no direction)
        // this means nested outlets will not animate
        if (result.changed) {
            intent = 0 /* None */;
            changed = true;
        }
        // recursivelly set nested outlets
        changed = await writeNavState(result.element, chain, intent, index + 1, changed);
        // once all nested outlets are visible let's make the parent visible too,
        // using markVisible prevents flickering
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
function readNavState(root) {
    const ids = [];
    let outlet;
    let node = root;
    while (true) {
        outlet = searchNavNode(node);
        if (outlet) {
            const id = outlet.getRouteId();
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
    return new Promise((resolve) => {
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
function matchesPath(path, chain) {
    const segments = new RouterSegments(path);
    let matchesDefault = false;
    let allparams = undefined;
    for (let i = 0; i < chain.length; i++) {
        const path = chain[i].path;
        if (path[0] === '') {
            matchesDefault = true;
        }
        else {
            for (const segment of path) {
                const data = segments.next();
                // data param
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
        if (!component) {
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
        /**
         * By default `ion-router` will match the routes at the root path ("/").
         * That can be changed when
         *
         * T
         */
        this.root = '/';
        /**
         * The router can work in two "modes":
         * - With hash: `/index.html#/path/to/page`
         * - Without hash: `/path/to/page`
         *
         * Using one or another might depend in the requirements of your app and/or where it's deployed.
         *
         * Usually "hash-less" navigation works better for SEO and it's more user friendly too, but it might
         * requires aditional server-side configuration in order to properly work.
         *
         * On the otherside hash-navigation is much easier to deploy, it even works over the file protocol.
         *
         * By default, this property is `true`, change to `false` to allow hash-less URLs.
         */
        this.useHash = true;
    }
    async componentWillLoad() {
        console.debug('[ion-router] router will load');
        await waitUntilNavNode(this.win);
        console.debug('[ion-router] found nav');
        await this.onRoutesChanged();
        this.win.addEventListener('ionRouteRedirectChanged', debounce(this.onRedirectChanged.bind(this), 10));
        this.win.addEventListener('ionRouteDataChanged', debounce(this.onRoutesChanged.bind(this), 100));
        this.onRedirectChanged();
    }
    onPopState() {
        const direction = this.historyDirection();
        const path = this.getPath();
        console.debug('[ion-router] URL changed -> update nav', path, direction);
        return this.writeNavStateRoot(path, direction);
    }
    push(url, direction = 'forward') {
        const path = parsePath(url);
        const intent = DIRECTION_TO_INTENT[direction];
        console.debug('[ion-router] URL pushed -> updating nav', url, direction);
        this.setPath(path, intent);
        return this.writeNavStateRoot(path, intent);
    }
    printDebug() {
        console.debug('CURRENT PATH', this.getPath());
        console.debug('PREVIOUS PATH', this.previousPath);
        printRoutes(readRoutes(this.el));
        printRedirects(readRedirects(this.el));
    }
    async navChanged(intent) {
        if (this.busy) {
            return false;
        }
        const { ids, outlet } = readNavState(this.win.document.body);
        const routes = readRoutes(this.el);
        const chain = routerIDsToChain(ids, routes);
        if (!chain) {
            console.warn('[ion-router] no matching URL for ', ids.map(i => i.id));
            return false;
        }
        const path = chainToPath(chain);
        if (!path) {
            console.warn('[ion-router] router could not match path because some required param is missing');
            return false;
        }
        console.debug('[ion-router] nav changed -> update URL', ids, path);
        this.setPath(path, intent);
        await this.writeNavState(outlet, chain, 0 /* None */, path, null, ids.length);
        return true;
    }
    onRedirectChanged() {
        const path = this.getPath();
        if (path && routeRedirect(path, readRedirects(this.el))) {
            this.writeNavStateRoot(path, 0 /* None */);
        }
    }
    onRoutesChanged() {
        return this.writeNavStateRoot(this.getPath(), 0 /* None */);
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
            return 1 /* Forward */;
        }
        else if (state < lastState) {
            return -1 /* Back */;
        }
        else {
            return 0 /* None */;
        }
    }
    async writeNavStateRoot(path, intent) {
        if (this.busy) {
            return false;
        }
        if (!path) {
            console.error('[ion-router] URL is not part of the routing set');
            return false;
        }
        // lookup redirect rule
        const redirects = readRedirects(this.el);
        const redirect = routeRedirect(path, redirects);
        let redirectFrom = null;
        if (redirect) {
            this.setPath(redirect.to, intent);
            redirectFrom = redirect.from;
            path = redirect.to;
        }
        // lookup route chain
        const routes = readRoutes(this.el);
        const chain = routerPathToChain(path, routes);
        if (!chain) {
            console.error('[ion-router] the path does not match any route');
            return false;
        }
        // write DOM give
        return this.writeNavState(this.win.document.body, chain, intent, path, redirectFrom);
    }
    async writeNavState(node, chain, intent, path, redirectFrom, index = 0) {
        if (this.busy) {
            return false;
        }
        this.busy = true;
        // generate route event and emit will change
        const routeEvent = this.routeChangeEvent(path, redirectFrom);
        routeEvent && this.ionRouteWillChange.emit(routeEvent);
        const changed = await writeNavState(node, chain, intent, index);
        this.busy = false;
        if (changed) {
            console.debug('[ion-router] route changed', path);
        }
        // emit did change
        routeEvent && this.ionRouteDidChange.emit(routeEvent);
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
    static get properties() { return {
        "config": {
            "context": "config"
        },
        "el": {
            "elementRef": true
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
    }; }
    static get events() { return [{
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
        }]; }
    static get listeners() { return [{
            "name": "window:popstate",
            "method": "onPopState"
        }]; }
}
const DIRECTION_TO_INTENT = {
    'back': -1 /* Back */,
    'root': 0 /* None */,
    'forward': 1 /* Forward */
};

class StatusTap {
    constructor() {
        this.duration = 300;
    }
    onStatusTap() {
        this.queue.read(() => {
            const width = this.win.innerWidth;
            const height = this.win.innerWidth;
            const el = this.win.document.elementFromPoint(width / 2, height / 2);
            if (!el) {
                return;
            }
            const scrollEl = el.closest('ion-scroll');
            if (scrollEl) {
                scrollEl.componentOnReady().then(() => {
                    this.queue.write(() => {
                        scrollEl.scrollToTop(this.duration);
                    });
                });
            }
        });
    }
    static get is() { return "ion-status-tap"; }
    static get properties() { return {
        "duration": {
            "type": Number,
            "attr": "duration"
        },
        "queue": {
            "context": "queue"
        },
        "win": {
            "context": "window"
        }
    }; }
    static get listeners() { return [{
            "name": "window:statusTap",
            "method": "onStatusTap"
        }]; }
}

class TabButton {
    constructor() {
        this.keyFocus = false;
        this.selected = false;
    }
    componentDidLoad() {
        this.ionTabButtonDidLoad.emit();
    }
    componentDidUnload() {
        this.ionTabButtonDidUnload.emit();
    }
    onClick(ev) {
        if (!this.tab.disabled) {
            this.ionTabbarClick.emit(this.tab);
        }
        ev.stopPropagation();
        ev.preventDefault();
    }
    onKeyUp() {
        this.keyFocus = true;
    }
    onBlur() {
        this.keyFocus = false;
    }
    hostData() {
        const selected = this.selected;
        const tab = this.tab;
        const hasTitle = !!tab.label;
        const hasIcon = !!tab.icon;
        const hasTitleOnly = (hasTitle && !hasIcon);
        const hasIconOnly = (hasIcon && !hasTitle);
        const hasBadge = !!tab.badge;
        return {
            'role': 'tab',
            'id': tab.btnId,
            'aria-selected': selected,
            'hidden': !tab.show,
            class: {
                'tab-selected': selected,
                'has-title': hasTitle,
                'has-icon': hasIcon,
                'has-title-only': hasTitleOnly,
                'has-icon-only': hasIconOnly,
                'has-badge': hasBadge,
                'tab-btn-disabled': tab.disabled,
                'focused': this.keyFocus
            }
        };
    }
    render() {
        const tab = this.tab;
        const href = tab.href || '#';
        return [
            h("a", { href: href, class: "tab-cover", onKeyUp: this.onKeyUp.bind(this), onBlur: this.onBlur.bind(this) },
                tab.icon && h("ion-icon", { class: "tab-button-icon", name: tab.icon }),
                tab.label && h("span", { class: "tab-button-text" }, tab.label),
                tab.badge && h("ion-badge", { class: "tab-badge", color: tab.badgeColor }, tab.badge),
                this.mode === 'md' && h("ion-ripple-effect", { tapClick: true }))
        ];
    }
    static get is() { return "ion-tab-button"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "keyFocus": {
            "state": true
        },
        "selected": {
            "type": Boolean,
            "attr": "selected"
        },
        "tab": {
            "type": "Any",
            "attr": "tab"
        }
    }; }
    static get events() { return [{
            "name": "ionTabbarClick",
            "method": "ionTabbarClick",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionTabButtonDidLoad",
            "method": "ionTabButtonDidLoad",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionTabButtonDidUnload",
            "method": "ionTabButtonDidUnload",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "click",
            "method": "onClick"
        }]; }
    static get style() { return "ion-tab-button {\n  margin: 0;\n  text-align: center;\n  border-radius: 0;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 0;\n  display: block;\n  overflow: hidden;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  height: 100%;\n  border: 0;\n  text-decoration: none;\n  background: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\nion-tab-button a {\n  text-decoration: none; }\n\n.tab-cover {\n  margin: 0;\n  padding: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  color: inherit;\n  background: transparent;\n  cursor: pointer; }\n  .tab-cover:active, .tab-cover:focus {\n    outline: none; }\n\n.tab-btn-disabled {\n  pointer-events: none; }\n  .tab-btn-disabled > .tab-cover {\n    opacity: .4; }\n\n.tab-button-text,\n.tab-button-icon {\n  display: none;\n  overflow: hidden;\n  -ms-flex-item-align: center;\n  align-self: center;\n  min-width: 26px;\n  max-width: 100%;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.has-icon .tab-button-icon,\n.has-title .tab-button-text {\n  display: block; }\n\n.has-title-only .tab-button-text {\n  white-space: normal; }\n\n.layout-icon-start .tab-button {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row; }\n\n.layout-icon-end .tab-button {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n  -ms-flex-direction: row-reverse;\n  flex-direction: row-reverse; }\n\n.layout-icon-bottom .tab-button {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n  -ms-flex-direction: column-reverse;\n  flex-direction: column-reverse; }\n\n.layout-icon-start .tab-button,\n.layout-icon-end .tab-button,\n.layout-icon-hide .tab-button,\n.layout-title-hide .tab-button {\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center; }\n\n.layout-icon-hide .tab-button-icon,\n.layout-title-hide .tab-button-text {\n  display: none; }\n\n.tab-badge {\n  right: 4%;\n  top: 6%;\n  right: calc(50% - 50px);\n  padding: 1px 6px;\n  position: absolute;\n  height: auto;\n  font-size: 12px;\n  line-height: 16px; }\n\n.has-icon .tab-badge {\n  right: calc(50% - 30px); }\n\n.layout-icon-bottom .tab-badge,\n.layout-icon-start .tab-badge,\n.layout-icon-end .tab-badge {\n  right: calc(50% - 50px); }\n\n.tab-button-md {\n  max-width: 168px;\n  font-weight: normal;\n  color: var(--ion-tabbar-md-text-color, var(--ion-text-md-color-step-400, var(--ion-text-color-step-400, #666666)));\n  fill: var(--ion-tabbar-md-text-color, var(--ion-text-md-color-step-400, var(--ion-text-color-step-400, #666666))); }\n\n.tab-button-md.focused {\n  background: var(--ion-tabbar-md-background-color-focused, var(--ion-tabbar-background-color-focused, #dadada)); }\n\n.tab-button-md .tab-cover {\n  padding: 8px 12px 10px 12px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.scrollable .tab-button-md {\n  overflow: hidden;\n  -webkit-box-flex: 1;\n  -ms-flex: 1 0 auto;\n  flex: 1 0 auto; }\n\n.tab-button-md.tab-selected {\n  color: var(--ion-tabbar-md-text-color-active, var(--ion-tabbar-text-color-active, #488aff));\n  fill: var(--ion-tabbar-md-text-color-active, var(--ion-tabbar-text-color-active, #488aff)); }\n\n.placement-top .tab-button-md.tab-selected .tab-button-icon,\n.placement-top .tab-button-md.tab-selected .tab-button-text {\n  -webkit-transform: inherit;\n  transform: inherit; }\n\n.tab-button-md .tab-button-text {\n  margin: 0;\n  -webkit-transform-origin: center bottom;\n  transform-origin: center bottom;\n  font-size: 12px;\n  text-transform: none;\n  -webkit-transition: -webkit-transform 0.3s ease-in-out;\n  transition: -webkit-transform 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out; }\n\n.tab-button-md.tab-selected .tab-button-text {\n  -webkit-transform: scale3d(1.16667, 1.16667, 1);\n  transform: scale3d(1.16667, 1.16667, 1);\n  -webkit-transition: -webkit-transform 0.3s ease-in-out;\n  transition: -webkit-transform 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out; }\n\n.layout-icon-top .tab-button-md .has-icon .tab-button-text {\n  margin-bottom: -2px; }\n\n.layout-icon-bottom .tab-button-md .tab-button-text {\n  -webkit-transform-origin: center top;\n  transform-origin: center top;\n  margin-top: -2px; }\n\n.tab-button-md .tab-button-icon {\n  -webkit-transform-origin: center center;\n  transform-origin: center center;\n  width: 24px;\n  height: 24px;\n  font-size: 24px;\n  -webkit-transition: -webkit-transform 0.3s ease-in-out;\n  transition: -webkit-transform 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out; }\n\n.tab-button-md.tab-selected .tab-button-icon {\n  -webkit-transform: translate3d(0,  -2px,  0);\n  transform: translate3d(0,  -2px,  0); }\n\n.layout-icon-end .tab-button-md.tab-selected .tab-button-icon {\n  -webkit-transform: translate3d(2px,  0,  0);\n  transform: translate3d(2px,  0,  0); }\n\n.layout-icon-bottom .tab-button-md.tab-selected .tab-button-icon {\n  -webkit-transform: translate3d(0,  2px,  0);\n  transform: translate3d(0,  2px,  0); }\n\n.layout-icon-start .tab-button-md.tab-selected .tab-button-icon {\n  -webkit-transform: translate3d(-2px,  0,  0);\n  transform: translate3d(-2px,  0,  0); }\n\n.layout-icon-hide .tab-button-md,\n.layout-title-hide .tab-button-md,\n.tab-button-md.icon-only,\n.tab-button-md.has-title-only {\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center; }"; }
    static get styleMode() { return "md"; }
}

class Tabbar {
    constructor() {
        this.canScrollLeft = false;
        this.canScrollRight = false;
        this.hidden = false;
        this.layout = 'icon-top';
        this.placement = 'bottom';
        this.scrollable = false;
        this.tabs = [];
        this.highlight = false;
        /**
         * If true, the tabbar will be translucent. Defaults to `false`.
         */
        this.translucent = false;
    }
    selectedTabChanged() {
        this.scrollable && this.scrollToSelectedButton();
        this.highlight && this.updateHighlight();
    }
    onKeyboardWillHide() {
        setTimeout(() => this.hidden = false, 50);
    }
    onKeyboardWillShow() {
        if (this.placement === 'bottom') {
            this.hidden = true;
        }
    }
    onResize() {
        this.highlight && this.updateHighlight();
    }
    onTabButtonLoad() {
        this.scrollable && this.updateBoundaries();
        this.highlight && this.updateHighlight();
    }
    analyzeTabs() {
        const tabs = Array.from(this.doc.querySelectorAll('ion-tab-button'));
        const scrollLeft = this.scrollEl.scrollLeft;
        const tabsWidth = this.scrollEl.clientWidth;
        let previous = undefined;
        let next = undefined;
        for (const tab of tabs) {
            const left = tab.offsetLeft;
            const right = left + tab.offsetWidth;
            if (left < scrollLeft) {
                previous = { tab, amount: left };
            }
            if (!next && right > (tabsWidth + scrollLeft)) {
                const amount = right - tabsWidth;
                next = { tab, amount };
            }
        }
        return { previous, next };
    }
    getSelectedButton() {
        return Array.from(this.el.querySelectorAll('ion-tab-button'))
            .find(btn => btn.selected);
    }
    scrollToSelectedButton() {
        if (!this.scrollEl) {
            return;
        }
        this.queue.read(() => {
            const activeTabButton = this.getSelectedButton();
            if (activeTabButton) {
                const scrollLeft = this.scrollEl.scrollLeft, tabsWidth = this.scrollEl.clientWidth, left = activeTabButton.offsetLeft, right = left + activeTabButton.offsetWidth;
                let amount = 0;
                if (right > (tabsWidth + scrollLeft)) {
                    amount = right - tabsWidth;
                }
                else if (left < scrollLeft) {
                    amount = left;
                }
                if (amount !== 0) {
                    this.queue.write(() => {
                        this.scrollEl.scrollToPoint(amount, 0, 250).then(() => {
                            this.updateBoundaries();
                        });
                    });
                }
            }
        });
    }
    scrollByTab(direction) {
        this.queue.read(() => {
            const { previous, next } = this.analyzeTabs();
            const info = direction === 'right' ? next : previous;
            const amount = info && info.amount;
            if (info && amount) {
                this.scrollEl.scrollToPoint(amount, 0, 250).then(() => {
                    this.updateBoundaries();
                });
            }
        });
    }
    updateBoundaries() {
        this.canScrollLeft = this.scrollEl.scrollLeft !== 0;
        this.canScrollRight = this.scrollEl.scrollLeft < (this.scrollEl.scrollWidth - this.scrollEl.offsetWidth);
    }
    updateHighlight() {
        if (!this.highlight) {
            return;
        }
        this.queue.read(() => {
            const btn = this.getSelectedButton();
            const highlight = this.el.querySelector('div.tabbar-highlight');
            if (btn && highlight) {
                highlight.style.transform = `translate3d(${btn.offsetLeft}px,0,0) scaleX(${btn.offsetWidth})`;
            }
        });
    }
    hostData() {
        const themedClasses = this.translucent ? createThemedClasses(this.mode, this.color, 'tabbar-translucent') : {};
        return {
            role: 'tablist',
            class: Object.assign({}, themedClasses, { [`layout-${this.layout}`]: true, [`placement-${this.placement}`]: true, 'tabbar-hidden': this.hidden, 'scrollable': this.scrollable })
        };
    }
    render() {
        const selectedTab = this.selectedTab;
        const ionTabbarHighlight = this.highlight ? h("div", { class: "animated tabbar-highlight" }) : null;
        const buttonClasses = createThemedClasses(this.mode, this.color, 'tab-button');
        const tabButtons = this.tabs.map(tab => h("ion-tab-button", { class: buttonClasses, tab: tab, selected: selectedTab === tab }));
        if (this.scrollable) {
            return [
                h("ion-button", { onClick: () => this.scrollByTab('left'), fill: "clear", class: { inactive: !this.canScrollLeft } },
                    h("ion-icon", { name: "arrow-dropleft" })),
                h("ion-scroll", { forceOverscroll: false, ref: (scrollEl) => this.scrollEl = scrollEl },
                    tabButtons,
                    ionTabbarHighlight),
                h("ion-button", { onClick: () => this.scrollByTab('right'), fill: "clear", class: { inactive: !this.canScrollRight } },
                    h("ion-icon", { name: "arrow-dropright" }))
            ];
        }
        else {
            return [
                ...tabButtons,
                ionTabbarHighlight
            ];
        }
    }
    static get is() { return "ion-tabbar"; }
    static get host() { return {
        "theme": "tabbar"
    }; }
    static get properties() { return {
        "canScrollLeft": {
            "state": true
        },
        "canScrollRight": {
            "state": true
        },
        "doc": {
            "context": "document"
        },
        "el": {
            "elementRef": true
        },
        "hidden": {
            "state": true
        },
        "highlight": {
            "type": Boolean,
            "attr": "highlight"
        },
        "layout": {
            "type": String,
            "attr": "layout"
        },
        "placement": {
            "type": String,
            "attr": "placement"
        },
        "queue": {
            "context": "queue"
        },
        "scrollable": {
            "type": Boolean,
            "attr": "scrollable"
        },
        "selectedTab": {
            "type": "Any",
            "attr": "selected-tab",
            "watchCallbacks": ["selectedTabChanged"]
        },
        "tabs": {
            "type": "Any",
            "attr": "tabs"
        },
        "translucent": {
            "type": Boolean,
            "attr": "translucent"
        }
    }; }
    static get listeners() { return [{
            "name": "body:keyboardWillHide",
            "method": "onKeyboardWillHide"
        }, {
            "name": "body:keyboardWillShow",
            "method": "onKeyboardWillShow"
        }, {
            "name": "window:resize",
            "method": "onResize",
            "passive": true
        }, {
            "name": "ionTabButtonDidLoad",
            "method": "onTabButtonLoad"
        }, {
            "name": "ionTabButtonDidUnload",
            "method": "onTabButtonLoad"
        }]; }
    static get style() { return "ion-tabbar {\n  position: relative;\n  z-index: 10;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-ordinal-group: 2;\n  -ms-flex-order: 1;\n  order: 1;\n  width: 100%; }\n\nion-tabbar.tabbar-hidden {\n  display: none; }\n\nion-tabbar.placement-top {\n  -webkit-box-ordinal-group: 0;\n  -ms-flex-order: -1;\n  order: -1; }\n\n.tabbar-highlight {\n  left: 0;\n  bottom: 0;\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n  position: absolute;\n  display: block;\n  width: 1px;\n  height: 2px;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0); }\n  .tabbar-highlight.animated {\n    -webkit-transition-duration: 300ms;\n    transition-duration: 300ms;\n    -webkit-transition-property: -webkit-transform;\n    transition-property: -webkit-transform;\n    transition-property: transform;\n    transition-property: transform, -webkit-transform;\n    -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    will-change: transform; }\n\n.placement-top .tabbar-highlight {\n  bottom: 0; }\n\n.placement-bottom .tabbar-highlight {\n  top: 0; }\n\nion-tabbar.scrollable ion-scroll {\n  overflow: hidden; }\n\nion-tabbar.scrollable .scroll-inner {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row; }\n\nion-tabbar.scrollable ion-button.inactive {\n  visibility: hidden; }\n\n.tabbar-md {\n  height: 56px;\n  border-top: 1px solid rgba(var(--ion-tabbar-md-border-color-rgb, var(--ion-tabbar-border-color-rgb, 0, 0, 0)), 0.07);\n  background: var(--ion-tabbar-md-background-color, var(--ion-tabbar-background-color, #f8f8f8));\n  contain: strict; }\n\n.tabbar-md .tabbar-highlight {\n  background: var(--ion-tabbar-md-text-color-active, var(--ion-tabbar-text-color-active, #488aff)); }\n\n.tabbar-md.scrollable ion-scroll {\n  margin: 0 8px;\n  max-width: 650px; }\n\n.tabbar-md-primary {\n  color: var(--ion-color-md-primary-contrast, var(--ion-color-primary-contrast, #fff));\n  background-color: var(--ion-color-md-primary, var(--ion-color-primary, #3880ff));\n  fill: var(--ion-color-md-primary-contrast, var(--ion-color-primary-contrast, #fff)); }\n\n.tabbar-md-primary .tab-button.focused {\n  background: var(--ion-color-md-primary-shade, var(--ion-color-primary-shade, #3171e0)); }\n\n.tabbar-md-primary .tab-button:hover,\n.tabbar-md-primary .tab-button.tab-selected {\n  color: var(--ion-color-md-primary-contrast, var(--ion-color-primary-contrast, #fff));\n  fill: var(--ion-color-md-primary-contrast, var(--ion-color-primary-contrast, #fff)); }\n\n.tabbar-md-primary .tabbar-highlight {\n  background: var(--ion-color-md-primary-contrast, var(--ion-color-primary-contrast, #fff)); }\n\n.tabbar-md-secondary {\n  color: var(--ion-color-md-secondary-contrast, var(--ion-color-secondary-contrast, #fff));\n  background-color: var(--ion-color-md-secondary, var(--ion-color-secondary, #0cd1e8));\n  fill: var(--ion-color-md-secondary-contrast, var(--ion-color-secondary-contrast, #fff)); }\n\n.tabbar-md-secondary .tab-button.focused {\n  background: var(--ion-color-md-secondary-shade, var(--ion-color-secondary-shade, #0bb8cc)); }\n\n.tabbar-md-secondary .tab-button:hover,\n.tabbar-md-secondary .tab-button.tab-selected {\n  color: var(--ion-color-md-secondary-contrast, var(--ion-color-secondary-contrast, #fff));\n  fill: var(--ion-color-md-secondary-contrast, var(--ion-color-secondary-contrast, #fff)); }\n\n.tabbar-md-secondary .tabbar-highlight {\n  background: var(--ion-color-md-secondary-contrast, var(--ion-color-secondary-contrast, #fff)); }\n\n.tabbar-md-tertiary {\n  color: var(--ion-color-md-tertiary-contrast, var(--ion-color-tertiary-contrast, #fff));\n  background-color: var(--ion-color-md-tertiary, var(--ion-color-tertiary, #7044ff));\n  fill: var(--ion-color-md-tertiary-contrast, var(--ion-color-tertiary-contrast, #fff)); }\n\n.tabbar-md-tertiary .tab-button.focused {\n  background: var(--ion-color-md-tertiary-shade, var(--ion-color-tertiary-shade, #633ce0)); }\n\n.tabbar-md-tertiary .tab-button:hover,\n.tabbar-md-tertiary .tab-button.tab-selected {\n  color: var(--ion-color-md-tertiary-contrast, var(--ion-color-tertiary-contrast, #fff));\n  fill: var(--ion-color-md-tertiary-contrast, var(--ion-color-tertiary-contrast, #fff)); }\n\n.tabbar-md-tertiary .tabbar-highlight {\n  background: var(--ion-color-md-tertiary-contrast, var(--ion-color-tertiary-contrast, #fff)); }\n\n.tabbar-md-success {\n  color: var(--ion-color-md-success-contrast, var(--ion-color-success-contrast, #fff));\n  background-color: var(--ion-color-md-success, var(--ion-color-success, #10dc60));\n  fill: var(--ion-color-md-success-contrast, var(--ion-color-success-contrast, #fff)); }\n\n.tabbar-md-success .tab-button.focused {\n  background: var(--ion-color-md-success-shade, var(--ion-color-success-shade, #0ec254)); }\n\n.tabbar-md-success .tab-button:hover,\n.tabbar-md-success .tab-button.tab-selected {\n  color: var(--ion-color-md-success-contrast, var(--ion-color-success-contrast, #fff));\n  fill: var(--ion-color-md-success-contrast, var(--ion-color-success-contrast, #fff)); }\n\n.tabbar-md-success .tabbar-highlight {\n  background: var(--ion-color-md-success-contrast, var(--ion-color-success-contrast, #fff)); }\n\n.tabbar-md-warning {\n  color: var(--ion-color-md-warning-contrast, var(--ion-color-warning-contrast, #fff));\n  background-color: var(--ion-color-md-warning, var(--ion-color-warning, #ffce00));\n  fill: var(--ion-color-md-warning-contrast, var(--ion-color-warning-contrast, #fff)); }\n\n.tabbar-md-warning .tab-button.focused {\n  background: var(--ion-color-md-warning-shade, var(--ion-color-warning-shade, #e0b500)); }\n\n.tabbar-md-warning .tab-button:hover,\n.tabbar-md-warning .tab-button.tab-selected {\n  color: var(--ion-color-md-warning-contrast, var(--ion-color-warning-contrast, #fff));\n  fill: var(--ion-color-md-warning-contrast, var(--ion-color-warning-contrast, #fff)); }\n\n.tabbar-md-warning .tabbar-highlight {\n  background: var(--ion-color-md-warning-contrast, var(--ion-color-warning-contrast, #fff)); }\n\n.tabbar-md-danger {\n  color: var(--ion-color-md-danger-contrast, var(--ion-color-danger-contrast, #fff));\n  background-color: var(--ion-color-md-danger, var(--ion-color-danger, #f04141));\n  fill: var(--ion-color-md-danger-contrast, var(--ion-color-danger-contrast, #fff)); }\n\n.tabbar-md-danger .tab-button.focused {\n  background: var(--ion-color-md-danger-shade, var(--ion-color-danger-shade, #d33939)); }\n\n.tabbar-md-danger .tab-button:hover,\n.tabbar-md-danger .tab-button.tab-selected {\n  color: var(--ion-color-md-danger-contrast, var(--ion-color-danger-contrast, #fff));\n  fill: var(--ion-color-md-danger-contrast, var(--ion-color-danger-contrast, #fff)); }\n\n.tabbar-md-danger .tabbar-highlight {\n  background: var(--ion-color-md-danger-contrast, var(--ion-color-danger-contrast, #fff)); }\n\n.tabbar-md-light {\n  color: var(--ion-color-md-light-contrast, var(--ion-color-light-contrast, #000));\n  background-color: var(--ion-color-md-light, var(--ion-color-light, #f4f5f8));\n  fill: var(--ion-color-md-light-contrast, var(--ion-color-light-contrast, #000)); }\n\n.tabbar-md-light .tab-button.focused {\n  background: var(--ion-color-md-light-shade, var(--ion-color-light-shade, #d7d8da)); }\n\n.tabbar-md-light .tab-button:hover,\n.tabbar-md-light .tab-button.tab-selected {\n  color: var(--ion-color-md-light-contrast, var(--ion-color-light-contrast, #000));\n  fill: var(--ion-color-md-light-contrast, var(--ion-color-light-contrast, #000)); }\n\n.tabbar-md-light .tabbar-highlight {\n  background: var(--ion-color-md-light-contrast, var(--ion-color-light-contrast, #000)); }\n\n.tabbar-md-medium {\n  color: var(--ion-color-md-medium-contrast, var(--ion-color-medium-contrast, #fff));\n  background-color: var(--ion-color-md-medium, var(--ion-color-medium, #989aa2));\n  fill: var(--ion-color-md-medium-contrast, var(--ion-color-medium-contrast, #fff)); }\n\n.tabbar-md-medium .tab-button.focused {\n  background: var(--ion-color-md-medium-shade, var(--ion-color-medium-shade, #86888f)); }\n\n.tabbar-md-medium .tab-button:hover,\n.tabbar-md-medium .tab-button.tab-selected {\n  color: var(--ion-color-md-medium-contrast, var(--ion-color-medium-contrast, #fff));\n  fill: var(--ion-color-md-medium-contrast, var(--ion-color-medium-contrast, #fff)); }\n\n.tabbar-md-medium .tabbar-highlight {\n  background: var(--ion-color-md-medium-contrast, var(--ion-color-medium-contrast, #fff)); }\n\n.tabbar-md-dark {\n  color: var(--ion-color-md-dark-contrast, var(--ion-color-dark-contrast, #fff));\n  background-color: var(--ion-color-md-dark, var(--ion-color-dark, #222428));\n  fill: var(--ion-color-md-dark-contrast, var(--ion-color-dark-contrast, #fff)); }\n\n.tabbar-md-dark .tab-button.focused {\n  background: var(--ion-color-md-dark-shade, var(--ion-color-dark-shade, #1e2023)); }\n\n.tabbar-md-dark .tab-button:hover,\n.tabbar-md-dark .tab-button.tab-selected {\n  color: var(--ion-color-md-dark-contrast, var(--ion-color-dark-contrast, #fff));\n  fill: var(--ion-color-md-dark-contrast, var(--ion-color-dark-contrast, #fff)); }\n\n.tabbar-md-dark .tabbar-highlight {\n  background: var(--ion-color-md-dark-contrast, var(--ion-color-dark-contrast, #fff)); }"; }
    static get styleMode() { return "md"; }
}

class Tabs {
    constructor() {
        this.ids = -1;
        this.transitioning = false;
        this.tabsId = (++tabIds);
        this.tabs = [];
        /**
         * If true, the tabbar
         */
        this.tabbarHidden = false;
        /**
         * If true, the tabs will be translucent.
         * Note: In order to scroll content behind the tabs, the `fullscreen`
         * attribute needs to be set on the content.
         * Defaults to `false`.
         */
        this.translucent = false;
        this.scrollable = false;
        this.useRouter = false;
    }
    componentWillLoad() {
        if (!this.useRouter) {
            this.useRouter = !!this.doc.querySelector('ion-router') && !this.el.closest('[no-router]');
        }
        this.loadConfig('tabbarLayout', 'bottom');
        this.loadConfig('tabbarLayout', 'icon-top');
        this.loadConfig('tabbarHighlight', false);
        this.ionNavWillLoad.emit();
    }
    async componentDidLoad() {
        await this.initTabs();
        await this.initSelect();
    }
    componentDidUnload() {
        this.tabs.length = 0;
        this.selectedTab = this.leavingTab = undefined;
    }
    tabChange(ev) {
        const selectedTab = ev.detail;
        if (this.useRouter && selectedTab.href != null) {
            const router = this.doc.querySelector('ion-router');
            if (router) {
                router.push(selectedTab.href);
            }
            return;
        }
        this.select(selectedTab);
    }
    /**
     * @param {number|Tab} tabOrIndex Index, or the Tab instance, of the tab to select.
     */
    async select(tabOrIndex) {
        const selectedTab = this.getTab(tabOrIndex);
        if (!this.shouldSwitch(selectedTab)) {
            return false;
        }
        await this.setActive(selectedTab);
        await this.notifyRouter();
        this.tabSwitch();
        return true;
    }
    async setRouteId(id) {
        const selectedTab = this.getTab(id);
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
    getRouteId() {
        const id = this.selectedTab && this.selectedTab.getTabId();
        return id ? { id, element: this.selectedTab } : undefined;
    }
    getTab(tabOrIndex) {
        if (typeof tabOrIndex === 'string') {
            return this.tabs.find(tab => tab.getTabId() === tabOrIndex);
        }
        if (typeof tabOrIndex === 'number') {
            return this.tabs[tabOrIndex];
        }
        return tabOrIndex;
    }
    /**
     * @return {HTMLIonTabElement} Returns the currently selected tab
     */
    getSelected() {
        return this.selectedTab;
    }
    initTabs() {
        const tabs = this.tabs = Array.from(this.el.querySelectorAll('ion-tab'));
        const tabPromises = tabs.map(tab => {
            const id = `t-${this.tabsId}-${++this.ids}`;
            tab.btnId = 'tab-' + id;
            tab.id = 'tabpanel-' + id;
            return tab.componentOnReady();
        });
        return Promise.all(tabPromises);
    }
    async initSelect() {
        if (this.useRouter) {
            return;
        }
        // find pre-selected tabs
        const selectedTab = this.tabs.find(t => t.selected) ||
            this.tabs.find(t => t.show && !t.disabled);
        // reset all tabs none is selected
        for (const tab of this.tabs) {
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
    loadConfig(attrKey, fallback) {
        const val = this[attrKey];
        if (typeof val === 'undefined') {
            this[attrKey] = this.config.get(attrKey, fallback);
        }
    }
    setActive(selectedTab) {
        if (this.transitioning) {
            return Promise.reject('transitioning already happening');
        }
        if (!selectedTab) {
            return Promise.reject('no tab is selected');
        }
        // Reset rest of tabs
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
            const router = this.doc.querySelector('ion-router');
            if (router) {
                return router.navChanged(1);
            }
        }
        return Promise.resolve(false);
    }
    shouldSwitch(selectedTab) {
        const leavingTab = this.selectedTab;
        return !!(selectedTab && selectedTab !== leavingTab && !this.transitioning);
    }
    render() {
        const dom = [
            h("div", { class: "tabs-inner" },
                h("slot", null))
        ];
        if (!this.tabbarHidden) {
            dom.push(h("ion-tabbar", { tabs: this.tabs, color: this.color, selectedTab: this.selectedTab, highlight: this.tabbarHighlight, placement: this.tabbarPlacement, layout: this.tabbarLayout, translucent: this.translucent, scrollable: this.scrollable }));
        }
        return dom;
    }
    static get is() { return "ion-tabs"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
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
        "scrollable": {
            "type": Boolean,
            "attr": "scrollable"
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
        "tabbarHighlight": {
            "type": Boolean,
            "attr": "tabbar-highlight",
            "mutable": true
        },
        "tabbarLayout": {
            "type": String,
            "attr": "tabbar-layout",
            "mutable": true
        },
        "tabbarPlacement": {
            "type": String,
            "attr": "tabbar-placement",
            "mutable": true
        },
        "tabs": {
            "state": true
        },
        "translucent": {
            "type": Boolean,
            "attr": "translucent"
        },
        "useRouter": {
            "type": Boolean,
            "attr": "use-router",
            "mutable": true
        }
    }; }
    static get events() { return [{
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
        }]; }
    static get listeners() { return [{
            "name": "ionTabbarClick",
            "method": "tabChange"
        }]; }
    static get style() { return "ion-tabs {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  z-index: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  contain: layout size style; }\n\n.tabs-inner {\n  position: relative;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  contain: layout size style; }"; }
}
let tabIds = -1;

class TapClick {
    constructor() {
        this.lastTouch = -MOUSE_WAIT * 10;
        this.lastActivated = 0;
        this.cancelled = false;
        this.clearDefers = new WeakMap();
    }
    onBodyClick(ev) {
        if (this.cancelled) {
            ev.preventDefault();
            ev.stopPropagation();
        }
    }
    // Touch Events
    onTouchStart(ev) {
        this.lastTouch = now(ev);
        this.pointerDown(ev);
    }
    onTouchEnd(ev) {
        this.lastTouch = now(ev);
        this.pointerUp(ev);
    }
    onMouseDown(ev) {
        const t = now(ev) - MOUSE_WAIT;
        if (this.lastTouch < t) {
            this.pointerDown(ev);
        }
    }
    onMouseUp(ev) {
        const t = now(ev) - MOUSE_WAIT;
        if (this.lastTouch < t) {
            this.pointerUp(ev);
        }
    }
    cancelActive() {
        clearTimeout(this.activeDefer);
        if (this.activatableEle) {
            this.removeActivated(false);
            this.activatableEle = undefined;
        }
        this.cancelled = true;
    }
    pointerDown(ev) {
        if (this.activatableEle) {
            return;
        }
        this.cancelled = false;
        this.setActivatedElement(getActivatableTarget(ev.target), ev);
    }
    pointerUp(ev) {
        this.setActivatedElement(undefined, ev);
        if (this.cancelled && ev.cancelable) {
            ev.preventDefault();
        }
    }
    setActivatedElement(el, ev) {
        // do nothing
        const activatableEle = this.activatableEle;
        if (el && el === activatableEle) {
            return;
        }
        clearTimeout(this.activeDefer);
        this.activeDefer = undefined;
        const { x, y } = pointerCoord(ev);
        // unactivate selected
        if (activatableEle) {
            if (this.clearDefers.has(activatableEle)) {
                throw new Error('internal error');
            }
            if (!activatableEle.classList.contains(ACTIVATED)) {
                this.addActivated(activatableEle, x, y);
            }
            this.removeActivated(true);
        }
        // activate
        if (el) {
            const deferId = this.clearDefers.get(el);
            if (deferId) {
                clearTimeout(deferId);
                this.clearDefers.delete(el);
            }
            el.classList.remove(ACTIVATED);
            this.activeDefer = setTimeout(() => {
                this.addActivated(el, x, y);
                this.activeDefer = undefined;
            }, ADD_ACTIVATED_DEFERS);
        }
        this.activatableEle = el;
    }
    addActivated(el, x, y) {
        this.lastActivated = Date.now();
        el.classList.add(ACTIVATED);
        const event = new CustomEvent('ionActivated', {
            bubbles: false,
            detail: { x, y }
        });
        el.dispatchEvent(event);
    }
    removeActivated(smooth) {
        const activatableEle = this.activatableEle;
        if (!activatableEle) {
            return;
        }
        const time = CLEAR_STATE_DEFERS - Date.now() + this.lastActivated;
        if (smooth && time > 0) {
            const deferId = setTimeout(() => {
                activatableEle.classList.remove(ACTIVATED);
                this.clearDefers.delete(activatableEle);
            }, CLEAR_STATE_DEFERS);
            this.clearDefers.set(activatableEle, deferId);
        }
        else {
            activatableEle.classList.remove(ACTIVATED);
        }
    }
    static get is() { return "ion-tap-click"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "enableListener": {
            "context": "enableListener"
        },
        "isServer": {
            "context": "isServer"
        }
    }; }
    static get listeners() { return [{
            "name": "body:click",
            "method": "onBodyClick",
            "capture": true
        }, {
            "name": "document:touchstart",
            "method": "onTouchStart",
            "capture": true,
            "passive": true
        }, {
            "name": "document:touchcancel",
            "method": "onTouchEnd",
            "capture": true
        }, {
            "name": "document:touchend",
            "method": "onTouchEnd",
            "capture": true
        }, {
            "name": "document:mousedown",
            "method": "onMouseDown",
            "capture": true,
            "passive": true
        }, {
            "name": "document:mouseup",
            "method": "onMouseUp",
            "capture": true
        }, {
            "name": "body:ionScrollStart",
            "method": "cancelActive"
        }, {
            "name": "body:ionGestureCaptured",
            "method": "cancelActive"
        }]; }
}
function getActivatableTarget(el) {
    return el.closest('a,button,[tappable]');
}
const ACTIVATED = 'activated';
const ADD_ACTIVATED_DEFERS = 200;
const CLEAR_STATE_DEFERS = 200;
const MOUSE_WAIT = 2500;

export { MyApp, AnimationControllerImpl as IonAnimationController, App as IonApp, Nav as IonNav, Route as IonRoute, Router as IonRouter, StatusTap as IonStatusTap, TabButton as IonTabButton, Tabbar as IonTabbar, Tabs as IonTabs, TapClick as IonTapClick };
