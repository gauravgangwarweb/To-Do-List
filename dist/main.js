/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Dosis:wght@300&family=Nerko+One&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  font-family: 'Dosis', sans-serif;\r\n  font-style: normal;\r\n  background: #15202b;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\nmain {\r\n  width: 40%;\r\n  margin-top: 0;\r\n}\r\n\r\n.shadow {\r\n  color: #15202b;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  text-transform: uppercase;\r\n  position: relative;\r\n  background: #fff;\r\n}\r\n\r\n.shadow::before,\r\n.shadow::after {\r\n  content: '';\r\n  position: absolute;\r\n  top: -4px;\r\n  left: -4px;\r\n  background: linear-gradient(45deg, red, blue, green, yellow, #e11d74, black, #ff0, #a00);\r\n  background-size: 400%;\r\n  width: calc(100% + 4px);\r\n  height: calc(100% + 4px);\r\n  z-index: -1;\r\n  animation: animate 30s linear infinite;\r\n}\r\n\r\n.shadow::after {\r\n  filter: blur(25px);\r\n}\r\n\r\n@keyframes animate {\r\n  0% {\r\n    background-position: 0 0;\r\n  }\r\n\r\n  50% {\r\n    background-position: 400% 0;\r\n  }\r\n\r\n  100% {\r\n    background-position: 0 0;\r\n  }\r\n}\r\n\r\n.list {\r\n  min-width: 55%;\r\n  margin-top: 130px;\r\n  box-shadow: 2px 10px 30px rgba(0, 0, 0, 0.1);\r\n  background-color: #fff;\r\n}\r\n\r\n.list-title {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  justify-items: center;\r\n  padding: 20px;\r\n  border-bottom: 1px solid #d3d3d3;\r\n}\r\n\r\n.title {\r\n  color: #000;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 25px;\r\n  line-height: 80%;\r\n}\r\n\r\n.list-form {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  justify-items: center;\r\n  padding: 20px;\r\n  border-bottom: 1px solid #d3d3d3;\r\n}\r\n\r\n.input-task {\r\n  outline: none;\r\n  color: #000;\r\n  border: none;\r\n  font-size: 20px;\r\n  line-height: 80%;\r\n  font-style: italic;\r\n}\r\n\r\n.btn-form {\r\n  font-size: 20px;\r\n  background-color: transparent;\r\n  border: none;\r\n  cursor: pointer;\r\n  padding-right: 0;\r\n}\r\n\r\n.list-item {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  justify-items: center;\r\n  padding: 20px;\r\n  border-bottom: 1px solid #d3d3d3;\r\n}\r\n\r\n.task-item {\r\n  color: #000;\r\n  font-size: 20px;\r\n  line-height: 80%;\r\n  border-bottom: 1px solid #d3d3d3;\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  display: flex;\r\n  align-items: center;\r\n  position: relative;\r\n  -webkit-animation: slide 0.5s forwards;\r\n  -webkit-animation-delay: 2s;\r\n  animation: slide 0.5s forwards;\r\n  animation-delay: 2s;\r\n}\r\n\r\n@-webkit-keyframes slide {\r\n  100% { left: 0; }\r\n}\r\n\r\n@keyframes slide {\r\n  100% { left: 0; }\r\n}\r\n\r\n.task-check {\r\n  margin-right: 10px;\r\n  width: 15px;\r\n  height: 15px;\r\n  border: 1px solid #a9a9a9;\r\n  cursor: pointer;\r\n}\r\n\r\na {\r\n  color: #000;\r\n}\r\n\r\n.task-ins {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.task-ins:focus {\r\n  background-color: aquamarine;\r\n}\r\n\r\n.task-option {\r\n  cursor: all-scroll;\r\n}\r\n\r\n.task-details {\r\n  padding: 10px 2px;\r\n  border: 0;\r\n  font-size: 20px;\r\n}\r\n\r\n.task-details:focus {\r\n  outline: none;\r\n}\r\n\r\n.fa-ellipsis-v,\r\n.fa-trash-can {\r\n  position: absolute;\r\n  right: 2%;\r\n  top: 30%;\r\n  cursor: pointer;\r\n}\r\n\r\n.footer {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\r\n  background-color: #d3d3d3;\r\n}\r\n\r\n.footer a {\r\n  text-decoration: none;\r\n  font-size: 20px;\r\n}\r\n\r\n.empty {\r\n  display: flex;\r\n  justify-content: center;\r\n  color: yellow;\r\n  margin-top: 20px;\r\n  font-size: 30px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,gCAAgC;EAChC,kBAAkB;EAClB,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,aAAa;AACf;;AAEA;EACE,cAAc;EACd,yCAAyC;EACzC,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;;EAEE,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,wFAAwF;EACxF,qBAAqB;EACrB,uBAAuB;EACvB,wBAAwB;EACxB,WAAW;EACX,sCAAsC;AACxC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE;IACE,wBAAwB;EAC1B;;EAEA;IACE,2BAA2B;EAC7B;;EAEA;IACE,wBAAwB;EAC1B;AACF;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,4CAA4C;EAC5C,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,qBAAqB;EACrB,aAAa;EACb,gCAAgC;AAClC;;AAEA;EACE,WAAW;EACX,kCAAkC;EAClC,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,qBAAqB;EACrB,aAAa;EACb,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,WAAW;EACX,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,6BAA6B;EAC7B,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,qBAAqB;EACrB,aAAa;EACb,gCAAgC;AAClC;;AAEA;EACE,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,gCAAgC;EAChC,iBAAiB;EACjB,oBAAoB;EACpB,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,sCAAsC;EACtC,2BAA2B;EAC3B,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,OAAO,OAAO,EAAE;AAClB;;AAEA;EACE,OAAO,OAAO,EAAE;AAClB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;;EAEE,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,iBAAiB;EACjB,oBAAoB;EACpB,yBAAyB;AAC3B;;AAEA;EACE,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,aAAa;EACb,gBAAgB;EAChB,eAAe;AACjB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@300&family=Nerko+One&display=swap');\r\n\r\nbody {\r\n  font-family: 'Dosis', sans-serif;\r\n  font-style: normal;\r\n  background: #15202b;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\nmain {\r\n  width: 40%;\r\n  margin-top: 0;\r\n}\r\n\r\n.shadow {\r\n  color: #15202b;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  text-transform: uppercase;\r\n  position: relative;\r\n  background: #fff;\r\n}\r\n\r\n.shadow::before,\r\n.shadow::after {\r\n  content: '';\r\n  position: absolute;\r\n  top: -4px;\r\n  left: -4px;\r\n  background: linear-gradient(45deg, red, blue, green, yellow, #e11d74, black, #ff0, #a00);\r\n  background-size: 400%;\r\n  width: calc(100% + 4px);\r\n  height: calc(100% + 4px);\r\n  z-index: -1;\r\n  animation: animate 30s linear infinite;\r\n}\r\n\r\n.shadow::after {\r\n  filter: blur(25px);\r\n}\r\n\r\n@keyframes animate {\r\n  0% {\r\n    background-position: 0 0;\r\n  }\r\n\r\n  50% {\r\n    background-position: 400% 0;\r\n  }\r\n\r\n  100% {\r\n    background-position: 0 0;\r\n  }\r\n}\r\n\r\n.list {\r\n  min-width: 55%;\r\n  margin-top: 130px;\r\n  box-shadow: 2px 10px 30px rgba(0, 0, 0, 0.1);\r\n  background-color: #fff;\r\n}\r\n\r\n.list-title {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  justify-items: center;\r\n  padding: 20px;\r\n  border-bottom: 1px solid #d3d3d3;\r\n}\r\n\r\n.title {\r\n  color: #000;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 25px;\r\n  line-height: 80%;\r\n}\r\n\r\n.list-form {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  justify-items: center;\r\n  padding: 20px;\r\n  border-bottom: 1px solid #d3d3d3;\r\n}\r\n\r\n.input-task {\r\n  outline: none;\r\n  color: #000;\r\n  border: none;\r\n  font-size: 20px;\r\n  line-height: 80%;\r\n  font-style: italic;\r\n}\r\n\r\n.btn-form {\r\n  font-size: 20px;\r\n  background-color: transparent;\r\n  border: none;\r\n  cursor: pointer;\r\n  padding-right: 0;\r\n}\r\n\r\n.list-item {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  justify-items: center;\r\n  padding: 20px;\r\n  border-bottom: 1px solid #d3d3d3;\r\n}\r\n\r\n.task-item {\r\n  color: #000;\r\n  font-size: 20px;\r\n  line-height: 80%;\r\n  border-bottom: 1px solid #d3d3d3;\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  display: flex;\r\n  align-items: center;\r\n  position: relative;\r\n  -webkit-animation: slide 0.5s forwards;\r\n  -webkit-animation-delay: 2s;\r\n  animation: slide 0.5s forwards;\r\n  animation-delay: 2s;\r\n}\r\n\r\n@-webkit-keyframes slide {\r\n  100% { left: 0; }\r\n}\r\n\r\n@keyframes slide {\r\n  100% { left: 0; }\r\n}\r\n\r\n.task-check {\r\n  margin-right: 10px;\r\n  width: 15px;\r\n  height: 15px;\r\n  border: 1px solid #a9a9a9;\r\n  cursor: pointer;\r\n}\r\n\r\na {\r\n  color: #000;\r\n}\r\n\r\n.task-ins {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.task-ins:focus {\r\n  background-color: aquamarine;\r\n}\r\n\r\n.task-option {\r\n  cursor: all-scroll;\r\n}\r\n\r\n.task-details {\r\n  padding: 10px 2px;\r\n  border: 0;\r\n  font-size: 20px;\r\n}\r\n\r\n.task-details:focus {\r\n  outline: none;\r\n}\r\n\r\n.fa-ellipsis-v,\r\n.fa-trash-can {\r\n  position: absolute;\r\n  right: 2%;\r\n  top: 30%;\r\n  cursor: pointer;\r\n}\r\n\r\n.footer {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\r\n  background-color: #d3d3d3;\r\n}\r\n\r\n.footer a {\r\n  text-decoration: none;\r\n  font-size: 20px;\r\n}\r\n\r\n.empty {\r\n  display: flex;\r\n  justify-content: center;\r\n  color: yellow;\r\n  margin-top: 20px;\r\n  font-size: 30px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/crud.js":
/*!*********************!*\
  !*** ./src/crud.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addFunction": () => (/* binding */ addFunction),
