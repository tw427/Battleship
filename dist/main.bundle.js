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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    font-family: sans-serif;\n}\n\nbody {\n    display: grid;\n    grid-template: 1fr 1fr 10fr / 1fr 1fr;\n    align-items: center;\n    justify-items: center;\n    margin: 0;\n    height: 100vh;\n    width: 100vw;\n}\n\n.ship {\n    background-color: lightgreen;\n}\n\n.miss {\n    background-color: pink;\n}\n\n#hit {\n    background-color: rgb(255, 107, 107);\n}\n\ndiv.message-hidden {\n    display: none;\n}\n\n.sunk-message {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    grid-row: 2 / 3;\n    width: 420px;\n    height: 50%;\n\n    font-size: 24px;\n    font-weight: 600;\n}\n\n#player-board,\n#cpu-board {\n    display: grid;\n    grid-row: 3 / -1;\n    grid-template: repeat(10, 1fr) / repeat(10, 1fr);\n    width: 55%;\n    height: 55%;\n}\n\n#player-board {\n    grid-column: 2 / 3;\n}\n\n.playerSq,\n.cpuSq {\n    width: 100%;\n    height: 100%;\n    border: 1px solid black;\n}\n\n#cpu-board {\n    grid-column: 1 / 2;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,mBAAmB;IACnB,qBAAqB;IACrB,SAAS;IACT,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,YAAY;IACZ,WAAW;;IAEX,eAAe;IACf,gBAAgB;AACpB;;AAEA;;IAEI,aAAa;IACb,gBAAgB;IAChB,gDAAgD;IAChD,UAAU;IACV,WAAW;AACf;;AAEA;IACI,kBAAkB;AACtB;;AAEA;;IAEI,WAAW;IACX,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":["* {\n    font-family: sans-serif;\n}\n\nbody {\n    display: grid;\n    grid-template: 1fr 1fr 10fr / 1fr 1fr;\n    align-items: center;\n    justify-items: center;\n    margin: 0;\n    height: 100vh;\n    width: 100vw;\n}\n\n.ship {\n    background-color: lightgreen;\n}\n\n.miss {\n    background-color: pink;\n}\n\n#hit {\n    background-color: rgb(255, 107, 107);\n}\n\ndiv.message-hidden {\n    display: none;\n}\n\n.sunk-message {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    grid-row: 2 / 3;\n    width: 420px;\n    height: 50%;\n\n    font-size: 24px;\n    font-weight: 600;\n}\n\n#player-board,\n#cpu-board {\n    display: grid;\n    grid-row: 3 / -1;\n    grid-template: repeat(10, 1fr) / repeat(10, 1fr);\n    width: 55%;\n    height: 55%;\n}\n\n#player-board {\n    grid-column: 2 / 3;\n}\n\n.playerSq,\n.cpuSq {\n    width: 100%;\n    height: 100%;\n    border: 1px solid black;\n}\n\n#cpu-board {\n    grid-column: 1 / 2;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "boardEvent": () => (/* binding */ boardEvent)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/scripts/main.js");


