webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(7);

	var _vue2 = _interopRequireDefault(_vue);

	var _vueRouter = __webpack_require__(9);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	var _button = __webpack_require__(10);

	var _button2 = _interopRequireDefault(_button);

	var _icon = __webpack_require__(239);

	var _icon2 = _interopRequireDefault(_icon);

	var _tip = __webpack_require__(244);

	var _tip2 = _interopRequireDefault(_tip);

	var _gotop = __webpack_require__(249);

	var _gotop2 = _interopRequireDefault(_gotop);

	var _loadding = __webpack_require__(254);

	var _loadding2 = _interopRequireDefault(_loadding);

	var _modal = __webpack_require__(259);

	var _modal2 = _interopRequireDefault(_modal);

	var _alert = __webpack_require__(264);

	var _alert2 = _interopRequireDefault(_alert);

	var _progress = __webpack_require__(269);

	var _progress2 = _interopRequireDefault(_progress);

	var _circle = __webpack_require__(274);

	var _circle2 = _interopRequireDefault(_circle);

	var _inputbox = __webpack_require__(279);

	var _inputbox2 = _interopRequireDefault(_inputbox);

	var _radio = __webpack_require__(282);

	var _radio2 = _interopRequireDefault(_radio);

	var _checkbox = __webpack_require__(285);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _selector = __webpack_require__(288);

	var _selector2 = _interopRequireDefault(_selector);

	var _switch = __webpack_require__(291);

	var _switch2 = _interopRequireDefault(_switch);

	var _accordion = __webpack_require__(294);

	var _accordion2 = _interopRequireDefault(_accordion);

	var _scroll = __webpack_require__(299);

	var _scroll2 = _interopRequireDefault(_scroll);

	var _scrollY = __webpack_require__(304);

	var _scrollY2 = _interopRequireDefault(_scrollY);

	var _scrollX = __webpack_require__(309);

	var _scrollX2 = _interopRequireDefault(_scrollX);

	var _pullRefresh = __webpack_require__(314);

	var _pullRefresh2 = _interopRequireDefault(_pullRefresh);

	var _pullRefreshWindow = __webpack_require__(319);

	var _pullRefreshWindow2 = _interopRequireDefault(_pullRefreshWindow);

	var _pullRefreshElem = __webpack_require__(324);

	var _pullRefreshElem2 = _interopRequireDefault(_pullRefreshElem);

	var _pullRefreshScroll = __webpack_require__(329);

	var _pullRefreshScroll2 = _interopRequireDefault(_pullRefreshScroll);

	var _pullLoad = __webpack_require__(334);

	var _pullLoad2 = _interopRequireDefault(_pullLoad);

	var _pullLoadWindow = __webpack_require__(339);

	var _pullLoadWindow2 = _interopRequireDefault(_pullLoadWindow);

	var _pullLoadElem = __webpack_require__(344);

	var _pullLoadElem2 = _interopRequireDefault(_pullLoadElem);

	var _pullLoadScroll = __webpack_require__(349);

	var _pullLoadScroll2 = _interopRequireDefault(_pullLoadScroll);

	var _slider = __webpack_require__(354);

	var _slider2 = _interopRequireDefault(_slider);

	var _sliderY = __webpack_require__(359);

	var _sliderY2 = _interopRequireDefault(_sliderY);

	var _sliderX = __webpack_require__(364);

	var _sliderX2 = _interopRequireDefault(_sliderX);

	var _uploader = __webpack_require__(369);

	var _uploader2 = _interopRequireDefault(_uploader);

	var _page = __webpack_require__(374);

	var _page2 = _interopRequireDefault(_page);

	var _app = __webpack_require__(379);

	var _app2 = _interopRequireDefault(_app);

	var _home = __webpack_require__(384);

	var _home2 = _interopRequireDefault(_home);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import LazyLoad from './components/lazyLoad.vue';


	//引入组件

	// 表单
	_vue2.default.use(_vueRouter2.default);

	// View


	// 组件


	var app = _vue2.default.extend(_app2.default);

	var router = new _vueRouter2.default();

	//配置路由
	router.map({
	  '/home': {
	    component: _home2.default
	  },
	  '/button': {
	    component: _button2.default
	  },
	  '/icon': {
	    component: _icon2.default
	  },
	  '/tip': {
	    component: _tip2.default
	  },
	  '/gotop': {
	    component: _gotop2.default
	  },
	  '/loadding': {
	    component: _loadding2.default
	  },
	  '/modal': {
	    component: _modal2.default
	  },
	  '/alert': {
	    component: _alert2.default
	  },
	  '/progress': {
	    component: _progress2.default
	  },
	  '/circle': {
	    component: _circle2.default
	  },
	  // 表单
	  '/inputbox': {
	    component: _inputbox2.default
	  },
	  '/radio': {
	    component: _radio2.default
	  },
	  '/checkbox': {
	    component: _checkbox2.default
	  },
	  '/selector': {
	    component: _selector2.default
	  },
	  '/switch': {
	    component: _switch2.default
	  },
	  '/accordion': {
	    component: _accordion2.default
	  },
	  '/scroll': {
	    component: _scroll2.default
	  },
	  '/pullRefresh': {
	    component: _pullRefresh2.default
	  },
	  '/pullRefreshWindow': {
	    component: _pullRefreshWindow2.default
	  },
	  '/pullRefreshElem': {
	    component: _pullRefreshElem2.default
	  },
	  '/pullRefreshScroll': {
	    component: _pullRefreshScroll2.default
	  },
	  '/pullLoad': {
	    component: _pullLoad2.default
	  },
	  '/pullLoadWindow': {
	    component: _pullLoadWindow2.default
	  },
	  '/pullLoadElem': {
	    component: _pullLoadElem2.default
	  },
	  '/pullLoadScroll': {
	    component: _pullLoadScroll2.default
	  },
	  '/slider': {
	    component: _slider2.default
	  },
	  '/uploader': {
	    component: _uploader2.default
	  },
	  '/page': {
	    component: _page2.default
	  },
	  '/scrollX': {
	    component: _scrollX2.default
	  },
	  '/scrollY': {
	    component: _scrollY2.default
	  },
	  '/sliderX': {
	    component: _sliderX2.default
	  },
	  '/sliderY': {
	    component: _sliderY2.default
	  }

	});

	//设置默认情况下打开的页面
	router.redirect({
	  '/': 'home'
	});

	router.start(app, '#app');

	//暴露路由接口调试
	window.router = router;

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * vue-router v0.7.13
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  global.VueRouter = factory();
	}(this, function () { 'use strict';

	  var babelHelpers = {};

	  babelHelpers.classCallCheck = function (instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  };
	  function Target(path, matcher, delegate) {
	    this.path = path;
	    this.matcher = matcher;
	    this.delegate = delegate;
	  }

	  Target.prototype = {
	    to: function to(target, callback) {
	      var delegate = this.delegate;

	      if (delegate && delegate.willAddRoute) {
	        target = delegate.willAddRoute(this.matcher.target, target);
	      }

	      this.matcher.add(this.path, target);

	      if (callback) {
	        if (callback.length === 0) {
	          throw new Error("You must have an argument in the function passed to `to`");
	        }
	        this.matcher.addChild(this.path, target, callback, this.delegate);
	      }
	      return this;
	    }
	  };

	  function Matcher(target) {
	    this.routes = {};
	    this.children = {};
	    this.target = target;
	  }

	  Matcher.prototype = {
	    add: function add(path, handler) {
	      this.routes[path] = handler;
	    },

	    addChild: function addChild(path, target, callback, delegate) {
	      var matcher = new Matcher(target);
	      this.children[path] = matcher;

	      var match = generateMatch(path, matcher, delegate);

	      if (delegate && delegate.contextEntered) {
	        delegate.contextEntered(target, match);
	      }

	      callback(match);
	    }
	  };

	  function generateMatch(startingPath, matcher, delegate) {
	    return function (path, nestedCallback) {
	      var fullPath = startingPath + path;

	      if (nestedCallback) {
	        nestedCallback(generateMatch(fullPath, matcher, delegate));
	      } else {
	        return new Target(startingPath + path, matcher, delegate);
	      }
	    };
	  }

	  function addRoute(routeArray, path, handler) {
	    var len = 0;
	    for (var i = 0, l = routeArray.length; i < l; i++) {
	      len += routeArray[i].path.length;
	    }

	    path = path.substr(len);
	    var route = { path: path, handler: handler };
	    routeArray.push(route);
	  }

	  function eachRoute(baseRoute, matcher, callback, binding) {
	    var routes = matcher.routes;

	    for (var path in routes) {
	      if (routes.hasOwnProperty(path)) {
	        var routeArray = baseRoute.slice();
	        addRoute(routeArray, path, routes[path]);

	        if (matcher.children[path]) {
	          eachRoute(routeArray, matcher.children[path], callback, binding);
	        } else {
	          callback.call(binding, routeArray);
	        }
	      }
	    }
	  }

	  function map (callback, addRouteCallback) {
	    var matcher = new Matcher();

	    callback(generateMatch("", matcher, this.delegate));

	    eachRoute([], matcher, function (route) {
	      if (addRouteCallback) {
	        addRouteCallback(this, route);
	      } else {
	        this.add(route);
	      }
	    }, this);
	  }

	  var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];

	  var escapeRegex = new RegExp('(\\' + specials.join('|\\') + ')', 'g');

	  var noWarning = false;
	  function warn(msg) {
	    if (!noWarning && typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }

	  function tryDecode(uri, asComponent) {
	    try {
	      return asComponent ? decodeURIComponent(uri) : decodeURI(uri);
	    } catch (e) {
	      warn('malformed URI' + (asComponent ? ' component: ' : ': ') + uri);
	    }
	  }

	  function isArray(test) {
	    return Object.prototype.toString.call(test) === "[object Array]";
	  }

	  // A Segment represents a segment in the original route description.
	  // Each Segment type provides an `eachChar` and `regex` method.
	  //
	  // The `eachChar` method invokes the callback with one or more character
	  // specifications. A character specification consumes one or more input
	  // characters.
	  //
	  // The `regex` method returns a regex fragment for the segment. If the
	  // segment is a dynamic of star segment, the regex fragment also includes
	  // a capture.
	  //
	  // A character specification contains:
	  //
	  // * `validChars`: a String with a list of all valid characters, or
	  // * `invalidChars`: a String with a list of all invalid characters
	  // * `repeat`: true if the character specification can repeat

	  function StaticSegment(string) {
	    this.string = string;
	  }
	  StaticSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      var string = this.string,
	          ch;

	      for (var i = 0, l = string.length; i < l; i++) {
	        ch = string.charAt(i);
	        callback({ validChars: ch });
	      }
	    },

	    regex: function regex() {
	      return this.string.replace(escapeRegex, '\\$1');
	    },

	    generate: function generate() {
	      return this.string;
	    }
	  };

	  function DynamicSegment(name) {
	    this.name = name;
	  }
	  DynamicSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "/", repeat: true });
	    },

	    regex: function regex() {
	      return "([^/]+)";
	    },

	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };

	  function StarSegment(name) {
	    this.name = name;
	  }
	  StarSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "", repeat: true });
	    },

	    regex: function regex() {
	      return "(.+)";
	    },

	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };

	  function EpsilonSegment() {}
	  EpsilonSegment.prototype = {
	    eachChar: function eachChar() {},
	    regex: function regex() {
	      return "";
	    },
	    generate: function generate() {
	      return "";
	    }
	  };

	  function parse(route, names, specificity) {
	    // normalize route as not starting with a "/". Recognition will
	    // also normalize.
	    if (route.charAt(0) === "/") {
	      route = route.substr(1);
	    }

	    var segments = route.split("/"),
	        results = [];

	    // A routes has specificity determined by the order that its different segments
	    // appear in. This system mirrors how the magnitude of numbers written as strings
	    // works.
	    // Consider a number written as: "abc". An example would be "200". Any other number written
	    // "xyz" will be smaller than "abc" so long as `a > z`. For instance, "199" is smaller
	    // then "200", even though "y" and "z" (which are both 9) are larger than "0" (the value
	    // of (`b` and `c`). This is because the leading symbol, "2", is larger than the other
	    // leading symbol, "1".
	    // The rule is that symbols to the left carry more weight than symbols to the right
	    // when a number is written out as a string. In the above strings, the leading digit
	    // represents how many 100's are in the number, and it carries more weight than the middle
	    // number which represents how many 10's are in the number.
	    // This system of number magnitude works well for route specificity, too. A route written as
	    // `a/b/c` will be more specific than `x/y/z` as long as `a` is more specific than
	    // `x`, irrespective of the other parts.
	    // Because of this similarity, we assign each type of segment a number value written as a
	    // string. We can find the specificity of compound routes by concatenating these strings
	    // together, from left to right. After we have looped through all of the segments,
	    // we convert the string to a number.
	    specificity.val = '';

	    for (var i = 0, l = segments.length; i < l; i++) {
	      var segment = segments[i],
	          match;

	      if (match = segment.match(/^:([^\/]+)$/)) {
	        results.push(new DynamicSegment(match[1]));
	        names.push(match[1]);
	        specificity.val += '3';
	      } else if (match = segment.match(/^\*([^\/]+)$/)) {
	        results.push(new StarSegment(match[1]));
	        specificity.val += '2';
	        names.push(match[1]);
	      } else if (segment === "") {
	        results.push(new EpsilonSegment());
	        specificity.val += '1';
	      } else {
	        results.push(new StaticSegment(segment));
	        specificity.val += '4';
	      }
	    }

	    specificity.val = +specificity.val;

	    return results;
	  }

	  // A State has a character specification and (`charSpec`) and a list of possible
	  // subsequent states (`nextStates`).
	  //
	  // If a State is an accepting state, it will also have several additional
	  // properties:
	  //
	  // * `regex`: A regular expression that is used to extract parameters from paths
	  //   that reached this accepting state.
	  // * `handlers`: Information on how to convert the list of captures into calls
	  //   to registered handlers with the specified parameters
	  // * `types`: How many static, dynamic or star segments in this route. Used to
	  //   decide which route to use if multiple registered routes match a path.
	  //
	  // Currently, State is implemented naively by looping over `nextStates` and
	  // comparing a character specification against a character. A more efficient
	  // implementation would use a hash of keys pointing at one or more next states.

	  function State(charSpec) {
	    this.charSpec = charSpec;
	    this.nextStates = [];
	  }

	  State.prototype = {
	    get: function get(charSpec) {
	      var nextStates = this.nextStates;

	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        var child = nextStates[i];

	        var isEqual = child.charSpec.validChars === charSpec.validChars;
	        isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;

	        if (isEqual) {
	          return child;
	        }
	      }
	    },

	    put: function put(charSpec) {
	      var state;

	      // If the character specification already exists in a child of the current
	      // state, just return that state.
	      if (state = this.get(charSpec)) {
	        return state;
	      }

	      // Make a new state for the character spec
	      state = new State(charSpec);

	      // Insert the new state as a child of the current state
	      this.nextStates.push(state);

	      // If this character specification repeats, insert the new state as a child
	      // of itself. Note that this will not trigger an infinite loop because each
	      // transition during recognition consumes a character.
	      if (charSpec.repeat) {
	        state.nextStates.push(state);
	      }

	      // Return the new state
	      return state;
	    },

	    // Find a list of child states matching the next character
	    match: function match(ch) {
	      // DEBUG "Processing `" + ch + "`:"
	      var nextStates = this.nextStates,
	          child,
	          charSpec,
	          chars;

	      // DEBUG "  " + debugState(this)
	      var returned = [];

	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        child = nextStates[i];

	        charSpec = child.charSpec;

	        if (typeof (chars = charSpec.validChars) !== 'undefined') {
	          if (chars.indexOf(ch) !== -1) {
	            returned.push(child);
	          }
	        } else if (typeof (chars = charSpec.invalidChars) !== 'undefined') {
	          if (chars.indexOf(ch) === -1) {
	            returned.push(child);
	          }
	        }
	      }

	      return returned;
	    }

	    /** IF DEBUG
	    , debug: function() {
	      var charSpec = this.charSpec,
	          debug = "[",
	          chars = charSpec.validChars || charSpec.invalidChars;
	       if (charSpec.invalidChars) { debug += "^"; }
	      debug += chars;
	      debug += "]";
	       if (charSpec.repeat) { debug += "+"; }
	       return debug;
	    }
	    END IF **/
	  };

	  /** IF DEBUG
	  function debug(log) {
	    console.log(log);
	  }

	  function debugState(state) {
	    return state.nextStates.map(function(n) {
	      if (n.nextStates.length === 0) { return "( " + n.debug() + " [accepting] )"; }
	      return "( " + n.debug() + " <then> " + n.nextStates.map(function(s) { return s.debug() }).join(" or ") + " )";
	    }).join(", ")
	  }
	  END IF **/

	  // Sort the routes by specificity
	  function sortSolutions(states) {
	    return states.sort(function (a, b) {
	      return b.specificity.val - a.specificity.val;
	    });
	  }

	  function recognizeChar(states, ch) {
	    var nextStates = [];

	    for (var i = 0, l = states.length; i < l; i++) {
	      var state = states[i];

	      nextStates = nextStates.concat(state.match(ch));
	    }

	    return nextStates;
	  }

	  var oCreate = Object.create || function (proto) {
	    function F() {}
	    F.prototype = proto;
	    return new F();
	  };

	  function RecognizeResults(queryParams) {
	    this.queryParams = queryParams || {};
	  }
	  RecognizeResults.prototype = oCreate({
	    splice: Array.prototype.splice,
	    slice: Array.prototype.slice,
	    push: Array.prototype.push,
	    length: 0,
	    queryParams: null
	  });

	  function findHandler(state, path, queryParams) {
	    var handlers = state.handlers,
	        regex = state.regex;
	    var captures = path.match(regex),
	        currentCapture = 1;
	    var result = new RecognizeResults(queryParams);

	    for (var i = 0, l = handlers.length; i < l; i++) {
	      var handler = handlers[i],
	          names = handler.names,
	          params = {};

	      for (var j = 0, m = names.length; j < m; j++) {
	        params[names[j]] = captures[currentCapture++];
	      }

	      result.push({ handler: handler.handler, params: params, isDynamic: !!names.length });
	    }

	    return result;
	  }

	  function addSegment(currentState, segment) {
	    segment.eachChar(function (ch) {
	      var state;

	      currentState = currentState.put(ch);
	    });

	    return currentState;
	  }

	  function decodeQueryParamPart(part) {
	    // http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
	    part = part.replace(/\+/gm, '%20');
	    return tryDecode(part, true);
	  }

	  // The main interface

	  var RouteRecognizer = function RouteRecognizer() {
	    this.rootState = new State();
	    this.names = {};
	  };

	  RouteRecognizer.prototype = {
	    add: function add(routes, options) {
	      var currentState = this.rootState,
	          regex = "^",
	          specificity = {},
	          handlers = [],
	          allSegments = [],
	          name;

	      var isEmpty = true;

	      for (var i = 0, l = routes.length; i < l; i++) {
	        var route = routes[i],
	            names = [];

	        var segments = parse(route.path, names, specificity);

	        allSegments = allSegments.concat(segments);

	        for (var j = 0, m = segments.length; j < m; j++) {
	          var segment = segments[j];

	          if (segment instanceof EpsilonSegment) {
	            continue;
	          }

	          isEmpty = false;

	          // Add a "/" for the new segment
	          currentState = currentState.put({ validChars: "/" });
	          regex += "/";

	          // Add a representation of the segment to the NFA and regex
	          currentState = addSegment(currentState, segment);
	          regex += segment.regex();
	        }

	        var handler = { handler: route.handler, names: names };
	        handlers.push(handler);
	      }

	      if (isEmpty) {
	        currentState = currentState.put({ validChars: "/" });
	        regex += "/";
	      }

	      currentState.handlers = handlers;
	      currentState.regex = new RegExp(regex + "$");
	      currentState.specificity = specificity;

	      if (name = options && options.as) {
	        this.names[name] = {
	          segments: allSegments,
	          handlers: handlers
	        };
	      }
	    },

	    handlersFor: function handlersFor(name) {
	      var route = this.names[name],
	          result = [];
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }

	      for (var i = 0, l = route.handlers.length; i < l; i++) {
	        result.push(route.handlers[i]);
	      }

	      return result;
	    },

	    hasRoute: function hasRoute(name) {
	      return !!this.names[name];
	    },

	    generate: function generate(name, params) {
	      var route = this.names[name],
	          output = "";
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }

	      var segments = route.segments;

	      for (var i = 0, l = segments.length; i < l; i++) {
	        var segment = segments[i];

	        if (segment instanceof EpsilonSegment) {
	          continue;
	        }

	        output += "/";
	        output += segment.generate(params);
	      }

	      if (output.charAt(0) !== '/') {
	        output = '/' + output;
	      }

	      if (params && params.queryParams) {
	        output += this.generateQueryString(params.queryParams);
	      }

	      return output;
	    },

	    generateQueryString: function generateQueryString(params) {
	      var pairs = [];
	      var keys = [];
	      for (var key in params) {
	        if (params.hasOwnProperty(key)) {
	          keys.push(key);
	        }
	      }
	      keys.sort();
	      for (var i = 0, len = keys.length; i < len; i++) {
	        key = keys[i];
	        var value = params[key];
	        if (value == null) {
	          continue;
	        }
	        var pair = encodeURIComponent(key);
	        if (isArray(value)) {
	          for (var j = 0, l = value.length; j < l; j++) {
	            var arrayPair = key + '[]' + '=' + encodeURIComponent(value[j]);
	            pairs.push(arrayPair);
	          }
	        } else {
	          pair += "=" + encodeURIComponent(value);
	          pairs.push(pair);
	        }
	      }

	      if (pairs.length === 0) {
	        return '';
	      }

	      return "?" + pairs.join("&");
	    },

	    parseQueryString: function parseQueryString(queryString) {
	      var pairs = queryString.split("&"),
	          queryParams = {};
	      for (var i = 0; i < pairs.length; i++) {
	        var pair = pairs[i].split('='),
	            key = decodeQueryParamPart(pair[0]),
	            keyLength = key.length,
	            isArray = false,
	            value;
	        if (pair.length === 1) {
	          value = 'true';
	        } else {
	          //Handle arrays
	          if (keyLength > 2 && key.slice(keyLength - 2) === '[]') {
	            isArray = true;
	            key = key.slice(0, keyLength - 2);
	            if (!queryParams[key]) {
	              queryParams[key] = [];
	            }
	          }
	          value = pair[1] ? decodeQueryParamPart(pair[1]) : '';
	        }
	        if (isArray) {
	          queryParams[key].push(value);
	        } else {
	          queryParams[key] = value;
	        }
	      }
	      return queryParams;
	    },

	    recognize: function recognize(path, silent) {
	      noWarning = silent;
	      var states = [this.rootState],
	          pathLen,
	          i,
	          l,
	          queryStart,
	          queryParams = {},
	          isSlashDropped = false;

	      queryStart = path.indexOf('?');
	      if (queryStart !== -1) {
	        var queryString = path.substr(queryStart + 1, path.length);
	        path = path.substr(0, queryStart);
	        if (queryString) {
	          queryParams = this.parseQueryString(queryString);
	        }
	      }

	      path = tryDecode(path);
	      if (!path) return;

	      // DEBUG GROUP path

	      if (path.charAt(0) !== "/") {
	        path = "/" + path;
	      }

	      pathLen = path.length;
	      if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
	        path = path.substr(0, pathLen - 1);
	        isSlashDropped = true;
	      }

	      for (i = 0, l = path.length; i < l; i++) {
	        states = recognizeChar(states, path.charAt(i));
	        if (!states.length) {
	          break;
	        }
	      }

	      // END DEBUG GROUP

	      var solutions = [];
	      for (i = 0, l = states.length; i < l; i++) {
	        if (states[i].handlers) {
	          solutions.push(states[i]);
	        }
	      }

	      states = sortSolutions(solutions);

	      var state = solutions[0];

	      if (state && state.handlers) {
	        // if a trailing slash was dropped and a star segment is the last segment
	        // specified, put the trailing slash back
	        if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
	          path = path + "/";
	        }
	        return findHandler(state, path, queryParams);
	      }
	    }
	  };

	  RouteRecognizer.prototype.map = map;

	  var genQuery = RouteRecognizer.prototype.generateQueryString;

	  // export default for holding the Vue reference
	  var exports$1 = {};
	  /**
	   * Warn stuff.
	   *
	   * @param {String} msg
	   */

	  function warn$1(msg) {
	    /* istanbul ignore next */
	    if (typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }

	  /**
	   * Resolve a relative path.
	   *
	   * @param {String} base
	   * @param {String} relative
	   * @param {Boolean} append
	   * @return {String}
	   */

	  function resolvePath(base, relative, append) {
	    var query = base.match(/(\?.*)$/);
	    if (query) {
	      query = query[1];
	      base = base.slice(0, -query.length);
	    }
	    // a query!
	    if (relative.charAt(0) === '?') {
	      return base + relative;
	    }
	    var stack = base.split('/');
	    // remove trailing segment if:
	    // - not appending
	    // - appending to trailing slash (last segment is empty)
	    if (!append || !stack[stack.length - 1]) {
	      stack.pop();
	    }
	    // resolve relative path
	    var segments = relative.replace(/^\//, '').split('/');
	    for (var i = 0; i < segments.length; i++) {
	      var segment = segments[i];
	      if (segment === '.') {
	        continue;
	      } else if (segment === '..') {
	        stack.pop();
	      } else {
	        stack.push(segment);
	      }
	    }
	    // ensure leading slash
	    if (stack[0] !== '') {
	      stack.unshift('');
	    }
	    return stack.join('/');
	  }

	  /**
	   * Forgiving check for a promise
	   *
	   * @param {Object} p
	   * @return {Boolean}
	   */

	  function isPromise(p) {
	    return p && typeof p.then === 'function';
	  }

	  /**
	   * Retrive a route config field from a component instance
	   * OR a component contructor.
	   *
	   * @param {Function|Vue} component
	   * @param {String} name
	   * @return {*}
	   */

	  function getRouteConfig(component, name) {
	    var options = component && (component.$options || component.options);
	    return options && options.route && options.route[name];
	  }

	  /**
	   * Resolve an async component factory. Have to do a dirty
	   * mock here because of Vue core's internal API depends on
	   * an ID check.
	   *
	   * @param {Object} handler
	   * @param {Function} cb
	   */

	  var resolver = undefined;

	  function resolveAsyncComponent(handler, cb) {
	    if (!resolver) {
	      resolver = {
	        resolve: exports$1.Vue.prototype._resolveComponent,
	        $options: {
	          components: {
	            _: handler.component
	          }
	        }
	      };
	    } else {
	      resolver.$options.components._ = handler.component;
	    }
	    resolver.resolve('_', function (Component) {
	      handler.component = Component;
	      cb(Component);
	    });
	  }

	  /**
	   * Map the dynamic segments in a path to params.
	   *
	   * @param {String} path
	   * @param {Object} params
	   * @param {Object} query
	   */

	  function mapParams(path, params, query) {
	    if (params === undefined) params = {};

	    path = path.replace(/:([^\/]+)/g, function (_, key) {
	      var val = params[key];
	      /* istanbul ignore if */
	      if (!val) {
	        warn$1('param "' + key + '" not found when generating ' + 'path for "' + path + '" with params ' + JSON.stringify(params));
	      }
	      return val || '';
	    });
	    if (query) {
	      path += genQuery(query);
	    }
	    return path;
	  }

	  var hashRE = /#.*$/;

	  var HTML5History = (function () {
	    function HTML5History(_ref) {
	      var root = _ref.root;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HTML5History);

	      if (root && root !== '/') {
	        // make sure there's the starting slash
	        if (root.charAt(0) !== '/') {
	          root = '/' + root;
	        }
	        // remove trailing slash
	        this.root = root.replace(/\/$/, '');
	        this.rootRE = new RegExp('^\\' + this.root);
	      } else {
	        this.root = null;
	      }
	      this.onChange = onChange;
	      // check base tag
	      var baseEl = document.querySelector('base');
	      this.base = baseEl && baseEl.getAttribute('href');
	    }

	    HTML5History.prototype.start = function start() {
	      var _this = this;

	      this.listener = function (e) {
	        var url = location.pathname + location.search;
	        if (_this.root) {
	          url = url.replace(_this.rootRE, '');
	        }
	        _this.onChange(url, e && e.state, location.hash);
	      };
	      window.addEventListener('popstate', this.listener);
	      this.listener();
	    };

	    HTML5History.prototype.stop = function stop() {
	      window.removeEventListener('popstate', this.listener);
	    };

	    HTML5History.prototype.go = function go(path, replace, append) {
	      var url = this.formatPath(path, append);
	      if (replace) {
	        history.replaceState({}, '', url);
	      } else {
	        // record scroll position by replacing current state
	        history.replaceState({
	          pos: {
	            x: window.pageXOffset,
	            y: window.pageYOffset
	          }
	        }, '', location.href);
	        // then push new state
	        history.pushState({}, '', url);
	      }
	      var hashMatch = path.match(hashRE);
	      var hash = hashMatch && hashMatch[0];
	      path = url
	      // strip hash so it doesn't mess up params
	      .replace(hashRE, '')
	      // remove root before matching
	      .replace(this.rootRE, '');
	      this.onChange(path, null, hash);
	    };

	    HTML5History.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/'
	      // absolute path
	      ? this.root ? this.root + '/' + path.replace(/^\//, '') : path : resolvePath(this.base || location.pathname, path, append);
	    };

	    return HTML5History;
	  })();

	  var HashHistory = (function () {
	    function HashHistory(_ref) {
	      var hashbang = _ref.hashbang;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HashHistory);

	      this.hashbang = hashbang;
	      this.onChange = onChange;
	    }

	    HashHistory.prototype.start = function start() {
	      var self = this;
	      this.listener = function () {
	        var path = location.hash;
	        var raw = path.replace(/^#!?/, '');
	        // always
	        if (raw.charAt(0) !== '/') {
	          raw = '/' + raw;
	        }
	        var formattedPath = self.formatPath(raw);
	        if (formattedPath !== path) {
	          location.replace(formattedPath);
	          return;
	        }
	        // determine query
	        // note it's possible to have queries in both the actual URL
	        // and the hash fragment itself.
	        var query = location.search && path.indexOf('?') > -1 ? '&' + location.search.slice(1) : location.search;
	        self.onChange(path.replace(/^#!?/, '') + query);
	      };
	      window.addEventListener('hashchange', this.listener);
	      this.listener();
	    };

	    HashHistory.prototype.stop = function stop() {
	      window.removeEventListener('hashchange', this.listener);
	    };

	    HashHistory.prototype.go = function go(path, replace, append) {
	      path = this.formatPath(path, append);
	      if (replace) {
	        location.replace(path);
	      } else {
	        location.hash = path;
	      }
	    };

	    HashHistory.prototype.formatPath = function formatPath(path, append) {
	      var isAbsoloute = path.charAt(0) === '/';
	      var prefix = '#' + (this.hashbang ? '!' : '');
	      return isAbsoloute ? prefix + path : prefix + resolvePath(location.hash.replace(/^#!?/, ''), path, append);
	    };

	    return HashHistory;
	  })();

	  var AbstractHistory = (function () {
	    function AbstractHistory(_ref) {
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, AbstractHistory);

	      this.onChange = onChange;
	      this.currentPath = '/';
	    }

	    AbstractHistory.prototype.start = function start() {
	      this.onChange('/');
	    };

	    AbstractHistory.prototype.stop = function stop() {
	      // noop
	    };

	    AbstractHistory.prototype.go = function go(path, replace, append) {
	      path = this.currentPath = this.formatPath(path, append);
	      this.onChange(path);
	    };

	    AbstractHistory.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/' ? path : resolvePath(this.currentPath, path, append);
	    };

	    return AbstractHistory;
	  })();

	  /**
	   * Determine the reusability of an existing router view.
	   *
	   * @param {Directive} view
	   * @param {Object} handler
	   * @param {Transition} transition
	   */

	  function canReuse(view, handler, transition) {
	    var component = view.childVM;
	    if (!component || !handler) {
	      return false;
	    }
	    // important: check view.Component here because it may
	    // have been changed in activate hook
	    if (view.Component !== handler.component) {
	      return false;
	    }
	    var canReuseFn = getRouteConfig(component, 'canReuse');
	    return typeof canReuseFn === 'boolean' ? canReuseFn : canReuseFn ? canReuseFn.call(component, {
	      to: transition.to,
	      from: transition.from
	    }) : true; // defaults to true
	  }

	  /**
	   * Check if a component can deactivate.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function canDeactivate(view, transition, next) {
	    var fromComponent = view.childVM;
	    var hook = getRouteConfig(fromComponent, 'canDeactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHook(hook, fromComponent, next, {
	        expectBoolean: true
	      });
	    }
	  }

	  /**
	   * Check if a component can activate.
	   *
	   * @param {Object} handler
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function canActivate(handler, transition, next) {
	    resolveAsyncComponent(handler, function (Component) {
	      // have to check due to async-ness
	      if (transition.aborted) {
	        return;
	      }
	      // determine if this component can be activated
	      var hook = getRouteConfig(Component, 'canActivate');
	      if (!hook) {
	        next();
	      } else {
	        transition.callHook(hook, null, next, {
	          expectBoolean: true
	        });
	      }
	    });
	  }

	  /**
	   * Call deactivate hooks for existing router-views.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function deactivate(view, transition, next) {
	    var component = view.childVM;
	    var hook = getRouteConfig(component, 'deactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHooks(hook, component, next);
	    }
	  }

	  /**
	   * Activate / switch component for a router-view.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Number} depth
	   * @param {Function} [cb]
	   */

	  function activate(view, transition, depth, cb, reuse) {
	    var handler = transition.activateQueue[depth];
	    if (!handler) {
	      saveChildView(view);
	      if (view._bound) {
	        view.setComponent(null);
	      }
	      cb && cb();
	      return;
	    }

	    var Component = view.Component = handler.component;
	    var activateHook = getRouteConfig(Component, 'activate');
	    var dataHook = getRouteConfig(Component, 'data');
	    var waitForData = getRouteConfig(Component, 'waitForData');

	    view.depth = depth;
	    view.activated = false;

	    var component = undefined;
	    var loading = !!(dataHook && !waitForData);

	    // "reuse" is a flag passed down when the parent view is
	    // either reused via keep-alive or as a child of a kept-alive view.
	    // of course we can only reuse if the current kept-alive instance
	    // is of the correct type.
	    reuse = reuse && view.childVM && view.childVM.constructor === Component;

	    if (reuse) {
	      // just reuse
	      component = view.childVM;
	      component.$loadingRouteData = loading;
	    } else {
	      saveChildView(view);

	      // unbuild current component. this step also destroys
	      // and removes all nested child views.
	      view.unbuild(true);

	      // build the new component. this will also create the
	      // direct child view of the current one. it will register
	      // itself as view.childView.
	      component = view.build({
	        _meta: {
	          $loadingRouteData: loading
	        },
	        created: function created() {
	          this._routerView = view;
	        }
	      });

	      // handle keep-alive.
	      // when a kept-alive child vm is restored, we need to
	      // add its cached child views into the router's view list,
	      // and also properly update current view's child view.
	      if (view.keepAlive) {
	        component.$loadingRouteData = loading;
	        var cachedChildView = component._keepAliveRouterView;
	        if (cachedChildView) {
	          view.childView = cachedChildView;
	          component._keepAliveRouterView = null;
	        }
	      }
	    }

	    // cleanup the component in case the transition is aborted
	    // before the component is ever inserted.
	    var cleanup = function cleanup() {
	      component.$destroy();
	    };

	    // actually insert the component and trigger transition
	    var insert = function insert() {
	      if (reuse) {
	        cb && cb();
	        return;
	      }
	      var router = transition.router;
	      if (router._rendered || router._transitionOnLoad) {
	        view.transition(component);
	      } else {
	        // no transition on first render, manual transition
	        /* istanbul ignore if */
	        if (view.setCurrent) {
	          // 0.12 compat
	          view.setCurrent(component);
	        } else {
	          // 1.0
	          view.childVM = component;
	        }
	        component.$before(view.anchor, null, false);
	      }
	      cb && cb();
	    };

	    var afterData = function afterData() {
	      // activate the child view
	      if (view.childView) {
	        activate(view.childView, transition, depth + 1, null, reuse || view.keepAlive);
	      }
	      insert();
	    };

	    // called after activation hook is resolved
	    var afterActivate = function afterActivate() {
	      view.activated = true;
	      if (dataHook && waitForData) {
	        // wait until data loaded to insert
	        loadData(component, transition, dataHook, afterData, cleanup);
	      } else {
	        // load data and insert at the same time
	        if (dataHook) {
	          loadData(component, transition, dataHook);
	        }
	        afterData();
	      }
	    };

	    if (activateHook) {
	      transition.callHooks(activateHook, component, afterActivate, {
	        cleanup: cleanup,
	        postActivate: true
	      });
	    } else {
	      afterActivate();
	    }
	  }

	  /**
	   * Reuse a view, just reload data if necessary.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   */

	  function reuse(view, transition) {
	    var component = view.childVM;
	    var dataHook = getRouteConfig(component, 'data');
	    if (dataHook) {
	      loadData(component, transition, dataHook);
	    }
	  }

	  /**
	   * Asynchronously load and apply data to component.
	   *
	   * @param {Vue} component
	   * @param {Transition} transition
	   * @param {Function} hook
	   * @param {Function} cb
	   * @param {Function} cleanup
	   */

	  function loadData(component, transition, hook, cb, cleanup) {
	    component.$loadingRouteData = true;
	    transition.callHooks(hook, component, function () {
	      component.$loadingRouteData = false;
	      component.$emit('route-data-loaded', component);
	      cb && cb();
	    }, {
	      cleanup: cleanup,
	      postActivate: true,
	      processData: function processData(data) {
	        // handle promise sugar syntax
	        var promises = [];
	        if (isPlainObject(data)) {
	          Object.keys(data).forEach(function (key) {
	            var val = data[key];
	            if (isPromise(val)) {
	              promises.push(val.then(function (resolvedVal) {
	                component.$set(key, resolvedVal);
	              }));
	            } else {
	              component.$set(key, val);
	            }
	          });
	        }
	        if (promises.length) {
	          return promises[0].constructor.all(promises);
	        }
	      }
	    });
	  }

	  /**
	   * Save the child view for a kept-alive view so that
	   * we can restore it when it is switched back to.
	   *
	   * @param {Directive} view
	   */

	  function saveChildView(view) {
	    if (view.keepAlive && view.childVM && view.childView) {
	      view.childVM._keepAliveRouterView = view.childView;
	    }
	    view.childView = null;
	  }

	  /**
	   * Check plain object.
	   *
	   * @param {*} val
	   */

	  function isPlainObject(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }

	  /**
	   * A RouteTransition object manages the pipeline of a
	   * router-view switching process. This is also the object
	   * passed into user route hooks.
	   *
	   * @param {Router} router
	   * @param {Route} to
	   * @param {Route} from
	   */

	  var RouteTransition = (function () {
	    function RouteTransition(router, to, from) {
	      babelHelpers.classCallCheck(this, RouteTransition);

	      this.router = router;
	      this.to = to;
	      this.from = from;
	      this.next = null;
	      this.aborted = false;
	      this.done = false;
	    }

	    /**
	     * Abort current transition and return to previous location.
	     */

	    RouteTransition.prototype.abort = function abort() {
	      if (!this.aborted) {
	        this.aborted = true;
	        // if the root path throws an error during validation
	        // on initial load, it gets caught in an infinite loop.
	        var abortingOnLoad = !this.from.path && this.to.path === '/';
	        if (!abortingOnLoad) {
	          this.router.replace(this.from.path || '/');
	        }
	      }
	    };

	    /**
	     * Abort current transition and redirect to a new location.
	     *
	     * @param {String} path
	     */

	    RouteTransition.prototype.redirect = function redirect(path) {
	      if (!this.aborted) {
	        this.aborted = true;
	        if (typeof path === 'string') {
	          path = mapParams(path, this.to.params, this.to.query);
	        } else {
	          path.params = path.params || this.to.params;
	          path.query = path.query || this.to.query;
	        }
	        this.router.replace(path);
	      }
	    };

	    /**
	     * A router view transition's pipeline can be described as
	     * follows, assuming we are transitioning from an existing
	     * <router-view> chain [Component A, Component B] to a new
	     * chain [Component A, Component C]:
	     *
	     *  A    A
	     *  | => |
	     *  B    C
	     *
	     * 1. Reusablity phase:
	     *   -> canReuse(A, A)
	     *   -> canReuse(B, C)
	     *   -> determine new queues:
	     *      - deactivation: [B]
	     *      - activation: [C]
	     *
	     * 2. Validation phase:
	     *   -> canDeactivate(B)
	     *   -> canActivate(C)
	     *
	     * 3. Activation phase:
	     *   -> deactivate(B)
	     *   -> activate(C)
	     *
	     * Each of these steps can be asynchronous, and any
	     * step can potentially abort the transition.
	     *
	     * @param {Function} cb
	     */

	    RouteTransition.prototype.start = function start(cb) {
	      var transition = this;

	      // determine the queue of views to deactivate
	      var deactivateQueue = [];
	      var view = this.router._rootView;
	      while (view) {
	        deactivateQueue.unshift(view);
	        view = view.childView;
	      }
	      var reverseDeactivateQueue = deactivateQueue.slice().reverse();

	      // determine the queue of route handlers to activate
	      var activateQueue = this.activateQueue = toArray(this.to.matched).map(function (match) {
	        return match.handler;
	      });

	      // 1. Reusability phase
	      var i = undefined,
	          reuseQueue = undefined;
	      for (i = 0; i < reverseDeactivateQueue.length; i++) {
	        if (!canReuse(reverseDeactivateQueue[i], activateQueue[i], transition)) {
	          break;
	        }
	      }
	      if (i > 0) {
	        reuseQueue = reverseDeactivateQueue.slice(0, i);
	        deactivateQueue = reverseDeactivateQueue.slice(i).reverse();
	        activateQueue = activateQueue.slice(i);
	      }

	      // 2. Validation phase
	      transition.runQueue(deactivateQueue, canDeactivate, function () {
	        transition.runQueue(activateQueue, canActivate, function () {
	          transition.runQueue(deactivateQueue, deactivate, function () {
	            // 3. Activation phase

	            // Update router current route
	            transition.router._onTransitionValidated(transition);

	            // trigger reuse for all reused views
	            reuseQueue && reuseQueue.forEach(function (view) {
	              return reuse(view, transition);
	            });

	            // the root of the chain that needs to be replaced
	            // is the top-most non-reusable view.
	            if (deactivateQueue.length) {
	              var _view = deactivateQueue[deactivateQueue.length - 1];
	              var depth = reuseQueue ? reuseQueue.length : 0;
	              activate(_view, transition, depth, cb);
	            } else {
	              cb();
	            }
	          });
	        });
	      });
	    };

	    /**
	     * Asynchronously and sequentially apply a function to a
	     * queue.
	     *
	     * @param {Array} queue
	     * @param {Function} fn
	     * @param {Function} cb
	     */

	    RouteTransition.prototype.runQueue = function runQueue(queue, fn, cb) {
	      var transition = this;
	      step(0);
	      function step(index) {
	        if (index >= queue.length) {
	          cb();
	        } else {
	          fn(queue[index], transition, function () {
	            step(index + 1);
	          });
	        }
	      }
	    };

	    /**
	     * Call a user provided route transition hook and handle
	     * the response (e.g. if the user returns a promise).
	     *
	     * If the user neither expects an argument nor returns a
	     * promise, the hook is assumed to be synchronous.
	     *
	     * @param {Function} hook
	     * @param {*} [context]
	     * @param {Function} [cb]
	     * @param {Object} [options]
	     *                 - {Boolean} expectBoolean
	     *                 - {Boolean} postActive
	     *                 - {Function} processData
	     *                 - {Function} cleanup
	     */

	    RouteTransition.prototype.callHook = function callHook(hook, context, cb) {
	      var _ref = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	      var _ref$expectBoolean = _ref.expectBoolean;
	      var expectBoolean = _ref$expectBoolean === undefined ? false : _ref$expectBoolean;
	      var _ref$postActivate = _ref.postActivate;
	      var postActivate = _ref$postActivate === undefined ? false : _ref$postActivate;
	      var processData = _ref.processData;
	      var cleanup = _ref.cleanup;

	      var transition = this;
	      var nextCalled = false;

	      // abort the transition
	      var abort = function abort() {
	        cleanup && cleanup();
	        transition.abort();
	      };

	      // handle errors
	      var onError = function onError(err) {
	        postActivate ? next() : abort();
	        if (err && !transition.router._suppress) {
	          warn$1('Uncaught error during transition: ');
	          throw err instanceof Error ? err : new Error(err);
	        }
	      };

	      // since promise swallows errors, we have to
	      // throw it in the next tick...
	      var onPromiseError = function onPromiseError(err) {
	        try {
	          onError(err);
	        } catch (e) {
	          setTimeout(function () {
	            throw e;
	          }, 0);
	        }
	      };

	      // advance the transition to the next step
	      var next = function next() {
	        if (nextCalled) {
	          warn$1('transition.next() should be called only once.');
	          return;
	        }
	        nextCalled = true;
	        if (transition.aborted) {
	          cleanup && cleanup();
	          return;
	        }
	        cb && cb();
	      };

	      var nextWithBoolean = function nextWithBoolean(res) {
	        if (typeof res === 'boolean') {
	          res ? next() : abort();
	        } else if (isPromise(res)) {
	          res.then(function (ok) {
	            ok ? next() : abort();
	          }, onPromiseError);
	        } else if (!hook.length) {
	          next();
	        }
	      };

	      var nextWithData = function nextWithData(data) {
	        var res = undefined;
	        try {
	          res = processData(data);
	        } catch (err) {
	          return onError(err);
	        }
	        if (isPromise(res)) {
	          res.then(next, onPromiseError);
	        } else {
	          next();
	        }
	      };

	      // expose a clone of the transition object, so that each
	      // hook gets a clean copy and prevent the user from
	      // messing with the internals.
	      var exposed = {
	        to: transition.to,
	        from: transition.from,
	        abort: abort,
	        next: processData ? nextWithData : next,
	        redirect: function redirect() {
	          transition.redirect.apply(transition, arguments);
	        }
	      };

	      // actually call the hook
	      var res = undefined;
	      try {
	        res = hook.call(context, exposed);
	      } catch (err) {
	        return onError(err);
	      }

	      if (expectBoolean) {
	        // boolean hooks
	        nextWithBoolean(res);
	      } else if (isPromise(res)) {
	        // promise
	        if (processData) {
	          res.then(nextWithData, onPromiseError);
	        } else {
	          res.then(next, onPromiseError);
	        }
	      } else if (processData && isPlainOjbect(res)) {
	        // data promise sugar
	        nextWithData(res);
	      } else if (!hook.length) {
	        next();
	      }
	    };

	    /**
	     * Call a single hook or an array of async hooks in series.
	     *
	     * @param {Array} hooks
	     * @param {*} context
	     * @param {Function} cb
	     * @param {Object} [options]
	     */

	    RouteTransition.prototype.callHooks = function callHooks(hooks, context, cb, options) {
	      var _this = this;

	      if (Array.isArray(hooks)) {
	        this.runQueue(hooks, function (hook, _, next) {
	          if (!_this.aborted) {
	            _this.callHook(hook, context, next, options);
	          }
	        }, cb);
	      } else {
	        this.callHook(hooks, context, cb, options);
	      }
	    };

	    return RouteTransition;
	  })();

	  function isPlainOjbect(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }

	  function toArray(val) {
	    return val ? Array.prototype.slice.call(val) : [];
	  }

	  var internalKeysRE = /^(component|subRoutes|fullPath)$/;

	  /**
	   * Route Context Object
	   *
	   * @param {String} path
	   * @param {Router} router
	   */

	  var Route = function Route(path, router) {
	    var _this = this;

	    babelHelpers.classCallCheck(this, Route);

	    var matched = router._recognizer.recognize(path);
	    if (matched) {
	      // copy all custom fields from route configs
	      [].forEach.call(matched, function (match) {
	        for (var key in match.handler) {
	          if (!internalKeysRE.test(key)) {
	            _this[key] = match.handler[key];
	          }
	        }
	      });
	      // set query and params
	      this.query = matched.queryParams;
	      this.params = [].reduce.call(matched, function (prev, cur) {
	        if (cur.params) {
	          for (var key in cur.params) {
	            prev[key] = cur.params[key];
	          }
	        }
	        return prev;
	      }, {});
	    }
	    // expose path and router
	    this.path = path;
	    // for internal use
	    this.matched = matched || router._notFoundHandler;
	    // internal reference to router
	    Object.defineProperty(this, 'router', {
	      enumerable: false,
	      value: router
	    });
	    // Important: freeze self to prevent observation
	    Object.freeze(this);
	  };

	  function applyOverride (Vue) {
	    var _Vue$util = Vue.util;
	    var extend = _Vue$util.extend;
	    var isArray = _Vue$util.isArray;
	    var defineReactive = _Vue$util.defineReactive;

	    // override Vue's init and destroy process to keep track of router instances
	    var init = Vue.prototype._init;
	    Vue.prototype._init = function (options) {
	      options = options || {};
	      var root = options._parent || options.parent || this;
	      var router = root.$router;
	      var route = root.$route;
	      if (router) {
	        // expose router
	        this.$router = router;
	        router._children.push(this);
	        /* istanbul ignore if */
	        if (this._defineMeta) {
	          // 0.12
	          this._defineMeta('$route', route);
	        } else {
	          // 1.0
	          defineReactive(this, '$route', route);
	        }
	      }
	      init.call(this, options);
	    };

	    var destroy = Vue.prototype._destroy;
	    Vue.prototype._destroy = function () {
	      if (!this._isBeingDestroyed && this.$router) {
	        this.$router._children.$remove(this);
	      }
	      destroy.apply(this, arguments);
	    };

	    // 1.0 only: enable route mixins
	    var strats = Vue.config.optionMergeStrategies;
	    var hooksToMergeRE = /^(data|activate|deactivate)$/;

	    if (strats) {
	      strats.route = function (parentVal, childVal) {
	        if (!childVal) return parentVal;
	        if (!parentVal) return childVal;
	        var ret = {};
	        extend(ret, parentVal);
	        for (var key in childVal) {
	          var a = ret[key];
	          var b = childVal[key];
	          // for data, activate and deactivate, we need to merge them into
	          // arrays similar to lifecycle hooks.
	          if (a && hooksToMergeRE.test(key)) {
	            ret[key] = (isArray(a) ? a : [a]).concat(b);
	          } else {
	            ret[key] = b;
	          }
	        }
	        return ret;
	      };
	    }
	  }

	  function View (Vue) {

	    var _ = Vue.util;
	    var componentDef =
	    // 0.12
	    Vue.directive('_component') ||
	    // 1.0
	    Vue.internalDirectives.component;
	    // <router-view> extends the internal component directive
	    var viewDef = _.extend({}, componentDef);

	    // with some overrides
	    _.extend(viewDef, {

	      _isRouterView: true,

	      bind: function bind() {
	        var route = this.vm.$route;
	        /* istanbul ignore if */
	        if (!route) {
	          warn$1('<router-view> can only be used inside a ' + 'router-enabled app.');
	          return;
	        }
	        // force dynamic directive so v-component doesn't
	        // attempt to build right now
	        this._isDynamicLiteral = true;
	        // finally, init by delegating to v-component
	        componentDef.bind.call(this);

	        // locate the parent view
	        var parentView = undefined;
	        var parent = this.vm;
	        while (parent) {
	          if (parent._routerView) {
	            parentView = parent._routerView;
	            break;
	          }
	          parent = parent.$parent;
	        }
	        if (parentView) {
	          // register self as a child of the parent view,
	          // instead of activating now. This is so that the
	          // child's activate hook is called after the
	          // parent's has resolved.
	          this.parentView = parentView;
	          parentView.childView = this;
	        } else {
	          // this is the root view!
	          var router = route.router;
	          router._rootView = this;
	        }

	        // handle late-rendered view
	        // two possibilities:
	        // 1. root view rendered after transition has been
	        //    validated;
	        // 2. child view rendered after parent view has been
	        //    activated.
	        var transition = route.router._currentTransition;
	        if (!parentView && transition.done || parentView && parentView.activated) {
	          var depth = parentView ? parentView.depth + 1 : 0;
	          activate(this, transition, depth);
	        }
	      },

	      unbind: function unbind() {
	        if (this.parentView) {
	          this.parentView.childView = null;
	        }
	        componentDef.unbind.call(this);
	      }
	    });

	    Vue.elementDirective('router-view', viewDef);
	  }

	  var trailingSlashRE = /\/$/;
	  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	  var queryStringRE = /\?.*$/;

	  // install v-link, which provides navigation support for
	  // HTML5 history mode
	  function Link (Vue) {
	    var _Vue$util = Vue.util;
	    var _bind = _Vue$util.bind;
	    var isObject = _Vue$util.isObject;
	    var addClass = _Vue$util.addClass;
	    var removeClass = _Vue$util.removeClass;

	    var onPriority = Vue.directive('on').priority;
	    var LINK_UPDATE = '__vue-router-link-update__';

	    var activeId = 0;

	    Vue.directive('link-active', {
	      priority: 9999,
	      bind: function bind() {
	        var _this = this;

	        var id = String(activeId++);
	        // collect v-links contained within this element.
	        // we need do this here before the parent-child relationship
	        // gets messed up by terminal directives (if, for, components)
	        var childLinks = this.el.querySelectorAll('[v-link]');
	        for (var i = 0, l = childLinks.length; i < l; i++) {
	          var link = childLinks[i];
	          var existingId = link.getAttribute(LINK_UPDATE);
	          var value = existingId ? existingId + ',' + id : id;
	          // leave a mark on the link element which can be persisted
	          // through fragment clones.
	          link.setAttribute(LINK_UPDATE, value);
	        }
	        this.vm.$on(LINK_UPDATE, this.cb = function (link, path) {
	          if (link.activeIds.indexOf(id) > -1) {
	            link.updateClasses(path, _this.el);
	          }
	        });
	      },
	      unbind: function unbind() {
	        this.vm.$off(LINK_UPDATE, this.cb);
	      }
	    });

	    Vue.directive('link', {
	      priority: onPriority - 2,

	      bind: function bind() {
	        var vm = this.vm;
	        /* istanbul ignore if */
	        if (!vm.$route) {
	          warn$1('v-link can only be used inside a router-enabled app.');
	          return;
	        }
	        this.router = vm.$route.router;
	        // update things when the route changes
	        this.unwatch = vm.$watch('$route', _bind(this.onRouteUpdate, this));
	        // check v-link-active ids
	        var activeIds = this.el.getAttribute(LINK_UPDATE);
	        if (activeIds) {
	          this.el.removeAttribute(LINK_UPDATE);
	          this.activeIds = activeIds.split(',');
	        }
	        // no need to handle click if link expects to be opened
	        // in a new window/tab.
	        /* istanbul ignore if */
	        if (this.el.tagName === 'A' && this.el.getAttribute('target') === '_blank') {
	          return;
	        }
	        // handle click
	        this.handler = _bind(this.onClick, this);
	        this.el.addEventListener('click', this.handler);
	      },

	      update: function update(target) {
	        this.target = target;
	        if (isObject(target)) {
	          this.append = target.append;
	          this.exact = target.exact;
	          this.prevActiveClass = this.activeClass;
	          this.activeClass = target.activeClass;
	        }
	        this.onRouteUpdate(this.vm.$route);
	      },

	      onClick: function onClick(e) {
	        // don't redirect with control keys
	        /* istanbul ignore if */
	        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
	        // don't redirect when preventDefault called
	        /* istanbul ignore if */
	        if (e.defaultPrevented) return;
	        // don't redirect on right click
	        /* istanbul ignore if */
	        if (e.button !== 0) return;

	        var target = this.target;
	        if (target) {
	          // v-link with expression, just go
	          e.preventDefault();
	          this.router.go(target);
	        } else {
	          // no expression, delegate for an <a> inside
	          var el = e.target;
	          while (el.tagName !== 'A' && el !== this.el) {
	            el = el.parentNode;
	          }
	          if (el.tagName === 'A' && sameOrigin(el)) {
	            e.preventDefault();
	            var path = el.pathname;
	            if (this.router.history.root) {
	              path = path.replace(this.router.history.rootRE, '');
	            }
	            this.router.go({
	              path: path,
	              replace: target && target.replace,
	              append: target && target.append
	            });
	          }
	        }
	      },

	      onRouteUpdate: function onRouteUpdate(route) {
	        // router.stringifyPath is dependent on current route
	        // and needs to be called again whenver route changes.
	        var newPath = this.router.stringifyPath(this.target);
	        if (this.path !== newPath) {
	          this.path = newPath;
	          this.updateActiveMatch();
	          this.updateHref();
	        }
	        if (this.activeIds) {
	          this.vm.$emit(LINK_UPDATE, this, route.path);
	        } else {
	          this.updateClasses(route.path, this.el);
	        }
	      },

	      updateActiveMatch: function updateActiveMatch() {
	        this.activeRE = this.path && !this.exact ? new RegExp('^' + this.path.replace(/\/$/, '').replace(queryStringRE, '').replace(regexEscapeRE, '\\$&') + '(\\/|$)') : null;
	      },

	      updateHref: function updateHref() {
	        if (this.el.tagName !== 'A') {
	          return;
	        }
	        var path = this.path;
	        var router = this.router;
	        var isAbsolute = path.charAt(0) === '/';
	        // do not format non-hash relative paths
	        var href = path && (router.mode === 'hash' || isAbsolute) ? router.history.formatPath(path, this.append) : path;
	        if (href) {
	          this.el.href = href;
	        } else {
	          this.el.removeAttribute('href');
	        }
	      },

	      updateClasses: function updateClasses(path, el) {
	        var activeClass = this.activeClass || this.router._linkActiveClass;
	        // clear old class
	        if (this.prevActiveClass && this.prevActiveClass !== activeClass) {
	          toggleClasses(el, this.prevActiveClass, removeClass);
	        }
	        // remove query string before matching
	        var dest = this.path.replace(queryStringRE, '');
	        path = path.replace(queryStringRE, '');
	        // add new class
	        if (this.exact) {
	          if (dest === path ||
	          // also allow additional trailing slash
	          dest.charAt(dest.length - 1) !== '/' && dest === path.replace(trailingSlashRE, '')) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        } else {
	          if (this.activeRE && this.activeRE.test(path)) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        }
	      },

	      unbind: function unbind() {
	        this.el.removeEventListener('click', this.handler);
	        this.unwatch && this.unwatch();
	      }
	    });

	    function sameOrigin(link) {
	      return link.protocol === location.protocol && link.hostname === location.hostname && link.port === location.port;
	    }

	    // this function is copied from v-bind:class implementation until
	    // we properly expose it...
	    function toggleClasses(el, key, fn) {
	      key = key.trim();
	      if (key.indexOf(' ') === -1) {
	        fn(el, key);
	        return;
	      }
	      var keys = key.split(/\s+/);
	      for (var i = 0, l = keys.length; i < l; i++) {
	        fn(el, keys[i]);
	      }
	    }
	  }

	  var historyBackends = {
	    abstract: AbstractHistory,
	    hash: HashHistory,
	    html5: HTML5History
	  };

	  // late bind during install
	  var Vue = undefined;

	  /**
	   * Router constructor
	   *
	   * @param {Object} [options]
	   */

	  var Router = (function () {
	    function Router() {
	      var _this = this;

	      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	      var _ref$hashbang = _ref.hashbang;
	      var hashbang = _ref$hashbang === undefined ? true : _ref$hashbang;
	      var _ref$abstract = _ref.abstract;
	      var abstract = _ref$abstract === undefined ? false : _ref$abstract;
	      var _ref$history = _ref.history;
	      var history = _ref$history === undefined ? false : _ref$history;
	      var _ref$saveScrollPosition = _ref.saveScrollPosition;
	      var saveScrollPosition = _ref$saveScrollPosition === undefined ? false : _ref$saveScrollPosition;
	      var _ref$transitionOnLoad = _ref.transitionOnLoad;
	      var transitionOnLoad = _ref$transitionOnLoad === undefined ? false : _ref$transitionOnLoad;
	      var _ref$suppressTransitionError = _ref.suppressTransitionError;
	      var suppressTransitionError = _ref$suppressTransitionError === undefined ? false : _ref$suppressTransitionError;
	      var _ref$root = _ref.root;
	      var root = _ref$root === undefined ? null : _ref$root;
	      var _ref$linkActiveClass = _ref.linkActiveClass;
	      var linkActiveClass = _ref$linkActiveClass === undefined ? 'v-link-active' : _ref$linkActiveClass;
	      babelHelpers.classCallCheck(this, Router);

	      /* istanbul ignore if */
	      if (!Router.installed) {
	        throw new Error('Please install the Router with Vue.use() before ' + 'creating an instance.');
	      }

	      // Vue instances
	      this.app = null;
	      this._children = [];

	      // route recognizer
	      this._recognizer = new RouteRecognizer();
	      this._guardRecognizer = new RouteRecognizer();

	      // state
	      this._started = false;
	      this._startCb = null;
	      this._currentRoute = {};
	      this._currentTransition = null;
	      this._previousTransition = null;
	      this._notFoundHandler = null;
	      this._notFoundRedirect = null;
	      this._beforeEachHooks = [];
	      this._afterEachHooks = [];

	      // trigger transition on initial render?
	      this._rendered = false;
	      this._transitionOnLoad = transitionOnLoad;

	      // history mode
	      this._root = root;
	      this._abstract = abstract;
	      this._hashbang = hashbang;

	      // check if HTML5 history is available
	      var hasPushState = typeof window !== 'undefined' && window.history && window.history.pushState;
	      this._history = history && hasPushState;
	      this._historyFallback = history && !hasPushState;

	      // create history object
	      var inBrowser = Vue.util.inBrowser;
	      this.mode = !inBrowser || this._abstract ? 'abstract' : this._history ? 'html5' : 'hash';

	      var History = historyBackends[this.mode];
	      this.history = new History({
	        root: root,
	        hashbang: this._hashbang,
	        onChange: function onChange(path, state, anchor) {
	          _this._match(path, state, anchor);
	        }
	      });

	      // other options
	      this._saveScrollPosition = saveScrollPosition;
	      this._linkActiveClass = linkActiveClass;
	      this._suppress = suppressTransitionError;
	    }

	    /**
	     * Allow directly passing components to a route
	     * definition.
	     *
	     * @param {String} path
	     * @param {Object} handler
	     */

	    // API ===================================================

	    /**
	    * Register a map of top-level paths.
	    *
	    * @param {Object} map
	    */

	    Router.prototype.map = function map(_map) {
	      for (var route in _map) {
	        this.on(route, _map[route]);
	      }
	      return this;
	    };

	    /**
	     * Register a single root-level path
	     *
	     * @param {String} rootPath
	     * @param {Object} handler
	     *                 - {String} component
	     *                 - {Object} [subRoutes]
	     *                 - {Boolean} [forceRefresh]
	     *                 - {Function} [before]
	     *                 - {Function} [after]
	     */

	    Router.prototype.on = function on(rootPath, handler) {
	      if (rootPath === '*') {
	        this._notFound(handler);
	      } else {
	        this._addRoute(rootPath, handler, []);
	      }
	      return this;
	    };

	    /**
	     * Set redirects.
	     *
	     * @param {Object} map
	     */

	    Router.prototype.redirect = function redirect(map) {
	      for (var path in map) {
	        this._addRedirect(path, map[path]);
	      }
	      return this;
	    };

	    /**
	     * Set aliases.
	     *
	     * @param {Object} map
	     */

	    Router.prototype.alias = function alias(map) {
	      for (var path in map) {
	        this._addAlias(path, map[path]);
	      }
	      return this;
	    };

	    /**
	     * Set global before hook.
	     *
	     * @param {Function} fn
	     */

	    Router.prototype.beforeEach = function beforeEach(fn) {
	      this._beforeEachHooks.push(fn);
	      return this;
	    };

	    /**
	     * Set global after hook.
	     *
	     * @param {Function} fn
	     */

	    Router.prototype.afterEach = function afterEach(fn) {
	      this._afterEachHooks.push(fn);
	      return this;
	    };

	    /**
	     * Navigate to a given path.
	     * The path can be an object describing a named path in
	     * the format of { name: '...', params: {}, query: {}}
	     * The path is assumed to be already decoded, and will
	     * be resolved against root (if provided)
	     *
	     * @param {String|Object} path
	     * @param {Boolean} [replace]
	     */

	    Router.prototype.go = function go(path) {
	      var replace = false;
	      var append = false;
	      if (Vue.util.isObject(path)) {
	        replace = path.replace;
	        append = path.append;
	      }
	      path = this.stringifyPath(path);
	      if (path) {
	        this.history.go(path, replace, append);
	      }
	    };

	    /**
	     * Short hand for replacing current path
	     *
	     * @param {String} path
	     */

	    Router.prototype.replace = function replace(path) {
	      if (typeof path === 'string') {
	        path = { path: path };
	      }
	      path.replace = true;
	      this.go(path);
	    };

	    /**
	     * Start the router.
	     *
	     * @param {VueConstructor} App
	     * @param {String|Element} container
	     * @param {Function} [cb]
	     */

	    Router.prototype.start = function start(App, container, cb) {
	      /* istanbul ignore if */
	      if (this._started) {
	        warn$1('already started.');
	        return;
	      }
	      this._started = true;
	      this._startCb = cb;
	      if (!this.app) {
	        /* istanbul ignore if */
	        if (!App || !container) {
	          throw new Error('Must start vue-router with a component and a ' + 'root container.');
	        }
	        /* istanbul ignore if */
	        if (App instanceof Vue) {
	          throw new Error('Must start vue-router with a component, not a ' + 'Vue instance.');
	        }
	        this._appContainer = container;
	        var Ctor = this._appConstructor = typeof App === 'function' ? App : Vue.extend(App);
	        // give it a name for better debugging
	        Ctor.options.name = Ctor.options.name || 'RouterApp';
	      }

	      // handle history fallback in browsers that do not
	      // support HTML5 history API
	      if (this._historyFallback) {
	        var _location = window.location;
	        var _history = new HTML5History({ root: this._root });
	        var path = _history.root ? _location.pathname.replace(_history.rootRE, '') : _location.pathname;
	        if (path && path !== '/') {
	          _location.assign((_history.root || '') + '/' + this.history.formatPath(path) + _location.search);
	          return;
	        }
	      }

	      this.history.start();
	    };

	    /**
	     * Stop listening to route changes.
	     */

	    Router.prototype.stop = function stop() {
	      this.history.stop();
	      this._started = false;
	    };

	    /**
	     * Normalize named route object / string paths into
	     * a string.
	     *
	     * @param {Object|String|Number} path
	     * @return {String}
	     */

	    Router.prototype.stringifyPath = function stringifyPath(path) {
	      var generatedPath = '';
	      if (path && typeof path === 'object') {
	        if (path.name) {
	          var extend = Vue.util.extend;
	          var currentParams = this._currentTransition && this._currentTransition.to.params;
	          var targetParams = path.params || {};
	          var params = currentParams ? extend(extend({}, currentParams), targetParams) : targetParams;
	          generatedPath = encodeURI(this._recognizer.generate(path.name, params));
	        } else if (path.path) {
	          generatedPath = encodeURI(path.path);
	        }
	        if (path.query) {
	          // note: the generated query string is pre-URL-encoded by the recognizer
	          var query = this._recognizer.generateQueryString(path.query);
	          if (generatedPath.indexOf('?') > -1) {
	            generatedPath += '&' + query.slice(1);
	          } else {
	            generatedPath += query;
	          }
	        }
	      } else {
	        generatedPath = encodeURI(path ? path + '' : '');
	      }
	      return generatedPath;
	    };

	    // Internal methods ======================================

	    /**
	    * Add a route containing a list of segments to the internal
	    * route recognizer. Will be called recursively to add all
	    * possible sub-routes.
	    *
	    * @param {String} path
	    * @param {Object} handler
	    * @param {Array} segments
	    */

	    Router.prototype._addRoute = function _addRoute(path, handler, segments) {
	      guardComponent(path, handler);
	      handler.path = path;
	      handler.fullPath = (segments.reduce(function (path, segment) {
	        return path + segment.path;
	      }, '') + path).replace('//', '/');
	      segments.push({
	        path: path,
	        handler: handler
	      });
	      this._recognizer.add(segments, {
	        as: handler.name
	      });
	      // add sub routes
	      if (handler.subRoutes) {
	        for (var subPath in handler.subRoutes) {
	          // recursively walk all sub routes
	          this._addRoute(subPath, handler.subRoutes[subPath],
	          // pass a copy in recursion to avoid mutating
	          // across branches
	          segments.slice());
	        }
	      }
	    };

	    /**
	     * Set the notFound route handler.
	     *
	     * @param {Object} handler
	     */

	    Router.prototype._notFound = function _notFound(handler) {
	      guardComponent('*', handler);
	      this._notFoundHandler = [{ handler: handler }];
	    };

	    /**
	     * Add a redirect record.
	     *
	     * @param {String} path
	     * @param {String} redirectPath
	     */

	    Router.prototype._addRedirect = function _addRedirect(path, redirectPath) {
	      if (path === '*') {
	        this._notFoundRedirect = redirectPath;
	      } else {
	        this._addGuard(path, redirectPath, this.replace);
	      }
	    };

	    /**
	     * Add an alias record.
	     *
	     * @param {String} path
	     * @param {String} aliasPath
	     */

	    Router.prototype._addAlias = function _addAlias(path, aliasPath) {
	      this._addGuard(path, aliasPath, this._match);
	    };

	    /**
	     * Add a path guard.
	     *
	     * @param {String} path
	     * @param {String} mappedPath
	     * @param {Function} handler
	     */

	    Router.prototype._addGuard = function _addGuard(path, mappedPath, _handler) {
	      var _this2 = this;

	      this._guardRecognizer.add([{
	        path: path,
	        handler: function handler(match, query) {
	          var realPath = mapParams(mappedPath, match.params, query);
	          _handler.call(_this2, realPath);
	        }
	      }]);
	    };

	    /**
	     * Check if a path matches any redirect records.
	     *
	     * @param {String} path
	     * @return {Boolean} - if true, will skip normal match.
	     */

	    Router.prototype._checkGuard = function _checkGuard(path) {
	      var matched = this._guardRecognizer.recognize(path, true);
	      if (matched) {
	        matched[0].handler(matched[0], matched.queryParams);
	        return true;
	      } else if (this._notFoundRedirect) {
	        matched = this._recognizer.recognize(path);
	        if (!matched) {
	          this.replace(this._notFoundRedirect);
	          return true;
	        }
	      }
	    };

	    /**
	     * Match a URL path and set the route context on vm,
	     * triggering view updates.
	     *
	     * @param {String} path
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */

	    Router.prototype._match = function _match(path, state, anchor) {
	      var _this3 = this;

	      if (this._checkGuard(path)) {
	        return;
	      }

	      var currentRoute = this._currentRoute;
	      var currentTransition = this._currentTransition;

	      if (currentTransition) {
	        if (currentTransition.to.path === path) {
	          // do nothing if we have an active transition going to the same path
	          return;
	        } else if (currentRoute.path === path) {
	          // We are going to the same path, but we also have an ongoing but
	          // not-yet-validated transition. Abort that transition and reset to
	          // prev transition.
	          currentTransition.aborted = true;
	          this._currentTransition = this._prevTransition;
	          return;
	        } else {
	          // going to a totally different path. abort ongoing transition.
	          currentTransition.aborted = true;
	        }
	      }

	      // construct new route and transition context
	      var route = new Route(path, this);
	      var transition = new RouteTransition(this, route, currentRoute);

	      // current transition is updated right now.
	      // however, current route will only be updated after the transition has
	      // been validated.
	      this._prevTransition = currentTransition;
	      this._currentTransition = transition;

	      if (!this.app) {
	        (function () {
	          // initial render
	          var router = _this3;
	          _this3.app = new _this3._appConstructor({
	            el: _this3._appContainer,
	            created: function created() {
	              this.$router = router;
	            },
	            _meta: {
	              $route: route
	            }
	          });
	        })();
	      }

	      // check global before hook
	      var beforeHooks = this._beforeEachHooks;
	      var startTransition = function startTransition() {
	        transition.start(function () {
	          _this3._postTransition(route, state, anchor);
	        });
	      };

	      if (beforeHooks.length) {
	        transition.runQueue(beforeHooks, function (hook, _, next) {
	          if (transition === _this3._currentTransition) {
	            transition.callHook(hook, null, next, {
	              expectBoolean: true
	            });
	          }
	        }, startTransition);
	      } else {
	        startTransition();
	      }

	      if (!this._rendered && this._startCb) {
	        this._startCb.call(null);
	      }

	      // HACK:
	      // set rendered to true after the transition start, so
	      // that components that are acitvated synchronously know
	      // whether it is the initial render.
	      this._rendered = true;
	    };

	    /**
	     * Set current to the new transition.
	     * This is called by the transition object when the
	     * validation of a route has succeeded.
	     *
	     * @param {Transition} transition
	     */

	    Router.prototype._onTransitionValidated = function _onTransitionValidated(transition) {
	      // set current route
	      var route = this._currentRoute = transition.to;
	      // update route context for all children
	      if (this.app.$route !== route) {
	        this.app.$route = route;
	        this._children.forEach(function (child) {
	          child.$route = route;
	        });
	      }
	      // call global after hook
	      if (this._afterEachHooks.length) {
	        this._afterEachHooks.forEach(function (hook) {
	          return hook.call(null, {
	            to: transition.to,
	            from: transition.from
	          });
	        });
	      }
	      this._currentTransition.done = true;
	    };

	    /**
	     * Handle stuff after the transition.
	     *
	     * @param {Route} route
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */

	    Router.prototype._postTransition = function _postTransition(route, state, anchor) {
	      // handle scroll positions
	      // saved scroll positions take priority
	      // then we check if the path has an anchor
	      var pos = state && state.pos;
	      if (pos && this._saveScrollPosition) {
	        Vue.nextTick(function () {
	          window.scrollTo(pos.x, pos.y);
	        });
	      } else if (anchor) {
	        Vue.nextTick(function () {
	          var el = document.getElementById(anchor.slice(1));
	          if (el) {
	            window.scrollTo(window.scrollX, el.offsetTop);
	          }
	        });
	      }
	    };

	    return Router;
	  })();

	  function guardComponent(path, handler) {
	    var comp = handler.component;
	    if (Vue.util.isPlainObject(comp)) {
	      comp = handler.component = Vue.extend(comp);
	    }
	    /* istanbul ignore if */
	    if (typeof comp !== 'function') {
	      handler.component = null;
	      warn$1('invalid component for route "' + path + '".');
	    }
	  }

	  /* Installation */

	  Router.installed = false;

	  /**
	   * Installation interface.
	   * Install the necessary directives.
	   */

	  Router.install = function (externalVue) {
	    /* istanbul ignore if */
	    if (Router.installed) {
	      warn$1('already installed.');
	      return;
	    }
	    Vue = externalVue;
	    applyOverride(Vue);
	    View(Vue);
	    Link(Vue);
	    exports$1.Vue = Vue;
	    Router.installed = true;
	  };

	  // auto install
	  /* istanbul ignore if */
	  if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(Router);
	  }

	  return Router;

	}));

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(11)
	__vue_script__ = __webpack_require__(15)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/button.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(238)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-5056b158/button.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./button.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./button.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, ".mv-btn {\n  margin-top: 0.05rem;\n}\n", ""]);

	// exports


