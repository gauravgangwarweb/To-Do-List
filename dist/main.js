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
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  font-family: 'Dosis', sans-serif;\r\n  font-style: normal;\r\n  background: #15202b;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\nmain {\r\n  width: 40%;\r\n  margin-top: 0;\r\n}\r\n\r\n.shadow {\r\n  color: #15202b;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  text-transform: uppercase;\r\n  position: relative;\r\n  background: #fff;\r\n}\r\n\r\n.shadow::before,\r\n.shadow::after {\r\n  content: '';\r\n  position: absolute;\r\n  top: -4px;\r\n  left: -4px;\r\n  background: linear-gradient(45deg, red, blue, green, yellow, #e11d74, black, #ff0, #a00);\r\n  background-size: 400%;\r\n  width: calc(100% + 4px);\r\n  height: calc(100% + 4px);\r\n  z-index: -1;\r\n  animation: animate 30s linear infinite;\r\n}\r\n\r\n.shadow::after {\r\n  filter: blur(25px);\r\n}\r\n\r\n@keyframes animate {\r\n  0% {\r\n    background-position: 0 0;\r\n  }\r\n\r\n  50% {\r\n    background-position: 400% 0;\r\n  }\r\n\r\n  100% {\r\n    background-position: 0 0;\r\n  }\r\n}\r\n\r\n.list {\r\n  min-width: 55%;\r\n  margin-top: 130px;\r\n  box-shadow: 2px 10px 30px rgba(0, 0, 0, 0.1);\r\n  background-color: #fff;\r\n}\r\n\r\n.list-title {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  justify-items: center;\r\n  padding: 20px;\r\n  border-bottom: 1px solid #d3d3d3;\r\n}\r\n\r\n.title {\r\n  color: #000;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 25px;\r\n  line-height: 80%;\r\n}\r\n\r\n.list-form {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  justify-items: center;\r\n  padding: 20px;\r\n  border-bottom: 1px solid #d3d3d3;\r\n}\r\n\r\n.input-task {\r\n  outline: none;\r\n  color: #000;\r\n  border: none;\r\n  font-size: 20px;\r\n  line-height: 80%;\r\n  font-style: italic;\r\n}\r\n\r\n.btn-form {\r\n  font-size: 20px;\r\n  background-color: transparent;\r\n  border: none;\r\n  cursor: pointer;\r\n  padding-right: 0;\r\n}\r\n\r\n.list-item {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  justify-items: center;\r\n  padding: 20px;\r\n  border-bottom: 1px solid #d3d3d3;\r\n}\r\n\r\n.task-item {\r\n  color: #000;\r\n  font-size: 20px;\r\n  line-height: 80%;\r\n  border-bottom: 1px solid #d3d3d3;\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  display: flex;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\n.task-check {\r\n  margin-right: 10px;\r\n  width: 15px;\r\n  height: 15px;\r\n  border: 1px solid #a9a9a9;\r\n  cursor: pointer;\r\n}\r\n\r\na {\r\n  color: #000;\r\n}\r\n\r\n.task-ins {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.task-ins:focus {\r\n  background-color: aquamarine;\r\n}\r\n\r\n.task-option {\r\n  cursor: all-scroll;\r\n}\r\n\r\n.task-details {\r\n  padding: 10px 2px;\r\n  border: 0;\r\n  font-size: 20px;\r\n}\r\n\r\n.task-details:focus {\r\n  outline: none;\r\n}\r\n\r\n.fa-ellipsis-v,\r\n.fa-trash-can {\r\n  position: absolute;\r\n  right: 2%;\r\n  top: 30%;\r\n  cursor: pointer;\r\n}\r\n\r\n.footer {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\r\n  background-color: #d3d3d3;\r\n}\r\n\r\n.footer a {\r\n  text-decoration: none;\r\n  font-size: 20px;\r\n}\r\n\r\n.empty {\r\n  display: flex;\r\n  justify-content: center;\r\n  color: yellow;\r\n  margin-top: 20px;\r\n  font-size: 30px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,gCAAgC;EAChC,kBAAkB;EAClB,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,aAAa;AACf;;AAEA;EACE,cAAc;EACd,yCAAyC;EACzC,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;;EAEE,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,wFAAwF;EACxF,qBAAqB;EACrB,uBAAuB;EACvB,wBAAwB;EACxB,WAAW;EACX,sCAAsC;AACxC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE;IACE,wBAAwB;EAC1B;;EAEA;IACE,2BAA2B;EAC7B;;EAEA;IACE,wBAAwB;EAC1B;AACF;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,4CAA4C;EAC5C,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,qBAAqB;EACrB,aAAa;EACb,gCAAgC;AAClC;;AAEA;EACE,WAAW;EACX,kCAAkC;EAClC,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,qBAAqB;EACrB,aAAa;EACb,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,WAAW;EACX,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,6BAA6B;EAC7B,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,qBAAqB;EACrB,aAAa;EACb,gCAAgC;AAClC;;AAEA;EACE,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,gCAAgC;EAChC,iBAAiB;EACjB,oBAAoB;EACpB,aAAa;EACb,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;;EAEE,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,iBAAiB;EACjB,oBAAoB;EACpB,yBAAyB;AAC3B;;AAEA;EACE,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,aAAa;EACb,gBAAgB;EAChB,eAAe;AACjB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@300&family=Nerko+One&display=swap');\r\n\r\nbody {\r\n  font-family: 'Dosis', sans-serif;\r\n  font-style: normal;\r\n  background: #15202b;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\nmain {\r\n  width: 40%;\r\n  margin-top: 0;\r\n}\r\n\r\n.shadow {\r\n  color: #15202b;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  text-transform: uppercase;\r\n  position: relative;\r\n  background: #fff;\r\n}\r\n\r\n.shadow::before,\r\n.shadow::after {\r\n  content: '';\r\n  position: absolute;\r\n  top: -4px;\r\n  left: -4px;\r\n  background: linear-gradient(45deg, red, blue, green, yellow, #e11d74, black, #ff0, #a00);\r\n  background-size: 400%;\r\n  width: calc(100% + 4px);\r\n  height: calc(100% + 4px);\r\n  z-index: -1;\r\n  animation: animate 30s linear infinite;\r\n}\r\n\r\n.shadow::after {\r\n  filter: blur(25px);\r\n}\r\n\r\n@keyframes animate {\r\n  0% {\r\n    background-position: 0 0;\r\n  }\r\n\r\n  50% {\r\n    background-position: 400% 0;\r\n  }\r\n\r\n  100% {\r\n    background-position: 0 0;\r\n  }\r\n}\r\n\r\n.list {\r\n  min-width: 55%;\r\n  margin-top: 130px;\r\n  box-shadow: 2px 10px 30px rgba(0, 0, 0, 0.1);\r\n  background-color: #fff;\r\n}\r\n\r\n.list-title {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  justify-items: center;\r\n  padding: 20px;\r\n  border-bottom: 1px solid #d3d3d3;\r\n}\r\n\r\n.title {\r\n  color: #000;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 25px;\r\n  line-height: 80%;\r\n}\r\n\r\n.list-form {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  justify-items: center;\r\n  padding: 20px;\r\n  border-bottom: 1px solid #d3d3d3;\r\n}\r\n\r\n.input-task {\r\n  outline: none;\r\n  color: #000;\r\n  border: none;\r\n  font-size: 20px;\r\n  line-height: 80%;\r\n  font-style: italic;\r\n}\r\n\r\n.btn-form {\r\n  font-size: 20px;\r\n  background-color: transparent;\r\n  border: none;\r\n  cursor: pointer;\r\n  padding-right: 0;\r\n}\r\n\r\n.list-item {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  justify-items: center;\r\n  padding: 20px;\r\n  border-bottom: 1px solid #d3d3d3;\r\n}\r\n\r\n.task-item {\r\n  color: #000;\r\n  font-size: 20px;\r\n  line-height: 80%;\r\n  border-bottom: 1px solid #d3d3d3;\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  display: flex;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\n.task-check {\r\n  margin-right: 10px;\r\n  width: 15px;\r\n  height: 15px;\r\n  border: 1px solid #a9a9a9;\r\n  cursor: pointer;\r\n}\r\n\r\na {\r\n  color: #000;\r\n}\r\n\r\n.task-ins {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.task-ins:focus {\r\n  background-color: aquamarine;\r\n}\r\n\r\n.task-option {\r\n  cursor: all-scroll;\r\n}\r\n\r\n.task-details {\r\n  padding: 10px 2px;\r\n  border: 0;\r\n  font-size: 20px;\r\n}\r\n\r\n.task-details:focus {\r\n  outline: none;\r\n}\r\n\r\n.fa-ellipsis-v,\r\n.fa-trash-can {\r\n  position: absolute;\r\n  right: 2%;\r\n  top: 30%;\r\n  cursor: pointer;\r\n}\r\n\r\n.footer {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\r\n  background-color: #d3d3d3;\r\n}\r\n\r\n.footer a {\r\n  text-decoration: none;\r\n  font-size: 20px;\r\n}\r\n\r\n.empty {\r\n  display: flex;\r\n  justify-content: center;\r\n  color: yellow;\r\n  margin-top: 20px;\r\n  font-size: 30px;\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDZJQUE2STtBQUM3STtBQUNBLGdEQUFnRCx1Q0FBdUMseUJBQXlCLDBCQUEwQixvQkFBb0IsNkJBQTZCLDBCQUEwQiw4QkFBOEIsS0FBSyxjQUFjLGlCQUFpQixvQkFBb0IsS0FBSyxpQkFBaUIscUJBQXFCLGdEQUFnRCxnQ0FBZ0MseUJBQXlCLHVCQUF1QixLQUFLLDRDQUE0QyxrQkFBa0IseUJBQXlCLGdCQUFnQixpQkFBaUIsK0ZBQStGLDRCQUE0Qiw4QkFBOEIsK0JBQStCLGtCQUFrQiw2Q0FBNkMsS0FBSyx3QkFBd0IseUJBQXlCLEtBQUssNEJBQTRCLFVBQVUsaUNBQWlDLE9BQU8sZUFBZSxvQ0FBb0MsT0FBTyxnQkFBZ0IsaUNBQWlDLE9BQU8sS0FBSyxlQUFlLHFCQUFxQix3QkFBd0IsbURBQW1ELDZCQUE2QixLQUFLLHFCQUFxQixvQkFBb0IscUNBQXFDLDRCQUE0QixvQkFBb0IsdUNBQXVDLEtBQUssZ0JBQWdCLGtCQUFrQix5Q0FBeUMseUJBQXlCLHdCQUF3QixzQkFBc0IsdUJBQXVCLEtBQUssb0JBQW9CLG9CQUFvQixxQ0FBcUMsNEJBQTRCLG9CQUFvQix1Q0FBdUMsS0FBSyxxQkFBcUIsb0JBQW9CLGtCQUFrQixtQkFBbUIsc0JBQXNCLHVCQUF1Qix5QkFBeUIsS0FBSyxtQkFBbUIsc0JBQXNCLG9DQUFvQyxtQkFBbUIsc0JBQXNCLHVCQUF1QixLQUFLLG9CQUFvQixvQkFBb0IscUNBQXFDLDRCQUE0QixvQkFBb0IsdUNBQXVDLEtBQUssb0JBQW9CLGtCQUFrQixzQkFBc0IsdUJBQXVCLHVDQUF1Qyx3QkFBd0IsMkJBQTJCLG9CQUFvQiwwQkFBMEIseUJBQXlCLEtBQUsscUJBQXFCLHlCQUF5QixrQkFBa0IsbUJBQW1CLGdDQUFnQyxzQkFBc0IsS0FBSyxXQUFXLGtCQUFrQixLQUFLLG1CQUFtQixvQkFBb0IsMEJBQTBCLEtBQUsseUJBQXlCLG1DQUFtQyxLQUFLLHNCQUFzQix5QkFBeUIsS0FBSyx1QkFBdUIsd0JBQXdCLGdCQUFnQixzQkFBc0IsS0FBSyw2QkFBNkIsb0JBQW9CLEtBQUssMENBQTBDLHlCQUF5QixnQkFBZ0IsZUFBZSxzQkFBc0IsS0FBSyxpQkFBaUIsb0JBQW9CLDhCQUE4Qix3QkFBd0IsMkJBQTJCLGdDQUFnQyxLQUFLLG1CQUFtQiw0QkFBNEIsc0JBQXNCLEtBQUssZ0JBQWdCLG9CQUFvQiw4QkFBOEIsb0JBQW9CLHVCQUF1QixzQkFBc0IsS0FBSyxXQUFXLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLCtIQUErSCxjQUFjLHVDQUF1Qyx5QkFBeUIsMEJBQTBCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLDhCQUE4QixLQUFLLGNBQWMsaUJBQWlCLG9CQUFvQixLQUFLLGlCQUFpQixxQkFBcUIsZ0RBQWdELGdDQUFnQyx5QkFBeUIsdUJBQXVCLEtBQUssNENBQTRDLGtCQUFrQix5QkFBeUIsZ0JBQWdCLGlCQUFpQiwrRkFBK0YsNEJBQTRCLDhCQUE4QiwrQkFBK0Isa0JBQWtCLDZDQUE2QyxLQUFLLHdCQUF3Qix5QkFBeUIsS0FBSyw0QkFBNEIsVUFBVSxpQ0FBaUMsT0FBTyxlQUFlLG9DQUFvQyxPQUFPLGdCQUFnQixpQ0FBaUMsT0FBTyxLQUFLLGVBQWUscUJBQXFCLHdCQUF3QixtREFBbUQsNkJBQTZCLEtBQUsscUJBQXFCLG9CQUFvQixxQ0FBcUMsNEJBQTRCLG9CQUFvQix1Q0FBdUMsS0FBSyxnQkFBZ0Isa0JBQWtCLHlDQUF5Qyx5QkFBeUIsd0JBQXdCLHNCQUFzQix1QkFBdUIsS0FBSyxvQkFBb0Isb0JBQW9CLHFDQUFxQyw0QkFBNEIsb0JBQW9CLHVDQUF1QyxLQUFLLHFCQUFxQixvQkFBb0Isa0JBQWtCLG1CQUFtQixzQkFBc0IsdUJBQXVCLHlCQUF5QixLQUFLLG1CQUFtQixzQkFBc0Isb0NBQW9DLG1CQUFtQixzQkFBc0IsdUJBQXVCLEtBQUssb0JBQW9CLG9CQUFvQixxQ0FBcUMsNEJBQTRCLG9CQUFvQix1Q0FBdUMsS0FBSyxvQkFBb0Isa0JBQWtCLHNCQUFzQix1QkFBdUIsdUNBQXVDLHdCQUF3QiwyQkFBMkIsb0JBQW9CLDBCQUEwQix5QkFBeUIsS0FBSyxxQkFBcUIseUJBQXlCLGtCQUFrQixtQkFBbUIsZ0NBQWdDLHNCQUFzQixLQUFLLFdBQVcsa0JBQWtCLEtBQUssbUJBQW1CLG9CQUFvQiwwQkFBMEIsS0FBSyx5QkFBeUIsbUNBQW1DLEtBQUssc0JBQXNCLHlCQUF5QixLQUFLLHVCQUF1Qix3QkFBd0IsZ0JBQWdCLHNCQUFzQixLQUFLLDZCQUE2QixvQkFBb0IsS0FBSywwQ0FBMEMseUJBQXlCLGdCQUFnQixlQUFlLHNCQUFzQixLQUFLLGlCQUFpQixvQkFBb0IsOEJBQThCLHdCQUF3QiwyQkFBMkIsZ0NBQWdDLEtBQUssbUJBQW1CLDRCQUE0QixzQkFBc0IsS0FBSyxnQkFBZ0Isb0JBQW9CLDhCQUE4QixvQkFBb0IsdUJBQXVCLHNCQUFzQixLQUFLLHVCQUF1QjtBQUNuOVE7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNSMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ087QUFDUDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEUsTUFBTTtBQUNwRjtBQUNBLDZCQUE2QixLQUFLLHlCQUF5QixLQUFLLHVCQUF1QiwyQkFBMkI7QUFDbEgsZ0VBQWdFLEtBQUssOEJBQThCLEtBQUs7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzVEcUM7O0FBRXJDO0FBQ087QUFDUCxNQUFNLDhDQUFRO0FBQ2QsSUFBSSw4Q0FBUTtBQUNaLGlEQUFpRCw4Q0FBUTtBQUN6RCxJQUFJO0FBQ0osSUFBSSw4Q0FBUTtBQUNaLGlEQUFpRCw4Q0FBUTtBQUN6RDtBQUNBOztBQUVBO0FBQ087QUFDUCxpQkFBaUIscURBQWU7QUFDaEM7QUFDQTtBQUNBOzs7Ozs7O1VDbEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUdGO0FBQzZDOztBQUVoRTs7QUFFQTtBQUNBLHNEQUFZOztBQUVaO0FBQ0EsaUNBQWlDLGlEQUFXOztBQUU1QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3REFBYztBQUNsQjtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxLQUFLO0FBQ3ZEO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELEtBQUs7QUFDdkQ7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksOENBQVE7QUFDWixpREFBaUQsOENBQVE7QUFDekQsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFRO0FBQ1osR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBLEVBQUUsbUVBQWtCO0FBQ3BCLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL1RvIERvIExpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL1RvIERvIExpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL1RvIERvIExpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL1RvIERvIExpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL1RvIERvIExpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdC8uL3NyYy9jcnVkLmpzIiwid2VicGFjazovL1RvIERvIExpc3QvLi9zcmMvaW50ZXJhY3RpdmUuanMiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL1RvIERvIExpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1RvIERvIExpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9UbyBEbyBMaXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vVG8gRG8gTGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURvc2lzOndnaHRAMzAwJmZhbWlseT1OZXJrbytPbmUmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogJ0Rvc2lzJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGJhY2tncm91bmQ6ICMxNTIwMmI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICB3aWR0aDogNDAlO1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoYWRvdyB7XFxyXFxuICBjb2xvcjogIzE1MjAyYjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5zaGFkb3c6OmJlZm9yZSxcXHJcXG4uc2hhZG93OjphZnRlciB7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogLTRweDtcXHJcXG4gIGxlZnQ6IC00cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJlZCwgYmx1ZSwgZ3JlZW4sIHllbGxvdywgI2UxMWQ3NCwgYmxhY2ssICNmZjAsICNhMDApO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiA0MDAlO1xcclxcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDRweCk7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwJSArIDRweCk7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG4gIGFuaW1hdGlvbjogYW5pbWF0ZSAzMHMgbGluZWFyIGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hhZG93OjphZnRlciB7XFxyXFxuICBmaWx0ZXI6IGJsdXIoMjVweCk7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYW5pbWF0ZSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDUwJSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQwMCUgMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5saXN0IHtcXHJcXG4gIG1pbi13aWR0aDogNTUlO1xcclxcbiAgbWFyZ2luLXRvcDogMTMwcHg7XFxyXFxuICBib3gtc2hhZG93OiAycHggMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5saXN0LXRpdGxlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkM2QzZDM7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA4MCU7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QzZDNkMztcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LXRhc2sge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDgwJTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1mb3JtIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcGFkZGluZy1yaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDNkM2QzO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1pdGVtIHtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDgwJTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDNkM2QzO1xcclxcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jaGVjayB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICB3aWR0aDogMTVweDtcXHJcXG4gIGhlaWdodDogMTVweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhOWE5YTk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWlucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staW5zOmZvY3VzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxyXFxufVxcclxcblxcclxcbi50YXNrLW9wdGlvbiB7XFxyXFxuICBjdXJzb3I6IGFsbC1zY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWRldGFpbHMge1xcclxcbiAgcGFkZGluZzogMTBweCAycHg7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWRldGFpbHM6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWVsbGlwc2lzLXYsXFxyXFxuLmZhLXRyYXNoLWNhbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMiU7XFxyXFxuICB0b3A6IDMwJTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLXRvcDogMjBweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzZDNkMztcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmVtcHR5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB5ZWxsb3c7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx5Q0FBeUM7RUFDekMseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLHdGQUF3RjtFQUN4RixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7QUFDRjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsNENBQTRDO0VBQzVDLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsU0FBUztFQUNULGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURvc2lzOndnaHRAMzAwJmZhbWlseT1OZXJrbytPbmUmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogJ0Rvc2lzJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGJhY2tncm91bmQ6ICMxNTIwMmI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICB3aWR0aDogNDAlO1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoYWRvdyB7XFxyXFxuICBjb2xvcjogIzE1MjAyYjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5zaGFkb3c6OmJlZm9yZSxcXHJcXG4uc2hhZG93OjphZnRlciB7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogLTRweDtcXHJcXG4gIGxlZnQ6IC00cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJlZCwgYmx1ZSwgZ3JlZW4sIHllbGxvdywgI2UxMWQ3NCwgYmxhY2ssICNmZjAsICNhMDApO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiA0MDAlO1xcclxcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDRweCk7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwJSArIDRweCk7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG4gIGFuaW1hdGlvbjogYW5pbWF0ZSAzMHMgbGluZWFyIGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hhZG93OjphZnRlciB7XFxyXFxuICBmaWx0ZXI6IGJsdXIoMjVweCk7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYW5pbWF0ZSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDUwJSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQwMCUgMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5saXN0IHtcXHJcXG4gIG1pbi13aWR0aDogNTUlO1xcclxcbiAgbWFyZ2luLXRvcDogMTMwcHg7XFxyXFxuICBib3gtc2hhZG93OiAycHggMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5saXN0LXRpdGxlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkM2QzZDM7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA4MCU7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QzZDNkMztcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LXRhc2sge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDgwJTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1mb3JtIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcGFkZGluZy1yaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDNkM2QzO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1pdGVtIHtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDgwJTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDNkM2QzO1xcclxcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jaGVjayB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICB3aWR0aDogMTVweDtcXHJcXG4gIGhlaWdodDogMTVweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhOWE5YTk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWlucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staW5zOmZvY3VzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxyXFxufVxcclxcblxcclxcbi50YXNrLW9wdGlvbiB7XFxyXFxuICBjdXJzb3I6IGFsbC1zY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWRldGFpbHMge1xcclxcbiAgcGFkZGluZzogMTBweCAycHg7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWRldGFpbHM6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWVsbGlwc2lzLXYsXFxyXFxuLmZhLXRyYXNoLWNhbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMiU7XFxyXFxuICB0b3A6IDMwJTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLXRvcDogMjBweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzZDNkMztcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmVtcHR5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB5ZWxsb3c7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCB0YXNrc2FycmF5ID0gW107XG5jb25zdCBJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrJyk7XG5jb25zdCBlbXB0eURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbXB0eScpO1xuZXhwb3J0IGNvbnN0IHN0b3JkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XG5cbi8vIEFkZGZ1bmN0aW9uXG5leHBvcnQgY29uc3QgYWRkRnVuY3Rpb24gPSAoKSA9PiB7XG4gIGlmICghSW5wdXQudmFsdWUpIHtcbiAgICBlbXB0eURpdi5pbm5lclRleHQgPSAnUGxlYXNlIGdpdmUgYSBpbnB1dCc7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbW9kZWwgPSB7XG4gICAgICBkZXNjcmlwdGlvbjogSW5wdXQudmFsdWUsXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgaW5kZXg6IDEsXG4gICAgfTtcbiAgICBpZiAoIXN0b3JkYXRhKSB7XG4gICAgICB0YXNrc2FycmF5LnB1c2gobW9kZWwpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3NhcnJheSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdG9yZGF0YS5wdXNoKG1vZGVsKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHN0b3JkYXRhKSk7XG4gICAgfVxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfVxufTtcblxuLy8gU2hvdyBmdW5jdGlvblxuZXhwb3J0IGNvbnN0IHNob3dGdW5jdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgbGlzdEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtYmxvY2snKTtcbiAgaWYgKCFzdG9yZGF0YSB8fCAhc3RvcmRhdGFbMF0pIHtcbiAgICBsaXN0QmxvY2suaW5uZXJIVE1MID0gJzxkaXY+PC9kaXY+JztcbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0b3JkYXRhLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBzdG9yZGF0YVtpXS5pbmRleCA9IGkgKyAxO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkoc3RvcmRhdGEpKTtcbiAgICAgIGxldCBjaGVjayA9ICcnO1xuICAgICAgaWYgKHN0b3JkYXRhW2ldLmNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgICBjaGVjayA9ICdjaGVja2VkJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoZWNrID0gJyc7XG4gICAgICB9XG4gICAgICBjb25zdCB0ZW1wID0gaTtcbiAgICAgIGNvbnN0IFRha3N0ZW1wbGF0ZSA9IGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2staXRlbVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInRhc2stY2hlY2tcIiBuYW1lPVwidGFzay1jaGVja1wiICR7Y2hlY2t9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWluc1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIiR7dGVtcH1cIiBjbGFzcz1cInRhc2stZGV0YWlscyB0JHt0ZW1wfVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIke3N0b3JkYXRhW3RlbXBdLmRlc2NyaXB0aW9ufVwiIHJlYWRvbmx5PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0YXNrLW9wdGlvblwiPjxpIGRhdGEtaWQ9XCJlbCR7dGVtcH1cIiBjbGFzcz1cImZhIGZhLWVsbGlwc2lzLXYgZWwke3RlbXB9XCI+PC9pPjwvYT4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYDtcbiAgICAgIGxpc3RCbG9jay5pbm5lckhUTUwgKz0gVGFrc3RlbXBsYXRlO1xuICAgIH1cbiAgfVxufTtcblxuLy8gUmVtb3ZlIGZ1bmN0aW9uXG5leHBvcnQgY29uc3QgcmVtb3ZlRnVuY3Rpb24gPSAoaWQpID0+IHtcbiAgc3RvcmRhdGEuc3BsaWNlKGlkLCAxKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkoc3RvcmRhdGEpKTtcbn07IiwiaW1wb3J0IHsgc3RvcmRhdGEgfSBmcm9tICcuL2NydWQuanMnO1xuXG4vLyBTZXR0aW5nIGRlc2NyaXB0aW9uIHZhbHVlXG5leHBvcnQgY29uc3QgY29tcFRhc2sgPSAoaSkgPT4ge1xuICBpZiAoc3RvcmRhdGFbaV0uY29tcGxldGVkID09PSBmYWxzZSkge1xuICAgIHN0b3JkYXRhW2ldLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkoc3RvcmRhdGEpKTtcbiAgfSBlbHNlIHtcbiAgICBzdG9yZGF0YVtpXS5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeShzdG9yZGF0YSkpO1xuICB9XG59O1xuXG4vLyBSZW1vdmluZyBjaGVja2VkIGl0ZW1zXG5leHBvcnQgY29uc3QgcmVtb3ZlQ2hlY2tlZFRhc2tzID0gKCkgPT4ge1xuICBjb25zdCBuZXdBcnIgPSBzdG9yZGF0YS5maWx0ZXIoKHQpID0+IHQuY29tcGxldGVkID09PSBmYWxzZSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KG5ld0FycikpO1xuICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge1xuICBhZGRGdW5jdGlvbiwgc2hvd0Z1bmN0aW9uLCByZW1vdmVGdW5jdGlvbiwgc3RvcmRhdGEsXG59IGZyb20gJy4vY3J1ZC5qcyc7XG5pbXBvcnQgeyBjb21wVGFzaywgcmVtb3ZlQ2hlY2tlZFRhc2tzIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS5qcyc7XG5cbmNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRCdG4nKTtcblxuLy8gU2hvd2luZyB0YXNrc1xuc2hvd0Z1bmN0aW9uKCk7XG5cbi8vIEFkZGluZyB0YXNrXG5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRGdW5jdGlvbik7XG5cbi8vIFJlbW92aW5nIHRhc2tcbmNvbnN0IHJlbUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmEnKTtcblxucmVtQnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBsZXQgdGVtcCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgIHRlbXAgPSArdGVtcC5pZFt0ZW1wLmlkLmxlbmd0aCAtIDFdO1xuICAgIHJlbW92ZUZ1bmN0aW9uKHRlbXApO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSk7XG59KTtcblxuLy8gU2hvd2luZyByZW1vdmUgYnRuXG5jb25zdCBzaG93UmVtYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhLWVsbGlwc2lzLXYnKTtcbnNob3dSZW1idG4uZm9yRWFjaCgoYnRuKSA9PiB7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZSkgPT4ge1xuICAgIGxldCB0ZW1wID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgdGVtcCA9ICt0ZW1wLmlkW3RlbXAuaWQubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgdGVtcEVscHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZWwke3RlbXB9YCk7XG4gICAgdGVtcEVscHMuY2xhc3NMaXN0LnJlbW92ZSgnZmEtZWxsaXBzaXMtdicpO1xuICAgIHRlbXBFbHBzLmNsYXNzTGlzdC5hZGQoJ2ZhLXRyYXNoLWNhbicpO1xuICB9KTtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoZSkgPT4ge1xuICAgIGxldCB0ZW1wID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgdGVtcCA9ICt0ZW1wLmlkW3RlbXAuaWQubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgdGVtcEVscHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZWwke3RlbXB9YCk7XG4gICAgdGVtcEVscHMuY2xhc3NMaXN0LmFkZCgnZmEtZWxsaXBzaXMtdicpO1xuICAgIHRlbXBFbHBzLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLXRyYXNoLWNhbicpO1xuICB9KTtcbn0pO1xuXG4vLyBVcGRhdGluZyB0YXNrc1xuY29uc3QgdGFza0lucHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1kZXRhaWxzJyk7XG50YXNrSW5wcy5mb3JFYWNoKChpbnApID0+IHtcbiAgaW5wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGYpID0+IHtcbiAgICBjb25zdCB0ZW1wID0gZi5jdXJyZW50VGFyZ2V0LmlkO1xuICAgIGNvbnN0IGlucEF0dHIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0ZW1wKTtcbiAgICBpbnBBdHRyLnJlbW92ZUF0dHJpYnV0ZSgncmVhZG9ubHknKTtcbiAgfSk7XG59KTtcbnRhc2tJbnBzLmZvckVhY2goKGlucCkgPT4ge1xuICBpbnAuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZikgPT4ge1xuICAgIGNvbnN0IHRlbXAgPSBmLmN1cnJlbnRUYXJnZXQuaWQ7XG4gICAgY29uc3QgaW5wVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0ZW1wKTtcbiAgICBzdG9yZGF0YVt0ZW1wXS5kZXNjcmlwdGlvbiA9IGlucFZhbHVlLnZhbHVlO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHN0b3JkYXRhKSk7XG4gIH0pO1xufSk7XG5cbi8vIEludGVyYWN0aXZlbmVzc1xuY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1jaGVjaycpO1xuY2hlY2tCb3guZm9yRWFjaCgoY2hlY2ssIGluZGV4KSA9PiB7XG4gIGNoZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBjb21wVGFzayhpbmRleCk7XG4gIH0pO1xufSk7XG5cbmNvbnN0IGNsZWFyQWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsZWFyJyk7XG5jbGVhckFsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcmVtb3ZlQ2hlY2tlZFRhc2tzKCk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=