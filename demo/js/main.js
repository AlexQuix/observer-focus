/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_focus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/focus */ \"./src/utils/focus.ts\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/utils */ \"./src/utils/utils.ts\");\n\n\n\nfunction core() {\n  var containers = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.queryDocument)(\".container-command\");\n  var wrapperCards = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.queryDocument)(\".comands-wrapper-cards\");\n  var cards = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.queryDocument)(\".comands-card\");\n  var wrapperListening = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.queryDocument)(\".comands-listening\");\n}\n\nfunction commenceApp() {\n  var optionFocus = {\n    query: \".command-observer-focus\"\n  };\n  var focus = new _utils_focus__WEBPACK_IMPORTED_MODULE_0__.default(optionFocus);\n  window.onscroll = focus.verifyFocus.bind(focus);\n}\n\nwindow.addEventListener(\"load\", commenceApp);\n\n//# sourceURL=webpack://frontend-command/./src/index.ts?");

/***/ }),

/***/ "./src/utils/command.ts":
/*!******************************!*\
  !*** ./src/utils/command.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Command\": () => (/* binding */ Command)\n/* harmony export */ });\nvar Command =\n/** @class */\nfunction () {\n  function Command(element) {\n    this.element = element;\n  }\n\n  Command.prototype.onfocus = function () {\n    console.log(this.element);\n  };\n\n  Command.prototype.oncommand = function () {};\n\n  Command.prototype.onlosefocus = function () {\n    console.log(this.element);\n  };\n\n  return Command;\n}();\n\n\n\n//# sourceURL=webpack://frontend-command/./src/utils/command.ts?");

/***/ }),

/***/ "./src/utils/focus.ts":
/*!****************************!*\
  !*** ./src/utils/focus.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils/utils.ts\");\n\n\nvar Focus =\n/** @class */\nfunction () {\n  function Focus(option) {\n    this.focusCommand = undefined;\n    debugger;\n    this.contCommands = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.putCommandInsideElement)((0,_utils__WEBPACK_IMPORTED_MODULE_0__.queryDocument)(option.query));\n    this.pointDetect = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getPointDetect)();\n    this.discoverFocus();\n  }\n\n  Focus.prototype.discoverFocus = function () {\n    for (var _i = 0, _a = this.contCommands; _i < _a.length; _i++) {\n      var contcommand = _a[_i];\n      var range = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getRange)(contcommand);\n      var result = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.hasFocus)(this.pointDetect, range);\n\n      if (result) {\n        if (this.focusCommand) {\n          (0,_utils__WEBPACK_IMPORTED_MODULE_0__.removeClassName)(this.focusCommand);\n          this.focusCommand.command.onlosefocus();\n        }\n\n        this.focusCommand = contcommand;\n        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.attachClassName)(this.focusCommand);\n        this.focusCommand.command.onfocus();\n        break;\n      }\n    }\n  };\n\n  Focus.prototype.verifyFocus = function () {\n    var range = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getRange)(this.focusCommand);\n    var result = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.hasFocus)(this.pointDetect, range);\n\n    if (!result) {\n      this.discoverFocus();\n    }\n  };\n\n  Object.defineProperty(Focus.prototype, \"ContCommands\", {\n    get: function () {\n      return this.contCommands;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  return Focus;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Focus);\n\n//# sourceURL=webpack://frontend-command/./src/utils/focus.ts?");

/***/ }),

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reduce\": () => (/* binding */ reduce),\n/* harmony export */   \"queryDocument\": () => (/* binding */ queryDocument),\n/* harmony export */   \"putCommandInsideElement\": () => (/* binding */ putCommandInsideElement),\n/* harmony export */   \"attachClassName\": () => (/* binding */ attachClassName),\n/* harmony export */   \"removeClassName\": () => (/* binding */ removeClassName),\n/* harmony export */   \"hasFocus\": () => (/* binding */ hasFocus),\n/* harmony export */   \"getRange\": () => (/* binding */ getRange),\n/* harmony export */   \"getPointDetect\": () => (/* binding */ getPointDetect)\n/* harmony export */ });\n/* harmony import */ var _command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./command */ \"./src/utils/command.ts\");\n\n\nvar reduce = function (acummulator, cb) {\n  return cb(acummulator);\n};\n\nvar queryDocument = function (selector) {\n  var contElements = document.querySelectorAll(selector);\n  return contElements;\n};\n\nfunction putCommandInsideElement(contElements) {\n  debugger;\n  var contCommands = [];\n\n  for (var _i = 0, contElements_1 = contElements; _i < contElements_1.length; _i++) {\n    var contelement = contElements_1[_i];\n    var contcommand = contelement;\n    contcommand.command = new _command__WEBPACK_IMPORTED_MODULE_0__.Command(contelement);\n    contCommands.push(contcommand);\n  }\n\n  return contCommands;\n}\n\n;\n\nfunction attachClassName(element) {\n  element.classList.add(\"command-focus\");\n}\n\n;\n\nfunction removeClassName(element) {\n  element.classList.remove(\"command-focus\");\n}\n\n;\n\nfunction hasFocus(pointDetect, range) {\n  var minRange = range.minRange,\n      maxRange = range.maxRange;\n\n  if (Math.sign(minRange) === -1) {\n    // minRange no puede retornar un negativo\n    return false;\n  }\n\n  if (pointDetect >= minRange && pointDetect <= maxRange) {\n    return true;\n  }\n\n  return false;\n}\n\nfunction getRange(element) {\n  var minRange = element.offsetTop - scrollY;\n  var maxRange = element.clientHeight + minRange;\n  return {\n    minRange: minRange,\n    maxRange: maxRange\n  };\n}\n\nfunction getPointDetect() {\n  return window.innerHeight / 2;\n}\n\n\n\n//# sourceURL=webpack://frontend-command/./src/utils/utils.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;