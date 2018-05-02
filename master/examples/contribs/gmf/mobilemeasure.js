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
/******/ 		"mobilemeasure": 0
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
/******/ 	deferredModules.push([16,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./contribs/gmf/examples/mobilemeasure.css":
/*!*************************************************!*\
  !*** ./contribs/gmf/examples/mobilemeasure.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./contribs/gmf/examples/mobilemeasure.js":
/*!************************************************!*\
  !*** ./contribs/gmf/examples/mobilemeasure.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url.js */ "./contribs/gmf/examples/url.js");
/* harmony import */ var _mobilemeasure_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobilemeasure.css */ "./contribs/gmf/examples/mobilemeasure.css");
/* harmony import */ var _mobilemeasure_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mobilemeasure_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gmf_map_component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gmf/map/component.js */ "./contribs/gmf/src/map/component.js");
/* harmony import */ var gmf_permalink_Permalink_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gmf/permalink/Permalink.js */ "./contribs/gmf/src/permalink/Permalink.js");
/* harmony import */ var gmf_mobile_measure_lengthComponent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gmf/mobile/measure/lengthComponent.js */ "./contribs/gmf/src/mobile/measure/lengthComponent.js");
/* harmony import */ var gmf_mobile_measure_pointComponent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gmf/mobile/measure/pointComponent.js */ "./contribs/gmf/src/mobile/measure/pointComponent.js");
/* harmony import */ var ngeo_misc_btnComponent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngeo/misc/btnComponent.js */ "./src/misc/btnComponent.js");
/* harmony import */ var _geoblocks_proj_src_EPSG_21781_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @geoblocks/proj/src/EPSG_21781.js */ "./node_modules/@geoblocks/proj/src/EPSG_21781.js");
/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/Map.js */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/View.js */ "./node_modules/ol/View.js");
/* harmony import */ var ol_control_ScaleLine_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/control/ScaleLine.js */ "./node_modules/ol/control/ScaleLine.js");
/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/layer/Tile.js */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/source/OSM.js */ "./node_modules/ol/source/OSM.js");
var exports = {};













exports.module = angular.module('gmfapp', ['gettext', gmf_map_component_js__WEBPACK_IMPORTED_MODULE_2__["default"].name, gmf_permalink_Permalink_js__WEBPACK_IMPORTED_MODULE_3__["default"].module.name, gmf_mobile_measure_lengthComponent_js__WEBPACK_IMPORTED_MODULE_4__["default"].name, gmf_mobile_measure_pointComponent_js__WEBPACK_IMPORTED_MODULE_5__["default"].name, ngeo_misc_btnComponent_js__WEBPACK_IMPORTED_MODULE_6__["default"].name]);
exports.module.value('gmfRasterUrl', _url_js__WEBPACK_IMPORTED_MODULE_0__["default"].RASTER);
exports.module.constant('defaultTheme', 'Demo');
exports.module.constant('angularLocaleScript', '../build/angular-locale_{{locale}}.js');

exports.MainController = function (gmfPermalink) {
  var center = gmfPermalink.getMapCenter() || [537635, 152640];
  var zoom = gmfPermalink.getMapZoom() || 3;
  this.map = new ol_Map_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
    layers: [new ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_11__["default"]({
      source: new ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_12__["default"]()
    })],
    view: new ol_View_js__WEBPACK_IMPORTED_MODULE_9__["default"]({
      projection: _geoblocks_proj_src_EPSG_21781_js__WEBPACK_IMPORTED_MODULE_7__["default"],
      resolutions: [200, 100, 50, 20, 10, 5, 2.5, 2, 1, 0.5],
      center: center,
      zoom: zoom
    })
  });
  this.map.addControl(new ol_control_ScaleLine_js__WEBPACK_IMPORTED_MODULE_10__["default"]());
  this.measureLengthActive = false;
  this.measurePointLayersConfig = [{
    name: 'aster',
    unit: 'm',
    decimals: 2
  }, {
    name: 'srtm',
    unit: 'm'
  }];
  this.measurePointActive = false;
};