/***/ },
/* 13 */,
/* 14 */,
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _hometitle = __webpack_require__(16);

	var _hometitle2 = _interopRequireDefault(_hometitle);

	var _mvui = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>  
	//     <div class="body-wrapper">
	//         <Hometitle>Button</Hometitle>
	//         <div class="wrapper-example">
	//
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">默认形状</div>
	//                 <div class="wrapper-area-content">
	//                     <Button @click="click">默认按钮</Button>
	//                 </div>
	//             </div>
	//
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">形状控制</div>
	//                 <div class="wrapper-area-content">
	//                     <Button shape="round">圆角按钮</Button>
	//                     <Button shape="round" disabled="disabled">disabled</Button>
	//                 </div>
	//             </div>
	//
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">颜色</div>
	//                 <div class="wrapper-area-content">
	//                     <Button class="mv-btn-primary" type="submit">primary</Button>
	//                     <Button class="mv-btn-success">success</Button>
	//                     <Button class="mv-btn-warning">warning</Button>
	//                     <Button class="mv-btn-danger">danger</Button>
	//                     <Button class="mv-btn-royal">royal</Button>
	//                 </div>
	//             </div>
	//
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">是否有背景色</div>
	//                 <div class="wrapper-area-content">
	//                     <Button class="mv-btn-primary" type="submit">primary</Button>
	//                     <Button class="mv-btn-primary" type="submit" :plain="true">primary</Button>
	//                     <Button class="mv-btn-primary" type="submit" :plain="true" shape="round">primary</Button>
	//                     <Button class="mv-btn-primary" type="submit" :plain="true" shape="round" disabled="disabled">primary</Button>
	//                 </div>
	//             </div>
	//
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">是否有icon以及修改icon样式</div>
	//                 <div class="wrapper-area-content">
	//                     <Button class="mv-btn-primary" icon="mv-icon-loading-1" icon-style="font-size: 0.14rem;">加载中...</Button>
	//                     <Button class="mv-btn-primary" icon="mv-icon-loading-1" icon-style="color: red;font-size: 0.14rem;">加载完成</Button>
	//                 </div>
	//             </div>
	//
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">点击事件</div>
	//                 <div class="wrapper-area-content">
	//                     <Button @click="click">按钮点击</Button>
	//                 </div>
	//             </div>
	//
	//         </div>
	//     </div>
	// </template>
	// <script>
	exports.default = {
	    components: {
	        Hometitle: _hometitle2.default,
	        Button: _mvui.Button
	    },
	    methods: {
	        click: function click(event) {
	            console.log(event);
	            debugger;
	        }
	    }
	};
	// </script>
	// <style lang="less">
	//     .mv-btn{
	//         margin-top: 0.05rem;
	//     }
	// </style>

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(17)
	__vue_script__ = __webpack_require__(19)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/common/hometitle.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(237)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-4672f052/hometitle.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./hometitle.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./hometitle.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "header {\n  height: 0.45rem;\n  line-height: 0.45rem;\n  color: #1da7fe;\n  background: white;\n  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);\n  text-align: center;\n  font-size: 0.16rem;\n  font-weight: bold;\n}\n.home-img {\n  height: 0.5rem;\n  position: relative;\n  top: 0px;\n}\n.mv-icon-class {\n  font-size: 0.28rem;\n  color: #1da7fe;\n  position: absolute;\n  left: 0.1rem;\n}\n", ""]);

	// exports


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _mvui = __webpack_require__(20);

	exports.default = {
	    props: {
	        icon: {
	            type: Boolean,
	            default: true
	        }
	    },
	    components: {
	        Icon: _mvui.Icon
	    }
	};
	// </script>
	// <style lang="less">
	//     header{
	//         height: 0.45rem;
	//         line-height: 0.45rem;
	//         color: #1da7fe;
	//         background: white;
	//         box-shadow: 1px 1px 4px rgba(0,0,0,0.1);
	//         text-align: center;
	//         font-size: 0.16rem;
	//         font-weight: bold;
	//     }
	//     .home-img{
	//         height: 0.5rem;
	//         position: relative;
	//         top: 0px;
	//     }
	//     .mv-icon-class{
	//         font-size: 0.28rem;
	//         color: #1da7fe;
	//         position: absolute;
	//         left: 0.1rem;
	//     }
	// </style>
	// <template>
	//     <header>
	//         <a v-link="{path:'/home' , activeClass:'active'}">
	//             <Icon v-if="icon" class="mv-icon-arrow-left mv-icon-class"></Icon>
	//         </a>
	//         <slot></slot>
	//     </header>
	// </template>
	// <script>

