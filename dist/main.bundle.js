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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    font-family: sans-serif;\n}\n\nbody {\n    display: grid;\n    grid-template: 1fr 1fr 10fr / 4fr 1fr 4fr;\n    align-items: center;\n    justify-items: center;\n    margin: 0;\n    height: 100vh;\n    width: 100vw;\n}\n\ndiv.ship {\n    background-color: lightgreen;\n}\n\ndiv.miss {\n    background-color: slategray;\n}\n\n#hit {\n    background-color: rgb(255, 107, 107);\n}\n\n.cpu-message,\n.plyr-message {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    grid-row: 2 / 3;\n    width: 420px;\n    height: 50%;\n\n    font-size: 24px;\n    font-weight: 600;\n}\n\n.cpu-message {\n    grid-column: 1 / 2;\n}\n\n.plyr-message {\n    grid-column: 3 / -1;\n}\n\n#player-board,\n#cpu-board {\n    display: grid;\n    grid-row: 3 / -1;\n    grid-template: repeat(10, 1fr) / repeat(10, 1fr);\n    width: 50%;\n    height: 65%;\n}\n\n#player-board {\n    grid-column: 3 / -1;\n}\n\n.playerSq,\n.cpuSq {\n    background-color: white;\n    width: 100%;\n    height: 100%;\n    border: 1px solid black;\n}\n\n#cpu-board {\n    grid-column: 1 / 2;\n}\n\n/* Center Controls */\n\n#reset {\n    cursor: pointer;\n\n    grid-column: 2 / 3;\n    grid-row: 3 / -1;\n\n    width: 60%;\n    height: 25px;\n    border-radius: 8px;\n    border: 1px solid grey;\n}\n\n/* Ship form */\n\n#ship-form {\n    display: flex;\n    justify-content: center;\n    gap: 12px;\n\n    width: 400px;\n}\n\n#ship-length {\n    width: 3em;\n}\n\n#ship-dir {\n    width: 5em;\n}\n\n#visualize-ship {\n    background-color: lightgreen;\n}\n\n#visualize-error {\n    background-color: rgb(255, 107, 107);\n}\n\n#ship-remaining {\n    margin: 0;\n    font-size: 18px;\n    width: 200px;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,yCAAyC;IACzC,mBAAmB;IACnB,qBAAqB;IACrB,SAAS;IACT,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,oCAAoC;AACxC;;AAEA;;IAEI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,YAAY;IACZ,WAAW;;IAEX,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;;IAEI,aAAa;IACb,gBAAgB;IAChB,gDAAgD;IAChD,UAAU;IACV,WAAW;AACf;;AAEA;IACI,mBAAmB;AACvB;;AAEA;;IAEI,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;AACtB;;AAEA,oBAAoB;;AAEpB;IACI,eAAe;;IAEf,kBAAkB;IAClB,gBAAgB;;IAEhB,UAAU;IACV,YAAY;IACZ,kBAAkB;IAClB,sBAAsB;AAC1B;;AAEA,cAAc;;AAEd;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;;IAET,YAAY;AAChB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,SAAS;IACT,eAAe;IACf,YAAY;AAChB","sourcesContent":["* {\n    font-family: sans-serif;\n}\n\nbody {\n    display: grid;\n    grid-template: 1fr 1fr 10fr / 4fr 1fr 4fr;\n    align-items: center;\n    justify-items: center;\n    margin: 0;\n    height: 100vh;\n    width: 100vw;\n}\n\ndiv.ship {\n    background-color: lightgreen;\n}\n\ndiv.miss {\n    background-color: slategray;\n}\n\n#hit {\n    background-color: rgb(255, 107, 107);\n}\n\n.cpu-message,\n.plyr-message {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    grid-row: 2 / 3;\n    width: 420px;\n    height: 50%;\n\n    font-size: 24px;\n    font-weight: 600;\n}\n\n.cpu-message {\n    grid-column: 1 / 2;\n}\n\n.plyr-message {\n    grid-column: 3 / -1;\n}\n\n#player-board,\n#cpu-board {\n    display: grid;\n    grid-row: 3 / -1;\n    grid-template: repeat(10, 1fr) / repeat(10, 1fr);\n    width: 50%;\n    height: 65%;\n}\n\n#player-board {\n    grid-column: 3 / -1;\n}\n\n.playerSq,\n.cpuSq {\n    background-color: white;\n    width: 100%;\n    height: 100%;\n    border: 1px solid black;\n}\n\n#cpu-board {\n    grid-column: 1 / 2;\n}\n\n/* Center Controls */\n\n#reset {\n    cursor: pointer;\n\n    grid-column: 2 / 3;\n    grid-row: 3 / -1;\n\n    width: 60%;\n    height: 25px;\n    border-radius: 8px;\n    border: 1px solid grey;\n}\n\n/* Ship form */\n\n#ship-form {\n    display: flex;\n    justify-content: center;\n    gap: 12px;\n\n    width: 400px;\n}\n\n#ship-length {\n    width: 3em;\n}\n\n#ship-dir {\n    width: 5em;\n}\n\n#visualize-ship {\n    background-color: lightgreen;\n}\n\n#visualize-error {\n    background-color: rgb(255, 107, 107);\n}\n\n#ship-remaining {\n    margin: 0;\n    font-size: 18px;\n    width: 200px;\n}"],"sourceRoot":""}]);
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



const cpuBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_2__.Gameboard("cpu", []);

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
    const cpuSquares = document.querySelectorAll("#cpu-board div");
    console.log("Working")
    ;(0,_gamedom__WEBPACK_IMPORTED_MODULE_1__.resetListeners)(cpuSquares)
    setTimeout(_gamedom__WEBPACK_IMPORTED_MODULE_1__.gameboardEvents, 3 * 1000)
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

    console.log(coords, dir, ship.length)

    return coords;
}

function randomDir() {
    const directions = ["up", "left", "right", "down"];
    const randomNum = Math.floor(Math.random() * 4);

    return directions[randomNum];
}