exports.MainController.$inject = ["gmfPermalink"];
exports.module.controller('MainController', exports.MainController);
/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./contribs/gmf/src/mobile/measure/lengthComponent.html":
/*!**************************************************************!*\
  !*** ./contribs/gmf/src/mobile/measure/lengthComponent.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<a class="btn btn-default"\n   ng-if="ctrl.drawing && (!ctrl.valid)"\n   ng-click="ctrl.addPoint()">\n     <span class="fa fa-check"></span>\n     {{\'Set as starting point\' | translate}}\n</a>\n<a class="btn btn-default"\n   ng-if="ctrl.dirty"\n   ng-click="ctrl.addPoint()">\n     <span class="fa fa-plus"></span>\n     {{\'Add new point\' | translate}}\n</a>\n<a class="btn btn-default"\n   ng-if="ctrl.drawing && ctrl.valid && !ctrl.dirty"\n   ng-click="ctrl.finish()">\n     <span class="fa fa-check"></span>\n     {{\'Terminate\' | translate}}\n</a>\n<a class="btn btn-default"\n   ng-if="ctrl.valid"\n   ng-click="ctrl.clear()">\n     <span class="fa fa-repeat"></span>\n     {{\'Clear\' | translate}}\n</a>\n<a class="btn btn-default"\n   ng-if="ctrl.active"\n   ng-click="ctrl.deactivate()">\n     <span class="fa fa-times"></span>\n     {{\'Close\' | translate}}\n</a>\n';

}
return __p
}

/***/ }),

/***/ "./contribs/gmf/src/mobile/measure/lengthComponent.js":
/*!************************************************************!*\
  !*** ./contribs/gmf/src/mobile/measure/lengthComponent.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ngeo_misc_filters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngeo/misc/filters.js */ "./src/misc/filters.js");
/* harmony import */ var ngeo_interaction_MeasureLengthMobile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/interaction/MeasureLengthMobile.js */ "./src/interaction/MeasureLengthMobile.js");
/* harmony import */ var ngeo_misc_decorate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/misc/decorate.js */ "./src/misc/decorate.js");
/* harmony import */ var ol_events_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/events.js */ "./node_modules/ol/events.js");
/* harmony import */ var ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/style/Fill.js */ "./node_modules/ol/style/Fill.js");
/* harmony import */ var ol_style_RegularShape_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/style/RegularShape.js */ "./node_modules/ol/style/RegularShape.js");
/* harmony import */ var ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/style/Stroke.js */ "./node_modules/ol/style/Stroke.js");
/* harmony import */ var ol_style_Style_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/style/Style.js */ "./node_modules/ol/style/Style.js");








var exports = angular.module('gmfMobileMeasureLength', [ngeo_misc_filters_js__WEBPACK_IMPORTED_MODULE_0__["default"].name]);
exports.value('gmfMobileMeasureLengthTemplateUrl', function (element, attrs) {
  var templateUrl = attrs['gmfMobileMeasureLengthTemplateurl'];
  return templateUrl !== undefined ? templateUrl : 'gmf/measure/lengthComponent';
});
exports.run(["$templateCache", function ($templateCache) {
  $templateCache.put('gmf/measure/lengthComponent', __webpack_require__(/*! ./lengthComponent.html */ "./contribs/gmf/src/mobile/measure/lengthComponent.html"));
}]);

exports.component_ = function (gmfMobileMeasureLengthTemplateUrl) {
  return {
    restrict: 'A',
    scope: {
      'active': '=gmfMobileMeasurelengthActive',
      'precision': '<?gmfMobileMeasurelengthPrecision',
      'map': '=gmfMobileMeasurelengthMap',
      'sketchStyle': '=?gmfMobileMeasurelengthSketchstyle'
    },
    controller: 'GmfMobileMeasureLengthController as ctrl',
    bindToController: true,
    templateUrl: gmfMobileMeasureLengthTemplateUrl,
    link: function link(scope, element, attrs, controller) {
      controller.init();
    }
  };
};

exports.component_.$inject = ["gmfMobileMeasureLengthTemplateUrl"];
exports.directive('gmfMobileMeasurelength', exports.component_);

