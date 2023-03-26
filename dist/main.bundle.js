/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    font-family: sans-serif;\n}\n\nbody {\n    display: grid;\n    grid-template: 1fr 1fr 10fr / 4fr 1fr 4fr;\n    align-items: center;\n    justify-items: center;\n    margin: 0;\n    height: 100vh;\n    width: 100vw;\n}\n\ndiv.ship {\n    background-color: lightgreen;\n}\n\ndiv.miss {\n    background-color: slategray;\n}\n\n#hit {\n    background-color: rgb(255, 107, 107);\n}\n\n.cpu-message,\n.player-message,\n.player-form,\n.cpu-action {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 420px;\n    height: 50%;\n\n    font-size: 24px;\n    font-weight: 600;\n}\n\n.cpu-message {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n}\n\n.cpu-action {\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n}\n\n.player-message {\n    grid-column: 3 / -1;\n    grid-row: 2 / 3;\n}\n\n.player-form {\n    grid-row: 1 / 2;\n    grid-column: 3 / -1;\n}\n\n#player-board,\n#cpu-board {\n    display: grid;\n    grid-row: 3 / -1;\n    grid-template: repeat(10, 1fr) / repeat(10, 1fr);\n    width: 50%;\n    height: 65%;\n}\n\n#player-board {\n    grid-column: 3 / -1;\n}\n\n.playerSq,\n.cpuSq {\n    background-color: white;\n    width: 100%;\n    height: 100%;\n    border: 1px solid black;\n}\n\n#cpu-board {\n    grid-column: 1 / 2;\n}\n\n/* Center Controls */\n\n#reset {\n    cursor: pointer;\n\n    grid-column: 2 / 3;\n    grid-row: 3 / -1;\n\n    width: 60%;\n    height: 25px;\n    border-radius: 8px;\n    border: 1px solid grey;\n}\n\n/* Ship form */\n\n#ship-form {\n    display: flex;\n    justify-content: center;\n    gap: 12px;\n\n    width: 400px;\n}\n\n#ship-length {\n    width: 3em;\n}\n\n#ship-dir {\n    width: 5em;\n}\n\n#visualize-ship {\n    background-color: lightgreen;\n}\n\n#visualize-error {\n    background-color: rgb(255, 107, 107);\n}\n\n#ship-remaining {\n    margin: 0;\n    font-size: 18px;\n    width: 200px;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,yCAAyC;IACzC,mBAAmB;IACnB,qBAAqB;IACrB,SAAS;IACT,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,oCAAoC;AACxC;;AAEA;;;;IAII,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,WAAW;;IAEX,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,mBAAmB;AACvB;;AAEA;;IAEI,aAAa;IACb,gBAAgB;IAChB,gDAAgD;IAChD,UAAU;IACV,WAAW;AACf;;AAEA;IACI,mBAAmB;AACvB;;AAEA;;IAEI,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;AACtB;;AAEA,oBAAoB;;AAEpB;IACI,eAAe;;IAEf,kBAAkB;IAClB,gBAAgB;;IAEhB,UAAU;IACV,YAAY;IACZ,kBAAkB;IAClB,sBAAsB;AAC1B;;AAEA,cAAc;;AAEd;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;;IAET,YAAY;AAChB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,SAAS;IACT,eAAe;IACf,YAAY;AAChB","sourcesContent":["* {\n    font-family: sans-serif;\n}\n\nbody {\n    display: grid;\n    grid-template: 1fr 1fr 10fr / 4fr 1fr 4fr;\n    align-items: center;\n    justify-items: center;\n    margin: 0;\n    height: 100vh;\n    width: 100vw;\n}\n\ndiv.ship {\n    background-color: lightgreen;\n}\n\ndiv.miss {\n    background-color: slategray;\n}\n\n#hit {\n    background-color: rgb(255, 107, 107);\n}\n\n.cpu-message,\n.player-message,\n.player-form,\n.cpu-action {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 420px;\n    height: 50%;\n\n    font-size: 24px;\n    font-weight: 600;\n}\n\n.cpu-message {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n}\n\n.cpu-action {\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n}\n\n.player-message {\n    grid-column: 3 / -1;\n    grid-row: 2 / 3;\n}\n\n.player-form {\n    grid-row: 1 / 2;\n    grid-column: 3 / -1;\n}\n\n#player-board,\n#cpu-board {\n    display: grid;\n    grid-row: 3 / -1;\n    grid-template: repeat(10, 1fr) / repeat(10, 1fr);\n    width: 50%;\n    height: 65%;\n}\n\n#player-board {\n    grid-column: 3 / -1;\n}\n\n.playerSq,\n.cpuSq {\n    background-color: white;\n    width: 100%;\n    height: 100%;\n    border: 1px solid black;\n}\n\n#cpu-board {\n    grid-column: 1 / 2;\n}\n\n/* Center Controls */\n\n#reset {\n    cursor: pointer;\n\n    grid-column: 2 / 3;\n    grid-row: 3 / -1;\n\n    width: 60%;\n    height: 25px;\n    border-radius: 8px;\n    border: 1px solid grey;\n}\n\n/* Ship form */\n\n#ship-form {\n    display: flex;\n    justify-content: center;\n    gap: 12px;\n\n    width: 400px;\n}\n\n#ship-length {\n    width: 3em;\n}\n\n#ship-dir {\n    width: 5em;\n}\n\n#visualize-ship {\n    background-color: lightgreen;\n}\n\n#visualize-error {\n    background-color: rgb(255, 107, 107);\n}\n\n#ship-remaining {\n    margin: 0;\n    font-size: 18px;\n    width: 200px;\n}"],"sourceRoot":""}]);
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cpuAttack": () => (/* binding */ cpuAttack),
/* harmony export */   "cpuBoard": () => (/* binding */ cpuBoard),
/* harmony export */   "createDOM": () => (/* binding */ createDOM),
/* harmony export */   "randomCoord": () => (/* binding */ randomCoord),
/* harmony export */   "randomDir": () => (/* binding */ randomDir),
/* harmony export */   "resetCPU": () => (/* binding */ resetCPU),
/* harmony export */   "startGame": () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/scripts/main.js");
/* harmony import */ var _gamedom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gamedom */ "./src/scripts/gamedom.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ "./src/scripts/gameboard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ "./src/scripts/player.js");




const cpuBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_2__.Gameboard("cpu", [], "Player");

function createDOM() {
    const dom = new _gamedom__WEBPACK_IMPORTED_MODULE_1__.DomMethods();
    dom.createDOM();
}

function startGame() {
    cpuShips();
    (0,_gamedom__WEBPACK_IMPORTED_MODULE_1__.gameboardEvents)();
    (0,_gamedom__WEBPACK_IMPORTED_MODULE_1__.observeBoard)();
}

function resetCPU() {
    cpuBoard.hit = 0;
    cpuBoard.miss = 0;
    cpuBoard.ships = [];
}

function cpuAttack() {
    if (cpuBoard.ships.every(ship => ship.sunk == true)) {
        return;
    }
    const cpuSquares = document.querySelectorAll("#cpu-board div");
    (0,_gamedom__WEBPACK_IMPORTED_MODULE_1__.resetListeners)(cpuSquares)
    document.querySelector(".cpu-action").textContent = "CPU is making an attack...";
    setTimeout(attack, 2 * 1000);
}

function attack() {
    const x = randomMinMaxNum(1, 10);
    const y = randomMinMaxNum(1, 10);
    let randSq = document.querySelector(`.playerSq[data-x="${x}"][data-y="${y}"]`);

    let square = randomAttack(randSq);

    if (cpuBoard.prevHit == "") {
        square = randomAttack(square);
    } else if (cpuBoard.prevHit == "hit" || cpuBoard.prevHit == "retry") {

        const x = cpuBoard.prevAtk.dataset.x;
        const y = cpuBoard.prevAtk.dataset.y;
        const left = document.querySelector(`.playerSq[data-x="${x}"][data-y="${y - 1}"]`);
        const right = document.querySelector(`.playerSq[data-x="${x}"][data-y="${+y + 1}"]`);
        const above = document.querySelector(`.playerSq[data-x="${x - 1}"][data-y="${y}"]`);
        const below = document.querySelector(`.playerSq[data-x="${+x + 1}"][data-y="${y}"]`);
        const choices = [left, right, above, below];
        let randChoice = choices[0];

        while (randChoice === null || randChoice === undefined || randChoice.id === "hit" || randChoice.classList.contains("miss")) {
            if (choices.length <= 0 || checkChoices(choices)) {
                cpuBoard.prevHit = "";
                randChoice = randomAttack(cpuBoard.prevAtk);
                break;
            }
            
            choices.shift();
            randChoice = choices[0]
        }

        square = randChoice;
    }

    if (square.className.includes("ship")) {
        _player__WEBPACK_IMPORTED_MODULE_3__.playerBoard.receiveAttack(square);
        cpuBoard.prevHit = "hit"
        cpuBoard.prevAtk = square;
    } else if (cpuBoard.prevHit == "hit" || cpuBoard.prevHit == "retry") {
        _player__WEBPACK_IMPORTED_MODULE_3__.playerBoard.missedAttack(square)
        cpuBoard.prevHit = "retry"
    } else {
        _player__WEBPACK_IMPORTED_MODULE_3__.playerBoard.missedAttack(square)
        square.classList.add("miss");
        cpuBoard.prevHit = "miss"
        cpuBoard.prevAtk = square;
    }

    document.querySelector(".cpu-action").textContent = "Your turn!";
    (0,_player__WEBPACK_IMPORTED_MODULE_3__.checkPlayerShips)();
    (0,_gamedom__WEBPACK_IMPORTED_MODULE_1__.gameboardEvents)();
}