/* harmony export */   "removeFunction": () => (/* binding */ removeFunction),
/* harmony export */   "showFunction": () => (/* binding */ showFunction),
/* harmony export */   "stordata": () => (/* binding */ stordata)
/* harmony export */ });
const tasksarray = [];
const Input = document.getElementById('task');
const emptyDiv = document.querySelector('.empty');
const stordata = JSON.parse(localStorage.getItem('tasks'));

// Addfunction
const addFunction = () => {
  if (!Input.value) {
    emptyDiv.innerText = 'Please give a input';
  } else {
    const model = {
      description: Input.value,
      completed: false,
      index: 1,
    };
    if (!stordata) {
      tasksarray.push(model);
      localStorage.setItem('tasks', JSON.stringify(tasksarray));
    } else {
      stordata.push(model);
      localStorage.setItem('tasks', JSON.stringify(stordata));
    }
    window.location.reload();
  }
};

// Show function
const showFunction = () => {
  const listBlock = document.querySelector('.list-block');
  if (!stordata || !stordata[0]) {
    listBlock.innerHTML = '<div></div>';
  } else {
    for (let i = 0; i < stordata.length; i += 1) {
      stordata[i].index = i + 1;
      localStorage.setItem('tasks', JSON.stringify(stordata));
      let check = '';
      if (stordata[i].completed === true) {
        check = 'checked';
      } else {
        check = '';
      }
      const temp = i;
      const Takstemplate = `
              <div class="task-item">
                <input type="checkbox" class="task-check" name="task-check" ${check}>
                <div class="task-ins">
                <input id="${temp}" class="task-details t${temp}" type="text" value="${stordata[temp].description}" readonly>
                <a href="#" class="task-option"><i data-id="el${temp}" class="fa fa-ellipsis-v el${temp}"></i></a>                
                </div>
              </div>
            `;
      listBlock.innerHTML += Takstemplate;
    }
  }
};

