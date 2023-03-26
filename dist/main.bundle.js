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
    // Write function to end the game when all ships have been sunk in playerBoard.ships
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtBQUN4STtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RSw2QkFBNkIsYUFBYSxpQkFBaUI7QUFDeEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7Ozs7OztVQzlJQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stamVzdC10ZW1wbGF0ZS8uL3NyYy9zdHlsZXMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1qZXN0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWplc3QtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWplc3QtdGVtcGxhdGUvLi9zcmMvc3R5bGVzL21haW4uY3NzP2U4MGEiLCJ3ZWJwYWNrOi8vd2VicGFjay1qZXN0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stamVzdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1qZXN0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stamVzdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWplc3QtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWplc3QtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWplc3QtdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovL3dlYnBhY2stamVzdC10ZW1wbGF0ZS8uL3NyYy9zY3JpcHRzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWplc3QtdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy9nYW1lZG9tLmpzIiwid2VicGFjazovL3dlYnBhY2stamVzdC10ZW1wbGF0ZS8uL3NyYy9zY3JpcHRzL21haW4uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1qZXN0LXRlbXBsYXRlLy4vc3JjL3NjcmlwdHMvcGxheWVyLmpzIiwid2VicGFjazovL3dlYnBhY2stamVzdC10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWplc3QtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay1qZXN0LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWplc3QtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWplc3QtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWplc3QtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnBhY2stamVzdC10ZW1wbGF0ZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2stamVzdC10ZW1wbGF0ZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1qZXN0LXRlbXBsYXRlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgOGZyIC8gNGZyIDFmciA0ZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcbmRpdi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG59XFxuXFxuZGl2Lm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWdyYXk7XFxufVxcblxcbiNoaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxMDcsIDEwNyk7XFxufVxcblxcbi5jcHUtbWVzc2FnZSxcXG4ucGxheWVyLW1lc3NhZ2UsXFxuLnBsYXllci1mb3JtLFxcbi5jcHUtYWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDQyMHB4O1xcbiAgICBoZWlnaHQ6IDUwJTtcXG5cXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uY3B1LW1lc3NhZ2Uge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuLmNwdS1hY3Rpb24ge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLnBsYXllci1tZXNzYWdlIHtcXG4gICAgZ3JpZC1jb2x1bW46IDMgLyAtMTtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4ucGxheWVyLWZvcm0ge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gLTE7XFxufVxcblxcbiNwbGF5ZXItYm9hcmQsXFxuI2NwdS1ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtcm93OiAzIC8gLTE7XFxuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMWZyKSAvIHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiA2NSU7XFxufVxcblxcbiNwbGF5ZXItYm9hcmQge1xcbiAgICBncmlkLWNvbHVtbjogMyAvIC0xO1xcbn1cXG5cXG4ucGxheWVyU3EsXFxuLmNwdVNxIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jY3B1LWJvYXJkIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbn1cXG5cXG4vKiBDZW50ZXIgQ29udHJvbHMgKi9cXG5cXG4jcmVzZXQge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDMgLyAtMTtcXG5cXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxufVxcblxcbi8qIFNoaXAgZm9ybSAqL1xcblxcbiNzaGlwLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMnB4O1xcblxcbiAgICB3aWR0aDogNDAwcHg7XFxufVxcblxcbiNzaGlwLWxlbmd0aCB7XFxuICAgIHdpZHRoOiAzZW07XFxufVxcblxcbiNzaGlwLWRpciB7XFxuICAgIHdpZHRoOiA1ZW07XFxufVxcblxcbiN2aXN1YWxpemUtc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxufVxcblxcbiN2aXN1YWxpemUtZXJyb3Ige1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxMDcsIDEwNyk7XFxufVxcblxcbiNzaGlwLXJlbWFpbmluZyB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isd0NBQXdDO0lBQ3hDLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsU0FBUztJQUNULGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBOzs7O0lBSUksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFdBQVc7O0lBRVgsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnREFBZ0Q7SUFDaEQsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUEsb0JBQW9COztBQUVwQjtJQUNJLGVBQWU7O0lBRWYsa0JBQWtCO0lBQ2xCLGdCQUFnQjs7SUFFaEIsVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCOztBQUVBLGNBQWM7O0FBRWQ7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7O0lBRVQsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxlQUFlO0lBQ2YsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgMWZyIDhmciAvIDRmciAxZnIgNGZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG5kaXYuc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxufVxcblxcbmRpdi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVncmF5O1xcbn1cXG5cXG4jaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTA3LCAxMDcpO1xcbn1cXG5cXG4uY3B1LW1lc3NhZ2UsXFxuLnBsYXllci1tZXNzYWdlLFxcbi5wbGF5ZXItZm9ybSxcXG4uY3B1LWFjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiA0MjBweDtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmNwdS1tZXNzYWdlIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbi5jcHUtYWN0aW9uIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi5wbGF5ZXItbWVzc2FnZSB7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gLTE7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuLnBsYXllci1mb3JtIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBncmlkLWNvbHVtbjogMyAvIC0xO1xcbn1cXG5cXG4jcGxheWVyLWJvYXJkLFxcbiNjcHUtYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXJvdzogMyAvIC0xO1xcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMTAsIDFmcikgLyByZXBlYXQoMTAsIDFmcik7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogNjUlO1xcbn1cXG5cXG4jcGxheWVyLWJvYXJkIHtcXG4gICAgZ3JpZC1jb2x1bW46IDMgLyAtMTtcXG59XFxuXFxuLnBsYXllclNxLFxcbi5jcHVTcSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI2NwdS1ib2FyZCB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG59XFxuXFxuLyogQ2VudGVyIENvbnRyb2xzICovXFxuXFxuI3Jlc2V0IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAzIC8gLTE7XFxuXFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbn1cXG5cXG4vKiBTaGlwIGZvcm0gKi9cXG5cXG4jc2hpcC1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTJweDtcXG5cXG4gICAgd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4jc2hpcC1sZW5ndGgge1xcbiAgICB3aWR0aDogM2VtO1xcbn1cXG5cXG4jc2hpcC1kaXIge1xcbiAgICB3aWR0aDogNWVtO1xcbn1cXG5cXG4jdmlzdWFsaXplLXNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbn1cXG5cXG4jdmlzdWFsaXplLWVycm9yIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTA3LCAxMDcpO1xcbn1cXG5cXG4jc2hpcC1yZW1haW5pbmcge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL21haW5cIlxuaW1wb3J0IHsgRG9tTWV0aG9kcywgZ2FtZWJvYXJkRXZlbnRzLCBvYnNlcnZlQm9hcmQsIHJlc2V0TGlzdGVuZXJzIH0gZnJvbSBcIi4vZ2FtZWRvbVwiO1xuaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCJcbmltcG9ydCB7IGNoZWNrUGxheWVyU2hpcHMsIHBsYXllckJvYXJkIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5leHBvcnQgY29uc3QgY3B1Qm9hcmQgPSBuZXcgR2FtZWJvYXJkKFwiY3B1XCIsIFtdLCBcIlBsYXllclwiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURPTSgpIHtcbiAgICBjb25zdCBkb20gPSBuZXcgRG9tTWV0aG9kcygpO1xuICAgIGRvbS5jcmVhdGVET00oKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgICBjcHVTaGlwcygpO1xuICAgIGdhbWVib2FyZEV2ZW50cygpO1xuICAgIG9ic2VydmVCb2FyZCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRDUFUoKSB7XG4gICAgY3B1Qm9hcmQuaGl0ID0gMDtcbiAgICBjcHVCb2FyZC5taXNzID0gMDtcbiAgICBjcHVCb2FyZC5zaGlwcyA9IFtdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3B1QXR0YWNrKCkge1xuICAgIGlmIChjcHVCb2FyZC5zaGlwcy5ldmVyeShzaGlwID0+IHNoaXAuc3VuayA9PSB0cnVlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNwdVNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2NwdS1ib2FyZCBkaXZcIik7XG4gICAgcmVzZXRMaXN0ZW5lcnMoY3B1U3F1YXJlcylcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1tZXNzYWdlXCIpLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNwdS1hY3Rpb25cIikudGV4dENvbnRlbnQgPSBcIkNQVSBpcyBtYWtpbmcgYW4gYXR0YWNrLi4uXCI7XG4gICAgc2V0VGltZW91dChhdHRhY2ssIDIgKiAxMDAwKTtcbn1cblxuZnVuY3Rpb24gYXR0YWNrKCkge1xuICAgIGNvbnN0IHggPSByYW5kb21NaW5NYXhOdW0oMSwgMTApO1xuICAgIGNvbnN0IHkgPSByYW5kb21NaW5NYXhOdW0oMSwgMTApO1xuICAgIGxldCByYW5kU3EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucGxheWVyU3FbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXk9XCIke3l9XCJdYCk7XG5cbiAgICBsZXQgc3F1YXJlID0gcmFuZG9tQXR0YWNrKHJhbmRTcSk7XG5cbiAgICBpZiAoY3B1Qm9hcmQucHJldkhpdCA9PSBcIlwiKSB7XG4gICAgICAgIHNxdWFyZSA9IHJhbmRvbUF0dGFjayhzcXVhcmUpO1xuICAgIH0gZWxzZSBpZiAoY3B1Qm9hcmQucHJldkhpdCA9PSBcImhpdFwiIHx8IGNwdUJvYXJkLnByZXZIaXQgPT0gXCJyZXRyeVwiKSB7XG5cbiAgICAgICAgY29uc3QgeCA9IGNwdUJvYXJkLnByZXZBdGsuZGF0YXNldC54O1xuICAgICAgICBjb25zdCB5ID0gY3B1Qm9hcmQucHJldkF0ay5kYXRhc2V0Lnk7XG4gICAgICAgIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucGxheWVyU3FbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXk9XCIke3kgLSAxfVwiXWApO1xuICAgICAgICBjb25zdCByaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGF5ZXJTcVtkYXRhLXg9XCIke3h9XCJdW2RhdGEteT1cIiR7K3kgKyAxfVwiXWApO1xuICAgICAgICBjb25zdCBhYm92ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGF5ZXJTcVtkYXRhLXg9XCIke3ggLSAxfVwiXVtkYXRhLXk9XCIke3l9XCJdYCk7XG4gICAgICAgIGNvbnN0IGJlbG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYXllclNxW2RhdGEteD1cIiR7K3ggKyAxfVwiXVtkYXRhLXk9XCIke3l9XCJdYCk7XG4gICAgICAgIGNvbnN0IGNob2ljZXMgPSBbbGVmdCwgcmlnaHQsIGFib3ZlLCBiZWxvd107XG4gICAgICAgIGxldCByYW5kQ2hvaWNlID0gY2hvaWNlc1swXTtcblxuICAgICAgICB3aGlsZSAocmFuZENob2ljZSA9PT0gbnVsbCB8fCByYW5kQ2hvaWNlID09PSB1bmRlZmluZWQgfHwgcmFuZENob2ljZS5pZCA9PT0gXCJoaXRcIiB8fCByYW5kQ2hvaWNlLmNsYXNzTGlzdC5jb250YWlucyhcIm1pc3NcIikpIHtcbiAgICAgICAgICAgIGlmIChjaG9pY2VzLmxlbmd0aCA8PSAwIHx8IGNoZWNrQ2hvaWNlcyhjaG9pY2VzKSkge1xuICAgICAgICAgICAgICAgIGNwdUJvYXJkLnByZXZIaXQgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHJhbmRDaG9pY2UgPSByYW5kb21BdHRhY2soY3B1Qm9hcmQucHJldkF0ayk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNob2ljZXMuc2hpZnQoKTtcbiAgICAgICAgICAgIHJhbmRDaG9pY2UgPSBjaG9pY2VzWzBdXG4gICAgICAgIH1cblxuICAgICAgICBzcXVhcmUgPSByYW5kQ2hvaWNlO1xuICAgIH1cblxuICAgIGlmIChzcXVhcmUuY2xhc3NOYW1lLmluY2x1ZGVzKFwic2hpcFwiKSkge1xuICAgICAgICBwbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKHNxdWFyZSk7XG4gICAgICAgIGNwdUJvYXJkLnByZXZIaXQgPSBcImhpdFwiXG4gICAgICAgIGNwdUJvYXJkLnByZXZBdGsgPSBzcXVhcmU7XG4gICAgfSBlbHNlIGlmIChjcHVCb2FyZC5wcmV2SGl0ID09IFwiaGl0XCIgfHwgY3B1Qm9hcmQucHJldkhpdCA9PSBcInJldHJ5XCIpIHtcbiAgICAgICAgcGxheWVyQm9hcmQubWlzc2VkQXR0YWNrKHNxdWFyZSlcbiAgICAgICAgY3B1Qm9hcmQucHJldkhpdCA9IFwicmV0cnlcIlxuICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYXllckJvYXJkLm1pc3NlZEF0dGFjayhzcXVhcmUpXG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbiAgICAgICAgY3B1Qm9hcmQucHJldkhpdCA9IFwibWlzc1wiXG4gICAgICAgIGNwdUJvYXJkLnByZXZBdGsgPSBzcXVhcmU7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcHUtYWN0aW9uXCIpLnRleHRDb250ZW50ID0gXCJZb3VyIHR1cm4hXCI7XG4gICAgY2hlY2tQbGF5ZXJTaGlwcygpO1xuICAgIGdhbWVib2FyZEV2ZW50cygpO1xufVxuXG5mdW5jdGlvbiByYW5kb21BdHRhY2soc3F1YXJlKSB7XG4gICAgbGV0IG5ld1NxID0gc3F1YXJlO1xuICAgIHdoaWxlIChuZXdTcS5jbGFzc05hbWUuaW5jbHVkZXMoXCJtaXNzXCIpIHx8IG5ld1NxLmlkID09IFwiaGl0XCIpIHtcbiAgICAgICAgY29uc3QgbmV3WCA9IHJhbmRvbU1pbk1heE51bSgxLCAxMCk7XG4gICAgICAgIGNvbnN0IG5ld1kgPSByYW5kb21NaW5NYXhOdW0oMSwgMTApO1xuICAgICAgICBuZXdTcSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGF5ZXJTcVtkYXRhLXg9XCIke25ld1h9XCJdW2RhdGEteT1cIiR7bmV3WX1cIl1gKVxuICAgIH1cbiAgICByZXR1cm4gbmV3U3E7XG59XG5cbmZ1bmN0aW9uIGNoZWNrQ2hvaWNlcyhhcnIpIHtcbiAgICByZXR1cm4gYXJyLmV2ZXJ5KGNob2ljZSA9PiB7XG4gICAgICAgIGNob2ljZSA9PT0gbnVsbCB8fCBjaG9pY2UgPT09IHVuZGVmaW5lZCB8fCBjaG9pY2UuaWQgPT09IFwiaGl0XCIgfHwgY2hvaWNlLmNsYXNzTGlzdC5jb250YWlucyhcIm1pc3NcIilcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBjcHVTaGlwcygpIHtcbiAgICB3aGlsZShjcHVCb2FyZC5zaGlwcy5sZW5ndGggPCA0KSB7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKSArIDIpO1xuICAgICAgICBjb25zdCBkaXIgPSByYW5kb21EaXIoKTtcbiAgICAgICAgY29uc3QgY29vcmQgPSByYW5kb21Db29yZChkaXIsIHNoaXApO1xuICAgICAgICBjb25zdCBzaGlwQ29vcmRzID0gZ2V0U2hpcENvb3Jkcyhjb29yZCwgZGlyLCBzaGlwKTtcblxuICAgICAgICBpZiAobWF0Y2hpbmdDb29yZChzaGlwQ29vcmRzKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjcHVCb2FyZC5wbGFjZVNoaXAoY29vcmQsIGRpciwgc2hpcCk7XG4gICAgICAgICAgICBjcHVCb2FyZC5zaGlwcy5wdXNoKHNoaXApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYXRjaGluZ0Nvb3JkKGNvb3JkQXJyKSB7XG4gICAgZm9yIChsZXQgcGxhY2VkU2hpcCBvZiBjcHVCb2FyZC5zaGlwcykge1xuICAgICAgICBpZiAocGxhY2VkU2hpcC5jb3Jkcy5zb21lKGNvb3JkID0+IGNvb3JkQXJyLnNvbWUoc2hpcENvcmQgPT4gc2hpcENvcmRbMF0gPT0gY29vcmRbMF0gJiYgc2hpcENvcmRbMV0gPT0gY29vcmRbMV0pKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldFNoaXBDb29yZHMoY29yZCwgZGlyLCBzaGlwKSB7XG4gICAgbGV0IGNvb3JkQXJyID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc3dpdGNoKGRpcikge1xuICAgICAgICAgICAgY2FzZSAndXAnOiBcbiAgICAgICAgICAgICAgICAgICAgY29vcmRBcnIucHVzaChbY29yZFswXSAtIGksIGNvcmRbMV1dKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgICAgICAgICAgY29vcmRBcnIucHVzaChbY29yZFswXSwgY29yZFsxXSAtIGldKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICAgICAgICAgIGNvb3JkQXJyLnB1c2goW2NvcmRbMF0sIGNvcmRbMV0gKyBpXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZG93bic6XG4gICAgICAgICAgICAgICAgICAgIGNvb3JkQXJyLnB1c2goW2NvcmRbMF0gKyBpLCBjb3JkWzFdXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvb3JkQXJyO1xufVxuXG5mdW5jdGlvbiByYW5kb21NaW5NYXhOdW0obWluLCBtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pblxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tQ29vcmQoZGlyLCBzaGlwKSB7XG4gICAgbGV0IHJhbmRVcExlZnQgPSByYW5kb21NaW5NYXhOdW0oc2hpcC5sZW5ndGgsIDEwKTtcbiAgICBsZXQgcmFuZERvd25SaWdodCA9IHJhbmRvbU1pbk1heE51bSgxLCAoMTAgLSBzaGlwLmxlbmd0aCkpO1xuICAgIGxldCByYW5kQW55ID0gcmFuZG9tTWluTWF4TnVtKDEsIDEwKTtcbiAgICBsZXQgY29vcmRzO1xuXG4gICAgc3dpdGNoKGRpcikge1xuICAgICAgICBjYXNlIFwidXBcIjogXG4gICAgICAgICAgICBjb29yZHMgPSBbcmFuZFVwTGVmdCwgcmFuZEFueV1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICAgICAgY29vcmRzID0gW3JhbmRBbnksIHJhbmRVcExlZnRdXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImRvd25cIjpcbiAgICAgICAgICAgIGNvb3JkcyA9IFtyYW5kRG93blJpZ2h0LCByYW5kQW55XVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgY29vcmRzID0gW3JhbmRBbnksIHJhbmREb3duUmlnaHRdXG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gY29vcmRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tRGlyKCkge1xuICAgIGNvbnN0IGRpcmVjdGlvbnMgPSBbXCJ1cFwiLCBcImxlZnRcIiwgXCJyaWdodFwiLCBcImRvd25cIl07XG4gICAgY29uc3QgcmFuZG9tTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCk7XG5cbiAgICByZXR1cm4gZGlyZWN0aW9uc1tyYW5kb21OdW1dO1xufSIsImV4cG9ydCBjbGFzcyBHYW1lYm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKGlkLCBzaGlwcywgb3Bwb25lbnQpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnNoaXBzID0gc2hpcHM7XG4gICAgICAgIHRoaXMub3Bwb25lbnQgPSBvcHBvbmVudDtcbiAgICAgICAgdGhpcy5ib2FyZCA9IGNyZWF0ZUJvYXJkKCk7XG4gICAgICAgIHRoaXMubWlzcyA9IDA7XG4gICAgICAgIHRoaXMuaGl0ID0gMDtcbiAgICAgICAgdGhpcy5wcmV2SGl0ID0gXCJcIjtcbiAgICAgICAgdGhpcy5wcmV2QXRrID0gXCJcIjtcbiAgICB9XG5cbiAgICBwbGFjZVNoaXAoY29yZCwgZGlyLCBzaGlwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHNxdWFyZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc3dpdGNoKGRpcikge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3VwJzogXG4gICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLmlkfVNxW2RhdGEteD1cIiR7Y29yZFswXSAtIGl9XCJdW2RhdGEteT1cIiR7Y29yZFsxXX1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXAuY29yZHMucHVzaChbY29yZFswXSAtIGksIGNvcmRbMV1dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5pZH1TcVtkYXRhLXg9XCIke2NvcmRbMF19XCJdW2RhdGEteT1cIiR7Y29yZFsxXSAtIGl9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwLmNvcmRzLnB1c2goW2NvcmRbMF0sIGNvcmRbMV0gLSBpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLmlkfVNxW2RhdGEteD1cIiR7Y29yZFswXX1cIl1bZGF0YS15PVwiJHtjb3JkWzFdICsgaX1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXAuY29yZHMucHVzaChbY29yZFswXSwgY29yZFsxXSArIGldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2Rvd24nOlxuICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5pZH1TcVtkYXRhLXg9XCIke2NvcmRbMF0gKyBpfVwiXVtkYXRhLXk9XCIke2NvcmRbMV19XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwLmNvcmRzLnB1c2goW2NvcmRbMF0gKyBpLCBjb3JkWzFdXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJlY2VpdmVBdHRhY2soc3F1YXJlKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLmlkfS1tZXNzYWdlYClcbiAgICAgICAgXG4gICAgICAgIGlmICghdGhpcy5zaGlwcy5ldmVyeShzaGlwID0+IHNoaXAuc3VuayA9PSB0cnVlKSkge1xuICAgICAgICAgICAgdGhpcy5zaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgICAgIHNoaXAuY29yZHMuc29tZShjb3JkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoY29yZFswXSA9PSBzcXVhcmUuZGF0YXNldC54ICYmIGNvcmRbMV0gPT0gc3F1YXJlLmRhdGFzZXQueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcC5oaXQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmlkID0gXCJoaXRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXAuc3VuayA9PSBmYWxzZSA/IHRoaXMuaGl0KysgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5pbm5lclRleHQgPT0gYCR7dGhpcy5vcHBvbmVudH0gaGl0IWAgPyBudWxsIDogbWVzc2FnZS5pbm5lclRleHQgPSBgJHt0aGlzLm9wcG9uZW50fSBoaXQhYCwgMjAwMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2hpcHMuZXZlcnkoc2hpcCA9PiBzaGlwLnN1bmsgPT0gdHJ1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuYWxsU3VuayhtZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgbWlzc2VkQXR0YWNrKHNxdWFyZSkge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5pZH0tbWVzc2FnZWApXG4gICAgICAgIG1lc3NhZ2UuaW5uZXJUZXh0ID09IGAke3RoaXMub3Bwb25lbnR9IG1pc3NlZCFgID8gbnVsbCA6IG1lc3NhZ2UuaW5uZXJUZXh0ID0gYCR7dGhpcy5vcHBvbmVudH0gbWlzc2VkIWAsIDIwMDBcblxuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcIm1pc3NcIilcbiAgICAgICAgdGhpcy5taXNzKys7XG4gICAgfVxuXG4gICAgYWxsU3Vuayhtc2cpIHtcbiAgICAgICAgbXNnLmlubmVyVGV4dCA9IFwiQWxsIHNoaXBzIGhhdmUgYmVlbiBzdW5rIVwiO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJvYXJkKCkge1xuICAgIGxldCBib2FyZEFyciA9IFtdO1xuXG4gICAgbGV0IHggPSAxO1xuICAgIGxldCB5ID0gMTtcblxuICAgIHdoaWxlKHkgPD0gMTAgJiYgeCA8PSAxMCkge1xuICAgICAgICBpZih4ID09IDEwICYmIHkgPT0gMTApIHtcbiAgICAgICAgICAgIGJvYXJkQXJyLnB1c2goYCR7eH0tJHt5fWApXG4gICAgICAgICAgICByZXR1cm4gYm9hcmRBcnI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoeSA9PSAxMCkge1xuICAgICAgICAgICAgYm9hcmRBcnIucHVzaChgJHt4fS0ke3l9YClcbiAgICAgICAgICAgIHgrK1xuICAgICAgICAgICAgeSA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBib2FyZEFyci5wdXNoKGAke3h9LSR7eX1gKTtcbiAgICAgICAgeSsrXG4gICAgfVxufSIsIi8vIGltcG9ydCBcIi4uL3N0eWxlcy9tYWluLmNzc1wiO1xuaW1wb3J0IHtjcmVhdGVCb2FyZH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCJcbmltcG9ydCB7Y3B1Qm9hcmQsIHJlc2V0Q1BVLCBjcHVBdHRhY2t9IGZyb20gXCIuL2dhbWVcIjtcbmltcG9ydCB7cGxheWVyQm9hcmRFdmVudCwgcmVzZXRQbGF5ZXJ9IGZyb20gXCIuL3BsYXllclwiO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbmV4cG9ydCBjbGFzcyBEb21NZXRob2RzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICBnYW1lQ29udGFpbmVycygpIHtcbiAgICAgICAgY29uc3QgcGxheWVyQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgY3B1Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICBwbGF5ZXJCb3guaWQgPSBcInBsYXllci1ib2FyZFwiO1xuICAgICAgICBjcHVCb3guaWQgPSBcImNwdS1ib2FyZFwiO1xuXG4gICAgICAgIGJvZHkuYXBwZW5kKHBsYXllckJveCwgY3B1Qm94KVxuICAgIH1cblxuICAgIGdhbWVib2FyZFNxdWFyZXMoKSB7XG4gICAgICAgIGxldCBuZXdCb2FyZCA9IGNyZWF0ZUJvYXJkKCk7XG4gICAgICAgIGNvbnN0IHBsYXllckJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyLWJvYXJkXCIpO1xuICAgICAgICBjb25zdCBjcHVCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNwdS1ib2FyZFwiKTtcblxuICAgICAgICBuZXdCb2FyZC5mb3JFYWNoKGNvcmQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGxheWVyU3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnN0IGNwdVNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb25zdCBzcGxpdENvcmRzID0gY29yZC5zcGxpdChcIi1cIik7XG5cbiAgICAgICAgICAgIHBsYXllclNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIiwgc3BsaXRDb3Jkc1swXSk7XG4gICAgICAgICAgICBwbGF5ZXJTcXVhcmUuc2V0QXR0cmlidXRlKFwiZGF0YS15XCIsIHNwbGl0Q29yZHNbMV0pO1xuICAgICAgICAgICAgY3B1U3F1YXJlLnNldEF0dHJpYnV0ZShcImRhdGEteFwiLCBzcGxpdENvcmRzWzBdKTtcbiAgICAgICAgICAgIGNwdVNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIiwgc3BsaXRDb3Jkc1sxXSk7XG4gICAgICAgICAgICBwbGF5ZXJTcXVhcmUuY2xhc3NMaXN0LmFkZChcInBsYXllclNxXCIpO1xuICAgICAgICAgICAgY3B1U3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJjcHVTcVwiKTtcblxuICAgICAgICAgICAgcGxheWVyQm94LmFwcGVuZENoaWxkKHBsYXllclNxdWFyZSk7XG4gICAgICAgICAgICBjcHVCb3guYXBwZW5kQ2hpbGQoY3B1U3F1YXJlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYm9hcmRNZXNzYWdlcygpIHtcbiAgICAgICAgY29uc3QgY3B1TWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGNwdUFjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHBseXJNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY3B1QWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJjcHUtYWN0aW9uXCIpO1xuICAgICAgICBjcHVNZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJjcHUtbWVzc2FnZVwiKVxuICAgICAgICBwbHlyTWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwicGxheWVyLW1lc3NhZ2VcIilcbiAgICAgICAgYm9keS5hcHBlbmQoY3B1TWVzc2FnZSwgcGx5ck1lc3NhZ2UsIGNwdUFjdGlvbik7XG4gICAgfVxuXG4gICAgcmVzZXRCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiUmVzZXRcIlxuICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJyZXNldFwiKTtcblxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRET00oKVxuICAgICAgICAgICAgcmVzZXRDUFUoKVxuICAgICAgICAgICAgcmVzZXRQbGF5ZXIoKVxuICAgICAgICB9KVxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGJ0bilcbiAgICB9XG5cbiAgICBhZGRTaGlwRm9ybSgpIHtcbiAgICAgICAgY29uc3QgYWRkRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXG4gICAgICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItZm9ybVwiKVxuXG4gICAgICAgIGNvbnN0IGxlbmd0aExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBjb25zdCBkaXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblxuICAgICAgICBsZW5ndGhMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJzaGlwLWxlbmd0aFwiKTtcbiAgICAgICAgZGlyTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwic2hpcC1kaXJcIik7XG5cbiAgICAgICAgY29uc3QgbGVuZ3RoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgICAgY29uc3QgbGVuZ3RoT3B0aW9ucyA9IFsyLCAzLCA0XTtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgICAgY29uc3QgZGlyT3B0aW9ucyA9IFtcInVwXCIsIFwicmlnaHRcIiwgXCJsZWZ0XCIsIFwiZG93blwiXTtcbiAgICAgICAgXG4gICAgICAgIGFkZEZvcm0uaWQgPSBcInNoaXAtZm9ybVwiO1xuICAgICAgICBsZW5ndGguaWQgPSBcInNoaXAtbGVuZ3RoXCI7XG4gICAgICAgIGRpcmVjdGlvbi5pZCA9IFwic2hpcC1kaXJcIjtcblxuICAgICAgICB0aGlzLmRyb3Bkb3duT3B0aW9ucyhsZW5ndGhPcHRpb25zLCBsZW5ndGgpO1xuICAgICAgICB0aGlzLmRyb3Bkb3duT3B0aW9ucyhkaXJPcHRpb25zLCBkaXJlY3Rpb24pO1xuXG4gICAgICAgIGNvbnN0IGFkZFNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBhZGRTaGlwLmlkID0gXCJhZGQtc2hpcFwiXG4gICAgICAgIGFkZFNoaXAudGV4dENvbnRlbnQgPSBcIkFkZCBTaGlwXCI7XG5cbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKVxuICAgICAgICBhZGRGb3JtLmFwcGVuZChsZW5ndGhMYWJlbCwgbGVuZ3RoLCBkaXJMYWJlbCwgZGlyZWN0aW9uLCBhZGRTaGlwKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItZm9ybVwiKS5hcHBlbmRDaGlsZChhZGRGb3JtKTtcbiAgICB9XG5cbiAgICBhZGRTaGlwQnRuRXZlbnQoKSB7XG4gICAgICAgIGNvbnN0IGFkZFNoaXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1zaGlwXCIpO1xuICAgICAgICBcbiAgICAgICAgYWRkU2hpcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcC1kaXJcIik7XG4gICAgICAgICAgICBjb25zdCBsZW5ndGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXAtbGVuZ3RoXCIpO1xuXG4gICAgICAgICAgICBwbGF5ZXJCb2FyZEV2ZW50KGRpcmVjdGlvbi52YWx1ZSwgTnVtYmVyKGxlbmd0aC52YWx1ZSkgLSAxKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW1haW5pbmdTaGlwcygpIHtcbiAgICAgICAgY29uc3QgaW5kaWNhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGluZGljYXRvci50ZXh0Q29udGVudCA9IFwiU2hpcHMgbGVmdDogNFwiO1xuICAgICAgICBpbmRpY2F0b3IuaWQgPSBcInNoaXAtcmVtYWluaW5nXCI7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLWZvcm1cIikuYXBwZW5kQ2hpbGQoaW5kaWNhdG9yKVxuICAgIH1cblxuICAgIGRyb3Bkb3duT3B0aW9ucyhvcHRpb25zLCBlbGVtZW50KSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBgJHtvcHRpb25zW2ldfWApO1xuICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGAke29wdGlvbnNbaV19YDtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzZXRET00oKSB7XG4gICAgICAgIGNvbnN0IGNwdVNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNwdVNxXCIpO1xuICAgICAgICBjb25zdCBwbGF5ZXJTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXJTcVwiKTtcbiAgICAgICAgY29uc3QgYm9hcmRzID0gW2NwdVNxdWFyZXMsIHBsYXllclNxdWFyZXNdO1xuICAgICAgICBjb25zdCBjcHVNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcHUtbWVzc2FnZVwiKTtcblxuICAgICAgICBjcHVNZXNzYWdlLnRleHRDb250ZW50ID0gXCJcIlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgICAgICAgYm9hcmRzW2ldLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWlzc1wiKSA/IHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKFwibWlzc1wiKSA6IHNxdWFyZS5pZCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5jb250YWlucyhcInNoaXBcIikgPyBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZShcInNoaXBcIikgOiBudWxsO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVET00gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuZ2FtZUNvbnRhaW5lcnMoKTtcbiAgICAgICAgdGhpcy5nYW1lYm9hcmRTcXVhcmVzKCk7XG4gICAgICAgIHRoaXMuYm9hcmRNZXNzYWdlcygpO1xuICAgICAgICB0aGlzLnJlc2V0QnV0dG9uKCk7XG4gICAgICAgIHRoaXMuYWRkU2hpcEZvcm0oKTtcbiAgICAgICAgdGhpcy5hZGRTaGlwQnRuRXZlbnQoKTtcbiAgICAgICAgdGhpcy5yZW1haW5pbmdTaGlwcygpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0TGlzdGVuZXJzKGNwdSkge1xuICAgIGlmIChjcHUpIHtcbiAgICAgICAgY3B1LmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNsb25lID0gc3F1YXJlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICAgIHNxdWFyZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChjbG9uZSwgc3F1YXJlKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcEJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNwbGF5ZXItYm9hcmQgZGl2XCIpO1xuICAgIHBCb2FyZC5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgIGNvbnN0IGNsb25lID0gc3F1YXJlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgc3F1YXJlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGNsb25lLCBzcXVhcmUpXG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmVCb2FyZCgpIHtcbiAgICBjb25zdCBjcHVCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3B1LWJvYXJkXCIpXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICB9XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihjYWxsYmFjayk7XG5cbiAgICBmdW5jdGlvbiBjYWxsYmFjayhtdXRhdGlvbkxpc3QsIG9ic2VydmVyKSB7XG4gICAgICAgIG11dGF0aW9uTGlzdC5mb3JFYWNoKG11dGF0aW9uID0+IHtcbiAgICAgICAgICAgIGlmIChtdXRhdGlvbi50YXJnZXQuaWQgPT0gXCJoaXRcIiB8fCBtdXRhdGlvbi50YXJnZXQuY2xhc3NOYW1lLmluY2x1ZGVzKFwibWlzc1wiKSkge1xuICAgICAgICAgICAgICAgIGNwdUF0dGFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIG9ic2VydmVyLm9ic2VydmUoY3B1Qm9hcmQsIG9wdGlvbnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2FtZWJvYXJkRXZlbnRzKCkge1xuICAgIGNvbnN0IGNwdVNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNwdVNxXCIpO1xuICAgIGdhbWVib2FyZEV2ZW50TG9naWMoY3B1U3F1YXJlcywgY3B1Qm9hcmQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnYW1lYm9hcmRFdmVudExvZ2ljKGJvYXJkU3F1YXJlcywgYm9hcmQpIHtcbiAgICBib2FyZFNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblxuICAgICAgICAgICAgaWYgKGJvYXJkLnNoaXBzLmV2ZXJ5KHNoaXAgPT4gc2hpcC5zdW5rID09IHRydWUpKSB7XG4gICAgICAgICAgICAgICAgcmVzZXRMaXN0ZW5lcnMoYm9hcmRTcXVhcmVzKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzcXVhcmUuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpcFwiKSAmJiAhKHNxdWFyZS5pZCA9PT0gXCJoaXRcIikpIHtcbiAgICAgICAgICAgICAgICBib2FyZC5yZWNlaXZlQXR0YWNrKHNxdWFyZSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXNxdWFyZS5jbGFzc0xpc3QuY29udGFpbnMoXCJtaXNzXCIpICYmICEoc3F1YXJlLmNsYXNzTGlzdC5jb250YWlucyhcInNoaXBcIikpKSB7XG4gICAgICAgICAgICAgICAgYm9hcmQubWlzc2VkQXR0YWNrKHNxdWFyZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSlcbiAgICB9KVxufSIsImltcG9ydCBcIi4uL3N0eWxlcy9tYWluLmNzc1wiO1xuaW1wb3J0IHsgY3JlYXRlRE9NIH0gZnJvbSBcIi4vZ2FtZVwiO1xuXG5leHBvcnQgY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLmRhbWFnZSA9IDA7XG4gICAgICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvcmRzID0gW107XG4gICAgfVxuICAgIFxuICAgIGhpdCgpIHtcbiAgICAgICAgdGhpcy5kYW1hZ2UgPT0gdGhpcy5sZW5ndGggLSAxID8gdGhpcy5pc1N1bmsoKSA6IHRoaXMuZGFtYWdlKys7XG4gICAgICAgIHJldHVybiB0aGlzLmRhbWFnZTtcbiAgICB9XG4gICAgXG4gICAgaXNTdW5rKCkge1xuICAgICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgICAgICB0aGlzLmRhbWFnZSsrO1xuICAgICAgICByZXR1cm4gdGhpcy5zdW5rO1xuICAgIH1cbn07XG5cbmNyZWF0ZURPTSgpOyIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL21haW5cIjtcbmltcG9ydCB7IHN0YXJ0R2FtZSB9IGZyb20gXCIuL2dhbWVcIjtcbmltcG9ydCB7IHJlc2V0TGlzdGVuZXJzIH0gZnJvbSBcIi4vZ2FtZWRvbVwiO1xuXG5leHBvcnQgbGV0IHBsYXllckJvYXJkID0gbmV3IEdhbWVib2FyZChcInBsYXllclwiLCBbXSwgXCJDUFVcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBwbGF5ZXJCb2FyZEV2ZW50KGRpciwgbGVuZ3RoKSB7XG4gICAgcmVzZXRMaXN0ZW5lcnMoKTtcbiAgICBjb25zdCBwQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3BsYXllci1ib2FyZCBkaXZcIik7XG5cbiAgICBwQm9hcmQuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJlbnRlclwiLCAoKSA9PiB7XG4gICAgICAgICAgICBzaGlwVmlzdWFsRlgoc3F1YXJlLCBkaXIsIGxlbmd0aCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZpc3VhbFNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3Zpc3VhbGl6ZS1zaGlwXCIpO1xuICAgICAgICAgICAgY29uc3QgdmlzdWFsRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3Zpc3VhbGl6ZS1lcnJvclwiKTtcblxuICAgICAgICAgICAgaWYgKHZpc3VhbEVycm9yLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgICAgICAgdmlzdWFsRXJyb3IuZm9yRWFjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlcnIuaWQgPSBcIlwiO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZpc3VhbFNoaXAuZm9yRWFjaChzcSA9PiB7XG4gICAgICAgICAgICAgICAgc3EuaWQgPSBcIlwiO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmlzdWFsRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3Zpc3VhbGl6ZS1lcnJvclwiKTtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkID0gW051bWJlcihzcXVhcmUuZGF0YXNldC54KSwgTnVtYmVyKHNxdWFyZS5kYXRhc2V0LnkpXTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChsZW5ndGggKyAxKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHZpc3VhbEVycm9yWzBdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKGNvb3JkLCBkaXIsIHNoaXApO1xuICAgICAgICAgICAgcGxheWVyQm9hcmQuc2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2hlY2tTdGFydEdhbWUoKTtcbiAgICAgICAgfSk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gY2hlY2tTdGFydEdhbWUoKSB7XG4gICAgY29uc3QgcmVtYWluaW5nSW5kaWNhdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwLXJlbWFpbmluZ1wiKTtcbiAgICBjb25zdCByZW1haW5pbmcgPSA0IC0gcGxheWVyQm9hcmQuc2hpcHMubGVuZ3RoO1xuXG4gICAgaWYgKHJlbWFpbmluZyAhPSAwKSB7XG4gICAgICAgIHJlbWFpbmluZ0luZGljYXRvci50ZXh0Q29udGVudCA9IGBTaGlwcyBsZWZ0OiAke3JlbWFpbmluZ31gXG4gICAgICAgIHJlc2V0TGlzdGVuZXJzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtc2hpcFwiKS5kaXNhYmxlZCA9IHRydWU7XG4gICAgcmVtYWluaW5nSW5kaWNhdG9yLnRleHRDb250ZW50ID0gYFNoaXBzIGZsb2F0aW5nOiA0YFxuICAgIHJlc2V0TGlzdGVuZXJzKCk7XG4gICAgc3RhcnRHYW1lKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1BsYXllclNoaXBzKCkge1xuICAgIC8vIFdyaXRlIGZ1bmN0aW9uIHRvIGVuZCB0aGUgZ2FtZSB3aGVuIGFsbCBzaGlwcyBoYXZlIGJlZW4gc3VuayBpbiBwbGF5ZXJCb2FyZC5zaGlwc1xuICAgIHJlbW92ZVN1bmtlbigpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdW5rZW4oKSB7XG4gICAgcGxheWVyQm9hcmQuc2hpcHMuZmluZChzaGlwID0+IHtcbiAgICAgICAgaWYgKHNoaXAuc3VuayA9PSB0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHBsYXllckJvYXJkLnNoaXBzLmluZGV4T2Yoc2hpcCk7XG4gICAgICAgICAgICBwbGF5ZXJCb2FyZC5zaGlwcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfSlcbiAgICByZXR1cm47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldFBsYXllcigpIHtcbiAgICBjb25zdCBjcHVCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjY3B1LWJvYXJkIGRpdlwiKTtcbiAgICBwbGF5ZXJCb2FyZC5oaXQgPSAwO1xuICAgIHBsYXllckJvYXJkLm1pc3MgPSAwO1xuICAgIHBsYXllckJvYXJkLnNoaXBzID0gW107XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtc2hpcFwiKS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcC1yZW1haW5pbmdcIikudGV4dENvbnRlbnQgPSBcIlNoaXBzIGxlZnQ6IDRcIjtcbiAgICByZXNldExpc3RlbmVycyhjcHVCb2FyZCk7XG59XG5cbmZ1bmN0aW9uIHNoaXBWaXN1YWxGWChzcXVhcmUsIGRpciwgbGVuZ3RoKSB7XG4gICAgY29uc3Qgc2hpcEFyciA9IFtzcXVhcmVdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV4dFNxO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHN3aXRjaChkaXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInVwXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0U3EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucGxheWVyU3FbZGF0YS14PVwiJHtOdW1iZXIoc3F1YXJlLmRhdGFzZXQueCkgLSBpfVwiXVtkYXRhLXk9XCIke3NxdWFyZS5kYXRhc2V0Lnl9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwQXJyLnB1c2gobmV4dFNxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBGWFN0eWxlcyhzaGlwQXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRTcSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGF5ZXJTcVtkYXRhLXg9XCIke3NxdWFyZS5kYXRhc2V0Lnh9XCJdW2RhdGEteT1cIiR7TnVtYmVyKHNxdWFyZS5kYXRhc2V0LnkpICsgaX1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBBcnIucHVzaChuZXh0U3EpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcEZYU3R5bGVzKHNoaXBBcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0U3EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucGxheWVyU3FbZGF0YS14PVwiJHtzcXVhcmUuZGF0YXNldC54fVwiXVtkYXRhLXk9XCIke051bWJlcihzcXVhcmUuZGF0YXNldC55KSAtIGl9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwQXJyLnB1c2gobmV4dFNxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBGWFN0eWxlcyhzaGlwQXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZG93blwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFNxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYXllclNxW2RhdGEteD1cIiR7TnVtYmVyKHNxdWFyZS5kYXRhc2V0LngpICsgaX1cIl1bZGF0YS15PVwiJHtzcXVhcmUuZGF0YXNldC55fVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcEFyci5wdXNoKG5leHRTcSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwRlhTdHlsZXMoc2hpcEFycik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG59XG5cbmZ1bmN0aW9uIHNoaXBGWFN0eWxlcyhzaGlwQXJyKSB7XG4gICAgICAgIGlmIChzaGlwQXJyLmV2ZXJ5KGl0ZW0gPT4gaXRlbSAhPT0gbnVsbCkpIHtcblxuICAgICAgICAgICAgaWYgKHNoaXBBcnIuc29tZShpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpcFwiKSkpIHtcbiAgICAgICAgICAgICAgICBzaGlwQXJyLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uaWQgPSBcInZpc3VhbGl6ZS1lcnJvclwiO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzaGlwQXJyLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5pZCA9IFwidmlzdWFsaXplLXNoaXBcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hpcEFyci5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uaWQgPSBcInZpc3VhbGl6ZS1lcnJvclwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zY3JpcHRzL21haW4uanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=