function randomAttack(square) {
    let newSq = square;
    while (newSq.className.includes("miss") || newSq.id == "hit") {
        const newX = randomMinMaxNum(1, 10);
        const newY = randomMinMaxNum(1, 10);
        newSq = document.querySelector(`.playerSq[data-x="${newX}"][data-y="${newY}"]`)
    }
    return newSq;
}

function checkChoices(arr) {
    return arr.every(choice => {
        choice === null || choice === undefined || choice.id === "hit" || choice.classList.contains("miss")
    })
}

function cpuShips() {
    while(cpuBoard.ships.length < 4) {
        const ship = new _main__WEBPACK_IMPORTED_MODULE_0__.Ship(Math.floor(Math.random() * 3) + 2);
        const dir = randomDir();
        const coord = randomCoord(dir, ship);
        const shipCoords = getShipCoords(coord, dir, ship);

        if (matchingCoord(shipCoords)) {
            continue;
        } else {
            cpuBoard.placeShip(coord, dir, ship);
            cpuBoard.ships.push(ship);
        }
    }
}

function matchingCoord(coordArr) {
    for (let placedShip of cpuBoard.ships) {
        if (placedShip.cords.some(coord => coordArr.some(shipCord => shipCord[0] == coord[0] && shipCord[1] == coord[1]))) {
            return true;
        }
    }
}

function getShipCoords(cord, dir, ship) {
    let coordArr = [];

    for (let i = 0; i < ship.length; i++) {
        switch(dir) {
            case 'up': 
                    coordArr.push([cord[0] - i, cord[1]]);
                    break;
            case 'left':
                    coordArr.push([cord[0], cord[1] - i]);
                    break;
            case 'right':
                    coordArr.push([cord[0], cord[1] + i]);
                    break;
            case 'down':
                    coordArr.push([cord[0] + i, cord[1]]);
                    break;
        }
    }

    return coordArr;
}

function randomMinMaxNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function randomCoord(dir, ship) {
    let randUpLeft = randomMinMaxNum(ship.length, 10);
    let randDownRight = randomMinMaxNum(1, (10 - ship.length));
    let randAny = randomMinMaxNum(1, 10);
    let coords;

    switch(dir) {
        case "up": 
            coords = [randUpLeft, randAny]
            break;
        case "left":
            coords = [randAny, randUpLeft]
            break;
        case "down":
            coords = [randDownRight, randAny]
            break;
        case "right":
            coords = [randAny, randDownRight]
            break;
    }

    return coords;
}

function randomDir() {
    const directions = ["up", "left", "right", "down"];
    const randomNum = Math.floor(Math.random() * 4);

    return directions[randomNum];
}

/***/ }),

/***/ "./src/scripts/gameboard.js":
/*!**********************************!*\
  !*** ./src/scripts/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard),
/* harmony export */   "createBoard": () => (/* binding */ createBoard)
/* harmony export */ });
class Gameboard {
    constructor(id, ships, opponent) {
        this.id = id;
        this.ships = ships;
        this.opponent = opponent;
        this.board = createBoard();
        this.miss = 0;
        this.hit = 0;
        this.prevHit = "";
        this.prevAtk = "";
    }

    placeShip(cord, dir, ship) {
        for (let i = 0; i < ship.length; i++) {
            let square;
            
            switch(dir) {
                case 'up': 
                        square = document.querySelector(`.${this.id}Sq[data-x="${cord[0] - i}"][data-y="${cord[1]}"]`);
                        ship.cords.push([cord[0] - i, cord[1]]);
                        square.classList.add("ship");
                        break;
                case 'left':
                        square = document.querySelector(`.${this.id}Sq[data-x="${cord[0]}"][data-y="${cord[1] - i}"]`);
                        ship.cords.push([cord[0], cord[1] - i]);
                        square.classList.add("ship");
                        break;
                case 'right':
                        square = document.querySelector(`.${this.id}Sq[data-x="${cord[0]}"][data-y="${cord[1] + i}"]`);
                        ship.cords.push([cord[0], cord[1] + i]);
                        square.classList.add("ship");
                        break;
                case 'down':
                        square = document.querySelector(`.${this.id}Sq[data-x="${cord[0] + i}"][data-y="${cord[1]}"]`);
                        ship.cords.push([cord[0] + i, cord[1]]);
                        square.classList.add("ship");
                        break;
            }
        }

        return true;
    }

    receiveAttack(square) {
        const message = document.querySelector(`.${this.id}-message`)
        
        if (!this.ships.every(ship => ship.sunk == true)) {
            this.ships.forEach(ship => {
                ship.cords.some(cord => {
                    if(cord[0] == square.dataset.x && cord[1] == square.dataset.y) {
                        ship.hit()
                        square.id = "hit";
                        ship.sunk == false ? this.hit++ : null;
                        message.innerText == `${this.opponent} hit!` ? null : message.innerText = `${this.opponent} hit!`
                    }
                })
            })
        }

        if (this.ships.every(ship => ship.sunk == true)) {
            this.allSunk(message);
        }

    }

    missedAttack(square) {
        const message = document.querySelector(`.${this.id}-message`)
        message.innerText == `${this.opponent} missed!` ? null : message.innerText = `${this.opponent} missed!`

        square.classList.add("miss")
        this.miss++;
    }

    allSunk(msg) {
        msg.innerText = "All ships have been sunk!";
    }
}

function createBoard() {
    let boardArr = [];

    let x = 1;
    let y = 1;

    while(y <= 10 && x <= 10) {
        if(x == 10 && y == 10) {
            boardArr.push(`${x}-${y}`)
            return boardArr;
        }

        if (y == 10) {
            boardArr.push(`${x}-${y}`)
            x++
            y = 1;
        }

        boardArr.push(`${x}-${y}`);
        y++
    }
}

/***/ }),

/***/ "./src/scripts/gamedom.js":
/*!********************************!*\
  !*** ./src/scripts/gamedom.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DomMethods": () => (/* binding */ DomMethods),
/* harmony export */   "gameboardEventLogic": () => (/* binding */ gameboardEventLogic),
/* harmony export */   "gameboardEvents": () => (/* binding */ gameboardEvents),
/* harmony export */   "observeBoard": () => (/* binding */ observeBoard),
/* harmony export */   "resetListeners": () => (/* binding */ resetListeners)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/scripts/gameboard.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/scripts/game.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/scripts/player.js");
// import "../styles/main.css";




const body = document.querySelector("body");

class DomMethods {
    constructor() {}

    gameContainers() {
        const playerBox = document.createElement("div");
        const cpuBox = document.createElement("div");

        playerBox.id = "player-board";
        cpuBox.id = "cpu-board";

        body.append(playerBox, cpuBox)
    }

    gameboardSquares() {
        let newBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.createBoard)();
        const playerBox = document.getElementById("player-board");
        const cpuBox = document.getElementById("cpu-board");

