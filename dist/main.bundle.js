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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    font-family: sans-serif;\n}\n\nbody {\n    display: grid;\n    grid-template: 1fr 1fr 8fr / 4fr 1fr 4fr;\n    align-items: center;\n    justify-items: center;\n    margin: 0;\n    height: 100vh;\n    width: 100vw;\n}\n\ndiv.ship {\n    background-color: lightgreen;\n}\n\ndiv.miss {\n    background-color: slategray;\n}\n\n#hit {\n    background-color: rgb(255, 107, 107);\n}\n\n.cpu-message,\n.player-message,\n.player-form,\n.cpu-action {\n    display: flex;\n    align-items: flex-end;\n    justify-content: center;\n    width: 420px;\n    height: 50%;\n\n    font-size: 24px;\n    font-weight: 600;\n}\n\n.cpu-message {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n}\n\n.cpu-action {\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n}\n\n.player-message {\n    grid-column: 3 / -1;\n    grid-row: 2 / 3;\n}\n\n.player-form {\n    grid-row: 1 / 2;\n    grid-column: 3 / -1;\n}\n\n#player-board,\n#cpu-board {\n    display: grid;\n    grid-row: 3 / -1;\n    grid-template: repeat(10, 1fr) / repeat(10, 1fr);\n    width: 50%;\n    height: 65%;\n}\n\n#player-board {\n    grid-column: 3 / -1;\n}\n\n.playerSq,\n.cpuSq {\n    background-color: white;\n    width: 100%;\n    height: 100%;\n    border: 1px solid black;\n}\n\n#cpu-board {\n    grid-column: 1 / 2;\n}\n\n/* Center Controls */\n\n#reset {\n    cursor: pointer;\n\n    grid-column: 2 / 3;\n    grid-row: 3 / -1;\n\n    width: 60%;\n    height: 25px;\n    border-radius: 8px;\n    border: 1px solid grey;\n}\n\n/* Ship form */\n\n#ship-form {\n    display: flex;\n    justify-content: center;\n    gap: 12px;\n\n    width: 400px;\n}\n\n#ship-length {\n    width: 3em;\n}\n\n#ship-dir {\n    width: 5em;\n}\n\n#visualize-ship {\n    background-color: lightgreen;\n}\n\n#visualize-error {\n    background-color: rgb(255, 107, 107);\n}\n\n#ship-remaining {\n    margin: 0;\n    font-size: 18px;\n    width: 200px;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,wCAAwC;IACxC,mBAAmB;IACnB,qBAAqB;IACrB,SAAS;IACT,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,oCAAoC;AACxC;;AAEA;;;;IAII,aAAa;IACb,qBAAqB;IACrB,uBAAuB;IACvB,YAAY;IACZ,WAAW;;IAEX,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,mBAAmB;AACvB;;AAEA;;IAEI,aAAa;IACb,gBAAgB;IAChB,gDAAgD;IAChD,UAAU;IACV,WAAW;AACf;;AAEA;IACI,mBAAmB;AACvB;;AAEA;;IAEI,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;AACtB;;AAEA,oBAAoB;;AAEpB;IACI,eAAe;;IAEf,kBAAkB;IAClB,gBAAgB;;IAEhB,UAAU;IACV,YAAY;IACZ,kBAAkB;IAClB,sBAAsB;AAC1B;;AAEA,cAAc;;AAEd;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;;IAET,YAAY;AAChB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,SAAS;IACT,eAAe;IACf,YAAY;AAChB","sourcesContent":["* {\n    font-family: sans-serif;\n}\n\nbody {\n    display: grid;\n    grid-template: 1fr 1fr 8fr / 4fr 1fr 4fr;\n    align-items: center;\n    justify-items: center;\n    margin: 0;\n    height: 100vh;\n    width: 100vw;\n}\n\ndiv.ship {\n    background-color: lightgreen;\n}\n\ndiv.miss {\n    background-color: slategray;\n}\n\n#hit {\n    background-color: rgb(255, 107, 107);\n}\n\n.cpu-message,\n.player-message,\n.player-form,\n.cpu-action {\n    display: flex;\n    align-items: flex-end;\n    justify-content: center;\n    width: 420px;\n    height: 50%;\n\n    font-size: 24px;\n    font-weight: 600;\n}\n\n.cpu-message {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n}\n\n.cpu-action {\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n}\n\n.player-message {\n    grid-column: 3 / -1;\n    grid-row: 2 / 3;\n}\n\n.player-form {\n    grid-row: 1 / 2;\n    grid-column: 3 / -1;\n}\n\n#player-board,\n#cpu-board {\n    display: grid;\n    grid-row: 3 / -1;\n    grid-template: repeat(10, 1fr) / repeat(10, 1fr);\n    width: 50%;\n    height: 65%;\n}\n\n#player-board {\n    grid-column: 3 / -1;\n}\n\n.playerSq,\n.cpuSq {\n    background-color: white;\n    width: 100%;\n    height: 100%;\n    border: 1px solid black;\n}\n\n#cpu-board {\n    grid-column: 1 / 2;\n}\n\n/* Center Controls */\n\n#reset {\n    cursor: pointer;\n\n    grid-column: 2 / 3;\n    grid-row: 3 / -1;\n\n    width: 60%;\n    height: 25px;\n    border-radius: 8px;\n    border: 1px solid grey;\n}\n\n/* Ship form */\n\n#ship-form {\n    display: flex;\n    justify-content: center;\n    gap: 12px;\n\n    width: 400px;\n}\n\n#ship-length {\n    width: 3em;\n}\n\n#ship-dir {\n    width: 5em;\n}\n\n#visualize-ship {\n    background-color: lightgreen;\n}\n\n#visualize-error {\n    background-color: rgb(255, 107, 107);\n}\n\n#ship-remaining {\n    margin: 0;\n    font-size: 18px;\n    width: 200px;\n}"],"sourceRoot":""}]);
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
    document.querySelector(".player-message").textContent = "";
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
                        message.innerText == `${this.opponent} hit!` ? null : message.innerText = `${this.opponent} hit!`, 2000;
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
        message.innerText == `${this.opponent} missed!` ? null : message.innerText = `${this.opponent} missed!`, 2000

        square.classList.add("miss")
        this.miss++;
    }

    allSunk(msg) {
        msg.innerText = `All of ${this.id}'s ships have been sunk!`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsNkJBQTZCO0FBQ3hJO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkVBQTZFLDZCQUE2QixhQUFhLGlCQUFpQjtBQUN4STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7Ozs7O1VDN0lBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1qZXN0LXRlbXBsYXRlLy4vc3JjL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWplc3QtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stamVzdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stamVzdC10ZW1wbGF0ZS8uL3NyYy9zdHlsZXMvbWFpbi5jc3M/ZTgwYSIsIndlYnBhY2s6Ly93ZWJwYWNrLWplc3QtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1qZXN0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWplc3QtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1qZXN0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stamVzdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stamVzdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stamVzdC10ZW1wbGF0ZS8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1qZXN0LXRlbXBsYXRlLy4vc3JjL3NjcmlwdHMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL3dlYnBhY2stamVzdC10ZW1wbGF0ZS8uL3NyYy9zY3JpcHRzL2dhbWVkb20uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1qZXN0LXRlbXBsYXRlLy4vc3JjL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWplc3QtdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1qZXN0LXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stamVzdC10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLWplc3QtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stamVzdC10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stamVzdC10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stamVzdC10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VicGFjay1qZXN0LXRlbXBsYXRlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1qZXN0LXRlbXBsYXRlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWJwYWNrLWplc3QtdGVtcGxhdGUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciA4ZnIgLyA0ZnIgMWZyIDRmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuZGl2LnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbn1cXG5cXG5kaXYubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNsYXRlZ3JheTtcXG59XFxuXFxuI2hpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDEwNywgMTA3KTtcXG59XFxuXFxuLmNwdS1tZXNzYWdlLFxcbi5wbGF5ZXItbWVzc2FnZSxcXG4ucGxheWVyLWZvcm0sXFxuLmNwdS1hY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogNDIwcHg7XFxuICAgIGhlaWdodDogNTAlO1xcblxcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5jcHUtbWVzc2FnZSB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4uY3B1LWFjdGlvbiB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4ucGxheWVyLW1lc3NhZ2Uge1xcbiAgICBncmlkLWNvbHVtbjogMyAvIC0xO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbi5wbGF5ZXItZm9ybSB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZ3JpZC1jb2x1bW46IDMgLyAtMTtcXG59XFxuXFxuI3BsYXllci1ib2FyZCxcXG4jY3B1LWJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1yb3c6IDMgLyAtMTtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDEwLCAxZnIpIC8gcmVwZWF0KDEwLCAxZnIpO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDY1JTtcXG59XFxuXFxuI3BsYXllci1ib2FyZCB7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gLTE7XFxufVxcblxcbi5wbGF5ZXJTcSxcXG4uY3B1U3Ege1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbiNjcHUtYm9hcmQge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxufVxcblxcbi8qIENlbnRlciBDb250cm9scyAqL1xcblxcbiNyZXNldCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMyAvIC0xO1xcblxcbiAgICB3aWR0aDogNjAlO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG59XFxuXFxuLyogU2hpcCBmb3JtICovXFxuXFxuI3NoaXAtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEycHg7XFxuXFxuICAgIHdpZHRoOiA0MDBweDtcXG59XFxuXFxuI3NoaXAtbGVuZ3RoIHtcXG4gICAgd2lkdGg6IDNlbTtcXG59XFxuXFxuI3NoaXAtZGlyIHtcXG4gICAgd2lkdGg6IDVlbTtcXG59XFxuXFxuI3Zpc3VhbGl6ZS1zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG59XFxuXFxuI3Zpc3VhbGl6ZS1lcnJvciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDEwNywgMTA3KTtcXG59XFxuXFxuI3NoaXAtcmVtYWluaW5nIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix3Q0FBd0M7SUFDeEMsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1QsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7Ozs7SUFJSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osV0FBVzs7SUFFWCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdEQUFnRDtJQUNoRCxVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQSxvQkFBb0I7O0FBRXBCO0lBQ0ksZUFBZTs7SUFFZixrQkFBa0I7SUFDbEIsZ0JBQWdCOztJQUVoQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7O0FBRUEsY0FBYzs7QUFFZDtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsU0FBUzs7SUFFVCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksU0FBUztJQUNULGVBQWU7SUFDZixZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgOGZyIC8gNGZyIDFmciA0ZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcbmRpdi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG59XFxuXFxuZGl2Lm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWdyYXk7XFxufVxcblxcbiNoaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxMDcsIDEwNyk7XFxufVxcblxcbi5jcHUtbWVzc2FnZSxcXG4ucGxheWVyLW1lc3NhZ2UsXFxuLnBsYXllci1mb3JtLFxcbi5jcHUtYWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDQyMHB4O1xcbiAgICBoZWlnaHQ6IDUwJTtcXG5cXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uY3B1LW1lc3NhZ2Uge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuLmNwdS1hY3Rpb24ge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLnBsYXllci1tZXNzYWdlIHtcXG4gICAgZ3JpZC1jb2x1bW46IDMgLyAtMTtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4ucGxheWVyLWZvcm0ge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gLTE7XFxufVxcblxcbiNwbGF5ZXItYm9hcmQsXFxuI2NwdS1ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtcm93OiAzIC8gLTE7XFxuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMWZyKSAvIHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiA2NSU7XFxufVxcblxcbiNwbGF5ZXItYm9hcmQge1xcbiAgICBncmlkLWNvbHVtbjogMyAvIC0xO1xcbn1cXG5cXG4ucGxheWVyU3EsXFxuLmNwdVNxIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jY3B1LWJvYXJkIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbn1cXG5cXG4vKiBDZW50ZXIgQ29udHJvbHMgKi9cXG5cXG4jcmVzZXQge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDMgLyAtMTtcXG5cXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxufVxcblxcbi8qIFNoaXAgZm9ybSAqL1xcblxcbiNzaGlwLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMnB4O1xcblxcbiAgICB3aWR0aDogNDAwcHg7XFxufVxcblxcbiNzaGlwLWxlbmd0aCB7XFxuICAgIHdpZHRoOiAzZW07XFxufVxcblxcbiNzaGlwLWRpciB7XFxuICAgIHdpZHRoOiA1ZW07XFxufVxcblxcbiN2aXN1YWxpemUtc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxufVxcblxcbiN2aXN1YWxpemUtZXJyb3Ige1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxMDcsIDEwNyk7XFxufVxcblxcbiNzaGlwLXJlbWFpbmluZyB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vbWFpblwiXG5pbXBvcnQgeyBEb21NZXRob2RzLCBnYW1lYm9hcmRFdmVudHMsIG9ic2VydmVCb2FyZCwgcmVzZXRMaXN0ZW5lcnMgfSBmcm9tIFwiLi9nYW1lZG9tXCI7XG5pbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIlxuaW1wb3J0IHsgY2hlY2tQbGF5ZXJTaGlwcywgcGxheWVyQm9hcmQgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcbmV4cG9ydCBjb25zdCBjcHVCb2FyZCA9IG5ldyBHYW1lYm9hcmQoXCJjcHVcIiwgW10sIFwiUGxheWVyXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRE9NKCkge1xuICAgIGNvbnN0IGRvbSA9IG5ldyBEb21NZXRob2RzKCk7XG4gICAgZG9tLmNyZWF0ZURPTSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICAgIGNwdVNoaXBzKCk7XG4gICAgZ2FtZWJvYXJkRXZlbnRzKCk7XG4gICAgb2JzZXJ2ZUJvYXJkKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldENQVSgpIHtcbiAgICBjcHVCb2FyZC5oaXQgPSAwO1xuICAgIGNwdUJvYXJkLm1pc3MgPSAwO1xuICAgIGNwdUJvYXJkLnNoaXBzID0gW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcHVBdHRhY2soKSB7XG4gICAgaWYgKGNwdUJvYXJkLnNoaXBzLmV2ZXJ5KHNoaXAgPT4gc2hpcC5zdW5rID09IHRydWUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY3B1U3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjY3B1LWJvYXJkIGRpdlwiKTtcbiAgICByZXNldExpc3RlbmVycyhjcHVTcXVhcmVzKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLW1lc3NhZ2VcIikudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3B1LWFjdGlvblwiKS50ZXh0Q29udGVudCA9IFwiQ1BVIGlzIG1ha2luZyBhbiBhdHRhY2suLi5cIjtcbiAgICBzZXRUaW1lb3V0KGF0dGFjaywgMiAqIDEwMDApO1xufVxuXG5mdW5jdGlvbiBhdHRhY2soKSB7XG4gICAgY29uc3QgeCA9IHJhbmRvbU1pbk1heE51bSgxLCAxMCk7XG4gICAgY29uc3QgeSA9IHJhbmRvbU1pbk1heE51bSgxLCAxMCk7XG4gICAgbGV0IHJhbmRTcSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGF5ZXJTcVtkYXRhLXg9XCIke3h9XCJdW2RhdGEteT1cIiR7eX1cIl1gKTtcblxuICAgIGxldCBzcXVhcmUgPSByYW5kb21BdHRhY2socmFuZFNxKTtcblxuICAgIGlmIChjcHVCb2FyZC5wcmV2SGl0ID09IFwiXCIpIHtcbiAgICAgICAgc3F1YXJlID0gcmFuZG9tQXR0YWNrKHNxdWFyZSk7XG4gICAgfSBlbHNlIGlmIChjcHVCb2FyZC5wcmV2SGl0ID09IFwiaGl0XCIgfHwgY3B1Qm9hcmQucHJldkhpdCA9PSBcInJldHJ5XCIpIHtcblxuICAgICAgICBjb25zdCB4ID0gY3B1Qm9hcmQucHJldkF0ay5kYXRhc2V0Lng7XG4gICAgICAgIGNvbnN0IHkgPSBjcHVCb2FyZC5wcmV2QXRrLmRhdGFzZXQueTtcbiAgICAgICAgY29uc3QgbGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGF5ZXJTcVtkYXRhLXg9XCIke3h9XCJdW2RhdGEteT1cIiR7eSAtIDF9XCJdYCk7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYXllclNxW2RhdGEteD1cIiR7eH1cIl1bZGF0YS15PVwiJHsreSArIDF9XCJdYCk7XG4gICAgICAgIGNvbnN0IGFib3ZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYXllclNxW2RhdGEteD1cIiR7eCAtIDF9XCJdW2RhdGEteT1cIiR7eX1cIl1gKTtcbiAgICAgICAgY29uc3QgYmVsb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucGxheWVyU3FbZGF0YS14PVwiJHsreCArIDF9XCJdW2RhdGEteT1cIiR7eX1cIl1gKTtcbiAgICAgICAgY29uc3QgY2hvaWNlcyA9IFtsZWZ0LCByaWdodCwgYWJvdmUsIGJlbG93XTtcbiAgICAgICAgbGV0IHJhbmRDaG9pY2UgPSBjaG9pY2VzWzBdO1xuXG4gICAgICAgIHdoaWxlIChyYW5kQ2hvaWNlID09PSBudWxsIHx8IHJhbmRDaG9pY2UgPT09IHVuZGVmaW5lZCB8fCByYW5kQ2hvaWNlLmlkID09PSBcImhpdFwiIHx8IHJhbmRDaG9pY2UuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWlzc1wiKSkge1xuICAgICAgICAgICAgaWYgKGNob2ljZXMubGVuZ3RoIDw9IDAgfHwgY2hlY2tDaG9pY2VzKGNob2ljZXMpKSB7XG4gICAgICAgICAgICAgICAgY3B1Qm9hcmQucHJldkhpdCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgcmFuZENob2ljZSA9IHJhbmRvbUF0dGFjayhjcHVCb2FyZC5wcmV2QXRrKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2hvaWNlcy5zaGlmdCgpO1xuICAgICAgICAgICAgcmFuZENob2ljZSA9IGNob2ljZXNbMF1cbiAgICAgICAgfVxuXG4gICAgICAgIHNxdWFyZSA9IHJhbmRDaG9pY2U7XG4gICAgfVxuXG4gICAgaWYgKHNxdWFyZS5jbGFzc05hbWUuaW5jbHVkZXMoXCJzaGlwXCIpKSB7XG4gICAgICAgIHBsYXllckJvYXJkLnJlY2VpdmVBdHRhY2soc3F1YXJlKTtcbiAgICAgICAgY3B1Qm9hcmQucHJldkhpdCA9IFwiaGl0XCJcbiAgICAgICAgY3B1Qm9hcmQucHJldkF0ayA9IHNxdWFyZTtcbiAgICB9IGVsc2UgaWYgKGNwdUJvYXJkLnByZXZIaXQgPT0gXCJoaXRcIiB8fCBjcHVCb2FyZC5wcmV2SGl0ID09IFwicmV0cnlcIikge1xuICAgICAgICBwbGF5ZXJCb2FyZC5taXNzZWRBdHRhY2soc3F1YXJlKVxuICAgICAgICBjcHVCb2FyZC5wcmV2SGl0ID0gXCJyZXRyeVwiXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGxheWVyQm9hcmQubWlzc2VkQXR0YWNrKHNxdWFyZSlcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICAgICAgICBjcHVCb2FyZC5wcmV2SGl0ID0gXCJtaXNzXCJcbiAgICAgICAgY3B1Qm9hcmQucHJldkF0ayA9IHNxdWFyZTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNwdS1hY3Rpb25cIikudGV4dENvbnRlbnQgPSBcIllvdXIgdHVybiFcIjtcbiAgICBjaGVja1BsYXllclNoaXBzKCk7XG4gICAgZ2FtZWJvYXJkRXZlbnRzKCk7XG59XG5cbmZ1bmN0aW9uIHJhbmRvbUF0dGFjayhzcXVhcmUpIHtcbiAgICBsZXQgbmV3U3EgPSBzcXVhcmU7XG4gICAgd2hpbGUgKG5ld1NxLmNsYXNzTmFtZS5pbmNsdWRlcyhcIm1pc3NcIikgfHwgbmV3U3EuaWQgPT0gXCJoaXRcIikge1xuICAgICAgICBjb25zdCBuZXdYID0gcmFuZG9tTWluTWF4TnVtKDEsIDEwKTtcbiAgICAgICAgY29uc3QgbmV3WSA9IHJhbmRvbU1pbk1heE51bSgxLCAxMCk7XG4gICAgICAgIG5ld1NxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYXllclNxW2RhdGEteD1cIiR7bmV3WH1cIl1bZGF0YS15PVwiJHtuZXdZfVwiXWApXG4gICAgfVxuICAgIHJldHVybiBuZXdTcTtcbn1cblxuZnVuY3Rpb24gY2hlY2tDaG9pY2VzKGFycikge1xuICAgIHJldHVybiBhcnIuZXZlcnkoY2hvaWNlID0+IHtcbiAgICAgICAgY2hvaWNlID09PSBudWxsIHx8IGNob2ljZSA9PT0gdW5kZWZpbmVkIHx8IGNob2ljZS5pZCA9PT0gXCJoaXRcIiB8fCBjaG9pY2UuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWlzc1wiKVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGNwdVNoaXBzKCkge1xuICAgIHdoaWxlKGNwdUJvYXJkLnNoaXBzLmxlbmd0aCA8IDQpIHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpICsgMik7XG4gICAgICAgIGNvbnN0IGRpciA9IHJhbmRvbURpcigpO1xuICAgICAgICBjb25zdCBjb29yZCA9IHJhbmRvbUNvb3JkKGRpciwgc2hpcCk7XG4gICAgICAgIGNvbnN0IHNoaXBDb29yZHMgPSBnZXRTaGlwQ29vcmRzKGNvb3JkLCBkaXIsIHNoaXApO1xuXG4gICAgICAgIGlmIChtYXRjaGluZ0Nvb3JkKHNoaXBDb29yZHMpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNwdUJvYXJkLnBsYWNlU2hpcChjb29yZCwgZGlyLCBzaGlwKTtcbiAgICAgICAgICAgIGNwdUJvYXJkLnNoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1hdGNoaW5nQ29vcmQoY29vcmRBcnIpIHtcbiAgICBmb3IgKGxldCBwbGFjZWRTaGlwIG9mIGNwdUJvYXJkLnNoaXBzKSB7XG4gICAgICAgIGlmIChwbGFjZWRTaGlwLmNvcmRzLnNvbWUoY29vcmQgPT4gY29vcmRBcnIuc29tZShzaGlwQ29yZCA9PiBzaGlwQ29yZFswXSA9PSBjb29yZFswXSAmJiBzaGlwQ29yZFsxXSA9PSBjb29yZFsxXSkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0U2hpcENvb3Jkcyhjb3JkLCBkaXIsIHNoaXApIHtcbiAgICBsZXQgY29vcmRBcnIgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBzd2l0Y2goZGlyKSB7XG4gICAgICAgICAgICBjYXNlICd1cCc6IFxuICAgICAgICAgICAgICAgICAgICBjb29yZEFyci5wdXNoKFtjb3JkWzBdIC0gaSwgY29yZFsxXV0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgICAgICAgICBjb29yZEFyci5wdXNoKFtjb3JkWzBdLCBjb3JkWzFdIC0gaV0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgICAgICAgICAgY29vcmRBcnIucHVzaChbY29yZFswXSwgY29yZFsxXSArIGldKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkb3duJzpcbiAgICAgICAgICAgICAgICAgICAgY29vcmRBcnIucHVzaChbY29yZFswXSArIGksIGNvcmRbMV1dKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29vcmRBcnI7XG59XG5cbmZ1bmN0aW9uIHJhbmRvbU1pbk1heE51bShtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21Db29yZChkaXIsIHNoaXApIHtcbiAgICBsZXQgcmFuZFVwTGVmdCA9IHJhbmRvbU1pbk1heE51bShzaGlwLmxlbmd0aCwgMTApO1xuICAgIGxldCByYW5kRG93blJpZ2h0ID0gcmFuZG9tTWluTWF4TnVtKDEsICgxMCAtIHNoaXAubGVuZ3RoKSk7XG4gICAgbGV0IHJhbmRBbnkgPSByYW5kb21NaW5NYXhOdW0oMSwgMTApO1xuICAgIGxldCBjb29yZHM7XG5cbiAgICBzd2l0Y2goZGlyKSB7XG4gICAgICAgIGNhc2UgXCJ1cFwiOiBcbiAgICAgICAgICAgIGNvb3JkcyA9IFtyYW5kVXBMZWZ0LCByYW5kQW55XVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgICAgICBjb29yZHMgPSBbcmFuZEFueSwgcmFuZFVwTGVmdF1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZG93blwiOlxuICAgICAgICAgICAgY29vcmRzID0gW3JhbmREb3duUmlnaHQsIHJhbmRBbnldXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgICAgICBjb29yZHMgPSBbcmFuZEFueSwgcmFuZERvd25SaWdodF1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBjb29yZHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21EaXIoKSB7XG4gICAgY29uc3QgZGlyZWN0aW9ucyA9IFtcInVwXCIsIFwibGVmdFwiLCBcInJpZ2h0XCIsIFwiZG93blwiXTtcbiAgICBjb25zdCByYW5kb21OdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KTtcblxuICAgIHJldHVybiBkaXJlY3Rpb25zW3JhbmRvbU51bV07XG59IiwiZXhwb3J0IGNsYXNzIEdhbWVib2FyZCB7XG4gICAgY29uc3RydWN0b3IoaWQsIHNoaXBzLCBvcHBvbmVudCkge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuc2hpcHMgPSBzaGlwcztcbiAgICAgICAgdGhpcy5vcHBvbmVudCA9IG9wcG9uZW50O1xuICAgICAgICB0aGlzLmJvYXJkID0gY3JlYXRlQm9hcmQoKTtcbiAgICAgICAgdGhpcy5taXNzID0gMDtcbiAgICAgICAgdGhpcy5oaXQgPSAwO1xuICAgICAgICB0aGlzLnByZXZIaXQgPSBcIlwiO1xuICAgICAgICB0aGlzLnByZXZBdGsgPSBcIlwiO1xuICAgIH1cblxuICAgIHBsYWNlU2hpcChjb3JkLCBkaXIsIHNoaXApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc3F1YXJlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzd2l0Y2goZGlyKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAndXAnOiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuaWR9U3FbZGF0YS14PVwiJHtjb3JkWzBdIC0gaX1cIl1bZGF0YS15PVwiJHtjb3JkWzFdfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcC5jb3Jkcy5wdXNoKFtjb3JkWzBdIC0gaSwgY29yZFsxXV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLmlkfVNxW2RhdGEteD1cIiR7Y29yZFswXX1cIl1bZGF0YS15PVwiJHtjb3JkWzFdIC0gaX1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXAuY29yZHMucHVzaChbY29yZFswXSwgY29yZFsxXSAtIGldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuaWR9U3FbZGF0YS14PVwiJHtjb3JkWzBdfVwiXVtkYXRhLXk9XCIke2NvcmRbMV0gKyBpfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcC5jb3Jkcy5wdXNoKFtjb3JkWzBdLCBjb3JkWzFdICsgaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnZG93bic6XG4gICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLmlkfVNxW2RhdGEteD1cIiR7Y29yZFswXSArIGl9XCJdW2RhdGEteT1cIiR7Y29yZFsxXX1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXAuY29yZHMucHVzaChbY29yZFswXSArIGksIGNvcmRbMV1dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayhzcXVhcmUpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuaWR9LW1lc3NhZ2VgKVxuICAgICAgICBcbiAgICAgICAgaWYgKCF0aGlzLnNoaXBzLmV2ZXJ5KHNoaXAgPT4gc2hpcC5zdW5rID09IHRydWUpKSB7XG4gICAgICAgICAgICB0aGlzLnNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICAgICAgc2hpcC5jb3Jkcy5zb21lKGNvcmQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihjb3JkWzBdID09IHNxdWFyZS5kYXRhc2V0LnggJiYgY29yZFsxXSA9PSBzcXVhcmUuZGF0YXNldC55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwLmhpdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmUuaWQgPSBcImhpdFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcC5zdW5rID09IGZhbHNlID8gdGhpcy5oaXQrKyA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmlubmVyVGV4dCA9PSBgJHt0aGlzLm9wcG9uZW50fSBoaXQhYCA/IG51bGwgOiBtZXNzYWdlLmlubmVyVGV4dCA9IGAke3RoaXMub3Bwb25lbnR9IGhpdCFgLCAyMDAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zaGlwcy5ldmVyeShzaGlwID0+IHNoaXAuc3VuayA9PSB0cnVlKSkge1xuICAgICAgICAgICAgdGhpcy5hbGxTdW5rKG1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBtaXNzZWRBdHRhY2soc3F1YXJlKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLmlkfS1tZXNzYWdlYClcbiAgICAgICAgbWVzc2FnZS5pbm5lclRleHQgPT0gYCR7dGhpcy5vcHBvbmVudH0gbWlzc2VkIWAgPyBudWxsIDogbWVzc2FnZS5pbm5lclRleHQgPSBgJHt0aGlzLm9wcG9uZW50fSBtaXNzZWQhYCwgMjAwMFxuXG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKVxuICAgICAgICB0aGlzLm1pc3MrKztcbiAgICB9XG5cbiAgICBhbGxTdW5rKG1zZykge1xuICAgICAgICBtc2cuaW5uZXJUZXh0ID0gYEFsbCBvZiAke3RoaXMuaWR9J3Mgc2hpcHMgaGF2ZSBiZWVuIHN1bmshYDtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCb2FyZCgpIHtcbiAgICBsZXQgYm9hcmRBcnIgPSBbXTtcblxuICAgIGxldCB4ID0gMTtcbiAgICBsZXQgeSA9IDE7XG5cbiAgICB3aGlsZSh5IDw9IDEwICYmIHggPD0gMTApIHtcbiAgICAgICAgaWYoeCA9PSAxMCAmJiB5ID09IDEwKSB7XG4gICAgICAgICAgICBib2FyZEFyci5wdXNoKGAke3h9LSR7eX1gKVxuICAgICAgICAgICAgcmV0dXJuIGJvYXJkQXJyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHkgPT0gMTApIHtcbiAgICAgICAgICAgIGJvYXJkQXJyLnB1c2goYCR7eH0tJHt5fWApXG4gICAgICAgICAgICB4KytcbiAgICAgICAgICAgIHkgPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgYm9hcmRBcnIucHVzaChgJHt4fS0ke3l9YCk7XG4gICAgICAgIHkrK1xuICAgIH1cbn0iLCIvLyBpbXBvcnQgXCIuLi9zdHlsZXMvbWFpbi5jc3NcIjtcbmltcG9ydCB7Y3JlYXRlQm9hcmR9IGZyb20gXCIuL2dhbWVib2FyZFwiXG5pbXBvcnQge2NwdUJvYXJkLCByZXNldENQVSwgY3B1QXR0YWNrfSBmcm9tIFwiLi9nYW1lXCI7XG5pbXBvcnQge3BsYXllckJvYXJkRXZlbnQsIHJlc2V0UGxheWVyfSBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG5leHBvcnQgY2xhc3MgRG9tTWV0aG9kcyB7XG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgZ2FtZUNvbnRhaW5lcnMoKSB7XG4gICAgICAgIGNvbnN0IHBsYXllckJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGNwdUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgICAgcGxheWVyQm94LmlkID0gXCJwbGF5ZXItYm9hcmRcIjtcbiAgICAgICAgY3B1Qm94LmlkID0gXCJjcHUtYm9hcmRcIjtcblxuICAgICAgICBib2R5LmFwcGVuZChwbGF5ZXJCb3gsIGNwdUJveClcbiAgICB9XG5cbiAgICBnYW1lYm9hcmRTcXVhcmVzKCkge1xuICAgICAgICBsZXQgbmV3Qm9hcmQgPSBjcmVhdGVCb2FyZCgpO1xuICAgICAgICBjb25zdCBwbGF5ZXJCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllci1ib2FyZFwiKTtcbiAgICAgICAgY29uc3QgY3B1Qm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcHUtYm9hcmRcIik7XG5cbiAgICAgICAgbmV3Qm9hcmQuZm9yRWFjaChjb3JkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBsYXllclNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb25zdCBjcHVTcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgY29uc3Qgc3BsaXRDb3JkcyA9IGNvcmQuc3BsaXQoXCItXCIpO1xuXG4gICAgICAgICAgICBwbGF5ZXJTcXVhcmUuc2V0QXR0cmlidXRlKFwiZGF0YS14XCIsIHNwbGl0Q29yZHNbMF0pO1xuICAgICAgICAgICAgcGxheWVyU3F1YXJlLnNldEF0dHJpYnV0ZShcImRhdGEteVwiLCBzcGxpdENvcmRzWzFdKTtcbiAgICAgICAgICAgIGNwdVNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIiwgc3BsaXRDb3Jkc1swXSk7XG4gICAgICAgICAgICBjcHVTcXVhcmUuc2V0QXR0cmlidXRlKFwiZGF0YS15XCIsIHNwbGl0Q29yZHNbMV0pO1xuICAgICAgICAgICAgcGxheWVyU3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXJTcVwiKTtcbiAgICAgICAgICAgIGNwdVNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiY3B1U3FcIik7XG5cbiAgICAgICAgICAgIHBsYXllckJveC5hcHBlbmRDaGlsZChwbGF5ZXJTcXVhcmUpO1xuICAgICAgICAgICAgY3B1Qm94LmFwcGVuZENoaWxkKGNwdVNxdWFyZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJvYXJkTWVzc2FnZXMoKSB7XG4gICAgICAgIGNvbnN0IGNwdU1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBjcHVBY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBwbHlyTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNwdUFjdGlvbi5jbGFzc0xpc3QuYWRkKFwiY3B1LWFjdGlvblwiKTtcbiAgICAgICAgY3B1TWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwiY3B1LW1lc3NhZ2VcIilcbiAgICAgICAgcGx5ck1lc3NhZ2UuY2xhc3NMaXN0LmFkZChcInBsYXllci1tZXNzYWdlXCIpXG4gICAgICAgIGJvZHkuYXBwZW5kKGNwdU1lc3NhZ2UsIHBseXJNZXNzYWdlLCBjcHVBY3Rpb24pO1xuICAgIH1cblxuICAgIHJlc2V0QnV0dG9uKCkge1xuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBidG4udGV4dENvbnRlbnQgPSBcIlJlc2V0XCJcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicmVzZXRcIik7XG5cbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0RE9NKClcbiAgICAgICAgICAgIHJlc2V0Q1BVKClcbiAgICAgICAgICAgIHJlc2V0UGxheWVyKClcbiAgICAgICAgfSlcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChidG4pXG4gICAgfVxuXG4gICAgYWRkU2hpcEZvcm0oKSB7XG4gICAgICAgIGNvbnN0IGFkZEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblxuICAgICAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicGxheWVyLWZvcm1cIilcblxuICAgICAgICBjb25zdCBsZW5ndGhMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgY29uc3QgZGlyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cbiAgICAgICAgbGVuZ3RoTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwic2hpcC1sZW5ndGhcIik7XG4gICAgICAgIGRpckxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInNoaXAtZGlyXCIpO1xuXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgICAgIGNvbnN0IGxlbmd0aE9wdGlvbnMgPSBbMiwgMywgNF07XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgICAgIGNvbnN0IGRpck9wdGlvbnMgPSBbXCJ1cFwiLCBcInJpZ2h0XCIsIFwibGVmdFwiLCBcImRvd25cIl07XG4gICAgICAgIFxuICAgICAgICBhZGRGb3JtLmlkID0gXCJzaGlwLWZvcm1cIjtcbiAgICAgICAgbGVuZ3RoLmlkID0gXCJzaGlwLWxlbmd0aFwiO1xuICAgICAgICBkaXJlY3Rpb24uaWQgPSBcInNoaXAtZGlyXCI7XG5cbiAgICAgICAgdGhpcy5kcm9wZG93bk9wdGlvbnMobGVuZ3RoT3B0aW9ucywgbGVuZ3RoKTtcbiAgICAgICAgdGhpcy5kcm9wZG93bk9wdGlvbnMoZGlyT3B0aW9ucywgZGlyZWN0aW9uKTtcblxuICAgICAgICBjb25zdCBhZGRTaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYWRkU2hpcC5pZCA9IFwiYWRkLXNoaXBcIlxuICAgICAgICBhZGRTaGlwLnRleHRDb250ZW50ID0gXCJBZGQgU2hpcFwiO1xuXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcilcbiAgICAgICAgYWRkRm9ybS5hcHBlbmQobGVuZ3RoTGFiZWwsIGxlbmd0aCwgZGlyTGFiZWwsIGRpcmVjdGlvbiwgYWRkU2hpcCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLWZvcm1cIikuYXBwZW5kQ2hpbGQoYWRkRm9ybSk7XG4gICAgfVxuXG4gICAgYWRkU2hpcEJ0bkV2ZW50KCkge1xuICAgICAgICBjb25zdCBhZGRTaGlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtc2hpcFwiKTtcbiAgICAgICAgXG4gICAgICAgIGFkZFNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXAtZGlyXCIpO1xuICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwLWxlbmd0aFwiKTtcblxuICAgICAgICAgICAgcGxheWVyQm9hcmRFdmVudChkaXJlY3Rpb24udmFsdWUsIE51bWJlcihsZW5ndGgudmFsdWUpIC0gMSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVtYWluaW5nU2hpcHMoKSB7XG4gICAgICAgIGNvbnN0IGluZGljYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBpbmRpY2F0b3IudGV4dENvbnRlbnQgPSBcIlNoaXBzIGxlZnQ6IDRcIjtcbiAgICAgICAgaW5kaWNhdG9yLmlkID0gXCJzaGlwLXJlbWFpbmluZ1wiO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1mb3JtXCIpLmFwcGVuZENoaWxkKGluZGljYXRvcilcbiAgICB9XG5cbiAgICBkcm9wZG93bk9wdGlvbnMob3B0aW9ucywgZWxlbWVudCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgYCR7b3B0aW9uc1tpXX1gKTtcbiAgICAgICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBgJHtvcHRpb25zW2ldfWA7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc2V0RE9NKCkge1xuICAgICAgICBjb25zdCBjcHVTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jcHVTcVwiKTtcbiAgICAgICAgY29uc3QgcGxheWVyU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheWVyU3FcIik7XG4gICAgICAgIGNvbnN0IGJvYXJkcyA9IFtjcHVTcXVhcmVzLCBwbGF5ZXJTcXVhcmVzXTtcbiAgICAgICAgY29uc3QgY3B1TWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3B1LW1lc3NhZ2VcIik7XG5cbiAgICAgICAgY3B1TWVzc2FnZS50ZXh0Q29udGVudCA9IFwiXCJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgICAgIGJvYXJkc1tpXS5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5jb250YWlucyhcIm1pc3NcIikgPyBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZShcIm1pc3NcIikgOiBzcXVhcmUuaWQgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGlwXCIpID8gc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwXCIpIDogbnVsbDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlRE9NID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmdhbWVDb250YWluZXJzKCk7XG4gICAgICAgIHRoaXMuZ2FtZWJvYXJkU3F1YXJlcygpO1xuICAgICAgICB0aGlzLmJvYXJkTWVzc2FnZXMoKTtcbiAgICAgICAgdGhpcy5yZXNldEJ1dHRvbigpO1xuICAgICAgICB0aGlzLmFkZFNoaXBGb3JtKCk7XG4gICAgICAgIHRoaXMuYWRkU2hpcEJ0bkV2ZW50KCk7XG4gICAgICAgIHRoaXMucmVtYWluaW5nU2hpcHMoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldExpc3RlbmVycyhjcHUpIHtcbiAgICBpZiAoY3B1KSB7XG4gICAgICAgIGNwdS5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjbG9uZSA9IHNxdWFyZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICBzcXVhcmUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoY2xvbmUsIHNxdWFyZSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcGxheWVyLWJvYXJkIGRpdlwiKTtcbiAgICBwQm9hcmQuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICBjb25zdCBjbG9uZSA9IHNxdWFyZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIHNxdWFyZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChjbG9uZSwgc3F1YXJlKVxuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZlQm9hcmQoKSB7XG4gICAgY29uc3QgY3B1Qm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNwdS1ib2FyZFwiKVxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAgIHN1YnRyZWU6IHRydWUsXG4gICAgfVxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spO1xuXG4gICAgZnVuY3Rpb24gY2FsbGJhY2sobXV0YXRpb25MaXN0LCBvYnNlcnZlcikge1xuICAgICAgICBtdXRhdGlvbkxpc3QuZm9yRWFjaChtdXRhdGlvbiA9PiB7XG4gICAgICAgICAgICBpZiAobXV0YXRpb24udGFyZ2V0LmlkID09IFwiaGl0XCIgfHwgbXV0YXRpb24udGFyZ2V0LmNsYXNzTmFtZS5pbmNsdWRlcyhcIm1pc3NcIikpIHtcbiAgICAgICAgICAgICAgICBjcHVBdHRhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBvYnNlcnZlci5vYnNlcnZlKGNwdUJvYXJkLCBvcHRpb25zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdhbWVib2FyZEV2ZW50cygpIHtcbiAgICBjb25zdCBjcHVTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jcHVTcVwiKTtcbiAgICBnYW1lYm9hcmRFdmVudExvZ2ljKGNwdVNxdWFyZXMsIGNwdUJvYXJkKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2FtZWJvYXJkRXZlbnRMb2dpYyhib2FyZFNxdWFyZXMsIGJvYXJkKSB7XG4gICAgYm9hcmRTcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIGlmIChib2FyZC5zaGlwcy5ldmVyeShzaGlwID0+IHNoaXAuc3VuayA9PSB0cnVlKSkge1xuICAgICAgICAgICAgICAgIHJlc2V0TGlzdGVuZXJzKGJvYXJkU3F1YXJlcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3F1YXJlLmNsYXNzTGlzdC5jb250YWlucyhcInNoaXBcIikgJiYgIShzcXVhcmUuaWQgPT09IFwiaGl0XCIpKSB7XG4gICAgICAgICAgICAgICAgYm9hcmQucmVjZWl2ZUF0dGFjayhzcXVhcmUpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFzcXVhcmUuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWlzc1wiKSAmJiAhKHNxdWFyZS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGlwXCIpKSkge1xuICAgICAgICAgICAgICAgIGJvYXJkLm1pc3NlZEF0dGFjayhzcXVhcmUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pXG4gICAgfSlcbn0iLCJpbXBvcnQgXCIuLi9zdHlsZXMvbWFpbi5jc3NcIjtcbmltcG9ydCB7IGNyZWF0ZURPTSB9IGZyb20gXCIuL2dhbWVcIjtcblxuZXhwb3J0IGNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy5kYW1hZ2UgPSAwO1xuICAgICAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb3JkcyA9IFtdO1xuICAgIH1cbiAgICBcbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMuZGFtYWdlID09IHRoaXMubGVuZ3RoIC0gMSA/IHRoaXMuaXNTdW5rKCkgOiB0aGlzLmRhbWFnZSsrO1xuICAgICAgICByZXR1cm4gdGhpcy5kYW1hZ2U7XG4gICAgfVxuICAgIFxuICAgIGlzU3VuaygpIHtcbiAgICAgICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kYW1hZ2UrKztcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VuaztcbiAgICB9XG59O1xuXG5jcmVhdGVET00oKTsiLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9tYWluXCI7XG5pbXBvcnQgeyBzdGFydEdhbWUgfSBmcm9tIFwiLi9nYW1lXCI7XG5pbXBvcnQgeyByZXNldExpc3RlbmVycyB9IGZyb20gXCIuL2dhbWVkb21cIjtcblxuZXhwb3J0IGxldCBwbGF5ZXJCb2FyZCA9IG5ldyBHYW1lYm9hcmQoXCJwbGF5ZXJcIiwgW10sIFwiQ1BVXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gcGxheWVyQm9hcmRFdmVudChkaXIsIGxlbmd0aCkge1xuICAgIHJlc2V0TGlzdGVuZXJzKCk7XG4gICAgY29uc3QgcEJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNwbGF5ZXItYm9hcmQgZGl2XCIpO1xuXG4gICAgcEJvYXJkLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZW50ZXJcIiwgKCkgPT4ge1xuICAgICAgICAgICAgc2hpcFZpc3VhbEZYKHNxdWFyZSwgZGlyLCBsZW5ndGgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2aXN1YWxTaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiN2aXN1YWxpemUtc2hpcFwiKTtcbiAgICAgICAgICAgIGNvbnN0IHZpc3VhbEVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiN2aXN1YWxpemUtZXJyb3JcIik7XG5cbiAgICAgICAgICAgIGlmICh2aXN1YWxFcnJvci5sZW5ndGggPj0gMSkge1xuICAgICAgICAgICAgICAgIHZpc3VhbEVycm9yLmZvckVhY2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXJyLmlkID0gXCJcIjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2aXN1YWxTaGlwLmZvckVhY2goc3EgPT4ge1xuICAgICAgICAgICAgICAgIHNxLmlkID0gXCJcIjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZpc3VhbEVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiN2aXN1YWxpemUtZXJyb3JcIik7XG4gICAgICAgICAgICBjb25zdCBjb29yZCA9IFtOdW1iZXIoc3F1YXJlLmRhdGFzZXQueCksIE51bWJlcihzcXVhcmUuZGF0YXNldC55KV07XG4gICAgICAgICAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAobGVuZ3RoICsgMSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICh2aXN1YWxFcnJvclswXSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcChjb29yZCwgZGlyLCBzaGlwKTtcbiAgICAgICAgICAgIHBsYXllckJvYXJkLnNoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNoZWNrU3RhcnRHYW1lKCk7XG4gICAgICAgIH0pO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGNoZWNrU3RhcnRHYW1lKCkge1xuICAgIGNvbnN0IHJlbWFpbmluZ0luZGljYXRvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcC1yZW1haW5pbmdcIik7XG4gICAgY29uc3QgcmVtYWluaW5nID0gNCAtIHBsYXllckJvYXJkLnNoaXBzLmxlbmd0aDtcblxuICAgIGlmIChyZW1haW5pbmcgIT0gMCkge1xuICAgICAgICByZW1haW5pbmdJbmRpY2F0b3IudGV4dENvbnRlbnQgPSBgU2hpcHMgbGVmdDogJHtyZW1haW5pbmd9YFxuICAgICAgICByZXNldExpc3RlbmVycygpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXNoaXBcIikuZGlzYWJsZWQgPSB0cnVlO1xuICAgIHJlbWFpbmluZ0luZGljYXRvci50ZXh0Q29udGVudCA9IGBTaGlwcyBmbG9hdGluZzogNGBcbiAgICByZXNldExpc3RlbmVycygpO1xuICAgIHN0YXJ0R2FtZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tQbGF5ZXJTaGlwcygpIHtcbiAgICByZW1vdmVTdW5rZW4oKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3Vua2VuKCkge1xuICAgIHBsYXllckJvYXJkLnNoaXBzLmZpbmQoc2hpcCA9PiB7XG4gICAgICAgIGlmIChzaGlwLnN1bmsgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwbGF5ZXJCb2FyZC5zaGlwcy5pbmRleE9mKHNoaXApO1xuICAgICAgICAgICAgcGxheWVyQm9hcmQuc2hpcHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRQbGF5ZXIoKSB7XG4gICAgY29uc3QgY3B1Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2NwdS1ib2FyZCBkaXZcIik7XG4gICAgcGxheWVyQm9hcmQuaGl0ID0gMDtcbiAgICBwbGF5ZXJCb2FyZC5taXNzID0gMDtcbiAgICBwbGF5ZXJCb2FyZC5zaGlwcyA9IFtdO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXNoaXBcIikuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXAtcmVtYWluaW5nXCIpLnRleHRDb250ZW50ID0gXCJTaGlwcyBsZWZ0OiA0XCI7XG4gICAgcmVzZXRMaXN0ZW5lcnMoY3B1Qm9hcmQpO1xufVxuXG5mdW5jdGlvbiBzaGlwVmlzdWFsRlgoc3F1YXJlLCBkaXIsIGxlbmd0aCkge1xuICAgIGNvbnN0IHNoaXBBcnIgPSBbc3F1YXJlXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5leHRTcTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBzd2l0Y2goZGlyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ1cFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFNxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYXllclNxW2RhdGEteD1cIiR7TnVtYmVyKHNxdWFyZS5kYXRhc2V0LngpIC0gaX1cIl1bZGF0YS15PVwiJHtzcXVhcmUuZGF0YXNldC55fVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcEFyci5wdXNoKG5leHRTcSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwRlhTdHlsZXMoc2hpcEFycik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0U3EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucGxheWVyU3FbZGF0YS14PVwiJHtzcXVhcmUuZGF0YXNldC54fVwiXVtkYXRhLXk9XCIke051bWJlcihzcXVhcmUuZGF0YXNldC55KSArIGl9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwQXJyLnB1c2gobmV4dFNxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBGWFN0eWxlcyhzaGlwQXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFNxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYXllclNxW2RhdGEteD1cIiR7c3F1YXJlLmRhdGFzZXQueH1cIl1bZGF0YS15PVwiJHtOdW1iZXIoc3F1YXJlLmRhdGFzZXQueSkgLSBpfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcEFyci5wdXNoKG5leHRTcSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwRlhTdHlsZXMoc2hpcEFycik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImRvd25cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRTcSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGF5ZXJTcVtkYXRhLXg9XCIke051bWJlcihzcXVhcmUuZGF0YXNldC54KSArIGl9XCJdW2RhdGEteT1cIiR7c3F1YXJlLmRhdGFzZXQueX1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBBcnIucHVzaChuZXh0U3EpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcEZYU3R5bGVzKHNoaXBBcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxufVxuXG5mdW5jdGlvbiBzaGlwRlhTdHlsZXMoc2hpcEFycikge1xuICAgICAgICBpZiAoc2hpcEFyci5ldmVyeShpdGVtID0+IGl0ZW0gIT09IG51bGwpKSB7XG5cbiAgICAgICAgICAgIGlmIChzaGlwQXJyLnNvbWUoaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5jb250YWlucyhcInNoaXBcIikpKSB7XG4gICAgICAgICAgICAgICAgc2hpcEFyci5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmlkID0gXCJ2aXN1YWxpemUtZXJyb3JcIjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2hpcEFyci5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uaWQgPSBcInZpc3VhbGl6ZS1zaGlwXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNoaXBBcnIuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmlkID0gXCJ2aXN1YWxpemUtZXJyb3JcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0cy9tYWluLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9