exports.Controller_ = function ($scope, $filter, gettextCatalog) {
  var _this = this;

  this.scope_ = $scope;
  this.filter_ = $filter;
  this.gettextCatalog_ = gettextCatalog;
  this.map;
  this.active;
  this.scope_.$watch(function () {
    return _this.active;
  }, function (newVal) {
    _this.measure.setActive(newVal);
  });
  this.precision;
  this.sketchStyle = new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
    fill: new ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
      color: 'rgba(255, 255, 255, 0.2)'
    }),
    stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
      color: 'rgba(0, 0, 0, 0.5)',
      lineDash: [10, 10],
      width: 2
    }),
    image: new ol_style_RegularShape_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
      stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
        color: 'rgba(0, 0, 0, 0.7)',
        width: 2
      }),
      points: 4,
      radius: 8,
      radius2: 0,
      angle: 0
    })
  });
  this.measure;
  this.drawInteraction;
  this.dirty = false;
  this.drawing = false;
  this.valid = false;
};

exports.Controller_.$inject = ["$scope", "$filter", "gettextCatalog"];

exports.Controller_.prototype.init = function () {
  this.measure = new ngeo_interaction_MeasureLengthMobile_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.filter_('ngeoUnitPrefix'), this.gettextCatalog_, {
    precision: this.precision,
    sketchStyle: this.sketchStyle
  });
  this.measure.setActive(this.active);
  ngeo_misc_decorate_js__WEBPACK_IMPORTED_MODULE_2__["default"].interaction(this.measure);
  this.drawInteraction = this.measure.getDrawInteraction();
  var drawInteraction = this.drawInteraction;
  ngeo_misc_decorate_js__WEBPACK_IMPORTED_MODULE_2__["default"].interaction(drawInteraction);
  Object.defineProperty(this, 'hasPoints', {
    get: function get() {
      return this.drawInteraction.getFeature() !== null;
    }
  });
  ol_events_js__WEBPACK_IMPORTED_MODULE_3__["listen"](drawInteraction, 'change:dirty', function () {
    this.dirty = drawInteraction.getDirty();

    if (this.dirty) {
      this.scope_.$apply();
    }
  }, this);
  ol_events_js__WEBPACK_IMPORTED_MODULE_3__["listen"](drawInteraction, 'change:drawing', function () {
    this.drawing = drawInteraction.getDrawing();
  }, this);
  ol_events_js__WEBPACK_IMPORTED_MODULE_3__["listen"](drawInteraction, 'change:valid', function () {
    this.valid = drawInteraction.getValid();
  }, this);
  this.map.addInteraction(this.measure);
};

exports.Controller_.prototype.addPoint = function () {
  this.drawInteraction.addToDrawing();
};

exports.Controller_.prototype.clear = function () {
  this.drawInteraction.clearDrawing();
};

exports.Controller_.prototype.finish = function () {
  this.drawInteraction.finishDrawing();
};

exports.Controller_.prototype.deactivate = function () {
  this.active = false;
};

exports.controller('GmfMobileMeasureLengthController', exports.Controller_);
/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./contribs/gmf/src/mobile/measure/pointComponent.html":
/*!*************************************************************!*\
  !*** ./contribs/gmf/src/mobile/measure/pointComponent.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<a class="btn btn-default"\n   ng-if="ctrl.active"\n   ng-click="ctrl.deactivate()">\n     <span class="fa fa-times"></span>\n     {{\'Close\' | translate}}\n</a>\n';

}
return __p
}

/***/ }),

/***/ "./contribs/gmf/src/mobile/measure/pointComponent.js":
/*!***********************************************************!*\
  !*** ./contribs/gmf/src/mobile/measure/pointComponent.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gmf_raster_RasterService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gmf/raster/RasterService.js */ "./contribs/gmf/src/raster/RasterService.js");
/* harmony import */ var goog_asserts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! goog/asserts.js */ "./src/goog.asserts.js");
/* harmony import */ var ngeo_interaction_MeasurePointMobile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/interaction/MeasurePointMobile.js */ "./src/interaction/MeasurePointMobile.js");
/* harmony import */ var ngeo_misc_debounce_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngeo/misc/debounce.js */ "./src/misc/debounce.js");
/* harmony import */ var ngeo_misc_decorate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngeo/misc/decorate.js */ "./src/misc/decorate.js");
/* harmony import */ var ol_events_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/events.js */ "./node_modules/ol/events.js");
/* harmony import */ var ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/style/Fill.js */ "./node_modules/ol/style/Fill.js");
/* harmony import */ var ol_style_RegularShape_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/style/RegularShape.js */ "./node_modules/ol/style/RegularShape.js");
/* harmony import */ var ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/style/Stroke.js */ "./node_modules/ol/style/Stroke.js");
/* harmony import */ var ol_style_Style_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/style/Style.js */ "./node_modules/ol/style/Style.js");










