require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"~/app/advert/advert.module": [
		"./app/advert/advert.module.ts",
		"vendor",
		0
	],
	"~/app/purchase/purchase.module": [
		"./app/purchase/purchase.module.ts",
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./app.scss":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/**\r\n * Convenient single import for light variables\r\n * Includes base variables with light overrides\r\n **/\n/**\r\n * Light variable overrides\r\n **/\n/**\r\n * Color classes\r\n * The following creates this pattern:\r\n * .c-grey{color:#e0e0e0}.c-bg-grey{background-color:#e0e0e0}\r\n**/\n.c-white {\n  color: #fff; }\n\n.c-bg-white {\n  background-color: #fff; }\n\n.c-black {\n  color: #000; }\n\n.c-bg-black {\n  background-color: #000; }\n\n.c-aqua {\n  color: #00caab; }\n\n.c-bg-aqua {\n  background-color: #00caab; }\n\n.c-blue {\n  color: #3d5afe; }\n\n.c-bg-blue {\n  background-color: #3d5afe; }\n\n.c-charcoal {\n  color: #303030; }\n\n.c-bg-charcoal {\n  background-color: #303030; }\n\n.c-brown {\n  color: #795548; }\n\n.c-bg-brown {\n  background-color: #795548; }\n\n.c-forest {\n  color: #006968; }\n\n.c-bg-forest {\n  background-color: #006968; }\n\n.c-grey {\n  color: #e0e0e0; }\n\n.c-bg-grey {\n  background-color: #e0e0e0; }\n\n.c-grey-light {\n  color: #bababa; }\n\n.c-bg-grey-light {\n  background-color: #bababa; }\n\n.c-grey-dark {\n  color: #5c687c; }\n\n.c-bg-grey-dark {\n  background-color: #5c687c; }\n\n.c-purple {\n  color: #8130ff; }\n\n.c-bg-purple {\n  background-color: #8130ff; }\n\n.c-lemon {\n  color: #ffea00; }\n\n.c-bg-lemon {\n  background-color: #ffea00; }\n\n.c-lime {\n  color: #aee406; }\n\n.c-bg-lime {\n  background-color: #aee406; }\n\n.c-orange {\n  color: #f57c00; }\n\n.c-bg-orange {\n  background-color: #f57c00; }\n\n.c-ruby {\n  color: #ff1744; }\n\n.c-bg-ruby {\n  background-color: #ff1744; }\n\n.c-sky {\n  color: #30bcff; }\n\n.c-bg-sky {\n  background-color: #30bcff; }\n\n/* Width/Height */\n.w-full {\n  width: 100%; }\n\n.w-100 {\n  width: 100; }\n\n.h-full {\n  height: 100%; }\n\n.h-100 {\n  height: 100; }\n\n/**\r\n * Margin and Padding\r\n * The following creates this pattern:\r\n * .m-0{margin:0}.m-t-0{margin-top:0}.m-r-0{margin-right:0}.m-b-0{margin-bottom:0}.m-l-0{margin-left:0}.m-x-0{margin-right:0;margin-left:0}.m-y-0{margin-top:0;margin-bottom:0}\r\n * Same for Padding (using the 'p' abbreviation)\r\n * From 0, 2, 5, 10, 15, 20, 25, 30\r\n**/\n.m-0 {\n  margin: 0; }\n\n.m-t-0 {\n  margin-top: 0; }\n\n.m-r-0 {\n  margin-right: 0; }\n\n.m-b-0 {\n  margin-bottom: 0; }\n\n.m-l-0 {\n  margin-left: 0; }\n\n.m-x-0 {\n  margin-right: 0;\n  margin-left: 0; }\n\n.m-y-0 {\n  margin-top: 0;\n  margin-bottom: 0; }\n\n.m-2 {\n  margin: 2; }\n\n.m-t-2 {\n  margin-top: 2; }\n\n.m-r-2 {\n  margin-right: 2; }\n\n.m-b-2 {\n  margin-bottom: 2; }\n\n.m-l-2 {\n  margin-left: 2; }\n\n.m-x-2 {\n  margin-right: 2;\n  margin-left: 2; }\n\n.m-y-2 {\n  margin-top: 2;\n  margin-bottom: 2; }\n\n.m-4 {\n  margin: 4; }\n\n.m-t-4 {\n  margin-top: 4; }\n\n.m-r-4 {\n  margin-right: 4; }\n\n.m-b-4 {\n  margin-bottom: 4; }\n\n.m-l-4 {\n  margin-left: 4; }\n\n.m-x-4 {\n  margin-right: 4;\n  margin-left: 4; }\n\n.m-y-4 {\n  margin-top: 4;\n  margin-bottom: 4; }\n\n.m-5 {\n  margin: 5; }\n\n.m-t-5 {\n  margin-top: 5; }\n\n.m-r-5 {\n  margin-right: 5; }\n\n.m-b-5 {\n  margin-bottom: 5; }\n\n.m-l-5 {\n  margin-left: 5; }\n\n.m-x-5 {\n  margin-right: 5;\n  margin-left: 5; }\n\n.m-y-5 {\n  margin-top: 5;\n  margin-bottom: 5; }\n\n.m-8 {\n  margin: 8; }\n\n.m-t-8 {\n  margin-top: 8; }\n\n.m-r-8 {\n  margin-right: 8; }\n\n.m-b-8 {\n  margin-bottom: 8; }\n\n.m-l-8 {\n  margin-left: 8; }\n\n.m-x-8 {\n  margin-right: 8;\n  margin-left: 8; }\n\n.m-y-8 {\n  margin-top: 8;\n  margin-bottom: 8; }\n\n.m-10 {\n  margin: 10; }\n\n.m-t-10 {\n  margin-top: 10; }\n\n.m-r-10 {\n  margin-right: 10; }\n\n.m-b-10 {\n  margin-bottom: 10; }\n\n.m-l-10 {\n  margin-left: 10; }\n\n.m-x-10 {\n  margin-right: 10;\n  margin-left: 10; }\n\n.m-y-10 {\n  margin-top: 10;\n  margin-bottom: 10; }\n\n.m-12 {\n  margin: 12; }\n\n.m-t-12 {\n  margin-top: 12; }\n\n.m-r-12 {\n  margin-right: 12; }\n\n.m-b-12 {\n  margin-bottom: 12; }\n\n.m-l-12 {\n  margin-left: 12; }\n\n.m-x-12 {\n  margin-right: 12;\n  margin-left: 12; }\n\n.m-y-12 {\n  margin-top: 12;\n  margin-bottom: 12; }\n\n.m-15 {\n  margin: 15; }\n\n.m-t-15 {\n  margin-top: 15; }\n\n.m-r-15 {\n  margin-right: 15; }\n\n.m-b-15 {\n  margin-bottom: 15; }\n\n.m-l-15 {\n  margin-left: 15; }\n\n.m-x-15 {\n  margin-right: 15;\n  margin-left: 15; }\n\n.m-y-15 {\n  margin-top: 15;\n  margin-bottom: 15; }\n\n.m-16 {\n  margin: 16; }\n\n.m-t-16 {\n  margin-top: 16; }\n\n.m-r-16 {\n  margin-right: 16; }\n\n.m-b-16 {\n  margin-bottom: 16; }\n\n.m-l-16 {\n  margin-left: 16; }\n\n.m-x-16 {\n  margin-right: 16;\n  margin-left: 16; }\n\n.m-y-16 {\n  margin-top: 16;\n  margin-bottom: 16; }\n\n.m-20 {\n  margin: 20; }\n\n.m-t-20 {\n  margin-top: 20; }\n\n.m-r-20 {\n  margin-right: 20; }\n\n.m-b-20 {\n  margin-bottom: 20; }\n\n.m-l-20 {\n  margin-left: 20; }\n\n.m-x-20 {\n  margin-right: 20;\n  margin-left: 20; }\n\n.m-y-20 {\n  margin-top: 20;\n  margin-bottom: 20; }\n\n.m-24 {\n  margin: 24; }\n\n.m-t-24 {\n  margin-top: 24; }\n\n.m-r-24 {\n  margin-right: 24; }\n\n.m-b-24 {\n  margin-bottom: 24; }\n\n.m-l-24 {\n  margin-left: 24; }\n\n.m-x-24 {\n  margin-right: 24;\n  margin-left: 24; }\n\n.m-y-24 {\n  margin-top: 24;\n  margin-bottom: 24; }\n\n.m-25 {\n  margin: 25; }\n\n.m-t-25 {\n  margin-top: 25; }\n\n.m-r-25 {\n  margin-right: 25; }\n\n.m-b-25 {\n  margin-bottom: 25; }\n\n.m-l-25 {\n  margin-left: 25; }\n\n.m-x-25 {\n  margin-right: 25;\n  margin-left: 25; }\n\n.m-y-25 {\n  margin-top: 25;\n  margin-bottom: 25; }\n\n.m-28 {\n  margin: 28; }\n\n.m-t-28 {\n  margin-top: 28; }\n\n.m-r-28 {\n  margin-right: 28; }\n\n.m-b-28 {\n  margin-bottom: 28; }\n\n.m-l-28 {\n  margin-left: 28; }\n\n.m-x-28 {\n  margin-right: 28;\n  margin-left: 28; }\n\n.m-y-28 {\n  margin-top: 28;\n  margin-bottom: 28; }\n\n.m-30 {\n  margin: 30; }\n\n.m-t-30 {\n  margin-top: 30; }\n\n.m-r-30 {\n  margin-right: 30; }\n\n.m-b-30 {\n  margin-bottom: 30; }\n\n.m-l-30 {\n  margin-left: 30; }\n\n.m-x-30 {\n  margin-right: 30;\n  margin-left: 30; }\n\n.m-y-30 {\n  margin-top: 30;\n  margin-bottom: 30; }\n\n.p-0 {\n  padding: 0; }\n\n.p-t-0 {\n  padding-top: 0; }\n\n.p-r-0 {\n  padding-right: 0; }\n\n.p-b-0 {\n  padding-bottom: 0; }\n\n.p-l-0 {\n  padding-left: 0; }\n\n.p-x-0 {\n  padding-right: 0;\n  padding-left: 0; }\n\n.p-y-0 {\n  padding-top: 0;\n  padding-bottom: 0; }\n\n.p-2 {\n  padding: 2; }\n\n.p-t-2 {\n  padding-top: 2; }\n\n.p-r-2 {\n  padding-right: 2; }\n\n.p-b-2 {\n  padding-bottom: 2; }\n\n.p-l-2 {\n  padding-left: 2; }\n\n.p-x-2 {\n  padding-right: 2;\n  padding-left: 2; }\n\n.p-y-2 {\n  padding-top: 2;\n  padding-bottom: 2; }\n\n.p-4 {\n  padding: 4; }\n\n.p-t-4 {\n  padding-top: 4; }\n\n.p-r-4 {\n  padding-right: 4; }\n\n.p-b-4 {\n  padding-bottom: 4; }\n\n.p-l-4 {\n  padding-left: 4; }\n\n.p-x-4 {\n  padding-right: 4;\n  padding-left: 4; }\n\n.p-y-4 {\n  padding-top: 4;\n  padding-bottom: 4; }\n\n.p-5 {\n  padding: 5; }\n\n.p-t-5 {\n  padding-top: 5; }\n\n.p-r-5 {\n  padding-right: 5; }\n\n.p-b-5 {\n  padding-bottom: 5; }\n\n.p-l-5 {\n  padding-left: 5; }\n\n.p-x-5 {\n  padding-right: 5;\n  padding-left: 5; }\n\n.p-y-5 {\n  padding-top: 5;\n  padding-bottom: 5; }\n\n.p-8 {\n  padding: 8; }\n\n.p-t-8 {\n  padding-top: 8; }\n\n.p-r-8 {\n  padding-right: 8; }\n\n.p-b-8 {\n  padding-bottom: 8; }\n\n.p-l-8 {\n  padding-left: 8; }\n\n.p-x-8 {\n  padding-right: 8;\n  padding-left: 8; }\n\n.p-y-8 {\n  padding-top: 8;\n  padding-bottom: 8; }\n\n.p-10 {\n  padding: 10; }\n\n.p-t-10 {\n  padding-top: 10; }\n\n.p-r-10 {\n  padding-right: 10; }\n\n.p-b-10 {\n  padding-bottom: 10; }\n\n.p-l-10 {\n  padding-left: 10; }\n\n.p-x-10 {\n  padding-right: 10;\n  padding-left: 10; }\n\n.p-y-10 {\n  padding-top: 10;\n  padding-bottom: 10; }\n\n.p-12 {\n  padding: 12; }\n\n.p-t-12 {\n  padding-top: 12; }\n\n.p-r-12 {\n  padding-right: 12; }\n\n.p-b-12 {\n  padding-bottom: 12; }\n\n.p-l-12 {\n  padding-left: 12; }\n\n.p-x-12 {\n  padding-right: 12;\n  padding-left: 12; }\n\n.p-y-12 {\n  padding-top: 12;\n  padding-bottom: 12; }\n\n.p-15 {\n  padding: 15; }\n\n.p-t-15 {\n  padding-top: 15; }\n\n.p-r-15 {\n  padding-right: 15; }\n\n.p-b-15 {\n  padding-bottom: 15; }\n\n.p-l-15 {\n  padding-left: 15; }\n\n.p-x-15 {\n  padding-right: 15;\n  padding-left: 15; }\n\n.p-y-15 {\n  padding-top: 15;\n  padding-bottom: 15; }\n\n.p-16 {\n  padding: 16; }\n\n.p-t-16 {\n  padding-top: 16; }\n\n.p-r-16 {\n  padding-right: 16; }\n\n.p-b-16 {\n  padding-bottom: 16; }\n\n.p-l-16 {\n  padding-left: 16; }\n\n.p-x-16 {\n  padding-right: 16;\n  padding-left: 16; }\n\n.p-y-16 {\n  padding-top: 16;\n  padding-bottom: 16; }\n\n.p-20 {\n  padding: 20; }\n\n.p-t-20 {\n  padding-top: 20; }\n\n.p-r-20 {\n  padding-right: 20; }\n\n.p-b-20 {\n  padding-bottom: 20; }\n\n.p-l-20 {\n  padding-left: 20; }\n\n.p-x-20 {\n  padding-right: 20;\n  padding-left: 20; }\n\n.p-y-20 {\n  padding-top: 20;\n  padding-bottom: 20; }\n\n.p-24 {\n  padding: 24; }\n\n.p-t-24 {\n  padding-top: 24; }\n\n.p-r-24 {\n  padding-right: 24; }\n\n.p-b-24 {\n  padding-bottom: 24; }\n\n.p-l-24 {\n  padding-left: 24; }\n\n.p-x-24 {\n  padding-right: 24;\n  padding-left: 24; }\n\n.p-y-24 {\n  padding-top: 24;\n  padding-bottom: 24; }\n\n.p-25 {\n  padding: 25; }\n\n.p-t-25 {\n  padding-top: 25; }\n\n.p-r-25 {\n  padding-right: 25; }\n\n.p-b-25 {\n  padding-bottom: 25; }\n\n.p-l-25 {\n  padding-left: 25; }\n\n.p-x-25 {\n  padding-right: 25;\n  padding-left: 25; }\n\n.p-y-25 {\n  padding-top: 25;\n  padding-bottom: 25; }\n\n.p-28 {\n  padding: 28; }\n\n.p-t-28 {\n  padding-top: 28; }\n\n.p-r-28 {\n  padding-right: 28; }\n\n.p-b-28 {\n  padding-bottom: 28; }\n\n.p-l-28 {\n  padding-left: 28; }\n\n.p-x-28 {\n  padding-right: 28;\n  padding-left: 28; }\n\n.p-y-28 {\n  padding-top: 28;\n  padding-bottom: 28; }\n\n.p-30 {\n  padding: 30; }\n\n.p-t-30 {\n  padding-top: 30; }\n\n.p-r-30 {\n  padding-right: 30; }\n\n.p-b-30 {\n  padding-bottom: 30; }\n\n.p-l-30 {\n  padding-left: 30; }\n\n.p-x-30 {\n  padding-right: 30;\n  padding-left: 30; }\n\n.p-y-30 {\n  padding-top: 30;\n  padding-bottom: 30; }\n\n/* Dividers */\n.hr-light {\n  height: 1;\n  background-color: #e0e0e0;\n  width: 100%; }\n\n.hr-dark {\n  height: 1;\n  background-color: #303030;\n  width: 100%; }\n\n/* Alignment */\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.text-lowercase {\n  text-transform: lowercase; }\n\n.text-uppercase {\n  text-transform: uppercase; }\n\n.text-capitalize {\n  text-transform: capitalize; }\n\n.font-weight-normal {\n  font-weight: normal; }\n\n.font-weight-bold {\n  font-weight: bold; }\n\n.font-italic {\n  font-style: italic; }\n\n/**\r\n * Font size\r\n * The following creates this pattern:\r\n * .t-10{font-size:10}\r\n * From 10, 12, 14, 15, 16, 17, 18, 19, 20\r\n**/\n.t-10 {\n  font-size: 10; }\n\n.t-12 {\n  font-size: 12; }\n\n.t-14 {\n  font-size: 14; }\n\n.t-15 {\n  font-size: 15; }\n\n.t-16 {\n  font-size: 16; }\n\n.t-17 {\n  font-size: 17; }\n\n.t-18 {\n  font-size: 18; }\n\n.t-19 {\n  font-size: 19; }\n\n.t-20 {\n  font-size: 20; }\n\n.t-25 {\n  font-size: 25; }\n\n.t-30 {\n  font-size: 30; }\n\n.img-rounded {\n  border-radius: 5; }\n\n.img-circle {\n  border-radius: 20; }\n\n.img-thumbnail {\n  border-radius: 0; }\n\n.invisible {\n  visibility: collapse; }\n\n.pull-left {\n  horizontal-align: left; }\n\n.pull-right {\n  horizontal-align: right; }\n\n.m-x-auto {\n  horizontal-align: center; }\n\n.m-y-auto {\n  vertical-align: center; }\n\n.text-primary {\n  color: #30bcff; }\n\n.text-danger {\n  color: #d50000; }\n\n.text-muted {\n  color: #ffffff; }\n\n.bg-primary {\n  background-color: #30bcff;\n  color: #fff; }\n\n.bg-danger {\n  background-color: #d50000;\n  color: #fff; }\n\n.action-bar {\n  background-color: #F8F8F8;\n  color: #212121; }\n  .action-bar .action-bar-title {\n    font-weight: bold;\n    font-size: 17;\n    vertical-align: center; }\n  .action-bar .action-item {\n    font-weight: normal; }\n\n.activity-indicator {\n  color: #30bcff;\n  width: 30;\n  height: 30; }\n\n.btn {\n  color: #ffffff;\n  background-color: transparent;\n  min-height: 36;\n  min-width: 64;\n  padding: 10 10 10 10;\n  font-size: 18;\n  margin: 8 16 8 16; }\n  .btn.btn-active:highlighted {\n    color: #fff;\n    background-color: #c0ebff; }\n\n.btn-primary {\n  background-color: #ffffff;\n  border-color: #ffffff;\n  color: #fff; }\n  .btn-primary.btn-active:highlighted {\n    background-color: #01a0ec;\n    border-color: #01a0ec; }\n  .btn-primary.btn-aqua {\n    background-color: #00caab; }\n  .btn-primary.btn-blue {\n    background-color: #3d5afe; }\n  .btn-primary.btn-brown {\n    background-color: #795548; }\n  .btn-primary.btn-forest {\n    background-color: #006968; }\n  .btn-primary.btn-grey {\n    background-color: #5c687c; }\n  .btn-primary.btn-lemon {\n    background-color: #ffea00;\n    color: #000; }\n  .btn-primary.btn-lime {\n    background-color: #aee406;\n    color: #000; }\n  .btn-primary.btn-orange {\n    background-color: #f57c00; }\n  .btn-primary.btn-purple {\n    background-color: #8130ff; }\n  .btn-primary.btn-ruby {\n    background-color: #ff1744; }\n  .btn-primary.btn-sky {\n    background-color: #30bcff; }\n\n.btn-outline {\n  background-color: transparent;\n  border-color: #ffffff;\n  color: #ffffff; }\n  .btn-outline.btn-active:highlighted {\n    background-color: #c0ebff; }\n\n.btn[isEnabled=false] {\n  color: #a4a4a4;\n  background-color: #e0e0e0;\n  border-color: #e0e0e0; }\n\n.fa {\n  font-family: FontAwesome, fontawesome-webfont; }\n\n.form .input {\n  padding: 16 8 16 8;\n  background-color: transparent; }\n  .form .input.input-border {\n    border-width: 1;\n    border-color: #e0e0e0;\n    border-radius: 2;\n    padding: 16; }\n  .form .input.input-rounded {\n    border-width: 1;\n    border-color: #e0e0e0;\n    border-radius: 28;\n    padding: 16; }\n  .form .input[isEnabled='false'] {\n    background-color: #fafafa; }\n\n.form .input-field {\n  margin: 8; }\n  .form .input-field .label {\n    font-size: 12;\n    color: #bababa; }\n  .form .input-field .input {\n    padding: 0;\n    margin: 0 0 8 0; }\n  .form .input-field .hr-light.active,\n  .form .input-field .hr-dark.active {\n    background-color: #30bcff; }\n  .form .input-field.input-sides .label {\n    font-size: 18;\n    margin: 0 0 8 0; }\n\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 4;\n  font-weight: normal;\n  color: #212121; }\n\n.body,\n.body2,\n.footnote {\n  font-weight: normal;\n  color: #F7a70b; }\n\n.h1 {\n  font-size: 32; }\n\n.h2 {\n  font-size: 22; }\n\n.h3 {\n  font-size: 15; }\n\n.h4 {\n  font-size: 12; }\n\n.h5 {\n  font-size: 11; }\n\n.h6 {\n  font-size: 10; }\n\n.body {\n  font-size: 14; }\n\n.body2 {\n  font-size: 17; }\n\n.footnote {\n  font-size: 13; }\n\n.list-group .list-group-item {\n  color: #3961ab;\n  font-size: 16;\n  margin: 0;\n  padding: 16; }\n  .list-group .list-group-item Label {\n    vertical-align: center; }\n  .list-group .list-group-item .thumb {\n    stretch: fill;\n    width: 40;\n    height: 40;\n    margin-right: 16; }\n  .list-group .list-group-item.active {\n    background-color: #e0e0e0; }\n  .list-group .list-group-item .list-group-item-text {\n    color: #F7a70b;\n    font-size: 14; }\n\n.page {\n  background-color: #fff; }\n\n.progress {\n  color: #30bcff;\n  background-color: #bababa; }\n\n.segmented-bar {\n  font-size: 13;\n  background-color: #fff;\n  color: #3961ab;\n  selected-background-color: #30bcff; }\n\n.sidedrawer-left, .sidedrawer-center {\n  background-color: #fafafa; }\n\n.sidedrawer-header {\n  background-color: #fafafa;\n  height: 148;\n  width: 100%; }\n\n.sidedrawer-left .sidedrawer-header {\n  padding: 16 16 0 16; }\n\n.sidedrawer-center .sidedrawer-header {\n  padding: 20 15 0 15; }\n\n.sidedrawer-header-image {\n  background-color: #e0e0e0; }\n\n.sidedrawer-left .sidedrawer-header-image {\n  height: 64;\n  width: 64;\n  border-radius: 32;\n  horizontal-align: left;\n  margin-bottom: 36; }\n\n.sidedrawer-center .sidedrawer-header-image {\n  height: 74;\n  width: 74;\n  border-radius: 37;\n  horizontal-align: center;\n  margin-bottom: 24; }\n\n.sidedrawer-header-brand {\n  color: #737373; }\n\n.sidedrawer-left .sidedrawer-header-brand {\n  horizontal-align: left;\n  font-size: 14; }\n\n.sidedrawer-center .sidedrawer-header-brand {\n  horizontal-align: center;\n  font-size: 15; }\n\n.sidedrawer-list-item {\n  height: 48;\n  horizontal-align: left;\n  width: 100%;\n  orientation: horizontal; }\n  .sidedrawer-list-item .sidedrawer-list-item-icon {\n    width: 24;\n    text-align: center;\n    font-size: 20;\n    height: 48;\n    vertical-align: center; }\n  .sidedrawer-list-item.active {\n    color: #fff;\n    background-color: #30bcff; }\n    .sidedrawer-list-item.active .sidedrawer-list-item-icon {\n      color: #fff; }\n\n.sidedrawer-left .sidedrawer-list-item-icon {\n  margin: 0 16 0 16; }\n\n.sidedrawer-center .sidedrawer-list-item-icon {\n  margin: 0 0 0 15; }\n\n.sidedrawer-list-item-text {\n  horizontal-align: left;\n  text-align: left;\n  font-size: 15;\n  background-color: transparent;\n  border-width: 0.1;\n  width: 80%;\n  vertical-align: center; }\n\n.sidedrawer-left .sidedrawer-list-item-text {\n  padding-left: 16; }\n\n.sidedrawer-center .sidedrawer-list-item-text {\n  padding-left: 15; }\n\n.slider {\n  background-color: #30bcff; }\n  .slider[isEnabled=false] {\n    background-color: #e0e0e0;\n    color: #e0e0e0; }\n\n.switch[checked=true] {\n  background-color: #30bcff;\n  color: #30bcff; }\n\n.switch[checked=true][isEnabled=false] {\n  background-color: #e0e0e0;\n  color: #fff; }\n\n.switch[isEnabled=false] {\n  background-color: #e0e0e0;\n  color: #e0e0e0; }\n\n.tab-view {\n  /*color: $secondary;*/\n  selected-color: #30bcff;\n  tabs-background-color: #fff; }\n  .tab-view .tab-view-item {\n    background-color: #fff;\n    tabs-background-color: #fff; }\n\n#login-background {\n  margin-top: -20;\n  background-size: cover;\n  background-position: center; }\n\n.login-wrap {\n  padding: 0 40; }\n\n.logo-wrap {\n  margin: 60 0 10 0;\n  padding: 20 0; }\n  .logo-wrap .login-logo {\n    text-align: center;\n    font-size: 30;\n    font-weight: bold;\n    margin-bottom: 10;\n    opacity: 1;\n    color: #3961ab;\n    opacity: .9; }\n  .logo-wrap .login-logo-sub {\n    color: #3961ab;\n    opacity: .8;\n    text-align: center; }\n\n.login-wrapper {\n  padding: 20;\n  background-color: #fff;\n  border-radius: 3; }\n  .login-wrapper TextField {\n    padding: 10 10;\n    margin: 10 0 0 0; }\n\n.go-back {\n  font-size: 14;\n  text-align: center;\n  color: #3961ab;\n  margin-top: 10; }\n\nActionBar {\n  background-color: #3961ab;\n  color: #ffffff; }\n\n.btn-primary {\n  background-color: #3961ab;\n  width: 80%; }\n\n.btn-primary1 {\n  background-color: #3961ab;\n  width: 15%;\n  font-family: FontAwesome, fontawesome-webfont;\n  font-weight: 700;\n  font-size: 10em; }\n\n.btn-flat {\n  border-width: 1;\n  border-color: transparent;\n  z-index: 0;\n  color: #3961ab; }\n\n.labelOutsideInput {\n  margin-top: 2.3%;\n  margin-left: 2%;\n  color: #3961ab;\n  font-size: 16;\n  font-weight: bold;\n  font-family: 'Oswald', 'Oswald-Regular', 'Oswald-Bold'; }\n\n.form .input-field {\n  width: 80%; }\n  .form .input-field .input {\n    border-bottom-width: 2;\n    border-color: #3961ab;\n    border-bottom-color: #3961ab;\n    width: 100%;\n    color: black; }\n  .form .input-field .input.ng-invalid.ng-touched {\n    border-bottom-color: red;\n    color: red; }\n  .form .input-field .label {\n    color: #3961ab;\n    font-size: 16;\n    font-weight: bold;\n    font-family: 'Oswald', 'Oswald-Regular', 'Oswald-Bold'; }\n  .form .input-field .label1 {\n    color: #3961ab;\n    font-size: 16;\n    font-weight: bold;\n    font-family: 'Oswald', 'Oswald-Regular', 'Oswald-Bold';\n    text-align: center; }\n  .form .input-field .label.invalid {\n    color: red; }\n\n.form .list-field {\n  margin-top: 15; }\n  .form .list-field .header {\n    color: #3961ab;\n    font-size: 24;\n    font-weight: bold;\n    font-family: 'Oswald', 'Oswald-Regular', 'Oswald-Bold';\n    text-align: left; }\n  .form .list-field .list-item {\n    width: 95%;\n    height: 70;\n    margin-top: 5;\n    border-bottom-color: #F7a70b;\n    border-bottom-width: 1;\n    align-content: center; }\n    .form .list-field .list-item .label {\n      color: #3961ab;\n      font-size: 20;\n      font-weight: bold;\n      font-family: 'Oswald', 'Oswald-Regular', 'Oswald-Bold'; }\n\n.form .img-login-logo {\n  width: 50%;\n  margin-top: 5%; }\n\n.flexbox-rememberme {\n  flex-direction: row;\n  align-items: center;\n  justify-content: center; }\n\n.drawer-container {\n  background: linear-gradient(140deg, #3961ab, #0a65e5);\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 1; }\n\n.btn-burger {\n  width: 15%;\n  height: 15%;\n  border-style: solid;\n  border-width: 1;\n  border-color: red; }\n\n.btn-sidedrawer-menu {\n  width: 100%;\n  height: 9%;\n  border-bottom-style: solid;\n  border-left-color: transparent;\n  border-right-color: transparent;\n  z-index: 0;\n  border-bottom-width: 1;\n  border-bottom-color: white;\n  color: white; }\n\n.btn-sidedrawer-message {\n  width: 92%;\n  height: 9%;\n  border-bottom-style: solid;\n  border-left-color: transparent;\n  border-right-color: transparent;\n  z-index: 0;\n  border-bottom-width: 1;\n  border-bottom-color: white;\n  color: white; }\n\n.btn-sidedrawer-menu-top {\n  width: 100%;\n  height: 9%;\n  border-top-style: solid;\n  border-bottom-style: solid;\n  border-left-color: transparent;\n  border-right-color: transparent;\n  z-index: 0;\n  border-top-width: 1;\n  border-bottom-width: 1;\n  border-top-color: white;\n  border-bottom-color: white;\n  color: white; }\n\n.sidedrawer-menu-list {\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start; }\n\n.btn-logout {\n  height: 30%;\n  background-color: white;\n  color: #3961ab; }\n\n.advert-tabs {\n  selected-tab-text-color: #3961ab;\n  android-selected-tab-highlight-color: #3961ab;\n  font-family: FontAwesome, fontawesome-webfont;\n  color: #3961ab;\n  font-weight: 400;\n  font-size: 35em;\n  background-color: #efeeee; }\n\n.tab-fa {\n  font-family: FontAwesome, fontawesome-webfont;\n  color: #3961ab;\n  font-weight: 400;\n  font-size: 35em; }\n\n.btn-fa {\n  font-family: FontAwesome, fontawesome-webfont;\n  color: #3961ab;\n  font-weight: 400;\n  font-size: 35em;\n  border-width: 1;\n  border-color: transparent;\n  z-index: 0; }\n\n.ContactSellerLabel {\n  font-family: FontAwesome, fontawesome-webfont;\n  color: #3961ab;\n  font-weight: 700;\n  font-size: 60em;\n  text-align: center; }\n\n.UploadPictureLabel {\n  font-family: FontAwesome, fontawesome-webfont;\n  color: #3961ab;\n  font-weight: 700;\n  font-size: 40em;\n  text-align: center; }\n\n.GridLayoutAdvertListStyle {\n  margin-bottom: 15;\n  margin-left: 2%;\n  margin-right: 2%;\n  border-style: solid;\n  border-width: 1px;\n  background-color: #ffffff;\n  border-color: #efeeee;\n  border-radius: 5; }\n\n.GridLayoutAdvertStyle {\n  margin-top: 2%;\n  margin-bottom: 2%;\n  margin-left: 2%;\n  margin-right: 2%;\n  border-style: solid;\n  border-width: 1px;\n  background-color: #ffffff;\n  border-color: #efeeee;\n  border-radius: 5; }\n\n.GridLayoutLabelBreakers {\n  font-size: 20pt; }\n\n.GridLayoutLabelHeading {\n  font-size: 26pt;\n  margin-left: 5%;\n  padding-bottom: 2%;\n  color: black; }\n\n.GridLayoutLabels {\n  font-size: 16pt;\n  margin-left: 7%;\n  padding-bottom: 2%;\n  color: black; }\n\n.GridLayoutStaticLabels {\n  font-weight: 700;\n  font-size: 16pt;\n  margin-left: 5%;\n  padding-bottom: 2%;\n  color: black; }\n\n.GridLayoutAdListPriceLabel {\n  font-size: 16pt;\n  margin-left: 1%;\n  padding-bottom: 2%;\n  color: black; }\n\n.GridLayoutPriceLabel {\n  font-size: 16pt;\n  margin-left: 10%;\n  padding-bottom: 2%;\n  color: black; }\n\n.thumb-img-circle {\n  border-radius: 5;\n  border-style: solid;\n  border-color: #c0c0c0;\n  border-width: 1px;\n  margin-left: 2%;\n  margin-top: 5;\n  margin-bottom: 5; }\n\n.advertRadList {\n  margin-top: 1%;\n  margin-bottom: 1%; }\n\n.myAdvertRadlist {\n  margin-top: 1%;\n  margin-bottom: 1%; }\n\n.StackLayoutDividers {\n  background-color: #c0c0c0;\n  height: 0.8;\n  margin-top: 4%;\n  margin-left: 3%;\n  margin-right: 3%; }\n\n.StackLayoutDividers1 {\n  background-color: #c0c0c0;\n  height: 0.8;\n  margin-top: 4%; }\n\n.IsSellingSwitch {\n  margin-right: 3%; }\n\n.SendMessageLabel {\n  font-family: FontAwesome, fontawesome-webfont;\n  font-weight: 100;\n  font-size: 36em;\n  color: #3961ab; }\n\n.GridLayoutMessages {\n  border-style: solid;\n  border-width: 1px;\n  background-color: lightgray;\n  border-color: lightgray;\n  z-index: 99; }\n\n.SentMessage {\n  color: black;\n  text-align: right;\n  padding-right: 5%;\n  font-weight: 100;\n  font-size: 16em;\n  background-color: lightgreen; }\n\n.RecievedMessage {\n  color: black;\n  padding-left: 5%;\n  font-weight: 100;\n  font-size: 16em;\n  background-color: azure; }\n\n.SentMessageusername {\n  color: black;\n  font-weight: 900;\n  text-align: right;\n  padding-right: 5%;\n  font-size: 16em;\n  background-color: lightgreen; }\n\n.RecievedMessageusername {\n  color: black;\n  padding-left: 5%;\n  font-weight: 900;\n  font-size: 16em;\n  background-color: azure; }\n\n.SentMessagedate {\n  color: black;\n  font-weight: 100;\n  font-size: 8em;\n  background-color: lightgreen; }\n\n.RecievedMessagedate {\n  color: black;\n  font-weight: 100;\n  font-size: 8em;\n  background-color: azure; }\n\n.messageRadList {\n  margin-top: .05%;\n  background-color: lightgray;\n  height: 82%; }\n\n.chatPageForm {\n  border-style: solid;\n  border-width: 2;\n  height: 100%; }\n\n.messagetext {\n  border-style: solid;\n  border-radius: 10%;\n  border-width: 2;\n  border-bottom-style: groove;\n  z-index: 99;\n  background-color: white; }\n\n.messageitem {\n  width: 95%;\n  height: 70;\n  margin-top: 5;\n  border-bottom-color: #F7a70b;\n  border-bottom-width: 1;\n  align-content: center; }\n\n.GridLayoutMessageListStyle {\n  margin-bottom: 20;\n  margin-left: 15;\n  margin-right: 15;\n  border-style: solid;\n  border-width: 1.5%;\n  border-color: black;\n  border-radius: 2; }\n\n.sendmessageicon {\n  font-family: FontAwesome, fontawesome-webfont;\n  font-weight: 100;\n  text-align: right;\n  padding-right: 5%;\n  font-size: 20em;\n  color: black;\n  background-color: lightgreen; }\n\n.recievemessageicon {\n  font-family: FontAwesome, fontawesome-webfont;\n  font-weight: 100;\n  padding-left: 5%;\n  font-size: 20em;\n  color: black;\n  background-color: azure; }\n\n.GridLayoutChatListStyle {\n  margin-bottom: 20;\n  border-style: solid;\n  border-width: 1px;\n  background-color: #ffffff;\n  border-color: #efeeee;\n  border-radius: 5;\n  margin-left: 4%;\n  margin-right: 4%; }\n\n.chatsRadList {\n  margin-top: 5%;\n  background-color: lightgray; }\n\n.RecievedMessagedatechats {\n  color: black;\n  margin-left: 35%;\n  font-weight: 100;\n  font-size: 8em;\n  background-color: white; }\n\n.ViewAdLabel {\n  font-family: FontAwesome, fontawesome-webfont;\n  font-weight: 100;\n  font-size: 20em;\n  color: #F7a70b;\n  margin-left: 75%; }\n\n.AdLabel {\n  margin-left: 1%;\n  margin-top: 0; }\n\n.InterestLabel {\n  font-family: FontAwesome, fontawesome-webfont;\n  color: #3961ab;\n  font-weight: 700;\n  font-size: 60em;\n  text-align: center; }\n\n.ItemSoldLabel {\n  margin-left: 22; }\n\n.InterestedBuyers {\n  font-size: 25em;\n  margin-left: 20; }\n\n.InterestedBuyerslabel {\n  margin-top: 10; }\n\n.Ratebuyerlabel {\n  font-family: FontAwesome, fontawesome-webfont;\n  color: #F7a70b;\n  margin-top: 6;\n  font-weight: 700;\n  font-size: 25em;\n  text-align: center; }\n\n.DeleteLabel {\n  margin-left: 17; }\n\n.EditLabel {\n  margin-left: 17; }\n\n.DeleteLabelicon {\n  font-family: FontAwesome, fontawesome-webfont;\n  color: #3961ab;\n  font-weight: 700;\n  font-size: 57em;\n  text-align: center; }\n\n.FilterLabelicon {\n  font-family: FontAwesome, fontawesome-webfont;\n  color: #3961ab;\n  font-weight: 700;\n  font-size: 15em;\n  text-align: left;\n  margin-top: 2%; }\n\n.FilterLabel {\n  font-weight: 700;\n  font-size: 24em;\n  margin-right: 25;\n  text-align: right;\n  margin-top: 1%;\n  margin-left: 67%; }\n\n.TextbookFilterLabel {\n  font-weight: 700;\n  font-size: 24em;\n  margin-right: 25;\n  text-align: right;\n  margin-top: 1%;\n  margin-left: 34.8%; }\n\n.ScanwordLabel {\n  font-weight: 700;\n  font-size: 24em;\n  margin-right: 25;\n  text-align: right;\n  margin-top: 1%;\n  margin-left: 4%; }\n\n.PasswordLabel {\n  font-family: FontAwesome, fontawesome-webfont;\n  color: #F7a70b;\n  margin-left: 70%;\n  font-weight: 700;\n  font-size: 15em;\n  text-align: center; }\n\n.activechaticon {\n  font-family: FontAwesome, fontawesome-webfont;\n  color: #F7a70b;\n  margin-left: 25%;\n  font-weight: 700;\n  font-size: 18em;\n  text-align: center; }\n\n.ratingLabel {\n  margin-left: 9%;\n  margin-top: 0; }\n\n.Unreadmessage {\n  font-family: FontAwesome, fontawesome-webfont;\n  font-weight: 100;\n  font-size: 16em;\n  color: #F7a70b;\n  margin-left: 42%;\n  margin-top: 20%; }\n\n.Notification {\n  font-family: FontAwesome, fontawesome-webfont;\n  font-weight: 50;\n  font-size: 15em;\n  color: #F7a70b;\n  margin-left: 93%; }\n\n.Homeunread {\n  font-family: FontAwesome, fontawesome-webfont;\n  font-weight: 100;\n  font-size: 20em;\n  color: #F7a70b;\n  width: 8%;\n  height: 9%;\n  border-bottom-style: solid;\n  border-left-color: transparent;\n  border-right-color: transparent;\n  z-index: 0;\n  border-bottom-width: 1;\n  border-bottom-color: white;\n  padding-top: 15%; }\n\n.Deletechat {\n  font-family: FontAwesome, fontawesome-webfont;\n  font-weight: 100;\n  font-size: 20em;\n  color: red;\n  margin-left: 7%; }\n\n.Deletechaticon {\n  font-family: FontAwesome, fontawesome-webfont;\n  font-weight: 100;\n  font-size: 20em;\n  color: red;\n  margin-left: 59%; }\n\n.btn-info {\n  font-family: FontAwesome, fontawesome-webfont;\n  color: #3961ab;\n  font-weight: 20;\n  font-size: 25em;\n  border-width: 1;\n  border-color: transparent;\n  z-index: 0;\n  height: 10%; }\n\n.MessagesStack {\n  background-color: lightgray; }\n\n.UnreadLabel {\n  font-family: FontAwesome, fontawesome-webfont;\n  font-weight: 100;\n  font-size: 15em;\n  color: #F7a70b; }\n\n.Sidedrawer {\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n\n.Homeread {\n  font-family: FontAwesome, fontawesome-webfont;\n  font-weight: 100;\n  font-size: 20em;\n  width: 8%;\n  height: 9%;\n  border-bottom-style: solid;\n  border-left-color: transparent;\n  border-right-color: transparent;\n  z-index: 0;\n  border-bottom-width: 1;\n  border-bottom-color: white;\n  padding-top: 15%; }\n\n.AverageLabel {\n  font-family: FontAwesome, fontawesome-webfont;\n  font-weight: 100;\n  font-size: 50em;\n  color: #F7a70b;\n  margin-left: 25%; }\n\n.BuyingAverage {\n  font-weight: 500;\n  font-size: 13em;\n  color: #3961ab;\n  margin-left: 12%;\n  margin-top: 10%; }\n\n.PreviousLabel {\n  font-family: FontAwesome, fontawesome-webfont;\n  font-weight: 100;\n  font-size: 50em;\n  color: #F7a70b;\n  margin-left: 35%;\n  margin-top: 10%; }\n\n.Previous {\n  font-weight: 500;\n  font-size: 13em;\n  color: #3961ab;\n  margin-left: 5%;\n  margin-top: 10%; }\n\n.PreviousSold {\n  font-weight: 500;\n  font-size: 13em;\n  color: #3961ab;\n  margin-left: 10%;\n  margin-top: 10%; }\n\n.Outstanding {\n  font-weight: 500;\n  font-size: 13em;\n  color: #3961ab;\n  margin-left: 14%;\n  margin-top: 10%; }\n\n.Ratingdashboard {\n  margin-left: 29%;\n  font-weight: 500;\n  font-size: 50em;\n  color: #F7a70b; }\n\n.GridLayoutBuyerRatingdash {\n  border-style: solid;\n  border-width: 1px;\n  background-color: whitesmoke;\n  border-color: #efeeee;\n  border-radius: 5;\n  margin-bottom: 68%;\n  margin-left: 3%;\n  margin-right: 52%;\n  margin-top: 7%; }\n\n.GridLayoutSellerRatingdash {\n  border-style: solid;\n  border-width: 1px;\n  background-color: whitesmoke;\n  border-color: #efeeee;\n  border-radius: 5;\n  margin-bottom: 68%;\n  margin-left: 52%;\n  margin-right: 3%;\n  margin-top: 7%; }\n\n.GridLayoutPreviousBought {\n  border-style: solid;\n  border-width: 1px;\n  background-color: whitesmoke;\n  border-color: #efeeee;\n  border-radius: 5;\n  margin-left: 3%;\n  margin-right: 52%;\n  margin-top: 29%;\n  margin-bottom: 46%; }\n\n.GridLayoutPreviousSold {\n  border-style: solid;\n  border-width: 1px;\n  background-color: whitesmoke;\n  border-color: #efeeee;\n  border-radius: 5;\n  margin-left: 52%;\n  margin-right: 3%;\n  margin-top: 29%;\n  margin-bottom: 46%; }\n\n.GridLayoutOutstanding {\n  border-style: solid;\n  border-width: 1px;\n  background-color: whitesmoke;\n  border-color: #efeeee;\n  border-radius: 5;\n  margin-left: 25%;\n  margin-right: 25%;\n  margin-top: 51%;\n  margin-bottom: 24%; }\n\n.ScanLabel {\n  font-family: FontAwesome, fontawesome-webfont;\n  font-weight: 100;\n  font-size: 40em;\n  margin-left: 15%;\n  color: #3961ab;\n  margin-top: 1.5%; }\n\n.ScanhomeLabel {\n  font-family: FontAwesome, fontawesome-webfont;\n  font-weight: 100;\n  font-size: 22em;\n  margin-left: 0.3%;\n  color: #3961ab;\n  margin-top: 1.5%; }\n\n.Textbooklabel {\n  color: #3961ab;\n  font-size: 16;\n  font-weight: bold;\n  font-family: 'Oswald', 'Oswald-Regular', 'Oswald-Bold';\n  margin-left: 3%;\n  font-size: 39em; }\n\n.Help {\n  font-family: FontAwesome, fontawesome-webfont;\n  font-weight: 100;\n  font-size: 24em;\n  margin-left: 7%;\n  padding-right: 20%; }\n\n/**\r\n * Import all platform specific files here\r\n */\n.btn {\n  border-width: 0;\n  font-family: 'SF UI Text Medium';\n  font-size: 15; }\n\n.btn-outline {\n  border-width: 1; }\n\n.btn-rounded-sm {\n  border-radius: 4; }\n\n.btn-rounded-lg {\n  border-radius: 19; }\n\n.form {\n  font-family: 'SF UI Text Regular'; }\n  .form .input {\n    font-size: 15; }\n    .form .input.input-rounded {\n      border-radius: 27; }\n\n/* This is here temporarily because _index.ios.scss cannot be empty */\n.h1 {\n  font-size: 32; }\n\n.slider {\n  margin: 10 15; }\n\n.sidedrawer-list-item-icon, .sidedrawer-list-item {\n  color: #949494; }\n\n.switch {\n  margin: 8 15; }\n\n.list-group .list-group-item {\n  padding: 16 15 16 15; }\n  .list-group .list-group-item .thumb {\n    margin-right: 15; }\n  .list-group .list-group-item .list-group-item-heading {\n    margin-bottom: 5; }\n\n.segmented-bar {\n  margin: 0 15;\n  color: #30bcff; }\n", ""]);

