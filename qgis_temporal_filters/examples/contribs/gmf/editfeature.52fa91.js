(function(e){function t(t){var a=t[0];var o=t[1];var s=t[2];var l,u,p=0,c=[];for(;p<a.length;p++){u=a[p];if(n[u]){c.push(n[u][0])}n[u]=0}for(l in o){if(Object.prototype.hasOwnProperty.call(o,l)){e[l]=o[l]}}if(h)h(t);while(c.length){c.shift()()}i.push.apply(i,s||[]);return r()}function r(){var e;for(var t=0;t<i.length;t++){var r=i[t];var a=true;for(var s=1;s<r.length;s++){var l=r[s];if(n[l]!==0)a=false}if(a){i.splice(t--,1);e=o(o.s=r[0])}}return e}var a={};var n={23:0};var i=[];function o(t){if(a[t]){return a[t].exports}var r=a[t]={i:t,l:false,exports:{}};e[t].call(r.exports,r,r.exports,o);r.l=true;return r.exports}o.m=e;o.c=a;o.d=function(e,t,r){if(!o.o(e,t)){Object.defineProperty(e,t,{configurable:false,enumerable:true,get:r})}};o.r=function(e){Object.defineProperty(e,"__esModule",{value:true})};o.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};o.d(t,"a",t);return t};o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[];var l=s.push.bind(s);s.push=t;s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var h=l;i.push([448,0]);return r()})({447:function(e,t,r){"use strict";r.r(t);(function(e){var a=r(564);var n=r.n(a);var i=r(279);var o=r.n(i);var s=r(58);var l=r(185);var u=r(190);var h=r(55);var p=r(14);var c=r(36);var d=r(46);var f=r(4);var v=r(87);var m=r(30);var g=r(104);var _=r(52);var y=r(115);var w={};w.module=angular.module("gmfapp",["gettext",l["a"].name,u["a"].module.name,h["a"].name]);w.module.value("authenticationBaseUrl","https://geomapfish-demo.camptocamp.com/2.3/wsgi");w.module.value("gmfLayersUrl","https://geomapfish-demo.camptocamp.com/2.3/wsgi/layers/");w.module.constant("defaultTheme","Demo");w.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js");w.MainController=function(t,r,a){this.scope_=t;this.editFeature_=r;this.gmfUser=a;this.wmsSource_=new y["a"]({url:"https://geomapfish-demo.camptocamp.com/2.3/wsgi/mapserv_proxy",params:{LAYERS:"point"}});this.wmsLayer_=new g["a"]({source:this.wmsSource_});this.pixelBuffer_=10;this.layerId_=113;this.feature=null;this.pending=false;this.map=new c["a"]({layers:[new m["a"]({source:new _["a"]}),this.wmsLayer_],view:new d["a"]({projection:s["a"],resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[537635,152640],zoom:2})});this.map.on("singleclick",this.handleMapSingleClick_.bind(this));e('[data-toggle="tooltip"]').tooltip({container:"body",trigger:"hover"})};w.MainController.$inject=["$scope","gmfEditFeature","gmfUser"];w.MainController.prototype.handleMapSingleClick_=function(e){var t=e.coordinate;var r=this.map;var a=r.getView();var n=a.getResolution();var i=n*this.pixelBuffer_;var o=f["c"]([t[0],t[1],t[0],t[1]],i);this.editFeature_.getFeaturesInExtent([this.layerId_],o).then(this.handleGetFeatures_.bind(this));this.feature=null;this.pending=true;this.scope_.$apply()};w.MainController.prototype.handleGetFeatures_=function(e){this.pending=false;if(e.length){this.feature=e[0]}};w.MainController.prototype.insertFeature=function(){this.pending=true;var e=this.map;var t=e.getView();var r=t.getResolution();var a=r*-50;var n=e.getSize();var i=f["c"](t.calculateExtent(n),a);var o=f["v"](i);var s=f["D"](i);var l=o[0];var u=o[1];var h=s[0];var c=s[1];var d=h-l;var m=c-u;var g=[l+Math.random()*d,u+Math.random()*m];var _=new p["a"]({geometry:new v["a"]([g]),name:"New point"});this.feature=null;this.editFeature_.insertFeatures(this.layerId_,[_]).then(this.handleEditFeature_.bind(this))};w.MainController.prototype.updateFeature=function(){console.assert(this.feature);this.pending=true;this.feature.set("name","Updated name");this.editFeature_.updateFeature(this.layerId_,this.feature).then(this.handleEditFeature_.bind(this))};w.MainController.prototype.deleteFeature=function(){console.assert(this.feature);this.editFeature_.deleteFeature(this.layerId_,this.feature).then(this.handleEditFeature_.bind(this));this.feature=null};w.MainController.prototype.handleEditFeature_=function(e){this.pending=false;this.refreshWMSLayer_()};w.MainController.prototype.refreshWMSLayer_=function(){this.wmsSource_.updateParams({random:Math.random()})};w.module.controller("MainController",w.MainController);t["default"]=w}).call(this,r(40))},448:function(e,t,r){r(73);r(72);e.exports=r(447)},564:function(e,t){}});
//# sourceMappingURL=editfeature.52fa91.js.map