webpackJsonp([5],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(7);

	var _vue2 = _interopRequireDefault(_vue);

	var _modal = __webpack_require__(407);

	var _modal2 = _interopRequireDefault(_modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//创建一个vue实例,挂载在body上面  

	//es6加载模块  
	new _vue2.default({
	    el: 'body',
	    components: {
	        App: _modal2.default
	    }
	});

/***/ },

/***/ 407:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(408)
	__vue_script__ = __webpack_require__(410)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components/modal.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(411)
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
	  var id = "_v-2e99b4a0/modal.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 408:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(409);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./modal.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./modal.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 409:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "\n.mv-btn{\n    margin: 5px;\n}\n.example{\n    margin: 20px 0px;\n    background: #ecf1f4;\n}\ncode{\n    display:block;\n}\n", ""]);

	// exports


/***/ },

/***/ 410:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _mvui = __webpack_require__(20);

	exports.default = {
	    data: function data() {
	        return {
	            message: 'Modal Demo',
	            show: true
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
	    ready: function ready() {
	        var self = this;
	        setTimeout(function () {
	            self.show = false;
	        }, 3000);
	    },

	    components: {
	        Modal: _mvui.Modal
	    },
	    methods: {}
	};
	// </script>
	// <style>
	// .mv-btn{
	//     margin: 5px;
	// }
	// .example{
	//     margin: 20px 0px;
	//     background: #ecf1f4;
	// }
	// code{
	//     display:block;
	// }
	// </style>
	// <template>  
	//     <h2>{{ message }}</h2>  
	//     <div>
	//         主要由三个参数:
	//         <code>
	//             class: String 主要可以自由添加类名以及定义好的类名<br/>
	//             style: [Object, String]<br/>
	//             type: String 圆形的以及线性的动画<br/>
	//         </code>
	//     </div>
	//
	//     <div class='example'>
	//         <h5>颜色</h5>
	//         <div>Loadding 传参</div>
	//         <code>
	//              class="mv-loadding-primary"
	//         </code>
	//         <Modal :class="mv-center" :type="line" :show="show"></Modal>
	//     </div>
	// </template>
	// <script>

/***/ },

/***/ 411:
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n<h2>{{ message }}</h2>  \n<div>\n    主要由三个参数:\n    <code>\n        class: String 主要可以自由添加类名以及定义好的类名<br/>\n        style: [Object, String]<br/>\n        type: String 圆形的以及线性的动画<br/>\n    </code>\n</div>\n\n<div class='example'>\n    <h5>颜色</h5>\n    <div>Loadding 传参</div>\n    <code>\n         class=\"mv-loadding-primary\"\n    </code>\n    <Modal :class=\"mv-center\" :type=\"line\" :show=\"show\"></Modal>\n</div>\n";

/***/ }

});