;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.scss' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app/advert/advert.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUploadedResult", function() { return ImageUploadedResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAccomodationResult", function() { return AddAccomodationResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTutorResult", function() { return AddTutorResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNoteResult", function() { return AddNoteResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAdvertisementResult", function() { return AddAdvertisementResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateAdvertisementResult", function() { return UpdateAdvertisementResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteAdvertisementResult", function() { return DeleteAdvertisementResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Textbook", function() { return Textbook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextbookList", function() { return TextbookList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadImage", function() { return UploadImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextbookResult", function() { return TextbookResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextbookResultList", function() { return TextbookResultList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadTextbookResult", function() { return UploadTextbookResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccomodationResult", function() { return AccomodationResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccomodationResultList", function() { return AccomodationResultList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorResult", function() { return TutorResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorResultList", function() { return TutorResultList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteResult", function() { return NoteResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteResultList", function() { return NoteResultList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAdvertTextbookResult", function() { return UserAdvertTextbookResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAdvertTextbookResultList", function() { return UserAdvertTextbookResultList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAdvertAccomodationResult", function() { return UserAdvertAccomodationResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAdvertAccomodationResultList", function() { return UserAdvertAccomodationResultList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAdvertTutorResult", function() { return UserAdvertTutorResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAdvertTutorResultList", function() { return UserAdvertTutorResultList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAdvertNoteResult", function() { return UserAdvertNoteResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAdvertNoteResultList", function() { return UserAdvertNoteResultList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleCode", function() { return ModuleCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleCodeList", function() { return ModuleCodeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivechatResult", function() { return ActivechatResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivechatResultList", function() { return ActivechatResultList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageResult", function() { return MessageResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageResultList", function() { return MessageResultList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutstandingratingResult", function() { return OutstandingratingResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutstandingratingResultList", function() { return OutstandingratingResultList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateSellerResult", function() { return RateSellerResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviousratingResult", function() { return PreviousratingResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviousratingResultList", function() { return PreviousratingResultList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartChatResult", function() { return StartChatResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestedbuyerResult", function() { return InterestedbuyerResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestedbuyerResultList", function() { return InterestedbuyerResultList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateBuyerResult", function() { return RateBuyerResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnreadChatsResult", function() { return UnreadChatsResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteChatResult", function() { return DeleteChatResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutstandingRatingResult", function() { return OutstandingRatingResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyingAverageResult", function() { return BuyingAverageResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellingAverageResult", function() { return SellingAverageResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBookResult", function() { return GetBookResult; });
var ImageUploadedResult = /** @class */ (function () {
    function ImageUploadedResult(ImageInserted, Message) {
        this.ImageInserted = ImageInserted;
        this.Message = Message;
    }
    ImageUploadedResult.ctorParameters = function () { return [
        { type: Boolean },
        { type: String }
    ]; };
    return ImageUploadedResult;
}());

var AddAccomodationResult = /** @class */ (function () {
    function AddAccomodationResult(responseStatusCode, accomodationadded, id, message) {
        this.responseStatusCode = responseStatusCode;
        this.accomodationadded = accomodationadded;
        this.id = id;
        this.message = message;
    }
    AddAccomodationResult.ctorParameters = function () { return [
        { type: Number },
        { type: Boolean },
        { type: String },
        { type: String }
    ]; };
    return AddAccomodationResult;
}());

var AddTutorResult = /** @class */ (function () {
    function AddTutorResult(responseStatusCode, tutoradded, id, message) {
        this.responseStatusCode = responseStatusCode;
        this.tutoradded = tutoradded;
        this.id = id;
        this.message = message;
    }
    AddTutorResult.ctorParameters = function () { return [
        { type: Number },
        { type: Boolean },
        { type: String },
        { type: String }
    ]; };
    return AddTutorResult;
}());

var AddNoteResult = /** @class */ (function () {
    function AddNoteResult(responseStatusCode, noteadded, id, message) {
        this.responseStatusCode = responseStatusCode;
        this.noteadded = noteadded;
        this.id = id;
        this.message = message;
    }
    AddNoteResult.ctorParameters = function () { return [
        { type: Number },
        { type: Boolean },
        { type: String },
        { type: String }
    ]; };
    return AddNoteResult;
}());

var AddAdvertisementResult = /** @class */ (function () {
    function AddAdvertisementResult(responseStatusCode, advertisementposted, id, message) {
        this.responseStatusCode = responseStatusCode;
        this.advertisementposted = advertisementposted;
        this.id = id;
        this.message = message;
    }
    AddAdvertisementResult.ctorParameters = function () { return [
        { type: Number },
        { type: Boolean },
        { type: String },
        { type: String }
    ]; };
    return AddAdvertisementResult;
}());

var UpdateAdvertisementResult = /** @class */ (function () {
    function UpdateAdvertisementResult(responseStatusCode, advertisementUpdated, message) {
        this.responseStatusCode = responseStatusCode;
        this.advertisementUpdated = advertisementUpdated;
        this.message = message;
    }
    UpdateAdvertisementResult.ctorParameters = function () { return [
        { type: Number },
        { type: Boolean },
        { type: String }
    ]; };
    return UpdateAdvertisementResult;
}());

var DeleteAdvertisementResult = /** @class */ (function () {
    function DeleteAdvertisementResult(responseStatusCode, advertisementDeleted, advertisementID, message) {
        this.responseStatusCode = responseStatusCode;
        this.advertisementDeleted = advertisementDeleted;
        this.advertisementID = advertisementID;
        this.message = message;
    }
    DeleteAdvertisementResult.ctorParameters = function () { return [
        { type: Number },
        { type: Boolean },
        { type: String },
        { type: String }
    ]; };
    return DeleteAdvertisementResult;
}());

var Textbook = /** @class */ (function () {
    function Textbook(responseCode, modulecode, ID, name, edition, quality, author) {
        this.responseCode = responseCode;
        this.modulecode = modulecode;
        this.ID = ID;
        this.name = name;
        this.edition = edition;
        this.quality = quality;
        this.author = author;
    }
    Textbook.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return Textbook;
}());

var TextbookList = /** @class */ (function () {
    function TextbookList(responseCode, Textbooks) {
        this.responseCode = responseCode;
        this.Textbooks = Textbooks;
    }
    TextbookList.ctorParameters = function () { return [
        { type: Number },
        { type: Array }
    ]; };
    return TextbookList;
}());

var UploadImage = /** @class */ (function () {
    function UploadImage(entityid, ismainimage, imagebytes) {
        this.entityid = entityid;
        this.ismainimage = ismainimage;
        this.imagebytes = imagebytes;
    }
    UploadImage.ctorParameters = function () { return [
        { type: String },
        { type: Boolean },
        { type: String }
    ]; };
    return UploadImage;
}());

var TextbookResult = /** @class */ (function () {
    function TextbookResult(responseStatusCode, advertisementid, userid, isselling, advertisementtype, price, description, textbookid, modulecode, textbookname, edition, quality, author, institution, imagebytes) {
        this.responseStatusCode = responseStatusCode;
        this.advertisementid = advertisementid;
        this.userid = userid;
        this.isselling = isselling;
        this.advertisementtype = advertisementtype;
        this.price = price;
        this.description = description;
        this.textbookid = textbookid;
        this.modulecode = modulecode;
        this.textbookname = textbookname;
        this.edition = edition;
        this.quality = quality;
        this.author = author;
        this.institution = institution;
        this.imagebytes = imagebytes;
    }
    TextbookResult.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: Boolean },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return TextbookResult;
}());

var TextbookResultList = /** @class */ (function () {
    function TextbookResultList(responseStatusCode, Textbooks) {
        this.responseStatusCode = responseStatusCode;
        this.Textbooks = Textbooks;
    }
    TextbookResultList.ctorParameters = function () { return [
        { type: Number },
        { type: Array }
    ]; };
    return TextbookResultList;
}());

var UploadTextbookResult = /** @class */ (function () {
    function UploadTextbookResult(modulecode, ID, name, edition, quality, author, responseCode) {
        this.modulecode = modulecode;
        this.ID = ID;
        this.name = name;
        this.edition = edition;
        this.quality = quality;
        this.author = author;
        this.responseCode = responseCode;
    }
    UploadTextbookResult.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: Number }
    ]; };
    return UploadTextbookResult;
}());

var AccomodationResult = /** @class */ (function () {
    function AccomodationResult(responseStatusCode, advertisementid, userid, isselling, advertisementtype, price, description, accomodationid, accomodationtypecode, location, distancetocampus, institutionname, imagebytes) {
        this.responseStatusCode = responseStatusCode;
        this.advertisementid = advertisementid;
        this.userid = userid;
        this.isselling = isselling;
        this.advertisementtype = advertisementtype;
        this.price = price;
        this.description = description;
        this.accomodationid = accomodationid;
        this.accomodationtypecode = accomodationtypecode;
        this.location = location;
        this.distancetocampus = distancetocampus;
        this.institutionname = institutionname;
        this.imagebytes = imagebytes;
    }
    AccomodationResult.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: Boolean },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return AccomodationResult;
}());

var AccomodationResultList = /** @class */ (function () {
    function AccomodationResultList(responseStatusCode, Accomodations) {
        this.responseStatusCode = responseStatusCode;
        this.Accomodations = Accomodations;
    }
    AccomodationResultList.ctorParameters = function () { return [
        { type: Number },
        { type: Array }
    ]; };
    return AccomodationResultList;
}());

var TutorResult = /** @class */ (function () {
    function TutorResult(responseStatusCode, advertisementid, userid, isselling, advertisementtype, price, description, tutorid, subject, yearcompleted, venue, notesincluded, terms, modulecode, institution, imagebytes) {
        this.responseStatusCode = responseStatusCode;
        this.advertisementid = advertisementid;
        this.userid = userid;
        this.isselling = isselling;
        this.advertisementtype = advertisementtype;
        this.price = price;
        this.description = description;
        this.tutorid = tutorid;
        this.subject = subject;
        this.yearcompleted = yearcompleted;
        this.venue = venue;
        this.notesincluded = notesincluded;
        this.terms = terms;
        this.modulecode = modulecode;
        this.institution = institution;
        this.imagebytes = imagebytes;
    }
    TutorResult.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: Boolean },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return TutorResult;
}());

var TutorResultList = /** @class */ (function () {
    function TutorResultList(responseStatusCode, Tutors) {
        this.responseStatusCode = responseStatusCode;
        this.Tutors = Tutors;
    }
    TutorResultList.ctorParameters = function () { return [
        { type: Number },
        { type: Array }
    ]; };
    return TutorResultList;
}());

var NoteResult = /** @class */ (function () {
    function NoteResult(responseStatusCode, advertisementid, userid, isselling, advertisementtype, price, description, noteid, modulecode, institution, imagebytes) {
        this.responseStatusCode = responseStatusCode;
        this.advertisementid = advertisementid;
        this.userid = userid;
        this.isselling = isselling;
        this.advertisementtype = advertisementtype;
        this.price = price;
        this.description = description;
        this.noteid = noteid;
        this.modulecode = modulecode;
        this.institution = institution;
        this.imagebytes = imagebytes;
    }
    NoteResult.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: Boolean },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return NoteResult;
}());

var NoteResultList = /** @class */ (function () {
    function NoteResultList(responseStatusCode, Notes) {
        this.responseStatusCode = responseStatusCode;
        this.Notes = Notes;
    }
    NoteResultList.ctorParameters = function () { return [
        { type: Number },
        { type: Array }
    ]; };
    return NoteResultList;
}());

var UserAdvertTextbookResult = /** @class */ (function () {
    function UserAdvertTextbookResult(responseStatusCode, advertisementid, userid, isselling, advertisementtype, price, description, textbookid, modulecode, textbookname, edition, quality, author, imagebytes) {
        this.responseStatusCode = responseStatusCode;
        this.advertisementid = advertisementid;
        this.userid = userid;
        this.isselling = isselling;
        this.advertisementtype = advertisementtype;
        this.price = price;
        this.description = description;
        this.textbookid = textbookid;
        this.modulecode = modulecode;
        this.textbookname = textbookname;
        this.edition = edition;
        this.quality = quality;
        this.author = author;
        this.imagebytes = imagebytes;
    }
    UserAdvertTextbookResult.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: Boolean },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return UserAdvertTextbookResult;
}());

var UserAdvertTextbookResultList = /** @class */ (function () {
    function UserAdvertTextbookResultList(responseStatusCode, Textbooks) {
        this.responseStatusCode = responseStatusCode;
        this.Textbooks = Textbooks;
    }
    UserAdvertTextbookResultList.ctorParameters = function () { return [
        { type: Number },
        { type: Array }
    ]; };
    return UserAdvertTextbookResultList;
}());

var UserAdvertAccomodationResult = /** @class */ (function () {
    function UserAdvertAccomodationResult(responseStatusCode, advertisementid, userid, isselling, advertisementtype, price, description, accomodationid, accomodationtypecode, location, distancetocampus, institutionname, imagebytes) {
        this.responseStatusCode = responseStatusCode;
        this.advertisementid = advertisementid;
        this.userid = userid;
        this.isselling = isselling;
        this.advertisementtype = advertisementtype;
        this.price = price;
        this.description = description;
        this.accomodationid = accomodationid;
        this.accomodationtypecode = accomodationtypecode;
        this.location = location;
        this.distancetocampus = distancetocampus;
        this.institutionname = institutionname;
        this.imagebytes = imagebytes;
    }
    UserAdvertAccomodationResult.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: Boolean },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return UserAdvertAccomodationResult;
}());

var UserAdvertAccomodationResultList = /** @class */ (function () {
    function UserAdvertAccomodationResultList(responseStatusCode, Accomodations) {
        this.responseStatusCode = responseStatusCode;
        this.Accomodations = Accomodations;
    }
    UserAdvertAccomodationResultList.ctorParameters = function () { return [
        { type: Number },
        { type: Array }
    ]; };
    return UserAdvertAccomodationResultList;
}());

var UserAdvertTutorResult = /** @class */ (function () {
    function UserAdvertTutorResult(responseStatusCode, advertisementid, userid, isselling, advertisementtype, price, description, tutorid, subject, yearcompleted, venue, notesincluded, terms, modulecode, imagebytes) {
        this.responseStatusCode = responseStatusCode;
        this.advertisementid = advertisementid;
        this.userid = userid;
        this.isselling = isselling;
        this.advertisementtype = advertisementtype;
        this.price = price;
        this.description = description;
        this.tutorid = tutorid;
        this.subject = subject;
        this.yearcompleted = yearcompleted;
        this.venue = venue;
        this.notesincluded = notesincluded;
        this.terms = terms;
        this.modulecode = modulecode;
        this.imagebytes = imagebytes;
    }
    UserAdvertTutorResult.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: Boolean },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return UserAdvertTutorResult;
}());

var UserAdvertTutorResultList = /** @class */ (function () {
    function UserAdvertTutorResultList(responseStatusCode, Tutors) {
        this.responseStatusCode = responseStatusCode;
        this.Tutors = Tutors;
    }
    UserAdvertTutorResultList.ctorParameters = function () { return [
        { type: Number },
        { type: Array }
    ]; };
    return UserAdvertTutorResultList;
}());

var UserAdvertNoteResult = /** @class */ (function () {
    function UserAdvertNoteResult(responseStatusCode, advertisementid, userid, isselling, advertisementtype, price, description, noteid, modulecode, imagebytes) {
        this.responseStatusCode = responseStatusCode;
        this.advertisementid = advertisementid;
        this.userid = userid;
        this.isselling = isselling;
        this.advertisementtype = advertisementtype;
        this.price = price;
        this.description = description;
        this.noteid = noteid;
        this.modulecode = modulecode;
        this.imagebytes = imagebytes;
    }
    UserAdvertNoteResult.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: Boolean },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return UserAdvertNoteResult;
}());

var UserAdvertNoteResultList = /** @class */ (function () {
    function UserAdvertNoteResultList(responseStatusCode, Notes) {
        this.responseStatusCode = responseStatusCode;
        this.Notes = Notes;
    }
    UserAdvertNoteResultList.ctorParameters = function () { return [
        { type: Number },
        { type: Array }
    ]; };
    return UserAdvertNoteResultList;
}());

var ModuleCode = /** @class */ (function () {
    function ModuleCode(responseStatusCode, code) {
        this.responseStatusCode = responseStatusCode;
        this.code = code;
    }
    ModuleCode.ctorParameters = function () { return [
        { type: Number },
        { type: String }
    ]; };
    return ModuleCode;
}());

var ModuleCodeList = /** @class */ (function () {
    function ModuleCodeList(responseStatusCode, ModuleCodes) {
        this.responseStatusCode = responseStatusCode;
        this.ModuleCodes = ModuleCodes;
    }
    ModuleCodeList.ctorParameters = function () { return [
        { type: Number },
        { type: Array }
    ]; };
    return ModuleCodeList;
}());

//messaging service
var ActivechatResult = /** @class */ (function () {
    function ActivechatResult(responseStatusCode, chatid, advertisementtype, advertisementid, username, price, title, description, message, messagedate, isread, messageauthor) {
        this.responseStatusCode = responseStatusCode;
        this.chatid = chatid;
        this.advertisementtype = advertisementtype;
        this.advertisementid = advertisementid;
        this.username = username;
        this.price = price;
        this.title = title;
        this.description = description;
        this.message = message;
        this.messagedate = messagedate;
        this.isread = isread;
        this.messageauthor = messageauthor;
    }
    ActivechatResult.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return ActivechatResult;
}());

var ActivechatResultList = /** @class */ (function () {
    function ActivechatResultList(responseStatusCode, Activechats, message) {
        this.responseStatusCode = responseStatusCode;
        this.Activechats = Activechats;
        this.message = message;
    }
    ActivechatResultList.ctorParameters = function () { return [
        { type: Number },
        { type: Array },
        { type: String }
    ]; };
    return ActivechatResultList;
}());

var MessageResult = /** @class */ (function () {
    function MessageResult(responseStatusCode, messageid, username, message, messagedate) {
        this.responseStatusCode = responseStatusCode;
        this.messageid = messageid;
        this.username = username;
        this.message = message;
        this.messagedate = messagedate;
    }
    MessageResult.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return MessageResult;
}());

var MessageResultList = /** @class */ (function () {
    function MessageResultList(responseStatusCode, Messages, message) {
        this.responseStatusCode = responseStatusCode;
        this.Messages = Messages;
        this.message = message;
    }
    MessageResultList.ctorParameters = function () { return [
        { type: Number },
        { type: Array },
        { type: String }
    ]; };
    return MessageResultList;
}());

var OutstandingratingResult = /** @class */ (function () {
    function OutstandingratingResult(responseStatusCode, ratingid, username, price, title, description) {
        this.responseStatusCode = responseStatusCode;
        this.ratingid = ratingid;
        this.username = username;
        this.price = price;
        this.title = title;
        this.description = description;
    }
    OutstandingratingResult.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return OutstandingratingResult;
}());

var OutstandingratingResultList = /** @class */ (function () {
    function OutstandingratingResultList(responseStatusCode, Outstandingratings, message) {
        this.responseStatusCode = responseStatusCode;
        this.Outstandingratings = Outstandingratings;
        this.message = message;
    }
    OutstandingratingResultList.ctorParameters = function () { return [
        { type: Number },
        { type: Array },
        { type: String }
    ]; };
    return OutstandingratingResultList;
}());

var RateSellerResult = /** @class */ (function () {
    function RateSellerResult(responseStatusCode, sellerrated, message) {
        this.responseStatusCode = responseStatusCode;
        this.sellerrated = sellerrated;
        this.message = message;
    }
    RateSellerResult.ctorParameters = function () { return [
        { type: Number },
        { type: Boolean },
        { type: String }
    ]; };
    return RateSellerResult;
}());

var PreviousratingResult = /** @class */ (function () {
    function PreviousratingResult(responseStatusCode, ratingid, username, rating, comment) {
        this.responseStatusCode = responseStatusCode;
        this.ratingid = ratingid;
        this.username = username;
        this.rating = rating;
        this.comment = comment;
    }
    PreviousratingResult.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return PreviousratingResult;
}());

var PreviousratingResultList = /** @class */ (function () {
    function PreviousratingResultList(responseStatusCode, Previousratings, message) {
        this.responseStatusCode = responseStatusCode;
        this.Previousratings = Previousratings;
        this.message = message;
    }
    PreviousratingResultList.ctorParameters = function () { return [
        { type: Number },
        { type: Array },
        { type: String }
    ]; };
    return PreviousratingResultList;
}());

var StartChatResult = /** @class */ (function () {
    function StartChatResult(responseStatusCode, chatposted, chatID, message) {
        this.responseStatusCode = responseStatusCode;
        this.chatposted = chatposted;
        this.chatID = chatID;
        this.message = message;
    }
    StartChatResult.ctorParameters = function () { return [
        { type: Number },
        { type: Boolean },
        { type: String },
        { type: String }
    ]; };
    return StartChatResult;
}());

var InterestedbuyerResult = /** @class */ (function () {
    function InterestedbuyerResult(responseStatusCode, username, advertisementid, advertisementtype, sellerid, buyerid) {
        this.responseStatusCode = responseStatusCode;
        this.username = username;
        this.advertisementid = advertisementid;
        this.advertisementtype = advertisementtype;
        this.sellerid = sellerid;
        this.buyerid = buyerid;
    }
    InterestedbuyerResult.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return InterestedbuyerResult;
}());

var InterestedbuyerResultList = /** @class */ (function () {
    function InterestedbuyerResultList(responseStatusCode, Interestedbuyers, message) {
        this.responseStatusCode = responseStatusCode;
        this.Interestedbuyers = Interestedbuyers;
        this.message = message;
    }
    InterestedbuyerResultList.ctorParameters = function () { return [
        { type: Number },
        { type: Array },
        { type: String }
    ]; };
    return InterestedbuyerResultList;
}());

var RateBuyerResult = /** @class */ (function () {
    function RateBuyerResult(responseStatusCode, buyerrated, ratingid, message) {
        this.responseStatusCode = responseStatusCode;
        this.buyerrated = buyerrated;
        this.ratingid = ratingid;
        this.message = message;
    }
    RateBuyerResult.ctorParameters = function () { return [
        { type: Number },
        { type: Boolean },
        { type: String },
        { type: String }
    ]; };
    return RateBuyerResult;
}());

var UnreadChatsResult = /** @class */ (function () {
    function UnreadChatsResult(responseStatusCode, unreadmessages) {
        this.responseStatusCode = responseStatusCode;
        this.unreadmessages = unreadmessages;
    }
    UnreadChatsResult.ctorParameters = function () { return [
        { type: Number },
        { type: Boolean }
    ]; };
    return UnreadChatsResult;
}());

var DeleteChatResult = /** @class */ (function () {
    function DeleteChatResult(responseStatusCode, chatposted, message) {
        this.responseStatusCode = responseStatusCode;
        this.chatposted = chatposted;
        this.message = message;
    }
    DeleteChatResult.ctorParameters = function () { return [
        { type: Number },
        { type: Boolean },
        { type: String }
    ]; };
    return DeleteChatResult;
}());

var OutstandingRatingResult = /** @class */ (function () {
    function OutstandingRatingResult(responseStatusCode, outstandingratings) {
        this.responseStatusCode = responseStatusCode;
        this.outstandingratings = outstandingratings;
    }
    OutstandingRatingResult.ctorParameters = function () { return [
        { type: Number },
        { type: Boolean }
    ]; };
    return OutstandingRatingResult;
}());

var BuyingAverageResult = /** @class */ (function () {
    function BuyingAverageResult(responseStatusCode, average) {
        this.responseStatusCode = responseStatusCode;
        this.average = average;
    }
    BuyingAverageResult.ctorParameters = function () { return [
        { type: Number },
        { type: String }
    ]; };
    return BuyingAverageResult;
}());

var SellingAverageResult = /** @class */ (function () {
    function SellingAverageResult(responseStatusCode, average) {
        this.responseStatusCode = responseStatusCode;
        this.average = average;
    }
    SellingAverageResult.ctorParameters = function () { return [
        { type: Number },
        { type: String }
    ]; };
    return SellingAverageResult;
}());

var GetBookResult = /** @class */ (function () {
    function GetBookResult(responseStatusCode, Title, Author) {
        this.responseStatusCode = responseStatusCode;
        this.Title = Title;
        this.Author = Author;
    }
    GetBookResult.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String }
    ]; };
    return GetBookResult;
}());



/***/ }),

