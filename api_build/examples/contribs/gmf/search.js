/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"search": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([23,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./contribs/gmf/examples/search.css":
/*!******************************************!*\
  !*** ./contribs/gmf/examples/search.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./contribs/gmf/examples/search.js":
/*!*****************************************!*\
  !*** ./contribs/gmf/examples/search.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url.js */ "./contribs/gmf/examples/url.js");
/* harmony import */ var _search_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.css */ "./contribs/gmf/examples/search.css");
/* harmony import */ var _search_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_search_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gmf_map_component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gmf/map/component.js */ "./contribs/gmf/src/map/component.js");
/* harmony import */ var gmf_search_module_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gmf/search/module.js */ "./contribs/gmf/src/search/module.js");
/* harmony import */ var gmf_theme_Themes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gmf/theme/Themes.js */ "./contribs/gmf/src/theme/Themes.js");
/* harmony import */ var ngeo_message_Notification_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngeo/message/Notification.js */ "./src/message/Notification.js");
/* harmony import */ var ngeo_message_Message_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngeo/message/Message.js */ "./src/message/Message.js");
/* harmony import */ var _geoblocks_proj_src_EPSG_21781_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @geoblocks/proj/src/EPSG_21781.js */ "./node_modules/@geoblocks/proj/src/EPSG_21781.js");
/* harmony import */ var ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngeo/map/module.js */ "./src/map/module.js");
/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/Map.js */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/View.js */ "./node_modules/ol/View.js");
/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/layer/Tile.js */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/source/OSM.js */ "./node_modules/ol/source/OSM.js");
/* harmony import */ var ol_style_Circle_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ol/style/Circle.js */ "./node_modules/ol/style/Circle.js");
/* harmony import */ var ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ol/style/Fill.js */ "./node_modules/ol/style/Fill.js");
/* harmony import */ var ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ol/style/Stroke.js */ "./node_modules/ol/style/Stroke.js");
/* harmony import */ var ol_style_Style_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ol/style/Style.js */ "./node_modules/ol/style/Style.js");
var exports = {};

















exports.module = angular.module('gmfapp', ['gettext', gmf_map_component_js__WEBPACK_IMPORTED_MODULE_2__["default"].name, gmf_search_module_js__WEBPACK_IMPORTED_MODULE_3__["default"].name, gmf_theme_Themes_js__WEBPACK_IMPORTED_MODULE_4__["default"].module.name, ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_8__["default"].name, ngeo_message_Notification_js__WEBPACK_IMPORTED_MODULE_5__["default"].module.name]);
exports.module.value('gmfTreeUrl', _url_js__WEBPACK_IMPORTED_MODULE_0__["default"].GMF_THEMES);
exports.module.value('fulltextsearchUrl', _url_js__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH + "?limit=30&partitionlimit=5&interface=desktop");
exports.module.value('gmfLayersUrl', _url_js__WEBPACK_IMPORTED_MODULE_0__["default"].GMF_LAYERS);
exports.module.constant('defaultTheme', 'Demo');
exports.module.constant('angularLocaleScript', '../build/angular-locale_{{locale}}.js');

exports.MainController = function (gmfThemes, ngeoFeatureOverlayMgr, ngeoNotification) {
  gmfThemes.loadThemes();
  ngeoFeatureOverlayMgr.init(this.map);
  this.searchDatasources = [{
    groupValues: ['osm', 'district'],
    groupActions: [],
    labelKey: 'label',
    projection: _geoblocks_proj_src_EPSG_21781_js__WEBPACK_IMPORTED_MODULE_7__["default"],
    bloodhoundOptions: {
      remote: {
        rateLimitWait: 250
      }
    },
    url: _url_js__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH
  }];
  var fill = new ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_14__["default"]({
    color: [255, 255, 255, 0.6]
  });
  var stroke = new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_15__["default"]({
    color: [255, 0, 0, 1],
    width: 2
  });
  this.searchStyles = {
    'osm': new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_16__["default"]({
      fill: fill,
      image: new ol_style_Circle_js__WEBPACK_IMPORTED_MODULE_13__["default"]({
        fill: fill,
        radius: 5,
        stroke: stroke
      }),
      stroke: stroke
    })
  };
  this.searchOptions = {
    minLength: 2
  };
  this.inputValue = '';
  this.map = new ol_Map_js__WEBPACK_IMPORTED_MODULE_9__["default"]({
    layers: [new ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_11__["default"]({
      source: new ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_12__["default"]()
    })],
    view: new ol_View_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
      center: [0, 0],
      zoom: 4
    })
  });

  this.searchIsReady = function () {
    ngeoNotification.notify({
      msg: 'gmf-search initialized',
      target: angular.element('#message'),
      type: ngeo_message_Message_js__WEBPACK_IMPORTED_MODULE_6__["default"].Type.SUCCESS
    });
  };
};

exports.MainController.$inject = ["gmfThemes", "ngeoFeatureOverlayMgr", "ngeoNotification"];
exports.module.controller('MainController', exports.MainController);
/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ 23:
/*!****************************************************************************************************************!*\
  !*** multi ./contribs/gmf/examples/common_dependencies.js gmf/mainmodule.js ./contribs/gmf/examples/search.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./contribs/gmf/examples/common_dependencies.js */"./contribs/gmf/examples/common_dependencies.js");
__webpack_require__(/*! gmf/mainmodule.js */"./contribs/gmf/src/mainmodule.js");
module.exports = __webpack_require__(/*! ./contribs/gmf/examples/search.js */"./contribs/gmf/examples/search.js");


/***/ })

/******/ });
//# sourceMappingURL=search.js.map