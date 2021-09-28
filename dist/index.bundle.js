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
/* harmony export */   "ProjectList": () => (/* binding */ ProjectList),
/* harmony export */   "ToDo": () => (/* binding */ ToDo)
/* harmony export */ });
/* harmony import */ var _addItemFormManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addItemFormManager */ "./src/addItemFormManager.js");


function ProjectList(name, items){
        const obj = this;

        this.name = name;
        this.items = items;
        this.addItem = (newItem) => items.push(newItem);
}






function ToDo(title, status, description, due, priority, note){
       
      // const obj = this;
       
        this.title = title;
        this.status = status;
        this.description = description;
        this.due = due;
        this.note = note;
        this.priority = priority;


/*
        // Within the function, use obj to reference the instance, not this
        this.createBtn = function() {
                const btn = document.createElement('button');
                btn.type = 'button'
                btn.title = obj.title;
                btn.onclick = function() {
                        deleteItem(btn.title)
        };
        return btn;
      };
*/
}


/***/ }),

/***/ "./src/addItemFormManager.js":
/*!***********************************!*\
  !*** ./src/addItemFormManager.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNewItem": () => (/* binding */ createNewItem),
/* harmony export */   "deleteItem": () => (/* binding */ deleteItem),
/* harmony export */   "createAllItems": () => (/* binding */ createAllItems)
/* harmony export */ });
/* harmony import */ var _TDObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TDObj */ "./src/TDObj.js");
/* harmony import */ var _updateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateDOM */ "./src/updateDOM.js");
/* harmony import */ var _btnLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./btnLogic */ "./src/btnLogic.js");
/* harmony import */ var _savingStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./savingStorage */ "./src/savingStorage.js");
 





const saveString = 'savedItems';

//loop through all items in the array and create (but not make new objects)
function createAllItems(array){
    array.forEach(item => {
        console.log("hello")
        createItemsFromStorage(item);
    });  
    }

function createItemsFromStorage(item){
    const title = item.title;
    const status = item.status;
    const description = item.description;
    const due = item.due;
    const priority = item.priority;
    const note = item.note;
    const priorityValue = handlePriority(priority.value);

    let array = _savingStorage__WEBPACK_IMPORTED_MODULE_3__.getSavedProjects();

    console.log(title)
    var newItem = new _TDObj__WEBPACK_IMPORTED_MODULE_0__.ToDo(title, status, description, due, priorityValue, note);
    array.push(newItem);
    _savingStorage__WEBPACK_IMPORTED_MODULE_3__.setSavedProjects(saveString, array);


    (0,_updateDOM__WEBPACK_IMPORTED_MODULE_1__.refreshDisplay)(array);
    console.log(_savingStorage__WEBPACK_IMPORTED_MODULE_3__.getSavedProjects());
}

function createNewItem() {

    const title = document.getElementsByName('title')[0];
    const status = document.getElementsByName('status')[0];
    const description = document.getElementsByName('desc')[0];
    const due = document.getElementsByName('due')[0];
    const priority = document.getElementsByName('priority')[0];
    const note = document.getElementsByName('notes')[0];
    const priorityValue = handlePriority(priority.value);

    let array = _savingStorage__WEBPACK_IMPORTED_MODULE_3__.getSavedProjects();
    
    //create new object using the form

    console.log(title)
    var newItem = new _TDObj__WEBPACK_IMPORTED_MODULE_0__.ToDo(title.value, status.value, description.value, due.value, priorityValue, note.value);
    array.push(newItem);
    _savingStorage__WEBPACK_IMPORTED_MODULE_3__.setSavedProjects(saveString, array);


    (0,_updateDOM__WEBPACK_IMPORTED_MODULE_1__.refreshDisplay)(array);
    console.log(_savingStorage__WEBPACK_IMPORTED_MODULE_3__.getSavedProjects());
    clearForm(title, status, description, due, priority, note);
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

function deleteItem(title){
    const array = _savingStorage__WEBPACK_IMPORTED_MODULE_3__.getItems();
    const removeTitle = array.findIndex( item => item.title === title );
    console.log(`deleting item ${title}`)

    // remove object
    console.log(array.length);
    array.splice( removeTitle, 1 );
    _savingStorage__WEBPACK_IMPORTED_MODULE_3__.setSavedProjects(saveString, array)
    console.log(array.length);
    (0,_updateDOM__WEBPACK_IMPORTED_MODULE_1__.refreshDisplay)(array)
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
/* harmony import */ var _savingStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./savingStorage */ "./src/savingStorage.js");
/* harmony import */ var _addItemFormManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addItemFormManager */ "./src/addItemFormManager.js");