// Remove function
const removeFunction = (id) => {
  stordata.splice(id, 1);
  localStorage.setItem('tasks', JSON.stringify(stordata));
};

/***/ }),

/***/ "./src/interactive.js":
/*!****************************!*\
  !*** ./src/interactive.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compTask": () => (/* binding */ compTask),
/* harmony export */   "removeCheckedTasks": () => (/* binding */ removeCheckedTasks)
/* harmony export */ });
/* harmony import */ var _crud_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crud.js */ "./src/crud.js");


// Setting description value
const compTask = (i) => {
  if (_crud_js__WEBPACK_IMPORTED_MODULE_0__.stordata[i].completed === false) {
    _crud_js__WEBPACK_IMPORTED_MODULE_0__.stordata[i].completed = true;
    localStorage.setItem('tasks', JSON.stringify(_crud_js__WEBPACK_IMPORTED_MODULE_0__.stordata));
  } else {
    _crud_js__WEBPACK_IMPORTED_MODULE_0__.stordata[i].completed = false;
    localStorage.setItem('tasks', JSON.stringify(_crud_js__WEBPACK_IMPORTED_MODULE_0__.stordata));
  }
};

// Removing checked items
const removeCheckedTasks = () => {
  const newArr = _crud_js__WEBPACK_IMPORTED_MODULE_0__.stordata.filter((t) => t.completed === false);
  localStorage.setItem('tasks', JSON.stringify(newArr));
  window.location.reload();
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _crud_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crud.js */ "./src/crud.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interactive.js */ "./src/interactive.js");




const addBtn = document.getElementById('addBtn');

// Showing tasks
(0,_crud_js__WEBPACK_IMPORTED_MODULE_1__.showFunction)();

// Adding task
addBtn.addEventListener('click', _crud_js__WEBPACK_IMPORTED_MODULE_1__.addFunction);

// Removing task
const remBtns = document.querySelectorAll('.fa');

remBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let temp = e.currentTarget.dataset;
    temp = +temp.id[temp.id.length - 1];
    (0,_crud_js__WEBPACK_IMPORTED_MODULE_1__.removeFunction)(temp);
    window.location.reload();
  });
});

