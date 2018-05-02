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
/******/ 		"disclaimer": 0
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
/******/ 	deferredModules.push([12,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/disclaimer.css":
/*!*********************************!*\
  !*** ./examples/disclaimer.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./examples/disclaimer.js":
/*!********************************!*\
  !*** ./examples/disclaimer.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _disclaimer_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./disclaimer.css */ "./examples/disclaimer.css");
/* harmony import */ var _disclaimer_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_disclaimer_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery_ui_ui_widgets_tooltip_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery-ui/ui/widgets/tooltip.js */ "./node_modules/jquery-ui/ui/widgets/tooltip.js");
/* harmony import */ var jquery_ui_ui_widgets_tooltip_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_ui_widgets_tooltip_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ngeo_message_Disclaimer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/message/Disclaimer.js */ "./src/message/Disclaimer.js");
/* harmony import */ var ngeo_message_Message_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngeo/message/Message.js */ "./src/message/Message.js");
/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/Map.js */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/View.js */ "./node_modules/ol/View.js");
/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/layer/Tile.js */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/source/OSM.js */ "./node_modules/ol/source/OSM.js");
/* harmony import */ var ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngeo/map/module.js */ "./src/map/module.js");
var exports = {};









exports.module = angular.module('app', ['gettext', ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_8__["default"].name, ngeo_message_Disclaimer_js__WEBPACK_IMPORTED_MODULE_2__["default"].module.name]);

exports.MainController = function (ngeoDisclaimer) {
  this.disclaimer = ngeoDisclaimer;
  this.map = new ol_Map_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
    layers: [new ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
      source: new ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_7__["default"]()
    })],
    view: new ol_View_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
      center: [0, 0],
      zoom: 4
    })
  });
  this.successMsg_ = 'Disclaimer with success style';
  this.infoMsg_ = 'Disclaimer with info style';
  this.warningMsg_ = 'Disclaimer with warning style';
  this.errorMsg_ = 'Disclaimer with error style';
  this.inMapMsgs_ = ['Disclaimer inside the map', 'An other message ', 'Map contributors', 'This is a long message inside a map'];
  $('[data-toggle="tooltip"]').tooltip({
    container: 'body',
    trigger: 'hover'
  });
};

exports.MainController.$inject = ["ngeoDisclaimer"];

exports.MainController.prototype.success = function () {
  this.disclaimer.success(this.successMsg_);
};

exports.MainController.prototype.info = function () {
  this.disclaimer.info(this.infoMsg_);
};

exports.MainController.prototype.warn = function () {
  this.disclaimer.warn(this.warningMsg_);
};

exports.MainController.prototype.error = function () {
  this.disclaimer.error(this.errorMsg_);
};

exports.MainController.prototype.inMap = function () {
  this.inMapMsgs_.forEach(function (message) {
    this.disclaimer.alert({
      msg: message,
      target: angular.element('#disclaimers-in-map'),
      type: ngeo_message_Message_js__WEBPACK_IMPORTED_MODULE_3__["default"].Type.WARNING
    });
  }, this);
};

exports.MainController.prototype.closeAll = function () {
  this.disclaimer.close({
    msg: this.successMsg_,
    type: ngeo_message_Message_js__WEBPACK_IMPORTED_MODULE_3__["default"].Type.SUCCESS
  });
  this.disclaimer.close({
    msg: this.infoMsg_,
    type: ngeo_message_Message_js__WEBPACK_IMPORTED_MODULE_3__["default"].Type.INFORMATION
  });
  this.disclaimer.close({
    msg: this.warningMsg_,
    type: ngeo_message_Message_js__WEBPACK_IMPORTED_MODULE_3__["default"].Type.WARNING
  });
  this.disclaimer.close({
    msg: this.errorMsg_,
    type: ngeo_message_Message_js__WEBPACK_IMPORTED_MODULE_3__["default"].Type.ERROR
  });
  this.inMapMsgs_.forEach(function (message) {
    this.disclaimer.close({
      msg: message,
      type: ngeo_message_Message_js__WEBPACK_IMPORTED_MODULE_3__["default"].Type.WARNING
    });
  }, this);
};

exports.module.controller('MainController', exports.MainController);
/* harmony default export */ __webpack_exports__["default"] = (exports);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/message/Disclaimer.js":
/*!***********************************!*\
  !*** ./src/message/Disclaimer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_js_src_alert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/js/src/alert.js */ "./node_modules/bootstrap/js/src/alert.js");
/* harmony import */ var goog_asserts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! goog/asserts.js */ "./src/goog.asserts.js");
/* harmony import */ var ngeo_message_Popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/message/Popup.js */ "./src/message/Popup.js");
/* harmony import */ var ngeo_message_Message_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngeo/message/Message.js */ "./src/message/Message.js");
/* harmony import */ var ol_util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/util.js */ "./node_modules/ol/util.js");
/* harmony import */ var ngeo_sass_font_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngeo/sass/font.scss */ "./src/sass/font.scss");
/* harmony import */ var ngeo_sass_font_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngeo_sass_font_scss__WEBPACK_IMPORTED_MODULE_5__);