function loadButtons() {
    const addItemBtn = document.getElementById('addItemBtn')
    addItemBtn.addEventListener('click', () => ((0,_addItemFormManager__WEBPACK_IMPORTED_MODULE_1__.createNewItem)(_savingStorage__WEBPACK_IMPORTED_MODULE_0__.getItems(), true)) )

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

/***/ "./src/savingStorage.js":
/*!******************************!*\
  !*** ./src/savingStorage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setSavedProjects": () => (/* binding */ setSavedProjects),
/* harmony export */   "getSavedProjects": () => (/* binding */ getSavedProjects),
/* harmony export */   "getItems": () => (/* binding */ getItems),
/* harmony export */   "getProjects": () => (/* binding */ getProjects),
/* harmony export */   "setItems": () => (/* binding */ setItems),
/* harmony export */   "setProjects": () => (/* binding */ setProjects)
/* harmony export */ });
let itemArray = [];
let projectArray = []

//Stolen code that allows the saving of objects to local storage
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
//Stolen code that allows the getting of objects to local storage
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

function setSavedProjects(string, array) {
    if (array) {
        localStorage.setObj(string, array) //Key is not the obj key but the key to save shit under
        };
}

function getSavedProjects(string) {

    if (localStorage.getObj(string)){
        return localStorage.getObj(string);
    }

    else{
        return itemArray;
    }
 //Acces the key the library has been saved to
}

function getItems(){
    return itemArray
}


function setItems(array){
    itemArray = array;
}

function getProjects(){
    return projectArray
}

function setProjects(array){
    projectArray = array;
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
/* harmony import */ var _addItemFormManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addItemFormManager */ "./src/addItemFormManager.js");