// Showing remove btn
const showRembtn = document.querySelectorAll('.fa-ellipsis-v');
showRembtn.forEach((btn) => {
  btn.addEventListener('mouseover', (e) => {
    let temp = e.currentTarget.dataset;
    temp = +temp.id[temp.id.length - 1];
    const tempElps = document.querySelector(`.el${temp}`);
    tempElps.classList.remove('fa-ellipsis-v');
    tempElps.classList.add('fa-trash-can');
  });
  btn.addEventListener('mouseleave', (e) => {
    let temp = e.currentTarget.dataset;
    temp = +temp.id[temp.id.length - 1];
    const tempElps = document.querySelector(`.el${temp}`);
    tempElps.classList.add('fa-ellipsis-v');
    tempElps.classList.remove('fa-trash-can');
  });
});

// Updating tasks
const taskInps = document.querySelectorAll('.task-details');
taskInps.forEach((inp) => {
  inp.addEventListener('click', (f) => {
    const temp = f.currentTarget.id;
    const inpAttr = document.getElementById(temp);
    inpAttr.removeAttribute('readonly');
  });
});
taskInps.forEach((inp) => {
  inp.addEventListener('keyup', (f) => {
    const temp = f.currentTarget.id;
    const inpValue = document.getElementById(temp);
    _crud_js__WEBPACK_IMPORTED_MODULE_1__.stordata[temp].description = inpValue.value;
    localStorage.setItem('tasks', JSON.stringify(_crud_js__WEBPACK_IMPORTED_MODULE_1__.stordata));
  });
});