        newBoard.forEach(cord => {
            const playerSquare = document.createElement("div");
            const cpuSquare = document.createElement("div");
            const splitCords = cord.split("-");

            playerSquare.setAttribute("data-x", splitCords[0]);
            playerSquare.setAttribute("data-y", splitCords[1]);
            cpuSquare.setAttribute("data-x", splitCords[0]);
            cpuSquare.setAttribute("data-y", splitCords[1]);
            playerSquare.classList.add("playerSq");
            cpuSquare.classList.add("cpuSq");

            playerBox.appendChild(playerSquare);
            cpuBox.appendChild(cpuSquare);
        });
    }

    boardMessages() {
        const cpuMessage = document.createElement("div");
        const cpuAction = document.createElement("div");
        const plyrMessage = document.createElement("div");
        cpuAction.classList.add("cpu-action");
        cpuMessage.classList.add("cpu-message")
        plyrMessage.classList.add("player-message")
        body.append(cpuMessage, plyrMessage, cpuAction);
    }

    resetButton() {
        const btn = document.createElement("button");
        btn.textContent = "Reset"
        btn.setAttribute("id", "reset");

        btn.addEventListener("click", () => {
            this.resetDOM()
            ;(0,_game__WEBPACK_IMPORTED_MODULE_1__.resetCPU)()
            ;(0,_player__WEBPACK_IMPORTED_MODULE_2__.resetPlayer)()
        })
        body.appendChild(btn)
    }

    addShipForm() {
        const addForm = document.createElement("form");

        const formContainer = document.createElement("div");
        formContainer.classList.add("player-form")

        const lengthLabel = document.createElement("label");
        const dirLabel = document.createElement("label");

        lengthLabel.setAttribute("for", "ship-length");
        dirLabel.setAttribute("for", "ship-dir");

        const length = document.createElement("select");
        const lengthOptions = [2, 3, 4];
        const direction = document.createElement("select");
        const dirOptions = ["up", "right", "left", "down"];
        
        addForm.id = "ship-form";
        length.id = "ship-length";
        direction.id = "ship-dir";

        this.dropdownOptions(lengthOptions, length);
        this.dropdownOptions(dirOptions, direction);

        const addShip = document.createElement("button");
        addShip.id = "add-ship"
        addShip.textContent = "Add Ship";

        body.appendChild(formContainer)
        addForm.append(lengthLabel, length, dirLabel, direction, addShip);
        document.querySelector(".player-form").appendChild(addForm);
    }

    addShipBtnEvent() {
        const addShip = document.getElementById("add-ship");
        
        addShip.addEventListener("click", (e) => {
            e.preventDefault();
            const direction = document.getElementById("ship-dir");
            const length = document.getElementById("ship-length");

            (0,_player__WEBPACK_IMPORTED_MODULE_2__.playerBoardEvent)(direction.value, Number(length.value) - 1);
        })
    }

    remainingShips() {
        const indicator = document.createElement("p");
        indicator.textContent = "Ships left: 4";
        indicator.id = "ship-remaining";
        document.querySelector(".player-form").appendChild(indicator)
    }

    dropdownOptions(options, element) {
            for (let i = 0; i < options.length; i++) {
                const option = document.createElement("option");
                option.setAttribute("value", `${options[i]}`);
                option.textContent = `${options[i]}`;
                element.appendChild(option);
            }
    }

    resetDOM() {
        const cpuSquares = document.querySelectorAll(".cpuSq");
        const playerSquares = document.querySelectorAll(".playerSq");
        const boards = [cpuSquares, playerSquares];
        const cpuMessage = document.querySelector(".cpu-message");

        cpuMessage.textContent = ""
        for (let i = 0; i < 2; i++) {
            boards[i].forEach(square => {
                square.classList.contains("miss") ? square.classList.remove("miss") : square.id = "";
                square.classList.contains("ship") ? square.classList.remove("ship") : null;
            });
        }
    }

    createDOM = () => {
        this.gameContainers();
        this.gameboardSquares();
        this.boardMessages();
        this.resetButton();
        this.addShipForm();
        this.addShipBtnEvent();
        this.remainingShips();
    }
}

function resetListeners(cpu) {
    if (cpu) {
        cpu.forEach(square => {
            const clone = square.cloneNode(true);
            square.parentNode.replaceChild(clone, square)
        })
        return;
    }

    const pBoard = document.querySelectorAll("#player-board div");
    pBoard.forEach(square => {
        const clone = square.cloneNode(true);
        square.parentNode.replaceChild(clone, square)
    })
}

function observeBoard() {
    const cpuBoard = document.getElementById("cpu-board")
    const options = {
        attributes: true,
        subtree: true,
    }
    const observer = new MutationObserver(callback);

    function callback(mutationList, observer) {
        mutationList.forEach(mutation => {
            if (mutation.target.id == "hit" || mutation.target.className.includes("miss")) {
                (0,_game__WEBPACK_IMPORTED_MODULE_1__.cpuAttack)();
            }
        })
    }

    observer.observe(cpuBoard, options);
}

function gameboardEvents() {
    const cpuSquares = document.querySelectorAll(".cpuSq");
    gameboardEventLogic(cpuSquares, _game__WEBPACK_IMPORTED_MODULE_1__.cpuBoard)
}

function gameboardEventLogic(boardSquares, board) {
    boardSquares.forEach(square => {
        square.addEventListener("click", () => {

            if (board.ships.every(ship => ship.sunk == true)) {
                resetListeners(boardSquares);
                return;
            }

            if (square.classList.contains("ship") && !(square.id === "hit")) {
                board.receiveAttack(square)
            } else if (!square.classList.contains("miss") && !(square.classList.contains("ship"))) {
                board.missedAttack(square)
            }
            return;
        })
    })
}

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/scripts/game.js");



class Ship {
    constructor(length) {
        this.length = length;
        this.damage = 0;
        this.sunk = false;
        this.cords = [];
    }
    
    hit() {
        this.damage == this.length - 1 ? this.isSunk() : this.damage++;
        return this.damage;
    }
    
    isSunk() {
        this.sunk = true;
        this.damage++;
        return this.sunk;
    }
};

(0,_game__WEBPACK_IMPORTED_MODULE_1__.createDOM)();

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkPlayerShips": () => (/* binding */ checkPlayerShips),
/* harmony export */   "playerBoard": () => (/* binding */ playerBoard),
/* harmony export */   "playerBoardEvent": () => (/* binding */ playerBoardEvent),
/* harmony export */   "resetPlayer": () => (/* binding */ resetPlayer)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/scripts/gameboard.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ "./src/scripts/main.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ "./src/scripts/game.js");
/* harmony import */ var _gamedom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gamedom */ "./src/scripts/gamedom.js");





let playerBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard("player", [], "CPU");

function playerBoardEvent(dir, length) {
    (0,_gamedom__WEBPACK_IMPORTED_MODULE_3__.resetListeners)();
    const pBoard = document.querySelectorAll("#player-board div");

    pBoard.forEach(square => {
        square.addEventListener("pointerenter", () => {
            shipVisualFX(square, dir, length);
        })

        square.addEventListener("pointerout", () => {
            const visualShip = document.querySelectorAll("#visualize-ship");
            const visualError = document.querySelectorAll("#visualize-error");

            if (visualError.length >= 1) {
                visualError.forEach(err => {
                    err.id = "";
                })
            }

            visualShip.forEach(sq => {
                sq.id = "";
            })
        })
        
        square.addEventListener("click", () => {
            const visualError = document.querySelectorAll("#visualize-error");
            const coord = [Number(square.dataset.x), Number(square.dataset.y)];
            const ship = new _main__WEBPACK_IMPORTED_MODULE_1__.Ship(length + 1);
            
            if (visualError[0]) {
                return;
            } 
            
            playerBoard.placeShip(coord, dir, ship);
            playerBoard.ships.push(ship);
            
            checkStartGame();
        });
    })
}

function checkStartGame() {
    const remainingIndicator = document.getElementById("ship-remaining");
    const remaining = 4 - playerBoard.ships.length;

    if (remaining != 0) {
        remainingIndicator.textContent = `Ships left: ${remaining}`
        ;(0,_gamedom__WEBPACK_IMPORTED_MODULE_3__.resetListeners)();
        return;
    }
    
    document.getElementById("add-ship").disabled = true;
    remainingIndicator.textContent = `Ships floating: 4`
    ;(0,_gamedom__WEBPACK_IMPORTED_MODULE_3__.resetListeners)();
    (0,_game__WEBPACK_IMPORTED_MODULE_2__.startGame)();
}

function checkPlayerShips() {

    removeSunken();
}

function removeSunken() {
    playerBoard.ships.find(ship => {
        if (ship.sunk == true) {
            const index = playerBoard.ships.indexOf(ship);
            playerBoard.ships.splice(index, 1);
            return;
        }
    })
    return;
}

function resetPlayer() {
    const cpuBoard = document.querySelectorAll("#cpu-board div");
    playerBoard.hit = 0;
    playerBoard.miss = 0;
    playerBoard.ships = [];
    document.getElementById("add-ship").disabled = false;
    document.getElementById("ship-remaining").textContent = "Ships left: 4";
    (0,_gamedom__WEBPACK_IMPORTED_MODULE_3__.resetListeners)(cpuBoard);
}

function shipVisualFX(square, dir, length) {
    const shipArr = [square];
            for (let i = 1; i <= length; i++) {
                let nextSq;
                
                switch(dir) {
                    case "up":
                        nextSq = document.querySelector(`.playerSq[data-x="${Number(square.dataset.x) - i}"][data-y="${square.dataset.y}"]`);
                        shipArr.push(nextSq);
                        shipFXStyles(shipArr);
                        break;
                    case "right":
                        nextSq = document.querySelector(`.playerSq[data-x="${square.dataset.x}"][data-y="${Number(square.dataset.y) + i}"]`);
                        shipArr.push(nextSq);
                        shipFXStyles(shipArr);
                        break;
                    case "left":
                        nextSq = document.querySelector(`.playerSq[data-x="${square.dataset.x}"][data-y="${Number(square.dataset.y) - i}"]`);
                        shipArr.push(nextSq);
                        shipFXStyles(shipArr);
                        break;
                    case "down":
                        nextSq = document.querySelector(`.playerSq[data-x="${Number(square.dataset.x) + i}"][data-y="${square.dataset.y}"]`);
                        shipArr.push(nextSq);
                        shipFXStyles(shipArr);
                        break;
                }
            }
}

