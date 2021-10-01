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
___CSS_LOADER_EXPORT___.push([module.id, "\nhtml{\n    margin: 0;\n    padding: 0;\n}\nbody{\n    margin: 0;\n    padding: 0;\n    background:whitesmoke\n}\n\nh1{\n    font-size: 35px;\n    text-align: center;\n}\n.TDItem{\n    border-radius: 30px;\n    border: 2px solid #2a044e;\n    padding: 10px;\n    width: 400px;\n    height: auto; \n    margin: 10px;\n    text-align: center;\n}\n\n.TDColumn{\n    padding: 10px;\n    margin: 10px;\n    max-width: 450px;\n}\n\n#listContainer{\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr;\n    grid-template-areas: 'toDo doing done';\n    margin: 50px;\n    padding-top: 100px;\n}\n\n#toDoContainer{\n    grid-area: toDo;\n    background: rgba(255, 0, 0, 0.600);\n}\n\n#doingContainer{\n    grid-area: doing;\n    background: rgba(255, 255, 0, 0.600);\n}\n\n#doneContainer{\n    grid-area: done;\n    background: rgba(0, 128, 0, 0.7600)\n}\n\n/*-----------------------------------------------\n-----------------POP UP FORM STUFF---------------\n-----------------------------------------------*/\n\n\n\n/* Button used to open the contact form - fixed at the bottom of the page */\n.open-button {\n    background-color: #555;\n    color: white;\n    padding: 16px 20px;\n    border: none;\n    cursor: pointer;\n    opacity: 0.8;\n    position: fixed;\n    bottom: 23px;\n    left: 28px;\n    width: 280px;\n  }\n\n/* The popup form - hidden by default */\n.form-popup {\n    display: none;\n    position: fixed;\n    bottom: 0;\n    left: 15px;\n    border: 3px solid #f1f1f1;\n    z-index: 2;\n  }\n\n/* Add styles to the form container */\n.form-container {\n    max-width: 300px;\n    padding: 10px;\n    background-color: white;\n  }\n\n/* Full-width input fields */\n.form-container input[type=text], .form-container input[type=password] {\n    width: 90%;\n    padding: 15px;\n    margin: 5px 0 22px 0;\n    border: none;\n    background: #f1f1f1;\n  }\n  \n  /* When the inputs get focus, do something */\n  .form-container input[type=text]:focus, .form-container input[type=password]:focus {\n    background-color: #ddd;\n    outline: none;\n  }\n\n/* Set a style for the submit/login button */\n.form-container .btn {\n    background-color: #04AA6D;\n    color: white;\n    padding: 16px 20px;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n    margin-bottom:10px;\n    opacity: 0.8;\n  }\n\n/* Add a red background color to the cancel button */\n.form-container .cancel {\n    background-color: red;\n  }\n\n/* Add some hover effects to buttons */\n.form-container .btn:hover, .open-button:hover {\n    opacity: 1;\n  }\n\n.sublabel{\nfont-size: small;\nfont-style: italic;\nfont-weight: 100;\n}\n\n.deleteItemBtn{\n  float: right;\n  background-color: red;\n  font-size: 10px;\n  outline-width: 0ch;\n}\n\n\n/*-----------------------------------------------\n---------DROPDOWN LIST FOR PROJECT NAMES---------\n-----------------------------------------------*/\n\n /* Dropdown Button */\n .dropbtn {\n  background-color: #3498DB;\n  color: white;\n  padding: 16px;\n  font-size: 16px;\n  border: none;\n  cursor: pointer;\n}\n\n/* Dropdown button on hover & focus */\n.dropbtn:hover, .dropbtn:focus {\n  background-color: #2980B9;\n}\n\n/* The container <div> - needed to position the dropdown content */\n.dropdown {\n  position: relative;\n  display: inline-block;\n  float: left;\n  left: 50%;\n}\n\n/* Dropdown Content (Hidden by Default) */\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f1f1f1;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  z-index: 1;\n}\n\n/* Links inside the dropdown */\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n\n/* Change color of dropdown links on hover */\n.dropdown-content a:hover {background-color: #ddd}\n\n/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */\n.show {display:block;} ", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AACA;IACI,SAAS;IACT,UAAU;AACd;AACA;IACI,SAAS;IACT,UAAU;IACV;AACJ;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;AACA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,aAAa;IACb,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,uBAAuB;IACvB,sCAAsC;IACtC,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,kCAAkC;AACtC;;AAEA;IACI,gBAAgB;IAChB,oCAAoC;AACxC;;AAEA;IACI,eAAe;IACf;AACJ;;AAEA;;gDAEgD;;;;AAIhD,2EAA2E;AAC3E;IACI,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,UAAU;IACV,YAAY;EACd;;AAEF,uCAAuC;AACvC;IACI,aAAa;IACb,eAAe;IACf,SAAS;IACT,UAAU;IACV,yBAAyB;IACzB,UAAU;EACZ;;AAEF,qCAAqC;AACrC;IACI,gBAAgB;IAChB,aAAa;IACb,uBAAuB;EACzB;;AAEF,4BAA4B;AAC5B;IACI,UAAU;IACV,aAAa;IACb,oBAAoB;IACpB,YAAY;IACZ,mBAAmB;EACrB;;EAEA,4CAA4C;EAC5C;IACE,sBAAsB;IACtB,aAAa;EACf;;AAEF,4CAA4C;AAC5C;IACI,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,WAAW;IACX,kBAAkB;IAClB,YAAY;EACd;;AAEF,oDAAoD;AACpD;IACI,qBAAqB;EACvB;;AAEF,sCAAsC;AACtC;IACI,UAAU;EACZ;;AAEF;AACA,gBAAgB;AAChB,kBAAkB;AAClB,gBAAgB;AAChB;;AAEA;EACE,YAAY;EACZ,qBAAqB;EACrB,eAAe;EACf,kBAAkB;AACpB;;;AAGA;;gDAEgD;;CAE/C,oBAAoB;CACpB;EACC,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,YAAY;EACZ,eAAe;AACjB;;AAEA,qCAAqC;AACrC;EACE,yBAAyB;AAC3B;;AAEA,kEAAkE;AAClE;EACE,kBAAkB;EAClB,qBAAqB;EACrB,WAAW;EACX,SAAS;AACX;;AAEA,yCAAyC;AACzC;EACE,aAAa;EACb,kBAAkB;EAClB,yBAAyB;EACzB,gBAAgB;EAChB,4CAA4C;EAC5C,UAAU;AACZ;;AAEA,8BAA8B;AAC9B;EACE,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;EACrB,cAAc;AAChB;;AAEA,4CAA4C;AAC5C,2BAA2B,sBAAsB;;AAEjD,qIAAqI;AACrI,OAAO,aAAa,CAAC","sourcesContent":["\nhtml{\n    margin: 0;\n    padding: 0;\n}\nbody{\n    margin: 0;\n    padding: 0;\n    background:whitesmoke\n}\n\nh1{\n    font-size: 35px;\n    text-align: center;\n}\n.TDItem{\n    border-radius: 30px;\n    border: 2px solid #2a044e;\n    padding: 10px;\n    width: 400px;\n    height: auto; \n    margin: 10px;\n    text-align: center;\n}\n\n.TDColumn{\n    padding: 10px;\n    margin: 10px;\n    max-width: 450px;\n}\n\n#listContainer{\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr;\n    grid-template-areas: 'toDo doing done';\n    margin: 50px;\n    padding-top: 100px;\n}\n\n#toDoContainer{\n    grid-area: toDo;\n    background: rgba(255, 0, 0, 0.600);\n}\n\n#doingContainer{\n    grid-area: doing;\n    background: rgba(255, 255, 0, 0.600);\n}\n\n#doneContainer{\n    grid-area: done;\n    background: rgba(0, 128, 0, 0.7600)\n}\n\n/*-----------------------------------------------\n-----------------POP UP FORM STUFF---------------\n-----------------------------------------------*/\n\n\n\n/* Button used to open the contact form - fixed at the bottom of the page */\n.open-button {\n    background-color: #555;\n    color: white;\n    padding: 16px 20px;\n    border: none;\n    cursor: pointer;\n    opacity: 0.8;\n    position: fixed;\n    bottom: 23px;\n    left: 28px;\n    width: 280px;\n  }\n\n/* The popup form - hidden by default */\n.form-popup {\n    display: none;\n    position: fixed;\n    bottom: 0;\n    left: 15px;\n    border: 3px solid #f1f1f1;\n    z-index: 2;\n  }\n\n/* Add styles to the form container */\n.form-container {\n    max-width: 300px;\n    padding: 10px;\n    background-color: white;\n  }\n\n/* Full-width input fields */\n.form-container input[type=text], .form-container input[type=password] {\n    width: 90%;\n    padding: 15px;\n    margin: 5px 0 22px 0;\n    border: none;\n    background: #f1f1f1;\n  }\n  \n  /* When the inputs get focus, do something */\n  .form-container input[type=text]:focus, .form-container input[type=password]:focus {\n    background-color: #ddd;\n    outline: none;\n  }\n\n/* Set a style for the submit/login button */\n.form-container .btn {\n    background-color: #04AA6D;\n    color: white;\n    padding: 16px 20px;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n    margin-bottom:10px;\n    opacity: 0.8;\n  }\n\n/* Add a red background color to the cancel button */\n.form-container .cancel {\n    background-color: red;\n  }\n\n/* Add some hover effects to buttons */\n.form-container .btn:hover, .open-button:hover {\n    opacity: 1;\n  }\n\n.sublabel{\nfont-size: small;\nfont-style: italic;\nfont-weight: 100;\n}\n\n.deleteItemBtn{\n  float: right;\n  background-color: red;\n  font-size: 10px;\n  outline-width: 0ch;\n}\n\n\n/*-----------------------------------------------\n---------DROPDOWN LIST FOR PROJECT NAMES---------\n-----------------------------------------------*/\n\n /* Dropdown Button */\n .dropbtn {\n  background-color: #3498DB;\n  color: white;\n  padding: 16px;\n  font-size: 16px;\n  border: none;\n  cursor: pointer;\n}\n\n/* Dropdown button on hover & focus */\n.dropbtn:hover, .dropbtn:focus {\n  background-color: #2980B9;\n}\n\n/* The container <div> - needed to position the dropdown content */\n.dropdown {\n  position: relative;\n  display: inline-block;\n  float: left;\n  left: 50%;\n}\n\n/* Dropdown Content (Hidden by Default) */\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f1f1f1;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  z-index: 1;\n}\n\n/* Links inside the dropdown */\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n\n/* Change color of dropdown links on hover */\n.dropdown-content a:hover {background-color: #ddd}\n\n/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */\n.show {display:block;} "],"sourceRoot":""}]);
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
 




//loop through all items in the array and create (but not make new objects)
function createAllItems(array, saveString){
    array.forEach(item => {
        console.log("hello")
        createItemsFromStorage(item, saveString);
    });  
    }

function createItemsFromStorage(item, saveString){
    const title = item.title;
    const status = item.status;
    const description = item.description;
    const due = item.due;
    const priority = item.priority;
    const note = item.note;

    let array = _savingStorage__WEBPACK_IMPORTED_MODULE_3__.getSavedItems();

    console.log(title)
    var newItem = new _TDObj__WEBPACK_IMPORTED_MODULE_0__.ToDo(title, status, description, due, priority, note);
    array.push(newItem);
    _savingStorage__WEBPACK_IMPORTED_MODULE_3__.setSavedItems(saveString, array);


    (0,_updateDOM__WEBPACK_IMPORTED_MODULE_1__.refreshDisplay)(array);
    console.log(_savingStorage__WEBPACK_IMPORTED_MODULE_3__.getSavedItems());
}

function createNewItem(saveString) {
    const title = document.getElementsByName('title')[0];
    const status = document.getElementsByName('status')[0];
    const description = document.getElementsByName('desc')[0];
    const due = document.getElementsByName('due')[0];
    const priority = document.getElementsByName('priority')[0];
    const note = document.getElementsByName('notes')[0];
    const priorityValue = handlePriority(priority.value);

    let array = _savingStorage__WEBPACK_IMPORTED_MODULE_3__.getSavedItems();
    
    //create new object using the form

    console.log(title)
    var newItem = new _TDObj__WEBPACK_IMPORTED_MODULE_0__.ToDo(title.value, status.value, description.value, due.value, priorityValue, note.value);
    array.push(newItem);
    _savingStorage__WEBPACK_IMPORTED_MODULE_3__.setSavedItems(saveString, array);


    (0,_updateDOM__WEBPACK_IMPORTED_MODULE_1__.refreshDisplay)(array);
    console.log(_savingStorage__WEBPACK_IMPORTED_MODULE_3__.getSavedItems());
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

function deleteItem(title, saveString){
    const array = _savingStorage__WEBPACK_IMPORTED_MODULE_3__.getItems();
    const removeTitle = array.findIndex( item => item.title === title );
    console.log(`deleting item ${title}`)

    // remove object
    console.log(array.length);
    array.splice( removeTitle, 1 );
    _savingStorage__WEBPACK_IMPORTED_MODULE_3__.setSavedItems(saveString, array)
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
/* harmony export */   "closeForm": () => (/* binding */ closeForm),
/* harmony export */   "toggleProjectList": () => (/* binding */ toggleProjectList)
/* harmony export */ });
/* harmony import */ var _savingStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./savingStorage */ "./src/savingStorage.js");
/* harmony import */ var _addItemFormManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addItemFormManager */ "./src/addItemFormManager.js");



function loadButtons() {
    const addItemBtn = document.getElementById('addItemBtn')
    addItemBtn.addEventListener('click', () => ((0,_addItemFormManager__WEBPACK_IMPORTED_MODULE_1__.createNewItem)('savedItems')) )

    const popupAdd = document.getElementById('popupAdd')
    popupAdd.addEventListener('click', openForm);

    const closeBtn = document.getElementById('closeBtn')
    closeBtn.addEventListener('click', closeForm);

    const projectList = document.getElementById("myDropdownBtn");
    projectList.addEventListener('click', toggleProjectList);
}

function openForm() {
    document.getElementById("myForm").style.display = "block";

  }
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
} 



