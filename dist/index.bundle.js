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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nhtml{\n    margin: 0;\n    padding: 0;\n}\nbody{\n    margin: 0;\n    padding: 0;\n    background:whitesmoke\n}\n\nh1{\n    font-size: 35px;\n    text-align: center;\n}\n.TDItem{\n    border-radius: 30px;\n    border: 2px solid #2a044e;\n    padding: 10px;\n    width: 400px;\n    height: auto; \n    margin: 10px;\n    text-align: center;\n}\n\n.TDColumn{\n    padding: 10px;\n    margin: 10px;\n    max-width: 450px;\n}\n\n#listContainer{\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr;\n    grid-template-areas: 'toDo doing done';\n    margin: 50px;\n}\n\n#toDoContainer{\n    grid-area: toDo;\n    background: rgba(255, 0, 0, 0.600);\n}\n\n#doingContainer{\n    grid-area: doing;\n    background: rgba(255, 255, 0, 0.600);\n}\n\n#doneContainer{\n    grid-area: done;\n    background: rgba(0, 128, 0, 0.7600)\n}\n\n\n/* Button used to open the contact form - fixed at the bottom of the page */\n.open-button {\n    background-color: #555;\n    color: white;\n    padding: 16px 20px;\n    border: none;\n    cursor: pointer;\n    opacity: 0.8;\n    position: fixed;\n    bottom: 23px;\n    left: 28px;\n    width: 280px;\n  }\n\n/* The popup form - hidden by default */\n.form-popup {\n    display: none;\n    position: fixed;\n    bottom: 0;\n    left: 15px;\n    border: 3px solid #f1f1f1;\n    z-index: 2;\n  }\n\n/* Add styles to the form container */\n.form-container {\n    max-width: 300px;\n    padding: 10px;\n    background-color: white;\n  }\n\n/* Full-width input fields */\n.form-container input[type=text], .form-container input[type=password] {\n    width: 90%;\n    padding: 15px;\n    margin: 5px 0 22px 0;\n    border: none;\n    background: #f1f1f1;\n  }\n  \n  /* When the inputs get focus, do something */\n  .form-container input[type=text]:focus, .form-container input[type=password]:focus {\n    background-color: #ddd;\n    outline: none;\n  }\n\n/* Set a style for the submit/login button */\n.form-container .btn {\n    background-color: #04AA6D;\n    color: white;\n    padding: 16px 20px;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n    margin-bottom:10px;\n    opacity: 0.8;\n  }\n\n/* Add a red background color to the cancel button */\n.form-container .cancel {\n    background-color: red;\n  }\n\n/* Add some hover effects to buttons */\n.form-container .btn:hover, .open-button:hover {\n    opacity: 1;\n  }\n\n.sublabel{\nfont-size: small;\nfont-style: italic;\nfont-weight: 100;\n}\n\n.deleteItemBtn{\n  float: right;\n  background-color: red;\n  font-size: 10px;\n  outline-width: 0ch;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AACA;IACI,SAAS;IACT,UAAU;AACd;AACA;IACI,SAAS;IACT,UAAU;IACV;AACJ;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;AACA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,aAAa;IACb,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,uBAAuB;IACvB,sCAAsC;IACtC,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,kCAAkC;AACtC;;AAEA;IACI,gBAAgB;IAChB,oCAAoC;AACxC;;AAEA;IACI,eAAe;IACf;AACJ;;;AAGA,2EAA2E;AAC3E;IACI,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,UAAU;IACV,YAAY;EACd;;AAEF,uCAAuC;AACvC;IACI,aAAa;IACb,eAAe;IACf,SAAS;IACT,UAAU;IACV,yBAAyB;IACzB,UAAU;EACZ;;AAEF,qCAAqC;AACrC;IACI,gBAAgB;IAChB,aAAa;IACb,uBAAuB;EACzB;;AAEF,4BAA4B;AAC5B;IACI,UAAU;IACV,aAAa;IACb,oBAAoB;IACpB,YAAY;IACZ,mBAAmB;EACrB;;EAEA,4CAA4C;EAC5C;IACE,sBAAsB;IACtB,aAAa;EACf;;AAEF,4CAA4C;AAC5C;IACI,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,WAAW;IACX,kBAAkB;IAClB,YAAY;EACd;;AAEF,oDAAoD;AACpD;IACI,qBAAqB;EACvB;;AAEF,sCAAsC;AACtC;IACI,UAAU;EACZ;;AAEF;AACA,gBAAgB;AAChB,kBAAkB;AAClB,gBAAgB;AAChB;;AAEA;EACE,YAAY;EACZ,qBAAqB;EACrB,eAAe;EACf,kBAAkB;AACpB","sourcesContent":["\nhtml{\n    margin: 0;\n    padding: 0;\n}\nbody{\n    margin: 0;\n    padding: 0;\n    background:whitesmoke\n}\n\nh1{\n    font-size: 35px;\n    text-align: center;\n}\n.TDItem{\n    border-radius: 30px;\n    border: 2px solid #2a044e;\n    padding: 10px;\n    width: 400px;\n    height: auto; \n    margin: 10px;\n    text-align: center;\n}\n\n.TDColumn{\n    padding: 10px;\n    margin: 10px;\n    max-width: 450px;\n}\n\n#listContainer{\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr;\n    grid-template-areas: 'toDo doing done';\n    margin: 50px;\n}\n\n#toDoContainer{\n    grid-area: toDo;\n    background: rgba(255, 0, 0, 0.600);\n}\n\n#doingContainer{\n    grid-area: doing;\n    background: rgba(255, 255, 0, 0.600);\n}\n\n#doneContainer{\n    grid-area: done;\n    background: rgba(0, 128, 0, 0.7600)\n}\n\n\n/* Button used to open the contact form - fixed at the bottom of the page */\n.open-button {\n    background-color: #555;\n    color: white;\n    padding: 16px 20px;\n    border: none;\n    cursor: pointer;\n    opacity: 0.8;\n    position: fixed;\n    bottom: 23px;\n    left: 28px;\n    width: 280px;\n  }\n\n/* The popup form - hidden by default */\n.form-popup {\n    display: none;\n    position: fixed;\n    bottom: 0;\n    left: 15px;\n    border: 3px solid #f1f1f1;\n    z-index: 2;\n  }\n\n/* Add styles to the form container */\n.form-container {\n    max-width: 300px;\n    padding: 10px;\n    background-color: white;\n  }\n\n/* Full-width input fields */\n.form-container input[type=text], .form-container input[type=password] {\n    width: 90%;\n    padding: 15px;\n    margin: 5px 0 22px 0;\n    border: none;\n    background: #f1f1f1;\n  }\n  \n  /* When the inputs get focus, do something */\n  .form-container input[type=text]:focus, .form-container input[type=password]:focus {\n    background-color: #ddd;\n    outline: none;\n  }\n\n/* Set a style for the submit/login button */\n.form-container .btn {\n    background-color: #04AA6D;\n    color: white;\n    padding: 16px 20px;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n    margin-bottom:10px;\n    opacity: 0.8;\n  }\n\n/* Add a red background color to the cancel button */\n.form-container .cancel {\n    background-color: red;\n  }\n\n/* Add some hover effects to buttons */\n.form-container .btn:hover, .open-button:hover {\n    opacity: 1;\n  }\n\n.sublabel{\nfont-size: small;\nfont-style: italic;\nfont-weight: 100;\n}\n\n.deleteItemBtn{\n  float: right;\n  background-color: red;\n  font-size: 10px;\n  outline-width: 0ch;\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

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



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
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
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
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
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
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
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
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
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/TDObj.js":
/*!**********************!*\
  !*** ./src/TDObj.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToDo": () => (/* binding */ ToDo)