var exports = angular.module('gmfMobileMeasurePoint', [gmf_raster_RasterService_js__WEBPACK_IMPORTED_MODULE_0__["default"].module.name, ngeo_misc_debounce_js__WEBPACK_IMPORTED_MODULE_3__["default"].name]);
exports.value('gmfMobileMeasurePointTemplateUrl', function (element, attrs) {
  var templateUrl = attrs['gmfMobileMeasurePointTemplateurl'];
  return templateUrl !== undefined ? templateUrl : 'gmf/measure/pointComponent';
});
exports.run(["$templateCache", function ($templateCache) {
  $templateCache.put('gmf/measure/pointComponent', __webpack_require__(/*! ./pointComponent.html */ "./contribs/gmf/src/mobile/measure/pointComponent.html"));
}]);

exports.component_ = function (gmfMobileMeasurePointTemplateUrl) {
  return {
    restrict: 'A',
    scope: {
      'active': '=gmfMobileMeasurepointActive',
      'getCoordinateDecimalsFn': '&?gmfMobileMeasurepointCoordinatedecimals',
      'getLayersConfigFn': '&gmfMobileMeasurepointLayersconfig',
      'map': '=gmfMobileMeasurepointMap',
      'sketchStyle': '=?gmfMobileMeasurepointSketchstyle',
      'format': '<gmfMobileMeasurepointFormat'
    },
    controller: 'GmfMobileMeasurePointController as ctrl',
    bindToController: true,
    templateUrl: gmfMobileMeasurePointTemplateUrl,
    link: function link(scope, element, attrs, controller) {
      controller.init();
    }
  };
};

exports.component_.$inject = ["gmfMobileMeasurePointTemplateUrl"];
exports.directive('gmfMobileMeasurepoint', exports.component_);

exports.Controller_ = function (gettextCatalog, $scope, $filter, gmfRaster, ngeoDebounce) {
  var _this = this;

  this.gmfRaster_ = gmfRaster;
  this.ngeoDebounce_ = ngeoDebounce;
  this.gettextCatalog_ = gettextCatalog;
  this.$filter_ = $filter;
  this.map;
  this.active;
  $scope.$watch(function () {
    return _this.active;
  }, function (newVal) {
    _this.measure.setActive(newVal);

    _this.handleMeasureActiveChange_();
  });
  var coordinateDecimalsFn = this['getCoordinateDecimalsFn'];
  this.coordinateDecimals = coordinateDecimalsFn ? coordinateDecimalsFn() : 0;
  this.layersConfig;
  this.sketchStyle;

  if (this.sketchStyle === undefined) {
    this.sketchStyle = new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_9__["default"]({
      fill: new ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
        color: 'rgba(255, 255, 255, 0.2)'
      }),
      stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
        color: 'rgba(0, 0, 0, 0.5)',
        lineDash: [10, 10],
        width: 2
      }),
      image: new ol_style_RegularShape_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
        stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
          color: 'rgba(0, 0, 0, 0.7)',
          width: 2
        }),
        points: 4,
        radius: 8,
        radius2: 0,
        angle: 0
      })
    });
  }

  this.format;
  this.measure;
  this.drawInteraction;
  this.mapViewPropertyChangeEventKey_ = null;
};

exports.Controller_.$inject = ["gettextCatalog", "$scope", "$filter", "gmfRaster", "ngeoDebounce"];

exports.Controller_.prototype.init = function () {
  this.measure = new ngeo_interaction_MeasurePointMobile_js__WEBPACK_IMPORTED_MODULE_2__["default"](this.$filter_('ngeoNumberCoordinates'), this.format || '{x}, {y}', {
    decimals: this.coordinateDecimals,
    sketchStyle: this.sketchStyle
  });
  this.measure.setActive(this.active);
  ngeo_misc_decorate_js__WEBPACK_IMPORTED_MODULE_4__["default"].interaction(this.measure);
  this.drawInteraction = this.measure.getDrawInteraction();
  ngeo_misc_decorate_js__WEBPACK_IMPORTED_MODULE_4__["default"].interaction(this.drawInteraction);
  var layersConfig = this['getLayersConfigFn']();
  goog_asserts_js__WEBPACK_IMPORTED_MODULE_1__["default"].assert(Array.isArray(layersConfig));
  this.layersConfig = layersConfig;
  this.map.addInteraction(this.measure);
};