/***/ "./app/advert/advert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertService", function() { return AdvertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _advert_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/advert/advert.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/tns-core-modules/http/http.js");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__);



//import { TextbookResult, TextbookResultList } from './advert.model';



//Used for chat styling

var AdvertService = /** @class */ (function () {
    function AdvertService(http) {
        this.http = http;
        this._currentImageUploaded = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentAddTextbookList = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentAddTextbook = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentTextbookList = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentTextbook = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentUploadTextbook = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentAccomodationList = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentAccomodation = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentTutorList = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentTutor = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentNoteList = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentNote = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentUserAdvertTextbookList = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentUserAdvertTextbook = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentUserAdvertAccomodationList = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentUserAdvertAccomodation = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentUserAdvertTutorList = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentUserAdvertTutor = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentUserAdvertNoteList = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentUserAdvertNote = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentAddAdvertisement = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentAddAccomodation = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentAddTutor = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentAddNote = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        //private _currentUploadImage = new BehaviorSubject<UploadImage>(null);
        this._currentDeleteAdvertisementResult = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentUpdateAdvertisementResult = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentModuleCode = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentModuleCodeList = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        //Messaging, active chat service
        this._currentActivechatList = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentActivechat = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        //messaging messages service
        this._currentMessageList = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentMessage = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        //send message service
        this._currentSendMessage = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        //private _currentUserAdvertList = new BehaviorSubject
        //Rating,outstanding service
        this._currentOutstandingratingList = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentOutstandingrating = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        //rate seller service
        this._currentRateSeller = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        //Rating dashboards
        this._currentPreviousratingList = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentPreviousrating = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        //rate buyer
        this._currentRateBuyer = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        //Rating, interested buyers
        this._currentInterestedbuyerList = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentInterestedbuyer = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentStartChat = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentUnreadChats = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentDeleteChatResult = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentOutstandingRating = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentBuyingAverage = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentSellingAverage = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentGetBook = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["setString"])("sm-service-ratings-host", "http://10.10.100.147:9957");
        Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["setString"])("sm-service-advert-manager-host", "http://10.10.100.147:9953");
        Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["setString"])("sm-service-file-manager-host", "http://10.10.100.147:9955");
        Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["setString"])("sm-service-messages-host", "http://10.10.100.147:9956");
    }
    Object.defineProperty(AdvertService.prototype, "currentImageUploaded", {
        get: function () {
            return this._currentImageUploaded.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentTextbookList", {
        get: function () {
            return this._currentTextbookList.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentTextbook", {
        get: function () {
            return this._currentTextbook.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentActivechatList", {
        // Messaging active chat results
        get: function () {
            return this._currentActivechatList.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentActivechat", {
        get: function () {
            return this._currentActivechat.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentMessageList", {
        // Messaging message results
        get: function () {
            return this._currentMessageList.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentMessage", {
        get: function () {
            return this._currentMessage.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentSendMessage", {
        //Send message
        get: function () {
            return this._currentSendMessage.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentStartChat", {
        //start chat
        get: function () {
            return this._currentStartChat.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentUnreadMessages", {
        //start chat
        get: function () {
            return this._currentUnreadChats.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentRateBuyer", {
        //Rate buyer
        get: function () {
            return this._currentRateBuyer.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentOutstandingratingList", {
        // Rating Outstanding results
        get: function () {
            return this._currentOutstandingratingList.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentOutstandingrating", {
        get: function () {
            return this._currentOutstandingrating.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentRateSeller", {
        //Rate seller
        get: function () {
            return this._currentRateSeller.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentOutstandingRating", {
        get: function () {
            return this._currentOutstandingRating.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentBuyingAverage", {
        get: function () {
            return this._currentBuyingAverage.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentSellingAverage", {
        get: function () {
            return this._currentSellingAverage.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentAccomodationList", {
        get: function () {
            return this._currentAccomodationList.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentAccomodation", {
        get: function () {
            return this._currentAccomodation.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentTutorList", {
        get: function () {
            return this._currentTutorList.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentTutor", {
        get: function () {
            return this._currentTutor.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentNoteList", {
        get: function () {
            return this._currentNoteList.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentNote", {
        get: function () {
            return this._currentNote.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentUserAdvertTextbookList", {
        get: function () {
            return this._currentUserAdvertTextbookList.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentUserAdvertTextbook", {
        get: function () {
            return this._currentUserAdvertTextbook.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentUserAdvertAccomodationList", {
        get: function () {
            return this._currentUserAdvertAccomodationList.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentUserAdvertAccomodation", {
        get: function () {
            return this._currentUserAdvertAccomodation.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentUserAdvertTutorList", {
        get: function () {
            return this._currentUserAdvertTutorList.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentUserAdvertTutor", {
        get: function () {
            return this._currentUserAdvertTutor.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentUserAdvertNoteList", {
        get: function () {
            return this._currentUserAdvertNoteList.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentUserAdvertNote", {
        get: function () {
            return this._currentUserAdvertNote.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentAddTextbook", {
        get: function () {
            return this._currentAddTextbook.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentAddTextbookList", {
        get: function () {
            return this._currentAddTextbookList.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentAddAccomodation", {
        get: function () {
            return this._currentAddAccomodation.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentAddTutor", {
        get: function () {
            return this._currentAddTutor.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentAddNote", {
        get: function () {
            return this._currentAddNote.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentAddAdvertisement", {
        get: function () {
            return this._currentAddAdvertisement.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentModuleCode", {
        get: function () {
            return this._currentModuleCode.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentModuleCodeList", {
        get: function () {
            return this._currentModuleCodeList.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentPreviousratingList", {
        // Rating Dashboard results
        get: function () {
            return this._currentPreviousratingList.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentPreviousrating", {
        get: function () {
            return this._currentPreviousrating.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentInterestedbuyerList", {
        // Rating interested parties result
        get: function () {
            return this._currentInterestedbuyerList.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentInterestedbuyer", {
        get: function () {
            return this._currentInterestedbuyer.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentDeleteAdvertisementResult", {
        /*get currentUploadImage(){
            return this._currentUploadImage.asObservable();
        }*/
        get: function () {
            return this._currentDeleteAdvertisementResult.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentDeleteChatResult", {
        get: function () {
            return this._currentDeleteChatResult.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentUpdateAdvertisementResult", {
        get: function () {
            return this._currentUpdateAdvertisementResult.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentGetBook", {
        get: function () {
            return this._currentGetBook.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvertService.prototype, "currentUploadTextbook", {
        get: function () {
            return this._currentUploadTextbook.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    AdvertService.prototype.initializeModuleCodeList = function () {
        var _this = this;
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-advert-manager-host") + "/modulecode";
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var modulecodeErr = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["ModuleCode"](500, null);
            }
            else if (responseCode === 200) {
                var result = response.content.toJSON();
                var modulecodeList_1 = [];
                var JSONModuleCodeList = result.modulecodes;
                JSONModuleCodeList.forEach(function (element) {
                    element.responseStatusCode = 200;
                    modulecodeList_1.push(element);
                });
                var toNextList = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["ModuleCodeList"](200, modulecodeList_1);
                _this._currentModuleCodeList.next(toNextList);
            }
            else {
                console.log("in the else");
            }
        }, function (e) {
            console.log(e);
        });
        return null;
    };
    AdvertService.prototype.initializeAddTextbookList = function () {
        var _this = this;
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-advert-manager-host") + "/textbooks";
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var textbookErr = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["Textbook"](500, null, null, null, null, null, null);
            }
            else if (responseCode === 200) {
                var result = response.content.toJSON();
                var textbookList_1 = [];
                var JSONTextbookList = result.textbooks;
                // iterate through the textbooklist and read each textbook into a textbook object and push to the list variable
                JSONTextbookList.forEach(function (element) {
                    element.responseStatusCode = 200;
                    textbookList_1.push(element);
                });
                var textbookListResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["TextbookList"](200, textbookList_1);
                _this._currentAddTextbookList.next(textbookListResult);
            }
            else {
                // TODO : Handle if code other than 200 or 500 has been received
                console.log("in the else");
            }
        }, function (e) {
            // TODO : Handle error
            console.log(e);
        });
        return null;
    };
    AdvertService.prototype.setImageUploaded = function (uploaded) {
        this._currentImageUploaded.next(uploaded);
    };
    AdvertService.prototype.clearImageUploaded = function () {
        this._currentImageUploaded.next(null);
    };
    AdvertService.prototype.setAddTextbook = function (textbook) {
        this._currentAddTextbook.next(textbook);
    };
    AdvertService.prototype.clearAddTextbook = function () {
        this._currentAddTextbook = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    };
    AdvertService.prototype.GetBook = function (isbn) {
        var _this = this;
        var reqUrl = "https://api.altmetric.com/v1/isbn/" + isbn;
        console.log(reqUrl);
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var getbookResultErr = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["GetBookResult"](500, 'Please enter Title', 'Please enter author(s)');
                _this._currentGetBook.next(getbookResultErr);
            }
            else if (responseCode === 200) {
                var result = response.content.toJSON();
                var getbookResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["GetBookResult"](200, result.title, result.authors || result.authors_or_editors);
                _this._currentGetBook.next(getbookResult);
            }
            else {
                var getbookResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["GetBookResult"](responseCode, 'Please enter Title', 'Please enter author(s)');
                _this._currentGetBook.next(getbookResult);
            }
        }, function (e) {
            var getbookResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["GetBookResult"](400, 'Please enter Title', 'Please enter author(s)');
            _this._currentGetBook.next(getbookResult);
        });
    };
    AdvertService.prototype.UploadNewTextbook = function (modulecode, name, edition, quality, author) {
        var _this = this;
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-advert-manager-host") + "/textbook";
        console.log(reqUrl);
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ modulecode: modulecode, name: name, edition: edition, quality: quality, author: author }),
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var UploadTextbookResultErr = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["UploadTextbookResult"]('none', '00000000-0000-0000-0000-000000000000', 'none', 'none', 'none', 'none', 500);
                _this._currentUploadTextbook.next(UploadTextbookResultErr);
            }
            else if (responseCode === 200) {
                var result = response.content.toJSON();
                var UploadsuccessResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["UploadTextbookResult"](result.modulecode, result.id, result.name, result.edition, result.quality, result.author, 200);
                _this._currentUploadTextbook.next(UploadsuccessResult);
            }
            else {
                var UploadsuccessResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["UploadTextbookResult"]('none', '00000000-0000-0000-0000-000000000000', 'none', 'none', 'none', 'none', responseCode);
                _this._currentUploadTextbook.next(UploadsuccessResult);
            }
        }, function (e) {
            var UploadsuccessResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["UploadTextbookResult"]('none', '00000000-0000-0000-0000-000000000000', 'none', 'none', 'none', 'none', 400);
            _this._currentUploadTextbook.next(UploadsuccessResult);
        });
        return null;
    };
    AdvertService.prototype.deleteAdvertisement = function (advertisementID) {
        var _this = this;
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-advert-manager-host") + "/advertisement?id=" + advertisementID;
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "DELETE",
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var DeleteAdvertisementResultErr = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["DeleteAdvertisementResult"](500, false, advertisementID, 'An internal error has occured.');
                _this._currentDeleteAdvertisementResult.next(DeleteAdvertisementResultErr);
            }
            else if (responseCode === 200) {
                var result = response.content.toJSON();
                var DeleteAdvertisementResultSuccess = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["DeleteAdvertisementResult"](200, result.advertisementdeleted, result.id, result.message);
                _this._currentDeleteAdvertisementResult.next(DeleteAdvertisementResultSuccess);
            }
            else {
                var DeleteAdvertisementResultErr = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["DeleteAdvertisementResult"](responseCode, false, advertisementID, 'An internal error has occured.');
                _this._currentDeleteAdvertisementResult.next(DeleteAdvertisementResultErr);
            }
        }, function (e) {
            console.log("Error Encountered: " + e);
        });
    };
    AdvertService.prototype.AddNewImage = function (advertisementID, isMainImage, imageBytes) {
        var _this = this;
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-file-manager-host") + "/uploadimage";
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ entityid: advertisementID, ismainimage: isMainImage, imagebytes: imageBytes }),
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 200) {
                //const result = response.content.toJSON();
                var addImageResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["ImageUploadedResult"](true, "Success");
                _this.setImageUploaded(addImageResult);
                console.log("Image Successfully uploaded and linked to advertisement: Status Code ---> " + responseCode);
            }
            else {
                //const result = response.content.toJSON();
                var addImageResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["ImageUploadedResult"](false, "Error");
                _this.setImageUploaded(addImageResult);
                console.log("Internal Error encountered: Status Code ---> " + responseCode);
            }
        }, function (e) {
            console.log("Error Encountered: " + e);
        });
    };
    AdvertService.prototype.AddNewTextbookAdvertisement = function (userID, isSelling, advertType, price, description, institution, entityID) {
        var _this = this;
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-advert-manager-host") + "/advertisement";
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ userid: userID, isselling: isSelling, advertisementtype: advertType, entityid: entityID, price: price, description: description, institution: institution }),
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var AddAdvertisementResultErr = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["AddAdvertisementResult"](500, false, '00000000-0000-0000-0000-000000000000', 'An internal error has occured.');
                _this._currentAddAdvertisement.next(AddAdvertisementResultErr);
            }
            else if (responseCode === 200) {
                var result = response.content.toJSON();
                var AddAdvertisementSuccess = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["AddAdvertisementResult"](200, result.advertisementposted, result.id, result.message);
                _this._currentAddAdvertisement.next(AddAdvertisementSuccess);
            }
            else {
                var AddAdvertisementSuccess = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["AddAdvertisementResult"](responseCode, false, '00000000-0000-0000-0000-000000000000', response.content.toString());
                _this._currentAddAdvertisement.next(AddAdvertisementSuccess);
            }
        }, function (e) {
            var AddAdvertisementSuccess = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["AddAdvertisementResult"](400, false, '00000000-0000-0000-0000-000000000000', "An Error has been recieved, please contact support.");
            _this._currentAddAdvertisement.next(AddAdvertisementSuccess);
        });
    };
    AdvertService.prototype.AddNewAccomodationAdvertisement = function (userID, isSelling, advertType, price, description, acdID, acdType, location, distancetocampus, instName) {
        var _this = this;
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-advert-manager-host") + "/accomodation";
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ id: acdID, accomodationtypecode: acdType, institutionname: instName, location: location, distancetocampus: distancetocampus }),
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var AddAccomodationResultErr = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["AddAccomodationResult"](500, false, '00000000-0000-0000-0000-000000000000', 'An internal error has occured.');
                _this._currentAddAccomodation.next(AddAccomodationResultErr);
            }
            else if (responseCode === 200) {
                var result = response.content.toJSON();
                var AddAccomodationSuccess = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["AddAccomodationResult"](200, result.accomodationadded, result.id, result.message);
                _this._currentAddAccomodation.next(AddAccomodationSuccess);
                /* ===============================================================================================
                ==================================================================================================
                ================================================================================================*/
                var reqUrl_1 = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-advert-manager-host") + "/advertisement";
                console.log(reqUrl_1);
                console.log(JSON.stringify({ userid: userID, isselling: isSelling, advertisementtype: advertType, entityid: acdID, price: price, description: description, institution: instName }));
                Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
                    url: reqUrl_1,
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    content: JSON.stringify({ userid: userID, isselling: isSelling, advertisementtype: advertType, entityid: acdID, price: price, description: description, institution: instName }),
                    timeout: 5000
                }).then(function (response) {
                    var responseCode = response.statusCode;
                    if (responseCode === 500) {
                        var AddAdvertisementResultErr = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["AddAdvertisementResult"](500, false, '00000000-0000-0000-0000-000000000000', 'An internal error has occured.');
                        _this._currentAddAdvertisement.next(AddAdvertisementResultErr);
                    }
                    else if (responseCode === 200) {
                        var result_1 = response.content.toJSON();
                        var AddAdvertisementSuccess = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["AddAdvertisementResult"](200, result_1.advertisementposted, result_1.id, result_1.message);
                        _this._currentAddAdvertisement.next(AddAdvertisementSuccess);
                    }
                    else {
                        var AddAdvertisementSuccess = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["AddAdvertisementResult"](responseCode, false, '00000000-0000-0000-0000-000000000000', response.content.toString());
                        _this._currentAddAdvertisement.next(AddAdvertisementSuccess);
                    }
                }, function (e) {
                    var AddAdvertisementSuccess = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["AddAdvertisementResult"](400, false, '00000000-0000-0000-0000-000000000000', "An Error has been recieved, please contact support.");
                    _this._currentAddAdvertisement.next(AddAdvertisementSuccess);
                });
                /* ===============================================================================================
                ==================================================================================================
                ================================================================================================*/
            }
            else {
                var AddAccomodationSuccess = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["AddAccomodationResult"](responseCode, false, '00000000-0000-0000-0000-000000000000', response.content.toString());
                _this._currentAddAccomodation.next(AddAccomodationSuccess);
            }
        }, function (e) {
            var AddAccomodationSuccess = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["AddAccomodationResult"](400, false, '00000000-0000-0000-0000-000000000000', "An Error has been recieved, please contact support.");
            _this._currentAddAccomodation.next(AddAccomodationSuccess);
        });
        return null;
    };
    /* ADD NEW TUTOR ADVERTISEMENT */
    AdvertService.prototype.AddNewTutorAdvertisement = function (userID, isSelling, advertType, price, description, institution, entityID, subject, yearcompleted, venue, notesincluded, terms, moduleCode) {
        var _this = this;
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-advert-manager-host") + "/tutor";
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ id: entityID, modulecode: moduleCode, subject: subject, yearcompleted: yearcompleted, venue: venue, notesincluded: notesincluded, terms: terms }),
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var AddTutorResultErr = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["AddTutorResult"](500, false, '00000000-0000-0000-0000-000000000000', 'An internal error has occured.');
                _this._currentAddTutor.next(AddTutorResultErr);
            }
            else if (responseCode === 200) {
                var result = response.content.toJSON();
                var AddTutorSuccess = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["AddTutorResult"](200, result.tutoradded, result.id, result.message);
                _this._currentAddTutor.next(AddTutorSuccess);
                /* ===============================================================================================
                ==================================================================================================
                ================================================================================================*/
                var reqUrl_2 = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-advert-manager-host") + "/advertisement";
                //console.log(reqUrl);
                //console.log(JSON.stringify({ userid: userID, isselling: isSelling, advertisementtype: advertType, entityid: entityID, price: price, description: description, institution: institution }))
                Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
                    url: reqUrl_2,
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    content: JSON.stringify({ userid: userID, isselling: isSelling, advertisementtype: advertType, entityid: entityID, price: price, description: description, institution: institution }),
                    timeout: 5000
                }).then(function (response) {
                    var responseCode = response.statusCode;
                    if (responseCode === 500) {
                        var AddAdvertisementResultErr = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["AddAdvertisementResult"](500, false, '00000000-0000-0000-0000-000000000000', 'An internal error has occured.');
                        _this._currentAddAdvertisement.next(AddAdvertisementResultErr);
                    }
                    else if (responseCode === 200) {
                        var result_2 = response.content.toJSON();
                        var AddAdvertisementSuccess = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["AddAdvertisementResult"](200, result_2.advertisementposted, result_2.id, result_2.message);
                        _this._currentAddAdvertisement.next(AddAdvertisementSuccess);
                    }
                    else {
                        var AddAdvertisementSuccess = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["AddAdvertisementResult"](responseCode, false, '00000000-0000-0000-0000-000000000000', response.content.toString());
                        _this._currentAddAdvertisement.next(AddAdvertisementSuccess);
                    }
                }, function (e) {
                    var AddAdvertisementSuccess = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["AddAdvertisementResult"](400, false, '00000000-0000-0000-0000-000000000000', "An Error has been recieved, please contact support.");
                    _this._currentAddAdvertisement.next(AddAdvertisementSuccess);
                });
                /* ===============================================================================================
                ==================================================================================================
                ================================================================================================*/
            }
            else {
                var AddAccomodationSuccess = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["AddAccomodationResult"](responseCode, false, '00000000-0000-0000-0000-000000000000', response.content.toString());
                _this._currentAddAccomodation.next(AddAccomodationSuccess);
            }
        }, function (e) {
            var AddAccomodationSuccess = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["AddAccomodationResult"](400, false, '00000000-0000-0000-0000-000000000000', "An Error has been recieved, please contact support.");
            _this._currentAddAccomodation.next(AddAccomodationSuccess);
        });
        return null;
    };
    AdvertService.prototype.AddNewNoteAdvertisement = function (userID, isSelling, advertType, price, description, institution, entityID, moduleCode) {
        var _this = this;
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-advert-manager-host") + "/note";
        //console.log(reqUrl);
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ id: entityID, modulecode: moduleCode }),
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var AddNoteResultErr = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["AddNoteResult"](500, false, '00000000-0000-0000-0000-000000000000', 'An internal error has occured.');
                _this._currentAddNote.next(AddNoteResultErr);
            }
            else if (responseCode === 200) {
                var result = response.content.toJSON();
                var AddNoteSuccess = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["AddNoteResult"](200, result.noteadded, result.id, result.message);
                _this._currentAddNote.next(AddNoteSuccess);
                /* ===============================================================================================
                ==================================================================================================
                ================================================================================================*/
                var reqUrl_3 = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-advert-manager-host") + "/advertisement";
                //console.log(reqUrl);
                //console.log(JSON.stringify({ userid: userID, isselling: isSelling, advertisementtype: advertType, entityid: entityID, price: price, description: description, institution: institution }));
                Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
                    url: reqUrl_3,
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    content: JSON.stringify({ userid: userID, isselling: isSelling, advertisementtype: advertType, entityid: entityID, price: price, description: description, institution: institution }),
                    timeout: 5000
                }).then(function (response) {
                    var responseCode = response.statusCode;
                    if (responseCode === 500) {
                        var AddAdvertisementResultErr = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["AddAdvertisementResult"](500, false, '00000000-0000-0000-0000-000000000000', 'An internal error has occured.');
                        _this._currentAddAdvertisement.next(AddAdvertisementResultErr);
                    }
                    else if (responseCode === 200) {
                        var result_3 = response.content.toJSON();
                        var AddAdvertisementSuccess = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["AddAdvertisementResult"](200, result_3.advertisementposted, result_3.id, result_3.message);
                        _this._currentAddAdvertisement.next(AddAdvertisementSuccess);
                    }
                    else {
                        var AddAdvertisementSuccess = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["AddAdvertisementResult"](responseCode, false, '00000000-0000-0000-0000-000000000000', response.content.toString());
                        _this._currentAddAdvertisement.next(AddAdvertisementSuccess);
                    }
                }, function (e) {
                    var AddAdvertisementSuccess = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["AddAdvertisementResult"](400, false, '00000000-0000-0000-0000-000000000000', "An Error has been recieved, please contact support.");
                    _this._currentAddAdvertisement.next(AddAdvertisementSuccess);
                });
                /* ===============================================================================================
                ==================================================================================================
                ================================================================================================*/
            }
            else {
                var AddAccomodationSuccess = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["AddAccomodationResult"](responseCode, false, '00000000-0000-0000-0000-000000000000', response.content.toString());
                _this._currentAddAccomodation.next(AddAccomodationSuccess);
            }
        }, function (e) {
            var AddAccomodationSuccess = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["AddAccomodationResult"](400, false, '00000000-0000-0000-0000-000000000000', "An Error has been recieved, please contact support.");
            _this._currentAddAccomodation.next(AddAccomodationSuccess);
        });
        return null;
    };
    AdvertService.prototype.UpdateAdvertisement = function (advertisementid, userid, isSelling, advertType, entityid, price, description) {
        var _this = this;
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-advert-manager-host") + "/advertisement";
        console.log(reqUrl);
        //console.log(JSON.stringify({ id: advertisementid, userid: userid, isselling: isSelling, advertisementtype: advertType, entityid: entityid, price: price, description: description }));
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ id: advertisementid, userid: userid, isselling: isSelling, advertisementtype: advertType, entityid: entityid, price: price, description: description }),
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var UpdateAdvertisementResultErr = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["UpdateAdvertisementResult"](500, false, "An internal error has occured");
                _this._currentUpdateAdvertisementResult.next(UpdateAdvertisementResultErr);
            }
            else if (responseCode === 200) {
                var result = response.content.toJSON();
                var UpdateAdvertisementResultSuccess = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["UpdateAdvertisementResult"](200, result.advertisementupdated, result.message);
                _this._currentUpdateAdvertisementResult.next(UpdateAdvertisementResultSuccess);
            }
            else {
                var UpdateAdvertisementResultErr = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["UpdateAdvertisementResult"](responseCode, false, "An internal error has occured");
                _this._currentUpdateAdvertisementResult.next(UpdateAdvertisementResultErr);
            }
        });
    };
    AdvertService.prototype.initializeAdvertisements = function (isSelling, defaultInstitution) {
        this.initializeTextbooks(defaultInstitution, isSelling, 9999999, "", "", "", "", "");
        this.initializeAccomodation(defaultInstitution, isSelling, 999999, "", "", 999999);
        this.initializeTutors(defaultInstitution, isSelling, 999999, "", "", "", "", "", "");
        this.initializeNotes(defaultInstitution, isSelling, 999999, "");
    };
    AdvertService.prototype.initializeUserAdvertisements = function (userID, isSelling) {
        this.initializeUserAdvertTextbooks(userID, isSelling);
        this.initializeUserAdvertAccomodation(userID, isSelling);
        this.initializeUserAdvertTutors(userID, isSelling);
        this.initializeUserAdvertNotes(userID, isSelling);
    };
    AdvertService.prototype.clearUserAdvertisements = function () {
        this._currentUserAdvertTextbookList.next(null);
        this._currentUserAdvertAccomodationList.next(null);
        this._currentUserAdvertTutorList.next(null);
        this._currentUserAdvertNoteList.next(null);
    };
    AdvertService.prototype.initializeTextbooks = function (institution, isSelling, priceFilter, modulecodeFilter, nameFilter, editionFilter, qualityFilter, authorFilter) {
        var _this = this;
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-advert-manager-host") + "/advertisementtype?adverttype=TXB&selling=" + isSelling +
            "&price=" + priceFilter + "&modulecode=" + modulecodeFilter + "&name=" + nameFilter + "&edition=" + editionFilter + "&quality=" + qualityFilter + "&author=" + authorFilter + "&institution=" + institution;
        console.log(reqUrl);
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var textbookResultErr = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["TextbookResult"](500, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
            }
            else if (responseCode === 200) {
                var result = response.content.toJSON();
                var textbookList_2 = [];
                var JSONTextbookList = result.textbooks;
                // iterate through the textbooklist and read each textbook into a textbook object and push to the list variable
                JSONTextbookList.forEach(function (element) {
                    element.responseStatusCode = 200;
                    element.imagebytes = "data:image/png;base64," + element.imagebytes;
                    textbookList_2.push(element);
                });
                var textbookResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["TextbookResultList"](200, textbookList_2);
                _this._currentTextbookList.next(textbookResult);
            }
            else {
                // TODO : Handle if code other than 200 or 500 has been received
                console.log("in the else");
            }
        }, function (e) {
            // TODO : Handle error
            console.log(e);
        });
        return null;
    };
    AdvertService.prototype.initializeAccomodation = function (instNameFilter, isSelling, priceFilter, acdTypeFilter, locationFilter, distancetoCampusFilter) {
        var _this = this;
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-advert-manager-host") + "/advertisementtype?adverttype=ACD&selling=" + isSelling + "&price=" + priceFilter +
            "&acdType=" + acdTypeFilter + "&location=" + locationFilter + "&distance=" + distancetoCampusFilter + "&institution=" + instNameFilter;
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var accomodationResultErr = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["AccomodationResult"](500, null, null, null, null, null, null, null, null, null, null, null, null);
            }
            else if (responseCode === 200) {
                var result = response.content.toJSON();
                var accomodationList_1 = [];
                var JSONAccomodationList = result.accomodations;
                JSONAccomodationList.forEach(function (element) {
                    switch (element.accomodationtypecode) {
                        case "HSE":
                            element.accomodationtypecode = "House";
                            break;
                        case "APT":
                            element.accomodationtypecode = "Apartement";
                            break;
                        case "GDC":
                            element.accomodationtypecode = "Garden Cottage";
                            break;
                        case "COM":
                            element.accomodationtypecode = "Commune";
                            break;
                    }
                    element.responseStatusCode = 200;
                    element.imagebytes = "data:image/png;base64," + element.imagebytes;
                    accomodationList_1.push(element);
                });
                var accomodationResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["AccomodationResultList"](200, accomodationList_1);
                _this._currentAccomodationList.next(accomodationResult);
            }
            else {
                // TODO : Handle if code other than 200 or 500 has been received
                console.log("in the else");
            }
        }, function (e) {
            // TODO : Handle error
            console.log(e);
        });
        return null;
    };
    AdvertService.prototype.initializeTutors = function (institution, isSelling, priceFilter, subjectFilter, yearCompletedFilter, venueFilter, notesincludedFilter, termsFilter, moduleCodeFilter) {
        var _this = this;
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-advert-manager-host") + "/advertisementtype?adverttype=TUT&selling=" + isSelling + "&price=" + priceFilter +
            "&modulecode=" + moduleCodeFilter + "&subject=" + subjectFilter + "&yearcompleted=" + yearCompletedFilter + "&venue=" + venueFilter + "&notes=" +
            notesincludedFilter + "&terms=" + termsFilter + "&institution=" + institution;
        console.log(reqUrl);
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var tutorResultErr = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["TutorResult"](500, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
            }
            else if (responseCode === 200) {
                var result = response.content.toJSON();
                var tutorList_1 = [];
                var JSONTutorList = result.tutors;
                JSONTutorList.forEach(function (element) {
                    element.responseStatusCode = 200;
                    element.imagebytes = "data:image/png;base64," + element.imagebytes;
                    tutorList_1.push(element);
                });
                var tutorResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["TutorResultList"](200, tutorList_1);
                _this._currentTutorList.next(tutorResult);
            }
            else {
                // TODO : Handle if code other than 200 or 500 has been received
                console.log("in the else");
            }
        }, function (e) {
            // TODO : Handle error
            console.log(e);
        });
        return null;
    };
    AdvertService.prototype.initializeNotes = function (institution, isSelling, priceFilter, modulecodeFilter) {
        var _this = this;
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-advert-manager-host") + "/advertisementtype?adverttype=NTS&selling=" + isSelling + "&price=" + priceFilter + "&modulecode=" + modulecodeFilter + "&institution=" + institution;
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var noteResultErr = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["NoteResult"](500, null, null, null, null, null, null, null, null, null, null);
            }
            else if (responseCode === 200) {
                var result = response.content.toJSON();
                var noteList_1 = [];
                var JSONNoteList = result.notes;
                JSONNoteList.forEach(function (element) {
                    element.responseStatusCode = 200;
                    element.imagebytes = "data:image/png;base64," + element.imagebytes;
                    //console.log(element.advertisementid);
                    noteList_1.push(element);
                });
                var noteResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["NoteResultList"](200, noteList_1);
                _this._currentNoteList.next(noteResult);
            }
            else {
                // TODO : Handle if code other than 200 or 500 has been received
                console.log("in the else");
            }
        }, function (e) {
            // TODO : Handle error
            console.log(e);
        });
        return null;
    };
    AdvertService.prototype.initializeUserAdvertTextbooks = function (userID, isSelling) {
        var _this = this;
        //console.log(userID);
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-advert-manager-host") + "/useradvertisements?id=" + userID + "&adverttype=TXB&selling=" + isSelling;
        console.log(reqUrl);
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var userAdvertTextbookResultErr = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["UserAdvertTextbookResult"](500, null, null, null, null, null, null, null, null, null, null, null, null, null);
            }
            else if (responseCode === 200) {
                var result = response.content.toJSON();
                var userAdverttextbookList_1 = [];
                var JSONuserAdvertTextbookList = result.textbooks;
                JSONuserAdvertTextbookList.forEach(function (element) {
                    element.responseStatusCode = 200;
                    element.imagebytes = "data:image/png;base64," + element.imagebytes;
                    userAdverttextbookList_1.push(element);
                });
                var userAdverttextbookResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["UserAdvertTextbookResultList"](200, userAdverttextbookList_1);
                _this._currentUserAdvertTextbookList.next(userAdverttextbookResult);
            }
            else {
                // TODO : Handle if code other than 200 or 500 has been received
                console.log("in the else");
            }
        }, function (e) {
            // TODO : Handle error
            console.log(e);
        });
        return null;
    };
    AdvertService.prototype.initializeUserAdvertAccomodation = function (userID, isSelling) {
        var _this = this;
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-advert-manager-host") + "/useradvertisements?id=" + userID + "&adverttype=ACD&selling=" + isSelling;
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var userAdvertAccomodationResultErr = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["UserAdvertAccomodationResult"](500, null, null, null, null, null, null, null, null, null, null, null, null);
            }
            else if (responseCode === 200) {
                var result = response.content.toJSON();
                var userAdvertAccomodationList_1 = [];
                var JSONuserAdvertAccomodationList = result.accomodations;
                JSONuserAdvertAccomodationList.forEach(function (element) {
                    element.responseStatusCode = 200;
                    switch (element.accomodationtypecode) {
                        case "HSE":
                            element.accomodationtypecode = "House";
                            break;
                        case "APT":
                            element.accomodationtypecode = "Apartement";
                            break;
                        case "GDC":
                            element.accomodationtypecode = "Garden Cottage";
                            break;
                        case "COM":
                            element.accomodationtypecode = "Commune";
                            break;
                    }
                    element.imagebytes = "data:image/png;base64," + element.imagebytes;
                    userAdvertAccomodationList_1.push(element);
                });
                var userAdvertAccomodationResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["UserAdvertAccomodationResultList"](200, userAdvertAccomodationList_1);
                _this._currentUserAdvertAccomodationList.next(userAdvertAccomodationResult);
            }
            else {
                // TODO : Handle if code other than 200 or 500 has been received
                console.log("in the else");
            }
        }, function (e) {
            // TODO : Handle error
            console.log(e);
        });
        return null;
    };
    AdvertService.prototype.initializeUserAdvertTutors = function (userID, isSelling) {
        var _this = this;
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-advert-manager-host") + "/useradvertisements?id=" + userID + "&adverttype=TUT&selling=" + isSelling;
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var userAdvertTutorResultErr = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["UserAdvertTutorResult"](500, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
            }
            else if (responseCode === 200) {
                var result = response.content.toJSON();
                var userAdvertTutorList_1 = [];
                var JSONuserAdvertTutorList = result.tutors;
                JSONuserAdvertTutorList.forEach(function (element) {
                    element.responseStatusCode = 200;
                    element.imagebytes = "data:image/png;base64," + element.imagebytes;
                    userAdvertTutorList_1.push(element);
                });
                var userAdvertTutorResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["UserAdvertTutorResultList"](200, userAdvertTutorList_1);
                _this._currentUserAdvertTutorList.next(userAdvertTutorResult);
            }
            else {
                // TODO : Handle if code other than 200 or 500 has been received
                console.log("in the else");
            }
        }, function (e) {
            // TODO : Handle error
            console.log(e);
        });
        return null;
    };
    AdvertService.prototype.initializeUserAdvertNotes = function (userID, isSelling) {
        var _this = this;
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-advert-manager-host") + "/useradvertisements?id=" + userID + "&adverttype=NTS&selling=" + isSelling;
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var userAdvertNoteResultErr = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["UserAdvertNoteResult"](500, null, null, null, null, null, null, null, null, null);
            }
            else if (responseCode === 200) {
                var result = response.content.toJSON();
                var userAdvertNoteList_1 = [];
                var JSONuserAdvertNoteList = result.notes;
                JSONuserAdvertNoteList.forEach(function (element) {
                    element.responseStatusCode = 200;
                    element.imagebytes = "data:image/png;base64," + element.imagebytes;
                    userAdvertNoteList_1.push(element);
                });
                var userAdvertNoteResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["UserAdvertNoteResultList"](200, userAdvertNoteList_1);
                _this._currentUserAdvertNoteList.next(userAdvertNoteResult);
            }
            else {
                // TODO : Handle if code other than 200 or 500 has been received
                console.log("in the else");
            }
        }, function (e) {
            // TODO : Handle error
            console.log(e);
        });
        return null;
    };
    AdvertService.prototype.setAdvert = function (type, advertisementID) {
        switch (type) {
            case "TXB": {
                this.setTextbook(advertisementID);
                break;
            }
            case "ACD": {
                this.setAccomodation(advertisementID);
                break;
            }
            case "TUT": {
                this.setTutor(advertisementID);
                break;
            }
            case "NTS": {
                this.setNote(advertisementID);
                break;
            }
        }
    };
    AdvertService.prototype.setUserAdvert = function (type, advertisementID) {
        switch (type) {
            case "TXB": {
                this.setUserTextbook(advertisementID);
                break;
            }
            case "ACD": {
                this.setUserAccomodation(advertisementID);
                break;
            }
            case "TUT": {
                this.setUserTutor(advertisementID);
                break;
            }
            case "NTS": {
                this.setUserNote(advertisementID);
                break;
            }
        }
    };
    AdvertService.prototype.setTextbook = function (advertisementID) {
        var _this = this;
        this.currentTextbookList.forEach(function (element) {
            element.Textbooks.forEach(function (innerElement) {
                if (advertisementID == innerElement.advertisementid) {
                    _this._currentTextbook.next(innerElement);
                }
            });
        });
    };
    AdvertService.prototype.initializeActiveChats = function () {
        var _this = this;
        var userid = tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"]("userid");
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-messages-host") + "/chats?userid=" + userid;
        console.log(reqUrl);
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var activechatResultErr = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["ActivechatResult"](500, null, null, null, null, null, null, null, null, null, null, null);
            }
            else if (responseCode === 200) {
                // Make sure the response we receive is in JSON format.
                var result = response.content.toJSON();
                // Instansiate a textbook list object to read the response in to.
                var activechatList_1 = [];
                // get the activechatlist.
                var JSONActivechatList = result.activechats;
                // iterate through the activechatlist and read each textbook into a textbook object and push to the list variable
                JSONActivechatList.forEach(function (element) {
                    element.responseStatusCode = 200;
                    activechatList_1.push(element);
                });
                var activechatResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["ActivechatResultList"](200, activechatList_1, "Successfully recieved chats");
                _this._currentActivechatList.next(activechatResult);
            }
            else {
                var activechatlistResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["ActivechatResultList"](responseCode, null, response.content.toString());
                _this._currentActivechatList.next(activechatlistResult);
            }
        }, function (e) {
            var activechatResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["ActivechatResultList"](400, null, "An Error has been recieved, please contact support.");
            _this._currentActivechatList.next(activechatResult);
        });
    };
    AdvertService.prototype.setActivechat = function (chatid) {
        var _this = this;
        var userid = tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"]("userid");
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-messages-host") + "/message?userid=" + userid + "&chatid=" + chatid;
        console.log(reqUrl);
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var messageResultErr = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["MessageResult"](500, null, null, null, null);
            }
            else if (responseCode === 200) {
                // Make sure the response we receive is in JSON format.
                var result = response.content.toJSON();
                // Instansiate a textbook list object to read the response in to.
                var messageList_1 = [];
                // get the textbooklist.
                var JSONMessageList = result.messages;
                var userchat_1 = tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"]("username");
                // iterate through the textbooklist and read each textbook into a textbook object and push to the list variable
                JSONMessageList.forEach(function (element) {
                    element.responseStatusCode = 200;
                    //for message styling
                    element.userchat = userchat_1;
                    messageList_1.push(element);
                });
                var messageResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["MessageResultList"](200, messageList_1, "Messages successfully recieved");
                _this._currentMessageList.next(messageResult);
            }
            else {
                var messagelistResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["MessageResultList"](responseCode, null, response.content.toString());
                _this._currentMessageList.next(messagelistResult);
            }
        }, function (e) {
            var messageResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["MessageResultList"](400, null, "An Error has been recieved, please contact support.");
            _this._currentMessageList.next(messageResult);
        });
    };
    AdvertService.prototype.SendMessage = function (chatid, authorid, message) {
        var _this = this;
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-messages-host") + "/message";
        console.log(reqUrl);
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ chatid: chatid, authorid: authorid, message: message }),
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var messageResultErr = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["MessageResult"](500, null, null, null, null);
            }
            else if (responseCode === 200) {
                // Make sure the response we receive is in JSON format.
                var result = response.content.toJSON();
                // Instansiate a textbook list object to read the response in to.
                var messageList_2 = [];
                // get the textbooklist.
                var JSONMessageList = result.messages;
                var userchat_2 = tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"]("username");
                // iterate through the textbooklist and read each textbook into a textbook object and push to the list variable
                JSONMessageList.forEach(function (element) {
                    element.responseStatusCode = 200;
                    //for message styling
                    element.userchat = userchat_2;
                    messageList_2.push(element);
                });
                var messageResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["MessageResultList"](200, messageList_2, "Message successfully recieved");
                _this._currentMessageList.next(messageResult);
            }
            else {
                var messagelistResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["MessageResultList"](responseCode, null, response.content.toString());
                _this._currentMessageList.next(messagelistResult);
            }
        }, function (e) {
            var messageResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["MessageResultList"](400, null, "An Error has been recieved, please contact support.");
            _this._currentMessageList.next(messageResult);
        });
    };
    //Outstading ratings for Buyer to rate seller
    AdvertService.prototype.initializeOutstandingratings = function (userid) {
        var _this = this;
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-ratings-host") + "/rate?userid=" + userid;
        console.log(reqUrl);
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var outstandingratingResultErr = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["OutstandingratingResult"](500, null, null, null, null, null);
            }
            else if (responseCode === 200) {
                // Make sure the response we receive is in JSON format.
                var result = response.content.toJSON();
                // Instansiate a textbook list object to read the response in to.
                var outstandingratingList_1 = [];
                // get the outstandingratinglist.
                var JSONOutstandingratingList = result.outstandingratings;
                // iterate through the outstandingratinglist and read each textbook into a textbook object and push to the list variable
                JSONOutstandingratingList.forEach(function (element) {
                    element.responseStatusCode = 200;
                    outstandingratingList_1.push(element);
                });
                var outstandingratingResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["OutstandingratingResultList"](200, outstandingratingList_1, "Successfully recieved outstanding ratings");
                _this._currentOutstandingratingList.next(outstandingratingResult);
            }
            else {
                var outstandingratinglistResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["OutstandingratingResultList"](responseCode, null, response.content.toString());
                _this._currentOutstandingratingList.next(outstandingratinglistResult);
            }
        }, function (e) {
            var outstandingratingResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["OutstandingratingResultList"](400, null, "An Error has been recieved, please contact support.");
            _this._currentOutstandingratingList.next(outstandingratingResult);
        });
    };
    AdvertService.prototype.clearSelectedOutstandingrating = function () {
        this._currentOutstandingrating.next(null);
        this._currentOutstandingratingList.next(null);
    };
    AdvertService.prototype.setAccomodation = function (advertisementID) {
        var _this = this;
        this.currentAccomodationList.forEach(function (element) {
            element.Accomodations.forEach(function (innerElement) {
                if (advertisementID == innerElement.advertisementid) {
                    _this._currentAccomodation.next(innerElement);
                }
            });
        });
    };
    AdvertService.prototype.setTutor = function (advertisementID) {
        var _this = this;
        this.currentTutorList.forEach(function (element) {
            element.Tutors.forEach(function (innerElement) {
                if (advertisementID == innerElement.advertisementid) {
                    _this._currentTutor.next(innerElement);
                }
            });
        });
    };
    AdvertService.prototype.setNote = function (advertisementID) {
        var _this = this;
        this.currentNoteList.forEach(function (element) {
            element.Notes.forEach(function (innerElement) {
                if (advertisementID == innerElement.advertisementid) {
                    _this._currentNote.next(innerElement);
                }
            });
        });
    };
    AdvertService.prototype.setUserTextbook = function (advertisementID) {
        var _this = this;
        this.currentUserAdvertTextbookList.forEach(function (element) {
            element.Textbooks.forEach(function (innerElement) {
                if (advertisementID == innerElement.advertisementid) {
                    _this._currentUserAdvertTextbook.next(innerElement);
                }
            });
        });
    };
    AdvertService.prototype.setUserAccomodation = function (advertisementID) {
        var _this = this;
        this.currentUserAdvertAccomodationList.forEach(function (element) {
            element.Accomodations.forEach(function (innerElement) {
                if (advertisementID == innerElement.advertisementid) {
                    _this._currentUserAdvertAccomodation.next(innerElement);
                }
            });
        });
    };
    AdvertService.prototype.setUserTutor = function (advertisementID) {
        var _this = this;
        this.currentUserAdvertTutorList.forEach(function (element) {
            element.Tutors.forEach(function (innerElement) {
                if (advertisementID == innerElement.advertisementid) {
                    _this._currentUserAdvertTutor.next(innerElement);
                }
            });
        });
    };
    AdvertService.prototype.setUserNote = function (advertisementID) {
        var _this = this;
        this.currentUserAdvertNoteList.forEach(function (element) {
            element.Notes.forEach(function (innerElement) {
                if (advertisementID == innerElement.advertisementid) {
                    _this._currentUserAdvertNote.next(innerElement);
                }
            });
        });
    };
    AdvertService.prototype.clearSelectedAdvertisement = function () {
        this._currentTextbook.next(null);
        this._currentAccomodation.next(null);
        this._currentTutor.next(null);
        this._currentNote.next(null);
        this._currentStartChat.next(null);
    };
    AdvertService.prototype.clearSelectedUserAdvertisement = function () {
        this._currentUserAdvertTextbook.next(null);
        this._currentUserAdvertAccomodation.next(null);
        this._currentUserAdvertTutor.next(null);
        this._currentUserAdvertNote.next(null);
    };
    AdvertService.prototype.PostAdvertisement = function () {
    };
    AdvertService.prototype.RateSeller = function (ratingid, sellerrating, sellercomments) {
        var _this = this;
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-ratings-host") + "/rate";
        console.log(reqUrl);
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ ratingid: ratingid, sellerrating: sellerrating, sellercomments: sellercomments }),
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var RateSellerResultErr = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["RateSellerResult"](500, false, 'An error has occured whilst trying to connect.');
                _this._currentRateSeller.next(RateSellerResultErr);
            }
            else if (responseCode === 200) {
                var result = response.content.toJSON();
                var RateSellersuccessResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["RateSellerResult"](200, true, result.message);
                _this._currentRateSeller.next(RateSellersuccessResult);
            }
            else {
                var RateSellersuccessResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["RateSellerResult"](responseCode, false, response.content.toString());
                _this._currentRateSeller.next(RateSellersuccessResult);
            }
        }, function (e) {
            var RateSellersuccessResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["RateSellerResult"](400, false, "An Error has been recieved, please contact support.");
            _this._currentRateSeller.next(RateSellersuccessResult);
        });
        return null;
    };
    //seller dashboard
    AdvertService.prototype.Previoussellerratings = function (userid) {
        var _this = this;
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-ratings-host") + "/sellerrating?userid=" + userid;
        console.log(reqUrl);
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var previousratingResultErr = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["PreviousratingResult"](500, null, null, null, null);
            }
            else if (responseCode === 200) {
                // Make sure the response we receive is in JSON format.
                var result = response.content.toJSON();
                // Instansiate a textbook list object to read the response in to.
                var previousratingList_1 = [];
                // get the previousratinglist.
                var JSONPreviousratingList = result.previousratings;
                // iterate through the previousratinglist and read each textbook into a textbook object and push to the list variable
                JSONPreviousratingList.forEach(function (element) {
                    element.responseStatusCode = 200;
                    previousratingList_1.push(element);
                });
                var previousratingResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["PreviousratingResultList"](200, previousratingList_1, "Successfully recieved previous ratings");
                _this._currentPreviousratingList.next(previousratingResult);
            }
            else {
                var previousratinglistResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["PreviousratingResultList"](responseCode, null, response.content.toString());
                _this._currentPreviousratingList.next(previousratinglistResult);
            }
        }, function (e) {
            var previousratingResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["PreviousratingResultList"](400, null, "An Error has been recieved, please contact support.");
            _this._currentPreviousratingList.next(previousratingResult);
        });
    };
    //buyer dashboard
    AdvertService.prototype.Previousbuyerratings = function (userid) {
        var _this = this;
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-ratings-host") + "/buyerrating?userid=" + userid;
        console.log(reqUrl);
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var previousratingResultErr = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["PreviousratingResult"](500, null, null, null, null);
            }
            else if (responseCode === 200) {
                // Make sure the response we receive is in JSON format.
                var result = response.content.toJSON();
                // Instansiate a textbook list object to read the response in to.
                var previousratingList_2 = [];
                // get the previousratinglist.
                var JSONPreviousratingList = result.previousratings;
                // iterate through the previousratinglist and read each textbook into a textbook object and push to the list variable
                JSONPreviousratingList.forEach(function (element) {
                    element.responseStatusCode = 200;
                    previousratingList_2.push(element);
                });
                var previousratingResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["PreviousratingResultList"](200, previousratingList_2, "Successfully recieved previous ratings");
                _this._currentPreviousratingList.next(previousratingResult);
            }
            else {
                var previousratinglistResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["PreviousratingResultList"](responseCode, null, response.content.toString());
                _this._currentPreviousratingList.next(previousratinglistResult);
            }
        }, function (e) {
            var previousratingResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["PreviousratingResultList"](400, null, "An Error has been recieved, please contact support.");
            _this._currentPreviousratingList.next(previousratingResult);
        });
    };
    AdvertService.prototype.StartNewChat = function (sellerid, buyerid, advertisementtype, advertisementid) {
        var _this = this;
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-messages-host") + "/chat";
        console.log(reqUrl);
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ sellerid: sellerid, buyerid: buyerid, advertisementtype: advertisementtype, advertisementid: advertisementid }),
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var StartChatResultErr = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["StartChatResult"](500, false, '00000000-0000-0000-0000-000000000000', 'An internal error has occured.');
                _this._currentStartChat.next(StartChatResultErr);
            }
            else if (responseCode === 200) {
                var result = response.content.toJSON();
                var StartChatsuccessResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["StartChatResult"](200, result.chatposted, result.chatid, result.message);
                _this._currentStartChat.next(StartChatsuccessResult);
            }
            else {
                var StartChatsuccessResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["StartChatResult"](responseCode, false, '00000000-0000-0000-0000-000000000000', response.content.toString());
                _this._currentStartChat.next(StartChatsuccessResult);
            }
        }, function (e) {
            var StartChatsuccessResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["StartChatResult"](400, false, '00000000-0000-0000-0000-000000000000', "An Error has been recieved, please contact support.");
            _this._currentStartChat.next(StartChatsuccessResult);
        });
        return null;
    };
    AdvertService.prototype.UnreadChats = function () {
        var _this = this;
        var userid = tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"]("userid");
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-messages-host") + "/unreadchats?userid=" + userid;
        console.log(reqUrl);
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var UnreadChatsResultErr = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["UnreadChatsResult"](500, false);
                _this._currentUnreadChats.next(UnreadChatsResultErr);
            }
            else if (responseCode === 200) {
                var result = response.content.toJSON();
                var UnreadChatssuccessResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["UnreadChatsResult"](200, result.unreadmessages);
                _this._currentUnreadChats.next(UnreadChatssuccessResult);
            }
            else {
                var UnreadChatssuccessResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["UnreadChatsResult"](responseCode, false);
                _this._currentUnreadChats.next(UnreadChatssuccessResult);
            }
        }, function (e) {
            var UnreadChatssuccessResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["UnreadChatsResult"](400, false);
            _this._currentUnreadChats.next(UnreadChatssuccessResult);
        });
        return null;
    };
    AdvertService.prototype.deleteChat = function (chatid) {
        var _this = this;
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-messages-host") + "/chat?id=" + chatid;
        console.log(reqUrl);
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "DELETE",
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var DeleteChatResultErr = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["DeleteChatResult"](500, false, 'An internal error has occured whilst trying to delete ' + chatid);
                _this._currentDeleteChatResult.next(DeleteChatResultErr);
            }
            else if (responseCode === 200) {
                var result = response.content.toJSON();
                var DeleteChatResultSuccess = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["DeleteChatResult"](200, result.chatposted, result.message);
                _this._currentDeleteChatResult.next(DeleteChatResultSuccess);
            }
            else {
                var DeleteChatResultSuccess = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["DeleteChatResult"](responseCode, false, 'An internal error has occured whilst trying to delete ' + chatid);
                _this._currentDeleteChatResult.next(DeleteChatResultSuccess);
            }
        }, function (e) {
            var DeleteChatResultSuccess = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["DeleteChatResult"](400, false, "An Error has been recieved, please contact support.");
            _this._currentDeleteChatResult.next(DeleteChatResultSuccess);
        });
    };
    AdvertService.prototype.InterestedBuyers = function (userid, advertisementid) {
        var _this = this;
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-ratings-host") + "/interest";
        console.log(reqUrl);
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ userid: userid, advertisementid: advertisementid }),
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var interestedbuyerResultErr = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["InterestedbuyerResult"](500, null, null, null, null, null);
            }
            else if (responseCode === 200) {
                // Make sure the response we receive is in JSON format.
                var result = response.content.toJSON();
                // Instansiate a textbook list object to read the response in to.
                var interestedbuyerList_1 = [];
                // get the textbooklist.
                var JSONInterestedbuyerList = result.interestedbuyers;
                var userchat_3 = tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"]("username");
                // iterate through the textbooklist and read each textbook into a textbook object and push to the list variable
                JSONInterestedbuyerList.forEach(function (element) {
                    element.responseStatusCode = 200;
                    //for interestedbuyer styling
                    element.userchat = userchat_3;
                    interestedbuyerList_1.push(element);
                });
                var interestedbuyerResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["InterestedbuyerResultList"](200, interestedbuyerList_1, "Message successfully recieved");
                _this._currentInterestedbuyerList.next(interestedbuyerResult);
            }
            else {
                var interestedbuyerlistResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["InterestedbuyerResultList"](responseCode, null, response.content.toString());
                _this._currentInterestedbuyerList.next(interestedbuyerlistResult);
            }
        }, function (e) {
            var interestedbuyerResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["InterestedbuyerResultList"](400, null, "An Error has been recieved, please contact support.");
            _this._currentInterestedbuyerList.next(interestedbuyerResult);
        });
    };
    AdvertService.prototype.RateBuyer = function (advertisementid, buyerid, sellerid, buyerrating, buyercomments) {
        var _this = this;
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-ratings-host") + "/rate";
        console.log(reqUrl);
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ advertisementid: advertisementid, buyerid: buyerid, sellerid: sellerid, buyerrating: buyerrating, buyercomments: buyercomments }),
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var RateBuyerResultErr = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["RateBuyerResult"](500, false, '00000000-0000-0000-0000-000000000000', 'An error has occured whilst trying to connect.');
                _this._currentRateBuyer.next(RateBuyerResultErr);
            }
            else if (responseCode === 200) {
                var result = response.content.toJSON();
                var RateBuyersuccessResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["RateBuyerResult"](200, result.buyerrated, result.ratingid, result.message);
                _this._currentRateBuyer.next(RateBuyersuccessResult);
            }
            else {
                var RateBuyersuccessResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["RateBuyerResult"](responseCode, false, '00000000-0000-0000-0000-000000000000', response.content.toString());
                _this._currentRateBuyer.next(RateBuyersuccessResult);
            }
        }, function (e) {
            var RateBuyersuccessResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["RateBuyerResult"](400, false, '00000000-0000-0000-0000-000000000000', "An Error has been recieved, please contact support.");
            _this._currentRateBuyer.next(RateBuyersuccessResult);
        });
        return null;
    };
    AdvertService.prototype.OutstandingRatings = function () {
        var _this = this;
        var userid = tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"]("userid");
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-ratings-host") + "/rating?userid=" + userid;
        console.log(reqUrl);
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var OutstandingRatingResultErr = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["OutstandingRatingResult"](500, false);
                _this._currentOutstandingRating.next(OutstandingRatingResultErr);
            }
            else if (responseCode === 200) {
                var result = response.content.toJSON();
                var OutstandingRatingsuccessResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["OutstandingRatingResult"](200, result.outstandingratings);
                _this._currentOutstandingRating.next(OutstandingRatingsuccessResult);
            }
            else {
                var OutstandingRatingsuccessResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["OutstandingRatingResult"](responseCode, false);
                _this._currentOutstandingRating.next(OutstandingRatingsuccessResult);
            }
        }, function (e) {
            var OutstandingRatingsuccessResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["OutstandingRatingResult"](400, false);
            _this._currentOutstandingRating.next(OutstandingRatingsuccessResult);
        });
        return null;
    };
    AdvertService.prototype.Buyingdashboard = function () {
        var _this = this;
        var userid = tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"]("userid");
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-ratings-host") + "/buyer?userid=" + userid;
        console.log(reqUrl);
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var BuyingAverageResultErr = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["BuyingAverageResult"](500, "You do not have any ratings as yet");
                _this._currentBuyingAverage.next(BuyingAverageResultErr);
            }
            else if (responseCode === 200) {
                var result = response.content.toJSON();
                var BuyingAveragesuccessResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["BuyingAverageResult"](200, result.average);
                _this._currentBuyingAverage.next(BuyingAveragesuccessResult);
            }
            else {
                var BuyingAveragesuccessResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["BuyingAverageResult"](responseCode, response.content.toString());
                _this._currentBuyingAverage.next(BuyingAveragesuccessResult);
            }
        }, function (e) {
            var BuyingAveragesuccessResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["BuyingAverageResult"](400, "An Error has been recieved, please contact support.");
            _this._currentBuyingAverage.next(BuyingAveragesuccessResult);
        });
    };
    AdvertService.prototype.Sellingdashboard = function () {
        var _this = this;
        var userid = tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"]("userid");
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-ratings-host") + "/seller?userid=" + userid;
        console.log(reqUrl);
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var SellingAverageResultErr = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["SellingAverageResult"](500, "You do not have any ratings as yet");
                _this._currentSellingAverage.next(SellingAverageResultErr);
            }
            else if (responseCode === 200) {
                var result = response.content.toJSON();
                var SellingAveragesuccessResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["SellingAverageResult"](200, result.average);
                _this._currentSellingAverage.next(SellingAveragesuccessResult);
            }
            else {
                var SellingAveragesuccessResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["SellingAverageResult"](responseCode, response.content.toString());
                _this._currentSellingAverage.next(SellingAveragesuccessResult);
            }
        }, function (e) {
            var SellingAveragesuccessResult = new _advert_model__WEBPACK_IMPORTED_MODULE_2__["SellingAverageResult"](400, "An Error has been recieved, please contact support.");
            _this._currentSellingAverage.next(SellingAveragesuccessResult);
        });
    };
    AdvertService.prototype.clearChat = function () {
        this._currentDeleteChatResult = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentUnreadChats = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    };
    AdvertService.prototype.clearRating = function () {
        this._currentRateBuyer = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentOutstandingRating = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    };
    AdvertService.prototype.clearSellerRating = function () {
        this._currentRateSeller = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    };
    AdvertService.prototype.clearMessages = function () {
        this._currentMessage = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentSendMessage = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentStartChat = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    };
    AdvertService.prototype.clearAverage = function () {
        this._currentBuyingAverage = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentSellingAverage = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    };
    AdvertService.prototype.clearBook = function () {
        this._currentGetBook = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    };
    AdvertService.prototype.clearUpload = function () {
        this._currentUploadTextbook = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    };
    AdvertService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    AdvertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AdvertService);
    return AdvertService;
}());



