(function(e){function o(o){var t=o[0];var l=o[1];var i=o[2];var s,d,u=0,f=[];for(;u<t.length;u++){d=t[u];if(a[d]){f.push(a[d][0])}a[d]=0}for(s in l){if(Object.prototype.hasOwnProperty.call(l,s)){e[s]=l[s]}}if(c)c(o);while(f.length){f.shift()()}r.push.apply(r,i||[]);return n()}function n(){var e;for(var o=0;o<r.length;o++){var n=r[o];var t=true;for(var i=1;i<n.length;i++){var s=n[i];if(a[s]!==0)t=false}if(t){r.splice(o--,1);e=l(l.s=n[0])}}return e}var t={};var a={15:0};var r=[];function l(o){if(t[o]){return t[o].exports}var n=t[o]={i:o,l:false,exports:{}};e[o].call(n.exports,n,n.exports,l);n.l=true;return n.exports}l.m=e;l.c=t;l.d=function(e,o,n){if(!l.o(e,o)){Object.defineProperty(e,o,{configurable:false,enumerable:true,get:n})}};l.r=function(e){Object.defineProperty(e,"__esModule",{value:true})};l.n=function(e){var o=e&&e.__esModule?function o(){return e["default"]}:function o(){return e};l.d(o,"a",o);return o};l.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)};l.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[];var s=i.push.bind(i);i.push=o;i=i.slice();for(var d=0;d<i.length;d++)o(i[d]);var c=s;r.push([368,0]);return n()})({327:function(e,o,n){"use strict";n.r(o);var t=n(480);var a=n(305);var r=n(367);var l=n(2);function i(e,o){if(!(e instanceof o)){throw new TypeError("Cannot call a class as a function")}}var s=angular.module("ngeoModal",[]);s.component_={template:'<div class="modal fade" tabindex="-1" role="dialog">\n    <div class="modal-dialog">\n      <div class="modal-content">\n        <ng-transclude></ng-transclude>\n      </div>\n    </div>\n  </div>',require:{ngModel:"ngModel"},transclude:true,controller:"ngeoModalController",bindings:{resizable:"<ngeoModalResizable",closable:"<ngeoModalClosable"}};s.component("ngeoModal",s.component_);s.Controller_=function(){e.$inject=["$scope","$element"];function e(o,n){i(this,e);this.$element_=n;this.$scope_=o;this.modal_;this.closable;this.resizable;this.ngModel}e.prototype.$onInit=function e(){var o=this;this.closable=this.closable!==false;this.modal_=this.$element_.children();if(!this.closable){this.modal_.attr("data-keyboard",false);this.modal_.attr("data-backdrop","static")}this.resizable=!!this.resizable;var n=this.modal_.find(".modal-dialog");n.draggable();if(this.resizable){n.resizable()}this.ngModel.$render=function(){o.modal_.modal(o.ngModel.$viewValue?"show":"hide")};this.modal_.on("shown.bs.modal hidden.bs.modal",function(e){var n=e.type;l["a"].assert(n=="shown"||n=="hidden");o.ngModel.$setViewValue(n=="shown")})};e.prototype.$onDestroy=function e(){this.modal_.modal("hide");this.modal_.modal("removeBackdrop");var o=this.modal_.find(".modal-dialog");o.draggable("destroy");if(this.resizable){o.resizable("destroy")}};return e}();s.controller("ngeoModalController",s.Controller_);var d=s;var c={};c.module=angular.module("app",["gettext",d.name]);c.MainController=function(){this.modalShown=false};c.module.controller("MainController",c.MainController);var u=o["default"]=c},368:function(e,o,n){n(55);n(54);e.exports=n(327)},480:function(e,o){}});
//# sourceMappingURL=modal.bdd29e.js.map