exports.Controller_.prototype.deactivate = function () {
  this.active = false;
};

exports.Controller_.prototype.translate = function (str) {
  return this.gettextCatalog_.getString(str);
};

exports.Controller_.prototype.handleMeasureActiveChange_ = function () {
  if (this.measure.getActive()) {
    var view = this.map.getView();
    this.mapViewPropertyChangeEventKey_ = ol_events_js__WEBPACK_IMPORTED_MODULE_5__["listen"](view, 'propertychange', this.ngeoDebounce_(this.getMeasure_.bind(this), 300, true), this);
    this.getMeasure_();
  } else if (this.mapViewPropertyChangeEventKey_) {
    ol_events_js__WEBPACK_IMPORTED_MODULE_5__["unlistenByKey"](this.mapViewPropertyChangeEventKey_);
    this.mapViewPropertyChangeEventKey_ = null;
  }
};

exports.Controller_.prototype.getMeasure_ = function () {
  var _this2 = this;

  var center = this.map.getView().getCenter();
  goog_asserts_js__WEBPACK_IMPORTED_MODULE_1__["default"].assertArray(center);
  var params = {
    'layers': this.layersConfig.map(function (config) {
      return config.name;
    }).join(',')
  };
  this.gmfRaster_.getRaster(center, params).then(function (object) {
    var el = _this2.measure.getTooltipElement();

    var ctn = document.createElement('div');
    var className = 'gmf-mobile-measure-point';
    ctn.className = className;

    for (var _iterator = _this2.layersConfig, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var config = _ref;
      var key = config.name;

      if (key in object) {
        var value = object[key];
        var childEl = document.createElement('div');
        childEl.className = "gmf-mobile-measure-point-" + key;
        var unit = config.unit || '';
        var decimals = config.decimals && config.decimals > 0 || 0;
        value = _this2.$filter_('number')(value, decimals);
        childEl.innerHTML = [_this2.translate(key), ': ', value, ' ', unit].join('');
        ctn.appendChild(childEl);
      }
    }

    var previousCtn = el.getElementsByClassName(className);

    if (previousCtn[0]) {
      previousCtn[0].remove();
    }

    el.appendChild(ctn);
  });
};

exports.controller('GmfMobileMeasurePointController', exports.Controller_);
exports.LayerConfig;
/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/interaction/MeasureLengthMobile.js":
/*!************************************************!*\
  !*** ./src/interaction/MeasureLengthMobile.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ngeo_interaction_MeasureLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngeo/interaction/MeasureLength.js */ "./src/interaction/MeasureLength.js");
/* harmony import */ var ngeo_interaction_MobileDraw_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/interaction/MobileDraw.js */ "./src/interaction/MobileDraw.js");
/* harmony import */ var ol_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/util.js */ "./node_modules/ol/util.js");




var exports = function exports(format, gettextCatalog, opt_options) {
  var options = opt_options !== undefined ? opt_options : {};
  Object.assign(options, {
    displayHelpTooltip: false
  });
  ngeo_interaction_MeasureLength_js__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, format, gettextCatalog, options);
};

Object(ol_util_js__WEBPACK_IMPORTED_MODULE_2__["inherits"])(exports, ngeo_interaction_MeasureLength_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

exports.prototype.createDrawInteraction = function (style, source) {
  return new ngeo_interaction_MobileDraw_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
    type: 'LineString',
    style: style,
    source: source
  });
};

/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/interaction/MeasurePointMobile.js":
/*!***********************************************!*\
  !*** ./src/interaction/MeasurePointMobile.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var goog_asserts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! goog/asserts.js */ "./src/goog.asserts.js");
/* harmony import */ var ngeo_interaction_Measure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/interaction/Measure.js */ "./src/interaction/Measure.js");
/* harmony import */ var ngeo_interaction_MobileDraw_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/interaction/MobileDraw.js */ "./src/interaction/MobileDraw.js");
/* harmony import */ var ol_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/util.js */ "./node_modules/ol/util.js");
/* harmony import */ var ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/geom/Point.js */ "./node_modules/ol/geom/Point.js");