// Interactiveness
const checkBox = document.querySelectorAll('.task-check');
checkBox.forEach((check, index) => {
  check.addEventListener('change', () => {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.compTask)(index);
  });
});

const clearAll = document.getElementById('clear');
clearAll.addEventListener('click', () => {
  (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.removeCheckedTasks)();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBR0Y7QUFDNkM7O0FBRWhFOztBQUVBO0FBQ0Esc0RBQVk7O0FBRVo7QUFDQSxpQ0FBaUMsaURBQVc7O0FBRTVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdEQUFjO0FBQ2xCO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELEtBQUs7QUFDdkQ7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsS0FBSztBQUN2RDtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4Q0FBUTtBQUNaLGlEQUFpRCw4Q0FBUTtBQUN6RCxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQVE7QUFDWixHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsRUFBRSxtRUFBa0I7QUFDcEIsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vVG8gRG8gTGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL1RvIERvIExpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL1RvIERvIExpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL1RvIERvIExpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0Ly4vc3JjL2NydWQuanMiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdC8uL3NyYy9pbnRlcmFjdGl2ZS5qcyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RvIERvIExpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1RvIERvIExpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RG9zaXM6d2dodEAzMDAmZmFtaWx5PU5lcmtvK09uZSZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnRG9zaXMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgYmFja2dyb3VuZDogIzE1MjAyYjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIG1hcmdpbi10b3A6IDA7XFxyXFxufVxcclxcblxcclxcbi5zaGFkb3cge1xcclxcbiAgY29sb3I6ICMxNTIwMmI7XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hhZG93OjpiZWZvcmUsXFxyXFxuLnNoYWRvdzo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IC00cHg7XFxyXFxuICBsZWZ0OiAtNHB4O1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZWQsIGJsdWUsIGdyZWVuLCB5ZWxsb3csICNlMTFkNzQsIGJsYWNrLCAjZmYwLCAjYTAwKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogNDAwJTtcXHJcXG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA0cHgpO1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgKyA0cHgpO1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxuICBhbmltYXRpb246IGFuaW1hdGUgMzBzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNoYWRvdzo6YWZ0ZXIge1xcclxcbiAgZmlsdGVyOiBibHVyKDI1cHgpO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGFuaW1hdGUge1xcclxcbiAgMCUge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA1MCUge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0MDAlIDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubGlzdCB7XFxyXFxuICBtaW4td2lkdGg6IDU1JTtcXHJcXG4gIG1hcmdpbi10b3A6IDEzMHB4O1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC10aXRsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDNkM2QzO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxuICBsaW5lLWhlaWdodDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkM2QzZDM7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC10YXNrIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA4MCU7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbi5idG4tZm9ybSB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWl0ZW0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QzZDNkMztcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staXRlbSB7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA4MCU7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QzZDNkMztcXHJcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZSAwLjVzIGZvcndhcmRzO1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDJzO1xcclxcbiAgYW5pbWF0aW9uOiBzbGlkZSAwLjVzIGZvcndhcmRzO1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAycztcXHJcXG59XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlIHtcXHJcXG4gIDEwMCUgeyBsZWZ0OiAwOyB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2xpZGUge1xcclxcbiAgMTAwJSB7IGxlZnQ6IDA7IH1cXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stY2hlY2sge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgd2lkdGg6IDE1cHg7XFxyXFxuICBoZWlnaHQ6IDE1cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjYTlhOWE5O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1pbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWluczpmb2N1cyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1vcHRpb24ge1xcclxcbiAgY3Vyc29yOiBhbGwtc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1kZXRhaWxzIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMnB4O1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1kZXRhaWxzOmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5mYS1lbGxpcHNpcy12LFxcclxcbi5mYS10cmFzaC1jYW4ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDIlO1xcclxcbiAgdG9wOiAzMCU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5lbXB0eSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBjb2xvcjogeWVsbG93O1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx5Q0FBeUM7RUFDekMseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLHdGQUF3RjtFQUN4RixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7QUFDRjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsNENBQTRDO0VBQzVDLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsc0NBQXNDO0VBQ3RDLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsT0FBTyxPQUFPLEVBQUU7QUFDbEI7O0FBRUE7RUFDRSxPQUFPLE9BQU8sRUFBRTtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RG9zaXM6d2dodEAzMDAmZmFtaWx5PU5lcmtvK09uZSZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnRG9zaXMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgYmFja2dyb3VuZDogIzE1MjAyYjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIG1hcmdpbi10b3A6IDA7XFxyXFxufVxcclxcblxcclxcbi5zaGFkb3cge1xcclxcbiAgY29sb3I6ICMxNTIwMmI7XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hhZG93OjpiZWZvcmUsXFxyXFxuLnNoYWRvdzo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IC00cHg7XFxyXFxuICBsZWZ0OiAtNHB4O1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZWQsIGJsdWUsIGdyZWVuLCB5ZWxsb3csICNlMTFkNzQsIGJsYWNrLCAjZmYwLCAjYTAwKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogNDAwJTtcXHJcXG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA0cHgpO1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgKyA0cHgpO1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxuICBhbmltYXRpb246IGFuaW1hdGUgMzBzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNoYWRvdzo6YWZ0ZXIge1xcclxcbiAgZmlsdGVyOiBibHVyKDI1cHgpO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGFuaW1hdGUge1xcclxcbiAgMCUge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA1MCUge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0MDAlIDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubGlzdCB7XFxyXFxuICBtaW4td2lkdGg6IDU1JTtcXHJcXG4gIG1hcmdpbi10b3A6IDEzMHB4O1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC10aXRsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDNkM2QzO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxuICBsaW5lLWhlaWdodDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkM2QzZDM7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC10YXNrIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA4MCU7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbi5idG4tZm9ybSB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWl0ZW0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QzZDNkMztcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staXRlbSB7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA4MCU7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QzZDNkMztcXHJcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZSAwLjVzIGZvcndhcmRzO1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDJzO1xcclxcbiAgYW5pbWF0aW9uOiBzbGlkZSAwLjVzIGZvcndhcmRzO1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAycztcXHJcXG59XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlIHtcXHJcXG4gIDEwMCUgeyBsZWZ0OiAwOyB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2xpZGUge1xcclxcbiAgMTAwJSB7IGxlZnQ6IDA7IH1cXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stY2hlY2sge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgd2lkdGg6IDE1cHg7XFxyXFxuICBoZWlnaHQ6IDE1cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjYTlhOWE5O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1pbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWluczpmb2N1cyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1vcHRpb24ge1xcclxcbiAgY3Vyc29yOiBhbGwtc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1kZXRhaWxzIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMnB4O1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1kZXRhaWxzOmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5mYS1lbGxpcHNpcy12LFxcclxcbi5mYS10cmFzaC1jYW4ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDIlO1xcclxcbiAgdG9wOiAzMCU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5lbXB0eSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBjb2xvcjogeWVsbG93O1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgdGFza3NhcnJheSA9IFtdO1xuY29uc3QgSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzaycpO1xuY29uc3QgZW1wdHlEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW1wdHknKTtcbmV4cG9ydCBjb25zdCBzdG9yZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpO1xuXG4vLyBBZGRmdW5jdGlvblxuZXhwb3J0IGNvbnN0IGFkZEZ1bmN0aW9uID0gKCkgPT4ge1xuICBpZiAoIUlucHV0LnZhbHVlKSB7XG4gICAgZW1wdHlEaXYuaW5uZXJUZXh0ID0gJ1BsZWFzZSBnaXZlIGEgaW5wdXQnO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG1vZGVsID0ge1xuICAgICAgZGVzY3JpcHRpb246IElucHV0LnZhbHVlLFxuICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgIGluZGV4OiAxLFxuICAgIH07XG4gICAgaWYgKCFzdG9yZGF0YSkge1xuICAgICAgdGFza3NhcnJheS5wdXNoKG1vZGVsKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzYXJyYXkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RvcmRhdGEucHVzaChtb2RlbCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeShzdG9yZGF0YSkpO1xuICAgIH1cbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH1cbn07XG5cbi8vIFNob3cgZnVuY3Rpb25cbmV4cG9ydCBjb25zdCBzaG93RnVuY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGxpc3RCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LWJsb2NrJyk7XG4gIGlmICghc3RvcmRhdGEgfHwgIXN0b3JkYXRhWzBdKSB7XG4gICAgbGlzdEJsb2NrLmlubmVySFRNTCA9ICc8ZGl2PjwvZGl2Pic7XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdG9yZGF0YS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgc3RvcmRhdGFbaV0uaW5kZXggPSBpICsgMTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHN0b3JkYXRhKSk7XG4gICAgICBsZXQgY2hlY2sgPSAnJztcbiAgICAgIGlmIChzdG9yZGF0YVtpXS5jb21wbGV0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgY2hlY2sgPSAnY2hlY2tlZCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGVjayA9ICcnO1xuICAgICAgfVxuICAgICAgY29uc3QgdGVtcCA9IGk7XG4gICAgICBjb25zdCBUYWtzdGVtcGxhdGUgPSBgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJ0YXNrLWNoZWNrXCIgbmFtZT1cInRhc2stY2hlY2tcIiAke2NoZWNrfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1pbnNcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCIke3RlbXB9XCIgY2xhc3M9XCJ0YXNrLWRldGFpbHMgdCR7dGVtcH1cIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJHtzdG9yZGF0YVt0ZW1wXS5kZXNjcmlwdGlvbn1cIiByZWFkb25seT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwidGFzay1vcHRpb25cIj48aSBkYXRhLWlkPVwiZWwke3RlbXB9XCIgY2xhc3M9XCJmYSBmYS1lbGxpcHNpcy12IGVsJHt0ZW1wfVwiPjwvaT48L2E+ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGA7XG4gICAgICBsaXN0QmxvY2suaW5uZXJIVE1MICs9IFRha3N0ZW1wbGF0ZTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIFJlbW92ZSBmdW5jdGlvblxuZXhwb3J0IGNvbnN0IHJlbW92ZUZ1bmN0aW9uID0gKGlkKSA9PiB7XG4gIHN0b3JkYXRhLnNwbGljZShpZCwgMSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHN0b3JkYXRhKSk7XG59OyIsImltcG9ydCB7IHN0b3JkYXRhIH0gZnJvbSAnLi9jcnVkLmpzJztcblxuLy8gU2V0dGluZyBkZXNjcmlwdGlvbiB2YWx1ZVxuZXhwb3J0IGNvbnN0IGNvbXBUYXNrID0gKGkpID0+IHtcbiAgaWYgKHN0b3JkYXRhW2ldLmNvbXBsZXRlZCA9PT0gZmFsc2UpIHtcbiAgICBzdG9yZGF0YVtpXS5jb21wbGV0ZWQgPSB0cnVlO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHN0b3JkYXRhKSk7XG4gIH0gZWxzZSB7XG4gICAgc3RvcmRhdGFbaV0uY29tcGxldGVkID0gZmFsc2U7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkoc3RvcmRhdGEpKTtcbiAgfVxufTtcblxuLy8gUmVtb3ZpbmcgY2hlY2tlZCBpdGVtc1xuZXhwb3J0IGNvbnN0IHJlbW92ZUNoZWNrZWRUYXNrcyA9ICgpID0+IHtcbiAgY29uc3QgbmV3QXJyID0gc3RvcmRhdGEuZmlsdGVyKCh0KSA9PiB0LmNvbXBsZXRlZCA9PT0gZmFsc2UpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeShuZXdBcnIpKTtcbiAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtcbiAgYWRkRnVuY3Rpb24sIHNob3dGdW5jdGlvbiwgcmVtb3ZlRnVuY3Rpb24sIHN0b3JkYXRhLFxufSBmcm9tICcuL2NydWQuanMnO1xuaW1wb3J0IHsgY29tcFRhc2ssIHJlbW92ZUNoZWNrZWRUYXNrcyB9IGZyb20gJy4vaW50ZXJhY3RpdmUuanMnO1xuXG5jb25zdCBhZGRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkQnRuJyk7XG5cbi8vIFNob3dpbmcgdGFza3NcbnNob3dGdW5jdGlvbigpO1xuXG4vLyBBZGRpbmcgdGFza1xuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkRnVuY3Rpb24pO1xuXG4vLyBSZW1vdmluZyB0YXNrXG5jb25zdCByZW1CdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhJyk7XG5cbnJlbUJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgbGV0IHRlbXAgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICB0ZW1wID0gK3RlbXAuaWRbdGVtcC5pZC5sZW5ndGggLSAxXTtcbiAgICByZW1vdmVGdW5jdGlvbih0ZW1wKTtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH0pO1xufSk7XG5cbi8vIFNob3dpbmcgcmVtb3ZlIGJ0blxuY29uc3Qgc2hvd1JlbWJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYS1lbGxpcHNpcy12Jyk7XG5zaG93UmVtYnRuLmZvckVhY2goKGJ0bikgPT4ge1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpID0+IHtcbiAgICBsZXQgdGVtcCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgIHRlbXAgPSArdGVtcC5pZFt0ZW1wLmlkLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IHRlbXBFbHBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmVsJHt0ZW1wfWApO1xuICAgIHRlbXBFbHBzLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWVsbGlwc2lzLXYnKTtcbiAgICB0ZW1wRWxwcy5jbGFzc0xpc3QuYWRkKCdmYS10cmFzaC1jYW4nKTtcbiAgfSk7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKGUpID0+IHtcbiAgICBsZXQgdGVtcCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgIHRlbXAgPSArdGVtcC5pZFt0ZW1wLmlkLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IHRlbXBFbHBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmVsJHt0ZW1wfWApO1xuICAgIHRlbXBFbHBzLmNsYXNzTGlzdC5hZGQoJ2ZhLWVsbGlwc2lzLXYnKTtcbiAgICB0ZW1wRWxwcy5jbGFzc0xpc3QucmVtb3ZlKCdmYS10cmFzaC1jYW4nKTtcbiAgfSk7XG59KTtcblxuLy8gVXBkYXRpbmcgdGFza3NcbmNvbnN0IHRhc2tJbnBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stZGV0YWlscycpO1xudGFza0lucHMuZm9yRWFjaCgoaW5wKSA9PiB7XG4gIGlucC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChmKSA9PiB7XG4gICAgY29uc3QgdGVtcCA9IGYuY3VycmVudFRhcmdldC5pZDtcbiAgICBjb25zdCBpbnBBdHRyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGVtcCk7XG4gICAgaW5wQXR0ci5yZW1vdmVBdHRyaWJ1dGUoJ3JlYWRvbmx5Jyk7XG4gIH0pO1xufSk7XG50YXNrSW5wcy5mb3JFYWNoKChpbnApID0+IHtcbiAgaW5wLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGYpID0+IHtcbiAgICBjb25zdCB0ZW1wID0gZi5jdXJyZW50VGFyZ2V0LmlkO1xuICAgIGNvbnN0IGlucFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGVtcCk7XG4gICAgc3RvcmRhdGFbdGVtcF0uZGVzY3JpcHRpb24gPSBpbnBWYWx1ZS52YWx1ZTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeShzdG9yZGF0YSkpO1xuICB9KTtcbn0pO1xuXG4vLyBJbnRlcmFjdGl2ZW5lc3NcbmNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stY2hlY2snKTtcbmNoZWNrQm94LmZvckVhY2goKGNoZWNrLCBpbmRleCkgPT4ge1xuICBjaGVjay5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgY29tcFRhc2soaW5kZXgpO1xuICB9KTtcbn0pO1xuXG5jb25zdCBjbGVhckFsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGVhcicpO1xuY2xlYXJBbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHJlbW92ZUNoZWNrZWRUYXNrcygpO1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9