/***/ },
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */
/***/ function(module, exports) {

	module.exports = "\n<header>\n    <a v-link=\"{path:'/home' , activeClass:'active'}\">\n        <Icon v-if=\"icon\" class=\"mv-icon-arrow-left mv-icon-class\"></Icon>\n    </a>\n    <slot></slot>\n</header>\n";

/***/ },
/* 238 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"body-wrapper\">\n    <Hometitle>Button</Hometitle>\n    <div class=\"wrapper-example\">\n        \n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">默认形状</div>\n            <div class=\"wrapper-area-content\">\n                <Button @click=\"click\">默认按钮</Button>\n            </div>\n        </div>\n\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">形状控制</div>\n            <div class=\"wrapper-area-content\">\n                <Button shape=\"round\">圆角按钮</Button>\n                <Button shape=\"round\" disabled=\"disabled\">disabled</Button>\n            </div>\n        </div>\n\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">颜色</div>\n            <div class=\"wrapper-area-content\">\n                <Button class=\"mv-btn-primary\" type=\"submit\">primary</Button>\n                <Button class=\"mv-btn-success\">success</Button>\n                <Button class=\"mv-btn-warning\">warning</Button>\n                <Button class=\"mv-btn-danger\">danger</Button>\n                <Button class=\"mv-btn-royal\">royal</Button>\n            </div>\n        </div>\n\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">是否有背景色</div>\n            <div class=\"wrapper-area-content\">\n                <Button class=\"mv-btn-primary\" type=\"submit\">primary</Button>\n                <Button class=\"mv-btn-primary\" type=\"submit\" :plain=\"true\">primary</Button>\n                <Button class=\"mv-btn-primary\" type=\"submit\" :plain=\"true\" shape=\"round\">primary</Button>\n                <Button class=\"mv-btn-primary\" type=\"submit\" :plain=\"true\" shape=\"round\" disabled=\"disabled\">primary</Button>\n            </div>\n        </div>\n\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">是否有icon以及修改icon样式</div>\n            <div class=\"wrapper-area-content\">\n                <Button class=\"mv-btn-primary\" icon=\"mv-icon-loading-1\" icon-style=\"font-size: 0.14rem;\">加载中...</Button>\n                <Button class=\"mv-btn-primary\" icon=\"mv-icon-loading-1\" icon-style=\"color: red;font-size: 0.14rem;\">加载完成</Button>\n            </div>\n        </div>\n\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">点击事件</div>\n            <div class=\"wrapper-area-content\">\n                <Button @click=\"click\">按钮点击</Button>\n            </div>\n        </div>\n\n    </div>\n</div>\n";

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(240)
	__vue_script__ = __webpack_require__(242)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/icon.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(243)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-0e2c48ca/icon.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(241);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./icon.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./icon.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, ".wrapper-example-icon .wrapper-example li {\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  width: 25%;\n  color: #5e6d82;\n  float: left;\n  text-align: center;\n  border-right: 1px solid #eee ;\n  border-bottom: 1px solid #eee ;\n  background: white;\n  height: 0.9rem;\n  padding: 0.1rem 0px;\n}\n.wrapper-example-icon .wrapper-example li:nth-child(4n+4) {\n  border-right: 0px;\n}\n.wrapper-example-icon .wrapper-example li span {\n  font-size: 0.11rem;\n}\n", ""]);

	// exports


/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _hometitle = __webpack_require__(16);

	var _hometitle2 = _interopRequireDefault(_hometitle);

	var _mvui = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>  
	//     <div class="body-wrapper icon-wrapper wrapper-example-icon">
	//         <Hometitle>Icon</Hometitle>
	//         <div class="wrapper-example">
	//
	//             <li>
	//                 <Icon class="mv-icon-arrow-down-c"></Icon>
	//                 <br/>
	//                 <span>mv-icon-arrow-down-c</span>
	//             </li>
	//             <li>
	//                 <Icon class="mv-icon-arrow-up-c"></Icon>
	//                 <br/>
	//                 <span>mv-icon-arrow-up-c</span>
	//             </li>
	//             <li>
	//                 <Icon class="mv-icon-add"></Icon>
	//                 <br/>
	//                 <span>mv-icon-add</span>
	//             </li>
	//             <li>
	//                 <Icon class="mv-icon-reduce"></Icon>
	//                 <br/>
	//                 <span>mv-icon-reduce</span>
	//             </li>
	//
	//
	//             <li>
	//                 <Icon class="mv-icon-round-add"></Icon>
	//                 <br/>
	//                 <span>mv-icon-round-add</span>
	//             </li>
	//             <li>
	//                 <Icon class="mv-icon-round-add-fill"></Icon>
	//                 <br/>
	//                 <span>mv-icon-round-add-fill</span>
	//             </li>
	//             <li>
	//                 <Icon class="mv-icon-round-close"></Icon>
	//                 <br/>
	//                 <span>mv-icon-round-close</span>
	//             </li>
	//             <li>
	//                 <Icon class="mv-icon-round-close-fill"></Icon>
	//                 <br/>
	//                 <span>mv-icon-round-close-fill</span>
	//             </li>
	//
	//
	//
	//
	//
	//
	//
	//             <li>
	//                 <Icon class="mv-icon-square-check"></Icon>
	//                 <br/>
	//                 <span>mv-icon-square-check</span>
	//             </li>
	//             <li>
	//                 <Icon class="mv-icon-square"></Icon>
	//                 <br/>
	//                 <span>mv-icon-square</span>
	//             </li>
	//             <li>
	//                 <Icon class="mv-icon-square-check-fill"></Icon>
	//                 <br/>
	//                 <span>mv-icon-square-check-fill</span>
	//             </li>
	//             <li>
	//                 <Icon class="mv-icon-notification"></Icon>
	//                 <br/>
	//                 <span>mv-icon-notification</span>
	//             </li>
	//
	//
	//
	//             <li>
	//                 <Icon class="mv-icon-notificationfill"></Icon>
	//                 <br/>
	//                 <span>mv-icon-notificationfill</span>
	//             </li>
	//             <li>
	//                 <Icon class="mv-icon-round-check-fill"></Icon>
	//                 <br/>
	//                 <span>mv-icon-round-check-fill</span>
	//             </li>
	//             <li>
	//                 <Icon class="mv-icon-round"></Icon>
	//                 <br/>
	//                 <span>mv-icon-round</span>
	//             </li>
	//             <li>
	//                 <Icon class="mv-icon-round-radio"></Icon>
	//                 <br/>
	//                 <span>mv-icon-round-radio</span>
	//             </li>
	//
	//
	//
	//             <li>
	//                 <Icon class="mv-icon-favor"></Icon>
	//                 <br/>
	//                 <span>mv-icon-favor</span>
	//             </li>
	//             <li>
	//                 <Icon class="mv-icon-favor-fill"></Icon>
	//                 <br/>
	//                 <span>mv-icon-favor-fill</span>
	//             </li>
	//             <li>
	//                 <Icon class="mv-icon-close"></Icon>
	//                 <br/>
	//                 <span>mv-icon-close</span>
	//             </li>
	//             <li>
	//                 <Icon class="mv-icon-check"></Icon>
	//                 <br/>
	//                 <span>mv-icon-check</span>
	//             </li>
	//
	//
	//
	//             <li>
	//                 <Icon class="mv-icon-caret-top"></Icon>
	//                 <br/>
	//                 <span>mv-icon-caret-top</span>
	//             </li>
	//             <li>
	//                 <Icon class="mv-icon-caret-right"></Icon>
	//                 <br/>
	//                 <span>mv-icon-caret-right</span>
	//             </li>
	//             <li>
	//                 <Icon class="mv-icon-caret-left"></Icon>
	//                 <br/>
	//                 <span>mv-icon-caret-left</span>
	//             </li>
	//             <li>
	//                 <Icon class="mv-icon-caret-bottom"></Icon>
	//                 <br/>
	//                 <span>mv-icon-caret-bottom</span>
	//             </li>
	//
	//
	//
	//             <li>
	//                 <Icon class="mv-icon-arrow-top"></Icon>
	//                 <br/>
	//                 <span>mv-icon-loading-3</span>
	//             </li>
	//             <li>
	//                 <Icon class="mv-icon-arrow-bottom"></Icon>
	//                 <br/>
	//                 <span>mv-icon-loading-4</span>
	//             </li>
	//             <li>
	//                 <Icon class="mv-icon-arrow-left"></Icon>
	//                 <br/>
	//                 <span>mv-icon-arrow-left</span>
	//             </li>
	//             <li>
	//                 <Icon class="mv-icon-arrow-right"></Icon>
	//                 <br/>
	//                 <span>mv-icon-arrow-right</span>
	//             </li>
	//
	//
	//             <li>
	//                 <Icon class="mv-icon-loading-1"></Icon>
	//                 <br/>
	//                 <span>mv-icon-loading-1</span>
	//             </li>
	//             <li>
	//                 <Icon class="mv-icon-loading-2"></Icon>
	//                 <br/>
	//                 <span>mv-icon-loading-2</span>
	//             </li>
	//             <li>
	//                 <Icon class="mv-icon-loading-3"></Icon>
	//                 <br/>
	//                 <span>mv-icon-loading-3</span>
	//             </li>
	//             <li>
	//                 <Icon class="mv-icon-loading-4"></Icon>
	//                 <br/>
	//                 <span>mv-icon-loading-4</span>
	//             </li>
	//
	//
	//
	//             <li>
	//                 <Icon class="mv-icon-loading-5"></Icon>
	//                 <br/>
	//                 <span>mv-icon-loading-5</span>
	//             </li>
	//             <li>
	//                 <Icon class="mv-icon-loading-6"></Icon>
	//                 <br/>
	//                 <span>mv-icon-loading-2</span>
	//             </li>
	//             <li>
	//                 <Icon class="mv-icon-loading-7"></Icon>
	//                 <br/>
	//                 <span>mv-icon-loading-7</span>
	//             </li>
	//             <li>
	//                 <Icon class="mv-icon-home"></Icon>
	//                 <br/>
	//                 <span>mv-icon-home</span>
	//             </li>
	//
	//         </div>
	//     </div>
	// </template> 
	// <script>
	exports.default = {
	    components: {
	        Hometitle: _hometitle2.default,
	        Icon: _mvui.Icon
	    },
	    data: function data() {
	        return {
	            test: {
	                'font-size': '12px',
	                'color': 'red'
	            }
	        };
	    }
	};
	// </script>
	// <style lang="less">
	//     .wrapper-example-icon .wrapper-example{
	//         li{
	//             box-sizing: border-box;
	//             -webkit-box-sizing: border-box;
	//             width: 25%;
	//             color: #5e6d82;
	//             float: left;
	//             text-align: center;
	//             border-right: 1px solid #eee ;
	//             border-bottom: 1px solid #eee ;
	//             background: white;
	//             height: 0.9rem;
	//             padding: 0.1rem 0px;
	//             &:nth-child(4n+4){
	//                 border-right: 0px;
	//             }
	//             span{
	//                 font-size: 0.11rem;
	//             }
	//         }
	//     }
	// </style>

/***/ },
/* 243 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"body-wrapper icon-wrapper wrapper-example-icon\">\n    <Hometitle>Icon</Hometitle>\n    <div class=\"wrapper-example\">\n        \n        <li>\n            <Icon class=\"mv-icon-arrow-down-c\"></Icon>\n            <br/>\n            <span>mv-icon-arrow-down-c</span>\n        </li>\n        <li>\n            <Icon class=\"mv-icon-arrow-up-c\"></Icon>\n            <br/>\n            <span>mv-icon-arrow-up-c</span>\n        </li>\n        <li>\n            <Icon class=\"mv-icon-add\"></Icon>\n            <br/>\n            <span>mv-icon-add</span>\n        </li>\n        <li>\n            <Icon class=\"mv-icon-reduce\"></Icon>\n            <br/>\n            <span>mv-icon-reduce</span>\n        </li>\n\n\n        <li>\n            <Icon class=\"mv-icon-round-add\"></Icon>\n            <br/>\n            <span>mv-icon-round-add</span>\n        </li>\n        <li>\n            <Icon class=\"mv-icon-round-add-fill\"></Icon>\n            <br/>\n            <span>mv-icon-round-add-fill</span>\n        </li>\n        <li>\n            <Icon class=\"mv-icon-round-close\"></Icon>\n            <br/>\n            <span>mv-icon-round-close</span>\n        </li>\n        <li>\n            <Icon class=\"mv-icon-round-close-fill\"></Icon>\n            <br/>\n            <span>mv-icon-round-close-fill</span>\n        </li>\n\n\n       \n\n\n\n\n        <li>\n            <Icon class=\"mv-icon-square-check\"></Icon>\n            <br/>\n            <span>mv-icon-square-check</span>\n        </li>\n        <li>\n            <Icon class=\"mv-icon-square\"></Icon>\n            <br/>\n            <span>mv-icon-square</span>\n        </li>\n        <li>\n            <Icon class=\"mv-icon-square-check-fill\"></Icon>\n            <br/>\n            <span>mv-icon-square-check-fill</span>\n        </li>\n        <li>\n            <Icon class=\"mv-icon-notification\"></Icon>\n            <br/>\n            <span>mv-icon-notification</span>\n        </li>\n\n\n\n        <li>\n            <Icon class=\"mv-icon-notificationfill\"></Icon>\n            <br/>\n            <span>mv-icon-notificationfill</span>\n        </li>\n        <li>\n            <Icon class=\"mv-icon-round-check-fill\"></Icon>\n            <br/>\n            <span>mv-icon-round-check-fill</span>\n        </li>\n        <li>\n            <Icon class=\"mv-icon-round\"></Icon>\n            <br/>\n            <span>mv-icon-round</span>\n        </li>\n        <li>\n            <Icon class=\"mv-icon-round-radio\"></Icon>\n            <br/>\n            <span>mv-icon-round-radio</span>\n        </li>\n\n\n\n        <li>\n            <Icon class=\"mv-icon-favor\"></Icon>\n            <br/>\n            <span>mv-icon-favor</span>\n        </li>\n        <li>\n            <Icon class=\"mv-icon-favor-fill\"></Icon>\n            <br/>\n            <span>mv-icon-favor-fill</span>\n        </li>\n        <li>\n            <Icon class=\"mv-icon-close\"></Icon>\n            <br/>\n            <span>mv-icon-close</span>\n        </li>\n        <li>\n            <Icon class=\"mv-icon-check\"></Icon>\n            <br/>\n            <span>mv-icon-check</span>\n        </li>\n\n\n\n        <li>\n            <Icon class=\"mv-icon-caret-top\"></Icon>\n            <br/>\n            <span>mv-icon-caret-top</span>\n        </li>\n        <li>\n            <Icon class=\"mv-icon-caret-right\"></Icon>\n            <br/>\n            <span>mv-icon-caret-right</span>\n        </li>\n        <li>\n            <Icon class=\"mv-icon-caret-left\"></Icon>\n            <br/>\n            <span>mv-icon-caret-left</span>\n        </li>\n        <li>\n            <Icon class=\"mv-icon-caret-bottom\"></Icon>\n            <br/>\n            <span>mv-icon-caret-bottom</span>\n        </li>\n\n\n\n        <li>\n            <Icon class=\"mv-icon-arrow-top\"></Icon>\n            <br/>\n            <span>mv-icon-loading-3</span>\n        </li>\n        <li>\n            <Icon class=\"mv-icon-arrow-bottom\"></Icon>\n            <br/>\n            <span>mv-icon-loading-4</span>\n        </li>\n        <li>\n            <Icon class=\"mv-icon-arrow-left\"></Icon>\n            <br/>\n            <span>mv-icon-arrow-left</span>\n        </li>\n        <li>\n            <Icon class=\"mv-icon-arrow-right\"></Icon>\n            <br/>\n            <span>mv-icon-arrow-right</span>\n        </li>\n\n\n        <li>\n            <Icon class=\"mv-icon-loading-1\"></Icon>\n            <br/>\n            <span>mv-icon-loading-1</span>\n        </li>\n        <li>\n            <Icon class=\"mv-icon-loading-2\"></Icon>\n            <br/>\n            <span>mv-icon-loading-2</span>\n        </li>\n        <li>\n            <Icon class=\"mv-icon-loading-3\"></Icon>\n            <br/>\n            <span>mv-icon-loading-3</span>\n        </li>\n        <li>\n            <Icon class=\"mv-icon-loading-4\"></Icon>\n            <br/>\n            <span>mv-icon-loading-4</span>\n        </li>\n\n\n\n        <li>\n            <Icon class=\"mv-icon-loading-5\"></Icon>\n            <br/>\n            <span>mv-icon-loading-5</span>\n        </li>\n        <li>\n            <Icon class=\"mv-icon-loading-6\"></Icon>\n            <br/>\n            <span>mv-icon-loading-2</span>\n        </li>\n        <li>\n            <Icon class=\"mv-icon-loading-7\"></Icon>\n            <br/>\n            <span>mv-icon-loading-7</span>\n        </li>\n        <li>\n            <Icon class=\"mv-icon-home\"></Icon>\n            <br/>\n            <span>mv-icon-home</span>\n        </li>\n\n    </div>\n</div>\n";

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(245)
	__vue_script__ = __webpack_require__(247)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/tip.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(248)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-05869369/tip.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(246);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./tip.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./tip.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, ".click-btn {\n  cursor: pointer;\n}\n", ""]);

	// exports


/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _hometitle = __webpack_require__(16);

	var _hometitle2 = _interopRequireDefault(_hometitle);

	var _mvui = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>  
	//     <div class="body-wrapper">
	//         <Hometitle>Tip</Hometitle>
	//         <div class="wrapper-example">
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">顶部位置</div>
	//                 <div class="wrapper-area-content">
	//                     <div class="click-btn" @click="clickshow1">点击</div>
	//                     <Tip :show.sync="show1" position="top">tip提示框 top 位置</Tip>
	//                 </div>
	//             </div>
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">中间位置</div>
	//                 <div class="wrapper-area-content">
	//                     <div class="click-btn" @click="clickshow2">点击</div>
	//                     <Tip :show.sync="show2" position="center">tip提示框 center 位置</Tip>
	//                 </div>
	//             </div>
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">底部位置</div>
	//                 <div class="wrapper-area-content">
	//                     <div class="click-btn" @click="clickshow3">点击</div>
	//                     <Tip :show.sync="show3" position="bottom">tip提示框 bottom 位置</Tip>
	//                 </div>
	//             </div>
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">手动关闭</div>
	//                 <div class="wrapper-area-content">
	//                     <div class="click-btn" @click="clickshow4">显示tip</div>
	//                     <div class="click-btn" @click="clickclose4">关闭tip</div>
	//                     <Tip :show.sync="show4" position="center" :auto="false">tip提示框 center 位置</Tip>
	//                 </div>
	//             </div>
	//         </div>
	//     </div>
	// </template>
	// <script>
	exports.default = {
	    components: {
	        Hometitle: _hometitle2.default,
	        Tip: _mvui.Tip
	    },
	    data: function data() {
	        return {
	            show1: false,
	            show2: false,
	            show3: false,
	            show4: false
	        };
	    },

	    methods: {
	        clickshow1: function clickshow1() {
	            this.show1 = true;
	        },
	        clickshow2: function clickshow2() {
	            this.show2 = true;
	        },
	        clickshow3: function clickshow3() {
	            this.show3 = true;
	        },
	        clickshow4: function clickshow4() {
	            this.show4 = true;
	        },
	        clickclose4: function clickclose4() {
	            this.show4 = false;
	        }
	    }
	};
	// </script>
	// <style lang="less">
	//     .click-btn{
	//         cursor: pointer;
	//     }
	// </style>

/***/ },
/* 248 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"body-wrapper\">\n    <Hometitle>Tip</Hometitle>\n    <div class=\"wrapper-example\">\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">顶部位置</div>\n            <div class=\"wrapper-area-content\">\n                <div class=\"click-btn\" @click=\"clickshow1\">点击</div>\n                <Tip :show.sync=\"show1\" position=\"top\">tip提示框 top 位置</Tip>\n            </div>\n        </div>\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">中间位置</div>\n            <div class=\"wrapper-area-content\">\n                <div class=\"click-btn\" @click=\"clickshow2\">点击</div>\n                <Tip :show.sync=\"show2\" position=\"center\">tip提示框 center 位置</Tip>\n            </div>\n        </div>\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">底部位置</div>\n            <div class=\"wrapper-area-content\">\n                <div class=\"click-btn\" @click=\"clickshow3\">点击</div>\n                <Tip :show.sync=\"show3\" position=\"bottom\">tip提示框 bottom 位置</Tip>\n            </div>\n        </div>\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">手动关闭</div>\n            <div class=\"wrapper-area-content\">\n                <div class=\"click-btn\" @click=\"clickshow4\">显示tip</div>\n                <div class=\"click-btn\" @click=\"clickclose4\">关闭tip</div>\n                <Tip :show.sync=\"show4\" position=\"center\" :auto=\"false\">tip提示框 center 位置</Tip>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(250)
	__vue_script__ = __webpack_require__(252)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/gotop.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(253)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-2fe7a08a/gotop.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(251);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./gotop.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./gotop.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, ".mv-btn {\n  margin-top: 0.05rem;\n}\n", ""]);

	// exports


/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _hometitle = __webpack_require__(16);

	var _hometitle2 = _interopRequireDefault(_hometitle);

	var _mvui = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>  
	//     <div class="body-wrapper">
	//         <Hometitle>Gotop</Hometitle>
	//         <div class="wrapper-example">
	//
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">回到顶部</div>
	//                 <div class="wrapper-area-content">
	//                     <div>回到顶部</div>
	//                     <div>回到顶部</div>
	//                     <div>回到顶部</div>
	//                     <div>回到顶部</div>
	//                     <div>回到顶部</div>
	//                     <div>回到顶部</div>
	//                     <div>回到顶部</div>
	//                     <div>回到顶部</div>
	//                     <div>回到顶部</div>
	//                     <div>回到顶部</div>
	//                     <div>回到顶部</div>
	//                     <div>回到顶部</div>
	//                     <div>回到顶部</div>
	//                     <div>回到顶部</div>
	//                     <div>回到顶部</div>
	//                     <div>回到顶部</div>
	//                     <div>回到顶部</div>
	//                     <div>回到顶部</div>
	//                     <div>回到顶部</div>
	//                     <div>回到顶部</div>
	//                     <div>回到顶部</div>
	//                     <div>回到顶部</div>
	//                     <div>回到顶部</div>
	//                     <div>回到顶部</div>
	//                     <div>回到顶部</div>
	//                     <div>回到顶部</div>
	//                     <div>回到顶部</div>
	//                     <div>回到顶部</div>
	//                     <div>回到顶部</div>
	//                     <div>回到顶部</div>
	//                     <div>回到顶部</div>
	//                     <div>回到顶部</div>
	//                     <div>回到顶部</div>
	//                 </div>
	//             </div>
	//
	//             <Gotop @on-click="gotopCallback"></Gotop>
	//
	//         </div>
	//     </div>
	// </template>
	// <script>
	exports.default = {
	    components: {
	        Hometitle: _hometitle2.default,
	        Gotop: _mvui.Gotop
	    },
	    methods: {
	        gotopCallback: function gotopCallback(e) {
	            console.dir('click');
	        }
	    }
	};
	// </script>
	// <style lang="less">
	//     .mv-btn{
	//         margin-top: 0.05rem;
	//     }
	// </style>

/***/ },
/* 253 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"body-wrapper\">\n    <Hometitle>Gotop</Hometitle>\n    <div class=\"wrapper-example\">\n        \n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">回到顶部</div>\n            <div class=\"wrapper-area-content\">\n                <div>回到顶部</div>\n                <div>回到顶部</div>\n                <div>回到顶部</div>\n                <div>回到顶部</div>\n                <div>回到顶部</div>\n                <div>回到顶部</div>\n                <div>回到顶部</div>\n                <div>回到顶部</div>\n                <div>回到顶部</div>\n                <div>回到顶部</div>\n                <div>回到顶部</div>\n                <div>回到顶部</div>\n                <div>回到顶部</div>\n                <div>回到顶部</div>\n                <div>回到顶部</div>\n                <div>回到顶部</div>\n                <div>回到顶部</div>\n                <div>回到顶部</div>\n                <div>回到顶部</div>\n                <div>回到顶部</div>\n                <div>回到顶部</div>\n                <div>回到顶部</div>\n                <div>回到顶部</div>\n                <div>回到顶部</div>\n                <div>回到顶部</div>\n                <div>回到顶部</div>\n                <div>回到顶部</div>\n                <div>回到顶部</div>\n                <div>回到顶部</div>\n                <div>回到顶部</div>\n                <div>回到顶部</div>\n                <div>回到顶部</div>\n                <div>回到顶部</div>\n            </div>\n        </div>\n\n        <Gotop @on-click=\"gotopCallback\"></Gotop>\n\n    </div>\n</div>\n";

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(255)
	__vue_script__ = __webpack_require__(257)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/loadding.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(258)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-e78e68f4/loadding.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(256);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./loadding.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./loadding.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, ".wrapper-example-loadding .mv-circular {\n  font-size: 0.3rem;\n}\n", ""]);

	// exports


/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _hometitle = __webpack_require__(16);

	var _hometitle2 = _interopRequireDefault(_hometitle);

	var _mvui = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>  
	//     <div class="body-wrapper">
	//         <Hometitle>Loadding</Hometitle>
	//         <div class="wrapper-example wrapper-example-loadding">
	//
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">默认loadding</div>
	//                 <div class="wrapper-area-content">
	//                     <Loadding class="custome-loadding" :show="show"></Loadding>
	//                 </div>
	//             </div>
	//
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">颜色</div>
	//                 <div class="wrapper-area-content">
	//                     <Loadding class="mv-loadding-primary" :show="show"></Loadding>
	//                 </div>
	//             </div>
	//
	//
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">circle or line</div>
	//                 <div class="wrapper-area-content">
	//                     <Loadding type="circle" :show="show"></Loadding>
	//                     <Loadding type="line" :show="show"></Loadding>
	//                 </div>
	//             </div>
	//
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">自定义</div>
	//                 <div class="wrapper-area-content">
	//                     <Loadding :show="show">
	//                         <Icon class="mv-icon-loading-6 mv-circular" position="center"></Icon>
	//                     </Loadding>
	//                     <Loadding :show="show">
	//                         <Icon class="mv-icon-loading-4 mv-circular"></Icon>
	//                     </Loadding>
	//                 </div>
	//             </div>
	//
	//
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">居中</div>
	//                 <div class="wrapper-area-content">
	//                     <Loadding position="center" :show="show"></Loadding>
	//                 </div>
	//             </div>
	//
	//         </div>
	//     </div>
	// </template>
	// <script>
	exports.default = {
	    components: {
	        Hometitle: _hometitle2.default,
	        Loadding: _mvui.Loadding,
	        Icon: _mvui.Icon
	    },
	    data: function data() {
	        return {
	            show: true
	        };
	    }
	};
	// </script>
	// <style lang="less">
	//     .wrapper-example-loadding .mv-circular {
	//         font-size: 0.3rem;
	//     }
	// </style>

/***/ },
/* 258 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"body-wrapper\">\n    <Hometitle>Loadding</Hometitle>\n    <div class=\"wrapper-example wrapper-example-loadding\">\n        \n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">默认loadding</div>\n            <div class=\"wrapper-area-content\">\n                <Loadding class=\"custome-loadding\" :show=\"show\"></Loadding>\n            </div>\n        </div>\n\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">颜色</div>\n            <div class=\"wrapper-area-content\">\n                <Loadding class=\"mv-loadding-primary\" :show=\"show\"></Loadding>\n            </div>\n        </div>\n\n\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">circle or line</div>\n            <div class=\"wrapper-area-content\">\n                <Loadding type=\"circle\" :show=\"show\"></Loadding>\n                <Loadding type=\"line\" :show=\"show\"></Loadding>\n            </div>\n        </div>\n\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">自定义</div>\n            <div class=\"wrapper-area-content\">\n                <Loadding :show=\"show\">\n                    <Icon class=\"mv-icon-loading-6 mv-circular\" position=\"center\"></Icon>\n                </Loadding>\n                <Loadding :show=\"show\">\n                    <Icon class=\"mv-icon-loading-4 mv-circular\"></Icon>\n                </Loadding>\n            </div>\n        </div>\n\n\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">居中</div>\n            <div class=\"wrapper-area-content\">\n                <Loadding position=\"center\" :show=\"show\"></Loadding>\n            </div>\n        </div>\n\n    </div>\n</div>\n";

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(260)
	__vue_script__ = __webpack_require__(262)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/modal.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(263)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-09b2420a/modal.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(261);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./modal.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./modal.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, ".click-btn {\n  cursor: pointer;\n}\n", ""]);

	// exports


/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _hometitle = __webpack_require__(16);

	var _hometitle2 = _interopRequireDefault(_hometitle);

	var _mvui = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>  
	//     <div class="body-wrapper">
	//         <Hometitle>Modal</Hometitle>
	//         <div class="wrapper-example">
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">默认模态框</div>
	//                 <div class="wrapper-area-content">
	//                     <div class="click-btn" @click="clickshow1">点击提示弹框</div>
	//                     <Modal :show.sync="show1">
	//                         <div slot="header">Mvui 默认弹框</div>
	//                         <div>这是一个弹窗</div>
	//                     </Modal>
	//                 </div>
	//             </div>
	//
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">通过属性隐藏header 和 footer</div>
	//                 <div class="wrapper-area-content">
	//                     <div class="click-btn" @click="clickshow2">点击提示弹框</div>
	//                     <Modal :show.sync="show2" :footer-hide="true" :header-hide="true">
	//                         <div slot="header">Mvui 默认弹框</div>
	//                         <div>
	//                             这是一个没有header和footer的弹框
	//                             <div @click="clickhide2">点我关闭</div>
	//                         </div>
	//                     </Modal>
	//                 </div>
	//             </div>
	//
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">通过slot 隐藏header 和 footer</div>
	//                 <div class="wrapper-area-content">
	//                     <div class="click-btn" @click="clickshow3">点击提示弹框</div>
	//                     <Modal :show.sync="show3">
	//                         <div slot="header"></div>
	//                         <div>
	//                             这是一个没有header和footer的弹框
	//                             <div @click="clickhide3">点我关闭</div>
	//                         </div>
	//                         <div slot="footer"></div>
	//                     </Modal>
	//                 </div>
	//             </div>
	//
	//
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">自定义header footer</div>
	//                 <div class="wrapper-area-content">
	//                     <div class="click-btn" @click="clickshow4">点击提示弹框</div>
	//                     <Modal :show.sync="show4">
	//                         <div slot="header">
	//                             自定义模态框
	//                         </div>
	//                         <div>
	//                             <div>你好，我是自定义模块狂</div>
	//                             <div>你好，我是自定义模块狂框框</div>
	//                         </div>
	//                         <div slot="footer">
	//                             <div @click="clickhide4" style="padding-bottom: 10px;">自定义按钮</div>
	//                         </div>
	//                     </Modal>
	//                 </div>
	//             </div>
	//
	//
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">自定义header footer</div>
	//                 <div class="wrapper-area-content">
	//                     <div class="click-btn" @click="clickshow5">事件回调</div>
	//                     <Modal :show.sync="show5" @on-cancel="oncancel" @on-ok="onok" :auto-close="false">
	//                         <div slot="header">
	//                             事件回调
	//                         </div>
	//                         <div>
	//                             <div>你好，我是自定义模块狂</div>
	//                             <div>你好，我是自定义模块狂框框</div>
	//                         </div>
	//                     </Modal>
	//                 </div>
	//             </div>
	//
	//             <Tip :show.sync="showtip">{{tipmessage}}</Tip>
	//         </div>
	//     </div>
	// </template>
	// <script>
	exports.default = {
	    components: {
	        Hometitle: _hometitle2.default,
	        Modal: _mvui.Modal,
	        Tip: _mvui.Tip
	    },
	    data: function data() {
	        return {
	            show1: false,
	            show2: false,
	            show3: false,
	            show4: false,
	            show5: false,
	            showtip: false,
	            tipmessage: ''
	        };
	    },

	    methods: {
	        clickshow1: function clickshow1() {
	            this.show1 = true;
	        },
	        clickshow2: function clickshow2() {
	            this.show2 = true;
	        },
	        clickhide2: function clickhide2() {
	            this.show2 = false;
	        },
	        clickshow3: function clickshow3() {
	            this.show3 = true;
	        },
	        clickhide3: function clickhide3() {
	            this.show3 = false;
	        },
	        clickshow4: function clickshow4() {
	            this.show4 = true;
	        },
	        clickhide4: function clickhide4() {
	            this.show4 = false;
	        },
	        clickshow5: function clickshow5() {
	            this.show5 = true;
	        },
	        oncancel: function oncancel() {
	            this.show5 = false;
	            this.tipmessage = "点击cancel按钮";
	            this.showtip = true;
	        },
	        onok: function onok() {
	            this.tipmessage = "点击ok按钮";
	            this.showtip = true;
	        }
	    }
	};
	// </script>
	// <style lang="less">
	//     .click-btn{
	//         cursor: pointer;
	//     }
	// </style>

/***/ },
/* 263 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"body-wrapper\">\n    <Hometitle>Modal</Hometitle>\n    <div class=\"wrapper-example\">\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">默认模态框</div>\n            <div class=\"wrapper-area-content\">\n                <div class=\"click-btn\" @click=\"clickshow1\">点击提示弹框</div>\n                <Modal :show.sync=\"show1\">\n                    <div slot=\"header\">Mvui 默认弹框</div>\n                    <div>这是一个弹窗</div>\n                </Modal>\n            </div>\n        </div>\n\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">通过属性隐藏header 和 footer</div>\n            <div class=\"wrapper-area-content\">\n                <div class=\"click-btn\" @click=\"clickshow2\">点击提示弹框</div>\n                <Modal :show.sync=\"show2\" :footer-hide=\"true\" :header-hide=\"true\">\n                    <div slot=\"header\">Mvui 默认弹框</div>\n                    <div>\n                        这是一个没有header和footer的弹框\n                        <div @click=\"clickhide2\">点我关闭</div>\n                    </div>\n                </Modal>\n            </div>\n        </div>\n\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">通过slot 隐藏header 和 footer</div>\n            <div class=\"wrapper-area-content\">\n                <div class=\"click-btn\" @click=\"clickshow3\">点击提示弹框</div>\n                <Modal :show.sync=\"show3\">\n                    <div slot=\"header\"></div>\n                    <div>\n                        这是一个没有header和footer的弹框\n                        <div @click=\"clickhide3\">点我关闭</div>\n                    </div>\n                    <div slot=\"footer\"></div>\n                </Modal>\n            </div>\n        </div>\n\n\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">自定义header footer</div>\n            <div class=\"wrapper-area-content\">\n                <div class=\"click-btn\" @click=\"clickshow4\">点击提示弹框</div>\n                <Modal :show.sync=\"show4\">\n                    <div slot=\"header\">\n                        自定义模态框\n                    </div>\n                    <div>\n                        <div>你好，我是自定义模块狂</div>\n                        <div>你好，我是自定义模块狂框框</div>\n                    </div>\n                    <div slot=\"footer\">\n                        <div @click=\"clickhide4\" style=\"padding-bottom: 10px;\">自定义按钮</div>\n                    </div>\n                </Modal>\n            </div>\n        </div>\n\n\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">自定义header footer</div>\n            <div class=\"wrapper-area-content\">\n                <div class=\"click-btn\" @click=\"clickshow5\">事件回调</div>\n                <Modal :show.sync=\"show5\" @on-cancel=\"oncancel\" @on-ok=\"onok\" :auto-close=\"false\">\n                    <div slot=\"header\">\n                        事件回调\n                    </div>\n                    <div>\n                        <div>你好，我是自定义模块狂</div>\n                        <div>你好，我是自定义模块狂框框</div>\n                    </div>\n                </Modal>\n            </div>\n        </div>\n\n        <Tip :show.sync=\"showtip\">{{tipmessage}}</Tip>\n    </div>\n</div>\n";

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(265)
	__vue_script__ = __webpack_require__(267)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/alert.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(268)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-22a77e2a/alert.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(266);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./alert.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./alert.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, ".click-btn {\n  cursor: pointer;\n}\n", ""]);

	// exports


/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _hometitle = __webpack_require__(16);

	var _hometitle2 = _interopRequireDefault(_hometitle);

	var _mvui = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>  
	//     <div class="body-wrapper">
	//         <Hometitle>Alert</Hometitle>
	//         <div class="wrapper-example">
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">默认alert弹框</div>
	//                 <div class="wrapper-area-content">
	//                     <div class="click-btn" @click="clickshow1">点击提示弹框</div>
	//                 </div>
	//             </div>
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">弹框回调</div>
	//                 <div class="wrapper-area-content">
	//                     <div class="click-btn" @click="clickshow2">点击提示弹框2</div>
	//                 </div>
	//             </div>
	//         </div>
	//
	//         <Tip :show.sync="showtip">{{tipmessage}}</Tip>
	//     </div>
	// </template>
	// <script>
	exports.default = {
	    components: {
	        Hometitle: _hometitle2.default,
	        Modal: _mvui.Modal,
	        Tip: _mvui.Tip,
	        Alert: _mvui.Alert
	    },
	    data: function data() {
	        return {
	            show1: false,
	            show2: false,
	            tipmessage: '',
	            showtip: false
	        };
	    },

	    methods: {
	        clickshow1: function clickshow1() {
	            _mvui.Alert.show({
	                title: '我是title',
	                content: '我是内容'
	            });
	        },
	        clickshow2: function clickshow2() {
	            var self = this;
	            _mvui.Alert.show({
	                title: '我是title',
	                content: '我是内容',
	                onClose: function onClose() {
	                    _mvui.Alert.remove();
	                    self.tipmessage = '弹框已经被销毁';
	                    self.showtip = true;
	                }
	            });
	        }
	    }
	};
	// </script>
	// <style lang="less">
	//     .click-btn{
	//         cursor: pointer;
	//     }
	// </style>

/***/ },
/* 268 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"body-wrapper\">\n    <Hometitle>Alert</Hometitle>\n    <div class=\"wrapper-example\">\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">默认alert弹框</div>\n            <div class=\"wrapper-area-content\">\n                <div class=\"click-btn\" @click=\"clickshow1\">点击提示弹框</div>\n            </div>\n        </div>\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">弹框回调</div>\n            <div class=\"wrapper-area-content\">\n                <div class=\"click-btn\" @click=\"clickshow2\">点击提示弹框2</div>\n            </div>\n        </div>\n    </div>\n\n    <Tip :show.sync=\"showtip\">{{tipmessage}}</Tip>\n</div>\n";

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(270)
	__vue_script__ = __webpack_require__(272)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/progress.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(273)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-6667d24f/progress.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(271);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./progress.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./progress.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, ".progress-btn-example {\n  padding: 0.03rem 0.5rem;\n}\n", ""]);

	// exports


/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _hometitle = __webpack_require__(16);

	var _hometitle2 = _interopRequireDefault(_hometitle);

	var _mvui = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//     <div class="body-wrapper">
	//         <Hometitle>Progress</Hometitle>
	//         <div class="wrapper-example">
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">默认进度条</div>
	//                 <div class="wrapper-area-content">
	//                     <Progress :percent.sync="percent"></Progress>
	//                 </div>
	//             </div>
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">高度</div>
	//                 <div class="wrapper-area-content">
	//                     <Progress :percent.sync="percent" :height="0.05" class="my-progress"></Progress>
	//                 </div>
	//             </div>
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">颜色</div>
	//                 <div class="wrapper-area-content">
	//                     <Progress :percent.sync="percent" stroke-color="#23d089" class="my-progress"></Progress>
	//                     <Progress :percent.sync="percent" bg-color="#cddc39" class="my-progress"></Progress>
	//                 </div>
	//             </div>
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">更改进度</div>
	//                 <div class="wrapper-area-content">
	//                     <div>
	//                         <Button @click="add" class="progress-btn-example" shape="round">增加</Button>
	//                         <Button @click="minus" class="progress-btn-example" shape="round">减少</Button>
	//                     </div>
	//                 </div>
	//             </div>
	//         </div>
	//     </div>
	// </template>
	// <script>
	exports.default = {
	    components: {
	        Hometitle: _hometitle2.default,
	        Progress: _mvui.Progress,
	        Button: _mvui.Button
	    },
	    data: function data() {
	        return {
	            percent: 10
	        };
	    },

	    methods: {
	        add: function add() {
	            if (this.percent < 100) {
	                this.percent = this.percent + 10;
	            }
	        },
	        minus: function minus() {
	            if (this.percent > 0) {
	                this.percent = this.percent - 10;
	            }
	        }
	    }
	};
	// </script>
	// <style lang="less">
	// .progress-btn-example {
	//     padding: 0.03rem 0.5rem;
	// }
	// </style>

/***/ },
/* 273 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"body-wrapper\">\n    <Hometitle>Progress</Hometitle>\n    <div class=\"wrapper-example\">\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">默认进度条</div>\n            <div class=\"wrapper-area-content\">\n                <Progress :percent.sync=\"percent\"></Progress>\n            </div>\n        </div>\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">高度</div>\n            <div class=\"wrapper-area-content\">\n                <Progress :percent.sync=\"percent\" :height=\"0.05\" class=\"my-progress\"></Progress>\n            </div>\n        </div>\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">颜色</div>\n            <div class=\"wrapper-area-content\">\n                <Progress :percent.sync=\"percent\" stroke-color=\"#23d089\" class=\"my-progress\"></Progress>\n                <Progress :percent.sync=\"percent\" bg-color=\"#cddc39\" class=\"my-progress\"></Progress>\n            </div>\n        </div>\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">更改进度</div>\n            <div class=\"wrapper-area-content\">\n                <div>\n                    <Button @click=\"add\" class=\"progress-btn-example\" shape=\"round\">增加</Button>\n                    <Button @click=\"minus\" class=\"progress-btn-example\" shape=\"round\">减少</Button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(275)
	__vue_script__ = __webpack_require__(277)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/circle.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(278)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-ff81841c/circle.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(276);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./circle.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./circle.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, ".click-btn {\n  cursor: pointer;\n}\n", ""]);

	// exports


/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _hometitle = __webpack_require__(16);

	var _hometitle2 = _interopRequireDefault(_hometitle);

	var _mvui = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//     <div class="body-wrapper">
	//         <Hometitle>Circle</Hometitle>
	//         <div class="wrapper-example">
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">默认cricle</div>
	//                 <div class="wrapper-area-content">
	//                     <Circle :percent.sync="percent"></Circle>
	//                 </div>
	//             </div>
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">进度环顶端的形状</div>
	//                 <div class="wrapper-area-content">
	//                     <Circle :percent.sync="percent" stroke-linecap="square"></Circle>
	//                     <Circle :percent.sync="percent" stroke-linecap="round"></Circle>
	//                 </div>
	//             </div>
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">背景环宽度、颜色</div>
	//                 <div class="wrapper-area-content">
	//                     <Circle :percent.sync="percent" :bg-width="5" bg-color="#7a67ee"></Circle>
	//                     <Circle :percent.sync="percent" :bg-width="15" bg-color="#fd6131"></Circle>
	//                 </div>
	//             </div>
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">进度环宽度、颜色</div>
	//                 <div class="wrapper-area-content">
	//                     <Circle :percent.sync="percent" :stroke-width="5" stroke-color="#10c0d8"></Circle>
	//                     <Circle :percent.sync="percent" :stroke-width="15" stroke-color="#ff4081"></Circle>
	//                 </div>
	//             </div>
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">进度环文本</div>
	//                 <div class="wrapper-area-content">
	//                     <Circle :percent.sync="percent">
	//                         润度
	//                     </Circle>
	//                 </div>
	//             </div>
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">控制进度环</div>
	//                 <div class="wrapper-area-content">
	//                     <div>
	//                         <Button @click="add" class="progress-btn-example" shape="round">增加</Button>
	//                         <Button @click="minus" class="progress-btn-example" shape="round">减少</Button>
	//                     </div>
	//                 </div>
	//             </div>
	//         </div>
	//     </div>
	// </template>
	// <script>
	exports.default = {
	    components: {
	        Hometitle: _hometitle2.default,
	        Circle: _mvui.Circle,
	        Button: _mvui.Button
	    },
	    data: function data() {
	        return {
	            percent: 10
	        };
	    },

	    methods: {
	        add: function add() {
	            if (this.percent < 100) {
	                this.percent = this.percent + 10;
	            }
	        },
	        minus: function minus() {
	            if (this.percent > 0) {
	                this.percent = this.percent - 10;
	            }
	        }
	    }
	};
	// </script>
	// <style lang="less">
	// .click-btn {
	//     cursor: pointer;
	// }
	// </style>

/***/ },
/* 278 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"body-wrapper\">\n    <Hometitle>Circle</Hometitle>\n    <div class=\"wrapper-example\">\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">默认cricle</div>\n            <div class=\"wrapper-area-content\">\n                <Circle :percent.sync=\"percent\"></Circle>\n            </div>\n        </div>\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">进度环顶端的形状</div>\n            <div class=\"wrapper-area-content\">\n                <Circle :percent.sync=\"percent\" stroke-linecap=\"square\"></Circle>\n                <Circle :percent.sync=\"percent\" stroke-linecap=\"round\"></Circle>\n            </div>\n        </div>\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">背景环宽度、颜色</div>\n            <div class=\"wrapper-area-content\">\n                <Circle :percent.sync=\"percent\" :bg-width=\"5\" bg-color=\"#7a67ee\"></Circle>\n                <Circle :percent.sync=\"percent\" :bg-width=\"15\" bg-color=\"#fd6131\"></Circle>\n            </div>\n        </div>\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">进度环宽度、颜色</div>\n            <div class=\"wrapper-area-content\">\n                <Circle :percent.sync=\"percent\" :stroke-width=\"5\" stroke-color=\"#10c0d8\"></Circle>\n                <Circle :percent.sync=\"percent\" :stroke-width=\"15\" stroke-color=\"#ff4081\"></Circle>\n            </div>\n        </div>\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">进度环文本</div>\n            <div class=\"wrapper-area-content\">\n                <Circle :percent.sync=\"percent\">\n                    润度\n                </Circle>\n            </div>\n        </div>\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">控制进度环</div>\n            <div class=\"wrapper-area-content\">\n                <div>\n                    <Button @click=\"add\" class=\"progress-btn-example\" shape=\"round\">增加</Button>\n                    <Button @click=\"minus\" class=\"progress-btn-example\" shape=\"round\">减少</Button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(280)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/inputbox.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(281)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-1783bfe3/inputbox.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _hometitle = __webpack_require__(16);

	var _hometitle2 = _interopRequireDefault(_hometitle);

	var _mvui = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//     <div class="body-wrapper">
	//         <Hometitle>Inputbox</Hometitle>
	//         <div class="wrapper-example">
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">默认</div>
	//                 <div class="wrapper-area-content">
	//                     <span>姓名</span>
	//                     <Inputbox :value.sync="name"></Inputbox>
	//                 </div>
	//                 <div class="wrapper-area-content">
	//                     <span>公司</span>
	//                     <Inputbox :value.sync="company"></Inputbox>
	//                 </div>
	//             </div>
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">修改样式</div>
	//                 <div class="wrapper-area-content">
	//                     <div>姓名：</div>
	//                     <Inputbox :value.sync="name" style="border: solid 1px #ccc;border-radius: 0.03rem;width: 100%;"></Inputbox>
	//                 </div>
	//             </div>
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">动态数据</div>
	//                 <div class="wrapper-area-content">
	//                     <div>消息：</div>
	//                     <Inputbox :value.sync="message" style="border: solid 1px #ccc;border-radius: 0.03rem;width: 100%;"></Inputbox>
	//                 </div>
	//                 <div>消息：{{ message }}</div>
	//             </div>
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">placeHolder</div>
	//                 <div class="wrapper-area-content">
	//                     <div>爱好：</div>
	//                     <Inputbox :value.sync="like" placeholder="请输入爱好" :close-icon="false" style="border: solid 1px #ccc;border-radius: 0.03rem;width: 100%;"></Inputbox>
	//                 </div>
	//             </div>
	//         </div>
	//     </div>
	// </template>
	// <script>
	exports.default = {
	    components: {
	        Hometitle: _hometitle2.default,
	        Inputbox: _mvui.Inputbox,
	        Button: _mvui.Button
	    },
	    data: function data() {
	        return {
	            name: ' ',
	            message: '',
	            like: '',
	            company: ''
	        };
	    }
	};
	// </script>

/***/ },
/* 281 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"body-wrapper\">\n    <Hometitle>Inputbox</Hometitle>\n    <div class=\"wrapper-example\">\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">默认</div>\n            <div class=\"wrapper-area-content\">\n                <span>姓名</span>\n                <Inputbox :value.sync=\"name\"></Inputbox>\n            </div>\n            <div class=\"wrapper-area-content\">\n                <span>公司</span>\n                <Inputbox :value.sync=\"company\"></Inputbox>\n            </div>\n        </div>\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">修改样式</div>\n            <div class=\"wrapper-area-content\">\n                <div>姓名：</div>\n                <Inputbox :value.sync=\"name\" style=\"border: solid 1px #ccc;border-radius: 0.03rem;width: 100%;\"></Inputbox>\n            </div>\n        </div>\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">动态数据</div>\n            <div class=\"wrapper-area-content\">\n                <div>消息：</div>\n                <Inputbox :value.sync=\"message\" style=\"border: solid 1px #ccc;border-radius: 0.03rem;width: 100%;\"></Inputbox>\n            </div>\n            <div>消息：{{ message }}</div>\n        </div>\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">placeHolder</div>\n            <div class=\"wrapper-area-content\">\n                <div>爱好：</div>\n                <Inputbox :value.sync=\"like\" placeholder=\"请输入爱好\" :close-icon=\"false\" style=\"border: solid 1px #ccc;border-radius: 0.03rem;width: 100%;\"></Inputbox>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(283)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/radio.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(284)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-3ffda149/radio.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _hometitle = __webpack_require__(16);

	var _hometitle2 = _interopRequireDefault(_hometitle);

	var _mvui = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//     <div class="body-wrapper">
	//         <Hometitle>Radio</Hometitle>
	//         <div class="wrapper-example">
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">默认</div>
	//                 <div class="wrapper-area-content">
	//                     <div><Radio :picked.sync="message" value="测试2"></Radio></div>
	//                     <div><Radio :picked.sync="message" value="测试3"></Radio></div>
	//                 </div>
	//                 <div>{{ message }}</div>
	//             </div>
	//
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">不可用</div>
	//                 <div class="wrapper-area-content">
	//                     <div>
	//                         <Radio :picked.sync="message" disabled :checked="true" value="测试1"></Radio>
	//                     </div>
	//                     <div>
	//                         <Radio :picked.sync="message" disabled value="测试1"></Radio>
	//                     </div>
	//                 </div>
	//             </div>
	//
	//
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">自定义icon</div>
	//                 <div class="wrapper-area-content">
	//                     <div>
	//                         <Radio :picked.sync="name" no-select-icon="mv-icon-round-add" select-icon="mv-icon-round-add-fill"  :checked="true" value="测试2"></Radio>
	//                     </div>
	//                     <div>
	//                         <Radio :picked.sync="name" no-select-icon="mv-icon-round-add" select-icon="mv-icon-round-add-fill" value="测试4"></Radio>
	//                     </div>
	//                 </div>
	//                 <div>{{ name }}</div>
	//             </div>
	//
	//
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">change事件</div>
	//                 <div class="wrapper-area-content">
	//                     <div>
	//                         <Radio :picked.sync="test" no-select-icon="mv-icon-round-add" select-icon="mv-icon-round-add-fill"  :checked="true" value="测试8" @on-change="change"></Radio>
	//                     </div>
	//                     <div>
	//                         <Radio :picked.sync="test" no-select-icon="mv-icon-round-add" select-icon="mv-icon-round-add-fill" value="测试6" @on-change="change"></Radio>
	//                     </div>
	//                 </div>
	//                 <div>{{ test }}</div>
	//             </div>
	//
	//         </div>
	//     </div>
	// </template>
	// <script>
	exports.default = {
	    components: {
	        Hometitle: _hometitle2.default,
	        Radio: _mvui.Radio,
	        Button: _mvui.Button
	    },
	    data: function data() {
	        return {
	            message: '',
	            name: '',
	            test: ''
	        };
	    },

	    methods: {
	        change: function change(test) {
	            console.log(test);
	        }
	    }
	};
	// </script>

/***/ },
/* 284 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"body-wrapper\">\n    <Hometitle>Radio</Hometitle>\n    <div class=\"wrapper-example\">\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">默认</div>\n            <div class=\"wrapper-area-content\">\n                <div><Radio :picked.sync=\"message\" value=\"测试2\"></Radio></div>\n                <div><Radio :picked.sync=\"message\" value=\"测试3\"></Radio></div>\n            </div>\n            <div>{{ message }}</div>\n        </div>\n\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">不可用</div>\n            <div class=\"wrapper-area-content\">\n                <div>\n                    <Radio :picked.sync=\"message\" disabled :checked=\"true\" value=\"测试1\"></Radio>\n                </div>\n                <div>\n                    <Radio :picked.sync=\"message\" disabled value=\"测试1\"></Radio>\n                </div>\n            </div>\n        </div>\n\n        \n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">自定义icon</div>\n            <div class=\"wrapper-area-content\">\n                <div>\n                    <Radio :picked.sync=\"name\" no-select-icon=\"mv-icon-round-add\" select-icon=\"mv-icon-round-add-fill\"  :checked=\"true\" value=\"测试2\"></Radio>\n                </div>\n                <div>\n                    <Radio :picked.sync=\"name\" no-select-icon=\"mv-icon-round-add\" select-icon=\"mv-icon-round-add-fill\" value=\"测试4\"></Radio>\n                </div>\n            </div>\n            <div>{{ name }}</div>\n        </div>\n\n\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">change事件</div>\n            <div class=\"wrapper-area-content\">\n                <div>\n                    <Radio :picked.sync=\"test\" no-select-icon=\"mv-icon-round-add\" select-icon=\"mv-icon-round-add-fill\"  :checked=\"true\" value=\"测试8\" @on-change=\"change\"></Radio>\n                </div>\n                <div>\n                    <Radio :picked.sync=\"test\" no-select-icon=\"mv-icon-round-add\" select-icon=\"mv-icon-round-add-fill\" value=\"测试6\" @on-change=\"change\"></Radio>\n                </div>\n            </div>\n            <div>{{ test }}</div>\n        </div>\n\n    </div>\n</div>\n";

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(286)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/checkbox.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(287)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-4dc91e36/checkbox.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _hometitle = __webpack_require__(16);

	var _hometitle2 = _interopRequireDefault(_hometitle);

	var _mvui = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//     <div class="body-wrapper">
	//         <Hometitle>Checkbox</Hometitle>
	//         <div class="wrapper-example">
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">默认</div>
	//                 <div class="wrapper-area-content">
	//                     <span>选择姓名</span>
	//                     <Checkbox :picked.sync="message" value="张三"></Checkbox>
	//                     <Checkbox :picked.sync="message" value="李四"></Checkbox>
	//                     <Checkbox :picked.sync="message" value="王五"></Checkbox>
	//                 </div>
	//                 <div>{{ message }}</div>
	//             </div>
	//
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">失效</div>
	//                 <div class="wrapper-area-content">
	//                     <span>选择男女</span>
	//                     <Checkbox :picked.sync="sex" disabled :checked="true" value="男"></Checkbox>
	//                     <Checkbox :picked.sync="sex" disabled value="女"></Checkbox>
	//                 </div>
	//             </div>
	//
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">change事件</div>
	//                 <div class="wrapper-area-content">
	//                     <span>选择基友</span>
	//                     <Checkbox :picked.sync="hobby" value="妹子" ></Checkbox>
	//                     <Checkbox :picked.sync="hobby" value="哥哥" ></Checkbox>
	//                     <Checkbox :picked.sync="hobby" value="小三" ></Checkbox>
	//                 </div>
	//                 <div>{{ hobby }}</div>
	//             </div>
	//
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">自定义icon</div>
	//                 <div class="wrapper-area-content">
	//                     <span>选择</span>
	//                     <Checkbox :picked.sync="test" no-select-icon="mv-icon-round-add" select-icon="mv-icon-round-add-fill" value="test1" ></Checkbox>
	//                     <Checkbox :picked.sync="test" no-select-icon="mv-icon-round-add" select-icon="mv-icon-round-add-fill" value="test2" ></Checkbox>
	//                     <Checkbox :picked.sync="test" no-select-icon="mv-icon-round-add" select-icon="mv-icon-round-add-fill" value="test3" ></Checkbox>
	//                 </div>
	//                 <div>{{ hobby }}</div>
	//             </div>
	//
	//         </div>
	//     </div>
	// </template>
	// <script>
	exports.default = {
	    components: {
	        Hometitle: _hometitle2.default,
	        Checkbox: _mvui.Checkbox,
	        Button: _mvui.Button
	    },
	    data: function data() {
	        return {
	            message: [],
	            hobby: [],
	            sex: [],
	            test: []
	        };
	    },

	    methods: {
	        change: function change(val) {
	            console.dir(val);
	            debugger;
	        }
	    }
	};
	// </script>

/***/ },
/* 287 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"body-wrapper\">\n    <Hometitle>Checkbox</Hometitle>\n    <div class=\"wrapper-example\">\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">默认</div>\n            <div class=\"wrapper-area-content\">\n                <span>选择姓名</span>\n                <Checkbox :picked.sync=\"message\" value=\"张三\"></Checkbox>\n                <Checkbox :picked.sync=\"message\" value=\"李四\"></Checkbox>\n                <Checkbox :picked.sync=\"message\" value=\"王五\"></Checkbox>\n            </div>\n            <div>{{ message }}</div>\n        </div>\n\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">失效</div>\n            <div class=\"wrapper-area-content\">\n                <span>选择男女</span>\n                <Checkbox :picked.sync=\"sex\" disabled :checked=\"true\" value=\"男\"></Checkbox>\n                <Checkbox :picked.sync=\"sex\" disabled value=\"女\"></Checkbox>\n            </div>\n        </div>\n\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">change事件</div>\n            <div class=\"wrapper-area-content\">\n                <span>选择基友</span>\n                <Checkbox :picked.sync=\"hobby\" value=\"妹子\" ></Checkbox>\n                <Checkbox :picked.sync=\"hobby\" value=\"哥哥\" ></Checkbox>\n                <Checkbox :picked.sync=\"hobby\" value=\"小三\" ></Checkbox>\n            </div>\n            <div>{{ hobby }}</div>\n        </div>\n\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">自定义icon</div>\n            <div class=\"wrapper-area-content\">\n                <span>选择</span>\n                <Checkbox :picked.sync=\"test\" no-select-icon=\"mv-icon-round-add\" select-icon=\"mv-icon-round-add-fill\" value=\"test1\" ></Checkbox>\n                <Checkbox :picked.sync=\"test\" no-select-icon=\"mv-icon-round-add\" select-icon=\"mv-icon-round-add-fill\" value=\"test2\" ></Checkbox>\n                <Checkbox :picked.sync=\"test\" no-select-icon=\"mv-icon-round-add\" select-icon=\"mv-icon-round-add-fill\" value=\"test3\" ></Checkbox>\n            </div>\n            <div>{{ hobby }}</div>\n        </div>\n\n    </div>\n</div>\n";

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(289)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/selector.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(290)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-363649fe/selector.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _hometitle = __webpack_require__(16);

	var _hometitle2 = _interopRequireDefault(_hometitle);

	var _mvui = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//     <div class="body-wrapper">
	//         <Hometitle>Selector</Hometitle>
	//         <div class="wrapper-example">
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">默认</div>
	//                 <div class="wrapper-area-content">
	//                     <span>选择省</span>
	//                     <Selector :selected.sync="selected" :options="option"></Selector>
	//                 </div>
	//                 <div>{{ selected }}</div>
	//             </div>
	//
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">失效</div>
	//                 <div class="wrapper-area-content">
	//                     <span>选择省</span>
	//                     <Selector :selected.sync="testSelected" :disabled="true" placeholder="选择省" :options="testOption"></Selector>
	//                 </div>
	//             </div>
	//
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">更改Icon</div>
	//                 <div class="wrapper-area-content">
	//                     <span>选择省</span>
	//                     <Selector :selected.sync="testSelected" placeholder="选择省" arrow-icon="mv-icon-caret-bottom" :options="testOption"></Selector>
	//                 </div>
	//             </div>
	//
	//
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">change事件</div>
	//                 <div class="wrapper-area-content">
	//                     <span>选择省</span>
	//                     <Selector :selected.sync="changeSelect" @on-change="change" placeholder="选择省" arrow-icon="mv-icon-caret-bottom" :options="changeOption"></Selector>
	//                 </div>
	//             </div>
	//
	//         </div>
	//     </div>
	// </template>
	// <script>
	exports.default = {
	    components: {
	        Hometitle: _hometitle2.default,
	        Selector: _mvui.Selector,
	        Button: _mvui.Button
	    },
	    data: function data() {
	        return {
	            selected: "2",
	            option: [{
	                label: '北京',
	                value: '1'
	            }, {
	                label: '南京',
	                value: '2'
	            }],
	            testSelected: '',
	            testOption: [{
	                label: '北京',
	                value: '1'
	            }, {
	                label: '南京',
	                value: '2'
	            }],
	            changeSelect: '',
	            changeOption: [{
	                label: '北京',
	                value: '1'
	            }, {
	                label: '南京',
	                value: '2'
	            }]

	        };
	    },

	    methods: {
	        change: function change(val) {
	            console.dir(val);
	            debugger;
	        }
	    }
	};
	// </script>

/***/ },
/* 290 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"body-wrapper\">\n    <Hometitle>Selector</Hometitle>\n    <div class=\"wrapper-example\">\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">默认</div>\n            <div class=\"wrapper-area-content\">\n                <span>选择省</span>\n                <Selector :selected.sync=\"selected\" :options=\"option\"></Selector>\n            </div>\n            <div>{{ selected }}</div>\n        </div>\n\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">失效</div>\n            <div class=\"wrapper-area-content\">\n                <span>选择省</span>\n                <Selector :selected.sync=\"testSelected\" :disabled=\"true\" placeholder=\"选择省\" :options=\"testOption\"></Selector>\n            </div>\n        </div>\n\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">更改Icon</div>\n            <div class=\"wrapper-area-content\">\n                <span>选择省</span>\n                <Selector :selected.sync=\"testSelected\" placeholder=\"选择省\" arrow-icon=\"mv-icon-caret-bottom\" :options=\"testOption\"></Selector>\n            </div>\n        </div>\n\n\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">change事件</div>\n            <div class=\"wrapper-area-content\">\n                <span>选择省</span>\n                <Selector :selected.sync=\"changeSelect\" @on-change=\"change\" placeholder=\"选择省\" arrow-icon=\"mv-icon-caret-bottom\" :options=\"changeOption\"></Selector>\n            </div>\n        </div>\n\n    </div>\n</div>\n";

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(292)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/switch.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(293)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-a47b3354/switch.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _hometitle = __webpack_require__(16);

	var _hometitle2 = _interopRequireDefault(_hometitle);

	var _mvui = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//     <div class="body-wrapper">
	//         <Hometitle>Switch</Hometitle>
	//         <div class="wrapper-example">
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">slot显示</div>
	//                 <div class="wrapper-area-content">
	//                     <span>开关</span>
	//                     <Switch :checked.sync="selected1">
	//                         <span slot="open">开</span>
	//                         <span slot="close">关</span>
	//                     </Switch>
	//                 </div>
	//                 <div>{{ selected1 }}</div>
	//             </div>
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">默认</div>
	//                 <div class="wrapper-area-content">
	//                     <span>选择姓名</span>
	//                     <Switch :checked.sync="selected2"></Switch>
	//                 </div>
	//                 <div>{{ selected2 }}</div>
	//             </div>
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">是否可用</div>
	//                 <div class="wrapper-area-content">
	//                     <span>选择姓名</span>
	//                     <Switch :checked.sync="selected3" :disabled="true"></Switch>
	//                 </div>
	//                 <div>{{ selected3 }}</div>
	//             </div>
	//         </div>
	//     </div>
	// </template>
	// <script>
	exports.default = {
	    components: {
	        Hometitle: _hometitle2.default,
	        Switch: _mvui.Switch,
	        Button: _mvui.Button
	    },
	    data: function data() {
	        return {
	            selected1: true,
	            selected2: true,
	            selected3: true
	        };
	    }
	};
	// </script>

/***/ },
/* 293 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"body-wrapper\">\n    <Hometitle>Switch</Hometitle>\n    <div class=\"wrapper-example\">\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">slot显示</div>\n            <div class=\"wrapper-area-content\">\n                <span>开关</span>\n                <Switch :checked.sync=\"selected1\">\n                    <span slot=\"open\">开</span>\n                    <span slot=\"close\">关</span>\n                </Switch>\n            </div>\n            <div>{{ selected1 }}</div>\n        </div>\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">默认</div>\n            <div class=\"wrapper-area-content\">\n                <span>选择姓名</span>\n                <Switch :checked.sync=\"selected2\"></Switch>\n            </div>\n            <div>{{ selected2 }}</div>\n        </div>\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">是否可用</div>\n            <div class=\"wrapper-area-content\">\n                <span>选择姓名</span>\n                <Switch :checked.sync=\"selected3\" :disabled=\"true\"></Switch>\n            </div>\n            <div>{{ selected3 }}</div>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(295)
	__vue_script__ = __webpack_require__(297)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/accordion.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(298)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-24c1d916/accordion.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(296);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./accordion.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./accordion.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, ".wrapper-example-accordion .wrapper-area-content,\n.wrapper-example-accordion .wrapper-area {\n  background: transparent;\n}\n", ""]);

	// exports


/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _hometitle = __webpack_require__(16);

	var _hometitle2 = _interopRequireDefault(_hometitle);

	var _mvui = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//     <div class="body-wrapper">
	//         <Hometitle>Accordion</Hometitle>
	//         <div class="wrapper-example wrapper-example-accordion">
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">默认</div>
	//                 <div class="wrapper-area-content">
	//                     <Accordion>
	//                         <Panel>
	//                             <div slot="title">测试啦啦啦</div>
	//
	//                           她坦白了我们所虚伪的 她单纯了我们所复杂的
	//                           五年以来…
	//                           5年的等待，是个漫长也是耗损的过程。
	//                           看尽乐坛芭比娃娃的甜美面具，「性格」这两个字，似乎快要消失！
	//                           她的声音，她的个性，象徵著无可取代的高傲、独特的姿态，
	//                           这样一股充满灵魂的音乐、沉寂而刚苏醒的真声音，
	//                           是我们唯一相信且期待杨乃文的理由。
	//                         </Panel>
	//                         <Panel>
	//                             <div slot="title">测试啦啦啦</div>
	//
	//                               她坦白了我们所虚伪的 她单纯了我们所复杂的
	//                               五年以来…
	//                               5年的等待，是个漫长也是耗损的过程。
	//                               看尽乐坛芭比娃娃的甜美面具，「性格」这两个字，似乎快要消失！
	//                               她的声音，她的个性，象徵著无可取代的高傲、独特的姿态，
	//                               这样一股充满灵魂的音乐、沉寂而刚苏醒的真声音，
	//                               是我们唯一相信且期待杨乃文的理由。
	//                         </Panel>
	//                     </Accordion>
	//                 </div>
	//             </div>
	//              <div class="wrapper-area">
	//                 <div class="wrapper-area-title">accordion</div>
	//                 <div class="wrapper-area-content">
	//                     <Accordion accordion>
	//                         <Panel>
	//                             <div slot="title">测试啦啦啦</div>
	//
	//                           她坦白了我们所虚伪的 她单纯了我们所复杂的
	//                           五年以来…
	//                           5年的等待，是个漫长也是耗损的过程。
	//                           看尽乐坛芭比娃娃的甜美面具，「性格」这两个字，似乎快要消失！
	//                           她的声音，她的个性，象徵著无可取代的高傲、独特的姿态，
	//                           这样一股充满灵魂的音乐、沉寂而刚苏醒的真声音，
	//                           是我们唯一相信且期待杨乃文的理由。
	//                         </Panel>
	//                         <Panel>
	//                             <div slot="title">测试啦啦啦</div>
	//
	//                               她坦白了我们所虚伪的 她单纯了我们所复杂的
	//                               五年以来…
	//                               5年的等待，是个漫长也是耗损的过程。
	//                               看尽乐坛芭比娃娃的甜美面具，「性格」这两个字，似乎快要消失！
	//                               她的声音，她的个性，象徵著无可取代的高傲、独特的姿态，
	//                               这样一股充满灵魂的音乐、沉寂而刚苏醒的真声音，
	//                               是我们唯一相信且期待杨乃文的理由。
	//                         </Panel>
	//                     </Accordion>
	//                 </div>
	//             </div>
	//
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">默认打开</div>
	//                 <div class="wrapper-area-content">
	//                     <Accordion accordion>
	//                         <Panel :open="true">
	//                             <div slot="title">测试啦啦啦</div>
	//                           她坦白了我们所虚伪的 她单纯了我们所复杂的
	//                           五年以来…
	//                           5年的等待，是个漫长也是耗损的过程。
	//                           看尽乐坛芭比娃娃的甜美面具，「性格」这两个字，似乎快要消失！
	//                           她的声音，她的个性，象徵著无可取代的高傲、独特的姿态，
	//                           这样一股充满灵魂的音乐、沉寂而刚苏醒的真声音，
	//                           是我们唯一相信且期待杨乃文的理由。
	//                         </Panel>
	//                         <Panel>
	//                             <div slot="title">测试啦啦啦</div>
	//
	//                               她坦白了我们所虚伪的 她单纯了我们所复杂的
	//                               五年以来…
	//                               5年的等待，是个漫长也是耗损的过程。
	//                               看尽乐坛芭比娃娃的甜美面具，「性格」这两个字，似乎快要消失！
	//                               她的声音，她的个性，象徵著无可取代的高傲、独特的姿态，
	//                               这样一股充满灵魂的音乐、沉寂而刚苏醒的真声音，
	//                               是我们唯一相信且期待杨乃文的理由。
	//                         </Panel>
	//                     </Accordion>
	//                 </div>
	//             </div>
	//
	//
	//         </div>
	//     </div>
	// </template>
	// <script>
	exports.default = {
	    components: {
	        Hometitle: _hometitle2.default,
	        Panel: _mvui.Panel,
	        Accordion: _mvui.Accordion,
	        Button: _mvui.Button
	    },
	    data: function data() {
	        return {
	            selected: true
	        };
	    }
	};
	// </script>
	// <style lang="less">
	//     .wrapper-example-accordion .wrapper-area-content,.wrapper-example-accordion .wrapper-area{
	//         background: transparent;
	//     }
	// </style>

/***/ },
/* 298 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"body-wrapper\">\n    <Hometitle>Accordion</Hometitle>\n    <div class=\"wrapper-example wrapper-example-accordion\">\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">默认</div>\n            <div class=\"wrapper-area-content\">\n                <Accordion>\n                    <Panel>\n                        <div slot=\"title\">测试啦啦啦</div>\n                        \n                      她坦白了我们所虚伪的 她单纯了我们所复杂的\n                      五年以来…\n                      5年的等待，是个漫长也是耗损的过程。\n                      看尽乐坛芭比娃娃的甜美面具，「性格」这两个字，似乎快要消失！\n                      她的声音，她的个性，象徵著无可取代的高傲、独特的姿态，\n                      这样一股充满灵魂的音乐、沉寂而刚苏醒的真声音，\n                      是我们唯一相信且期待杨乃文的理由。\n                    </Panel>\n                    <Panel>\n                        <div slot=\"title\">测试啦啦啦</div>\n                        \n                          她坦白了我们所虚伪的 她单纯了我们所复杂的\n                          五年以来…\n                          5年的等待，是个漫长也是耗损的过程。\n                          看尽乐坛芭比娃娃的甜美面具，「性格」这两个字，似乎快要消失！\n                          她的声音，她的个性，象徵著无可取代的高傲、独特的姿态，\n                          这样一股充满灵魂的音乐、沉寂而刚苏醒的真声音，\n                          是我们唯一相信且期待杨乃文的理由。\n                    </Panel>\n                </Accordion>\n            </div>\n        </div>\n         <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">accordion</div>\n            <div class=\"wrapper-area-content\">\n                <Accordion accordion>\n                    <Panel>\n                        <div slot=\"title\">测试啦啦啦</div>\n                        \n                      她坦白了我们所虚伪的 她单纯了我们所复杂的\n                      五年以来…\n                      5年的等待，是个漫长也是耗损的过程。\n                      看尽乐坛芭比娃娃的甜美面具，「性格」这两个字，似乎快要消失！\n                      她的声音，她的个性，象徵著无可取代的高傲、独特的姿态，\n                      这样一股充满灵魂的音乐、沉寂而刚苏醒的真声音，\n                      是我们唯一相信且期待杨乃文的理由。\n                    </Panel>\n                    <Panel>\n                        <div slot=\"title\">测试啦啦啦</div>\n                        \n                          她坦白了我们所虚伪的 她单纯了我们所复杂的\n                          五年以来…\n                          5年的等待，是个漫长也是耗损的过程。\n                          看尽乐坛芭比娃娃的甜美面具，「性格」这两个字，似乎快要消失！\n                          她的声音，她的个性，象徵著无可取代的高傲、独特的姿态，\n                          这样一股充满灵魂的音乐、沉寂而刚苏醒的真声音，\n                          是我们唯一相信且期待杨乃文的理由。\n                    </Panel>\n                </Accordion>\n            </div>\n        </div>\n\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">默认打开</div>\n            <div class=\"wrapper-area-content\">\n                <Accordion accordion>\n                    <Panel :open=\"true\">\n                        <div slot=\"title\">测试啦啦啦</div>\n                      她坦白了我们所虚伪的 她单纯了我们所复杂的\n                      五年以来…\n                      5年的等待，是个漫长也是耗损的过程。\n                      看尽乐坛芭比娃娃的甜美面具，「性格」这两个字，似乎快要消失！\n                      她的声音，她的个性，象徵著无可取代的高傲、独特的姿态，\n                      这样一股充满灵魂的音乐、沉寂而刚苏醒的真声音，\n                      是我们唯一相信且期待杨乃文的理由。\n                    </Panel>\n                    <Panel>\n                        <div slot=\"title\">测试啦啦啦</div>\n                        \n                          她坦白了我们所虚伪的 她单纯了我们所复杂的\n                          五年以来…\n                          5年的等待，是个漫长也是耗损的过程。\n                          看尽乐坛芭比娃娃的甜美面具，「性格」这两个字，似乎快要消失！\n                          她的声音，她的个性，象徵著无可取代的高傲、独特的姿态，\n                          这样一股充满灵魂的音乐、沉寂而刚苏醒的真声音，\n                          是我们唯一相信且期待杨乃文的理由。\n                    </Panel>\n                </Accordion>\n            </div>\n        </div>\n        \n        \n    </div>\n</div>\n";

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(300)
	__vue_script__ = __webpack_require__(302)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/scroll.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(303)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-732dbd22/scroll.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(301);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./scroll.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./scroll.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nheader {\n    position: relative;\n    z-index: 100;\n}\n.wrapper-example-refresh {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    padding-top: 0.45rem;\n    top: 0px;\n    left: 0px;\n    box-sizing: border-box;\n}\n\n.wrapper-example-refresh .wrapper-area-content {\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n}\n\n.wrapper-example-refresh .wrapper-area-content li {\n    height: 0.4rem;\n    line-height: 0.4rem;\n    border-bottom: solid 1px #ccc;\n    padding-left: 0.1rem;\n    color: #666;\n}\n\n.wrapper-example-refresh .wrapper-area-content li: last-child {\n    border-bottom-width: 0px;\n}\n\n.wrapper-example-refresh .wrapper-area-content .wrapper-area {\n    padding: 0px;\n    margin: 0px;\n}\n", ""]);

	// exports


/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _hometitle = __webpack_require__(16);

	var _hometitle2 = _interopRequireDefault(_hometitle);

	var _mvui = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//     <div class="body-wrapper">
	//         <Hometitle>PullRefresh</Hometitle>
	//         <div class="wrapper-example wrapper-example-refresh">
	//             <div class="wrapper-area-content" id="parent">
	//                 <ul>
	//                     <li><a v-link="{path:'/scrollY' , activeClass:'active'}">垂直滚动</a></li>
	//                     <li><a v-link="{path:'/scrollX' , activeClass:'active'}">横向滚动</a></li>
	//                 </ul>
	//             </div>
	//         </div>
	// </template>
	// <script>
	exports.default = {
	    components: {
	        Hometitle: _hometitle2.default,
	        Pullrefresh: _mvui.Pullrefresh,
	        Button: _mvui.Button
	    },
	    data: function data() {
	        return {
	            selected: true,
	            status: 0
	        };
	    }
	};
	// </script>
	// <style>
	// header {
	//     position: relative;
	//     z-index: 100;
	// }
	// .wrapper-example-refresh {
	//     position: fixed;
	//     width: 100%;
	//     height: 100%;
	//     padding-top: 0.45rem;
	//     top: 0px;
	//     left: 0px;
	//     box-sizing: border-box;
	// }
	//
	// .wrapper-example-refresh .wrapper-area-content {
	//     width: 100%;
	//     height: 100%;
	//     overflow: auto;
	// }
	//
	// .wrapper-example-refresh .wrapper-area-content li {
	//     height: 0.4rem;
	//     line-height: 0.4rem;
	//     border-bottom: solid 1px #ccc;
	//     padding-left: 0.1rem;
	//     color: #666;
	// }
	//
	// .wrapper-example-refresh .wrapper-area-content li: last-child {
	//     border-bottom-width: 0px;
	// }
	//
	// .wrapper-example-refresh .wrapper-area-content .wrapper-area {
	//     padding: 0px;
	//     margin: 0px;
	// }
	// </style>

/***/ },
/* 303 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"body-wrapper\">\n    <Hometitle>PullRefresh</Hometitle>\n    <div class=\"wrapper-example wrapper-example-refresh\">\n        <div class=\"wrapper-area-content\" id=\"parent\">\n            <ul>\n                <li><a v-link=\"{path:'/scrollY' , activeClass:'active'}\">垂直滚动</a></li>\n                <li><a v-link=\"{path:'/scrollX' , activeClass:'active'}\">横向滚动</a></li>\n            </ul>\n        </div>\n    </div>\n";

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(305)
	__vue_script__ = __webpack_require__(307)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/scrollY.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(308)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-08f84a7a/scrollY.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(306);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./scrollY.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./scrollY.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.wrapper-example-scroll{\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    padding-top: 0.45rem;\n    top: 0px;\n    left: 0px;\n    border-top: solid 1px #ccc;\n    box-sizing: border-box;\n}\n.wrapper-example-scroll .wrapper-area-content{\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n}\n.wrapper-example-scroll .wrapper-area-content li{\n    height: 0.4rem;\n    line-height: 0.4rem;\n    border-bottom: solid 1px #ccc;\n    padding-left: 0.1rem;\n    color: #666;\n}\n.wrapper-example-scroll .wrapper-area-content li: last-child {\n    border-bottom-width: 0px;\n}\n.wrapper-example-scroll .wrapper-area-content .wrapper-area{\n    padding: 0px;\n    margin: 0px;\n}\n", ""]);

	// exports


/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _hometitle = __webpack_require__(16);

	var _hometitle2 = _interopRequireDefault(_hometitle);

	var _mvui = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//     <div class="body-wrapper">
	//         <Hometitle>ScrollY</Hometitle>
	//         <div class="wrapper-example wrapper-example-scroll">
	//             <div class="wrapper-area-content" id="parent">
	//                 <Scroll>
	//                     <ul>
	//                         <li>Pretty row 1</li>
	//                         <li>Pretty row 2</li>
	//                         <li>Pretty row 3</li>
	//                         <li>Pretty row 4</li>
	//                         <li>Pretty row 5</li>
	//                         <li>Pretty row 6</li>
	//                         <li>Pretty row 7</li>
	//                         <li>Pretty row 8</li>
	//                         <li>Pretty row 9</li>
	//                         <li>Pretty row 10</li>
	//                         <li>Pretty row 11</li>
	//                         <li>Pretty row 12</li>
	//                         <li>Pretty row 13</li>
	//                         <li>Pretty row 14</li>
	//                         <li>Pretty row 15</li>
	//                         <li>Pretty row 16</li>
	//                         <li>Pretty row 17</li>
	//                         <li>Pretty row 18</li>
	//                         <li>Pretty row 19</li>
	//                         <li>Pretty row 20</li>
	//                         <li>Pretty row 21</li>
	//                         <li>Pretty row 22</li>
	//                         <li>Pretty row 23</li>
	//                         <li>Pretty row 24</li>
	//                         <li>Pretty row 25</li>
	//                         <li>Pretty row 26</li>
	//                         <li>Pretty row 27</li>
	//                         <li>Pretty row 28</li>
	//                         <li>Pretty row 29</li>
	//                         <li>Pretty row 30</li>
	//                         <li>Pretty row 31</li>
	//                         <li>Pretty row 32</li>
	//                         <li>Pretty row 33</li>
	//                         <li>Pretty row 34</li>
	//                         <li>Pretty row 35</li>
	//                         <li>Pretty row 36</li>
	//                         <li>Pretty row 37</li>
	//                         <li>Pretty row 38</li>
	//                         <li>Pretty row 39</li>
	//                         <li>Pretty row 40</li>
	//                         <li>Pretty row 41</li>
	//                         <li>Pretty row 42</li>
	//                         <li>Pretty row 43</li>
	//                         <li>Pretty row 44</li>
	//                         <li>Pretty row 45</li>
	//                         <li>Pretty row 46</li>
	//                         <li>Pretty row 47</li>
	//                         <li>Pretty row 48</li>
	//                         <li>Pretty row 49</li>
	//                         <li>Pretty row 50</li>
	//                     </ul>
	//                 </Scroll>
	//             </div>
	//     </div>
	// </template>
	// <script>
	exports.default = {
	    components: {
	        Hometitle: _hometitle2.default,
	        Scroll: _mvui.Scroll,
	        Button: _mvui.Button
	    }
	};
	// </script>
	// <style>
	//     .wrapper-example-scroll{
	//         position: fixed;
	//         width: 100%;
	//         height: 100%;
	//         padding-top: 0.45rem;
	//         top: 0px;
	//         left: 0px;
	//         border-top: solid 1px #ccc;
	//         box-sizing: border-box;
	//     }
	//     .wrapper-example-scroll .wrapper-area-content{
	//         width: 100%;
	//         height: 100%;
	//         overflow: hidden;
	//     }
	//     .wrapper-example-scroll .wrapper-area-content li{
	//         height: 0.4rem;
	//         line-height: 0.4rem;
	//         border-bottom: solid 1px #ccc;
	//         padding-left: 0.1rem;
	//         color: #666;
	//     }
	//     .wrapper-example-scroll .wrapper-area-content li: last-child {
	//         border-bottom-width: 0px;
	//     }
	//     .wrapper-example-scroll .wrapper-area-content .wrapper-area{
	//         padding: 0px;
	//         margin: 0px;
	//     }
	// </style>

/***/ },
/* 308 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"body-wrapper\">\n    <Hometitle>ScrollY</Hometitle>\n    <div class=\"wrapper-example wrapper-example-scroll\">\n        <div class=\"wrapper-area-content\" id=\"parent\">\n            <Scroll>\n                <ul>\n                    <li>Pretty row 1</li>\n                    <li>Pretty row 2</li>\n                    <li>Pretty row 3</li>\n                    <li>Pretty row 4</li>\n                    <li>Pretty row 5</li>\n                    <li>Pretty row 6</li>\n                    <li>Pretty row 7</li>\n                    <li>Pretty row 8</li>\n                    <li>Pretty row 9</li>\n                    <li>Pretty row 10</li>\n                    <li>Pretty row 11</li>\n                    <li>Pretty row 12</li>\n                    <li>Pretty row 13</li>\n                    <li>Pretty row 14</li>\n                    <li>Pretty row 15</li>\n                    <li>Pretty row 16</li>\n                    <li>Pretty row 17</li>\n                    <li>Pretty row 18</li>\n                    <li>Pretty row 19</li>\n                    <li>Pretty row 20</li>\n                    <li>Pretty row 21</li>\n                    <li>Pretty row 22</li>\n                    <li>Pretty row 23</li>\n                    <li>Pretty row 24</li>\n                    <li>Pretty row 25</li>\n                    <li>Pretty row 26</li>\n                    <li>Pretty row 27</li>\n                    <li>Pretty row 28</li>\n                    <li>Pretty row 29</li>\n                    <li>Pretty row 30</li>\n                    <li>Pretty row 31</li>\n                    <li>Pretty row 32</li>\n                    <li>Pretty row 33</li>\n                    <li>Pretty row 34</li>\n                    <li>Pretty row 35</li>\n                    <li>Pretty row 36</li>\n                    <li>Pretty row 37</li>\n                    <li>Pretty row 38</li>\n                    <li>Pretty row 39</li>\n                    <li>Pretty row 40</li>\n                    <li>Pretty row 41</li>\n                    <li>Pretty row 42</li>\n                    <li>Pretty row 43</li>\n                    <li>Pretty row 44</li>\n                    <li>Pretty row 45</li>\n                    <li>Pretty row 46</li>\n                    <li>Pretty row 47</li>\n                    <li>Pretty row 48</li>\n                    <li>Pretty row 49</li>\n                    <li>Pretty row 50</li>\n                </ul>\n            </Scroll>\n        </div>\n</div>\n";

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(310)
	__vue_script__ = __webpack_require__(312)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/scrollX.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(313)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-08ea32f9/scrollX.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(311);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./scrollX.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./scrollX.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.wrapper-example-scroll-x{\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    padding-top: 0.45rem;\n    top: 0px;\n    left: 0px;\n    border-top: solid 1px #ccc;\n    box-sizing: border-box;\n}\n.wrapper-example-scroll-x .wrapper-area-content{\n    width: 100%;\n    height: 0.4rem;\n    overflow: hidden;\n    border-bottom: solid 1px #ccc;\n}\n.wrapper-example-scroll-x .wrapper-area-content ul{\n    width: 4rem;\n    height: 0.4rem;\n}\n.wrapper-example-scroll-x .wrapper-area-content li{\n    height: 0.4rem;\n    line-height: 0.4rem;\n    padding-left: 0.1rem;\n    color: #666;\n    float: left;\n}\n.wrapper-example-scroll-x .wrapper-area-content li: last-child {\n    border-bottom-width: 0px;\n}\n.wrapper-example-scroll-x .wrapper-area-content .wrapper-area{\n    padding: 0px;\n    margin: 0px;\n}\n", ""]);

	// exports


/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _hometitle = __webpack_require__(16);

	var _hometitle2 = _interopRequireDefault(_hometitle);

	var _mvui = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//     <div class="body-wrapper">
	//         <Hometitle>ScrollX</Hometitle>
	//         <div class="wrapper-example wrapper-example-scroll-x">
	//             <div class="wrapper-area-content" id="parent">
	//                 <Scroll direction="x">
	//                     <ul>
	//                         <li>首页</li>
	//                         <li>热点</li>
	//                         <li>社会</li>
	//                         <li>股票</li>
	//                         <li>美女</li>
	//                         <li>搞笑</li>
	//                         <li>科技</li>
	//                         <li>互联网</li>
	//                         <li>军事</li>
	//                         <li>体育</li>
	//                     </ul>
	//                 </Scroll>
	//             </div>
	//     </div>
	// </template>
	// <script>
	exports.default = {
	    components: {
	        Hometitle: _hometitle2.default,
	        Scroll: _mvui.Scroll,
	        Button: _mvui.Button
	    }
	};
	// </script>
	// <style>
	//     .wrapper-example-scroll-x{
	//         position: fixed;
	//         width: 100%;
	//         height: 100%;
	//         padding-top: 0.45rem;
	//         top: 0px;
	//         left: 0px;
	//         border-top: solid 1px #ccc;
	//         box-sizing: border-box;
	//     }
	//     .wrapper-example-scroll-x .wrapper-area-content{
	//         width: 100%;
	//         height: 0.4rem;
	//         overflow: hidden;
	//         border-bottom: solid 1px #ccc;
	//     }
	//     .wrapper-example-scroll-x .wrapper-area-content ul{
	//         width: 4rem;
	//         height: 0.4rem;
	//     }
	//     .wrapper-example-scroll-x .wrapper-area-content li{
	//         height: 0.4rem;
	//         line-height: 0.4rem;
	//         padding-left: 0.1rem;
	//         color: #666;
	//         float: left;
	//     }
	//     .wrapper-example-scroll-x .wrapper-area-content li: last-child {
	//         border-bottom-width: 0px;
	//     }
	//     .wrapper-example-scroll-x .wrapper-area-content .wrapper-area{
	//         padding: 0px;
	//         margin: 0px;
	//     }
	// </style>

/***/ },
/* 313 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"body-wrapper\">\n    <Hometitle>ScrollX</Hometitle>\n    <div class=\"wrapper-example wrapper-example-scroll-x\">\n        <div class=\"wrapper-area-content\" id=\"parent\">\n            <Scroll direction=\"x\">\n                <ul>\n                    <li>首页</li>\n                    <li>热点</li>\n                    <li>社会</li>\n                    <li>股票</li>\n                    <li>美女</li>\n                    <li>搞笑</li>\n                    <li>科技</li>\n                    <li>互联网</li>\n                    <li>军事</li>\n                    <li>体育</li>\n                </ul>\n            </Scroll>\n        </div>\n</div>\n";

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(315)
	__vue_script__ = __webpack_require__(317)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/pullRefresh.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(318)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-501807b8/pullRefresh.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(316);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./pullRefresh.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./pullRefresh.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nheader {\n    position: relative;\n    z-index: 100;\n}\n.wrapper-example-refresh {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    padding-top: 0.45rem;\n    top: 0px;\n    left: 0px;\n    box-sizing: border-box;\n}\n\n.wrapper-example-refresh .wrapper-area-content {\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n}\n\n.wrapper-example-refresh .wrapper-area-content li {\n    height: 0.4rem;\n    line-height: 0.4rem;\n    border-bottom: solid 1px #ccc;\n    padding-left: 0.1rem;\n    color: #666;\n}\n\n.wrapper-example-refresh .wrapper-area-content li: last-child {\n    border-bottom-width: 0px;\n}\n\n.wrapper-example-refresh .wrapper-area-content .wrapper-area {\n    padding: 0px;\n    margin: 0px;\n}\n", ""]);

	// exports


/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _hometitle = __webpack_require__(16);

	var _hometitle2 = _interopRequireDefault(_hometitle);

	var _mvui = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//     <div class="body-wrapper">
	//         <Hometitle>PullRefresh</Hometitle>
	//         <div class="wrapper-example wrapper-example-refresh">
	//             <div class="wrapper-area-content" id="parent">
	//                 <ul>
	//                     <li><a v-link="{path:'/pullRefreshWindow' , activeClass:'active'}">下拉刷新默认滚动条</a></li>
	//                     <li><a v-link="{path:'/pullRefreshElem' , activeClass:'active'}">下拉刷新元素滚动条</a></li>
	//                     <li><a v-link="{path:'/pullRefreshScroll' , activeClass:'active'}">下拉刷新Scroll滚动条</a></li>
	//                 </ul>
	//             </div>
	//         </div>
	// </template>
	// <script>
	exports.default = {
	    components: {
	        Hometitle: _hometitle2.default,
	        Pullrefresh: _mvui.Pullrefresh,
	        Button: _mvui.Button
	    },
	    data: function data() {
	        return {
	            selected: true,
	            status: 0
	        };
	    }
	};
	// </script>
	// <style>
	// header {
	//     position: relative;
	//     z-index: 100;
	// }
	// .wrapper-example-refresh {
	//     position: fixed;
	//     width: 100%;
	//     height: 100%;
	//     padding-top: 0.45rem;
	//     top: 0px;
	//     left: 0px;
	//     box-sizing: border-box;
	// }
	//
	// .wrapper-example-refresh .wrapper-area-content {
	//     width: 100%;
	//     height: 100%;
	//     overflow: auto;
	// }
	//
	// .wrapper-example-refresh .wrapper-area-content li {
	//     height: 0.4rem;
	//     line-height: 0.4rem;
	//     border-bottom: solid 1px #ccc;
	//     padding-left: 0.1rem;
	//     color: #666;
	// }
	//
	// .wrapper-example-refresh .wrapper-area-content li: last-child {
	//     border-bottom-width: 0px;
	// }
	//
	// .wrapper-example-refresh .wrapper-area-content .wrapper-area {
	//     padding: 0px;
	//     margin: 0px;
	// }
	// </style>

/***/ },
/* 318 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"body-wrapper\">\n    <Hometitle>PullRefresh</Hometitle>\n    <div class=\"wrapper-example wrapper-example-refresh\">\n        <div class=\"wrapper-area-content\" id=\"parent\">\n            <ul>\n                <li><a v-link=\"{path:'/pullRefreshWindow' , activeClass:'active'}\">下拉刷新默认滚动条</a></li>\n                <li><a v-link=\"{path:'/pullRefreshElem' , activeClass:'active'}\">下拉刷新元素滚动条</a></li>\n                <li><a v-link=\"{path:'/pullRefreshScroll' , activeClass:'active'}\">下拉刷新Scroll滚动条</a></li>\n            </ul>\n        </div>\n    </div>\n";

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(320)
	__vue_script__ = __webpack_require__(322)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/pullRefreshWindow.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(323)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-38afe334/pullRefreshWindow.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(321);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./pullRefreshWindow.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./pullRefreshWindow.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nheader {\n    position: relative;\n    z-index: 100;\n}\n.wrapper-example-refresh-window .wrapper-area-content li {\n    height: 0.4rem;\n    line-height: 0.4rem;\n    border-bottom: solid 1px #ccc;\n    padding-left: 0.1rem;\n    color: #666;\n}\n\n.wrapper-example-refresh-window .wrapper-area-content li: last-child {\n    border-bottom-width: 0px;\n}\n\n.wrapper-example-refresh-window .wrapper-area-content .wrapper-area {\n    padding: 0px;\n    margin: 0px;\n}\n", ""]);

	// exports


/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _hometitle = __webpack_require__(16);

	var _hometitle2 = _interopRequireDefault(_hometitle);

	var _mvui = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//     <div class="body-wrapper">
	//         <Pullrefresh :status.sync="status" @on-refresh="refreshFunc"></Pullrefresh>
	//         <Hometitle>PullRefreshWindow</Hometitle>
	//         <div class="wrapper-example wrapper-example-refresh-window">
	//             <div class="wrapper-area-content" id="parent">
	//                 <ul>
	//                     <li>Pretty row 1</li>
	//                     <li>Pretty row 2</li>
	//                     <li>Pretty row 3</li>
	//                     <li>Pretty row 4</li>
	//                     <li>Pretty row 5</li>
	//                     <li>Pretty row 6</li>
	//                     <li>Pretty row 7</li>
	//                     <li>Pretty row 8</li>
	//                     <li>Pretty row 9</li>
	//                     <li>Pretty row 10</li>
	//                     <li>Pretty row 11</li>
	//                     <li>Pretty row 12</li>
	//                     <li>Pretty row 13</li>
	//                     <li>Pretty row 14</li>
	//                     <li>Pretty row 15</li>
	//                     <li>Pretty row 16</li>
	//                     <li>Pretty row 17</li>
	//                     <li>Pretty row 18</li>
	//                     <li>Pretty row 19</li>
	//                     <li>Pretty row 20</li>
	//                     <li>Pretty row 21</li>
	//                     <li>Pretty row 22</li>
	//                     <li>Pretty row 23</li>
	//                     <li>Pretty row 24</li>
	//                     <li>Pretty row 25</li>
	//                     <li>Pretty row 26</li>
	//                     <li>Pretty row 27</li>
	//                     <li>Pretty row 28</li>
	//                     <li>Pretty row 29</li>
	//                     <li>Pretty row 30</li>
	//                     <li>Pretty row 31</li>
	//                     <li>Pretty row 32</li>
	//                     <li>Pretty row 33</li>
	//                     <li>Pretty row 34</li>
	//                     <li>Pretty row 35</li>
	//                     <li>Pretty row 36</li>
	//                     <li>Pretty row 37</li>
	//                     <li>Pretty row 38</li>
	//                     <li>Pretty row 39</li>
	//                     <li>Pretty row 40</li>
	//                     <li>Pretty row 41</li>
	//                     <li>Pretty row 42</li>
	//                     <li>Pretty row 43</li>
	//                     <li>Pretty row 44</li>
	//                     <li>Pretty row 45</li>
	//                     <li>Pretty row 46</li>
	//                     <li>Pretty row 47</li>
	//                     <li>Pretty row 48</li>
	//                     <li>Pretty row 49</li>
	//                     <li>Pretty row 50</li>
	//                 </ul>
	//             </div>
	//         </div>
	//     </div>
	// </template>
	// <script>
	function debug(str) {
	    document.querySelector('header').innerText = str;
	}
	exports.default = {
	    components: {
	        Hometitle: _hometitle2.default,
	        Pullrefresh: _mvui.Pullrefresh,
	        Button: _mvui.Button
	    },
	    data: function data() {
	        return {
	            status: 'ready'
	        };
	    },

	    methods: {
	        refreshFunc: function refreshFunc(e) {
	            var self = this;
	            setTimeout(function () {
	                self.status = 'ready';
	            }, 1000);
	        }
	    },
	    ready: function ready() {
	        // this.$el.addEventListener('touchmove', function(){
	        //     alert('test');
	        //     if(!this.i){
	        //             this.i = 1;
	        //     }
	        //     debug(this.i++);
	        // },false);
	    }
	};
	// </script>
	// <style>
	// header {
	//     position: relative;
	//     z-index: 100;
	// }
	// .wrapper-example-refresh-window .wrapper-area-content li {
	//     height: 0.4rem;
	//     line-height: 0.4rem;
	//     border-bottom: solid 1px #ccc;
	//     padding-left: 0.1rem;
	//     color: #666;
	// }
	//
	// .wrapper-example-refresh-window .wrapper-area-content li: last-child {
	//     border-bottom-width: 0px;
	// }
	//
	// .wrapper-example-refresh-window .wrapper-area-content .wrapper-area {
	//     padding: 0px;
	//     margin: 0px;
	// }
	// </style>

/***/ },
/* 323 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"body-wrapper\">\n    <Pullrefresh :status.sync=\"status\" @on-refresh=\"refreshFunc\"></Pullrefresh>\n    <Hometitle>PullRefreshWindow</Hometitle>\n    <div class=\"wrapper-example wrapper-example-refresh-window\">\n        <div class=\"wrapper-area-content\" id=\"parent\">\n            <ul>\n                <li>Pretty row 1</li>\n                <li>Pretty row 2</li>\n                <li>Pretty row 3</li>\n                <li>Pretty row 4</li>\n                <li>Pretty row 5</li>\n                <li>Pretty row 6</li>\n                <li>Pretty row 7</li>\n                <li>Pretty row 8</li>\n                <li>Pretty row 9</li>\n                <li>Pretty row 10</li>\n                <li>Pretty row 11</li>\n                <li>Pretty row 12</li>\n                <li>Pretty row 13</li>\n                <li>Pretty row 14</li>\n                <li>Pretty row 15</li>\n                <li>Pretty row 16</li>\n                <li>Pretty row 17</li>\n                <li>Pretty row 18</li>\n                <li>Pretty row 19</li>\n                <li>Pretty row 20</li>\n                <li>Pretty row 21</li>\n                <li>Pretty row 22</li>\n                <li>Pretty row 23</li>\n                <li>Pretty row 24</li>\n                <li>Pretty row 25</li>\n                <li>Pretty row 26</li>\n                <li>Pretty row 27</li>\n                <li>Pretty row 28</li>\n                <li>Pretty row 29</li>\n                <li>Pretty row 30</li>\n                <li>Pretty row 31</li>\n                <li>Pretty row 32</li>\n                <li>Pretty row 33</li>\n                <li>Pretty row 34</li>\n                <li>Pretty row 35</li>\n                <li>Pretty row 36</li>\n                <li>Pretty row 37</li>\n                <li>Pretty row 38</li>\n                <li>Pretty row 39</li>\n                <li>Pretty row 40</li>\n                <li>Pretty row 41</li>\n                <li>Pretty row 42</li>\n                <li>Pretty row 43</li>\n                <li>Pretty row 44</li>\n                <li>Pretty row 45</li>\n                <li>Pretty row 46</li>\n                <li>Pretty row 47</li>\n                <li>Pretty row 48</li>\n                <li>Pretty row 49</li>\n                <li>Pretty row 50</li>\n            </ul>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(325)
	__vue_script__ = __webpack_require__(327)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/pullRefreshElem.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(328)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-9df0335a/pullRefreshElem.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(326);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./pullRefreshElem.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./pullRefreshElem.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nheader {\n    position: relative;\n    z-index: 100;\n}\n.wrapper-example-refresh {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    padding-top: 0.45rem;\n    top: 0px;\n    left: 0px;\n    box-sizing: border-box;\n}\n\n.wrapper-example-refresh .wrapper-area-content {\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n}\n\n.wrapper-example-refresh .wrapper-area-content li {\n    height: 0.4rem;\n    line-height: 0.4rem;\n    border-bottom: solid 1px #ccc;\n    padding-left: 0.1rem;\n    color: #666;\n}\n\n.wrapper-example-refresh .wrapper-area-content li: last-child {\n    border-bottom-width: 0px;\n}\n\n.wrapper-example-refresh .wrapper-area-content .wrapper-area {\n    padding: 0px;\n    margin: 0px;\n}\n", ""]);

	// exports


/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _hometitle = __webpack_require__(16);

	var _hometitle2 = _interopRequireDefault(_hometitle);

	var _mvui = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//     <div class="body-wrapper">
	//         <Hometitle>PullRefreshElem</Hometitle>
	//         <div class="wrapper-example wrapper-example-refresh">
	//             <div class="wrapper-area-content" id="parent">
	//                 <Pullrefresh :status.sync="status" @on-refresh="refreshFunc"></Pullrefresh>
	//                 <ul>
	//                     <li>Pretty row 1</li>
	//                     <li>Pretty row 2</li>
	//                     <li>Pretty row 3</li>
	//                     <li>Pretty row 4</li>
	//                     <li>Pretty row 5</li>
	//                     <li>Pretty row 6</li>
	//                     <li>Pretty row 7</li>
	//                     <li>Pretty row 8</li>
	//                     <li>Pretty row 9</li>
	//                     <li>Pretty row 10</li>
	//                     <li>Pretty row 11</li>
	//                     <li>Pretty row 12</li>
	//                     <li>Pretty row 13</li>
	//                     <li>Pretty row 14</li>
	//                     <li>Pretty row 15</li>
	//                     <li>Pretty row 16</li>
	//                     <li>Pretty row 17</li>
	//                     <li>Pretty row 18</li>
	//                     <li>Pretty row 19</li>
	//                     <li>Pretty row 20</li>
	//                     <li>Pretty row 21</li>
	//                     <li>Pretty row 22</li>
	//                     <li>Pretty row 23</li>
	//                     <li>Pretty row 24</li>
	//                     <li>Pretty row 25</li>
	//                     <li>Pretty row 26</li>
	//                     <li>Pretty row 27</li>
	//                     <li>Pretty row 28</li>
	//                     <li>Pretty row 29</li>
	//                     <li>Pretty row 30</li>
	//                     <li>Pretty row 31</li>
	//                     <li>Pretty row 32</li>
	//                     <li>Pretty row 33</li>
	//                     <li>Pretty row 34</li>
	//                     <li>Pretty row 35</li>
	//                     <li>Pretty row 36</li>
	//                     <li>Pretty row 37</li>
	//                     <li>Pretty row 38</li>
	//                     <li>Pretty row 39</li>
	//                     <li>Pretty row 40</li>
	//                     <li>Pretty row 41</li>
	//                     <li>Pretty row 42</li>
	//                     <li>Pretty row 43</li>
	//                     <li>Pretty row 44</li>
	//                     <li>Pretty row 45</li>
	//                     <li>Pretty row 46</li>
	//                     <li>Pretty row 47</li>
	//                     <li>Pretty row 48</li>
	//                     <li>Pretty row 49</li>
	//                     <li>Pretty row 50</li>
	//                 </ul>
	//             </div>
	//         </div>
	// </template>
	// <script>
	exports.default = {
	    components: {
	        Hometitle: _hometitle2.default,
	        Pullrefresh: _mvui.Pullrefresh,
	        Button: _mvui.Button
	    },
	    data: function data() {
	        return {
	            status: 'ready'
	        };
	    },

	    methods: {
	        refreshFunc: function refreshFunc(e) {
	            var self = this;
	            setTimeout(function () {
	                self.status = 'ready';
	            }, 1000);
	        }
	    }
	};
	// </script>
	// <style>
	// header {
	//     position: relative;
	//     z-index: 100;
	// }
	// .wrapper-example-refresh {
	//     position: fixed;
	//     width: 100%;
	//     height: 100%;
	//     padding-top: 0.45rem;
	//     top: 0px;
	//     left: 0px;
	//     box-sizing: border-box;
	// }
	//
	// .wrapper-example-refresh .wrapper-area-content {
	//     width: 100%;
	//     height: 100%;
	//     overflow: auto;
	// }
	//
	// .wrapper-example-refresh .wrapper-area-content li {
	//     height: 0.4rem;
	//     line-height: 0.4rem;
	//     border-bottom: solid 1px #ccc;
	//     padding-left: 0.1rem;
	//     color: #666;
	// }
	//
	// .wrapper-example-refresh .wrapper-area-content li: last-child {
	//     border-bottom-width: 0px;
	// }
	//
	// .wrapper-example-refresh .wrapper-area-content .wrapper-area {
	//     padding: 0px;
	//     margin: 0px;
	// }
	// </style>

/***/ },
/* 328 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"body-wrapper\">\n    <Hometitle>PullRefreshElem</Hometitle>\n    <div class=\"wrapper-example wrapper-example-refresh\">\n        <div class=\"wrapper-area-content\" id=\"parent\">\n            <Pullrefresh :status.sync=\"status\" @on-refresh=\"refreshFunc\"></Pullrefresh>\n            <ul>\n                <li>Pretty row 1</li>\n                <li>Pretty row 2</li>\n                <li>Pretty row 3</li>\n                <li>Pretty row 4</li>\n                <li>Pretty row 5</li>\n                <li>Pretty row 6</li>\n                <li>Pretty row 7</li>\n                <li>Pretty row 8</li>\n                <li>Pretty row 9</li>\n                <li>Pretty row 10</li>\n                <li>Pretty row 11</li>\n                <li>Pretty row 12</li>\n                <li>Pretty row 13</li>\n                <li>Pretty row 14</li>\n                <li>Pretty row 15</li>\n                <li>Pretty row 16</li>\n                <li>Pretty row 17</li>\n                <li>Pretty row 18</li>\n                <li>Pretty row 19</li>\n                <li>Pretty row 20</li>\n                <li>Pretty row 21</li>\n                <li>Pretty row 22</li>\n                <li>Pretty row 23</li>\n                <li>Pretty row 24</li>\n                <li>Pretty row 25</li>\n                <li>Pretty row 26</li>\n                <li>Pretty row 27</li>\n                <li>Pretty row 28</li>\n                <li>Pretty row 29</li>\n                <li>Pretty row 30</li>\n                <li>Pretty row 31</li>\n                <li>Pretty row 32</li>\n                <li>Pretty row 33</li>\n                <li>Pretty row 34</li>\n                <li>Pretty row 35</li>\n                <li>Pretty row 36</li>\n                <li>Pretty row 37</li>\n                <li>Pretty row 38</li>\n                <li>Pretty row 39</li>\n                <li>Pretty row 40</li>\n                <li>Pretty row 41</li>\n                <li>Pretty row 42</li>\n                <li>Pretty row 43</li>\n                <li>Pretty row 44</li>\n                <li>Pretty row 45</li>\n                <li>Pretty row 46</li>\n                <li>Pretty row 47</li>\n                <li>Pretty row 48</li>\n                <li>Pretty row 49</li>\n                <li>Pretty row 50</li>\n            </ul>\n        </div>\n    </div>\n";

/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(330)
	__vue_script__ = __webpack_require__(332)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/pullRefreshScroll.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(333)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-64c190de/pullRefreshScroll.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(331);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./pullRefreshScroll.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./pullRefreshScroll.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nheader {\n    position: relative;\n    z-index: 100;\n}\n.wrapper-example-refresh-scroll {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    padding-top: 0.45rem;\n    top: 0px;\n    left: 0px;\n    box-sizing: border-box;\n}\n\n.wrapper-example-refresh-scroll .wrapper-area-content {\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n}\n\n.wrapper-example-refresh-scroll .wrapper-area-content li {\n    height: 0.4rem;\n    line-height: 0.4rem;\n    border-bottom: solid 1px #ccc;\n    padding-left: 0.1rem;\n    color: #666;\n}\n\n.wrapper-example-refresh-scroll .wrapper-area-content li: last-child {\n    border-bottom-width: 0px;\n}\n\n.wrapper-example-refresh-scroll .wrapper-area-content .wrapper-area {\n    padding: 0px;\n    margin: 0px;\n}\n", ""]);

	// exports


/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _hometitle = __webpack_require__(16);

	var _hometitle2 = _interopRequireDefault(_hometitle);

	var _mvui = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//     <div class="body-wrapper">
	//         <Hometitle>PullRefreshScroll</Hometitle>
	//         <div class="wrapper-example wrapper-example-refresh-scroll">
	//             <div class="wrapper-area-content" id="parent">
	//                 <Scroll :pull-refresh="true" @on-refresh="pullRefresh" :refresh-status.sync="status">
	//                     <div slot="down">我是down按钮</div>
	//                     <div slot="up">我是up按钮</div>
	//                     <div slot="load">我是loadding</div>
	//                     <ul>
	//                         <li>Pretty row 1</li>
	//                         <li>Pretty row 2</li>
	//                         <li>Pretty row 3</li>
	//                         <li>Pretty row 4</li>
	//                         <li>Pretty row 5</li>
	//                         <li>Pretty row 6</li>
	//                         <li>Pretty row 7</li>
	//                         <li>Pretty row 8</li>
	//                         <li>Pretty row 9</li>
	//                         <li>Pretty row 10</li>
	//                         <li>Pretty row 11</li>
	//                         <li>Pretty row 12</li>
	//                         <li>Pretty row 13</li>
	//                         <li>Pretty row 14</li>
	//                         <li>Pretty row 15</li>
	//                         <li>Pretty row 16</li>
	//                         <li>Pretty row 17</li>
	//                         <li>Pretty row 18</li>
	//                         <li>Pretty row 19</li>
	//                         <li>Pretty row 20</li>
	//                         <li>Pretty row 21</li>
	//                         <li>Pretty row 22</li>
	//                         <li>Pretty row 23</li>
	//                         <li>Pretty row 24</li>
	//                         <li>Pretty row 25</li>
	//                         <li>Pretty row 26</li>
	//                         <li>Pretty row 27</li>
	//                         <li>Pretty row 28</li>
	//                         <li>Pretty row 29</li>
	//                         <li>Pretty row 30</li>
	//                         <li>Pretty row 31</li>
	//                         <li>Pretty row 32</li>
	//                         <li>Pretty row 33</li>
	//                         <li>Pretty row 34</li>
	//                         <li>Pretty row 35</li>
	//                         <li>Pretty row 36</li>
	//                         <li>Pretty row 37</li>
	//                         <li>Pretty row 38</li>
	//                         <li>Pretty row 39</li>
	//                         <li>Pretty row 40</li>
	//                         <li>Pretty row 41</li>
	//                         <li>Pretty row 42</li>
	//                         <li>Pretty row 43</li>
	//                         <li>Pretty row 44</li>
	//                         <li>Pretty row 45</li>
	//                         <li>Pretty row 46</li>
	//                         <li>Pretty row 47</li>
	//                         <li>Pretty row 48</li>
	//                         <li>Pretty row 49</li>
	//                         <li>Pretty row 50</li>
	//                     </ul>
	//                 </Scroll>
	//             </div>
	//         </div>
	// </template>
	// <script>
	exports.default = {
	    components: {
	        Hometitle: _hometitle2.default,
	        Scroll: _mvui.Scroll,
	        Pullrefresh: _mvui.Pullrefresh,
	        Button: _mvui.Button
	    },
	    data: function data() {
	        return {
	            status: 'ready'
	        };
	    },

	    methods: {
	        pullRefresh: function pullRefresh(e) {
	            var self = this;
	            setTimeout(function () {
	                self.status = 'ready';
	            }, 1000);
	        }
	    }
	};
	// </script>
	// <style>
	// header {
	//     position: relative;
	//     z-index: 100;
	// }
	// .wrapper-example-refresh-scroll {
	//     position: fixed;
	//     width: 100%;
	//     height: 100%;
	//     padding-top: 0.45rem;
	//     top: 0px;
	//     left: 0px;
	//     box-sizing: border-box;
	// }
	//
	// .wrapper-example-refresh-scroll .wrapper-area-content {
	//     width: 100%;
	//     height: 100%;
	//     overflow: hidden;
	// }
	//
	// .wrapper-example-refresh-scroll .wrapper-area-content li {
	//     height: 0.4rem;
	//     line-height: 0.4rem;
	//     border-bottom: solid 1px #ccc;
	//     padding-left: 0.1rem;
	//     color: #666;
	// }
	//
	// .wrapper-example-refresh-scroll .wrapper-area-content li: last-child {
	//     border-bottom-width: 0px;
	// }
	//
	// .wrapper-example-refresh-scroll .wrapper-area-content .wrapper-area {
	//     padding: 0px;
	//     margin: 0px;
	// }
	// </style>

/***/ },
/* 333 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"body-wrapper\">\n    <Hometitle>PullRefreshScroll</Hometitle>\n    <div class=\"wrapper-example wrapper-example-refresh-scroll\">\n        <div class=\"wrapper-area-content\" id=\"parent\">\n            <Scroll :pull-refresh=\"true\" @on-refresh=\"pullRefresh\" :refresh-status.sync=\"status\">\n                <div slot=\"down\">我是down按钮</div>\n                <div slot=\"up\">我是up按钮</div>\n                <div slot=\"load\">我是loadding</div>\n                <ul>\n                    <li>Pretty row 1</li>\n                    <li>Pretty row 2</li>\n                    <li>Pretty row 3</li>\n                    <li>Pretty row 4</li>\n                    <li>Pretty row 5</li>\n                    <li>Pretty row 6</li>\n                    <li>Pretty row 7</li>\n                    <li>Pretty row 8</li>\n                    <li>Pretty row 9</li>\n                    <li>Pretty row 10</li>\n                    <li>Pretty row 11</li>\n                    <li>Pretty row 12</li>\n                    <li>Pretty row 13</li>\n                    <li>Pretty row 14</li>\n                    <li>Pretty row 15</li>\n                    <li>Pretty row 16</li>\n                    <li>Pretty row 17</li>\n                    <li>Pretty row 18</li>\n                    <li>Pretty row 19</li>\n                    <li>Pretty row 20</li>\n                    <li>Pretty row 21</li>\n                    <li>Pretty row 22</li>\n                    <li>Pretty row 23</li>\n                    <li>Pretty row 24</li>\n                    <li>Pretty row 25</li>\n                    <li>Pretty row 26</li>\n                    <li>Pretty row 27</li>\n                    <li>Pretty row 28</li>\n                    <li>Pretty row 29</li>\n                    <li>Pretty row 30</li>\n                    <li>Pretty row 31</li>\n                    <li>Pretty row 32</li>\n                    <li>Pretty row 33</li>\n                    <li>Pretty row 34</li>\n                    <li>Pretty row 35</li>\n                    <li>Pretty row 36</li>\n                    <li>Pretty row 37</li>\n                    <li>Pretty row 38</li>\n                    <li>Pretty row 39</li>\n                    <li>Pretty row 40</li>\n                    <li>Pretty row 41</li>\n                    <li>Pretty row 42</li>\n                    <li>Pretty row 43</li>\n                    <li>Pretty row 44</li>\n                    <li>Pretty row 45</li>\n                    <li>Pretty row 46</li>\n                    <li>Pretty row 47</li>\n                    <li>Pretty row 48</li>\n                    <li>Pretty row 49</li>\n                    <li>Pretty row 50</li>\n                </ul>\n            </Scroll>\n        </div>\n    </div>\n";

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(335)
	__vue_script__ = __webpack_require__(337)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/pullLoad.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(338)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-98d26426/pullLoad.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(336);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./pullLoad.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./pullLoad.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.wrapper-example-refresh {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    padding-top: 0.45rem;\n    top: 0px;\n    left: 0px;\n    box-sizing: border-box;\n}\n\n.wrapper-example-refresh .wrapper-area-content {\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n}\n\n.wrapper-example-refresh .wrapper-area-content li {\n    height: 0.4rem;\n    line-height: 0.4rem;\n    border-bottom: solid 1px #ccc;\n    padding-left: 0.1rem;\n    color: #666;\n}\n\n.wrapper-example-refresh .wrapper-area-content li: last-child {\n    border-bottom-width: 0px;\n}\n\n.wrapper-example-refresh .wrapper-area-content .wrapper-area {\n    padding: 0px;\n    margin: 0px;\n}\n", ""]);

	// exports


/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _hometitle = __webpack_require__(16);

	var _hometitle2 = _interopRequireDefault(_hometitle);

	var _mvui = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//     <div class="body-wrapper">
	//         <Hometitle>PullLoad</Hometitle>
	//         <div class="wrapper-example wrapper-example-refresh">
	//             <div class="wrapper-area-content" id="parent">
	//                 <ul>
	//                     <li><a v-link="{path:'/pullLoadWindow' , activeClass:'active'}">上拉加载默认滚动条</a></li>
	//                     <li><a v-link="{path:'/pullLoadElem' , activeClass:'active'}">上拉加载元素滚动条</a></li>
	//                     <li><a v-link="{path:'/pullLoadScroll' , activeClass:'active'}">上拉加载Scroll滚动条</a></li>
	//                 </ul>
	//             </div>
	//         </div>
	// </template>
	// <script>
	exports.default = {
	    components: {
	        Hometitle: _hometitle2.default,
	        Pullrefresh: _mvui.Pullrefresh,
	        Button: _mvui.Button
	    },
	    data: function data() {
	        return {
	            selected: true,
	            status: 0
	        };
	    }
	};
	// </script>
	// <style>
	// .wrapper-example-refresh {
	//     position: fixed;
	//     width: 100%;
	//     height: 100%;
	//     padding-top: 0.45rem;
	//     top: 0px;
	//     left: 0px;
	//     box-sizing: border-box;
	// }
	//
	// .wrapper-example-refresh .wrapper-area-content {
	//     width: 100%;
	//     height: 100%;
	//     overflow: auto;
	// }
	//
	// .wrapper-example-refresh .wrapper-area-content li {
	//     height: 0.4rem;
	//     line-height: 0.4rem;
	//     border-bottom: solid 1px #ccc;
	//     padding-left: 0.1rem;
	//     color: #666;
	// }
	//
	// .wrapper-example-refresh .wrapper-area-content li: last-child {
	//     border-bottom-width: 0px;
	// }
	//
	// .wrapper-example-refresh .wrapper-area-content .wrapper-area {
	//     padding: 0px;
	//     margin: 0px;
	// }
	// </style>

/***/ },
/* 338 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"body-wrapper\">\n    <Hometitle>PullLoad</Hometitle>\n    <div class=\"wrapper-example wrapper-example-refresh\">\n        <div class=\"wrapper-area-content\" id=\"parent\">\n            <ul>\n                <li><a v-link=\"{path:'/pullLoadWindow' , activeClass:'active'}\">上拉加载默认滚动条</a></li>\n                <li><a v-link=\"{path:'/pullLoadElem' , activeClass:'active'}\">上拉加载元素滚动条</a></li>\n                <li><a v-link=\"{path:'/pullLoadScroll' , activeClass:'active'}\">上拉加载Scroll滚动条</a></li>\n            </ul>\n        </div>\n    </div>\n";

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(340)
	__vue_script__ = __webpack_require__(342)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/pullLoadWindow.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(343)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-5c130b86/pullLoadWindow.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(341);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./pullLoadWindow.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./pullLoadWindow.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.wrapper-example-load-window .wrapper-area-content li {\n    height: 0.4rem;\n    line-height: 0.4rem;\n    border-bottom: solid 1px #ccc;\n    padding-left: 0.1rem;\n    color: #666;\n}\n\n.wrapper-example-load-window .wrapper-area-content li: last-child {\n    border-bottom-width: 0px;\n}\n\n.wrapper-example-load-window .wrapper-area-content .wrapper-area {\n    padding: 0px;\n    margin: 0px;\n}\n", ""]);

	// exports


/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _hometitle = __webpack_require__(16);

	var _hometitle2 = _interopRequireDefault(_hometitle);

	var _mvui = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//     <div class="body-wrapper">
	//         <Hometitle>PullLoadWindow</Hometitle>
	//         <div class="wrapper-example wrapper-example-load-window">
	//             <div class="wrapper-area-content" id="parent">
	//                 <ul>
	//                     <li v-for="(key, value) in data">
	//                         {{ value.message }} {{ key }}
	//                     </li>
	//                 </ul>
	//                 <Pullload scroll="window" :status.sync="status" @on-load="loaded"></Pullload>
	//             </div>
	//         </div>
	// </template>
	// <script>
	exports.default = {
	    components: {
	        Hometitle: _hometitle2.default,
	        Pullload: _mvui.Pullload,
	        Button: _mvui.Button
	    },
	    data: function data() {
	        return {
	            status: 'ready',
	            data: [{ 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }]
	        };
	    },

	    methods: {
	        loaded: function loaded() {
	            var self = this;
	            setTimeout(function () {
	                self.status = 'end';
	                self.data.push({ 'message': '我是消息' });
	                self.data.push({ 'message': '我是消息' });
	                self.data.push({ 'message': '我是消息' });
	                self.data.push({ 'message': '我是消息' });
	                self.data.push({ 'message': '我是消息' });
	                self.data.push({ 'message': '我是消息' });
	                self.data.push({ 'message': '我是消息' });
	                self.data.push({ 'message': '我是消息' });
	                self.data.push({ 'message': '我是消息' });
	            }, 1000);
	        }
	    }
	};
	// </script>
	// <style>
	//
	// .wrapper-example-load-window .wrapper-area-content li {
	//     height: 0.4rem;
	//     line-height: 0.4rem;
	//     border-bottom: solid 1px #ccc;
	//     padding-left: 0.1rem;
	//     color: #666;
	// }
	//
	// .wrapper-example-load-window .wrapper-area-content li: last-child {
	//     border-bottom-width: 0px;
	// }
	//
	// .wrapper-example-load-window .wrapper-area-content .wrapper-area {
	//     padding: 0px;
	//     margin: 0px;
	// }
	// </style>

/***/ },
/* 343 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"body-wrapper\">\n    <Hometitle>PullLoadWindow</Hometitle>\n    <div class=\"wrapper-example wrapper-example-load-window\">\n        <div class=\"wrapper-area-content\" id=\"parent\">\n            <ul>\n                <li v-for=\"(key, value) in data\">\n                    {{ value.message }} {{ key }}\n                </li>\n            </ul>\n            <Pullload scroll=\"window\" :status.sync=\"status\" @on-load=\"loaded\"></Pullload>\n        </div>\n    </div>\n";

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(345)
	__vue_script__ = __webpack_require__(347)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/pullLoadElem.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(348)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-77eaab9c/pullLoadElem.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(346);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./pullLoadElem.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./pullLoadElem.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.wrapper-example-load-elem {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    padding-top: 0.45rem;\n    top: 0px;\n    left: 0px;\n    border-top: solid 1px #ccc;\n    box-sizing: border-box;\n}\n\n.wrapper-example-load-elem .wrapper-area-content {\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n}\n\n.wrapper-example-load-elem .wrapper-area-content li {\n    height: 0.4rem;\n    line-height: 0.4rem;\n    border-bottom: solid 1px #ccc;\n    padding-left: 0.1rem;\n    color: #666;\n}\n\n.wrapper-example-load-elem .wrapper-area-content li: last-child {\n    border-bottom-width: 0px;\n}\n\n.wrapper-example-load-elem .wrapper-area-content .wrapper-area {\n    padding: 0px;\n    margin: 0px;\n}\n", ""]);

	// exports


/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _hometitle = __webpack_require__(16);

	var _hometitle2 = _interopRequireDefault(_hometitle);

	var _mvui = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//     <div class="body-wrapper">
	//         <Hometitle>PullLoadElem</Hometitle>
	//         <div class="wrapper-example wrapper-example-load-elem">
	//             <div class="wrapper-area-content" id="parent">
	//                     <ul>
	//                         <li v-for="(key, value) in data">
	//                             {{ value.message }} {{ key }}
	//                         </li>
	//                     </ul>
	//                     <Pullload scroll="other" :status.sync="status" @on-load="loaded"></Pullload>
	//             </div>
	//         </div>
	// </template>
	// <script>
	exports.default = {
	    components: {
	        Hometitle: _hometitle2.default,
	        Scroll: _mvui.Scroll,
	        Pullload: _mvui.Pullload,
	        Button: _mvui.Button
	    },
	    data: function data() {
	        return {
	            status: 'ready',
	            data: [{ 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }]
	        };
	    },

	    methods: {
	        loaded: function loaded() {
	            var self = this;
	            setTimeout(function () {
	                self.status = 'ready';
	                self.data.push({ 'message': '我是消息' });
	                self.data.push({ 'message': '我是消息' });
	                self.data.push({ 'message': '我是消息' });
	                self.data.push({ 'message': '我是消息' });
	                self.data.push({ 'message': '我是消息' });
	                self.data.push({ 'message': '我是消息' });
	                self.data.push({ 'message': '我是消息' });
	                self.data.push({ 'message': '我是消息' });
	                self.data.push({ 'message': '我是消息' });
	            }, 1000);
	        }
	    }
	};
	// </script>
	// <style>
	// .wrapper-example-load-elem {
	//     position: fixed;
	//     width: 100%;
	//     height: 100%;
	//     padding-top: 0.45rem;
	//     top: 0px;
	//     left: 0px;
	//     border-top: solid 1px #ccc;
	//     box-sizing: border-box;
	// }
	//
	// .wrapper-example-load-elem .wrapper-area-content {
	//     width: 100%;
	//     height: 100%;
	//     overflow: auto;
	// }
	//
	// .wrapper-example-load-elem .wrapper-area-content li {
	//     height: 0.4rem;
	//     line-height: 0.4rem;
	//     border-bottom: solid 1px #ccc;
	//     padding-left: 0.1rem;
	//     color: #666;
	// }
	//
	// .wrapper-example-load-elem .wrapper-area-content li: last-child {
	//     border-bottom-width: 0px;
	// }
	//
	// .wrapper-example-load-elem .wrapper-area-content .wrapper-area {
	//     padding: 0px;
	//     margin: 0px;
	// }
	// </style>

/***/ },
/* 348 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"body-wrapper\">\n    <Hometitle>PullLoadElem</Hometitle>\n    <div class=\"wrapper-example wrapper-example-load-elem\">\n        <div class=\"wrapper-area-content\" id=\"parent\">\n                <ul>\n                    <li v-for=\"(key, value) in data\">\n                        {{ value.message }} {{ key }}\n                    </li>\n                </ul>\n                <Pullload scroll=\"other\" :status.sync=\"status\" @on-load=\"loaded\"></Pullload>\n        </div>\n    </div>\n";

/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(350)
	__vue_script__ = __webpack_require__(352)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/pullLoadScroll.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(353)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-66e5ce9a/pullLoadScroll.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(351);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./pullLoadScroll.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./pullLoadScroll.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.wrapper-example-load-scroll {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    padding-top: 0.45rem;\n    top: 0px;\n    left: 0px;\n    box-sizing: border-box;\n}\n\n.wrapper-example-load-scroll .wrapper-area-content {\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n}\n\n.wrapper-example-load-scroll .wrapper-area-content li {\n    height: 0.4rem;\n    line-height: 0.4rem;\n    border-bottom: solid 1px #ccc;\n    padding-left: 0.1rem;\n    color: #666;\n}\n\n.wrapper-example-load-scroll .wrapper-area-content li: last-child {\n    border-bottom-width: 0px;\n}\n\n.wrapper-example-load-scroll .wrapper-area-content .wrapper-area {\n    padding: 0px;\n    margin: 0px;\n}\n", ""]);

	// exports


/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _hometitle = __webpack_require__(16);

	var _hometitle2 = _interopRequireDefault(_hometitle);

	var _mvui = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//     <div class="body-wrapper">
	//         <Hometitle>PullLoadScroll</Hometitle>
	//         <div class="wrapper-example wrapper-example-load-scroll">
	//             <div class="wrapper-area-content" id="parent">
	//                 <Scroll :size.sync="size" :is-refresh.sync="isRefresh">
	//                     <div slot="down">我是down按钮</div>
	//                     <div slot="up">我是up按钮</div>
	//                     <div slot="load">我是loadding</div>
	//                     <ul>
	//                         <li v-for="(key, value) in data">
	//                             {{ value.message }} {{ key }}
	//                         </li>
	//                     </ul>
	//                     <Pullload scroll="scroll" :size.sync="size" :status.sync="status" @on-load="loaded"></Pullload>
	//                 </Scroll>
	//             </div>
	//         </div>
	// </template>
	// <script>
	exports.default = {
	    components: {
	        Hometitle: _hometitle2.default,
	        Scroll: _mvui.Scroll,
	        Pullload: _mvui.Pullload,
	        Button: _mvui.Button
	    },
	    data: function data() {
	        return {
	            status: 'ready',
	            size: 0,
	            isRefresh: false,
	            data: [{ 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }, { 'message': '我是消息' }]
	        };
	    },

	    methods: {
	        loaded: function loaded() {
	            var self = this;
	            setTimeout(function () {
	                self.status = 'end';
	                self.data.push({ 'message': '我是消息' });
	                self.data.push({ 'message': '我是消息' });
	                self.data.push({ 'message': '我是消息' });
	                self.data.push({ 'message': '我是消息' });
	                self.data.push({ 'message': '我是消息' });
	                self.data.push({ 'message': '我是消息' });
	                self.data.push({ 'message': '我是消息' });
	                self.data.push({ 'message': '我是消息' });
	                self.data.push({ 'message': '我是消息' });
	                debugger;
	                self.isRefresh = true;
	            }, 1000);
	        }
	    }
	};
	// </script>
	// <style>
	// .wrapper-example-load-scroll {
	//     position: fixed;
	//     width: 100%;
	//     height: 100%;
	//     padding-top: 0.45rem;
	//     top: 0px;
	//     left: 0px;
	//     box-sizing: border-box;
	// }
	//
	// .wrapper-example-load-scroll .wrapper-area-content {
	//     width: 100%;
	//     height: 100%;
	//     overflow: hidden;
	// }
	//
	// .wrapper-example-load-scroll .wrapper-area-content li {
	//     height: 0.4rem;
	//     line-height: 0.4rem;
	//     border-bottom: solid 1px #ccc;
	//     padding-left: 0.1rem;
	//     color: #666;
	// }
	//
	// .wrapper-example-load-scroll .wrapper-area-content li: last-child {
	//     border-bottom-width: 0px;
	// }
	//
	// .wrapper-example-load-scroll .wrapper-area-content .wrapper-area {
	//     padding: 0px;
	//     margin: 0px;
	// }
	// </style>

/***/ },
/* 353 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"body-wrapper\">\n    <Hometitle>PullLoadScroll</Hometitle>\n    <div class=\"wrapper-example wrapper-example-load-scroll\">\n        <div class=\"wrapper-area-content\" id=\"parent\">\n            <Scroll :size.sync=\"size\" :is-refresh.sync=\"isRefresh\">\n                <div slot=\"down\">我是down按钮</div>\n                <div slot=\"up\">我是up按钮</div>\n                <div slot=\"load\">我是loadding</div>\n                <ul>\n                    <li v-for=\"(key, value) in data\">\n                        {{ value.message }} {{ key }}\n                    </li>\n                </ul>\n                <Pullload scroll=\"scroll\" :size.sync=\"size\" :status.sync=\"status\" @on-load=\"loaded\"></Pullload>\n            </Scroll>\n        </div>\n    </div>\n";

/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(355)
	__vue_script__ = __webpack_require__(357)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/slider.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(358)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-04648983/slider.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(356);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./slider.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./slider.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nheader {\n    position: relative;\n    z-index: 100;\n}\n.wrapper-example-slider {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    padding-top: 0.45rem;\n    top: 0px;\n    left: 0px;\n    box-sizing: border-box;\n}\n\n.wrapper-example-slider .wrapper-area-content {\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n}\n\n.wrapper-example-slider .wrapper-area-content li {\n    height: 0.4rem;\n    line-height: 0.4rem;\n    border-bottom: solid 1px #ccc;\n    padding-left: 0.1rem;\n    color: #666;\n}\n\n.wrapper-example-slider .wrapper-area-content li: last-child {\n    border-bottom-width: 0px;\n}\n\n.wrapper-example-slider .wrapper-area-content .wrapper-area {\n    padding: 0px;\n    margin: 0px;\n}\n", ""]);

	// exports


/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _hometitle = __webpack_require__(16);

	var _hometitle2 = _interopRequireDefault(_hometitle);

	var _mvui = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//     <div class="body-wrapper">
	//         <Hometitle>lider</Hometitle>
	//         <div class="wrapper-example wrapper-example-slider">
	//             <div class="wrapper-area-content" id="parent">
	//                 <ul>
	//                     <li><a v-link="{path:'/sliderY' , activeClass:'active'}">垂直滚动</a></li>
	//                     <li><a v-link="{path:'/sliderX' , activeClass:'active'}">横向滚动</a></li>
	//                 </ul>
	//             </div>
	//         </div>
	// </template>
	// <script>
	exports.default = {
	    components: {
	        Hometitle: _hometitle2.default,
	        Pullrefresh: _mvui.Pullrefresh,
	        Button: _mvui.Button
	    },
	    data: function data() {
	        return {
	            selected: true,
	            status: 0
	        };
	    }
	};
	// </script>
	// <style>
	// header {
	//     position: relative;
	//     z-index: 100;
	// }
	// .wrapper-example-slider {
	//     position: fixed;
	//     width: 100%;
	//     height: 100%;
	//     padding-top: 0.45rem;
	//     top: 0px;
	//     left: 0px;
	//     box-sizing: border-box;
	// }
	//
	// .wrapper-example-slider .wrapper-area-content {
	//     width: 100%;
	//     height: 100%;
	//     overflow: auto;
	// }
	//
	// .wrapper-example-slider .wrapper-area-content li {
	//     height: 0.4rem;
	//     line-height: 0.4rem;
	//     border-bottom: solid 1px #ccc;
	//     padding-left: 0.1rem;
	//     color: #666;
	// }
	//
	// .wrapper-example-slider .wrapper-area-content li: last-child {
	//     border-bottom-width: 0px;
	// }
	//
	// .wrapper-example-slider .wrapper-area-content .wrapper-area {
	//     padding: 0px;
	//     margin: 0px;
	// }
	// </style>

/***/ },
/* 358 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"body-wrapper\">\n    <Hometitle>lider</Hometitle>\n    <div class=\"wrapper-example wrapper-example-slider\">\n        <div class=\"wrapper-area-content\" id=\"parent\">\n            <ul>\n                <li><a v-link=\"{path:'/sliderY' , activeClass:'active'}\">垂直滚动</a></li>\n                <li><a v-link=\"{path:'/sliderX' , activeClass:'active'}\">横向滚动</a></li>\n            </ul>\n        </div>\n    </div>\n";

/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(360)
	__vue_script__ = __webpack_require__(362)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/sliderY.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(363)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-eb2c3634/sliderY.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(361);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./sliderY.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./sliderY.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.wrapper-example-slider-y {\n    width: 100%;\n    top: 0px;\n    left: 0px;\n    box-sizing: border-box;\n}\n.wrapper-example-slider-y .mv-slider{\n    height: 214px;\n}\n.wrapper-example-slider-y .wrapper-area-content {\n    width: 100%;\n}\n\n.wrapper-example-slider-y .wrapper-area-content li {\n    border-bottom: solid 1px #ccc;\n    color: #666;\n}\n\n.wrapper-example-slider-y .wrapper-area-content li: last-child {\n    border-bottom-width: 0px;\n}\n\n.wrapper-example-slider-y .wrapper-area-content .wrapper-area {\n    padding: 0px;\n    margin: 0px;\n}\n", ""]);

	// exports


/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _hometitle = __webpack_require__(16);

	var _hometitle2 = _interopRequireDefault(_hometitle);

	var _mvui = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//     <div class="body-wrapper">
	//         <Hometitle>Slider</Hometitle>
	//         <div class="wrapper-example wrapper-example-slider-y">
	//             <div class="wrapper-area-content" id="parent">
	//                 <Slider direction="y">
	//                     <li>
	//                         <img src="/static/click1.jpg"/>
	//                         <span>文案1</span>
	//                     </li>
	//                     <li>
	//                         <img src="/static/click1.jpg"/>
	//                         <span>文案2</span>
	//                     </li>
	//                     <li>
	//                         <img src="/static/click1.jpg"/>
	//                         <span>文案3</span>
	//                     </li>
	//                     <li>
	//                         <img src="/static/click1.jpg"/>
	//                         <span>文案4</span>
	//                     </li>
	//                 </Slider>
	//             </div>
	//         </div>
	// </template>
	// <script>
	exports.default = {
	    components: {
	        Hometitle: _hometitle2.default,
	        Button: _mvui.Button,
	        Slider: _mvui.Slider
	    }
	};
	// </script>
	// <style>
	// .wrapper-example-slider-y {
	//     width: 100%;
	//     top: 0px;
	//     left: 0px;
	//     box-sizing: border-box;
	// }
	// .wrapper-example-slider-y .mv-slider{
	//     height: 214px;
	// }
	// .wrapper-example-slider-y .wrapper-area-content {
	//     width: 100%;
	// }
	//
	// .wrapper-example-slider-y .wrapper-area-content li {
	//     border-bottom: solid 1px #ccc;
	//     color: #666;
	// }
	//
	// .wrapper-example-slider-y .wrapper-area-content li: last-child {
	//     border-bottom-width: 0px;
	// }
	//
	// .wrapper-example-slider-y .wrapper-area-content .wrapper-area {
	//     padding: 0px;
	//     margin: 0px;
	// }
	// </style>

/***/ },
/* 363 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"body-wrapper\">\n    <Hometitle>Slider</Hometitle>\n    <div class=\"wrapper-example wrapper-example-slider-y\">\n        <div class=\"wrapper-area-content\" id=\"parent\">\n            <Slider direction=\"y\">\n                <li>\n                    <img src=\"/static/click1.jpg\"/>\n                    <span>文案1</span>\n                </li>\n                <li>\n                    <img src=\"/static/click1.jpg\"/>\n                    <span>文案2</span>\n                </li>\n                <li>\n                    <img src=\"/static/click1.jpg\"/>\n                    <span>文案3</span>\n                </li>\n                <li>\n                    <img src=\"/static/click1.jpg\"/>\n                    <span>文案4</span>\n                </li>\n            </Slider>\n        </div>\n    </div>\n";

/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(365)
	__vue_script__ = __webpack_require__(367)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/sliderX.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(368)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-eb486536/sliderX.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 365 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(366);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./sliderX.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./sliderX.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 366 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.wrapper-example-slider-x {\n    width: 100%;\n    top: 0px;\n    left: 0px;\n    box-sizing: border-box;\n}\n\n.wrapper-example-slider-x .wrapper-area-content {\n    width: 100%;\n}\n\n.wrapper-example-slider-x .wrapper-area-content li {\n    border-bottom: solid 1px #ccc;\n    color: #666;\n}\n\n.wrapper-example-slider-x .wrapper-area-content li: last-child {\n    border-bottom-width: 0px;\n}\n\n.wrapper-example-slider-x .wrapper-area-content .wrapper-area {\n    padding: 0px;\n    margin: 0px;\n}\n", ""]);

	// exports


/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _hometitle = __webpack_require__(16);

	var _hometitle2 = _interopRequireDefault(_hometitle);

	var _mvui = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//     <div class="body-wrapper">
	//         <Hometitle>Slider</Hometitle>
	//         <div class="wrapper-example wrapper-example-slider-x">
	//             <div class="wrapper-area-content" id="parent">
	//                 <Slider>
	//                     <li>
	//                         <img src="/static/click1.jpg"/>
	//                         <span>文案1</span>
	//                     </li>
	//                     <li>
	//                         <img src="/static/click1.jpg"/>
	//                         <span>文案2</span>
	//                     </li>
	//                     <li>
	//                         <img src="/static/click1.jpg"/>
	//                         <span>文案3</span>
	//                     </li>
	//                     <li>
	//                         <img src="/static/click1.jpg"/>
	//                         <span>文案4</span>
	//                     </li>
	//                 </Slider>
	//             </div>
	//         </div>
	// </template>
	// <script>
	exports.default = {
	    components: {
	        Hometitle: _hometitle2.default,
	        Button: _mvui.Button,
	        Slider: _mvui.Slider
	    }
	};
	// </script>
	// <style>
	// .wrapper-example-slider-x {
	//     width: 100%;
	//     top: 0px;
	//     left: 0px;
	//     box-sizing: border-box;
	// }
	//
	// .wrapper-example-slider-x .wrapper-area-content {
	//     width: 100%;
	// }
	//
	// .wrapper-example-slider-x .wrapper-area-content li {
	//     border-bottom: solid 1px #ccc;
	//     color: #666;
	// }
	//
	// .wrapper-example-slider-x .wrapper-area-content li: last-child {
	//     border-bottom-width: 0px;
	// }
	//
	// .wrapper-example-slider-x .wrapper-area-content .wrapper-area {
	//     padding: 0px;
	//     margin: 0px;
	// }
	// </style>

/***/ },
/* 368 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"body-wrapper\">\n    <Hometitle>Slider</Hometitle>\n    <div class=\"wrapper-example wrapper-example-slider-x\">\n        <div class=\"wrapper-area-content\" id=\"parent\">\n            <Slider>\n                <li>\n                    <img src=\"/static/click1.jpg\"/>\n                    <span>文案1</span>\n                </li>\n                <li>\n                    <img src=\"/static/click1.jpg\"/>\n                    <span>文案2</span>\n                </li>\n                <li>\n                    <img src=\"/static/click1.jpg\"/>\n                    <span>文案3</span>\n                </li>\n                <li>\n                    <img src=\"/static/click1.jpg\"/>\n                    <span>文案4</span>\n                </li>\n            </Slider>\n        </div>\n    </div>\n";

/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(370)
	__vue_script__ = __webpack_require__(372)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/uploader.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(373)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-14dcb3e0/uploader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(371);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./uploader.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./uploader.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.wrapper-example-load-scroll {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    padding-top: 0.45rem;\n    top: 0px;\n    left: 0px;\n    box-sizing: border-box;\n}\n\n.wrapper-example-load-scroll .wrapper-area-content {\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n}\n\n.wrapper-example-load-scroll .wrapper-area-content li {\n    height: 0.4rem;\n    line-height: 0.4rem;\n    border-bottom: solid 1px #ccc;\n    padding-left: 0.1rem;\n    color: #666;\n}\n\n.wrapper-example-load-scroll .wrapper-area-content li: last-child {\n    border-bottom-width: 0px;\n}\n\n.wrapper-example-load-scroll .wrapper-area-content .wrapper-area {\n    padding: 0px;\n    margin: 0px;\n}\n", ""]);

	// exports


/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _hometitle = __webpack_require__(16);

	var _hometitle2 = _interopRequireDefault(_hometitle);

	var _mvui = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//     <div class="body-wrapper">
	//         <Hometitle>Uploader</Hometitle>
	//         <div class="wrapper-example">
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">单张图片</div>
	//                 <div class="wrapper-area-content">
	//                     <Uploader url="http://www.huiyi.com/upload/upload" @on-preview="preview" @on-before="before" @on-validate="validate" @on-progress="progress"  @on-error="error" @on-success="success" @on-complete="complete"></Uploader>
	//                     <img style="width: 40px;" :src="previewImage"/>
	//                 </div>
	//             </div>
	//
	//             <div class="wrapper-area">
	//                 <div class="wrapper-area-title">多张图片</div>
	//                 <div class="wrapper-area-content">
	//                     <Uploader url="http://www.huiyi.com/upload/upload" @on-preview="preview1" @on-before="before1" @on-validate="validate1" @on-progress="progress1"  @on-error="error1" @on-success="success1" @on-complete="complete1" :more="true"></Uploader>
	//                     <div v-for="item in previewImage1">
	//                         <img style="width: 40px;" :src="item"/>
	//                     </div>
	//                 </div>
	//             </div>
	//
	//         </div>
	// </template>
	// <script>
	exports.default = {
	    components: {
	        Hometitle: _hometitle2.default,
	        Uploader: _mvui.Uploader
	    },
	    data: function data() {
	        return {
	            previewImage: '',
	            previewImage1: []
	        };
	    },

	    methods: {
	        preview: function preview(file) {
	            debugger;
	            console.dir(arguments);
	            this.previewImage = file[0];
	        },
	        validate: function validate() {
	            debugger;
	            console.dir(arguments);
	        },
	        before: function before() {
	            debugger;
	            console.dir(arguments);
	        },
	        progress: function progress() {
	            debugger;
	            console.dir(arguments);
	        },
	        error: function error() {
	            debugger;
	            console.dir(arguments);
	        },
	        success: function success() {
	            debugger;
	            console.dir(arguments);
	        },
	        complete: function complete() {
	            debugger;
	            console.dir(arguments);
	        },
	        preview1: function preview1(file) {
	            debugger;
	            console.dir(arguments);
	            this.previewImage1 = file;
	        },
	        validate1: function validate1() {
	            debugger;
	            console.dir(arguments);
	        },
	        before1: function before1() {
	            debugger;
	            console.dir(arguments);
	        },
	        progress1: function progress1() {
	            debugger;
	            console.dir(arguments);
	        },
	        error1: function error1() {
	            debugger;
	            console.dir(arguments);
	        },
	        success1: function success1() {
	            debugger;
	            console.dir(arguments);
	        },
	        complete1: function complete1() {
	            debugger;
	            console.dir(arguments);
	        }
	    }
	};
	// </script>
	// <style>
	// .wrapper-example-load-scroll {
	//     position: fixed;
	//     width: 100%;
	//     height: 100%;
	//     padding-top: 0.45rem;
	//     top: 0px;
	//     left: 0px;
	//     box-sizing: border-box;
	// }
	//
	// .wrapper-example-load-scroll .wrapper-area-content {
	//     width: 100%;
	//     height: 100%;
	//     overflow: hidden;
	// }
	//
	// .wrapper-example-load-scroll .wrapper-area-content li {
	//     height: 0.4rem;
	//     line-height: 0.4rem;
	//     border-bottom: solid 1px #ccc;
	//     padding-left: 0.1rem;
	//     color: #666;
	// }
	//
	// .wrapper-example-load-scroll .wrapper-area-content li: last-child {
	//     border-bottom-width: 0px;
	// }
	//
	// .wrapper-example-load-scroll .wrapper-area-content .wrapper-area {
	//     padding: 0px;
	//     margin: 0px;
	// }
	// </style>

/***/ },
/* 373 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"body-wrapper\">\n    <Hometitle>Uploader</Hometitle>\n    <div class=\"wrapper-example\">\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">单张图片</div>\n            <div class=\"wrapper-area-content\">\n                <Uploader url=\"http://www.huiyi.com/upload/upload\" @on-preview=\"preview\" @on-before=\"before\" @on-validate=\"validate\" @on-progress=\"progress\"  @on-error=\"error\" @on-success=\"success\" @on-complete=\"complete\"></Uploader>\n                <img style=\"width: 40px;\" :src=\"previewImage\"/>\n            </div>\n        </div>\n\n        <div class=\"wrapper-area\">\n            <div class=\"wrapper-area-title\">多张图片</div>\n            <div class=\"wrapper-area-content\">\n                <Uploader url=\"http://www.huiyi.com/upload/upload\" @on-preview=\"preview1\" @on-before=\"before1\" @on-validate=\"validate1\" @on-progress=\"progress1\"  @on-error=\"error1\" @on-success=\"success1\" @on-complete=\"complete1\" :more=\"true\"></Uploader>\n                <div v-for=\"item in previewImage1\">\n                    <img style=\"width: 40px;\" :src=\"item\"/>\n                </div>\n            </div>\n        </div>\n\n    </div>\n";

/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(375)
	__vue_script__ = __webpack_require__(377)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/page.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(378)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-582006b1/page.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(376);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./page.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./page.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, ".wrapper-example-page {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  padding-top: 0.45rem;\n  top: 0px;\n  left: 0px;\n  box-sizing: border-box;\n}\n.wrapper-example-page .wrapper-area-content {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  text-align: center;\n}\n.wrapper-example-page .wrapper-area-content li {\n  height: 0.4rem;\n  line-height: 0.4rem;\n  border-bottom: solid 1px #ccc;\n  padding-left: 0.1rem;\n  color: #666;\n}\n.wrapper-example-page .wrapper-area-content li:last-child {\n  border-bottom-width: 0px;\n}\n.wrapper-example-page .wrapper-area-content .wrapper-area {\n  padding: 0px;\n  margin: 0px;\n}\n", ""]);

	// exports


/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _hometitle = __webpack_require__(16);

	var _hometitle2 = _interopRequireDefault(_hometitle);

	var _mvui = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//     <div class="body-wrapper">
	//         <Hometitle>Page</Hometitle>
	//         <div class="wrapper-example wrapper-example-page">
	//             <div class="wrapper-area-content" id="parent">
	//                 <Page :current="current" :all="all" @on-change="change"></Page>
	//             </div>
	//         </div>
	// </template>
	// <script>
	exports.default = {
	    components: {
	        Hometitle: _hometitle2.default,
	        Button: _mvui.Button,
	        Page: _mvui.Page
	    },
	    data: function data() {
	        return {
	            current: 1,
	            all: 10
	        };
	    },

	    methods: {
	        change: function change(page) {
	            console.dir(page);
	        }
	    }
	};
	// </script>
	// <style lang="less">
	// .wrapper-example-page {
	//     position: fixed;
	//     width: 100%;
	//     height: 100%;
	//     padding-top: 0.45rem;
	//     top: 0px;
	//     left: 0px;
	//     box-sizing: border-box;
	//
	//     .wrapper-area-content {
	//         width: 100%;
	//         height: 100%;
	//         overflow: hidden;
	//         text-align: center;
	//     }
	//     .wrapper-area-content li {
	//         height: 0.4rem;
	//         line-height: 0.4rem;
	//         border-bottom: solid 1px #ccc;
	//         padding-left: 0.1rem;
	//         color: #666;
	//     }
	//     .wrapper-area-content li:last-child {
	//         border-bottom-width: 0px;
	//     }
	//
	//     .wrapper-area-content .wrapper-area {
	//         padding: 0px;
	//         margin: 0px;
	//     }
	// }
	// </style>

/***/ },
/* 378 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"body-wrapper\">\n    <Hometitle>Page</Hometitle>\n    <div class=\"wrapper-example wrapper-example-page\">\n        <div class=\"wrapper-area-content\" id=\"parent\">\n            <Page :current=\"current\" :all=\"all\" @on-change=\"change\"></Page>\n        </div>\n    </div>\n";

/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(380)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/app.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(383)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-bd05e02c/app.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _stringify = __webpack_require__(381);

	var _stringify2 = _interopRequireDefault(_stringify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	// 	<div class="main">
	// 		<router-view
	// 	      keep-alive
	// 	      :transition="transitions"
	// 	    ></router-view>
	// 	</div>
	// </template>
	//
	// <script>
	var ROUTERKEY = "routerkey";
	exports.default = {
	    data: function data() {
	        return {
	            'transition': 'vux-pop-in'
	        };
	    },

	    computed: {
	        transitions: function transitions() {
	            return this.transition;
	        }
	    },
	    ready: function ready() {
	        var self = this;
	        var transDirect = 'vux-pop-in';
	        var routerData = {
	            push: function push(hashStr) {
	                var routerArr = this.get() || [];
	                if (routerArr.pop != hashStr) {
	                    routerArr.push(hashStr);
	                }
	                this.set(routerArr);
	            },
	            get: function get() {
	                return JSON.parse(window.localStorage.getItem(ROUTERKEY) || '[]');
	            },
	            set: function set(items) {
	                window.localStorage.setItem(ROUTERKEY, (0, _stringify2.default)(items));
	            },
	            pop: function pop() {
	                var routerArr = this.get();
	                routerArr.pop();
	                this.set(routerArr);
	            },
	            clear: function clear() {
	                this.set([]);
	            },
	            change: function change(hasStr) {
	                var routerArr = this.get();
	                var arrPop = routerArr.pop();
	                if (arrPop) {
	                    var newPop = routerArr.pop();
	                    if (newPop) {
	                        if (newPop == hasStr) {
	                            transDirect = 'vux-pop-out';
	                            self.transition = transDirect;
	                            this.pop();
	                        } else {
	                            transDirect = 'vux-pop-in';
	                            self.transition = transDirect;
	                            this.push(hasStr);
	                        }
	                    } else {
	                        transDirect = 'vux-pop-in';
	                        self.transition = transDirect;
	                        this.push(hasStr);
	                    }
	                } else {
	                    this.push(hasStr);
	                }

	                if (location.hash == '#!/home') {
	                    this.clear();
	                    this.push(location.hash);
	                }
	            }
	        };

	        if (window.onpopstate) {
	            (function () {
	                var oldCall = window.onpopstate;
	                window.onpopstate = function () {
	                    oldCall();
	                    routerData.change(location.hash);
	                };
	            })();
	        } else {
	            window.onpopstate = function () {
	                routerData.change(location.hash);
	            };
	        }

	        routerData.clear();
	        routerData.push(location.hash);
	    },
	    destroyed: function destroyed() {},

	    methods: {}
	};
	// </script>

/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(382), __esModule: true };

/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(53)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 383 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"main\">\n\t<router-view\n      keep-alive\n      :transition=\"transitions\"\n    ></router-view>\n</div>\n";

/***/ },
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(385)
	__vue_script__ = __webpack_require__(387)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/home.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(388)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-07eaf101/home.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 385 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(386);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./home.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./home.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, ".home-list .home-list-title {\n  height: 0.45rem;\n  line-height: 0.45rem;\n  border-bottom: 1px solid #e6e6e6;\n  padding-left: 0.1rem;\n  font-size: 0.16rem;\n  color: #aaa;\n}\n.home-list ul li {\n  height: 0.45rem;\n  line-height: 0.45rem;\n  border-bottom: 1px solid #e6e6e6;\n  padding-left: 0.2rem;\n  font-size: 0.13rem;\n  background: white;\n  color: black;\n}\n.home-list ul li a {\n  display: block;\n}\n", ""]);

	// exports