var exports = function exports(format, coordFormat, options) {
  if (options === void 0) {
    options = {};
  }

  Object.assign(options, {
    displayHelpTooltip: false
  });
  ngeo_interaction_Measure_js__WEBPACK_IMPORTED_MODULE_1__["default"].call(this, options);
  this.format_ = format;
  this.coordFormat_ = coordFormat;
};

Object(ol_util_js__WEBPACK_IMPORTED_MODULE_3__["inherits"])(exports, ngeo_interaction_Measure_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

exports.prototype.createDrawInteraction = function (style, source) {
  return new ngeo_interaction_MobileDraw_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
    type: 'Point',
    style: style,
    source: source
  });
};

exports.prototype.handleMeasure = function (callback) {
  var geom = goog_asserts_js__WEBPACK_IMPORTED_MODULE_0__["default"].assertInstanceof(this.sketchFeature.getGeometry(), ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
  var dec = this.decimals;
  var output = ngeo_interaction_Measure_js__WEBPACK_IMPORTED_MODULE_1__["default"].getFormattedPoint(geom, dec, this.format_, this.coordFormat_);
  var coord = geom.getLastCoordinate();
  callback(output, coord);
};

/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/interaction/MobileDraw.js":
/*!***************************************!*\
  !*** ./src/interaction/MobileDraw.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var goog_asserts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! goog/asserts.js */ "./src/goog.asserts.js");
/* harmony import */ var ngeo_interaction_common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/interaction/common.js */ "./src/interaction/common.js");
/* harmony import */ var ngeo_CustomEvent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/CustomEvent.js */ "./src/CustomEvent.js");
/* harmony import */ var ol_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/util.js */ "./node_modules/ol/util.js");
/* harmony import */ var ol_events_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/events.js */ "./node_modules/ol/events.js");
/* harmony import */ var ol_Feature_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/Feature.js */ "./node_modules/ol/Feature.js");
/* harmony import */ var ol_functions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/functions.js */ "./node_modules/ol/functions.js");
/* harmony import */ var ol_geom_LineString_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/geom/LineString.js */ "./node_modules/ol/geom/LineString.js");
/* harmony import */ var ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/geom/Point.js */ "./node_modules/ol/geom/Point.js");
/* harmony import */ var ol_geom_SimpleGeometry_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/geom/SimpleGeometry.js */ "./node_modules/ol/geom/SimpleGeometry.js");
/* harmony import */ var ol_interaction_Interaction_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/interaction/Interaction.js */ "./node_modules/ol/interaction/Interaction.js");
/* harmony import */ var ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/layer/Vector.js */ "./node_modules/ol/layer/Vector.js");
/* harmony import */ var ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/source/Vector.js */ "./node_modules/ol/source/Vector.js");














var exports = function exports(options) {
  ol_interaction_Interaction_js__WEBPACK_IMPORTED_MODULE_10__["default"].call(this, {
    handleEvent: ol_functions_js__WEBPACK_IMPORTED_MODULE_6__["TRUE"]
  });
  this.changeEventKey_ = null;
  this.type_ = options.type;
  this.minPoints_ = options.minPoints ? options.minPoints : this.type_ === 'Polygon' ? 3 : 2;
  this.sketchFeature_ = null;
  this.sketchPoints_ = [];
  this.sketchPoint_ = null;
  this.overlay_ = new ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_11__["default"]({
    source: new ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_12__["default"]({
      useSpatialIndex: false,
      wrapX: options.wrapX ? options.wrapX : false
    }),
    style: options.style || ngeo_interaction_common_js__WEBPACK_IMPORTED_MODULE_1__["default"].getDefaultDrawStyleFunction(),
    updateWhileAnimating: true,
    updateWhileInteracting: true
  });
  ol_events_js__WEBPACK_IMPORTED_MODULE_4__["listen"](this, 'change:active', this.updateState_, this);
  this.set('dirty', false);
  this.set('drawing', false);
  this.set('valid', false);
};

Object(ol_util_js__WEBPACK_IMPORTED_MODULE_3__["inherits"])(exports, ol_interaction_Interaction_js__WEBPACK_IMPORTED_MODULE_10__["default"]);

