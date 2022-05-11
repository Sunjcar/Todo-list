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

/***/ "./src/displayModal.js":
/*!*****************************!*\
  !*** ./src/displayModal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst display = () => {\n\n    //Cache Dom\n    const addProject = document.getElementById('.add-project')\n    const modal = document.getElementById('modal')\n\n    addProject.addEventListener('click', () => {\n        resetForm();\n        modal.style.display = 'block'\n        console.log('hello')\n    })\n\n    function resetForm(){\n        document.querySelector('.form').reset();\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);\n\n//# sourceURL=webpack://todo-list/./src/displayModal.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst header = () => {\n    //Creates Header Elements \n    const header = document.createElement('div');\n    header.classList.add('header');\n\n    const span = document.createElement('span');\n    span.classList.add(\"material-symbols-outlined\");\n    span.textContent = 'event_avilable'\n    \n    const headText = document.createElement('div');\n    headText.classList.add('head-text');\n    headText.textContent = 'To-Do List';\n\n    document.body.appendChild(header);\n    header.appendChild(span);\n    header.appendChild(headText);\n\n}; \n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n\n//# sourceURL=webpack://todo-list/./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar */ \"./src/sidebar.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ \"./src/modal.js\");\n/* harmony import */ var _displayModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayModal */ \"./src/displayModal.js\");\n\n\n\n\n\n\n//Cache Dom\nconst addproject = document.querySelector('.add-content')\nconst moda = document.getElementById('modal');\n\n\nfunction render(){\n    (0,_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    (0,_sidebar__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    (0,_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    (0,_displayModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}render();\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\n    //Cache Dom\n    \n    const modal = document.getElementById('modal')\n    const modalContent = document.createElement('modal-content');\n    modalContent.classList.add('modal-content');\n\n    const form = document.createElement('form');\n    form.classList = ('form')\n\n    const titleInput = document.createElement('input')\n    titleInput.classList.add('title')\n    titleInput.setAttribute('type', 'text')\n\n    //Create Elements\n    modal.appendChild(modalContent);\n    modalContent.appendChild(form)\n    form.appendChild(titleInput);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://todo-list/./src/modal.js?");

/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sidebar = () => {\n    //Create Sidebar Elements\n    const sidebar = document.createElement('div');\n    sidebar.classList.add('sidebar');\n    //Container for styling\n    const dayContent = document.createElement('div')\n    dayContent.classList.add('content')\n    const weekContent = document.createElement('div')\n    weekContent.classList.add('content')\n    const projectContent = document.createElement('div')\n    projectContent.classList.add('content')\n    const addContent = document.createElement('div');\n    addContent.classList.add('add-content')\n    addContent.setAttribute('id', 'add-project')\n    //Content\n    const today = document.createElement('div');\n    today.classList.add('today');\n    today.textContent = 'Today'\n\n    const todayIcon = document.createElement('span');\n    todayIcon.classList.add(\"material-symbols-outlined\")\n    todayIcon.textContent = 'calendar_today'\n\n    const week = document.createElement('div');\n    week.classList.add('week');\n    week.textContent = 'Week'\n\n    \n    const weekIcon = document.createElement('span');\n    weekIcon.classList.add(\"material-symbols-outlined\")\n    weekIcon.textContent = 'date_range'\n\n    const projects = document.createElement('div')\n    projects.classList.add('projects')\n    projects.textContent = 'Projects'\n\n    const projectsIcon = document.createElement('span');\n    projectsIcon.classList.add(\"material-symbols-outlined\")\n    projectsIcon.textContent = 'receipt_long'\n\n    const addIcon = document.createElement('span')\n    addIcon.classList.add(\"material-symbols-outlined\")\n    addIcon.textContent = 'add'\n\n    const addproject = document.createElement('div')\n    addproject.classList.add('add-project')\n    addproject.textContent = \"Add Project\"\n\n    document.body.appendChild(sidebar);\n    sidebar.appendChild(dayContent);\n    sidebar.appendChild(weekContent);\n    sidebar.appendChild(projectContent);\n    sidebar.appendChild(addContent)\n    dayContent.appendChild(todayIcon);\n    dayContent.appendChild(today);\n    weekContent.appendChild(weekIcon);\n    weekContent.appendChild(week);\n    projectContent.appendChild(projectsIcon);\n    projectContent.appendChild(projects);\n    addContent.appendChild(addIcon)\n    addContent.appendChild(addproject)\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sidebar);\n\n//# sourceURL=webpack://todo-list/./src/sidebar.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;