/***/ }),

/***/ "./app/advert/buyerratings/buyerratings.component.html":
/***/ (function(module, exports) {

module.exports = "<ns-action-bar [actionBarTitle]=\"'Previous Ratings'\" [hasMenu]=true [showBackButton]=false></ns-action-bar>\n<StackLayout orientation=\"horizontal\" class =\"MessagesStack\">\n</StackLayout>\n    <RadListView  *ngIf=\"ratingsLoaded \" [items]=\"myPreviousratingArray\" class=\"chatsRadList\">\n        <ng-template tkListItemTemplate let-previousrating=\"item\" >\n            <Gridlayout rows=\"*,*,*\" columns=\"10*,20*,5*\" class=\"list-group-item\" class=\"GridLayoutChatListStyle\" shadow=\"6\" >\n                <Label row=\"0\" col=\"0\" text=\"Seller:\" textWrap=\"true\"  ></Label>\n                <Label *ngIf=\"previousrating\" row=\"0\" col=\"1\" [text]=\"previousrating.username\" textWrap=\"true\"  ></Label>\n                <Label row=\"1\" col=\"0\" text=\"Rating:\" textWrap=\"true\"  ></Label>\n                <Label *ngIf=\"previousrating.rating == 0.00\" row=\"1\" col=\"1\" text=\"No Rating\"  textWrap=\"true\"  ></Label>\n                <Label *ngIf=\"previousrating.rating != 0.00\" row=\"1\" col=\"1\" [text]=\"previousrating.rating\"  textWrap=\"true\"  ></Label>\n                <Label row=\"2\" col=\"0\" text=\"Comment:\" textWrap=\"true\"  ></Label>\n                <Label *ngIf=\"previousrating\" row=\"2\" col=\"1\" [text]=\"previousrating.comment\" textWrap=\"true\"  ></Label>\n            </Gridlayout>\n        </ng-template>\n    </RadListView>\n    "

/***/ }),

/***/ "./app/advert/buyerratings/buyerratings.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/advert/buyerratings/buyerratings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerratingsComponent", function() { return BuyerratingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _advert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/advert/advert.service.ts");
/* harmony import */ var nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-fancyalert/fancyalert.js");
/* harmony import */ var nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/tns-core-modules/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__);





//import for app settings

var BuyerratingsComponent = /** @class */ (function () {
    function BuyerratingsComponent(advertServ, router) {
        this.advertServ = advertServ;
        this.router = router;
        this.userid = "";
    }
    BuyerratingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ratingsLoaded = false;
        this.previousratingResultListSub = this.advertServ.currentPreviousratingList.subscribe(function (previousratingResult) {
            if (previousratingResult) {
                if (previousratingResult.responseStatusCode === 200) {
                    _this.myPreviousratingArray = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_4__["ObservableArray"](0);
                    previousratingResult.Previousratings.forEach(function (t) {
                        _this.myPreviousratingArray.push(t);
                    });
                    _this.ratingsLoaded = true;
                }
                else {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_2__["TNSFancyAlert"].showError("No ratings", "There aren't any previous rattings to display");
                }
            }
        });
        var userid = tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"]("userid");
        this.advertServ.Previousbuyerratings(userid);
    };
    BuyerratingsComponent.prototype.ngOnDestroy = function () {
        if (this.previousratingResultListSub) {
            this.previousratingResultListSub.unsubscribe();
        }
    };
    BuyerratingsComponent.ctorParameters = function () { return [
        { type: _advert_service__WEBPACK_IMPORTED_MODULE_1__["AdvertService"] },
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"] }
    ]; };
    BuyerratingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-buyerratings',
            template: __webpack_require__("./app/advert/buyerratings/buyerratings.component.html"),
            styles: [__webpack_require__("./app/advert/buyerratings/buyerratings.component.scss")]
        }),
        __metadata("design:paramtypes", [_advert_service__WEBPACK_IMPORTED_MODULE_1__["AdvertService"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"]])
    ], BuyerratingsComponent);
    return BuyerratingsComponent;
}());



/***/ }),

/***/ "./app/advert/messaging-details/messaging-details.component.html":
/***/ (function(module, exports) {

module.exports = "<ns-action-bar  [actionBarTitle]=\"'Chat'\" [hasMenu]=false [showBackButton]=true></ns-action-bar>\n<StackLayout [formGroup]=\"form\" class=\"chatPageForm\" >\n    <RadListView *ngIf=\"messagesLoaded \" [items]=\"myMessageArray\" class=\"messageRadList\">\n        <ng-template tkListItemTemplate let-message=\"item\" >\n            <Gridlayout rows=\"*,*,*,*\" columns=\"15*,40*,12*\" class=\"messageitem\" class=\"GridLayoutMessageListStyle\" shadow=\"6\" >\n                <Label  *ngIf=\"message.username === message.userchat\" class=\"SentMessage\" row=\"0\" col=\"0\" text=\"\" textWrap=\"true\"  ></Label>\n                <Label  *ngIf=\"message.username !== message.userchat\" row=\"1\" col=\"0\"  textWrap=\"true\" text=\"&#xf0a4;\" class=\"recievemessageicon\" ></Label>\n                <Label  *ngIf=\"message.username === message.userchat\" row=\"1\" col=\"0\"  textWrap=\"true\" text=\"\" class=\"SentMessage\" ></Label>\n                <Label  *ngIf=\"message.username !== message.userchat\" class=\"RecievedMessageusername\" row=\"0\" col=\"0\" [text]=\"message.username\" textWrap=\"true\"  ></Label>\n                <Label  *ngIf=\"message.username === message.userchat\" class=\"SentMessage\" row=\"0\" col=\"1\" text=\"\"  textWrap=\"true\"  ></Label>\n                <Label  *ngIf=\"message.username !== message.userchat\" class=\"RecievedMessage\"row=\"0\" col=\"1\" text=\"\"  textWrap=\"true\"  ></Label>\n                <Label  *ngIf=\"message.username === message.userchat\" class=\"SentMessagedate\" row=\"2\" col=\"2\" [text]=\"message.messagedate\" textWrap=\"true\"  ></Label>\n                <Label  *ngIf=\"message.username !== message.userchat\" class=\"RecievedMessagedate\"row=\"2\" col=\"2\" [text]=\"message.messagedate\" textWrap=\"true\"  ></Label>\n                <Label  *ngIf=\"message.username === message.userchat\" class=\"SentMessageusername\" row=\"0\" col=\"2\" text=\"You\" textWrap=\"true\"  ></Label>\n                <Label  *ngIf=\"message.username !== message.userchat\" class=\"RecievedMessage\" row=\"0\" col=\"2\" text=\"\" textWrap=\"true\"  ></Label>\n                <Label  *ngIf=\"message.username === message.userchat\" class=\"SentMessage\" row=\"1\" col=\"1\" [text]=\"message.message\" textWrap=\"true\"  ></Label>\n                <Label  *ngIf=\"message.username !== message.userchat\" class=\"RecievedMessage\" row=\"1\" col=\"1\" [text]=\"message.message\" textWrap=\"true\"  ></Label>\n                <Label  *ngIf=\"message.username === message.userchat\" row=\"1\" col=\"2\" text=\"&#xf0a5;\" class=\"sendmessageicon\" ></Label>\n                <Label  *ngIf=\"message.username !== message.userchat\" class=\"RecievedMessage\" row=\"1\" col=\"2\" text=\"\" textWrap=\"true\"  ></Label>\n                <Label  *ngIf=\"message.username === message.userchat\" class=\"SentMessage\" row=\"2\" col=\"0\" text=\"\" textWrap=\"true\"  ></Label>\n                <Label  *ngIf=\"message.username !== message.userchat\" class=\"RecievedMessage\"row=\"2\" col=\"0\" text=\"\" ></Label>\n                <Label  *ngIf=\"message.username === message.userchat\" class=\"SentMessage\" row=\"2\" col=\"1\" text=\"\" textWrap=\"true\"  ></Label>\n                <Label  *ngIf=\"message.username !== message.userchat\" class=\"RecievedMessage\"row=\"2\" col=\"1\" text=\"\" textWrap=\"true\"  ></Label>\n            </Gridlayout>\n        </ng-template>\n    </RadListView>\n\n    \n    <Gridlayout rows=\"*\" columns=\"5*,*\" class=\"GridLayoutMessages\">\n        <TextView\n        class=\"messagetext\"\n        row=\"0\" col=\"0\"\n        editable=\"true\" hint=\"Type a message...\"\n        returnKeyType=\"done\"\n        [autocorrect]=\"false\"\n        autocapitalizationType=\"none\"\n        formControlName=\"message\"\n        lineHeight=\"50\"\n        #messageEl\n        ></TextView>\n        <Label row=\"0\" col=\"1\"(tap)=\"onSendMessage()\" text=\"&#xf1d8;\" class=\"SendMessageLabel\" ></Label>\n    </Gridlayout>\n    <TextField \n        style=\"border-style: hidden ; border-width: 0;border-bottom-style: groove; background-color: lightgray; height:0;\"           \n        #hiddenEl\n    ></TextField>\n</StackLayout>\n"

/***/ }),

/***/ "./app/advert/messaging-details/messaging-details.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/advert/messaging-details/messaging-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagingDetailsComponent", function() { return MessagingDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _advert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/advert/advert.service.ts");
/* harmony import */ var nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-fancyalert/fancyalert.js");
/* harmony import */ var nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/tns-core-modules/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_6__);






//import for app settings

var MessagingDetailsComponent = /** @class */ (function () {
    function MessagingDetailsComponent(advertServ, router) {
        this.advertServ = advertServ;
        this.router = router;
        this.messageControlIsValid = true;
    }
    MessagingDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messagesLoaded = false;
        this.messageResultListSub = this.advertServ.currentMessageList.subscribe(function (messageResult) {
            if (messageResult) {
                if (messageResult.responseStatusCode === 200) {
                    _this.myMessageArray = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_5__["ObservableArray"](0);
                    messageResult.Messages.forEach(function (t) {
                        _this.myMessageArray.push(t);
                    });
                    _this.advertServ.initializeActiveChats();
                    _this.advertServ.UnreadChats();
                    _this.messagesLoaded = true;
                }
                else if (_this.messageResultList.responseStatusCode === 500) {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_3__["TNSFancyAlert"].showError("Connection error", "A Connection cannot be established at this time", "Dismiss");
                }
                else if (_this.messageResultList.responseStatusCode === 400) {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_3__["TNSFancyAlert"].showError("Connection error", _this.messageResultList.message, "Dismiss");
                }
                else {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_3__["TNSFancyAlert"].showError("Connection error", _this.messageResultList.message, "Dismiss");
                }
            }
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]
            })
        });
        this.form.get('message').statusChanges.subscribe(function (status) {
            _this.messageControlIsValid = status === 'VALID';
        });
    };
    MessagingDetailsComponent.prototype.ngOnDestroy = function () {
        if (this.messageResultListSub) {
            this.messageResultListSub.unsubscribe();
        }
    };
    //Send message function
    MessagingDetailsComponent.prototype.onSendMessage = function () {
        var _this = this;
        this.hiddenEl.nativeElement.focus();
        this.messageEl.nativeElement.focus();
        this.messageEl.nativeElement.dismissSoftInput();
        if (!this.form.valid) {
            return;
        }
        var chatid = tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_6__["getString"]("chatid");
        var authorid = tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_6__["getString"]("userid");
        var message = this.form.get('message').value;
        setTimeout(function () {
            //send message
            _this.advertServ.SendMessage(chatid, authorid, message);
        }, 100);
        this.form.reset();
    };
    MessagingDetailsComponent.ctorParameters = function () { return [
        { type: _advert_service__WEBPACK_IMPORTED_MODULE_2__["AdvertService"] },
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterExtensions"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('messageEl', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MessagingDetailsComponent.prototype, "messageEl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('hiddenEl', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MessagingDetailsComponent.prototype, "hiddenEl", void 0);
    MessagingDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-messaging-details',
            template: __webpack_require__("./app/advert/messaging-details/messaging-details.component.html"),
            styles: [__webpack_require__("./app/advert/messaging-details/messaging-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_advert_service__WEBPACK_IMPORTED_MODULE_2__["AdvertService"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterExtensions"]])
    ], MessagingDetailsComponent);
    return MessagingDetailsComponent;
}());



/***/ }),

/***/ "./app/advert/messaging-home/messaging-home.component.html":
/***/ (function(module, exports) {

module.exports = "<ns-action-bar [actionBarTitle]=\"'Chats'\" [hasMenu]=true [showBackButton]=false></ns-action-bar>\n<StackLayout orientation=\"horizontal\" class =\"MessagesStack\">\n    <Label (tap)=\"onViewAd()\" text=\"&#xf06e;\" class=\"ViewAdLabel\" textWrap=\"true\"  ></Label>\n    <Label  text=\"&#xf1f8;\" class=\"Deletechat\" (tap)=\"onDeleteChat()\" textWrap=\"true\" ></Label>\n</StackLayout>\n    <RadListView  *ngIf=\"chatsLoaded\" [items]=\"myActivechatArray\" selectionBehavior=\"Press\" (itemSelected)=\"onItemSelected($event)\" class=\"chatsRadList\">\n        <ng-template tkListItemTemplate let-activechat=\"item\" >\n            <Gridlayout rows=\"*,*,*,*,*,*,*,*\" columns=\"*,2*,\" class=\"list-group-item\" class=\"GridLayoutChatListStyle\" shadow=\"6\" >\n                <Label row=\"0\" col=\"0\" class=\"SentMsessageusername\" [text]=\"activechat.username\" textWrap=\"true\"  ></Label>\n                <Label row=\"0\" col=\"1\"  *ngIf=\"activechat.username === activechat.messageauthor && activechat.isread === 'true'\" text=\"\" class=\"UnreadLabel\" textWrap=\"true\"  ></Label>\n                <Label row=\"0\" col=\"1\"  *ngIf=\"activechat.username === activechat.messageauthor && activechat.isread === 'false'\" text=\"&#xf0f3;\" class=\"UnreadLabel\" textWrap=\"true\"  ></Label>\n                <Label row=\"1\" col=\"1\" [text]=\"activechat.message\"  textWrap=\"true\"  ></Label>\n                <Label  row=\"2\" col=\"2\" [text]=\"activechat.messagedate\" textWrap=\"true\" style=\" margin-left: 35%; font-size: 8em;\"  ></Label>\n                <Label *ngIf=\"deleteChat\" row=\"3\" col=\"1\" text=\"&#xf1f8;\" class=\"Deletechaticon\" textWrap=\"true\"   ></Label>\n                <Label *ngIf=\"showDetails\" row=\"4\" col=\"1\" text=\"Advertisement details:\" textWrap=\"true\" ></Label>\n                <Label *ngIf=\"showDetails\" row=\"5\" col=\"0\" text=\"&#xf0d6;\" class=\"activechaticon\" textWrap=\"true\" ></Label>\n                <Label *ngIf=\"showDetails\" row=\"5\" col=\"1\" [text]=\"'R' + activechat.price\" textWrap=\"true\"   ></Label>\n                <Label *ngIf=\"showDetails\" row=\"6\" col=\"0\" text=\"&#xf1dc;\" class=\"activechaticon\" textWrap=\"true\"  ></Label>\n                <Label *ngIf=\"showDetails\" row=\"6\" col=\"1\" [text]=\"activechat.title\" textWrap=\"true\"  ></Label>\n                <Label *ngIf=\"showDetails\" row=\"7\" col=\"0\" text=\"&#xf05a;\" class=\"activechaticon\" textWrap=\"true\" ></Label>\n                <Label *ngIf=\"showDetails\" row=\"7\" col=\"1\" [text]=\"activechat.description\" textWrap=\"true\"   ></Label>\n            </Gridlayout>\n        </ng-template>\n    </RadListView>\n    \n "

/***/ }),