/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _hometitle = __webpack_require__(16);

	var _hometitle2 = _interopRequireDefault(_hometitle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    data: function data() {
	        return {};
	    },

	    components: {
	        Hometitle: _hometitle2.default
	    },
	    route: {
	        data: function data() {
	            /*每次切换路由，在渲染出页面前都会执行*/
	        }
	    }
	};
	// </script>
	// <style lang="less">
	//     .home-list {
	//         .home-list-title{
	//             height: 0.45rem;
	//             line-height: 0.45rem;
	//             border-bottom: 1px solid #e6e6e6;
	//             padding-left:0.1rem;
	//             font-size: 0.16rem;
	//             color: #aaa;
	//         }
	//         ul li{
	//             height: 0.45rem;
	//             line-height: 0.45rem;
	//             border-bottom: 1px solid #e6e6e6;
	//             padding-left:0.2rem;
	//             font-size: 0.13rem;
	//             background: white;
	//             color: black;
	//             a{
	//                 display: block
	//             }
	//         }
	//     }
	// </style>
	//
	// <template>
	// <div class="home">
	//     <Hometitle :icon="false"><img class="home-img" src="/static/logo.png"/></Hometitle>
	//     <div class="home-list">
	//         <div class="home-list-title">base</div>
	//         <ul>
	//             <li><a v-link="{path:'/icon' , activeClass:'active'}">Icon 图标</a></li>
	//             <li><a v-link="{path:'/button' , activeClass:'active'}">Button 按钮</a></li>
	//         </ul>
	//         <div class="home-list-title">form</div>
	//         <ul>
	//             <li><a v-link="{path:'/inputbox' , activeClass:'active'}">Inputbox 输入框</a></li>
	//             <li><a v-link="{path:'/radio' , activeClass:'active'}">Radio 单选</a></li>
	//             <li><a v-link="{path:'/checkbox' , activeClass:'active'}">Checkbox 多选</a></li>
	//             <li><a v-link="{path:'/selector' , activeClass:'active'}">Selector 下拉框</a></li>
	//             <li><a v-link="{path:'/switch' , activeClass:'active'}">Switch 开关</a></li>
	//         </ul>
	//         <div class="home-list-title">chart</div>
	//         <ul>
	//             <li><a v-link="{path:'/progress' , activeClass:'active'}">Progress 进度条</a></li>
	//             <li><a v-link="{path:'/circle' , activeClass:'active'}">Circle 进度环</a></li>
	//         </ul>
	//         <div class="home-list-title">view</div>
	//         <ul>
	//             <li><a v-link="{path:'/tip' , activeClass:'active'}">Tip 提示</a></li>
	//             <li><a v-link="{path:'/alert' , activeClass:'active'}">Alert 提示框</a></li>
	//             <li><a v-link="{path:'/modal' , activeClass:'active'}">Modal 模态框</a></li>
	//             <li><a v-link="{path:'/accordion' , activeClass:'active'}">Accordion 折叠面板</a></li>
	//         </ul>
	//         <div class="home-list-title">orther</div>
	//         <ul>
	//             <li><a v-link="{path:'/gotop' , activeClass:'active'}">Gotop 回到顶部</a></li>
	//             <li><a v-link="{path:'/loadding' , activeClass:'active'}">Loadding 加载</a></li>
	//             <li><a v-link="{path:'/scroll' , activeClass:'active'}">Scroll 滚动条</a></li>
	//             <li><a v-link="{path:'/pullRefresh' , activeClass:'active'}">PullRefresh 下拉刷新</a></li>
	//             <li><a v-link="{path:'/pullLoad' , activeClass:'active'}">PullLoad 上拉加载</a></li>
	//             <li><a v-link="{path:'/slider' , activeClass:'active'}">Slider 轮播</a></li>
	//             <li><a v-link="{path:'/uploader' , activeClass:'active'}">Uploader 上传</a></li>
	//             <li><a v-link="{path:'/page' , activeClass:'active'}">Page 分页</a></li>
	//            <!--  <li><a v-link="{path:'/lazyload' , activeClass:'active'}">LazyLoad 懒加载</a></li> -->
	//         </ul>
	//     </div>
	// </div>
	// </template>
	// <script>

