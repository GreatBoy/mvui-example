webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(7);

	var _vue2 = _interopRequireDefault(_vue);

	var _icon = __webpack_require__(399);

	var _icon2 = _interopRequireDefault(_icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//创建一个vue实例,挂载在body上面  

	//es6加载模块  
	new _vue2.default({
	    el: 'body',
	    components: {
	        App: _icon2.default
	    }
	});

/***/ },

/***/ 399:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(400)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components/icon.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(401)
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
	  var id = "_v-1fe12b74/icon.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 400:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _mvui = __webpack_require__(20);

	exports.default = {
	    data: function data() {
	        return {
	            message: 'Icon Demo'
	        };
	    },

	    computed: {
	        iconStyle: function iconStyle() {
	            return {
	                "color": "red",
	                "margin-top": "12px"
	            };
	        }
	    },
	    components: {
	        Icon: _mvui.Icon
	    }
	};
	// </script>
	// <template>  
	//     <p>{{ message }}</p>  
	//
	//     <div>
	//         icon 有两种个props，一个class 传class类名 , 例如： ion-android-mail test-class
	//         <br/>第二个 参数style，传样式，例如font-size: 12px;color: blue 或者直接传对象
	//     </div>
	//
	//     <div>参数一：ion-android-mail test-class  参数二： font-size: 12px;color: blue;</div>
	//     <Icon class="ion-android-mail test-class" style="font-size: 12px;color: blue;"></Icon>
	//
	//     <div>参数一：ion-android-mail test-class  参数二： {"color":"red","margin-top":"12px"}</div>
	//     <Icon class="ion-android-mail test-class" :style="iconStyle"></Icon>
	// </template> 
	// <script>

/***/ },

/***/ 401:
/***/ function(module, exports) {

	module.exports = "\n<p>{{ message }}</p>  \n\n<div>\n    icon 有两种个props，一个class 传class类名 , 例如： ion-android-mail test-class\n    <br/>第二个 参数style，传样式，例如font-size: 12px;color: blue 或者直接传对象\n</div>\n\n<div>参数一：ion-android-mail test-class  参数二： font-size: 12px;color: blue;</div>\n<Icon class=\"ion-android-mail test-class\" style=\"font-size: 12px;color: blue;\"></Icon>\n\n<div>参数一：ion-android-mail test-class  参数二： {\"color\":\"red\",\"margin-top\":\"12px\"}</div>\n<Icon class=\"ion-android-mail test-class\" :style=\"iconStyle\"></Icon>\n";

/***/ }

});