/* harmony export */ });
/* harmony import */ var _addItemFormManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addItemFormManager */ "./src/addItemFormManager.js");


function ToDo(title, status, description, due, priority, note, index){
       
       const obj = this;
       
        this.title = title;
        this.status = status;
        this.description = description;
        this.due = due;
        this.priority = priority;
        this.note = note;
        this.index = index;



        // Within the function, use obj to reference the instance, not this
        this.createBtn = function() {
                var btn   = document.createElement('button');
                btn.type  = 'button'
                btn.index  = obj.index;
                btn.onclick = function() {
                        (0,_addItemFormManager__WEBPACK_IMPORTED_MODULE_0__.deleteItem)(btn.index)
        };
        return btn;
      };

}


/***/ }),

/***/ "./src/addItemFormManager.js":
/*!***********************************!*\
  !*** ./src/addItemFormManager.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createItem": () => (/* binding */ createItem),
/* harmony export */   "deleteItem": () => (/* binding */ deleteItem)
/* harmony export */ });
/* harmony import */ var _TDObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TDObj */ "./src/TDObj.js");
/* harmony import */ var _updateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateDOM */ "./src/updateDOM.js");
/* harmony import */ var _btnLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./btnLogic */ "./src/btnLogic.js");
 


let itemArray = [];
let index = 0;