/* -------------------------------------
--------------DROPDOWN BOX STUFF--------
--------------------------------------*/

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function toggleProjectList() {
  document.getElementById("myDropdown").classList.toggle("show");
  console.log('hello')
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 








/***/ }),

/***/ "./src/savingStorage.js":
/*!******************************!*\
  !*** ./src/savingStorage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setSavedItems": () => (/* binding */ setSavedItems),
/* harmony export */   "getSavedItems": () => (/* binding */ getSavedItems),
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

function setSavedItems(string, array) {
    if (array) {
        localStorage.setObj(string, array) //Key is not the obj key but the key to save shit under
        };
}

function getSavedItems(string) {

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
    btn.onclick = function(){;(0,_addItemFormManager__WEBPACK_IMPORTED_MODULE_0__.deleteItem)(btn.title, 'savedItems')}
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
    console.log(_savingStorage__WEBPACK_IMPORTED_MODULE_3__.getSavedItems(saveString));
    (0,_addItemFormManager__WEBPACK_IMPORTED_MODULE_1__.createAllItems)(_savingStorage__WEBPACK_IMPORTED_MODULE_3__.getSavedItems(saveString), saveString)
}

component();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YnBhY2stZGVtby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvVERPYmouanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2FkZEl0ZW1Gb3JtTWFuYWdlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvYnRuTG9naWMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3NhdmluZ1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3VwZGF0ZURPTS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuaHRtbHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5ib2R5e1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQ6d2hpdGVzbW9rZVxcbn1cXG5cXG5oMXtcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5UREl0ZW17XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyYTA0NGU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiBhdXRvOyBcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5URENvbHVtbntcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xcbn1cXG5cXG4jbGlzdENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICd0b0RvIGRvaW5nIGRvbmUnO1xcbiAgICBtYXJnaW46IDUwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcXG59XFxuXFxuI3RvRG9Db250YWluZXJ7XFxuICAgIGdyaWQtYXJlYTogdG9EbztcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDAsIDAsIDAuNjAwKTtcXG59XFxuXFxuI2RvaW5nQ29udGFpbmVye1xcbiAgICBncmlkLWFyZWE6IGRvaW5nO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAwLCAwLjYwMCk7XFxufVxcblxcbiNkb25lQ29udGFpbmVye1xcbiAgICBncmlkLWFyZWE6IGRvbmU7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMTI4LCAwLCAwLjc2MDApXFxufVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4tLS0tLS0tLS0tLS0tLS0tLVBPUCBVUCBGT1JNIFNUVUZGLS0tLS0tLS0tLS0tLS0tXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcblxcblxcbi8qIEJ1dHRvbiB1c2VkIHRvIG9wZW4gdGhlIGNvbnRhY3QgZm9ybSAtIGZpeGVkIGF0IHRoZSBib3R0b20gb2YgdGhlIHBhZ2UgKi9cXG4ub3Blbi1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDE2cHggMjBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDIzcHg7XFxuICAgIGxlZnQ6IDI4cHg7XFxuICAgIHdpZHRoOiAyODBweDtcXG4gIH1cXG5cXG4vKiBUaGUgcG9wdXAgZm9ybSAtIGhpZGRlbiBieSBkZWZhdWx0ICovXFxuLmZvcm0tcG9wdXAge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMTVweDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTtcXG4gICAgei1pbmRleDogMjtcXG4gIH1cXG5cXG4vKiBBZGQgc3R5bGVzIHRvIHRoZSBmb3JtIGNvbnRhaW5lciAqL1xcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgfVxcblxcbi8qIEZ1bGwtd2lkdGggaW5wdXQgZmllbGRzICovXFxuLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9dGV4dF0sIC5mb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIG1hcmdpbjogNXB4IDAgMjJweCAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XFxuICB9XFxuICBcXG4gIC8qIFdoZW4gdGhlIGlucHV0cyBnZXQgZm9jdXMsIGRvIHNvbWV0aGluZyAqL1xcbiAgLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMsIC5mb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICB9XFxuXFxuLyogU2V0IGEgc3R5bGUgZm9yIHRoZSBzdWJtaXQvbG9naW4gYnV0dG9uICovXFxuLmZvcm0tY29udGFpbmVyIC5idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRBQTZEO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDE2cHggMjBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gIH1cXG5cXG4vKiBBZGQgYSByZWQgYmFja2dyb3VuZCBjb2xvciB0byB0aGUgY2FuY2VsIGJ1dHRvbiAqL1xcbi5mb3JtLWNvbnRhaW5lciAuY2FuY2VsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgfVxcblxcbi8qIEFkZCBzb21lIGhvdmVyIGVmZmVjdHMgdG8gYnV0dG9ucyAqL1xcbi5mb3JtLWNvbnRhaW5lciAuYnRuOmhvdmVyLCAub3Blbi1idXR0b246aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbi5zdWJsYWJlbHtcXG5mb250LXNpemU6IHNtYWxsO1xcbmZvbnQtc3R5bGU6IGl0YWxpYztcXG5mb250LXdlaWdodDogMTAwO1xcbn1cXG5cXG4uZGVsZXRlSXRlbUJ0bntcXG4gIGZsb2F0OiByaWdodDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIG91dGxpbmUtd2lkdGg6IDBjaDtcXG59XFxuXFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbi0tLS0tLS0tLURST1BET1dOIExJU1QgRk9SIFBST0pFQ1QgTkFNRVMtLS0tLS0tLS1cXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuIC8qIERyb3Bkb3duIEJ1dHRvbiAqL1xcbiAuZHJvcGJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OERCO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogRHJvcGRvd24gYnV0dG9uIG9uIGhvdmVyICYgZm9jdXMgKi9cXG4uZHJvcGJ0bjpob3ZlciwgLmRyb3BidG46Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5ODBCOTtcXG59XFxuXFxuLyogVGhlIGNvbnRhaW5lciA8ZGl2PiAtIG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgZHJvcGRvd24gY29udGVudCAqL1xcbi5kcm9wZG93biB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmbG9hdDogbGVmdDtcXG4gIGxlZnQ6IDUwJTtcXG59XFxuXFxuLyogRHJvcGRvd24gQ29udGVudCAoSGlkZGVuIGJ5IERlZmF1bHQpICovXFxuLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxuICBtaW4td2lkdGg6IDE2MHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4vKiBMaW5rcyBpbnNpZGUgdGhlIGRyb3Bkb3duICovXFxuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogQ2hhbmdlIGNvbG9yIG9mIGRyb3Bkb3duIGxpbmtzIG9uIGhvdmVyICovXFxuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2RkZH1cXG5cXG4vKiBTaG93IHRoZSBkcm9wZG93biBtZW51ICh1c2UgSlMgdG8gYWRkIHRoaXMgY2xhc3MgdG8gdGhlIC5kcm9wZG93bi1jb250ZW50IGNvbnRhaW5lciB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgZHJvcGRvd24gYnV0dG9uKSAqL1xcbi5zaG93IHtkaXNwbGF5OmJsb2NrO30gXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsdUJBQXVCO0lBQ3ZCLHNDQUFzQztJQUN0QyxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2Y7QUFDSjs7QUFFQTs7Z0RBRWdEOzs7O0FBSWhELDJFQUEyRTtBQUMzRTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7RUFDZDs7QUFFRix1Q0FBdUM7QUFDdkM7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFNBQVM7SUFDVCxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLFVBQVU7RUFDWjs7QUFFRixxQ0FBcUM7QUFDckM7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHVCQUF1QjtFQUN6Qjs7QUFFRiw0QkFBNEI7QUFDNUI7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osbUJBQW1CO0VBQ3JCOztFQUVBLDRDQUE0QztFQUM1QztJQUNFLHNCQUFzQjtJQUN0QixhQUFhO0VBQ2Y7O0FBRUYsNENBQTRDO0FBQzVDO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDs7QUFFRixvREFBb0Q7QUFDcEQ7SUFDSSxxQkFBcUI7RUFDdkI7O0FBRUYsc0NBQXNDO0FBQ3RDO0lBQ0ksVUFBVTtFQUNaOztBQUVGO0FBQ0EsZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7OztBQUdBOztnREFFZ0Q7O0NBRS9DLG9CQUFvQjtDQUNwQjtFQUNDLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQSxxQ0FBcUM7QUFDckM7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsa0VBQWtFO0FBQ2xFO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsU0FBUztBQUNYOztBQUVBLHlDQUF5QztBQUN6QztFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQiw0Q0FBNEM7RUFDNUMsVUFBVTtBQUNaOztBQUVBLDhCQUE4QjtBQUM5QjtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUEsNENBQTRDO0FBQzVDLDJCQUEyQixzQkFBc0I7O0FBRWpELHFJQUFxSTtBQUNySSxPQUFPLGFBQWEsQ0FBQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5odG1se1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcbmJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZDp3aGl0ZXNtb2tlXFxufVxcblxcbmgxe1xcbiAgICBmb250LXNpemU6IDM1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLlRESXRlbXtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzJhMDQ0ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87IFxcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLlREQ29sdW1ue1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIG1heC13aWR0aDogNDUwcHg7XFxufVxcblxcbiNsaXN0Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ3RvRG8gZG9pbmcgZG9uZSc7XFxuICAgIG1hcmdpbjogNTBweDtcXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xcbn1cXG5cXG4jdG9Eb0NvbnRhaW5lcntcXG4gICAgZ3JpZC1hcmVhOiB0b0RvO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMCwgMCwgMC42MDApO1xcbn1cXG5cXG4jZG9pbmdDb250YWluZXJ7XFxuICAgIGdyaWQtYXJlYTogZG9pbmc7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDAsIDAuNjAwKTtcXG59XFxuXFxuI2RvbmVDb250YWluZXJ7XFxuICAgIGdyaWQtYXJlYTogZG9uZTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAxMjgsIDAsIDAuNzYwMClcXG59XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbi0tLS0tLS0tLS0tLS0tLS0tUE9QIFVQIEZPUk0gU1RVRkYtLS0tLS0tLS0tLS0tLS1cXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuXFxuXFxuLyogQnV0dG9uIHVzZWQgdG8gb3BlbiB0aGUgY29udGFjdCBmb3JtIC0gZml4ZWQgYXQgdGhlIGJvdHRvbSBvZiB0aGUgcGFnZSAqL1xcbi5vcGVuLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTZweCAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMjNweDtcXG4gICAgbGVmdDogMjhweDtcXG4gICAgd2lkdGg6IDI4MHB4O1xcbiAgfVxcblxcbi8qIFRoZSBwb3B1cCBmb3JtIC0gaGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4uZm9ybS1wb3B1cCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAxNXB4O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgfVxcblxcbi8qIEFkZCBzdHlsZXMgdG8gdGhlIGZvcm0gY29udGFpbmVyICovXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB9XFxuXFxuLyogRnVsbC13aWR0aCBpbnB1dCBmaWVsZHMgKi9cXG4uZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT10ZXh0XSwgLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgbWFyZ2luOiA1cHggMCAyMnB4IDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcXG4gIH1cXG4gIFxcbiAgLyogV2hlbiB0aGUgaW5wdXRzIGdldCBmb2N1cywgZG8gc29tZXRoaW5nICovXFxuICAuZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT10ZXh0XTpmb2N1cywgLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gIH1cXG5cXG4vKiBTZXQgYSBzdHlsZSBmb3IgdGhlIHN1Ym1pdC9sb2dpbiBidXR0b24gKi9cXG4uZm9ybS1jb250YWluZXIgLmJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNEFBNkQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTZweCAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgfVxcblxcbi8qIEFkZCBhIHJlZCBiYWNrZ3JvdW5kIGNvbG9yIHRvIHRoZSBjYW5jZWwgYnV0dG9uICovXFxuLmZvcm0tY29udGFpbmVyIC5jYW5jZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICB9XFxuXFxuLyogQWRkIHNvbWUgaG92ZXIgZWZmZWN0cyB0byBidXR0b25zICovXFxuLmZvcm0tY29udGFpbmVyIC5idG46aG92ZXIsIC5vcGVuLWJ1dHRvbjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuLnN1YmxhYmVse1xcbmZvbnQtc2l6ZTogc21hbGw7XFxuZm9udC1zdHlsZTogaXRhbGljO1xcbmZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcblxcbi5kZWxldGVJdGVtQnRue1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgb3V0bGluZS13aWR0aDogMGNoO1xcbn1cXG5cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuLS0tLS0tLS0tRFJPUERPV04gTElTVCBGT1IgUFJPSkVDVCBOQU1FUy0tLS0tLS0tLVxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4gLyogRHJvcGRvd24gQnV0dG9uICovXFxuIC5kcm9wYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDk4REI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBEcm9wZG93biBidXR0b24gb24gaG92ZXIgJiBmb2N1cyAqL1xcbi5kcm9wYnRuOmhvdmVyLCAuZHJvcGJ0bjpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk4MEI5O1xcbn1cXG5cXG4vKiBUaGUgY29udGFpbmVyIDxkaXY+IC0gbmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBkcm9wZG93biBjb250ZW50ICovXFxuLmRyb3Bkb3duIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbGVmdDogNTAlO1xcbn1cXG5cXG4vKiBEcm9wZG93biBDb250ZW50IChIaWRkZW4gYnkgRGVmYXVsdCkgKi9cXG4uZHJvcGRvd24tY29udGVudCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG4gIG1pbi13aWR0aDogMTYwcHg7XFxuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi8qIExpbmtzIGluc2lkZSB0aGUgZHJvcGRvd24gKi9cXG4uZHJvcGRvd24tY29udGVudCBhIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDEycHggMTZweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBDaGFuZ2UgY29sb3Igb2YgZHJvcGRvd24gbGlua3Mgb24gaG92ZXIgKi9cXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkfVxcblxcbi8qIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUgKHVzZSBKUyB0byBhZGQgdGhpcyBjbGFzcyB0byB0aGUgLmRyb3Bkb3duLWNvbnRlbnQgY29udGFpbmVyIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBkcm9wZG93biBidXR0b24pICovXFxuLnNob3cge2Rpc3BsYXk6YmxvY2s7fSBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7ZGVsZXRlSXRlbX0gZnJvbSBcIi4vYWRkSXRlbUZvcm1NYW5hZ2VyXCJcblxuZnVuY3Rpb24gUHJvamVjdExpc3QobmFtZSwgaXRlbXMpe1xuICAgICAgICBjb25zdCBvYmogPSB0aGlzO1xuXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBpdGVtcztcbiAgICAgICAgdGhpcy5hZGRJdGVtID0gKG5ld0l0ZW0pID0+IGl0ZW1zLnB1c2gobmV3SXRlbSk7XG59XG5cblxuXG5cblxuXG5mdW5jdGlvbiBUb0RvKHRpdGxlLCBzdGF0dXMsIGRlc2NyaXB0aW9uLCBkdWUsIHByaW9yaXR5LCBub3RlKXtcbiAgICAgICBcbiAgICAgIC8vIGNvbnN0IG9iaiA9IHRoaXM7XG4gICAgICAgXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWUgPSBkdWU7XG4gICAgICAgIHRoaXMubm90ZSA9IG5vdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcblxuXG4vKlxuICAgICAgICAvLyBXaXRoaW4gdGhlIGZ1bmN0aW9uLCB1c2Ugb2JqIHRvIHJlZmVyZW5jZSB0aGUgaW5zdGFuY2UsIG5vdCB0aGlzXG4gICAgICAgIHRoaXMuY3JlYXRlQnRuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgYnRuLnR5cGUgPSAnYnV0dG9uJ1xuICAgICAgICAgICAgICAgIGJ0bi50aXRsZSA9IG9iai50aXRsZTtcbiAgICAgICAgICAgICAgICBidG4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlSXRlbShidG4udGl0bGUpXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBidG47XG4gICAgICB9O1xuKi9cbn1cbmV4cG9ydCB7UHJvamVjdExpc3QsIFRvRG99IiwiaW1wb3J0IHsgVG9EbyB9IGZyb20gXCIuL1RET2JqXCI7IFxuaW1wb3J0IHtyZWZyZXNoRGlzcGxheX0gZnJvbSBcIi4vdXBkYXRlRE9NXCI7XG5pbXBvcnQge2Nsb3NlRm9ybX0gZnJvbSBcIi4vYnRuTG9naWNcIjtcbmltcG9ydCAqIGFzIHN0b3JhZ2UgZnJvbSAnLi9zYXZpbmdTdG9yYWdlJztcblxuLy9sb29wIHRocm91Z2ggYWxsIGl0ZW1zIGluIHRoZSBhcnJheSBhbmQgY3JlYXRlIChidXQgbm90IG1ha2UgbmV3IG9iamVjdHMpXG5mdW5jdGlvbiBjcmVhdGVBbGxJdGVtcyhhcnJheSwgc2F2ZVN0cmluZyl7XG4gICAgYXJyYXkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJoZWxsb1wiKVxuICAgICAgICBjcmVhdGVJdGVtc0Zyb21TdG9yYWdlKGl0ZW0sIHNhdmVTdHJpbmcpO1xuICAgIH0pOyAgXG4gICAgfVxuXG5mdW5jdGlvbiBjcmVhdGVJdGVtc0Zyb21TdG9yYWdlKGl0ZW0sIHNhdmVTdHJpbmcpe1xuICAgIGNvbnN0IHRpdGxlID0gaXRlbS50aXRsZTtcbiAgICBjb25zdCBzdGF0dXMgPSBpdGVtLnN0YXR1cztcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGl0ZW0uZGVzY3JpcHRpb247XG4gICAgY29uc3QgZHVlID0gaXRlbS5kdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBpdGVtLnByaW9yaXR5O1xuICAgIGNvbnN0IG5vdGUgPSBpdGVtLm5vdGU7XG5cbiAgICBsZXQgYXJyYXkgPSBzdG9yYWdlLmdldFNhdmVkUHJvamVjdHMoKTtcblxuICAgIGNvbnNvbGUubG9nKHRpdGxlKVxuICAgIHZhciBuZXdJdGVtID0gbmV3IFRvRG8odGl0bGUsIHN0YXR1cywgZGVzY3JpcHRpb24sIGR1ZSwgcHJpb3JpdHksIG5vdGUpO1xuICAgIGFycmF5LnB1c2gobmV3SXRlbSk7XG4gICAgc3RvcmFnZS5zZXRTYXZlZFByb2plY3RzKHNhdmVTdHJpbmcsIGFycmF5KTtcblxuXG4gICAgcmVmcmVzaERpc3BsYXkoYXJyYXkpO1xuICAgIGNvbnNvbGUubG9nKHN0b3JhZ2UuZ2V0U2F2ZWRQcm9qZWN0cygpKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV3SXRlbShzYXZlU3RyaW5nKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgndGl0bGUnKVswXTtcbiAgICBjb25zdCBzdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnc3RhdHVzJylbMF07XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnZGVzYycpWzBdO1xuICAgIGNvbnN0IGR1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdkdWUnKVswXTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdwcmlvcml0eScpWzBdO1xuICAgIGNvbnN0IG5vdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnbm90ZXMnKVswXTtcbiAgICBjb25zdCBwcmlvcml0eVZhbHVlID0gaGFuZGxlUHJpb3JpdHkocHJpb3JpdHkudmFsdWUpO1xuXG4gICAgbGV0IGFycmF5ID0gc3RvcmFnZS5nZXRTYXZlZFByb2plY3RzKCk7XG4gICAgXG4gICAgLy9jcmVhdGUgbmV3IG9iamVjdCB1c2luZyB0aGUgZm9ybVxuXG4gICAgY29uc29sZS5sb2codGl0bGUpXG4gICAgdmFyIG5ld0l0ZW0gPSBuZXcgVG9Ebyh0aXRsZS52YWx1ZSwgc3RhdHVzLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSwgZHVlLnZhbHVlLCBwcmlvcml0eVZhbHVlLCBub3RlLnZhbHVlKTtcbiAgICBhcnJheS5wdXNoKG5ld0l0ZW0pO1xuICAgIHN0b3JhZ2Uuc2V0U2F2ZWRQcm9qZWN0cyhzYXZlU3RyaW5nLCBhcnJheSk7XG5cblxuICAgIHJlZnJlc2hEaXNwbGF5KGFycmF5KTtcbiAgICBjb25zb2xlLmxvZyhzdG9yYWdlLmdldFNhdmVkUHJvamVjdHMoKSk7XG4gICAgY2xlYXJGb3JtKHRpdGxlLCBzdGF0dXMsIGRlc2NyaXB0aW9uLCBkdWUsIHByaW9yaXR5LCBub3RlKTtcbn1cblxuXG5mdW5jdGlvbiBjbGVhckZvcm0odGl0bGUsIHN0YXR1cywgZGVzYywgZHVlLCBwcmlvcml0eSwgbm90ZSl7XG4gICAgdGl0bGUudmFsdWUgPSAnJztcbiAgICBzdGF0dXMudmFsdWUgPSAnJzsgXG4gICAgZGVzYy52YWx1ZSA9ICcnOyBcbiAgICBkdWUudmFsdWUgPSAnJzsgXG4gICAgcHJpb3JpdHkudmFsdWUgPSAnJztcbiAgICBub3RlLnZhbHVlID0gJyc7XG4gICAgY2xvc2VGb3JtKCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVByaW9yaXR5KHZhbHVlKXtcbiAgICBpZiAodmFsdWUgPT0gMCkge3JldHVybiBcIkxPV1wifVxuICAgIGVsc2UgaWYgKHZhbHVlID09IDEpIHtyZXR1cm5cIk1FRFwifVxuICAgIGVsc2UgaWYgKHZhbHVlID09IDIpIHtyZXR1cm4gXCJISUdIXCJ9XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUl0ZW0odGl0bGUsIHNhdmVTdHJpbmcpe1xuICAgIGNvbnN0IGFycmF5ID0gc3RvcmFnZS5nZXRJdGVtcygpO1xuICAgIGNvbnN0IHJlbW92ZVRpdGxlID0gYXJyYXkuZmluZEluZGV4KCBpdGVtID0+IGl0ZW0udGl0bGUgPT09IHRpdGxlICk7XG4gICAgY29uc29sZS5sb2coYGRlbGV0aW5nIGl0ZW0gJHt0aXRsZX1gKVxuXG4gICAgLy8gcmVtb3ZlIG9iamVjdFxuICAgIGNvbnNvbGUubG9nKGFycmF5Lmxlbmd0aCk7XG4gICAgYXJyYXkuc3BsaWNlKCByZW1vdmVUaXRsZSwgMSApO1xuICAgIHN0b3JhZ2Uuc2V0U2F2ZWRQcm9qZWN0cyhzYXZlU3RyaW5nLCBhcnJheSlcbiAgICBjb25zb2xlLmxvZyhhcnJheS5sZW5ndGgpO1xuICAgIHJlZnJlc2hEaXNwbGF5KGFycmF5KVxufVxuXG5cbmV4cG9ydCB7Y3JlYXRlTmV3SXRlbSwgZGVsZXRlSXRlbSwgY3JlYXRlQWxsSXRlbXN9IiwiaW1wb3J0ICogYXMgc3RvcmFnZSBmcm9tICcuL3NhdmluZ1N0b3JhZ2UnO1xuaW1wb3J0IHtjcmVhdGVOZXdJdGVtfSBmcm9tICcuL2FkZEl0ZW1Gb3JtTWFuYWdlcic7XG5cbmZ1bmN0aW9uIGxvYWRCdXR0b25zKCkge1xuICAgIGNvbnN0IGFkZEl0ZW1CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkSXRlbUJ0bicpXG4gICAgYWRkSXRlbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IChjcmVhdGVOZXdJdGVtKCdzYXZlZEl0ZW1zJykpIClcblxuICAgIGNvbnN0IHBvcHVwQWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwQWRkJylcbiAgICBwb3B1cEFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Gb3JtKTtcblxuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlQnRuJylcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlRm9ybSk7XG5cbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlEcm9wZG93bkJ0blwiKTtcbiAgICBwcm9qZWN0TGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVByb2plY3RMaXN0KTtcbn1cblxuZnVuY3Rpb24gb3BlbkZvcm0oKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUZvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICB9XG4gIFxuZnVuY3Rpb24gY2xvc2VGb3JtKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlGb3JtXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0gXG5cblxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4tLS0tLS0tLS0tLS0tLURST1BET1dOIEJPWCBTVFVGRi0tLS0tLS0tXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi8qIFdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBidXR0b24sXG50b2dnbGUgYmV0d2VlbiBoaWRpbmcgYW5kIHNob3dpbmcgdGhlIGRyb3Bkb3duIGNvbnRlbnQgKi9cbmZ1bmN0aW9uIHRvZ2dsZVByb2plY3RMaXN0KCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15RHJvcGRvd25cIikuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG4gIGNvbnNvbGUubG9nKCdoZWxsbycpXG59XG5cbi8vIENsb3NlIHRoZSBkcm9wZG93biBtZW51IGlmIHRoZSB1c2VyIGNsaWNrcyBvdXRzaWRlIG9mIGl0XG53aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gIGlmICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy5kcm9wYnRuJykpIHtcbiAgICB2YXIgZHJvcGRvd25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRyb3Bkb3duLWNvbnRlbnRcIik7XG4gICAgdmFyIGk7XG4gICAgZm9yIChpID0gMDsgaSA8IGRyb3Bkb3ducy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIG9wZW5Ecm9wZG93biA9IGRyb3Bkb3duc1tpXTtcbiAgICAgIGlmIChvcGVuRHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHtcbiAgICAgICAgb3BlbkRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0gXG5cblxuXG5cblxuZXhwb3J0IHtsb2FkQnV0dG9ucywgY2xvc2VGb3JtLCB0b2dnbGVQcm9qZWN0TGlzdH1cbiIsImxldCBpdGVtQXJyYXkgPSBbXTtcbmxldCBwcm9qZWN0QXJyYXkgPSBbXVxuXG4vL1N0b2xlbiBjb2RlIHRoYXQgYWxsb3dzIHRoZSBzYXZpbmcgb2Ygb2JqZWN0cyB0byBsb2NhbCBzdG9yYWdlXG5TdG9yYWdlLnByb3RvdHlwZS5zZXRPYmogPSBmdW5jdGlvbihrZXksIG9iaikge1xuICAgIHJldHVybiB0aGlzLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShvYmopKVxufVxuLy9TdG9sZW4gY29kZSB0aGF0IGFsbG93cyB0aGUgZ2V0dGluZyBvZiBvYmplY3RzIHRvIGxvY2FsIHN0b3JhZ2VcblN0b3JhZ2UucHJvdG90eXBlLmdldE9iaiA9IGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKHRoaXMuZ2V0SXRlbShrZXkpKVxufVxuXG5mdW5jdGlvbiBzZXRTYXZlZFByb2plY3RzKHN0cmluZywgYXJyYXkpIHtcbiAgICBpZiAoYXJyYXkpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldE9iaihzdHJpbmcsIGFycmF5KSAvL0tleSBpcyBub3QgdGhlIG9iaiBrZXkgYnV0IHRoZSBrZXkgdG8gc2F2ZSBzaGl0IHVuZGVyXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIGdldFNhdmVkUHJvamVjdHMoc3RyaW5nKSB7XG5cbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldE9iaihzdHJpbmcpKXtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRPYmooc3RyaW5nKTtcbiAgICB9XG5cbiAgICBlbHNle1xuICAgICAgICByZXR1cm4gaXRlbUFycmF5O1xuICAgIH1cbiAvL0FjY2VzIHRoZSBrZXkgdGhlIGxpYnJhcnkgaGFzIGJlZW4gc2F2ZWQgdG9cbn1cblxuZnVuY3Rpb24gZ2V0SXRlbXMoKXtcbiAgICByZXR1cm4gaXRlbUFycmF5XG59XG5cblxuZnVuY3Rpb24gc2V0SXRlbXMoYXJyYXkpe1xuICAgIGl0ZW1BcnJheSA9IGFycmF5O1xufVxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0cygpe1xuICAgIHJldHVybiBwcm9qZWN0QXJyYXlcbn1cblxuZnVuY3Rpb24gc2V0UHJvamVjdHMoYXJyYXkpe1xuICAgIHByb2plY3RBcnJheSA9IGFycmF5O1xufVxuXG5cbmV4cG9ydCB7c2V0U2F2ZWRQcm9qZWN0cywgZ2V0U2F2ZWRQcm9qZWN0cywgZ2V0SXRlbXMsIGdldFByb2plY3RzLCBzZXRJdGVtcywgc2V0UHJvamVjdHN9IiwiaW1wb3J0IHsgZGVsZXRlSXRlbSB9IGZyb20gXCIuL2FkZEl0ZW1Gb3JtTWFuYWdlclwiO1xuXG5mdW5jdGlvbiByZWZyZXNoRGlzcGxheShhcnJheSkge1xuICAgIGRpc3BsYXlURChhcnJheSk7XG4gICAgY29uc29sZS5sb2coJ2FkZGVkJyk7XG59XG5cbi8vQWRkcyBhIG5ldyB0byBkbyBjYXJkIHRvIHRoZSBjdXJyZW50IHByb2plY3RcbmZ1bmN0aW9uIGRpc3BsYXlURChhcnJheSkge1xuXG4gICAgLy9jbGVhciBhbGwgaXRlbXNcbiAgICBjb25zdCB0b0RvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvRG9Db250YWluZXInKTtcbiAgICBjb25zdCBkb2luZ0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb2luZ0NvbnRhaW5lcicpO1xuICAgIGNvbnN0IGRvbmVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9uZUNvbnRhaW5lcicpO1xuXG4gICAgY2xlYXJuQ29udGFpbmVycyh0b0RvQ29udGFpbmVyLCBkb2luZ0NvbnRhaW5lciwgZG9uZUNvbnRhaW5lcik7XG5cbiAgICAvL2FkZCBhbGwgaXRlbXMgYmFjayBpblxuICAgIGFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG5cbiAgICAgIFxuICAgICAgICAvL0l0ZW1zIGRpdlxuICAgICAgICBjb25zdCBuZXdDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld0NhcmQuY2xhc3NMaXN0LmFkZCgnVERJdGVtJyk7XG5cbiAgICAgICAgLy9BZGQgZWFjaCBzZWN0aW9uIG9mIHRoZSBuZXcgaXRlbSBpbnNpZGUgdGhlaXIgb3duIGRpdnNcbiAgICAgICAgY29uc3QgaXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1UaXRsZS5pbm5lckhUTUwgPSBlbGVtZW50LnRpdGxlO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1EZXNjLmlubmVySFRNTCA9IGVsZW1lbnQuZGVzY3JpcHRpb247XG5cbiAgICAgICAgY29uc3QgaXRlbUR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtRHVlLmlubmVySFRNTCA9IGVsZW1lbnQuZHVlO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtUHJpb3JpdHkuaW5uZXJIVE1MID0gZWxlbWVudC5wcmlvcml0eTtcblxuICAgICAgICBjb25zdCBpdGVtTm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtTm90ZS5pbm5lckhUTUwgPSBlbGVtZW50Lm5vdGU7XG5cblxuXG4gXG5cbiAgICAgICAgY29uc3QgaXRlbUJ0biA9IGNyZWF0ZUJ1dHRvbihlbGVtZW50KTtcbiAgICAgICAgICAgIGl0ZW1CdG4uaW5uZXJIVE1MID0gJy0nXG4gICAgICAgICAgICBpdGVtQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZUl0ZW1CdG4nKTtcblxuICAgICAgICBuZXdDYXJkLmFwcGVuZENoaWxkKGl0ZW1CdG4pO1xuICAgICAgICBuZXdDYXJkLmFwcGVuZENoaWxkKGl0ZW1UaXRsZSk7XG4gICAgICAgIG5ld0NhcmQuYXBwZW5kQ2hpbGQoaXRlbURlc2MpO1xuICAgICAgICBuZXdDYXJkLmFwcGVuZENoaWxkKGl0ZW1EdWUpO1xuICAgICAgICBuZXdDYXJkLmFwcGVuZENoaWxkKGl0ZW1Qcmlvcml0eSk7XG4gICAgICAgIG5ld0NhcmQuYXBwZW5kQ2hpbGQoaXRlbU5vdGUpO1xuXG5cbiAgICAgICAgaWYgKGVsZW1lbnQuc3RhdHVzID09IDApe1xuICAgICAgICAgICAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdDYXJkKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGVsZW1lbnQuc3RhdHVzID09IDEpe1xuICAgICAgICAgICAgZG9pbmdDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3Q2FyZClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlbGVtZW50LnN0YXR1cyA9PSAyKXtcbiAgICAgICAgICAgIGRvbmVDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3Q2FyZClcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgIH0pO1xuXG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlQnV0dG9uKGVsZW1lbnQpe1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi50eXBlID0gJ2J1dHRvbic7XG4gICAgYnRuLnRpdGxlID0gZWxlbWVudC50aXRsZTtcbiAgICBjb25zb2xlLmxvZyhidG4udGl0bGUpXG4gICAgYnRuLm9uY2xpY2sgPSBmdW5jdGlvbigpe2RlbGV0ZUl0ZW0oYnRuLnRpdGxlLCAnc2F2ZWRJdGVtcycpfVxuICAgIHJldHVybiBidG47XG59XG5cblxuZnVuY3Rpb24gY2xlYXJuQ29udGFpbmVycyh0b2RvLCBkb2luZywgZG9uZSkge1xuICAgIHdoaWxlICh0b2RvLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdG9kby5yZW1vdmVDaGlsZCh0b2RvLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHdoaWxlIChkb2luZy5maXJzdENoaWxkKSB7XG4gICAgICAgIGRvaW5nLnJlbW92ZUNoaWxkKGRvaW5nLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHdoaWxlIChkb25lLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZG9uZS5yZW1vdmVDaGlsZChkb25lLmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtyZWZyZXNoRGlzcGxheX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgY3JlYXRlQWxsSXRlbXN9IGZyb20gJy4vYWRkSXRlbUZvcm1NYW5hZ2VyJztcbmltcG9ydCB7IGxvYWRCdXR0b25zIH0gZnJvbSAnLi9idG5Mb2dpYyc7XG5pbXBvcnQgKiBhcyBzdG9yYWdlIGZyb20gJy4vc2F2aW5nU3RvcmFnZSc7XG5cblxuY29uc3Qgc2F2ZVN0cmluZyA9ICdzYXZlZEl0ZW1zJztcblxuZnVuY3Rpb24gY29tcG9uZW50KCl7XG4gICAgLy9sb2FkIGFycmF5XG4gICAgbG9hZEJ1dHRvbnMoKTtcbiAgICBjb25zb2xlLmxvZyhzdG9yYWdlLmdldFNhdmVkUHJvamVjdHMoc2F2ZVN0cmluZykpO1xuICAgIGNyZWF0ZUFsbEl0ZW1zKHN0b3JhZ2UuZ2V0U2F2ZWRQcm9qZWN0cyhzYXZlU3RyaW5nKSwgc2F2ZVN0cmluZylcbn1cblxuY29tcG9uZW50KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=