webpackJsonp([4],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(7);

	var _vue2 = _interopRequireDefault(_vue);

	var _loadding = __webpack_require__(402);

	var _loadding2 = _interopRequireDefault(_loadding);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//创建一个vue实例,挂载在body上面  

	//es6加载模块  
	new _vue2.default({
	    el: 'body',
	    components: {
	        App: _loadding2.default
	    }
	});

/***/ },

/***/ 402:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(403)
	__vue_script__ = __webpack_require__(405)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components/loadding.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(406)
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
	  var id = "_v-43510cb1/loadding.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 403:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(404);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./loadding.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./loadding.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 404:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "\n.mv-btn{\n    margin: 5px;\n}\n.example{\n    margin: 20px 0px;\n    background: #ecf1f4;\n}\ncode{\n    display:block;\n}\n", ""]);

	// exports


/***/ },

/***/ 405:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _mvui = __webpack_require__(20);

	exports.default = {
	    data: function data() {
	        return {
	            message: 'Loadding Demo',
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
	        Loadding: _mvui.Loadding
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
	//         <h5>自定义class</h5>
	//
	//         <div>样式</div>
	//         <code>
	//         .custome-loadding{
	//             color: red !important;
	//         } 
	//         </code>
	//
	//         <div>Loadding 传参</div>
	//         <code>
	//              class="custome-loadding"
	//         </code>
	//         <Loadding class="custome-loadding" :show="show"></Loadding>
	//     </div>
	//
	//
	//     <div class='example'>
	//         <h5>居中</h5>
	//         <div>Loadding 传参</div>
	//         <code>
	//              class="mv-center"
	//         </code>
	//         <Loadding class="mv-center" :show="show"></Loadding>
	//     </div>
	//
	//
	//     <div class='example'>
	//         <h5>颜色</h5>
	//         <div>Loadding 传参</div>
	//         <code>
	//              class="mv-loadding-primary"
	//         </code>
	//         <Loadding class="mv-loadding-primary" :show="show"></Loadding>
	//     </div>
	//
	//
	//     <div class='example'>
	//         <h5>自定义style</h5>
	//         <div>Loadding 传参</div>
	//         <code>style="background: red;" </code>
	//         <Loadding style="background: red;"></Loadding>
	//     </div>
	//
	//
	//     <div class='example'>
	//         <h5>type 两种类型 circle 和 line </h5>
	//         <code>
	//             type="circle"<br/>
	//             type="line"
	//         </code>
	//         <Loadding type="circle" :show="show"></Loadding>
	//         <Loadding type="line" :show="show"></Loadding>
	//     </div>
	//
	//
	//     <Loadding :class="mv-center" :type="line" :show="show"></Loadding>
	//
	// </template>
	// <script>

/***/ },

/***/ 406:
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n<h2>{{ message }}</h2>  \n<div>\n    主要由三个参数:\n    <code>\n        class: String 主要可以自由添加类名以及定义好的类名<br/>\n        style: [Object, String]<br/>\n        type: String 圆形的以及线性的动画<br/>\n    </code>\n</div>\n\n<div class='example'>\n    <h5>自定义class</h5>\n\n    <div>样式</div>\n    <code>\n    .custome-loadding{\n        color: red !important;\n    } \n    </code>\n\n    <div>Loadding 传参</div>\n    <code>\n         class=\"custome-loadding\"\n    </code>\n    <Loadding class=\"custome-loadding\" :show=\"show\"></Loadding>\n</div>\n\n\n<div class='example'>\n    <h5>居中</h5>\n    <div>Loadding 传参</div>\n    <code>\n         class=\"mv-center\"\n    </code>\n    <Loadding class=\"mv-center\" :show=\"show\"></Loadding>\n</div>\n\n\n<div class='example'>\n    <h5>颜色</h5>\n    <div>Loadding 传参</div>\n    <code>\n         class=\"mv-loadding-primary\"\n    </code>\n    <Loadding class=\"mv-loadding-primary\" :show=\"show\"></Loadding>\n</div>\n\n\n<div class='example'>\n    <h5>自定义style</h5>\n    <div>Loadding 传参</div>\n    <code>style=\"background: red;\" </code>\n    <Loadding style=\"background: red;\"></Loadding>\n</div>\n\n\n<div class='example'>\n    <h5>type 两种类型 circle 和 line </h5>\n    <code>\n        type=\"circle\"<br/>\n        type=\"line\"\n    </code>\n    <Loadding type=\"circle\" :show=\"show\"></Loadding>\n    <Loadding type=\"line\" :show=\"show\"></Loadding>\n</div>\n\n\n<Loadding :class=\"mv-center\" :type=\"line\" :show=\"show\"></Loadding>\n\n";

/***/ }

});