// Will probably create a game loop by... Having the AI function be run with a setTimeout after
// the player has attacked... We could display a message of " AI is attacking... " and it will run
// the AI attack function after say 5 seconds

// Step 5
// Create conditions so that the game ends once one players ships have all been sunk. 
// This function is appropriate for the Game module.

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
    constructor(id, ships) {
        this.id = id;
        this.ships = ships;
        this.board = createBoard();
        this.miss = 0;
        this.hit = 0;
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
        const message = document.querySelector(".cpu-message")
        
        if (!this.ships.every(ship => ship.sunk == true)) {
            this.ships.forEach(ship => {
                ship.cords.some(cord => {
                    if(cord[0] == square.dataset.x && cord[1] == square.dataset.y) {
                        ship.hit()
                        square.id = "hit";
                        ship.sunk == false ? this.hit++ : null;
                        message.innerText == "Hit!" ? null : message.innerText = "Hit!"
                    }
                })
            })
        }

        if (this.ships.every(ship => ship.sunk == true)) {
            this.allSunk(message);
        }

    }

    missedAttack(square) {
        const message = document.querySelector(".cpu-message")
        message.innerText == "Miss" ? null : message.innerText = "Miss"

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
        const plyrMessage = document.createElement("div");
        cpuMessage.classList.add("cpu-message")
        plyrMessage.classList.add("plyr-message")
        body.append(cpuMessage, plyrMessage);
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

        addForm.append(lengthLabel, length, dirLabel, direction, addShip);
        document.querySelector(".plyr-message").appendChild(addForm);
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
        document.querySelector(".plyr-message").appendChild(indicator)
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
                console.log(`The ${mutation.target.dataset.x}, ${mutation.target.dataset.y} has changed ${mutation.attributeName}`);
            }
        })
    }

    observer.observe(cpuBoard, options);
}

function gameboardEvents() {
    const cpuSquares = document.querySelectorAll(".cpuSq");
    console.log("Fire!")
    gameboardEventLogic(cpuSquares, _game__WEBPACK_IMPORTED_MODULE_1__.cpuBoard)
}