var exports = function exports($sce, gettextCatalog, ngeoCreatePopup) {
  this.sce_ = $sce;
  this.gettextCatalog_ = gettextCatalog;
  this.createPopup_ = ngeoCreatePopup;
  ngeo_message_Message_js__WEBPACK_IMPORTED_MODULE_3__["default"].call(this);
  var container = angular.element('<div class="ngeo-disclaimer"></div>');
  angular.element(document.body).append(container);
  this.container_ = container;
  this.messages_ = {};
};

exports.$inject = ["$sce", "gettextCatalog", "ngeoCreatePopup"];
exports.$inject = ["$sce", "gettextCatalog", "ngeoCreatePopup"];
Object(ol_util_js__WEBPACK_IMPORTED_MODULE_4__["inherits"])(exports, ngeo_message_Message_js__WEBPACK_IMPORTED_MODULE_3__["default"]);

exports.prototype.alert = function (object) {
  this.show(object);
};

exports.prototype.close = function (object) {
  var msgObjects = this.getMessageObjects(object);
  msgObjects.forEach(this.closeMessage_, this);
};

exports.prototype.showMessage = function (message) {
  var _this = this;

  var gettextCatalog = this.gettextCatalog_;
  var type = message.type;
  goog_asserts_js__WEBPACK_IMPORTED_MODULE_1__["default"].assertString(type, 'Type should be set.');
  var uid = this.getMessageUid_(message);

  if (this.messages_[uid] !== undefined) {
    return;
  }

  var showInPopup = message.popup === true;

  if (showInPopup) {
    var popup = this.createPopup_();
    var content = this.sce_.trustAsHtml(message.msg);
    popup.open({
      autoDestroy: true,
      content: content,
      title: '&nbsp;'
    });
    popup.scope.$watch('open', function (newVal, oldVal) {
      if (!newVal) {
        _this.closeMessage_(message);
      }
    });
    this.messages_[uid] = popup;
  } else {
    var classNames = ['alert', 'fade', 'alert-dismissible', 'show'];

    switch (type) {
      case ngeo_message_Message_js__WEBPACK_IMPORTED_MODULE_3__["default"].Type.ERROR:
        classNames.push('alert-danger');
        break;

      case ngeo_message_Message_js__WEBPACK_IMPORTED_MODULE_3__["default"].Type.INFORMATION:
        classNames.push('alert-info');
        break;

      case ngeo_message_Message_js__WEBPACK_IMPORTED_MODULE_3__["default"].Type.SUCCESS:
        classNames.push('alert-success');
        break;

      case ngeo_message_Message_js__WEBPACK_IMPORTED_MODULE_3__["default"].Type.WARNING:
        classNames.push('alert-warning');
        break;

      default:
        break;
    }

    var el = angular.element("<div role=\"alert\" class=\"" + classNames.join(' ') + "\"></div>");
    var button = angular.element("<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"" + gettextCatalog.getString('Close') + "\"><span aria-hidden=\"true\" class=\"fa fa-times\"></span></button>");
    var msg = angular.element('<span />').html(message.msg);
    el.append(button).append(msg);
    var container;

    if (message.target) {
      container = angular.element(message.target);
    } else {
      container = this.container_;
    }

    container.append(el);
    el.addClass('show');
    el.on('closed.bs.alert', function () {
      _this.closeMessage_(message);
    });
    this.messages_[uid] = el;
  }
};

exports.prototype.getMessageUid_ = function (message) {
  return message.msg + "-" + message.type;
};

exports.prototype.closeMessage_ = function (message) {
  var uid = this.getMessageUid_(message);
  var obj = this.messages_[uid];

  if (obj === undefined) {
    return;
  }

  if (obj instanceof ngeo_message_Popup_js__WEBPACK_IMPORTED_MODULE_2__["default"]) {
    if (obj.getOpen()) {
      obj.setOpen(false);
    }
  } else {
    if (obj.hasClass('show')) {
      obj.alert('close');
    }
  }

  delete this.messages_[uid];
};

exports.module = angular.module('ngeoDisclaimer', [ngeo_message_Popup_js__WEBPACK_IMPORTED_MODULE_2__["default"].module.name]);
exports.module.service('ngeoDisclaimer', exports);
/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ 12:
/*!*******************************************************************************************!*\
  !*** multi ./examples/common_dependencies.js ngeo/mainmodule.js ./examples/disclaimer.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./examples/common_dependencies.js */"./examples/common_dependencies.js");
__webpack_require__(/*! ngeo/mainmodule.js */"./src/mainmodule.js");
module.exports = __webpack_require__(/*! ./examples/disclaimer.js */"./examples/disclaimer.js");


/***/ })

/******/ });
//# sourceMappingURL=disclaimer.js.map