function createItem() {
    const title = document.getElementsByName('title')[0];
    const status = document.getElementsByName('status')[0];
    const description = document.getElementsByName('desc')[0];
    const due = document.getElementsByName('due')[0];
    const priority = document.getElementsByName('priority')[0];
    const note = document.getElementsByName('notes')[0];
    
    const priorityValue = handlePriority(priority.value);
    //create new object using the form
    const newItem = new _TDObj__WEBPACK_IMPORTED_MODULE_0__.ToDo(title.value, status.value, description.value, due.value, priorityValue, note.value, index);

    itemArray.push(newItem);

    (0,_updateDOM__WEBPACK_IMPORTED_MODULE_1__.refreshDisplay)(itemArray);

    clearForm(title, status, description, due, priority, note);
    index++;
}


function clearForm(title, status, desc, due, priority, note){
    title.value = '';
    status.value = ''; 
    desc.value = ''; 
    due.value = ''; 
    priority.value = '';
    note.value = '';
    (0,_btnLogic__WEBPACK_IMPORTED_MODULE_2__.closeForm)();
}

function handlePriority(value){
    if (value == 0) {return "LOW"}
    else if (value == 1) {return"MED"}
    else if (value == 2) {return "HIGH"}
}

function deleteItem(index){
    const removeIndex = itemArray.findIndex( item => item.index === index );
    console.log(`deleting index ${index}`)
    // remove object
    console.log(itemArray.length);
    itemArray.splice( removeIndex, 1 );
    console.log(itemArray.length);
    (0,_updateDOM__WEBPACK_IMPORTED_MODULE_1__.refreshDisplay)(itemArray)
}




/***/ }),

/***/ "./src/btnLogic.js":
/*!*************************!*\
  !*** ./src/btnLogic.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadButtons": () => (/* binding */ loadButtons),
/* harmony export */   "closeForm": () => (/* binding */ closeForm)
/* harmony export */ });

function loadButtons(TDLogic) {
    const addItemBtn = document.getElementById('addItemBtn')
    addItemBtn.addEventListener('click', TDLogic)

    const popupAdd = document.getElementById('popupAdd')
    popupAdd.addEventListener('click', openForm);

    const closeBtn = document.getElementById('closeBtn')
    closeBtn.addEventListener('click', closeForm);
}

function openForm() {
    document.getElementById("myForm").style.display = "block";

  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  } 




/***/ }),

/***/ "./src/updateDOM.js":
/*!**************************!*\
  !*** ./src/updateDOM.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "refreshDisplay": () => (/* binding */ refreshDisplay)
/* harmony export */ });

function refreshDisplay(array) {
    displayTD(array);
}

//Adds a new to do card to the current project
function displayTD(array) {

    //clear all items
    const toDoContainer = document.getElementById('toDoContainer');
    const doingContainer = document.getElementById('doingContainer');
    const doneContainer = document.getElementById('doneContainer');

    clearnContainers(toDoContainer, doingContainer, doneContainer);

    //add all items back in
    array.forEach(element => {

      
        //Items div
        const newCard = document.createElement('div');
        newCard.classList.add('TDItem');

        //Add each section of the new item inside their own divs
        const itemTitle = document.createElement('div');
        itemTitle.innerHTML = element.title;

        const itemDesc = document.createElement('div');
        itemDesc.innerHTML = element.description;

        const itemDue = document.createElement('div');
        itemDue.innerHTML = element.due;

        const itemPriority = document.createElement('div');
        itemPriority.innerHTML = element.priority;

        const itemNote = document.createElement('div');
        itemNote.innerHTML = element.note;

        const itemBtn = element.createBtn();
            itemBtn.innerHTML = '-'
            itemBtn.classList.add('deleteItemBtn');

        newCard.appendChild(itemBtn);
        newCard.appendChild(itemTitle);
        newCard.appendChild(itemDesc);
        newCard.appendChild(itemDue);
        newCard.appendChild(itemPriority);
        newCard.appendChild(itemNote);


        if (element.status == 0){
            toDoContainer.appendChild(newCard)
        }
        else if (element.status == 1){
            doingContainer.appendChild(newCard)
        }
        else if (element.status == 2){
            doneContainer.appendChild(newCard)
        }

        
    });


}