exports.prototype.setMap = function (map) {
  var currentMap = this.getMap();

  if (currentMap) {
    if (this.changeEventKey_) {
      ol_events_js__WEBPACK_IMPORTED_MODULE_4__["unlistenByKey"](this.changeEventKey_);
    }
  }

  ol_interaction_Interaction_js__WEBPACK_IMPORTED_MODULE_10__["default"].prototype.setMap.call(this, map);

  if (map) {
    this.changeEventKey_ = ol_events_js__WEBPACK_IMPORTED_MODULE_4__["listen"](map.getView(), 'change:center', this.handleViewCenterChange_, this);
  }

  this.updateState_();
};

exports.prototype.getDirty = function () {
  return this.get('dirty');
};

exports.prototype.getDrawing = function () {
  return this.get('drawing');
};

exports.prototype.getValid = function () {
  return this.get('valid');
};

exports.prototype.getFeature = function () {
  return this.sketchFeature_;
};

exports.prototype.addToDrawing = function () {
  var active = this.getActive();
  var drawing = this.getDrawing();

  if (!active || !drawing) {
    return;
  }

  var sketchFeatureGeom;
  var sketchPointGeom = this.getSketchPointGeometry_();
  var coordinate = sketchPointGeom.getCoordinates();
  var coordinates;

  if (this.type_ === 'Point') {
    if (!this.sketchFeature_) {
      this.sketchFeature_ = new ol_Feature_js__WEBPACK_IMPORTED_MODULE_5__["default"](new ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_8__["default"](coordinate));
      var event = new ngeo_CustomEvent_js__WEBPACK_IMPORTED_MODULE_2__["default"]('drawstart', {
        feature: this.sketchFeature_
      });
      this.dispatchEvent(event);
    }

    sketchFeatureGeom = this.sketchFeature_.getGeometry();
    goog_asserts_js__WEBPACK_IMPORTED_MODULE_0__["default"].assertInstanceof(sketchFeatureGeom, ol_geom_SimpleGeometry_js__WEBPACK_IMPORTED_MODULE_9__["default"]);
    sketchFeatureGeom.setCoordinates(coordinate);
    return;
  }

  if (this.type_ === 'LineString') {
    this.sketchPoints_.push(this.sketchPoint_);

    if (!this.sketchFeature_) {
      coordinates = [coordinate.slice(), coordinate.slice()];
      this.sketchFeature_ = new ol_Feature_js__WEBPACK_IMPORTED_MODULE_5__["default"](new ol_geom_LineString_js__WEBPACK_IMPORTED_MODULE_7__["default"](coordinates));

      var _event = new ngeo_CustomEvent_js__WEBPACK_IMPORTED_MODULE_2__["default"]('drawstart', {
        feature: this.sketchFeature_
      });

      this.dispatchEvent(_event);
    } else {
      sketchFeatureGeom = this.sketchFeature_.getGeometry();
      goog_asserts_js__WEBPACK_IMPORTED_MODULE_0__["default"].assertInstanceof(sketchFeatureGeom, ol_geom_SimpleGeometry_js__WEBPACK_IMPORTED_MODULE_9__["default"]);
      coordinates = sketchFeatureGeom.getCoordinates();
      coordinates.push(coordinate.slice());
      sketchFeatureGeom.setCoordinates(coordinates);
    }
  }

  var dirty = this.getDirty();

  if (dirty) {
    this.set('dirty', false);
  }

  var valid = this.getValid();

  if (this.type_ === 'LineString') {
    if (coordinates.length >= this.minPoints_) {
      if (!valid) {
        this.set('valid', true);
      }
    } else {
      if (valid) {
        this.set('valid', false);
      }
    }
  }

  this.sketchPoint_ = null;
  this.updateSketchFeatures_();
};

exports.prototype.clearDrawing = function () {
  this.setActive(false);
  this.setActive(true);
};

exports.prototype.finishDrawing = function () {
  var active = this.getActive();
  var drawing = this.getDrawing();

  if (!active || !drawing) {
    return;
  }

  if (this.sketchPoint_) {
    this.addToDrawing();
  }

  this.set('drawing', false);
  var event = new ngeo_CustomEvent_js__WEBPACK_IMPORTED_MODULE_2__["default"]('drawend', {
    feature: this.sketchFeature_
  });
  this.dispatchEvent(event);
};

