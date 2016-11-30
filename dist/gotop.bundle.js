webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(7);

	var _vue2 = _interopRequireDefault(_vue);

	var _gotop = __webpack_require__(394);

	var _gotop2 = _interopRequireDefault(_gotop);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//创建一个vue实例,挂载在body上面  

	//es6加载模块  
	new _vue2.default({
	    el: 'body',
	    components: {
	        App: _gotop2.default
	    }
	});

/***/ },

/***/ 394:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(395)
	__vue_script__ = __webpack_require__(397)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components/gotop.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(398)
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
	  var id = "_v-54cf1320/gotop.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 395:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(396);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./gotop.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./gotop.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 396:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "\n.mv-btn{\n    margin: 5px;\n}\n", ""]);

	// exports


/***/ },

/***/ 397:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _mvui = __webpack_require__(20);

	exports.default = {
	    data: function data() {
	        return {
	            message: 'Gotop Demo'
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
	        Gotop: _mvui.Gotop
	    },
	    methods: {
	        gotopCallback: function gotopCallback() {
	            alert('点击子组件');
	        }
	    }
	};
	// </script>
	// <style>
	// .mv-btn{
	//     margin: 5px;
	// }
	// </style>
	// <template>  
	//     <p>{{ message }}</p>  
	//
	//     <div>
	//         <code>
	//             gotop 主要由三个参数：<br/>
	//             class: String,<br/>
	//             style: [Object, String],<br/>
	//             disabled: Boolean,<br/>
	//             type: String,<br/>
	//             icon: String,<br/>
	//             icon-style: [Object, String],<br/>
	//
	//             class 主要指传入的类名
	//             例如.mv-btn-primary
	//         </code>
	//     </div>
	//         <div>
	//         <code>
	//             gotop 主要由三个参数：<br/>
	//             class: String,<br/>
	//             style: [Object, String],<br/>
	//             disabled: Boolean,<br/>
	//             type: String,<br/>
	//             icon: String,<br/>
	//             icon-style: [Object, String],<br/>
	//
	//             class 主要指传入的类名
	//             例如.mv-btn-primary
	//         </code>
	//     </div>
	//
	//         <div>
	//         <code>
	//             gotop 主要由三个参数：<br/>
	//             class: String,<br/>
	//             style: [Object, String],<br/>
	//             disabled: Boolean,<br/>
	//             type: String,<br/>
	//             icon: String,<br/>
	//             icon-style: [Object, String],<br/>
	//
	//             class 主要指传入的类名
	//             例如.mv-btn-primary
	//         </code>
	//     </div>
	//
	//
	//         <div>
	//         <code>
	//             gotop 主要由三个参数：<br/>
	//             class: String,<br/>
	//             style: [Object, String],<br/>
	//             disabled: Boolean,<br/>
	//             type: String,<br/>
	//             icon: String,<br/>
	//             icon-style: [Object, String],<br/>
	//
	//             class 主要指传入的类名
	//             例如.mv-btn-primary
	//         </code>
	//     </div>
	//
	//         <div>
	//         <code>
	//             gotop 主要由三个参数：<br/>
	//             class: String,<br/>
	//             style: [Object, String],<br/>
	//             disabled: Boolean,<br/>
	//             type: String,<br/>
	//             icon: String,<br/>
	//             icon-style: [Object, String],<br/>
	//
	//             class 主要指传入的类名
	//             例如.mv-btn-primary
	//         </code>
	//     </div>
	//
	//     <Gotop class="mv-btn-primary" style="font-size: 0.14rem;" type="submit" icon-style="font-size: 0.18rem;" @on-click="gotopCallback"></Gotop>
	//
	// </template>
	// <script>

/***/ },

/***/ 398:
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n<p>{{ message }}</p>  \n\n<div>\n    <code>\n        gotop 主要由三个参数：<br/>\n        class: String,<br/>\n        style: [Object, String],<br/>\n        disabled: Boolean,<br/>\n        type: String,<br/>\n        icon: String,<br/>\n        icon-style: [Object, String],<br/>\n\n        class 主要指传入的类名\n        例如.mv-btn-primary\n    </code>\n</div>\n    <div>\n    <code>\n        gotop 主要由三个参数：<br/>\n        class: String,<br/>\n        style: [Object, String],<br/>\n        disabled: Boolean,<br/>\n        type: String,<br/>\n        icon: String,<br/>\n        icon-style: [Object, String],<br/>\n\n        class 主要指传入的类名\n        例如.mv-btn-primary\n    </code>\n</div>\n\n    <div>\n    <code>\n        gotop 主要由三个参数：<br/>\n        class: String,<br/>\n        style: [Object, String],<br/>\n        disabled: Boolean,<br/>\n        type: String,<br/>\n        icon: String,<br/>\n        icon-style: [Object, String],<br/>\n\n        class 主要指传入的类名\n        例如.mv-btn-primary\n    </code>\n</div>\n\n\n    <div>\n    <code>\n        gotop 主要由三个参数：<br/>\n        class: String,<br/>\n        style: [Object, String],<br/>\n        disabled: Boolean,<br/>\n        type: String,<br/>\n        icon: String,<br/>\n        icon-style: [Object, String],<br/>\n\n        class 主要指传入的类名\n        例如.mv-btn-primary\n    </code>\n</div>\n\n    <div>\n    <code>\n        gotop 主要由三个参数：<br/>\n        class: String,<br/>\n        style: [Object, String],<br/>\n        disabled: Boolean,<br/>\n        type: String,<br/>\n        icon: String,<br/>\n        icon-style: [Object, String],<br/>\n\n        class 主要指传入的类名\n        例如.mv-btn-primary\n    </code>\n</div>\n\n<Gotop class=\"mv-btn-primary\" style=\"font-size: 0.14rem;\" type=\"submit\" icon-style=\"font-size: 0.18rem;\" @on-click=\"gotopCallback\"></Gotop>\n\n";

/***/ }

});