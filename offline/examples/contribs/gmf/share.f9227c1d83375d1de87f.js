webpackJsonp([28],{251:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=a(r(2)),l=a(r(1));function a(e){return e&&e.__esModule?e:{default:e}}var i=angular.module("ngeoModal",[]);l.default.module.requires.push(i.name),i.component_={template:'<div class="modal fade" tabindex="-1" role="dialog">\n    <div class="modal-dialog">\n      <div class="modal-content">\n        <ng-transclude></ng-transclude>\n      </div>\n    </div>\n  </div>',require:{ngModel:"ngModel"},transclude:!0,controller:"ngeoModalController",bindings:{resizable:"<ngeoModalResizable"}},i.component("ngeoModal",i.component_),i.Controller_=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$element_=r,this.$scope_=t,this.modal_,this.resizable,this.ngModel}return e.$inject=["$scope","$element"],n(e,[{key:"$onInit",value:function(){var e=this;this.modal_=this.$element_.children(),this.resizable=!!this.resizable;var t=this.modal_.find(".modal-dialog");t.draggable(),this.resizable&&t.resizable(),this.ngModel.$render=function(){e.modal_.modal(e.ngModel.$viewValue?"show":"hide")},this.modal_.on("shown.bs.modal hidden.bs.modal",function(t){var r=t.type;o.default.assert("shown"==r||"hidden"==r),e.$scope_.$apply(function(){e.ngModel.$setViewValue("shown"==r)})})}},{key:"$onDestroy",value:function(){var e=this.modal_.find(".modal-dialog");e.draggable("destroy"),this.resizable&&e.resizable("destroy")}}]),e}(),i.controller("ngeoModalController",i.Controller_),t.default=i},513:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(514),r(167);var n=a(r(8)),o=a(r(515)),l=a(r(251));function a(e){return e&&e.__esModule?e:{default:e}}var i={};i.module=angular.module("gmfapp",[n.default.module.name,l.default.name,o.default.name]),i.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),i.constant("gmfShortenerCreateUrl","https://geomapfish-demo.camptocamp.net/2.2/wsgi/short/create"),i.MainController=function(){this.modalShareWithEmailShown=!1,this.modalShareShown=!1},i.module.controller("MainController",i.MainController),t.default=i},514:function(e,t){},515:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(r(8)),o=l(r(516));function l(e){return e&&e.__esModule?e:{default:e}}var a=angular.module("",[o.default.module.name]);n.default.module.requires.push(a.name),a.component_={bindings:{enableEmail:"<gmfShareEmail"},controller:"GmfShareController",templateUrl:function(){return n.default.baseModuleTemplateUrl+"/permalink/shareComponent.html"}},a.component("gmfShare",a.component_),a.Controller_=function(e,t,r,n,l){this.$scope_=e,this.gmfShareService_=r,this.$q_=n,this.ngeoLocation_=t,this.enableEmail,this.permalink=t.getUriString(),this.shortLink,this.email,this.message,this.showLengthWarning=this.permalink.length>o.default.URL_MAX_LEN||t.getPath()>o.default.URL_PATH_MAX_LEN,this.successfullySent=!1,this.errorOnsend=!1,this.errorOnGetShortUrl=!1,this.getShortUrl()},a.Controller_.$inject=["$scope","ngeoLocation","gmfShareService","$q","$attrs"],a.Controller_.prototype.getShortUrl=function(){this.$q_.when(this.gmfShareService_.getShortUrl(this.permalink)).then(function(e){this.shortLink=e.data.short_url,this.errorOnGetShortUrl=!1}.bind(this),function(e){this.shortLink=this.permalink,this.errorOnGetShortUrl=!0}.bind(this))},a.Controller_.prototype.sendShortUrl=function(){this.$scope_.gmfShareForm.$valid&&this.$q_.when(this.gmfShareService_.sendShortUrl(this.permalink,this.email,this.message)).then(function(e){this.successfullySent=!0}.bind(this),function(e){this.errorOnsend=!0}.bind(this))},a.controller("GmfShareController",a.Controller_),t.default=a},516:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(8),l=(n=o)&&n.__esModule?n:{default:n};var a=function(e,t){this.$http_=e,this.gmfShortenerCreateUrl_=t};a.$inject=["$http","gmfShortenerCreateUrl"],a.$inject=["$http","gmfShortenerCreateUrl"],a.prototype.getShortUrl=function(e){var t={url:e};return this.gmfShortenerCreateUrl_?this.postShortUrl_(t):{data:{short_url:e},status:200}},a.prototype.sendShortUrl=function(e,t,r){var n={url:e,email:t};return r&&(n.message=r),this.postShortUrl_(n)},a.prototype.postShortUrl_=function(t){return this.$http_.post(this.gmfShortenerCreateUrl_,e.param(t),{headers:{"Content-Type":"application/x-www-form-urlencoded"}})},a.URL_MAX_LEN=2083,a.URL_PATH_MAX_LEN=2048,a.module=angular.module("gmfShareService",[]),l.default.module.requires.push(a.module.name),a.module.service("gmfShareService",a),t.default=a}).call(t,r(27))}},[513]);
//# sourceMappingURL=share.f9227c1d83375d1de87f.js.map