function clearnContainers(todo, doing, done) {
    while (todo.firstChild) {
        todo.removeChild(todo.firstChild);
    }

    while (doing.firstChild) {
        doing.removeChild(doing.firstChild);
    }

    while (done.firstChild) {
        done.removeChild(done.firstChild);
    }
}



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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _addItemFormManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addItemFormManager */ "./src/addItemFormManager.js");
/* harmony import */ var _btnLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./btnLogic */ "./src/btnLogic.js");




function component(){
    (0,_btnLogic__WEBPACK_IMPORTED_MODULE_2__.loadButtons)(_addItemFormManager__WEBPACK_IMPORTED_MODULE_1__.createItem);
}

component();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUM2QjtBQUNUOztBQUV6QztBQUNBLElBQUksc0RBQVcsQ0FBQywyREFBVTtBQUMxQjs7QUFFQSxZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9URE9iai5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvYWRkSXRlbUZvcm1NYW5hZ2VyLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9idG5Mb2dpYy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvdXBkYXRlRE9NLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG5odG1se1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcbmJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZDp3aGl0ZXNtb2tlXFxufVxcblxcbmgxe1xcbiAgICBmb250LXNpemU6IDM1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLlRESXRlbXtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzJhMDQ0ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87IFxcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLlREQ29sdW1ue1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIG1heC13aWR0aDogNDUwcHg7XFxufVxcblxcbiNsaXN0Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ3RvRG8gZG9pbmcgZG9uZSc7XFxuICAgIG1hcmdpbjogNTBweDtcXG59XFxuXFxuI3RvRG9Db250YWluZXJ7XFxuICAgIGdyaWQtYXJlYTogdG9EbztcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDAsIDAsIDAuNjAwKTtcXG59XFxuXFxuI2RvaW5nQ29udGFpbmVye1xcbiAgICBncmlkLWFyZWE6IGRvaW5nO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAwLCAwLjYwMCk7XFxufVxcblxcbiNkb25lQ29udGFpbmVye1xcbiAgICBncmlkLWFyZWE6IGRvbmU7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMTI4LCAwLCAwLjc2MDApXFxufVxcblxcblxcbi8qIEJ1dHRvbiB1c2VkIHRvIG9wZW4gdGhlIGNvbnRhY3QgZm9ybSAtIGZpeGVkIGF0IHRoZSBib3R0b20gb2YgdGhlIHBhZ2UgKi9cXG4ub3Blbi1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDE2cHggMjBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDIzcHg7XFxuICAgIGxlZnQ6IDI4cHg7XFxuICAgIHdpZHRoOiAyODBweDtcXG4gIH1cXG5cXG4vKiBUaGUgcG9wdXAgZm9ybSAtIGhpZGRlbiBieSBkZWZhdWx0ICovXFxuLmZvcm0tcG9wdXAge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMTVweDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTtcXG4gICAgei1pbmRleDogMjtcXG4gIH1cXG5cXG4vKiBBZGQgc3R5bGVzIHRvIHRoZSBmb3JtIGNvbnRhaW5lciAqL1xcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgfVxcblxcbi8qIEZ1bGwtd2lkdGggaW5wdXQgZmllbGRzICovXFxuLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9dGV4dF0sIC5mb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIG1hcmdpbjogNXB4IDAgMjJweCAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XFxuICB9XFxuICBcXG4gIC8qIFdoZW4gdGhlIGlucHV0cyBnZXQgZm9jdXMsIGRvIHNvbWV0aGluZyAqL1xcbiAgLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMsIC5mb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICB9XFxuXFxuLyogU2V0IGEgc3R5bGUgZm9yIHRoZSBzdWJtaXQvbG9naW4gYnV0dG9uICovXFxuLmZvcm0tY29udGFpbmVyIC5idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRBQTZEO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDE2cHggMjBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gIH1cXG5cXG4vKiBBZGQgYSByZWQgYmFja2dyb3VuZCBjb2xvciB0byB0aGUgY2FuY2VsIGJ1dHRvbiAqL1xcbi5mb3JtLWNvbnRhaW5lciAuY2FuY2VsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgfVxcblxcbi8qIEFkZCBzb21lIGhvdmVyIGVmZmVjdHMgdG8gYnV0dG9ucyAqL1xcbi5mb3JtLWNvbnRhaW5lciAuYnRuOmhvdmVyLCAub3Blbi1idXR0b246aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbi5zdWJsYWJlbHtcXG5mb250LXNpemU6IHNtYWxsO1xcbmZvbnQtc3R5bGU6IGl0YWxpYztcXG5mb250LXdlaWdodDogMTAwO1xcbn1cXG5cXG4uZGVsZXRlSXRlbUJ0bntcXG4gIGZsb2F0OiByaWdodDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIG91dGxpbmUtd2lkdGg6IDBjaDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsdUJBQXVCO0lBQ3ZCLHNDQUFzQztJQUN0QyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2Y7QUFDSjs7O0FBR0EsMkVBQTJFO0FBQzNFO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtFQUNkOztBQUVGLHVDQUF1QztBQUN2QztJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsU0FBUztJQUNULFVBQVU7SUFDVix5QkFBeUI7SUFDekIsVUFBVTtFQUNaOztBQUVGLHFDQUFxQztBQUNyQztJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0VBQ3pCOztBQUVGLDRCQUE0QjtBQUM1QjtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7O0VBRUEsNENBQTRDO0VBQzVDO0lBQ0Usc0JBQXNCO0lBQ3RCLGFBQWE7RUFDZjs7QUFFRiw0Q0FBNEM7QUFDNUM7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWTtFQUNkOztBQUVGLG9EQUFvRDtBQUNwRDtJQUNJLHFCQUFxQjtFQUN2Qjs7QUFFRixzQ0FBc0M7QUFDdEM7SUFDSSxVQUFVO0VBQ1o7O0FBRUY7QUFDQSxnQkFBZ0I7QUFDaEIsa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5odG1se1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcbmJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZDp3aGl0ZXNtb2tlXFxufVxcblxcbmgxe1xcbiAgICBmb250LXNpemU6IDM1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLlRESXRlbXtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzJhMDQ0ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87IFxcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLlREQ29sdW1ue1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIG1heC13aWR0aDogNDUwcHg7XFxufVxcblxcbiNsaXN0Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ3RvRG8gZG9pbmcgZG9uZSc7XFxuICAgIG1hcmdpbjogNTBweDtcXG59XFxuXFxuI3RvRG9Db250YWluZXJ7XFxuICAgIGdyaWQtYXJlYTogdG9EbztcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDAsIDAsIDAuNjAwKTtcXG59XFxuXFxuI2RvaW5nQ29udGFpbmVye1xcbiAgICBncmlkLWFyZWE6IGRvaW5nO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAwLCAwLjYwMCk7XFxufVxcblxcbiNkb25lQ29udGFpbmVye1xcbiAgICBncmlkLWFyZWE6IGRvbmU7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMTI4LCAwLCAwLjc2MDApXFxufVxcblxcblxcbi8qIEJ1dHRvbiB1c2VkIHRvIG9wZW4gdGhlIGNvbnRhY3QgZm9ybSAtIGZpeGVkIGF0IHRoZSBib3R0b20gb2YgdGhlIHBhZ2UgKi9cXG4ub3Blbi1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDE2cHggMjBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDIzcHg7XFxuICAgIGxlZnQ6IDI4cHg7XFxuICAgIHdpZHRoOiAyODBweDtcXG4gIH1cXG5cXG4vKiBUaGUgcG9wdXAgZm9ybSAtIGhpZGRlbiBieSBkZWZhdWx0ICovXFxuLmZvcm0tcG9wdXAge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMTVweDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTtcXG4gICAgei1pbmRleDogMjtcXG4gIH1cXG5cXG4vKiBBZGQgc3R5bGVzIHRvIHRoZSBmb3JtIGNvbnRhaW5lciAqL1xcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgfVxcblxcbi8qIEZ1bGwtd2lkdGggaW5wdXQgZmllbGRzICovXFxuLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9dGV4dF0sIC5mb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIG1hcmdpbjogNXB4IDAgMjJweCAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XFxuICB9XFxuICBcXG4gIC8qIFdoZW4gdGhlIGlucHV0cyBnZXQgZm9jdXMsIGRvIHNvbWV0aGluZyAqL1xcbiAgLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMsIC5mb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICB9XFxuXFxuLyogU2V0IGEgc3R5bGUgZm9yIHRoZSBzdWJtaXQvbG9naW4gYnV0dG9uICovXFxuLmZvcm0tY29udGFpbmVyIC5idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRBQTZEO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDE2cHggMjBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gIH1cXG5cXG4vKiBBZGQgYSByZWQgYmFja2dyb3VuZCBjb2xvciB0byB0aGUgY2FuY2VsIGJ1dHRvbiAqL1xcbi5mb3JtLWNvbnRhaW5lciAuY2FuY2VsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgfVxcblxcbi8qIEFkZCBzb21lIGhvdmVyIGVmZmVjdHMgdG8gYnV0dG9ucyAqL1xcbi5mb3JtLWNvbnRhaW5lciAuYnRuOmhvdmVyLCAub3Blbi1idXR0b246aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbi5zdWJsYWJlbHtcXG5mb250LXNpemU6IHNtYWxsO1xcbmZvbnQtc3R5bGU6IGl0YWxpYztcXG5mb250LXdlaWdodDogMTAwO1xcbn1cXG5cXG4uZGVsZXRlSXRlbUJ0bntcXG4gIGZsb2F0OiByaWdodDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIG91dGxpbmUtd2lkdGg6IDBjaDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge2RlbGV0ZUl0ZW19IGZyb20gXCIuL2FkZEl0ZW1Gb3JtTWFuYWdlclwiXG5cbmZ1bmN0aW9uIFRvRG8odGl0bGUsIHN0YXR1cywgZGVzY3JpcHRpb24sIGR1ZSwgcHJpb3JpdHksIG5vdGUsIGluZGV4KXtcbiAgICAgICBcbiAgICAgICBjb25zdCBvYmogPSB0aGlzO1xuICAgICAgIFxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlID0gZHVlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMubm90ZSA9IG5vdGU7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcblxuXG5cbiAgICAgICAgLy8gV2l0aGluIHRoZSBmdW5jdGlvbiwgdXNlIG9iaiB0byByZWZlcmVuY2UgdGhlIGluc3RhbmNlLCBub3QgdGhpc1xuICAgICAgICB0aGlzLmNyZWF0ZUJ0biA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBidG4gICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGJ0bi50eXBlICA9ICdidXR0b24nXG4gICAgICAgICAgICAgICAgYnRuLmluZGV4ICA9IG9iai5pbmRleDtcbiAgICAgICAgICAgICAgICBidG4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlSXRlbShidG4uaW5kZXgpXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBidG47XG4gICAgICB9O1xuXG59XG5leHBvcnQge1RvRG99IiwiaW1wb3J0IHsgVG9EbyB9IGZyb20gXCIuL1RET2JqXCI7IFxuaW1wb3J0IHtyZWZyZXNoRGlzcGxheX0gZnJvbSBcIi4vdXBkYXRlRE9NXCI7XG5pbXBvcnQge2Nsb3NlRm9ybX0gZnJvbSBcIi4vYnRuTG9naWNcIjtcbmxldCBpdGVtQXJyYXkgPSBbXTtcbmxldCBpbmRleCA9IDA7XG5cbmZ1bmN0aW9uIGNyZWF0ZUl0ZW0oKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgndGl0bGUnKVswXTtcbiAgICBjb25zdCBzdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnc3RhdHVzJylbMF07XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnZGVzYycpWzBdO1xuICAgIGNvbnN0IGR1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdkdWUnKVswXTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdwcmlvcml0eScpWzBdO1xuICAgIGNvbnN0IG5vdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnbm90ZXMnKVswXTtcbiAgICBcbiAgICBjb25zdCBwcmlvcml0eVZhbHVlID0gaGFuZGxlUHJpb3JpdHkocHJpb3JpdHkudmFsdWUpO1xuICAgIC8vY3JlYXRlIG5ldyBvYmplY3QgdXNpbmcgdGhlIGZvcm1cbiAgICBjb25zdCBuZXdJdGVtID0gbmV3IFRvRG8odGl0bGUudmFsdWUsIHN0YXR1cy52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUsIGR1ZS52YWx1ZSwgcHJpb3JpdHlWYWx1ZSwgbm90ZS52YWx1ZSwgaW5kZXgpO1xuXG4gICAgaXRlbUFycmF5LnB1c2gobmV3SXRlbSk7XG5cbiAgICByZWZyZXNoRGlzcGxheShpdGVtQXJyYXkpO1xuXG4gICAgY2xlYXJGb3JtKHRpdGxlLCBzdGF0dXMsIGRlc2NyaXB0aW9uLCBkdWUsIHByaW9yaXR5LCBub3RlKTtcbiAgICBpbmRleCsrO1xufVxuXG5cbmZ1bmN0aW9uIGNsZWFyRm9ybSh0aXRsZSwgc3RhdHVzLCBkZXNjLCBkdWUsIHByaW9yaXR5LCBub3RlKXtcbiAgICB0aXRsZS52YWx1ZSA9ICcnO1xuICAgIHN0YXR1cy52YWx1ZSA9ICcnOyBcbiAgICBkZXNjLnZhbHVlID0gJyc7IFxuICAgIGR1ZS52YWx1ZSA9ICcnOyBcbiAgICBwcmlvcml0eS52YWx1ZSA9ICcnO1xuICAgIG5vdGUudmFsdWUgPSAnJztcbiAgICBjbG9zZUZvcm0oKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUHJpb3JpdHkodmFsdWUpe1xuICAgIGlmICh2YWx1ZSA9PSAwKSB7cmV0dXJuIFwiTE9XXCJ9XG4gICAgZWxzZSBpZiAodmFsdWUgPT0gMSkge3JldHVyblwiTUVEXCJ9XG4gICAgZWxzZSBpZiAodmFsdWUgPT0gMikge3JldHVybiBcIkhJR0hcIn1cbn1cblxuZnVuY3Rpb24gZGVsZXRlSXRlbShpbmRleCl7XG4gICAgY29uc3QgcmVtb3ZlSW5kZXggPSBpdGVtQXJyYXkuZmluZEluZGV4KCBpdGVtID0+IGl0ZW0uaW5kZXggPT09IGluZGV4ICk7XG4gICAgY29uc29sZS5sb2coYGRlbGV0aW5nIGluZGV4ICR7aW5kZXh9YClcbiAgICAvLyByZW1vdmUgb2JqZWN0XG4gICAgY29uc29sZS5sb2coaXRlbUFycmF5Lmxlbmd0aCk7XG4gICAgaXRlbUFycmF5LnNwbGljZSggcmVtb3ZlSW5kZXgsIDEgKTtcbiAgICBjb25zb2xlLmxvZyhpdGVtQXJyYXkubGVuZ3RoKTtcbiAgICByZWZyZXNoRGlzcGxheShpdGVtQXJyYXkpXG59XG5cblxuZXhwb3J0IHtjcmVhdGVJdGVtLCBkZWxldGVJdGVtfSIsIlxuZnVuY3Rpb24gbG9hZEJ1dHRvbnMoVERMb2dpYykge1xuICAgIGNvbnN0IGFkZEl0ZW1CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkSXRlbUJ0bicpXG4gICAgYWRkSXRlbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFRETG9naWMpXG5cbiAgICBjb25zdCBwb3B1cEFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cEFkZCcpXG4gICAgcG9wdXBBZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuRm9ybSk7XG5cbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZUJ0bicpXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUZvcm0pO1xufVxuXG5mdW5jdGlvbiBvcGVuRm9ybSgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Rm9ybVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGNsb3NlRm9ybSgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Rm9ybVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0gXG5cblxuZXhwb3J0IHtsb2FkQnV0dG9ucywgY2xvc2VGb3JtfSIsIlxuZnVuY3Rpb24gcmVmcmVzaERpc3BsYXkoYXJyYXkpIHtcbiAgICBkaXNwbGF5VEQoYXJyYXkpO1xufVxuXG4vL0FkZHMgYSBuZXcgdG8gZG8gY2FyZCB0byB0aGUgY3VycmVudCBwcm9qZWN0XG5mdW5jdGlvbiBkaXNwbGF5VEQoYXJyYXkpIHtcblxuICAgIC8vY2xlYXIgYWxsIGl0ZW1zXG4gICAgY29uc3QgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b0RvQ29udGFpbmVyJyk7XG4gICAgY29uc3QgZG9pbmdDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9pbmdDb250YWluZXInKTtcbiAgICBjb25zdCBkb25lQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvbmVDb250YWluZXInKTtcblxuICAgIGNsZWFybkNvbnRhaW5lcnModG9Eb0NvbnRhaW5lciwgZG9pbmdDb250YWluZXIsIGRvbmVDb250YWluZXIpO1xuXG4gICAgLy9hZGQgYWxsIGl0ZW1zIGJhY2sgaW5cbiAgICBhcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXG4gICAgICBcbiAgICAgICAgLy9JdGVtcyBkaXZcbiAgICAgICAgY29uc3QgbmV3Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuZXdDYXJkLmNsYXNzTGlzdC5hZGQoJ1RESXRlbScpO1xuXG4gICAgICAgIC8vQWRkIGVhY2ggc2VjdGlvbiBvZiB0aGUgbmV3IGl0ZW0gaW5zaWRlIHRoZWlyIG93biBkaXZzXG4gICAgICAgIGNvbnN0IGl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtVGl0bGUuaW5uZXJIVE1MID0gZWxlbWVudC50aXRsZTtcblxuICAgICAgICBjb25zdCBpdGVtRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtRGVzYy5pbm5lckhUTUwgPSBlbGVtZW50LmRlc2NyaXB0aW9uO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1EdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbUR1ZS5pbm5lckhUTUwgPSBlbGVtZW50LmR1ZTtcblxuICAgICAgICBjb25zdCBpdGVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbVByaW9yaXR5LmlubmVySFRNTCA9IGVsZW1lbnQucHJpb3JpdHk7XG5cbiAgICAgICAgY29uc3QgaXRlbU5vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbU5vdGUuaW5uZXJIVE1MID0gZWxlbWVudC5ub3RlO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1CdG4gPSBlbGVtZW50LmNyZWF0ZUJ0bigpO1xuICAgICAgICAgICAgaXRlbUJ0bi5pbm5lckhUTUwgPSAnLSdcbiAgICAgICAgICAgIGl0ZW1CdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlSXRlbUJ0bicpO1xuXG4gICAgICAgIG5ld0NhcmQuYXBwZW5kQ2hpbGQoaXRlbUJ0bik7XG4gICAgICAgIG5ld0NhcmQuYXBwZW5kQ2hpbGQoaXRlbVRpdGxlKTtcbiAgICAgICAgbmV3Q2FyZC5hcHBlbmRDaGlsZChpdGVtRGVzYyk7XG4gICAgICAgIG5ld0NhcmQuYXBwZW5kQ2hpbGQoaXRlbUR1ZSk7XG4gICAgICAgIG5ld0NhcmQuYXBwZW5kQ2hpbGQoaXRlbVByaW9yaXR5KTtcbiAgICAgICAgbmV3Q2FyZC5hcHBlbmRDaGlsZChpdGVtTm90ZSk7XG5cblxuICAgICAgICBpZiAoZWxlbWVudC5zdGF0dXMgPT0gMCl7XG4gICAgICAgICAgICB0b0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0NhcmQpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZWxlbWVudC5zdGF0dXMgPT0gMSl7XG4gICAgICAgICAgICBkb2luZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdDYXJkKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGVsZW1lbnQuc3RhdHVzID09IDIpe1xuICAgICAgICAgICAgZG9uZUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdDYXJkKVxuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgfSk7XG5cblxufVxuXG5mdW5jdGlvbiBjbGVhcm5Db250YWluZXJzKHRvZG8sIGRvaW5nLCBkb25lKSB7XG4gICAgd2hpbGUgKHRvZG8uZmlyc3RDaGlsZCkge1xuICAgICAgICB0b2RvLnJlbW92ZUNoaWxkKHRvZG8uZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgd2hpbGUgKGRvaW5nLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZG9pbmcucmVtb3ZlQ2hpbGQoZG9pbmcuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgd2hpbGUgKGRvbmUuZmlyc3RDaGlsZCkge1xuICAgICAgICBkb25lLnJlbW92ZUNoaWxkKGRvbmUuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5leHBvcnQge3JlZnJlc2hEaXNwbGF5fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVJdGVtIH0gZnJvbSAnLi9hZGRJdGVtRm9ybU1hbmFnZXInO1xuaW1wb3J0IHsgbG9hZEJ1dHRvbnMgfSBmcm9tICcuL2J0bkxvZ2ljJztcblxuZnVuY3Rpb24gY29tcG9uZW50KCl7XG4gICAgbG9hZEJ1dHRvbnMoY3JlYXRlSXRlbSk7XG59XG5cbmNvbXBvbmVudCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==