function boardEvent(square) {
    square.forEach(sq => {
        sq.addEventListener("click", () => {
            if (!sq.classList.contains("ship")) {
                _main__WEBPACK_IMPORTED_MODULE_0__.cpuBoard.missedAttack(sq)
            } else if (["ship", "cpuSq"].every(className => sq.classList.contains(className))) {
                    _main__WEBPACK_IMPORTED_MODULE_0__.cpuBoard.receiveAttack(sq)
            }
        })
    })
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
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/scripts/main.js");


class Gameboard {
    constructor(id, ships) {
        this.id = id;
        this.ships = ships;
        this.board = createBoard();
        this.miss = 0;
        this.hit = 0;
    }

    placeShip(cord, dir, ship) {
        const directions = ["up", "left", "right", "down"];
        if (   cord[0] < 1 
            || cord[1] < 1
            || cord[0] > 10
            || cord[1] > 10
            || cord.length !== 2
            || !directions.includes(dir)) {
            return;
        }

        for (let i = 0; i < ship.length; i++) {
            switch(dir) {
                case 'up': if (cord[0] - ship.length < 1) {
                                break;
                            } else {
                                const square = document.querySelector(`.${this.id}Sq[data-x="${cord[0] - i}"][data-y="${cord[1]}"]`);
                                ship.cords.push([cord[0] - i, cord[1]]);
                                square.classList.add("ship");
                                break;
                            }
                case 'left': if (cord[1] - ship.length < 1) {
                                break;
                            } else {
                                const square = document.querySelector(`.${this.id}Sq[data-x="${cord[0]}"][data-y="${cord[1] - i}"]`);
                                ship.cords.push([cord[0], cord[1] - i]);
                                square.classList.add("ship");
                                break;
                            }
                case 'right': if (cord[1] + ship.length < 1) {
                                break;
                            } else {
                                const square = document.querySelector(`.${this.id}Sq[data-x="${cord[0]}"][data-y="${cord[1] + i}"]`);
                                ship.cords.push([cord[0], cord[1] + i]);
                                square.classList.add("ship");
                                break;
                            }
                case 'down': if (cord[0] + ship.length > 10) {
                                break;
                            } else {
                                const square = document.querySelector(`.${this.id}Sq[data-x="${cord[0] + i}"][data-y="${cord[1]}"]`);
                                ship.cords.push([cord[0] + i, cord[1]]);
                                square.classList.add("ship");
                                break;
                            }
            }
        }

        return true;
    }

    receiveAttack(square) {
        const ships = [_main__WEBPACK_IMPORTED_MODULE_0__.ship3, _main__WEBPACK_IMPORTED_MODULE_0__.ship4];
        
        if (!ships.every(ship => ship.sunk == true)) {
            ships.forEach(ship => {
                ship.cords.some(cord => {
                    if(cord[0] == square.dataset.x && cord[1] == square.dataset.y) {
                        ship.hit()
                        square.id = "hit";
                        ship.sunk == false ? this.hit++ : null;
                        // console.log(ship)
                        // console.log(this)
                    }
                })
            })
        }

        if (ships.every(ship => ship.sunk == true)) {
            const message = document.querySelector(".sunk-message")
            message.classList.remove("message-hidden")
        }
    }

    missedAttack(square) {
        square.classList.add("miss")
        this.miss++;
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
/* harmony export */   "DomMethods": () => (/* binding */ DomMethods)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/scripts/gameboard.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/scripts/game.js");
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

            (0,_game__WEBPACK_IMPORTED_MODULE_1__.boardEvent)([cpuSquare, playerSquare]);
            playerBox.appendChild(playerSquare);
            cpuBox.appendChild(cpuSquare);
        });
    }

    allSunkMessage() {
        const message = document.createElement("div");
        message.classList.add("message-hidden", "sunk-message")
        message.innerText = "All ships have been sunk!";
        body.appendChild(message)
    }

    createDOM = () => {
        this.gameContainers();
        this.gameboardSquares();
        this.allSunkMessage();
    }
}




/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship),
/* harmony export */   "cpuBoard": () => (/* binding */ cpuBoard),
/* harmony export */   "playerBoard": () => (/* binding */ playerBoard),
/* harmony export */   "ship1": () => (/* binding */ ship1),
/* harmony export */   "ship2": () => (/* binding */ ship2),
/* harmony export */   "ship3": () => (/* binding */ ship3),
/* harmony export */   "ship4": () => (/* binding */ ship4)
/* harmony export */ });
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _gamedom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gamedom */ "./src/scripts/gamedom.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ "./src/scripts/gameboard.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game */ "./src/scripts/game.js");