/***/ },
/* 388 */
/***/ function(module, exports) {

	module.exports = "\n\n<div class=\"home\">\n    <Hometitle :icon=\"false\"><img class=\"home-img\" src=\"/static/logo.png\"/></Hometitle>\n    <div class=\"home-list\">\n        <div class=\"home-list-title\">base</div>\n        <ul>\n            <li><a v-link=\"{path:'/icon' , activeClass:'active'}\">Icon 图标</a></li>\n            <li><a v-link=\"{path:'/button' , activeClass:'active'}\">Button 按钮</a></li>\n        </ul>\n        <div class=\"home-list-title\">form</div>\n        <ul>\n            <li><a v-link=\"{path:'/inputbox' , activeClass:'active'}\">Inputbox 输入框</a></li>\n            <li><a v-link=\"{path:'/radio' , activeClass:'active'}\">Radio 单选</a></li>\n            <li><a v-link=\"{path:'/checkbox' , activeClass:'active'}\">Checkbox 多选</a></li>\n            <li><a v-link=\"{path:'/selector' , activeClass:'active'}\">Selector 下拉框</a></li>\n            <li><a v-link=\"{path:'/switch' , activeClass:'active'}\">Switch 开关</a></li>\n        </ul>\n        <div class=\"home-list-title\">chart</div>\n        <ul>\n            <li><a v-link=\"{path:'/progress' , activeClass:'active'}\">Progress 进度条</a></li>\n            <li><a v-link=\"{path:'/circle' , activeClass:'active'}\">Circle 进度环</a></li>\n        </ul>\n        <div class=\"home-list-title\">view</div>\n        <ul>\n            <li><a v-link=\"{path:'/tip' , activeClass:'active'}\">Tip 提示</a></li>\n            <li><a v-link=\"{path:'/alert' , activeClass:'active'}\">Alert 提示框</a></li>\n            <li><a v-link=\"{path:'/modal' , activeClass:'active'}\">Modal 模态框</a></li>\n            <li><a v-link=\"{path:'/accordion' , activeClass:'active'}\">Accordion 折叠面板</a></li>\n        </ul>\n        <div class=\"home-list-title\">orther</div>\n        <ul>\n            <li><a v-link=\"{path:'/gotop' , activeClass:'active'}\">Gotop 回到顶部</a></li>\n            <li><a v-link=\"{path:'/loadding' , activeClass:'active'}\">Loadding 加载</a></li>\n            <li><a v-link=\"{path:'/scroll' , activeClass:'active'}\">Scroll 滚动条</a></li>\n            <li><a v-link=\"{path:'/pullRefresh' , activeClass:'active'}\">PullRefresh 下拉刷新</a></li>\n            <li><a v-link=\"{path:'/pullLoad' , activeClass:'active'}\">PullLoad 上拉加载</a></li>\n            <li><a v-link=\"{path:'/slider' , activeClass:'active'}\">Slider 轮播</a></li>\n            <li><a v-link=\"{path:'/uploader' , activeClass:'active'}\">Uploader 上传</a></li>\n            <li><a v-link=\"{path:'/page' , activeClass:'active'}\">Page 分页</a></li>\n           <!--  <li><a v-link=\"{path:'/lazyload' , activeClass:'active'}\">LazyLoad 懒加载</a></li> -->\n        </ul>\n    </div>\n</div>\n";

/***/ }
]);