/***/ "./app/advert/messaging-home/messaging-home.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/advert/messaging-home/messaging-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagingHomeComponent", function() { return MessagingHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _advert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/advert/advert.service.ts");
/* harmony import */ var nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-fancyalert/fancyalert.js");
/* harmony import */ var nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/tns-core-modules/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__);





//import for app settings

var MessagingHomeComponent = /** @class */ (function () {
    function MessagingHomeComponent(advertServ, router) {
        this.advertServ = advertServ;
        this.router = router;
        this.userid = "";
        this.chatid = "";
    }
    MessagingHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatsLoaded = false;
        this.showDetails = false;
        this.deleteChat = false;
        this.activechatResultListSub = this.advertServ.currentActivechatList.subscribe(function (activechatResult) {
            if (activechatResult) {
                if (activechatResult.responseStatusCode === 200) {
                    _this.myActivechatArray = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_4__["ObservableArray"](0);
                    activechatResult.Activechats.forEach(function (t) {
                        _this.myActivechatArray.push(t);
                    });
                    _this.chatsLoaded = true;
                }
                else {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_2__["TNSFancyAlert"].showError("Data Retrieval", "Unable to retrieve data.");
                }
            }
        });
        this.advertServ.initializeActiveChats();
    };
    MessagingHomeComponent.prototype.onItemSelected = function (args) {
        var _this = this;
        if (this.deleteChat == true) {
            this.deletechatResultSub = this.advertServ.currentDeleteChatResult.subscribe(function (deletechatresult) {
                if (deletechatresult) {
                    _this.deletechat = deletechatresult;
                    if (_this.deletechat.responseStatusCode === 200 && _this.deletechat.chatposted === true) {
                        nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_2__["TNSFancyAlert"].showSuccess("Success!", "Chat Successfully Deleted!", "Close");
                        _this.advertServ.clearChat();
                        _this.advertServ.initializeActiveChats();
                        _this.deleteChat = false;
                    }
                    else if (_this.deletechat.responseStatusCode === 500) {
                        nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_2__["TNSFancyAlert"].showError("Connection error", "An internal error has occured.", "Close");
                        _this.deleteChat = false;
                    }
                    else {
                        nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_2__["TNSFancyAlert"].showError("Error", "An Error has been recieved, please contact support.", "Close");
                        _this.deleteChat = false;
                    }
                }
            });
            var tappedActivechatItem_1 = args.view.bindingContext;
            nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_2__["TNSFancyAlert"].showColorDialog("Confirm Deletion", "Are you sure that you wish to delete this chat?", "Yes", "Cancel", undefined, undefined, undefined, undefined).then(function (result) {
                if (result) {
                    _this.deleteChat = false;
                }
                else {
                    _this.deleteChat = false;
                    _this.advertServ.deleteChat(tappedActivechatItem_1.chatid);
                }
            });
        }
        else {
            var tappedActivechatItem = args.view.bindingContext;
            this.advertServ.setActivechat(tappedActivechatItem.chatid);
            tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["setString"]("chatid", tappedActivechatItem.chatid);
            tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["setString"]("advertisementtype", tappedActivechatItem.advertisementtype);
            tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["setString"]("advertisementid", tappedActivechatItem.advertisementid);
            this.router.navigate(['/messagingdetails'], {
                animated: true,
                transition: {
                    name: "slide",
                    duration: 200,
                    curve: "ease"
                }
            });
        }
    };
    MessagingHomeComponent.prototype.onViewAd = function () {
        if (this.showDetails == false) {
            this.showDetails = true;
        }
        else {
            this.showDetails = false;
        }
    };
    MessagingHomeComponent.prototype.onDeleteChat = function () {
        if (this.deleteChat == false) {
            this.deleteChat = true;
        }
        else {
            this.deleteChat = false;
        }
    };
    MessagingHomeComponent.prototype.ngOnDestroy = function () {
        if (this.activechatResultListSub) {
            this.activechatResultListSub.unsubscribe();
        }
        if (this.deletechatResultSub) {
            this.deletechatResultSub.unsubscribe();
        }
    };
    MessagingHomeComponent.ctorParameters = function () { return [
        { type: _advert_service__WEBPACK_IMPORTED_MODULE_1__["AdvertService"] },
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"] }
    ]; };
    MessagingHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-messaging-home',
            template: __webpack_require__("./app/advert/messaging-home/messaging-home.component.html"),
            styles: [__webpack_require__("./app/advert/messaging-home/messaging-home.component.scss")]
        }),
        __metadata("design:paramtypes", [_advert_service__WEBPACK_IMPORTED_MODULE_1__["AdvertService"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"]])
    ], MessagingHomeComponent);
    return MessagingHomeComponent;
}());



/***/ }),

/***/ "./app/advert/ratebuyer-home/ratebuyer-home.component.html":
/***/ (function(module, exports) {

module.exports = "<ns-action-bar [actionBarTitle]=\"'Interested buyers'\" [hasMenu]=true [showBackButton]=false></ns-action-bar>\n<StackLayout backgroundColor=\"lightgray\">\n    <Label  class=\"ratingLabel\" text=\"Please select the user who transacted with you:\" textWrap=\"true\"  ></Label>\n    <RadListView  *ngIf=\"interestLoaded \" [items]=\"myInterestedbuyerArray\" selectionBehavior=\"Press\" (itemSelected)=\"onItemSelected($event)\" class=\"chatsRadList\">\n        <ng-template tkListItemTemplate let-interested=\"item\" >\n            <Gridlayout rows=\"*,*,*\" columns=\"*,*,\"  class=\"GridLayoutChatListStyle\" shadow=\"6\" >\n                <Label *ngIf=\"interested\" row=\"0\" col=\"0\" class =\"InterestedBuyers\" [text]=\"interested.username\" textWrap=\"true\"  ></Label>\n                <Label *ngIf=\"interested\" row=\"0\" col=\"1\" text=\"&#xf005;\" class =\"Ratebuyerlabel\" textWrap=\"true\"  ></Label>\n            </Gridlayout>\n        </ng-template>\n    </RadListView>\n</StackLayout>\n    \n"

/***/ }),

/***/ "./app/advert/ratebuyer-home/ratebuyer-home.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/advert/ratebuyer-home/ratebuyer-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatebuyerHomeComponent", function() { return RatebuyerHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _advert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/advert/advert.service.ts");
/* harmony import */ var nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-fancyalert/fancyalert.js");
/* harmony import */ var nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/tns-core-modules/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__);





//import for app settings 

var RatebuyerHomeComponent = /** @class */ (function () {
    function RatebuyerHomeComponent(advertServ, router) {
        this.advertServ = advertServ;
        this.router = router;
    }
    RatebuyerHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.interestLoaded = false;
        this.interestedbuyerResultListSub = this.advertServ.currentInterestedbuyerList.subscribe(function (interestedbuyerResult) {
            if (interestedbuyerResult) {
                if (interestedbuyerResult.responseStatusCode === 200) {
                    _this.myInterestedbuyerArray = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_4__["ObservableArray"](0);
                    interestedbuyerResult.Interestedbuyers.forEach(function (t) {
                        _this.myInterestedbuyerArray.push(t);
                    });
                    _this.interestLoaded = true;
                }
                else if (_this.interestedbuyerResultList.responseStatusCode === 500) {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_2__["TNSFancyAlert"].showError("Connection error", "A Connection cannot be established at this time", "Dismiss");
                }
                else if (_this.interestedbuyerResultList.responseStatusCode === 400) {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_2__["TNSFancyAlert"].showError("Connection error", _this.interestedbuyerResultList.message, "Dismiss");
                }
                else {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_2__["TNSFancyAlert"].showError("Connection error", _this.interestedbuyerResultList.message, "Dismiss");
                }
            }
        });
        var userid = tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"]("userid");
        var advertisementid = tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"]("advertisementid");
        this.advertServ.InterestedBuyers(userid, advertisementid);
    };
    RatebuyerHomeComponent.prototype.onItemSelected = function (args) {
        var _this = this;
        var tappedInterestedItem = args.view.bindingContext;
        tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["setString"]("advertisementid", tappedInterestedItem.advertisementid);
        tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["setString"]("sellerid", tappedInterestedItem.sellerid);
        tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["setString"]("buyerid", tappedInterestedItem.buyerid);
        //get to see if the advertisement is for a tutor
        var advertisementtype = tappedInterestedItem.advertisementtype;
        if (advertisementtype == 'TUT') {
            this.advertServ.RateBuyer(tappedInterestedItem.advertisementid, tappedInterestedItem.buyerid, tappedInterestedItem.sellerid, '0', "Tutoring was concluded, a tutor may not rate a student");
            this.rateResultSub = this.advertServ.currentRateBuyer.subscribe(function (rateresult) {
                if (rateresult) {
                    _this.rate = rateresult;
                    if (_this.rate.responseStatusCode === 200 && _this.rate.buyerrated === true) {
                        _this.advertServ.clearRating();
                        nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_2__["TNSFancyAlert"].showSuccess("Rating Success", "The Student will now rate you.", "Dismiss").then(function (t) {
                            _this.router.back();
                        });
                    }
                    else if (_this.rate.responseStatusCode === 500) {
                        _this.advertServ.clearRating();
                        nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_2__["TNSFancyAlert"].showError("Error Rating", _this.rate.message, "Dismiss");
                    }
                    else if (_this.rate.responseStatusCode === 200 && _this.rate.ratingid === '00000000-0000-0000-0000-000000000000') {
                        _this.advertServ.clearRating();
                        nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_2__["TNSFancyAlert"].showError("Rating Already Completed.", _this.rate.message, "Dismiss").then(function (t) {
                            _this.router.navigate(['/advert/myadverts'], {
                                animated: true,
                                transition: {
                                    name: "slide",
                                    duration: 2,
                                    curve: "ease"
                                }
                            });
                        });
                    }
                    else {
                        nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_2__["TNSFancyAlert"].showError("Error Rating", _this.rate.message, "Dismiss");
                    }
                }
            });
        }
        else {
            this.router.navigate(['/ratebuyer'], {
                animated: true,
                transition: {
                    name: "slide",
                    duration: 200,
                    curve: "ease"
                }
            });
        }
    };
    RatebuyerHomeComponent.prototype.ngOnDestroy = function () {
        if (this.interestedbuyerResultListSub) {
            this.interestedbuyerResultListSub.unsubscribe();
        }
        if (this.rateResultSub) {
            this.rateResultSub.unsubscribe();
        }
    };
    RatebuyerHomeComponent.ctorParameters = function () { return [
        { type: _advert_service__WEBPACK_IMPORTED_MODULE_1__["AdvertService"] },
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"] }
    ]; };
    RatebuyerHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-ratebuyer-home',
            template: __webpack_require__("./app/advert/ratebuyer-home/ratebuyer-home.component.html"),
            styles: [__webpack_require__("./app/advert/ratebuyer-home/ratebuyer-home.component.scss")]
        }),
        __metadata("design:paramtypes", [_advert_service__WEBPACK_IMPORTED_MODULE_1__["AdvertService"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"]])
    ], RatebuyerHomeComponent);
    return RatebuyerHomeComponent;
}());



/***/ }),

/***/ "./app/advert/ratebuyer/ratebuyer.component.html":
/***/ (function(module, exports) {

module.exports = "<ns-action-bar  [actionBarTitle]=\"'Buyer rating'\" [hasMenu]=false [showBackButton]=true></ns-action-bar>\n<StackLayout class=\"form\" [formGroup]=\"form\">\n    <StackLayout class=\"input-field\">\n        <Label\n            class=\"label\"\n            text=\"Please select a rating from 1-5\"\n            [ngClass]=\"{ invalid: !buyerratingControlIsValid }\"\n        ></Label>\n        <TextField\n           editable=\"false\" textWrap=\"true\"\n           style=\"border-style: hidden ; border-width: 0;border-bottom-style: groove; background-color: #ffffff;\" \n           returnKeyType=\"next\"\n           required\n           [autocorrect]=\"false\"\n           autocapitalizationType=\"none\"\n           formControlName=\"buyerrating\"\n           #buyerratingEl\n       ></TextField>\n        <Slider value=\"1\" minValue=\"1\" maxValue=\"5\"\n        (valueChange)=\"onSliderValueChange($event)\">\n       </Slider>\n        <Label\n            *ngIf=\"!buyerratingControlIsValid\"\n            text=\"Please enter a valid buyer rating.\"\n        ></Label>\n    </StackLayout>\n    <StackLayout class=\"input-field\">\n        <Label\n            class=\"label\"\n            text=\"Buyer Comments\"\n            [ngClass]=\"{ invalid: !buyercommentsControlIsValid }\"\n        ></Label>\n        <TextView\n             class=\"input\"\n             returnKeyType=\"next\"\n             required\n             [autocorrect]=\"false\"\n             autocapitalizationType=\"none\"\n             formControlName=\"buyercomments\"\n             #buyercommentsEl\n        ></TextView>\n        <Label\n            *ngIf=\"!buyercommentsControlIsValid\"\n            text=\"Please enter a valid buyer comment.\"\n        ></Label>\n    </StackLayout>\n    <Button\n        class=\"btn btn-primary btn-rounded-lg\"\n        text=\"Rate Buyer\"\n        (tap)=\"onRateBuyer($event)\"\n    ></Button>\n</StackLayout>"

/***/ }),

/***/ "./app/advert/ratebuyer/ratebuyer.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/advert/ratebuyer/ratebuyer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatebuyerComponent", function() { return RatebuyerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _advert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/advert/advert.service.ts");
/* harmony import */ var nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-fancyalert/fancyalert.js");
/* harmony import */ var nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__);





//import for app settings

var RatebuyerComponent = /** @class */ (function () {
    function RatebuyerComponent(advertServ, router) {
        this.advertServ = advertServ;
        this.router = router;
        this.buyerratingControlIsValid = true;
        this.buyercommentsControlIsValid = true;
    }
    RatebuyerComponent.prototype.onSliderValueChange = function (args) {
        var slider = args.object;
        this.form.controls['buyerrating'].setValue((args.value).toString());
    };
    RatebuyerComponent.prototype.ngOnInit = function () {
        var _this = this;
        //populate rating options
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            buyerrating: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                ]
            }),
            buyercomments: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                ]
            })
        });
        this.form.get('buyerrating').statusChanges.subscribe(function (status) {
            _this.buyerratingControlIsValid = status === 'VALID';
        });
        this.form.get('buyercomments').statusChanges.subscribe(function (status) {
            _this.buyercommentsControlIsValid = status === 'VALID';
        });
        this.rateResultSub = this.advertServ.currentRateBuyer.subscribe(function (rateresult) {
            if (rateresult) {
                _this.rate = rateresult;
                if (_this.rate.responseStatusCode === 200 && _this.rate.buyerrated === true) {
                    _this.advertServ.clearRating();
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_3__["TNSFancyAlert"].showSuccess("Rating Success", _this.rate.message, "Dismiss").then(function (t) {
                        _this.router.back();
                        _this.router.back();
                        nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_3__["TNSFancyAlert"].showColorDialog("Please Choose an action:", "Would you like to delete this Advertisement now?", "Yes", "No", undefined, undefined, undefined, undefined).then(function (result) {
                            if (result == true) {
                            }
                            else {
                                var advertisementID = tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"]("advertisementid");
                                _this.advertServ.deleteAdvertisement(advertisementID);
                                _this.router.navigate(['/advert/home'], {
                                    animated: true,
                                    transition: {
                                        name: "slide",
                                        duration: 200,
                                        curve: "ease"
                                    }
                                }).then(function (t) {
                                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_3__["TNSFancyAlert"].showSuccess("Success!", "Advertisement Successfully Deleted!", "Close");
                                });
                            }
                        });
                    });
                }
                else if (_this.rate.responseStatusCode === 500) {
                    _this.advertServ.clearRating();
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_3__["TNSFancyAlert"].showError("Error Rating", _this.rate.message, "Dismiss");
                }
                else if (_this.rate.responseStatusCode === 200 && _this.rate.ratingid === '00000000-0000-0000-0000-000000000000') {
                    _this.advertServ.clearRating();
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_3__["TNSFancyAlert"].showError("Rating Already Completed.", _this.rate.message, "Dismiss").then(function (t) {
                        _this.router.navigate(['/advert/home'], {
                            animated: true,
                            transition: {
                                name: "slide",
                                duration: 2,
                                curve: "ease"
                            }
                        });
                    });
                }
                else {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_3__["TNSFancyAlert"].showError("Error Rating", _this.rate.message, "Dismiss");
                    _this.advertServ.clearRating();
                }
            }
        });
    };
    RatebuyerComponent.prototype.ngOnDestroy = function () {
        if (this.rateResultSub) {
            this.rateResultSub.unsubscribe();
        }
        this.advertServ.clearSelectedOutstandingrating();
    };
    //Send message function
    RatebuyerComponent.prototype.onRateBuyer = function (args) {
        var _this = this;
        this.buyerratingEl.nativeElement.focus();
        this.buyercommentsEl.nativeElement.focus();
        this.buyercommentsEl.nativeElement.dismissSoftInput();
        if (!this.form.valid) {
            return;
        }
        setTimeout(function () {
            var buyerrating = _this.form.get('buyerrating').value;
            var buyercomments = _this.form.get('buyercomments').value;
            var advertisementid = tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"]("advertisementid");
            var sellerid = tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"]("sellerid");
            var buyerid = tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"]("buyerid");
            _this.advertServ.RateBuyer(advertisementid, buyerid, sellerid, buyerrating, buyercomments);
        }, 100);
    };
    RatebuyerComponent.ctorParameters = function () { return [
        { type: _advert_service__WEBPACK_IMPORTED_MODULE_2__["AdvertService"] },
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterExtensions"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('buyerratingEl', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RatebuyerComponent.prototype, "buyerratingEl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('buyercommentsEl', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RatebuyerComponent.prototype, "buyercommentsEl", void 0);
    RatebuyerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-ratebuyer',
            template: __webpack_require__("./app/advert/ratebuyer/ratebuyer.component.html"),
            styles: [__webpack_require__("./app/advert/ratebuyer/ratebuyer.component.scss")]
        }),
        __metadata("design:paramtypes", [_advert_service__WEBPACK_IMPORTED_MODULE_2__["AdvertService"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterExtensions"]])
    ], RatebuyerComponent);
    return RatebuyerComponent;
}());



/***/ }),

/***/ "./app/advert/rateseller/rateseller.component.html":
/***/ (function(module, exports) {

module.exports = "<ns-action-bar  [actionBarTitle]=\"'Seller Rating'\" [hasMenu]=false [showBackButton]=true></ns-action-bar>\n<StackLayout class=\"form\" [formGroup]=\"form\">\n    <StackLayout class=\"input-field\">\n        <Label\n            class=\"label\"\n            text=\"Please select a rating from 1-5\"\n            [ngClass]=\"{ invalid: !sellerratingControlIsValid }\"\n        ></Label>\n        <TextField\n           editable=\"false\" textWrap=\"true\"\n           style=\"border-style: hidden ; border-width: 0;border-bottom-style: groove; background-color: #ffffff;\" \n           returnKeyType=\"next\"\n           required\n           [autocorrect]=\"false\"\n           autocapitalizationType=\"none\"\n           formControlName=\"sellerrating\"\n           #sellerratingEl\n       ></TextField>\n        <Slider value=\"1\" minValue=\"1\" maxValue=\"5\"\n        (valueChange)=\"onSliderValueChange($event)\">\n       </Slider>\n        <Label\n            *ngIf=\"!sellerratingControlIsValid\"\n            text=\"Please enter a valid seller rating.\"\n        ></Label>\n    </StackLayout>\n    <StackLayout class=\"input-field\">\n        <Label\n            class=\"label\"\n            text=\"Seller Comments\"\n            [ngClass]=\"{ invalid: !sellercommentsControlIsValid }\"\n        ></Label>\n        <TextView\n             class=\"input\"\n             returnKeyType=\"next\"\n             required\n             [autocorrect]=\"false\"\n             autocapitalizationType=\"none\"\n             formControlName=\"sellercomments\"\n             #sellercommentsEl\n        ></TextView>\n        <Label\n            *ngIf=\"!sellercommentsControlIsValid\"\n            text=\"Please enter a valid seller comment.\"\n        ></Label>\n    </StackLayout>\n    <Button\n        class=\"btn btn-primary btn-rounded-lg\"\n        text=\"Rate Seller\"\n        (tap)=\"onRateSeller()\"\n    ></Button>\n</StackLayout>"

/***/ }),

/***/ "./app/advert/rateseller/rateseller.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/advert/rateseller/rateseller.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatesellerComponent", function() { return RatesellerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _advert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/advert/advert.service.ts");
/* harmony import */ var nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-fancyalert/fancyalert.js");
/* harmony import */ var nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__);





//import for app settings

var RatesellerComponent = /** @class */ (function () {
    function RatesellerComponent(advertServ, router) {
        this.advertServ = advertServ;
        this.router = router;
        this.sellerratingControlIsValid = true;
        this.sellercommentsControlIsValid = true;
    }
    RatesellerComponent.prototype.onSliderValueChange = function (args) {
        var slider = args.object;
        this.form.controls['sellerrating'].setValue((args.value).toString());
    };
    RatesellerComponent.prototype.ngOnInit = function () {
        var _this = this;
        //populate rating options
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            sellerrating: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                ]
            }),
            sellercomments: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                ]
            })
        });
        this.form.get('sellerrating').statusChanges.subscribe(function (status) {
            _this.sellerratingControlIsValid = status === 'VALID';
        });
        this.form.get('sellercomments').statusChanges.subscribe(function (status) {
            _this.sellercommentsControlIsValid = status === 'VALID';
        });
    };
    //Send message function
    RatesellerComponent.prototype.onRateSeller = function () {
        var _this = this;
        this.sellerratingEl.nativeElement.focus();
        this.sellercommentsEl.nativeElement.focus();
        this.sellercommentsEl.nativeElement.dismissSoftInput();
        if (!this.form.valid) {
            return;
        }
        var ratingid = tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"]("ratingid");
        var sellerrating = this.form.get('sellerrating').value;
        var sellercomments = this.form.get('sellercomments').value;
        this.rateResultSub = this.advertServ.currentRateSeller.subscribe(function (rateresult) {
            if (rateresult) {
                _this.rate = rateresult;
                if (_this.rate.responseStatusCode === 200 && _this.rate.sellerrated === true) {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_3__["TNSFancyAlert"].showSuccess("Rating Success", _this.rate.message, "Dismiss");
                    _this.advertServ.clearSellerRating();
                    _this.advertServ.OutstandingRatings();
                    _this.router.navigate(['/advert/home'], {
                        animated: true,
                        transition: {
                            name: "slide",
                            duration: 2,
                            curve: "ease"
                        }
                    });
                }
                else if (_this.rate.responseStatusCode === 500) {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_3__["TNSFancyAlert"].showError("Error Rating", _this.rate.message, "Dismiss");
                    _this.advertServ.clearSellerRating();
                }
                else if (_this.rate.responseStatusCode === 400) {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_3__["TNSFancyAlert"].showError("Error Rating", _this.rate.message, "Dismiss");
                    _this.advertServ.clearSellerRating();
                }
                else {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_3__["TNSFancyAlert"].showError("Error Rating", _this.rate.message, "Dismiss");
                    _this.advertServ.clearSellerRating();
                }
            }
        });
        setTimeout(function () {
            //send message
            _this.advertServ.RateSeller(ratingid, sellerrating, sellercomments);
        }, 100);
    };
    RatesellerComponent.prototype.ngOnDestroy = function () {
        if (this.rateResultSub) {
            this.rateResultSub.unsubscribe();
        }
        this.advertServ.clearSelectedOutstandingrating();
    };
    RatesellerComponent.ctorParameters = function () { return [
        { type: _advert_service__WEBPACK_IMPORTED_MODULE_2__["AdvertService"] },
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterExtensions"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sellerratingEl', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RatesellerComponent.prototype, "sellerratingEl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sellercommentsEl', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RatesellerComponent.prototype, "sellercommentsEl", void 0);
    RatesellerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-rateseller',
            template: __webpack_require__("./app/advert/rateseller/rateseller.component.html"),
            styles: [__webpack_require__("./app/advert/rateseller/rateseller.component.scss")]
        }),
        __metadata("design:paramtypes", [_advert_service__WEBPACK_IMPORTED_MODULE_2__["AdvertService"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterExtensions"]])
    ], RatesellerComponent);
    return RatesellerComponent;
}());



/***/ }),

/***/ "./app/advert/rating-home /rating-home.component.html":
/***/ (function(module, exports) {

module.exports = "<ns-action-bar [actionBarTitle]=\"'Outstanding Ratings'\" [hasMenu]=true [showBackButton]=false></ns-action-bar>\n\n<StackLayout orientation=\"horizontal\" class =\"MessagesStack\">\n</StackLayout>\n    <RadListView  *ngIf=\"ratingsLoaded \" [items]=\"myOutstandingratingArray\" selectionBehavior=\"Press\" (itemSelected)=\"onItemSelected($event)\" class=\"chatsRadList\">\n        <ng-template tkListItemTemplate let-outstandingrating=\"item\" >\n            <Gridlayout rows=\"*,*,*,*,*\" columns=\"10*,20*,5*\" class=\"list-group-item\" class=\"GridLayoutChatListStyle\" shadow=\"6\" >\n                <Label row=\"0\" col=\"0\" text=\"Seller:\" textWrap=\"true\"  ></Label>\n                <Label *ngIf=\"outstandingrating\" row=\"0\" col=\"1\" [text]=\"outstandingrating.username\" textWrap=\"true\"  ></Label>\n                <Label row=\"1\" col=\"0\" text=\"Item Price:\" textWrap=\"true\"  ></Label>\n                <Label *ngIf=\"outstandingrating\" row=\"1\" col=\"1\" [text]=\"outstandingrating.price\"  textWrap=\"true\"  ></Label>\n                <Label row=\"2\" col=\"0\" text=\"Advert:\" textWrap=\"true\"  ></Label>\n                <Label *ngIf=\"outstandingrating\" row=\"2\" col=\"1\" [text]=\"outstandingrating.title\" textWrap=\"true\"  ></Label>\n                <Label row=\"3\" col=\"0\" text=\"Description:\" textWrap=\"true\"  ></Label>\n                <Label *ngIf=\"outstandingrating\" row=\"3\" col=\"1\" [text]=\"outstandingrating.description\" textWrap=\"true\"  ></Label>\n                <Label row=\"0\" col=\"2\" text=\"&#xf005;\" class =\"Ratebuyerlabel\" textWrap=\"true\"  ></Label>\n            </Gridlayout>\n        </ng-template>\n    </RadListView>\n    \n"

/***/ }),

/***/ "./app/advert/rating-home /rating-home.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/advert/rating-home /rating-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingHomeComponent", function() { return RatingHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _advert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/advert/advert.service.ts");
/* harmony import */ var nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-fancyalert/fancyalert.js");
/* harmony import */ var nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/tns-core-modules/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__);





//import for app settings

var RatingHomeComponent = /** @class */ (function () {
    function RatingHomeComponent(advertServ, router) {
        this.advertServ = advertServ;
        this.router = router;
        this.userid = "";
    }
    RatingHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ratingsLoaded = false;
        this.outstandingratingResultListSub = this.advertServ.currentOutstandingratingList.subscribe(function (outstandingratingResult) {
            if (outstandingratingResult) {
                if (outstandingratingResult.responseStatusCode === 200) {
                    _this.myOutstandingratingArray = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_4__["ObservableArray"](0);
                    outstandingratingResult.Outstandingratings.forEach(function (t) {
                        _this.myOutstandingratingArray.push(t);
                    });
                    _this.ratingsLoaded = true;
                }
                else {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_2__["TNSFancyAlert"].showError("Data Retrieval", "Unable to retrieve data.");
                }
            }
        });
        var userid = tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"]("userid");
        this.advertServ.initializeOutstandingratings(userid);
    };
    RatingHomeComponent.prototype.onItemSelected = function (args) {
        var tappedOutstandingratingItem = args.view.bindingContext;
        tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["setString"]("ratingid", tappedOutstandingratingItem.ratingid);
        this.router.navigate(['/rateseller'], {
            animated: true,
            transition: {
                name: "slide",
                duration: 200,
                curve: "ease"
            }
        });
    };
    RatingHomeComponent.prototype.ngOnDestroy = function () {
        if (this.outstandingratingResultListSub) {
            this.outstandingratingResultListSub.unsubscribe();
        }
        this.advertServ.clearSelectedOutstandingrating();
    };
    RatingHomeComponent.ctorParameters = function () { return [
        { type: _advert_service__WEBPACK_IMPORTED_MODULE_1__["AdvertService"] },
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"] }
    ]; };
    RatingHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-rating-home',
            template: __webpack_require__("./app/advert/rating-home /rating-home.component.html"),
            styles: [__webpack_require__("./app/advert/rating-home /rating-home.component.scss")]
        }),
        __metadata("design:paramtypes", [_advert_service__WEBPACK_IMPORTED_MODULE_1__["AdvertService"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"]])
    ], RatingHomeComponent);
    return RatingHomeComponent;
}());



/***/ }),

/***/ "./app/advert/rating/rating.component.html":
/***/ (function(module, exports) {

module.exports = "<ns-action-bar [actionBarTitle]=\"'Ratings'\" [hasMenu]=true [showBackButton]=false></ns-action-bar>\n<StackLayout orientation=\"horizontal\" class =\"MessagesStack\">\n</StackLayout>\n<Gridlayout rows=\"2.5*,*\" columns=\"*,\" class=\"list-group-item\" class=\"GridLayoutBuyerRatingdash\" shadow=\"6\" >\n    <Label row=\"0\" col=\"0\" class=\"Ratingdashboard\" [text]=\"buyingaverage.average\" *ngIf=\"buyingFound\" textWrap=\"true\"  ></Label>\n    <Label row=\"1\" col=\"0\" text=\"Average from Buying\" class=\"BuyingAverage\" textWrap=\"true\"  ></Label>  \n</Gridlayout>\n\n<Gridlayout rows=\"2.5*,*\" columns=\"*,\" class=\"list-group-item\" class=\"GridLayoutSellerRatingdash\" shadow=\"6\" >\n    <Label row=\"0\" col=\"0\" class=\"Ratingdashboard\" [text]=\"sellingaverage.average\" *ngIf=\"sellingFound\" textWrap=\"true\"  ></Label>\n    <Label row=\"1\" col=\"0\" text=\"Average from Selling\" class=\"BuyingAverage\" textWrap=\"true\"  ></Label>  \n</Gridlayout>\n\n<Gridlayout rows=\"2.5*,*\" columns=\"*,\" class=\"list-group-item\" class=\"GridLayoutPreviousBought\" shadow=\"6\" >\n    <Label row=\"0\" col=\"0\" class=\"Ratingdashboard\" text=\"&#xf27a;\" class=\"PreviousLabel\"(tap)=\"onBuyerRatings($event)\" textWrap=\"true\"  ></Label>\n    <Label row=\"1\" col=\"0\" text=\"Previous Bought Ratings\" class=\"Previous\"(tap)=\"onBuyerRatings($event)\" textWrap=\"true\"  ></Label>  \n</Gridlayout>\n\n<Gridlayout rows=\"2.5*,*\" columns=\"*,\" class=\"list-group-item\" class=\"GridLayoutPreviousSold\" shadow=\"6\" >\n    <Label row=\"0\" col=\"0\" class=\"Ratingdashboard\" text=\"&#xf27a;\" class=\"PreviousLabel\"(tap)=\"onSellerRatings($event)\" textWrap=\"true\"  ></Label>\n    <Label row=\"1\" col=\"0\" text=\"Previous Sold Ratings\" class=\"PreviousSold\"(tap)=\"onSellerRatings($event)\" textWrap=\"true\"  ></Label>  \n</Gridlayout>\n\n<Gridlayout rows=\"2.5*,*\" columns=\"*,\" class=\"list-group-item\" class=\"GridLayoutOutstanding\" shadow=\"6\" >\n    <Label row=\"0\" col=\"0\" class=\"Ratingdashboard\" text=\"&#xf0cb;\" class=\"PreviousLabel\"(tap)=\"onOutstandingRatings($event)\" textWrap=\"true\"  ></Label>\n    <Label row=\"1\" col=\"0\" text=\"Outstanding Ratings\" class=\"Outstanding\"(tap)=\"onOutstandingRatings($event)\" textWrap=\"true\"  ></Label>  \n</Gridlayout>"

/***/ }),

/***/ "./app/advert/rating/rating.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/advert/rating/rating.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _advert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/advert/advert.service.ts");
/* harmony import */ var nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-fancyalert/fancyalert.js");
/* harmony import */ var nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__);




var RatingComponent = /** @class */ (function () {
    function RatingComponent(advertServ, router) {
        this.advertServ = advertServ;
        this.router = router;
        this.userid = "";
    }
    RatingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.advertServ.Buyingdashboard();
        this.buyingaverageResultSub = this.advertServ.currentBuyingAverage.subscribe(function (buyingresult) {
            if (buyingresult) {
                _this.buyingaverage = buyingresult;
                if (_this.buyingaverage.responseStatusCode === 200) {
                    _this.buyingFound = true;
                }
                else if (_this.buyingaverage.responseStatusCode === 200 && _this.buyingaverage.average != "You have not been rated as a buyer yet") {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_2__["TNSFancyAlert"].showInfo("No Average", _this.buyingaverage.average, "Dismiss");
                }
                else {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_2__["TNSFancyAlert"].showError("Connection Error", "There has been an issue whilst trying to connect, please contact support", "Dismiss");
                }
            }
        });
        setTimeout(function () {
            //Call the service with captured information
            _this.advertServ.Sellingdashboard();
        }, 100);
        this.sellingaverageResultSub = this.advertServ.currentSellingAverage.subscribe(function (sellingresult) {
            if (sellingresult) {
                _this.sellingaverage = sellingresult;
                if (_this.sellingaverage.responseStatusCode === 200) {
                    _this.sellingFound = true;
                }
                else if (_this.sellingaverage.responseStatusCode === 200 && _this.sellingaverage.average == "You have not been rated as a seller yet") {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_2__["TNSFancyAlert"].showInfo("No Average", _this.sellingaverage.average, "Dismiss");
                }
                else {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_2__["TNSFancyAlert"].showError("Connection Error", "There has been an issue whilst trying to connect, please contact support", "Dismiss");
                }
            }
        });
    };
    RatingComponent.prototype.onOutstandingRatings = function (args) {
        this.router.navigate(['/ratinghome'], {
            animated: true,
            transition: {
                name: "slide",
                duration: 200,
                curve: "ease"
            }
        });
    };
    RatingComponent.prototype.onSellerRatings = function (args) {
        this.router.navigate(['/sellerrating'], {
            animated: true,
            transition: {
                name: "slide",
                duration: 200,
                curve: "ease"
            }
        });
    };
    RatingComponent.prototype.onBuyerRatings = function (args) {
        this.router.navigate(['/buyerrating'], {
            animated: true,
            transition: {
                name: "slide",
                duration: 200,
                curve: "ease"
            }
        });
    };
    /*async showBuyerAverage() {
          this.advertServ.Buyingdashboard();
          this.buyingaverageResultSub = this.advertServ.currentBuyingAverage.subscribe(
              averageresult => {
                  if(averageresult){
                      this.average = averageresult;
   
                      if(this.average.responseStatusCode === 200 && this.average.average != "You have not been rated as a buyer yet"){
                          TNSFancyAlert.showInfo("Buying Average", "Your average from purchasing on this platform is " + this.average.average, "Dismiss")
                          this.advertServ.clearAverage();
                          console.log(this.average.average);
                  
                      } else if (this.average.responseStatusCode === 200 && this.average.average != "You have not been rated as a buyer yet"){
                          TNSFancyAlert.showInfo("No Average", this.average.average, "Dismiss")
                          this.advertServ.clearAverage();
                      }
                      else {
                          TNSFancyAlert.showError("Connection Error", "There has been an issue whilst trying to connect, please contact support", "Dismiss");
                      }
                      
                  }
              }
          );
      }
  */
    /*async  showSellerAverage() {
          this.advertServ.Sellingdashboard();
          this.sellingaverageResultSub = this.advertServ.currentSellingAverage.subscribe(
              averageresult => {
                  if(averageresult){
                      this.average = averageresult;
   
                      if( this.average.responseStatusCode === 200 && this.average.average != "You have not been rated as a seller yet"){
                          TNSFancyAlert.showInfo("Selling Average", "Your average from selling on this platform is " + this.average.average , "Dismiss")
                          this.advertServ.clearAverage();
                    console.log(this.average.average);
                  
                      } else if ( this.average.responseStatusCode === 200 && this.average.average == "You have not been rated as a seller yet"){
                          TNSFancyAlert.showInfo("No Average", this.average.average, "Dismiss")
                          this.advertServ.clearAverage();
                
                      }
                      else {
                          TNSFancyAlert.showError("Connection Error", "There has been an issue whilst trying to connect, please contact support", "Dismiss");
                      }
                      
                  }
              }
          );
      }
      */
    RatingComponent.prototype.ngOnDestroy = function () {
        if (this.buyingaverageResultSub) {
            this.buyingaverageResultSub.unsubscribe();
        }
        if (this.sellingaverageResultSub) {
            this.sellingaverageResultSub.unsubscribe();
        }
        this.advertServ.clearSelectedOutstandingrating();
    };
    RatingComponent.ctorParameters = function () { return [
        { type: _advert_service__WEBPACK_IMPORTED_MODULE_1__["AdvertService"] },
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"] }
    ]; };
    RatingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-rating',
            template: __webpack_require__("./app/advert/rating/rating.component.html"),
            styles: [__webpack_require__("./app/advert/rating/rating.component.scss")]
        }),
        __metadata("design:paramtypes", [_advert_service__WEBPACK_IMPORTED_MODULE_1__["AdvertService"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"]])
    ], RatingComponent);
    return RatingComponent;
}());