function gameboardEventLogic(boardSquares, board) {
    boardSquares.forEach(square => {
        square.addEventListener("click", () => {
            if (square.classList.contains("ship")) {
                console.log(board)
                board.receiveAttack(square)
            } else {
                board.missedAttack(square)
            }
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
/* harmony export */   "playerBoardEvent": () => (/* binding */ playerBoardEvent),
/* harmony export */   "resetPlayer": () => (/* binding */ resetPlayer)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/scripts/gameboard.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ "./src/scripts/main.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ "./src/scripts/game.js");
/* harmony import */ var _gamedom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gamedom */ "./src/scripts/gamedom.js");





const playerBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard("player", []);

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
    (0,_game__WEBPACK_IMPORTED_MODULE_2__.startGame)(playerBoard);
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

// function resetListeners(cpu) {
//     const pBoard = document.querySelectorAll("#player-board div");
//     pBoard.forEach(square => {
//         const clone = square.cloneNode(true);
//         square.parentNode.replaceChild(clone, square)
//     })

//     if (cpu) {
//         cpu.forEach(square => {
//             const clone = square.cloneNode(true);
//             square.parentNode.replaceChild(clone, square)
//         })
//     }
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQSw2RUFBNkUsNkJBQTZCLGFBQWEsaUJBQWlCO0FBQ3hJO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkVBQTZFLGlCQUFpQixhQUFhLDZCQUE2QjtBQUN4STtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RSxpQkFBaUIsYUFBYSw2QkFBNkI7QUFDeEk7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkUsNkJBQTZCLGFBQWEsaUJBQWlCO0FBQ3hJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOzs7Ozs7VUM3SUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWplc3QtdGVtcGxhdGUvLi9zcmMvc3R5bGVzL21haW4uY3NzIiwid2VicGFjazovL3dlYnBhY2stamVzdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1qZXN0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1qZXN0LXRlbXBsYXRlLy4vc3JjL3N0eWxlcy9tYWluLmNzcz9lODBhIiwid2VicGFjazovL3dlYnBhY2stamVzdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWplc3QtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stamVzdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWplc3QtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1qZXN0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1qZXN0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1qZXN0LXRlbXBsYXRlLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWplc3QtdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1qZXN0LXRlbXBsYXRlLy4vc3JjL3NjcmlwdHMvZ2FtZWRvbS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWplc3QtdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy9tYWluLmpzIiwid2VicGFjazovL3dlYnBhY2stamVzdC10ZW1wbGF0ZS8uL3NyYy9zY3JpcHRzL3BsYXllci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWplc3QtdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1qZXN0LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stamVzdC10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1qZXN0LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1qZXN0LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1qZXN0LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJwYWNrLWplc3QtdGVtcGxhdGUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWJwYWNrLWplc3QtdGVtcGxhdGUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2stamVzdC10ZW1wbGF0ZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgMWZyIDEwZnIgLyA0ZnIgMWZyIDRmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuZGl2LnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbn1cXG5cXG5kaXYubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNsYXRlZ3JheTtcXG59XFxuXFxuI2hpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDEwNywgMTA3KTtcXG59XFxuXFxuLmNwdS1tZXNzYWdlLFxcbi5wbHlyLW1lc3NhZ2Uge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICB3aWR0aDogNDIwcHg7XFxuICAgIGhlaWdodDogNTAlO1xcblxcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5jcHUtbWVzc2FnZSB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG59XFxuXFxuLnBseXItbWVzc2FnZSB7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gLTE7XFxufVxcblxcbiNwbGF5ZXItYm9hcmQsXFxuI2NwdS1ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtcm93OiAzIC8gLTE7XFxuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMWZyKSAvIHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiA2NSU7XFxufVxcblxcbiNwbGF5ZXItYm9hcmQge1xcbiAgICBncmlkLWNvbHVtbjogMyAvIC0xO1xcbn1cXG5cXG4ucGxheWVyU3EsXFxuLmNwdVNxIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jY3B1LWJvYXJkIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbn1cXG5cXG4vKiBDZW50ZXIgQ29udHJvbHMgKi9cXG5cXG4jcmVzZXQge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDMgLyAtMTtcXG5cXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxufVxcblxcbi8qIFNoaXAgZm9ybSAqL1xcblxcbiNzaGlwLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMnB4O1xcblxcbiAgICB3aWR0aDogNDAwcHg7XFxufVxcblxcbiNzaGlwLWxlbmd0aCB7XFxuICAgIHdpZHRoOiAzZW07XFxufVxcblxcbiNzaGlwLWRpciB7XFxuICAgIHdpZHRoOiA1ZW07XFxufVxcblxcbiN2aXN1YWxpemUtc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxufVxcblxcbiN2aXN1YWxpemUtZXJyb3Ige1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxMDcsIDEwNyk7XFxufVxcblxcbiNzaGlwLXJlbWFpbmluZyB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUNBQXlDO0lBQ3pDLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsU0FBUztJQUNULGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBOztJQUVJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVzs7SUFFWCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0RBQWdEO0lBQ2hELFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBLG9CQUFvQjs7QUFFcEI7SUFDSSxlQUFlOztJQUVmLGtCQUFrQjtJQUNsQixnQkFBZ0I7O0lBRWhCLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQSxjQUFjOztBQUVkO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixTQUFTOztJQUVULFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZUFBZTtJQUNmLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAxMGZyIC8gNGZyIDFmciA0ZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcbmRpdi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG59XFxuXFxuZGl2Lm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWdyYXk7XFxufVxcblxcbiNoaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxMDcsIDEwNyk7XFxufVxcblxcbi5jcHUtbWVzc2FnZSxcXG4ucGx5ci1tZXNzYWdlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgd2lkdGg6IDQyMHB4O1xcbiAgICBoZWlnaHQ6IDUwJTtcXG5cXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uY3B1LW1lc3NhZ2Uge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxufVxcblxcbi5wbHlyLW1lc3NhZ2Uge1xcbiAgICBncmlkLWNvbHVtbjogMyAvIC0xO1xcbn1cXG5cXG4jcGxheWVyLWJvYXJkLFxcbiNjcHUtYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXJvdzogMyAvIC0xO1xcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMTAsIDFmcikgLyByZXBlYXQoMTAsIDFmcik7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogNjUlO1xcbn1cXG5cXG4jcGxheWVyLWJvYXJkIHtcXG4gICAgZ3JpZC1jb2x1bW46IDMgLyAtMTtcXG59XFxuXFxuLnBsYXllclNxLFxcbi5jcHVTcSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI2NwdS1ib2FyZCB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG59XFxuXFxuLyogQ2VudGVyIENvbnRyb2xzICovXFxuXFxuI3Jlc2V0IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAzIC8gLTE7XFxuXFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbn1cXG5cXG4vKiBTaGlwIGZvcm0gKi9cXG5cXG4jc2hpcC1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTJweDtcXG5cXG4gICAgd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4jc2hpcC1sZW5ndGgge1xcbiAgICB3aWR0aDogM2VtO1xcbn1cXG5cXG4jc2hpcC1kaXIge1xcbiAgICB3aWR0aDogNWVtO1xcbn1cXG5cXG4jdmlzdWFsaXplLXNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbn1cXG5cXG4jdmlzdWFsaXplLWVycm9yIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTA3LCAxMDcpO1xcbn1cXG5cXG4jc2hpcC1yZW1haW5pbmcge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL21haW5cIlxuaW1wb3J0IHsgRG9tTWV0aG9kcywgZ2FtZWJvYXJkRXZlbnRzLCBvYnNlcnZlQm9hcmQsIHJlc2V0TGlzdGVuZXJzIH0gZnJvbSBcIi4vZ2FtZWRvbVwiO1xuaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCJcbmV4cG9ydCBjb25zdCBjcHVCb2FyZCA9IG5ldyBHYW1lYm9hcmQoXCJjcHVcIiwgW10pO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRE9NKCkge1xuICAgIGNvbnN0IGRvbSA9IG5ldyBEb21NZXRob2RzKCk7XG4gICAgZG9tLmNyZWF0ZURPTSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICAgIGNwdVNoaXBzKCk7XG4gICAgZ2FtZWJvYXJkRXZlbnRzKCk7XG4gICAgb2JzZXJ2ZUJvYXJkKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldENQVSgpIHtcbiAgICBjcHVCb2FyZC5oaXQgPSAwO1xuICAgIGNwdUJvYXJkLm1pc3MgPSAwO1xuICAgIGNwdUJvYXJkLnNoaXBzID0gW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcHVBdHRhY2soKSB7XG4gICAgY29uc3QgY3B1U3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjY3B1LWJvYXJkIGRpdlwiKTtcbiAgICBjb25zb2xlLmxvZyhcIldvcmtpbmdcIilcbiAgICByZXNldExpc3RlbmVycyhjcHVTcXVhcmVzKVxuICAgIHNldFRpbWVvdXQoZ2FtZWJvYXJkRXZlbnRzLCAzICogMTAwMClcbn1cblxuZnVuY3Rpb24gY3B1U2hpcHMoKSB7XG4gICAgd2hpbGUoY3B1Qm9hcmQuc2hpcHMubGVuZ3RoIDwgNCkge1xuICAgICAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMykgKyAyKTtcbiAgICAgICAgY29uc3QgZGlyID0gcmFuZG9tRGlyKCk7XG4gICAgICAgIGNvbnN0IGNvb3JkID0gcmFuZG9tQ29vcmQoZGlyLCBzaGlwKTtcbiAgICAgICAgY29uc3Qgc2hpcENvb3JkcyA9IGdldFNoaXBDb29yZHMoY29vcmQsIGRpciwgc2hpcCk7XG5cbiAgICAgICAgaWYgKG1hdGNoaW5nQ29vcmQoc2hpcENvb3JkcykpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3B1Qm9hcmQucGxhY2VTaGlwKGNvb3JkLCBkaXIsIHNoaXApO1xuICAgICAgICAgICAgY3B1Qm9hcmQuc2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbWF0Y2hpbmdDb29yZChjb29yZEFycikge1xuICAgIGZvciAobGV0IHBsYWNlZFNoaXAgb2YgY3B1Qm9hcmQuc2hpcHMpIHtcbiAgICAgICAgaWYgKHBsYWNlZFNoaXAuY29yZHMuc29tZShjb29yZCA9PiBjb29yZEFyci5zb21lKHNoaXBDb3JkID0+IHNoaXBDb3JkWzBdID09IGNvb3JkWzBdICYmIHNoaXBDb3JkWzFdID09IGNvb3JkWzFdKSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRTaGlwQ29vcmRzKGNvcmQsIGRpciwgc2hpcCkge1xuICAgIGxldCBjb29yZEFyciA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHN3aXRjaChkaXIpIHtcbiAgICAgICAgICAgIGNhc2UgJ3VwJzogXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkQXJyLnB1c2goW2NvcmRbMF0gLSBpLCBjb3JkWzFdXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAgICAgICAgIGNvb3JkQXJyLnB1c2goW2NvcmRbMF0sIGNvcmRbMV0gLSBpXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgICAgICBjb29yZEFyci5wdXNoKFtjb3JkWzBdLCBjb3JkWzFdICsgaV0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2Rvd24nOlxuICAgICAgICAgICAgICAgICAgICBjb29yZEFyci5wdXNoKFtjb3JkWzBdICsgaSwgY29yZFsxXV0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb29yZEFycjtcbn1cblxuZnVuY3Rpb24gcmFuZG9tTWluTWF4TnVtKG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUNvb3JkKGRpciwgc2hpcCkge1xuICAgIGxldCByYW5kVXBMZWZ0ID0gcmFuZG9tTWluTWF4TnVtKHNoaXAubGVuZ3RoLCAxMCk7XG4gICAgbGV0IHJhbmREb3duUmlnaHQgPSByYW5kb21NaW5NYXhOdW0oMSwgKDEwIC0gc2hpcC5sZW5ndGgpKTtcbiAgICBsZXQgcmFuZEFueSA9IHJhbmRvbU1pbk1heE51bSgxLCAxMCk7XG4gICAgbGV0IGNvb3JkcztcblxuICAgIHN3aXRjaChkaXIpIHtcbiAgICAgICAgY2FzZSBcInVwXCI6IFxuICAgICAgICAgICAgY29vcmRzID0gW3JhbmRVcExlZnQsIHJhbmRBbnldXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgICAgIGNvb3JkcyA9IFtyYW5kQW55LCByYW5kVXBMZWZ0XVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJkb3duXCI6XG4gICAgICAgICAgICBjb29yZHMgPSBbcmFuZERvd25SaWdodCwgcmFuZEFueV1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgICAgIGNvb3JkcyA9IFtyYW5kQW55LCByYW5kRG93blJpZ2h0XVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coY29vcmRzLCBkaXIsIHNoaXAubGVuZ3RoKVxuXG4gICAgcmV0dXJuIGNvb3Jkcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbURpcigpIHtcbiAgICBjb25zdCBkaXJlY3Rpb25zID0gW1widXBcIiwgXCJsZWZ0XCIsIFwicmlnaHRcIiwgXCJkb3duXCJdO1xuICAgIGNvbnN0IHJhbmRvbU51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpO1xuXG4gICAgcmV0dXJuIGRpcmVjdGlvbnNbcmFuZG9tTnVtXTtcbn1cblxuXG4vLyBXaWxsIHByb2JhYmx5IGNyZWF0ZSBhIGdhbWUgbG9vcCBieS4uLiBIYXZpbmcgdGhlIEFJIGZ1bmN0aW9uIGJlIHJ1biB3aXRoIGEgc2V0VGltZW91dCBhZnRlclxuLy8gdGhlIHBsYXllciBoYXMgYXR0YWNrZWQuLi4gV2UgY291bGQgZGlzcGxheSBhIG1lc3NhZ2Ugb2YgXCIgQUkgaXMgYXR0YWNraW5nLi4uIFwiIGFuZCBpdCB3aWxsIHJ1blxuLy8gdGhlIEFJIGF0dGFjayBmdW5jdGlvbiBhZnRlciBzYXkgNSBzZWNvbmRzXG5cbi8vIFN0ZXAgNVxuLy8gQ3JlYXRlIGNvbmRpdGlvbnMgc28gdGhhdCB0aGUgZ2FtZSBlbmRzIG9uY2Ugb25lIHBsYXllcnMgc2hpcHMgaGF2ZSBhbGwgYmVlbiBzdW5rLiBcbi8vIFRoaXMgZnVuY3Rpb24gaXMgYXBwcm9wcmlhdGUgZm9yIHRoZSBHYW1lIG1vZHVsZS4iLCJleHBvcnQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgc2hpcHMpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnNoaXBzID0gc2hpcHM7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBjcmVhdGVCb2FyZCgpO1xuICAgICAgICB0aGlzLm1pc3MgPSAwO1xuICAgICAgICB0aGlzLmhpdCA9IDA7XG4gICAgfVxuXG4gICAgcGxhY2VTaGlwKGNvcmQsIGRpciwgc2hpcCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzcXVhcmU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHN3aXRjaChkaXIpIHtcbiAgICAgICAgICAgICAgICBjYXNlICd1cCc6IFxuICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5pZH1TcVtkYXRhLXg9XCIke2NvcmRbMF0gLSBpfVwiXVtkYXRhLXk9XCIke2NvcmRbMV19XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwLmNvcmRzLnB1c2goW2NvcmRbMF0gLSBpLCBjb3JkWzFdXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuaWR9U3FbZGF0YS14PVwiJHtjb3JkWzBdfVwiXVtkYXRhLXk9XCIke2NvcmRbMV0gLSBpfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcC5jb3Jkcy5wdXNoKFtjb3JkWzBdLCBjb3JkWzFdIC0gaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5pZH1TcVtkYXRhLXg9XCIke2NvcmRbMF19XCJdW2RhdGEteT1cIiR7Y29yZFsxXSArIGl9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwLmNvcmRzLnB1c2goW2NvcmRbMF0sIGNvcmRbMV0gKyBpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdkb3duJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuaWR9U3FbZGF0YS14PVwiJHtjb3JkWzBdICsgaX1cIl1bZGF0YS15PVwiJHtjb3JkWzFdfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcC5jb3Jkcy5wdXNoKFtjb3JkWzBdICsgaSwgY29yZFsxXV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZWNlaXZlQXR0YWNrKHNxdWFyZSkge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcHUtbWVzc2FnZVwiKVxuICAgICAgICBcbiAgICAgICAgaWYgKCF0aGlzLnNoaXBzLmV2ZXJ5KHNoaXAgPT4gc2hpcC5zdW5rID09IHRydWUpKSB7XG4gICAgICAgICAgICB0aGlzLnNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICAgICAgc2hpcC5jb3Jkcy5zb21lKGNvcmQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihjb3JkWzBdID09IHNxdWFyZS5kYXRhc2V0LnggJiYgY29yZFsxXSA9PSBzcXVhcmUuZGF0YXNldC55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwLmhpdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmUuaWQgPSBcImhpdFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcC5zdW5rID09IGZhbHNlID8gdGhpcy5oaXQrKyA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmlubmVyVGV4dCA9PSBcIkhpdCFcIiA/IG51bGwgOiBtZXNzYWdlLmlubmVyVGV4dCA9IFwiSGl0IVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNoaXBzLmV2ZXJ5KHNoaXAgPT4gc2hpcC5zdW5rID09IHRydWUpKSB7XG4gICAgICAgICAgICB0aGlzLmFsbFN1bmsobWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIG1pc3NlZEF0dGFjayhzcXVhcmUpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3B1LW1lc3NhZ2VcIilcbiAgICAgICAgbWVzc2FnZS5pbm5lclRleHQgPT0gXCJNaXNzXCIgPyBudWxsIDogbWVzc2FnZS5pbm5lclRleHQgPSBcIk1pc3NcIlxuXG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKVxuICAgICAgICB0aGlzLm1pc3MrKztcbiAgICB9XG5cbiAgICBhbGxTdW5rKG1zZykge1xuICAgICAgICBtc2cuaW5uZXJUZXh0ID0gXCJBbGwgc2hpcHMgaGF2ZSBiZWVuIHN1bmshXCI7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQm9hcmQoKSB7XG4gICAgbGV0IGJvYXJkQXJyID0gW107XG5cbiAgICBsZXQgeCA9IDE7XG4gICAgbGV0IHkgPSAxO1xuXG4gICAgd2hpbGUoeSA8PSAxMCAmJiB4IDw9IDEwKSB7XG4gICAgICAgIGlmKHggPT0gMTAgJiYgeSA9PSAxMCkge1xuICAgICAgICAgICAgYm9hcmRBcnIucHVzaChgJHt4fS0ke3l9YClcbiAgICAgICAgICAgIHJldHVybiBib2FyZEFycjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh5ID09IDEwKSB7XG4gICAgICAgICAgICBib2FyZEFyci5wdXNoKGAke3h9LSR7eX1gKVxuICAgICAgICAgICAgeCsrXG4gICAgICAgICAgICB5ID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvYXJkQXJyLnB1c2goYCR7eH0tJHt5fWApO1xuICAgICAgICB5KytcbiAgICB9XG59IiwiLy8gaW1wb3J0IFwiLi4vc3R5bGVzL21haW4uY3NzXCI7XG5pbXBvcnQge2NyZWF0ZUJvYXJkfSBmcm9tIFwiLi9nYW1lYm9hcmRcIlxuaW1wb3J0IHtjcHVCb2FyZCwgcmVzZXRDUFUsIGNwdUF0dGFja30gZnJvbSBcIi4vZ2FtZVwiO1xuaW1wb3J0IHtwbGF5ZXJCb2FyZEV2ZW50LCByZXNldFBsYXllcn0gZnJvbSBcIi4vcGxheWVyXCI7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuZXhwb3J0IGNsYXNzIERvbU1ldGhvZHMge1xuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIGdhbWVDb250YWluZXJzKCkge1xuICAgICAgICBjb25zdCBwbGF5ZXJCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBjcHVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICAgIHBsYXllckJveC5pZCA9IFwicGxheWVyLWJvYXJkXCI7XG4gICAgICAgIGNwdUJveC5pZCA9IFwiY3B1LWJvYXJkXCI7XG5cbiAgICAgICAgYm9keS5hcHBlbmQocGxheWVyQm94LCBjcHVCb3gpXG4gICAgfVxuXG4gICAgZ2FtZWJvYXJkU3F1YXJlcygpIHtcbiAgICAgICAgbGV0IG5ld0JvYXJkID0gY3JlYXRlQm9hcmQoKTtcbiAgICAgICAgY29uc3QgcGxheWVyQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXItYm9hcmRcIik7XG4gICAgICAgIGNvbnN0IGNwdUJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3B1LWJvYXJkXCIpO1xuXG4gICAgICAgIG5ld0JvYXJkLmZvckVhY2goY29yZCA9PiB7XG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJTcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgY29uc3QgY3B1U3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0Q29yZHMgPSBjb3JkLnNwbGl0KFwiLVwiKTtcblxuICAgICAgICAgICAgcGxheWVyU3F1YXJlLnNldEF0dHJpYnV0ZShcImRhdGEteFwiLCBzcGxpdENvcmRzWzBdKTtcbiAgICAgICAgICAgIHBsYXllclNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIiwgc3BsaXRDb3Jkc1sxXSk7XG4gICAgICAgICAgICBjcHVTcXVhcmUuc2V0QXR0cmlidXRlKFwiZGF0YS14XCIsIHNwbGl0Q29yZHNbMF0pO1xuICAgICAgICAgICAgY3B1U3F1YXJlLnNldEF0dHJpYnV0ZShcImRhdGEteVwiLCBzcGxpdENvcmRzWzFdKTtcbiAgICAgICAgICAgIHBsYXllclNxdWFyZS5jbGFzc0xpc3QuYWRkKFwicGxheWVyU3FcIik7XG4gICAgICAgICAgICBjcHVTcXVhcmUuY2xhc3NMaXN0LmFkZChcImNwdVNxXCIpO1xuXG4gICAgICAgICAgICBwbGF5ZXJCb3guYXBwZW5kQ2hpbGQocGxheWVyU3F1YXJlKTtcbiAgICAgICAgICAgIGNwdUJveC5hcHBlbmRDaGlsZChjcHVTcXVhcmUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBib2FyZE1lc3NhZ2VzKCkge1xuICAgICAgICBjb25zdCBjcHVNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgcGx5ck1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjcHVNZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJjcHUtbWVzc2FnZVwiKVxuICAgICAgICBwbHlyTWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwicGx5ci1tZXNzYWdlXCIpXG4gICAgICAgIGJvZHkuYXBwZW5kKGNwdU1lc3NhZ2UsIHBseXJNZXNzYWdlKTtcbiAgICB9XG5cbiAgICByZXNldEJ1dHRvbigpIHtcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYnRuLnRleHRDb250ZW50ID0gXCJSZXNldFwiXG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInJlc2V0XCIpO1xuXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZXNldERPTSgpXG4gICAgICAgICAgICByZXNldENQVSgpXG4gICAgICAgICAgICByZXNldFBsYXllcigpXG4gICAgICAgIH0pXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoYnRuKVxuICAgIH1cblxuICAgIGFkZFNoaXBGb3JtKCkge1xuICAgICAgICBjb25zdCBhZGRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cbiAgICAgICAgY29uc3QgbGVuZ3RoTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGNvbnN0IGRpckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXG4gICAgICAgIGxlbmd0aExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInNoaXAtbGVuZ3RoXCIpO1xuICAgICAgICBkaXJMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJzaGlwLWRpclwiKTtcblxuICAgICAgICBjb25zdCBsZW5ndGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgICBjb25zdCBsZW5ndGhPcHRpb25zID0gWzIsIDMsIDRdO1xuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgICBjb25zdCBkaXJPcHRpb25zID0gW1widXBcIiwgXCJyaWdodFwiLCBcImxlZnRcIiwgXCJkb3duXCJdO1xuICAgICAgICBcbiAgICAgICAgYWRkRm9ybS5pZCA9IFwic2hpcC1mb3JtXCI7XG4gICAgICAgIGxlbmd0aC5pZCA9IFwic2hpcC1sZW5ndGhcIjtcbiAgICAgICAgZGlyZWN0aW9uLmlkID0gXCJzaGlwLWRpclwiO1xuXG4gICAgICAgIHRoaXMuZHJvcGRvd25PcHRpb25zKGxlbmd0aE9wdGlvbnMsIGxlbmd0aCk7XG4gICAgICAgIHRoaXMuZHJvcGRvd25PcHRpb25zKGRpck9wdGlvbnMsIGRpcmVjdGlvbik7XG5cbiAgICAgICAgY29uc3QgYWRkU2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGFkZFNoaXAuaWQgPSBcImFkZC1zaGlwXCJcbiAgICAgICAgYWRkU2hpcC50ZXh0Q29udGVudCA9IFwiQWRkIFNoaXBcIjtcblxuICAgICAgICBhZGRGb3JtLmFwcGVuZChsZW5ndGhMYWJlbCwgbGVuZ3RoLCBkaXJMYWJlbCwgZGlyZWN0aW9uLCBhZGRTaGlwKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbHlyLW1lc3NhZ2VcIikuYXBwZW5kQ2hpbGQoYWRkRm9ybSk7XG4gICAgfVxuXG4gICAgYWRkU2hpcEJ0bkV2ZW50KCkge1xuICAgICAgICBjb25zdCBhZGRTaGlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtc2hpcFwiKTtcbiAgICAgICAgXG4gICAgICAgIGFkZFNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXAtZGlyXCIpO1xuICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwLWxlbmd0aFwiKTtcblxuICAgICAgICAgICAgcGxheWVyQm9hcmRFdmVudChkaXJlY3Rpb24udmFsdWUsIE51bWJlcihsZW5ndGgudmFsdWUpIC0gMSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVtYWluaW5nU2hpcHMoKSB7XG4gICAgICAgIGNvbnN0IGluZGljYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBpbmRpY2F0b3IudGV4dENvbnRlbnQgPSBcIlNoaXBzIGxlZnQ6IDRcIjtcbiAgICAgICAgaW5kaWNhdG9yLmlkID0gXCJzaGlwLXJlbWFpbmluZ1wiO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBseXItbWVzc2FnZVwiKS5hcHBlbmRDaGlsZChpbmRpY2F0b3IpXG4gICAgfVxuXG4gICAgZHJvcGRvd25PcHRpb25zKG9wdGlvbnMsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGAke29wdGlvbnNbaV19YCk7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gYCR7b3B0aW9uc1tpXX1gO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICB9XG5cbiAgICByZXNldERPTSgpIHtcbiAgICAgICAgY29uc3QgY3B1U3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY3B1U3FcIik7XG4gICAgICAgIGNvbnN0IHBsYXllclNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllclNxXCIpO1xuICAgICAgICBjb25zdCBib2FyZHMgPSBbY3B1U3F1YXJlcywgcGxheWVyU3F1YXJlc107XG4gICAgICAgIGNvbnN0IGNwdU1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNwdS1tZXNzYWdlXCIpO1xuXG4gICAgICAgIGNwdU1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIlwiXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgICAgICBib2FyZHNbaV0uZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuY29udGFpbnMoXCJtaXNzXCIpID8gc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoXCJtaXNzXCIpIDogc3F1YXJlLmlkID0gXCJcIjtcbiAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpcFwiKSA/IHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcFwiKSA6IG51bGw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZURPTSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5nYW1lQ29udGFpbmVycygpO1xuICAgICAgICB0aGlzLmdhbWVib2FyZFNxdWFyZXMoKTtcbiAgICAgICAgdGhpcy5ib2FyZE1lc3NhZ2VzKCk7XG4gICAgICAgIHRoaXMucmVzZXRCdXR0b24oKTtcbiAgICAgICAgdGhpcy5hZGRTaGlwRm9ybSgpO1xuICAgICAgICB0aGlzLmFkZFNoaXBCdG5FdmVudCgpO1xuICAgICAgICB0aGlzLnJlbWFpbmluZ1NoaXBzKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRMaXN0ZW5lcnMoY3B1KSB7XG4gICAgaWYgKGNwdSkge1xuICAgICAgICBjcHUuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2xvbmUgPSBzcXVhcmUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgc3F1YXJlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGNsb25lLCBzcXVhcmUpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3BsYXllci1ib2FyZCBkaXZcIik7XG4gICAgcEJvYXJkLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgY29uc3QgY2xvbmUgPSBzcXVhcmUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBzcXVhcmUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoY2xvbmUsIHNxdWFyZSlcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZUJvYXJkKCkge1xuICAgIGNvbnN0IGNwdUJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcHUtYm9hcmRcIilcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgIH1cbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGNhbGxiYWNrKTtcblxuICAgIGZ1bmN0aW9uIGNhbGxiYWNrKG11dGF0aW9uTGlzdCwgb2JzZXJ2ZXIpIHtcbiAgICAgICAgbXV0YXRpb25MaXN0LmZvckVhY2gobXV0YXRpb24gPT4ge1xuICAgICAgICAgICAgaWYgKG11dGF0aW9uLnRhcmdldC5pZCA9PSBcImhpdFwiIHx8IG11dGF0aW9uLnRhcmdldC5jbGFzc05hbWUuaW5jbHVkZXMoXCJtaXNzXCIpKSB7XG4gICAgICAgICAgICAgICAgY3B1QXR0YWNrKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFRoZSAke211dGF0aW9uLnRhcmdldC5kYXRhc2V0Lnh9LCAke211dGF0aW9uLnRhcmdldC5kYXRhc2V0Lnl9IGhhcyBjaGFuZ2VkICR7bXV0YXRpb24uYXR0cmlidXRlTmFtZX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBvYnNlcnZlci5vYnNlcnZlKGNwdUJvYXJkLCBvcHRpb25zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdhbWVib2FyZEV2ZW50cygpIHtcbiAgICBjb25zdCBjcHVTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jcHVTcVwiKTtcbiAgICBjb25zb2xlLmxvZyhcIkZpcmUhXCIpXG4gICAgZ2FtZWJvYXJkRXZlbnRMb2dpYyhjcHVTcXVhcmVzLCBjcHVCb2FyZClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdhbWVib2FyZEV2ZW50TG9naWMoYm9hcmRTcXVhcmVzLCBib2FyZCkge1xuICAgIGJvYXJkU3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNxdWFyZS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGlwXCIpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYm9hcmQpXG4gICAgICAgICAgICAgICAgYm9hcmQucmVjZWl2ZUF0dGFjayhzcXVhcmUpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJvYXJkLm1pc3NlZEF0dGFjayhzcXVhcmUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbn0iLCJpbXBvcnQgXCIuLi9zdHlsZXMvbWFpbi5jc3NcIjtcbmltcG9ydCB7IGNyZWF0ZURPTSB9IGZyb20gXCIuL2dhbWVcIjtcblxuZXhwb3J0IGNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy5kYW1hZ2UgPSAwO1xuICAgICAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb3JkcyA9IFtdO1xuICAgIH1cbiAgICBcbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMuZGFtYWdlID09IHRoaXMubGVuZ3RoIC0gMSA/IHRoaXMuaXNTdW5rKCkgOiB0aGlzLmRhbWFnZSsrO1xuICAgICAgICByZXR1cm4gdGhpcy5kYW1hZ2U7XG4gICAgfVxuICAgIFxuICAgIGlzU3VuaygpIHtcbiAgICAgICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kYW1hZ2UrKztcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VuaztcbiAgICB9XG59O1xuXG5jcmVhdGVET00oKTsiLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9tYWluXCI7XG5pbXBvcnQgeyBzdGFydEdhbWUgfSBmcm9tIFwiLi9nYW1lXCI7XG5pbXBvcnQgeyByZXNldExpc3RlbmVycyB9IGZyb20gXCIuL2dhbWVkb21cIjtcblxuY29uc3QgcGxheWVyQm9hcmQgPSBuZXcgR2FtZWJvYXJkKFwicGxheWVyXCIsIFtdKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBsYXllckJvYXJkRXZlbnQoZGlyLCBsZW5ndGgpIHtcbiAgICByZXNldExpc3RlbmVycygpO1xuICAgIGNvbnN0IHBCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcGxheWVyLWJvYXJkIGRpdlwiKTtcblxuICAgIHBCb2FyZC5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmVudGVyXCIsICgpID0+IHtcbiAgICAgICAgICAgIHNoaXBWaXN1YWxGWChzcXVhcmUsIGRpciwgbGVuZ3RoKTtcbiAgICAgICAgfSlcblxuICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmlzdWFsU2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjdmlzdWFsaXplLXNoaXBcIik7XG4gICAgICAgICAgICBjb25zdCB2aXN1YWxFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjdmlzdWFsaXplLWVycm9yXCIpO1xuXG4gICAgICAgICAgICBpZiAodmlzdWFsRXJyb3IubGVuZ3RoID49IDEpIHtcbiAgICAgICAgICAgICAgICB2aXN1YWxFcnJvci5mb3JFYWNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVyci5pZCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmlzdWFsU2hpcC5mb3JFYWNoKHNxID0+IHtcbiAgICAgICAgICAgICAgICBzcS5pZCA9IFwiXCI7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2aXN1YWxFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjdmlzdWFsaXplLWVycm9yXCIpO1xuICAgICAgICAgICAgY29uc3QgY29vcmQgPSBbTnVtYmVyKHNxdWFyZS5kYXRhc2V0LngpLCBOdW1iZXIoc3F1YXJlLmRhdGFzZXQueSldO1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKGxlbmd0aCArIDEpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodmlzdWFsRXJyb3JbMF0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoY29vcmQsIGRpciwgc2hpcCk7XG4gICAgICAgICAgICBwbGF5ZXJCb2FyZC5zaGlwcy5wdXNoKHNoaXApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjaGVja1N0YXJ0R2FtZSgpO1xuICAgICAgICB9KTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBjaGVja1N0YXJ0R2FtZSgpIHtcbiAgICBjb25zdCByZW1haW5pbmdJbmRpY2F0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXAtcmVtYWluaW5nXCIpO1xuICAgIGNvbnN0IHJlbWFpbmluZyA9IDQgLSBwbGF5ZXJCb2FyZC5zaGlwcy5sZW5ndGg7XG5cbiAgICBpZiAocmVtYWluaW5nICE9IDApIHtcbiAgICAgICAgcmVtYWluaW5nSW5kaWNhdG9yLnRleHRDb250ZW50ID0gYFNoaXBzIGxlZnQ6ICR7cmVtYWluaW5nfWBcbiAgICAgICAgcmVzZXRMaXN0ZW5lcnMoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1zaGlwXCIpLmRpc2FibGVkID0gdHJ1ZTtcbiAgICByZW1haW5pbmdJbmRpY2F0b3IudGV4dENvbnRlbnQgPSBgU2hpcHMgZmxvYXRpbmc6IDRgXG4gICAgcmVzZXRMaXN0ZW5lcnMoKTtcbiAgICBzdGFydEdhbWUocGxheWVyQm9hcmQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRQbGF5ZXIoKSB7XG4gICAgY29uc3QgY3B1Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2NwdS1ib2FyZCBkaXZcIik7XG4gICAgcGxheWVyQm9hcmQuaGl0ID0gMDtcbiAgICBwbGF5ZXJCb2FyZC5taXNzID0gMDtcbiAgICBwbGF5ZXJCb2FyZC5zaGlwcyA9IFtdO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXNoaXBcIikuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXAtcmVtYWluaW5nXCIpLnRleHRDb250ZW50ID0gXCJTaGlwcyBsZWZ0OiA0XCI7XG4gICAgcmVzZXRMaXN0ZW5lcnMoY3B1Qm9hcmQpO1xufVxuXG4vLyBmdW5jdGlvbiByZXNldExpc3RlbmVycyhjcHUpIHtcbi8vICAgICBjb25zdCBwQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3BsYXllci1ib2FyZCBkaXZcIik7XG4vLyAgICAgcEJvYXJkLmZvckVhY2goc3F1YXJlID0+IHtcbi8vICAgICAgICAgY29uc3QgY2xvbmUgPSBzcXVhcmUuY2xvbmVOb2RlKHRydWUpO1xuLy8gICAgICAgICBzcXVhcmUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoY2xvbmUsIHNxdWFyZSlcbi8vICAgICB9KVxuXG4vLyAgICAgaWYgKGNwdSkge1xuLy8gICAgICAgICBjcHUuZm9yRWFjaChzcXVhcmUgPT4ge1xuLy8gICAgICAgICAgICAgY29uc3QgY2xvbmUgPSBzcXVhcmUuY2xvbmVOb2RlKHRydWUpO1xuLy8gICAgICAgICAgICAgc3F1YXJlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGNsb25lLCBzcXVhcmUpXG4vLyAgICAgICAgIH0pXG4vLyAgICAgfVxuLy8gfVxuXG5mdW5jdGlvbiBzaGlwVmlzdWFsRlgoc3F1YXJlLCBkaXIsIGxlbmd0aCkge1xuICAgIGNvbnN0IHNoaXBBcnIgPSBbc3F1YXJlXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5leHRTcTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBzd2l0Y2goZGlyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ1cFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFNxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYXllclNxW2RhdGEteD1cIiR7TnVtYmVyKHNxdWFyZS5kYXRhc2V0LngpIC0gaX1cIl1bZGF0YS15PVwiJHtzcXVhcmUuZGF0YXNldC55fVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcEFyci5wdXNoKG5leHRTcSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwRlhTdHlsZXMoc2hpcEFycik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0U3EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucGxheWVyU3FbZGF0YS14PVwiJHtzcXVhcmUuZGF0YXNldC54fVwiXVtkYXRhLXk9XCIke051bWJlcihzcXVhcmUuZGF0YXNldC55KSArIGl9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwQXJyLnB1c2gobmV4dFNxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBGWFN0eWxlcyhzaGlwQXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFNxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYXllclNxW2RhdGEteD1cIiR7c3F1YXJlLmRhdGFzZXQueH1cIl1bZGF0YS15PVwiJHtOdW1iZXIoc3F1YXJlLmRhdGFzZXQueSkgLSBpfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcEFyci5wdXNoKG5leHRTcSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwRlhTdHlsZXMoc2hpcEFycik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImRvd25cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRTcSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGF5ZXJTcVtkYXRhLXg9XCIke051bWJlcihzcXVhcmUuZGF0YXNldC54KSArIGl9XCJdW2RhdGEteT1cIiR7c3F1YXJlLmRhdGFzZXQueX1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBBcnIucHVzaChuZXh0U3EpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcEZYU3R5bGVzKHNoaXBBcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxufVxuXG5mdW5jdGlvbiBzaGlwRlhTdHlsZXMoc2hpcEFycikge1xuICAgICAgICBpZiAoc2hpcEFyci5ldmVyeShpdGVtID0+IGl0ZW0gIT09IG51bGwpKSB7XG5cbiAgICAgICAgICAgIGlmIChzaGlwQXJyLnNvbWUoaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5jb250YWlucyhcInNoaXBcIikpKSB7XG4gICAgICAgICAgICAgICAgc2hpcEFyci5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmlkID0gXCJ2aXN1YWxpemUtZXJyb3JcIjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2hpcEFyci5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uaWQgPSBcInZpc3VhbGl6ZS1zaGlwXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNoaXBBcnIuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmlkID0gXCJ2aXN1YWxpemUtZXJyb3JcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0cy9tYWluLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9