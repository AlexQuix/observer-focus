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

/***/ "./demo/focus-card/ts/index.ts":
/*!*************************************!*\
  !*** ./demo/focus-card/ts/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/index */ \"./src/index.ts\");\n\n\nfunction execApp() {\n  let wrapperObserverFocus = (0,_src_index__WEBPACK_IMPORTED_MODULE_0__.changeStructureElement)(\".wrapper-observer-focus\");\n  let observer = document.querySelector(\".wrapper-observer-focus\");\n  observer.observerFocus.onfocus = handleFocus;\n  observer.observerFocus.onlosefocus = handleLosefocus;\n  (0,_src_index__WEBPACK_IMPORTED_MODULE_0__.executeFocus)(wrapperObserverFocus);\n}\n\nfunction handleFocus(e) {\n  console.log(e);\n}\n\nfunction handleLosefocus(e) {\n  console.log(e);\n}\n\nwindow.onload = execApp;\n\n//# sourceURL=webpack://observer-focus/./demo/focus-card/ts/index.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeStructureElement\": () => (/* binding */ changeStructureElement),\n/* harmony export */   \"executeFocus\": () => (/* binding */ executeFocus)\n/* harmony export */ });\n/* harmony import */ var _utils_focus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/focus */ \"./src/utils/focus.ts\");\n/* harmony import */ var _utils_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/container */ \"./src/utils/container.ts\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/utils */ \"./src/utils/utils.ts\");\n\n\n\n\nfunction changeStructureElement(query = \".wrapper-observer-focus\") {\n  let wrapperFocus = (0,_utils_container__WEBPACK_IMPORTED_MODULE_1__.putStructureElement)((0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.queryDocument)(query));\n  return wrapperFocus;\n}\n\nfunction executeFocus(wrapperFocus) {\n  let focus = new _utils_focus__WEBPACK_IMPORTED_MODULE_0__.Focus(wrapperFocus);\n  window.onscroll = focus.verifyFocus.bind(focus);\n}\n\n\n\n//# sourceURL=webpack://observer-focus/./src/index.ts?");

/***/ }),

/***/ "./src/utils/container.ts":
/*!********************************!*\
  !*** ./src/utils/container.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ContainerFocus\": () => (/* binding */ ContainerFocus),\n/* harmony export */   \"putStructureElement\": () => (/* binding */ putStructureElement)\n/* harmony export */ });\nclass ContainerFocus {\n  constructor(onfocus, onlosefocus) {\n    this.onfocus = e => {};\n\n    this.onlosefocus = e => {};\n\n    if (onfocus) {\n      this.onfocus = onfocus;\n    }\n\n    if (onlosefocus) {\n      this.onlosefocus = onlosefocus;\n    }\n  }\n\n}\n\n;\n\nfunction putStructureElement(divWrapperObserverFocus) {\n  let divObserverFocus = [];\n\n  for (let element of divWrapperObserverFocus) {\n    let divfocus = element;\n    divfocus.observerFocus = new ContainerFocus();\n    divObserverFocus.push(divfocus);\n  }\n\n  return divObserverFocus;\n}\n\n;\n\n\n//# sourceURL=webpack://observer-focus/./src/utils/container.ts?");

/***/ }),

/***/ "./src/utils/focus.ts":
/*!****************************!*\
  !*** ./src/utils/focus.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Focus\": () => (/* binding */ Focus),\n/* harmony export */   \"makeEvent\": () => (/* binding */ makeEvent),\n/* harmony export */   \"throwEvent\": () => (/* binding */ throwEvent)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils/utils.ts\");\n\n\nfunction makeEvent(type, target) {\n  let event = {\n    type,\n    target\n  };\n  return event;\n}\n\nfunction throwEvent(element, type) {\n  let event = makeEvent(type, element);\n\n  switch (type) {\n    case \"losefocus\":\n      if (element.observerFocus.onlosefocus) {\n        element.observerFocus.onlosefocus(event);\n      }\n\n      break;\n\n    case \"focus\":\n      if (element.observerFocus.onfocus) {\n        element.observerFocus.onfocus(event);\n      }\n\n      break;\n  }\n}\n\nclass Focus {\n  constructor(divObserverFocus) {\n    this.divObserverFocus = divObserverFocus;\n    this.isFirstExecution = true;\n    this.contFocused = this.divObserverFocus[0];\n    this.pointDetect = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getPointDetect)();\n    this.discoverFocus();\n  }\n\n  focusingContainer(element) {\n    if (!this.isFirstExecution) {\n      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.removeClassName)(this.contFocused);\n      throwEvent(this.contFocused, \"losefocus\");\n    }\n\n    this.contFocused = element;\n    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.attachClassName)(this.contFocused);\n    throwEvent(this.contFocused, \"focus\");\n    this.isFirstExecution = false;\n  }\n\n  discoverFocus() {\n    for (let element of this.divObserverFocus) {\n      let range = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getRange)(element);\n      let result = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.hasFocus)(this.pointDetect, range);\n\n      if (result) {\n        this.focusingContainer(element);\n        break;\n      }\n    }\n  }\n\n  verifyFocus() {\n    let range = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getRange)(this.contFocused);\n    let result = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.hasFocus)(this.pointDetect, range);\n\n    if (!result) {\n      this.discoverFocus();\n    }\n  }\n\n  get DivObserverFocus() {\n    return this.divObserverFocus;\n  }\n\n}\n\n\n\n//# sourceURL=webpack://observer-focus/./src/utils/focus.ts?");

/***/ }),

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reduce\": () => (/* binding */ reduce),\n/* harmony export */   \"queryDocument\": () => (/* binding */ queryDocument),\n/* harmony export */   \"attachClassName\": () => (/* binding */ attachClassName),\n/* harmony export */   \"removeClassName\": () => (/* binding */ removeClassName),\n/* harmony export */   \"hasFocus\": () => (/* binding */ hasFocus),\n/* harmony export */   \"getRange\": () => (/* binding */ getRange),\n/* harmony export */   \"getPointDetect\": () => (/* binding */ getPointDetect),\n/* harmony export */   \"genereUniqueID\": () => (/* binding */ genereUniqueID)\n/* harmony export */ });\nlet reduce = (acummulator, cb) => cb(acummulator);\n\nconst queryDocument = selector => {\n  let contElements = document.querySelectorAll(selector);\n  return contElements;\n};\n\nfunction genereUniqueID() {\n  let time = new Date().getTime();\n  let random = Math.floor(Math.random() * 100000);\n  let id = `obs-focus-${time.toString(32)}-${random.toString(16)}`;\n  return id;\n}\n\nfunction attachClassName(element) {\n  element.classList.add(\"focused\");\n}\n\n;\n\nfunction removeClassName(element) {\n  element.classList.remove(\"focused\");\n}\n\n;\n\nfunction hasFocus(pointDetect, range) {\n  let {\n    minRange,\n    maxRange\n  } = range;\n\n  if (Math.sign(minRange) === -1) {\n    return false;\n  }\n\n  if (pointDetect >= minRange && pointDetect <= maxRange) {\n    return true;\n  }\n\n  return false;\n}\n\nfunction getRange(element) {\n  let minRange = element.offsetTop - window.scrollY;\n  let maxRange = element.clientHeight + minRange;\n  return {\n    minRange,\n    maxRange\n  };\n}\n\nfunction getPointDetect() {\n  return window.innerHeight / 2;\n}\n\n\n\n//# sourceURL=webpack://observer-focus/./src/utils/utils.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./demo/focus-card/ts/index.ts");
/******/ 	
/******/ })()
;