class Ship {
    constructor(length, id) {
        this.length = length;
        this.id = id;
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

const dom = new _gamedom__WEBPACK_IMPORTED_MODULE_1__.DomMethods();
dom.createDOM();

const ship1 = new Ship(4, 1);
const ship2 = new Ship(4, 2);
const ship3 = new Ship(4, 1);
const ship4 = new Ship(4, 2);

const playerBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_2__.Gameboard("player", [ship1, ship2]);
const cpuBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_2__.Gameboard("cpu", [ship3, ship4]);

playerBoard.placeShip([5, 5], "up", ship1);
playerBoard.placeShip([7, 5], "left", ship2);

cpuBoard.placeShip([5, 3], "up", ship3);
cpuBoard.placeShip([9, 5], "left", ship4);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7QUFFQSxZQUFZLGlEQUFVO0FBQ3RCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEQ0QjtBQUNXO0FBQ0E7QUFDTDs7QUFFM0I7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsZ0RBQVU7QUFDMUI7O0FBRU87QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLGlEQUFTO0FBQ2pDLHFCQUFxQixpREFBUzs7QUFFckM7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7VUN6Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWplc3QtdGVtcGxhdGUvLi9zcmMvc3R5bGVzL21haW4uY3NzIiwid2VicGFjazovL3dlYnBhY2stamVzdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1qZXN0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1qZXN0LXRlbXBsYXRlLy4vc3JjL3N0eWxlcy9tYWluLmNzcz9lODBhIiwid2VicGFjazovL3dlYnBhY2stamVzdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWplc3QtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stamVzdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWplc3QtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1qZXN0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1qZXN0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1qZXN0LXRlbXBsYXRlLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWplc3QtdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1qZXN0LXRlbXBsYXRlLy4vc3JjL3NjcmlwdHMvZ2FtZWRvbS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWplc3QtdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy9tYWluLmpzIiwid2VicGFjazovL3dlYnBhY2stamVzdC10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWplc3QtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay1qZXN0LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWplc3QtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWplc3QtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWplc3QtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnBhY2stamVzdC10ZW1wbGF0ZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2stamVzdC10ZW1wbGF0ZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1qZXN0LXRlbXBsYXRlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgMTBmciAvIDFmciAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG59XFxuXFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xcbn1cXG5cXG4jaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTA3LCAxMDcpO1xcbn1cXG5cXG5kaXYubWVzc2FnZS1oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc3Vuay1tZXNzYWdlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgd2lkdGg6IDQyMHB4O1xcbiAgICBoZWlnaHQ6IDUwJTtcXG5cXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4jcGxheWVyLWJvYXJkLFxcbiNjcHUtYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXJvdzogMyAvIC0xO1xcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMTAsIDFmcikgLyByZXBlYXQoMTAsIDFmcik7XFxuICAgIHdpZHRoOiA1NSU7XFxuICAgIGhlaWdodDogNTUlO1xcbn1cXG5cXG4jcGxheWVyLWJvYXJkIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbn1cXG5cXG4ucGxheWVyU3EsXFxuLmNwdVNxIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbiNjcHUtYm9hcmQge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsU0FBUztJQUNULGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVzs7SUFFWCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0RBQWdEO0lBQ2hELFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAxMGZyIC8gMWZyIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbn1cXG5cXG4ubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7XFxufVxcblxcbiNoaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxMDcsIDEwNyk7XFxufVxcblxcbmRpdi5tZXNzYWdlLWhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zdW5rLW1lc3NhZ2Uge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICB3aWR0aDogNDIwcHg7XFxuICAgIGhlaWdodDogNTAlO1xcblxcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbiNwbGF5ZXItYm9hcmQsXFxuI2NwdS1ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtcm93OiAzIC8gLTE7XFxuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMWZyKSAvIHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgd2lkdGg6IDU1JTtcXG4gICAgaGVpZ2h0OiA1NSU7XFxufVxcblxcbiNwbGF5ZXItYm9hcmQge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxufVxcblxcbi5wbGF5ZXJTcSxcXG4uY3B1U3Ege1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI2NwdS1ib2FyZCB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7Y3B1Qm9hcmR9IGZyb20gXCIuL21haW5cIlxuXG5leHBvcnQgZnVuY3Rpb24gYm9hcmRFdmVudChzcXVhcmUpIHtcbiAgICBzcXVhcmUuZm9yRWFjaChzcSA9PiB7XG4gICAgICAgIHNxLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXNxLmNsYXNzTGlzdC5jb250YWlucyhcInNoaXBcIikpIHtcbiAgICAgICAgICAgICAgICBjcHVCb2FyZC5taXNzZWRBdHRhY2soc3EpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFtcInNoaXBcIiwgXCJjcHVTcVwiXS5ldmVyeShjbGFzc05hbWUgPT4gc3EuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNwdUJvYXJkLnJlY2VpdmVBdHRhY2soc3EpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuLy8gV2lsbCBwcm9iYWJseSBjcmVhdGUgYSBnYW1lIGxvb3AgYnkuLi4gSGF2aW5nIHRoZSBBSSBmdW5jdGlvbiBiZSBydW4gd2l0aCBhIHNldFRpbWVvdXQgYWZ0ZXJcbi8vIHRoZSBwbGF5ZXIgaGFzIGF0dGFja2VkLi4uIFdlIGNvdWxkIGRpc3BsYXkgYSBtZXNzYWdlIG9mIFwiIEFJIGlzIGF0dGFja2luZy4uLiBcIiBhbmQgaXQgd2lsbCBydW5cbi8vIHRoZSBBSSBhdHRhY2sgZnVuY3Rpb24gYWZ0ZXIgc2F5IDUgc2Vjb25kc1xuXG4vLyBTdGVwIDVcbi8vIENyZWF0ZSBjb25kaXRpb25zIHNvIHRoYXQgdGhlIGdhbWUgZW5kcyBvbmNlIG9uZSBwbGF5ZXJzIHNoaXBzIGhhdmUgYWxsIGJlZW4gc3Vuay4gXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGFwcHJvcHJpYXRlIGZvciB0aGUgR2FtZSBtb2R1bGUuIiwiaW1wb3J0IHsgc2hpcDMsIHNoaXA0IH0gZnJvbSBcIi4vbWFpblwiO1xuXG5leHBvcnQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgc2hpcHMpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnNoaXBzID0gc2hpcHM7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBjcmVhdGVCb2FyZCgpO1xuICAgICAgICB0aGlzLm1pc3MgPSAwO1xuICAgICAgICB0aGlzLmhpdCA9IDA7XG4gICAgfVxuXG4gICAgcGxhY2VTaGlwKGNvcmQsIGRpciwgc2hpcCkge1xuICAgICAgICBjb25zdCBkaXJlY3Rpb25zID0gW1widXBcIiwgXCJsZWZ0XCIsIFwicmlnaHRcIiwgXCJkb3duXCJdO1xuICAgICAgICBpZiAoICAgY29yZFswXSA8IDEgXG4gICAgICAgICAgICB8fCBjb3JkWzFdIDwgMVxuICAgICAgICAgICAgfHwgY29yZFswXSA+IDEwXG4gICAgICAgICAgICB8fCBjb3JkWzFdID4gMTBcbiAgICAgICAgICAgIHx8IGNvcmQubGVuZ3RoICE9PSAyXG4gICAgICAgICAgICB8fCAhZGlyZWN0aW9ucy5pbmNsdWRlcyhkaXIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHN3aXRjaChkaXIpIHtcbiAgICAgICAgICAgICAgICBjYXNlICd1cCc6IGlmIChjb3JkWzBdIC0gc2hpcC5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuaWR9U3FbZGF0YS14PVwiJHtjb3JkWzBdIC0gaX1cIl1bZGF0YS15PVwiJHtjb3JkWzFdfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwLmNvcmRzLnB1c2goW2NvcmRbMF0gLSBpLCBjb3JkWzFdXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ2xlZnQnOiBpZiAoY29yZFsxXSAtIHNoaXAubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLmlkfVNxW2RhdGEteD1cIiR7Y29yZFswXX1cIl1bZGF0YS15PVwiJHtjb3JkWzFdIC0gaX1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcC5jb3Jkcy5wdXNoKFtjb3JkWzBdLCBjb3JkWzFdIC0gaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICdyaWdodCc6IGlmIChjb3JkWzFdICsgc2hpcC5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuaWR9U3FbZGF0YS14PVwiJHtjb3JkWzBdfVwiXVtkYXRhLXk9XCIke2NvcmRbMV0gKyBpfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwLmNvcmRzLnB1c2goW2NvcmRbMF0sIGNvcmRbMV0gKyBpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ2Rvd24nOiBpZiAoY29yZFswXSArIHNoaXAubGVuZ3RoID4gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5pZH1TcVtkYXRhLXg9XCIke2NvcmRbMF0gKyBpfVwiXVtkYXRhLXk9XCIke2NvcmRbMV19XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXAuY29yZHMucHVzaChbY29yZFswXSArIGksIGNvcmRbMV1dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZWNlaXZlQXR0YWNrKHNxdWFyZSkge1xuICAgICAgICBjb25zdCBzaGlwcyA9IFtzaGlwMywgc2hpcDRdO1xuICAgICAgICBcbiAgICAgICAgaWYgKCFzaGlwcy5ldmVyeShzaGlwID0+IHNoaXAuc3VuayA9PSB0cnVlKSkge1xuICAgICAgICAgICAgc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgICAgICBzaGlwLmNvcmRzLnNvbWUoY29yZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGNvcmRbMF0gPT0gc3F1YXJlLmRhdGFzZXQueCAmJiBjb3JkWzFdID09IHNxdWFyZS5kYXRhc2V0LnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXAuaGl0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZS5pZCA9IFwiaGl0XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwLnN1bmsgPT0gZmFsc2UgPyB0aGlzLmhpdCsrIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNoaXApXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hpcHMuZXZlcnkoc2hpcCA9PiBzaGlwLnN1bmsgPT0gdHJ1ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1bmstbWVzc2FnZVwiKVxuICAgICAgICAgICAgbWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKFwibWVzc2FnZS1oaWRkZW5cIilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1pc3NlZEF0dGFjayhzcXVhcmUpIHtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpXG4gICAgICAgIHRoaXMubWlzcysrO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJvYXJkKCkge1xuICAgIGxldCBib2FyZEFyciA9IFtdO1xuXG4gICAgbGV0IHggPSAxO1xuICAgIGxldCB5ID0gMTtcblxuICAgIHdoaWxlKHkgPD0gMTAgJiYgeCA8PSAxMCkge1xuICAgICAgICBpZih4ID09IDEwICYmIHkgPT0gMTApIHtcbiAgICAgICAgICAgIGJvYXJkQXJyLnB1c2goYCR7eH0tJHt5fWApXG4gICAgICAgICAgICByZXR1cm4gYm9hcmRBcnI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoeSA9PSAxMCkge1xuICAgICAgICAgICAgYm9hcmRBcnIucHVzaChgJHt4fS0ke3l9YClcbiAgICAgICAgICAgIHgrK1xuICAgICAgICAgICAgeSA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBib2FyZEFyci5wdXNoKGAke3h9LSR7eX1gKTtcbiAgICAgICAgeSsrXG4gICAgfVxufSIsIi8vIGltcG9ydCBcIi4uL3N0eWxlcy9tYWluLmNzc1wiO1xuaW1wb3J0IHtjcmVhdGVCb2FyZH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCJcbmltcG9ydCB7Ym9hcmRFdmVudH0gZnJvbSBcIi4vZ2FtZVwiO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbmV4cG9ydCBjbGFzcyBEb21NZXRob2RzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICBnYW1lQ29udGFpbmVycygpIHtcbiAgICAgICAgY29uc3QgcGxheWVyQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgY3B1Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICBwbGF5ZXJCb3guaWQgPSBcInBsYXllci1ib2FyZFwiO1xuICAgICAgICBjcHVCb3guaWQgPSBcImNwdS1ib2FyZFwiO1xuXG4gICAgICAgIGJvZHkuYXBwZW5kKHBsYXllckJveCwgY3B1Qm94KVxuICAgIH1cblxuICAgIGdhbWVib2FyZFNxdWFyZXMoKSB7XG4gICAgICAgIGxldCBuZXdCb2FyZCA9IGNyZWF0ZUJvYXJkKCk7XG4gICAgICAgIGNvbnN0IHBsYXllckJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyLWJvYXJkXCIpO1xuICAgICAgICBjb25zdCBjcHVCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNwdS1ib2FyZFwiKTtcblxuICAgICAgICBuZXdCb2FyZC5mb3JFYWNoKGNvcmQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGxheWVyU3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnN0IGNwdVNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb25zdCBzcGxpdENvcmRzID0gY29yZC5zcGxpdChcIi1cIik7XG5cbiAgICAgICAgICAgIHBsYXllclNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIiwgc3BsaXRDb3Jkc1swXSk7XG4gICAgICAgICAgICBwbGF5ZXJTcXVhcmUuc2V0QXR0cmlidXRlKFwiZGF0YS15XCIsIHNwbGl0Q29yZHNbMV0pO1xuICAgICAgICAgICAgY3B1U3F1YXJlLnNldEF0dHJpYnV0ZShcImRhdGEteFwiLCBzcGxpdENvcmRzWzBdKTtcbiAgICAgICAgICAgIGNwdVNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIiwgc3BsaXRDb3Jkc1sxXSk7XG4gICAgICAgICAgICBwbGF5ZXJTcXVhcmUuY2xhc3NMaXN0LmFkZChcInBsYXllclNxXCIpO1xuICAgICAgICAgICAgY3B1U3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJjcHVTcVwiKTtcblxuICAgICAgICAgICAgYm9hcmRFdmVudChbY3B1U3F1YXJlLCBwbGF5ZXJTcXVhcmVdKTtcbiAgICAgICAgICAgIHBsYXllckJveC5hcHBlbmRDaGlsZChwbGF5ZXJTcXVhcmUpO1xuICAgICAgICAgICAgY3B1Qm94LmFwcGVuZENoaWxkKGNwdVNxdWFyZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFsbFN1bmtNZXNzYWdlKCkge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwibWVzc2FnZS1oaWRkZW5cIiwgXCJzdW5rLW1lc3NhZ2VcIilcbiAgICAgICAgbWVzc2FnZS5pbm5lclRleHQgPSBcIkFsbCBzaGlwcyBoYXZlIGJlZW4gc3VuayFcIjtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChtZXNzYWdlKVxuICAgIH1cblxuICAgIGNyZWF0ZURPTSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5nYW1lQ29udGFpbmVycygpO1xuICAgICAgICB0aGlzLmdhbWVib2FyZFNxdWFyZXMoKTtcbiAgICAgICAgdGhpcy5hbGxTdW5rTWVzc2FnZSgpO1xuICAgIH1cbn1cblxuXG4iLCJpbXBvcnQgXCIuLi9zdHlsZXMvbWFpbi5jc3NcIjtcbmltcG9ydCB7IERvbU1ldGhvZHMgfSBmcm9tIFwiLi9nYW1lZG9tXCI7XG5pbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIlxuaW1wb3J0IHsgZ2V0U2hpcHMgfSBmcm9tIFwiLi9nYW1lXCI7XG5cbmV4cG9ydCBjbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGgsIGlkKSB7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuZGFtYWdlID0gMDtcbiAgICAgICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29yZHMgPSBbXTtcbiAgICB9XG4gICAgXG4gICAgaGl0KCkge1xuICAgICAgICB0aGlzLmRhbWFnZSA9PSB0aGlzLmxlbmd0aCAtIDEgPyB0aGlzLmlzU3VuaygpIDogdGhpcy5kYW1hZ2UrKztcbiAgICAgICAgcmV0dXJuIHRoaXMuZGFtYWdlO1xuICAgIH1cbiAgICBcbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIHRoaXMuc3VuayA9IHRydWU7XG4gICAgICAgIHRoaXMuZGFtYWdlKys7XG4gICAgICAgIHJldHVybiB0aGlzLnN1bms7XG4gICAgfVxufTtcblxuY29uc3QgZG9tID0gbmV3IERvbU1ldGhvZHMoKTtcbmRvbS5jcmVhdGVET00oKTtcblxuZXhwb3J0IGNvbnN0IHNoaXAxID0gbmV3IFNoaXAoNCwgMSk7XG5leHBvcnQgY29uc3Qgc2hpcDIgPSBuZXcgU2hpcCg0LCAyKTtcbmV4cG9ydCBjb25zdCBzaGlwMyA9IG5ldyBTaGlwKDQsIDEpO1xuZXhwb3J0IGNvbnN0IHNoaXA0ID0gbmV3IFNoaXAoNCwgMik7XG5cbmV4cG9ydCBjb25zdCBwbGF5ZXJCb2FyZCA9IG5ldyBHYW1lYm9hcmQoXCJwbGF5ZXJcIiwgW3NoaXAxLCBzaGlwMl0pO1xuZXhwb3J0IGNvbnN0IGNwdUJvYXJkID0gbmV3IEdhbWVib2FyZChcImNwdVwiLCBbc2hpcDMsIHNoaXA0XSk7XG5cbnBsYXllckJvYXJkLnBsYWNlU2hpcChbNSwgNV0sIFwidXBcIiwgc2hpcDEpO1xucGxheWVyQm9hcmQucGxhY2VTaGlwKFs3LCA1XSwgXCJsZWZ0XCIsIHNoaXAyKTtcblxuY3B1Qm9hcmQucGxhY2VTaGlwKFs1LCAzXSwgXCJ1cFwiLCBzaGlwMyk7XG5jcHVCb2FyZC5wbGFjZVNoaXAoWzksIDVdLCBcImxlZnRcIiwgc2hpcDQpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3NjcmlwdHMvbWFpbi5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==