function refreshDisplay(array) {
    displayTD(array);
    console.log('added');
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



 

        const itemBtn = createButton(element);
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

function createButton(element){
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.title = element.title;
    console.log(btn.title)
    btn.onclick = function(){;(0,_addItemFormManager__WEBPACK_IMPORTED_MODULE_0__.deleteItem)(btn.title)}
    return btn;
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
/* harmony import */ var _savingStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./savingStorage */ "./src/savingStorage.js");






const saveString = 'savedItems';

function component(){
    //load array
    (0,_btnLogic__WEBPACK_IMPORTED_MODULE_2__.loadButtons)();
    console.log(_savingStorage__WEBPACK_IMPORTED_MODULE_3__.getSavedProjects(saveString));
    (0,_addItemFormManager__WEBPACK_IMPORTED_MODULE_1__.createAllItems)(_savingStorage__WEBPACK_IMPORTED_MODULE_3__.getSavedProjects(saveString))
}

component();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXdCO0FBQ3hDLElBQUksbUVBQWMsQ0FBQyw0REFBd0I7QUFDM0M7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL1RET2JqLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9hZGRJdGVtRm9ybU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2J0bkxvZ2ljLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zYXZpbmdTdG9yYWdlLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy91cGRhdGVET00uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbmh0bWx7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuYm9keXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kOndoaXRlc21va2VcXG59XFxuXFxuaDF7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uVERJdGVte1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMmEwNDRlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogYXV0bzsgXFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uVERDb2x1bW57XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcXG59XFxuXFxuI2xpc3RDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAndG9EbyBkb2luZyBkb25lJztcXG4gICAgbWFyZ2luOiA1MHB4O1xcbn1cXG5cXG4jdG9Eb0NvbnRhaW5lcntcXG4gICAgZ3JpZC1hcmVhOiB0b0RvO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMCwgMCwgMC42MDApO1xcbn1cXG5cXG4jZG9pbmdDb250YWluZXJ7XFxuICAgIGdyaWQtYXJlYTogZG9pbmc7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDAsIDAuNjAwKTtcXG59XFxuXFxuI2RvbmVDb250YWluZXJ7XFxuICAgIGdyaWQtYXJlYTogZG9uZTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAxMjgsIDAsIDAuNzYwMClcXG59XFxuXFxuXFxuLyogQnV0dG9uIHVzZWQgdG8gb3BlbiB0aGUgY29udGFjdCBmb3JtIC0gZml4ZWQgYXQgdGhlIGJvdHRvbSBvZiB0aGUgcGFnZSAqL1xcbi5vcGVuLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTZweCAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMjNweDtcXG4gICAgbGVmdDogMjhweDtcXG4gICAgd2lkdGg6IDI4MHB4O1xcbiAgfVxcblxcbi8qIFRoZSBwb3B1cCBmb3JtIC0gaGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4uZm9ybS1wb3B1cCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAxNXB4O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgfVxcblxcbi8qIEFkZCBzdHlsZXMgdG8gdGhlIGZvcm0gY29udGFpbmVyICovXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB9XFxuXFxuLyogRnVsbC13aWR0aCBpbnB1dCBmaWVsZHMgKi9cXG4uZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT10ZXh0XSwgLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgbWFyZ2luOiA1cHggMCAyMnB4IDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcXG4gIH1cXG4gIFxcbiAgLyogV2hlbiB0aGUgaW5wdXRzIGdldCBmb2N1cywgZG8gc29tZXRoaW5nICovXFxuICAuZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT10ZXh0XTpmb2N1cywgLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gIH1cXG5cXG4vKiBTZXQgYSBzdHlsZSBmb3IgdGhlIHN1Ym1pdC9sb2dpbiBidXR0b24gKi9cXG4uZm9ybS1jb250YWluZXIgLmJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNEFBNkQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTZweCAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgfVxcblxcbi8qIEFkZCBhIHJlZCBiYWNrZ3JvdW5kIGNvbG9yIHRvIHRoZSBjYW5jZWwgYnV0dG9uICovXFxuLmZvcm0tY29udGFpbmVyIC5jYW5jZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICB9XFxuXFxuLyogQWRkIHNvbWUgaG92ZXIgZWZmZWN0cyB0byBidXR0b25zICovXFxuLmZvcm0tY29udGFpbmVyIC5idG46aG92ZXIsIC5vcGVuLWJ1dHRvbjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuLnN1YmxhYmVse1xcbmZvbnQtc2l6ZTogc21hbGw7XFxuZm9udC1zdHlsZTogaXRhbGljO1xcbmZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcblxcbi5kZWxldGVJdGVtQnRue1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgb3V0bGluZS13aWR0aDogMGNoO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Y7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQyx1QkFBdUI7SUFDdkIsc0NBQXNDO0lBQ3RDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGVBQWU7SUFDZjtBQUNKOzs7QUFHQSwyRUFBMkU7QUFDM0U7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0VBQ2Q7O0FBRUYsdUNBQXVDO0FBQ3ZDO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixTQUFTO0lBQ1QsVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixVQUFVO0VBQ1o7O0FBRUYscUNBQXFDO0FBQ3JDO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7RUFDekI7O0FBRUYsNEJBQTRCO0FBQzVCO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLG1CQUFtQjtFQUNyQjs7RUFFQSw0Q0FBNEM7RUFDNUM7SUFDRSxzQkFBc0I7SUFDdEIsYUFBYTtFQUNmOztBQUVGLDRDQUE0QztBQUM1QztJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2Q7O0FBRUYsb0RBQW9EO0FBQ3BEO0lBQ0kscUJBQXFCO0VBQ3ZCOztBQUVGLHNDQUFzQztBQUN0QztJQUNJLFVBQVU7RUFDWjs7QUFFRjtBQUNBLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbmh0bWx7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuYm9keXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kOndoaXRlc21va2VcXG59XFxuXFxuaDF7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uVERJdGVte1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMmEwNDRlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogYXV0bzsgXFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uVERDb2x1bW57XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcXG59XFxuXFxuI2xpc3RDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAndG9EbyBkb2luZyBkb25lJztcXG4gICAgbWFyZ2luOiA1MHB4O1xcbn1cXG5cXG4jdG9Eb0NvbnRhaW5lcntcXG4gICAgZ3JpZC1hcmVhOiB0b0RvO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMCwgMCwgMC42MDApO1xcbn1cXG5cXG4jZG9pbmdDb250YWluZXJ7XFxuICAgIGdyaWQtYXJlYTogZG9pbmc7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDAsIDAuNjAwKTtcXG59XFxuXFxuI2RvbmVDb250YWluZXJ7XFxuICAgIGdyaWQtYXJlYTogZG9uZTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAxMjgsIDAsIDAuNzYwMClcXG59XFxuXFxuXFxuLyogQnV0dG9uIHVzZWQgdG8gb3BlbiB0aGUgY29udGFjdCBmb3JtIC0gZml4ZWQgYXQgdGhlIGJvdHRvbSBvZiB0aGUgcGFnZSAqL1xcbi5vcGVuLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTZweCAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMjNweDtcXG4gICAgbGVmdDogMjhweDtcXG4gICAgd2lkdGg6IDI4MHB4O1xcbiAgfVxcblxcbi8qIFRoZSBwb3B1cCBmb3JtIC0gaGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4uZm9ybS1wb3B1cCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAxNXB4O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgfVxcblxcbi8qIEFkZCBzdHlsZXMgdG8gdGhlIGZvcm0gY29udGFpbmVyICovXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB9XFxuXFxuLyogRnVsbC13aWR0aCBpbnB1dCBmaWVsZHMgKi9cXG4uZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT10ZXh0XSwgLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgbWFyZ2luOiA1cHggMCAyMnB4IDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcXG4gIH1cXG4gIFxcbiAgLyogV2hlbiB0aGUgaW5wdXRzIGdldCBmb2N1cywgZG8gc29tZXRoaW5nICovXFxuICAuZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT10ZXh0XTpmb2N1cywgLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gIH1cXG5cXG4vKiBTZXQgYSBzdHlsZSBmb3IgdGhlIHN1Ym1pdC9sb2dpbiBidXR0b24gKi9cXG4uZm9ybS1jb250YWluZXIgLmJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNEFBNkQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTZweCAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgfVxcblxcbi8qIEFkZCBhIHJlZCBiYWNrZ3JvdW5kIGNvbG9yIHRvIHRoZSBjYW5jZWwgYnV0dG9uICovXFxuLmZvcm0tY29udGFpbmVyIC5jYW5jZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICB9XFxuXFxuLyogQWRkIHNvbWUgaG92ZXIgZWZmZWN0cyB0byBidXR0b25zICovXFxuLmZvcm0tY29udGFpbmVyIC5idG46aG92ZXIsIC5vcGVuLWJ1dHRvbjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuLnN1YmxhYmVse1xcbmZvbnQtc2l6ZTogc21hbGw7XFxuZm9udC1zdHlsZTogaXRhbGljO1xcbmZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcblxcbi5kZWxldGVJdGVtQnRue1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgb3V0bGluZS13aWR0aDogMGNoO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7ZGVsZXRlSXRlbX0gZnJvbSBcIi4vYWRkSXRlbUZvcm1NYW5hZ2VyXCJcblxuZnVuY3Rpb24gUHJvamVjdExpc3QobmFtZSwgaXRlbXMpe1xuICAgICAgICBjb25zdCBvYmogPSB0aGlzO1xuXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBpdGVtcztcbiAgICAgICAgdGhpcy5hZGRJdGVtID0gKG5ld0l0ZW0pID0+IGl0ZW1zLnB1c2gobmV3SXRlbSk7XG59XG5cblxuXG5cblxuXG5mdW5jdGlvbiBUb0RvKHRpdGxlLCBzdGF0dXMsIGRlc2NyaXB0aW9uLCBkdWUsIHByaW9yaXR5LCBub3RlKXtcbiAgICAgICBcbiAgICAgIC8vIGNvbnN0IG9iaiA9IHRoaXM7XG4gICAgICAgXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWUgPSBkdWU7XG4gICAgICAgIHRoaXMubm90ZSA9IG5vdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcblxuXG4vKlxuICAgICAgICAvLyBXaXRoaW4gdGhlIGZ1bmN0aW9uLCB1c2Ugb2JqIHRvIHJlZmVyZW5jZSB0aGUgaW5zdGFuY2UsIG5vdCB0aGlzXG4gICAgICAgIHRoaXMuY3JlYXRlQnRuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgYnRuLnR5cGUgPSAnYnV0dG9uJ1xuICAgICAgICAgICAgICAgIGJ0bi50aXRsZSA9IG9iai50aXRsZTtcbiAgICAgICAgICAgICAgICBidG4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlSXRlbShidG4udGl0bGUpXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBidG47XG4gICAgICB9O1xuKi9cbn1cbmV4cG9ydCB7UHJvamVjdExpc3QsIFRvRG99IiwiaW1wb3J0IHsgVG9EbyB9IGZyb20gXCIuL1RET2JqXCI7IFxuaW1wb3J0IHtyZWZyZXNoRGlzcGxheX0gZnJvbSBcIi4vdXBkYXRlRE9NXCI7XG5pbXBvcnQge2Nsb3NlRm9ybX0gZnJvbSBcIi4vYnRuTG9naWNcIjtcbmltcG9ydCAqIGFzIHN0b3JhZ2UgZnJvbSAnLi9zYXZpbmdTdG9yYWdlJztcblxuXG5jb25zdCBzYXZlU3RyaW5nID0gJ3NhdmVkSXRlbXMnO1xuXG4vL2xvb3AgdGhyb3VnaCBhbGwgaXRlbXMgaW4gdGhlIGFycmF5IGFuZCBjcmVhdGUgKGJ1dCBub3QgbWFrZSBuZXcgb2JqZWN0cylcbmZ1bmN0aW9uIGNyZWF0ZUFsbEl0ZW1zKGFycmF5KXtcbiAgICBhcnJheS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImhlbGxvXCIpXG4gICAgICAgIGNyZWF0ZUl0ZW1zRnJvbVN0b3JhZ2UoaXRlbSk7XG4gICAgfSk7ICBcbiAgICB9XG5cbmZ1bmN0aW9uIGNyZWF0ZUl0ZW1zRnJvbVN0b3JhZ2UoaXRlbSl7XG4gICAgY29uc3QgdGl0bGUgPSBpdGVtLnRpdGxlO1xuICAgIGNvbnN0IHN0YXR1cyA9IGl0ZW0uc3RhdHVzO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gaXRlbS5kZXNjcmlwdGlvbjtcbiAgICBjb25zdCBkdWUgPSBpdGVtLmR1ZTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGl0ZW0ucHJpb3JpdHk7XG4gICAgY29uc3Qgbm90ZSA9IGl0ZW0ubm90ZTtcbiAgICBjb25zdCBwcmlvcml0eVZhbHVlID0gaGFuZGxlUHJpb3JpdHkocHJpb3JpdHkudmFsdWUpO1xuXG4gICAgbGV0IGFycmF5ID0gc3RvcmFnZS5nZXRTYXZlZFByb2plY3RzKCk7XG5cbiAgICBjb25zb2xlLmxvZyh0aXRsZSlcbiAgICB2YXIgbmV3SXRlbSA9IG5ldyBUb0RvKHRpdGxlLCBzdGF0dXMsIGRlc2NyaXB0aW9uLCBkdWUsIHByaW9yaXR5VmFsdWUsIG5vdGUpO1xuICAgIGFycmF5LnB1c2gobmV3SXRlbSk7XG4gICAgc3RvcmFnZS5zZXRTYXZlZFByb2plY3RzKHNhdmVTdHJpbmcsIGFycmF5KTtcblxuXG4gICAgcmVmcmVzaERpc3BsYXkoYXJyYXkpO1xuICAgIGNvbnNvbGUubG9nKHN0b3JhZ2UuZ2V0U2F2ZWRQcm9qZWN0cygpKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV3SXRlbSgpIHtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ3RpdGxlJylbMF07XG4gICAgY29uc3Qgc3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ3N0YXR1cycpWzBdO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ2Rlc2MnKVswXTtcbiAgICBjb25zdCBkdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnZHVlJylbMF07XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgncHJpb3JpdHknKVswXTtcbiAgICBjb25zdCBub3RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ25vdGVzJylbMF07XG4gICAgY29uc3QgcHJpb3JpdHlWYWx1ZSA9IGhhbmRsZVByaW9yaXR5KHByaW9yaXR5LnZhbHVlKTtcblxuICAgIGxldCBhcnJheSA9IHN0b3JhZ2UuZ2V0U2F2ZWRQcm9qZWN0cygpO1xuICAgIFxuICAgIC8vY3JlYXRlIG5ldyBvYmplY3QgdXNpbmcgdGhlIGZvcm1cblxuICAgIGNvbnNvbGUubG9nKHRpdGxlKVxuICAgIHZhciBuZXdJdGVtID0gbmV3IFRvRG8odGl0bGUudmFsdWUsIHN0YXR1cy52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUsIGR1ZS52YWx1ZSwgcHJpb3JpdHlWYWx1ZSwgbm90ZS52YWx1ZSk7XG4gICAgYXJyYXkucHVzaChuZXdJdGVtKTtcbiAgICBzdG9yYWdlLnNldFNhdmVkUHJvamVjdHMoc2F2ZVN0cmluZywgYXJyYXkpO1xuXG5cbiAgICByZWZyZXNoRGlzcGxheShhcnJheSk7XG4gICAgY29uc29sZS5sb2coc3RvcmFnZS5nZXRTYXZlZFByb2plY3RzKCkpO1xuICAgIGNsZWFyRm9ybSh0aXRsZSwgc3RhdHVzLCBkZXNjcmlwdGlvbiwgZHVlLCBwcmlvcml0eSwgbm90ZSk7XG59XG5cblxuZnVuY3Rpb24gY2xlYXJGb3JtKHRpdGxlLCBzdGF0dXMsIGRlc2MsIGR1ZSwgcHJpb3JpdHksIG5vdGUpe1xuICAgIHRpdGxlLnZhbHVlID0gJyc7XG4gICAgc3RhdHVzLnZhbHVlID0gJyc7IFxuICAgIGRlc2MudmFsdWUgPSAnJzsgXG4gICAgZHVlLnZhbHVlID0gJyc7IFxuICAgIHByaW9yaXR5LnZhbHVlID0gJyc7XG4gICAgbm90ZS52YWx1ZSA9ICcnO1xuICAgIGNsb3NlRm9ybSgpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVQcmlvcml0eSh2YWx1ZSl7XG4gICAgaWYgKHZhbHVlID09IDApIHtyZXR1cm4gXCJMT1dcIn1cbiAgICBlbHNlIGlmICh2YWx1ZSA9PSAxKSB7cmV0dXJuXCJNRURcIn1cbiAgICBlbHNlIGlmICh2YWx1ZSA9PSAyKSB7cmV0dXJuIFwiSElHSFwifVxufVxuXG5mdW5jdGlvbiBkZWxldGVJdGVtKHRpdGxlKXtcbiAgICBjb25zdCBhcnJheSA9IHN0b3JhZ2UuZ2V0SXRlbXMoKTtcbiAgICBjb25zdCByZW1vdmVUaXRsZSA9IGFycmF5LmZpbmRJbmRleCggaXRlbSA9PiBpdGVtLnRpdGxlID09PSB0aXRsZSApO1xuICAgIGNvbnNvbGUubG9nKGBkZWxldGluZyBpdGVtICR7dGl0bGV9YClcblxuICAgIC8vIHJlbW92ZSBvYmplY3RcbiAgICBjb25zb2xlLmxvZyhhcnJheS5sZW5ndGgpO1xuICAgIGFycmF5LnNwbGljZSggcmVtb3ZlVGl0bGUsIDEgKTtcbiAgICBzdG9yYWdlLnNldFNhdmVkUHJvamVjdHMoc2F2ZVN0cmluZywgYXJyYXkpXG4gICAgY29uc29sZS5sb2coYXJyYXkubGVuZ3RoKTtcbiAgICByZWZyZXNoRGlzcGxheShhcnJheSlcbn1cblxuXG5leHBvcnQge2NyZWF0ZU5ld0l0ZW0sIGRlbGV0ZUl0ZW0sIGNyZWF0ZUFsbEl0ZW1zfSIsImltcG9ydCAqIGFzIHN0b3JhZ2UgZnJvbSAnLi9zYXZpbmdTdG9yYWdlJztcbmltcG9ydCB7Y3JlYXRlTmV3SXRlbX0gZnJvbSAnLi9hZGRJdGVtRm9ybU1hbmFnZXInO1xuXG5mdW5jdGlvbiBsb2FkQnV0dG9ucygpIHtcbiAgICBjb25zdCBhZGRJdGVtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZEl0ZW1CdG4nKVxuICAgIGFkZEl0ZW1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiAoY3JlYXRlTmV3SXRlbShzdG9yYWdlLmdldEl0ZW1zKCksIHRydWUpKSApXG5cbiAgICBjb25zdCBwb3B1cEFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cEFkZCcpXG4gICAgcG9wdXBBZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuRm9ybSk7XG5cbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZUJ0bicpXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUZvcm0pO1xufVxuXG5mdW5jdGlvbiBvcGVuRm9ybSgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Rm9ybVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGNsb3NlRm9ybSgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Rm9ybVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0gXG5cblxuZXhwb3J0IHtsb2FkQnV0dG9ucywgY2xvc2VGb3JtfSIsImxldCBpdGVtQXJyYXkgPSBbXTtcbmxldCBwcm9qZWN0QXJyYXkgPSBbXVxuXG4vL1N0b2xlbiBjb2RlIHRoYXQgYWxsb3dzIHRoZSBzYXZpbmcgb2Ygb2JqZWN0cyB0byBsb2NhbCBzdG9yYWdlXG5TdG9yYWdlLnByb3RvdHlwZS5zZXRPYmogPSBmdW5jdGlvbihrZXksIG9iaikge1xuICAgIHJldHVybiB0aGlzLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShvYmopKVxufVxuLy9TdG9sZW4gY29kZSB0aGF0IGFsbG93cyB0aGUgZ2V0dGluZyBvZiBvYmplY3RzIHRvIGxvY2FsIHN0b3JhZ2VcblN0b3JhZ2UucHJvdG90eXBlLmdldE9iaiA9IGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKHRoaXMuZ2V0SXRlbShrZXkpKVxufVxuXG5mdW5jdGlvbiBzZXRTYXZlZFByb2plY3RzKHN0cmluZywgYXJyYXkpIHtcbiAgICBpZiAoYXJyYXkpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldE9iaihzdHJpbmcsIGFycmF5KSAvL0tleSBpcyBub3QgdGhlIG9iaiBrZXkgYnV0IHRoZSBrZXkgdG8gc2F2ZSBzaGl0IHVuZGVyXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIGdldFNhdmVkUHJvamVjdHMoc3RyaW5nKSB7XG5cbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldE9iaihzdHJpbmcpKXtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRPYmooc3RyaW5nKTtcbiAgICB9XG5cbiAgICBlbHNle1xuICAgICAgICByZXR1cm4gaXRlbUFycmF5O1xuICAgIH1cbiAvL0FjY2VzIHRoZSBrZXkgdGhlIGxpYnJhcnkgaGFzIGJlZW4gc2F2ZWQgdG9cbn1cblxuZnVuY3Rpb24gZ2V0SXRlbXMoKXtcbiAgICByZXR1cm4gaXRlbUFycmF5XG59XG5cblxuZnVuY3Rpb24gc2V0SXRlbXMoYXJyYXkpe1xuICAgIGl0ZW1BcnJheSA9IGFycmF5O1xufVxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0cygpe1xuICAgIHJldHVybiBwcm9qZWN0QXJyYXlcbn1cblxuZnVuY3Rpb24gc2V0UHJvamVjdHMoYXJyYXkpe1xuICAgIHByb2plY3RBcnJheSA9IGFycmF5O1xufVxuXG5cbmV4cG9ydCB7c2V0U2F2ZWRQcm9qZWN0cywgZ2V0U2F2ZWRQcm9qZWN0cywgZ2V0SXRlbXMsIGdldFByb2plY3RzLCBzZXRJdGVtcywgc2V0UHJvamVjdHN9IiwiaW1wb3J0IHsgZGVsZXRlSXRlbSB9IGZyb20gXCIuL2FkZEl0ZW1Gb3JtTWFuYWdlclwiO1xuXG5mdW5jdGlvbiByZWZyZXNoRGlzcGxheShhcnJheSkge1xuICAgIGRpc3BsYXlURChhcnJheSk7XG4gICAgY29uc29sZS5sb2coJ2FkZGVkJyk7XG59XG5cbi8vQWRkcyBhIG5ldyB0byBkbyBjYXJkIHRvIHRoZSBjdXJyZW50IHByb2plY3RcbmZ1bmN0aW9uIGRpc3BsYXlURChhcnJheSkge1xuXG4gICAgLy9jbGVhciBhbGwgaXRlbXNcbiAgICBjb25zdCB0b0RvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvRG9Db250YWluZXInKTtcbiAgICBjb25zdCBkb2luZ0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb2luZ0NvbnRhaW5lcicpO1xuICAgIGNvbnN0IGRvbmVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9uZUNvbnRhaW5lcicpO1xuXG4gICAgY2xlYXJuQ29udGFpbmVycyh0b0RvQ29udGFpbmVyLCBkb2luZ0NvbnRhaW5lciwgZG9uZUNvbnRhaW5lcik7XG5cbiAgICAvL2FkZCBhbGwgaXRlbXMgYmFjayBpblxuICAgIGFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG5cbiAgICAgIFxuICAgICAgICAvL0l0ZW1zIGRpdlxuICAgICAgICBjb25zdCBuZXdDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld0NhcmQuY2xhc3NMaXN0LmFkZCgnVERJdGVtJyk7XG5cbiAgICAgICAgLy9BZGQgZWFjaCBzZWN0aW9uIG9mIHRoZSBuZXcgaXRlbSBpbnNpZGUgdGhlaXIgb3duIGRpdnNcbiAgICAgICAgY29uc3QgaXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1UaXRsZS5pbm5lckhUTUwgPSBlbGVtZW50LnRpdGxlO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1EZXNjLmlubmVySFRNTCA9IGVsZW1lbnQuZGVzY3JpcHRpb247XG5cbiAgICAgICAgY29uc3QgaXRlbUR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtRHVlLmlubmVySFRNTCA9IGVsZW1lbnQuZHVlO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtUHJpb3JpdHkuaW5uZXJIVE1MID0gZWxlbWVudC5wcmlvcml0eTtcblxuICAgICAgICBjb25zdCBpdGVtTm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtTm90ZS5pbm5lckhUTUwgPSBlbGVtZW50Lm5vdGU7XG5cblxuXG4gXG5cbiAgICAgICAgY29uc3QgaXRlbUJ0biA9IGNyZWF0ZUJ1dHRvbihlbGVtZW50KTtcbiAgICAgICAgICAgIGl0ZW1CdG4uaW5uZXJIVE1MID0gJy0nXG4gICAgICAgICAgICBpdGVtQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZUl0ZW1CdG4nKTtcblxuICAgICAgICBuZXdDYXJkLmFwcGVuZENoaWxkKGl0ZW1CdG4pO1xuICAgICAgICBuZXdDYXJkLmFwcGVuZENoaWxkKGl0ZW1UaXRsZSk7XG4gICAgICAgIG5ld0NhcmQuYXBwZW5kQ2hpbGQoaXRlbURlc2MpO1xuICAgICAgICBuZXdDYXJkLmFwcGVuZENoaWxkKGl0ZW1EdWUpO1xuICAgICAgICBuZXdDYXJkLmFwcGVuZENoaWxkKGl0ZW1Qcmlvcml0eSk7XG4gICAgICAgIG5ld0NhcmQuYXBwZW5kQ2hpbGQoaXRlbU5vdGUpO1xuXG5cbiAgICAgICAgaWYgKGVsZW1lbnQuc3RhdHVzID09IDApe1xuICAgICAgICAgICAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdDYXJkKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGVsZW1lbnQuc3RhdHVzID09IDEpe1xuICAgICAgICAgICAgZG9pbmdDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3Q2FyZClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlbGVtZW50LnN0YXR1cyA9PSAyKXtcbiAgICAgICAgICAgIGRvbmVDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3Q2FyZClcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgIH0pO1xuXG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlQnV0dG9uKGVsZW1lbnQpe1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi50eXBlID0gJ2J1dHRvbic7XG4gICAgYnRuLnRpdGxlID0gZWxlbWVudC50aXRsZTtcbiAgICBjb25zb2xlLmxvZyhidG4udGl0bGUpXG4gICAgYnRuLm9uY2xpY2sgPSBmdW5jdGlvbigpe2RlbGV0ZUl0ZW0oYnRuLnRpdGxlKX1cbiAgICByZXR1cm4gYnRuO1xufVxuXG5cbmZ1bmN0aW9uIGNsZWFybkNvbnRhaW5lcnModG9kbywgZG9pbmcsIGRvbmUpIHtcbiAgICB3aGlsZSAodG9kby5maXJzdENoaWxkKSB7XG4gICAgICAgIHRvZG8ucmVtb3ZlQ2hpbGQodG9kby5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICB3aGlsZSAoZG9pbmcuZmlyc3RDaGlsZCkge1xuICAgICAgICBkb2luZy5yZW1vdmVDaGlsZChkb2luZy5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICB3aGlsZSAoZG9uZS5maXJzdENoaWxkKSB7XG4gICAgICAgIGRvbmUucmVtb3ZlQ2hpbGQoZG9uZS5maXJzdENoaWxkKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7cmVmcmVzaERpc3BsYXl9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGNyZWF0ZUFsbEl0ZW1zfSBmcm9tICcuL2FkZEl0ZW1Gb3JtTWFuYWdlcic7XG5pbXBvcnQgeyBsb2FkQnV0dG9ucyB9IGZyb20gJy4vYnRuTG9naWMnO1xuaW1wb3J0ICogYXMgc3RvcmFnZSBmcm9tICcuL3NhdmluZ1N0b3JhZ2UnO1xuXG5cbmNvbnN0IHNhdmVTdHJpbmcgPSAnc2F2ZWRJdGVtcyc7XG5cbmZ1bmN0aW9uIGNvbXBvbmVudCgpe1xuICAgIC8vbG9hZCBhcnJheVxuICAgIGxvYWRCdXR0b25zKCk7XG4gICAgY29uc29sZS5sb2coc3RvcmFnZS5nZXRTYXZlZFByb2plY3RzKHNhdmVTdHJpbmcpKTtcbiAgICBjcmVhdGVBbGxJdGVtcyhzdG9yYWdlLmdldFNhdmVkUHJvamVjdHMoc2F2ZVN0cmluZykpXG59XG5cbmNvbXBvbmVudCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9