exports.prototype.startDrawing_ = function () {
  this.set('drawing', true);
  this.createOrUpdateSketchPoint_();
  this.updateSketchFeatures_();

  if (this.type_ === 'Point') {
    this.addToDrawing();
  }
};

exports.prototype.modifyDrawing_ = function () {
  if (!this.sketchFeature_) {
    return;
  }

  var center = this.getCenter_();

  if (this.type_ === 'LineString') {
    var sketchFeatureGeom = this.sketchFeature_.getGeometry();
    goog_asserts_js__WEBPACK_IMPORTED_MODULE_0__["default"].assertInstanceof(sketchFeatureGeom, ol_geom_SimpleGeometry_js__WEBPACK_IMPORTED_MODULE_9__["default"]);
    var coordinates = sketchFeatureGeom.getCoordinates();
    coordinates.pop();
    coordinates.push(center);
    sketchFeatureGeom.setCoordinates(coordinates);
  }

  var dirty = this.getDirty();

  if (!dirty) {
    this.set('dirty', true);
  }
};

exports.prototype.abortDrawing_ = function () {
  var sketchFeature = this.sketchFeature_;

  if (sketchFeature || this.sketchPoints_.length > 0) {
    this.sketchFeature_ = null;
    this.sketchPoint_ = null;
    this.overlay_.getSource().clear(true);
  }

  this.sketchPoints_ = [];
  this.set('dirty', false);
  this.set('drawing', false);
  this.set('valid', false);
  return sketchFeature;
};

exports.prototype.updateState_ = function () {
  var map = this.getMap();
  var active = this.getActive();

  if (!map || !active) {
    this.abortDrawing_();
  } else {
    this.startDrawing_();
  }

  this.overlay_.setMap(active ? map : null);
};

exports.prototype.handleViewCenterChange_ = function (evt) {
  var active = this.getActive();
  var drawing = this.getDrawing();

  if (!active || !drawing) {
    return;
  }

  this.createOrUpdateSketchPoint_();

  if (this.type_ === 'Point') {
    this.addToDrawing();
  } else {
    this.modifyDrawing_();
    this.updateSketchFeatures_();
  }
};

exports.prototype.createOrUpdateSketchPoint_ = function () {
  var center = this.getCenter_();

  if (this.sketchPoint_) {
    var geometry = this.getSketchPointGeometry_();
    geometry.setCoordinates(center);
  } else {
    this.sketchPoint_ = new ol_Feature_js__WEBPACK_IMPORTED_MODULE_5__["default"](new ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_8__["default"](center));
  }
};

exports.prototype.updateSketchFeatures_ = function () {
  var sketchFeatures = [];

  if (this.sketchFeature_) {
    sketchFeatures.push(this.sketchFeature_);
  }

  if (this.sketchPoint_) {
    sketchFeatures.push(this.sketchPoint_);
  }

  var overlaySource = this.overlay_.getSource();
  overlaySource.clear(true);
  overlaySource.addFeatures(sketchFeatures);
  overlaySource.addFeatures(this.sketchPoints_);
};

exports.prototype.getSketchPointGeometry_ = function () {
  goog_asserts_js__WEBPACK_IMPORTED_MODULE_0__["default"].assert(this.sketchPoint_, 'sketch point should be thruty');
  var geometry = this.sketchPoint_.getGeometry();
  goog_asserts_js__WEBPACK_IMPORTED_MODULE_0__["default"].assertInstanceof(geometry, ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_8__["default"]);
  return geometry;
};

exports.prototype.getCenter_ = function () {
  var center = this.getMap().getView().getCenter();
  goog_asserts_js__WEBPACK_IMPORTED_MODULE_0__["default"].assertArray(center);
  return center;
};

/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ 16:
/*!***********************************************************************************************************************!*\
  !*** multi ./contribs/gmf/examples/common_dependencies.js gmf/mainmodule.js ./contribs/gmf/examples/mobilemeasure.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./contribs/gmf/examples/common_dependencies.js */"./contribs/gmf/examples/common_dependencies.js");
__webpack_require__(/*! gmf/mainmodule.js */"./contribs/gmf/src/mainmodule.js");
module.exports = __webpack_require__(/*! ./contribs/gmf/examples/mobilemeasure.js */"./contribs/gmf/examples/mobilemeasure.js");


/***/ })

/******/ });
//# sourceMappingURL=mobilemeasure.js.map