/***/ }),

/***/ "./app/advert/sellerratings/sellerratings.component.html":
/***/ (function(module, exports) {

module.exports = "<ns-action-bar [actionBarTitle]=\"'Previous Ratings'\" [hasMenu]=true [showBackButton]=false></ns-action-bar>\n<StackLayout orientation=\"horizontal\" class =\"MessagesStack\">\n</StackLayout>\n    <RadListView  *ngIf=\"ratingsLoaded \" [items]=\"myPreviousratingArray\" class=\"chatsRadList\">\n        <ng-template tkListItemTemplate let-previousrating=\"item\" >\n            <Gridlayout rows=\"*,*,*\" columns=\"10*,20*,5*\" class=\"list-group-item\" class=\"GridLayoutChatListStyle\" shadow=\"6\" >\n                <Label row=\"0\" col=\"0\" text=\"Buyer:\" textWrap=\"true\"  ></Label>\n                <Label *ngIf=\"previousrating\" row=\"0\" col=\"1\" [text]=\"previousrating.username\" textWrap=\"true\"  ></Label>\n                <Label row=\"1\" col=\"0\" text=\"Rating:\" textWrap=\"true\"  ></Label>\n                <Label *ngIf=\"previousrating\" row=\"1\" col=\"1\" [text]=\"previousrating.rating\"  textWrap=\"true\"  ></Label>\n                <Label row=\"2\" col=\"0\" text=\"Comment:\" textWrap=\"true\"  ></Label>\n                <Label *ngIf=\"previousrating\" row=\"2\" col=\"1\" [text]=\"previousrating.comment\" textWrap=\"true\"  ></Label>\n            </Gridlayout>\n        </ng-template>\n    </RadListView>\n    "

/***/ }),

/***/ "./app/advert/sellerratings/sellerratings.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/advert/sellerratings/sellerratings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerratingsComponent", function() { return SellerratingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _advert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/advert/advert.service.ts");
/* harmony import */ var nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-fancyalert/fancyalert.js");
/* harmony import */ var nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/tns-core-modules/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__);





//import for app settings

var SellerratingsComponent = /** @class */ (function () {
    function SellerratingsComponent(advertServ, router) {
        this.advertServ = advertServ;
        this.router = router;
        this.userid = "";
    }
    SellerratingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ratingsLoaded = false;
        this.previousratingResultListSub = this.advertServ.currentPreviousratingList.subscribe(function (previousratingResult) {
            if (previousratingResult) {
                if (previousratingResult.responseStatusCode === 200) {
                    _this.myPreviousratingArray = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_4__["ObservableArray"](0);
                    previousratingResult.Previousratings.forEach(function (t) {
                        _this.myPreviousratingArray.push(t);
                    });
                    _this.ratingsLoaded = true;
                }
                else {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_2__["TNSFancyAlert"].showError("No ratings", "There aren't any previous rattings to display");
                }
            }
        });
        var userid = tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"]("userid");
        this.advertServ.Previoussellerratings(userid);
    };
    SellerratingsComponent.prototype.ngOnDestroy = function () {
        if (this.previousratingResultListSub) {
            this.previousratingResultListSub.unsubscribe();
        }
    };
    SellerratingsComponent.ctorParameters = function () { return [
        { type: _advert_service__WEBPACK_IMPORTED_MODULE_1__["AdvertService"] },
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"] }
    ]; };
    SellerratingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-sellerratings',
            template: __webpack_require__("./app/advert/sellerratings/sellerratings.component.html"),
            styles: [__webpack_require__("./app/advert/sellerratings/sellerratings.component.scss")]
        }),
        __metadata("design:paramtypes", [_advert_service__WEBPACK_IMPORTED_MODULE_1__["AdvertService"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"]])
    ], SellerratingsComponent);
    return SellerratingsComponent;
}());



/***/ }),

/***/ "./app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth_login_auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/auth/login/auth.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/auth/register/register.component.ts");
/* harmony import */ var _auth_forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/auth/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var _auth_updateuser_updateuser_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/auth/updateuser/updateuser.component.ts");
/* harmony import */ var _auth_newpassword_newpassword_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/auth/newpassword/newpassword.component.ts");
/* harmony import */ var _advert_messaging_home_messaging_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/advert/messaging-home/messaging-home.component.ts");
/* harmony import */ var _advert_messaging_details_messaging_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./app/advert/messaging-details/messaging-details.component.ts");
/* harmony import */ var _advert_rating_home_rating_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./app/advert/rating-home /rating-home.component.ts");
/* harmony import */ var _advert_rateseller_rateseller_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./app/advert/rateseller/rateseller.component.ts");
/* harmony import */ var _advert_buyerratings_buyerratings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./app/advert/buyerratings/buyerratings.component.ts");
/* harmony import */ var _advert_sellerratings_sellerratings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./app/advert/sellerratings/sellerratings.component.ts");
/* harmony import */ var _advert_ratebuyer_home_ratebuyer_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./app/advert/ratebuyer-home/ratebuyer-home.component.ts");
/* harmony import */ var _advert_ratebuyer_ratebuyer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./app/advert/ratebuyer/ratebuyer.component.ts");
/* harmony import */ var _advert_rating_rating_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./app/advert/rating/rating.component.ts");
/* harmony import */ var _auth_help_help_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./app/auth/help/help.component.ts");







//messaging imports 


//rating imports








var routes = [
    { path: '', component: _auth_login_auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"] },
    { path: 'register', component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'forgotpassword', component: _auth_forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_4__["ForgotpasswordComponent"] },
    { path: 'newpassword', component: _auth_newpassword_newpassword_component__WEBPACK_IMPORTED_MODULE_6__["NewpasswordComponent"] },
    { path: 'updateuser', component: _auth_updateuser_updateuser_component__WEBPACK_IMPORTED_MODULE_5__["UpdateuserComponent"] },
    {
        path: 'advert',
        loadChildren: '~/app/advert/advert.module#AdvertModule'
    },
    {
        path: 'purchase',
        loadChildren: '~/app/purchase/purchase.module#PurchaseModule'
    },
    { path: 'messaginghome', component: _advert_messaging_home_messaging_home_component__WEBPACK_IMPORTED_MODULE_7__["MessagingHomeComponent"] },
    { path: 'messagingdetails', component: _advert_messaging_details_messaging_details_component__WEBPACK_IMPORTED_MODULE_8__["MessagingDetailsComponent"] },
    { path: 'ratinghome', component: _advert_rating_home_rating_home_component__WEBPACK_IMPORTED_MODULE_9__["RatingHomeComponent"] },
    { path: 'rateseller', component: _advert_rateseller_rateseller_component__WEBPACK_IMPORTED_MODULE_10__["RatesellerComponent"] },
    { path: 'buyerrating', component: _advert_buyerratings_buyerratings_component__WEBPACK_IMPORTED_MODULE_11__["BuyerratingsComponent"] },
    { path: 'sellerrating', component: _advert_sellerratings_sellerratings_component__WEBPACK_IMPORTED_MODULE_12__["SellerratingsComponent"] },
    { path: 'sellerrating', component: _advert_sellerratings_sellerratings_component__WEBPACK_IMPORTED_MODULE_12__["SellerratingsComponent"] },
    { path: 'ratebuyerhome', component: _advert_ratebuyer_home_ratebuyer_home_component__WEBPACK_IMPORTED_MODULE_13__["RatebuyerHomeComponent"] },
    { path: 'ratebuyer', component: _advert_ratebuyer_ratebuyer_component__WEBPACK_IMPORTED_MODULE_14__["RatebuyerComponent"] },
    { path: 'rating', component: _advert_rating_rating_component__WEBPACK_IMPORTED_MODULE_15__["RatingComponent"] },
    { path: 'help', component: _auth_help_help_component__WEBPACK_IMPORTED_MODULE_16__["HelpComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<RadSideDrawer>\n    <GridLayout rows=\"10*,*\" columns=\"*\" tkDrawerContent class=\"drawer-container\">\n    <FlexboxLayout row=\"0\" col=\"0\" class=\"sidedrawer-menu-list\">\n    <Button *ngIf=\"isLoggedIn\" class=\"btn-sidedrawer-menu-top\" text=\"Home\" (tap)=\"advertHome()\"></Button>\n    <Button *ngIf=\"isLoggedIn\" class=\"btn-sidedrawer-menu\" text=\"My Adverts\" (tap)=\"myAdsHome()\"></Button>\n    <Button *ngIf=\"isLoggedIn\" class=\"btn-sidedrawer-menu\" text=\"Personal Details\" (tap)=\"myPersonalDetails()\"></Button>\n    <Button *ngIf=\"isLoggedIn\" class=\"btn-sidedrawer-menu\" text=\"Shop\" (tap)=\"shopHome()\"></Button>\n    <StackLayout orientation=\"horizontal\" class=\"Sidedrawer\">\n    <Button *ngIf=\"isLoggedIn\" class=\"btn-sidedrawer-message\" text=\"Messages\" (tap)=\"Messagehome()\"></Button>\n    <Label *ngIf=\"unreadMessages\" text=\"&#xf0f3;\" class=\"Homeunread\" textWrap=\"true\" ></Label>\n    <Label *ngIf=\"unreadMessages == false\" text=\"&#xf1f6;\" class=\"Homeread\" textWrap=\"true\" ></Label>\n    </StackLayout>\n    <StackLayout orientation=\"horizontal\" class=\"Sidedrawer\">\n    <Button *ngIf=\"isLoggedIn\" class=\"btn-sidedrawer-message\" text=\"Ratings\" (tap)=\"Ratinghome()\"></Button>\n    <Label *ngIf=\"outstandingRatings\" text=\"&#xf0f3;\" class=\"Homeunread\" textWrap=\"true\" ></Label>\n    <Label *ngIf=\"outstandingRatings == false\" text=\"&#xf1f6;\" class=\"Homeread\" textWrap=\"true\" ></Label>\n    </StackLayout>\n    </FlexboxLayout>\n    <Button *ngIf=\"isLoggedIn\" row=\"1\" col=\"0\" text=\"Logout\" class=\"btn-logout\" (tap)=\"logOut()\"></Button>\n    </GridLayout>\n    <StackLayout tkMainContent>\n    <page-router-outlet (activate)=\"onRouterOutletActivate($event)\"></page-router-outlet>\n    </StackLayout>\n    </RadSideDrawer>"

/***/ }),

/***/ "./app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_advert_advert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/advert/advert.service.ts");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_ui_sidedrawer_angular_side_drawer_directives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-ui-sidedrawer/angular/side-drawer-directives.js");
/* harmony import */ var nativescript_ui_sidedrawer_angular_side_drawer_directives__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_sidedrawer_angular_side_drawer_directives__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_ui_ui_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/shared/ui/ui.service.ts");
/* harmony import */ var nativescript_purchase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/nativescript-purchase/purchase.js");
/* harmony import */ var nativescript_purchase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_purchase__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_6__);






//Import for config file

nativescript_purchase__WEBPACK_IMPORTED_MODULE_5__["init"]([
    "org.nativescript.purchasesample.product1",
    "org.nativescript.purchasesample.product3"
]);
var AppComponent = /** @class */ (function () {
    function AppComponent(router, uiService, changeDetectionRef, advertServ) {
        this.router = router;
        this.uiService = uiService;
        this.changeDetectionRef = changeDetectionRef;
        this.advertServ = advertServ;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.unreadchatsResultSub = this.advertServ.currentUnreadMessages.subscribe(function (unreadchatsresult) {
            if (unreadchatsresult) {
                _this.unreadchats = unreadchatsresult;
                if (_this.unreadchats.responseStatusCode === 200 && _this.unreadchats.unreadmessages === true) {
                    _this.unreadMessages = true;
                }
                else if (_this.unreadchats.responseStatusCode === 500) {
                    _this.unreadMessages = false;
                }
                else if (_this.unreadchats.responseStatusCode === 200 && _this.unreadchats.unreadmessages === false) {
                    _this.unreadMessages = false;
                }
                else {
                    _this.unreadMessages = false;
                }
            }
        });
        this.outstandingratingsResultSub = this.advertServ.currentOutstandingRating.subscribe(function (outstandingratingsresult) {
            if (outstandingratingsresult) {
                _this.outstandingratings = outstandingratingsresult;
                if (_this.outstandingratings.responseStatusCode === 200 && _this.outstandingratings.outstandingratings === true) {
                    _this.outstandingRatings = true;
                }
                else if (_this.outstandingratings.responseStatusCode === 500) {
                    _this.outstandingRatings = false;
                }
                else if (_this.outstandingratings.responseStatusCode === 200 && _this.outstandingratings.outstandingratings === false) {
                    _this.outstandingRatings = false;
                }
                else {
                    _this.outstandingRatings = false;
                }
            }
        });
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.drawersub = this.uiService.drawerState.subscribe(function () {
            _this.drawerComponent.sideDrawer.toggleDrawerState();
        });
        this.changeDetectionRef.detectChanges();
    };
    AppComponent.prototype.onRouterOutletActivate = function (event) {
        if (tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_6__["getBoolean"]("loggedIn")) {
            this.isLoggedIn = true;
        }
        else {
            this.isLoggedIn = false;
        }
    };
    AppComponent.prototype.advertHome = function () {
        this.drawerComponent.sideDrawer.closeDrawer();
        this.router.navigate(['/advert']);
    };
    AppComponent.prototype.shopHome = function () {
        this.drawerComponent.sideDrawer.closeDrawer();
        this.router.navigate(['/purchase']);
    };
    AppComponent.prototype.myAdsHome = function () {
        this.drawerComponent.sideDrawer.closeDrawer();
        this.router.navigate(['/advert/myadverts']);
    };
    AppComponent.prototype.myPersonalDetails = function () {
        this.drawerComponent.sideDrawer.closeDrawer();
        this.router.navigate(['/updateuser']);
    };
    AppComponent.prototype.Messagehome = function () {
        this.drawerComponent.sideDrawer.closeDrawer();
        this.router.navigate(['/messaginghome']);
    };
    AppComponent.prototype.Ratinghome = function () {
        this.drawerComponent.sideDrawer.closeDrawer();
        this.router.navigate(['/rating']);
    };
    AppComponent.prototype.logOut = function () {
        this.drawerComponent.sideDrawer.closeDrawer();
        tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_6__["setString"]("personid", "");
        tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_6__["setBoolean"]("rememberme", false);
        tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_6__["setBoolean"]("loggedIn", false);
        this.router.navigate([''], { clearHistory: true });
    };
    AppComponent.prototype.onViewUnread = function () {
        this.router.navigate(['/messaginghome'], {
            animated: true,
            transition: {
                name: "slide",
                duration: 200,
                curve: "ease"
            }
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        if (this.drawersub) {
            this.drawersub.unsubscribe();
        }
        if (this.unreadchatsResultSub) {
            this.unreadchatsResultSub.unsubscribe();
        }
        if (this.outstandingratingsResultSub) {
            this.outstandingratingsResultSub.unsubscribe();
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"] },
        { type: _shared_ui_ui_service__WEBPACK_IMPORTED_MODULE_4__["UIService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _app_advert_advert_service__WEBPACK_IMPORTED_MODULE_1__["AdvertService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(nativescript_ui_sidedrawer_angular_side_drawer_directives__WEBPACK_IMPORTED_MODULE_3__["RadSideDrawerComponent"], { static: false }),
        __metadata("design:type", nativescript_ui_sidedrawer_angular_side_drawer_directives__WEBPACK_IMPORTED_MODULE_3__["RadSideDrawerComponent"])
    ], AppComponent.prototype, "drawerComponent", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-app",
            template: __webpack_require__("./app/app.component.html")
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"],
            _shared_ui_ui_service__WEBPACK_IMPORTED_MODULE_4__["UIService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _app_advert_advert_service__WEBPACK_IMPORTED_MODULE_1__["AdvertService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/nativescript.module.js");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/forms/index.js");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/app.component.ts");
/* harmony import */ var _auth_login_auth_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/auth/login/auth.component.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./app/auth/auth.service.ts");
/* harmony import */ var _advert_advert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./app/advert/advert.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./app/shared/shared.module.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./app/auth/register/register.component.ts");
/* harmony import */ var _auth_forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./app/auth/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var _auth_updateuser_updateuser_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./app/auth/updateuser/updateuser.component.ts");
/* harmony import */ var _auth_newpassword_newpassword_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./app/auth/newpassword/newpassword.component.ts");
/* harmony import */ var _advert_messaging_home_messaging_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./app/advert/messaging-home/messaging-home.component.ts");
/* harmony import */ var _advert_messaging_details_messaging_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./app/advert/messaging-details/messaging-details.component.ts");
/* harmony import */ var _advert_rating_home_rating_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./app/advert/rating-home /rating-home.component.ts");
/* harmony import */ var _advert_rateseller_rateseller_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./app/advert/rateseller/rateseller.component.ts");
/* harmony import */ var _advert_buyerratings_buyerratings_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./app/advert/buyerratings/buyerratings.component.ts");
/* harmony import */ var _advert_sellerratings_sellerratings_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./app/advert/sellerratings/sellerratings.component.ts");
/* harmony import */ var _advert_ratebuyer_home_ratebuyer_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./app/advert/ratebuyer-home/ratebuyer-home.component.ts");
/* harmony import */ var _advert_ratebuyer_ratebuyer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./app/advert/ratebuyer/ratebuyer.component.ts");
/* harmony import */ var _advert_rating_rating_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./app/advert/rating/rating.component.ts");
/* harmony import */ var nativescript_ui_sidedrawer_angular_side_drawer_directives__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("../node_modules/nativescript-ui-sidedrawer/angular/side-drawer-directives.js");
/* harmony import */ var nativescript_ui_sidedrawer_angular_side_drawer_directives__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_sidedrawer_angular_side_drawer_directives__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("../node_modules/nativescript-ui-listview/angular/listview-directives.js");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _auth_institution_listpicker_institution_listpicker_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./app/auth/institution-listpicker/institution-listpicker.component.ts");
/* harmony import */ var _auth_otp_otp_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./app/auth/otp/otp.component.ts");
/* harmony import */ var _auth_validate_validate_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./app/auth/validate/validate.component.ts");
/* harmony import */ var nativescript_barcodescanner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("../node_modules/nativescript-barcodescanner/barcodescanner.js");
/* harmony import */ var nativescript_barcodescanner__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(nativescript_barcodescanner__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _auth_help_help_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./app/auth/help/help.component.ts");















//Messaging components


//rating imports














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ],
            imports: [
                nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NativeScriptFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                nativescript_ui_sidedrawer_angular_side_drawer_directives__WEBPACK_IMPORTED_MODULE_24__["NativeScriptUISideDrawerModule"],
                nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_25__["NativeScriptUIListViewModule"]
            ],
            providers: [
                _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
                _advert_advert_service__WEBPACK_IMPORTED_MODULE_9__["AdvertService"],
                nativescript_barcodescanner__WEBPACK_IMPORTED_MODULE_29__["BarcodeScanner"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _auth_login_auth_component__WEBPACK_IMPORTED_MODULE_7__["AuthComponent"],
                _auth_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
                _auth_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
                _auth_forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_12__["ForgotpasswordComponent"],
                _auth_updateuser_updateuser_component__WEBPACK_IMPORTED_MODULE_13__["UpdateuserComponent"],
                _auth_newpassword_newpassword_component__WEBPACK_IMPORTED_MODULE_14__["NewpasswordComponent"],
                _advert_messaging_home_messaging_home_component__WEBPACK_IMPORTED_MODULE_15__["MessagingHomeComponent"],
                _advert_messaging_details_messaging_details_component__WEBPACK_IMPORTED_MODULE_16__["MessagingDetailsComponent"],
                _advert_rating_home_rating_home_component__WEBPACK_IMPORTED_MODULE_17__["RatingHomeComponent"],
                _advert_rateseller_rateseller_component__WEBPACK_IMPORTED_MODULE_18__["RatesellerComponent"],
                _advert_buyerratings_buyerratings_component__WEBPACK_IMPORTED_MODULE_19__["BuyerratingsComponent"],
                _advert_sellerratings_sellerratings_component__WEBPACK_IMPORTED_MODULE_20__["SellerratingsComponent"],
                _advert_ratebuyer_home_ratebuyer_home_component__WEBPACK_IMPORTED_MODULE_21__["RatebuyerHomeComponent"],
                _advert_ratebuyer_ratebuyer_component__WEBPACK_IMPORTED_MODULE_22__["RatebuyerComponent"],
                _auth_institution_listpicker_institution_listpicker_component__WEBPACK_IMPORTED_MODULE_26__["InstitutionListPickerComponent"],
                _advert_rating_rating_component__WEBPACK_IMPORTED_MODULE_23__["RatingComponent"],
                _auth_otp_otp_component__WEBPACK_IMPORTED_MODULE_27__["OtpComponent"],
                _auth_validate_validate_component__WEBPACK_IMPORTED_MODULE_28__["ValidateComponent"],
                _auth_help_help_component__WEBPACK_IMPORTED_MODULE_30__["HelpComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ],
            entryComponents: [_auth_institution_listpicker_institution_listpicker_component__WEBPACK_IMPORTED_MODULE_26__["InstitutionListPickerComponent"], _auth_otp_otp_component__WEBPACK_IMPORTED_MODULE_27__["OtpComponent"], _auth_validate_validate_component__WEBPACK_IMPORTED_MODULE_28__["ValidateComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/auth/auth.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginResult", function() { return LoginResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginUser", function() { return LoginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordResult", function() { return ForgotPasswordResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterResult", function() { return RegisterResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserResult", function() { return GetUserResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserResult", function() { return UpdateUserResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePasswordResult", function() { return UpdatePasswordResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstitutionName", function() { return InstitutionName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstitutionNameList", function() { return InstitutionNameList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOTPResult", function() { return GetOTPResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateOTPResult", function() { return ValidateOTPResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetNewOTPResult", function() { return GetNewOTPResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsVerifiedResult", function() { return IsVerifiedResult; });
var LoginResult = /** @class */ (function () {
    function LoginResult(responseStatusCode, loginAttemptMessage, loginUser) {
        this.responseStatusCode = responseStatusCode;
        this.loginAttemptMessage = loginAttemptMessage;
        this.loginUser = loginUser;
    }
    LoginResult.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: LoginUser }
    ]; };
    return LoginResult;
}());

var LoginUser = /** @class */ (function () {
    function LoginUser(id, username, defaultInstitution, loggedIn) {
        this.id = id;
        this.username = username;
        this.defaultInstitution = defaultInstitution;
        this.loggedIn = loggedIn;
    }
    LoginUser.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: Boolean }
    ]; };
    return LoginUser;
}());

var ForgotPasswordResult = /** @class */ (function () {
    function ForgotPasswordResult(responseStatusCode, forgotpasswordAttemptMessage, msg) {
        this.responseStatusCode = responseStatusCode;
        this.forgotpasswordAttemptMessage = forgotpasswordAttemptMessage;
        this.msg = msg;
    }
    ForgotPasswordResult.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String }
    ]; };
    return ForgotPasswordResult;
}());

var RegisterResult = /** @class */ (function () {
    function RegisterResult(responseStatusCode, UserCreated, Username, UserID, Message) {
        this.responseStatusCode = responseStatusCode;
        this.UserCreated = UserCreated;
        this.Username = Username;
        this.UserID = UserID;
        this.Message = Message;
    }
    RegisterResult.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return RegisterResult;
}());

var GetUserResult = /** @class */ (function () {
    function GetUserResult(responseStatusCode, UserID, Username, Name, Surname, Email, Institutionname, AdsRemaining, Message, GotUser) {
        this.responseStatusCode = responseStatusCode;
        this.UserID = UserID;
        this.Username = Username;
        this.Name = Name;
        this.Surname = Surname;
        this.Email = Email;
        this.Institutionname = Institutionname;
        this.AdsRemaining = AdsRemaining;
        this.Message = Message;
        this.GotUser = GotUser;
    }
    GetUserResult.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: Boolean }
    ]; };
    return GetUserResult;
}());

var UpdateUserResult = /** @class */ (function () {
    function UpdateUserResult(responseStatusCode, UserUpdated, Message) {
        this.responseStatusCode = responseStatusCode;
        this.UserUpdated = UserUpdated;
        this.Message = Message;
    }
    UpdateUserResult.ctorParameters = function () { return [
        { type: Number },
        { type: Boolean },
        { type: String }
    ]; };
    return UpdateUserResult;
}());

var UpdatePasswordResult = /** @class */ (function () {
    function UpdatePasswordResult(responseStatusCode, PasswordUpdated, Message) {
        this.responseStatusCode = responseStatusCode;
        this.PasswordUpdated = PasswordUpdated;
        this.Message = Message;
    }
    UpdatePasswordResult.ctorParameters = function () { return [
        { type: Number },
        { type: Boolean },
        { type: String }
    ]; };
    return UpdatePasswordResult;
}());

var InstitutionName = /** @class */ (function () {
    function InstitutionName(responseStatusCode, institutionname) {
        this.responseStatusCode = responseStatusCode;
        this.institutionname = institutionname;
    }
    InstitutionName.ctorParameters = function () { return [
        { type: Number },
        { type: String }
    ]; };
    return InstitutionName;
}());

var InstitutionNameList = /** @class */ (function () {
    function InstitutionNameList(responseStatusCode, InstitutionNames) {
        this.responseStatusCode = responseStatusCode;
        this.InstitutionNames = InstitutionNames;
    }
    InstitutionNameList.ctorParameters = function () { return [
        { type: Number },
        { type: Array }
    ]; };
    return InstitutionNameList;
}());

var GetOTPResult = /** @class */ (function () {
    function GetOTPResult(responseStatusCode, Sent, Message) {
        this.responseStatusCode = responseStatusCode;
        this.Sent = Sent;
        this.Message = Message;
    }
    GetOTPResult.ctorParameters = function () { return [
        { type: Number },
        { type: Boolean },
        { type: String }
    ]; };
    return GetOTPResult;
}());

var ValidateOTPResult = /** @class */ (function () {
    function ValidateOTPResult(responseStatusCode, validated, message) {
        this.responseStatusCode = responseStatusCode;
        this.validated = validated;
        this.message = message;
    }
    ValidateOTPResult.ctorParameters = function () { return [
        { type: Number },
        { type: Boolean },
        { type: String }
    ]; };
    return ValidateOTPResult;
}());

var GetNewOTPResult = /** @class */ (function () {
    function GetNewOTPResult(responseStatusCode, Sent, Message) {
        this.responseStatusCode = responseStatusCode;
        this.Sent = Sent;
        this.Message = Message;
    }
    GetNewOTPResult.ctorParameters = function () { return [
        { type: Number },
        { type: Boolean },
        { type: String }
    ]; };
    return GetNewOTPResult;
}());

var IsVerifiedResult = /** @class */ (function () {
    function IsVerifiedResult(responseStatusCode, isverified) {
        this.responseStatusCode = responseStatusCode;
        this.isverified = isverified;
    }
    IsVerifiedResult.ctorParameters = function () { return [
        { type: Number },
        { type: Boolean }
    ]; };
    return IsVerifiedResult;
}());



/***/ }),

/***/ "./app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _auth_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/auth/auth.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/tns-core-modules/http/http.js");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__);







var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this._currentLogin = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentForgotPassword = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentRegister = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentGetUser = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentUpdateUser = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentUpdatePassword = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentInstitutionName = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentInstitutionNameList = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentGetotp = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentValidateotp = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentGetnewotp = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentIsverified = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["setString"])("sm-service-cred-manager-host", "http://10.10.100.147:9952");
        console.log("Initializing app SM... Backend address: " + Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-cred-manager-host"));
    }
    Object.defineProperty(AuthService.prototype, "currentLogin", {
        get: function () {
            return this._currentLogin.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentForgotPassword", {
        get: function () {
            return this._currentForgotPassword.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentRegister", {
        get: function () {
            return this._currentRegister.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentGetUser", {
        get: function () {
            return this._currentGetUser.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUpdateUser", {
        get: function () {
            return this._currentUpdateUser.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUpdatePassword", {
        get: function () {
            return this._currentUpdatePassword.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentInstitutionName", {
        get: function () {
            return this._currentInstitutionName.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentInstitutionNameList", {
        get: function () {
            return this._currentInstitutionNameList.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentGetotp", {
        get: function () {
            return this._currentGetotp.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentValidateotp", {
        get: function () {
            return this._currentValidateotp.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentGetnewotp", {
        get: function () {
            return this._currentGetnewotp.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentIsVerified", {
        get: function () {
            return this._currentIsverified.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.validateCredentials = function (username, password) {
        var _this = this;
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-cred-manager-host") + "/userlogin?username=" + username + "&password=" + password;
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var loginResultErr = new _auth_model__WEBPACK_IMPORTED_MODULE_2__["LoginResult"](500, "Login Unsuccessful", null);
                _this._currentLogin.next(loginResultErr);
            }
            else if (responseCode === 200) {
                var result = response.content.toJSON();
                var loginResult = new _auth_model__WEBPACK_IMPORTED_MODULE_2__["LoginResult"](200, result.message, new _auth_model__WEBPACK_IMPORTED_MODULE_2__["LoginUser"](result.id, result.username, result.institution, result.userloggedin));
                _this._currentLogin.next(loginResult);
            }
            else {
                // TODO : Handle if code other than 200 or 500 has been received
                console.log("in the else");
            }
        }, function (e) {
            // TODO : Handle error
            console.log(e);
        });
    };
    AuthService.prototype.ResetPassword = function (email) {
        var _this = this;
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-cred-manager-host") + "/forgotpassword?email=" + email;
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var forgotpasswordResultErr = new _auth_model__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordResult"](500, "Error", "An internal error has occured.");
                _this._currentForgotPassword.next(forgotpasswordResultErr);
            }
            else if (responseCode === 200) {
                var result = response.content.toJSON();
                var forgotpasswordResult = new _auth_model__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordResult"](200, "Success", result.message);
                _this._currentForgotPassword.next(forgotpasswordResult);
            }
            else {
                var forgotpasswordResult = new _auth_model__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordResult"](responseCode, "Error", response.content.toString());
                _this._currentForgotPassword.next(forgotpasswordResult);
            }
        }, function (e) {
            var forgotpasswordResult = new _auth_model__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordResult"](400, "Error", "An Error has been recieved, please contact support.");
            _this._currentForgotPassword.next(forgotpasswordResult);
        });
    };
    AuthService.prototype.RegisterNewUser = function (username, password, name, surname, email, institutionname) {
        var _this = this;
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-cred-manager-host") + "/user";
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ username: username, password: password, name: name, surname: surname, email: email, institutionname: institutionname }),
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var RegisterResultErr = new _auth_model__WEBPACK_IMPORTED_MODULE_2__["RegisterResult"](500, "false", 'none', '00000000-0000-0000-0000-000000000000', 'An internal error has occured.');
                _this._currentRegister.next(RegisterResultErr);
            }
            else if (responseCode === 200) {
                var result = response.content.toJSON();
                var RegistersuccessResult = new _auth_model__WEBPACK_IMPORTED_MODULE_2__["RegisterResult"](200, result.usercreated, result.username, result.id, result.message);
                _this._currentRegister.next(RegistersuccessResult);
            }
            else {
                var RegistersuccessResult = new _auth_model__WEBPACK_IMPORTED_MODULE_2__["RegisterResult"](responseCode, "false", "none", '00000000-0000-0000-0000-000000000000', response.content.toString());
                _this._currentRegister.next(RegistersuccessResult);
            }
        }, function (e) {
            var RegistersuccessResult = new _auth_model__WEBPACK_IMPORTED_MODULE_2__["RegisterResult"](400, "false", "none", '00000000-0000-0000-0000-000000000000', "An Error has been recieved, please contact support.");
            _this._currentRegister.next(RegistersuccessResult);
        });
        return null;
    };
    AuthService.prototype.GetUser = function (id) {
        var _this = this;
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-cred-manager-host") + "/user?id=" + id;
        console.log(reqUrl);
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var getuserResultErr = new _auth_model__WEBPACK_IMPORTED_MODULE_2__["GetUserResult"](500, "00000000-0000-0000-0000-000000000000", "Unable to retrieve username", "Unable to retrieve name", "Unable to retrieve surname", "Unable to retrieve email address", "Unable to retireve institution", "Unaable to retrieve ads remaining", "Error whilst trying to recieve user details.", false);
                _this._currentGetUser.next(getuserResultErr);
            }
            else if (responseCode === 200) {
                var result = response.content.toJSON();
                var getuserResult = new _auth_model__WEBPACK_IMPORTED_MODULE_2__["GetUserResult"](200, result.id, result.username, result.name, result.surname, result.email, result.institutionname, result.adsremaining, result.message, result.gotuser);
                _this._currentGetUser.next(getuserResult);
            }
            else {
                var getuserResult = new _auth_model__WEBPACK_IMPORTED_MODULE_2__["GetUserResult"](responseCode, '00000000-0000-0000-0000-000000000000', "none", "none", "none", "none", "none", "none", response.content.toString(), false);
                _this._currentGetUser.next(getuserResult);
            }
        }, function (e) {
            var getuserResult = new _auth_model__WEBPACK_IMPORTED_MODULE_2__["GetUserResult"](400, '00000000-0000-0000-0000-000000000000', "none", "none", "none", "none", "none", "none", "An Error has been recieved, please contact support.", false);
            _this._currentGetUser.next(getuserResult);
        });
    };
    AuthService.prototype.UpdateUser = function (id, username, name, surname, email, institutionname) {
        var _this = this;
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-cred-manager-host") + "/user";
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ id: id, username: username, name: name, surname: surname, email: email, institutionname: institutionname }),
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var UpdateResultErr = new _auth_model__WEBPACK_IMPORTED_MODULE_2__["UpdateUserResult"](500, false, 'An error has occured whilst trying to connect.');
                _this._currentUpdateUser.next(UpdateResultErr);
            }
            else if (responseCode === 200) {
                var result = response.content.toJSON();
                var UpdatesuccessResult = new _auth_model__WEBPACK_IMPORTED_MODULE_2__["UpdateUserResult"](200, result.userupdated, result.message);
                _this._currentUpdateUser.next(UpdatesuccessResult);
            }
            else {
                var UpdatesuccessResult = new _auth_model__WEBPACK_IMPORTED_MODULE_2__["UpdateUserResult"](responseCode, false, response.content.toString());
                _this._currentUpdateUser.next(UpdatesuccessResult);
            }
        }, function (e) {
            var UpdatesuccessResult = new _auth_model__WEBPACK_IMPORTED_MODULE_2__["UpdateUserResult"](400, false, "An Error has been recieved, please contact support.");
            _this._currentUpdateUser.next(UpdatesuccessResult);
        });
    };
    AuthService.prototype.UpdatePassword = function (id, currentpassword, password) {
        var _this = this;
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-cred-manager-host") + "/userpassword";
        console.log(reqUrl);
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ id: id, currentpassword: currentpassword, password: password }),
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var UpdateResultErr = new _auth_model__WEBPACK_IMPORTED_MODULE_2__["UpdatePasswordResult"](500, false, 'An error has occured whilst trying to connect.');
                _this._currentUpdatePassword.next(UpdateResultErr);
            }
            else if (responseCode === 200) {
                var result = response.content.toJSON();
                var UpdatesuccessResult = new _auth_model__WEBPACK_IMPORTED_MODULE_2__["UpdatePasswordResult"](200, result.passwordupdated, result.message);
                _this._currentUpdatePassword.next(UpdatesuccessResult);
            }
            else {
                var UpdatesuccessResult = new _auth_model__WEBPACK_IMPORTED_MODULE_2__["UpdatePasswordResult"](responseCode, false, response.content.toString());
                _this._currentUpdatePassword.next(UpdatesuccessResult);
            }
        }, function (e) {
            var UpdatesuccessResult = new _auth_model__WEBPACK_IMPORTED_MODULE_2__["UpdatePasswordResult"](400, false, "An Error has been recieved, please contact support.");
            _this._currentUpdatePassword.next(UpdatesuccessResult);
        });
    };
    AuthService.prototype.initializeInstitutionNameList = function () {
        var _this = this;
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-cred-manager-host") + "/institution";
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var institutionnameErr = new _auth_model__WEBPACK_IMPORTED_MODULE_2__["InstitutionName"](500, null);
            }
            else if (responseCode === 200) {
                var result = response.content.toJSON();
                var institutionnameList_1 = [];
                var JSONInstitutionNameList = result.institutionnames;
                JSONInstitutionNameList.forEach(function (element) {
                    element.responseStatusCode = 200;
                    institutionnameList_1.push(element);
                });
                var toNextList = new _auth_model__WEBPACK_IMPORTED_MODULE_2__["InstitutionNameList"](200, institutionnameList_1);
                _this._currentInstitutionNameList.next(toNextList);
            }
            else {
                console.log("in the else");
            }
        }, function (e) {
            console.log(e);
        });
    };
    AuthService.prototype.GetOtp = function (phonenumber) {
        var _this = this;
        var userid = tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"]("userid");
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-cred-manager-host") + "/otp?userid=" + userid + "&phonenumber=" + phonenumber;
        console.log(reqUrl);
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var getotpResultErr = new _auth_model__WEBPACK_IMPORTED_MODULE_2__["GetOTPResult"](500, false, "An internal error has occured.");
                _this._currentGetotp.next(getotpResultErr);
            }
            else if (responseCode === 200) {
                var result = response.content.toJSON();
                var getotpResult = new _auth_model__WEBPACK_IMPORTED_MODULE_2__["GetOTPResult"](200, result.sent, result.Message);
                _this._currentGetotp.next(getotpResult);
            }
            else {
                var getotpResult = new _auth_model__WEBPACK_IMPORTED_MODULE_2__["GetOTPResult"](responseCode, false, response.content.toString());
                _this._currentGetotp.next(getotpResult);
            }
        }, function (e) {
            var getotpResult = new _auth_model__WEBPACK_IMPORTED_MODULE_2__["GetOTPResult"](400, false, "An Error has been recieved, please contact support.");
            _this._currentGetotp.next(getotpResult);
        });
    };
    AuthService.prototype.GetNewOtp = function () {
        var _this = this;
        var userid = tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"]("userid");
        var phonenumber = tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"]("phonenumber");
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-cred-manager-host") + "/newotp?userid=" + userid + "&phonenumber=" + phonenumber;
        console.log(reqUrl);
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var getnewotpResultErr = new _auth_model__WEBPACK_IMPORTED_MODULE_2__["GetNewOTPResult"](500, false, "An internal error has occured.");
                _this._currentGetnewotp.next(getnewotpResultErr);
            }
            else if (responseCode === 200) {
                var result = response.content.toJSON();
                var getnewotpResult = new _auth_model__WEBPACK_IMPORTED_MODULE_2__["GetNewOTPResult"](200, result.sent, result.Message);
                _this._currentGetnewotp.next(getnewotpResult);
            }
            else {
                var getnewotpResult = new _auth_model__WEBPACK_IMPORTED_MODULE_2__["GetNewOTPResult"](responseCode, false, response.content.toString());
                _this._currentGetnewotp.next(getnewotpResult);
            }
        }, function (e) {
            var getnewotpResult = new _auth_model__WEBPACK_IMPORTED_MODULE_2__["GetNewOTPResult"](400, false, "An Error has been recieved, please contact support.");
            _this._currentGetnewotp.next(getnewotpResult);
        });
    };
    AuthService.prototype.ValidateOtp = function (otp) {
        var _this = this;
        var userid = tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"]("userid");
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-cred-manager-host") + "/otp";
        console.log(reqUrl);
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ userid: userid, otp: otp }),
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var validateotpResultErr = new _auth_model__WEBPACK_IMPORTED_MODULE_2__["ValidateOTPResult"](500, false, "An internal error has occured.");
                _this._currentValidateotp.next(validateotpResultErr);
            }
            else if (responseCode === 200) {
                var result = response.content.toJSON();
                var validateotpResult = new _auth_model__WEBPACK_IMPORTED_MODULE_2__["ValidateOTPResult"](200, result.validated, result.Message);
                _this._currentValidateotp.next(validateotpResult);
            }
            else {
                var validateotpResult = new _auth_model__WEBPACK_IMPORTED_MODULE_2__["ValidateOTPResult"](responseCode, false, response.content.toString());
                _this._currentValidateotp.next(validateotpResult);
            }
        }, function (e) {
            var validateotpResult = new _auth_model__WEBPACK_IMPORTED_MODULE_2__["ValidateOTPResult"](400, false, "An Error has been recieved, please contact support.");
            _this._currentValidateotp.next(validateotpResult);
        });
    };
    AuthService.prototype.VerificationStatus = function () {
        var _this = this;
        var userid = tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"]("userid");
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-cred-manager-host") + "/status?userid=" + userid;
        console.log(reqUrl);
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var isverifiedResultErr = new _auth_model__WEBPACK_IMPORTED_MODULE_2__["IsVerifiedResult"](500, false);
                _this._currentIsverified.next(isverifiedResultErr);
            }
            else if (responseCode === 200) {
                var result = response.content.toJSON();
                var isverifiedResult = new _auth_model__WEBPACK_IMPORTED_MODULE_2__["IsVerifiedResult"](200, result.isverified);
                _this._currentIsverified.next(isverifiedResult);
            }
            else {
                var isverifiedResult = new _auth_model__WEBPACK_IMPORTED_MODULE_2__["IsVerifiedResult"](responseCode, false);
                _this._currentIsverified.next(isverifiedResult);
            }
        }, function (e) {
            var isverifiedResult = new _auth_model__WEBPACK_IMPORTED_MODULE_2__["IsVerifiedResult"](400, false);
            _this._currentIsverified.next(isverifiedResult);
        });
    };
    //This method clears all results
    AuthService.prototype.clearAllObjects = function () {
        this._currentLogin = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    };
    AuthService.prototype.clearUserDetails = function () {
        this._currentUpdateUser = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentUpdatePassword = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    };
    AuthService.prototype.clearLoginObject = function () {
        this._currentLogin = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    };
    AuthService.prototype.clearRegistration = function () {
        this._currentRegister = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._currentForgotPassword = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    };
    AuthService.prototype.clearOTPObject = function () {
        this._currentGetotp = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    };
    AuthService.prototype.clearNewOTPObject = function () {
        this._currentGetnewotp = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    };
    AuthService.prototype.clearValidateOTPObject = function () {
        this._currentValidateotp = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./app/auth/forgotpassword/forgotpassword.component.html":
/***/ (function(module, exports) {

module.exports = "<ns-action-bar [actionBarTitle]=\"'Forgot Password'\"></ns-action-bar>\n<StackLayout>\n<StackLayout class=\"form\" [formGroup]=\"form\">\n    <StackLayout class=\"input-field\">\n        <Label\n            class=\"label\"\n            text=\"Email\"\n            [ngClass]=\"{ invalid: !emailControlIsValid }\"\n        ></Label>\n        <TextField\n            class=\"input\"\n            returnKeyType=\"next\"\n            required\n            [autocorrect]=\"false\"\n            autocapitalizationType=\"none\"\n            formControlName=\"email\"\n            #emailEl\n        ></TextField>        \n        <Label\n            *ngIf=\"!emailControlIsValid\"\n            text=\"Please enter a email address.\"\n        ></Label>\n    </StackLayout>\n    <Button\n        class=\"btn btn-primary btn-rounded-lg\"\n        text=\"Submit\"\n        (tap)=\"onForgotPassword()\"\n    ></Button>\n    <TextField \n        style=\"border-style: hidden ; border-width: 0;border-bottom-style: groove; background-color: #ffffff;\"           \n        #hiddenEl\n    ></TextField>\n</StackLayout>\n<FlexboxLayout justifyContent=\"center\" alignItems=\"center\" *ngIf=\"isLoading\">\n    <ActivityIndicator [busy]=\"isLoading\"></ActivityIndicator>\n</FlexboxLayout>\n</StackLayout>"

/***/ }),

/***/ "./app/auth/forgotpassword/forgotpassword.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/auth/forgotpassword/forgotpassword.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordComponent", function() { return ForgotpasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/auth/auth.service.ts");
/* harmony import */ var nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-fancyalert/fancyalert.js");
/* harmony import */ var nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4__);





var ForgotpasswordComponent = /** @class */ (function () {
    function ForgotpasswordComponent(router, authServ) {
        this.router = router;
        this.authServ = authServ;
        this.emailControlIsValid = true;
        this.isLoading = false;
    }
    ForgotpasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email
                ]
            })
        });
        //subscribe to status changes of form
        this.form.get('email').statusChanges.subscribe(function (status) {
            _this.emailControlIsValid = status === 'VALID';
        });
        //Subscribe to result in auth service
        this.forgotpasswordResultSub = this.authServ.currentForgotPassword.subscribe(function (forgotpasswordresult) {
            if (forgotpasswordresult) {
                _this.isLoading = false;
                _this.forgotpassword = forgotpasswordresult;
                if (_this.forgotpassword.responseStatusCode === 200 && _this.forgotpassword.msg != "A new password cannot be granted at this time as an appropriate email address has not been provided") {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4__["TNSFancyAlert"].showSuccess("Success", _this.forgotpassword.msg, "Dismiss").then(function (t) {
                        _this.authServ.clearRegistration();
                        _this.router.navigate([''], { clearHistory: true });
                    });
                }
                else if (_this.forgotpassword.responseStatusCode === 500) {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4__["TNSFancyAlert"].showError("Connection error", "A Connection cannot be established at this time", "Dismiss");
                }
                else if (_this.forgotpassword.responseStatusCode === 400) {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4__["TNSFancyAlert"].showError("Error", _this.forgotpassword.msg, "Dismiss");
                }
                else {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4__["TNSFancyAlert"].showError("Error", _this.forgotpassword.msg, "Dismiss");
                }
            }
        });
    };
    ForgotpasswordComponent.prototype.ngOnDestroy = function () {
        if (this.forgotpasswordResultSub) {
            //unsubscribe from Result of forgot password
            this.forgotpasswordResultSub.unsubscribe();
        }
    };
    ForgotpasswordComponent.prototype.onForgotPassword = function () {
        var _this = this;
        this.hiddenEl.nativeElement.focus();
        this.emailEl.nativeElement.focus();
        this.emailEl.nativeElement.dismissSoftInput();
        if (!this.form.valid) {
            return;
        }
        var email = this.form.get('email').value;
        this.isLoading = true;
        //Timeout to give loading bar time to appear
        setTimeout(function () {
            //Verify Login Credentials
            _this.authServ.ResetPassword(email);
        }, 100);
    };
    ForgotpasswordComponent.ctorParameters = function () { return [
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('emailEl', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ForgotpasswordComponent.prototype, "emailEl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('hiddenEl', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ForgotpasswordComponent.prototype, "hiddenEl", void 0);
    ForgotpasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-forgotpassword',
            template: __webpack_require__("./app/auth/forgotpassword/forgotpassword.component.html"),
            styles: [__webpack_require__("./app/auth/forgotpassword/forgotpassword.component.scss")]
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ForgotpasswordComponent);
    return ForgotpasswordComponent;
}());