function shipFXStyles(shipArr) {
        if (shipArr.every(item => item !== null)) {

            if (shipArr.some(item => item.classList.contains("ship"))) {
                shipArr.forEach(item => {
                    item.id = "visualize-error";
                })
                return;
            }

            shipArr.forEach(item => {
                if (item !== null) {
                    item.id = "visualize-ship";
                }
            })
        } else {
            shipArr.forEach(item => {
                if (item !== null) {
                    item.id = "visualize-error";
                }
            })
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/main.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RSw2QkFBNkIsYUFBYSxpQkFBaUI7QUFDeEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7Ozs7OztVQzlJQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stamVzdC10ZW1wbGF0ZS8uL3NyYy9zdHlsZXMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1qZXN0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWplc3QtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWplc3QtdGVtcGxhdGUvLi9zcmMvc3R5bGVzL21haW4uY3NzP2U4MGEiLCJ3ZWJwYWNrOi8vd2VicGFjay1qZXN0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stamVzdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1qZXN0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stamVzdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWplc3QtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWplc3QtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWplc3QtdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovL3dlYnBhY2stamVzdC10ZW1wbGF0ZS8uL3NyYy9zY3JpcHRzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWplc3QtdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy9nYW1lZG9tLmpzIiwid2VicGFjazovL3dlYnBhY2stamVzdC10ZW1wbGF0ZS8uL3NyYy9zY3JpcHRzL21haW4uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1qZXN0LXRlbXBsYXRlLy4vc3JjL3NjcmlwdHMvcGxheWVyLmpzIiwid2VicGFjazovL3dlYnBhY2stamVzdC10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWplc3QtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay1qZXN0LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWplc3QtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWplc3QtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWplc3QtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnBhY2stamVzdC10ZW1wbGF0ZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2stamVzdC10ZW1wbGF0ZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1qZXN0LXRlbXBsYXRlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgMTBmciAvIDRmciAxZnIgNGZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG5kaXYuc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxufVxcblxcbmRpdi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVncmF5O1xcbn1cXG5cXG4jaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTA3LCAxMDcpO1xcbn1cXG5cXG4uY3B1LW1lc3NhZ2UsXFxuLnBsYXllci1tZXNzYWdlLFxcbi5wbGF5ZXItZm9ybSxcXG4uY3B1LWFjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogNDIwcHg7XFxuICAgIGhlaWdodDogNTAlO1xcblxcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5jcHUtbWVzc2FnZSB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4uY3B1LWFjdGlvbiB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4ucGxheWVyLW1lc3NhZ2Uge1xcbiAgICBncmlkLWNvbHVtbjogMyAvIC0xO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbi5wbGF5ZXItZm9ybSB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZ3JpZC1jb2x1bW46IDMgLyAtMTtcXG59XFxuXFxuI3BsYXllci1ib2FyZCxcXG4jY3B1LWJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1yb3c6IDMgLyAtMTtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDEwLCAxZnIpIC8gcmVwZWF0KDEwLCAxZnIpO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDY1JTtcXG59XFxuXFxuI3BsYXllci1ib2FyZCB7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gLTE7XFxufVxcblxcbi5wbGF5ZXJTcSxcXG4uY3B1U3Ege1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbiNjcHUtYm9hcmQge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxufVxcblxcbi8qIENlbnRlciBDb250cm9scyAqL1xcblxcbiNyZXNldCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMyAvIC0xO1xcblxcbiAgICB3aWR0aDogNjAlO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG59XFxuXFxuLyogU2hpcCBmb3JtICovXFxuXFxuI3NoaXAtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEycHg7XFxuXFxuICAgIHdpZHRoOiA0MDBweDtcXG59XFxuXFxuI3NoaXAtbGVuZ3RoIHtcXG4gICAgd2lkdGg6IDNlbTtcXG59XFxuXFxuI3NoaXAtZGlyIHtcXG4gICAgd2lkdGg6IDVlbTtcXG59XFxuXFxuI3Zpc3VhbGl6ZS1zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG59XFxuXFxuI3Zpc3VhbGl6ZS1lcnJvciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDEwNywgMTA3KTtcXG59XFxuXFxuI3NoaXAtcmVtYWluaW5nIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix5Q0FBeUM7SUFDekMsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1QsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7Ozs7SUFJSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osV0FBVzs7SUFFWCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdEQUFnRDtJQUNoRCxVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQSxvQkFBb0I7O0FBRXBCO0lBQ0ksZUFBZTs7SUFFZixrQkFBa0I7SUFDbEIsZ0JBQWdCOztJQUVoQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7O0FBRUEsY0FBYzs7QUFFZDtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsU0FBUzs7SUFFVCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksU0FBUztJQUNULGVBQWU7SUFDZixZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgMTBmciAvIDRmciAxZnIgNGZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG5kaXYuc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxufVxcblxcbmRpdi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVncmF5O1xcbn1cXG5cXG4jaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTA3LCAxMDcpO1xcbn1cXG5cXG4uY3B1LW1lc3NhZ2UsXFxuLnBsYXllci1tZXNzYWdlLFxcbi5wbGF5ZXItZm9ybSxcXG4uY3B1LWFjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogNDIwcHg7XFxuICAgIGhlaWdodDogNTAlO1xcblxcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5jcHUtbWVzc2FnZSB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4uY3B1LWFjdGlvbiB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4ucGxheWVyLW1lc3NhZ2Uge1xcbiAgICBncmlkLWNvbHVtbjogMyAvIC0xO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbi5wbGF5ZXItZm9ybSB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZ3JpZC1jb2x1bW46IDMgLyAtMTtcXG59XFxuXFxuI3BsYXllci1ib2FyZCxcXG4jY3B1LWJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1yb3c6IDMgLyAtMTtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDEwLCAxZnIpIC8gcmVwZWF0KDEwLCAxZnIpO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDY1JTtcXG59XFxuXFxuI3BsYXllci1ib2FyZCB7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gLTE7XFxufVxcblxcbi5wbGF5ZXJTcSxcXG4uY3B1U3Ege1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbiNjcHUtYm9hcmQge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxufVxcblxcbi8qIENlbnRlciBDb250cm9scyAqL1xcblxcbiNyZXNldCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMyAvIC0xO1xcblxcbiAgICB3aWR0aDogNjAlO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG59XFxuXFxuLyogU2hpcCBmb3JtICovXFxuXFxuI3NoaXAtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEycHg7XFxuXFxuICAgIHdpZHRoOiA0MDBweDtcXG59XFxuXFxuI3NoaXAtbGVuZ3RoIHtcXG4gICAgd2lkdGg6IDNlbTtcXG59XFxuXFxuI3NoaXAtZGlyIHtcXG4gICAgd2lkdGg6IDVlbTtcXG59XFxuXFxuI3Zpc3VhbGl6ZS1zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG59XFxuXFxuI3Zpc3VhbGl6ZS1lcnJvciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDEwNywgMTA3KTtcXG59XFxuXFxuI3NoaXAtcmVtYWluaW5nIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9tYWluXCJcbmltcG9ydCB7IERvbU1ldGhvZHMsIGdhbWVib2FyZEV2ZW50cywgb2JzZXJ2ZUJvYXJkLCByZXNldExpc3RlbmVycyB9IGZyb20gXCIuL2dhbWVkb21cIjtcbmltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiXG5pbXBvcnQgeyBjaGVja1BsYXllclNoaXBzLCBwbGF5ZXJCb2FyZCB9IGZyb20gXCIuL3BsYXllclwiO1xuZXhwb3J0IGNvbnN0IGNwdUJvYXJkID0gbmV3IEdhbWVib2FyZChcImNwdVwiLCBbXSwgXCJQbGF5ZXJcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVET00oKSB7XG4gICAgY29uc3QgZG9tID0gbmV3IERvbU1ldGhvZHMoKTtcbiAgICBkb20uY3JlYXRlRE9NKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gICAgY3B1U2hpcHMoKTtcbiAgICBnYW1lYm9hcmRFdmVudHMoKTtcbiAgICBvYnNlcnZlQm9hcmQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0Q1BVKCkge1xuICAgIGNwdUJvYXJkLmhpdCA9IDA7XG4gICAgY3B1Qm9hcmQubWlzcyA9IDA7XG4gICAgY3B1Qm9hcmQuc2hpcHMgPSBbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNwdUF0dGFjaygpIHtcbiAgICBpZiAoY3B1Qm9hcmQuc2hpcHMuZXZlcnkoc2hpcCA9PiBzaGlwLnN1bmsgPT0gdHJ1ZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjcHVTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNjcHUtYm9hcmQgZGl2XCIpO1xuICAgIHJlc2V0TGlzdGVuZXJzKGNwdVNxdWFyZXMpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcHUtYWN0aW9uXCIpLnRleHRDb250ZW50ID0gXCJDUFUgaXMgbWFraW5nIGFuIGF0dGFjay4uLlwiO1xuICAgIHNldFRpbWVvdXQoYXR0YWNrLCAyICogMTAwMCk7XG59XG5cbmZ1bmN0aW9uIGF0dGFjaygpIHtcbiAgICBjb25zdCB4ID0gcmFuZG9tTWluTWF4TnVtKDEsIDEwKTtcbiAgICBjb25zdCB5ID0gcmFuZG9tTWluTWF4TnVtKDEsIDEwKTtcbiAgICBsZXQgcmFuZFNxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYXllclNxW2RhdGEteD1cIiR7eH1cIl1bZGF0YS15PVwiJHt5fVwiXWApO1xuXG4gICAgbGV0IHNxdWFyZSA9IHJhbmRvbUF0dGFjayhyYW5kU3EpO1xuXG4gICAgaWYgKGNwdUJvYXJkLnByZXZIaXQgPT0gXCJcIikge1xuICAgICAgICBzcXVhcmUgPSByYW5kb21BdHRhY2soc3F1YXJlKTtcbiAgICB9IGVsc2UgaWYgKGNwdUJvYXJkLnByZXZIaXQgPT0gXCJoaXRcIiB8fCBjcHVCb2FyZC5wcmV2SGl0ID09IFwicmV0cnlcIikge1xuXG4gICAgICAgIGNvbnN0IHggPSBjcHVCb2FyZC5wcmV2QXRrLmRhdGFzZXQueDtcbiAgICAgICAgY29uc3QgeSA9IGNwdUJvYXJkLnByZXZBdGsuZGF0YXNldC55O1xuICAgICAgICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYXllclNxW2RhdGEteD1cIiR7eH1cIl1bZGF0YS15PVwiJHt5IC0gMX1cIl1gKTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucGxheWVyU3FbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXk9XCIkeyt5ICsgMX1cIl1gKTtcbiAgICAgICAgY29uc3QgYWJvdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucGxheWVyU3FbZGF0YS14PVwiJHt4IC0gMX1cIl1bZGF0YS15PVwiJHt5fVwiXWApO1xuICAgICAgICBjb25zdCBiZWxvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGF5ZXJTcVtkYXRhLXg9XCIkeyt4ICsgMX1cIl1bZGF0YS15PVwiJHt5fVwiXWApO1xuICAgICAgICBjb25zdCBjaG9pY2VzID0gW2xlZnQsIHJpZ2h0LCBhYm92ZSwgYmVsb3ddO1xuICAgICAgICBsZXQgcmFuZENob2ljZSA9IGNob2ljZXNbMF07XG5cbiAgICAgICAgd2hpbGUgKHJhbmRDaG9pY2UgPT09IG51bGwgfHwgcmFuZENob2ljZSA9PT0gdW5kZWZpbmVkIHx8IHJhbmRDaG9pY2UuaWQgPT09IFwiaGl0XCIgfHwgcmFuZENob2ljZS5jbGFzc0xpc3QuY29udGFpbnMoXCJtaXNzXCIpKSB7XG4gICAgICAgICAgICBpZiAoY2hvaWNlcy5sZW5ndGggPD0gMCB8fCBjaGVja0Nob2ljZXMoY2hvaWNlcykpIHtcbiAgICAgICAgICAgICAgICBjcHVCb2FyZC5wcmV2SGl0ID0gXCJcIjtcbiAgICAgICAgICAgICAgICByYW5kQ2hvaWNlID0gcmFuZG9tQXR0YWNrKGNwdUJvYXJkLnByZXZBdGspO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjaG9pY2VzLnNoaWZ0KCk7XG4gICAgICAgICAgICByYW5kQ2hvaWNlID0gY2hvaWNlc1swXVxuICAgICAgICB9XG5cbiAgICAgICAgc3F1YXJlID0gcmFuZENob2ljZTtcbiAgICB9XG5cbiAgICBpZiAoc3F1YXJlLmNsYXNzTmFtZS5pbmNsdWRlcyhcInNoaXBcIikpIHtcbiAgICAgICAgcGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjayhzcXVhcmUpO1xuICAgICAgICBjcHVCb2FyZC5wcmV2SGl0ID0gXCJoaXRcIlxuICAgICAgICBjcHVCb2FyZC5wcmV2QXRrID0gc3F1YXJlO1xuICAgIH0gZWxzZSBpZiAoY3B1Qm9hcmQucHJldkhpdCA9PSBcImhpdFwiIHx8IGNwdUJvYXJkLnByZXZIaXQgPT0gXCJyZXRyeVwiKSB7XG4gICAgICAgIHBsYXllckJvYXJkLm1pc3NlZEF0dGFjayhzcXVhcmUpXG4gICAgICAgIGNwdUJvYXJkLnByZXZIaXQgPSBcInJldHJ5XCJcbiAgICB9IGVsc2Uge1xuICAgICAgICBwbGF5ZXJCb2FyZC5taXNzZWRBdHRhY2soc3F1YXJlKVxuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XG4gICAgICAgIGNwdUJvYXJkLnByZXZIaXQgPSBcIm1pc3NcIlxuICAgICAgICBjcHVCb2FyZC5wcmV2QXRrID0gc3F1YXJlO1xuICAgIH1cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3B1LWFjdGlvblwiKS50ZXh0Q29udGVudCA9IFwiWW91ciB0dXJuIVwiO1xuICAgIGNoZWNrUGxheWVyU2hpcHMoKTtcbiAgICBnYW1lYm9hcmRFdmVudHMoKTtcbn1cblxuZnVuY3Rpb24gcmFuZG9tQXR0YWNrKHNxdWFyZSkge1xuICAgIGxldCBuZXdTcSA9IHNxdWFyZTtcbiAgICB3aGlsZSAobmV3U3EuY2xhc3NOYW1lLmluY2x1ZGVzKFwibWlzc1wiKSB8fCBuZXdTcS5pZCA9PSBcImhpdFwiKSB7XG4gICAgICAgIGNvbnN0IG5ld1ggPSByYW5kb21NaW5NYXhOdW0oMSwgMTApO1xuICAgICAgICBjb25zdCBuZXdZID0gcmFuZG9tTWluTWF4TnVtKDEsIDEwKTtcbiAgICAgICAgbmV3U3EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucGxheWVyU3FbZGF0YS14PVwiJHtuZXdYfVwiXVtkYXRhLXk9XCIke25ld1l9XCJdYClcbiAgICB9XG4gICAgcmV0dXJuIG5ld1NxO1xufVxuXG5mdW5jdGlvbiBjaGVja0Nob2ljZXMoYXJyKSB7XG4gICAgcmV0dXJuIGFyci5ldmVyeShjaG9pY2UgPT4ge1xuICAgICAgICBjaG9pY2UgPT09IG51bGwgfHwgY2hvaWNlID09PSB1bmRlZmluZWQgfHwgY2hvaWNlLmlkID09PSBcImhpdFwiIHx8IGNob2ljZS5jbGFzc0xpc3QuY29udGFpbnMoXCJtaXNzXCIpXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gY3B1U2hpcHMoKSB7XG4gICAgd2hpbGUoY3B1Qm9hcmQuc2hpcHMubGVuZ3RoIDwgNCkge1xuICAgICAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMykgKyAyKTtcbiAgICAgICAgY29uc3QgZGlyID0gcmFuZG9tRGlyKCk7XG4gICAgICAgIGNvbnN0IGNvb3JkID0gcmFuZG9tQ29vcmQoZGlyLCBzaGlwKTtcbiAgICAgICAgY29uc3Qgc2hpcENvb3JkcyA9IGdldFNoaXBDb29yZHMoY29vcmQsIGRpciwgc2hpcCk7XG5cbiAgICAgICAgaWYgKG1hdGNoaW5nQ29vcmQoc2hpcENvb3JkcykpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3B1Qm9hcmQucGxhY2VTaGlwKGNvb3JkLCBkaXIsIHNoaXApO1xuICAgICAgICAgICAgY3B1Qm9hcmQuc2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbWF0Y2hpbmdDb29yZChjb29yZEFycikge1xuICAgIGZvciAobGV0IHBsYWNlZFNoaXAgb2YgY3B1Qm9hcmQuc2hpcHMpIHtcbiAgICAgICAgaWYgKHBsYWNlZFNoaXAuY29yZHMuc29tZShjb29yZCA9PiBjb29yZEFyci5zb21lKHNoaXBDb3JkID0+IHNoaXBDb3JkWzBdID09IGNvb3JkWzBdICYmIHNoaXBDb3JkWzFdID09IGNvb3JkWzFdKSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRTaGlwQ29vcmRzKGNvcmQsIGRpciwgc2hpcCkge1xuICAgIGxldCBjb29yZEFyciA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHN3aXRjaChkaXIpIHtcbiAgICAgICAgICAgIGNhc2UgJ3VwJzogXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkQXJyLnB1c2goW2NvcmRbMF0gLSBpLCBjb3JkWzFdXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAgICAgICAgIGNvb3JkQXJyLnB1c2goW2NvcmRbMF0sIGNvcmRbMV0gLSBpXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgICAgICBjb29yZEFyci5wdXNoKFtjb3JkWzBdLCBjb3JkWzFdICsgaV0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2Rvd24nOlxuICAgICAgICAgICAgICAgICAgICBjb29yZEFyci5wdXNoKFtjb3JkWzBdICsgaSwgY29yZFsxXV0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb29yZEFycjtcbn1cblxuZnVuY3Rpb24gcmFuZG9tTWluTWF4TnVtKG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUNvb3JkKGRpciwgc2hpcCkge1xuICAgIGxldCByYW5kVXBMZWZ0ID0gcmFuZG9tTWluTWF4TnVtKHNoaXAubGVuZ3RoLCAxMCk7XG4gICAgbGV0IHJhbmREb3duUmlnaHQgPSByYW5kb21NaW5NYXhOdW0oMSwgKDEwIC0gc2hpcC5sZW5ndGgpKTtcbiAgICBsZXQgcmFuZEFueSA9IHJhbmRvbU1pbk1heE51bSgxLCAxMCk7XG4gICAgbGV0IGNvb3JkcztcblxuICAgIHN3aXRjaChkaXIpIHtcbiAgICAgICAgY2FzZSBcInVwXCI6IFxuICAgICAgICAgICAgY29vcmRzID0gW3JhbmRVcExlZnQsIHJhbmRBbnldXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgICAgIGNvb3JkcyA9IFtyYW5kQW55LCByYW5kVXBMZWZ0XVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJkb3duXCI6XG4gICAgICAgICAgICBjb29yZHMgPSBbcmFuZERvd25SaWdodCwgcmFuZEFueV1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgICAgIGNvb3JkcyA9IFtyYW5kQW55LCByYW5kRG93blJpZ2h0XVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvb3Jkcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbURpcigpIHtcbiAgICBjb25zdCBkaXJlY3Rpb25zID0gW1widXBcIiwgXCJsZWZ0XCIsIFwicmlnaHRcIiwgXCJkb3duXCJdO1xuICAgIGNvbnN0IHJhbmRvbU51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpO1xuXG4gICAgcmV0dXJuIGRpcmVjdGlvbnNbcmFuZG9tTnVtXTtcbn0iLCJleHBvcnQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgc2hpcHMsIG9wcG9uZW50KSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5zaGlwcyA9IHNoaXBzO1xuICAgICAgICB0aGlzLm9wcG9uZW50ID0gb3Bwb25lbnQ7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBjcmVhdGVCb2FyZCgpO1xuICAgICAgICB0aGlzLm1pc3MgPSAwO1xuICAgICAgICB0aGlzLmhpdCA9IDA7XG4gICAgICAgIHRoaXMucHJldkhpdCA9IFwiXCI7XG4gICAgICAgIHRoaXMucHJldkF0ayA9IFwiXCI7XG4gICAgfVxuXG4gICAgcGxhY2VTaGlwKGNvcmQsIGRpciwgc2hpcCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzcXVhcmU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHN3aXRjaChkaXIpIHtcbiAgICAgICAgICAgICAgICBjYXNlICd1cCc6IFxuICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5pZH1TcVtkYXRhLXg9XCIke2NvcmRbMF0gLSBpfVwiXVtkYXRhLXk9XCIke2NvcmRbMV19XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwLmNvcmRzLnB1c2goW2NvcmRbMF0gLSBpLCBjb3JkWzFdXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuaWR9U3FbZGF0YS14PVwiJHtjb3JkWzBdfVwiXVtkYXRhLXk9XCIke2NvcmRbMV0gLSBpfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcC5jb3Jkcy5wdXNoKFtjb3JkWzBdLCBjb3JkWzFdIC0gaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5pZH1TcVtkYXRhLXg9XCIke2NvcmRbMF19XCJdW2RhdGEteT1cIiR7Y29yZFsxXSArIGl9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwLmNvcmRzLnB1c2goW2NvcmRbMF0sIGNvcmRbMV0gKyBpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdkb3duJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuaWR9U3FbZGF0YS14PVwiJHtjb3JkWzBdICsgaX1cIl1bZGF0YS15PVwiJHtjb3JkWzFdfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcC5jb3Jkcy5wdXNoKFtjb3JkWzBdICsgaSwgY29yZFsxXV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZWNlaXZlQXR0YWNrKHNxdWFyZSkge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5pZH0tbWVzc2FnZWApXG4gICAgICAgIFxuICAgICAgICBpZiAoIXRoaXMuc2hpcHMuZXZlcnkoc2hpcCA9PiBzaGlwLnN1bmsgPT0gdHJ1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgICAgICBzaGlwLmNvcmRzLnNvbWUoY29yZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGNvcmRbMF0gPT0gc3F1YXJlLmRhdGFzZXQueCAmJiBjb3JkWzFdID09IHNxdWFyZS5kYXRhc2V0LnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXAuaGl0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZS5pZCA9IFwiaGl0XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwLnN1bmsgPT0gZmFsc2UgPyB0aGlzLmhpdCsrIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuaW5uZXJUZXh0ID09IGAke3RoaXMub3Bwb25lbnR9IGhpdCFgID8gbnVsbCA6IG1lc3NhZ2UuaW5uZXJUZXh0ID0gYCR7dGhpcy5vcHBvbmVudH0gaGl0IWBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2hpcHMuZXZlcnkoc2hpcCA9PiBzaGlwLnN1bmsgPT0gdHJ1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuYWxsU3VuayhtZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgbWlzc2VkQXR0YWNrKHNxdWFyZSkge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5pZH0tbWVzc2FnZWApXG4gICAgICAgIG1lc3NhZ2UuaW5uZXJUZXh0ID09IGAke3RoaXMub3Bwb25lbnR9IG1pc3NlZCFgID8gbnVsbCA6IG1lc3NhZ2UuaW5uZXJUZXh0ID0gYCR7dGhpcy5vcHBvbmVudH0gbWlzc2VkIWBcblxuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcIm1pc3NcIilcbiAgICAgICAgdGhpcy5taXNzKys7XG4gICAgfVxuXG4gICAgYWxsU3Vuayhtc2cpIHtcbiAgICAgICAgbXNnLmlubmVyVGV4dCA9IFwiQWxsIHNoaXBzIGhhdmUgYmVlbiBzdW5rIVwiO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJvYXJkKCkge1xuICAgIGxldCBib2FyZEFyciA9IFtdO1xuXG4gICAgbGV0IHggPSAxO1xuICAgIGxldCB5ID0gMTtcblxuICAgIHdoaWxlKHkgPD0gMTAgJiYgeCA8PSAxMCkge1xuICAgICAgICBpZih4ID09IDEwICYmIHkgPT0gMTApIHtcbiAgICAgICAgICAgIGJvYXJkQXJyLnB1c2goYCR7eH0tJHt5fWApXG4gICAgICAgICAgICByZXR1cm4gYm9hcmRBcnI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoeSA9PSAxMCkge1xuICAgICAgICAgICAgYm9hcmRBcnIucHVzaChgJHt4fS0ke3l9YClcbiAgICAgICAgICAgIHgrK1xuICAgICAgICAgICAgeSA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBib2FyZEFyci5wdXNoKGAke3h9LSR7eX1gKTtcbiAgICAgICAgeSsrXG4gICAgfVxufSIsIi8vIGltcG9ydCBcIi4uL3N0eWxlcy9tYWluLmNzc1wiO1xuaW1wb3J0IHtjcmVhdGVCb2FyZH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCJcbmltcG9ydCB7Y3B1Qm9hcmQsIHJlc2V0Q1BVLCBjcHVBdHRhY2t9IGZyb20gXCIuL2dhbWVcIjtcbmltcG9ydCB7cGxheWVyQm9hcmRFdmVudCwgcmVzZXRQbGF5ZXJ9IGZyb20gXCIuL3BsYXllclwiO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbmV4cG9ydCBjbGFzcyBEb21NZXRob2RzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICBnYW1lQ29udGFpbmVycygpIHtcbiAgICAgICAgY29uc3QgcGxheWVyQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgY3B1Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICBwbGF5ZXJCb3guaWQgPSBcInBsYXllci1ib2FyZFwiO1xuICAgICAgICBjcHVCb3guaWQgPSBcImNwdS1ib2FyZFwiO1xuXG4gICAgICAgIGJvZHkuYXBwZW5kKHBsYXllckJveCwgY3B1Qm94KVxuICAgIH1cblxuICAgIGdhbWVib2FyZFNxdWFyZXMoKSB7XG4gICAgICAgIGxldCBuZXdCb2FyZCA9IGNyZWF0ZUJvYXJkKCk7XG4gICAgICAgIGNvbnN0IHBsYXllckJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyLWJvYXJkXCIpO1xuICAgICAgICBjb25zdCBjcHVCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNwdS1ib2FyZFwiKTtcblxuICAgICAgICBuZXdCb2FyZC5mb3JFYWNoKGNvcmQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGxheWVyU3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnN0IGNwdVNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb25zdCBzcGxpdENvcmRzID0gY29yZC5zcGxpdChcIi1cIik7XG5cbiAgICAgICAgICAgIHBsYXllclNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIiwgc3BsaXRDb3Jkc1swXSk7XG4gICAgICAgICAgICBwbGF5ZXJTcXVhcmUuc2V0QXR0cmlidXRlKFwiZGF0YS15XCIsIHNwbGl0Q29yZHNbMV0pO1xuICAgICAgICAgICAgY3B1U3F1YXJlLnNldEF0dHJpYnV0ZShcImRhdGEteFwiLCBzcGxpdENvcmRzWzBdKTtcbiAgICAgICAgICAgIGNwdVNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIiwgc3BsaXRDb3Jkc1sxXSk7XG4gICAgICAgICAgICBwbGF5ZXJTcXVhcmUuY2xhc3NMaXN0LmFkZChcInBsYXllclNxXCIpO1xuICAgICAgICAgICAgY3B1U3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJjcHVTcVwiKTtcblxuICAgICAgICAgICAgcGxheWVyQm94LmFwcGVuZENoaWxkKHBsYXllclNxdWFyZSk7XG4gICAgICAgICAgICBjcHVCb3guYXBwZW5kQ2hpbGQoY3B1U3F1YXJlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYm9hcmRNZXNzYWdlcygpIHtcbiAgICAgICAgY29uc3QgY3B1TWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGNwdUFjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHBseXJNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY3B1QWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJjcHUtYWN0aW9uXCIpO1xuICAgICAgICBjcHVNZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJjcHUtbWVzc2FnZVwiKVxuICAgICAgICBwbHlyTWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwicGxheWVyLW1lc3NhZ2VcIilcbiAgICAgICAgYm9keS5hcHBlbmQoY3B1TWVzc2FnZSwgcGx5ck1lc3NhZ2UsIGNwdUFjdGlvbik7XG4gICAgfVxuXG4gICAgcmVzZXRCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiUmVzZXRcIlxuICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJyZXNldFwiKTtcblxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRET00oKVxuICAgICAgICAgICAgcmVzZXRDUFUoKVxuICAgICAgICAgICAgcmVzZXRQbGF5ZXIoKVxuICAgICAgICB9KVxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGJ0bilcbiAgICB9XG5cbiAgICBhZGRTaGlwRm9ybSgpIHtcbiAgICAgICAgY29uc3QgYWRkRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXG4gICAgICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItZm9ybVwiKVxuXG4gICAgICAgIGNvbnN0IGxlbmd0aExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBjb25zdCBkaXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblxuICAgICAgICBsZW5ndGhMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJzaGlwLWxlbmd0aFwiKTtcbiAgICAgICAgZGlyTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwic2hpcC1kaXJcIik7XG5cbiAgICAgICAgY29uc3QgbGVuZ3RoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgICAgY29uc3QgbGVuZ3RoT3B0aW9ucyA9IFsyLCAzLCA0XTtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgICAgY29uc3QgZGlyT3B0aW9ucyA9IFtcInVwXCIsIFwicmlnaHRcIiwgXCJsZWZ0XCIsIFwiZG93blwiXTtcbiAgICAgICAgXG4gICAgICAgIGFkZEZvcm0uaWQgPSBcInNoaXAtZm9ybVwiO1xuICAgICAgICBsZW5ndGguaWQgPSBcInNoaXAtbGVuZ3RoXCI7XG4gICAgICAgIGRpcmVjdGlvbi5pZCA9IFwic2hpcC1kaXJcIjtcblxuICAgICAgICB0aGlzLmRyb3Bkb3duT3B0aW9ucyhsZW5ndGhPcHRpb25zLCBsZW5ndGgpO1xuICAgICAgICB0aGlzLmRyb3Bkb3duT3B0aW9ucyhkaXJPcHRpb25zLCBkaXJlY3Rpb24pO1xuXG4gICAgICAgIGNvbnN0IGFkZFNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBhZGRTaGlwLmlkID0gXCJhZGQtc2hpcFwiXG4gICAgICAgIGFkZFNoaXAudGV4dENvbnRlbnQgPSBcIkFkZCBTaGlwXCI7XG5cbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKVxuICAgICAgICBhZGRGb3JtLmFwcGVuZChsZW5ndGhMYWJlbCwgbGVuZ3RoLCBkaXJMYWJlbCwgZGlyZWN0aW9uLCBhZGRTaGlwKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItZm9ybVwiKS5hcHBlbmRDaGlsZChhZGRGb3JtKTtcbiAgICB9XG5cbiAgICBhZGRTaGlwQnRuRXZlbnQoKSB7XG4gICAgICAgIGNvbnN0IGFkZFNoaXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1zaGlwXCIpO1xuICAgICAgICBcbiAgICAgICAgYWRkU2hpcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcC1kaXJcIik7XG4gICAgICAgICAgICBjb25zdCBsZW5ndGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXAtbGVuZ3RoXCIpO1xuXG4gICAgICAgICAgICBwbGF5ZXJCb2FyZEV2ZW50KGRpcmVjdGlvbi52YWx1ZSwgTnVtYmVyKGxlbmd0aC52YWx1ZSkgLSAxKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW1haW5pbmdTaGlwcygpIHtcbiAgICAgICAgY29uc3QgaW5kaWNhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGluZGljYXRvci50ZXh0Q29udGVudCA9IFwiU2hpcHMgbGVmdDogNFwiO1xuICAgICAgICBpbmRpY2F0b3IuaWQgPSBcInNoaXAtcmVtYWluaW5nXCI7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLWZvcm1cIikuYXBwZW5kQ2hpbGQoaW5kaWNhdG9yKVxuICAgIH1cblxuICAgIGRyb3Bkb3duT3B0aW9ucyhvcHRpb25zLCBlbGVtZW50KSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBgJHtvcHRpb25zW2ldfWApO1xuICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGAke29wdGlvbnNbaV19YDtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzZXRET00oKSB7XG4gICAgICAgIGNvbnN0IGNwdVNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNwdVNxXCIpO1xuICAgICAgICBjb25zdCBwbGF5ZXJTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXJTcVwiKTtcbiAgICAgICAgY29uc3QgYm9hcmRzID0gW2NwdVNxdWFyZXMsIHBsYXllclNxdWFyZXNdO1xuICAgICAgICBjb25zdCBjcHVNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcHUtbWVzc2FnZVwiKTtcblxuICAgICAgICBjcHVNZXNzYWdlLnRleHRDb250ZW50ID0gXCJcIlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgICAgICAgYm9hcmRzW2ldLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWlzc1wiKSA/IHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKFwibWlzc1wiKSA6IHNxdWFyZS5pZCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5jb250YWlucyhcInNoaXBcIikgPyBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZShcInNoaXBcIikgOiBudWxsO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVET00gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuZ2FtZUNvbnRhaW5lcnMoKTtcbiAgICAgICAgdGhpcy5nYW1lYm9hcmRTcXVhcmVzKCk7XG4gICAgICAgIHRoaXMuYm9hcmRNZXNzYWdlcygpO1xuICAgICAgICB0aGlzLnJlc2V0QnV0dG9uKCk7XG4gICAgICAgIHRoaXMuYWRkU2hpcEZvcm0oKTtcbiAgICAgICAgdGhpcy5hZGRTaGlwQnRuRXZlbnQoKTtcbiAgICAgICAgdGhpcy5yZW1haW5pbmdTaGlwcygpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0TGlzdGVuZXJzKGNwdSkge1xuICAgIGlmIChjcHUpIHtcbiAgICAgICAgY3B1LmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNsb25lID0gc3F1YXJlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICAgIHNxdWFyZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChjbG9uZSwgc3F1YXJlKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcEJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNwbGF5ZXItYm9hcmQgZGl2XCIpO1xuICAgIHBCb2FyZC5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgIGNvbnN0IGNsb25lID0gc3F1YXJlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgc3F1YXJlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGNsb25lLCBzcXVhcmUpXG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmVCb2FyZCgpIHtcbiAgICBjb25zdCBjcHVCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3B1LWJvYXJkXCIpXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICB9XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihjYWxsYmFjayk7XG5cbiAgICBmdW5jdGlvbiBjYWxsYmFjayhtdXRhdGlvbkxpc3QsIG9ic2VydmVyKSB7XG4gICAgICAgIG11dGF0aW9uTGlzdC5mb3JFYWNoKG11dGF0aW9uID0+IHtcbiAgICAgICAgICAgIGlmIChtdXRhdGlvbi50YXJnZXQuaWQgPT0gXCJoaXRcIiB8fCBtdXRhdGlvbi50YXJnZXQuY2xhc3NOYW1lLmluY2x1ZGVzKFwibWlzc1wiKSkge1xuICAgICAgICAgICAgICAgIGNwdUF0dGFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIG9ic2VydmVyLm9ic2VydmUoY3B1Qm9hcmQsIG9wdGlvbnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2FtZWJvYXJkRXZlbnRzKCkge1xuICAgIGNvbnN0IGNwdVNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNwdVNxXCIpO1xuICAgIGdhbWVib2FyZEV2ZW50TG9naWMoY3B1U3F1YXJlcywgY3B1Qm9hcmQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnYW1lYm9hcmRFdmVudExvZ2ljKGJvYXJkU3F1YXJlcywgYm9hcmQpIHtcbiAgICBib2FyZFNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblxuICAgICAgICAgICAgaWYgKGJvYXJkLnNoaXBzLmV2ZXJ5KHNoaXAgPT4gc2hpcC5zdW5rID09IHRydWUpKSB7XG4gICAgICAgICAgICAgICAgcmVzZXRMaXN0ZW5lcnMoYm9hcmRTcXVhcmVzKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzcXVhcmUuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpcFwiKSAmJiAhKHNxdWFyZS5pZCA9PT0gXCJoaXRcIikpIHtcbiAgICAgICAgICAgICAgICBib2FyZC5yZWNlaXZlQXR0YWNrKHNxdWFyZSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXNxdWFyZS5jbGFzc0xpc3QuY29udGFpbnMoXCJtaXNzXCIpICYmICEoc3F1YXJlLmNsYXNzTGlzdC5jb250YWlucyhcInNoaXBcIikpKSB7XG4gICAgICAgICAgICAgICAgYm9hcmQubWlzc2VkQXR0YWNrKHNxdWFyZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSlcbiAgICB9KVxufSIsImltcG9ydCBcIi4uL3N0eWxlcy9tYWluLmNzc1wiO1xuaW1wb3J0IHsgY3JlYXRlRE9NIH0gZnJvbSBcIi4vZ2FtZVwiO1xuXG5leHBvcnQgY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLmRhbWFnZSA9IDA7XG4gICAgICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvcmRzID0gW107XG4gICAgfVxuICAgIFxuICAgIGhpdCgpIHtcbiAgICAgICAgdGhpcy5kYW1hZ2UgPT0gdGhpcy5sZW5ndGggLSAxID8gdGhpcy5pc1N1bmsoKSA6IHRoaXMuZGFtYWdlKys7XG4gICAgICAgIHJldHVybiB0aGlzLmRhbWFnZTtcbiAgICB9XG4gICAgXG4gICAgaXNTdW5rKCkge1xuICAgICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgICAgICB0aGlzLmRhbWFnZSsrO1xuICAgICAgICByZXR1cm4gdGhpcy5zdW5rO1xuICAgIH1cbn07XG5cbmNyZWF0ZURPTSgpOyIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL21haW5cIjtcbmltcG9ydCB7IHN0YXJ0R2FtZSB9IGZyb20gXCIuL2dhbWVcIjtcbmltcG9ydCB7IHJlc2V0TGlzdGVuZXJzIH0gZnJvbSBcIi4vZ2FtZWRvbVwiO1xuXG5leHBvcnQgbGV0IHBsYXllckJvYXJkID0gbmV3IEdhbWVib2FyZChcInBsYXllclwiLCBbXSwgXCJDUFVcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBwbGF5ZXJCb2FyZEV2ZW50KGRpciwgbGVuZ3RoKSB7XG4gICAgcmVzZXRMaXN0ZW5lcnMoKTtcbiAgICBjb25zdCBwQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3BsYXllci1ib2FyZCBkaXZcIik7XG5cbiAgICBwQm9hcmQuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJlbnRlclwiLCAoKSA9PiB7XG4gICAgICAgICAgICBzaGlwVmlzdWFsRlgoc3F1YXJlLCBkaXIsIGxlbmd0aCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZpc3VhbFNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3Zpc3VhbGl6ZS1zaGlwXCIpO1xuICAgICAgICAgICAgY29uc3QgdmlzdWFsRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3Zpc3VhbGl6ZS1lcnJvclwiKTtcblxuICAgICAgICAgICAgaWYgKHZpc3VhbEVycm9yLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgICAgICAgdmlzdWFsRXJyb3IuZm9yRWFjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlcnIuaWQgPSBcIlwiO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZpc3VhbFNoaXAuZm9yRWFjaChzcSA9PiB7XG4gICAgICAgICAgICAgICAgc3EuaWQgPSBcIlwiO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmlzdWFsRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3Zpc3VhbGl6ZS1lcnJvclwiKTtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkID0gW051bWJlcihzcXVhcmUuZGF0YXNldC54KSwgTnVtYmVyKHNxdWFyZS5kYXRhc2V0LnkpXTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChsZW5ndGggKyAxKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHZpc3VhbEVycm9yWzBdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKGNvb3JkLCBkaXIsIHNoaXApO1xuICAgICAgICAgICAgcGxheWVyQm9hcmQuc2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2hlY2tTdGFydEdhbWUoKTtcbiAgICAgICAgfSk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gY2hlY2tTdGFydEdhbWUoKSB7XG4gICAgY29uc3QgcmVtYWluaW5nSW5kaWNhdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwLXJlbWFpbmluZ1wiKTtcbiAgICBjb25zdCByZW1haW5pbmcgPSA0IC0gcGxheWVyQm9hcmQuc2hpcHMubGVuZ3RoO1xuXG4gICAgaWYgKHJlbWFpbmluZyAhPSAwKSB7XG4gICAgICAgIHJlbWFpbmluZ0luZGljYXRvci50ZXh0Q29udGVudCA9IGBTaGlwcyBsZWZ0OiAke3JlbWFpbmluZ31gXG4gICAgICAgIHJlc2V0TGlzdGVuZXJzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtc2hpcFwiKS5kaXNhYmxlZCA9IHRydWU7XG4gICAgcmVtYWluaW5nSW5kaWNhdG9yLnRleHRDb250ZW50ID0gYFNoaXBzIGZsb2F0aW5nOiA0YFxuICAgIHJlc2V0TGlzdGVuZXJzKCk7XG4gICAgc3RhcnRHYW1lKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1BsYXllclNoaXBzKCkge1xuXG4gICAgcmVtb3ZlU3Vua2VuKCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN1bmtlbigpIHtcbiAgICBwbGF5ZXJCb2FyZC5zaGlwcy5maW5kKHNoaXAgPT4ge1xuICAgICAgICBpZiAoc2hpcC5zdW5rID09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcGxheWVyQm9hcmQuc2hpcHMuaW5kZXhPZihzaGlwKTtcbiAgICAgICAgICAgIHBsYXllckJvYXJkLnNoaXBzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0UGxheWVyKCkge1xuICAgIGNvbnN0IGNwdUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNjcHUtYm9hcmQgZGl2XCIpO1xuICAgIHBsYXllckJvYXJkLmhpdCA9IDA7XG4gICAgcGxheWVyQm9hcmQubWlzcyA9IDA7XG4gICAgcGxheWVyQm9hcmQuc2hpcHMgPSBbXTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1zaGlwXCIpLmRpc2FibGVkID0gZmFsc2U7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwLXJlbWFpbmluZ1wiKS50ZXh0Q29udGVudCA9IFwiU2hpcHMgbGVmdDogNFwiO1xuICAgIHJlc2V0TGlzdGVuZXJzKGNwdUJvYXJkKTtcbn1cblxuZnVuY3Rpb24gc2hpcFZpc3VhbEZYKHNxdWFyZSwgZGlyLCBsZW5ndGgpIHtcbiAgICBjb25zdCBzaGlwQXJyID0gW3NxdWFyZV07XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBuZXh0U3E7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc3dpdGNoKGRpcikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwidXBcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRTcSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGF5ZXJTcVtkYXRhLXg9XCIke051bWJlcihzcXVhcmUuZGF0YXNldC54KSAtIGl9XCJdW2RhdGEteT1cIiR7c3F1YXJlLmRhdGFzZXQueX1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBBcnIucHVzaChuZXh0U3EpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcEZYU3R5bGVzKHNoaXBBcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFNxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYXllclNxW2RhdGEteD1cIiR7c3F1YXJlLmRhdGFzZXQueH1cIl1bZGF0YS15PVwiJHtOdW1iZXIoc3F1YXJlLmRhdGFzZXQueSkgKyBpfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcEFyci5wdXNoKG5leHRTcSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwRlhTdHlsZXMoc2hpcEFycik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRTcSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGF5ZXJTcVtkYXRhLXg9XCIke3NxdWFyZS5kYXRhc2V0Lnh9XCJdW2RhdGEteT1cIiR7TnVtYmVyKHNxdWFyZS5kYXRhc2V0LnkpIC0gaX1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBBcnIucHVzaChuZXh0U3EpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcEZYU3R5bGVzKHNoaXBBcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJkb3duXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0U3EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucGxheWVyU3FbZGF0YS14PVwiJHtOdW1iZXIoc3F1YXJlLmRhdGFzZXQueCkgKyBpfVwiXVtkYXRhLXk9XCIke3NxdWFyZS5kYXRhc2V0Lnl9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwQXJyLnB1c2gobmV4dFNxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBGWFN0eWxlcyhzaGlwQXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbn1cblxuZnVuY3Rpb24gc2hpcEZYU3R5bGVzKHNoaXBBcnIpIHtcbiAgICAgICAgaWYgKHNoaXBBcnIuZXZlcnkoaXRlbSA9PiBpdGVtICE9PSBudWxsKSkge1xuXG4gICAgICAgICAgICBpZiAoc2hpcEFyci5zb21lKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGlwXCIpKSkge1xuICAgICAgICAgICAgICAgIHNoaXBBcnIuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5pZCA9IFwidmlzdWFsaXplLWVycm9yXCI7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNoaXBBcnIuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmlkID0gXCJ2aXN1YWxpemUtc2hpcFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaGlwQXJyLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5pZCA9IFwidmlzdWFsaXplLWVycm9yXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3NjcmlwdHMvbWFpbi5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==