/***/ }),

/***/ "./app/auth/help/help.component.html":
/***/ (function(module, exports) {

module.exports = "<ns-action-bar [actionBarTitle]=\"'Help'\"></ns-action-bar>\n<GridLayout columns=\"*\">\n    <WebView row=\"0\" col=\"0\" loaded=\"onFirstWebViewLoaded\" src=\"https://app.box.com/s/mawp1t2q259wp2i9f8ap9bgth7n44g86\"></WebView>\n</GridLayout>"

/***/ }),

/***/ "./app/auth/help/help.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/auth/help/help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onNavigatingTo", function() { return onNavigatingTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onFirstWebViewLoaded", function() { return onFirstWebViewLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSecondWebViewLoaded", function() { return onSecondWebViewLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_ui_web_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/tns-core-modules/ui/web-view/web-view.js");
/* harmony import */ var tns_core_modules_ui_web_view__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_web_view__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/tns-core-modules/data/observable/observable.js");
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_3__);




function onNavigatingTo(args) {
    var page = args.object;
    var vm = new tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_3__["Observable"]();
    // loading the WebView source while providing a HTML code
    vm.set("firstWebViewSRC", "<!DOCTYPE html><html><head><title>MyTitle</title><meta charset='utf-8' /></head><body><span style='color:#0099CC; text-align: center;'>First WebView</span></body></html>");
    vm.set("resultFirstWebView", "");
    // loading the WebView source from a local file
    vm.set("secondWebViewSRC", "~/ns-ui-widgets-category/web-view/source-load/test.html");
    vm.set("resultSecondWebView", "");
    page.bindingContext = vm;
}
function onFirstWebViewLoaded(webargs) {
    var page = webargs.object.page;
    var vm = page.bindingContext;
    var webview = webargs.object;
    vm.set("resultFirstWebView", "First WebView is still loading...");
    // handling WebView load finish event
    webview.on(tns_core_modules_ui_web_view__WEBPACK_IMPORTED_MODULE_2__["WebView"].loadFinishedEvent, function (args) {
        var message = "";
        if (!args.error) {
            message = "First WebView finished loading of " + args.url;
        }
        else {
            message = "Error loading first WebView " + args.url + " : " + args.error;
        }
        vm.set("resultFirstWebView", message);
        console.log("First WebView message - ", message);
    });
}
function onSecondWebViewLoaded(webargs) {
    var page = webargs.object.page;
    var vm = page.bindingContext;
    var webview = webargs.object;
    vm.set("resultSecondWebView", "Second WebView is still loading...");
    webview.on(tns_core_modules_ui_web_view__WEBPACK_IMPORTED_MODULE_2__["WebView"].loadFinishedEvent, function (args) {
        var message = "";
        if (!args.error) {
            message = "Second WebView finished loading of " + args.url;
        }
        else {
            message = "Error loading second WebView  " + args.url + " : " + args.error;
        }
        vm.set("resultSecondWebView", message);
        console.log("Second WebView message - ", message);
    });
}
var HelpComponent = /** @class */ (function () {
    function HelpComponent(router) {
        this.router = router;
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent.ctorParameters = function () { return [
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"] }
    ]; };
    HelpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-help',
            template: __webpack_require__("./app/auth/help/help.component.html"),
            styles: [__webpack_require__("./app/auth/help/help.component.scss")]
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"]])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./app/auth/institution-listpicker/institution-listpicker.component.html":
/***/ (function(module, exports) {

module.exports = "<StackLayout>\n    <SearchBar hint=\"Search...\"\n        [text]=\"institutionSearch\" (submit)=\"onInstitutionSearchChanged($event)\" >\n    </SearchBar>\n    <ListPicker [items]=\"institutionNameTypesFilter\" selectedIndex=\"0\" (selectedIndexChange)=\"onSelectedIndexInstitutionTypeChanged($event)\"></ListPicker>\n    <Button *ngIf=\"!noFilterResults\" text=\"Confirm\" (tap)=\"onInstitutionTap()\" class=\"btn btn-primary btn-rounded-lg\"></Button>\n</StackLayout>\n"

/***/ }),

/***/ "./app/auth/institution-listpicker/institution-listpicker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstitutionListPickerComponent", function() { return InstitutionListPickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/modal-dialog.js");
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/auth/auth.service.ts");
/* harmony import */ var tns_core_modules_data_observable_array_observable_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/tns-core-modules/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array_observable_array__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array_observable_array__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-fancyalert/fancyalert.js");
/* harmony import */ var nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4__);





var InstitutionListPickerComponent = /** @class */ (function () {
    function InstitutionListPickerComponent(modalParams, authServ) {
        this.modalParams = modalParams;
        this.authServ = authServ;
        this.InstitutionNameType = false;
    }
    InstitutionListPickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authServ.initializeInstitutionNameList();
        this.institutionNameSub = this.authServ.currentInstitutionNameList.subscribe(function (institutionnameListResult) {
            if (institutionnameListResult) {
                if (institutionnameListResult.responseStatusCode === 200) {
                    _this.institutionNameTypes = new tns_core_modules_data_observable_array_observable_array__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"](0);
                    institutionnameListResult.InstitutionNames.forEach(function (t) {
                        _this.institutionNameTypes.push(t.institutionname);
                    });
                    _this.institutionNameTypesFilter = new tns_core_modules_data_observable_array_observable_array__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"](0);
                    _this.institutionNameTypesFilter = _this.institutionNameTypes;
                    _this.InstitutionNameType = true;
                }
                else {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4__["TNSFancyAlert"].showError("Data Retrieval", "Unable to retrieve data.");
                }
            }
        });
    };
    InstitutionListPickerComponent.prototype.onInstitutionSearchChanged = function (args) {
        var searchBar = args.object;
        var newList = this.institutionNameTypes.filter(function (value, index, array) {
            var code = value.toLowerCase();
            if (code.indexOf(searchBar.text.toLowerCase()) > -1) {
                return value;
            }
            else {
                return null;
            }
        });
        if (newList[0] == null) {
            this.noFilterResults = true;
            this.institutionNameTypesFilter = null;
        }
        else {
            this.institutionNameTypesFilter = newList;
            this.noFilterResults = false;
        }
    };
    InstitutionListPickerComponent.prototype.onSelectedIndexInstitutionTypeChanged = function (args) {
        var picker = args.object;
        this.institutionNameType = this.institutionNameTypes.getItem(picker.selectedIndex);
    };
    InstitutionListPickerComponent.prototype.onInstitutionTap = function () {
        this.modalParams.closeCallback(this.institutionNameType);
    };
    InstitutionListPickerComponent.prototype.ngOnDestroy = function () {
    };
    InstitutionListPickerComponent.ctorParameters = function () { return [
        { type: nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1__["ModalDialogParams"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    InstitutionListPickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-institution-listpicker',
            template: __webpack_require__("./app/auth/institution-listpicker/institution-listpicker.component.html")
        }),
        __metadata("design:paramtypes", [nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1__["ModalDialogParams"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], InstitutionListPickerComponent);
    return InstitutionListPickerComponent;
}());



/***/ }),

/***/ "./app/auth/login/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<ns-action-bar [actionBarTitle]=\"'Study Money'\">\n<ActionItem position=\"right\" (tap)=\"onHelp()\" style=\"margin-right: 2%;\" >\n    <Label text=\"&#xf059;\" class=\"Help\" ></Label>\n</ActionItem>\n</ns-action-bar>\n<StackLayout>\n<StackLayout class=\"form\" [formGroup]=\"form\">\n    <Image class=\"img-login-logo\" src=\"res://icon\"></Image>\n    <StackLayout class=\"input-field\">\n        <Label\n            class=\"label\"\n            text=\"Username\"\n            [ngClass]=\"{ invalid: !usernameControlIsValid }\"\n        ></Label>\n        <TextField\n            class=\"input\"\n            returnKeyType=\"next\"\n            required\n            [autocorrect]=\"false\"\n            autocapitalizationType=\"none\"\n            formControlName=\"username\"\n            #usernameEl\n        ></TextField>\n        <Label\n            *ngIf=\"!usernameControlIsValid\"\n            text=\"Please enter a valid username.\"\n        ></Label>\n    </StackLayout>\n    <StackLayout class=\"input-field\">\n        <Label\n            class=\"label\"\n            text=\"Password\"\n            [ngClass]=\"{ invalid: !passwordControlIsValid }\"\n        ></Label>\n        <TextField\n            class=\"input\"\n            returnKeyType=\"done\"\n            required\n            [autocorrect]=\"false\"\n            autocapitalizationType=\"none\"\n            [secure]=\"true\"\n            hint=\"Min 6 Characters\"\n            formControlName=\"password\"\n            #passwordEl\n        ></TextField>\n        <Label\n            *ngIf=\"!passwordControlIsValid\"\n            text=\"Please enter a valid password.\"\n        ></Label>\n    </StackLayout>\n    <FlexboxLayout class=\"flexbox-rememberme\">\n        <Switch checked=\"false\" (checkedChange)=\"onRememberMeChanged($event)\"></Switch>\n        <Label class=\"label-switch\" text=\"Remember Me\"></Label>\n    </FlexboxLayout>\n    <Button\n        class=\"btn btn-primary btn-rounded-lg\"\n        text=\"Login\"\n        (tap)=\"onSignIn()\"\n    ></Button>\n    <Button class=\"btn-flat\" text=\"Register\" (tap)=\"onRegister()\"></Button>\n    <Button class=\"btn-flat\" text=\"Forgot Password\" (tap)=\"onForgotpassword()\"></Button>\n</StackLayout>\n<FlexboxLayout justifyContent=\"center\" alignItems=\"center\" *ngIf=\"isLoading\">\n    <ActivityIndicator [busy]=\"isLoading\"></ActivityIndicator>\n</FlexboxLayout>\n</StackLayout>"

/***/ }),

/***/ "./app/auth/login/auth.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/auth/login/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/auth/auth.service.ts");
/* harmony import */ var _app_advert_advert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/advert/advert.service.ts");
/* harmony import */ var nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/nativescript-fancyalert/fancyalert.js");
/* harmony import */ var nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/tns-core-modules/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_7__);






//Import for config file


var AuthComponent = /** @class */ (function () {
    function AuthComponent(router, authServ, advertServ) {
        this.router = router;
        this.authServ = authServ;
        this.advertServ = advertServ;
        this.usernameControlIsValid = true;
        this.passwordControlIsValid = true;
        this.isLoading = false;
        this.rememberMe = false;
        this.userid = "";
        //set username variable for messaging 
        this.username = "";
        console.log("Constructing Auth Component");
        tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_6__["setBoolean"]("mainAdvertSelling", true);
        tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_6__["setBoolean"]("myAdvertsSelling", true);
        tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_6__["setBoolean"]("isAndroid", tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_7__["isAndroid"]);
        console.log("I am an android device: " + tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_6__["getBoolean"]("isAndroid"));
        //TODO: REmove before committing
        //appSettings.setString("userid", this.login.loginUser.id);
        /* appSettings.setBoolean("rememberme", true);
         appSettings.setBoolean("loggedIn", true);*/
        //Check if remember me was enabled, if so, navigate to appropriate page
        if (tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_6__["getBoolean"]("rememberme") && tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_6__["getBoolean"]("loggedIn")) {
            this.advertServ.UnreadChats();
            this.advertServ.OutstandingRatings();
            this.router.navigate(['/advert/home'], { clearHistory: true });
        }
    }
    Object.defineProperty(AuthComponent.prototype, "android", {
        get: function () {
            return tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_7__["isAndroid"];
        },
        enumerable: true,
        configurable: true
    });
    AuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]
            }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)
                ]
            })
        });
        this.form.get('username').statusChanges.subscribe(function (status) {
            _this.usernameControlIsValid = status === 'VALID';
        });
        this.form.get('password').statusChanges.subscribe(function (status) {
            _this.passwordControlIsValid = status === 'VALID';
        });
        this.loginResultSub = this.authServ.currentLogin.subscribe(function (login) {
            if (login) {
                _this.isLoading = false;
                _this.login = login;
                if (_this.login.responseStatusCode === 200) {
                    //Check if login details were correct
                    if (_this.login.loginUser.id != "") {
                        //Save user details and rememberme info
                        tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_6__["setString"]("userid", _this.login.loginUser.id);
                        tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_6__["setString"]("defaultInstitution", _this.login.loginUser.defaultInstitution);
                        //Save username for messaging purposes
                        tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_6__["setString"]("username", _this.login.loginUser.username);
                        tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_6__["setBoolean"]("rememberme", _this.rememberMe);
                        tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_6__["setBoolean"]("loggedIn", true);
                        _this.authServ.clearAllObjects();
                        _this.advertServ.UnreadChats();
                        _this.advertServ.OutstandingRatings();
                        _this.router.navigate(['/advert/home'], { clearHistory: true });
                    }
                    else {
                        nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_5__["TNSFancyAlert"].showError("Login Error", "Incorrect username and password combination.", "Dismiss");
                    }
                }
                else {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_5__["TNSFancyAlert"].showError("Login Error", _this.login.loginAttemptMessage, "Dismiss");
                }
            }
        });
    };
    AuthComponent.prototype.ngOnDestroy = function () {
        if (this.loginResultSub) {
            this.loginResultSub.unsubscribe();
        }
    };
    AuthComponent.prototype.onSignIn = function () {
        var _this = this;
        this.usernameEl.nativeElement.focus();
        this.passwordEl.nativeElement.focus();
        this.passwordEl.nativeElement.dismissSoftInput();
        if (!this.form.valid) {
            return;
        }
        var username = this.form.get('username').value;
        var password = this.form.get('password').value;
        this.isLoading = true;
        //Timeout to give loading bar time to appear
        setTimeout(function () {
            //Verify Login Credentials
            _this.authServ.validateCredentials(username, password);
        }, 100);
    };
    AuthComponent.prototype.onRegister = function () {
        this.router.navigate(['/register']);
    };
    AuthComponent.prototype.onForgotpassword = function () {
        this.router.navigate(['/forgotpassword']);
    };
    AuthComponent.prototype.onHelp = function () {
        this.router.navigate(['/help']);
    };
    AuthComponent.prototype.onRememberMeChanged = function (args) {
        var mySwitch = args.object;
        this.rememberMe = mySwitch.checked;
    };
    AuthComponent.ctorParameters = function () { return [
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _app_advert_advert_service__WEBPACK_IMPORTED_MODULE_4__["AdvertService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('passwordEl', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AuthComponent.prototype, "passwordEl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('usernameEl', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AuthComponent.prototype, "usernameEl", void 0);
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-auth',
            template: __webpack_require__("./app/auth/login/auth.component.html"),
            styles: [__webpack_require__("./app/auth/login/auth.component.scss")]
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _app_advert_advert_service__WEBPACK_IMPORTED_MODULE_4__["AdvertService"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./app/auth/newpassword/newpassword.component.html":
/***/ (function(module, exports) {

module.exports = "<ns-action-bar [actionBarTitle]=\"'Update password'\"></ns-action-bar>\n<StackLayout class=\"form\" [formGroup]=\"form\">\n    <StackLayout class=\"input-field\">\n        <Label\n            class=\"label\"\n            text=\"Current Password\"\n            [ngClass]=\"{ invalid: !currentpasswordControlIsValid }\"\n        ></Label>\n        <TextField\n            class=\"input\"\n            returnKeyType=\"done\"\n            required\n            [autocorrect]=\"false\"\n            autocapitalizationType=\"none\"\n            [secure]=\"true\"\n            hint=\"Min 6 Characters\"\n            formControlName=\"currentpassword\"\n            #currentpasswordEl\n        ></TextField>\n        <Label\n            *ngIf=\"!currentpasswordControlIsValid\"\n            text=\"Please enter a valid current password.\"\n        ></Label>\n    </StackLayout>\n    <StackLayout class=\"input-field\">\n            <Label\n                class=\"label\"\n                text=\"New Password\"\n                [ngClass]=\"{ invalid: !password1ControlIsValid }\"\n            ></Label>\n            <TextField\n                class=\"input\"\n                returnKeyType=\"done\"\n                required\n                [autocorrect]=\"false\"\n                autocapitalizationType=\"none\"\n                [secure]=\"true\"\n                hint=\"Min 6 Characters\"\n                formControlName=\"password1\"\n                #password1El\n            ></TextField>\n            <Label\n                *ngIf=\"!password1ControlIsValid\"\n                text=\"Please enter a valid password.\"\n            ></Label>\n        </StackLayout>\n        <StackLayout class=\"input-field\">\n            <Label\n                class=\"label\"\n                text=\"Confirm New Password\"\n                [ngClass]=\"{ invalid: !passwordControlIsValid }\"\n            ></Label>\n            <TextField\n                class=\"input\"\n                returnKeyType=\"done\"\n                required\n                [autocorrect]=\"false\"\n                autocapitalizationType=\"none\"\n                [secure]=\"true\"\n                hint=\"Min 6 Characters\"\n                formControlName=\"password\"\n                #passwordEl\n            ></TextField>\n            <Label\n                *ngIf=\"!passwordControlIsValid\"\n                text=\"Please enter a valid password.\"\n            ></Label>\n        </StackLayout>\n        <Label text=\"&#xf06e;\" class=\"PasswordLabel\" (tap)=\"toggleShow()\"></Label>\n     <Button\n        class=\"btn btn-primary btn-rounded-lg\"\n        text=\"Update Password\"\n        (tap)=\"onUpdatePassword()\"\n    ></Button>\n</StackLayout>\n<FlexboxLayout justifyContent=\"center\" alignItems=\"center\" *ngIf=\"isLoading\">\n    <ActivityIndicator [busy]=\"isLoading\"></ActivityIndicator>\n</FlexboxLayout>\n"

/***/ }),

/***/ "./app/auth/newpassword/newpassword.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/auth/newpassword/newpassword.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewpasswordComponent", function() { return NewpasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/auth/auth.service.ts");
/* harmony import */ var nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-fancyalert/fancyalert.js");
/* harmony import */ var nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__);





//Import for config file

var NewpasswordComponent = /** @class */ (function () {
    function NewpasswordComponent(authServ, router) {
        this.authServ = authServ;
        this.router = router;
        //set user variable
        this.userid = "";
        this.currentpasswordControlIsValid = true;
        this.password1ControlIsValid = true;
        this.passwordControlIsValid = true;
        this.isLoading = false;
    }
    NewpasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        //form controls
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            currentpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]
            }),
            password1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]
            }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]
            })
        });
        this.form.get('currentpassword').statusChanges.subscribe(function (status) {
            _this.currentpasswordControlIsValid = status === 'VALID';
        });
        this.form.get('password1').statusChanges.subscribe(function (status) {
            _this.password1ControlIsValid = status === 'VALID';
        });
        this.form.get('password').statusChanges.subscribe(function (status) {
            _this.passwordControlIsValid = status === 'VALID';
        });
        this.updateResultSub = this.authServ.currentUpdatePassword.subscribe(function (updateresult) {
            if (updateresult) {
                _this.isLoading = false;
                _this.update = updateresult;
                if (_this.update.responseStatusCode === 200 && _this.update.PasswordUpdated === true) {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4__["TNSFancyAlert"].showSuccess("Update Success", _this.update.Message, "Dismiss").then(function (t) {
                        _this.authServ.clearUserDetails();
                        _this.router.navigate(['/advert/home'], {
                            animated: true,
                            transition: {
                                name: "slide",
                                duration: 200,
                                curve: "ease"
                            }
                        });
                    });
                }
                else if (_this.update.responseStatusCode === 200 && _this.update.PasswordUpdated === false) {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4__["TNSFancyAlert"].showError("Password Error", _this.update.Message, "Dismiss");
                }
                else if (_this.update.responseStatusCode === 500) {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4__["TNSFancyAlert"].showError("Connection error", "A Connection cannot be established at this time", "Dismiss");
                    _this.authServ.clearUserDetails();
                }
                else {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4__["TNSFancyAlert"].showError("Connection error", _this.update.Message, "Dismiss");
                    _this.authServ.clearUserDetails();
                }
            }
        });
        //find User from app settings
        this.userFound = false;
        var id = tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"]("userid");
        //subscribe to Get User result
        this.getuserResultSub = this.authServ.currentGetUser.subscribe(function (userResult) {
            if (userResult) {
                _this.getuser = userResult;
                if (_this.getuser.responseStatusCode === 200) {
                    _this.userFound = true;
                }
                else {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4__["TNSFancyAlert"].showError("Data Retrieval", "Unable to retrieve data.");
                }
            }
        });
        //Send User ID from app settings
        this.authServ.GetUser(id);
    };
    NewpasswordComponent.prototype.toggleShow = function () {
        this.password1El.nativeElement.secure = !this.password1El.nativeElement.secure;
    };
    NewpasswordComponent.prototype.ngOnDestroy = function () {
        if (this.getuserResultSub && this.updateResultSub) {
            this.getuserResultSub.unsubscribe();
            this.updateResultSub.unsubscribe();
        }
    };
    NewpasswordComponent.prototype.onUpdatePassword = function () {
        var _this = this;
        this.currentpasswordEl.nativeElement.focus();
        this.password1El.nativeElement.focus();
        this.passwordEl.nativeElement.focus();
        this.passwordEl.nativeElement.dismissSoftInput();
        if (!this.form.valid) {
            return;
        }
        var id = tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"]("userid");
        var currentpassword = this.form.get('currentpassword').value;
        var password = this.form.get('password').value;
        if (this.form.get('password1').value != this.form.get('password').value) {
            nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4__["TNSFancyAlert"].showError("Error", "Passwords do not match!", "Dismiss");
        }
        else {
            this.isLoading = true;
            //Timeout to give loading bar time to appear
            setTimeout(function () {
                //Update Password
                _this.authServ.UpdatePassword(id, currentpassword, password);
            }, 100);
        }
    };
    NewpasswordComponent.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('currentpasswordEl', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], NewpasswordComponent.prototype, "currentpasswordEl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('password1El', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], NewpasswordComponent.prototype, "password1El", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('passwordEl', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], NewpasswordComponent.prototype, "passwordEl", void 0);
    NewpasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-newpassword',
            template: __webpack_require__("./app/auth/newpassword/newpassword.component.html"),
            styles: [__webpack_require__("./app/auth/newpassword/newpassword.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"]])
    ], NewpasswordComponent);
    return NewpasswordComponent;
}());



/***/ }),

/***/ "./app/auth/otp/otp.component.html":
/***/ (function(module, exports) {

module.exports = "\n<StackLayout class=\"form\" [formGroup]=\"form\">\n    <StackLayout class=\"input-field\">\n        <Label\n            class=\"label\"\n            text=\"Phone number with country code\"\n            [ngClass]=\"{ invalid: !phonenumberControlIsValid }\"\n        ></Label>\n        <TextField\n            class=\"input\"\n            returnKeyType=\"done\"\n            required\n            [autocorrect]=\"false\"\n            autocapitalizationType=\"none\"\n            formControlName=\"phonenumber\"\n            #phonenumberEl\n            keyboardType=\"number\"\n            hint=\"eg. 278236541247\"\n        ></TextField>        \n        <Label\n            *ngIf=\"!phonenumberControlIsValid\"\n            text=\"Please enter a phonenumber.\"\n        ></Label>\n    </StackLayout>\n    <Button\n        class=\"btn btn-primary btn-rounded-lg\"\n        text=\"Get OTP\"\n        (tap)=\"onRequestOTP()\"\n    ></Button>\n    <TextField \n        style=\"border-style: hidden ; border-width: 0;border-bottom-style: groove; background-color: #ffffff;\"           \n        #hiddenEl\n    ></TextField>\n</StackLayout>\n<FlexboxLayout justifyContent=\"center\" alignItems=\"center\" *ngIf=\"isLoading\">\n    <ActivityIndicator [busy]=\"isLoading\"></ActivityIndicator>\n</FlexboxLayout>"

/***/ }),

/***/ "./app/auth/otp/otp.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/auth/otp/otp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpComponent", function() { return OtpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/auth/auth.service.ts");
/* harmony import */ var nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-fancyalert/fancyalert.js");
/* harmony import */ var nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/nativescript-angular/modal-dialog.js");
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_6__);







var OtpComponent = /** @class */ (function () {
    function OtpComponent(modalParams, router, authServ, modalDialog, vcRef) {
        this.modalParams = modalParams;
        this.router = router;
        this.authServ = authServ;
        this.modalDialog = modalDialog;
        this.vcRef = vcRef;
        this.phonenumberControlIsValid = true;
        this.otpControlIsValid = true;
        this.isLoading = false;
    }
    OtpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            phonenumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]
            }),
        });
        //subscribe to status changes of form
        this.form.get('phonenumber').statusChanges.subscribe(function (status) {
            _this.phonenumberControlIsValid = status === 'VALID';
        });
        //Subscribe to result in auth service
        this.getotpResultSub = this.authServ.currentGetotp.subscribe(function (getotpresult) {
            if (getotpresult) {
                _this.isLoading = false;
                _this.getotp = getotpresult;
                if (_this.getotp.responseStatusCode === 200 && _this.getotp.Sent == true) {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4__["TNSFancyAlert"].showSuccess("Success", _this.getotp.Message, "Dismiss").then(function (t) {
                        _this.authServ.clearOTPObject();
                        _this.modalParams.closeCallback(false);
                    });
                }
                else if (_this.getotp.responseStatusCode === 200 && _this.getotp.Sent == false) {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4__["TNSFancyAlert"].showError("Error", _this.getotp.Message, "Dismiss");
                }
                else if (_this.getotp.responseStatusCode === 500) {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4__["TNSFancyAlert"].showError("Connection error", "A Connection cannot be established at this time", "Dismiss");
                }
                else if (_this.getotp.responseStatusCode === 400) {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4__["TNSFancyAlert"].showError("Error", _this.getotp.Message, "Dismiss");
                }
                else {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4__["TNSFancyAlert"].showError("Error", _this.getotp.Message, "Dismiss");
                }
            }
        });
    };
    OtpComponent.prototype.onRequestOTP = function () {
        this.hiddenEl.nativeElement.focus();
        this.phonenumberEl.nativeElement.focus();
        this.phonenumberEl.nativeElement.dismissSoftInput();
        var number = this.form.get('phonenumber').value;
        tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_6__["setString"]("phonenumber", number);
        this.isLoading = true;
        this.authServ.GetOtp(number);
    };
    OtpComponent.prototype.ngOnDestroy = function () {
        if (this.getotpResultSub) {
            //unsubscribe from Result of forgot password
            this.getotpResultSub.unsubscribe();
        }
        if (this.validateotpResultSub) {
            //unsubscribe from Result of forgot password
            this.validateotpResultSub.unsubscribe();
        }
    };
    OtpComponent.ctorParameters = function () { return [
        { type: nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_5__["ModalDialogParams"] },
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_5__["ModalDialogService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('phonenumberEl', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], OtpComponent.prototype, "phonenumberEl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('hiddenEl', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], OtpComponent.prototype, "hiddenEl", void 0);
    OtpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-otp',
            template: __webpack_require__("./app/auth/otp/otp.component.html"),
            styles: [__webpack_require__("./app/auth/otp/otp.component.scss")]
        }),
        __metadata("design:paramtypes", [nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_5__["ModalDialogParams"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_5__["ModalDialogService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], OtpComponent);
    return OtpComponent;
}());



/***/ }),

/***/ "./app/auth/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<ns-action-bar [actionBarTitle]=\"'Register'\"></ns-action-bar>\n<StackLayout class=\"form\" [formGroup]=\"form\">\n    <StackLayout class=\"input-field\">\n        <Label\n            class=\"label\"\n            text=\"Username\"\n            [ngClass]=\"{ invalid: !usernameControlIsValid }\"\n        ></Label>\n        <TextField\n            class=\"input\"\n            returnKeyType=\"next\"\n            required\n            [autocorrect]=\"false\"\n            autocapitalizationType=\"none\"\n            formControlName=\"username\"\n            #usernameEl\n        ></TextField>\n        <Label\n            *ngIf=\"!usernameControlIsValid\"\n            text=\"Please enter a valid username.\"\n        ></Label>\n    </StackLayout>\n    <StackLayout class=\"input-field\">\n        <Label\n            class=\"label\"\n            text=\"Password\"\n            [ngClass]=\"{ invalid: !passwordControlIsValid }\"\n        ></Label>\n        <TextField\n            class=\"input\"\n            returnKeyType=\"done\"\n            required\n            [autocorrect]=\"false\"\n            autocapitalizationType=\"none\"\n            [secure]=\"true\"\n            hint=\"Min 6 Characters\"\n            formControlName=\"password\"\n            #passwordEl\n        ></TextField>\n        <Label\n            *ngIf=\"!passwordControlIsValid\"\n            text=\"Please enter a valid password.\"\n        ></Label>\n    </StackLayout>\n    <StackLayout class=\"input-field\">\n        <Label\n            class=\"label\"\n            text=\"Name\"\n            [ngClass]=\"{ invalid: !nameControlIsValid }\"\n        ></Label>\n        <TextField\n            class=\"input\"\n            returnKeyType=\"next\"\n            required\n            [autocorrect]=\"false\"\n            autocapitalizationType=\"none\"\n            formControlName=\"name\"\n            #nameEl\n        ></TextField>\n        <Label\n            *ngIf=\"!usernameControlIsValid\"\n            text=\"Please enter a valid username.\"\n        ></Label>\n    </StackLayout>\n    <StackLayout class=\"input-field\">\n        <Label\n            class=\"label\"\n            text=\"Surname\"\n            [ngClass]=\"{ invalid: !surnameControlIsValid }\"\n        ></Label>\n        <TextField\n            class=\"input\"\n            returnKeyType=\"next\"\n            required\n            [autocorrect]=\"false\"\n            autocapitalizationType=\"none\"\n            formControlName=\"surname\"\n            #surnameEl\n        ></TextField>\n        <Label\n            *ngIf=\"!surnameControlIsValid\"\n            text=\"Please enter a valid surname.\"\n        ></Label>\n    </StackLayout>\n    <StackLayout class=\"input-field\">\n        <Label\n            class=\"label\"\n            text=\"Email\"\n            [ngClass]=\"{ invalid: !emailControlIsValid }\"\n        ></Label>\n        <TextField\n            class=\"input\"\n            returnKeyType=\"done\"\n            required\n            [autocorrect]=\"false\"\n            autocapitalizationType=\"none\"\n            formControlName=\"email\"\n            #emailEl\n        ></TextField>\n        <Label\n            *ngIf=\"!emailControlIsValid\"\n            text=\"Please enter a valid email address.\"\n        ></Label>\n    </StackLayout>\n    <StackLayout class=\"input-field\">\n        <Label\n        class=\"label\"\n        text=\"Institution Name\"\n        (tap)=\"onInstitutionNameTap()\"\n        ></Label>\n        <TextField\n        editable= \"false\" \n        [text]=\"institutionNameBind\" \n        (tap)=\"onInstitutionNameTap()\"\n        class=\"input\"\n        returnKeyType=\"done\"\n        required\n        [autocorrect]=\"false\"\n        autocapitalizationType=\"none\"\n        formControlName=\"institutionname\"\n        #institutionnameEl\n        ></TextField>\n    </StackLayout>\n\n    <Button\n        class=\"btn btn-primary btn-rounded-lg\"\n        text=\"Register\"\n        (tap)=\"onRegisterUser()\"\n    ></Button>\n\n    <FlexboxLayout justifyContent=\"center\" alignItems=\"center\" *ngIf=\"isLoading\">\n        <ActivityIndicator [busy]=\"isLoading\"></ActivityIndicator>\n    </FlexboxLayout>\n</StackLayout>\n"

/***/ }),

/***/ "./app/auth/register/register.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/auth/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/auth/auth.service.ts");
/* harmony import */ var nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-fancyalert/fancyalert.js");
/* harmony import */ var nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _institution_listpicker_institution_listpicker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/auth/institution-listpicker/institution-listpicker.component.ts");
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/nativescript-angular/modal-dialog.js");
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_6__);







var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, authServ, modalDialog, vcRef) {
        this.router = router;
        this.authServ = authServ;
        this.modalDialog = modalDialog;
        this.vcRef = vcRef;
        this.usernameControlIsValid = true;
        this.passwordControlIsValid = true;
        this.nameControlIsValid = true;
        this.surnameControlIsValid = true;
        this.emailControlIsValid = true;
        this.isLoading = false;
        this.institutionNameBind = "";
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]
            }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)
                ]
            }),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]
            }),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]
            }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]
            }),
            institutionname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]
            })
        });
        this.form.get('username').statusChanges.subscribe(function (status) {
            _this.usernameControlIsValid = status === 'VALID';
        });
        this.form.get('password').statusChanges.subscribe(function (status) {
            _this.passwordControlIsValid = status === 'VALID';
        });
        this.form.get('name').statusChanges.subscribe(function (status) {
            _this.nameControlIsValid = status === 'VALID';
        });
        this.form.get('surname').statusChanges.subscribe(function (status) {
            _this.surnameControlIsValid = status === 'VALID';
        });
        this.form.get('email').statusChanges.subscribe(function (status) {
            _this.emailControlIsValid = status === 'VALID';
        });
        this.registerResultSub = this.authServ.currentRegister.subscribe(function (registerresult) {
            if (registerresult) {
                _this.isLoading = false;
                _this.register = registerresult;
                if (_this.register.responseStatusCode === 200 && _this.register.UserCreated === "true") {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4__["TNSFancyAlert"].showSuccess("Registration success", "You have sucessfully registered.", "Dismiss").then(function (t) {
                        _this.authServ.clearRegistration();
                        _this.router.navigate([''], { clearHistory: true });
                    });
                }
                else if (_this.register.responseStatusCode === 500) {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4__["TNSFancyAlert"].showError("Connection error", _this.register.Message, "Dismiss");
                    _this.authServ.clearRegistration();
                }
                else if (_this.register.responseStatusCode === 400) {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4__["TNSFancyAlert"].showError("Error", _this.register.Message, "Dismiss");
                    _this.authServ.clearRegistration();
                }
                else {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4__["TNSFancyAlert"].showError("Error", _this.register.Message, "Dismiss");
                    _this.authServ.clearRegistration();
                }
            }
        });
    };
    RegisterComponent.prototype.onInstitutionNameTap = function () {
        var _this = this;
        this.modalDialog.showModal(_institution_listpicker_institution_listpicker_component__WEBPACK_IMPORTED_MODULE_5__["InstitutionListPickerComponent"], { viewContainerRef: this.vcRef,
            animated: true,
            fullscreen: true,
            context: { string: "ModuleCodeType" } }).then(function (selection) {
            _this.institutionNameBind = selection;
        });
    };
    RegisterComponent.prototype.onRegisterUser = function () {
        var _this = this;
        this.usernameEl.nativeElement.focus();
        this.passwordEl.nativeElement.focus();
        this.nameEl.nativeElement.focus();
        this.surnameEl.nativeElement.focus();
        this.emailEl.nativeElement.focus();
        this.institutionnameEl.nativeElement.focus();
        this.institutionnameEl.nativeElement.dismissSoftInput();
        if (!this.form.valid) {
            return;
        }
        var username = this.form.get('username').value;
        var password = this.form.get('password').value;
        var name = this.form.get('name').value;
        var surname = this.form.get('surname').value;
        var email = this.form.get('email').value;
        //institutions
        var institutionname = this.form.get('institutionname').value;
        this.isLoading = true;
        //Timeout to give loading bar time to appear
        setTimeout(function () {
            //Verify register Credentials
            _this.authServ.RegisterNewUser(username, password, name, surname, email, institutionname);
        }, 100);
    };
    RegisterComponent.prototype.ngOnDestroy = function () {
        if (this.registerResultSub) {
            this.registerResultSub.unsubscribe();
        }
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_6__["ModalDialogService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('passwordEl', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RegisterComponent.prototype, "passwordEl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('usernameEl', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RegisterComponent.prototype, "usernameEl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nameEl', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RegisterComponent.prototype, "nameEl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('surnameEl', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RegisterComponent.prototype, "surnameEl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('emailEl', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RegisterComponent.prototype, "emailEl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('institutionnameEl', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RegisterComponent.prototype, "institutionnameEl", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-register',
            template: __webpack_require__("./app/auth/register/register.component.html"),
            styles: [__webpack_require__("./app/auth/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_6__["ModalDialogService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./app/auth/updateuser/updateuser.component.html":
/***/ (function(module, exports) {

module.exports = "<ns-action-bar [actionBarTitle]=\"'Update information'\"></ns-action-bar>\n<ScrollView>\n<StackLayout class=\"form\" [formGroup]=\"form\">\n    <StackLayout class=\"input-field\">\n        <Label\n            class=\"label\"\n            text=\"Username\"\n            [ngClass]=\"{ invalid: !usernameControlIsValid }\"\n        ></Label>\n        <TextField\n            class=\"input\"\n            returnKeyType=\"next\"\n            required\n            [autocorrect]=\"false\"\n            autocapitalizationType=\"none\"\n            formControlName=\"username\"\n            [text]=\"getuser.Username\" *ngIf=\"userFound\"\n            #usernameEl\n        ></TextField>\n        <Label\n            *ngIf=\"!usernameControlIsValid\"\n            text=\"Please enter a valid username.\"\n        ></Label>\n    </StackLayout>\n    <StackLayout class=\"input-field\">\n        <Label\n            class=\"label\"\n            text=\"Name\"\n            [ngClass]=\"{ invalid: !nameControlIsValid }\"\n        ></Label>\n        <TextField\n            class=\"input\"\n            returnKeyType=\"next\"\n            required\n            [autocorrect]=\"false\"\n            autocapitalizationType=\"none\"\n            formControlName=\"name\"\n            [text]=\"getuser.Name\" *ngIf=\"userFound\"\n            #nameEl\n        ></TextField>\n        <Label\n            *ngIf=\"!usernameControlIsValid\"\n            text=\"Please enter a valid username.\"\n        ></Label>\n    </StackLayout>\n    <StackLayout class=\"input-field\">\n        <Label\n            class=\"label\"\n            text=\"Surname\"\n            [ngClass]=\"{ invalid: !surnameControlIsValid }\"\n        ></Label>\n        <TextField\n            class=\"input\"\n            returnKeyType=\"next\"\n            required\n            [autocorrect]=\"false\"\n            autocapitalizationType=\"none\"\n            formControlName=\"surname\"\n            [text]=\"getuser.Surname\" *ngIf=\"userFound\"\n            #surnameEl\n        ></TextField>\n        <Label\n            *ngIf=\"!surnameControlIsValid\"\n            text=\"Please enter a valid surname.\"\n        ></Label>\n    </StackLayout>\n    <StackLayout class=\"input-field\">\n        <Label\n            class=\"label\"\n            text=\"Email\"\n            [ngClass]=\"{ invalid: !emailControlIsValid }\"\n        ></Label>\n        <TextField\n            class=\"input\"\n            returnKeyType=\"next\"\n            required\n            [autocorrect]=\"false\"\n            autocapitalizationType=\"none\"\n            formControlName=\"email\"\n            [text]=\"getuser.Email\" *ngIf=\"userFound\"\n            #emailEl\n        ></TextField>\n        <Label\n            *ngIf=\"!emailControlIsValid\"\n            text=\"Please enter a valid email address.\"\n        ></Label>\n    </StackLayout>\n    <StackLayout class=\"input-field\">\n        <Label\n        class=\"label\"\n        text=\"Institution Name\"\n        (tap)=\"onInstitutionNameTap()\"\n        ></Label>\n        <TextField\n        editable= \"false\" \n        [text]=\"institutionNameBind\" *ngIf=\"userFound\"\n        [text]=\"getuser.Institutionname\"\n        (tap)=\"onInstitutionNameTap()\"\n        class=\"input\"\n        returnKeyType=\"done\"\n        required\n        [autocorrect]=\"false\"\n        autocapitalizationType=\"none\"\n        formControlName=\"institutionname\"\n        #institutionnameEl\n        ></TextField>\n    </StackLayout>\n    <StackLayout class=\"input-field\">\n        <Label\n            class=\"label\"\n            text=\"Advertisements remaining\"\n            ></Label>\n        <TextField\n        editable= \"false\" \n        [text]=\"getuser.AdsRemaining\" *ngIf=\"userFound\"\n            class=\"input\"\n            returnKeyType=\"next\"\n            required\n            [autocorrect]=\"false\"\n            autocapitalizationType=\"none\"\n        ></TextField>\n    </StackLayout>\n    <Button\n        class=\"btn btn-primary btn-rounded-lg\"\n        text=\"Update Details\"\n        (tap)=\"onUpdateUser()\"\n    ></Button>\n    <Button class=\"btn-flat\" *ngIf=\"isVerified\" text=\"Validate Account\" (tap)=\"onOTP()\"></Button>\n    <Button class=\"btn-flat\" text=\"Change Password\" (tap)=\"onPassword()\"></Button>\n</StackLayout>\n</ScrollView>\n<FlexboxLayout justifyContent=\"center\" alignItems=\"center\" *ngIf=\"isLoading\">\n    <ActivityIndicator [busy]=\"isLoading\"></ActivityIndicator>\n</FlexboxLayout>\n\n"

/***/ }),

/***/ "./app/auth/updateuser/updateuser.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/auth/updateuser/updateuser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateuserComponent", function() { return UpdateuserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/auth/auth.service.ts");
/* harmony import */ var _institution_listpicker_institution_listpicker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/auth/institution-listpicker/institution-listpicker.component.ts");
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/nativescript-angular/modal-dialog.js");
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/nativescript-fancyalert/fancyalert.js");
/* harmony import */ var nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _otp_otp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/auth/otp/otp.component.ts");
/* harmony import */ var _validate_validate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./app/auth/validate/validate.component.ts");
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_9__);









//Import for config file

var UpdateuserComponent = /** @class */ (function () {
    function UpdateuserComponent(authServ, router, modalDialog, vcRef) {
        this.authServ = authServ;
        this.router = router;
        this.modalDialog = modalDialog;
        this.vcRef = vcRef;
        //set user variable
        this.userid = "";
        this.idControlIsValid = true;
        this.usernameControlIsValid = true;
        this.nameControlIsValid = true;
        this.surnameControlIsValid = true;
        this.emailControlIsValid = true;
        this.isLoading = false;
    }
    UpdateuserComponent.prototype.ngOnInit = function () {
        var _this = this;
        //form controls
        var id = tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_9__["getString"]("userid");
        this.authServ.GetUser(id);
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]
            }),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]
            }),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]
            }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]
            }),
            institutionname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]
            })
        });
        this.form.get('username').statusChanges.subscribe(function (status) {
            _this.usernameControlIsValid = status === 'VALID';
        });
        this.form.get('name').statusChanges.subscribe(function (status) {
            _this.nameControlIsValid = status === 'VALID';
        });
        this.form.get('surname').statusChanges.subscribe(function (status) {
            _this.surnameControlIsValid = status === 'VALID';
        });
        this.form.get('email').statusChanges.subscribe(function (status) {
            _this.emailControlIsValid = status === 'VALID';
        });
        //find User from app settings
        this.userFound = false;
        this.isVerified = false;
        //subscribe to Get User result
        this.getuserResultSub = this.authServ.currentGetUser.subscribe(function (userResult) {
            if (userResult) {
                _this.getuser = userResult;
                if (_this.getuser.responseStatusCode === 200) {
                    _this.userFound = true;
                }
                else {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_6__["TNSFancyAlert"].showError("Data Retrieval", "Unable to retrieve data.");
                }
            }
        });
        this.authServ.VerificationStatus();
        this.isverifiedResultSub = this.authServ.currentIsVerified.subscribe(function (isverifiedResult) {
            if (isverifiedResult) {
                _this.isverified = isverifiedResult;
                if (_this.isverified.responseStatusCode === 200 && _this.isverified.isverified == true) {
                    _this.isVerified = false;
                }
                else {
                    _this.isVerified = true;
                }
            }
        });
        //Send User ID from app settings
    };
    UpdateuserComponent.prototype.onInstitutionNameTap = function () {
        var _this = this;
        this.modalDialog.showModal(_institution_listpicker_institution_listpicker_component__WEBPACK_IMPORTED_MODULE_4__["InstitutionListPickerComponent"], { viewContainerRef: this.vcRef,
            animated: true,
            fullscreen: true,
            context: { string: "ModuleCodeType" } }).then(function (selection) {
            _this.institutionNameBind = selection;
        });
    };
    UpdateuserComponent.prototype.onPassword = function () {
        this.router.navigate(['/newpassword'], {
            animated: true,
            transition: {
                name: "slide",
                duration: 200,
                curve: "ease"
            }
        });
    };
    UpdateuserComponent.prototype.onOTP = function () {
        var _this = this;
        this.modalDialog.showModal(_otp_otp_component__WEBPACK_IMPORTED_MODULE_7__["OtpComponent"], { viewContainerRef: this.vcRef,
            animated: true,
            fullscreen: false,
            context: { string: "OTP" } }).then(function (selection) {
            _this.modalDialog.showModal(_validate_validate_component__WEBPACK_IMPORTED_MODULE_8__["ValidateComponent"], { viewContainerRef: _this.vcRef,
                animated: true,
                fullscreen: false,
                context: { string: "OTP" } }).then(function (selection) {
            });
        });
    };
    UpdateuserComponent.prototype.onUpdateUser = function () {
        var _this = this;
        this.usernameEl.nativeElement.focus();
        this.nameEl.nativeElement.focus();
        this.surnameEl.nativeElement.focus();
        this.emailEl.nativeElement.focus();
        this.institutionnameEl.nativeElement.focus();
        this.institutionnameEl.nativeElement.dismissSoftInput();
        if (!this.form.valid) {
            return;
        }
        var id = tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_9__["getString"]("userid");
        var username = this.form.get('username').value;
        var name = this.form.get('name').value;
        var surname = this.form.get('surname').value;
        var email = this.form.get('email').value;
        //institutions
        var institutionname = this.form.get('institutionname').value;
        this.isLoading = true;
        //Timeout to give loading bar time to appear
        setTimeout(function () {
            //Verify register Credentials
            _this.authServ.UpdateUser(id, username, name, surname, email, institutionname);
        }, 100);
        this.updateResultSub = this.authServ.currentUpdateUser.subscribe(function (updateresult) {
            if (updateresult) {
                _this.isLoading = false;
                _this.update = updateresult;
                if (_this.update.responseStatusCode === 200 && _this.update.UserUpdated === true) {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_6__["TNSFancyAlert"].showSuccess("Update Success", "Your details have been updated", "Dismiss").then(function (t) {
                        _this.authServ.clearUserDetails();
                        _this.router.navigate(['/advert/home'], {
                            animated: true,
                            transition: {
                                name: "slide",
                                duration: 200,
                                curve: "ease"
                            }
                        });
                    });
                }
                else if (_this.update.responseStatusCode === 500) {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_6__["TNSFancyAlert"].showError("Error Updating", _this.update.Message, "Dismiss");
                    _this.authServ.clearUserDetails();
                }
                else if (_this.update.responseStatusCode === 400) {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_6__["TNSFancyAlert"].showError("Error Updating", _this.update.Message, "Dismiss");
                    _this.authServ.clearUserDetails();
                }
                else {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_6__["TNSFancyAlert"].showError("Error Updating", _this.update.Message, "Dismiss");
                }
            }
        });
    };
    UpdateuserComponent.prototype.ngOnDestroy = function () {
        if (this.getuserResultSub) {
            this.getuserResultSub.unsubscribe();
        }
        if (this.updateResultSub) {
            this.updateResultSub.unsubscribe();
        }
        if (this.isverifiedResultSub) {
            this.isverifiedResultSub.unsubscribe();
        }
    };
    UpdateuserComponent.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"] },
        { type: nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_5__["ModalDialogService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('idEl', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], UpdateuserComponent.prototype, "idEl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('usernameEl', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], UpdateuserComponent.prototype, "usernameEl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nameEl', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], UpdateuserComponent.prototype, "nameEl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('surnameEl', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], UpdateuserComponent.prototype, "surnameEl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('emailEl', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], UpdateuserComponent.prototype, "emailEl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('institutionnameEl', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], UpdateuserComponent.prototype, "institutionnameEl", void 0);
    UpdateuserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-updateuser',
            template: __webpack_require__("./app/auth/updateuser/updateuser.component.html"),
            styles: [__webpack_require__("./app/auth/updateuser/updateuser.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"], nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_5__["ModalDialogService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], UpdateuserComponent);
    return UpdateuserComponent;
}());



/***/ }),

/***/ "./app/auth/validate/validate.component.html":
/***/ (function(module, exports) {

module.exports = "\n<StackLayout class=\"form\" [formGroup]=\"form\">\n    <Button class=\"btn-flat\" text=\"Resend OTP\" (tap)=\"onRequestNewOTP()\"></Button>\n    <StackLayout class=\"input-field\">\n        <Label\n            class=\"label\"\n            text=\"Please enter the OTP:\"\n            [ngClass]=\"{ invalid: !otpControlIsValid }\"\n        ></Label>\n        <TextField\n            class=\"input\"\n            returnKeyType=\"done\"\n            required\n            [autocorrect]=\"false\"\n            autocapitalizationType=\"none\"\n            formControlName=\"otp\"\n            keyboardType=\"number\"\n            #otpEl\n        ></TextField>        \n        <Label\n            *ngIf=\"!otpControlIsValid\"\n            text=\"Please enter a otp address.\"\n        ></Label>\n    </StackLayout>\n    <Button\n        class=\"btn btn-primary btn-rounded-lg\"\n        text=\"Validate OTP\"\n        (tap)=\"onValidateOTP()\"\n    ></Button>\n    <TextField \n        style=\"border-style: hidden ; border-width: 0;border-bottom-style: groove; background-color: #ffffff;\"           \n        #hiddenEl\n    ></TextField>\n</StackLayout>\n<FlexboxLayout justifyContent=\"center\" alignItems=\"center\" *ngIf=\"isLoading\">\n    <ActivityIndicator [busy]=\"isLoading\"></ActivityIndicator>\n</FlexboxLayout>"

/***/ }),

/***/ "./app/auth/validate/validate.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/auth/validate/validate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateComponent", function() { return ValidateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/auth/auth.service.ts");
/* harmony import */ var nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-fancyalert/fancyalert.js");
/* harmony import */ var nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/nativescript-angular/modal-dialog.js");
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_6__);







var ValidateComponent = /** @class */ (function () {
    function ValidateComponent(modalParams, router, authServ, modalDialog, vcRef) {
        this.modalParams = modalParams;
        this.router = router;
        this.authServ = authServ;
        this.modalDialog = modalDialog;
        this.vcRef = vcRef;
        this.phonenumberControlIsValid = true;
        this.otpControlIsValid = true;
        this.isLoading = false;
    }
    ValidateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            otp: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]
            })
        });
        //subscribe to status changes of form
        this.form.get('otp').statusChanges.subscribe(function (status) {
            _this.otpControlIsValid = status === 'VALID';
        });
        //Subscribe to result in auth service
        this.getnewotpResultSub = this.authServ.currentGetnewotp.subscribe(function (getnewotpresult) {
            if (getnewotpresult) {
                _this.isLoading = false;
                _this.getnewotp = getnewotpresult;
                if (_this.getnewotp.responseStatusCode === 200 && _this.getnewotp.Sent == true) {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4__["TNSFancyAlert"].showSuccess("Success", _this.getnewotp.Message, "Dismiss").then(function (t) {
                        _this.authServ.clearNewOTPObject();
                    });
                }
                else if (_this.getnewotp.responseStatusCode === 200 && _this.getnewotp.Sent == false) {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4__["TNSFancyAlert"].showError("Error", _this.getnewotp.Message, "Dismiss");
                }
                else if (_this.getnewotp.responseStatusCode === 500) {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4__["TNSFancyAlert"].showError("Connection error", "A Connection cannot be established at this time", "Dismiss");
                }
                else if (_this.getnewotp.responseStatusCode === 400) {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4__["TNSFancyAlert"].showError("Error", _this.getnewotp.Message, "Dismiss");
                }
                else {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4__["TNSFancyAlert"].showError("Error", _this.getnewotp.Message, "Dismiss");
                }
            }
        });
        this.validateotpResultSub = this.authServ.currentValidateotp.subscribe(function (validateotpresult) {
            if (validateotpresult) {
                _this.isLoading = false;
                _this.validateotp = validateotpresult;
                if (_this.validateotp.responseStatusCode === 200 && _this.validateotp.validated == true) {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4__["TNSFancyAlert"].showSuccess("Success", _this.validateotp.message, "Dismiss").then(function (t) {
                        _this.modalParams.closeCallback(false);
                        _this.authServ.clearValidateOTPObject();
                        _this.router.navigate(['/updateuser'], { clearHistory: true });
                        var id = tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_6__["getString"]("userid");
                        _this.authServ.GetUser(id);
                        _this.authServ.VerificationStatus();
                        ;
                    });
                }
                else if (_this.validateotp.responseStatusCode === 200 && _this.validateotp.validated == false) {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4__["TNSFancyAlert"].showError("Error", _this.validateotp.message, "Dismiss");
                }
                else if (_this.validateotp.responseStatusCode === 500) {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4__["TNSFancyAlert"].showError("Connection error", "A Connection cannot be established at this time", "Dismiss");
                    _this.modalParams.closeCallback(false);
                }
                else if (_this.validateotp.responseStatusCode === 400) {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4__["TNSFancyAlert"].showError("Error", _this.validateotp.message, "Dismiss");
                    _this.modalParams.closeCallback(false);
                }
                else {
                    nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_4__["TNSFancyAlert"].showError("Error", _this.validateotp.message, "Dismiss");
                    _this.modalParams.closeCallback(false);
                }
            }
        });
    };
    ValidateComponent.prototype.onValidateOTP = function () {
        var _this = this;
        this.hiddenEl.nativeElement.focus();
        this.otpEl.nativeElement.focus();
        this.otpEl.nativeElement.dismissSoftInput();
        var otp = this.form.get('otp').value;
        this.isLoading = true;
        //Timeout to give loading bar time to appear
        setTimeout(function () {
            //Verify Login Credentials
            _this.authServ.ValidateOtp(otp);
        }, 100);
    };
    ValidateComponent.prototype.onRequestNewOTP = function () {
        this.authServ.GetNewOtp();
    };
    ValidateComponent.prototype.ngOnDestroy = function () {
        if (this.getnewotpResultSub) {
            //unsubscribe from Result of forgot password
            this.getnewotpResultSub.unsubscribe();
        }
        if (this.validateotpResultSub) {
            //unsubscribe from Result of forgot password
            this.validateotpResultSub.unsubscribe();
        }
    };
    ValidateComponent.ctorParameters = function () { return [
        { type: nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_5__["ModalDialogParams"] },
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_5__["ModalDialogService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('hiddenEl', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ValidateComponent.prototype, "hiddenEl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('otpEl', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ValidateComponent.prototype, "otpEl", void 0);
    ValidateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-validate',
            template: __webpack_require__("./app/auth/validate/validate.component.html"),
            styles: [__webpack_require__("./app/auth/validate/validate.component.scss")]
        }),
        __metadata("design:paramtypes", [nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_5__["ModalDialogParams"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_5__["ModalDialogService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], ValidateComponent);
    return ValidateComponent;
}());



/***/ }),

/***/ "./app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ui_actionbar_action_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/shared/ui/actionbar/action-bar.component.ts");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/common.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__);




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2__["NativeScriptCommonModule"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__["NativeScriptRouterModule"]],
            declarations: [_ui_actionbar_action_bar_component__WEBPACK_IMPORTED_MODULE_1__["ActionBarComponent"]],
            exports: [_ui_actionbar_action_bar_component__WEBPACK_IMPORTED_MODULE_1__["ActionBarComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./app/shared/ui/actionbar/action-bar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/shared/ui/actionbar/action-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar [title]=\"actionBarTitle\" (loaded)=\"onLoadedActionBar()\">\n    <NavigationButton\n        text=\"Back\"\n        android.systemIcon=\"ic_menu_back\"\n        *ngIf=\"canGoBack\"\n        (tap)=\"onGoBack()\"\n    ></NavigationButton>\n    <NavigationButton\n        *ngIf=\"android && hasMenu\"\n        icon=\"res://menu_black\"\n        (tap)=\"OnToggleMenu()\"\n        class=\"btn-burger\"\n    ></NavigationButton>\n    <ActionItem *ngIf=\"!android && hasMenu\" ios.position=\"left\" (tap)=\"OnToggleMenu()\">\n        <Label text=\"&#xf0c9;\" class=\"fa m-5\"></Label>\n    </ActionItem>\n    <ng-content></ng-content>\n</ActionBar>\n"

/***/ }),

/***/ "./app/shared/ui/actionbar/action-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionBarComponent", function() { return ActionBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/tns-core-modules/platform/platform.js");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/tns-core-modules/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ui_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/shared/ui/ui.service.ts");





var ActionBarComponent = /** @class */ (function () {
    function ActionBarComponent(page, router, uiService) {
        this.page = page;
        this.router = router;
        this.uiService = uiService;
        this.showBackButton = true;
        this.hasMenu = true;
    }
    Object.defineProperty(ActionBarComponent.prototype, "android", {
        get: function () {
            return tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1__["isAndroid"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionBarComponent.prototype, "canGoBack", {
        get: function () {
            return this.router.canGoBack() && this.showBackButton;
        },
        enumerable: true,
        configurable: true
    });
    ActionBarComponent.prototype.onGoBack = function () {
        this.router.backToPreviousPage();
    };
    ActionBarComponent.prototype.onLoadedActionBar = function () {
        if (tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1__["isAndroid"]) {
            var androidToolbar = this.page.actionBar.nativeView;
            var backButton = androidToolbar.getNavigationIcon();
            var color = '#171717';
            if (this.hasMenu) {
                color = '#ffffff';
            }
            if (backButton) {
                backButton.setColorFilter(android.graphics.Color.parseColor(color), android.graphics.PorterDuff.Mode.SRC_ATOP);
            }
        }
    };
    ActionBarComponent.prototype.OnToggleMenu = function () {
        this.uiService.toggleDrawer();
    };
    ActionBarComponent.ctorParameters = function () { return [
        { type: tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__["Page"] },
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"] },
        { type: _ui_service__WEBPACK_IMPORTED_MODULE_4__["UIService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ActionBarComponent.prototype, "actionBarTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ActionBarComponent.prototype, "showBackButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ActionBarComponent.prototype, "hasMenu", void 0);
    ActionBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-action-bar',
            template: __webpack_require__("./app/shared/ui/actionbar/action-bar.component.html"),
            styles: [__webpack_require__("./app/shared/ui/actionbar/action-bar.component.css")]
        }),
        __metadata("design:paramtypes", [tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__["Page"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"], _ui_service__WEBPACK_IMPORTED_MODULE_4__["UIService"]])
    ], ActionBarComponent);
    return ActionBarComponent;
}());



/***/ }),

/***/ "./app/shared/ui/ui.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIService", function() { return UIService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/index.js");


var UIService = /** @class */ (function () {
    function UIService() {
        this._drawerState = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    Object.defineProperty(UIService.prototype, "drawerState", {
        get: function () {
            return this._drawerState.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    UIService.prototype.toggleDrawer = function () {
        console.log("Toggle Drawer");
        this._drawerState.next(null);
    };
    UIService.prototype.setRootVC = function (vcRef) {
        this._rootVCRef = vcRef;
    };
    UIService.prototype.getRootVCRef = function () {
        return this._rootVCRef;
    };
    UIService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' })
    ], UIService);
    return UIService;
}());



/***/ }),

/***/ "./main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-angular/platform.js");
/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/app.module.ts");

            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-angular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__initialHmrUpdate = true;
            global.__hmrSyncBackup = global.__onLiveSync;

            global.__onLiveSync = function () {
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                if (global.__initialHmrUpdate) {
                    return;
                }

                setTimeout(() => {
                    global.__hmrSyncBackup({ type, path });
                });
            };

            hmrUpdate().then(() => {
                global.__initialHmrUpdate = false;
            })
        }
        
            
        __webpack_require__("../node_modules/tns-core-modules/bundle-entry-points.js");
        

var options_Generated = {};

if (true) {
    options_Generated = {
        hmrOptions: {
            moduleTypeFactory: function () { return __webpack_require__("./app/app.module.ts").AppModule; },
            livesyncCallback: function (platformReboot) { setTimeout(platformReboot, 0); }
        }
    };
}

if (true) {
    module["hot"].accept(["./app/app.module.ts"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/app.module.ts");
(function () {
        global["hmrRefresh"]({});
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}
nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__["platformNativeScriptDynamic"](Object.assign({}, options_Generated)).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]);

    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"main":"main.js","android":{"v8Flags":"--expose_gc","markingMode":"none"}};

/***/ })

},[["./main.ts","runtime","vendor"]]]);